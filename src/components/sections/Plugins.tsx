'use client';

import { useState } from 'react';
import { ToolCard, ToolCardCompact } from '@/components/ui/ToolCard';


import { ExtendedPlugin } from '@/types/pluginTypes';
import allPluginsData from '@/data/plugins/allPlugins.json';

const allPlugins: ExtendedPlugin[] = allPluginsData as unknown as ExtendedPlugin[];

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

  const getFilteredPlugins = () => {
    switch (activeCategory) {
      case 'synths':
        return allPlugins.filter(p => p.pluginType === 'Synthesizer');
      case 'effects':
        return allPlugins.filter(p => p.pluginType === 'Effect' || p.category.includes('FX') || p.category.includes('Mastering'));
      case 'mastering':
        return allPlugins.filter(p => p.category.toLowerCase().includes('mastering') || p.tags.some(t => t.label === 'Mastering'));
      case 'creative':
        return allPlugins.filter(p => p.category.includes('Creative') || p.tags.some(t => t.label === 'Creative'));
      default:
        return allPlugins;
    }
  };

  const filteredPlugins = getFilteredPlugins();
  const displayedPlugins = filteredPlugins.slice(0, visibleCount);

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
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
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

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-all ${
              viewMode === 'grid'
                ? 'bg-[var(--accent-primary)] text-white'
                : 'bg-[var(--glass-bg)] text-[var(--text-dim)] hover:text-white border border-[var(--glass-border)]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-all ${
              viewMode === 'list'
                ? 'bg-[var(--accent-primary)] text-white'
                : 'bg-[var(--glass-bg)] text-[var(--text-dim)] hover:text-white border border-[var(--glass-border)]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sponsored Section */}
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
              />
            ))}
          </div>
        )}
      </div>


      {/* Load More */}
      <div className="flex justify-center mt-8">
        <button className="btn-secondary px-8">
          Load More Plugins
          <svg className="inline-block w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};