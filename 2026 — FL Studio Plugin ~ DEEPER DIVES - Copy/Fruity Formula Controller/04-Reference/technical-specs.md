# Technical Specs: Fruity Formula Controller Mechanics

## 1. Variable List

*   **Parameters:** `a`, `b`, `c`.
*   **Time:**
    *   `SongTime`: Playhead position (Beats?).
    *   `Time`: System time (seconds running).
*   **Math Constants:** `Pi`, `e`.

## 2. Compilation Engine

*   **Type:** Likely a Just-In-Time (JIT) math parser or interpreted expression evaluator.
*   **Validation:** Formula Controller checks syntax on "Enter". If invalid, it shows an error message below the text box.
*   **CPU:** Math operations are incredibly cheap (nanoseconds). You can run hundreds of instances without CPU hits.

## 3. Sample Rate (Resolution)

*   **PPQ:** FL Studio automation usually runs at 96 PPQ (Pulses Per Quarter note).
*   **Smoothness:** The Formula Controller output is updated at this rate.
*   **Audio Rate?** No. Formula Controller is a **Control Rate** plugin. You cannot use it to generate audio oscillators (aliasing will occur above ~50Hz). It is for modulation only.

## 4. Range Clamping

*   **Hard Clip:** Any value `> 1` becomes `1`. Any value `< 0` becomes `0`.
*   **Wraparound:** It does *not* wrap around (modulo) automatically. You must use `Frac()` for sawtooth looping.
