# Technical Deep-Dive: Inharmonic Ratios and Physical Percussion Modeling

## 1. Introduction: The Complexity of the Clang
In subtractive synthesis, we work with the **Harmonic Series** (multiples of 1, 2, 3...). However, real-world percussion—cymbals, bells, and drum heads—is **Inharmonic**. The overtones don't land on perfect octaves; they "clash" in complex, mathematically dense patterns. Fruity DrumSynth Live uses internal FM (Frequency Modulation) between its oscillators to replicate these physics. This guide explores the specific ratios required to simulate physical materials like wood, metal, and skin.

---

## 2. The Physics of the Vibrating Membrane
### 2.1 Modes of Vibration
When you hit a drum, it vibrates in several directions simultaneously.
- **Radial Modes:** Vibration moving from the center to the edge.
- **Circular Modes:** Vibration moving in rings around the center.
- **The Result:** These modes create a series of overtones that are often at ratios like **1.59, 2.14, and 2.30** times the fundamental frequency. 

### 2.2 Replicating Modes in DrumSynth Live
In DrumSynth Live, **Oscillator 2** acts as the modulator for **Oscillator 1**.
- **The Wood Ratio (Soft):** Set Osc 2 to a ratio of **1.5** times Osc 1. This creates a "warm" inharmonicity typical of wooden blocks or thick drum skins.
- **The Metal Ratio (Hard):** Set Osc 2 to a ratio of **1.732** (Square root of 3). This creates the "ringing" inharmonicity of metal cowbells and cymbals.

---

## 3. The Mathematics of "Snap" (Transient resynthesis)
### 3.1 The Pitch-Sweep Equation
The "Click" of a drum is actually a pitch sweep that moves from a high frequency to a low one in a matter of milliseconds.
- **Linear Decay:** Sounds like a "Laser." (Bad for realism).
- **Logarithmic Decay (DrumSynth Live):** Mimics the exponential loss of energy in a physical impact.
- **The Engineering Strategy:** Set your **Max Freq** to 4x the fundamental frequency (**Freq**) and your **Pitch Decay** to under 10ms. This replicates the initial "compression" of the drum head being struck.

---

## 4. Modeling Physical Materials

| Material | Osc 2 Ratio | Noise Color | Res Character | Best Genre Use |
|----------|-------------|-------------|---------------|----------------|
| **Oak Wood** | 1.50        | Low-Pass    | Low (20%)     | Moody R&B Snares |
| **Thin Metal**| 1.73        | Band-Pass   | High (85%)    | Psychedelic Hats |
| **808 Skin** | 1.00        | Off         | Medium (40%)  | Trap Foundations |
| **Sand/Dirt** | 2.41        | White Noise | High (95%)    | Lo-Fi Textures |

---

## 5. Phase Jitter and Nonlinear Feedback
### 5.1 The Analog "Error"
DrumSynth Live includes subtle internal nonlinearities. As you increase the **Filter Resonance**, the phase of the oscillators starts to "jitter" slightly.
- **The Benefit:** This prevents the drums from sounding like a static "Loop." Every hit is mathematically slightly different, mimicking the slight changes in where a drummer hits the head.
- **The Master Tip:** Link the **Filter Cutoff** to a random (RND) articulator in **Fruity Envelope Controller** to further enhance this physical variation.

---

## 6. Conclusion: The Physical Architect
Mastering Fruity DrumSynth Live is about moving beyond "finding a sound" and entering the realm of **Material Engineering.** By understanding the inharmonic mathematics of modes and the temporal physics of pitch sweeps, you can design percussion that sounds "real" even if it doesn't exist in the physical world. It is the ultimate tool for the producer who wants their Hip-Hop and R&B percussion to have "Physical Weight" and "Acoustic Soul."

---
**Document Version:** 1.0 (Technical Reference)
**Author:** DSP Research Lead
**Keywords:** Physical Modeling, Inharmonic Ratios, Drum Synthesis, Vibration Modes, Percussion Physics.
