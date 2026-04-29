# Fruity DX10 - FM Synthesis Simplified

```
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██████╗ ██╗  ██╗ ██╗ ██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗╚██╗██╔╝███║██╔═══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║  ██║ ╚███╔╝ ╚██║██║   ██║
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║  ██║ ██╔██╗  ██║██║   ██║
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██████╔╝██╔╝ ██╗ ██║╚██████╔╝
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═════╝ ╚═╝  ╚═╝ ╚═╝ ╚═════╝ 
```

**Plugin Type:** FM (Frequency Modulation) Synthesizer
**Category:** Generator / FM / Low-CPU
**Official Manual:** [Image-Line Fruity DX10 Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20DX10.htm)

---

## 🎯 What is Fruity DX10?

Fruity DX10 is an 8-voice polyphonic FM synthesizer that provides the iconic sounds of the mid-80s (think Yamaha DX7) with a much simpler interface. It is highly optimized for low CPU usage and low aliasing. It excels at bell-like tones, metallic basses, and "electric" pianos, offering an approachable entry point into the world of frequency modulation without the complexity of Sytrus.

**Key Capabilities:**
- **Approachable FM:** 2-operator style modulation with simple "Coarse/Fine" controls.
- **Wave Brightness:** Master control for overall harmonic richness.
- **Vibrato LFO:** Built-in pitch modulation for organic movement.
- **Low Aliasing:** High-quality rendering even at extreme modulation.
- **Velocity Sensitivity:** Dynamic control over modulation depth.
- **Thru-Mode:** Allows the modulator wave to be heard directly in the output.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **fm-synthesis-basics.md** (What is a Modulator vs Carrier?)
3. Create **parameter-cheat-sheet.md**
4. Load the "Default" patch and increase the "Amplitude Init" in the Modulation section to hear the FM bite.

### For Sound Designers:
1. Study **creating-fm-bells.md**
2. Review **metallic-bass-synthesis.md**
3. Learn **thru-mode-layering.md**

### For 80s Enthusiasts:
1. Study **yamaha-dx7-style-keys.md**
2. Review **retro-brass-patches.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Wave:** Brightness/Harmonic content.
  - **COARSE/FINE:** Tuning the modulator (The "Bite").
  - **INIT/TIME:** Modulation envelope.
  - **ATT/DEC/REL:** Amplitude ADSR.
  - **LFO RATE/VIB:** Vibrato controls.

- [ ] **modulator-parameters-decoded.md**
  - Understanding the "Modulation" section vs the "Amplitude" section.

#### 02-Data/parameters/
- [ ] **dx10-params.json**
  ```json
  {
    "plugin_name": "Fruity DX10",
    "polyphony": 8,
    "synthesis": "FM",
    "features": ["Low aliasing", "Low CPU", "Thru mode"]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-fm-bells.md**
  - Setting Coarse Tune to high values (4.00, 7.00).
  - Short Modulation Time.
  - Medium Wave Brightness.

- [ ] **plucky-acoustic-fm-bass.md**
  - Low Coarse Tune (0.50 or 1.00).
  - High Modulation Velocity Sensitivity.
  - Short Amplitude Decay.

- [ ] **lush-fm-electric-piano.md**
  - Moderate Wave Brightness.
  - Using the LFO for subtle vibrato.
  - Long Amplitude Release.

#### 03-Workflows/by-context/
- [ ] **game-audio-sfx-synthesis.md**
- [ ] **lo-fi-hip-hop-keys.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **thru-mode-applications.md**
  - How the "Thru" knob effectively turns the DX10 into a 2-oscillator additive/FM hybrid.

---

## 🔬 Research Framework

### Phase 1: Harmonic Ratios (Week 1)
**Goal:** Tonal Balance

**Tasks:**
1. Initialize patch
2. Experiment with Coarse Tune (integers vs fractions)
3. Note how the sound changes from "musical" to "metallic"
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- What is the difference between "Init" and "Time" in the modulation section?
- Does the "Wave" knob affect the carrier, modulator, or both?

### Phase 2: Expressive Play (Week 2)
**Goal:** Dynamics

**Tasks:**
1. Link Modulation to Velocity
2. Use the Vibrato LFO to add life to a lead
3. Create yamaha-dx7-style-keys.md

---

## 📊 Plugin Specifications to Document

### Engine
- Polyphony (8 notes)
- Aliasing level (Low)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it so quiet? (Check Amplitude section knobs).
2. How to get a "clean" sine wave? (Modulation Init at 0, Wave at minimum).

### Advanced Usage
1. How to simulate a "filter sweep" using FM? (Automate the Modulation Time or Init knobs).

---

## 🔗 Cross-Reference with Other Plugins

Fruity DX10 is often used with:
- **Sytrus** (The professional FM upgrade)
- **Fruity Delay 3** (Adding 80s space)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Fruity DX10/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── modulator-parameters-decoded.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── dx10-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-fm-bells.md
│   │   └── yamaha-dx7-style-keys.md
│
└── 04-Reference/
    └── thru-mode-applications.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Recreate a classic "Tine" piano sound
- [ ] Explain the function of the "Thru" knob in sound design
- [ ] Use Modulation Velocity to make a patch expressive
- [ ] Demonstrate the difference between integer and non-integer Coarse ratios

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
