# Fruity Compressor - Dynamic Dynamics Control

```
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝ 
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝  
██║     ██║  ██║╚██████╔╝██║   ██║      ██║   
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝   

 ██████╗  ██████╗ ███╗   ███╗██████╗ ██████╗ ███████╗███████╗███████╗ ██████╗ ██████╗ 
██╔════╝ ██╔═══██╗████╗ ████║██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝██╔═══██╗██╔══██╗
██║      ██║   ██║██╔████╔██║██████╔╝██████╔╝█████╗  ███████╗███████╗██║   ██║██████╔╝
██║      ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██╗██╔══╝  ╚════██║╚════██║██║   ██║██╔══██╗
╚██████╗ ╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║███████╗███████║███████║╚██████╔╝██║  ██║
 ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝
```

**Plugin Type:** Compressor / Dynamics Processor
**Category:** Dynamics / Mixing
**Official Manual:** [Image-Line Fruity Compressor Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Compressor.htm)

---

## 🎯 What is Fruity Compressor?

Fruity Compressor is a legacy, straightforward dynamics processor. While less visual than the newer Fruity Limiter or Maximus, its simplicity makes it an excellent tool for understanding the core physics of compression. It provides standard Threshold, Ratio, Attack, and Release controls, along with variable "Knee" types (Vintage, Soft, Hard).

**Key Capabilities:**
- **Dynamic Range Reduction:** Makes loud sounds quieter and quiet sounds louder (effectively).
- **Threshold & Ratio:** Standard controls for determining when and how much to compress.
- **Variable Knee Types:** Hard, Medium, Soft, and Vintage modes that change the compression curve.
- **Gain Makeup:** Re-levelling the signal after reduction.
- **Low CPU:** Extremely lightweight processing.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **compression-101.md** (Understanding Threshold/Ratio)
3. Create **parameter-cheat-sheet.md**
4. Watch the Gain Reduction meter while adjusting Threshold.

### For Mix Engineers:
1. Review **compression-knee-types.md** (Vintage vs Hard)
2. Study **drum-compression.md** (Slow Attack for punch)
3. Learn **parallel-compression.md** (Using the Mix knob if available, or Send routing)

### For Sound Designers:
1. Study **sustain-enhancement.md**
2. Review **transient-shaping.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Threshold:** The dB level where compression starts.
  - **Ratio:** Input:Output reduction (e.g., 4:1).
  - **Gain:** Output volume boost.
  - **Attack:** How fast it reacts (ms).
  - **Release:** How fast it lets go (ms).
  - **Type:** The Knee curve character.

- [ ] **compression-knee-types.md**
  - **Hard:** Instant ratio application (Robotic, precise).
  - **Soft:** Gradual ratio application (Transparent).
  - **Vintage:** Non-linear curve (Color, warmth).

#### 02-Data/parameters/
- [ ] **fruity-compressor-params.json**
  ```json
  {
    "plugin_name": "Fruity Compressor",
    "category": "Dynamics",
    "parameters": [
      {
        "name": "Threshold",
        "type": "knob",
        "unit": "dB",
        "description": "Level at which compression begins",
        "use_cases": ["levelling vocals", "controlling peaks"]
      },
      {
        "name": "Ratio",
        "type": "knob",
        "description": "Amount of reduction",
        "pro_tip": "Use < 2:1 for gentle mastering, > 10:1 for limiting"
      }
    ]
  }
  ```

#### 02-Data/presets/
- [ ] **starter-compression-presets.json**
  - Vocal Leveller (Med Attack, Med Release, 4:1)
  - Drum Smash (Fast Attack, Fast Release, High Ratio)
  - Bass Glue (Slow Attack, Med Release, 2:1)

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **drum-compression.md**
  - Using Slow Attack (15-30ms) to let transients pass ("Punch").
  - Using Fast Release to avoid "pumping" (unless desired).

