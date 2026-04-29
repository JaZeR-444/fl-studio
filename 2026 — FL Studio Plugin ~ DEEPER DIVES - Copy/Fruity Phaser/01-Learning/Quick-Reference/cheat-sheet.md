# Fruity Phaser: Cheat Sheet

Creates a rippling, sweeping effect by passing the signal through a series of "All-Pass" filters.

## Parameters

| Parameter | Function | Context / Tip |
| :--- | :--- | :--- |
| **Sweep Freq** | The center frequency range where the phasing occurs. | **Tip:** Determines the "pitch" of the phaser sound. |
| **Min / Max Depth** | Sets the range of the LFO sweep. | **Tip:** A large gap between Min and Max creates a very wide, dramatic sweep. A small gap is subtle. |
| **Freq. Range** | "Large" vs "Small". | **Tip:** Large covers more octaves, creating a more drastic effect. |
| **Stereo** | Offsets the phase of the LFO between L/R channels. | **Tip:** **Crucial for width.** Increase to make the sound swirl around the head. |
| **Stages** | Number of filters used (2, 4, 8...). | **Tip:** More stages = more "ripples" or notches in the spectrum. 4 is classic 70s rock. 8 is dense and sci-fi. |
| **Feedback** | Resonance. | **Tip:** Like Flanger, high feedback makes the effect scream. |

## Quick Reference
*   **Best For:** Electric Piano (Rhodes), Funky Guitars, Synth Pads.
*   **Key Distinction:** Unlike Flanger (Time based), Phaser is *Filter* based. It sounds smoother and more "watery".
