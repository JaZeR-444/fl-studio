# Ogun - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Ogun - Metallic Additive Synthesizer

`\`\`
 ██████╗  ██████╗ ██╗   ██╗███╗   ██╗
██╔═══██╗██╔════╝ ██║   ██║████╗  ██║
██║   ██║██║  ███╗██║   ██║██╔██╗ ██║
██║   ██║██║   ██║██║   ██║██║╚██╗██║
╚██████╔╝╚██████╔╝╚██████╔╝██║ ╚████║
 ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝
`\`\`

**Plugin Type:** Additive Synthesizer
**Category:** Generator / Metallic / Sound Design
**Official Manual:** [Image-Line Ogun Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Ogun.htm)

---

## 🎯 What is Ogun?

Ogun is a specialized additive synthesizer capable of generating a massive number of harmonics—up to **32,767**. It is the engine behind "Autogun" and is famous for creating rich, shimmering, and complex metallic timbres (bells, gongs, pads, industrial textures). Its core power lies in its "Harmonic Mapping" and "Timbre Impulse" functions, allowing for explicit control over the spectral distribution of sine-waves.

**Key Capabilities:**
- **Massive Additive Engine:** Stacks up to 32,767 sine-wave harmonics.
- **Harmonic Mapping:** Draw custom spectral EQ curves to define the timbre.
- **Timbre Impulse EQ:** Specific harmonic curves for the note's attack (Impulse).
- **WilldoEnGin:** Built-in randomizer for instant patch inspiration.
- **Master Pitch Tools:** Coarse and Fine sliders optimized for tuning complex inharmonic sounds.
- **Integrated FX:** High-quality Chorus, Delay, Reverb, and 3-band EQ.
- **Autogun Integration:** Direct preset compatibility with over 4 billion Autogun sounds.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **harmonic-mapping-basics.md**
3. Create **parameter-cheat-sheet.md**
4. Paste a preset number from Autogun into Ogun to see the underlying architecture.

### For Sound Designers:
1. Study **metallic-percussion-synthesis.md**
2. Review **impulse-eq-for-realistic-attacks.md**
3. Learn **shimmering-spectral-pads.md**

### For Experimentalists:
1. Study **harmonic-randomization-tricks.md**
2. Review **inharmonic-tuning-strategies.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Timbre:** The main harmonic mapping area.
  - **Impulse:** Attack-specific spectral shaping.
  - **Master Level/Pitch:** Output controls.
  - **X-Y Modulation:** Integrated articulation pads.
  - **Effects:** Reverb, Delay, Chorus settings.

- [ ] **ogun-vs-autogun.md**
  - Why Autogun is the "Player" and Ogun is the "Editor."
  - How to transfer preset numbers.

#### 02-Data/parameters/
- [ ] **ogun-harmonic-specs.json**
  `\`\`json
  {
    "plugin_name": "Ogun",
    "max_harmonics": 32767,
    "effects": ["Chorus", "Delay", "Reverb", "EQ"],
    "engine": "Additive"
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-metallic-bells.md**
  - Selecting an inharmonic mapping shape.
  - Using the Impulse EQ to add a sharp, high-frequency "clink" at the start.
  - Adding Chorus for thickness.

- [ ] **industrial-pad-design.md**
  - Using low harmonic density with high detune.
  - Automating the X-Y pad for spectral movement.

- [ ] **tuning-inharmonic-patches.md**
  - Using Master Coarse/Fine sliders to match patch fundamental to song key.

#### 03-Workflows/by-context/
- [ ] **horror-game-atmospheres.md**
- [ ] **retro-synth-bell-clones.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **the-math-of-32k-harmonics.md**
  - Why Ogun uses so many harmonics and how it maintains CPU efficiency.
- [ ] **randomization-logic.md**
  - Understanding the WilldoEnGin algorithm.

---

## 🔬 Research Framework

### Phase 1: Harmonic Sculpting (Week 1)
**Goal:** The Timbre Tab

**Tasks:**
1. Draw a simple diagonal line in the Timbre mapping
2. Observe how the harmonic "stack" changes
3. Practice using the "Pencil" and "Curve" tools in the mapping window
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I reset the mapping to a single fundamental?
- What does the "Smooth" knob in the modulation section do?

### Phase 2: Impulse Response (Week 2)
**Goal:** The Attack

**Tasks:**
1. Design a bell sound without the Impulse tab
2. Enable the Impulse tab and add high-frequency energy
3. Hear the difference in realism
4. Create impulse-eq-for-realistic-attacks.md

---

## 📊 Plugin Specifications to Document

### Engine
- Harmonic Count (32,767)
- Modulation Matrix Depth

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why does my sound have no bass? (Check the harmonic mapping; the fundamental might be muted).
2. How do I load an Autogun sound? (Enter the preset number in the top right box).

---

## 🔗 Cross-Reference with Other Plugins

Ogun is often used with:
- **Autogun** (Massive preset library)
- **Fruity Delay 3** (Enhancing the metallic shimmer)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Ogun/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── ogun-vs-autogun.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── ogun-harmonic-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-metallic-bells.md
│   │   └── tuning-inharmonic-patches.md
│
└── 04-Reference/
    └── the-math-of-32k-harmonics.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Ogun Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Ogun.htm)
- [Ogun Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Ogun_tutorials.htm)
- [Ogun Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+ogun+tutorial)

### Community Resources
- [Ogun Subreddit](https://www.reddit.com/r/FL_Studio/search?q=ogun&restrict_sr=1)
- [Ogun User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Ogun Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Additive Synthesis Fundamentals" - Understanding harmonic stacking
- "Bell Synthesis Techniques" - Creating metallic and inharmonic sounds
- "Spectral Design Principles" - Drawing custom harmonic curves

### Advanced Techniques
- **Harmonic Mapping:** Mastering the visual harmonic editor
- **Impulse EQ:** Understanding attack-specific spectral shaping
- **WilldoEnGin Randomization:** Using the built-in randomizer effectively

---

## 📚 In-Depth Technical Analysis

### Additive Synthesis Architecture
Ogun implements sophisticated additive synthesis with massive harmonic capacity:
- **32,767 Harmonics:** Up to 32,767 individual sine wave harmonics per voice
- **Harmonic Mapping:** Visual interface for drawing harmonic distribution
- **Real-time Processing:** Immediate response to harmonic changes
- **CPU Optimization:** Efficient processing of large harmonic sets
- **Phase Coherence:** Maintains harmonic phase relationships

### Harmonic Mapping System
The visual harmonic mapping interface provides:
- **Spline-Based Editing:** Draw curves to define harmonic distribution
- **Frequency Domain:** X-axis represents harmonic frequency
- **Amplitude Domain:** Y-axis represents harmonic amplitude
- **Real-time Visualization:** Immediate feedback of harmonic changes
- **Precision Control:** Frame-accurate harmonic positioning

### Impulse EQ Architecture
The Impulse EQ provides attack-specific spectral shaping:
- **Attack-Focused:** Shapes spectral content specifically at note onset
- **Temporal Precision:** Affects only the initial portion of notes
- **Harmonic Enhancement:** Adds high-frequency content to attacks
- **Realistic Character:** Creates more realistic bell and percussion sounds
- **Independent Control:** Separate from main harmonic mapping

### WilldoEnGin Algorithm
The randomization system provides:
- **Harmonic Randomization:** Randomizes harmonic content for inspiration
- **Timbre Variation:** Creates subtle or dramatic timbre changes
- **Instant Creativity:** Provides immediate patch variations
- **Algorithmic Diversity:** Generates diverse harmonic structures
- **Creative Spark:** Helps overcome creative blocks

### Signal Processing Chain
The internal architecture processes audio as follows:
- **Input Stage:** MIDI note and velocity processing
- **Harmonic Generation:** Additive synthesis with 32k harmonics
- **Impulse Processing:** Attack-specific harmonic shaping
- **Modulation Application:** LFO and envelope modulation
- **Effects Processing:** Built-in effects application
- **Output Stage:** Final signal routing and monitoring

### Inharmonic Synthesis
Ogun excels at inharmonic synthesis:
- **Non-Harmonic Frequencies:** Can create non-integer harmonic relationships
- **Bell-Like Characteristics:** Perfect for metallic and bell sounds
- **Complex Harmonic Structures:** Creates rich, complex timbres
- **Realistic Instrument Emulation:** Emulates inharmonic instruments
- **Experimental Sounds:** Creates unique inharmonic textures

### Master Pitch Controls
The pitch controls are optimized for complex inharmonic sounds:
- **Coarse Pitch:** Major pitch adjustments
- **Fine Pitch:** Precise pitch adjustments
- **Tuning Precision:** Essential for inharmonic sound matching
- **Key Integration:** Matches complex sounds to project key
- **Harmonic Relationships:** Maintains harmonic relationships during tuning

## 🎛️ Parameter Deep Dive

### Harmonic Mapping Controls
- **Timbre Editor:**
  - **Function:** Visual harmonic distribution editor
    - Range: 0Hz to Nyquist frequency (typically 20Hz-20kHz)
    - Effect: Defines harmonic amplitude distribution
    - Use for: Creating custom timbres and harmonic structures
    - Pro tip: Use for precise harmonic control
  - **Behavior:**
    - Higher points: Louder harmonics at that frequency
    - Lower points: Quieter harmonics at that frequency
    - Flat line: Even harmonic distribution
    - Pro tip: Use for creating specific harmonic relationships
  - **Applications:**
    - Bell synthesis: Create inharmonic harmonic structures
    - Pad creation: Create rich harmonic textures
    - Texture design: Create unique harmonic distributions
    - Creative synthesis: Draw unusual harmonic curves
    - Pro tip: Use for authentic bell and metallic sounds

### Impulse EQ Controls
- **Function:** Attack-specific spectral shaping
  - Range: Frequency-specific control (typically 20Hz-20kHz)
  - Effect: Shapes harmonic content specifically at note onset
  - Use for: Adding realistic attack characteristics
  - Pro tip: Essential for bell and percussion realism
- **Behavior:**
  - Affects only initial portion of notes
  - Creates sharp attack transients
  - Adds high-frequency content to attacks
  - Pro tip: Use for realistic bell strikes
- **Applications:**
  - Bell attacks: Add sharp strike characteristics
  - Percussion realism: Enhance attack transients
  - Texture addition: Add attack-specific harmonics
  - Creative effects: Unusual attack shaping
  - Pro tip: Use for authentic bell and percussion sounds

### Master Pitch Controls
- **Coarse Pitch:**
  - **Function:** Major pitch adjustment
    - Range: Several octaves (typically -24 to +24 semitones)
    - Effect: Shifts all harmonics by the same amount
    - Use for: Key matching and major tuning
    - Pro tip: Use for project key alignment
  - **Behavior:**
    - Maintains harmonic relationships
    - Shifts entire harmonic spectrum
    - Pro tip: Use for key matching
  - **Applications:**
    - Key matching: Align to project key
    - Octave shifting: Move entire harmonic structure
    - Creative tuning: Unusual pitch shifts
    - Project integration: Match to musical context
    - Pro tip: Use for overall pitch alignment

- **Fine Pitch:**
  - **Function:** Precise pitch adjustment
    - Range: Cent-level precision (typically -100 to +100 cents)
    - Effect: Fine-tunes harmonic relationships
    - Use for: Precise tuning of complex sounds
    - Pro tip: Essential for inharmonic sound precision
  - **Behavior:**
    - Subtle harmonic relationship changes
    - Maintains overall harmonic structure
    - Pro tip: Use for fine-tuning
  - **Applications:**
    - Precision tuning: Fine-tune complex harmonics
    - Inharmonic matching: Match to specific frequencies
    - Creative detuning: Subtle harmonic shifts
    - Experimental tuning: Unusual harmonic relationships
    - Pro tip: Use for precise inharmonic control

### X-Y Modulation Controls
- **Function:** Integrated articulation and expression control
  - **X-Axis:** Typically controls harmonic distribution changes
  - **Y-Axis:** Typically controls brightness or resonance changes
  - Effect: Adds real-time expression to sounds
  - Use for: Dynamic sound manipulation
  - Pro tip: Use for expressive performance
- **Behavior:**
  - Real-time harmonic manipulation
  - Dynamic brightness/resonance control
  - Pro tip: Use for live performance expression
- **Applications:**
  - Expressive performance: Real-time harmonic control
  - Dynamic expression: Brightness/resonance changes
  - Creative manipulation: Unusual parameter relationships
  - Live control: Performance-oriented expression
  - Pro tip: Use for dynamic sound expression

### Effects Controls
- **Chorus Effects:**
  - **Function:** Stereo width and thickness enhancement
    - Range: 0-100% (typically)
    - Effect: Adds stereo width and thickness
    - Use for: Widening and thickening sounds
    - Pro tip: Essential for metallic sound enhancement
  - **Behavior:**
    - Low values: Subtle width enhancement
    - High values: Significant width and thickness
    - Pro tip: Use for metallic sound enhancement
  - **Applications:**
    - Width enhancement: Low to medium values for width
    - Thickness addition: Medium to high values for thickness
    - Metallic enhancement: Perfect for metallic sounds
    - Creative effects: Extreme values for unique textures
    - Pro tip: Use for authentic metallic character

- **Delay Effects:**
  - **Function:** Rhythmic echo enhancement
    - Range: 0-100% (typically)
    - Effect: Adds rhythmic echoes and space
    - Use for: Creating rhythmic patterns
    - Pro tip: Use for metallic echo enhancement
  - **Behavior:**
    - Low values: Subtle delay addition
    - High values: Pronounced delay effects
    - Pro tip: Use for rhythmic enhancement
  - **Applications:**
    - Rhythmic enhancement: Low values for subtle rhythm
    - Space addition: Medium values for space
    - Metallic echoes: High values for metallic echoes
    - Creative delays: Extreme values for unique effects
    - Pro tip: Use for metallic sound enhancement

- **Reverb Effects:**
  - **Function:** Spatial enhancement
    - Range: 0-100% (typically)
    - Effect: Adds spatial characteristics
    - Use for: Creating space and depth
    - Pro tip: Use for metallic space enhancement
  - **Behavior:**
    - Low values: Subtle space addition
    - High values: Significant spatial enhancement
    - Pro tip: Use for spatial enhancement
  - **Applications:**
    - Space addition: Low to medium values for space
    - Depth enhancement: Medium to high values for depth
    - Metallic space: Perfect for metallic sounds
    - Creative reverb: Extreme values for unique spaces
    - Pro tip: Use for authentic metallic spatiality

- **EQ Effects:**
  - **Function:** Frequency shaping
    - Range: 3-band EQ with adjustable frequencies
    - Effect: Adjusts frequency balance
    - Use for: Tonal correction and enhancement
    - Pro tip: Use for final tonal shaping
  - **Behavior:**
    - Low band: Low-frequency adjustment
    - Mid band: Mid-frequency adjustment
    - High band: High-frequency adjustment
    - Pro tip: Use for tonal correction
  - **Applications:**
    - Tonal correction: Adjust for appropriate balance
    - Frequency enhancement: Boost specific ranges
    - Problem solving: Cut problematic frequencies
    - Creative EQ: Unusual frequency shaping
    - Pro tip: Use for final tonal adjustment

## 🎼 Sound Design Applications

### Bell and Metallic Synthesis
Using Ogun for bell and metallic sounds:

**Church Bell Creation:**
- **Inharmonic Harmonics:** Creating realistic bell harmonic structures
  - Use inharmonic frequency relationships
  - Apply appropriate harmonic decay
  - Essential for authentic bell sounds
  - Perfect for realistic bell emulation
  - Pro tip: Research real bell harmonic structures

- **Strike Characteristics:** Creating bell strike attacks
  - Use Impulse EQ for sharp attacks
  - Apply appropriate harmonic content
  - Essential for realistic bell strikes
  - Perfect for authentic bell attacks
  - Pro tip: Use for realistic bell strike characteristics

- **Harmonic Decay:** Managing bell harmonic decay
  - Set appropriate decay rates for different harmonics
  - Use for realistic bell resonance
  - Essential for authentic bell sounds
  - Perfect for realistic bell resonance
  - Pro tip: Use different decay rates for different harmonics

### Pad and Atmospheric Applications
Using Ogun for atmospheric sounds:

**Spectral Pad Creation:**
- **Rich Harmonic Textures:** Creating complex harmonic pad textures
  - Use harmonic mapping for rich textures
  - Apply appropriate harmonic distribution
  - Essential for atmospheric music
  - Perfect for evolving textures
  - Pro tip: Use for ambient soundscapes

- **Evolving Harmonics:** Creating evolving harmonic structures
  - Use automation for evolving harmonic changes
  - Apply appropriate harmonic mapping
  - Essential for evolving pads
  - Perfect for atmospheric music
  - Pro tip: Use for evolving atmospheric textures

- **Wide Harmonic Content:** Creating wide harmonic content
  - Use harmonic mapping for width
  - Apply chorus for additional width
  - Essential for wide pad sounds
  - Perfect for spacious textures
  - Pro tip: Use for cinematic pad creation

### Creative Applications
Using Ogun for experimental applications:

**Industrial Textures:**
- **Mechanical Sounds:** Creating industrial and mechanical textures
  - Use inharmonic harmonic structures
  - Apply appropriate harmonic mapping
  - Perfect for experimental music
  - Essential for industrial sound design
  - Useful for mechanical textures

**Atmospheric Textures:**
- **Evolving Atmospheres:** Creating evolving atmospheric textures
  - Use automation for evolving harmonic structures
  - Apply appropriate harmonic mapping
  - Perfect for ambient music
  - Essential for evolving soundscapes
  - Useful for atmospheric sound design

**Experimental Sounds:**
- **Unique Timbres:** Creating unusual sonic signatures
  - Push harmonic relationships beyond normal
  - Combine with effects for uniqueness
  - Perfect for experimental music
  - Essential for creative sound design
  - Useful for unique textures

### Inharmonic Instrument Emulation
Using Ogun for inharmonic instruments:

**Gong Simulation:**
- **Complex Harmonics:** Creating gong-like harmonic structures
  - Use complex harmonic mapping
  - Apply appropriate decay settings
  - Perfect for ethnic music
  - Essential for gong emulation
  - Useful for metallic textures

**Marimba Creation:**
- **Wooden Resonance:** Creating marimba-like wooden resonance
  - Use appropriate harmonic relationships
  - Apply wooden resonator simulation
  - Perfect for ethnic music
  - Essential for marimba emulation
  - Useful for wooden textures

**Glass Harmonica:**
- **Glass-like Harmonics:** Creating glass harmonica sounds
  - Use glass-like harmonic structures
  - Apply appropriate resonance settings
  - Perfect for ethereal music
  - Essential for glass instrument emulation
  - Useful for ethereal textures

## 🧪 Experimental Techniques

### Advanced Harmonic Applications
Creative uses of Ogun's harmonic capabilities:

**Harmonic Sculpting:**
- **Precision Harmonic Control:** Creating specific harmonic content
  - Use spline editor for precise harmonic shaping
  - Create unique harmonic relationships
  - Perfect for detailed sound design
  - Essential for harmonic precision
  - Useful for unique harmonic structures

**Impulse EQ Manipulation:**
- **Attack Shaping:** Creating unique attack characteristics
  - Use Impulse EQ for attack-specific shaping
  - Create unusual attack transients
  - Perfect for creative percussion sounds
  - Essential for attack customization
  - Useful for unique attack characteristics

**WilldoEnGin Experimentation:**
- **Randomization Techniques:** Using the randomizer for inspiration
  - Apply WilldoEnGin for creative spark
  - Use for patch variation and inspiration
  - Perfect for creative exploration
  - Essential for random patch generation
  - Useful for creative sound design

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Harmonic Automation:** Automating harmonic parameters for evolving effects
  - Create evolving harmonic characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic harmonic expression
  - Use for expressive harmonic control

**Modulation Applications:**
- **Parameter Modulation:** Using external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Stage Processing:**
- **Complex Enhancement:** Multiple processing stages for sophisticated effects
  - Create multi-stage harmonic enhancement
  - Apply different processing to different stages
  - Build sophisticated harmonic processing chains
  - Perfect for advanced sound design
  - Use for complex harmonic processing

## 🎚️ Workflow Optimization

### Harmonic Design Workflows
Efficient approaches to using Ogun for harmonic synthesis:

**Bell Creation:**
- **Harmonic Structure Setup:** Creating inharmonic harmonic structures
  - Research real bell harmonic relationships
  - Apply appropriate harmonic mapping
  - Essential for authentic bell sounds
  - Pro tip: Use inharmonic frequency ratios

- **Attack Enhancement:** Creating realistic bell attacks
  - Use Impulse EQ for sharp strikes
  - Apply appropriate harmonic content
  - Essential for realistic bell sounds
  - Pro tip: Use for authentic bell attacks

**Pad Creation:**
- **Harmonic Texture Creation:** Building rich harmonic textures
  - Use harmonic mapping for complexity
  - Apply appropriate harmonic distribution
  - Essential for atmospheric music
  - Pro tip: Use for evolving pad textures

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
- **Atmospheric Pads:** Creating evolving textures with harmonic mapping
- **Lead Enhancement:** Creating complex lead sounds with harmonic control
- **Bass Design:** Creating harmonic-rich bass sounds
- [ ] Manually synthesize a realistic "Church Bell" sound
- [ ] Navigate and edit a preset imported from Autogun
- [ ] Explain the function of the Impulse EQ tab
- [ ] Use 30,000+ harmonics without overloading the CPU
- [ ] Create a complex bell sound with inharmonic harmonic relationships
- [ ] Use the Impulse EQ for realistic attack characteristics
- [ ] Apply appropriate harmonic mapping for different musical genres
- [ ] Create evolving harmonic textures using automation
- [ ] Set up complex harmonic structures with precise control
- [ ] Use the WilldoEnGin randomizer for creative inspiration
- [ ] Apply X-Y modulation for expressive performance
- [ ] Troubleshoot harmonic artifacts and aliasing issues effectively
- [ ] Integrate Ogun into efficient harmonic synthesis workflows
- [ ] Create genre-specific harmonic patches for different musical styles
- [ ] Optimize Ogun settings for minimal CPU usage with high harmonic count
- [ ] Use Ogun for creative sound design applications
- [ ] Set up advanced harmonic routing for complex projects
- [ ] Apply Ogun in live performance scenarios
- [ ] Create experimental sounds with extreme harmonic settings
- [ ] Combine Ogun with other effects for layered processing
- [ ] Integrate Ogun with other automation tools seamlessly
- [ ] Create custom harmonic synthesis workflows for specific creative needs
- [ ] Use Ogun effectively in large, complex projects
- [ ] Generate complex harmonic structures with precise control
- [ ] Create hybrid synthesis patches combining additive and subtractive methods
- [ ] Apply Ogun in mastering contexts with appropriate care
- [ ] Create complex multi-stage harmonic chains with smooth automation
- [ ] Design custom bell patches for specific musical contexts
- [ ] Use Ogun for creative vocal processing applications
- [ ] Apply advanced harmonic control for character enhancement
- [ ] Create genre-specific preset libraries for efficient workflow
- [ ] Integrate Ogun with external hardware for hybrid processing
- [ ] Use Ogun for audio restoration and creative repair applications
- [ ] Combine Ogun with other spectral processing tools
- [ ] Apply Ogun in surround sound or multi-channel setups
- [ ] Create complex harmonic relationships using multiple parameters
- [ ] Use Ogun for creative instrumental processing applications
- [ ] Integrate Ogun with other automation tools for complex control
- [ ] Create complex atmospheric textures using multiple parameters
- [ ] Design custom harmonic algorithms for unique harmonic structures
- [ ] Apply advanced filtering techniques for tone shaping
- [ ] Use Ogun for creative stereo enhancement beyond traditional methods
- [ ] Combine Ogun with convolution for hybrid synthesis approaches
- [ ] Implement advanced envelope shaping for dynamic expression
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use Ogun for creative sound design in film and game audio
- [ ] Apply Ogun in live sound reinforcement scenarios
- [ ] Create experimental harmonic textures using extreme parameter settings
- [ ] Integrate Ogun with external synthesizers for complex sound design
- [ ] Generate complex harmonic structures with precise control
- [ ] Use Ogun for formant synthesis and vowel creation
- [ ] Apply advanced resonance techniques for character enhancement
- [ ] Create evolving textures using parameter automation
- [ ] Design custom harmonic evolution patterns for sophisticated expression
- [ ] Use Ogun for creative bass enhancement with harmonic control
- [ ] Combine Ogun with other vintage emulations for authentic sounds
- [ ] Apply Ogun in educational contexts for synthesis learning
- [ ] Create custom harmonic patches for retro music production
- [ ] Use Ogun for creative lead enhancement with harmonic control
- [ ] Implement advanced harmonic techniques for complex sound design

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What Is Ogun?

> **The "Metallic" Additive Mastermind.**
> Ogun is an additive synthesizer that computes up to **32,767 harmonics**. Unlike subtractive synths (Saw + Filter), Ogun builds sounds from scratch by stacking thousands of sine waves.

## 🧠 The 60-Second Mental Model
Think of Ogun as a **Sculptor of Shiny Things**.
*   Subtractive Synths (Sytrus, Poizone) = Carving wood (Start rich, filter down).
*   **Ogun** = Casting metal. You choose the "mold" (Harmonic Mapping) and the "Material" (Metallic, Glass, Wood).

It is specialized. It is NOT your go-to for warm, fuzzy analog basses. It IS your go-to for **Bells, Gongs, Cymbals, Industrial Pads, and Sci-Fi textures**.

## 📋 When To Use It
| Use Case | ✅ YES (Ogun) | ❌ NO (Use Something Else) |
| :--- | :--- | :--- |
| **Metals** | Bells, Chimes, Cymbals that sound "Real" yet "Alien". | Standard 808s or Analog Squares (Use 3xOsc). |
| **Textures** | Thick, shimmering pads that evolve spectrally. | Simple "bread and butter" piano sounds (Use FL Keys). |
| **FX** | Risers and Downlifters with high-frequency shimmer. | Vocals or Sampling. |
| **Chords** | "Super-Sine" chords (Stacks of thousands of sines). | Realistic Orchestral Strings. |

## 🎧 Context: Hip-Hop & R&B
In modern production, Ogun is a secret weapon for:
1.  **The "Trap Bell":** Most Trap bells are actually FM or Additive synthesis. Ogun makes the coldest, sharpest bells.
2.  **The "Dark" Pad:** Using low harmonic counts to create "hollow" pads that sit perfectly behind a rapper without eating up the mid-range.
3.  **Experimental Bass:** Using inharmonic metallic bass for aggressive "Yeezus" style distortion layers.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map & Signal Flow

[SRC: IL-MAN]

## 🗺️ The Interface Tour

Ogun is divided into the Editor (Top) and the Performance/FX (Bottom).

### 1. The Harmonic Editor (Top Visualizer)
This is the heart of the synth.
*   **Timbre Tab:** Defines the "Body" of the sound. You draw a curve that represents the volume of all 32k harmonics.
    *   *High curve on left* = Bass focus.
    *   *High curve on right* = Treble/Shimmer focus.
*   **Impulse Tab:** Defines the "Attack" (Strike). This allows you to have a metallic "clank" at the start that fades into a softer body.

### 2. The Synthesis Controls (Middle)
*   **Richness:** Controls how many harmonics are actually audible.
    *   *Low:* Simple Organ sound.
    *   *High:* Complex White Noise / Metallic texture.
*   **Unison:** Ogun has an incredibly powerful Unison engine. Use it for "Super-Saw" width (but with Sines).

### 3. The Master & FX (Bottom)
*   **X-Y Pad:** Pre-linked to modulation. Usually `X = Filter/Timbre shift` and `Y = Filter Res`.
*   **FX Section:** Includes a specialized **Chorus** and **Reverb** that are tuned for metallic tails.

## 🚦 Internal Signal Flow

1.  **Seed:** You trigger a note.
2.  **Synthesis:** The engine calculates 32,767 sine waves based on the **Timbre Curve**.
3.  **Impulse:** The **Impulse Curve** is layered on top for the first few milliseconds (Attack).
4.  **Resynthesis:** The sines are summed.
5.  **Processing:** Unison -> Filter -> EQ -> Chorus -> Delay -> Reverb.
6.  **Output:** Audio.

## ⚠️ Common Misunderstandings
*   **"It sounds like noise!"**
    *   *Correction:* If you draw a flat line at the top of the editor, you are literally creating White Noise (all frequencies at max volume). You must **Sculpt** the curve to dip and peak to create "Tone".
*   **"Autogun is better."**
    *   *Correction:* Autogun *IS* Ogun. Autogun is just the preset player. Ogun lets you *edit* those 4 billion presets. Copy the preset number from Autogun -> Paste into Ogun options.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques & Best Practices

## 💎 The Golden Techniques

### 1. The "Resynthesis" Trick (Audio to Synth)
Ogun can analyze a sample and recreate it using sine waves.
*   **Move:** Drag an audio file into the Harmonic Editor window.
*   **Result:** Ogun draws a curve that mimics the frequency spectrum of that sample. It won't sound *exactly* like the sample, but it gives you a "Metallic Ghost" version of it. Great for cloning bell samples.

### 2. The "Super-Sine" Pluck
*   **Context:** Creating a huge, wide pluck that isn't a generic Saw wave.
*   **Move:**
    1.  Draw a "Lowpass" style curve in the Timbre editor (High on left, zero on right).
    2.  Turn **Unison** up to 9 voices.
    3.  Turn **Unison Detune** up.
    4.  Set volume envelope to Pluck shape.
*   **Result:** A massive, lush, glassy pluck.

### 3. The "Impulse" Strike
*   **Context:** Your bell sound is too soft.
*   **Move:** Go to the **Impulse** tab. Draw a mess of high peaks on the right side.
*   **Result:** You now have a hard "Mallet Strike" sound at the start of the note.

## 👂 What to Listen For
*   **Aliasing:** With 32k harmonics, high notes can bounce off the Nyquist ceiling (22kHz) and create ugly low rumbles.
    *   *Fix:* Use the **F (Filter)** section to cut highs, or use the **Decay** knob in the Timbre editor to make highs die out faster.
*   **Phasing:** Too much Unison on metallic sounds can smear the transient.
    *   *Fix:* Reduce Unison or increase the **Attack** time slightly.

## 🛑 Common Pitfalls
1.  **Over-Richness:** Keeping the "Richness" slider at 100% all the time eats CPU and muddies the mix. Dial it back. You rarely need all 32,767 harmonics.
2.  **Ignoring the EQ:** Ogun sounds are often very bright. Use the onboard **EQ** (Bottom right) to cut the `High` band if it hurts your ears.

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Ogun

How to turn "Metal" into "Mood".

## 🌑 Moody (Dark Trap / Drill)
*   **The Goal:** Sinister, cold, detuned bells.
*   **The Levers:**
    1.  **Timbre:** Draw a curve that focuses on Low-Mids. Cut the "Air" frequencies.
    2.  **Mapping:** Use the **Alt** mapping (Randomized harmonics) to create inharmonic, scary intervals.
    3.  **Detune:** High Unison Detune creates a "wobbly" unstable feeling.

## ☀️ Upbeat (Rage / Hyperpop)
*   **The Goal:** Bright, piercing, laser-like.
*   **The Levers:**
    1.  **Richness:** Crank it high (shiny).
    2.  **Impulse:** Heavy high-frequency impulse for a "Clicking" attack.
    3.  **Release:** Short release. Staccato notes.

## 🍄 Psychedelic (Tame Impala / Flume)
*   **The Goal:** Swirling, morphing textures.
*   **The Levers:**
    1.  **X-Y Pad:** Automate the X axis. Link X to "Filter frequency" or "Phaser mix".
    2.  **Resonance:** High resonance on the filter creates sweeping whistling peaks.
    3.  **Delay:** Use the internal delay with high feedback for endless metallic trails.

## 🎷 Jazzy (Fender Rhodes / E-Piano)
*   **The Goal:** Smooth, glass-like keys.
*   **The Levers:**
    1.  **Harmonics:** Draw a "Organ" style stepping curve (Odd harmonics: 1, 3, 5, 7).
    2.  **Attack:** Soft attack (remove the Impulse strike).
    3.  **Chorus:** Heavy Chorus effect helps sell the "Vintage Keys" vibe.

## 🌊 Vibey (Lo-Fi / Ambient)
*   **The Goal:** Dull, washed out, underwater.
*   **The Levers:**
    1.  **Filter:** Low Pass filter is essential. Close it down to 500Hz.
    2.  **Reverb:** Internal Reverb -> "Cathedral" size. Wash it out.
    3.  **Pitch:** Modulate the Master Pitch very slowly with an LFO for drift.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: 5 Minutes to "That" Bell Sound

1.  **Init:** Menu -> Presets -> Default. (You start with a basic tone).
2.  **Shape:** Go to the big window (**Timbre**).
    *   Click **"Analyze Audio"** (Folder icon) OR just draw a squiggly line.
    *   See how the tone changes from "Beep" to "Complex".
3.  **Pluck:** Go to **Art (Articulation)** tab (or ADSR section).
    *   Turn **Decay** short.
    *   Turn **Release** long.
    *   Now it rings like a bell.
4.  **Metal:** Turn up the **Met (Metallic)** slider in the Synthesis section. This stretches the harmonics apart (inharmonic).
5.  **Space:** Turn on **Reverb** (Bottom Right).
6.  **Play:** Instant trap bell.

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes & Fixes

| Mistake | Symptom | The Fix |
| :--- | :--- | :--- |
| **Flatlining** | The sound is just white noise hiss. | You drew the Timbre curve too high across the whole spectrum. "Less is more". Draw peaks, not plateaus. |
| **CPU Spike** | Sound stutters on chords. | **Richness** is too high. Lower it. Also reduce Unison voices or Release time. |
| **No Bass** | Pad sounds thin. | You probably filtered out the fundamental (Harmonic #1). Check the far left of the Timbre graph. Ensure it is UP. |
| **Clicking** | Audio pops at start of note. | The **Attack** time is 0ms. Raise it slightly (to 2-5ms) to soften the transient. |
| **Too "Ringy"** | The bell tail clashes with the chord change. | Use the **Gate** feature or shorten the **Release** time in the Volume Envelope. |

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points

## 1. The "Default" Bell
*   **Richness:** 50%.
*   **Metallic:** 30%.
*   **Unison:** 2 Voices (Subtle width).
*   **Decay:** Short.

## 2. The "Atmosphere" Pad
*   **Richness:** 80%.
*   **Metallic:** 0% (Keep it harmonic/musical).
*   **Attack:** 1 second (Slow swell).
*   **Reverb:** Wet 60%, Decay 4s.

## 3. The "Glass" Lead
*   **Richness:** 30% (Pure).
*   **Timbre:** Draw a comb filter shape (Peak, drop, Peak, drop).
*   **Chorus:** ON. Speed 0.5Hz.

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Settings: MOODY

**Target:** Dark, Cinematic, Drill.

## The Recipe
1.  **Fundament:** Ensure the 1st Harmonic (Left side) is strong.
2.  **Mids:** Scoop the middle harmonics (cut the warm frequencies).
3.  **Highs:** Leave a small cluster of high harmonics for "Air" but keep them quiet.
4.  **Metallic:** Turn **Met** up to 60%. This detunes the harmonics, making the bell sound "wrong" or "evil".
5.  **Reverb:** Dark reverb (Low cut on the reverb EQ).

## Pro Tip: The "Reverse" Bell
*   Set Attack to 500ms.
*   Set Decay to 0.
*   The bell swells IN instead of ringing OUT. Very ominous.

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Settings: Upbeat / Psych / Jazzy / Vibey

## ☀️ UPBEAT (Hyperpop)
*   **Unison:** 9 Voices. Maximum width.
*   **Timbre:** Bright saw-like ramp.
*   **Arp:** Enable the builtin Arpeggiator in the wrapper settings (Cog wheel).
*   **FX:** Heavy Delay (Ping Pong).

## 🍄 PSYCHEDELIC (Trippy)
*   **Phaser:** Use the "Alt" filter mode or add Fruity Phaser after Ogun. Ogun's harmonics eat modulation for breakfast.
*   **Drift:** Use the **LFO** to modulate the "Metallic" parameter. The sound will expand and contract.

## 🎷 JAZZY (Keys)
*   **Smoothing:** Turn **Smooth** up. This removes the "Digital Additive" grittiness and makes it sound more like an organic instrument.
*   **Velocity:** Link Velocity to Filter Cutoff (X-Y). Play softer for duller sounds, harder for bright sounds.

## 🌊 VIBEY (Lo-Fi)
*   **Resynthesis:** Drag a "Rain" or "Vinyl Crackle" sample into the Timbre editor.
*   **Result:** A playable synth pad that sounds like frozen noise.
*   **Filter:** Low Pass heavily.

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Ogun Parameter Dictionary

| Parameter | Type | Range | Description | Vibe Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Richness** | Synthesis Knob | 0-100% | Quantity of harmonics calculated. | **CRITICAL** (Defines Clarity vs Gloss) |
| **Metallic (Met)** | Synthesis Knob | 0-100% | Inharmonic stretcher. Detunes harmonics away from integer ratios. | **CRITICAL** (Musical vs Industrial) |
| **Timbre Pre** | Editor | 0-Nyquist | The harmonic curve. | **High** (The "DNA" of the sound) |
| **Impulse** | Editor | 0-Nyquist | The attack transient curve. | **Medium** (Punch/Click) |
| **Unison** | Unison | 1-9 Voices | Duplicates voices + detunes them. | **High** (Width/Trance) |
| **Decay (Synthesis)** | Knob | 0-100% | How fast high harmonics die out relative to low ones (simulate physics). | **Medium** (Realism) |
| **X-Y Pad** | Modulator | 0-100% | Macro controller for filter/EQ/Formant. | **Performer** (Expression) |

```

