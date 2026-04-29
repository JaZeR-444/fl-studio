# Core Techniques And Best Practices: Fruity Filter

## Technique 1: The "Radio" Vocal
*   **Goal:** Make a vocal sound like it’s coming through a telephone or small speaker.
*   **Action:** 
    *   Select **BP (Band Pass)** mode.
    *   Set **Cutoff** to ~1.5kHz (approx 1 o'clock).
    *   Set **Resonance** to 20%.
*   **Result:** The lows and highs are stripped away, leaving a focused, "nasal" sound perfect for R&B intros.

## Technique 2: High-Fi Shimmer Risers
*   **Goal:** A clean filter sweep during a build-up.
*   **Setup:** Use White Noise or a bright synth pad.
*   **Action:** 
    *   Engage **2x Oversampling**. 
    *   Automate the **Cutoff** from 0 to 100%.
    *   Set **Resonance** to 50%.
*   **Benefit:** The "whistling" peak will sound smooth and detailed rather than "pixelated" as it reaches the highest frequencies. [SRC: REPUTABLE]

## Technique 3: Sub-Bass Protection
*   **Goal:** Clearing space for the 808.
*   **Action:** Place Fruity Filter on your Melody/Synth bus.
*   **Settings:** Mode = **HP (High Pass)**. Cutoff = 300Hz (approx 9 o'clock).
*   **Result:** All "rumble" is removed from the melodies, ensuring the 808 hits with maximum clarity.

## Technique 4: "Liquid" Phasing Effect
*   **Goal:** A trippy, moving texture.
*   **Action:** Set Mode to **BP**. Turn Resonance to `70%`.
*   **Automation:** Link the Cutoff to a slow LFO (Peak Controller).
*   **Listen For:** The focused frequency band will slide up and down, creating a sound similar to a phaser but with more "weight." [SRC: REPUTABLE]

## Common Pitfalls + Fixes
*   **Pitfall:** "Digital distortion/clipping."
    *   **Fix:** Resonance is likely too high. Turn the **Res** knob down or use a **Fruity Limiter** after the filter.
*   **Pitfall:** "The filter sweep sounds 'staticy'."
    *   **Fix:** Enable **2x Oversampling**. This fixes the digital artifacts that occur when filter peaks move rapidly. [SRC: IL-MAN]
