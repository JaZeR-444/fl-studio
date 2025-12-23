'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ExtendedPlugin } from '@/types/pluginTypes';

// Import plugin data directly
import allPluginsData from '@/data/plugins/allPlugins.json';
const allPlugins: ExtendedPlugin[] = allPluginsData as unknown as ExtendedPlugin[];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  navigateToSection: (sectionId: string) => void;
}

interface SearchResult {
  id: string;
  type: 'section' | 'plugin';
  label: string;
  sublabel?: string;
  icon?: string;
  sectionId: string; // Destination section
  pluginId?: string; // For specific filtering if needed
}

export const CommandPalette = ({ isOpen, onClose, navigateToSection }: CommandPaletteProps) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Navigation Items Definition (mirroring Sidebar structure for search)
  const navItems: SearchResult[] = [
    { id: 'home', type: 'section', label: 'All Tools', sectionId: 'home', icon: '🎹' },
    { id: 'plugins', type: 'section', label: 'Instruments & Synths', sectionId: 'plugins', icon: '🎹' },
    { id: 'plugins-database', type: 'section', label: 'Plugin Database', sectionId: 'plugins-database', icon: '🔌' },
    { id: 'workflow-chains', type: 'section', label: 'Workflow Chains', sectionId: 'workflow-chains', icon: '🔄' },
    { id: 'mixing', type: 'section', label: 'Mixing & Mastering', sectionId: 'mixing', icon: '🎚️' },
    { id: 'audio', type: 'section', label: 'Audio & Recording', sectionId: 'audio', icon: '🎤' },
    { id: 'dojo', type: 'section', label: 'Shortcut Dojo', sectionId: 'dojo', icon: '🥋' },
  ];

  // Derive results
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();

    // 1. Filter Navigation
    const navResults = navItems.filter(item => 
      item.label.toLowerCase().includes(lowerQuery)
    );

    // 2. Filter Plugins
    const pluginResults = allPlugins
      .filter(p => p.name.toLowerCase().includes(lowerQuery) || p.tags.some(t => t.label.toLowerCase().includes(lowerQuery)))
      .slice(0, 5) // Limit plugin results
      .map(p => ({
        id: `plugin-${p.id}`,
        type: 'plugin' as const,
        label: p.name,
        sublabel: p.category,
        icon: '🔌',
        sectionId: 'plugins-database', // Go to DB
        pluginId: p.id
      }));

    setResults([...navResults, ...pluginResults]);
    setSelectedIndex(0);
  }, [query]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % results.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[selectedIndex]) {
           handleSelect(results[selectedIndex]);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  const handleSelect = (result: SearchResult) => {
    if (result.type === 'section') {
      navigateToSection(result.sectionId);
    } else if (result.type === 'plugin') {
      // For now, allow simple navigation to the DB section
      // In a more advanced version, we could inject the search term into the DB component
      navigateToSection('plugins-database');
      // Hacky? Maybe trigger a global event or update context to filter the DB?
      // For now, let's just go there.
      // Ideally, we'd route to /plugins/[id] directly if it's a detail page app
      // But based on the existing app structure, let's link to the detail page!
      if (result.pluginId) {
         router.push(`/plugins/${result.pluginId}`);
      }
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-[#0f0a1a] border border-[var(--glass-border)] rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col animate-fade-in-up">
        {/* Input Header */}
        <div className="flex items-center gap-4 p-4 border-b border-[var(--glass-border)] bg-white/5">
          <svg className="w-5 h-5 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-lg text-white placeholder-[var(--text-dim)]"
            placeholder="Search tools, workflows, or plugins..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="text-xs font-mono text-[var(--accent-tertiary)] px-2 py-1 bg-white/10 rounded">ESC</div>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {query === '' && (
            <div className="p-8 text-center text-[var(--text-muted)]">
              <p className="text-sm">Type to search across the entire Studio Hub</p>
            </div>
          )}

          {query !== '' && results.length === 0 && (
            <div className="p-8 text-center text-[var(--text-muted)]">
               No results found for "{query}"
            </div>
          )}

          {results.map((result, index) => (
            <button
              key={result.id}
              onClick={() => handleSelect(result)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                index === selectedIndex 
                  ? 'bg-[var(--accent-primary)]/20 text-white' 
                  : 'text-[var(--text-secondary)] hover:bg-white/5'
              }`}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <span className="text-xl">{result.icon}</span>
              <div className="flex-1">
                <div className="text-sm font-medium">{result.label}</div>
                {result.sublabel && (
                  <div className="text-xs text-[var(--text-muted)] opacity-70">{result.sublabel}</div>
                )}
              </div>
              {index === selectedIndex && (
                 <svg className="w-4 h-4 text-[var(--accent-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                 </svg>
              )}
            </button>
          ))}
        </div>
        
        {/* Footer */}
        <div className="px-4 py-2 border-t border-[var(--glass-border)] bg-black/20 text-[10px] text-[var(--text-dim)] flex justify-between">
           <span>Pro Tip: Use arrow keys to navigate</span>
           <span>FL Studio Hub v2.1</span>
        </div>
      </div>
    </div>
  );
};
