# UI Map & Signal Flow

[SRC: IL-MAN]

## 🗺️ The Interface Tour

Newtone looks like the Piano Roll, but for Audio.

### 1. The Editor Grid (Main Workspace)
*   **Blobs (Notes):** Audio is segmented into "Pitch Blocks".
    *   **Vertical Position:** Pitch (Piano keys on left).
    *   **Horizontal Length:** Time (Duration).
*   **Orange Line:** The *actual* micro-pitch detection. The Block is the "Target", the Line is the "Reality".
*   **Handles (On Note Hover):**
    *   **Top Left/Right:** Volume Envelopes (Fade In/Out).
    *   **Center:** Pitch correction amount for that specific note.
    *   **Edges:** Time warping (stretch/shrink).

### 2. The Title Bar (Global Controls)
These knobs apply to **ALL** selected notes.
*   **Combine (Center):** Snaps the pitch to the grid. 100% = Perfect tuning.
*   **Variation:** Flattens the vibrato. 0% = Robot mode.
*   **Trans (Transition):** Speed of the glide between notes.

### 3. The Toolbar (Tools)
*   **Cut (Scissors):** Slice one note into two. Essential when Newtone misses a note change.
*   **Advanced Edit (Waveform Icon):** Switches "Advanced Mode" to see rotation / drift controls.
*   **Send to Playlist (Arrow Button):** **CRITICAL.** This is how you get audio OUT of Newtone.

## 🚦 Internal Functional Flow

1.  **Analysis:** Audio is loaded -> Pitches are Detected -> Transient Markers derived.
2.  **Quantization:** Note Centers are calculated based on Scale/Grid.
3.  **Manipulation:**
    *   User moves a block -> Time stretch algorithm keeps length, Pitch shift algorithm changes frequency.
    *   User twists "Variation" -> Modulation algorithm flattens the pitch curve.
4.  **Resynthesis:** The edited data is re-rendered into a new audio stream on playback/export.

## ⚠️ Common Misunderstandings
*   **"It's just playing over the beat!"**
    *   *Correction:* Newtone acts as a "Slave" player. It plays ALONGSIDE the Playlist. Press the "Slave Playback" (H) button to sync it, or MUTE the source clip in the Playlist so you don't hear doubles.
*   **"Ctrl+Z doesn't work!"**
    *   *Correction:* Newtone has its own internal undo history, separate from FL's main history (sometimes). Check the "Edit" menu inside the plugin.
