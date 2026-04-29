# Resynthesis Algorithm Analysis (Morphine)

## How it Works
Morphine's resynthesis engine is an **Inverse FFT (Fast Fourier Transform)** process.

## The Import Process
1. **Analysis:** The engine scans the input WAV file. It identifies the strongest 128 frequencies (partials) at every point in time.
2. **Phase Capture:** It tracks the phase relationship of each partial to ensure the original timbre is preserved.
3. **Harmonic Mapping:** It assigns these frequencies to the additive grid.

## Manual vs. Auto Modes
- **Auto:** The engine makes its best guess for fundamental pitch and formant mapping.
- **Manual (Overrides):** Allows you to specify the fundamental note of the sample to prevent "shifting" artifacts during the analysis.

## Noise Separation
Morphine uses a **Sinusoidal + Residual** model.
- **Sinusoidal:** The pure tones go to the 128 harmonics.
- **Residual (Noise):** The breath, scratching, and non-tonal elements are converted into a noise profile for the Noise Generator. This separation allows you to pitch-shift the tonal part without affecting the character of the noise impact.
