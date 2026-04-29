# Vibe Workflow: Psychedelic (Notch-Reverse Chop)

*Goal: Create a disorienting, hollowed-out texture that shifts and warps.*

## 🎛️ Routing Context
- **Routing**: Wide Synth Pad -> Fruity Free Filter.
- **Mix Status**: 100% Wet.

## 🚶 Step-by-Step Setup
1. **Initialize**: Set Mode to **Notch**.
2. **Resonance**: Set **Q** to 80% (creating a deep, resonant "hole").
3. **The Sweep**: Link the **Freq** knob to a very fast Random LFO (via Peak Controller or Formula Controller).
4. **Recording**: Arm the mixer track and record 8 bars of the synth.
5. **The Flip**: Double-click the recorded audio clip and select **Reverse**.
6. **The Re-Chop**: Slice the reversed clip at every 1/2 beat and rearrange the slices randomly.
7. **Mono Check**: Switch the Master track to Mono. Ensure the "Notch holes" haven't made the sound too thin to be heard.

## 🔄 Variations
- **The "High-Frequency Ghost"**: Set Mode to **High Pass** and automate the Freq between 2kHz and 15kHz before reversing.
- **The "Phased Stab"**: Use the **Peaking** mode with high negative Gain (-12dB) instead of Notch.

## ⚠️ Pitfalls & Fixes
- **Problem**: The re-chopped audio has "clicks" at the start of every slice.
- **Fix**: Increase the "Crossfade" or "De-clicking" setting in the Sampler window for the audio clip.
