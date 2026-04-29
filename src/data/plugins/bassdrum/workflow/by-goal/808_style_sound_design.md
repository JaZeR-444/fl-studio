# Goal Workflow: 808 Style Sound Design (Synthesized Sub)

*Goal: Creating a perfectly consistent, deep, and tuned 808 sub-bass using BassDrum's synthesis core.*

## 🎛️ Routing Context
- **Routing**: BassDrum -> Mixer Insert.
- **Mixer Chain**: Fruity Parametric EQ 2 -> Fruity Soft Clipper.

## 🚶 Step-by-Step Setup
1. **The Core Sub**:
   - Go to the **BASE** tab.
   - Set **End Freq** to your root note (e.g. 32.7Hz for C).
   - Set **Start Freq** to **150Hz**. 
   - *Logic*: Keeping the start frequency low ensures the 808 sounds like a bass note, not a drum.
2. **The Glide**:
   - Set **Pitch Decay** to **60%**.
   - *Result*: This creates a smooth, slow pitch glide that mimics real hardware 808s.
3. **The Sustain**:
   - Maximize the **Amp Decay** knob.
   - *Result*: The sub will ring out as long as the key is held (if sustain is high) or for a fixed long duration.
4. **The Texture (Drive)**:
   - Go to the **DRIVE** tab. Select **Tube**.
   - Set Amount to **20%**.
   - *Result*: Adds warm harmonics that make the 808 audible on laptop speakers without it sounding "distorted."
5. **The Clean-Up**:
   - In the Mixer, use an EQ to cut everything above 1kHz.
   - *Goal*: Keep the 808 focused on the low end.

## 🔄 Variations
- **The "Aggressive" 808**: Switch Drive to **Hard** and increase the Amount to 60%.
- **The "Ghost" Sub**: Turn off all Drive and use only the Base Sine oscillator for a perfectly clean sub-layer.

## ⚠️ Pitfalls & Fixes
- **Problem**: 808 sounds "weak."
- **Fix**: Check your **End Frequency**. If it's too low (below 30Hz), most speakers won't be able to reproduce it. Try tuning it one octave higher.
