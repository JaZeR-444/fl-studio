# Creating Tape Stops and Spin-Ups

The "Tape Stop" is one of the most recognizable Gross Beat effects. It simulates the sound of a vinyl record or tape reel coming to a halt (pitch and speed drop to zero).

## 🛑 The Tape Stop (Slow Down to 0)

### 1. The Physics
To create a natural tape stop, the audio needs to slow down gradually until it freezes. In Gross Beat's Time Grid, a **flat horizontal line** equals 0% speed (Pause). A **diagonal line** (safety line) equals 100% speed.
Therefore, a tape stop is a curve that transitions from the **Safety Line slope** to a **Flat Line**.

### 2. Implementation Steps
1.  **Select a Time Slot**.
2.  **Right-Click** the grid and set **Snap** to **1/4** or **1/16** depending on how fast you want the stop.
3.  **Draw the Curve**:
    *   **Start Point**: Top-Left of the area you want to affect.
    *   **End Point**: The bottom of the range.
    *   **Curve Type**: Right-click the start point and select **Single Curve**.
    *   **Tension**: Drag the tension handle (small circle in the middle of the line) **downwards**. This creates a convex curve that starts slow and drops pitch aggressively at the end, or **upwards** for a linear deceleration.
    *   *Classic Stop*: A straight line from Top-Left to Bottom-Right (spanning 1 bar) creates a specific constant deceleration.

### 3. The "Freeze"
If you want the audio to hold the last chunk (stutter/freeze) after the stop:
*   Ensure the line ends **flat** (horizontal) for the duration you want the silence/freeze.
*   *Note*: Gross Beat often defaults to "Mute" or "Bypass" after the envelope ends. To hold a texture, you often use a freeze buffer, but standard tape stops usually end in silence or return to playback.

## 🔄 The Spin-Up (0 to 100)

This is the reverse: starting from a stop and accelerating back to real-time.

1.  **Start Point**: Bottom-Left (Time = 0, Buffer = Deep).
2.  **End Point**: Top-Right (Time = Real-time).
3.  **Curve**: A curve connecting these two will sound like a turntable starting up.

## 🎛️ Pro Tip: The "Vinyl Off" Preset
Gross Beat comes with a "Turntablist" preset pack.
*   Load the **"Turntablist"** bank.
*   Check out the "Vinyl Off" slot. It is a mathematically perfect tape stop curve. Study its shape!
