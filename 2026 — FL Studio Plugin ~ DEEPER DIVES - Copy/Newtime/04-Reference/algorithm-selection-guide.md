# Technical Reference: Algorithm Selection Guide

Mastering the three processing engines of Newtime. [SRC: IL-MAN]

## Overview
Newtime uses different mathematical approaches to solve the problem of stretching audio without changing pitch. Choosing the wrong algorithm is the #1 cause of "watery" or "metallic" artifacts.

---

## 1. SLICES (Time-Domain)
- **How it works:** Identifies transients (attacks) and "slices" the audio at these points. It then moves the slices and fills the gaps with crossfaded silence or loop-points.
- **Strength:** **Zero pitch distortion.** Since it doesn't change the frequency of the slices, it is the most transparent mode for non-pitched sounds.
- **Ideal For:** Drum loops, breakbeats, industrial percussion, Foley.
- **When to Avoid:** On any sound with long, sustained tail (vocals, pads). It will sound like a "stutter" effect.

## 2. TONES (Frequency-Domain / Mono)
- **How it works:** Uses a **Phase Vocoder** to analyze the frequency content and re-synthesize it at a different time-rate.
- **Strength:** Keeps harmonics perfectly in place. Excellent for monophonic sounds.
- **Ideal For:** Vocals, basslines, woodwinds, monophonic synth leads.
- **When to Avoid:** On chords or full mixes. The "phase" of overlapping frequencies can "smear," creating a watery sound.

## 3. TONAL (Frequency-Domain / Poly)
- **How it works:** A multi-layered Phase Vocoder designed to handle complex, overlapping frequency spectrums.
- **Strength:** The highest fidelity for complex material.
- **Ideal For:** Piano chords, full song stems, atmospheric pads, acoustic guitar strumming.
- **When to Avoid:** If you are extremely low on CPU resources (Tonal is the heaviest mode).

---

## 📐 Quality vs. Artifacts
- **Draft:** Fast, but uses lower-resolution Fourier transforms. Can sound "metallic."
- **High:** The standard for professional production.
- **Ultra:** Maximum resolution. Use for vocals and final renders where every detail matters.

## 💡 The "Formant" Variable
Formant preservation is a secondary process that runs *on top* of the Tones or Tonal algorithms.
- **If ON:** The algorithm identifies the "resonance peaks" of the sound (the vowel shape) and keeps them at the same frequency while shifting the harmonics.
- **If OFF:** The whole spectrum moves together (The "Chipmunk" effect).

---
*For a quick guide on finding these settings, see the [01-Learning/Quick-Reference/parameter-cheat-sheet.md](../01-Learning/Quick-Reference/parameter-cheat-sheet.md) guide.*