---

## FILE: 02-Data\presets\00_Workflow_Preset_Strategy.md

```markdown
# Workflow & Preset Strategy: Ogun

> **Relationship:** **Autogun** = The Library. **Ogun** = The Lab.

## 💾 The "4 Billion" Strategy
Ogun is unique because you don't typically "make" every sound from scratch. You "Mine" them.
1.  **Mine:** Open **Autogun**. Click "Random" until you hear something *close* to the vibe you want (e.g., a cool bell that has too much delay).
2.  **Extract:** Copy the preset number from Autogun's display (e.g., `4294967296`).
3.  **Refine:** Open **Ogun**. Paste that number into Options -> "Enter preset number".
4.  **Edit:** Now you have the unlocked version. Turn down the Delay. Change the Envelope.
5.  **Save:** Save *this* modified version as an `.fst` preset in your user folder `Ogun/User`.

## 📂 Taxonomy
Organize your User presets by Material:
*   `User/Metals` (Bells, Gongs)
*   `User/Glass` (Shimmer pads)
*   `User/Wood` (Marimbas, Logs)
*   `User/Industrial` (Noises, FX)

```

---

## FILE: 02-Data\presets\genre\01-ambient-pad.json

```json
{
  "name": "Ambient Pad",
  "genre": "universal",
  "mood": "moody",
  "description": "Evolving atmospheric pad with slow modulation",
  "parameters": {
    "algorithm": 1,
    "feedback": 30,
    "mixA": 70,
    "mixB": 50,
    "cutoff": 2500,
    "resonance": 25,
    "ampAttack": 100,
    "ampDecay": 500,
    "ampSustain": 80,
    "ampRelease": 800,
    "modRate": 0.15,
    "modDepth": 40,
    "reverbMix": 40
  },
  "workflow": {
    "useCase": "Background textures and atmosphere",
    "steps": [
      "Algorithm 1 for warm, layered tones",
      "Low cutoff (2000-3000 Hz) for dark character",
      "Slow modulation (0.1-0.2 Hz) for gentle movement",
      "Long attack (100-200ms) for smooth entrances",
      "Extended release (500-1000ms) for fade-outs"
    ],
    "troubleshooting": [
      { "issue": "Too bright", "fix": "Lower cutoff to 1500 Hz" },
      { "issue": "Static sound", "fix": "Increase mod rate to 0.2 Hz" },
      { "issue": "Harsh attack", "fix": "Increase amp attack to 200ms" }
    ]
  },
  "abTest": {
    "listenFor": "Smooth, evolving texture with gentle movement",
    "duration": "Full progression with sustained chords"
  }
}
```

