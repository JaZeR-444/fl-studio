import { useState, useEffect, useRef } from 'react';
import { Plugin } from '@/types';

export const PluginsSection = () => {
  const [activeTab, setActiveTab] = useState('plugins');
  const chartRef = useRef<HTMLCanvasElement>(null);

  // Plugin data
  const plugins: Plugin[] = [
    {
      name: 'Sytrus',
      type: 'FM / Subtractive',
      description: 'The modulation monster. Use for growls and pads.',
      ratings: {
        soundDesign: 10,
        ease: 3,
        cpu: 8,
        organic: 4,
        bass: 7
      }
    },
    {
      name: 'FLEX',
      type: 'Rompler',
      description: 'Instant gratification. Best for "bread and butter" sounds.',
      ratings: {
        soundDesign: 7,
        ease: 9,
        cpu: 5,
        organic: 6,
        bass: 5
      }
    },
    {
      name: 'GMS',
      type: 'Granular',
      description: 'Unique granular synthesis for atmospheric textures.',
      ratings: {
        soundDesign: 8,
        ease: 6,
        cpu: 7,
        organic: 9,
        bass: 4
      }
    }
  ];

  // Initialize chart when component mounts
  useEffect(() => {
    const canvas = chartRef.current;
    if (!canvas) return;

    // Check if Chart.js is available
    // @ts-ignore - Chart is loaded via CDN in _document.tsx
    if (typeof Chart === 'undefined') {
      console.warn('Chart.js not available');
      return;
    }

    // @ts-ignore - Chart is loaded via CDN in _document.tsx
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // @ts-ignore - Chart is loaded via CDN in _document.tsx
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Sound Design', 'Ease', 'CPU', 'Organic', 'Bass'],
        datasets: [
          {
            label: 'Sytrus',
            data: [10, 3, 8, 4, 7],
            borderColor: '#f97316',
            backgroundColor: 'rgba(249, 115, 22, 0.2)',
            pointBackgroundColor: '#f97316',
            pointBorderColor: '#ffffff',
            pointHoverBackgroundColor: '#ffffff',
            pointHoverBorderColor: '#f97316'
          },
          {
            label: 'FLEX',
            data: [7, 9, 5, 6, 5],
            borderColor: '#0ea5e9',
            backgroundColor: 'rgba(14, 165, 233, 0.2)',
            pointBackgroundColor: '#0ea5e9',
            pointBorderColor: '#ffffff',
            pointHoverBackgroundColor: '#ffffff',
            pointHoverBorderColor: '#0ea5e9'
          },
          {
            label: 'GMS',
            data: [8, 6, 7, 9, 4],
            borderColor: '#8b5cf6',
            backgroundColor: 'rgba(139, 92, 246, 0.2)',
            pointBackgroundColor: '#8b5cf6',
            pointBorderColor: '#ffffff',
            pointHoverBackgroundColor: '#ffffff',
            pointHoverBorderColor: '#8b5cf6'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            grid: {
              color: () => {
                return document.documentElement.classList.contains('dark') ? '#52525b' : '#e5e7eb';
              }
            },
            pointLabels: {
              color: () => {
                return document.documentElement.classList.contains('dark') ? '#d4d4d4' : '#52525b';
              }
            },
            ticks: {
              display: false
            },
            suggestedMin: 0,
            suggestedMax: 10
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: () => {
                return document.documentElement.classList.contains('dark') ? '#d4d4d4' : '#52525b';
              },
              font: {
                size: 12
              }
            }
          },
          tooltip: {
            titleColor: () => {
              return document.documentElement.classList.contains('dark') ? '#d4d4d4' : '#52525b';
            },
            bodyColor: () => {
              return document.documentElement.classList.contains('dark') ? '#d4d4d4' : '#52525b';
            },
            backgroundColor: () => {
              return document.documentElement.classList.contains('dark') ? 'rgba(39, 39, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)';
            }
          }
        }
      }
    });

    // Cleanup function to destroy chart when component unmounts
    return () => {
      // @ts-ignore - Chart is loaded via CDN in _document.tsx
      if (Chart.getChart(canvas)) {
        // @ts-ignore - Chart is loaded via CDN in _document.tsx
        Chart.getChart(canvas)?.destroy();
      }
    };
  }, []);

  return (
    <section id="plugins" className="page-section">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-4">Instruments & Sound Design</h2>
        <p className="text-stone-600 dark:text-zinc-400">FL Studio comes with powerful stock plugins.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Plugin Radar Chart */}
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-stone-200 dark:border-zinc-700">
          <h3 className="text-sm font-bold text-stone-400 dark:text-zinc-500 uppercase mb-4 text-center">Stock Synth Comparison</h3>
          <div className="chart-container">
            <canvas id="pluginChart" ref={chartRef}></canvas>
          </div>
        </div>

        {/* Plugin Decision List */}
        <div className="space-y-4">
          {plugins.map((plugin, index) => (
            <div key={index} className="bg-white dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 rounded-lg p-4">
              <h4 className="font-bold text-orange-600">{plugin.name}</h4>
              <p className="text-xs text-stone-500 dark:text-zinc-400 mb-2">{plugin.type}</p>
              <p className="text-sm text-stone-700 dark:text-zinc-300">{plugin.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Plugin Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-stone-200 dark:border-zinc-700">
          <h3 className="font-bold text-stone-800 dark:text-white mb-2">Sytrus</h3>
          <p className="text-sm text-stone-600 dark:text-zinc-400 mb-4">FM synthesis powerhouse with 6 operators</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-xs text-stone-500 dark:text-zinc-400">Sound Design</span>
              <span className="text-xs font-bold text-orange-600">10/10</span>
            </div>
            <div className="w-full bg-stone-200 dark:bg-zinc-700 rounded-full h-1.5">
              <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between">
              <span className="text-xs text-stone-500 dark:text-zinc-400">Ease of Use</span>
              <span className="text-xs font-bold text-orange-600">3/10</span>
            </div>
            <div className="w-full bg-stone-200 dark:bg-zinc-700 rounded-full h-1.5">
              <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-stone-200 dark:border-zinc-700">
          <h3 className="font-bold text-stone-800 dark:text-white mb-2">FLEX</h3>
          <p className="text-sm text-stone-600 dark:text-zinc-400 mb-4">Sample-based rompler with curated content</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-xs text-stone-500 dark:text-zinc-400">Sound Design</span>
              <span className="text-xs font-bold text-orange-600">7/10</span>
            </div>
            <div className="w-full bg-stone-200 dark:bg-zinc-700 rounded-full h-1.5">
              <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between">
              <span className="text-xs text-stone-500 dark:text-zinc-400">Ease of Use</span>
              <span className="text-xs font-bold text-orange-600">9/10</span>
            </div>
            <div className="w-full bg-stone-200 dark:bg-zinc-700 rounded-full h-1.5">
              <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-stone-200 dark:border-zinc-700">
          <h3 className="font-bold text-stone-800 dark:text-white mb-2">GMS</h3>
          <p className="text-sm text-stone-600 dark:text-zinc-400 mb-4">Granular synthesis for atmospheric textures</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-xs text-stone-500 dark:text-zinc-400">Sound Design</span>
              <span className="text-xs font-bold text-orange-600">8/10</span>
            </div>
            <div className="w-full bg-stone-200 dark:bg-zinc-700 rounded-full h-1.5">
              <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="space-y-2 mt-2">
            <div className="flex justify-between">
              <span className="text-xs text-stone-500 dark:text-zinc-400">Organic</span>
              <span className="text-xs font-bold text-orange-600">9/10</span>
            </div>
            <div className="w-full bg-stone-200 dark:bg-zinc-700 rounded-full h-1.5">
              <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};