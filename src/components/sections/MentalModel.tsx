'use client';

import { ToolCard } from '@/components/ui/ToolCard';

// Featured tools data
const featuredTools = [
  {
    id: 'harmor',
    name: 'Harmor',
    description: 'Flagship additive synthesizer with resynthesis capabilities. Generates sounds directly from frequency spectra.',
    category: 'Additive Synthesis',
    icon: '🎹',
    rating: 4.8,
    isSponsored: true,
    tags: [
      { label: 'Additive', color: 'purple' as const },
      { label: 'Resynthesis', color: 'cyan' as const },
    ],
    pricingBadge: 'all-plugins' as const,
    views: 50000,
    saves: 1250,
  },
  {
    id: 'sytrus',
    name: 'Sytrus',
    description: 'FM/RM and Subtractive hybrid synth with 6x6 modulation matrix. Perfect for complex sound design.',
    category: 'FM Synthesis',
    icon: '🔊',
    rating: 4.9,
    isSponsored: true,
    tags: [
      { label: 'FM Synthesis', color: 'orange' as const },
      { label: 'Hybrid', color: 'blue' as const },
    ],
    pricingBadge: 'producer' as const,
    views: 45000,
    saves: 1100,
  },
  {
    id: 'gross-beat',
    name: 'Gross Beat',
    description: 'Real-time time and volume manipulation with 36 envelopes. Essential for Trap half-speed effects.',
    category: 'Time & Pitch',
    icon: '⏱️',
    rating: 4.8,
    isSponsored: true,
    tags: [
      { label: 'Time Stretch', color: 'green' as const },
      { label: 'Effects', color: 'pink' as const },
    ],
    pricingBadge: 'signature' as const,
    views: 60000,
    saves: 1500,
  },
  {
    id: 'maximus',
    name: 'Maximus',
    description: 'Multiband compressor/limiter/gate with custom curve drawing. Linear phase filtering for mastering.',
    category: 'Dynamics/Mastering',
    icon: '📊',
    rating: 4.7,
    isSponsored: true,
    tags: [
      { label: 'Mastering', color: 'purple' as const },
      { label: 'Dynamics', color: 'blue' as const },
    ],
    pricingBadge: 'all-plugins' as const,
    views: 40000,
    saves: 980,
  },
  {
    id: 'flex',
    name: 'FLEX',
    description: 'Sample-based rompler with curated content. Instant gratification for bread and butter sounds.',
    category: 'Rompler',
    icon: '🎼',
    rating: 4.6,
    tags: [
      { label: 'Preset-Based', color: 'cyan' as const },
      { label: 'Easy', color: 'green' as const },
    ],
    pricingBadge: 'free' as const,
    views: 70000,
    saves: 2000,
  },
];

// Mental Model concepts
const mentalModelConcepts = [
  {
    title: 'Pattern-Based Workflow',
    description: 'FL Studio uses patterns as building blocks. Think of patterns like musical LEGO pieces.',
    icon: '🧱',
  },
  {
    title: 'Non-Destructive Editing',
    description: 'Everything can be undone. Experiment freely without fear of losing your work.',
    icon: '🔄',
  },
  {
    title: 'Piano Roll Mastery',
    description: 'The heart of melody creation. Learn shortcuts to work 10x faster.',
    icon: '🎹',
  },
  {
    title: 'Mixer Routing',
    description: 'Understand signal flow from channels to mixer tracks to master output.',
    icon: '🎚️',
  },
];

export const MentalModelSection = () => {
  return (
    <section id="mental-model" className="page-section animate-fade">
      {/* Featured Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
        {featuredTools.map((tool) => (
          <ToolCard
            key={tool.id}
            {...tool}
            onClick={() => console.log(`Clicked on ${tool.name}`)}
          />
        ))}
      </div>

      {/* Latest Launches Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gradient mb-1">Latest Tool Launches</h2>
            <p className="text-sm text-[var(--text-muted)]">
              Discover the newest FL Studio tools and innovations
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="stat-card flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center">
              🚀
            </div>
            <div>
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-xs text-[var(--text-muted)]">Launches This Month</p>
            </div>
          </div>
          <div className="stat-card flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center">
              👥
            </div>
            <div>
              <p className="text-2xl font-bold text-white">10K+</p>
              <p className="text-xs text-[var(--text-muted)]">Active Users</p>
            </div>
          </div>
          <div className="stat-card flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center">
              ⭐
            </div>
            <div>
              <p className="text-2xl font-bold text-white">5K+</p>
              <p className="text-xs text-[var(--text-muted)]">Community Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mental Model Concepts */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Core Concepts</h2>
        <p className="text-[var(--text-muted)] mb-6">
          Master these fundamental concepts to unlock your FL Studio potential.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mentalModelConcepts.map((concept, index) => (
            <div key={index} className="content-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-2xl shrink-0">
                  {concept.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{concept.title}</h3>
                  <p className="text-sm text-[var(--text-muted)]">{concept.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};