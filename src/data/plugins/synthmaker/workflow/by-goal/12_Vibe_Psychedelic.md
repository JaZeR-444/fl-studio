# Goal: Vibe - Psychedelic

## Goal Statement
Build a "Chaos Swirl" generator that creates unpredictable, trippy background movement.

## Step-by-Step Setup
1. **Modulators:** Add three LFOs.
2. **Routing:**
   - LFO 1 modulates the Speed of LFO 2.
   - LFO 2 modulates the Speed of LFO 3.
   - LFO 3 modulates the **Filter Cutoff** and **Stereo Pan**.
3. **Feedback:** Create an audio loop where the output of a Delay module is fed back into its own input, but run through a "Frequency Shifter" primitive.
4. **Result:** The sound will constantly "climb" or "fall" in pitch while swirling around the speakers in a non-repetitive way.

## What to Listen For
- Movement that never feels the same twice.
- "Spacey" textures that seem to expand and contract.
