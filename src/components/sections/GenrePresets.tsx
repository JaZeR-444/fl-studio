'use client';

import { useState } from 'react';
import { 
  Disc3, 
  Play, 
  Download, 
  Copy, 
  Check,
  Music2,
  Zap,
  Sparkles,
  Waves,
  Drum,
  Piano
} from 'lucide-react';

// Genre preset data
const genrePresets = [
  {
    id: 'edm',
    name: 'EDM / Future Bass',
    description: 'High-energy electronic dance music with powerful drops and atmospheric builds.',
    bpm: '128-150',
    key: 'F Minor / G Minor',
    icon: Zap,
    color: 'from-cyan-500 to-blue-500',
    characteristics: [
      'Sidechain compression on synths',
      'Super saw leads with detuning',
      'Sub bass with 808 kick',
      'White noise risers and impacts',
      'Vocal chops and pitch bends'
    ],
    plugins: ['Harmor', 'Serum', 'Sytrus', 'Gross Beat'],
    mixerSetup: {
      'Kick': '-6dB, heavy sidechain trigger',
      'Bass': '-8dB, mono below 120Hz',
      'Leads': '-10dB, wide stereo',
      'Pads': '-14dB, heavy reverb',
      'Drums': 'Parallel compression'
    }
  },
  {
    id: 'hiphop',
    name: 'Hip Hop / Trap',
    description: 'Hard-hitting beats with 808s, hi-hat rolls, and space for vocals.',
    bpm: '140-160 (half-time feel)',
    key: 'D Minor / A Minor',
    icon: Drum,
    color: 'from-red-500 to-orange-500',
    characteristics: [
      'Rolling hi-hats with velocity variation',
      '808 bass with long sustain',
      'Punchy kicks layered with 808',
      'Spacious mix for vocals',
      'Dark, atmospheric pads'
    ],
    plugins: ['Flex', '3xOsc', 'Sakura', 'Gross Beat'],
    mixerSetup: {
      '808': '-5dB, slight saturation',
      'Kick': '-6dB, punchy attack',
      'Hi-hats': '-12dB, panned',
      'Snare': '-8dB, reverb tail',
      'Melody': '-10dB, filtered'
    }
  },
  {
    id: 'lofi',
    name: 'Lo-Fi Hip Hop',
    description: 'Chill, nostalgic beats with vinyl warmth and jazzy samples.',
    bpm: '70-90',
    key: 'Major 7th chords',
    icon: Music2,
    color: 'from-amber-500 to-yellow-500',
    characteristics: [
      'Vinyl crackle and noise',
      'Tape saturation and wobble',
      'Jazz chord progressions',
      'Dusty drum breaks',
      'Soft, rounded low-end'
    ],
    plugins: ['Vinyl', 'Fruity Love Philter', 'FLEX', 'Pitcher'],
    mixerSetup: {
      'Drums': '-6dB, bitcrushed slightly',
      'Keys': '-8dB, low-passed',
      'Bass': '-7dB, warm compression',
      'Ambient': '-16dB, heavy reverb',
      'Master': 'Tape saturation, -0.5dB'
    }
  },
  {
    id: 'house',
    name: 'House / Tech House',
    description: 'Four-on-the-floor grooves with deep bass and infectious rhythms.',
    bpm: '120-128',
    key: 'A Minor / G Minor',
    icon: Waves,
    color: 'from-purple-500 to-pink-500',
    characteristics: [
      'Driving kick drum pattern',
      'Offbeat hi-hats',
      'Groovy bass lines',
      'Filtered synth stabs',
      'Subtle percussion layers'
    ],
    plugins: ['Sytrus', 'Harmor', 'Morphine', 'Vocodex'],
    mixerSetup: {
      'Kick': '-4dB, room for sidechain',
      'Bass': '-8dB, mono, sidechained',
      'Hats': '-14dB, slight swing',
      'Synths': '-10dB, automated filter',
      'FX': '-18dB, reverb sends'
    }
  },
  {
    id: 'cinematic',
    name: 'Cinematic / Epic',
    description: 'Orchestral soundscapes with powerful brass, strings, and percussion.',
    bpm: '80-120',
    key: 'D Minor / E Minor',
    icon: Sparkles,
    color: 'from-indigo-500 to-violet-500',
    characteristics: [
      'Layered string sections',
      'Epic brass hits',
      'Taiko and orchestral percussion',
      'Tension-building risers',
      'Wide stereo imaging'
    ],
    plugins: ['FLEX', 'DirectWave', 'Fruity Convolver', 'Patcher'],
    mixerSetup: {
      'Strings': '-6dB, lush reverb',
      'Brass': '-8dB, dynamic compression',
      'Percussion': '-4dB, room mic IR',
      'Choir': '-10dB, cathedral reverb',
      'Sub': '-8dB, mono, subtle'
    }
  },
  {
    id: 'pop',
    name: 'Modern Pop',
    description: 'Radio-ready production with catchy hooks and polished sound.',
    bpm: '100-120',
    key: 'C Major / G Major',
    icon: Piano,
    color: 'from-pink-500 to-rose-500',
    characteristics: [
      'Clean, punchy drums',
      'Catchy synth hooks',
      'Vocal-focused mix',
      'Bright, present high-end',
      'Dynamic arrangement'
    ],
    plugins: ['FLEX', 'Sytrus', 'Pitcher', 'Maximus'],
    mixerSetup: {
      'Vocals': '-3dB, center focus',
      'Drums': '-6dB, punchy and tight',
      'Bass': '-8dB, supportive',
      'Synths': '-10dB, fills around vocals',
      'Master': 'Multiband limiting'
    }
  }
];

