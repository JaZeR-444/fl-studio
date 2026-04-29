# UI Map And Signal Flow: Fruity Parametric EQ

## UI Tour
1.  **7 Frequency Sliders:** The main vertical controls.
    - **Top (Center):** 0dB (No change).
    - **Up:** Boost (up to +18dB).
    - **Down:** Cut (down to -18dB).
2.  **FREQ Knobs (Below Sliders):** Adjusts the center frequency of each band.
3.  **BW (Bandwidth/Q) Knobs:** Controls how "wide" or "narrow" the curve is. [SRC: IL-MAN]
4.  **Shape Selector (Icons):** Click the symbols at the bottom to change filter types (Peaking, Shelf, LP, HP, Notch, BP).

## Functional Flow
1.  **Input:** Audio enters the plugin.
2.  **Series Processing:** The signal passes through Band 1, then Band 2, and so on, until Band 7.
3.  **Coefficient Calculation:** The IIR (Infinite Impulse Response) algorithm calculates the gain/phase shift based on your slider positions.
4.  **Output:** Processed audio is sent to the next mixer slot.

## Things Beginners Misunderstand
- **No Visualizer:** Many beginners open PEQ1 and think it’s "broken" because there’s no waveform. This is a feature, not a bug.
- **Band Overlap:** If you boost 500Hz on Band 3 and cut 500Hz on Band 4, they will cancel each other out.
- **Band 1 & 7 Defaults:** By default, Band 1 is often a Low Shelf and Band 7 is a High Shelf. You must click the icons to change them to High Pass or Low Pass. [SRC: REPUTABLE]
