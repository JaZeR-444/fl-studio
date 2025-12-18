import { useState } from 'react';
import { TroubleshootingData, SymptomOption } from '@/types';

export const TroubleshootSection = () => {
  const [selectedSymptom, setSelectedSymptom] = useState('');

  const troubleshootingData: TroubleshootingData = {
    crackling: [
      "Increase Buffer length (256/512smp)",
      "Check High Performance Power Plan",
      "Use Smart Disable",
      "Update audio drivers"
    ],
    latency: [
      "Lower buffer to 128smp",
      "Use ASIO driver",
      "Disable Master FX",
      "Close other audio applications"
    ],
    'plugin-not-loading': [
      "Check plugin compatibility",
      "Verify plugin location",
      "Rescan plugins in preferences",
      "Check for 32/64-bit mismatch"
    ],
    'no-audio-output': [
      "Check audio driver in F12 settings",
      "Verify correct audio interface is selected",
      "Check if other applications are using the device",
      "Restart audio interface"
    ],
    'cpu-high': [
      "Freeze heavy channels",
      "Use channel disabling",
      "Lower sample quality in preview",
      "Close unnecessary plugins"
    ]
  };

  const symptoms: SymptomOption[] = [
    { value: '', label: '-- Select a Symptom --' },
    { value: 'crackling', label: 'Audio is crackling' },
    { value: 'latency', label: 'High latency' },
    { value: 'plugin-not-loading', label: 'Plugin not loading' },
    { value: 'no-audio-output', label: 'No audio output' },
    { value: 'cpu-high', label: 'High CPU usage' }
  ];

  return (
    <section id="troubleshoot" className="page-section">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-4">Troubleshooting</h2>
        <div className="bg-white dark:bg-zinc-800 rounded-xl border border-stone-200 dark:border-zinc-700 p-8 shadow-sm">
          <select
            id="symptom-select"
            value={selectedSymptom}
            onChange={(e) => setSelectedSymptom(e.target.value)}
            className="w-full p-3 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
          >
            {symptoms.map((symptom) => (
              <option key={symptom.value} value={symptom.value}>
                {symptom.label}
              </option>
            ))}
          </select>
          {selectedSymptom && (
            <div className="border-t border-stone-100 dark:border-zinc-700 pt-6 mt-6">
              <ul id="fixes-list" className="list-disc pl-5 text-sm text-stone-700 dark:text-zinc-300 space-y-2">
                {troubleshootingData[selectedSymptom]?.map((fix, index) => (
                  <li key={index} className="ml-5">{fix}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg border border-stone-200 dark:border-zinc-700">
            <h3 className="font-bold text-stone-800 dark:text-zinc-200 mb-3">Performance Tips</h3>
            <ul className="space-y-2 text-stone-600 dark:text-zinc-400">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Use F9 to disable channels not currently being worked on</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Freeze tracks that are CPU intensive with many plugins</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Use lower sample quality during composition (switch to high for export)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Enable "Low quality preview" when working with many tracks</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg border border-stone-200 dark:border-zinc-700">
            <h3 className="font-bold text-stone-800 dark:text-zinc-200 mb-3">Common Issues</h3>
            <ul className="space-y-2 text-stone-600 dark:text-zinc-400">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>MIDI not responding: Check MIDI settings and device configuration</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Patterns not triggering: Verify correct routing and note events</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Plugin latency: Enable PDC and check plugin settings</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>Memory issues: Close unused projects and freeze tracks</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};