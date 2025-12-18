// components/TemplateEditor.tsx
import { useState } from 'react';
import { ProjectTemplate, Channel, MixerTrack, Pattern, PlaylistClip } from '@/types';

interface TemplateEditorProps {
  template: ProjectTemplate;
  onSave: (template: ProjectTemplate) => void;
  onCancel: () => void;
}

export const TemplateEditor = ({ template, onSave, onCancel }: TemplateEditorProps) => {
  const [editedTemplate, setEditedTemplate] = useState<ProjectTemplate>(template);
  const [activeTab, setActiveTab] = useState('channels');
  const [newChannelName, setNewChannelName] = useState('');
  const [newChannelPlugin, setNewChannelPlugin] = useState('');
  const [newMixerTrackName, setNewMixerTrackName] = useState('');
  const [newPatternName, setNewPatternName] = useState('');
  const [newPatternChannel, setNewPatternChannel] = useState('');

  const handleSave = () => {
    setEditedTemplate({
      ...editedTemplate,
      dateModified: new Date()
    });
    onSave(editedTemplate);
  };

  const addChannel = () => {
    if (!newChannelName.trim() || !newChannelPlugin.trim()) return;

    const newChannel: Channel = {
      id: `channel-${Date.now()}`,
      name: newChannelName,
      plugin: newChannelPlugin,
      color: '#3b82f6', // Default blue
      volume: 100,
      pan: 0,
      muted: false,
      soloed: false
    };

    setEditedTemplate({
      ...editedTemplate,
      channels: [...editedTemplate.channels, newChannel]
    });

    setNewChannelName('');
    setNewChannelPlugin('');
  };

  const removeChannel = (id: string) => {
    setEditedTemplate({
      ...editedTemplate,
      channels: editedTemplate.channels.filter(channel => channel.id !== id)
    });
  };

  const addMixerTrack = () => {
    if (!newMixerTrackName.trim()) return;

    const newTrack: MixerTrack = {
      id: `track-${Date.now()}`,
      name: newMixerTrackName,
      volume: 100,
      pan: 0,
      muted: false,
      soloed: false,
      effects: []
    };

    setEditedTemplate({
      ...editedTemplate,
      mixerTracks: [...editedTemplate.mixerTracks, newTrack]
    });

    setNewMixerTrackName('');
  };

  const removeMixerTrack = (id: string) => {
    setEditedTemplate({
      ...editedTemplate,
      mixerTracks: editedTemplate.mixerTracks.filter(track => track.id !== id)
    });
  };

  const addPattern = () => {
    if (!newPatternName.trim() || !newPatternChannel.trim()) return;

    const newPattern: Pattern = {
      id: `pattern-${Date.now()}`,
      name: newPatternName,
      length: 16, // Default 16 steps
      channel: newPatternChannel
    };

    setEditedTemplate({
      ...editedTemplate,
      patterns: [...editedTemplate.patterns, newPattern]
    });

    setNewPatternName('');
    setNewPatternChannel('');
  };

  const removePattern = (id: string) => {
    setEditedTemplate({
      ...editedTemplate,
      patterns: editedTemplate.patterns.filter(pattern => pattern.id !== id)
    });
  };

  // Common plugins for the dropdown
  const plugins = [
    'Sytrus', 'FLEX', 'GMS', 'Harmless', '3xOsc', 'Dash', 'Gross Beat',
    'Morphine', 'PoiZone', 'Sakura', 'Sawer', 'Sawer2', 'Transient Processor',
    'Fruity Convolver', 'Fruity Fast Dist', 'Fruity Limiter', 'Fruity Love Philter',
    'Fruity Soft Clipper', 'Maxim 4', 'Ozone', 'Patcher', 'PoiZone', 'Proxy'
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-xl border border-stone-200 dark:border-zinc-700 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b border-stone-200 dark:border-zinc-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-stone-900 dark:text-white">
              Editing: {editedTemplate.name}
            </h3>
            <button 
              onClick={onCancel}
              className="text-stone-500 hover:text-stone-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex space-x-1 border-b border-stone-200 dark:border-zinc-700">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'channels'
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-stone-500 hover:text-stone-700 dark:text-zinc-400 dark:hover:text-zinc-300'
              }`}
              onClick={() => setActiveTab('channels')}
            >
              Channels
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'mixer'
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-stone-500 hover:text-stone-700 dark:text-zinc-400 dark:hover:text-zinc-300'
              }`}
              onClick={() => setActiveTab('mixer')}
            >
              Mixer Tracks
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'patterns'
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-stone-500 hover:text-stone-700 dark:text-zinc-400 dark:hover:text-zinc-300'
              }`}
              onClick={() => setActiveTab('patterns')}
            >
              Patterns
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {/* Channels Tab */}
          {activeTab === 'channels' && (
            <div>
              <div className="mb-6">
                <h4 className="font-bold text-stone-800 dark:text-white mb-3">Add New Channel</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={newChannelName}
                    onChange={(e) => setNewChannelName(e.target.value)}
                    placeholder="Channel name"
                    className="p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <select
                    value={newChannelPlugin}
                    onChange={(e) => setNewChannelPlugin(e.target.value)}
                    className="p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select Plugin</option>
                    {plugins.map(plugin => (
                      <option key={plugin} value={plugin}>{plugin}</option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={addChannel}
                  disabled={!newChannelName.trim() || !newChannelPlugin.trim()}
                  className={`mt-3 px-4 py-2 rounded ${
                    newChannelName.trim() && newChannelPlugin.trim()
                      ? 'bg-orange-600 hover:bg-orange-700 text-white'
                      : 'bg-stone-200 dark:bg-zinc-700 text-stone-500 dark:text-zinc-400 cursor-not-allowed'
                  }`}
                >
                  Add Channel
                </button>
              </div>

              <div>
                <h4 className="font-bold text-stone-800 dark:text-white mb-3">Existing Channels</h4>
                <div className="space-y-2">
                  {editedTemplate.channels.map(channel => (
                    <div key={channel.id} className="flex justify-between items-center p-3 bg-stone-50 dark:bg-zinc-700 rounded-lg">
                      <div>
                        <span className="font-medium">{channel.name}</span>
                        <span className="ml-2 text-sm text-stone-500 dark:text-zinc-400">({channel.plugin})</span>
                      </div>
                      <button
                        onClick={() => removeChannel(channel.id)}
                        className="text-red-500 hover:text-red-700 px-2 py-1 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  {editedTemplate.channels.length === 0 && (
                    <p className="text-stone-500 dark:text-zinc-400 text-center py-4">No channels added yet</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Mixer Tracks Tab */}
          {activeTab === 'mixer' && (
            <div>
              <div className="mb-6">
                <h4 className="font-bold text-stone-800 dark:text-white mb-3">Add New Mixer Track</h4>
                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    value={newMixerTrackName}
                    onChange={(e) => setNewMixerTrackName(e.target.value)}
                    placeholder="Track name (e.g., Drums, Vocals, Master)"
                    className="p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <button
                  onClick={addMixerTrack}
                  disabled={!newMixerTrackName.trim()}
                  className={`mt-3 px-4 py-2 rounded ${
                    newMixerTrackName.trim()
                      ? 'bg-orange-600 hover:bg-orange-700 text-white'
                      : 'bg-stone-200 dark:bg-zinc-700 text-stone-500 dark:text-zinc-400 cursor-not-allowed'
                  }`}
                >
                  Add Mixer Track
                </button>
              </div>

              <div>
                <h4 className="font-bold text-stone-800 dark:text-white mb-3">Existing Mixer Tracks</h4>
                <div className="space-y-2">
                  {editedTemplate.mixerTracks.map(track => (
                    <div key={track.id} className="flex justify-between items-center p-3 bg-stone-50 dark:bg-zinc-700 rounded-lg">
                      <div>
                        <span className="font-medium">{track.name}</span>
                      </div>
                      <button
                        onClick={() => removeMixerTrack(track.id)}
                        className="text-red-500 hover:text-red-700 px-2 py-1 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  {editedTemplate.mixerTracks.length === 0 && (
                    <p className="text-stone-500 dark:text-zinc-400 text-center py-4">No mixer tracks added yet</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Patterns Tab */}
          {activeTab === 'patterns' && (
            <div>
              <div className="mb-6">
                <h4 className="font-bold text-stone-800 dark:text-white mb-3">Add New Pattern</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={newPatternName}
                    onChange={(e) => setNewPatternName(e.target.value)}
                    placeholder="Pattern name"
                    className="p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <select
                    value={newPatternChannel}
                    onChange={(e) => setNewPatternChannel(e.target.value)}
                    className="p-2 border border-stone-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select Channel</option>
                    {editedTemplate.channels.map(channel => (
                      <option key={channel.id} value={channel.id}>{channel.name}</option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={addPattern}
                  disabled={!newPatternName.trim() || !newPatternChannel.trim()}
                  className={`mt-3 px-4 py-2 rounded ${
                    newPatternName.trim() && newPatternChannel.trim()
                      ? 'bg-orange-600 hover:bg-orange-700 text-white'
                      : 'bg-stone-200 dark:bg-zinc-700 text-stone-500 dark:text-zinc-400 cursor-not-allowed'
                  }`}
                >
                  Add Pattern
                </button>
              </div>

              <div>
                <h4 className="font-bold text-stone-800 dark:text-white mb-3">Existing Patterns</h4>
                <div className="space-y-2">
                  {editedTemplate.patterns.map(pattern => {
                    const channel = editedTemplate.channels.find(c => c.id === pattern.channel);
                    return (
                      <div key={pattern.id} className="flex justify-between items-center p-3 bg-stone-50 dark:bg-zinc-700 rounded-lg">
                        <div>
                          <span className="font-medium">{pattern.name}</span>
                          <span className="ml-2 text-sm text-stone-500 dark:text-zinc-400">
                            ({channel ? channel.name : 'Unknown Channel'})
                          </span>
                        </div>
                        <button
                          onClick={() => removePattern(pattern.id)}
                          className="text-red-500 hover:text-red-700 px-2 py-1 rounded"
                        >
                          Remove
                        </button>
                      </div>
                    );
                  })}
                  {editedTemplate.patterns.length === 0 && (
                    <p className="text-stone-500 dark:text-zinc-400 text-center py-4">No patterns added yet</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-stone-200 dark:border-zinc-700 flex justify-end space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-stone-300 dark:border-zinc-600 rounded-lg text-sm font-medium text-stone-700 dark:text-zinc-300 hover:bg-stone-50 dark:hover:bg-zinc-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium"
          >
            Save Template
          </button>
        </div>
      </div>
    </div>
  );
};