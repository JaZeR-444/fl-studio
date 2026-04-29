# Fruity Delay 2 - Enhanced Stereo Echo

```
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██████╗ ███████╗██╗      █████╗ ██╗   ██╗    ██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗██╔════╝██║     ██╔══██╗╚██╗ ██╔╝    ╚════██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║  ██║█████╗  ██║     ███████║ ╚████╔╝      █████╔╝
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║  ██║██╔══╝  ██║     ██╔══██║  ╚██╔╝      ██╔═══╝ 
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██████╔╝███████╗███████╗██║  ██║   ██║       ███████╗
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝   ╚═╝       ╚══════╝
```

**Plugin Type:** Digital Stereo Delay
**Category:** Effect / Echo
**Official Manual:** [Image-Line Fruity Delay 2 Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Delay%202.htm)

---

## 🎯 What is Fruity Delay 2?

Fruity Delay 2 is the workhorse delay plugin for FL Studio. It improves upon the original Fruity Delay by adding a filter in the feedback loop (essential for natural-sounding echoes) and a **Stereo Offset** knob, which creates massive stereo width. It relies on tempo-synced steps but can be fine-tuned.

**Key Capabilities:**
- **Feedback Filtering:** Cutoff knob allows echoes to get duller over time (Dub style).
- **Stereo Offset:** Delays Left/Right channels differently for the Haas Effect.
- **Tempo Sync:** Locks to project BPM steps.
- **Three Modes:** Normal, Inverted, Ping Pong.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **delay-modes.md**
3. Create **parameter-cheat-sheet.md**
4. Turn "Dry" to 0 and "Stereo Offset" to max to hear the stereo split.

### For Mix Engineers:
1. Review **haas-effect-guide.md** (Using Offset)
2. Study **dub-delay-filtering.md** (Using Cutoff)
3. Learn **vocal-throw-automation.md**

### For Sound Designers:
1. Study **infinite-feedback-loops.md**
2. Review **metallic-comb-filtering.md** (Short time + High feedback)

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Input Vol/Pan:** Pre-delay processing.
  - **Feedback Vol:** Repeats (Keep <100% to avoid explosion).
  - **Feedback Cut:** Low pass filter frequency.
  - **Time:** Tempo steps (4 steps = 1 beat typically).
  - **Ofs (Offset):** The magic stereo knob.

- [ ] **delay-modes.md**
  - **Normal:** Standard echo.
  - **Inv (Invert):** Swaps L/R in feedback (widening).
  - **Ping Pong:** Bounces L/R.

#### 02-Data/parameters/
- [ ] **delay-2-params.json**
  ```json
  {
    "plugin_name": "Fruity Delay 2",
    "category": "Delay",
    "parameters": [
      {
        "name": "Stereo Offset",
        "type": "knob",
        "description": "Desynchronizes L/R channels",
        "pro_tip": "Turn right to delay R channel, left for L channel. Instant width."
      },
      {
        "name": "Time",
        "type": "knob",
        "unit": "steps",
        "description": "Tempo-locked delay time"
      }
    ]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **haas-effect-guide.md**
  - Setting Time to 0 (or min).
  - Using Offset to create <20ms difference.
  - Result: Super wide mono sound (check mono compatibility!).

- [ ] **dub-delay-filtering.md**
  - High Feedback (70-90%).
  - Low Cutoff.
  - Echoes fade into the background mix naturally.

- [ ] **ping-pong-setup.md**
  - Selecting "Ping Pong" mode.
  - Adjusting Pan to ensure movement.

#### 03-Workflows/by-context/
- [ ] **synth-lead-space.md**
- [ ] **vocal-delay-throws.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **time-knob-step-values.md**
  - What does "4:00" on the display mean? (4 steps).
  - How steps relate to PPQ (Pulses Per Quarter note).

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Standard Echoes

**Tasks:**
1. Set Time to 4 steps (1 beat)
2. Adjust Feedback to hear 3-4 repeats
3. Lower Cutoff to hear them dampen
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does the "Dry" knob work? (Usually keep at 100% for insert, 0% for send)
- What happens if I change BPM? (Delay changes pitch/time automatically)

### Phase 2: Stereo Manipulation (Week 2)
**Goal:** Width

**Tasks:**
1. Use Stereo Offset on a mono guitar
2. Use Invert Mode on a synth pad
3. Create haas-effect-guide.md

**Key Questions to Answer:**
- Does Stereo Offset affect the *first* echo or *all* echoes?
- How to avoid phase cancellation with the Offset knob?

---

## 📊 Plugin Specifications to Document

### Audio Engine
- Max Feedback (can it self-oscillate?)
- Filter characteristics (Low Pass only?)
- Timing Resolution

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do I get a 1/4 note delay? (Set Time to 4 steps)
2. Why are my echoes panning left? (Check Input Pan or Ping Pong mode)
3. How is this different from Fruity Delay 1? (Filter + Offset)

### Advanced Usage
1. Can I filter the Highs *and* Lows? (No, Delay 2 is LP only. Use Delay 3 for Bandpass)

---

## 📝 Documentation Standards

### For Each Workflow:
- **Time Setting:** Step value
- **Offset:** Knob position
- **Feedback/Cut:** Approximate clock position

---

## 🔗 Cross-Reference with Other Plugins

Fruity Delay 2 is often used with:
- **Fruity Reverb 2** (Delay into Reverb)
- **Fruity Limiter** (Sidechaining the delay output)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Fruity Delay 2/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── delay-modes.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── delay-2-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── haas-effect-guide.md
│   │   └── dub-delay-filtering.md
│
└── 04-Reference/
    └── time-knob-step-values.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a "fake double track" using the Offset knob
- [ ] Configure a natural sounding echo that doesn't clutter the high-end frequencies
- [ ] Explain the difference between "Invert" and "Ping Pong" behavior

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection