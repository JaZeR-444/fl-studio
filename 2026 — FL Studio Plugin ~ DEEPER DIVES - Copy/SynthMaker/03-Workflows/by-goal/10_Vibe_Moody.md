# Goal: Vibe - Moody

## Goal Statement
Build a custom "Dark Sampler" module that adds authentic 12-bit lo-fi character to any signal.

## Step-by-Step Setup
1. **Input:** Start with an "Audio Input" primitive.
2. **Crush:** Add a "Quantize" prim. Set the bits input to 12.
3. **Sample Rate:** Add a "Sample & Hold" prim. Use an LFO or static float to set the frequency to 15,000Hz.
4. **Filter:** Add a 2-pole Low-Pass filter. Set Cutoff to 1,500Hz.
5. **Output:** Connect to the final "Audio Output" node.
6. **Result:** Any sound sent through this SynthMaker patch will sound dark, muffled, and "vintage."

## What to Listen For
- The "ringing" artifacts caused by low sample rates.
- The warm, rounded top-end from the low-pass filter.
- A slight "steppy" distortion from the 12-bit quantization.