---

## FILE: 02-Data\presets\genre\02-epic-lead.json

```json
{
  "name": "Epic Lead",
  "genre": "EDM",
  "mood": "electric",
  "description": "Powerful, aggressive lead for drops and hooks",
  "parameters": {
    "algorithm": 4,
    "feedback": 45,
    "mixA": 100,
    "mixB": 70,
    "cutoff": 5500,
    "resonance": 50,
    "ampAttack": 5,
    "ampDecay": 200,
    "ampSustain": 90,
    "ampRelease": 150,
    "modRate": 0.5,
    "modDepth": 30,
    "reverbMix": 30
  },
  "workflow": {
    "useCase": "Main melodic hook and festival leads",
    "steps": [
      "Algorithm 4 for bright, cutting sound",
      "High cutoff (5000-6000 Hz) for presence",
      "Medium resonance (40-50%) for character",
      "Fast attack (5-10ms) for immediate response",
      "Higher mod depth for movement"
    ],
    "troubleshooting": [
      { "issue": "Not cutting through", "fix": "Increase cutoff to 6500 Hz" },
      { "issue": "Too harsh", "fix": "Reduce resonance to 35%" },
      { "issue": "No presence", "fix": "Increase mixA to 100%" }
    ]
  },
  "abTest": {
    "listenFor": "Powerful, cutting lead that cuts through mix",
    "duration": "8-bar melodic phrase"
  }
}
```

