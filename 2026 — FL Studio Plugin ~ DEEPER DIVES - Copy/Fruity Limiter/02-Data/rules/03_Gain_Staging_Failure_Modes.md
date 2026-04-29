# Rules: Gain Staging & Failure Modes (Fruity Limiter)

## 1. The Master Bus Rule
- **Rule**: Never allow the Limiter to do more than 2-3dB of gain reduction on a full mix.
- **Verification**: If the white line dips more than half a centimeter in the visualizer, your master is "choked."
- **Failure Mode**: **Dullness**. Over-limiting destroys the transients (kicks/snares), making the track sound small and flat despite being "loud."

## 2. Low-Frequency Release Rule
- **Rule**: Increase the **Release** time in the LIMIT tab when processing sub-bass or 808s.
- **Threshold**: Set Release to at least 150ms.
- **Failure Mode**: **Distortion**. If the release is too fast, the limiter tries to "correct" individual wave cycles of the bass, resulting in audible buzzing/grit.

## 3. Sidechain Click Protection
- **Rule**: Set **Attack** to 0ms only when you want an instant cut.
- **Verification**: If you hear a "click" every time the sidechain triggers, increase Attack to ~0.5ms.
- **Failure Mode**: **Clicking**. Abrupt volume cuts create digital square-wave artifacts.

## 4. Gain-In vs Gain-Out
- **Rule**: Your output level (Purple) should ideally stay near your input level (Grey) unless you are purposefully maximizing.
- **Failure Mode**: **Pumping**. If your Gain is too high and your Threshold is too low, the sound will "inhale" and "exhale" unpleasantly.
