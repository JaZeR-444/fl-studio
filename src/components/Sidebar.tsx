'use client';

import { useState, useMemo, ReactNode } from 'react';
import Image from 'next/image';

// Get basePath for GitHub Pages compatibility
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

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
  LucideIcon,
  Rocket,
  Disc3,
  Library,
  X
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  navigateToSection: (sectionId: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleSettings?: () => void;
  onOpenCommandPalette: () => void;
}

interface NavItem {
  id: string;
  label: string;
  category: string;
  Icon: LucideIcon;
  count?: number;
}

export const Sidebar = ({
  activeSection,
  navigateToSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  toggleSettings,
  onOpenCommandPalette
}: SidebarProps) => {
  // Local search removed in favor of global command palette
  // Navigation items with professional Lucide SVG icons
  const navItems: NavItem[] = [
    { id: 'home', label: 'All Tools', category: 'Browse', Icon: LayoutGrid },
    { id: 'plugins', label: 'Instruments & Synths', category: 'Browse', Icon: Piano },
    { id: 'plugins-database', label: 'Plugin Database', category: 'Browse', Icon: Plug },
    { id: 'native-advantages', label: 'Native Advantages', category: 'Browse', Icon: Zap },
    { id: 'workflow-chains', label: 'Workflow Chains', category: 'Workflow', Icon: RefreshCw },
    { id: 'workflow-visualizations', label: 'Workflow Visuals', category: 'Workflow', Icon: BarChart3 },
    { id: 'synthesis-history', label: 'Synthesis History', category: 'Workflow', Icon: BookOpen },
    { id: 'audio', label: 'Audio & Recording', category: 'Production', Icon: Mic },
    { id: 'mixing', label: 'Mixing & Mastering', category: 'Production', Icon: SlidersHorizontal },
    { id: 'audio-analysis', label: 'Audio Analysis', category: 'Production', Icon: TrendingUp },
    { id: 'genre-presets', label: 'Genre Presets', category: 'Production', Icon: Disc3 },
    { id: 'sample-packs', label: 'Sample Pack Reference', category: 'Production', Icon: Library },
    { id: 'templates', label: 'Song Templates', category: 'Templates', Icon: Music },
    { id: 'project-templates', label: 'Project Templates', category: 'Templates', Icon: FolderOpen },
    { id: 'mixer-templates', label: 'Mixer Templates', category: 'Templates', Icon: SlidersHorizontal },
    { id: 'quick-start', label: 'Quick Start Guides', category: 'Learning', Icon: Rocket },
    { id: 'dojo', label: 'Shortcut Dojo', category: 'Learning', Icon: Sword },
    { id: 'midi-mapping', label: 'MIDI Mapping', category: 'Learning', Icon: Keyboard },
    { id: 'modules', label: 'The Big 5 (UI)', category: 'Learning', Icon: Monitor },
    { id: 'utilities', label: 'Studio Calculator', category: 'Tools', Icon: Calculator },
    { id: 'troubleshoot', label: 'Troubleshooting', category: 'Tools', Icon: Wrench },
    { id: 'ai-assistant', label: 'AI Assistant', category: 'Smart', Icon: Sparkles },
    { id: 'export', label: 'Export Guide', category: 'Tools', Icon: Upload },
  ];

  // Group navigation items by category
  const navGroups = useMemo(() => {
    return navItems.reduce((groups, item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
      return groups;
    }, {} as Record<string, NavItem[]>);
  }, []);

  // Accordion State
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'Browse': true, // Default open
    'Workflow': true
  });

  // Auto-expand category when active section changes
  useMemo(() => {
    const activeItem = navItems.find(item => item.id === activeSection);
    if (activeItem) {
      setExpandedCategories(prev => ({
        ...prev,
        [activeItem.category]: true
      }));
    }
  }, [activeSection]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };



  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      
      <aside 
        id="sidebar" 
        className={`transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 fixed md:sticky top-20 inset-y-0 left-0 w-64 h-[calc(100vh-5rem)] glass-sidebar flex flex-col z-40`}
      >
        {/* Header with Logo */}
        <div className="p-5 border-b border-[var(--glass-border)]">
          <div className="flex items-center justify-between mb-4">
            <div className="relative h-8 w-32">
              <Image 
                src={`${basePath}/images/branding/logo-white.svg`} 
                alt="FL Studio Master Hub" 
                fill
                className="object-contain object-left drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[var(--text-dim)] bg-[var(--glass-bg)] px-2 py-1 rounded">
                v21+
              </span>
              {/* Mobile Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="md:hidden p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-2">
        {Object.entries(navGroups).map(([category, items]) => (
          <div key={category} className="mb-2">
            <button 
              onClick={() => toggleCategory(category)}
              className="w-full flex items-center justify-between px-3 py-2 text-[10px] font-semibold text-[var(--text-dim)] uppercase tracking-wider hover:text-white transition-colors group"
            >
              <span>{category}</span>
              <svg 
                className={`w-3 h-3 transition-transform duration-200 ${expandedCategories[category] ? 'rotate-180' : ''} text-[var(--text-dim)] group-hover:text-white`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`space-y-1 overflow-hidden transition-all duration-300 ${expandedCategories[category] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    navigateToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`nav-item w-full text-left ml-2 border-l border-white/5 ${
                    activeSection === item.id ? 'active border-l-2 !border-l-[var(--accent-primary)]' : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <item.Icon className="w-4 h-4 text-[var(--accent-tertiary)]" />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.count && (
                    <span className="nav-count">{item.count}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[var(--glass-border)] bg-[var(--bg-secondary)]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image 
                src={`${basePath}/images/branding/icon.svg`} 
                alt="FL Studio Icon" 
                fill
                className="object-contain drop-shadow-[0_0_8px_rgba(124,58,237,0.4)]"
              />
            </div>
            <div>
              <p className="text-xs font-medium text-white">FL Studio</p>
              <p className="text-[10px] text-[var(--text-dim)]">Producer Edition</p>
            </div>
          </div>
        </div>
        
        <button
          onClick={toggleSettings}
          className="btn-glass w-full text-xs py-2"
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </span>
        </button>
      </div>
    </aside>
    </>
  );
};
