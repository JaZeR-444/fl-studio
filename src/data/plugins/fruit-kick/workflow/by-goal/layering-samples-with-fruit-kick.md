# Layering Samples with Fruit Kick Workflow

## Goal
Combine a "character" kick sample (which might have a great top-end click but a weak sub) with the solid, tunable low-end of Fruit Kick.

## Steps
1. **The Sample (Top Layer):**
   - Load your kick sample into a **Sampler** or **Slicex**.
   - Apply a High-Pass Filter (HPF) around **150Hz** to remove its sub-frequencies.
2. **The Fruit Kick (Sub Layer):**
   - Load **Fruit Kick**.
   - Set **Freq** to the root note of your track.
   - Set **Max Freq** low (~300Hz) so it doesn't clash with the sample's click.
   - Adjust **Decay** to match the length of your sample.
3. **Phase Alignment (Critical):**
   - Load both onto the same mixer track (or a bus).
   - Use a plugin like **Wave Candy** (Oscilloscope mode) to look at the combined waveform.
   - If the combined kick looks "smaller" or quieter than the individual parts, invert the phase of the Fruit Kick (via Wrapper settings).
4. **Processing:**
   - Apply a **Fruity Limiter** to glue the two sounds together.
   - Use a slight boost at the fundamental frequency to emphasize the new, solid sub.

## Pro Tip
You can slightly "offset" the start of the Fruit Kick (using the Sampler's 'Shift' or Patcher) to ensure its sub-wave doesn't peak at the exact same millisecond as the sample's transient.
