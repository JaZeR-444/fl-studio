# Vocodex - Advanced Vocoder

```
██╗   ██╗ ██████╗  ██████╗ ██████╗ ██████╗ ███████╗██╗  ██╗
██║   ██║██╔═══██╗██╔════╝██╔═══██╗██╔══██╗██╔════╝╚██╗██╔╝
██║   ██║██║   ██║██║     ██║   ██║██║  ██║█████╗   ╚███╔╝ 
╚██╗ ██╔╝██║   ██║██║     ██║   ██║██║  ██║██╔══╝   ██╔██╗ 
 ╚████╔╝ ╚██████╔╝╚██████╗╚██████╔╝██████╔╝███████╗██╔╝ ██╗
  ╚═══╝   ╚═════╝  ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Vocoder / Speech Synth
**Category:** Effect / Creative / Voice
**Official Manual:** [Image-Line Vocodex Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Vocodex.htm)

---

## 🎯 What is Vocodex?

Vocodex is one of the most powerful software vocoders on the market. It takes the concept of the Fruity Vocoder and expands it with **Soundgoodizer** integration, **Sytrus-based** internal carrier synthesis, advanced **Envelope Following**, and up to **100 frequency bands**. It is designed for maximum clarity and intelligibility, solving the "muddy" sound of traditional vocoders.

**Key Capabilities:**
- **Intelligibility:** Advanced band contouring for clear speech.
- **Internal Carrier:** Built-in Sytrus engine (you don't *need* an external synth).
- **Soundgoodizer:** Built-in maximization for the output.
- **Band Unison:** Thicken the sound directly in the vocoder.
- **Envelope Follower:** Precise control over hold and release times.
- **Modulator Noise:** Pass-through of S/Sh/T/K sounds for clarity.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **modulator-vs-carrier-setup.md**
3. Create **parameter-cheat-sheet.md**
4. Load the "Clear" preset, select your mic as Modulator, and play the internal keyboard (Carrier).

### For Daft Punk Fans:
1. Study **classic-robot-vocals.md**
2. Review **carrier-choice-guide.md** (Sawtooth vs Pulse)
3. Learn **band-width-tuning.md**

### For Sound Designers:
1. Study **drum-vocoding-textures.md**
2. Review **formant-shifting-fx.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **MOD:** Modulator input selector.
  - **CAR:** Carrier input selector.
  - **Bands:** 5 to 100.
  - **Bandwidth:** Sharp vs Wide.
  - **SG:** Soundgoodizer knob.
  - **Order:** Filter slope.

- [ ] **modulator-vs-carrier-setup.md**
  - **Method A:** Using internal Sytrus carrier (Easy).
  - **Method B:** Routing an external synth (Flexible).

#### 02-Data/parameters/
- [ ] **vocodex-params.json**
  ```json
  {
    "plugin_name": "Vocodex",
    "category": "Vocoder",
    "max_bands": 100,
    "internal_carrier": "Sytrus Engine"
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **maximum-intelligibility.md**
  - High Band count (50+).
  - Enabling "Modulator Noise" pass-through (for sibilance).
  - Tuning the "Bandwidth" to 1x.

- [ ] **classic-talkbox-simulation.md**
  - Low Band count (~16).
  - Using a Sawtooth carrier.
  - Boosting the mid-range bands in the EQ display.

- [ ] **harmonic-drum-loops.md**
  - Modulator: Drum Loop.
  - Carrier: Pad.
  - Result: Rhythmic chords.

#### 03-Workflows/by-context/
- [ ] **live-performance-setup.md**
- [ ] **dubstep-bass-growl-vocoding.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **sidechain-routing-logic.md**
  - How to route Mixer Track 1 (Vocal) and Mixer Track 2 (Synth) into Mixer Track 3 (Vocodex).

---

## 🔬 Research Framework

### Phase 1: The Setup (Week 1)
**Goal:** Sound

**Tasks:**
1. Route Vocal to Vocodex
2. Use internal carrier (Keyboard mode)
3. Play chords
4. Adjust "SG" (Soundgoodizer) for volume
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Why is it silent? (Vocoder needs BOTH Modulator and Carrier active at the same time).
- What does the "Draft" vs "Render" quality switch do?

### Phase 2: Tone Shaping (Week 2)
**Goal:** Clarity

**Tasks:**
1. Experiment with Bandwidth (Narrow = Robotic, Wide = Whisperty)
2. Use the "Envelope Follower" knobs to tighten the response
3. Create maximum-intelligibility.md

---

## 📊 Plugin Specifications to Document

### Engine
- Band Count (5-100)
- Latency (Variable based on bands?)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do I use my own synth? (Sidechain the synth track to the Vocodex track, select its number in the CAR selector).
2. What is the "Wet" slider for? (Passthrough of the Modulator speech - keep low for robot effect).

---

## 🔗 Cross-Reference with Other Plugins

Vocodex is often used with:
- **Sytrus** (The engine inside)
- **Speech Synthesizer** (Perfect modulator source)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Vocodex/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── modulator-vs-carrier-setup.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── vocodex-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── maximum-intelligibility.md
│   │   ├── classic-talkbox-simulation.md
│   │   └── harmonic-drum-loops.md
│
└── 04-Reference/
    └── sidechain-routing-logic.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Set up an external carrier routing in under 1 minute
- [ ] Create a vocoder patch where the lyrics are 100% understandable
- [ ] Explain the function of the "Modulator Noise" pass-through

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection