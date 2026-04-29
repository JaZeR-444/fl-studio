# UI Map And Signal Flow: FL Studio Mobile (Plugin)

## UI Tour
The plugin interface mirrors the mobile app exactly, with floating windows and a multi-tab system. [SRC: IL-MAN]

### 1. The Playlist (Main View)
- **Track List**: Shows up to 99 tracks.
- **Clips**: Displays MIDI patterns and Audio clips.
- **Timeline**: Standard DAW timeline with tempo and signature markers.

### 2. The Channel Rack / Rack View
- **Instrument Selector**: Access to GMS, SuperSaw, MiniSynth, etc.
- **FX Slots**: A touch-optimized stack of effects (Autoduck, Pitch, Reverb).
- **Automation Lanes**: Internal automation for the mobile parameters.

### 3. The Performance Tools
- **Hex Pads**: Unique hexagonal drum pads.
- **Piano Roll**: Optimized for dragging and resizing with fingers/stylus.
- **Step Sequencer**: Traditional 16-step grid.

### 4. Global Bar (Top)
- **Menu (Fruit Icon)**: Access Save, Share, Settings, and Shop.
- **Transport**: Play, Stop, Record, Metronome.

## Signal Flow
1. **Desktop Input**: MIDI data from the Desktop Piano Roll enters the plugin instance.
2. **Internal Routing**: Data is routed to the specific internal Mobile track.
3. **Mobile Synthesis**: The mobile engine (DirectWave Mobile, etc.) generates the audio.
4. **Internal FX Chain**: The audio passes through the Mobile Rack effects.
5. **Internal Mixer**: Summing occurs within the plugin's internal mixer.
6. **Desktop Output**: The final stereo sum is sent to the Desktop Mixer track where the plugin is hosted.

## Things Beginners Misunderstand
- **"Where are my VSTs?"**: You cannot load Serum, Sylenth, or other desktop plugins *inside* the mobile plugin. It only runs its internal mobile instruments.
- **Saving**: Saving the Desktop `.flp` does **NOT** always update the mobile `.flm` file if they are synced via cloud. You must use the internal Mobile "Save" menu to preserve changes for your phone.
- **Direct Share**: Both the PC and the Mobile device must be on the **exact same Wi-Fi network** for the transfer to work.
