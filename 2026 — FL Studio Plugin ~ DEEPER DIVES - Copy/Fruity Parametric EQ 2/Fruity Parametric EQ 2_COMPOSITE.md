# Fruity Parametric EQ 2 - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 00-START-HERE.md

```markdown
# 🧭 Mastery Roadmap: Fruity Parametric EQ 2

**Welcome, Engineer.**

You are about to transition from "using an EQ" to **Spectral Engineering**.

This repository is not just a collection of files—it is a structured curriculum designed to give you 100% mastery over the most important plugin in FL Studio. This guide provides the complete learning path through all available materials.

---

## 🚦 The First 5 Minutes (Do This Now)

Before you read the deep dives, prove to yourself that this system works.

### Quick Win Protocol

1.  **Open FL Studio** and load a project with a vocal track
2.  **Open PEQ2** on the vocal
3.  **Unlock the "Pro" View:**
    - Click **Options (▼)** > **Histogram** > **Range**
    - Select **90dB** (This reveals the noise floor hidden by the default view)
4.  **Execute the "Vocal Polish" Protocol:**
    - **Band 1 (Purple):** Right-click token → Select **High Pass**. Drag to **100 Hz**
        - *Why:* You just bought yourself 3dB of headroom by removing invisible rumble
    - **Band 2 (Pink):** Drag down to **-2dB** at roughly **250 Hz**
        - *Why:* You just removed the "mud" that makes mixes sound amateur
    - **Band 7 (Blue):** Drag up to **+2dB** at roughly **12 kHz**
        - *Why:* You just added the "expensive" studio sheen
5.  **Listen.** Notice how the vocal sits "on top" of the mix now? That is the power of **Spectral Zones**

**Next Step:** Print out [00-printable-cheat-sheet.md](./00-printable-cheat-sheet.md) and keep it at your desk.

---

## 🗺️ The Complete Curriculum

Follow this path to master the mainframe. Each phase builds on the previous.

---

### 🟢 PHASE 1: The Operator (Foundations)
*Goal: Understand the tool and perform basic cleanup*
*Estimated Time: 2-3 hours*

#### Core Concepts (Start Here)
1.  **[The 7-Band Philosophy](./01-Learning/Concepts/Fruity%20Parametric%20EQ%202.txt)** ⭐ ESSENTIAL
    - *What you'll learn:* Why Band 4 is specifically tuned for "Nasal" frequencies (800Hz) and why Band 1 is for "Sub-Bass" only
    - *Key Takeaway:* Stop EQing blindly. Every color has a purpose
    - *Time:* 20 minutes

2.  **[Cut vs Boost Philosophy](./01-Learning/Concepts/cut-vs-boost-philosophy.md)**
    - *What you'll learn:* When to subtract vs when to add
    - *Key Takeaway:* "Subtractive EQ first, additive EQ second"
    - *Time:* 10 minutes

3.  **[Context Matters: Track/Bus/Master](./01-Learning/Concepts/context-matters-track-bus-master.md)**
    - *What you'll learn:* Why you can use ±6dB on tracks but only ±1.5dB on the master
    - *Key Takeaway:* Different contexts require different approaches
    - *Time:* 10 minutes

#### Visual Skills
4.  **[Visual Analysis Guide](./04-Reference/technical-docs/visual-analysis-guide.md)**
    - *What you'll learn:* How to decode the Heatmap. Distinguish a "Red Line" (Resonance) from "Purple Mist" (Transient)
    - *Key Takeaway:* You can see a bad mix before you hear it
    - *Time:* 15 minutes

#### Reference Materials
5.  **[The Tactical Field Manual](./00-printable-cheat-sheet.md)** ⭐ PRINT THIS
    - *What you'll learn:* Specific frequency targets for Kicks, Snares, Vocals, Guitars, and Synths
    - *Key Takeaway:* This replaces 10 years of guessing
    - *Action:* Print and keep at your workstation

6.  **[Frequency Spectrum Map](./04-Reference/frequency-charts/frequency-spectrum-map.md)**
    - Complete 20Hz-20kHz breakdown
    - Visual reference for frequency zones

7.  **[Instrument Frequency Ranges](./04-Reference/frequency-charts/instrument-frequency-ranges.md)**
    - Where each instrument lives in the spectrum
    - Helps with frequency masking decisions

#### Practice (Hands-On)
8.  **Try Your First Workflow:** [Muddy/Cloudy Mix Fix](./03-Workflows/by-symptom/muddy-cloudy-fix.md)
    - The #1 mix problem and its solution
    - Practice on a real project
    - *Time:* 20 minutes + practice

**Phase 1 Checkpoint:** Can you explain what each of the 7 bands does? Can you execute a high-pass filter and a 250Hz mud cut?

---

### 🟡 PHASE 2: The Engineer (Problem Solving)
*Goal: Fix common mix issues with high precision*
*Estimated Time: 5-8 hours*

#### Diagnostic Framework
1.  **[Symptom-to-Solution Rules](./02-Data/rules/symptom-solutions.json)** ⭐ REFERENCE CONSTANTLY
    - *What you'll learn:* A diagnostic logic engine. "If Muddy → Cut 250Hz." "If Boxy → Cut 400Hz."
    - *Key Takeaway:* Mixing is not magic; it is problem-solving
    - *Format:* JSON data—also see human-readable versions in `03-Workflows/by-symptom/`

#### Master All Priority 1 Fixes (Critical)
2.  **[Rumble / Headroom Loss Fix](./03-Workflows/by-symptom/rumble-headroom-fix.md)**
    - Fix invisible energy eating your volume
    - High-pass filtering strategy
    - *Time:* 15 minutes

3.  **[Muddy / Cloudy Mix Fix](./03-Workflows/by-symptom/muddy-cloudy-fix.md)** ⭐ MOST IMPORTANT
    - The #1 amateur mixing mistake
    - 250Hz low-mid buildup removal
    - *Time:* 20 minutes

4.  **[Harsh / Ear Fatigue Fix](./03-Workflows/by-symptom/harsh-fatigue-fix.md)**
    - Taming painful upper-mids (4-6 kHz)
    - Preventing listener fatigue
    - *Time:* 20 minutes

#### Master Priority 2 Fixes (Tone Correction)
5.  **[Boxy / Cardboard Fix](./03-Workflows/by-symptom/boxy-cardboard-fix.md)**
    - Removing the "cheap room" sound (~400 Hz)
    - *Time:* 15 minutes

6.  **[Nasal / Honky Fix](./03-Workflows/by-symptom/nasal-honk-fix.md)**
    - Smoothing pinched vocals/guitars (~850 Hz)
    - *Time:* 15 minutes

7.  **[Thin / Weak Fix](./03-Workflows/by-symptom/thin-weak-fix.md)**
    - Adding body and authority to frail sources
    - When and how to boost low-mids
    - *Time:* 15 minutes

#### Instrument-Specific Workflows
8.  **[Lead Vocal Workflow](./03-Workflows/by-instrument/vocal-lead-workflow.md)** ⭐ ESSENTIAL
    - 4-step chain for clear, modern vocals
    - Clean → Clear → Present → Shine
    - *Time:* 30 minutes

9.  **[Kick Drum & Low End](./03-Workflows/by-instrument/kick-drum-low-end.md)**
    - Boosting weight while maintaining clarity
    - Kick/bass separation techniques
    - *Time:* 25 minutes

10. **[Acoustic Guitar Clean](./03-Workflows/by-instrument/acoustic-guitar-clean.md)**
    - Removing boom to reveal sparkle
    - *Time:* 20 minutes

11. **[Modern Synth / EDM](./03-Workflows/by-instrument/modern-synth-edm.md)**
    - Tight, focused leads that cut through
    - *Time:* 20 minutes

#### Ear Training (Start Daily Practice)
12. **[Ear Training Gym](./01-Learning/ear-training-gym.md)** ⭐ PRACTICE DAILY
    - 5 exercises to calibrate your ears
    - The "Pink Noise Method" for balancing mixes
    - *Time:* 10 minutes daily

#### Deep Dive: Individual Bands
13. **Study Each Band Guide** (Read one per day)
    - [Band 1: Sub/Foundation (Purple)](./01-Learning/Band-Guide/band-1-sub-foundation.md) - 20-120 Hz
    - [Band 2: Warmth/Body (Pink)](./01-Learning/Band-Guide/band-2-warmth-body.md) - 140-320 Hz
    - [Band 3: Boxiness (Orange)](./01-Learning/Band-Guide/band-3-boxiness.md) - 300-550 Hz
    - [Band 4: Nasal/Honk (Yellow)](./01-Learning/Band-Guide/band-4-nasal-honk.md) - 600-1200 Hz
    - [Band 5: Presence (Green)](./01-Learning/Band-Guide/band-5-presence.md) - 1800-3200 Hz
    - [Band 6: Detail (Teal)](./01-Learning/Band-Guide/band-6-detail.md) - 3500-6500 Hz
    - [Band 7: Air/Polish (Blue)](./01-Learning/Band-Guide/band-7-air-polish.md) - 8000-16000 Hz
    - *Each guide:* 15-20 minutes

#### Quick Reference Consolidation
14. **[Frequency Chart](./01-Learning/Quick-Reference/frequency-chart.md)**
    - Condensed instrument targets

15. **[Problem Solver](./01-Learning/Quick-Reference/problem-solver.md)**
    - Quick diagnostic lookups

16. **[Problem Frequency Guide](./04-Reference/frequency-charts/problem-frequency-guide.md)**
    - Common resonances and issues by frequency

**Phase 2 Checkpoint:** Can you diagnose and fix the 6 most common mix problems (rumble, mud, boxiness, nasal, harsh, thin)? Can you EQ a vocal from scratch using the 4-step workflow?

---

### 🔴 PHASE 3: The Architect (Advanced DSP)
*Goal: Advanced signal processing and high-fidelity mastering*
*Estimated Time: 8-12 hours*

#### Deep Technical Understanding
1.  **[DSP Characteristics](./04-Reference/technical-docs/dsp-characteristics.md)** ⭐ ESSENTIAL FOR MASTERING
    - The physics of Digital Filters
    - Phase Rotation vs Pre-Ringing
    - *Key Takeaway:* Know exactly when to use **LIN** (Linear Phase) vs **STD** (Standard) mode
    - *Time:* 45 minutes

2.  **[Parameter Specifications](./04-Reference/technical-docs/parameter-specifications.md)**
    - Complete control ranges and behaviors
    - Understanding BW% inverse scale
    - *Time:* 30 minutes

#### Advanced Techniques
3.  **[Mid/Side Setup](./04-Reference/technical-docs/mid-side-setup.md)** ⭐ GAME CHANGER
    - Build a "Motherboard" that EQs center vs sides differently
    - *Key Takeaway:* High-passing the Side channel is the secret to loud, punchy masters
    - *Time:* 1 hour

4.  **[Mid/Side vs Stereo Phase](./04-Reference/technical-docs/mid-side-vs-stereo-phase.md)**
    - Understanding the difference between techniques
    - *Time:* 20 minutes

5.  **[Dynamic EQ Hack](./04-Reference/integration-guides/dynamic-eq-hack.md)** ⭐ ADVANCED
    - Using internal controllers to make PEQ2 behave like a $200 dynamic plugin
    - *Key Takeaway:* You don't need to buy Pro-Q 3. You need to learn Controller Links
    - *Time:* 1 hour

6.  **[Key Tracking EQ](./04-Reference/integration-guides/key-tracking-eq.md)**
    - Musical EQ that follows MIDI notes
    - "Singing EQ" technique
    - *Time:* 45 minutes

7.  **[Automation & MIDI Mapping](./04-Reference/technical-docs/automation-midi-mapping.md)**
    - Controller integration
    - Live performance EQ
    - *Time:* 30 minutes

#### Context-Specific Mastery
8.  **[Mix Bus Polish Workflow](./03-Workflows/by-goal/mix-bus-polish.md)**
    - Subtle finishing touches for master channel
    - The ±1.5dB rule
    - *Time:* 30 minutes

#### Reference Glossaries
9.  **[EQ Terminology](./04-Reference/terminology-glossary/eq-terminology.md)**
    - Technical terms explained
    - Q-factor, bandwidth, shelving, etc.

10. **[Frequency Zones](./04-Reference/terminology-glossary/frequency-zones.md)**
    - Spectral region definitions
    - Sub, bass, low-mid, mid, upper-mid, presence, brilliance, air

11. **[Project Conventions](./04-Reference/terminology-glossary/project-conventions.md)**
    - How this repository is organized
    - Data model conventions

**Phase 3 Checkpoint:** Can you build a Mid/Side EQ chain in Patcher? Can you explain the difference between STD and LIN modes and when to use each? Can you implement dynamic EQ using controller links?

---

### ⚫ PHASE 4: The Developer (Building Tools)
*Goal: Create intelligent EQ systems and tools*
*Estimated Time: 10-20 hours (programming required)*

**Note:** This phase is optional and requires programming knowledge (JavaScript/TypeScript/Python).

#### Data Model Mastery
1.  **[Data Model Overview](./04-Reference/api-specifications/data-model-overview.md)** ⭐ START HERE
    - Architecture explanation
    - How the JSON files relate
    - *Time:* 30 minutes

2.  **[Schema Validation Examples](./04-Reference/api-specifications/schema-validation-examples.md)**
    - How to validate against schema
    - JSON Schema usage
    - *Time:* 30 minutes

3.  **[TypeScript Interfaces](./04-Reference/api-specifications/typescript-interfaces.md)**
    - Type definitions for developers
    - *Time:* 20 minutes

#### Working with JSON Data
4.  **Study the Core Data Files:**
    - [`02-Data/schema/parametric-eq2-band-schema.json`](./02-Data/schema/parametric-eq2-band-schema.json) - Validation schema
    - [`02-Data/band-definitions/all-7-bands.json`](./02-Data/band-definitions/all-7-bands.json) - Complete metadata
    - [`02-Data/presets/band-archetypes.json`](./02-Data/presets/band-archetypes.json) - Reusable presets
    - [`02-Data/rules/symptom-solutions.json`](./02-Data/rules/symptom-solutions.json) - Decision tree
    - *Time:* 1-2 hours

#### Integration Patterns
5.  **[JSON Workflow](./04-Reference/integration-guides/json-workflow.md)**
    - Working with the data model
    - Parsing and using the JSON files
    - *Time:* 45 minutes

6.  **[Preset System Architecture](./04-Reference/integration-guides/preset-system-architecture.md)**
    - Building modular presets
    - Stacking band archetypes
    - *Time:* 1 hour

7.  **[Assistant Mode Implementation](./04-Reference/integration-guides/assistant-mode-implementation.md)** ⭐ ADVANCED PROJECT
    - Creating smart EQ helpers
    - Using symptom-solutions.json for recommendations
    - *Time:* 2-3 hours

8.  **[EQ Vibes](./04-Reference/integration-guides/eq-vibes.md)**
    - UI/UX patterns for developers
    - Designing EQ interfaces
    - *Time:* 1 hour

**Phase 4 Checkpoint:** Can you parse the JSON data and build a simple preset generator? Can you create an assistant that recommends EQ moves based on user-described symptoms?

---

## 🎯 Specialized Learning Paths

### Path A: "I Just Want to Fix My Mixes" (Fast Track)
*Estimated Time: 3-4 hours*

1. Read [00-printable-cheat-sheet.md](./00-printable-cheat-sheet.md) (print it)
2. Do the [5-minute quick start](#-the-first-5-minutes-do-this-now)
3. Master these workflows in order:
   - [Rumble Fix](./03-Workflows/by-symptom/rumble-headroom-fix.md)
   - [Mud Fix](./03-Workflows/by-symptom/muddy-cloudy-fix.md) ⭐ MOST IMPORTANT
   - [Vocal Workflow](./03-Workflows/by-instrument/vocal-lead-workflow.md)
4. Start [Ear Training Gym](./01-Learning/ear-training-gym.md) daily practice
5. Reference [Problem Frequency Guide](./04-Reference/frequency-charts/problem-frequency-guide.md) as needed

### Path B: "I Want to Master Every Band" (Deep Study)
*Estimated Time: 8-10 hours*

1. Read [The 7-Band Philosophy](./01-Learning/Concepts/Fruity%20Parametric%20EQ%202.txt)
2. Study one band guide per day (7 days):
   - Day 1: [Band 1 (Purple)](./01-Learning/Band-Guide/band-1-sub-foundation.md)
   - Day 2: [Band 2 (Pink)](./01-Learning/Band-Guide/band-2-warmth-body.md)
   - Day 3: [Band 3 (Orange)](./01-Learning/Band-Guide/band-3-boxiness.md)
   - Day 4: [Band 4 (Yellow)](./01-Learning/Band-Guide/band-4-nasal-honk.md)
   - Day 5: [Band 5 (Green)](./01-Learning/Band-Guide/band-5-presence.md)
   - Day 6: [Band 6 (Teal)](./01-Learning/Band-Guide/band-6-detail.md)
   - Day 7: [Band 7 (Blue)](./01-Learning/Band-Guide/band-7-air-polish.md)
3. Complete all symptom workflows in [`03-Workflows/by-symptom/`](./03-Workflows/by-symptom/)
4. [Ear Training Gym](./01-Learning/ear-training-gym.md) daily

### Path C: "I'm a Mastering Engineer" (High-Fidelity Focus)
*Estimated Time: 6-8 hours*

1. [DSP Characteristics](./04-Reference/technical-docs/dsp-characteristics.md) ⭐ CRITICAL
2. [Mid/Side Setup](./04-Reference/technical-docs/mid-side-setup.md) ⭐ CRITICAL
3. [Mix Bus Polish](./03-Workflows/by-goal/mix-bus-polish.md)
4. [Mid/Side vs Stereo Phase](./04-Reference/technical-docs/mid-side-vs-stereo-phase.md)
5. Study [Band 1](./01-Learning/Band-Guide/band-1-sub-foundation.md) and [Band 7](./01-Learning/Band-Guide/band-7-air-polish.md) deeply
6. [Parameter Specifications](./04-Reference/technical-docs/parameter-specifications.md)

### Path D: "I'm Building an EQ Plugin/Tool" (Developer)
*Estimated Time: 12-15 hours*

1. [Data Model Overview](./04-Reference/api-specifications/data-model-overview.md)
2. Study all files in [`02-Data/`](./02-Data/)
3. [Schema Validation Examples](./04-Reference/api-specifications/schema-validation-examples.md)
4. [TypeScript Interfaces](./04-Reference/api-specifications/typescript-interfaces.md)
5. [JSON Workflow](./04-Reference/integration-guides/json-workflow.md)
6. [Preset System Architecture](./04-Reference/integration-guides/preset-system-architecture.md)
7. [Assistant Mode Implementation](./04-Reference/integration-guides/assistant-mode-implementation.md)
8. [EQ Vibes](./04-Reference/integration-guides/eq-vibes.md)

---

## 🏆 Mastery Checklist

You have truly mastered this mainframe when you can:

### Technical Skills
- [ ] Configure the **90dB Analysis Range** for surgical noise removal
- [ ] Identify all 7 bands by color and know their primary functions
- [ ] Execute high-pass filtering on all non-bass tracks without thinking
- [ ] Explain the difference between STD and LIN modes and when to use each
- [ ] Understand the inverted BW% scale (0% = wide, 100% = narrow)

### Diagnostic Skills
- [ ] Identify "muddy," "boxy," and "harsh" frequencies by ear
- [ ] Diagnose and fix the 6 most common mix problems in under 5 minutes
- [ ] Know when to cut vs when to boost without guessing
- [ ] Understand Track/Bus/Master context differences (±6dB vs ±3dB vs ±1.5dB)

### Advanced Skills
- [ ] Build a **Mid/Side** matrix in Patcher from memory
- [ ] Implement dynamic EQ using controller links
- [ ] Use **Key Tracking** to tune an EQ band to a MIDI melody
- [ ] Clean a muddy mix bus without losing the "warmth" of the song
- [ ] Master a track using only PEQ2 (no third-party plugins needed)

### Creative Skills
- [ ] EQ a lead vocal from scratch using the 4-step workflow
- [ ] Separate kick and bass using frequency carving
- [ ] Add "air" and "presence" without causing harshness
- [ ] Create space in a dense mix through surgical EQ

### Knowledge
- [ ] Explain what "cramping" is and why HQ mode matters
- [ ] Describe what the heatmap's red lines vs purple mist means
- [ ] Teach someone else the 7-band philosophy
- [ ] Know at least 10 instrument-specific frequency targets by memory

---

## 📚 Complete File Index

### Entry Points
- [README.md](./README.md) - Project overview and complete repository map
- **[00-START-HERE.md](./00-START-HERE.md)** - This file
- [00-printable-cheat-sheet.md](./00-printable-cheat-sheet.md) - Quick reference (print this!)

### Learning Materials (01-Learning/)
- **Concepts:**
  - [Fruity Parametric EQ 2 Overview](./01-Learning/Concepts/Fruity%20Parametric%20EQ%202.txt)
  - [Cut vs Boost Philosophy](./01-Learning/Concepts/cut-vs-boost-philosophy.md)
  - [Context Matters](./01-Learning/Concepts/context-matters-track-bus-master.md)
- **Band Guides:** 7 files (band-1 through band-7)
- **Quick Reference:** [Frequency Chart](./01-Learning/Quick-Reference/frequency-chart.md), [Problem Solver](./01-Learning/Quick-Reference/problem-solver.md)
- [Ear Training Gym](./01-Learning/ear-training-gym.md)

### Data Files (02-Data/)
- [`schema/parametric-eq2-band-schema.json`](./02-Data/schema/parametric-eq2-band-schema.json)
- [`band-definitions/all-7-bands.json`](./02-Data/band-definitions/all-7-bands.json)
- [`presets/band-archetypes.json`](./02-Data/presets/band-archetypes.json)
- [`rules/symptom-solutions.json`](./02-Data/rules/symptom-solutions.json)

### Workflows (03-Workflows/)
- **By Symptom:** 6 files (muddy, harsh, boxy, nasal, thin, rumble)
- **By Instrument:** 4 files (vocal, kick, guitar, synth)
- **By Goal:** 1 file (mix-bus-polish)

### Reference (04-Reference/)
- **Technical Docs:** 6 files (parameters, DSP, visual-analysis, automation, mid-side x2)
- **Frequency Charts:** 3 files (spectrum-map, instrument-ranges, problem-guide)
- **Integration Guides:** 7 files (eq-vibes, json-workflow, preset-architecture, assistant, key-tracking, dynamic-eq, mid-side-setup)
- **API Specs:** 3 files (data-model, schema-validation, typescript-interfaces)
- **Glossary:** 3 files (eq-terminology, frequency-zones, project-conventions)

**Total: 50+ documents organized for maximum learning efficiency**

---

## 💡 Pro Tips

1. **Print the cheat sheet** - Having [00-printable-cheat-sheet.md](./00-printable-cheat-sheet.md) physically at your desk is invaluable
2. **Do ear training daily** - 10 minutes of [Ear Training Gym](./01-Learning/ear-training-gym.md) compounds over time
3. **Fix mud first** - [The muddy/cloudy fix](./03-Workflows/by-symptom/muddy-cloudy-fix.md) is the most impactful single technique
4. **High-pass everything** - Except kick and bass. Seriously, everything.
5. **Enable 90dB histogram range** - You can't fix what you can't see
6. **Use STD mode for mixing** - Save LIN mode for mastering or parallel processing
7. **Cut before you boost** - Subtractive EQ is more transparent
8. **Context matters** - Be aggressive on tracks, gentle on buses, surgical on master
9. **A/B constantly** - Bypass the plugin frequently to ensure you're helping, not hurting
10. **Less is more** - One good EQ move beats ten mediocre ones

---

## 🆘 Troubleshooting Your Learning

**"I'm overwhelmed. Where do I actually start?"**
→ Do the [5-minute quick start](#-the-first-5-minutes-do-this-now), then read [00-printable-cheat-sheet.md](./00-printable-cheat-sheet.md). That's it for day 1.

**"I can't hear the difference between frequencies."**
→ This is normal. Start [Ear Training Gym](./01-Learning/ear-training-gym.md) and practice daily. It takes 2-3 weeks.

**"I followed a workflow but it made things worse."**
→ Always A/B compare (bypass the plugin). If it sounds worse, undo it. Not every technique applies to every source.

**"The JSON files are confusing."**
→ Ignore them unless you're a developer. Use the human-readable guides in `03-Workflows/` instead.

**"I want to master just one thing first."**
→ Master the muddy/cloudy fix. Seriously. [This workflow](./03-Workflows/by-symptom/muddy-cloudy-fix.md) alone will transform your mixes.

**"When should I use LIN mode vs STD mode?"**
→ Use STD 95% of the time. Only use LIN for mastering or if you have phase coherence issues with multiple mics.

---

**Mainframe v5.0** | *Status: Operational* | **🎓 Welcome to the Academy**

*Your journey to spectral mastery begins now. One band at a time. One frequency at a time. One mix at a time.*
```

---

## FILE: 00-printable-cheat-sheet.md

```markdown
# 🎚️ PEQ2: The Master Field Manual (v5.0)

**THE COMPLETE TECHNICAL REFERENCE**
*Data derived from internal Mainframe JSON models and DSP specifications.*

`\`\`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 PRINT THIS DOCUMENT | KEEP AT YOUR WORKSTATION | REFERENCE CONSTANTLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`\`\`

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
```

---

## FILE: CLAUDE.md

```markdown
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a knowledge base and data model repository for the **Fruity Parametric EQ 2** plugin in FL Studio. It contains structured educational content, JSON schemas, and preset archetypes for building intelligent EQ interfaces and assistants.

## Repository Structure

`\`\`
Fruity Parametric EQ 2/
├── 00-START-HERE.md          # Navigation guide for users
├── CLAUDE.md                 # This file (for Claude Code)
│
├── 01-Learning/              # Educational materials
│   ├── README.md            # Learning path and tips
│   ├── Band-Guide/          # Individual band deep-dives (to be built)
│   ├── Concepts/            # Core EQ theory and functional model
│   │   └── Fruity Parametric EQ 2.txt
│   └── Quick-Reference/     # Cheat sheets (to be built)
│
├── 02-Data/                 # Structured JSON data
│   ├── README.md           # Data usage guide
│   ├── schema/
│   │   └── eg1.json        # JSON Schema validation
│   ├── band-definitions/
│   │   └── eg2.json        # Canonical 7-band dataset
│   ├── presets/
│   │   └── eg3.json        # Band archetypes
│   └── rules/
│       └── eg4.json        # Symptom-solution mappings
│
├── 03-Workflows/            # Practical mixing guides (to be built)
│   ├── README.md           # Workflow templates and tips
│   ├── by-symptom/         # Problem-solving approaches
│   ├── by-instrument/      # Instrument-specific guides
│   └── by-goal/            # Context-specific approaches
│
└── 04-Reference/            # Technical documentation
    ├── technical-docs/
    │   └── Fruity Parametric EQ 2.xaml
    └── integration-guides/
        └── eq-vibes.md
`\`\`

## Core Architecture

### Data Model Structure

The project uses a multi-layered data architecture:

1. **JSON Schema** (`02-Data/schema/eg1.json`): Defines the structural validation for parametric EQ band data
2. **Canonical Band Data** (`02-Data/band-definitions/eg2.json`): Contains comprehensive metadata for all 7 EQ bands
3. **Band Archetypes** (`02-Data/presets/eg3.json`): Reusable preset building blocks per band
4. **Decision Rules** (`02-Data/rules/eg4.json`): Machine-readable symptom-to-solution mappings

### The 7-Band Functional Model

Each of the 7 bands is designed as a **multi-role frequency module** with distinct purposes:

- **Band 1 (Purple)**: Sub/Foundation Control - High-pass filter, removes rumble (20-120 Hz)
- **Band 2 (Pink)**: Low-Mid Body/Warmth - Manages thickness and mud (140-320 Hz)
- **Band 3 (Orange)**: Boxiness/Room Tone - Removes cardboard resonance (300-550 Hz)
- **Band 4 (Yellow)**: Nasal/Honk Control - Handles midrange focus (600-1200 Hz)
- **Band 5 (Green)**: Presence/Intelligibility - Controls clarity and definition (1800-3200 Hz)
- **Band 6 (Teal)**: Upper Presence/Detail - Manages crispness and sharpness (3500-6500 Hz)
- **Band 7 (Blue)**: Air/Shine/Polish - High-shelf for modern gloss (8000-16000 Hz)

### Data Flow Pattern

`\`\`
02-Data/band-definitions/eg2.json → UI copy, tooltips, frequency zones, controls
02-Data/presets/eg3.json → Preset system macros
02-Data/rules/eg4.json → Smart assistant recommendations
02-Data/schema/eg1.json → Validates all band data structures
`\`\`

## Key Design Principles

### UI Copy System

All bands follow a consistent microcopy pattern:
- **Label**: 2-3 word band identifier
- **One-liner**: ≤60 character summary
- **Tooltip**: 1-2 sentence guidance
- **Do/Don't**: Fast actionable advice
- **Quick Action chips**: Optional preset buttons (e.g., "HP 80Hz", "De-mud", "Add air")

### Band Roles Hierarchy

Each band in `02-Data/band-definitions/eg2.json` defines four role categories:
1. `primary`: Core function (what the band does)
2. `fixes`: Common problems it solves
3. `creative`: Artistic applications
4. `warnings`: What to avoid

### Control Metadata

Each band includes comprehensive control specifications:
- **frequencyHz**: Typical range + anchor targets for preset buttons
- **controls.typeOptions**: Available filter types (bell, shelf, pass, notch)
- **gainDb**: Safe max values differentiated by context (track/bus/master)
- **bwPercent**: Bandwidth guidance (wide/medium/narrow ranges + defaults)

### Preset Archetype Pattern

Archetypes in `02-Data/presets/eg3.json` are **band-level macros** that can be stacked:
- Each archetype is a complete band configuration (type, freq, BW, gain)
- Presets = array of band archetypes
- Enables modular preset construction and "smart suggestions"

### Decision Tree Logic

The rules engine (`02-Data/rules/eg4.json`) maps user symptoms to solutions:
- Prioritized by urgency (1 = critical, 3 = polish)
- Links symptoms to specific band archetypes
- Includes contextual notes for implementation

## File Reference

### Learning Materials
- `01-Learning/Concepts/Fruity Parametric EQ 2.txt`: Human-readable functional model documentation for all 7 bands
- `01-Learning/README.md`: Learning paths, tips, and study guidance

### Data Files
- `02-Data/schema/eg1.json`: JSON Schema validation for band objects
- `02-Data/band-definitions/eg2.json`: Complete 7-band canonical dataset with all metadata
- `02-Data/presets/eg3.json`: Reusable band archetype presets
- `02-Data/rules/eg4.json`: Symptom-to-solution decision rules
- `02-Data/README.md`: Detailed explanation of data structure and usage

### Workflow Templates
- `03-Workflows/README.md`: Templates and guidance for creating practical workflows
- `03-Workflows/by-symptom/`: Problem-solving approaches (to be built by user)
- `03-Workflows/by-instrument/`: Instrument-specific EQ guides (to be built by user)
- `03-Workflows/by-goal/`: Context-specific approaches (to be built by user)

### Reference Documentation
- `04-Reference/technical-docs/Fruity Parametric EQ 2.xaml`: Plugin UI definition
- `04-Reference/integration-guides/eq-vibes.md`: UI/UX integration patterns for developers

## Working with This Codebase

When modifying or extending the data model:

1. **Always validate against `02-Data/schema/eg1.json`** - All band data must conform to the schema
2. **Maintain the 7-band structure** - Each band has a specific functional role
3. **Keep UI copy concise** - Follow the label/one-liner/tooltip/do-don't pattern
4. **Preserve the BW scale** - 0% = widest, 100% = narrowest (counter-intuitive)
5. **Respect safe gain limits** - Different maximums for track/bus/master contexts
6. **Band colors are semantic** - Purple→Blue follows the frequency spectrum low→high

When creating learning materials or workflows:

1. **Start with `00-START-HERE.md`** to understand the organization
2. **Document in `03-Workflows/`** - Organize by symptom, instrument, or goal
3. **Reference the data** - Link back to specific archetypes and rules in `02-Data/`
4. **Follow templates** - Use the workflow template in `03-Workflows/README.md`
5. **Build incrementally** - Start with common scenarios, expand over time

## Important Constraints

- **BW Percent Scale**: Uses inverted convention where lower % = wider bandwidth
- **Gain Safety Tiers**: Track allows more extreme values than bus, bus more than master
- **Filter Type Restrictions**: Not all bands support all filter types (see `typeOptions`)
- **Band 1 Warning**: "Never boost here unless designing bass" - critical headroom rule
- **Band 5 Warning**: "Overuse causes harshness" - presence stacks across tracks
- **Band 7 Warning**: "Exaggerates noise and artifacts" - air boost amplifies flaws

## Integration Patterns

For implementing UIs/assistants with this data:

1. **Education Mode**: Use `roles` and `uiCopy` from `02-Data/band-definitions/eg2.json` for contextual help
2. **Preset System**: Stack archetypes from `02-Data/presets/eg3.json` to build full EQ curves
3. **Smart Assistant**: Use `rules` from `02-Data/rules/eg4.json` to recommend fixes based on user-described symptoms
4. **Quick Actions**: Generate preset buttons from `frequencyHz.anchorTargets` and archetype names
5. **Learning Path**: Guide users through `01-Learning/` in order: Concepts → Band-Guide → Quick-Reference
6. **Practical Application**: Direct users to `03-Workflows/` for real-world mixing scenarios

For detailed integration guidance, see `04-Reference/integration-guides/eq-vibes.md`

```

---

## FILE: README.md

```markdown
# 🎚️ Fruity Parametric EQ 2: Spectral Mainframe

███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝ 
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝  
██║     ██║  ██║╚██████╔╝██║   ██║      ██║   
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝   

██████╗  █████╗ ██████╗  █████╗ ███╗   ███╗███████╗████████╗██████╗ ██╗ ██████╗ 
██╔══██╗██╔══██╗██╔══██╗██╔══██╗████╗ ████║██╔════╝╚══██╔══╝██╔══██╗██║██╔════╝ 
██████╔╝███████║██████╔╝███████║██╔████╔██║█████╗     ██║   ██████╔╝██║██║      
██╔═══╝ ██╔══██║██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝     ██║   ██╔══██╗██║██║      
██║     ██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║███████╗   ██║   ██║  ██║██║╚██████╗
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝

███████╗ ██████╗     ██████╗ 
██╔════╝██╔═══██╗    ╚════██╗
█████╗  ██║   ██║     █████╔╝
██╔══╝  ██║▄▄ ██║    ██╔═══╝ 
███████╗╚██████╔╝    ███████╗
╚══════╝ ╚══▀▀═╝     ╚══════╝

## 🌐 Project Mission

This repository is a high-density intelligence hub for **Fruity Parametric EQ 2**. It moves beyond standard "how-to" guides into the realm of **Spectral Engineering**. Whether you are performing surgical frequency removal, building AI-assisted EQ tools, or mastering a final mix, this mainframe provides the technical data, workflows, and ear-training exercises required for 100% frequency mastery.

**Start Here:** New to this system? Begin with [00-START-HERE.md](./00-START-HERE.md) for a guided learning path.
**Quick Reference:** Need fast answers? See [00-printable-cheat-sheet.md](./00-printable-cheat-sheet.md) for frequency charts and diagnostics.

---

## 🚀 The PEQ2 Advantage

Why master a stock plugin when third-party tools (Pro-Q 3, Kirchhoff) exist?

### 1. The Heatmap (Time-Based Analysis)
Unlike standard line-graph analyzers (RTA), PEQ2's heatmap visualizes *time*, *frequency*, and *intensity* simultaneously.
- **Red Lines:** Stationary Resonances (Feedback, ringing notes)
- **Purple Mist:** Transients (Drum hits, vocal plosives)
- **Advantage:** You can visually distinguish between a "good" transient punch and a "bad" ringing resonance instantly

### 2. Zero Latency Architecture
In **STD** mode, it uses highly optimized IIR filters that add **0 samples** of latency. You can run 50 instances in a project with negligible CPU hit.

### 3. Vectorial Precision
The modern UI (FL 20.8+) offers infinite resizing, effectively turning it into a dedicated, full-screen spectral analyzer.

---

## ⚙️ The Engine: Technical Specifications

### Filter Topology (IIR vs FFT)
**STD Mode (Standard):** Uses **Infinite Impulse Response (IIR)** filters
- *Physics:* Mimics analog EQ behavior. Introduces **Phase Rotation** (smearing) near cutoffs
- *Latency:* Zero
- *Use Case:* Tracking, Mixing, Drums (preserves transient punch)

**LIN Mode (Linear Phase):** Uses **Fast Fourier Transform (FFT)** filters
- *Physics:* Processes audio in spectral blocks. Zero phase shift, but introduces **Pre-Ringing** (a tiny swoosh before transients)
- *Latency:* High (compensated by PDC)
- *Use Case:* Mastering, Parallel Processing, Multi-Mic Phase Coherence

### HQ Mode (Oversampling)
The **HQ** button is not just a "quality" toggle. It activates **2x Oversampling**.
- **The Problem:** Standard digital filters suffer from "cramping" (warping) as they approach the Nyquist frequency (22.05kHz). A Bell boost at 18kHz becomes asymmetrical.
- **The Solution:** HQ mode runs the math at a doubled sample rate (e.g., 88.2kHz), pushing the cramping point far beyond human hearing.
- **Recommendation:** Always leave **ON** for mixing and mastering.

### Internal Precision
- **Resolution:** 32-bit Floating Point
- **Headroom:** Virtually infinite internally (won't clip inside the plugin), but the output can clip your master bus
- **Frequency Accuracy:** 0.1 Hz

---

## 🎨 The 7-Band Philosophy
*Derived from `02-Data/band-definitions/all-7-bands.json`*

| Band | Zone Name | The "One Liner" | Key Role |
| :--- | :--- | :--- | :--- |
| **1 (Purple)** | **Sub / Foundation** | *"Clean rumble, protect headroom."* | High Pass Filter (20-100Hz). Removes invisible energy that makes limiters pump. |
| **2 (Pink)** | **Warmth / Mud** | *"Adds thickness or removes mud."* | The "Make or Break" band. Cut 250Hz to clean; Boost 200Hz to thicken. |
| **3 (Orange)** | **Boxiness** | *"Removes the cardboard."* | Targets room resonances (400Hz) that make mixes sound "cheap" or "small." |
| **4 (Yellow)** | **Nasal / Honk** | *"Controls midrange aggression."* | The "Telephone" zone (800Hz-1kHz). Cuts here reduce listener fatigue. |
| **5 (Green)** | **Presence** | *"Makes it speak."* | Intelligibility zone (2.5kHz). Boost here to make lyrics clear. |
| **6 (Teal)** | **Detail** | *"Adds crispness."* | Transient definition (5kHz). Also the "Pain Zone" (4kHz) if too loud. |
| **7 (Blue)** | **Air** | *"Adds the expensive gloss."* | High Shelf (10kHz+). Adds "studio sheen" and openness. |

---

## 📂 Complete Repository Map

### 🧬 [01-Learning](./01-Learning/) - The Educational Layer

**Core Concepts**
- [Fruity Parametric EQ 2 Overview](./01-Learning/Concepts/Fruity%20Parametric%20EQ%202.txt) - Comprehensive functional model
- [Cut vs Boost Philosophy](./01-Learning/Concepts/cut-vs-boost-philosophy.md) - When to subtract vs add
- [Context Matters](./01-Learning/Concepts/context-matters-track-bus-master.md) - Track/Bus/Master differences
- [Ear Training Gym](./01-Learning/ear-training-gym.md) - Daily exercises to calibrate your ears

**7-Band Deep Dives** (`Band-Guide/`)
Each band has a dedicated guide covering frequency ranges, use cases, warnings, and preset archetypes:
- [Band 1: Sub/Foundation Control](./01-Learning/Band-Guide/band-1-sub-foundation.md) - Purple (20-120 Hz)
- [Band 2: Warmth/Body](./01-Learning/Band-Guide/band-2-warmth-body.md) - Pink (140-320 Hz)
- [Band 3: Boxiness Control](./01-Learning/Band-Guide/band-3-boxiness.md) - Orange (300-550 Hz)
- [Band 4: Nasal/Honk Control](./01-Learning/Band-Guide/band-4-nasal-honk.md) - Yellow (600-1200 Hz)
- [Band 5: Presence/Intelligibility](./01-Learning/Band-Guide/band-5-presence.md) - Green (1800-3200 Hz)
- [Band 6: Detail/Crispness](./01-Learning/Band-Guide/band-6-detail.md) - Teal (3500-6500 Hz)
- [Band 7: Air/Polish](./01-Learning/Band-Guide/band-7-air-polish.md) - Blue (8000-16000 Hz)

**Quick Reference Guides** (`Quick-Reference/`)
- [Frequency Chart](./01-Learning/Quick-Reference/frequency-chart.md) - Instrument-specific frequency targets
- [Problem Solver](./01-Learning/Quick-Reference/problem-solver.md) - Quick diagnostic lookups

---

### 📊 [02-Data](./02-Data/) - The Structural Layer (JSON Data Models)

**Core Data Files**
- [`schema/parametric-eq2-band-schema.json`](./02-Data/schema/parametric-eq2-band-schema.json) - JSON Schema validation for all band objects
- [`band-definitions/all-7-bands.json`](./02-Data/band-definitions/all-7-bands.json) - Complete canonical dataset with metadata, roles, UI copy, and control specs
- [`presets/band-archetypes.json`](./02-Data/presets/band-archetypes.json) - Reusable band-level presets (HP Clean 80, De-Mud 250, Air Shelf 12k, etc.)
- [`rules/symptom-solutions.json`](./02-Data/rules/symptom-solutions.json) - Decision tree mapping symptoms to band archetypes with priority levels

**Use Cases:**
- Building custom Patcher presets programmatically
- Creating AI-assisted EQ tools
- Generating study flashcards
- Developing intelligent mixing assistants

---

### 🎯 [03-Workflows](./03-Workflows/) - The Operational Layer

**By Symptom** (Diagnostic Problem Solving)

*Priority 1: Critical Issues*
- [Rumble / Headroom Loss](./03-Workflows/by-symptom/rumble-headroom-fix.md) - Fix invisible energy eating your volume
- [Muddy / Cloudy Mix](./03-Workflows/by-symptom/muddy-cloudy-fix.md) - The #1 mix problem (250 Hz low-mid buildup)
- [Harshness / Ear Fatigue](./03-Workflows/by-symptom/harsh-fatigue-fix.md) - Taming painful upper-mids (4-6 kHz)

*Priority 2: Tone Correction*
- [Boxy / Cardboard Tone](./03-Workflows/by-symptom/boxy-cardboard-fix.md) - Removing the "cheap room" sound (~400 Hz)
- [Nasal / Honky Tone](./03-Workflows/by-symptom/nasal-honk-fix.md) - Smoothing pinched vocals/guitars (~850 Hz)
- [Thin / Weak Audio](./03-Workflows/by-symptom/thin-weak-fix.md) - Adding body and authority to frail sources

**By Instrument** (Specific Chains)
- [Lead Vocal Polish](./03-Workflows/by-instrument/vocal-lead-workflow.md) - 4-step chain for clear, modern vocals
- [Kick Drum & Low End](./03-Workflows/by-instrument/kick-drum-low-end.md) - Boosting weight while maintaining clarity
- [Acoustic Guitar](./03-Workflows/by-instrument/acoustic-guitar-clean.md) - Removing boom to reveal sparkle
- [Modern Synth / EDM](./03-Workflows/by-instrument/modern-synth-edm.md) - Tight, focused leads that cut through

**By Goal** (Context-Specific Strategies)
- [Mix Bus / Mastering Polish](./03-Workflows/by-goal/mix-bus-polish.md) - Subtle finishing touches for master channel

---

### 📚 [04-Reference](./04-Reference/) - The Technical Layer

**Technical Documentation** (`technical-docs/`)
- [Parameter Specifications](./04-Reference/technical-docs/parameter-specifications.md) - Complete control ranges and behaviors
- [DSP Characteristics](./04-Reference/technical-docs/dsp-characteristics.md) - Deep dive into STD/LIN/HQ modes
- [Visual Analysis Guide](./04-Reference/technical-docs/visual-analysis-guide.md) - How to read the heatmap colors
- [Automation & MIDI Mapping](./04-Reference/technical-docs/automation-midi-mapping.md) - Controller integration
- [Mid/Side Setup](./04-Reference/technical-docs/mid-side-setup.md) - Advanced stereo processing
- [Mid/Side vs Stereo Phase](./04-Reference/technical-docs/mid-side-vs-stereo-phase.md) - Understanding the difference

**Frequency Reference Charts** (`frequency-charts/`)
- [Frequency Spectrum Map](./04-Reference/frequency-charts/frequency-spectrum-map.md) - Complete 20Hz-20kHz breakdown
- [Instrument Frequency Ranges](./04-Reference/frequency-charts/instrument-frequency-ranges.md) - Where each instrument lives
- [Problem Frequency Guide](./04-Reference/frequency-charts/problem-frequency-guide.md) - Common resonances and issues

**Integration Guides** (`integration-guides/`)
- [EQ Vibes](./04-Reference/integration-guides/eq-vibes.md) - UI/UX patterns for developers
- [JSON Workflow](./04-Reference/integration-guides/json-workflow.md) - Working with the data model
- [Preset System Architecture](./04-Reference/integration-guides/preset-system-architecture.md) - Building modular presets
- [Assistant Mode Implementation](./04-Reference/integration-guides/assistant-mode-implementation.md) - Creating smart EQ helpers
- [Key Tracking EQ](./04-Reference/integration-guides/key-tracking-eq.md) - Musical EQ that follows MIDI
- [Dynamic EQ Hack](./04-Reference/integration-guides/dynamic-eq-hack.md) - Controller-based frequency-dependent processing

**API Specifications** (`api-specifications/`)
- [Data Model Overview](./04-Reference/api-specifications/data-model-overview.md) - Architecture explanation
- [Schema Validation Examples](./04-Reference/api-specifications/schema-validation-examples.md) - How to validate against schema
- [TypeScript Interfaces](./04-Reference/api-specifications/typescript-interfaces.md) - Type definitions for developers

**Terminology & Glossary** (`terminology-glossary/`)
- [EQ Terminology](./04-Reference/terminology-glossary/eq-terminology.md) - Technical terms explained
- [Frequency Zones](./04-Reference/terminology-glossary/frequency-zones.md) - Spectral region definitions
- [Project Conventions](./04-Reference/terminology-glossary/project-conventions.md) - How this repo is organized

---

## 🛠️ Integration Guide (For Developers)

If you are building tools using the JSON data in this repo:

### Key Technical Notes
1. **Band Indexing:** Bands are 1-indexed (1-7), not 0-indexed
2. **Bandwidth Scale:** The JSON data uses FL Studio's percentage scale (0-100), where **0% = widest** and **100% = narrowest** (inverse of standard Q-factor)
3. **Frequency Anchors:** Use the `anchorTargets` in the JSON definitions to program "safe" default frequencies for automated tools
4. **Color Semantics:** Band colors follow the spectrum (Purple→Blue = Low→High frequency)
5. **Gain Safety Tiers:** Different max gain values for track/bus/master contexts

### Data Flow Pattern
`\`\`
02-Data/band-definitions/all-7-bands.json
  ↓ UI copy, tooltips, frequency zones, controls

02-Data/presets/band-archetypes.json
  ↓ Preset system macros

02-Data/rules/symptom-solutions.json
  ↓ Smart assistant recommendations

02-Data/schema/parametric-eq2-band-schema.json
  ↓ Validates all band data structures
`\`\`

See [`04-Reference/integration-guides/`](./04-Reference/integration-guides/) for detailed implementation patterns.

---

## 📖 Recommended Learning Paths

### Path 1: Beginner (Start Here)
1. Read [00-START-HERE.md](./00-START-HERE.md) for the 5-minute quick start
2. Study the [7-Band Philosophy](#-the-7-band-philosophy) above
3. Print [00-printable-cheat-sheet.md](./00-printable-cheat-sheet.md) for your desk
4. Complete one workflow from [`03-Workflows/by-symptom/`](./03-Workflows/by-symptom/)
5. Start [Ear Training Gym](./01-Learning/ear-training-gym.md) exercises

### Path 2: Intermediate (Problem Solver)
1. Master all [Priority 1 symptom fixes](./03-Workflows/by-symptom/)
2. Study individual [Band Guides](./01-Learning/Band-Guide/)
3. Learn [Cut vs Boost Philosophy](./01-Learning/Concepts/cut-vs-boost-philosophy.md)
4. Practice [instrument-specific workflows](./03-Workflows/by-instrument/)
5. Read [Visual Analysis Guide](./04-Reference/technical-docs/visual-analysis-guide.md)

### Path 3: Advanced (DSP Engineer)
1. Deep dive into [DSP Characteristics](./04-Reference/technical-docs/dsp-characteristics.md)
2. Build [Mid/Side processing](./04-Reference/technical-docs/mid-side-setup.md) chains
3. Implement [Dynamic EQ Hack](./04-Reference/integration-guides/dynamic-eq-hack.md)
4. Create custom tools using [JSON data models](./02-Data/)
5. Master [Key Tracking EQ](./04-Reference/integration-guides/key-tracking-eq.md)

### Path 4: Developer (Building Tools)
1. Study [Data Model Overview](./04-Reference/api-specifications/data-model-overview.md)
2. Review [Schema Validation](./04-Reference/api-specifications/schema-validation-examples.md)
3. Implement [Preset System Architecture](./04-Reference/integration-guides/preset-system-architecture.md)
4. Build [Assistant Mode](./04-Reference/integration-guides/assistant-mode-implementation.md)
5. Use [TypeScript Interfaces](./04-Reference/api-specifications/typescript-interfaces.md)

---

## 🎯 Quick Navigation by Use Case

**I need to fix a specific problem:**
→ See [`03-Workflows/by-symptom/`](./03-Workflows/by-symptom/) or [00-printable-cheat-sheet.md](./00-printable-cheat-sheet.md) Section 2

**I'm EQing a specific instrument:**
→ See [`03-Workflows/by-instrument/`](./03-Workflows/by-instrument/) or [00-printable-cheat-sheet.md](./00-printable-cheat-sheet.md) Section 1

**I want to understand one band deeply:**
→ See [`01-Learning/Band-Guide/`](./01-Learning/Band-Guide/)

**I need frequency numbers fast:**
→ See [00-printable-cheat-sheet.md](./00-printable-cheat-sheet.md) or [`04-Reference/frequency-charts/`](./04-Reference/frequency-charts/)

**I'm building an EQ tool/plugin:**
→ See [`02-Data/`](./02-Data/) and [`04-Reference/integration-guides/`](./04-Reference/integration-guides/)

**I want to learn DSP theory:**
→ See [`04-Reference/technical-docs/dsp-characteristics.md`](./04-Reference/technical-docs/dsp-characteristics.md)

**I need to train my ears:**
→ See [01-Learning/ear-training-gym.md](./01-Learning/ear-training-gym.md)

---

**Project Maintained by:** JaZeR Mainframe
**Version:** 5.0
**License:** Open Educational Resource
**Last Updated:** 2026-02-01
```

---

## FILE: 01-Learning\ear-training-gym.md

```markdown
# The Ear Training Gym

Parametric EQ 2 is not just a tool for correction; it's a tool for education. Use these daily exercises to train your ears to hear frequencies without looking at the analyzer.

---

## 🏋️ Exercise 1: The "Sweep & Guess"

**Goal:** Identify frequencies blindly.

1.  Load a full spectrum song (reference track).
2.  Select **Band 5**.
3.  Set type to **Bell**, **+12 dB Gain**, **Narrow Bandwidth (80%)**.
4.  Close your eyes.
5.  Drag the frequency token randomly left/right.
6.  Stop. Listen to the resonance. **Guess the frequency.**
    - "Is this 1 kHz?" (Nasal/Telephone)
    - "Is this 4 kHz?" (Harsh/Painful)
    - "Is this 100 Hz?" (Thump)
7.  Open your eyes and check. Repeat for 5 minutes.

---

## 🏋️ Exercise 2: White Noise Shaping

**Goal:** Understand filter types and slope behavior.

1.  Load the **3xOsc** plugin, set Osc 1 to **Noise**. (It sounds like static).
2.  Open Parametric EQ 2.
3.  **Low Pass (Band 7):** Sweep down. Listen to how "bright" becomes "dull" becomes "underwater."
4.  **High Pass (Band 1):** Sweep up. Listen to the grounding/weight vanish.
5.  **Notch (Band 4):** Sweep across. Listen to the "Phaser" sound. This is what phase cancellation sounds like.

---

## 🏋️ Exercise 3: The "Mud Hunter"

**Goal:** Identify 200-300 Hz instantly.

1.  Load a muddy mix or a raw drum loop.
2.  Try to cut **exactly 250 Hz** without looking at the value hint bar (use your ears).
3.  Toggle the band On/Off.
4.  If the mud disappears, you found it. If clarity is lost but mud remains, you missed.

---

## 🏋️ Exercise 4: The "Pink Noise" Mixing Method (Pro Trick)

**Goal:** Achieve a balanced mix using your ears and a reference level.

This is a classic mixing technique used to find the "ideal" level for every instrument relative to a balanced frequency spectrum.

1.  **Setup:**
    - Place a Pink Noise generator on a separate mixer track.
    - Set the Pink Noise level to roughly -6dB (or a comfortable level).
2.  **The Process:**
    - Solo the Pink Noise and **one** instrument (e.g., Lead Vocal).
    - Bring the instrument volume down to zero.
    - Slowly raise the instrument volume until you **just barely** hear it poking through the noise.
    - Repeat this for every track in your mix.
3.  **The EQ Test:**
    - If you have to turn a vocal up so loud it hurts to hear it over the noise, it's missing **Presence (Band 5)**.
    - If a kick drum disappears immediately, it lacks **Sub (Band 1)**.
4.  **Verification:**
    - Mute the Pink Noise. Your mix should now be roughly balanced and "flat."

---

## 🏋️ Exercise 5: The A/B Blind Test

**Goal:** Avoid "Volume Bias" (louder sounds better).

1.  Make a big EQ move (e.g., boost Air +3dB).
2.  Compensate by lowering the **Main Gain** by 3dB.
3.  Close your eyes and toggle the **Bypass** button repeatedly until you don't know if it's ON or OFF.
4.  Stop. Listen. Toggle once.
5.  Which one is better?
6.  If you can't tell, the EQ move wasn't necessary.

---

## 📅 Routine

- **Warmup:** 5 minutes of "Sweep & Guess" before every mixing session.
- **Weekly:** 15 minutes of "Pink Noise" testing on a rough mix.
- **Result:** After 2 weeks, you will stop looking at the graph and start reaching for the sound.
```

---

## FILE: 01-Learning\Band-Guide\band-1-sub-foundation.md

```markdown
# Band 1: Sub / Foundation Control 🟣

**Frequency Range:** 20-120 Hz
**Color:** Purple
**Default Filter Type:** High-Pass
**Primary Role:** Remove rumble and protect headroom

## Overview

Band 1 controls the **inaudible energy and physical weight** of your sound. This is not about what you hear - it's about what you *feel* and what eats your headroom. Think of Band 1 as the gatekeeper that decides whether your mix has a solid foundation or turns into a muddy, headroom-eating mess.

**The key principle:** Almost everything except kick drums and bass should have this frequency range removed.

## What This Band Controls

### Physical Impact
- Sub-rumble that you feel more than hear
- Physical "weight" in the low end
- How much the mix moves air (and speakers)
- Headroom availability for limiters and compressors

### Mix Behavior
- Whether kick and bass have clarity vs fighting with everything else
- Whether the mix "collapses" when hitting a limiter
- Whether small speakers (phones, laptops) can reproduce your mix
- Whether the mix translates well to different playback systems

## Primary Functions

### 1. Remove Rumble
Most sources don't need frequencies below 80 Hz. They just add:
- Mud you don't consciously hear
- Headroom problems
- Masking of kick/bass elements

**Who needs it:** Kick drums, bass, 808s, sub-bass synths
**Who doesn't:** Vocals, guitars, most synths, pads, leads, drums (except kick)

### 2. Protect Headroom
Every Hz of unnecessary low-end takes up dynamic range:
- Makes compressors overreact
- Makes limiters pump
- Reduces overall loudness potential
- Creates mix instability

### 3. Separate Kick/Bass from Everything Else
When everything has sub energy, nothing has clarity:
- Kick gets masked
- Bass loses definition
- Mix feels congested in the low end
- Amateur "muddy mix" syndrome

## Common Problems Band 1 Fixes

### Sub Buildup
**Symptom:** Mix feels heavy, undefined, or "cloudy" in a way you can't quite pinpoint
**Solution:** High-pass at 70-100 Hz on all non-bass elements
**Settings:** HP filter, 80 Hz, BW 25% (wide, gentle)

### Limiter Pumping
**Symptom:** Limiter or compressor seems to overreact, causing pumping or breathing
**Solution:** Remove sub rumble that's triggering the dynamics processor
**Settings:** HP filter, 80-90 Hz on problem tracks, verify with limiter bypass

### Low-End Haze
**Symptom:** Bass and kick aren't punchy or clear despite good levels
**Solution:** HP everything else so kick/bass have that space to themselves
**Settings:** HP 80-100 Hz on non-bass elements, leave kick/bass alone

## Creative Uses

### 1. Lo-Fi Rolloff
**What:** Intentional low-end removal for vintage or lo-fi character
**How:** HP at 100-150 Hz (higher than normal)
**When:** Lo-fi beats, vintage vibes, telephone effects, AM radio sound

### 2. Tighter Modern Low End
**What:** Aggressive HP for ultra-clean, modern production
**How:** HP at 90-100 Hz even on elements with some low-end
**When:** EDM, modern pop, anything needing surgical low-end separation

### 3. Reduce Proximity Boom
**What:** Remove bass buildup from close-mic'd sources
**How:** HP at 60-80 Hz to remove proximity effect
**When:** Close-mic'd vocals, acoustic guitar, hand-held vocal recordings

### 4. Make Vocals Sit "Above" the Mix
**What:** Remove vocal low-end so they float over the instrumental
**How:** HP at 80-120 Hz depending on vocal type
**When:** Dense mixes, when vocals are getting lost, modern pop production

## Safe Defaults

### For Vocals (Lead)
- **Type:** High-Pass
- **Frequency:** 80-100 Hz
- **BW:** 25% (wide, gentle rolloff)
- **Result:** Clean, no muddiness, sits above the bass

### For Vocals (Background)
- **Type:** High-Pass
- **Frequency:** 100-150 Hz (more aggressive)
- **BW:** 25-30%
- **Result:** Stay out of the way of lead vocal and bass

### For Synths/Pads (Non-Bass)
- **Type:** High-Pass
- **Frequency:** 80-120 Hz
- **BW:** 25-30%
- **Result:** Clean low-mid, doesn't fight with bass

### For Guitars
- **Type:** High-Pass
- **Frequency:** 80-100 Hz (acoustic), 90-120 Hz (electric)
- **BW:** 25%
- **Result:** Natural tone without mud

### For Kick Drum
- **Type:** Usually leave alone OR use low shelf
- **Frequency:** 45-60 Hz (if boosting for weight)
- **Gain:** +1 to +3 dB (track level only)
- **Result:** Enhanced sub weight

### For Bass/808
- **Type:** Leave alone OR very gentle HP
- **Frequency:** 30-40 Hz (only if removing DC offset or true sub-rumble)
- **BW:** 15-20% (very wide)
- **Result:** Protect against room rumble, preserve fundamental

## Important Warnings

### ⚠️ Don't Over-Cut
**Problem:** High-passing too high makes things sound thin, weak, or unnatural
**How to check:** Bypass the EQ and listen - did you lose too much body?
**Fix:** Lower the HP frequency 10-20 Hz until it sounds natural

**Rules of thumb:**
- Male vocals: Don't go above 100 Hz unless intentional
- Female vocals: Can go 100-120 Hz safely
- Instruments: Err on the side of less cutting

### ⚠️ Never Boost Sub Unless Designing Bass
**Why:** Boosting below 100 Hz on the master or non-bass elements is almost always a mistake

**Problems it causes:**
- Headroom destruction
- Limiter pumping
- Mix translation issues
- Bass masking

**When boosting is OK:**
- Track level only (never bus or master)
- On kick drums (small boost 45-60 Hz)
- On 808/bass synths (small boost for weight)
- Always check on multiple playback systems

### ⚠️ Watch the Bandwidth
**Too narrow (high %):** Sounds unnatural, phase issues, weird resonances
**Too wide (low %):** May not remove enough rumble

**Sweet spot:** 15-30% BW for high-pass filters (wide, musical)

## Frequency-Specific Guidance

### 20-30 Hz (True Sub-Bass)
**What's here:** Mostly felt, barely heard
**Action:** Remove from everything except kick/bass/808
**Why:** No speakers reproduce this well, wastes headroom

### 30-45 Hz (Deep Sub)
**What's here:** Sub-bass fundamentals, kick drum sub
**Action:** Preserve on kick/bass, remove from everything else
**Why:** This is where kick and bass live - keep it exclusive

### 45-60 Hz (Fundamental Bass)
**What's here:** Bass/808 fundamental, kick drum body
**Action:** Can boost slightly on kick/bass if needed
**Why:** Core low-end weight, but be conservative

### 60-80 Hz (Upper Sub)
**What's here:** Bass harmonics, some male vocal fundamentals
**Action:** Common HP point for most instruments
**Why:** Balances natural sound with mud removal

### 80-100 Hz (Sub-to-Low Transition)
**What's here:** Male vocal fundamentals, low guitar notes
**Action:** Most common HP frequency for vocals/instruments
**Why:** Safe removal point that preserves natural tone

### 100-120 Hz (Low-End Boundary)
**What's here:** Low notes of most instruments
**Action:** Upper limit for HP on most sources
**Why:** Going higher starts removing musical content

## Practical Workflow

### Step 1: Start with Everything HP'd
Default approach: HP everything at 80 Hz except kick/bass
- Gives you a clean slate
- Ensures headroom
- Lets you hear what's really needed

### Step 2: Adjust by Listening
For each track:
1. Solo the track
2. Enable the HP filter at 80 Hz
3. Slowly sweep up until you hear it getting thin
4. Back off 10-20 Hz
5. Check in context with the full mix

### Step 3: Verify in Context
With the full mix playing:
- Does the kick have more punch?
- Does the bass have more clarity?
- Does the overall mix feel cleaner?
- Did you lose too much weight anywhere?

### Step 4: Check Translation
Listen on different systems:
- Headphones (should have controlled low-end)
- Phone speaker (should still sound balanced)
- Car (should have punch without boom)
- Studio monitors (should have clarity and power)

## Common Mistakes

### Mistake 1: Not Using Band 1 at All
**Symptom:** Mix feels muddy, limiter pumps, lacks clarity
**Fix:** HP everything except kick/bass at 80 Hz minimum

### Mistake 2: HP'ing Kick/Bass Too Much
**Symptom:** Mix has no weight, sounds thin and weak
**Fix:** Leave kick/bass alone or use very gentle HP (30-40 Hz only for DC offset)

### Mistake 3: Using Too Narrow Bandwidth
**Symptom:** Unnatural sound, phase issues, weird resonance
**Fix:** Use BW of 15-30% (wide rolloff)

### Mistake 4: Setting and Forgetting
**Symptom:** Same HP frequency on everything regardless of source
**Fix:** Adjust per instrument - male vocals differ from female vocals, etc.

### Mistake 5: Boosting Sub on Master
**Symptom:** Entire mix becomes uncontrollable, limiters destroy dynamics
**Fix:** NEVER boost Band 1 on master bus. Fix issues at track level.

## Listen For (Verification)

### When Done Correctly:
- ✅ Kick drum has punch and definition
- ✅ Bass is clear and doesn't fight with kick
- ✅ Mix has headroom and doesn't pump when limited
- ✅ Small speakers can reproduce the mix
- ✅ Overall mix feels "clean" in the low-end
- ✅ Individual tracks retain natural character

### Warning Signs:
- ❌ Vocals sound thin or weak
- ❌ Mix sounds hollow or lacking weight
- ❌ Unnatural tone on instruments
- ❌ Phase issues or weird resonances
- ❌ Mix still muddy despite HP filtering

## Integration with Other Bands

### Band 1 + Band 2 (Warmth)
Combo approach for mud removal:
- Band 1: HP at 80 Hz
- Band 2: Cut -1 to -2 dB at 200-250 Hz
- Result: Clean, controlled low-mids without mud

### Band 1 + Band 5 (Presence)
Vocal clarity combo:
- Band 1: HP at 80-100 Hz
- Band 5: Boost +1 to +2 dB at 2-3 kHz
- Result: Vocal sits above mix with clarity

## Genre-Specific Approaches

### EDM/Electronic
- **Aggressive HP:** 90-100 Hz on everything except kick/bass/sub
- **Why:** Needs surgical low-end separation for club systems
- **Kick/bass:** Often have exclusive sub energy, heavily compressed

### Hip-Hop
- **Moderate HP:** 70-80 Hz on non-bass elements
- **Why:** 808s need exclusive sub range for impact
- **Vocals:** Can go as low as 60-70 Hz on male rap vocals (but check for mud)

### Rock/Live Instruments
- **Gentle HP:** 60-80 Hz on most instruments
- **Why:** Live instruments have natural low-end that can be musical
- **Bass guitar:** Usually leave alone, may HP at 40 Hz for rumble only

### Pop/R&B
- **Vocal-focused HP:** 80-100 Hz on vocals, aggressive HP on background elements
- **Why:** Vocal clarity is paramount, bass/kick support but don't dominate
- **Layering:** Heavy stacking requires clean low-end separation

## Reference Data

For exact specifications and presets, see:
- **Band definition:** `02-Data/band-definitions/eg2.json` (bandId: 1)
- **Archetypes:** `02-Data/presets/eg3.json` (band1_sub)
  - "HP Clean": 80 Hz high-pass, BW 25%
  - "HP Tight": 100 Hz high-pass, BW 30%
  - "Low Shelf Weight": 60 Hz shelf boost +2 dB (bass sources only)

## Practice Exercise

1. **Load a dense mix in FL Studio**
2. **On every non-bass track, add Fruity Parametric EQ 2**
3. **Set Band 1 to high-pass at 80 Hz, BW 25%**
4. **Listen to the difference:**
   - Bypass all EQs
   - Enable all EQs
   - Notice: kick punch, bass clarity, headroom improvement
5. **Adjust individual tracks** based on what you hear
6. **Check on phone speaker** - still balanced?

## Next Steps

- **Continue to Band 2** to learn about removing mud and adding warmth
- **Document your findings** in `03-Workflows/by-instrument/`
- **Create your own HP preset** for your common workflow

---

**Remember:** Band 1 is about subtraction, not addition. When in doubt, high-pass it.

```

---

## FILE: 01-Learning\Band-Guide\band-2-warmth-body.md

```markdown
# Band 2: Low-Mid Body / Warmth 🌸

**Frequency Range:** 140-320 Hz
**Color:** Pink
**Default Filter Type:** Bell
**Primary Role:** Balance warmth and thickness vs mud and cloudiness

## Overview

Band 2 is the **most commonly overused and misunderstood** frequency range in mixing. This is where warmth lives - and where mud accumulates. The fundamental challenge: every instrument wants energy here, but too much makes your mix sound like it's underwater.

**The key principle:** Cut more often than you boost. This range stacks FAST across multiple tracks.

## What This Band Controls

### Tonal Character
- Warmth vs coldness
- Thickness vs thinness
- Fullness vs hollowness
- Body vs weakness

### Spatial Perception
- How close or distant a sound feels
- Whether sounds feel "present" or "in the background"
- Mix density and congestion
- Overall "weight" of the production

### The Mud Zone
This is where amateur mixes die:
- Too much = muddy, unclear, "cloudy" mix
- Too little = thin, weak, no weight
- Just right = warm, clear, and punchy

## Primary Functions

### 1. Warmth
The positive aspect of Band 2:
- Makes things sound full and rich
- Adds "chest" to vocals
- Gives body to thin sounds
- Creates intimacy and closeness

### 2. Thickness
The physical presence dimension:
- How "big" a sound feels
- Whether it fills space
- Impact and weight
- Perceived size

### 3. Body
The substance of the sound:
- Fundamental notes for many instruments
- Core tone  character
- Whether something sounds "real" vs "thin"
- Natural resonance of acoustic spaces

## Common Problems Band 2 Fixes

### Mud
**Symptom:** Mix sounds cloudy, undefined, everything blurs together in the low-mids
**Diagnosis:** Too much 200-300 Hz energy stacking across tracks
**Solution:** Cut -1 to -2 dB at 220-250 Hz on most tracks
**Settings:** Bell, 240 Hz, -1.5 dB, BW 35% (wide)

**Who to cut:**
- Vocals (almost always)
- Guitars (electric and acoustic)
- Synths and pads
- Most drums
- Piano

**Who to leave alone:**
- Bass (has fundamentals here)
- Kick (lower fundamentals)
- Elements intentionally providing warmth

### Boomy Warmth
**Symptom:** Mix has warmth but feels bloated or boomy, lacks definition
**Diagnosis:** Too much 180-220 Hz (lower end of Band 2)
**Solution:** Cut -2 to -3 dB at 200 Hz with wide BW
**Settings:** Bell, 200 Hz, -2 dB, BW 30-35%

### Clouded Mix
**Symptom:** Individual elements sound good soloed but disappear in the mix
**Diagnosis:** Low-mid frequency masking across multiple tracks
**Solution:** Strategic cuts across the mix, not boosting everything
**Settings:** Identify 2-3 elements that need warmth, cut the rest

## Creative Uses

### 1. Add Chest to Vocals
**What:** Boost low-mids to add body and intimacy
**How:** +1 to +2 dB at 180-220 Hz, wide BW
**When:** Thin vocals, distant-sounding vocals, need more presence
**Warning:** Easy to overdo - always check in full mix context

### 2. Thicken Synths/Pads
**What:** Add weight and fullness to thin synthesizers
**How:** +1 to +1.5 dB at 200-250 Hz, BW 30-40%
**When:** Pads need more body, synths sound thin
**Warning:** Can quickly cause mud in dense arrangements

### 3. Make Sound Feel Closer
**What:** Use proximity effect emulation to bring sounds forward
**How:** Small boost 160-200 Hz
**When:** Want intimate, close-mic'd character
**Warning:** Works against elements that should stay back

### 4. Add Weight to Drums
**What:** Enhance drum body and impact
**How:** +1 to +2 dB at 180-240 Hz on snare, toms
**When:** Drums feel thin or lack punch
**Warning:** Can interfere with bass if overdone

## Safe Defaults

### For Vocals (Lead)
**Default Action:** CUT (most common)
- **Type:** Bell
- **Frequency:** 220-250 Hz (sweep to find muddiest point)
- **Gain:** -1 to -2 dB
- **BW:** 35% (wide)
- **Result:** Clear vocal that doesn't cloud the mix

**Exception - Boost for Body:**
- **Frequency:** 180-200 Hz
- **Gain:** +1 to +1.5 dB
- **BW:** 30-35%
- **When:** Thin or distant vocals only

### For Vocals (Background)
- **Type:** Bell
- **Frequency:** 200-250 Hz
- **Gain:** -2 to -3 dB (more aggressive than lead)
- **BW:** 35-40%
- **Result:** Stays out of the way, doesn't add mud

### For Guitars (Acoustic)
- **Type:** Bell
- **Frequency:** 180-220 Hz
- **Gain:** -1 to -2 dB
- **BW:** 30-35%
- **Result:** Clear, defined, not boomy

### For Guitars (Electric)
- **Type:** Bell
- **Frequency:** 200-280 Hz (varies by tone)
- **Gain:** -1 to -2 dB
- **BW:** 35-40%
- **Result:** Tight, doesn't compete with vocals/bass

### For Bass/808
**Usually leave alone or boost carefully:**
- **Type:** Bell or low shelf
- **Frequency:** 160-200 Hz (harmonics, not fundamentals)
- **Gain:** +1 to +2 dB (track level only)
- **BW:** 30-40%
- **Result:** Enhanced harmonics without mud

### For Kick Drum
**Usually subtle cut or neutral:**
- **Frequency:** 180-220 Hz
- **Gain:** -0.5 to -1.5 dB (if sounds muddy)
- **BW:** 30-40%
- **Result:** Kick stays tight and punchy

## Important Warnings

### ⚠️ This Range Stacks FAST
**Problem:** What sounds good on one track becomes mud when stacked

**How it happens:**
- Add +2 dB warmth to vocals
- Add +1.5 dB body to guitar
- Add +2 dB thickness to pad
- Result: +5.5 dB mud pile in your mix

**Prevention:**
1. Choose 1-2 elements to have warmth
2. Cut this range on everything else
3. Always check in full mix context
4. If you boost one thing, cut others

### ⚠️ Cut More Often Than You Boost
**Why:** Band 2 accumulates naturally

Sources that add low-mid energy:
- Room tone and reflections
- Mic proximity effect
- Natural instrument resonances
- Multiple layered sounds

**Rule of thumb:**
- Cut on 70-80% of tracks
- Boost on maybe 10-20% of tracks
- Leave alone on 10% of tracks

### ⚠️ Don't Confuse Warmth with Mud
They're related but different:

**Warmth:**
- Controlled low-mid presence
- Adds body without cloudiness
- Enhances without masking
- Feels good and sounds clear

**Mud:**
- Excessive low-mid buildup
- Obscures detail and clarity
- Causes frequency masking
- Sounds cloudy and undefined

**How to tell:**
- Warmth: You can still hear individual elements clearly
- Mud: Mix sounds like a blur, hard to distinguish parts

### ⚠️ Watch Boosts on Master/Bus
**Danger zone:** Boosting Band 2 on mix bus or master

**Why it's risky:**
- Amplifies accumulated low-mid energy from all tracks
- Can turn a clean mix into a muddy one instantly
- Very little headroom for boost here

**Safe approach:**
- Master/Bus: Maximum +0.5 to +1 dB if needed
- Prefer cuts (-0.5 to -1 dB) to clean up
- Fix warmth issues at track level, not bus level

## Frequency-Specific Guidance

### 140-180 Hz (Low Body)
**What's here:** Bass harmonics, low male vocal fundamentals, low piano notes
**Character:** Deep body, can be boomy
**Action:** Usually cut -1 to -2 dB unless it's a bass source
**Listen for:** Boominess, excessive warmth

### 180-220 Hz (Warmth Zone)
**What's here:** Vocal "chest," bass harmonics, guitar body
**Character:** Where warmth lives
**Action:** Boost here for body (+1 to +2 dB), but sparingly
**Listen for:** Nice warmth vs too much thickness

### 220-260 Hz (Mud Central)
**What's here:** Primary mud accumulation zone
**Character:** Clouds mixes faster than any other range
**Action:** Cut -1 to -2 dB on most non-bass sources
**Listen for:** Cloudiness, lack of clarity

### 260-320 Hz (Upper Low-Mid)
**What's here:** Transition to midrange, some fundamental notes
**Character:** Can add density or congestion
**Action:** Context-dependent, often -0.5 to -1.5 dB cut
**Listen for:** Congestion, thickness without warmth

## Practical Workflow

### Step 1: Start with Strategic Cuts
Default approach: Cut Band 2 on most tracks
1. Load your mix
2. Identify non-bass elements (vocals, guitars, synths, etc.)
3. Cut -1 to -2 dB at 240 Hz, BW 35%
4. Listen to mix clarity improvement

### Step 2: Choose Your Warmth Sources
Decide which 1-2 elements should provide warmth:
- Usually lead vocal OR bass (not both equally)
- Maybe one supporting element (guitar or pad)
- Everything else gets cut

### Step 3: Sweep to Find Mud
On each track:
1. Solo the track
2. Create a boost (+6 dB) at 200 Hz, narrow BW
3. Sweep from 140-320 Hz
4. Find the "muddiest" or "boomiest" frequency
5. Change boost to cut (-1 to -2 dB), widen BW
6. Check in mix context

### Step 4: Verify in Context
Critical step - solo means nothing for Band 2:
1. A/B the EQ (bypass on/off)
2. Listen for clarity improvement
3. Make sure you didn't lose too much body
4. Adjust amount (not all tracks need -2 dB, some only need -0.5 dB)

### Step 5: Check Translation
Test on systems that reveal mud:
- Headphones (mud becomes very obvious)
- Car (small space exaggerates low-mids)
- Phone speaker (surprising amount of low-mid on phones)
- If it's muddy on any system, keep cutting

## Common Mistakes

### Mistake 1: Boosting Everything for Warmth
**Symptom:** Mix sounds thick and undefined despite "warm" individual tracks
**Fix:** Cut most tracks, boost only 1-2 sources

### Mistake 2: Not Cutting Enough
**Symptom:** Mix still cloudy despite some EQ work
**Fix:** Be more aggressive - try -2 to -3 dB cuts on problem tracks

### Mistake 3: Same Settings on All Tracks
**Symptom:** Some tracks too thin, others still muddy
**Fix:** Customize per track - sweep to find each track's mud frequency

### Mistake 4: Forgetting to Check in Context
**Symptom:** Tracks sound good solo but disappear in mix
**Fix:** Always verify EQ decisions with full mix playing

### Mistake 5: Cutting the Bass
**Symptom:** Mix has no weight or bottom end
**Fix:** Leave bass and kick alone in Band 2 (their fundamentals live here)

## Listen For (Verification)

### When Done Correctly:
- ✅ Mix sounds clear and defined
- ✅ Individual instruments are distinguishable
- ✅ Still has warmth and body (not cold/thin)
- ✅ Bass and kick punch through clearly
- ✅ Vocals sit nicely without cloudiness
- ✅ Mix translates well to small speakers

### Warning Signs:
- ❌ Mix sounds thin, weak, or hollow
- ❌ Lost too much body and weight
- ❌ Sounds cold or sterile
- ❌ Bass disappeared
- ❌ Unnatural tone on instruments

## Integration with Other Bands

### Band 1 + Band 2 (Clean Low-End)
Ultimate mud removal combo:
- Band 1: HP at 80 Hz
- Band 2: Cut -1.5 dB at 240 Hz, BW 35%
- Result: Clean, tight low-end with controlled warmth

### Band 2 + Band 3 (Midrange Clarity)
Broad midrange cleanup:
- Band 2: Cut -1.5 dB at 240 Hz
- Band 3: Cut -2 dB at 400 Hz
- Result: Open, clear midrange

### Band 2 + Band 5 (Vocal Forward)
Classic vocal EQ:
- Band 2: Cut -1 to -2 dB at 220-240 Hz (remove mud)
- Band 5: Boost +1 to +2 dB at 2.5 kHz (add presence)
- Result: Clear, forward vocal

## Genre-Specific Approaches

### EDM/Electronic
- **Aggressive cuts:** -2 to -3 dB on most non-bass elements
- **Why:** Needs surgical separation for clarity and punch
- **Bass:** May boost +1 to +2 dB at 180-200 Hz for harmonic weight

### Hip-Hop
- **Vocal-focused cuts:** -1.5 to -2 dB on vocals to avoid 808 conflict
- **Why:** 808 has harmonics in this range, vocals must stay clear
- **808:** Usually leave alone or very slight cut if too boomy

### Rock/Live Instruments
- **Moderate cuts:** -1 to -1.5 dB, preserve some natural body
- **Why:** Live instruments have musical low-mid content
- **Guitars:** Often need -2 dB at 200-250 Hz to avoid congestion

### Pop/R&B
- **Clarity-focused:** Cut vocals/instruments, preserve bass warmth
- **Why:** Pop needs clarity and shine over raw warmth
- **Vocals:** Almost always cut -1 to -2 dB at 220-250 Hz

### Jazz/Acoustic
- **Gentle cuts:** -0.5 to -1 dB, preserve natural warmth
- **Why:** Acoustic instruments benefit from natural body
- **Double bass:** Leave alone or slight boost for woody character

## Reference Data

For exact specifications and presets, see:
- **Band definition:** `02-Data/band-definitions/eg2.json` (bandId: 2)
- **Archetypes:** `02-Data/presets/eg3.json` (band2_warmth)
  - "De-Mud": Bell, 250 Hz, -2 dB, BW 35%
  - "Add Body": Bell, 200 Hz, +1.5 dB, BW 30%

## Practice Exercise

1. **Load a mix that sounds muddy**
2. **On all non-bass tracks:**
   - Add Fruity Parametric EQ 2
   - Set Band 2: Bell, 240 Hz, -2 dB, BW 35%
3. **Listen to the transformation:**
   - Bypass all EQs (muddy)
   - Enable all EQs (clear)
   - Notice how individual elements become more defined
4. **Fine-tune per track:**
   - Sweep 140-320 Hz to find worst mud spot
   - Adjust cut amount based on track
5. **Choose 1-2 sources for warmth:**
   - Maybe add +1 dB at 200 Hz to lead vocal
   - Everything else stays cut

## Next Steps

- **Continue to Band 3** to learn about removing boxiness
- **Document your mud frequencies** per instrument type in `03-Workflows/by-instrument/`
- **Create a "de-mud" preset** for your workflow

---

**Remember:** Band 2 is the mud zone. When in doubt, cut it. Your mix will thank you.

```

---

## FILE: 01-Learning\Band-Guide\band-3-boxiness.md

```markdown
# Band 3: Boxiness / Room Tone 🟠

**Frequency Range:** 300-550 Hz
**Color:** Orange
**Default Filter Type:** Bell
**Primary Role:** Remove cardboard/boxy tone and room resonances

## Overview

Band 3 is the difference between "amateur" and "professional" sound. This range contains the dreaded **"cardboard box" resonance** that makes recordings sound cheap, enclosed, or like they were made in someone's bedroom. It's also where untreated rooms leave their sonic fingerprint.

**The key principle:** Small cuts here make things sound more expensive and open.

## What This Band Controls

- **Boxiness:** The "enclosed in cardboard" sound
- **Room resonances:** Untreated space reflections
- **Midrange congestion:** Instrument masking and buildup
- **Perceived quality:** Amateur vs professional production sound

## Common Problems Band 3 Fixes

### "Recorded in a Room" Sound
**Symptom:** Tracks sound like they were obviously recorded in a small, untreated space
**Solution:** Cut -2 to -3 dB at 350-450 Hz (sweep to find worst resonance)
**Settings:** Bell, BW 50% (medium)

### Boxy Drums/Vocals
**Symptom:** Sounds enclosed, lack openness, "cardboard" quality
**Solution:** Cut -1.5 to -3 dB at 400 Hz
**Settings:** Bell, BW 45-55%

### Congested Midrange
**Symptom:** Multiple instruments fighting in lower midrange
**Solution:** Strategic cuts across tracks at different frequencies
**Settings:** Bell, -1 to -2 dB, medium BW

## Creative Uses

### 1. Make Sound More "Expensive"
**What:** Remove cheap-sounding resonances
**How:** Sweep 300-550 Hz, cut where it sounds "boxy"
**Amount:** -2 to -4 dB
**Result:** More professional, open sound

### 2. Create Distance
**What:** Make sources feel farther away
**How:** Leave Band 3 alone or boost slightly
**When:** Want background elements to stay back
**Amount:** +0.5 to +1 dB for distance

### 3. Add Mid Density
**What:** Thicken sparse mixes
**How:** Tiny boost at 350-400 Hz
**When:** Mix feels thin in the mids
**Warning:** Easy to overdo, creates congestion

## Safe Defaults

### Vocals
- **Frequency:** 350-450 Hz (sweep to find boxiest point)
- **Gain:** -1.5 to -3 dB
- **BW:** 50% (medium)
- **Result:** Open, less "roomy" vocal

### Acoustic Guitar
- **Frequency:** 330-400 Hz
- **Gain:** -2 to -3 dB
- **BW:** 45-55%
- **Result:** Clear, not boxy

### Drums (Snare/Tom)
- **Frequency:** 380-480 Hz
- **Gain:** -2 to -4 dB
- **BW:** 50-60%
- **Result:** Open, not enclosed

### Electric Guitar
- **Frequency:** 350-500 Hz (depends on amp)
- **Gain:** -1 to -2 dB
- **BW:** 45-55%
- **Result:** Cut without mud

## Important Warnings

### ⚠️ Over-Cut Removes Life
**Problem:** Too much cutting makes things sound hollow and lifeless

**Signs:**
- Mix feels empty in the middle
- Instruments lose body
- Overall sound is weak

**Fix:** Back off the cut or widen the BW

### ⚠️ Don't Stack Multiple Mid Cuts
**Problem:** Band 2 + Band 3 + Band 4 cuts create a giant hole

**Prevention:**
- Choose your battles - maybe cut Band 2 OR Band 3, not both aggressively
- Always A/B compare
- If you cut multiple bands, use smaller amounts

## Frequency-Specific Guidance

### 300-350 Hz (Lower Boxiness)
**What's here:** Transition from warmth to mids, some box tone
**Action:** Cut -1 to -2 dB if boxy
**Character:** Dense, can congest

### 350-450 Hz (Core Boxiness)
**What's here:** Primary "cardboard box" resonance
**Action:** Cut -2 to -3 dB on most sources
**Character:** Makes or breaks professional sound

### 450-550 Hz (Upper Boxiness)
**What's here:** Transition to nasal range, some room resonances
**Action:** Cut -1 to -2.5 dB
**Character:** Can sound honky or congested

## Practical Workflow

### Finding the Box Frequency
1. Solo the track
2. Create +6 dB boost, narrow BW (70%)
3. Sweep 300-550 Hz
4. Find where it sounds most "boxy" or "cardboard-like"
5. Change to cut (-2 to -3 dB), medium BW (50%)
6. Verify in mix context

### Integration with Bands 2 & 4
**The Midrange Cleanup Trio:**
- Band 2: Cut -1.5 dB at 240 Hz (mud)
- Band 3: Cut -2 dB at 400 Hz (box)
- Band 4: Cut -1 dB at 850 Hz (honk)
- Result: Clean, clear midrange

## Reference Data

- **Band definition:** `02-Data/band-definitions/eg2.json` (bandId: 3)
- **Archetypes:** `02-Data/presets/eg3.json` (band3_box)
  - "De-Box": Bell, 420 Hz, -2.5 dB, BW 50%
  - "Resonance Notch": Notch, 380 Hz, -4 dB, BW 75% (for obvious resonances only)

---

**Remember:** Band 3 is where amateur recordings reveal themselves. A good cut here = instant professionalism.

```

---

## FILE: 01-Learning\Band-Guide\band-4-nasal-honk.md

```markdown
# Band 4: Nasal / Honk / Mid Focus 🟡

**Frequency Range:** 600-1200 Hz
**Color:** Yellow
**Default Filter Type:** Bell
**Primary Role:** Control nasal quality and midrange aggression

## Overview

Band 4 is the **most sensitive frequency range** - small moves make big differences. This is where voices sound nasal, instruments sound "honky," and mixes can become fatiguing to listen to. It's also where you can make things cut through a mix or push them back.

**The key principle:** Small changes only. ±1 to 2 dB maximum in most cases.

## What This Band Controls

- **Nasal quality:** The "talking through your nose" sound
- **Honk:** The "megaphone" or "telephone" character
- **Forwardness:** How much something pushes at the listener
- **Ear fatigue:** Too much here = listener exhaustion

## Common Problems Band 4 Fixes

### Nasal Vocals
**Symptom:** Vocal sounds like singer is pinching their nose
**Solution:** Cut -1 to -2 dB at 700-1000 Hz
**Settings:** Bell, BW 60% (medium-narrow)
**Find it:** Boost and sweep - it'll sound awful when you hit it

### Honky Instruments
**Symptom:** Guitar, piano, or brass sounds like it's coming through a megaphone
**Solution:** Cut -1 to -2 dB at 800-1000 Hz
**Settings:** Bell, BW 55-65%

### Fatiguing Mids
**Symptom:** Mix sounds aggressive or tiring to listen to
**Solution:** Small cuts (-0.5 to -1.5 dB) across multiple tracks
**Settings:** Bell, BW 50-60%

## Creative Uses

### 1. Make Vocals Cut Through
**What:** Small boost for presence and forward character
**How:** +1 to +2 dB at 900-1100 Hz
**When:** Dense mix, vocal getting lost
**Warning:** Easily becomes harsh - use sparingly

### 2. Telephone/Lo-Fi Effect
**What:** Intentional honky, retro character
**How:** +3 to +6 dB at 1000 Hz, narrow BW (70-80%)
**When:** Creative effect, lo-fi aesthetic
**Result:** AM radio, telephone, vintage sound

### 3. Emphasize Character Over Polish
**What:** Leave or slightly boost for raw, characterful sound
**How:** +0.5 to +1 dB at 800-900 Hz
**When:** Want rawness, edge, aggression
**Genre:** Rock, punk, garage

## Safe Defaults

### Vocals (Reduce Nasal)
- **Frequency:** 700-1000 Hz (sweep to find nasal spot)
- **Gain:** -1 to -2 dB
- **BW:** 60% (medium-narrow)
- **Result:** Natural, less nasal

### Vocals (Add Presence)
- **Frequency:** 900-1100 Hz
- **Gain:** +1 to +1.5 dB
- **BW:** 50-55%
- **When:** Needs to cut through mix
- **Warning:** Check for harshness

### Guitars/Piano
- **Frequency:** 800-1000 Hz
- **Gain:** -1 to -1.5 dB
- **BW:** 55-65%
- **Result:** Less honk, more natural

### Brass/Saxophone
- **Frequency:** 700-900 Hz
- **Gain:** -0.5 to -1.5 dB (tame aggression)
- **BW:** 60%
- **Result:** Smooth, not piercing

## Important Warnings

### ⚠️ Small Moves Only
**Why this range is sensitive:**
- Human ear is most sensitive 1-4 kHz (Band 4 is the entry point)
- Small changes are very audible
- Easy to overdo

**Guidelines:**
- Track level: Maximum ±2 dB
- Bus level: Maximum ±1 dB
- Master level: Maximum ±0.5 dB

### ⚠️ Too Much Cut = Distance
**Problem:** Over-cutting Band 4 makes things sound far away or hollow

**Signs:**
- Vocal or instrument loses presence
- Sounds distant or underwater
- Mix lacks midrange focus

**Fix:** Use smaller cuts or widen BW

### ⚠️ Boost = Potential Harshness
**Problem:** Boosting Band 4 can quickly become fatiguing

**Prevention:**
- Start with +0.5 dB, listen for 30+ seconds
- Increase slowly if needed
- Never boost on multiple tracks without checking total effect
- Always check on headphones (reveals harshness)

## Frequency-Specific Guidance

### 600-750 Hz (Lower Honk)
**What's here:** Low nasal resonances, some body
**Action:** Cut -0.5 to -1.5 dB if honky
**Character:** Can sound thick or congested

### 750-900 Hz (Core Nasal)
**What's here:** Primary nasal/honk zone for vocals
**Action:** Cut -1 to -2 dB for nasal vocals
**Character:** Where nasality lives

### 900-1100 Hz (Upper Honk/Presence)
**What's here:** Presence beginning, can be nasal or forward
**Action:** Cut for honk, boost for presence (carefully)
**Character:** Dual nature - problem or solution

### 1100-1200 Hz (Transition to Presence)
**What's here:** Border with Band 5 presence range
**Action:** Usually subtle adjustments
**Character:** Beginning of "air" and presence

## Practical Workflow

### Finding Nasality
1. Solo vocal or instrument
2. Create +6 dB boost, BW 70%
3. Sweep 600-1200 Hz slowly
4. Listen for the "nose-pinched" or "megaphone" sound
5. That's your nasal frequency
6. Change to cut (-1 to -2 dB), BW 60%
7. Verify sounds more natural

### Adding Controlled Presence
1. If element is getting lost in mix
2. Try small boost +1 dB at 900-1000 Hz
3. Listen in full mix for 30+ seconds
4. If sounds harsh, reduce amount or frequency
5. Consider using Band 5 instead (often better choice)

## Integration with Other Bands

### Band 3 + Band 4 (Midrange Cleanup)
Remove boxy and honky together:
- Band 3: Cut -2 dB at 400 Hz
- Band 4: Cut -1 dB at 850 Hz
- Result: Open, clear midrange

### Band 4 + Band 5 (Presence Control)
Fine-tune vocal presence:
- Band 4: Cut -1 dB at 800 Hz (reduce honk)
- Band 5: Boost +2 dB at 2.5 kHz (add clarity)
- Result: Present without being honky

## Genre-Specific Approaches

### Pop/R&B
- Cut -1 to -2 dB to remove nasality
- Keep vocals smooth and polished

### Rock/Alternative
- May boost +0.5 to +1 dB for aggression
- Embrace some edge and character

### EDM/Electronic
- Usually cut -0.5 to -1 dB
- Keep synthetic sounds smooth

### Hip-Hop
- Depends on style - modern = cut, older = may boost
- Check for 808/vocal interaction

## Reference Data

- **Band definition:** `02-Data/band-definitions/eg2.json` (bandId: 4)
- **Archetypes:** `02-Data/presets/eg3.json` (band4_honk)
  - "Tame Honk": Bell, 850 Hz, -1.5 dB, BW 60%
  - "Telephone": Bell, 1000 Hz, +3 dB, BW 80% (creative effect)

## Practice Exercise

1. **Load a vocal track**
2. **Create +6 dB boost at 800 Hz, narrow BW**
3. **Sweep 600-1200 Hz - listen for nasality**
4. **Note the worst frequency**
5. **Change to -1.5 dB cut at that frequency**
6. **Widen BW to 60%**
7. **Compare before/after** - should sound more natural

---

**Remember:** Band 4 is sensitive. When in doubt, use smaller amounts than you think you need.

```

---

## FILE: 01-Learning\Band-Guide\band-5-presence.md

```markdown
# Band 5: Presence / Intelligibility 🟢

**Frequency Range:** 1800-3200 Hz
**Color:** Green
**Default Filter Type:** Bell
**Primary Role:** Control clarity, definition, and intelligibility

## Overview

Band 5 is the **"make it cut through" band**. This is where vocal intelligibility lives, where lyrics become clear, where lead instruments step forward in the mix. It's also where harshness begins if you're not careful.

**The key principle:** This range makes things "in your face" - use for elements that need to be heard clearly.

## What This Band Controls

- **Clarity:** Whether you can understand lyrics or distinguish notes
- **Definition:** Sharpness and articulation of sounds
- **Intelligibility:** Vocal comprehension and lyric clarity
- **Forwardness:** Whether something sits forward or back in the mix
- **Attack:** Initial transient snap and punch

## Common Problems Band 5 Fixes

### Buried Vocals
**Symptom:** Vocal is loud enough but still hard to hear/understand in dense mix
**Solution:** Boost +1 to +2 dB at 2-3 kHz
**Settings:** Bell, BW 50% (medium)
**Result:** Vocal jumps forward, lyrics become clear

### Dull Leads
**Symptom:** Lead instrument (guitar, synth, etc.) lacks definition and sits back
**Solution:** Boost +1 to +2.5 dB at 2.5-3 kHz
**Settings:** Bell, BW 45-55%
**Result:** Lead cuts through, more defined

### Lack of Articulation
**Symptom:** Can't hear individual notes or words clearly
**Solution:** Boost +1 to +2 dB at 2-2.5 kHz
**Settings:** Bell, BW 50%
**Result:** Improved clarity and note separation

## Creative Uses

### 1. Make Vocals Feel Closer
**What:** Bring vocal right to the listener's ear
**How:** +2 to +3 dB at 2.5-3 kHz
**When:** Intimate vocal style, confessional lyrics
**Warning:** Can become harsh - monitor carefully

### 2. Accentuate Rhythm and Attack
**What:** Emphasize transients and rhythmic elements
**How:** +1 to +2 dB at 2-2.5 kHz
**When:** Percussion, plucky instruments, rhythmic synths
**Result:** More rhythmic energy and impact

### 3. Add Urgency or Excitement
**What:** Make mix feel more energetic and immediate
**How:** Boost across multiple elements at 2.5-3 kHz
**When:** Build-ups, choruses, high-energy sections
**Warning:** Presence stacks - be very careful

## Safe Defaults

### Lead Vocals
- **Frequency:** 2-3 kHz (2.5 kHz common starting point)
- **Gain:** +1 to +2 dB
- **BW:** 50% (medium)
- **Result:** Clear, intelligible, forward

### Background Vocals
- **Frequency:** 2.5-3 kHz
- **Gain:** +0.5 to +1 dB (less than lead)
- **BW:** 45-50%
- **Result:** Support without competing with lead

### Guitar (Lead/Solo)
- **Frequency:** 2.5-3.2 kHz
- **Gain:** +1.5 to +2.5 dB
- **BW:** 50%
- **Result:** Cuts through, defined notes

### Snare Drum
- **Frequency:** 2-2.5 kHz
- **Gain:** +1 to +2 dB
- **BW:** 45-55%
- **Result:** Snappy, defined attack

## Important Warnings

### ⚠️ Overuse = Harshness and Fatigue
**Problem:** Band 5 is right in the ear's most sensitive range

**Signs of overuse:**
- Mix sounds harsh or aggressive
- Listener fatigue after 1-2 minutes
- Everything sounds "in your face"
- Headache-inducing

**Prevention:**
- Use on lead elements only (vocal, main instrument)
- Don't boost on every track
- Maximum +2 dB on track level, +1 dB on bus
- Always check on headphones

### ⚠️ Presence Stacks Across Tracks
**Problem:** Individual presence boosts compound

**Example:**
- Vocal: +2 dB at 2.5 kHz
- Guitar: +2 dB at 2.8 kHz
- Synth: +1.5 dB at 2.6 kHz
- Result: +5.5 dB harsh pile-up

**Solution:**
- Choose 1-2 elements for presence boost
- Cut or leave neutral on supporting elements
- Check cumulative effect in full mix

### ⚠️ Can Create Sibilance Issues
**Problem:** Boosting Band 5 can exaggerate "S" sounds on vocals

**Prevention:**
- Use moderate amounts (+1 to +2 dB max)
- Consider using Band 6 for detail instead
- Use de-esser after EQ if needed
- Check multiple vocal phrases

## Frequency-Specific Guidance

### 1800-2200 Hz (Lower Presence)
**What's here:** Presence foundation, some attack
**Character:** Forwardness without harshness
**Common use:** +1 to +2 dB for gentle clarity

### 2200-2600 Hz (Core Presence)
**What's here:** Primary intelligibility zone
**Character:** Main "cut through" area
**Common use:** +1 to +2 dB for vocal/lead clarity

### 2600-3000 Hz (Upper Presence)
**What's here:** Edge and definition
**Character:** More aggressive, can be harsh
**Common use:** +1 to +1.5 dB for extra bite

### 3000-3200 Hz (Transition to Detail)
**What's here:** Border with Band 6
**Character:** Getting into harshness territory
**Common use:** Careful boosts, often better to use Band 6

## Practical Workflow

### For Buried Vocals
1. Solo vocal in mix context
2. Start with +1 dB at 2.5 kHz, BW 50%
3. Listen - is vocal clearer?
4. If still buried, increase to +1.5 dB
5. If still not enough, try +2 dB
6. If still buried, problem is elsewhere (volume, compression, arrangement)
7. Never exceed +2 dB without questioning why

### For Lead Instruments
1. Identify what should be the "lead"
2. Boost +1 to +2 dB at 2.5-3 kHz
3. Verify it cuts through in full mix
4. Check for harshness on headphones
5. Adjust frequency or amount as needed

### Preventing Harshness
1. Start conservative (+0.5 to +1 dB)
2. Listen for 30+ seconds
3. Check on multiple systems
4. If harsh, reduce amount OR lower frequency
5. Consider cutting competing elements instead of boosting lead

## Integration with Other Bands

### Band 2 + Band 5 (Classic Vocal EQ)
- Band 2: Cut -1.5 dB at 240 Hz (remove mud)
- Band 5: Boost +1.5 dB at 2.5 kHz (add presence)
- Result: Clear, forward vocal

### Band 3 + Band 4 + Band 5 (Full Vocal Treatment)
- Band 3: Cut -2 dB at 400 Hz (remove box)
- Band 4: Cut -1 dB at 850 Hz (remove honk)
- Band 5: Boost +2 dB at 2.5 kHz (add presence)
- Result: Professional, clear, present vocal

### Band 5 + Band 7 (Modern Vocal Polish)
- Band 5: Boost +1.5 dB at 2.5 kHz (presence)
- Band 7: Boost +2.5 dB shelf at 12 kHz (air)
- Result: Clear and airy modern vocal

## Genre-Specific Approaches

### Pop/R&B
- Bold presence: +2 to +3 dB at 2.5-3 kHz
- Vocal is the star, needs maximum clarity

### Rock/Alternative
- Moderate presence: +1 to +2 dB at 2.3-2.7 kHz
- Balance vocal with guitars

### EDM/Electronic
- Selective presence: +1 to +2 dB on vocals only
- Synths usually stay back

### Hip-Hop
- Strong presence: +1.5 to +2.5 dB at 2.5-3 kHz
- Vocal intelligibility crucial for lyrics

### Jazz/Acoustic
- Gentle presence: +0.5 to +1.5 dB at 2-2.5 kHz
- Natural balance, not forced forward

## Listen For (Verification)

### When Done Correctly:
- ✅ Lead element clearly audible in mix
- ✅ Lyrics/notes easily understood
- ✅ Element sits "in front" spatially
- ✅ No harshness or fatigue
- ✅ Natural tone preserved

### Warning Signs:
- ❌ Harsh, fatiguing sound
- ❌ Listener discomfort
- ❌ Sibilance exaggerated
- ❌ Unnatural, "spitty" quality
- ❌ Everything fighting for attention

## Reference Data

- **Band definition:** `02-Data/band-definitions/eg2.json` (bandId: 5)
- **Archetypes:** `02-Data/presets/eg3.json` (band5_presence)
  - "Lead Clarity": Bell, 2500 Hz, +2 dB, BW 50%
  - "Soften Bite": Bell, 2800 Hz, -1.5 dB, BW 55%

## Practice Exercise

1. **Load a mix where vocal is buried**
2. **Solo vocal in mix context**
3. **Add +1 dB at 2.5 kHz, BW 50%**
4. **Listen - is it clearer?**
5. **Increase to +1.5 dB if needed**
6. **Check on headphones for harshness**
7. **Compare before/after** - vocal should be more intelligible without sounding harsh

---

**Remember:** Band 5 is powerful but dangerous. Start with +1 dB and increase only if genuinely needed.

```

---

## FILE: 01-Learning\Band-Guide\band-6-detail.md

```markdown
# Band 6: Upper Presence / Detail 🔵

**Frequency Range:** 3500-6500 Hz
**Color:** Teal
**Default Filter Type:** Bell
**Primary Role:** Control perceived detail and sharpness

## Overview

Band 6 is the **detail and definition band** - where you add crispness, articulation, and "HD quality" to sounds. It's also the sibilance zone and ear-fatigue danger area. Small boosts add professional polish; too much creates listener discomfort.

**The key principle:** Less is more. This range is extremely sensitive.

## What This Band Controls

- **Detail:** Perceived resolution and definition
- **Crispness:** Sharp attack and transient clarity
- **Articulation:** Consonant clarity, note separation
- **Sibilance:** "S," "T," "SH" sounds in vocals
- **Sharpness:** Edge and aggression vs smoothness

## Common Problems Band 6 Fixes

### Dullness
**Symptom:** Mix or element sounds flat, lacks sparkle and detail
**Solution:** Boost +0.5 to +1.5 dB at 4-5 kHz
**Settings:** Bell, BW 35-40% (wide)
**Warning:** Start small, easy to overdo

### Lack of Snap
**Symptom:** Transients feel soft, drums lack attack definition
**Solution:** Boost +1 to +2 dB at 4.5-5.5 kHz
**Settings:** Bell, BW 35-45%
**Result:** Sharper transients, more defined attacks

### Soft Consonants
**Symptom:** Vocal consonants (S, T, K) are unclear
**Solution:** Small boost +0.5 to +1 dB at 5-6 kHz
**Settings:** Bell, BW 40%
**Warning:** Monitor for excessive sibilance

### Harshness (Problem Solving)
**Symptom:** Mix or vocal sounds harsh, sharp, fatiguing
**Solution:** Cut -1 to -3 dB at problem frequency
**Settings:** Bell, BW 55-65% (narrow for specific resonances)
**Result:** Smoother, less fatiguing

## Creative Uses

### 1. Add Edge/Definition
**What:** Make digital sounds feel sharper and more defined
**How:** +0.5 to +1 dB at 4.5-5.5 kHz
**When:** Synths need more character, drums need snap
**Result:** Modern, crisp sound

### 2. Sharper Percussion
**What:** Enhance hi-hat, cymbal, and percussion clarity
**How:** +1 to +2 dB at 5-6 kHz
**When:** Percussion getting lost or sounds dull
**Result:** Defined, crisp percussion

### 3. More "HD" Sound
**What:** Add perceived high-definition quality
**How:** Wide boost +0.5 to +1 dB at 4-5 kHz
**When:** Want modern, hi-fi character
**Warning:** Compounds with Band 7 - check total HF boost

## Safe Defaults

### Vocals (Add Detail)
- **Frequency:** 4.5-5.5 kHz
- **Gain:** +0.5 to +1 dB
- **BW:** 35-40% (wide)
- **Result:** Crisp consonants without harshness
- **Warning:** Monitor sibilance

### Vocals (Tame Harshness)
- **Frequency:** 4-5 kHz (sweep to find harsh frequency)
- **Gain:** -1 to -2 dB
- **BW:** 55-65% (medium-narrow)
- **Result:** Smoother, less fatiguing

### Acoustic Guitar
- **Frequency:** 4.5-5.5 kHz
- **Gain:** +0.5 to +1.5 dB
- **BW:** 35-45%
- **Result:** String definition, pick attack clarity

### Drums/Percussion
- **Frequency:** 5-6 kHz
- **Gain:** +1 to +2 dB
- **BW:** 35-45%
- **Result:** Snap and attack definition

### Cymbals/Hi-Hats
- **Frequency:** 5.5-6.5 kHz
- **Gain:** +0.5 to +1 dB (usually don't need much)
- **BW:** 30-40%
- **Result:** Shimmer and definition

## Important Warnings

### ⚠️ Too Much = Harsh + Fatiguing
**Problem:** Band 6 is in the ear's peak sensitivity range (2-5 kHz)

**Signs of excess:**
- Listener fatigue within minutes
- "Ice-pick" quality
- Harsh sibilance on vocals
- Painful to listen on headphones

**Solution:**
- Maximum +1.5 dB on most sources
- Check on headphones immediately
- Listen for extended period
- If harsh, reduce amount or cut instead

### ⚠️ Watch Sibilance
**Problem:** Boosting Band 6 exaggerates "S" sounds

**Prevention:**
- Use narrow boosts (40-50% BW) to avoid sibilance zone
- Boost 4-5 kHz for clarity, avoid 6-8 kHz for sibilance
- Consider de-esser after EQ
- Check multiple vocal phrases

**If already sibilant:**
- Cut -1 to -2 dB at 6-7 kHz (use Band 6 upper range or Band 7)
- Use narrow BW (60-70%)

### ⚠️ Don't Stack with Bright Saturation
**Problem:** Saturation/distortion + Band 6 boost = excessive harshness

**Be careful when:**
- Using tape saturation
- Using analog emulation
- Using tube/transformer plugins
- Chain has multiple HF enhancers

**Solution:**
- Use either saturation OR EQ boost, not both aggressively
- If using saturation, be very conservative with Band 6
- Check final cumulative HF response

## Frequency-Specific Guidance

### 3500-4000 Hz (Lower Detail)
**What's here:** Transition from presence, clarity foundation
**Character:** Detail without harshness
**Common use:** +0.5 to +1 dB for gentle crispness

### 4000-5000 Hz (Core Detail)
**What's here:** Primary definition zone
**Character:** Clarity and attack
**Common use:** +0.5 to +1.5 dB for detail, OR cut -1 to -2 dB for harshness

### 5000-6000 Hz (Upper Detail/Sibilance)
**What's here:** Consonant clarity, sibilance beginning
**Character:** Sharp and detailed, approaching harsh
**Common use:** +0.5 to +1 dB for snap, careful of sibilance

### 6000-6500 Hz (Sibilance Zone)
**What's here:** Primary sibilance frequencies
**Character:** Very sharp, can be harsh
**Common use:** Often cut -1 to -2 dB to reduce sibilance

## Practical Workflow

### Adding Detail Without Harshness
1. Start with +0.5 dB at 5 kHz, BW 35%
2. Listen in full mix for 30+ seconds
3. If not enough detail, increase to +1 dB
4. Check on headphones - any harshness?
5. If harsh, try lowering frequency to 4.5 kHz
6. Never exceed +1.5 dB without serious justification

### Removing Harshness
1. Boost +6 dB, BW 65% (narrow)
2. Sweep 3.5-6.5 kHz
3. Find the "ice-pick" or most harsh frequency
4. Change to cut -1.5 to -2 dB
5. Adjust BW (wider for general smoothness, narrower for specific resonance)
6. Verify on headphones

### Managing Sibilance
1. If vocal has excessive "S" sounds after Band 6 boost
2. Create second band (or use Band 7 lower range)
3. Cut -1 to -2 dB at 6-7 kHz, BW 60-70%
4. Adjust until sibilance controlled but consonants still clear

## Integration with Other Bands

### Band 5 + Band 6 (Presence + Detail)
Full clarity treatment:
- Band 5: Boost +1.5 dB at 2.5 kHz (presence)
- Band 6: Boost +0.5 to +1 dB at 5 kHz (detail)
- Result: Clear and defined, modern sound
- Warning: Check total HF boost

### Band 6 + Band 7 (Polish Stack)
Modern HF enhancement:
- Band 6: Boost +1 dB at 4.5 kHz (detail)
- Band 7: Boost +2.5 dB shelf at 12 kHz (air)
- Result: Detailed and airy
- Warning: Easy to create harsh top-end

## Genre-Specific Approaches

### Pop/Modern
- +0.5 to +1 dB for crisp, HD quality
- Embrace detail and definition

### Rock/Organic
- Often cut -0.5 to -1 dB for smoothness
- Less aggressive than pop

### EDM/Electronic
- +1 to +1.5 dB for sharp transients
- Digital aesthetic embraces detail

### Hip-Hop
- Varies - modern = +0.5 to +1 dB, classic = often cut
- Check vocal/beat relationship

### Jazz/Classical
- Usually minimal or cut
- Natural instruments, not overly processed

## Reference Data

- **Band definition:** `02-Data/band-definitions/eg2.json` (bandId: 6)
- **Archetypes:** `02-Data/presets/eg3.json` (band6_detail)
  - "Add Detail": Bell, 5000 Hz, +1 dB, BW 35%
  - "Tame Harsh": Bell, 4500 Hz, -2 dB, BW 65%

## Practice Exercise

1. **Load a dull-sounding vocal**
2. **Add +0.5 dB at 5 kHz, BW 35%**
3. **Listen - more detail?**
4. **Increase to +1 dB if needed**
5. **Put on headphones - any harshness or excessive sibilance?**
6. **If yes, reduce amount or lower frequency to 4.5 kHz**
7. **Compare before/after** - should have more clarity without being harsh

---

**Remember:** Band 6 is the "less is more" band. Start with +0.5 dB and increase only if truly needed.

```

---

## FILE: 01-Learning\Band-Guide\band-7-air-polish.md

```markdown
# Band 7: Air / Shine / Polish 🔵

**Frequency Range:** 8000-16000 Hz
**Color:** Blue
**Default Filter Type:** High Shelf
**Primary Role:** Add openness, brightness, and professional polish

## Overview

Band 7 is the **"finishing touch"** - the final polish that makes productions sound modern, expensive, and professional. This is where "air" lives, where mixes open up, where that studio-quality sheen appears. It's also where you can exaggerate noise, artifacts, and harshness if not careful.

**The key principle:** High shelf boost for natural polish. Wide bandwidth for musical results.

## What This Band Controls

- **Air:** The sense of space and openness around sounds
- **Shine:** Glossy, polished, expensive character
- **Brightness:** Overall high-frequency energy
- **Modern sound:** Contemporary production aesthetic
- **Perceived quality:** "Expensive" vs "dull" production

## Common Problems Band 7 Fixes

### Dull Mix
**Symptom:** Mix sounds closed, dark, lacks excitement or modern sheen
**Solution:** High shelf boost +2 to +3 dB at 10-12 kHz
**Settings:** High shelf, BW 15-25% (wide)
**Result:** Open, airy, modern sound

### Closed or Muffled Sound
**Symptom:** Mix feels confined, not open or spacious
**Solution:** High shelf boost +2 to +4 dB at 11-14 kHz
**Settings:** High shelf, BW 20%
**Result:** Sense of space and air

### Lack of Excitement
**Symptom:** Mix is technically fine but lacks energy or engagement
**Solution:** Gentle shelf boost +2 to +3 dB at 12 kHz
**Settings:** High shelf, BW 20-25%
**Result:** More engaging, modern character

## Creative Uses

### 1. "Expensive" Vocal Sheen
**What:** Add professional, polished character to vocals
**How:** High shelf +2 to +3 dB at 10-12 kHz
**When:** Pop, R&B, modern production styles
**Result:** That "studio vocal" quality

### 2. Glossy Pop Sound
**What:** Ultra-polished, radio-ready character
**How:** High shelf +3 to +4 dB at 11-13 kHz (track level)
**When:** Modern pop, commercial production
**Warning:** Can sound "too polished" or artificial in some contexts

### 3. Modern Clarity Without Harshness
**What:** Brightness that doesn't fatigue
**How:** Very wide shelf +2 to +2.5 dB at 12 kHz, BW 15-20%
**When:** Want modern sound but smooth, not aggressive
**Result:** Clear and airy without being harsh

### 4. Reduce Hiss/Artifacts (Problem Solving)
**What:** Tame excessive high-frequency noise
**How:** High shelf -1 to -2 dB at 10-12 kHz
**When:** Noisy recordings, tape hiss, digital artifacts
**Result:** Smoother top-end

## Safe Defaults

### Vocals (Add Air)
- **Type:** High shelf
- **Frequency:** 10-12 kHz
- **Gain:** +2 to +3 dB
- **BW:** 20% (wide)
- **Result:** Open, airy, modern vocal

### Acoustic Guitar
- **Type:** High shelf
- **Frequency:** 11-13 kHz
- **Gain:** +2 to +3 dB
- **BW:** 20-25%
- **Result:** Shimmer and air

### Mix Bus/Master (Final Polish)
- **Type:** High shelf
- **Frequency:** 12-14 kHz
- **Gain:** +0.5 to +1.5 dB (subtle!)
- **BW:** 15-20% (very wide)
- **Result:** Overall sheen and openness
- **Warning:** Easy to overdo on master

### Synths/Pads
- **Type:** High shelf
- **Frequency:** 10-12 kHz
- **Gain:** +1.5 to +3 dB
- **BW:** 20%
- **Result:** Sparkle and dimension

## Important Warnings

### ⚠️ Exaggerates Noise and Artifacts
**Problem:** Boosting Band 7 amplifies everything up high

**What gets boosted:**
- Tape hiss
- Digital artifacts
- Room noise
- Electrical hum harmonics
- Recording noise floor

**Prevention:**
- Clean up noise before EQ
- Use noise reduction if source is noisy
- Be conservative on noisy sources
- Check on headphones (reveals noise clearly)

**When to cut instead:**
- Noisy recordings: Cut -1 to -2 dB
- Lo-fi aesthetic: Cut or leave alone
- Tape hiss present: Small cut helps

### ⚠️ Avoid Big Boosts on Master
**Problem:** Master bus air boost compounds all track-level boosts

**Danger zone:**
- Track level air: +2 to +3 dB
- Bus level air: +1.5 to +2 dB
- Master level air: +2 to +3 dB
- **Total:** +5.5 to +8 dB = harsh, brittle, fatiguing

**Safe approach:**
- Master/Bus: Maximum +1 to +1.5 dB
- Do most air work at track level
- Check cumulative HF response

### ⚠️ Can Sound "Fake" or "Overly Processed"
**Problem:** Too much air loses naturalness

**Signs:**
- Sounds artificial or hyped
- No dynamics in HF (everything bright)
- Lost natural character
- "Too polished" for the genre

**Solution:**
- Be conservative on acoustic/organic material
- Use less on jazz, classical, acoustic genres
- Match the aesthetic to the material

## Frequency-Specific Guidance

### 8000-10000 Hz (Lower Air)
**What's here:** Sibilance zone, beginning of air
**Character:** Can be harsh or sibilant
**Common use:** Often neutral or slight cut for sibilance control

### 10000-12000 Hz (Core Air)
**What's here:** Primary "air" frequencies
**Character:** Openness and sheen without harshness
**Common use:** High shelf +2 to +3 dB (sweet spot)

### 12000-14000 Hz (Upper Air)
**What's here:** Upper air, extreme highs beginning
**Character:** Very open, bright, "expensive"
**Common use:** High shelf +2 to +3 dB for modern sound

### 14000-16000 Hz (Extreme Highs)
**What's here:** Barely audible to many, "super air"
**Character:** Subliminal openness
**Common use:** Included in wide shelf boosts

## Practical Workflow

### Adding Air to Vocals
1. Select high shelf filter
2. Set frequency to 11 kHz
3. Set BW to 20% (wide)
4. Start with +1 dB gain
5. Increase to +2 dB - notice opening up?
6. Try +2.5 or +3 dB if needed
7. Check on headphones for harshness
8. Verify doesn't exaggerate sibilance or noise

### Master Bus Final Polish
1. **Be conservative** - start with +0.5 dB
2. High shelf at 12-14 kHz
3. Very wide BW (15-20%)
4. Increase slowly to +1 or +1.5 dB maximum
5. Check on multiple systems
6. Verify not becoming harsh or brittle
7. Make sure it's actually improving, not just "different"

### For Noisy Sources
1. If source has tape hiss or noise
2. Use high shelf cut instead
3. -1 to -2 dB at 10-12 kHz
4. Wide BW (20-25%)
5. Tames hiss while preserving some air

## Integration with Other Bands

### Band 5 + Band 7 (Modern Vocal)
Clarity + Air combo:
- Band 5: Boost +1.5 dB at 2.5 kHz (presence)
- Band 7: Boost +2.5 dB shelf at 12 kHz (air)
- Result: Clear, present, and airy

### Band 6 + Band 7 (Full Polish)
Detail + Air stack:
- Band 6: Boost +1 dB at 5 kHz (detail)
- Band 7: Boost +2 dB shelf at 11 kHz (air)
- Result: Detailed and open
- Warning: Monitor for total HF boost

### Band 1 + Band 2 + Band 7 (Clean and Bright)
Clean low-end + airy top:
- Band 1: HP at 80 Hz
- Band 2: Cut -1.5 dB at 240 Hz
- Band 7: Boost +2.5 dB shelf at 12 kHz
- Result: Clean, clear, modern sound

## Genre-Specific Approaches

### Pop/R&B
- **Bold air:** +2.5 to +4 dB shelf at 11-13 kHz
- Ultra-polished, radio-ready sound

### EDM/Electronic
- **Modern shine:** +2 to +3 dB shelf at 12 kHz
- Bright, energetic, contemporary

### Rock/Alternative
- **Moderate air:** +1 to +2 dB shelf at 10-12 kHz
- Some openness without losing edge

### Hip-Hop
- **Selective air:** Vocals +2 to +3 dB, beats +1 to +2 dB
- Vocal clarity priority

### Jazz/Classical/Acoustic
- **Minimal or none:** 0 to +1 dB if any
- Natural sound, not overly processed

### Lo-Fi/Vintage
- **Cut air:** -1 to -3 dB shelf at 10 kHz
- Embrace dullness for aesthetic

## Shelf vs Bell

### When to Use High Shelf (Default)
- **For:** Natural, musical air boost
- **Why:** Affects all frequencies above cutoff smoothly
- **Result:** Even, natural-sounding brightening
- **Settings:** BW 15-25% (wide)

### When to Use Bell
- **For:** Targeted boost or cut in specific HF area
- **Why:** More control over specific range
- **When:** Problem-solving, not general brightening
- **Settings:** BW 40-60%

## Listen For (Verification)

### When Done Correctly:
- ✅ Mix sounds open and spacious
- ✅ Modern, polished character
- ✅ "Expensive" studio quality
- ✅ Still natural and musical
- ✅ Not harsh or fatiguing
- ✅ Translates well to different systems

### Warning Signs:
- ❌ Harsh, brittle top-end
- ❌ Excessive sibilance
- ❌ Noise and hiss amplified
- ❌ Sounds fake or "over-EQ'd"
- ❌ Listener fatigue
- ❌ Lost natural character

## Common Mistakes

### Mistake 1: Too Much on Master
**Problem:** Stacking track + bus + master air = harsh
**Fix:** Do most air work at track level, be subtle on master

### Mistake 2: Same Amount on Everything
**Problem:** Everything bright = nothing stands out, harsh mix
**Fix:** Choose key elements for air (vocals, leads), leave others neutral

### Mistake 3: Ignoring Noise Floor
**Problem:** Boosting air on noisy sources amplifies noise
**Fix:** Clean first, then EQ. Or cut Band 7 instead.

### Mistake 4: Using Narrow Bandwidth
**Problem:** Narrow shelf sounds unnatural and harsh
**Fix:** Use wide BW (15-25%) for musical results

## Reference Data

- **Band definition:** `02-Data/band-definitions/eg2.json` (bandId: 7)
- **Archetypes:** `02-Data/presets/eg3.json` (band7_air)
  - "Air Shelf": High shelf, 12000 Hz, +2.5 dB, BW 20%
  - "Reduce Hiss": High shelf, 12000 Hz, -1.5 dB, BW 25%

## Practice Exercise

1. **Load a dull-sounding vocal or mix**
2. **Set Band 7 to high shelf, 12 kHz, BW 20%**
3. **Start with +1 dB**
4. **Listen - does it open up?**
5. **Increase to +2 dB - more air?**
6. **Try +2.5 or +3 dB if needed**
7. **Check on headphones - any harshness or excessive sibilance?**
8. **Check for noise amplification**
9. **Compare before/after** - should sound more open and polished without being harsh

---

**Remember:** Band 7 is the finishing touch. Add it last, keep it wide, and don't overdo it.

```

---

## FILE: 01-Learning\Concepts\context-matters-track-bus-master.md

```markdown
# Context Matters: Track vs Bus vs Master EQ

Why the same EQ move has different effects at different stages of your mix chain.

## The Three Contexts

### Track Level (Individual Sounds)
- **What:** EQ on individual tracks (vocal, guitar, drum, etc.)
- **When:** First stage of mixing
- **Freedom:** Most aggressive moves allowed
- **Typical range:** ±3 to ±6 dB

### Bus Level (Group Processing)
- **What:** EQ on grouped tracks (drum bus, vocal bus, instrument bus)
- **When:** After individual tracks are balanced
- **Freedom:** Moderate moves
- **Typical range:** ±1.5 to ±3 dB

### Master Level (Final Polish)
- **What:** EQ on the entire mix
- **When:** Final stage, mastering
- **Freedom:** Very subtle moves only
- **Typical range:** ±0.5 to ±1.5 dB

## Why Context Changes Everything

### Compounding Effect
**Track level** + **Bus level** + **Master level** = **Cumulative boost/cut**

**Example - Air boost:**
- Vocal track: +2.5 dB @ 12 kHz (Band 7)
- Vocal bus: +1.5 dB shelf @ 12 kHz
- Master: +2 dB shelf @ 12 kHz
- **Total:** +6 dB = harsh, brittle, fatiguing

**Better approach:**
- Vocal track: +2 dB @ 12 kHz
- Vocal bus: +0.5 dB shelf @ 12 kHz
- Master: +1 dB shelf @ 12 kHz
- **Total:** +3.5 dB = polished without harshness

### Number of Sources Affected
- **Track:** 1 source
- **Bus:** Multiple sources
- **Master:** ALL sources

**Implication:** Broader effect = smaller moves needed

## Track Level EQ

### Purpose
- **Correct** individual source problems
- **Shape** tone of specific elements
- **Prepare** tracks to sit well in mix

### What You Can Do
✅ Aggressive problem-solving
- HP filtering (Band 1)
- Mud removal (Band 2: -2 to -3 dB)
- De-boxing (Band 3: -2 to -4 dB)
- Nasal reduction (Band 4: -1 to -2 dB)

✅ Significant enhancement
- Presence boosts (Band 5: +2 to +3 dB)
- Detail addition (Band 6: +1 to +2 dB)
- Air enhancement (Band 7: +2 to +4 dB)

✅ Creative tone shaping
- Character changes
- Dramatic filtering
- Genre-specific adjustments

### Safe Maximums (per band)
All bands allow up to **±6 dB** at track level according to the data model, but typical use is:
- Cuts: -1 to -4 dB
- Boosts: +1 to +3 dB (rarely +6 dB)

### Track Level Philosophy
**Do the heavy lifting here.**
- Most EQ work happens at track level
- Get each track sounding right individually
- Prepare tracks to fit together

## Bus Level EQ

### Purpose
- **Glue** multiple tracks together
- **Balance** group of sounds as one unit
- **Polish** collective tone

### What You Can Do
✅ Gentle cohesion moves
- Small cuts to unify tone
- Subtle boosts for group character
- Gentle sculpting of frequency balance

❌ What to avoid
- Large corrective moves (should be done at track level)
- Dramatic tone shaping
- Aggressive boosts

### Safe Maximums (per band)
All bands allow up to **±3 dB** at bus level according to the data model, but typical use is:
- Cuts: -0.5 to -2 dB
- Boosts: +0.5 to +1.5 dB

### Common Bus EQ Uses

**Vocal Bus:**
- Slight air boost: +1 to +1.5 dB shelf @ 12 kHz
- Group de-mud: -1 dB @ 240 Hz
- Subtle presence: +0.5 to +1 dB @ 2.5 kHz

**Drum Bus:**
- HP to clean up: 40-50 Hz
- Slight punch: +1 dB @ 60-80 Hz (kick body)
- Snappy top: +1 dB @ 5-6 kHz

**Instrument Bus:**
- De-mud: -1 to -1.5 dB @ 200-250 Hz
- Gentle air: +1 dB shelf @ 10-12 kHz

### Bus Level Philosophy
**Subtle glue, not correction.**
- If you need big moves on a bus, fix individual tracks instead
- Bus EQ should enhance what's already working
- Think "polish" not "problem-solving"

## Master Level EQ

### Purpose
- **Final balance** of the complete mix
- **Subtle enhancement** for competitive loudness/tone
- **Translation** optimization for different systems

### What You Can Do
✅ Micro-adjustments only
- Tiny tonal tweaks
- Very subtle enhancement
- Final polish

❌ What to NEVER do
- Fix individual instrument problems
- Dramatic frequency changes
- Compensate for poor mix decisions

### Safe Maximums (per band)
All bands allow up to **±1.5 dB** at master level according to the data model, but typical use is:
- Cuts: -0.5 to -1 dB
- Boosts: +0.5 to +1 dB

### Common Master EQ Uses

**Clean up bottom:**
- HP at 25-30 Hz (remove true sub-rumble)
- Slight cut -0.5 to -1 dB @ 200-250 Hz if still muddy

**Final polish:**
- Gentle air: +0.5 to +1 dB shelf @ 12-14 kHz
- Subtle presence: +0.5 dB @ 2.5-3 kHz (if really needed)

**Problem solving:**
- Tame harshness: -0.5 to -1 dB @ 3-5 kHz
- Smooth out: -0.5 dB where needed

### Master Level Philosophy
**If you're doing more than ±1 dB, something's wrong upstream.**
- Master EQ fixes the mix, not individual elements
- Large moves indicate problems in the mix stage
- Go back and fix at track/bus level instead

### The "Mastering" Misconception
**Wrong:** "I'll fix it in mastering"
**Right:** "I'll polish an already great mix in mastering"

Mastering EQ should be subtle finishing touches, not problem-solving.

## The Cascade Effect

### Example: Air Enhancement Gone Wrong

**Track Level:**
- Lead vocal: +3 dB shelf @ 12 kHz
- BGVs (3 tracks): +2 dB shelf @ 11 kHz each
- Acoustic guitar: +2.5 dB shelf @ 12 kHz
- Piano: +2 dB shelf @ 11 kHz
- Strings: +2 dB shelf @ 10 kHz

**Bus Level:**
- Vocal bus (lead + BGVs): +1.5 dB shelf @ 12 kHz
- Instrument bus: +1 dB shelf @ 11 kHz

**Master:**
- Mix bus: +2 dB shelf @ 13 kHz

**Result:** Cumulative +10-15 dB in upper frequencies = harsh, brittle, unlistenable

### Better Approach

**Track Level:**
- Lead vocal only: +2 dB shelf @ 12 kHz
- Everything else: neutral or slight cuts

**Bus Level:**
- Vocal bus: +0.5 dB shelf @ 12 kHz
- Instrument bus: neutral

**Master:**
- Mix bus: +1 dB shelf @ 13 kHz

**Result:** Cumulative +3.5 dB = polished and airy without harshness

## Decision Matrix

### Where to Make Your Move

| Issue | Fix At | Why |
|-------|--------|-----|
| Single track muddy | TRACK | Specific problem |
| All drums boxy | DRUM BUS | Group issue |
| Entire mix slightly dull | MASTER | Overall character |
| Vocal too nasal | TRACK | Individual correction |
| Vocal bus too dark | BUS | Group polish |
| Mix lacks slight air | MASTER | Final enhancement |
| Guitar too bright | TRACK | Specific taming |
| Instrument bus too warm | BUS | Group balance |

### The Diagnostic Flow

1. **Identify the problem** - What sounds wrong?
2. **Locate the source** - One track? A group? The whole mix?
3. **Choose the right level:**
   - **Specific track** → Track EQ
   - **Group of tracks** → Bus EQ
   - **Overall mix character** → Master EQ
4. **Use appropriate amount** based on context

## Practical Guidelines by Band

### Band 1 (Sub/HP)
- **Track:** HP 70-100 Hz on most sources
- **Bus:** HP 30-40 Hz if needed (cleanup only)
- **Master:** HP 25-30 Hz (DC offset/rumble removal only)

### Band 2 (Warmth/Mud)
- **Track:** -1 to -3 dB cuts common, occasional +1 to +2 dB boost
- **Bus:** -0.5 to -1.5 dB if group is muddy
- **Master:** -0.5 to -1 dB maximum

### Band 3 (Boxiness)
- **Track:** -1.5 to -4 dB cuts
- **Bus:** -0.5 to -1.5 dB if needed
- **Master:** -0.5 to -1 dB maximum (rarely needed)

### Band 4 (Nasal/Honk)
- **Track:** -1 to -2 dB cuts (small moves)
- **Bus:** -0.5 to -1 dB if needed
- **Master:** -0.5 dB maximum (very rare)

### Band 5 (Presence)
- **Track:** -1 to +3 dB (boost for leads, cut for competing elements)
- **Bus:** -0.5 to +1.5 dB
- **Master:** +0.5 to +1 dB maximum

### Band 6 (Detail)
- **Track:** -2 to +2 dB (cut harshness or add detail)
- **Bus:** -1 to +1 dB
- **Master:** +0.5 to +1 dB maximum

### Band 7 (Air)
- **Track:** +1 to +4 dB shelf (leads and featured elements)
- **Bus:** +0.5 to +2 dB shelf
- **Master:** +0.5 to +1.5 dB shelf maximum

## Common Mistakes by Context

### Track Level Mistakes
❌ Being too timid with cuts
❌ Using same settings on every track
❌ Not addressing obvious problems

✅ Do: Be decisive, customize per track, fix problems here

### Bus Level Mistakes
❌ Using bus EQ to fix individual track problems
❌ Making dramatic moves
❌ Treating bus like a track

✅ Do: Gentle moves, glue thinking, group cohesion

### Master Level Mistakes
❌ "Fixing" the mix on the master
❌ Boosting more than +1 dB on anything
❌ Using master EQ to compensate for bad mixing

✅ Do: Micro-adjustments, final polish only, trust the mix

## The Professional Approach

### Mixing Workflow
1. **Track EQ first** - Get each element right
2. **Check in context** - How do tracks interact?
3. **Bus EQ second** - Polish groups if needed
4. **Master EQ last** - Final subtle tweaks only

### The Pyramid Principle
`\`\`
        MASTER (subtle)
           /\
          /  \
         /    \
    BUS (moderate)
       /\    /\
      /  \  /  \
    TRACK (aggressive)
`\`\`

- Foundation: Aggressive track-level work
- Middle: Moderate bus-level glue
- Top: Subtle master-level finish

### Verification Questions
Before making any move, ask:

**"Is this the right level to make this change?"**
- If fixing one track → Track EQ
- If affecting a group → Bus EQ
- If touching up the whole mix → Master EQ

**"Am I being too aggressive for this context?"**
- Track: Can be aggressive
- Bus: Should be moderate
- Master: Must be subtle

**"Did I already boost/cut this frequency elsewhere?"**
- Check the cascade effect
- Avoid compounding moves

## Summary

| Context | Purpose | Amount | Philosophy |
|---------|---------|--------|------------|
| **Track** | Correct & shape | ±1 to ±4 dB typical | Heavy lifting |
| **Bus** | Glue & polish | ±0.5 to ±2 dB | Gentle cohesion |
| **Master** | Final balance | ±0.5 to ±1 dB | Micro-adjustments |

**Golden Rule:** The broader the context, the smaller the move.

---

**Practice:** Load a mix and identify where each EQ issue should actually be fixed - track, bus, or master. Often you'll find you're trying to fix track problems on the master, which never works well.

```

---

## FILE: 01-Learning\Concepts\cut-vs-boost-philosophy.md

```markdown
# Cut vs Boost Philosophy

Understanding when to cut, when to boost, and why it matters.

## The Core Principle

**"Cut to fix problems, boost to enhance character."**

Most mixing issues are solved by removing problematic frequencies, not by adding "good" frequencies. This is counter-intuitive for beginners who think "more is better."

## Why Cutting is Safer

### 1. Headroom Preservation
- **Cuts:** Create space, reduce level, free up headroom
- **Boosts:** Increase level, consume headroom, risk clipping
- **Result:** Cuts allow louder final mix without distortion

### 2. Frequency Stacking
- **Problem:** Multiple tracks with the same boost compound
  - Track 1: +2 dB @ 3 kHz
  - Track 2: +2 dB @ 3 kHz
  - Track 3: +2 dB @ 3 kHz
  - **Total:** +6 dB harsh pile-up
- **Solution:** Cut competing tracks instead of boosting the lead

### 3. Natural Sound
- **Cuts:** Remove unnatural elements (room resonances, mic coloration)
- **Boosts:** Can create artificial, "EQ'd" sound
- **Result:** Cuts often sound more natural and transparent

### 4. Problem Solving
- Mud, boxiness, harshness = **excess** energy
- Remove the excess rather than boost around it
- More surgical and effective

## When to Cut

### Corrective EQ (Most Common)
**Remove** problematic frequencies:

- **Band 1:** HP to remove rumble (always corrective)
- **Band 2:** Cut mud at 200-250 Hz
- **Band 3:** Cut boxiness at 350-450 Hz
- **Band 4:** Cut nasality at 700-1000 Hz
- **Band 6:** Cut harshness at 4-5 kHz

**Philosophy:** If something sounds wrong, it's usually *too much* of something

### Creating Space
**Carve out** frequency space for other elements:

- Cut guitars at 200-300 Hz to make room for bass
- Cut pads at 2-3 kHz to make room for vocal presence
- Cut background elements to let foreground shine

**Philosophy:** Mix is a puzzle - pieces must fit together

### Reducing Masking
**Remove frequencies** that hide other elements:

- If vocal is buried, maybe instruments have too much 2-3 kHz
- Instead of boosting vocal more, cut competing instruments
- Often more effective and natural

## When to Boost

### Enhancement (Use Sparingly)
**Add character** that's missing:

- **Band 2:** Add warmth/body if source is thin (rare)
- **Band 5:** Add presence to lead vocal or instrument
- **Band 7:** Add air and polish for modern sheen

**Philosophy:** Only boost when something genuinely needs more

### Bringing Elements Forward
**Make lead elements** cut through:

- Boost Band 5 on lead vocal for intelligibility
- Boost Band 6 slightly for detail on key elements
- Boost Band 7 for polish on featured tracks

**Philosophy:** Choose 1-2 elements to "feature," boost those, cut/neutral on rest

### Creative Tone Shaping
**Intentional character** changes:

- Band 2 boost for "thick" lo-fi vibe
- Band 4 boost for telephone/vintage effect
- Band 6 boost for aggressive, sharp sound

**Philosophy:** When the goal is a specific aesthetic, not natural reproduction

## The Boost Inversion Technique

Instead of boosting one thing, **cut everything else:**

### Example: Buried Vocal
**Beginner approach:**
- Boost vocal Band 5 +3 dB
- Result: Vocal forward but potentially harsh

**Advanced approach:**
- Leave vocal neutral
- Cut competing instruments Band 5 -1 to -2 dB
- Result: Vocal appears more present, sounds more natural

### Why It Works
- Preserves headroom
- Sounds more natural
- Prevents frequency stacking
- Solves masking issue at the source

## Band-Specific Cut vs Boost Tendencies

### Bands Where You Mostly CUT
- **Band 1:** Always cut (HP filter) except bass sources
- **Band 2:** Cut 70-80% of the time (mud accumulates)
- **Band 3:** Cut 80-90% of the time (boxiness is a problem)
- **Band 4:** Cut 60-70% of the time (nasality/honk)
- **Band 6:** Cut 50-60% of the time (harshness common)

### Bands Where You Can BOOST More Freely
- **Band 5:** Boost 40-50% of the time (presence, intelligibility)
- **Band 7:** Boost 60-70% of the time (air, polish)

**Why the difference?**
- Lower/mid frequencies accumulate and clash more
- Upper frequencies (5 & 7) add clarity without as much buildup
- Still be careful - even these can stack and become harsh

## Context Matters: Track vs Bus vs Master

### Track Level
**More freedom to boost:**
- Can boost ±3 to ±6 dB
- Working with individual element
- Effects don't compound yet

### Bus Level
**More conservative:**
- Maximum ±2 to ±3 dB
- Affecting multiple tracks
- Boosts start to compound

### Master Level
**Extremely subtle:**
- Maximum ±1 to ±1.5 dB
- Affecting entire mix
- Any boost multiplies previous boosts
- **Prefer cuts** to clean up final mix

## Practical Guidelines

### Amount Guidelines
**Cuts:**
- Track: -1 to -4 dB typical
- Bus: -0.5 to -2 dB
- Master: -0.5 to -1 dB

**Boosts:**
- Track: +1 to +3 dB typical (rarely +6 dB)
- Bus: +0.5 to +2 dB
- Master: +0.5 to +1 dB maximum

### Number of Moves
**Better:** Fewer, well-chosen cuts
**Worse:** Many small boosts across all bands

**Example - Good vocal EQ:**
- Band 1: HP
- Band 2: Cut -1.5 dB
- Band 3: Cut -2 dB
- Band 5: Boost +1.5 dB
- **Total:** 3 cuts, 1 boost = clean and focused

**Example - Problem vocal EQ:**
- Band 2: Boost +1 dB
- Band 3: Boost +1 dB
- Band 4: Boost +0.5 dB
- Band 5: Boost +2 dB
- Band 6: Boost +1 dB
- Band 7: Boost +2 dB
- **Total:** 6 boosts = +7.5 dB harsh, unnatural

## Common Mistakes

### Mistake 1: Boosting to Fix Problems
**Wrong:** Mix is muddy → Boost highs to compensate
**Right:** Mix is muddy → Cut mud at Band 2 (200-250 Hz)

**Why:** Boosting highs doesn't remove the mud, just creates imbalance

### Mistake 2: Matching Cuts with Boosts
**Wrong:** Cut -2 dB somewhere, must boost +2 dB elsewhere to "balance"
**Right:** Cut what's wrong, only boost if something truly needs enhancement

**Why:** EQ isn't about keeping total gain neutral - it's about spectral balance

### Mistake 3: Boosting Everything
**Wrong:** Every track gets +2 dB at Band 5 for presence
**Right:** Choose lead element for +2 dB, leave others neutral or cut

**Why:** Boosts compound - if everything is present, nothing is

### Mistake 4: Afraid to Cut
**Wrong:** Timid -0.5 dB cuts that don't solve the problem
**Right:** Confident -2 to -3 dB cuts where needed

**Why:** If there's a problem, address it decisively

## The "Smiley Face" EQ Trap

**What it is:**
- Cut mids
- Boost lows and highs
- Creates smiley-shaped curve
- Beginner mistake

**Why it's wrong:**
- Removes midrange body and presence
- Creates hollow, scooped sound
- Vocals and instruments lose definition
- Only works for specific creative effects

**Exceptions:**
- Some metal guitars (intentional scoop)
- Lo-fi effects
- Specific creative aesthetics
- NOT for general mixing

## The Professional Approach

### Start Subtractive
1. **HP everything** (Band 1) except bass/kick
2. **Remove obvious problems** (mud, boxiness, harshness)
3. **Check mix clarity** - already better?
4. **Only then boost** if something truly needs enhancement

### The "If in Doubt, Cut" Rule
When unsure whether to boost or cut:
- Default to cutting
- If cutting makes it worse, you needed a boost
- If cutting makes it better, you were right
- Easier to add back than to remove excess

### Verify with A/B
**For every EQ decision:**
1. Make the move
2. Bypass EQ
3. Enable EQ
4. Ask: "Is this better or just different?"
5. If just different, reconsider

## Summary

| Situation | Action | Reason |
|-----------|--------|--------|
| Problem frequency | CUT | Remove excess energy |
| Need to feature element | BOOST (carefully) | Enhance character |
| Creating space | CUT competing elements | Reduce masking |
| Multiple tracks stacking | CUT most, BOOST one | Prevent buildup |
| Mix bus/master | PREFER CUTS | Avoid compounding boosts |
| Unsure what to do | CUT first | Safer default |

**Golden rule:** Cut to fix, boost to enhance. When in doubt, cut.

---

**Practice:** Load a mix and try EQing using ONLY cuts (plus Band 1 HP). See how far you can get before you need a single boost. Often, you'll be surprised how little boosting is actually necessary.

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Parametric EQ 2: The Surgical Scalpel

> **Scope:** Full parameter analysis, Filter Topology, and Visualization Science.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** High.

## 🧠 The "Visual" Concept
Parametric EQ 2 is defined by its visualization engine. It combines a spectral analyzer with a heatmap to show "Energy Frequency Distribution". Understanding the **Pivot Slope** and **Linear Phase** modes is key to mastering this tool.

**Signal Flow:**
`Input` -> **[PRE-GAIN]** -> **[BAND 1-7 FILTERS]** -> **[HQ OVERSAMPLING]** -> **[OUTPUT GAIN]**

*   **Critical Nuance:** The visualizer reacts *after* the EQ processing (Post-EQ). What you see is the result of your changes.

---

## 🎛️ Section 1: Band Controls (FILTERS Tag)

Each of the 7 Bands is identical but defaults to specific shapes.

### Band Parameters

| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Frequency (FREQ)** | 20Hz - 20kHz | **Center Point.** <br> *Nuance:* Right-click a Band Token -> Key -> Select a note to tune the band to a musical frequency (e.g., A4 = 440Hz). |
| **Gain (Level)** | -18dB to +18dB | **Boost/Cut Amount.** <br> *Nuance:* Holding `Alt` while clicking resets the gain to 0dB. |
| **Bandwidth (BW)** | Narrow to Wide | **Q Factor.** <br> *Mouse Wheel:* Hover over a token and scroll to change BW. <br> *Nuance:* Narrow Q causes "ringing" in IIR mode. |
| **Type** | Shape Select | **Filter Topology.** <br> *Peaking:* Bell curve. <br> *Shelf:* Steps up/down. <br> *Low/High Pass:* Cuts off frequencies. <br> *Notch:* Removes a thin slice (Phasing). |
| **Order (Slope)** | Gentle to Steep | **Steepness.** <br> *Gentle 4:* -24dB/Oct. <br> *Steep 8:* -48dB/Oct (Brickwall-ish). <br> *Nuance:* Steeper slopes cause more phase shift in Standard mode. |

---

## 🔁 Section 2: Filter Modes (HQ Tag)

### Standard (IIR) vs Linear Phase (LIN)

| Mode | Technology | Usage Scenario | Artifacts |
| :--- | :--- | :--- | :--- |
| **Standard (Off)** | Infinite Impulse Response | Mixing / Tracking / Standard EQ. | **Phase Rotation:** Shifts the timing of frequencies. Zero latency. |
| **HQ** | Oversampling | High-end Mixing. | Reduces "Cramping" near 20kHz. Slight CPU Use. |
| **LIN (Linear)** | Fast Fourier Transform | Mastering / Parallel Processing. | **Pre-Ringing:** Transients may be smeared *before* the hit. High Latency. |

*   **When to use LIN?** When parallel processing (e.g., Drum Bus) where a phase shift would cause cancellation.
*   **When to avoid LIN?** On punchy drums (Pre-Ringing softens impact) or vocals (Latency).

---

## 📊 Section 3: Visualization (SPECTRAL Tag)

The background heatmap is not just pretty colors; it's a scientific instrument.

| Control | Function & Nuance |
| :--- | :--- |
| **Histogram** | **The Heatmap.** <br> Shows frequency distribution over time. <br> *Red:* Loud. *Blue:* Quiet. |
| **Pivot Slope** | **Tilt.** <br> *4.5dB (Default):* "Pink Noise" looks flat. Balances Bass vs Highs for human hearing. <br> *3dB:* Useful for modern Pop/Trap mixing (Brighter balance). <br> *6dB:* Technical analysis (Sawtooth looks flat). |
| **Range** | **Dynamic Floor.** <br> Sets the silence threshold. <br> *-120dB:* Shows everything including noise floor. <br> *-60dB:* Only shows musical elements. |
| **Precision** | **Resolution.** <br> *High:* Detailed frequency bands but slower refresh rate. <br> *Low:* Fast reaction time but blurrier. |

---

## 🛠️ Section 4: Advanced Tools (Shortcuts)

These hidden shortcuts speed up workflow 10x.

| Shortcut | Action |
| :--- | :--- |
| **Shift + Click Band** | **Solo Band.** <br> Isolates only the frequencies inside that band. Critical for "Sweeping" to find resonances. |
| **Alt + Click Band** | **Reset Band.** <br> Snaps Gain to 0dB, existing Frequency. |
| **Ctrl + Drag** | **Fine Tune.** <br> Precise adjustments. |
| **Mouse Wheel** | **Adjust Q (Width).** |
| **Right-Click Token** | **Key Mapping.** <br> "Key" submenu snaps the band to a Note (e.g., C3). Essential for tuning Kick drums. |

---

## ⚡ Technical Specs: The "Phase Rotation"

In the Options menu, enable **"Phase Rotation"** to see a white line.

*   **What is it?** It shows how much the phase is being shifted by your EQ moves.
*   **Why care?** If the line wraps around wildly, your Kick might sound "hollow" when mixed with the Bass.
*   **The Fix:** Switch to **LIN** (Linear Phase) mode. The line becomes flat.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Frequency Sweeper" (Resonance Hunting)
1.  **Peaking Band:** Select Band 7.
2.  **Gain:** Crank to +18dB.
3.  **Q:** Make it very narrow (Scroll Wheel).
4.  **Action:** Sweep left and right.
5.  **Listen:** When a frequency screams/whistles excessively, that's a bad room resonance.
6.  **Fix:** Instantaneously cut `-6dB` at that spot.

### 2. The "Key Tuned" Sub
1.  **Song Key:** F Minor.
2.  **Sub Note:** F0 or F1.
3.  **Action:** Right-click Band 1 -> Key -> F -> 1.
4.  **Result:** The EQ band snaps exactly to the fundamental frequency of your Sub Bass. Boost/Cut without guessing.

### 3. The "Brickwall" Low Cut
1.  **Band 1:** Select Type "High Pass".
2.  **Order:** Drag the handle down to "Steep 8".
3.  **Freq:** Set to 30Hz.
4.  **Result:** Removes all DC offset and rumble with maximum slope (-48dB/Oct). Cleaner headroom.

```

---

## FILE: 01-Learning\Quick-Reference\frequency-chart.md

```markdown
# Frequency Chart - Quick Reference

## The 7-Band Overview

| Band | Hz Range | Zone | Cut To Fix | Boost To Enhance | Default BW |
|------|----------|------|------------|------------------|------------|
| 🟣 **1** | 20-120 | Sub/Foundation | Rumble, headroom issues | Sub weight (bass only) | 25% (wide) |
| 🌸 **2** | 140-320 | Warmth/Body | Mud, cloudiness | Warmth, thickness | 35% (wide) |
| 🟠 **3** | 300-550 | Boxiness | Cardboard tone, room sound | Mid density (rare) | 50% (medium) |
| 🟡 **4** | 600-1200 | Nasal/Honk | Nasality, honk | Mid focus (careful) | 60% (med-narrow) |
| 🟢 **5** | 1800-3200 | Presence | Buried mix (cut comp.) | Clarity, intelligibility | 50% (medium) |
| 🔵 **6** | 3500-6500 | Detail | Harshness, sibilance | Crispness, detail | 35-65% (varies) |
| 🔵 **7** | 8000-16000 | Air/Polish | Hiss, noise | Air, shine, polish | 20% (wide shelf) |

## Frequency Ranges by Instrument

### Vocals

| Element | Band 1 | Band 2 | Band 3 | Band 4 | Band 5 | Band 6 | Band 7 |
|---------|--------|--------|--------|--------|--------|--------|--------|
| **Lead Vocal** | HP 80-100 Hz | Cut -1.5 dB @ 230 Hz | Cut -2 dB @ 400 Hz | Cut -1 dB @ 850 Hz (if nasal) | Boost +1.5 dB @ 2.5 kHz | +0.5 dB @ 5 kHz (detail) | Boost +2.5 dB shelf @ 12 kHz |
| **BG Vocals** | HP 100-150 Hz | Cut -2 dB @ 240 Hz | Cut -2 dB @ 420 Hz | Cut -1 dB @ 900 Hz | +0.5 dB @ 2.8 kHz | Neutral/Cut | +1.5 dB shelf @ 11 kHz |
| **Male Rap** | HP 70-90 Hz | Cut -2 dB @ 220 Hz | Cut -1.5 dB @ 380 Hz | Cut -1.5 dB @ 800 Hz | Boost +2 dB @ 2.7 kHz | +0.5 dB @ 5.5 kHz | +2 dB shelf @ 11 kHz |

### Drums

| Element | Band 1 | Band 2 | Band 3 | Band 4 | Band 5 | Band 6 | Band 7 |
|---------|--------|--------|--------|--------|--------|--------|--------|
| **Kick** | Leave alone / Boost +2 dB @ 60 Hz | Slight cut -1 dB @ 200 Hz (if muddy) | Neutral | Neutral | Neutral | Neutral | Neutral |
| **Snare** | HP 100-120 Hz | Cut -1 dB @ 200 Hz | Cut -1.5 dB @ 400 Hz | Neutral | Boost +1.5 dB @ 2 kHz | +1 dB @ 5 kHz | +1 dB shelf @ 10 kHz |
| **Hi-Hat/Cymbals** | HP 300-500 Hz | Neutral | Neutral | Neutral | Neutral | +0.5 dB @ 6 kHz | +1 dB shelf @ 12 kHz |

### Instruments

| Element | Band 1 | Band 2 | Band 3 | Band 4 | Band 5 | Band 6 | Band 7 |
|---------|--------|--------|--------|--------|--------|--------|--------|
| **Acoustic Guitar** | HP 80-100 Hz | Cut -1 dB @ 200 Hz | Cut -2 dB @ 380 Hz | Neutral | +1 dB @ 2.3 kHz | +1 dB @ 5 kHz | +2.5 dB shelf @ 12 kHz |
| **Electric Guitar** | HP 90-120 Hz | Cut -1.5 dB @ 220 Hz | Cut -2 dB @ 350 Hz | Cut -1 dB @ 800 Hz | +1 dB @ 2.5 kHz | +0.5 dB @ 5 kHz | +1.5 dB shelf @ 10 kHz |
| **Bass/808** | Leave alone / HP @ 30 Hz | Leave alone / +1 dB @ 180 Hz | Neutral | Neutral | Neutral | Neutral | Neutral |
| **Piano** | HP 40-60 Hz | Cut -1 dB @ 220 Hz | Cut -1 dB @ 400 Hz | Neutral | +0.5 dB @ 2.5 kHz | +0.5 dB @ 5 kHz | +1.5 dB shelf @ 11 kHz |
| **Synth Lead** | HP 90-120 Hz | Cut -1.5 dB @ 250 Hz | Neutral | Neutral | Boost +1.5 dB @ 2.8 kHz | +1 dB @ 5 kHz | +2 dB shelf @ 12 kHz |
| **Pads** | HP 80-100 Hz | Cut -1 dB @ 240 Hz | Neutral | Neutral | Cut -1 dB @ 2.5 kHz (make room) | Neutral | +1.5 dB shelf @ 10 kHz |

## Problem-Solving Chart

| Symptom | Likely Frequency | Band | Action | Amount |
|---------|------------------|------|--------|--------|
| **Rumble/Headroom loss** | 20-100 Hz | 1 | HP Filter | 70-100 Hz |
| **Muddy/Cloudy** | 200-300 Hz | 2 | Cut | -1 to -3 dB |
| **Boomy** | 180-220 Hz | 2 | Cut | -2 to -3 dB |
| **Boxy/Cardboard** | 350-500 Hz | 3 | Cut | -2 to -4 dB |
| **Roomy/Amateur** | 380-450 Hz | 3 | Cut | -2 to -3 dB |
| **Nasal** | 700-1000 Hz | 4 | Cut | -1 to -2 dB |
| **Honky/Megaphone** | 800-1100 Hz | 4 | Cut | -1 to -2 dB |
| **Buried/Unclear** | 2000-3000 Hz | 5 | Boost (lead) | +1 to +2 dB |
| **Harsh/Fatiguing** | 3500-5000 Hz | 6 | Cut | -1 to -2 dB |
| **Sibilant** | 6000-8000 Hz | 6/7 | Cut | -1 to -2 dB |
| **Dull/Closed** | 10000-14000 Hz | 7 | Shelf Boost | +2 to +3 dB |
| **Too bright/Brittle** | 10000-14000 Hz | 7 | Shelf Cut | -1 to -2 dB |
| **Hissy/Noisy** | 10000+ Hz | 7 | Shelf Cut | -1 to -2 dB |

## Anchor Frequencies (Quick Preset Points)

### Band 1 - Sub
- **30 Hz:** Deep sub (leave for bass/kick only)
- **45 Hz:** Sub fundamental
- **60 Hz:** Kick/bass body boost spot
- **80 Hz:** Most common HP for non-bass sources
- **100 Hz:** Aggressive HP for non-bass sources

### Band 2 - Warmth
- **160 Hz:** Add deep warmth (bass harmonics)
- **200 Hz:** Common boost for body, cut for boom
- **250 Hz:** Primary mud-cutting frequency
- **300 Hz:** Upper warmth zone

### Band 3 - Boxiness
- **330 Hz:** Lower boxiness
- **400 Hz:** Core "cardboard" frequency
- **480 Hz:** Upper boxiness / congestion

### Band 4 - Nasal/Honk
- **700 Hz:** Lower nasal range
- **850 Hz:** Core honk/nasal frequency
- **1000 Hz:** Upper honk / telephone effect

### Band 5 - Presence
- **2000 Hz:** Lower presence, forwardness
- **2500 Hz:** Core vocal intelligibility (most common)
- **3000 Hz:** Upper presence, edge

### Band 6 - Detail
- **4000 Hz:** Definition without excess sibilance
- **5000 Hz:** Core detail/crispness frequency
- **6000 Hz:** Upper detail (watch for sibilance)

### Band 7 - Air
- **9000 Hz:** Lower air (careful - can be sibilant)
- **12000 Hz:** Sweet spot for air shelf (most common)
- **14000 Hz:** Upper air, extreme highs

## Context-Based Limits

| Context | Cut Range | Boost Range | Notes |
|---------|-----------|-------------|-------|
| **Track** | -1 to -4 dB | +1 to +3 dB | Most freedom, do heavy lifting here |
| **Bus** | -0.5 to -2 dB | +0.5 to +2 dB | Moderate moves, glue thinking |
| **Master** | -0.5 to -1 dB | +0.5 to +1 dB | Subtle only, final polish |

## Genre Templates

### Modern Pop
- Band 1: HP 90 Hz
- Band 2: Cut -1.5 dB @ 230 Hz
- Band 5: Boost +2 dB @ 2.5 kHz
- Band 7: Boost +3 dB shelf @ 12 kHz

### Hip-Hop
- Band 1: HP 70-80 Hz (vocals)
- Band 2: Cut -2 dB @ 240 Hz
- Band 4: Cut -1 dB @ 850 Hz
- Band 5: Boost +2 dB @ 2.7 kHz

### Rock/Alternative
- Band 1: HP 90 Hz
- Band 2: Cut -1 dB @ 200 Hz
- Band 3: Cut -2 dB @ 380 Hz
- Band 5: Boost +1 dB @ 2.3 kHz
- Band 7: Boost +1.5 dB shelf @ 10 kHz

### EDM/Electronic
- Band 1: HP 100 Hz (aggressive)
- Band 2: Cut -2 dB @ 250 Hz
- Band 5: Boost +1.5 dB @ 2.8 kHz
- Band 6: Boost +1 dB @ 5 kHz
- Band 7: Boost +2.5 dB shelf @ 12 kHz

## Quick Decision Tree

`\`\`
Problem identified?
├─ YES → Find band from problem chart → Cut
├─ NO → Need enhancement?
    ├─ YES → Identify element → Boost (selective)
    └─ NO → Leave alone (best EQ is no EQ)
`\`\`

## One-Page Mixing Checklist

### Step 1: Clean the Foundation (Bands 1 & 2)
- [ ] HP everything except bass/kick (Band 1: 80 Hz)
- [ ] De-mud most tracks (Band 2: -1.5 dB @ 240 Hz)

### Step 2: Open the Mids (Bands 3 & 4)
- [ ] Remove boxiness where needed (Band 3: -2 dB @ 400 Hz)
- [ ] Tame nasality if present (Band 4: -1 dB @ 850 Hz)

### Step 3: Bring Forward Lead Elements (Band 5)
- [ ] Boost presence on 1-2 lead elements (Band 5: +1.5 dB @ 2.5 kHz)
- [ ] Leave or cut competing elements

### Step 4: Add Detail & Polish (Bands 6 & 7)
- [ ] Add crispness if needed (Band 6: +0.5 to +1 dB @ 5 kHz)
- [ ] Add air to featured elements (Band 7: +2 to +3 dB shelf @ 12 kHz)

### Step 5: Verify
- [ ] A/B bypass all EQs
- [ ] Check on headphones
- [ ] Check on small speakers
- [ ] Listen for 2+ minutes (ear fatigue check)

---

**Print this page and keep it next to your workstation!**

```

---

## FILE: 01-Learning\Quick-Reference\problem-solver.md

```markdown
# EQ Problem Solver - Quick Diagnostic Guide

Fast reference for identifying and fixing common EQ issues.

## How to Use This Guide

1. **Identify your symptom** from the list below
2. **Follow the diagnostic** to confirm the issue
3. **Apply the solution** with exact settings
4. **Verify** the result

## Common Problems & Solutions

### 🔴 LOW-END ISSUES

#### Problem: Mix Feels Heavy, Undefined, "Cloudy"
**Symptom:** Overall muddiness, lack of clarity, instruments blur together
**Diagnosis:** Solo kick and bass - do they sound clear? Bypass all other tracks - does clarity improve?
**Root Cause:** Sub rumble accumulation across tracks

**Solution:**
- **Band:** 1 (Sub)
- **Action:** HP filter on ALL non-bass tracks
- **Settings:** HP @ 80 Hz, BW 25%
- **Result:** Immediate clarity, kick/bass separation

---

#### Problem: Mix is Muddy/Cloudy/Thick
**Symptom:** Sounds like listening through a blanket, undefined low-mids
**Diagnosis:** Listen at 200-300 Hz - too much energy there?
**Root Cause:** Low-mid frequency buildup

**Solution:**
- **Band:** 2 (Warmth)
- **Action:** Cut on most tracks
- **Settings:** Bell, 220-250 Hz, -1.5 to -2 dB, BW 35%
- **Which tracks:** Vocals, guitars, synths, most instruments EXCEPT bass/kick
- **Result:** Clearer mix, maintained warmth

---

#### Problem: Mix Feels Boomy or Bloated
**Symptom:** Too much low energy, but not quite mud - more like boom
**Diagnosis:** Check 180-220 Hz specifically - excessive energy?
**Root Cause:** Lower warmth zone overload

**Solution:**
- **Band:** 2 (Warmth)
- **Action:** Cut lower in Band 2 range
- **Settings:** Bell, 200 Hz, -2 to -3 dB, BW 30%
- **Which tracks:** Same as mud - all but bass/kick
- **Result:** Controlled warmth without boom

---

### 🟠 MIDRANGE ISSUES

#### Problem: "Recorded in a Room" Sound / Boxy
**Symptom:** Sounds enclosed, cardboard-like, cheap mic quality
**Diagnosis:** Sweep 300-550 Hz with boost - does it sound worse in a specific spot?
**Root Cause:** Room resonances and midrange box tone

**Solution:**
- **Band:** 3 (Boxiness)
- **Action:** Cut at worst frequency
- **Settings:** Bell, 350-450 Hz (sweep to find), -2 to -3 dB, BW 50%
- **Which tracks:** Vocals, acoustic guitars, drums, anything recorded
- **Result:** More "expensive" professional sound

---

#### Problem: Vocal Sounds Nasal / Instruments Sound Honky
**Symptom:** "Pinched nose" vocal, megaphone character, annoying midrange
**Diagnosis:** Boost and sweep 600-1200 Hz - where does it sound worst?
**Root Cause:** Nasal resonance frequency

**Solution:**
- **Band:** 4 (Nasal/Honk)
- **Action:** Small cut at nasal frequency
- **Settings:** Bell, 700-1000 Hz (sweep to find), -1 to -2 dB, BW 60%
- **Which tracks:** Vocals primarily, sometimes guitars/brass
- **Result:** Natural, less nasal tone
- **Warning:** Small moves only - very sensitive range

---

#### Problem: Midrange Feels Congested
**Symptom:** Many instruments fighting in the mids, unclear separation
**Diagnosis:** Mute half the tracks - does it clear up significantly?
**Root Cause:** Frequency masking across multiple tracks

**Solution:** **Multi-band approach**
- **Band 2:** Cut -1 dB @ 240 Hz (mud)
- **Band 3:** Cut -1.5 dB @ 400 Hz (box)
- **Band 4:** Cut -0.5 dB @ 850 Hz (honk)
- **Apply to:** Supporting tracks (NOT lead vocal/instrument)
- **Result:** Open midrange with space for leads

---

### 🟢 PRESENCE & CLARITY ISSUES

#### Problem: Vocal is Buried / Can't Hear Lyrics
**Symptom:** Vocal volume is fine but still hard to understand or hear clearly
**Diagnosis:** Solo vocal - sounds clear? In mix - disappears?
**Root Cause:** Lack of presence frequencies OR other tracks masking

**Solution Option 1 - Boost Lead:**
- **Band:** 5 (Presence)
- **Action:** Boost on lead vocal
- **Settings:** Bell, 2.5 kHz, +1.5 to +2 dB, BW 50%
- **Result:** Vocal cuts through

**Solution Option 2 - Cut Competitors (BETTER):**
- **Band:** 5 (Presence)
- **Action:** Cut on competing tracks
- **Settings:** Bell, 2-3 kHz, -1 to -1.5 dB on guitars/synths/pads
- **Result:** Vocal appears more present, more natural

---

#### Problem: Lead Instrument Doesn't Cut Through
**Symptom:** Lead guitar/synth is lost in the mix
**Diagnosis:** Same as vocal - solo vs in-context test
**Root Cause:** Presence masking or insufficient presence

**Solution:**
- **Band:** 5 (Presence)
- **Action:** Boost presence on lead
- **Settings:** Bell, 2.5-3 kHz, +1.5 to +2.5 dB, BW 50%
- **Which track:** Lead instrument only
- **Also:** Cut Band 5 on supporting instruments
- **Result:** Lead steps forward

---

### 🔵 HIGH-FREQUENCY ISSUES

#### Problem: Mix Sounds Harsh / Fatiguing
**Symptom:** Listener discomfort, "ice-pick" quality, painful on headphones
**Diagnosis:** Listen on headphones - does it hurt after 30 seconds?
**Root Cause:** Excessive upper-mid energy

**Solution:**
- **Band:** 6 (Detail)
- **Action:** Cut harshness
- **Settings:** Boost +6 dB and sweep 3.5-6 kHz to find worst spot, then cut -1.5 to -2 dB, BW 60-65%
- **Which tracks:** Usually vocals or bright instruments
- **Result:** Smoother, more listenable

---

#### Problem: Excessive Sibilance ("S" sounds too loud)
**Symptom:** Vocal "S," "T," "SH" sounds are piercing
**Diagnosis:** Listen to phrases with S sounds - are they way louder than the vocal?
**Root Cause:** Sibilance frequency range (6-8 kHz)

**Solution:**
- **Band:** 6 or 7 (upper Detail or lower Air)
- **Action:** Cut sibilance range
- **Settings:** Bell, 6-7 kHz (find exact spot), -1 to -2 dB, BW 65-70%
- **Alternative:** Use de-esser plugin instead
- **Result:** Controlled sibilance, clear consonants

---

#### Problem: Mix Sounds Dull / Closed / Dark
**Symptom:** Lacks excitement, sounds muffled or closed-in
**Diagnosis:** High-pass test - play only 8 kHz+, is there any energy?
**Root Cause:** Insufficient high-frequency content

**Solution:**
- **Band:** 7 (Air)
- **Action:** High shelf boost
- **Settings:** High shelf, 11-12 kHz, +2 to +3 dB, BW 20% (wide)
- **Which tracks:** Lead vocal, featured instruments
- **Also:** Smaller boost on master (+1 dB shelf @ 13 kHz)
- **Result:** Open, modern, polished sound

---

#### Problem: Mix Sounds Too Bright / Brittle
**Symptom:** Overly bright, harsh highs, brittle character
**Diagnosis:** Did you boost Band 7 on too many tracks?
**Root Cause:** Cumulative high-frequency boost

**Solution:**
- **Band:** 7 (Air)
- **Action:** Reduce or remove air boosts
- **OR:** High shelf cut
- **Settings:** High shelf, 10-12 kHz, -1 to -2 dB, BW 20-25%
- **Result:** Smoother top-end

---

#### Problem: Noisy Recordings / Tape Hiss
**Symptom:** Audible noise floor, hiss, electrical noise
**Diagnosis:** Solo track - hear constant background noise?
**Root Cause:** Noise in high frequencies

**Solution:**
- **Band:** 7 (Air)
- **Action:** High shelf cut to tame
- **Settings:** High shelf, 10-12 kHz, -1 to -2 dB, BW 25%
- **Also:** Consider noise reduction plugin first
- **Result:** Reduced hiss while preserving some highs

---

## Multi-Problem Scenarios

### Scenario: Muddy AND Dull
**Symptoms:** Both low-mid mud AND lacks highs
**Wrong approach:** Just boost highs (doesn't fix mud)
**Right approach:**
1. **First:** Fix mud (Band 2: cut -1.5 dB @ 240 Hz)
2. **Then:** Add air (Band 7: boost +2 dB shelf @ 12 kHz)
3. **Result:** Clean and bright

### Scenario: Harsh AND Buried
**Symptoms:** Vocal is harsh but still getting lost
**Analysis:** Harsh at one frequency, buried at another
**Solution:**
1. **Fix harshness first:** Band 6: cut -1.5 dB @ 4-5 kHz
2. **Then add presence:** Band 5: boost +1.5 dB @ 2.5 kHz
3. **Result:** Present without harshness

### Scenario: Boomy, Boxy, AND Nasal
**Symptoms:** Multiple midrange problems
**Wrong approach:** Cut all three bands aggressively (creates hole)
**Right approach:**
1. **Identify worst problem** - which bothers you most?
2. **Fix that one first** with moderate cut
3. **Check if others still need fixing** - often solving one helps others
4. **If needed**, small cuts on remaining issues
5. **A/B constantly** to avoid over-EQing

---

## The Diagnostic Process

### Step 1: Identify the Problem
**Listen actively:**
- What specifically sounds wrong?
- Where in the frequency spectrum?
- One element or the whole mix?

### Step 2: Isolate the Frequency
**Use the boost & sweep technique:**
1. Create +6 dB boost (narrow BW 70%)
2. Sweep through the relevant band
3. Find where it sounds WORST
4. That's your problem frequency

### Step 3: Apply the Fix
**Cut at the problem frequency:**
1. Change boost to cut
2. Use -1 to -3 dB depending on severity
3. Widen the BW (40-60% typically)
4. Fine-tune amount by ear

### Step 4: Verify
**A/B comparison:**
1. Bypass EQ
2. Enable EQ
3. Ask: "Better or just different?"
4. If better, keep it
5. If just different, reconsider

---

## Quick Troubleshooting

### "I cut the mud but it still sounds muddy"
- **Check:** Did you cut enough? (try -2 to -3 dB)
- **Check:** Did you cut the right frequency? (sweep again)
- **Check:** Did you cut on enough tracks? (most non-bass tracks need it)
- **Check:** Is it actually low-end rumble? (try HP filtering instead)

### "I boosted presence but vocal still buried"
- **Try:** Cut presence on competing tracks instead
- **Check:** Is it actually a volume issue, not EQ?
- **Check:** Is compression squashing the vocal?
- **Check:** Is the arrangement too dense?

### "My mix sounds hollow after EQing"
- **Cause:** Too many cuts, created a frequency hole
- **Fix:** Reduce cut amounts, don't cut all midrange bands aggressively
- **Prevention:** A/B frequently, cut selectively

### "Everything sounds harsh now"
- **Cause:** Cumulative HF boosts (Bands 5 + 6 + 7)
- **Fix:** Remove boosts from supporting tracks, only boost leads
- **Check:** Master bus - are you boosting there too?

---

## Emergency Fixes (In-Session Quick Wins)

### 30-Second Vocal Clarity
1. Band 1: HP @ 90 Hz
2. Band 2: Cut -1.5 dB @ 240 Hz
3. Band 5: Boost +1.5 dB @ 2.5 kHz
Done. Move on.

### 30-Second Mix De-Mud
1. HP everything non-bass @ 80 Hz (Band 1)
2. Cut -1.5 dB @ 240 Hz on all non-bass (Band 2)
Done. Instantly clearer.

### 30-Second Modern Polish
1. Small air boost on vocal/leads: +2 dB shelf @ 12 kHz (Band 7)
2. Subtle air on master: +1 dB shelf @ 13 kHz (Band 7)
Done. Sounds more expensive.

---

**Remember:** Most problems are fixed with cuts. If you're boosting more than cutting, reconsider your approach.

```

---

## FILE: 02-Data\band-definitions\all-7-bands.json

```json
{
  "plugin": "Fruity Parametric EQ 2",
  "version": "1.0.0",
  "description": "Complete canonical dataset for all 7 parametric EQ bands with metadata, roles, and UI copy",
  "bwPercentScale": "IMPORTANT: 0% = widest bandwidth, 100% = narrowest bandwidth (inverted from intuition)",
  "bands": [
    {
      "bandId": 1,
      "color": "purple",
      "zone": "Sub / Foundation Control",
      "frequencyHz": {
        "typicalRange": [20, 120],
        "anchorTargets": [30, 45, 60, 70, 80, 90, 100, 120]
      },
      "controls": {
        "typeOptions": ["high_pass", "low_shelf", "bell"],
        "defaultType": "high_pass",
        "gainDb": {
          "typical": [-6, 0],
          "safeMaxTrack": 6,
          "safeMaxBus": 3,
          "safeMaxMaster": 1.5
        },
        "bwPercent": {
          "meaning": "Lower % = wider/more gentle rolloff; Higher % = narrower/more surgical",
          "wide": [15, 30],
          "medium": [35, 55],
          "narrow": [60, 85],
          "default": 25
        }
      },
      "roles": {
        "primary": [
          "Remove inaudible sub-rumble",
          "Protect headroom and prevent compressor overreaction",
          "Separate kick/bass from everything else",
          "Control physical weight vs clarity"
        ],
        "fixes": [
          "Low-end mud you feel but don't hear",
          "Mix collapsing when limiter hits",
          "Bass masking kick clarity",
          "Proximity effect boom from close-mic'd sources"
        ],
        "creative": [
          "Intentional lo-fi / vintage low-end rolloff",
          "Tighten synths for modern pop/EDM clarity",
          "Make vocals sit 'above' the mix physically",
          "Reduce proximity warmth for distant/airy feel"
        ],
        "warnings": [
          "Too aggressive HP makes things thin and weightless",
          "Never boost here unless designing bass/kick",
          "Don't HP bass/kick sources above 40-50 Hz",
          "Wide BW is musical; narrow can sound unnatural"
        ]
      },
      "uiCopy": {
        "label": "Sub Control",
        "oneLiner": "Clean rumble and protect headroom.",
        "tooltip": "Use high-pass to remove sub-rumble and free up headroom. Keep it gentle (wide BW) unless the source is bass/kick.",
        "dos": [
          "HP at 70-90 Hz for vocals and leads",
          "Keep bandwidth wide (15-30%) for musical rolloff",
          "Use on every non-bass track to prevent mud buildup",
          "Go lower (40-60 Hz) only on bass/kick sources"
        ],
        "donts": [
          "Don't over-cut if the sound loses weight/body",
          "Avoid big boosts here on master channel",
          "Don't use narrow bandwidth for HP (sounds unnatural)",
          "Don't HP below 30 Hz unless removing DC offset"
        ]
      }
    },
    {
      "bandId": 2,
      "color": "pink",
      "zone": "Low-Mid Body / Warmth",
      "frequencyHz": {
        "typicalRange": [140, 320],
        "anchorTargets": [150, 180, 200, 220, 250, 280, 300]
      },
      "controls": {
        "typeOptions": ["bell", "low_shelf"],
        "defaultType": "bell",
        "gainDb": {
          "typical": [-3, 2],
          "safeMaxTrack": 6,
          "safeMaxBus": 3,
          "safeMaxMaster": 1.5
        },
        "bwPercent": {
          "meaning": "Lower % = wider; this range stacks fast so prefer wide cuts",
          "wide": [20, 40],
          "medium": [40, 55],
          "narrow": [60, 75],
          "default": 35
        }
      },
      "roles": {
        "primary": [
          "Define thickness, warmth, and physical presence",
          "Balance between full vs thin",
          "Control warmth vs muddy",
          "Adjust perceived closeness vs distance"
        ],
        "fixes": [
          "Muddy vocals that lack clarity",
          "Clouded mixes with too much low-mid energy",
          "Instruments fighting for the same space",
          "Boomy warmth that masks clarity"
        ],
        "creative": [
          "Add 'chest' resonance to vocals",
          "Thicken guitars, synth pads, or bass",
          "Make sounds feel larger without actual loudness",
          "Create warmth and intimacy in ballads"
        ],
        "warnings": [
          "This range stacks extremely fast across tracks",
          "Cut more often than you boost here",
          "Too much buildup causes the 'blanket over speakers' effect",
          "Small changes make big differences"
        ]
      },
      "uiCopy": {
        "label": "Warmth / Body",
        "oneLiner": "Adds thickness or removes mud.",
        "tooltip": "This zone decides full vs muddy. Small cuts clean mixes quickly; small boosts add body and warmth.",
        "dos": [
          "Try -1 to -2 dB when mix feels cloudy or congested",
          "Use wide BW (20-40%) for natural tonal changes",
          "Boost gently (+1 to +1.5 dB) to add chest to vocals",
          "Cut around 250 Hz to de-mud dense arrangements"
        ],
        "donts": [
          "Don't boost if you already have bass/808-heavy arrangement",
          "Avoid deep cuts that make things sound hollow",
          "Don't boost multiple tracks here simultaneously",
          "Don't use narrow BW unless targeting specific resonance"
        ]
      }
    },
    {
      "bandId": 3,
      "color": "orange",
      "zone": "Boxiness / Room Tone",
      "frequencyHz": {
        "typicalRange": [300, 550],
        "anchorTargets": [320, 350, 380, 420, 480, 520]
      },
      "controls": {
        "typeOptions": ["bell", "notch"],
        "defaultType": "bell",
        "gainDb": {
          "typical": [-4, 1],
          "safeMaxTrack": 6,
          "safeMaxBus": 3,
          "safeMaxMaster": 1.5
        },
        "bwPercent": {
          "meaning": "Higher % = more surgical; use medium for general de-boxing",
          "wide": [30, 45],
          "medium": [45, 60],
          "narrow": [65, 85],
          "default": 50
        }
      },
      "roles": {
        "primary": [
          "Remove enclosed, cardboard-like tone",
          "Control boxiness from room reflections",
          "De-congest lower midrange",
          "Improve modern, open quality"
        ],
        "fixes": [
          "'Recorded in a small room' sound",
          "Cheap microphone coloration",
          "Boxy drums or vocals",
          "Cardboard/hollow resonance in acoustic instruments"
        ],
        "creative": [
          "Make sounds feel more 'expensive' and professional",
          "Create perceived distance (by not cutting it)",
          "Shape midrange density and weight",
          "Add vintage character (by leaving some boxiness)"
        ],
        "warnings": [
          "Over-cutting removes life and body from the sound",
          "Don't stack multiple aggressive mid cuts across 300-1k Hz",
          "Always A/B compare—easy to remove too much",
          "Notch filter only for obvious, ringing resonances"
        ]
      },
      "uiCopy": {
        "label": "Boxiness",
        "oneLiner": "Opens the sound by removing 'cardboard.'",
        "tooltip": "Sweep to find the 'boxed-in' tone, then cut gently with medium BW. This makes recordings sound more modern and open.",
        "dos": [
          "Cut -1.5 to -3 dB with medium BW for general de-boxing",
          "Use notch only for obvious resonances that ring",
          "Sweep to find the exact problem frequency first",
          "Compare before/after to ensure you're not over-cutting"
        ],
        "donts": [
          "Don't carve huge holes—your mix will feel empty",
          "Avoid two heavy cuts between 300-1000 Hz",
          "Don't use narrow BW for general tonal shaping",
          "Don't cut blindly without sweeping first"
        ]
      }
    },
    {
      "bandId": 4,
      "color": "yellow",
      "zone": "Nasal / Honk / Mid Focus",
      "frequencyHz": {
        "typicalRange": [600, 1200],
        "anchorTargets": [650, 700, 800, 850, 950, 1000, 1100]
      },
      "controls": {
        "typeOptions": ["bell", "notch"],
        "defaultType": "bell",
        "gainDb": {
          "typical": [-3, 2],
          "safeMaxTrack": 6,
          "safeMaxBus": 3,
          "safeMaxMaster": 1.5
        },
        "bwPercent": {
          "meaning": "Use medium-narrow for honk; this range is very sensitive",
          "wide": [35, 50],
          "medium": [50, 65],
          "narrow": [70, 85],
          "default": 60
        }
      },
      "roles": {
        "primary": [
          "Control tone focus and midrange aggression",
          "Reduce nasal/honky quality",
          "Manage midrange forwardness",
          "Balance ear-fatigue in dense mixes"
        ],
        "fixes": [
          "Nasal vocals that sound 'pinched'",
          "Honky instruments (especially brass, guitars)",
          "Fatiguing midrange that hurts ears",
          "Piercing, forward tone that's too aggressive"
        ],
        "creative": [
          "Make vocals cut through extremely dense mixes",
          "Telephone / lo-fi / AM radio effects (boost + narrow BW)",
          "Emphasize character over polish",
          "Add intensity and urgency to leads"
        ],
        "warnings": [
          "Extremely sensitive range—small changes only",
          "Too much cut makes vocals distant and unclear",
          "Boosting here on harsh sources causes pain",
          "Easy to make things sound cheap if overdone"
        ]
      },
      "uiCopy": {
        "label": "Honk / Nasal",
        "oneLiner": "Controls midrange 'forwardness.'",
        "tooltip": "Use small cuts to reduce honk and nasal tone; small boosts to bring focus forward. Very sensitive—move slowly.",
        "dos": [
          "Try -1 to -2 dB for nasal vocals",
          "Use medium-narrow BW (50-70%) for obvious honk",
          "Sweep slowly to find the exact problem frequency",
          "Make small adjustments (0.5 dB increments)"
        ],
        "donts": [
          "Don't overcorrect—this removes presence and clarity",
          "Avoid boosting here on already harsh sources",
          "Don't use wide BW cuts (affects too much range)",
          "Don't cut without listening to vocal intelligibility"
        ]
      }
    },
    {
      "bandId": 5,
      "color": "green",
      "zone": "Presence / Intelligibility",
      "frequencyHz": {
        "typicalRange": [1800, 3200],
        "anchorTargets": [1800, 2000, 2200, 2500, 2800, 3000, 3200]
      },
      "controls": {
        "typeOptions": ["bell"],
        "defaultType": "bell",
        "gainDb": {
          "typical": [-2, 3],
          "safeMaxTrack": 6,
          "safeMaxBus": 3,
          "safeMaxMaster": 1.5
        },
        "bwPercent": {
          "meaning": "Presence likes medium widths for natural clarity",
          "wide": [30, 45],
          "medium": [45, 60],
          "narrow": [65, 80],
          "default": 50
        }
      },
      "roles": {
        "primary": [
          "Control clarity, definition, and intelligibility",
          "Determine if sound cuts through the mix",
          "Improve lyric comprehension",
          "Place sounds 'in front' of the listener"
        ],
        "fixes": [
          "Buried vocals that disappear in the mix",
          "Dull leads that lack definition",
          "Lack of articulation and consonant clarity",
          "Instruments that don't speak clearly"
        ],
        "creative": [
          "Make vocals feel physically closer to listener",
          "Accentuate rhythm, attack, and transients",
          "Add urgency, excitement, and energy",
          "Enhance perceived professional quality"
        ],
        "warnings": [
          "Overuse causes severe harshness and ear fatigue",
          "Presence boosts stack dangerously across multiple tracks",
          "Easy to make mixes sound harsh and amateur",
          "More is NOT better—subtlety wins"
        ]
      },
      "uiCopy": {
        "label": "Presence",
        "oneLiner": "Makes the sound speak clearly in the mix.",
        "tooltip": "Use gentle boosts for clarity and definition; gentle cuts if the source is biting or too edgy. Be conservative.",
        "dos": [
          "+1 to +2 dB for lead vocal clarity",
          "Prefer medium BW (45-60%) for natural presence",
          "Use on lead elements only (vocals, lead synths)",
          "Keep total presence boosts across mix under control"
        ],
        "donts": [
          "Don't boost on already-sharp or sibilant vocals",
          "Avoid boosting many tracks in this same frequency",
          "Don't use narrow BW unless correcting specific issue",
          "Don't exceed +3 dB on individual tracks"
        ]
      }
    },
    {
      "bandId": 6,
      "color": "teal",
      "zone": "Upper Presence / Detail",
      "frequencyHz": {
        "typicalRange": [3500, 6500],
        "anchorTargets": [3500, 4000, 4500, 5000, 5500, 6000, 6500]
      },
      "controls": {
        "typeOptions": ["bell"],
        "defaultType": "bell",
        "gainDb": {
          "typical": [-2, 2],
          "safeMaxTrack": 6,
          "safeMaxBus": 3,
          "safeMaxMaster": 1.5
        },
        "bwPercent": {
          "meaning": "Use wider for polish, narrower only for harsh resonance nodes",
          "wide": [25, 40],
          "medium": [40, 55],
          "narrow": [60, 80],
          "default": 35
        }
      },
      "roles": {
        "primary": [
          "Control perceived detail and sharpness",
          "Manage attack definition and transients",
          "Adjust perceived resolution and HD quality",
          "Balance crispness vs smoothness"
        ],
        "fixes": [
          "Dullness and lack of clarity",
          "Soft transients and weak attacks",
          "Dull consonants (S, T, K sounds)",
          "Flat-sounding mixes lacking dimension"
        ],
        "creative": [
          "Emphasize consonants for pop vocal style",
          "Enhance percussion snap and stick definition",
          "Make digital synths feel sharper and more defined",
          "Add perceived 'HD' or 'expensive' quality"
        ],
        "warnings": [
          "Too much becomes harsh and fatiguing extremely quickly",
          "Watch for sibilance increases and ear pain",
          "Can exaggerate poorly recorded sources",
          "Narrow cuts only for surgical resonance removal"
        ]
      },
      "uiCopy": {
        "label": "Detail",
        "oneLiner": "Adds crispness and articulation.",
        "tooltip": "Small boosts add definition and snap; small cuts smooth harshness. Less is more in this range—it turns harsh fast.",
        "dos": [
          "+0.5 to +1.5 dB for detail and definition",
          "Cut narrow only for obvious harsh resonances",
          "Use wide BW for general tonal adjustments",
          "Monitor for sibilance when boosting"
        ],
        "donts": [
          "Don't boost if sibilance is already present",
          "Don't stack boosts here with bright saturation/exciters",
          "Don't exceed +2 dB without careful listening",
          "Don't use on already-harsh or bright sources"
        ]
      }
    },
    {
      "bandId": 7,
      "color": "blue",
      "zone": "Air / Shine / Polish",
      "frequencyHz": {
        "typicalRange": [8000, 16000],
        "anchorTargets": [8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000]
      },
      "controls": {
        "typeOptions": ["high_shelf", "bell"],
        "defaultType": "high_shelf",
        "gainDb": {
          "typical": [0, 4],
          "safeMaxTrack": 6,
          "safeMaxBus": 3,
          "safeMaxMaster": 1.5
        },
        "bwPercent": {
          "meaning": "Air is best wide; narrow can sound brittle",
          "wide": [15, 30],
          "medium": [30, 45],
          "narrow": [55, 70],
          "default": 20
        }
      },
      "roles": {
        "primary": [
          "Control openness, brightness, and 'finished' quality",
          "Add professional gloss and sheen",
          "Create sense of space and dimension",
          "Deliver modern, polished top-end"
        ],
        "fixes": [
          "Dull mixes that lack excitement",
          "Closed or muffled sound",
          "Lack of sparkle and dimension",
          "Dark, muddy top-end that sounds old"
        ],
        "creative": [
          "'Expensive' vocal sheen and air",
          "Glossy modern pop sound signature",
          "Modern clarity without midrange harshness",
          "Sparkle on synths and pads"
        ],
        "warnings": [
          "Too much = exaggerated hiss and harsh top-end",
          "Exaggerates noise, artifacts, and recording flaws",
          "Can make poorly recorded sources sound worse",
          "Use conservatively on master channel"
        ]
      },
      "uiCopy": {
        "label": "Air",
        "oneLiner": "Adds gloss and a finished top-end.",
        "tooltip": "Use a wide high shelf for natural polish. Keep it wide and subtle, especially on buses and master channel.",
        "dos": [
          "High shelf +2 to +3 dB at 10-14 kHz for air",
          "Use wide BW (15-30%) to avoid brittle tone",
          "Apply gently on master for final gloss",
          "Boost on clean, well-recorded sources only"
        ],
        "donts": [
          "Don't crank this if the source is noisy or lo-fi",
          "Avoid big boosts on the master (max +2 dB)",
          "Don't use narrow BW for general air (sounds harsh)",
          "Don't boost on sources with existing sibilance"
        ]
      }
    }
  ]
}

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity Parametric EQ 2",
  "tabs": ["BANDS", "HQ", "LIN"],
  "parameters": [
    {
      "section": "Global",
      "id": "main_level",
      "name": "Main Level",
      "range": { "min": -18, "max": 18, "unit": "dB" },
      "description": "Output volume control."
    },
    {
      "section": "Bands",
      "id": "band_freq",
      "name": "Band Frequency",
      "range": { "min": 20, "max": 20000, "unit": "Hz" },
      "description": "Center frequency for bands 1-7."
    },
    {
      "section": "Bands",
      "id": "band_gain",
      "name": "Band Gain",
      "range": { "min": -18, "max": 18, "unit": "dB" },
      "description": "Boost or Cut amount for Peaking/Shelf types."
    },
    {
      "section": "Bands",
      "id": "band_bw",
      "name": "Bandwidth (Q)",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Width of the affected frequency range. High % = Narrow."
    },
    {
      "section": "Bands",
      "id": "band_type",
      "name": "Filter Type",
      "options": [
        "Low Pass",
        "Band Pass",
        "High Pass",
        "Notch",
        "Low Shelf",
        "Peaking",
        "High Shelf"
      ],
      "description": "Topology of the filter band."
    },
    {
      "section": "Bands",
      "id": "band_order",
      "name": "Filter Order (Slope)",
      "options": [
        "Gentle 4",
        "Gentle 6",
        "Gentle 8",
        "Steep 4",
        "Steep 6",
        "Steep 8"
      ],
      "description": "Steepness of the filter cutoff. Steep 8 = -48dB/Octave."
    },
    {
      "section": "Options",
      "id": "hq_mode",
      "name": "HQ (High Quality)",
      "type": "Switch",
      "description": "Enables Oversampling to reduce frequency cramping near 20kHz."
    },
    {
      "section": "Options",
      "id": "lin_mode",
      "name": "LIN (Linear Phase)",
      "type": "Toggle",
      "description": "Enables FFT processing for zero phase shift (adds latency)."
    },
    {
      "section": "Visualization",
      "id": "pivot_slope",
      "name": "Pivot Slope",
      "options": ["0dB", "1.5dB", "3dB", "4.5dB", "6dB"],
      "description": "Changes the visual tilt of the spectral analyzer."
    }
  ]
}

```

---

## FILE: 02-Data\presets\band-archetypes.json

```json
{
  "description": "Reusable band archetype configurations - complete band settings for common mixing tasks",
  "usage": "Each archetype is a complete band configuration that can be loaded as a one-click preset or combined with other archetypes to build full EQ curves",
  "bwPercentNote": "Remember: 0% = widest, 100% = narrowest",
  "bandArchetypes": {
    "band1_sub_foundation": [
      {
        "name": "HP Clean 80",
        "description": "Standard high-pass for vocals and non-bass instruments",
        "type": "high_pass",
        "freqHz": 80,
        "bwPercent": 25,
        "gainDb": 0,
        "useCase": "General purpose HP for vocals, guitars, keys, leads"
      },
      {
        "name": "HP Tight 100",
        "description": "More aggressive HP for tight modern sound",
        "type": "high_pass",
        "freqHz": 100,
        "bwPercent": 30,
        "gainDb": 0,
        "useCase": "Modern pop/EDM, synths, electronic elements"
      },
      {
        "name": "HP Gentle 60",
        "description": "Gentle HP for sources that need some low-end",
        "type": "high_pass",
        "freqHz": 60,
        "bwPercent": 20,
        "gainDb": 0,
        "useCase": "Acoustic guitars, pianos, full-bodied vocals"
      },
      {
        "name": "HP Surgical 120",
        "description": "Very tight HP for thin elements in dense mixes",
        "type": "high_pass",
        "freqHz": 120,
        "bwPercent": 35,
        "gainDb": 0,
        "useCase": "Hi-hats, shakers, thin synths, FX"
      },
      {
        "name": "Sub Shelf Boost",
        "description": "Low shelf boost for bass/kick design",
        "type": "low_shelf",
        "freqHz": 60,
        "bwPercent": 30,
        "gainDb": 2,
        "useCase": "808s, sub-bass, kick drums (use sparingly)"
      },
      {
        "name": "Sub Bell Weight",
        "description": "Targeted sub boost for specific frequency",
        "type": "bell",
        "freqHz": 45,
        "bwPercent": 40,
        "gainDb": 2.5,
        "useCase": "Boost fundamental of kick or 808 (track level only)"
      }
    ],
    "band2_warmth_body": [
      {
        "name": "De-Mud 250",
        "description": "Most common mud removal frequency",
        "type": "bell",
        "freqHz": 250,
        "bwPercent": 35,
        "gainDb": -2,
        "useCase": "Cloudy vocals, muddy guitars, congested mix bus"
      },
      {
        "name": "De-Mud Wide 200",
        "description": "Broader low-mid cleanup",
        "type": "bell",
        "freqHz": 200,
        "bwPercent": 25,
        "gainDb": -1.5,
        "useCase": "General mix clarity without losing too much warmth"
      },
      {
        "name": "Add Body 200",
        "description": "Gentle warmth and thickness",
        "type": "bell",
        "freqHz": 200,
        "bwPercent": 30,
        "gainDb": 1.5,
        "useCase": "Thin vocals, weak guitars, add fullness"
      },
      {
        "name": "Add Chest 180",
        "description": "Vocal chest resonance boost",
        "type": "bell",
        "freqHz": 180,
        "bwPercent": 40,
        "gainDb": 2,
        "useCase": "Male vocals, add depth and power"
      },
      {
        "name": "Warmth Shelf",
        "description": "Broad warmth using low shelf",
        "type": "low_shelf",
        "freqHz": 220,
        "bwPercent": 25,
        "gainDb": 1.5,
        "useCase": "Overall warmth on buses, full-bodied tone"
      },
      {
        "name": "Aggressive De-Mud",
        "description": "Heavy mud removal for problematic sources",
        "type": "bell",
        "freqHz": 280,
        "bwPercent": 45,
        "gainDb": -3,
        "useCase": "Very muddy sources, dense arrangements"
      }
    ],
    "band3_boxiness": [
      {
        "name": "De-Box 420",
        "description": "Most common boxiness frequency",
        "type": "bell",
        "freqHz": 420,
        "bwPercent": 50,
        "gainDb": -2.5,
        "useCase": "Cardboard tone, boxy vocals/drums"
      },
      {
        "name": "De-Box Gentle 380",
        "description": "Subtle boxiness reduction",
        "type": "bell",
        "freqHz": 380,
        "bwPercent": 45,
        "gainDb": -1.5,
        "useCase": "Light de-boxing without losing character"
      },
      {
        "name": "Resonance Notch 400",
        "description": "Surgical removal of specific resonance",
        "type": "notch",
        "freqHz": 400,
        "bwPercent": 75,
        "gainDb": -4,
        "useCase": "Obvious ringing resonance, room modes"
      },
      {
        "name": "De-Box Wide 450",
        "description": "Broader boxiness cleanup",
        "type": "bell",
        "freqHz": 450,
        "bwPercent": 40,
        "gainDb": -2,
        "useCase": "General de-congestion of lower mids"
      },
      {
        "name": "Room Tone Cut",
        "description": "Remove room reflections and tone",
        "type": "bell",
        "freqHz": 350,
        "bwPercent": 55,
        "gainDb": -3,
        "useCase": "Poorly recorded sources, small room sound"
      },
      {
        "name": "Add Mid Density",
        "description": "Rare boost for body in this range",
        "type": "bell",
        "freqHz": 380,
        "bwPercent": 50,
        "gainDb": 1,
        "useCase": "Very thin sources needing midrange weight"
      }
    ],
    "band4_honk_nasal": [
      {
        "name": "Tame Honk 850",
        "description": "Most common honk frequency",
        "type": "bell",
        "freqHz": 850,
        "bwPercent": 60,
        "gainDb": -1.5,
        "useCase": "Honky guitars, nasal vocals"
      },
      {
        "name": "De-Nasal 700",
        "description": "Lower nasal frequency",
        "type": "bell",
        "freqHz": 700,
        "bwPercent": 55,
        "gainDb": -1.5,
        "useCase": "Nasal male vocals, congested midrange"
      },
      {
        "name": "De-Nasal 950",
        "description": "Upper nasal frequency",
        "type": "bell",
        "freqHz": 950,
        "bwPercent": 60,
        "gainDb": -2,
        "useCase": "Nasal female vocals, thin midrange honk"
      },
      {
        "name": "Telephone Effect",
        "description": "Creative lo-fi telephone sound",
        "type": "bell",
        "freqHz": 1000,
        "bwPercent": 80,
        "gainDb": 3,
        "useCase": "Special effects, lo-fi aesthetic, creative filtering"
      },
      {
        "name": "Mid Focus Boost",
        "description": "Bring forward in dense mix",
        "type": "bell",
        "freqHz": 800,
        "bwPercent": 55,
        "gainDb": 1.5,
        "useCase": "Cutting through dense mix (use carefully)"
      },
      {
        "name": "Honk Notch",
        "description": "Surgical honk removal",
        "type": "notch",
        "freqHz": 850,
        "bwPercent": 80,
        "gainDb": -3,
        "useCase": "Obvious ringing honk in brass/guitars"
      }
    ],
    "band5_presence_clarity": [
      {
        "name": "Lead Clarity 2500",
        "description": "Most common presence boost",
        "type": "bell",
        "freqHz": 2500,
        "bwPercent": 50,
        "gainDb": 2,
        "useCase": "Lead vocals, make elements speak clearly"
      },
      {
        "name": "Vocal Presence 2800",
        "description": "Upper presence for female vocals",
        "type": "bell",
        "freqHz": 2800,
        "bwPercent": 50,
        "gainDb": 1.5,
        "useCase": "Female vocals, brighter presence"
      },
      {
        "name": "Male Vocal Presence 2200",
        "description": "Lower presence for male vocals",
        "type": "bell",
        "freqHz": 2200,
        "bwPercent": 50,
        "gainDb": 2,
        "useCase": "Male vocals, deeper voice clarity"
      },
      {
        "name": "Soften Bite 2800",
        "description": "Reduce edgy presence",
        "type": "bell",
        "freqHz": 2800,
        "bwPercent": 55,
        "gainDb": -1.5,
        "useCase": "Too-sharp vocals, reduce harshness"
      },
      {
        "name": "Extreme Clarity 3000",
        "description": "Maximum intelligibility boost",
        "type": "bell",
        "freqHz": 3000,
        "bwPercent": 45,
        "gainDb": 2.5,
        "useCase": "Buried vocal rescue (track level only)"
      },
      {
        "name": "Gentle Presence Wide",
        "description": "Subtle, natural presence boost",
        "type": "bell",
        "freqHz": 2400,
        "bwPercent": 35,
        "gainDb": 1,
        "useCase": "Bus-level presence, subtle clarity"
      }
    ],
    "band6_detail_upper": [
      {
        "name": "Add Detail 5000",
        "description": "Common detail frequency",
        "type": "bell",
        "freqHz": 5000,
        "bwPercent": 35,
        "gainDb": 1,
        "useCase": "Add definition and crispness"
      },
      {
        "name": "Tame Harsh 4500",
        "description": "Most common harshness frequency",
        "type": "bell",
        "freqHz": 4500,
        "bwPercent": 65,
        "gainDb": -2,
        "useCase": "Harsh vocals, fatiguing instruments"
      },
      {
        "name": "Tame Sibilance 6000",
        "description": "Upper harshness and sibilance",
        "type": "bell",
        "freqHz": 6000,
        "bwPercent": 60,
        "gainDb": -1.5,
        "useCase": "Sibilant vocals, sharp cymbals"
      },
      {
        "name": "Crispness 5500",
        "description": "Upper detail boost",
        "type": "bell",
        "freqHz": 5500,
        "bwPercent": 40,
        "gainDb": 1,
        "useCase": "Percussion snap, consonant definition"
      },
      {
        "name": "Harsh Notch 4800",
        "description": "Surgical harsh resonance removal",
        "type": "bell",
        "freqHz": 4800,
        "bwPercent": 75,
        "gainDb": -3,
        "useCase": "Specific harsh resonance or ring"
      },
      {
        "name": "Gentle Detail Wide",
        "description": "Broad, subtle detail enhancement",
        "type": "bell",
        "freqHz": 5200,
        "bwPercent": 25,
        "gainDb": 0.5,
        "useCase": "Bus-level polish, gentle enhancement"
      }
    ],
    "band7_air_shine": [
      {
        "name": "Air Shelf 12k",
        "description": "Most common air boost frequency",
        "type": "high_shelf",
        "freqHz": 12000,
        "bwPercent": 20,
        "gainDb": 2.5,
        "useCase": "Final polish, modern sheen, vocal air"
      },
      {
        "name": "Air Shelf 10k",
        "description": "Lower air shelf for more presence",
        "type": "high_shelf",
        "freqHz": 10000,
        "bwPercent": 20,
        "gainDb": 2,
        "useCase": "Broader top-end lift, more body to air"
      },
      {
        "name": "Air Shelf 14k",
        "description": "Ultra-high air for pristine sources",
        "type": "high_shelf",
        "freqHz": 14000,
        "bwPercent": 20,
        "gainDb": 2,
        "useCase": "Very clean sources, subtle sparkle"
      },
      {
        "name": "Reduce Hiss Shelf",
        "description": "High shelf cut for noisy sources",
        "type": "high_shelf",
        "freqHz": 12000,
        "bwPercent": 25,
        "gainDb": -1.5,
        "useCase": "Noisy recordings, reduce hiss/artifacts"
      },
      {
        "name": "Air Bell 11k",
        "description": "Targeted air boost with bell",
        "type": "bell",
        "freqHz": 11000,
        "bwPercent": 30,
        "gainDb": 2,
        "useCase": "Specific frequency air boost, more control"
      },
      {
        "name": "Gentle Air Wide",
        "description": "Subtle, broad air enhancement",
        "type": "high_shelf",
        "freqHz": 12000,
        "bwPercent": 15,
        "gainDb": 1.5,
        "useCase": "Mix bus polish, gentle final touch"
      },
      {
        "name": "Aggressive Shine",
        "description": "Strong air boost for dull sources",
        "type": "high_shelf",
        "freqHz": 10000,
        "bwPercent": 25,
        "gainDb": 3.5,
        "useCase": "Very dull sources needing major lift (track only)"
      }
    ]
  },
  "fullPresetExamples": {
    "description": "Example complete presets built by stacking band archetypes",
    "presets": [
      {
        "name": "Vocal Polish - Lead",
        "description": "Clean, clear lead vocal preset",
        "bands": [
          { "bandId": 1, "archetype": "HP Clean 80" },
          { "bandId": 2, "archetype": "De-Mud 250" },
          { "bandId": 3, "archetype": "De-Box Gentle 380" },
          { "bandId": 4, "archetype": "Tame Honk 850" },
          { "bandId": 5, "archetype": "Lead Clarity 2500" },
          { "bandId": 6, "archetype": "Add Detail 5000" },
          { "bandId": 7, "archetype": "Air Shelf 12k" }
        ]
      },
      {
        "name": "Vocal - Warm & Full",
        "description": "Add body and warmth to thin vocals",
        "bands": [
          { "bandId": 1, "archetype": "HP Gentle 60" },
          { "bandId": 2, "archetype": "Add Chest 180" },
          { "bandId": 3, "archetype": "De-Box Gentle 380" },
          { "bandId": 4, "archetype": null },
          { "bandId": 5, "archetype": "Male Vocal Presence 2200" },
          { "bandId": 6, "archetype": null },
          { "bandId": 7, "archetype": "Air Shelf 12k" }
        ]
      },
      {
        "name": "Mix Bus - Final Polish",
        "description": "Subtle polish for mix bus",
        "bands": [
          { "bandId": 1, "archetype": null },
          { "bandId": 2, "archetype": "De-Mud Wide 200" },
          { "bandId": 3, "archetype": null },
          { "bandId": 4, "archetype": null },
          { "bandId": 5, "archetype": "Gentle Presence Wide" },
          { "bandId": 6, "archetype": "Gentle Detail Wide" },
          { "bandId": 7, "archetype": "Gentle Air Wide" }
        ]
      },
      {
        "name": "Guitar - Acoustic Clean",
        "description": "Natural, open acoustic guitar",
        "bands": [
          { "bandId": 1, "archetype": "HP Gentle 60" },
          { "bandId": 2, "archetype": null },
          { "bandId": 3, "archetype": "De-Box 420" },
          { "bandId": 4, "archetype": null },
          { "bandId": 5, "archetype": null },
          { "bandId": 6, "archetype": "Add Detail 5000" },
          { "bandId": 7, "archetype": "Air Shelf 12k" }
        ]
      },
      {
        "name": "Kick/808 - Sub Boost",
        "description": "Enhance low-end weight",
        "bands": [
          { "bandId": 1, "archetype": "Sub Bell Weight" },
          { "bandId": 2, "archetype": "De-Mud 250" },
          { "bandId": 3, "archetype": null },
          { "bandId": 4, "archetype": null },
          { "bandId": 5, "archetype": null },
          { "bandId": 6, "archetype": null },
          { "bandId": 7, "archetype": null }
        ]
      },
      {
        "name": "Synth - Modern EDM",
        "description": "Tight, bright modern synth",
        "bands": [
          { "bandId": 1, "archetype": "HP Tight 100" },
          { "bandId": 2, "archetype": "De-Mud 250" },
          { "bandId": 3, "archetype": "De-Box Wide 450" },
          { "bandId": 4, "archetype": null },
          { "bandId": 5, "archetype": "Vocal Presence 2800" },
          { "bandId": 6, "archetype": "Crispness 5500" },
          { "bandId": 7, "archetype": "Air Shelf 12k" }
        ]
      }
    ]
  }
}

```

---

## FILE: 02-Data\rules\symptom-solutions.json

```json
{
  "description": "Diagnostic decision tree mapping audio symptoms to EQ solutions",
  "usage": "Use this to build smart assistants, troubleshooting guides, or learning tools that recommend specific band archetypes based on user-described problems",
  "priorityLevels": {
    "1": "Critical - Fix first, these cause major mix problems",
    "2": "Important - Address after critical issues are resolved",
    "3": "Polish - Final touches for professional sound"
  },
  "rules": [
    {
      "symptom": "rumble_or_headroom_loss",
      "displayName": "Rumble / Headroom Loss",
      "description": "Mix feels bloated, limiter pumps, or sounds like there's inaudible low-end taking up space",
      "priority": 1,
      "recommendations": [
        {
          "bandId": 1,
          "archetype": "HP Clean 80",
          "notes": "Use HP 70-100 Hz on all non-bass sources. This is the #1 fix for headroom issues.",
          "gain": null,
          "context": "Apply to: vocals, guitars, keys, synths, percussion (not kick/bass)"
        }
      ]
    },
    {
      "symptom": "muddy_or_cloudy",
      "displayName": "Muddy / Cloudy Mix",
      "description": "Mix sounds like there's a blanket over the speakers, lacks definition, congested low-mids",
      "priority": 1,
      "recommendations": [
        {
          "bandId": 2,
          "archetype": "De-Mud 250",
          "notes": "Small cuts in 200-300 Hz clear mixes extremely quickly. Start with -2 dB.",
          "gain": -2,
          "context": "Apply to: multiple tracks with low-mid buildup, mix bus if widespread"
        },
        {
          "bandId": 2,
          "archetype": "De-Mud Wide 200",
          "notes": "If 250 Hz cut is too aggressive, try wider cut at 200 Hz",
          "gain": -1.5,
          "context": "Alternative if you want to preserve some warmth"
        }
      ]
    },
    {
      "symptom": "harsh_or_fatiguing",
      "displayName": "Harsh / Ear Fatigue",
      "description": "Mix hurts to listen to, causes ear fatigue, sounds sharp or aggressive",
      "priority": 1,
      "recommendations": [
        {
          "bandId": 6,
          "archetype": "Tame Harsh 4500",
          "notes": "Cut 4-6 kHz; use narrow BW only for obvious resonances. Start gentle.",
          "gain": -2,
          "context": "Common in vocals, guitars, cymbals - sweep to find exact frequency"
        },
        {
          "bandId": 5,
          "archetype": "Soften Bite 2800",
          "notes": "If harshness is in presence range (2-3 kHz), cut here instead",
          "gain": -1.5,
          "context": "Alternative if the harshness is more 'edgy' than 'sharp'"
        }
      ]
    },
    {
      "symptom": "boxy_or_cardboard",
      "displayName": "Boxy / Cardboard Tone",
      "description": "Sounds like it was recorded in a small room, enclosed, cardboard-like quality",
      "priority": 2,
      "recommendations": [
        {
          "bandId": 3,
          "archetype": "De-Box 420",
          "notes": "Use medium BW; avoid over-cutting or you'll lose life. Sweep 300-550 Hz to find it.",
          "gain": -2.5,
          "context": "Common in: vocals, acoustic guitars, drums, poorly recorded sources"
        },
        {
          "bandId": 3,
          "archetype": "Room Tone Cut",
          "notes": "If boxiness is lower in frequency range",
          "gain": -3,
          "context": "Try 350 Hz if 420 Hz doesn't hit the right spot"
        }
      ]
    },
    {
      "symptom": "nasal_or_honky",
      "displayName": "Nasal / Honky",
      "description": "Vocals or instruments sound pinched, nasal, honky, or have a cheap tone",
      "priority": 2,
      "recommendations": [
        {
          "bandId": 4,
          "archetype": "Tame Honk 850",
          "notes": "Small changes only - this range is very sensitive. Sweep 700-1000 Hz.",
          "gain": -1.5,
          "context": "Common in: vocals, guitars, brass, anything with midrange focus"
        },
        {
          "bandId": 4,
          "archetype": "De-Nasal 700",
          "notes": "Try lower frequency for male vocals or lower-pitched sources",
          "gain": -1.5,
          "context": "Alternative for male vocals or deeper instruments"
        },
        {
          "bandId": 4,
          "archetype": "De-Nasal 950",
          "notes": "Try higher frequency for female vocals or higher-pitched sources",
          "gain": -2,
          "context": "Alternative for female vocals or brighter instruments"
        }
      ]
    },
    {
      "symptom": "buried_or_unclear",
      "displayName": "Buried / Unclear",
      "description": "Vocals or lead elements disappear in the mix, lack intelligibility, can't hear lyrics clearly",
      "priority": 2,
      "recommendations": [
        {
          "bandId": 5,
          "archetype": "Lead Clarity 2500",
          "notes": "Presence makes vocals and leads intelligible. Don't overdo it - can cause harshness.",
          "gain": 2,
          "context": "Apply to: lead vocals, lead synths, main melodic elements"
        },
        {
          "bandId": 5,
          "archetype": "Male Vocal Presence 2200",
          "notes": "Try lower frequency for male vocals",
          "gain": 2,
          "context": "Better for deeper male voices"
        },
        {
          "bandId": 5,
          "archetype": "Vocal Presence 2800",
          "notes": "Try higher frequency for female vocals",
          "gain": 1.5,
          "context": "Better for female voices or brighter sources"
        }
      ]
    },
    {
      "symptom": "thin_or_weak",
      "displayName": "Thin / Lacks Body",
      "description": "Source sounds thin, weak, lacks weight or physical presence",
      "priority": 2,
      "recommendations": [
        {
          "bandId": 2,
          "archetype": "Add Body 200",
          "notes": "Add gentle warmth and thickness. Don't overdo - this range stacks fast.",
          "gain": 1.5,
          "context": "Apply to: thin vocals, weak guitars, sources needing fullness"
        },
        {
          "bandId": 2,
          "archetype": "Add Chest 180",
          "notes": "Specifically for adding chest resonance to vocals",
          "gain": 2,
          "context": "Great for male vocals or adding depth/power"
        },
        {
          "bandId": 3,
          "archetype": "Add Mid Density",
          "notes": "Rare boost in boxiness range for very thin sources",
          "gain": 1,
          "context": "Only if source is extremely thin and needs midrange weight"
        }
      ]
    },
    {
      "symptom": "dull_or_closed",
      "displayName": "Dull / Closed Sound",
      "description": "Mix sounds dark, dull, closed, lacks excitement or sparkle",
      "priority": 3,
      "recommendations": [
        {
          "bandId": 7,
          "archetype": "Air Shelf 12k",
          "notes": "Use a wide high shelf for polish. Keep it subtle on buses/master.",
          "gain": 2.5,
          "context": "Final polish - apply to tracks, buses, or master for modern sheen"
        },
        {
          "bandId": 7,
          "archetype": "Air Shelf 10k",
          "notes": "Lower shelf for more body to the air boost",
          "gain": 2,
          "context": "If 12k sounds too airy without enough presence"
        },
        {
          "bandId": 6,
          "archetype": "Add Detail 5000",
          "notes": "If dullness is more about lack of detail than air",
          "gain": 1,
          "context": "Add definition and crispness before adding air"
        }
      ]
    },
    {
      "symptom": "lacks_detail_or_definition",
      "displayName": "Lacks Detail / Definition",
      "description": "Source sounds soft, lacks snap, consonants are weak, transients are dull",
      "priority": 3,
      "recommendations": [
        {
          "bandId": 6,
          "archetype": "Add Detail 5000",
          "notes": "Small boosts add definition. Watch for sibilance and harshness.",
          "gain": 1,
          "context": "Apply to: vocals, percussion, anything needing articulation"
        },
        {
          "bandId": 6,
          "archetype": "Crispness 5500",
          "notes": "Higher frequency for more snap and attack",
          "gain": 1,
          "context": "Better for percussion, drums, sharp transients"
        }
      ]
    },
    {
      "symptom": "sibilant_or_too_bright",
      "displayName": "Sibilant / Too Bright",
      "description": "Harsh S sounds, overly bright cymbals, too much high-frequency energy",
      "priority": 2,
      "recommendations": [
        {
          "bandId": 6,
          "archetype": "Tame Sibilance 6000",
          "notes": "Cut upper harshness and sibilance. Use medium-narrow BW.",
          "gain": -1.5,
          "context": "Common issue with vocals - sweep 5-7 kHz to find exact frequency"
        },
        {
          "bandId": 7,
          "archetype": "Reduce Hiss Shelf",
          "notes": "If entire top-end is too bright, not just one frequency",
          "gain": -1.5,
          "context": "Use high shelf cut for overly bright sources"
        }
      ]
    },
    {
      "symptom": "noisy_or_hissy",
      "displayName": "Noisy / Hissy",
      "description": "Recording has noise, hiss, or unwanted high-frequency artifacts",
      "priority": 2,
      "recommendations": [
        {
          "bandId": 7,
          "archetype": "Reduce Hiss Shelf",
          "notes": "High shelf cut to reduce noise and artifacts. Keep it wide.",
          "gain": -1.5,
          "context": "For noisy recordings - but use noise reduction first if available"
        }
      ]
    },
    {
      "symptom": "too_much_sub",
      "displayName": "Too Much Sub / Boomy",
      "description": "Excessive sub-bass, boomy low-end, sound feels out of control in the lows",
      "priority": 1,
      "recommendations": [
        {
          "bandId": 1,
          "archetype": "HP Tight 100",
          "notes": "More aggressive HP to tighten low-end. Adjust frequency to taste.",
          "gain": 0,
          "context": "For overly boomy sources or modern tight sound"
        }
      ]
    },
    {
      "symptom": "sounds_cheap_or_amateur",
      "displayName": "Sounds Cheap / Amateur",
      "description": "Overall tone sounds unprofessional, cheap, or amateurish",
      "priority": 2,
      "recommendations": [
        {
          "bandId": 3,
          "archetype": "De-Box 420",
          "notes": "Boxiness is often what makes things sound cheap. Remove cardboard tone.",
          "gain": -2.5,
          "context": "First step in making things sound 'expensive'"
        },
        {
          "bandId": 7,
          "archetype": "Air Shelf 12k",
          "notes": "Air adds professional polish and modern sheen",
          "gain": 2.5,
          "context": "Second step - add gloss and finish"
        }
      ]
    },
    {
      "symptom": "lacks_punch_or_impact",
      "displayName": "Lacks Punch / Impact",
      "description": "Source doesn't hit hard, lacks punch or physical impact",
      "priority": 2,
      "recommendations": [
        {
          "bandId": 1,
          "archetype": "Sub Bell Weight",
          "notes": "Boost fundamental frequency for more weight (kick/bass only)",
          "gain": 2.5,
          "context": "Only for kick/bass - sweep 40-60 Hz to find fundamental"
        },
        {
          "bandId": 5,
          "archetype": "Lead Clarity 2500",
          "notes": "Presence can add perceived punch and attack",
          "gain": 2,
          "context": "For non-bass elements - adds attack perception"
        }
      ]
    },
    {
      "symptom": "sounds_distant",
      "displayName": "Sounds Distant / Far Away",
      "description": "Source sounds like it's in the back of the mix, far from the listener",
      "priority": 2,
      "recommendations": [
        {
          "bandId": 5,
          "archetype": "Lead Clarity 2500",
          "notes": "Presence brings sounds forward and closer to listener",
          "gain": 2,
          "context": "Primary tool for bringing sources forward"
        },
        {
          "bandId": 2,
          "archetype": "Add Body 200",
          "notes": "Warmth can also add proximity/closeness",
          "gain": 1.5,
          "context": "Adds intimacy and 'close-mic' feel"
        }
      ]
    },
    {
      "symptom": "lacks_warmth",
      "displayName": "Lacks Warmth / Too Clinical",
      "description": "Sound is too clean, clinical, lacks warmth and character",
      "priority": 3,
      "recommendations": [
        {
          "bandId": 2,
          "archetype": "Warmth Shelf",
          "notes": "Low shelf for broad warmth. Don't overdo - check for mud.",
          "gain": 1.5,
          "context": "Use on buses for overall warmth increase"
        },
        {
          "bandId": 2,
          "archetype": "Add Chest 180",
          "notes": "More focused warmth boost",
          "gain": 2,
          "context": "For individual tracks needing warmth"
        }
      ]
    },
    {
      "symptom": "mix_sounds_flat",
      "displayName": "Mix Sounds Flat / One-Dimensional",
      "description": "Mix lacks dimension, depth, or frequency spread - sounds flat",
      "priority": 3,
      "recommendations": [
        {
          "bandId": 6,
          "archetype": "Add Detail 5000",
          "notes": "Detail adds dimension and perceived depth",
          "gain": 1,
          "context": "Start with detail in upper-mids"
        },
        {
          "bandId": 7,
          "archetype": "Air Shelf 12k",
          "notes": "Air opens up the top and adds space",
          "gain": 2.5,
          "context": "Then add air for complete dimension"
        }
      ]
    },
    {
      "symptom": "resonance_or_ringing",
      "displayName": "Obvious Resonance / Ringing",
      "description": "Specific frequency that rings out or resonates unnaturally",
      "priority": 1,
      "recommendations": [
        {
          "bandId": 3,
          "archetype": "Resonance Notch 400",
          "notes": "Use notch filter for surgical removal. Sweep to find exact frequency.",
          "gain": -4,
          "context": "For obvious room modes or resonances - adjust frequency as needed"
        },
        {
          "bandId": 4,
          "archetype": "Honk Notch",
          "notes": "If resonance is in honk range (700-1000 Hz)",
          "gain": -3,
          "context": "Common in brass, guitars, vocals"
        },
        {
          "bandId": 6,
          "archetype": "Harsh Notch 4800",
          "notes": "If resonance is in upper-mid range (4-6 kHz)",
          "gain": -3,
          "context": "Sweep to find exact harsh resonance"
        }
      ]
    },
    {
      "symptom": "vocals_fighting_with_bass",
      "displayName": "Vocals Fighting with Bass",
      "description": "Vocals and bass are masking each other in the low-end",
      "priority": 1,
      "recommendations": [
        {
          "bandId": 1,
          "archetype": "HP Clean 80",
          "notes": "HP the vocals to separate from bass. This is essential.",
          "gain": 0,
          "context": "Apply to vocals - frees low-end for bass/kick"
        },
        {
          "bandId": 2,
          "archetype": "De-Mud 250",
          "notes": "Also cut low-mids on vocals if still masking",
          "gain": -2,
          "context": "Further separation in warmth range"
        }
      ]
    },
    {
      "symptom": "drums_lack_clarity",
      "displayName": "Drums Lack Clarity / Definition",
      "description": "Drums sound mushy, lack separation, or don't cut through",
      "priority": 2,
      "recommendations": [
        {
          "bandId": 3,
          "archetype": "De-Box 420",
          "notes": "Remove boxiness from drum shells",
          "gain": -2.5,
          "context": "Common in snares, toms, room mics"
        },
        {
          "bandId": 6,
          "archetype": "Crispness 5500",
          "notes": "Add attack and snap to drums",
          "gain": 1,
          "context": "Enhances stick definition and transients"
        }
      ]
    }
  ],
  "contextualNotes": {
    "trackLevel": "Use full gain ranges (up to ±6 dB), be more aggressive with EQ",
    "busLevel": "Be gentler (max ±3 dB), changes affect multiple tracks",
    "masterLevel": "Very subtle only (max ±1.5 dB), mostly for final polish",
    "workflow": [
      "1. Fix critical issues first (priority 1): rumble, mud, harshness",
      "2. Address important issues (priority 2): boxiness, nasal, clarity, thin/thick",
      "3. Apply final polish (priority 3): air, detail, dimension",
      "4. Always A/B compare your changes",
      "5. Less is more - don't over-EQ"
    ]
  }
}

```

---

## FILE: 02-Data\schema\parametric-eq2-band-schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://jazer.app/schemas/fl-parametric-eq2-band.json",
  "title": "Fruity Parametric EQ 2 - Band Schema",
  "description": "JSON Schema for validating parametric EQ band configuration data",
  "type": "object",
  "required": [
    "bandId",
    "color",
    "zone",
    "frequencyHz",
    "controls",
    "roles",
    "uiCopy"
  ],
  "properties": {
    "bandId": {
      "type": "integer",
      "minimum": 1,
      "maximum": 7,
      "description": "Band number (1-7)"
    },
    "color": {
      "type": "string",
      "enum": ["purple", "pink", "orange", "yellow", "green", "teal", "blue"],
      "description": "Visual color identifier for the band"
    },
    "zone": {
      "type": "string",
      "description": "Human-readable frequency zone name (e.g., 'Sub / Foundation')"
    },
    "frequencyHz": {
      "type": "object",
      "required": ["typicalRange", "anchorTargets"],
      "properties": {
        "typicalRange": {
          "type": "array",
          "items": {
            "type": "number",
            "minimum": 20,
            "maximum": 20000
          },
          "minItems": 2,
          "maxItems": 2,
          "description": "Typical frequency range [min, max] in Hz"
        },
        "anchorTargets": {
          "type": "array",
          "items": {
            "type": "number",
            "minimum": 20,
            "maximum": 20000
          },
          "description": "Common preset frequencies for quick-action buttons"
        }
      }
    },
    "controls": {
      "type": "object",
      "required": ["typeOptions", "defaultType", "gainDb", "bwPercent"],
      "properties": {
        "typeOptions": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": ["bell", "high_shelf", "low_shelf", "high_pass", "low_pass", "notch"]
          },
          "description": "Available filter types for this band"
        },
        "defaultType": {
          "type": "string",
          "enum": ["bell", "high_shelf", "low_shelf", "high_pass", "low_pass", "notch"],
          "description": "Recommended default filter type"
        },
        "gainDb": {
          "type": "object",
          "required": ["typical", "safeMaxTrack", "safeMaxBus", "safeMaxMaster"],
          "properties": {
            "typical": {
              "type": "array",
              "items": {
                "type": "number",
                "minimum": -24,
                "maximum": 24
              },
              "minItems": 2,
              "maxItems": 2,
              "description": "Typical gain range [min, max] in dB"
            },
            "safeMaxTrack": {
              "type": "number",
              "description": "Maximum safe gain on individual tracks (typically 6 dB)"
            },
            "safeMaxBus": {
              "type": "number",
              "description": "Maximum safe gain on buses (typically 3 dB)"
            },
            "safeMaxMaster": {
              "type": "number",
              "description": "Maximum safe gain on master channel (typically 1.5 dB)"
            }
          }
        },
        "bwPercent": {
          "type": "object",
          "required": ["meaning", "wide", "medium", "narrow", "default"],
          "properties": {
            "meaning": {
              "type": "string",
              "description": "Human explanation of bandwidth scale (0% = widest, 100% = narrowest)"
            },
            "wide": {
              "type": "array",
              "items": {
                "type": "number",
                "minimum": 0,
                "maximum": 100
              },
              "minItems": 2,
              "maxItems": 2,
              "description": "Wide bandwidth range [min, max] percentage"
            },
            "medium": {
              "type": "array",
              "items": {
                "type": "number",
                "minimum": 0,
                "maximum": 100
              },
              "minItems": 2,
              "maxItems": 2,
              "description": "Medium bandwidth range [min, max] percentage"
            },
            "narrow": {
              "type": "array",
              "items": {
                "type": "number",
                "minimum": 0,
                "maximum": 100
              },
              "minItems": 2,
              "maxItems": 2,
              "description": "Narrow bandwidth range [min, max] percentage"
            },
            "default": {
              "type": "number",
              "minimum": 0,
              "maximum": 100,
              "description": "Default starting bandwidth percentage"
            }
          }
        }
      }
    },
    "roles": {
      "type": "object",
      "required": ["primary", "fixes", "creative", "warnings"],
      "properties": {
        "primary": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Core functions of this band"
        },
        "fixes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Common problems this band solves"
        },
        "creative": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Creative/artistic applications"
        },
        "warnings": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Things to avoid or be cautious about"
        }
      }
    },
    "uiCopy": {
      "type": "object",
      "required": ["label", "oneLiner", "tooltip", "dos", "donts"],
      "properties": {
        "label": {
          "type": "string",
          "maxLength": 25,
          "description": "Short band name (2-3 words)"
        },
        "oneLiner": {
          "type": "string",
          "maxLength": 60,
          "description": "Brief summary (≤60 characters)"
        },
        "tooltip": {
          "type": "string",
          "maxLength": 200,
          "description": "1-2 sentence guidance for users"
        },
        "dos": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Best practices for this band"
        },
        "donts": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Things to avoid with this band"
        }
      }
    }
  }
}

```

---

## FILE: 03-Workflows\README.md

```markdown
# 03-Workflows

Practical, step-by-step guides for applying Fruity Parametric EQ 2 in real-world scenarios.

## 🩺 By Symptom (Diagnostic)

_Identification and repair of common mix problems._

### Priority 1 (Critical)

- [**Rumble / Headroom Loss**](./by-symptom/rumble-headroom-fix.md) - Fix the invisible energy that eats your volume.
- [**Muddy / Cloudy Mix**](./by-symptom/muddy-cloudy-fix.md) - The #1 mix problem. Fixing low-mid buildup (250 Hz).
- [**Harshness / Ear Fatigue**](./by-symptom/harsh-fatigue-fix.md) - Taming painful upper-mids (4-6 kHz).

### Priority 2 (Tone)

- [**Boxy / Cardboard Tone**](./by-symptom/boxy-cardboard-fix.md) - Removing the "cheap room" sound (~400 Hz).
- [**Nasal / Honky Tone**](./by-symptom/nasal-honk-fix.md) - Smoothing out pinched vocals and guitars (~850 Hz).
- [**Thin / Weak Audio**](./by-symptom/thin-weak-fix.md) - Adding body and authority to frail sources.

## 🎸 By Instrument

_Specific chains for common elements._

- [**Lead Vocal Polish**](./by-instrument/vocal-lead-workflow.md) - The 4-step chain for clear, modern vocals.
- [**Kick Drum & Low End**](./by-instrument/kick-drum-low-end.md) - Boosting weight while maintaining clarity.
- [**Acoustic Guitar**](./by-instrument/acoustic-guitar-clean.md) - Removing boom to reveal sparkle.
- [**Modern Synth / EDM**](./by-instrument/modern-synth-edm.md) - Tight, focused leads that cut through the mix.

## 🎯 By Goal

_Context-specific strategies._

- [**Mix Bus / Mastering Polish**](./by-goal/mix-bus-polish.md) - Subtle finishing touches for the master channel.

---

**Tip:** These workflows reference the presets found in `02-Data/presets/`.

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity Parametric EQ 2

## 1. Mid/Side Processing (The Wider Mix)

EQing the Stereo information separately from the Mono information.

**Goal:** Brighten the "Sides" of a synth bus without making the center harsh.

1.  **Plugin Setup:** Load Parametric EQ 2 on your Synth Bus.
2.  **Patcher Required:** *Actually, Parametric EQ 2 cannot do M/S internal processing inherently.* You must use **Patcher**.
    *   *Correction:* Wait! You can use **Stereo Shaper** splitting, OR usually people just use the Patcher "Mid-Side EQ" preset which uses 2x Parametric EQ 2s.
    *   *Alternative:* FL Studio Patcher Preset -> "Mid Side EQ".
3.  **Visual Method:** In pure PEQ2, you can *visualize* Mid vs Side.
    *   **Monitor Input:** Set to **SIDE**. Now the heatmap shows stereo width.
    *   **Action:** You can't separate the processing in one plugin instance. Use Patcher.

## 2. Linear Phase Mastering

Preserving the transient punch of a final mix.

1.  **Context:** You are on the Master Bus.
2.  **Mode:** Enable **LIN** (Linear Phase) button.
3.  **Analysis:** The audio will now have latency (Plugin Delay Compensation handles this).
4.  **Action:** Boost the High Air (+1dB at 10kHz).
5.  **Benefit:** In Standard mode, this high shelf smears the phase of the kick drum (lows) slightly due to phase wrap. In LIN mode, the phase relationship between Kick (Low) and Hats (High) remains locked.
6.  **Warning:** Do not use Steep 8 High Pass filters on the Master in LIN mode. It creates "Pre-Ringing" (a swoosh sound before the kick hits). Use Gentle slopes.

## 3. Surgical Vocal Cleanup (The "Search & Destroy")

1.  **Visuals:** Turn **Range** to -90dB. Set **Precision** to High.
2.  **Band 6:** Set to Peaking, Narrow Q. Gain +10dB.
3.  **Sweep:** While the vocal plays, sweep 200Hz - 800Hz.
4.  **Identify:** Find the "Mud" or "Boxiness" (usually ~300-500Hz).
5.  **Cut:** Drop the gain to -3dB.
6.  **Band 7:** High Shelf. Boost 10kHz +2dB for "Air".

## 4. Kick Drum Tuning (Key Mapping)

1.  **Goal:** Boost the fundamental of the kick.
2.  **Method:** Right-Click Band 2 token -> **Key** -> Select the Key of your song.
3.  **Refine:** Select octave 0 or 1.
4.  **Action:** The EQ band snaps to the exact Hz of that note.
5.  **Boost:** Add +2dB. Now your kick resonates in key with the bassline.

## 5. The "Visual" Mixcheck (Pivot Slope)

Using the plugin as a metering tool.

1.  **Monitor:** On the Master Bus.
2.  **Pivot Slope:** Set to **4.5dB**.
3.  **Observation:** Play a professional reference track.
4.  **Heatmap:** Notice how the heatmap looks generally "Flat" or balanced horizontally?
5.  **Comparison:** Play your track.
6.  **Diagnosis:** If your heatmap is bright red in the bass but black in the highs, your mix is dark. If it's bright in the highs but thin in the lows, it's harsh.
7.  **Goal:** Aim for a similar "Density Balance" to the reference.

```

---

## FILE: 03-Workflows\by-goal\mix-bus-polish.md

```markdown
# Workflow: Mix Bus / Mastering Polish

**Goal:** Add the final finish to a mix used on the Master channel or major instrument buses.

**Preset Reference:** `Mix Bus - Final Polish`

---

## ⚠️ Important Rules for Bus EQ

1.  **Small Moves:** Never boost/cut more than **1.5 dB**. If you need more, go back to the individual tracks.
2.  **Wide Bandwidth:** Use gentle curves (0 - 30% BW). Narrow cuts sound unnatural on a full mix.
3.  **Subtlety:** You should barely hear it working. Toggle it on/off to feel the difference rather than hearing a drastic tonal shift.

---

## 🛠️ The Chain

### Step 1: The "Smile" (Bands 1, 2, 7)

A subtle "smiley face" curve is standard for modern polished sound.

- **Band 1 (Sub):** Gentle High Pass at **20-30 Hz**. (Removes DC offset and invisible energy that eats headroom).
- **Band 2 (Warmth):** Very wide cut (-1 dB) at **250 Hz**. Cleans up mud accumulation.
- **Band 7 (Air):** Gentle High Shelf (+1 dB) at **12 kHz**. Opens up the top end.

### Step 2: The Clue (Band 5 or 6)

If the mix feels a bit distant or distinct:

- **Band 5 (Presence):** Very wide boost (+0.5 dB) at **3 kHz**. brings the whole mix "forward."

---

## 🔄 Troubleshooting the Master

| Symptom             | Bus EQ Fix                                           |
| ------------------- | ---------------------------------------------------- |
| **Mix is muddy**    | Cut -1 dB @ 250 Hz (Wide)                            |
| **Mix is harsh**    | Cut -1 dB @ 4 kHz (Wide)                             |
| **Mix sounds dull** | Boost +1 dB @ 10 kHz (Shelf)                         |
| **Mix lacks punch** | Are you sure it's EQ? Try a bright compressor first. |

**Pro Tip:**
Put this EQ _before_ your final Limiter.

```

---

## FILE: 03-Workflows\by-instrument\acoustic-guitar-clean.md

```markdown
# Workflow: Acoustic Guitar Clarity

**Goal:** Remove "boom" and "honk" to reveal the natural sparkle of the instrument.

**Preset Reference:** `Guitar - Acoustic Clean`

---

## 🛠️ The Chain

Acoustic guitars often take up too much space. We need to carve them out.

### Step 1: Control the Boom (Band 1 🟣)

**Gentle High Pass**

- **Freq:** 60 - 80 Hz
- **Gain:** 0 dB (Cut)
- **Use Case:** Removes the "thump" from the body that clashes with the kick/bass. Keep this lower (60 Hz) if it's a solo performance, higher (100 Hz) if it's in a dense mix.

### Step 2: The "Wood" Tone (Band 3 🟠)

**De-Box**

- **Freq:** ~420 Hz
- **Gain:** -2 to -3 dB
- **Why:** This removes the cheap "plywood" sound and makes the guitar sound like a more expensive instrument.

### Step 3: Sparkle (Band 6 🔵)

**String Detail**

- **Freq:** 5000 Hz (5 kHz)
- **Gain:** +1 to +2 dB
- **Why:** Brings out the sound of the pick hitting the strings. Essential for rhythm tracks.

### Step 4: Air (Band 7 🔵)

**Openness**

- **Freq:** 12 kHz (High Shelf)
- **Gain:** +1.5 dB
- **Why:** Adds dimension and space.

---

## 👂 Listener Guide

- **Too thin?** Turn off the High Pass (Band 1) or reduce the cut on Band 3.
- **Too harsh/clicky?** Reduce the boost on Band 6.
- **Too boom-y?** Use **Band 2** to cut a wide bell at 200 Hz.

```

---

## FILE: 03-Workflows\by-instrument\kick-drum-low-end.md

```markdown
# Workflow: Kick Drum & Low-End Weight

**Goal:** A kick drum that punches hard, hits the sub, but doesn't muddy up the mix.

**Preset Reference:** `Kick/808 - Sub Boost`

---

## 🛠️ The Chain

Kick drums need _focused_ energy, not broad energy.

### Step 1: The Fundamental (Band 1 🟣)

**Add Weight**
Instead of just cutting, we can use the Bell curve on Band 1 to boost the specific root note.

- **Action:** Bell Boost (Not High Pass!)
- **Freq:** 45 - 60 Hz (Find the key of your track)
- **Amount:** +2 to +3 dB
- **Why:** This makes the kick physically shake the speakers at its core frequency.

### Step 2: The Knock (Band 5 🟢 or Band 6 🔵)

**Add Attack**
A kick needs high frequency to be heard on phone speakers.

- **Action:** Bell Boost.
- **Freq:** 3 kHz - 5 kHz
- **Amount:** +3 dB
- **Why:** This is the sound of the beater hitting the skin. It gives the kick "point" or "click."

### Step 3: The Cleanup (Band 2 🌸)

**Remove Boxiness/Mud**

- **Action:** Bell Cut.
- **Freq:** 250 Hz - 400 Hz
- **Amount:** -3 to -6 dB (Be aggressive here!)
- **Why:** Kicks often sound like cardboard in the low-mids. Cutting this huge chunk out makes the Lows (Step 1) and Highs (Step 2) sound much more powerful by contrast. This is the "Smiley Face" EQ curve.

---

## 💡 Bass Relationship

**The Kick vs. Bass Puzzle**

If you boost the Kick at 60 Hz:

- You should probably **cut** the Bass guitar/synth at 60 Hz slightly.
- Or Sidechain compress the bass to the kick.

**Don't boost both at the same frequency.** Let the Kick own the sub-punch, and let the Bass own the body (100 Hz+), or vice versa.

```

---

## FILE: 03-Workflows\by-instrument\modern-synth-edm.md

```markdown
# Workflow: Modern Synth & EDM Lead

**Goal:** A tight, focused sound that cuts through a heavy bassline without getting muddy.

**Preset Reference:** `Synth - Modern EDM`

---

## 🛠️ The Chain

Modern synths need to be "surgical" to fit into dense electronic mixes.

### Step 1: Tighten Lows (Band 1 🟣)

**Aggressive High Pass**

- **Freq:** 100 - 120 Hz
- **Why:** Synths often have useless low-end rumble. In EDM, the sub (30-80 Hz) belongs to the Kick and Sub Bass. **Kill the synth low-end completely.**

### Step 2: Clean the Mud (Band 2 🌸)

**Separation**

- **Freq:** 250 Hz
- **Gain:** -2 dB
- **Why:** Synths are rich in harmonics. Cutting here prevents them from masking the snare and vocals.

### Step 3: Focus (Band 5 🟢)

**Lead Presence**

- **Freq:** 2800 Hz (2.8 kHz)
- **Gain:** +2 dB
- **Type:** Bell
- **Why:** This makes the specific melody line "speak."

### Step 4: Snap (Band 6 🔵)

**Transient Definition**

- **Freq:** 5500 Hz (5.5 kHz)
- **Gain:** +1.5 dB
- **Why:** Enhances the "pluck" or attack of the sound.

---

## ⚡ Pro Tip: The "Telephone" Break

For breakdowns or intros, use **Band 4 (Yellow)**:

1.  Boost +10 dB at 1 kHz.
2.  Narrow bandwidth (80%).
3.  Cut everything else (Low Pass + High Pass).
4.  _Result:_ Instant "Lo-Fi" or "Radio" effect.

```

---

## FILE: 03-Workflows\by-instrument\vocal-lead-workflow.md

```markdown
# Workflow: Lead Vocal Polish

**Goal:** Create a modern, professional lead vocal that sits "on top" of the mix without being harsh.

**Preset Reference:** `Vocal Polish - Lead`

---

## 🛠️ The Chain

This workflow uses a 4-band approach to shape the vocal.

### Step 1: Clean (Band 1 🟣)

**Low-End Cleanup**

- **Action:** High Pass Filter to remove rumble.
- **Freq:** 80 - 100 Hz
- **Why:** Vocals don't need sub-bass frequencies. This headroom belongs to the kick and bass.

### Step 2: Clear (Band 2 🌸)

**De-Mud**

- **Action:** Bell Cut.
- **Freq:** ~250 Hz (Sweep 200-300 Hz)
- **Amount:** -1.5 to -3 dB
- **Why:** Removes the "muffled" quality and separates the vocal from guitars/keys.

### Step 3: Present (Band 5 🟢)

**Intelligibility**

- **Action:** Bell Boost.
- **Freq:** ~2.5 k - 2.8 k Hz
- **Amount:** +1.5 dB (Wide BW)
- **Why:** This is where the human ear hears lyrics. A small boost here brings the singer forward.
- **Warning:** If the vocal is already harsh or sibilant, SKIP this or use a De-Esser first.

### Step 4: Shine (Band 7 🔵)

**Air & Gloss**

- **Action:** High Shelf Boost.
- **Freq:** 12 kHz
- **Amount:** +2.5 dB
- **Why:** Adds that expensive "studio sheen" and breathiness.

---

## 🔄 Adjustment Guide

| If it sounds...      | Do this...                                                 |
| -------------------- | ---------------------------------------------------------- |
| **Thin**             | Reduce the cut on Band 2, or add +1 dB at 180 Hz (Body).   |
| **Harsh**            | Disable Band 5 boost. Cut Band 6 (~4.5 kHz) by -1 dB.      |
| **Sibilant ("Sss")** | Cut Band 6 (~6 kHz) or use a De-Esser. Reduce Band 7 gain. |
| **Boxy**             | Add a cut on Band 3 (~400 Hz).                             |

```

---

## FILE: 03-Workflows\by-symptom\boxy-cardboard-fix.md

```markdown
# Workflow: Removing "Boxy" or Cardboard Tone

**Symptom:** The audio sounds like it was recorded in a small cardboard box. It lacks depth and sounds "cheap" or "hollow."

**Primary Suspect:** Lower-Midrange Congestion (300 - 550 Hz).

---

## 🛠️ The Fix (Priority 2)

Removing boxiness is the "secret sauce" that makes home recordings sound expensive.

### Step 1: The Sweep

1.  Select **Band 3 (Orange)**.
2.  Boost it to **+9 dB** (temporarily!).
3.  Make the bandwidth narrow (80%).
4.  Sweep slowly between **300 Hz** and **600 Hz**.
5.  Listen for the frequency that sounds most like "honking into a cup." **That is the boxiness.**

### Step 2: The Action (Band 3 🟠)

Once you found the frequency (often ~400-450 Hz), cut it.

| Parameter  | Setting     | Note                                    |
| ---------- | ----------- | --------------------------------------- |
| **Band**   | 3 (Orange)  |                                         |
| **Type**   | Bell        |                                         |
| **Freq**   | ~420 Hz     | _Or wherever you found the "cup" sound_ |
| **Amount** | -2 to -4 dB | _Aggressive cuts often work here_       |
| **BW**     | 50%         | _Medium width_                          |

### Step 3: Verify

Toggle the band on/off. The sound should visibly "open up" and feel less enclosed when the cut is active.

### Instrument Specifics

- **Drums (Snare/Toms):** Often need heavy cuts (-4 dB) at ~400 Hz to sound "pro."
- **Acoustic Guitar:** Cut ~350-400 Hz to remove the "cheap wood" sound.
- **Vocals:** Gentle cut at ~350 Hz clears up the muddiness that isn't quite low-end mud.

---

## 💡 Pro Tip

**Don't hollow it out.**
If you cut too much, the sound becomes distinctively "scooped" and weak. You want to remove the _excess_ resonance, not the entire frequency range.

**Reference Rule:**

> `boxy_or_cardboard` → Band 3: De-Box 420

```

---

## FILE: 03-Workflows\by-symptom\harsh-fatigue-fix.md

```markdown
# Workflow: Taming Harshness & Ear Fatigue

**Symptom:** The mix hurts to listen to at high volumes. Snare hits make you wince. Vocals sound "edgy" or "sharp." You feel tired after listening for 10 minutes.

**Primary Suspect:** Upper-Midrange Resonances (3.5 - 6 kHz).

---

## 🛠️ The Fix (Priority 1)

Harshness ruins the listener experience immediately. Fix this before boosting _anything_.

### Step 1: Identification

Harshness usually lives in:

- Vocals (sibilance/edge)
- Distorted Guitars (fizz)
- Cymbals / Overhead Drums
- Aggressive Synths

### Step 2: The Action (Band 6 🔵)

Use the **Tame Harsh 4500** archetype.

| Parameter  | Setting       | Note                                  |
| ---------- | ------------- | ------------------------------------- |
| **Band**   | 6 (Teal)      |                                       |
| **Type**   | Bell          |                                       |
| **Freq**   | 4500 Hz       | _Common pain point. Sweep 3.5k - 6k._ |
| **Amount** | -1.5 to -3 dB | _Be careful, easy to lose "bite"_     |
| **BW**     | 65%           | _Medium-Narrow_                       |

### Step 3: Different Flavors of Harshness

- **"Bitey/Edgy" (2 - 3 kHz):** Use **Band 5**. Try cutting -1.5 dB at 2800 Hz (Archetype: _Soften Bite_).
- **"Sharp/Piercing" (4 - 6 kHz):** Use **Band 6** as described above.
- **"Hissy/Sibilant" (6 - 8 kHz):** Use **Band 6** higher up or a De-Esser plugin.

### Step 4: The Mix Bus Check

If the _entire_ mix hurts:

1.  Put an EQ on the Master Bus.
2.  Gently cut **-1 dB** at **4.5 kHz** with a wide bandwidth (30%).
3.  This is a "band-aid" - better to fix the individual tracks causing it.

---

## ⚠️ Warning

**The Volume Trap:**
Louder music always sounds harsher. Make sure you aren't just monitoring too loud. Turn your volume down—if it still hurts, it's the mix.

**Reference Rule:**

> `harsh_or_fatiguing` → Band 6: Tame Harsh 4500

```

---

## FILE: 03-Workflows\by-symptom\muddy-cloudy-fix.md

```markdown
# Workflow: Fixing a Muddy or Cloudy Mix

**Symptom:** The mix sounds "thick," "congested," or like there is a blanket over the speakers. Instruments fight for space, and vocals lack clarity.

**Primary Suspect:** Low-Mid Frequency Buildup (200 - 350 Hz).

---

## 🛠️ The Fix (Priority 1)

This is a critical issue that must be addressed before adding polish.

### Step 1: Diagnosis

Solo the "warm" instruments in your mix one by one:

- Guitars
- Synths / Pads
- Vocals
- Snare Drum

Listen for a "woolly" or "muffled" quality.

### Step 2: The Action (Band 2 🌸)

Use the **De-Mud 250** archetype on the offending tracks.

| Parameter   | Setting       | Note                                      |
| ----------- | ------------- | ----------------------------------------- |
| **Band**    | 2 (Pink)      |                                           |
| **Type**    | Bell          |                                           |
| **Freq**    | 250 Hz        | _Sweep 200-300 Hz to find the worst spot_ |
| **Ammount** | -1.5 to -3 dB | _Start small!_                            |
| **BW**      | 35%           | _Wide-ish cut_                            |

### Step 3: Check Context

Un-solo the track. Does the whole mix sound clearer?

- **Yes:** Good job.
- **No, now it sounds thin:** You cut too much. Reduce the cut to -1 dB or try a wider bandwidth (lower %).

### Step 4: Advanced Separation

If vocals are fighting with guitars/keys in this range:

1.  **Cut more** (-3 dB) on the backing instrument (guitar/keys).
2.  **Cut less** (-1 dB) or leave neutral on the lead vocal.
3.  This creates a "pocket" for the vocal to sit in.

---

## 💡 Pro Tip

**"Mud accumulates."**
A -0.5 dB cut on 10 tracks = -5 dB total mud reduction. You often don't need heavy cuts on single tracks if you clean up everything slightly.

**Reference Rule:**

> `muddy_or_cloudy` → Band 2: De-Mud 250

```

---

## FILE: 03-Workflows\by-symptom\nasal-honk-fix.md

```markdown
# Workflow: Taming Nasal & Honky Tone

**Symptom:** The source (vocal, saxophone, guitar) sounds pinched, "honky," or like someone holding their nose. It's annoying and piercing.

**Primary Suspect:** Upper-Midrange Frequencies (600 - 1200 Hz).

---

## 🛠️ The Fix (Priority 2)

**Band 4 (Yellow)** is specifically designed for this range. It is the most sensitive band in the plugin.

### Step 1: The Sweep (Careful!)

1.  Select **Band 4**.
2.  Boost **+5 dB** (don't go too high, it will hurt).
3.  Narrow BW (70%).
4.  Sweep slowly from **700 Hz** to **1 kHz**.
5.  Listen for the "Goose Honk" or extreme nasality.

### Step 2: The Cut

| Parameter | Setting         | Note                       |
| --------- | --------------- | -------------------------- |
| **Band**  | 4 (Yellow)      |                            |
| **Freq**  | ~850 Hz         | _Common sweet spot_        |
| **Gain**  | -1.5 to -2.5 dB | _Small moves matter here!_ |
| **BW**    | 60%             | _Medium-Narrow_            |

### Step 3: Male vs. Female

- **Male Vocals:** Honk is often lower (**~700 Hz**).
- **Female Vocals:** Nasality is often higher (**~950 - 1100 Hz**).

---

## ⚠️ Warning

**Don't over-cut.**
If you scoop this range too deeply (-4 dB+), the vocal will lose its power and sound "hollow" or distant. You only want to tame the annoyance, not remove the core tone.

**Reference Rule:**

> `nasal_or_honky` → Band 4: Tame Honk 850

```

---

## FILE: 03-Workflows\by-symptom\rumble-headroom-fix.md

```markdown
# Workflow: Cleaning Rumble & Improving Headroom

**Symptom:** The mix looks loud on meters but sounds quiet. The standard limiter is "pumping" or distorting easily. Speakers are flapping but you don't hear much bass.

**Primary Suspect:** Subsonic Noise (0 - 40 Hz).

---

## 🛠️ The Fix (Priority 1)

This is the "invisible killer" of loud mixes.

### Step 1: The Diagnosis

Look at the spectral analyzer (the moving background in Parametric EQ 2).

- Do you see purple activity down at 20 Hz even when the bass isn't playing?
- That is **rumble** (AC hum, mic stand bumps, breathing). It eats energetic space but provides no musical value.

### Step 2: The Safety Filter (Band 1 🟣)

Apply this to **every track** except the Kick and Sub-Bass.

- **Type:** High Pass
- **Freq:** 80 - 100 Hz
- **Steepness:** Default
- **Result:** You just recovered ~3-6 dB of headroom instantly.

### Step 3: The Bass Cleanup

Even your Bass and Kick don't need _infinite_ low end.

- **Action:** High Pass on Kick/Bass
- **Freq:** 20 - 30 Hz
- **Steepness:** Steep
- **Why:** Removes DC offset and useless subsonic flab. Makes the bass sound "tighter" and less "floppy."

---

## 📉 Why High Pass?

A limiter reacts to the _loudest_ peaks. Low frequencies carry the most energy. If your 30 Hz rumble is peaking, the limiter clamps down on your _Vocals_ (at 2 kHz), making the whole song quieter.
**Cut the rumble = Louder potential volume.**

**Reference Rule:**

> `rumble_or_headroom_loss` → Band 1: HP Clean 80

```

---

## FILE: 03-Workflows\by-symptom\thin-weak-fix.md

```markdown
# Workflow: Fixing Thin or Weak Audio

**Symptom:** The instrument sounds small, frail, or lacks "authority." It feels like it has no physical weight.

**Primary Suspect:** Lack of Low-Mid Body (150 - 250 Hz).

---

## 🛠️ The Fix (Priority 2)

We need to add **Body** and **Chest Resonance**.

### Step 1: The "Chest" Boost (Band 2 🌸)

This range (150-200 Hz) corresponds to the resonance of a human chest cavity.

- **Action:** Bell Boost
- **Freq:** 180 Hz - 200 Hz
- **Gain:** +1.5 to +3 dB
- **Result:** Instant authority and "bigness."

### Step 2: The Saturation Trick

Sometimes EQ isn't enough. If a +3 dB boost doesn't fix it, the audio file simply lacks low-end information.

- **Don't just keep boosting EQ.**
- **Try:** Adding a saturation plugin (like Fruity Blood Overdrive or Saturation Knob) _before_ the EQ to generate harmonics.

### Step 3: Check the High Pass

Did you accidentally High Pass (Band 1) too high?

- Check Band 1. Is it at 150 Hz?
- **Fix:** Drag it down to **80 Hz** or turn it off. You might be cutting the fundamental note of the instrument.

---

## 💡 Tone Shaping

- **Thick/Warm:** Boost ~220 Hz.
- **Big/Heavy:** Boost ~100 Hz (Band 1 Bell).
- **Power:** Boost ~180 Hz.

**Reference Rule:**

> `thin_or_weak` → Band 2: Add Body 200

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Parametric EQ 2 Mechanics

## 1. Filter Topology: IIR vs LIN vs HQ

Parametric EQ 2 offers three distinct processing engines.

### IIR (Infinite Impulse Response) - "Standard"
*   **Math:** Uses recursive feedback loops (analog simulation).
*   **Phase:** **Minimum Phase**. Frequencies are shifted in time relative to each other.
*   **Latency:** Zero.
*   **Artifacts:** Phase smearing (coloring). Near Nyquist (20kHz), the bell curves become asymmetrical ("Cramping").

### HQ (High Quality) - "Oversampling"
*   **Math:** IIR with 2x (or higher) Oversampling.
*   **Function:** Runs the filter at double the project sample rate.
*   **Benefit:** Fixes the "Cramping" at high frequencies. The bell curves remain symmetrical up to 20kHz.
*   **Cost:** Small CPU increase.

### LIN (Linear Phase) - "FFT"
*   **Math:** Fast Fourier Transform (Windowed Sinc function).
*   **Phase:** **Linear**. All frequencies are delayed by the exact same amount. Group Delay is constant.
*   **Latency:** High (Dependent on buffer size).
*   **Artifacts:** **Pre-Ringing**. Because the filter acts symmetrically in time, echoes of the transient appear *before* the transient. This is audible on sharp percussive sounds (Kicks/Snares) as a "swelling" or "sucking" noise.
*   **Usage:** Best for multi-mic recordings (Drum overheads) or Mastering where phase coherency is paramount.

---

## 2. Visualization Physics (Pivot Slope)

The **Pivot Slope** setting changes how the Frequency Spectrum is weighted visually. It compensates for "Pink Noise" distribution.

*   **Pink Noise:** Equal energy per octave. Sounds "Flat" to human ears.
*   **White Noise:** Equal energy per Hz. Sounds "Bright/Harsh".

### Slopes Explained
*   **0 dB/Oct:** White Noise looks flat. Music looks tilted down (Bass heavy).
*   **3 dB/Oct:** Standard spectrum analyzer. Music looks slightly tilted.
*   **4.5 dB/Oct (Default):** Pink Noise looks flat. Music looks flat.
    *   *Why?* This matches human hearing intensity. If the heatmap is flat here, the mix *sounds* balanced.
*   **6 dB/Oct:** Brown Noise looks flat.

---

## 3. Band Soling Logic (Adaptive)

When you `Shift + Click` a band, EQ 2 doesn't just mute the others. It applies a specific "Inverse" filter to isolate the band.

*   **Peaking Input:** Solos using a Bandpass.
*   **Low Pass Input:** Solos using a High Pass (showing you what you are removing).
*   **Band Pass Input:** Solos using a Band Pass (showing you what you are keeping).

This "Adaptive Solo" helps you hear exactly what energy is being affected by that specific token.

```

---

## FILE: 04-Reference\api-specifications\data-model-overview.md

```markdown
# Data Model Overview

Complete architectural overview of the Fruity Parametric EQ 2 JSON data model.

## System Architecture

`\`\`
┌─────────────────────────────────────────────────────┐
│              JSON Schema (eg1.json)                 │
│         Structural Validation Layer                  │
└────────────────┬────────────────────────────────────┘
                 │ validates
                 ↓
┌─────────────────────────────────────────────────────┐
│         Band Definitions (eg2.json)                 │
│         Canonical Reference Data                     │
│   • 7 bands with complete metadata                  │
│   • UI copy, roles, controls, frequencies           │
└────────────┬────────────────────────────────────────┘
             │ provides metadata for
             ↓
┌─────────────────────────────────────────────────────┐
│         Band Archetypes (eg3.json)                  │
│         Reusable Preset Building Blocks              │
│   • Pre-configured band settings                    │
│   • Organized by band                               │
└────────────┬────────────────────────────────────────┘
             ↑ referenced by
             │
┌─────────────────────────────────────────────────────┐
│         Decision Rules (eg4.json)                   │
│         Symptom → Solution Mappings                  │
│   • Diagnostic tree                                 │
│   • Priority-ordered recommendations                 │
└─────────────────────────────────────────────────────┘
`\`\`

---

## Core Entities

### 1. Band Object

**Primary entity representing one of the 7 EQ bands**

`\`\`typescript
interface Band {
  bandId: number;              // 1-7
  color: BandColor;            // purple | pink | orange | yellow | green | teal | blue
  zone: string;                // "Sub / Foundation", "Warmth / Body", etc.
  frequencyHz: FrequencySpec;  // Range and anchor targets
  controls: ControlSpec;       // Available controls and safe limits
  roles: RoleSpec;             // What the band does
  uiCopy: UICopySpec;          // User-facing text
}
`\`\`

**Location:** `02-Data/band-definitions/eg2.json → bands[]`

**Cardinality:** Exactly 7 (one per band)

**Purpose:** Complete reference data for each band

---

### 2. Frequency Specification

**Defines the frequency range and common targets for a band**

`\`\`typescript
interface FrequencySpec {
  typicalRange: [number, number];  // [min, max] in Hz
  anchorTargets: number[];         // Common frequency points for presets
}
`\`\`

**Example:**
`\`\`json
{
  "typicalRange": [140, 320],
  "anchorTargets": [150, 200, 250, 300]
}
`\`\`

**Purpose:**
- `typicalRange`: The Hz range this band typically operates in
- `anchorTargets`: Specific frequencies used in quick-action buttons

---

### 3. Control Specification

**Defines available controls and safe operating limits**

`\`\`typescript
interface ControlSpec {
  typeOptions: FilterType[];      // Supported filter types
  defaultType: FilterType;        // Recommended starting type
  gainDb: GainSpec;               // Gain ranges by context
  bwPercent: BandwidthSpec;       // Bandwidth guidance
}

type FilterType =
  | "high_pass"
  | "low_pass"
  | "bell"
  | "high_shelf"
  | "low_shelf"
  | "notch";

interface GainSpec {
  typical: [number, number];      // Normal operating range
  safeMaxTrack: number;           // Maximum for individual tracks
  safeMaxBus: number;             // Maximum for group buses
  safeMaxMaster: number;          // Maximum for master bus
}

interface BandwidthSpec {
  meaning: string;                // Human explanation
  wide: [number, number];         // Wide BW range
  medium: [number, number];       // Medium BW range
  narrow: [number, number];       // Narrow BW range
  default: number;                // Recommended starting point
}
`\`\`

**Important:** Bandwidth scale is **inverted** in FL Studio
- 0% = widest (affects ~3-4 octaves)
- 100% = narrowest (surgical precision)

---

### 4. Role Specification

**Describes what the band does and when to use it**

`\`\`typescript
interface RoleSpec {
  primary: string[];      // Core functions
  fixes: string[];        // Common problems it solves
  creative: string[];     // Artistic applications
  warnings: string[];     // What to avoid
}
`\`\`

**Example:**
`\`\`json
{
  "primary": ["Manage sub-bass and rumble", "Remove headroom-eating frequencies"],
  "fixes": ["Rumble removal", "Clearing headroom"],
  "creative": ["Bass boost for EDM/hip-hop"],
  "warnings": ["Never boost here unless designing bass"]
}
`\`\`

---

### 5. UI Copy Specification

**User-facing text for interfaces**

`\`\`typescript
interface UICopySpec {
  label: string;          // 2-3 words (e.g., "Sub / Foundation")
  oneLiner: string;       // ≤60 chars summary
  tooltip: string;        // 1-2 sentence guidance
  dos: string[];          // Best practices
  donts: string[];        // Things to avoid
}
`\`\`

**Purpose:** Ready-to-use microcopy for plugin UIs

---

### 6. Band Archetype

**Pre-configured band setting (preset building block)**

`\`\`typescript
interface BandArchetype {
  name: string;           // Descriptive name (e.g., "HP Clean", "De-Mud")
  type: FilterType;       // Filter type
  freqHz: number;         // Center/cutoff frequency
  bwPercent: number;      // Bandwidth setting
  gainDb: number;         // Gain amount (0 for filters)
}
`\`\`

**Location:** `02-Data/presets/eg3.json → bandArchetypes.bandN_name[]`

**Organization:** Grouped by band
`\`\`json
{
  "bandArchetypes": {
    "band1_sub": [ /* Band 1 archetypes */ ],
    "band2_warmth": [ /* Band 2 archetypes */ ],
    ...
  }
}
`\`\`

**Purpose:** Reusable configurations that can be stacked into full presets

---

### 7. Decision Rule

**Maps symptoms to recommended solutions**

`\`\`typescript
interface DecisionRule {
  symptom: string;                    // Symptom identifier
  priority: 1 | 2 | 3;                // 1=critical, 2=important, 3=polish
  recommendations: Recommendation[];   // Ordered list of solutions
}

interface Recommendation {
  bandId: number;          // Which band to use (1-7)
  archetype: string;       // Which archetype to apply
  notes: string;           // Why this helps
}
`\`\`

**Location:** `02-Data/rules/eg4.json → rules[]`

**Example:**
`\`\`json
{
  "symptom": "muddy_or_cloudy",
  "priority": 1,
  "recommendations": [
    {
      "bandId": 2,
      "archetype": "De-Mud",
      "notes": "Cut 200-300 Hz to clear low-mid buildup"
    }
  ]
}
`\`\`

---

## Data Relationships

### Primary Relationships

`\`\`
Band Definition (eg2.json)
    ↓ defines metadata for
Band Archetype (eg3.json)
    ↑ referenced by
Decision Rule (eg4.json)
`\`\`

**Example flow:**
1. User reports "muddy" sound
2. Look up in `rules/eg4.json` → finds `muddy_or_cloudy` rule
3. Rule recommends: Band 2, archetype "De-Mud"
4. Load archetype from `presets/eg3.json → band2_warmth → De-Mud`
5. Display context from `band-definitions/eg2.json → bands[1]`
6. Show tooltip, warnings, dos/donts from Band 2 definition

### Validation Relationships

`\`\`
JSON Schema (eg1.json)
    ↓ validates
All other data files
`\`\`

All band objects and archetypes should validate against the schema.

---

## Data Flow Patterns

### Pattern 1: Direct Band Access

`\`\`javascript
// Get Band 5 (Presence) definition
const band5 = bandDefinitions.bands[4]; // 0-indexed

// Access properties
console.log(band5.uiCopy.label);        // "Presence / Clarity"
console.log(band5.frequencyHz.typicalRange); // [1800, 3200]
console.log(band5.controls.typeOptions);     // ["bell", "high_shelf", "notch"]
`\`\`

### Pattern 2: Archetype Lookup

`\`\`javascript
// Get all Band 2 archetypes
const band2Archetypes = presets.bandArchetypes.band2_warmth;

// Find specific archetype
const deMud = band2Archetypes.find(a => a.name === "De-Mud");
// Returns: { name: "De-Mud", type: "bell", freqHz: 250, bwPercent: 35, gainDb: -2 }
`\`\`

### Pattern 3: Rule-Based Recommendation

`\`\`javascript
// Find rule for symptom
const rule = rules.find(r => r.symptom === 'muddy_or_cloudy');

// Get recommendations
rule.recommendations.forEach(rec => {
  const bandDef = bandDefinitions.bands[rec.bandId - 1];
  const archetype = findArchetype(rec.bandId, rec.archetype);

  console.log(`Use ${bandDef.uiCopy.label}: ${rec.archetype}`);
  console.log(`Settings:`, archetype);
  console.log(`Reasoning:`, rec.notes);
});
`\`\`

---

## Key Design Decisions

### 1. Separation of Concerns

**Why separate into 4 files?**

- **Schema (eg1.json)**: Pure structure definition, reusable for validation
- **Band Definitions (eg2.json)**: Reference data that changes rarely
- **Presets (eg3.json)**: User-editable configurations
- **Rules (eg4.json)**: Logic layer, can be extended without touching data

**Benefits:**
- Clear responsibilities
- Easy to update one layer without affecting others
- Can version independently
- Easier testing

### 2. Band Archetypes Instead of Full Presets

**Why band-level instead of full EQ presets?**

**Advantages:**
- **Modularity:** Mix and match archetypes
- **Flexibility:** Create thousands of combinations from dozens of archetypes
- **Smaller files:** Reference archetypes instead of duplicating settings
- **Updates propagate:** Fix an archetype, all presets using it improve

**Example:**
`\`\`javascript
// Instead of storing full presets like:
{
  "Vocal Polish": {
    band1: { type: "high_pass", freq: 80, ... },
    band2: { type: "bell", freq: 250, ... },
    band5: { type: "bell", freq: 2500, ... },
    band7: { type: "high_shelf", freq: 12000, ... }
  }
}

// Store archetype references:
{
  "Vocal Polish": [
    { bandId: 1, archetype: "HP Clean" },
    { bandId: 2, archetype: "De-Mud" },
    { bandId: 5, archetype: "Lead Clarity" },
    { bandId: 7, archetype: "Air Shelf" }
  ]
}
`\`\`

### 3. Context-Aware Safe Maximums

**Why different gain limits for track/bus/master?**

EQ changes **accumulate** through the mix chain:
- 10 tracks each boosting 2 dB = 20 dB at the bus
- Buses boosting 2 dB = additional gain at master
- Result: Cascading gain that clips or sounds unnatural

**Solution:**
`\`\`json
{
  "safeMaxTrack": 6,    // Individual tracks can be aggressive
  "safeMaxBus": 3,      // Buses should be subtle
  "safeMaxMaster": 1.5  // Master must be minimal
}
`\`\`

### 4. Inverted Bandwidth Scale

**Why 0% = widest instead of 100% = widest?**

This matches **FL Studio's actual implementation**.

While counter-intuitive, it's how the plugin works:
- 0% BW = widest Q (affects broad range)
- 100% BW = narrowest Q (surgical cut)

Data model reflects reality, not what might seem logical.

### 5. Priority-Based Rule System

**Why priority 1-3 instead of boolean critical/not-critical?**

**Three tiers enable workflow ordering:**
1. **Priority 1 (Critical):** Fix first - masks other problems
2. **Priority 2 (Important):** Address second - significant impact
3. **Priority 3 (Polish):** Final touches - subtle improvements

**Usage in assistants:**
`\`\`javascript
// Sort recommendations by priority
recommendations.sort((a, b) => a.priority - b.priority);

// Display with context
if (priority === 1) {
  showMessage("Fix this FIRST - it's masking other issues");
} else if (priority === 2) {
  showMessage("Important - address after critical issues");
} else {
  showMessage("Final polish - apply last");
}
`\`\`

---

## Constraints and Invariants

### Must-Follow Rules

1. **Exactly 7 bands** - No more, no less
2. **Band IDs 1-7** - Sequential, no gaps
3. **Colors follow spectrum** - Purple (low) → Blue (high)
4. **Array indexing** - bands[0] is Band 1 (0-indexed)
5. **Frequency ranges can overlap** - By design for smooth transitions
6. **All archetypes must reference valid bands** - Band ID 1-7 only
7. **All rules must reference existing archetypes** - No dangling references
8. **Gain limits decrease by context** - Track ≥ Bus ≥ Master

### Data Integrity Checks

`\`\`javascript
function validateDataIntegrity(schema, bandDefs, presets, rules) {
  const errors = [];

  // 1. Exactly 7 bands
  if (bandDefs.bands.length !== 7) {
    errors.push('Must have exactly 7 bands');
  }

  // 2. Sequential band IDs
  bandDefs.bands.forEach((band, i) => {
    if (band.bandId !== i + 1) {
      errors.push(`Band at index ${i} has wrong bandId: ${band.bandId}`);
    }
  });

  // 3. All archetypes reference valid bands
  Object.entries(presets.bandArchetypes).forEach(([key, archetypes]) => {
    const bandId = parseInt(key.match(/\d+/)[0]);
    if (bandId < 1 || bandId > 7) {
      errors.push(`Invalid band ID in archetype key: ${key}`);
    }

    archetypes.forEach(archetype => {
      const band = bandDefs.bands[bandId - 1];

      // Type is supported
      if (!band.controls.typeOptions.includes(archetype.type)) {
        errors.push(`Archetype "${archetype.name}" uses unsupported type ${archetype.type} for band ${bandId}`);
      }

      // Frequency in range
      const [min, max] = band.frequencyHz.typicalRange;
      if (archetype.freqHz < min || archetype.freqHz > max) {
        errors.push(`Archetype "${archetype.name}" freq ${archetype.freqHz} outside range ${min}-${max}`);
      }
    });
  });

  // 4. All rules reference existing archetypes
  rules.forEach(rule => {
    rule.recommendations.forEach(rec => {
      const bandKey = `band${rec.bandId}_${bandDefs.bands[rec.bandId-1].zone.split('/')[0].toLowerCase().replace(/ /g, '_')}`;
      const archetypes = presets.bandArchetypes[bandKey];

      if (!archetypes) {
        errors.push(`Rule "${rule.symptom}" references non-existent band key: ${bandKey}`);
        return;
      }

      const archetype = archetypes.find(a => a.name === rec.archetype);
      if (!archetype) {
        errors.push(`Rule "${rule.symptom}" references non-existent archetype: ${rec.archetype}`);
      }
    });
  });

  return errors;
}
`\`\`

---

## Extensibility Points

### Adding New Archetypes

`\`\`json
// In presets/eg3.json → bandArchetypes.band5_presence
{
  "name": "My Custom Presence Boost",
  "type": "bell",
  "freqHz": 2800,
  "bwPercent": 40,
  "gainDb": 2.5
}
`\`\`

**Requirements:**
- Must use supported filter type for that band
- Frequency must be in band's typicalRange
- Validate against schema

### Adding New Rules

`\`\`json
// In rules/eg4.json
{
  "symptom": "my_new_symptom",
  "priority": 2,
  "recommendations": [
    {
      "bandId": 3,
      "archetype": "De-Box",
      "notes": "Why this helps with the symptom"
    }
  ]
}
`\`\`

**Requirements:**
- Symptom ID must be unique
- Priority must be 1, 2, or 3
- All referenced archetypes must exist

### Adding Custom Band Properties

If you need extra data in band definitions:

`\`\`json
{
  "bandId": 5,
  "color": "green",
  // ... standard properties ...
  "customData": {
    "myAppSpecificField": "value"
  }
}
`\`\`

JSON Schema can be extended to validate custom fields.

---

## Versioning Strategy

### Current Version: 1.0

`\`\`json
{
  "version": "1.0",
  "bands": [ ... ]
}
`\`\`

### Future Versions

If structure changes significantly:

**Option 1: New schema version**
`\`\`json
{
  "version": "2.0",
  "schemaVersion": "2.0",
  "bands": [ ... ]
}
`\`\`

**Option 2: Migration layer**
`\`\`javascript
function migrate(data, fromVersion, toVersion) {
  if (fromVersion === "1.0" && toVersion === "2.0") {
    // Transform data structure
    return migrateV1toV2(data);
  }
  return data;
}
`\`\`

---

## Performance Considerations

### Indexing Strategies

`\`\`javascript
// Pre-compute lookups at load time
class DataModel {
  constructor(bandDefs, presets, rules) {
    this.bands = bandDefs.bands;

    // Index bands by ID
    this.bandsById = new Map(
      this.bands.map(b => [b.bandId, b])
    );

    // Index archetypes by band
    this.archetypesByBand = new Map();
    Object.entries(presets.bandArchetypes).forEach(([key, archs]) => {
      const bandId = parseInt(key.match(/\d+/)[0]);
      this.archetypesByBand.set(bandId, archs);
    });

    // Index rules by symptom
    this.rulesBySymptom = new Map(
      rules.map(r => [r.symptom, r])
    );
  }

  getBand(bandId) {
    return this.bandsById.get(bandId);
  }

  getArchetypes(bandId) {
    return this.archetypesByBand.get(bandId) || [];
  }

  getRule(symptom) {
    return this.rulesBySymptom.get(symptom);
  }
}
`\`\`

### Caching

`\`\`javascript
class CachedDataModel extends DataModel {
  constructor(bandDefs, presets, rules) {
    super(bandDefs, presets, rules);
    this.cache = new Map();
  }

  findArchetype(bandId, name) {
    const cacheKey = `${bandId}:${name}`;

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    const archetypes = this.getArchetypes(bandId);
    const archetype = archetypes.find(a => a.name === name);

    this.cache.set(cacheKey, archetype);
    return archetype;
  }
}
`\`\`

---

## Next Steps

- See `schema-validation-examples.md` for validation patterns
- See `typescript-interfaces.md` for type-safe development
- See `../integration-guides/json-workflow.md` for usage patterns

```

---

## FILE: 04-Reference\api-specifications\schema-validation-examples.md

```markdown
# Schema Validation Examples

Practical examples of validating band data using JSON Schema (eg1.json).

## Using AJV (JavaScript/Node.js)

### Installation
`\`\`bash
npm install ajv
`\`\`

### Basic Validation

`\`\`javascript
import Ajv from 'ajv';
import schema from './02-Data/schema/eg1.json' assert { type: 'json' };
import bandDefinitions from './02-Data/band-definitions/eg2.json' assert { type: 'json' };

const ajv = new Ajv();
const validate = ajv.compile(schema);

// Validate the entire band definitions file
const valid = validate(bandDefinitions);

if (!valid) {
  console.error('Validation errors:', validate.errors);
} else {
  console.log('✓ Band definitions are valid');
}
`\`\`

### Validating Individual Bands

`\`\`javascript
// Validate a single band
function validateBand(band) {
  // Extract just the band schema from the full schema
  const bandSchema = schema.properties.bands.items;
  const validateBand = ajv.compile(bandSchema);

  const valid = validateBand(band);

  if (!valid) {
    return {
      valid: false,
      errors: validateBand.errors
    };
  }

  return { valid: true };
}

// Test with a band
const band1 = bandDefinitions.bands[0];
const result = validateBand(band1);
console.log(result);
`\`\`

### Validating User-Created Bands

`\`\`javascript
function validateUserBand(userBand) {
  const bandSchema = schema.properties.bands.items;
  const validateBand = ajv.compile(bandSchema);

  const valid = validateBand(userBand);

  if (!valid) {
    return {
      valid: false,
      errors: validateBand.errors.map(err => ({
        field: err.instancePath,
        message: err.message,
        params: err.params
      }))
    };
  }

  return { valid: true };
}

// Example: User creates a band
const userBand = {
  bandId: 5,
  color: "green",
  zone: "Presence / Clarity",
  frequencyHz: {
    typicalRange: [1800, 3200],
    anchorTargets: [2000, 2500, 3000]
  },
  controls: {
    typeOptions: ["bell", "high_shelf"],
    defaultType: "bell",
    gainDb: {
      typical: [-3, 3],
      safeMaxTrack: 6,
      safeMaxBus: 3,
      safeMaxMaster: 1.5
    },
    bwPercent: {
      meaning: "0% = widest, 100% = narrowest",
      wide: [20, 40],
      medium: [40, 60],
      narrow: [60, 80],
      default: 50
    }
  },
  roles: {
    primary: ["Add presence"],
    fixes: ["Buried vocals"],
    creative: ["Aggressive clarity"],
    warnings: ["Don't overuse"]
  },
  uiCopy: {
    label: "Presence",
    oneLiner: "Brings sounds forward",
    tooltip: "Boost for clarity",
    dos: ["Use on vocals"],
    donts: ["Don't boost too much"]
  }
};

const result = validateUserBand(userBand);
console.log(result);
`\`\`

---

## Error Handling

### Common Validation Errors

`\`\`javascript
// 1. Missing required field
const invalidBand = {
  bandId: 1,
  color: "purple"
  // Missing required fields...
};

const result = validateBand(invalidBand);
/*
{
  valid: false,
  errors: [
    { field: '/zone', message: 'must have required property zone' },
    { field: '/frequencyHz', message: 'must have required property frequencyHz' },
    ...
  ]
}
*/

// 2. Wrong type
const invalidBand2 = {
  ...validBand,
  bandId: "1" // Should be number, not string
};

// 3. Invalid enum value
const invalidBand3 = {
  ...validBand,
  color: "red" // Not in allowed values
};

// 4. Array constraint violation
const invalidBand4 = {
  ...validBand,
  frequencyHz: {
    typicalRange: [100], // Should be exactly 2 items
    anchorTargets: []
  }
};
`\`\`

### User-Friendly Error Messages

`\`\`javascript
function formatValidationError(error) {
  const messages = {
    'required': `Missing required field: ${error.params.missingProperty}`,
    'type': `Field ${error.instancePath} should be ${error.params.type}`,
    'enum': `Field ${error.instancePath} must be one of: ${error.params.allowedValues.join(', ')}`,
    'minimum': `Field ${error.instancePath} must be at least ${error.params.limit}`,
    'maximum': `Field ${error.instancePath} must be at most ${error.params.limit}`,
    'minItems': `Array ${error.instancePath} must have at least ${error.params.limit} items`,
    'maxItems': `Array ${error.instancePath} must have at most ${error.params.limit} items`
  };

  return messages[error.keyword] || error.message;
}

function validateWithFriendlyErrors(band) {
  const result = validateBand(band);

  if (!result.valid) {
    return {
      valid: false,
      errors: result.errors.map(formatValidationError)
    };
  }

  return { valid: true };
}
`\`\`

---

## Semantic Validation

Beyond structure, validate against band definitions:

`\`\`javascript
function validateBandSemantics(userBand, bandDefinitions) {
  const errors = [];
  const warnings = [];

  // 1. Get reference band
  const refBand = bandDefinitions.bands[userBand.bandId - 1];

  if (!refBand) {
    errors.push(`Invalid band ID: ${userBand.bandId}`);
    return { valid: false, errors, warnings };
  }

  // 2. Check filter type is supported
  if (userBand.controls && userBand.controls.typeOptions) {
    userBand.controls.typeOptions.forEach(type => {
      if (!refBand.controls.typeOptions.includes(type)) {
        errors.push(`Filter type "${type}" not supported for Band ${userBand.bandId}`);
      }
    });
  }

  // 3. Check frequency range makes sense
  if (userBand.frequencyHz && userBand.frequencyHz.typicalRange) {
    const [userMin, userMax] = userBand.frequencyHz.typicalRange;
    const [refMin, refMax] = refBand.frequencyHz.typicalRange;

    if (userMin < refMin * 0.5 || userMax > refMax * 2) {
      warnings.push(`Frequency range [${userMin}, ${userMax}] Hz significantly differs from typical [${refMin}, ${refMax}] Hz`);
    }
  }

  // 4. Check gain limits are reasonable
  if (userBand.controls && userBand.controls.gainDb) {
    const gain = userBand.controls.gainDb;

    if (gain.safeMaxBus > gain.safeMaxTrack) {
      errors.push('safeMaxBus should not exceed safeMaxTrack');
    }

    if (gain.safeMaxMaster > gain.safeMaxBus) {
      errors.push('safeMaxMaster should not exceed safeMaxBus');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}
`\`\`

---

## Archetype Validation

`\`\`javascript
function validateArchetype(archetype, bandId, bandDefinitions) {
  const errors = [];
  const band = bandDefinitions.bands[bandId - 1];

  // 1. Check filter type is supported
  if (!band.controls.typeOptions.includes(archetype.type)) {
    errors.push(`Filter type "${archetype.type}" not supported for Band ${bandId}`);
  }

  // 2. Check frequency is in typical range
  const [minFreq, maxFreq] = band.frequencyHz.typicalRange;
  if (archetype.freqHz < minFreq || archetype.freqHz > maxFreq) {
    errors.push(`Frequency ${archetype.freqHz} Hz outside typical range [${minFreq}, ${maxFreq}] Hz`);
  }

  // 3. Check gain is within safe limits (assume track level)
  const maxGain = band.controls.gainDb.safeMaxTrack;
  if (Math.abs(archetype.gainDb) > maxGain) {
    errors.push(`Gain ${archetype.gainDb} dB exceeds safe maximum ${maxGain} dB`);
  }

  // 4. Check bandwidth is 0-100
  if (archetype.bwPercent < 0 || archetype.bwPercent > 100) {
    errors.push(`Bandwidth ${archetype.bwPercent}% must be between 0-100`);
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
`\`\`

---

## Preset Validation

`\`\`javascript
function validatePreset(preset, bandDefinitions, archetypes) {
  const errors = [];

  // 1. Check structure
  if (!preset.name || typeof preset.name !== 'string') {
    errors.push('Preset must have a name');
  }

  if (!Array.isArray(preset.bands)) {
    errors.push('Preset must have a bands array');
    return { valid: false, errors };
  }

  // 2. Validate each band configuration
  preset.bands.forEach((bandConfig, index) => {
    // Check band ID is valid
    if (bandConfig.bandId < 1 || bandConfig.bandId > 7) {
      errors.push(`Band configuration ${index} has invalid bandId: ${bandConfig.bandId}`);
      return;
    }

    // If using archetype reference
    if (bandConfig.source && bandConfig.source.type === 'archetype') {
      const archetype = findArchetype(bandConfig.bandId, bandConfig.source.name, archetypes);
      if (!archetype) {
        errors.push(`Archetype "${bandConfig.source.name}" not found for band ${bandConfig.bandId}`);
      } else {
        // Validate archetype
        const validation = validateArchetype(archetype, bandConfig.bandId, bandDefinitions);
        if (!validation.valid) {
          errors.push(...validation.errors);
        }
      }
    }

    // If using custom settings
    if (bandConfig.source && bandConfig.source.type === 'custom') {
      const validation = validateArchetype(
        bandConfig.source.settings,
        bandConfig.bandId,
        bandDefinitions
      );
      if (!validation.valid) {
        errors.push(...validation.errors);
      }
    }
  });

  // 3. Check for duplicate band IDs
  const bandIds = preset.bands.map(b => b.bandId);
  const duplicates = bandIds.filter((id, index) => bandIds.indexOf(id) !== index);
  if (duplicates.length > 0) {
    errors.push(`Duplicate band IDs in preset: ${duplicates.join(', ')}`);
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

function findArchetype(bandId, name, archetypes) {
  const bandKey = `band${bandId}_${getBandZoneName(bandId)}`;
  const bandArchetypes = archetypes.bandArchetypes[bandKey];
  return bandArchetypes?.find(a => a.name === name);
}
`\`\`

---

## TypeScript Integration

`\`\`typescript
import { JSONSchemaType } from 'ajv';

// Generate TypeScript types from schema
interface Band {
  bandId: number;
  color: 'purple' | 'pink' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue';
  zone: string;
  frequencyHz: {
    typicalRange: [number, number];
    anchorTargets: number[];
  };
  controls: {
    typeOptions: Array<'high_pass' | 'low_pass' | 'bell' | 'high_shelf' | 'low_shelf' | 'notch'>;
    defaultType: 'high_pass' | 'low_pass' | 'bell' | 'high_shelf' | 'low_shelf' | 'notch';
    gainDb: {
      typical: [number, number];
      safeMaxTrack: number;
      safeMaxBus: number;
      safeMaxMaster: number;
    };
    bwPercent: {
      meaning: string;
      wide: [number, number];
      medium: [number, number];
      narrow: [number, number];
      default: number;
    };
  };
  roles: {
    primary: string[];
    fixes: string[];
    creative: string[];
    warnings: string[];
  };
  uiCopy: {
    label: string;
    oneLiner: string;
    tooltip: string;
    dos: string[];
    donts: string[];
  };
}

// Use with AJV
const schema: JSONSchemaType<Band> = {
  type: 'object',
  properties: {
    // ... schema definition
  },
  required: ['bandId', 'color', 'zone', 'frequencyHz', 'controls', 'roles', 'uiCopy']
};

const validate = ajv.compile(schema);

// Now TypeScript knows the shape
const band: Band = {
  bandId: 1,
  // ... TypeScript will enforce all required fields
};
`\`\`

---

## Best Practices

1. **Always validate on load** - Catch data corruption early
2. **Validate user input** - Before saving custom bands/presets
3. **Provide friendly errors** - Don't show raw JSON Schema errors to users
4. **Semantic validation** - Check meaning, not just structure
5. **Version compatibility** - Check version field, migrate if needed
6. **Performance** - Compile validators once, reuse many times
7. **Cache validated data** - Don't re-validate on every access

---

## Testing

`\`\`javascript
// Unit tests for validation
describe('Band Validation', () => {
  test('Valid band passes validation', () => {
    const result = validateBand(validBand);
    expect(result.valid).toBe(true);
  });

  test('Missing required field fails', () => {
    const result = validateBand({ bandId: 1 });
    expect(result.valid).toBe(false);
    expect(result.errors).toContainEqual(
      expect.objectContaining({ message: expect.stringContaining('required') })
    );
  });

  test('Invalid color enum fails', () => {
    const result = validateBand({...validBand, color: 'red' });
    expect(result.valid).toBe(false);
  });

  test('Frequency outside range warns', () => {
    const archetype = { type: 'bell', freqHz: 5000, bwPercent: 50, gainDb: 2 };
    const result = validateArchetype(archetype, 1, bandDefinitions); // Band 1 is 20-120 Hz
    expect(result.errors.length).toBeGreaterThan(0);
  });
});
`\`\`

---

## Next Steps

- See `typescript-interfaces.md` for type definitions
- See `data-model-overview.md` for architecture
- See `../integration-guides/json-workflow.md` for usage patterns

```

---

## FILE: 04-Reference\api-specifications\typescript-interfaces.md

```markdown
# TypeScript API Interfaces

Use these type definitions when building software compatible with the `02-Data` JSON files.

## 📦 Band Definitions

`\`\`typescript
export type BandColor =
  | "purple"
  | "pink"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue";

export type FilterType =
  | "high_pass"
  | "low_pass"
  | "bell"
  | "shelf"
  | "notch"
  | "low_shelf"
  | "high_shelf";

export interface BandMetadata {
  bandId: number; // 1-7
  color: BandColor;
  zone: string; // e.g., "Sub / Foundation Control"

  frequencyHz: {
    typicalRange: [number, number]; // [min, max]
    anchorTargets: number[];
  };

  controls: {
    typeOptions: FilterType[];
    defaultType: FilterType;
    gainDb: {
      typical: [number, number];
      safeMaxTrack: number;
      safeMaxBus: number;
      safeMaxMaster: number;
    };
    bwPercent: {
      meaning: string;
      wide: [number, number];
      medium: [number, number];
      narrow: [number, number];
      default: number;
    };
  };

  roles: {
    primary: string[];
    fixes: string[];
    creative: string[];
    warnings: string[];
  };

  uiCopy: {
    label: string;
    oneLiner: string;
    tooltip: string;
    dos: string[];
    donts: string[];
  };
}
`\`\`

## 🎛️ Preset Archetypes

`\`\`typescript
export interface Archetype {
  name: string;
  description: string;
  type: FilterType | null; // null if band is inactive
  freqHz: number;
  bwPercent: number;
  gainDb: number;
  useCase: string;
}

export interface Preset {
  name: string;
  description: string;
  bands: {
    bandId: number;
    archetype: string | null; // Matches the 'name' of an Archetype, or null
  }[];
}
`\`\`

## 🩺 Diagnostic Rules

`\`\`typescript
export type PriorityLevel = 1 | 2 | 3;

export interface TooltipRecommendation {
  bandId: number;
  archetype: string; // Key reference to Archetype name
  notes: string;
  gain: number | null;
  context: string;
}

export interface DiagnosticRule {
  symptom: string; // Snake_case ID
  displayName: string;
  description: string;
  priority: PriorityLevel;
  recommendations: TooltipRecommendation[];
}

export interface DiagnosticEngine {
  description: string;
  usage: string;
  priorityLevels: Record<string, string>;
  rules: DiagnosticRule[];
  contextualNotes: {
    trackLevel: string;
    busLevel: string;
    masterLevel: string;
    workflow: string[];
  };
}
`\`\`

```

---

## FILE: 04-Reference\frequency-charts\frequency-spectrum-map.md

```markdown
# Frequency Spectrum Map

Visual and textual representation of the complete 20 Hz - 20 kHz frequency spectrum.

## Complete Spectrum Overview

`\`\`
20 Hz                                                                    20,000 Hz
├────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┤
│Sub │ Bass  │   Low-Mids  │  Midrange  │ Upper-Mids │ Treble │    Air   │
│    │       │             │            │            │        │          │
20   60    120│   250      500│    1k     2k│    4k     8k     12k      20k
             140│           600│         1.8k│   3.5k         10k       16k
                300           │            3.2k      6.5k
                              │
                           PRESENCE
`\`\`

## Band Assignments

`\`\`
Band 1 (Purple) : [━━━━━━━━━━━━━━━━━━━━━━━━]
                   20                    120 Hz

Band 2 (Pink)   :          [━━━━━━━━━━━━━━━━━━━━━━━]
                          140                   320 Hz

Band 3 (Orange) :                    [━━━━━━━━━━━━━━━━━━]
                                    300              550 Hz

Band 4 (Yellow) :                              [━━━━━━━━━━━━━━━━]
                                              600            1200 Hz

Band 5 (Green)  :                                        [━━━━━━━━━━━━━━━━━]
                                                       1800           3200 Hz

Band 6 (Teal)   :                                                  [━━━━━━━━━━━━━━━━━]
                                                                  3500          6500 Hz

Band 7 (Blue)   :                                                            [━━━━━━━━━━━━━━━━━━━]
                                                                            8000             16000 Hz
`\`\`

---

## Detailed Frequency Breakdown

### Sub-Bass Region (20-60 Hz)
**Character:** Feel rather than hear, rumble, power

`\`\`
20 Hz  - Below human hearing threshold for most
25 Hz  - Deep sub-bass in EDM, film scoring
30 Hz  - Lowest usable frequency in most systems
35 Hz  - Kick drum sub-bass
40 Hz  - Common high-pass filter point
45 Hz  - Low B on 5-string bass guitar
50 Hz  - Kick drum fundamental punch
60 Hz  - Common bass boost point in EDM
`\`\`

**Typical action:** High-pass filter unless working with kick/bass/808

---

### Bass Region (60-250 Hz)
**Character:** Warmth, fullness, foundation

`\`\`
60 Hz  - Low shelf boost point for bass enhancement
70 Hz  - Conservative high-pass point
80 Hz  - Standard high-pass for vocals, guitars
90 Hz  - Kick drum punch
100 Hz - Standard tight high-pass point
120 Hz - Upper edge of sub/foundation zone
140 Hz - Start of warmth zone (Band 2)
150 Hz - Bass guitar body
180 Hz - Male vocal warmth
200 Hz - Start of "mud zone"
220 Hz - Piano low notes
250 Hz - Common mud cut point
`\`\`

**Typical action:** High-pass @ 70-100 Hz, cut @ 200-250 Hz for mud

---

### Low-Midrange (250-600 Hz)
**Character:** Body, warmth, thickness, or mud

`\`\`
250 Hz - Primary mud frequency
280 Hz - Snare drum body
300 Hz - Start of boxiness zone (Band 3)
320 Hz - Upper warmth zone limit
350 Hz - Vocal "chestiness"
380 Hz - Room resonance (common problem)
400 Hz - Cardboard box resonance
420 Hz - Common notch point for boxiness
450 Hz - Guitar body
500 Hz - Vocal body
550 Hz - Upper boxiness limit
600 Hz - Start of honk zone (Band 4)
`\`\`

**Typical action:** Cut for mud and boxiness removal

---

### Midrange (600-2000 Hz)
**Character:** Core tone, presence, intelligibility

`\`\`
600 Hz  - Nasal region start
700 Hz  - Nasal cut point
800 Hz  - Common honk frequency
900 Hz  - Guitar midrange
1000 Hz - "Telephone" frequency, honk central
1100 Hz - Vocal intelligibility
1200 Hz - Upper honk limit
1500 Hz - Vocal consonants
1800 Hz - Start of presence zone (Band 5)
2000 Hz - High shelf starting point for clarity
`\`\`

**Typical action:** Cut honk @ 700-1k Hz, boost presence @ 2-3 kHz

---

### Upper-Midrange / Presence (2000-8000 Hz)
**Character:** Clarity, definition, detail, or harshness

`\`\`
2000 Hz - Presence boost start
2500 Hz - Vocal clarity sweet spot
3000 Hz - Vocal presence
3200 Hz - Upper presence limit (Band 5)
3500 Hz - Detail zone start (Band 6)
4000 Hz - Snare crack
4500 Hz - Harshness region
5000 Hz - Sibilance central, de-essing target
5500 Hz - Cymbal body
6000 Hz - Harshness cut point
6500 Hz - Upper detail limit (Band 6)
7000 Hz - Guitar string zing
8000 Hz - Start of air zone (Band 7)
`\`\`

**Typical action:** Boost @ 2-3 kHz for presence, cut @ 4-6 kHz for harshness

---

### Treble / Air Region (8000-20000 Hz)
**Character:** Brightness, air, sparkle, shimmer

`\`\`
8000 Hz  - Air zone start, brightness
9000 Hz  - Cymbal sizzle
10000 Hz - Common air shelf boost point
11000 Hz - Vocal breath
12000 Hz - Standard air boost frequency
13000 Hz - Sparkle
14000 Hz - High air shelf
15000 Hz - Upper harmonics
16000 Hz - Upper air limit (Band 7)
17000 Hz - Ultra-high harmonics
18000 Hz - Beyond most adult hearing
20000 Hz - Theoretical upper limit of hearing
`\`\`

**Typical action:** High shelf boost @ 10-12 kHz for modern air

---

## Critical Frequency Landmarks

### The "Always Check" Frequencies

1. **80 Hz** - High-pass filter standard
2. **200-250 Hz** - Mud removal
3. **400 Hz** - Boxiness removal
4. **800 Hz** - Honk/nasal removal
5. **2.5 kHz** - Presence boost
6. **5 kHz** - Harshness/sibilance check
7. **12 kHz** - Air shelf boost

---

## Musical Note Frequencies

### Common Note References

`\`\`
C1:   32.7 Hz  (Low bass guitar)
E1:   41.2 Hz  (Low E on bass guitar)
A1:   55.0 Hz  (Bass/kick fundamental)
C2:   65.4 Hz
E2:   82.4 Hz  (Low E on standard guitar)
A2:  110.0 Hz  (A110, orchestral tuning fork)
C3:  130.8 Hz  (Vocal low notes)
A3:  220.0 Hz
C4:  261.6 Hz  (Middle C)
A4:  440.0 Hz  (Concert pitch, tuning standard)
C5:  523.3 Hz
A5:  880.0 Hz
C6: 1046.5 Hz
C7: 2093.0 Hz
C8: 4186.0 Hz  (Top of piano)
`\`\`

### How to Use
- If cutting 200 Hz feels like you're removing "G3", you are
- Helps understand harmonic relationships
- Useful for musical EQ decisions

---

## Harmonic Series

### Fundamental Relationships

`\`\`
Fundamental: 100 Hz
2nd Harmonic: 200 Hz (octave)
3rd Harmonic: 300 Hz (octave + fifth)
4th Harmonic: 400 Hz (2 octaves)
5th Harmonic: 500 Hz
6th Harmonic: 600 Hz
...
`\`\`

**Why it matters:**
- Cutting 200 Hz affects the 2nd harmonic of 100 Hz sounds
- Boosting 3 kHz on vocals (fundamental ~200 Hz) enhances upper harmonics
- Understanding harmonics helps predict EQ side effects

---

## Octave Relationships

### Full Spectrum in Octaves

`\`\`
20 Hz    - Octave 0
40 Hz    - Octave 1
80 Hz    - Octave 2
160 Hz   - Octave 3
320 Hz   - Octave 4
640 Hz   - Octave 5
1280 Hz  - Octave 6
2560 Hz  - Octave 7
5120 Hz  - Octave 8
10240 Hz - Octave 9
20480 Hz - Octave 10
`\`\`

**Why it matters:**
- Doubling frequency = up one octave
- Halving frequency = down one octave
- EQ bandwidths often expressed in octaves

---

## Bandwidth Visual Guide

### How Bandwidth Affects Range

`\`\`
Center: 1000 Hz

Wide (20% BW, ~2 octaves):
           [━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━]
         250 Hz                              4000 Hz

Medium (50% BW, ~1 octave):
                    [━━━━━━━━━━━━━━━]
                 500 Hz           2000 Hz

Narrow (75% BW, ~0.5 octave):
                        [━━━━━]
                     800 Hz 1250 Hz
`\`\`

**Remember:** In FL Studio, lower % = wider range (inverted scale)

---

## Problem Frequency Quick Reference

### Common Issues by Frequency

`\`\`
Below 40 Hz    - Rumble, remove with HPF
60-80 Hz       - Kick/bass conflict zone
80-120 Hz      - Boom/mud if excessive
140-180 Hz     - Warmth or thickness
200-300 Hz     - #1 mud zone (cut often)
300-500 Hz     - Boxiness, cardboard sound
600-900 Hz     - Nasal, honky qualities
1-2 kHz        - Can sound "horn-like" if boosted
2-4 kHz        - Presence (good) or harshness (bad)
4-6 kHz        - Harshness/sibilance zone
6-8 kHz        - Sharpness/fatigue
8-12 kHz       - Air and breath
12-16 kHz      - Ultra-high sparkle
Above 16 kHz   - Usually filtered out
`\`\`

---

## Perceptual Regions

### How We Hear Different Ranges

**Below 100 Hz:** Physical sensation, "feel" bass
**100-500 Hz:** Warmth and body, but prone to muddiness
**500-2000 Hz:** Core tone and character
**2000-5000 Hz:** Most sensitive hearing range, intelligibility
**5000-10000 Hz:** Detail and articulation
**10000-20000 Hz:** Air and space, or noise

**Fletcher-Munson effect:** We're most sensitive to 2-5 kHz, less sensitive to very low and very high frequencies, especially at low volumes.

---

## Genre-Specific Emphasis

### Where Different Genres Focus

**Hip-Hop/EDM:**
- Heavy sub-bass (30-60 Hz)
- Moderate low-mids (cut 200-300 Hz)
- Aggressive air (boost 10-14 kHz)

**Rock/Metal:**
- Less sub-bass (HPF @ 60-80 Hz)
- Heavy midrange (400-2000 Hz)
- Moderate high end

**Pop:**
- Clean low end (HPF @ 80-100 Hz)
- Presence boost (2-4 kHz)
- Lots of air (10-14 kHz)

**Jazz/Classical:**
- Natural low end (minimal filtering)
- Balanced midrange
- Subtle high end

---

## Visual Frequency Scale

### Linear vs Logarithmic

**Linear (equal spacing):**
`\`\`
0 Hz    5k Hz   10k Hz  15k Hz  20k Hz
├───────┼───────┼───────┼───────┤
`\`\`

**Logarithmic (how we hear):**
`\`\`
20 Hz   100 Hz  1k Hz   10k Hz  20k Hz
├──┼──────┼──────┼───────┼──┤
`\`\`

Most EQ displays use logarithmic because that's closer to how we perceive frequency.

---

## Next Steps

- See `instrument-frequency-ranges.md` for where instruments sit
- See `band-overlap-analysis.md` for how the 7 bands interact
- See `../terminology-glossary/frequency-zones.md` for detailed band descriptions

```

---

## FILE: 04-Reference\frequency-charts\instrument-frequency-ranges.md

```markdown
# Instrument Frequency Ranges

Comprehensive guide to where common instruments sit in the frequency spectrum and how to EQ them.

## Vocals

### Lead Vocals (Male)
`\`\`
Fundamental:     100-500 Hz (Band 2-4)
Body/Warmth:     140-320 Hz (Band 2)
Chest:           300-600 Hz (Band 3-4)
Presence:        2-5 kHz (Band 5-6)
Clarity:         4-6 kHz (Band 6)
Air/Breath:      10-15 kHz (Band 7)
`\`\`

**Common EQ Moves:**
- HPF @ 80-100 Hz (Band 1)
- Cut @ 200-300 Hz, -1 to -2 dB (remove mud) (Band 2)
- Cut @ 400-500 Hz, -1 to -2 dB (remove boxiness) (Band 3)
- Boost @ 2.5-3 kHz, +2 to +3 dB (presence) (Band 5)
- High shelf @ 10-12 kHz, +2 to +3 dB (air) (Band 7)

### Lead Vocals (Female)
`\`\`
Fundamental:     200-800 Hz (Band 2-4)
Body:            200-400 Hz (Band 2-3)
Presence:        3-6 kHz (Band 5-6)
Clarity:         5-8 kHz (Band 6)
Air:             10-15 kHz (Band 7)
`\`\`

**Common EQ Moves:**
- HPF @ 100-120 Hz (Band 1)
- Cut @ 250-350 Hz, -1 to -2 dB (reduce muddiness) (Band 2-3)
- Boost @ 3-4 kHz, +2 to +3 dB (presence) (Band 5)
- Cut @ 5-6 kHz, -1 to -2 dB if harsh (de-essing) (Band 6)
- High shelf @ 12 kHz, +2 to +3 dB (air) (Band 7)

---

## Drums

### Kick Drum
`\`\`
Sub-bass:        30-60 Hz (Band 1, lower edge)
Punch:           60-100 Hz (Band 1)
Body:            100-200 Hz (Band 2)
Attack/Click:    2-5 kHz (Band 5)
`\`\`

**Common EQ Moves:**
- HPF @ 30-40 Hz (remove sub-rumble) (Band 1)
- Boost @ 60-80 Hz, +2 to +4 dB (sub punch) (Band 1)
- Cut @ 200-300 Hz, -2 to -3 dB (remove muddiness) (Band 2)
- Boost @ 3-5 kHz, +1 to +2 dB (beater click) (Band 5-6)
- LPF @ 8-10 kHz (remove high-end noise) (Band 7)

### Snare Drum
`\`\`
Body:            150-250 Hz (Band 2)
Fundamental:     200-400 Hz (Band 2-3)
Attack/Crack:    3-5 kHz (Band 5-6)
Snap:            5-8 kHz (Band 6)
Air/Rattle:      8-12 kHz (Band 7)
`\`\`

**Common EQ Moves:**
- HPF @ 60-80 Hz (Band 1)
- Cut @ 300-400 Hz, -1 to -3 dB (boxiness) (Band 3)
- Boost @ 3-4 kHz, +2 to +4 dB (crack/attack) (Band 5)
- Boost @ 8-10 kHz, +1 to +2 dB (air) (Band 7)

### Hi-Hats & Cymbals
`\`\`
Body:            200-500 Hz (Band 2-3)
Presence:        3-6 kHz (Band 5-6)
Shimmer:         6-10 kHz (Band 6-7)
Air:             10-16 kHz (Band 7)
`\`\`

**Common EQ Moves:**
- HPF @ 200-400 Hz (remove low-mid rumble) (Band 3)
- Cut @ 1-2 kHz, -1 to -2 dB (reduce harshness) (Band 4-5)
- Boost @ 8-12 kHz, +1 to +3 dB (air and shimmer) (Band 7)

### Toms
`\`\`
Fundamental:     80-150 Hz (Band 1-2)
Attack:          3-5 kHz (Band 5-6)
`\`\`

**Common EQ Moves:**
- HPF @ 50-70 Hz (Band 1)
- Boost @ 100-150 Hz, +2 to +4 dB (punch) (Band 1-2)
- Cut @ 300-400 Hz, -2 to -3 dB (cardboard sound) (Band 3)
- Boost @ 4-5 kHz, +1 to +2 dB (attack) (Band 5-6)

---

## Bass Instruments

### Electric Bass
`\`\`
Sub:             40-80 Hz (Band 1)
Fundamental:     80-200 Hz (Band 1-2)
Presence:        200-600 Hz (Band 2-3)
Attack/Pluck:    1-3 kHz (Band 4-5)
String Noise:    3-5 kHz (Band 5-6)
`\`\`

**Common EQ Moves:**
- HPF @ 30-40 Hz (sub-rumble) (Band 1)
- Boost @ 60-80 Hz, +1 to +3 dB (sub presence) (Band 1)
- Cut @ 200-300 Hz, -1 to -2 dB (mud) (Band 2)
- Boost @ 2-3 kHz, +1 to +2 dB (attack) (Band 5)

### 808 / Sub-Bass
`\`\`
Sub fundamental: 30-60 Hz (Band 1)
Harmonics:       100-200 Hz (Band 2)
`\`\`

**Common EQ Moves:**
- Boost @ 40-60 Hz, +3 to +6 dB (sub power) (Band 1)
- Cut @ 200-300 Hz, -2 to -3 dB (clarity for other elements) (Band 2)
- LPF @ 200-400 Hz (remove upper harmonics) (Band 3)

---

## Guitars

### Acoustic Guitar
`\`\`
Body:            80-200 Hz (Band 1-2)
Warmth:          200-400 Hz (Band 2-3)
Presence:        2-5 kHz (Band 5-6)
Air:             8-12 kHz (Band 7)
`\`\`

**Common EQ Moves:**
- HPF @ 80-100 Hz (Band 1)
- Cut @ 200-300 Hz, -1 to -2 dB (mud) (Band 2)
- Boost @ 3-5 kHz, +1 to +2 dB (presence) (Band 5-6)
- High shelf @ 10 kHz, +1 to +2 dB (air) (Band 7)

### Electric Guitar (Clean)
`\`\`
Body:            80-200 Hz (Band 1-2)
Fundamental:     200-800 Hz (Band 2-4)
Presence:        2-4 kHz (Band 5)
Bite:            4-6 kHz (Band 6)
`\`\`

**Common EQ Moves:**
- HPF @ 80-100 Hz (Band 1)
- Cut @ 300-500 Hz, -1 to -3 dB (boxiness) (Band 3)
- Boost @ 2-3 kHz, +2 to +3 dB (cut through mix) (Band 5)

### Electric Guitar (Distorted)
`\`\`
Body:            100-300 Hz (Band 2)
Chunk:           400-800 Hz (Band 3-4)
Aggression:      2-4 kHz (Band 5)
Presence:        4-6 kHz (Band 6)
`\`\`

**Common EQ Moves:**
- HPF @ 100-120 Hz (Band 1-2)
- Boost @ 400-600 Hz, +1 to +2 dB (chunk) (Band 3-4)
- Boost @ 3-4 kHz, +2 to +4 dB (aggression) (Band 5)
- Cut @ 5-6 kHz, -1 to -2 dB (reduce fizz) (Band 6)

---

## Keys & Synths

### Piano
`\`\`
Fundamentals:    27-4000 Hz (full range)
Low notes:       30-100 Hz (Band 1)
Body:            100-500 Hz (Band 2-3)
Presence:        2-5 kHz (Band 5-6)
Hammer attack:   5-8 kHz (Band 6)
Air:             8-15 kHz (Band 7)
`\`\`

**Common EQ Moves:**
- HPF @ 30-40 Hz (sub-rumble) (Band 1)
- Cut @ 200-300 Hz, -1 to -2 dB (mud in dense mixes) (Band 2)
- Boost @ 3-5 kHz, +1 to +2 dB (presence) (Band 5-6)
- High shelf @ 10 kHz, +1 to +2 dB (air) (Band 7)

### Synth Pad
`\`\`
Sub layer:       30-80 Hz (Band 1)
Body:            100-400 Hz (Band 2-3)
Presence:        2-4 kHz (Band 5)
Air:             8-16 kHz (Band 7)
`\`\`

**Common EQ Moves:**
- HPF @ 80-120 Hz (unless bass pad) (Band 1)
- Cut @ 200-400 Hz, -2 to -4 dB (make room for vocals) (Band 2-3)
- Boost @ 10-14 kHz, +2 to +4 dB (shimmer) (Band 7)

### Synth Lead
`\`\`
Fundamental:     200-2000 Hz (Band 2-5)
Presence:        2-5 kHz (Band 5-6)
Brightness:      6-12 kHz (Band 6-7)
`\`\`

**Common EQ Moves:**
- HPF @ 100-150 Hz (Band 1-2)
- Cut @ 300-500 Hz, -1 to -2 dB (boxiness) (Band 3)
- Boost @ 2-4 kHz, +2 to +4 dB (cut through) (Band 5)
- Boost @ 8-10 kHz, +1 to +2 dB (brightness) (Band 7)

---

## Strings

### String Section
`\`\`
Fundamentals:    200-1000 Hz (Band 2-4)
Body:            300-800 Hz (Band 3-4)
Presence:        2-4 kHz (Band 5)
Air/Rosin:       8-15 kHz (Band 7)
`\`\`

**Common EQ Moves:**
- HPF @ 100-150 Hz (Band 1-2)
- Cut @ 300-400 Hz, -1 to -2 dB (boxiness) (Band 3)
- Boost @ 3-5 kHz, +1 to +2 dB (presence) (Band 5-6)
- High shelf @ 10 kHz, +1 to +2 dB (air) (Band 7)

---

## Frequency Conflict Resolution

### Common Instrument Conflicts

**Kick vs Bass (60-100 Hz):**
- Cut bass @ 80 Hz, boost kick @ 80 Hz
- OR cut kick @ 60 Hz, boost bass @ 60 Hz
- Create "pockets" so they don't mask each other

**Vocals vs Guitar (2-4 kHz):**
- Cut guitar @ 2.5 kHz, boost vocals @ 2.5 kHz
- Or pan guitars away from center

**Snare vs Vocals (3-5 kHz):**
- Boost snare @ 4 kHz, boost vocals @ 2.5 kHz
- Use different frequency centers for each

---

## Mix Bus EQ by Instrument Group

### Drum Bus
- HPF @ 30-40 Hz (Band 1)
- Slight boost @ 80-100 Hz, +0.5 to +1 dB (punch) (Band 1)
- Cut @ 300-400 Hz, -0.5 to -1 dB (boxiness) (Band 3)
- Boost @ 8-10 kHz, +0.5 to +1 dB (air) (Band 7)

### Vocal Bus
- HPF @ 100 Hz (Band 1)
- Cut @ 200-250 Hz, -0.5 to -1 dB (warmth control) (Band 2)
- Boost @ 3-4 kHz, +0.5 to +1 dB (presence glue) (Band 5)
- High shelf @ 12 kHz, +0.5 to +1 dB (air) (Band 7)

### Guitar Bus
- HPF @ 80-100 Hz (Band 1)
- Cut @ 400-600 Hz, -0.5 to -1 dB (honk) (Band 3-4)
- Boost @ 3 kHz, +0.5 to +1 dB (presence) (Band 5)

---

## Genre-Specific Instrument EQ

### Hip-Hop

**Vocals:**
- Less aggressive HPF (80 Hz)
- More body retained (minimal 200 Hz cut)
- Moderate presence boost (2-3 kHz, +2 dB)
- Aggressive air (12 kHz, +3 to +4 dB)

**808/Sub-Bass:**
- Boost @ 40-60 Hz, +4 to +6 dB
- Cut @ 200-300 Hz, -2 to -3 dB
- Often LPF @ 200 Hz

**Kick:**
- Boost @ 60 Hz, +2 to +3 dB (if not conflicting with 808)
- Boost @ 3-5 kHz, +2 to +3 dB (click)

### Rock/Pop

**Vocals:**
- Standard HPF (80-100 Hz)
- Cut mud (200-300 Hz, -1 to -2 dB)
- Strong presence (2.5-3 kHz, +3 to +4 dB)
- Air (10-12 kHz, +2 to +3 dB)

**Electric Guitar:**
- HPF @ 100 Hz
- Boost midrange (800-1200 Hz, +2 to +3 dB)
- Presence (3-4 kHz, +2 to +3 dB)

### EDM

**Synth Leads:**
- Aggressive HPF (150-200 Hz)
- Cut low-mids (300-500 Hz, -2 to -4 dB)
- Boost presence (3-5 kHz, +3 to +5 dB)
- Extreme air (12-14 kHz, +4 to +6 dB)

**Kick:**
- Massive sub (50-60 Hz, +4 to +6 dB)
- Cut mud (200-300 Hz, -2 to -3 dB)
- Click (4-5 kHz, +2 to +3 dB)

---

## Quick Reference Chart

| Instrument      | HPF   | Cut Zone  | Boost Zone | Air    |
|-----------------|-------|-----------|------------|--------|
| Vocal (Male)    | 80 Hz | 200-300   | 2-3 kHz    | 10-12k |
| Vocal (Female)  | 100 Hz| 250-350   | 3-4 kHz    | 12k    |
| Kick            | 30 Hz | 200-300   | 60-80 Hz   | -      |
| Snare           | 80 Hz | 300-400   | 3-4 kHz    | 8-10k  |
| Bass            | 30 Hz | 200-300   | 60-80 Hz   | -      |
| Acoustic Guitar | 80 Hz | 200-300   | 3-5 kHz    | 10k    |
| Electric Guitar | 100 Hz| 300-500   | 2-3 kHz    | -      |
| Piano           | 30 Hz | 200-300   | 3-5 kHz    | 10k    |
| Synth Lead      | 150 Hz| 300-500   | 2-4 kHz    | 8-10k  |

---

## Next Steps

- See `frequency-spectrum-map.md` for complete frequency breakdown
- See `band-overlap-analysis.md` for how bands interact
- See `../terminology-glossary/frequency-zones.md` for band-specific details

```

---

## FILE: 04-Reference\frequency-charts\problem-frequency-guide.md

```markdown
# Problem Frequency Guide

A quick-reference cheat sheet for identifying and fixing common mix issues. Keep this open during mixing sessions.

## 🔴 The "Red Zone" (Cut Here)

These are the most common areas where energy accumulates and ruins mixes.

| Frequency   | The Sound     | The Fix                                   | Band                   |
| ----------- | ------------- | ----------------------------------------- | ---------------------- |
| **< 40 Hz** | **Rumble**    | Inaudible noise, eating headroom.         | **High Pass** (Band 1) |
| **250 Hz**  | **Mud**       | Muffled, clogged, "blanket over speaker." | **Cut** (Band 2)       |
| **400 Hz**  | **Boxiness**  | Cardboard, cheap room, hollow.            | **Cut** (Band 3)       |
| **850 Hz**  | **Honk**      | Nasal, pinched, cheap.                    | **Cut** (Band 4)       |
| **4.5 kHz** | **Harshness** | Painful, fatiguing, sharp.                | **Cut** (Band 6)       |
| **7 kHz**   | **Sibilance** | "Sss" and "Ttt" sounds, piercing.         | **Cut** (Band 6)       |

---

## 🟢 The "Green Zone" (Boost Here)

These are the "sweet spots" where instruments often sound best.

| Frequency   | The Sound    | Application                      | Band                    |
| ----------- | ------------ | -------------------------------- | ----------------------- |
| **60 Hz**   | **Thump**    | Kick drum chest-hit.             | **Bell Boost** (Band 1) |
| **100 Hz**  | **Weight**   | Bass guitar body.                | **Bell Boost** (Band 1) |
| **2.5 kHz** | **Presence** | Make vocals/leads speak clearly. | **Bell Boost** (Band 5) |
| **5 kHz**   | **Click**    | Beater attack on Kick drum.      | **Bell Boost** (Band 6) |
| **12 kHz**  | **Air**      | Expensive sheen and polish.      | **High Shelf** (Band 7) |

---

## 🎹 Instrument Specifics

### Vocals

- **Mud:** ~250 Hz
- **Nasal:** ~800-1k Hz
- **Sibilance:** ~6-8 kHz
- **Air:** 12 kHz+

### Snare Drum

- **Body:** ~200 Hz
- **Box:** ~400-500 Hz (Cut this!)
- **Crack:** ~3-5 kHz

### Kick Drum

- **Sub:** ~45-60 Hz
- **Mud:** ~250-300 Hz (Cut heavily!)
- **Click:** ~4 kHz

### Bass Guitar

- **Bottom:** ~80-100 Hz
- **Finger Noise:** ~800 Hz
- **Growl:** ~1-2 kHz

```

---

## FILE: 04-Reference\integration-guides\assistant-mode-implementation.md

```markdown
# Smart Assistant Mode Implementation

Build intelligent EQ assistants that guide users through corrective and creative EQ decisions using the rules engine and band archetypes.

## Core Assistant Modes

### 1. Symptom-Based Assistant
**User describes problem → System recommends solutions**

### 2. Goal-Based Assistant
**User states desired outcome → System suggests approach**

### 3. Learning Assistant
**Explains why each decision helps → Educational guidance**

### 4. Context-Aware Assistant
**Adapts recommendations based on track type, mix stage, genre**

---

## Symptom-Based Assistant

### Basic Implementation

`\`\`javascript
class SymptomAssistant {
  constructor(rules, presets, bandDefinitions) {
    this.rules = rules;
    this.presets = presets;
    this.bandDefinitions = bandDefinitions;
  }

  diagnose(symptom) {
    const rule = this.rules.find(r => r.symptom === symptom);

    if (!rule) {
      return {
        found: false,
        message: "I don't recognize that symptom. Can you describe it differently?"
      };
    }

    const recommendations = rule.recommendations.map(rec => {
      const band = this.bandDefinitions.bands[rec.bandId - 1];
      const archetype = this.findArchetype(rec.bandId, rec.archetype);

      return {
        bandId: rec.bandId,
        bandName: band.uiCopy.label,
        bandColor: band.color,
        action: rec.archetype,
        settings: archetype,
        reasoning: rec.notes,
        warning: band.roles.warnings[0],
        priority: rule.priority
      };
    });

    return {
      found: true,
      symptom: symptom,
      priority: rule.priority,
      urgency: this.getPriorityLabel(rule.priority),
      recommendations,
      nextSteps: this.getNextSteps(rule)
    };
  }

  getPriorityLabel(priority) {
    const labels = {
      1: 'Critical - Fix First',
      2: 'Important - Address Soon',
      3: 'Polish - Final Touch'
    };
    return labels[priority] || 'Unknown';
  }

  getNextSteps(rule) {
    if (rule.priority === 1) {
      return "Apply this fix before making other adjustments. Critical issues mask other problems.";
    } else if (rule.priority === 2) {
      return "Apply after fixing any critical issues. This will significantly improve your mix.";
    } else {
      return "Apply as a final polish step after addressing more critical issues.";
    }
  }

  findArchetype(bandId, name) {
    const bandKey = this.getBandKey(bandId);
    const archetypes = this.presets.bandArchetypes[bandKey];
    return archetypes.find(a => a.name === name);
  }

  getBandKey(bandId) {
    const band = this.bandDefinitions.bands[bandId - 1];
    const zoneName = band.zone.split('/')[0].trim().toLowerCase().replace(/ /g, '_');
    return `band${bandId}_${zoneName}`;
  }
}
`\`\`

### UI Implementation

`\`\`javascript
// Symptom selector UI
function renderSymptomSelector() {
  const symptoms = [
    { id: 'rumble_or_headroom_loss', label: 'Rumbling / Eating Headroom', icon: '🔊' },
    { id: 'muddy_or_cloudy', label: 'Muddy / Cloudy', icon: '🌫️' },
    { id: 'boxy_or_cardboard', label: 'Boxy / Cardboard Sound', icon: '📦' },
    { id: 'nasal_or_honky', label: 'Nasal / Honky', icon: '👃' },
    { id: 'buried_or_unclear', label: 'Buried / Unclear', icon: '🔇' },
    { id: 'harsh_or_fatiguing', label: 'Harsh / Fatiguing', icon: '⚠️' },
    { id: 'dull_or_closed', label: 'Dull / Closed', icon: '🌑' }
  ];

  return symptoms.map(symptom => ({
    id: symptom.id,
    label: symptom.label,
    icon: symptom.icon,
    onClick: () => handleSymptom(symptom.id)
  }));
}

function handleSymptom(symptomId) {
  const assistant = new SymptomAssistant(rules, presets, bandDefinitions);
  const result = assistant.diagnose(symptomId);

  if (!result.found) {
    showMessage(result.message);
    return;
  }

  // Display recommendations
  showDiagnosis({
    symptom: symptomId,
    urgency: result.urgency,
    recommendations: result.recommendations,
    nextSteps: result.nextSteps
  });
}

function showDiagnosis(diagnosis) {
  const container = document.getElementById('assistant-panel');

  // Clear previous
  container.innerHTML = '';

  // Header
  const header = document.createElement('div');
  header.className = 'diagnosis-header';
  header.innerHTML = `
    <h3>${diagnosis.symptom.replace(/_/g, ' ')}</h3>
    <span class="urgency priority-${diagnosis.recommendations[0].priority}">
      ${diagnosis.urgency}
    </span>
  `;
  container.appendChild(header);

  // Recommendations
  diagnosis.recommendations.forEach(rec => {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    card.style.borderLeftColor = getBandColor(rec.bandColor);

    card.innerHTML = `
      <div class="band-info">
        <h4>Band ${rec.bandId}: ${rec.bandName}</h4>
        <span class="band-color" style="background: ${getBandColor(rec.bandColor)}"></span>
      </div>

      <div class="action">
        <strong>Action:</strong> ${rec.action}
      </div>

      <div class="settings">
        <span>Type: ${rec.settings.type}</span>
        <span>Frequency: ${rec.settings.freqHz} Hz</span>
        <span>Gain: ${rec.settings.gainDb > 0 ? '+' : ''}${rec.settings.gainDb} dB</span>
        <span>Bandwidth: ${rec.settings.bwPercent}%</span>
      </div>

      <div class="reasoning">
        <strong>Why:</strong> ${rec.reasoning}
      </div>

      ${rec.warning ? `<div class="warning">⚠️ ${rec.warning}</div>` : ''}

      <button class="apply-btn" onclick="applyRecommendation(${JSON.stringify(rec)})">
        Apply This Fix
      </button>
    `;

    container.appendChild(card);
  });

  // Next steps
  const nextSteps = document.createElement('div');
  nextSteps.className = 'next-steps';
  nextSteps.innerHTML = `<p><strong>Next Steps:</strong> ${diagnosis.nextSteps}</p>`;
  container.appendChild(nextSteps);
}
`\`\`

---

## Multi-Symptom Assistant

**Handle multiple issues simultaneously**

`\`\`javascript
class MultiSymptomAssistant extends SymptomAssistant {
  diagnoseMultiple(symptoms) {
    const allRecommendations = symptoms
      .map(symptom => this.diagnose(symptom))
      .filter(result => result.found);

    // Sort by priority
    allRecommendations.sort((a, b) => a.priority - b.priority);

    // Detect band conflicts
    const bandUsage = new Map();
    const plan = [];

    allRecommendations.forEach(diagnosis => {
      diagnosis.recommendations.forEach(rec => {
        if (!bandUsage.has(rec.bandId)) {
          plan.push({
            ...rec,
            symptom: diagnosis.symptom,
            priority: diagnosis.priority
          });
          bandUsage.set(rec.bandId, rec);
        } else {
          // Band conflict - note alternative
          const existing = bandUsage.get(rec.bandId);
          console.warn(`Band ${rec.bandId} conflict:`, {
            existing: existing.action,
            alternative: rec.action
          });
        }
      });
    });

    return {
      symptoms,
      plan,
      conflicts: this.findConflicts(allRecommendations),
      priorityOrder: this.getPriorityOrder(plan)
    };
  }

  findConflicts(diagnoses) {
    const bandMap = new Map();
    const conflicts = [];

    diagnoses.forEach(diagnosis => {
      diagnosis.recommendations.forEach(rec => {
        if (bandMap.has(rec.bandId)) {
          conflicts.push({
            bandId: rec.bandId,
            conflict: [
              { symptom: bandMap.get(rec.bandId).symptom, action: bandMap.get(rec.bandId).action },
              { symptom: diagnosis.symptom, action: rec.action }
            ]
          });
        } else {
          bandMap.set(rec.bandId, {
            symptom: diagnosis.symptom,
            action: rec.action
          });
        }
      });
    });

    return conflicts;
  }

  getPriorityOrder(plan) {
    // Group by priority
    const grouped = {
      critical: plan.filter(p => p.priority === 1),
      important: plan.filter(p => p.priority === 2),
      polish: plan.filter(p => p.priority === 3)
    };

    return {
      order: [
        ...grouped.critical,
        ...grouped.important,
        ...grouped.polish
      ],
      message: this.getPriorityMessage(grouped)
    };
  }

  getPriorityMessage(grouped) {
    const messages = [];

    if (grouped.critical.length > 0) {
      messages.push(`First, fix ${grouped.critical.length} critical issue(s)`);
    }
    if (grouped.important.length > 0) {
      messages.push(`Then address ${grouped.important.length} important issue(s)`);
    }
    if (grouped.polish.length > 0) {
      messages.push(`Finally, apply ${grouped.polish.length} polish step(s)`);
    }

    return messages.join('. ') + '.';
  }
}
`\`\`

---

## Learning Assistant

**Educates while recommending**

`\`\`javascript
class LearningAssistant extends SymptomAssistant {
  explain(bandId, action) {
    const band = this.bandDefinitions.bands[bandId - 1];

    return {
      band: {
        name: band.uiCopy.label,
        oneLiner: band.uiCopy.oneLiner,
        tooltip: band.uiCopy.tooltip
      },
      action: {
        what: `${action} on Band ${bandId}`,
        why: this.explainWhy(bandId, action),
        how: this.explainHow(bandId, action),
        when: this.explainWhen(bandId, action)
      },
      theory: {
        primaryRole: band.roles.primary,
        commonFixes: band.roles.fixes,
        creativeUses: band.roles.creative
      },
      guidance: {
        dos: band.uiCopy.dos,
        donts: band.uiCopy.donts,
        warnings: band.roles.warnings
      }
    };
  }

  explainWhy(bandId, action) {
    const explanations = {
      1: {
        'HP Clean': 'High-pass filtering removes sub-bass rumble that eats headroom without adding audible low end.',
        'HP Tight': 'A higher cutoff point for sources that have no useful low frequency content.'
      },
      2: {
        'De-Mud': 'The 200-300 Hz range is where mud accumulates in mixes. Cutting here clears space for bass and kick.',
        'Add Body': 'Boosting this range adds warmth and thickness, but use sparingly to avoid mud.'
      },
      // ... more explanations
    };

    return explanations[bandId]?.[action] || 'This adjustment helps solve the identified issue.';
  }

  explainHow(bandId, action) {
    return `This uses a ${action.toLowerCase()} setting with carefully chosen frequency, gain, and bandwidth to target the specific issue without affecting adjacent frequencies.`;
  }

  explainWhen(bandId, action) {
    const band = this.bandDefinitions.bands[bandId - 1];
    const fixes = band.roles.fixes;

    return `Use this when you hear: ${fixes.slice(0, 2).join(', or ')}.`;
  }

  provideContext(bandId) {
    const band = this.bandDefinitions.bands[bandId - 1];

    return {
      frequencyRange: {
        range: band.frequencyHz.typicalRange,
        description: `This band covers ${band.frequencyHz.typicalRange[0]}-${band.frequencyHz.typicalRange[1]} Hz`,
        context: this.getFrequencyContext(band.frequencyHz.typicalRange)
      },
      commonInstruments: this.getCommonInstruments(bandId),
      visualMetaphor: this.getVisualMetaphor(bandId)
    };
  }

  getFrequencyContext(range) {
    const [min, max] = range;

    if (max < 250) return 'Sub-bass and low bass region - felt more than heard';
    if (max < 500) return 'Low midrange - warmth and body live here';
    if (max < 1000) return 'Lower midrange - where boxiness and honk appear';
    if (max < 2000) return 'Midrange - core of human voice and many instruments';
    if (max < 5000) return 'Upper midrange - presence and intelligibility';
    if (max < 10000) return 'High frequencies - detail and articulation';
    return 'Very high frequencies - air and sparkle';
  }

  getCommonInstruments(bandId) {
    const instrumentMap = {
      1: ['Kick drum fundamentals', 'Bass guitar lowest notes', 'Sub-bass synths'],
      2: ['Bass guitar body', 'Kick drum punch', 'Vocal warmth', 'Piano low end'],
      3: ['Vocal body', 'Snare body', 'Guitar lower mids', 'Room resonance'],
      4: ['Vocal core', 'Guitar honk', 'Nasal frequencies'],
      5: ['Vocal presence', 'Snare crack', 'Guitar attack', 'Hi-hat definition'],
      6: ['Vocal detail', 'Cymbal shimmer', 'Guitar brightness'],
      7: ['Vocal air', 'Cymbal sparkle', 'Overall mix polish']
    };

    return instrumentMap[bandId] || [];
  }

  getVisualMetaphor(bandId) {
    const metaphors = {
      1: 'The foundation of a building - invisible but essential',
      2: 'The warmth of a fireplace - comforting but can get smoky',
      3: 'Opening the windows in a stuffy room',
      4: 'The annoying voice in a megaphone',
      5: 'Someone stepping into a spotlight',
      6: 'The sparkle in someone\'s eyes',
      7: 'Fresh mountain air'
    };

    return metaphors[bandId];
  }
}
`\`\`

### Educational UI

`\`\`javascript
function showLearningMode(bandId, action) {
  const learningAssistant = new LearningAssistant(rules, presets, bandDefinitions);
  const explanation = learningAssistant.explain(bandId, action);
  const context = learningAssistant.provideContext(bandId);

  const modal = document.createElement('div');
  modal.className = 'learning-modal';
  modal.innerHTML = `
    <div class="learning-content">
      <h2>${explanation.band.name}</h2>
      <p class="one-liner">${explanation.band.oneLiner}</p>

      <section class="action-explanation">
        <h3>Action: ${explanation.action.what}</h3>

        <div class="explanation-cards">
          <div class="card">
            <h4>Why?</h4>
            <p>${explanation.action.why}</p>
          </div>

          <div class="card">
            <h4>How?</h4>
            <p>${explanation.action.how}</p>
          </div>

          <div class="card">
            <h4>When?</h4>
            <p>${explanation.action.when}</p>
          </div>
        </div>
      </section>

      <section class="context">
        <h3>Frequency Context</h3>
        <p>${context.frequencyRange.description}</p>
        <p><em>${context.frequencyRange.context}</em></p>
        <p class="metaphor">"${context.visualMetaphor}"</p>

        <h4>Common Instruments in This Range:</h4>
        <ul>
          ${context.commonInstruments.map(inst => `<li>${inst}</li>`).join('')}
        </ul>
      </section>

      <section class="guidance">
        <div class="dos-donts">
          <div class="dos">
            <h4>Do:</h4>
            <ul>
              ${explanation.guidance.dos.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>

          <div class="donts">
            <h4>Don't:</h4>
            <ul>
              ${explanation.guidance.donts.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>

        ${explanation.guidance.warnings.map(warning =>
          `<div class="warning">⚠️ ${warning}</div>`
        ).join('')}
      </section>

      <button class="apply-btn" onclick="applyWithUnderstanding(${bandId}, '${action}')">
        I Understand - Apply This
      </button>
    </div>
  `;

  document.body.appendChild(modal);
}
`\`\`

---

## Context-Aware Assistant

**Adapts to track type, genre, mix stage**

`\`\`javascript
class ContextAwareAssistant extends SymptomAssistant {
  constructor(rules, presets, bandDefinitions, context = {}) {
    super(rules, presets, bandDefinitions);
    this.context = {
      trackType: context.trackType || 'unknown', // vocal, drum, bass, etc.
      mixStage: context.mixStage || 'track', // track, bus, master
      genre: context.genre || 'general', // edm, hiphop, rock, etc.
      density: context.density || 'medium' // sparse, medium, dense
    };
  }

  diagnose(symptom) {
    const baseDiagnosis = super.diagnose(symptom);

    if (!baseDiagnosis.found) return baseDiagnosis;

    // Adapt recommendations based on context
    baseDiagnosis.recommendations = baseDiagnosis.recommendations.map(rec => {
      return {
        ...rec,
        settings: this.adaptSettings(rec.settings, rec.bandId),
        contextNote: this.getContextNote(rec.bandId, rec.action)
      };
    });

    return baseDiagnosis;
  }

  adaptSettings(settings, bandId) {
    const adapted = { ...settings };

    // Scale gain based on mix stage
    const gainScale = {
      track: 1.0,
      bus: 0.5,
      master: 0.25
    };

    adapted.gainDb *= (gainScale[this.context.mixStage] || 1.0);

    // Adjust bandwidth based on density
    if (this.context.density === 'dense') {
      // Narrower cuts in dense mixes to avoid collateral damage
      adapted.bwPercent = Math.min(100, adapted.bwPercent * 1.3);
    } else if (this.context.density === 'sparse') {
      // Wider moves in sparse mixes
      adapted.bwPercent = Math.max(0, adapted.bwPercent * 0.7);
    }

    return adapted;
  }

  getContextNote(bandId, action) {
    const notes = [];

    // Track type specific notes
    if (this.context.trackType === 'vocal' && bandId === 5) {
      notes.push('Vocals benefit greatly from presence boosts, but be careful not to stack this across multiple vocal tracks');
    }

    // Mix stage notes
    if (this.context.mixStage === 'master') {
      notes.push('Master bus EQ should be subtle - gain has been scaled down accordingly');
    }

    // Genre notes
    if (this.context.genre === 'edm' && bandId === 7) {
      notes.push('EDM often uses aggressive high-shelf boosts for modern brightness');
    }

    return notes.join('. ');
  }

  suggestWorkflow() {
    const workflows = {
      vocal: [
        { step: 1, band: 1, action: 'HP Clean', reason: 'Remove rumble and mud' },
        { step: 2, band: 2, action: 'De-Mud', reason: 'Clear low-mids' },
        { step: 3, band: 3, action: 'De-Box', reason: 'Remove cardboard resonance' },
        { step: 4, band: 5, action: 'Lead Clarity', reason: 'Add presence' },
        { step: 5, band: 7, action: 'Air Shelf', reason: 'Polish and air' }
      ],
      drum: [
        { step: 1, band: 1, action: 'HP Tight', reason: 'Remove sub rumble (unless kick/bass)' },
        { step: 2, band: 3, action: 'De-Box', reason: 'Remove boxiness' },
        { step: 3, band: 5, action: 'Add Detail', reason: 'Bring out transients' }
      ]
    };

    return workflows[this.context.trackType] || [];
  }
}
`\`\`

---

## Voice/Chat Interface

**Natural language processing**

`\`\`javascript
class NaturalLanguageAssistant extends ContextAwareAssistant {
  parse(userInput) {
    const input = userInput.toLowerCase();

    // Symptom keywords
    const symptomMap = {
      'mud': 'muddy_or_cloudy',
      'cloudy': 'muddy_or_cloudy',
      'thick': 'muddy_or_cloudy',
      'boxy': 'boxy_or_cardboard',
      'cardboard': 'boxy_or_cardboard',
      'hollow': 'boxy_or_cardboard',
      'nasal': 'nasal_or_honky',
      'honky': 'nasal_or_honky',
      'harsh': 'harsh_or_fatiguing',
      'sharp': 'harsh_or_fatiguing',
      'dull': 'dull_or_closed',
      'dark': 'dull_or_closed',
      'buried': 'buried_or_unclear',
      'unclear': 'buried_or_unclear',
      'rumble': 'rumble_or_headroom_loss'
    };

    // Find matching symptoms
    const detectedSymptoms = Object.entries(symptomMap)
      .filter(([keyword]) => input.includes(keyword))
      .map(([, symptom]) => symptom);

    if (detectedSymptoms.length === 0) {
      return {
        understood: false,
        message: "I'm not sure what you're describing. Can you use terms like 'muddy', 'harsh', 'dull', 'boxy', etc.?"
      };
    }

    return {
      understood: true,
      symptoms: [...new Set(detectedSymptoms)], // unique
      response: this.generateResponse(detectedSymptoms)
    };
  }

  generateResponse(symptoms) {
    if (symptoms.length === 1) {
      return this.diagnose(symptoms[0]);
    } else {
      const multiAssistant = new MultiSymptomAssistant(
        this.rules,
        this.presets,
        this.bandDefinitions
      );
      return multiAssistant.diagnoseMultiple(symptoms);
    }
  }

  chat(userInput) {
    const parsed = this.parse(userInput);

    if (!parsed.understood) {
      return {
        type: 'clarification',
        message: parsed.message,
        suggestions: this.getSuggestions()
      };
    }

    return {
      type: 'recommendation',
      input: userInput,
      symptoms: parsed.symptoms,
      response: parsed.response
    };
  }

  getSuggestions() {
    return [
      "The mix sounds muddy",
      "Vocals are harsh",
      "Track sounds dull",
      "There's a boxy resonance",
      "The low end is rumbling"
    ];
  }
}

// Usage
const nlAssistant = new NaturalLanguageAssistant(rules, presets, bandDefinitions, {
  trackType: 'vocal',
  mixStage: 'track'
});

const response = nlAssistant.chat("The vocal sounds muddy and a bit harsh");
// Returns recommendations for both muddy and harsh symptoms
`\`\`

---

## Best Practices

1. **Always Explain Why** - Users learn faster when they understand reasoning
2. **Respect Priority** - Critical fixes before polish
3. **Show Warnings** - Display band-specific cautions
4. **Allow Customization** - Let users adjust recommended settings
5. **Track Context** - Adapt to track type, mix stage, genre
6. **Enable A/B Testing** - Let users compare before/after
7. **Provide Fallbacks** - Handle unknown symptoms gracefully
8. **Educate Progressively** - Beginner mode → Advanced mode

---

## Next Steps

- See `preset-system-architecture.md` for preset generation
- See `json-workflow.md` for data integration
- See `../terminology-glossary/` for user-facing language

```

---

## FILE: 04-Reference\integration-guides\dynamic-eq-hack.md

```markdown
# DIY Dynamic EQ (The Peak Controller Hack)

Parametric EQ 2 is static... unless you use **Fruity Peak Controller**. This turns it into a Dynamic EQ (like Pro-Q 3's dynamic mode).

## ❓ What is Dynamic EQ?

Static EQ cuts a frequency **all the time**.
Dynamic EQ cuts a frequency **only when it gets too loud**.

## 🛠️ The Setup (De-Esser Example)

**Goal:** Cut 6 kHz (Band 6) only when the vocals say "Sss".

1.  **Insert Fruity Peak Controller** on the Vocal Mixer track.
    - _Place it BEFORE the EQ._
    - Unmute the Peak Controller (mute button usually auto-engages, you want to hear the signal).
2.  **Insert Fruity Parametric EQ 2** right after it.
3.  **Configure Peak Controller:**
    - **Base:** 50% (Center).
    - **Vol:** -50% (Invert - we want to CUT when signal is loud).
    - **Tension:** Linear.
4.  **Link the EQ:**
    - Right-click **Band 6 Gain** slider.
    - Select **Link to controller**.
    - Internal controller: **Peak Ctrl - Peak**.
    - Formula: `Input` (Default).
5.  **Configure EQ Band 6:**
    - Set Freq to **6 kHz**.
    - Set Bandwidth to fit the "Sss".

## 🚀 How it works

- When the vocal is silent, Peak Controller sends "50%" (0 dB Gain).
- When the vocal gets loud, Peak Controller sends a LOWER value (because Vol is -50%).
- The EQ Gain knob dips down.
- **Result:** Automatic harshness control that is transparent during quiet whispers.

---

## 🎛️ Sidechain EQ (Spectral Space)

You can put the Peak Controller on the **KICK** channel, and the EQ on the **BASS** channel.

- Link Bass EQ **Band 1 Gain** to Kick **Peak**.
- Now the Bass Low End ducks automatically every time the Kick hits.
- _Result:_ Perfect low-end separation without pumping the entire volume.

```

---

## FILE: 04-Reference\integration-guides\eq-vibes.md

```markdown
# Integration Guide: "EQ Vibes" UI/UX

This guide defines the aesthetic and user experience patterns used in the "Fruity Parametric EQ 2 Knowledge Base." When building tools or interfaces based on this data, follow these conventions to maintain the "Vibe."

## 🎨 Color System

The 7 bands follow a specific gradient corresponding to the visible light spectrum (Low Frequency = Low Energy/Red end; High Frequency = High Energy/Blue end).

| Band  | Color  | Hex Code  | Purpose          |
| ----- | ------ | --------- | ---------------- |
| **1** | Purple | `#8B5CF6` | Sub / Foundation |
| **2** | Pink   | `#EC4899` | Warmth / Body    |
| **3** | Orange | `#F97316` | Boxiness         |
| **4** | Yellow | `#EAB308` | Honk / Nasal     |
| **5** | Green  | `#10B981` | Presence         |
| **6** | Teal   | `#06B6D4` | Detail           |
| **7** | Blue   | `#3B82F6` | Air              |

**Implementation Note:**
In your UI, these colors should be used for:

- Band tokens/icons
- Frequency curve lines
- Active state indicators

---

## 👻 Visualizing the "Ghost"

In the context of this knowledge base, the "Ghost" refers to the spectral analyzer background.

- **Concept:** "See what you hear."
- **UI Requirement:** Any tool visualizing this data should ideally underlay a frequency spectrum graph behind the EQ curve.
- **Y-Axis:** +18 dB to -18 dB.
- **X-Axis:** 20 Hz to 20 kHz (Logarithmic).

---

## 🖱️ Interaction Patterns

### The "Token" Control

Users interact with "Tokens" (the floating circles), not sliders.

- **Drag Horizontal:** Changes Frequency.
- **Drag Vertical:** Changes Gain.
- **Scroll Wheel:** Changes Bandwidth.

### Tooltips

When a user hovers over a Token, the UI should display the **Educational Role** defined in `02-Data/band-definitions/all-7-bands.json`.

- _Example:_ Hovering Band 2 shows: _"Zone: Warmth/Body - Cut to remove mud."_

---

## 🧩 Preset Action Buttons

When implementing the **Archetypes** (`02-Data/presets/band-archetypes.json`), use "Chip" style buttons.

- **Design:** Rounded pill shape.
- **Label:** Archetype Name (e.g., "De-Mud").
- **Action:** On click, snaps the corresponding band to the archetype settings.
- **Feedback:** The band line animates to the new position.

```

---

## FILE: 04-Reference\integration-guides\json-workflow.md

```markdown
# JSON Data Workflow Integration Guide

This guide explains how to wire together the four core JSON data files in your application.

## The Four Core Files

### 1. schema/eg1.json - The Validator
**Purpose:** Defines what valid band data looks like

**When to use:**
- Validating user-created band data
- Ensuring data integrity before saving
- Auto-generating TypeScript/Flow types
- API request/response validation

**Never directly displayed to users** - this is a structural definition only.

---

### 2. band-definitions/eg2.json - The Encyclopedia
**Purpose:** Complete reference data for all 7 bands

**When to use:**
- Populating tooltips and help text
- Displaying band roles and warnings
- Setting safe default values
- Generating UI copy

**This is your primary data source** - everything user-facing comes from here.

---

### 3. presets/eg3.json - The Building Blocks
**Purpose:** Reusable band configurations (archetypes)

**When to use:**
- Creating quick-action preset buttons
- Building full EQ presets from components
- Offering starting points to users
- Implementing "smart defaults"

**Archetypes are band-level** - combine them to make full presets.

---

### 4. rules/eg4.json - The Decision Engine
**Purpose:** Maps symptoms to solutions

**When to use:**
- Building assistant/wizard features
- Suggesting fixes based on user input
- Educational guidance systems
- Automated troubleshooting

**Rules reference archetypes** - they tell you which preset to apply.

---

## Data Flow Patterns

### Pattern 1: User Selects a Band

`\`\`
User clicks Band 5 (Presence)
    ↓
Load data from band-definitions/eg2.json
    ↓
Display band-level information:
  - Label: "Presence / Clarity"
  - One-liner: "Brings elements forward"
  - Tooltip: "Boost for clarity, cut for harshness..."
  - Primary roles
  - Common fixes
  - Warnings
    ↓
Show available archetypes from presets/eg3.json:
  - "Lead Clarity" button
  - "Soften Bite" button
    ↓
User clicks archetype → Apply settings
`\`\`

**Implementation example:**

`\`\`javascript
// Load band definition
const band5 = bandDefinitions.bands[4]; // 0-indexed

// Display in UI
document.getElementById('band-label').textContent = band5.uiCopy.label;
document.getElementById('band-tooltip').textContent = band5.uiCopy.tooltip;

// Populate archetype buttons
const band5Archetypes = presets.bandArchetypes.band5_presence;
band5Archetypes.forEach(archetype => {
  createButton(archetype.name, () => applyArchetype(archetype));
});
`\`\`

---

### Pattern 2: User Describes a Symptom

`\`\`
User says: "The mix sounds muddy"
    ↓
Look up symptom in rules/eg4.json
    ↓
Find rule: { symptom: "muddy_or_cloudy", priority: 1 }
    ↓
Get recommendations: bandId=2, archetype="De-Mud"
    ↓
Load archetype from presets/eg3.json:
  band2_warmth → "De-Mud"
    ↓
Load band context from band-definitions/eg2.json:
  Band 2 warnings, dos/donts
    ↓
Present to user:
  "Try cutting Band 2 (Warmth) at 250 Hz..."
  [Apply De-Mud] button
  Warning: "Cut more often than boost in this range"
`\`\`

**Implementation example:**

`\`\`javascript
function handleSymptom(symptom) {
  // Find matching rule
  const rule = rules.find(r => r.symptom === symptom);

  if (!rule) return;

  // Get recommendations sorted by priority
  const sortedRecs = rule.recommendations.sort((a, b) => {
    const bandA = bandDefinitions.bands[a.bandId - 1];
    const bandB = bandDefinitions.bands[b.bandId - 1];
    return a.bandId - b.bandId; // Or custom logic
  });

  // For each recommendation
  sortedRecs.forEach(rec => {
    const band = bandDefinitions.bands[rec.bandId - 1];
    const archetype = findArchetype(rec.bandId, rec.archetype);

    displayRecommendation({
      bandName: band.uiCopy.label,
      archetype: archetype,
      reasoning: rec.notes,
      warning: band.roles.warnings[0] // Show first warning
    });
  });
}

function findArchetype(bandId, name) {
  const bandKey = `band${bandId}_${bandDefinitions.bands[bandId-1].zone.split('/')[0].toLowerCase()}`;
  const archetypes = presets.bandArchetypes[bandKey];
  return archetypes.find(a => a.name === name);
}
`\`\`

---

### Pattern 3: Building a Full Preset

`\`\`
Goal: Create "Vocal Polish" preset
    ↓
Select relevant archetypes from presets/eg3.json:
  - Band 1: "HP Clean"
  - Band 2: "De-Mud"
  - Band 5: "Lead Clarity"
  - Band 7: "Air Shelf"
    ↓
Validate each against band-definitions/eg2.json:
  - Check gain against safeMaxTrack
  - Verify filter type is in typeOptions
  - Ensure frequency is in typicalRange
    ↓
Combine into preset object:
  {
    name: "Vocal Polish",
    bands: [archetype1, archetype2, ...]
  }
    ↓
Validate against schema/eg1.json (optional)
`\`\`

**Implementation example:**

`\`\`javascript
class PresetBuilder {
  constructor() {
    this.selectedArchetypes = [];
  }

  addArchetype(bandId, archetypeName) {
    const archetype = findArchetype(bandId, archetypeName);
    const bandDef = bandDefinitions.bands[bandId - 1];

    // Validate
    if (!this.validateArchetype(archetype, bandDef)) {
      throw new Error('Invalid archetype for band');
    }

    this.selectedArchetypes[bandId - 1] = archetype;
  }

  validateArchetype(archetype, bandDef) {
    // Check filter type is supported
    if (!bandDef.controls.typeOptions.includes(archetype.type)) {
      return false;
    }

    // Check frequency is in range
    const [minFreq, maxFreq] = bandDef.frequencyHz.typicalRange;
    if (archetype.freqHz < minFreq || archetype.freqHz > maxFreq) {
      return false;
    }

    // Check gain doesn't exceed safe max (assuming track level)
    const maxGain = bandDef.controls.gainDb.safeMaxTrack;
    if (Math.abs(archetype.gainDb) > maxGain) {
      console.warn(`Gain ${archetype.gainDb} exceeds safe maximum ${maxGain}`);
    }

    return true;
  }

  build(presetName) {
    return {
      name: presetName,
      bands: this.selectedArchetypes.filter(a => a !== undefined)
    };
  }
}

// Usage
const builder = new PresetBuilder();
builder.addArchetype(1, "HP Clean");
builder.addArchetype(2, "De-Mud");
builder.addArchetype(5, "Lead Clarity");
builder.addArchetype(7, "Air Shelf");

const preset = builder.build("Vocal Polish");
`\`\`

---

### Pattern 4: Validating User Input

`\`\`
User creates custom band settings
    ↓
Validate against schema/eg1.json:
  - All required fields present?
  - Correct data types?
  - Valid enum values?
    ↓
If valid, check against band-definitions/eg2.json:
  - Frequency in typicalRange?
  - Filter type in typeOptions?
  - Gain within safe limits?
    ↓
Show warnings if needed:
  - "Gain exceeds recommended maximum for track"
  - "This filter type is unusual for this band"
    ↓
Allow save if structurally valid
`\`\`

**Implementation with JSON Schema validator:**

`\`\`javascript
import Ajv from 'ajv';

const ajv = new Ajv();
const validateBand = ajv.compile(schema); // schema = eg1.json

function validateUserBand(userBand, context = 'track') {
  const errors = [];
  const warnings = [];

  // 1. Structural validation
  if (!validateBand(userBand)) {
    errors.push(...validateBand.errors);
    return { valid: false, errors, warnings };
  }

  // 2. Semantic validation
  const bandDef = bandDefinitions.bands[userBand.bandId - 1];

  // Check frequency range
  const [minFreq, maxFreq] = bandDef.frequencyHz.typicalRange;
  if (userBand.freqHz < minFreq || userBand.freqHz > maxFreq) {
    warnings.push(`Frequency ${userBand.freqHz} Hz is outside typical range ${minFreq}-${maxFreq} Hz`);
  }

  // Check filter type
  if (!bandDef.controls.typeOptions.includes(userBand.type)) {
    errors.push(`Filter type ${userBand.type} not supported for Band ${userBand.bandId}`);
  }

  // Check gain
  const safeMax = bandDef.controls.gainDb[`safeMax${capitalize(context)}`];
  if (Math.abs(userBand.gainDb) > safeMax) {
    warnings.push(`Gain ${userBand.gainDb} dB exceeds safe maximum ${safeMax} dB for ${context}`);
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}
`\`\`

---

## Data Loading Strategy

### Option 1: Load All Data at App Start
**Good for:** Desktop apps, small datasets, offline-first apps

`\`\`javascript
// Load once at startup
const bandDefinitions = await loadJSON('02-Data/band-definitions/eg2.json');
const presets = await loadJSON('02-Data/presets/eg3.json');
const rules = await loadJSON('02-Data/rules/eg4.json');
const schema = await loadJSON('02-Data/schema/eg1.json');

// Store globally
app.data = { bandDefinitions, presets, rules, schema };
`\`\`

**Pros:**
- Fast access after initial load
- Works offline
- Simple code

**Cons:**
- Slower startup
- More memory usage

---

### Option 2: Lazy Load on Demand
**Good for:** Web apps, large datasets, bandwidth-constrained

`\`\`javascript
class DataManager {
  constructor() {
    this.cache = {};
  }

  async getBandDefinition(bandId) {
    if (!this.cache.bandDefinitions) {
      this.cache.bandDefinitions = await loadJSON('band-definitions/eg2.json');
    }
    return this.cache.bandDefinitions.bands[bandId - 1];
  }

  async getArchetypes(bandId) {
    if (!this.cache.presets) {
      this.cache.presets = await loadJSON('presets/eg3.json');
    }
    const bandKey = this.getBandKey(bandId);
    return this.cache.presets.bandArchetypes[bandKey];
  }

  async getRulesForSymptom(symptom) {
    if (!this.cache.rules) {
      this.cache.rules = await loadJSON('rules/eg4.json');
    }
    return this.cache.rules.find(r => r.symptom === symptom);
  }
}
`\`\`

**Pros:**
- Faster startup
- Less memory if not all data needed
- Can load from CDN/API

**Cons:**
- More complex code
- Async everywhere
- Needs cache strategy

---

## Common Integration Patterns

### 1. Educational Mode
**Show contextual help as user works**

`\`\`javascript
function onBandFocus(bandId) {
  const band = bandDefinitions.bands[bandId - 1];

  showTooltip({
    title: band.uiCopy.label,
    description: band.uiCopy.tooltip,
    primaryRole: band.roles.primary[0],
    warning: band.roles.warnings[0],
    dos: band.uiCopy.dos,
    donts: band.uiCopy.donts
  });
}
`\`\`

### 2. Quick Action Buttons
**One-click archetype application**

`\`\`javascript
function renderQuickActions(bandId) {
  const archetypes = getArchetypesForBand(bandId);
  const container = document.getElementById('quick-actions');

  archetypes.forEach(archetype => {
    const button = document.createElement('button');
    button.textContent = archetype.name;
    button.onclick = () => applyArchetype(bandId, archetype);
    container.appendChild(button);
  });
}
`\`\`

### 3. Smart Suggestions
**Recommend based on symptoms**

`\`\`javascript
function suggestFixes(symptoms) {
  const suggestions = [];

  symptoms.forEach(symptom => {
    const rule = rules.find(r => r.symptom === symptom);
    if (!rule) return;

    rule.recommendations.forEach(rec => {
      const band = bandDefinitions.bands[rec.bandId - 1];
      const archetype = findArchetype(rec.bandId, rec.archetype);

      suggestions.push({
        priority: rule.priority,
        bandName: band.uiCopy.label,
        action: archetype.name,
        reason: rec.notes,
        settings: archetype
      });
    });
  });

  // Sort by priority
  return suggestions.sort((a, b) => a.priority - b.priority);
}
`\`\`

### 4. Preset Management
**Save and load full EQ curves**

`\`\`javascript
class PresetManager {
  constructor(dataManager) {
    this.data = dataManager;
  }

  async createFromArchetypes(name, archetypeSelections) {
    // archetypeSelections = [
    //   { bandId: 1, archetypeName: "HP Clean" },
    //   { bandId: 2, archetypeName: "De-Mud" },
    //   ...
    // ]

    const bands = [];

    for (const selection of archetypeSelections) {
      const archetype = await this.data.getArchetype(
        selection.bandId,
        selection.archetypeName
      );

      bands.push({
        bandId: selection.bandId,
        ...archetype
      });
    }

    return {
      name,
      version: "1.0",
      bands
    };
  }

  async loadPreset(preset) {
    for (const band of preset.bands) {
      await this.applyBandSettings(band);
    }
  }
}
`\`\`

---

## Data Relationships

`\`\`
schema/eg1.json
    ↓ (validates)
band-definitions/eg2.json
    ↓ (provides metadata for)
presets/eg3.json
    ↑ (referenced by)
rules/eg4.json
`\`\`

**Flow:**
1. Schema defines structure
2. Band definitions provide reference data
3. Presets use that structure
4. Rules reference presets
5. All validated by schema

---

## Error Handling

### Missing Archetype
`\`\`javascript
function findArchetype(bandId, name) {
  const archetypes = getArchetypesForBand(bandId);
  const archetype = archetypes.find(a => a.name === name);

  if (!archetype) {
    console.error(`Archetype "${name}" not found for band ${bandId}`);
    // Fallback: use band default settings
    const band = bandDefinitions.bands[bandId - 1];
    return {
      name: "Default",
      type: band.controls.defaultType,
      freqHz: band.frequencyHz.typicalRange[0],
      bwPercent: band.controls.bwPercent.default,
      gainDb: 0
    };
  }

  return archetype;
}
`\`\`

### Invalid Band ID
`\`\`javascript
function getBand(bandId) {
  if (bandId < 1 || bandId > 7) {
    throw new Error(`Invalid band ID: ${bandId}. Must be 1-7.`);
  }
  return bandDefinitions.bands[bandId - 1];
}
`\`\`

### Schema Validation Failure
`\`\`javascript
function saveUserPreset(preset) {
  const validation = validatePreset(preset);

  if (!validation.valid) {
    showErrors(validation.errors);
    return false;
  }

  if (validation.warnings.length > 0) {
    showWarnings(validation.warnings, () => {
      // User can proceed despite warnings
      doSave(preset);
    });
  } else {
    doSave(preset);
  }
}
`\`\`

---

## Performance Tips

1. **Cache band definitions** - They don't change, load once
2. **Index archetypes by band** - Faster lookup than searching
3. **Debounce validation** - Don't validate on every keystroke
4. **Lazy load rules** - Only when assistant mode is active
5. **Precompute lookups** - Create band ID → archetype maps at startup

`\`\`javascript
// Precompute archetype lookup
const archetypesByBand = {};
Object.entries(presets.bandArchetypes).forEach(([key, archetypes]) => {
  const bandId = parseInt(key.match(/\d+/)[0]);
  archetypesByBand[bandId] = archetypes;
});

// Fast lookup
const band2Archetypes = archetypesByBand[2];
`\`\`

---

## Testing Your Integration

### Unit Tests
`\`\`javascript
describe('Data Integration', () => {
  test('All archetypes reference valid bands', () => {
    Object.entries(presets.bandArchetypes).forEach(([key, archetypes]) => {
      archetypes.forEach(archetype => {
        const bandId = parseInt(key.match(/\d+/)[0]);
        const band = bandDefinitions.bands[bandId - 1];

        // Type is supported
        expect(band.controls.typeOptions).toContain(archetype.type);

        // Frequency in range
        expect(archetype.freqHz).toBeGreaterThanOrEqual(band.frequencyHz.typicalRange[0]);
        expect(archetype.freqHz).toBeLessThanOrEqual(band.frequencyHz.typicalRange[1]);
      });
    });
  });

  test('All rules reference valid archetypes', () => {
    rules.forEach(rule => {
      rule.recommendations.forEach(rec => {
        const archetype = findArchetype(rec.bandId, rec.archetype);
        expect(archetype).toBeDefined();
      });
    });
  });
});
`\`\`

---

## Next Steps

- See `preset-system-architecture.md` for advanced preset patterns
- See `assistant-mode-implementation.md` for building smart assistants
- See `../api-specifications/` for validation and type safety

```

---

## FILE: 04-Reference\integration-guides\key-tracking-eq.md

```markdown
# Key Tracking (Musical EQ)

You can "tune" the EQ bands to follow the notes you play. This is incredible for Bass design, where the fundamental frequency moves with every note.

## 🛠️ The Setup

1.  Add **Fruity Parametric EQ 2** to your Synth's mixer channel.
2.  Right-click the **Band 1 Freq** knob (or any band).
3.  Select **"Link to controller..."**.
4.  In the "Internal controller" section, select: **"Note - Keyboard Controller"** (if using Patcher) OR ensure you have a **Fruity Keyboard Controller** standard setup.

### The "Keyboard Controller" Method (Standard)

1.  Add a **Fruity Keyboard Controller** channel.
2.  Open it. Right-click the knob, "Type in value", type **20**. (This maps C0 to 20%).
3.  Go to EQ 2. Right-click **Band 1 Freq** -> **Link to controller**.
4.  Select **Internal controller: Keyboard Controller - Note**.
5.  In the Mapping formula, choose **"Logarithmic"** (or adjust until C5 = 523 Hz). _Note: Mapping linear MIDI notes to Logarithmic Hz requires a specific formula._

### The Formula

For accurate 1:1 Hz tracking, use this mapping formula in the Link dialog:
`Log(Input + 0.5)` (Approximation - tuning by ear is often required).

---

## 🎹 Use Cases

### 1. The "Singing" Resonance

- **Band 5 (Bell), Gain +12dB, Narrow Q.**
- Link Freq to Key.
- The EQ boost moves with your melody, creating a vocoder-like or physical modeling resonance.

### 2. Consistent Sub-Bass

- **Band 1 (Bell), Gain +3dB.**
- Link Freq to Key.
- Tracks the fundamental of your 808.
- _Benefit:_ Your low E note gets the same boost as your high C note. Without tracking, a static 50 Hz boost would make the E loud but the C weak.

```

---

## FILE: 04-Reference\integration-guides\mid-side-setup.md

```markdown
# Mid/Side EQ Setup (The Patcher Method)

Fruity Parametric EQ 2 is a stereo plugin. It treats Left and Right channels equally. To EQ the "Center" (Mid) differently from the "Width" (Side), we need to build a container using **Patcher**.

## 🏗️ The Architecture

We will split the audio signal into two streams:
1.  **Mid (Mono Sum):** The vocals, kick, snare, bass.
2.  **Side (Stereo Difference):** Reverbs, wide synths, backing vocal double tracks.

We will then process each stream with its own PEQ2, and combine them back.

## 🛠️ Step-by-Step Construction

1.  **Load Patcher** on your Mixer Track (Effect slot).
2.  **Open Map Tab** inside Patcher.
3.  **Add Plugins:**
    - Right-click workspace -> Add plugin -> **Fruity Stereo Shaper**.
    - Right-click workspace -> Add plugin -> **Fruity Parametric EQ 2** (Rename to "MID EQ").
    - Right-click workspace -> Add plugin -> **Fruity Parametric EQ 2** (Rename to "SIDE EQ").

4.  **Configure Stereo Shaper (The Splitter):**
    - This plugin handles the math. We need to output Mid on one pin and Side on another... actually, it's easier to use **two** Stereo Shapers or just route wisely.
    - **Easiest Method:** Use two separate Patcher chains.
    - **Chain 1 (Mid):** FL Studio Input -> Stereo Shaper (Preset: "Mid - aSide") -> MID EQ -> FL Studio Output.
    - **Chain 2 (Side):** FL Studio Input -> Stereo Shaper (Preset: "Side - aMid") -> SIDE EQ -> FL Studio Output.

5.  **Verify the Routing:**
    - Connect the yellow audio cables.
    - Input -> Stereo Shaper 1 -> Mid EQ -> Output.
    - Input -> Stereo Shaper 2 -> Side EQ -> Output.

## 🎧 Workflow: What to EQ Where?

### On the MID EQ (Center)
*   **Kick & Bass:** Keep them solid here.
*   **Vocals:** Boost presence (3 kHz) here to lock them in the center.
*   **Snare:** Add punch (200 Hz).
*   **Monocompatibility Check:** If it sounds good here, it will sound good on a phone.

### On the SIDE EQ (Width)
*   **High Pass:** Cut everything below 150 Hz. (Bass in the sides causes phase issues on vinyl/club systems).
*   **Air Boost:** Boost Band 7 (10 kHz+) high shelf. This makes the mix sound "wider" without messing up the center focus.
*   **De-Mud:** Cut 300-400 Hz to remove "room mud" from reverbs.

## 💾 Save the Preset

Once built, save this Patcher state as `PEQ2 Mid-Side Matrix`. You never want to wire this up manually again.

## 🌟 Pro Tip: The "Side" Solo

In Patcher, you can mute the "Mid" chain to listen *only* to the sides. This is incredible for hearing hidden details in reverbs or checking if your MP3 compression is eating the stereo information.

```

---

## FILE: 04-Reference\integration-guides\preset-system-architecture.md

```markdown
# Preset System Architecture

A comprehensive guide to building a flexible, user-friendly preset system using the band archetype model.

## Core Concepts

### What is a Preset?
A preset is a complete EQ configuration consisting of:
- 0-7 band configurations (not all bands need to be active)
- Metadata (name, author, category, tags)
- Context information (track type, genre, purpose)

### What is an Archetype?
An archetype is a **single band configuration** - a reusable building block:
- Type (bell, shelf, pass, notch)
- Frequency (Hz)
- Bandwidth (%)
- Gain (dB)

**Key insight:** Presets = Arrays of Archetypes

---

## Architecture Patterns

### Pattern 1: Preset as Archetype Stack

**Simple, modular, extensible**

`\`\`json
{
  "name": "Vocal Polish",
  "author": "JaZeR",
  "category": "Vocal",
  "tags": ["clarity", "air", "clean"],
  "bands": [
    {
      "bandId": 1,
      "archetype": "HP Clean"
    },
    {
      "bandId": 2,
      "archetype": "De-Mud"
    },
    {
      "bandId": 5,
      "archetype": "Lead Clarity"
    },
    {
      "bandId": 7,
      "archetype": "Air Shelf"
    }
  ]
}
`\`\`

**Implementation:**

`\`\`javascript
class ArchetypePreset {
  constructor(name, metadata = {}) {
    this.name = name;
    this.metadata = metadata;
    this.bands = [];
  }

  addBand(bandId, archetypeName) {
    const archetype = findArchetype(bandId, archetypeName);
    if (!archetype) {
      throw new Error(`Archetype "${archetypeName}" not found for band ${bandId}`);
    }

    this.bands.push({
      bandId,
      archetype: archetypeName,
      settings: { ...archetype } // Clone archetype settings
    });
  }

  apply() {
    this.bands.forEach(band => {
      applyBandSettings(band.bandId, band.settings);
    });
  }

  toJSON() {
    return {
      name: this.name,
      ...this.metadata,
      bands: this.bands
    };
  }
}
`\`\`

**Pros:**
- Easy to understand
- Archetypes are reusable
- Preset files are small
- Updates to archetypes propagate

**Cons:**
- Depends on archetype library
- Can't customize beyond archetypes

---

### Pattern 2: Preset as Full Configuration

**Self-contained, portable**

`\`\`json
{
  "name": "Vocal Polish",
  "author": "JaZeR",
  "category": "Vocal",
  "bands": [
    {
      "bandId": 1,
      "enabled": true,
      "type": "high_pass",
      "freqHz": 80,
      "bwPercent": 25,
      "gainDb": 0,
      "source": "HP Clean"
    },
    {
      "bandId": 2,
      "enabled": true,
      "type": "bell",
      "freqHz": 250,
      "bwPercent": 35,
      "gainDb": -2,
      "source": "De-Mud"
    }
  ]
}
`\`\`

**Implementation:**

`\`\`javascript
class FullPreset {
  constructor(name, metadata = {}) {
    this.name = name;
    this.metadata = metadata;
    this.bands = Array(7).fill(null).map((_, i) => ({
      bandId: i + 1,
      enabled: false,
      type: 'bell',
      freqHz: 1000,
      bwPercent: 50,
      gainDb: 0
    }));
  }

  setBand(bandId, settings) {
    this.bands[bandId - 1] = {
      bandId,
      enabled: true,
      ...settings
    };
  }

  fromArchetype(bandId, archetypeName) {
    const archetype = findArchetype(bandId, archetypeName);
    this.setBand(bandId, {
      ...archetype,
      source: archetypeName // Track where it came from
    });
  }

  apply() {
    this.bands.forEach(band => {
      if (band.enabled) {
        applyBandSettings(band.bandId, band);
      } else {
        bypassBand(band.bandId);
      }
    });
  }
}
`\`\`

**Pros:**
- Self-contained
- Supports custom settings
- Portable between systems
- No external dependencies

**Cons:**
- Larger file size
- Archetype updates don't propagate
- More complex validation

---

### Pattern 3: Hybrid (Recommended)

**Best of both worlds**

`\`\`json
{
  "name": "Vocal Polish",
  "version": "1.0",
  "author": "JaZeR",
  "category": "Vocal",
  "tags": ["clarity", "air", "clean"],
  "bands": [
    {
      "bandId": 1,
      "enabled": true,
      "source": {
        "type": "archetype",
        "name": "HP Clean"
      }
    },
    {
      "bandId": 2,
      "enabled": true,
      "source": {
        "type": "archetype",
        "name": "De-Mud"
      }
    },
    {
      "bandId": 5,
      "enabled": true,
      "source": {
        "type": "custom",
        "settings": {
          "type": "bell",
          "freqHz": 2700,
          "bwPercent": 45,
          "gainDb": 2.5
        }
      }
    }
  ]
}
`\`\`

**Implementation:**

`\`\`javascript
class HybridPreset {
  constructor(name, metadata = {}) {
    this.name = name;
    this.version = "1.0";
    this.metadata = metadata;
    this.bands = [];
  }

  addArchetype(bandId, archetypeName) {
    this.bands.push({
      bandId,
      enabled: true,
      source: {
        type: 'archetype',
        name: archetypeName
      }
    });
  }

  addCustom(bandId, settings) {
    this.bands.push({
      bandId,
      enabled: true,
      source: {
        type: 'custom',
        settings
      }
    });
  }

  apply() {
    this.bands.forEach(band => {
      if (!band.enabled) return;

      let settings;
      if (band.source.type === 'archetype') {
        const archetype = findArchetype(band.bandId, band.source.name);
        settings = archetype;
      } else {
        settings = band.source.settings;
      }

      applyBandSettings(band.bandId, settings);
    });
  }

  // Convert archetype to custom (freezes current state)
  freezeBand(bandId) {
    const band = this.bands.find(b => b.bandId === bandId);
    if (band && band.source.type === 'archetype') {
      const archetype = findArchetype(bandId, band.source.name);
      band.source = {
        type: 'custom',
        settings: { ...archetype },
        note: `Frozen from archetype: ${band.source.name}`
      };
    }
  }
}
`\`\`

**Pros:**
- Flexibility for custom tweaks
- Archetype updates can still propagate
- Clear provenance tracking
- Supports both use cases

**Cons:**
- More complex to implement
- Requires migration logic

---

## Preset Categories

### By Instrument
`\`\`
Vocals/
  ├── Vocal - Lead (Male).json
  ├── Vocal - Lead (Female).json
  ├── Vocal - Background.json
  └── Vocal - Rap.json

Drums/
  ├── Kick - Punchy.json
  ├── Kick - Sub.json
  ├── Snare - Crispy.json
  └── Hi-Hat - Bright.json

Bass/
  ├── Bass - Sub (808).json
  ├── Bass - Mid (Synth).json
  └── Bass - Acoustic.json

Melodic/
  ├── Piano - Bright.json
  ├── Guitar - Acoustic.json
  ├── Strings - Warm.json
  └── Synth - Lead.json
`\`\`

### By Problem (Corrective)
`\`\`
Fixes/
  ├── Remove Mud.json
  ├── De-Box.json
  ├── Remove Harshness.json
  ├── Clear Headroom.json
  └── Tame Resonance.json
`\`\`

### By Goal (Creative)
`\`\`
Creative/
  ├── Telephone Effect.json
  ├── AM Radio.json
  ├── Vintage Warmth.json
  ├── Modern Clarity.json
  └── Aggressive Presence.json
`\`\`

### By Context
`\`\`
Context/
  ├── Track - Vocals.json
  ├── Track - Drums.json
  ├── Bus - Drum Group.json
  ├── Bus - Vocal Group.json
  └── Master - Final Polish.json
`\`\`

---

## Preset Factory System

### Generating Presets from Rules

`\`\`javascript
class PresetFactory {
  constructor(rules, archetypes) {
    this.rules = rules;
    this.archetypes = archetypes;
  }

  // Generate preset from symptom
  fromSymptom(symptom, name = null) {
    const rule = this.rules.find(r => r.symptom === symptom);
    if (!rule) return null;

    const preset = new HybridPreset(
      name || `Fix: ${symptom.replace(/_/g, ' ')}`,
      {
        category: 'Fixes',
        symptom: symptom,
        priority: rule.priority
      }
    );

    rule.recommendations.forEach(rec => {
      preset.addArchetype(rec.bandId, rec.archetype);
    });

    return preset;
  }

  // Generate preset for instrument
  forInstrument(instrument, style = 'default') {
    // Example: Generate vocal preset
    const preset = new HybridPreset(`${instrument} - ${style}`, {
      category: 'Instrument',
      instrument: instrument
    });

    // Common vocal chain
    if (instrument === 'vocal') {
      preset.addArchetype(1, "HP Clean");

      if (style === 'clarity') {
        preset.addArchetype(2, "De-Mud");
        preset.addArchetype(5, "Lead Clarity");
        preset.addArchetype(7, "Air Shelf");
      } else if (style === 'warmth') {
        preset.addArchetype(2, "Add Body");
        preset.addArchetype(5, "Soften Bite");
      }
    }

    return preset;
  }

  // Combine multiple symptoms
  fromSymptoms(symptoms, name) {
    const preset = new HybridPreset(name, {
      category: 'Multi-Fix',
      symptoms: symptoms
    });

    const bandUsage = new Set();

    // Sort symptoms by priority
    const sortedSymptoms = symptoms.map(s => ({
      symptom: s,
      rule: this.rules.find(r => r.symptom === s)
    })).sort((a, b) => a.rule.priority - b.rule.priority);

    // Add archetypes, avoiding band conflicts
    sortedSymptoms.forEach(({ symptom, rule }) => {
      rule.recommendations.forEach(rec => {
        if (!bandUsage.has(rec.bandId)) {
          preset.addArchetype(rec.bandId, rec.archetype);
          bandUsage.add(rec.bandId);
        }
      });
    });

    return preset;
  }
}

// Usage
const factory = new PresetFactory(rules, presets);

const muddyFix = factory.fromSymptom('muddy_or_cloudy');
const vocalClarityPreset = factory.forInstrument('vocal', 'clarity');
const mixFixPreset = factory.fromSymptoms(
  ['muddy_or_cloudy', 'boxy_or_cardboard', 'dull_or_closed'],
  'Full Mix Polish'
);
`\`\`

---

## Preset Management Features

### Tagging System

`\`\`javascript
class PresetManager {
  constructor() {
    this.presets = [];
    this.tags = new Map(); // tag -> Set of preset IDs
  }

  addPreset(preset) {
    this.presets.push(preset);

    // Index by tags
    if (preset.metadata.tags) {
      preset.metadata.tags.forEach(tag => {
        if (!this.tags.has(tag)) {
          this.tags.set(tag, new Set());
        }
        this.tags.get(tag).add(preset.name);
      });
    }
  }

  findByTag(...tags) {
    if (tags.length === 0) return this.presets;

    // Intersection of all tag sets
    const sets = tags.map(tag => this.tags.get(tag) || new Set());
    const intersection = sets.reduce((a, b) =>
      new Set([...a].filter(x => b.has(x)))
    );

    return this.presets.filter(p => intersection.has(p.name));
  }

  findByCategory(category) {
    return this.presets.filter(p => p.metadata.category === category);
  }

  search(query) {
    const lower = query.toLowerCase();
    return this.presets.filter(p =>
      p.name.toLowerCase().includes(lower) ||
      p.metadata.tags?.some(t => t.toLowerCase().includes(lower))
    );
  }
}
`\`\`

### Favorites & Ratings

`\`\`javascript
class UserPresetLibrary extends PresetManager {
  constructor() {
    super();
    this.favorites = new Set();
    this.ratings = new Map(); // preset name -> 1-5
    this.usage = new Map(); // preset name -> usage count
  }

  toggleFavorite(presetName) {
    if (this.favorites.has(presetName)) {
      this.favorites.delete(presetName);
    } else {
      this.favorites.add(presetName);
    }
  }

  rate(presetName, rating) {
    if (rating < 1 || rating > 5) {
      throw new Error('Rating must be 1-5');
    }
    this.ratings.set(presetName, rating);
  }

  trackUsage(presetName) {
    const count = this.usage.get(presetName) || 0;
    this.usage.set(presetName, count + 1);
  }

  getMostUsed(limit = 10) {
    return [...this.usage.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([name]) => this.presets.find(p => p.name === name));
  }

  getTopRated(limit = 10) {
    return [...this.ratings.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([name]) => this.presets.find(p => p.name === name));
  }
}
`\`\`

---

## Preset Variations

### Context-Aware Presets

`\`\`javascript
class ContextAwarePreset extends HybridPreset {
  constructor(name, metadata = {}) {
    super(name, metadata);
    this.variations = {
      track: [],
      bus: [],
      master: []
    };
  }

  // Scale preset based on context
  forContext(context) {
    const scaledPreset = new HybridPreset(
      `${this.name} (${context})`,
      { ...this.metadata, context }
    );

    const scaleFactors = {
      track: 1.0,
      bus: 0.5,
      master: 0.25
    };

    const scale = scaleFactors[context];

    this.bands.forEach(band => {
      if (band.source.type === 'archetype') {
        scaledPreset.addArchetype(band.bandId, band.source.name);
      } else {
        const scaled = {
          ...band.source.settings,
          gainDb: band.source.settings.gainDb * scale
        };
        scaledPreset.addCustom(band.bandId, scaled);
      }
    });

    return scaledPreset;
  }
}
`\`\`

### A/B Comparison

`\`\`javascript
class PresetComparison {
  constructor(presetA, presetB) {
    this.presetA = presetA;
    this.presetB = presetB;
    this.currentState = 'A';
  }

  toggle() {
    if (this.currentState === 'A') {
      this.presetB.apply();
      this.currentState = 'B';
    } else {
      this.presetA.apply();
      this.currentState = 'A';
    }
  }

  getDifferences() {
    const diffs = [];

    for (let bandId = 1; bandId <= 7; bandId++) {
      const bandA = this.presetA.bands.find(b => b.bandId === bandId);
      const bandB = this.presetB.bands.find(b => b.bandId === bandId);

      if (!bandA && !bandB) continue;

      if (!bandA || !bandB) {
        diffs.push({
          bandId,
          type: !bandA ? 'added' : 'removed',
          preset: !bandA ? 'B' : 'A'
        });
      } else {
        const settingsA = bandA.source.settings || findArchetype(bandId, bandA.source.name);
        const settingsB = bandB.source.settings || findArchetype(bandId, bandB.source.name);

        const changes = {};
        ['type', 'freqHz', 'bwPercent', 'gainDb'].forEach(key => {
          if (settingsA[key] !== settingsB[key]) {
            changes[key] = { A: settingsA[key], B: settingsB[key] };
          }
        });

        if (Object.keys(changes).length > 0) {
          diffs.push({ bandId, type: 'modified', changes });
        }
      }
    }

    return diffs;
  }
}
`\`\`

---

## Import/Export

### Preset Interchange Format

`\`\`json
{
  "format": "fruity-parametric-eq-2-preset",
  "formatVersion": "1.0",
  "preset": {
    "name": "Vocal Polish",
    "author": "JaZeR",
    "created": "2026-01-03T12:00:00Z",
    "modified": "2026-01-03T12:00:00Z",
    "category": "Vocal",
    "tags": ["clarity", "air"],
    "bands": [...]
  }
}
`\`\`

### Export Handler

`\`\`javascript
class PresetIO {
  static export(preset) {
    return JSON.stringify({
      format: "fruity-parametric-eq-2-preset",
      formatVersion: "1.0",
      preset: preset.toJSON()
    }, null, 2);
  }

  static import(jsonString) {
    const data = JSON.parse(jsonString);

    // Validate format
    if (data.format !== "fruity-parametric-eq-2-preset") {
      throw new Error('Unknown preset format');
    }

    // Version compatibility check
    if (data.formatVersion !== "1.0") {
      console.warn(`Preset version ${data.formatVersion} may need migration`);
    }

    return HybridPreset.fromJSON(data.preset);
  }

  static exportToFile(preset, filename) {
    const json = PresetIO.export(preset);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
  }
}
`\`\`

---

## Best Practices

1. **Version Your Presets** - Include format version for future compatibility
2. **Tag Liberally** - More tags = better discoverability
3. **Track Provenance** - Note which archetypes were used
4. **Support Both Patterns** - Archetype references + custom settings
5. **Validate on Load** - Check against schema and band definitions
6. **Scale by Context** - Different gain ranges for track/bus/master
7. **Enable A/B Testing** - Let users compare presets easily
8. **Track Usage** - Surface most-used presets

---

## Next Steps

- See `assistant-mode-implementation.md` for auto-generating presets
- See `../api-specifications/data-model-overview.md` for data structures
- See `json-workflow.md` for data integration patterns

```

---

## FILE: 04-Reference\technical-docs\automation-midi-mapping.md

```markdown
# Automation & MIDI Mapping

Fruity Parametric EQ 2 exposes all band parameters to FL Studio's internal automation system. This allows for dynamic EQ changes, frequency sweeps, and creative effects.

## 🎛️ Standard Parameter Map

Each of the 7 Bands has 3 primary automatable controls. The parameter names in FL Studio's "Browse Parameters" list follow this convention:

### Per-Band Controls

| Parameter          | Description             | Range                     | Note                |
| ------------------ | ----------------------- | ------------------------- | ------------------- |
| **Band [X] freq**  | Frequency Center/Cutoff | 20 Hz - 20 kHz            | Logarithmic scale   |
| **Band [X] width** | Bandwidth / Q           | 0% (Wide) - 100% (Narrow) | **Inverted Scale!** |
| **Band [X] gain**  | Gain / Amplitude        | -18 dB to +18 dB          | Center = 0 dB       |

_(Where [X] is the Band Number 1-7)_

---

## 🎨 Creative Workflows

### 1. The "Diving Filter" (Build-ups)
**Effect:** Typical EDM "underwater" transition.
1.  **Band 7:** Set to **Low Pass**.
2.  **Automation:** Create clip for **Band 7 Freq**.
3.  **Curve:** Start at 20 kHz (Open), drop to 200 Hz (Closed) over 4 bars, then snap back up.
4.  **Resonance:** Increase Band 7 **Width/Q** to 60-70% for a resonant "laser" sweep sound.

### 2. The "Telephone" Dial
**Effect:** Lo-fi radio voice moving through stations.
1.  **Band 1:** High Pass @ 500 Hz.
2.  **Band 7:** Low Pass @ 3 kHz.
3.  **Band 4 (Peaking):** Set to +12dB Gain, Narrow Q (80%).
4.  **Automation:** Automate **Band 4 Freq**.
5.  **Result:** As Band 4 sweeps, it catches different harmonics, sounding like tuning an AM radio.

### 3. The "Wah-Wah" Guitar
**Effect:** Emulates a wah pedal.
1.  **Band 5:** Bell Curve, +12dB Gain, Medium Q.
2.  **LFO Tool:** Link **Band 5 Freq** to an **LFO** (inside Peak Controller or Automation Clip LFO settings).
3.  **Speed:** Set LFO speed to 1/4 or 1/8 beat.
4.  **Range:** Restrict the sweep to 500 Hz - 2 kHz range.

---

## 🎹 MIDI Controller Mapping

To map a physical knob to a parameter:

1.  Right-click the knob in the plugin UI.
2.  Select **"Link to controller..."**
3.  Move the physical knob on your MIDI controller.
4.  The link is now established.

### Recommended Mapping Strategy (8-Knob Controller)

If you have a standard 8-knob MIDI controller, try this "Performance EQ" layout:

- **Knob 1:** Band 1 Freq (High Pass Filter Sweep)
- **Knob 2:** Band 7 Freq (Low Pass / High Shelf Sweep)
- **Knob 3-7:** Gain of Bands 2-6 (Tonal shaping)
- **Knob 8:** Main Output Level

---

## 🤖 Automation Tips

### Drawing Smooth Sweeps
When automating **Frequency**, use FL Studio's "Slide" curve type in the Automation Clip editor. This prevents "zipper noise" caused by stepping through frequencies too quickly.

### Discrete Value Automation
For **Band Type** (Bell/Shelf/Cut), automation is possible but stepped:
- 0-14%: Low Pass
- 15-28%: Band Pass
- 29-42%: High Pass
- ...and so on.
```

---

## FILE: 04-Reference\technical-docs\dsp-characteristics.md

```markdown
# DSP Characteristics

Understanding the Digital Signal Processing (DSP) behavior of Fruity Parametric EQ 2 is critical for mastering and high-fidelity mixing.

## 🧠 Algorithm Modes

Modern versions of Fruity Parametric EQ 2 (FL Studio 20.8+) feature distinct processing modes.

### 1. IIR Mode (Standard / Default)
*   **Type:** Infinite Impulse Response
*   **Phase Behavior:** Minimum Phase.
*   **Characteristics:** Analog-like behavior. Introduces phase rotation (phase shift) that varies with frequency, especially around steep filter cutoffs.
*   **Latency:** Near Zero.
*   **Pre-Ringing:** None.
*   **Best For:**
    *   **Creative Mixing:** Sculpting tone on individual channels.
    *   **Tracking:** Low latency recording.
    *   **Punchy Sources:** Drums and percussion (preserves transient impact).

### 2. LIN Mode (Linear Phase)
*   **Type:** FFT-based Linear Phase
*   **Phase Behavior:** Linear Phase (Phase shift is constant/zero across the spectrum).
*   **Characteristics:** The timing relationships between all frequencies are preserved perfectly.
*   **Latency:** High (Compensated by FL Studio's PDC, but not suitable for live tracking).
*   **Pre-Ringing:** Possible on sharp transients (smearing of the attack).
*   **Best For:**
    *   **Mastering:** Transparent tonal balance adjustments.
    *   **Parallel Processing:** Avoiding phase cancellation when blending a dry signal with an EQ'd wet signal.
    *   **Multi-Mic Arrays:** EQing a drum bus where preserving the phase relationship between overheads and close mics is critical.

---

## 💎 HQ Mode (High Quality)

The **HQ** button affects the filter curve accuracy near the Nyquist frequency (20 kHz).

### HQ Off (Standard)
*   **Behavior:** Standard digital filter calculation.
*   **Side Effect:** **Frequency Cramping.** Bell curves near 15-20kHz may become asymmetrical or "squashed" as they approach the digital ceiling.
*   **CPU:** Lowest.

### HQ On (Oversampling)
*   **Behavior:** Oversamples the audio processing.
*   **Benefit:** **Decramping.** Bell curves remain symmetrical and mathematically ideal up to 20kHz.
*   **Cost:** Slightly higher CPU usage.
*   **Recommendation:** Always leave **ON** for mixing and mastering unless running on extremely limited hardware.

---

## 📉 Phase Response Summary

| Mode | HQ | Phase Shift | Pre-Ringing | Latency | Use Case |
|------|----|-------------|-------------|---------|----------|
| **Std** | Off | Dynamic (Min Phase) | No | ~0ms | Drafting / Live |
| **Std** | On | Dynamic (Min Phase) | No | ~0ms | Mixing (Default) |
| **LIN** | On/Off | None (Linear) | Yes | High | Mastering / Parallel |

---

## ⚡ CPU & Performance Optimization

*   **Band Tokens:** Disabling a band (turning the light off) completely bypasses its processing code, saving CPU.
*   **Visualization:** The specific "High Precision" monitor setting (in the plugin options menu, not the front panel) consumes more GPU/CPU than the audio processing itself. If UI lag occurs, reduce the visual precision, not the audio quality.
```

---

## FILE: 04-Reference\technical-docs\mid-side-setup.md

```markdown
# Mid / Side Processing (The Patcher Method)

Standard Parametric EQ 2 is a stereo plugin. However, FL Studio's **Patcher** allows us to unlock powerful Mid/Side capabilities.

## ❓ What is Mid/Side?

- **Mid:** The center information (Mono). Where the Kick, Snare, Bass, and Lead Vocal usually sit.
- **Side:** The stereo difference (Left - Right). Where Reverbs, Wide Synths, and Double-Tracked Guitars sit.

## 🛠️ The Setup

1.  Open **Patcher** as an effect slot.
2.  Inside Patcher, add **Fruity Stereo Shaper**.
3.  Right-click Stereo Shaper -> **Presets** -> **"Mid - Side Splitter"**.
    - _Note: This splits audio into two outputs: Send 1 (Mid) and Send 2 (Side)._
4.  Add **TWO** instances of **Fruity Parametric EQ 2**.
    - Rename one "EQ - MID".
    - Rename one "EQ - SIDE".
5.  Connect:
    - Stereo Shaper (Send 1) -> EQ - MID -> FL Studio Output.
    - Stereo Shaper (Send 2) -> EQ - SIDE -> FL Studio Output.

## 🚀 Workflows

### 1. Mono the Low End (Mastering Staple)

- **Target:** EQ - SIDE
- **Action:** **High Pass** (Band 1) at **120 Hz**.
- **Result:** Removes all stereo information from the bass frequencies. This gives you a tight, focused low end that translates perfectly to club systems.

### 2. Wide Air

- **Target:** EQ - SIDE
- **Action:** **High Shelf** (Band 7) boost at **10 kHz**.
- **Result:** Makes the mix sound "wider" and airier without making the center (Kick/Snare) harsh.

### 3. De-Clutter Vocals

- **Target:** EQ - MID
- **Action:** Cut **500 Hz** (Band 3) slightly.
- **Result:** Clears up space in the center for the lead vocal, while keeping the wide guitars thick.

```

---

## FILE: 04-Reference\technical-docs\mid-side-vs-stereo-phase.md

```markdown
# Mid/Side vs. Stereo Phase (Mono Compatibility)

When you EQ a sound, you aren't just changing volume; you are shifting **Phase**. When working in stereo, aggressive EQ can destroy your mono compatibility.

## 🌊 The Phase Problem

EQ works by delaying specific frequencies. If you EQ the Left channel differently than the Right channel (or process the Side signal aggressively), you change how those channels sum back to Mono.

### Symptoms of Phase Issues:
- **Thinning out:** The bass disappears when played on a phone or mono speaker.
- **Hollow sound:** Vocals lose their center focus.
- **Wandering image:** The sound seems to pull to one side at certain frequencies.

---

## 🛠️ Mono Compatibility Check

Always check your EQ moves in Mono.

1.  **The Mixer Toggle:** Use the "Stereo Separation" knob on the FL Studio Mixer track. Turn it all the way to the **Right** (100% Merged) to hear your mix in mono.
2.  **The Test:**
    - EQ your vocal in Stereo.
    - Toggle the mixer to Mono.
    - If the vocal disappears or sounds like it's in a tunnel, your EQ is causing **destructive interference**.

---

## ⚖️ Best Practices for Safe EQ

### 1. High Pass the Sides
The most important rule in modern production: **Keep the low-end Mono.**
- Use the [Patcher Mid/Side Setup](./mid-side-setup.md).
- Apply a **High Pass (Band 1)** to the **SIDE** EQ at 100-150 Hz.
- This ensures that kick drums and bass remain rock-solid in the center, preventing "muddy" stereo imaging.

### 2. Avoid Narrow Boosts on the Sides
- Narrow boosts (high Q/BW%) in the stereo field can cause "phasiness."
- If you want to add brightness to the sides, use a **Wide High Shelf (Band 7)**.
- Wide moves are more phase-coherent and sound more natural.

### 3. Use Linear Phase (LIN) for Mastering
If you are doing surgical EQ on the Master bus:
- Enable **LIN** mode in PEQ2.
- Linear Phase EQ ensures that the phase relationship between L/R remains constant, even with aggressive moves.
- _Note: Use only for mastering, as it introduces latency._

---

## 📏 Using the Vectorscope (Wave Candy)

To truly see what your EQ is doing to your stereo image, use **Wave Candy** (Vectorscope mode) after your EQ.

- **Vertical Line:** Perfect Mono (No phase issues).
- **Horizontal Spread:** Wide Stereo.
- **Blurred "Cloud":** Good Stereo balance.
- **Anti-Phase (Out of bounds):** Your EQ is too aggressive; this will disappear in Mono.

---

## 🎯 The "Mono-Safe" Workflow

1.  **EQ for Tone** in Stereo.
2.  **Switch Mixer to Mono.**
3.  **Adjust EQ** until the sound is still clear and present in Mono.
4.  **Switch back to Stereo.**
5.  **Enjoy** a mix that sounds huge on speakers but clear on phones.

```

---

## FILE: 04-Reference\technical-docs\parameter-specifications.md

```markdown
# Parameter Specifications

Complete technical specifications for all parameters in Fruity Parametric EQ 2.

## Global Parameters

### Plugin Version
- **Current:** 1.0 (as of data model creation)
- **Compatibility:** FL Studio 20+

### Band Count
- **Fixed:** 7 bands
- **Not user-configurable** (unlike some other parametric EQs)

---

## Per-Band Parameters

### Band Enable/Bypass
- **Type:** Boolean
- **Default:** Band 1 often enabled by default, others disabled
- **Purpose:** Turn individual bands on/off without losing settings

---

### Frequency (Hz)

**Range:** 20 Hz - 20,000 Hz

**Control Type:** Continuous (logarithmic scale)

**Precision:** 0.1 Hz display, internal higher precision

**Typical Ranges by Band:**
`\`\`
Band 1: 20-120 Hz
Band 2: 140-320 Hz
Band 3: 300-550 Hz
Band 4: 600-1200 Hz
Band 5: 1800-3200 Hz
Band 6: 3500-6500 Hz
Band 7: 8000-16000 Hz
`\`\`

**Anchor Targets (Common Presets):**
`\`\`
Band 1: [30, 60, 80, 100, 120]
Band 2: [150, 200, 250, 300]
Band 3: [300, 350, 420, 500]
Band 4: [700, 850, 1000]
Band 5: [2000, 2500, 3000]
Band 6: [4000, 5000, 6000]
Band 7: [10000, 12000, 14000, 16000]
`\`\`

**UI Behavior:**
- Click + drag to adjust continuously
- Double-click to enter numeric value
- Right-click for precise typing
- Often linked to visual spectrum analyzer

---

### Gain (dB)

**Range:** -18 dB to +18 dB (typical)

**Default:** 0 dB (unity/no change)

**Precision:** 0.1 dB steps

**Safe Maximums by Context:**
`\`\`
Track Level:  ±6.0 dB (recommended maximum)
Bus Level:    ±3.0 dB (recommended maximum)
Master Level: ±1.5 dB (recommended maximum)
`\`\`

**Important Notes:**
- For filter types (high-pass, low-pass), gain is fixed at 0 dB
- Some plugins limit gain range to ±12 dB
- Extreme values (>±12 dB) usually indicate mixing problems elsewhere

**UI Behavior:**
- Vertical slider or knob
- Center position = 0 dB
- Visual feedback typically shows positive (blue/green) vs negative (red/orange)

**Typical Values:**
`\`\`
Subtle adjustment:    ±0.5 to ±1.5 dB
Standard correction:  ±1.5 to ±3 dB
Aggressive move:      ±3 to ±6 dB
Extreme (use rarely): ±6 to ±12 dB
`\`\`

---

### Bandwidth (BW%)

**Range:** 0% - 100%

**Default:** Varies by band, typically 50%

**IMPORTANT: FL Studio uses INVERTED scale:**
`\`\`
0%   = Widest (Q ≈ 0.3, affects ~3-4 octaves)
25%  = Wide (Q ≈ 0.7, affects ~2 octaves)
50%  = Medium (Q ≈ 1.4, affects ~1 octave)
75%  = Narrow (Q ≈ 3.0, affects ~0.5 octaves)
100% = Narrowest (Q ≈ 10+, surgical precision)
`\`\`

**Relationship to Q:**
- Lower BW% = Lower Q = Wider curve
- Higher BW% = Higher Q = Narrower curve
- This is opposite to many other EQs!

**Recommended Ranges by Band:**
`\`\`
Band 1 (Sub):
  - Wide:   10-30%
  - Medium: 30-50%
  - Narrow: 50-70%
  - Default: 25%

Band 2 (Warmth):
  - Wide:   20-40%
  - Medium: 40-60%
  - Narrow: 60-80%
  - Default: 35%

Band 3 (Boxiness):
  - Wide:   25-45%
  - Medium: 45-65%
  - Narrow: 65-85%
  - Default: 50%

Band 4 (Honk):
  - Wide:   30-50%
  - Medium: 50-70%
  - Narrow: 70-90%
  - Default: 60%

Band 5 (Presence):
  - Wide:   25-45%
  - Medium: 45-65%
  - Narrow: 65-85%
  - Default: 50%

Band 6 (Detail):
  - Wide:   30-50%
  - Medium: 50-70%
  - Narrow: 70-90%
  - Default: 60%

Band 7 (Air):
  - Wide:   10-30%
  - Medium: 30-50%
  - Narrow: 50-70%
  - Default: 20%
`\`\`

**Usage Guidelines:**
- **Wide (low %):** Musical tonal shaping, gentle corrections
- **Medium:** Standard corrective EQ, most common
- **Narrow (high %):** Surgical removal of specific resonances, notches

**UI Behavior:**
- Knob or slider control
- Visual representation on frequency curve
- Width of bell/shelf curve changes in real-time

---

### Filter Type

**Available Types:**
1. Bell (Parametric)
2. High-Pass Filter
3. Low-Pass Filter
4. High-Shelf
5. Low-Shelf
6. Notch

**Type Availability by Band:**
`\`\`
Band 1 (Purple):  high_pass, low_shelf, bell
Band 2 (Pink):    high_pass, low_shelf, bell
Band 3 (Orange):  low_shelf, bell, notch
Band 4 (Yellow):  bell, notch
Band 5 (Green):   bell, high_shelf, notch
Band 6 (Teal):    bell, high_shelf, low_pass, notch
Band 7 (Blue):    high_shelf, low_pass, bell
`\`\`

**Default Types by Band:**
`\`\`
Band 1: high_pass
Band 2: bell
Band 3: bell
Band 4: bell
Band 5: bell
Band 6: bell
Band 7: high_shelf
`\`\`

---

## Filter Type Specifications

### Bell (Parametric)

**Parameters:**
- Frequency: 20 Hz - 20 kHz
- Gain: -18 dB to +18 dB
- Bandwidth: 0-100%

**Characteristics:**
- Symmetrical boost/cut around center frequency
- Width controlled by bandwidth
- Most versatile filter type

**Q to BW% relationship:**
`\`\`
BW%  | Approx Q | Octave Width
-----|----------|-------------
0%   | 0.3      | 4 octaves
10%  | 0.5      | 3 octaves
25%  | 0.7      | 2 octaves
50%  | 1.4      | 1 octave
75%  | 3.0      | 0.5 octaves
90%  | 7.0      | 0.2 octaves
100% | 10+      | 0.1 octaves
`\`\`

**Phase Response:** Introduces phase shift, especially with high Q

---

### High-Pass Filter (HPF)

**Parameters:**
- Frequency: 20 Hz - 20 kHz (cutoff point)
- Gain: Fixed at 0 dB (not adjustable)
- Bandwidth: Affects slope steepness

**Characteristics:**
- Removes frequencies below cutoff
- Slope: Typically 12 dB/octave or 24 dB/octave
- Gentle roll-off (not brick wall)

**Common Uses:**
- Remove sub-bass rumble
- Clean up headroom
- Reduce low-end buildup

**Typical Settings:**
`\`\`
Vocals:           80-100 Hz
Acoustic Guitar:  80-100 Hz
Electric Guitar:  100-120 Hz
Snare:            60-80 Hz
Cymbals:          200-400 Hz
Synth Pads:       80-120 Hz (unless bass pad)
`\`\`

---

### Low-Pass Filter (LPF)

**Parameters:**
- Frequency: 20 Hz - 20 kHz (cutoff point)
- Gain: Fixed at 0 dB
- Bandwidth: Affects slope steepness

**Characteristics:**
- Removes frequencies above cutoff
- Slope: Typically 12 dB/octave or 24 dB/octave
- Creates "darker" or "vintage" sound

**Common Uses:**
- Remove high-frequency noise
- Vintage/lo-fi effect
- Tame harsh synths
- Reduce cymbal bleed

**Typical Settings:**
`\`\`
Bass Guitar:      5-8 kHz
Kick Drum:        8-10 kHz
Sub-Bass Synth:   200-400 Hz
Vintage Effect:   8-12 kHz
`\`\`

---

### High-Shelf

**Parameters:**
- Frequency: 20 Hz - 20 kHz (transition point)
- Gain: -18 dB to +18 dB
- Bandwidth: Affects transition slope (wider = gentler)

**Characteristics:**
- Boosts/cuts all frequencies above transition point
- Gentler than bell at high frequencies
- Most common for "air" adjustments

**Common Uses:**
- Add/remove air and sparkle
- Overall brightness adjustment
- Final polish

**Typical Settings:**
`\`\`
Air Boost:        10-12 kHz, +2 to +3 dB, wide BW
Reduce Hiss:      12 kHz, -1.5 to -2 dB, wide BW
Detail Boost:     8 kHz, +1 to +2 dB, medium BW
`\`\`

---

### Low-Shelf

**Parameters:**
- Frequency: 20 Hz - 20 kHz (transition point)
- Gain: -18 dB to +18 dB
- Bandwidth: Affects transition slope

**Characteristics:**
- Boosts/cuts all frequencies below transition point
- Gentler than bell at low frequencies
- Good for broad bass adjustments

**Common Uses:**
- Overall bass adjustment
- Warmth control
- Low-end clarity

**Typical Settings:**
`\`\`
Bass Boost:       100 Hz, +2 to +4 dB, wide BW
Mud Reduction:    200 Hz, -2 to -3 dB, wide BW
Warmth:           120 Hz, +1 to +2 dB, wide BW
`\`\`

---

### Notch

**Parameters:**
- Frequency: 20 Hz - 20 kHz
- Gain: Typically fixed at deep cut (-18 to -∞ dB)
- Bandwidth: Very narrow (typically 90-100%)

**Characteristics:**
- Extremely narrow cut
- Near-total removal at center frequency
- Minimal effect on adjacent frequencies

**Common Uses:**
- Remove feedback frequencies
- Eliminate specific resonances
- Surgical problem-solving

**Typical Settings:**
`\`\`
Room Resonance:   380-420 Hz, notch
Feedback:         Sweep to find, then notch
Specific Buzz:    Find exact frequency, notch
`\`\`

**Warning:** Overuse can sound unnatural. Use sparingly.

---

## Output Parameters

### Output Gain
- **Range:** -∞ dB to +18 dB
- **Default:** 0 dB
- **Purpose:** Compensate for overall level changes from EQ

**Best Practice:** Adjust output gain to match input level (unity gain) so you're hearing tonal changes, not volume changes.

### Bypass
- **Type:** Boolean
- **Purpose:** A/B comparison
- **Recommended:** Constantly toggle to verify improvements

---

## Visual Display Parameters

### Frequency Spectrum Analyzer
- **Range:** 20 Hz - 20 kHz
- **Resolution:** Adjustable (low/medium/high)
- **Purpose:** Visualize frequency content before EQ

### EQ Curve Display
- **Shows:** Combined effect of all active bands
- **Interactive:** Click curve to adjust parameters
- **Helpful for:** Understanding cumulative effect

---

## Performance Specifications

### CPU Usage
- **Per band:** ~1-2% CPU on modern systems
- **All 7 bands:** ~5-10% CPU
- **Optimization:** Disable unused bands to save CPU

### Latency
- **Standard mode:** Minimal latency (<1ms)
- **Linear phase mode (if available):** Higher latency (10-50ms)

### Sample Rate Support
- **Minimum:** 44.1 kHz
- **Maximum:** 192 kHz
- **Recommended:** Match project sample rate

---

## Automation Capabilities

### Automatable Parameters
All per-band parameters can be automated:
- Frequency
- Gain
- Bandwidth
- Filter Type (stepped parameter)
- Enable/Bypass

### Automation Ranges
Same as manual control ranges listed above

### Common Automation Uses
- **Frequency sweep:** Creative filter effect
- **Gain automation:** Dynamic EQ behavior
- **Bypass automation:** Drop EQ during specific sections

---

## Preset System

### Preset Structure
`\`\`json
{
  "name": "Preset Name",
  "version": "1.0",
  "bands": [
    {
      "bandId": 1,
      "enabled": true,
      "type": "high_pass",
      "freqHz": 80,
      "bwPercent": 25,
      "gainDb": 0
    },
    // ... more bands
  ]
}
`\`\`

### Preset Compatibility
- FL Studio native .fst format
- Custom JSON format (this project)
- May support VST preset standard

---

## Limitations and Constraints

### Per-Band Limitations
`\`\`
Band 1: Cannot use high_shelf, low_pass
Band 2: Cannot use high_shelf, low_pass
Band 3: Cannot use high_pass, low_pass
Band 4: Cannot use high_pass, low_pass, high_shelf, low_shelf
Band 5: Cannot use high_pass, low_pass, low_shelf
Band 6: Cannot use high_pass, low_shelf
Band 7: Cannot use low_shelf, high_pass
`\`\`

### Global Limitations
- Maximum 7 simultaneous bands
- Frequency range: 20 Hz - 20 kHz
- No mid-side processing (unless plugin has M/S mode)
- No dynamic EQ (unless separate mode available)

---

## Comparison to Other EQ Standards

### vs. Fabfilter Pro-Q
- Pro-Q: Up to 24 bands, FL Parametric EQ 2: Fixed 7 bands
- Pro-Q: Linear phase option, FL: Minimal phase (typically)
- Pro-Q: Dynamic EQ, FL: Static

### vs. Stock DAW EQs
- More bands than many stock EQs (often 4-5)
- Similar parameter ranges
- Comparable quality

### Q Factor Comparison
Other EQs often use Q instead of BW%:
`\`\`
FL BW% | Q Factor | Common EQ Display
-------|----------|------------------
0%     | 0.3      | "Very Wide"
25%    | 0.7      | "Wide" (Q < 1)
50%    | 1.4      | "Medium" (Q ≈ 1-2)
75%    | 3.0      | "Narrow" (Q > 2)
100%   | 10       | "Surgical" (Q > 5)
`\`\`

---

## Best Practices

1. **Always use output gain compensation** for fair A/B comparison
2. **Start with medium bandwidth (50%)**, adjust from there
3. **Use appropriate filter types** for each band
4. **Respect safe gain maximums** by context
5. **High-pass almost everything** except kick/bass
6. **Cut more than you boost** for natural results
7. **Use narrow BW for problems, wide BW for tone shaping**

---

## Next Steps

- See `dsp-characteristics.md` for technical DSP details
- See `automation-midi-mapping.md` for automation specs
- See `../integration-guides/` for implementation patterns

```

---

## FILE: 04-Reference\technical-docs\visual-analysis-guide.md

```markdown
# Visual Analysis Guide: Reading the Heatmap

Fruity Parametric EQ 2 is famous for its "Spectral Analysis" visualization. Understanding this display is the key to surgical mixing.

## 🌈 The Colors (Heatmap Mode)

The heatmap shows intensity over time.

### 🔴 Red / Orange (High Intensity)
*   **Meaning:** Constant, sustained energy.
*   **Sources:** Bass notes, sustained synth chords, vocal fundamentals, standing resonances.
*   **Action:** If you see a **thin red horizontal line** that persists even when the music changes, that is a **Resonance**. Sweep a narrow bell cut to remove it.

### 🟣 Purple / Blue (Low Intensity)
*   **Meaning:** Transient, fleeting energy.
*   **Sources:** Kick drum click, snare snap, vocal sibilance ("sss"), hi-hats.
*   **Action:** These are usually "good" dynamic details. Be careful not to EQ these out unless they are harsh.

## 📊 Visualization Modes

### 1. Histogram (The "Waterfall")
*   **What it is:** Frequencies flow downwards like a waterfall.
*   **Best for:** Seeing the "history" of the sound.
*   **Use Case:** Spotting a resonance that rings out *after* a snare hit.

### 2. Heatmap (The "Line")
*   **What it is:** A 2D intensity gradient on the frequency graph itself.
*   **Best for:** Real-time surgical work.
*   **Use Case:** Aligning EQ bands directly over the "hot spots" (Red zones).

## 🎛️ Analysis Controls

*   **LIN (Linear)**: Displays frequency on a linear scale. (Rarely used for music, useful for scientific analysis).
*   **LOG (Logarithmic)**: **Default.** Matches how human ears hear pitch. Low frequencies are spread out; high frequencies are compressed.
*   **Precision**: Adjusted in the plugin options. Higher precision = slower reaction time but more accurate frequency lines.

## 🕵️‍♂️ Detective Work: Finding Issues

### The "Whistle" Search
1.  Look for a stationary **bright red line** in the heatmap.
2.  Enable a band, set it to **Peaking (Bell)**.
3.  Set **Bandwidth (BW)** to very narrow (75-90%).
4.  Boost the Gain (+9dB).
5.  Sweep the frequency left/right until the whistle becomes unbearable.
6.  **Invert** the Gain (cut to -6dB or more) to kill the resonance.

### The "Mud" Search
1.  Look at the **200Hz - 400Hz** region.
2.  If you see a constant "cloud" of orange/red that never disappears, your mix is likely muddy.
3.  Use a wide bell cut (-3dB) in this region on instruments that don't need it (synths, guitars) to clear space for the snare/vocals.

```

---

## FILE: 04-Reference\terminology-glossary\eq-terminology.md

```markdown
# EQ Terminology Glossary

Complete reference for parametric EQ terms and concepts.

## Core EQ Parameters

### Frequency (Hz)
**What it is:** The pitch or tone you're affecting, measured in Hertz (Hz).

**Range:** 20 Hz (sub-bass) to 20,000 Hz / 20 kHz (upper treble)

**How to think about it:**
- Low numbers (20-200 Hz) = Bass, rumble, thump
- Mid numbers (200-5000 Hz) = Body, presence, clarity
- High numbers (5k-20k Hz) = Brightness, air, sparkle

**In this project:**
- Each band has a `typicalRange` defining its frequency coverage
- `anchorTargets` provide common preset frequencies

---

### Gain (dB)
**What it is:** How much you boost (+) or cut (-) at the selected frequency.

**Measured in:** Decibels (dB)

**Typical range:** ±12 dB, but usually ±6 dB or less

**How to think about it:**
- +3 dB = Roughly doubling the perceived loudness
- -3 dB = Roughly halving the perceived loudness
- ±1-2 dB = Subtle, musical changes
- ±6 dB = Aggressive, noticeable changes

**In this project:**
- Safe maximums vary by context:
  - Track: ±6 dB
  - Bus: ±3 dB
  - Master: ±1.5 dB

**Important:** Cuts are often safer and more effective than boosts.

---

### Bandwidth / Q
**What it is:** How wide or narrow the frequency range affected by your boost/cut.

**Two ways to express it:**
1. **Q Value:** Higher Q = narrower (surgical), Lower Q = wider (gentle)
2. **Bandwidth %:** In FL Studio and this project

**FL Studio convention (INVERTED):**
- 0% BW = Widest (affects ~3-4 octaves)
- 25% BW = Wide (affects ~2 octaves)
- 50% BW = Medium (affects ~1 octave)
- 75% BW = Narrow (affects ~0.5 octaves)
- 100% BW = Narrowest (surgical, pinpoint)

**When to use:**
- **Wide (0-40%):** Gentle tonal shaping, musical changes
- **Medium (40-60%):** Standard corrective EQ
- **Narrow (60-100%):** Surgical removal of specific resonances

**In this project:**
- Each band includes `wide`, `medium`, `narrow` ranges
- `default` suggests a starting point

---

## Filter Types

### Bell (Parametric)
**Shape:** Bell curve centered at frequency

**Parameters:** Frequency, Gain, Bandwidth

**Best for:** Boosting or cutting specific frequency ranges

**Example use:** +2 dB @ 2.5 kHz for vocal presence

**Available on:** All 7 bands in this project

---

### High-Pass Filter (HPF)
**Shape:** Removes frequencies below the cutoff point

**Parameters:** Frequency, (Bandwidth/Slope)

**Gain:** Always 0 (it's a filter, not a boost/cut)

**Best for:** Removing rumble, clearing headroom

**Example use:** HPF @ 80 Hz on vocals

**Available on:** Bands 1, 2 in this project

**Tip:** Start high and sweep down until you hear the sound lose body, then back off slightly.

---

### Low-Pass Filter (LPF)
**Shape:** Removes frequencies above the cutoff point

**Parameters:** Frequency, (Bandwidth/Slope)

**Gain:** Always 0

**Best for:** Removing harshness, darkening sounds

**Example use:** LPF @ 8 kHz on synth pads

**Available on:** Bands 6, 7 in this project

---

### High-Shelf
**Shape:** Boosts or cuts all frequencies above the cutoff

**Parameters:** Frequency, Gain, (Bandwidth affects transition slope)

**Best for:** Adding or removing air/brightness

**Example use:** +3 dB shelf @ 10 kHz for modern brightness

**Available on:** Bands 5, 6, 7 in this project

**Tip:** Wide bandwidth for musical shaping, narrower for specific tonal adjustments.

---

### Low-Shelf
**Shape:** Boosts or cuts all frequencies below the cutoff

**Parameters:** Frequency, Gain, (Bandwidth affects transition slope)

**Best for:** Adding or removing bass/warmth

**Example use:** -2 dB shelf @ 200 Hz to remove muddiness

**Available on:** Bands 1, 2, 3 in this project

---

### Notch
**Shape:** Very narrow cut, almost surgical

**Parameters:** Frequency, (Bandwidth extremely narrow), Gain (negative)

**Best for:** Removing specific resonances, feedback frequencies

**Example use:** Notch @ 420 Hz to remove room resonance

**Available on:** Bands 3, 4, 5, 6 in this project

**Tip:** Use sparingly - notches can sound unnatural if overused.

---

## EQ Concepts

### Cutting vs Boosting

**The Principle:** "Cut to solve problems, boost to enhance"

**Why cuts are often better:**
- More headroom-friendly
- More natural sounding
- Less risk of phase issues
- Easier to hear improvements

**When to boost:**
- Adding character or presence
- Creative sound design
- Small adjustments for polish

**Example:**
- ❌ Problem: Vocal lacks brightness → Boost 10 kHz
- ✅ Better: Cut 200-300 Hz (mud) + cut 800 Hz (honk) + subtle boost 10 kHz

---

### Additive vs Subtractive EQ

**Additive EQ:** Primarily using boosts to shape tone
- Risks: Gain buildup, phase issues, unnatural sound
- Use: Creative sound design, final polish

**Subtractive EQ:** Primarily using cuts to remove problems
- Benefits: More headroom, more natural, surgical problem-solving
- Use: Corrective mixing, cleaning tracks

**Best practice:** Subtract first (remove problems), then add (enhance character).

---

### Frequency Masking

**What it is:** When two sounds occupy the same frequency range and compete for space.

**Example:** Kick drum and bass both fighting for 80-120 Hz.

**Solution:**
- Cut bass at 100 Hz to make room for kick
- OR cut kick at 60 Hz to make room for bass sub
- Use EQ to create "pockets" for each instrument

**In mixing:** This is why Band 2 (200-300 Hz) is often cut - it's where many instruments accumulate and mask each other.

---

### Phase Issues

**What it is:** EQ affects not just amplitude (volume) but also phase (timing) of frequencies.

**Why it matters:**
- Extreme EQ moves can cause phase shifts
- Can make sounds feel "thin" or "disconnected"
- Multiple EQs in series compound this

**Minimizing phase issues:**
- Use gentler curves (wider bandwidth)
- Prefer cuts over boosts
- Don't stack too many EQs
- Some modern EQs offer "linear phase" mode (but with latency cost)

---

### Fletcher-Munson Curves (Equal Loudness)

**What it is:** Human hearing is more sensitive to midrange (2-5 kHz) than bass or treble, especially at low volumes.

**Why it matters for EQ:**
- At low monitoring volumes, bass seems quieter
- You might over-boost bass and treble to compensate
- When played loud, it's now too bass-heavy

**Solution:**
- Mix at moderate, consistent levels
- Check at multiple volumes
- Don't trust EQ decisions made at very low or very high volumes

---

## Context-Specific Terms

### Track vs Bus vs Master EQ

**Track EQ:**
- Individual instrument processing
- Can be more aggressive (±6 dB)
- Corrective and creative

**Bus EQ:**
- Group processing (all drums, all vocals, etc.)
- Should be subtle (±3 dB)
- Primarily for glue and balance

**Master EQ:**
- Final output processing
- Must be very subtle (±1.5 dB)
- Fine-tuning, not fixing

**Why different limits?**
Changes accumulate through the signal chain. 10 tracks each boosting 2 dB = 20 dB at the bus!

---

### Corrective vs Creative EQ

**Corrective EQ:**
- Removes problems (mud, harshness, resonances)
- Primarily subtractive (cuts)
- Makes sounds fit together

**Creative EQ:**
- Adds character or vibe
- Can be additive or subtractive
- Makes sounds more interesting

**Example on vocals:**
- Corrective: HPF @ 80 Hz, cut 250 Hz (mud), cut 800 Hz (honk)
- Creative: Boost 3 kHz (clarity), boost 12 kHz (air)

---

## Project-Specific Terms

### Band
One of the 7 frequency modules in Fruity Parametric EQ 2.

Each band operates independently with its own:
- Frequency range
- Filter type options
- Recommended settings
- Functional role

### Band Archetype
A pre-configured band setting (preset building block).

Example: "De-Mud" archetype = Bell, 250 Hz, 35% BW, -2 dB gain

Multiple archetypes can be stacked to create full presets.

### Zone
The frequency region a band primarily covers.

Examples:
- Band 1: "Sub / Foundation" (20-120 Hz)
- Band 5: "Presence / Clarity" (1800-3200 Hz)

### Safe Maximum
Context-appropriate gain limits to prevent over-processing.

- `safeMaxTrack`: 6 dB (individual tracks)
- `safeMaxBus`: 3 dB (group buses)
- `safeMaxMaster`: 1.5 dB (master output)

### Symptom
A problem sound characteristic that can be diagnosed and fixed.

Examples:
- `muddy_or_cloudy`: Unclear low-mids
- `harsh_or_fatiguing`: Excessive upper-mids
- `dull_or_closed`: Lack of high frequencies

### Priority
Urgency level for fixing issues:
- **Priority 1 (Critical):** Fix immediately - masks other problems
- **Priority 2 (Important):** Significant impact on mix quality
- **Priority 3 (Polish):** Final touches and refinement

---

## Practical Frequency Descriptions

### Sub-Bass (20-60 Hz)
**Feel:** Rumble, power, physical sensation
**Common in:** Kick drums, 808s, sub-bass synths
**Typical action:** High-pass filter to remove, or boost for electronic music

### Bass (60-250 Hz)
**Feel:** Warmth, fullness, foundation
**Common in:** Bass guitars, kick drum punch, low toms
**Typical action:** Usually cut to reduce mud, occasionally boost for weight

### Low-Mids (250-500 Hz)
**Feel:** Body, thickness, or muddiness
**Common in:** Most instruments have energy here
**Typical action:** Often cut - this is where mixes get muddy

### Midrange (500-2000 Hz)
**Feel:** Core tone, nasal quality, "forward" presence
**Common in:** Vocals, guitars, snares
**Typical action:** Cut boxiness (400-600 Hz), cut honk (700-1000 Hz)

### Upper-Mids (2000-5000 Hz)
**Feel:** Presence, clarity, definition, or harshness
**Common in:** Vocal intelligibility, snare crack, guitar attack
**Typical action:** Boost for clarity, cut for harshness

### Treble (5000-10000 Hz)
**Feel:** Brightness, articulation, detail
**Common in:** Cymbals, vocal detail, guitar shimmer
**Typical action:** Boost for detail, cut for harshness

### Air (10000-20000 Hz)
**Feel:** Airiness, sparkle, openness, or hiss
**Common in:** Cymbal wash, vocal breath, string harmonics
**Typical action:** High-shelf boost for modern sound, cut to reduce noise

---

## Common Abbreviations

- **EQ:** Equalization / Equalizer
- **Hz:** Hertz (frequency unit)
- **kHz:** Kilohertz (1000 Hz)
- **dB:** Decibel (gain/volume unit)
- **Q:** Quality factor (bandwidth, though not used in this project)
- **BW:** Bandwidth (percentage in FL Studio, 0-100%)
- **HPF:** High-Pass Filter
- **LPF:** Low-Pass Filter
- **HSF:** High-Shelf Filter
- **LSF:** Low-Shelf Filter
- **PEQ:** Parametric EQ (bell filter)

---

## Next Steps

- See `frequency-zones.md` for detailed band breakdowns
- See `project-conventions.md` for this project's specific usage
- See `../frequency-charts/` for visual references

```

---

## FILE: 04-Reference\terminology-glossary\frequency-zones.md

```markdown
# Frequency Zones Reference

Detailed breakdown of the 7 frequency zones corresponding to each band in Fruity Parametric EQ 2.

## The 7-Zone System

`\`\`
20 Hz                                                                    20,000 Hz
|━━━━━━|━━━━━━━|━━━━━━━|━━━━━━━━|━━━━━━━━━━|━━━━━━━━━|━━━━━━━━━━━━━━━|
  B1      B2       B3        B4         B5          B6           B7
Purple  Pink   Orange   Yellow     Green       Teal         Blue
 Sub    Warm    Box     Honk     Presence    Detail        Air
`\`\`

---

## Band 1: Sub / Foundation (Purple)
**Frequency Range:** 20-120 Hz

### What Lives Here
- Sub-bass synths and 808s
- Kick drum fundamental (50-80 Hz)
- Bass guitar lowest notes (41 Hz = low E)
- Rumble, room noise, mic handling

### Perceptual Characteristics
- **Felt more than heard** - especially below 40 Hz
- Requires subwoofers or large speakers to hear accurately
- **Eats headroom** - uses a lot of energy for little perceived loudness
- Can sound muddy on small speakers

### Common Problems
- **Rumble:** Low-frequency noise from AC, traffic, mic handling
- **Headroom loss:** Sub-bass energy reducing available loudness
- **Translation issues:** Sounds great on subs, disappears on phones/laptops

### Typical Moves
- **High-pass filter @ 70-100 Hz** (most sources except kick/bass)
- **High-pass filter @ 30-50 Hz** (even on kick/bass, remove sub-rumble)
- **Low shelf boost @ 60 Hz** (bass design in EDM/hip-hop)

### Genre Considerations
- **EDM/Hip-Hop:** Keep and enhance sub frequencies
- **Rock/Pop:** Often high-pass aggressively
- **Acoustic/Classical:** Natural room tone, gentle filtering

### Warning
"Never boost here unless designing bass" - Boosting sub frequencies on most sources just adds mud and eats headroom.

---

## Band 2: Warmth / Body (Pink)
**Frequency Range:** 140-320 Hz

### What Lives Here
- Bass guitar body and presence
- Kick drum punch and thump
- Male vocal warmth and chest resonance
- Piano and guitar low end
- Snare drum body

### Perceptual Characteristics
- **Warmth vs Mud** - The same frequencies can feel "warm" or "muddy"
- Accumulates easily in mixes
- Small cuts here clean up the entire mix
- This is where "thickness" lives

### Common Problems
- **Mud:** The #1 mixing problem - cloudy, unclear low-mids
- **Boominess:** Excessive energy making the mix feel unbalanced
- **Masking:** Every instrument has energy here, they fight for space

### Typical Moves
- **Bell cut @ 200-300 Hz, -1 to -3 dB** (most common EQ move in mixing)
- **Bell boost @ 150-200 Hz, +1 to +2 dB** (add body to thin sources)
- **Low shelf cut @ 250 Hz** (overall mix cleanup)

### Genre Considerations
- **Modern Pop/EDM:** Aggressive cuts for clarity
- **Jazz/Soul:** More warmth retained
- **Metal/Rock:** Cut to prevent instrument buildup

### Warning
"Cut more often than boost" - Adding 2 dB here to one track might sound good solo, but across 20 tracks = 40 dB of mud.

### The "200 Hz Problem"
Almost every mix benefits from cutting something around 200-250 Hz. This is the universal "mud frequency."

---

## Band 3: Boxiness / Room Tone (Orange)
**Frequency Range:** 300-550 Hz

### What Lives Here
- Vocal body and chest resonance
- Snare drum body
- Guitar lower midrange
- Room resonances and reflections
- "Cardboard box" frequencies

### Perceptual Characteristics
- **Boxy:** Sounds like it's in a cardboard box or small room
- **Hollow:** Can make sounds feel disconnected from the mix
- Often where cheap microphones or untreated rooms resonate
- Removing this range "opens up" a sound

### Common Problems
- **Boxiness:** The "amateur recording" sound
- **Room tone:** Untreated room adding resonance
- **Honky:** Overlaps with Band 4 but lower

### Typical Moves
- **Bell cut @ 350-500 Hz, -2 to -4 dB** (remove boxiness)
- **Notch @ 380-420 Hz** (surgical room resonance removal)
- **Bell cut @ 300 Hz** (on vocals that sound "chesty")

### When to Cut
- Vocal sounds like it was recorded in a bathroom
- Snare drum sounds "boxy" or "cardboard-y"
- Guitar sounds "honky" or "cheap"
- Overall mix sounds "small" or "amateur"

### When to Boost
Almost never. This range is almost always cut, not boosted.

### Warning
"Cutting here removes the 'amateur' sound" - One of the fastest ways to make a recording sound more professional.

---

## Band 4: Nasal / Honk (Yellow)
**Frequency Range:** 600-1200 Hz

### What Lives Here
- Vocal core and intelligibility
- Guitar midrange "honk"
- Snare drum attack
- "Telephone" frequency range
- Nasal resonances

### Perceptual Characteristics
- **Nasal:** Sounds like talking through your nose
- **Honky:** Like a megaphone or cheap AM radio
- **Forward:** Can make sounds feel "in your face"
- Very sensitive range - small changes are very audible

### Common Problems
- **Nasal vocals:** Sounds pinched or nasally
- **Honky guitars:** Unpleasant midrange aggression
- **Fatiguing:** Too much energy here causes listener fatigue

### Typical Moves
- **Bell cut @ 700-1000 Hz, -1 to -3 dB** (reduce nasal quality)
- **Bell boost @ 1000 Hz, +3 to +6 dB** (telephone effect, creative)
- **Narrow cut @ 800 Hz** (specific nasal resonance)

### Creative Uses
- **Telephone effect:** Boost aggressively + HPF + LPF
- **Midrange focus:** Boost for aggressive, forward sound
- **Lo-fi effect:** Boost this, cut everything else

### Warning
"Small moves only - this range is sensitive" - More than ±3 dB can quickly sound unnatural.

---

## Band 5: Presence / Clarity (Green)
**Frequency Range:** 1800-3200 Hz

### What Lives Here
- Vocal intelligibility and clarity
- Snare drum crack and attack
- Cymbal definition
- Guitar pick attack
- "Brings sounds forward in the mix"

### Perceptual Characteristics
- **Presence:** Makes sounds feel close and intimate
- **Clarity:** Where consonants (S, T, K) live in vocals
- **Attack:** Transient definition for most instruments
- Can quickly become harsh if overdone

### Common Problems
- **Buried in the mix:** Lack of presence, sounds sit back
- **Harshness:** Too much boost causes listener fatigue
- **Sibilance:** Excessive S sounds (though 5-8 kHz is worse)

### Typical Moves
- **Bell boost @ 2-3 kHz, +1 to +3 dB** (add presence, bring forward)
- **Bell cut @ 2.5-3 kHz, -1 to -2 dB** (reduce harshness)
- **High shelf boost @ 2 kHz** (overall clarity lift)

### Genre Considerations
- **Pop/Rock Vocals:** Almost always boosted +2 to +3 dB
- **Hip-Hop:** More moderate, +1 to +2 dB
- **Ambient/Shoegaze:** Often cut or neutral

### Warning
"Overuse causes harshness" - Boosting presence on multiple tracks stacks quickly. Be subtle.

### The "Presence Boost" Standard
Most professional vocals have a presence boost somewhere in this range. It's the "secret weapon" for vocal clarity.

---

## Band 6: Upper Presence / Detail (Teal)
**Frequency Range:** 3500-6500 Hz

### What Lives Here
- Vocal sibilance (S, T, SH sounds)
- Cymbal body and shimmer
- Guitar brightness and string squeak
- Piano hammer attack
- Detail and articulation

### Perceptual Characteristics
- **Bright:** Adds sparkle and air
- **Sharp:** Can quickly become fatiguing or harsh
- **Detailed:** Where fine articulation lives
- Most sensitive to listener fatigue

### Common Problems
- **Harshness:** The #1 cause of ear fatigue
- **Sibilance:** Excessive S sounds piercing through
- **Shrillness:** Unpleasant sharp quality

### Typical Moves
- **Bell cut @ 4-6 kHz, -1 to -3 dB** (reduce harshness, most common)
- **Bell boost @ 5 kHz, +1 to +2 dB** (add detail, use carefully)
- **Narrow cut @ 5 kHz** (de-essing, surgical sibilance removal)

### When to Cut
- Vocals sound harsh or sibilant
- Cymbals are piercing
- Mix causes ear fatigue after 10 minutes
- Anything sounds "cheap" or "digital"

### When to Boost
- Source is dull and needs articulation
- Want to add "expensive" sheen (rare, dangerous)
- Creative effect for aggressive sound

### Warning
"Less is more" - This is where most amateur engineers over-boost. Subtlety is critical.

---

## Band 7: Air / Shine / Polish (Blue)
**Frequency Range:** 8000-16000 Hz

### What Lives Here
- Vocal breath and air
- Cymbal wash and sparkle
- String harmonics and rosin
- "Open" quality
- Modern "expensive" sound

### Perceptual Characteristics
- **Air:** Open, spacious, three-dimensional
- **Sparkle:** Shimmering, shiny quality
- **Modern:** The "2020s pop" sound
- Can exaggerate noise and artifacts

### Common Problems
- **Dullness:** Lack of air makes sounds feel closed
- **Noise:** Boosting here amplifies hiss, artifacts, room noise
- **Harshness:** Can bring out digital artifacts

### Typical Moves
- **High shelf boost @ 10-14 kHz, +2 to +4 dB** (most common, adds air)
- **High shelf cut @ 12 kHz, -1.5 to -2 dB** (reduce hiss or harshness)
- **Low-pass filter @ 16 kHz** (remove ultra-high artifacts)

### Genre Considerations
- **Modern Pop/EDM:** Aggressive boosts (+3 to +5 dB)
- **Hip-Hop:** Moderate boosts (+2 to +3 dB)
- **Vintage/Lo-Fi:** Often cut or rolled off entirely
- **Jazz/Classical:** Subtle or neutral

### Creative Uses
- **"Modern" sound:** Wide shelf boost for current pop aesthetic
- **Vintage effect:** Low-pass filter to make sound older
- **De-hiss:** Shelf cut to remove tape/digital hiss

### Warning
"Exaggerates noise and artifacts" - If you boost air and hear more hiss than shine, you need better source material or de-noising first.

### The "Air Lift"
A wide high-shelf boost around 10-12 kHz is one of the final "polish" moves in professional mixes. It's the sound of modern production.

---

## Overlapping Zones

### Why Bands Overlap
The 7 frequency zones intentionally overlap:
- **Band 2 (140-320 Hz)** overlaps **Band 3 (300-550 Hz)**
- **Band 3 (300-550 Hz)** overlaps **Band 4 (600-1200 Hz)**

This is by design for smooth, musical transitions.

### Using Overlaps Creatively
Example: Vocal at 300 Hz
- Could use Band 2 (wide cut for overall warmth reduction)
- OR Band 3 (narrower cut for specific boxiness removal)
- Choice depends on the specific problem

---

## Frequency Memory Training

### Develop Your Ear
To master EQ, you must learn to hear these zones:

1. **Sweep with a boost** - Take a bell filter, boost +10 dB, sweep through each band's range
2. **Identify by ear** - Practice recognizing "that's mud" (Band 2) vs "that's boxiness" (Band 3)
3. **Blind tests** - Have someone boost/cut a random frequency, you guess the range
4. **Reference tracks** - Study where pros boost/cut in each genre

### Frequency Landmarks
Memorize these key frequencies:
- **80 Hz** - High-pass target for most sources
- **200-250 Hz** - Universal mud zone
- **400 Hz** - Boxiness central
- **1 kHz** - Telephone effect
- **2.5 kHz** - Vocal presence sweet spot
- **5 kHz** - Sibilance/harshness danger zone
- **12 kHz** - Air shelf target

---

## Next Steps

- See `eq-terminology.md` for parameter definitions
- See `../frequency-charts/frequency-spectrum-map.md` for visual reference
- See `../frequency-charts/instrument-frequency-ranges.md` for where instruments sit

```

---

## FILE: 04-Reference\terminology-glossary\project-conventions.md

```markdown
# Project Conventions

To maintain consistency across the Knowledge Base and any derivative tools, we adhere to the following strict conventions.

## 📂 File Naming

- **Markdown Files:** `kebab-case.md` (lowercase, hyphens).
  - _Good:_ `vocal-lead-workflow.md`
  - _Bad:_ `VocalLeadWorkflow.md`, `vocal_lead.md`
- **JSON Files:** `kebab-case.json` or `camelCase.json` (depending on data type), but strictly lowercase for directories.
- **Directories:** `00-Numbered-Title` for top-level, `kebab-case` for sub-directories.

## 📝 Data Structure Standards

### 1-Based vs 0-Based Indexing

- **User-Facing Text:** Always **1-Based** (Band 1, Band 7).
- **Code/Data ID:** Always **1-Based** (`bandId: 1`).
- **Array Storage:** Always **0-Based** (`bands[0]`).
- _Reasoning:_ FL Studio UI labels them 1-7. Code arrays are naturally 0-6. The `bandId` property bridges this gap explicitly.

### Inverted Bandwidth

We strictly follow FL Studio's internal scale for bandwidth to ensure copy-paste compatibility.

- **0%** = Wide / Gentle
- **100%** = Narrow / Surgical

## 🎨 Semantic Colors

We do not use random colors. Band 1 is ALWAYS Purple. Band 7 is ALWAYS Blue. This establishes a cognitive link between "Purple" and "Sub-Bass" for the user.

## ✍️ Documentation Style

- **Tone:** Professional, encouraging, authoritative but accessible.
- **Action-Oriented:** "Cut -2 dB" instead of "You might want to consider reducing the gain."
- **Headings:** Use emojis in H2 headers to improve visual scanning (e.g., `## 🛠️ The Fix`).

## 🔢 Units

- **Frequency:** `Hz` (or `kHz` for >999, optional but `Hz` preferred for data consistency).
- **Gain:** `dB` (always signed: `+1.0 dB`, `-3.5 dB`).
- **Bandwidth:** `%` (percent).

```

---

