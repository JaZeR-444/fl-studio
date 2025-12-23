'use client';

import { useState } from 'react';
import { AppProvider, useAppContext } from '@/context/AppContext';

// Import components
import { Sidebar } from '@/components/Sidebar';
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
<>
  <div className="flex flex-col md:flex-row min-h-dvh text-stone-800 dark:text-zinc-300 antialiased overflow-hidden bg-transparent">
    {/* Mobile Header */}
    <div className="md:hidden fixed w-full bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border-b border-stone-200/60 dark:border-zinc-700/60 z-50 flex items-center justify-between p-4">
      <h1 className="font-bold text-lg text-orange-600">FL Studio Hub</h1>
      <button
        onClick={toggleMobileMenu}
        className="p-2 text-purple-primary-300 hover:text-purple-primary-100 focus:outline-none"
      >
        <span className="text-2xl">☰</span>
      </button>
    </div>

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
    <main className="flex-1 h-full overflow-y-auto bg-transparent pt-16 md:pt-0">
      <div className="max-w-5xl mx-auto p-6 md:p-12">
        {/* Mental Model Section */}
        {state.activeSection === 'home' && <MentalModelSection />}

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

        {/* Settings Panel */}
        <SettingsPanel
          isOpen={showSettings}
          onClose={() => setShowSettings(false)}
        />
      </div>
    </>
  );
};

export default function FLStudioHub() {
  return (
    <AppProvider>
      <FLStudioHubContent />
    </AppProvider>
  );
}
