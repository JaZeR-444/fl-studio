'use client';

import { useState } from 'react';
import { FLModule } from '@/types';
import { 
  Layout, 
  Music4, 
  AudioWaveform, 
  SlidersHorizontal, 
  Piano, 
  Maximize2,
  ListVideo,
  Library,
  Lightbulb,
  CheckCircle
} from 'lucide-react';

export const ModulesSection = () => {
  const [activeTab, setActiveTab] = useState('browser');

  // Module data
  const moduleContent = {
    browser: {
      id: 'browser',
      title: "The Browser",
      desc: "Your central library for samples, plugins, and project files. The fastest way to find content.",
      icon: Library,
      color: "from-orange-500 to-amber-500",
      features: [
        { label: "Smart Search", desc: "Press <Ctrl+F> to instantly find any file" },
        { label: "Tags & Favorites", desc: "Star your most used folders" },
        { label: "Preview", desc: "Auto-play samples on click" }
      ]
    },
    channelrack: {
      id: 'channelrack',
      title: "Channel Rack",
      desc: "The heart of beat creation. Step sequencer, generator stacking, and pattern management.",
      icon: Layout,
      color: "from-blue-500 to-cyan-500",
      features: [
        { label: "Step Sequencer", desc: "Classic x0x style beat programming" },
        { label: "Graph Editor", desc: "Per-step velocity, pitch, and pan" },
        { label: "Swing", desc: "Add groove with the swing slider" }
      ]
    },
    pianoroll: {
      id: 'pianoroll',
      title: "Piano Roll",
      desc: "The most powerful MIDI editor in the industry. Compose complex melodies and chords.",
      icon: Piano,
      color: "from-green-500 to-emerald-500",
      features: [
        { label: "Ghost Channels", desc: "See notes from other patterns" },
        { label: "Slide Notes", desc: "Unique native FL glide capability" },
        { label: "Riff Machine", desc: "Auto-generate melodies" }
      ]
    },
    playlist: {
      id: 'playlist',
      title: "The Playlist",
      desc: "Where the song comes together. Arrange patterns, audio clips, and automation.",
      icon: ListVideo,
      color: "from-purple-500 to-pink-500",
      features: [
        { label: "Flexible Tracks", desc: "Place any clip on any track" },
        { label: "Performance Mode", desc: "Trigger clips live" },
        { label: "Consolidation", desc: "Freeze tracks to save CPU" }
      ]
    },
    mixer: {
      id: 'mixer',
      title: "The Mixer",
      desc: "Professional mixing environment with advanced routing and effects chaining.",
      icon: SlidersHorizontal,
      color: "from-red-500 to-rose-500",
      features: [
        { label: "Routing Cables", desc: "Visual sidechain and bus routing" },
        { label: "10 FX Slots", desc: "Per-track processing chain" },
        { label: "PDC", desc: "Automatic plugin delay compensation" }
      ]
    }
  };

  const tabs = [
    { id: 'browser', label: 'Browser', icon: Library },
    { id: 'channelrack', label: 'Channel Rack', icon: Layout },
    { id: 'pianoroll', label: 'Piano Roll', icon: Piano },
    { id: 'playlist', label: 'Playlist', icon: ListVideo },
    { id: 'mixer', label: 'Mixer', icon: SlidersHorizontal },
  ];

  const activeModule = moduleContent[activeTab as keyof typeof moduleContent];
  const ActiveIcon = activeModule.icon;

  return (
    <section id="modules" className="page-section animate-fade">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Core UI</span>
          <span className="text-white"> Modules</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          Master "The Big 5" windows to unlock 90% of FL Studio's power.
        </p>
      </div>

      {/* Hero Card */}
      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-indigo-900/40 to-violet-900/40 border border-indigo-500/20 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
              <Maximize2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">The Big 5 Ecosystem</h3>
            <p className="text-indigo-200/80 mb-3">
              FL Studio's modular design lets you detach and arrange these five key windows across multiple monitors for a tailored workspace.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-xs">F5</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-xs">F6</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-xs">F7</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-xs">F8</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-xs">F9</span>
              <span className="ml-2 text-indigo-200/60">Shortcuts to toggle windows</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-2">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                  isActive
                    ? 'bg-[var(--accent-primary)] text-white shadow-lg shadow-purple-900/20'
                    : 'bg-[var(--glass-bg)] text-[var(--text-muted)] hover:bg-[var(--glass-bg-hover)] hover:text-white border border-[var(--glass-border)]'
                }`}
              >
                <TabIcon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[var(--text-dim)]'}`} />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9">
          <div className="content-card h-full p-6 md:p-8 animate-fade">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${activeModule.color}`}>
                  <ActiveIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeModule.title}</h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-white/50 to-transparent mt-2 rounded-full" />
                </div>
              </div>
            </div>

            <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
              {activeModule.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeModule.features.map((feature, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-2 mb-2 text-white font-bold">
                    <CheckCircle className="w-4 h-4 text-[var(--accent-tertiary)]" />
                    {feature.label}
                  </div>
                  <p className="text-sm text-[var(--text-muted)]">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--glass-border)] flex items-center gap-2 text-sm text-[var(--text-dim)]">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              <span>Pro Tip: Double-click right mouse button on the background to open the Plugin Picker.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};