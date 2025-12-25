'use client';

import { useState } from 'react';
import { 
  FolderOpen, 
  Search, 
  Play, 
  Download, 
  ExternalLink,
  Music,
  Drum,
  Mic,
  Zap,
  Piano,
  Waves,
  Filter,
  Volume2,
  Lightbulb
} from 'lucide-react';

// Sample pack reference data
const samplePacks = [
  {
    id: 'fl-signature-bundle',
    name: 'FL Studio Signature Bundle',
    description: 'The complete collection of samples included with FL Studio Producer and Signature editions.',
    category: 'Included',
    type: 'Multi-Genre',
    samples: 5000,
    size: '12 GB',
    location: 'C:\\Program Files\\Image-Line\\FL Studio 21\\Data\\Patches\\Packs',
    icon: Music,
    color: 'from-orange-500 to-red-500',
    contents: [
      'Drums (1,200+ samples)',
      'Bass sounds (400+ samples)',
      'Synth loops (600+ samples)',
      'Vocals & FX (800+ samples)',
      'Instruments (1,000+ samples)'
    ]
  },
  {
    id: 'drum-kits',
    name: 'Producer Drum Kits',
    description: 'Professional drum samples spanning all genres from EDM to Hip Hop.',
    category: 'Included',
    type: 'Drums',
    samples: 1500,
    size: '2.5 GB',
    location: 'C:\\Program Files\\Image-Line\\FL Studio 21\\Data\\Patches\\Packs\\Drums',
    icon: Drum,
    color: 'from-blue-500 to-cyan-500',
    contents: [
      'Kicks (300 samples)',
      'Snares (350 samples)',
      'Hi-hats & cymbals (400 samples)',
      'Percussion (250 samples)',
      'Full drum loops (200 samples)'
    ]
  },
  {
    id: 'vocal-packs',
    name: 'Vocal Sample Collection',
    description: 'Vocal chops, phrases, and one-shots for various genres.',
    category: 'Included',
    type: 'Vocals',
    samples: 800,
    size: '1.8 GB',
    location: 'C:\\Program Files\\Image-Line\\FL Studio 21\\Data\\Patches\\Packs\\Vocals',
    icon: Mic,
    color: 'from-pink-500 to-rose-500',
    contents: [
      'Vocal chops (200 samples)',
      'Phrases & hooks (150 samples)',
      'Ad-libs (100 samples)',
      'Harmonies (150 samples)',
      'Processed vocals (200 samples)'
    ]
  },
  {
    id: 'sfx-collection',
    name: 'Sound Effects Library',
    description: 'Risers, impacts, transitions, and atmospheric FX.',
    category: 'Included',
    type: 'FX',
    samples: 600,
    size: '800 MB',
    location: 'C:\\Program Files\\Image-Line\\FL Studio 21\\Data\\Patches\\Packs\\FX',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    contents: [
      'Risers & sweeps (150 samples)',
      'Impacts & hits (120 samples)',
      'Transitions (100 samples)',
      'Atmospheric FX (130 samples)',
      'Noise textures (100 samples)'
    ]
  },
  {
    id: 'keys-packs',
    name: 'Keys & Pianos',
    description: 'Piano, organ, and keyboard samples with various tones.',
    category: 'DirectWave',
    type: 'Instruments',
    samples: 400,
    size: '3.2 GB',
    location: 'DirectWave Library',
    icon: Piano,
    color: 'from-purple-500 to-violet-500',
    contents: [
      'Grand piano (multi-velocity)',
      'Electric pianos (Rhodes, Wurly)',
      'Organs (Hammond, Church)',
      'Synth keys',
      'Plucked strings'
    ]
  },
  {
    id: 'pads-textures',
    name: 'Pads & Textures',
    description: 'Atmospheric pads, drones, and textural elements.',
    category: 'Included',
    type: 'Ambient',
    samples: 350,
    size: '1.2 GB',
    location: 'C:\\Program Files\\Image-Line\\FL Studio 21\\Data\\Patches\\Packs\\Pads',
    icon: Waves,
    color: 'from-teal-500 to-emerald-500',
    contents: [
      'Evolving pads (100 samples)',
      'Static drones (80 samples)',
      'Textural loops (70 samples)',
      'Ambient beds (50 samples)',
      'Cinematic atmospheres (50 samples)'
    ]
  }
];

