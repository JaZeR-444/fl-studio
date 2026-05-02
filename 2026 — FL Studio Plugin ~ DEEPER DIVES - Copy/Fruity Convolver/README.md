# Fruity Convolver - Real-Time Convolution Reverb

```
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝ 
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝  
██║     ██║  ██║╚██████╔╝██║   ██║      ██║   
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝   

 ██████╗  ██████╗ ███╗   ██╗██╗   ██╗ ██████╗ ██╗     ██╗   ██╗███████╗██████╗ 
██╔════╝ ██╔═══██╗████╗  ██║██║   ██║██╔═══██╗██║     ██║   ██║██╔════╝██╔══██╗
██║      ██║   ██║██╔██╗ ██║██║   ██║██║   ██║██║     ██║   ██║█████╗  ██████╔╝
██║      ██║   ██║██║╚██╗██║╚██╗ ██╔╝██║   ██║██║     ╚██╗ ██╔╝██╔══╝  ██╔══██╗
╚██████╗ ╚██████╔╝██║ ╚████║ ╚████╔╝ ╚██████╔╝███████╗ ╚████╔╝ ███████╗██║  ██║
 ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝  ╚═══╝   ╚═════╝ ╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Convolution Reverb / Linear Phase EQ
**Category:** Effect / Reverb
**Official Manual:** [Image-Line Fruity Convolver Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Convolver.htm)

---

## 🎯 What is Fruity Convolver?

Fruity Convolver is a powerful Convolution Reverb. Unlike algorithmic reverbs (which calculate echoes mathematically), Convolution uses "Impulse Responses" (IRs) - actual audio recordings of real spaces - to imprint the acoustic character of that space onto your sound. It can replicate a specific cathedral, a guitar amp cabinet, or even strange experimental textures. It also functions as a Linear Phase Equalizer.

**Key Capabilities:**
- **Real-Time Convolution:** Applies IRs with zero/low latency.
- **Impulse Library:** Load WAV files of spaces (halls, rooms, plates).
- **Linear Phase EQ:** Use the spectral view to EQ the reverb (or the dry signal) without phase shift.
- **Stretch/Time Manipulation:** Change the length and pitch of the room response.
- **Envelope Control:** Shape the volume, pan, and stereo width of the reverb tail.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **convolution-basics.md** (How IRs work)
3. Create **parameter-cheat-sheet.md**
4. Load the "Blur White" preset to hear a massive atmospheric wash.

### For Sound Designers:
1. Review **creating-custom-impulses.md** (Recording your own claps/noise)
2. Study **cabinet-simulation.md** (Using IRs for guitar amps)
3. Learn **experimental-convolution.md** (Convolving a drum loop with a vocal)

### For Mix Engineers:
1. Study **reverb-eq-techniques.md**
2. Review **linear-phase-eq-mode.md**
3. Learn **placing-instruments-in-spaces.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Dry/Wet:** Mix controls.
  - **Pre-Delay:** Gap before reverb starts.
  - **Stretch:** Time-stretching the IR.
  - **Self-Convolve:** Special FX mode.
  - **EQ Window:** Drawing EQ curves on the response.

- [ ] **convolution-basics.md**
  - What is an Impulse Response (IR)?
  - Why does it sound more "real" than algorithmic reverb?
  - CPU usage considerations.

#### 02-Data/parameters/
- [ ] **fruity-convolver-params.json**
  ```json
  {
    "plugin_name": "Fruity Convolver",
    "category": "Reverb",
    "parameters": [
      {
        "name": "Stretch",
        "type": "knob",
        "unit": "%",
        "description": "Changes length/pitch of the space",
        "use_cases": ["making small rooms huge", "creating sci-fi textures"]
      },
      {
        "name": "Pre-Delay",
        "type": "knob",
        "unit": "ms",
        "description": "Delay before wet signal",
        "pro_tip": "Use to keep vocals in front of the mix"
      }
    ]
  }
  ```

#### 02-Data/resources/
- [ ] **ir-libraries.json**
  - List of built-in FL Studio IR categories.
  - Links to free high-quality IR resources (e.g., EchoThief).

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **cabinet-simulation.md**
  - Loading Guitar Cab IRs.
  - Turning off "Dry" signal (100% Wet).
  - EQing the Cab resonance.

- [ ] **experimental-convolution.md**
  - Loading non-reverb samples as IRs (e.g., a spoken word sample).
  - Creating "spectral vocoder" type textures.
  - Using "Stretch" to mangle the result.

- [ ] **linear-phase-eq-mode.md**
  - Using Convolver purely as an EQ.
  - Using the "Pulse" IR (Delta function) for transparency.
  - Drawing surgical cuts.

#### 03-Workflows/by-context/
- [ ] **orchestral-hall-placement.md**
- [ ] **drum-room-ambience.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **zero-latency-mode.md**
  - Trade-offs between latency and CPU.
  - When to use the "Use Latency" button.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Realistic Spaces

**Tasks:**
1. Load a Piano sound
2. Browse the "Halls" folder in Convolver
3. Adjust Wet level and Pre-Delay
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I import my own WAV files? (Drag and drop)
- What does the EQ line over the waveform do? (Spectral EQ of the reverb)
- How to normalize volume between different IRs?

### Phase 2: Creative Application (Week 2)
**Goal:** Sound Design

**Tasks:**
1. Drag a cymbal crash sample into Convolver
2. Play a drum loop through it
3. Adjust "Stretch" to pitch-shift the texture
4. Create experimental-convolution.md

**Key Questions to Answer:**
- What is "Self Convolve"?
- Can I reverse the reverb? (Yes, reverse the sample in the editor)

---

## 📊 Plugin Specifications to Document

### Engine
- Max IR length (seconds)
- Latency (samples)
- FFT Size/Partitioning

### Editor
- Envelope Tools (Volume, Pan, Stereo)
- EQ Resolution
- File support (WAV, etc.)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is there a delay when I play? (Check Latency settings)
2. How do I make the reverb shorter? (Use the Volume Envelope to fade it out, or Time Stretch)
3. Can I use this for Guitar Amps? (Yes, it's excellent for Cab IRs)

### Advanced Usage
1. Difference between Convolution and Algorithmic (Fruity Reverb 2)? (Realism vs Flexibility)
2. How to create a "Blur" effect? (Using specific noise IRs)

---

## 📝 Documentation Standards

### For Each Workflow:
- **IR Type:** Hall/Room/Plate/FX
- **Envelope:** Decay shape
- **EQ:** Tonal balance (Dark/Bright)
- **Stretch:** % settings

---

## 🔗 Cross-Reference with Other Plugins

Fruity Convolver is often used with:
- **Fruity Reverb 2** (Algorithmic alternative)
- **Fruity Delay 3** (Pre-delay texturing)
- **Edison** (Creating IRs to import)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Fruity Convolver/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── convolution-basics.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── fruity-convolver-params.json
│   └── resources/
│       └── ir-libraries.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── cabinet-simulation.md
│   │   ├── experimental-convolution.md
│   │   └── linear-phase-eq-mode.md
│
└── 04-Reference/
    └── zero-latency-mode.md
```

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Convolver Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Convolver.htm)
- [Fruity Convolver Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Convolver_tutorials.htm)
- [Fruity Convolver Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+convolver+tutorial)

### Community Resources
- [Fruity Convolver Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+convolver&restrict_sr=1)
- [Fruity Convolver User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Convolver Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for creating custom impulse responses
- **Fruity Spectroman** for analyzing reverb tails
- **Fruity Limiter** for monitoring output levels
- **Patcher** for complex convolution routing

### Recommended Learning Materials
- "Convolution Reverb Explained" - Understanding impulse responses and convolution
- "IR Creation Techniques" - Making your own impulse responses
- "Linear Phase EQ Applications" - Using convolution for precise equalization

### Advanced Techniques
- **Cabinet Simulation:** Using guitar amp IRs for authentic tone
- **Creative Convolution:** Using non-reverb samples as impulse responses
- **Spectral Processing:** Using convolution for unique filtering effects

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Place a dry orchestral sample into a "Carnegie Hall" space
- [ ] Create a Guitar Cabinet simulation using an external IR
- [ ] Use Convolver as a Linear Phase EQ
- [ ] Create a "Ghostly" texture by convolving audio with a vocal sample

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection