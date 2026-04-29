# Technical Reference: EQ History (Graphic vs. Parametric)

Understanding the evolution of the 7-band architecture. [SRC: IL-MAN]

## 1. The Heritage
Graphic Equalizers were the first type of EQs found in professional recording studios. 
- **The Design**: They were built into huge racks where every fader controlled a physical inductor/capacitor circuit.
- **The Name**: They are called "Graphic" because the physical positions of the sliders provide a **graphic representation** of the resulting frequency curve.

## 2. Fixed Bands (The Musical Choice)
The choice of **63, 250, 500, 1.5k, 3k, 5k, 8k** is not random. These are known as "ISO Standard" frequencies.
- **250Hz**: The border between "Thump" and "Body."
- **3000Hz**: The range where human hearing is most sensitive (the "Intelligibility" zone).
- **8000Hz**: The start of the "Brilliance" or "Air" range.

## 3. Why Graphic EQ is faster?
- **Cognitive Load**: In a parametric EQ, you have 3 decisions per band (Freq, Q, Gain). In a 7-band EQ, you have **one** decision: Gain.
- **Muscle Memory**: Professional mix engineers learn the "sound" of the 500Hz fader. They know that if a sound is "boxy," they just reach for that one slider without thinking.

## 4. Phase and Quality
Fruity 7 Band EQ is an **IIR (Infinite Impulse Response)** filter.
- It is zero-latency.
- It is extremely light on CPU (one of the oldest and most optimized plugins in FL Studio).
- It produces a natural "phase shift" that mimics vintage hardware EQ behavior.
