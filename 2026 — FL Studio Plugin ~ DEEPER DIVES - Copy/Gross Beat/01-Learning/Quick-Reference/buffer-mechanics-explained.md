# Understanding Buffer Mechanics in Gross Beat

## 🔄 The 2-Bar Rolling Buffer

Gross Beat is not a synthesizer; it is a **buffer effect**. Think of it as a tape recorder with a 2-bar loop tape that is constantly recording and erasing itself.

### Key Concepts

1.  **"Rolling" Recording**:
    *   Gross Beat is *always* recording the input audio.
    *   It only keeps the last **2 Bars** of audio in memory.
    *   Old audio falls off the "end" of the buffer and is lost forever.

2.  **The "Safety Line" (Diagonal)**:
    *   In the Time Grid, the diagonal line running from top-left to bottom-right represents **Real Time**.
    *   If your envelope line is ON the safety line, you hear the audio exactly as it comes in (Bypass).
    *   If your envelope is BELOW the safety line, you are playing back audio from the **past** (Buffer).
    *   You CANNOT draw above the safety line because that would require playing audio from the **future** (which hasn't been recorded yet).

### Practical Implications

*   **Latency**: Gross Beat introduces latency equal to the buffer size if you are monitoring through it live, though it reports this to the host for compensation during playback.
*   **The "Empty Buffer" Issue**: When you first start playback in your song, the buffer is empty.
    *   *Symptom*: Silence or glitches at the very start of a track.
    *   *Fix*: FL Studio usually pre-fills this, but be aware if you trigger a "2-bar ago" echo on the very first beat of the song, there is no audio there to echo.

### Visualizing the Speed

The angle of your line in the Time Grid determines playback speed:
*   **Diagonal (Top-Left to Bottom-Right)**: 1x Speed (Normal).
*   **Flat (Horizontal)**: 0x Speed (Pause / Freeze).
*   **Steep Downward Slope**: < 1x Speed (Slow Down).
    *   *Half-Speed*: A slope that is twice as steep as the safety line.
*   **Upward Slope**: Reverse Playback.

---
*Based on the 2-Bar Rolling Buffer architecture.*
