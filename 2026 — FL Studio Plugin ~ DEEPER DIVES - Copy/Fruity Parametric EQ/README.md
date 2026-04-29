# Fruity Parametric EQ - The Classic 7-Band

```
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██████╗  █████╗ ██████╗  █████╗ ███╗   ███╗███████╗████████╗██████╗ ██╗ ██████╗     ███████╗██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗██╔══██╗██╔══██╗██╔══██╗████╗ ████║██╔════╝╚══██╔══╝██╔══██╗██║██╔════╝     ██╔════╝██╔══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██████╔╝███████║██████╔╝███████║██╔██╗ ██║█████╗     ██║   ██████╔╝██║██║          █████╗  ██║  ██║
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██╔═══╝ ██╔══██║██╔══██╗██╔══██║██║╚██╗██║██╔══╝     ██║   ██╔══██╗██║██║          ██╔══╝  ██║  ██║
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██║     ██║  ██║██║  ██║██║  ██║██║ ╚████║███████╗   ██║   ██║  ██║██║╚██████╗    ███████╗╚█████╔╝
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝    ╚══════╝ ╚════╝ 
```

**Plugin Type:** Parametric Equalizer
**Category:** Filter / Mixing
**Official Manual:** [Image-Line Fruity Parametric EQ Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Parametric%20EQ.htm)

---

## 🎯 What is Fruity Parametric EQ?

**Important:** This is the original Fruity Parametric EQ (PEQ1), *not* the more famous PEQ2 with the spectral visualizer. 

Fruity Parametric EQ 1 is a CPU-efficient 7-band equalizer. While it lacks the fancy spectrogram of its successor, it provides a classic slider-based interface that many "old-school" engineers prefer for quick, non-visual mixing. It forces you to use your ears rather than your eyes. It offers Peaking, Shelf, LP, HP, Notch, and Bandpass filters per band.

**Key Capabilities:**
- **7 Independent Bands:** Each with Frequency, Gain (Amp), and Bandwidth (Q).
- **Multiple Filter Types:** Peaking, Shelf, LP, HP, BP, Notch.
- **Slider Interface:** Vertical sliders for Gain, knobs for Freq/Q.
- **Low CPU:** Extremely lightweight.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **peq1-vs-peq2.md**
3. Create **parameter-cheat-sheet.md**
4. Boost the highs using Band 7 (Shelf) to hear the "air".

### For Mix Engineers:
1. Study **mixing-with-ears.md** (Benefits of no visualizer)
2. Review **notch-filtering.md**
3. Learn **shelving-techniques.md**

### For Sound Designers:
1. Study **telephone-eq-curve.md**
2. Review **automating-sliders.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Freq:** Center frequency.
  - **Amp (Gain):** Boost/Cut amount (-18dB to +18dB).
  - **Bandwidth (Q):** Width of the curve.
  - **Shape:** Filter type selector.

- [ ] **peq1-vs-peq2.md**
  - **PEQ1:** Sliders, No visualizer, "Old School" workflow.
  - **PEQ2:** Dots on graph, Spectrogram, Modern workflow.

#### 02-Data/parameters/
- [ ] **peq1-params.json**
  ```json
  {
    "plugin_name": "Fruity Parametric EQ",
    "category": "Equalizer",
    "parameters": [
      {
        "name": "Amp",
        "type": "slider",
        "description": "Gain of the band",
        "use_cases": ["boosting bass", "cutting mud"]
      },
      {
        "name": "Shape",
        "type": "selector",
        "options": ["Peaking", "Low Shelf", "High Shelf", "LP", "HP", "BP", "Notch"]
      }
    ]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **mixing-with-ears.md**
  - Why removing visual bias helps decision making.
  - Sweeping the Freq knob to find resonance, then cutting.

- [ ] **telephone-eq-curve.md**
  - Using HP on Band 1 (400Hz).
  - Using LP on Band 7 (4kHz).
  - Boosting Band 4 (1-2kHz).

- [ ] **notch-filtering.md**
  - Selecting "Notch" shape.
  - Using narrow Bandwidth.
  - Removing 60Hz hum or specific ringing.

#### 03-Workflows/by-context/
- [ ] **vocal-cleanup.md**
- [ ] **bass-sculpting.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **filter-curve-characteristics.md**
  - How steep are the filters? (Usually 12dB/oct or 24dB/oct?).
  - Phase response (IIR vs Linear Phase - PEQ1 is likely IIR only).

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Tonal Balance

**Tasks:**
1. Put PEQ1 on a drum loop
2. Boost the Lows (Band 1 Shelf)
3. Boost the Highs (Band 7 Shelf)
4. Cut the Mids (Band 4 Peaking)
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I reset a slider to 0? (Alt+Click or Middle Click).
- Can I change the slope? (Probably fixed per type).

### Phase 2: Corrective EQ (Week 2)
**Goal:** Surgery

**Tasks:**
1. Create a ringing resonance (Sine wave)
2. Use PEQ1 to notch it out
3. Create notch-filtering.md

**Key Questions to Answer:**
- Is it easier to automate sliders than dots? (Often yes, for fader controllers).

---

## 📊 Plugin Specifications to Document

### Engine
- Bands: 7
- Algorithm: IIR (Infinite Impulse Response)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Where is the spectrum? (There isn't one. Use PEQ2 or Wave Candy if you need to see).
2. Why use this over PEQ2? (CPU, Interface preference, preventing "mixing with eyes").

---

## 📝 Documentation Standards

### For Each Workflow:
- **Band:** 1-7
- **Shape:** Type
- **Freq/Amp/Width:** Settings

---

## 🔗 Cross-Reference with Other Plugins

Fruity Parametric EQ is often used with:
- **Fruity Spectroman** (If you *really* need to see)
- **Fruity Compressor** (Post-EQ dynamics)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Fruity Parametric EQ/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── peq1-vs-peq2.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── peq1-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── mixing-with-ears.md
│   │   ├── telephone-eq-curve.md
│   │   └── notch-filtering.md
│
└── 04-Reference/
    └── filter-curve-characteristics.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Mix a vocal track using only PEQ1 (no visualizer)
- [ ] Automate a filter sweep using the sliders
- [ ] Explain the benefit of the "slider" interface vs the "graph" interface

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection