# Harmor - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Harmor - The Additive King

`\`\`
██╗  ██╗ █████╗ ██████╗ ███╗   ███╗ ██████╗ ██████╗
██║  ██║██╔══██╗██╔══██╗████╗ ████║██╔═══██╗██╔══██╗
███████║███████║██████╔╝██╔████╔██║██║   ██║██████╔╝
██╔══██║██╔══██║██╔══██╗██║╚██╔╝██║██║   ██║██╔══██╗
██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║╚██████╔╝██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝
`\`\`

**Plugin Type:** Additive Synthesis / Resynthesizer / Image-to-Sound
**Category:** Generator / Advanced Synthesis / Master Tool
**Official Manual:** [Image-Line Harmor Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Harmor.htm)

---

## 🎯 What is Harmor?

Harmor is quite possibly the most powerful synthesizer ever created for a DAW. It is a **True Additive Synthesizer** that can generate up to 516 sine-wave partials per note. It is famous for its **Audio Resynthesis** (drag-and-drop any sample to turn it into editable data) and **Image Synthesis** (turning pictures into sound). Harmor breaks the boundaries of traditional sound design, offering "Sampler-quality" audio manipulation with the flexibility of a modular synth.

**Key Capabilities:**
- **516 Partials per Voice:** High-resolution additive generation.
- **Audio Resynthesis:** Lossless manipulation of imported audio files.
- **Image Resynthesis:** Synthesize sound directly from PNG/BMP files.
- **Dual Engine Architecture:** Two independent additive engines (A & B) for layering.
- **Unique Processing Units:** Prism, Pluck, Blur, Strum, and specialized Phasers.
- **Custom Filter Shapes:** Draw your own frequency response curves by hand.
- **Advanced Modulation:** Multi-part articulation envelopes for every parameter.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **resynthesis-vs-sampling.md**
3. Create **parameter-cheat-sheet.md**
4. Drag a vocal sample into the "IMG" or "ADV" tab and hear it play back perfectly as additive data.

### For Sound Designers:
1. Study **image-synthesis-art.md** (Sound from pictures)
2. Review **blur-and-prism-textures.md**
3. Learn **resynthesizing-vocals-for-manipulation.md**

### For Power Users:
1. Study **custom-filter-and-phaser-curves.md**
2. Review **additive-unison-phasing.md**
3. Learn **automation-of-spectral-data.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Osc/Timbre:** Shape and Partials.
  - **Filters:** Type, Cutoff, Resonance, and Custom Graph.
  - **Prism:** Frequency shifting/warping.
  - **Blur:** Temporal smearing.
  - **Pluck:** Physical decay model.
  - **IMG/ADV:** Resynthesis controls.

- [ ] **harmor-signal-flow.md**
  - Additive Generator -> Prism -> Filter -> Phaser -> Blur -> Effects.

#### 02-Data/parameters/
- [ ] **harmor-specs.json**
  `\`\`json
  {
    "plugin_name": "Harmor",
    "partials": 516,
    "layers": 2,
    "synthesis": ["Additive", "Audio Resynthesis", "Image Synthesis"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **audio-time-stretching-lossless.md**
  - Importing a vocal.
  - Using the "Speed" or "Time" knob to freeze or stretch without any pitch shifting or "grainy" artifacts.

- [ ] **image-to-sound-soundscapes.md**
  - Dragging a photo of a forest into the IMG tab.
  - Adjusting the "Frequency" mapping.
  - Result: Ethereal, organic textures derived from visual data.

- [ ] **the-harmonic-prism-growl.md**
  - Using the Prism knob to warp harmonics.
  - Automating the prism amount for "Transformer" style movement.

#### 03-Workflows/by-context/
- [ ] **cinematic-riser-design.md**
- [ ] **robotic-vocal-tuning.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **resynthesis-algorithm-depth.md**
  - How Harmor handles Phase and Amplitude data during import.

---

## 🔬 Research Framework

### Phase 1: Additive Basics (Week 1)
**Goal:** Pure Synthesis

**Tasks:**
1. Build a Square wave manually using partials
2. Test the "Prism" effect on a simple lead
3. Use the "Blur" effect to turn a pluck into a pad
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- What is the difference between "Sub" and "Main" Timbre?
- How do I draw a custom Filter curve?

### Phase 2: Resynthesis (Week 2)
**Goal:** Manipulating Reality

**Tasks:**
1. Import a drum loop
2. Slow it down to 10% speed
3. Use the "Pluck" fader to shorten the drums
4. Create audio-time-stretching-lossless.md

---

## 📊 Plugin Specifications to Document

### Engine
- Polyphony (User definable)
- FFT Window Size (if applicable)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the sound silent after I dragged an image? (Check the "IMG" level and frequency scale).
2. How to mix Engine A and Engine B? (Use the A/B fader in the Main tab).

### Advanced Usage
1. How to use Harmor as a "Spectral Filter" for external audio? (Using the "Audio Input" feature in Patcher).

---

## 🔗 Cross-Reference with Other Plugins

Harmor is often used with:
- **Harmless** (The simplified version)
- **Morphine** (The additive counterpart)

---

## 📦 File Structure Summary

`\`\`
Harmor/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── harmor-signal-flow.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── harmor-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── audio-time-stretching-lossless.md
│   │   └── image-to-sound-soundscapes.md
│
└── 04-Reference/
    └── resynthesis-algorithm-depth.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Harmor Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Harmor.htm)
- [Harmor Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Harmor_tutorials.htm)
- [Harmor Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+harmor+tutorial)

### Community Resources
- [Harmor Subreddit](https://www.reddit.com/r/FL_Studio/search?q=harmor&restrict_sr=1)
- [Harmor User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Harmor Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for spectral analysis of Harmor outputs
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Limiter** for monitoring harmonic content
- **Patcher** for external audio input routing

### Recommended Learning Materials
- "Additive Synthesis Explained" - Understanding the fundamentals behind Harmor's technology
- "Audio Resynthesis Techniques" - Deep dive into converting samples to additive data
- "Image Synthesis Guide" - Creating sounds from visual data

### Advanced Techniques
- **Spectral Morphing:** Using Harmor to blend two different sounds at the harmonic level
- **Vocal Resynthesis:** Converting vocal recordings into manipulable additive data
- **Algorithmic Composition:** Using Harmor's modulation capabilities for procedural sound generation

---

## 🧪 Experimental Techniques

### Advanced Additive Applications
Creative uses of Harmor's additive synthesis capabilities:

**Spectral Manipulation:**
- **Harmonic Isolation:** Isolating and manipulating specific harmonics
  - Use the partial editor to select specific harmonics
  - Adjust individual harmonic amplitudes and frequencies
  - Perfect for surgical harmonic manipulation
  - Essential for advanced additive synthesis
  - Useful for creating unique harmonic structures

**Phase Relationships:**
- **Phase Control:** Manipulating harmonic phase relationships
  - Adjust phase of individual harmonics
  - Create evolving phase relationships
  - Perfect for evolving textures
  - Essential for advanced additive synthesis
  - Useful for creating unique timbres

**Spectral Morphing:**
- **Cross-Synthesis:** Morphing between different spectral content
  - Load two different samples in Engines A and B
  - Crossfade between spectral content
  - Perfect for evolving textures
  - Essential for spectral cross-synthesis
  - Useful for creating hybrid sounds

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Spectral Automation:** Automating spectral parameters for evolving effects
  - Create evolving spectral characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic spectral expression
  - Use for expressive spectral control

**Modulation Applications:**
- **Parameter Modulation:** Using external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Stage Processing:**
- **Complex Enhancement:** Multiple processing stages for sophisticated effects
  - Create multi-stage enhancement
  - Apply different processing to different stages
  - Build sophisticated processing chains
  - Perfect for advanced sound design
  - Use for complex processing

## 🎚️ Workflow Optimization

### Additive Synthesis Workflows
Efficient approaches to using Harmor for additive synthesis:

**Manual Harmonic Design:**
- **Harmonic Building:** Creating sounds from individual harmonics
  - Start with fundamental frequency
  - Add harmonics systematically
  - Essential for additive synthesis mastery
  - Pro tip: Use harmonic series for natural sounds

- **Spectral Shaping:** Shaping harmonic content for specific timbres
  - Adjust harmonic amplitudes for desired timbre
  - Use harmonic relationships for character
  - Essential for spectral design
  - Pro tip: Use for creating specific instrument sounds

**Resynthesis Workflows:**
- **Sample Resynthesis:** Converting samples to additive data
  - Import samples for resynthesis
  - Adjust resynthesis parameters
  - Essential for sample manipulation
  - Pro tip: Use for lossless sample manipulation

- **Vocal Resynthesis:** Converting vocals to additive data
  - Import vocal samples for resynthesis
  - Adjust parameters for vocal characteristics
  - Essential for vocal manipulation
  - Pro tip: Use for robotic vocal effects

### Integration Workflows
Working with other plugins and tools:

**Effects Integration:**
- **Pre-Effects:** Using before other effects
  - Apply before reverb for spatial effects
  - Use before delay for rhythmic patterns
  - Essential for proper signal flow
  - Pro tip: Use for tone preparation

- **Post-Effects:** Using after other effects
  - Apply after reverb for processed spatial effects
  - Use after delay for processed rhythmic patterns
  - Essential for final processing
  - Pro tip: Use for final tone shaping

**Analysis Integration:**
- **Spectrum Analysis:** Using with spectrum analyzers for feedback
  - Monitor frequency changes in real-time
  - Compare with reference tracks
  - Essential for informed parameter control
  - Pro tip: Use for visual feedback

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Spectral Bass Design:** Creating bass sounds with precise harmonic control
- **Lead Enhancement:** Creating leads with specific harmonic content
- **Rhythmic Textures:** Creating rhythmic patterns with spectral manipulation
- **Energy Management:** Using additive synthesis for track energy
- **Build-up Effects:** Creating tension with spectral automation

### Hip-Hop and R&B
- **Vocal Processing:** Resynthesizing vocals for manipulation
- **Sample Enhancement:** Manipulating samples with additive control
- **Mix Enhancement:** Using additive synthesis for mix clarity
- **Creative Effects:** Adding unique character to elements
- **Spatial Effects:** Managing spatial characteristics

### Rock and Metal
- **Guitar Enhancement:** Adding synthetic elements to guitar tracks
- **Bass Enhancement:** Creating synthetic bass elements
- **Drum Enhancement:** Adding synthetic elements to drums
- **Mix Enhancement:** Using additive synthesis for mix clarity
- [ ] Create a "Prism Growl" lead using automated harmonic warping
- [ ] Build a 2-layer patch using independent Engines A and B
- [ ] Manually construct a harmonic series to create a specific timbre
- [ ] Use the partial editor to isolate and manipulate specific harmonics
- [ ] Apply spectral morphing between two different audio sources
- [ ] Create evolving textures using phase automation
- [ ] Use the custom filter drawing feature for unique frequency responses
- [ ] Troubleshoot resynthesis artifacts and quality issues effectively
- [ ] Integrate Harmor into efficient additive synthesis workflows
- [ ] Create complex spectral patches with multiple parameters
- [ ] Design custom image-to-sound conversions for unique textures
- [ ] Optimize Harmor settings for minimal CPU usage with high partial count
- [ ] Use Harmor for creative sound design applications beyond traditional synthesis
- [ ] Set up advanced spectral routing for complex projects
- [ ] Apply Harmor in live performance scenarios
- [ ] Create experimental sounds with extreme parameter settings
- [ ] Combine Harmor with other effects for layered processing
- [ ] Integrate Harmor with other automation tools seamlessly
- [ ] Create custom additive synthesis workflows for specific creative needs
- [ ] Use Harmor effectively in large, complex projects
- [ ] Generate complex rhythmic patterns with spectral automation
- [ ] Create hybrid synthesis patches combining additive and other methods
- [ ] Apply Harmor in mastering contexts with appropriate care
- [ ] Create complex multi-stage spectral chains with smooth automation
- [ ] Design custom harmonic structures for specific musical contexts
- [ ] Use Harmor for creative vocal processing applications
- [ ] Apply advanced phase manipulation techniques for texture control
- [ ] Create genre-specific additive presets for efficient workflow
- [ ] Integrate Harmor with external hardware for hybrid processing
- [ ] Use Harmor for audio restoration and creative repair applications
- [ ] Combine Harmor with other spectral processing tools
- [ ] Apply Harmor in surround sound or multi-channel setups
- [ ] Create complex spectral relationships using multiple engines
- [ ] Use Harmor for creative instrumental processing applications
- [ ] Integrate Harmor with other automation tools for complex control
- [ ] Create complex atmospheric textures using multiple parameters
- [ ] Design custom resynthesis algorithms for unique spectral characteristics
- [ ] Apply advanced harmonic control for precise timbre shaping
- [ ] Use Harmor for creative stereo enhancement beyond traditional methods
- [ ] Combine Harmor with convolution for hybrid synthesis approaches
- [ ] Implement advanced envelope shaping for dynamic spectral expression
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use Harmor for creative sound design in film and game audio
- [ ] Apply Harmor in live sound reinforcement scenarios
- [ ] Create experimental synthesis textures using extreme parameter settings
- [ ] Integrate Harmor with external synthesizers for complex sound design
- [ ] Generate complex harmonic structures with precise control
- [ ] Use Harmor for formant synthesis and vowel creation
- [ ] Apply spectral freezing techniques for sustained textures
- [ ] Create evolving spectral animations with automation
- [ ] Design custom additive algorithms for unique harmonic behaviors
- [ ] Implement advanced resynthesis techniques for complex audio
- [ ] Use Harmor for granular synthesis applications
- [ ] Apply phase vocoder techniques within the additive framework
- [ ] Create hybrid resynthesis patches combining multiple approaches
- [ ] Use Harmor for audio forensics and analysis applications
- [ ] Implement spectral filtering techniques for precise frequency control
- [ ] Create custom image synthesis algorithms for visual-to-audio conversion
- [ ] Apply Harmor in scientific and research audio applications
- [ ] Use for therapeutic and sound healing applications
- [ ] Combine with neural networks for AI-assisted sound design

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Harmor

## Purpose & Identity
Harmor is a powerhouse **additive synthesizer and resynthesizer**. Its primary identity is a "Spectral Manipulator." It can generate up to 516 sine-wave partials per note, allowing it to build any sound imaginable from the ground up. It is most famous for its ability to drag and drop any audio sample and turn it into editable additive data (Resynthesis). [SRC: IL-MAN]

## 60-Second Mental Model
Think of Harmor as a "Digital Alchemist." 
- It can turn a sample of a glass breaking into a lush synth pad.
- It can turn a picture of a forest into a soundscape (**Image Synthesis**).
- It doesn't "play" a file; it "re-creates" the file using a massive choir of sine waves. 
Because it uses math to re-create the sound, you can slow it down to 1% speed without it ever sounding "grainy" or "choppy."

## Hip-Hop / R&B Context
- **Lossless Vocal Stretch:** Slowing down a vocal phrase to 200% length while keeping the pitch perfect and the texture smooth (Spacey/Moody).
- **The Harmonic "Growl":** Using the **Prism** knob to warp the harmonics of an 808 into an aggressive, robotic texture (Psychedelic).
- **Custom Filter Curves:** Drawing a surgical "Hand-drawn" EQ curve directly into the synth to create unique resonant peaks (Melodic/Vibey).

## When To Use
- When you want the **highest quality time-stretching** possible.
- When you want to **morph** between two completely different sounds (using Engine A and B).
- When you need **unique textures** derived from images or strange audio sources.

## When NOT To Use
- **Simple Analog Leads:** Harmor is a spectral monster. If you just want a standard Moog-style lead, **3x Osc** is far more efficient.
- **CPU Savings:** Harmor is very powerful but can be heavy on the CPU when using high partial counts and unison. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Harmor

## UI Tour
1.  **Main Tab:** Includes Engine A/B fader, Unison, and the master Filter/Phaser/Pluck.
2.  **IMG Tab:** The "Resynthesis" zone. Drag samples or images here.
3.  **ADV (Advanced) Tab:** Control partial count and CPU settings.
4.  **Envelopes/Articulators:** The bottom section where you draw detailed modulation for every knob. [SRC: IL-MAN]

## Signal Flow (The Spectral Path)
1.  **Generator:** Either the **Timbre** (Oscillator) or the **IMG** (Resynthesized sample) generates harmonics.
2.  **Prism:** Warps the relationship between harmonics (FM-like textures).
3.  **Filter:** Applies a frequency response. (You can draw custom shapes here).
4.  **Phaser:** An additive phaser that can be set to "Frequency" or "Classic" modes.
5.  **Blur:** Smears the sound in time (turns transients into pads).
6.  **Tremolo/Strum:** Final rhythmic modulation.
7.  **FX Rack:** Distortion, Delay, Reverb, and Compressor.

## Resynthesis Explained
When you drag a sample into the **IMG** tab, Harmor analyzes it and converts it into a "Photo" of sound.
*   **X-axis:** Time.
*   **Y-axis:** Frequency.
*   Because it's now "data," you can play the sample at **0% speed** and it will sound like a perfectly frozen, clear note. [SRC: REPUTABLE]

## Things Beginners Misunderstand
*   **Engine A vs B:** Harmor is two synths in one. If you only see one filter moving, check if you're on Engine A or Engine B.
*   **The "Sub" Knob:** Harmor has a dedicated Sub-oscillator that is added *after* the filter. This ensures your bass stays heavy even if you high-pass the main sound.
*   **Visual Feedback:** The window in the middle shows the harmonics in real-time. If it's a solid block, your sound is harmonically rich. If it's just lines, it's a "cleaner" sound.

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Harmor

Harmor translates vibes through **Spectral Resynthesis** and **Harmonic Warping**.

## 1. Spacey (Ethereal, Infinite, Smeared)
- **Concept:** "The Spectral Blur."
- **Levers:**
  - **Blur Module:** Increase the horizontal slider (Temporal Smear).
  - **Time:** Set to 0 (Freeze) or very slow.
  - **Prism:** Slight positive amount to spread harmonics.
- **Listen For:** An infinite, liquid texture where the attack of the sound is completely removed, leaving only a "glow."

## 2. Psychedelic (Warped, Alien, Shifting)
- **Concept:** "The Harmonic Prism."
- **Levers:**
  - **Prism Knob:** Automate from 0 to 100%.
  - **Phaser Mode:** Select "Deep" or "Freq."
  - **LFO:** Link to the **Vibrato** (which is additive in Harmor).
- **Listen For:** The harmonics shifting and "clanging" against each other, creating non-musical, trippy resonances.

## 3. Moody (Heavy, Dark, Distressed)
- **Concept:** "The Resynthesized Shadow."
- **Levers:**
  - **Image Tab:** Drag a dark, noisy sample.
  - **Filter:** Draw a custom steep low-pass curve.
  - **Pluck:** Turn up the Pluck fader to make the decay "darker" over time.
- **Listen For:** A muffled, grainy atmosphere that feels like a ghost of the original sample.

## 4. Upbeat (Kinetic, Sharp, Synthetic)
- **Concept:** "The Strummed Lead."
- **Levers:**
  - **Strum Module:** Set a fast time.
  - **Unison:** 5-9 voices with high detune.
  - **Timbre:** Square wave partials.
- **Listen For:** A wide, aggressive "Supersaw" style lead that has an organic, harp-like entry.

## 5. Melodic (Clear, Glossy, Polished)
- **Concept:** "The Vocal Synth."
- **Levers:**
  - **Audio Resynthesis:** Drag a lead vocal "Ah" into the window.
  - **Formant:** Use the Formant slider to shift the voice character without changing pitch.
  - **FX:** Internal Chorus + Compression.
- **Listen For:** A perfectly polished "Human Synth" that follows the MIDI with zero artifacts. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\additive-synthesis-architecture.md

```markdown
# Additive Synthesis in Harmor

Understanding the 516 partials per voice architecture that makes Harmor FL Studio's most powerful additive synthesizer.

## Overview

Harmor's additive synthesis engine generates sound by combining up to **516 sine wave partials (harmonics)** per voice. Unlike subtractive synthesis that starts with a complex waveform and removes harmonics with filters, additive synthesis builds sounds from the ground up by adding individual harmonics.

[SRC: IL-MAN]

---

## The 516 Partial Architecture

### What Are Partials?

Partials are individual sine waves at specific frequencies that combine to create complex timbres:
- **Fundamental (1st partial)**: Determines the perceived pitch
- **Overtones (2nd-516th partials)**: Create timbre and character
- Each partial has independent: Amplitude, Frequency, Phase, Envelope

### The Harmor Difference

| Feature | Standard Additive | Harmor |
|---------|------------------|---------|
| Partials per voice | 64-128 | **516** |
| Frequency resolution | Limited | **Continuous** |
| Phase control | Basic | **Full per-partial** |
| Envelope complexity | Simple | **Multi-point per partial** |

---

## A/B Dual Engine System

Harmor features two completely independent additive engines (A and B) that can be:
- **Mixed** for layered timbres
- **Modulated** separately for evolving sounds
- **Processed** with different effects

### Engine Architecture

