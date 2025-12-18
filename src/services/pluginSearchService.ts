// src/services/pluginSearchService.ts
import { PluginSearchIndex } from '@/types/pluginTypes';

class PluginSearchService {
  private plugins: PluginSearchIndex[] = [];

  constructor() {
    // For now, we'll add a method to load plugins externally
  }

  setPlugins(plugins: PluginSearchIndex[]) {
    this.plugins = plugins;
  }

  search(searchTerm: string, filters?: {
    family?: string;
    edition?: string;
    tags?: string[];
  }): PluginSearchIndex[] {
    let results = [...this.plugins];

    // Apply search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(plugin => 
        plugin.name.toLowerCase().includes(term) ||
        plugin.family.toLowerCase().includes(term) ||
        plugin.tags.some(tag => tag.toLowerCase().includes(term)) ||
        plugin.primaryUseCases.some(useCase => useCase.toLowerCase().includes(term))
      );
    }

    // Apply family filter
    if (filters?.family && filters.family !== 'all') {
      results = results.filter(plugin => {
        return plugin.family === filters.family;
      });
    }

    // Apply edition filter
    if (filters?.edition && filters.edition !== 'all') {
      results = results.filter(plugin => {
        if (filters.edition === 'All Plugins') {
          return plugin.exclusivityFlags.includes('All Plugins Edition');
        } else if (filters.edition === 'Signature+') {
          return plugin.exclusivityFlags.includes('Signature+ Edition') || 
                 plugin.exclusivityFlags.includes('All Plugins Edition');
        } else if (filters.edition === 'Producer+') {
          return plugin.exclusivityFlags.includes('Producer+ Edition') ||
                 plugin.exclusivityFlags.includes('Signature+ Edition') || 
                 plugin.exclusivityFlags.includes('All Plugins Edition');
        }
        return true;
      });
    }

    // Apply tags filter
    if (filters?.tags && filters.tags.length > 0) {
      results = results.filter(plugin => {
        return filters.tags!.every(tag => 
          plugin.tags.includes(tag) || 
          plugin.keyDifferentiators.some(diff => diff.toLowerCase().includes(tag.toLowerCase()))
        );
      });
    }

    return results;
  }

  getByFamily(family: string): PluginSearchIndex[] {
    return this.plugins.filter(plugin => plugin.family === family);
  }

  getByTag(tag: string): PluginSearchIndex[] {
    return this.plugins.filter(plugin => plugin.tags.includes(tag));
  }

  getBestPairedWith(pluginId: string): PluginSearchIndex[] {
    const plugin = this.plugins.find(p => p.id === pluginId);
    if (!plugin) return [];
    
    return this.plugins.filter(p => 
      plugin.bestPairedWith.includes(p.name) || 
      p.bestPairedWith.includes(plugin.name)
    );
  }

  getNativeOnlyPlugins(): PluginSearchIndex[] {
    return this.plugins.filter(plugin => plugin.nativeOnly);
  }

  getExclusivityInfo(pluginId: string): string[] {
    const plugin = this.plugins.find(p => p.id === pluginId);
    return plugin?.exclusivityFlags || [];
  }
}

export const pluginSearchService = new PluginSearchService();