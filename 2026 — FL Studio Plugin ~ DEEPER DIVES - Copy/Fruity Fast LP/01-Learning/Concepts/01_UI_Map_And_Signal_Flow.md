# UI Map And Signal Flow: Fruity Fast LP

## UI Tour
The UI is minimalist, featuring only two primary knobs:

1.  **Cutoff:** Sets the "Ceiling" frequency. 
    *   **Right:** Open (All frequencies pass).
    *   **Left:** Closed (Sound is muffled/silent). [SRC: IL-MAN]
2.  **Resonance (Res):** Sets the volume boost at the Cutoff point.
    *   **Low:** Transparent, natural filtering.
    *   **High:** Whistling, sharp "squelch" (The Acid sound).

## Signal Flow
1.  **Input:** Audio enters.
2.  **Smoothing Engine:** The plugin calculates the movement of the Cutoff knob and applies a micro-fade to prevent digital "zipper noise."
3.  **Filtering:** Frequencies above the Cutoff are removed at a fixed slope (approx 12dB/oct). [UNVERIFIED]
4.  **Resonance Peak:** The frequencies exactly at the Cutoff point are amplified.
5.  **Output:** Filtered audio is sent to the mixer.

## Things Beginners Misunderstand
*   **Resonance Volume:** High resonance can make the signal **much louder**. If the Res is at 100%, the filter might start "screaming." **Fix:** Put a Limiter after it. [SRC: REPUTABLE]
*   **The "Fast" in the Name:** It doesn't mean the filter is "fast" at cutting; it means the plugin handles **fast automation** without glitches.
*   **Dry/Wet Mix:** Fast LP has no internal Mix knob. To do parallel filtering, use the **Mix level** in the FL Mixer slot. [SRC: IL-MAN]
