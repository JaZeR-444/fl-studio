# Technical Reference: LFO Feedback Mechanics

Understanding the most unique parameter in MiniSynth. [SRC: IL-MAN]

## 1. What is LFO Feedback?
In most synthesizers, an LFO (Low-Frequency Oscillator) has a fixed shape (Sine, Triangle, Square). It moves from Point A to Point B at a consistent rate.
**LFO Feedback** allows the current value of the LFO to influence its *own* future value.

## 2. The Effect on the Waveform
- **At 0% Feedback:** The LFO is a standard, clean shape. The modulation is predictable and smooth.
- **At 50% Feedback:** The shape begins to "skew" or "distort." A triangle wave might start to look like a sawtooth or a curved pulse.
- **At 100% Feedback:** The LFO becomes highly non-linear and "chaotic." It creates jagged, multi-stage modulation patterns that sound like complex sequences or glitchy "sample-and-hold" steps.

---

## 3. Practical Interaction with "Width"
The **Width** knob in the LFO tab controls the duty cycle or the "duty cycle balance" of the LFO shape.
- When **Feedback** is high, the **Width** knob acts as a "Complexity" control.
- Small changes in Width will cause the chaotic feedback loop to settle into different "stable" rhythmic patterns.

---

## 4. Why use it?
- **Unique Rhythms:** It allows MiniSynth to create "pseudo-sequences" without needing a dedicated step sequencer.
- **Organic Movement:** Even at low settings (10–20%), feedback adds a "jitter" or "humanity" to the modulation that feels less mechanical.
- **Texture Generation:** At audio rates (Max Rate), LFO Feedback creates rich, noisy harmonic sidebands that are excellent for "lo-fi" and "industrial" sound design.

---
*For a practical guide on using these mechanics, see the [03-Workflows/by-goal/glitchy-lfo-effects.md](../03-Workflows/by-goal/glitchy-lfo-effects.md) guide.*