---

## FILE: 02-Data\presets\genre\03-trap-pluck.json

```json
{
  "name": "Trap Pluck",
  "genre": "hip-hop/rap",
  "mood": "funky",
  "description": "Short, punchy pluck for melodic hooks",
  "parameters": {
    "algorithm": 3,
    "feedback": 20,
    "mixA": 80,
    "mixB": 60,
    "cutoff": 4000,
    "resonance": 60,
    "ampAttack": 1,
    "ampDecay": 100,
    "ampSustain": 0,
    "ampRelease": 50,
    "modRate": 0,
    "modDepth": 0,
    "reverbMix": 20
  },
  "workflow": {
    "useCase": "Melodic 808 patterns and hooks",
    "steps": [
      "Algorithm 3 for plucky, metallic character",
      "Medium-high cutoff (3500-4500 Hz)",
      "High resonance (55-65%) for emphasis",
      "Instant attack (1-2ms) for punch",
      "Short decay (80-120ms) for tight sound"
    ],
    "troubleshooting": [
      { "issue": "Too long", "fix": "Reduce decay to 60ms" },
      { "issue": "No click", "fix": "Increase resonance to 70%" },
      { "issue": "Too bright", "fix": "Lower cutoff to 3000 Hz" }
    ]
  },
  "abTest": {
    "listenFor": "Punchy, melodic plucks with character",
    "duration": "16-bar melodic pattern"
  }
}
```

