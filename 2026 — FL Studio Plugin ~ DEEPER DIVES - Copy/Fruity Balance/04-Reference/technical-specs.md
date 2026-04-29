# Technical Specs: Fruity Balance Mechanics

## 1. Panning Law

*   **Type:** Circular Panning (Summed).
*   **Math:** When Panning Left:
    *   Left Output = Left Input + (Right Input * Pan_Factor).
    *   Right Output = Right Input * (1 - Pan_Factor).
*   **Result:** This conserves the *energy* of the stereo signal. It does not simply discard the Right channel (which would be "Balance" panning).

## 2. Volume Resolution

*   **Bit Depth:** 32-Bit Floating Point.
*   **Headroom:** Infinite internal headroom.
    *   You can boost +6dB inside Fruity Balance, clip the plugin meter, but sound clean as long as you lower the gain later in the chain.
    *   FL Studio's internal audio path is 32-bit float, so Fruity Balance cannot "clip" digitally unless it hits the Master Output (DAC).

## 3. Automation Smoothing

*   **Parameter:** Volume / Balance.
*   **Smoothing:** Fruity Balance has extremely fast parameter response times (low smoothing).
*   **Benefit:** Ideal for "Sidechaining" and "Gating" where instant volume drops are needed.
*   **downside:** If you automate it with a "Stepped" automation clip (rectangular), it might click. Use small slopes (2ms) to de-click.

## 4. Gain Range

*   **Max Boost:** ~x2.0 (+6dB).
*   **Max Cut:** -Infinity (Silence).
*   **Default:** 0.8 / 1.0 (Unity Gain is roughly at the 80% mark? No, check hint bar).
*   **Unity:** The default load state is Unity Gain (0dB).
