export const ExportSection = () => {
  return (
    <section id="export" className="page-section">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-4">Export & Project Hygiene</h2>
        <div className="bg-white dark:bg-zinc-800 rounded-lg border border-stone-200 dark:border-zinc-700 overflow-hidden mb-8">
          <table className="w-full text-sm text-left">
            <thead className="bg-stone-100 dark:bg-zinc-700 text-stone-700 dark:text-zinc-300 font-bold uppercase text-xs">
              <tr>
                <th className="p-4">Context</th>
                <th className="p-4">Format</th>
                <th className="p-4">Quality</th>
                <th className="p-4">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 dark:divide-zinc-700">
              <tr>
                <td className="p-4 text-stone-800 dark:text-zinc-200">Master</td>
                <td className="p-4 text-stone-600 dark:text-zinc-400">WAV (24-bit)</td>
                <td className="p-4 text-stone-600 dark:text-zinc-400">High</td>
                <td className="p-4 text-stone-600 dark:text-zinc-400">For professional mastering</td>
              </tr>
              <tr>
                <td className="p-4 text-stone-800 dark:text-zinc-200">Distribution</td>
                <td className="p-4 text-stone-600 dark:text-zinc-400">MP3 (320kbps)</td>
                <td className="p-4 text-stone-600 dark:text-zinc-400">Good</td>
                <td className="p-4 text-stone-600 dark:text-zinc-400">For streaming platforms</td>
              </tr>
              <tr>
                <td className="p-4 text-stone-800 dark:text-zinc-200">Preview</td>
                <td className="p-4 text-stone-600 dark:text-zinc-400">MP3 (128kbps)</td>
                <td className="p-4 text-stone-600 dark:text-zinc-400">Low</td>
                <td className="p-4 text-stone-600 dark:text-zinc-400">Quick sharing</td>
              </tr>
              <tr>
                <td className="p-4 text-stone-800 dark:text-zinc-200">Stems</td>
                <td className="p-4 text-stone-600 dark:text-zinc-400">WAV (24-bit)</td>
                <td className="p-4 text-stone-600 dark:text-zinc-400">High</td>
                <td className="p-4 text-stone-600 dark:text-zinc-400">For remixing/collaboration</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg border border-stone-200 dark:border-zinc-700">
            <h3 className="font-bold text-stone-800 dark:text-zinc-200 mb-2">Export Best Practices</h3>
            <ul className="list-disc pl-5 space-y-2 text-stone-600 dark:text-zinc-400">
              <li>Always bounce with "Wait for next step/beat" enabled for consistent timing</li>
              <li>Use "Sinc (Best)" interpolation for highest quality sample rate conversion</li>
              <li>Disable "Dithering" for 24-bit exports, enable for 16-bit</li>
              <li>Render at 100% quality for master files, lower for previews</li>
              <li>Create stems by muting channels in groups and bouncing each group separately</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg border border-stone-200 dark:border-zinc-700">
            <h3 className="font-bold text-stone-800 dark:text-zinc-200 mb-2">Project Organization</h3>
            <ul className="list-disc pl-5 space-y-2 text-stone-600 dark:text-zinc-400">
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