# Mental Model: The Diagonal Line (Time Buffer)

## Understanding the Grid
The Gross Beat Time Editor is a **map of the 2-bar buffer**.

1.  **The Top Horizontal Line:** This is "Real Time." The playhead reads exactly what is being recorded right now.
2.  **The Bottom Horizontal Line:** This is "2 Bars Ago." You are hearing what happened exactly 2 bars ago.
3.  **The Diagonal Line (Top-Left to Bottom-Right):** This is **Half Speed**. Because the line is moving "away" from real-time, it takes 2 bars of project time to read 1 bar of buffer audio. 
    *   *Result: Pitch drops 1 octave, speed is halved.*

## The "Reverse" Line
If you draw a line from **Bottom-Left to Top-Right** (diagonal), you are moving "toward" the current recording faster than time is passing. 
*   *Result: Audio plays in Reverse.* [SRC: REPUTABLE]

## The "Stutter" Vertical Jump
If you draw a horizontal line in the middle of the grid, you are "looping" a specific slice of the buffer. Every time the envelope resets, the playhead jumps back to the start of that slice.
*   *Result: 1/4 or 1/8 note repeating "Glitches."*

## Rule of Thumb
*   **Steeper Angle:** Faster speed / Higher pitch.
*   **Shallower Angle:** Slower speed / Lower pitch.
*   **Vertical Jumps:** Instant jumps in the buffer (Causes clicks—needs Smoothing). [SRC: IL-MAN]
