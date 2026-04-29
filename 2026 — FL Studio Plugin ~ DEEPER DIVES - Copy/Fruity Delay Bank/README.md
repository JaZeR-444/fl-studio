# Fruity Delay Bank - Multi-Tap Powerhouse

```
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██████╗ ███████╗██╗      █████╗ ██╗   ██╗    ██████╗  █████╗ ███╗   ██╗██╗  ██╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗██╔════╝██║     ██╔══██╗╚██╗ ██╔╝    ██╔══██╗██╔══██╗████╗  ██║██║ ██╔╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║  ██║█████╗  ██║     ███████║ ╚████╔╝     ██████╔╝███████║██╔██╗ ██║█████╔╝ 
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║  ██║██╔══╝  ██║     ██╔══██║  ╚██╔╝      ██╔══██╗██╔══██║██║╚██╗██║██╔═██╗ 
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██████╔╝███████╗███████╗██║  ██║   ██║       ██████╔╝██║  ██║██║ ╚████║██║  ██╗
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝   ╚═╝       ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝
```

**Plugin Type:** Multi-Tap Delay / Filter Bank
**Category:** Sound Design / Effect
**Official Manual:** [Image-Line Fruity Delay Bank Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Delay%20Bank.htm)

---

## 🎯 What is Fruity Delay Bank?

Fruity Delay Bank is the most powerful and complex delay plugin in FL Studio. It consists of **8 identical delay units (Banks)** that can be routed in parallel, series, or complex hybrid chains. Each bank has its own Filter, Distortion, Grain (Granular) processor, and Stereo controls. It essentially allows you to build your own delay algorithms.

**Key Capabilities:**
- **8 Independent Banks:** Each is a full FX unit.
- **Complex Routing:** Bank 1 can feed Bank 2, or Main Output, or Next Bank.
- **Granular Processing:** "Grain" controls chop echoes into textures.
- **Per-Bank Filtering:** LP/HP/BP/Notch filters for every tap.
- **Stereo Separation:** Independent width control per echo.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **routing-matrix-explained.md** (Critical!)
3. Create **parameter-cheat-sheet.md**
4. Turn on Bank 1 and Bank 2, set different times, and pan them apart.

### For Sound Designers:
1. Study **granular-delay-textures.md**
2. Review **multi-tap-rhythms.md** (Creating patterns)
3. Learn **serial-vs-parallel-processing.md**

### For Mix Engineers:
1. Study **creating-stereo-fields.md**
2. Review **frequency-specific-delays.md** (Delaying only mids, etc.)

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Bank Selector:** 1-8 tabs.
  - **Time:** Delay duration.
  - **OFS (Offset):** Stereo shift.
  - **Sep (Separation):** Mono/Stereo width.
  - **Grain:** Granular settings.
  - **Routing:** "Next" vs "To Main".

- [ ] **routing-matrix-explained.md**
  - **Parallel:** All banks go "To Main". (Echoes happen simultaneously).
  - **Serial:** Bank 1 goes to "Next", Bank 2 goes to "Next". (Echoes of echoes).

#### 02-Data/parameters/
- [ ] **delay-bank-params.json**
  ```json
  {
    "plugin_name": "Fruity Delay Bank",
    "category": "Delay",
    "parameters": [
      {
        "name": "Grain",
        "type": "knob",
        "description": "Chops echoes into grains",
        "use_cases": ["glitch textures", "shimmer effects"]
      },
      {
        "name": "Routing - To Next",
        "type": "knob",
        "description": "Sends signal to the next bank number",
        "pro_tip": "Use this to create reverb-like diffusion chains"
      }
    ]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **multi-tap-rhythms.md**
  - Setting Bank 1 to 1/4 note.
  - Setting Bank 2 to dotted 8th.
  - Setting Bank 3 to 1/16 note.
  - Creating complex polyrhythms.

- [ ] **granular-delay-textures.md**
  - Using the Grain knob to "smear" the echoes.
  - Creating robotic/metallic reverb tails.

- [ ] **frequency-splitting-delay.md**
  - Bank 1: Low Pass (Bass delay).
  - Bank 2: High Pass (Shimmer delay).
  - Processing different frequencies differently.

#### 03-Workflows/by-context/
- [ ] **idm-glitch-drums.md**
- [ ] **evolving-pad-generator.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **filter-types-reference.md**
  - Characteristics of the internal filters (Vanilla, Butter, etc.).

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Understanding Multi-Tap

**Tasks:**
1. Enable Bank 1, 2, and 3
2. Set them to parallel (Route all to Main)
3. Pan them Left, Center, Right
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I mute a bank? (Toggle switch)
- What does the "Oversample" button do? (Higher quality filters)

### Phase 2: Advanced Routing (Week 2)
**Goal:** Chain Reactions

**Tasks:**
1. Feed Bank 1 into Bank 2 (Serial)
2. Add Distortion to Bank 2 only
3. Filter Bank 2
4. Create granular-delay-textures.md

**Key Questions to Answer:**
- Can I feedback Bank 8 into Bank 1? (Usually no, prevents infinite loops in this architecture, need to verify).

---

## 📊 Plugin Specifications to Document

### Architecture
- Number of Banks (8)
- Filter Types per bank
- Stereo options (Ping pong, Invert)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it silent? (Check Input volume and Routing knobs)
2. How is this different from Delay 3? (8 distinct taps vs 1 feedback loop)

### Advanced Usage
1. How to create an Arpeggiator effect? (Tuning delay times to musical intervals)

---

## 📝 Documentation Standards

### For Each Workflow:
- **Routing:** Diagram (1->2->Main)
- **Bank Settings:** Per-tab breakdown

---

## 🔗 Cross-Reference with Other Plugins

Fruity Delay Bank is often used with:
- **Fruity Keyboard Controller** (Automating banks)
- **Fruity Formula Controller** (Randomizing taps)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Fruity Delay Bank/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── routing-matrix-explained.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── delay-bank-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── multi-tap-rhythms.md
│   │   ├── granular-delay-textures.md
│   │   └── frequency-splitting-delay.md
│
└── 04-Reference/
    └── filter-types-reference.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Build a 4-tap rhythmic delay pattern
- [ ] Create a "Shimmer" effect using serial high-pass delays
- [ ] Explain the difference between "Grain" and "Feedback"
- [ ] Route a signal through 3 distinct processing stages

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection