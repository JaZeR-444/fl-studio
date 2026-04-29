# FL Keys - Classic Keyboard Rompler

```
███████╗██╗      ██╗  ██╗███████╗██╗   ██╗███████╗
██╔════╝██║      ██║ ██╔╝██╔════╝╚██╗ ██╔╝██╔════╝
█████╗  ██║      █████╔╝ █████╗   ╚████╔╝ ███████╗
██╔══╝  ██║      ██╔═██╗ ██╔══╝    ╚██╔╝  ╚════██║
██║     ███████╗ ██║  ██╗███████╗   ██║   ███████║
╚═╝     ╚══════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝
```

**Plugin Type:** Sample-Based Keyboard (Rompler)
**Category:** Generator / Keys / Utility
**Official Manual:** [Image-Line FL Keys Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/FL%20Keys.htm)

---

## 🎯 What is FL Keys?

FL Keys is a lightweight, sample-based keyboard plugin designed for quick and realistic piano, e-piano, and organ sounds. It features a high-quality multi-sampled library with extremely low CPU and memory overhead. It is the go-to utility for sketching out melodies, providing standard keyboard textures (Grand Piano, Rhodes, Roto Organ) with essential "Realism" controls like key release noise and sustain pedal simulation.

**Key Capabilities:**
- **4 Core Models:** Grand Piano, Rhodes, Roto Organ, and Harpsichord.
- **Realism Controls:** Adjustable Key Release noise and Hammer/Pedal artifacts.
- **Dynamic Response:** Velocity-sensitive samples for expressive playing.
- **Integrated FX:** Built-in Overdrive and simple Tremolo (for Rhodes).
- **Stretching Algorithm:** High-quality interpolation for pitch consistency.
- **Low Resource:** Optimized for performance even in massive projects.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **keys-model-library.md** (The 4 modes)
3. Create **parameter-cheat-sheet.md**
4. Load the "Grand Piano," play a chord, and adjust the "Release" knob to hear the key noise.

### For Composers:
1. Study **creating-authentic-rhodes-patches.md**
2. Review **velocity-curve-calibration.md**
3. Learn **sustain-pedal-behavior.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [x] **parameter-cheat-sheet.md**
- [ ] **keyboard-models-decoded.md**

#### 02-Data/parameters/
- [x] **flkeys-specs.json**

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [x] **vintage-70s-rhodes-setup.md**
- [x] **jazz-piano-realism.md**

---

## 🔬 Research Framework

### Phase 1: Model Textures (Week 1)
**Goal:** The 4 Flavors

**Tasks:**
1. Compare "Grand Piano" vs "Harpsichord"
2. Test the "Release" knob on every model
3. Identify the "sweet spot" for Overdrive on the Organ
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Can I load external samples into FL Keys? (No, it's a fixed library).
- What is the difference between "Decay" and "Release" in this plugin?

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. **Why does the piano sound "thin"?** (Increase the Release noise or add external reverb).
2. **How to stop the "Roto" from spinning?** (Set LFO/Pan depth to zero).

---

## 🔗 Cross-Reference with Other Plugins

FL Keys is often used with:
- **Fruity Reverb 2** (Replacing the internal Environment)
- **DirectWave** (The advanced alternative)

---

## 📦 File Structure Summary

```
FL Keys/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── keyboard-models-decoded.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── flkeys-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── vintage-70s-rhodes-setup.md
│   │   └── jazz-piano-realism.md
│
└── 04-Reference/
    └── piano-sample-interpolation.md
```

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [FL Keys Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/FL%20Keys.htm)
- [FL Keys Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/FL_Keys_tutorials.htm)
- [FL Keys Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fl+keys+tutorial)

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
