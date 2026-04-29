# UI Map And Signal Flow: Fruity DrumSynth Live

## UI Tour
1.  **Oscillator 1 (The Body):** Swept Sine or Noise. Used for the "thump" of a kick or the tone of a tom.
2.  **Oscillator 2 (The Sizzle):** Noise or Oscillator. Used for the "snap" of a snare or the sizzle of a hat.
3.  **Envelope Section:** Controls the volume and pitch decay of each oscillator separately.
4.  **Retrigger (The Clap Engine):** Controls how many times the sound repeats (Count) and at what speed (Rate). [SRC: IL-MAN]
5.  **Filter/Tone:** A per-patch Low-pass/High-pass filter.
6.  **Morph To:** A target patch selection for crossfading.

## Signal Flow
1.  **Trigger:** A MIDI note (C0-B9) is received.
2.  **Patch Selection:** The plugin loads the specific synthesis settings for that note.
3.  **Synthesis:** Osc 1 and Osc 2 generate their waveforms based on the pitch/noise settings.
4.  **Envelopes:** The amplitude and pitch are shaped.
5.  **Retriggering:** If "Count" > 1, the envelope triggers again based on the "Rate."
6.  **Summing:** Osc 1 and 2 are mixed and passed through the Tone filter.
7.  **Output:** Audio leaves via the main mixer track.

## Things Beginners Misunderstand
*   **Per-Key Patches:** Every key is a different synth. If you change the snare on D5, the snare on E5 stays the same. **Fix:** Use the Copy/Paste patch menu if you want the same sound on multiple keys.
*   **The Click Parameter:** This adds a tiny burst of phase-offset noise at the very start of the sound. Essential for making synthesized kicks cut through a mix.
*   **Morph Wheel:** It doesn't "bend" the pitch like a normal pitch wheel; it crossfades the parameters between the current patch and the "Morph To" target. [SRC: REPUTABLE]
