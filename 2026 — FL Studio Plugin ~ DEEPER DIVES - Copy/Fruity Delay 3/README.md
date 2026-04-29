# Fruity Delay 3 - Analog Modeling Delay

```
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██████╗ ███████╗██╗      █████╗ ██╗   ██╗    ██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗██╔════╝██║     ██╔══██╗╚██╗ ██╔╝    ╚════██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║  ██║█████╗  ██║     ███████║ ╚████╔╝     █████╔╝ 
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║  ██║██╔══╝  ██║     ██╔══██║  ╚██╔╝      ╚═══██╗ 
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██████╔╝███████╗███████╗██║  ██║   ██║      ██████╔╝ 
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝   ╚═╝      ╚═════╝  
```

**Plugin Type:** Analog / Tape Delay Emulation
**Category:** Effect / Creative
**Official Manual:** [Image-Line Fruity Delay 3 Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Delay%203.htm)

---

## 🎯 What is Fruity Delay 3?

Fruity Delay 3 is FL Studio's flagship delay unit. Unlike its predecessors, it is designed to emulate the character of **Analog Tape Delays**. It allows for pitch-shifting automation (tape stop effects), saturation/distortion in the feedback loop, and diffusion (reverb-like smearing). It keeps the delay synchronized even if the project BPM changes dynamically.

**Key Capabilities:**
- **Tape Behavior:** Changing time slides the pitch (varispeed).
- **Distortion/Saturation:** Adds grit to echoes.
- **Filtering:** High Pass AND Low Pass filters (Bandpass).
- **Modulation:** Wow & Flutter simulation.
- **Diffusion:** Smears transients for ambient textures.
- **BPM Sync:** Keeps time even during tempo automation.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **analog-vs-digital-delay.md**
3. Create **parameter-cheat-sheet.md**
4. Play with the "Time" knob while audio is playing to hear the pitch slide.

### For Sound Designers:
1. Review **tape-delay-emulation.md** (Wow/Flutter/Sat)
2. Study **dub-techno-chords.md** (Diffusion + Feedback)
3. Learn **glitch-effects.md** (Automating Time)

### For Mix Engineers:
1. Study **vocal-slapback-saturation.md**
2. Review **creating-pseudo-reverb.md** (Using Diffusion)

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Delay Time:** BPM synced or MS.
  - **Feedback Level/Cutoff:** Determines length and tone.
  - **Modulation (Rate/Time/Cut):** Pitch wobble and filter sweeps.
  - **Diffusion:** Smear amount.
  - **Distortion:** Saturation type (Limit, Sat, etc.).

- [ ] **analog-vs-digital-delay.md**
  - **Digital (Delay 2):** Perfect copies, clean.
  - **Analog (Delay 3):** Degraded copies, pitch drift, saturation.

#### 02-Data/parameters/
- [ ] **delay-3-params.json**
  ```json
  {
    "plugin_name": "Fruity Delay 3",
    "category": "Delay",
    "parameters": [
      {
        "name": "Diffusion",
        "type": "knob",
        "description": "Smears echoes into reverb",
        "use_cases": ["dub chords", "ambient pads"]
      },
      {
        "name": "Modulation Rate",
        "type": "knob",
        "description": "Speed of the LFO affecting time/filter",
        "pro_tip": "Low rate + low amount = Tape Wow/Flutter"
      }
    ]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **tape-delay-emulation.md**
  - Adding Saturation to the feedback loop.
  - Using Modulation Time to create "wobble".
  - Filtering highs and lows (Bandpass).

- [ ] **dub-techno-chords.md**
  - High Feedback.
  - High Diffusion.
  - Saturation engaged.
  - Result: Infinite, evolving metallic chord clouds.

- [ ] **glitch-effects.md**
  - Automating the "Time" knob rapidly.
  - Creating pitch-shifting artifacts.

#### 03-Workflows/by-context/
- [ ] **guitar-pedal-simulation.md**
- [ ] **vocal-texture-thickening.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **signal-flow-diagram.md**
  - Understanding where the Filter and Distortion sit in the feedback loop.
  - Order of operations: Delay -> Filter -> Dist -> Diff -> Feedback.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Tonal Control

**Tasks:**
1. Set up a standard 1/4 note delay
2. Use HP and LP filters to isolate the "Telephone" frequencies
3. Add Distortion to make it gritty
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does the "Limit" vs "Sat" distortion mode sound?
- What is the difference between "Tempo" and "Keep Pitch" modes? (In settings)

### Phase 2: Creative Modulation (Week 2)
**Goal:** Movement

**Tasks:**
1. Use Modulation to wobble the pitch (Chorus effect on echoes)
2. Use Diffusion to turn the delay into a Reverb
3. Create tape-delay-emulation.md

**Key Questions to Answer:**
- Can I create a Flanger with Delay 3? (Yes, short time + modulation)
- How to stop self-oscillation from blowing speakers? (Limiter in distortion section)

---

## 📊 Plugin Specifications to Document

### Audio Engine
- Modulation Destinations (Time, Cutoff)
- Distortion Types (List all)
- Filter Types (12dB/24dB?)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why does the pitch drop when I slow down the tempo? (Analog emulation behavior)
2. How do I make it clean? (Turn off Saturation, Modulation, and open filters)

### Advanced Usage
1. How to create "dotted 8th" delays? (Set time to 3 steps usually, or 0.75 beats)
2. Using the "Offset" knob for stereo widening vs Delay 2's method?

---

## 📝 Documentation Standards

### For Each Workflow:
- **Time/Tempo:** Setting
- **Tone:** Filter/Distortion settings
- **Character:** Mod/Diff settings

---

## 🔗 Cross-Reference with Other Plugins

Fruity Delay 3 is often used with:
- **Fruity Reverb 2** (Complementary space)
- **Distructor** (External distortion vs Internal)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Fruity Delay 3/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── analog-vs-digital-delay.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── delay-3-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── tape-delay-emulation.md
│   │   ├── dub-techno-chords.md
│   │   └── glitch-effects.md
│
└── 04-Reference/
    └── signal-flow-diagram.md
```

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Delay 3 Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Delay%203.htm)
- [Fruity Delay 3 Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Delay_3_tutorials.htm)
- [Fruity Delay 3 Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+delay+3+tutorial)

### Community Resources
- [Fruity Delay 3 Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+delay+3&restrict_sr=1)
- [Fruity Delay 3 User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Delay 3 Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Analog Delay Emulation" - Understanding tape and bucket-brigade delays
- "Delay Modulation Techniques" - Creating movement with delay effects
- "Dub Music Production" - Using delay for reggae and dub styles

### Advanced Techniques
- **Tape Emulation:** Using wow/flutter and saturation for authentic analog character
- **Diffusion Effects:** Creating ambient textures with delay smearing
- **Glitch Processing:** Automating delay parameters for creative effects

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a convincing 1970s Tape Echo preset
- [ ] Explain the signal flow of the feedback loop
- [ ] Use Modulation to create a chorus effect on the tails
- [ ] Build a "Wash" effect using Diffusion

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection