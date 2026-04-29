# Workflow: Loudness Maximization (The Pro Master)

*Goal: Achieving professional commercial loudness (LUFS) while maintaining punch and clarity using the multiband architecture of Maximus.*

## Vibe Mapping
- **Upbeat:** ⭐⭐⭐⭐⭐ (Primary)
- **Vibey:** ⭐⭐⭐⭐
- **Moody:** ⭐⭐⭐ (With careful low-band control)

## 🎛️ Routing Context
- **Preferred:** Final slot on the Master Channel.
- **Mix Status:** 100% Wet (Dry/Wet balance is handled internally per band).

## 🚶 Step-by-Step Setup
1. **The Foundation:**
   - Load the **"Clean Master"** preset as a transparent starting point.
2. **Frequency Discipline (The Crossovers):**
   - **Low Band:** Adjust the **Low Freq** knob to isolate the Kick and Sub (usually around **100Hz – 120Hz**).
   - **High Band:** Adjust the **High Freq** knob to isolate the air and hats (usually around **4kHz – 6kHz**).
3. **Band-Specific Drive:**
   - **Low Band:** Use moderate compression to keep the sub-bass solid. Mono the low band by turning **Stereo Sep** all the way to the **Right**.
   - **Mid Band:** This is where the loudness is made. Boost **Pre-Gain** and use a "Soft" saturation curve to add harmonic perceived volume.
   - **High Band:** Use light compression to tame harshness.
4. **The Master Limit (The Ceiling):**
   - Select the **Master** band.
   - Set **Post-Gain** to **-0.1 dB** (your final digital ceiling).
   - Increase **Master Pre-Gain** until your LUFS meter hits your target (e.g. -8 LUFS).
5. **Transparency (Look-Ahead & Release):**
   - Set **Look-Ahead** to **2.0ms** or higher to prevent "clipping" artifacts.
   - Adjust **Rel 2** (Adaptive Release) to find the sweet spot where the limiter isn't "pumping" with the beat.

## 🔄 Variations
- **The "Aggressive Club" Master:** Use "Hard" saturation on the Master band for a gritty, over-driven sound.
- **The "Transparent R&B" Master:** Use lower Pre-Gain and slower Release settings to preserve the natural dynamics of the vocal.

## ⚠️ Pitfalls & Fixes
- **Problem:** The master sounds "choked" or "squashed."
- **Fix:** Lower the **Master Pre-Gain** or increase the **Rel 2** time.
- **Problem:** Low-end is causing the master to pump too much.
- **Fix:** Lower the **Pre-Gain** on the **Low** band specifically.

## 🎚️ Automation Ideas
- **Chorus Impact:** Increase the **Master Pre-Gain** by 1dB during the chorus to make it feel "louder" than the verse.
- **Build-up Drive:** Automate the **Mid-band Saturation** to increase during a riser.
