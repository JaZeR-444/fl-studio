# Fruity Convolver - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Convolver - Real-Time Convolution Reverb

`\`\`
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
`\`\`

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
  `\`\`json
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
  `\`\`

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

`\`\`
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
`\`\`

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
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Convolver

## Purpose & Identity
Fruity Convolver is a high-performance **Convolution Engine**. Its primary identity is as a reverb that uses "Impulse Responses" (IRs)—actual recordings of real spaces—to process your sound. However, it is also a versatile tool for **Linear Phase Equalization** and extreme **Sound Design mangling**. [SRC: IL-MAN]

## 60-Second Mental Model
Imagine you could take the "DNA" of a specific room (like a cathedral or a bathroom) and inject it into your instrument. Fruity Convolver takes a 1-second audio file of that room and mathematically "multiplies" it with your audio. It doesn't sound like a computer's *guess* of a room; it sounds like the *actual* room.

## Hip-Hop / R&B Context
In urban production, space defines the "expensive" sound.
- **The "Recording Booth" Vibe:** Using a small "Booth" or "Studio" IR to make a dry, bedroom-recorded vocal sound like it was tracked in a professional facility.
- **Atmospheric Clouds:** Using the "Blur" IRs to turn a simple piano into a massive, shimmering wash for an R&B bridge.
- **Experimental Textures:** Convolving a hi-hat pattern with a short "Noise" or "Metal" sample to create unique rhythmic clicks found in industrial trap.

## When To Use
- When you need the most **realistic space simulation** possible (Rooms, Halls, Plates).
- When you need a **Linear Phase EQ** to cut frequencies without introducing phase shift (essential for mastering or sub-bass).
- When you want to **capture the vibe** of a guitar amp cabinet (using Cab IRs).

## When NOT To Use
- **CPU Savings:** Algorithmic reverbs (like **Reeverb 2**) are usually lighter on the CPU for simple tasks.
- **Modulated Tails:** If you want a reverb that has a built-in "Chorus" or "Pitch Drift" effect, an algorithmic reverb is more flexible. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Convolver

## UI Tour
Fruity Convolver features a spectral-focused interface:

1.  **Waveform Window:** Shows the loaded Impulse Response (IR). You can drag and drop any WAV file here. [SRC: IL-MAN]
2.  **Envelope Editor:** The white line over the waveform. You can draw Volume, Pan, or Stereo Width envelopes to shape the reverb tail.
3.  **EQ Window:** The green line. Allows for **Linear Phase EQ** shaping of the processed signal.
4.  **Stretch Knob:** Changes the length and pitch of the IR (Time manipulation).
5.  **Pre-Delay:** Sets the gap between the dry sound and the start of the convolution.
6.  **Self-Convolve Button:** Feeds the IR back into itself for extreme, metallic textures.

## Functional Flow
1.  **Input:** Audio enters.
2.  **Delay:** Pre-delay is applied.
3.  **FFT Convolution:** The plugin performs a Fast Fourier Transform to combine the input signal with the IR.
4.  **Envelope/EQ Shaping:** The result is shaped by the user-drawn curves.
5.  **Latency Correction:** The plugin reports its latency to FL Studio to ensure everything stays in sync. [SRC: IL-MAN]
6.  **Output:** Summed Wet/Dry signal.

## Things Beginners Misunderstand
- **"It’s too quiet":** IRs vary wildly in volume. Use the **Normalize** button (in the waveform editor) to ensure the space is audible.
- **Latency Delay:** Convolution is heavy math. If you feel a "lag" while playing, check the **Use Latency** button in the settings.
- **Dry/Wet on Sends:** If using Convolver on a Send, **turn the DRY slider to zero**. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Convolver

## 1. The "Booth" Reconstruction
- **Technique:** Use a small "Studio" or "Booth" IR.
- **Execution:** Set Wet to 10-15%. Set Pre-delay to 0ms.
- **Result:** Adds "air" and "presence" to a dry vocal, making it feel like it was recorded in a high-end vocal booth rather than a flat digital space.

## 2. Linear Phase Low-Cuts
- **Technique:** Use Convolver as a surgical EQ.
- **Execution:** Load the "Default" (Pulse) IR. Use the Green EQ line to cut everything below 100Hz.
- **Benefit:** Unlike standard EQs, this won't "smear" the phase of your Kick or 808, keeping the low-end perfectly tight. [SRC: REPUTABLE]

## 3. Reverse Reverb Throws
- **Technique:** Load a long "Hall" IR. Click the editor menu -> **Tools -> Reverse**.
- **Execution:** Automate the **Wet** knob to swell up *before* a vocal word hits.
- **Result:** The classic "sucking" transition effect used in thousands of rap intros.

## 4. Cabinet Modeling for Synths
- **Technique:** Load a "Guitar Cab" IR into Convolver.
- **Execution:** Set Mix to 100% Wet. Run a harsh digital synth (like 3x Osc) through it.
- **Benefit:** Instantly gives the synth an "analog" and "physical" character as if it’s coming through a real speaker. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
- **Pitfall:** "The reverb tail is too long and muddy."
  - **Fix:** Use the **Volume Envelope** (white line) to draw a sharp fade-out on the waveform. You can turn a 10-second cathedral into a 1-second room instantly.
- **Pitfall:** "The CPU is spiking."
  - **Fix:** Decrease the **Partition Size** in the settings (if available) or use shorter IR files. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Convolver

Convolution translates vibes through **Acoustic Reality** and **Spectral Warping**.

## 1. Moody (Cold, Isolated, Distant)
- **Concept:** A small, damp, reflective room.
- **Levers:**
  - **IR Selection:** "Small Room" or "Bathroom."
  - **EQ:** Darken the Green line (High-cut at 2kHz).
- **Listen For:** The sound of "claustrophobia." It feels like the artist is trapped in a dark space.
- **Don't Do This:** Don't use large halls; moody vibes in urban music often benefit from "closeness."

## 2. Upbeat (Punchy, Bright, Commercial)
- **Concept:** High-energy "Plate" sparkle.
- **Levers:**
  - **IR Selection:** "Bright Plate" or "Studio A."
  - **Pre-Delay:** 20ms - 40ms.
- **Listen For:** The "snap." The pre-delay lets the drum hit breathe before the reverb adds "gloss."
- **Don't Do This:** Don't muffle the highs; let the reverb "sizzle."

## 3. Psychedelic (Morphing, Liquid, Surreal)
- **Concept:** Sound-on-Sound textures.
- **Levers:**
  - **Stretch:** Automate the Stretch knob from 100% to 200%.
  - **Custom IR:** Drag a sample of a "Forest" or "City Street" into the window.
- **Listen For:** "Resonances" that don't belong to the original instrument. The sound will take on the frequency profile of the IR.
- **Don't Do This:** Avoid standard reverb IRs; find the weirdest sounds you can.

## 4. Jazzy (Natural, Organic, Cohesive)
- **Concept:** The "Live Ensemble" Room.
- **Levers:**
  - **IR Selection:** "Chamber" or "Small Hall."
  - **Wet Mix:** Subtle (10-20%).
- **Listen For:** Glue. The instruments should feel like they were all playing in the same room at the same time.

## 5. Vibey (Lush, Shimmering, Expensive)
- **Concept:** The "Radio Ready" Glow.
- **Levers:**
  - **IR Selection:** "Blur" presets.
  - **Stereo:** Maximize the Stereo Width envelope.
- **Listen For:** A shimmering high-end halo that follows the vocal without muddying the mix. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\acoustic-space-physics.md

```markdown
# The Master's Guide to Acoustic Space Physics and Convolution in Fruity Convolver

## 1. Introduction: The Sound of the World
In modern Hip-Hop and R&B, "Space" is a character. Whether it's the intimate small room of a 90s vocal or the vast, psychedelic "cloud" of a modern Trap interlude, the reverb defines the mood. **Fruity Convolver** is not a simulator; it is a **Cloner**. By using the mathematical process of convolution, it allows you to capture the exact "DNA" of a physical space or piece of gear and apply it to your audio. It is the bridge between the digital DAW and the physical world.

---

## 2. Theoretical Foundation: The Math of Convolution
### 2.1 FFT (Fast Fourier Transform) vs. Time-Domain
In basic terms, convolution is the process of multiplying two signals together. 
- **Time Domain:** To convolve a 1-second vocal with a 3-second room reverb, the computer has to perform 44,100 x 132,300 multiplications. This would crash most CPUs.
- **The FFT Secret:** Fruity Convolver converts the audio into the **Frequency Domain** (Spectrum). In this domain, convolution becomes a simple multiplication. This is why Convolver can handle massive, 10-second reverbs with almost zero CPU impact.

### 2.2 Linear Phase EQ (The Finite Impulse Response)
A convolution reverb is technically a giant **FIR (Finite Impulse Response) Filter**. 
- **The Phase Advantage:** Standard EQs shift the phase of the signal. Convolution does not. It is **Linear Phase**. 
- **The Production Impact:** This makes Convolver the ultimate tool for "EQ Matching" and subtle tonal shaping, as it preserves the "punch" and "alignment" of the original signal better than any standard EQ.

---

## 3. The Anatomy of an Impulse Response (IR)
To master Convolver, you must understand the three stages of a recording:
### 3.1 The Direct Signal (The Impulse)
The initial "spike" of energy. In Convolver, this is represented by the very start of the waveform.
### 3.2 Early Reflections (The Size)
The first few bounces off the walls. These arrive within the first 10-50 milliseconds.
- **The Brain's Calculation:** This is how the listener knows if the rapper is in a closet or a cathedral.
- **Master Strategy:** Use the **Input Delay** knob to separate these reflections from the dry vocal, keeping the lyrics clear but the "space" felt.
### 3.3 Late Reverb / Tail (The Vibe)
The thousands of chaotic reflections that follow. This provides the "mood."
- **Absorption Physics:** High frequencies bounce less than low frequencies. This is why "Moody" reverbs always have dark tails.

---

## 4. The Psychology of Blurring and Smearing
### 4.1 From Space to Texture
Psychedelic Hip-Hop (think Mike Dean or Travis Scott) often uses reverb not to create a room, but to create a **Texture**.
- **Spectral Blurring:** The **Blur** tool in Convolver uses an algorithm to smear the phase of the IR. 
- **The Result:** It removes the "echo" and turns the sound into a smooth, indefinite "cloud." This is the foundation of the "Moody Cloud Rap" aesthetic.

---

