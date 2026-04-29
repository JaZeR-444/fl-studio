# Fruity Chorus - Lush Modulation Effect

```
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗     ██████╗██╗  ██╗ ██████╗ ██████╗ ██╗   ██╗███████╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔════╝██║  ██║██╔═══██╗██╔══██╗██║   ██║██╔════╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║     ███████║██║   ██║██████╔╝██║   ██║███████╗
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║     ██╔══██║██║   ██║██╔══██╗██║   ██║╚════██║
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ╚██████╗██║  ██║╚██████╔╝██║  ██║╚██████╔╝███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝        ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
```

**Plugin Type:** Chorus / Modulation
**Category:** Effect / Modulation
**Official Manual:** [Image-Line Fruity Chorus Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Chorus.htm)

---

## 🎯 What is Fruity Chorus?

Fruity Chorus thickens audio by creating multiple detuned copies of the original signal. It simulates the effect of multiple instruments playing the same part slightly imperfectly (like a choir or string section). It is essential for adding width, movement, and "shimmer" to static sounds like synth pads, guitars, and vocals.

**Key Capabilities:**
- **Delay:** Sets the offset of the chorus voices (2-20ms).
- **Depth:** Controls the amount of pitch modulation (detune).
- **Stereo:** Controls the stereo width of the effect (Phase inversion).
- **LFO:** Controls the speed and shape of the modulation.
- **Cross Cutoff:** Allows you to apply chorus ONLY to High or Low frequencies (essential for bass!).

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **chorus-vs-flanger.md**
3. Create **parameter-cheat-sheet.md**
4. Apply to a Sawtooth lead to hear the "thickening" effect.

### For Mix Engineers:
1. Review **bass-chorus-techniques.md** (Using the Cross Cutoff)
2. Study **vocal-thickening.md**
3. Learn **stereo-width-management.md**

### For Sound Designers:
1. Study **juno-style-pads.md**
2. Review **vibrato-effects.md** (High Depth, Fast LFO)
3. Learn **underwater-textures.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Delay:** Millisecond offset (Low = Flanger-like, High = Doubling).
  - **Depth:** How "out of tune" the copies get.
  - **Stereo:** Width of the effect (Phase offset).
  - **LFO Freq:** Speed of the wobble.
  - **LFO Wave:** Sine vs Sawtooth modulation.
  - **Cross Type/Cutoff:** HP/LP filter for the effect path.

- [ ] **chorus-vs-flanger.md**
  - **Chorus:** Longer delays (10-30ms), no feedback, pitch modulation focus.
  - **Flanger:** Short delays (<10ms), feedback loop, comb filtering focus.

#### 02-Data/parameters/
- [ ] **fruity-chorus-params.json**
  ```json
  {
    "plugin_name": "Fruity Chorus",
    "category": "Effect",
    "parameters": [
      {
        "name": "Delay",
        "type": "slider",
        "unit": "ms",
        "description": "Base delay time for voices",
        "use_cases": ["thickening", "doubling"]
      },
      {
        "name": "Cross Cutoff",
        "type": "knob",
        "description": "Splits frequency for processing",
        "pro_tip": "Set to 'Process HF' to keep sub-bass mono and clean"
      }
    ]
  }
  ```

#### 02-Data/presets/
- [ ] **classic-chorus-presets.json**
  - Roland Juno Style (Fast LFO, Med Depth)
  - Subtle Vocal Widen (Slow LFO, Low Depth)
  - Bass Shimmer (High Cross Cutoff, Med Depth)

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **bass-chorus-techniques.md**
  - Setting "Cross Type" to "Process HF"
  - Adjusting Cutoff to ~200Hz
  - Result: Wide, shimmering top end with solid, mono sub-bass.

- [ ] **juno-style-pads.md**
  - Emulating vintage analog synth choruses
  - Using "Sine" LFO wave
  - Balancing Depth and Rate

- [ ] **vibrato-effects.md**
  - Using 100% Wet mix
  - Short Delay
  - Fast LFO
  - Creating pitch-wobble effects

#### 03-Workflows/by-context/
- [ ] **guitar-clean-tone.md**
- [ ] **rhodes-piano-widen.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **lfo-shapes-analysis.md**
  - Difference between Sine (Smooth) and other LFO shapes in chorus context.
  - How Stereo Phase affects the LFO L/R sync.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Understanding Modulation

**Tasks:**
1. Load a simple Mono synth lead
2. Increase "Depth" and hear the pitch wobble
3. Increase "Stereo" and hear the width
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does "Delay" change the character (Metallic vs Lush)?
- Why does too much Depth make it sound out of tune?
- How does the Cross Cutoff work?

### Phase 2: Advanced Application (Week 2)
**Goal:** Clean Mixing

**Tasks:**
1. Apply Chorus to a Bass guitar
2. Use Cross Cutoff to clean up the low end
3. Compare "Sine" vs "Invert" stereo modes (if applicable)
4. Create bass-chorus-techniques.md

**Key Questions to Answer:**
- How to avoid phase cancellation in Mono?
- Difference between 1 voice and 3 voice chorus? (Fruity Chorus is a specific algorithm)

---

## 📊 Plugin Specifications to Document

### Modulation Engine
- LFO Waveforms (Sine, etc.)
- Delay Range (ms)
- Frequency Splitter slope (for Cross Cutoff)

### Controls
- Wet/Dry Mix capability
- Stereo Phase offset

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do I stop the chorus from making my Bass muddy? (Answer: Cross Cutoff)
2. What is the difference between Depth and Delay?
3. How do I make it sound like a "Leslie" speaker? (Fast LFO)

### Advanced Usage
1. How to create a "Dimension D" style subtle effect?
2. Using Chorus on Reverb tails for more width?

---

## 📝 Documentation Standards

### For Each Workflow:
- **LFO Rate:** Fast/Slow/Medium
- **Depth:** Percent
- **Stereo:** Width amount
- **Cross Filter:** Setting for clean low-end

---

## 🔗 Cross-Reference with Other Plugins

Fruity Chorus is often used with:
- **Fruity Flanger** (Similar modulation, distinct sound)
- **Fruity Phaser** (Frequency sweeping instead of pitch detuning)
- **Fruity Reverb 2** (Chorus usually goes BEFORE reverb)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Fruity Chorus/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── chorus-vs-flanger.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── fruity-chorus-params.json
│   └── presets/
│       └── classic-chorus-presets.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── bass-chorus-techniques.md
│   │   ├── juno-style-pads.md
│   │   └── vibrato-effects.md
│
└── 04-Reference/
    └── lfo-shapes-analysis.md
```

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Chorus Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Chorus.htm)
- [Fruity Chorus Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Chorus_tutorials.htm)
- [Fruity Chorus Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+chorus+tutorial)

### Community Resources
- [Fruity Chorus Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+chorus&restrict_sr=1)
- [Fruity Chorus User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Chorus Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Limiter** for monitoring output levels
- **Wave Candy** for precise waveform analysis

### Recommended Learning Materials
- "Chorus Explained" - Understanding modulation effects
- "Vintage Synth Emulation" - Recreating classic chorus sounds
- "Stereo Field Management" - Proper use of stereo effects

### Advanced Techniques
- **Cross Cutoff Management:** Using frequency splits for clean low-end
- **Vintage Emulation:** Recreating classic hardware chorus sounds
- **Vibrato Effects:** Using chorus parameters for pitch modulation

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Widen a bassline without ruining the sub-frequencies
- [ ] Create a vintage "Juno-60" pad sound
- [ ] Explain why "Depth" changes pitch
- [ ] Create a "seasick" pitch wobble effect

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection