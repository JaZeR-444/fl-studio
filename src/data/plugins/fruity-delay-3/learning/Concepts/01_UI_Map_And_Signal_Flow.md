# UI Map And Signal Flow: Fruity Delay 3

## UI Tour
1.  **Delay Section:**
    *   **Time:** Tempo-locked or MS.
    *   **Keep Pitch Toggle:** Essential! Determines if time changes slide the pitch (Analog) or stay clean (Digital). [SRC: IL-MAN]
2.  **Feedback Section:**
    *   **Level:** Repeats.
    *   **Cutoff/Res:** Resonant filters in the loop.
3.  **Tone Section (The Character Core):**
    *   **Filter Type:** Off, HP, LP, BP.
    *   **Distortion:** Limit, Sat, Bit, or Sine modes.
    *   **Diffusion:** Smears the sound.
4.  **Modulation Section:**
    *   **Rate/Time/Cut:** Internal LFO for wobble.

## Signal Flow
1.  **Input:** Audio enters.
2.  **Delay Buffer:** Audio is held.
3.  **The Loop (The Secret Path):**
    *   **Filter** (Tone shaping) ->
    *   **Distortion** (Adding harmonics) ->
    *   **Diffusion** (Smearing transients) ->
4.  **Feedback:** The processed signal goes back to Step 2.
5.  **Output:** Summed with the Dry signal. [SRC: REPUTABLE]

## Things Beginners Misunderstand
*   **The "Limit" Mode:** In the distortion section, "Limit" is a safety tool. Use it to prevent high-feedback loops from exploding.
*   **Diffusion isn't Reverb:** It sounds like reverb, but it's just "blurring" the echoes. It is much more metallic and textured than a standard Reverb 2 tail.
*   **BPM Sync:** If your project tempo changes, Delay 3 will slide its pitch to stay in time. Switch to "Keep Pitch" mode if you want to avoid this. [SRC: IL-MAN]
