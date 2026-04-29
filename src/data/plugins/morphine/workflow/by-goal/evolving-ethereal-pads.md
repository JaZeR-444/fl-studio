# Evolving Ethereal Pads (Morphine)

## Goal
Create a pad that constantly shifts its spectral content, resulting in a "living" texture.

## Technical Steps
1. **Source Generation:**
   - Go to **Generator A**. Set harmonics to a "Bowed String" profile (bright highs).
   - Go to **Generator B**. Set harmonics to a "Female Vocal" profile (strong formants).
2. **Morph Envelope:**
   - In the **Morph** tab, click the **Envelope** button.
   - Draw a slow, looping curve that moves between A and B over 8 seconds.
   - Set **Loop Mode** to Forward-Backward.
3. **PWM Filter:**
   - Apply a **PWM Filter** to both generators.
   - Set the PWM LFO to a slow rate.
4. **FX:**
   - Add a large internal **Reverb** (Decay 4s, Wet 60%).
   - Add **Chorus** for stereo width.

## Why it works
Because the sound is additive, Morphine is morphing the actual *frequencies* of the partials between the two states. This is spectral morphing, which is much smoother than a standard crossfade between two separate plugins.
