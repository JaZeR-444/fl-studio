# Fruit Kick - Drum Synthesizer

```
███████╗██████╗ ██╗   ██╗██╗████████╗    ██╗  ██╗██╗ ██████╗██╗  ██╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝    ██║ ██╔╝██║██╔════╝██║ ██╔╝
█████╗  ██████╔╝██║   ██║██║   ██║       █████╔╝ ██║██║     █████╔╝ 
██╔══╝  ██╔══██╗██║   ██║██║   ██║       ██╔═██╗ ██║██║     ██╔═██╗ 
██║     ██║  ██║╚██████╔╝██║   ██║       ██║  ██╗██║╚██████╗██║  ██╗
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝       ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝
```

**Plugin Type:** Drum Synthesizer (Kick)
**Category:** Generator / Drum / Synthesis
**Official Manual:** [Image-Line Fruit Kick Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruit%20Kick.htm)

---

## 🎯 What is Fruit Kick?

Fruit Kick is a dedicated synthesizer designed to do one thing perfectly: generate kick drums. It uses a sine wave sweep to create the fundamental "thump," combined with a click generator for the transient "attack" and a distortion circuit for "grit." It is the fastest way to dial in a custom kick without searching through sample libraries.

**Key Capabilities:**
- **Sine Sweep Synthesis:** Generates pure sub-bass tones.
- **Frequency Control:** Precise Start (Max) and End (Min) frequencies.
- **Click Generator:** Adds a sharp transient for cut-through.
- **Distortion:** Built-in hard clipping for Gabber/Hardstyle tones.
- **Decay Envelopes:** Independent control over pitch sweep speed vs volume decay.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **tuning-the-kick.md**
3. Create **parameter-cheat-sheet.md**
4. Load the default preset and adjust "Max" (Start Freq) to hear the sweep range.

### For Hardstyle Producers:
1. Study **creating-gabber-kicks.md**
2. Review **distortion-and-click-balance.md**

### For Hip-Hop Producers:
1. Study **808-emulation.md**
2. Review **layering-click-transients.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Max:** Start Frequency (The "Knock").
  - **Min:** End Frequency (The "Sub").
  - **Decay:** Pitch sweep speed.
  - **Click:** Transient volume.
  - **Dist:** Distortion amount.

- [ ] **tuning-the-kick.md**
  - How to match the "Min" frequency to the song key (e.g., 49Hz = G1).

#### 02-Data/parameters/
- [ ] **fruit-kick-params.json**
  ```json
  {
    "plugin_name": "Fruit Kick",
    "category": "Drum Synth",
    "synthesis_type": "Sine Sweep"
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-gabber-kicks.md**
  - High Distortion.
  - Long Decay.
  - High "Max" frequency for a sharp attack.

- [ ] **808-emulation.md**
  - Very low "Min" frequency.
  - Long Amplitude Decay.
  - Zero Click.
  - Minimal Distortion.

#### 03-Workflows/by-context/
- [ ] **layering-with-samples.md**
- [ ] **transient-shaping-kick.md**

---

## 🔬 Research Framework

### Phase 1: The Sweep (Week 1)
**Goal:** Understanding Kick Physics

**Tasks:**
1. Set Dist and Click to 0
2. Set "Min" to a low sub note
3. Adjust "Max" to hear the punch
4. Adjust "Decay" to change the tightness
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Why does a shorter decay make it sound punchier?
- How does the "Click" phase offset change the sound?

---

## 📊 Plugin Specifications to Document

### Engine
- Oscillator Type (Sine)
- Distortion Type (Hard Clip)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it distorted? (Check the Dist knob).
2. Can I change the waveform? (No, it's always a sine sweep).

---

## 🔗 Cross-Reference with Other Plugins

Fruit Kick is often used with:
- **Fruity Parametric EQ 2** (Shaping the final tone)
- **Fruity Soft Clipper** (Additional saturation)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Fruit Kick/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── tuning-the-kick.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── fruit-kick-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-gabber-kicks.md
│   │   └── 808-emulation.md
│
└── 04-Reference/
    └── frequency-to-note-chart.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a kick drum tuned exactly to C1 (32.7Hz)
- [ ] Design a "distorted" kick that still has a clean low end
- [ ] Explain the relationship between "Max" freq and "Punch"

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection