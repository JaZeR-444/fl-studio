# Tuner - Visual Pitch Analysis

```
████████╗██╗   ██╗███╗   ██╗███████╗██████╗ 
╚══██╔══╝██║   ██║████╗  ██║██╔════╝██╔══██╗
   ██║   ██║   ██║██╔██╗ ██║█████╗  ██████╔╝
   ██║   ██║   ██║██║╚██╗██║██╔══╝  ██╔══██╗
   ██║   ╚██████╔╝██║ ╚████║███████╗██║  ██║
   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Chromatic Tuner
**Category:** Utility / Analysis
**Official Manual:** [Image-Line Tuner Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Tuner.htm)

---

## 🎯 What is Tuner?

FL Studio Tuner is a real-time visual pitch analyzer. It is designed to help you tune external instruments (Guitars, Synths) or check the pitch of samples (808s, Vocals). It features a highly responsive visual display that shows the detected note, the offset in cents, and a history graph of pitch stability.

**Key Capabilities:**
- **Real-Time Detection:** Instant note identification.
- **Visual Strobe:** Classic strobe-tuner style visualization for fine-tuning.
- **History Graph:** Shows pitch drift over time (vibrato analysis).
- **Reference Frequency:** Adjustable A=440Hz standard.
- **Input Sensitivity:** Works on Bass, Guitar, Voice, and Synths.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **tuning-808s-guide.md**
3. Create **parameter-cheat-sheet.md**
4. Whistle into your mic and watch the tuner track your pitch.

### For Guitarists:
1. Study **setup-for-guitar-tuning.md**
2. Review **strobe-vs-bar-display.md**

### For Vocal Producers:
1. Study **checking-vocal-pitch-drift.md**
2. Review **vibrato-analysis.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Visual Mode:** Circle, Bar, Graph.
  - **Reference:** A440 Hz adjustment.
  - **Window:** Response time.

- [ ] **strobe-vs-bar-display.md**
  - **Bar:** Good for quick checks.
  - **Strobe:** Good for precision intonation.

#### 02-Data/parameters/
- [ ] **tuner-params.json**
  ```json
  {
    "plugin_name": "Tuner",
    "category": "Analysis",
    "range": "C0 - C10",
    "reference": "Adjustable (440Hz default)"
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **tuning-808s-guide.md**
  - Placing Tuner on the 808 channel.
  - Identifying the fundamental note.
  - Using the sampler's "Root Note" right-click to fix it.

- [ ] **analyzing-vocal-vibrato.md**
  - Using the History view.
  - Seeing how wide the singer's vibrato swings (+/- cents).

- [ ] **setting-reference-432hz.md**
  - Changing the base frequency for non-standard tuning.

#### 03-Workflows/by-context/
- [ ] **guitar-setup-checklist.md**
- [ ] **synth-drift-calibration.md**

---

## 🔬 Research Framework

### Phase 1: Detection (Week 1)
**Goal:** Accuracy

**Tasks:**
1. Play a Sine wave at C5
2. Detune it by 20 cents
3. Verify Tuner shows +20 cents
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Does it work on polyphonic material (chords)? (No, monophonic only).
- What is the lowest note it can detect? (Low B on a 5-string bass?).

---

## 📊 Plugin Specifications to Document

### Engine
- Detection Range (Hz)
- Latency (Visual only)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the needle jumping? (Input is too quiet or polyphonic/noisy).
2. Can I use this to auto-tune? (No, it is an analyzer only. Use **Pitcher** or **Newtone** for correction).

---

## 🔗 Cross-Reference with Other Plugins

Tuner is often used with:
- **Newtone** (For fixing the issues Tuner finds)
- **Pitcher** (Real-time correction)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Tuner/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── strobe-vs-bar-display.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── tuner-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── tuning-808s-guide.md
│   │   └── analyzing-vocal-vibrato.md
│
└── 04-Reference/
    └── tuning-standards.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Accurately retune a sample that is 35 cents sharp
- [ ] Identify the key of a kick drum
- [ ] Explain the benefit of Strobe mode for guitar intonation

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection