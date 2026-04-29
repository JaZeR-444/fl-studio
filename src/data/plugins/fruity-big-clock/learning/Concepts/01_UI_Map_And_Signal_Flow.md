# UI Map And Signal Flow: Fruity Big Clock

## UI Tour
Fruity Big Clock is designed for maximum legibility:

1.  **Main Display:** Large digits showing time.
2.  **Mode Selector (Right-Click Menu):** 
    - **Bars:** Displays `Bars:Beats:Ticks`. [SRC: IL-MAN]
    - **Time:** Displays `Minutes:Seconds:ms`.
3.  **Color Selection:** Allows you to change the digit and background colors for high-contrast visibility.
4.  **Resize Handle:** Grab the corner to scale the clock from a small box to a full-screen display.

## Functional Flow
1.  **Transport Sync:** The plugin "listens" to the FL Studio transport engine.
2.  **Conversion:** It takes the sample-accurate position data and converts it into the selected format (Musical vs. Chronological).
3.  **Visual Redraw:** The UI updates the display in real-time, synced to the project's PPQ (Pulses Per Quarter note) setting.
4.  **No Audio Throughput:** Audio does not pass through this plugin; it is a purely visual observer.

## Things Beginners Misunderstand
- **"Ticks" Meaning:** In "Bars" mode, the third number represents **Ticks** (usually 96 or 480 per beat). It is not "milliseconds." [SRC: REPUTABLE]
- **Placement:** You can load it into ANY mixer slot. It doesn't matter where it is, as it monitors the global project time.
- **CPU:** It uses a tiny amount of GPU/CPU for the display. If you have extreme lag, close the window, as redraws can be heavy on older machines.
