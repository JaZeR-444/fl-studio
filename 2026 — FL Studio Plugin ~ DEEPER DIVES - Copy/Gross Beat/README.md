# Gross Beat - Time & Volume Manipulation

```
 ██████╗ ██████╗  ██████╗ ███████╗███████╗    ██████╗ ███████╗ █████╗ ████████╗
██╔════╝ ██╔══██╗██╔═══██╗██╔════╝██╔════╝    ██╔══██╗██╔════╝██╔══██╗╚══██╔══╝
██║  ███╗██████╔╝██║   ██║███████╗███████╗    ██████╔╝█████╗  ███████║   ██║   
██║   ██║██╔══██╗██║   ██║╚════██║╚════██║    ██╔══██╗██╔══╝  ██╔══██║   ██║   
╚██████╔╝██║  ██║╚██████╔╝███████║███████║    ██████╔╝███████╗██║  ██║   ██║   
 ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝    ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   
```

**Plugin Type:** Time & Volume Shaper / Buffer Effect
**Category:** Effect / Creative / Rhythmic
**Official Manual:** [Image-Line Gross Beat Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Gross%20Beat.htm)

---

## 🎯 What is Gross Beat?

Gross Beat is a powerful real-time audio manipulation effect designed for rhythmic gating, time-stretching, glitching, and scratching. It works by storing incoming audio in a 2-bar rolling buffer, which is then replayed based on custom **Time** and **Volume** envelopes. It is legendary for creating the "Half-speed" effect, Trap-style gating, and complex rhythmic repetitions.

**Key Capabilities:**
- **Dual Envelope Slots:** 36 Time slots and 36 Volume slots.
- **Half-Speed Effect:** Instantly slow down audio by 2x (Tape style).
- **Rhythmic Gating:** Complex volume patterns synced to the beat.
- **Turntable Emulation:** Create scratches and tape stops via time envelopes.
- **Real-Time Triggering:** Switch between 72 patterns via MIDI or automation.
- **Click Reduction:** Smoothing algorithms for artifact-free transitions.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **buffer-mechanics-explained.md** (How the 2-bar loop works)
3. Create **parameter-cheat-sheet.md**
4. Load the "Momentary" preset and click the "1/2 speed" slot while audio plays.

### For Trap/Hip-Hop Producers:
1. Study **perfect-half-speed-setup.md**
2. Review **creating-stutter-glitches.md**
3. Learn **sidechain-ducking-curves.md**

### For Sound Designers:
1. Study **rhythmic-reverses.md**
2. Review **turntable-scratch-envelopes.md**
3. Learn **hq-resampling-vs-cpu.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Time Grid:** Horizontal axis (Time), Vertical axis (Buffer position).
  - **Volume Grid:** Standard envelope editor.
  - **Pattern Slots:** 1-36 selectors.
  - **Attack/Release:** Smoothing controls.
  - **Mix (Dry/Wet):** Parallel processing.

- [ ] **buffer-mechanics-explained.md**
  - Why Gross Beat has a 2-bar limit.
  - Understanding the "diagonal" line (normal playback).

#### 02-Data/parameters/
- [ ] **gross-beat-params.json**
  ```json
  {
    "plugin_name": "Gross Beat",
    "category": "Rhythmic",
    "parameters": [
      {
        "name": "HQ Resampling",
        "type": "switch",
        "description": "Higher quality pitch shifting",
        "pro_tip": "Enable for final renders, disable during production to save CPU."
      }
    ]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **perfect-half-speed.md**
  - Identifying the "1/2 speed" pattern.
  - Using the Mix knob to blend the original and half-speed (Instant "Growth" texture).
  - Automation timing for switching patterns.

- [ ] **tape-stop-and-spin-up.md**
  - Drawing curved lines in the Time envelope.
  - Syncing the stop length to 1 beat or 1 bar.

- [ ] **trance-gate-sequencing.md**
  - Using the Volume grid to create complex rhythm gates.
  - Snapping control points to 1/16th notes.

#### 03-Workflows/by-context/
- [ ] **glitching-vocals.md**
- [ ] **melody-reshaping-workflow.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **midi-pattern-triggering.md**
  - How to link MIDI notes to switch Gross Beat slots in real-time.
  - Mapping MIDI Channel 1 notes to patterns.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Pattern Mastery

**Tasks:**
1. Put Gross Beat on a Drum Loop
2. Click through factory patterns (Time vs Volume)
3. Learn to draw a simple "Reverse" curve
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- What is the difference between "Slot" attack and "Global" attack?
- Why is there a delay when I switch patterns? (Check the "Hold" and "Trig" settings).

### Phase 2: Complex Timing (Week 2)
**Goal:** The Glitch

**Tasks:**
1. Create a "Double-time" repeat effect
2. Automate the Mix knob for specific phrases
3. Set up MIDI note triggering
4. Create midi-pattern-triggering.md

---

## 📊 Plugin Specifications to Document

### Engine
- Buffer Size (2 bars)
- Resampling Modes (Linear, Hermite, Sinc?)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is my audio out of sync? (Check if the Time envelope goes past the 2-bar buffer or if "Pos" is offset).
2. How do I stop the "clicks" when pattern switching? (Increase "Attack" smoothing).

### Advanced Usage
1. How to create a "Shepard Tone" infinite riser in Gross Beat?

---

## 🔗 Cross-Reference with Other Plugins

Gross Beat is often used with:
- **Fruity Delay 3** (Adding echoes to glitches)
- **Love Philter** (Filtering the rhythmic gates)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Gross Beat/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── buffer-mechanics-explained.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── gross-beat-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── perfect-half-speed.md
│   │   ├── tape-stop-and-spin-up.md
│   │   └── trance-gate-sequencing.md
│
└── 04-Reference/
    └── midi-pattern-triggering.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a custom 1/2 speed preset with zero clicking
- [ ] Switch between 4 different rhythmic patterns via MIDI notes
- [ ] Explain how the Time envelope correlates to buffer position
- [ ] Build a "Tape Stop" that lasts exactly half a bar

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection