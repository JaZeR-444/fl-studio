export const ExportSection = () => {
  return (
    <section id="export" className="page-section">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4"><span className="text-gradient">Export</span> & Project Hygiene</h2>
        <div className="content-card overflow-hidden mb-8">
          <table className="w-full text-sm text-left">
            <thead className="bg-purple-primary-900/40 text-purple-primary-200 font-bold uppercase text-xs">
              <tr>
                <th className="p-4">Context</th>
                <th className="p-4">Format</th>
                <th className="p-4">Quality</th>
                <th className="p-4">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-primary-600/30">
              <tr>
                <td className="p-4 text-white">Master</td>
                <td className="p-4 text-purple-primary-300">WAV (24-bit)</td>
                <td className="p-4 text-purple-primary-300">High</td>
                <td className="p-4 text-purple-primary-300">For professional mastering</td>
              </tr>
              <tr>
                <td className="p-4 text-white">Distribution</td>
                <td className="p-4 text-purple-primary-300">MP3 (320kbps)</td>
                <td className="p-4 text-purple-primary-300">Good</td>
                <td className="p-4 text-purple-primary-300">For streaming platforms</td>
              </tr>
              <tr>
                <td className="p-4 text-white">Preview</td>
                <td className="p-4 text-purple-primary-300">MP3 (128kbps)</td>
                <td className="p-4 text-purple-primary-300">Low</td>
                <td className="p-4 text-purple-primary-300">Quick sharing</td>
              </tr>
              <tr>
                <td className="p-4 text-white">Stems</td>
                <td className="p-4 text-purple-primary-300">WAV (24-bit)</td>
                <td className="p-4 text-purple-primary-300">High</td>
                <td className="p-4 text-purple-primary-300">For remixing/collaboration</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="space-y-4">
          <div className="content-card p-5">
            <h3 className="font-bold text-white mb-2">Export Best Practices</h3>
            <ul className="list-disc pl-5 space-y-2 text-purple-primary-300">
              <li>Always bounce with "Wait for next step/beat" enabled for consistent timing</li>
              <li>Use "Sinc (Best)" interpolation for highest quality sample rate conversion</li>
              <li>Disable "Dithering" for 24-bit exports, enable for 16-bit</li>
              <li>Render at 100% quality for master files, lower for previews</li>
              <li>Create stems by muting channels in groups and bouncing each group separately</li>
            </ul>
          </div>

          <div className="content-card p-5">
            <h3 className="font-bold text-white mb-2">Project Organization</h3>
            <ul className="list-disc pl-5 space-y-2 text-purple-primary-300">
              <li>Color-code channels by instrument type (drums red, bass green, etc.)</li>
              <li>Use meaningful names for all tracks and patterns</li>
              <li>Group related tracks with group tracks</li>
              <li>Save project notes in the project information panel</li>
              <li>Organize samples in a "Project Samples" folder for portability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};