`\`\`
Engine A          Engine B
   ↓                 ↓
516 Partials     516 Partials
   ↓                 ↓
Sub Timbre       Sub Timbre
   ↓                 ↓
Main Timbre      Main Timbre
   ↓                 ↓
Processors       Processors
   ↓                 ↓
   └──→ MIX ←──────┘
         ↓
     Global FX
`\`\`

### Mixing A and B

The **Mix** parameter (0-100%) controls the balance:
- **0%** = Engine A only
- **50%** = Equal blend (most common)
- **100%** = Engine B only

**Hip-Hop Technique:** Set A for sub fundamentals, B for harmonics - create 808-style bass with precise control over each harmonic's decay.

---

## Timbre Sections: Sub vs Main

### Sub Timbre

The **Sub** section controls the fundamental and early harmonics:
- **Range**: First ~32 partials
- **Character**: Warmth, body, low-end definition
- **Best For**: Sub bass fundamentals, 808 sub frequencies

**Key Controls:**
- **Sub Level**: Overall amplitude of sub harmonics
- **Sub Shape**: Harmonic distribution curve
- **Sub Slope**: How quickly harmonics attenuate

### Main Timbre

The **Main** section controls the remaining ~484 partials:
- **Range**: Higher harmonics and overtones
- **Character**: Brightness, attack, timbral complexity
- **Best For**: Lead presence, vocal clarity, harmonic richness

**Key Controls:**
- **Main Level**: Overall amplitude of main harmonics
- **Main Shape**: Harmonic distribution
- **Main Slope**: Attenuation curve

### Working Together

`\`\`
Sub Timbre (Warmth)    Main Timbre (Presence)
      ↓                       ↓
   [0-1kHz]              [1kHz-20kHz+]
      ↓                       ↓
  Fundamentals          Overtones & Brilliance
      ↓                       ↓
      └────→ Combined Output ←────┘
`\`\`

**Pro Tip:** For vocal resynthesis, boost Sub for warmth, adjust Main for intelligibility.

---

## Phase and Amplitude in Additive

### Partial Phase

Each of the 516 partials has independent phase control:
- **Phase affects**: Attack character, timbral quirks, stereo image
- **Random Phase**: Creates natural, organic attack
- **Locked Phase**: Precise, clinical attack (good for EDM)

### Amplitude Envelopes

Unlike subtractive synths with a single filter envelope, Harmor has:
- **Global amplitude envelope**: Overall loudness contour
- **Per-partial envelopes**: Individual harmonic evolution
- **Timbre envelopes**: How the harmonic balance changes over time

**Time-Stretching Secret:** Harmor's additive nature means time-stretching doesn't create artifacts - it simply recalculates partial positions.

---

## Harmonic Drawing and Editing

### The Harmonic Editor

Harmor's unique interface allows drawing custom harmonic content:
- **Vertical axis**: Partial amplitude (0-100%)
- **Horizontal axis**: Partial number (1-516)
- **Draw modes**: Freehand, line, curve, harmonic series

### Common Drawing Patterns

**Sawtooth Approximation:**
`\`\`
Amplitude
100% ┤████
 50% ┤███████
 25% ┤██████████
 10% ┤███████████████
  0% ┼────────────────
     1  4  8  16  32  Partials
`\`\`
Pattern: 1/n amplitude (1st = 100%, 2nd = 50%, 3rd = 33%, etc.)

**Square Approximation:**
`\`\`
Amplitude
100% ┤████    ████    ████
  0% ┤────████────████────
     1  3  5  7  9  11  Partials
`\`\`
Pattern: Only odd harmonics with 1/n amplitude

**Triangle Approximation:**
`\`\`
Amplitude
100% ┤███
 50% ┤██████
 25% ┤█████████
 10% ┤████████████
  0% ┼────────────────
     1  3  5  9  15  Partials
`\`\`
Pattern: Odd harmonics with 1/n² amplitude

---

## Unique Additive Features

### 1. Prism (Harmonic Warping)

The **Prism** effect creates inharmonic frequencies by multiplying partials:
- **Amount**: How much warping is applied
- **Creates**: Metallic, bell-like, or dissonant textures
- **Use Case**: Growl bass, metallic leads, sci-fi effects

### 2. Blur (Partial Smearing)

**Blur** spreads energy across adjacent partials:
- **Low settings**: Slight thickening
- **High settings**: Dense, cloud-like textures
- **Use Case**: Pad thickening, vocal doubling, atmospheric effects

### 3. Pluck (Decay Shaping)

**Pluck** applies different decay times to different frequency bands:
- **High frequencies**: Faster decay (simulates string damping)
- **Low frequencies**: Slower decay (maintains body)
- **Use Case**: Realistic string/plucked instruments from scratch

### 4. Strum (Chorus/Detune)

**Strum** detunes partials against each other:
- **Subtle**: Natural chorus effect
- **Extreme**: Dissonant, detuned textures
- **Use Case**: Vocal thickening, unison effects, vintage character

---

## Filter Section: Custom Drawing

Harmor's filter is unique - you **draw the frequency curve**:

### Drawing the Filter Shape

1. **Click and drag** in the filter display
2. **Create any curve**: Low-pass, high-pass, band-pass, notches, resonant peaks
3. **Multiple points**: Complex multi-band filtering
4. **Smooth or sharp**: Any slope you need

### Filter vs Traditional Subtractive

| Aspect | Subtractive Filter | Harmor Custom Filter |
|--------|-------------------|---------------------|
| Slope | Fixed (12/24dB) | **Any curve** |
| Resonance | Single peak | **Multiple peaks** |
| Shape | Standard types | **Completely custom** |
| Modulation | Cutoff only | **Any point on curve** |

**Hip-Hop Application:** Draw a smile curve (boost lows and highs, scoop mids) for classic "scooped" vocal or drum sounds.

---

## Unison and Voices

Harmor's unison system duplicates and detunes voices:
- **Voices**: 1-9 voices per note
- **Detune**: Spread amount between voices
- **Stereo**: Pan voices across the stereo field
- **Blend**: Mix dry and processed voices

**Additive Advantage:** Each unison voice has all 516 partials - massive, dense sounds without traditional "phasing" issues.

---

## Performance Considerations

### CPU Usage Factors

| Factor | Impact | Optimization |
|--------|--------|--------------|
| Active partials | High | Disable unused partial ranges |
| Unison voices | High | Use 3-4 voices instead of 9 |
| Resynthesis mode | Medium | Use IMG tab for analysis |
| Effects | Medium | Disable unused effects |

### Voice Limit

Harmor has a **maximum polyphony** - when exceeded:
- Oldest voices are cut (standard)
- Or: Newest voices don't play (optional)
- Adjust in the **MISC** tab

---

## Summary: Additive Power in Harmor

1. **516 partials per voice** = Massive harmonic complexity
2. **Dual A/B engines** = Layered, evolving timbres
3. **Sub vs Main timbre** = Precise frequency control
4. **Custom filter drawing** = Unlimited filter possibilities
5. **Unique processors** (Prism, Blur, Pluck, Strum) = Sounds impossible in subtractive synthesis
6. **Perfect time-stretching** = Lossless sample manipulation

**The Bottom Line:** Harmor's additive engine can recreate any sound by defining its harmonic content precisely - from vintage analog warmth to impossible futuristic textures.

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Harmor.htm

```

---

## FILE: 01-Learning\Concepts\audio-resynthesis-explained.md

```markdown
# Audio Resynthesis Explained

Understanding Harmor's revolutionary drag-and-drop resynthesis system that enables lossless audio manipulation.

## Overview

**Resynthesis** is Harmor's ability to analyze an audio sample and recreate it using its additive synthesis engine. Unlike traditional samplers that play back recordings, Harmor breaks samples into their harmonic components and rebuilds them from 516 partials per voice.

This enables unprecedented control: time-stretch without artifacts, pitch-shift without chipmunk effect, and edit individual harmonics of any sound.

[SRC: IL-MAN]

---

## How Resynthesis Works

### The Analysis Process

`\`\`
Audio Sample Input
       ↓
Spectral Analysis (FFT)
       ↓
Partial Extraction
       ↓
Phase & Amplitude Detection
       ↓
516 Partial Mapping
       ↓
Reconstruction via Additive Engine
`\`\`

1. **FFT Analysis**: Fast Fourier Transform breaks the sample into frequency bands
2. **Peak Detection**: Identifies the strongest frequencies (partials)
3. **Envelope Tracking**: How each partial's amplitude changes over time
4. **Phase Coherence**: Maintains the "snap" and character of transients
5. **Additive Reconstruction**: 516 sine waves recreate the original

### Resynthesis vs Sampling

| Aspect | Traditional Sampler | Harmor Resynthesis |
|--------|-------------------|-------------------|
| Storage | Audio file (large) | Partial data (compact) |
| Time-stretch | Algorithms (artifacts) | **Recalculation (lossless)** |
| Pitch-shift | Speed change (formant shift) | **Independent (natural)** |
| Editing | Limited to volume/pitch | **Individual harmonics** |
| Manipulation | Destructive | **Non-destructive** |

---

## The Two Resynthesis Modes

### 1. Image Synthesis (IMG Tab)

**IMG mode** creates a visual spectrogram representation:
- **Display**: Time (X-axis) vs Frequency (Y-axis) vs Amplitude (brightness)
- **Visual editing**: Draw, erase, blur, or apply effects to the image
- **File format**: Can import/export PNG or BMP files

#### How to Use IMG Tab:

1. **Drag audio** onto Harmor interface
2. Click **IMG** tab
3. Harmor renders the spectrogram
4. **Edit visually** using drawing tools
5. Play back the modified sound

#### IMG Editing Techniques:

**Time-Stretching:**
- **Vertical scaling**: Stretches time without changing pitch
- **Horizontal scaling**: Changes pitch without affecting time
- **Free transform**: Any combination

**Selective Editing:**
- **Blur tool**: Smooth transitions, remove clicks
- **Eraser**: Remove specific frequencies or time periods
- **Clone stamp**: Copy frequency content to other areas
- **Smear**: Stretch frequency content horizontally

**Pro Tip:** The Speed knob controls playback speed independently - combine with IMG stretching for complex time manipulation.

### 2. Advanced Resynthesis (ADV Tab)

**ADV mode** provides granular control over resynthesis parameters:

#### Key ADV Parameters:

**Analysis Section:**
- **Time**: Playback position in the sample
- **Speed**: Playback rate (independent of pitch)
- **Formant**: Shift formants without changing pitch (vocal manipulation)
- **Bin**: Frequency resolution of analysis

**Quality Section:**
- **Precision**: How accurately partials are tracked
- **Blending**: Smoothness between analysis frames
- **Window**: FFT window size (trade-off: frequency vs time resolution)

**Phase Section:**
- **Randomize**: Add randomness to phase (for unison effects)
- **Shift**: Phase offset (affects transient character)
- **Keep**: Preserve original phase relationships

---

## Drag-and-Drop Workflow

### Basic Resynthesis

1. **Drag audio file** directly onto Harmor's interface
2. **Choose mode**: IMG for visual editing, ADV for parameter control
3. **Harmor analyzes** and converts to partial data
4. **Edit as needed** using available tools
5. **Play** - the sample is now a Harmor patch

### Supported Formats

- **Audio**: WAV, AIFF, MP3, FLAC, OGG
- **Images**: PNG, BMP (for image-to-sound synthesis)
- **Presets**: .fnp (Harmor preset files with embedded resynthesis data)

### Time and Speed Controls

#### Time Knob

- **Function**: Scrubs through the sample position
- **Automation**: Create time-based effects (reverse, slow-down, freeze)
- **Range**: 0% (start) to 100% (end)

**Technique - Time Freezing:**
1. Automate Time to stop at a specific point
2. Sound "freezes" at that moment
3. Add effects to create infinite sustains
4. Perfect for risers, impacts, ambient textures

#### Speed Knob

- **Function**: Controls playback rate
- **At 0%**: Stops at current Time position
- **Positive**: Forward playback (100% = normal speed)
- **Negative**: Reverse playback

**Technique - Independent Pitch/Time:**
1. Speed at 50% (half speed, no pitch change)
2. Use channel pitch to transpose
3. Result: Slowed down but natural pitch
4. No "chipmunk" or "monster" artifacts

#### Speed vs Pitch Relationship

| Speed | Pitch Effect | Use Case |
|-------|-------------|----------|
| 100% | Normal | Standard playback |
| 50% | Same pitch, half speed | Time-stretch |
| 0% | Freeze | Infinite sustain |
| -100% | Reverse playback | Creative effect |
| 200% | Same pitch, double speed | Fast playback |

---

## Vocal Resynthesis for Hip-Hop

### Robotic Vocal Effects

1. **Drag vocal** into Harmor
2. **ADV tab**: Set high Precision, low Blending
3. **Reduce Unison** to 1 voice
4. **Enable Formant** shifting
5. **Modulate Formant** with LFO for robotic movement

### Vocal Chopping Without Artifacts

Traditional chopping creates clicks at slice points. Harmor's resynthesis:
- **Smooth transitions** between slices
- **No transient clicks** because it's regenerated
- **Pitch-shift individual chops** naturally

**Workflow:**
1. Resynthesize vocal phrase
2. Automate Time knob to "jump" between words
3. Speed remains constant (no pitch change)
4. Use Blur to smooth transitions

### Harmonic Isolation

**Extract just the vocal fundamentals:**
1. In IMG tab, **erase high frequencies** (above 4kHz)
2. **Boost 200Hz-1kHz** range
3. Result: Subby vocal "ghost" track
4. Mix with original for added depth

---

## Image-to-Sound Synthesis

### Converting Images to Audio

Harmor can interpret **any PNG or BMP image** as a spectrogram:

`\`\`
Image Pixels → Frequency Content

X-axis (width) = Time
Y-axis (height) = Frequency (0Hz at bottom, Nyquist at top)
Brightness = Amplitude
Color = Phase information (if RGB)
`\`\`

### Creating Image Sounds

**From Scratch:**
1. Create image in Photoshop/GIMP
2. **White = loud**, Black = silent
3. **Vertical lines** = tones/pitches
4. **Gradients** = sweeps and risers
5. Drag into Harmor

**Common Image Patterns:**

**Sine Wave:**
- Draw a single horizontal sine wave
- Result: Pure sine tone at that frequency

**Sawtooth:**
- Diagonal line from bottom-left to top-right
- Result: Sawtooth wave with all harmonics

**Riser:**
- Start with horizontal lines at bottom
- Gradually angle upward toward top-right
- Result: Pitch riser with evolving harmonics

**Texture:**
- Noise or cloud patterns
- Result: Atmospheric, textural sounds

### Hip-Hop Image Applications

**808 Sub Visualization:**
- Draw thick horizontal line at bottom
- Taper thickness over time for decay
- Result: Perfectly controlled sub bass

**Vocal Formant Shapes:**
- Draw vowel shapes (horizontal bands with specific spacing)
- Result: Synthetic vocal-like textures

**Drum Transients:**
- Vertical white lines (sharp attacks)
- Fade to black (quick decay)
- Result: Snappy drum hits

---

## Advanced Resynthesis Techniques

### 1. Formant Shifting for Character

Formants are the resonant frequencies that give sounds their "character" (especially vocals):

- **Formant +12**: "Donald Duck" effect (higher formants)
- **Formant -12**: "Monster" effect (lower formants)
- **Modulated Formant**: Talking synth effect

**Technique:** Keep Speed at 100% (normal time), adjust Formant for character change without pitch change.

### 2. Blending for Smoothness

**Blending** controls how frames interpolate:
- **0%**: Staccato, distinct frames (glitchy)
- **50%**: Balanced (default)
- **100%**: Maximum smoothing (cloudy, ambient)

**Application:** Low blending for glitch-hop, high blending for ambient textures.

### 3. Window Size Trade-offs

FFT window size affects analysis resolution:

| Window Size | Time Resolution | Frequency Resolution | Best For |
|-------------|-----------------|---------------------|----------|
| Small | High (fast changes) | Low | Transients, drums |
| Medium | Balanced | Balanced | General use |
| Large | Low (slow changes) | High | Tones, sustained sounds |

**Technique:** Use smaller windows for drum resynthesis (preserve transients), larger windows for vocals (capture harmonics).

### 4. Phase Randomization

Randomizing phase on resynthesized sounds:
- **0%**: Preserves original attack character
- **50%**: Some thickening
- **100%**: Maximum unison-like effect

**Use:** Add 20-30% phase randomization to make resynthesized vocals sound more "live" and less synthetic.

---

## Common Resynthesis Issues and Solutions

### Issue: "Metallic" or "Ringing" Sound

**Cause:** Phase coherence issues in high frequencies
**Solution:** 
- Increase Blending (smooth transitions)
- Add slight Blur effect
- Reduce highest partials in filter

### Issue: Transients Sound "Soft"

**Cause:** Window size too large, losing attack detail
**Solution:**
- Decrease Window size
- Increase Precision setting
- Keep Phase Randomization low (0-10%)

### Issue: "Underwater" or Muddy Sound

**Cause:** Too many partials in low-mid frequencies
**Solution:**
- Use custom filter to scoop 200-500Hz
- Reduce Sub Timbre amount
- Increase Pluck amount (faster low-mid decay)

### Issue: Pitch Sounds "Wobbly"

**Cause:** Analysis frame rate vs playback mismatch
**Solution:**
- Lock Speed to musical values (25%, 50%, 100%, 200%)
- Increase Precision
- Use Time automation carefully (smooth ramps)

---

## CPU Optimization for Resynthesis

### Analysis vs Real-time

Harmor performs analysis **when you load the sample** (one-time CPU hit), then plays back the partial data efficiently.

### Optimizing Performance:

1. **Freeze tracks** with complex resynthesis
2. **Reduce unison voices** when using resynthesis (3-4 instead of 9)
3. **Disable unused effects** (Prism, Blur if not needed)
4. **Use IMG mode** for simpler resynthesis (less CPU than ADV with high settings)

### Rendering Tips

Before final export:
- **Freeze the channel** to convert to audio
- Or: **Render to sample** (right-click channel → Render)
- This "bakes in" the resynthesis for zero CPU playback

---

## Summary: The Power of Resynthesis

1. **True time-stretch**: Speed and pitch are completely independent
2. **Lossless manipulation**: Edit individual harmonics of any sound
3. **Visual editing**: IMG tab provides intuitive sound design
4. **Vocal processing**: Unprecedented control over formants and character
5. **Image synthesis**: Convert any image to unique sounds
6. **Non-destructive**: Original sample always preserved

**The Hip-Hop Advantage:** Sample any sound, manipulate it beyond recognition, create entirely new instruments from existing audio - all without artifacts or quality loss.

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Harmor.htm

```

---

## FILE: 01-Learning\Concepts\dual-engine-ab-architecture.md

