# Fruity dB Meter: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** Vector-Based Digital Peak Metering Logic
**Internal Precision:** 32-Bit Floating Point Readout
**Target Genres:** Professional Mixing/Mastering for all Modern Rap, R&B, and Hip-Hop

---

## 1. THE METER SCALE (The Ruler)
The display logic of Fruity dB Meter is designed for absolute technical transparency.

### 1.1 The dBFS Scale
- **Range:** -Inf to 0.0 dB.
- **Technical Logic:** 0.0 is the "Digital Limit." In standard mixing, you should never see the meter turn red.
- **Master Tip:** For "Moody" R&B, aim for your average level to sit around **-18dB**. This mimics the "sweet spot" of classic analog consoles.

### 1.2 The Peak Indicator (The Red Dot)
- **Physics:** It tracks the highest voltage peak of the waveform.
- **Retention Logic:** The "Peak" value remains on screen until manually reset. This is essential for finding that one "stray transient" that is causing your track to clip.

---

## 2. THE NUMERICAL READOUT (Precision)
### 2.1 Current Value
- **Accuracy:** Updated in real-time at the project's refresh rate.
- **Production Use:** Use this to check "Gain Staging." When you add a plugin (like a compressor), the "Current Value" should be roughly the same before and after you turn the plugin on.

### 2.2 Peak Value (The High Score)
- **Action:** Click the number to reset it.
- **Master Strategy:** During the final mix-down, play the entire song and reset the meter at the start of every section (Chorus, Verse, Bridge). Note the highest Peak for each. If the Chorus is peaking at -1dB but the Verse is at -8dB, you have a "Mood Balance" issue that needs automation.

---

## 3. THE RESIZABLE INTERFACE (Visualization)
### 3.1 Vector Scaling
- **Feature:** Unlike VSTs with fixed windows, Fruity dB Meter can be stretched to any size.
- **The "Engineer's View":** Stretch the plugin horizontally across your mixer. This turns the tiny standard meters into a high-definition monitoring station.
- **The "0.1dB" Hack:** By making the plugin very large, the distance between -1.0dB and 0.0dB becomes several inches on your monitor. This allows you to visually "calibrate" your master limiter with surgical precision.

---

## 4. PERFORMANCE & LOGIC
### 4.1 Zero Latency Architecture
- **PDC Support:** The plugin reports **0 samples** of latency to the FL Studio engine.
- **Reactivity:** Because it doesn't process audio (only analyzes it), it has zero impact on your project's CPU, even when scaled to full-screen.

---

## 5. HIDDEN WRAPPER SETTINGS
### 5.1 "Stay on Top" (The Monitor Mode)
- **Workflow:** Right-click the plugin wrapper (top bar) -> **Stay on Top**.
- **The Benefit:** You can now open the Piano Roll or a Synth, and the dB Meter will remain visible. This allows you to monitor your levels while you are tweaking sounds in real-time.

### 5.2 Detach
- **Workflow:** Right-click wrapper -> **Detached**.
- **The Benefit:** Allows the meter to be moved outside of the main FL Studio window (ideal for dual-monitor setups).

---

## 6. TROUBLESHOOTING THE HEADROOM
- **Issue:** "My meter is at -0.1dB but the track sounds quiet."
- **Fix:** You have too much "Crest Factor." Your peaks (drums) are too loud compared to the body (melody). Use a **Fruity Limiter** to shave 2dB off the peaks and boost the overall volume.
- **Issue:** "The meter is constant at 0.0dB."
- **Fix:** You are heavily clipping your output. Check the gain of your 808 and the master volume of your synths immediately!

---

## 7. MASTERING TARGETS FOR STREAMING (Cheat Sheet)
Use the Fruity dB Meter to hit these targets before you export:

| Platform | Target Peak | Target RMS (Approx) |
|----------|-------------|---------------------|
| **Spotify** | -1.0 dB     | -14 LUFS / -12 RMS  |
| **YouTube** | -1.0 dB     | -13 LUFS / -11 RMS  |
| **Apple Music**| -1.0 dB     | -16 LUFS / -14 RMS  |
| **Club PA** | -0.3 dB     | -8 LUFS / -6 RMS    |

---

## 8. SUMMARY: THE "CHECKLIST"
1. **Reset** the meter before every final listen.
2. **Resize** to full-height for ±0.1dB precision.
3. **Link** Gain Staging: Check level BEFORE and AFTER every effect.
4. **Peak Check:** Keep master peaks at -1dB for safety during streaming conversion.

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** Fruity dB Meter, Gain Staging, Digital Headroom, Peak Monitoring, FL Studio Engineering, Loudness Standards.