- [ ] **vocal-levelling.md**
  - Using Medium Attack to catch peaks.
  - Using Soft Knee for transparency.
  - 4:1 Ratio standard.

- [ ] **bass-sustain.md**
  - Fast Attack to control plucks.
  - Slow Release to bring up the tail/sustain.

#### 03-Workflows/by-context/
- [ ] **acoustic-guitar-glue.md**
- [ ] **podcast-voice-dynamics.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **attack-release-curves.md**
  - How the "Type" selector affects the Attack/Release integration.
  - Why "Vintage" mode sounds different on drums.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Understanding Reduction

**Tasks:**
1. Load a dynamic drum loop
2. Lower Threshold until the meter moves
3. Adjust Ratio to see more reduction
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does "Gain" help me compare Before/After? (A/B testing)
- What happens if Attack is 0ms? (Clicking/Distortion)
- What is the difference between Ratio 2:1 and 8:1?

### Phase 2: Advanced Application (Week 2)
**Goal:** Tone Shaping

**Tasks:**
1. Compress a Snare drum to make it "snap" (Attack ~30ms)
2. Compress a Bass to make it "even" (Fast Attack)
3. Compare Hard vs Vintage Knee
4. Create drum-compression.md

**Key Questions to Answer:**
- Why does "Vintage" type sound louder?
- How to avoid the "pumping" effect? (Release time)

---

## 📊 Plugin Specifications to Document

### Dynamics Engine
- Ratio Range (1:1 to Infinity:1)
- Attack Range (ms)
- Release Range (ms)
- Knee Types (Hard, Medium, Vintage, Soft)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the sound getting quieter? (Compression reduces peaks, you must use Gain to compensate)
2. What does the "Type" knob do?
3. How do I know if I'm compressing too much? (Listen for artifacts/life-sucking)

### Advanced Usage
1. When should I use Fruity Compressor vs Fruity Limiter? (Limiter provides visual feedback and brickwall limiting; Compressor is simpler for tracks)
2. Can I use this for Sidechaining? (No, Fruity Compressor does not have a SC input. Use Fruity Limiter for that).

---

## 📝 Documentation Standards

### For Each Workflow:
- **Threshold:** "Until reduction reads -X dB"
- **Ratio:** X:1 value
- **Attack/Release:** ms values
- **Type:** Knee selection

---

## 🔗 Cross-Reference with Other Plugins

Fruity Compressor is often used with:
- **Fruity Limiter** (The modern replacement with Sidechain)
- **Fruity Multiband Compressor** (Splitting bands)
- **Maximus** (The ultimate mastering compressor)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Fruity Compressor/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── compression-knee-types.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── fruity-compressor-params.json
│   └── presets/
│       └── starter-compression-presets.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── drum-compression.md
│   │   ├── vocal-levelling.md
│   │   └── bass-sustain.md
│
└── 04-Reference/
    └── attack-release-curves.md
```

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Compressor Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Compressor.htm)
- [Fruity Compressor Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Compressor_tutorials.htm)
- [Fruity Compressor Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+compressor+tutorial)

### Community Resources
- [Fruity Compressor Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+compressor&restrict_sr=1)
- [Fruity Compressor User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Compressor Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis before/after processing
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity dB Meter** for precise level monitoring
- **Fruity Limiter** for comparison with visual feedback

### Recommended Learning Materials
- "Compression Fundamentals" - Understanding the basics of dynamic range control
- "Attack and Release Settings" - Deep dive into timing parameters
- "Knee Types and Their Applications" - Understanding compression curves

### Advanced Techniques
- **Parallel Compression:** Blending compressed and uncompressed signals
- **Sidechain Alternatives:** Using sends and returns for similar effects
- **Vintage Character:** Using vintage knee settings for warmth and color

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Add "punch" to a snare drum using only Attack settings
- [ ] Level a vocal track so words are intelligible
- [ ] Explain the difference between "Hard" and "Soft" knee
- [ ] Use Makeup Gain to match the bypass volume perfectly

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection