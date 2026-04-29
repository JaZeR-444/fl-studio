# Fruity Big Clock - Parameter Cheat Sheet

**Plugin Type:** Visual Utility / Time Management
**Category:** Visual
**Official Manual:** [Fruity Big Clock](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Big%20Clock.htm)

---

## 🎚️ Display Modes

| Mode | Format | Use Case |
|------|--------|----------|
| **BB** | Bars : Beats : Ticks | Keeping track of the musical structure during recording |
| **Time** | Min : Sec : ms | Scoring for video, checking song length for radio/streaming |
| **Samples** | Absolute Sample Count | Surgical editing, calculating latency, precise alignment |

---

## 🎛️ Interaction & Customization

| Action | Result | Quick Tip |
|--------|--------|-----------|
| **Left Click** | Cycle through display modes | Switch between BB and Time quickly |
| **Drag Edge** | Resize the window | Make it massive for vocalists recording far from the monitor |
| **Right Click Wrapper** | 'Stay on Top' option | Keep it visible even when other windows are focused |

---

## 🔧 Technical Details

- **Sync Source:** FL Studio Audio Engine
- **Latency Awareness:** PDC Compensated (shows audible time)
- **Engine Impact:** Zero (No audio processing)
- **Scalability:** Fully vector-based (No blurriness at large sizes)

---

## 🎯 Quick Start Workflows

### The "Vocalist Remote" Setup
1. **Goal:** Your vocalist is in a booth and needs to know when their part is coming up.
2. **Action:** Open Big Clock, set to **BB** mode.
3. **Action:** Stretch it to cover 25% of the screen.
4. **Benefit:** They can clearly see the bar count from the booth without needing a dedicated monitor.

### The "Podcast/Video" Timer
1. **Goal:** You need to ensure your intro music hits exactly at the 15-second mark.
2. **Action:** Set Big Clock to **Time** mode.
3. **Action:** Place it near the top of the FL Studio window.
4. **Benefit:** Instant, sample-accurate time feedback for every cue.

---

## ⚡ Pro Tips

1. **Color Coding:** You can change the font color to match your project's theme by clicking the text.
2. **Samples Mode Math:** In Samples mode, if you see a value of 44,100, you know exactly one second has passed (at 44.1kHz sample rate).
3. **Always on Top:** This is the most used setting. Enable it so you can see the clock while editing in the Piano Roll or tweaking a synth.

---

**Last Updated:** February 3, 2026
**Status:** ⭐ HIGH PRIORITY - Elaborated Reference