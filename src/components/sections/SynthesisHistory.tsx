'use client';

import { useState } from 'react';

export const SynthesisHistory = () => {
  const [activeTab, setActiveTab] = useState('additive');

  const synthesisMethods = [
    {
      id: 'additive',
      name: 'Additive Synthesis',
      icon: '🎹',
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
      name: 'FM Synthesis',
      icon: '🔊',
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
      name: 'Subtractive',
      icon: '🎚️',
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
      name: 'Wavetable',
      icon: '🌊',
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
      icon: '🎻',
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
    <section id="synthesis-history" className="page-section animate-fade">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Synthesis History</span>
          <span className="text-white"> & Theory</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          Explore the evolution of sound synthesis and how FL Studio implements each method.
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {synthesisMethods.map(method => (
            <button
              key={method.id}
              onClick={() => setActiveTab(method.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === method.id
                  ? 'bg-[var(--accent-primary)] text-white'
                  : 'bg-[var(--glass-bg)] text-[var(--text-muted)] hover:text-white hover:bg-[var(--glass-bg-hover)] border border-[var(--glass-border)]'
              }`}
            >
              <span>{method.icon}</span>
              <span>{method.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Card */}
      <div className="content-card p-6 mb-8">
        {/* Method Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-3xl shrink-0">
            {currentMethod.icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{currentMethod.name}</h3>
            <p className="text-[var(--text-muted)]">{currentMethod.description}</p>
          </div>
        </div>
        
        {/* Historical Context */}
        <div className="mb-6 p-4 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]">
          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
            <span className="text-[var(--accent-tertiary)]">📜</span>
            Historical Context
          </h4>
          <p className="text-[var(--text-muted)]">{currentMethod.history}</p>
        </div>

        {/* Key Concepts & Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[var(--accent-tertiary)]">💡</span>
              Key Concepts
            </h4>
            <ul className="space-y-2">
              {currentMethod.keyConcepts.map((concept, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[var(--accent-secondary)] mr-2">•</span>
                  <span className="text-[var(--text-secondary)]">{concept}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[var(--green-accent)]">✓</span>
              Advantages
            </h4>
            <ul className="space-y-2">
              {currentMethod.advantages.map((advantage, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[var(--green-accent)] mr-2">•</span>
                  <span className="text-[var(--text-secondary)]">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FL Studio Native Implementations */}
      <div className="content-card p-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span>🎹</span>
          FL Studio Native Implementations
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {currentMethod.flPlugins.map(plugin => (
            <div 
              key={plugin} 
              className="tool-card"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white text-lg">
                  🎹
                </div>
                <div>
                  <h4 className="font-bold text-white">{plugin}</h4>
                  <p className="text-xs text-[var(--text-dim)]">
                    {currentMethod.name}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[var(--text-muted)] mt-3">
                {plugin} implements {currentMethod.name.toLowerCase()} with unique native optimizations
              </p>
            </div>
          ))}
        </div>

        {/* Native Optimization Features */}
        <div className="pt-6 border-t border-[var(--glass-border)]">
          <h4 className="font-bold text-white mb-4">Native Optimization Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.2)]">
              <h5 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
                <span>⚡</span> CPU Efficiency
              </h5>
              <p className="text-sm text-yellow-200/80">
                Native integration reduces processing overhead compared to VST implementations
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)]">
              <h5 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
                <span>🔗</span> Workflow Integration
              </h5>
              <p className="text-sm text-blue-200/80">
                Seamless integration with Piano Roll, Mixer, and internal modulation
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)]">
              <h5 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                <span>🎛️</span> Advanced Controls
              </h5>
              <p className="text-sm text-purple-200/80">
                Access to internal parameters not available through standard plugin interfaces
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-Synthesis Possibilities */}
      <div className="mt-8 content-card p-6">
        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
          <span>🔀</span>
          Cross-Synthesis Possibilities
        </h3>
        <p className="text-[var(--text-muted)] mb-4">
          In FL Studio's native ecosystem, synthesis methods can be combined in creative ways:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start p-3 rounded-lg bg-[var(--glass-bg)]">
            <span className="text-[var(--accent-secondary)] mr-3">•</span>
            <span className="text-[var(--text-secondary)]">
              <strong className="text-white">Additive + Subtractive:</strong> Use Harmor's spectral output through Kepler Exo's filters
            </span>
          </li>
          <li className="flex items-start p-3 rounded-lg bg-[var(--glass-bg)]">
            <span className="text-[var(--accent-secondary)] mr-3">•</span>
            <span className="text-[var(--text-secondary)]">
              <strong className="text-white">FM + Physical:</strong> Combine Sytrus operators with Sakura's resonators
            </span>
          </li>
          <li className="flex items-start p-3 rounded-lg bg-[var(--glass-bg)]">
            <span className="text-[var(--accent-secondary)] mr-3">•</span>
            <span className="text-[var(--text-secondary)]">
              <strong className="text-white">Wavetable + Modeling:</strong> Morphine's snapshots driven by physical interactions
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};