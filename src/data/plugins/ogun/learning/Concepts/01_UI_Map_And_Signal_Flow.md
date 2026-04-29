# UI Map & Signal Flow

[SRC: IL-MAN]

## 🗺️ The Interface Tour

Ogun is divided into the Editor (Top) and the Performance/FX (Bottom).

### 1. The Harmonic Editor (Top Visualizer)
This is the heart of the synth.
*   **Timbre Tab:** Defines the "Body" of the sound. You draw a curve that represents the volume of all 32k harmonics.
    *   *High curve on left* = Bass focus.
    *   *High curve on right* = Treble/Shimmer focus.
*   **Impulse Tab:** Defines the "Attack" (Strike). This allows you to have a metallic "clank" at the start that fades into a softer body.

### 2. The Synthesis Controls (Middle)
*   **Richness:** Controls how many harmonics are actually audible.
    *   *Low:* Simple Organ sound.
    *   *High:* Complex White Noise / Metallic texture.
*   **Unison:** Ogun has an incredibly powerful Unison engine. Use it for "Super-Saw" width (but with Sines).

### 3. The Master & FX (Bottom)
*   **X-Y Pad:** Pre-linked to modulation. Usually `X = Filter/Timbre shift` and `Y = Filter Res`.
*   **FX Section:** Includes a specialized **Chorus** and **Reverb** that are tuned for metallic tails.

## 🚦 Internal Signal Flow

1.  **Seed:** You trigger a note.
2.  **Synthesis:** The engine calculates 32,767 sine waves based on the **Timbre Curve**.
3.  **Impulse:** The **Impulse Curve** is layered on top for the first few milliseconds (Attack).
4.  **Resynthesis:** The sines are summed.
5.  **Processing:** Unison -> Filter -> EQ -> Chorus -> Delay -> Reverb.
6.  **Output:** Audio.

## ⚠️ Common Misunderstandings
*   **"It sounds like noise!"**
    *   *Correction:* If you draw a flat line at the top of the editor, you are literally creating White Noise (all frequencies at max volume). You must **Sculpt** the curve to dip and peak to create "Tone".
*   **"Autogun is better."**
    *   *Correction:* Autogun *IS* Ogun. Autogun is just the preset player. Ogun lets you *edit* those 4 billion presets. Copy the preset number from Autogun -> Paste into Ogun options.
