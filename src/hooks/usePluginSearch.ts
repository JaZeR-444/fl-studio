// src/hooks/usePluginSearch.ts
import { useState, useEffect } from 'react';
import { PluginSearchIndex, PluginFamily } from '@/types/pluginTypes';
import { pluginSearchService } from '@/services/pluginSearchService';

// Load the search index data
import searchIndex from '@/data/plugins/searchIndex.json';

interface UsePluginSearchFilters {
  family?: PluginFamily | 'all';
  edition?: 'all' | 'All Plugins' | 'Signature+' | 'Producer+';
  tags?: string[];
}

interface UsePluginSearchParams {
  searchTerm: string;
  filters: UsePluginSearchFilters;
  sortBy: 'name' | 'family' | 'edition';
  sortOrder: 'asc' | 'desc';
}

export const usePluginSearch = ({ searchTerm, filters, sortBy, sortOrder }: UsePluginSearchParams) => {
  const [results, setResults] = useState<PluginSearchIndex[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Set the plugins in the service
        pluginSearchService.setPlugins(searchIndex as PluginSearchIndex[]);
        
        // Perform search with filters
        const searchResults = pluginSearchService.search(searchTerm, {
          ...filters,
          family: filters.family === 'all' ? undefined : filters.family,
          edition: filters.edition === 'all' ? undefined : filters.edition
        });
        
        // Apply sorting
        const sortedResults = [...searchResults].sort((a, b) => {
          let comparison = 0;
          
          if (sortBy === 'name') {
            comparison = a.name.localeCompare(b.name);
          } else if (sortBy === 'family') {
            comparison = (a.family as string).localeCompare(b.family as string);
          } else if (sortBy === 'edition') {
            comparison = a.edition.localeCompare(b.edition);
          }
          
          return sortOrder === 'asc' ? comparison : -comparison;
        });

        setResults(sortedResults);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, filters, sortBy, sortOrder]);

  return {
    results,
    loading,
    error,
    service: pluginSearchService
  };
};