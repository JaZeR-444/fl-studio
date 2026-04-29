# Technical Deep-Dive: Recursive Feedback Math and tail Decay Dynamics

## 1. Introduction: The Infinite Sequence
In audio DSP, delay is a recursive process. Unlike a reverb which is a statistical model of reflections, a delay is a mathematical sequence where each term is derived from the previous one. In **Fruity Delay 3**, the feedback loop is the engine of the tail. To master the "Moody" and "Psychedelic" vibes of modern R&B, an engineer must understand the decay math to prevent "Feedback Mud" while maintaining "Atmospheric Depth."

---

## 2. The Feedback Equation: Linear vs. Exponential
### 2.1 The Geometric Series
The amplitude of each successive delay repeat follows a geometric progression:
`An = A0 * (G^n)`
- `An`: Amplitude of the nth repeat.
- `A0`: Initial amplitude of the dry signal.
- `G`: **Feedback Gain** (The Feedback knob).
- `n`: The repeat number.

### 2.2 The Physics of "The Tail"
- **If G < 1.0 (e.g., 50%):** The sound decays exponentially. This is the "Natural" state.
- **If G = 1.0 (100%):** The sound never decays. It occupies a permanent spot in the RAM buffer.
- **If G > 1.0 (105%+):** Each repeat is louder than the last. This leads to **Mathematical Divergence** (Digital Clipping). 
- **The Master Secret:** In **Analog Mode**, Fruity Delay 3 introduces a **Limiting Transfer Function** in the feedback loop. This prevents the signal from exploding to infinity, instead turning it into a saturated "wall of sound."

---

## 3. Phase Interaction and Low-End Management
### 3.1 The "Summing" Problem in Hip-Hop
In Trap and Rap, the 808 and Kick own the sub-frequencies (20Hz - 100Hz).
- **The Conflict:** If your vocal delay has feedback, the low-end energy of the repeats sums together. 
- **The Math:** If two repeats are slightly out of phase, they can cause **Constructive Interference** at 60Hz, creating a "boom" that kills your 808's punch.
- **The Fix:** Right-click the Feedback mode and select **Invert**. This flips the polarity of every other repeat. 
- **The Result:** The low-end energy of Repeat 1 is cancelled out by Repeat 2. This allows you to have a "Large" and "Moody" delay tail that is technically "Invisible" to the sub-bass of your mix.

---

## 4. Time Modulation and Resampling Jitter
### 4.1 The Non-Linearity of Analog Mode
When you modulate the **Time** parameter in Analog mode, you are changing the "Delta" (the distance between read and write pointers).
- **The Resampling Math:** If you decrease the time by 50%, the plugin must play back the audio at 2x speed.
- **Interpolation Artifacts:** Fruity Delay 3 uses a high-order interpolation algorithm to "guess" the values between samples. This creates subtle high-frequency "jitter."
- **The "Cool" Factor:** Professional producers use this jitter to add "Digital Soul" to sterile vocal recordings. By adding **0.5% Vibrato**, you introduce a constant mathematical instability that the human brain perceives as "Expensive Hardware" character.

---

## 5. Diffusion and the All-Pass Filter Cloud
### 5.1 Breaking the Phase Correlation
Standard digital delay repeats are **Coherent**—they are perfect copies. This can sound "robotic."
- **The Diffusion Engine:** Uses a series of **All-Pass Filters**.
- **The Math of Smear:** An All-Pass filter doesn't change the frequency response, but it shifts the **Phase** of different frequencies by different amounts.
- **The Result:** The "Tap" becomes a "Cloud." In psychedelic Hip-Hop, setting Diffusion to 60% breaks the rhythmic predictability, making the delay feel like it is "swirling" around the listener's head.

---

## 6. Table of Decay Constants
Use this to calculate how many repeats will be audible based on your Feedback knob setting:

| Feedback % | Audible Repeats (-60dB limit) | Subjective Effect |
|------------|-------------------------------|-------------------|
| **10%**    | 1                             | Slapback / Double |
| **30%**    | 3                             | Clean / Tight     |
| **50%**    | 7                             | Standard Echo     |
| **75%**    | 20                            | Lush Atmosphere   |
| **95%**    | 100+                          | Psychedelic Wash  |
| **100%+**  | Infinite                      | Feedback Spiral   |

---

## 7. Master Engineering Checklist for Delay 3
1. **Low-Pass filtering:** Always cut above 5kHz for "Moody" vibes.
2. **Phase Inversion:** Use "Invert" feedback for heavy Trap mixes to save low-end headroom.
3. **Saturation Calibration:** Use saturation to "warm up" the tail, making it sit *behind* the dry vocal.
4. **Ducker Timing:** Ensure the Ducker Release matches the BPM (e.g., 500ms for 120BPM) to create a rhythmic "bloom."

---

## 8. Conclusion: The Calculus of Vibe
Mastering the math of Fruity Delay 3 allows you to move from "Trial and Error" to **Precision Engineering.** By understanding the geometric decay of the tail and the phase-cancellation properties of inverted feedback, you can create massive, psychedelic spaces that remain technically perfect and professional. It is the definitive guide for the producer who wants to own the "Time" element of their production.

---
**Document Version:** 3.0 (Master Sound Designer Tier)
**Keywords:** Recursive Math, Feedback Loops, Phase Inversion, DSP Engineering, All-Pass Filters, Geometric Series.
