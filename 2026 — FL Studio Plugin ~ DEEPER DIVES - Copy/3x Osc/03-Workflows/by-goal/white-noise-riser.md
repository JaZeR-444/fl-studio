# White Noise Riser Workflow (3x Osc)

## Goal
Create a classic sweeping noise riser for builds and transitions.

## Technical Steps
1. **Oscillators:**
   - Set **Osc 1** to the **Noise** waveform.
   - Set **Osc 2** and **Osc 3** volumes to zero (fully counter-clockwise).
2. **Channel Settings (Instrument Tab):**
   - Enable the **Filter**. Set it to **Low Pass (LP)**.
   - Set **Cutoff** to 0%.
   - Set **Resonance** to ~40% for a "whistling" sweep.
3. **Automation:**
   - Create an automation clip for the **Filter Cutoff**.
   - Draw a ramp from 0% to 80% over 4 or 8 bars.
4. **FX:**
   - Add `Fruity Reverb 2` with a long tail (Wet 50%).
   - Add `Fruity Delay 3` for rhythmic movement.

## Why it works
The noise oscillator provides a broadband frequency source. By sweeping a resonant filter through it, you isolate moving bands of noise, creating the "whoosh" sound.
