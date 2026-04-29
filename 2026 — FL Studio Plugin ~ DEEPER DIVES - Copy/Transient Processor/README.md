# Transient Processor - Peak Dynamics Shaper

```
████████╗██████╗  █████╗ ███╗   ██╗███████╗██╗███████╗███╗   ██╗████████╗    ██████╗ ██████╗  ██████╗  ██████╗███████╗███████╗███████╗ ██████╗ ██████╗ 
╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██║██╔════╝████╗  ██║╚══██╔══╝    ██╔══██╗██╔══██╗██╔═══██╗██╔════╝██╔════╝██╔════╝██╔════╝██╔═══██╗██╔══██╗
   ██║   ██████╔╝███████║██╔██╗ ██║███████╗██║█████╗  ██╔██╗ ██║   ██║       ██████╔╝██████╔╝██║   ██║██║     █████╗  ███████╗███████╗██║   ██║██████╔╝
   ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██║██╔══╝  ██║╚██╗██║   ██║       ██╔═══╝ ██╔══██╗██║   ██║██║     ██╔══╝  ╚════██║╚════██║██║   ██║██╔══██╗
   ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║███████╗██║ ╚████║   ██║       ██║     ██║  ██║╚██████╔╝╚██████╗███████╗███████║███████║╚██████╔╝██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝       ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝
```

**Plugin Type:** Transient Shaper / Dynamic Multiplier
**Category:** Effect / Dynamics / Mixing
**Official Manual:** [Image-Line Transient Processor Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Transient%20Processor.htm)

---

## 🎯 What is Transient Processor?

Transient Processor is a unique dynamics plugin that amplifies or suppresses the **Attack** and **Release** portions of a sound independently of its volume level. Unlike a compressor (which relies on a threshold), Transient Processor uses an **Input Envelope Follower (IEF)** to identify peaks and tails. It is the ultimate tool for adding "snap" to a snare, making a kick drum "thump," or removing unwanted room reverb from a vocal.

**Key Capabilities:**
- **Threshold-Independent:** Works consistently regardless of the signal volume.
- **Attack Boost/Cut:** Add punch or soften sharp transients.
- **Release Boost/Cut:** Increase sustain or tighten up noisy tails.
- **Split Frequency:** Removes low frequencies from the processing path to prevent distortion.
- **Drive Control:** Adds saturation to the processed transients.
- **Visual Histogram:** See real-time transient detection and processing intensity.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **transient-vs-compression.md**
3. Create **parameter-cheat-sheet.md**
4. Put it on a Drum Bus and turn the "Attack" knob to 100% to hear the "snap."

### For Mix Engineers:
1. Study **making-drums-cut-through.md**
2. Review **tightening-reverberant-samples.md**
3. Learn **low-frequency-split-protection.md**

### For Sound Designers:
1. Study **vocal-impact-enhancement.md**
2. Review **softening-synth-stabs.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Attack:** Gain for the start of the sound.
  - **Release:** Gain for the tail of the sound.
  - **Split Freq:** Crossover for transient detection.
  - **Drive:** Saturation amount.
  - **Mix:** Dry/Wet balance.

- [ ] **transient-vs-compression.md**
  - Why Transient Processor is more "forgiving" than a compressor.
  - No Threshold, No Ratio, No Lookahead artifacts.

#### 02-Data/parameters/
- [ ] **transient-processor-params.json**
  ```json
  {
    "plugin_name": "Transient Processor",
    "category": "Dynamics",
    "features": ["IEF detection", "Frequency split", "Independent release"]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **the-ultimate-punchy-snare.md**
  - Setting Attack to +6dB.
  - Reducing Release to -3dB to remove ring.
  - Adjusting Split Freq to keep the "thump" clean.

- [ ] **removing-room-noise.md**
  - Use case: A vocal recording with too much reverb.
  - Solution: Reduce Release until the tail disappears.
  - Balancing Attack to keep the consonants clear.

- [ ] **fattening-a-kick.md**
  - Boosting Release to bring up the low-end sub-tail.
  - Adding subtle Drive for harmonic presence.

#### 03-Workflows/by-context/
- [ ] **acoustic-drum-cleanup.md**
- [ ] **percussion-layering-glue.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **ief-detection-logic.md**
  - How the plugin identifies what is an "Attack" vs a "Release."

---

## 🔬 Research Framework

### Phase 1: Attack & Release (Week 1)
**Goal:** Identifying Components

**Tasks:**
1. Put Transient Processor on a Drum Loop
2. Maximize Attack, minimize Release
3. Minimize Attack, maximize Release
4. Note the audible difference
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does the "Split Freq" knob change the distortion in the low end?
- What does the "Drive" knob sound like on a snare?

### Phase 2: Precision Mixing (Week 2)
**Goal:** Cleanup

**Tasks:**
1. Find a sample with a long tail (e.g., a cymbal or piano)
2. Tighten the tail using only the Release knob
3. Compare to using a standard Gate
4. Create removing-room-noise.md

---

## 📊 Plugin Specifications to Document

### Engine
- Latency (0 ms?)
- Frequency Range

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it distorting? (Check the Split Freq and Drive settings; transients might be hitting 0dB hard).
2. Can I use this on the Master? (Possible, but usually too aggressive. Better for buses).

---

## 🔗 Cross-Reference with Other Plugins

Transient Processor is often used with:
- **Fruity Limiter** (Final peak control)
- **Soundgoodizer** (Post-shaping enhancement)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Transient Processor/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── transient-vs-compression.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── transient-processor-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── the-ultimate-punchy-snare.md
│   │   └── removing-room-noise.md
│
└── 04-Reference/
    └── ief-detection-logic.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Successfully remove room reverb from a dry vocal track
- [ ] Add 100% more "click" to a kick drum without changing its EQ
- [ ] Explain why "Split Frequency" is necessary for low-end transients
- [ ] Distinguish between Transient Processing and standard Gating

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
