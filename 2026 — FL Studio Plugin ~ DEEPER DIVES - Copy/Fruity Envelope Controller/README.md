# Fruity Envelope Controller - Articulator Generator

```
███████╗███╗   ██╗██╗   ██╗███████╗██╗      ██████╗ ██████╗ ███████╗    ██████╗ ██████╗ ███╗   ██╗████████╗██████╗  ██████╗ ██╗     ██╗     ███████╗██████╗ 
██╔════╝████╗  ██║██║   ██║██╔════╝██║     ██╔═══██╗██╔══██╗██╔════╝    ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔═══██╗██║     ██║     ██╔════╝██╔══██╗
█████╗  ██╔██╗ ██║██║   ██║█████╗  ██║     ██║   ██║██████╔╝█████╗      ██║     ██║   ██║██╔██╗ ██║   ██║   ██████╔╝██║   ██║██║     ██║     █████╗  ██████╔╝
██╔══╝  ██║╚██╗██║╚██╗ ██╔╝██╔══╝  ██║     ██║   ██║██╔═══╝ ██╔══╝      ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██╗██║   ██║██║     ██║     ██╔══╝  ██╔══██╗
███████╗██║ ╚████║ ╚████╔╝ ███████╗███████╗╚██████╔╝██║     ███████╗    ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╔╝███████╗███████╗███████╗██║  ██║
╚══════╝╚═╝  ╚═══╝  ╚═══╝  ╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚══════╝     ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Internal Controller / Envelope & LFO Generator
**Category:** Controller / Automation
**Official Manual:** [Image-Line Fruity Envelope Controller Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Envelope%20Controller.htm)

---

## 🎯 What is Fruity Envelope Controller?

Fruity Envelope Controller is a powerful internal automation source. It does not produce sound itself; instead, it generates automation data (envelopes and LFOs) that can be linked to any knob or slider in FL Studio. It features **8 independent Articulators**, each capable of complex multi-point envelopes triggered by MIDI notes. It is the ultimate tool for creating custom "sidechain" curves, rhythmic gates, and key-synced modulation.

**Key Capabilities:**
- **8 Articulators:** Multiple independent automation streams from one plugin.
- **MIDI Triggered:** Start envelopes exactly when a note is played in the Piano Roll.
- **Multimode Sources:** Envelopes, LFOs, Key Mapping, Velocity Mapping, and Randomization.
- **Envelope Scaling:** Master knobs for Attack, Decay, Sustain, and Release scaling.
- **Keyboard Ranges:** Assign different articulators to specific parts of the keyboard.
- **Tempo Sync:** Align envelopes and LFOs to the project grid.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **articulator-logic-101.md** (8 slots system)
3. Create **parameter-cheat-sheet.md**
4. Link Articulator 1 to a Filter Cutoff, then draw a "Pluck" shape in the envelope editor.

### For Power Users:
1. Study **velocity-to-any-target.md** (Linking velocity to effect parameters)
2. Review **key-tracked-fx-modulation.md**
3. Learn **randomized-automation-per-note.md**

### For Patcher Designers:
1. Study **patcher-macro-envelopes.md**
2. Review **building-custom-synth-architecture.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Articulators (1-8):** Selection tabs.
  - **Envelope Editor:** Graph area.
  - **Modulation Tabs:** Env, LFO, Map, Vel, X, Y, Rand.
  - **Master Scaling:** ATT, DEC, SUS, REL knobs.

- [ ] **how-to-link-articulators.md**
  - Step 1: Link target to "Envelope Controller -> Articulator 1".
  - Step 2: Ensure MIDI notes are triggering the controller.

#### 02-Data/parameters/
- [ ] **envelope-controller-specs.json**
  ```json
  {
    "plugin_name": "Fruity Envelope Controller",
    "articulators": 8,
    "sources_per_articulator": 7,
    "output": "Automation Data"
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **perfect-sidechain-ducking.md**
  - Drawing a "Scoop" curve in the Env tab.
  - Triggering with short "Ghost Notes."
  - Advantage: Zero-latency, precise shape control.

- [ ] **key-tracked-reverb-tail.md**
  - Using the "Map" tab.
  - Linking to Reverb Decay.
  - Higher notes = Shorter reverb.

- [ ] **humanized-per-note-filter.md**
  - Using the "Rand" (Random) tab.
  - Adding a small amount of random offset to each note's cutoff.

#### 03-Workflows/by-context/
- [ ] **trance-gate-sequencing.md**
- [ ] **fm-modulation-per-note.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **articulator-summing-logic.md**
  - How Env + LFO + Vel are combined into the final output value.

---

## 🔬 Research Framework

### Phase 1: The Articulator (Week 1)
**Goal:** Basic Modulation

**Tasks:**
1. Link Articulator 1 to a Vol fader
2. Draw a basic ADSR shape
3. Verify it follows MIDI notes
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I make the envelope loop? (L mode in the editor).
- Can I copy Articulator 1 to Articulator 2?

### Phase 2: Mapping Sources (Week 2)
**Goal:** Expressive Control

**Tasks:**
1. Use the "Vel" tab to make a distortion drive reactive to touch
2. Use the "Map" tab to create a split-point for an effect
3. Create perfect-sidechain-ducking.md

---

## 📊 Plugin Specifications to Document

### Engine
- Note Polyphony (How many envelopes can run at once?)
- Smoothing behavior

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why isn't the envelope playing? (Make sure you have MIDI notes triggering the specific Articulator's keyboard range).
2. How to change the range of the automation? (Use the "Level" knobs in the controller or formulas in the link window).

---

## 🔗 Cross-Reference with Other Plugins

Fruity Envelope Controller is often used with:
- **Patcher** (Adding envelopes to external VSTs)
- **Fruity Peak Controller** (The LFO/Peak alternative)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Fruity Envelope Controller/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── how-to-link-articulators.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── envelope-controller-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── perfect-sidechain-ducking.md
│   │   └── key-tracked-reverb-tail.md
│
└── 04-Reference/
    └── articulator-summing-logic.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a production-grade sidechain curve that triggers via MIDI
- [ ] Use one instance to control 8 different parameters independently
- [ ] Demonstrate "Keyboard Mapping" to change filter resonance based on pitch
- [ ] Explain the master ATT/DEC/SUS/REL knobs' scaling math

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
