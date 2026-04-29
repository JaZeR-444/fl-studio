# Spreader - Pro Stereo Widener

```
███████╗██████╗ ██████╗ ███████╗ █████╗ ██████╗ ███████╗██████╗ 
██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗
███████╗██████╔╝██████╔╝█████╗  ███████║██║  ██║█████╗  ██████╔╝
╚════██║██╔═══╝ ██╔══██╗██╔══╝  ██╔══██║██║  ██║██╔══╝  ██╔══██╗
███████║██║     ██║  ██║███████╗██║  ██║██████╔╝███████╗██║  ██║
╚══════╝╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Psychoacoustic Stereo Processor
**Category:** Effect / Mixing / Width
**Official Manual:** [Image-Line Spreader Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Spreader.htm)

---

## 🎯 What is Spreader?

Spreader is a modern, high-fidelity stereo widening plugin designed to expand the spatial image of any audio source while maintaining strict **mono compatibility**. It is particularly powerful for mono inputs, synthesizing a wide stereo field without the common phase cancellation artifacts of traditional methods. It features a built-in vectorscope for visual feedback and a specialized "Low Bypass" section to keep bass frequencies centered and punchy.

**Key Capabilities:**
- **Advanced Widening:** Expands the stereo image up to 100%.
- **Guaranteed Mono Compatibility:** Prevents sound from vanishing on mono systems.
- **Low Bypass:** Excludes bass frequencies from the widening effect (10Hz - 10kHz).
- **Separation Control:** Balances the blend between mono center and stereo edges.
- **Vectorscope Visualization:** Real-time feedback of stereo width and balance.
- **Mono Switch:** Instantly collapses the low-end bypass signal to mono.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **width-vs-separation-decoded.md**
3. Create **parameter-cheat-sheet.md**
4. Load a mono vocal, turn "Width" to 100%, and watch the Vectorscope "bloom."

### For Mix Engineers:
1. Study **maintaining-mono-bass-in-mixes.md**
2. Review **vectorscope-interpretation-guide.md**
3. Learn **taming-phase-artifacts.md**

### For Sound Designers:
1. Study **creating-super-wide-pads.md**
2. Review **widening-mono-synths-cleanly.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Width:** Percentage of expansion.
  - **Separation:** Mono/Stereo merge balance.
  - **Low Bypass:** Frequency slider.
  - **Mono Switch:** Centers the bypass signal.
  - **Vectorscope:** The visual display.

- [ ] **vectorscope-interpretation-guide.md**
  - Reading the "Flower" shape.
  - Identifying L/R imbalance.

#### 02-Data/parameters/
- [ ] **spreader-params.json**
  ```json
  {
    "plugin_name": "Spreader",
    "category": "Stereo Enhancement",
    "features": ["Mono compatibility", "Low frequency bypass", "Vectorscope"]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **cleaning-up-wide-808s.md**
  - Placing Spreader on a wide 808.
  - Setting Low Bypass to ~150Hz.
  - Enabling Mono switch.
  - Result: Shimmering wide mids/highs with a laser-focused mono sub.

- [ ] **the-perfect-mono-vocal-widen.md**
  - Width at 60-80%.
  - Separation adjusted to keep vocal "presence" in the center.
  - Null-testing in mono to verify zero phase loss.

- [ ] **instrument-group-immersion.md**
  - Applying subtle width (20-30%) to a guitar bus.

#### 03-Workflows/by-context/
- [ ] **mobile-speaker-optimization.md**
- [ ] **headphone-mix-immersion.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **spreader-vs-stereo-enhancer.md**
  - Why Spreader is safer for mono compatibility.
  - Algorithmic differences.

---

## 🔬 Research Framework

### Phase 1: Spatial Mechanics (Week 1)
**Goal:** Safe Width

**Tasks:**
1. Put Spreader on a purely Mono signal
2. Increase Width to 100%
3. Switch the FL Studio Master to Mono and verify the sound doesn't change tone (Null test)
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does the "Separation" slider affect the vectorscope shape?
- Does high separation reduce mono compatibility?

### Phase 2: Frequency Targeted Width (Week 2)
**Goal:** Low-End Focus

**Tasks:**
1. Use a full-range loop
2. Sweep the Low Bypass fader
3. Identify the frequency where the bass "kicks in" to the center
4. Create cleaning-up-wide-808s.md

---

## 📊 Plugin Specifications to Document

### Engine
- Bypass Range (10Hz - 10,000Hz)
- Mono Summing Quality

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is my bass disappearing? (Turn up the Low Bypass and enable the Mono switch).
2. What does the "Line" vs "Flower" on the Vectorscope mean? (Line = Mono, Flower = Stereo).

---

## 🔗 Cross-Reference with Other Plugins

Spreader is often used with:
- **Fruity Stereo Shaper** (When phase *manipulation* is needed instead of just width)
- **Maximus** (Final bus control)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Spreader/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── vectorscope-interpretation-guide.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── spreader-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── cleaning-up-wide-808s.md
│   │   └── the-perfect-mono-vocal-widen.md
│
└── 04-Reference/
    └── spreader-vs-stereo-enhancer.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Widen a mono instrument to 100% width with 0% phase cancellation in mono
- [ ] Explain how the Low Bypass fader improves mix clarity
- [ ] Accurately read a vectorscope to balance a lopsided stereo image
- [ ] Demonstrate the difference between "Width" and "Separation" controls

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

---

# Research Appendix (Structured)

## Observation Log (Fill During Testing)
| Entry | Control | Setting | Expected Result | Actual Result | Notes |
|---|---|---|---|---|---|
| 01 | | | | | |
| 02 | | | | | |
| 03 | | | | | |
| 04 | | | | | |
| 05 | | | | | |
| 06 | | | | | |
| 07 | | | | | |
| 08 | | | | | |
| 09 | | | | | |
| 10 | | | | | |
| 11 | | | | | |
| 12 | | | | | |
| 13 | | | | | |
| 14 | | | | | |
| 15 | | | | | |
| 16 | | | | | |
| 17 | | | | | |
| 18 | | | | | |
| 19 | | | | | |
| 20 | | | | | |
| 21 | | | | | |
| 22 | | | | | |
| 23 | | | | | |
| 24 | | | | | |
| 25 | | | | | |
| 26 | | | | | |
| 27 | | | | | |
| 28 | | | | | |
| 29 | | | | | |
| 30 | | | | | |
| 31 | | | | | |
| 32 | | | | | |
| 33 | | | | | |
| 34 | | | | | |
| 35 | | | | | |
| 36 | | | | | |
| 37 | | | | | |
| 38 | | | | | |
| 39 | | | | | |
| 40 | | | | | |
| 41 | | | | | |
| 42 | | | | | |
| 43 | | | | | |
| 44 | | | | | |
| 45 | | | | | |
| 46 | | | | | |
| 47 | | | | | |
| 48 | | | | | |
| 49 | | | | | |
| 50 | | | | | |
| 51 | | | | | |
| 52 | | | | | |
| 53 | | | | | |
| 54 | | | | | |
| 55 | | | | | |
| 56 | | | | | |
| 57 | | | | | |
| 58 | | | | | |
| 59 | | | | | |
| 60 | | | | | |

## Parameter Mapping Worksheet
- List each parameter, its audible impact, and interaction dependencies.
- Record the smallest change you can hear and the most dramatic effect.

## Automation Ideas
- Slow sweeps (16 bars) for evolving textures.
- Medium sweeps (4 bars) for musical motion.
- Fast sweeps (1 bar) for rhythmic effects.

## Mix Integration Checklist
- Confirm mono compatibility for wide settings.
- Control low-end with high-pass or low-bypass tools.
- Use light compression for dynamic stability.
- Avoid extreme modulation in dense mixes.

## Troubleshooting Matrix
- Harsh attack -> soften exciter/attack, reduce brightness.
- Thin body -> increase resonance or body emphasis.
- Too wide -> reduce spread, check mono.
- Too static -> add modulation or automation.
- Muddy low end -> reduce low-mid buildup or use high-pass.

## Advanced Research Prompts
- Document how each parameter influences timbre vs dynamics.
- Record preset settings for three reference styles.
- Compare results across low/mid/high registers.
- Capture a before/after screenshot for each major change.


---

# Research Appendix (Structured)

## Observation Log (Fill During Testing)
| Entry | Control | Setting | Expected Result | Actual Result | Notes |
|---|---|---|---|---|---|
| 01 | | | | | |
| 02 | | | | | |
| 03 | | | | | |
| 04 | | | | | |
| 05 | | | | | |
| 06 | | | | | |
| 07 | | | | | |
| 08 | | | | | |
| 09 | | | | | |
| 10 | | | | | |
| 11 | | | | | |
| 12 | | | | | |
| 13 | | | | | |
| 14 | | | | | |
| 15 | | | | | |
| 16 | | | | | |
| 17 | | | | | |
| 18 | | | | | |
| 19 | | | | | |
| 20 | | | | | |
| 21 | | | | | |
| 22 | | | | | |
| 23 | | | | | |
| 24 | | | | | |
| 25 | | | | | |
| 26 | | | | | |
| 27 | | | | | |
| 28 | | | | | |
| 29 | | | | | |
| 30 | | | | | |
| 31 | | | | | |
| 32 | | | | | |
| 33 | | | | | |
| 34 | | | | | |
| 35 | | | | | |
| 36 | | | | | |
| 37 | | | | | |
| 38 | | | | | |
| 39 | | | | | |
| 40 | | | | | |
| 41 | | | | | |
| 42 | | | | | |
| 43 | | | | | |
| 44 | | | | | |
| 45 | | | | | |
| 46 | | | | | |
| 47 | | | | | |
| 48 | | | | | |
| 49 | | | | | |
| 50 | | | | | |
| 51 | | | | | |
| 52 | | | | | |
| 53 | | | | | |
| 54 | | | | | |
| 55 | | | | | |
| 56 | | | | | |
| 57 | | | | | |
| 58 | | | | | |
| 59 | | | | | |
| 60 | | | | | |

## Parameter Mapping Worksheet
- List each parameter, its audible impact, and interaction dependencies.
- Record the smallest change you can hear and the most dramatic effect.

## Automation Ideas
- Slow sweeps (16 bars) for evolving textures.
- Medium sweeps (4 bars) for musical motion.
- Fast sweeps (1 bar) for rhythmic effects.

## Mix Integration Checklist
- Confirm mono compatibility for wide settings.
- Control low-end with high-pass or low-bypass tools.
- Use light compression for dynamic stability.
- Avoid extreme modulation in dense mixes.

## Troubleshooting Matrix
- Harsh attack -> soften exciter/attack, reduce brightness.
- Thin body -> increase resonance or body emphasis.
- Too wide -> reduce spread, check mono.
- Too static -> add modulation or automation.
- Muddy low end -> reduce low-mid buildup or use high-pass.

## Advanced Research Prompts
- Document how each parameter influences timbre vs dynamics.
- Record preset settings for three reference styles.
- Compare results across low/mid/high registers.
- Capture a before/after screenshot for each major change.