```markdown
# Dual Engine A/B Architecture

Understanding Harmor's dual additive engine system for layered, complex sound design.

## Overview

Harmor features **two completely independent additive synthesis engines** - labeled A and B. Each engine has:
- 516 partials per voice
- Independent timbre sections (Sub and Main)
- Independent filter and effects
- Independent modulation (envelopes, LFOs)
- Independent Prism/Blur/Pluck/Strum processing

The Mix parameter blends these engines, creating sounds impossible with a single engine.

[SRC: IL-MAN]

---

## Why Two Engines?

### The Single Engine Limitation

A single additive engine, no matter how powerful, has constraints:
- One timbre character at a time
- One filter shape
- One envelope behavior
- One set of harmonics

### The Dual Engine Solution

By combining two engines, you get:
- **Layered timbres**: Sub bass from A, harmonics from B
- **Evolving sounds**: A and B with different envelopes create movement
- **Contrast**: Bright B mixed with dark A for complexity
- **Stereo separation**: Pan A left, B right for width

---

## Engine Architecture Deep Dive

### Complete Independence

`\`\`
ENGINE A                    ENGINE B
├─ 516 Partials            ├─ 516 Partials
├─ Sub Timbre Section      ├─ Sub Timbre Section
├─ Main Timbre Section     ├─ Main Timbre Section
├─ Custom Filter (drawn)   ├─ Custom Filter (drawn)
├─ Prism Effect            ├─ Prism Effect
├─ Blur Effect             ├─ Blur Effect
├─ Pluck Effect            ├─ Pluck Effect
├─ Strum Effect            ├─ Strum Effect
├─ 2x Envelopes            ├─ 2x Envelopes
├─ 2x LFOs                 ├─ 2x LFOs
└─ Volume & Pan            └─ Volume & Pan
            ↓                    ↓
            └──── MIXER ────────┘
                   ↓
              Master Output
`\`\`

Each engine is essentially a complete Harmor synthesizer. The mixer blends them before the master effects.

### Per-Engine Controls

**Accessible via A/B buttons** in the interface:

| Control | A Engine | B Engine | Notes |
|---------|----------|----------|-------|
| Timbre | Sub + Main | Sub + Main | Independent harmonic content |
| Filter | Drawn curve | Drawn curve | Different frequency responses |
| Prism | Separate amount | Separate amount | Different warping |
| Blur | Separate amount | Separate amount | Different density |
| Pluck | Separate shape | Separate shape | Different decay |
| Strum | Separate detune | Separate detune | Different width |
| Envelopes | EG1, EG2 | EG1, EG2 | Different articulation |
| LFOs | LFO1, LFO2 | LFO1, LFO2 | Different modulation |
| Volume | Per-engine | Per-engine | Balance before mix |
| Pan | Per-engine | Per-engine | Stereo placement |

---

## The Mix Parameter

### How Mixing Works

The **Mix** knob (0-100%) controls the A/B blend:

`\`\`
Mix = 0%      Mix = 50%      Mix = 100%
   A ───┐         A ──┐          ┌── B
        ↓            ↓              ↓
     Output       Output        Output
   (A only)    (A+B blend)     (B only)
`\`\`

### Mix Automation for Movement

Static A/B mixes are just the beginning. **Automating Mix** creates evolving timbres:

**Example - Evolving Pad:**
1. Engine A: Dark, low harmonics, slow attack
2. Engine B: Bright, high harmonics, fast attack
3. Automate Mix from 0% → 100% over 8 bars
4. Result: Pad "blossoms" from dark to bright

**Example - Dubstep Wobble:**
1. Engine A: Clean bass fundamentals
2. Engine B: Heavy Prism distortion
3. Automate Mix at LFO rate (1/8th notes)
4. Result: Classic wobble bass without filter automation

---

## A/B Mixing Strategies

### Strategy 1: Frequency Split

Assign different frequency ranges to each engine:

**Sub + Presence Split:**
- **Engine A**: Sub Timbre only (low fundamentals)
  - Sub Level: 100%
  - Main Level: 0%
  - Filter: Low-pass at 200Hz
  
- **Engine B**: Main Timbre only (presence)
  - Sub Level: 0%
  - Main Level: 100%
  - Filter: High-pass at 1kHz
  
- **Mix**: 50%
- **Result**: Independent control over sub and presence

**Hip-Hop Application:** Perfect for 808s - control the "boom" (A) and "click" (B) separately.

### Strategy 2: Transient + Body

Separate attack from sustain:

**Sharp Attack + Sustained Body:**
- **Engine A**: Pluck with fast decay
  - Pluck: High amount
  - Envelope: Fast attack, no sustain
  - Timbre: High harmonics
  
- **Engine B**: Sustained, no Pluck
  - Pluck: 0%
  - Envelope: Slow attack, long sustain
  - Timbre: Low harmonics
  
- **Mix**: Start at 100% A, automate to 50/50
- **Result**: Sharp attack that morphs into rich sustain

### Strategy 3: Dry + Wet (Effects)

One clean, one processed:

**Clean + Prism:**
- **Engine A**: Clean tone
  - All effects: Off
  - Pure additive timbre
  
- **Engine B**: Heavily processed
  - Prism: 80% (maximum warping)
  - Blur: 50% (density)
  - Wild timbre
  
- **Mix**: 70% A / 30% B
- **Result**: Clean foundation with "edge" from processed layer

### Strategy 4: Stereo Separation

Pan engines for width:

**Wide Bass Technique:**
- **Engine A**: Pan hard left
  - Sub frequencies only (mono-compatible)
  
- **Engine B**: Pan hard right
  - High harmonics only
  
- **Mix**: 50%
- **Result**: Wide stereo bass that collapses to mono cleanly

**Warning:** Always check mono compatibility when panning bass elements.

### Strategy 5: Rhythmic Layering

Different rhythmic patterns:

**Pulse + Sustain:**
- **Engine A**: Gated rhythm
  - LFO to volume: Square wave, 1/4 note
  - Choppy, rhythmic
  
- **Engine B**: Sustained pad
  - No gating
  - Smooth underlay
  
- **Mix**: 50%
- **Result**: Rhythmic texture over sustained bed

---

## Modulation Per Engine

### Independent Envelopes

Each engine has its own envelope generators:

**Different Attack Times:**
- **A EG1**: Attack 0ms (instant)
- **B EG1**: Attack 500ms (fade in)
- Mix at 50%: Sound "enters" as B fades in

**Different Decay Character:**
- **A**: Pluck with fast decay (percussive)
- **B**: Long release (sustained)
- Mix 50%: Percussive attack, long sustain

### Independent LFOs

LFOs can be different on each engine:

**Out-of-Phase Modulation:**
- **A LFO1**: Sine wave, rate 1Hz, phase 0°
- **B LFO1**: Sine wave, rate 1Hz, phase 180°
- Destination: Prism on both
- Result: One engine "brightens" as other "darkens"

**Different Rates:**
- **A LFO1**: 1/4 note (fast)
- **B LFO1**: 1/1 note (slow)
- Destination: Filter
- Result: Complex, evolving filter movement

---

## Resynthesis with Dual Engines

### Different Samples Per Engine

A and B can resynthesize **different audio files**:

**Layered Vocal:**
- **Engine A**: Original vocal (resynthesized)
- **Engine B**: Vocal formant-shifted up one octave
- Mix: 60% A / 40% B
- Result: Thickened vocal with natural harmonics

**Drum + Bass:**
- **Engine A**: Kick drum sample
- **Engine B**: Bass guitar sample
- Mix automated: B plays sustained, A for beats
- Result: Hybrid kick-bass instrument

### Same Sample, Different Settings

Resynthesize one sample twice with different ADV settings:

**Transients + Tones:**
- **Engine A**: Small window (preserves transients)
  - Use for attack portion
  
- **Engine B**: Large window (captures harmonics)
  - Use for body/sustain
  
- Mix: Blend for best of both

**Pitch Layers:**
- **Engine A**: Speed 100%, Formant 0 (original)
- **Engine B**: Speed 100%, Formant +12 (brightened)
- Mix: 50/50
- Result: Doubled track with different character

---

## A/B Performance Considerations

### CPU Impact

Running both engines doubles CPU usage compared to single engine:

| Configuration | Relative CPU | Use Case |
|--------------|--------------|----------|
| A only | 50% | Simple sounds |
| B only | 50% | Simple sounds |
| A + B (50/50) | 100% | Layered sounds |
| A + B (complex) | 120%+ | Heavy processing |

### Optimization Strategies

**When to Use Single Engine:**
- Simple bass sounds
- Single-timbre leads
- When CPU is constrained

**When to Use Dual Engine:**
- Complex layered sounds
- Sounds needing evolution
- Stereo effects
- When sound design is the priority

**Hybrid Approach:**
- Use A for most of the sound
- Add B only at specific moments (automate Mix)
- Reduces average CPU load

---

## Common A/B Presets and Patterns

### 808 Bass (Sub + Click)

**Engine A (Sub):**
- Sub Timbre: High, Main: Low
- Filter: Low-pass at 100Hz
- Pluck: 0%
- Volume: 100%

**Engine B (Click):**
- Sub Timbre: 0%, Main: High
- Filter: High-pass at 3kHz
- Pluck: High (fast decay)
- Prism: 20% (edge)
- Volume: 30%

**Mix**: 70% A / 30% B

### Vocal Pad (Formant Split)

**Engine A (Body):**
- Resynthesized vocal
- Formant: 0 (original)
- Filter: Low-pass at 2kHz
- Blur: 30%

**Engine B (Air):**
- Same vocal, resynthesized again
- Formant: +12 (shifted)
- Filter: High-pass at 2kHz
- Blur: 20%

**Mix**: 50/50, slight stereo pan

### Dubstep Growl (Clean + Distorted)

**Engine A (Foundation):**
- Simple saw-like timbre
- Clean filter
- Sub focus

**Engine B (Growl):**
- Complex timbre
- Prism: 60% (heavy warping)
- Strum: 40% (detuned)
- Blur: 30%

**Mix**: Automate 100% A → 50/50 → 100% B for "growling" effect

---

## Practical Workflow Tips

### Starting with A/B

1. **Begin with Engine A only** (Mix at 0%)
2. **Design your base sound** in A
3. **Copy to Engine B** (use the Copy A→B function if available)
4. **Modify B** for contrast
5. **Adjust Mix** for blend

### Quick A/B Experiments

Try these one-click experiments:

**Stereo Width:**
- Keep A centered
- Pan B hard left or right
- Mix at 50%
- Instant width

**Octave Layer:**
- Set A to normal pitch
- Set B +12 semitones
- Mix at 30-40%
- Instant "sub-octave" or "super-octave"

**Attack Accent:**
- A: Long attack, sustained
- B: Short attack, no sustain
- Mix: Start with B, move to A
- Emphasizes note starts

---

## Troubleshooting A/B Issues

### Issue: Sound Gets Quieter When Mixing

**Cause:** Phase cancellation between similar A and B content
**Solution:** 
- Shift phase of one engine (Phase knob)
- Change harmonic content of one engine
- Use different filter shapes

### Issue: CPU Spikes

**Cause:** Both engines at full complexity
**Solution:**
- Reduce unison voices on one engine
- Disable unused effects on one engine
- Use single engine when possible

### Issue: Muddy Sound

**Cause:** Both engines filling same frequency range
**Solution:**
- Use filter to separate frequency ranges
- Adjust Sub/Main balance differently per engine
- Pan engines apart

---

## Summary: Dual Engine Power

1. **Two complete additive engines** = Massive sound design potential
2. **Independent processing** = Each engine can be completely different
3. **Mix parameter** = Seamless blending and automation
4. **Frequency splitting** = Precise control over tonal balance
5. **Stereo separation** = Width without phase issues
6. **Resynthesis layering** = Combine different samples or settings

**The A/B Philosophy:** Think of Harmor not as one 516-partial engine, but as **two 516-partial engines that can work together or separately**. This doubles your additive power and opens sound design possibilities no other synth can match.

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Harmor.htm

```

---

## FILE: 01-Learning\Concepts\unique-processors-prism-blur-pluck-strum.md

```markdown
# Unique Processors: Prism, Blur, Pluck, Strum

Deep dive into Harmor's exclusive effects that create sounds impossible in other synthesis methods.

## Overview

Harmor features four unique processors that manipulate its 516 partials in ways no other synthesizer can match:

- **Prism**: Harmonic warping and spectral shifting
- **Blur**: Partial density and smearing
- **Pluck**: Frequency-dependent decay shaping
- **Strum**: Micro-detuning between partials

These processors work on the partial level, creating effects impossible with traditional filter or distortion effects.

[SRC: IL-MAN]

---

## Prism: Harmonic Warping

### What Prism Does

**Prism** multiplies partial frequencies by a variable amount, creating inharmonic relationships:

`\`\`
Original Partials:     100Hz, 200Hz, 300Hz, 400Hz...
After Prism (1.5x):    150Hz, 300Hz, 450Hz, 600Hz...
Result: Inharmonic, metallic, bell-like
`\`\`

### The Math Behind Prism

Prism creates **inharmonic frequencies** by:
- Taking each partial's frequency
- Multiplying by the Prism factor (0.5x - 2.0x typical)
- Preserving amplitude envelope

**Harmonic vs Inharmonic:**
- **Harmonic**: Frequencies are integer multiples (100, 200, 300...)
- **Inharmonic**: No simple ratio (100, 273, 412, 605...)
- **Prism converts**: Harmonic → Inharmonic

### Prism Controls

| Control | Range | Effect |
|---------|-------|--------|
| **Amount** | 0-100% | How much warping is applied |
| **Depth** | Varies | Frequency range affected |
| **Mix** | 0-100% | Blend of dry and processed |

### Prism Applications

**1. Growl Bass (Dubstep/Hip-Hop):**
`\`\`
Settings:
- Amount: 60-80%
- Apply to: Mid-range partials (200Hz-2kHz)
- Combine with: LFO modulation

Technique:
1. Start with saw-like timbre
2. Apply heavy Prism
3. Modulate Prism with LFO (1/8th note rate)
4. Result: Classic "growl" effect
`\`\`

**2. Metallic Leads:**
`\`\`
Settings:
- Amount: 40-60%
- Wide frequency range
- Subtle envelope modulation

Result: Bell-like, metallic character
Perfect for: Sci-fi leads, unique textures
`\`\`

**3. Vocal Robotic Effect:**
`\`\`
Settings (on resynthesized vocal):
- Amount: 30-50%
- Focus on upper midrange
- Static (no modulation)

Result: Artificial, synthesized vocal character
`\`\`

**4. Cinematic Textures:**
`\`\`
Settings:
- Amount: 20-40%
- Full frequency range
- Slow LFO modulation (0.1-0.5Hz)

Result: Ever-evolving, mysterious pads
`\`\`

### Prism Per Engine

With A/B dual engines, **each engine has independent Prism**:

**Dual Prism Technique:**
- Engine A: Prism 0% (clean)
- Engine B: Prism 60% (warped)
- Automate Mix between them
- Result: Clean tone that "morphs" into inharmonic

---

## Blur: Partial Smearing

### What Blur Does

**Blur** spreads the energy of each partial to adjacent partials, creating density:

`\`\`
Before Blur:
Partial 10: ████ 100%
Partial 11:      0%
Partial 12:      0%

After Blur (50%):
Partial 10: ██ 50%
Partial 11: ████ 100% (original position)
Partial 12: ██ 50%
`\`\`

### The Effect on Sound

| Blur Amount | Character | Best For |
|-------------|-----------|----------|
| **0%** | Clean, precise | Articulate leads, bass |
| **20%** | Slight thickening | Natural sounds |
| **50%** | Dense, cloudy | Pads, textures |
| **80%+** | Very diffuse | Ambient, atmospheric |

### Blur Applications

**1. Vocal Thickening:**
`\`\`
Resynthesize vocal sample
Blur: 30-40%
Result: "Double-tracked" effect
No need to record twice
`\`\`

**2. Pad Density:**
`\`\`
Start: Simple timbre (few partials active)
Blur: 60-80%
Result: Rich, complex pad
Even from simple source
`\`\`

**3. Smoothing Transitions:**
`\`\`
On resynthesized samples:
Blur: 20-30%
Smooths: Abrupt changes between analysis frames
Useful for: Time-stretched vocals, glitch removal
`\`\`

**4. Creating Unison:**
`\`\`
Unison voices: 1 (saves CPU)
Blur: 40-60%
Strum: 30% (complementary)
Result: Wide, dense sound
Lower CPU than 9-voice unison
`\`\`

### Blur vs Traditional Chorus

| Aspect | Traditional Chorus | Harmor Blur |
|--------|-------------------|-------------|
| Method | Delay + modulation | Partial spreading |
| CPU | Moderate | Low (part of synthesis) |
| Artifacts | Can be phasey | Phase-coherent |
| Control | Rate/Depth | Amount only |
| Character | Wobbly | Dense/smooth |

---

## Pluck: Frequency-Dependent Decay

### What Pluck Does

**Pluck** applies different decay times to different frequency bands, simulating how strings and other plucked instruments naturally decay (highs dampen faster than lows):

`\`\`
Time →
      High Freq: ████░░░░░░░░░░░░ (fast decay)
      Mid Freq:  ████████░░░░░░░░ (medium decay)
      Low Freq:  ████████████████ (slow decay)
`\`\`

### The Physics of Pluck

Real instruments exhibit this behavior:
- **Guitar strings**: High harmonics die quickly, lows sustain
- **Piano**: Bright attack, mellow sustain
- **Bass**: Sub frequencies ring longer than harmonics

Pluck recreates this **naturally** in additive synthesis.

### Pluck Controls

| Control | Function | Typical Range |
|---------|----------|---------------|
| **Amount** | Overall effect strength | 0-100% |
| **Shape** | Decay curve | Exponential, Linear |
| **Tilt** | Balance low vs high decay | Bass-heavy, Balanced, Treble-heavy |

### Pluck Applications

**1. Realistic String Emulation:**
`\`\`
Settings:
- Amount: 60-80%
- Shape: Exponential
- Tilt: Bass-heavy (lows sustain longer)

Timbre: Saw-like or drawn harmonics
Result: Plausible string instrument
From pure synthesis
`\`\`

**2. 808-Style Decay:**
`\`\`
Settings:
- Amount: 40-60%
- Sub timbre: Strong fundamentals
- Main timbre: Moderate harmonics
- Pluck: Balanced tilt

Result: Classic 808 "boom to click" decay
Without samples
`\`\`

**3. Percussive Bass:**
`\`\`
Settings:
- Amount: 70-90%
- High pluck for: Fast transient
- Sub sustain for: Body

Result: Slap-bass character
Perfect for funk/R&B
`\`\`

**4. Transient Shaping:**
`\`\`
On any sound:
High Pluck amount
Focus decay on: High partials
Result: Sharper attacks
More percussive feel
`\`\`

### Combining Pluck with Envelopes

Pluck works **with** the envelope generators:

**Fast Pluck + Slow Envelope:**
- Pluck kills highs quickly
- Envelope sustains overall level
- Result: Attack-focused sound

**Subtle Pluck + Percussive Envelope:**
- Pluck shapes harmonic decay
- Envelope controls amplitude
- Result: Natural, organic character

---

## Strum: Partial Detuning

### What Strum Does

**Strum** applies micro-detuning to partials, creating a "chorus of partials" effect:

`\`\`
Without Strum:
All partials: Perfectly in tune
Sound: Clinical, precise

With Strum (30%):
Partial 1: 100Hz +0 cents
Partial 2: 200Hz +3 cents
Partial 3: 300Hz -2 cents
Partial 4: 400Hz +4 cents
...
Sound: Thick, chorus-like, natural
`\`\`

Each partial gets a **unique, fixed detune amount** based on its frequency.

### Strum vs Unison

| Feature | Unison | Strum |
|---------|--------|-------|
| Method | Multiple voices | Single voice, detuned partials |
| CPU | Higher (more voices) | Lower (part of synthesis) |
| Character | Wide, stereo | Dense, focused |
| Use | Big pads, leads | Natural thickness |

**Best Practice:** Use moderate unison (3-4 voices) + Strum (30-50%) for maximum density without CPU overload.

### Strum Applications

**1. Naturalizing Synthetics:**
`\`\`
Any synthesized sound
Strum: 20-30%
Result: Less "digital," more organic
Like: Vintage analog synths
`\`\`

**2. Vocal Realism:**
`\`\`
Resynthesized vocal
Strum: 15-25%
Blur: 20-30% (complementary)
Result: More "human" quality
Less machine-like
`\`\`

**3. Vintage Character:**
`\`\`
Retro leads/basses
Strum: 40-60%
Combine with: Subtle pitch drift (if available)
Result: Warm, vintage analog feel
`\`\`

**4. Stereo Widening (with Pan):**
`\`\`
Engine A: Strum +50%, Pan left
Engine B: Strum +50%, Pan right
Mix: 50/50
Result: Wide, natural stereo
Detuned partials spread across field
`\`\`

---

## Combining the Four Processors

### Classic Combinations

**"Natural String":**
- Pluck: 70% (decay shaping)
- Strum: 25% (slight detuning)
- Blur: 20% (smoothness)
- Prism: 0% (stay harmonic)
- Result: Convincing string instrument

**"Sci-Fi Pad":**
- Pluck: 0% (even sustain)
- Strum: 40% (ethereal detuning)
- Blur: 60% (density)
- Prism: 30% (slight inharmonic)
- Result: Futuristic, evolving texture

**"Growl Bass":**
- Pluck: 30% (tighten decay)
- Strum: 0% (keep focused)
- Blur: 20% (slight thickness)
- Prism: 60-80% (heavy warping)
- LFO on Prism: Modulation
- Result: Dubstep growl

**"Vocal Ghost":**
- Pluck: 50% (formant-like decay)
- Strum: 30% (doubling effect)
- Blur: 40% (thickening)
- Prism: 10% (subtle character)
- Result: Haunting vocal texture

### Per-Engine Strategy

Use different processor combinations on A and B:

**Clean + Processed:**
- Engine A: All processors off (clean)
- Engine B: All processors on (40-60% each)
- Mix: 70/30
- Result: Foundation + character

**Contrast:**
- Engine A: High Strum (50%), low Blur (20%)
- Engine B: Low Strum (10%), high Blur (60%)
- Mix: 50/50
- Result: Complex, layered texture

---

## Hip-Hop Specific Applications

### 808 Replacement

Use the four processors to create 808-style bass from scratch:

`\`\`
Prism: 0% (keep harmonic)
Pluck: 60% (boom→click decay)
Strum: 0% (focused, mono)
Blur: 10% (minimal)

Timbre: Sub-heavy, few main harmonics
Filter: Low-pass with slight resonance at 2kHz
Result: Classic 808 character
Fully synthesized
`\`\`

### Vocal Effects Chain

On resynthesized vocals:

`\`\`
Prism: 20% (slight robotic)
Pluck: 40% (natural decay)
Strum: 25% (doubling)
Blur: 30% (thickening)

Additional: Formant shift ±6
Result: Processed vocal effect
No external plugins needed
`\`\`

### Trap Hi-Hat Synthesis

Create metallic trap hats:

`\`\`
Timbre: Many high partials (noise-like)
Prism: 40% (metallic inharmonic)
Pluck: 80% (very fast decay)
Strum: 0% (precise)
Blur: 0% (articulate)

Envelope: Instant attack, no sustain
Result: Metallic, crisp hi-hat
Fully synthesized
`\`\`

### Ambient Drone

For interludes and atmosphere:

`\`\`
Timbre: Spread partials across spectrum
Prism: 25% (dreamy inharmonic)
Pluck: 0% (infinite sustain)
Strum: 60% (thick, slow beating)
Blur: 70% (very dense)

LFO: Slow modulation on Prism and Strum
Result: Cinematic, evolving drone
`\`\`

---

## Advanced Techniques

### Processor as Filter Alternative

Instead of filtering, use processors to shape timbre:

**Blur as Low-Pass:**
- High Blur smoothes high frequencies
- More natural than steep filter cutoff
- Preserves some high "air"

**Pluck as Dynamic EQ:**
- Different decay per frequency
- Natural compression-like effect
- Smooth frequency-dependent control

### Creating Movement Without Automation

Static processor settings can create movement:

**Strum Beating:**
- Strum detunes partials against each other
- Natural "beating" effect (slow tremolo)
- No automation needed
- Adjust Strum amount for rate

**Prism as Resonator:**
- Prism creates inharmonic frequencies
- Some resonate more than others
- Static setting = evolving overtones

### Processor Envelopes

While processors don't have dedicated envelopes, you can use:

**EG Modulation:**
- Map Envelope to Prism Amount
- Prism "opens up" during note
- Creates "screaming" lead effect

**LFO Rhythmic Patterns:**
- Square wave LFO to Blur
- Blur "pumps" on/off
- Rhythmic texture without sidechain

---

## Processor Order and Interaction

### Signal Flow

`\`\`
Partials Generation
      ↓
   Prism (frequency warping)
      ↓
   Blur (partial spreading)
      ↓
   Pluck (decay shaping)
      ↓
   Strum (detuning)
      ↓
   Filter
      ↓
   Output
`\`\`

**Important:** The order matters! Prism comes before Blur, so blurred partials are already warped.

### CPU Considerations

| Processor | CPU Cost | Tip |
|-----------|----------|-----|
| **Prism** | Medium | Disable if not needed |
| **Blur** | Low | Safe to use liberally |
| **Pluck** | Low | Safe to use liberally |
| **Strum** | Very Low | Always safe |

---

## Summary: The Unique Four

1. **Prism** = Harmonic warping, inharmonic textures, growls
2. **Blur** = Partial density, thickening, smoothing
3. **Pluck** = Natural decay, realistic strings, transient shaping
4. **Strum** = Micro-detuning, vintage character, natural chorus

**The Power:** These processors work at the partial level, manipulating Harmor's 516 sine waves individually. This creates effects impossible with traditional audio effects, making Harmor unique among synthesizers.

**For Hip-Hop:** Use these to craft signature sounds - from perfect 808-style decays to robotic vocal effects to metallic trap textures - all without external plugins.

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Harmor.htm

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Harmor (5 Minutes)

1.  **Insert:** Load **Harmor** into the Channel Rack.
2.  **Resynthesize:** Find a vocal or drum loop in your browser. Drag it directly onto the **Main Display** of Harmor.
3.  **Play:** Hold a note. The sample will play back perfectly as an additive patch.
4.  **Manipulate:**
    - Turn the **TIME** knob to scan through the sample manually.
    - Use the **PRISM** knob to warp the tone.
    - Use the **BLUR** fader to turn the sample into a pad.
5.  **Filter:** Go to the **Filter** tab and draw a custom shape in the graph editor.
6.  **Unison:** Increase the **ORDER** knob for instant width.
7.  **Tip:** Use the **A/B** switch to layer two completely different resynthesized sounds. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\custom-filter-drawing-guide.md

```markdown
# Custom Filter Drawing Guide

How to use Harmor's unique custom filter curve editor.

[SRC: IL-MAN]

---

## Overview

Harmor's filter section allows you to **draw any frequency response curve** you want. Unlike traditional synths with fixed filter types (low-pass, high-pass, etc.), Harmor gives you a blank canvas to create:

- Multi-band filters
- Resonant peaks at specific frequencies
- Notch filters for problem frequencies
- "Smile" curves for classic EQ shapes
- Any combination imaginable

---

## Filter Display Layout

`\`\`
Harmor Filter Display

Amplitude/Gain
    ↑
+12dB│
     │
  0dB├────────────────────────────
     │
-12dB│
     │
-24dB│
     └────────────────────────────→ Frequency
    20Hz                       20kHz
    
    ┌────────────────────────────┐
    │      DRAWING AREA          │
    │                            │
    │  Click-drag to draw curve  │
    │                            │
    └────────────────────────────┘
`\`\`

**X-axis:** Frequency (log scale, 20Hz - 20kHz)
**Y-axis:** Gain/Attenuation (dB scale, typically -24dB to +12dB)

---

## Drawing Tools

### Basic Drawing

| Action | How To | Result |
|--------|--------|--------|
| **Add point** | Click anywhere | Creates control point |
| **Move point** | Drag existing point | Adjusts frequency/gain |
| **Draw curve** | Click-drag across display | Creates multiple points |
| **Remove point** | Right-click point | Deletes it |
| **Clear all** | Right-click → Clear | Reset to flat |

### Curve Manipulation

| Action | How To | Result |
|--------|--------|--------|
| **Smooth curve** | Right-click → Smooth | Averages adjacent points |
| **Invert** | Right-click → Invert | Flips vertically (pass becomes cut) |
| **Copy** | Right-click → Copy | Stores in clipboard |
| **Paste** | Right-click → Paste | Applies copied curve |
| **Copy A→B/B→A** | Right-click → Copy to other engine | Transfers between engines |

---

## Common Filter Shapes

### 1. Low-Pass Filter

**Shape:** Line high on left, slopes down to right

`\`\`
Gain
  ↑
 0dB├██████████████
    │               ╲
-12dB│                ╲
    │                 ╲
-24dB│                  ╲____
    └────────────────────────→ Freq
   100Hz   1kHz   5kHz  20kHz
`\`\`

**Drawing Steps:**
1. Click at 20Hz, drag to 0dB
2. Click at 500Hz-2kHz, set cutoff point
3. Drag to 20kHz at -24dB or lower
4. Click "Smooth" for gradual slope

**Use For:** Removing highs, sub-bass focus

### 2. High-Pass Filter

**Shape:** Line low on left, slopes up to right

`\`\`
Gain
  ↑
 0dB│                  __________
    │                ╱
-12dB│              ╱
    │            ╱
-24dB├████████╱
    └────────────────────────→ Freq
   20Hz   100Hz  500Hz  20kHz
`\`\`

**Drawing Steps:**
1. Click at 20Hz, drag to -24dB (or lower)
2. Click at 80-200Hz, set cutoff
3. Drag to 20kHz at 0dB
4. "Smooth" for gradual slope

**Use For:** Removing rumble, vocal clarity

### 3. Band-Pass Filter

**Shape:** Valley on sides, peak in middle

`\`\`
Gain
  ↑
 0dB│      ____________
    │     ╱            ╲
-12dB│    ╱              ╲
    │   ╱                ╲
-24dB├──╱                  ╲──
    └────────────────────────→ Freq
   100Hz 500Hz 1kHz  5kHz 20kHz
`\`\`

**Drawing Steps:**
1. Set low gain at 20Hz
2. Ramp up to 0dB at band center (e.g., 1kHz)
3. Ramp back down at upper cutoff
4. End low at 20kHz

**Use For:** Isolating frequency bands, "telephone" effect

### 4. Notch Filter

**Shape:** Flat line with sharp dip

`\`\`
Gain
  ↑
 0dB├────────────────────────
    │         ____
-12dB│        ╱    ╲
    │       ╱      ╲
-24dB│______╱        ╲________
    └────────────────────────→ Freq
            1kHz
`\`\`

**Drawing Steps:**
1. Draw flat line at 0dB
2. At problem frequency, click and drag DOWN sharply
3. Make dip narrow (just the problem freq)
4. Return to 0dB immediately after

**Use For:** Removing resonances, feedback frequencies

### 5. Resonant Peak

**Shape:** Boost at specific frequency

`\`\`
Gain
  ↑
+6dB│          ╱╲
 0dB├─────────╱──╲───────────
    │        ╱    ╲
-6dB│       ╱      ╲
    └───────────────────────→ Freq
           2kHz
`\`\`

**Drawing Steps:**
1. Flat line at 0dB
2. Sharp boost at desired frequency
3. Symmetrical return to 0dB
4. Keep narrow for precision

**Use For:** Accentuating presence, vocal clarity

### 6. Smile Curve (Mid Scoop)

**Shape:** Boost lows and highs, cut mids

`\`\`
Gain
  ↑
+6dB├──╲                    ╱──
 0dB│    ╲________________╱
    │
-6dB│
    └────────────────────────→ Freq
   100Hz     1kHz        10kHz
`\`\`

**Drawing Steps:**
1. Start high at 20-100Hz
2. Slope down to minimum around 500Hz-2kHz
3. Slope back up to high at 10kHz+
4. Smooth for gradual transitions

**Use For:** Classic "scooped" mix sound, drum punch

### 7. Multi-Peak (Complex)

**Shape:** Multiple resonant peaks

`\`\`
Gain
  ↑
+6dB│   ╱╲        ╱╲
 0dB├──╱──╲──────╱──╲───────
    │       ╲__╱      ╲
-6dB│
    └───────────────────────→ Freq
      200Hz  1kHz   5kHz
`\`\`

**Drawing Steps:**
1. Create multiple peaks at desired frequencies
2. Vary heights for emphasis
3. Connect with smooth curves
4. Use for complex tonal shaping

**Use For:** Formant shaping, unique vocal effects

---

## Advanced Techniques

### Drawing Accurate Frequencies

**Problem:** Hard to hit exact frequencies by eye

**Solution - Reference Points:**
- **80Hz**: Sub bass feel
- **200Hz**: Muddiness
- **1kHz**: Presence/core
- **3kHz**: Vocal intelligibility
- **5kHz**: Sibilance/snap
- **10kHz**: Air/brightness

**Tip:** Use Harmor's visual frequency analyzer to see where energy is, then draw accordingly.

### Copy Between Engines

**Use Case:** Different filtering on A and B

**Steps:**
1. Draw filter on Engine A
2. Right-click → Copy A to B
3. Switch to Engine B
4. Modify B's filter (e.g., invert it)
5. Mix A and B for complex filtering

### Filter + Envelope Modulation

**Dynamic Filtering:**
1. Draw your base filter shape
2. Go to EG section
3. Set EG1 Destination: Filter
4. Adjust EG1 Amount
5. Now filter moves with envelope!

**Example - Wah Effect:**
- Draw band-pass shape
- EG1: Fast attack, short decay
- EG1 → Filter: +50%
- Result: Auto-wah effect

### Comb Filter (Notch Series)

`\`\`
Multiple notches at harmonic intervals:

Gain
  ↑
 0dB├────╱╲────╱╲────╱╲────
    │   ╱  ╲  ╱  ╲  ╱  ╲
-24dB│──╱────╲╱────╲╱────╲──
    └────────────────────────→ Freq
       f   2f   3f   4f   5f

Where f = fundamental frequency
`\`\`

**Use For:** Metallic, resonant effects; Karplus-Strong style synthesis

---

## Hip-Hop Specific Applications

### 808 Enhancement

**Scoop the Mids, Boost Sub:**
`\`\`
Boost: 40-80Hz (sub power)
Cut: 200-400Hz (remove mud)
Boost: 2-3kHz (click/attack)
Cut: 5kHz+ (remove hiss)
`\`\`

### Vocal Presence

**Intelligibility Curve:**
`\`\`
High-pass: 80Hz (remove rumble)
Slight boost: 2-4kHz (presence)
Notch: Problem sibilance freq
Low-pass: 12kHz (soften if too bright)
`\`\`

### Drum Buss Processing

**Smile Curve on Mix:**
`\`\`
Boost: 100Hz (thump)
Scoop: 400Hz (remove boxiness)
Boost: 2-5kHz (snap/punch)
Result: Radio-ready drum sound
`\`\`

### Lo-Fi Effect

**Telephone Band-Pass:**
`\`\`
High-pass: 300Hz
Low-pass: 3-4kHz
Steep slopes on both sides
Result: Classic lo-fi vocal/drum sound
`\`\`

---

## Common Mistakes

### 1. Too Many Points

**Problem:** Jagged, unstable filter
**Solution:** Use fewer points, rely on smoothing

### 2. Extreme Boosts

**Problem:** +12dB+ boosts cause distortion
**Solution:** Keep boosts under +6dB, cut instead

### 3. Sharp Resonances

**Problem:** Very narrow peaks sound unnatural
**Solution:** Widen peaks slightly, add Blur effect

### 4. Forgetting Per-Engine

**Problem:** A and B have different filters, mixing causes phase issues
**Solution:** Copy A→B or be intentional about differences

---

## Quick Filter Recipes

### Recipe 1: "Warm Analog"
`\`\`
Gentle high-cut starting at 5kHz
Slight boost at 100-200Hz
Smooth curve, no sharp corners
Blur: 20-30% for extra warmth
`\`\`

### Recipe 2: "Modern Clarity"
`\`\`
High-pass at 50Hz (steep)
Notch at 300Hz (remove mud)
Boost at 3kHz (presence)
Low-pass at 15kHz (smooth top)
`\`\`

### Recipe 3: "Phone/Vintage"
`\`\`
Band-pass: 300Hz - 3.5kHz
Steep slopes on both sides
Slight resonance at 2kHz
Result: Classic telephone/AM radio
`\`\`

### Recipe 4: "Sub Focus"
`\`\`
Sharp low-pass at 100Hz
Boost at 60Hz (resonant peak)
Everything above 150Hz: -24dB
Result: Pure sub bass
`\`\`

---

## Summary

Harmor's custom filter is a **powerful creative tool**:
- Draw any frequency response imaginable
- Multiple peaks, notches, or complex shapes
- Modulate with envelopes for movement
- Different filters on A and B engines
- Combine with other processors for unique sounds

**Key Takeaway:** Don't think "low-pass" or "high-pass" - think "what frequencies do I want?" and draw it.

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet

Quick reference for all Harmor controls organized by section.

[SRC: IL-MAN]

---

## Global Controls

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Polyphony** | 1-64 voices | 16 | Max simultaneous notes |
| **Slide** | 0-100% | 0 | Portamento time |
| **Mix (A/B)** | 0-100% | 50% | Balance between engines |
| **Output Volume** | 0-100% | 80% | Master output level |

---

## Engine Selector (A/B)

Press **A** or **B** button to switch between engines. All parameters below are per-engine.

---

## Timbre Section

### Sub Timbre (Fundamentals)

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Sub Level** | 0-100% | 100% | Overall sub amplitude |
| **Sub Shape** | Various | Sine-ish | Harmonic distribution curve |
| **Sub Slope** | -100 to +100 | 0 | Harmonic rolloff steepness |
| **Sub Width** | 0-100% | 0% | Stereo spread of sub |

### Main Timbre (Harmonics)

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Main Level** | 0-100% | 80% | Overall main amplitude |
| **Main Shape** | Various | Saw-ish | Harmonic distribution |
| **Main Slope** | -100 to +100 | 0 | Harmonic rolloff |
| **Main Width** | 0-100% | 0% | Stereo spread |

**Quick Settings:**
- **Sub only**: Main Level = 0%
- **Main only**: Sub Level = 0%
- **Even balance**: Both at 80-100%

---

## Filter Section

### Custom Filter (Drawn)

| Control | Function | Notes |
|---------|----------|-------|
| **Draw** | Click-drag to create curve | Any shape possible |
| **Clear** | Reset to flat | Removes all filtering |
| **Smooth** | Average adjacent points | Softer transitions |
| **Copy/Paste** | Transfer between A/B | Right-click menu |
| **Invert** | Flip curve vertically | Swaps pass/stop |

### Filter Envelope

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Filter EG Amount** | -100 to +100% | 0 | Envelope modulation depth |
| **Filter EG Attack** | 0-100% | 0 | Attack time |
| **Filter EG Decay** | 0-100% | 30% | Decay time |
| **Filter EG Sustain** | 0-100% | 0% | Sustain level |
| **Filter EG Release** | 0-100% | 20% | Release time |

---

## Unique Processors

### Prism (Harmonic Warping)

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Prism Amount** | 0-100% | 0% | Warping intensity |
| **Prism Depth** | Low/Full/Band | Full | Frequency range affected |

**Quick Use:**
- **0%**: Clean, harmonic
- **30%**: Subtle character
- **60%**: Metallic/bell-like
- **80%+**: Heavy growl/dissonance

### Blur (Partial Smearing)

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Blur Amount** | 0-100% | 0% | Density/thickness |

**Quick Use:**
- **0-20%**: Articulate, clear
- **40-60%**: Dense pads
- **80%+**: Ambient/cloudy

### Pluck (Decay Shaping)

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Pluck Amount** | 0-100% | 0% | Decay shaping strength |
| **Pluck Shape** | Exp/Lin | Exp | Decay curve type |
| **Pluck Tilt** | Bass/Treble | Balanced | Low vs high decay |

**Quick Use:**
- **0%**: Even sustain
- **50%**: Natural string-like
- **80%+**: Fast percussive decay

### Strum (Partial Detuning)

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Strum Amount** | 0-100% | 0% | Detune intensity |

**Quick Use:**
- **0%**: Perfect tuning
- **20-40%**: Natural thickness
- **60%+**: Vintage/analog character

---

## Envelope Generators

### EG1 (Primary Envelope)

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **EG1 Attack** | 0-100% | 0 | Time to peak |
| **EG1 Decay** | 0-100% | 30% | Time to sustain |
| **EG1 Sustain** | 0-100% | 80% | Hold level |
| **EG1 Release** | 0-100% | 20% | Release time |
| **EG1 Amount** | -100 to +100% | 0 | Modulation depth |
| **EG1 Destination** | Multiple | None | Target parameter |

### EG2 (Secondary Envelope)

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **EG2 Attack** | 0-100% | 0 | Time to peak |
| **EG2 Decay** | 0-100% | 30% | Time to sustain |
| **EG2 Sustain** | 0-100% | 0% | Hold level |
| **EG2 Release** | 0-100% | 20% | Release time |
| **EG2 Amount** | -100 to +100% | 0 | Modulation depth |
| **EG2 Destination** | Multiple | None | Target parameter |

**Common Destinations:**
- **Timbre**: Harmonic balance
- **Filter**: Filter movement
- **Prism**: Evolving character
- **Volume**: Amplitude shaping
- **Pitch**: Pitch envelope

---

## LFO Section

### LFO1 & LFO2

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **LFO Rate** | 0-100% | 30% | Speed |
| **LFO Sync** | On/Off | Off | Tempo sync |
| **LFO Shape** | Sine/Tri/Saw/Sqr/Rand | Sine | Waveform |
| **LFO Amount** | -100 to +100% | 0 | Modulation depth |
| **LFO Destination** | Multiple | None | Target |
| **LFO Phase** | 0-360° | 0 | Start phase |
| **LFO Retrig** | On/Off | Off | Restart on note |

**Sync Rates (when Sync On):**
- 1/64, 1/32, 1/16, 1/8, 1/4, 1/2, 1/1, 2/1, 4/1

---

## Unison Section

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Unison Voices** | 1-9 | 1 | Voices per note |
| **Unison Detune** | 0-100% | 0% | Pitch spread |
| **Unison Stereo** | 0-100% | 0% | Pan spread |
| **Unison Blend** | 0-100% | 50% | Wet/dry mix |

**Quick Settings:**
- **1 voice**: Mono, focused
- **3 voices**: Subtle width
- **6 voices**: Wide, rich
- **9 voices**: Maximum, dense

---

## Resynthesis Controls (ADV Tab)

### Playback

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Time** | 0-100% | 0% | Position in sample |
| **Speed** | -200 to +200% | 100% | Playback rate |
| **Formant** | -12 to +12 semis | 0 | Formant shift |

### Quality

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Precision** | 0-100% | 50% | Analysis accuracy |
| **Blending** | 0-100% | 50% | Frame smoothing |
| **Window** | Small-Med-Large | Med | FFT window size |

### Phase

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Randomize** | 0-100% | 0% | Phase randomization |
| **Shift** | 0-360° | 0° | Phase offset |
| **Keep** | On/Off | On | Preserve phase |

---

## Global Effects

### Chorus

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Chorus Depth** | 0-100% | 0% | Modulation depth |
| **Chorus Rate** | 0-100% | 30% | LFO speed |
| **Chorus Mix** | 0-100% | 0% | Wet amount |

### Delay

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Delay Time** | 0-100% | 30% | Echo time |
| **Delay Sync** | On/Off | Off | Tempo sync |
| **Delay Feedback** | 0-100% | 30% | Echo repeats |
| **Delay Mix** | 0-100% | 0% | Wet amount |

### Reverb

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Reverb Size** | 0-100% | 50% | Room size |
| **Reverb Damping** | 0-100% | 50% | High-freq decay |
| **Reverb Mix** | 0-100% | 0% | Wet amount |

---

## MISC Tab Parameters

| Parameter | Range | Default | Function |
|-----------|-------|---------|----------|
| **Pitch Bend Range** | 1-48 semis | 12 | PB wheel range |
| **Mod Wheel** | Various | Filter | MW destination |
| **Expression** | On/Off | On | CC11 control |
| **Sustain** | On/Off | On | CC64 pedal |
| **Legato** | On/Off | Off | Re-trigger behavior |
| **Voice Cut** | Oldest/Newest | Oldest | Polyphony behavior |

---

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Switch Engine A | Click **A** button |
| Switch Engine B | Click **B** button |
| Copy A→B | Right-click → Copy A to B |
| Copy B→A | Right-click → Copy B to A |
| Clear Filter | Right-click filter display → Clear |
| Load Sample | Drag audio onto Harmor |
| Open IMG Tab | Click **IMG** button |
| Open ADV Tab | Click **ADV** button |

---

## Common Quick Values

### 808-Style Bass
`\`\`
Sub Level: 100%
Main Level: 40%
Pluck: 60%
Prism: 0%
Filter: Low-pass, 200Hz cutoff
`\`\`

### Growl Bass
`\`\`
Pluck: 30%
Prism: 70%
LFO → Prism: 40%, rate 1/8
Filter: High resonance at 1kHz
`\`\`

### Vocal Pad
`\`\`
Blur: 40%
Strum: 30%
Pluck: 0%
Chorus: 30%
Reverb: 40%
`\`\`

### Metallic Lead
`\`\`
Prism: 50%
Strum: 10%
Blur: 20%
Unison: 5 voices
Stereo: 60%
`\`\`

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\resynthesis-quick-guide.md

```markdown
# Resynthesis Quick Guide

Quick reference for Harmor's drag-and-drop resynthesis modes.

[SRC: IL-MAN]

---

## Getting Started

### Drag and Drop

1. **Drag any audio file** directly onto Harmor's interface
2. Harmor automatically analyzes and converts to partials
3. Play your keyboard - the sample is now playable

**Supported Formats:** WAV, AIFF, MP3, FLAC, OGG, plus PNG/BMP for image synthesis

### Two Modes: IMG vs ADV

| Feature | IMG Tab | ADV Tab |
|---------|---------|---------|
| **Display** | Visual spectrogram | Parameter controls |
| **Editing** | Draw/erase/blur on image | Knobs and sliders |
| **Best For** | Creative sound design | Precise control |
| **Visual** | Yes - see the sound | No - use your ears |
| **Time-stretch** | Drag to resize | Speed knob |

---

## IMG Tab - Visual Editing

### Understanding the Display

