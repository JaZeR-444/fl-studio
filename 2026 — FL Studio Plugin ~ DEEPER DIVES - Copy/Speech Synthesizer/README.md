# Speech Synthesizer - Text-to-Audio Engine

```
███████╗██████╗ ███████╗███████╗ ██████╗██╗  ██╗
██╔════╝██╔══██╗██╔════╝██╔════╝██╔════╝██║  ██║
███████╗██████╔╝█████╗  █████╗  ██║     ███████║
╚════██║██╔═══╝ ██╔══╝  ██╔══╝  ██║     ██╔══██║
███████║██║     ███████╗███████╗╚██████╗██║  ██║
╚══════╝╚═╝     ╚══════╝╚══════╝ ╚═════╝╚═╝  ╚═╝

███████╗██╗   ██╗███╗   ██╗████████╗██╗  ██╗███████╗███████╗██╗███████╗███████╗██████╗ 
██╔════╝╚██╗ ██╔╝████╗  ██║╚══██╔══╝██║  ██║██╔════╝██╔════╝██║╚══███╔╝██╔════╝██╔══██╗
███████╗ ╚████╔╝ ██╔██╗ ██║   ██║   ███████║█████╗  ███████╗██║  ███╔╝ █████╗  ██████╔╝
╚════██║  ╚██╔╝  ██║╚██╗██║   ██║   ██╔══██║██╔══╝  ╚════██║██║ ███╔╝  ██╔══╝  ██╔══██╗
███████║   ██║   ██║ ╚████║   ██║   ██║  ██║███████╗███████║██║███████╗███████╗██║  ██║
╚══════╝   ╚═╝   ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚══════╝╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Text-to-Speech Utility / Generator
**Category:** Utility / Creative / Voice
**Official Manual:** [Image-Line Speech Synthesizer Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Speech%20Synthesizer.htm)

---

## 🎯 What is Speech Synthesizer?

Speech Synthesizer is a built-in tool that converts typed text into computerized or vocoder-like vocal samples. It functions as a pop-up dialog that renders a `.SPEECH` file (which is compatible with Sampler, Granulizer, and Slicex). It is ideal for creating "Robot" vocals, 90s-style house voiceovers, or narrations directly within your project without needing external voice actors.

**Key Capabilities:**
- **Text-to-Audio:** Transform any phrase into an audible speech sample.
- **Voice Personalities:** Choose from different vocal characters (Classic, Giant, etc.).
- **Intonation Styles:** Natural, Monotone/Sing, or Random pitch variations.
- **Mode Selection:** Normal, Breathy, or Whispered voice textures.
- **Pitch/Rate Control:** Adjust speed and musical pitch in semitones/octaves.
- **Plugin Integration:** Renders directly into Sampler or Fruity Slicer for instant use.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **speech-dialog-parameters.md**
3. Create **parameter-cheat-sheet.md**
4. Open the tool (Add -> Speech), type "Welcome to FL Studio," and hit "Listen."

### For Sound Designers:
1. Study **creating-robotic-voiceovers.md**
2. Review **breath-and-whisper-textures.md**
3. Learn **advanced-pitch-syntax.md** (Per-word pitch control)

### For Electronic Producers:
1. Study **90s-rave-vocal-stabs.md**
2. Review **slicing-speech-samples.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Text Box:** Input area.
  - **Voice:** Personality selector.
  - **Style:** Intonation type.
  - **Mode:** Normal/Breathy/Whisper.
  - **Pitch/Rate:** Musicality and Speed.

- [ ] **per-word-pitch-syntax.md**
  - How to use the `(C5)`, `(F#4)` syntax inside the text box to change individual word pitches.

#### 02-Data/presets/
- [ ] **voice-personality-library.json**
  - List of all built-in voices and their sonic characteristics.

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **singing-robot-effect.md**
  - Using "Monotone/Sing" style.
  - Setting specific pitches for a short melody.
  - Exporting to Granulizer for "robotic" sustain.

- [ ] **scary-demon-voice.md**
  - Using "Giant" personality.
  - Lowering Pitch by 1-2 octaves.
  - Selecting "Breathy" mode.

- [ ] **vintage-computer-narration.md**
  - Classic voice.
  - Fast rate.
  - Monotone style.

#### 03-Workflows/by-context/
- [ ] **tutorial-intro-generation.md**
- [ ] **idm-glitch-speech-slicing.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **speech-file-format-compatibility.md**
  - Why `.SPEECH` files are special (embedded text/data).
  - Opening them in Fruity Scratcher.

---

## 🔬 Research Framework

### Phase 1: Basic Generation (Week 1)
**Goal:** Audible Speech

**Tasks:**
1. Generate a basic sentence
2. Test every "Style" (Natural vs Sing)
3. Compare the "Normal" mode vs "Whisper"
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Can I render to a WAV file directly? (Usually renders to a special FL format first).
- Does it support foreign languages?

### Phase 2: Per-Word Control (Week 2)
**Goal:** Musicality

**Tasks:**
1. Use the parenthesis syntax to make a voice "speak" a melody
2. Adjust the Rate to match a specific BPM (if possible manually)
3. Create per-word-pitch-syntax.md

---

## 📊 Plugin Specifications to Document

### Engine
- Synthesis Type (Formant/Phonetic?)
- Output Formats (.SPEECH)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Where did my sample go? (Check the "Audio Clips" tab or the Channel Rack).
2. How do I change the voice after I already hit OK? (You must re-open the dialog; it is a "render" process, not a live generator).

---

## 🔗 Cross-Reference with Other Plugins

Speech Synthesizer is often used with:
- **Fruity Slicer** (The default destination)
- **Fruity Granulizer** (For "stretching" speech)
- **Vocodex** (Feeding speech into a vocoder)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Speech Synthesizer/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── per-word-pitch-syntax.md ⭐ HIGH PRIORITY
│
├── 02-Data/
│   ├── parameters/
│   │   └── voice-personality-library.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── singing-robot-effect.md
│   │   └── scary-demon-voice.md
│
└── 04-Reference/
    └── speech-file-format-compatibility.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Generate a vocal phrase that "sings" a specific 3-note melody
- [ ] Create a "Whispered" vocal sample that remains intelligible
- [ ] Explain the difference between `.SPEECH` files and standard `.WAV`
- [ ] Successfully slice and re-order a synthesized phrase in Fruity Slicer

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
