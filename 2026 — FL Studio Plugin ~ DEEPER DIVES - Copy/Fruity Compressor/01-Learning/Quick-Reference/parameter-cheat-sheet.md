# Fruity Compressor - Parameter Cheat Sheet

**Plugin Type:** Dynamic Processor (Compressor)
**Category:** Dynamics
**Official Manual:** [Fruity Compressor](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Compressor.htm)

---

## 🎚️ Core Compression Parameters

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Threshold** | -60 to 0 dB | Level above which compression begins | Lower for more compression; higher for transparency |
| **Ratio** | 1:1 to Inf:1 | Amount of gain reduction applied | 2:1-4:1 for instruments; 10:1+ for limiting |
| **Gain** | -30 to +30 dB | Output makeup gain | Use to match pre-compression volume levels |
| **Attack** | 0 to 400 ms | How quickly compression kicks in | Fast (0-10ms) for peaks; Slow (20ms+) for punch |
| **Release** | 1 to 4000 ms | How quickly compression stops | 50-200ms is standard; sync to tempo for "breathing" |

---

## 🎛️ Advanced Control & Knee Types

| Type | Description | Use Case |
|------|-------------|----------|
| **Hard** | Abrupt transition at threshold | Precise peak control, drums, aggressive styles |
| **Medium** | Softer transition | General purpose, versatile mixing |
| **Vintage** | Emulates old analog behavior | Warmth, musicality, vocals, guitars |
| **Soft** | Very gradual transition | Transparent leveling, buses, mastering |
| **Hard R** | Hard knee with faster release | High-energy percussion |
| **Medium R** | Medium knee with faster release | Rhythmic instruments |
| **Vintage R** | Vintage knee with faster release | Classic rock/pop elements |
| **Soft R** | Soft knee with faster release | Smooth bus processing |

---

## 🔧 Technical Specifications

- **Latency:** 0 samples (Zero Latency)
- **Engine:** Peak-based detection
- **Sidechain:** Internal or External (via Wrapper routing)
- **Stereo Link:** 100% (Left and Right are processed equally based on the louder channel)

---

## 🎯 Quick Start Workflows

### Drum Punch (Parallel Style)
1. **Ratio:** 4:1
2. **Attack:** 30ms (let the initial "crack" through)
3. **Release:** 100ms
4. **Threshold:** Drop until you see -4 to -6 dB reduction
5. **Gain:** Boost by +4 dB

### Vocal Leveling
1. **Type:** Soft or Vintage
2. **Ratio:** 3:1
3. **Attack:** 10ms
4. **Release:** 200ms
5. **Threshold:** Adjust for consistent volume without "pumping"

---

## ⚡ Pro Tips

1. **The 0ms Attack Trap:** Setting attack to 0ms can kill the "life" of a sound by flattening all transients. Use 5-15ms for a more natural sound.
2. **Tempo-Synced Release:** Aim for the compression to reset just before the next beat.
3. **Makeup Gain Check:** Always bypass the plugin to ensure you haven't just made the sound louder, but actually improved the dynamics.

---

**Last Updated:** February 3, 2026
**Status:** ⭐ HIGH PRIORITY - Elaborated Reference