'use client';

import { useState, useEffect, useMemo } from 'react';
import { 
  Calculator, 
  Clock, 
  Music, 
  Waves, 
  Copy, 
  Check,
  RefreshCw,
  Zap
} from 'lucide-react';

// Common BPM presets
const bpmPresets = [
  { label: 'Chill', bpm: 80 },
  { label: 'Hip-Hop', bpm: 90 },
  { label: 'House', bpm: 128 },
  { label: 'Trap', bpm: 140 },
  { label: 'D&B', bpm: 174 },
];

// Frequency band data
const frequencyBands = [
  { name: 'Sub Bass', range: '20-60 Hz', color: 'purple', desc: 'Feel, don\'t hear. Avoid rumble.', width: 15, left: 0 },
  { name: 'Bass', range: '60-250 Hz', color: 'blue', desc: 'The foundation. Kick & bass power.', width: 20, left: 15 },
  { name: 'Low Mids', range: '250-500 Hz', color: 'cyan', desc: 'Warmth. Can get muddy.', width: 15, left: 35 },
  { name: 'Mids', range: '500-2k Hz', color: 'green', desc: 'Body of most instruments.', width: 18, left: 50 },
  { name: 'Presence', range: '2k-5k Hz', color: 'yellow', desc: 'Vocals & clarity.', width: 12, left: 68 },
  { name: 'Brilliance', range: '5k-10k Hz', color: 'orange', desc: 'Sibilance & definition.', width: 10, left: 80 },
  { name: 'Air', range: '10k-20k Hz', color: 'pink', desc: 'Sparkle & openness.', width: 10, left: 90 },
];

