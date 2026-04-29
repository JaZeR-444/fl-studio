# Vintage Chorus - JUNO-60 Emulation

```
██╗   ██╗██╗███╗   ██╗████████╗ █████╗  ██████╗ ███████╗     ██████╗██╗  ██╗ ██████╗ ██████╗ ██╗   ██╗███████╗
██║   ██║██║████╗  ██║╚══██╔══╝██╔══██╗██╔════╝ ██╔════╝    ██╔════╝██║  ██║██╔═══██╗██╔══██╗██║   ██║██╔════╝
██║   ██║██║██╔██╗ ██║   ██║   ███████║██║  ███╗█████╗      ██║     ███████║██║   ██║██████╔╝██║   ██║███████╗
╚██╗ ██╔╝██║██║╚██╗██║   ██║   ██╔══██║██║   ██║██╔══╝      ██║     ██╔══██║██║   ██║██╔══██╗██║   ██║╚════██║
 ╚████╔╝ ██║██║ ╚████║   ██║   ██║  ██║╚██████╔╝███████╗    ╚██████╗██║  ██║╚██████╔╝██║  ██║╚██████╔╝███████║
  ╚═══╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝     ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
```

**Plugin Type:** Analog Chorus / BBD Emulation
**Category:** Effect / Modulation / Vintage
**Official Manual:** [Image-Line Vintage Chorus Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Vintage%20Chorus.htm)

---

## 🎯 What is Vintage Chorus?

Vintage Chorus is a meticulous emulation of the legendary **Roland JUNO-60** bucket-brigade delay (BBD) chorus. It recreates the thick, warm, and noisy character of the original hardware. It features the classic "Mode I" (Slow/Deep) and "Mode II" (Fast/Wobbly) switches, as well as the famous "I+II" dual mode. It also expands on the original with variable Mix, Speed, and Delay controls.

**Key Capabilities:**
- **BBD Emulation:** Authentic analog delay line modeling.
- **Classic Modes:** I, II, and I+II.
- **Noise Control:** Add authentic analog hiss.
- **Modern Controls:** Mix, High Pass Filter (HPF), and Stereo Width.
- **LFO Sync:** Sync the chorus rate to tempo (impossible on the hardware).

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **juno-chorus-history.md**
3. Create **parameter-cheat-sheet.md**
4. Put it on a Sawtooth lead and click "Mode I" for instant 80s nostalgia.

### For Synthwave Producers:
1. Study **lush-pad-widening.md**
2. Review **retro-bass-chorus.md** (Using HPF)
3. Learn **noise-layering-for-authenticity.md**

### For Sound Designers:
1. Study **manual-mode-vs-presets.md**
2. Review **extreme-wobble-fx.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Mode Buttons:** I, II, Manual.
  - **Rate/Depth:** Manual LFO controls.
  - **Mix:** Dry/Wet.
  - **Noise:** Analog hiss level.
  - **HPF:** Keeps bass mono/clean.

- [ ] **juno-chorus-history.md**
  - Why this specific chorus is so famous.
  - The "Mode I+II" secret.

#### 02-Data/parameters/
- [ ] **vintage-chorus-params.json**
  ```json
  {
    "plugin_name": "Vintage Chorus",
    "category": "Modulation",
    "emulation": "Roland JUNO-60",
    "modes": ["I", "II", "I+II", "Manual"]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **retro-bass-chorus.md**
  - Mode I.
  - HPF set to 200Hz (Crucial for keeping sub-bass tight).
  - Mix at 50%.

- [ ] **synthwave-pad-wash.md**
  - Mode I+II.
  - High Stereo Width.
  - Noise added for texture.

- [ ] **vibrato-effect.md**
  - Manual Mode.
  - High Rate, High Depth.
  - 100% Wet mix.

#### 03-Workflows/by-context/
- [ ] **electric-piano-warmth.md**
- [ ] **guitar-dream-pop-tone.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **bbd-tech-explained.md**
  - What is a Bucket Brigade Device?
  - Why does it sound darker than digital chorus?

---

## 🔬 Research Framework

### Phase 1: The Modes (Week 1)
**Goal:** Authentic Tones

**Tasks:**
1. Compare Mode I vs Mode II
2. Enable both (I+II)
3. Use Manual mode to find a speed in between
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Does "Noise" scale with the input? (No, it's a constant floor, usually).
- What is the difference between "Vintage Chorus" and "Fruity Chorus"? (Algorithm vs BBD Model).

### Phase 2: Modern Control (Week 2)
**Goal:** Mixing Integration

**Tasks:**
1. Use the HPF to clean up a muddy bass patch
2. Automate the "Mix" knob for a chorus throw
3. Create retro-bass-chorus.md

---

## 📊 Plugin Specifications to Document

### Engine
- Emulation Target (JUNO-60)
- Topology (Dual Delay Line?)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is there hiss? (Turn down the "Noise" slider).
2. Can I sync it to BPM? (Yes, use Manual mode and enable sync).

---

## 🔗 Cross-Reference with Other Plugins

Vintage Chorus is often used with:
- **Kepler** (The synth it belongs to)
- **Fruity Delay 3** (Tape delay)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Vintage Chorus/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── juno-chorus-history.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── vintage-chorus-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── retro-bass-chorus.md
│   │   ├── synthwave-pad-wash.md
│   │   └── vibrato-effect.md
│
└── 04-Reference/
    └── bbd-tech-explained.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a convincing 1984 Synthwave bass patch
- [ ] Explain why the HPF knob is the most important "Modern" addition
- [ ] Demonstrate the difference between Mode I and Mode II

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection