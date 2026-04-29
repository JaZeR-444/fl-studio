# Technical Specs: Effector Mechanics

## 1. Filter Topology (The Split)

*   **Type:** 12dB/Octave State Variable Filter.
*   **Behavior:**
    *   **X = 0-49%:** Low Pass (Cutoff rises from 0Hz to 20kHz).
    *   **X = 50%:** Neutral (No filtering).
    *   **X = 51-100%:** High Pass (Cutoff rises from 0Hz to 20kHz).
*   **Implication:** You cannot sweep smoothly from Low Pass to High Pass without passing through a "Neutral" zone in the middle.

## 2. Lo-Fi Aliasing

*   **Sample Rate Reduction:** Effector uses a "Zero-Order Hold" reduction method without anti-aliasing filters.
*   **Artifacts:** This creates prominent "Mirror Frequencies".
    *   If Project Rate = 44.1kHz.
    *   Effector Rate = 10kHz.
    *   A 6kHz sine wave will output a 4kHz alias (10 - 6 = 4).
*   **Bit Depth:** Simple truncation. High quantization noise floor at low bit depths.

## 3. Gain Staging

*   **Input Gain:** Pre-effect trim.
*   **Output Gain:** Post-effect trim.
*   **Wet/Dry:**
    *   The Dry signal is *unaffected* by the Input Gain knob? **No**, the Dry/Wet mix happens at the end.
    *   Structure: `Input -> Gain -> [Effect Block] -> [Mixer] -> Output Gain`.
    *   Therefore, cranking Input Gain will distort the Effect, but the Dry signal mixed back in will also be louder.

## 4. Performance Latency

*   **Zero Latency:** Effector is designed to add 0ms of lookahead latency.
*   **Smoothing:** The X/Y pad has minimal parameter smoothing to ensure instant response for scratching/stuttering. fast movements may cause "zipper noise" (stepping) on the Filter frequency.
