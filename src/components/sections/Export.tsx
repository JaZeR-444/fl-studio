'use client';

import { useState } from 'react';
import { 
  Download, 
  FileAudio, 
  FileMusic, 
  Folder, 
  CheckCircle, 
  Lightbulb,
  ArrowRight,
  Music,
  Mic,
  HardDrive,
  Shield
} from 'lucide-react';

// Export format data
const exportFormats = [
  { 
    context: 'Professional Mastering', 
    format: 'WAV / FLAC', 
    bitDepth: '24-bit / 32-bit float', 
    quality: 'Highest',
    icon: FileAudio,
    color: 'purple',
    notes: 'Lossless format for professional mastering engineers'
  },
  { 
    context: 'Streaming Platforms', 
    format: 'MP3 / AAC', 
    bitDepth: '320 kbps', 
    quality: 'High',
    icon: Music,
    color: 'blue',
    notes: 'Optimized for Spotify, Apple Music, SoundCloud'
  },
  { 
    context: 'Quick Previews', 
    format: 'MP3', 
    bitDepth: '128-192 kbps', 
    quality: 'Medium',
    icon: FileMusic,
    color: 'green',
    notes: 'Fast sharing for feedback, not final release'
  },
  { 
    context: 'Stems / Collaboration', 
    format: 'WAV', 
    bitDepth: '24-bit', 
    quality: 'High',
    icon: Folder,
    color: 'orange',
    notes: 'Individual tracks for remixing or collab projects'
  },
  { 
    context: 'Archive / Backup', 
    format: 'FLAC', 
    bitDepth: '24-bit', 
    quality: 'Lossless',
    icon: HardDrive,
    color: 'gray',
    notes: 'Compressed lossless for long-term storage'
  },
];

// Best practices with categories
const bestPractices = [
  {
    category: 'Export Settings',
    items: [
      'Enable "Wait for input to become silent" for proper tail rendering',
      'Use "Sinc (Best)" interpolation for highest quality resampling',
      'Disable dithering for 24-bit+ exports, enable for 16-bit',
      'Render at HQ mode for masters (toggle in mixer panel)',
    ]
  },
  {
    category: 'Project Hygiene',
    items: [
      'Color-code channels by type (drums red, bass green, synths blue)',
      'Use descriptive names for all tracks, patterns, and mixer inserts',
      'Create mixer groups for related instruments (e.g., "ALL DRUMS")',
      'Store project notes in File > Info > Comments',
    ]
  },
  {
    category: 'Stem Export Workflow',
    items: [
      'Solo each group and export separately',
      'Name stems clearly: "TRACKNAME_Drums_Stem.wav"',
      'Include a stereo mixdown reference stem',
      'Export at the same sample rate as your project',
    ]
  }
];

export const ExportSection = () => {
  const [activeTab, setActiveTab] = useState<'formats' | 'practices'>('formats');

  return (
    <section id="export" className="page-section animate-fade">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Export</span>
          <span className="text-white"> & Project Hygiene</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          Best practices for exporting your projects and maintaining organization.
        </p>
      </div>

      {/* Quick Tip Hero */}
      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/20 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Download className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-bold text-white mb-1">Pro Tip: Always Export WAV First</h3>
            <p className="text-green-200/80 text-sm">
              Export a 24-bit WAV master first, then use a dedicated converter for MP3/streaming formats. 
              This preserves quality and gives you a lossless archive.
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="flex gap-2">
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'formats'
                ? 'bg-[var(--accent-primary)] text-white'
                : 'bg-[var(--glass-bg)] text-[var(--text-muted)] border border-[var(--glass-border)] hover:text-white'
            }`}
            onClick={() => setActiveTab('formats')}
          >
            Export Formats
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'practices'
                ? 'bg-[var(--accent-primary)] text-white'
                : 'bg-[var(--glass-bg)] text-[var(--text-muted)] border border-[var(--glass-border)] hover:text-white'
            }`}
            onClick={() => setActiveTab('practices')}
          >
            Best Practices
          </button>
        </div>
      </div>

      {/* Formats Tab */}
      {activeTab === 'formats' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {exportFormats.map((format, index) => (
            <div key={index} className="content-card p-5 hover:border-white/20 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-${format.color}-500/20 flex items-center justify-center`}>
                  <format.icon className={`w-5 h-5 text-${format.color}-400`} />
                </div>
                <div>
                  <h3 className="font-bold text-white">{format.context}</h3>
                  <p className="text-sm text-[var(--text-muted)]">{format.format}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-muted)]">Bit Depth:</span>
                  <span className="text-white font-mono">{format.bitDepth}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-muted)]">Quality:</span>
                  <span className={`font-medium ${
                    format.quality === 'Highest' ? 'text-purple-400' :
                    format.quality === 'Lossless' ? 'text-blue-400' :
                    format.quality === 'High' ? 'text-green-400' : 'text-yellow-400'
                  }`}>{format.quality}</span>
                </div>
              </div>
              
              <p className="text-xs text-[var(--text-muted)] italic">{format.notes}</p>
            </div>
          ))}
        </div>
      )}

      {/* Practices Tab */}
      {activeTab === 'practices' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bestPractices.map((section, index) => (
            <div key={index} className="content-card p-5">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--accent-tertiary)]" />
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-[var(--text-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Key Insight */}
      <div className="mt-8 p-6 rounded-lg bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.2)]">
        <h3 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
          <Lightbulb className="w-5 h-5" /> Platform-Specific Settings
        </h3>
        <p className="text-yellow-200/80">
          Each streaming platform has different loudness targets. Spotify uses -14 LUFS, Apple Music uses -16 LUFS, 
          and YouTube uses -14 LUFS. Always check your integrated loudness before finalizing exports for distribution.
        </p>
      </div>
    </section>
  );
};