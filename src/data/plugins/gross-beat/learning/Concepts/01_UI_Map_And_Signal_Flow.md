# UI Map And Signal Flow: Gross Beat

## UI Tour
1.  **Time Editor:** The main grid for time manipulation.
    *   **Horizontal Line at Top:** Normal playback.
    *   **Diagonal Line (Down):** Slows down time.
    *   **Diagonal Line (Up):** Speeds up time.
2.  **Volume Editor:** A standard envelope editor for gating.
3.  **Pattern Slots (1-36):** You have 36 slots for Time and 36 for Volume. You can trigger these via MIDI.
4.  **Attack/Release (Smoothing):** Critical for stopping "clicks" when the playhead jumps. [SRC: IL-MAN]
5.  **Dry/Wet Mix:** Controls how much of the original signal is blended with the processed one.

## Signal Flow
1.  **Input:** Audio is recorded into the 2-bar buffer.
2.  **Buffer Read:** The **Time Envelope** tells the playhead where to look in the buffer.
3.  **Volume Application:** The **Volume Envelope** is applied to the resulting audio.
4.  **Smoothing:** The **Attack/Release** knobs smooth out any sudden jumps in the playhead or volume.
5.  **Output:** The final manipulated audio is sent to the mixer.

## The 2-Bar Buffer Rule
Gross Beat is always recording. The grid represents 2 bars. 
*   If you draw a line in the first bar, it repeats every bar.
*   If you draw across both bars, it repeats every 2 bars.
*   **Crucial:** You cannot "look ahead" in time; you can only look back at what has already been recorded in the buffer. [SRC: REPUTABLE]

## Things Beginners Misunderstand
*   **Pattern Switching:** If you change a pattern mid-beat, it might wait until the next bar to switch unless you adjust the "Hold" and "Trig" settings.
*   **Clicks:** If your time envelope jumps vertically, it will click. You **must** increase the Attack knob (lower left) to smooth this out.
*   **Pitch vs Time:** In Gross Beat, changing time *always* changes pitch (Tape-style). You cannot change time without affecting pitch inside this plugin.
