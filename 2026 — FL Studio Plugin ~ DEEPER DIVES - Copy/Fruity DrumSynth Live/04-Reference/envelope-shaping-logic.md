# Reference: Envelope Shaping Logic (DrumSynth Live)

Fruity DrumSynth Live uses a unique envelope architecture that differs from standard ADSR synths.

## 1. Osc 1 Envelopes (Swept Sine)
*   **Decay:** The only primary control for volume length.
*   **Sweep:** Controls the "Pitch Envelope." A higher value means the pitch starts higher and drops faster to the base Freq.
*   **Logarithmic Curve:** The envelopes are naturally logarithmic, mimicking the way a real drum head decays.

## 2. Osc 2 Envelopes (Noise)
*   **Attack:** Can be set to "soft" for shakers and "hard" for claps.
*   **Release:** Essential for snare tails and hi-hat ring.

## 3. Retrigger Logic
*   The retrigger doesn't just repeat the audio; it **re-triggers the entire envelope**. 
*   **Impact:** This means if your decay is long, the repeats will overlap and "sum," getting louder. If the decay is short, you get a clean "machine gun" effect. [SRC: IL-MAN]
