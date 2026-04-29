# 🎚️ Fruity Parametric EQ 2: Spectral Mainframe

```text
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PRO-GRADE SPECTRAL SHAPING & ANALYSIS ENGINE | FL STUDIO DEEP DIVE SERIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

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
```
02-Data/band-definitions/all-7-bands.json
  ↓ UI copy, tooltips, frequency zones, controls

02-Data/presets/band-archetypes.json
  ↓ Preset system macros

02-Data/rules/symptom-solutions.json
  ↓ Smart assistant recommendations

02-Data/schema/parametric-eq2-band-schema.json
  ↓ Validates all band data structures
```

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