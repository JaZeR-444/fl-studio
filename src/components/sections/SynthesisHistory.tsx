// src/components/sections/SynthesisHistory.tsx
import { useState } from 'react';

export const SynthesisHistory = () => {
  const [activeTab, setActiveTab] = useState('additive');

  const synthesisMethods = [
    {
      id: 'additive',
      name: 'Additive Synthesis',
      description: 'Creation of timbre by stacking individual sine waves (partials)',
      history: 'Originating from Fourier analysis in the 1800s, additive synthesis became practical in the digital age. Unlike subtractive synthesis that starts with harmonically rich waveforms and filters them, additive synthesis builds sounds from individual frequency components.',
      flPlugins: ['Harmor', 'Morphine', 'Ogun'],
      keyConcepts: [
        'Spectrum directly generated',
        'Individual partials controlled',
        'Resynthesis of audio content'
      ],
      advantages: [
        'Precise harmonic control',
        'Perfect filter slopes',
        'Resynthesis capabilities'
      ]
    },
    {
      id: 'fm',
      name: 'Frequency Modulation (FM) Synthesis',
      description: 'Creating complex timbres by modulating the frequency of one oscillator with another',
      history: 'Developed by John Chowning in the 1960s-70s and popularized by Yamaha DX7 in 1983. FM synthesis creates harmonically rich and metallic sounds impossible with subtractive methods.',
      flPlugins: ['Sytrus', 'Toxic Biohazard'],
      keyConcepts: [
        'Carrier and modulator relationship',
        'Modulation index control',
        'Operator feedback'
      ],
      advantages: [
        'Rich harmonic content',
        'Metallic and bell-like tones',
        'Efficient digital implementation'
      ]
    },
    {
      id: 'subtractive',
      name: 'Subtractive Synthesis',
      description: 'Starting with harmonically rich waveforms and filtering out frequencies',
      history: 'The foundation of most classic analog synthesizers from Moog, ARP, and Roland. This method shaped popular music from the 1960s through today.',
      flPlugins: ['Sawer', 'Transistor Bass', 'Kepler Exo'],
      keyConcepts: [
        'Oscillator waveform generation',
        'Filter cutoff and resonance',
        'Envelope shaping (ADSR)'
      ],
      advantages: [
        'Warm, organic sounds',
        'Intuitive parameter controls',
        'Classic analog character'
      ]
    },
    {
      id: 'wavetable',
      name: 'Wavetable Synthesis',
      description: 'Cycling through a bank of single-cycle waveforms over time',
      history: 'Pioneered by PPG Wave in the early 1980s, wavetable synthesis bridged analog and digital. Modern implementations blend with other synthesis methods.',
      flPlugins: ['Toxic Biohazard', 'Harmor', 'Sawer'],
      keyConcepts: [
        'Static or morphing waveforms',
        'Spectral content evolution',
        'Wave scan functionality'
      ],
      advantages: [
        'Evocative textures',
        'Spectral evolution',
        'Band-limited processing'
      ]
    },
    {
      id: 'physical',
      name: 'Physical Modeling',
      description: 'Mathematical equations simulating physical properties of instruments',
      history: 'Emerging in the 1990s, physical modeling offered expressive realism that sampling couldn\'t achieve. The behavior changes with velocity and articulation.',
      flPlugins: ['Sakura', 'Drumaxx'],
      keyConcepts: [
        'Impulse modeling',
        'Resonance bodies',
        'Material properties',
        'Interactions between components'
      ],
      advantages: [
        'Expressive behavior',
        'Realistic response changes',
        'Impossible physical constructs'
      ]
    }
  ];

  const currentMethod = synthesisMethods.find(method => method.id === activeTab) || synthesisMethods[0];

  return (
    <section id="synthesis-history" className="page-section">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-6">Synthesis History & Theory</h2>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 border-b border-stone-200 dark:border-zinc-700 pb-2">
            {synthesisMethods.map(method => (
              <button
                key={method.id}
                onClick={() => setActiveTab(method.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === method.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-stone-200 dark:bg-zinc-700 text-stone-700 dark:text-zinc-300 hover:bg-stone-300 dark:hover:bg-zinc-600'
                }`}
              >
                {method.name}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6 mb-8">
          <h3 className="text-2xl font-bold text-stone-800 dark:text-white mb-2">{currentMethod.name}</h3>
          <p className="text-stone-600 dark:text-zinc-400 mb-4">{currentMethod.description}</p>
          
          <div className="prose prose-stone dark:prose-invert max-w-none mb-6">
            <h4 className="font-bold text-stone-800 dark:text-white mb-2">Historical Context</h4>
            <p>{currentMethod.history}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-stone-800 dark:text-white mb-3">Key Concepts</h4>
              <ul className="space-y-2">
                {currentMethod.keyConcepts.map((concept, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-stone-700 dark:text-zinc-300">{concept}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-stone-800 dark:text-white mb-3">Advantages</h4>
              <ul className="space-y-2">
                {currentMethod.advantages.map((advantage, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-stone-700 dark:text-zinc-300">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6">
          <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-4">FL Studio Native Implementations</h3>
          <div className="flex flex-wrap gap-3">
            {currentMethod.flPlugins.map(plugin => (
              <div 
                key={plugin} 
                className="px-4 py-3 bg-stone-100 dark:bg-zinc-700 rounded-lg border border-stone-200 dark:border-zinc-600"
              >
                <h4 className="font-bold text-stone-800 dark:text-white">{plugin}</h4>
                <p className="text-sm text-stone-600 dark:text-zinc-400 mt-1">
                  {plugin} implements {currentMethod.name.toLowerCase()} with unique native optimizations
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-stone-100 dark:border-zinc-700">
            <h4 className="font-bold text-stone-800 dark:text-white mb-3">Native Optimization Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-2">CPU Efficiency</h5>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Native integration reduces processing overhead compared to VST implementations
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Workflow Integration</h5>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Seamless integration with Piano Roll, Mixer, and internal modulation
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Advanced Controls</h5>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Access to internal parameters not available through standard plugin interfaces
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-stone-50 dark:bg-zinc-900/50 rounded-xl p-6 border border-stone-200 dark:border-zinc-700">
          <h3 className="font-bold text-stone-800 dark:text-white mb-3">Cross-Synthesis Possibilities</h3>
          <p className="text-stone-600 dark:text-zinc-400 mb-4">
            In FL Studio's native ecosystem, synthesis methods can be combined in creative ways:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span className="text-stone-700 dark:text-zinc-300">
                <strong>Additive + Subtractive:</strong> Use Harmor's spectral output through Kepler Exo's filters
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span className="text-stone-700 dark:text-zinc-300">
                <strong>FM + Physical:</strong> Combine Sytrus operators with Sakura's resonators
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span className="text-stone-700 dark:text-zinc-300">
                <strong>Wavetable + Modeling:</strong> Morphine's snapshots driven by physical interactions
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};