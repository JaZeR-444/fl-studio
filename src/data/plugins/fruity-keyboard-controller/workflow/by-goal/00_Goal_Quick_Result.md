# Goal: Playing the Filter Cutoff (Keyboard Controller)

## Routing Context
- **Target:** A Lead Synth or Bass.
- **Position:** generator (Keyboard Controller) -> Effect (Fruity Free Filter).

## Step-by-Step Setup
1.  On your synth track, add **Fruity Free Filter**.
2.  Load **Fruity Keyboard Controller**.
3.  Right-click the **FREQ** knob on Free Filter -> **Link to controller**.
4.  Select **Keyboard Controller - Note**.
5.  **The Map:** In Keyboard Controller, draw a diagonal line from bottom-left to top-right in the Note Map.
6.  **The Sequence:** Copy your synth's MIDI melody into the Keyboard Controller's Piano Roll.
7.  **The Tweak:** Adjust the Synth's melody or the Keyboard Controller's notes to create "Filter Counter-Melodies."

## Result
- The filter cutoff follows your melody perfectly. High notes are bright, low notes are dark. This creates an "Analog Key Tracking" feel that makes synths sound much more expensive.

## Vibe Check
- **Vibey/Jazzy:** Adds organic life to Rhodes and lead lines.

## Pitfalls + Fixes
- **Pitfall:** "The filter range is too small."
  - **Fix:** In the "Remote Control Settings" window (when linking), adjust the **Mapping Formula** to `Input*1.5` to expand the range. [SRC: REPUTABLE]
