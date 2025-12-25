'use client';


import { useState, useEffect } from 'react';
import { ExtendedPlugin, PluginFamily } from '@/types/pluginTypes';
import { PluginCard } from '@/components/ui/PluginCard';
import { CapabilityFilter } from '@/components/ui/CapabilityFilter';
import { Search } from 'lucide-react';

// Import plugin data
import allPluginsData from '@/data/plugins/allPlugins.json';

const allPlugins: ExtendedPlugin[] = allPluginsData as unknown as ExtendedPlugin[];

export const PluginsDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFamily, setSelectedFamily] = useState<string>('all');
  const [selectedEdition, setSelectedEdition] = useState<'all' | 'all-plugins' | 'signature' | 'producer'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'family' | 'rating'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [displayedPlugins, setDisplayedPlugins] = useState<ExtendedPlugin[]>(allPlugins);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...allPlugins];

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

    // Apply family filter
    if (selectedFamily !== 'all') {
      result = result.filter(plugin => plugin.category === selectedFamily || plugin.family === selectedFamily);
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

      if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === 'family') {
        comparison = a.family.localeCompare(b.family);
      } else if (sortBy === 'rating') {
        comparison = a.rating - b.rating;
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });

    setDisplayedPlugins(result);
  }, [searchTerm, selectedFamily, selectedEdition, sortBy, sortOrder]);

  // Get all unique families for the filter
  const allFamilies = Array.from(new Set(allPlugins.map(p => p.category))).sort();

  return (
    <section id="plugins-database" className="page-section animate-fade">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">FL Studio</span>
          <span className="text-white"> Plugin Database</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          Browse and filter the complete collection of FL Studio native plugins.
        </p>
      </div>

      {/* Filters Card */}
      <div className="content-card p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Search */}
          <div>
            <label className="block text-xs font-medium text-[var(--text-muted)] mb-2 uppercase tracking-wider">Search</label>
            <div className="search-bar">
              <svg className="w-4 h-4 text-[var(--text-dim)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search plugins..."
                className="flex-1"
              />
            </div>
          </div>

          {/* Family Filter */}
          <div>
            <label className="block text-xs font-medium text-[var(--text-muted)] mb-2 uppercase tracking-wider">Category</label>
            <select
              value={selectedFamily}
              onChange={(e) => setSelectedFamily(e.target.value)}
              className="glass-input w-full px-3 py-2.5"
            >
              <option value="all">All Categories</option>
              {allFamilies.map(family => (
                <option key={family} value={family}>{family}</option>
              ))}
            </select>
          </div>

          {/* Edition Filter */}
          <div>
            <label className="block text-xs font-medium text-[var(--text-muted)] mb-2 uppercase tracking-wider">Edition</label>
            <select
              value={selectedEdition}
              onChange={(e) => setSelectedEdition(e.target.value as any)}
              className="glass-input w-full px-3 py-2.5"
            >
              <option value="all">All Editions</option>
              <option value="all-plugins">All Plugins Bundle</option>
              <option value="signature">Signature+</option>
              <option value="producer">Producer+</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-xs font-medium text-[var(--text-muted)] mb-2 uppercase tracking-wider">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="glass-input w-full px-3 py-2.5"
            >
              <option value="name">Name</option>
              <option value="family">Category</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          {/* Order */}
          <div>
            <label className="block text-xs font-medium text-[var(--text-muted)] mb-2 uppercase tracking-wider">Order</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as any)}
              className="glass-input w-full px-3 py-2.5"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 pt-4 border-t border-[var(--glass-border)] flex justify-between items-center">
          <span className="text-sm text-[var(--text-muted)]">
            Showing <span className="text-white font-bold">{displayedPlugins.length}</span> of <span className="text-white font-bold">{allPlugins.length}</span> plugins
          </span>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedFamily('all');
              setSelectedEdition('all');
              setSortBy('name');
              setSortOrder('asc');
            }}
            className="text-sm text-[var(--accent-tertiary)] hover:text-[var(--accent-secondary)] transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Plugin Results */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedPlugins.length > 0 ? (
          displayedPlugins.map(plugin => (
            <PluginCard
              key={plugin.id}
              plugin={plugin}
              showDetails={true}
            />
          ))
        ) : (
          <div className="col-span-full py-16 px-6 text-center border-2 border-dashed border-white/5 rounded-2xl bg-white/[0.02]">
            <div className="text-6xl mb-6 opacity-50"><Search className="w-16 h-16 text-[var(--text-dim)]" /></div>
            <h3 className="text-xl font-bold mb-2">No plugins found</h3>
            <p className="text-[var(--text-muted)] mb-8 max-w-md mx-auto">
              We couldn't find any plugins matching "{searchTerm}" {selectedFamily !== 'all' ? `in ${selectedFamily}` : ''}.
              Try adjusting your search or filters.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
               <button 
                 onClick={() => {
                   setSearchTerm('');
                   setSelectedFamily('all');
                   setSelectedEdition('all');
                 }}
                 className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors font-medium border border-white/5"
               >
                 Clear All Filters
               </button>
               
               <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedFamily('Controller');
                    setSelectedEdition('all');
                  }}
                  className="px-6 py-2 rounded-full bg-[var(--accent-primary)]/10 hover:bg-[var(--accent-primary)]/20 text-[var(--accent-tertiary)] border border-[var(--accent-primary)]/20 transition-colors font-medium"
               >
                  Show Controllers
               </button>
               
               <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedFamily('Synth');
                    setSelectedEdition('all');
                  }}
                  className="px-6 py-2 rounded-full bg-[var(--accent-secondary)]/10 hover:bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)] border border-[var(--accent-secondary)]/20 transition-colors font-medium"
               >
                  Show Synths
               </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

