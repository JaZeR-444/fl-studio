# Transistor Bass - Acid Bassline Synthesizer

```
████████╗██████╗  █████╗ ███╗   ██╗███████╗██╗███████╗████████╗ ██████╗ ██████╗ 
╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██║██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗
   ██║   ██████╔╝███████║██╔██╗ ██║███████╗██║███████╗   ██║   ██║   ██║██████╔╝
   ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██║╚════██║   ██║   ██║   ██║██╔══██╗
   ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║███████║   ██║   ╚██████╔╝██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝

██████╗  █████╗ ███████╗███████╗
██╔══██╗██╔══██╗██╔════╝██╔════╝
██████╔╝███████║███████╗███████╗
██╔══██╗██╔══██║╚════██║╚════██║
██████╔╝██║  ██║███████║███████║
╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
```

**Plugin Type:** Monophonic Bass Synth / TB-303 Emulation
**Category:** Generator / Acid / Vintage
**Official Manual:** [Image-Line Transistor Bass Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Transistor%20Bass.htm)

---

## 🎯 What is Transistor Bass?

Transistor Bass is a dedicated subtractive synthesizer designed to meticulously emulate the legendary **Roland TB-303™** Bassline. It captures the iconic "Acid" sound with its squelchy resonant filter, slide/accent behavior, and built-in distortion. Unlike the original hardware, it features modern enhancements like waveform blending (Square to Saw), an internal sequencer with pattern triggering, and high-quality integrated effects.

**Key Capabilities:**
- **303 Emulation:** Authentic Cutoff, Resonance, and Envelope Modulation.
- **Waveform Blending:** Smoothly morph between Square and Sawtooth waves.
- **Integrated Sequencer:** 128 programs containing both synth settings and patterns.
- **Rat-Style Distortion:** Built-in overdrive based on the classic guitar pedal.
- **Accent & Slide:** Authentic velocity-based accents (>100) and note overlaps.
- **High-Pass Filter:** Adjustable low-end roll-off (fixed on the original).
- **LFO Modulation:** Built-in LFO for Pulse Width and other parameters.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **tb-303-classic-controls.md**
3. Create **parameter-cheat-sheet.md**
4. Load a factory pattern, crank the Resonance, and sweep the Cutoff.

### For Acid House Producers:
1. Study **sequencer-pattern-triggering.md**
2. Review **creating-squelchy-acid-leads.md**
3. Learn **accent-and-slide-programming.md**

### For Sound Designers:
1. Study **distortion-pedal-settings.md**
2. Review **waveform-morphing-textures.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Cutoff:** Filter frequency.
  - **Resonance:** Peak feedback (The squelch).
  - **Env Mod:** Amount of envelope affecting cutoff.
  - **Decay:** Speed of filter closure.
  - **Accent:** Intensity of accented notes.
  - **Distortion:** Drive and Tone.

- [ ] **sequencer-interface-guide.md**
  - Pattern slots.
  - Note, Slide, and Accent buttons.

#### 02-Data/parameters/
- [ ] **transistor-bass-specs.json**
  ```json
  {
    "plugin_name": "Transistor Bass",
    "emulation": "TB-303",
    "waveforms": ["Saw", "Square", "Morph"],
    "accent_velocity_threshold": 100
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **authentic-acid-sequence.md**
  - Setting up a pattern in the internal sequencer.
  - Adding "Slides" between notes.
  - Using velocity > 100 for "Accents."
  - Dialing in the "Rat" distortion.

- [ ] **modern-hybrid-acid.md**
  - Blending 50% Saw and 50% Square.
  - Using the HP filter to clear sub-space.
  - Automating the LFO on Pulse Width.

- [ ] **piano-roll-control-setup.md**
  - Disabling the internal sequencer.
  - How to achieve slides and accents in the FL Piano Roll.

#### 03-Workflows/by-context/
- [ ] **techno-bass-rumble-source.md**
- [ ] **psytrance-squelch-stabs.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **tb-303-circuit-oddities.md**
  - Why the original filter had a "non-linear" slope.
  - How Transistor Bass emulates the power supply sag.

---

## 🔬 Research Framework

### Phase 1: The Squelch (Week 1)
**Goal:** Pure Acid

**Tasks:**
1. Initialize a patch
2. Experiment with "Resonance" and "Env Mod" interaction
3. Test the "Saw" vs "Square" character
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does the "HP" knob affect the sub-bass?
- Can I use an external distortion plugin instead?

### Phase 2: The Grid (Week 2)
**Goal:** Pattern Flow

**Tasks:**
1. Program a 1 bar loop
2. Add accents and slides
3. Trigger different patterns using MIDI notes
4. Create sequencer-interface-guide.md

---

## 📊 Plugin Specifications to Document

### Engine
- Polyphony (Monophonic)
- Number of Patterns (128)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why isn't it sliding? (Make sure notes overlap in the sequencer or Piano Roll).
2. How to get the "screaming" tone? (High Resonance + High Distortion Drive).

---

## 🔗 Cross-Reference with Other Plugins

Transistor Bass is often used with:
- **Fruity Delay 3** (Ping-pong acid)
- **Distructor** (Alternative distortion flavors)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Transistor Bass/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── sequencer-interface-guide.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── transistor-bass-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── authentic-acid-sequence.md
│   │   └── modern-hybrid-acid.md
│
└── 04-Reference/
    └── tb-303-circuit-oddities.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Program a classic acid bassline with correct slide/accent behavior
- [ ] Explain the benefit of waveform blending vs the original hardware
- [ ] Use the internal distortion to create a "screaming" resonant lead
- [ ] Successfully trigger pattern changes via MIDI notes in the Piano Roll

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection