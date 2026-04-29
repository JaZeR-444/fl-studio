# Core Techniques And Best Practices: Fruity dB Meter

## 1. Internal Gain Staging
- **Technique:** Place one dB Meter *before* an effect and one *after*.
- **Execution:** Adjust the "Output Gain" of the effect plugin until both meters match.
- **Why:** This ensures the plugin is only changing the **Tone**, not the **Volume**. It prevents "Loudness Bias" where you think a sound is better just because it got louder. [SRC: REPUTABLE]

## 2. The "-18dBFS" Sweet Spot
- **Technique:** Aim for your tracks to peak around -18dB.
- **Execution:** Use the dB Meter to verify your initial levels from your VSTs or Samples.
- **Benefit:** This mimics the "Zero" point of analog gear. It leaves massive headroom for your compressors and EQ boosts to work without hitting the digital ceiling.

## 3. The "Master Headroom" Rule
- **Technique:** Put a dB Meter as the very first plugin on your Master track.
- **Execution:** Ensure the loudest part of your song (the hook) is peaking at **-6dB**.
- **Result:** You have perfect "Clean Slate" for a mastering engineer (or a final limiter) to work with.

## 4. Resetting Between Takes
- **Technique:** Right-click the meter to reset the peak hold before every playback.
- **Why:** If you tweaked a knob and it got quieter, the old peak hold will lie to you. Always reset to get fresh data.

## Common Pitfalls + Fixes
- **Pitfall:** "The meter is jumping too fast."
  - **Fix:** dB Meter is an instantaneous peak meter. If you want a "slow" average view, use **Fruity Limiter** in "Analysis" mode or **Maximus**.
- **Pitfall:** "Thinking 0dB is okay on the Master."
  - **Fix:** If the dB Meter hits 0dB on the Master, you are potentially clipping your converters. Turn everything down by -3dB. [SRC: REPUTABLE]
