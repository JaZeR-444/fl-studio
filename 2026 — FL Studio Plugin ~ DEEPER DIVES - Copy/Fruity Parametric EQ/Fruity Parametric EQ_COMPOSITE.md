# Fruity Parametric EQ - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Parametric EQ - The Classic 7-Band

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██████╗  █████╗ ██████╗  █████╗ ███╗   ███╗███████╗████████╗██████╗ ██╗ ██████╗     ███████╗██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗██╔══██╗██╔══██╗██╔══██╗████╗ ████║██╔════╝╚══██╔══╝██╔══██╗██║██╔════╝     ██╔════╝██╔══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██████╔╝███████║██████╔╝███████║██╔██╗ ██║█████╗     ██║   ██████╔╝██║██║          █████╗  ██║  ██║
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██╔═══╝ ██╔══██║██╔══██╗██╔══██║██║╚██╗██║██╔══╝     ██║   ██╔══██╗██║██║          ██╔══╝  ██║  ██║
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██║     ██║  ██║██║  ██║██║  ██║██║ ╚████║███████╗   ██║   ██║  ██║██║╚██████╗    ███████╗╚█████╔╝
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝    ╚══════╝ ╚════╝ 
`\`\`

**Plugin Type:** Parametric Equalizer
**Category:** Filter / Mixing
**Official Manual:** [Image-Line Fruity Parametric EQ Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Parametric%20EQ.htm)

---

## 🎯 What is Fruity Parametric EQ?

**Important:** This is the original Fruity Parametric EQ (PEQ1), *not* the more famous PEQ2 with the spectral visualizer. 

Fruity Parametric EQ 1 is a CPU-efficient 7-band equalizer. While it lacks the fancy spectrogram of its successor, it provides a classic slider-based interface that many "old-school" engineers prefer for quick, non-visual mixing. It forces you to use your ears rather than your eyes. It offers Peaking, Shelf, LP, HP, Notch, and Bandpass filters per band.

**Key Capabilities:**
- **7 Independent Bands:** Each with Frequency, Gain (Amp), and Bandwidth (Q).
- **Multiple Filter Types:** Peaking, Shelf, LP, HP, BP, Notch.
- **Slider Interface:** Vertical sliders for Gain, knobs for Freq/Q.
- **Low CPU:** Extremely lightweight.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **peq1-vs-peq2.md**
3. Create **parameter-cheat-sheet.md**
4. Boost the highs using Band 7 (Shelf) to hear the "air".

### For Mix Engineers:
1. Study **mixing-with-ears.md** (Benefits of no visualizer)
2. Review **notch-filtering.md**
3. Learn **shelving-techniques.md**

### For Sound Designers:
1. Study **telephone-eq-curve.md**
2. Review **automating-sliders.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Freq:** Center frequency.
  - **Amp (Gain):** Boost/Cut amount (-18dB to +18dB).
  - **Bandwidth (Q):** Width of the curve.
  - **Shape:** Filter type selector.

- [ ] **peq1-vs-peq2.md**
  - **PEQ1:** Sliders, No visualizer, "Old School" workflow.
  - **PEQ2:** Dots on graph, Spectrogram, Modern workflow.

#### 02-Data/parameters/
- [ ] **peq1-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Parametric EQ",
    "category": "Equalizer",
    "parameters": [
      {
        "name": "Amp",
        "type": "slider",
        "description": "Gain of the band",
        "use_cases": ["boosting bass", "cutting mud"]
      },
      {
        "name": "Shape",
        "type": "selector",
        "options": ["Peaking", "Low Shelf", "High Shelf", "LP", "HP", "BP", "Notch"]
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **mixing-with-ears.md**
  - Why removing visual bias helps decision making.
  - Sweeping the Freq knob to find resonance, then cutting.

- [ ] **telephone-eq-curve.md**
  - Using HP on Band 1 (400Hz).
  - Using LP on Band 7 (4kHz).
  - Boosting Band 4 (1-2kHz).

- [ ] **notch-filtering.md**
  - Selecting "Notch" shape.
  - Using narrow Bandwidth.
  - Removing 60Hz hum or specific ringing.

#### 03-Workflows/by-context/
- [ ] **vocal-cleanup.md**
- [ ] **bass-sculpting.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **filter-curve-characteristics.md**
  - How steep are the filters? (Usually 12dB/oct or 24dB/oct?).
  - Phase response (IIR vs Linear Phase - PEQ1 is likely IIR only).

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Tonal Balance

**Tasks:**
1. Put PEQ1 on a drum loop
2. Boost the Lows (Band 1 Shelf)
3. Boost the Highs (Band 7 Shelf)
4. Cut the Mids (Band 4 Peaking)
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I reset a slider to 0? (Alt+Click or Middle Click).
- Can I change the slope? (Probably fixed per type).

### Phase 2: Corrective EQ (Week 2)
**Goal:** Surgery

**Tasks:**
1. Create a ringing resonance (Sine wave)
2. Use PEQ1 to notch it out
3. Create notch-filtering.md

**Key Questions to Answer:**
- Is it easier to automate sliders than dots? (Often yes, for fader controllers).

---

## 📊 Plugin Specifications to Document

### Engine
- Bands: 7
- Algorithm: IIR (Infinite Impulse Response)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Where is the spectrum? (There isn't one. Use PEQ2 or Wave Candy if you need to see).
2. Why use this over PEQ2? (CPU, Interface preference, preventing "mixing with eyes").

---

## 📝 Documentation Standards

### For Each Workflow:
- **Band:** 1-7
- **Shape:** Type
- **Freq/Amp/Width:** Settings

---

## 🔗 Cross-Reference with Other Plugins

Fruity Parametric EQ is often used with:
- **Fruity Spectroman** (If you *really* need to see)
- **Fruity Compressor** (Post-EQ dynamics)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Parametric EQ/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── peq1-vs-peq2.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── peq1-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── mixing-with-ears.md
│   │   ├── telephone-eq-curve.md
│   │   └── notch-filtering.md
│
└── 04-Reference/
    └── filter-curve-characteristics.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Mix a vocal track using only PEQ1 (no visualizer)
- [ ] Automate a filter sweep using the sliders
- [ ] Explain the benefit of the "slider" interface vs the "graph" interface

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Parametric EQ

## Purpose & Identity
Fruity Parametric EQ (PEQ1) is a classic, 7-band parametric equalizer. Unlike the modern PEQ2, it features a slider-based interface and **no visual spectrogram**. It is designed for engineers who prefer to make mixing decisions based on what they hear rather than what they see on a graph. [SRC: IL-MAN]

## 60-Second Mental Model
Think of PEQ1 as a physical "console" EQ rack. Each of the 7 sliders corresponds to a specific frequency band. You move the slider up to boost or down to cut. Since there’s no screen telling you where the "peaks" are, you are forced to sweep the frequency knob until your ears tell you the sound is right.

## Hip-Hop / R&B Context
In modern urban production, "Ear-First" mixing is a secret weapon for authenticity.
- **Vocal Pocketing:** Quickly carving out 300Hz-500Hz from a melody to let the vocal sit "inside" the beat.
- **Phone/Radio Filters:** Using Band 1 (HP) and Band 7 (LP) to instantly create that nostalgic lo-fi intro effect.
- **Percussion Snap:** Boosting the 2kHz-5kHz range on a snare drum to make it cut through a heavy R&B mix.

## When To Use
- When you want to **avoid visual bias** (mixing with your eyes).
- When you need a **CPU-light** EQ for large projects with hundreds of tracks.
- When you are using a **MIDI controller with physical faders** (sliders are easier to map than graph dots).

## When NOT To Use
- **Surgical Precision:** Use **PEQ2** or **FabFilter Pro-Q3** if you need to see exactly where a resonant frequency is "ringing."
- **Phase Linear Tasks:** PEQ1 is a standard IIR filter; use a linear-phase EQ for mastering if phase-smearing is a concern. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Parametric EQ

## UI Tour
1.  **7 Frequency Sliders:** The main vertical controls.
    - **Top (Center):** 0dB (No change).
    - **Up:** Boost (up to +18dB).
    - **Down:** Cut (down to -18dB).
2.  **FREQ Knobs (Below Sliders):** Adjusts the center frequency of each band.
3.  **BW (Bandwidth/Q) Knobs:** Controls how "wide" or "narrow" the curve is. [SRC: IL-MAN]
4.  **Shape Selector (Icons):** Click the symbols at the bottom to change filter types (Peaking, Shelf, LP, HP, Notch, BP).

## Functional Flow
1.  **Input:** Audio enters the plugin.
2.  **Series Processing:** The signal passes through Band 1, then Band 2, and so on, until Band 7.
3.  **Coefficient Calculation:** The IIR (Infinite Impulse Response) algorithm calculates the gain/phase shift based on your slider positions.
4.  **Output:** Processed audio is sent to the next mixer slot.

## Things Beginners Misunderstand
- **No Visualizer:** Many beginners open PEQ1 and think it’s "broken" because there’s no waveform. This is a feature, not a bug.
- **Band Overlap:** If you boost 500Hz on Band 3 and cut 500Hz on Band 4, they will cancel each other out.
- **Band 1 & 7 Defaults:** By default, Band 1 is often a Low Shelf and Band 7 is a High Shelf. You must click the icons to change them to High Pass or Low Pass. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Parametric EQ

## 1. The "Blind Sweep" (Corrective EQ)
- **Technique:** Pick an unused band (e.g., Band 4). Set the BW (Q) knob to be very narrow. Boost the slider to +12dB.
- **Execution:** Slowly turn the FREQ knob while the audio plays. Listen for the moment the sound becomes "harsh" or "whistle-like."
- **The Fix:** Once found, pull the slider down to -6dB to "notch out" the problem.

## 2. Low-Shelf Discipline (The 808 Mix)
- **Technique:** Set Band 1 to **Low Shelf**.
- **Execution:** Set Freq to ~100Hz. If your 808 is too loud, pull the slider down slightly instead of using the mixer fader.
- **Why:** This reduces the energy of the bass without losing the "snap" of the higher-frequency harmonics.

## 3. The "Air" Boost (R&B Vocals)
- **Technique:** Set Band 7 to **High Shelf**.
- **Execution:** Set Freq to 12kHz. Set BW to be very wide. Boost the slider by 3-5dB.
- **Result:** Adds a professional "gloss" to melodic rap vocals that makes them sound expensive.

## 4. Automation Risers
- **Technique:** Automate the **FREQ** knob of Band 7 (set to Low Pass).
- **Execution:** During a 4-bar build-up, move the knob from 200Hz up to 20kHz.
- **Benefit:** The slider UI makes it very clear where your "ceiling" is compared to a graph-based EQ. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
- **Pitfall:** "The mix sounds thin/hollow."
  - **Fix:** Check if you accidentally turned on a **High Pass (HP)** filter on Band 1 with a high frequency. 
- **Pitfall:** "Clipping in the mixer."
  - **Fix:** EQ is additive. If you boost multiple bands, you are increasing the total volume. Pull down the **Main Volume** of the mixer track to compensate. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Parametric EQ

EQ is the primary tool for carving the "physical" space of a vibe.

## 1. Moody (Submerged, Dark, Nostalgic)
- **Concept:** Removing the "light" (high frequencies).
- **Levers:**
  - **Band 7 (Low Pass):** Set to 2kHz. Everything will sound like it's in the next room.
  - **Band 2 (Low Mid Boost):** Boost 300Hz by 3dB with a wide Q to add "muddy warmth."
- **Listen For:** A sense of isolation and heaviness.
- **Don't Do This:** Don't boost 5kHz+; it will break the dark immersion.

## 2. Upbeat (Punchy, Bright, Pop)
- **Concept:** Emphasizing the "snap" and transients.
- **Levers:**
  - **Band 1 (High Pass):** Set to 150Hz to remove all rumble.
  - **Band 5 (Presence):** Boost 3kHz-5kHz by 4dB. This makes vocals and snares "pop" forward.
- **Listen For:** Immediate clarity and movement.
- **Don't Do This:** Don't over-boost the sub-bass; it will make the mix "slow."

## 3. Psychedelic (Morphing, Resonance, Liquid)
- **Concept:** Extreme filter shapes and movement.
- **Levers:**
  - **Band 4 (Bandpass):** Use a narrow Q and automate the FREQ knob to sweep across the spectrum.
  - **Notch Chains:** Use two narrow notches (Bands 3 and 5) and automate them moving in opposite directions.
- **Listen For:** "Phasing" sounds and vowel-like movements.
- **Don't Do This:** Avoid flat EQ lines; something should always be moving.

## 4. Jazzy (Organic, Balanced, Acoustic)
- **Concept:** Respecting the natural instrument tone.
- **Levers:**
  - **Band 3 (Wood/Body):** Gentle boost at 400Hz-600Hz for acoustic guitar or sax.
  - **Wide Q Cuts:** Instead of narrow notches, use very wide, shallow cuts (-2dB) to gently push background elements away.
- **Listen For:** Separation where you can hear every instrument's "wood."
- **Don't Do This:** Never use 100% High Pass or Low Pass filters; they sound too "digital" for jazz.

## 5. Vibey (Smooth, Glossy, Modern R&B)
- **Concept:** The "Expensive" High-End.
- **Levers:**
  - **Band 7 (High Shelf):** Gentle 3dB boost at 15kHz ("Air").
  - **The "Mid-Scoop":** Wide, shallow cut at 1kHz. This makes room for the lush reverb and background vocals.
- **Listen For:** A "sheen" that feels polished and high-fidelity.
- **Don't Do This:** Don't leave any "harsh" frequencies in the 2kHz-4kHz range. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\peq1-vs-peq2.md

```markdown
# PEQ vs. PEQ2: Efficiency