`\`\`
IMG Tab Display

Frequency (Y-axis)
     ↑
20kHz│                    ╱╲
     │                 ╱╱  ╲╲
 10kHz│              ╱╱      ╲╲
     │           ╱╱          ╲
  5kHz│        ╱╱              ╲
     │     ╱╱                    ╲
  2kHz│  ╱╱                        ╲
     │╱╱                              ╲
 100Hz│__________________________________\__→ Time (X-axis)
     0%                              100%

Brightness = Amplitude (Louder = Brighter)
`\`\`

### Tools

| Tool | Function | Shortcut/Action |
|------|----------|-----------------|
| **Draw** | Add frequency content | Click-drag |
| **Erase** | Remove content | Shift+click-drag |
| **Blur** | Smooth transitions | Tool button + drag |
| **Smear** | Stretch horizontally | Alt+drag |
| **Zoom** | Magnify view | Mouse wheel |
| **Pan** | Move view | Right-click drag |

### Quick Edits

**Time-Stretch (Lossless):**
1. Select area with marquee
2. Drag corner handles
3. Stretch horizontally = longer time, same pitch
4. Stretch vertically = pitch shift, same time

**Remove Unwanted Frequencies:**
1. Select Eraser tool
2. Paint over frequencies to remove
3. Great for: Removing hiss, cleaning up samples

**Add Harmonics:**
1. Select Draw tool
2. Click and draw horizontal lines
3. Higher lines = higher harmonics
4. Brighter = louder

---

## ADV Tab - Parameter Control

### Playback Section

| Control | Range | Default | Quick Tips |
|---------|-------|---------|------------|
| **Time** | 0-100% | 0% | Scrubs through sample |
| **Speed** | -200 to +200% | 100% | Independent of pitch! |
| **Formant** | -12 to +12 | 0 | Shift character without pitch |

**Speed Values:**
- **100%** = Normal speed, normal pitch
- **50%** = Half speed, SAME pitch (time-stretch!)
- **200%** = Double speed, SAME pitch
- **0%** = Freeze at current position
- **-100%** = Reverse playback

### Quality Section

| Control | Range | Default | Function |
|---------|-------|---------|----------|
| **Precision** | 0-100% | 50% | Analysis accuracy |
| **Blending** | 0-100% | 50% | Frame smoothness |
| **Window** | Small/Med/Large | Med | FFT size |

**When to Adjust:**
- **Precision ↑**: For clean sustained sounds (vocals, pads)
- **Precision ↓**: For drums, transients (less "smeary")
- **Blending ↑**: Smooth, ambient textures
- **Blending ↓**: Sharp, rhythmic sounds
- **Window Small**: Better time resolution (drums)
- **Window Large**: Better frequency resolution (tones)

### Phase Section

| Control | Range | Default | Effect |
|---------|-------|---------|--------|
| **Randomize** | 0-100% | 0% | Adds thickness |
| **Shift** | 0-360° | 0° | Changes attack character |
| **Keep** | On/Off | On | Preserve original phase |

**Quick Use:**
- **Randomize 30%**: Naturalize vocals
- **Randomize 0%**: Preserve punch on drums
- **Shift 180°**: Can fix phase cancellation in A/B mixing

---

## Common Resynthesis Workflows

### 1. Vocal Manipulation

`\`\`
Drag vocal into Harmor
         ↓
ADV Tab: Speed 100%, Formant 0
         ↓
Modulate Formant with LFO:
  • Amount: ±6 semitones
  • Rate: 1/4 note
         ↓
Result: Talking/morphing vocal effect
`\`\`

### 2. Time-Stretch Without Artifacts

`\`\`
Drag sample into Harmor
         ↓
ADV Tab: Speed 50%
         ↓
Pitch: Transpose in channel settings
         ↓
Result: Slowed down, natural pitch
No chipmunk/monster effect!
`\`\`

### 3. Infinite Sustain/Freeze

`\`\`
Find good spot in sample
         ↓
ADV Tab: Set Time to position
         ↓
Speed: 0% (stops playback)
         ↓
Play note: Infinite sustain at that point
         ↓
Add effects: Create ambient textures
`\`\`

### 4. Reverse Effect

`\`\`
ADV Tab: Speed -100%
         ↓
Option: Automate Time
         ↓
Result: Backwards playback
Smooth, no clicks (additive magic)
`\`\`

### 5. Image-to-Sound

`\`\`
Create PNG in any image editor
         ↓
White = loud frequencies
Black = silence
         ↓
Drag PNG onto Harmor
         ↓
Harmor converts pixels to partials
         ↓
Play: Unique generated sound
`\`\`

---

## Quick Reference Tables

### Speed vs Result

| Speed | Time | Pitch | Use For |
|-------|------|-------|---------|
| 100% | Normal | Normal | Standard playback |
| 50% | 2x longer | Same | Time-stretching |
| 200% | 2x faster | Same | Fast playback |
| 0% | Stopped | Same | Freeze/sustain |
| -50% | Slow reverse | Same | Reverse time-stretch |
| -100% | Normal reverse | Same | Reverse playback |

### Formant Shifts

| Formant | Effect | Best On |
|---------|--------|---------|
| +12 | "Donald Duck" | Vocals, bass |
| +6 | Brighter, smaller | Vocals |
| 0 | Original | Everything |
| -6 | Darker, larger | Vocals, leads |
| -12 | "Monster/Demon" | Vocals, bass |

### Window Sizes

| Window | Best For | Trade-off |
|--------|----------|-------------|
| Small | Drums, percussion | Better time, worse frequency |
| Medium | General use | Balanced |
| Large | Vocals, pads, tones | Better frequency, worse time |

---

## Troubleshooting

| Problem | Likely Cause | Solution |
|---------|--------------|----------|
| Sounds "metallic" | Phase issues | Increase Blending, add Blur |
| Transients too soft | Window too large | Use smaller Window |
| "Underwater" sound | Too much low-mid | Filter 200-500Hz, reduce Sub |
| Pitch wobbles | Analysis mismatch | Lock Speed to musical values |
| CPU spikes | Complex resynthesis | Freeze channel when done |
| Clicks at loops | Bad loop points | Use crossfade in IMG tab |

---

## Keyboard Shortcuts (IMG Tab)

| Action | Key/Mouse |
|--------|-----------|
| Draw | Left-click drag |
| Erase | Shift + drag |
| Blur | B key + drag |
| Smear | Alt + drag |
| Zoom | Mouse wheel |
| Pan view | Right-click drag |
| Select area | Marquee drag |
| Copy selection | Ctrl+C |
| Paste | Ctrl+V |
| Clear all | Delete key |
| Undo | Ctrl+Z |

---

## Preset Ideas

### "Vocal Ghost"
`\`\`
Time: 0-100% (automate for movement)
Speed: 25% (slow)
Formant: -6 (deep)
Blur: 40%
Filter: Low-pass at 2kHz
`\`\`

### "Drum Stretch"
`\`\`
Window: Small (transients)
Precision: 40% (less smear)
Speed: 50% (half time)
Pluck: 60% (tighten)
`\`\`

### "Infinite Pad"
`\`\`
Find sustained note in sample
Time: Fixed position
Speed: 0% (freeze)
Blur: 60%
Strum: 40%
`\`\`

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\signal-flow-guide.md

```markdown
# Signal Flow Guide

Visual guide to Harmor's audio signal path from input to output.

[SRC: IL-MAN]

---

## Overview

Harmor processes sound through multiple stages, from the dual additive engines through unique processors to global effects. Understanding this flow helps you make better sound design decisions.

---

## Complete Signal Flow Diagram

`\`\`
MIDI NOTE INPUT
      ↓
┌─────────────────────────────────────────────────────────┐
│                    ENGINE A or B                          │
│  (Selectable via A/B buttons, both run simultaneously)    │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  PARTIAL GENERATION (516 sine waves per voice)            │
│       ↓                                                   │
│  ┌──────────────┐     ┌──────────────┐                    │
│  │  SUB TIMBRE  │     │  MAIN TIMBRE │                    │
│  │  (Partials   │     │  (Partials   │                    │
│  │   1-32)      │     │   33-516)    │                    │
│  │              │     │              │                    │
│  │ • Level      │     │ • Level      │                    │
│  │ • Shape      │     │ • Shape      │                    │
│  │ • Slope      │     │ • Slope      │                    │
│  │ • Width      │     │ • Width      │                    │
│  └──────┬───────┘     └──────┬───────┘                    │
│         ↓                     ↓                           │
│         └──────────┬──────────┘                           │
│                    ↓                                       │
│            COMBINED TIMBRE                                 │
│                    ↓                                       │
│  ┌──────────────────────────────────────────┐              │
│  │           UNIQUE PROCESSORS              │              │
│  │                                          │              │
│  │  1. PRISM (Harmonic Warping)             │              │
│  │     ↓                                    │              │
│  │  2. BLUR (Partial Smearing)              │              │
│  │     ↓                                    │              │
│  │  3. PLUCK (Decay Shaping)                │              │
│  │     ↓                                    │              │
│  │  4. STRUM (Partial Detuning)           │              │
│  │                                          │              │
│  └──────────────────────────────────────────┘              │
│                    ↓                                       │
│  ┌──────────────────────────────────────────┐              │
│  │      CUSTOM FILTER (Drawn Curve)         │              │
│  │                                          │              │
│  │  • Can draw any frequency response       │              │
│  │  • Multiple points and curves            │              │
│  │  • Envelope modulation available         │              │
│  └──────────────────────────────────────────┘              │
│                    ↓                                       │
│  ┌──────────────────────────────────────────┐              │
│  │         ENVELOPE & LFO MODULATION        │              │
│  │                                          │              │
│  │  EG1, EG2 → Various destinations         │              │
│  │  LFO1, LFO2 → Various destinations       │              │
│  └──────────────────────────────────────────┘              │
│                    ↓                                       │
│         ENGINE OUTPUT (A or B)                              │
│                                                           │
└─────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────┐
│                   MIXER STAGE                           │
│                                                         │
│    Engine A Output ──┐                                  │
│                      ├──→ [ MIX KNOB ] ──→ Mixed       │
│    Engine B Output ──┘       0-100%                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────┐
│                 GLOBAL EFFECTS                          │
│                                                         │
│  • Chorus                                               │
│  • Delay                                                │
│  • Reverb                                               │
│                                                         │
└─────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────┐
│              UNISON (if enabled)                        │
│                                                         │
│  • 1-9 voices                                           │
│  • Detune                                               │
│  • Stereo spread                                        │
│  • Blend                                                │
│                                                         │
└─────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────┐
│              MASTER OUTPUT                              │
│                                                         │
│  • Volume                                               │
│  • Pan                                                  │
│  • Output to FL Studio mixer                            │
│                                                         │
└─────────────────────────────────────────────────────────┘
`\`\`

---

## Per-Engine Detailed Flow

### Additive Generation

`\`\`
Phase 1: Partial Creation
┌─────────────────────────────────────┐
│  516 Sine Wave Oscillators          │
│  Each with:                         │
│  • Frequency (harmonic series)       │
│  • Amplitude (from timbre settings) │
│  • Phase (initial position)         │
│  • Envelope (per-partial contour)   │
└─────────────────────────────────────┘
              ↓
Phase 2: Timbre Shaping
┌─────────────────────────────────────┐
│  SUB SECTION (Partials 1-32)        │
│  • Level: Master amplitude          │
│  • Shape: Harmonic curve           │
│  • Slope: Rolloff rate             │
│  • Width: Stereo spread            │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  MAIN SECTION (Partials 33-516)     │
│  • Level: Master amplitude          │
│  • Shape: Harmonic curve           │
│  • Slope: Rolloff rate             │
│  • Width: Stereo spread            │
└─────────────────────────────────────┘
              ↓
Combined = Base Additive Sound
`\`\`

### Processor Chain

`\`\`
Base Additive Sound
       ↓
┌──────────────────────────────────────┐
│  PRISM                             │
│  • Multiplies partial frequencies  │
│  • Creates inharmonic content      │
│  • Range: 0-100%                   │
└──────────────────────────────────────┘
       ↓
┌──────────────────────────────────────┐
│  BLUR                              │
│  • Spreads to adjacent partials    │
│  • Increases density               │
│  • Range: 0-100%                   │
└──────────────────────────────────────┘
       ↓
┌──────────────────────────────────────┐
│  PLUCK                             │
│  • Different decay per frequency   │
│  • Highs decay faster              │
│  • Lows sustain longer             │
│  • Range: 0-100%                   │
└──────────────────────────────────────┘
       ↓
┌──────────────────────────────────────┐
│  STRUM                             │
│  • Micro-detunes each partial      │
│  • Creates beating/thickness       │
│  • Range: 0-100%                   │
└──────────────────────────────────────┘
`\`\`

### Filter Section

`\`\`
Processed Sound
       ↓
┌──────────────────────────────────────┐
│  CUSTOM DRAWN FILTER                 │
│                                     │
│  • Draw any curve                   │
│  • Multiple points                  │
│  • Real-time display                │
│                                     │
│  Can be:                            │
│  • Low-pass                         │
│  • High-pass                        │
│  • Band-pass                        │
│  • Notch                            │
│  • Any combination                  │
│                                     │
│  EG Modulation available            │
└──────────────────────────────────────┘
`\`\`

### Modulation Routing

`\`\`
Envelope Generators
┌─────────────────────────────────────────────┐
│  EG1 (Primary)                              │
│  • Attack → Decay → Sustain → Release       │
│  • Bipolar amount (-100 to +100%)          │
│  • Assignable destination                   │
├─────────────────────────────────────────────┤
│  EG2 (Secondary)                            │
│  • Same architecture as EG1                 │
│  • Can modulate different target            │
└─────────────────────────────────────────────┘
              ↓
LFO Section
┌─────────────────────────────────────────────┐
│  LFO1 & LFO2                                │
│  • Rate: Speed (syncable)                   │
│  • Shape: Sine/Tri/Saw/Square/Random        │
│  • Amount: Modulation depth                 │
│  • Destination: Any parameter               │
│  • Phase: Start position                    │
│  • Retrig: Restart on note                  │
└─────────────────────────────────────────────┘
              ↓
Modulation Targets
┌─────────────────────────────────────────────┐
│  Common Destinations:                       │
│  • Timbre Level (Sub or Main)               │
│  • Filter Shape/Curve                       │
│  • Prism Amount                             │
│  • Volume                                   │
│  • Pitch (fine)                             │
│  • Pan                                      │
└─────────────────────────────────────────────┘
`\`\`

---

## A/B Mixing Stage

`\`\`
Engine A Output          Engine B Output
       ↓                        ↓
   [Volume]                 [Volume]
   [Pan]                    [Pan]
       ↓                        ↓
       └──────────┬─────────────┘
                  ↓
         [ MIX KNOB 0-100% ]
                  ↓
         0% = A only
         50% = Equal blend
         100% = B only
                  ↓
         Combined Output
`\`\`

---

## Resynthesis Flow (When Active)

`\`\`
Audio Sample Input (WAV/AIFF/etc)
              ↓
┌─────────────────────────────────────────────┐
│  ANALYSIS STAGE                             │
│                                             │
│  FFT Analysis                               │
│       ↓                                     │
│  Partial Extraction                         │
│       ↓                                     │
│  Phase & Amplitude Tracking                │
│       ↓                                     │
│  Time/Position Mapping                      │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│  PLAYBACK CONTROL (ADV Tab)                 │
│                                             │
│  • Time: Position in sample                   │
│  • Speed: Playback rate                       │
│  • Formant: Shift character                  │
└─────────────────────────────────────────────┘
              ↓
Converted to Partial Data
              ↓
┌─────────────────────────────────────────────┐
│  ADDITIVE RECONSTRUCTION                    │
│                                             │
│  516 Partials recreate the sample           │
│  Based on analysis data                     │
└─────────────────────────────────────────────┘
              ↓
Enters normal Harmor signal flow
`\`\`

---

## Global Effects Chain

`\`\`
Mixed Engine Output
       ↓
┌─────────────────────────────────────┐
│  CHORUS                             │
│  • Depth: Modulation amount          │
│  • Rate: LFO speed                  │
│  • Mix: Wet/dry blend               │
└─────────────────────────────────────┘
       ↓
┌─────────────────────────────────────┐
│  DELAY                              │
│  • Time: Echo delay                 │
│  • Feedback: Repeat amount          │
│  • Mix: Wet level                   │
│  • Sync: Tempo lock                 │
└─────────────────────────────────────┘
       ↓
┌─────────────────────────────────────┐
│  REVERB                             │
│  • Size: Room size                  │
│  • Damping: HF decay                │
│  • Mix: Wet level                   │
└─────────────────────────────────────┘
       ↓
Unison (if enabled)
       ↓
Master Output
`\`\`

---

## Unison Signal Flow

`\`\`
Effects Output
       ↓
┌─────────────────────────────────────┐
│  VOICE DUPLICATION                  │
│                                     │
│  Base voice → 2-9 copies            │
│                                     │
│  Each voice:                        │
│  • Slight detune (+/- cents)       │
│  • Pan position (spread)           │
│  • Phase offset                     │
└─────────────────────────────────────┘
       ↓
┌─────────────────────────────────────┐
│  BLENDING                           │
│                                     │
│  Mix parameter:                    │
│  • 0% = Dry (1 voice)               │
│  • 100% = Wet (all voices)           │
└─────────────────────────────────────┘
       ↓
Master Output
`\`\`

---

## Key Signal Flow Insights

### 1. Processor Order Matters

Prism → Blur → Pluck → Strum → Filter

**Cannot be reordered** - this is the fixed sequence.

### 2. A/B Engines are Identical

Both engines have the exact same architecture. The only difference is their parameter settings.

### 3. Effects are Global

Chorus, Delay, and Reverb are applied to the **mixed A/B output**, not per-engine.

### 4. Unison is Last

Unison happens after all effects, ensuring the entire processed sound gets widened.

### 5. Resynthesis Converts to Additive

Once analyzed, the sample becomes 516 partials and enters the same flow as synthesized sounds.

---

## CPU Load by Stage

| Stage | CPU Impact | Optimization Tip |
|-------|-----------|------------------|
| Partial Generation | Medium | Reduce active partials via filter |
| Prism | Medium | Disable when not needed |
| Blur | Low | Safe to use |
| Pluck | Low | Safe to use |
| Strum | Very Low | Always safe |
| Custom Filter | Low | Safe to use |
| Unison | High | Use 3-4 voices instead of 9 |
| Resynthesis | High at load | One-time analysis cost |

---

## Visualizing Your Sound

Use this flow to debug your patches:

1. **Too thin?** → Check Sub/Main balance, add Blur
2. **Too static?** → Add LFO modulation to Prism or Filter
3. **Too harsh?** → Increase Blur, reduce Prism
4. **Not enough low end?** → Boost Sub Timbre, check filter curve
5. **Phase issues?** → Reduce Unison, check Strum amount

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\troubleshooting-faq.md

```markdown
# Troubleshooting FAQ

Common Harmor issues and solutions.

[SRC: IL-MAN]

---

## Performance & CPU Issues

### Q: Why is Harmor using so much CPU?

**A:** Harmor's 516 partials per voice is powerful but demanding. Solutions:

1. **Reduce unison voices**: Use 3-4 instead of 9
2. **Lower polyphony**: 8-16 voices instead of 32-64
3. **Disable unused effects**: Turn off Prism/Blur if not needed
4. **Freeze the channel**: Right-click → Freeze
5. **Render to audio**: Right-click channel → Render to wave file
6. **Use single engine**: Mix to 0% or 100% instead of blended

### Q: Audio glitches/stuttering when playing?

**A:** CPU overload or buffer issues:

- Increase FL Studio buffer size (Options → Audio Settings)
- Enable "Multi-threaded generator processing" in wrapper settings
- Freeze complex Harmor channels
- Use fewer simultaneous Harmor instances

### Q: "Out of memory" errors when loading samples?

**A:** Large samples or many resynthesis instances:

- Use shorter samples for resynthesis
- Render resynthesized sounds to audio
- Close other memory-heavy applications
- Consider using 64-bit FL Studio for more RAM access

---

## Sound Quality Issues

### Q: My resynthesized sample sounds "metallic" or "ringing"

**A:** Phase coherence issue in high frequencies:

**Solutions:**
1. Increase **Blending** (ADV tab) to 60-80%
2. Add **Blur** effect (20-30%)
3. Use **custom filter** to roll off highest frequencies
4. Try larger **Window** size in ADV tab
5. Add slight **Strum** (10-20%) to randomize phase

### Q: Transients sound "soft" or "smeared"

**A:** Losing attack detail in analysis:

**Solutions:**
1. Use **smaller Window** size (ADV tab)
2. Increase **Precision**
3. Reduce **Blending**
4. Keep **Phase Randomize** low (0-10%)
5. Use Pluck effect to sharpen decay

### Q: Sound is muddy or "underwater"

**A:** Too much low-mid energy:

**Solutions:**
1. Reduce **Sub Timbre** level
2. Use custom **filter** to scoop 200-500Hz
3. Increase **Pluck** amount (faster decay)
4. Check if both A and B engines are filling same frequency range

### Q: Getting clicks/pops when notes change

**A:** Polyphony or envelope issues:

**Solutions:**
1. Increase **polyphony** (MISC tab)
2. Add slight **Release** time to envelopes
3. Enable **Legato** mode (MISC tab) for smoother transitions
4. Use **Slide** (portamento) for pitch changes

---

## Resynthesis Issues

### Q: Can't drag audio into Harmor

**A:** File or interface issue:

**Check:**
1. File format supported (WAV, AIFF, MP3, FLAC, OGG)
2. Drag directly onto Harmor window (not just the channel)
3. Try right-clicking in Harmor → "Open sample"
4. Check if sample is corrupted (play in Edison first)

### Q: Time-stretched sample sounds "wobbly"

**A:** Speed/time mismatch:

**Solutions:**
1. Lock Speed to musical values (25%, 50%, 100%, 200%)
2. Avoid values like 47% or 63%
3. Use Time automation with smooth ramps
4. Increase **Precision** in ADV tab

### Q: Pitch doesn't change when I transpose MIDI notes

**A:** Check these settings:

1. **Speed** knob in ADV tab - if at 0%, pitch won't change
2. **Formant** lock - might be compensating
3. **Channel pitch** vs **Harmor pitch** - check both
4. Resynthesis may have captured fixed pitch content

### Q: Image synthesis (PNG) sounds nothing like I expected

**A:** Image interpretation issues:

**Tips:**
1. **White = loud**, black = silent
2. Vertical position = frequency (bottom = low, top = high)
3. Horizontal = time (left = start, right = end)
4. Start with simple shapes (horizontal lines = tones)
5. Check image dimensions (power of 2 works best)

### Q: Formant shifting sounds unnatural

**A:** Formant shifting has limits:

**Solutions:**
1. Keep shifts within ±6 semitones for natural sound
2. Larger shifts (+12, -12) create "effect" sounds
3. Combine with Blur for smoother results
4. Try shifting before resynthesis instead

---

## A/B Engine Issues

### Q: Sound gets quieter when I mix A and B

**A:** Phase cancellation:

**Solutions:**
1. Shift phase of one engine (Phase knob, 0-360°)
2. Use different filter shapes on A and B
3. Change harmonic content (Sub/Main balance)
4. Pan A and B to different stereo positions

### Q: Can't hear Engine B at all

**A:** Check these:

1. **Mix knob** - might be at 0% (A only)
2. **Engine B volume** - check per-engine level
3. **Engine B timbre** - might all be set to 0%
4. **Filter** - might be cutting all frequencies
5. **Mute** - check if B is accidentally muted

### Q: How do I copy settings from A to B?

**A:** Right-click options:

1. Click the **B** button to select Engine B
2. Right-click anywhere in the Harmor interface
3. Select "Copy A to B" or "Copy B to A"
4. Or copy specific sections (timbre, filter, etc.)

---

## Filter Drawing Issues

### Q: Filter curve looks jagged/unstable

**A:** Too many control points:

**Solutions:**
1. Use "Smooth" function (right-click → Smooth)
2. Delete unnecessary points (right-click point → Delete)
3. Draw broader curves instead of tight zigzags
4. Use fewer, well-placed points

### Q: Filter doesn't seem to be doing anything

**A:** Check these:

1. **Filter EG Amount** - might be at 0%
2. **Envelope** - might be at zero sustain
3. **Timbre content** - might not have frequencies in filtered range
4. **Mix** - might be bypassed by A/B settings

### Q: How do I reset filter to flat?

**A:** Multiple ways:

