# Visualizing the Buffer: How to Read the Matrix

Gross Beat's interface is a graph of Time vs. Time. It can be brain-melting. Here is how to read it.

## 🟢 The Heads

1.  **The White Line (Playback Head)**:
    *   This moves from Left to Right.
    *   It represents the **Host Time** (Where you are in the bar).
    *   It loops every bar (4 beats).

2.  **The Green "Ghost" Head**:
    *   This moves vertically along the White Line.
    *   It represents **Audio Read Position** (What you are actually hearing).
    *   **On the Line**: You are hearing the present.
    *   **Below the Line**: You are hearing the past.

## 🌊 The Visual Waveform

Gross Beat displays a scrolling background waveform.
*   **Horizontal Flow**: The background scrolls left.
*   **The Concept**: Imagine the audio is a literal tape moving under the playhead.
    *   If your envelope line is **Horizontal**, you are staying on the same spot of the tape as it moves -> **Pause/Freeze**.
    *   If your envelope line is **Diagonal Down** (Steeper than safety), you are moving backwards relative to the tape -> **Slow Down**.

## 🔴 The Red Zone (The Danger Zone)
*   **Above the Safety Line**:
    *   This area represents the **Future**.
    *   If your Green Head goes here, you hear silence (or the live input passed through instantly, essentially "clipping" to the present).
    *   *Visual Cue*: The line usually turns flat or behaves erratically if you force it here.

## 🧠 Mental Model: "The Time Map"
*   **X-Axis**: "When will this effect happen?" (e.g., "On Beat 3").
*   **Y-Axis**: "What audio should I play?" (e.g., "The snare from Beat 2").
*   *Example*: To repeat a snare:
    *   Go to X = Beat 3.
    *   Draw a line at Y = Beat 2.
    *   Result: At Beat 3, play the audio from Beat 2.
