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