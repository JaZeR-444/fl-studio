// src/components/ui/CapabilityFilter.tsx
import { useState, useEffect } from 'react';
import { PluginSearchIndex } from '@/types/pluginTypes';

interface CapabilityFilterProps {
  plugins: PluginSearchIndex[];
  onFilterChange: (filtered: PluginSearchIndex[]) => void;
}

export const CapabilityFilter = ({ plugins, onFilterChange }: CapabilityFilterProps) => {
  const [filters, setFilters] = useState({
    family: '',
    edition: '',
    cpu: 0,
    complexity: 0,
    nativeOnly: false,
    hasResynthesis: false,
    hasTransientDetection: false,
    genre: ''
  });

  // Apply filters when they change
  useEffect(() => {
    let filtered = [...plugins];

    // Family filter
    if (filters.family) {
      filtered = filtered.filter(p => p.family === filters.family);
    }

    // Edition filter
    if (filters.edition) {
      if (filters.edition === 'All Plugins') {
        filtered = filtered.filter(p => p.exclusivityFlags.includes('All Plugins Edition'));
      } else if (filters.edition === 'Signature+') {
        filtered = filtered.filter(p => 
          p.exclusivityFlags.includes('Signature+ Edition') || 
          p.exclusivityFlags.includes('All Plugins Edition')
        );
      } else if (filters.edition === 'Producer+') {
        filtered = filtered.filter(p => 
          p.exclusivityFlags.includes('Producer+ Edition') ||
          p.exclusivityFlags.includes('Signature+ Edition') || 
          p.exclusivityFlags.includes('All Plugins Edition')
        );
      }
    }

    // CPU rating filter
    if (filters.cpu > 0) {
      filtered = filtered.filter(p => p.cpuRating >= filters.cpu);
    }

    // Complexity filter
    if (filters.complexity > 0) {
      filtered = filtered.filter(p => p.complexity >= filters.complexity);
    }

    // Native only filter
    if (filters.nativeOnly) {
      filtered = filtered.filter(p => p.nativeOnly);
    }

    // Has resynthesis filter
    if (filters.hasResynthesis) {
      filtered = filtered.filter(p => p.keyDifferentiators.some(kd => 
        kd.toLowerCase().includes('resynthesis') || 
        kd.toLowerCase().includes('resynthesize')
      ));
    }

    // Has transient detection filter
    if (filters.hasTransientDetection) {
      filtered = filtered.filter(p => p.nativeAdvantages.some(na => 
        na.toLowerCase().includes('transient')
      ));
    }

    // Genre filter
    if (filters.genre) {
      filtered = filtered.filter(p => 
        p.genreAffinity.some(g => g.includes(filters.genre))
      );
    }

    onFilterChange(filtered);
  }, [filters, plugins, onFilterChange]);

  const handleReset = () => {
    setFilters({
      family: '',
      edition: '',
      cpu: 0,
      complexity: 0,
      nativeOnly: false,
      hasResynthesis: false,
      hasTransientDetection: false,
      genre: ''
    });
  };

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-stone-800 dark:text-white">Filters</h3>
        <button 
          onClick={handleReset}
          className="text-sm text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">Family</label>
          <select
            value={filters.family}
            onChange={(e) => setFilters({...filters, family: e.target.value})}
            className="w-full p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">All Families</option>
            <option value="Additive">Additive</option>
            <option value="Physical Modeling">Physical Modeling</option>
            <option value="FM/Hybrid">FM/Hybrid</option>
            <option value="Analog Emulation">Analog Emulation</option>
            <option value="Time & Pitch">Time & Pitch</option>
            <option value="Dynamics/Mastering">Dynamics/Mastering</option>
            <option value="Spatial/Creative FX">Spatial/Creative FX</option>
            <option value="Utilities/Modular">Utilities/Modular</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">Edition</label>
          <select
            value={filters.edition}
            onChange={(e) => setFilters({...filters, edition: e.target.value})}
            className="w-full p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">All Editions</option>
            <option value="All Plugins">All Plugins</option>
            <option value="Signature+">Signature+</option>
            <option value="Producer+">Producer+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">Min CPU Rating</label>
          <select
            value={filters.cpu}
            onChange={(e) => setFilters({...filters, cpu: parseInt(e.target.value)})}
            className="w-full p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value={0}>Any</option>
            <option value={1}>1+ Stars</option>
            <option value={2}>2+ Stars</option>
            <option value={3}>3+ Stars</option>
            <option value={4}>4+ Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">Min Complexity</label>
          <select
            value={filters.complexity}
            onChange={(e) => setFilters({...filters, complexity: parseInt(e.target.value)})}
            className="w-full p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value={0}>Any</option>
            <option value={1}>1+ Stars</option>
            <option value={2}>2+ Stars</option>
            <option value={3}>3+ Stars</option>
            <option value={4}>4+ Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="nativeOnly"
            checked={filters.nativeOnly}
            onChange={(e) => setFilters({...filters, nativeOnly: e.target.checked})}
            className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-stone-300 dark:border-zinc-600 rounded"
          />
          <label htmlFor="nativeOnly" className="ml-2 text-sm text-stone-700 dark:text-zinc-300">
            Native Only
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="resynthesis"
            checked={filters.hasResynthesis}
            onChange={(e) => setFilters({...filters, hasResynthesis: e.target.checked})}
            className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-stone-300 dark:border-zinc-600 rounded"
          />
          <label htmlFor="resynthesis" className="ml-2 text-sm text-stone-700 dark:text-zinc-300">
            Has Resynthesis
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="transient"
            checked={filters.hasTransientDetection}
            onChange={(e) => setFilters({...filters, hasTransientDetection: e.target.checked})}
            className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-stone-300 dark:border-zinc-600 rounded"
          />
          <label htmlFor="transient" className="ml-2 text-sm text-stone-700 dark:text-zinc-300">
            Has Transient Detection
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 dark:text-zinc-300 mb-1">Genre Affinity</label>
          <input
            type="text"
            value={filters.genre}
            onChange={(e) => setFilters({...filters, genre: e.target.value})}
            placeholder="e.g., EDM, Hip-Hop"
            className="w-full p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>
    </div>
  );
};