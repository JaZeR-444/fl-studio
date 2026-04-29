# Transporter - Real-Time Relooper

```
████████╗██████╗  █████╗ ███╗   ██╗███████╗██████╗  ██████╗ ██████╗ ████████╗███████╗██████╗ 
╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
   ██║   ██████╔╝███████║██╔██╗ ██║███████╗██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██████╔╝
   ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██╔══██╗
   ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║     ╚██████╔╝██║  ██║   ██║   ███████╗██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Real-Time Relooper / Glitch Effect
**Category:** Effect / Sound Design / Performance
**Official Manual:** [Image-Line Transporter Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Transporter.htm)

---

## 🎯 What is Transporter?

Transporter is a real-time relooping effect that continuously records incoming audio into a rolling buffer and triggers loops based on detected transients. It is designed for live performance and extreme sound design, allowing you to "catch" drum hits or guitar notes and instantly transform them into rhythmic repetitions (Loops A & B). It features advanced "Bouncing" and "Tempo" modes for organic or strictly rhythmic glitches.

**Key Capabilities:**
- **Real-Time Buffer:** Continuously captures incoming audio for instant relooping.
- **Dual Independent Loops:** Trigger two loops (A & B) with distinct playback positions.
- **Transient-Driven Triggering:** Auto-detects peaks to start loops dynamically.
- **Bouncing Mode:** Simulates physical events (like a bouncing ball) for loop length.
- **Tempo Sync:** Reloops based on rhythmic subdivisions (1/4, 1/8, etc.).
- **Stereo Spread:** Independent panning or auto-panning for the loop voices.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **transporter-modes-decoded.md** (Auto vs Tempo vs Bouncing)
3. Create **parameter-cheat-sheet.md**
4. Apply to a simple drum beat, enable "Auto" mode, and adjust "Sensitivity."

### For Sound Designers:
1. Study **creating-glitch-textures.md**
2. Review **bouncing-ball-rhythms.md**
3. Learn **a-b-ratio-groove-design.md**

### For Live Performers:
1. Study **real-time-audio-rearrangement.md**
2. Review **stereo-spread-movement.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Sensitivity:** Transient detection threshold.
  - **Spread:** Stereo width/Auto-pan.
  - **Bouncing Rate:** Acceleration of loop shortening.
  - **A/B Ratio:** Relationship between the two loop lengths.
  - **Modes:** Auto, Bouncing, Tempo switches.

- [ ] **transporter-modes-decoded.md**
  - **Auto:** Triggered by incoming audio volume peaks.
  - **Tempo:** Triggered by the song grid.
  - **Bouncing:** Changing loop lengths over time.

#### 02-Data/parameters/
- [ ] **transporter-params.json**
  ```json
  {
    "plugin_name": "Transporter",
    "category": "Glitch/Relooper",
    "features": ["Dual loops", "Bouncing mode", "Transient detection"]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **perfect-glitch-fills.md**
  - Automating the "Mute" or "Mix" knob for end-of-bar fills.
  - Using "Bouncing" mode for a natural decay feel.

- [ ] **rhythmic-rearrangement.md**
  - Using "Tempo" mode.
  - Setting A/B Ratio to create polyrhythmic repeats.

- [ ] **stereo-widening-glitch.md**
  - Using high "Spread" values.
  - Panning Loop A Left and Loop B Right.

#### 03-Workflows/by-context/
- [ ] **glitching-vocals-live.md**
- [ ] **guitar-stutter-effects.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **transient-detection-physics.md**
  - How Sensitivity interacts with the noise floor.

---

## 🔬 Research Framework

### Phase 1: The Loop (Week 1)
**Goal:** Consistent Relooping

**Tasks:**
1. Put Transporter on a Snare track
2. Find the "Sensitivity" sweet spot for clean triggers
3. Observe the green/orange playback markers
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How long is the internal buffer?
- Can I manually trigger the loops?

### Phase 2: The Bounce (Week 2)
**Goal:** Movement

**Tasks:**
1. Switch to "Bouncing" mode
2. Adjust "Bouncing Rate" to create a "dying motor" effect
3. Automate the "Spread" LFO
4. Create bouncing-ball-rhythms.md

---

## 📊 Plugin Specifications to Document

### Engine
- Latency (Low-latency design?)
- Buffer Type (Rolling)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it looping everything? (Sensitivity is too high).
2. How is this different from Gross Beat? (Gross Beat is envelope-based; Transporter is dynamic and transient-reactive).

---

## 🔗 Cross-Reference with Other Plugins

Transporter is often used with:
- **Gross Beat** (Pre-programmed time FX)
- **Fruity Delay 3** (Adding space to the repeats)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Transporter/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── transporter-modes-decoded.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── transporter-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── perfect-glitch-fills.md
│   │   └── rhythmic-rearrangement.md
│
└── 04-Reference/
    └── transient-detection-physics.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a "Bouncing Ball" snare roll using only Transporter
- [ ] Explain the benefit of the A/B Ratio knob for rhythmic variety
- [ ] Successfully use Auto-panning to create a wide glitch field
- [ ] Demonstrate zero-latency live relooping on a vocal input

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection