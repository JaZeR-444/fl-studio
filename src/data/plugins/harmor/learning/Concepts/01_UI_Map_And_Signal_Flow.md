# UI Map And Signal Flow: Harmor

## UI Tour
1.  **Main Tab:** Includes Engine A/B fader, Unison, and the master Filter/Phaser/Pluck.
2.  **IMG Tab:** The "Resynthesis" zone. Drag samples or images here.
3.  **ADV (Advanced) Tab:** Control partial count and CPU settings.
4.  **Envelopes/Articulators:** The bottom section where you draw detailed modulation for every knob. [SRC: IL-MAN]

## Signal Flow (The Spectral Path)
1.  **Generator:** Either the **Timbre** (Oscillator) or the **IMG** (Resynthesized sample) generates harmonics.
2.  **Prism:** Warps the relationship between harmonics (FM-like textures).
3.  **Filter:** Applies a frequency response. (You can draw custom shapes here).
4.  **Phaser:** An additive phaser that can be set to "Frequency" or "Classic" modes.
5.  **Blur:** Smears the sound in time (turns transients into pads).
6.  **Tremolo/Strum:** Final rhythmic modulation.
7.  **FX Rack:** Distortion, Delay, Reverb, and Compressor.

## Resynthesis Explained
When you drag a sample into the **IMG** tab, Harmor analyzes it and converts it into a "Photo" of sound.
*   **X-axis:** Time.
*   **Y-axis:** Frequency.
*   Because it's now "data," you can play the sample at **0% speed** and it will sound like a perfectly frozen, clear note. [SRC: REPUTABLE]

## Things Beginners Misunderstand
*   **Engine A vs B:** Harmor is two synths in one. If you only see one filter moving, check if you're on Engine A or Engine B.
*   **The "Sub" Knob:** Harmor has a dedicated Sub-oscillator that is added *after* the filter. This ensures your bass stays heavy even if you high-pass the main sound.
*   **Visual Feedback:** The window in the middle shows the harmonics in real-time. If it's a solid block, your sound is harmonically rich. If it's just lines, it's a "cleaner" sound.