export const GenrePresetsSection = () => {
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (presetId: string) => {
    setCopiedId(presetId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownload = (preset: typeof genrePresets[0]) => {
    const dataStr = JSON.stringify(preset, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportName = `genre-preset-${preset.id}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportName);
    linkElement.click();
  };

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30">
          <Disc3 className="w-8 h-8 text-orange-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">Genre Presets</h1>
          <p className="text-[var(--text-muted)]">
            Genre-specific starting points with recommended settings and techniques.
          </p>
        </div>
      </div>

      {/* Preset Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {genrePresets.map((preset) => {
          const Icon = preset.icon;
          const isSelected = selectedPreset === preset.id;
          const isCopied = copiedId === preset.id;

          return (
            <div
              key={preset.id}
              className={`card-base overflow-hidden transition-all duration-300 ${
                isSelected ? 'ring-2 ring-[var(--accent-primary)]' : ''
              }`}
            >
              {/* Preset Header */}
              <div className={`p-5 bg-gradient-to-r ${preset.color}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-black/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{preset.name}</h3>
                      <div className="flex gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 rounded bg-black/20 text-white/90">
                          {preset.bpm} BPM
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded bg-black/20 text-white/90">
                          {preset.key}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                    <Play className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Preset Body */}
              <div className="p-5 space-y-4">
                <p className="text-sm text-[var(--text-muted)]">
                  {preset.description}
                </p>

                {/* Characteristics */}
                <div>
                  <h4 className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-2">
                    Key Characteristics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {preset.characteristics.slice(0, isSelected ? undefined : 3).map((char, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-white/5 text-[var(--text-muted)]"
                      >
                        {char}
                      </span>
                    ))}
                    {!isSelected && preset.characteristics.length > 3 && (
                      <span className="text-xs px-2 py-1 text-[var(--accent-primary)]">
                        +{preset.characteristics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Recommended Plugins */}
                <div>
                  <h4 className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-2">
                    Recommended Plugins
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {preset.plugins.map((plugin, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 rounded bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20"
                      >
                        {plugin}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Mixer Setup */}
                {isSelected && (
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-3">
                      Mixer Setup Guide
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(preset.mixerSetup).map(([track, setting]) => (
                        <div key={track} className="flex items-start gap-2 p-2 bg-white/5 rounded">
                          <span className="text-xs font-medium text-white min-w-[60px]">{track}:</span>
                          <span className="text-xs text-[var(--text-muted)]">{setting}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <button 
                    onClick={() => setSelectedPreset(isSelected ? null : preset.id)}
                    className="flex-1 btn-glass text-sm py-2"
                  >
                    {isSelected ? 'Show Less' : 'View Full Preset'}
                  </button>
                  <button 
                    onClick={() => handleCopy(preset.id)}
                    className="p-2 btn-glass"
                    title="Copy settings"
                  >
                    {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button 
                    onClick={() => handleDownload(preset)}
                    className="p-2 btn-glass"
                    title="Download preset"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
