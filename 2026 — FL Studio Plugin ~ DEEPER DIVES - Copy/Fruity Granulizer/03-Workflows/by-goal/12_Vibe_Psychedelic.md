# Vibe Workflow: Psychedelic (Re-Chop Melt)

*Goal: Create a disorienting, melting sonic landscape that evolves unpredictably.*

## 🎛️ Routing Context
- **Routing**: Vocal phrase or Melodic sample -> Fruity Granulizer.
- **Mix Status**: 100% Wet.

## 🚶 Step-by-Step Setup
1. **Initialize**: Set **W.SPACING** to -20% (Slow reverse traversal).
2. **Thickness**: Set **HOLD** to 60%. **ATT** to 40%.
3. **Chaos**: Crank **RAND** to 100%. Set **PAN** to 100%.
4. **Modulation**: Automate **G.SPACING** using a random LFO so the grain density changes constantly.
5. **Recording**: Arm your mixer and record 8 bars of this "melted" audio.
6. **The Re-Chop**: Take the recorded audio, slice it into random 1/4 note segments, and reverse every second segment.
7. **Mono Check**: Toggle Mono. Ensure the wide grains still have enough center energy to be heard.

## 🔄 Variations
- **The "Data-Mosh"**: Set **HOLD** to 5% and **ATT** to 0%. The sound will turn into digital static.
- **The "Pitch-Glitch"**: Automate the **Pitch** knob in the Granulizer during the recording.

## ⚠️ Pitfalls & Fixes
- **Problem**: CPU Overload.
- **Fix**: Increase **G.SPACING** (Slow down grain spawning) or reduce the number of active MIDI notes.
