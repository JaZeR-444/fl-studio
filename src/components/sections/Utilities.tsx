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
        <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-4">Studio Tools</h2>
        <p className="text-stone-600 dark:text-zinc-400 mb-6">Calculators for delay times, reverb settings, and frequency mapping.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Tool 1: Delay, Reverb & Hz */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6">
            <h3 className="font-bold text-stone-800 dark:text-zinc-200 border-b border-stone-100 dark:border-zinc-700 pb-2 mb-4">Timing Calculator</h3>

            <div className="flex items-center space-x-4 mb-6">
              <label className="text-stone-600 dark:text-zinc-400 font-bold">Project BPM:</label>
              <input 
                type="number" 
                value={bpm}
                onChange={(e) => setBpm(Number(e.target.value))}
                className="w-24 p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white rounded font-mono text-center focus:ring-2 focus:ring-orange-500 outline-none" 
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-xs font-bold text-stone-400 uppercase mb-2">Delay Times</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-stone-50 dark:bg-zinc-700/50 p-2 rounded">
                    <span className="text-xs font-medium text-stone-600 dark:text-zinc-400">1/4 Note</span>
                    <span className="font-mono text-sm font-bold text-orange-600 dark:text-orange-400">
                      {quarterNote} ms
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-stone-50 dark:bg-zinc-700/50 p-2 rounded">
                    <span className="text-xs font-medium text-stone-600 dark:text-zinc-400">1/8 Note</span>
                    <span className="font-mono text-sm font-bold text-orange-600 dark:text-orange-400">
                      {eighthNote} ms
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-400 uppercase mb-2">Reverb (Approx)</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-stone-50 dark:bg-zinc-700/50 p-2 rounded">
                    <span className="text-xs font-medium text-stone-600 dark:text-zinc-400">Pre-Delay (1/64)</span>
                    <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                      {preDelay} ms
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-stone-50 dark:bg-zinc-700/50 p-2 rounded">
                    <span className="text-xs font-medium text-stone-600 dark:text-zinc-400">Decay (1 Bar)</span>
                    <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                      {decay} ms
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tool 2: Frequency Mixing Map */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6">
            <h3 className="font-bold text-stone-800 dark:text-zinc-200 border-b border-stone-100 dark:border-zinc-700 pb-2 mb-4">Mixing Frequency Map</h3>

            <div className="space-y-6">
              <div className="freq-row group">
                <div className="flex justify-between text-xs mb-1">
                  <span className="freq-label font-bold text-stone-500 dark:text-zinc-500 group-hover:text-stone-800 dark:group-hover:text-zinc-200 transition-colors">Sub Bass (20-60Hz)</span>
                  <span className="text-stone-400">Feel, don't hear</span>
                </div>
                <div className="w-full bg-stone-100 dark:bg-zinc-700 h-3 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full w-[20%] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              
              <div className="freq-row group">
                <div className="flex justify-between text-xs mb-1">
                  <span className="freq-label font-bold text-stone-500 dark:text-zinc-500 group-hover:text-stone-800 dark:group-hover:text-zinc-200 transition-colors">Kick Body (60-250Hz)</span>
                  <span className="text-stone-400">The Power</span>
                </div>
                <div className="w-full bg-stone-100 dark:bg-zinc-700 h-3 rounded-full overflow-hidden relative">
                  <div className="bg-blue-500 h-full absolute left-[15%] w-[25%] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              
              <div className="freq-row group">
                <div className="flex justify-between text-xs mb-1">
                  <span className="freq-label font-bold text-stone-500 dark:text-zinc-500 group-hover:text-stone-800 dark:group-hover:text-zinc-200 transition-colors">Presence (2k-5kHz)</span>
                  <span className="text-stone-400">Vocals & Snares</span>
                </div>
                <div className="w-full bg-stone-100 dark:bg-zinc-700 h-3 rounded-full overflow-hidden relative">
                  <div className="bg-green-500 h-full absolute left-[60%] w-[25%] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              
              <div className="freq-row group">
                <div className="flex justify-between text-xs mb-1">
                  <span className="freq-label font-bold text-stone-500 dark:text-zinc-500 group-hover:text-stone-800 dark:group-hover:text-zinc-200 transition-colors">Air (10k-20kHz)</span>
                  <span className="text-stone-400">Sparkle & Clarity</span>
                </div>
                <div className="w-full bg-stone-100 dark:bg-zinc-700 h-3 rounded-full overflow-hidden relative">
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