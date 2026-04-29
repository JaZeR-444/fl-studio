# UI Map & Signal Flow

[SRC: IL-MAN]

## 🗺️ The Interface Tour

Plucked has one of the simplest interfaces in FL Studio. It is a single panel.

### 1. The Modeling Controls (Knobs)
*   **Decay:** The most important knob.
    *   *Left:* Muted string (Palm Mute).
    *   *Right:* Long sustain (Harp).
*   **Color:** The brightness/material.
    *   *Left:* Dull (Old Nylon / Thumb pluck).
    *   *Right:* Bright (New Steel / Coin pluck).
*   **Normalize:** Volume Compensation.
    *   *On:* High notes stay loud (unnatural but good for EDM).
    *   *Off:* High notes die out faster (Physics).

### 2. The Output Controls (Switches)
*   **Gate:**
    *   *On:* The string stops vibrating when you let go of the key.
    *   *Off:* The string rings out fully, regardless of note length (One-Shot mode).
*   **Widen:**
    *   *On:* Adds a stereo delay offset to widen the image.
    *   *Off:* Mono.

## 🚦 Internal Signal Flow

1.  **Trigger:** Note On generates a short burst of White Noise (The "Exciter").
2.  **Delay Line:** The noise loops through a very short delay (The "String"). The length of the delay determines the Pitch.
3.  **Filter:** Each time the noise loops, it goes through a Low-Pass Filter (**Color**).
4.  **Feedback:** The signal is fed back into the delay (**Decay**).
5.  **Output:** The result is a pitched tone.

## ⚠️ Common Misunderstandings
*   **"It sounds unnatural in the high register."**
    *   *Physics:* Real strings don't sustain forever in high octaves. Turn **Normalize** OFF for realism, or ON for synthetic power.
*   **"Where is the Reverb?"**
    *   Plucked has NO effects. It is a dry synthesizer. You MUST add Reverb/Delay in the mixer to make it sound good. Dry Plucked is very boring.
