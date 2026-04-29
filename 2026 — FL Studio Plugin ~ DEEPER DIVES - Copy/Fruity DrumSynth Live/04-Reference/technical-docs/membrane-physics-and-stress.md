# Technical Deep-Dive: Membrane Physics, Damping, and Stress-Strain Ratios

## 1. Introduction: The Mathematics of Impact
Percussion synthesis is the simulation of **Energy Dissipation**. When a physical object is struck, energy is injected into a medium (membrane, plate, or bar) and then lost to the surrounding environment through heat and sound. Fruity DrumSynth Live’s engine simulates these mechanical properties through its envelope and filter architectures. This guide explores the physical constants required to simulate "Real" world materials.

---

## 2. The Stress-Strain Relationship in Membranes
### 2.1 Young's Modulus of Synthesis
In physical modeling, the **Stiffness** of a material determines its harmonic distribution.
- **High Stiffness (Steel):** Energy travels fast. Overtones are high and sparse. 
- **Low Stiffness (Skin):** Energy travels slow. Overtones are low and dense.
- **The DrumSynth Secret:** Stiffness is represented by the **Ratio between Osc 1 and Osc 2**. A ratio of 1:4 (e.g. 200Hz and 800Hz) mimics a stiff, high-tension drum head. A ratio of 1:1.5 mimics a loose, "floppy" skin.

---

## 3. Damping and Air Resistance
### 3.1 Decay Constants (Tau)
The **Decay** knob in DrumSynth Live is a mathematical representation of the **Damping Coefficient**.
- **Internal Friction:** Energy lost within the material (Wood has high internal friction).
- **External Damping:** Energy lost to the air (Hats have high external damping).
- **Logarithmic Decay:** DrumSynth uses `A = A0 * e^(-t/τ)`. This ensures that the sound fades in a way that feels "Acoustically Natural" to the human ear.

---

## 4. Resonant Shell Physics
### 4.1 The Q-Factor of the Drum Body
The **Resonance (Res)** knob on the internal filter represents the **Q-Factor** of the drum shell.
- **Low Q (Wooden Shell):** Wide bandwidth, fast decay of resonance. Set Res to 10-20%.
- **High Q (Metal Shell):** Narrow bandwidth, long "ringing" resonance. Set Res to 70-90%.
- **Psychedelic Mastery:** Automate the Cutoff while keeping Res at 90%. This mimics a "Whistling" resonant chamber, common in trippy R&B soundscapes.

---

## 5. Material Modeling Table (Technical Constants)

| material | Stiffness Ratio | Damping (Decay) | Shell Q (Res) | Frequency Range |
|----------|-----------------|-----------------|---------------|-----------------|
| **Maple Wood** | 1.58            | 30%             | 15%           | 200 - 600 Hz    |
| **Brass Plate**| 1.73            | 10%             | 85%           | 2k - 8k Hz      |
| **Mylar Skin** | 2.14            | 60%             | 40%           | 50 - 150 Hz     |
| **Rubber**     | 1.25            | 5%              | 5%            | 100 - 300 Hz    |

---

## 6. Phase Coherence in Multi-Element Strikes
When modeling a "Complex" impact (like a snare with wires), you are summing multiple physical systems.
- **The Phase Rule:** Ensure that **Osc 1** and **Osc 2** start with the same phase (0 degrees). If they are out of phase, the initial "Snap" will be cancelled out, resulting in a "Weak" or "Hollow" drum hit.
- **Master Strategy:** Use the **Phase Reset** (internal wrapper logic) to guarantee every hit has the same technical "Impact."

---

## 7. Conclusion: The Scientist of Sound
Mastering the physics of percussion in Fruity DrumSynth Live allows you to move beyond "tweaking knobs" and start **Designing Materials.** By understanding how stiffness, damping, and Q-factor interact, you can create a virtual kit that sounds like it was built in a high-end acoustic workshop. It is the definitive guide for the producer who wants their Hip-Hop and R&B to have the weight and authority of the physical world.

---
**Document Version:** 1.0 (Technical Reference)
**Author:** DSP Research Lead
**Keywords:** Membrane Physics, Damping Coefficients, Stress-Strain, Material Modeling, Percussion DSP.
