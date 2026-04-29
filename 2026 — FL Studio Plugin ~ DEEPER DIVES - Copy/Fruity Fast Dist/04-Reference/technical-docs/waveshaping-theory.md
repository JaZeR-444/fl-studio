# Waveshaping and Harmonic Generation

## What is Waveshaping?
Waveshaping is a form of distortion where the relationship between the input amplitude and output amplitude is non-linear.
- **Linear:** `Output = Input * Gain` (Straight line).
- **Non-Linear:** `Output = f(Input)` (Curve).

## The Threshold (Thres) Parameter
In Fast Dist, the **Thres** parameter defines the "Knee" of the waveshaping curve.
- **High Threshold:** Most of the signal is linear; only the very loudest peaks are rounded off.
- **Low Threshold:** Even quiet signals hit the "curve", resulting in a highly distorted, compressed sound.

## Harmonics and Aliasing
Because Fast Dist is a "Fast" plugin (Zero Latency, Low CPU), it does not use heavy **Oversampling**.
- **The Risk:** At extreme settings, the distortion can create harmonics that exceed the Nyquist frequency (half the sample rate), causing **Aliasing**.
- **The Result:** This aliasing "folds back" as metallic, inharmonic noise.
- **The Fix:** Use the **Post Filter** to remove the high-end frequencies where aliasing is most prominent.

## Type A vs. Type B
- **Type A:** Often modeled after a "Soft-Clipping" tube circuit. It emphasizes even harmonics and has a smoother transition.
- **Type B:** Often modeled after "Hard-Clipping" or "Transistor" distortion. It emphasizes odd harmonics and has a sharper, more aggressive character.
