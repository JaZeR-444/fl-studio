# SynthMaker - Visual DSP Programming

```
███████╗██╗   ██╗███╗   ██╗████████╗██╗  ██╗███╗   ███╗ █████╗ ██╗  ██╗███████╗██████╗ 
██╔════╝╚██╗ ██╔╝████╗  ██║╚══██╔══╝██║  ██║████╗ ████║██╔══██╗██║ ██╔╝██╔════╝██╔══██╗
███████╗ ╚████╔╝ ██╔██╗ ██║   ██║   ███████║██╔████╔██║███████║█████╔╝ █████╗  ██████╔╝
╚════██║  ╚██╔╝  ██║╚██╗██║   ██║   ██╔══██║██║╚██╔╝██║██╔══██║██╔═██╗ ██╔══╝  ██╔══██╗
███████║   ██║   ██║ ╚████║   ██║   ██║  ██║██║ ╚═╝ ██║██║  ██║██║  ██╗███████╗██║  ██║
╚══════╝   ╚═╝   ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Visual Programming Environment / DSP
**Category:** Generator / Effect / Developer Tool
**Official Manual:** [Image-Line SynthMaker/FlowStone Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/SynthMaker.htm)

---

## 🎯 What is SynthMaker?

**IMPORTANT: SynthMaker (now known as FlowStone) is a legacy 32-bit Windows-only plugin. It is no longer supported in 64-bit FL Studio versions without bridging, and has been largely superseded by Patcher for modular tasks.**

SynthMaker is a visual programming environment that allows you to build your own synthesizers and effects from scratch without writing code. You connect low-level DSP components (Oscillators, Filters, Envelopes) to create complex instruments that function as native FL Studio plugins. It also supports creating custom dashboards and controllers for hardware gear.

**Key Capabilities:**
- **Plugin Creation:** Design and build custom VST-style instruments and FX.
- **Modular DSP:** Build low-level signal processing chains visually.
- **Custom GUI Design:** Create your own knobs, sliders, and visualizers.
- **External Hardware Support:** Map Wiimotes, Xbox controllers, or custom serial devices.
- **Polyphonic Processing:** Specialized components for handling multi-voice synthesis.
- **Project Sharing:** Share `.osm` or `.fsm` files with other FL Studio users.

---

## 🚀 Quick Start Research Guide

### For Archivists/Legacy Developers:
1. Read **00-START-HERE.md** (create this first)
2. Review **32-bit-bridging-guide.md**
3. Create **parameter-cheat-sheet.md**
4. Load the "Simple Synth" project and observe the code nodes inside the components.

### For Modular Designers:
1. Study **synthmaker-vs-patcher.md** (Why Patcher replaced it)
2. Review **building-custom-dashboards.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **component-library-overview.md**
  - Primitive nodes (Math, Logic).
  - High-level nodes (Oscillators, ADSR).
  - Visual nodes (Knobs, Bitmaps).

- [ ] **visual-coding-basics.md**
  - Connecting "Streams" (Audio) vs "Events" (Control).

#### 02-Data/parameters/
- [ ] **synthmaker-specs.json**
  ```json
  {
    "plugin_name": "SynthMaker / FlowStone",
    "architecture": "32-bit",
    "status": "Legacy",
    "input_support": ["MIDI", "Audio", "HID"]
  }
  ```

---

## 🔬 Research Framework

### Phase 1: The Workspace (Week 1)
**Goal:** Understanding Nodes

**Tasks:**
1. Open a pre-built synth project
2. Navigate into a "Module" to see the sub-circuit
3. Change a knob's graphic
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I add a new oscillator node?
- What is the difference between an `.osm` and a `.dll`? (The FL version doesn't compile standalone DLLs).

---

## 📊 Plugin Specifications to Document

### Engine
- Bit Depth (32-bit only)
- Floating point precision

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why won't it load in FL 64-bit? (It requires the 32-bit bridge; check plugin manager settings).
2. Can I use my Xbox controller? (Yes, via the "Joystick" component).

---

## 🔗 Cross-Reference with Other Plugins

SynthMaker is often compared to:
- **Patcher** (The modern modular equivalent)
- **Fruity Formula Controller** (For math-based logic)

---

## 📦 File Structure Summary

```
SynthMaker/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── component-library-overview.md
│   │   └── visual-coding-basics.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── synthmaker-specs.json
│
└── 04-Reference/
    └── 32-bit-bridging-guide.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Successfully load and play a legacy SynthMaker instrument in a modern FL project
- [ ] Explain the difference between Stream and Event data paths
- [ ] Modify a custom knob graphic within a SynthMaker schematic
- [ ] List 3 use cases where SynthMaker still outperforms Patcher (e.g., specific HID inputs)

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

---

# Research Appendix (Structured)

