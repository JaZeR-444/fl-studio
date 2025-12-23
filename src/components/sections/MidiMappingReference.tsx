'use client';

import { useState } from 'react';

export const MidiMappingReference = () => {
  const [activeTab, setActiveTab] = useState('controllers');
  const [selectedController, setSelectedController] = useState<string | null>(null);

  // Common MIDI controllers for FL Studio
  const controllers = [
    {
      id: 'akai-mpk-mini',
      name: 'Akai MPK Mini',
      manufacturer: 'Akai',
      type: 'MIDI Controller',
      icon: '🎹',
      description: 'Compact keyboard controller with pads and knobs',
      commonMappings: [
        { control: 'Knob 1', function: 'Channel Volume', defaultParam: 'Volume' },
        { control: 'Knob 2', function: 'Filter Cutoff', defaultParam: 'Cutoff' },
        { control: 'Pad 1', function: 'Play Pattern', defaultParam: 'Trigger' },
        { control: 'Sustain', function: 'Sustain Pedal', defaultParam: 'Sustain' },
      ]
    },
    {
      id: 'novation-launchkey',
      name: 'Novation Launchkey',
      manufacturer: 'Novation',
      type: 'MIDI Controller',
      icon: '🎛️',
      description: 'Designed specifically for FL Studio integration',
      commonMappings: [
        { control: 'Knob 1-8', function: 'Mixer Track Volume', defaultParam: 'Volume' },
        { control: 'Pad 1-16', function: 'Pattern Trigger', defaultParam: 'Pattern' },
        { control: 'Transport', function: 'Play/Stop/Record', defaultParam: 'Transport' },
        { control: 'Octave', function: 'Transpose', defaultParam: 'Octave' },
      ]
    },
    {
      id: 'akai-fire',
      name: 'Akai Fire',
      manufacturer: 'Akai',
      type: 'Drum Controller',
      icon: '🔥',
      description: 'Designed specifically for FL Studio with Fire mode',
      commonMappings: [
        { control: 'Pad 1-16', function: 'Drum Sounds', defaultParam: 'Note' },
        { control: 'Play', function: 'Transport Play', defaultParam: 'Play' },
        { control: 'Record', function: 'Transport Record', defaultParam: 'Record' },
        { control: 'Step', function: 'Step Sequencer', defaultParam: 'Step' },
      ]
    },
    {
      id: 'ableton-push',
      name: 'Ableton Push',
      manufacturer: 'Ableton',
      type: 'Advanced Controller',
      icon: '⬛',
      description: 'Can be used with FL Studio via custom mappings',
      commonMappings: [
        { control: 'Pad 1-64', function: 'Step Sequencer', defaultParam: 'Step' },
        { control: 'Encoder 1-64', function: 'Parameter Control', defaultParam: 'Custom' },
        { control: 'Note', function: 'MIDI Note Input', defaultParam: 'Note' },
        { control: 'Session', function: 'Pattern Browser', defaultParam: 'Pattern' },
      ]
    }
  ];

  // Common MIDI CC messages
  const ccMessages = [
    { cc: 1, name: 'Modulation Wheel', description: 'Used for vibrato, filter modulation' },
    { cc: 7, name: 'Main Volume', description: 'Controls volume of assigned channel' },
    { cc: 10, name: 'Pan', description: 'Controls panning of assigned channel' },
    { cc: 11, name: 'Expression', description: 'Additional volume control' },
    { cc: 64, name: 'Sustain Pedal', description: 'Holds notes until released' },
    { cc: 71, name: 'Resonance', description: 'Controls filter resonance' },
    { cc: 74, name: 'Filter Cutoff', description: 'Controls filter cutoff frequency' },
    { cc: 75, name: 'Release', description: 'Controls envelope release time' },
    { cc: 76, name: 'Attack', description: 'Controls envelope attack time' },
    { cc: 77, name: 'Decay', description: 'Controls envelope decay time' },
    { cc: 91, name: 'Reverb Level', description: 'Controls amount of reverb' },
    { cc: 93, name: 'Chorus Level', description: 'Controls amount of chorus' },
  ];

  // Common MIDI notes for drum sounds
  const drumNotes = [
    { note: 36, name: 'Kick Drum', description: 'Kick or bass drum sound' },
    { note: 38, name: 'Snare Drum', description: 'Snare drum sound' },
    { note: 40, name: 'Snare Rim', description: 'Snare rimshot sound' },
    { note: 39, name: 'Clap', description: 'Hand clap sound' },
    { note: 42, name: 'Closed Hi-Hat', description: 'Closed high hat sound' },
    { note: 46, name: 'Open Hi-Hat', description: 'Open high hat sound' },
    { note: 49, name: 'Crash Cymbal', description: 'Crash cymbal sound' },
    { note: 57, name: 'Ride Cymbal', description: 'Ride cymbal sound' },
    { note: 51, name: 'Ride Bell', description: 'Ride bell sound' },
    { note: 44, name: 'Pedal Hi-Hat', description: 'Pedal high hat sound' },
  ];

  const tabs = [
    { id: 'controllers', label: 'Controllers', icon: '🎹' },
    { id: 'cc-messages', label: 'CC Messages', icon: '🔢' },
    { id: 'drum-notes', label: 'Drum Notes', icon: '🥁' }
  ];

  return (
    <section id="midi-mapping" className="page-section animate-fade">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">MIDI Mapping</span>
          <span className="text-white"> Reference</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          Complete guide to MIDI controllers, CC messages, and drum mapping.
        </p>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`px-5 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
              activeTab === tab.id
                ? 'bg-[var(--accent-primary)] text-white'
                : 'bg-[var(--glass-bg)] text-[var(--text-muted)] border border-[var(--glass-border)] hover:text-white'
            }`}
            onClick={() => {
              setActiveTab(tab.id);
              setSelectedController(null);
            }}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Controllers Tab */}
      {activeTab === 'controllers' && (
        <div>
          {selectedController ? (
            // Controller Detail View
            <div className="content-card p-6">
              <button
                onClick={() => setSelectedController(null)}
                className="flex items-center text-[var(--accent-tertiary)] hover:text-[var(--accent-secondary)] mb-6"
              >
                <span className="mr-2">←</span> Back to Controllers
              </button>
              
              {(() => {
                const controller = controllers.find(c => c.id === selectedController);
                if (!controller) return null;
                
                return (
                  <div>
                    {/* Controller Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-3xl">
                        {controller.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{controller.name}</h3>
                        <p className="text-[var(--text-muted)]">{controller.manufacturer} • {controller.type}</p>
                        <p className="text-sm text-[var(--text-secondary)] mt-2">{controller.description}</p>
                      </div>
                    </div>
                    
                    {/* Mappings Table */}
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">Default Mappings</h4>
                      <div className="overflow-x-auto rounded-lg border border-[var(--glass-border)]">
                        <table className="min-w-full">
                          <thead className="bg-[var(--glass-bg)]">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Control</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Function</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Parameter</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[var(--glass-border)]">
                            {controller.commonMappings.map((mapping, idx) => (
                              <tr key={idx} className="hover:bg-[var(--glass-bg-hover)]">
                                <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">{mapping.control}</td>
                                <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">{mapping.function}</td>
                                <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">{mapping.defaultParam}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      {/* How to Map */}
                      <div className="mt-6 p-4 rounded-lg bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.2)]">
                        <h5 className="font-bold text-yellow-300 mb-2">How to Map</h5>
                        <ol className="list-decimal pl-5 space-y-1 text-sm text-yellow-200/80">
                          <li>Enter MIDI learn mode in FL Studio (Options → Enable MIDI remote control)</li>
                          <li>Select the parameter you want to control</li>
                          <li>Move the physical control on your MIDI device</li>
                          <li>FL Studio will automatically map the control to that parameter</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          ) : (
            // Controller Grid View
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {controllers.map((controller) => (
                  <div 
                    key={controller.id} 
                    className="tool-card"
                    onClick={() => setSelectedController(controller.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-2xl shrink-0">
                        {controller.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white">{controller.name}</h4>
                        <p className="text-xs text-[var(--text-dim)]">{controller.manufacturer} • {controller.type}</p>
                        <p className="text-sm text-[var(--text-muted)] mt-2">{controller.description}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-[var(--glass-border)] flex justify-between items-center">
                      <span className="text-xs text-[var(--text-dim)]">
                        {controller.commonMappings.length} common mappings
                      </span>
                      <span className="text-xs text-[var(--accent-tertiary)]">View Details →</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* MIDI Mapping Steps */}
              <div className="content-card p-6">
                <h3 className="text-xl font-bold text-white mb-6">MIDI Mapping in FL Studio</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { step: '1', title: 'Connect', desc: 'Connect your MIDI controller via USB' },
                    { step: '2', title: 'Configure', desc: 'Go to Options → MIDI Settings' },
                    { step: '3', title: 'Enable', desc: 'Enable your controller and configure ports' }
                  ].map((item, idx) => (
                    <div key={idx} className="glass-card p-4">
                      <div className="w-8 h-8 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white font-bold mb-3">
                        {item.step}
                      </div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* CC Messages Tab */}
      {activeTab === 'cc-messages' && (
        <div>
          <div className="content-card p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Common MIDI CC Messages</h3>
            <p className="text-[var(--text-muted)] mb-6">
              MIDI Continuous Controller (CC) messages are used to control various parameters in your plugins and FL Studio itself.
            </p>
            
            <div className="overflow-x-auto rounded-lg border border-[var(--glass-border)]">
              <table className="min-w-full">
                <thead className="bg-[var(--glass-bg)]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">CC</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--glass-border)]">
                  {ccMessages.map((cc, idx) => (
                    <tr key={idx} className="hover:bg-[var(--glass-bg-hover)]">
                      <td className="px-4 py-3 text-sm font-mono text-[var(--accent-tertiary)]">{cc.cc}</td>
                      <td className="px-4 py-3 text-sm font-medium text-white">{cc.name}</td>
                      <td className="px-4 py-3 text-sm text-[var(--text-muted)]">{cc.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CC Usage Tips */}
          <div className="content-card p-6">
            <h4 className="text-lg font-bold text-white mb-4">How to Use CC Messages</h4>
            <ul className="space-y-3">
              {[
                { cc: 'CC 1 (Modulation)', desc: 'Commonly assigned to vibrato, filter modulation, or other modulation parameters' },
                { cc: 'CC 7 (Volume)', desc: 'Controls the volume of individual tracks or channels' },
                { cc: 'CC 10 (Pan)', desc: 'Controls the panning position of tracks in the stereo field' },
                { cc: 'CC 64 (Sustain)', desc: 'Activates sustain pedal behavior on instruments' },
                { cc: 'CC 71-77', desc: 'Control filter resonance, release, attack, decay, etc.' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start p-3 rounded-lg bg-[var(--glass-bg)]">
                  <span className="text-[var(--accent-secondary)] mr-3">•</span>
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-white">{item.cc}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Drum Notes Tab */}
      {activeTab === 'drum-notes' && (
        <div>
          <div className="content-card p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Drum Note Reference</h3>
            <p className="text-[var(--text-muted)] mb-6">
              Standard MIDI note numbers for different drum sounds (GM drum map).
            </p>
            
            <div className="overflow-x-auto rounded-lg border border-[var(--glass-border)]">
              <table className="min-w-full">
                <thead className="bg-[var(--glass-bg)]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Note</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--glass-border)]">
                  {drumNotes.map((note, idx) => (
                    <tr key={idx} className="hover:bg-[var(--glass-bg-hover)]">
                      <td className="px-4 py-3 text-sm font-mono text-[var(--accent-tertiary)]">{note.note}</td>
                      <td className="px-4 py-3 text-sm font-medium text-white">{note.name}</td>
                      <td className="px-4 py-3 text-sm text-[var(--text-muted)]">{note.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Drum Mapping Guide */}
          <div className="content-card p-6">
            <h4 className="text-lg font-bold text-white mb-4">Drum Mapping Guide</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-bold text-white mb-3">Akai Fire Pad Layout</h5>
                <div className="grid grid-cols-4 gap-2">
                  {['36-39', '40-43', '44-47', '48-51'].map((range, idx) => (
                    <div key={idx} className="glass-card p-3 text-center">
                      <div className="font-bold text-white text-sm">{range}</div>
                      <div className="text-xs text-[var(--text-dim)]">Row {idx + 1}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="font-bold text-white mb-3">Common Arrangements</h5>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li className="flex items-start">
                    <span className="text-[var(--accent-secondary)] mr-2">•</span>
                    Kick typically on note 36 (C1), snare on 38 (D1)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--accent-secondary)] mr-2">•</span>
                    Hi-hats on 42 (F#1 closed), 46 (A#1 open), 44 (F1 pedal)
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--accent-secondary)] mr-2">•</span>
                    Cymbals on 49 (C#2 crash), 57 (B2 ride)
                  </li>
                </ul>
              </div>
            </div>

            {/* Tip */}
            <div className="mt-6 p-4 rounded-lg bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)]">
              <h5 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
                <span>💡</span> Tip
              </h5>
              <p className="text-sm text-blue-200/80">
                When creating your own drum kits, stick to these standard mappings so your kits work with 
                existing patterns and drum software. You can always customize the sounds assigned to each note.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};