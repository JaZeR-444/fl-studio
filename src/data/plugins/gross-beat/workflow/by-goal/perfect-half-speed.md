# Creating the Perfect Half-Speed Effect

The "Half-Speed" effect (popularized by plugins like HalfTime) is a staple of modern Trap and Hip-Hop. Here is how to achieve it natively in Gross Beat.

## ⚡ The Quick Way (Presets)

1.  Open Gross Beat.
2.  Click the **Presets** arrows (top right).
3.  Select **"Momentary"**.
4.  Find the **"1/2 Speed"** Time Slot (Green).
5.  *Result*: Instant half-speed playback.

## 🎨 The Manual Way (Custom Curve)

Understanding how to draw it gives you more control.

1.  **Select an Empty Time Slot**.
2.  **Set Grid Snap**: Right-click the grid and set Snap to **1/4** (Beats).
3.  **The Concept**: To play at half speed, you need to play 1 beat of audio over the span of 2 beats.
    *   This means the playback head needs to "fall behind" real-time gradually.
4.  **Draw the Line**:
    *   Start at the top-left (Time 0, Buffer 0).
    *   Draw a straight line down to the **4th Beat** marker on the horizontal axis and the **2nd Beat** marker on the vertical axis (buffer).
    *   *Correction*: Actually, for a standard 4-beat bar:
        *   Start: Top-Left (Beat 1 Start).
        *   End: Bottom-Right of a 1-Bar box? No.
    *   **The Math**:
        *   Normal Speed = 1:1 Slope (Diagonal).
        *   Half Speed = 1:2 Slope (Steeper).
        *   Draw a line that goes from **Beat 1** (Top) to **Beat 2** (Bottom) over the span of **2 Beats**?
        *   *Easier*: Right-click a point at the start (Top Left). Right-click a point at the end of Bar 1 (Horizontal). Drag that end point DOWN until the "1/2" guide appears (if available) or until it sounds right.
    *   **The Shape**: It looks like a "Sawtooth" wave sloping downwards.

## 🛠 Tuning the Sound

### 1. Removing Clicks (De-clicking)
*   At the end of the bar, the buffer jumps back to the start. This can cause a "pop".
*   **Solution 1**: Enable **"Click Reduction"** (bottom right switch).
*   **Solution 2**: Add a tiny fade-out volume envelope at the very end of the bar in the Volume Grid.

### 2. The "Growth" Texture
*   Instead of fully wet signal, blend it.
*   Turn the **Time Mix** knob to **50%**.
*   *Result*: You hear the original dry signal AND the slowed-down low signal together. This makes the sound "huge" and is the secret to many dark melody loops.

### 3. Filtering
*   Half-speed audio loses high frequencies naturally (sample rate reduction) or sounds muddy.
*   Use an EQ *after* Gross Beat to cut the sub-bass mud if blending with the original signal.

---
*Pro Tip: For "Instant" half-speed that feels like a tape stop, use a curve instead of a straight line.*
