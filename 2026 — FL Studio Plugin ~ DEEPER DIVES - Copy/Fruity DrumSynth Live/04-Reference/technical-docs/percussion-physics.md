# Percussion Synthesis Physics

## Dual Oscillator Synthesis
DrumSynth Live uses two oscillators to mimic the physics of a drum head.
- **Osc 1 (The Body):** Mimics the vibration of the large drum head.
- **Osc 2 (The Impact):** Mimics the sound of the stick or beater hitting the surface.
- **FM (Frequency Modulation):** Internal cross-modulation between these oscillators allows for the creation of non-harmonic "bell-like" tones.

## Noise Generator
The noise generator is a **White Noise** source. In percussion synthesis:
- Noise is used to simulate the **Snares** (the wires under a snare drum).
- Noise is used to simulate the **Friction** of a hi-hat or shaker.

## Envelope Curves
The decay curves are **Logarithmic**. This is critical because sound in the real world (vibrations of a string or drum head) decays exponentially. If the curves were linear, the drums would sound "synthetic" and "robotic".

## Multi-Program Architecture
Unlike most synths that share one patch per instance, DrumSynth Live stores 128 independent synthesis engines in memory. 
- **Efficiency:** It uses a "pool" of voices. If you hit 10 keys at once, the engine dynamically allocates CPU to those 10 synthesis chains and silences the rest.
