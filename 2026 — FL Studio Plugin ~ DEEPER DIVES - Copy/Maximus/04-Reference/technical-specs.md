# Technical Specs: Maximus Mechanics

## 1. Lookahead Topology (Latency)

Maximus is not a "Rear-view" compressor; it is a "Predictive" compressor.

*   **Mechanism:** It buffers audio into RAM before playing it.
*   **Latency Calculation:** `Total Latency = LMH Delay + Master Attack`.
*   **Why?** By seeing the peak 2ms before it happens, the gain reduction envelope can ramp down *smoothly* to meet the peak, rather than slamming shut instantly (which causes clicking).
*   **Phase:** The Low, Mid, and High bands are delayed by the exact same amount to maintain phase coherence.

## 2. Release Curve Physics (Rel 1 vs Rel 2)

Most compressors have one release shape (usually exponential). Maximus blends two.

*   **Release 1 (Accelerating):**
    *   **Math:** The recovery starts slow and speeds up.
    *   **Sound:** "Snappy". It jumps back to full volume quickly. Good for percussion.
*   **Release 2 (Decelerating):**
    *   **Math:** The recovery starts fast and slows down as it approaches 0dB.
    *   **Sound:** "Smooth". It glides back to full volume. Good for Bass/Vocals.
*   **Curve Knob:** Blends the weighting of these two mathematical functions.

## 3. Saturation Ceiling Dynamics

The **Ceiling (CEIL)** knob in the saturation section is a "Soft Clipper Threshold".

*   **Logic:**
    *   If Signal < Ceiling: Linear operation (Clean).
    *   If Signal > Ceiling: Non-linear waveshaping begins.
*   **Curve Shape:** The transition is hyperbolic (Soft Knee).
*   **Note:** This happens *after* the compression envelope but *before* the band output gain. This means you can compress a signal, then saturate it, then boost it.

## 4. Linear Phase Crossover (FFT)

*   **Filter Type:** Finite Impulse Response (FIR) using FFT convolution.
*   **Slope:** The transitions between Low/Mid and Mid/High are perfect vertical cuts (if set steeply) or defined slopes, with **Zero Phase Shift**.
*   **Pre-Ringing:** Because FFT windows are symmetrical, a sharp transient (Kick) will produce a faint "echo" of itself *before* the hit. This is unavoidable in Linear Phase EQ, but in Maximus, it ensures that the recombination of the 3 bands is mathematically perfect (flat frequency response).

## 5. Parallel Processing (The "Mix" Knob)

*   **Path:** `Input -> [Split] -> [Processing] -> [Mix] -> Output`.
*   **Phase:** Because the "Dry" signal is delay-compensated to match the "Wet" signal's lookahead, there is **no phasing** (Combing) when mixing dry and wet signals, even in multiband mode.