## 5. Genre-Specific Production Strategies
### 5.1 Moody R&B (The "Muffled Booth" Vibe)
- **The Technique:** Focus on the Early Reflections.
- **The Action:** Load a **Small Studio** IR. Use the internal EQ to cut everything above 5kHz.
- **The Result:** The vocal sounds intimate and "expensive," as if it were recorded in a heavily dampened, high-end studio booth.

### 5.2 Psychedelic Trap (The "Reverse Swell")
- **The Technique:** Time-reversal.
- **The Action:** Drag a vocal snippet into Convolver and hit the **Reverse** button.
- **The Result:** Every time the rapper speaks, a ghostly "swell" of sound builds up *before* the word. This is a classic psychedelic transition effect.

---

## 6. Technical Nuance: Zero Latency (LL) Mode
### 6.1 The Real-Time Constraint
Convolution naturally introduces delay (latency) because it has to wait for a "window" of audio to process.
- **The Solution:** Fruity Convolver has an **'LL' (Low Latency)** switch. 
- **Master Tip:** Always ensure this is ON when recording a vocalist. If it's OFF, the singer will hear themselves delayed, ruining their timing and "vibe."

---

## 7. Mathematical Stretch Table for Convolver
Use the **Stretch** knob to change the size of a space without changing its pitch:

| Stretch % | Resulting Sound | Best Genre Use |
|-----------|-----------------|----------------|
| **25%**   | Metallic / Tinny | Glitch-Hop, Industrial Rap |
| **50%**   | Tight Room      | Boom Bap Snares, 90s Rap |
| **100%**  | Natural Space   | General Purpose |
| **200%**  | Lush Cathedral  | Moody R&B Backing Vocals |
| **400%**  | Infinite Cloud  | Psychedelic Atmospheric Pads |

---

## 8. Conclusion: The Sonic Time Machine
Mastering Fruity Convolver is about **Capturing and Sculpting**. By understanding the FFT math and the psychoacoustics of early reflections, you can transport your listener to any environment imaginable. Whether you are "cloning" an expensive analog EQ or creating a swirling psychedelic cloud, Convolver is the ultimate tool for the producer who wants their music to sound "out of this world."

---
**Document Version:** 2.0 (Master Tier)
**Author:** AI Research Specialist
**Keywords:** Convolution Reverb, FFT Physics, Impulse Response, FIR Filters, Spectral Blurring, Hip-Hop Production.
```

---

## FILE: 01-Learning\Concepts\ir-capture-guide.md

```markdown
# Technical Guide: Capturing Your Own IRs

## The Goal
Capture the "soul" of a physical space (like a hallway or a bathroom) or a piece of analog hardware and bring it into **Fruity Convolver**.

## Requirements
1. A source of **Impulse** (The "Starter").
   - *Physical:* A starter pistol, a balloon pop, or a loud clap.
   - *Technical:* A Sine Sweep (Linear or Logarithmic).
2. A recording device (Phone, handheld recorder, or studio mic).

## Process: The Sine Sweep Method (Professional Standard)
1. **Preparation:** Play a 10-second Sine Sweep (20Hz to 20kHz) through the speakers in the room you want to capture.
2. **Recording:** Record the room's response from the position where the listener would be.
3. **Deconvolution:**
   - Load the **Original Sweep** and the **Recorded Response** into Convolver.
   - Use the **Deconvolve** tool.
   - Convolver subtracts the original sweep from the recording, leaving only the **Impulse Response**.

## Workflow for Gear Cloning
1. Play a sharp "White Noise" burst through a hardware distortion pedal or EQ.
2. Record the output.
3. Load into Convolver and use **Normalize**.
4. You now have a "static" digital clone of that hardware's frequency and phase response.

```

---

## FILE: 01-Learning\Concepts\zero-crossing-phase-alignment.md

```markdown
# The Master's Guide to Zero-Crossing Phase Alignment and Micro-Acoustics in Fruity Convolver

## 1. Introduction: The Battle of the First Sample
In the world of professional convolution, the most important sample is the **First One**. If your Impulse Response (IR) has even 1 millisecond of silence at the beginning, or if it doesn't start at a **Zero Crossing**, your entire mix will suffer from "Micro-Phase Cancellation." This ruins the "Punch" of your drums and the "Clarity" of your vocals. **Fruity Convolver** is a surgical tool. This guide explores the forensic physics of phase alignment and how to ensure your custom spaces are technically "Invisible" to the transients.

---

## 2. Theoretical Foundation: The Dirac Delta
### 2.1 The Perfect Impulse
In mathematics, the ideal impulse is a **Dirac Delta Function**—an infinitely short spike at `t=0`.
- **The Reality:** In Convolver, the start of your IR acts as this spike.
- **The Phase Trap:** If your IR starts at a positive or negative voltage (not zero), it introduces a **DC Offset** or a "Click" into every sound processed through it.
- **The Engineering Rule:** Always zoom in to the sample level in Edison and ensure the first sample of your IR is exactly at the `0.0` center line.

---

## 3. The Physics of Pre-Delay and Haas Alignment
### 3.1 Localization Neurology
The human brain uses the time between the dry sound and the first reflection to judge the **Distance to the Wall**.
- **The "Mud" Factor:** If the IR starts at 0ms, the reverb "Smears" the dry transient.
- **The "Intimacy" Fix:** By using Convolver's **Input Delay** knob, you are physically moving the virtual walls away from the singer.
- **The Master Move:** Set Pre-Delay to **20ms - 40ms**. This ensures the vocal's "Click" (the transients) stays sharp and clear, while the "Moody" room energy arrives just late enough to not interfere with the phase of the lyrics.

---

## 4. Phase-Coherent IR Sculpting
### 4.1 The "Reverse" Phase Hazard
When you use the **Reverse** button in Convolver for psychedelic "Sucking" effects:
- **The Physics:** The "End" of the tail (which is often quiet and messy) becomes the "Start" of the effect.
- **The Forensic Fix:** You MUST apply a tiny (2ms) fade-in to the reversed IR in Edison.
- **The Result:** This prevents the "Initial Pop" that occurs when a high-energy reversed signal hits the engine, ensuring your psychedelic transitions are smooth and professional.

---

## 5. Engineering the "Hi-Def" Space
### 5.1 Stereo Decorrelation Math
A "Cool" space is a wide space. To achieve this without phase issues:
- **The Strategy:** Use two different IRs for the Left and Right channels (Dual-Mono Convolution).
- **The Science:** By using two slightly different "Room DNA" samples, you prevent the Left and Right ears from hearing the same reflections.
- **The Result:** The brain can't localize the center of the reverb, making it feel **"Infinite" and "Immersive."**

---

## 6. Forensics Table: IR Alignment Constants

| Target Space | Starting Offset | Fade Type | Zero-Crossing? | Resulting Impact |
|--------------|-----------------|-----------|----------------|------------------|
| **Drum Room**| 0 ms            | Instant   | **Critical**   | Maximum "Crack" and punch. |
| **Vocal Booth**| 15-25 ms      | Linear    | Preferred      | Intimate clarity. |
| **Deep Hall** | 50-80 ms       | Exponential| Optional       | Vast cinematic depth. |
| **Psy-Ghost** | -50 ms (Pre)   | Reverse   | N/A            | Sucking transition. |

---

## 7. Conclusion: The Master of Alignment
Mastering Fruity Convolver is about **Forensic Precision.** A reverb should be a "Ghost"—felt but not seen. By ensuring your IRs are phase-aligned to the zero-crossing and utilizing pre-delay to protect your transients, you create spaces that are technically perfect and emotionally massive. This is the difference between an "Amateur Reverb" and a **"Professional Environment."** Follow these forensic protocols to own the micro-acoustics of your Hip-Hop and R&B productions.

---
**Document Version:** 1.0 (Quantum Engineering Tier)
**Author:** Forensic Acoustics Lead
**Keywords:** Zero Crossing, Phase Alignment, Micro-Acoustics, Impulse Response, Pre-Delay, FL Studio Engineering.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Convolver (5 Minutes)

1.  **Insert:** Load **Fruity Convolver** onto a vocal or instrument track.
2.  **Browse IRs:** Click the folder icon or drag a WAV file directly into the main window.
3.  **Mix:** Turn the **WET** knob to roughly 20-30% (if on an insert) or 100% (if on a send).
4.  **Tone:** Draw on the **Green EQ line** to cut lows or boost highs of the reverb.
5.  **Timing:** Adjust **Pre-Delay** if the vocal sounds too "drowned."
6.  **Tip:** Use the **Normalize** button (the "N" in the waveform tools) to make sure your IR is loud enough. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity Convolver

- **Mixing 100% Wet on Inserts:** Forgetting to turn down the Wet knob when placing Convolver directly on a track. **Fix:** Use the Dry/Wet knobs or the mixer slot mix level.
- **Ignoring Latency:** Running Convolver in "Real-time" mode without checking project delay compensation. **Fix:** If everything feels "laggy," check the **Use Latency** setting in the plugin options.
- **Muddy IRs:** Using a massive Cathedral IR on a Kick drum. **Fix:** Low-cut the reverb tail at at least 300Hz using the Green EQ line.
- **Static IR Length:** Thinking you are stuck with the length of the WAV file. **Fix:** Use the **Volume Envelope** (white line) to "Draw" a shorter decay.
- **Oversampling Oversights:** Not realizing that time-stretching (Stretch knob) an IR can introduce artifacts. **Fix:** Use subtle stretch amounts or high-quality IR samples. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points: Fruity Convolver

| Goal | IR Type | Pre-Delay | Stretch | EQ Curve |
| :--- | :--- | :--- | :--- | :--- |
| **Vocal Air** | Bright Plate | 40ms | 100% | High Shelf @ 10kHz |
| **Drum Room** | Studio B | 0ms | 80% (Short) | Neutral |
| **Ambient Wash**| Blur Presets | 100ms | 150% (Long) | Dark (Low Pass) |
| **Cab Simulation**| 4x12 Guitar Cab| 0ms | 100% | Focus @ 2kHz |
| **Ghost Echoes** | Custom Noise | 250ms | 200% | Band Pass |

