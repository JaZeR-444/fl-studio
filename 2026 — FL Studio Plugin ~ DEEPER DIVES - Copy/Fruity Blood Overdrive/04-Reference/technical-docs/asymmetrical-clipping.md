# Asymmetrical Clipping & Harmonic Theory

## Why Asymmetrical?
Standard digital clipping (Hard Clipping) is usually **Symmetrical**. It chops off the top and bottom of the waveform equally. This produces only **Odd Harmonics** (3rd, 5th, 7th...), which sounds "cold" and "sterile".

**Fruity Blood Overdrive** uses **Asymmetrical Clipping**:
- It clips one side of the waveform (the positive or negative peak) differently than the other.
- This produces a mix of **Even and Odd Harmonics**. 
- Even harmonics are perceived as "musical" and "warm", similar to the distortion produced by vacuum tubes or classic analog tape.

## The Role of Pre-Emphasis (Pre Band)
The `Pre Band` is a 6dB/oct or 12dB/oct low-pass filter. 
- **The Physics:** Distortion is amplitude-dependent. Low frequencies have much more energy (amplitude) than high frequencies. 
- **The Problem:** If you don't filter them, the sub-bass will trigger the distortion first, causing the whole sound to "pump" and turn to mush.
- **The Solution:** By filtering the lows out of the *detector* circuit with the Pre Band, you allow the mid-range (where the character is) to drive the distortion engine, leading to a much clearer, more defined sound.

## Post-Processing Recommendation
Because overdrive naturally compresses the signal, you usually don't need a compressor after Blood Overdrive. However, a **Fruity Parametric EQ 2** is often useful to remove any unwanted resonant peaks created by the new harmonics.