'use client';

import { useState, useMemo } from 'react';
import { ToolCard } from '@/components/ui/ToolCard';
import { 
  Piano, 
  Layers, 
  RefreshCw, 
  SlidersHorizontal,
  Rocket,
  Users,
  Star,
  Sparkles,
  Wand2
} from 'lucide-react';

import { ExtendedPlugin } from '@/types/pluginTypes';
import allPluginsData from '@/data/plugins/allPlugins.json';

const allPlugins: ExtendedPlugin[] = allPluginsData as unknown as ExtendedPlugin[];

// Dynamic featured tools - pick top-rated native plugins
const getFeaturedPlugins = () => {
  return allPlugins
    .filter(p => p.nativeStatus)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
};

// Quick filter options
const filterOptions = [
  { id: 'all', label: 'All Tools' },
  { id: 'synths', label: 'Synths' },
  { id: 'effects', label: 'Effects' },
  { id: 'dynamics', label: 'Dynamics' },
];

// Mental Model concepts with Lucide icons
const mentalModelConcepts = [
  {
    title: 'Pattern-Based Workflow',
    description: 'FL Studio uses patterns as building blocks. Think of patterns like musical LEGO pieces.',
    Icon: Layers,
  },
  {
    title: 'Non-Destructive Editing',
    description: 'Everything can be undone. Experiment freely without fear of losing your work.',
    Icon: RefreshCw,
  },
  {
    title: 'Piano Roll Mastery',
    description: 'The heart of melody creation. Learn shortcuts to work 10x faster.',
    Icon: Piano,
  },
  {
    title: 'Mixer Routing',
    description: 'Understand signal flow from channels to mixer tracks to master output.',
    Icon: SlidersHorizontal,
  },
];

// Calculate dynamic stats
const getDynamicStats = () => {
  const totalPlugins = allPlugins.length;
  const nativePlugins = allPlugins.filter(p => p.nativeStatus).length;
  const avgRating = (allPlugins.reduce((a, p) => a + p.rating, 0) / allPlugins.length).toFixed(1);
  const categories = new Set(allPlugins.map(p => p.category)).size;
  
  return { totalPlugins, nativePlugins, avgRating, categories };
};

export const MentalModelSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const stats = useMemo(() => getDynamicStats(), []);
  
  const filteredPlugins = useMemo(() => {
    const featured = getFeaturedPlugins();
    
    if (activeFilter === 'all') return featured;
    if (activeFilter === 'synths') return featured.filter(p => p.pluginType === 'Synthesizer');
    if (activeFilter === 'effects') return featured.filter(p => p.pluginType === 'Effect' || p.category.includes('FX'));
    if (activeFilter === 'dynamics') return featured.filter(p => p.category.includes('Dynamics') || p.category.includes('Mastering'));
    
    return featured;
  }, [activeFilter]);

  return (
    <section id="mental-model" className="page-section animate-fade">
      {/* Featured Tools Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gradient mb-1">Featured Tools</h2>
          <p className="text-sm text-[var(--text-muted)]">
            Top-rated native plugins for your productions
          </p>
        </div>
        
        {/* Quick Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === option.id
                  ? 'bg-[var(--accent-primary)] text-white'
                  : 'bg-[var(--glass-bg)] text-[var(--text-muted)] border border-[var(--glass-border)] hover:text-white hover:bg-[var(--glass-bg-hover)]'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Featured Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-12">
        {filteredPlugins.length > 0 ? (
          filteredPlugins.map((plugin) => (
            <ToolCard
              key={plugin.id}
              id={plugin.id}
              name={plugin.name}
              description={plugin.description}
              category={plugin.category}
              icon={<Wand2 className="w-5 h-5 text-[var(--accent-tertiary)]" />}
              rating={plugin.rating}
              isSponsored={true}
              tags={plugin.tags}
              pricingBadge={plugin.pricingBadge}
              views={plugin.views}
              saves={plugin.saves}
              onClick={() => console.log(`Clicked on ${plugin.name}`)}
              href={`/plugins/${plugin.id}`}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-[var(--text-muted)]">
            No plugins found in this category
          </div>
        )}
      </div>

      {/* Dynamic Stats Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gradient mb-1">Plugin Collection</h2>
            <p className="text-sm text-[var(--text-muted)]">
              FL Studio's powerful native toolkit at a glance
            </p>
          </div>
        </div>

        {/* Stats Row with dynamic data */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="stat-card flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center">
              <Rocket className="w-5 h-5 text-[var(--accent-tertiary)]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{stats.totalPlugins}</p>
              <p className="text-xs text-[var(--text-muted)]">Total Plugins</p>
            </div>
          </div>
          <div className="stat-card flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[var(--accent-tertiary)]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{stats.nativePlugins}</p>
              <p className="text-xs text-[var(--text-muted)]">Native Plugins</p>
            </div>
          </div>
          <div className="stat-card flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center">
              <Star className="w-5 h-5 text-[var(--accent-tertiary)]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{stats.avgRating}</p>
              <p className="text-xs text-[var(--text-muted)]">Avg. Rating</p>
            </div>
          </div>
          <div className="stat-card flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center">
              <Layers className="w-5 h-5 text-[var(--accent-tertiary)]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{stats.categories}</p>
              <p className="text-xs text-[var(--text-muted)]">Categories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mental Model Concepts */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Core Concepts</h2>
        <p className="text-[var(--text-muted)] mb-6">
          Master these fundamental concepts to unlock your FL Studio potential.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mentalModelConcepts.map((concept, index) => (
            <div key={index} className="content-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center shrink-0">
                  <concept.Icon className="w-6 h-6 text-[var(--accent-tertiary)]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{concept.title}</h3>
                  <p className="text-sm text-[var(--text-muted)]">{concept.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};