# Instrument Workflow: Atmospheric Sound Design (Spectral Clouds)

*Goal: Using the Granular and FM engines of Autogun to create vast, evolving background textures.*

## 🎛️ Routing Context
- **Setup**: Autogun -> Mixer Track.
- **FX Rack**: High-Pass Filter -> LuxeVerb (Space Mode) -> Delay.

## 🚶 Step-by-Step Setup
1. **The Search**:
   - Randomize until you find a sound that is long, complex, and "washy."
   - *Logic*: You are looking for a seed that sounds like a Pad or a Texture.
2. **The "Shadow" (Freq)**:
   - Lower the **Freq** to 30%.
   - *Result*: This removes the transients and creates a dark, muffled atmosphere.
3. **The "Evolution" (AM)**:
   - Link the **AM** knob to a slow Sine LFO (via Peak Controller).
   - *Result*: The internal engine will slowly morph its complexity, making the pad feel "alive" and breathing.
4. **The Fade (Rel)**:
   - Set **Release** to 100% (Maximum).
   - *Move*: This ensures the sound trails off for several seconds after the MIDI note ends.
5. **The Clean-Up**:
   - In the Mixer, use a High-Pass filter at 300Hz.
   - *Why*: This ensures your background atmosphere doesn't muddy your kick and bass.
6. **The Immersion**:
   - Add **LuxeVerb** in "Space" mode with 50% Mix.

## 🔄 Variations
- **The "High-Frequency Ghost"**: Set Freq to 80% but keep the High-Pass at 2kHz. This adds a "haunting" air layer.
- **The "Digital Glitch"**: Use an FM-heavy seed and set **AM** to a fast Random LFO.

## ⚠️ Pitfalls & Fixes
- **Problem**: CPU Overload.
- **Fix**: Atmospheric seeds in Autogun can be CPU heavy. Record your pad to an audio clip (Freeze) to save resources.
