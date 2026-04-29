# UI Map And Signal Flow: Fruity Dance

## UI Tour
Fruity Dance features a minimalist control set:

1.  **Character Window:** The main area where the animation plays.
2.  **Dance Selector (Top):** Manually choose a move (e.g., Held, Dance, Jump, DJ). [SRC: IL-MAN]
3.  **Speed Slider:** Multiplies the animation rate (0.1x to 4x).
4.  **Reflect Slider:** Adds a mirror-like floor reflection.
5.  **Option Menu:** Includes "Keep in Front" and character loading settings.

## Functional Flow
1.  **Tempo Sync:** The plugin reads the project's BPM from the FL Studio engine.
2.  **MIDI Input:** It monitors MIDI notes played on its channel.
3.  **Frame Calculation:** It picks the correct frame from the **8-frame sprite row** based on the current beat position.
4.  **Transformation:** It scales and reflects the character based on UI settings.
5.  **Display:** The character is rendered on screen (supports alpha transparency).

## Things Beginners Misunderstand
- **Piano Roll Triggers:** The different dance moves are mapped to different MIDI notes (e.g., C5 is standard dance). You can "sequence" a dance just like a drum pattern. [SRC: REPUTABLE]
- **Sprite Sheet Format:** You can't just drag in a GIF. You must use a specific PNG layout with a `.txt` definition file.
- **"Auto-Dance":** If no MIDI is playing, the character will perform the move selected in the top dropdown. If MIDI is playing, the dropdown is ignored.
