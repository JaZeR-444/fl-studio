# Parallel Saturation for Drums Workflow

## Goal
Add "weight" and "density" to a drum loop without losing the sharp transients (the "click" of the kick and snare).

## Steps
1. **Insert Fast Dist**: Place it on your drum mixer track.
2. **Extreme Settings**:
   - Set **Pre Amp** to **80%**. (It should sound very distorted and ugly).
   - Set **Type** to **B**.
3. **Smooth it Out**:
   - Set **Post Filter** to **40%**. This removes the nasty high-end frequencies created by the distortion.
4. **The Blend**:
   - Slowly bring the **Mix** knob down from 100% until it hits **~15-25%**.
5. **Verify**:
   - Toggle the plugin on and off.
   - You should hear the drums sounding "thicker" and "louder" without the peaks getting much higher.

## Why this works
By mixing a small amount of distorted signal with the dry signal, you fill in the "quiet" parts of the sound with harmonics, which increases the average loudness (RMS) without increasing the peak level.
