'use client';

import { useState, useEffect, ReactNode } from 'react';
import { AppProvider, useAppContext } from '@/context/AppContext';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  RefreshCw,
  Mic,
  FolderOpen,
  GraduationCap,
  Wrench,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Get basePath for GitHub Pages compatibility
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Import components
import { Sidebar } from '@/components/Sidebar';
import { HeroSection } from '@/components/HeroSection';
import { MentalModelSection } from '@/components/sections/MentalModel';
import { ModulesSection } from '@/components/sections/Modules';
import { DojoSection } from '@/components/sections/Dojo';
import { TemplatesSection } from '@/components/sections/Templates';
import { AudioSection } from '@/components/sections/Audio';
import { UtilitiesSection } from '@/components/sections/Utilities';

import { AIAssistantSection } from '@/components/sections/AIAssistant';
import { MixingSection } from '@/components/sections/Mixing';
import { ExportSection } from '@/components/sections/Export';
import { TroubleshootSection } from '@/components/sections/Troubleshoot';
import { ProjectTemplatesSection } from '@/components/sections/ProjectTemplates';
import { WorkflowVisualizationsSection } from '@/components/sections/WorkflowVisualizations';
import { MidiMappingReference } from '@/components/sections/MidiMappingReference';
import { AudioAnalysisSection } from '@/components/sections/AudioAnalysis';
import { PluginsDatabase } from '@/components/sections/PluginsDatabase';
import { NativeAdvantages } from '@/components/sections/NativeAdvantages';
import { WorkflowChains } from '@/components/sections/WorkflowChains';
import { SynthesisHistory } from '@/components/sections/SynthesisHistory';
import { QuickStartGuidesSection } from '@/components/sections/QuickStartGuides';
import { MixerTemplatesSection } from '@/components/sections/MixerTemplates';
import { GenrePresetsSection } from '@/components/sections/GenrePresets';
import { SamplePackReference } from '@/components/sections/SamplePackReference';
import { SettingsPanel } from '@/components/SettingsPanel';
import { CommandPalette } from '@/components/CommandPalette';
import { MobileBottomNav } from '@/components/MobileBottomNav';

// Quick Access section configuration with Lucide icons
const quickAccessSections: { id: string; label: string; Icon: React.ComponentType<{ className?: string }>; desc: string }[] = [
  { id: 'plugins-database', label: 'Browse', Icon: Search, desc: 'Explore all tools' },
  { id: 'workflow-chains', label: 'Workflow', Icon: RefreshCw, desc: 'Production chains' },
  { id: 'audio', label: 'Production', Icon: Mic, desc: 'Recording & mixing' },
  { id: 'templates', label: 'Templates', Icon: FolderOpen, desc: 'Project starters' },
  { id: 'quick-start', label: 'Learning', Icon: GraduationCap, desc: 'Guides & tutorials' },
  { id: 'utilities', label: 'Tools', Icon: Wrench, desc: 'Calculators & utils' },
];