// Browser paths for FL Studio
const browserPaths = [
  { path: 'Packs', description: 'All installed sample packs', icon: FolderOpen },
  { path: 'Recorded', description: 'Your recorded audio files', icon: Mic },
  { path: 'Rendered', description: 'Bounced and rendered clips', icon: Volume2 },
  { path: 'Sliced beats', description: 'Slicex auto-sliced patterns', icon: Filter },
];

export const SamplePackReference = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPack, setSelectedPack] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = ['all', ...new Set(samplePacks.map(p => p.category))];
  const types = [...new Set(samplePacks.map(p => p.type))];

  const filteredPacks = samplePacks.filter(pack => {
    const matchesSearch = pack.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pack.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || pack.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="space-y-8">
      


      {/* Hero Card */}
      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border border-emerald-500/20 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <FolderOpen className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">The Sounds of FL Studio</h3>
            <p className="text-emerald-200/80 mb-3">
              Included content gives you thousands of royalty-free samples. Learn where they live in your browser.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">{samplePacks.length}</span>
                <span className="text-emerald-200/60">Collections</span>
              </div>
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-200/60">Searchable</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Browser Paths */}
      <div className="card-base p-5">
        <h3 className="text-sm font-medium text-[var(--text-dim)] uppercase tracking-wider mb-4">
          FL Studio Browser Paths
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {browserPaths.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.path}
                className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-5 h-5 text-[var(--accent-primary)]" />
                  <span className="font-medium text-white">{item.path}</span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Search sample packs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)]"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                categoryFilter === cat 
                  ? 'bg-[var(--accent-primary)] text-white' 
                  : 'bg-white/5 text-[var(--text-muted)] hover:bg-white/10'
              }`}
            >
              {cat === 'all' ? 'All' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Sample Pack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPacks.map((pack) => {
          const Icon = pack.icon;
          const isSelected = selectedPack === pack.id;

          return (
            <div
              key={pack.id}
              className={`card-base overflow-hidden transition-all duration-300 ${
                isSelected ? 'ring-2 ring-[var(--accent-primary)]' : ''
              }`}
            >
              {/* Pack Header */}
              <div className={`p-4 bg-gradient-to-r ${pack.color}`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-black/20">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{pack.name}</h3>
                    <span className="text-xs text-white/70">{pack.type}</span>
                  </div>
                </div>
              </div>

              {/* Pack Body */}
              <div className="p-4 space-y-4">
                <p className="text-sm text-[var(--text-muted)]">
                  {pack.description}
                </p>

                {/* Stats */}
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{pack.samples.toLocaleString()}</div>
                    <div className="text-xs text-[var(--text-muted)]">Samples</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{pack.size}</div>
                    <div className="text-xs text-[var(--text-muted)]">Size</div>
                  </div>
                  <div className="flex-1 text-right">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      pack.category === 'Included' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {pack.category}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="p-2 bg-white/5 rounded text-xs font-mono text-[var(--text-muted)] truncate">
                  <FolderOpen className="w-4 h-4 inline mr-1" /> {pack.location}
                </div>

                {/* Expanded Contents */}
                {isSelected && (
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider mb-3">
                      Contents
                    </h4>
                    <ul className="space-y-1">
                      {pack.contents.map((item, idx) => (
                        <li key={idx} className="text-sm text-[var(--text-muted)] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <button 
                    onClick={() => setSelectedPack(isSelected ? null : pack.id)}
                    className="flex-1 btn-glass text-sm py-2"
                  >
                    {isSelected ? 'Hide Contents' : 'View Contents'}
                  </button>
                  <button className="p-2 btn-glass" title="Preview samples">
                    <Play className="w-4 h-4" />
                  </button>
                  <button className="p-2 btn-glass" title="Open in browser">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tip Section */}
      <div className="card-base p-6 bg-gradient-to-r from-[var(--accent-primary)]/10 to-transparent border-l-4 border-[var(--accent-primary)]">
        <h3 className="font-semibold text-white mb-2 flex items-center gap-2"><Lightbulb className="w-5 h-5" /> Pro Tip: Organize Your Samples</h3>
        <p className="text-sm text-[var(--text-muted)]">
          Use FL Studio&apos;s Browser to add your own sample folders. Right-click in the browser sidebar, 
          select &quot;Add folder to browser&quot;, and organize your samples for quick access during production.
        </p>
      </div>
    </section>
  );
};
