'use client';

import { StatCard } from './ui/GlassCard';

interface HeroSectionProps {
  onExploreTools?: () => void;
  totalPlugins?: number;
  totalWorkflows?: number;
  totalTemplates?: number;
}

export const HeroSection = ({
  onExploreTools,
  totalPlugins = 50,
  totalWorkflows = 25,
  totalTemplates = 30
}: HeroSectionProps) => {
  const featuredIcons = ['🎹', '🎛️', '🎧', '🎵', '🔊'];

  return (
    <section className="relative py-8 md:py-12">
      {/* Main Hero Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left - Hero Text */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Discover the Best{' '}
            <span className="text-gradient">FL Studio Tools</span>
            <br />
            for Your Workflow
          </h1>
          <p className="text-lg text-[var(--text-muted)] mb-8 max-w-2xl">
            Explore our curated collection of FL Studio plugins, effects, and workflow chains 
            designed to enhance your music production and creativity.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <button onClick={onExploreTools} className="btn-primary px-8 py-3 text-base">
              Explore Tools
              <svg className="inline-block w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="btn-secondary px-8 py-3 text-base">
              Advertise
            </button>
          </div>

          {/* Featured Icons Row */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {featuredIcons.map((icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full bg-[var(--bg-card)] border-2 border-[var(--glass-border)] flex items-center justify-center text-lg"
                >
                  {icon}
                </div>
              ))}
            </div>
            <span className="text-sm text-[var(--text-dim)]">
              {totalPlugins}+ tools and counting
            </span>
          </div>
        </div>

        {/* Right - Newsletter Card */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
          <p className="text-sm text-[var(--text-muted)] mb-4">
            Get the latest FL Studio tools and updates delivered to your inbox.
          </p>

          <div className="space-y-3 mb-4">
            <div className="glass-input flex items-center gap-3 px-4 py-3">
              <svg className="w-5 h-5 text-[var(--text-dim)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <input
                type="text"
                placeholder="Your name"
                className="flex-1 bg-transparent outline-none text-sm"
              />
            </div>
            <div className="glass-input flex items-center gap-3 px-4 py-3">
              <svg className="w-5 h-5 text-[var(--text-dim)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          <button className="btn-primary w-full py-3">
            Subscribe Now
            <svg className="inline-block w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <div className="mt-4 pt-4 border-t border-[var(--glass-border)]">
            <p className="text-xs text-[var(--text-dim)] font-medium mb-2">What you&apos;ll get:</p>
            <ul className="space-y-1">
              {[
                'Weekly FL Studio tools roundup',
                'Early access to new features',
                'Exclusive tips and tutorials',
                'Special offers and discounts'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <span className="text-[var(--accent-tertiary)]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          value={`${totalPlugins}+`}
          label="Plugins & Effects"
          icon="🎹"
        />
        <StatCard
          value={`${totalWorkflows}+`}
          label="Workflow Chains"
          icon="🔄"
        />
        <StatCard
          value={`${totalTemplates}+`}
          label="Project Templates"
          icon="📁"
        />
      </div>
    </section>
  );
};
