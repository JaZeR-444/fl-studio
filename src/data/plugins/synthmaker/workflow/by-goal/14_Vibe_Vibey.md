# Goal: Vibe - Vibey

## Goal Statement
Build a "Cloud Ensemble" module for lush, wide R&B background pads.

## Step-by-Step Setup
1. **The Core:** 2 Oscillators (Saw).
2. **Unison:** Clone them to create 8 total oscillator streams.
3. **Detune:** Add a "Random" float node to each oscillator's pitch (between 0.01 and 0.05).
4. **Width:** Use a "Pan" primitive for each oscillator, spacing them evenly from -100 to +100.
5. **Effects:** Connect the final sum to a "Delay" prim with a 1.5s time and 40% feedback.
6. **Result:** A massive, "expensive" sounding pad that fills the entire stereo field.

## Mini-Recipe: "Silk Pad"
- 4 Sine waves.
- Panned Max Left, Left-Mid, Right-Mid, Max Right.
- Filter High-Cut at 1,000Hz.
- *Result:* A very smooth, wide "hum" that feels like a silk blanket in the mix.
