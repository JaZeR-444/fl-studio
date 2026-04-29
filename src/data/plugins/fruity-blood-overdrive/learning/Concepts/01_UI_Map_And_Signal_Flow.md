# UI Map And Signal Flow: Fruity Blood Overdrive

## UI Tour
Fruity Blood Overdrive has a distinct "industrial" layout:

1.  **PreAmp (Input Gain):** The main drive control.
2.  **x100 Switch:** A multiplier that increases gain by 100 times. [SRC: IL-MAN]
3.  **PreBand (Filter Width):** Adjusts the bandwidth of the resonance filter.
4.  **Color (Filter Freq):** Sets the frequency of the resonant peak *before* it hits the distortion engine.
5.  **PostFilter (Cleanup):** A low-pass filter to remove the harsh "digital fizz" from the output.
6.  **PostGain (Output Volume):** **CRITICAL** for gain staging.

## Functional Flow
1.  **Input:** Audio enters.
2.  **Resonant Pre-Filter:** The signal is filtered based on **Color** and **PreBand**. This "prepares" the tone.
3.  **Amplification:** The signal is boosted by **PreAmp** (and multiplied by **x100** if active).
4.  **Saturation Engine:** The waveform is soft-clipped or folded based on the analog modeling algorithm. [SRC: UNVERIFIED - common legacy analysis]
5.  **Post-Filter:** High-frequency artifacts are removed.
6.  **Output:** Level is adjusted by **PostGain**.

## Things Beginners Misunderstand
- **The "PostGain" Necessity:** Enabling x100 will immediately clip your master. You **must** turn PostGain down before clicking x100.
- **Color Logic:** It’s not just an EQ. The Color knob decides which frequencies get distorted the *most*.
- **Stereo Image:** Blood Overdrive is mono-compatible but processes the L and R channels identically. It won't widen your sound, but it won't ruin it either. [SRC: REPUTABLE]
