# UI Map And Signal Flow: Fruity PanOMatic

## UI Tour
1.  **PAN Section (Top Left):** Sets the base stereo position.
2.  **VOL Section (Top Right):** Sets the base volume level.
3.  **LFO Shape Selector:** 
    - **Sine:** Smooth, curved movement. [SRC: IL-MAN]
    - **Triangle:** Linear rise and fall (more "mechanical").
    - **Square:** Instant ON/OFF (Gating).
4.  **SPEED Knob:** How fast the LFO cycles (measured in Hz, not BPM-synced).
5.  **AMOUNT Knob:** How far the LFO pushes the parameter from its center position.
6.  **Destination Toggle:** Choose whether the LFO affects **PAN** or **VOL**.

## Functional Flow
1.  **Input:** Stereo or Mono audio enters.
2.  **LFO Generation:** The LFO generates a signal (0 to 1) based on the Speed and Shape.
3.  **Mapping:** The LFO signal is multiplied by the Amount and applied to the chosen Destination.
4.  **Offset:** The result is added to the base Pan/Vol setting.
5.  **Output:** Audio leaves with modulated spatial/amplitude properties.

## Things Beginners Misunderstand
- **BPM Sync:** The Speed knob is **NOT** synced to your project tempo by default. You must tune it by ear or use a Hz-to-BPM calculation. [SRC: REPUTABLE]
- **The Amount Knob:** If Amount is at 0, the LFO does nothing. Beginners often turn the Speed knob and wonder why they hear no change.
- **Dual Modulation:** A single instance can only modulate ONE destination (Pan OR Vol). To modulate both at once, you need two instances of PanOMatic in series.
