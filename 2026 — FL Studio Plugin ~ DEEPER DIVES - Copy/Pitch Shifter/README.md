# Pitch Shifter - Real-Time Pitch Manipulation

```
██████╗ ██╗████████╗ ██████╗██╗  ██╗    ███████╗██╗  ██╗██╗███████╗████████╗███████╗██████╗ 
██╔══██╗██║╚══██╔══╝██╔════╝██║  ██║    ██╔════╝██║  ██║██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗
██████╔╝██║   ██║   ██║     ███████║    ███████╗███████║██║█████╗     ██║   █████╗  ██████╔╝
██╔═══╝ ██║   ██║   ██║     ██╔══██║    ╚════██║██╔══██║██║██╔══╝     ██║   ██╔══╝  ██╔══██╗
██║     ██║   ██║   ╚██████╗██║  ██║    ███████║██║  ██║██║██║        ██║   ███████╗██║  ██║
╚═╝     ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝    ╚══════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   ╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Pitch Shifter / Harmonizer
**Category:** Effect / Creative / Voice
**Official Manual:** [Image-Line Pitch Shifter Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Pitch%20Shifter.htm)

---

## 🎯 What is Pitch Shifter?

Pitch Shifter is a real-time effect plugin designed to alter the pitch of incoming audio without changing its duration (unlike a sampler). It features two distinct algorithms: **Voice** (optimized for monophonic vocals) and **Music** (optimized for polyphonic material). It is essential for creating "Baby Voice" or "Deep Voice" effects, live harmonization, and special FX like ring modulation and alien textures.

**Key Capabilities:**
- **Voice Mode:** Monophonic tracking with Formant control.
- **Music Mode:** Polyphonic granular shifting.
- **Pitch Range:** +/- 12 Semitones slider.
- **Formant Control:** Independent adjustment of vocal timbre (Voice Mode).
- **Feedback:** Creates delay-like "monster" tails or flanging.
- **Dry/Wet:** Parallel processing built-in.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **voice-vs-music-mode.md**
3. Create **parameter-cheat-sheet.md**
4. Load a vocal loop, switch to "Voice" mode, and turn the Pitch knob down -5 semitones.

### For Vocal Producers:
1. Study **formant-shifting-techniques.md**
2. Review **creating-artificial-harmonies.md**
3. Learn **the-monster-voice-recipe.md**

### For Sound Designers:
1. Study **granular-music-mode-fx.md**
2. Review **feedback-loop-textures.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Pitch:** Semitones (-12 to +12).
  - **Formant:** Timbre shift (Voice mode).
  - **Mode:** Voice vs Music.
  - **Duration/Density:** Granular controls (Music mode).
  - **Feedback:** Signal recirculation.

- [ ] **voice-vs-music-mode.md**
  - **Voice:** Clean for solo vocals, allows Formant control.
  - **Music:** Granular, better for chords/drums, has "Duration" control.

#### 02-Data/parameters/
- [ ] **pitch-shifter-params.json**
  ```json
  {
    "plugin_name": "Pitch Shifter",
    "category": "Pitch",
    "modes": ["Voice", "Music"],
    "range_semitones": 12
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **the-monster-voice-recipe.md**
  - Mode: Voice.
  - Pitch: -12 Semitones.
  - Mix: 100% Wet.
  - Feedback: 10-20% for metallic trail.

- [ ] **creating-artificial-harmonies.md**
  - Using two instances.
  - Instance 1: +3 Semitones (Minor 3rd).
  - Instance 2: -5 Semitones (Perfect 4th).
  - Mixing in parallel with the dry vocal.

- [ ] **granular-clouds.md**
  - Mode: Music.
  - Duration: High.
  - Pitch: +12.
  - Applied to a Reverb tail.

#### 03-Workflows/by-context/
- [ ] **live-vocal-performance.md**
- [ ] **drum-loop-re-pitching.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **latency-considerations.md**
  - Real-time pitch shifting always introduces latency. How much? (Buffer dependent).

---

## 🔬 Research Framework

### Phase 1: Mode Selection (Week 1)
**Goal:** Clean Shifting

**Tasks:**
1. Put Pitch Shifter on a Vocal
2. Compare "Voice" vs "Music" mode
3. Adjust "Formant" in Voice mode to fix the "chipmunk" sound
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Why does Music mode sound "stuttery"? (Granular synthesis artifacts - adjust Duration/Density).

### Phase 2: Creative FX (Week 2)
**Goal:** Alien Sounds

**Tasks:**
1. Use Feedback to create a rising delay effect
2. Automate the Pitch knob smoothly
3. Create granular-clouds.md

---

## 📊 Plugin Specifications to Document

### Engine
- Algorithm Type (Granular/PSOLA?)
- Latency (samples)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is my voice robot/metallic? (You are hearing the phase cancellation of Dry + Wet. Turn Mix to 100% Wet for a clean shift).
2. Can I play this with a MIDI keyboard? (No, Pitch Shifter is an effect, not an instrument. Use **Pitcher** for MIDI control).

---

## 🔗 Cross-Reference with Other Plugins

Pitch Shifter is often used with:
- **Pitcher** (For key-corrected tuning)
- **Newtone** (For offline precision editing)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Pitch Shifter/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── voice-vs-music-mode.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── pitch-shifter-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── the-monster-voice-recipe.md
│   │   ├── creating-artificial-harmonies.md
│   │   └── granular-clouds.md
│
└── 04-Reference/
    └── latency-considerations.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Shift a vocal down an octave while keeping the formant natural
- [ ] Explain why "Music Mode" works better for drums
- [ ] Create a specific harmony interval without using a harmonizer plugin

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection