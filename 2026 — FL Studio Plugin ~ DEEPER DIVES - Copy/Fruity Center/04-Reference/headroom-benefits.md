# Reference: Headroom Benefits (DC Removal)

## The Math of the "Lean"
Digital audio has a hard limit: **0dBFS**. 
- A symmetrical wave can go to +1 and -1 (Full range).
- A wave with 10% DC offset can only go to +0.9 and -1.1.
- But since -1.1 is impossible, it clips at -1.0.
- **The Result:** Your sound is "capped" at 90% of its potential volume.

## Why Removal is "Free Volume"
By shifting that 10% offset back to center, the wave can once again reach +1.0. You have gained 10% of your dynamic range back without changing the tone of the sound.

## When to check
- After importing samples from unknown sources.
- After using "asymmetric" distortion.
- After recording from hardware. [SRC: REPUTABLE]
