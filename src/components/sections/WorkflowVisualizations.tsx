// components/sections/WorkflowVisualizations.tsx
import { useState } from 'react';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

export const WorkflowVisualizationsSection = () => {
  const [activeVisualization, setActiveVisualization] = useState('basic');

  // Common workflow visualizations
  const visualizations = [
    { id: 'basic', title: 'Basic Workflow', description: 'The fundamental FL Studio workflow from idea to export' },
    { id: 'songwriting', title: 'Songwriting Flow', description: 'Workflow for writing complete songs in FL Studio' },
    { id: 'beatmaking', title: 'Beat Making Process', description: 'Step-by-step beat creation process' },
    { id: 'mixing', title: 'Mixing Workflow', description: 'Professional mixing approach in FL Studio' },
    { id: 'sounddesign', title: 'Sound Design Flow', description: 'Process for creating custom sounds' }
  ];

  // Data for the basic workflow chart
  const basicWorkflowData = {
    labels: ['Idea', 'Basic Pattern', 'Arrangement', 'Sound Design', 'Mixing', 'Export'],
    datasets: [
      {
        label: 'Progress',
        data: [10, 30, 50, 70, 90, 100],
        borderColor: '#f97316',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  // Data for the songwriting workflow chart
  const songwritingWorkflowData = {
    labels: ['Concept', 'Chord Progression', 'Melody', 'Structure', 'Refinement', 'Production'],
    datasets: [
      {
        label: 'Progress',
        data: [10, 25, 40, 60, 80, 100],
        borderColor: '#0ea5e9',
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  // Data for the beatmaking workflow chart
  const beatmakingWorkflowData = {
    labels: ['Tempo/Key', 'Drums', 'Bass', 'Melody', 'Arrangement', 'Final'],
    datasets: [
      {
        label: 'Progress',
        data: [10, 30, 50, 70, 90, 100],
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  // Data for the mixing workflow chart
  const mixingWorkflowData = {
    labels: ['Balance', 'EQ', 'Compression', 'Effects', 'Automation', 'Final Mix'],
    datasets: [
      {
        label: 'Progress',
        data: [20, 40, 60, 80, 90, 100],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  // Data for the sound design workflow chart
  const sounddesignWorkflowData = {
    labels: ['Idea', 'Plugin Selection', 'Parameter Adjustment', 'Layering', 'Processing', 'Final Sound'],
    datasets: [
      {
        label: 'Progress',
        data: [10, 30, 50, 70, 90, 100],
        borderColor: '#f43f5e',
        backgroundColor: 'rgba(244, 63, 94, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  // Get the data for the active visualization
  const getChartData = () => {
    switch (activeVisualization) {
      case 'basic':
        return basicWorkflowData;
      case 'songwriting':
        return songwritingWorkflowData;
      case 'beatmaking':
        return beatmakingWorkflowData;
      case 'mixing':
        return mixingWorkflowData;
      case 'sounddesign':
        return sounddesignWorkflowData;
      default:
        return basicWorkflowData;
    }
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: visualizations.find(v => v.id === activeVisualization)?.title || 'Workflow Visualization',
        color: '#1e293b', // text-stone-800
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: () => {
            return document.documentElement.classList.contains('dark') ? '#52525b' : '#e5e7eb';
          }
        },
        ticks: {
          color: () => {
            return document.documentElement.classList.contains('dark') ? '#d4d4d4' : '#52525b';
          }
        }
      },
      x: {
        grid: { display: false },
        ticks: {
          color: () => {
            return document.documentElement.classList.contains('dark') ? '#d4d4d4' : '#52525b';
          }
        }
      }
    }
  };

  return (
    <section id="workflow-visualizations" className="page-section">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-6">Workflow Visualizations</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-4">Visualization Types</h3>
          <div className="flex flex-wrap gap-3">
            {visualizations.map((vis) => (
              <button
                key={vis.id}
                onClick={() => setActiveVisualization(vis.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeVisualization === vis.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-stone-200 dark:bg-zinc-700 text-stone-700 dark:text-zinc-300 hover:bg-stone-300 dark:hover:bg-zinc-600'
                }`}
              >
                {vis.title}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6 mb-8">
          <div className="h-80">
            <Line data={getChartData()} options={chartOptions} />
          </div>
          
          <div className="mt-6">
            <h4 className="font-bold text-stone-800 dark:text-white mb-2">
              {visualizations.find(v => v.id === activeVisualization)?.title}
            </h4>
            <p className="text-stone-600 dark:text-zinc-400 mb-4">
              {visualizations.find(v => v.id === activeVisualization)?.description}
            </p>
            
            {activeVisualization === 'basic' && (
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-3">
                    <span className="text-orange-600 dark:text-orange-400 font-bold">1</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-800 dark:text-white">Idea Generation</h5>
                    <p className="text-stone-600 dark:text-zinc-400 text-sm">Start with a musical concept or sound</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-3">
                    <span className="text-orange-600 dark:text-orange-400 font-bold">2</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-800 dark:text-white">Basic Pattern Creation</h5>
                    <p className="text-stone-600 dark:text-zinc-400 text-sm">Create your foundational pattern in the Channel Rack</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-3">
                    <span className="text-orange-600 dark:text-orange-400 font-bold">3</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-800 dark:text-white">Arrangement in Playlist</h5>
                    <p className="text-stone-600 dark:text-zinc-400 text-sm">Structure your song using the Playlist</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeVisualization === 'songwriting' && (
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mr-3">
                    <span className="text-sky-600 dark:text-sky-400 font-bold">1</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-800 dark:text-white">Concept & Theme</h5>
                    <p className="text-stone-600 dark:text-zinc-400 text-sm">Define the mood, message, and structure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mr-3">
                    <span className="text-sky-600 dark:text-sky-400 font-bold">2</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-800 dark:text-white">Chord Progression</h5>
                    <p className="text-stone-600 dark:text-zinc-400 text-sm">Establish the harmonic foundation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mr-3">
                    <span className="text-sky-600 dark:text-sky-400 font-bold">3</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-800 dark:text-white">Melody Creation</h5>
                    <p className="text-stone-600 dark:text-zinc-400 text-sm">Develop the main vocal or instrumental melody</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeVisualization === 'beatmaking' && (
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mr-3">
                    <span className="text-violet-600 dark:text-violet-400 font-bold">1</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-800 dark:text-white">Tempo & Key Selection</h5>
                    <p className="text-stone-600 dark:text-zinc-400 text-sm">Choose the foundational parameters</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mr-3">
                    <span className="text-violet-600 dark:text-violet-400 font-bold">2</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-800 dark:text-white">Drum Programming</h5>
                    <p className="text-stone-600 dark:text-zinc-400 text-sm">Create your drum pattern and sounds</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mr-3">
                    <span className="text-violet-600 dark:text-violet-400 font-bold">3</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-800 dark:text-white">Bass Line</h5>
                    <p className="text-stone-600 dark:text-zinc-400 text-sm">Add the foundational bass element</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Interactive Workflow Diagram */}
        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6">
          <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-4">Interactive Workflow Diagram</h3>
          
          <div className="relative">
            {/* Horizontal timeline */}
            <div className="flex justify-between mb-8 relative">
              <div className="absolute top-5 left-0 right-0 h-1 bg-stone-200 dark:bg-zinc-700"></div>
              <div className="flex-1 text-center relative">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mx-auto mb-2 relative z-10">
                  1
                </div>
                <h4 className="font-bold text-stone-800 dark:text-white">Idea</h4>
                <p className="text-xs text-stone-500 dark:text-zinc-400 mt-1">Concept</p>
              </div>
              <div className="flex-1 text-center relative">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mx-auto mb-2 relative z-10">
                  2
                </div>
                <h4 className="font-bold text-stone-800 dark:text-white">Creation</h4>
                <p className="text-xs text-stone-500 dark:text-zinc-400 mt-1">Pattern/Track</p>
              </div>
              <div className="flex-1 text-center relative">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mx-auto mb-2 relative z-10">
                  3
                </div>
                <h4 className="font-bold text-stone-800 dark:text-white">Arrangement</h4>
                <p className="text-xs text-stone-500 dark:text-zinc-400 mt-1">Structure</p>
              </div>
              <div className="flex-1 text-center relative">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mx-auto mb-2 relative z-10">
                  4
                </div>
                <h4 className="font-bold text-stone-800 dark:text-white">Polish</h4>
                <p className="text-xs text-stone-500 dark:text-zinc-400 mt-1">Mix/Effects</p>
              </div>
              <div className="flex-1 text-center relative">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mx-auto mb-2 relative z-10">
                  5
                </div>
                <h4 className="font-bold text-stone-800 dark:text-white">Export</h4>
                <p className="text-xs text-stone-500 dark:text-zinc-400 mt-1">Delivery</p>
              </div>
            </div>

            {/* Module connections */}
            <div className="grid grid-cols-5 gap-4 mt-8">
              <div className="bg-stone-100 dark:bg-zinc-700 p-4 rounded-lg border-2 border-stone-200 dark:border-zinc-600">
                <h4 className="font-bold text-stone-800 dark:text-white mb-2">Browser</h4>
                <p className="text-sm text-stone-600 dark:text-zinc-400">Samples, Plugins</p>
              </div>
              <div className="bg-stone-100 dark:bg-zinc-700 p-4 rounded-lg border-2 border-stone-200 dark:border-zinc-600">
                <h4 className="font-bold text-stone-800 dark:text-white mb-2">Channel Rack</h4>
                <p className="text-sm text-stone-600 dark:text-zinc-400">Step Sequencer</p>
              </div>
              <div className="bg-stone-100 dark:bg-zinc-700 p-4 rounded-lg border-2 border-stone-200 dark:border-zinc-600">
                <h4 className="font-bold text-stone-800 dark:text-white mb-2">Playlist</h4>
                <p className="text-sm text-stone-600 dark:text-zinc-400">Arrangement</p>
              </div>
              <div className="bg-stone-100 dark:bg-zinc-700 p-4 rounded-lg border-2 border-stone-200 dark:border-zinc-600">
                <h4 className="font-bold text-stone-800 dark:text-white mb-2">Mixer</h4>
                <p className="text-sm text-stone-600 dark:text-zinc-400">Processing</p>
              </div>
              <div className="bg-stone-100 dark:bg-zinc-700 p-4 rounded-lg border-2 border-stone-200 dark:border-zinc-600">
                <h4 className="font-bold text-stone-800 dark:text-white mb-2">Export</h4>
                <p className="text-sm text-stone-600 dark:text-zinc-400">Render</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-stone-600 dark:text-zinc-400">
                Click on any step in the workflow to learn more about that stage of the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};