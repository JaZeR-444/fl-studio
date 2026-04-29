# SimSynth Live - 80s Analog Emulation

```
███████╗██╗███╗   ███╗███████╗██╗   ██╗███╗   ██╗████████╗██╗  ██╗    ██╗     ██╗██╗   ██╗███████╗
██╔════╝██║████╗ ████║██╔════╝╚██╗ ██╔╝████╗  ██║╚══██╔══╝██║  ██║    ██║     ██║██║   ██║██╔════╝
███████╗██║██╔████╔██║███████╗ ╚████╔╝ ██╔██╗ ██║   ██║   ███████║    ██║     ██║██║   ██║█████╗  
╚════██║██║██║╚██╔╝██║╚════██║  ╚██╔╝  ██║╚██╗██║   ██║   ██╔══██║    ██║     ██║╚██╗ ██╔╝██╔══╝  
███████║██║██║ ╚═╝ ██║███████║   ██║   ██║ ╚████║   ██║   ██║  ██║    ███████╗██║ ╚████╔╝ ███████╗
╚══════╝╚═╝╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝    ╚══════╝╚═╝  ╚═══╝  ╚══════╝
```

**Plugin Type:** Subtractive Synthesizer
**Category:** Generator / Analog / Legacy
**Official Manual:** [Image-Line SimSynth Live Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/SimSynth.htm)

---

## 🎯 What is SimSynth Live?

SimSynth Live is a legacy FL Studio plugin modeled after the **Oberheim SEM** and other 80s analog classics. It features 3 oscillators with a unique "Warm" (Dual) mode, allowing for 6-oscillator thickness. It is known for its fat bass sounds, rich strings, and simple but effective SVF (State Variable Filter). It represents the sound of early virtual analog software.

**Key Capabilities:**
- **3 Oscillators:** Saw, Square, Triangle, Sine, Noise.
- **Warm Mode:** Doubling of oscillators for instant detuned thickness.
- **SVF Filter:** Lowpass, Bandpass, Highpass mixing.
- **LFO:** Route to Pitch, Filter, or Pulse Width.
- **Chorus:** Built-in stereo widening.
- **Ring Modulation:** For metallic and bell-like tones.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **oberheim-sem-inspiration.md**
3. Create **parameter-cheat-sheet.md**
4. Enable "Warm" on Osc 1 and 2, set both to Saw, and lower the Cutoff for a classic analog bass.

### For Sound Designers:
1. Study **creating-thick-strings.md**
2. Review **classic-subtractive-bass.md**
3. Learn **ring-mod-bells.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Osc 1-3:** Shape, Level, Coarse/Fine tune.
  - **Warm:** Unison toggle.
  - **SVF:** LP/BP/HP Mix knobs (Unique feature!).
  - **ADSR:** Amp and Filter envelopes.

- [ ] **filter-topology.md**
  - Explain the Oberheim style "Mix" knobs for filter types (blending LP and HP).

#### 02-Data/parameters/
- [ ] **simsynth-params.json**
  ```json
  {
    "plugin_name": "SimSynth Live",
    "category": "Vintage Synth",
    "oscillators": 3,
    "warm_mode": true
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **classic-subtractive-bass.md**
  - Osc 1: Saw (Warm).
  - Filter: 100% LP.
  - Env: Fast attack, short decay.

- [ ] **creating-thick-strings.md**
  - Osc 1 & 2: Saw (Warm).
  - Detuning Osc 2 slightly.
  - Slow Attack.
  - Built-in Chorus enabled.

#### 03-Workflows/by-context/
- [ ] **80s-pop-brass.md**
- [ ] **simple-lead-sounds.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **legacy-presets-guide.md**
  - Overview of the factory library (Richard Brooks, etc.).

---

## 🔬 Research Framework

### Phase 1: The Warmth (Week 1)
**Goal:** Analog Feel

**Tasks:**
1. Initialize patch
2. Compare Single Saw vs "Warm" Saw
3. Use the LFO to modulate PWM (Pulse Width)
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I blend LP and HP filters? (Use the SVF mix knobs).

---

## 📊 Plugin Specifications to Document

### Engine
- Oscillator Count (3, effectively 6)
- Filter Type (SVF)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why does it sound "thin"? (Turn on "Warm" mode).
2. Where is the filter resonance? (It's the "Res" knob in the SVF section).

---

## 🔗 Cross-Reference with Other Plugins

SimSynth Live is often used with:
- **3x Osc** (The simpler alternative)
- **Sawer** (The more aggressive alternative)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
SimSynth Live/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── filter-topology.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── simsynth-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── classic-subtractive-bass.md
│   │   └── creating-thick-strings.md
│
└── 04-Reference/
    └── legacy-presets-guide.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a lush string pad using the "Warm" feature
- [ ] Demonstrate the SVF filter blending (LP to HP sweep)
- [ ] Recreate a classic 80s bass pluck

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
