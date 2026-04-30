'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';

// Get basePath for GitHub Pages compatibility
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
import {
  ArrowRight,
  Zap,
  Music,
  BookOpen,
  Layers,
  Target,
  Sparkles,
  Play,
  CheckCircle2,
  Star,
  TrendingUp,
  Clock,
  Users,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  const [currentGenre, setCurrentGenre] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-rotate genre carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGenre((prev) => (prev + 1) % genres.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(timer);
  }, []);

  const genres = [
    {
      name: 'Trap',
      description: '808 sub-bass, rapid hi-hat rolls (1/32 triplets), half-time snares',
      color: 'from-purple-500 to-pink-500',
      plugins: [
        { name: 'Gross Beat', use: 'Half-speed & stutter FX' },
        { name: 'Maximus', use: 'Sidechain compression' },
        { name: '3xOSC', use: '808 sub-bass' },
      ],
    },
    {
      name: 'House',
      description: '4/4 kick pattern at 120-128 BPM, filtered disco loops, sidechain pump',
      color: 'from-blue-500 to-cyan-500',
      plugins: [
        { name: 'FLEX', use: 'Piano stabs & chords' },
        { name: 'Fruity Reverb 2', use: 'Vocal ambience' },
        { name: 'Parametric EQ 2', use: 'Filter sweeps' },
      ],
    },
    {
      name: 'Lo-Fi Hip Hop',
      description: 'Dusty samples, vinyl crackle, tape wobble, 70-90 BPM swing',
      color: 'from-amber-500 to-orange-500',
      plugins: [
        { name: 'Vintage Chorus', use: 'Tape warble effect' },
        { name: 'Effector', use: 'Bit-crushing & saturation' },
        { name: 'Sytrus', use: 'Electric piano tones' },
      ],
    },
    {
      name: 'Dubstep',
      description: 'LFO wobble bass at 140 BPM, heavy resampling, aggressive midrange',
      color: 'from-green-500 to-teal-500',
      plugins: [
        { name: 'Harmor', use: 'Resynthesized bass wobbles' },
        { name: 'Vocodex', use: 'Robotic vocals & growls' },
        { name: 'Fruity Love Philter', use: 'LFO-modulated filtering' },
      ],
    },
    {
      name: 'Ambient',
      description: 'Evolving pads, granular textures, reverb decay >5s, no transients',
      color: 'from-indigo-500 to-purple-500',
      plugins: [
        { name: 'Harmless', use: 'Additive pad layers' },
        { name: 'Fruity Reverb 2', use: 'Algorithmic reverb tails' },
        { name: 'Delay Bank', use: 'Stereo ping-pong delays' },
      ],
    },
  ];

  const nextGenre = () => {
    setCurrentGenre((prev) => (prev + 1) % genres.length);
  };

  const prevGenre = () => {
    setCurrentGenre((prev) => (prev - 1 + genres.length) % genres.length);
  };

  const heroAccess = [
    { href: '/hub#plugins-database', label: 'Plugin Database', desc: 'Search every native instrument and effect', Icon: Layers, hover: 'hover:border-purple-400/50', iconWrap: 'bg-purple-500/15 border-purple-400/20', icon: 'text-purple-300' },
    { href: '/hub#workflow-chains', label: 'Workflow Chains', desc: 'Load proven native signal chains', Icon: Zap, hover: 'hover:border-blue-400/50', iconWrap: 'bg-blue-500/15 border-blue-400/20', icon: 'text-blue-300' },
    { href: '/hub#templates', label: 'Song Templates', desc: 'Start from genre-ready project maps', Icon: Target, hover: 'hover:border-green-400/50', iconWrap: 'bg-green-500/15 border-green-400/20', icon: 'text-green-300' },
    { href: '/hub#mixer-templates', label: 'Mixer Templates', desc: 'Use native mix bus starting points', Icon: TrendingUp, hover: 'hover:border-pink-400/50', iconWrap: 'bg-pink-500/15 border-pink-400/20', icon: 'text-pink-300' },
    { href: '/hub#quick-start', label: 'Quick Start', desc: 'Follow focused learning paths', Icon: BookOpen, hover: 'hover:border-amber-400/50', iconWrap: 'bg-amber-500/15 border-amber-400/20', icon: 'text-amber-300' },
    { href: '/hub#troubleshoot', label: 'Troubleshooting', desc: 'Fix latency, CPU, routing, and plugin issues', Icon: Sparkles, hover: 'hover:border-cyan-400/50', iconWrap: 'bg-cyan-500/15 border-cyan-400/20', icon: 'text-cyan-300' },
  ];

  const heroStats = [
    { value: '134', label: 'Native plugins' },
    { value: '12', label: 'Workflow chains' },
    { value: '73', label: 'Song templates' },
    { value: '32', label: 'Capabilities' },
  ];

  const recommendedStarts = [
    { href: '/hub#plugins-database', label: 'Find a stock synth', meta: 'Sytrus, Harmor, FLEX' },
    { href: '/hub#workflow-chains', label: 'Build a vocal chain', meta: 'EQ, compression, space' },
    { href: '/hub#templates', label: 'Start a genre session', meta: 'Trap, house, ambient' },
    { href: '/hub#troubleshoot', label: 'Fix a production problem', meta: 'CPU, latency, routing' },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-white overflow-hidden relative">
      {/* ANIMATED BACKGROUND LAYER */}
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        style={{
          backgroundImage: `url(${basePath}/fl-studio-test-new-background.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          filter: 'blur(1px)',
        }}
      >
        <div
          className="absolute inset-0 animate-slow-drift"
          style={{
            backgroundImage: `url(${basePath}/fl-studio-test-new-background.svg)`,
            backgroundSize: '110%',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[120px] opacity-20 animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] opacity-20 animate-pulse-glow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      {/* ===== MUSICAL NOTES PARTICLE SYSTEM ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {isMounted && [...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-500/20 animate-float-note"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              fontSize: `${20 + Math.random() * 30}px`,
            }}
          >
            {['♪', '♫', '♬', '♩'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      {/* ===== LATEST UPDATES BADGE ===== */}
      <div className="relative z-20 pt-20">
        <div className="max-w-4xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-center gap-3 p-3 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md w-fit mx-auto animate-fade-in-up">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-purple-200">
              <strong className="text-white">New:</strong> 134 plugins documented · 12 signal chains · 73 templates
            </span>
          </div>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative z-10 min-h-screen px-2 sm:px-4 lg:px-6 xl:px-8 pt-16 pb-12 flex items-center">
        {/* Animated Waveform Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <svg width="800" height="200" viewBox="0 0 800 200" className="max-w-full">
            {[...Array(40)].map((_, i) => (
              <rect
                key={i}
                x={i * 20}
                y="100"
                width="12"
                height="10"
                fill="url(#waveGradient)"
                className="animate-waveform"
                style={{
                  animationDelay: `${i * 0.05}s`,
                  transformOrigin: `${i * 20 + 6}px 100px`,
                }}
              />
            ))}
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="w-full max-w-[1800px] 2xl:max-w-[2000px] mx-auto animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-5 items-stretch">
            <div className="lg:col-span-1 order-2 lg:order-1 rounded-[1.75rem] border border-white/10 bg-slate-950/65 p-3 backdrop-blur-xl shadow-lg">
              <div className="mb-3 flex items-center justify-between px-1">
                <p className="text-xs uppercase tracking-[0.22em] text-purple-200/60">Direct Access</p>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2 py-1 text-[10px] font-bold text-white/70">6 modules</span>
              </div>
              <div className="grid h-[calc(100%-2rem)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 auto-rows-fr gap-3">
              {heroAccess.map(({ href, label, desc, Icon, hover, iconWrap, icon }) => (
                <Link
                  key={label}
                  href={href}
                  className={`group min-h-[118px] rounded-2xl border border-white/15 bg-white/[0.08] p-3 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.12] ${hover} hover:shadow-lg`}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${iconWrap}`}>
                      <Icon className={`h-5 w-5 ${icon}`} />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-sm font-bold leading-tight text-white group-hover:text-white">{label}</h2>
                      <p className="mt-1 text-[11px] leading-4 text-[var(--text-muted)]">{desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
              </div>
            </div>

            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="h-full min-h-[560px] rounded-[2rem] border border-purple-500/20 bg-slate-950/75 px-6 py-8 md:px-10 md:py-10 xl:px-12 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.45)] flex flex-col justify-center overflow-hidden relative">
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/70 to-transparent" />
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />
                <div className="absolute -left-24 bottom-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative">
                  <div className="mb-7">
                    <img
                      src={`${basePath}/images/branding/logo-white.svg`}
                      alt="FL Studio Master Hub"
                      className="h-auto w-full max-w-[620px] drop-shadow-[0_0_45px_rgba(168,85,247,0.35)] logo-fade-in"
                    />
                  </div>

                  <Badge variant="premium" className="mb-6 text-sm py-2 px-4 shadow-[0_0_30px_rgba(124,58,237,0.4)]">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Native FL Studio Production System
                  </Badge>

                  <h1 className="sr-only">FL Studio Master Hub</h1>

                  <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-xl leading-8 mb-8">
                    Find the right stock plugin, build proven signal chains, launch genre templates, and solve production problems without leaving the native FL ecosystem.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/hub"
                      className="group relative px-6 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 hover:from-purple-500 hover:via-purple-400 hover:to-blue-400 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(124,58,237,0.45)] flex items-center justify-center gap-3 overflow-hidden"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      <span>Open Studio Hub</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/hub#plugins-database"
                      className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[var(--accent-primary)]/50 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3"
                    >
                      <Layers className="w-5 h-5" />
                      Browse Plugins
                    </Link>
                  </div>
                </div>

                <div className="relative mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[var(--text-muted)]">
                  {['100% Native Plugins', '134 Plugin Specs', 'Production-Ready'].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-green-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 order-3 rounded-[1.75rem] border border-white/10 bg-slate-950/65 p-3 backdrop-blur-xl shadow-lg">
              <div className="grid h-full grid-cols-2 auto-rows-fr gap-3">
                <div className="col-span-2 rounded-2xl border border-green-500/20 bg-white/[0.08] p-4 backdrop-blur-md">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-purple-200/60">System Index</p>
                    <h2 className="mt-1 text-base font-bold text-white">Native production map</h2>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-green-500/15 border border-green-400/20 grid place-items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-300" />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/15 bg-slate-950/60 p-2">
                      <div className="text-xl font-black text-white">{stat.value}</div>
                      <div className="mt-1 text-[10px] leading-3 text-[var(--text-muted)]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-2 rounded-2xl border border-blue-500/20 bg-white/[0.08] p-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.24em] text-blue-200/70 font-semibold">Recommended Starts</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {recommendedStarts.map((item, index) => (
                    <Link key={item.label} href={item.href} className="group flex min-h-[86px] flex-col justify-between rounded-xl border border-white/15 bg-slate-950/60 p-3 hover:bg-slate-950/80 hover:border-blue-400/50 transition-all hover:shadow-md">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-blue-500/15 text-xs font-bold text-blue-200">
                        {index + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold leading-tight text-white">{item.label}</span>
                        <span className="mt-1 block text-[10px] leading-3 text-[var(--text-muted)]">{item.meta}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="col-span-2 rounded-2xl border border-purple-500/25 bg-gradient-to-br from-purple-500/20 via-white/[0.08] to-blue-500/15 p-4 backdrop-blur-md shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="h-5 w-5 text-purple-200" />
                  <h2 className="text-base font-bold text-white">Native advantage</h2>
                </div>
                <p className="text-xs leading-5 text-[var(--text-secondary)]">
                  Built around FL Studio stock tools, internal routing, and repeatable project systems instead of third-party plugin shopping.
                </p>
                <Link href="/hub#native-advantages" className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-purple-200 hover:text-white transition-colors">
                  Compare native workflows
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-xs text-purple-300/60 uppercase tracking-wider animate-pulse">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 animate-bounce">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="relative z-10 py-12 border-y border-white/10 bg-white/[0.02] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-400/40 before:to-transparent">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-1">134</div>
              <div className="text-sm text-[var(--text-muted)]">Stock Plugins</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-1">12</div>
              <div className="text-sm text-[var(--text-muted)]">Signal Chains</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-1">73</div>
              <div className="text-sm text-[var(--text-muted)]">Song Templates</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-1">100%</div>
              <div className="text-sm text-[var(--text-muted)]">Native Workflow</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT'S INSIDE ===== */}
      <section className="relative z-10 py-20 px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Production Resources</h2>
            <p className="text-[var(--text-muted)] max-w-xl mx-auto">
              Professional-grade reference materials for FL Studio&apos;s complete native plugin suite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Plugins */}
            <Link href="/hub#plugins-database" className="group relative p-6 rounded-2xl bg-gradient-to-br from-purple-500/15 to-purple-500/8 border border-purple-500/30 hover:border-purple-500/50 card-interactive backdrop-blur-sm hover:shadow-[0_8px_32px_rgba(124,58,237,0.25)]">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-semibold text-purple-300 bg-purple-500/25 px-3 py-1 rounded-full border border-purple-400/30">Most Popular</span>
              </div>
              <div className="w-14 h-14 rounded-xl bg-purple-500/25 border border-purple-400/30 flex items-center justify-center mb-4">
                <Layers className="w-7 h-7 text-purple-300 animate-icon-layers" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Plugin Database</h3>
              <p className="text-purple-100/70 mb-4 leading-relaxed">Search all 134 native instruments and effects with detailed specs, CPU benchmarks, and real-world usage examples.</p>
              <div className="flex items-center text-purple-300 font-semibold text-sm">
                <span>Search Plugins</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 2 - Workflows */}
            <Link href="/hub#workflow-chains" className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-500/8 border border-blue-500/30 hover:border-blue-500/50 card-interactive backdrop-blur-sm hover:shadow-[0_8px_32px_rgba(59,130,246,0.25)]">
              <div className="w-14 h-14 rounded-xl bg-blue-500/25 border border-blue-400/30 flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-blue-300 animate-icon-zap" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Signal Chains</h3>
              <p className="text-blue-100/70 mb-4 leading-relaxed">Copy 12 proven processing chains for vocals, drums, and mastering with routing diagrams and exact settings.</p>
              <div className="flex items-center text-blue-300 font-semibold text-sm">
                <span>Browse Chains</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 3 - Templates */}
            <Link href="/hub#templates" className="group relative p-6 rounded-2xl bg-gradient-to-br from-green-500/15 to-green-500/8 border border-green-500/30 hover:border-green-500/50 card-interactive backdrop-blur-sm hover:shadow-[0_8px_32px_rgba(16,185,129,0.25)]">
              <div className="w-14 h-14 rounded-xl bg-green-500/25 border border-green-400/30 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-green-300 animate-icon-target" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">Song Blueprints</h3>
              <p className="text-green-100/70 mb-4 leading-relaxed">Download 73 genre-ready templates with pre-routed channels, mixer setup, and optimized tempo/key settings.</p>
              <div className="flex items-center text-green-300 font-semibold text-sm">
                <span>Download Templates</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 4 - Learning */}
            <Link href="/hub#quick-start" className="group relative p-6 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-500/8 border border-amber-500/30 hover:border-amber-500/50 card-interactive backdrop-blur-sm hover:shadow-[0_8px_32px_rgba(245,158,11,0.25)]">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-semibold text-amber-300 bg-amber-500/25 px-3 py-1 rounded-full border border-amber-400/30">Beginner Friendly</span>
              </div>
              <div className="w-14 h-14 rounded-xl bg-amber-500/25 border border-amber-400/30 flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-amber-300 animate-icon-book" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">Quick Start Guides</h3>
              <p className="text-amber-100/70 mb-4 leading-relaxed">Follow structured tutorials on MIDI programming, mixer routing, automation, and full track arrangement.</p>
              <div className="flex items-center text-amber-300 font-semibold text-sm">
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 5 - Mixing */}
            <Link href="/hub#mixing" className="group relative p-6 rounded-2xl bg-gradient-to-br from-pink-500/15 to-pink-500/8 border border-pink-500/30 hover:border-pink-500/50 card-interactive backdrop-blur-sm hover:shadow-[0_8px_32px_rgba(236,72,153,0.25)]">
              <div className="w-14 h-14 rounded-xl bg-pink-500/25 border border-pink-400/30 flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-pink-300 animate-icon-trending" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">Mixing & Mastering</h3>
              <p className="text-pink-100/70 mb-4 leading-relaxed">Master professional mixing with native plugins only—proven EQ curves, compression settings, and imaging.</p>
              <div className="flex items-center text-pink-300 font-semibold text-sm">
                <span>View Techniques</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 6 - Shortcuts */}
            <Link href="/hub#dojo" className="group relative p-6 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-500/8 border border-cyan-500/30 hover:border-cyan-500/50 card-interactive backdrop-blur-sm hover:shadow-[0_8px_32px_rgba(6,182,212,0.25)]">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/25 border border-cyan-400/30 flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-cyan-300 animate-icon-clock" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Keyboard Mastery</h3>
              <p className="text-cyan-100/70 mb-4 leading-relaxed">Train with 47+ essential shortcuts for pattern editor, playlist, mixer, and piano roll with flashcard practice.</p>
              <div className="flex items-center text-cyan-300 font-semibold text-sm">
                <span>Practice Shortcuts</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="relative z-10 py-20 px-2 sm:px-4 lg:px-6 xl:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Streamlined Learning Path</h2>
            <p className="text-[var(--text-muted)] max-w-xl mx-auto">
              Structured approach to mastering FL Studio&apos;s native production environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-600/20 border-2 border-purple-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-purple-400">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Access the Database</h3>
              <p className="text-[var(--text-muted)] text-sm">Browse 134 plugin specifications, 12 signal chains, and 73 production templates—all organized by category and use case.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-purple-400">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Study the Techniques</h3>
              <p className="text-[var(--text-muted)] text-sm">Deep-dive into parameter settings, routing configurations, and studio workflows optimized for native FL plugins.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-green-400">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Implement in Projects</h3>
              <p className="text-[var(--text-muted)] text-sm">Apply production techniques, copy signal chain configurations, and adapt templates to your creative workflow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY FAVORITES ===== */}
      <section className="relative z-10 py-20 px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Essential Stock Plugins</h2>
            <p className="text-[var(--text-muted)] max-w-xl mx-auto">
              Industry-standard native instruments used in professional productions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Sytrus', category: 'FM Synth', rating: 4.9, color: 'orange' },
              { name: 'Harmor', category: 'Additive', rating: 4.8, color: 'purple' },
              { name: 'Gross Beat', category: 'Time FX', rating: 4.8, color: 'blue' },
              { name: 'Maximus', category: 'Dynamics', rating: 4.7, color: 'pink' },
            ].map((plugin) => (
              <Link href="/hub#plugins-database" key={plugin.name} className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-bold text-white">{plugin.rating}</span>
                </div>
                <h4 className="font-bold text-white group-hover:text-[var(--accent-primary)] transition-colors">{plugin.name}</h4>
                <p className="text-xs text-[var(--text-muted)]">{plugin.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GENRE SPOTLIGHT CAROUSEL ===== */}
      <section className="relative z-10 py-20 px-2 sm:px-4 lg:px-6 xl:px-8 bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Genre-Specific Toolkits</h2>
            <p className="text-[var(--text-muted)] max-w-xl mx-auto">
              Native plugin combinations optimized for specific production styles and workflows
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentGenre * 100}%)` }}
              >
                <div className="flex">
                  {genres.map((genre, index) => (
                    <div
                      key={index}
                      className="min-w-full px-4"
                    >
                      <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${genre.color} bg-opacity-10 border border-white/20 backdrop-blur-sm`}>
                        {/* Genre Header */}
                        <div className="text-center mb-8">
                          <h3 className={`text-4xl md:text-5xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r ${genre.color}`}>
                            {genre.name}
                          </h3>
                          <p className="text-lg text-[var(--text-secondary)]">{genre.description}</p>
                        </div>

                        {/* Plugin Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {genre.plugins.map((plugin, pluginIndex) => (
                            <div
                              key={pluginIndex}
                              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <Music className="w-4 h-4 text-purple-400" />
                                <h4 className="font-bold text-white">{plugin.name}</h4>
                              </div>
                              <p className="text-sm text-[var(--text-muted)]">{plugin.use}</p>
                            </div>
                          ))}
                        </div>

                        {/* Genre Index */}
                        <div className="flex justify-center gap-2 mt-8">
                          {genres.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentGenre(index)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                index === currentGenre
                                  ? 'bg-white w-8'
                                  : 'bg-white/30 hover:bg-white/50'
                              }`}
                              aria-label={`Go to genre ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevGenre}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-sm flex items-center justify-center transition-all group"
              aria-label="Previous genre"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextGenre}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-sm flex items-center justify-center transition-all group"
              aria-label="Next genre"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Link
              href="/hub#plugins-database"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-purple-500/50 text-white font-semibold rounded-xl transition-all"
            >
              <span>Explore All Plugins</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative z-10 py-20 px-2 sm:px-4 lg:px-6 bg-gradient-to-t from-purple-600/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build Professional Tracks with Stock Plugins</h2>
          <p className="text-lg text-[var(--text-muted)] mb-8">
            Comprehensive reference documentation for FL Studio&apos;s complete native production suite—no third-party plugins required.
          </p>
          <Link
            href="/hub"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(124,58,237,0.5)]"
          >
            <span>Access Full Database</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-6 text-sm text-[var(--text-muted)]">
            Instant access • No registration • Always free
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 py-8 px-2 sm:px-4 lg:px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <Music className="w-4 h-4" />
            <span>FL Studio Master Hub</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.image-line.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Official FL Studio Site</a>
            <Link href="/hub" className="hover:text-white transition-colors">Plugin Database</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