Why use the original Parametric EQ when EQ 2 exists?

## 1. CPU Footprint
The original Fruity Parametric EQ is significantly lighter on CPU than its successor. If you have a project with 100+ channels and need a simple high-pass on every track, the original PEQ is a valid choice to save resources.

## 2. The "Dirty" Sound
PEQ 1 uses older filter algorithms that some producers find have a grittier, less "surgical" character than PEQ 2. It can add a subtle coloration that works well for aggressive genres like Dubstep or Industrial.

## 3. Workflow Speed
With fewer visual distractions (no spectrogram), PEQ 1 forces you to use your ears.

```

---

## FILE: 01-Learning\Concepts\signal-flow.md

```markdown
# Signal Flow: Fruity Parametric EQ

Audio passes through 7 distinct filter bands in series (or parallel calculation summed together).

`\`\`mermaid
graph LR
    Input[Input Audio] --> Band1[Band 1: Low Shelf/Cut]
    Band1 --> Band2[Band 2: Peaking]
    Band2 --> Band3[Band 3: Peaking]
    Band3 --> Band4[Band 4: Peaking]
    Band4 --> Band5[Band 5: Peaking]
    Band5 --> Band6[Band 6: Peaking]
    Band6 --> Band7[Band 7: High Shelf/Cut]
    Band7 --> GlobalGain[Output Gain]
    GlobalGain --> Output[Output Audio]
`\`\`

### Stages
1.  **Input**: Audio enters.
2.  **Series Processing**: The signal is shaped by each band sequentially.
3.  **Phase Shift**: Every EQ move introduces slight phase rotation. PEQ1 is a "Minimum Phase" EQ (not Linear Phase).
4.  **Output**: Final signal.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Parametric EQ (5 Minutes)

1.  **Insert:** Load **Fruity Parametric EQ** into any mixer slot.
2.  **Pick a Band:** Start with **Band 1** (Low) or **Band 7** (High).
3.  **Choose Shape:** Click the icons at the bottom. Start with **Shelf** for tonal changes or **HP/LP** for cutting.
4.  **Boost/Cut:** Move the vertical slider up to boost or down to cut.
5.  **Target Frequency:** Turn the **FREQ** knob below the slider until you hear the desired part of the sound change.
6.  **Tip:** Hold **Alt+Click** on a slider to reset it to 0dB (Center). [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity Parametric EQ

- **Mixing with Eyes:** Trying to "guess" where the frequencies are because there's no visualizer. **Fix:** Close your eyes, move the FREQ knob, and stop when it sounds better.
- **Narrow Q Boosting:** Boosting a very narrow bandwidth (high Q) by +10dB. This creates a painful "ringing" or "whistling" sound. **Fix:** Use wide bandwidths for boosts, narrow for cuts.
- **Over-EQing:** Using all 7 bands on every track. **Fix:** Most tracks only need 1 or 2 moves (usually a High Pass and a small Mid cut).
- **Ignoring Phasing:** Drastic HP filters on sub-bass can shift the phase of the kick drum. **Fix:** Use a gentle slope or High Shelf instead of High Pass for bass management.
- **Loudness Confusion:** Not realizing that boosting an EQ band makes the whole track louder. **Fix:** Check your mixer peak meters after ogni EQ move. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points: Fruity Parametric EQ

| Target Sound | Band | Shape | Freq | Gain | Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Thump Kick** | 2 | Peaking | 60Hz | +3dB | Adding weight to a weak kick. |
| **Clean Vocal** | 1 | High Pass | 150Hz | N/A | Removing chest mud/rumble. |
| **Vocal Air** | 7 | High Shelf | 12kHz | +4dB | Adding "Gloss" to R&B vocals. |
| **Melody Pocket**| 4 | Peaking | 500Hz | -4dB | Making room for the lead vocal. |
| **Snare Snap** | 5 | Peaking | 3kHz | +3dB | Adding definition to drum hits. |

*Note: Frequencies are targets—sweep the FREQ knob to find the exact "sweet spot" for your sample.* [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Starting Points: Moody (Fruity Parametric EQ)

- **The Goal:** A submerged, underwater sound common in Drake/40 style hip-hop.
- **Recipe:**
  1. Set **Band 7** to **Low Pass (LP)**.
  2. Turn the FREQ knob down to **800 Hz**.
  3. Set **Band 1** to **High Pass (HP)**.
  4. Turn the FREQ knob up to **200 Hz**.
  5. Boost **Band 3** (Peaking) at **400 Hz** by +2dB with a wide Q.
- **Result:** The melody is trapped in a narrow mid-range "pocket," making it feel distant and melancholic.
- **Mix Tip:** Place a Reverb *after* this EQ to add "atmosphere" to the muffled sound. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey

## Upbeat (The "Mainstream Pop" Look)
- **Settings:** Band 1 HP @ 180Hz, Band 7 High Shelf @ 10kHz (+5dB).
- **Tip:** Drastically cut the 300Hz range on the melody to remove all "thickness," leaving only the "shine."

## Psychedelic (The "Resonant Sweep")
- **Settings:** Band 4 Bandpass (BP), High Q (Narrow).
- **Automation:** Right-click Band 4 FREQ knob -> Create Automation Clip.
- **Effect:** Sweep across the spectrum for a "wah-wah" or "trippy" texture.

## Jazzy (The "Warm Console")
- **Settings:** Band 2 Low Shelf @ 250Hz (+2dB), Band 6 Peaking @ 2kHz (-2dB).
- **Context:** Softens the digital harshness of modern VSTs to make them sound like analog jazz recordings.

## Vibey (The "Expensive Sheen")
- **Settings:** Band 7 High Shelf @ 16kHz (+3dB), Band 4 Peaking @ 1kHz (-3dB, Wide Q).
- **Context:** The classic "smiley face" curve for R&B buses. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Parametric EQ (v1): Cheat Sheet

The legacy 7-band parametric equalizer. While PEQ2 is superior visually, PEQ1 is slightly lower CPU and offers a different "sound" to its curves.

## Parameters

| Parameter | Function | Context / Tip |
| :--- | :--- | :--- |
| **Frequency (Freq)** | The center frequency of the band. | **Tip:** Ranges from 10Hz to 20kHz. |
| **Amount (Gain)** | Boost or Cut level. | **Tip:** Center is 0dB. Up is Boost, Down is Cut. |
| **Bandwidth (BW)** | The width (Q) of the bell curve. | **Tip:** Narrow BW = Surgical cuts. Wide BW = Musical tone shaping. |
| **Band Type** | Shape of the band (Peaking, Low Shelf, High Shelf, etc). | **Tip:** Usually selected via the icons or right-click menu. |
| **Global Gain** | Overall output volume. | **Tip:** Use to compensate if you boost too many frequencies. |

## Quick Reference
*   **Best For:** Simple high-passing, lightweight automation.
*   **Why use it over PEQ2?** Sometimes the fixed bands feel faster to map to a MIDI controller (7 knobs for 7 bands).

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Parametric EQ

| Parameter | Type | Range | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **AMP (Slider)** | Slider | -18dB to +18dB | **Upbeat** (Boost) | **Loudness** | Controls the gain of the selected band. |
| **FREQ** | Knob | 10Hz to 20kHz | **Moody** (Cutoff) | **Presence** | Sets the center/cutoff frequency of the band. |
| **BW (Q)** | Knob | 0 to 100% | **Jazzy** (Wide) | **Precision** | Controls the width of the filter curve. |
| **Filter Shape**| Icons | 7 Types | **Psychedelic** (BP)| **Phase** | Selects the filter type (Shelf, Peak, HP, etc). |

- **Vibe Impact Tag (Moody):** Using Low Pass filters on Band 7 is the primary lever for the "underwater" hip-hop aesthetic.
- **Mix Impact Tag (Clarity):** High Pass filtering on Band 1 is the most common move for cleaning up mix mud. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity Parametric EQ",
  "parameters": [
    {
      "id": "band_1_freq",
      "name": "Band 1 Frequency",
      "type": "knob",
      "range": { "min": 10, "max": 20000, "unit": "Hz" },
      "description": "Center frequency for Band 1."
    },
    {
      "id": "band_1_gain",
      "name": "Band 1 Gain",
      "type": "knob",
      "range": { "min": -18, "max": 18, "unit": "dB" },
      "defaultValue": 0,
      "description": "Boost or cut amount."
    },
    {
      "id": "band_1_bw",
      "name": "Band 1 Bandwidth",
      "type": "knob",
      "range": { "min": 0, "max": 100 },
      "description": "Width of the EQ curve."
    }
  ]
}

```

