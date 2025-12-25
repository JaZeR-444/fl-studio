'use client';

import { useState } from 'react';
import { 
  Mic, 
  SlidersHorizontal, 
  Clock, 
  Zap, 
  Waves,
  HardDrive,
  Radio,
  Lightbulb,
  CheckCircle,
  Activity,
  ArrowRight
} from 'lucide-react';

export const AudioSection = () => {
  const [activeTab, setActiveTab] = useState('basics');

  const tabs = [
    { id: 'basics', label: 'Recording Basics', icon: Mic },
    { id: 'latency', label: 'Latency & Buffer', icon: Activity },
    { id: 'drivers', label: 'Audio Drivers', icon: HardDrive },
  ];

  return (
    <section id="audio" className="page-section animate-fade scroll-mt-24">
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
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-cyan-100">Set buffer to 64-128 samples for recording</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-cyan-100">Use ASIO driver for best performance</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-cyan-100">Arm mixer tracks before recording</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-cyan-100">"Record starts playback" for hands-free</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === tab.id
                ? 'bg-[var(--accent-primary)] text-white shadow-lg'
                : 'bg-[var(--bg-card)] text-[var(--text-muted)] hover:bg-[var(--bg-card-hover)] hover:text-white border border-[var(--glass-border)]'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">
        {/* RECORDING BASICS TAB */}
        {activeTab === 'basics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade">
            {/* Input Modes */}
            <div className="card-base p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <Radio className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-bold text-white">Input Modes</h3>
              </div>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-white">Hardware Input</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-green-500/20 text-green-400 border border-green-500/30">Native</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Direct from audio interface. Lowest latency, allows direct monitoring.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                   <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-white">Software Input</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-orange-500/20 text-orange-400 border border-orange-500/30">Virtual</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Via virtual cables (Voicemeeter, etc.). Higher latency, but flexible routing.
                  </p>
                </div>
              </div>
            </div>

            {/* Recording Logic */}
            <div className="card-base p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-pink-500/20">
                  <Waves className="w-5 h-5 text-pink-400" />
                </div>
                <h3 className="font-bold text-white">Recording Methods</h3>
              </div>
              <div className="space-y-4">
                 <div className="flex gap-3">
                   <div className="mt-1"><Zap className="w-4 h-4 text-[var(--accent-secondary)]" /></div>
                   <div>
                     <h4 className="text-sm font-semibold text-white">Edison</h4>
                     <p className="text-xs text-[var(--text-muted)] mt-1">
                       Best for sampling and destructive editing. Load as an effect on the mixer track you want to record.
                     </p>
                   </div>
                 </div>
                 <div className="flex gap-3">
                   <div className="mt-1"><Mic className="w-4 h-4 text-[var(--accent-secondary)]" /></div>
                   <div>
                     <h4 className="text-sm font-semibold text-white">Playlist (Audio Clips)</h4>
                     <p className="text-xs text-[var(--text-muted)] mt-1">
                       Best for vocals and instruments. Arm the mixer track (disk icon) and record directly to the timeline.
                     </p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        )}

        {/* LATENCY TAB */}
        {activeTab === 'latency' && (
          <div className="space-y-6 animate-fade">
             {/* Custom Latency Visualization (Replacing Broken Chart) */}
             <div className="card-base p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <SlidersHorizontal className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Buffer Size vs. Latency</h3>
                      <p className="text-xs text-[var(--text-muted)]">Lower Buffer = Less Latency, Higher CPU Load</p>
                    </div>
                  </div>
                </div>
                
                {/* SVG Graph */}
                <div className="relative h-48 w-full bg-black/20 rounded-lg p-4 flex items-end justify-between border border-white/5">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none opacity-20">
                     <div className="w-full h-px bg-white"></div>
                     <div className="w-full h-px bg-white"></div>
                     <div className="w-full h-px bg-white"></div>
                     <div className="w-full h-px bg-white"></div>
                  </div>

                  {/* Bars */}
                  {[
                    { label: '64 smp', height: '10%', val: '2ms', color: 'bg-green-500' },
                    { label: '128 smp', height: '25%', val: '4ms', color: 'bg-green-400' },
                    { label: '256 smp', height: '45%', val: '8ms', color: 'bg-blue-400' },
                    { label: '512 smp', height: '70%', val: '15ms', color: 'bg-purple-400' },
                    { label: '1024 smp', height: '95%', val: '30ms', color: 'bg-red-400' },
                  ].map((bar, i) => (
                    <div key={i} className="flex flex-col items-center justify-end gap-2 group w-1/6 z-10 h-full">
                      <div className="text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity mb-1">{bar.val}</div>
                      <div 
                        className={`w-full max-w-[40px] rounded-t-sm ${bar.color} opacity-80 group-hover:opacity-100 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]`} 
                        style={{ height: bar.height }}
                      ></div>
                      <div className="text-[10px] text-[var(--text-muted)] font-medium text-center">{bar.label}</div>
                    </div>
                  ))}
                </div>
             </div>

             <div className="card-base p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-500/20">
                     <Clock className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="font-bold text-white">Plugin Delay Compensation (PDC)</h3>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  FL Studio automatically handles PDC. If you hear timing issues, ensure the "Mixer Track Latency" icon is orange (active). 
                  Some plugins introduce huge latency (e.g. Linear Phase EQs) which makes live playback feel sluggish.
                </p>
             </div>
          </div>
        )}

        {/* DRIVERS TAB */}
        {activeTab === 'drivers' && (
          <div className="card-base p-6 animate-fade">
             <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-orange-500/20">
                   <HardDrive className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="font-bold text-white">Recommended Drivers</h3>
             </div>
             
             <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent-primary)] transition-colors">
                   <div className="mt-1">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-xs">1</div>
                   </div>
                   <div>
                      <h4 className="text-base font-bold text-white">FL Studio ASIO / Native ASIO</h4>
                      <p className="text-sm text-[var(--text-muted)] mt-1">
                         The gold standard. Use your interface's dedicated ASIO driver (e.g. "Focusrite USB ASIO") if available. 
                         If not, "FL Studio ASIO" is the best generic option that allows multi-client audio (YouTube + FL).
                      </p>
                   </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                   <div className="mt-1">
                      <div className="w-8 h-8 rounded-full bg-gray-500/20 text-gray-400 flex items-center justify-center font-bold text-xs">2</div>
                   </div>
                   <div>
                      <h4 className="text-base font-bold text-white">ASIO4ALL v2</h4>
                      <p className="text-sm text-[var(--text-muted)] mt-1">
                         Legacy generic driver. Can achieve very low latency on basic hardware but is "Exclusive Mode" only 
                         (takes over audio completely, so no other apps can make sound).
                      </p>
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>

      {/* Key Insight */}
      <div className="mt-8 p-6 rounded-lg bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.2)]">
        <h3 className="font-bold text-yellow-300 mb-2 flex items-center gap-2">
          <Lightbulb className="w-5 h-5" /> Recording Workflow Tip
        </h3>
        <p className="text-yellow-200/80 text-sm">
          For the lowest latency recording, use your audio interface's "Direct Monitoring" feature 
          (if available) combined with FL Studio's buffer set to 128-256 samples. This lets you 
          hear yourself without DAW latency while still recording.
        </p>
      </div>
    </section>
  );
};