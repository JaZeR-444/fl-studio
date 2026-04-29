# Fruity Center - Parameter Cheat Sheet

**Plugin Type:** Stereo/Mid-Side Utility
**Category:** Utility
**Official Manual:** [Fruity Center](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Center.htm)

---

## 🎚️ Mid-Side Control Parameters

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Center (Mid)** | 0 - 100% | Volume of the mono/centered content | Lower to remove vocals or center-panned instruments |
| **Side** | 0 - 100% | Volume of the stereo/difference content | Boost for extra width; lower to check mono compatibility |

---

## 🎛️ Common Utility Scenarios

| Problem | Fruity Center Solution |
|---------|------------------------|
| **Vocal Removal** | Vocals are usually centered. Cut the **Center** knob to attenuate them for karaoke. |
| **Muddy Reverb** | Reverb is often stereo-heavy. Lower the **Side** knob to make the reverb more "focused" and mono. |
| **Narrow Mix** | Boost the **Side** knob relative to the **Center** to increase the perceived stereo image. |
| **Mono Check** | Set **Side** to 0% to hear exactly what will be lost on mono playback systems (like club PAs). |

---

## 🔧 Technical Engine Data

- **Type:** Sum-Difference Processor (Mid-Side Matrix)
- **Math:** 
  - `Mid = (L + R) / 2`
  - `Side = (L - R) / 2`
- **Latency:** 0 samples
- **CPU:** Near-zero

---

## 🎯 Quick Start Workflows

### The "Instant Width"
1. **Center:** 80%
2. **Side:** 100%
3. **Action:** By slightly dipping the center, you allow the side-panned elements to feel more prominent, increasing width.

### The "Surgical Mono"
1. **Center:** 100%
2. **Side:** 0%
3. **Action:** Converts any stereo signal to a perfect mono signal. Essential for ensuring your sub-bass is 100% phase-aligned.

---

## ⚡ Pro Tips

1. **Phase Cancellation Risks:** If you boost the **Side** knob too much, you may introduce phase issues that make the sound disappear when played in Mono. Always toggle between Stereo and Mono (Side @ 0%) to check.
2. **Post-EQ is Key:** After removing the Center, the remaining Side signal often lacks low end (since kicks/bass are usually centered). Use an EQ to boost the lows of the Side signal if it sounds too thin.
3. **Creative Panning:** Automate the **Center** knob during a transition to "suck the air" out of a sound before a drop, then bring it back for full impact.

---

**Last Updated:** February 3, 2026
**Status:** ⭐ HIGH PRIORITY - Elaborated Reference