export const UtilitiesSection = () => {
  const [bpm, setBpm] = useState(128);
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'timing' | 'frequency'>('timing');

  // Calculate all timing values
  const timings = useMemo(() => {
    if (bpm <= 0) return null;
    
    const quarterMs = 60000 / bpm;
    
    return {
      // Note values
      whole: Math.round(quarterMs * 4),
      half: Math.round(quarterMs * 2),
      quarter: Math.round(quarterMs),
      eighth: Math.round(quarterMs / 2),
      sixteenth: Math.round(quarterMs / 4),
      thirtySecond: Math.round(quarterMs / 8),
      
      // Dotted values
      dottedQuarter: Math.round(quarterMs * 1.5),
      dottedEighth: Math.round(quarterMs * 0.75),
      
      // Triplets
      tripletQuarter: Math.round(quarterMs * 2/3),
      tripletEighth: Math.round(quarterMs / 3),
      
      // Reverb suggestions
      preDelay: Math.round(quarterMs / 16),
      shortDecay: Math.round(quarterMs * 2),
      longDecay: Math.round(quarterMs * 4),
      
      // Hz equivalent for LFO
      quarterHz: (bpm / 60).toFixed(3),
      eighthHz: (bpm / 30).toFixed(3),
    };
  }, [bpm]);

  const copyToClipboard = (value: string | number) => {
    navigator.clipboard.writeText(value.toString());
    setCopiedValue(value.toString());
    setTimeout(() => setCopiedValue(null), 1500);
  };

  const CopyButton = ({ value }: { value: string | number }) => (
    <button
      onClick={() => copyToClipboard(value)}
      className="p-1 rounded hover:bg-white/10 transition-colors"
      title="Copy value"
    >
      {copiedValue === value.toString() ? (
        <Check className="w-3.5 h-3.5 text-green-400" />
      ) : (
        <Copy className="w-3.5 h-3.5 text-[var(--text-dim)]" />
      )}
    </button>
  );

  return (
    <section id="utilities" className="page-section animate-fade">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Studio</span>
          <span className="text-white"> Tools</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          Calculators for delay times, reverb settings, and frequency reference.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="flex gap-2">
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
              activeTab === 'timing'
                ? 'bg-[var(--accent-primary)] text-white'
                : 'bg-[var(--glass-bg)] text-[var(--text-muted)] border border-[var(--glass-border)] hover:text-white'
            }`}
            onClick={() => setActiveTab('timing')}
          >
            <Clock className="w-4 h-4" /> Timing Calculator
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
              activeTab === 'frequency'
                ? 'bg-[var(--accent-primary)] text-white'
                : 'bg-[var(--glass-bg)] text-[var(--text-muted)] border border-[var(--glass-border)] hover:text-white'
            }`}
            onClick={() => setActiveTab('frequency')}
          >
            <Waves className="w-4 h-4" /> Frequency Reference
          </button>
        </div>
      </div>

      {/* Timing Calculator Tab */}
      {activeTab === 'timing' && (
        <div className="space-y-6">
          {/* BPM Input Card */}
          <div className="content-card p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">Project BPM</label>
                  <input
                    type="number"
                    value={bpm}
                    onChange={(e) => setBpm(Number(e.target.value))}
                    min={1}
                    max={999}
                    className="w-28 p-2 border border-[var(--glass-border)] bg-[var(--glass-bg)] text-white rounded-lg font-mono text-xl text-center focus:ring-2 focus:ring-[var(--accent-primary)] outline-none"
                  />
                </div>
              </div>
              
              {/* BPM Presets */}
              <div className="flex flex-wrap gap-2">
                {bpmPresets.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => setBpm(preset.bpm)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      bpm === preset.bpm
                        ? 'bg-[var(--accent-primary)] text-white'
                        : 'bg-[var(--glass-bg)] text-[var(--text-muted)] border border-[var(--glass-border)] hover:text-white'
                    }`}
                  >
                    {preset.label} ({preset.bpm})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Timing Values Grid */}
          {timings && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Delay Times */}
              <div className="content-card p-5">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[var(--accent-tertiary)]" /> Delay Times
                </h3>
                <div className="space-y-2">
                  {[
                    { label: 'Whole Note', value: timings.whole },
                    { label: 'Half Note', value: timings.half },
                    { label: '1/4 Note', value: timings.quarter },
                    { label: '1/8 Note', value: timings.eighth },
                    { label: '1/16 Note', value: timings.sixteenth },
                    { label: '1/32 Note', value: timings.thirtySecond },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center p-2 rounded bg-[var(--glass-bg)] hover:bg-white/5 transition-colors group">
                      <span className="text-sm text-[var(--text-muted)]">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-white">{item.value} ms</span>
                        <CopyButton value={item.value} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dotted & Triplets */}
              <div className="content-card p-5">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Music className="w-4 h-4 text-[var(--accent-tertiary)]" /> Dotted & Triplets
                </h3>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-[var(--text-muted)] uppercase mb-2">Dotted</div>
                  {[
                    { label: 'Dotted 1/4', value: timings.dottedQuarter },
                    { label: 'Dotted 1/8', value: timings.dottedEighth },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center p-2 rounded bg-[var(--glass-bg)] hover:bg-white/5 transition-colors group">
                      <span className="text-sm text-[var(--text-muted)]">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-white">{item.value} ms</span>
                        <CopyButton value={item.value} />
                      </div>
                    </div>
                  ))}
                  <div className="text-xs font-medium text-[var(--text-muted)] uppercase mt-4 mb-2">Triplets</div>
                  {[
                    { label: '1/4 Triplet', value: timings.tripletQuarter },
                    { label: '1/8 Triplet', value: timings.tripletEighth },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center p-2 rounded bg-[var(--glass-bg)] hover:bg-white/5 transition-colors group">
                      <span className="text-sm text-[var(--text-muted)]">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-white">{item.value} ms</span>
                        <CopyButton value={item.value} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reverb & LFO */}
              <div className="content-card p-5">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[var(--accent-tertiary)]" /> Reverb & LFO
                </h3>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-[var(--text-muted)] uppercase mb-2">Reverb</div>
                  {[
                    { label: 'Pre-Delay', value: timings.preDelay },
                    { label: 'Short Decay', value: timings.shortDecay },
                    { label: 'Long Decay', value: timings.longDecay },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center p-2 rounded bg-[var(--glass-bg)] hover:bg-white/5 transition-colors group">
                      <span className="text-sm text-[var(--text-muted)]">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-white">{item.value} ms</span>
                        <CopyButton value={item.value} />
                      </div>
                    </div>
                  ))}
                  <div className="text-xs font-medium text-[var(--text-muted)] uppercase mt-4 mb-2">LFO Rate</div>
                  {[
                    { label: '1/4 Note', value: timings.quarterHz + ' Hz' },
                    { label: '1/8 Note', value: timings.eighthHz + ' Hz' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center p-2 rounded bg-[var(--glass-bg)] hover:bg-white/5 transition-colors group">
                      <span className="text-sm text-[var(--text-muted)]">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-white">{item.value}</span>
                        <CopyButton value={item.value} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Frequency Reference Tab */}
      {activeTab === 'frequency' && (
        <div className="content-card p-6">
          <h3 className="font-bold text-white mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-[var(--accent-tertiary)]" /> Mixing Frequency Map
          </h3>
          
          {/* Visual Frequency Spectrum */}
          <div className="mb-8 relative h-16 rounded-lg overflow-hidden bg-[var(--glass-bg)]">
            {frequencyBands.map((band) => (
              <div
                key={band.name}
                className={`absolute top-0 h-full bg-${band.color}-500/40 hover:bg-${band.color}-500/60 transition-colors cursor-pointer group`}
                style={{ left: `${band.left}%`, width: `${band.width}%` }}
                title={`${band.name}: ${band.range}`}
              >
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  <div className="bg-black/90 text-white text-xs px-2 py-1 rounded">
                    {band.name}: {band.range}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Frequency Band Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {frequencyBands.map((band) => (
              <div key={band.name} className="p-3 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-white/20 transition-colors">
                <div className={`w-3 h-3 rounded-full bg-${band.color}-400 mb-2`} />
                <h4 className="font-bold text-white text-sm">{band.name}</h4>
                <p className="text-xs text-[var(--text-muted)] mb-1">{band.range}</p>
                <p className="text-xs text-[var(--text-dim)]">{band.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};