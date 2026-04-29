# Sakura - String Physical Modeling

```
███████╗ █████╗ ██╗  ██╗██╗   ██╗██████╗  █████╗ 
██╔════╝██╔══██╗██║ ██╔╝██║   ██║██╔══██╗██╔══██╗
███████╗███████║█████╔╝ ██║   ██║██████╔╝███████║
╚════██║██╔══██║██╔═██╗ ██║   ██║██╔══██╗██╔══██║
███████║██║  ██║██║  ██╗╚██████╔╝██║  ██║██║  ██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
```

**Plugin Type:** Physical Modeling Synthesizer
**Category:** Generator / Strings / Cinematic
**Official Manual:** [Image-Line Sakura Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Sakura.htm)

---

## 🎯 What is Sakura?

Sakura (Japanese for "Cherry Blossom") is a physical modeling synthesizer dedicated to reproducing string instruments. Unlike sample playback, it simulates the physics of a string: **Contact** (Pluck/Bow), **Vibration** (String model), **Interaction** (Dual strings), **Resonance** (Body), and **Acoustics** (Room). It excels at Kotos, Shamisens, Guitars, Violins, and ethereal textured pads.

**Key Capabilities:**
- **5-Stage Hanami Model:** Contact -> Vibration -> Interaction -> Resonance -> Acoustics.
- **Dual String Engine:** Layer two separate string models.
- **Exciter Control:** Pluck, Bow, Scrap, Hammer, or Noise inputs.
- **Body Simulation:** Resonator to simulate wood, metal, or box size.
- **Damping/Tension:** Control the decay and pitch envelope physics.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **hanami-process-explained.md**
3. Create **parameter-cheat-sheet.md**
4. Load "Default" and adjust the "Decay" and "Damp" knobs to hear the string physics.

### For Sound Designers:
1. Study **creating-realistic-guitars.md**
2. Review **bowed-string-synthesis.md** (Violin/Cello)
3. Learn **exotic-instrument-design.md** (Koto/Sitar)

### For Atmospheric Composers:
1. Study **ambient-string-pads.md**
2. Review **resonator-body-textures.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Exciter:** Input source type.
  - **String 1 & 2:** Mix balance.
  - **Damp:** Brightness decay.
  - **Decay:** Volume decay.
  - **Resonator:** Body character.

- [ ] **hanami-process-explained.md**
  - The 5 stages visualized.

#### 02-Data/parameters/
- [ ] **sakura-params.json**
  ```json
  {
    "plugin_name": "Sakura",
    "category": "Physical Modeling",
    "stages": ["Contact", "Vibration", "Interaction", "Resonance", "Acoustics"]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-realistic-guitars.md**
  - Using "Pluck" exciter.
  - Adjusting pickup position.
  - Using dual strings for chorus effect.

- [ ] **bowed-string-synthesis.md**
  - Using "Noise" or "Scratch" exciter.
  - Slow attack envelope.
  - High resonance body.

- [ ] **broken-piano-fx.md**
  - Using "Hammer" exciter.
  - Detuning String 2.
  - Weird body resonance.

#### 03-Workflows/by-context/
- [ ] **japanese-soundtrack-palette.md**
- [ ] **horror-sound-design.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **string-interaction-physics.md**
  - How mixing two strings creates phasing and realism.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** The Pluck

**Tasks:**
1. Turn off String 2
2. Adjust "Tension" (Pitch env)
3. Adjust "Damp" (Material)
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does the "Position" slider change the tone? (Simulates pluck point: Bridge vs Neck).

### Phase 2: Resonance (Week 2)
**Goal:** The Body

**Tasks:**
1. Enable the Resonator
2. Change modes (Box, Plate, etc.)
3. Create bowed-string-synthesis.md

---

## 📊 Plugin Specifications to Document

### Engine
- Synthesis Type (Waveguide Modeling)
- Polyphony

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the sound so quiet? (Check Exciter level and String Mix).
2. How to make it sustain indefinitely? (Set Decay max, Damp min, use Bowed exciter).

---

## 🔗 Cross-Reference with Other Plugins

Sakura is often used with:
- **Plucked** (Simple version)
- **Fruity Convolver** (Better body simulation)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Sakura/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── hanami-process-explained.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── sakura-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-realistic-guitars.md
│   │   └── bowed-string-synthesis.md
│
└── 04-Reference/
    └── string-interaction-physics.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a "Violin" patch that swells in
- [ ] Design a "Steel String Guitar" that sounds distinct from a "Nylon" one
- [ ] Explain the role of the Resonator in physical modeling

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

## Practical sound design habits
- Always mute effects while diagnosing the core model.
- Use only 3 resonators until the body feels correct, then add more if needed.
- If your sound is too sharp, solve it with hi-cut and damping before using EQ.
- For realistic results, keep modulation depth subtle and slow.

## Maintenance checklist
- Keep output level conservative when testing.
- Check mono compatibility after adjusting spread.
- Log parameter changes so you can reproduce the patch.

## Example naming conventions
- `SAKURA_Pluck_Glass_v01`
- `SAKURA_Bow_Warm_v02`
- `SAKURA_FX_Prepared_v01`

## Sources
- Official manual: https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Sakura.htm
