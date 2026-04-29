# Technical Specs: BeepMap Mechanics

## 1. Additive Synthesis Topology

*   **Engine:** BeepMap is an **Additive Bank**.
*   **Oscillator Count:** Defined by `Max Bitmap Height`.
    *   If Height = 500, BeepMap allocates 500 sine wave generators.
*   **Amplitude Control:** Each oscillator's volume is controlled by the brightness of the pixel at that Y-coordinate for the current time slice (X).
*   **Phase:** Oscillators are free-running or reset based on implementation (usually non-coherent), which is why BeepMap sounds "phasey" or "blurred" rather than sharp.

## 2. The Project Size Trap

*   **Data Storage:** Unlike Sampler channels (which store a *path* to a file on your disk), BeepMap saves the **actual raw bitmap data** inside the `.flp` project file.
*   **Consequence:**
    *   If you load a 4K resolution BMP into BeepMap, your project file size creates a massive bloat.
    *   Saving/Loading the project becomes slower.
*   **Best Practice:** Resize images to small dimensions (e.g., 640x480) before importing. High resolution is rarely audible as "better" in sonification—it just sounds noisier.

## 3. Linear vs Logarithmic Scale

*   **Linear (Hz):**
    *   `Freq = Y_Position * Constant`.
    *   Result: Frequencies are equally spaced in Hz. This crowds the high-end and spreads out the low-end. Musically dissonant.
*   **Logarithmic (Cents):**
    *   `Freq = Base * 2^(Y_Position / Octave_Height)`.
    *   Result: Frequencies are equally spaced in Pitch. A straight diagonal line sounds like a "Shepard Tone" or a consistent musical slide.

## 4. Stereo Calculation

BeepMap does not use panning in the traditional sense. It generates two independent signals.
*   **Left Signal:** Sum of all Red intensity.
*   **Right Signal:** Sum of all Green intensity.
*   **Correlation:** If an image is Greyscale (Black and White), Red always equals Green. Therefore, L = R. The output is **Mono**.
*   **Implication:** To get stereo width, your image *must* have color variation.
