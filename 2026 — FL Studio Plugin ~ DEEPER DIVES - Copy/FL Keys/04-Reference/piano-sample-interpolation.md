# Technical Reference: Piano Sample Interpolation

How FL Keys handles its multi-sampled library. [SRC: IL-MAN]

## 1. Velocity Layering
FL Keys uses multiple "Velocity Layers" per note.
- **Low Velocity**: Triggers a "Soft" sample (mellow tone).
- **High Velocity**: Triggers a "Hard" sample (bright tone).
- **The "Vel Curve" Knob**: This knob shifts the mathematical threshold where FL Keys decides to switch layers. If you have a "light" MIDI keyboard, turn this up to hear the harder samples more easily.

## 2. The "Stretch" Knob (Pitch Shifting)
- **Function**: Adjusts the interpolation algorithm used when you play notes between the fixed samples.
- **Legacy Behavior**: In older versions, turning this could cause audible "artifacts" or "formant shifts." In modern FL Studio, it is optimized for high-fidelity stretching.
- **Pro Tip**: Keep this at its default position unless you are purposefully trying to create a "warped" or "stretched" sound.

## 3. Polyphony Management
- FL Keys is designed to be extremely lightweight.
- It uses a standard "Voice Stealing" algorithm to ensure that playing massive chords doesn't crash your CPU.
- **Limitation**: It does not support sympathetic resonance (where other strings vibrate when you hold the pedal). Use an external Reverb to simulate this depth.

## 4. Sample Loops
- The sustain part of the piano samples is looped seamlessly.
- **Decay Control**: The "Decay" knob in the UI simply controls how fast the volume of this loop fades out over time.