1. Right-click filter display → Clear
2. Draw flat line at 0dB
3. Copy flat preset from other engine
4. Initialize patch and start over

---

## Modulation Issues

### Q: LFO isn't affecting anything

**A:** Check the routing:

1. **LFO Amount** - must be above 0%
2. **Destination** - must be assigned to a parameter
3. **Rate** - must be above 0%
4. **Sync** - if on, check sync rate selection
5. **Retrig** - if off, LFO might be between cycles

### Q: Envelope doesn't sound right

**A:** ADSR understanding:

- **Attack**: Time to reach peak (0 = instant)
- **Decay**: Time to fall to sustain level
- **Sustain**: Level held while note is held
- **Release**: Time to fall to zero after note release

**Check:**
1. If sustain is 0%, sound will decay to silence
2. Long release can overlap with next notes
3. Amount controls how much the envelope affects the target

### Q: Mod Wheel isn't working

**A:** Check MISC tab:

1. Open **MISC** tab
2. Set **Mod Wheel** destination
3. Common choices: Filter, Timbre, Prism
4. Ensure destination parameter is accessible

---

## Workflow Issues

### Q: How do I save a resynthesized patch?

**A:** Normal preset save:

1. **File → Save preset as** (or Ctrl+S)
2. Preset includes partial data
3. Save as .fnp file
4. Sample not needed after saving (embedded)

### Q: Can I export the IMG spectrogram as image?

**A:** Yes:

1. In IMG tab, right-click
2. Select "Export image" or similar
3. Saves as PNG/BMP
4. Can re-import or edit externally

### Q: How do I make a riser/sweep effect?

**A:** Multiple methods:

**Method 1 - Filter Sweep:**
1. Draw low-pass filter
2. EG1 → Filter with negative amount
3. Long attack on EG1

**Method 2 - Prism:**
1. Set Prism to 0%
2. EG1 → Prism, +100%
3. Long attack
4. Sound "opens up" over time

**Method 3 - Time Automation:**
1. Resynthesize a texture
2. Automate Time knob
3. Speed at 0%
4. Move Time from 0% to 100%

### Q: Best way to create 808-style bass?

**A:** Synthesis approach:

1. **Sub Timbre**: High level, simple shape
2. **Main Timbre**: Low level, few harmonics
3. **Pluck**: 60% for fast decay
4. **Filter**: Low-pass at 100-200Hz
5. **Envelope**: Short-medium decay, 0% sustain
6. Optional: Add click with Engine B

---

## Image Synthesis Issues

### Q: PNG won't load into Harmor

**A:** Format/Size issues:

**Requirements:**
- Format: PNG or BMP
- Mode: Grayscale or RGB (RGB used for phase)
- Size: Power of 2 recommended (256, 512, 1024)
- Height: Typically 256-512 pixels
- Width: Flexible (time dimension)

### Q: Image sounds too "harsh" or "digital"

**A:** Image characteristics:

**Solutions:**
1. Apply **Blur** in image editor before importing
2. Use gradients instead of hard edges
3. Add **Blur** effect in Harmor (40-60%)
4. Filter out highest frequencies
5. Use **Pluck** to shape decay

### Q: How do I convert a photo to sound?

**A:** Creative process:

1. Open photo in image editor
2. Convert to grayscale
3. Resize to 512x512 or 1024x256
4. Apply blur/smoothing
5. Save as PNG
6. Drag into Harmor IMG tab
7. Experiment with different photos

---

## Integration Issues

### Q: Harmor sounds different after exporting/rendering

**A:** Check these:

1. **Oversampling**: Set to at least 2x (4x recommended)
2. **Quality settings**: Match project sample rate
3. **Frozen tracks**: Unfreeze before render for consistency
4. **Plugin delay compensation**: Ensure enabled

### Q: MIDI notes not triggering Harmor

**A:** Routing check:

1. Verify channel is armed for input (orange button)
2. Check MIDI channel matches (MISC tab)
3. Ensure no other plugins are blocking MIDI
4. Try clicking Harmor's virtual keyboard

### Q: Automation isn't recording

**A:** Setup check:

1. Right-click parameter → "Create automation clip"
2. Or: Right-click → "Link to controller" → "Auto detect"
3. Ensure track is armed for automation
4. Check that parameter is automatable (most are)

---

## Still Having Issues?

### Check These First:

1. **Latest version**: Update to newest FL Studio
2. **Plugin integrity**: Try resetting Harmor to init patch
3. **Project settings**: Check sample rate (44.1k or 48k)
4. **Audio settings**: Verify buffer size and driver

### Useful Resources:

- Image-Line forums: forum.image-line.com
- FL Studio manual: image-line.com/fl-studio-learning/
- Harmor manual section: Plugins → Harmor

### Reset Everything:

**Nuclear option** if nothing works:
1. Save project
2. Right-click Harmor channel
3. "Init preset" or "Reset"
4. Rebuild patch from scratch
5. Often fixes hidden parameter issues

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Harmor

| Parameter | Section | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Prism** | Main | **Psychedelic**| **Spectral** | Harmonic frequency shifter. |
| **Blur** | Main | **Spacey** | **Density** | Temporal smearing engine. |
| **Pluck** | Main | **Moody** | **Transient** | Additive-based decay model. |
| **Formant** | ADV Tab | **Vibey** | **Timbre** | Shifts spectral envelope. |
| **Time** | Main | **Spacey** (Freeze)| **Timing** | Playback position in sample. |
| **Order** | Unison | **Melodic** | **Width** | Multi-voice detuning. |

- **Vibe Impact Tag (Prism):** Prism creates "Inharmonic" overtones, essential for the "Creepy" or "Alien" sounds in psychedelic rap.
- **Mix Impact Tag (Blur):** High Blur settings act as a "Spectral Reverb," filling the mix with a dense, smooth wall of sound. [SRC: IL-MAN]
```

---

## FILE: 02-Data\parameters\harmor-specs.json

```json
{
  "pluginName": "Harmor",
  "specsVersion": "1.0",
  "source": "[SRC: IL-MAN]",
  "synthesisEngine": {
    "type": "Additive",
    "partialsPerVoice": 516,
    "maxPartials": 516,
    "frequencyRange": {
      "min": 20,
      "max": 20000,
      "unit": "Hz"
    },
    "engines": {
      "count": 2,
      "names": ["A", "B"],
      "architecture": "Dual independent additive engines"
    }
  },
  "resynthesisCapabilities": {
    "audioImport": {
      "supportedFormats": ["WAV", "AIFF", "MP3", "FLAC", "OGG"],
      "dragAndDrop": true,
      "maxChannels": 2,
      "analysisMethod": "FFT-based spectral analysis"
    },
    "imageSynthesis": {
      "supportedFormats": ["PNG", "BMP"],
      "colorMode": "Grayscale or RGB (RGB encodes phase)",
      "pixelInterpretation": {
        "xAxis": "Time (left to right)",
        "yAxis": "Frequency (bottom to top, 20Hz-20kHz)",
        "brightness": "Amplitude (white = loud, black = silent)"
      }
    },
    "timeStretching": {
      "method": "Additive recalculation",
      "artifacts": "None (pitch-independent)",
      "speedRange": {
        "min": -200,
        "max": 200,
        "unit": "%"
      }
    },
    "formantShifting": {
      "range": {
        "min": -12,
        "max": 12,
        "unit": "semitones"
      },
      "pitchIndependent": true
    }
  },
  "uniqueProcessors": {
    "prism": {
      "type": "Harmonic warping",
      "function": "Multiplies partial frequencies to create inharmonic content",
      "range": "0-100%",
      "depthModes": ["Low", "Full", "Band"]
    },
    "blur": {
      "type": "Partial smearing",
      "function": "Spreads partial energy to adjacent frequencies",
      "range": "0-100%",
      "effect": "Increases density and thickness"
    },
    "pluck": {
      "type": "Decay shaping",
      "function": "Different decay times per frequency band",
      "range": "0-100%",
      "shapeOptions": ["Exponential", "Linear"],
      "tiltOptions": ["Bass", "Balanced", "Treble"]
    },
    "strum": {
      "type": "Partial detuning",
      "function": "Micro-detunes each partial",
      "range": "0-100%",
      "effect": "Natural chorus/thickness"
    }
  },
  "filterSection": {
    "type": "Custom drawn",
    "description": "User-drawn frequency response curve",
    "range": {
      "amplitude": {
        "min": -24,
        "max": 12,
        "unit": "dB"
      },
      "frequency": {
        "min": 20,
        "max": 20000,
        "unit": "Hz"
      }
    },
    "points": "Unlimited",
    "modulation": "Envelope and LFO assignable"
  },
  "modulation": {
    "envelopes": {
      "count": 2,
      "names": ["EG1", "EG2"],
      "stages": ["Attack", "Decay", "Sustain", "Release"],
      "amountRange": {
        "min": -100,
        "max": 100,
        "unit": "%"
      }
    },
    "lfos": {
      "count": 2,
      "names": ["LFO1", "LFO2"],
      "shapes": ["Sine", "Triangle", "Saw", "Square", "Random"],
      "sync": true,
      "amountRange": {
        "min": -100,
        "max": 100,
        "unit": "%"
      },
      "retrig": true
    }
  },
  "unison": {
    "maxVoices": 9,
    "detuneRange": {
      "min": 0,
      "max": 100,
      "unit": "%"
    },
    "stereoRange": {
      "min": 0,
      "max": 100,
      "unit": "%"
    }
  },
  "polyphony": {
    "maxVoices": 64,
    "default": 16,
    "voiceStealing": ["Oldest", "Newest"]
  },
  "effects": {
    "chorus": {
      "controls": ["Depth", "Rate", "Mix"],
      "modulation": true
    },
    "delay": {
      "controls": ["Time", "Feedback", "Mix", "Sync"],
      "sync": true
    },
    "reverb": {
      "controls": ["Size", "Damping", "Mix"],
      "algorithm": "Standard reverb"
    }
  },
  "performance": {
    "cpuUsage": {
      "singleEngine": "Medium",
      "dualEngine": "High",
      "resynthesis": "High at analysis time",
      "optimizationTips": [
        "Reduce unison voices",
        "Use single engine when possible",
        "Freeze/render complex patches"
      ]
    },
    "memory": {
      "resynthesisData": "Compact partial data",
      "presets": "Include partial data, no external samples needed"
    }
  },
  "integration": {
    "midi": {
      "pitchBend": true,
      "modWheel": "Assignable",
      "aftertouch": false,
      "sustain": true,
      "expression": true
    },
    "automation": {
      "allParameters": true,
      "hostSync": true
    }
  }
}

