# Parameter Cheat Sheet: BeepMap

The essential modifiers for the image-synthesis engine. [SRC: IL-MAN]

---

## 🖼️ Image Handling
- **Image Display**: Drag-and-drop source. Left-click to load.
- **The Red Line**: Indicates current scan position.

## 🎛️ Scanning Parameters
- **Freq (Hz)**: Sets the base pitch of the bottom of the image.
- **Length (ms)**: The duration of the scan from Left to Right.
- **Loop**: Automatically restarts the scan.
- **Grain**: Resolution of the scan.
  - *Low*: Smooth, continuous.
  - *High*: Jagged, digital, "bit-crushed."

## 🎨 Tonal Modifiers
- **Scale (Lin/Log)**:
  - **Linear**: Equal spacing for all frequencies (sounds "non-musical").
  - **Logarithmic**: Spacing that mimics the human ear (sounds "melodic").
- **Blue**: When ON, the blue color channel adds frequency modulation.

## 📐 Output Section
- **Max / Min Gain**: Final volume range control.
- **Lim**: Internal limiter to prevent spectral clipping.