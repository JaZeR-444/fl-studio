# CPU Usage & Audio Quality

Gross Beat is generally efficient, but specific settings can impact performance and export quality.

## 🎛️ The "HQ Resampling" Switch
Located in the bottom right corner.

*   **Off (Linear Interpolation)**:
    *   **CPU**: Very Low.
    *   **Sound**: Slightly "lo-fi" or grainy when pitching down. High frequencies may dull.
    *   **Use Case**: Real-time monitoring, live performance, or when you *want* a gritty, old-sampler sound (Aliasing).
*   **On (Sinc Interpolation)**:
    *   **CPU**: Higher.
    *   **Sound**: Crystal clean pitch shifts. Preserves high-end clarity.
    *   **Use Case**: **Always turn this ON before rendering (exporting) your song.**

## ⚠️ The "Smart Disable" Trap
*   FL Studio has a macro "Switch smart disable for all plugins".
*   **Risk**: Gross Beat relies on a continuous buffer. If Smart Disable turns the plugin off during silence, the buffer empties.
*   **Result**: When audio starts again, Gross Beat might have a "gap" in its memory, causing the first echo/reverse to be silent.
*   **Fix**: If you hear dropouts, open Gross Beat -> Wrapper Settings -> **Deselect "Smart Disable"**.

## 💻 Latency & Buffer Size
*   Gross Beat does not add latency *processing* delay usually (0ms), BUT:
*   If your audio driver buffer size is very high (e.g., 2048 samples), the visual feedback in the Gross Beat grid might look laggy compared to the audio.
*   **Fix**: For tight visual editing, aim for < 512 samples.
