// components/sections/MidiMappingReference.tsx
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
      image: 'https://placehold.co/150x100?text=MPK+Mini',
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
      image: 'https://placehold.co/150x100?text=Launchkey',
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
      image: 'https://placehold.co/150x100?text=Fire',
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
      image: 'https://placehold.co/150x100?text=Push',
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
    { note: 59, name: 'Splash Cymbal', description: 'Splash cymbal sound' },
    { note: 55, name: 'Splash Cymbal', description: 'Splash cymbal sound' },
  ];

  return (
    <section id="midi-mapping" className="page-section">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-white mb-6">MIDI Mapping Reference</h2>
        
        <div className="mb-6">
          <div className="flex space-x-1 border-b border-stone-200 dark:border-zinc-700 mb-4">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'controllers'
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-stone-500 hover:text-stone-700 dark:text-zinc-400 dark:hover:text-zinc-300'
              }`}
              onClick={() => {
                setActiveTab('controllers');
                setSelectedController(null);
              }}
            >
              Controllers
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'cc-messages'
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-stone-500 hover:text-stone-700 dark:text-zinc-400 dark:hover:text-zinc-300'
              }`}
              onClick={() => {
                setActiveTab('cc-messages');
                setSelectedController(null);
              }}
            >
              CC Messages
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'drum-notes'
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-stone-500 hover:text-stone-700 dark:text-zinc-400 dark:hover:text-zinc-300'
              }`}
              onClick={() => {
                setActiveTab('drum-notes');
                setSelectedController(null);
              }}
            >
              Drum Notes
            </button>
          </div>
        </div>

        {/* Controllers Tab */}
        {activeTab === 'controllers' && (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-4">Popular MIDI Controllers</h3>
              
              {selectedController ? (
                <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6">
                  <button
                    onClick={() => setSelectedController(null)}
                    className="flex items-center text-orange-600 dark:text-orange-400 mb-4"
                  >
                    <span className="mr-2">←</span> Back to Controllers
                  </button>
                  
                  {(() => {
                    const controller = controllers.find(c => c.id === selectedController);
                    if (!controller) return null;
                    
                    return (
                      <div>
                        <div className="flex items-start mb-6">
                          <img 
                            src={controller.image} 
                            alt={controller.name}
                            className="w-32 h-20 object-contain bg-stone-200 dark:bg-zinc-700 rounded mr-6"
                          />
                          <div>
                            <h4 className="text-2xl font-bold text-stone-900 dark:text-white">{controller.name}</h4>
                            <p className="text-stone-600 dark:text-zinc-400">{controller.manufacturer} • {controller.type}</p>
                            <p className="mt-2 text-stone-700 dark:text-zinc-300">{controller.description}</p>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <h5 className="text-lg font-bold text-stone-800 dark:text-white mb-4">Default Mappings</h5>
                          <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-stone-200 dark:divide-zinc-700">
                              <thead>
                                <tr>
                                  <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 dark:text-zinc-400 uppercase tracking-wider">Control</th>
                                  <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 dark:text-zinc-400 uppercase tracking-wider">Function</th>
                                  <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 dark:text-zinc-400 uppercase tracking-wider">Parameter</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-stone-200 dark:divide-zinc-700">
                                {controller.commonMappings.map((mapping, idx) => (
                                  <tr key={idx} className="hover:bg-stone-50 dark:hover:bg-zinc-700">
                                    <td className="px-4 py-3 text-sm text-stone-700 dark:text-zinc-300">{mapping.control}</td>
                                    <td className="px-4 py-3 text-sm text-stone-700 dark:text-zinc-300">{mapping.function}</td>
                                    <td className="px-4 py-3 text-sm text-stone-700 dark:text-zinc-300">{mapping.defaultParam}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          
                          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                            <h6 className="font-bold text-amber-800 dark:text-amber-200">How to Map</h6>
                            <ol className="list-decimal pl-5 mt-2 space-y-1 text-amber-700 dark:text-amber-300 text-sm">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {controllers.map((controller) => (
                    <div 
                      key={controller.id} 
                      className="bg-white dark:bg-zinc-800 rounded-xl shadow-md border border-stone-200 dark:border-zinc-700 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setSelectedController(controller.id)}
                    >
                      <div className="p-5">
                        <div className="flex items-start">
                          <img 
                            src={controller.image} 
                            alt={controller.name}
                            className="w-20 h-14 object-contain bg-stone-200 dark:bg-zinc-700 rounded mr-4"
                          />
                          <div>
                            <h4 className="font-bold text-stone-800 dark:text-white">{controller.name}</h4>
                            <p className="text-sm text-stone-500 dark:text-zinc-400">{controller.manufacturer} • {controller.type}</p>
                            <p className="text-sm text-stone-600 dark:text-zinc-400 mt-2">{controller.description}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-stone-100 dark:border-zinc-700">
                          <p className="text-xs text-stone-500 dark:text-zinc-400">
                            {controller.commonMappings.length} common mappings
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6">
              <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-4">MIDI Mapping in FL Studio</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-stone-50 dark:bg-zinc-700/30 rounded-lg">
                  <h4 className="font-bold text-stone-800 dark:text-white mb-2">Step 1</h4>
                  <p className="text-sm text-stone-600 dark:text-zinc-400">Connect your MIDI controller to your computer via USB</p>
                </div>
                <div className="p-4 bg-stone-50 dark:bg-zinc-700/30 rounded-lg">
                  <h4 className="font-bold text-stone-800 dark:text-white mb-2">Step 2</h4>
                  <p className="text-sm text-stone-600 dark:text-zinc-400">Open FL Studio and go to Options → MIDI Settings</p>
                </div>
                <div className="p-4 bg-stone-50 dark:bg-zinc-700/30 rounded-lg">
                  <h4 className="font-bold text-stone-800 dark:text-white mb-2">Step 3</h4>
                  <p className="text-sm text-stone-600 dark:text-zinc-400">Enable your controller and configure input/output ports</p>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-stone-50 dark:bg-zinc-700/30 rounded-lg">
                  <h4 className="font-bold text-stone-800 dark:text-white mb-2">MIDI Learn</h4>
                  <p className="text-sm text-stone-600 dark:text-zinc-400">Right-click any knob/slider and select "Learn last CC" to assign it to a MIDI control</p>
                </div>
                <div className="p-4 bg-stone-50 dark:bg-zinc-700/30 rounded-lg">
                  <h4 className="font-bold text-stone-800 dark:text-white mb-2">Fire Mode</h4>
                  <p className="text-sm text-stone-600 dark:text-zinc-400">Akai Fire controllers have dedicated Fire mode for optimal FL Studio integration</p>
                </div>
                <div className="p-4 bg-stone-50 dark:bg-zinc-700/30 rounded-lg">
                  <h4 className="font-bold text-stone-800 dark:text-white mb-2">Presets</h4>
                  <p className="text-sm text-stone-600 dark:text-zinc-400">Save your custom mappings as presets for different projects</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CC Messages Tab */}
        {activeTab === 'cc-messages' && (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-4">Common MIDI CC Messages</h3>
              <p className="text-stone-600 dark:text-zinc-400 mb-6">
                MIDI Continuous Controller (CC) messages are used to control various parameters in your plugins and FL Studio itself. 
                These are the most commonly used CC messages in FL Studio.
              </p>
            </div>
            
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-stone-200 dark:divide-zinc-700">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 dark:text-zinc-400 uppercase tracking-wider">CC</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 dark:text-zinc-400 uppercase tracking-wider">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 dark:text-zinc-400 uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-zinc-700">
                    {ccMessages.map((cc, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 dark:hover:bg-zinc-700">
                        <td className="px-4 py-3 text-sm font-mono text-stone-700 dark:text-zinc-300">{cc.cc}</td>
                        <td className="px-4 py-3 text-sm font-medium text-stone-700 dark:text-zinc-300">{cc.name}</td>
                        <td className="px-4 py-3 text-sm text-stone-600 dark:text-zinc-400">{cc.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6">
              <h4 className="text-lg font-bold text-stone-800 dark:text-white mb-3">How to Use CC Messages</h4>
              <ul className="space-y-2 text-stone-600 dark:text-zinc-400">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span><strong>CC 1 (Modulation):</strong> Commonly assigned to vibrato, filter modulation, or other modulation parameters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span><strong>CC 7 (Volume):</strong> Controls the volume of individual tracks or channels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span><strong>CC 10 (Pan):</strong> Controls the panning position of tracks in the stereo field</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span><strong>CC 64 (Sustain):</strong> Activates sustain pedal behavior on instruments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span><strong>CC 71-77 (Sound Controls):</strong> Control filter resonance, release, attack, decay, etc.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Drum Notes Tab */}
        {activeTab === 'drum-notes' && (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-4">Drum Note Reference</h3>
              <p className="text-stone-600 dark:text-zinc-400 mb-6">
                When using MIDI pads to trigger drum sounds, these are the standard MIDI note numbers for different drum sounds. 
                The most common mapping is the GM (General MIDI) drum map.
              </p>
            </div>
            
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-stone-200 dark:divide-zinc-700">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 dark:text-zinc-400 uppercase tracking-wider">Note</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 dark:text-zinc-400 uppercase tracking-wider">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 dark:text-zinc-400 uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-zinc-700">
                    {drumNotes.map((note, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 dark:hover:bg-zinc-700">
                        <td className="px-4 py-3 text-sm font-mono text-stone-700 dark:text-zinc-300">{note.note}</td>
                        <td className="px-4 py-3 text-sm font-medium text-stone-700 dark:text-zinc-300">{note.name}</td>
                        <td className="px-4 py-3 text-sm text-stone-600 dark:text-zinc-400">{note.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-stone-200 dark:border-zinc-700 p-6">
              <h4 className="text-lg font-bold text-stone-800 dark:text-white mb-3">Drum Mapping Guide</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold text-stone-800 dark:text-white mb-2">Akai Fire Pad Layout</h5>
                  <div className="grid grid-cols-4 gap-2">
                    {['36-39', '40-43', '44-47', '48-51'].map((range, idx) => (
                      <div key={idx} className="p-3 bg-stone-100 dark:bg-zinc-700 rounded text-center text-sm">
                        <div className="font-bold">{range}</div>
                        <div className="text-xs text-stone-500 dark:text-zinc-400">Row {idx+1}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-stone-800 dark:text-white mb-2">Common Arrangements</h5>
                  <ul className="space-y-2 text-stone-600 dark:text-zinc-400 text-sm">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Kick typically on note 36 (C1), snare on 38 (D1)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Hi-hats on 42 (F#1 closed), 46 (A#1 open), 44 (F1 pedal)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Cymbals on 49 (C#2 crash), 55 (F#2 splash), 57 (B2 ride)</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h6 className="font-bold text-blue-800 dark:text-blue-200">Tip</h6>
                <p className="mt-1 text-blue-700 dark:text-blue-300 text-sm">
                  When creating your own drum kits, stick to these standard mappings so your kits work with 
                  existing patterns and drum software. You can always customize the sounds assigned to each note.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};