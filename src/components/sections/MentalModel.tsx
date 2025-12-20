import { useState } from 'react';

export const MentalModelSection = () => {
  const [activeFlowNode, setActiveFlowNode] = useState<string | null>(null);

  // Flow node data
  const flowNodes = [
    { id: 'browser', label: 'Browser / Files', description: 'Samples, Plugins, Presets' },
    { id: 'channelrack', label: 'Channel Rack', description: 'Step Sequencer, Generators' },
    { id: 'playlist', label: 'The Playlist', description: 'Arrangement, Audio Clips, Automation Clips, Pattern Instances' },
    { id: 'mixer', label: 'Mixer Inserts', description: 'Effects Chain, Sidechaining' },
    { id: 'master', label: 'Master Bus', description: 'Final Limiting, Metering' },
  ];

  const handleNodeClick = (nodeId: string) => {
    setActiveFlowNode(nodeId === activeFlowNode ? null : nodeId);
    // In a real app, this might navigate to the specific module section
  };

  return (
    <section id="home" className="page-section animate-fade">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Mental Model & <span className="text-gradient">Architecture</span></h2>
        <p className="text-purple-primary-300 leading-relaxed max-w-3xl">
          Unlike linear DAWs, FL Studio relies on a <strong className="text-purple-primary-200">pattern-based</strong> architecture. Understanding the signal flow is key to mastering routing.
          Interact with the diagram below to explore the subsystems.
        </p>
      </div>

      {/* Interactive Signal Flow Diagram */}
      <div className="glass-card p-8 mb-10">
        <h3 className="text-sm font-semibold text-purple-primary-400 uppercase tracking-wider mb-6 text-center">Interactive Signal Path (Click to Explore)</h3>

        <div className="flex flex-col items-center space-y-4">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
            <div
              onClick={() => handleNodeClick('browser')}
              className={`flow-node p-4 rounded-lg text-center group cursor-pointer transition-all duration-300 ${
                activeFlowNode === 'browser' ? 'active' : ''
              }`}
            >
              <div className={`font-bold ${activeFlowNode === 'browser' ? 'text-purple-primary-200' : 'text-white group-hover:text-purple-primary-200'}`}>
                {flowNodes[0].label}
              </div>
              <div className="text-xs text-purple-primary-300 mt-1">{flowNodes[0].description}</div>
            </div>
            <div
              onClick={() => handleNodeClick('channelrack')}
              className={`flow-node p-4 rounded-lg text-center group cursor-pointer relative transition-all duration-300 ${
                activeFlowNode === 'channelrack' ? 'active' : ''
              }`}
            >
              <div className={`font-bold ${activeFlowNode === 'channelrack' ? 'text-purple-primary-200' : 'text-white group-hover:text-purple-primary-200'}`}>
                {flowNodes[1].label}
              </div>
              <div className="text-xs text-purple-primary-300 mt-1">{flowNodes[1].description}</div>
              {/* Arrow */}
              <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-purple-primary-600 text-xl">→</div>
            </div>
          </div>

          {/* Connector */}
          <div className="text-purple-primary-600 text-2xl font-bold">↓</div>

          {/* Middle Row */}
          <div
            onClick={() => handleNodeClick('playlist')}
            className={`flow-node w-full max-w-md p-6 rounded-lg text-center group cursor-pointer transition-all duration-300 ${
              activeFlowNode === 'playlist' ? 'active' : ''
            }`}
          >
            <div className={`font-bold text-lg ${activeFlowNode === 'playlist' ? 'text-purple-primary-200' : 'text-white group-hover:text-purple-primary-200'}`}>
              {flowNodes[2].label}
            </div>
            <div className="text-sm text-purple-primary-300 mt-1">{flowNodes[2].description}</div>
          </div>

          {/* Connector */}
          <div className="text-purple-primary-600 text-2xl font-bold">↓</div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
            <div
              onClick={() => handleNodeClick('mixer')}
              className={`flow-node p-4 rounded-lg text-center group cursor-pointer relative transition-all duration-300 ${
                activeFlowNode === 'mixer' ? 'active' : ''
              }`}
            >
              <div className={`font-bold ${activeFlowNode === 'mixer' ? 'text-purple-primary-200' : 'text-white group-hover:text-purple-primary-200'}`}>
                {flowNodes[3].label}
              </div>
              <div className="text-xs text-purple-primary-300 mt-1">{flowNodes[3].description}</div>
              {/* Arrow */}
              <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-purple-primary-600 text-xl">→</div>
            </div>
            <div
              onClick={() => handleNodeClick('master')}
              className={`flow-node p-4 rounded-lg text-center group cursor-pointer shadow-purple-glow transition-all duration-300 ${
                activeFlowNode === 'master' ? 'active' : ''
              }`}
            >
              <div className={`font-bold ${activeFlowNode === 'master' ? 'glow-text' : 'text-white group-hover:text-purple-primary-200'}`}>
                {flowNodes[4].label}
              </div>
              <div className="text-xs text-purple-primary-300 mt-1">{flowNodes[4].description}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Concepts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="content-card">
          <h3 className="font-bold text-white mb-2">Patterns vs. Linear</h3>
          <p className="text-sm text-purple-primary-300">FL decouples composition (Patterns) from arrangement (Playlist). Changes to a pattern update all its instances automatically.</p>
        </div>
        <div className="content-card">
          <h3 className="font-bold text-white mb-2">Automation Model</h3>
          <p className="text-sm text-purple-primary-300">Automation Clips are independent objects in the Playlist. They can control any parameter linked to them, regardless of track.</p>
        </div>
        <div className="content-card">
          <h3 className="font-bold text-white mb-2">Real-time vs. Render</h3>
          <p className="text-sm text-purple-primary-300">PDC (Plugin Delay Compensation) is automatic. Real-time playback prioritizes sync; Export prioritizes quality (sinc depth).</p>
        </div>
      </div>
    </section>
  );
};