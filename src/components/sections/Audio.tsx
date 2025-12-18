import { useState, useEffect, useRef } from 'react';

export const AudioSection = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const chartRef = useRef<HTMLCanvasElement>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

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
      type: 'line',
      data: {
        labels: ['64', '128', '256', '512', '1024'],
        datasets: [{
          label: 'Latency (ms)',
          data: [2, 4, 8, 15, 30],
          borderColor: '#ef4444',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
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
        },
        plugins: {
          legend: {
            labels: {
              color: () => {
                return document.documentElement.classList.contains('dark') ? '#d4d4d4' : '#52525b';
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
    <section id="audio" className="page-section">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-4">Audio Workflow & Recording</h2>
        <p className="text-stone-600 dark:text-zinc-400 mb-6">Managing latency, buffers, and recording paths is critical for stability.</p>

        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-stone-200 dark:border-zinc-700 mb-8">
          <h3 className="text-sm font-bold text-stone-400 dark:text-zinc-500 uppercase mb-4">Buffer Size vs. Latency vs. CPU Load</h3>
          <div className="chart-container">
            <canvas id="latencyChart" ref={chartRef}></canvas>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border border-stone-200 dark:border-zinc-700 rounded-lg overflow-hidden">
            <button
              className="w-full text-left p-4 bg-stone-50 dark:bg-zinc-700/50 font-bold flex justify-between items-center text-stone-800 dark:text-zinc-200"
              onClick={() => toggleAccordion('recording-logic')}
            >
              <span>Recording Logic: Edison vs. Playlist</span>
              <span className={`text-stone-400 text-xl transition-transform ${openAccordion === 'recording-logic' ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div className={`accordion-content overflow-hidden transition-all duration-300 ${openAccordion === 'recording-logic' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-4 bg-white dark:bg-zinc-800 text-sm text-stone-600 dark:text-zinc-400 space-y-3">
                <p><strong>Edison:</strong> Best for sampling and destructive processing. Runs as an effect.</p>
                <p><strong>Playlist:</strong> Best for tracking vocals/instruments. Requires arming mixer track.</p>
              </div>
            </div>
          </div>

          <div className="border border-stone-200 dark:border-zinc-700 rounded-lg overflow-hidden">
            <button
              className="w-full text-left p-4 bg-stone-50 dark:bg-zinc-700/50 font-bold flex justify-between items-center text-stone-800 dark:text-zinc-200"
              onClick={() => toggleAccordion('input-modes')}
            >
              <span>Input Modes: Hardware vs. Software</span>
              <span className={`text-stone-400 text-xl transition-transform ${openAccordion === 'input-modes' ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div className={`accordion-content overflow-hidden transition-all duration-300 ${openAccordion === 'input-modes' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-4 bg-white dark:bg-zinc-800 text-sm text-stone-600 dark:text-zinc-400 space-y-3">
                <p><strong>Hardware Input:</strong> Direct from audio interface. Lower latency, direct monitoring.</p>
                <p><strong>Software Input:</strong> Through other DAWs or apps. Higher latency, flexible routing.</p>
              </div>
            </div>
          </div>

          <div className="border border-stone-200 dark:border-zinc-700 rounded-lg overflow-hidden">
            <button
              className="w-full text-left p-4 bg-stone-50 dark:bg-zinc-700/50 font-bold flex justify-between items-center text-stone-800 dark:text-zinc-200"
              onClick={() => toggleAccordion('pdc')}
            >
              <span>Plugin Delay Compensation (PDC)</span>
              <span className={`text-stone-400 text-xl transition-transform ${openAccordion === 'pdc' ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div className={`accordion-content overflow-hidden transition-all duration-300 ${openAccordion === 'pdc' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-4 bg-white dark:bg-zinc-800 text-sm text-stone-600 dark:text-zinc-400 space-y-3">
                <p><strong>Automatic Compensation:</strong> FL Studio automatically compensates for plugin latency to maintain timing accuracy.</p>
                <p><strong>Benefits:</strong> No timing issues when using multiple plugins with different latency characteristics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};