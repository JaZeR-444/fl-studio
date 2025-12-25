'use client';

import { useState } from 'react';
import { 
  Rocket, 
  PlayCircle, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Music,
  Mic,
  SlidersHorizontal,
  Layers,
  Sparkles
} from 'lucide-react';

// Quick Start Guide data
const quickStartGuides = [
  {
    id: 'first-beat',
    title: 'Create Your First Beat',
    description: 'Learn the fundamentals of beat-making in FL Studio with step-by-step guidance.',
    duration: '15 min',
    difficulty: 'Beginner',
    icon: Music,
    steps: [
      'Open a new project and set your tempo',
      'Add a drum pattern using Channel Rack',
      'Create a simple bass line with 3xOsc',
      'Arrange your patterns in the Playlist',
      'Export your first track'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'first-recording',
    title: 'Record Your First Vocal',
    description: 'Set up audio recording, apply processing, and mix vocals like a pro.',
    duration: '20 min',
    difficulty: 'Beginner',
    icon: Mic,
    steps: [
      'Configure audio settings and input',
      'Set up a mixer track for recording',
      'Record your vocal take',
      'Apply basic EQ and compression',
      'Add reverb and delay effects'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'mixing-basics',
    title: 'Mixing Fundamentals',
    description: 'Master the essential mixing techniques to make your tracks sound professional.',
    duration: '30 min',
    difficulty: 'Intermediate',
    icon: SlidersHorizontal,
    steps: [
      'Organize your mixer channels',
      'Set proper gain staging',
      'Apply EQ to create space',
      'Use compression for punch',
      'Create depth with panning and reverb'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'automation',
    title: 'Automation Mastery',
    description: 'Bring your productions to life with dynamic automation curves.',
    duration: '25 min',
    difficulty: 'Intermediate',
    icon: Layers,
    steps: [
      'Understand automation clips',
      'Automate volume and pan',
      'Create filter sweeps',
      'Automate plugin parameters',
      'Use LFO for rhythmic movement'
    ],
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'sound-design',
    title: 'Sound Design Basics',
    description: 'Create unique sounds from scratch using FL Studio\'s powerful synthesizers.',
    duration: '40 min',
    difficulty: 'Advanced',
    icon: Sparkles,
    steps: [
      'Understand oscillator waveforms',
      'Shape sounds with filters',
      'Add movement with envelopes',
      'Create texture with modulation',
      'Layer for rich, complex sounds'
    ],
    color: 'from-violet-500 to-purple-500'
  }
];

export const QuickStartGuidesSection = () => {
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Record<string, number[]>>({});

  const toggleStepComplete = (guideId: string, stepIndex: number) => {
    setCompletedSteps(prev => {
      const guideSteps = prev[guideId] || [];
      if (guideSteps.includes(stepIndex)) {
        return { ...prev, [guideId]: guideSteps.filter(i => i !== stepIndex) };
      }
      return { ...prev, [guideId]: [...guideSteps, stepIndex] };
    });
  };

  const getProgress = (guideId: string, totalSteps: number) => {
    const completed = completedSteps[guideId]?.length || 0;
    return Math.round((completed / totalSteps) * 100);
  };

  return (
    <section className="space-y-8">
      


      {/* Hero Card */}
      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/20 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Rocket className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">Fast Track Your Production</h3>
            <p className="text-blue-200/80 mb-3">
              Don't get overwhelmed. These curated guides will take you from "No Sound" to "Finished Track" in under an hour.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">3</span>
                <span className="text-blue-200/60">Core Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">1hr</span>
                <span className="text-blue-200/60">Total Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guide Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickStartGuides.map((guide) => {
          const Icon = guide.icon;
          const progress = getProgress(guide.id, guide.steps.length);
          const isSelected = selectedGuide === guide.id;

          return (
            <div
              key={guide.id}
              onClick={() => setSelectedGuide(isSelected ? null : guide.id)}
              className={`card-base p-6 cursor-pointer transition-all duration-300 ${
                isSelected ? 'ring-2 ring-[var(--accent-primary)] scale-[1.02]' : 'hover:scale-[1.01]'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${guide.color} bg-opacity-20`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg">{guide.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-[var(--text-muted)]">
                      {guide.duration}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {guide.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[var(--text-muted)] mb-4">
                {guide.description}
              </p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[var(--text-muted)]">Progress</span>
                  <span className="text-[var(--accent-primary)]">{progress}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${guide.color} transition-all duration-500`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Expanded Steps */}
              {isSelected && (
                <div className="space-y-2 pt-4 border-t border-white/10">
                  {guide.steps.map((step, index) => {
                    const isCompleted = completedSteps[guide.id]?.includes(index);
                    return (
                      <div
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleStepComplete(guide.id, index);
                        }}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                          isCompleted 
                            ? 'bg-green-500/10 border border-green-500/30' 
                            : 'bg-white/5 border border-transparent hover:border-white/10'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          isCompleted ? 'bg-green-500' : 'bg-white/10'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          ) : (
                            <span className="text-xs text-[var(--text-muted)]">{index + 1}</span>
                          )}
                        </div>
                        <span className={`text-sm ${isCompleted ? 'text-green-400 line-through' : 'text-white'}`}>
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Start Button */}
              {!isSelected && (
                <button className="w-full btn-glass flex items-center justify-center gap-2 text-sm py-2 mt-2">
                  <PlayCircle className="w-4 h-4" />
                  Start Guide
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Links */}
      <div className="card-base p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Official Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a 
            href="https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
          >
            <Download className="w-5 h-5 text-[var(--accent-primary)]" />
            <div className="flex-1">
              <span className="text-white font-medium">Online Manual</span>
              <p className="text-xs text-[var(--text-muted)]">Complete FL Studio documentation</p>
            </div>
            <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-white transition-colors" />
          </a>
          <a 
            href="https://www.youtube.com/imageline"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
          >
            <PlayCircle className="w-5 h-5 text-red-500" />
            <div className="flex-1">
              <span className="text-white font-medium">Video Tutorials</span>
              <p className="text-xs text-[var(--text-muted)]">Official Image-Line YouTube</p>
            </div>
            <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-white transition-colors" />
          </a>
          <a 
            href="https://forum.image-line.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
          >
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <div className="flex-1">
              <span className="text-white font-medium">Community Forum</span>
              <p className="text-xs text-[var(--text-muted)]">Get help from the community</p>
            </div>
            <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};
