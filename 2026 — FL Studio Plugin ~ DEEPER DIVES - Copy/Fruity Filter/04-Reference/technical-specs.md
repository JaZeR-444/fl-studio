# Technical Specs: Fruity Filter Mechanics

## 1. State Variable Topology

*   **Definition:** A filter design that solves a differential equation relative to state variables.
*   **Outputs:** It provides LP, BP, and HP from the same mathematical loop.
*   **Slope:** Fixed at **12dB/Octave**.

## 2. Phase Cancellation (The Notch)

*   **Math:** `Notch = LowPas + HighPass`.
*   **Observation:** If you turn up both LP and HP knobs, you will see a dip at the cutoff frequency.
*   **Depth:** The depth of this notch depends on the phase alignment. In digital SVF implementations, the notch is usually perfect.

## 3. Oversampling (x2)

*   **Nyquist:** Filters can become unstable or warp as they approach the Nyquist frequency (half the sample rate).
*   **Solution:** Oversampling processes audio at 2x rate, pushing the Nyquist limit higher, allowing the filter to operate cleanly in the audible high-end (15kHz-20kHz) without "cramping".

## 4. DC Offset (Center)

*   **Artifacts:** Highly resonant filters with fast modulation can produce a low-frequency bias (the waveform moves off the center line).
*   **Fix:** The **Center** switch likely activates a High Pass filter at ~5Hz to strip this DC offset, preserving headroom.
