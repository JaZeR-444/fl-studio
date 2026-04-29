# 02: Core Techniques and Best Practices

## 1. The "Laser-Focused" 808
If your 808 is wide and messy in the low-end:
1. Put Spreader on the 808 mixer track.
2. Set **Low Bypass** to 150Hz.
3. Enable the **Mono** switch in the bypass section.
4. Set **Width** to 60%.
- *Result:* Your sub-bass is perfectly mono and punchy, but the distortion/mids are wide and "mean."

## 2. Realistic "Vocal Doubling"
To make a lead vocal sound like it was recorded twice:
1. Use a mono vocal track.
2. Set **Width** to 40%.
3. Adjust **Separation** until the center of the vocal still feels strong but has a "halo" of width around it.

## 3. Cleaning Up "Lopsided" Samples
If a sample sounds "louder on the left":
1. Look at the **Vectorscope**.
2. Use the **Separation** slider to pull the signal back toward the center ("Merged").
3. Use the **Width** slider to re-expand it evenly.

## 4. The "Infinite" Pad Swell
Automate the **Width** parameter from 0% to 100% over 4 bars during a transition. Because Spreader is phase-safe, the swell will sound smooth and natural, unlike traditional stereo enhancers which might "wobble" the pitch.

## 5. Drum Bus Immersion
Instead of widening every drum individually:
1. Route all drums (except Kick) to a "Drum Bus."
2. Add Spreader with a low **Width** (20-30%).
- *Result:* The drums feel like they are "living in a space" rather than just being panned left or right.

## 6. High-Frequency "Sparkle"
Set the **Low Bypass** very high (e.g., 5kHz). Now, only the top-end air and transients are widened. This is a great trick for acoustic guitars or hi-hats to add "shimmer" without affecting the core tone.

## Common Pitfalls + Fixes
- **Pitfall:** Bass sounds "hollow."
  - **Fix:** Increase the **Low Bypass** frequency and ensure the **Mono** switch is engaged.
- **Pitfall:** Signal sounds too quiet after widening.
  - **Fix:** Increase the **Gain** knob inside Spreader.
- **Pitfall:** Vectorscope is just a vertical line.
  - **Fix:** You haven't increased the **Width** slider yet!
