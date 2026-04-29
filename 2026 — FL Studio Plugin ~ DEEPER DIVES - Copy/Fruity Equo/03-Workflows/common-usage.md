# Common Workflows: Fruity Equo

## 1. Complex Analyzing

1.  **Mode:** Switch Equo to **Analyze** mode (if available/implied functionality).
2.  **Display:** The bars react to the input audio.
3.  **Use:** Use it as a secondary Spectrum Analyzer to spot which specific Graphic Band corresponds to a ringing frequency.

## 2. The "Riser" Builder

1.  **Input:** White Noise.
2.  **Setup:**
    *   Bank 1: All bands at 0 (Silence).
    *   Bank 8: All bands at Max (Loud).
    *   Bank 4: A peak in the middle.
3.  **Morph:** Automate Morph from 1 to 8 over 8 bars.
4.  **Shift:** Slowly automate Shift Up.
5.  **Result:** A complex, evolving riser that grows in volume and spectral complexity.

## 3. Multi-Band Distortion (Manual)

1.  **Routing:**
    *   Equo acts as the crossover.
    *   **Send Mode:** Send Lows to Track 1, Mids to Track 2, Highs to Track 3.
2.  **Processing:**
    *   Track 1 (Lows): Compress heavily.
    *   Track 2 (Mids): Add **Fruity Fast Dist**.
    *   Track 3 (Highs): Add **Fruity Reeverb 2**.
3.  **Result:** A pro-level sound design chain where effects are targeted to specific frequency content.

## 4. Interpolated Filter Sweeps

1.  **Goal:** A custom Low Pass Filter shape.
2.  **Bank 1:** Draw a Steep Low Pass.
3.  **Bank 2:** Draw a Gentle Low Pass.
4.  **Bank 3:** Draw a Resonant Low Pass (Peak at cutoff).
5.  **Morph:** Sweeping through these banks changes the *character* of the filter (Steepness/Resonance) dynamically. Standard filters usually only let you change Cutoff, not slope/shape in real-time.
