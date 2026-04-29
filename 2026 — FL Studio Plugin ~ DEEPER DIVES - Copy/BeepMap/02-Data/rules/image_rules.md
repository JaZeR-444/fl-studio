# BeepMap Image Rules

## Rule 1: High Contrast is Key
- Low-contrast images (mostly grey) sound muddy and quiet.
- **Rule:** Always push the contrast of your source image so the background is pure Black (#000000). Black = Silence.

## Rule 2: Resolution vs. CPU
- The "Max Bitmap Height" setting is the primary CPU consumer.
- **Rule:** If the project is lagging, lower the height. 128 or 256 is usually enough for most textures. 1024+ is for extreme spectral precision.

## Rule 3: File Formats
- Always use **Lossless** formats like `.bmp` or `.png` when possible.
- `.jpg` compression introduces artifacts (small grey blocks) that BeepMap will translate into "ghost noise" or whistling artifacts.

## Rule 4: Aspect Ratio
- The width of the image is "Time". The height is "Pitch".
- If you want a long evolving pad, use a very wide, short image.
- If you want a complex harmonic hit, use a square, high-resolution image.
