# Technical Specs: 3x Osc Mechanics

## 1. Oscillator Band-Limiting (HQ Mode)

*   **HQ Off (Naive):** The oscillators are generated mathematically as pure functions.
    *   **Issue:** When playing high notes (e.g., C6), the harmonics of a Saw wave extend beyond the Nyquist frequency (22.05kHz). These frequencies "bounce back" into the audible spectrum as dissonance.
    *   **Sound:** Gritty, digital dirt, buzzing.
*   **HQ On (BLEP):** Uses "Band-Limited Step" algorithms.
    *   **Function:** It suppresses harmonics above Nyquist.
    *   **Comparison:** Similar to the difference between a NES sound chip (Aliased) and a modern VA synth (Anti-Aliased).

## 2. Mix Level Mathematics

The mix knobs in 3x Osc are **relative ratios**, not absolute decibels. The algorithm normalizes the total output to 0dBfs (floating point).

*   **Formula:** `Total Output = Normalize(Osc1 + Osc2 + Osc3)`
*   **Implication:** Turning up Osc 2 *turns down* Osc 1 proportionally.
*   **Tips:**
    *   To mute Osc 1: You cannot. You must turn Osc 2/3 to 100% and ensure Osc 1 is effectively buried, or use a shape with no volume (Custom empty sample).
    *   To solo Osc 2: You cannot easily. Use volume envelopes or Phase Cancellation tricks.

## 3. AM Modulation Topology

When **AM OSC 3** is engaged:
*   **Carrier:** Osc 1 + Osc 2.
*   **Modulator:** Osc 3.
*   **Math:** `Output = (Osc1 + Osc2) * Osc3`.
*   **Unipolar vs Bipolar:**
    *   If Osc 3 is a Square wave (0 to 1), it acts as a gate (on/off).
    *   If Osc 3 is a Sine wave (-1 to 1), it acts as a Ring Modulator (inverting phase at negative cycle).

## 4. Phase Offset Physics

*   **Knob Range:** 0 to 360 degrees.
*   **Stereo Separation:** The "Phase Offset" knob adds a delta between L and R.
    *   `L_Phase = User_Setting`
    *   `R_Phase = User_Setting + Separation_Amount`
*   **Phase Cancellation:** If `L_Phase` and `R_Phase` are 180 degrees apart (Anti-phase), the sound will vanish when summed to Mono.
    *   **Check:** Always check your 3x Osc patches in Mono if using Phase Offset.
