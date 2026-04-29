# Core Techniques And Best Practices: Envelope Controller

## Technique 1: The "Ghost" Sidechain Scoop
*   **Goal:** Cleaner low-end than a compressor.
*   **Action:** Draw an inverted "U" shape in the **Env** tab (starts at 100%, drops to 0%, curves back up). Link this to your Bass volume.
*   **Benefit:** Zero lookahead delay and zero "pumping" artifacts. You define the exact shape of the duck. [SRC: REPUTABLE]

## Technique 2: Humanized Velocity Filters
*   **Goal:** Synths that sound "real."
*   **Setup:** Go to the **Vel** tab. Draw a diagonal line (Upward). 
*   **Target:** Link to a Low Pass Filter Cutoff.
*   **Result:** The harder you play, the brighter the synth gets. This is the #1 secret for "Jazzy" and "Vibey" melodic parts.

## Technique 3: Per-Note Panning
*   **Goal:** Lead vocals or synths that dance across the speakers.
*   **Action:** Go to the **Rand** tab. Set a random offset.
*   **Target:** Mixer Panning.
*   **Result:** Every time a new note plays, it appears in a slightly different stereo position. [SRC: REPUTABLE]

## Technique 4: Keyboard Split FX
*   **Goal:** Reverb only on high notes.
*   **Setup:** Use the **Map** tab. Draw a line that stays at 0 for low notes and jumps to 100% for high notes.
*   **Target:** Reverb Mix.
*   **Effect:** Bass notes stay dry and punchy; lead notes get lush and atmospheric.

## Common Pitfalls + Fixes
*   **Pitfall:** "The envelope is too fast/slow."
    *   **Fix:** Use the master **ATT** and **DEC** knobs on the front panel to scale the entire timing without re-drawing the graph. [SRC: IL-MAN]
*   **Pitfall:** "It's not triggering."
    *   **Fix:** Ensure the MIDI channel color matches the Note Color in the Piano Roll (usually Green/Color 1).
