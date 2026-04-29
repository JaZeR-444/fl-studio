# FPC - Fruity Pad Controller

```
███████╗██████╗  ██████╗ 
██╔════╝██╔══██╗██╔════╝ 
█████╗  ██████╔╝██║      
██╔══╝  ██╔═══╝ ██║      
██║     ██║     ╚██████╗ 
╚═╝     ╚═╝      ╚═════╝ 
```

**Plugin Type:** Pad Sampler / Drum Machine
**Category:** Generator / Drum / Performance
**Official Manual:** [Image-Line FPC Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/FPC.htm)

---

## 🎯 What is FPC?

FPC (Fruity Pad Controller) is a professional, MPC-style drum machine plugin. It features **16 multi-layered pads** across two banks (A and B), allowing for 32 total sounds per kit. Its true power lies in its **Velocity Layering**, where different samples can be triggered based on how hard a pad is hit, enabling realistic and dynamic drum performances. It includes a comprehensive content library and a pattern manager for instant groove creation.

**Key Capabilities:**
- **32 Total Pads:** Two banks of 16 velocity-sensitive pads.
- **Multi-Layer Sampling:** Stack unlimited samples per pad with velocity ranges.
- **MPC Emulation:** Layout and workflow inspired by legendary hardware.
- **Velocity Sensitivity:** Trigger different samples (e.g. ghost notes) automatically.
- **Pattern Manager:** Load MIDI loops directly into the FPC workflow.
- **Mixer Routing:** Send each pad to an independent mixer track.
- **Envelope Shaping:** Custom ADSR curves for every sample layer.
- **Content Library:** Direct access to downloadable high-quality drum banks.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **pad-layering-logic.md** (Velocity ranges)
3. Create **parameter-cheat-sheet.md**
4. Load the "Acoustic Drum Kit" and watch the velocity meters move as you play different notes.

### For Beatmakers:
1. Study **building-custom-drum-kits.md**
2. Review **mapping-external-pads.md** (Akai MPC/MPD setup)
3. Learn **choking-and-cut-groups.md** (Hi-hat logic)

### For Mix Engineers:
1. Study **multi-output-routing-setup.md**
2. Review **layer-panning-and-tuning.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **The Pads:** 1-16 (A/B).
  - **Sample Layers:** The "Wave" list.
  - **Velocity Handles:** Range bars on the right.
  - **Envelopes:** Volume curves.
  - **Output:** Mixer offset (per pad).

- [ ] **cut-groups-explained.md**
  - How to make a closed hi-hat silence an open hi-hat.

#### 02-Data/parameters/
- [ ] **fpc-specs.json**
  ```json
  {
    "plugin_name": "FPC",
    "pads": 32,
    "layers": "Unlimited per pad",
    "features": ["MPC Layout", "Velocity splitting", "MIDI patterns"]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **realistic-acoustic-drums.md**
  - Loading 4 velocity layers for a Snare (Soft, Med, Hard, Rim).
  - Adjusting velocity ranges so they crossfade smoothly.
  - Adding "Humanize" randomness (if available).

- [ ] **fpc-with-external-hardware.md**
  - Mapping an Akai MPD to the FPC layout.
  - Using "MIDI Learn" for pad assignment.

- [ ] **creating-glitch-kits.md**
  - Layering a kick synth with a noise burst.
  - Using Cut Groups for rhythmic stuttering.

#### 03-Workflows/by-context/
- [ ] **hip-hop-workflow-optimization.md**
- [ ] **drum-kit-preset-creation.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **pattern-manager-midi-import.md**
  - How to use the FPC pattern selector to drag MIDI grooves into the Playlist.

---

## 🔬 Research Framework

### Phase 1: Pad Logic (Week 1)
**Goal:** Sample Stacking

**Tasks:**
1. Load 3 different samples onto Pad 1
2. Set Velocity Range 1 (0-40), Range 2 (41-80), Range 3 (81-127)
3. Verify they trigger correctly based on hit strength
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I delete a sample from a pad?
- Can I pan layers independently within one pad? (Yes).

### Phase 2: Mixing & Grouping (Week 2)
**Goal:** The Kit

**Tasks:**
1. Set up a "Cut Group" for Pad 3 (Open Hat) and Pad 4 (Closed Hat)
2. Route Pad 1 to Mixer 10 and Pad 2 to Mixer 11
3. Create multi-output-routing-setup.md

---

## 📊 Plugin Specifications to Document

### Engine
- Sample Formats (WAV, SF2, etc.?)
- Max Pad Count (32)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why are my pads overlapping? (Check the MIDI Note mapping in the top right - make sure each pad has a unique note).
2. How to change the pad layout to match my controller? (Right-click a pad -> "Map to controller").

---

## 🔗 Cross-Reference with Other Plugins

FPC is often used with:
- **Slicex** (Sampling chops into FPC pads)
- **Fruity Delay 3** (Per-pad echo via multi-output)

---

## 📦 File Structure Summary

```
FPC/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── cut-groups-explained.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── fpc-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── realistic-acoustic-drums.md
│   │   └── multi-output-routing-setup.md
│
└── 04-Reference/
    └── pattern-manager-midi-import.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Build a 4-layer velocity-sensitive drum pad from scratch
- [ ] Explain the benefit of Cut Groups for realistic hi-hats
- [ ] Route a full kit to 8 different mixer tracks using one instance
- [ ] Successfully map an external pad controller to the FPC interface

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection