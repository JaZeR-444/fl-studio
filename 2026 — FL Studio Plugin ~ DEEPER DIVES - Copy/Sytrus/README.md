# Sytrus - Hybrid Synthesis Powerhouse

```
███████╗██╗   ██╗████████╗██████╗ ██╗   ██╗███████╗
██╔════╝╚██╗ ██╔╝╚══██╔══╝██╔══██╗██║   ██║██╔════╝
███████╗ ╚████╔╝    ██║   ██████╔╝██║   ██║███████╗
╚════██║  ╚██╔╝     ██║   ██╔══██╗██║   ██║╚════██║
███████║   ██║      ██║   ██║  ██║╚██████╔╝███████║
╚══════╝   ╚═╝      ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
```

**Plugin Type:** FM / RM / Additive / Subtractive Synthesizer
**Category:** Generator / Advanced Synthesis / Sound Design
**Official Manual:** [Image-Line Sytrus Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Sytrus.htm)

---

## 🎯 What is Sytrus?

Sytrus is FL Studio's flagship synthesizer and one of the most powerful software synths ever created. It is a **Hybrid Synth** that combines **Frequency Modulation (FM)**, **Ring Modulation (RM)**, **Additive**, and **Subtractive** synthesis in a single 6-operator engine. It is famous for its "crystal clean" digital sound, complex modulation matrix, and highly detailed envelope/LFO editor. It can produce anything from realistic bells and organs to aggressive dubstep wobbles and massive cinematic pads.

**Key Capabilities:**
- **6 Operators:** Independent oscillators with FM/RM/Additive controls.
- **Advanced Modulation Matrix:** Route any operator to any other, or to filters/FX.
- **Additive Engine:** Edit up to 256 harmonic partials per operator.
- **Dual Multimode Filters:** 3 filter units with variable types and slopes.
- **9-Voice Unison:** Create massive, wide textures with sub-layers.
- **Complex Envelopes:** Unlimited points per envelope with LFO and tracking.
- **High-Quality FX:** Built-in Chorus, 3 Delay lines, Reverb, and EQ.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **sytrus-matrix-basics.md** (How to make sound!)
3. Create **parameter-cheat-sheet.md**
4. Load the "Default" patch, go to the Matrix, and turn up the `OP 1 -> OUT` knob.

### For FM Sound Designers:
1. Study **fm-synthesis-fundamentals.md**
2. Review **ring-modulation-textures.md**
3. Learn **operator-feedback-loops.md**

### For Additive/Spectral Users:
1. Study **harmonics-partial-editor.md**
2. Review **additive-pad-design.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Operator Tabs:** Frequency, Phase, Harmonics.
  - **Matrix:** The routing grid.
  - **Filter Tabs:** Cutoff, Res, Type.
  - **Main Tab:** Global Vol, LFO, Unison.
  - **Envelope Editor:** Handles, Curves, LFO mode.

- [ ] **sytrus-matrix-decoded.md**
  - Rows vs Columns.
  - Modulating OP 2 with OP 1.
  - Sending to Filter 1 vs Filter 2.

#### 02-Data/parameters/
- [ ] **sytrus-operator-specs.json**
  ```json
  {
    "plugin_name": "Sytrus",
    "operators": 6,
    "harmonics": 256,
    "unison_max": 9,
    "filter_units": 3
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **classic-fm-electric-piano.md**
  - Operator 1: Sine.
  - Operator 2: High frequency modulator.
  - Matrix routing for "metallic" bite.
  - Envelope setup for the "tine" attack.

- [ ] **dubstep-wobble-matrix.md**
  - Linking LFO 1 to Filter 1 Cutoff.
  - Modulating LFO speed with an X-Y controller.
  - Using Operator Feedback for grit.

- [ ] **lush-additive-pads.md**
  - Using the Harmonics editor to build a "soft" wave.
  - High Unison (9 voices) with Phase offset.
  - Long release envelopes on all operators.

#### 03-Workflows/by-context/
- [ ] **cinematic-sub-bass.md**
- [ ] **chiptune-lead-design.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **oversampling-vs-cpu.md**
  - Why 64x oversampling makes FM sound better but kills your CPU.
- [ ] **phase-free-mixing-logic.md**

---

## 🔬 Research Framework

### Phase 1: The Operators (Week 1)
**Goal:** Basic Synthesis

**Tasks:**
1. Build a Sawtooth wave using only harmonics
2. Practice FM: OP 1 (Carrier) <- OP 2 (Modulator)
3. Use the "Filter" tabs to shape the result
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I link an envelope to the Filter Cutoff? (Articulator section).
- What does the "Frequency Ratio" setting actually do?

### Phase 2: The Matrix (Week 2)
**Goal:** Complex Routing

**Tasks:**
1. Setup a "Serial" chain: OP 1 -> OP 2 -> OP 3 -> Filter 1
2. Setup a "Parallel" chain: OP 1 -> F1, OP 2 -> F2
3. Create sytrus-matrix-decoded.md

---

## 📊 Plugin Specifications to Document

### Engine
- Polyphony (User definable)
- Max Oversampling (64x)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it silent? (Check the Matrix - OUT columns must be active).
2. How to make it sound "Analog"? (Add Unison, slightly detune operators, use the "Global" LFO for pitch drift).

### Advanced Usage
1. How to use the "X-Y Controller" inside Sytrus to morph between FM states?

---

## 🔗 Cross-Reference with Other Plugins

Sytrus is often used with:
- **Toxic Biohazard** (Simpler FM alternative)
- **Fruity WaveShaper** (External distortion)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Sytrus/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── sytrus-matrix-decoded.md ⭐ HIGH PRIORITY
│
├── 02-Data/
│   ├── parameters/
│   │   └── sytrus-operator-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── classic-fm-electric-piano.md
│   │   └── dubstep-wobble-matrix.md
│
└── 04-Reference/
    └── oversampling-vs-cpu.md
```

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Sytrus Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Sytrus.htm)
- [Sytrus Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Sytrus_tutorials.htm)
- [Sytrus Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+sytrus+tutorial)

### Community Resources
- [Sytrus Subreddit](https://www.reddit.com/r/FL_Studio/search?q=sytrus&restrict_sr=1)
- [Sytrus User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Sytrus Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for spectral analysis of Sytrus outputs
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Limiter** for monitoring harmonic content
- **Patcher** for external audio input routing

### Recommended Learning Materials
- "FM Synthesis Fundamentals" - Understanding the basics of frequency modulation
- "Operator Matrix Logic" - Deep dive into Sytrus's routing system
- "Additive Synthesis Techniques" - Using harmonics editors effectively

### Advanced Techniques
- **Operator Feedback Loops:** Creating complex self-modulating patches
- **Matrix Morphing:** Real-time parameter automation across multiple operators
- **Unison Optimization:** Techniques for wide sounds without CPU overload

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Successfully build a classic "FM Bass" from scratch in under 2 minutes
- [ ] Explain the difference between FM and RM in the Sytrus matrix
- [ ] Use the Additive editor to replicate a specific real-world instrument timbre
- [ ] Create a complex 9-voice unison pad that doesn't sound "muddy"

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
