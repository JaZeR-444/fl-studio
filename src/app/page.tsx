'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
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
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-white overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[120px] opacity-20 animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] opacity-20 animate-pulse-glow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      {/* ===== MUSICAL NOTES PARTICLE SYSTEM ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
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

      {/* ===== HERO SECTION ===== */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12">
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

        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Badge */}
          <Badge variant="premium" className="mb-6 text-sm py-2 px-4 shadow-[0_0_30px_rgba(124,58,237,0.4)]">
            <Sparkles className="w-4 h-4 mr-2" />
            FL Studio Master Hub
          </Badge>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            <span className="text-white">Professional</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400">
              FL Studio Production Guide
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-8">
            Comprehensive documentation for all 128 native FL Studio plugins, 12 professional signal chains,
            and 31 genre-specific templates to accelerate your workflow.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/hub"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 hover:from-purple-500 hover:via-purple-400 hover:to-blue-400 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(124,58,237,0.5)] flex items-center justify-center gap-3 overflow-hidden"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>View Plugin Database</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/hub#workflow-chains"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[var(--accent-primary)]/50 text-white font-semibold text-lg rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3"
            >
              <Zap className="w-5 h-5" />
              Browse Signal Chains
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>100% Native Plugins</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>128 Plugin Specs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Production-Ready</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="relative z-10 py-12 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-1">128</div>
              <div className="text-sm text-[var(--text-muted)]">Stock Plugins</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-1">12</div>
              <div className="text-sm text-[var(--text-muted)]">Signal Chains</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white mb-1">31</div>
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
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Production Resources</h2>
            <p className="text-[var(--text-muted)] max-w-xl mx-auto">
              Professional-grade reference materials for FL Studio&apos;s complete native plugin suite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Plugins */}
            <Link href="/hub#plugins" className="group relative p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-[1.02]">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-medium text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">Popular</span>
              </div>
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <Layers className="w-7 h-7 text-purple-400 animate-icon-layers" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Plugin Database</h3>
              <p className="text-[var(--text-muted)] mb-4">Deep-dive specifications for all 128 stock instruments and effects—parameter breakdowns, CPU benchmarks, and production techniques.</p>
              <div className="flex items-center text-purple-400 font-medium text-sm">
                <span>Explore plugins</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 2 - Workflows */}
            <Link href="/hub#workflow-chains" className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-blue-400 animate-icon-zap" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Signal Chains</h3>
              <p className="text-[var(--text-muted)] mb-4">12 studio-tested processing chains for vocals, drums, and mastering—with routing diagrams and parameter settings.</p>
              <div className="flex items-center text-blue-400 font-medium text-sm">
                <span>View chains</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 3 - Templates */}
            <Link href="/hub#templates" className="group relative p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-green-400 animate-icon-target" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Song Blueprints</h3>
              <p className="text-[var(--text-muted)] mb-4">31 genre-specific project templates with pre-routed mixer tracks, instrument selections, and tempo/key configurations.</p>
              <div className="flex items-center text-green-400 font-medium text-sm">
                <span>Get templates</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 4 - Learning */}
            <Link href="/hub#quick-start" className="group relative p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 hover:border-amber-500/40 transition-all hover:scale-[1.02]">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-medium text-amber-400 bg-amber-500/20 px-2 py-1 rounded-full">New</span>
              </div>
              <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-amber-400 animate-icon-book" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Quick Start Guides</h3>
              <p className="text-[var(--text-muted)] mb-4">Structured tutorials covering core DAW concepts—MIDI programming, mixer routing, automation, and arrangement workflow.</p>
              <div className="flex items-center text-amber-400 font-medium text-sm">
                <span>Start learning</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 5 - Mixing */}
            <Link href="/hub#mixing" className="group relative p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 hover:border-pink-500/40 transition-all hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-pink-400 animate-icon-trending" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">Mixing & Mastering</h3>
              <p className="text-[var(--text-muted)] mb-4">Studio-standard mixing workflows using exclusively native plugins—EQ curves, compression ratios, and stereo imaging techniques.</p>
              <div className="flex items-center text-pink-400 font-medium text-sm">
                <span>Learn mixing</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 6 - Shortcuts */}
            <Link href="/hub#dojo" className="group relative p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-cyan-400 animate-icon-clock" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Keyboard Mastery</h3>
              <p className="text-[var(--text-muted)] mb-4">Interactive training for 47+ essential keyboard shortcuts—pattern editor, playlist, mixer, and piano roll navigation.</p>
              <div className="flex items-center text-cyan-400 font-medium text-sm">
                <span>Train shortcuts</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="relative z-10 py-20 px-4 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
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
              <p className="text-[var(--text-muted)] text-sm">Browse 128 plugin specifications, 12 signal chains, and 31 production templates—all organized by category and use case.</p>
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
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-5xl mx-auto">
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
              <Link href={`/hub#plugins`} key={plugin.name} className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all">
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
      <section className="relative z-10 py-20 px-4 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
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
              href="/hub#plugins"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-purple-500/50 text-white font-semibold rounded-xl transition-all"
            >
              <span>Explore All Plugins</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-t from-purple-600/10 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
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
      <footer className="relative z-10 py-8 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
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
