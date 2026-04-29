# Technical Manual: Spectral Deconvolution Algorithms and IR Extraction

## 1. Introduction: The Inverse of Sound
Convolution is the process of applying one signal's character to another. **Deconvolution** is the mathematical opposite—it is the process of **Extracting** the character of an environment from a recording. **Fruity Convolver** uses advanced deconvolution algorithms to turn a simple "Sine Sweep" recording into a professional-grade Impulse Response (IR). This guide explores the mathematics of this process and the engineering protocols required for "Sonic Cloning."

---

## 2. Theoretical Foundation: The Transfer Function
### 2.1 The Division of Spectra
In the Time Domain, convolution is an integral. In the Frequency Domain (FFT), it is simple multiplication: `Y(f) = X(f) * H(f)`.
- `Y(f)`: The recorded signal (The room with the sound).
- `X(f)`: The source signal (The dry sound).
- `H(f)`: The **Impulse Response** (The "Soul" of the room).
- **The Deconvolution Math:** `H(f) = Y(f) / X(f)`. 
- **The Reality:** By "Dividing" the recording by the original sweep, Convolver "Subtracts" the source, leaving only the environment.

---

## 3. The Sine Sweep Protocol (Log-Sweep)
### 3.1 Why not White Noise?
While white noise covers all frequencies, it has a low **Signal-to-Noise Ratio (SNR)**.
- **The Log-Sweep Advantage:** A sine sweep spends more time in each frequency, providing a much higher SNR.
- **The Mathematical Result:** The resulting IR is "Cleaner" and has a lower noise floor, which is essential for the "Hi-Def" atmosphere of modern R&B.

---

## 4. The Regularization Problem
### 4.1 Division by Zero
In the equation `H(f) = Y(f) / X(f)`, if the source signal `X(f)` has no energy at a certain frequency, the computer tries to divide by zero.
- **The Consequence:** This creates a massive "Spike" of digital noise (Artifacts).
- **The Convolver Solution:** The engine uses a **Regularization Parameter**. It adds a tiny amount of white noise to the denominator to ensure the division is always stable.
- **Master Strategy:** If your extracted IR sounds "Hiss-heavy," it means your original sweep didn't have enough energy in the highs. Use a **Brighter Sweep** next time!

---

## 5. Phase Realignment and Group Delay
### 5.1 The Temporal Correction
A recorded sweep has a "Group Delay"—different frequencies arrive at different times. 
- **The Deconvolution Magic:** The algorithm perfectly corrects this delay. It "Pulls" all frequencies back to `t=0`.
- **The Warning:** If you have any **Latency-inducing plugins** on your mixer during the capture, the deconvolution will be "Smeared." Always disable all other effects when capturing an IR!

---

## 6. Table of Extraction Constants

| Target | Sweep Duration | Sample Rate | Resulting IR | Use Case |
|--------|----------------|-------------|--------------|----------|
| **Vocal Booth**| 5 seconds      | 44.1 kHz    | Tight / Clean | Professional Vocals. |
| **Stone Hall** | 15 seconds     | 96.0 kHz    | Vast / Silky | Cinematic R&B. |
| **Analog EQ**  | 1 second       | 44.1 kHz    | Static / Pure | Gear Cloning. |
| **Guitar Amp** | 10 seconds     | 48.0 kHz    | Warm / Focused| Lo-Fi Textures. |

---

## 7. Conclusion: The Master of Extraction
Mastering deconvolution in Fruity Convolver is about **Technical Purity.** By understanding the "Spectral Division" math and the importance of SNR in your sweeps, you can turn any physical space or piece of hardware into a digital asset. This is the difference between a "Producer" and a **"Technological Sound Designer."** Follow these protocols to build your own exclusive library of world-class environments.

---
**Document Version:** 1.0 (Technical Reference Tier)
**Author:** DSP Mathematics Lead
**Keywords:** Deconvolution, FFT Math, Spectral Division, IR Extraction, Sine Sweep, FL Studio Engineering.
