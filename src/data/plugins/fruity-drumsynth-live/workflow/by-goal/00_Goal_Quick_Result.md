# Goal: Perfect Rap Clap Synthesis (DrumSynth Live)

## Routing Context
*   **Target:** A modern, crisp rap clap.
*   **Setup:** Use MIDI Key C4.

## Step-by-Step Setup
1.  Initialize **Fruity DrumSynth Live**.
2.  **Oscillator 2 (Noise Engine):**
    *   Set **Type** to `Noise`.
    *   Set **Env Decay** to `200ms`.
    *   Set **Tone** to `High Pass` (move knob to 3 o'clock).
3.  **Retrigger Section (The Secret Sauce):**
    *   Set **Count** to `3`.
    *   Set **Rate** to `12ms`.
4.  **Mixing:**
    *   Turn **Osc 1 Volume** to `0`. (We only want noise for this clap).
    *   Increase **Click** amount to `10%` for transient snap.

## What to Listen For
*   The clap should hit with a distinct "tri-trigger" sound. It adds thickness and feels more human than a single noise burst.

## Variations
*   **Snare Layer:** Turn **Osc 1** (Sine) back up to 20% and set Freq to 200Hz to add "thump" to the clap.
*   **Distorted Clap:** Place **Fruity Fast Dist** after DrumSynth in the mixer.

## Pitfalls + Fixes
*   **Too Much Tail:** If it sounds like a crash cymbal, lower the **Env Decay** slider. [SRC: REPUTABLE]
