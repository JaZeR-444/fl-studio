# Non-Linear Transfer Math

## The Function of Distortion
In Fruity Fast Dist, the signal is passed through a **Transfer Function** (a curve).

### Symmetrical Clipping Math
`Output = Sin(Input * PreAmp)`
- When the input is small, `Sin(x) ≈ x` (Linear).
- When the input is large, the Sine function curves, rounding off the peaks. 
- **Fourier Result:** This produces only **Odd Harmonics** (3rd, 5th...). This is the sound of "Square" waves.

### Asymmetrical Clipping (Type A)
`Output = 1 - Exp(-Input)`
- This function is not mirrored for positive and negative values.
- **Fourier Result:** This produces **Even Harmonics** (2nd, 4th...). These harmonics are an octave apart from the fundamental, making them sound "Musical" and "Harmonious" rather than "Noisy."