// Inner component that consumes the context
const FLStudioHubContent = () => {
  const { state, dispatch } = useAppContext();
  const [showSettings, setShowSettings] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  // Note: showCommandPalette now comes from context (state.showCommandPalette)

  // Handle section navigation with history support
  const navigateToSection = (sectionId: string) => {
    if (state.activeSection === sectionId) return;
    dispatch({ type: 'SET_ACTIVE_SECTION', payload: sectionId });
    window.history.pushState({ sectionId }, '', `#${sectionId}`);

    // Close mobile menu if open
    if (window.innerWidth < 768) {
      dispatch({ type: 'SET_MOBILE_MENU', payload: false });
    }
  };

  // Note: Keyboard shortcut for command palette is now handled in Navbar

  // Sync state with URL hash on mount and handle back/forward navigation
  useEffect(() => {
    // 1. Handle initial hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove '#'
      if (hash && hash !== state.activeSection) {
        dispatch({ type: 'SET_ACTIVE_SECTION', payload: hash });
      }
    };

    // Run on mount
    handleHashChange();

    // 2. Handle browser back/forward buttons
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.sectionId) {
        dispatch({ type: 'SET_ACTIVE_SECTION', payload: event.state.sectionId });
      } else {
        // Fallback to hash if state is missing (e.g. external link)
        handleHashChange();
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []); // Empty dependency array = run once on mount (plus cleanup)

  // Toggle dark mode
  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  // Toggle settings panel
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="min-h-screen w-full overflow-hidden font-sans bg-slate-950 dark:bg-slate-950 relative">
      {/* ANIMATED BACKGROUND LAYER */}
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        style={{
          backgroundImage: `url(${basePath}/fl-studio-test-new-background.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          filter: 'blur(1px)',
        }}
      >
        <div
          className="absolute inset-0 animate-slow-drift"
          style={{
            backgroundImage: `url(${basePath}/fl-studio-test-new-background.svg)`,
            backgroundSize: '110%',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* MAIN CONTAINER - Full Screen */}
      <div className="w-full h-screen flex flex-col bg-slate-900/50 dark:bg-slate-900/50 relative z-10">

        {/* TOP NAVIGATION BAR */}
        <div className="h-14 border-b flex items-center justify-between px-4 shrink-0 z-30 select-none bg-slate-950 dark:bg-slate-950 border-white/10">
          {/* Left: Icon */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded">
            <Image
              src={`${basePath}/images/branding/icon.svg`}
              alt="FL Studio"
              width={32}
              height={32}
              className="object-contain"
            />
          </Link>

          {/* Center: Toggle Pill */}
          <div className="flex items-center rounded-full p-1 border bg-slate-800 dark:bg-slate-800 border-white/10">
            <Link
              href="/"
              className="px-4 py-1.5 rounded-full text-xs font-bold transition-all text-gray-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            >
              Home
            </Link>
            <button
              className="px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-md transition-all bg-purple-600 hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            >
              Studio Hub
            </button>
          </div>

          {/* Right: Search */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 transition-colors text-gray-400 hover:text-white rounded-lg hover:bg-white/5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>
            {searchOpen && (
              <div className="flex items-center rounded-lg border bg-slate-800 border-white/10 px-3">
                <input
                  type="text"
                  className="w-64 bg-transparent border-none text-sm focus:outline-none py-2 text-white placeholder:text-gray-500"
                  placeholder="Search..."
                  autoFocus
                />
              </div>
            )}
          </div>
        </div>

        {/* MAIN APP BODY */}
        <div className="flex flex-1 overflow-hidden relative">
          {/* RETRACTABLE SIDEBAR - Hidden on mobile, uses bottom nav instead */}
          <div className={`hidden md:flex border-r flex-col shrink-0 transition-all duration-300 ease-in-out z-20 pt-6 relative bg-slate-950 dark:bg-slate-950 border-white/10 ${sidebarCollapsed ? 'w-16' : 'w-64'}`}>
            {/* Old Sidebar component content here - will be replaced next */}
            <Sidebar
              activeSection={state.activeSection}
              navigateToSection={navigateToSection}
              darkMode={state.darkMode}
              toggleDarkMode={toggleDarkMode}
              mobileMenuOpen={state.mobileMenuOpen}
              setMobileMenuOpen={(open: boolean) => dispatch({ type: 'SET_MOBILE_MENU', payload: open })}
              toggleSettings={toggleSettings}
              onOpenCommandPalette={() => dispatch({ type: 'SET_COMMAND_PALETTE', payload: true })}
              collapsed={sidebarCollapsed}
              onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
            />
          </div>

          {/* MAIN CONTENT AREA */}
          <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
            <div className="w-full px-4 py-6 md:py-10">
              {/* Hero Section for Home */}
              {state.activeSection === 'home' && (
                <HeroSection
                  onExploreTools={() => navigateToSection('plugins-database')}
                  onQuickStart={() => navigateToSection('quick-start')}
                  totalPlugins={50}
                  totalWorkflows={25}
                  totalTemplates={30}
                />
              )}

              {/* Quick Access Section Cards */}
              {state.activeSection === 'home' && (
                <div className="mt-8">
                  <h2 className="text-xl font-bold text-white mb-4">Jump To Section</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {quickAccessSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => navigateToSection(section.id)}
                        className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[var(--accent-primary)]/50 transition-all group text-left"
                      >
                        <div className="mb-2">
                          <section.Icon className="w-6 h-6 text-[var(--accent-tertiary)]" />
                        </div>
                        <h3 className="font-semibold text-white text-sm group-hover:text-[var(--accent-primary)] transition-colors">
                          {section.label}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)] mt-1">{section.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Featured Tools Section for Home */}
              {state.activeSection === 'home' && (
                <div className="mt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-white">Featured Tools</h2>
                    <span className="text-sm text-[var(--text-muted)]">Curated FL Studio essentials</span>
                    <span className="badge badge-premium ml-auto">Editor&apos;s Pick</span>
                  </div>
                  <MentalModelSection />
                </div>
              )}

              {/* Modules Section */}
              {state.activeSection === 'modules' && <ModulesSection />}

              {/* Dojo Section */}
              {state.activeSection === 'dojo' && <DojoSection />}

              {/* Templates Section */}
              {state.activeSection === 'templates' && <TemplatesSection />}

              {/* Audio Section */}
              {state.activeSection === 'audio' && <AudioSection />}

              {/* Utilities Section */}
              {state.activeSection === 'utilities' && <UtilitiesSection />}



              {/* AI Assistant Section */}
              {state.activeSection === 'ai-assistant' && <AIAssistantSection />}

              {/* Mixing Section */}
              {state.activeSection === 'mixing' && <MixingSection />}

              {/* Export Section */}
              {state.activeSection === 'export' && <ExportSection />}

              {/* Troubleshoot Section */}
              {state.activeSection === 'troubleshoot' && <TroubleshootSection />}

              {/* Project Templates Section */}
              {state.activeSection === 'project-templates' && <ProjectTemplatesSection />}

              {/* Workflow Visualizations Section */}
              {state.activeSection === 'workflow-visualizations' && <WorkflowVisualizationsSection />}

              {/* MIDI Mapping Reference Section */}
              {state.activeSection === 'midi-mapping' && <MidiMappingReference />}

              {/* Audio Analysis Section */}
              {state.activeSection === 'audio-analysis' && <AudioAnalysisSection />}

              {/* Plugins Database Section */}
              {state.activeSection === 'plugins-database' && <PluginsDatabase />}

              {/* Native Advantages Section */}
              {state.activeSection === 'native-advantages' && <NativeAdvantages />}

              {/* Workflow Chains Section */}
              {state.activeSection === 'workflow-chains' && <WorkflowChains />}

              {/* Synthesis History Section */}
              {state.activeSection === 'synthesis-history' && <SynthesisHistory />}

              {/* Quick Start Guides Section */}
              {state.activeSection === 'quick-start' && <QuickStartGuidesSection />}

              {/* Mixer Templates Section */}
              {state.activeSection === 'mixer-templates' && <MixerTemplatesSection />}

              {/* Genre Presets Section */}
              {state.activeSection === 'genre-presets' && <GenrePresetsSection />}

              {/* Sample Pack Reference Section */}
              {state.activeSection === 'sample-packs' && <SamplePackReference />}
            </div>
          </main>
        </div>
      </div>

      {/* Settings Panel */}
      <SettingsPanel
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />

      {/* Command Palette */}
      <CommandPalette
        isOpen={state.showCommandPalette}
        onClose={() => dispatch({ type: 'SET_COMMAND_PALETTE', payload: false })}
        navigateToSection={navigateToSection}
      />

      {/* Mobile Overlay */}
      {state.mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => dispatch({ type: 'SET_MOBILE_MENU', payload: false })}
        />
      )}

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        activeSection={state.activeSection}
        navigateToSection={navigateToSection}
        onOpenSearch={() => dispatch({ type: 'SET_COMMAND_PALETTE', payload: true })}
      />
    </div>
  );
};

export default function FLStudioHub() {
  return <FLStudioHubContent />;
}
