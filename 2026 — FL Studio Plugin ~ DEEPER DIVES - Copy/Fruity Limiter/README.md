# Fruity Limiter - Visual Dynamics Processor

```
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██╗     ██╗███╗   ███╗██╗████████╗███████╗██████╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██║     ██║████╗ ████║██║╚══██╔══╝██╔════╝██╔══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║     ██║██╔████╔██║██║   ██║   █████╗  ██████╔╝
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║     ██║██║╚██╔╝██║██║   ██║   ██╔══╝  ██╔══██╗
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ███████╗██║██║ ╚═╝ ██║██║   ██║   ███████╗██║  ██║
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚══════╝╚═╝╚═╝     ╚═╝╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Limiter / Compressor / Gate
**Category:** Dynamics / Mastering
**Official Manual:** [Image-Line Fruity Limiter Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Limiter.htm)

---

## 🎯 What is Fruity Limiter?

Fruity Limiter is a powerful, visual dynamics processor that combines a **Compressor**, a **Limiter**, and a **Noise Gate**. Its defining feature is the real-time scrolling waveform display, which shows exactly how the compression affects your peaks. It is the default limiter on the FL Studio "Master" channel in new projects, but it is equally powerful for individual tracks, especially for **Sidechain Compression**.

**Key Capabilities:**
- **Dual Stage:** Compressor stage feeds into Limiter stage.
- **Visual Feedback:** See the input (grey), output (purple), and gain reduction (white).
- **Sidechaining:** Dedicated Sidechain input for pumping effects.
- **Lookahead:** Prevents transients from poking through (Limiter section).
- **Noise Gate:** Cleans up background hiss.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **comp-vs-limiter-tabs.md**
3. Create **parameter-cheat-sheet.md**
4. Watch the purple line flatten as you pull down the "Ceiling".

### For Mix Engineers:
1. Study **sidechain-ducking.md** (The most common use case!)
2. Review **transparent-limiting.md**
3. Learn **visual-gain-staging.md**

### For Mastering:
1. Study **loudness-maximization.md**
2. Review **attack-release-tuning.md** for transparency.

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **LIMIT Tab:** Ceil (Output max), Saturation, Attack/Release.
  - **COMP Tab:** Thres, Ratio, Attack, Release, Sidechain.
  - **Visuals:** Speed, Freeze, Analysis modes.

- [ ] **comp-vs-limiter-tabs.md**
  - **LIMIT:** Hard ceiling, prevents clipping, uses lookahead.
  - **COMP:** Musical reduction, retains transients (depending on attack), creates groove.

#### 02-Data/parameters/
- [ ] **limiter-params.json**
  ```json
  {
    "plugin_name": "Fruity Limiter",
    "category": "Dynamics",
    "parameters": [
      {
        "name": "Sidechain",
        "type": "selector",
        "description": "Selects mixer track for key input",
        "pro_tip": "Right-click to auto-select connected sidechains."
      },
      {
        "name": "Ceiling",
        "type": "knob",
        "description": "Absolute volume limit",
        "use_cases": ["mastering", "protection"]
      }
    ]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **sidechain-ducking.md**
  - Routing Kick to Synth (Sidechain Only).
  - Setting COMP tab to Sidechain input.
  - Adjusting Threshold and Ratio for the "Pump".

- [ ] **vocal-level-riding.md**
  - Using the Compressor with a low ratio (2:1).
  - Visualizing the gain reduction to smooth out performances.

- [ ] **removing-noise-floor.md**
  - Using the "Gate" knobs (Gain/Thres) on the Limit tab (wait, check manual - usually Gate is separate or part of the gain structure).
  - *Correction:* Fruity Limiter has a "Noise Gate" section (Rel, Gain, Thres).

#### 03-Workflows/by-context/
- [ ] **master-bus-protection.md**
- [ ] **snare-transient-shaping.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **curve-settings-analysis.md**
  - Creating custom knee shapes (Curves 1-8).
  - How curve affects the compression transparency.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Understanding the Visuals

**Tasks:**
1. Put Limiter on a dynamic loop
2. Lower the Limiter Ceiling
3. Observe the Purple line flattening
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Why is the Limiter section *after* the Compressor section? (Standard signal flow: Control dynamics -> Protect output).
- What does the "Sustain" knob do? (Holds the compression amount before releasing).

### Phase 2: Sidechain Mastery (Week 2)
**Goal:** The Pump

**Tasks:**
1. Route a Ghost Kick to a Pad
2. Select the Ghost Kick in the "Sidechain" box (COMP tab)
3. Lower Threshold, Increase Ratio
4. Create sidechain-ducking.md

**Key Questions to Answer:**
- How is this different from Fruity Peak Controller? (Limiter gives you audio-rate envelope following, Peak Controller is LFO/Envelope based).

---

## 📊 Plugin Specifications to Document

### Dynamics Engine
- Lookahead (ms)
- Knee Types (Variable curves)
- Sidechain Input (External vs Internal)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is my sound distorted? (Attack on Limiter is too fast, or Ceiling is too low).
2. How do I turn off the Limiter but keep the Compressor? (Set Ceiling to max).

### Advanced Usage
1. How to use the Saturation knob for "Soft Clipping"?

---

## 📝 Documentation Standards

### For Each Workflow:
- **Tab:** LIMIT / COMP
- **Visuals:** Describe what the white line should look like.
- **Settings:** Exact knob values.

---

## 🔗 Cross-Reference with Other Plugins

Fruity Limiter is often used with:
- **Maximus** (Multiband version)
- **Fruity Compressor** (Non-visual version)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Fruity Limiter/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── comp-vs-limiter-tabs.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── limiter-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── sidechain-ducking.md
│   │   ├── vocal-level-riding.md
│   │   └── removing-noise-floor.md
│
└── 04-Reference/
    └── curve-settings-analysis.md
```

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Limiter Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Limiter.htm)
- [Fruity Limiter Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Limiter_tutorials.htm)
- [Fruity Limiter Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+limiter+tutorial)

### Community Resources
- [Fruity Limiter Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+limiter&restrict_sr=1)
- [Fruity Limiter User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Limiter Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis before/after processing
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity dB Meter** for precise level monitoring
- **Patcher** for external sidechain routing

### Recommended Learning Materials
- "Compression Fundamentals" - Understanding the basics of dynamic range control
- "Sidechain Techniques" - Deep dive into ducking and gating applications
- "Mastering with Limiters" - Professional loudness maximization techniques

### Advanced Techniques
- **Visual Gain Staging:** Using the waveform display for precise level management
- **Sidechain Ducking:** Creating rhythmic pumping effects
- **Noise Floor Reduction:** Using the gate section to eliminate unwanted noise

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Set up a sidechain pumping effect in under 30 seconds
- [ ] Use the visualizer to identify a specific loud transient
- [ ] Configure the Noise Gate to silence a guitar buzz
- [ ] Explain the difference between Limiter Attack and Compressor Attack

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection