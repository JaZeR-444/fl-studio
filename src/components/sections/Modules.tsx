import { useState } from 'react';
import { FLModule } from '@/types';

export const ModulesSection = () => {
  const [activeTab, setActiveTab] = useState('browser');

  // Module data
  const moduleContent: Record<string, FLModule> = {
    browser: {
      id: 'browser',
      title: "The Browser",
      desc: "Central library.",
      features: ["Plugin Database", "Search (F3)", "Tags"]
    },
    channelrack: {
      id: 'channelrack',
      title: "Channel Rack",
      desc: "Step Sequencer.",
      features: ["Layering", "Graph Editor", "Swing"]
    },
    pianoroll: {
      id: 'pianoroll',
      title: "Piano Roll",
      desc: "MIDI Editing.",
      features: ["Slide Notes", "Ghost Channels", "Tools (Strum/Chop)"]
    },
    playlist: {
      id: 'playlist',
      title: "The Playlist",
      desc: "Arrangement.",
      features: ["Performance Mode", "Audio Tracks", "Consolidate"]
    },
    mixer: {
      id: 'mixer',
      title: "The Mixer",
      desc: "Processing.",
      features: ["Slots", "PDC", "Routing Cables"]
    }
  };

  const tabs = [
    { id: 'browser', label: 'Browser' },
    { id: 'channelrack', label: 'Channel Rack' },
    { id: 'pianoroll', label: 'Piano Roll' },
    { id: 'playlist', label: 'Playlist' },
    { id: 'mixer', label: 'Mixer' },
  ];

  return (
    <section id="modules" className="page-section">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-4">Core UI Modules (The Big 5)</h2>
        <p className="text-stone-600 dark:text-zinc-400">The essential windows you will spend 90% of your time in.</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-stone-200 dark:bg-zinc-800 p-1 rounded-lg mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`module-tab flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-white dark:bg-zinc-700 text-stone-900 dark:text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6 md:p-8">
        <div className="tab-content active animate-fade">
          <h3 className="text-2xl font-bold text-stone-800 dark:text-white mb-2">
            {moduleContent[activeTab as keyof typeof moduleContent].title}
          </h3>
          <p className="text-stone-600 dark:text-zinc-400 mb-4">
            {moduleContent[activeTab as keyof typeof moduleContent].desc}
          </p>
          <div className="space-y-2">
            {moduleContent[activeTab as keyof typeof moduleContent].features.map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <span className="text-orange-500 mr-2">✓</span>
                <p className="text-stone-700 dark:text-zinc-300 text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};