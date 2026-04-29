# Genre Rules: Hip-Hop & R&B (Voltage Controller)

## Rule 1: The "Analog 808" Lock
*   If using an analog module for sub-bass/808s, ensure your **Pitch Scale** is calibrated perfectly at the low octaves (C1-C3). Even 10 cents of drift will ruin the mix's low-end foundation.

## Rule 2: DC Safety First
*   **Rule:** Never plug your interface output directly into your speakers while Voltage Controller is active. The high DC voltage can damage traditional speaker drivers if a "pop" occurs. Use a mixer or attenuator. [SRC: IL-KB]

## Rule 3: Latency Compensation
*   Analog signals take time to travel out and back in. 
*   **Rule:** Always use **Automatic Plugin Delay Compensation (PDC)** in FL Studio. If the hardware sounds "behind," use the **Track Latency** offset in the Mixer.

## Rule 4: Automation "Stepping"
*   **Rule:** When controlling analog filters, ensure your FL Automation Clips are set to high resolution. Low-resolution automation can cause "zipper noise" because the analog filter is fast enough to hear the digital steps.

## Rule 5: Gain Staging the Return
*   Since the sound comes back through an Input, treat it like a vocal recording. Use a **Fruity Limiter** on the input channel to catch any analog feedback spikes. [SRC: REPUTABLE]