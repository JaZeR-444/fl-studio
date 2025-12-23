'use client';

import { useState, useEffect } from 'react';
import { PluginFamily, PluginSearchIndex } from '@/types/pluginTypes';
import { PluginCard } from '@/components/ui/PluginCard';
import { CapabilityFilter } from '@/components/ui/CapabilityFilter';

// Import plugin data
import pluginTaxonomy from '@/data/plugins/taxonomy.json';
import searchIndexData from '@/data/plugins/searchIndex.json';

const searchIndex = searchIndexData as unknown as PluginSearchIndex[];

export const PluginsDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFamily, setSelectedFamily] = useState<PluginFamily | 'all'>('all');
  const [selectedEdition, setSelectedEdition] = useState<'all' | 'All Plugins' | 'Signature+' | 'Producer+'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'family' | 'edition'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filteredPlugins, setFilteredPlugins] = useState<PluginSearchIndex[]>(searchIndex);
  const [displayedPlugins, setDisplayedPlugins] = useState<PluginSearchIndex[]>(searchIndex);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...searchIndex];

    // Apply search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(plugin =>
        plugin.name.toLowerCase().includes(term) ||
        plugin.family.toLowerCase().includes(term) ||
        plugin.tags.some(tag => tag.toLowerCase().includes(term)) ||
        plugin.primaryUseCases.some(useCase => useCase.toLowerCase().includes(term))
      );
    }

    // Apply family filter
    if (selectedFamily !== 'all') {
      result = result.filter(plugin => plugin.family === selectedFamily);
    }

    // Apply edition filter
    if (selectedEdition !== 'all') {
      if (selectedEdition === 'All Plugins') {
        result = result.filter(plugin => plugin.exclusivityFlags.includes('All Plugins Edition'));
      } else if (selectedEdition === 'Signature+') {
        result = result.filter(plugin =>
          plugin.exclusivityFlags.includes('Signature+ Edition') ||
          plugin.exclusivityFlags.includes('All Plugins Edition')
        );
      } else if (selectedEdition === 'Producer+') {
        result = result.filter(plugin =>
          plugin.exclusivityFlags.includes('Producer+ Edition') ||
          plugin.exclusivityFlags.includes('Signature+ Edition') ||
          plugin.exclusivityFlags.includes('All Plugins Edition')
        );
      }
    }

    // Apply sorting
    result.sort((a, b) => {
      let comparison = 0;

      if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === 'family') {
        comparison = a.family.localeCompare(b.family);
      } else if (sortBy === 'edition') {
        comparison = a.edition.localeCompare(b.edition);
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });

    setFilteredPlugins(result);
    setDisplayedPlugins(result);
  }, [searchTerm, selectedFamily, selectedEdition, sortBy, sortOrder]);

  // Handler for capability filter changes
  const handleCapabilityFilterChange = (filtered: PluginSearchIndex[]) => {
    setDisplayedPlugins(filtered);
  };

  // Get all unique families for the filter
  const allFamilies = Object.values(PluginFamily);

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
            <label className="block text-xs font-medium text-[var(--text-muted)] mb-2 uppercase tracking-wider">Family</label>
            <select
              value={selectedFamily}
              onChange={(e) => setSelectedFamily(e.target.value as PluginFamily | 'all')}
              className="glass-input w-full px-3 py-2.5"
            >
              <option value="all">All Families</option>
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
              onChange={(e) => setSelectedEdition(e.target.value as typeof selectedEdition)}
              className="glass-input w-full px-3 py-2.5"
            >
              <option value="all">All Editions</option>
              <option value="All Plugins">All Plugins</option>
              <option value="Signature+">Signature+</option>
              <option value="Producer+">Producer+</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-xs font-medium text-[var(--text-muted)] mb-2 uppercase tracking-wider">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'family' | 'edition')}
              className="glass-input w-full px-3 py-2.5"
            >
              <option value="name">Name</option>
              <option value="family">Family</option>
              <option value="edition">Edition</option>
            </select>
          </div>

          {/* Order */}
          <div>
            <label className="block text-xs font-medium text-[var(--text-muted)] mb-2 uppercase tracking-wider">Order</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
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
            Showing <span className="text-white font-bold">{displayedPlugins.length}</span> of <span className="text-white font-bold">{searchIndex.length}</span> plugins
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

      {/* Capability Filter */}
      <CapabilityFilter
        plugins={filteredPlugins}
        onFilterChange={handleCapabilityFilterChange}
      />

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
          <div className="col-span-full text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-[var(--text-muted)]">No plugins found matching your criteria</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedFamily('all');
                setSelectedEdition('all');
              }}
              className="mt-4 text-[var(--accent-tertiary)] hover:text-[var(--accent-secondary)]"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
