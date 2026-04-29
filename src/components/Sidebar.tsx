'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';

// Get basePath for GitHub Pages compatibility
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

import {
  LayoutGrid,
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
  X,
  ChevronLeft,
  ChevronRight,
  Settings
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
  collapsed?: boolean;
  onToggleCollapse?: () => void;
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
  collapsed = false,
  onToggleCollapse,
  onOpenCommandPalette
}: SidebarProps) => {
  // Navigation items
  const navItems: NavItem[] = [
    { id: 'home', label: 'All Tools', category: 'Browse', Icon: LayoutGrid },
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
    'Browse': true,
    'Workflow': true
  });

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
        className={`transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-all duration-300 fixed md:sticky top-20 inset-y-0 left-0 ${collapsed ? 'w-16' : 'w-64'} h-[calc(100vh-5rem)] glass-sidebar flex flex-col z-40 transition-width`}
      >
        {/* Header - No Logo, Just Collapse Toggle */}
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-end'} p-4 h-16 border-b border-[var(--glass-border)] transition-all`}>
          {/* Collapse Toggle Button (Desktop Only) */}
          <button
            onClick={onToggleCollapse}
            className="hidden md:flex p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>

          {/* Mobile Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden p-3 space-y-2 scrollbar-hide">
          {Object.entries(navGroups).map(([category, items]) => (
            <div key={category} className="mb-2">
              {!collapsed && (
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
              )}
              {collapsed && (
                <div className="w-full h-px bg-white/5 my-2 mx-auto w-1/2" />
              )}

              <div className={`space-y-1 overflow-hidden transition-all duration-300 ${(!collapsed && expandedCategories[category]) || collapsed ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      navigateToSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`nav-item w-full flex items-center ${collapsed ? 'justify-center px-0' : 'justify-start px-3'} py-2 rounded-lg transition-all ${activeSection === item.id
                        ? 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    title={collapsed ? item.label : undefined}
                  >
                    <item.Icon className={`w-4 h-4 ${activeSection === item.id ? 'text-[var(--accent-primary)]' : ''}`} />
                    {!collapsed && <span className="ml-3 truncate text-sm">{item.label}</span>}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer - Branding */}
        <div className="p-4 border-t border-[var(--glass-border)] bg-[var(--bg-secondary)]">
          {!collapsed ? (
            <div className="flex items-center gap-3 mb-4 transition-opacity duration-300">
              <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                <Image
                  src={`${basePath}/images/branding/icon.svg`}
                  alt="FL Studio Icon"
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(124,58,237,0.4)]"
                />
              </div>
              <div className="overflow-hidden whitespace-nowrap">
                <p className="text-xs font-medium text-white">FL Studio</p>
                <p className="text-[10px] text-[var(--text-dim)]">Producer Edition</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center mb-4">
              <div className="relative w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src={`${basePath}/images/branding/icon.svg`}
                  alt="FL Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}

          <button
            onClick={toggleSettings}
            className={`btn-glass w-full text-xs py-2 flex items-center ${collapsed ? 'justify-center' : 'justify-center gap-2'} hover:bg-white/10`}
            title="Settings"
          >
            <Settings className="w-4 h-4" />
            {!collapsed && <span>Settings</span>}
          </button>
        </div>
      </aside>
    </>
  );
};
