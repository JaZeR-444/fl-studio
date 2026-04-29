# Reference: Sprite Sheet Requirements (Fruity Dance)

To create a functional character for Fruity Dance, your assets must follow these strict technical rules.

## 1. The Image File
- **Format:** PNG-24 or PNG-32.
- **Alpha:** Must have a transparent background.
- **Layout:** A horizontal strip of 8 frames.
- **Total Size:** 8x the width of a single frame.

## 2. The Frame Count
- Fruity Dance loops through exactly **8 frames** per row.
- Each row in the PNG represents a different "Dance Move" triggered by a different MIDI note.

## 3. The Definition File (.txt)
- Must be named identical to the image (e.g., `Ninja.txt` for `Ninja.png`).
- First line: The total number of animations (rows).
- Following lines: Names of the animations.

## 4. Scaling
- Use a power of 2 for frame width (e.g., 32, 64, 128 pixels). This ensures the cleanest rendering within the DAW. [SRC: REPUTABLE]