---

## FILE: 02-Data\presets\genre\04-warm-bass.json

```json
{
  "name": "Warm Bass",
  "genre": "R&B",
  "mood": "melodic",
  "description": "Deep, warm bass with FM depth",
  "parameters": {
    "algorithm": 1,
    "feedback": 25,
    "mixA": 60,
    "mixB": 80,
    "cutoff": 1500,
    "resonance": 30,
    "ampAttack": 10,
    "ampDecay": 300,
    "ampSustain": 70,
    "ampRelease": 200,
    "modRate": 0.1,
    "modDepth": 20,
    "reverbMix": 15
  },
  "workflow": {
    "useCase": "R&B and soul bass lines",
    "steps": [
      "Algorithm 1 for fundamental-focused sound",
      "Low cutoff (1200-1800 Hz) for warmth",
      "Low resonance (20-30%) for smooth lows",
      "Medium attack (10-20ms) for clarity",
      "Lower mod depth for stable pitch"
    ],
    "troubleshooting": [
      { "issue": "Muddy", "fix": "Increase cutoff to 2000 Hz" },
      { "issue": "Too thin", "fix": "Increase mixB to 100%" },
      { "issue": "Unstable pitch", "fix": "Reduce mod depth to 10%" }
    ]
  },
  "abTest": {
    "listenFor": "Rich, warm bass with FM depth",
    "duration": "Full bass line progression"
  }
}
```

---

## FILE: 02-Data\presets\genre\05-aggressive-bass.json

```json
{
  "name": "Aggressive Bass",
  "genre": "EDM",
  "mood": "electric",
  "description": "Harsh, distorted bass for dubstep and riddim",
  "parameters": {
    "algorithm": 5,
    "feedback": 60,
    "mixA": 100,
    "mixB": 100,
    "cutoff": 8000,
    "resonance": 80,
    "ampAttack": 1,
    "ampDecay": 150,
    "ampSustain": 60,
    "ampRelease": 100,
    "modRate": 0,
    "modDepth": 50,
    "reverbMix": 20
  },
  "workflow": {
    "useCase": "Dubstep wobbles and riddim bass",
    "steps": [
      "Algorithm 5 for maximum harmonics",
      "High feedback (55-65%) for distortion",
      "High cutoff (7000-9000 Hz) for harshness",
      "Very high resonance (75-85%) for scream",
      "Maximum mod depth for aggressive character"
    ],
    "troubleshooting": [
      { "issue": "Not aggressive enough", "fix": "Increase feedback to 70%" },
      { "issue": "No low end", "fix": "Add sub oscillator layer" },
      { "issue": "Too harsh", "fix": "Reduce cutoff to 6000 Hz" }
    ]
  },
  "abTest": {
    "listenFor": "Aggressive, distorted bass with harmonics",
    "duration": "Wobble pattern and drop"
  }
}
```

---

## FILE: 02-Data\presets\genre\06-lofi-keys.json

```json
{
  "name": "Lo-Fi Keys",
  "genre": "hip-hop/rap",
  "mood": "dusty",
  "description": "Worn, dusty keys with FM character",
  "parameters": {
    "algorithm": 2,
    "feedback": 35,
    "mixA": 70,
    "mixB": 55,
    "cutoff": 2800,
    "resonance": 35,
    "ampAttack": 50,
    "ampDecay": 400,
    "ampSustain": 60,
    "ampRelease": 400,
    "modRate": 0.08,
    "modDepth": 25,
    "reverbMix": 50
  },
  "workflow": {
    "useCase": "Dusty lo-fi chord progressions",
    "steps": [
      "Algorithm 2 for classic FM character",
      "Medium feedback (30-40%) for warmth",
      "Medium cutoff (2500-3000 Hz) for warmth",
      "Medium attack (40-60ms) for organic feel",
      "Slow modulation for gentle movement"
    ],
    "troubleshooting": [
      { "issue": "Too clean", "fix": "Increase feedback to 45%" },
      { "issue": "No character", "fix": "Increase mod depth to 35%" },
      { "issue": "Too bright", "fix": "Lower cutoff to 2000 Hz" }
    ]
  },
  "abTest": {
    "listenFor": "Dusty, nostalgic keys with FM charm",
    "duration": "Slow chord progression"
  }
}
```

---

## FILE: 02-Data\presets\signature\deadmau5.json