---

## FILE: 02-Data\presets\mud-cleaner.json

```json
{
  "presetName": "Mud Cleaner",
  "plugin": "Fruity Parametric EQ",
  "description": "Standard cut for cleaning up low-mid resonance.",
  "settings": {
    "band3": {"freq": 350, "gain": -4.0, "bw": 1.5, "type": "Peaking"}
  },
  "usage": "Apply to synth pads or snare drums."
}

```

---

## FILE: 02-Data\presets\old-telephone.json

```json
{
  "presetName": "Old Telephone",
  "plugin": "Fruity Parametric EQ",
  "description": "Band-pass filter to simulate limited bandwidth.",
  "settings": {
    "band1": {"freq": 400, "gain": -18, "bw": 1.0, "type": "High Pass"},
    "band7": {"freq": 3000, "gain": -18, "bw": 1.0, "type": "Low Pass"},
    "band4": {"freq": 1500, "gain": 6, "bw": 0.5, "type": "Peaking"}
  },
  "usage": "Use on vocals or master bus for a lo-fi intro effect."
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Parametric EQ)

## 1. Low-End Discipline (The 808 Rule)
- **Rule:** If the Kick and 808 are clashing, don't just turn them down.
- **Application:** Cut 3dB from the 808 at the Kick's fundamental (usually ~60Hz) using a narrow Q on Band 2. This lets the Kick "poke through" the bass.

## 2. Vocal Air Safety
- **Rule:** R&B vocals need "Air," but too much makes them thin.
- **Application:** Use Band 7 High Shelf @ 12kHz. If the vocal starts sounding "whispery" or loses body, back off the gain.

## 3. The "Pocket" Rule
- **Rule:** The melody must get out of the way of the rap vocal.
- **Application:** On your melody bus, cut 3-5dB in the 1kHz-3kHz range using a wide Q. This is where "intelligibility" lives for the human voice.

## 4. Mono-Check (Phasing)
- **Rule:** Extreme EQ boosts can cause phase shifts that sound weird in mono.
- **Application:** After every major EQ move, hit the **Mono** switch on your Master track. If the sound becomes hollow or weak, reduce the EQ gain.

## 5. Gain Staging
- **Rule:** EQ is a gain-stage.
- **Application:** If you boost the High Shelf by 6dB, the track is now 6dB louder at those frequencies. Reduce the Mixer Fader or the "Main Vol" within the plugin to maintain consistent levels. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity Parametric EQ

## 1. The "Old School" Low Cut
**Goal:** Clean up mud using Band 1.

1.  Select **Band 1**.
2.  Set Type to **Low Cut** (High Pass) or **Low Shelf**.
3.  Drag the Frequency knob to around 100-200Hz.
4.  Reduce the Gain (if Shelf) essentially "killing" the bass.

## 2. Automating a Telephone Filter
**Goal:** Transition effect.

1.  Use **Band 1** as a High Pass (Low Cut).
2.  Use **Band 7** as a Low Pass (High Cut).
3.  Create an Automation Clip for the **Frequency** of both bands.
4.  Start with them wide open.
5.  Automate them to close in on the center (1kHz - 3kHz).
    *   *Result:* The sound gets "smaller" and thinner, like moving away into a distance or through a phone.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Telephone / Radio Effect (PEQ1)

## Step-by-Step Setup
1.  Load **Fruity Parametric EQ**.
2.  **Band 1 (HP):** Set to High Pass. Freq @ **400 Hz**. (Removes all bass/body).
3.  **Band 7 (LP):** Set to Low Pass. Freq @ **3.5 kHz**. (Removes all high-end air).
4.  **Band 4 (Presence):** Set to Peaking. Freq @ **1.5 kHz**. Boost by **+6dB**. (Adds the nasal "speaker" sound).
5.  **Band 5:** Boost **2.5 kHz** by **+3dB** for extra harshness.

## Context Application
- **Hip-Hop Intro:** Perfect for making a vocal intro sound like a phone call or an old radio broadcast.
- **Vibe:** Moody/Psychedelic.

## Automation Idea
- Automate the **Mix Level** of the plugin slot so the "Radio" effect slowly fades into the full-fidelity song as the beat drops. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Shaping_And_Control.md

```markdown
# Goal: Mixing with Ears (The PEQ1 Philosophy)

