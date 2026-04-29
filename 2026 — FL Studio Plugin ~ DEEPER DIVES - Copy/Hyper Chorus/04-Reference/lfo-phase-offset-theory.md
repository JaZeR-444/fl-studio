# Technical Reference: LFO Phase Offset Theory

Understanding how Hyper Chorus achieves its "High-Density" sound. [SRC: IL-MAN], [SRC: RELNOTE]

## The "8-Voice" Challenge
In a standard chorus, if you simply modulate two delay lines with the same LFO, they will move in sync, leading to predictable phasing and potential volume drops. To create a "lush" ensemble, the modulation must be decorrelated.

## Phase Staggering
Hyper Chorus uses a technique called **LFO Phase Staggering**.
1. **The Source LFO:** A single LFO drives the modulation for all voices.
2. **Phase Offsets:** Each of the 8 (or 4) delay lines is assigned a fixed starting point (phase) on that LFO cycle.
   - For **8 voices**, the phases are typically spread evenly at **45-degree intervals** (0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°). [UNVERIFIED - Based on standard ensemble algorithms]
3. **The Result:** At any given millisecond, some voices are pitching UP, some are pitching DOWN, and some are at the center. This creates a dense, "blurred" pitch profile that our ears perceive as a thick ensemble rather than a single wobbling sound.

## Interaction with X-Y Pad 2 (Modulation)
- **Mod Amount (X-Axis):** Controls the amplitude of the LFO. As you move right, the pitch deviation between the "highest" and "lowest" voices increases.
- **Mod Rate (Y-Axis):** Controls the frequency of the LFO. As you move up, the "cycling" speed of the 8 voices increases.

## Why it sounds "Hyper"
Traditional chorus effects often use a "Dimension" style circuit with only 2 or 3 voices. By doubling this to 8 and using precise phase staggering, Hyper Chorus minimizes "beating" (the rhythmic volume pulsing common in cheap chorus) and maximizes the "wash" of sound.

## Implications for Mono Compatibility
Because the 8 voices are spread across the phase cycle, summing them to mono (using the **Mono button**) will inevitably cause some phase cancellation.
- **The 180° Voice:** At any time, one voice is likely at the exact opposite phase of another.
- **Mixer Tip:** If your mono signal sounds thin, it is because these "opposing" voices are cancelling each other out. Reducing the **Mod Amount** reduces the severity of this cancellation.

---
*For practical application of these concepts, see the [01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md](../01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md) guide.*
