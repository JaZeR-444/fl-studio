'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
  TrendingUp,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  const [currentGenre, setCurrentGenre] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [activeStart, setActiveStart] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-rotate genre carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGenre((prev) => (prev + 1) % genres.length);
    }, 30000); // Change every 30 seconds

    return () => clearInterval(timer);
  }, []);

  const genres = [
    {
      name: 'Trap',
      description: '808 sub-bass, rapid hi-hat rolls (1/32 triplets), half-time snares',
      color: 'from-purple-200 to-pink-200',
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

  const startProfiles = [
    {
      href: '/hub#plugins-database',
      label: 'I need the right tool',
      eyebrow: 'Search first',
      outcome: 'Compare native instruments and effects by job, sound, and production role.',
      modules: ['Plugin specs', 'CPU notes', 'Use cases'],
    },
    {
      href: '/hub#workflow-chains',
      label: 'I need a finished chain',
      eyebrow: 'Route fast',
      outcome: 'Load a proven stock-only path for vocals, drums, mastering, or sound design.',
      modules: ['Signal order', 'Settings logic', 'Routing notes'],
    },
    {
      href: '/hub#templates',
      label: 'I need a session start',
      eyebrow: 'Compose now',
      outcome: 'Start from a genre-ready project map with arrangement and mixer intent already framed.',
      modules: ['Genre maps', 'Mixer lanes', 'Tempo keys'],
    },
    {
      href: '/hub#troubleshoot',
      label: 'I need to fix a blocker',
      eyebrow: 'Debug cleanly',
      outcome: 'Resolve latency, CPU, routing, export, and native plugin problems without guesswork.',
      modules: ['Symptoms', 'Causes', 'Fix paths'],
    },
  ];

  const sectionNav = [
    { href: '#inside-the-system', label: 'System' },
    { href: '#learning-path', label: 'Path' },
    { href: '#essential-tools', label: 'Tools' },
    { href: '#genre-toolkits', label: 'Genres' },
    { href: '#full-database', label: 'Access' },
  ];

  const resourceCards = [
    {
      href: '/hub#plugins-database',
      label: 'Plugin Database',
      metric: '134',
      meta: 'native plugin records',
      copy: 'Search stock instruments and effects by role, capability, CPU behavior, and real production use cases.',
      tone: 'from-violet-300/22 via-fuchsia-400/8 to-transparent',
      accent: 'text-violet-100',
      span: 'lg:col-span-7',
    },
    {
      href: '/hub#workflow-chains',
      label: 'Signal Chains',
      metric: '12',
      meta: 'routable systems',
      copy: 'Copy complete vocal, drum, master, and sound-design chains with native-only routing logic.',
      tone: 'from-sky-300/20 via-cyan-400/8 to-transparent',
      accent: 'text-sky-100',
      span: 'lg:col-span-5',
    },
    {
      href: '/hub#templates',
      label: 'Song Blueprints',
      metric: '73',
      meta: 'genre starts',
      copy: 'Open a structured project map with tempo, channel intent, mixer lanes, and arrangement scaffolding already decided.',
      tone: 'from-emerald-300/18 via-lime-300/8 to-transparent',
      accent: 'text-emerald-100',
      span: 'lg:col-span-5',
    },
    {
      href: '/hub#quick-start',
      label: 'Quick Start Guides',
      metric: '100%',
      meta: 'native learning',
      copy: 'Move through compact production lessons for MIDI, playlist building, automation, mixing, and export decisions.',
      tone: 'from-amber-300/18 via-orange-300/8 to-transparent',
      accent: 'text-amber-100',
      span: 'lg:col-span-7',
    },
  ];

  const learningSteps = [
    ['01', 'Locate the tool', 'Filter the hub by outcome first, then choose the stock plugin that solves the job.'],
    ['02', 'Study the chain', 'Read the signal flow, parameter logic, and routing notes before loading a template.'],
    ['03', 'Build the record', 'Apply the workflow inside FL Studio, then adapt it to your genre and mix context.'],
  ];

  const essentialPlugins = [
    { name: 'Sytrus', category: 'FM synthesis', rating: '4.9', detail: 'bells, basses, metallic keys' },
    { name: 'Harmor', category: 'Additive engine', rating: '4.8', detail: 'resynthesis, bass design, pads' },
    { name: 'Gross Beat', category: 'Time and gate FX', rating: '4.8', detail: 'half-speed, stutters, motion' },
    { name: 'Maximus', category: 'Multiband dynamics', rating: '4.7', detail: 'mastering, glue, loudness' },
  ];

  return (
    <div className="min-h-screen bg-[#02040a] text-white overflow-hidden relative">
      {/* ===== TECHNICAL STUDIO BACKGROUND ===== */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base Grid Pattern (DAW Arrangement Style) */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Secondary Sub-Grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '200px 200px'
          }}
        />

        {/* Studio Lighting - Subtle Deep Ambient Glows (Non-pulsing) */}
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-900/10 rounded-full blur-[160px] transform -rotate-12" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[160px]" />
        
        {/* Center Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-purple-500/5 via-transparent to-transparent opacity-40" />
        
        {/* Professional Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-[#02040a] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02040a] via-transparent to-[#02040a] opacity-40" />
      </div>

      {/* ===== MUSICAL NOTES PARTICLE SYSTEM ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {isMounted && [...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-500/10 animate-float-note"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${20 + Math.random() * 15}s`,
              fontSize: `${16 + Math.random() * 24}px`,
            }}
          >
            {['♪', '♫', '♬', '♩'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative z-10 min-h-[100dvh] px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto flex min-h-[calc(100dvh-6rem)] max-w-[1500px] flex-col justify-center gap-8">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-100/78">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.65)]" />
                Native FL Studio production system
              </span>

              <div className="mt-8 max-w-3xl">
                <img
                  src={`${basePath}/images/branding/logo-white.svg`}
                  alt="FL Studio Master Hub"
                  className="h-auto w-full max-w-[620px] drop-shadow-[0_0_55px_rgba(168,85,247,0.34)] logo-fade-in"
                />
                <h1 className="sr-only">FL Studio Master Hub</h1>
              </div>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/62 md:text-xl md:leading-9">
                Find the right stock plugin, build proven signal chains, launch genre templates, and solve production problems without leaving the native FL ecosystem.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/hub"
                  className="premium-focus group inline-flex items-center justify-center rounded-full bg-white px-2 py-2 pl-6 text-base font-extrabold text-[#050505] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                >
                  <Play className="mr-3 h-4 w-4 fill-current" strokeWidth={1.5} />
                  Open Studio Hub
                  <span className="ml-5 grid h-10 w-10 place-items-center rounded-full bg-black/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
                    <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                </Link>

                <Link
                  href="/hub#plugins-database"
                  className="premium-focus group inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.055] px-2 py-2 pl-6 text-base font-bold text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white hover:text-[#050505] active:scale-[0.98]"
                >
                  Browse plugins
                  <span className="ml-5 grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:bg-black/10">
                    <Layers className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                </Link>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                {['134 plugin specs', '12 signal chains', '73 templates'].map((item) => (
                  <div key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white/52">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.4rem] border border-white/10 bg-white/[0.045] p-1.5">
              <div className="relative overflow-hidden rounded-[calc(2.4rem-0.375rem)] bg-[#070912] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)] md:p-7">
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-400/14 blur-3xl" />
                <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/38">Command surface</p>
                      <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">Jump straight into the hub.</h2>
                    </div>
                    <Sparkles className="h-6 w-6 text-purple-100/70" strokeWidth={1.25} />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {heroAccess.map(({ href, label, desc, Icon }, index) => (
                      <Link
                        key={label}
                        href={href}
                        className={`premium-focus group rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-1 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-white/20 ${
                          index === 0 || index === 3 ? 'sm:col-span-2' : ''
                        }`}
                      >
                        <div className="flex min-h-[116px] items-start gap-4 rounded-[calc(1.35rem-0.25rem)] bg-black/18 p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105">
                            <Icon className="h-5 w-5 text-white/78" strokeWidth={1.25} />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-extrabold text-white">{label}</span>
                            <span className="mt-2 block text-xs leading-5 text-white/48">{desc}</span>
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-1.5">
                    <div className="rounded-[calc(1.7rem-0.375rem)] bg-black/20 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-purple-100/70" strokeWidth={1.25} />
                          <h2 className="text-base font-extrabold text-white">Choose your path</h2>
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                          0{activeStart + 1}/04
                        </span>
                      </div>

                      <div className="grid gap-2 sm:grid-cols-2">
                        {startProfiles.map((item, index) => (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => setActiveStart(index)}
                            className={`premium-focus rounded-2xl border p-3 text-left transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                              activeStart === index
                                ? 'border-white/28 bg-white/[0.11] text-white'
                                : 'border-white/10 bg-white/[0.035] text-white/58 hover:bg-white/[0.075] hover:text-white'
                            }`}
                          >
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/32">0{index + 1}</span>
                            <span className="mt-2 block text-xs font-bold">{item.label}</span>
                          </button>
                        ))}
                      </div>

                      <div className="mt-4 rounded-[1.2rem] border border-white/10 bg-[#070912] p-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-purple-100/55">
                          {startProfiles[activeStart].eyebrow}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/68">{startProfiles[activeStart].outcome}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {startProfiles[activeStart].modules.map((module) => (
                            <span key={module} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-white/45">
                              {module}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={startProfiles[activeStart].href}
                          className="premium-focus group/path mt-5 inline-flex items-center rounded-full bg-white px-2 py-2 pl-5 text-sm font-extrabold text-[#050505] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                        >
                          Continue
                          <span className="ml-4 grid h-8 w-8 place-items-center rounded-full bg-black/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/path:translate-x-1">
                            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <Link
              href="#inside-the-system"
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/38 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.07] hover:text-white/70"
            >
              Scroll to explore
              <span className="h-1.5 w-8 rounded-full bg-white/20 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <main className="relative z-10">
        <div id="inside-the-system" className="mx-auto h-px max-w-[1500px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <nav className="sticky top-4 z-20 mx-auto mt-5 flex w-[calc(100%-2rem)] max-w-max justify-center rounded-full border border-white/10 bg-[#05070d]/80 p-1.5 shadow-[0_18px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
          {sectionNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="premium-focus rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/42 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.08] hover:text-white/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <section className="px-4 py-24 md:px-8 lg:py-32">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-100/75">
                  Inside the system
                </span>
                <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.98] tracking-normal text-white md:text-6xl">
                  A native-only production library with the friction removed.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-white/58 md:ml-auto md:text-lg">
                The hub turns FL Studio&apos;s stock ecosystem into a searchable operating layer: plugins, chains, templates, learning paths, troubleshooting, and genre-specific starting points in one place.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
              {resourceCards.map((card, index) => (
                <Link
                  key={card.label}
                  href={card.href}
                  className={`group rounded-[2rem] border border-white/10 bg-white/[0.045] p-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-white/20 ${card.span}`}
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className={`relative min-h-[300px] overflow-hidden rounded-[calc(2rem-0.375rem)] bg-[#070912] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)] md:p-8`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.tone}`} />
                    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/[0.035] blur-3xl" />
                    <div className="relative flex h-full min-h-[252px] flex-col justify-between">
                      <div className="flex items-start justify-between gap-4">
                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                          {card.meta}
                        </span>
                        <span className={`text-5xl font-black leading-none ${card.accent}`}>{card.metric}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white md:text-3xl">{card.label}</h3>
                        <p className="mt-3 max-w-xl text-sm leading-7 text-white/58 md:text-base">{card.copy}</p>
                        <div className="mt-7 inline-flex items-center rounded-full bg-white px-2 py-2 pl-5 text-sm font-extrabold text-[#050505] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                          Open module
                          <span className="ml-4 grid h-8 w-8 place-items-center rounded-full bg-black/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="learning-path" className="px-4 py-24 md:px-8 lg:py-32">
          <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-10">
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-100/75">
                Learning path
              </span>
              <h2 className="mt-5 text-4xl font-black leading-none text-white md:text-6xl">From search to session.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/58">
                Each resource is built to move a producer from question to action without sending them into plugin shopping, disconnected tutorials, or trial-and-error routing.
              </p>
            </div>

            <div className="space-y-5">
              {learningSteps.map(([step, title, copy]) => (
                <div key={step} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-1.5">
                  <div className="grid gap-5 rounded-[calc(2rem-0.375rem)] bg-[#070912] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] md:grid-cols-[120px_1fr] md:p-8">
                    <div className="text-5xl font-black text-white/16 md:text-6xl">{step}</div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/58 md:text-base">{copy}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="essential-tools" className="px-4 py-24 md:px-8 lg:py-32">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-100/75">
                  Essential stock tools
                </span>
                <h2 className="mt-5 text-4xl font-black leading-none text-white md:text-6xl">Four anchors for native production.</h2>
              </div>
              <Link href="/hub#plugins-database" className="group inline-flex w-max items-center rounded-full border border-white/10 bg-white/[0.06] px-2 py-2 pl-5 text-sm font-bold text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white hover:text-black active:scale-[0.98]">
                Browse database
                <span className="ml-4 grid h-8 w-8 place-items-center rounded-full bg-white/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:bg-black/10">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {essentialPlugins.map((plugin) => (
                <Link key={plugin.name} href="/hub#plugins-database" className="group rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-white/20">
                  <div className="min-h-[230px] rounded-[calc(1.7rem-0.375rem)] bg-[#070912] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/38">{plugin.category}</span>
                      <span className="rounded-full bg-amber-300/10 px-3 py-1 text-sm font-black text-amber-100">{plugin.rating}</span>
                    </div>
                    <h3 className="mt-14 text-3xl font-black text-white">{plugin.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/52">{plugin.detail}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="genre-toolkits" className="px-4 py-24 md:px-8 lg:py-32">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-100/75">
                  Genre toolkits
                </span>
                <h2 className="mt-5 text-4xl font-black leading-none text-white md:text-6xl">Native chains tuned by style.</h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-white/58 lg:ml-auto">
                Rotate through genre contexts and jump straight into the plugins that carry the sound: bass, space, movement, dynamics, and arrangement-ready texture.
              </p>
            </div>

            <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.045] p-1.5">
              <div className="relative overflow-hidden rounded-[calc(2.2rem-0.375rem)] bg-[#070912] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)] md:p-8">
                <div
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  style={{ transform: `translateX(-${currentGenre * 100}%)` }}
                >
                  {genres.map((genre) => (
                    <div key={genre.name} className="min-w-full">
                      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                        <div>
                          <h3 className={`text-5xl font-black leading-none text-transparent bg-clip-text bg-gradient-to-r ${genre.color} md:text-7xl`}>
                            {genre.name}
                          </h3>
                          <p className="mt-5 max-w-xl text-base leading-8 text-white/62">{genre.description}</p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
                          {genre.plugins.map((plugin) => (
                            <div key={plugin.name} className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-1">
                              <div className="min-h-[170px] rounded-[calc(1.5rem-0.25rem)] bg-black/20 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                                <h4 className="text-lg font-extrabold text-white">{plugin.name}</h4>
                                <p className="mt-4 text-sm leading-6 text-white/55">{plugin.use}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex gap-2">
                    {genres.map((genre, idx) => (
                      <button
                        key={genre.name}
                        onClick={() => setCurrentGenre(idx)}
                        className={`h-2 rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                          idx === currentGenre ? 'w-12 bg-white' : 'w-2 bg-white/30 hover:bg-white/55'
                        }`}
                        aria-label={`Go to ${genre.name}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button onClick={prevGenre} className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white hover:text-black active:scale-[0.98]" aria-label="Previous genre">
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button onClick={nextGenre} className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white hover:text-black active:scale-[0.98]" aria-label="Next genre">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="full-database" className="px-4 py-24 md:px-8 lg:py-36">
          <div className="mx-auto max-w-[1100px] rounded-[2.4rem] border border-white/10 bg-white/[0.045] p-1.5">
            <div className="relative overflow-hidden rounded-[calc(2.4rem-0.375rem)] bg-[#070912] px-6 py-16 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)] md:px-12 md:py-20">
              <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-100/75">
                Full database
              </span>
              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-none text-white md:text-6xl">
                Build finished records with stock plugins.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/58 md:text-lg">
                Comprehensive reference documentation for FL Studio&apos;s complete native production suite, organized for immediate use.
              </p>
              <Link href="/hub" className="group mt-9 inline-flex items-center rounded-full bg-white px-2 py-2 pl-6 text-base font-extrabold text-[#050505] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                Access full database
                <span className="ml-5 grid h-10 w-10 place-items-center rounded-full bg-black/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
              <p className="mt-6 text-sm text-white/38">Instant access - no registration - always free</p>
            </div>
          </div>
        </section>
      </main>

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
