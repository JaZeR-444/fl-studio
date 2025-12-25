'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Piano, 
  Link as LinkIcon, 
  Zap, 
  Waves, 
  Sparkles, 
  Image, 
  Maximize2, 
  SlidersHorizontal,
  Lightbulb,
  Check,
  X,
  ArrowRight,
  Shield
} from 'lucide-react';

import { ExtendedPlugin } from '@/types/pluginTypes';
import allPluginsData from '@/data/plugins/allPlugins.json';

const allPlugins: ExtendedPlugin[] = allPluginsData as unknown as ExtendedPlugin[];

// Helper to get plugin ID by name for linking
const getPluginId = (pluginName: string): string | null => {
  const plugin = allPlugins.find(p => p.name.toLowerCase() === pluginName.toLowerCase());
  return plugin?.id || null;
};

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
    Icon: LinkIcon,
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

// Comparison data for Native vs VST
const comparisonData = [
  { feature: "Per-Note Modulation", native: true, vst: false },
  { feature: "Internal Modulation Routing", native: true, vst: false },
  { feature: "Vector UI Scaling", native: true, vst: "partial" },
  { feature: "CPU Efficiency", native: "optimized", vst: "varies" },
  { feature: "Lifetime Free Updates", native: true, vst: false },
  { feature: "Piano Roll Integration", native: true, vst: false },
];

// Generate advantages map from data
const pluginAdvantages = allPlugins.reduce((acc, plugin) => {
  if (plugin.nativeStatus && plugin.proTips && plugin.proTips.length > 0) {
    acc[plugin.name] = plugin.proTips;
  }
  return acc;
}, {} as { [key: string]: string[] });

// Plugin Link Component
const PluginLink = ({ name }: { name: string }) => {
  const pluginId = getPluginId(name);
  
  if (pluginId) {
    return (
      <Link 
        href={`/plugins/${pluginId}`}
        className="badge badge-purple text-xs hover:bg-purple-500/30 transition-colors cursor-pointer"
      >
        {name}
      </Link>
    );
  }
  
  return (
    <span className="badge badge-purple text-xs">
      {name}
    </span>
  );
};

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

      {/* Why Native? Hero Card */}
      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-violet-900/40 to-indigo-900/40 border border-violet-500/20 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">Why Go Native?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Exclusive FL Studio integrations</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Lifetime free updates</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">~30% lower CPU in most cases</span>
              </div>
            </div>
            <Link 
              href="#native-comparison"
              className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              See the full comparison <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
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
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'comparison'
                ? 'bg-[var(--accent-primary)] text-white'
                : 'bg-[var(--glass-bg)] text-[var(--text-muted)] border border-[var(--glass-border)] hover:text-white'
            }`}
            onClick={() => setActiveTab('comparison')}
          >
            Native vs VST
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
                      <PluginLink key={idx} name={plugin} />
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

      {/* Comparison Tab */}
      {activeTab === 'comparison' && (
        <div id="native-comparison" className="content-card p-6">
          <h3 className="text-xl font-bold text-white mb-6">Native vs Third-Party VST Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--glass-border)]">
                  <th className="text-left py-3 px-4 text-[var(--text-muted)] font-medium">Capability</th>
                  <th className="text-center py-3 px-4 text-violet-400 font-medium">Native</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-medium">VST</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-b border-[var(--glass-border)]/50">
                    <td className="py-3 px-4 text-white">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      {row.native === true ? (
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <span className="text-green-400 text-sm">{row.native}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.vst === false ? (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      ) : row.vst === "partial" ? (
                        <span className="text-yellow-400 text-sm">Partial</span>
                      ) : (
                        <span className="text-gray-400 text-sm">{row.vst}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Plugins Tab */}
      {activeTab === 'plugins' && (
        <div>
          {/* Plugin Selector */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-4">Select a Plugin to View Native Advantages</h3>
            <div className="flex flex-wrap gap-2">
              {pluginsWithAdvantages.map(plugin => {
                const pluginId = getPluginId(plugin);
                return (
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
                );
              })}
            </div>
          </div>

          {/* Selected Plugin Details */}
          {selectedPlugin && (
            <div className="content-card p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center">
                    <Piano className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{selectedPlugin} Advantages</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge badge-green">Native Only</span>
                  {getPluginId(selectedPlugin) && (
                    <Link 
                      href={`/plugins/${getPluginId(selectedPlugin)}`}
                      className="btn-secondary text-sm py-1.5 px-3"
                    >
                      View Plugin Details
                    </Link>
                  )}
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {pluginAdvantages[selectedPlugin].map((advantage, idx) => (
                  <li key={idx} className="flex items-start p-3 rounded-lg bg-[var(--glass-bg)]">
                    <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 shrink-0" />
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