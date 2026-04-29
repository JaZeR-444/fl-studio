# UI Map And Signal Flow: FL Keys

## UI Tour
The interface is clean and categorized into the model selector and the "Realism" modifiers. [SRC: IL-MAN]

### 1. Environment & Tone (The "Vibe")
- **Decay**: Controls how long the note sustains.
- **Release**: Controls the length of the tail after the key is let go.
- **Pan**: Moves the instrument in the stereo field.
- **Vol**: Master output level.

### 2. Realism Controls (The "Soul")
- **Muffled**: A low-pass filter that softens the tone. Higher = Darker.
- **Hardness**: Adjusts the "hammer" sound. Higher = more aggressive attack.
- **Vel Curve**: Calibrates how the plugin responds to your MIDI controller's pressure.

### 3. Model Selector (The "Core")
- **Grand Piano**: Clean, multi-sampled acoustic piano.
- **Rhodes**: Iconic 70s electric piano.
- **Roto Organ**: Hammond-style organ with a spinning speaker effect.
- **Harpsichord**: Plucked, baroque-style keyboard.

### 4. Miscellaneous (The "Details")
- **Treble**: High-frequency shelf.
- **Stretch**: Adjusts sample interpolation (usually keep at default).
- **Key (Release Noise)**: Adjusts the volume of the sound made when you release a key.

## Signal Flow
1. **MIDI Input**: Pitch and Velocity data are received.
2. **Sample Selection**: The engine picks the correct sample based on the Pitch/Velocity layer.
3. **Hardness Processing**: The sample's transient is modified.
4. **Muffled Filtering**: The Low-Pass filter is applied.
5. **Envelope Application**: Decay and Release curves are applied to the volume.
6. **Panning/Roto**: Stereo positioning or spinning speaker effects are applied.
7. **Summing**: The signal leaves through the global Volume and Treble controls.

## Things Beginners Misunderstand
- **"It's too quiet"**: FL Keys depends heavily on **Velocity**. If your MIDI notes are low-velocity, it will sound muted. Use the **Vel Curve** knob to compensate.
- **The "Release" knob**: Unlike a synth, the Release knob in FL Keys often triggers a specific "Key Up" sample. Setting it too high can sound like a loud clunk.
- **Overdrive**: On the Organ model, the **Hardness** knob often acts as a saturation/drive control.
