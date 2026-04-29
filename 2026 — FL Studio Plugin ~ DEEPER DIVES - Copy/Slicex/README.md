# Slicex - Advanced Loop Slicer

```
███████╗██╗     ██╗ ██████╗███████╗██╗  ██╗
██╔════╝██║     ██║██╔════╝██╔════╝╚██╗██╔╝
███████╗██║     ██║██║     █████╗   ╚███╔╝ 
╚════██║██║     ██║██║     ██╔══╝   ██╔██╗ 
███████║███████╗██║╚██████╗███████╗██╔╝ ██╗
╚══════╝╚══════╝╚═╝ ╚═════╝╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Beat Slicer / Sampler
**Category:** Generator / Sampling / Drum
**Official Manual:** [Image-Line Slicex Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Slicex.htm)

---

## 🎯 What is Slicex?

Slicex is the ultimate beat-slicing tool in FL Studio. It takes a drum loop (or any sample), uses transient detection to slice it into individual hits, and maps them to MIDI notes. Unlike Fruity Slicer, Slicex features **Deck A** and **Deck B** for layering, a full **Wave Editor** (Edison built-in), and independent articulation (Filter, Envelope) for *every single slice*.

**Key Capabilities:**
- **Auto-Slicing:** Intelligent transient detection.
- **Wave Editor:** Full editing capabilities (Fade, Normalize, EQ) per slice.
- **Dual Decks:** Load two loops and layer/crossfade them.
- **Articulations:** 8 Articulation slots (Filter/Envelopes) assignable to slices.
- **Piano Roll Dump:** Instantly dumps the groove to MIDI.
- **Mixer Routing:** Route individual slices to different mixer tracks effortlessly.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **slicex-vs-fruity-slicer.md**
3. Create **parameter-cheat-sheet.md**
4. Load a drum loop, hit "Auto-slice" (Medium), and play the notes on your keyboard.

### For Beatmakers:
1. Study **chopping-samples-workflow.md**
2. Review **layering-drums-deck-a-b.md**
3. Learn **envelope-shaping-per-slice.md**

### For Finger Drummers:
1. Study **mpc-style-mapping.md**
2. Review **trigger-groups-choking.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Decks:** A/B toggle.
  - **Markers:** Slice points.
  - **Articulators:** Filter/Vol/Pitch envelopes.
  - **Master Panel:** Global pitch/vol.

- [ ] **slicex-vs-fruity-slicer.md**
  - **Slicer:** Simple, quick, one knob slicing.
  - **Slicex:** Deep editing, layering, per-slice synthesis.

#### 02-Data/parameters/
- [ ] **slicex-shortcuts.json**
  ```json
  {
    "plugin_name": "Slicex",
    "shortcuts": {
      "Auto Slice": "Ctrl + E (in editor)",
      "Dump to Piano Roll": "Drag button"
    }
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **chopping-samples-workflow.md**
  - Loading a Soul sample.
  - Manually placing markers (M region).
  - Assigning specific slices to Articulator 1 (Filter).

- [ ] **layering-drums-deck-a-b.md**
  - Deck A: Acoustic Break.
  - Deck B: Electronic Beat.
  - Layering kick on kick using the same MIDI note.

- [ ] **routing-slices-to-mixer.md**
  - Selecting the Kick slice.
  - Setting "OUT" offset to 1.
  - Selecting Snare, setting OUT to 2.

#### 03-Workflows/by-context/
- [ ] **jungle-breakbeat-chopping.md**
- [ ] **vocal-chop-melody.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **articulator-routing-logic.md**
  - How to map Velocity to Filter Cutoff for Slice 1 but not Slice 2.

---

## 🔬 Research Framework

### Phase 1: The Chop (Week 1)
**Goal:** Perfect Slices

**Tasks:**
1. Import a loop
2. Use "Dull Auto-slice" vs "Sharp Auto-slice"
3. Manually move a marker to fix a click
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I delete a slice? (Delete the marker).
- Can I reverse just ONE slice? (Yes, select region -> Tools -> Reverse).

### Phase 2: Synthesis (Week 2)
**Goal:** Beyond Playback

**Tasks:**
1. Enable the Filter in Articulator 1
2. Assign the Snare slice to Articulator 1
3. Draw a Filter Envelope
4. Create envelope-shaping-per-slice.md

---

## 📊 Plugin Specifications to Document

### Engine
- Max Slices (Region limit?)
- Decks (2)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the loop playing slower/faster? (Slicex doesn't time-stretch by default, it triggers slices. Check tempo alignment or use "Drum" stretch mode in editor).
2. How to "Choke" slices (Cut each other off)? (Set Cut/Cut By numbers in the slice properties).

---

## 🔗 Cross-Reference with Other Plugins

Slicex is often used with:
- **Edison** (Same editor engine)
- **Fruity Slicer** (Simpler alternative)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Slicex/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── slicex-vs-fruity-slicer.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── slicex-shortcuts.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── chopping-samples-workflow.md
│   │   ├── layering-drums-deck-a-b.md
│   │   └── routing-slices-to-mixer.md
│
└── 04-Reference/
    └── articulator-routing-logic.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Chop a drum loop and route the Kick, Snare, and Hats to 3 separate mixer tracks
- [ ] Layer two loops using Deck A and B
- [ ] Create a "Choke Group" for Hi-Hats manually

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
