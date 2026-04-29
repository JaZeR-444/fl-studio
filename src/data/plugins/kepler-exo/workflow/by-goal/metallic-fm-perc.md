# Workflow: Metallic FM Percussion (Psychedelic/Jazzy)

*Goal: Using Cross-Modulation (FM) and short envelopes to create bell-like, metallic, and "glitchy" percussive elements.*

## Vibe Mapping
- **Psychedelic:** ⭐⭐⭐⭐⭐ (Primary)
- **Jazzy:** ⭐⭐⭐ (For "organic" bell hits)
- **Upbeat:** ⭐⭐⭐ (For percussive ear candy)

## 🚶 Step-by-Step Setup
1. **The FM Engine:**
   - **DCO 1:** Square wave. (This is the "Carrier").
   - **DCO 2:** Square wave. (This is the "Modulator").
   - Set **DCO 2 Semi** to **+19** (an octave and a fifth) or **+7**. These non-unison ratios create metallic harmonics.
2. **The "Ring" (Cross-Mod):**
   - Increase **X-Mod** to **60–80%**. You should hear a metallic, bell-like clang.
3. **The Percussive Shape (ADSR):**
   - **Attack:** 0.
   - **Decay:** Very short (100–300ms).
   - **Sustain:** 0.
   - **Release:** Very short.
4. **Filter Sculpting:**
   - Set **Filter Freq** to 50%.
   - Set **Resonance** to 60%.
   - Map **Env 2** to **Filter Cutoff** with a positive amount for a "snap."
5. **Texture:**
   - Add 20% **Noise** to add a "shaker" or "hit" character to the start of the sound.

## 🔄 Variations
- **The "Digital Cowbell":** Set **DCO 2 Semi** to specific dissonant ratios and keep the filter open.
- **The "Organic Kalimba":** Lower the **X-Mod** and use the **HQ Filter** with high resonance to create a "woody" pluck.

## ⚠️ Pitfalls & Fixes
- **Problem:** The sound is too "harsh" or "noisy."
- **Fix:** Lower the **X-Mod** or the **DCO 2 Level**. FM can get messy very quickly.
- **Problem:** It sounds too "thin."
- **Fix:** Add a bit of **Sub-Oscillator** (even 10-20%) to ground the metallic clang.

## 🎚️ Automation Ideas
- **Dynamic Clang:** Map **Velocity** to **X-Mod** in the Matrix. This makes the sound more metallic the harder you play—just like a real metal instrument.
- **Glitch Roll:** Automate the **DCO 2 Semi** pitch during a drum fill.
