# Custom WAV Import Guide (Toxic Biohazard)

## The Spectrum Analysis Tool
Toxic Biohazard allows you to use your own audio samples as oscillator sources.

## How to Import
1. **Open Spectrum View:** Click the waveform icon in the Oscillator section.
2. **Load Sample:** Drag and drop a WAV or AIFF file into the waveform display area.
3. **Analysis:** The plugin analyzes the harmonic content of the sample and converts it into a single-cycle wavetable.
4. **Pitch Alignment:** Ensure your sample is a single note (preferably C) for the most accurate pitch tracking.

## Best Uses
- **Vocal Fragments:** Import a "vocal synth" feel.
- **Classic Synths:** Import a cycle from a hardware synth to give Toxic an analog soul.
- **Complex Noise:** Import noise loops to create unique percussive textures via the FM Matrix.

## Pitfall
Long samples will be truncated. The engine only looks for a small window of the audio to create the recurring wave shape.
