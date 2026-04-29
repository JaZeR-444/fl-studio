# Core Techniques And Best Practices: Fruity Delay Bank

## Technique 1: Parallel Rhythmic Tap
*   **Goal:** A complex rhythmic pattern from one snare hit.
*   **Setup:** Enable Banks 1, 2, and 3. Set all to route "To Main."
*   **Action:** 
    *   Bank 1: Time = 2.0 (1/8 note). Pan = Left.
    *   Bank 2: Time = 3.0 (Dotted 1/8). Pan = Center.
    *   Bank 3: Time = 4.0 (1/4 note). Pan = Right.
*   **Result:** A perfectly synced rhythmic "gallop" that fills the stereo field.

## Technique 2: The "Shimmer" Chain
*   **Goal:** Reverb that pitches up or sparkles.
*   **Setup:** Enable Banks 1 through 4 in **Serial** mode ("To Next").
*   **Action:** In each bank, use a **High Pass** filter and a tiny bit of **Grain**. Set all "To Main" knobs to 10% and "To Next" to 100%.
*   **Result:** The sound gets thinner and more "smeared" as it passes through the chain, creating a shimmering atmosphere.

## Technique 3: Frequency Specific Delay
*   **Goal:** Delay the vocals without muddying the mix.
*   **Action:** On Bank 1, use a **Bandpass** filter. Only allow the 1kHz - 3kHz range to enter the delay loop.
*   **Result:** The echoes are focused on the "intelligibility" frequencies, leaving the low-mids clean for the beat. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
*   **Pitfall:** "The feedback is exploding."
    *   **Fix:** Check if you have routed a bank into itself or if the **Feedback** knob is too high in a serial chain. The volume compounds quickly in Delay Bank.
*   **Pitfall:** "Phase cancellation."
    *   **Fix:** Using too many banks with very short delay times (<20ms) will cause "hollow" sounds. Increase the **OFS** or **Time** to separate them. [SRC: REPUTABLE]
