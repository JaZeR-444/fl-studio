'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  SlidersHorizontal, 
  Clock, 
  Zap, 
  ChevronDown, 
  ChevronUp,
  Waves,
  HardDrive,
  Radio,
  Lightbulb,
  CheckCircle
} from 'lucide-react';

// Recording tips data
const recordingTips = [
  'Set buffer to 64-128 samples for recording (low latency)',
  'Use ASIO driver for best performance on Windows',
  'Arm mixer tracks before recording (right-click track)',
  'Enable "Record starts playback" for hands-free operation',
];

export const AudioSection = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('recording-logic');
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

  const accordionItems = [
    {
      id: 'recording-logic',
      title: 'Recording Logic: Edison vs. Playlist',
      icon: Mic,
      content: [
        { label: 'Edison', description: 'Best for sampling and destructive processing. Runs as an effect on mixer tracks.' },
        { label: 'Playlist', description: 'Best for tracking vocals/instruments. Requires arming mixer track (disk icon).' },
      ]
    },
    {
      id: 'input-modes',
      title: 'Input Modes: Hardware vs. Software',
      icon: Radio,
      content: [
        { label: 'Hardware Input', description: 'Direct from audio interface. Lower latency, direct monitoring available.' },
        { label: 'Software Input', description: 'Through other DAWs or apps via virtual cables. Higher latency, flexible routing.' },
      ]
    },
    {
      id: 'pdc',
      title: 'Plugin Delay Compensation (PDC)',
      icon: Clock,
      content: [
        { label: 'Automatic Compensation', description: 'FL Studio automatically compensates for plugin latency to maintain timing.' },
        { label: 'Benefits', description: 'No timing issues when using plugins with different latency characteristics.' },
      ]
    },
    {
      id: 'drivers',
      title: 'Audio Driver Selection',
      icon: HardDrive,
      content: [
        { label: 'ASIO (Recommended)', description: 'Lowest latency. Use native ASIO driver or ASIO4ALL for non-ASIO interfaces.' },
        { label: 'WASAPI', description: 'Good fallback. Shared mode allows other apps, exclusive mode for lower latency.' },
      ]
    }
  ];

  return (
    <section id="audio" className="page-section animate-fade">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Audio</span>
          <span className="text-white"> Workflow & Recording</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          Managing latency, buffers, and recording paths is critical for stability.
        </p>
      </div>

      {/* Hero Card */}
      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/20 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
              <Mic className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">Quick Recording Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {recordingTips.map((tip, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-cyan-100">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="content-card p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <SlidersHorizontal className="w-5 h-5 text-[var(--accent-tertiary)]" />
          <h3 className="font-bold text-white">Buffer Size vs. Latency</h3>
        </div>
        <p className="text-sm text-[var(--text-muted)] mb-4">
          Lower buffer = lower latency for recording, but higher CPU. Higher buffer = more stable playback.
        </p>
        <div className="chart-container h-48">
          <canvas id="latencyChart" ref={chartRef}></canvas>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="space-y-3">
        {accordionItems.map((item) => (
          <div key={item.id} className="content-card overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
              onClick={() => toggleAccordion(item.id)}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-[var(--accent-tertiary)]" />
                <span className="font-bold text-white">{item.title}</span>
              </div>
              {openAccordion === item.id ? (
                <ChevronUp className="w-5 h-5 text-[var(--text-muted)]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[var(--text-muted)]" />
              )}
            </button>
            
            {openAccordion === item.id && (
              <div className="p-4 border-t border-[var(--glass-border)] bg-black/20 space-y-3">
                {item.content.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium text-white">{c.label}:</span>{' '}
                      <span className="text-[var(--text-muted)]">{c.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Key Insight */}
      <div className="mt-8 p-6 rounded-lg bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.2)]">
        <h3 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
          <Lightbulb className="w-5 h-5" /> Recording Workflow Tip
        </h3>
        <p className="text-yellow-200/80">
          For the lowest latency recording, use your audio interface's "Direct Monitoring" feature 
          (if available) combined with FL Studio's buffer set to 128-256 samples. This lets you 
          hear yourself without DAW latency while still recording.
        </p>
      </div>
    </section>
  );
};