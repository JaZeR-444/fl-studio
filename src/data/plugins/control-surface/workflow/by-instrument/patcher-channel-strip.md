# Patcher Channel Strip Design

**Goal:** Create a unified "Console" strip for mixing.

### The Setup
1.  Open **Patcher** as an effect.
2.  Load **Control Surface** (for the UI).
3.  Load **Fruity Parametric EQ 2** and **Fruity Compressor**.

### The Surface Layout
-   Create vertical sliders for:
    -   **"Drive"** (Compressor Threshold/Ratio formula).
    -   **"Air"** (EQ High Shelf Gain).
    -   **"Body"** (EQ Low Shelf Gain).
    -   **"High Pass"** (EQ Band 1 Frequency).

### Visual Styling
-   Use "Mixer Track" style sliders.
-   Add a **Bevel** behind them to look like a hardware module.
-   Add a **Label** at the top: "VINTAGE STRIP".

### Routing
-   Map the "High Pass" slider to EQ Band 1 Freq. Set the mapping formula to `Input * 0.5` to restrict the range (so it doesn't sweep up to 20kHz).
-   Map "Drive" to Compressor Threshold (inverted formula: `1 - Input`) and Make-up Gain simultaneously for auto-gain behavior.
