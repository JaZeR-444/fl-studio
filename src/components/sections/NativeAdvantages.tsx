'use client';

import { useState } from 'react';
import { 
  Piano, 
  Link, 
  Zap, 
  Waves, 
  Sparkles, 
  Image, 
  Maximize2, 
  SlidersHorizontal,
  Lightbulb
} from 'lucide-react';

import { ExtendedPlugin } from '@/types/pluginTypes';
import allPluginsData from '@/data/plugins/allPlugins.json';

const allPlugins: ExtendedPlugin[] = allPluginsData as unknown as ExtendedPlugin[];

const nativeFeatures = [
  {
    title: "Per-Note Slide Data Interpretation",
    Icon: Piano,
    description: "Native generators (Sytrus, Harmor, Kepler Exo) interpret slide notes directly from the Piano Roll, enabling polyphonic portamento where individual notes in a chord can slide independently.",
    plugins: ["Sytrus", "Harmor", "Kepler Exo"],
    benefit: "This is impossible for standard MIDI-based VSTs without complex MPE configurations."
  },
  {
    title: "Internal Modulation Sources Exposure",
    Icon: Link,
    description: "Native parameters are exposed directly to FL Studio's internal modulation engines (Formula Controller, Peak Controller, Envelope Controller) without the MIDI Learn wrapper required for VSTs.",
    plugins: ["All Native Plugins"],
    benefit: "More responsive and CPU-efficient modulation compared to external plugins."
  },
  {
    title: "CPU Efficiency Through Native Architecture",
    Icon: Zap,
    description: "Native code bypasses translation layers required for VST hosting. Sytrus can run extensive FM matrices with high oversampling that would significantly tax a system if running as an external plugin.",
    plugins: ["Sytrus", "Harmor", "Ogun"],
    benefit: "Higher performance with complex configurations compared to external plugins."
  },
  {
    title: "Additive Filtering by Omission",
    Icon: Waves,
    description: "Harmor generates frequency spectrum directly rather than filtering a waveform. When adjusting filter cutoff, the engine ceases generating specific partials, creating theoretically infinite slope filters with zero phase distortion.",
    plugins: ["Harmor"],
    benefit: "True infinite slope filters with zero phase distortion, impossible with traditional filter models."
  },
  {
    title: "Synthesis-Level Effects (Blur/Reverb)",
    Icon: Sparkles,
    description: "Effects like Blur in Harmor exist at the synthesis level, making reverb part of the voice itself, allowing per-note enveloping, filtering, and modulation—impossible with post-output effects.",
    plugins: ["Harmor", "LuxeVerb"],
    benefit: "Effects become part of the synthesis voice, enabling per-note control and modulation."
  },
  {
    title: "Direct Image-to-Spectrum Conversion",
    Icon: Image,
    description: "Harmor can import images and convert them into additive data, allowing sound designers to paint filters or import photographs to generate complex, evolving textures.",
    plugins: ["Harmor"],
    benefit: "Unique image-based synthesis capabilities unavailable to external plugins."
  },
  {
    title: "Vector Scalability",
    Icon: Maximize2,
    description: "Native plugins scale cleanly to any screen resolution without pixelation or aliasing artifacts, maintaining crisp interfaces at high DPI settings.",
    plugins: ["All Native Plugins"],
    benefit: "Perfect fidelity on high-resolution displays without UI degradation."
  },
  {
    title: "Deep DAW Integration",
    Icon: SlidersHorizontal,
    description: "Native plugins have access to internal DAW functions like Piano Roll data, internal modulation sources, and FL Studio's event system that third-party plugins cannot access.",
    plugins: ["All Native Plugins"],
    benefit: "Deeper integration with FL Studio's workflow and features."
  }
];

// Generate advantages map from data
const pluginAdvantages = allPlugins.reduce((acc, plugin) => {
  if (plugin.nativeStatus && plugin.proTips && plugin.proTips.length > 0) {
    acc[plugin.name] = plugin.proTips;
  }
  return acc;
}, {} as { [key: string]: string[] });

