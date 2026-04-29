# UI Map And Signal Flow: Fruity Convolver

## UI Tour
Fruity Convolver features a spectral-focused interface:

1.  **Waveform Window:** Shows the loaded Impulse Response (IR). You can drag and drop any WAV file here. [SRC: IL-MAN]
2.  **Envelope Editor:** The white line over the waveform. You can draw Volume, Pan, or Stereo Width envelopes to shape the reverb tail.
3.  **EQ Window:** The green line. Allows for **Linear Phase EQ** shaping of the processed signal.
4.  **Stretch Knob:** Changes the length and pitch of the IR (Time manipulation).
5.  **Pre-Delay:** Sets the gap between the dry sound and the start of the convolution.
6.  **Self-Convolve Button:** Feeds the IR back into itself for extreme, metallic textures.

## Functional Flow
1.  **Input:** Audio enters.
2.  **Delay:** Pre-delay is applied.
3.  **FFT Convolution:** The plugin performs a Fast Fourier Transform to combine the input signal with the IR.
4.  **Envelope/EQ Shaping:** The result is shaped by the user-drawn curves.
5.  **Latency Correction:** The plugin reports its latency to FL Studio to ensure everything stays in sync. [SRC: IL-MAN]
6.  **Output:** Summed Wet/Dry signal.

## Things Beginners Misunderstand
- **"It’s too quiet":** IRs vary wildly in volume. Use the **Normalize** button (in the waveform editor) to ensure the space is audible.
- **Latency Delay:** Convolution is heavy math. If you feel a "lag" while playing, check the **Use Latency** button in the settings.
- **Dry/Wet on Sends:** If using Convolver on a Send, **turn the DRY slider to zero**. [SRC: REPUTABLE]