```json
{
  "name": "Deadmau5 Style",
  "producer": "deadmau5",
  "description": "Signature Ogun setup for melodic techno and progressive",
  "reference": "Strobe, Ghosts N Stuff",
  "parameters": {
    "algorithm": 4,
    "feedback": 35,
    "mixA": 85,
    "mixB": 70,
    "cutoff": 4800,
    "resonance": 45,
    "ampAttack": 8,
    "ampDecay": 250,
    "ampSustain": 80,
    "ampRelease": 180,
    "modRate": 0.2,
    "modDepth": 35,
    "reverbMix": 35
  },
  "workflow": {
    "useCase": "Melodic techno and progressive house",
    "characteristics": [
      "Clean, warm FM character",
      "Melodic phrasing over chords",
      "Moderate modulation"
    ],
    "steps": [
      "Algorithm 4 for bright base tone",
      "Feedback at 35% for warmth",
      "Cutoff around 4800 Hz",
      "Moderate resonance for presence",
      "Slow-modulating pad layers"
    ],
    "tips": [
      "Layer with simple sine sub",
      "Use reverb for space",
      "Keep progressions simple"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\flume.json

```json
{
  "name": "Flume Style",
  "producer": "Flume",
  "description": "Ethereal Ogon sound design for future bass",
  "reference": "Never Be Like You, Say It",
  "parameters": {
    "algorithm": 1,
    "feedback": 40,
    "mixA": 75,
    "mixB": 65,
    "cutoff": 3500,
    "resonance": 50,
    "ampAttack": 20,
    "ampDecay": 400,
    "ampSustain": 70,
    "ampRelease": 600,
    "modRate": 0.12,
    "modDepth": 45,
    "reverbMix": 55
  },
  "workflow": {
    "useCase": "Future bass textures and leads",
    "characteristics": [
      "Ethereal, flowing textures",
      "Heavy reverb and modulation",
      "Melodic, emotional quality"
    ],
    "steps": [
      "Algorithm 1 for layered depth",
      "High feedback for warmth",
      "Medium cutoff for smoothness",
      "High resonance for character",
      "Heavy modulation movement"
    ],
    "tips": [
      "Layer with vocal chops",
      "Use reverb and delay",
      "Automate filter sweeps"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\korg-fm.json

```json
{
  "name": "Korg Style",
  "producer": "Korg Kronos Patches",
  "description": "Authentic FM synthesis reminiscent of classic Korg",
  "reference": "Classic FM pads and keys",
  "parameters": {
    "algorithm": 2,
    "feedback": 30,
    "mixA": 80,
    "mixB": 60,
    "cutoff": 4000,
    "resonance": 35,
    "ampAttack": 15,
    "ampDecay": 350,
    "ampSustain": 75,
    "ampRelease": 300,
    "modRate": 0.15,
    "modDepth": 30,
    "reverbMix": 40
  },
  "workflow": {
    "useCase": "Classic FM pads and electric pianos",
    "characteristics": [
      "Authentic FM character",
      "Warm, musical tones",
      "Versatile for many styles"
    ],
    "steps": [
      "Algorithm 2 for classic FM",
      "Moderate feedback for warmth",
      "Cutoff around 4000 Hz",
      "Medium resonance for balance",
      "Classic envelope shapes"
    ],
    "tips": [
      "Layer for richness",
      "Use with chorus effect",
      "Great for electric pianos"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\porter-robinson.json

```json
{
  "name": "Porter Robinson",
  "producer": "Porter Robinson",
  "description": "Cinematic Ogon for emotional electronic music",
  "reference": "Language, Fellow Feeling",
  "parameters": {
    "algorithm": 3,
    "feedback": 45,
    "mixA": 90,
    "mixB": 75,
    "cutoff": 4200,
    "resonance": 55,
    "ampAttack": 25,
    "ampDecay": 500,
    "ampSustain": 65,
    "ampRelease": 700,
    "modRate": 0.1,
    "modDepth": 50,
    "reverbMix": 60
  },
  "workflow": {
    "useCase": "Cinematic textures and emotional leads",
    "characteristics": [
      "Epic, sweeping textures",
      "Emotional and uplifting",
      "Heavy modulation and reverb"
    ],
    "steps": [
      "Algorithm 3 for complex textures",
      "High feedback for richness",
      "Medium-high cutoff for presence",
      "High resonance for character",
      "Maximum modulation depth"
    ],
    "tips": [
      "Use with heavy reverb",
      "Automate for builds",
      "Layer with orchestral elements"
    ]
  }
}
```

---

## FILE: 02-Data\rules\00_Do_Dont_Rules.md

```markdown
# Operational Rules: Do's and Don'ts

| Action | Verdict | Reason |
| :--- | :--- | :--- |
| **Max Richness + Max Unison** | 🛑 **STOP** | This generates hundreds of thousands of sine waves. It will melt your CPU. Use Richness sparingly. |
| **Resynthesize Vocals** | ⚠️ **CAUTION** | Ogun's resynthesis is "Spectral", not "Sample based". Vocals will sound like metallic robot ghosts, not real words. (Actually, this is a cool effect, just don't expect realism). |
| **Use Native EQ** | ✅ **DO** | Ogun generates extreme high frequencies. Always use the built-in EQ or an external EQ to low-pass above 16kHz to prevent ear fatigue. |
| **Randomize All** | ✅ **DO** | Use the "Randomize" function in the menu. Ogun's engine is so complex that randomization often yields usable, bizarre textures you'd never program manually. |

```

---

## FILE: 02-Data\rules\01_Troubleshooting_Matrix.md

```markdown
# Troubleshooting Matrix

| Symptom | Probable Cause | The Fix |
| :--- | :--- | :--- |
| **"Sound is too quiet"** | Harmonic mapping is too low. | Raise the Timbre curve in the editor. Or check the Master Vol. |
| **"Harsh Highs"** | Aliasing / Too many harmonics. | Lower the **Richness** slider. Reduce the right side of the Timbre curve. |
| **"Wobbly Pitch"** | Metallic knob is too high. | The Metallic slider detunes harmonics. Lower it to 0% for pure musical tuning. |
| **"No Attack"** | Slow Attack envelope. | Check the ADSR (Articulation) tab. Lower the Attack (A) slider to 0. |
| **"Muddy Mix"** | Unison smearing. | Reduce Unison voices. 9 voices is usually overkill. Try 2 or 3. |
| **"CPU Overload"** | Too many partials. | Reduce **Richness**. Reduce Polyphony (Max voices). |

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B

## 1. The "Trap Bell" Standard
*   **Rule:** Trap bells must cut through 808s.
*   **Implementation:** Use Ogun's **Impulse** tab to add a "Click" (transient) at 2k-5kHz. This ensures the bell rhythm is heard even on small speakers, while the body carries the tone.

## 2. The "Dark Texture" Layer
*   **Rule:** Do not clutter the frequencies where the Rapper sits (500Hz - 3kHz).
*   **Implementation:** When making horror pads in Ogun, carve a giant "V" shape in the Timbre mapping. Deep lows + Shimmering highs. Empty mids.

## 3. The "Unstable" Lead
*   **Rule:** Perfect tuning sounds "Stock".
*   **Implementation:** Use the **Metallic** knob at ~5-10%. This introduces slight inharmonicity (like a real Gong or poorly maintained synth) which adds "Vibe" and "Authenticity" to simple melodies.

## 4. Mono vs Stereo
*   **Rule:** Bells should be relatively mono to be punchy; Pads should be wide.
*   **Implementation:**
    *   **Bells:** Unison OFF. Chorus OFF.
    *   **Pads:** Unison ON (4 voices). Chorus ON (50%).

```

---

## FILE: 02-Data\rules\ogon-safety-rules.md

```markdown
# Ogon Safety Rules

## Volume & Clipping

### Master Output
- Keep master output below -3 dB
- Use limiter if approaching 0 dB
- Check true peak on export

### Oscillator Levels
- Sum of all operator levels under 250%
- Typical: Mix A 80%, Mix B 60%, others 40-60%
- High feedback (>50%) increases output

### Feedback Safety
| Feedback Level | Character | Warning |
|----------------|-----------|---------|
| 0-25% | Clean | Safe range |
| 25-45% | Warm | Normal use |
| 45-65% | Rich | Monitor levels |
| 65%+ | Harsh | Risk of clipping |

## Filter Safety

### Resonance Limits
| Setting | Character | Maximum Safe |
|---------|-----------|--------------|
| 0-30% | Clean | 30% |
| 30-50% | Character | 50% |
| 50-70% | Emphasis | 70% |
| 70%+ | Screaming | Risk of distortion |

### Cutoff Guidelines
| Use Case | Recommended | Maximum |
|----------|-------------|---------|
| Pads | 2000-3500 Hz | 5000 Hz |
| Leads | 4000-5500 Hz | 7000 Hz |
| Plucks | 3500-5000 Hz | 7000 Hz |
| Bass | 1200-2500 Hz | 4000 Hz |

## CPU Safety

### Voice Management
| Setting | CPU Impact | Recommendation |
|---------|------------|----------------|
| 6 Operators | High | Limit to 8 voices |
| 5 Operators | Medium | 12 voices |
| 3-4 Operators | Low | 16 voices |
| Unison | Very High | Use sparingly |

### Modulation Rate
| Rate | Use Case | CPU Impact |
|------|----------|------------|
| 0-0.2 Hz | Pads | Low |
| 0.2-0.5 Hz | Movement | Medium |
| 0.5-2 Hz | Animation | Medium-High |
| Audio rate | distortion | High |

## Sound Design Safety

### Modulation Depth
| Target | Maximum | Warning |
|--------|---------|---------|
| Filter Cutoff | 70% | Above = harsh |
| Pitch | 1 octave | Above = unstable |
| Amplitude | 100% | Normal range |
| Resonance | 60% | Above = feedback |

### Operator Safety
- Never exceed 100% modulation
- Watch for pitch instability with high feedback
- Reduce levels when using many operators

## Genre-Specific Limits

### R&B/Smooth
| Setting | Limit | Reason |
|---------|-------|--------|
| Feedback | 35% | Warmth |
| Cutoff | 3000 Hz | Smoothness |
| Resonance | 35% | No harshness |

### Trap/Aggressive
| Setting | Limit | Reason |
|---------|-------|--------|
| Feedback | 55% | Distortion |
| Cutoff | 4000 Hz | Presence |
| Resonance | 65% | Character |

### EDM/Festival
| Setting | Limit | Reason |
|---------|-------|--------|
| Feedback | 45% | Power |
| Cutoff | 5000 Hz | Cutting |
| Resonance | 50% | Presence |

## Common Mistakes to Avoid

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| Feedback >60% | Harsh, distorted sound | Monitor at 50% max |
| All ops at 100% | Immediate clipping | Use 50-80% per op |
| High resonance + high cutoff | Ear fatigue | Balance both |
| Fast LFO to pitch | Unpleasant vibrato | Use 0.1-0.3 Hz |
| Audio rate modulation | Digital distortion | Keep below 20 Hz |

## Quick Reference Limits

| Parameter | Maximum Safe | Warning Zone |
|-----------|---------------|--------------|
| Master Volume | -3 dB | -3 to 0 dB |
| Mix A | 100% | Normal |
| Mix B | 100% | With feedback = risk |
| Feedback | 50% | 50-65% |
| Cutoff | 7000 Hz | 6000-7000 Hz |
| Resonance | 60% | 60-80% |
| Voices | 8-12 | 12+ |
| Mod Rate | 0.5 Hz | 0.5-2 Hz |

## Troubleshooting

### Clipping
1. Reduce operator levels
2. Lower feedback
3. Enable output limiter
4. Reduce filter resonance

### Harsh Sound
1. Lower cutoff
2. Reduce resonance
3. Reduce feedback
4. Add high-pass to output

### No Low End
1. Increase operator 1 level
2. Lower cutoff frequency
3. Reduce modulation
4. Check filter routing

### Unstable Pitch
1. Reduce feedback
2. Lower modulation depth
3. Reduce operator levels
4. Check LFO rate

## FL Studio Integration

### Latency
- Ogon uses ~5-10 ms latency
- Increase buffer for recording
- Use direct monitoring

### Automation
- Right-click parameters for automation
- Smooth rapid changes
- Use for filter sweeps

### Rendering
- Render at 24-bit or 32-bit
- Check true peak
- Leave 6 dB headroom

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Workflow: Quick Metallic Texture

**Goal:** Create a usable background texture in < 1 minute.

1.  **Seed:** Open Ogun. Go to "Timbre" tab.
2.  **Draw:** Click "Random shape" or crudely draw a mountain range.
3.  **Space:** Enable **Reverb** (Bottom Right).
4.  **Motion:**
    *   Go to **Articulation** tab.
    *   Select **Filter Frequency**.
    *   Draw a slow LFO shape.
5.  **Result:** Evolving metallic drone.

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Sound_Design.md

```markdown
# Workflow: Designing the Perfect Bell

**Goal:** A realistic, rich Church Bell.

1.  **Fundamental:** In Timbre tab, ensure the first harmonic (far left) is HIGH. This is the note pitch.
2.  **Partials:** Draw a few distinct spikes further up the spectrum (e.g., at 2x, 3.5x, 5x frequency).
    *   *Tip:* Non-integer spacing (3.5x) sounds more "Metal". Integer spacing (4x) sounds "Organ".
3.  **Decay Physics:**
    *   Real metals dampen high freqs faster.
    *   Turn the **Decay** knob (Synthesis section) UP.
    *   This forces the high partials you drew to fade out quickly, leaving the fundamental ringing.
4.  **Strike:**
    *   Go to **Impulse** tab.
    *   Draw a noise burst (scribble) at the high end.
5.  **Result:** CLANK -> Hummmmm.

```

---

## FILE: 03-Workflows\by-goal\02_Goal_Mix_Or_Control.md

```markdown
# Workflow: Fitting Ogun in the Mix

**Goal:** Making 32,000 harmonics sit in a dense mix.

1.  **The EQ Cut:**
    *   Ogun produces sub-bass rumble often unnoticed.
    *   **Action:** Enable the built-in EQ (Bottom Right). Turn Low Band Gain to -Inf (Cut).
2.  **The Stereo Spread:**
    *   **Action:** Use **Unison**.
    *   Set Voices: 2.
    *   Set Pan: 100%.
    *   Set Pitch (Detune): 10 cents.
    *   **Result:** Extreme width, leaving the center channel open for Kick/Vocal.
3.  **The transient:**
    *   If the bell clashes with the Snare.
    *   **Action:** Increase Attack time to 10ms. Let the Snare hit, then the Bell swells in immediately after.

```

---

## FILE: 03-Workflows\by-goal\10_Vibe_Moody.md

```markdown
# Vibe Workflow: MOODY (The Horror Bell)

**Context:** UK Drill / Dark Trap melody.

1.  **Source:** Start with Default preset.
2.  **Timbre:** Draw a random jagged line.
3.  **Detune:** Turn **Metallic** slider to 40%.
    *   *Listen:* The pitch becomes ambiguous and dissonant.
4.  **Filter:**
    *   Go to Articulation -> Filter.
    *   Choose **Low Pass**.
    *   Cutoff: 400Hz.
5.  **Modulation:**
    *   Link Velocity to Filter Cutoff.
    *   When you play soft, it's a sub-bass rumble. When you hit hard, it screams.
6.  **Play:** Slow, simple arpeggios in harmonic minor.

```

---

## FILE: 03-Workflows\by-goal\11_Vibe_Upbeat.md

```markdown
# Vibe Workflow: UPBEAT (Super-Sine Chords)

**Context:** Future Bass / Hyperpop lush chords.

1.  **Source:** Default preset.
2.  **Richness:** 100%.
3.  **Timbre:** Draw a smooth ramp up (Sawtooth approximation).
4.  **Unison:**
    *   Voices: 9.
    *   Detune: 50%.
    *   Pan: 100%.
5.  **Envelope:**
    *   Attack: 0.
    *   Sustain: 100%.
    *   Release: 200ms.
6.  **Result:** A sound that rivals "Serum" Supersaws, but with a unique glassy additive texture (smoother/silkier high end).

```

---

## FILE: 03-Workflows\by-goal\12_Vibe_Psychedelic.md

```markdown
# Vibe Workflow: PSYCHEDELIC (Morphing Pad)

**Context:** Background texture that feels "alive".

1.  **Mapping:** Draw a complex "Comb" shape (lots of peaks and valleys).
2.  **Mapping 2:**
    *   Enable **Alt** mapping (The secondary timbre curve).
    *   Draw a COMPLETELY DIFFERENT shape here.
3.  **Morph:**
    *   Go to **Morphing** tab (or Modulation matrix).
    *   Link **LFO 1** to **Timbre Mix**.
    *   *Result:* The sound constantly shapeshifts between Sound A (Comb) and Sound B (Other).
4.  **Effects:** Add **Phaser** (External or internal via EQ sweep).

```

---

## FILE: 03-Workflows\by-goal\13_Vibe_Jazzy.md

```markdown
# Vibe Workflow: JAZZY (Electric Piano)

**Context:** Smooth, glassy keys for chords.

1.  **Harmonics:**
    *   Clear the Timbre.
    *   Draw peaks ONLY at: 1, 3, 5, 7, 9 (The Odd Harmonics).
    *   *Result:* Square wave / Clarinet / E-Piano hollow tone.
2.  **Envelope:**
    *   Attack: 0.
    *   Decay: 2s.
    *   Sustain: 0.
    *   Release: 500ms.
3.  **Velocity:**
    *   Link Velocity to **Volume** (Standard).
    *   Link Velocity to **Richness** (Hard hits = Brighter).
4.  **FX:** Add **Tremolo** (Volume LFO) for that Rhodes vibe.

```

---

## FILE: 03-Workflows\by-goal\14_Vibe_Vibey.md

```markdown
# Vibe Workflow: VIBEY (Resampled Cassette)

**Context:** Sample-based aesthetic using pure synthesis.

1.  **Resynthesis:**
    *   Find a drum break or a noise sample.
    *   Drag it into Ogun's **Timbre** window.
    *   Ogun freezes the spectrum into a static metallic fingerprint.
2.  **Pitch Drift:**
    *   Go to **Pitch** tab.
    *   Use a slow, random LFO on Fine Pitch.
3.  **Filter:**
    *   Band Pass filter. Sweep it slowly.
4.  **Result:** Spectral ghostly noise that follows keyboard pitch. Perfect for intro backgrounds.

```

---

## FILE: 03-Workflows\by-instrument\01-pad-workflow.md

```markdown
# Ogon Pad Workflow

## Goal
Create evolving, atmospheric pad sounds.

## Plugin Settings

### Algorithm Selection
| Algorithm | Character | Best For |
|-----------|-----------|----------|
| 1 | Warm, layered | Classic pads |
| 2 | Bell-like | Electric pianos |
| 3 | Plucky | Animated pads |
| 4 | Bright | Cutting leads |
| 5 | Complex | Aggressive textures |

### Oscillator Mix
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mix A | 70-85% | Main tonal foundation |
| Mix B | 50-70% | Harmonic complexity |
| Feedback | 25-40% | Warmth and body |

### Filter Settings
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Cutoff | 2000-3500 Hz | Dark to medium |
| Resonance | 20-35% | Subtle emphasis |
| Type | Low Pass | Smooth character |

### Amplitude Envelope
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Attack | 100-200 ms | Smooth entry |
| Decay | 400-600 ms | Initial fade |
| Sustain | 70-85% | Hold level |
| Release | 500-1000 ms | Gentle fade out |

### Modulation
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Rate | 0.1-0.2 Hz | Slow movement |
| Depth | 30-50% | Visible movement |
| Shape | Sine | Gentle variation |

## Workflow Steps

### Stage 1: Algorithm Selection
1. Start with Algorithm 1 for warm pads
2. Try Algorithm 3 for animated textures
3. Algorithm 2 for bell-like character
4. Adjust based on genre

### Stage 2: Tone Shaping
1. Set Mix A at 75%
2. Add Mix B at 60%
3. Increase feedback to 30% for warmth
4. Find the character you want

### Stage 3: Filter Setup
1. Start with low cutoff (2500 Hz)
2. Add subtle resonance (25%)
3. Increase cutoff for brightness
4. Adjust to taste

### Stage 4: Envelope Design
1. Slow attack for smooth entries
2. Medium decay to reach sustain
3. High sustain for continuous sound
4. Long release for gentle endings

## Genre Applications

### Ambient/Moody
| Setting | Value |
|---------|-------|
| Algorithm | 1 |
| Cutoff | 2000 Hz |
| Resonance | 20% |
| Mod Rate | 0.1 Hz |
| Reverb Mix | 60% |

### Future Bass
| Setting | Value |
|---------|-------|
| Algorithm | 1 or 3 |
| Cutoff | 3500 Hz |
| Resonance | 40% |
| Mod Rate | 0.15 Hz |
| Reverb Mix | 50% |

### Cinematic
| Setting | Value |
|---------|-------|
| Algorithm | 3 |
| Cutoff | 3000 Hz |
| Resonance | 35% |
| Mod Rate | 0.12 Hz |
| Reverb Mix | 65% |

## A/B Testing Method

### Texture Test
1. Play sustained chord
2. Listen for movement and evolution
3. Check for harshness
4. Verify smoothness

### Mix Test
1. Lower all other elements
2. Listen to pad in context
3. Check frequency masking
4. Test mono compatibility

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Too static | Increase mod rate |
| Too bright | Lower cutoff |
| Too harsh | Reduce feedback |
| No body | Increase feedback |
| Too muddy | Increase cutoff |

## FL Studio Tips

### Layering
1. Create two pad layers
2. Detune slightly for width
3. Pan opposite directions
4. Send both to same reverb

### Effects Chain
1. Ogon output
2. Fruity Reverb (large hall)
3. Fruity Chorus (subtle)
4. Fruity Parametric EQ (corrective)
5. Fruity Limiter (output)

### Automation Ideas
- Filter cutoff for swells
- Mod depth for builds
- Mix ratio for evolution
- Reverb mix for space

```

---

## FILE: 03-Workflows\by-instrument\02-lead-workflow.md

```markdown
# Ogon Lead Workflow

## Goal
Create powerful, cutting melodic leads.

## Plugin Settings

### Algorithm Selection
| Algorithm | Character | Best For |
|-----------|-----------|----------|
| 4 | Bright, cutting | Main leads |
| 5 | Complex, harsh | Aggressive leads |
| 3 | Plucky | Staccato leads |

### Oscillator Mix
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mix A | 85-100% | Main tone |
| Mix B | 60-80% | Harmonics |
| Feedback | 35-50% | Edge and presence |

### Filter Settings
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Cutoff | 4500-6500 Hz | Bright presence |
| Resonance | 40-55% | Character emphasis |
| Type | Low Pass or Band |

### Amplitude Envelope
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Attack | 5-15 ms | Immediate start |
| Decay | 150-300 ms | Initial shaping |
| Sustain | 80-95% | Full sustain |
| Release | 100-200 ms | Quick release |

### Modulation
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Rate | 0.3-0.6 Hz | Subtle movement |
| Depth | 20-40% | Controlled motion |
| Shape | Triangle | Less intrusive |

## Workflow Steps

### Stage 1: Algorithm Selection
1. Algorithm 4 for clean, bright leads
2. Algorithm 5 for distorted, aggressive
3. Algorithm 3 for plucky, animated

### Stage 2: Tone Setup
1. High Mix A (90-100%) for presence
2. Moderate Mix B (65-80%) for harmonics
3. Increase feedback for edge (40-50%)
4. Find your character

### Stage 3: Filter
1. High cutoff (5000-6000 Hz) for brightness
2. Medium-high resonance (45-55%)
3. Adjust for cutting through mix
4. Lower if too harsh

### Stage 4: Envelope
1. Fast attack for immediate presence
2. Short decay for punch
3. High sustain for fullness
4. Quick release for tightness

## Genre Applications

### EDM/Festival
| Setting | Value |
|---------|-------|
| Algorithm | 4 |
| Cutoff | 5500 Hz |
| Resonance | 50% |
| Feedback | 45% |
| Reverb Mix | 25% |

### Trap Melody
| Setting | Value |
|---------|-------|
| Algorithm | 3 |
| Cutoff | 4500 Hz |
| Resonance | 55% |
| Feedback | 35% |
| Reverb Mix | 30% |

### Progressive
| Setting | Value |
|---------|-------|
| Algorithm | 4 |
| Cutoff | 5000 Hz |
| Resonance | 45% |
| Feedback | 40% |
| Reverb Mix | 35% |

## A/B Testing Method

### Cutting Test
1. Lower all other elements
2. Play lead in isolation
3. Listen for presence
4. Raise volume to match

### Mix Test
1. Add bass and drums
2. Listen for masking
3. Check stereo imaging
4. Test at low volume

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Not cutting | Increase cutoff to 6000 Hz |
| Too harsh | Reduce resonance to 40% |
| No body | Increase feedback to 50% |
| Too thin | Increase Mix B to 80% |
| Too aggressive | Reduce feedback to 35% |

## FL Studio Tips

### Stacking
1. Lead on center
2. Detuned layer at -10 cents
3. Layer at +7 cents
4. Pan detuned layers wide

### Effects Chain
1. Ogon output
2. Fruity Parametric EQ (+3dB at 2kHz)
3. Fruity Compressor (2:1, fast attack)
4. Fruity Limiter (ceiling -0.3dB)

### Sidechain (Optional)
1. Key to kick
2. Threshold -20dB
3. Fast attack, medium release
4. Subtle ducking for space

```

---

## FILE: 03-Workflows\by-instrument\03-pluck-workflow.md

```markdown
# Ogon Pluck Workflow

## Goal
Create short, punchy plucked sounds.

## Plugin Settings

### Algorithm Selection
| Algorithm | Character | Best For |
|-----------|-----------|----------|
| 3 | Metallic, plucky | Classic FM |
| 2 | Bell-like | Electric plucks |
| 5 | Harsh | Aggressive plucks |

### Oscillator Mix
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mix A | 75-90% | Main tone |
| Mix B | 55-75% | Click and harmonics |
| Feedback | 15-30% | Sustain character |

### Filter Settings
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Cutoff | 3000-5000 Hz | Full range |
| Resonance | 55-70% | Emphasis on pluck |
| Type | Low Pass or Band |

### Amplitude Envelope
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Attack | 1-5 ms | Immediate click |
| Decay | 80-150 ms | Short sustain |
| Sustain | 0-20% | Minimal hold |
| Release | 30-80 ms | Quick release |

### Modulation
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Rate | 0-0.3 Hz | Minimal movement |
| Depth | 0-20% | Little to none |
| Shape | Off or Sine | Static sound |

## Workflow Steps

### Stage 1: Algorithm Selection
1. Algorithm 3 for classic FM pluck
2. Algorithm 2 for bell-like character
3. Algorithm 5 for distorted, aggressive

### Stage 2: Tone
1. Mix A at 80-90%
2. Mix B at 65-75% for click
3. Low feedback (20-25%) for tightness
4. Adjust for desired character

### Stage 3: Filter
1. Medium-high cutoff (4000-5000 Hz)
2. High resonance (60-70%) for emphasis
3. The pluck happens at resonance peak
4. Adjust to find "click" point

### Stage 4: Envelope
1. Instant attack (1-3ms) for click
2. Short decay (100-120ms)
3. Low sustain (5-15%)
4. Fast release (40-60ms)

## Genre Applications

### Trap Melody
| Setting | Value |
|---------|-------|
| Algorithm | 3 |
| Cutoff | 4000 Hz |
| Resonance | 65% |
| Decay | 100 ms |
| Release | 50 ms |

### Future Bass
| Setting | Value |
|---------|-------|
| Algorithm | 2 |
| Cutoff | 4500 Hz |
| Resonance | 60% |
| Decay | 120 ms |
| Release | 60 ms |

### House
| Setting | Value |
|---------|-------|
| Algorithm | 3 |
| Cutoff | 5000 Hz |
| Resonance | 55% |
| Decay | 150 ms |
| Release | 80 ms |

## A/B Testing Method

### Pluck Test
1. Play single notes at varying velocities
2. Listen for consistent click
3. Check decay character
4. Verify release smoothness

### Pattern Test
1. Program a melodic pattern
2. Listen for note-to-note clarity
3. Check velocity sensitivity
4. Test in mix context

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Too long | Reduce decay to 80ms |
| No click | Increase resonance to 70% |
| Too clicky | Reduce attack to 1ms |
| No sustain | Increase decay to 150ms |
| Too harsh | Lower cutoff to 3500 Hz |

## FL Studio Tips

### Velocity Mapping
1. High velocity = full tone
2. Low velocity = less click
3. Program velocity variation
4. Humanize the pattern

### Effects Chain
1. Ogon output
2. Fruity Parametric EQ (cut 200Hz)
3. Fruity Compressor (4:1, 50ms attack)
4. Fruity Reverb (short, 0.5s decay)

### Layering
1. Layer with 808/bass
2. Pluck on top
3. Layer with closed hats for rhythm
4. Add reverb to tail

```

---

## FILE: 03-Workflows\by-instrument\04-bass-workflow.md

```markdown
# Ogon Bass Workflow

## Goal
Create deep, powerful bass sounds.

## Plugin Settings

### Algorithm Selection
| Algorithm | Character | Best For |
|-----------|-----------|----------|
| 1 | Warm, fundamental | Smooth bass |
| 4 | Bright, cutting | Presence bass |
| 5 | Distorted, harsh | Aggressive bass |

### Oscillator Mix
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mix A | 60-80% | Main fundamental |
| Mix B | 70-100% | Harmonic content |
| Feedback | 20-40% | Distortion/richness |

### Filter Settings
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Cutoff | 1200-2500 Hz | Deep to medium |
| Resonance | 25-50% | Bass emphasis |
| Type | Low Pass | Focused low end |

### Amplitude Envelope
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Attack | 5-20 ms | Quick start |
| Decay | 200-400 ms | Initial shaping |
| Sustain | 60-85% | Full body |
| Release | 150-300 ms | Natural release |

### Modulation
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Rate | 0.05-0.15 Hz | Slow movement |
| Depth | 10-25% | Subtle variation |
| Shape | Sine or Off | Minimal movement |

## Workflow Steps

### Stage 1: Algorithm Selection
1. Algorithm 1 for warm, smooth bass
2. Algorithm 4 for cutting, bright bass
3. Algorithm 5 for distorted, aggressive bass

### Stage 2: Tone
1. Mix A at 70-80% for fundamental
2. Mix B at 80-100% for harmonics
3. Feedback at 25-35% for richness
4. Adjust for warmth vs edge

### Stage 3: Filter
1. Low cutoff (1500-2000 Hz) for deep
2. Medium resonance (30-40%) for body
3. Higher cutoff (2500 Hz) for presence
4. Lower resonance if muddy

### Stage 4: Envelope
1. Fast attack (10-15ms) for punch
2. Medium decay (250-350ms)
3. High sustain (75-85%) for fullness
4. Medium release (200-250ms)

## Genre Applications

### R&B/Smooth
| Setting | Value |
|---------|-------|
| Algorithm | 1 |
| Cutoff | 1500 Hz |
| Resonance | 30% |
| Feedback | 25% |
| Mod Depth | 15% |

### Trap 808
| Setting | Value |
|---------|-------|
| Algorithm | 4 or 5 |
| Cutoff | 2000 Hz |
| Resonance | 45% |
| Feedback | 40% |
| Mod Depth | 0% |

### Dubstep
| Setting | Value |
|---------|-------|
| Algorithm | 5 |
| Cutoff | 2500 Hz |
| Resonance | 55% |
| Feedback | 55% |
| Mod Depth | 40% |

## A/B Testing Method

### Sub Test
1. High-pass all other elements at 40Hz
2. Listen to bass in isolation
3. Check for rumble and depth
4. Test at low volume

### Mix Test
1. Add drums and lead
2. Listen for masking
3. Check low-end clarity
4. Test with bass solo

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Muddy | Increase cutoff to 2000 Hz |
| No punch | Increase attack speed |
| Too thin | Increase Mix B to 100% |
| Too harsh | Reduce feedback to 25% |
| No low end | Increase feedback to 35% |

## FL Studio Tips

### Layering
1. Layer with sine sub (3xOsc)
2. Sub on bass channel
3. Ogon on mid-frequency channel
4. Blend for complete bass

### Effects Chain
1. Ogon output
2. Fruity Parametric EQ (+3dB at 80Hz)
3. Fruity Compressor (8:1, fast attack)
4. Fruity Limiter (ceiling -0.3dB)

### Sidechain (Essential)
1. Key to kick
2. Threshold -15dB
3. Fast attack, medium release
4. 3-6dB ducking for space

### Saturation
1. Add Fruity Wave Shaper
2. Light saturation (10-20%)
3. Adds harmonics and warmth
4. Use before compression

```

---

## FILE: 03-Workflows\by-instrument\Bass_Pluck_FX.md

```markdown
# Workflow: Instrument Recipes

## 1. The "Years" Bass (Distorted Metal)
*   **Octave:** Play C2 (Low).
*   **Richness:** 100%.
*   **Metallic:** 20%.
*   **Unison:** 1 (Mono).
*   **Processing:** Add **Fruity Fast Dist** afterwards.
*   **Result:** The harmonics scream when distorted, creating that tearing metal bass sound.

## 2. The "Ice" Pluck
*   **Timbre:** High pass (remove low harmonics).
*   **Impulse:** High frequency noise.
*   **Release:** Long.
*   **Reverb:** Max.
*   **Result:** Crystalline textures for top-lines.

## 3. The "Gong" FX
*   **Metallic:** 80%. (Very inharmonic).
*   **Env:** Long Attack (Slow swell), Long Release.
*   **Pitch:** Bend it down (-12st) over the duration of the note.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log

| ID | Source Name | Type | Key Information Derived |
| :--- | :--- | :--- | :--- |
| **IL-MAN** | Image-Line Official Manual | Primary | 32,767 harmonics count, Impulse EQ function, Autogun preset compatibility. |
| **ADD-SYNTH-BASICS** | Additive Synthesis Theory | Concept | Generating Square/Saw waves from odd/all harmonics, Bell synthesis physics (inharmonic decay). |
| **DESIGN-XP** | Sound Design Experience | Empirical | "Reverse Bell" technique, "Super-Sine" unison stacking, Resynthesis of noise samples. |

```

---

## FILE: 04-Reference\01_Official_Links.md

```markdown
# Official Links

*   **Plugin Manual:** [Image-Line Ogun](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Ogun.htm)
*   **Related Plugin:** [Autogun Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Autogun.htm)
*   **Showcase:** [Ogun Demo Songs](https://www.youtube.com/results?search_query=ogun+fl+studio+demo)

```

---

## FILE: 04-Reference\02_Coverage_Checklist.md

```markdown
# Coverage Checklist

## Learning
- [x] Mental Model (Metallic Sculptor)
- [x] UI Map (Timbre, Impulse, Richness)
- [x] Core Techniques (Resynthesis, Super-Sine)
- [x] Vibe Translation (5 Vibes Mapped)

## Data
- [x] Parameters (Richness, Met, Unison)
- [x] Presets Strategy (Mining Autogun)
- [x] Rules (CPU management, EQ cuts)

## Workflows
- [x] Quick Texture
- [x] Sound Design (Bell Physics)
- [x] Mix Control (Transient/Stereo)
- [x] Moody Vibe
- [x] Upbeat Vibe
- [x] Psych Vibe
- [x] Jazzy Vibe
- [x] Vibey Vibe
- [x] Bass/Pluck/FX Recipes

## Reference
- [x] Sources
- [x] Links
- [x] Style Board

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Hip-Hop & R&B

How Ogun defines the sound of modern genres.

## 1. The "UK Drill" Sliding Bass/Bell
*   **Signature:** Dissonant, gliding, metallic.
*   **Recipe:** Ogun Bell preset (high Metallic) + Portamento slide. The inharmonic frequencies interact with the slide to create a queasy, dark feeling.

## 2. The "Hyperpop" Ear Candy
*   **Signature:** Extremely bright, glass-shattering clicks.
*   **Recipe:** High **Impulse** settings. Short decays. Arpeggios running at 1/32 speed. It fills the high-end spectrum completely.

## 3. The "Cinematic" Tension
*   **Signature:** Evolving metallic drones (Horror styling).
*   **Recipe:** Low Richness, High Reverb. Automate the **Timbre** shape slowly (Morphing). Used in intros for artists like Travis Scott or 21 Savage.

## 4. The "FM" Alternative
*   **Signature:** Cold, digital keys (80s vibe).
*   **Recipe:** Unlike Sytrus (FM), Ogun creates these sounds by physically drawing the harmonic series. It sounds "cleaner" and more stable than FM synthesis, perfect for layering under warm pianos.

```

---

