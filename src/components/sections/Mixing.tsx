'use client';

import { useState } from 'react';
import { 
  SlidersHorizontal, 
  Waves, 
  Volume2, 
  Radio, 
  Zap, 
  GitBranch,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Filter
} from 'lucide-react';

// Mixing concepts data
const mixingConcepts = [
  {
    id: 'routing',
    title: 'Routing & Bus Logic',
    icon: GitBranch,
    items: [
      {
        title: 'Group Buses',
        description: 'Route similar instruments (drums, vocals) to dedicated group buses for cohesive processing.',
        tip: 'Name your buses clearly: "DRUMS BUS", "VOCALS BUS" etc.'
      },
      {
        title: 'Insert vs. Send Effects',
        description: 'Use inserts for EQ and compression. Use sends for reverb and delay to preserve the dry signal.',
        tip: 'Create a "REVERB SEND" and "DELAY SEND" track for parallel processing.'
      },
      {
        title: 'Sidechain Routing',
        description: 'Right-click routing cable → "Sidechain to this track" for ducking effects.',
        tip: 'Use Peak Controller for more control than Fruity Limiter sidechain.'
      },
    ]
  },
  {
    id: 'eq',
    title: 'EQ & Spectrum Management',
    icon: BarChart3,
    items: [
      {
        title: 'High-Pass Everything',
        description: 'High-pass filter instruments that don\'t need low end (vocals, hi-hats, synths).',
        tip: 'Use Fruity Parametric EQ 2 with gentle slopes around 80-120Hz.'
      },
      {
        title: 'Carving Space',
        description: 'Cut frequencies in one instrument to make room for another in the same range.',
        tip: 'If kick is at 60Hz, scoop 60Hz from bass to avoid masking.'
      },
      {
        title: 'Presence & Air',
        description: 'Boost 2-5kHz for presence, 10kHz+ for "air" and sparkle.',
        tip: 'Use shelving EQ for gentle high-frequency boosts.'
      },
    ]
  },
  {
    id: 'dynamics',
    title: 'Dynamics & Compression',
    icon: Volume2,
    items: [
      {
        title: 'Parallel Compression',
        description: 'Blend a heavily compressed signal with the dry signal for punch without losing dynamics.',
        tip: 'Use Maximus or Fruity Compressor with mix knob.'
      },
      {
        title: 'Multiband Compression',
        description: 'Control dynamics of different frequency ranges independently.',
        tip: 'Maximus is excellent for mastering-level multiband control.'
      },
      {
        title: 'Limiting for Headroom',
        description: 'Use limiting to catch peaks and create headroom for the master.',
        tip: 'Soft Clipper followed by Fruity Limiter is a common chain.'
      },
    ]
  }
];

// Automation techniques
const automationTechniques = [
  {
    title: 'Clip-Based Automation',
    description: 'Create automation clips in the playlist for independent control of any parameter.',
    howTo: 'Right-click any knob → "Create automation clip"'
  },
  {
    title: 'Envelope Control',
    description: 'Apply envelopes directly to instruments/notes for per-note shaping.',
    howTo: 'Use envelope controller linked to parameters'
  },
  {
    title: 'LFO Modulation',
    description: 'Use Fruity Peak Controller or Formula Controller for rhythmic automation.',
    howTo: 'Link LFO to filter cutoff for classic wobble'
  },
  {
    title: 'Pattern-Based Automation',
    description: 'Automate parameters within patterns for repeated phrases.',
    howTo: 'Use channel automation within pattern clips'
  },
];

export const MixingSection = () => {
  const [activeTab, setActiveTab] = useState('concepts');
  const [expandedConcept, setExpandedConcept] = useState<string | null>('routing');

  return (
    <section id="mixing" className="page-section animate-fade">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Mixing</span>
          <span className="text-white"> & Mastering</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          Professional tips for routing, EQ, dynamics, and automation.
        </p>
      </div>

      {/* Hero Card */}
      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/20 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <SlidersHorizontal className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">The Golden Mixing Rules</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span className="text-purple-100">Cut before you boost</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span className="text-purple-100">Less is more</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span className="text-purple-100">Reference constantly</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="flex gap-2">
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
              activeTab === 'concepts'
                ? 'bg-[var(--accent-primary)] text-white'
                : 'bg-[var(--glass-bg)] text-[var(--text-muted)] border border-[var(--glass-border)] hover:text-white'
            }`}
            onClick={() => setActiveTab('concepts')}
          >
            <Waves className="w-4 h-4" /> Mixing Concepts
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
              activeTab === 'automation'
                ? 'bg-[var(--accent-primary)] text-white'
                : 'bg-[var(--glass-bg)] text-[var(--text-muted)] border border-[var(--glass-border)] hover:text-white'
            }`}
            onClick={() => setActiveTab('automation')}
          >
            <Zap className="w-4 h-4" /> Automation
          </button>
        </div>
      </div>

      {/* Concepts Tab */}
      {activeTab === 'concepts' && (
        <div className="space-y-4">
          {mixingConcepts.map((concept) => (
            <div key={concept.id} className="content-card overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 hover:bg-white/5 transition-colors"
                onClick={() => setExpandedConcept(expandedConcept === concept.id ? null : concept.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center">
                    <concept.icon className="w-5 h-5 text-[var(--accent-tertiary)]" />
                  </div>
                  <h3 className="font-bold text-white">{concept.title}</h3>
                </div>
                <ArrowRight className={`w-5 h-5 text-[var(--text-muted)] transition-transform ${expandedConcept === concept.id ? 'rotate-90' : ''}`} />
              </button>

              {expandedConcept === concept.id && (
                <div className="p-5 border-t border-[var(--glass-border)] bg-black/20 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {concept.items.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]">
                      <h4 className="font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-[var(--text-muted)] mb-3">{item.description}</p>
                      <div className="p-2 rounded bg-purple-500/10 border border-purple-500/20">
                        <p className="text-xs text-purple-300">
                          <span className="font-bold">Tip:</span> {item.tip}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Automation Tab */}
      {activeTab === 'automation' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {automationTechniques.map((technique, idx) => (
            <div key={idx} className="content-card p-5">
              <h3 className="font-bold text-white mb-2">{technique.title}</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">{technique.description}</p>
              <div className="p-3 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]">
                <p className="text-sm text-[var(--accent-tertiary)]">
                  <span className="font-medium">How to:</span> {technique.howTo}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Key Insight */}
      <div className="mt-8 p-6 rounded-lg bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.2)]">
        <h3 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
          <Lightbulb className="w-5 h-5" /> Mastering Tip
        </h3>
        <p className="text-yellow-200/80">
          Before mastering, check your mix at low volume. If elements disappear at low volume, 
          they need more presence or level. A good mix should translate well at any volume.
        </p>
      </div>
    </section>
  );
};