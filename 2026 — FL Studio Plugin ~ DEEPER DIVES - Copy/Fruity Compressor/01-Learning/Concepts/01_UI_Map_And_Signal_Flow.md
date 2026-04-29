# UI Map And Signal Flow: Fruity Compressor

## UI Tour
Fruity Compressor features a functional, non-visual interface:

1.  **Threshold (dB):** Sets the level where compression begins. [SRC: IL-MAN]
2.  **Ratio:** Sets the strength of the volume reduction (e.g., 4:1).
3.  **Gain:** "Makeup Gain." Boosts the signal *after* compression to match original levels.
4.  **Attack (ms):** How long before the compressor starts working.
5.  **Release (ms):** How long before the compressor stops working.
6.  **Type (Knee):** Selects the curve of the compression (Vintage, Soft, Medium, Hard).
7.  **Gain Reduction Meter:** A vertical bar showing how many dBs are being removed.

## Functional Flow
1.  **Detection:** The plugin monitors the incoming peak or RMS level.
2.  **Comparison:** It checks the level against the **Threshold**.
3.  **Timing:** The **Attack** delay is applied.
4.  **Reduction:** The signal is turned down based on the **Ratio** and **Type (Knee)**.
5.  **Recovery:** The signal returns to normal based on the **Release** time.
6.  **Amplification:** The **Gain** (Makeup) is added to the resulting signal.

## Things Beginners Misunderstand
- **"It makes it louder":** No, it makes it *quieter* first. It only sounds louder because you use the **Gain** knob afterward.
- **Attack at 0ms:** Setting Attack to zero kills the "punch" of drums. It turns the hit into a "thud." [SRC: REPUTABLE]
- **The "Type" Selector:** This isn't just a filter; it changes the *shape* of the compression. "Vintage" adds a non-linear, warmer character to the curve.
