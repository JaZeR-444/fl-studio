# Humanizing Drums with Random Modulation Workflow

## Goal
Add subtle variation to the timing, pitch, or volume of a drum loop to make it feel less like a machine and more like a human drummer.

## Steps
1. **Insert Envelope Controller**: Place it on any track (it doesn't process audio).
2. **Setup Randomization**:
   - Go to **Articulator 1**.
   - Select the **RND** (Random) tab.
   - Draw a level line at 50% (middle).
3. **Link Your Target**:
   - Go to your Drum Sampler (e.g., Fruity Slicer or FPC).
   - Right-click the **Fine Pitch** or **Pan** knob -> **Link to controller**.
   - Select **Articulator 1** from the Internal Controllers list.
4. **Refine the Depth**:
   - In Envelope Controller, adjust the **Amount** knob.
   - For pitch, you only want ~2-5%. For volume, maybe 10%.
5. **Smoothing**:
   - If the jumps are too jarring, increase **Smoothing** to 10-20ms.

## Result
Every time a MIDI note triggers the drum, a new random value is sent to the pitch/pan, creating a natural, evolving groove.
