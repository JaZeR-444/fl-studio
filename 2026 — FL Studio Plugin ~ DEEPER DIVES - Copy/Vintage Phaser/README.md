# Vintage Phaser - Small Stone Emulation

```
██╗   ██╗██╗███╗   ██╗████████╗ █████╗  ██████╗ ███████╗    ██████╗ ██╗  ██╗ █████╗ ███████╗███████╗██████╗ 
██║   ██║██║████╗  ██║╚══██╔══╝██╔══██╗██╔════╝ ██╔════╝    ██╔══██╗██║  ██║██╔══██╗██╔════╝██╔════╝██╔══██╗
██║   ██║██║██╔██╗ ██║   ██║   ███████║██║  ███╗█████╗      ██████╔╝███████║███████║███████╗█████╗  ██████╔╝
╚██╗ ██╔╝██║██║╚██╗██║   ██║   ██╔══██║██║   ██║██╔══╝      ██╔═══╝ ██╔══██║██╔══██║╚════██║██╔══╝  ██╔══██╗
 ╚████╔╝ ██║██║ ╚████║   ██║   ██║  ██║╚██████╔╝███████╗    ██║     ██║  ██║██║  ██║███████║███████╗██║  ██║
  ╚═══╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Analog Phaser Emulation
**Category:** Effect / Modulation / Vintage
**Official Manual:** [Image-Line Vintage Phaser Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Vintage%20Phaser.htm)

---

## 🎯 What is Vintage Phaser?

Vintage Phaser is a meticulous emulation of the classic **Electro-Harmonix Small Stone™** phaser (specifically the Jean-Michel Jarre favorite). It captures the deep, swooshing, and organic character of 70s phase shifting. Unlike the standard "Fruity Phaser," this model includes a built-in Delay line, advanced LFO tension controls, and a specific "Color" mode that mimics the feedback intensity of the original hardware.

**Key Capabilities:**
- **Small Stone Emulation:** Recreation of the 70s analog circuit.
- **Dual LFO System:** Separate LFOs for L/R channels with phase offset.
- **Color Knob:** Feedback/Resonance control (replacing the "Color" switch of the original).
- **Integrated Delay:** Add echo to the phased signal.
- **Frequency Range:** Min/Max sweep limits.
- **Tension Control:** Change the LFO shape from Triangle to Sine or custom curves.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **small-stone-history.md**
3. Create **parameter-cheat-sheet.md**
4. Load the "Oxygene" preset (if available) or set Speed to slow and Color to 50% on a String Pad.

### For Sound Designers:
1. Study **jarre-string-sounds.md**
2. Review **creating-barberpole-phasers.md** (Using LFO tension)
3. Learn **stereo-offset-tricks.md**

### For Guitarists:
1. Study **funk-guitar-phase.md**
2. Review **tame-impala-style-swirls.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Speed:** LFO Rate.
  - **Min/Max:** Frequency sweep range.
  - **Color:** Feedback intensity.
  - **L/R Phase:** Stereo offset.
  - **Delay Section:** Time, Feedback, Mix.

- [ ] **small-stone-vs-script-phaser.md**
  - **Vintage:** Organic, coloring, noisy (good way).
  - **Fruity:** Digital, clean, precise.

#### 02-Data/parameters/
- [ ] **vintage-phaser-params.json**
  ```json
  {
    "plugin_name": "Vintage Phaser",
    "category": "Modulation",
    "emulation": "EHX Small Stone",
    "features": ["Color Feedback", "Dual LFO", "Delay"]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **classic-70s-strings.md**
  - Solina/String machine source.
  - Slow Speed (0.1 - 0.5Hz).
  - Color at 75%.
  - Wide frequency range.

- [ ] **funky-wah-phase.md**
  - Fast Speed.
  - Narrow frequency range (Mid-focused).
  - Low Color.

- [ ] **deep-space-texture.md**
  - Using the internal Delay.
  - High Feedback on both Phaser and Delay.
  - Slow movement.

#### 03-Workflows/by-context/
- [ ] **psychedelic-rock-drums.md**
- [ ] **rhodes-movement.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **lfo-tension-shapes.md**
  - How changing the LFO shape from Linear to Logarithmic changes the "feel" of the sweep.

---

## 🔬 Research Framework

### Phase 1: The Sweep (Week 1)
**Goal:** Analog Movement

**Tasks:**
1. Put Vintage Phaser on White Noise
2. Adjust Min and Max freq to hear the sweep limits
3. Crank "Color" to hear the resonance whistle
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does the "Stereo" knob affect the LFOs? (Offsets the L vs R cycle).
- Can I sync the speed to BPM? (Yes, "Tempo" switch).

### Phase 2: Hybrid FX (Week 2)
**Goal:** Space

**Tasks:**
1. Activate the Delay section
2. Create a "dub" effect using Phase + Delay
3. Create deep-space-texture.md

---

## 📊 Plugin Specifications to Document

### Engine
- LFO Shapes (Variable Tension)
- Delay Time (ms/beats)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it clipping? (High Color feedback can be loud).
2. What is the difference between "Color" here and "Feedback" in other phasers? (Same concept, specific analog coloration curve).

---

## 🔗 Cross-Reference with Other Plugins

Vintage Phaser is often used with:
- **Vintage Chorus** (The companion)
- **Fruity Phaser** (The digital alternative)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Vintage Phaser/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── small-stone-history.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── vintage-phaser-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── classic-70s-strings.md
│   │   ├── funky-wah-phase.md
│   │   └── deep-space-texture.md
│
└── 04-Reference/
    └── lfo-tension-shapes.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Recreate the "Oxygene" string sound
- [ ] Explain the benefit of the "Tension" knob for LFO shaping
- [ ] Use the internal Delay to create a rhythmic phased texture

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection