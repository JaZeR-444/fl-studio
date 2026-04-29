# Patcher - Modular Environment

```
██████╗  █████╗ ████████╗ ██████╗██╗  ██╗███████╗██████╗ 
██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██║  ██║██╔════╝██╔══██╗
██████╔╝███████║   ██║   ██║     ███████║█████╗  ██████╔╝
██╔═══╝ ██╔══██║   ██║   ██║     ██╔══██║██╔══╝  ██╔══██╗
██║     ██║  ██║   ██║   ╚██████╗██║  ██║███████╗██║  ██║
╚═╝     ╚═╝  ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Modular Routing Environment
**Category:** Utility / Generator / Effect
**Official Manual:** [Image-Line Patcher Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Patcher.htm)

---

## 🎯 What is Patcher?

Patcher is a modular environment that allows you to chain an unlimited number of instruments and effects into a single cohesive unit. It functions as both a generator (hosting synths) and an effect (hosting FX chains). Its true power lies in its ability to create custom control surfaces, complex parallel processing, and mathematical modulation using internal controllers.

**Key Capabilities:**
- **Modular Routing:** Connect nodes visually to define signal flow.
- **Custom Control Surfaces:** Design your own GUI with knobs, sliders, and XY pads.
- **Infinite Chaining:** No limit to the number of plugins within a single instance.
- **Multiband Processing:** Easily split signals by frequency or amplitude.
- **MIDI Signal Processing:** Route MIDI data between internal plugins.
- **Performance Monitoring:** Real-time latency and CPU tracking per node.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **patcher-node-basics.md** (Inputs vs Outputs)
3. Create **parameter-cheat-sheet.md**
4. Load "Simple Filter" preset and observe the connections in the Map tab.

### For Sound Designers:
1. Study **creating-custom-control-surfaces.md**
2. Review **parallel-processing-workflows.md**
3. Learn **dynamic-parameter-mapping.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [x] **node-types-explained.md**
- [ ] **control-surface-widgets.md**

#### 02-Data/parameters/
- [x] **patcher-signal-flow.json**

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [x] **multiband-distortion-rack.md**
- [x] **custom-synth-interface.md**

#### 03-Workflows/by-context/
- [ ] **vocal-doubler-modular.md**
- [ ] **live-performance-macro-setup.md**

---

## 🔬 Research Framework

### Phase 1: Mapping Mastery (Week 1)
**Goal:** Connections

**Tasks:**
1. Connect 3 different plugins in series
2. Split a signal into 2 parallel paths
3. Right-click a plugin to "Activate" a parameter node
4. Create node-types-explained.md

**Key Questions to Answer:**
- How do I delete a connection?
- What happens if I connect MIDI to an Audio input?

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do I add a plugin inside Patcher? (Right-click Map area).
2. Why is there no sound? (Verify the path reaches the 'To FL Studio' output node).

---

## 📦 File Structure Summary

```
Patcher/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── node-types-explained.md ⭐ HIGH PRIORITY
│   │   └── control-surface-widgets.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── patcher-signal-flow.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── multiband-distortion-rack.md
│   │   └── custom-synth-interface.md
│
└── 04-Reference/
    └── latency-and-pdc-in-patcher.md
```

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Patcher Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Patcher.htm)
- [Patcher Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Patcher_tutorials.htm)
- [Patcher Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+patcher+tutorial)

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
