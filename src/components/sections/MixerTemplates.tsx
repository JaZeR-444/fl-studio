'use client';

import { useState } from 'react';
import { 
  SlidersHorizontal, 
  Download, 
  Upload, 
  Copy, 
  Check,
  Trash2,
  Plus,
  Music,
  Headphones,
  Radio,
  Podcast,
  Mic2,
  Guitar
} from 'lucide-react';

// Pre-built mixer templates
const mixerTemplates = [
  {
    id: 'vocal-chain',
    name: 'Professional Vocal Chain',
    description: 'Industry-standard vocal processing with EQ, compression, de-esser, and reverb.',
    category: 'Vocals',
    icon: Mic2,
    tracks: 4,
    plugins: ['Parametric EQ 2', 'Fruity Compressor', 'Maximus', 'Fruity Reverb 2'],
    color: 'from-pink-500 to-rose-500',
    settings: {
      insert1: 'EQ: High-pass 80Hz, +3dB at 3kHz presence boost',
      insert2: 'Compression: 4:1 ratio, -20dB threshold, 10ms attack',
      insert3: 'De-ess: Focus on 5-8kHz sibilance range',
      insert4: 'Reverb: Hall, 1.5s decay, 20% wet'
    }
  },
  {
    id: 'drum-bus',
    name: 'Punchy Drum Bus',
    description: 'Glue compression and saturation for powerful, cohesive drums.',
    category: 'Drums',
    icon: Music,
    tracks: 6,
    plugins: ['Fruity Soft Clipper', 'Maximus', 'Soundgoodizer'],
    color: 'from-orange-500 to-amber-500',
    settings: {
      insert1: 'Soft Clipper: Gentle saturation, -6dB threshold',
      insert2: 'Maximus: Multiband compression, enhance low-end punch',
      insert3: 'Soundgoodizer: Preset A, 30% mix'
    }
  },
  {
    id: 'bass-chain',
    name: 'Sub Bass Processing',
    description: 'Clean low-end with controlled sub frequencies and harmonic enhancement.',
    category: 'Bass',
    icon: Headphones,
    tracks: 2,
    plugins: ['Parametric EQ 2', 'Fruity Limiter', 'Fruity Soft Clipper'],
    color: 'from-blue-500 to-indigo-500',
    settings: {
      insert1: 'EQ: Low-pass at 120Hz, cut mud at 200-400Hz',
      insert2: 'Limiter: -3dB ceiling, fast attack',
      insert3: 'Soft Clipper: Add harmonics for small speakers'
    }
  },
  {
    id: 'master-chain',
    name: 'Mastering Chain',
    description: 'Complete mastering setup with EQ, compression, limiting, and metering.',
    category: 'Master',
    icon: Radio,
    tracks: 1,
    plugins: ['Parametric EQ 2', 'Maximus', 'Fruity Limiter', 'Wave Candy'],
    color: 'from-purple-500 to-violet-500',
    settings: {
      insert1: 'EQ: Subtle high-shelf boost, low-end tightening',
      insert2: 'Maximus: Gentle multiband limiting, -0.3dB ceiling',
      insert3: 'Limiter: True peak limiting at -1dB',
      insert4: 'Wave Candy: Metering (spectrum + vectorscope)'
    }
  },
  {
    id: 'podcast',
    name: 'Podcast/Voiceover',
    description: 'Broadcast-ready voice processing for podcasts and narration.',
    category: 'Voice',
    icon: Podcast,
    tracks: 2,
    plugins: ['Parametric EQ 2', 'Fruity Compressor', 'Fruity Limiter'],
    color: 'from-teal-500 to-cyan-500',
    settings: {
      insert1: 'EQ: High-pass 120Hz, presence at 2-4kHz',
      insert2: 'Compression: 3:1, slow attack for natural sound',
      insert3: 'Limiter: -3dB ceiling for consistent levels'
    }
  },
  {
    id: 'guitar-amp',
    name: 'Guitar Recording',
    description: 'Clean DI signal processing with amp simulation and cab modeling.',
    category: 'Guitar',
    icon: Guitar,
    tracks: 3,
    plugins: ['Fruity Convolver', 'Parametric EQ 2', 'Fruity Delay 3'],
    color: 'from-yellow-500 to-orange-500',
    settings: {
      insert1: 'Convolver: Load guitar cab IR',
      insert2: 'EQ: Cut low-end rumble, add presence',
      insert3: 'Delay: Subtle slapback for width'
    }
  }
];

export const MixerTemplatesSection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [userTemplates, setUserTemplates] = useState<typeof mixerTemplates>([]);

  const handleCopy = (templateId: string) => {
    // In a real app, this would copy template data to clipboard
    setCopiedId(templateId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownload = (template: typeof mixerTemplates[0]) => {
    // Create downloadable JSON file
    const dataStr = JSON.stringify(template, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportName = `mixer-template-${template.id}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportName);
    linkElement.click();
  };

  const categories = [...new Set(mixerTemplates.map(t => t.category))];

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Mixer</span>
          <span className="text-white"> Templates</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          Pre-configured mixing chains for professional sound.
        </p>
      </div>

      {/* Hero Card */}
      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-violet-900/40 to-purple-900/40 border border-violet-500/20 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
              <SlidersHorizontal className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">Professional Signal Chains</h3>
            <p className="text-violet-200/80 mb-3">
              Achieve industry-standard sound instantly. Load complete plugin chains for vocals, drums, mastering, and more with a single click.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">{mixerTemplates.length}</span>
                <span className="text-violet-200/60">Chains</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10">
                  <Plus className="w-4 h-4" />
                  Create New Chain
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap">
        <button className="px-4 py-2 rounded-full bg-[var(--accent-primary)] text-white text-sm font-medium">
          All Templates
        </button>
        {categories.map(cat => (
          <button 
            key={cat}
            className="px-4 py-2 rounded-full bg-white/5 text-[var(--text-muted)] text-sm font-medium hover:bg-white/10 transition-colors"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mixerTemplates.map((template) => {
          const Icon = template.icon;
          const isSelected = selectedTemplate === template.id;
          const isCopied = copiedId === template.id;

          return (
            <div
              key={template.id}
              className={`card-base overflow-hidden transition-all duration-300 ${
                isSelected ? 'ring-2 ring-[var(--accent-primary)]' : ''
              }`}
            >
              {/* Template Header */}
              <div className={`p-4 bg-gradient-to-r ${template.color} bg-opacity-20`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-black/20">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{template.name}</h3>
                    <span className="text-xs text-white/70">{template.category}</span>
                  </div>
                </div>
              </div>

              {/* Template Body */}
              <div className="p-4 space-y-4">
                <p className="text-sm text-[var(--text-muted)]">
                  {template.description}
                </p>

                {/* Stats */}
                <div className="flex gap-4 text-xs">
                  <div className="flex items-center gap-1 text-[var(--text-muted)]">
                    <SlidersHorizontal className="w-3 h-3" />
                    {template.tracks} tracks
                  </div>
                  <div className="flex items-center gap-1 text-[var(--text-muted)]">
                    <Music className="w-3 h-3" />
                    {template.plugins.length} plugins
                  </div>
                </div>

                {/* Plugin List */}
                <div className="flex flex-wrap gap-1">
                  {template.plugins.map((plugin, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 rounded bg-white/5 text-[var(--text-muted)]"
                    >
                      {plugin}
                    </span>
                  ))}
                </div>

                {/* Expanded Settings */}
                {isSelected && (
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <h4 className="text-sm font-medium text-white">Signal Chain:</h4>
                    {Object.entries(template.settings).map(([key, value]) => (
                      <div key={key} className="text-xs p-2 bg-white/5 rounded">
                        <span className="text-[var(--accent-tertiary)]">{key}:</span>
                        <span className="text-[var(--text-muted)] ml-2">{value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <button 
                    onClick={() => setSelectedTemplate(isSelected ? null : template.id)}
                    className="flex-1 btn-glass text-sm py-2"
                  >
                    {isSelected ? 'Hide Details' : 'View Details'}
                  </button>
                  <button 
                    onClick={() => handleCopy(template.id)}
                    className="p-2 btn-glass"
                    title="Copy to clipboard"
                  >
                    {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button 
                    onClick={() => handleDownload(template)}
                    className="p-2 btn-glass"
                    title="Download template"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* User Templates Section */}
      {userTemplates.length > 0 && (
        <div className="pt-8 border-t border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Your Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* User templates would render here */}
          </div>
        </div>
      )}

      {/* Empty State for User Templates */}
      {userTemplates.length === 0 && (
        <div className="card-base p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
            <Plus className="w-8 h-8 text-[var(--text-muted)]" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Create Your Own Templates</h3>
          <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto mb-4">
            Save your favorite mixer configurations as templates for quick recall in future projects.
          </p>
          <button className="btn-primary">
            Create First Template
          </button>
        </div>
      )}
    </section>
  );
};