## Observation Log (Fill During Testing)
| Entry | Control | Setting | Expected Result | Actual Result | Notes |
|---|---|---|---|---|---|
| 01 | | | | | |
| 02 | | | | | |
| 03 | | | | | |
| 04 | | | | | |
| 05 | | | | | |
| 06 | | | | | |
| 07 | | | | | |
| 08 | | | | | |
| 09 | | | | | |
| 10 | | | | | |
| 11 | | | | | |
| 12 | | | | | |
| 13 | | | | | |
| 14 | | | | | |
| 15 | | | | | |
| 16 | | | | | |
| 17 | | | | | |
| 18 | | | | | |
| 19 | | | | | |
| 20 | | | | | |
| 21 | | | | | |
| 22 | | | | | |
| 23 | | | | | |
| 24 | | | | | |
| 25 | | | | | |
| 26 | | | | | |
| 27 | | | | | |
| 28 | | | | | |
| 29 | | | | | |
| 30 | | | | | |
| 31 | | | | | |
| 32 | | | | | |
| 33 | | | | | |
| 34 | | | | | |
| 35 | | | | | |
| 36 | | | | | |
| 37 | | | | | |
| 38 | | | | | |
| 39 | | | | | |
| 40 | | | | | |
| 41 | | | | | |
| 42 | | | | | |
| 43 | | | | | |
| 44 | | | | | |
| 45 | | | | | |
| 46 | | | | | |
| 47 | | | | | |
| 48 | | | | | |
| 49 | | | | | |
| 50 | | | | | |
| 51 | | | | | |
| 52 | | | | | |
| 53 | | | | | |
| 54 | | | | | |
| 55 | | | | | |
| 56 | | | | | |
| 57 | | | | | |
| 58 | | | | | |
| 59 | | | | | |
| 60 | | | | | |

## Parameter Mapping Worksheet
- List each parameter, its audible impact, and interaction dependencies.
- Record the smallest change you can hear and the most dramatic effect.

## Automation Ideas
- Slow sweeps (16 bars) for evolving textures.
- Medium sweeps (4 bars) for musical motion.
- Fast sweeps (1 bar) for rhythmic effects.

## Mix Integration Checklist
- Confirm mono compatibility for wide settings.
- Control low-end with high-pass or low-bypass tools.
- Use light compression for dynamic stability.
- Avoid extreme modulation in dense mixes.

## Troubleshooting Matrix
- Harsh attack -> soften exciter/attack, reduce brightness.
- Thin body -> increase resonance or body emphasis.
- Too wide -> reduce spread, check mono.
- Too static -> add modulation or automation.
- Muddy low end -> reduce low-mid buildup or use high-pass.

## Advanced Research Prompts
- Document how each parameter influences timbre vs dynamics.
- Record preset settings for three reference styles.
- Compare results across low/mid/high registers.
- Capture a before/after screenshot for each major change.


---

# Research Appendix (Structured)

## Observation Log (Fill During Testing)
| Entry | Control | Setting | Expected Result | Actual Result | Notes |
|---|---|---|---|---|---|
| 01 | | | | | |
| 02 | | | | | |
| 03 | | | | | |
| 04 | | | | | |
| 05 | | | | | |
| 06 | | | | | |
| 07 | | | | | |
| 08 | | | | | |
| 09 | | | | | |
| 10 | | | | | |
| 11 | | | | | |
| 12 | | | | | |
| 13 | | | | | |
| 14 | | | | | |
| 15 | | | | | |
| 16 | | | | | |
| 17 | | | | | |
| 18 | | | | | |
| 19 | | | | | |
| 20 | | | | | |
| 21 | | | | | |
| 22 | | | | | |
| 23 | | | | | |
| 24 | | | | | |
| 25 | | | | | |
| 26 | | | | | |
| 27 | | | | | |
| 28 | | | | | |
| 29 | | | | | |
| 30 | | | | | |
| 31 | | | | | |
| 32 | | | | | |
| 33 | | | | | |
| 34 | | | | | |
| 35 | | | | | |
| 36 | | | | | |
| 37 | | | | | |
| 38 | | | | | |
| 39 | | | | | |
| 40 | | | | | |
| 41 | | | | | |
| 42 | | | | | |
| 43 | | | | | |
| 44 | | | | | |
| 45 | | | | | |
| 46 | | | | | |
| 47 | | | | | |
| 48 | | | | | |
| 49 | | | | | |
| 50 | | | | | |
| 51 | | | | | |
| 52 | | | | | |
| 53 | | | | | |
| 54 | | | | | |
| 55 | | | | | |
| 56 | | | | | |
| 57 | | | | | |
| 58 | | | | | |
| 59 | | | | | |
| 60 | | | | | |

## Parameter Mapping Worksheet
- List each parameter, its audible impact, and interaction dependencies.
- Record the smallest change you can hear and the most dramatic effect.

## Automation Ideas
- Slow sweeps (16 bars) for evolving textures.
- Medium sweeps (4 bars) for musical motion.
- Fast sweeps (1 bar) for rhythmic effects.

## Mix Integration Checklist
- Confirm mono compatibility for wide settings.
- Control low-end with high-pass or low-bypass tools.
- Use light compression for dynamic stability.
- Avoid extreme modulation in dense mixes.

## Troubleshooting Matrix
- Harsh attack -> soften exciter/attack, reduce brightness.
- Thin body -> increase resonance or body emphasis.
- Too wide -> reduce spread, check mono.
- Too static -> add modulation or automation.
- Muddy low end -> reduce low-mid buildup or use high-pass.

## Advanced Research Prompts
- Document how each parameter influences timbre vs dynamics.
- Record preset settings for three reference styles.
- Compare results across low/mid/high registers.
- Capture a before/after screenshot for each major change.
