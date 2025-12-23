import { useState, useEffect } from 'react';

export const UtilitiesSection = () => {
  const [bpm, setBpm] = useState(140);
  const [quarterNote, setQuarterNote] = useState(428);
  const [eighthNote, setEighthNote] = useState(214);
  const [preDelay, setPreDelay] = useState(26);
  const [decay, setDecay] = useState(1714);

  // Calculate timing values when BPM changes
  useEffect(() => {
    if (bpm > 0) {
      const quarter = 60000 / bpm;
      const eighth = quarter / 2;
      const pre = quarter / 16; // approx 1/64
      const dec = quarter * 4; // 1 bar

      setQuarterNote(Math.round(quarter));
      setEighthNote(Math.round(eighth));
      setPreDelay(Math.round(pre));
      setDecay(Math.round(dec));
    }
  }, [bpm]);

  return (
    <section id="utilities" className="page-section">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4"><span className="text-gradient">Studio</span> Tools</h2>
        <p className="text-purple-primary-300 mb-6">Calculators for delay times, reverb settings, and frequency mapping.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Tool 1: Delay, Reverb & Hz */}
          <div className="content-card p-6">
            <h3 className="font-bold text-white border-b border-purple-primary-600/30 pb-2 mb-4">Timing Calculator</h3>

            <div className="flex items-center space-x-4 mb-6">
              <label className="text-purple-primary-300 font-bold">Project BPM:</label>
              <input
                type="number"
                value={bpm}
                onChange={(e) => setBpm(Number(e.target.value))}
                className="w-24 p-2 border border-purple-primary-600/30 bg-purple-primary-900/30 text-white rounded font-mono text-center focus:ring-2 focus:ring-purple-primary-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-xs font-bold text-purple-primary-400 uppercase mb-2">Delay Times</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-purple-primary-900/20 p-2 rounded">
                    <span className="text-xs font-medium text-purple-primary-300">1/4 Note</span>
                    <span className="font-mono text-sm font-bold text-purple-primary-200">
                      {quarterNote} ms
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-purple-primary-900/20 p-2 rounded">
                    <span className="text-xs font-medium text-purple-primary-300">1/8 Note</span>
                    <span className="font-mono text-sm font-bold text-purple-primary-200">
                      {eighthNote} ms
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-purple-primary-400 uppercase mb-2">Reverb (Approx)</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-purple-primary-900/20 p-2 rounded">
                    <span className="text-xs font-medium text-purple-primary-300">Pre-Delay (1/64)</span>
                    <span className="font-mono text-sm font-bold text-purple-primary-200">
                      {preDelay} ms
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-purple-primary-900/20 p-2 rounded">
                    <span className="text-xs font-medium text-purple-primary-300">Decay (1 Bar)</span>
                    <span className="font-mono text-sm font-bold text-purple-primary-200">
                      {decay} ms
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tool 2: Frequency Mixing Map */}
          <div className="content-card p-6">
            <h3 className="font-bold text-white border-b border-purple-primary-600/30 pb-2 mb-4">Mixing Frequency Map</h3>

            <div className="space-y-6">
              <div className="freq-row group">
                <div className="flex justify-between text-xs mb-1">
                  <span className="freq-label font-bold text-purple-primary-400 group-hover:text-purple-primary-200 transition-colors">Sub Bass (20-60Hz)</span>
                  <span className="text-purple-primary-400">Feel, don't hear</span>
                </div>
                <div className="w-full bg-purple-primary-900/30 h-3 rounded-full overflow-hidden">
                  <div className="bg-purple-primary-500 h-full w-[20%] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              <div className="freq-row group">
                <div className="flex justify-between text-xs mb-1">
                  <span className="freq-label font-bold text-purple-primary-400 group-hover:text-purple-primary-200 transition-colors">Kick Body (60-250Hz)</span>
                  <span className="text-purple-primary-400">The Power</span>
                </div>
                <div className="w-full bg-purple-primary-900/30 h-3 rounded-full overflow-hidden relative">
                  <div className="bg-blue-500 h-full absolute left-[15%] w-[25%] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              <div className="freq-row group">
                <div className="flex justify-between text-xs mb-1">
                  <span className="freq-label font-bold text-purple-primary-400 group-hover:text-purple-primary-200 transition-colors">Presence (2k-5kHz)</span>
                  <span className="text-purple-primary-400">Vocals & Snares</span>
                </div>
                <div className="w-full bg-purple-primary-900/30 h-3 rounded-full overflow-hidden relative">
                  <div className="bg-green-500 h-full absolute left-[60%] w-[25%] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              <div className="freq-row group">
                <div className="flex justify-between text-xs mb-1">
                  <span className="freq-label font-bold text-purple-primary-400 group-hover:text-purple-primary-200 transition-colors">Air (10k-20kHz)</span>
                  <span className="text-purple-primary-400">Sparkle & Clarity</span>
                </div>
                <div className="w-full bg-purple-primary-900/30 h-3 rounded-full overflow-hidden relative">
                  <div className="bg-pink-500 h-full absolute left-[85%] w-[15%] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};