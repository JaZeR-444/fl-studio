import { useState } from 'react';

export const MentalModelSection = () => {
  const [activeFlowNode, setActiveFlowNode] = useState<string | null>(null);
  
  // Flow node data
  const flowNodes = [
    { id: 'browser', label: 'Browser / Files', description: 'Samples, Plugins, Presets', color: 'bg-stone-100 dark:bg-zinc-700' },
    { id: 'channelrack', label: 'Channel Rack', description: 'Step Sequencer, Generators', color: 'bg-stone-100 dark:bg-zinc-700' },
    { id: 'playlist', label: 'The Playlist', description: 'Arrangement, Audio Clips, Automation Clips, Pattern Instances', color: 'bg-stone-100 dark:bg-zinc-700' },
    { id: 'mixer', label: 'Mixer Inserts', description: 'Effects Chain, Sidechaining', color: 'bg-stone-100 dark:bg-zinc-700' },
    { id: 'master', label: 'Master Bus', description: 'Final Limiting, Metering', color: 'bg-stone-800 dark:bg-zinc-900' },
  ];

  const handleNodeClick = (nodeId: string) => {
    setActiveFlowNode(nodeId === activeFlowNode ? null : nodeId);
    // In a real app, this might navigate to the specific module section
  };

  return (
    <section id="home" className="page-section animate-fade">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-4">Mental Model & Architecture</h2>
        <p className="text-stone-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
          Unlike linear DAWs, FL Studio relies on a <strong>pattern-based</strong> architecture. Understanding the signal flow is key to mastering routing.
          Interact with the diagram below to explore the subsystems.
        </p>
      </div>

      {/* Interactive Signal Flow Diagram */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-8 mb-10">
        <h3 className="text-sm font-semibold text-stone-400 dark:text-zinc-500 uppercase tracking-wider mb-6 text-center">Interactive Signal Path (Click to Explore)</h3>

        <div className="flex flex-col items-center space-y-4">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
            <div 
              onClick={() => handleNodeClick('browser')}
              className={`flow-node ${flowNodes[0].color} p-4 rounded-lg border-2 border-transparent text-center group cursor-pointer transition-all duration-300 ${
                activeFlowNode === 'browser' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' : ''
              }`}
            >
              <div className={`font-bold ${activeFlowNode === 'browser' ? 'text-orange-600 dark:text-orange-400' : 'text-stone-800 dark:text-zinc-200 group-hover:text-orange-600'}`}>
                {flowNodes[0].label}
              </div>
              <div className="text-xs text-stone-500 dark:text-zinc-400 mt-1">{flowNodes[0].description}</div>
            </div>
            <div 
              onClick={() => handleNodeClick('channelrack')}
              className={`flow-node ${flowNodes[1].color} p-4 rounded-lg border-2 border-transparent text-center group cursor-pointer relative transition-all duration-300 ${
                activeFlowNode === 'channelrack' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' : ''
              }`}
            >
              <div className={`font-bold ${activeFlowNode === 'channelrack' ? 'text-orange-600 dark:text-orange-400' : 'text-stone-800 dark:text-zinc-200 group-hover:text-orange-600'}`}>
                {flowNodes[1].label}
              </div>
              <div className="text-xs text-stone-500 dark:text-zinc-400 mt-1">{flowNodes[1].description}</div>
              {/* Arrow */}
              <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-stone-300 dark:text-zinc-600 text-xl">→</div>
            </div>
          </div>

          {/* Connector */}
          <div className="text-stone-300 dark:text-zinc-600 text-2xl font-bold">↓</div>

          {/* Middle Row */}
          <div 
            onClick={() => handleNodeClick('playlist')}
            className={`flow-node w-full max-w-md ${flowNodes[2].color} p-6 rounded-lg border-2 border-transparent text-center group cursor-pointer transition-all duration-300 ${
              activeFlowNode === 'playlist' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' : ''
            }`}
          >
            <div className={`font-bold text-lg ${activeFlowNode === 'playlist' ? 'text-orange-600 dark:text-orange-400' : 'text-stone-800 dark:text-zinc-200 group-hover:text-orange-600'}`}>
              {flowNodes[2].label}
            </div>
            <div className="text-sm text-stone-500 dark:text-zinc-400 mt-1">{flowNodes[2].description}</div>
          </div>

          {/* Connector */}
          <div className="text-stone-300 dark:text-zinc-600 text-2xl font-bold">↓</div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
            <div 
              onClick={() => handleNodeClick('mixer')}
              className={`flow-node ${flowNodes[3].color} p-4 rounded-lg border-2 border-transparent text-center group cursor-pointer relative transition-all duration-300 ${
                activeFlowNode === 'mixer' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' : ''
              }`}
            >
              <div className={`font-bold ${activeFlowNode === 'mixer' ? 'text-orange-600 dark:text-orange-400' : 'text-stone-800 dark:text-zinc-200 group-hover:text-orange-600'}`}>
                {flowNodes[3].label}
              </div>
              <div className="text-xs text-stone-500 dark:text-zinc-400 mt-1">{flowNodes[3].description}</div>
              {/* Arrow */}
              <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-stone-300 dark:text-zinc-600 text-xl">→</div>
            </div>
            <div 
              onClick={() => handleNodeClick('master')}
              className={`flow-node ${flowNodes[4].color} p-4 rounded-lg border-2 border-transparent text-center group cursor-pointer shadow-md dark:shadow-zinc-900/50 transition-all duration-300 ${
                activeFlowNode === 'master' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' : ''
              }`}
            >
              <div className={`font-bold ${activeFlowNode === 'master' ? 'text-orange-400' : 'text-white group-hover:text-orange-400'}`}>
                {flowNodes[4].label}
              </div>
              <div className="text-xs text-stone-400 mt-1">{flowNodes[4].description}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Concepts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-stone-200 dark:border-zinc-700">
          <h3 className="font-bold text-stone-800 dark:text-zinc-200 mb-2">Patterns vs. Linear</h3>
          <p className="text-sm text-stone-600 dark:text-zinc-400">FL decouples composition (Patterns) from arrangement (Playlist). Changes to a pattern update all its instances automatically.</p>
        </div>
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-stone-200 dark:border-zinc-700">
          <h3 className="font-bold text-stone-800 dark:text-zinc-200 mb-2">Automation Model</h3>
          <p className="text-sm text-stone-600 dark:text-zinc-400">Automation Clips are independent objects in the Playlist. They can control any parameter linked to them, regardless of track.</p>
        </div>
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-stone-200 dark:border-zinc-700">
          <h3 className="font-bold text-stone-800 dark:text-zinc-200 mb-2">Real-time vs. Render</h3>
          <p className="text-sm text-stone-600 dark:text-zinc-400">PDC (Plugin Delay Compensation) is automatic. Real-time playback prioritizes sync; Export prioritizes quality (sinc depth).</p>
        </div>
      </div>
    </section>
  );
};