# Goal: Gain Staging Calibration (Fruity dB Meter)

## Routing Context
- **Utility:** Any Effect Chain.
- **Workflow:** **A/B Level Matching**.

## Step-by-Step Setup
1.  Load your effect (e.g., **Fruity Fast Dist**).
2.  Place **Fruity dB Meter** in the slot *immediately before* the distortion.
3.  Place a second **Fruity dB Meter** *immediately after* the distortion.
4.  Play the sound. Note the peak on Meter 1 (e.g., `-12dB`).
5.  Look at Meter 2. If it's hitting `-6dB`, the distortion is making the sound 6dB louder.
6.  **Adjust:** Turn down the **Post-Gain** or **Mix** on the distortion plugin until Meter 2 also reads `-12dB`.

## Result
- Perfect gain staging. Now you can bypass the distortion and hear *only* the change in character, not the change in volume. This is how professional engineers make objective mixing decisions.

## Vibe Check
- **Vibey/Polished:** Prevents the "Loudness Bias" that leads to over-processed, harsh mixes.

## Pitfalls + Fixes
- **Pitfall:** "The peak hold is in the way."
  - **Fix:** Right-click Meter 2 to reset the hold after you make a gain adjustment. [SRC: REPUTABLE]