export const NativeAdvantages = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [selectedPlugin, setSelectedPlugin] = useState<string | null>(null);

  // Get all plugins that have native advantages
  const pluginsWithAdvantages = Object.keys(pluginAdvantages).sort();

  return (
    <section id="native-advantages" className="page-section animate-fade">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Native Plugin</span>
          <span className="text-white"> Advantages</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          Discover the exclusive capabilities that only FL Studio native plugins can provide.
        </p>
      </div>
      
      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex gap-2">
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'features'
                ? 'bg-[var(--accent-primary)] text-white'
                : 'bg-[var(--glass-bg)] text-[var(--text-muted)] border border-[var(--glass-border)] hover:text-white'
            }`}
            onClick={() => {
              setActiveTab('features');
              setSelectedPlugin(null);
            }}
          >
            Native Features
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'plugins'
                ? 'bg-[var(--accent-primary)] text-white'
                : 'bg-[var(--glass-bg)] text-[var(--text-muted)] border border-[var(--glass-border)] hover:text-white'
            }`}
            onClick={() => setActiveTab('plugins')}
          >
            Plugin-Specific Benefits
          </button>
        </div>
      </div>

      {/* Features Tab */}
      {activeTab === 'features' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {nativeFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="content-card p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center shrink-0">
                  <feature.Icon className="w-6 h-6 text-[var(--accent-tertiary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                  <div className="flex flex-wrap gap-1">
                    {feature.plugins.map((plugin, idx) => (
                      <span 
                        key={idx} 
                        className="badge badge-purple text-xs"
                      >
                        {plugin}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-[var(--text-muted)] mb-4 text-sm">{feature.description}</p>
              
              <div className="p-3 rounded-lg bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)]">
                <p className="text-sm text-blue-200/80">
                  <span className="font-bold text-blue-300">Benefit:</span> {feature.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Plugins Tab */}
      {activeTab === 'plugins' && (
        <div>
          {/* Plugin Selector */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-4">Select a Plugin to View Native Advantages</h3>
            <div className="flex flex-wrap gap-2">
              {pluginsWithAdvantages.map(plugin => (
                <button
                  key={plugin}
                  onClick={() => setSelectedPlugin(plugin)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedPlugin === plugin
                      ? 'bg-[var(--accent-primary)] text-white'
                      : 'bg-[var(--glass-bg)] text-[var(--text-muted)] border border-[var(--glass-border)] hover:text-white hover:bg-[var(--glass-bg-hover)]'
                  }`}
                >
                  {plugin}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Plugin Details */}
          {selectedPlugin && (
            <div className="content-card p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center">
                    <Piano className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{selectedPlugin} Advantages</h3>
                </div>
                <span className="badge badge-green">Native Only</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                {pluginAdvantages[selectedPlugin].map((advantage, idx) => (
                  <li key={idx} className="flex items-start p-3 rounded-lg bg-[var(--glass-bg)]">
                    <span className="text-[var(--accent-secondary)] mr-3 mt-0.5">✓</span>
                    <span className="text-[var(--text-secondary)]">{advantage}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-[var(--glass-border)]">
                <h4 className="font-bold text-white mb-3">Why These Matter</h4>
                <p className="text-[var(--text-muted)]">
                  These native-only advantages mean that replacing {selectedPlugin} with a third-party alternative 
                  would lose these specific integrations and efficiencies that are only possible through direct DAW integration.
                </p>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!selectedPlugin && (
            <div className="content-card p-12 text-center">
              <div className="mb-4">
                <Piano className="w-12 h-12 text-[var(--accent-tertiary)] mx-auto" />
              </div>
              <p className="text-[var(--text-muted)]">
                Select a plugin above to see its native-only advantages and features
              </p>
            </div>
          )}
        </div>
      )}

      {/* Key Insight */}
      <div className="mt-8 p-6 rounded-lg bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.2)]">
        <h3 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
          <Lightbulb className="w-5 h-5" /> Key Insight
        </h3>
        <p className="text-yellow-200/80">
          The All Plugins Edition value proposition lies not just in the quantity of plugins, but in the unique capabilities 
          that only native FL Studio plugins can provide. These native advantages—per-note slide data, internal modulation 
          routing, CPU efficiency, and synthesis-level effects—are impossible to replicate with third-party VSTs.
        </p>
      </div>
    </section>
  );
};