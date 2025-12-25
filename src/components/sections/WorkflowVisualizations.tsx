'use client';

import { useState } from 'react';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Target, Music, Drum, SlidersHorizontal, Volume2, LucideIcon } from 'lucide-react';

// Register Chart.js components
ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler
);

export const WorkflowVisualizationsSection = () => {
  const [activeVisualization, setActiveVisualization] = useState('basic');

  // Common workflow visualizations
  const visualizations: { id: string; title: string; Icon: LucideIcon; description: string; color: string }[] = [
    { id: 'basic', title: 'Basic Workflow', Icon: Target, description: 'The fundamental FL Studio workflow from idea to export', color: '#8b5cf6' },
    { id: 'songwriting', title: 'Songwriting', Icon: Music, description: 'Workflow for writing complete songs', color: '#06b6d4' },
    { id: 'beatmaking', title: 'Beat Making', Icon: Drum, description: 'Step-by-step beat creation process', color: '#f97316' },
    { id: 'mixing', title: 'Mixing', Icon: SlidersHorizontal, description: 'Professional mixing approach', color: '#10b981' },
    { id: 'sounddesign', title: 'Sound Design', Icon: Volume2, description: 'Process for creating custom sounds', color: '#ec4899' }
  ];

  // Chart data for each workflow
  const workflowChartData: { [key: string]: { labels: string[]; color: string; data: number[] } } = {
    basic: { labels: ['Idea', 'Pattern', 'Arrange', 'Sound', 'Mix', 'Export'], color: '#8b5cf6', data: [10, 30, 50, 70, 90, 100] },
    songwriting: { labels: ['Concept', 'Chords', 'Melody', 'Structure', 'Refine', 'Produce'], color: '#06b6d4', data: [10, 25, 40, 60, 80, 100] },
    beatmaking: { labels: ['Tempo', 'Drums', 'Bass', 'Melody', 'Arrange', 'Final'], color: '#f97316', data: [10, 30, 50, 70, 90, 100] },
    mixing: { labels: ['Balance', 'EQ', 'Compress', 'Effects', 'Automate', 'Master'], color: '#10b981', data: [20, 40, 60, 80, 90, 100] },
    sounddesign: { labels: ['Idea', 'Plugin', 'Params', 'Layer', 'Process', 'Final'], color: '#ec4899', data: [10, 30, 50, 70, 90, 100] }
  };

  const currentWorkflow = workflowChartData[activeVisualization];
  const currentVis = visualizations.find(v => v.id === activeVisualization);

  const chartData = {
    labels: currentWorkflow.labels,
    datasets: [
      {
        label: 'Progress',
        data: currentWorkflow.data,
        borderColor: currentWorkflow.color,
        backgroundColor: `${currentWorkflow.color}20`,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: currentWorkflow.color,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: { color: 'rgba(139, 92, 246, 0.1)' },
        ticks: { color: '#a78bfa' }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#a78bfa' }
      }
    }
  };

  // Workflow steps for each type
  const workflowSteps: { [key: string]: { step: string; desc: string }[] } = {
    basic: [
      { step: 'Idea Generation', desc: 'Start with a musical concept or sound' },
      { step: 'Pattern Creation', desc: 'Create your foundational pattern in the Channel Rack' },
      { step: 'Arrangement', desc: 'Structure your song using the Playlist' }
    ],
    songwriting: [
      { step: 'Concept & Theme', desc: 'Define the mood, message, and structure' },
      { step: 'Chord Progression', desc: 'Establish the harmonic foundation' },
      { step: 'Melody Creation', desc: 'Develop the main vocal or instrumental melody' }
    ],
    beatmaking: [
      { step: 'Tempo & Key', desc: 'Choose the foundational parameters' },
      { step: 'Drum Programming', desc: 'Create your drum pattern and sounds' },
      { step: 'Bass Line', desc: 'Add the foundational bass element' }
    ],
    mixing: [
      { step: 'Gain Staging', desc: 'Set initial volume balance between tracks' },
      { step: 'EQ & Cleanup', desc: 'Remove unwanted frequencies and shape tone' },
      { step: 'Dynamics', desc: 'Apply compression and limiting as needed' }
    ],
    sounddesign: [
      { step: 'Concept', desc: 'Define the sound you want to create' },
      { step: 'Plugin Selection', desc: 'Choose the right synth or sampler' },
      { step: 'Parameter Tweaking', desc: 'Adjust parameters to achieve your sound' }
    ]
  };

  const currentSteps = workflowSteps[activeVisualization];

  return (
    <section id="workflow-visualizations" className="page-section animate-fade">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Workflow</span>
          <span className="text-white"> Visualizations</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          Interactive visualizations to help you understand different production workflows.
        </p>
      </div>

      {/* Workflow Type Selector */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {visualizations.map((vis) => (
            <button
              key={vis.id}
              onClick={() => setActiveVisualization(vis.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                activeVisualization === vis.id
                  ? 'text-white'
                  : 'bg-[var(--glass-bg)] text-[var(--text-muted)] hover:text-white hover:bg-[var(--glass-bg-hover)] border border-[var(--glass-border)]'
              }`}
              style={activeVisualization === vis.id ? { backgroundColor: vis.color } : {}}
            >
              <vis.Icon className="w-4 h-4" />
              <span>{vis.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chart Card */}
      <div className="content-card p-6 mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{currentVis?.title} Progress</h3>
            <p className="text-sm text-[var(--text-muted)]">{currentVis?.description}</p>
          </div>
          <span className="badge badge-purple">{currentVis && <currentVis.Icon className="w-4 h-4" />}</span>
        </div>
        
        <div className="h-64">
          <Line data={chartData} options={chartOptions} />
        </div>

        {/* Steps Breakdown */}
        <div className="mt-6 pt-6 border-t border-[var(--glass-border)]">
          <h4 className="font-bold text-white mb-4">Key Steps</h4>
          <div className="space-y-3">
            {currentSteps.map((item, index) => (
              <div key={index} className="flex items-start">
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white font-bold text-sm"
                  style={{ backgroundColor: currentWorkflow.color }}
                >
                  {index + 1}
                </div>
                <div>
                  <h5 className="font-bold text-white">{item.step}</h5>
                  <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Timeline */}
      <div className="content-card p-6">
        <h3 className="text-xl font-bold text-white mb-6">Interactive Workflow Timeline</h3>
        
        {/* Horizontal Timeline */}
        <div className="relative mb-8">
          <div className="flex justify-between relative">
            <div className="absolute top-5 left-0 right-0 h-1 bg-[var(--glass-border)]"></div>
            <div 
              className="absolute top-5 left-0 h-1 transition-all duration-500"
              style={{ 
                width: '100%', 
                background: `linear-gradient(90deg, ${currentWorkflow.color}, transparent)`,
                opacity: 0.5
              }}
            ></div>
            {[
              { num: 1, title: 'Idea', sub: 'Concept' },
              { num: 2, title: 'Creation', sub: 'Pattern/Track' },
              { num: 3, title: 'Arrangement', sub: 'Structure' },
              { num: 4, title: 'Polish', sub: 'Mix/Effects' },
              { num: 5, title: 'Export', sub: 'Delivery' }
            ].map((step, idx) => (
              <div key={idx} className="flex-1 text-center relative z-10">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2"
                  style={{ backgroundColor: currentWorkflow.color }}
                >
                  {step.num}
                </div>
                <h4 className="font-bold text-white text-sm">{step.title}</h4>
                <p className="text-xs text-[var(--text-dim)]">{step.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Module Cards */}
        <div className="grid grid-cols-5 gap-4">
          {[
            { title: 'Browser', desc: 'Samples, Plugins' },
            { title: 'Channel Rack', desc: 'Step Sequencer' },
            { title: 'Playlist', desc: 'Arrangement' },
            { title: 'Mixer', desc: 'Processing' },
            { title: 'Export', desc: 'Render' }
          ].map((module, idx) => (
            <div key={idx} className="glass-card p-4 text-center">
              <h4 className="font-bold text-white mb-1 text-sm">{module.title}</h4>
              <p className="text-xs text-[var(--text-dim)]">{module.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-[var(--text-muted)] text-sm">
            Each stage flows into the next, creating a seamless production workflow.
          </p>
        </div>
      </div>
    </section>
  );
};