# Fruity Chorus - Parameter Cheat Sheet

**Plugin Type:** Multi-Voice Chorus
**Category:** Time-Based Effects / Modulation
**Official Manual:** [Fruity Chorus](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Chorus.htm)

---

## 🎚️ Modulation Parameters

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Delay** | 0.1 - 50ms | Base delay of the chorus voices | Lower = Metallic/Phaser; Higher = Lush/Deep |
| **Depth** | 0 - 100% | Amount of pitch modulation | Higher = more "wobble" and movement |
| **Rate** | 0 - 10Hz | Speed of the LFO modulation | Slow (0.2Hz) for pads; Fast (2Hz+) for vibrato |
| **Stereo Cross** | 0 - 100% | L/R LFO phase offset | 100% creates the widest possible stereo image |
| **Wet** | 0 - 100% | Level of the effected signal | 50% is the classic "sweet spot" |

---

## 🎛️ Why Use Fruity Chorus?

| Problem | Fruity Chorus Solution |
|---------|------------------------|
| **Thin Vocals** | Adds a "doubling" effect that makes a single voice sound like a group. |
| **Static Pads** | Adds movement and life to sustained notes. |
| **Mono Lead Synths**| Quickly creates a wide stereo image from a mono source. |

---

## 🔧 Technical Engine Data

- **Type:** Delay-based pitch modulation (LFO)
- **Voice Count:** 4 independent delay lines (2 per channel)
- **LFO Shape:** Sine Wave
- **Latency:** 0 samples
- **CPU:** Extremely Light

---

## 🎯 Quick Start Workflows

### The "80s Pop" Vocal
1. **Delay:** 15ms
2. **Depth:** 30%
3. **Rate:** 0.5Hz
4. **Stereo Cross:** 100%
5. **Wet:** 35%
6. **Action:** Adds subtle thickness and width without overwhelming the dry vocal.

### The "Underwater" Vibe
1. **Delay:** 40ms
2. **Depth:** 80% (Extreme)
3. **Rate:** 1.5Hz
4. **Stereo Cross:** 50%
5. **Wet:** 100% (Full effect)
6. **Action:** Creates a wobbly, pitch-drifting sound perfect for lo-fi interludes.

---

## ⚡ Pro Tips

1. **The Flanger Trick:** Set **Delay** to its minimum (0.1ms). This creates a very short delay that interacts with the original signal to create a subtle flanging or "metallic" ring.
2. **Low-End Caution:** Using chorus on bass can cause phase cancellation in the sub-frequencies. Use a **Frequency Splitter** to only chorus the mids/highs of your bass.
3. **Patcher Multi-Chorus:** In Patcher, you can stack three Fruity Choruses with different rates (Slow, Medium, Fast) to create a massive "ensemble" effect similar to classic analog gear.

---

**Last Updated:** February 3, 2026
**Status:** ⭐ HIGH PRIORITY - Elaborated Reference