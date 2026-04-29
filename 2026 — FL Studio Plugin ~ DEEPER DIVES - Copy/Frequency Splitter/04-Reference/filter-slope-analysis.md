# Technical Reference: Filter Slope Analysis

A deep look at the steepness and behavior of the 16-band crossover filters. [SRC: IL-MAN]

## 1. What is Filter Slope?
Slope refers to the rate at which frequencies are attenuated beyond the cutoff point. In Frequency Splitter, this is measured in Decibels per Octave (dB/oct).

## 2. Slope Comparison Table
| Setting | Character | Best Use Case |
| :--- | :--- | :--- |
| **6dB** | Extremely Gentle | Transparent mixing; wide tonal balance shifts. |
| **12dB** | Musical | Subtractive synthesis; gentle instrument separation. |
| **24dB** | Standard | Standard multi-band processing; the "Goldilocks" slope. |
| **48dB** | Steep | Surgical isolation; keeping distortion out of the sub-bass. |
| **96dB** | Brickwall | Heavy sound design; total frequency isolation. |

---

## 3. The "Ringing" Phenomenon
As the slope increases (gets steeper), the filter introduces more **Group Delay** and resonant ringing at the crossover point.
- **Audible Effect**: A 96dB slope can sound "chirpy" or add a metallic "ping" to transients.
- **Strategy**: Always use the **shallowest slope possible** that still achieves your isolation goal.

## 4. Overlap Logic
Unlike a standard EQ, Frequency Splitter's filters are designed to sum back to a 100% flat line.
- **Linkwitz-Riley**: This is the math used in the plugin. It ensures that when you combine the Low and High bands, there is no gain boost at the crossover point.
- **Phase Shift**: In **Zero Latency** mode, the phase shift is constant across the spectrum, but the *relative* phase between bands remains aligned for a flat sum.
