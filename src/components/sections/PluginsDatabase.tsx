'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { ExtendedPlugin } from '@/types/pluginTypes';
import { PluginCard } from '@/components/ui/PluginCard';
import { PluginListItem } from '@/components/ui/PluginListItem';
import { FeaturedPlugins } from '@/components/ui/FeaturedPlugins';
import { ViewToggle } from '@/components/ui/ViewToggle';
import { useToolkit, useViewMode } from '@/hooks/useToolkit';
import { exportToolkitAsPDF } from '@/lib/exportPDF';
import { ToastProvider, useToast } from '@/components/ui/Toast';
import { Search, Heart, Download, Filter, X } from 'lucide-react';

// Import plugin data
import allPluginsData from '@/data/plugins/allPlugins.json';

const allPlugins: ExtendedPlugin[] = allPluginsData as unknown as ExtendedPlugin[];

type FilterMode = 'all' | 'toolkit';

// Quick filter options for pill buttons
const QUICK_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'Synthesizer', label: 'Synths' },
  { id: 'Effect', label: 'Effects' },
  { id: 'Sampler', label: 'Samplers' },
  { id: 'Utility', label: 'Utilities' },
  { id: 'Dynamics', label: 'Dynamics' },
];

// Inner component that uses toast
const PluginsDatabaseInner = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFamily, setSelectedFamily] = useState<string>('all');
  const [selectedEdition, setSelectedEdition] = useState<'all' | 'all-plugins' | 'signature' | 'producer'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'family' | 'rating'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterMode, setFilterMode] = useState<FilterMode>('all');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Ref for search input
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Custom hooks
  const { toolkit, toggleToolkit, isInToolkit, toolkitCount } = useToolkit();
  const { viewMode, setViewMode } = useViewMode();
  const { addToast } = useToast();

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // CMD/CTRL + K or / to focus search
      if ((e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key === 'k')) && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }

      // ESC to clear filters or blur search
      if (e.key === 'Escape') {
        if (document.activeElement === searchInputRef.current) {
          searchInputRef.current?.blur();
        } else if (searchTerm || selectedFamily !== 'all') {
          clearAllFilters();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchTerm, selectedFamily]);

  // Get toolkit plugins for export
  const toolkitPlugins = useMemo(() => {
    return allPlugins.filter(p => toolkit.includes(p.id));
  }, [toolkit]);

  // Handle toolkit toggle with toast notification
  const handleToggleToolkit = (pluginId: string) => {
    const plugin = allPlugins.find(p => p.id === pluginId);
    const wasInToolkit = isInToolkit(pluginId);
    toggleToolkit(pluginId);

    if (plugin) {
      if (wasInToolkit) {
        addToast(`${plugin.name} removed from Toolkit`, 'info');
      } else {
        addToast(`${plugin.name} added to Toolkit`, 'success');
      }
    }
  };

  // Apply filters and sorting
  const displayedPlugins = useMemo(() => {
    let result = [...allPlugins];

    // Apply toolkit filter first
    if (filterMode === 'toolkit') {
      result = result.filter(plugin => toolkit.includes(plugin.id));
    }

    // Apply search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(plugin =>
        plugin.name.toLowerCase().includes(term) ||
        plugin.family.toLowerCase().includes(term) ||
        plugin.tags.some(tag => tag.label.toLowerCase().includes(term)) ||
        plugin.bestUsedFor.some(useCase => useCase.toLowerCase().includes(term))
      );
    }

    // Apply family filter (including quick filters)
    if (selectedFamily !== 'all') {
      result = result.filter(plugin =>
        plugin.category.toLowerCase().includes(selectedFamily.toLowerCase()) ||
        plugin.family.toLowerCase().includes(selectedFamily.toLowerCase()) ||
        plugin.pluginType?.toLowerCase().includes(selectedFamily.toLowerCase())
      );
    }

    // Apply edition filter
    if (selectedEdition !== 'all') {
      result = result.filter(plugin => {
        if (selectedEdition === 'all-plugins') return plugin.pricingBadge === 'all-plugins';
        if (selectedEdition === 'signature') return ['signature', 'all-plugins'].includes(plugin.pricingBadge);
        if (selectedEdition === 'producer') return ['producer', 'signature', 'all-plugins'].includes(plugin.pricingBadge);
        return true;
      });
    }

    // Apply sorting
    result.sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'name') comparison = a.name.localeCompare(b.name);
      else if (sortBy === 'family') comparison = a.family.localeCompare(b.family);
      else if (sortBy === 'rating') comparison = a.rating - b.rating;
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [searchTerm, selectedFamily, selectedEdition, sortBy, sortOrder, filterMode, toolkit]);

  const handleExportToolkit = () => {
    exportToolkitAsPDF(toolkitPlugins);
    addToast('Generating PDF reference sheet...', 'success');
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedFamily('all');
    setSelectedEdition('all');
    setSortBy('name');
    setSortOrder('asc');
    setFilterMode('all');
  };

  return (
    <section id="plugins-database" className="page-section animate-fade">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-gradient">FL Studio</span>
              <span className="text-white"> Plugin Database</span>
            </h2>
            <p className="text-[var(--text-muted)]">
              Browse and filter the complete collection of FL Studio native plugins.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Toolkit Counter */}
            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${toolkitCount > 0 ? 'bg-pink-500/10 border border-pink-500/20' : 'bg-white/5 border border-white/5 opacity-50'}`}>
              <Heart className={`w-4 h-4 ${toolkitCount > 0 ? 'text-pink-400' : 'text-gray-500'}`} />
              <span className={`text-sm font-bold ${toolkitCount > 0 ? 'text-pink-400' : 'text-gray-500'}`}>{toolkitCount}</span>
              <span className={`text-xs hidden sm:inline ${toolkitCount > 0 ? 'text-pink-400/70' : 'text-gray-600'}`}>in toolkit</span>
            </div>
            {/* Total Counter */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]">
              <span className="text-2xl font-bold text-white">{displayedPlugins.length}</span>
              <span className="text-sm text-[var(--text-muted)]">plugins</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Plugins Section */}
      <FeaturedPlugins plugins={allPlugins} />

      {/* Filter Bar - Compact Design */}
      <div className="content-card p-4 mb-8">
        {/* Top Row: Tabs, Quick Filters, View Toggle */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {/* Filter Mode Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-white/5 border border-white/10">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-md font-medium text-xs transition-all ${filterMode === 'all'
                  ? 'bg-purple-600/40 text-white'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              All Plugins
            </button>
            <button
              onClick={() => setFilterMode('toolkit')}
              className={`px-3 py-1.5 rounded-md font-medium text-xs transition-all flex items-center gap-1.5 ${filterMode === 'toolkit'
                  ? 'bg-pink-600/40 text-white'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              <Heart className="w-3 h-3" />
              Toolkit
              {toolkitCount > 0 && (
                <span className="px-1.5 py-0.5 rounded-full bg-pink-500/30 text-[10px]">{toolkitCount}</span>
              )}
            </button>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
            {QUICK_FILTERS.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFamily(filter.id === 'all' ? 'all' : filter.id)}
                className={`filter-pill ${selectedFamily === filter.id || (selectedFamily === 'all' && filter.id === 'all') ? 'active' : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Right Side: Actions */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Export Button */}
            {filterMode === 'toolkit' && toolkitCount > 0 && (
              <button
                onClick={handleExportToolkit}
                className="px-3 py-1.5 rounded-lg font-medium text-xs bg-green-600/20 text-green-400 border border-green-500/30 hover:bg-green-600/30 transition-all flex items-center gap-1.5"
              >
                <Download className="w-3 h-3" />
                <span className="hidden sm:inline">Export</span>
              </button>
            )}

            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className={`p-2 rounded-lg transition-all ${showAdvancedFilters
                  ? 'bg-purple-600/30 text-purple-400'
                  : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
              title="Advanced Filters"
            >
              <Filter className="w-4 h-4" />
            </button>

            {/* View Toggle */}
            <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
          </div>
        </div>

        {/* Search Row */}
        <div className="flex items-center gap-3 relative">
          <div className={`flex-1 search-bar focus-within:ring-2 focus-within:ring-purple-500/30 transition-all ${searchTerm ? 'border-purple-500/30' : ''}`}>
            <Search className={`w-4 h-4 ${searchTerm ? 'text-purple-400' : 'text-gray-500'}`} />
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search plugins... (Press '/')"
              className="flex-1 bg-transparent border-none outline-none text-sm"
            />
            {searchTerm ? (
              <button onClick={() => setSearchTerm('')} className="p-1 hover:bg-white/10 rounded">
                <X className="w-3 h-3 text-gray-500" />
              </button>
            ) : (
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] text-gray-500 font-mono">/</span>
            )}
          </div>

          {/* Clear All - Only show when filters active */}
          {(searchTerm || selectedFamily !== 'all' || selectedEdition !== 'all') && (
            <button
              onClick={clearAllFilters}
              className="text-xs text-purple-400 hover:text-purple-300 transition-colors whitespace-nowrap"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Advanced Filters (Smooth Collapsible) */}
        <div className={`collapse-content ${showAdvancedFilters ? 'open' : ''}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 pt-4 border-t border-white/10">
            {/* Edition Filter */}
            <div>
              <label className="block text-[10px] font-medium text-gray-500 mb-1.5 uppercase">Edition</label>
              <select
                value={selectedEdition}
                onChange={(e) => setSelectedEdition(e.target.value as typeof selectedEdition)}
                className="glass-input w-full px-3 py-2 text-sm"
              >
                <option value="all">All Editions</option>
                <option value="all-plugins">All Plugins Bundle</option>
                <option value="signature">Signature+</option>
                <option value="producer">Producer+</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-[10px] font-medium text-gray-500 mb-1.5 uppercase">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="glass-input w-full px-3 py-2 text-sm"
              >
                <option value="name">Name</option>
                <option value="family">Category</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            {/* Order */}
            <div>
              <label className="block text-[10px] font-medium text-gray-500 mb-1.5 uppercase">Order</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as typeof sortOrder)}
                className="glass-input w-full px-3 py-2 text-sm"
              >
                <option value="asc">A → Z</option>
                <option value="desc">Z → A</option>
              </select>
            </div>

            {/* Results Summary */}
            <div className="flex items-end">
              <span className="text-xs text-gray-500">
                Showing <span className="text-white font-medium">{displayedPlugins.length}</span> of{' '}
                <span className="text-white font-medium">{filterMode === 'toolkit' ? toolkitCount : allPlugins.length}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Plugin Results - Staggered Animation */}
      {viewMode === 'grid' ? (
        <div key={`grid-${filterMode}-${selectedFamily}`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPlugins.length > 0 ? (
            displayedPlugins.map((plugin, index) => (
              <div
                key={plugin.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <PluginCard
                  plugin={plugin}
                  showDetails={true}
                  isInToolkit={isInToolkit(plugin.id)}
                  onToggleToolkit={handleToggleToolkit}
                />
              </div>
            ))
          ) : (
            <EmptyState
              filterMode={filterMode}
              searchTerm={searchTerm}
              onClearFilters={clearAllFilters}
            />
          )}
        </div>
      ) : (
        <div key={`list-${filterMode}-${selectedFamily}`} className="flex flex-col gap-2">
          {displayedPlugins.length > 0 ? (
            displayedPlugins.map((plugin, index) => (
              <div
                key={plugin.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <PluginListItem
                  plugin={plugin}
                  isInToolkit={isInToolkit(plugin.id)}
                  onToggleToolkit={handleToggleToolkit}
                />
              </div>
            ))
          ) : (
            <EmptyState
              filterMode={filterMode}
              searchTerm={searchTerm}
              onClearFilters={clearAllFilters}
            />
          )}
        </div>
      )}
    </section>
  );
};

// Wrap with ToastProvider
export const PluginsDatabase = () => {
  return (
    <ToastProvider>
      <PluginsDatabaseInner />
    </ToastProvider>
  );
};

// Empty State Component
interface EmptyStateProps {
  filterMode: FilterMode;
  searchTerm: string;
  onClearFilters: () => void;
}

const EmptyState = ({ filterMode, searchTerm, onClearFilters }: EmptyStateProps) => {
  if (filterMode === 'toolkit') {
    return (
      <div className="col-span-full py-16 px-6 text-center border-2 border-dashed border-pink-500/20 rounded-2xl bg-pink-500/[0.02] animate-fade-in-up">
        <div className="w-16 h-16 rounded-full bg-pink-500/10 flex items-center justify-center mx-auto mb-6">
          <Heart className="w-8 h-8 text-pink-400" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">Your Toolkit is Empty</h3>
        <p className="text-[var(--text-muted)] mb-6 max-w-md mx-auto">
          Start building your personal collection by clicking the heart icon on any plugin.
        </p>
        <button
          onClick={onClearFilters}
          className="px-6 py-2 rounded-full bg-pink-500/20 hover:bg-pink-500/30 text-pink-400 border border-pink-500/30 transition-colors font-medium cursor-pointer"
        >
          Browse All Plugins
        </button>
      </div>
    );
  }

  return (
    <div className="col-span-full py-16 px-6 text-center border-2 border-dashed border-white/5 rounded-2xl bg-white/[0.02] animate-fade-in-up">
      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
        <Search className="w-8 h-8 text-gray-500" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">No plugins found</h3>
      <p className="text-[var(--text-muted)] mb-6 max-w-md mx-auto">
        {searchTerm ? `No results for "${searchTerm}". Try a different term or category.` : 'Try adjusting your filters to find what you need.'}
      </p>
      <button
        onClick={onClearFilters}
        className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors font-medium border border-white/10 cursor-pointer"
      >
        Clear All Filters
      </button>
    </div>
  );
};
