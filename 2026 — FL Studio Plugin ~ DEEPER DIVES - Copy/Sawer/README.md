# Sawer - Vintage Polivoks Emulation

```
███████╗ █████╗ ██╗    ██╗███████╗██████╗ 
██╔════╝██╔══██╗██║    ██║██╔════╝██╔══██╗
███████╗███████║██║ █╗ ██║█████╗  ██████╔╝
╚════██║██╔══██║██║███╗██║██╔══╝  ██╔══██╗
███████║██║  ██║╚███╔███╔╝███████╗██║  ██║
╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝ ╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Subtractive Synthesizer / Polivoks Emulator
**Category:** Generator / Analog / Vintage
**Official Manual:** [Image-Line Sawer Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Sawer.htm)

---

## 🎯 What is Sawer?

Sawer is a detailed emulation of the **Polivoks**, a legendary Soviet analog synthesizer from the 1980s. It is known for its gritty, aggressive, and unstable filter character. Unlike clean digital synths, Sawer aims for "imperfection" and warmth. It features a unique filter design, syncable sub-oscillator, and a powerful arpeggiator/effects section.

**Key Capabilities:**
- **Polivoks Filter:** 12dB/24dB LP/BP/HP with unique grit.
- **Oscillators:** Saw + Sub (with phase/detune) + Noise.
- **Sync:** Hard sync for tearing leads.
- **Unison:** 8-Voice unison for massive width.
- **Matrix:** Modulation matrix for LFO/Envelope routing.
- **Effects:** Chorus, Phaser, Delay, Reverb (Vintage style).

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **polivoks-character.md**
3. Create **parameter-cheat-sheet.md**
4. Crank the Resonance on the Filter and play low notes to hear the growl.

### For Sound Designers:
1. Study **aggressive-bass-design.md**
2. Review **hard-sync-leads.md**
3. Learn **creating-vintage-strings.md**

### For Retro Synthwave:
1. Study **soviet-synth-patches.md**
2. Review **noise-rhythm-arps.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Osc Section:** Saw, Sub Level, Sub Phase.
  - **Filter:** Cutoff, Res, KBD Track.
  - **Amp:** ADSR.
  - **Unison:** Voices, Detune, Pan.

- [ ] **polivoks-character.md**
  - Why the filter sounds "dirty."
  - The behavior of the Sub-oscillator phase.

#### 02-Data/parameters/
- [ ] **sawer-params.json**
  ```json
  {
    "plugin_name": "Sawer",
    "category": "Vintage Synth",
    "emulation": "Polivoks",
    "polyphony": 24
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **aggressive-bass-design.md**
  - High Sub Level.
  - Filter Cutoff low, Resonance medium.
  - Filter Envelope Amount positive.
  - Adding "Tube" distortion (if available in FX or external).

- [ ] **hard-sync-leads.md**
  - Enabling "Sync".
  - Modulating the frequency of the slave oscillator.
  - Adding Phaser/Chorus.

- [ ] **vintage-brass-stab.md**
  - Saw wave.
  - Medium Attack/Release.
  - Unison enabled (4 voices).

#### 03-Workflows/by-context/
- [ ] **cold-wave-basslines.md**
- [ ] **lo-fi-keys.md**

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** The Grime

**Tasks:**
1. Initialize patch
2. Play with the Sub Oscillator "Phase" knob
3. Test the Filter "Mode" switches
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does the "Noise" mix in?
- What does the "Retrig" button do on the LFO?

### Phase 2: Modulation (Week 2)
**Goal:** Movement

**Tasks:**
1. Use the Matrix to route LFO to Filter Cutoff
2. Use the Matrix to route Velocity to Volume
3. Create aggressive-bass-design.md

---

## 📊 Plugin Specifications to Document

### Engine
- Filter Slope (12/24 dB)
- Polyphony (24)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the filter screaming? (Polivoks filters self-oscillate aggressively).
2. How to make it cleaner? (Lower resonance, turn off "Warm" if applicable).

---

## 🔗 Cross-Reference with Other Plugins

Sawer is often used with:
- **PoiZone** (Cleaner alternative)
- **Fruity Squeeze** (Adding more lo-fi grit)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Sawer/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── polivoks-character.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── sawer-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── aggressive-bass-design.md
│   │   └── hard-sync-leads.md
│
└── 04-Reference/
    └── modulation-matrix-guide.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a bass patch that sounds like it came from a Soviet cold war bunker
- [ ] Explain the effect of Sub-Oscillator Phase on the waveform
- [ ] Build a "Sync Lead" that cuts through a mix

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
