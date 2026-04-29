# Workflow: Ultimate Urban Vocal Chain (Patcher)
**Goal:** Create a reusable, modular Patcher preset that handles all the heavy lifting for R&B and Hip-Hop vocals.

## 1. The Signal Flow (Internal Routing)
To build a professional vocal chain in Patcher, route in this order:
1. **Fruity Limiter (Noise Gate):** To remove background hum between phrases.
2. **Pitcher (Auto-Tune):** Correction should happen early in the chain.
3. **Fruity Parametric EQ 2:** Cut the mud (200Hz) and add the "Air" (10kHz+).
4. **Maximus (De-Esser Mode):** Specifically targeting the "S" frequencies (5kHz-8kHz).
5. **Fruity Soft Clipper:** To catch transients before the final output.

## 2. The "Air" Module (Parallel Path)
Modern Pop-Rap/R&B vocals have a "shimmer."
- Use **Fruity Send** within Patcher to create a parallel path.
- In path 2, add a **High Pass Filter (10kHz)** and a **Fruity Chorus**.
- Blend this "Air" back into the main signal for a wide, expensive feel.

## 3. The "Moody" Control Surface
Create a custom Dashboard in Patcher with 3 knobs:
- **"The Drip":** Links to the Wet/Dry mix of a LuxeVerb module.
- **"The Grit":** Links to the Drive of a Low Lifter (to add harmonics to deep male vocals).
- **"The Width":** Links to the Separation knob of a Stereo Enhancer.

## 4. Why Use Patcher Instead of Mixer Slots?
- **Portability:** You can save the entire complex chain as ONE preset and drag it onto any project.
- **Visual Clarity:** You see the signal flow exactly as it is, making it easier to troubleshoot "mud" in the vocal.
- **CPU Efficiency:** Consolidates multiple plugins into one container, which can sometimes help with project organization and lag.
