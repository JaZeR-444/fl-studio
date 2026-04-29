# Fruity Bass Boost - Parameter Cheat Sheet

**Plugin Type:** Sub-Harmonic/Shelving Enhancer
**Category:** EQ / Harmonic Processing
**Official Manual:** [Fruity Bass Boost](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Bass%20Boost.htm)

---

## 🎚️ Main Enhancement Controls

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Frequency** | 20Hz - 500Hz | Corner frequency of the boost | Set to ~60Hz for kick thump; ~100Hz for bass body |
| **Amount** | 0 - 100% | Boost gain + Saturation drive | Use high settings for grit, low for clean sub-extension |

---

## 🎛️ Why Use Fruity Bass Boost?

| Problem | Bass Boost Solution |
|---------|---------------------|
| **Thin Kick** | Adds targeted low-end weight without muddying the mids. |
| **Small Speakers** | The internal saturation creates harmonics that make bass audible on phones/laptops. |
| **Clean Synths** | Adds an analog-style "warmth" to pure digital sine waves. |

---

## 🔧 Technical Engine Data

- **Type:** Non-linear Low Shelf Filter
- **Internal Drive:** The plugin applies soft-clipping as the **Amount** is increased.
- **Latency:** 0 samples
- **CPU:** Extremely Light

---

## 🎯 Quick Start Workflows

### The "Club Ready" Kick
1. **Frequency:** 65Hz
2. **Amount:** 40%
3. **Action:** This adds that "chest-thumping" low end while the saturation helps the transient cut through.

### 808 Warmth & Grit
1. **Frequency:** 120Hz
2. **Amount:** 65%
3. **Action:** By boosting slightly higher (120Hz), you drive the saturation engine harder, creating a fuzzy, saturated 808 sound.

---

## ⚡ Pro Tips

1. **The Phase Check:** Because this is a minimum-phase shelf, it will rotate phase at the low end. If your bass sounds "weaker" when you turn it on, try inverting the phase of the track.
2. **Gain Staging:** This plugin adds a LOT of gain. Follow it with a **Fruity Balance** or use the Mixer Fader to prevent clipping the master bus.
3. **Less is More:** It's easy to over-boost bass. Always check your mix on headphones or with a reference track to ensure you haven't made it too "boomy".

---

**Last Updated:** February 3, 2026
**Status:** ⭐ HIGH PRIORITY - Elaborated Reference
