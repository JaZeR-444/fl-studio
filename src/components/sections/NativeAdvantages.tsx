// src/components/sections/NativeAdvantages.tsx
import { useState } from 'react';
import { PluginFamily } from '@/types/pluginTypes';

const nativeFeatures = [
  {
    title: "Per-Note Slide Data Interpretation",
    description: "Native generators (Sytrus, Harmor, Kepler Exo) interpret slide notes directly from the Piano Roll, enabling polyphonic portamento where individual notes in a chord can slide independently.",
    plugins: ["Sytrus", "Harmor", "Kepler Exo"],
    benefit: "This is impossible for standard MIDI-based VSTs without complex MPE configurations."
  },
  {
    title: "Internal Modulation Sources Exposure",
    description: "Native parameters are exposed directly to FL Studio's internal modulation engines (Formula Controller, Peak Controller, Envelope Controller) without the MIDI Learn wrapper required for VSTs.",
    plugins: ["All Native Plugins"],
    benefit: "More responsive and CPU-efficient modulation compared to external plugins."
  },
  {
    title: "CPU Efficiency Through Native Architecture",
    description: "Native code bypasses translation layers required for VST hosting. For example, Sytrus can run extensive FM matrices with high oversampling that would significantly tax a system if running as an external plugin.",
    plugins: ["Sytrus", "Harmor", "Ogun"],
    benefit: "Higher performance with complex configurations compared to external plugins."
  },
  {
    title: "Additive Filtering by Omission",
    description: "Harmor generates frequency spectrum directly rather than filtering a waveform. When adjusting filter cutoff, the engine ceases generating specific partials, creating theoretically infinite slope filters with zero phase distortion.",
    plugins: ["Harmor"],
    benefit: "True infinite slope filters with zero phase distortion, impossible with traditional filter models."
  },
  {
    title: "Synthesis-Level Effects (Blur/Reverb)",
    description: "Effects like Blur in Harmor exist at the synthesis level, making reverb part of the voice itself, allowing per-note enveloping, filtering, and modulation—impossible with post-output effects.",
    plugins: ["Harmor", "LuxeVerb"],
    benefit: "Effects become part of the synthesis voice, enabling per-note control and modulation."
  },
  {
    title: "Direct Image-to-Spectrum Conversion",
    description: "Harmor can import images and convert them into additive data, allowing sound designers to paint filters or import photographs to generate complex, evolving textures that are impossible to create via standard oscillation.",
    plugins: ["Harmor"],
    benefit: "Unique image-based synthesis capabilities unavailable to external plugins."
  },
  {
    title: "Vector Scalability",
    description: "Native plugins scale cleanly to any screen resolution without pixelation or aliasing artifacts, maintaining crisp interfaces at high DPI settings.",
    plugins: ["All Native Plugins"],
    benefit: "Perfect fidelity on high-resolution displays without UI degradation."
  },
  {
    title: "Deep DAW Integration",
    description: "Native plugins have access to internal DAW functions like Piano Roll data, internal modulation sources, and FL Studio's event system that third-party plugins cannot access.",
    plugins: ["All Native Plugins"],
    benefit: "Deeper integration with FL Studio's workflow and features."
  }
];

const pluginAdvantages = {
  "Harmor": [
    "Per-note slide data interpretation",
    "Direct image-to-spectrum conversion", 
    "516 partials per note",
    "Prism and Blur effects at synthesis level"
  ],
  "Sytrus": [
    "6x6 modulation matrix access to internal sources",
    "Up to 64x oversampling efficiency",
    "Triple filter architecture"
  ],
  "Sakura": [
    "5-stage physical modeling (Hanami method)",
    "Dual string interaction simulation",
    "8-resonator body simulation"
  ],
  "Gross Beat": [
    "2-bar rolling buffer synchronization",
    "36 time and volume envelopes in DAW sequence",
    "Tempo-synced manipulation"
  ],
  "Transporter": [
    "Transient detection within DAW signal flow",
    "Playlist integration for pattern-based triggering",
    "Real-time performance manipulation"
  ],
  "NewTone": [
    "Full playlist integration",
    "MIDI data derivation from audio",
    "Note-based editing in piano roll"
  ],
  "LuxeVerb": [
    "Pitch feedback in reverb tail",
    "Auto-ducking envelope linked to DAW transport",
    "Real-time modulation from internal sources"
  ],
  "Patcher": [
    "Preset saving across plugin chains",
    "Control Surface integration",
    "Custom GUI design linking to DAW parameters"
  ]
};

