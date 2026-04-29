# Workflow: Drum Bus Punch (Trap & Boom Bap)

*Goal: Glue the drums together while emphasizing the "knock" of the kick and snare.*

## 🎛️ Routing Context
- **Routing**: Drum Bus (Group) -> Fruity Limiter.
- **Mix Status**: 100% Wet.

## 🚶 Step-by-Step Setup
1. **The Snap**: Go to the **COMP** tab.
2. **Delayed Compression**: Set **ATTACK** to 30ms.
   - *Result*: This lets the full "crack" of the snare and the "thump" of the kick through before the compression starts.
3. **Hard Glue**: Set **RATIO** to 4:1. Set **CURVE** to 8 (Hard Knee).
4. **Active Threshold**: Lower **THRES** until the drums feel like they are hitting a "wall." Look for ~2dB of gain reduction.
5. **The Release**: Set **RELEASE** to 100ms.
   - *Result*: The compressor should "reset" exactly before the next drum hit.
6. **Harmonic Polish**: Go to the **LIMIT** tab. Set **CEIL** to -0.5dB. Turn the **SAT** (Saturation) knob up until the peaks turn blue in the analyzer.
7. **Result**: Your drums should sound "snappier" and more cohesive.

## 🔄 Variations
- **The "Over-Saturate"**: Lower the Ceiling even further and crank the Gain to turn Fruity Limiter into a distortion box for aggressive industrial trap.
- **The "Punchy Soften"**: Use a very slow Release (500ms+) to make the drums sound more "vintage" and less "sharp."

## ⚠️ Pitfalls & Fixes
- **Problem**: The kick drum is making the cymbals "pump" or dip too much.
- **Fix**: Lower the **Ratio** or use a High-Pass filter on the internal sidechain (if available via Patcher) to ignore the kick.
