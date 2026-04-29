# Pitch vs. Time: The Gross Beat Duality

Gross Beat manipulates audio by moving a playback head across a recorded buffer. This creates a direct physical relationship between the **Slope of the Line** and the **Pitch/Speed** of the audio.

## 📈 The Slope Constant

The "Safety Line" has a slope of 1 (a 45-degree angle in a square grid).
*   **Angle = Safety Line**: 100% Speed, Original Pitch.
*   **Angle < Safety Line (Flatter)**: Higher Pitch, Faster Speed.
*   **Angle > Safety Line (Steeper)**: Lower Pitch, Slower Speed.
*   **Horizontal Line**: 0% Speed, Infinite Pitch Drop (Silence/Freeze).
*   **Negative Slope (Upward)**: Reverse Playback.

## 🎹 The Musical Octave Math

If you want precise musical intervals, the math is consistent:
*   **Half Speed (0.5x)** = -1 Octave (12 semitones down).
*   **Double Speed (2x)** = +1 Octave (12 semitones up).
*   **Reverse 1x** = Original pitch, just backwards.

## ⏳ The Buffer Trade-off

Because Gross Beat is real-time, it cannot see the future.
*   **Time Shifting**: You can only shift audio into the **past**.
*   **Real-time use**: If you want to "rush" a note (play it early), you must first delay the entire track by a fixed amount (e.g., 1 beat) so that you have "future" audio already sitting in the buffer.

## 🎚️ Volume as a Modifier
While Time handles the "Where" and "How fast", Volume handles the "When".
In many Jazzy/R&B contexts, the Time envelope creates the "vibe" (warble/pitch drift) while the Volume envelope creates the "pocket" (the groove).
