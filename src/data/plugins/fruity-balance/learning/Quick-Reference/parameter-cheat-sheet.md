# Fruity Balance - Parameter Cheat Sheet

**Plugin Type:** Gain Staging / Panning Utility
**Category:** Utility
**Official Manual:** [Fruity Balance](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Balance.htm)

---

## 🎚️ Gain & Pan Controls

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Volume** | 0% to 100% | Signal gain adjustment | Automate THIS instead of the Mixer Fader! |
| **Pan** | 100% Left to 100% Right | Stereo balance | Use for movement/panning automation |

---

## 🎛️ Why Use Fruity Balance?

| Problem | Fruity Balance Solution |
|---------|-------------------------|
| **Rigid Faders** | Automating a Mixer Fader makes it hard to change the *overall* level later. Use Fruity Balance for volume automation, and keep the Fader for overall balance. |
| **Pre/Post FX Volume** | Place it at the start of a chain to drive compressors harder, or at the end to level match. |
| **Gain Staging** | Use it to bring hot signals (peaking above 0dB) down to a healthy level (~ -12dB) before they hit other plugins. |

---

## 🔧 Technical Engine Data

- **Type:** Linear Multiplier
- **PDC:** 0 samples (Zero Latency)
- **CPU:** Near-zero (The lightest gain plugin in FL)
- **Mapping:** 
  - 80% (0.8) = Unity Gain (0 dB)
  - 100% (1.0) = +5.6 dB boost

---

## 🎯 Quick Start Workflows

### The "Fader-Safe" Automation
1. **Goal:** You want to automate the volume of a vocal, but still be able to move the mixer fader.
2. **Action:** Insert **Fruity Balance** as the last effect in the chain.
3. **Action:** Create an automation clip for the **Volume** knob.
4. **Benefit:** Your Mixer Fader is still free for final mixing adjustments.

### Pre-Compressor Gain Matching
1. **Goal:** Your recording is too quiet to trigger a compressor properly.
2. **Action:** Place **Fruity Balance** BEFORE the compressor.
3. **Action:** Increase the **Volume** knob until the compressor starts working.

---

## ⚡ Pro Tips

1. **The 80% Rule:** Remember that "Default" (80%) is zero gain. If you want to *boost* a signal, you only have about 5.6dB of headroom within the plugin itself.
2. **Stereo Pan Law:** Fruity Balance uses a **Circular Pan Law**. This means the sound won't seem to get louder as you pan it to one side, which is essential for a natural mix.
3. **Visual Feedback:** Watch the Peak Meter in the Mixer while adjusting Fruity Balance to ensure your gain staging is consistent.

---

**Last Updated:** February 3, 2026
**Status:** ⭐ HIGH PRIORITY - Elaborated Reference
