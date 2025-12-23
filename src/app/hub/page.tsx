'use client';

import { useState } from 'react';
import { AppProvider, useAppContext } from '@/context/AppContext';

// Import components
import { Sidebar } from '@/components/Sidebar';
import { HeroSection } from '@/components/HeroSection';
import { MentalModelSection } from '@/components/sections/MentalModel';
import { ModulesSection } from '@/components/sections/Modules';
import { DojoSection } from '@/components/sections/Dojo';
import { TemplatesSection } from '@/components/sections/Templates';
import { AudioSection } from '@/components/sections/Audio';
import { UtilitiesSection } from '@/components/sections/Utilities';
import { PluginsSection } from '@/components/sections/Plugins';
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
import { SettingsPanel } from '@/components/SettingsPanel';

// Inner component that consumes the context
const FLStudioHubContent = () => {
  const { state, dispatch } = useAppContext();
  const [showSettings, setShowSettings] = useState(false);

  // Handle section navigation
  const navigateToSection = (sectionId: string) => {
    dispatch({ type: 'SET_ACTIVE_SECTION', payload: sectionId });
    window.history.pushState(null, '', `#${sectionId}`);
    // Close mobile menu if open
    if (window.innerWidth < 768) {
      dispatch({ type: 'SET_MOBILE_MENU', payload: false });
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    dispatch({ type: 'TOGGLE_MOBILE_MENU' });
  };

  // Toggle settings panel
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="min-h-screen">


      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          activeSection={state.activeSection}
          navigateToSection={navigateToSection}
          darkMode={state.darkMode}
          toggleDarkMode={toggleDarkMode}
          mobileMenuOpen={state.mobileMenuOpen}
          setMobileMenuOpen={(open: boolean) => dispatch({ type: 'SET_MOBILE_MENU', payload: open })}
          toggleSettings={toggleSettings}
        />

        {/* Main Content Area */}
        <main className="flex-1 min-h-screen pt-24 md:pt-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-10">
            {/* Hero Section for Home */}
            {state.activeSection === 'home' && (
              <HeroSection
                onExploreTools={() => navigateToSection('plugins')}
                totalPlugins={50}
                totalWorkflows={25}
                totalTemplates={30}
              />
            )}

            {/* Sponsored/Featured Section for Home */}
            {state.activeSection === 'home' && (
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-white">Sponsored Listings</h2>
                  <span className="text-sm text-[var(--text-muted)]">Featured FL Studio tools and services</span>
                  <span className="badge badge-premium ml-auto">Premium</span>
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

            {/* Plugins Section */}
            {state.activeSection === 'plugins' && <PluginsSection />}

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
          </div>
        </main>
      </div>

      {/* Settings Panel */}
      <SettingsPanel
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />

      {/* Mobile Overlay */}
      {state.mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => dispatch({ type: 'SET_MOBILE_MENU', payload: false })}
        />
      )}
    </div>
  );
};

export default function FLStudioHub() {
  return (
    <AppProvider>
      <FLStudioHubContent />
    </AppProvider>
  );
}
