# Technical Reference: Ring Modulation Theory

Understanding the math behind the "Both" mode. [SRC: DSP-Theory]

## 1. What is Ring Modulation?
Ring Modulation is a specific type of amplitude modulation. It multiplies two signals together: the **Carrier** (your audio) and the **Modulator** (Frequency Shifter's internal sine wave).

## 2. Sum and Difference Tones
In standard frequency shifting, you only hear the **Sum** (Up) or the **Difference** (Down). In Ring Modulation (Mode: BOTH), you hear **Both simultaneously**.
- If your audio is 1000Hz and you shift by 100Hz:
  - **UP** = 1100Hz.
  - **DOWN** = 900Hz.
  - **BOTH** = 1100Hz AND 900Hz.

## 3. The "Robotic" Character
Because the original fundamental (1000Hz) is replaced by the sum and difference, the sound loses its original pitch center. This is what creates the "Dalek" or "Robotic" voice effect.

## 4. Aliasing and Sample Rate
Frequency shifting can easily push frequencies above the Nyquist limit (half the sample rate).
- **The Risk**: This causes "Aliasing" where high frequencies bounce back down into the audible range as noise.
- **The Fix**: High shifts are cleaner at higher project sample rates (e.g. 96kHz). If you hear digital "crackle," lower the **Frequency** knob.
