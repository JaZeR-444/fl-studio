# Technical Specs: Fruity Convolver Mechanics

## 1. FFT Convolution Algorithm

*   **Process:** Multiplication in the Frequency Domain.
    *   `FFT(Input) * FFT(Impulse) = FFT(Output)`.
    *   `Inverse_FFT(Output) -> Audio`.
*   **Implication:** This process is extremely CPU intensive but allows for infinite complexity (e.g., simulating 1,000,000 reflections) with the same CPU cost as a simple EQ, provided the IR length is constant.
*   **CPU:** Depends mainly on **Impulse Length**. A 10-second tail uses 10x more CPU than a 1-second tail. Always trim your IRs!

## 2. Latency & PDC

*   **Block Size:** The FFT requires a buffer of samples to process.
    *   Large Impulses requires large processing blocks -> High Latency.
*   **Zero Latency Mode:**
    *   Uses a "Partitioned Convolution" algorithm.
    *   Breaks the IR into tiny chunks. Processes the first chunk instantly (Zero Latency) while calculating the later chunks in the background.
    *   **Cost:** Significantly higher CPU spikes.

## 3. Noise Floor

*   **Recording Impulses:** Use a **Sine Sweep**, not a Gunshot/Clap.
    *   *Why:* A Clap is short (low energy). A Sine Sweep creates high energy across the spectrum for 20 seconds.
    *   **Deconvolution:** Fruity Convolver mathematically "Unwinds" the sine sweep to retrieve the Impulse Response, resulting in a much higher Signal-to-Noise ratio than a transient recording.

## 4. Stereophony

*   **True Stereo:** Left Input -> Left IR -> Left Output. Right Input -> Right IR -> Right Output.
*   **Cross Channel:** Some Convolution engines support Cross-Feed (Left Input -> Right IR). Fruity Convolver treats channels largely independently unless the "Stereo Separation" envelope is modified.