## The Concept
Modern mixing relies too heavily on looking at spectrograms. PEQ1 forces you to focus on the **tone** rather than the **picture**.

## Step-by-Step Setup
1.  Load **Fruity Parametric EQ**.
2.  **Close your eyes.** (Seriously).
3.  Select a band (e.g., Band 4). 
4.  Move the slider up to **+6dB**.
5.  Slowly turn the **FREQ** knob from left to right.
6.  **Stop** when the sound feels "right" or when you find a frequency that sounds unpleasant.
7.  Adjust the **BW (Q)** knob to refine the shape.
8.  Pull the slider down to your final setting.

## Vibe Check
- **Jazzy/Vibey:** This technique results in more musical decisions that "fit" the groove, rather than just chasing a flat frequency line.

## Variation
- **A/B Comparison:** Toggle the plugin on/off using the green light in the mixer. If you can't hear a clear improvement, you've over-EQ'd. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-instrument\bass.md

```markdown
# Workflow: 808 & Kick Pocketing (PEQ1)

## The Concept
Carving out space so your low-end feels "locked in" and punchy.

## Step-by-Step
1.  Load PEQ1 on the **808 Mixer Track**.
2.  **Band 1 (High Pass):** Set to 30Hz. (Kills sub-rumble that speakers can't play).
3.  **Band 2 (The Pocket):** Set to Peaking. Freq @ **60 Hz** (or wherever your Kick hits).
4.  **Cut:** Pull the slider down to **-4dB**. 
5.  **Band 3 (The Knock):** Boost **100 Hz** by **+2dB** to add "punch" to the 808.

## Vibe Check
- **Upbeat:** This creates a tight, aggressive low-end that makes people want to move.
- **Mono Check:** Ensure your Master is in mono while doing this to check for phase-cancellation.

## Pitfalls
- **Over-Cutting:** If you cut too much at 60Hz, the 808 will lose its power. Keep cuts subtle (-3dB to -6dB). [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-instrument\drums.md

```markdown
# Instrument: Drums

