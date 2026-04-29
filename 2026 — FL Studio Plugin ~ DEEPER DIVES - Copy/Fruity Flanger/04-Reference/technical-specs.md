# Technical Specs: Fruity Flanger Mechanics

## 1. Modulation Logic

*   **Formula:** `Current_Delay = Delay + (LFO * Depth)`.
*   **Implication:** If Delay is 10ms and Depth is 5ms, the delay line sweeps used 10ms-15ms.
*   **Through Zero:** To achieve Through Zero, the Delay must hit 0ms. Therefore `Delay` should be 0, and `Depth` should drive it? Or `Delay` is the *start* point?
    *   Actually, if Delay is 0 and Depth is 5ms, it sweeps 0-5ms.

## 2. Damping Topology

*   **Type:** 6dB/Oct Low Pass Filter in the Feedback Loop.
*   **Effect:** Simulates "Analog BBD (Bucket Brigade Device)" chips which naturally lose high frequencies on every recirculation.
*   **Value:** "0" means No Damping (Bright). "1" means Full Damping (Dark).

## 3. Stereo Cross

*   **Signal:** `Output_L = Wet_L + Cross_R` ?
*   **Inversion:** The Cross signal is inverted.
*   **Psychoacoustics:** This creates an artificial Phase Difference that forces the brain to localize sound "outside" the head. Highly effective on headphones, dangerous on Mono systems.

## 4. LFO Shape

*   **Sine:** Smooth, musical, liquid. Transitions slow down at the peaks/troughs.
*   **Triangle:** Linear, mechanical, siren-like. Constant rate of change.
*   **Hybrid:** The Shape knob morphs between them, allowing you to fine-tune the "turnaround" feel of the sweep.
