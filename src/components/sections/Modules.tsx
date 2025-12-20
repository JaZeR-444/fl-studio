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
        <h2 className="text-3xl font-bold text-white mb-4">Core UI Modules <span className="text-gradient">(The Big 5)</span></h2>
        <p className="text-purple-primary-300">The essential windows you will spend 90% of your time in.</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 glass-card p-1 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`module-tab flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-purple-primary-700/40 text-purple-primary-200 shadow-purple-glow'
                : 'text-purple-primary-300 hover:text-purple-primary-100 hover:bg-purple-primary-700/20'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="content-card p-6 md:p-8">
        <div className="tab-content active animate-fade">
          <h3 className="text-2xl font-bold text-white mb-2">
            {moduleContent[activeTab as keyof typeof moduleContent].title}
          </h3>
          <p className="text-purple-primary-300 mb-4">
            {moduleContent[activeTab as keyof typeof moduleContent].desc}
          </p>
          <div className="space-y-2">
            {moduleContent[activeTab as keyof typeof moduleContent].features.map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <span className="text-purple-primary-500 mr-2">✓</span>
                <p className="text-purple-primary-200 text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};