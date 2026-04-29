# Technical Deep-Dive: Comb Filtering Math and Temporal Notches

## 1. Introduction: The Sound of the Spike
In audio engineering, **Comb Filtering** is an effect produced by mixing a signal with a slightly delayed version of itself. This causes interference—both constructive (reinforcement) and destructive (cancellation). In **Fruity Delay 2**, when the **Time** is set to zero and the **Offset** is small (under 15ms), we enter the realm of surgical comb filtering. This guide explores the mathematics of these frequency "notches" and how to control them for elite-level sound design.

---

## 2. The Interference Equation
### 2.1 Destructive Interference (The Notch)
When two identical waves are mixed, and one is delayed by half a wavelength (180 degrees out of phase), they cancel each other out.
- **The Formula:** `f = 1 / (2 * t)`, where `f` is the notch frequency and `t` is the delay time.
- **Example:** A 1ms delay (`0.001s`) creates its first major notch at `1 / (2 * 0.001) = 500 Hz`.

### 2.2 Constructive Interference (The Peak)
Frequencies that are a full wavelength apart (360 degrees) reinforce each other.
- **The Formula:** `f = 1 / t`.
- **Example:** A 1ms delay reinforces `1 / 0.001 = 1000 Hz` (1kHz).

---

## 3. The "Invert" (Inv) Switch: Phase Polarity Math
Fruity Delay 2 features an **Inv (Invert)** button. This is a critical tool for "Phase Realignment."
- **Standard (Dry + Wet):** Peaks at `1/t`, Notches at `1/(2t)`.
- **Inverted (Dry - Wet):** Notches at `1/t`, Peaks at `1/(2t)`.
- **The Production Impact:** If your widening effect (Haas) makes the vocal sound "thin" at 500Hz, clicking **Inv** will move that notch to 1000Hz, often restoring the "Weight" of the voice.

---

## 4. Engineering the Notches (Surgical Widening)

| Delay Offset | First Notch (Hz) | Subjective Effect | Best Use |
|--------------|------------------|-------------------|----------|
| **0.5 ms**   | 1000 Hz          | Hollow / Metallic | Glitch FX |
| **1.0 ms**   | 500 Hz           | Nasal / Small     | Drum Resonators |
| **5.0 ms**   | 100 Hz           | Thin / Phasey     | Industrial Leads |
| **15.0 ms**  | 33 Hz            | Sub-Low (Inaudible)| Natural Haas Width |

---

## 5. Comb Filtering as a Synthesis Engine
### 5.1 Feedback-Based Combs
When you increase the **Feedback** in Delay 2 at very short times, the notches become deeper and the peaks become sharper.
- **The Physics:** This is the foundation of **Karplus-Strong String Synthesis**.
- **The Master Hack:** Set Delay 2 Time to 0:00, Offset to 2ms, and Feedback to 90%. You will hear a metallic "ringing" tone. Automate the Offset to play this "ring" like a psychedelic melodic instrument.

---

## 6. Conclusion: The Master of Interferences
Mastering Comb Filtering in Fruity Delay 2 is about **controlling the invisible peaks.** By understanding the mathematical relationship between milliseconds and hertz, you can purposefully design spaces that are either transparent (Haas) or characterful (Karplus). It is the definitive skill for any producer looking to move beyond simple effects and enter the realm of **Mathematical Sound Design.**

---
**Document Version:** 1.0 (Technical Reference)
**Author:** DSP Research Lead
**Keywords:** Comb Filtering, Phase Cancellation, Haas Effect, Temporal Physics, Interference Math.
