# Goal: Routing Slices to Mixer

## Goal Statement
Effectively route individual drum hits (Kick, Snare, Hats) to separate mixer tracks for professional processing and mixing.

## Step-by-Step Setup
1. **The Target:** Select Slicex in the Channel Rack. Assign it to Mixer Track 10.
2. **The Kick:**
   - Click the Kick region in Slicex.
   - In the **Region Properties** (bottom right), set **Out Offset** to 1.
   - *Result:* The Kick now goes to Mixer Track 11.
3. **The Snare:**
   - Click the Snare region.
   - Set **Out Offset** to 2.
   - *Result:* The Snare now goes to Mixer Track 12.
4. **The Percs:**
   - Select all Hi-Hats.
   - Set **Out Offset** to 3.
   - *Result:* All Hats go to Mixer Track 13.

## Benefits
- **Kick:** You can now apply a dedicated 808-sidechain to just the kick.
- **Snare:** You can add a specific Reverb or Delay to the snare without drowning the kick.
- **Hats:** You can apply high-pass filters and stereo widening to just the percussion.

## Verification Checklist
- [ ] Play the pattern: Do the mixer meters for tracks 11, 12, and 13 move independently?
- [ ] Solo Track 11: Can you hear only the kick?