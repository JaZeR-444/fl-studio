'use client';

import { useState, useMemo } from 'react';
import { ToolCard, ToolCardCompact } from '@/components/ui/ToolCard';
import { ArrowUpDown, LayoutGrid, List, ChevronDown } from 'lucide-react';

import { ExtendedPlugin } from '@/types/pluginTypes';
import allPluginsData from '@/data/plugins/allPlugins.json';

const allPlugins: ExtendedPlugin[] = allPluginsData as unknown as ExtendedPlugin[];

// Sort options
const sortOptions = [
  { id: 'name-asc', label: 'Name (A-Z)', field: 'name', order: 'asc' },
  { id: 'name-desc', label: 'Name (Z-A)', field: 'name', order: 'desc' },
  { id: 'rating-desc', label: 'Highest Rated', field: 'rating', order: 'desc' },
  { id: 'rating-asc', label: 'Lowest Rated', field: 'rating', order: 'asc' },
] as const;

// Calculate category counts dynamically
const getCategoryCount = (keyword: string) => 
  keyword === 'all' 
    ? allPlugins.length 
    : allPlugins.filter(p => p.category.toLowerCase().includes(keyword) || p.tags.some(t => t.label.toLowerCase().includes(keyword))).length;

const categories = [
  { id: 'all', label: 'All Plugins', count: getCategoryCount('all') },
  { id: 'synths', label: 'Synthesizers', count: allPlugins.filter(p => p.pluginType === 'Synthesizer').length },
  { id: 'effects', label: 'Effects', count: allPlugins.filter(p => p.pluginType === 'Effect' || p.category.includes('FX') || p.category.includes('Mastering')).length },
  { id: 'mastering', label: 'Mastering', count: allPlugins.filter(p => p.category.toLowerCase().includes('mastering') || p.tags.some(t => t.label === 'Mastering')).length },
  { id: 'creative', label: 'Creative FX', count: allPlugins.filter(p => p.category.includes('Creative') || p.tags.some(t => t.label === 'Creative')).length },
];

export const PluginsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [visibleCount, setVisibleCount] = useState(12);
  const [sortBy, setSortBy] = useState<typeof sortOptions[number]['id']>('name-asc');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const getFilteredPlugins = useMemo(() => {
    let result: ExtendedPlugin[];
    
    switch (activeCategory) {
      case 'synths':
        result = allPlugins.filter(p => p.pluginType === 'Synthesizer');
        break;
      case 'effects':
        result = allPlugins.filter(p => p.pluginType === 'Effect' || p.category.includes('FX') || p.category.includes('Mastering'));
        break;
      case 'mastering':
        result = allPlugins.filter(p => p.category.toLowerCase().includes('mastering') || p.tags.some(t => t.label === 'Mastering'));
        break;
      case 'creative':
        result = allPlugins.filter(p => p.category.includes('Creative') || p.tags.some(t => t.label === 'Creative'));
        break;
      default:
        result = [...allPlugins];
    }

    // Apply sorting
    const sortOption = sortOptions.find(s => s.id === sortBy);
    if (sortOption) {
      result.sort((a, b) => {
        let comparison = 0;
        if (sortOption.field === 'name') {
          comparison = a.name.localeCompare(b.name);
        } else if (sortOption.field === 'rating') {
          comparison = a.rating - b.rating;
        }
        return sortOption.order === 'asc' ? comparison : -comparison;
      });
    }

    return result;
  }, [activeCategory, sortBy]);

  const displayedPlugins = getFilteredPlugins.slice(0, visibleCount);
  const currentSortLabel = sortOptions.find(s => s.id === sortBy)?.label || 'Sort';

  return (
    <section id="plugins" className="page-section animate-fade">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Instruments</span>
          <span className="text-white"> & Sound Design</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          FL Studio comes with powerful stock plugins. Explore the complete collection.
        </p>
      </div>

      {/* Filters Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setVisibleCount(12);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-[var(--accent-primary)] text-white'
                  : 'bg-[var(--glass-bg)] text-[var(--text-muted)] hover:text-white hover:bg-[var(--glass-bg-hover)] border border-[var(--glass-border)]'
              }`}
            >
              {cat.label}
              <span className="ml-2 text-xs opacity-70">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Sort & View Controls */}
        <div className="flex items-center gap-3">
          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-sm text-[var(--text-muted)] hover:text-white hover:border-white/20 transition-all"
            >
              <ArrowUpDown className="w-4 h-4" />
              <span className="hidden sm:inline">{currentSortLabel}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showSortDropdown && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setShowSortDropdown(false)} 
                />
                <div className="absolute right-0 top-full mt-2 w-48 rounded-lg bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] shadow-xl z-20 overflow-hidden">
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSortBy(option.id);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        sortBy === option.id
                          ? 'bg-[var(--accent-primary)] text-white'
                          : 'text-[var(--text-muted)] hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded transition-all ${
                viewMode === 'grid'
                  ? 'bg-[var(--accent-primary)] text-white'
                  : 'text-[var(--text-dim)] hover:text-white'
              }`}
              title="Grid view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded transition-all ${
                viewMode === 'list'
                  ? 'bg-[var(--accent-primary)] text-white'
                  : 'text-[var(--text-dim)] hover:text-white'
              }`}
              title="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-[var(--text-muted)]">
          Showing <span className="text-white font-medium">{displayedPlugins.length}</span> of{' '}
          <span className="text-white font-medium">{getFilteredPlugins.length}</span> plugins
        </p>
      </div>

      {/* Featured Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-lg font-bold text-white">Featured Plugins</h3>
          <span className="badge badge-premium">Premium</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedPlugins.slice(0, 3).map((plugin) => (
            <ToolCard
              key={plugin.id}
              {...(plugin as any)}
              isSponsored={true}
              onClick={() => console.log(`Clicked on ${plugin.name}`)}
              href={`/plugins/${plugin.id}`}
            />
          ))}
        </div>
      </div>

      {/* All Plugins Grid */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">All Plugins</h3>
        
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedPlugins.map((plugin) => (
              <ToolCard
                key={plugin.id}
                {...(plugin as any)}
                onClick={() => console.log(`Clicked on ${plugin.name}`)}
                href={`/plugins/${plugin.id}`}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedPlugins.map((plugin) => (
              <ToolCardCompact
                key={plugin.id}
                name={plugin.name}
                description={plugin.description}
                category={plugin.category}
                icon={plugin.icon}
                date={plugin.date}
                tags={plugin.tags}
                pricingBadge={plugin.pricingBadge}
                onClick={() => console.log(`Clicked on ${plugin.name}`)}
                href={`/plugins/${plugin.id}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Load More */}
      {displayedPlugins.length < getFilteredPlugins.length && (
        <div className="flex justify-center mt-8">
          <button 
            onClick={() => setVisibleCount(prev => prev + 12)}
            className="btn-secondary px-8 hover:scale-105 transition-transform"
          >
            Load More Plugins ({getFilteredPlugins.length - displayedPlugins.length} remaining)
            <svg className="inline-block w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};