export const NativeAdvantages = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [selectedPlugin, setSelectedPlugin] = useState<string | null>(null);

  // Get all plugins that have native advantages
  const pluginsWithAdvantages = Object.keys(pluginAdvantages);

  return (
    <section id="native-advantages" className="page-section">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-6">Native Plugin Advantages</h2>
        
        <div className="mb-6">
          <div className="flex border-b border-stone-200 dark:border-zinc-700">
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === 'features'
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-stone-500 dark:text-zinc-400 hover:text-stone-700 dark:hover:text-zinc-300'
              }`}
              onClick={() => {
                setActiveTab('features');
                setSelectedPlugin(null);
              }}
            >
              Native Features
            </button>
            <button
              className={`px-4 py-2 font-medium ${
                activeTab === 'plugins'
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-stone-500 dark:text-zinc-400 hover:text-stone-700 dark:hover:text-zinc-300'
              }`}
              onClick={() => setActiveTab('plugins')}
            >
              Plugin-Specific Benefits
            </button>
          </div>
        </div>

        {activeTab === 'features' && (
          <div className="space-y-6">
            {nativeFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6"
              >
                <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-stone-600 dark:text-zinc-400 mb-3">{feature.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {feature.plugins.map((plugin, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-sm rounded-full"
                    >
                      {plugin}
                    </span>
                  ))}
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <span className="font-bold">Benefit:</span> {feature.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'plugins' && (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-4">Select a Plugin to View Native Advantages</h3>
              <div className="flex flex-wrap gap-2">
                {pluginsWithAdvantages.map(plugin => (
                  <button
                    key={plugin}
                    onClick={() => setSelectedPlugin(plugin)}
                    className={`px-4 py-2 rounded-lg ${
                      selectedPlugin === plugin
                        ? 'bg-orange-600 text-white'
                        : 'bg-stone-200 dark:bg-zinc-700 text-stone-700 dark:text-zinc-300 hover:bg-stone-300 dark:hover:bg-zinc-600'
                    }`}
                  >
                    {plugin}
                  </button>
                ))}
              </div>
            </div>

            {selectedPlugin && (
              <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-stone-800 dark:text-white">{selectedPlugin} Advantages</h3>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm rounded-full">
                    Native Only
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {pluginAdvantages[selectedPlugin as keyof typeof pluginAdvantages].map((advantage, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-500 mt-1 mr-2">•</span>
                      <span className="text-stone-700 dark:text-zinc-300">{advantage}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-stone-100 dark:border-zinc-700">
                  <h4 className="font-bold text-stone-800 dark:text-white mb-3">Why These Matter</h4>
                  <p className="text-stone-600 dark:text-zinc-400">
                    These native-only advantages mean that replacing {selectedPlugin} with a third-party alternative 
                    would lose these specific integrations and efficiencies that are only possible through direct DAW integration.
                  </p>
                </div>
              </div>
            )}

            {!selectedPlugin && (
              <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-12 text-center">
                <p className="text-stone-600 dark:text-zinc-400">
                  Select a plugin above to see its native-only advantages and features
                </p>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
          <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Key Insight</h3>
          <p className="text-amber-700 dark:text-amber-300">
            The All Plugins Edition value proposition lies not just in the quantity of plugins, but in the unique capabilities 
            that only native FL Studio plugins can provide. These native advantages—per-note slide data, internal modulation 
            routing, CPU efficiency, and synthesis-level effects—are impossible to replicate with third-party VSTs.
          </p>
        </div>
      </div>
    </section>
  );
};