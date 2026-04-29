# UI Map And Signal Flow: Fruity LSD

## UI Tour
The interface is a simple rack representing the 16 MIDI channels. [SRC: IL-MAN]

### 1. Global Controls
- **Port**: The MIDI Input Port. **CRITICAL**: This must match the Port of your MIDI Out plugin.
- **Bank**: A drop-down menu to select custom `.dls` files. Default is the Windows GM set.
- **Device**: Selects the Windows synthesizer (usually Microsoft GS Wavetable).

### 2. The Channel Strips (1-16)
- **Patch Name**: Displays the name of the sound currently loaded on that channel (e.g., Acoustic Grand Piano).
- **Mute/Solo**: Quick buttons to audition specific channels.

### 3. Processing Switches
- **Reverb/Chorus**: These enable the *system-level* effects from your soundcard. These are low quality and usually best left **OFF** in favor of FL Studio plugins.

## Signal Flow
1. **MIDI Out (Channel)**: You play a note in a "MIDI Out" plugin.
2. **Port Routing**: The MIDI note travels through the internal Port (e.g., Port 10).
3. **LSD Receiver**: Fruity LSD (set to Port 10) receives the data.
4. **System Relay**: LSD sends the MIDI to the Windows DirectMusic driver.
5. **Synthesis**: Windows GS Wavetable Synth generates the audio.
6. **Return**: The audio is brought back into the Mixer track where Fruity LSD is loaded.
7. **Mixer Processing**: You add EQ, Delay, or Reverb to the returned audio.

## Things Beginners Misunderstand
- **"It makes no sound"**: Fruity LSD is a MIDI receiver. You **cannot** put notes directly into its Piano Roll. You must use a "MIDI Out" generator plugin to send notes to it.
- **"It's laggy"**: Because it routes audio through the Windows system drivers, there is a fixed latency (delay). It is best used for programmed MIDI rather than live performance.
- **Mono Output**: Some Windows synthesizers are mono-only. If you want stereo width, add it using Fruity Stereo Shaper in the mixer track.
