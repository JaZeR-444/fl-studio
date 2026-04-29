# Technical Deep-Dive: Circular Buffer Physics and Pointer Jumps

## 1. Introduction: The Architecture of Digital Memory
Fruity Delay is a "Raw Buffer" processor. Unlike modern plugins that try to hide the digital nature of audio, the foundational Delay engine exposes the **Computer Science of Time**. Every echo you hear is a result of a **Memory Address Pointer** cycling through a ring of RAM. This technical guide explores the mathematics of this "Circular Buffer" and why its discrete behavior is a powerful sound-design tool for professional engineers.

---

## 2. The Circular Ring Buffer
### 2.1 The Mathematics of RAM Rings
Imagine a ring of 44,100 memory cells (representing 1 second at 44.1kHz).
- **The Write Pointer (`W`):** Constantly moves around the ring at the sample rate, writing incoming audio into the cells.
- **The Read Pointer (`R`):** Follows the write pointer at a fixed distance `D`.
- **The Equation:** `R = (W - D) mod BufferSize`.
- **The Result:** The modular math ensures that when the pointer reaches the end of the memory segment, it wraps back around to the beginning, creating a "Circular" stream.

---

## 3. Discrete Jumps vs. Slew Interpolation
### 3.1 The Legacy "Click" Physics
In the original Fruity Delay, changing the **Time** parameter instantly shifts the value of `D`.
- **The Result:** The Read Pointer jumps to a completely different part of the memory ring in 1 sample.
- **The Waveform Discontinuity:** Because the audio values at the old address and the new address are different, a "Step" is created in the waveform. 
- **The Sound:** This step produces an instantaneous burst of high-frequency energy—a "Click."
- **Master Use:** In industrial Rap and Glitch sound design, these clicks are used as "Percussive Textures." Pro engineers will automate the Time knob to create "Clock-Noise" patterns that match the beat.

---

## 4. The Physics of Rhythmic Feedback
### 4.1 Feedback Accumulation Math
Fruity Delay's feedback is a **Recursive Equation**:
`Output(t) = Input(t) + Output(t - D) * Gain`
- **The Stability Rule:** If `Gain < 1.0` (below 100%), the energy eventually dissipates. 
- **The Gain trap:** If `Gain = 1.0`, the buffer becomes a **Permanent Memory Loop**.
- **Digital Purity:** Because there is no internal filtering, the noise floor of the feedback is non-existent. You can loop a sound 1000 times without adding any "Analog Hiss." This is the secret to the "Expensive" and "Clean" R&B echoes of the early 2000s.

---

## 5. Temporal Resolution and PPQ
### 5.1 The Master Clock Link
Fruity Delay doesn't just read the BPM; it reads the **PPQ (Pulses Per Quarter-note)** of the FL Studio engine.
- **The Precision:** If your project is set to 96 PPQ, the Delay has 96 discrete "slots" per beat to land on.
- **The Alignment:** This ensures that your echoes are perfectly phase-aligned with your kick and 808, a technical requirement for hard-hitting modern Trap.

---

## 6. Conclusion: The Master of Memory
Mastering the original Fruity Delay is about mastering **Memory Management.** By understanding the pointers, the wrap-around math, and the discrete jump behavior, you move beyond "adding an effect" and start **Programming with Time.** It is the definitive tool for the technical producer who values sample-accurate precision and clean, uncolored digital repetition.

---
**Document Version:** 1.0 (Technical Reference)
**Author:** DSP Research Lead
**Keywords:** Circular Buffer, Memory Management, Modular Arithmetic, Delay Physics, Glitch Sound Design.
