# Frequency Splitter - Multi-Band Processing Tool

```
███████╗██████╗ ███████╗ ██████╗ ██╗   ██╗███████╗███╗   ██╗ ██████╗██╗   ██╗
██╔════╝██╔══██╗██╔════╝██╔═══██╗██║   ██║██╔════╝████╗  ██║██╔════╝╚██╗ ██╔╝
█████╗  ██████╔╝█████╗  ██║   ██║██║   ██║█████╗  ██╔██╗ ██║██║      ╚████╔╝ 
██╔══╝  ██╔══██╗██╔══╝  ██║ ▄ ██║██║   ██║██╔══╝  ██║╚██╗██║██║       ╚██╔╝  
██║     ██║  ██║███████╗╚██████╔╝╚██████╔╝███████╗██║ ╚████║╚██████╗   ██║   
╚═╝     ╚═╝  ╚═╝╚══════╝ ╚═══▀══╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝ ╚═════╝   ╚═╝   

███████╗██████╗ ██╗     ██╗████████╗████████╗███████╗██████╗ 
██╔════╝██╔══██╗██║     ██║╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗
███████╗██████╔╝██║     ██║   ██║      ██║   █████╗  ██████╔╝
╚════██║██╔═══╝ ██║     ██║   ██║      ██║   ██╔══╝  ██╔══██╗
███████║██║     ███████╗██║   ██║      ██║   ███████╗██║  ██║
╚══════╝╚═╝     ╚══════╝╚═╝   ╚═╝      ╚═╝   ╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Signal Splitter / Crossover Tool
**Category:** Utility / Mixing
**Official Manual:** [Image-Line Frequency Splitter Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Frequency%20Splitter.htm)

---

## 🎯 What is Frequency Splitter?

Frequency Splitter is a dedicated crossover utility that divides incoming audio into separate frequency bands (Low, Mid, High). Unlike standard EQs, its primary purpose is to route these bands to different audio outputs, enabling advanced multi-band effects processing chains (e.g., distorting only the bass, adding reverb only to the highs).

**Key Capabilities:**
- Split audio into 2 or 3 bands (Low/High or Low/Mid/High)
- High-fidelity Linear Phase mode (no phase shift)
- Zero Latency mode for live tracking
- Adjustable crossover slopes (6dB to 96dB/oct)
- Visual feedback of frequency spectrum and crossover points
- Independent band outputs for Patcher or Mixer routing

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review official manual sections on linear phase vs. zero latency
3. Create **parameter-cheat-sheet.md** with all controls
4. Test routing bands to different mixer tracks

### For Sound Designers:
1. Review **multiband-processing-guide.md** (to be created)
2. Study **patcher-integration.md** for modular setups
3. Learn **creative-crossover-automation.md**

### For Mix Engineers:
1. Study **transparent-splitting.md** (Linear Phase benefits)
2. Review **sub-bass-management.md**
3. Learn **dynamic-eq-workflows.md** using split bands

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - Crossover Frequency knobs
  - Slope selectors (6, 12, 24, 48, 96 dB/oct)
  - Mode switches (Linear Phase, Minimum Phase, Zero Latency)
  - Output routing selectors
  - Gain/Mute/Solo per band

- [ ] **crossover-modes-explained.md**
  - **Linear Phase:** Preserves phase relationships, introduces latency (best for mixing)
  - **Zero Latency:** No latency, introduces phase shift (best for recording/live)
  - **Minimum Phase:** Compromise option
  - Ringing artifacts in Linear Phase mode

#### 02-Data/parameters/
- [ ] **frequency-splitter-params.json**
  ```json
  {
    "plugin_name": "Frequency Splitter",
    "category": "Utility",
    "parameters": [
      {
        "name": "Cutoff Frequency",
        "type": "knob",
        "unit": "Hz",
        "description": "Point where bands divide",
        "use_cases": ["isolating sub bass", "separating vocal sibilance"]
      },
      {
        "name": "Slope",
        "type": "selector",
        "options": ["6dB", "12dB", "24dB", "48dB", "96dB"],
        "description": "Steepness of the filter",
        "pro_tip": "Steeper slopes separate better but may cause ringing"
      }
    ]
  }
  ```

#### 02-Data/presets/
- [ ] **crossover-templates.json**
  - Standard 3-Band (Sub, Mids, Highs)
  - 2-Band Bass Split (Sub vs Top)
  - Vocal Air Split (Body vs Sibilance)
  - De-mudding Split (Low-mids isolation)

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-multiband-effects.md**
  - Setting up the routing in Patcher vs Mixer
  - Applying saturation to mids only
  - Widening highs while keeping bass mono
  - Compressing bands independently

- [ ] **sub-bass-isolation.md**
  - Best crossover frequency for subs (80-120Hz)
  - Using steep slopes (48/96dB) effectively
  - Ensuring mono compatibility for the low band

- [ ] **transparency-guide.md**
  - When to use Linear Phase
  - Avoiding pre-ringing on transients
  - Null testing to verify clean splits

#### 03-Workflows/by-context/
- [ ] **neurofunk-bass-design.md**
- [ ] **vocal-processing-chains.md**
- [ ] **mastering-low-end-control.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **filter-slope-analysis.md**
  - Phase impact of different slopes
  - Overlap behavior
  - "Brickwall" filtering capabilities

- [ ] **latency-reference.md**
  - Latency values for each linear phase setting
  - PDC (Plugin Delay Compensation) considerations

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Understand crossover behavior

**Tasks:**
1. Open Frequency Splitter
2. Route audio through it
3. Listen to individual bands (Solo mode)
4. Experiment with different slopes
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do 6dB vs 96dB slopes sound different?
- What is the audible difference between Linear Phase and Zero Latency?
- How do you route bands to different mixer tracks?

### Phase 2: Advanced Routing (Week 2)
**Goal:** Build multi-band effect chains

**Tasks:**
1. Use Patcher to split signal
2. Put distortion on Low band, reverb on High band
3. Recombine signals
4. Check for phasing issues
5. Create multiband-processing-guide.md

**Key Questions to Answer:**
- How to avoid "hollow" sounds at crossover points?
- How to use Sidechain inputs with frequency splitting?
- CPU impact of Linear Phase High Quality mode?

---

## 📊 Plugin Specifications to Document

### Filter Engine
- Filter types (Linkwitz-Riley, FFT-based Linear Phase)
- Slope options (6, 12, 24, 48, 96 dB/Oct)
- Frequency range (typically 20Hz - 20kHz)
- Latency (samples) per mode

### Routing
- Max number of bands (3)
- Output offsets (Mixer track relative routing)
- Sidechain input capabilities

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do you turn a 2-band split into a 3-band split?
2. What is the default crossover frequency for bass?
3. How do you mute a specific band?

### Advanced Usage
1. Why does Linear Phase introduce latency?
2. When should you use 96dB/oct slopes? (e.g., surgical removal vs musical splitting)
3. How does this compare to Maximus's internal splitting?
4. Can you modulate the crossover point? (Yes, and what does it sound like?)

---

## 📝 Documentation Standards

### For Each Workflow:
- **Goal:** Clear objective (e.g., "Widen Highs, Mono Bass")
- **Routing:** Diagram or text explanation of Mixer/Patcher setup
- **Settings:** Specific Crossover points and slopes
- **Pitfalls:** Phase cancellation warnings

---

## 🔗 Cross-Reference with Other Plugins

Frequency Splitter is often used with:
- **Patcher** (Essential for self-contained multi-band chains)
- **Fruity Stereo Shaper** (Widening specific bands)
- **Distructor** (Distorting specific bands)
- **Fruity Peak Controller** (Modulating bands based on audio)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Frequency Splitter/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── crossover-modes-explained.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── frequency-splitter-params.json
│   └── presets/
│       └── crossover-templates.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-multiband-effects.md
│   │   ├── sub-bass-isolation.md
│   │   └── transparency-guide.md
│   └── by-plugin-combo/
│       └── patcher-multiband-racks.md
│
└── 04-Reference/
    ├── filter-slope-analysis.md
    └── latency-reference.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Explain the trade-offs between Linear Phase and Zero Latency
- [ ] Build a custom Multi-Band Distortion effect in Patcher
- [ ] Isolate a sub-bass frequency with surgical precision
- [ ] Demonstrate zero-phasing reconstruction of a split signal

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection