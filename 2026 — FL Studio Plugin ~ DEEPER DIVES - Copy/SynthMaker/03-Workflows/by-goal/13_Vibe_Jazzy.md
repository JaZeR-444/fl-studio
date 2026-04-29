# Goal: Vibe - Jazzy

## Goal Statement
Create a "Soft Analog Bass" module that reacts dynamically to your playing.

## Step-by-Step Setup
1. **Source:** Mix 70% Sine wave and 30% Triangle wave.
2. **Dynamics:** Use a "MIDI Velocity" primitive.
3. **Mapping:**
   - Route Velocity to **Osc Volume** (Linear).
   - Route Velocity to **Filter Cutoff** (Exponential).
4. **Smoothing:** Add a 20ms "Attack" to the Volume Envelope.
5. **Result:** Playing softly creates a deep, muffled sub-bass. Playing hard adds "honk" and harmonics, mimicking a real upright bass.

## What to Listen For
- The "mellow" tone of the sine/triangle blend.
- The "human" response to how hard you hit the keys.
    