# Workflow: Evolving Textures (Vibey/Psychedelic)

*Goal: Using the 8-slot Modulation Matrix to create complex, shifting, and atmospheric pads that never sound the same twice.*

## Vibe Mapping
- **Vibey:** ⭐⭐⭐⭐⭐ (Primary)
- **Psychedelic:** ⭐⭐⭐⭐⭐ (Primary)
- **Moody:** ⭐⭐⭐⭐

## 🚶 Step-by-Step Setup
1. **The Dual-Osc Base:**
   - **DCO 1:** Sawtooth.
   - **DCO 2:** Pulse.
   - **Detune (Fine):** Set DCO 2 to **+7 cents** for natural beating.
2. **The Matrix (Motion Strategy):**
   - **Slot 1:** Source: **LFO 1**, Destination: **Filter Cutoff**, Amount: **+30%** (Slow rhythmic movement).
   - **Slot 2:** Source: **LFO 2**, Destination: **PWM**, Amount: **+50%** (Harmonic shifting).
   - **Slot 3:** Source: **Env 2**, Destination: **DCO 2 Level**, Amount: **-40%** (The second oscillator fades out as the note is held).
   - **Slot 4:** Source: **Mod Wheel**, Destination: **FX Reverb Mix**, Amount: **+80%** (Performative depth).
3. **LFO Setup:**
   - **LFO 1:** Sine wave, synced to 1/1 bar.
   - **LFO 2:** Random/S&H wave, slow rate (creates "organic" unpredictable changes).
4. **The Filter (HQ Mode):**
   - Enable **HQ Filter**.
   - Set **Freq** to 35%.
   - Set **Resonance** to 20%.
5. **The "Expensive" Space:**
   - Turn on **Chorus I+II** and a large **Reverb**.

## 🔄 Variations
- **The "Dreamy Underwater" Pad:** Set **LP Filter** to 500Hz and map **LFO 1** to **Pan**.
- **The "Glitchy Atmosphere":** Map a fast **Random LFO** to **DCO 2 Semi** (at a very low amount, e.g., 2%).

## ⚠️ Pitfalls & Fixes
- **Problem:** The sound is too "chaotic."
- **Fix:** Lower the **Amount** in the Matrix slots. Subtle modulation (5–15%) is often more effective than extreme values.
- **Problem:** CPU spiking.
- **Fix:** Disable **HQ Filter** mode if you have multiple instances of Exo running.

## 🎚️ Automation Ideas
- **Texture Morph:** Automate the **LFO 2 Rate** to speed up during the bridge of the song.
- **Matrix Intensity:** If your DAW allows, automate the **Master Modulation Depth** (if available) or the individual Matrix amounts.
