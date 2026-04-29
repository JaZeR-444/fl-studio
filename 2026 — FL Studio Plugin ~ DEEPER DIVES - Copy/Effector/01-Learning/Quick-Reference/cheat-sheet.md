# Effector: The Performance Multi-FX

> **Scope:** Live Performance, Momentary FX, and Modulation.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Controls) / High (Performance Technique).

## 🧠 The "Momentary" Concept
Effector is not designed for static mixing. It is designed to be **played**.
*   **Bypass Logic:** By default, the effect is ON when you click the pad, and OFF (Bypassed) when you release the mouse. This is "Momentary" mode.
*   **Latch Mode:** To keep the effect on, you must engage the "Bypass" switch permanently.
*   **XY Pad:** This is the central control. It controls two parameters simultaneously for every effect.

---

## 🎛️ Section 1: The 12 Algorithms (X/Y Map)

| Effect | **X Axis** (Horizontal) | **Y Axis** (Vertical) | Nuance |
| :--- | :--- | :--- | :--- |
| **DISTORT** | Distortion Amount | Tone (Eq) | "Tone" filters the fizz. |
| **LO-FI** | Bit Depth (Reduces Up) | Sample Rate (Reduces Right) | **Note:** Axis direction is inverted compared to standard. High X = Low Bits. |
| **FLANGER** | Depth | Feedback | High Feedback = Metallic resonance. |
| **PHASER** | Depth | Feedback | Classic Jet Plane sweep. |
| **FILTER** | Cutoff Freq | Resonance | **Split:** Center is neutral. Left = Low Pass. Right = High Pass. |
| **DELAY** | Feedback (Repeats) | Filter (Tone) | Not Time! Time is set by Tempo. |
| **REVERB** | Feedback (Length) | Wet Level | Short tails at bottom, infinite at top. |
| **STEREO** | Pan Position | Binaural Separation | Y-Axis creates "3D" headphone width. |
| **TRANS** | Release Time | Drop Level | Sidechain simulation. |
| **GRAIN** | (Unused) | (Unused) | Controlled entirely by Tempo knobs. |
| **VOX** | Vowel Formant (A-E-I-O-U) | Throat Size | Humanizes saw waves. |
| **RING** | Modulator Freq | (Unused) | Multiply X by Y (Audio * Sine). |

---

## 🔁 Section 2: Modulation Engine

Effector has a built-in LFO that automates the X/Y pad.
*   **Tempo:** Syncs to host (1/8 to 8/1).
*   **X Mod / Y Mod:** These are **Multipliers**.
    *   Center (12 o'clock) = No modulation.
    *   Right = Positive modulation.
    *   Left = Negative (Inverted) modulation.
*   **Shape:** Sine, Saw, Square.

---

## ⚡ Technical Specs: The "Trans" Effect (Trance Gate)

**TRANS** is one of the most misunderstood effects.
*   **What it is:** A rhythmic volume gate (Sidechain simulator).
*   **X Axis (Release):** Controls the envelope shape of the gate.
    *   Low X: Staccato, choppy gate.
    *   High X: Smooth, swell-like gate.
*   **Y Axis (Drop):** The floor.
    *   Low Y: Volume drops to -inf dB (Silence).
    *   High Y: Volume drops slightly (-3dB).
*   **Speed:** Controlled by the "Tempo" knob (e.g., 1/16th note pumping).

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Build-Up" Filter
1.  **Select:** FILTER.
2.  **Start:** Center of Pad (clean).
3.  **Action:** Drag Top-Right.
    *   **X:** High Pass Filter engages, removing bass.
    *   **Y:** Resonance increases, screaming.
4.  **Release:** Snap back to center -> Drop occurs.

### 2. Manual Tape Stop (Lo-Fi)
1.  **Select:** LO-FI.
2.  **Modulation:** None.
3.  **Action:** Slide X axis from bottom to top.
    *   Sample Rate crashes down.
    *   Aliasing introduces "phantom" lower frequencies.
4.  **Result:** Digital destruction breakdown.

### 3. The "Talking Bass" (Vox)
1.  **Source:** Sawtooth Bass.
2.  **Select:** VOX.
3.  **LFO:**
    *   **Shape:** Sine.
    *   **Tempo:** 1/4.
    *   **X Mod:** High (+80%).
4.  **Result:** The LFO sweeps the formants (A-E-I-O-U) in time with the beat, creating a "Yoi Yoi" Dubstep bass line automatically.
