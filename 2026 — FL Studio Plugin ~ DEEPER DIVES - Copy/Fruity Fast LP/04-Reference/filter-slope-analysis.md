# Reference: Filter Slope Analysis (Fast LP)

Understanding the technical "curve" of Fruity Fast LP helps in choosing the right mixing tool.

## 1. The Slope (dB/Octave)
Based on comparative testing with **Fruity Parametric EQ 2**, Fruity Fast LP utilizes a **12dB per Octave** (2-pole) slope. 

*   **Comparison:** This is "gentle" compared to the 24dB or 48dB slopes of modern filters. It sounds more musical and less like a "brick wall."
*   **Impact:** Frequencies are not removed instantly; they are rolled off smoothly. This is why it works so well for "Moody" and "Underwater" vibes.

## 2. Phase Response
*   Fast LP uses an **IIR (Infinite Impulse Response)** algorithm. 
*   **Phase Shift:** Moving the cutoff causes a slight shift in the timing of frequencies. Because the slope is only 12dB, this shift is minimal and usually sounds "analog" and pleasant.

## 3. Self-Oscillation
*   At `100%` Resonance, the internal feedback loop becomes a pure **Sine Wave generator**.
*   **Physics:** The filter is so resonant that it generates its own energy, even without an input signal. [SRC: UNVERIFIED]
