# Toxic Biohazard - Hybrid FM Synthesizer

```
████████╗ ██████╗ ██╗  ██╗██╗ ██████╗     ██████╗ ██╗ ██████╗ ██╗  ██╗ █████╗ ███████╗ █████╗ ██████╗ ██████╗ 
╚══██╔══╝██╔═══██╗╚██╗██╔╝██║██╔════╝     ██╔══██╗██║██╔═══██╗██║  ██║██╔══██╗╚══███╔╝██╔══██╗██╔══██╗██╔══██╗
   ██║   ██║   ██║ ╚███╔╝ ██║██║          ██████╔╝██║██║   ██║███████║███████║  ███╔╝ ███████║██████╔╝██║  ██║
   ██║   ██║   ██║ ██╔██╗ ██║██║          ██╔══██╗██║██║   ██║██╔══██║██╔══██║ ███╔╝  ██╔══██║██╔══██╗██║  ██║
   ██║   ╚██████╔╝██╔╝ ██╗██║╚██████╗     ██████╔╝██║╚██████╔╝██║  ██║██║  ██║███████╗██║  ██║██║  ██║██████╔╝
   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝     ╚═════╝ ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ 
```

**Plugin Type:** FM / Subtractive Hybrid Synthesizer
**Category:** Generator / Modern Analog / FM
**Official Manual:** [Image-Line Toxic Biohazard Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Toxic%20Biohazard.htm)

---

## 🎯 What is Toxic Biohazard?

Toxic Biohazard is a powerful hybrid synthesizer that blends **Frequency Modulation (FM)** with **Subtractive** synthesis. It features 6 alias-free oscillators, each with its own ADSR envelope, a warm analog-modeled filter, and a massive modulation matrix. It is designed for high-quality sound with low CPU usage, excelling at sharp digital leads, evolving FM textures, and deep analog-style basses.

**Key Capabilities:**
- **6 FM Oscillators:** High-resolution, anti-aliased oscillators for clean FM.
- **FM Matrix:** Easy-to-use grid for routing operators to each other.
- **Analog-Modeled Filter:** Warm LP/BP/HP filter with its own dedicated envelope.
- **64-Step Sequencer:** Built-in pattern generator with polyphonic support.
- **Multi-Voice Unison:** 8 voices with stereo spread for thick unison sounds.
- **Integrated FX Rack:** Multi-tap Delay, Chorus, Phaser, Reverb, EQ, and Distortion.
- **Spectrum Analysis:** Load custom waveforms from WAV/AIFF files.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **toxic-matrix-logic.md** (Simplified FM grid)
3. Create **parameter-cheat-sheet.md**
4. Load a preset and look at the "Matrix" tab to see which oscillators are modulating others.

### For FM Sound Designers:
1. Study **fm-modulation-basics-in-toxic.md**
2. Review **oscillator-synchronization.md**
3. Learn **creating-custom-waveforms.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [x] **parameter-cheat-sheet.md**
- [x] **toxic-matrix-logic.md**

#### 02-Data/parameters/
- [x] **toxic-bio-specs.json**

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [x] **aggressive-fm-lead.md**
- [x] **evolving-atmospheric-pad.md**
- [x] **classic-303-acid-line.md** (Self-Correction: Integrated into aggressive docs)
- [x] **goal-oriented-workflows.md**

#### 03-Workflows/by-context/
- [x] **industrial-industrial-bass.md**
- [x] **ambient-soundscape-design.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [x] **custom-wav-import-guide.md**

## 🔬 Research Framework

### Phase 1: The Matrix (Week 1)
**Goal:** FM Understanding

**Tasks:**
1. Put Osc 1 through the OUT
2. Increase Modulation from Osc 2 into Osc 1
3. Observe how the harmonic series changes
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Can I feedback an oscillator into itself?
- What are the "Physical" envelopes?

---

## 📊 Plugin Specifications to Document

### Engine
- Aliasing characteristics (Filter/Osc)
- CPU Performance per voice

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the sound so "clean"? (Anti-aliased oscillators).
2. How to add more grit? (Use the built-in Distortion module or high resonance).

---

## 🔗 Cross-Reference with Other Plugins

Toxic Biohazard is often used with:
- **Sytrus** (The advanced sibling)
- **PoiZone** (Subtractive counterpart)

---

## 📦 File Structure Summary

```
Toxic Biohazard/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── toxic-matrix-logic.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── toxic-bio-specs.json
│   ├── presets/
│   │   ├── INDEX.md
│   │   ├── hip-hop-trap-bass.json
│   │   ├── rnb-neo-soul-lead.json
│   │   ├── hip-hop-boom-bap-bass.json
│   │   └── rnb-smooth-pad.json
│   └── rules/
│       └── fm-gain-staging-rules.md
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── aggressive-fm-lead.md
│   │   ├── evolving-atmospheric-pad.md
│   │   └── goal-oriented-workflows.md
│   ├── by-context/
│   │   ├── industrial-industrial-bass.md
│   │   └── ambient-soundscape-design.md
│   └── by-instrument/
│       └── instrument-specific-workflows.md
│
└── 04-Reference/
    └── custom-wav-import-guide.md
```

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
