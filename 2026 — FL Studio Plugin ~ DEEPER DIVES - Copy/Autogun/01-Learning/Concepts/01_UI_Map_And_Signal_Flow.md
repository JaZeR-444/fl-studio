# UI Map And Signal Flow: Autogun

## UI Tour
The interface is intentionally minimal, designed to keep you focused on the sound itself. [SRC: IL-MAN]

### 1. The Seed Engine (The "Finder")
- **Preset Number Display**: Shows the current "Sound Seed" (out of 4,294,967,296).
- **Randomize Button**: Jumps to a completely new synthesis state.
- **Copy/Paste Button**: Allows you to share exact seed numbers with other projects or users.

### 2. The Master Modifiers (The "Nudge")
- **Freq (Cutoff)**: Master filter frequency. Adjusts the brightness of the selected engine.
- **Res (Resonance)**: Adjusts the filter peak. Essential for "talky" or "aggressive" sounds.
- **Rel (Release)**: Controls how long the sound lingers after you let go of the key.
- **AM (Amount)**: A multi-purpose modulation depth knob (varies by engine).

### 3. Monitoring & Output
- **Output Fader**: Global gain level.
- **Visualizer**: Real-time display of the generated waveform and harmonics.

## Signal Flow
1. **Trigger**: MIDI note is received.
2. **Seed Engine Selection**: The plugin reconfigures its internal topology (Analog, FM, etc.) based on the **Seed Number**.
3. **Synthesis Engine**: Audio is generated via the specific multi-engine algorithm.
4. **Modulation Matrix**: Internal LFOs and Envelopes (pre-defined by the seed) modify the oscillator.
5. **Main Filter**: The **Freq** and **Res** knobs apply a master tone-shaping curve.
6. **Amplitude Envelope**: The **Release** knob applies the final volume curve.
7. **Mix/Output**: The processed signal leaves the plugin for the mixer.

## Things Beginners Misunderstand
- **"It's just a preset player"**: While it uses seeds, each seed is a **live synthesis state**, not a sample. You can still automate the filter and release in real-time.
- **The "AM" Knob**: In some engines, this controls "Modulation Depth"; in others, it might control "Bitcrushing" or "FM Index." Always use your ears to find the sweet spot per seed.
- **Seed Persistence**: If you like a sound, **WRITE DOWN THE NUMBER**. If you click randomize without saving the number, the sound may be lost in the 4 billion options.
