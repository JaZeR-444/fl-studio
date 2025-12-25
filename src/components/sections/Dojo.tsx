'use client';

import { useState } from 'react';

export const DojoSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Complete FL Studio keyboard shortcuts reference
  const shortcutCategories = [
    {
      id: 'transport',
      name: 'Global / Transport',
      icon: '▶️',
      shortcuts: [
        { action: 'Play / Stop', key: 'Space' },
        { action: 'Play from start', key: 'Ctrl + Space' },
        { action: 'Play from selection', key: 'Enter' },
        { action: 'Loop selected', key: 'Ctrl + Enter' },
        { action: 'Pause', key: 'Shift + Space' },
        { action: 'Tap tempo', key: 'Ctrl + T' },
        { action: 'Metronome on/off', key: 'Ctrl + P' },
        { action: 'Countdown before recording', key: 'Ctrl + M' },
        { action: 'Record', key: 'Ctrl + R' },
        { action: 'Typing keyboard to piano', key: 'Ctrl + H' },
        { action: 'Change tempo', key: 'Alt + Scroll Wheel' },
        { action: 'Change snap value', key: 'Shift + Scroll Wheel' },
        { action: 'Horizontal zoom', key: 'Ctrl + Scroll Wheel' },
        { action: 'Temporary snap disable', key: 'Ctrl + Right-Click' },
      ]
    },
    {
      id: 'file',
      name: 'File / Project',
      icon: '📁',
      shortcuts: [
        { action: 'New project', key: 'Ctrl + N' },
        { action: 'Open project', key: 'Ctrl + O' },
        { action: 'Save', key: 'Ctrl + S' },
        { action: 'Save as', key: 'Ctrl + Shift + S' },
        { action: 'Undo', key: 'Ctrl + Z' },
        { action: 'Redo', key: 'Ctrl + Shift + Z' },
        { action: 'Undo history', key: 'Ctrl + Alt + Z' },
        { action: 'Quick render', key: 'Ctrl + Q' },
        { action: 'Export', key: 'Ctrl + R' },
        { action: 'Render to WAV', key: 'Ctrl + Alt + R' },
      ]
    },
    {
      id: 'windows',
      name: 'Windows & Views',
      icon: '🪟',
      shortcuts: [
        { action: 'Playlist', key: 'F5' },
        { action: 'Channel Rack', key: 'F6' },
        { action: 'Piano Roll', key: 'F7' },
        { action: 'Plugin Picker', key: 'F8' },
        { action: 'Mixer', key: 'F9' },
        { action: 'Settings', key: 'F10' },
        { action: 'Project Info', key: 'F11' },
        { action: 'Close all windows', key: 'F12' },
        { action: 'Cycle windows', key: 'Ctrl + Tab' },
        { action: 'Show all plugins', key: 'Alt + F8' },
      ]
    },
    {
      id: 'channelrack',
      name: 'Channel Rack',
      icon: '🎚️',
      shortcuts: [
        { action: 'Add selected channel', key: 'Insert' },
        { action: 'Delete selected channel', key: 'Delete' },
        { action: 'Route to free mixer track', key: 'Ctrl + L' },
        { action: 'Route to next free mixer track', key: 'Ctrl + Shift + L' },
        { action: 'Select all', key: 'Ctrl + A' },
        { action: 'Copy', key: 'Ctrl + C' },
        { action: 'Paste', key: 'Ctrl + V' },
        { action: 'Cut', key: 'Ctrl + X' },
        { action: 'Duplicate', key: 'Ctrl + B' },
        { action: 'Reorder channels', key: 'Alt + ↑ / ↓' },
        { action: 'Multi-select', key: 'Shift + Click' },
        { action: 'Toggle select', key: 'Ctrl + Click' },
      ]
    },
    {
      id: 'playlist',
      name: 'Playlist',
      icon: '📋',
      shortcuts: [
        { action: 'Duplicate selection', key: 'Ctrl + B' },
        { action: 'Duplicate time', key: 'Ctrl + Shift + B' },
        { action: 'Deselect', key: 'Ctrl + D' },
        { action: 'Select all', key: 'Ctrl + A' },
        { action: 'Cut', key: 'Ctrl + X' },
        { action: 'Copy', key: 'Ctrl + C' },
        { action: 'Paste', key: 'Ctrl + V' },
        { action: 'Delete', key: 'Delete' },
        { action: 'Delete without prompt', key: 'Shift + Delete' },
        { action: 'Group', key: 'Ctrl + G' },
        { action: 'Ungroup', key: 'Ctrl + Shift + G' },
        { action: 'Group clips', key: 'Alt + G' },
        { action: 'Ungroup clips', key: 'Ctrl + Alt + G' },
        { action: 'Horizontal zoom', key: 'Ctrl + Scroll' },
        { action: 'Vertical zoom', key: 'Alt + Scroll' },
        { action: 'Zoom to selection', key: 'Ctrl + Mouse Wheel Click' },
        { action: 'Jump to start', key: 'Ctrl + Home' },
        { action: 'Jump to end', key: 'Ctrl + End' },
        { action: 'Duplicate clip', key: 'Alt + Drag' },
        { action: 'Move without snapping', key: 'Shift + Drag' },
        { action: 'Copy selection', key: 'Ctrl + Drag' },
        { action: 'Nudge clip', key: 'Alt + ← / →' },
        { action: 'Fine move', key: 'Shift + Alt + Drag' },
      ]
    },
    {
      id: 'pianoroll',
      name: 'Piano Roll',
      icon: '🎹',
      shortcuts: [
        { action: 'Draw tool', key: 'B' },
        { action: 'Paint tool', key: 'P' },
        { action: 'Erase tool', key: 'E' },
        { action: 'Cut tool', key: 'C' },
        { action: 'Mute tool', key: 'T' },
        { action: 'Slice tool', key: 'S' },
        { action: 'Zoom tool', key: 'Y' },
        { action: 'Select all', key: 'Ctrl + A' },
        { action: 'Duplicate', key: 'Ctrl + B' },
        { action: 'Copy', key: 'Ctrl + C' },
        { action: 'Paste', key: 'Ctrl + V' },
        { action: 'Cut', key: 'Ctrl + X' },
        { action: 'Copy notes', key: 'Alt + Drag' },
        { action: 'Fine placement', key: 'Shift + Drag' },
        { action: 'Transpose octave', key: 'Ctrl + ↑ / ↓' },
        { action: 'Transpose semitone', key: 'Shift + ↑ / ↓' },
        { action: 'Nudge pitch', key: 'Alt + ↑ / ↓' },
        { action: 'Move note', key: 'Ctrl + ← / →' },
        { action: 'Change note length', key: 'Shift + Mouse Wheel' },
        { action: 'Adjust velocity', key: 'Alt + Scroll' },
        { action: 'Adjust pan', key: 'Ctrl + Alt + Scroll' },
        { action: 'Quantize', key: 'Ctrl + Q' },
        { action: 'Quantize settings', key: 'Ctrl + Alt + Q' },
        { action: 'Legato', key: 'Ctrl + L' },
        { action: 'Chop', key: 'Ctrl + U' },
        { action: 'Glue', key: 'Ctrl + J' },
        { action: 'Mute selected notes', key: 'Ctrl + M' },
        { action: 'Unmute notes', key: 'Ctrl + Shift + M' },
        { action: 'Randomize', key: 'Ctrl + R' },
        { action: 'Randomizer settings', key: 'Ctrl + Shift + R' },
        { action: 'Scale highlighting', key: 'Ctrl + Alt + C' },
      ]
    },
    {
      id: 'mixer',
      name: 'Mixer',
      icon: '🎛️',
      shortcuts: [
        { action: 'Open Mixer', key: 'F9' },
        { action: 'Link channel to mixer', key: 'Ctrl + L' },
        { action: 'Route to next free insert', key: 'Ctrl + Shift + L' },
        { action: 'Reset knob', key: 'Alt + Click' },
        { action: 'Fine adjustment', key: 'Right-Click' },
        { action: 'Toggle mute / solo', key: 'Ctrl + Click' },
        { action: 'Add to selection', key: 'Shift + Click' },
        { action: 'Cut effects', key: 'Ctrl + X' },
        { action: 'Copy effects', key: 'Ctrl + C' },
        { action: 'Paste effects', key: 'Ctrl + V' },
        { action: 'Paste mixer state', key: 'Ctrl + Alt + V' },
        { action: 'Group tracks', key: 'Ctrl + G' },
        { action: 'Ungroup tracks', key: 'Ctrl + Shift + G' },
        { action: 'Adjust selected faders', key: 'Alt + Scroll' },
        { action: 'Zoom mixer', key: 'Ctrl + Scroll' },
      ]
    },
    {
      id: 'browser',
      name: 'Browser / Plugin Picker',
      icon: '🔍',
      shortcuts: [
        { action: 'Plugin picker', key: 'F8' },
        { action: 'Search browser', key: 'Ctrl + F' },
        { action: 'Load selected item', key: 'Enter' },
        { action: 'Context menu', key: 'Right-Click' },
        { action: 'Add to favorites', key: 'Ctrl + B' },
        { action: 'Remove from favorites', key: 'Ctrl + Alt + B' },
        { action: 'Scroll categories', key: 'Shift + Scroll' },
      ]
    },
    {
      id: 'audio',
      name: 'Audio Clips / Sampler',
      icon: '🔊',
      shortcuts: [
        { action: 'Edit in Edison', key: 'Ctrl + E' },
        { action: 'Send to Playlist', key: 'Ctrl + L' },
        { action: 'Send to new Playlist track', key: 'Ctrl + Shift + L' },
        { action: 'Reset parameter', key: 'Alt + Click' },
        { action: 'Stretch without snap', key: 'Shift + Drag' },
        { action: 'Time stretch', key: 'Ctrl + Drag' },
        { action: 'Slice tool', key: 'Alt + S' },
        { action: 'Undo audio edits', key: 'Ctrl + Alt + Z' },
      ]
    },
    {
      id: 'recording',
      name: 'Recording',
      icon: '🔴',
      shortcuts: [
        { action: 'Record', key: 'Ctrl + R' },
        { action: 'Audio recording options', key: 'Alt + R' },
        { action: 'Metronome', key: 'Ctrl + M' },
        { action: 'Pre-count', key: 'Ctrl + P' },
        { action: 'Mixer recording mode', key: 'Ctrl + Shift + M' },
        { action: 'Pause recording', key: 'Shift + Space' },
      ]
    },
    {
      id: 'snap',
      name: 'Snap / Grid / Selection',
      icon: '📐',
      shortcuts: [
        { action: 'Temporary snap', key: 'Ctrl' },
        { action: 'Fine movement', key: 'Shift' },
        { action: 'Ignore snap', key: 'Alt' },
        { action: 'Duplicate', key: 'Ctrl + Drag' },
        { action: 'Precision move', key: 'Shift + Ctrl' },
        { action: 'Bypass snapping', key: 'Ctrl + Right-Click' },
      ]
    },
    {
      id: 'misc',
      name: 'Misc / Power User',
      icon: '⚡',
      shortcuts: [
        { action: 'Show hint panel', key: 'Ctrl + Shift + H' },
        { action: 'Plugin info', key: 'Ctrl + Shift + I' },
        { action: 'Save new version', key: 'Ctrl + Alt + S' },
        { action: 'Panic (stop all sounds)', key: 'Ctrl + Shift + Backspace' },
        { action: 'Help', key: 'F1' },
        { action: 'Context help', key: 'Ctrl + F1' },
        { action: 'Copy values', key: 'Ctrl + Alt + C' },
        { action: 'Paste values', key: 'Ctrl + Alt + V' },
      ]
    }
  ];

  // Get all shortcuts or filtered by category
  const getFilteredShortcuts = () => {
    let shortcuts = activeCategory === 'all' 
      ? shortcutCategories.flatMap(cat => cat.shortcuts.map(s => ({ ...s, category: cat.name, icon: cat.icon })))
      : shortcutCategories.find(cat => cat.id === activeCategory)?.shortcuts.map(s => {
          const cat = shortcutCategories.find(c => c.id === activeCategory);
          return { ...s, category: cat?.name, icon: cat?.icon };
        }) || [];

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      shortcuts = shortcuts.filter(s => 
        s.action.toLowerCase().includes(term) || 
        s.key.toLowerCase().includes(term)
      );
    }

    return shortcuts;
  };

  const filteredShortcuts = getFilteredShortcuts();
  const totalShortcuts = shortcutCategories.reduce((acc, cat) => acc + cat.shortcuts.length, 0);

  return (
    <section id="dojo" className="page-section animate-fade">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Shortcut</span>
          <span className="text-white"> Dojo</span>
        </h2>
        <p className="text-[var(--text-muted)]">
          Master the keyboard to speed up your workflow 10x.
        </p>
      </div>

      {/* Hero Card */}
      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/20 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
              <span className="text-3xl">🥋</span>
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">Become a Speed Demon</h3>
            <p className="text-purple-200/80 mb-3">
              Every second saved on a click is a second gained for creativity. Learn the key commands used by power users.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">{totalShortcuts}</span>
                <span className="text-purple-200/60">Total Shortcuts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">12</span>
                <span className="text-purple-200/60">Categories</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="content-card p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="search-bar">
              <svg className="w-4 h-4 text-[var(--text-dim)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search shortcuts... (e.g. 'quantize' or 'Ctrl + Q')"
                className="flex-1"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="text-[var(--text-dim)] hover:text-white">
                  ✕
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center text-sm text-[var(--text-muted)]">
            <span className="text-white font-bold">{filteredShortcuts.length}</span>
            <span className="ml-1">shortcuts</span>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
            activeCategory === 'all'
              ? 'bg-[var(--accent-primary)] text-white'
              : 'bg-[var(--glass-bg)] text-[var(--text-muted)] hover:text-white border border-[var(--glass-border)]'
          }`}
        >
          All ({totalShortcuts})
        </button>
        {shortcutCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
              activeCategory === cat.id
                ? 'bg-[var(--accent-primary)] text-white'
                : 'bg-[var(--glass-bg)] text-[var(--text-muted)] hover:text-white border border-[var(--glass-border)]'
            }`}
          >
            <span>{cat.icon}</span>
            <span className="hidden sm:inline">{cat.name}</span>
            <span className="text-[var(--text-dim)]">({cat.shortcuts.length})</span>
          </button>
        ))}
      </div>

      {/* Shortcuts List */}
      <div className="content-card overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-[var(--glass-bg)] border-b border-[var(--glass-border)] text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
          <div className="col-span-1"></div>
          <div className="col-span-6 md:col-span-5">Action</div>
          <div className="col-span-5 md:col-span-4">Shortcut</div>
          <div className="col-span-2 hidden md:block">Category</div>
        </div>

        {/* Shortcuts */}
        <div className="divide-y divide-[var(--glass-border)] max-h-[600px] overflow-y-auto">
          {filteredShortcuts.length > 0 ? (
            filteredShortcuts.map((shortcut, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-[var(--glass-bg-hover)] transition-colors items-center"
              >
                <div className="col-span-1 text-lg">{shortcut.icon}</div>
                <div className="col-span-6 md:col-span-5 text-white">{shortcut.action}</div>
                <div className="col-span-5 md:col-span-4">
                  <kbd className="inline-flex items-center px-2 py-1 rounded bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--accent-tertiary)] font-mono text-xs">
                    {shortcut.key}
                  </kbd>
                </div>
                <div className="col-span-2 hidden md:block text-xs text-[var(--text-dim)]">{shortcut.category}</div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-[var(--text-muted)]">No shortcuts found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Tip */}
      <div className="mt-6 p-4 rounded-lg bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)]">
        <h4 className="font-bold text-[var(--accent-tertiary)] mb-2 flex items-center gap-2">
          <span>💡</span> Pro Tips
        </h4>
        <ul className="text-sm text-[var(--text-muted)] space-y-1">
          <li>• Start with <kbd className="px-1.5 py-0.5 rounded bg-[var(--glass-bg)] text-[var(--accent-tertiary)] font-mono text-xs">F5</kbd> <kbd className="px-1.5 py-0.5 rounded bg-[var(--glass-bg)] text-[var(--accent-tertiary)] font-mono text-xs">F6</kbd> <kbd className="px-1.5 py-0.5 rounded bg-[var(--glass-bg)] text-[var(--accent-tertiary)] font-mono text-xs">F7</kbd> <kbd className="px-1.5 py-0.5 rounded bg-[var(--glass-bg)] text-[var(--accent-tertiary)] font-mono text-xs">F9</kbd> — the core window shortcuts</li>
          <li>• Use <kbd className="px-1.5 py-0.5 rounded bg-[var(--glass-bg)] text-[var(--accent-tertiary)] font-mono text-xs">Ctrl + H</kbd> to use your typing keyboard as a MIDI input</li>
          <li>• <kbd className="px-1.5 py-0.5 rounded bg-[var(--glass-bg)] text-[var(--accent-tertiary)] font-mono text-xs">Ctrl + Shift + Backspace</kbd> is your panic button — stops all sounds instantly</li>
        </ul>
      </div>
    </section>
  );
};