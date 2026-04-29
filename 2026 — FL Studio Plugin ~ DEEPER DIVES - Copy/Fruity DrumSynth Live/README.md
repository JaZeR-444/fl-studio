# Fruity DrumSynth Live - Hybrid Drum Synthesis

```
██████╗ ██████╗ ██╗   ██╗███╗   ███╗███████╗██╗   ██╗███╗   ██╗████████╗██╗  ██╗
██╔══██╗██╔══██╗██║   ██║████╗ ████║██╔════╝╚██╗ ██╔╝████╗  ██║╚══██╔══╝██║  ██║
██║  ██║██████╔╝██║   ██║██╔████╔██║███████╗ ╚████╔╝ ██╔██╗ ██║   ██║   ███████║
██║  ██║██╔══██╗██║   ██║██║╚██╔╝██║╚════██║  ╚██╔╝  ██║╚██╗██║   ██║   ██╔══██║
██████╔╝██║  ██║╚██████╔╝██║ ╚═╝ ██║███████║   ██║   ██║ ╚████║   ██║   ██║  ██║
╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝

██╗     ██╗██╗   ██╗███████╗
██║     ██║██║   ██║██╔════╝
██║     ██║██║   ██║█████╗  
██║     ██║╚██╗ ██╔╝██╔══╝  
███████╗██║ ╚████╔╝ ███████╗
╚══════╝╚═╝  ╚═══╝  ╚══════╝
```

**Plugin Type:** Percussion Synthesizer
**Category:** Generator / Drum / Synthesis
**Official Manual:** [Image-Line Fruity DrumSynth Live Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20DrumSynth%20Live.htm)

---

## 🎯 What is Fruity DrumSynth Live?

Fruity DrumSynth Live is a versatile virtual drum machine plugin that generates drum sounds through synthesis rather than samples. It features **120 programmable drum patches** mapped across the keyboard. Its unique dual-oscillator architecture (Noise + Swept Sine) allows for "unlimited" drum design, ranging from classic 808-style kicks to realistic snares, hi-hats, and metallic cymbals.

**Key Capabilities:**
- **Dual Noise/Osc Engines:** Specialized oscillators for "thump" and "sizzle."
- **120 Patch Slots:** Assign custom drum sounds to every MIDI key (C0-B9).
- **Morphing Bend-Wheel:** Seamlessly morph between two different drum patches.
- **Envelope Retriggering:** Instantly create "claps" and multi-hit effects.
- **Tone Filtering:** Integrated Lowpass/Highpass per patch.
- **Velocity Mapping:** Link note intensity to any synthesis property.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **drum-patch-architecture.md** (Noise vs Sine)
3. Create **parameter-cheat-sheet.md**
4. Load a preset kit and move the "Morph To" wheel while playing a beat.

### For Sound Designers:
1. Study **creating-synthetic-snares.md**
2. Review **clap-design-retriggers.md**
3. Learn **velocity-sensitive-expression.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Osc 1:** Sine/Noise sweep (Kicks/Toms).
  - **Osc 2:** Envelope-focused noise (Snares/Hats).
  - **Retrigger (Count/Rate):** Clap/Roll generator.
  - **Morph To:** Crossfade target.
  - **Click:** Phase offset/transient.

- [ ] **keyboard-patch-mapping.md**
  - How patches are organized across the notes.

#### 02-Data/parameters/
- [ ] **drumsynth-live-specs.json**
  ```json
  {
    "plugin_name": "Fruity DrumSynth Live",
    "patches": 120,
    "synthesis": ["Swept Sine", "Noise"],
    "retriggers": true
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **perfect-clap-synthesis.md**
  - Setting Oscillator 2 to Noise.
  - Using "Count" at 3 or 4.
  - Adjusting "Rate" for the classic offset clap.

- [ ] **dynamic-kick-morphing.md**
  - Patch 1: Clean sub kick.
  - Patch 2: Distorted industrial kick.
  - Automating the Morph wheel for builds.

- [ ] **hi-hat-tone-shaping.md**
  - Using the Tone knob (HP mode) to clean up highs.
  - Adjusting decay for "Open" vs "Closed" hats.

#### 03-Workflows/by-context/
- [ ] **low-cpu-drum-layering.md**
- [ ] **retro-techno-drum-design.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **envelope-shaping-logic.md**
  - Explaining the Logarithmic vs Linear envelope modes.

---

## 🔬 Research Framework

### Phase 1: The Oscillators (Week 1)
**Goal:** Synthesis Basics

**Tasks:**
1. Initialize a patch on C5
2. Use Osc 1 to build a basic Kick
3. Use Osc 2 to build a basic Snare
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- What is the difference between Osc 1 and 2 in "Noise" mode?
- Does "Click" add a sample or just phase shift?

### Phase 2: Performance (Week 2)
**Goal:** Movement

**Tasks:**
1. Practice Morphing between two percussion types
2. Link Velocity to the "Tone" filter
3. Create perfect-clap-synthesis.md

---

## 📊 Plugin Specifications to Document

### Engine
- Polyphony (User adjustable)
- Architecture (Dual engine)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is every key sounding different? (Fruity DrumSynth Live uses a per-key patch system).
2. How do I copy a kick from C1 to C#1? (Check the patch copy/paste menu).

---

## 🔗 Cross-Reference with Other Plugins

Fruity DrumSynth Live is often used with:
- **FPC** (Layering synthesized drums with samples)
- **Fruit Kick** (Alternative sub-kick source)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Fruity DrumSynth Live/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── keyboard-patch-mapping.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── drumsynth-live-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── perfect-clap-synthesis.md
│   │   └── dynamic-kick-morphing.md
│
└── 04-Reference/
    └── envelope-shaping-logic.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Synthesize a complete 808-style kit (Kick, Snare, Clap, Hats) using no samples
- [ ] Explain the role of the Morph wheel in a live performance context
- [ ] Demonstrate effective use of the Retrigger section for claps
- [ ] Map velocity to create a dynamic, expressive hi-hat part

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
