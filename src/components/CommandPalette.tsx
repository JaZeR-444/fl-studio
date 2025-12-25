'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { ExtendedPlugin } from '@/types/pluginTypes';
import {
  LayoutGrid,
  Piano,
  Plug,
  Zap,
  RefreshCw,
  BarChart3,
  BookOpen,
  Mic,
  SlidersHorizontal,
  TrendingUp,
  Music,
  FolderOpen,
  Sword,
  Keyboard,
  Monitor,
  Calculator,
  Wrench,
  Sparkles,
  Upload,
  LucideIcon
} from 'lucide-react';

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
  Icon: LucideIcon;
  sectionId: string;
  pluginId?: string;
}

export const CommandPalette = ({ isOpen, onClose, navigateToSection }: CommandPaletteProps) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Navigation Items with Lucide Icons (FULLY SYNCED with Sidebar.tsx)
  const navItems: SearchResult[] = [
    // Browse
    { id: 'home', type: 'section', label: 'All Tools', sectionId: 'home', Icon: LayoutGrid, sublabel: 'Browse' },
    { id: 'plugins', type: 'section', label: 'Instruments & Synths', sectionId: 'plugins', Icon: Piano, sublabel: 'Browse' },
    { id: 'plugins-database', type: 'section', label: 'Plugin Database', sectionId: 'plugins-database', Icon: Plug, sublabel: 'Browse' },
    { id: 'native-advantages', type: 'section', label: 'Native Advantages', sectionId: 'native-advantages', Icon: Zap, sublabel: 'Browse' },
    // Workflow
    { id: 'workflow-chains', type: 'section', label: 'Workflow Chains', sectionId: 'workflow-chains', Icon: RefreshCw, sublabel: 'Workflow' },
    { id: 'workflow-visualizations', type: 'section', label: 'Workflow Visuals', sectionId: 'workflow-visualizations', Icon: BarChart3, sublabel: 'Workflow' },
    { id: 'synthesis-history', type: 'section', label: 'Synthesis History', sectionId: 'synthesis-history', Icon: BookOpen, sublabel: 'Workflow' },
    // Production
    { id: 'audio', type: 'section', label: 'Audio & Recording', sectionId: 'audio', Icon: Mic, sublabel: 'Production' },
    { id: 'mixing', type: 'section', label: 'Mixing & Mastering', sectionId: 'mixing', Icon: SlidersHorizontal, sublabel: 'Production' },
    { id: 'audio-analysis', type: 'section', label: 'Audio Analysis', sectionId: 'audio-analysis', Icon: TrendingUp, sublabel: 'Production' },
    // Templates
    { id: 'templates', type: 'section', label: 'Song Templates', sectionId: 'templates', Icon: Music, sublabel: 'Templates' },
    { id: 'project-templates', type: 'section', label: 'Project Templates', sectionId: 'project-templates', Icon: FolderOpen, sublabel: 'Templates' },
    // Learning
    { id: 'dojo', type: 'section', label: 'Shortcut Dojo', sectionId: 'dojo', Icon: Sword, sublabel: 'Learning' },
    { id: 'midi-mapping', type: 'section', label: 'MIDI Mapping', sectionId: 'midi-mapping', Icon: Keyboard, sublabel: 'Learning' },
    { id: 'modules', type: 'section', label: 'The Big 5 (UI)', sectionId: 'modules', Icon: Monitor, sublabel: 'Learning' },
    // Tools
    { id: 'utilities', type: 'section', label: 'Studio Calculator', sectionId: 'utilities', Icon: Calculator, sublabel: 'Tools' },
    { id: 'troubleshoot', type: 'section', label: 'Troubleshooting', sectionId: 'troubleshoot', Icon: Wrench, sublabel: 'Tools' },
    { id: 'ai-assistant', type: 'section', label: 'AI Assistant', sectionId: 'ai-assistant', Icon: Sparkles, sublabel: 'Smart' },
    { id: 'export', type: 'section', label: 'Export Guide', sectionId: 'export', Icon: Upload, sublabel: 'Tools' },
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
      .slice(0, 10)
      .map(p => ({
        id: `plugin-${p.id}`,
        type: 'plugin' as const,
        label: p.name,
        sublabel: p.category,
        Icon: Plug,
        sectionId: 'plugins-database',
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
      navigateToSection('plugins-database');
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
               No results found for &quot;{query}&quot;
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
              <result.Icon className="w-5 h-5 text-[var(--accent-tertiary)]" />
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
