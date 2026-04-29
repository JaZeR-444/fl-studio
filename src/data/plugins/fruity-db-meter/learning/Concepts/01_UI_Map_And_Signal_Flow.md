# UI Map And Signal Flow: Fruity dB Meter

## UI Tour
Fruity dB Meter is designed for visual clarity:

1.  **Main Bar Display:** Shows the instantaneous peak level of the Left and Right channels.
2.  **Peak Hold Line:** A thin line that stays at the highest volume level reached. [SRC: IL-MAN]
3.  **Color Zones:** 
    - **Green/Yellow:** Safe mixing zone (-inf to -6dB).
    - **Orange/Red:** Warning zone (-6dB to 0dB).
4.  **Value Readout (Hint Bar):** Hovering over the meter shows the exact dBFS value in the FL hint bar.

## Functional Flow
1.  **Input:** Audio signal enters from the previous slot.
2.  **Peak Detection:** The plugin identifies the single highest sample value in the current buffer.
3.  **Visual Mapping:** The sample value is converted to a Decibel (dB) scale and rendered on the bar.
4.  **Peak Retention:** The "Peak Hold" logic stores the max value until manually reset (Right-click).
5.  **Output:** Audio passes through 100% unchanged (Zero Latency). [SRC: IL-MAN]

## Things Beginners Misunderstand
- **"Red means Clipping":** In FL Studio's 32-bit internal engine, hitting 0dB inside a mixer track doesn't actually "Clip" or distort yet. However, it's **bad practice** because it makes mastering much harder later. [SRC: REPUTABLE]
- **RMS vs Peak:** Beginners often think this shows "how loud it feels." It doesn't. It shows "how much room is left." A snare drum can hit 0dB and sound quiet, while a distorted pad can hit -10dB and sound loud.
- **Right-Click Reset:** If the peak line is stuck at 0dB from a previous loud moment, you must right-click the meter to reset the hold.
