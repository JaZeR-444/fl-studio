# Fruity Blood Overdrive - Parameter Cheat Sheet

**Plugin Type:** Analog-Modeled Distortion
**Category:** Distortion / Saturation
**Official Manual:** [Fruity Blood Overdrive](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Blood%20Overdrive.htm)

---

## 🎚️ Signal Flow Parameters

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Pre Band** | 0 - 100% | Low-pass filter BEFORE distortion | Controls which frequencies "drive" the crunch |
| **Color** | 0 - 100% | Post-distortion tonal character | Lower = Darker/Muddy; Higher = Brighter/Fizzy |
| **Pre Amp** | 1x - 100x | Input Gain / Drive amount | The primary distortion control |
| **Post Gain** | 0 - 100% | Final output volume | Use to level-match after driving the Pre Amp |
| **Post Filter** | 0 - 100% | Low-pass filter AFTER distortion | Removes harsh high-end "fuzz" |

---

## 🎛️ Why Use Blood Overdrive?

| Problem | Blood Overdrive Solution |
|---------|--------------------------|
| **Clean Guitars** | Adds classic pedal-style grit and sustain. |
| **Weak Snares** | Adds "meat" and harmonics to help them punch through a mix. |
| **Sterile Vocals** | Creates an industrial or lo-fi "radio" effect. |
| **Sub-Bass Translation**| Generates harmonics that make sub-bass audible on small speakers. |

---

## 🔧 Technical Engine Data

- **Type:** Asymmetrical Soft-Clipping (Analog Emulation)
- **Harmonics:** Produces a rich blend of even and odd harmonics.
- **Latency:** 0 samples
- **CPU:** Extremely Light

---

## 🎯 Quick Start Workflows

### The "Screaming Lead"
1. **Pre Amp:** 50%
2. **Color:** 75%
3. **Pre Band:** 40%
4. **Post Filter:** 80% (Keep some sparkle)
5. **Action:** Adds intense sustain and bite to synth leads.

### The "Warm Tube" Saturation
1. **Pre Amp:** 5-10% (Subtle)
2. **Color:** 50%
3. **Pre Band:** 100% (Let all frequencies drive)
4. **Post Filter:** 50%
5. **Action:** Mimics the gentle compression and warmth of an overdriven tube amp.

---

## ⚡ Pro Tips

1. **Pre-Filter Magic:** If your distortion sounds "flubby" or messy, increase the **Pre Band**. This removes sub-bass from the distortion circuit, resulting in a tighter, more focused crunch.
2. **Phase Correlation:** Extreme distortion can change the phase of your signal. If processing a multi-mic drum kit, check for phase cancellation.
3. **Serial Distortion:** Try placing two Blood Overdrives in a row with low Pre Amp settings. This often sounds more "expensive" and smoother than one plugin with a high setting.

---

**Last Updated:** February 3, 2026
**Status:** ⭐ HIGH PRIORITY - Elaborated Reference