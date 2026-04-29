# Hardcore - Virtual Guitar Effects Suite

```
██╗  ██╗ █████╗ ██████╗ ██████╗  ██████╗ ██████╗ ██████╗ ███████╗
██║  ██║██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔═══██╗██╔══██╗██╔════╝
███████║███████║██████╔╝██║  ██║██║     ██║   ██║██████╔╝█████╗  
██╔══██║██╔══██║██╔══██╗██║  ██║██║     ██║   ██║██╔══██╗██╔══╝  
██║  ██║██║  ██║██║  ██║██████╔╝╚██████╗╚██████╔╝██║  ██║███████╗
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
```

**Plugin Type:** Amp Simulator / Multi-FX Rack
**Category:** Effect / Guitar / Sound Design
**Official Manual:** [Image-Line Hardcore Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Hardcore.htm)

---

## 🎯 What is Hardcore?

Hardcore is a comprehensive guitar effects suite. It features a virtual rack of **11 stomp-box effects**, an **8-band Graphic EQ**, and **5 Cabinet simulations**. While designed for guitarists, its aggressive distortion and lush modulation modules make it a secret weapon for sound-designing synths, drums, and vocals.

**Key Capabilities:**
- **11 Stompboxes:** Distortion, Chorus, Flanger, Phaser, Reverb, Delay, Noise Gate, EQ, Compressor, Modulator, and Wah.
- **8-Band Master EQ:** Final tonal shaping for the entire rack.
- **Cabinet Simulation:** 5 classic speaker models to add "air" and resonance.
- **Flexible Signal Chain:** Drag and drop pedals to reorder the flow.
- **Standalone Mode:** Can be used outside FL Studio for live performance.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **stompbox-library-reference.md**
3. Create **parameter-cheat-sheet.md**
4. Load the "Clean" preset and then double-click the "Distortion" pedal to see it turn on.

### For Guitarists:
1. Study **metal-tone-sculpting.md**
2. Review **choosing-the-right-cabinet.md**
3. Learn **noise-gate-calibration.md**

### For Sound Designers:
1. Study **industrial-vocal-chains.md**
2. Review **synth-fattening-workflow.md**
3. Learn **creative-feedback-loops.md** (Delay + Distortion)

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **The Pedals:** Quick summary of all 11 boxes.
  - **Master EQ:** Sliders and values.
  - **Cabinet Selector:** 1-5 models.

- [ ] **stompbox-library-reference.md**
  - Detailed look at each pedal's controls.
  - **Wah:** Auto-wah vs Manual.
  - **Modulator:** AM/FM/RM textures? (Research needed).

#### 02-Data/parameters/
- [ ] **hardcore-params.json**
  ```json
  {
    "plugin_name": "Hardcore",
    "category": "Guitar Rack",
    "pedals": ["Distortion", "Chorus", "Flanger", "Phaser", "Reverb", "Delay", "Noise Gate", "EQ", "Compressor", "Modulator", "Wah"]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **high-gain-metal-preset.md**
  - Noise Gate -> Distortion -> EQ -> Cabinet 4.
  - Taming the 4kHz "fizz" with the Graphic EQ.

- [ ] **shoegaze-wall-of-sound.md**
  - Reverb *before* Distortion.
  - Adding Chorus and Flanger for movement.

- [ ] **psychedelic-wah-textures.md**
  - Using the Modulator pedal with the Wah for strange filter sweeps.

#### 03-Workflows/by-context/
- [ ] **bass-guitar-saturation.md**
- [ ] **drum-destruction-rack.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **cabinet-frequency-response.md**
  - Visualizing the 5 cabinet curves.
  - Which one is "Bright" vs "Dark/Bass-heavy."

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Rack Management

**Tasks:**
1. Enable/Disable every pedal
2. Try reordering the rack (if supported in this version)
3. Adjust the Master Graphic EQ
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How many effects can be active at once? (All 11).
- Does the "Noise Gate" work well on synth background hiss?

### Phase 2: Tone Crafting (Week 2)
**Goal:** Realism

**Tasks:**
1. Compare "Cabinet Off" vs "Cabinet On" (Hear the "fizz" vanish)
2. Use the Wah pedal with an automation clip
3. Create choosing-the-right-cabinet.md

---

## 📊 Plugin Specifications to Document

### Engine
- Number of Effects (11)
- Number of Cabinets (5)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it so noisy? (Guitar rigs are inherently noisy; use the Noise Gate pedal).
2. Can I use this on vocals? (Yes, it's great for lo-fi or aggressive "megaphone" effects).

### Advanced Usage
1. How to achieve a "Stereo" guitar sound using one instance? (Chorus/Flanger pedals).

---

## 🔗 Cross-Reference with Other Plugins

Hardcore is often used with:
- **Fruity Convolver** (Using custom Cabinet IRs instead of built-in ones)
- **Fruity Parametric EQ 2** (Surgical cleanup)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Hardcore/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── stompbox-library-reference.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── hardcore-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── high-gain-metal-preset.md
│   │   ├── shoegaze-wall-of-sound.md
│   │   └── psychedelic-wah-textures.md
│
└── 04-Reference/
    └── cabinet-frequency-response.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Build a "Radio" vocal effect using only Hardcore
- [ ] Create a heavy metal tone that sits in a mix without mud
- [ ] Explain the difference between the 5 cabinet models
- [ ] Order the stompboxes for maximum harmonic richness

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection