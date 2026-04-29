# Math & Precision: Grid Science

For the advanced user, "feeling it out" isn't enough. Here is the math behind the grid.

## 📏 The Grid Dimensions
*   **Width (Time)**: 4 Beats (1 Bar).
*   **Height (Buffer)**: 2 Bars (8 Beats).

## 🧮 Tuplets & Polyrhythms
To draw triplets (1/3, 1/6, 1/12, 1/24) in a 4/4 grid:

1.  **The Math**:
    *   1 Beat = 1.0 Unit.
    *   Triplet (1/3 Beat) = 0.333...
    *   Gross Beat Snap "1/3 Beat" exists in the menu. Use it!

2.  **Complex Tuplets (5s, 7s)**:
    *   Gross Beat does **not** have a 1/5 or 1/7 snap.
    *   **Workaround**: You must calculate the decimal position or "eyeball" it relative to the 1/16th grid lines.
    *   *Formula*: `Grid Position = (Target Tuplet Index / Total Tuplets) * Beat Width`.

## 📐 Slope Formulas (Speed)

If $y$ is buffer position and $x$ is time:

*   **Normal Speed (1.0x)**: $Slope = 1$ (45 degrees).
*   **Half Speed (0.5x)**: $Slope = 2$ (Steeper).
    *   Why? To play 1 second of audio over 2 seconds of time, you must "fall behind" at a rate of 2:1?
    *   Actually: You play audio at 0.5x rate.
    *   *Buffer Movement*: You move through the buffer at 0.5x the recording speed.
    *   **Equation**: `Time Point = Safety Line - (0.5 * Elapsed Time)`.
*   **Reverse (-1.0x)**: $Slope = -1$ (Upwards).
    *   *Visual*: The line goes UP at the same angle the Safety Line goes DOWN.

## 🎛️ Exact Latency Calculation
Gross Beat introduces latency equal to the **Lookahead** (if any) or simply the **Buffer Delay** if the envelope forces it.
*   **Rule**: The plugin reports latency to FL Studio.
*   **Manual Fix**: If you are drawing a curve that starts "Deep" in the buffer (e.g., at -1 Bar), you don't *add* latency, you are just playing old audio. The *system* latency is constant.
