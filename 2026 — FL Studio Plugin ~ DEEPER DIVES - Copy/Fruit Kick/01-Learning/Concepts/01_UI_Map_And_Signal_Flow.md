# UI Map And Signal Flow: Fruit Kick

## UI Tour
The interface is streamlined and focused on the physics of a frequency sweep. [SRC: IL-MAN]

### 1. Frequency Controls (The "Path")
- **Max**: Sets the starting frequency of the sweep (Hertz). High values = Sharper "click."
- **Min**: Sets the ending frequency of the sweep (Hertz). This is the "Sub" or "Body."
- **Decay**: Controls the speed of the pitch drop. Shorter = Punchier; Longer = More "tonal."

### 2. Character Controls (The "Texture")
- **Click**: Adds a noise-based transient to the start of the sound.
- **Dist (Distortion)**: A hard-clipping circuit. Adds harmonics and aggressive grit.
- **Amp Decay**: Controls how long the volume of the sound lasts (independent of the pitch sweep).

### 3. Monitoring
- **LED Display**: Shows the frequency value as you move the knobs.
- **Output Knob**: Master gain control.

## Signal Flow
1. **Trigger**: MIDI note is received (Note pitch is ignored; only the trigger matters).
2. **Sine Generator**: An internal oscillator starts at the **Max** frequency.
3. **Pitch Sweep**: The oscillator's frequency drops to the **Min** frequency at the speed set by **Decay**.
4. **Click Layer**: A transient noise burst is added to the start of the signal.
5. **Volume Envelope**: The global amplitude is faded out based on **Amp Decay**.
6. **Distortion Stage**: (If active) the combined signal passes through a hard clipper.
7. **Output**: The finalized kick audio leaves the plugin.

## Things Beginners Misunderstand
- **"The notes in the Piano Roll don't change the pitch"**: Fruit Kick is a dedicated synth where the pitch is set by the **Min** knob inside the plugin, not the MIDI note.
- **Min vs Max**: If **Min** is higher than **Max**, the frequency will sweep UP (creating a "laser" sound) rather than DOWN (a kick sound).
- **Hard-Clipping**: High **Dist** values will drastically change the volume and shape of the sub. Use a Soft Clipper afterward to tame the spikes.
