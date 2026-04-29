# Technical Specs: Fruity Compressor Mechanics

## 1. Heritage (Ultrafunk Sonitus)

*   **Origin:** Fruity Compressor uses the code base from the **Ultrafunk Sonitus:fx** suite, licensed by Image-Line years ago.
*   **Why it matters:** These algorithms are revered in the mixing community (Cakewalk Sonar users) for being incredibly musical and efficient. It is not just a "stock" compressor; it is a vintage DSP code.

## 2. Gain Structure

*   **Input Range:** -Inf to +6dB.
*   **Threshold Logic:** The Threshold is absolute (dBFS).
*   **Makeup Gain:** Applied *after* compression.
*   **Clip Risk:** Since there is no integrated Limiter (unlike Fruity Limiter), it is possible to clip the output if Makeup Gain is too high.

## 3. Variable Knee Geometry

The "Type" selector changes the geometric curve of the transfer function.
*   **Hard:** Sharp 45-degree angle at threshold.
*   **Soft:** Parabolic curve starting `0.5 * Knee_dB` below threshold.
*   **Vintage:** Inverse-Logarithmic curve. As input >> threshold, the ratio tends back towards 1:1. This is counter-intuitive but prevents "choking" the sound on massive transients.

## 4. TCR (Transient Controlled Release)

*   **Algorithm:** Monitors signals for rapid rise times (Delta > X).
*   **Adaptation:**
    *   If Signal is Steady state: Use User Release Time.
    *   If Signal is Transient: Use Short Release Time (Internal variable).
*   **Goal:** To maximize Loudness (RMS) without destroying Impact (Peaks).
