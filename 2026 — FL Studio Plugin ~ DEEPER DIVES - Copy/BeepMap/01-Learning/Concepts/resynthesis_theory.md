# Image-to-Sound Theory

## Reverse Spectrogram Synthesis
A spectrogram is a visual representation of the spectrum of frequencies in a sound. BeepMap performs **Reverse Spectrogram Synthesis**. It treats the Y-axis as frequency and the X-axis as time, effectively "drawing" the sound into existence.

## The Fourier Relationship
Every complex sound is just a sum of sine waves at different frequencies and amplitudes.
- BeepMap adds one sine wave for every horizontal row of pixels.
- A high-resolution image (tall) results in thousands of sine waves, creating a dense "Wall of Sound".
- A low-resolution image (short) results in a "lo-fi" or "chiptune" sound because there are fewer sine waves to fill the spectrum.
