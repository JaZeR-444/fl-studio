# Soundgoodizer - Maximus-Powered Exciter

```
███████╗ ██████╗ ██╗   ██╗███╗   ██╗██████╗  ██████╗  ██████╗  ██████╗ ██████╗ ██╗███████╗███████╗██████╗ 
██╔════╝██╔═══██╗██║   ██║████╗  ██║██╔══██╗██╔════╝ ██╔═══██╗██╔═══██╗██╔══██╗██║╚══███╔╝██╔════╝██╔══██╗
███████╗██║   ██║██║   ██║██╔██╗ ██║██║  ██║██║  ███╗██║   ██║██║   ██║██║  ██║██║  ███╔╝ █████╗  ██████╔╝
╚════██║██║   ██║██║   ██║██║╚██╗██║██║  ██║██║   ██║██║   ██║██║   ██║██║  ██║██║ ███╔╝  ██╔══╝  ██╔══██╗
███████║╚██████╔╝╚██████╔╝██║ ╚████║██████╔╝╚██████╔╝╚██████╔╝╚██████╔╝██████╔╝██║███████╗███████╗██║  ██║
╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝  ╚═════╝  ╚═════╝  ╚═════╝ ╚═════╝ ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Stereo Maximizer / Multi-band Exciter
**Category:** Effect / Mixing / "Instant Polished"
**Official Manual:** [Image-Line Soundgoodizer Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Soundgoodizer.htm)

---

## 🎯 What is Soundgoodizer?

Soundgoodizer is FL Studio's legendary "instant polish" plugin. It is powered by the **Maximus** multi-band dynamics engine, featuring four specific presets (A, B, C, D) that apply a combination of compression, limiting, and equalization. With its simple one-knob interface, it allows users to add warmth, punch, or clarity to a sound instantly without needing to understand complex dynamics.

**Key Capabilities:**
- **Maximus Engine:** Uses professional-grade multi-band processing under the hood.
- **Four Character Modes:**
    - **A:** Warm and full (Vocals/Pads).
    - **B:** Bright and punchy (Drums/Leads).
    - **C:** Balanced refinement (Mix Bus).
    - **D:** Aggressive and bold (Bass/Distortion).
- **Single Knob Control:** Blends the processing intensity from 0% to 100%.
- **CPU Efficient:** Negligible processing load.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **presets-a-b-c-d-decoded.md**
3. Create **parameter-cheat-sheet.md**
4. Put it on a Master bus, select Mode C, and turn the knob to 25%.

### For Mix Engineers:
1. Study **parallel-soundgoodizing.md** (Using the Mix knob)
2. Review **taming-the-high-end-of-mode-b.md**
3. Learn **gain-staging-into-the-goodizer.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [x] **parameter-cheat-sheet.md**
- [x] **presets-a-b-c-d-decoded.md**

#### 02-Data/parameters/
- [x] **soundgoodizer-specs.json**

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [x] **instant-drum-bus-punch.md**
- [x] **warming-up-vocals.md** (Self-Correction: Integrated into punch/character docs)
- [x] **mix-glue-technique.md**

#### 03-Workflows/by-context/
- [ ] **trap-808-saturation-chain.md**
- [ ] **lo-fi-shimmer-refinement.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [x] **soundgoodizer-vs-maximus.md**

---

## 🔬 Research Framework

### Phase 1: Mode Comparison (Week 1)
**Goal:** Sonic Profiles

**Tasks:**
1. Load a full-frequency loop (e.g., a commercial track)
2. Solo each mode (A, B, C, D)
3. Use a spectrum analyzer to see the "hidden" EQ curves of each
4. Create presets-a-b-c-d-decoded.md

**Key Questions to Answer:**
- Which mode boosts the bass the most?
- Does the knob affect the Ratio or the Mix? (Actually, it's usually a combination - research Maximus "Master" interaction).

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is my sound getting distorted? (You are hitting the input too hard; Soundgoodizer has a fixed internal threshold).
2. Is it bad to put 10 Soundgoodizers on a track? (Yes, it's a meme, but technically it adds massive phase shift and over-compression).

---

## 🔗 Cross-Reference with Other Plugins

Soundgoodizer is often used with:
- **Maximus** (The "Expert" version)
- **Fruity Soft Clipper** (Complementary peak control)

---

## 📦 File Structure Summary

```
Soundgoodizer/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── presets-a-b-c-d-decoded.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── soundgoodizer-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── instant-drum-bus-punch.md
│   │   └── mix-glue-technique.md
│
└── 04-Reference/
    └── soundgoodizer-vs-maximus.md
```

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
