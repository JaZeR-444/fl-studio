# 🎚️ PEQ2: The Master Field Manual (v5.0)

**THE COMPLETE TECHNICAL REFERENCE**
*Data derived from internal Mainframe JSON models and DSP specifications.*

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PRINT THIS DOCUMENT | KEEP AT YOUR WORKSTATION | REFERENCE CONSTANTLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 📋 How to Use This Cheat Sheet

**This is your fast-reference guide.** Keep it printed at your workstation for instant frequency lookups.

**When you need more detail:**
- 🧬 **Deep Learning:** See [00-START-HERE.md](./00-START-HERE.md) for the complete curriculum
- 📖 **Full Overview:** See [README.md](./README.md) for repository navigation
- 🎯 **Step-by-Step Workflows:** See [`03-Workflows/`](./03-Workflows/) for diagnostic guides
- 📊 **JSON Data:** See [`02-Data/`](./02-Data/) for machine-readable data models
- 🔧 **Technical Specs:** See [`04-Reference/technical-docs/`](./04-Reference/technical-docs/) for DSP deep-dives
- 🎨 **Band Guides:** See [`01-Learning/Band-Guide/`](./01-Learning/Band-Guide/) for individual band mastery

---

## 📖 Table of Contents

- **[Section 0: The 7-Band Quick Reference](#-section-0-the-7-band-quick-reference)** - Color-coded frequency toolkit
- **[Section 1: Master Frequency Dictionary](#-section-1-master-frequency-dictionary)** - Instrument-specific targets
- **[Section 2: The Diagnostic Algorithm](#-section-2-the-diagnostic-algorithm-symptom-solver)** - Symptom → solution mapping
- **[Section 3: Technical Conversion Tables](#-section-3-technical-conversion-tables)** - BW% to Q-factor, musical tuning
- **[Section 4: Power User Controls](#-section-4-power-user-controls)** - Shortcuts, options, DSP modes
- **[Section 5: Essential Workflows](#-section-5-essential-workflows-quick-protocol-summary)** - Common EQ chains
- **[Section 6: Context-Specific Gain Limits](#-section-6-context-specific-gain-limits)** - Track/Bus/Master rules
- **[Section 7: Quick Navigation](#-section-7-quick-navigation-to-deeper-resources)** - Links to all guides
- **[Golden Rules](#-golden-rules-memorize-these)** - The 10 commandments of EQ

---

## 🎨 SECTION 0: THE 7-BAND QUICK REFERENCE
*Your color-coded frequency toolkit. Know these by heart.*

| Band | Color | Zone | Freq Range | Primary Role | Quick Action |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **1** | 🟣 Purple | **Sub/Foundation** | 20-120 Hz | High-Pass Filter, rumble removal | HP @ 80 Hz on non-bass tracks |
| **2** | 🌸 Pink | **Warmth/Mud** | 140-320 Hz | Body control, mud removal | Cut -2dB @ 250 Hz to clean |
| **3** | 🟠 Orange | **Boxiness** | 300-550 Hz | Room resonance, cardboard tone | Cut -3dB @ 400-450 Hz |
| **4** | 🟡 Yellow | **Nasal/Honk** | 600-1200 Hz | Midrange aggression, "telephone" | Cut -2dB @ 850 Hz for smoothness |
| **5** | 🟢 Green | **Presence** | 1800-3200 Hz | Intelligibility, lyric clarity | Boost +2dB @ 2500 Hz for vocals |
| **6** | 🔵 Teal | **Detail** | 3500-6500 Hz | Crispness, attack, sibilance | Cut -2dB @ 4.5 kHz to tame harsh |
| **7** | 💙 Blue | **Air/Polish** | 8000-16000 Hz | Studio sheen, openness | Shelf +2dB @ 12 kHz for gloss |

**Deep Dive:** Each band has a dedicated guide in [`01-Learning/Band-Guide/`](./01-Learning/Band-Guide/)

**Key Concept:** FL Studio uses an **inverted BW% scale**: 0% = widest, 100% = narrowest. See Section 3 for conversion table.

---

## 🎹 SECTION 1: MASTER FREQUENCY DICTIONARY
*Specific frequency targets for surgical mixing. Gain values are starting points.*
*For complete instrument guides, see [`04-Reference/frequency-charts/instrument-frequency-ranges.md`](./04-Reference/frequency-charts/instrument-frequency-ranges.md)*

### 🥁 Drums & Percussion
| Source | **Sub/Weight (Band 1/2)** | **Mud/Boxiness (Band 2/3)** | **Attack/Click (Band 5/6)** | **Air/Snap (Band 7)** |
| :--- | :--- | :--- | :--- | :--- |
| **Acoustic Kick** | **60 Hz** (+2dB Bell) - *The Thump* | **250 Hz** (-3dB) - *Mud*<br>**400 Hz** (-3dB) - *Boxy* | **3-5 kHz** (+2dB) - *Beater Click* | - |
| **Electronic Kick** | **45-55 Hz** (+1dB) - *Fundamental* | **200 Hz** (-2dB) - *Boxiness* | **2 kHz** (+1.5dB) - *Digital Click* | - |
| **Snare Drum** | **200 Hz** (+2dB) - *Body/Fatness* | **400 Hz** (-3dB) - *Cardboard*<br>**800 Hz** (-1dB) - *Ring* | **5 kHz** (+2dB) - *Crack/Snap* | **10 kHz** (Shelf) - *Wires* |
| **Hi-Hats** | **300 Hz** (HP Filter) - *Clutter* | **500-800 Hz** (-2dB) - *Cheapness* | **8-10 kHz** (+1dB) - *Stick Definition* | **14 kHz** (+2dB) - *Sizzle* |
| **Toms** | **80-100 Hz** (+1dB) - *Boom* | **300 Hz** (-4dB) - *The "Beach Ball" Sound* | **4 kHz** (+2dB) - *Stick Attack* | - |
| **Cymbals** | **350 Hz** (HP Filter) | **1 kHz** (-2dB) - *Clang/Gong* | **6-8 kHz** (-1dB) - *Harshness* | **12 kHz** (+1dB) - *Shimmer* |

### 🎸 Bass & Guitars
| Source | **Sub/Foundation** | **Mud/Honk** | **Presence/Bite** | **Detail/Air** |
| :--- | :--- | :--- | :--- | :--- |
| **Bass Guitar** | **40 Hz** (HP) - *Rumble*<br>**80-100 Hz** (+1dB) - *Solid* | **200 Hz** (-2dB) - *Mud* | **800 Hz** (+2dB) - *Finger Pluck* | **2.5 kHz** (+1dB) - *Pick Noise* |
| **808 / Sub** | **20-30 Hz** (HP) - *Headroom*<br>**40-60 Hz** (+1dB) - *Weight* | **180 Hz** (-2dB) - *Boxy Harmonics* | - | - |
| **Acoustic Gtr** | **80 Hz** (HP) - *Rumble*<br>**150 Hz** (+1dB) - *Body* | **400 Hz** (-3dB) - *Room Resonance* | **3-5 kHz** (+1.5dB) - *Strum/Pick* | **12 kHz** (+2dB) - *Sparkle* |
| **Electric Gtr** | **100 Hz** (HP) | **300 Hz** (-2dB) - *Mud*<br>**800 Hz** (-1dB) - *Honk* | **1.5 kHz** (+2dB) - *Bite*<br>**3 kHz** (+1dB) - *Cut* | **4 kHz** (-1dB) - *Fizz* |

### 🎤 Vocals & Keys
| Source | **Foundation** | **Problem Area** | **Intelligibility** | **Polish** |
| :--- | :--- | :--- | :--- | :--- |
| **Male Vocal** | **80-100 Hz** (HP)<br>**180 Hz** (+1dB) - *Chest* | **350 Hz** (-2dB) - *Muffled*<br>**850 Hz** (-1dB) - *Nasal* | **2.5 kHz** (+2dB) - *Lyrics* | **4.5 kHz** (+1dB) - *Presence*<br>**10 kHz** (Shelf) - *Air* |
| **Female Vocal** | **100-120 Hz** (HP)<br>**200 Hz** (+1dB) - *Body* | **400 Hz** (-2dB) - *Boxy*<br>**1 kHz** (-1dB) - *Honk* | **3 kHz** (+1.5dB) - *Definition* | **5.5 kHz** (+1dB) - *Edge*<br>**12 kHz** (Shelf) - *Sheen* |
| **Piano** | **80 Hz** (HP) | **300 Hz** (-3dB) - *Midrange Pileup* | **2-4 kHz** (+1dB) - *Hammer* | **10 kHz** (+2dB) - *Openness* |
| **Synths/Pads** | **150 Hz** (HP) | **400 Hz** (-2dB) - *Cloud* | **1.5 kHz** (+1dB) - *Texture* | **8 kHz+** (Shelf) - *Gloss* |

---

## 🩺 SECTION 2: THE DIAGNOSTIC ALGORITHM (Symptom Solver)
*Derived from [`02-Data/rules/symptom-solutions.json`](./02-Data/rules/symptom-solutions.json). Use this logic to fix broken mixes.*
*For detailed workflows, see [`03-Workflows/by-symptom/`](./03-Workflows/by-symptom/)*

| Symptom | **Diagnosis** | **The Fix (Action)** | **Band** | **BW %** | **Workflow Link** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **"Muddy / Cloudy"** | Excessive energy in low-mids. | **Cut -2.5dB @ 250 Hz** | Band 2 (Pink) | 35% (Wide) | [Guide](./03-Workflows/by-symptom/muddy-cloudy-fix.md) |
| **"Boxy / Cardboard"** | Small room resonance masking tone. | **Cut -3dB @ 400-450 Hz** | Band 3 (Orange) | 50% (Medium) | [Guide](./03-Workflows/by-symptom/boxy-cardboard-fix.md) |
| **"Nasal / Honky"** | "Pinched nose" sound in vocals. | **Cut -2dB @ 850 Hz** | Band 4 (Yellow) | 60% (Med-Narrow) | [Guide](./03-Workflows/by-symptom/nasal-honk-fix.md) |
| **"Harsh / Painful"** | Ear fatigue on high notes. | **Cut -2dB @ 4.5 kHz** | Band 6 (Teal) | 65% (Narrow) | [Guide](./03-Workflows/by-symptom/harsh-fatigue-fix.md) |
| **"Sibilant" (Esses)** | Sharp "S" or "T" sounds. | **Cut -2dB @ 6-7 kHz** | Band 6 (Teal) | 70% (Narrow) | [Guide](./03-Workflows/by-symptom/harsh-fatigue-fix.md) |
| **"Dull / Boring"** | Lacks modern studio sheen. | **Shelf +2dB @ 12 kHz** | Band 7 (Blue) | 20% (Wide) | [Band 7 Guide](./01-Learning/Band-Guide/band-7-air-polish.md) |
| **"Buried / Unclear"** | Can't hear lyrics/lead. | **Boost +1.5dB @ 2.5 kHz** | Band 5 (Green) | 50% (Medium) | [Band 5 Guide](./01-Learning/Band-Guide/band-5-presence.md) |
| **"Rumble / Pumping"** | Invisible lows hitting limiter. | **High Pass @ 80 Hz** | Band 1 (Purple) | 25% (Steep) | [Guide](./03-Workflows/by-symptom/rumble-headroom-fix.md) |
| **"Thin / Weak"** | Lacks body and weight. | **Boost +1.5dB @ 200 Hz** | Band 2 (Pink) | 25% (Wide) | [Guide](./03-Workflows/by-symptom/thin-weak-fix.md) |

**Note:** BW % is FL Studio's inverted scale (0% = widest, 100% = narrowest). See Section 3 for Q-factor conversion.

---

## 📐 SECTION 3: TECHNICAL CONVERSION TABLES

### Bandwidth (Q) Rosetta Stone
*FL Studio uses an **Inverted Percentage** scale. 0% is Wide, 100% is Narrow.*

| **FL BW %** | **Standard Q** | **Octave Width** | **Application** |
| :--- | :--- | :--- | :--- |
| **10%** | 0.4 | ~3.0 Oct | **Mastering Tone.** Broad, transparent tilting of the spectrum. |
| **25%** | 0.7 | ~2.0 Oct | **Musical Boosts.** The most natural sounding boost. |
| **50%** | 1.4 | ~1.0 Oct | **Corrective Cuts.** De-mudding, de-boxing. |
| **65%** | 2.8 | ~0.5 Oct | **Surgical.** Removing a specific musical note. |
| **85%+** | 8.0+ | ~0.1 Oct | **Notching.** Killing feedback, whistles, electrical hum. |

### Musical Tuning Map (Hz to Note)
*Tune your EQ boosts to the key of the song for maximum resonance.*

| Note | Bass (Oct 1) | Body (Oct 2) | Mid (Oct 3) | Pres (Oct 4) | High (Oct 5) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **C** | 32.7 Hz | 65.4 Hz | 130.8 Hz | 261.6 Hz | 523.3 Hz |
| **C#** | 34.6 Hz | 69.3 Hz | 138.6 Hz | 277.2 Hz | 554.4 Hz |
| **D** | 36.7 Hz | 73.4 Hz | 146.8 Hz | 293.7 Hz | 587.3 Hz |
| **D#** | 38.9 Hz | 77.8 Hz | 155.6 Hz | 311.1 Hz | 622.3 Hz |
| **E** | 41.2 Hz | 82.4 Hz | 164.8 Hz | 329.6 Hz | 659.3 Hz |
| **F** | 43.7 Hz | 87.3 Hz | 174.6 Hz | 349.2 Hz | 698.5 Hz |
| **F#** | 46.2 Hz | 92.5 Hz | 185.0 Hz | 370.0 Hz | 740.0 Hz |
| **G** | 49.0 Hz | 98.0 Hz | 196.0 Hz | 392.0 Hz | 784.0 Hz |
| **G#** | 51.9 Hz | 103.8 Hz | 207.7 Hz | 415.3 Hz | 830.6 Hz |
| **A** | 55.0 Hz | 110.0 Hz | 220.0 Hz | 440.0 Hz | 880.0 Hz |
| **A#** | 58.3 Hz | 116.5 Hz | 233.1 Hz | 466.2 Hz | 932.3 Hz |
| **B** | 61.7 Hz | 123.5 Hz | 246.9 Hz | 493.9 Hz | 987.8 Hz |

---

## 🔧 SECTION 4: POWER USER CONTROLS

### 🖱️ Mouse Modifiers
*   **Shift + Scroll:** Move Band Frequency (Left/Right) - *The best way to sweep.*
*   **Alt + Scroll:** Move Band Gain (Up/Down) - *Precise level control.*
*   **Ctrl + Drag:** Precision Mode - *Slows down movement for fine-tuning.*
*   **Right-Click Token:** Quick Menu (Change Shape, Reset, Order).
*   **Shift + Click Token:** **SOLO BAND.** - *The most important feature. Hear ONLY that frequency.*

### 📊 Hidden "Options" Menu (Hamburger Icon)
1.  **Histogram Range > 90dB:** **ENABLE THIS.** The default 60dB view hides noise floors and reverb tails. 90dB shows you the truth.
2.  **Key Tracking:** Enables MIDI note input to shift EQ bands. (See [`04-Reference/integration-guides/key-tracking-eq.md`](./04-Reference/integration-guides/key-tracking-eq.md))
3.  **High Precision Monitor:** Increases CPU usage but makes the heatmap refresh faster and with higher resolution.

### 💎 DSP Modes
*   **STD (Standard):** IIR Filters. Zero Latency. Phase smearing. **Use for Mixing/Tracking.**
*   **LIN (Linear Phase):** FFT Filters. High Latency. Pre-ringing. Zero Phase Shift. **Use for Mastering/Parallel.**
*   **HQ (High Quality):** Oversampling. Prevents high-frequency cramping near 20kHz. **Always ON.**

**Deep Dive:** See [`04-Reference/technical-docs/dsp-characteristics.md`](./04-Reference/technical-docs/dsp-characteristics.md) for complete DSP theory.

---

## ⚡ SECTION 5: ESSENTIAL WORKFLOWS (Quick Protocol Summary)
*For detailed step-by-step guides, see [`03-Workflows/`](./03-Workflows/)*

### 🎤 The Universal Vocal Polish (4 Steps)
*Full workflow: [`03-Workflows/by-instrument/vocal-lead-workflow.md`](./03-Workflows/by-instrument/vocal-lead-workflow.md)*

1. **Clean:** Band 1 (HP @ 100 Hz) - Remove rumble
2. **Clear:** Band 2 (Cut -2dB @ 250 Hz) - Remove mud
3. **Present:** Band 5 (Boost +2dB @ 2500 Hz) - Add intelligibility
4. **Shine:** Band 7 (Shelf +2dB @ 12 kHz) - Add air

**Result:** Vocals sit on top of the mix, clear and modern.

---

### 🥁 Kick Drum Foundation Protocol
*Full workflow: [`03-Workflows/by-instrument/kick-drum-low-end.md`](./03-Workflows/by-instrument/kick-drum-low-end.md)*

1. **Band 1:** HP @ 30-40 Hz (remove sub-rumble only)
2. **Band 1:** Boost +2dB @ 50-60 Hz (add weight/thump)
3. **Band 3:** Cut -3dB @ 400 Hz (remove boxiness)
4. **Band 6:** Boost +1dB @ 3-5 kHz (add beater click)

**Result:** Powerful low-end with clarity and attack.

---

### 🎸 Acoustic Guitar Clean & Sparkle
*Full workflow: [`03-Workflows/by-instrument/acoustic-guitar-clean.md`](./03-Workflows/by-instrument/acoustic-guitar-clean.md)*

1. **Band 1:** HP @ 80 Hz (remove low-end clutter)
2. **Band 3:** Cut -3dB @ 400 Hz (remove boominess/room tone)
3. **Band 5:** Boost +1.5dB @ 3 kHz (add string definition)
4. **Band 7:** Shelf +2dB @ 12 kHz (add sparkle)

**Result:** Clear, present acoustic without muddying the mix.

---

### 🚨 Emergency Mix Fixes (Priority Order)

#### 1. Mix is Muddy/Cloudy (PRIORITY 1)
*Full workflow: [`03-Workflows/by-symptom/muddy-cloudy-fix.md`](./03-Workflows/by-symptom/muddy-cloudy-fix.md)*
- **Action:** Band 2 - Cut -2dB @ 250 Hz (wide BW: 25-35%)
- **Apply to:** Multiple tracks with low-mid buildup, or mix bus if widespread

#### 2. Mix is Harsh/Fatiguing (PRIORITY 1)
*Full workflow: [`03-Workflows/by-symptom/harsh-fatigue-fix.md`](./03-Workflows/by-symptom/harsh-fatigue-fix.md)*
- **Action:** Band 6 - Cut -2dB @ 4-6 kHz (narrow BW: 60-70%, sweep to find exact freq)
- **Apply to:** Vocals, guitars, cymbals - any source causing ear fatigue

#### 3. Mix Lacks Headroom (PRIORITY 1)
*Full workflow: [`03-Workflows/by-symptom/rumble-headroom-fix.md`](./03-Workflows/by-symptom/rumble-headroom-fix.md)*
- **Action:** Band 1 - HP @ 70-90 Hz on ALL non-bass tracks
- **Result:** Instant 3dB+ headroom increase, cleaner low-end

#### 4. Mix Sounds Boxy/Cardboard (PRIORITY 2)
*Full workflow: [`03-Workflows/by-symptom/boxy-cardboard-fix.md`](./03-Workflows/by-symptom/boxy-cardboard-fix.md)*
- **Action:** Band 3 - Cut -3dB @ 400-450 Hz (medium BW: 50%)
- **Apply to:** Vocals, acoustic instruments, drums, poorly recorded sources

#### 5. Vocals Sound Nasal/Honky (PRIORITY 2)
*Full workflow: [`03-Workflows/by-symptom/nasal-honk-fix.md`](./03-Workflows/by-symptom/nasal-honk-fix.md)*
- **Action:** Band 4 - Cut -2dB @ 850 Hz (medium-narrow BW: 60%)
- **Note:** Small changes only - this range is very sensitive

#### 6. Mix Sounds Thin/Weak (PRIORITY 2)
*Full workflow: [`03-Workflows/by-symptom/thin-weak-fix.md`](./03-Workflows/by-symptom/thin-weak-fix.md)*
- **Action:** Band 2 - Boost +1.5dB @ 200 Hz (wide BW: 20-30%)
- **Warning:** This range stacks fast - use sparingly across multiple tracks

---

## 🎯 SECTION 6: CONTEXT-SPECIFIC GAIN LIMITS
*From [`02-Data/band-definitions/all-7-bands.json`](./02-Data/band-definitions/all-7-bands.json)*

| Context | Max Safe Gain | Philosophy | Example Use Case |
| :--- | :--- | :--- | :--- |
| **Track Level** | **±6 dB** | Be aggressive, sculpt heavily | Individual vocal, kick, guitar tracks |
| **Bus Level** | **±3 dB** | Be gentler, changes affect many tracks | Drum bus, vocal bus, instrument groups |
| **Master Level** | **±1.5 dB** | Very subtle, final polish only | Master channel finishing touches |

**Key Principle:** The further downstream in your signal chain, the gentler your EQ moves should be.

**Deep Dive:** [`01-Learning/Concepts/context-matters-track-bus-master.md`](./01-Learning/Concepts/context-matters-track-bus-master.md)

---

## 📚 SECTION 7: QUICK NAVIGATION TO DEEPER RESOURCES

### 🎓 Learning & Theory
- [Complete Learning Path](./00-START-HERE.md) - Structured curriculum from beginner to expert
- [7-Band Philosophy Deep Dive](./01-Learning/Concepts/Fruity%20Parametric%20EQ%202.txt) - Why each band exists
- [Cut vs Boost Philosophy](./01-Learning/Concepts/cut-vs-boost-philosophy.md) - When to add vs subtract
- [Ear Training Gym](./01-Learning/ear-training-gym.md) - Daily exercises to train your ears
- [Individual Band Guides](./01-Learning/Band-Guide/) - 7 dedicated guides (one per band)

### 🎯 Practical Application
- [All Symptom Fixes](./03-Workflows/by-symptom/) - Diagnostic problem-solving
- [Instrument Workflows](./03-Workflows/by-instrument/) - Vocal, kick, guitar, synth chains
- [Mix Bus Polish](./03-Workflows/by-goal/mix-bus-polish.md) - Mastering-level finishing

### 🔧 Advanced Techniques
- [DSP Characteristics](./04-Reference/technical-docs/dsp-characteristics.md) - STD vs LIN vs HQ modes explained
- [Mid/Side Setup](./04-Reference/technical-docs/mid-side-setup.md) - Stereo processing techniques
- [Dynamic EQ Hack](./04-Reference/integration-guides/dynamic-eq-hack.md) - Controller-based frequency dynamics
- [Key Tracking EQ](./04-Reference/integration-guides/key-tracking-eq.md) - Musical EQ following MIDI
- [Visual Analysis Guide](./04-Reference/technical-docs/visual-analysis-guide.md) - Reading the heatmap

### 📊 Data & Development
- [Complete Data Model](./02-Data/) - JSON schemas, band definitions, presets, symptom rules
- [API Specifications](./04-Reference/api-specifications/) - For building EQ tools and plugins
- [Integration Guides](./04-Reference/integration-guides/) - Preset systems, assistants, UI patterns

### 📖 Reference Materials
- [Frequency Spectrum Map](./04-Reference/frequency-charts/frequency-spectrum-map.md) - 20Hz-20kHz breakdown
- [Instrument Frequency Ranges](./04-Reference/frequency-charts/instrument-frequency-ranges.md) - Where instruments live
- [Problem Frequency Guide](./04-Reference/frequency-charts/problem-frequency-guide.md) - Common resonances
- [EQ Terminology](./04-Reference/terminology-glossary/eq-terminology.md) - Technical terms explained

---

## 💡 GOLDEN RULES (Memorize These)

1. **High-pass everything** except kick and bass (Band 1 @ 70-100 Hz)
2. **Cut before you boost** - Subtractive EQ is more transparent
3. **Fix mud first** - A -2dB cut at 250 Hz transforms amateur mixes (Band 2)
4. **Enable 90dB histogram** - You can't fix what you can't see
5. **Use wide bandwidth for boosts** (20-35%) - narrow for surgical cuts (60-85%)
6. **Context matters** - Track (±6dB) → Bus (±3dB) → Master (±1.5dB)
7. **A/B constantly** - Bypass the plugin to verify you're helping, not hurting
8. **STD mode for mixing** - LIN mode for mastering only
9. **HQ mode always ON** - Prevents high-frequency cramping
10. **Shift+Click to solo bands** - The most powerful diagnostic tool

---

**Mainframe v5.0** | **Status: Operational** | **🎚️ Print and Master**

*Keep this at your workstation. Reference constantly. Master your frequencies.*