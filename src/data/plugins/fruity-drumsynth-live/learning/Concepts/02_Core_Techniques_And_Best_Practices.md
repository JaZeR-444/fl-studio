# Core Techniques And Best Practices: DrumSynth Live

## Technique 1: The Perfect 808 Kick
*   **Goal:** A sub-bass kick that hits hard and rings out.
*   **Setup:** Osc 1 = Sine.
*   **Action:** Set **Freq** to a low value (e.g., 50Hz). Set **Env Decay** to a long setting (1-2 seconds). Increase the **Sweep** amount so it starts high and drops to the sub frequency.
*   **Result:** A clean, synthesized 808 that is perfectly centered and stable.

## Technique 2: Clap Layering via Retrigger
*   **Goal:** The classic rap clap.
*   **Action:** Use Osc 2 (Noise). Set **Retrigger Count** to `3`. Set **Rate** to a low value (approx 10-20ms).
*   **Listen For:** The "flam" effect where the clap hits three times rapidly. This adds the human-like width and thickness expected in hip-hop. [SRC: REPUTABLE]

## Technique 3: Velocity Tone Mapping
*   **Goal:** Drums that get "brighter" the harder you hit them.
*   **Setup:** Go to the **Velocity** mapping section.
*   **Action:** Link Velocity to the **Tone** knob (Filter Cutoff). 
*   **Result:** Soft hits sound muffled and dark; hard hits sound crisp and open. Perfect for realistic hi-hat patterns.

## Technique 4: Patch Morphing Transitions
*   **Goal:** A riser or transition that changes the drum sound.
*   **Setup:** Set the current key to a Kick. Set the **Morph To** target to a Snare.
*   **Action:** Automate the **Morph wheel** over 4 bars.
*   **Effect:** The kick will gradually transform into a snare, creating an evolving rhythmic transition. [SRC: IL-MAN]

## Common Pitfalls + Fixes
*   **Pitfall:** "The snare sounds like a kick."
    *   **Fix:** Ensure Osc 2 (Noise) has a high enough volume and its envelope decay is long enough to provide the "snare tail."
*   **Pitfall:** "Static, boring hats."
    *   **Fix:** Slightly vary the **Velocity** of your hi-hat notes in the Piano Roll. Synthesis responds much more naturally to velocity than samples do.
