'use client';

import { useState } from 'react';
import { Chart as ChartJS, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export const AudioAnalysisSection = () => {
  const [analysisType, setAnalysisType] = useState<'frequency' | 'waveform' | 'spectrum'>('frequency');

  // Sample data for visualizations
  const frequencyData = {
    labels: ['32Hz', '64Hz', '125Hz', '250Hz', '500Hz', '1kHz', '2kHz', '4kHz', '8kHz', '16kHz'],
    datasets: [{
      label: 'Frequency Response',
      data: [65, 75, 85, 78, 82, 90, 73, 68, 55, 45],
      backgroundColor: 'rgba(139, 92, 246, 0.5)',
      borderColor: 'rgb(139, 92, 246)',
      borderWidth: 2,
      borderRadius: 4
    }]
  };

  const waveformData = {
    labels: Array.from({ length: 20 }, (_, i) => `${i * 50}ms`),
    datasets: [{
      label: 'Amplitude',
      data: [0, 10, 35, 60, 85, 95, 80, 55, 30, 10, -10, -35, -60, -85, -95, -80, -55, -30, -10, 0],
      backgroundColor: 'rgba(6, 182, 212, 0.5)',
      borderColor: 'rgb(6, 182, 212)',
      borderWidth: 2,
      borderRadius: 2
    }]
  };

  const spectrumData = {
    labels: ['Sub', 'Bass', 'Low-Mid', 'Mid', 'Upper-Mid', 'Presence', 'Brilliance', 'Air'],
    datasets: [{
      label: 'Balance',
      data: [70, 85, 75, 80, 78, 72, 65, 55],
      backgroundColor: 'rgba(249, 115, 22, 0.5)',
      borderColor: 'rgb(249, 115, 22)',
      borderWidth: 2,
      borderRadius: 6
    }]
  };

  const getChartData = () => {
    switch (analysisType) {
      case 'frequency': return frequencyData;
      case 'waveform': return waveformData;
      case 'spectrum': return spectrumData;
      default: return frequencyData;
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(15, 10, 26, 0.9)',
        titleColor: '#fff',
        bodyColor: '#a78bfa',
        borderColor: 'rgba(139, 92, 246, 0.3)',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12
      }
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

  // Analysis types
  const analysisTypes = [
    { id: 'frequency', label: 'Frequency Response', icon: '📊', desc: 'Analyze frequency distribution' },
    { id: 'waveform', label: 'Waveform', icon: '📈', desc: 'View amplitude over time' },
    { id: 'spectrum', label: 'Spectrum Balance', icon: '🎚️', desc: 'Check frequency balance' }
  ];

  // FL Studio tools for audio analysis
  const analysisTools = [
    { name: 'Wave Candy', desc: 'Real-time visualization (scope, spectrum, peak meter)', icon: '🍬' },
    { name: 'Parametric EQ 2', desc: 'Built-in analyzer for EQ decisions', icon: '🎛️' },
    { name: 'Edison', desc: 'Audio editor with frequency analysis', icon: '💡' },
    { name: 'Vocodex', desc: 'Vocoder with frequency band display', icon: '🎤' },
    { name: 'Fruity Limiter', desc: 'Limiter with gain reduction meter', icon: '📉' },
    { name: 'SPAN (Free)', desc: 'Third-party analyzer plugin', icon: '📊' }
  ];

  // Frequency ranges reference
  const frequencyRanges = [
    { range: 'Sub Bass', hz: '20-60Hz', desc: 'Deep rumble, felt more than heard', color: 'purple' },
    { range: 'Bass', hz: '60-250Hz', desc: 'Warmth, body of kick and bass', color: 'blue' },
    { range: 'Low-Mid', hz: '250-500Hz', desc: 'Muddiness zone, often needs cuts', color: 'cyan' },
    { range: 'Mid', hz: '500Hz-2kHz', desc: 'Presence of most instruments', color: 'green' },
    { range: 'Upper-Mid', hz: '2-4kHz', desc: 'Clarity, attack, vocal presence', color: 'orange' },
    { range: 'Presence', hz: '4-8kHz', desc: 'Brightness, definition', color: 'pink' },
    { range: 'Brilliance', hz: '8-16kHz', desc: 'Air, sparkle, shimmer', color: 'purple' },
    { range: 'Air', hz: '16-20kHz', desc: 'Ultra-high harmonics', color: 'blue' }
  ];

  return (
    <section id="audio-analysis" className="page-section animate-fade">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Audio</span>
          <span className="text-white"> Analysis</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          Visualize and analyze your audio for better mixing decisions.
        </p>
      </div>

      {/* Analysis Type Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {analysisTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setAnalysisType(type.id as typeof analysisType)}
            className={`tool-card text-left ${
              analysisType === type.id ? 'border-[var(--accent-secondary)] purple-glow' : ''
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{type.icon}</span>
              <h3 className="font-bold text-white">{type.label}</h3>
            </div>
            <p className="text-sm text-[var(--text-muted)]">{type.desc}</p>
          </button>
        ))}
      </div>

      {/* Chart Visualization */}
      <div className="content-card p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">
            {analysisTypes.find(t => t.id === analysisType)?.label}
          </h3>
          <span className="badge badge-purple">Live</span>
        </div>
        <div className="h-64">
          <Bar data={getChartData()} options={chartOptions} />
        </div>
        <p className="text-center text-sm text-[var(--text-muted)] mt-4">
          Sample visualization data for demonstration
        </p>
      </div>

      {/* FL Studio Analysis Tools */}
      <div className="content-card p-6 mb-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span>🔧</span>
          FL Studio Analysis Tools
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {analysisTools.map((tool, idx) => (
            <div key={idx} className="glass-card p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-xl shrink-0">
                {tool.icon}
              </div>
              <div>
                <h4 className="font-bold text-white">{tool.name}</h4>
                <p className="text-xs text-[var(--text-muted)]">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frequency Reference */}
      <div className="content-card p-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span>🎵</span>
          Frequency Ranges Reference
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {frequencyRanges.map((range, idx) => (
            <div key={idx} className={`p-4 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]`}>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-white">{range.range}</h4>
                <span className={`badge badge-${range.color} text-xs`}>{range.hz}</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">{range.desc}</p>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="mt-6 p-4 rounded-lg bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)]">
          <h4 className="font-bold text-[var(--accent-tertiary)] mb-2 flex items-center gap-2">
            <span>💡</span> Quick Mixing Tips
          </h4>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            <li className="flex items-start">
              <span className="text-[var(--accent-secondary)] mr-2">•</span>
              High-pass filter unnecessary sub frequencies from non-bass instruments
            </li>
            <li className="flex items-start">
              <span className="text-[var(--accent-secondary)] mr-2">•</span>
              Cut 250-400Hz to reduce muddiness in busy mixes
            </li>
            <li className="flex items-start">
              <span className="text-[var(--accent-secondary)] mr-2">•</span>
              Boost 2-4kHz for clarity and presence in vocals
            </li>
            <li className="flex items-start">
              <span className="text-[var(--accent-secondary)] mr-2">•</span>
              Add subtle 8-12kHz shelf for air and openness
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