```

---

## FILE: 02-Data\parameters\parameter-definitions.json

```json
{
  "pluginName": "Harmor",
  "description": "Complete parameter specification for Harmor additive synthesizer and resynthesis engine",
  "version": "1.0",
  "source": "[SRC: IL-MAN]",
  "engineArchitecture": {
    "partialsPerVoice": 516,
    "dualEngines": true,
    "engineNames": ["A", "B"],
    "resynthesisModes": ["IMG", "ADV"],
    "imageSynthesis": true
  },
  "parameters": [
    {
      "section": "Global",
      "parameters": [
        {
          "id": "polyphony",
          "name": "Polyphony",
          "range": { "min": 1, "max": 64, "unit": "voices" },
          "default": 16,
          "description": "Maximum simultaneous voices"
        },
        {
          "id": "slide",
          "name": "Slide",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Portamento time between notes"
        },
        {
          "id": "mix_ab",
          "name": "Mix (A/B)",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 50,
          "description": "Balance between engine A and B"
        },
        {
          "id": "output_volume",
          "name": "Output Volume",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 80,
          "description": "Master output level"
        }
      ]
    },
    {
      "section": "Timbre",
      "subSection": "Sub Timbre",
      "parameters": [
        {
          "id": "sub_level",
          "name": "Sub Level",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 100,
          "description": "Overall sub timbre amplitude (partials 1-32)"
        },
        {
          "id": "sub_shape",
          "name": "Sub Shape",
          "type": "select",
          "options": ["Sine", "Triangle", "Saw", "Square", "Custom"],
          "default": "Sine",
          "description": "Harmonic distribution curve"
        },
        {
          "id": "sub_slope",
          "name": "Sub Slope",
          "range": { "min": -100, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Harmonic rolloff steepness"
        },
        {
          "id": "sub_width",
          "name": "Sub Width",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Stereo spread of sub frequencies"
        }
      ]
    },
    {
      "section": "Timbre",
      "subSection": "Main Timbre",
      "parameters": [
        {
          "id": "main_level",
          "name": "Main Level",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 80,
          "description": "Overall main timbre amplitude (partials 33-516)"
        },
        {
          "id": "main_shape",
          "name": "Main Shape",
          "type": "select",
          "options": ["Saw", "Square", "Triangle", "Sine", "Custom"],
          "default": "Saw",
          "description": "Harmonic distribution curve"
        },
        {
          "id": "main_slope",
          "name": "Main Slope",
          "range": { "min": -100, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Harmonic rolloff steepness"
        },
        {
          "id": "main_width",
          "name": "Main Width",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Stereo spread of main harmonics"
        }
      ]
    },
    {
      "section": "Filter",
      "parameters": [
        {
          "id": "filter_curve",
          "name": "Filter Curve",
          "type": "custom_drawn",
          "range": { "min": -24, "max": 12, "unit": "dB" },
          "description": "User-drawn frequency response curve"
        },
        {
          "id": "filter_eg_amount",
          "name": "Filter EG Amount",
          "range": { "min": -100, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Envelope modulation depth"
        }
      ]
    },
    {
      "section": "Processors",
      "parameters": [
        {
          "id": "prism_amount",
          "name": "Prism Amount",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Harmonic warping intensity"
        },
        {
          "id": "prism_depth",
          "name": "Prism Depth",
          "type": "select",
          "options": ["Low", "Full", "Band"],
          "default": "Full",
          "description": "Frequency range affected"
        },
        {
          "id": "blur_amount",
          "name": "Blur Amount",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Partial smearing/density"
        },
        {
          "id": "pluck_amount",
          "name": "Pluck Amount",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Frequency-dependent decay shaping"
        },
        {
          "id": "pluck_shape",
          "name": "Pluck Shape",
          "type": "select",
          "options": ["Exponential", "Linear"],
          "default": "Exponential",
          "description": "Decay curve type"
        },
        {
          "id": "pluck_tilt",
          "name": "Pluck Tilt",
          "type": "select",
          "options": ["Bass", "Balanced", "Treble"],
          "default": "Balanced",
          "description": "Low vs high frequency decay balance"
        },
        {
          "id": "strum_amount",
          "name": "Strum Amount",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Partial micro-detuning"
        }
      ]
    },
    {
      "section": "Envelope 1",
      "parameters": [
        {
          "id": "eg1_attack",
          "name": "EG1 Attack",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Time to reach peak"
        },
        {
          "id": "eg1_decay",
          "name": "EG1 Decay",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 30,
          "description": "Time to reach sustain"
        },
        {
          "id": "eg1_sustain",
          "name": "EG1 Sustain",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 80,
          "description": "Hold level"
        },
        {
          "id": "eg1_release",
          "name": "EG1 Release",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 20,
          "description": "Release time"
        },
        {
          "id": "eg1_amount",
          "name": "EG1 Amount",
          "range": { "min": -100, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Modulation depth"
        },
        {
          "id": "eg1_destination",
          "name": "EG1 Destination",
          "type": "select",
          "options": ["None", "Timbre", "Filter", "Prism", "Volume", "Pitch", "Pan"],
          "default": "None",
          "description": "Target parameter"
        }
      ]
    },
    {
      "section": "Envelope 2",
      "parameters": [
        {
          "id": "eg2_attack",
          "name": "EG2 Attack",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Time to reach peak"
        },
        {
          "id": "eg2_decay",
          "name": "EG2 Decay",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 30,
          "description": "Time to reach sustain"
        },
        {
          "id": "eg2_sustain",
          "name": "EG2 Sustain",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Hold level"
        },
        {
          "id": "eg2_release",
          "name": "EG2 Release",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 20,
          "description": "Release time"
        },
        {
          "id": "eg2_amount",
          "name": "EG2 Amount",
          "range": { "min": -100, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Modulation depth"
        },
        {
          "id": "eg2_destination",
          "name": "EG2 Destination",
          "type": "select",
          "options": ["None", "Timbre", "Filter", "Prism", "Volume", "Pitch", "Pan"],
          "default": "None",
          "description": "Target parameter"
        }
      ]
    },
    {
      "section": "LFO",
      "parameters": [
        {
          "id": "lfo1_rate",
          "name": "LFO1 Rate",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 30,
          "description": "LFO speed"
        },
        {
          "id": "lfo1_sync",
          "name": "LFO1 Sync",
          "type": "switch",
          "default": "Off",
          "description": "Tempo synchronization"
        },
        {
          "id": "lfo1_shape",
          "name": "LFO1 Shape",
          "type": "select",
          "options": ["Sine", "Triangle", "Saw", "Square", "Random"],
          "default": "Sine",
          "description": "LFO waveform"
        },
        {
          "id": "lfo1_amount",
          "name": "LFO1 Amount",
          "range": { "min": -100, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Modulation depth"
        },
        {
          "id": "lfo1_destination",
          "name": "LFO1 Destination",
          "type": "select",
          "options": ["None", "Timbre", "Filter", "Prism", "Volume", "Pitch", "Pan"],
          "default": "None",
          "description": "Target parameter"
        },
        {
          "id": "lfo1_phase",
          "name": "LFO1 Phase",
          "range": { "min": 0, "max": 360, "unit": "degrees" },
          "default": 0,
          "description": "Start phase"
        },
        {
          "id": "lfo1_retrig",
          "name": "LFO1 Retrig",
          "type": "switch",
          "default": "Off",
          "description": "Restart on note"
        }
      ]
    },
    {
      "section": "LFO2",
      "parameters": [
        {
          "id": "lfo2_rate",
          "name": "LFO2 Rate",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 30,
          "description": "LFO speed"
        },
        {
          "id": "lfo2_sync",
          "name": "LFO2 Sync",
          "type": "switch",
          "default": "Off",
          "description": "Tempo synchronization"
        },
        {
          "id": "lfo2_shape",
          "name": "LFO2 Shape",
          "type": "select",
          "options": ["Sine", "Triangle", "Saw", "Square", "Random"],
          "default": "Sine",
          "description": "LFO waveform"
        },
        {
          "id": "lfo2_amount",
          "name": "LFO2 Amount",
          "range": { "min": -100, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Modulation depth"
        },
        {
          "id": "lfo2_destination",
          "name": "LFO2 Destination",
          "type": "select",
          "options": ["None", "Timbre", "Filter", "Prism", "Volume", "Pitch", "Pan"],
          "default": "None",
          "description": "Target parameter"
        },
        {
          "id": "lfo2_phase",
          "name": "LFO2 Phase",
          "range": { "min": 0, "max": 360, "unit": "degrees" },
          "default": 0,
          "description": "Start phase"
        },
        {
          "id": "lfo2_retrig",
          "name": "LFO2 Retrig",
          "type": "switch",
          "default": "Off",
          "description": "Restart on note"
        }
      ]
    },
    {
      "section": "Unison",
      "parameters": [
        {
          "id": "unison_voices",
          "name": "Unison Voices",
          "range": { "min": 1, "max": 9, "unit": "voices" },
          "default": 1,
          "description": "Voices per note"
        },
        {
          "id": "unison_detune",
          "name": "Unison Detune",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Pitch spread amount"
        },
        {
          "id": "unison_stereo",
          "name": "Unison Stereo",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Pan spread"
        },
        {
          "id": "unison_blend",
          "name": "Unison Blend",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 50,
          "description": "Wet/dry mix"
        }
      ]
    },
    {
      "section": "Resynthesis",
      "subSection": "Playback",
      "parameters": [
        {
          "id": "resyn_time",
          "name": "Time",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Position in sample"
        },
        {
          "id": "resyn_speed",
          "name": "Speed",
          "range": { "min": -200, "max": 200, "unit": "%" },
          "default": 100,
          "description": "Playback rate (independent of pitch)"
        },
        {
          "id": "resyn_formant",
          "name": "Formant",
          "range": { "min": -12, "max": 12, "unit": "semitones" },
          "default": 0,
          "description": "Formant shift without pitch change"
        }
      ]
    },
    {
      "section": "Resynthesis",
      "subSection": "Quality",
      "parameters": [
        {
          "id": "resyn_precision",
          "name": "Precision",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 50,
          "description": "Analysis accuracy"
        },
        {
          "id": "resyn_blending",
          "name": "Blending",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 50,
          "description": "Frame smoothing"
        },
        {
          "id": "resyn_window",
          "name": "Window",
          "type": "select",
          "options": ["Small", "Medium", "Large"],
          "default": "Medium",
          "description": "FFT window size"
        }
      ]
    },
    {
      "section": "Resynthesis",
      "subSection": "Phase",
      "parameters": [
        {
          "id": "resyn_randomize",
          "name": "Randomize",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Phase randomization"
        },
        {
          "id": "resyn_shift",
          "name": "Shift",
          "range": { "min": 0, "max": 360, "unit": "degrees" },
          "default": 0,
          "description": "Phase offset"
        },
        {
          "id": "resyn_keep",
          "name": "Keep",
          "type": "switch",
          "default": "On",
          "description": "Preserve original phase"
        }
      ]
    },
    {
      "section": "Global Effects",
      "parameters": [
        {
          "id": "chorus_depth",
          "name": "Chorus Depth",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Chorus modulation depth"
        },
        {
          "id": "chorus_rate",
          "name": "Chorus Rate",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 30,
          "description": "Chorus LFO speed"
        },
        {
          "id": "chorus_mix",
          "name": "Chorus Mix",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Chorus wet amount"
        },
        {
          "id": "delay_time",
          "name": "Delay Time",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 30,
          "description": "Echo delay time"
        },
        {
          "id": "delay_sync",
          "name": "Delay Sync",
          "type": "switch",
          "default": "Off",
          "description": "Tempo synchronization"
        },
        {
          "id": "delay_feedback",
          "name": "Delay Feedback",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 30,
          "description": "Echo repeats"
        },
        {
          "id": "delay_mix",
          "name": "Delay Mix",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Delay wet amount"
        },
        {
          "id": "reverb_size",
          "name": "Reverb Size",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 50,
          "description": "Reverb room size"
        },
        {
          "id": "reverb_damping",
          "name": "Reverb Damping",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 50,
          "description": "High frequency decay"
        },
        {
          "id": "reverb_mix",
          "name": "Reverb Mix",
          "range": { "min": 0, "max": 100, "unit": "%" },
          "default": 0,
          "description": "Reverb wet amount"
        }
      ]
    },
    {
      "section": "MISC",
      "parameters": [
        {
          "id": "pitch_bend_range",
          "name": "Pitch Bend Range",
          "range": { "min": 1, "max": 48, "unit": "semitones" },
          "default": 12,
          "description": "Pitch wheel range"
        },
        {
          "id": "legato",
          "name": "Legato",
          "type": "switch",
          "default": "Off",
          "description": "Retrigger behavior"
        },
        {
          "id": "voice_cut",
          "name": "Voice Cut",
          "type": "select",
          "options": ["Oldest", "Newest"],
          "default": "Oldest",
          "description": "Polyphony overflow behavior"
        }
      ]
    }
  ]
}

```

---

## FILE: 02-Data\presets\hiphop-production-presets.json

```json
{
  "pluginName": "Harmor",
  "presetType": "Hip-Hop Production Presets",
  "version": "1.0",
  "source": "[SRC: IL-MAN]",
  "presets": [
    {
      "name": "Trap 808",
      "genre": "Trap",
      "useCase": "Main bass, sub frequencies",
      "description": "Modern trap sub with punch and presence",
      "settings": {
        "engine": "A only",
        "subTimbre": {
          "level": 100,
          "shape": "Sine",
          "slope": 0,
          "width": 0
        },
        "mainTimbre": {
          "level": 35,
          "shape": "Saw",
          "slope": -30,
          "width": 0
        },
        "processors": {
          "prism": 0,
          "blur": 5,
          "pluck": 65,
          "strum": 0
        },
        "filter": {
          "curve": "Steep low-pass at 120Hz",
          "resonance": "Slight bump at 80Hz"
        },
        "envelope": {
          "attack": 0,
          "decay": 35,
          "sustain": 0,
          "release": 20
        },
        "unison": {
          "voices": 1,
          "detune": 0,
          "stereo": 0
        }
      },
      "tips": [
        "Tune to root note of track",
        "Sidechain to kick for pumping",
        "Distort slightly in mixer for edge"
      ]
    },
    {
      "name": "Boom Bap Bass",
      "genre": "Boom Bap",
      "useCase": "Warm vinyl-style bass",
      "description": "Classic warm bass for hip-hop",
      "settings": {
        "engine": "A",
        "subTimbre": {
          "level": 90,
          "shape": "Sine",
          "width": 10
        },
        "mainTimbre": {
          "level": 50,
          "shape": "Triangle",
          "slope": -20,
          "width": 15
        },
        "processors": {
          "prism": 10,
          "blur": 25,
          "pluck": 40,
          "strum": 20
        },
        "filter": {
          "curve": "Gentle low-pass at 3kHz",
          "description": "Warm roll-off"
        },
        "envelope": {
          "attack": 5,
          "decay": 45,
          "sustain": 60,
          "release": 35
        },
        "unison": {
          "voices": 2,
          "detune": 15,
          "stereo": 25
        },
        "effects": {
          "chorus": 15
        }
      },
      "tips": [
        "Add vinyl crackle on separate channel",
        "Use swing in step sequencer",
        "Keep it simple, repetitive"
      ]
    },
    {
      "name": "Drill Lead",
      "genre": "Drill",
      "useCase": "Dark sliding leads",
      "description": "Aggressive lead with slide/portamento",
      "settings": {
        "engineA": {
          "sub": 60,
          "main": 90,
          "shape": "Saw"
        },
        "engineB": {
          "sub": 30,
          "main": 70,
          "shape": "Saw",
          "prism": 30
        },
        "mix": 60,
        "processors": {
          "prism": 40,
          "blur": 15,
          "pluck": 20,
          "strum": 10
        },
        "filter": {
          "curve": "Low-pass with resonance at 2kHz"
        },
        "envelope": {
          "attack": 0,
          "decay": 25,
          "sustain": 70,
          "release": 20
        },
        "slide": 60,
        "unison": {
          "voices": 3,
          "detune": 25,
          "stereo": 40
        }
      },
      "tips": [
        "Enable Slide (portamento)",
        "Play overlapping notes for slides",
        "Add Gross Beat for stutter effects"
      ]
    },
    {
      "name": "Vocal Chop Pad",
      "genre": "Hip-Hop/R&B",
      "useCase": "Resynthesized vocal texture",
      "description": "Atmospheric vocal pad from sample",
      "settings": {
        "resynthesis": {
          "mode": "ADV",
          "speed": 50,
          "formant": -3,
          "precision": 70,
          "blending": 60
        },
        "processors": {
          "prism": 15,
          "blur": 45,
          "pluck": 0,
          "strum": 35
        },
        "filter": {
          "curve": "Band-pass 300Hz-6kHz"
        },
        "envelope": {
          "attack": 30,
          "decay": 0,
          "sustain": 100,
          "release": 50
        },
        "unison": {
          "voices": 6,
          "detune": 30,
          "stereo": 60
        },
        "effects": {
          "reverb": 45,
          "delay": {
            "time": "1/8 dotted",
            "mix": 25
          }
        }
      },
      "tips": [
        "Resynthesize vocal phrase",
        "Time-stretch to half speed",
        "Layer with original for clarity"
      ]
    },
    {
      "name": "R&B Keys",
      "genre": "R&B",
      "useCase": "Smooth keyboard sounds",
      "description": "Warm electric piano/keyboard emulation",
      "settings": {
        "engine": "A",
        "subTimbre": {
          "level": 40,
          "shape": "Triangle"
        },
        "mainTimbre": {
          "level": 85,
          "shape": "Saw",
          "slope": -25
        },
        "processors": {
          "prism": 5,
          "blur": 30,
          "pluck": 35,
          "strum": 25
        },
        "filter": {
          "curve": "Smile curve - boost lows and highs"
        },
        "envelope": {
          "attack": 8,
          "decay": 35,
          "sustain": 75,
          "release": 40
        },
        "unison": {
          "voices": 4,
          "detune": 20,
          "stereo": 45
        },
        "effects": {
          "chorus": 25,
          "reverb": 30
        }
      },
      "tips": [
        "Use 7th and 9th chords",
        "Add Fruity Delay 2 for slapback",
        "Automate filter for movement"
      ]
    },
    {
      "name": "Metro Boomin Style",
      "genre": "Trap",
      "useCase": "Dark cinematic bass",
      "description": "Dark, cinematic sub bass",
      "settings": {
        "engineA": {
          "sub": 100,
          "main": 30,
          "filter": "Steep low-pass 80Hz"
        },
        "engineB": {
          "sub": 0,
          "main": 60,
          "filter": "High-pass 2kHz",
          "prism": 20
        },
        "mix": 70,
        "processors": {
          "pluck": 50,
          "blur": 10,
          "strum": 0
        },
        "envelope": {
          "attack": 2,
          "decay": 40,
          "sustain": 0,
          "release": 25
        },
        "unison": {
          "voices": 1,
          "detune": 0,
          "stereo": 0
        }
      },
      "tips": [
        "A for sub, B for high click",
        "Heavy sidechain compression",
        "Distort B engine slightly"
      ]
    },
    {
      "name": "Phonk Cowbell",
      "genre": "Phonk",
      "useCase": "Metallic percussion",
      "description": "Synthesized cowbell/metallic percussion",
      "settings": {
        "engine": "A",
        "subTimbre": {
          "level": 20
        },
        "mainTimbre": {
          "level": 100,
          "shape": "Square",
          "slope": 0
        },
        "processors": {
          "prism": 60,
          "blur": 10,
          "pluck": 70,
          "strum": 15
        },
        "filter": {
          "curve": "Band-pass 1kHz-6kHz"
        },
        "envelope": {
          "attack": 0,
          "decay": 15,
          "sustain": 0,
          "release": 10
        },
        "unison": {
          "voices": 1
        }
      },
      "tips": [
        "Tune to B or F# for classic sound",
        "Heavy Prism creates metal character",
        "Fast Pluck for percussive decay"
      ]
    },
    {
      "name": "Lo-Fi Texture",
      "genre": "Lo-Fi Hip-Hop",
      "useCase": "Ambient background texture",
      "description": "Textural atmosphere for lo-fi beats",
      "settings": {
        "resynthesis": {
          "mode": "IMG",
          "source": "Noise or texture image"
        },
        "processors": {
          "prism": 20,
          "blur": 65,
          "pluck": 0,
          "strum": 40
        },
        "filter": {
          "curve": "Telephone band-pass"
        },
        "envelope": {
          "attack": 50,
          "decay": 0,
          "sustain": 100,
          "release": 80
        },
        "lfo": {
          "lfo1": {
            "destination": "Filter",
            "rate": "Very slow",
            "amount": 30
          }
        },
        "unison": {
          "voices": 7,
          "detune": 35,
          "stereo": 70
        },
        "effects": {
          "reverb": 55,
          "chorus": 20
        }
      },
      "tips": [
        "Import abstract image for sound",
        "High blur for dreamy quality",
        "Low-pass filter for vintage feel"
      ]
    }
  ]
}

```

---

## FILE: 02-Data\presets\resynthesis-templates.json

```json
{
  "pluginName": "Harmor",
  "presetType": "Resynthesis Templates",
  "version": "1.0",
  "source": "[SRC: IL-MAN]",
  "templates": [
    {
      "name": "Vocal Resynthesis - Clean",
      "category": "Vocal",
      "description": "Clean vocal resynthesis for manipulation",
      "resynthesisSettings": {
        "mode": "ADV",
        "playback": {
          "speed": 100,
          "formant": 0
        },
        "quality": {
          "precision": 70,
          "blending": 50,
          "window": "Medium"
        },
        "phase": {
          "randomize": 0,
          "shift": 0,
          "keep": true
        }
      },
      "postProcessing": {
        "blur": 30,
        "strum": 20,
        "pluck": 25,
        "prism": 0,
        "filter": "Gentle low-pass at 8kHz"
      },
      "useCases": [
        "Time-stretching vocals",
        "Pitch shifting without artifacts",
        "Vocal chopping",
        "Formant manipulation"
      ],
      "notes": "High precision captures vocal nuances, moderate blending for smoothness"
    },
    {
      "name": "Vocal Resynthesis - Robotic",
      "category": "Vocal",
      "description": "Synthetic vocal character",
      "resynthesisSettings": {
        "mode": "ADV",
        "playback": {
          "speed": 100,
          "formant": 0
        },
        "quality": {
          "precision": 85,
          "blending": 30,
          "window": "Medium"
        },
        "phase": {
          "randomize": 15,
          "shift": 0,
          "keep": true
        }
      },
      "postProcessing": {
        "blur": 20,
        "strum": 5,
        "pluck": 30,
        "prism": 35,
        "filter": "Band-pass 200Hz-5kHz"
      },
      "modulation": {
        "lfo": {
          "destination": "Formant",
          "amount": 6,
          "rate": "1/8 note"
        }
      },
      "useCases": [
        "Robot voice effect",
        "Vocoder alternative",
        "Sci-fi dialogue",
        "Character vocals"
      ],
      "notes": "High precision + low blending = more synthetic. Add Prism for artificial character"
    },
    {
      "name": "Drum Resynthesis - Transient Focus",
      "category": "Drum",
      "description": "Preserve drum transients in resynthesis",
      "resynthesisSettings": {
        "mode": "ADV",
        "playback": {
          "speed": 100
        },
        "quality": {
          "precision": 50,
          "blending": 25,
          "window": "Small"
        },
        "phase": {
          "randomize": 5,
          "shift": 0,
          "keep": true
        }
      },
      "postProcessing": {
        "blur": 10,
        "strum": 0,
        "pluck": 60,
        "prism": 10,
        "filter": "High-pass at 40Hz"
      },
      "useCases": [
        "Drum time-stretching",
        "Breakbeat manipulation",
        "Transient preservation",
        "Rhythmic resynthesis"
      ],
      "notes": "Small window preserves transients, low blending keeps definition"
    },
    {
      "name": "Drum Resynthesis - Ambient",
      "category": "Drum",
      "description": "Atmospheric treatment of drums",
      "resynthesisSettings": {
        "mode": "IMG",
        "editing": {
          "blur": 40,
          "smearHorizontal": true
        }
      },
      "postProcessing": {
        "blur": 50,
        "strum": 30,
        "pluck": 0,
        "prism": 25,
        "filter": "Low-pass at 6kHz"
      },
      "envelope": {
        "attack": 20,
        "decay": 0,
        "sustain": 100,
        "release": 70
      },
      "useCases": [
        "Drum pads",
        "Textural drums",
        "Ambient percussion",
        "Cinematic drums"
      ],
      "notes": "IMG mode allows visual blurring of drum transients"
    },
    {
      "name": "Time-Stretch - Half Speed",
      "category": "Time Manipulation",
      "description": "Clean half-speed playback",
      "resynthesisSettings": {
        "mode": "ADV",
        "playback": {
          "speed": 50,
          "formant": 0
        },
        "quality": {
          "precision": 60,
          "blending": 60,
          "window": "Medium"
        },
        "phase": {
          "randomize": 10,
          "keep": true
        }
      },
      "postProcessing": {
        "blur": 25,
        "strum": 15,
        "pluck": 0,
        "prism": 0
      },
      "useCases": [
        "Half-speed vocals",
        "Slowed drums",
        "Ambient stretching",
        "DJ Screw style"
      ],
      "notes": "Speed 50% = half time, same pitch. No artifacts."
    },
    {
      "name": "Time-Stretch - Double Speed",
      "category": "Time Manipulation",
      "description": "Clean double-speed playback",
      "resynthesisSettings": {
        "mode": "ADV",
        "playback": {
          "speed": 200,
          "formant": 0
        },
        "quality": {
          "precision": 65,
          "blending": 55,
          "window": "Medium"
        },
        "phase": {
          "randomize": 10,
          "keep": true
        }
      },
      "postProcessing": {
        "blur": 20,
        "strum": 10,
        "pluck": 0,
        "prism": 0
      },
      "useCases": [
        "Fast percussion",
        "Double-time feel",
        "Riser elements",
        "Accelerated effects"
      ],
      "notes": "Speed 200% = double time, same pitch"
    },
    {
      "name": "Freeze/Sustain",
      "category": "Time Manipulation",
      "description": "Infinite sustain at any point",
      "resynthesisSettings": {
        "mode": "ADV",
        "playback": {
          "speed": 0,
          "time": "Variable (find sweet spot)"
        },
        "quality": {
          "precision": 75,
          "blending": 70,
          "window": "Large"
        },
        "phase": {
          "randomize": 20,
          "keep": true
        }
      },
      "postProcessing": {
        "blur": 50,
        "strum": 35,
        "pluck": 0,
        "prism": 15,
        "filter": "Low-pass at 4kHz"
      },
      "envelope": {
        "attack": 30,
        "decay": 0,
        "sustain": 100,
        "release": 80
      },
      "useCases": [
        "Infinite pads",
        "Freeze effects",
        "Ambient textures",
        "Transition sustains"
      ],
      "notes": "Speed 0% = freeze at Time position. Large window for smooth sustain."
    },
    {
      "name": "Image Synthesis - Abstract",
      "category": "Image",
      "description": "From abstract visual patterns",
      "imageSettings": {
        "source": "PNG/BMP",
        "type": "Abstract/noise patterns",
        "preProcessing": {
          "blur": 30,
          "contrast": "Medium"
        }
      },
      "resynthesisSettings": {
        "mode": "IMG"
      },
      "postProcessing": {
        "blur": 40,
        "strum": 25,
        "pluck": 0,
        "prism": 20,
        "filter": "Variable based on image"
      },
      "useCases": [
        "Unique textures",
        "Sound design",
        "Experimental",
        "Cinematic atmospheres"
      ],
      "notes": "Start with simple gradients, add complexity gradually"
    },
    {
      "name": "Image Synthesis - Geometric",
      "category": "Image",
      "description": "From geometric shapes",
      "imageSettings": {
        "source": "PNG/BMP",
        "type": "Lines, shapes, patterns",
        "examples": [
          "Horizontal lines = tones",
          "Diagonal = sweeps",
          "Circles = rhythmic pulses"
        ]
      },
      "resynthesisSettings": {
        "mode": "IMG"
      },
      "postProcessing": {
        "blur": 15,
        "strum": 10,
        "pluck": 40,
        "prism": 10,
        "filter": "Based on frequency content"
      },
      "useCases": [
        "Synthesized percussion",
        "Tonal risers",
        "Rhythmic patterns",
        "Melodic sequences"
      ],
      "notes": "Each geometric shape produces predictable sound types"
    },
    {
      "name": "Formant Shift - Up",
      "category": "Formant",
      "description": "Brighten character without pitch change",
      "resynthesisSettings": {
        "mode": "ADV",
        "playback": {
          "speed": 100,
          "formant": 6
        },
        "quality": {
          "precision": 70,
          "blending": 50
        }
      },
      "postProcessing": {
        "blur": 25,
        "prism": 10
      },
      "useCases": [
        "Vocal brightening",
        "Character change",
        "Telephone effect",
        "Smaller sounding"
      ],
      "notes": "Formant +6 = brighter, smaller character. Good for vocals."
    },
    {
      "name": "Formant Shift - Down",
      "category": "Formant",
      "description": "Darken character without pitch change",
      "resynthesisSettings": {
        "mode": "ADV",
        "playback": {
          "speed": 100,
          "formant": -6
        },
        "quality": {
          "precision": 70,
          "blending": 50
        }
      },
      "postProcessing": {
        "blur": 30,
        "prism": 5
      },
      "useCases": [
        "Vocal deepening",
        "Monster voices",
        "Larger sounding",
        "Darker character"
      ],
      "notes": "Formant -6 = darker, larger character. Use for effect."
    }
  ]
}

```

---

## FILE: 02-Data\presets\sound-archetypes.json

```json
{
  "pluginName": "Harmor",
  "presetType": "Sound Archetypes",
  "version": "1.0",
  "source": "[SRC: IL-MAN]",
  "archetypes": [
    {
      "name": "Sub Bass - 808 Style",
      "category": "Bass",
      "description": "Classic 808 sub bass with additive precision",
      "parameters": {
        "engine": "A",
        "subLevel": 100,
        "mainLevel": 40,
        "subShape": "Sine",
        "mainShape": "Saw",
        "pluckAmount": 60,
        "pluckShape": "Exponential",
        "pluckTilt": "Bass",
        "prismAmount": 0,
        "blurAmount": 10,
        "strumAmount": 0,
        "filter": {
          "type": "lowPass",
          "cutoff": "100Hz"
        },
        "envelope": {
          "attack": 0,
          "decay": 40,
          "sustain": 0,
          "release": 25
        },
        "unison": {
          "voices": 1,
          "detune": 0,
          "stereo": 0
        }
      },
      "notes": "Focus on Sub timbre with fast Pluck decay for classic 808 boom-to-click"
    },
    {
      "name": "Growl Bass",
      "category": "Bass",
      "description": "Dubstep/trap growl with Prism harmonic warping",
      "parameters": {
        "engine": "A",
        "subLevel": 80,
        "mainLevel": 90,
        "subShape": "Saw",
        "mainShape": "Saw",
        "pluckAmount": 30,
        "prismAmount": 70,
        "prismDepth": "Full",
        "blurAmount": 20,
        "strumAmount": 10,
        "filter": {
          "type": "custom",
          "curve": "Resonant peak at 1kHz"
        },
        "envelope": {
          "attack": 5,
          "decay": 30,
          "sustain": 80,
          "release": 20
        },
        "lfo": {
          "destination": "Prism",
          "amount": 40,
          "rate": "1/8 note",
          "shape": "Sine"
        },
        "unison": {
          "voices": 3,
          "detune": 20,
          "stereo": 30
        }
      },
      "notes": "Heavy Prism with LFO modulation creates classic growl movement"
    },
    {
      "name": "Pluck Lead",
      "category": "Lead",
      "description": "Articulate plucked lead for melodic lines",
      "parameters": {
        "engine": "A",
        "subLevel": 60,
        "mainLevel": 85,
        "subShape": "Triangle",
        "mainShape": "Saw",
        "pluckAmount": 75,
        "pluckShape": "Exponential",
        "pluckTilt": "Balanced",
        "prismAmount": 15,
        "blurAmount": 5,
        "strumAmount": 10,
        "filter": {
          "type": "lowPass",
          "resonance": "moderate"
        },
        "envelope": {
          "attack": 0,
          "decay": 25,
          "sustain": 0,
          "release": 15
        },
        "unison": {
          "voices": 2,
          "detune": 15,
          "stereo": 20
        }
      },
      "notes": "High Pluck for fast decay, good for trap/hip-hop leads"
    },
    {
      "name": "Atmospheric Pad",
      "category": "Pad",
      "description": "Ethereal evolving pad texture",
      "parameters": {
        "engine": "A",
        "subLevel": 70,
        "mainLevel": 70,
        "subShape": "Sine",
        "mainShape": "Triangle",
        "pluckAmount": 0,
        "prismAmount": 25,
        "blurAmount": 60,
        "strumAmount": 40,
        "filter": {
          "type": "lowPass",
          "cutoff": "gentle"
        },
        "envelope": {
          "attack": 40,
          "decay": 0,
          "sustain": 100,
          "release": 60
        },
        "lfo": {
          "lfo1": {
            "destination": "Filter",
            "amount": 30,
            "rate": "Slow"
          },
          "lfo2": {
            "destination": "Prism",
            "amount": 20,
            "rate": "Very slow"
          }
        },
        "unison": {
          "voices": 6,
          "detune": 35,
          "stereo": 60
        },
        "effects": {
          "reverb": 40,
          "chorus": 30
        }
      },
      "notes": "High Blur and Strum create dense texture, long envelope for pad sustain"
    },
    {
      "name": "Metallic Lead",
      "category": "Lead",
      "description": "Bell-like metallic character for unique leads",
      "parameters": {
        "engine": "A",
        "subLevel": 40,
        "mainLevel": 100,
        "subShape": "Sine",
        "mainShape": "Saw",
        "pluckAmount": 40,
        "prismAmount": 50,
        "prismDepth": "Full",
        "blurAmount": 20,
        "strumAmount": 5,
        "filter": {
          "type": "highPass",
          "cutoff": "200Hz"
        },
        "envelope": {
          "attack": 5,
          "decay": 35,
          "sustain": 60,
          "release": 25
        },
        "unison": {
          "voices": 5,
          "detune": 25,
          "stereo": 50
        }
      },
      "notes": "Prism creates inharmonic overtones for metallic character"
    },
    {
      "name": "Robotic Vocal",
      "category": "Vocal",
      "description": "Synthetic vocal texture from resynthesis",
      "parameters": {
        "engine": "A",
        "resynthesis": true,
        "resynSettings": {
          "precision": 80,
          "blending": 40,
          "formant": 0,
          "randomize": 0
        },
        "pluckAmount": 40,
        "prismAmount": 20,
        "blurAmount": 30,
        "strumAmount": 25,
        "filter": {
          "type": "bandPass",
          "range": "200Hz-5kHz"
        },
        "envelope": {
          "attack": 10,
          "decay": 30,
          "sustain": 70,
          "release": 30
        },
        "lfo": {
          "destination": "Formant",
          "amount": 6,
          "rate": "1/4 note"
        }
      },
      "notes": "Resynthesize vocal, add Prism for synthetic character"
    },
    {
      "name": "Cinematic Riser",
      "category": "FX",
      "description": "Building riser effect for transitions",
      "parameters": {
        "engine": "A",
        "subLevel": 30,
        "mainLevel": 90,
        "subShape": "Sine",
        "mainShape": "Saw",
        "pluckAmount": 0,
        "prismAmount": 0,
        "blurAmount": 40,
        "strumAmount": 30,
        "filter": {
          "type": "lowPass",
          "initial": "500Hz",
          "target": "10kHz"
        },
        "envelope": {
          "attack": 100,
          "decay": 0,
          "sustain": 100,
          "release": 20
        },
        "eg1": {
          "destination": "Filter",
          "amount": 100,
          "attack": 80,
          "decay": 0,
          "sustain": 0
        },
        "unison": {
          "voices": 7,
          "detune": 40,
          "stereo": 70
        }
      },
      "notes": "EG1 opens filter over time creating rise effect"
    },
    {
      "name": "Drum Kick",
      "category": "Drum",
      "description": "Synthesized kick drum",
      "parameters": {
        "engine": "A",
        "subLevel": 100,
        "mainLevel": 60,
        "subShape": "Sine",
        "mainShape": "Saw",
        "subSlope": -20,
        "pluckAmount": 80,
        "pluckShape": "Exponential",
        "pluckTilt": "Bass",
        "prismAmount": 0,
        "blurAmount": 0,
        "strumAmount": 0,
        "pitch": {
          "initial": "High",
          "decay": "To fundamental"
        },
        "envelope": {
          "attack": 0,
          "decay": 20,
          "sustain": 0,
          "release": 10
        },
        "unison": {
          "voices": 1,
          "detune": 0,
          "stereo": 0
        }
      },
      "notes": "Pitch envelope from high to low with fast Pluck decay"
    },
    {
      "name": "Wavetable Emulator",
      "category": "Lead",
      "description": "Wavetable-style morphing sound",
      "parameters": {
        "engineA": {
          "subLevel": 80,
          "mainLevel": 80,
          "timbre": "Saw-like"
        },
        "engineB": {
          "subLevel": 80,
          "mainLevel": 80,
          "timbre": "Square-like"
        },
        "mix": "Automated 0-100%",
        "pluckAmount": 20,
        "prismAmount": 10,
        "blurAmount": 15,
        "strumAmount": 10,
        "filter": {
          "type": "lowPass"
        },
        "envelope": {
          "attack": 5,
          "decay": 30,
          "sustain": 80,
          "release": 30
        },
        "unison": {
          "voices": 4,
          "detune": 20,
          "stereo": 40
        }
      },
      "notes": "A and B with different timbres, automate Mix for wavetable morphing"
    },
    {
      "name": "Sci-Fi Texture",
      "category": "FX",
      "description": "Futuristic evolving texture",
      "parameters": {
        "engine": "A",
        "subLevel": 50,
        "mainLevel": 100,
        "pluckAmount": 10,
        "prismAmount": 60,
        "blurAmount": 50,
        "strumAmount": 45,
        "filter": {
          "type": "custom",
          "description": "Multiple peaks"
        },
        "envelope": {
          "attack": 20,
          "decay": 0,
          "sustain": 100,
          "release": 80
        },
        "lfo": {
          "lfo1": {
            "destination": "Prism",
            "amount": 60,
            "rate": "Slow"
          },
          "lfo2": {
            "destination": "Filter",
            "amount": 40,
            "rate": "Medium"
          }
        },
        "unison": {
          "voices": 8,
          "detune": 50,
          "stereo": 80
        },
        "effects": {
          "reverb": 50,
          "delay": 30
        }
      },
      "notes": "Heavy Prism modulation creates sci-fi character"
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Harmor)

## 1. The "Infinite" Vocal Lead
- **Rule:** Vocals shouldn't loop predictably.
- **Application:** Resynthesize a vocal. Set **Time** to a slow speed (5-10%) and enable **Blur**. This creates a "singing cloud" that never feels like a repeated sample (Spacey). [SRC: REPUTABLE]

## 2. Formant Discipline
- **Rule:** High-pitch doesn't mean "Chipmunk."
- **Application:** When pitching a vocal up one octave, move the **Formant** slider down by the same amount. This keeps the "throat size" of the vocal consistent, making it sound like a high-pitched human rather than a cartoon.

## 3. Sub-Bass Fundamental
- **Rule:** Harmor's low-end is surgically precise.
- **Application:** In the **Timbre** editor, ensure the 1st harmonic is at 100% and use the **Sub** knob to add a second octave. This creates the most powerful sub-bass foundations available in FL Studio (Moody).

## 4. Phase-Safe Unison
- **Rule:** Wide pads must work in Mono.
- **Check:** Harmor's unison is very wide. Always check your mix in Mono. If the "Blur" disappears, reduce the **Unison Detune** or the **Phase** randomization in the ADV tab.

## 5. Gain Staging (The Clipping Rule)
- **Rule:** Harmor can easily exceed 0dB internal.
- **Application:** Additive synthesis sums 516 sine waves. Always check the **Master Volume** slider in Harmor to ensure you aren't clipping the mixer input before your FX chain. [SRC: IL-MAN]
```

---

## FILE: 02-Data\rules\sound-design-rules.json

```json
{
  "pluginName": "Harmor",
  "rulesType": "Sound Design Rules",
  "version": "1.0",
  "source": "[SRC: IL-MAN]",
  "rules": [
    {
      "name": "Sub Bass Design",
      "context": "808-style sub bass",
      "rules": {
        "timbre": {
          "subLevel": {
            "value": 90,
            "min": 80,
            "max": 100,
            "reason": "Sub timbre provides fundamental frequency"
          },
          "mainLevel": {
            "value": 40,
            "min": 20,
            "max": 60,
            "reason": "Some harmonics for character, but not too many"
          },
          "subShape": {
            "value": "Sine",
            "options": ["Sine", "Triangle"],
            "reason": "Pure fundamentals for clean sub"
          }
        },
        "processors": {
          "prism": {
            "value": 0,
            "max": 10,
            "reason": "Keep harmonic - inharmonic ruins sub clarity"
          },
          "pluck": {
            "value": 60,
            "min": 40,
            "max": 80,
            "reason": "Fast decay for 808-style punch"
          },
          "blur": {
            "value": 10,
            "max": 20,
            "reason": "Slight thickening without mud"
          },
          "strum": {
            "value": 0,
            "max": 10,
            "reason": "Keep focused for mono compatibility"
          }
        },
        "filter": {
          "type": "lowPass",
          "cutoff": {
            "value": 120,
            "unit": "Hz",
            "range": "80-150Hz"
          },
          "reason": "Remove highs, focus on sub frequencies"
        },
        "envelope": {
          "attack": 0,
          "decay": {
            "value": 40,
            "range": "30-50"
          },
          "sustain": 0,
          "release": {
            "value": 25,
            "range": "20-30"
          }
        },
        "unison": {
          "voices": 1,
          "reason": "Sub must be mono"
        }
      }
    },
    {
      "name": "Growl Bass Design",
      "context": "Dubstep/trap growl bass",
      "rules": {
        "timbre": {
          "subLevel": {
            "value": 80,
            "min": 60,
            "max": 90
          },
          "mainLevel": {
            "value": 90,
            "min": 80,
            "max": 100
          },
          "shapes": ["Saw", "Complex"]
        },
        "processors": {
          "prism": {
            "value": 70,
            "min": 50,
            "max": 85,
            "depth": "Full",
            "reason": "Prism creates inharmonic growl character"
          },
          "blur": {
            "value": 20,
            "range": "15-30",
            "reason": "Slight density without losing definition"
          },
          "pluck": {
            "value": 30,
            "range": "20-40",
            "reason": "Moderate decay control"
          },
          "strum": {
            "value": 10,
            "max": 20
          }
        },
        "modulation": {
          "lfoToPrism": {
            "amount": {
              "value": 40,
              "min": 30,
              "max": 60
            },
            "rate": "1/8 note",
            "reason": "Classic wobble effect"
          }
        },
        "filter": {
          "type": "custom",
          "resonance": "Present at 1-2kHz"
        },
        "unison": {
          "voices": {
            "value": 3,
            "range": "2-4"
          },
          "stereo": {
            "value": 40,
            "max": 50
          }
        }
      }
    },
    {
      "name": "Vocal Resynthesis",
      "context": "Resynthesized vocal manipulation",
      "rules": {
        "resynthesis": {
          "mode": "ADV",
          "precision": {
            "value": 70,
            "min": 60,
            "max": 85,
            "reason": "High precision captures vocal nuances"
          },
          "blending": {
            "value": 50,
            "range": "40-60",
            "reason": "Balance between detail and smoothness"
          },
          "window": "Medium",
          "phaseRandomize": {
            "value": 15,
            "max": 25,
            "reason": "Slight randomization naturalizes synthetic sound"
          }
        },
        "processors": {
          "blur": {
            "value": 30,
            "range": "20-40",
            "reason": "Doubling effect without full unison CPU cost"
          },
          "strum": {
            "value": 25,
            "range": "15-35",
            "reason": "Natural thickening"
          },
          "pluck": {
            "value": 30,
            "range": "20-40",
            "reason": "Natural decay shaping"
          },
          "prism": {
            "value": 15,
            "max": 30,
            "reason": "Subtle character, not full robot"
          }
        },
        "filter": {
          "type": "custom",
          "curve": "Gentle roll-off above 8kHz"
        }
      }
    },
    {
      "name": "Pad Design",
      "context": "Atmospheric sustaining pads",
      "rules": {
        "timbre": {
          "subLevel": {
            "value": 70,
            "range": "60-80"
          },
          "mainLevel": {
            "value": 70,
            "range": "60-80"
          },
          "balance": "Equal for full spectrum"
        },
        "processors": {
          "prism": {
            "value": 25,
            "range": "15-35",
            "reason": "Subtle movement without chaos"
          },
          "blur": {
            "value": 60,
            "min": 50,
            "max": 75,
            "reason": "High blur creates density"
          },
          "pluck": {
            "value": 0,
            "max": 10,
            "reason": "Pads need sustain, not decay"
          },
          "strum": {
            "value": 40,
            "range": "30-50",
            "reason": "Ethereal detuning effect"
          }
        },
        "envelope": {
          "attack": {
            "value": 40,
            "min": 30,
            "reason": "Slow attack for pad swells"
          },
          "decay": 0,
          "sustain": 100,
          "release": {
            "value": 60,
            "min": 50
          }
        },
        "modulation": {
          "lfos": {
            "count": 2,
            "lfo1": {
              "destination": "Filter",
              "rate": "Slow",
              "amount": 30
            },
            "lfo2": {
              "destination": "Prism",
              "rate": "Very slow",
              "amount": 20
            }
          }
        },
        "unison": {
          "voices": {
            "value": 6,
            "range": "5-8"
          },
          "stereo": {
            "value": 60,
            "min": 50
          },
          "detune": {
            "value": 35,
            "range": "25-45"
          }
        },
        "effects": {
          "reverb": {
            "value": 40,
            "min": 30
          },
          "chorus": {
            "value": 25,
            "range": "20-30"
          }
        }
      }
    },
    {
      "name": "Lead Design",
      "context": "Melodic leads",
      "rules": {
        "timbre": {
          "mainLevel": {
            "value": 90,
            "min": 80,
            "reason": "Presence and cut"
          },
          "subLevel": {
            "value": 60,
            "range": "50-70"
          },
          "mainShape": "Saw or bright",
          "subShape": "Triangle or sine"
        },
        "processors": {
          "prism": {
            "value": 15,
            "max": 30,
            "reason": "Character without overpowering"
          },
          "blur": {
            "value": 15,
            "max": 25
          },
          "pluck": {
            "value": 35,
            "range": "25-50"
          },
          "strum": {
            "value": 15,
            "range": "10-25"
          }
        },
        "envelope": {
          "attack": {
            "value": 5,
            "range": "0-10",
            "reason": "Fast but not instant (more natural)"
          },
          "decay": {
            "value": 30,
            "range": "20-40"
          },
          "sustain": {
            "value": 80,
            "min": 70
          },
          "release": {
            "value": 25,
            "range": "20-35"
          }
        },
        "unison": {
          "voices": {
            "value": 4,
            "range": "3-5"
          },
          "stereo": {
            "value": 45,
            "range": "30-60"
          },
          "detune": {
            "value": 20,
            "range": "15-30"
          }
        }
      }
    },
    {
      "name": "A/B Layering",
      "context": "Using both engines together",
      "rules": {
        "strategy": "Frequency splitting or contrast",
        "frequencySplit": {
          "engineA": {
            "role": "Sub",
            "subLevel": 100,
            "mainLevel": 0,
            "filter": "Low-pass at 200Hz"
          },
          "engineB": {
            "role": "Presence",
            "subLevel": 0,
            "mainLevel": 100,
            "filter": "High-pass at 1kHz"
          },
          "mix": 50
        },
        "contrast": {
          "engineA": {
            "description": "Clean, simple timbre"
          },
          "engineB": {
            "description": "Processed (Prism, effects)"
          },
          "mix": {
            "default": 70,
            "reason": "Mostly clean with some character"
          }
        },
        "phaseConsiderations": {
          "issue": "Phase cancellation when similar",
          "solution": "Shift phase of one engine or different filters"
        }
      }
    },
    {
      "name": "Image Synthesis",
      "context": "Creating sounds from images",
      "rules": {
        "imagePreparation": {
          "format": "PNG or BMP",
          "dimensions": {
            "powerOfTwo": true,
            "recommended": "512x512 or 1024x256"
          },
          "color": {
            "mode": "Grayscale or RGB",
            "interpretation": "Brightness = amplitude"
          }
        },
        "drawing": {
          "horizontalLines": "Create sustained tones",
          "verticalLines": "Create percussive attacks",
          "gradients": "Create frequency sweeps",
          "noise": "Create textured/ambient sounds"
        },
        "postProcessing": {
          "blur": {
            "value": 40,
            "reason": "Smooth harsh digital artifacts"
          },
          "prism": {
            "value": 20,
            "reason": "Add character to static images"
          },
          "strum": {
            "value": 25,
            "reason": "Naturalize synthetic sources"
          }
        }
      }
    },
    {
      "name": "CPU Optimization",
      "context": "Managing Harmor's CPU usage",
      "rules": {
        "unison": {
          "rule": "Reduce voices",
          "recommendation": "Use 3-4 instead of 9",
          "impact": "Significant CPU savings"
        },
        "engines": {
          "rule": "Use single engine when possible",
          "mixSetting": "0% or 100% (not blended)",
          "impact": "Half the CPU usage"
        },
        "effects": {
          "rule": "Disable unused processors",
          "processors": ["Prism", "Blur"],
          "reason": "Even at 0%, some CPU used"
        },
        "rendering": {
          "freeze": "Freeze channel for playback",
          "bounce": "Render to audio for final mix",
          "presets": "Resynthesis data compact, no samples needed"
        },
        "polyphony": {
          "rule": "Reduce max voices",
          "recommendation": "16 instead of 32-64",
          "impact": "Less voice allocation overhead"
        }
      }
    }
  ]
}

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Lossless Vocal Time-Stretching (Harmor)

## The Concept
Slowing down a vocal phrase to extreme lengths (e.g. 400% slower) without the "grainy" artifacts or "metallic" ringing found in standard samplers.

## Step-by-Step Setup
1.  Initialize **Harmor**.
2.  Drag a 4-bar vocal acapella directly onto the **Main Interface**.
3.  **The Play:** Hold a MIDI note (C5). The vocal will play at its original speed.
4.  **The Stretch:** Turn the **SPEED** knob (top left) down to `10%`.
5.  **The Result:** The vocal is now playing 10x slower, but it sounds smooth and high-fidelity. 
6.  **Vibe Polish:** Increase the **BLUR** fader to `20%` to add a dreamy, smeared quality to the vowel sounds.

## Vibe Check
- **Spacey/Moody:** Perfect for "Slowed & Reverbed" remixes or creating ethereal vocal atmospheres for R&B.

## Variation
- **Frozen Word:** Set the **SPEED** to `0%`. Now you can use the **TIME** knob to manually move through the vocal and "park" it on a specific vowel, creating an infinite singing pad. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\00_Lossless_Time_Stretching.md

```markdown
# Goal: Lossless Vocal Time-Stretching (Harmor)

## Routing Context
*   **Source:** A 4-bar Vocal Loop.
*   **Target:** A remix where the tempo is drastically different.

## Step-by-Step Setup
1.  Initialize **Harmor**.
2.  Go to the **IMG** tab.
3.  Drag your vocal sample from the Browser into the large empty window.
4.  **Crucial Settings:**
    *   Set **Speed** to 0%. (The sample will stop playing).
    *   Right-click the **Time** knob -> **Create Automation Clip**.
5.  In the Playlist, draw a line from bottom-left to top-right over the length of your vocal.

## Result
*   The vocal will play back at whatever speed you draw the automation. You can make it 10x slower or speed it up 5x, and it will remain crystal clear without any "robotic" sampling artifacts. [SRC: IL-MAN]

## Variations
1.  **Frozen Vowel:** Draw a horizontal line in the automation. The vocal will "freeze" on that specific vowel indefinitely.
2.  **Backwards:** Draw the line from top-right to bottom-left to play the vocal in reverse spectral order.

## Pitfalls
*   **Missing Highs:** If it sounds dull, check the **Frequency Mapping** slider in the IMG tab. Ensure it's covering the full range.

```

---

## FILE: 03-Workflows\by-goal\01_Prism_Growl_Lead.md

```markdown
# Workflow: The "Prism Growl" Lead (Harmor)

## The Concept
Create those aggressive, "Transformer-style" metallic leads found in modern electronic hip-hop and dubstep.

## Setup
*   **Target:** Melodic Lead.
*   **Synthesis:** Pure Additive (Timbre).

## Recipe
1.  **Timbre:** Select a "Saw" wave.
2.  **Unison:** Set to 4 voices, "Classic" mode.
3.  **Prism Section (Critical):**
    *   Set **Prism mode** to "Warp."
    *   Turn the **Prism knob** to 20%.
4.  **Automation:** 
    *   Right-click **Prism** -> **Link to controller** -> **Fruity Peak Controller (LFO)**.
    *   Link the **Filter Cutoff** to the same LFO but inverted.

## What to Listen For
*   The sound should "growl" and "snarl" as the prism shifts the harmonics. It creates a metallic texture that feels like the synth is talking.

## Vibe mapping
*   **Upbeat:** High LFO speed for high-energy aggression.
*   **Moody:** Slow LFO speed + Low Filter Cutoff for a "breathing" monster sound.

## Pitfalls
*   **Aliasing:** Too much Prism can cause harsh digital noise. Use the **ADV** tab to ensure "High Quality" rendering is enabled. [SRC: REPUTABLE]

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Harmor

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Harmor.
- **Key Info:** 516 partial additive engine, Audio/Image resynthesis logic, Prism/Blur/Pluck module signal flow, and A/B engine layering.

## Source ID: [SRC: REPUTABLE]
- **Source:** "The Harmor Masterclass" (SeamlessR).
- **Key Info:** Fundamentals of additive synthesis, using resynthesis for sound design, the importance of formant shifting for vocal realism, and creating "FM-style" sounds using additive math.

## Genre Style Board: Harmor

| Vibe | Key Module | Use Case |
| :--- | :--- | :--- |
| **Spacey** | Blur + Time @ 5% | Vocal Cloud Pads |
| **Psychedelic**| Prism Automation | Warped 808 Growls |
| **Moody** | Filter Graph Drawing | Dark Submerged Bass |
| **Upbeat** | Strum + Max Unison | Aggressive Leads |
| **Melodic** | Resynthesis + Formant | High-end Vocal Synths |
| **Jazzy** | A/B Layering | Multi-timbral Keys |
```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Harmor (Hip-Hop/R&B)

## Vibe 1: The "Frozen" Vocal Atmosphere
*   **Sound:** Haunting, clear, vowel-focused.
*   **Key Move:** Resynthesis + Speed 0% + Automated Time knob + 50% Blur.

## Vibe 2: The "Heroic" Analog-Style Lead
*   **Sound:** Unstable, wide, heroic.
*   **Key Move:** 8-voice Unison + Harmonic Phaser + Subtle Prism + Low-Pass Filter.

## Vibe 3: The "Resynthesized" Drum Loop
*   **Sound:** Glitchy, metallic, perfectly timed.
*   **Key Move:** Drum loop IMG import + Pluck decay (to shorten hits) + Time stretching.

## Vibe 4: The "Abstract" Synth Texture
*   **Sound:** Organic, "visual," shifting.
*   **Key Move:** Image Import (Abstract PNG) + Frequency warping + slow Filter LFO.

## Vibe 5: The "Modern R&B" Lush Cloud
*   **Sound:** Shimmering, wide, professional density.
*   **Key Move:** Dual Engine (A=Pad, B=Noise) + Max Unison + Maximus Compression.

```

---

