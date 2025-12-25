'use client';

import { StatCard } from './ui/GlassCard';
import { 
  Rocket, 
  ArrowRight, 
  Piano, 
  RefreshCw, 
  FolderOpen 
} from 'lucide-react';

interface HeroSectionProps {
  onExploreTools?: () => void;
  onQuickStart?: () => void;
  totalPlugins?: number;
  totalWorkflows?: number;
  totalTemplates?: number;
}

export const HeroSection = ({
  onExploreTools,
  onQuickStart,
  totalPlugins = 50,
  totalWorkflows = 25,
  totalTemplates = 30
}: HeroSectionProps) => {

  return (
    <section className="relative py-8 md:py-12">
      {/* Main Hero Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Left - Hero Text */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your{' '}
            <span className="text-gradient">FL Studio</span>
            <br />
            Reference Hub
          </h1>
          <p className="text-lg text-[var(--text-muted)] mb-8 max-w-2xl">
            The complete knowledge base for FL Studio producers. Explore plugins, 
            workflows, templates, and production techniques all in one place.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <button onClick={onExploreTools} className="btn-primary px-8 py-3 text-base">
              Explore Tools
              <svg className="inline-block w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button onClick={onQuickStart} className="btn-secondary px-8 py-3 text-base flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              Quick Start Guide
            </button>
          </div>

          {/* Tool Icons Row - Using Lucide */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[Piano, RefreshCw, FolderOpen].map((Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full bg-[var(--bg-card)] border-2 border-[var(--glass-border)] flex items-center justify-center"
                >
                  <Icon className="w-4 h-4 text-[var(--accent-tertiary)]" />
                </div>
              ))}
            </div>
            <span className="text-sm text-[var(--text-dim)]">
              {totalPlugins}+ tools and counting
            </span>
          </div>
        </div>

        {/* Right - Quick Access Card */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
              <Rocket className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white">New to FL Studio?</h3>
          </div>
          <p className="text-sm text-[var(--text-muted)] mb-4">
            Get up and running quickly with our beginner-friendly guides.
          </p>

          <div className="space-y-2 mb-4">
            {[
              { label: 'Create Your First Beat', time: '15 min' },
              { label: 'Record Your First Vocal', time: '20 min' },
              { label: 'Mixing Fundamentals', time: '30 min' },
            ].map((guide, index) => (
              <button
                key={index}
                onClick={onQuickStart}
                className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent-primary)]/20 flex items-center justify-center text-xs text-[var(--accent-primary)]">
                    {index + 1}
                  </div>
                  <span className="text-sm text-white">{guide.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[var(--text-muted)]">{guide.time}</span>
                  <ArrowRight className="w-3 h-3 text-[var(--text-muted)] group-hover:text-white transition-colors" />
                </div>
              </button>
            ))}
          </div>

          <button onClick={onQuickStart} className="btn-primary w-full py-3">
            View All Guides
            <ArrowRight className="inline-block w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      {/* Stats Bar - Using Lucide icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          value={`${totalPlugins}+`}
          label="Plugins & Effects"
          icon={<Piano className="w-5 h-5 text-[var(--accent-tertiary)]" />}
        />
        <StatCard
          value={`${totalWorkflows}+`}
          label="Workflow Chains"
          icon={<RefreshCw className="w-5 h-5 text-[var(--accent-tertiary)]" />}
        />
        <StatCard
          value={`${totalTemplates}+`}
          label="Project Templates"
          icon={<FolderOpen className="w-5 h-5 text-[var(--accent-tertiary)]" />}
        />
      </div>
    </section>
  );
};
