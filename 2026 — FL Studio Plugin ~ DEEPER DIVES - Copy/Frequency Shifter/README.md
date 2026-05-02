# Frequency Shifter - Creative Sound Design Tool

```
███████╗██████╗ ███████╗ ██████╗ ██╗   ██╗███████╗███╗   ██╗ ██████╗██╗   ██╗
██╔════╝██╔══██╗██╔════╝██╔═══██╗██║   ██║██╔════╝████╗  ██║██╔════╝╚██╗ ██╔╝
█████╗  ██████╔╝█████╗  ██║   ██║██║   ██║█████╗  ██╔██╗ ██║██║      ╚████╔╝ 
██╔══╝  ██╔══██╗██╔══╝  ██║ ▄ ██║██║   ██║██╔══╝  ██║╚██╗██║██║       ╚██╔╝  
██║     ██║  ██║███████╗╚██████╔╝╚██████╔╝███████╗██║ ╚████║╚██████╗   ██║   
╚═╝     ╚═╝  ╚═╝╚══════╝ ╚═══▀══╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝ ╚═════╝   ╚═╝   

███████╗██╗  ██╗██╗███████╗████████╗███████╗██████╗ 
██╔════╝██║  ██║██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗
███████╗███████║██║█████╗     ██║   █████╗  ██████╔╝
╚════██║██╔══██║██║██╔══╝     ██║   ██╔══╝  ██╔══██╗
███████║██║  ██║██║██║        ██║   ███████╗██║  ██║
╚══════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   ╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Frequency Shifter / Ring Modulator
**Category:** Effect / Creative
**Official Manual:** [Image-Line Frequency Shifter Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Frequency%20Shifter.htm)

---

## 🎯 What is Frequency Shifter?

Frequency Shifter creates complex metallic, dissonant, and "robotic" textures by shifting all frequencies in the input signal by a fixed Hertz amount. **Crucially, this is NOT pitch shifting.** Pitch shifting multiplies frequencies (preserving harmonic relationships), while Frequency Shifting adds/subtracts a fixed value (breaking harmonic relationships).

**Key Capabilities:**
- **Inharmonic Shifting:** Moves frequencies linearly (Hz) rather than logarithmically (Semitones).
- **Ring Modulation:** Creates bell-like, metallic tones.
- **Stereo Detuning:** Independent Left/Right shift controls for extreme width.
- **Feedback Loop:** Creates psychedelic, spiraling echoes.
- **Start Phase Control:** Adjusts the transient response and click reduction.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **pitch-vs-freq-shift.md** (Essential concept!)
3. Create **parameter-cheat-sheet.md**
4. Test the "Freq" knob on a drum loop vs a melody.

### For Sound Designers:
1. Review **metallic-textures.md** (to be created)
2. Study **dubstep-growl-design.md**
3. Learn **stereo-widening-tricks.md** using small shifts

### For Experimental Producers:
1. Study **ring-modulation-guide.md**
2. Review **feedback-drone-creation.md**
3. Learn **riser-fx-design.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - Freq Knob (The main shift amount)
  - Left/Right independent switches
  - Feedback Amount
  - Start Phase
  - Mix (Dry/Wet)

- [ ] **pitch-vs-freq-shift.md**
  - **Pitch Shift:** 100Hz -> 200Hz, 200Hz -> 400Hz (Octave up, musical)
  - **Freq Shift:** 100Hz (+100) -> 200Hz, 200Hz (+100) -> 300Hz (Dissonant, inharmonic)
  - Why this makes things sound "metallic" or "scary"

#### 02-Data/parameters/
- [ ] **frequency-shifter-params.json**
  ```json
  {
    "plugin_name": "Frequency Shifter",
    "category": "Effect",
    "parameters": [
      {
        "name": "Frequency",
        "type": "knob",
        "unit": "Hz",
        "range": "-SampleRate/2 to +SampleRate/2",
        "description": "Amount of linear frequency shift",
        "use_cases": ["tuning drums", "creating metallic layer"]
      },
      {
        "name": "Feedback",
        "type": "knob",
        "description": "Feeds output back into input",
        "pro_tip": "Use for barber-pole flanger effects"
      }
    ]
  }
  ```

#### 02-Data/presets/
- [ ] **creative-presets.json**
  - Subtle Stereo Widener (+5Hz L, -5Hz R)
  - Robotic Voice (Ring Mod style)
  - Horror Movie Drone
  - Snare Drum Tuner

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-metallic-bass.md**
  - Using small shifts (50-200Hz) to add "clang" to bass
  - Blending with Mix knob to keep fundamental

- [ ] **stereo-widening-trick.md**
  - Shifting Left channel up by 2Hz
  - Shifting Right channel down by 2Hz
  - Result: Massive, mono-compatible width without phase cancellation issues of typical delays

- [ ] **drum-transient-shaping.md**
  - Shifting drums up to make them "tighter" or "clickier"
  - Shifting down for "doomy" loose snares

#### 03-Workflows/by-context/
- [ ] **techno-rumble-texture.md**
- [ ] **riser-transition-effects.md**
- [ ] **experimental-vocals.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **ring-modulation-theory.md**
  - How Frequency Shifter relates to Ring Mod (Sum and Difference tones)
  - Bode Frequency Shifter history

- [ ] **aliasing-artifacts.md**
  - What happens at extreme settings?
  - How sample rate affects the upper limit

---

## 🔬 Research Framework

### Phase 1: Basic Understanding (Week 1)
**Goal:** Grasp the "Inharmonic" nature

**Tasks:**
1. Apply to a Sine Wave (Pure tone)
2. Apply to a Sawtooth Wave (Harmonic series)
3. Hear how the harmonics "break" relation
4. Create pitch-vs-freq-shift.md

**Key Questions to Answer:**
- Why does a chord sound like noise when shifted?
- What is the sweet spot for "subtle" widening?
- How does the Feedback knob change the texture?

### Phase 2: Creative Application (Week 2)
**Goal:** Practical Sound Design

**Tasks:**
1. Use on Vocals for "Alien" effects
2. Use on Snares to change their "tuning" without time-stretching
3. Automate the Frequency knob for risers
4. Create stereo-widening-trick.md

**Key Questions to Answer:**
- How to sync the shift to tempo (if possible, or via manual automation)?
- Can this simulate "Barberpole" phasing?
- Best Mix settings for retaining musicality?

---

## 📊 Plugin Specifications to Document

### Shift Engine
- Frequency Range (Max Hz shift)
- Stereo Link/Unlink capability
- Feedback signal path

### Audio Quality
- Aliasing characteristics
- Phase response at 0Hz shift

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do I shift Left and Right channels oppositely?
2. What does "Start Phase" actually do to the sound?
3. Why does my voice sound like a robot?

### Advanced Usage
1. How to create an "infinite riser" effect (Shepard Tone style)?
2. Using Frequency Shifter inside a Patcher feedback loop?
3. Difference between Frequency Shifter and Ring Modulator effect?

---

## 📝 Documentation Standards

### For Each Workflow:
- **Source Material:** Best sounds to use (Drums vs Leads)
- **Shift Amount:** Specific Hz ranges (Subtle < 10Hz, Clang > 100Hz)
- **Mix Setting:** Crucial for this effect (Wet vs Dry/Wet)

---

## 🔗 Cross-Reference with Other Plugins

Frequency Shifter is often used with:
- **Delay Bank** (Shifting feedback tails)
- **Reverb** (Shifting reverb shimmer)
- **Patcher** (For separating transients before shifting)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Frequency Shifter/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── pitch-vs-freq-shift.md ⭐ HIGH PRIORITY
│
├── 02-Data/
│   ├── parameters/
│   │   └── frequency-shifter-params.json
│   └── presets/
│       └── creative-presets.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-metallic-bass.md
│   │   ├── stereo-widening-trick.md
│   │   └── drum-transient-shaping.md
│
└── 04-Reference/
    └── ring-modulation-theory.md
```

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Clearly demonstrate the difference between Pitch Shifting and Frequency Shifting
- [ ] Create a "clean" stereo widening effect without phase issues
- [ ] Design a dubstep growl metallic layer using the plugin
- [ ] Explain why the plugin makes musical chords sound dissonant

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection