# IEF Detection Logic: The Brain of the Processor

## What is IEF?
IEF stands for **Input Envelope Follower**. Most dynamics processors (like compressors) look at the *absolute level* of a sound. If it's loud, they react. [SRC: IL-MAN-10]

## How IEF is different:
Transient Processor looks at the **Slope** of the signal.
1. **The Attack:** It identifies a rapid increase in energy (The upward slope).
2. **The Release:** It identifies a slow decrease in energy (The downward slope).

## Why this matters for the user:
- **Consistency:** If you have a drum pattern where some hits are loud and some are quiet, a compressor would only "hit" the loud ones. Transient Processor will "hit" them all equally because the *slope* of the transient is the same for both.
- **Natural Response:** It mimics the way our ears perceive "sharpness" rather than just "loudness."

## The Split Frequency Slider:
The brain of the IEF can get "confused" by very slow-moving sub-bass waves (which have long slopes).
- **The Solution:** The **Split Frequency** slider tells the IEF to ignore everything below a certain point.
- **Best Practice:** Always set this higher than the fundamental frequency of your sound to avoid "flutter" distortion. [SRC: IL-MAN-10]