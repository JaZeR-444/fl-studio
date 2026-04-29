# UI Map And Signal Flow: Fruity Reeverb

## UI Tour
1.  **Room Size Slider:** Sets the dimensions of the virtual box. Larger = more distant echoes. [SRC: IL-MAN]
2.  **Decay Knob:** How long the reverb tail lasts (Time).
3.  **HF/LF Cut (Color):** Simple filters to darken (High Cut) or thin out (Low Cut) the reverb tail.
4.  **Diffusion Knob:** The "Grain" control.
    - **High:** Smooth, cloudy reverb.
    - **Low:** Jagged, echo-like "ticking."
5.  **Dry/Reverb Mix:** Independent sliders for the original and processed signals.

## Functional Flow
1.  **Input:** Mono or Stereo audio enters.
2.  **Delay Network:** The signal is fed into multiple IIR (Infinite Impulse Response) delay lines.
3.  **Feedback Loop:** The Decay setting determines how much of the signal is fed back, creating the "Tail."
4.  **Spectral Shaping:** The Color filters remove frequencies from the feedback loop.
5.  **Diffusion Engine:** The signal is "smeared" to hide individual echoes.
6.  **Mixing:** The final Reverb signal is added to the Dry signal.

## Things Beginners Misunderstand
- **Pre-Delay:** Reeverb 1 has **NO Pre-Delay knob**. To get that professional "gap" before the reverb hits, you must place a **Fruity Delay 2** before it (set to 100% wet, zero feedback). [SRC: REPUTABLE]
- **The "Metallic" Ring:** If you hear a high-pitched ring, your Room Size is too small and your Color is too bright. Increase the HF Cut to dampen the "metal."
- **Stereo Spread:** Reeverb 1 is not as "wide" as Reeverb 2. Use a **Fruity Stereo Enhancer** after it if you need more width.
