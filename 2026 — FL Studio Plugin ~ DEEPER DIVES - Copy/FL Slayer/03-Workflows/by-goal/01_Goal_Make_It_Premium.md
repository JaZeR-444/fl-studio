# Goal Workflow: Make It Premium (Legacy Polish)

*Goal: Using modern processing to disguise the "legacy" character of FL Slayer.*

## 🎛️ Routing Context
- **Routing**: FL Slayer -> Mixer Track.
- **Mixer Chain**: Fruity Parametric EQ 2 -> Fruity Convolver (Cabinet IR) -> LuxeVerb.

## 🚶 Step-by-Step Setup
1. **Model Neutralization**:
   - Set FL Slayer Cabinet to **Dry**. (We will use an external cabinet).
   - Set **Preamp** to 20% (Warmth).
2. **Surgical EQ**:
   - Cut 250Hz by 4dB (Removes the "boxy" modeling mud).
   - High-Pass at 150Hz.
3. **The "IR" Transformation**:
   - Add **Fruity Convolver**.
   - Load a "Cabinet Impulse Response" (search for free guitar IRs).
   - *Result*: This replaces the dated 1990s cabinet models with high-fidelity, real-world speaker data.
4. **Modulation Glue**:
   - Add a subtle **Fruity Chorus** at 15% mix.
5. **Atmospheric Depth**:
   - Add **LuxeVerb**. Select "Plate" mode.
   - Set **Decay** to 1.2s.
   - *Final Vibe*: The modeling provides the articulation, while the external processing provides the professional "premium" sheen.

## 🔄 Variations
- **The "Lo-Fi" Premium**: Use a low-pass filter at 2kHz and add 5% vinyl noise.
- **The "Wide" Lead**: Use a ping-pong delay after the cabinet.

## ⚠️ Pitfalls & Fixes
- **Problem**: CPU usage is jumping.
- **Fix**: FL Slayer is an old plugin; avoid using more than 4 instances in a single project.
