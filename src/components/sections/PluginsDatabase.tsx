// src/components/sections/PluginsDatabase.tsx
import { useState, useEffect } from 'react';
import { PluginFamily, PluginSearchIndex } from '@/types/pluginTypes';
import { PluginCard } from '@/components/ui/PluginCard';
import { CapabilityFilter } from '@/components/ui/CapabilityFilter';

// Import plugin data
import pluginTaxonomy from '@/data/plugins/taxonomy.json';
import searchIndex from '@/data/plugins/searchIndex.json';

interface PluginsDatabaseProps {}

export const PluginsDatabase = ({ }: PluginsDatabaseProps) => {
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
    <section id="plugins-database" className="page-section">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-6">FL Studio Plugin Database</h2>

        {/* Basic Filters */}
        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">Search</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search plugins..."
                className="w-full p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">Family</label>
              <select
                value={selectedFamily}
                onChange={(e) => setSelectedFamily(e.target.value as PluginFamily | 'all')}
                className="w-full p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">All Families</option>
                {allFamilies.map(family => (
                  <option key={family} value={family}>{family}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">Edition</label>
              <select
                value={selectedEdition}
                onChange={(e) => setSelectedEdition(e.target.value as any)}
                className="w-full p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">All Editions</option>
                <option value="All Plugins">All Plugins</option>
                <option value="Signature+">Signature+</option>
                <option value="Producer+">Producer+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="name">Name</option>
                <option value="family">Family</option>
                <option value="edition">Edition</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">Order</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                className="w-full p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
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
            displayedPlugins.map(plugin => {
              const pluginData = pluginTaxonomy[plugin.id as keyof typeof pluginTaxonomy];
              return (
                <PluginCard
                  key={plugin.id}
                  plugin={plugin}
                  showDetails={true}
                />
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-stone-600 dark:text-zinc-400">No plugins found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};