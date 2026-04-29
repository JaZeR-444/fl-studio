# Technical Deep-Dive: Resampling Aliasing and Nyquist Physics in Fruity Delay 3

## 1. Introduction: The Digital Mirror
In the "Analog" mode of Fruity Delay 3, we are effectively performing real-time **Varispeed Resampling**. While this creates the beautiful pitch sweeps we love in psychedelic R&B, it also introduces a technical phenomenon known as **Aliasing**. For the master engineer, aliasing is not a mistake—it is a **Texture**. Understanding the mathematics of how sound "folds back" into the audible range is the key to achieving that gritty, "cool" digital edge found in modern industrial rap.

---

## 2. The Nyquist-Shannon Theorem
### 2.1 The Digital Limit
The **Nyquist Frequency** is defined as half of the Sample Rate. 
- At 44.1kHz (Standard), the limit is **22,050 Hz**.
- Any frequency created above this limit cannot be represented digitally. 

### 2.2 The "Fold-Back" Effect
When Fruity Delay 3's Analog engine speeds up the buffer (Pitching UP), it generates new harmonics.
- If a harmonic hits 25,000 Hz (which is 2,950 Hz above the Nyquist limit), it doesn't just disappear.
- **The Math:** It "bounces" off the ceiling and reflects back as **19,100 Hz** (22,050 - 2,950).
- **The Sound:** This is "Aliasing." It sounds metallic, inharmonic, and "colder" than analog distortion.

---

## 3. Resampling Algorithms: Linear vs. Sinc
### 3.1 Linear Interpolation (The "Classic" Sound)
Fruity Delay 3 uses a high-speed interpolation method to calculate the samples between the existing ones when the pitch shifts.
- **The Character:** It is intentionally slightly "lo-fi." It provides the "Grain" that producers like 40 (OVO) or Metro Boomin look for.
- **Why it's "Cool":** True analog gear (BBD chips) had limited bandwidth. The subtle aliasing in Delay 3's Analog mode mimics the "clock noise" of these vintage circuits.

---

## 4. Engineering the Aliasing (The "Mike Dean" Grit)
### 4.1 Intentional Distortion
Producers often push the Delay 3 riser (see the Dub Riser workflow) into the "Red" specifically to trigger these aliasing artifacts.
- **The Setup:** Set Sample Rate Redux to **12kHz**.
- **The Math:** Now the Nyquist limit is only **6,000 Hz**. 
- **The Result:** Every harmonic above 6kHz is now folding back into the mid-range. This creates a dense "digital scream" that is harmonically related to your melody but sounds like a dying machine.

---

## 5. Anti-Aliasing and Post-Filtering
### 5.1 Controlling the Chaos
While aliasing adds "Edge," too much of it can sound like "Static Noise."
- **The Internal LP Filter:** Fruity Delay 3 includes a 12dB/oct Low-Pass filter in the feedback loop.
- **The Master Strategy:** Set the LP filter to **8kHz**. This allows the "good" aliasing (the lower-frequency fold-back) to survive, while cutting the "harsh" high-end artifacts that cause ear fatigue.

---

## 6. Phase Jitter and Buffer Stability
### 6.1 Floating Point Precision
Because Delay 3 processes at 32-bit float, the "noise floor" of the feedback loop is incredibly low (-700dB). 
- **The Stability Rule:** This means you can have **Infinite Feedback** (100%+) for several minutes before the math breaks and the signal becomes a pure square wave. 
- **The Vibe Tip:** Add **0.1% Vibrato**. This introduces "Jitter" into the resampling clock, mimicking the unstable power supply of a 1970s tape delay.

---

## 7. Conclusion: The Physics of Vibe
Aliasing in Fruity Delay 3 is the bridge between the sterile digital world and the gritty analog past. By understanding the **Nyquist Fold-back** and the **Sample Rate Redux** engine, you can purposefully design sounds that "scream" with digital character. It is the ultimate tool for the producer who wants their Hip-Hop and R&B to sound "Modern but Dusty."

---
**Document Version:** 1.0 (Technical Reference)
**Author:** DSP Research Lead
**Keywords:** Aliasing, Nyquist Frequency, Resampling, Digital Physics, Sample Rate Redux, DSP Engineering.
