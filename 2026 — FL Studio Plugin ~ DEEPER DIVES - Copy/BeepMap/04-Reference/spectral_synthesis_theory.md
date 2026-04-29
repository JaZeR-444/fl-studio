# Technical Reference: Spectral Synthesis Theory (BeepMap)

A detailed look at how BeepMap turns pixels into waveforms. [SRC: IL-MAN]

## 1. The Sine Summation Engine
BeepMap is an **Additive Synthesizer**. For every vertical pixel in the image, the engine generates a Sine wave.
- If an image is 500 pixels high, BeepMap is potentially running 500 oscillators simultaneously.
- **Brightness** determines the volume of each sine wave.

## 2. Color Channel Logic
- **Red Channel**: Controls the volume of the sine wave in the **Left** channel.
- **Green Channel**: Controls the volume of the sine wave in the **Right** channel.
- **Blue Channel**: If enabled, the blue pixel value modifies the frequency of the red and green pixels (Frequency Modulation).

## 3. Scale Distribution
- **Linear**: Every pixel height represents an equal number of Hz (e.g. 1 pixel = 100Hz).
- **Logarithmic**: Pixel height is mapped to octaves. This is essential for musical sounds because human hearing is logarithmic (the distance between 100Hz and 200Hz sounds the same as 1000Hz to 2000Hz).

## 4. The Grain Bottleneck
- BeepMap's resolution is determined by the **Grain** setting.
- High Grain settings skip pixels or "jump" through the image data, creating aliasing and digital "grit."
- Low Grain settings interpolate between pixels for a smoother, more natural sound.