Using the original PEQ on drums.

## Kick
- **Band 1**: Low shelf boost at 80Hz.
- **Band 3**: Dip at 400Hz to remove "cardboard" sound.
- **Band 7**: High shelf boost at 5kHz for click.

## Snare
- **Band 1**: High pass at 100Hz.
- **Band 4**: Boost at 200Hz for body.
- **Band 6**: Boost at 5kHz for snap.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Parametric EQ (PEQ1)

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Parametric EQ.
- **Key Info:** 7-band architecture, IIR filter logic, slider-based UI description.

## Source ID: [SRC: IL-KB]
- **Source:** Image-Line Knowledge Base - "EQ and Phase."
- **Key Info:** Explanation of how IIR filters shift phase and why PEQ1 is different from Linear Phase EQs.

## Source ID: [SRC: REPUTABLE]
- **Source:** "Sound On Sound" - The Art of EQ (Article Archive).
- **Key Info:** Philosophy of non-visual mixing, using narrow Q for cuts and wide Q for boosts, and common instrument frequency ranges.

## Coverage Checklist
- [x] Legacy PEQ1 vs PEQ2 Comparison
- [x] 7-Band Filter Type Definitions
- [x] 808/Kick Pocketing Workflow
- [x] Telephone Effect Recipe
- [x] 5 Vibe Targets (Moody, Upbeat, Psychedelic, Jazzy, Vibey)
- [x] Mono-Check Safety Rules

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity Parametric EQ

## 1. The "Submerged" Drake Vibe
- **Mix Decision:** Heavy Low-Pass filtering at 1kHz.
- **Vibe:** Moody/Dark.
- **Tooling:** Band 7 LP + wide Mid-boost.

## 2. The "Crisp" Pop-Rap Snare
- **Mix Decision:** High-frequency boost at 5kHz for "crack."
- **Vibe:** Upbeat/Aggressive.
- **Tooling:** Band 6 Peaking + Band 1 HP @ 200Hz.

## 3. The "Expensive" R&B Silk
- **Mix Decision:** 15kHz High-Shelf boost for "Air."
- **Vibe:** Vibey/Glossy.
- **Tooling:** Band 7 Shelf + Wide 1kHz cut.

## 4. The "Vintage" Lo-Fi Beat
- **Mix Decision:** Band-pass filter (High-pass + Low-pass) to simulate limited frequency response.
- **Vibe:** Moody/Jazzy.
- **Tooling:** Band 1 HP @ 300Hz + Band 7 LP @ 4kHz.

```

---

