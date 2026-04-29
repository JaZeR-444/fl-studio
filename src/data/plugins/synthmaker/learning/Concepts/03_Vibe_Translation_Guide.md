# 03: Vibe Translation Guide

## Vibe Targets in SynthMaker

### 1. Moody (Dark, Lo-Fi, Broken)
- **The Lever:** **Quantization + Sample-Rate Reduction.**
- **Construction Steps:**
  - Build a module that uses the `Quantize` prim to reduce bit-depth to 8-bit.
  - Add a `Sample & Hold` node to simulate a low sample rate (e.g., 10kHz).
  - Include a Low-Pass filter module set to 400Hz.
- **What to listen for:** A "crusty," dark, and filtered sound that feels like a broken vintage sampler.
- **Pitfall:** Extreme bit-crushing creates harsh white noise. Add a limiter at the end of the chain.

### 2. Upbeat (Snappy, Energetic, Bright)
- **The Lever:** **Fast Envelopes + Bright Oscillators.**
- **Construction Steps:**
  - Use the `Sawtooth` stream primitive.
  - Build a custom ADSR where the "Decay" curve is logarithmic (exponentially fast).
  - Use a 4-pole (24dB) filter module for sharp "plucks."
- **What to listen for:** A "stabbing" attack that is cleaner and sharper than standard FL presets.
- **Pitfall:** If your oscillator isn't anti-aliased, high notes will sound "metallic" and "cheap."

### 3. Psychedelic (Trippy, Generative, Moving)
- **The Lever:** **Chaotic Feedback + LFO Inter-modulation.**
- **Construction Steps:**
  - Create two LFO modules.
  - Make LFO 1 modulate the *Speed* of LFO 2.
  - Route LFO 2 to the *Pan* and *Fine Pitch* of an oscillator.
  - Add a "Feedback" loop where the audio output is fed back into the filter frequency.
- **What to listen for:** A sound that never repeats and seems to "evolve" on its own.
- **Pitfall:** Feedback loops can explode in volume. Always use a "Clipper" node in the feedback path.

### 4. Jazzy (Warm, Smooth, Dynamic)
- **The Lever:** **Sine/Triangle Blending + Velocity Logic.**
- **Construction Steps:**
  - Build an instrument that mixes Sine and Triangle waves.
  - Create a "Velocity to Filter" node where higher MIDI velocity = higher Cutoff.
  - Add a "Drift" module that adds a slow, 0.5% pitch variation to simulate analog instability.
- **What to listen for:** A mellow, responsive tone that reacts like a real acoustic instrument.
- **Pitfall:** Avoid "Square" waves; they are too aggressive for a classy jazz feel.

### 5. Vibey (Lush, Wide, "Expensive")
- **The Lever:** **Multi-Voice Unison + Built-in Chorus.**
- **Construction Steps:**
  - Build a 4-voice unison module (Green Event logic).
  - Use a "Stereo Spread" node to push voices 1 & 2 to the Left and 3 & 4 to the Right.
  - Add a delay-based "Chorus" module with a 500ms release.
- **What to listen for:** A "thick" and "surrounding" sound that sits perfectly in a modern R&B track.
- **Pitfall:** High voice counts in SynthMaker hit the CPU hard. Optimize your stream code.