*Note: Pre-delay is essential for keeping the "Hit" of the sound distinct from the space.* [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Starting Points: Moody (Fruity Convolver)

- **The Goal:** A lonely, claustrophobic atmosphere.
- **Recipe:**
  1. Load a "Small Bathroom" or "Closet" IR.
  2. Set **Stretch** to 120% (makes the room sound slightly larger/deeper).
  3. Use the **Green EQ** to pull down all frequencies above 1.5kHz.
  4. Draw a **Volume Envelope** that cuts off abruptly after 0.5 seconds.
- **Result:** You get a very tight, "dark" reflection that makes the instrument feel isolated and heavy. Perfect for the intro of a moody trap beat.
- **Mix Tip:** Place a **Fruity Blood Overdrive** *before* Convolver to distort the signal entering the room. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey

## Upbeat (The "Glossy Snap")
- **Settings:** High-pass @ 500Hz on the EQ line. 30ms Pre-delay.
- **Vibe:** Ensures the drums hit hard but the mix feels "expensive" and airy.

## Psychedelic (The "Spectral Melt")
- **Technique:** Drag a vocal recording into Convolver. Use it as the IR for a synth.
- **Effect:** The synth will "sing" the words of the vocal through its harmonics. 

## Jazzy (The "Realistic Glue")
- **Settings:** Large Chamber IR. 10% Wet.
- **Vibe:** Makes MIDI instruments sound like they were recorded together in a professional studio.

## Vibey (The "Silk Trail")
- **Settings:** "Blur" presets. High Stretch (150%). 
- **Effect:** Turns any sound into a soft, ethereal cloud that fills the background. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Convolver: The Cloning Machine

> **Scope:** Convolution Reverb, Cabinet Simulation, and Linear Phase EQ.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** High (Sound Design).

## 🧠 The "Convolution" Concept
Fruity Convolver captures the "Snapshot" (Impulse Response) of a space or device and applies it to your audio.
*   **Reverb:** Load a Hall IR -> Your vocals sound like they are in that Hall.
*   **Cabinets:** Load a Guitar Cab IR -> Your sawtooth wave sounds like it's coming out of a Marshall 4x12.
*   **EQ:** Load a Single Cycle EQ Click -> Your audio is EQ'd with perfect Linear Phase characteristics.

**Signal Flow:**
`Input` -> **[PRE-DELAY]** -> **[CONVOLUTION ENGINE (IR + EQ)]** -> **[STRETCH/BLUR]** -> **[MIX]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Impulse Editor

This is an embedded version of **Edison**.
*   **Envelopes:** You can draw Volume, Pan, and Stereo envelopes *on top* of the Reverb tail.
    *   *Gating:* Draw a Volume envelope that drops instantly to zero after 1 second.
    *   *Auto-Pan:* Draw a wavy Pan envelope to make the reverb swirl.
*   **Equalizer:** The EQ tab applies filter curves to the IR. Since the IR is static, this EQ is "baked in" and consumes zero extra CPU during playback.

---

## 🔁 Section 2: The "Spark" (Cloning Plugins)

Fruity Convolver has a built-in "Click Generator" (Spark Icon) to clone other reverb plugins.
*   **Method:**
    1.  Convolver A (Generator) -> Reverb Plugin (Target) -> Convolver B (Recorder).
    2.  Hit "Spark" on A.
    3.  B records the tail.
*   **Limitation:** It cannot capture *Modulation* (Chorus/Flanging) because those change over time. It only captures static linear systems (EQ, Reverb, Delay, Distortion cabinets).

---

## ⚡ Technical Specs: Zero Latency?

*   **Latency:** Convolution is math-heavy. By default, it introduces signficant latency.
*   **Zero Latency Mode:** There is a switch to process in real-time blocks, but it increases CPU usage significantly.
*   **Linear Phase EQ:** By drawing an EQ curve in the EQ tab, Convolver creates an impulse that applies that EQ with Linear Phase (no phase shift). This is often better than using Parametric EQ 2 for mastering.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Blur" Texture
1.  **Load:** A vocal sample *as* the Impulse.
2.  **Knob:** Turn up **Blur**.
3.  **Result:** The vocal is smeared into a ghostly drone.
4.  **Use:** Convolution Reverb creates "spectral hybrids". Drum Loop *convolved with* Vocal Sample = Singing Drums.

### 2. Guitar Cabinet Loader
1.  **Context:** Using Distructor or Hardcore.
2.  **Action:** Bypass the built-in Cab.
3.  **Chain:** Add Fruity Convolver after the amp sim.
4.  **Load:** A 3rd party ".wav" IR of a Mesa Boogie Cabinet.
5.  **Result:** Instant realism upgrade.

### 3. Gated Snare (80s Style)
1.  **Load:** A lush 4-second Hall Plate.
2.  **Editor:** Go to Volume Envelope/
3.  **Draw:** A flat line for 200ms, then a sharp vertical drop to silence.
4.  **Result:** The Phil Collins snare sound, perfectly timed, with no release tail artifacts.

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Fruity Convolver: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** FFT-Based Convolution Processor
**Engine Version:** Zero-Latency FIR Logic
**Target Genres:** Moody R&B, Atmospheric Rap, Cinematic Hip-Hop, Psychedelic Soul

---

## 1. THE MIX & TIMING MODULE
This section determines how the dry signal interacts with the captured acoustic space.

### 1.1 Dry / Wet Knobs
- **Technical Logic:** Linear gain controllers for the original and processed paths.
- **Master Strategy:** 
    - **Insert Use:** Set Dry to 100%, Wet to 10-25%.
    - **Send Use:** Set Dry to 0%, Wet to 100%. This is the professional standard for R&B, as it allows you to EQ the reverb separately from the vocal.

### 1.2 Input Delay (Predelay)
- **Technical Range:** 0ms to 500ms.
- **Physics:** Delays the signal BEFORE it triggers the reverb engine.
- **The "Intimacy" Rule:** Setting this to **20-40ms** creates a psychological gap between the singer and the room. This makes the vocal sound "closer" and clearer while still having a massive "moody" tail.

---

## 2. THE IR SCULPTING ENGINE (The Shape)
Unlike algorithmic reverbs, Convolver allows you to physically manipulate the recorded waveform.

### 2.1 Stretch Knob
- **Technical Logic:** Time-stretching the IR without affecting the pitch.
- **The Physics of Size:** 
    - **<100%:** Shrinks the room. Makes the reverb "tighter" and "snappier." Perfect for Boom Bap drums.
    - **>100%:** Expands the room. Makes the tail longer and more "ethereal." Ideal for psychedelic "Cloud Rap."

### 2.2 Reverse Button
- **Action:** Flips the IR waveform in the time domain.
- **Result:** Creates a "Swell" effect where the reverb builds up TO the sound rather than fading away FROM it.
- **Master Tip:** Use this on a single snare hit at the end of a 4-bar loop for a cool, rhythmic transition.

### 2.3 Normalize Button
- **Logic:** Maximizes the volume of the IR to 0dB.
- **Why it matters:** Many free IRs downloaded from the internet are very quiet. Normalizing ensures you have a consistent "Wet" level across different IRs.

---

## 3. THE SPECTRAL TOOLS (The Texture)
### 3.1 Blur Tool (Wrench Menu)
- **The Math:** Convolves the IR with a burst of white noise.
- **Effect:** Turns any distinct echoes (Early Reflections) into a smooth, smeared "cloud."
- **R&B Use Case:** Blur a "Hall" IR to create a silky, expensive-sounding background for Neo-Soul pads.

### 3.2 Impulse Trigger
- **Technical Feature:** Click the 'Lightning' icon to send a sample-accurate impulse through the engine.
- **Usage:** This allows you to "audition" the reverb sound without playing any audio from your track.

---

## 4. THE INTEGRATED EQ (The Tone)
### 4.1 Frequency Curve Editor
- **Type:** Linear Phase FIR EQ.
- **The "Moody" Filter:** Draw a steep curve that cuts everything above **5kHz**. This is the secret to "Dark" reverb that doesn't clash with the hi-hats.
- **The "Clean Sub" Filter:** Cut everything below **300Hz** inside the plugin. This prevents the reverb from making your 808 sound muddy and "flabby."

---

## 5. PERFORMANCE & OPTIMIZATION
### 5.1 LL (Low Latency) Switch
- **Crucial Warning:** If LL is OFF, the plugin adds latency to your track equal to the IR length (up to 2048 samples).
- **Master Strategy:** Keep LL **ON** during the production and recording phase. You can turn it **OFF** during the final mixing/mastering phase for slightly higher audio fidelity if your CPU allows.

### 5.2 Self-Mono Switch
- **Action:** Forces the IR to sum to Mono.
- **Use Case:** If a reverb tail is too "distracting" or wide, Mono-ing it can help focus the listener's attention back to the center-panned vocal.

---

## 6. HIDDEN MENUS & ADVANCED ROUTING
- **Right-Click Waveform:** Allows you to 'Edit in Edison.' You can then use Edison's advanced processing (Fading, Cropping, Noise Removal) and drag the result back into Convolver.
- **Impulse Copy/Paste:** You can copy the impulse data from one instance of Convolver to another to ensure perfect "Room Matching" across multiple tracks.

---

## 7. TROUBLESHOOTING
- **Issue:** "My CPU is hitting 100%."
- **Fix:** You are likely using an IR that is too long (e.g., 30 seconds). Crop the tail in Edison or reduce the **Stretch** value.
- **Issue:** "The reverb sounds 'phased' or hollow."
- **Fix:** Check if you have the same IR on two parallel tracks. This causes phase cancellation. Ensure **Self-Mono** is consistent across instances.

---

## 8. SUMMARY: THE "VIBE" PRESETS
- **THE "DILATED" ROOM:** Stretch 50%, HP 400Hz, LP 6kHz, Mix 15%. (Vibe: Intimate R&B).
- **THE "NEPTUNES" DRUM ROOM:** Small Room IR, Normalize ON, Wet 10%, Stretch 80%. (Vibe: Dry but punchy 2000s Hip-Hop).
- **THE "GHOST" VOCAL:** Blur ON, Reverse ON, Stretch 200%, Wet 100%. (Vibe: Psychedelic transitions).

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** Fruity Convolver, Impulse Response, FFT Engine, Reverb Sculpting, R&B Mixing, DSP Logic.
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Convolver

| Parameter | Type | Range | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Stretch** | Knob | 25% to 400% | **Psychedelic** | **Timing** | Changes IR length/pitch. |
| **Pre-Delay** | Knob | 0 to 1000ms | **Upbeat** (Clarity)| **Depth** | Gap before reverb hits. |
| **Self-Convolve**| Toggle | On / Off | **Psychedelic** | **Density** | Multiplies IR with itself. |
| **Dry/Wet** | Slider | -inf to +12dB | **All** | **Loudness** | Parallel mix controls. |
| **EQ Line** | Graph | Linear Phase | **Moody** (Damp) | **Spectrum** | Direct spectral shaping. |

- **Vibe Impact Tag (Psychedelic):** Self-Convolve and extreme Stretch create unnatural, metallic spaces.
- **Mix Impact Tag (Depth):** Convolution provides more "True Depth" than algorithmic algorithms because it includes early reflections. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\convolver-specs.json

```json
{
  "plugin": {
    "name": "Fruity Convolver",
    "category": "Reverb",
    "type": "Convolution Processor",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Convolver.htm"
  },
  "parameters": {
    "spatial": [
      {"id": "inputDelay", "name": "Predelay", "unit": "ms"},
      {"id": "stretch", "name": "Stretch", "unit": "%"}
    ],
    "mix": ["Dry", "Wet"],
    "tools": [
      "Blur", "Normalize", "Reverse", "EQ Match", "Impulse Trigger"
    ]
  },
  "technical": {
    "engine": "Fast Fourier Transform (FFT)",
    "latency": "Variable (User controllable via LL switch)",
    "capabilities": "Zero-latency convolution, Linear Phase EQing"
  }
}

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity Convolver",
  "category": "Convolution Reverb",
  "parameters": [
    {
      "section": "Main",
      "id": "dry_level",
      "name": "Dry",
      "range": { "min": -100, "max": 0, "unit": "dB" },
      "description": "Original signal level."
    },
    {
      "section": "Main",
      "id": "wet_level",
      "name": "Wet",
      "range": { "min": -100, "max": 0, "unit": "dB" },
      "description": "Convolved signal level."
    },
    {
      "section": "Main",
      "id": "predelay",
      "name": "Delay",
      "range": { "min": 0, "max": 500, "unit": "ms" },
      "description": "Time before convolution starts."
    },
    {
      "section": "Main",
      "id": "stereo_sep",
      "name": "Separation",
      "range": { "min": -100, "max": 100, "unit": "%" },
      "description": "Stereo width of the Wet signal."
    },
    {
      "section": "Impulse",
      "id": "stretch",
      "name": "Stretch",
      "range": { "min": 0, "max": 200, "unit": "%" },
      "description": "Pitch/Time scaling of the IR."
    },
    {
      "section": "Modulation",
      "id": "blur",
      "name": "Blur",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Spectral smearing amount."
    }
  ]
}

```

---

## FILE: 02-Data\presets\retro-future-spaces.json

```json
{
  "retroFuturePresets": {
    "philosophy": "This data-set provides the technical parameters for 'Retro-Future' spaces—acoustic environments that combine the warmth of 1970s hardware with the clean air of modern digital R&B.",
    "archetypes": [
      {
        "name": "The Chrome Plate (Modern Soul)",
        "components": {
          "irSource": "Vintage EMT-140 Plate Reverb",
          "sculpting": {
            "stretch": "115%",
            "highPass": "600Hz",
            "lowPass": "8500Hz",
            "blur": "15%"
          }
        },
        "vibe": "Warm mid-range 'Soul' with a shimmering digital high-end. Perfect for Neo-Soul vocals."
      },
      {
        "name": "The Neon Warehouse (Psy-Trap)",
        "components": {
          "irSource": "Industrial Concrete Space",
          "sculpting": {
            "reverse": "ON",
            "stretch": "200%",
            "blur": "45%",
            "highPass": "350Hz"
          }
        },
        "vibe": "Huge, swelling, hazy textures. The sound of a physical space being 'stretched' by a computer."
      },
      {
        "name": "The Analog Starship (Moody R&B)",
        "components": {
          "irSource": "Large Cathedral + White Noise Hybrid",
          "sculpting": {
            "stretch": "400%",
            "lowPass": "2500Hz",
            "selfMono": "ON",
            "inputDelay": "60ms"
          }
        },
        "vibe": "Dark, intimate, and seemingly infinite. The sound of being 'Alone in Space'. Ideal for deep background ad-libs."
      }
    ],
    "engineeringLogic": [
      {
        "objective": "Achieve 'Hi-Def' depth",
        "action": "Set Convolver to 'LL' (Low Latency) mode but set the Master Wrapper 'Oversampling' to 2x during render. This preserves the 'Hi-Freq' air of the custom IRs."
      },
      {
        "objective": "Maintain 'Cool' low-end",
        "action": "Always use the internal Convolver EQ to cut below 400Hz. This prevents the 'Ghost Space' from making your 808 sound flabby."
      }
    ]
  }
}

```

---

## FILE: 02-Data\presets\reverb-archetypes.json

```json
{
  "archetypes": [
    {
      "name": "Classic Studio Plate",
      "irType": "Plate Reverb Sample",
      "settings": {
        "stretch": "120%",
        "hpFilter": "300Hz",
        "lpFilter": "8000Hz"
      },
      "useCase": "Vocals and Snares for 80s warmth."
    },
    {
      "name": "Concrete Warehouse",
      "irType": "Industrial Space",
      "settings": {
        "stretch": "200%",
        "dryMix": "0%",
        "wetMix": "100%"
      },
      "useCase": "Cinematic atmosphere or sound design."
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Fruity Convolver)

## 1. Sub-Bass Safety
- **Rule:** Never convolve frequencies below **150Hz**. 
- **Application:** Use the built-in Green EQ line to high-pass your reverb tail. Low-frequency convolution causes massive phase mud that kills your 808. [SRC: REPUTABLE]

## 2. Vocal "Booth" Polish
- **Rule:** Dry vocals sound "cheap."
- **Application:** Use a 5% Wet "Short Studio" IR. It shouldn't sound like "reverb," it should just sound like the mic was high-quality.

## 3. Mono Compatibility Check
- **Rule:** Some IRs (especially stereo field recordings) can have extreme phase issues.
- **Move:** Switch to Mono. If the reverb disappears, try a different IR or reduce the **Stereo Width** envelope in the plugin.

## 4. Reverse Reverb Timing
- **Rule:** Reverse swells must land exactly on the downbeat.
- **Application:** Place the IR, reverse it, then automate the volume so the peak hits exactly at Bar 1, Beat 1.

## 5. Gain Staging
- **Rule:** Convolution can be very loud depending on the IR.
- **Application:** Always check your output level. Use the **Normalize** tool in the editor to maintain a consistent baseline. [SRC: IL-MAN]

```

---

## FILE: 02-Data\rules\convolver-usage-rules.json

```json
{
  "rules": [
    {
      "goal": "Natural Vocal Placement",
      "if": "Vocal sounds 'on top' of the mix",
      "then": [
        "Select a Small Room IR",
        "Set Predelay to 20-40ms to separate vocal from reflections",
        "Wet mix below 15%"
      ]
    },
    {
      "goal": "Deep Sub Isolation",
      "if": "Reverb is muddying the kick",
      "then": [
        "Apply internal EQ High-Pass at 500Hz",
        "Reduce Stretch to shorten the tail"
      ]
    }
  ]
}

```

---

## FILE: 02-Data\rules\moody-space-rules.json

```json
# The "Cloud" Ambience Rulebook

## Psychedelic Space
In psychedelic genres, space shouldn't just be "reverb"—it should be a texture.
- **Blur Everything:** Use the **Blur** tool in Convolver to turn a drum loop or a vocal snippet into a 10-second long "cloud" of sound.
- **Reverse Textures:** Reversing an IR creates a "swell" that pulls the listener into the sound, essential for psychedelic transitions.

## Moody R&B Rules
- **Rule 1:** Reverb tails must be dark. If the tail is too bright, it sounds like EDM. Keep the internal EQ LP filter below 5kHz.
- **Rule 2:** The "Front-Back" relationship. Use **Predelay** (Input Delay) to push the reverb *away* from the dry vocal. 50ms is the sweet spot for a "moody but clear" mix.

```

---

## FILE: 02-Data\rules\phase-logic.json

```json
{
  "phaseLogic": {
    "behavior": "Convolution is inherently Linear Phase.",
    "implication": "It does not rotate phase at the crossover points, making it superior to IIR EQs for parallel processing.",
    "warning": "If the IR itself was recorded with phase-shifting gear, that shift will be captured and applied to your signal."
  }
}

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity Convolver

## 1. Cloning "Valhalla" (Plugin Theft)

1.  **Scenario:** You love a specific preset in a CPU-heavy Reverb plugin, but you want to use it on 20 tracks.
2.  **Setup:**
    *   Slot 1: **Fruity Convolver** (The Trigger).
    *   Slot 2: **Heavy Reverb** (The Target). *Set Mix to 100% Wet*.
    *   Slot 3: **Fruity Convolver** (The Recorder).
3.  **Process:**
    *   Arm Record on Slot 3.
    *   Hit the "Spark" (Lightning Bolt) on Slot 1.
    *   Wait for the tail to die.
4.  **Finish:** Drag the audio form Slot 3's editor out to your desktop, then drag it into a fresh Convolver. You now have that reverb sound with optimized CPU usage.

## 2. Linear Phase Mastering EQ

1.  **Goal:** Boost Highs transparency without phase smear.
2.  **Action:**
    *   Load "Default" preset (should be a Dirac spike).
    *   Go to **Impulse EQ** tab.
    *   Draw a High Shelf boost.
3.  **Why:** Convolver applies this EQ using FFT convolution, which is naturally Linear Phase. It is cleaner than IIR filters (Parametric EQ 2) for subtle mastering adjustments.

## 3. The "Resonator" (Short Metal IRs)

1.  **Source:** Record a single hit of a metal pipe or a wine glass (0.5 seconds).
2.  **Load:** Import this as the Impulse.
3.  **Input:** Percussion Loop.
4.  **Result:** The percussion loop sounds like it is being played *inside* the metal pipe. The resonant frequencies of the pipe are imposed on the drums.

## 4. Stretch & Pitch warping

1.  **Knob:** The **Stretch** knob (Time Stretch).
2.  **Effect:**
    *   Stretch 200%: The room size doubles.
    *   Stretch 50%: The room shrinks (Munchkinization).
3.  **Pitch:** Unlike time-stretching audio clips, stretching an IR changes its frequency response (Pitch Shift). A large Hall stretched becomes a rumbling dungeon.

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Creative_Effect.md

```markdown
# Goal: Experimental Convolution (Spectral Vocoding)

## Routing Context
- **Target:** A Drum Loop or rhythmic pattern.
- **Position:** Insert FX.

## Step-by-Step Setup
1.  On the Drum track, load **Fruity Convolver**.
2.  Set the **Mix** to 100% WET (Dry at zero).
3.  **The Secret IR:** Drag a sample of a **Sustained Vocal** or a **Brass Chord** into the Convolver window.
4.  **Result:** The rhythm of the drums will "play" the notes of the vocal/brass. It creates a ghostly, rhythmic vocoder effect.
5.  **Tweak:** Use the **Stretch** knob to pitch-shift the tonal IR until it matches the key of your song.

## What To Listen For
- A metallic, resonant quality. The "texture" of the drums remains, but the "tone" comes entirely from the IR sample.

## Vibe Check
- **Psychedelic:** This is perfect for creating trippy, alien background layers in experimental trap.

## Pitfalls + Fixes
- **Pitfall:** "The sound is too busy."
  - **Fix:** Use the **Volume Envelope** (white line) to shorten the IR sample so the echoes don't overlap too much. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\02_Goal_Mix_Validation.md

```markdown
# Goal: Linear Phase EQ Mode (Fruity Convolver)

## The Concept
Using Convolver as a transparent EQ that doesn't mess up your phase. Essential for clean 808s and Mastering.

## Step-by-Step Setup
1.  Initialize **Fruity Convolver**.
2.  Load the **"Default" (Pulse)** preset. This is a single sample "click" that has no reverb tail.
3.  Turn **Dry to zero** and **Wet to 100%**.
4.  Now, any change you make to the **Green EQ Line** acts as a high-quality **Linear Phase EQ**.
5.  **Result:** You can cut sub-bass or boost highs with zero phase smearing.

## Vibe Check
- **Vibey/Polished:** This is how you get that professional, "uncolored" mix clarity.

## Variation
- **The "Blur" EQ:** Load a "White Noise" IR instead of the Pulse. Now your EQ moves will sound "smeared" and atmospheric.

## Pitfalls
- **Latency:** Linear phase processing requires a large buffer. FL Studio will handle this via PDC, but you may notice a delay when starting/stopping the track. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\advanced-impulse-sculpting-masterclass.md

```markdown
# Masterclass: Advanced Impulse Sculpting and IR Editing in Edison for Fruity Convolver

## 1. Executive Summary: The Sculptor's Hands
Fruity Convolver is only as good as the **Impulse Response (IR)** you feed it. While many producers download generic room samples, elite sound designers (think the atmospheric work of Clams Casino or Lorn) "Sculpt" their own IRs to create unique, non-physical spaces. This guide provides the definitive workflow for editing raw audio inside **Edison** to create the perfect "Moody" or "Psychedelic" IR for Convolver.

---

## 2. Phase 1: Cleaning the DNA (The Initial Edit)

### 2.1 Removing the "Air" (Silence Trimming)
- **The Physics:** An IR must start exactly at the first sample. If there is a 5ms gap of silence, your reverb will have a 5ms delay that ruins the phase of your drums.
- **The Action:** Open your IR in Edison. Select the very beginning. Zoom in to the sample level.
- **The Tool:** Use the **Trim** tool to ensure the waveform starts at zero crossing on sample #1.

### 2.2 Normalization vs. Perception
- **The Logic:** You want your IR to be loud enough to trigger the engine, but not so loud that it clips the convolution math.
- **The Goal:** Normalize the IR to **-3dB** in Edison. This provides enough digital headroom for Convolver’s internal EQ and Stretching algorithms to work without distortion.

---

## 3. Phase 2: Temporal Sculpting (The Envelope)

### 3.1 Linear Phase Fading
Standard volume fades can cause phase shifts in the reverb tail.
- **The Master Strategy:** Use Edison's **Fade Out** tool, but choose the **Logarithmic** curve.
- **The Physics:** Sound in a room decays exponentially. By forcing the IR into a logarithmic fade, you ensure the reverb tail sounds "Natural" and "Smooth" even if the original recording was messy.
- **Moody R&B Tip:** Create a very short, sharp fade-out (under 500ms) to turn a "Church" IR into a "Studio Booth" IR.

### 3.2 High-Frequency Damping
In "Moody" production, the reverb tail must not compete with the vocal's clarity.
- **The Action:** Use Edison’s **EQ (Ctrl+E)** on the IR itself before dragging it into Convolver.
- **The Curve:** Apply a 6dB/octave shelf starting at 4kHz.
- **The Result:** You are "Pre-Damping" the space. The reverb will be warm and dark, which is the cornerstone of the Toronto R&B sound.

---

## 4. Phase 3: Spatial Transformations

### 4.1 The "Sucking" Effect (Reversing)
Psychedelic Hip-Hop often uses "Reverse Reverb."
- **The Action:** In Edison, select the entire IR and hit **Alt+Left Arrow (Reverse)**.
- **The Workflow:** 
    1. Reverse the IR.
    2. Normalize it.
    3. Drag into Convolver.
- **The Result:** Every time your synth plays, the "Reverb" will build up *before* the hit. This is the ultimate "Trippy" transition effect.

### 4.2 Stereo De-correlation
If an IR sounds "Thin" in stereo:
- **The Hack:** Swap the Left and Right channels of the IR in Edison.
- **The Physics:** Sometimes the phase relationship of a recorded room is better when flipped. This can "Open Up" the center of the mix for the lead vocal.

---

## 5. Phase 4: Integration (The Final Drag)

### 5.1 The "Wrench" Menu Secrets
Once the sculpted IR is back in Convolver, use the internal tools to finish the job:
- **Stretch:** Set to **125%** to expand your custom room without changing the pitch.
- **Blur:** Apply 20% blur to your custom vocal IRs (see the Vocal IR masterclass) to smooth out the "human" artifacts into a silky cloud.

---

## 6. Mathematical IR Sculpting Table
Use these Edison edits to achieve specific vibes:

| Vibe Goal | Edit in Edison | Convolver Setting | Result |
|-----------|----------------|-------------------|--------|
| **Intimate** | Cut Tail to 200ms | Stretch 80%       | Small Booth feel. |
| **Dreamy**   | High-Shelf @ 2k | Blur 50%          | Hazy background. |
| **Aggressive**| Add Distortion | High-Pass @ 500Hz | Industrial grit. |
| **Endless**  | Loop middle part| Stretch 400%      | Infinite texture. |

---

## 7. Conclusion: The Master of Environments
Sculpting IRs in Edison for Fruity Convolver moves you from a **"User of Spaces"** to a **"Creator of Realms."** By physically manipulating the digital DNA of a room or sound, you create textures that are technically unique and emotionally powerful. This is the level of detail required for elite Hip-Hop and R&B production. Follow this masterclass, and your "Space" will be as tailored and professional as your melodies.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** IR Sculpting, Edison Workflow, Convolution Reverb, Audio Editing, R&B Space, Sound Design.

```

---

## FILE: 03-Workflows\by-goal\dreamy-psychedelic-clouds.md

```markdown
# Masterclass: Designing Dreamy Psychedelic Clouds in Fruity Convolver

## 1. Executive Summary: The "Cloud Rap" Aesthetic
The "Psychedelic Cloud" is an atmospheric texture that feels like a vast, swirling nebula of sound. It is the defining element of Cloud Rap, Shoegaze Hip-Hop, and modern Ambient R&B (pioneered by artists like ASAP Rocky, Clams Casino, and Joji). Unlike standard reverb, a "Cloud" has no identifiable room size—it is infinite, blurry, and haunting. This guide will show you how to use the **Spectral Blurring** and **Time-Stretching** capabilities of **Fruity Convolver** to turn any sound into a masterpiece of atmosphere.

---

## 2. Phase 1: Material Selection (The Input)

### 2.1 The "Grain" Theory
To create a great cloud, you need a source with harmonic richness but low rhythmic complexity.
- **The Best Sources:** A single sustained vocal note, a guitar pluck with heavy chorus, or a digital pad.
- **The "Artifact" Secret:** Even a simple "Click" or "Snap" can be turned into a cloud. In fact, short sounds often produce cleaner clouds because they contain less "mid-range clutter."

---

## 3. Phase 2: Technical Liquification (The Engine)

### 3.1 The "Blur" Algorithm
1. **The Action:** Drag your source sample into the Convolver waveform display.
2. **The Wrench Menu:** Click the Wrench icon -> **Blur**.
3. **The Physics:** Convolver is now performing a complex spectral smear. It randomizes the phase of every frequency in the sample.
4. **The Result:** The sound loses all "attack." It becomes a silky, indefinite texture that lasts for several seconds.

### 3.2 Time-Expansion (The Infinity Knob)
- **Goal:** We want the cloud to last forever.
- **Action:** Set the **Stretch** knob to **200% - 400%**.
- **The Logic:** Because Convolver uses FFT stretching, it expands the *duration* of the reverb tail without changing the *pitch*. This creates a massive sense of scale that feels "unnatural" and psychedelic.

---

## 4. Phase 3: Spatial Filtering (The Mood)

### 4.1 The Toronto Filter (High-Cut)
Clouds must be dark to be "cool."
- **Action:** In the internal EQ window, draw a steep **Low-Pass** curve.
- **The Cutoff:** Set it to **2500Hz**.
- **The Physics:** This removes the "digital harshness" and makes the cloud sound like it's drifting from miles away.

### 4.2 The Rumble Cut (Low-Cut)
- **Action:** Apply a **High-Pass** at **400Hz**.
- **The Reason:** We need to leave room for the 808. A cloud that has too much sub-bass will make your entire track sound "muddy" and unprofessional.

---

## 5. Phase 4: Dynamic Breathing (Sidechaining)

### 5.1 The "Pump" Rule
A static cloud can be boring. It needs to "breathe" with the beat.
- **Action:** Insert a **Fruity Limiter** *after* Convolver.
- **Routing:** Sidechain your **Kick Drum** mixer track to the Cloud mixer track.
- **Setting:** Enable the COMP sidechain in the Limiter.
- **Result:** Every time the kick hits, the psychedelic cloud "ducks" out of the way and then "swells" back in. This creates a hypnotic, pulsing sensation that is the hallmark of professional Trap production.

---

## 6. Phase 5: Post-Convolution Modulation (The "Cool" Factor)

### 6.1 The "Drunken" Drift (Fruity Chorus)
- **Action:** Follow the Limiter with a **Fruity Chorus**.
- **Settings:** Rate 0.1Hz (extremely slow), Depth 50%, Stereo Cross 100%.
- **The Result:** The wide cloud will now slowly "wobble" in the stereo field, mimicking the drift of a vintage analog tape loop.

---

## 7. Mathematical Vibe Table for Clouds
Use these values to change the "Density" of your cloud:

| Cloud Density | Blur Setting | Stretch | HP Filter | Wet Mix |
|---------------|--------------|---------|-----------|---------|
| **Mist (Light)** | 20%          | 100%    | 800Hz     | 15%     |
| **Fog (Moody)**  | 50%          | 150%    | 400Hz     | 30%     |
| **Storm (Industrial)** | 80%       | 80%     | 200Hz     | 60%     |
| **Void (Psychedelic)** | 100%      | 400%    | 600Hz     | 100%    |

---

## 8. Troubleshooting the Cloud
- **Issue:** "The cloud is too loud and taking over the mix."
- **Fix:** Decrease the **Wet Mix** to 10% and lower the **Post Filter** to 1500Hz.
- **Issue:** "The cloud sounds 'grainy' or digital."
- **Fix:** Run the **Blur** tool a *second* time. This performs "Double Smearing," which results in a perfectly smooth texture.

---

## 9. Conclusion: The Atmospheric Architect
Mastering the "Psychedelic Cloud" in Fruity Convolver is about **Subtraction and Transformation**. By blurring the source, stretching the time, and filtering the result, you create a space that doesn't just surround the listener—it transports them. This is the ultimate "Cool" factor in modern Hip-Hop and R&B production. Follow this masterclass, and your backgrounds will have the professional, dreamy depth of a platinum record.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Cloud Rap, Psychedelic Sound Design, Convolver Workflow, Atmosphere, Ambient Hip-Hop, FL Studio.
```

---

## FILE: 03-Workflows\by-goal\eq-matching-reference.md

```markdown
# EQ Matching with Fruity Convolver Workflow

## Goal
Capture the frequency response of a piece of gear, a room, or a reference track and apply it to your own audio.

## Steps
1. **Preparation**:
   - You need a source of **White Noise**.
   - You need the "Target" (the reference track or hardware).
2. **Recording the Impulse**:
   - Play the White Noise through your target (e.g., an old tube radio or a specific EQ preset).
   - Record the output as a `.wav` file.
3. **Loading into Convolver**:
   - Open **Fruity Convolver**.
   - Drag your recorded "Target Noise" into the plugin's waveform display.
4. **Creating the Filter**:
   - Click the **Wrench icon** -> **Impulse** -> **Match Spectrum**.
   - Convolver will analyze the difference between pure white noise and your target, creating a "correction filter".
5. **Apply**:
   - Now play your vocal or synth through Convolver (100% Wet).
   - It will now have the exact tonal balance of your reference.

## Pro Tip
Use this to "Clone" the sound of expensive analog EQs or unique lo-fi speakers.

```

---

## FILE: 03-Workflows\by-goal\vocal-ir-sound-design.md

```markdown
# Masterclass: Vocal IR Sound Design in Fruity Convolver

## 1. Executive Summary: The "Human Resonator"
In modern experimental R&B and Alternative Hip-Hop (think artists like James Blake, FKA Twigs, or Travis Scott), the most interesting sounds are often "Hybrid" textures. What if your synth didn't just have reverb, but sounded like it was being played *inside* a human throat? Fruity Convolver allows you to use any `.wav` file as an **Impulse Response**. This guide will show you how to use vocal chops as IRs to create ghostly, melodic resonators.

---

## 2. Phase 1: Material Selection (The DNA)

### 2.1 The "Harmonic Carrier"
To use a vocal as an IR, the vocal should be:
1. **Short:** 500ms to 2 seconds.
2. **Clear:** A single sustained vowel (e.g. "Ooooh" or "Aaaaah").
3. **Harmonic:** The more distinct the pitch, the more the "reverb" will sound melodic.

### 2.2 Pre-Processing in Edison
Before dragging into Convolver:
- **Normalization:** Ensure the vocal chop is normalized to 0dB.
- **Fade Out:** Apply a smooth exponential fade-out to the end of the chop. This ensures the "reverb" doesn't end with a click.

---

## 3. Phase 2: Technical Implantation (The Engine)

### 3.1 Loading the Custom IR
1. Open **Fruity Convolver**.
2. **Drag & Drop:** Move your edited vocal chop from Edison into the waveform display of Convolver.
3. **The Result:** Your input signal (e.g. a synth or a snare) is now being "Filtered" by the harmonic peaks of the vocal.

### 3.2 The Resonant Balance
- **Wet Mix:** Set to **100%**.
- **Dry Mix:** Set to **0%**.
- **The "Ghost" Effect:** You will hear the synth, but it will have the "Formant" structure of the vocal. It will sound like a "Talking Synth."

---

## 4. Phase 3: Spatial Sculpting (The Vibe)

### 4.1 Stretching the Voice
- **Action:** Set the **Stretch** knob to **150% - 200%**.
- **The Physics:** This expands the "Vocal Room," making the ghostly resonator feel massive and atmospheric.
- **The Psychedelic Factor:** Because stretching in Convolver doesn't change the pitch of the harmonics, the "Voice" stays recognizable even as it becomes huge.

### 4.2 Spectral Blurring (The "Spirit" Cloud)
- **The Action:** Click Wrench -> **Blur**.
- **The Result:** The distinct "Voice" disappears, leaving behind a lush, shimmering cloud that has the "Warmth" of a human vocal but the "Space" of a hall reverb.

---

## 5. Phase 4: Dynamic Integration (The Mix)

### 5.1 The "Double Track" Secret
- **Workflow:** 
    1. Keep your main synth dry and centered.
    2. Route the synth to a Send track with the **Vocal IR Convolver**.
    3. Pan the Convolver track hard Left and Right.
- **The Result:** You have a solid digital synth in the center, flanked by "Human Shadows" on the sides. This is the hallmark of professional "Moody" R&B spatial design.

### 5.2 EQ Bracketing (The "Expensive" Cut)
- **Internal EQ:** Cut everything above **6kHz**.
- **Why?** Real voices have very little energy above 8kHz. Cutting the "Air" from the IR makes the effect sound more "Physical" and less "Digital."

---

## 6. Mathematical Harmonic Table
Use these IR types for specific "Moods":

| IR Material | Sound Result | Best Genre Use |
|-------------|--------------|----------------|
| **Single Note "Ah"** | Bright, Resonant | Upbeat Melodic Rap |
| **Whispered Word** | Dark, Breathy | Moody R&B / Neo-Soul |
| **Group Chorus** | Dense, Thick | Cinematic Soul |
| **Vocal Run (Chop)** | Evolving, Trippy | Psychedelic Trap |

---

## 7. Troubleshooting the Resonator
- **Issue:** "It just sounds like a muffled mess."
- **Fix:** Use the **Impulse Trigger** (Lightning icon) to hear the IR. If it's too muddy, go back to Edison and use an EQ to boost the "Presence" (3kHz) of the vocal chop before dragging it back in.
- **Issue:** "The pitch is weird."
- **Fix:** Ensure the vocal chop used as the IR is in the **Same Key** as your song. If the song is in A Minor but the IR is in C Major, the "Reverb" will be dissonant.

---

## 8. Conclusion: The Bio-Digital Master
Vocal IR Sound Design is the ultimate "Cool" factor for the modern producer. It moves beyond "adding space" and enters the realm of **Cross-Synthesis**. By using the human voice as a physical environment for your instruments, you create a sonic texture that is both haunting and beautiful. Follow this masterclass to inject "Biological Soul" into your otherwise digital Hip-Hop and R&B productions.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Sound Design, Convolution, Vocal IR, Experimental R&B, Spectral Resonator, FL Studio.

```

---

## FILE: 03-Workflows\by-instrument\guitar.md

```markdown
# Workflow: Guitar Cabinet Simulation (Convolver)

## The Concept
Making a dry, direct-input (DI) electric guitar sound like it’s coming through a real 4x12 speaker cabinet.

## Step-by-Step
1.  Place **Fruity Blood Overdrive** (Slot 1) for distortion.
2.  Place **Fruity Convolver** (Slot 2).
3.  Load a **Cabinet IR** (Impulse Response). FL Studio has several built-in under the "Cabinet" category.
4.  Set Mix to **100% Wet**.
5.  **Result:** The harsh "digital fizz" of the distortion is replaced by the physical resonance of a speaker box.

## Vibe Check
- **Jazzy/Soulful:** Use a "Small Combo" cab for a warm, intimate jazz guitar tone.
- **Upbeat:** Use a "Large 4x12" cab for high-energy rock-rap riffs.

## Pitfalls
- **Double Cab:** Don't use a Cabinet IR if your guitar plugin (like Hardcore) already has one enabled. It will sound muffled and "doubly filtered." [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-instrument\hybrid-acoustic-electronic-spaces.md

```markdown
# Masterclass: Designing Hybrid Acoustic-Electronic Spaces in Fruity Convolver

## 1. Executive Summary: The "Hyper-Real" Aesthetic
In modern high-end R&B and Cinematic Hip-Hop (think the production of Travis Scott, Joji, or James Blake), space is not "Natural." We need a "Hyper-Real" environment—one that has the organic warmth of a physical room but the wide, "sizzling" air of a synthesizer. **Fruity Convolver** is the ultimate engine for this **Hybrid Spatial Design**. This guide will show you how to layer recorded Studio IRs with synthesized Electronic IRs to create spaces that sound "Out of this World."

---

## 2. Phase 1: The "Organic" Foundation (Acoustic IR)

### 2.1 Selecting the Studio DNA
1. **The Choice:** Load a **Small Studio** or **Plate Reverb** IR into Convolver.
2. **The Logic:** This provides the "Early Reflections" that tell the brain: "This sound is physical and real."
3. **The Edit:** In the internal EQ, High-Pass the IR at **400Hz** and Low-Pass at **6kHz**.
4. **The Result:** A warm, mid-range focused room that provides "Body" but no "Digital Hiss."

---

## 3. Phase 2: The "Electronic" Air (Synthesized IR)

### 3.1 Capturing the "Sizzle"
We are going to synthesize an IR that consists *only* of high-frequency white noise.
1. **The Source:** Open **3x Osc**. Set Osc 1 to **White Noise**.
2. **The Envelope:** Set an extremely fast exponential decay (500ms).
3. **The EQ:** Apply a steep High-Pass filter at **8000Hz**. 
4. **The Capture:** Record this 500ms "Hi-Hat like" noise burst into Edison.
5. **The Drag:** Drag this "Electronic Sizzle" into a SECOND instance of **Fruity Convolver**.

---

## 4. Phase 3: The Hybrid Layering (Patcher)

### 4.1 Creating the Hyper-Space
1. **Insert Patcher** on your vocal send.
2. Load **Convolver A (Organic)** and **Convolver B (Electronic)**.
3. **The Mix:**
    - **Convolver A:** 100% Wet. (Provides the "Room").
    - **Convolver B:** 30% Wet. (Provides the "Modern Air").
4. **Stereo Scaling:** 
    - Set Convolver B's **Stretch** to **150%**.
    - Set Convolver B's **Self-Mono** to OFF.
5. **The Result:** You now have a vocal that sounds like it's in a real room, but the reverb tail has a wide, shimmering "Digital Sizzle" that physical rooms can't produce.

---

## 5. Phase 4: Dynamic Morphing (The "Cool" Factor)

### 5.1 The "Breathing" Room
- **Action:** Link the **Stretch** knob of the Electronic IR to a **Fruity Envelope Controller**.
- **The Setup:** Use a slow Sine LFO (1 bar).
- **The Vibe:** As the song plays, the "Modern Air" of the reverb will physically expand and contract. This creates a hypnotic, psychedelic sense of space that is the hallmark of "Master Tier" R&B production.

---

## 6. Mathematical Hybrid Space Table
Use these combinations for specific genre-moods:

| Vibe Goal | Organic IR | Electronic Layer | Stretch | Result |
|-----------|------------|------------------|---------|--------|
| **Moody R&B**| Dark Plate | Muffled Noise    | 80%     | Intimate, heavy space.|
| **Psy-Rap** | Hall       | Bitcrushed Noise | 250%    | Glitchy, vast texture. |
| **Upbeat Club**| Tiled Room | Resonant Pulse   | 50%     | Snappy, rhythmic air. |
| **Neo-Soul**| Studio A   | Chorus-Vocal     | 120%    | Lush, human warmth. |

---

## 7. Troubleshooting the Hybrid
- **Issue:** "The high-end sizzle is too distracting."
- **Fix:** Decrease the **Wet Mix** of the Electronic Convolver to 10% and increase the **Blur** tool setting to 20%.
- **Issue:** "The low-mids are muddying the vocal."
- **Fix:** Aggressively High-Pass the Organic IR at **600Hz**. The "Mood" is in the 1kHz - 3kHz range.

---

## 8. Conclusion: The Master of Non-Physicality
Mastering Hybrid Spaces in Fruity Convolver is about **Breaking the Laws of Physics.** By combining the "Truth" of acoustic IRs with the "Imagination" of synthesized noise, you create a sonic footprint that is uniquely yours. This is the difference between "Mixing" and **"World-Building."** Follow this masterclass, and your Hip-Hop and R&B spaces will have the professional, "Hyper-Real" depth of a multi-platinum studio recording.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Hybrid Reverb, Convolution Workflow, Impulse Response, Spatial Design, R&B Atmosphere, FL Studio.

```

---

## FILE: 03-Workflows\by-instrument\moody-rnb-drums.md

```markdown
# Moody Drum Room IRs Workflow

## Goal
Give programmed MIDI drums the "vibe" of being recorded in a high-end, moody studio room.

## Steps
1. **The IR Choice**: Load a **Small Studio** or **Medium Room** IR into Convolver.
2. **The EQ Filter (Essential)**:
   - Use the internal EQ to cut everything above **6kHz**.
   - Use the internal EQ to cut everything below **200Hz**.
   - This "muffled" room sound is the key to that vintage R&B drum feel.
3. **The Pre-Delay**:
   - Set **Input Delay** to **15ms**. This ensures the kick and snare hits stay sharp before the room reflections kick in.
4. **The Blend**:
   - Set **Wet** mix to only **10-15%**.
   - You want to *feel* the room rather than *hear* it as an effect.

## Result
Drums that sound less "sampled" and more like a cohesive, professional recording session.

```

---

## FILE: 03-Workflows\by-instrument\orchestral-strings-hall.md

```markdown
# Orchestral Strings Reverb Workflow

## Goal
Make dry, close-mic'd string samples sound like they were recorded in a prestigious concert hall.

## Steps
1. **Insert Fruity Convolver**: Place it on the String Bus (Send mode recommended).
2. **Load Hall IR**: Select 'Real Rooms' -> 'Concert Hall 01'.
3. **Internal EQ Shaping**:
   - The "Abbey Road" trick: Cut below **600Hz** and above **10kHz** inside the Convolver EQ window. This prevents the reverb from becoming muddy or too "fizzy".
4. **Stretch for Size**:
   - Set **Stretch** to **150%** to increase the decay time without changing the pitch.
5. **Phase Alignment**:
   - Ensure **Self-Mono** is OFF to preserve the natural stereo width of the hall.

## Result
A lush, spacious string section that has the depth and scale of a live orchestra recording.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Reference: Source Log & Style Board

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Convolver.
- **Key Info:** Real-time convolution logic, Stretch/Pitch algorithm, Linear Phase EQ mode explanation, and envelope tool details.

## Source ID: [SRC: REPUTABLE]
- **Source:** "The Art of Convolution" (Mix Guide).
- **Key Info:** Best practices for loading 3rd-party IRs (EchoThief, etc.), using cabinet IRs for synth character, and the "Reverse Reverb" transition trick.

## Source ID: [SRC: UNVERIFIED]
- **Source:** Community Research.
- **Key Info:** FFT Partitioning impact on CPU load vs. Latency.

## Genre Style Board: Fruity Convolver

| Vibe | Key Use | IR Type |
| :--- | :--- | :--- |
| **Moody** | Dark Isolated Vocals | Studio Booth |
| **Upbeat** | Snappy Percussion | Gold Plate |
| **Psychedelic**| Melodic Morphing | Spoken Word / Noise |
| **Jazzy** | Organic Glue | Live Chamber |
| **Vibey** | Expensive Air | Shimmer / Blur |

## Coverage Checklist
- [x] Impulse Response (IR) Fundamentals
- [x] Real-Time vs Latency Mode
- [x] Cabinet Simulation Workflow
- [x] Experimental Vocoding Workflow
- [x] Linear Phase EQ Mode
- [x] 5 Vibe Targets
- [x] Envelope / EQ Curve Shaping

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Fruity Convolver Mechanics

## 1. FFT Convolution Algorithm

*   **Process:** Multiplication in the Frequency Domain.
    *   `FFT(Input) * FFT(Impulse) = FFT(Output)`.
    *   `Inverse_FFT(Output) -> Audio`.
*   **Implication:** This process is extremely CPU intensive but allows for infinite complexity (e.g., simulating 1,000,000 reflections) with the same CPU cost as a simple EQ, provided the IR length is constant.
*   **CPU:** Depends mainly on **Impulse Length**. A 10-second tail uses 10x more CPU than a 1-second tail. Always trim your IRs!

## 2. Latency & PDC

*   **Block Size:** The FFT requires a buffer of samples to process.
    *   Large Impulses requires large processing blocks -> High Latency.
*   **Zero Latency Mode:**
    *   Uses a "Partitioned Convolution" algorithm.
    *   Breaks the IR into tiny chunks. Processes the first chunk instantly (Zero Latency) while calculating the later chunks in the background.
    *   **Cost:** Significantly higher CPU spikes.

## 3. Noise Floor

*   **Recording Impulses:** Use a **Sine Sweep**, not a Gunshot/Clap.
    *   *Why:* A Clap is short (low energy). A Sine Sweep creates high energy across the spectrum for 20 seconds.
    *   **Deconvolution:** Fruity Convolver mathematically "Unwinds" the sine sweep to retrieve the Impulse Response, resulting in a much higher Signal-to-Noise ratio than a transient recording.

## 4. Stereophony

*   **True Stereo:** Left Input -> Left IR -> Left Output. Right Input -> Right IR -> Right Output.
*   **Cross Channel:** Some Convolution engines support Cross-Feed (Left Input -> Right IR). Fruity Convolver treats channels largely independently unless the "Stereo Separation" envelope is modified.

```

---

## FILE: 04-Reference\zero-latency-mode.md

```markdown
# Reference: Zero Latency Mode (Physics)

Convolution is one of the most CPU-heavy processes in digital audio.

## 1. The Delay Problem
Normally, convolution has to "wait" for the whole IR to be calculated before it plays. This creates a delay (Latency).

## 2. Zero Latency (Partitioning)
Fruity Convolver uses **Partitions** to break the calculation into smaller pieces.
- **Benefit:** You can play live without feeling a lag.
- **Cost:** This uses more CPU power.

## 3. When to use "Use Latency"
- **Mixing:** If you are finished recording and just need to save CPU, turn "Use Latency" **ON**.
- **Recording:** If you are playing a MIDI keyboard through Convolver, turn "Use Latency" **OFF** to avoid lag. [SRC: IL-MAN]

```

---

## FILE: 04-Reference\technical-docs\convolution-physics.md

```markdown
# The Science of Convolution

## What is Convolution?
Convolution is a mathematical operation on two functions (signals) that produces a third function. In audio, it's the process of multiplying the input signal by the **Impulse Response (IR)** of a space or system.

## The Impulse Response (IR)
An IR is a recording of how a system responds to a "Delta Function" (an infinitely short, infinitely loud spike of sound).
- **In Rooms:** The IR captures the reflections, echoes, and frequency absorptions of the walls.
- **In Gear:** The IR captures the EQ curves and subtle phase shifts of the circuitry.

## FFT Processing
Fruity Convolver uses **Fast Fourier Transform** to perform convolution.
- **Time Domain vs. Frequency Domain:** Calculating convolution in the time domain is incredibly CPU-intensive. By converting the signals to the Frequency Domain (FFT), the math becomes a simple multiplication, which is much faster.
- **Linear Phase:** Because convolution is inherently a linear phase process, it doesn't suffer from the phase rotation issues of standard IIR reverbs.

## Limitations
- **Non-Linearity:** Convolution cannot capture distortion or compression (dynamic changes). It only captures the static frequency and time response.
- **Modulation:** Standard IRs are static. They don't "move" like the chorus-based modulation in algorithmic reverbs (like Fruity Reeverb 2).

```

---

## FILE: 04-Reference\technical-docs\fft-spectral-multiplication.md

```markdown
# Technical Deep-Dive: FFT and Spectral Multiplication in Fruity Convolver

## 1. Introduction: The Frequency Domain Matrix
Standard audio processing happens in the **Time Domain** (Amplitude over Time). However, convolution—the process of applying one signal's character to another—is computationally impossible in the time domain for long signals. Fruity Convolver solves this by moving into the **Frequency Domain** (Amplitude over Frequency). This technical guide explores the mathematics of **FFT (Fast Fourier Transform)** and why it is the engine of professional-grade spatial cloning.

---

## 2. The Convolution Integral
### 2.1 The Time-Domain "Grind"
Mathematically, convolution `(f * g)(t)` is an integral that measures the overlap of two functions as one is shifted over the other.
- **In Audio:** For every single sample of the input, the entire Impulse Response (IR) must be multiplied and summed. 
- **The Limitation:** A 5-second IR at 44.1kHz requires 220,500 operations *per input sample*. This is why early digital reverbs were "Algorithmic" (using delays) rather than "Convolutional."

---

## 3. The Fourier Theorem: Spectral Multiplication
### 3.1 The Math of Efficiency
The **Convolution Theorem** states that convolution in the time domain is equivalent to **Point-wise Multiplication** in the frequency domain.
- **The Process:**
    1. **FFT:** Convert Input Signal to a Spectrum.
    2. **FFT:** Convert Impulse Response to a Spectrum.
    3. **Multiply:** Multiply the magnitudes of each frequency.
    4. **IFFT:** Convert the result back to the Time Domain (Audio).
- **The Advantage:** Instead of millions of operations, the computer performs only a few thousand. This efficiency is what allows Fruity Convolver to run in real-time.

---

## 4. Windowing and Overlap-Add
### 4.1 Discrete Fourier Transform (DFT)
Because audio is a continuous stream, Convolver doesn't process the whole song at once. It uses **Windowing**.
- **The Buffer:** The audio is chopped into "Frames" (e.g. 512 samples).
- **The Overlap:** To prevent "clicking" at the edges of the frames, Convolver uses an **Overlap-Add** algorithm. Each frame overlaps with the next, and they are cross-faded mathematically.
- **The Master Tip:** This is why "Zero Latency" (LL) mode is so important. Without it, the engine waits for a full window to finish before playing the audio, creating a delay.

---

## 5. FIR (Finite Impulse Response) Physics
### 5.1 Linear Phase Integrity
Fruity Convolver is an **FIR Filter**.
- **The Science:** Unlike IIR (Infinite Impulse Response) filters used in standard EQs, FIR filters do not use feedback. 
- **Phase Symmetry:** Because the convolution operation is symmetrical, the **Phase Response** is perfectly linear. 
- **The Benefit:** All frequencies are delayed by the exact same amount. This ensures that the "Punch" of a drum transient is perfectly preserved, even if you apply a massive "Dark Room" IR.

---

## 6. Real-Time Spectral Blurring
### 6.1 The Blur Algorithm
When you use the **Blur** tool in Convolver, the engine is performing **Phase Randomization**.
- **The Math:** It keeps the frequency magnitudes the same but shifts the phase of each frequency to a random value.
- **The Result:** The "Time Alignment" of the reflections is destroyed. The energy is smeared evenly over the duration of the IR. This is the difference between an "Echo" (ordered phase) and a "Wash" (randomized phase).

---

## 7. Conclusion: The Master of the Spectrum
Mastering Fruity Convolver requires an understanding that you are working with **Light (Spectra)** rather than just **Waves (Time)**. By utilizing the mathematical efficiency of FFT and the phase-stability of FIR filtering, you can achieve spatial depth that is technically superior to any algorithmic reverb. It is the gold standard for high-end R&B and Hip-Hop mixing where "Sonic Purity" is paramount.

---
**Document Version:** 1.0 (Technical Reference)
**Author:** DSP Research Lead
**Keywords:** FFT, Convolution Theorem, Spectral Multiplication, FIR Filters, Phase Randomization, Audio Engineering.

```

---

## FILE: 04-Reference\technical-docs\hardware-ir-capture-library.md

```markdown
# Technical Manual: Hardware IR Capture and Gear Cloning Library

## 1. Introduction: Digital Transmigration
The "Cool" factor of many classic Hip-Hop and R&B records comes from the **Analog Signal Chain**—the tubes of a Neve preamp, the transformer of an SSL console, the grit of a 1970s plate reverb. While these machines are expensive, their **Linear Identity** (Frequency and Phase response) can be mathematically "captured" and brought into **Fruity Convolver**. This guide provides the exact engineering protocols to build your own "Hardware Clone Library."

---

## 2. Theoretical Foundation: Deconvolution
### 2.1 The Sine Sweep Protocol
To capture hardware, we use a **Logarithmic Sine Sweep**. 
- **The Physics:** A sweep covers every frequency from 20Hz to 20kHz with equal energy. 
- **The Equation:** `Hardware_Response = Recorded_Sweep / Original_Sweep`. 
- **The Benefit:** This method is far more accurate than using white noise, as it results in a higher signal-to-noise ratio for the capture.

---

## 3. Engineering Protocol: Step-by-Step Cloning

### 3.1 Capturing an SSL Console Strip (The "Body")
1. **Routing:** Send a 10-second Sine Sweep from FL Studio into your hardware input.
2. **Recording:** Record the output of the hardware back into Edison at **24-bit / 44.1kHz**.
3. **Capture Logic:** 
    - Open **Fruity Convolver**.
    - Click the **Wrench** -> **Impulse** -> **Deconvolve**.
    - Load the original sweep and the recorded sweep.
4. **The Result:** You now have an IR that contains the exact frequency bumps and phase shifts of that SSL channel. 
5. **Use Case:** Apply this to your master bus at 100% Wet. Your entire track now sounds like it was "Summed" through an expensive analog console.

### 3.2 Capturing a Neve Preamp (The "Warmth")
- **The Trick:** Preamps add "Heat." 
- **Protocol:** Drive the hardware input until you see the "Clip" light just start to flicker. Record the sweep.
- **The Convolver Strategy:** Set Convolver to **Zero Latency (LL)**. Now you can sing through that Neve preamp IR in real-time, gaining the "Warmth" of the analog circuit without the $3,000 price tag.

---

## 4. The "Air" Library: Capturing High-End Microphones
You can use Convolver to make a $100 mic sound like a $10,000 Sony C-800G.
- **Goal:** Capture the frequency "DNA" of an expensive microphone.
- **Action:** Record White Noise in a perfectly dead room using both microphones.
- **Spectral Matching:** Use the **Match Spectrum** tool in Convolver to create a filter that transforms Mic A into Mic B.
- **Result:** You have built a "Microphone Emulator" inside Fruity Convolver.

---

## 5. Mathematical Vibe Table for Hardware Cloning

| Hardware Target | Character | IR Length | Best Use Case |
|-----------------|-----------|-----------|---------------|
| **SSL G-Bus**   | Aggressive Punch | 100ms     | Drum Bus / Master |
| **Neve 1073**   | Low-Mid Weight | 250ms     | Vocals / Bass |
| **API 550**     | Mid-Range Presence| 150ms     | Electric Guitars |
| **Lexicon 480L**| Silky Air      | 5.0s      | Moody R&B Spaces |

---

## 6. Conclusion: The Master of Clones
Building a Hardware IR Library in Fruity Convolver is the most cost-effective way to achieve a **Major Label Sound.** By capturing the technical characteristics of the world's best analog gear, you move beyond the "Plastic" sound of digital synthesis. It is the definitive skill for any producer looking to own the "Analog Soul" of their R&B and Hip-Hop productions. Follow these protocols to build your own definitive collection of sonic signatures.

---
**Document Version:** 1.0 (Technical Blueprint)
**Keywords:** Gear Cloning, IR Capture, Deconvolution, Neve, SSL, Hardware Emulation, Fruity Convolver.

```

---

## FILE: 04-Reference\technical-docs\spectral-deconvolution-algorithms.md

```markdown
# Technical Manual: Spectral Deconvolution Algorithms and IR Extraction

## 1. Introduction: The Inverse of Sound
Convolution is the process of applying one signal's character to another. **Deconvolution** is the mathematical opposite—it is the process of **Extracting** the character of an environment from a recording. **Fruity Convolver** uses advanced deconvolution algorithms to turn a simple "Sine Sweep" recording into a professional-grade Impulse Response (IR). This guide explores the mathematics of this process and the engineering protocols required for "Sonic Cloning."

---

## 2. Theoretical Foundation: The Transfer Function
### 2.1 The Division of Spectra
In the Time Domain, convolution is an integral. In the Frequency Domain (FFT), it is simple multiplication: `Y(f) = X(f) * H(f)`.
- `Y(f)`: The recorded signal (The room with the sound).
- `X(f)`: The source signal (The dry sound).
- `H(f)`: The **Impulse Response** (The "Soul" of the room).
- **The Deconvolution Math:** `H(f) = Y(f) / X(f)`. 
- **The Reality:** By "Dividing" the recording by the original sweep, Convolver "Subtracts" the source, leaving only the environment.

---

## 3. The Sine Sweep Protocol (Log-Sweep)
### 3.1 Why not White Noise?
While white noise covers all frequencies, it has a low **Signal-to-Noise Ratio (SNR)**.
- **The Log-Sweep Advantage:** A sine sweep spends more time in each frequency, providing a much higher SNR.
- **The Mathematical Result:** The resulting IR is "Cleaner" and has a lower noise floor, which is essential for the "Hi-Def" atmosphere of modern R&B.

---

## 4. The Regularization Problem
### 4.1 Division by Zero
In the equation `H(f) = Y(f) / X(f)`, if the source signal `X(f)` has no energy at a certain frequency, the computer tries to divide by zero.
- **The Consequence:** This creates a massive "Spike" of digital noise (Artifacts).
- **The Convolver Solution:** The engine uses a **Regularization Parameter**. It adds a tiny amount of white noise to the denominator to ensure the division is always stable.
- **Master Strategy:** If your extracted IR sounds "Hiss-heavy," it means your original sweep didn't have enough energy in the highs. Use a **Brighter Sweep** next time!

---

## 5. Phase Realignment and Group Delay
### 5.1 The Temporal Correction
A recorded sweep has a "Group Delay"—different frequencies arrive at different times. 
- **The Deconvolution Magic:** The algorithm perfectly corrects this delay. It "Pulls" all frequencies back to `t=0`.
- **The Warning:** If you have any **Latency-inducing plugins** on your mixer during the capture, the deconvolution will be "Smeared." Always disable all other effects when capturing an IR!

---

## 6. Table of Extraction Constants

| Target | Sweep Duration | Sample Rate | Resulting IR | Use Case |
|--------|----------------|-------------|--------------|----------|
| **Vocal Booth**| 5 seconds      | 44.1 kHz    | Tight / Clean | Professional Vocals. |
| **Stone Hall** | 15 seconds     | 96.0 kHz    | Vast / Silky | Cinematic R&B. |
| **Analog EQ**  | 1 second       | 44.1 kHz    | Static / Pure | Gear Cloning. |
| **Guitar Amp** | 10 seconds     | 48.0 kHz    | Warm / Focused| Lo-Fi Textures. |

---

## 7. Conclusion: The Master of Extraction
Mastering deconvolution in Fruity Convolver is about **Technical Purity.** By understanding the "Spectral Division" math and the importance of SNR in your sweeps, you can turn any physical space or piece of hardware into a digital asset. This is the difference between a "Producer" and a **"Technological Sound Designer."** Follow these protocols to build your own exclusive library of world-class environments.

---
**Document Version:** 1.0 (Technical Reference Tier)
**Author:** DSP Mathematics Lead
**Keywords:** Deconvolution, FFT Math, Spectral Division, IR Extraction, Sine Sweep, FL Studio Engineering.

```

---

