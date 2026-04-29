# Vibe Translation Guide: DirectWave Sampler

DirectWave translates vibes through **Dynamic Multi-Sampling** and **Zonal Texture**.

## 1. Jazzy (Organic, Responsive, Human)
- **Concept:** "The Multi-Layered Instrument."
- **Levers:**
  - **Velocity Layers:** Use at least 3-4 samples per key (Soft, Med, Hard).
  - **Mapping:** Use the **Zone Editor** to set narrow velocity ranges.
  - **Filter:** Link velocity to the Low Pass filter cutoff.
- **Listen For:** The instrument changing "Tone" based on how hard you play, mimicking a real upright bass or piano.

## 2. Moody (Intimate, Deep, Distant)
- **Concept:** "The Low-Velocity Focus."
- **Levers:**
  - **ADSR:** Increase the **Attack** time slightly (50ms).
  - **Filter:** Set a static Low Pass at 800Hz.
  - **Sample:** Use "Muted" or "Soft" sample layers exclusively.
- **Listen For:** A breathy, fragile sound that feels close to the listener's ear.

## 3. Upbeat (Kinetic, Sharp, Lightweight)
- **Concept:** "The Sampled VST Pluck."
- **Levers:**
  - **Action:** Use the **Channel Sampling** feature to rip a pluck from a heavy VST.
  - **Looping:** Disable looping for a clean "one-shot" feel.
  - **Polyphony:** High (to allow fast melodic runs).
- **Listen For:** A snappy, consistent response that allows for rapid melodic patterns without CPU spikes.

## 4. Spacey (Ethereal, Infinite, Smeared)
- **Concept:** "The Reverb Freeze."
- **Levers:**
  - **Sample:** Sample a 100% wet reverb tail.
  - **Looping:** Set to **Sustain Loop** with a long crossfade.
  - **Release:** Long (2 seconds+).
- **Listen For:** An infinite, shimmering pad that sounds like a frozen moment in space.

## 5. Psychedelic (Warped, Backwards, Shifting)
- **Concept:** "The Micro-Loop Glitch."
- **Levers:**
  - **Loop Mode:** Ping-Pong.
  - **Loop Length:** Very short (micro-loops).
  - **Modulation:** Link the LFO to the **Loop Start** position.
- **Listen For:** A granulating, vibrating texture that shifts through the sample in an unnatural way. [SRC: REPUTABLE]
