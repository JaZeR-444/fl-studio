# Quality Modes Impact

Autogun provides four quality modes in its Options menu. These determine the number of harmonics calculated and the interpolation quality.

## 1. Draft
- **Behavior:** Calculates a reduced set of harmonics.
- **CPU:** Extremely low.
- **Audio:** Thinner sound, potential aliasing at high frequencies.
- **Use Case:** Rapidly clicking through the 4 billion presets without lagging the project.

## 2. Good
- **Behavior:** Standard additive synthesis resolution.
- **CPU:** Moderate.
- **Audio:** Full frequency range, clean output.
- **Use Case:** Standard composition and arrangement.

## 3. High
- **Behavior:** Increased harmonic accuracy and better internal envelopes.
- **CPU:** High.
- **Audio:** Richer textures, especially for long evolving pads.
- **Use Case:** Critical listening and sound selection.

## 4. Pristine
- **Behavior:** Full 32,767 harmonic calculation with maximum interpolation.
- **CPU:** Very High (can cause underruns on complex presets).
- **Audio:** Flawless reproduction of the Ogun engine.
- **Use Case:** Rendering/Exporting the final track.
