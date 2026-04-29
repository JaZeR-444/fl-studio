# Technical Specs: Dashboard Mechanics

## 1. INI File Architecture

*   **Pathing:** Relative paths are critical. `.\image.png` looks in the same folder as the `.ini`.
*   **Sections:**
    *   `[Info]`: Metadata (Name, Kind).
    *   `[Items]`: Only for Selectors (Kind=7, 8).
    *   `[Properties]`: Hidden tweakables (Border size).
*   **Case Sensitivity:** Windows file systems are case-insensitive, but it is good practice to stick to exact casing.

## 2. MIDI Data Handling

*   **Resolution:** 7-bit (0-127).
*   **Limitation:** Dashboard sends standard MIDI CC. It does not naturally support 14-bit NRPN (Non-Registered Parameter Numbers) effectively without complex Formula Controller linking.
*   **Smoothing:** Dashboard knobs do NOT output smooth floating point data like Control Surface. They output integer steps (0, 1, 2... 127).
    *   **Zippering:** Fast automation of a Dashboard knob controlling an internal plugin might cause "Zipper noise" unless the target plugin (e.g., Sytrus) has internal smoothing.

## 3. Patch Selector Logic (MSB/LSB)

*   **Bank Select:** Uses CC 0 (MSB) and CC 32 (LSB).
    *   `Value = (MSB * 128) + LSB`.
*   **Program Change:** Standard MIDI PC message.
*   **Timing:** All 3 messages are sent in a "burst" when the selector changes. Some older hardware synths (e.g., 80s units) might choke on this burst if the buffer is small.

## 4. Component "Kind" Reference
*   **0 (DigiWheel):** Frame-based animation.
*   **1 (Slider):** Linear movement.
*   **7 (Selector):** 0-indexed integer output based on list position.
*   **8 (Patch):** Triplet output (CC0, CC32, PC).
