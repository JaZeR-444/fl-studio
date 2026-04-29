# Linear vs. Pitch Scaling

BeepMap offers two methods for mapping the vertical (Y-axis) of an image to frequency.

## 1. Linear (Hz)
- **Math:** Pixels are mapped equally by Hertz (e.g., each pixel = +100Hz).
- **Sound:** Dissonant and inharmonic. Musical intervals (like octaves) will not align with image heights.
- **Use Case:** Sound effects, noise textures, and cinematic risers.

## 2. Pitch (Cents)
- **Math:** Pixels are mapped logarithmically. This follows the way human hearing perceives pitch.
- **Sound:** Musical. A line drawn at a specific height will sound like a specific note.
- **Use Case:** Creating melodic pads or organ-like tones from images.

## Which to choose?
- Use **Linear** if you are "drawing" a shape for a transition.
- Use **Cents** if you want the image to sound like a chord or a melody.
