export const MixingSection = () => {
  return (
    <section id="mixing" className="page-section">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4"><span className="text-gradient">Mixing</span> & Automation Strategies</h2>
        <div className="content-card p-6">
          <h3 className="font-bold text-white mb-3 text-lg">Routing & Bus Logic</h3>
          <p className="text-sm text-purple-primary-300">Use the cables at the bottom of the mixer to route inserts. Right click routing cable → "Sidechain to this track".</p>

          <div className="mt-4 space-y-3">
            <div className="p-3 bg-purple-primary-900/20 rounded border border-purple-primary-600/30">
              <h4 className="font-bold text-purple-primary-200 mb-1">Group Buses</h4>
              <p className="text-sm text-purple-primary-300">Route similar instruments (e.g. drums, vocals) to dedicated group buses for cohesive processing.</p>
            </div>

            <div className="p-3 bg-purple-primary-900/20 rounded border border-purple-primary-600/30">
              <h4 className="font-bold text-purple-primary-200 mb-1">Insert vs. Send Effects</h4>
              <p className="text-sm text-purple-primary-300">Use inserts for EQ and compression. Use sends for reverb and delay to preserve dry signal.</p>
            </div>

            <div className="p-3 bg-purple-primary-900/20 rounded border border-purple-primary-600/30">
              <h4 className="font-bold text-purple-primary-200 mb-1">Spectrum Management</h4>
              <p className="text-sm text-purple-primary-300">High-pass filter instruments that don't need low end. Use EQ to create space for each element.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 content-card p-6">
          <h3 className="font-bold text-white mb-3 text-lg">Automation Techniques</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-purple-primary-900/20 rounded border border-purple-primary-600/30">
              <h4 className="font-bold text-purple-primary-200 mb-1">Clip-Based Automation</h4>
              <p className="text-sm text-purple-primary-300">Use automation clips in the playlist for independent control of any parameter.</p>
            </div>

            <div className="p-3 bg-purple-primary-900/20 rounded border border-purple-primary-600/30">
              <h4 className="font-bold text-purple-primary-200 mb-1">Envelopes</h4>
              <p className="text-sm text-purple-primary-300">Apply envelopes directly to instruments/notes for shaping individual sounds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};