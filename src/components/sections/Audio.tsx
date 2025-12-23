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
          borderColor: '#7c3aed',
          backgroundColor: 'rgba(124, 58, 237, 0.2)',
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
              color: 'rgba(139, 92, 246, 0.1)'
            },
            ticks: {
              color: '#c4b5fd'
            }
          },
          x: {
            grid: { display: false },
            ticks: {
              color: '#c4b5fd'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#e9d5ff'
            }
          },
          tooltip: {
            titleColor: '#ffffff',
            bodyColor: '#e9d5ff',
            backgroundColor: 'rgba(30, 20, 50, 0.9)'
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
        <h2 className="text-3xl font-bold text-white mb-4">Audio Workflow & <span className="text-gradient">Recording</span></h2>
        <p className="text-purple-primary-300 mb-6">Managing latency, buffers, and recording paths is critical for stability.</p>

        <div className="content-card mb-8">
          <h3 className="text-sm font-bold text-purple-primary-400 uppercase mb-4">Buffer Size vs. Latency vs. CPU Load</h3>
          <div className="chart-container">
            <canvas id="latencyChart" ref={chartRef}></canvas>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border border-purple-primary-600/30 rounded-lg overflow-hidden glass-card">
            <button
              className="w-full text-left p-4 bg-purple-primary-700/20 font-bold flex justify-between items-center text-white hover:bg-purple-primary-700/30 transition-colors"
              onClick={() => toggleAccordion('recording-logic')}
            >
              <span>Recording Logic: Edison vs. Playlist</span>
              <span className={`text-purple-primary-400 text-xl transition-transform ${openAccordion === 'recording-logic' ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div className={`accordion-content overflow-hidden transition-all duration-300 ${openAccordion === 'recording-logic' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-4 text-sm text-purple-primary-300 space-y-3">
                <p><strong className="text-purple-primary-200">Edison:</strong> Best for sampling and destructive processing. Runs as an effect.</p>
                <p><strong className="text-purple-primary-200">Playlist:</strong> Best for tracking vocals/instruments. Requires arming mixer track.</p>
              </div>
            </div>
          </div>

          <div className="border border-purple-primary-600/30 rounded-lg overflow-hidden glass-card">
            <button
              className="w-full text-left p-4 bg-purple-primary-700/20 font-bold flex justify-between items-center text-white hover:bg-purple-primary-700/30 transition-colors"
              onClick={() => toggleAccordion('input-modes')}
            >
              <span>Input Modes: Hardware vs. Software</span>
              <span className={`text-purple-primary-400 text-xl transition-transform ${openAccordion === 'input-modes' ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div className={`accordion-content overflow-hidden transition-all duration-300 ${openAccordion === 'input-modes' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-4 text-sm text-purple-primary-300 space-y-3">
                <p><strong className="text-purple-primary-200">Hardware Input:</strong> Direct from audio interface. Lower latency, direct monitoring.</p>
                <p><strong className="text-purple-primary-200">Software Input:</strong> Through other DAWs or apps. Higher latency, flexible routing.</p>
              </div>
            </div>
          </div>

          <div className="border border-purple-primary-600/30 rounded-lg overflow-hidden glass-card">
            <button
              className="w-full text-left p-4 bg-purple-primary-700/20 font-bold flex justify-between items-center text-white hover:bg-purple-primary-700/30 transition-colors"
              onClick={() => toggleAccordion('pdc')}
            >
              <span>Plugin Delay Compensation (PDC)</span>
              <span className={`text-purple-primary-400 text-xl transition-transform ${openAccordion === 'pdc' ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div className={`accordion-content overflow-hidden transition-all duration-300 ${openAccordion === 'pdc' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-4 text-sm text-purple-primary-300 space-y-3">
                <p><strong className="text-purple-primary-200">Automatic Compensation:</strong> FL Studio automatically compensates for plugin latency to maintain timing accuracy.</p>
                <p><strong className="text-purple-primary-200">Benefits:</strong> No timing issues when using multiple plugins with different latency characteristics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};