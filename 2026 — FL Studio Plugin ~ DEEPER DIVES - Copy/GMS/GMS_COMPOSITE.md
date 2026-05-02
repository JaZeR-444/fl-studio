# GMS - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# GMS - Groove Machine Synth

`\`\`
 ██████╗ ███╗   ███╗███████╗
██╔════╝ ████╗ ████║██╔════╝
██║  ███╗██╔████╔██║███████╗
██║   ██║██║╚██╔╝██║╚════██║
╚██████╔╝██║ ╚═╝ ██║███████║
 ╚═════╝ ╚═╝     ╚═╝╚══════╝
`\`\`

**Plugin Type:** Hybrid Wavetable Synthesizer
**Category:** Generator / EDM / Modern
**Official Manual:** [Image-Line GMS Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm)

---

## 🎯 What is GMS?

Groove Machine Synth (GMS) is a powerful, flexible hybrid synthesizer designed for modern electronic music (EDM, Trap, Pop). It is a wavetable synth that combines **Subtractive**, **FM**, and **Ring Modulation** synthesis. It is famous for its "fat" unison sounds, extensive built-in effects rack, and its availability across both Desktop and FL Studio Mobile platforms.

**Key Capabilities:**
- **Triple Oscillator Engine:** 3 independent oscillators with custom waveshapes.
- **Hybrid Synthesis:** Supports FM, RM, Sync, and standard Subtractive modes.
- **Advanced Unisono:** Create thick, detuned chorus-like textures with stereo spread.
- **10 Integrated FX:** Distortion, Bit-crush, Flange, Phaser, Delays, and a Trance Gate.
- **Modulation Matrix:** Deep routing of LFOs and Envelopes to cutoff, pitch, and more.
- **Step Sequencer:** Built-in tool for creating rhythmic grooves and movement.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **gms-oscillator-logic.md** (FM vs RM switches)
3. Create **parameter-cheat-sheet.md**
4. Load the "Leads" category and move the "Unisono" slider to hear the width.

### For EDM Producers:
1. Study **creating-modern-supersaws.md**
2. Review **trance-gate-modulation.md**
3. Learn **bass-synthesis-via-fm.md**

### For Mobile Users:
1. Study **gms-mobile-to-desktop-workflow.md**
2. Review **touch-optimized-parameter-tweaking.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Osc Selectors:** Wave shapes and semi-tones.
  - **Filter:** Type (12/24dB), Cutoff, Res.
  - **Unisono:** Voice count and spread.
  - **FX Rack:** The 10 available modules.
  - **Modulation Matrix:** Source/Target routing.

- [ ] **gms-synthesis-modes.md**
  - Explaining the interaction between Osc 1, 2, and 3 (Sync, FM, RM).

#### 02-Data/parameters/
- [ ] **gms-specs.json**
  `\`\`json
  {
    "plugin_name": "GMS",
    "oscillators": 3,
    "unison_max": 8,
    "effects": 10
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-modern-supersaws.md**
  - Selecting Saw waves for all 3 oscillators.
  - Maxing Unisono voices.
  - Adding built-in Chorus and Reverb.

- [ ] **aggressive-fm-leads.md**
  - Using the Modulation section to enable FM.
  - Detuning modulators for metallic grit.
  - Adding "Crush" effect from the rack.

- [ ] **rhythmic-trance-gates.md**
  - Enabling the "Gate" effect.
  - Using the Step Sequencer to automate cutoff.

#### 03-Workflows/by-context/
- [ ] **trap-bassline-design.md**
- [ ] **evolving-pad-modulation.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **gms-matrix-routing-list.md**
  - Definitive list of all sources (Velocity, LFO, Env) and their targets.

---

## 🔬 Research Framework

### Phase 1: Oscillator Interaction (Week 1)
**Goal:** Hybrid Tones

**Tasks:**
1. Initialize a patch
2. Test "Sync" mode between Osc 1 and 2
3. Compare FM mode vs RM mode
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I load a custom wavetable?
- Can I use Osc 3 as a sub?

### Phase 2: The FX Rack (Week 2)
**Goal:** The Final Polish

**Tasks:**
1. Test all 10 FX modules
2. Verify the signal flow order (Does Distortion come before Reverb?)
3. Create rhythmic-trance-gates.md

---

## 📊 Plugin Specifications to Document

### Engine
- Polyphony Notes
- Wavetable Resolution

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the filter not reacting? (Check the Env/LFO amount in the modulation section).
2. How to share a patch with the mobile version? (Check .gms file compatibility).

---

## 🔗 Cross-Reference with Other Plugins

GMS is often used with:
- **Fruity Peak Controller** (External modulation)
- **FL Studio Mobile** (The companion platform)

---

## 📦 File Structure Summary

`\`\`
GMS/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── gms-synthesis-modes.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── gms-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-modern-supersaws.md
│   │   └── rhythmic-trance-gates.md
│
└── 04-Reference/
    └── gms-matrix-routing-list.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [GMS Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm)
- [GMS Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/GMS_tutorials.htm)
- [GMS Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+gms+tutorial)

### Community Resources
- [GMS Subreddit](https://www.reddit.com/r/FL_Studio/search?q=gms&restrict_sr=1)
- [GMS User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [GMS Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Wavetable Synthesis Fundamentals" - Understanding wavetable synthesis
- "Hybrid Synthesis Techniques" - Combining different synthesis methods
- "EDM Sound Design" - Creating modern electronic music sounds

### Advanced Techniques
- **Unisono Mastery:** Understanding the advanced unison feature
- **FM Synthesis:** Mastering frequency modulation in GMS
- **Matrix Routing:** Advanced modulation matrix techniques

---

## 📚 In-Depth Technical Analysis

### Hybrid Synthesis Architecture
GMS implements sophisticated hybrid synthesis combining multiple synthesis methods:
- **Wavetable Oscillators:** Three independent wavetable oscillators
- **FM Synthesis:** Frequency modulation capabilities
- **Ring Modulation:** Amplitude-based modulation
- **Sync Capabilities:** Hard sync between oscillators
- **Subtractive Processing:** Traditional filter-based processing

### Oscillator System
The triple oscillator architecture features:
- **Oscillator 1:** Primary oscillator with wavetable selection
- **Oscillator 2:** Secondary oscillator with detune capabilities
- **Oscillator 3:** Tertiary oscillator with independent controls
- **Oscillator Interaction:** Sync, FM, and RM capabilities between oscillators
- **Waveform Selection:** Extensive wavetable library with custom shapes

### Unisono System
The advanced unison system provides:
- **Voice Count:** Up to 8 unison voices (configurable)
- **Detune Control:** Independent detuning for each voice
- **Stereo Spread:** Spatial distribution of unison voices
- **Phase Randomization:** Phase variation for natural chorus effect
- **CPU Management:** Efficient processing of multiple voices

### Filter Architecture
The filter system includes multiple types:
- **12dB Filter:** Gentle 2-pole filter response
- **24dB Filter:** Steep 4-pole filter response
- **Cutoff Control:** Frequency boundary adjustment
- **Resonance Control:** Emphasis at cutoff frequency
- **Filter Envelopes:** ADSR control over filter parameters

### Effects Rack
The integrated effects system includes:
- **Distortion:** Harmonic saturation and overdrive
- **Bit-crush:** Digital degradation and aliasing
- **Flanger:** Jet-like sweeping effects
- **Phaser:** Phase shifting effects
- **Delays:** Multiple delay types
- **Trance Gate:** Rhythmic gating effects
- **Reverb:** Spatial effects
- **Chorus:** Width and thickness enhancement
- **Other Effects:** Additional processing modules

### Modulation Matrix
The comprehensive modulation system features:
- **Multiple Sources:** LFOs, Envelopes, Velocity, Aftertouch
- **Multiple Targets:** Pitch, Filter, Amplitude, Pan, and more
- **Depth Control:** Bipolar modulation depth adjustment
- **Routing Flexibility:** Complex modulation routing possibilities
- **Real-time Processing:** Immediate response to modulation changes

### Step Sequencer Integration
The built-in step sequencer provides:
- **Pattern Creation:** Rhythmic pattern generation
- **Parameter Automation:** Step-based parameter changes
- **Sync Capabilities:** Tempo synchronization
- **Variation Control:** Pattern variation and evolution
- **Real-time Control:** Live pattern manipulation

## 🎛️ Parameter Deep Dive

### Oscillator Controls
- **Oscillator 1 Settings:**
  - **Waveform Selection:** Choose from extensive wavetable library
    - Range: Various waveforms (saw, square, sine, custom, etc.)
    - Effect: Changes harmonic content of oscillator
    - Use for: Different tonal characteristics
    - Pro tip: Use sawtooth for supersaw sounds
  - **Behavior:**
    - Different waveforms have different harmonic content
    - Some waveforms work better for specific applications
    - Pro tip: Experiment with custom waveforms for unique sounds
  - **Applications:**
    - Lead sounds: Use bright waveforms for cutting leads
    - Bass sounds: Use rich harmonic waveforms for bass
    - Pad sounds: Use smooth waveforms for pads
    - Creative sounds: Use unusual waveforms for unique textures
    - Pro tip: Combine with other oscillators for complex sounds

### Oscillator 2 Controls
- **Function:** Secondary oscillator with detune capabilities
  - Range: 0-100% detune (typically)
  - Effect: Adds thickness and movement to the sound
  - Use for: Creating chorus-like effects
  - Pro tip: Use for supersaw and unison effects
- **Behavior:**
  - 0%: Perfectly in tune with Osc 1
  - Low values: Subtle detune for thickness
  - High values: Noticeable detune for movement
  - Pro tip: Use moderate values for natural thickness
- **Applications:**
  - Thickness: Low values for subtle thickening
  - Movement: Moderate values for natural movement
  - Chorus effect: Moderate values for chorus-like effect
  - Creative detune: High values for unique effects
  - Pro tip: Use with unison for maximum thickness

### Oscillator 3 Controls
- **Function:** Tertiary oscillator with independent controls
  - Range: Various waveforms and settings
  - Effect: Adds additional harmonic content
  - Use for: Sub-bass or harmonic enhancement
  - Pro tip: Use for sub-bass or additional harmonics
- **Behavior:**
  - Can be used as sub-oscillator for low-end
  - Can add harmonic complexity to the sound
  - Pro tip: Use for low-end enhancement
- **Applications:**
  - Sub-bass: Use for low-end foundation
  - Harmonic enhancement: Add complexity to sounds
  - Creative addition: Use for unique harmonic content
  - Texture addition: Add harmonic texture
  - Pro tip: Use for low-end or harmonic enhancement

### Unisono Controls
- **Voice Count:** Number of unison voices
  - Range: 1-8 voices (typically)
  - Effect: Determines thickness of the sound
  - Use for: Creating chorus-like effects
  - Pro tip: Higher values create thicker sounds
- **Behavior:**
  - 1 voice: Single oscillator sound
  - 2-4 voices: Moderate thickness
  - 5-8 voices: Maximum thickness
  - Pro tip: Use 4-6 voices for supersaw sounds
- **Spread Control:** Stereo distribution of voices
  - Range: 0-100% (typically)
  - Effect: Controls stereo width of unison voices
  - Use for: Creating stereo width
  - Pro tip: Higher values create wider stereo image
- **Detune Control:** Detuning of unison voices
  - Range: 0-100% (typically)
  - Effect: Controls how much voices are detuned
  - Use for: Creating chorus-like effects
  - Pro tip: Higher values create more chorusing effect

### Filter Controls
- **Filter Type Selection:**
  - **12dB Filter:** Gentle 2-pole response
    - Effect: Smooth, musical filtering
    - Use for: Gentle tone shaping
    - Pro tip: Use for musical filtering
  - **24dB Filter:** Steep 4-pole response
    - Effect: Aggressive, steep filtering
    - Use for: Precise frequency control
    - Pro tip: Use for aggressive filtering
- **Cutoff Control:**
  - **Function:** Frequency boundary adjustment
    - Range: 20Hz to 20kHz (typically)
    - Effect: Determines which frequencies pass through
    - Use for: Tone shaping and brightness control
    - Pro tip: Use for fundamental tone control
  - **Behavior:**
    - Low values: Dark, muffled sound
    - High values: Bright, open sound
    - Pro tip: Use for tonal shaping
  - **Applications:**
    - Dark sounds: Low values for muffled tones
    - Bright sounds: High values for open tones
    - Tonal shaping: Variable values for tone control
    - Creative effects: Extreme values for unique sounds
    - Pro tip: Use for fundamental tone control

### Resonance Control
- **Function:** Emphasis at cutoff frequency
  - Range: 0-100% (typically)
  - Effect: Creates peak at cutoff frequency
  - Use for: Adding character and emphasis
  - Pro tip: High values can cause self-oscillation
- **Behavior:**
  - 0%: No emphasis, smooth rolloff
  - Medium: Gentle peak at cutoff
  - High: Strong peak, possible self-oscillation
  - Pro tip: Creates "acid" squelch sounds at high values
- **Applications:**
  - Acid sounds: High values for classic acid tones
  - Character addition: Medium values for gentle enhancement
  - Self-oscillation: Maximum values for sine generation
  - Creative effects: Variable values for unique effects
  - Pro tip: Use with sawtooth waves for classic acid sounds

### Effects Rack Controls
- **Distortion Module:**
  - **Function:** Harmonic saturation and overdrive
    - Range: 0-100% drive (typically)
    - Effect: Adds harmonic content and grit
    - Use for: Adding character and warmth
    - Pro tip: Use for adding harmonic complexity
  - **Behavior:**
    - Low values: Subtle saturation
    - High values: Heavy distortion
    - Pro tip: Use with filtering to tame harshness
  - **Applications:**
    - Subtle warmth: Low values for gentle saturation
    - Heavy distortion: High values for aggressive effects
    - Character addition: Medium values for enhancement
    - Creative effects: Extreme values for unique textures
    - Pro tip: Use with filtering to prevent harshness

- **Bit-crush Module:**
  - **Function:** Digital degradation and aliasing
    - Range: 0-100% (typically)
    - Effect: Reduces bit depth and sample rate
    - Use for: Creating lo-fi and digital artifacts
    - Pro tip: Use for retro and lo-fi effects
  - **Behavior:**
    - Low values: Minimal degradation
    - High values: Extreme digital artifacts
    - Pro tip: Use for lo-fi and retro sounds
  - **Applications:**
    - Lo-fi effects: High values for digital degradation
    - Retro sounds: Medium values for vintage character
    - Creative artifacts: Extreme values for unique effects
    - Texture addition: Variable values for character
    - Pro tip: Use for authentic lo-fi sounds

- **Trance Gate Module:**
  - **Function:** Rhythmic gating effects
    - Range: Various rhythmic settings
    - Effect: Creates rhythmic volume patterns
    - Use for: Creating trance-style gating
    - Pro tip: Essential for trance and electronic music
  - **Behavior:**
    - Creates rhythmic on/off patterns
    - Syncs to project tempo
    - Pro tip: Use for rhythmic interest
  - **Applications:**
    - Trance gates: For classic trance patterns
    - Rhythmic effects: For rhythmic interest
    - Creative gating: For unique rhythmic effects
    - Energy management: For track energy
    - Pro tip: Use for electronic music rhythmic effects

### Modulation Matrix Controls
- **LFO Sources:**
  - **Rate:** Speed of modulation
    - Range: Various speeds (Hz or tempo-synced)
    - Effect: Controls modulation speed
    - Use for: Setting rhythmic or smooth modulation
    - Pro tip: Sync to tempo for rhythmic effects
  - **Depth:** Intensity of modulation
    - Range: Negative to positive values
    - Effect: Controls modulation amount
    - Use for: Setting modulation intensity
    - Pro tip: Use for expressive modulation
  - **Waveform:** Shape of modulation
    - Options: Sine, Triangle, Square, Saw, Random
    - Effect: Changes modulation character
    - Use for: Different modulation textures
    - Pro tip: Use for different expression types

- **Envelope Sources:**
  - **ADSR Envelopes:** Amplitude and filter envelopes
    - Attack: Time to reach peak
    - Decay: Time to reach sustain
    - Sustain: Level during note hold
    - Release: Time to fade after note release
    - Pro tip: Use for dynamic expression

- **Targets:**
  - **Pitch:** Modulates oscillator pitch
  - **Filter:** Modulates filter cutoff
  - **Amplitude:** Modulates volume
  - **Pan:** Modulates stereo position
  - **Other Parameters:** Various other parameters
  - Pro tip: Use for comprehensive modulation

## 🎼 Sound Design Applications

### EDM Sound Design
Using GMS for electronic dance music production:

**Supersaw Creation:**
- **Classic Setup:** Creating the iconic supersaw sound
  - Use sawtooth waveforms for all oscillators
  - Apply high unisono settings (6-8 voices)
  - Add subtle detune and spread
  - Essential for trance and EDM music
  - Perfect for lead sounds
  - Pro tip: Use chorus effect for additional thickness

**Bass Design:**
- **EDM Basses:** Creating powerful bass sounds
  - Use rich harmonic waveforms
  - Apply appropriate filter settings
  - Use unisono for thickness
  - Essential for electronic music
  - Perfect for powerful basslines
  - Pro tip: Use sub-oscillator for low-end foundation

**Lead Sounds:**
- **Cutting Leads:** Creating leads that cut through mixes
  - Use bright waveforms with harmonic content
  - Apply appropriate filtering for clarity
  - Use effects for character
  - Essential for electronic music
  - Perfect for melodic elements
  - Pro tip: Use unisono for thickness without harshness

### Trap and Hip-Hop Applications
Using GMS for urban music production:

**808-Style Bass:**
- **Sub-Bass Creation:** Creating deep, powerful bass
  - Use oscillator 3 as sub-oscillator
  - Apply low-pass filtering
  - Use appropriate unisono settings
  - Essential for trap and hip-hop
  - Perfect for 808-style sounds
  - Pro tip: Use for sub-bass foundation

**Melodic Elements:**
- **Chord Sounds:** Creating melodic chord progressions
  - Use bright, rich waveforms
  - Apply appropriate effects processing
  - Use unisono for thickness
  - Essential for trap and R&B
  - Perfect for melodic hooks
  - Pro tip: Use for catchy melodic elements

**Percussive Elements:**
- **Synthetic Percussion:** Creating synthetic drum sounds
  - Use bright waveforms with fast envelopes
  - Apply appropriate filtering
  - Use effects for character
  - Essential for electronic drums
  - Perfect for synthetic percussion
  - Pro tip: Use for unique percussive elements

### Creative Applications
Using GMS for experimental applications:

**FM Synthesis:**
- **Metallic Tones:** Creating bell-like and metallic sounds
  - Use FM synthesis mode for harmonic complexity
  - Apply appropriate modulation settings
  - Use effects for enhancement
  - Perfect for experimental music
  - Essential for complex harmonic generation
  - Useful for bell-like textures

**Ring Modulation:**
- **Harsh Textures:** Creating harsh, inharmonic sounds
  - Use ring modulation for inharmonic content
  - Apply appropriate carrier settings
  - Use effects for enhancement
  - Perfect for experimental music
  - Essential for harsh textures
  - Useful for industrial sounds

**Sync Effects:**
- **Harsh Distortion:** Creating sync-based distortion
  - Use hard sync for harsh harmonic content
  - Apply appropriate oscillator settings
  - Use effects for enhancement
  - Perfect for aggressive sounds
  - Essential for sync-based distortion
  - Useful for harsh textures

## 🧪 Experimental Techniques

### Advanced Synthesis Applications
Creative uses of GMS's hybrid capabilities:

**FM Synthesis Experiments:**
- **Complex Harmonic Generation:** Creating rich harmonic content
  - Use multiple operators for complex sounds
  - Apply different modulation ratios
  - Perfect for bell-like sounds
  - Essential for complex harmonic structures
  - Useful for metallic textures

**Wavetable Morphing:**
- **Shape Evolution:** Creating evolving wavetable sounds
  - Use automation to morph between waveforms
  - Create evolving harmonic content
  - Perfect for evolving textures
  - Essential for dynamic sound design
  - Useful for atmospheric sounds

**Unisono Manipulation:**
- **Advanced Unisono Techniques:** Using unisono for creative effects
  - Create evolving unisono patterns
  - Use automation for dynamic unisono
  - Perfect for evolving thickness
  - Essential for dynamic expression
  - Useful for evolving textures

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Complex Automation:** Creating evolving parameter patterns
  - Create evolving sound characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic sound expression
  - Use for expressive control

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

### Synthesis Workflows
Efficient approaches to using GMS for synthesis:

**Lead Design:**
- **Supersaw Creation:** Creating thick lead sounds
  - Use sawtooth waveforms with unisono
  - Apply appropriate effects processing
  - Essential for EDM leads
  - Pro tip: Use chorus effect for additional thickness

- **FM Lead Design:** Creating metallic lead sounds
  - Use FM synthesis for harmonic complexity
  - Apply appropriate modulation settings
  - Essential for complex leads
  - Pro tip: Use for bell-like lead sounds

**Bass Design:**
- **EDM Bass Creation:** Creating powerful bass sounds
  - Use rich harmonic waveforms
  - Apply appropriate unisono settings
  - Essential for electronic music
  - Pro tip: Use sub-oscillator for low-end foundation

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
- **Supersaw Leads:** Creating iconic trance lead sounds
- **Bass Enhancement:** Creating powerful basslines
- **Rhythmic Effects:** Creating rhythmic patterns with internal sequencer
- **Energy Management:** Using synthesis for track energy
- **Build-up Effects:** Creating tension with automation

### Hip-Hop and R&B
- **Melodic Elements:** Creating catchy melodic hooks
- **Bass Design:** Creating 808-style bass sounds
- **Pad Sounds:** Creating atmospheric pad sounds
- **Mix Enhancement:** Using synthesis for mix clarity
- **Creative Effects:** Adding unique character to elements

### Rock and Metal
- **Synthetic Elements:** Adding synthetic elements to rock music
- **Guitar Enhancement:** Creating synthetic guitar sounds
- **Bass Enhancement:** Creating synthetic bass elements
- **Mix Enhancement:** Using synthesis for mix clarity
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Synthesis:** Creating evolving textures
- **Spatial Effects:** Advanced spatial parameter control
- **Experimental Synthesis:** Pushing boundaries of synthesis
- [ ] Design a modern EDM lead using FM and Unison simultaneously
- [ ] Program an evolving rhythmic sequence using the internal step sequencer
- [ ] Successfully transfer a GMS patch from a PC to a mobile device
- [ ] Demonstrate the effect of all 10 internal FX on a single sound
- [ ] Create a supersaw lead with proper unisono settings
- [ ] Use FM synthesis to create bell-like textures
- [ ] Apply appropriate filter settings for different musical genres
- [ ] Use the modulation matrix for complex parameter control
- [ ] Create a trap-style 808 with sub-oscillator enhancement
- [ ] Troubleshoot harshness and aliasing issues effectively
- [ ] Integrate GMS into efficient synthesis workflows
- [ ] Create genre-specific patches optimized for different musical styles
- [ ] Optimize GMS settings for minimal CPU usage with unisono
- [ ] Use GMS for creative sound design applications
- [ ] Set up advanced synthesis routing for complex projects
- [ ] Apply GMS in live performance scenarios
- [ ] Create experimental sounds with extreme parameter settings
- [ ] Combine GMS with other effects for layered processing
- [ ] Integrate GMS with other automation tools seamlessly
- [ ] Create custom synthesis workflows for specific creative needs
- [ ] Use GMS effectively in large, complex projects
- [ ] Generate complex rhythmic patterns with internal sequencer
- [ ] Create hybrid synthesis patches combining different synthesis methods
- [ ] Apply GMS in mastering contexts with appropriate care
- [ ] Create complex multi-stage synthesis chains with smooth automation
- [ ] Design custom wavetable morphing patches for evolving sounds
- [ ] Use GMS for creative vocal processing applications
- [ ] Apply advanced unisono techniques for thickness control
- [ ] Create genre-specific preset libraries for efficient workflow
- [ ] Integrate GMS with external hardware for hybrid processing
- [ ] Use GMS for audio restoration and creative repair applications
- [ ] Combine GMS with other spectral processing tools
- [ ] Apply GMS in surround sound or multi-channel setups
- [ ] Create complex harmonic relationships using multiple oscillators
- [ ] Use GMS for creative instrumental processing applications
- [ ] Integrate GMS with other automation tools for complex control
- [ ] Create complex atmospheric textures using multiple parameters
- [ ] Design custom FM algorithms for unique harmonic structures
- [ ] Apply advanced filtering techniques for tone shaping
- [ ] Use GMS for creative stereo enhancement beyond traditional methods
- [ ] Combine GMS with convolution for hybrid synthesis
- [ ] Implement advanced envelope shaping for dynamic expression
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use GMS for creative sound design in film and game audio
- [ ] Apply GMS in live sound reinforcement scenarios
- [ ] Create experimental synthesis textures using extreme parameter settings
- [ ] Integrate GMS with external synthesizers for complex sound design

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: GMS (Groove Machine Synth)

## The 60-Second Mental Model
GMS is a **Hybrid Wavetable Synthesizer**. It's like a "mini-Serum" built into FL Studio. It uses three oscillators that can perform standard subtractive synthesis (Saw, Square), but also advanced Frequency Modulation (FM) and Ring Modulation (RM). It's famous for having an all-in-one "Workstation" feel with 10 built-in effects and a rhythmic gate. [SRC: IL-MAN]

## Purpose & Identity
*   **Identity:** A versatile, CPU-friendly workhorse for modern electronic sounds.
*   **Where it fits:** It is the "bridge" synth between FL Studio Mobile and Desktop. If you start a beat on your phone using GMS, it will sound identical when you open it on your PC.

## Hip-Hop / R&B Context
*   **The "Mainstream" Lead:** Perfect for those clean, wide, high-energy synth leads found in Drake or Travis Scott tracks.
*   **808 Layers:** Use Oscillator 1 for a clean sub and Oscillator 2 with some FM to add the "grit" that makes 808s cut through.
*   **Modern R&B Pads:** The built-in "Unisono" (up to 8 voices) creates massive, lush stereo width that's perfect for R&B chord progressions.

## When To Use
*   When you need **instant width** (the Unisono is excellent).
*   When you want a synth with a **built-in effects rack** so you don't have to load 5 extra plugins in the mixer.
*   When you are producing on the go using FL Studio Mobile.

## When NOT To Use
*   **Deep Sound Design:** If you need to draw custom wavetables or have 50 modulation slots, use **Serum** or **Sytrus** instead.
*   **Acoustic Emulation:** GMS sounds very "digital" and "electronic." It's not the best choice for a realistic piano or guitar.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: GMS

## UI Tour
1.  **Oscillator Section:** Three slots to pick waveforms.
    *   **Osc 1 & 2:** Main tone generators.
    *   **Osc 3:** Usually used for sub-bass or extra texture.
2.  **Filter Section:** A standard Low-Pass/High-Pass filter with ADSR controls.
3.  **Unisono:** A slider that adds "voices." 1 = Thin, 8 = Massive. [SRC: IL-MAN]
4.  **Modulation Matrix:** Where you connect LFOs and Envelopes to Cutoff, Pitch, etc.
5.  **The Glue (FX):** A row of 10 buttons (Distortion, Flanger, Reverb, etc.).

## Signal Flow
1.  **Oscillators:** The raw sound is generated.
2.  **Interaction:** Osc 2 can modulate Osc 1 (FM/RM/Sync modes).
3.  **Filter:** The sound is shaped by the EQ/Filter.
4.  **Envelopes:** The volume and filter change over time (Attack, Decay, etc.).
5.  **FX Rack:** The sound passes through the enabled effects in a **left-to-right** order.
6.  **Output:** Final stereo signal.

## Synthesis Modes Explained
*   **Sync:** Makes Osc 2 "reset" every time Osc 1 completes a cycle. Creates "screaming" lead tones.
*   **FM (Freq Modulation):** Osc 2 vibrates Osc 1 extremely fast. Creates "metallic" or "bell" sounds.
*   **RM (Ring Modulation):** Multiplies the volumes of Osc 1 and 2. Creates "robotic" or "distorted" tones. [SRC: REPUTABLE]

## Things Beginners Misunderstand
*   **The Effects Order:** You cannot change the order of effects. Reverb is always at the end, and Distortion is usually near the beginning.
*   **Modulation Amount:** If you link an LFO to the Filter, you won't hear anything until you turn up the **Amount** knob in the Modulation section.
*   **CPU:** While GMS is light, using 8-voice Unisono on 5 different tracks can eventually bog down your project. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: GMS

## Moody (Dark, Metallic, Cold)
*   **Production Levers:**
    *   **Synthesis:** Use **FM mode** with a Sine wave modulating a Saw wave.
    *   **Filter:** 24dB Low-Pass Filter at 400Hz.
    *   **FX:** Add a touch of "Crush" (Bitcrush) for digital grit.
*   **Don't Do This:** Avoid bright Supersaws or lush Reverbs; keep it "dry" and "sharp."

## Upbeat (Energetic, Pop, Bright)
*   **Production Levers:**
    *   **Unisono:** Set to 8 voices with 50% spread.
    *   **Oscillators:** Sawtooth waves on all 3 oscillators.
    *   **Filter:** Open the Cutoff to 100%.
    *   **FX:** Enable **Chorus** and **Phaser**.
*   **Don't Do This:** Don't use heavy low-pass filtering.

## Psychedelic (Trippy, Morphing, Glitchy)
*   **Production Revers:**
    *   **Modulation:** Link a slow LFO to the **Osc 2 Pitch**.
    *   **FX:** Enable the **Trance Gate** and set it to a rhythmic pattern.
    *   **Sequence:** Use the internal Step Sequencer to automate the Filter Cutoff.
*   **Don't Do This:** Avoid static, non-moving sounds.

## Jazzy (Neo-Soul, Warm, Smooth)
*   **Production Levers:**
    *   **Oscillators:** A Sine wave on Osc 1 and a soft Square wave on Osc 2.
    *   **Filter:** 12dB Low-Pass with a soft Attack.
    *   **FX:** Just a touch of Reverb and no Distortion.
*   **Don't Do This:** Avoid harsh FM or Sync modes.

## Vibey (R&B, Modern, Lush)
*   **Production Levers:**
    *   **Unisono:** 4-6 voices with high detune.
    *   **Modulation:** Link **Velocity** to the Filter Cutoff so it gets brighter as you play harder.
    *   **FX:** Heavy Reverb and a slow Flanger.
*   **Don't Do This:** Avoid "Thin" sounds; the vibe is in the stereo width. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\fx-rack-signal-flow.md

```markdown
# FX Rack Signal Flow

Understanding the 10 integrated effects and their processing order.

## FX Rack Overview

GMS includes 10 performance-oriented effects applied in series (one after another). The signal flows through each effect sequentially, with the output of one feeding into the next.

[SRC: IL-MAN]

---

## Signal Flow Chain

`\`\`
[Filter Output]
    ↓
[1. DIST] - Distortion
    ↓
[2. CRSH] - Bit Crusher
    ↓
[3. FLNG] - Flanger
    ↓
[4. PHSR] - Phaser
    ↓
[5. LPF] - Low Pass Filter
    ↓
[6. HPF] - High Pass Filter
    ↓
[7. ECHO] - Delay/Echo
    ↓
[8. RVRB] - Reverb
    ↓
[9. PAN] - Auto-Panning
    ↓
[10. TRNC] - Trance Gate
    ↓
[5-Band EQ]
    ↓
[Output]
`\`\`

---

## The 10 FX Modules

### 1. DIST (Distortion)
**Type:** Harmonic saturation/overdrive

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Distortion amount | 0-100% drive |
| **Y** | Low pass filter cutoff | Tames harsh distortion |

**Use for:**
- Adding grit to bass
- Saturating leads
- Creating aggressive textures

**Best practices:**
- Start with low X values (10-30%)
- Use Y to control brightness
- Combine with filtering

---

### 2. CRSH (Bit Crusher)
**Type:** Sample rate/bit depth reduction

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Sample-rate reduction | Higher = more degradation |
| **Y** | Low pass filter cutoff | Smooths aliasing artifacts |

**Use for:**
- Lo-fi effects
- Retro video game sounds
- Digital artifacts

**Best practices:**
- Subtle use: 10-30% X
- Heavy degradation: 50%+ X
- Use Y to control harshness

---

### 3. FLNG (Flanger)
**Type:** Comb filter modulation

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Depth | Modulation intensity |
| **Y** | Feedback | Resonance amount |

**Use for:**
- Jet-plane "sweep" effects
- Thickening sounds
- Psychedelic textures

**Best practices:**
- Moderate depth for subtle thickening
- High feedback for resonant sweeps
- Sync to tempo for rhythmic flanging

---

### 4. PHSR (Phaser)
**Type:** All-pass filter cascade

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Depth | Notch sweep range |
| **Y** | Feedback | Resonance/emphasis |

**Use for:**
- Rotary speaker simulation
- Subtle movement
- 70s-style psychedelic effects

**Best practices:**
- Lower depth than flanger for subtlety
- Y control affects notch sharpness
- Great on pads and guitars

---

### 5. LPF (Low Pass Filter)
**Type:** Post-filter low pass

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Cutoff frequency | Higher = more highs |
| **Y** | Resonance | Emphasis at cutoff |

**Use for:**
- Final tone shaping
- Removing harshness
- Creative filtering after distortion

**Best practices:**
- Use after distortion to tame highs
- Resonance adds "screaming" character
- Automate for filter sweeps

---

### 6. HPF (High Pass Filter)
**Type:** Post-filter high pass

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Cutoff frequency | Higher = less lows |
| **Y** | Resonance | Emphasis at cutoff |

**Use for:**
- Removing unwanted low-end
- Thinning sounds
- Creating telephone/radio effects

**Best practices:**
- Set before reverb to prevent muddy tails
- Use on non-bass elements
- Resonance can add "bite" at cutoff

---

### 7. ECHO (Delay)
**Type:** Feedback delay/echo

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Feedback amount | Echo repetitions |
| **Y** | Echo filtering | Damping/darkening |

**Use for:**
- Rhythmic repeats
- Spatial enhancement
- Dub-style effects

**Best practices:**
- Sync to project tempo
- Use Y to darken echoes (more natural)
- Moderate feedback for subtle depth

---

### 8. RVRB (Reverb)
**Type:** Reverberation/spatial effect

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Feedback | Decay time/room size |
| **Y** | Wet level | Reverb amount |

**Use for:**
- Adding space and depth
- Placing sounds in "rooms"
- Creating atmosphere

**Best practices:**
- Lower Y for subtle space
- Higher X for longer tails
- Use pre-filtering (HPF) to clean reverb input

---

### 9. PAN (Panning)
**Type:** Auto-panning/binaural effect

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Left/Right position | Manual or LFO-controlled |
| **Y** | Binaural effect | Up/Down dimension |

**Use for:**
- Stereo movement
- Ear candy effects
- Creating width and interest

**Best practices:**
- Combine with LFO for automatic panning
- Y adds pseudo-3D positioning
- Subtle movement often better than extreme

---

### 10. TRNC (Trance Gate)
**Type:** Rhythmic gating/pumping

| Parameter | X-Axis | Y-Axis |
|-----------|--------|--------|
| **X** | Release time | Gate fade-out speed |
| **Y** | Drop level | How much volume drops |

**Use for:**
- Side-chain-style pumping
- Trance gating effects
- Rhythmic patterns

**Best practices:**
- Sync to tempo for musical results
- X controls fade smoothness
- Y controls intensity (0% = no effect)

---

## Effect Ordering Strategy

### Why Order Matters
The sequence affects the final sound significantly:

**Distortion before Reverb:**
- Clean reverb tail of distorted sound

**Reverb before Distortion:**
- Distorted reverb tail (more aggressive)

### Common Chains

#### Modern EDM Lead
`\`\`
DIST (light) → LPF (tame) → ECHO (subtle) → RVRB (medium)
`\`\`

#### Trap Bass
`\`\`
DIST (medium) → HPF (clean low-end) → TRNC (sidechain feel)
`\`\`

#### Atmospheric Pad
`\`\`
PHSR (subtle) → ECHO (long) → RVRB (big) → PAN (slow LFO)
`\`\`

---

## LFO Modulation of FX

Each effect's X and Y parameters can be modulated by LFO:

### Setup
1. Select FX (e.g., FLNG)
2. Click "Arm X" or "Arm Y"
3. LFO will now modulate that parameter
4. Adjust LFO RATE, AMOUNT, and SHAPE

### Creative Applications

**Auto-Filter Sweep:**
- Arm LPF X (cutoff)
- Slow LFO rate
- Sine or triangle shape

**Tremolo Echo:**
- Arm ECHO X (feedback)
- Medium rate
- Creates rhythmic intensity changes

**Moving Reverb:**
- Arm PAN X (position)
- Slow rate
- Reverb moves around stereo field

---

## Performance Tips

### 1. Bypass Unneeded FX
- Click effect name to toggle off
- Saves CPU when effects not needed

### 2. Momentary Activation
- Click in X/Y panel during playback
- Temporarily engages effect
- Great for live performance flourishes

### 3. Glue Mode
- Click "GLUE" switch to permanently enable selected effect
- Effect stays active even when not selected

---

## CPU Considerations

### Heavy Effects
- **Reverb:** Most CPU-intensive
- **Delay:** Moderate CPU use
- **Flanger/Phaser:** Light CPU

### Optimization
1. Use only needed effects
2. Disable unused FX slots
3. Freeze channel when sound is finalized

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 01-Learning\Concepts\gms-fundamentals.md

```markdown
Tags: electric | hip-hop/rap | moody

## GMS Learning Concepts

### What Is GMS?

GMS (Groove Machine Synth) is FL Studio's groove-oriented synthesizer designed for creating rhythmic, musical sounds. It combines subtractive synthesis with built-in effects and modulation tailored for modern music production.

### Core Architecture

`\`\`
Oscillators → Mixer → Filter → Envelopes → FX → Output
                         ↓
                  Modulation Matrix
`\`\`

### What Makes GMS Unique

1. **Built-in effects chain** - No need for separate plugins
2. **Groove-focused modulation** - Synced to tempo
3. **User-friendly interface** - Fast sound creation
4. **Mobile-optimized** - Lightweight performance

### Oscillator Personality

| Waveform | Character | Best For |
|----------|-----------|----------|
| Saw | Bright, cutting | Leads, synths |
| Square | Hollow, woody | Bass, keys |
| Sine | Pure, warm | Sub-bass, foundations |
| Noise | Textural | Hi-hats, effects |

### Filter Characteristics

| Type | Cutoff | Resonance | Sound |
|------|--------|-----------|-------|
| Low-pass | Dark→Bright | Adds character | Most sounds |
| High-pass | Removes mud | Thin | Hi-hats, FX |
| Band-pass | Isolated | Nasally | Special effects |

### Modulation Best Practices

1. **Start simple** - Add modulation one at a time
2. **Listen first** - Hear what each modulation does
3. **Sync to tempo** - Musical modulation sounds better
4. **Subtle is better** - Too much = chaotic

### Common GMS Sounds

**Trap Lead:**
1. Saw + Square blend
2. Low-pass filter at 60%
3. Light resonance (25%)
4. Filter envelope modulation
5. Light chorus for width

**Smooth R&B Pad:**
1. Detuned saws
2. Low-pass filter at 68%
3. Minimal resonance
4. Slow attack envelope
5. Reverb + chorus

```

---

## FILE: 01-Learning\Concepts\hybrid-synthesis-architecture.md

```markdown
# Hybrid Synthesis Architecture

Understanding how GMS combines multiple synthesis methods into a unified engine.

## Overview

GMS (Groove Machine Synth) is a **multitimbral hybrid synthesizer** combining three distinct synthesis paradigms:
- **Subtractive Synthesis** - Traditional filtering of rich waveforms
- **FM (Frequency Modulation)** - Complex harmonic generation through frequency modulation
- **RM (Ring Modulation)** - Amplitude modulation creating inharmonic sidebands

[SRC: IL-MAN]

---

## The Three-Layer Architecture

### Layer 1: Oscillator Foundation
Three independent wavetable oscillators provide the raw harmonic content:

`\`\`
OSC 1 (Primary) → Mix Stage
OSC 2 (Secondary) → Mix Stage
OSC 3 (Tertiary) → Mix Stage
        ↓
   Modulation Stage
        ↓
   Filter Stage
        ↓
   FX Rack (10 effects)
        ↓
   5-Band EQ
        ↓
   Output
`\`\`

### Layer 2: Modulation Matrix
Inter-oscillator relationships create hybrid tones:
- **SYNC** - Hard sync for aggressive harmonics
- **FM** - Frequency modulation for metallic/bell tones
- **RM** - Ring modulation for harsh inharmonic textures

### Layer 3: Sound Shaping
- **Multi-mode Filter** (LP/BP/HP) with keyboard tracking
- **Dual Envelope Generators** (EG1, EG2) for complex articulation
- **Dual LFOs** for rhythmic modulation

---

## Synthesis Mode Interactions

### Subtractive Mode (Default)
**Configuration:** All oscillators independent, no modulation
- OSC 1 + OSC 2 + OSC 3 → Mix → Filter
- Classic analog-style synthesis
- Rich, warm tones from layered waveforms

### FM Mode
**Configuration:** OSC 2 → FM → OSC 1
- **Carrier:** OSC 1 (determines fundamental pitch)
- **Modulator:** OSC 2 (adds harmonic complexity)
- **Ratio:** Controlled by AMOUNT parameter
- **Result:** Bell-like, metallic, or complex harmonic tones

**Common FM Ratios:**
- 1:1 - Rich, full sound
- 2:1 - Bell-like harmonics
- 3:1 - Hollow, reed-like tones

### Ring Modulation Mode
**Configuration:** OSC 2 → RM → OSC 1
- Multiplies OSC 1 and OSC 2 amplitudes
- Creates sum and difference frequencies
- **Result:** Inharmonic, metallic, industrial textures

### Sync Mode
**Configuration:** OSC 1 synced to OSC 2 frequency
- OSC 2 determines sync point
- OSC 1 waveform resets at sync frequency
- **Result:** Bright, aggressive "sync sweep" sounds

---

## Hybrid Combinations

### Technique 1: FM + Subtractive
1. Enable FM mode (OSC 2 modulates OSC 1)
2. Add OSC 3 as independent sub-oscillator
3. Apply low-pass filtering
4. **Result:** Complex bass with solid low-end

### Technique 2: RM + Unisono
1. Enable Ring Modulation
2. Set Unisono to 8+ voices
3. Add stereo spread
4. **Result:** Wide, textured soundscapes

### Technique 3: Sync + FX Distortion
1. Enable Sync mode
2. Modulate OSC 2 pitch for sync sweep
3. Add DIST effect
4. **Result:** Aggressive lead sounds

---

## Signal Flow Deep Dive

`\`\`
[MIDI Input]
    ↓
[Pitch Calculation] → Keyboard Tracking → Filter Cutoff
    ↓
[Oscillator Section]
    - OSC 1: Waveshape + Pitch + Fine
    - OSC 2: Waveshape + Pitch + Fine + Phase
    - OSC 3: Waveshape + Pitch + Fine
    ↓
[Modulation Section]
    - SYNC: OSC1 freq controlled by AMOUNT
    - FM: OSC2 modulates OSC1 freq
    - RM: OSC2 multiplies OSC1 amplitude
    ↓
[Mix Section]
    - OSC 1+2 Mix (with Invert option)
    - OSC 3 Mix
    - Noise Mix
    ↓
[Unisono]
    - 1-16 voices
    - Stereo spread
    - Detune
    ↓
[Filter Section]
    - LP/BP/HP types
    - Cutoff + Resonance
    - Keyboard tracking
    ↓
[Envelope Generators]
    - EG1 → Various destinations
    - EG2 → Various destinations
    - Level Envelope (Amplitude)
    ↓
[LFO Section]
    - LFO1 → Various destinations
    - LFO2 → Various destinations
    ↓
[FX Rack] (10 effects in series)
    - DIST → CRSH → FLNG → PHSR → LPF → HPF → ECHO → RVRB → PAN → TRNC
    ↓
[5-Band EQ]
    - 60Hz, 220Hz, 1500Hz, 8000Hz, 12000Hz
    ↓
[Output]
`\`\`

---

## Design Philosophy

GMS bridges vintage and modern synthesis:
- **Vintage elements:** 3-oscillator architecture, analog-style envelopes
- **Modern features:** Wavetable loading, 10 FX, deep modulation matrix
- **Hybrid power:** Cross-platform (FL Studio Desktop + Mobile)

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 01-Learning\Concepts\oscillator-modulation-modes.md

```markdown
# Oscillator Modulation Modes

Deep dive into the three modulation modes that define GMS's hybrid character.

## The MODULATION Section

Located centrally in the Synth panel, the MODULATION section controls how oscillators interact:

| Mode | Full Name | Effect | Use Case |
|------|-----------|--------|----------|
| **1 SYNC** | Hard Synchronization | Aggressive harmonic sweep | Leads, basses |
| **2 to 1 FM** | Frequency Modulation | Complex harmonic content | Bells, metals, EDM leads |
| **2 to 1 RM** | Ring Modulation | Inharmonic sidebands | Industrial, sci-fi textures |

[SRC: IL-MAN]

---

## Mode 1: Hard Sync (1 SYNC)

### How It Works
- OSC 1 waveform resets whenever OSC 2 completes a cycle
- AMOUNT controls the sync ratio/frequency relationship
- Higher AMOUNT = more aggressive sync effect

### Sound Character
- **Low amount:** Subtle brightening
- **Medium amount:** Classic "sync sweep" sound
- **High amount:** Aggressive, distorted harmonics

### Practical Applications

#### Sync Sweep Bass
1. Select SYNC mode
2. OSC 1: Sawtooth wave
3. OSC 2: Sawtooth wave, pitched up 1 octave
4. Set AMOUNT to 30-50%
5. Modulate OSC 2 pitch with envelope
6. **Result:** Classic evolving bass

#### Aggressive Lead
1. Select SYNC mode
2. Both oscillators: Sawtooth
3. High AMOUNT (70-90%)
4. Add DIST effect
5. **Result:** Cutting lead for EDM/trap

---

## Mode 2: Frequency Modulation (2 to 1 FM)

### How It Works
- OSC 2 acts as modulator, OSC 1 as carrier
- OSC 2's amplitude controls OSC 1's frequency deviation
- AMOUNT sets modulation depth

### FM Mathematics
When OSC 2 modulates OSC 1:
- **Carrier:** OSC 1 (base frequency)
- **Modulator:** OSC 2 (creates sidebands)
- **Sidebands:** f_carrier ± (n × f_modulator)

### Harmonic Ratios Guide

| OSC 2 Pitch | Ratio | Resulting Character |
|-------------|-------|---------------------|
| Same as OSC 1 | 1:1 | Rich, dense harmonics |
| +12 semitones | 2:1 | Bell-like, hollow |
| +19 semitones | 3:1 | Reed-like, hollow |
| +24 semitones | 4:1 | Bright, metallic |
| +28 semitones | 5:1 | Brass-like |

### Practical Applications

#### FM Bass (808-style)
1. Enable FM mode
2. OSC 1: Sine wave (low octave)
3. OSC 2: Sine wave (+12 or +19 semitones)
4. AMOUNT: 40-60%
5. Low cutoff filter
6. **Result:** Subby FM bass with character

#### Metallic Lead
1. Enable FM mode
2. OSC 1: Sawtooth
3. OSC 2: Square wave (+12 semitones)
4. High AMOUNT (60-80%)
5. Filter with medium resonance
6. **Result:** Bright, cutting FM lead

#### Bell/Pluck
1. Enable FM mode
2. OSC 1: Sine
3. OSC 2: Sine (+24 semitones)
4. AMOUNT: 50-70%
5. Fast envelope (short decay)
6. **Result:** Bell-like pluck sound

---

## Mode 3: Ring Modulation (2 to 1 RM)

### How It Works
- OSC 1 and OSC 2 amplitudes are multiplied
- Output = (OSC 1) × (OSC 2)
- Creates sum and difference frequencies

### Ring Modulation Math
- **Sum frequencies:** f_osc1 + f_osc2
- **Difference frequencies:** |f_osc1 - f_osc2|
- Often inharmonic (not musically related)

### Sound Character
- Metallic, bell-like when harmonically related
- Industrial, harsh when inharmonic
- Excellent for sci-fi and experimental sounds

### Practical Applications

#### Sci-Fi Texture
1. Enable RM mode
2. OSC 1: Complex waveform
3. OSC 2: Detuned slightly (+2 to +7 semitones)
4. AMOUNT: 60-100%
5. **Result:** Alien, robotic texture

#### Metallic Percussion
1. Enable RM mode
2. OSC 1: Short envelope, noise-like wave
3. OSC 2: Higher pitch
4. Fast attack, short decay
5. **Result:** Bell/cowbell alternative

#### Bass Enhancement
1. Enable RM mode (subtle)
2. OSC 1: Standard bass wave
3. OSC 2: Sub-octave
4. Low AMOUNT (20-40%)
5. **Result:** Added grit and edge to bass

---

## Choosing the Right Mode

| Musical Goal | Recommended Mode | Why |
|--------------|------------------|-----|
| Classic analog bass | Subtractive (no modulation) | Clean, warm tone |
| Aggressive lead | SYNC | Bright, cutting harmonics |
| Complex EDM lead | FM | Rich harmonic content |
| Experimental textures | RM | Inharmonic character |
| 808-style sub bass | FM | Harmonic depth in low end |
| Bell/pluck sounds | FM | Natural bell harmonics |
| Industrial bass | RM | Grit and aggression |

---

## Advanced: Combining with OSC 3

Even when using modulation on OSC 1+2, OSC 3 remains independent:

### FM + Sub Configuration
`\`\`
OSC 1 (Carrier) ← FM ← OSC 2 (Modulator)
        ↓
      Mix ← OSC 3 (Sub-oscillator)
        ↓
     Filter
`\`\`

**Setup:**
1. Enable FM mode
2. Configure FM relationship (OSC 2 → OSC 1)
3. Set OSC 3 to sine wave, -12 or -24 semitones
4. Mix in OSC 3 for low-end foundation

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 01-Learning\Concepts\unisono-system-deep-dive.md

```markdown
# Unisono System Deep Dive

Mastering GMS's advanced unisono for thick, professional sounds.

## What is Unisono?

Unisono creates multiple detuned voices per note for a chorus-like effect. GMS supports **1-16 voices** (unison voices), each with independent detuning and stereo positioning.

[SRC: IL-MAN]

---

## Unisono Controls

| Parameter | Range | Function |
|-----------|-------|----------|
| **VOICES** | 1-16 | Number of unison voices per note |
| **STEREO** | 0-100% | Stereo spread of voices across L/R field |
| **DETUNE** | 0-100% | Amount of pitch variation between voices |
| **PHASE** | 0-360° | Starting phase offset for voice alignment |

---

## How Unisono Works

### Voice Generation
When you play a note with unisono enabled:

`\`\`
Note On
    ↓
Generate 1-16 identical voices
    ↓
Apply detune to each voice (±DETUNE amount)
    ↓
Pan voices across stereo field (based on STEREO setting)
    ↓
Randomize phase (if PHASE enabled)
    ↓
Mix all voices → Filter → FX
`\`\`

### The Science of Thickness
- **1 voice:** Single, focused sound
- **2-4 voices:** Noticeable thickening, subtle movement
- **5-8 voices:** Rich chorus effect, wide stereo image
- **9-16 voices:** Maximum thickness, significant CPU usage

---

## Voice Count Guidelines

### CPU vs. Quality Trade-off
More voices = richer sound but higher CPU usage.

| Voice Count | CPU Load | Best For |
|-------------|----------|----------|
| **1** | Minimal | Monophonic leads, precise bass |
| **2-3** | Low | Subtle thickening, background elements |
| **4-6** | Medium | Supersaws, modern leads, standard pads |
| **7-10** | High | Professional EDM sounds, rich textures |
| **11-16** | Very High | Maximum impact, final renders, freezing recommended |

### Recommended Settings by Application

#### Supersaw Leads
- **VOICES:** 6-8
- **STEREO:** 60-80%
- **DETUNE:** 40-60%
- **Result:** Classic trance/EDM supersaw thickness

#### Modern Trap Leads
- **VOICES:** 4-6
- **STEREO:** 40-60%
- **DETUNE:** 30-50%
- **Result:** Wide but focused lead sound

#### Bass Sounds
- **VOICES:** 1-3
- **STEREO:** 0-20%
- **DETUNE:** 10-30%
- **Result:** Thick but mono-compatible low-end

#### Atmospheric Pads
- **VOICES:** 8-12
- **STEREO:** 80-100%
- **DETUNE:** 50-70%
- **Result:** Lush, evolving textures

#### Plucks/Arps
- **VOICES:** 2-4
- **STEREO:** 30-50%
- **DETUNE:** 20-40%
- **Result:** Tight but lively transients

---

## Stereo Spread Strategies

### Mono Bass (STEREO: 0%)
- Essential for kick drums and sub-bass
- Prevents phase cancellation in mono playback
- Maintains low-end power on club systems

### Narrow Spread (STEREO: 20-40%)
- Good for supporting elements
- Subtle width without overwhelming
- Mixes well with wide elements

### Medium Spread (STEREO: 50-70%)
- Standard for most lead sounds
- Clear stereo image
- Professional width

### Wide Spread (STEREO: 80-100%)
- Maximum stereo field
- Great for pads and effects
- Can create "big" sound easily
- May cause phase issues if overused

---

## Detune Amount Guide

### Subtle Detune (10-30%)
- Nearly imperceptible pitch variation
- Natural analog-style warmth
- Use for: Bass, tight leads

### Moderate Detune (40-60%)
- Clear chorusing effect
- Standard for supersaws
- Balanced movement and stability

### Heavy Detune (70-100%)
- Maximum pitch variation
- Very obvious chorus effect
- Can sound out of tune if too extreme
- Use for: Special effects, experimental

---

## Phase and Retrigger

### PHASE Control
Sets the starting phase for unison voices:
- **0°:** All voices start together (focused attack)
- **Scattered:** Randomized phase (softer attack, more natural)

### RETRIG (Oscillator 2 Phase Retrigger)
- **On:** OSC 2 phase resets on each note
- **Off:** OSC 2 free-runs (phase continues from previous note)

**Use RETRIG ON for:**
- Consistent attack character
- Monophonic leads
- Precise rhythmic sounds

**Use RETRIG OFF for:**
- Evolving pad textures
- Natural variation
- Polyphonic playing

---

## Unisono + Modulation Interactions

### Unisono with FM
When using FM mode with unisono:
- Each unison voice has its own FM relationship
- Creates complex, evolving textures
- CPU-intensive but rich results

**Technique:**
1. Enable FM mode
2. Set unisono to 6+ voices
3. Moderate detune (30-50%)
4. **Result:** Dense, shimmering FM textures

### Unisono with SYNC
Sync mode + unisono creates aggressive variations:
- Each voice syncs independently
- Produces "supersync" effect
- Great for modern dubstep/trap basses

---

## CPU Optimization

### Freezing/Unisono
When using high unisono counts:
1. Freeze the GMS channel (Alt+F)
2. Render to audio
3. Disable original GMS
4. **Result:** Same sound, no CPU hit

### Strategic Voice Count
- **Writing/arranging:** Use lower voices (4-6)
- **Final mix:** Increase to 8-12 as needed
- **Rendering:** Maximum voices for best quality

---

## Common Unisono Mistakes

### 1. Too Wide in Mono
**Problem:** Great stereo sound, disappears in mono mix check
**Fix:** Test with mono button, reduce STEREO or use mono-compatible settings for bass

### 2. Excessive Detune on Bass
**Problem:** Bass sounds out of tune, loses impact
**Fix:** Keep bass detune under 30%, or use 1-2 voices

### 3. CPU Overload
**Problem:** Project stuttering with many unison instances
**Fix:** Freeze tracks, use lower voice counts, or render to audio

### 4. Muddy Mix
**Problem:** Too many wide unison sounds competing
**Fix:** Strategic width - lead wide, supporting elements narrow

---

## Pro Tips

1. **Layer narrow + wide:** Use 2-voice narrow for body, 8-voice wide for shimmer
2. **Automate detune:** Increase detune during chorus for bigger sound
3. **Bass mono rule:** Keep sub-bass elements in mono (0% stereo)
4. **Check mono compatibility:** Always test with mono button before finalizing

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 01-Learning\Quick-Reference\fx-module-reference.md

```markdown
# FX Module Quick Reference

Instant reference for all 10 GMS effects.

## Effect Quick-Start Guide

| Effect | X Control | Y Control | Best For | Typical Settings |
|--------|-----------|-----------|----------|------------------|
| **DIST** | Drive amount | Low pass | Grit, saturation | X: 20-40%, Y: 60-80% |
| **CRSH** | Sample crush | Low pass | Lo-fi, retro | X: 15-30%, Y: 70-90% |
| **FLNG** | Depth | Feedback | Thickening, sweep | X: 40-60%, Y: 30-50% |
| **PHSR** | Depth | Feedback | Movement, vintage | X: 30-50%, Y: 20-40% |
| **LPF** | Cutoff | Resonance | Tame highs | X: 60-80%, Y: 20% |
| **HPF** | Cutoff | Resonance | Clean lows | X: 20-40%, Y: 0% |
| **ECHO** | Feedback | Damping | Space, rhythm | X: 30-50%, Y: 60% |
| **RVRB** | Decay | Wet level | Room, depth | X: 40-60%, Y: 20-40% |
| **PAN** | Position | Binaural | Movement, width | X: LFO modulated | 
| **TRNC** | Release | Drop | Pumping, gating | X: 30%, Y: 60-80% |

[SRC: IL-MAN]

---

## Detailed Parameter Reference

### DIST (Distortion)
`\`\`
X = Drive (0-100%)
    0%   = Clean
    50%  = Moderate grit
    100% = Heavy distortion

Y = Low Pass Filter (0-100%)
    Higher = More highs pass through
    Lower  = Darker, tamer distortion
`\`\`

**Common uses:**
- Bass grit: X: 30%, Y: 70%
- Lead saturation: X: 20%, Y: 80%
- Aggressive crunch: X: 60%, Y: 50%

---

### CRSH (Bit Crusher)
`\`\`
X = Sample Rate Reduction (0-100%)
    0%   = No effect
    25%  = Subtle lo-fi
    50%  = Retro 8-bit
    100% = Extreme degradation

Y = Low Pass Filter (0-100%)
    Smoothes aliasing artifacts
`\`\`

**Common uses:**
- Lo-fi texture: X: 20%, Y: 60%
- Digital artifacts: X: 60%, Y: 40%
- Retro game sound: X: 40%, Y: 80%

---

### FLNG (Flanger)
`\`\`
X = Depth (0-100%)
    Controls sweep range
    Higher = More dramatic

Y = Feedback (0-100%)
    Creates resonance
    High values = ringing/metallic
`\`\`

**Common uses:**
- Subtle thickening: X: 30%, Y: 20%
- Jet sweep: X: 80%, Y: 60%
- Rhythmic: X: 50%, Y: 40%, sync LFO

---

### PHSR (Phaser)
`\`\`
X = Depth (0-100%)
    Range of notch sweep

Y = Feedback (0-100%)
    Emphasis on notches
`\`\`

**Common uses:**
- Gentle movement: X: 40%, Y: 30%
- 70s vibe: X: 70%, Y: 50%
- Rotary speaker: X: 50%, Y: 40%

---

### LPF (Low Pass Filter)
`\`\`
X = Cutoff Frequency (0-100%)
    0%   = No sound
    50%  = Midrange only
    100% = Full spectrum

Y = Resonance (0-100%)
    Boost at cutoff point
`\`\`

**Common uses:**
- Post-distortion taming: X: 60-80%
- Filter sweeps: Automate X
- Warmth: X: 80%, Y: 10%

---

### HPF (High Pass Filter)
`\`\`
X = Cutoff Frequency (0-100%)
    0%   = Full spectrum
    50%  = No bass/mids
    100% = Only highs

Y = Resonance (0-100%)
    Can add bite at cutoff
`\`\`

**Common uses:**
- Clean bass mud: X: 10-20%
- Thinning: X: 40-60%
- Radio effect: X: 60%, Y: 20%

---

### ECHO (Delay)
`\`\`
X = Feedback (0-100%)
    0%   = Single echo
    50%  = Multiple repeats
    100% = Infinite (careful!)

Y = Filtering (0-100%)
    Higher = brighter echoes
    Lower  = darker echoes
`\`\`

**Common uses:**
- Slapback: X: 20%, short time
- Rhythmic delay: X: 40%, sync to tempo
- Ambient: X: 60%, Y: 70%

---

### RVRB (Reverb)
`\`\`
X = Decay/Feedback (0-100%)
    Room size/time

Y = Wet Level (0-100%)
    Reverb amount
`\`\`

**Common uses:**
- Room ambience: X: 30%, Y: 20%
- Hall effect: X: 70%, Y: 40%
- Plate reverb: X: 50%, Y: 30%

---

### PAN (Panning)
`\`\`
X = Left/Right Position (0-100%)
    0%   = Left
    50%  = Center
    100% = Right

Y = Binaural Effect (0-100%)
    Creates 3D positioning
`\`\`

**Common uses:**
- Auto-pan: Arm X to LFO
- Static positioning: Set X manually
- 3D effects: Use Y control

---

### TRNC (Trance Gate)
`\`\`
X = Release Time (0-100%)
    How fast gate closes
    Higher = smoother pumping

Y = Drop Level (0-100%)
    How much volume drops
    0%   = No effect
    100% = Full silence
`\`\`

**Common uses:**
- Sidechain feel: X: 20%, Y: 70%, sync to beat
- Trance effect: X: 40%, Y: 80%
- Rhythmic gate: X: 10%, Y: 90%

---

## Effect Chains by Purpose

### EDM Lead Polish
`\`\`
DIST (light) → LPF (tame) → ECHO (subtle) → RVRB (room)
`\`\`

### Trap Bass
`\`\`
DIST (medium) → HPF (clean) → TRNC (pump)
`\`\`

### Wide Pad
`\`\`
PHSR (subtle) → ECHO (long) → RVRB (big) → PAN (slow LFO)
`\`\`

### Lo-Fi Texture
`\`\`
CRSH (medium) → FLNG (light) → LPF (dark)
`\`\`

### Rhythmic Pluck
`\`\`
ECHO (dotted 8th) → RVRB (short) → TRNC (quarter note)
`\`\`

---

## LFO Modulation Targets

Arm these parameters for automatic movement:

| Effect | Best Param to Modulate | Result |
|--------|------------------------|--------|
| DIST | X (amount) | Pulsing grit |
| FLNG | X (depth) | Sweeping flanger |
| PHSR | X (depth) | Moving phaser |
| LPF | X (cutoff) | Filter sweep |
| ECHO | X (feedback) | Growing echoes |
| PAN | X (position) | Auto-panning |
| TRNC | Y (drop) | Rhythmic intensity |

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 01-Learning\Quick-Reference\modulation-matrix-destinations.md

```markdown
# Modulation Matrix Destinations

Complete reference for envelope and LFO modulation targets.

## Modulation Architecture

GMS provides deep modulation routing through two Envelope Generators (EG1, EG2) and two LFOs (LFO1, LFO2). Each can target various synthesis parameters.

[SRC: IL-MAN]

---

## Envelope Destinations (EG1 & EG2)

### Filter Section
| Destination | Effect | Typical Use |
|-------------|--------|-------------|
| **CUTOFF** | Filter opens/closes over time | Classic filter sweep basses |
| **RES** | Resonance changes | Evolving filter character |

### Pitch Section
| Destination | Effect | Typical Use |
|-------------|--------|-------------|
| **PITCH** | Global pitch envelope | Pitch drop effects, 808 slides |
| **OSC1 PITCH** | Individual OSC pitch | Detuned sweeps |
| **OSC2 PITCH** | Individual OSC pitch | Sync sweep modulation |
| **OSC3 PITCH** | Individual OSC pitch | Sub-octave movement |

### Mix Section
| Destination | Effect | Typical Use |
|-------------|--------|-------------|
| **OSC MIX** | Balance between oscillators | Morphing between sources |
| **OSC2** | OSC1/2 mix specifically | Layered sound evolution |
| **OSC3** | Combined/OSC3 mix | Bringing in sub layer |
| **NOISE** | Noise blend | Percussive attacks |

### Amplitude & Panning
| Destination | Effect | Typical Use |
|-------------|--------|-------------|
| **AMPLITUDE** | Volume contour | Tremolo, gate effects |
| **PAN** | Stereo movement | Auto-panning |

### Modulation Section
| Destination | Effect | Typical Use |
|-------------|--------|-------------|
| **AMOUNT** | Modulation depth | FM complexity changes |

---

## LFO Destinations (LFO1 & LFO2)

LFOs can target the same destinations as envelopes, plus additional rhythmic modulation.

### Most Common LFO Targets

| Destination | Rate | Result |
|-------------|------|--------|
| **CUTOFF** | Slow | Filter sweep pad |
| **CUTOFF** | Medium | Wobble bass |
| **CUTOFF** | Fast | Vibrato-like filter |
| **PITCH** | Slow | Subtle detune shimmer |
| **PITCH** | Fast | Vibrato |
| **PAN** | Slow | Wide stereo movement |
| **AMPLITUDE** | Medium | Tremolo |
| **AMOUNT (mod)** | Medium | Evolving FM texture |

---

## Modulation Amount (AMNT)

Controls how strongly the envelope/LFO affects the destination:

| AMNT Value | Effect | Use Case |
|------------|--------|----------|
| **±10-30%** | Subtle | Gentle movement |
| **±40-60%** | Moderate | Noticeable effect |
| **±70-100%** | Strong | Dramatic modulation |

**Negative AMNT:** Inverts the modulation (envelope down = target up)

---

## Envelope Shape Guide

### ADSR Controls

| Parameter | Short Setting | Long Setting | Use Case |
|-----------|---------------|--------------|----------|
| **ATK** | 0-10% | 50-100% | Plucks vs pads |
| **DEC** | 10-30% | 40-70% | Sharp vs smooth |
| **SUS** | 0-30% | 60-100% | Percussive vs sustained |
| **REL** | 10-20% | 50-100% | Tight vs atmospheric |

### Common Envelope Types

**Pluck/Bell:**
- ATK: 0% (instant)
- DEC: 30-50%
- SUS: 0-20%
- REL: 20-30%

**Pad:**
- ATK: 30-50% (slow fade in)
- DEC: 40-60%
- SUS: 70-100%
- REL: 40-60%

**Bass:**
- ATK: 0-10%
- DEC: 20-40%
- SUS: 60-80%
- REL: 10-20%

**Lead:**
- ATK: 0-5%
- DEC: 30-50%
- SUS: 80-100%
- REL: 15-25%

---

## LFO Configuration

### Rate Controls

| SYNC Setting | Result |
|--------------|--------|
| **None** | Free-running, Hz-based |
| **Beat** | Synced to beat divisions |
| **Bar** | Synced to bar length |

### Shape Selection

| Shape | Character | Best For |
|-------|-----------|----------|
| **Sine** | Smooth, natural | Filter sweeps, vibrato |
| **Triangle** | Linear up/down | Symmetric modulation |
| **Saw** | Sharp attack, slow decay | Ramp effects |
| **Square** | On/off switching | Gating, stepped effects |
| **Random** | Unpredictable | Chaos, textures |

**Note:** Sine is bipolar (±), others are unipolar (0 to +)

---

## Advanced Modulation Techniques

### 1. Filter Envelope Bass
`\`\`
EG1 → CUTOFF
ATK: 0%
DEC: 40%
SUS: 20%
REL: 30%
AMNT: +70%
Result: Classic envelope filter bass
`\`\`

### 2. Wobble Bass (LFO)
`\`\`
LFO1 → CUTOFF
RATE: Beat-synced (1/4 or 1/8)
SHAPE: Triangle or Sine
AMNT: ±60%
Result: Dubstep-style wobble
`\`\`

### 3. FM Complexity Sweep
`\`\`
EG1 → AMOUNT (modulation)
ATK: 20% (slow build)
DEC: 50%
SUS: 40%
AMNT: +50%
Mode: FM
Result: Evolving FM texture
`\`\`

### 4. Pitch Drop (808 style)
`\`\`
EG1 → PITCH
ATK: 0%
DEC: 30%
SUS: 0%
REL: 10%
AMNT: -30% (negative!)
Result: Pitch drop effect
`\`\`

### 5. Stereo Movement
`\`\`
LFO1 → PAN
RATE: Slow (8-16 bars)
SHAPE: Sine
AMNT: 100%
Result: Gentle auto-pan
`\`\`

---

## Modulation Matrix Combinations

### Complex Sound Design

**Evolving Pad:**
- EG1 → CUTOFF (slow open)
- LFO1 → PAN (gentle movement)
- LFO2 → OSC MIX (texture morphing)

**Dynamic Lead:**
- EG1 → CUTOFF (attack bite)
- LFO1 → PITCH (subtle vibrato)
- EG2 → AMOUNT (FM complexity)

**Rhythmic Bass:**
- LFO1 → CUTOFF (wobble)
- EG1 → AMOUNT (per-note variation)

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# GMS Parameter Cheat Sheet

Quick reference for all GMS parameters and their ranges.

## Synth Panel Parameters

### Oscillator Section (3 Oscillators)

| Parameter | Range | Function |
|-----------|-------|----------|
| **WAVESHAPE** | Preset/Custom | Select waveform or load .wav file |
| **PITCH** | ±24 semitones | Coarse pitch adjustment |
| **FINE** | ±100 cents | Fine pitch adjustment (±1 semitone) |

[SRC: IL-MAN]

---

## Modulation Section

| Parameter | Options | Function |
|-----------|---------|----------|
| **Mode** | 1 SYNC, 2 to 1 FM, 2 to 1 RM | Oscillator interaction mode |
| **AMOUNT** | 0-100% | Modulation depth/intensity |

**Mode Details:**
- **1 SYNC:** OSC1 syncs to OSC2 frequency
- **2 to 1 FM:** OSC2 modulates OSC1 frequency
- **2 to 1 RM:** OSC2 ring modulates OSC1

---

## Mix Section

| Parameter | Range | Function |
|-----------|-------|----------|
| **OSC 2** | 0-100% | Balance between OSC1 and OSC2 |
| **INV** | On/Off | Invert OSC2 phase |
| **OSC 3** | 0-100% | Mix of (OSC1+2) with OSC3 |
| **NOISE** | 0-100% | White noise blend |

---

## Phase Section

| Parameter | Range | Function |
|-----------|-------|----------|
| **OSC 2** | 0-360° | OSC2 starting phase |
| **RETRIG** | On/Off | Retrigger OSC2 phase on note |
| **UNISONO** | 0-360° | Unison phase offset |

---

## Unisono Section

| Parameter | Range | Function | Best Practice |
|-----------|-------|----------|---------------|
| **VOICES** | 1-16 | Unison voice count | 4-8 for leads, 1-2 for bass |
| **STEREO** | 0-100% | Stereo spread | Keep bass <20% |
| **DETUNE** | 0-100% | Voice detuning | 30-50% typical |

---

## Keyboard Section

| Parameter | Range | Function |
|-----------|-------|----------|
| **OCTAVE** | ±4 octaves | Global octave shift |
| **MONO VOICE** | On/Off | Monophonic mode with portamento |

---

## Articulation Panel

### Filter Section

| Parameter | Range | Function |
|-----------|-------|----------|
| **CUTOFF** | 0-100% | Filter cutoff frequency |
| **RES** | 0-100% | Filter resonance |
| **KBD** | 0-100% | Keyboard tracking |
| **TYPE** | LP/BP/HP | Filter type |

### Envelope Section (EG1 & EG2)

| Parameter | Range | Function |
|-----------|-------|----------|
| **ATK** | 0-100% | Attack time |
| **DEC** | 0-100% | Decay time |
| **AMNT** | ±100% | Envelope amount |
| **INVERT** | On/Off | Invert envelope |
| **DEST** | Various | Modulation target |

**Envelope Destinations:**
- CUTOFF, RES, PITCH, PAN, OSC MIX, OSC1-3 PITCH, etc.

### LFO Section (LFO1 & LFO2)

| Parameter | Range | Function |
|-----------|-------|----------|
| **RATE** | 0-100% | LFO speed |
| **SYNC** | None/Beat/Bar | Tempo sync |
| **AMNT** | ±100% | Modulation amount |
| **RETRIG** | On/Off | Retrigger on note |
| **DEST** | Various | Modulation target |
| **INVERT** | On/Off | Invert LFO |
| **SHAPE** | 8 shapes | LFO waveform |

**LFO Shapes:**
1. Sine (bipolar)
2-8. Triangle, Saw, Square, etc. (unipolar)

### Level Envelope (LVL EG)

| Parameter | Range | Function |
|-----------|-------|----------|
| **Amplitude** | 0-100% | Overall volume |
| **ATTACK** | 0-100% | Attack time |
| **DECAY** | 0-100% | Decay time |
| **SUSTAIN** | 0-100% | Sustain level |
| **RELEASE** | 0-100% | Release time |

### Channel Section

| Parameter | Range | Function |
|-----------|-------|----------|
| **OUTPUT** | 0-100% | Channel volume |
| **PAN** | L100-R100 | Stereo position |
| **PITCH** | ±12 semitones | Global pitch |
| **FREQ SLIDE** | 0-100% | Portamento time |

---

## FX Rack (10 Effects)

| FX | X Parameter | Y Parameter |
|----|-------------|-------------|
| **DIST** | Distortion amount | Low pass cutoff |
| **CRSH** | Sample rate reduction | Low pass cutoff |
| **FLNG** | Depth | Feedback |
| **PHSR** | Depth | Feedback |
| **LPF** | Cutoff frequency | Resonance |
| **HPF** | Cutoff frequency | Resonance |
| **ECHO** | Feedback | Filtering |
| **RVRB** | Feedback (decay) | Wet level |
| **PAN** | L/R position | Binaural effect |
| **TRNC** | Release time | Drop level |

---

## MIDI/EQ Panel

### MIDI Controllers

| Controller | Function |
|------------|----------|
| **VELOCITY** | Assign to GMS targets |
| **MODULATION** | Mod wheel mapping |
| **AFTERTOUCH** | Pressure mapping |
| **PITCH BEND** | Bend range |

### 5-Band EQ (Post-FX)

| Band | Center Frequency | Range |
|------|-------------------|-------|
| Band 1 | 60 Hz | Low shelf |
| Band 2 | 220 Hz | Bell |
| Band 3 | 1500 Hz | Bell |
| Band 4 | 8000 Hz | Bell |
| Band 5 | 12000 Hz | High shelf |

---

## Quick Shortcuts

| Action | Shortcut |
|--------|----------|
| Load wavetable | Drop .wav on oscillator |
| Toggle FX | Click effect name |
| Momentary FX | Click in X/Y panel |
| Select envelope | Click EG1/EG2 switch |
| Select LFO | Click LFO1/LFO2 switch |

---

## Parameter Ranges Summary

### Audio Rate Parameters (Hz/kHz)
- Filter cutoff: 20Hz - 20kHz (effective range)
- LFO rates: 0.1Hz - 30Hz (approximate)

### Time-Based Parameters (ms/s)
- Attack: ~1ms - 5s
- Decay: ~1ms - 10s
- Release: ~1ms - 10s

### Percentage Parameters (0-100%)
- Most modulation amounts
- Mix balances
- Effect parameters

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 01-Learning\Quick-Reference\synthesis-modes-quick-guide.md

```markdown
# Synthesis Modes Quick Guide

One-page reference for choosing the right synthesis mode.

## Mode Selection Matrix

| Goal | Mode | Setup | Result |
|------|------|-------|--------|
| **Classic analog** | Subtractive | No modulation | Warm, vintage tone |
| **EDM supersaw lead** | Subtractive | High unisono | Thick, modern lead |
| **Aggressive bass** | SYNC | OSC2 tuned up | Sync sweep character |
| **Bell/pluck** | FM | 2:1 or 3:1 ratio | Metallic harmonics |
| **808 sub bass** | FM | Sine waves, 2:1 | Harmonic depth |
| **Industrial texture** | RM | Detuned oscillators | Inharmonic grit |
| **Sci-fi effects** | RM | Extreme tuning | Alien sounds |

[SRC: IL-MAN]

---

## Quick Setup Recipes

### Subtractive (No Modulation)
`\`\`
Modulation: None (default)
OSC 1: Sawtooth
OSC 2: Sawtooth, detuned +7 cents
Unisono: 4-8 voices
Result: Classic supersaw
`\`\`

### FM Mode
`\`\`
Modulation: 2 to 1 FM
OSC 1: Sine (carrier)
OSC 2: Sine (modulator)
Tune OSC 2: +12 semitones (2:1 ratio)
Amount: 50%
Result: Bell/metallic tones
`\`\`

### Sync Mode
`\`\`
Modulation: 1 SYNC
OSC 1: Sawtooth
OSC 2: Sawtooth
Tune OSC 2: +12 semitones
Amount: 40%
Modulate OSC 2 pitch with envelope
Result: Sync sweep bass/lead
`\`\`

### Ring Modulation
`\`\`
Modulation: 2 to 1 RM
OSC 1: Any waveform
OSC 2: Detuned +2 to +7 semitones
Amount: 70%
Result: Inharmonic texture
`\`\`

---

## Sound Design Goals

### Bass Sounds

| Type | Mode | Key Settings |
|------|------|--------------|
| **Sub bass** | FM | Sine carrier, 2:1 ratio, low cutoff |
| **Growl bass** | SYNC | Sawtooth, modulate sync amount |
| **Reese bass** | Subtractive | Two saws, heavy unisono, wide stereo |
| **808 style** | FM | Sine carrier, 3:1 ratio, long decay |

### Lead Sounds

| Type | Mode | Key Settings |
|------|------|--------------|
| **Supersaw** | Subtractive | 3 saws, 6-8 unison voices |
| **FM lead** | FM | Saw carrier, 2:1 ratio, medium cutoff |
| **Sync lead** | SYNC | Aggressive sync, add distortion |
| **Pluck** | FM | Short envelope, 2:1 or 3:1 ratio |

### Pad Sounds

| Type | Mode | Key Settings |
|------|------|--------------|
| **Evolving** | FM | Slow envelope modulating amount |
| **Wide pad** | Subtractive | Max unisono, 100% stereo |
| **Texture** | RM | Complex waveforms, moderate amount |

### Effects

| Type | Mode | Key Settings |
|------|------|--------------|
| **Bells** | FM | 2:1 or 3:1 ratio, fast envelope |
| **Metallic** | FM | Higher ratios, bright filter |
| **Robotic** | RM | Extreme detuning |
| **Sci-fi** | RM | Noise + modulation |

---

## FM Ratio Cheat Sheet

For FM mode (OSC 2 modulates OSC 1):

| OSC 2 Tuning | Ratio | Character |
|--------------|-------|-----------|
| 0 semitones | 1:1 | Dense, complex |
| +12 semitones | 2:1 | Bell-like, hollow |
| +19 semitones | 3:1 | Reed-like |
| +24 semitones | 4:1 | Bright, metallic |
| +28 semitones | 5:1 | Brass-like |

**Pro tip:** Use ratios with small whole numbers (2:1, 3:1, 4:1) for musical harmonics.

---

## Common Mistakes

| Mistake | Why It's Wrong | Fix |
|---------|----------------|-----|
| Too much FM amount | Harsh, uncontrolled sound | Start at 30-50%, increase gradually |
| Wrong FM ratio | Out-of-tune harmonics | Use 2:1, 3:1, 4:1 for consonance |
| Extreme detune in RM | Complete chaos | Keep detune under 7 semitones |
| No filter after sync | Too bright/harsh | Always use filter with sync |
| Max unison on bass | Phase cancellation | Use 1-2 voices for sub |

---

## Decision Flowchart

`\`\`
Starting point: Default patch
    ↓
Need harmonics/complexity?
    ├─ Yes → Try FM mode
    │   ├─ Bell/metallic → FM, 2:1 ratio
    │   └─ 808/sub → FM, 3:1 ratio, sines
    ↓
Need aggression/edge?
    ├─ Yes → Try SYNC mode
    │   ├─ Bass → SYNC + envelope mod
    │   └─ Lead → SYNC + distortion
    ↓
Need texture/grit?
    ├─ Yes → Try RM mode
    │   ├─ Industrial → High amount
    │   └─ Sci-fi → Extreme detune
    ↓
Want classic analog?
    └─ Use Subtractive (no modulation)
        ├─ Supersaw → High unisono
        └─ Warm tone → Medium unisono
`\`\`

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 01-Learning\Quick-Reference\wavetable-selection-guide.md

```markdown
# Wavetable Selection Guide

Choosing the right waveform for each synthesis task.

## GMS Waveshapes

GMS provides preset waveshapes for each oscillator, plus the ability to load custom .wav files.

[SRC: IL-MAN]

---

## Standard Waveforms

### Sine Wave
**Character:** Pure fundamental, no harmonics
**Best for:**
- Sub-bass foundations
- FM carriers (cleanest FM)
- Pure tones
- Low CPU usage

**Avoid for:**
- Bright leads (lacks harmonics)
- Aggressive sounds

### Triangle Wave
**Character:** Soft, mellow, odd harmonics only
**Best for:**
- Flute-like sounds
- Soft leads
- Subtle bass
- Vintage emulation

**Avoid for:**
- Bright cutting tones

### Square Wave
**Character:** Hollow, woody, odd harmonics
**Best for:**
- Bass sounds
- Hollow pads
- Vintage synth tones
- Clarinet-like sounds

**Avoid for:**
- Bright modern leads

### Sawtooth Wave
**Character:** Bright, buzzy, all harmonics
**Best for:**
- Supersaw leads
- Bright bass
- Brass sounds
- EDM leads
- **Most versatile waveform**

**Avoid for:**
- Soft mellow tones (too bright)

### Pulse Wave
**Character:** Variable width square
**Best for:**
- Thin nasal tones (narrow pulse)
- Fattening sounds (wide pulse)
- PWM effects (modulate width)

---

## Wavetable Strategy

### Single Oscillator
For simple sounds, choose based on character needed:
- **Warm/analog:** Triangle or sine
- **Bright/aggressive:** Sawtooth
- **Hollow/vintage:** Square or pulse

### Two Oscillators (OSC 1 + 2)
Classic layering combinations:

| OSC 1 | OSC 2 | Result | Use Case |
|-------|-------|--------|----------|
| Sawtooth | Sawtooth (detuned) | Supersaw | EDM leads |
| Sawtooth | Square | Fat with bite | Bass, leads |
| Sine | Sawtooth | Sub + harmonics | Full-range bass |
| Triangle | Pulse | Vintage vibe | Retro sounds |
| Sine | Sine (FM) | Pure FM | Bells, metals |

### Three Oscillators (Full Stack)
Complete sound design:

**Modern EDM Lead:**
- OSC 1: Sawtooth (main)
- OSC 2: Sawtooth (detuned +7 cents)
- OSC 3: Sawtooth (detuned -7 cents)
- Unisono: 6-8 voices

**808 Sub Bass:**
- OSC 1: Sine (fundamental)
- OSC 2: Sine (+12 semitones for FM)
- OSC 3: Sine (-12 semitones, sub layer)
- Enable FM mode

**Wide Pad:**
- OSC 1: Sawtooth (center)
- OSC 2: Triangle (detuned +12 cents)
- OSC 3: Triangle (detuned -12 cents)
- Unisono: 8+ voices, 100% stereo

---

## Custom Wavetable Loading

### How to Load
1. Drag and drop any .wav file onto oscillator display
2. Or click WAVESHAPE selector and browse

### Best Practices
- Use single-cycle waveforms (short, looping waves)
- 2048 samples is ideal
- Avoid complex loops (can cause artifacts)

### Creating Custom Waveforms
- Use wave editors (Edison, Audacity)
- Extract single cycles from samples
- Draw custom shapes for unique harmonics

---

## Waveshape by Genre

### EDM/Trance
**Primary:** Sawtooth (supersaws)
**Secondary:** Square (bass layers)
**FM:** Sine (metallic elements)

### Trap/Hip-Hop
**Primary:** Sine (808 subs)
**Secondary:** Sawtooth (leads)
**FM:** Sine (bell/plucks)

### Pop
**Primary:** Sawtooth, Triangle
**Secondary:** Square (bass)
**FM:** Sine (ear candy)

### Experimental/Industrial
**Primary:** All waveforms with RM
**Secondary:** Complex custom waves
**FM:** All waveforms for chaos

---

## Harmonic Content Reference

| Waveform | Harmonics | Brightness | Best Role |
|----------|-----------|------------|-----------|
| Sine | None (fundamental only) | 1/10 | Sub/foundation |
| Triangle | Odd only, -12dB/oct | 3/10 | Soft/mellow |
| Square | Odd only, -6dB/oct | 5/10 | Hollow/vintage |
| Sawtooth | All, -6dB/oct | 8/10 | Bright/aggressive |
| Pulse (50%) | Odd only, -6dB/oct | 5/10 | Square-like |
| Pulse (10%) | Odd only, weak | 3/10 | Thin/nasal |

---

## Pro Tips

1. **Start with sawtooth** for most modern sounds
2. **Layer sine underneath** for solid low-end
3. **Use FM with sines** for cleanest complex tones
4. **Detune identical waves** for instant thickness
5. **Try custom waves** for unique signature sounds

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: GMS

| Parameter | Type | Description | Vibe Impact | Mix Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Osc Wave** | Choice | Selects the base wavetable. | **Moody** (Sines), **Upbeat** (Saws). | Harmonic spectrum. |
| **Unisono** | Slider | Number of detuned voices. | **Vibey** (High unison). | Stereo width. |
| **Filter Cutoff**| Knob | Frequency of the filter. | **Moody** (Low), **Upbeat** (High). | Brightness/Clarity. |
| **Sync/FM/RM** | Switch | Interaction between Osc 1 & 2. | **Psychedelic** (FM/Sync). | Tonal complexity. |
| **LFO Amount** | Knob | Depth of LFO modulation. | **Vibey** (Slow movement). | Rhythmic movement. |
| **FX Rack (10)** | Buttons | Enables built-in modules. | **Upbeat** (Chorus), **Moody** (Crush). | Final texture. |

## Mix Impact Tags
*   **Stereo Width:** Driven by the Unisono Spread. Essential for modern R&B.
*   **Punch:** Managed via the Amplitude Envelope Attack. Fast attack = sharp transients.
*   **Clarity:** Use the Filter Cutoff and the "High-Pass" mode in the filter section to remove low-end mud.

```

---

## FILE: 02-Data\parameters\gms-specs.json

```json
{
  "pluginName": "GMS (Groove Machine Synth)",
  "pluginType": "Hybrid Wavetable Synthesizer",
  "category": "Generator / EDM / Modern",
  "manualUrl": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm",
  "version": "1.0",
  "lastUpdated": "2026-02-03",
  "specifications": {
    "oscillators": {
      "count": 3,
      "types": ["Wavetable with custom .wav loading"],
      "waveforms": ["Sine", "Triangle", "Square", "Sawtooth", "Pulse", "Custom"],
      "controls": ["WAVESHAPE", "PITCH", "FINE"],
      "pitchRange": {
        "semitones": "±24",
        "fine": "±100 cents"
      }
    },
    "modulationModes": [
      {
        "id": "sync",
        "name": "1 SYNC",
        "description": "Hard synchronization between OSC1 and OSC2"
      },
      {
        "id": "fm",
        "name": "2 to 1 FM",
        "description": "Frequency modulation, OSC2 modulates OSC1"
      },
      {
        "id": "rm",
        "name": "2 to 1 RM",
        "description": "Ring modulation, OSC2 multiplies OSC1 amplitude"
      }
    ],
    "unisono": {
      "maxVoices": 16,
      "controls": ["VOICES", "STEREO", "DETUNE", "PHASE"],
      "ranges": {
        "voices": "1-16",
        "stereo": "0-100%",
        "detune": "0-100%",
        "phase": "0-360°"
      }
    },
    "filter": {
      "types": ["LP (Low Pass)", "BP (Band Pass)", "HP (High Pass)"],
      "controls": ["CUTOFF", "RES", "KBD"],
      "keyboardTracking": true
    },
    "envelopes": {
      "count": 3,
      "types": [
        {
          "id": "eg1",
          "name": "Envelope Generator 1",
          "controls": ["ATK", "DEC", "AMNT", "INVERT", "DEST"],
          "destinations": ["CUTOFF", "RES", "PITCH", "PAN", "AMPLITUDE", "OSC MIX", "AMOUNT", "OSC1-3 PITCH"]
        },
        {
          "id": "eg2",
          "name": "Envelope Generator 2",
          "controls": ["ATK", "DEC", "AMNT", "INVERT", "DEST"],
          "destinations": ["CUTOFF", "RES", "PITCH", "PAN", "AMPLITUDE", "OSC MIX", "AMOUNT", "OSC1-3 PITCH"]
        },
        {
          "id": "levelEg",
          "name": "Level Envelope",
          "controls": ["ATTACK", "DECAY", "SUSTAIN", "RELEASE", "Amplitude"],
          "type": "ADSR"
        }
      ]
    },
    "lfos": {
      "count": 2,
      "controls": ["RATE", "SYNC", "AMNT", "RETRIG", "DEST", "INVERT", "SHAPE"],
      "syncOptions": ["None", "Beat", "Bar"],
      "shapes": ["Sine", "Triangle", "Saw", "Square", "Random", "Various"],
      "shapeNote": "Sine is bipolar, others are unipolar"
    },
    "effects": {
      "count": 10,
      "routing": "Series (one after another)",
      "signalFlow": "DIST → CRSH → FLNG → PHSR → LPF → HPF → ECHO → RVRB → PAN → TRNC",
      "modules": [
        {
          "id": "dist",
          "name": "DIST",
          "type": "Distortion",
          "xParam": "Distortion amount",
          "yParam": "Low pass cutoff"
        },
        {
          "id": "crsh",
          "name": "CRSH",
          "type": "Bit Crusher",
          "xParam": "Sample-rate reduction",
          "yParam": "Low pass cutoff"
        },
        {
          "id": "flng",
          "name": "FLNG",
          "type": "Flanger",
          "xParam": "Depth",
          "yParam": "Feedback"
        },
        {
          "id": "phsr",
          "name": "PHSR",
          "type": "Phaser",
          "xParam": "Depth",
          "yParam": "Feedback"
        },
        {
          "id": "lpf",
          "name": "LPF",
          "type": "Low Pass Filter",
          "xParam": "Cutoff frequency",
          "yParam": "Resonance"
        },
        {
          "id": "hpf",
          "name": "HPF",
          "type": "High Pass Filter",
          "xParam": "Cutoff frequency",
          "yParam": "Resonance"
        },
        {
          "id": "echo",
          "name": "ECHO",
          "type": "Delay/Echo",
          "xParam": "Feedback amount",
          "yParam": "Echo filtering"
        },
        {
          "id": "rvrb",
          "name": "RVRB",
          "type": "Reverberation",
          "xParam": "Feedback (decay)",
          "yParam": "Wet level"
        },
        {
          "id": "pan",
          "name": "PAN",
          "type": "Panning",
          "xParam": "L/R position",
          "yParam": "Binaural effect"
        },
        {
          "id": "trnc",
          "name": "TRNC",
          "type": "Trance Gate",
          "xParam": "Release time",
          "yParam": "Drop level"
        }
      ]
    },
    "eq": {
      "type": "5-Band Equalizer",
      "position": "Post-FX",
      "bands": [
        { "band": 1, "frequency": "60 Hz", "type": "Low shelf" },
        { "band": 2, "frequency": "220 Hz", "type": "Bell" },
        { "band": 3, "frequency": "1500 Hz", "type": "Bell" },
        { "band": 4, "frequency": "8000 Hz", "type": "Bell" },
        { "band": 5, "frequency": "12000 Hz", "type": "High shelf" }
      ]
    },
    "midi": {
      "controllers": ["VELOCITY", "MODULATION", "AFTERTOUCH", "PITCH BEND"],
      "velocityToLevel": true,
      "supports": ["MIDI CC mapping to destinations"]
    },
    "crossPlatform": {
      "desktop": true,
      "flStudioMobile": true,
      "presetCompatibility": ".gms format shared between platforms"
    }
  },
  "keyFeatures": [
    "3 independent wavetable oscillators",
    "Hybrid synthesis (Subtractive, FM, Ring Modulation, Sync)",
    "Advanced Unisono (up to 16 voices)",
    "10 integrated FX modules",
    "Dual Envelope Generators",
    "Dual LFOs with tempo sync",
    "5-band post-FX EQ",
    "Custom wavetable loading (.wav files)",
    "FL Studio Desktop and Mobile compatible"
  ],
  "credits": {
    "code": "Maxx Claster",
    "presets": "Toby Emerson, Arlo G (nucleon)"
  }
}

```

---

## FILE: 02-Data\parameters\parameter-definitions.json

```json
{
  "pluginName": "GMS",
  "description": "Complete parameter specification for Groove Machine Synth",
  "parameters": [
    {
      "section": "Oscillators",
      "id": "osc1_wave",
      "name": "OSC1 Waveshape",
      "type": "Wavetable",
      "supports": ["Preset waves", "Custom .wav loading"],
      "description": "Select waveform or drag .wav file"
    },
    {
      "section": "Oscillators",
      "id": "osc1_pitch",
      "name": "OSC1 Pitch",
      "range": { "min": -24, "max": 24, "unit": "semitones" },
      "default": 0,
      "description": "Coarse pitch adjustment"
    },
    {
      "section": "Oscillators",
      "id": "osc1_fine",
      "name": "OSC1 Fine",
      "range": { "min": -100, "max": 100, "unit": "cents" },
      "default": 0,
      "description": "Fine pitch adjustment"
    },
    {
      "section": "Oscillators",
      "id": "osc2_wave",
      "name": "OSC2 Waveshape",
      "type": "Wavetable",
      "supports": ["Preset waves", "Custom .wav loading"],
      "description": "Secondary oscillator waveform"
    },
    {
      "section": "Oscillators",
      "id": "osc2_pitch",
      "name": "OSC2 Pitch",
      "range": { "min": -24, "max": 24, "unit": "semitones" },
      "default": 0,
      "description": "OSC2 coarse pitch"
    },
    {
      "section": "Oscillators",
      "id": "osc2_fine",
      "name": "OSC2 Fine",
      "range": { "min": -100, "max": 100, "unit": "cents" },
      "default": 0,
      "description": "OSC2 fine pitch"
    },
    {
      "section": "Oscillators",
      "id": "osc3_wave",
      "name": "OSC3 Waveshape",
      "type": "Wavetable",
      "supports": ["Preset waves", "Custom .wav loading"],
      "description": "Third oscillator waveform"
    },
    {
      "section": "Oscillators",
      "id": "osc3_pitch",
      "name": "OSC3 Pitch",
      "range": { "min": -24, "max": 24, "unit": "semitones" },
      "default": 0,
      "description": "OSC3 coarse pitch"
    },
    {
      "section": "Oscillators",
      "id": "osc3_fine",
      "name": "OSC3 Fine",
      "range": { "min": -100, "max": 100, "unit": "cents" },
      "default": 0,
      "description": "OSC3 fine pitch"
    },
    {
      "section": "Modulation",
      "id": "mod_mode",
      "name": "Modulation Mode",
      "type": "Select",
      "options": ["1 SYNC", "2 to 1 FM", "2 to 1 RM"],
      "default": "1 SYNC",
      "description": "Inter-oscillator modulation mode"
    },
    {
      "section": "Modulation",
      "id": "mod_amount",
      "name": "Modulation Amount",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 0,
      "description": "Modulation depth/intensity"
    },
    {
      "section": "Mix",
      "id": "osc2_mix",
      "name": "OSC 2 Mix",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 50,
      "description": "Balance between OSC1 and OSC2"
    },
    {
      "section": "Mix",
      "id": "osc2_invert",
      "name": "OSC 2 Invert",
      "type": "Switch",
      "default": "Off",
      "description": "Invert OSC2 phase"
    },
    {
      "section": "Mix",
      "id": "osc3_mix",
      "name": "OSC 3 Mix",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 0,
      "description": "Mix of (OSC1+2) with OSC3"
    },
    {
      "section": "Mix",
      "id": "noise_mix",
      "name": "Noise Mix",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 0,
      "description": "White noise blend amount"
    },
    {
      "section": "Phase",
      "id": "osc2_phase",
      "name": "OSC 2 Phase",
      "range": { "min": 0, "max": 360, "unit": "degrees" },
      "default": 0,
      "description": "OSC2 starting phase"
    },
    {
      "section": "Phase",
      "id": "osc2_retrig",
      "name": "OSC 2 Retrigger",
      "type": "Switch",
      "default": "On",
      "description": "Retrigger OSC2 phase on each note"
    },
    {
      "section": "Phase",
      "id": "unisono_phase",
      "name": "Unisono Phase",
      "range": { "min": 0, "max": 360, "unit": "degrees" },
      "default": 0,
      "description": "Unison phase offset"
    },
    {
      "section": "Unisono",
      "id": "unison_voices",
      "name": "Unisono Voices",
      "range": { "min": 1, "max": 16, "unit": "voices" },
      "default": 1,
      "description": "Number of unison voices per note"
    },
    {
      "section": "Unisono",
      "id": "unison_stereo",
      "name": "Unisono Stereo",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 0,
      "description": "Stereo spread of voices"
    },
    {
      "section": "Unisono",
      "id": "unison_detune",
      "name": "Unisono Detune",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 0,
      "description": "Detuning amount between voices"
    },
    {
      "section": "Keyboard",
      "id": "octave",
      "name": "Octave",
      "range": { "min": -4, "max": 4, "unit": "octaves" },
      "default": 0,
      "description": "Global octave shift"
    },
    {
      "section": "Keyboard",
      "id": "mono_voice",
      "name": "Mono Voice",
      "type": "Switch",
      "default": "Off",
      "description": "Monophonic mode with portamento"
    },
    {
      "section": "Filter",
      "id": "filter_cutoff",
      "name": "Filter Cutoff",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 100,
      "description": "Filter cutoff frequency"
    },
    {
      "section": "Filter",
      "id": "filter_res",
      "name": "Filter Resonance",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 0,
      "description": "Emphasis at cutoff"
    },
    {
      "section": "Filter",
      "id": "filter_kbd",
      "name": "Filter Keyboard",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 0,
      "description": "Keyboard tracking of cutoff"
    },
    {
      "section": "Filter",
      "id": "filter_type",
      "name": "Filter Type",
      "type": "Select",
      "options": ["LP", "BP", "HP"],
      "default": "LP",
      "description": "Low Pass, Band Pass, or High Pass"
    },
    {
      "section": "Envelope",
      "id": "eg_attack",
      "name": "Envelope Attack",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 0,
      "description": "Time to reach peak"
    },
    {
      "section": "Envelope",
      "id": "eg_decay",
      "name": "Envelope Decay",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 30,
      "description": "Time to reach sustain"
    },
    {
      "section": "Envelope",
      "id": "eg_amount",
      "name": "Envelope Amount",
      "range": { "min": -100, "max": 100, "unit": "%" },
      "default": 0,
      "description": "Modulation amount (bipolar)"
    },
    {
      "section": "Envelope",
      "id": "eg_invert",
      "name": "Envelope Invert",
      "type": "Switch",
      "default": "Off",
      "description": "Invert envelope phase"
    },
    {
      "section": "Envelope",
      "id": "eg_destination",
      "name": "Envelope Destination",
      "type": "Select",
      "options": ["CUTOFF", "RES", "PITCH", "PAN", "AMPLITUDE", "OSC MIX", "AMOUNT", "OSC1 PITCH", "OSC2 PITCH", "OSC3 PITCH"],
      "default": "CUTOFF",
      "description": "Target for envelope modulation"
    },
    {
      "section": "LFO",
      "id": "lfo_rate",
      "name": "LFO Rate",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 30,
      "description": "LFO speed"
    },
    {
      "section": "LFO",
      "id": "lfo_sync",
      "name": "LFO Sync",
      "type": "Select",
      "options": ["None", "Beat", "Bar"],
      "default": "None",
      "description": "Tempo synchronization"
    },
    {
      "section": "LFO",
      "id": "lfo_amount",
      "name": "LFO Amount",
      "range": { "min": -100, "max": 100, "unit": "%" },
      "default": 0,
      "description": "Modulation depth"
    },
    {
      "section": "LFO",
      "id": "lfo_retrig",
      "name": "LFO Retrigger",
      "type": "Switch",
      "default": "Off",
      "description": "Restart LFO on note"
    },
    {
      "section": "LFO",
      "id": "lfo_destination",
      "name": "LFO Destination",
      "type": "Select",
      "options": ["CUTOFF", "RES", "PITCH", "PAN", "AMPLITUDE", "OSC MIX", "AMOUNT", "OSC1 PITCH", "OSC2 PITCH", "OSC3 PITCH"],
      "default": "CUTOFF",
      "description": "Target for LFO modulation"
    },
    {
      "section": "LFO",
      "id": "lfo_invert",
      "name": "LFO Invert",
      "type": "Switch",
      "default": "Off",
      "description": "Invert LFO waveform"
    },
    {
      "section": "LFO",
      "id": "lfo_shape",
      "name": "LFO Shape",
      "type": "Select",
      "options": ["Sine", "Triangle", "Saw", "Square", "Random", "Various"],
      "default": "Sine",
      "description": "LFO waveform shape"
    },
    {
      "section": "Level Envelope",
      "id": "level_amplitude",
      "name": "Amplitude",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 80,
      "description": "Overall volume level"
    },
    {
      "section": "Level Envelope",
      "id": "level_attack",
      "name": "Attack",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 0,
      "description": "Time to full volume"
    },
    {
      "section": "Level Envelope",
      "id": "level_decay",
      "name": "Decay",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 0,
      "description": "Time to sustain level"
    },
    {
      "section": "Level Envelope",
      "id": "level_sustain",
      "name": "Sustain",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 100,
      "description": "Volume during note hold"
    },
    {
      "section": "Level Envelope",
      "id": "level_release",
      "name": "Release",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 20,
      "description": "Time to silence after release"
    },
    {
      "section": "Channel",
      "id": "channel_output",
      "name": "Output",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 80,
      "description": "Channel volume"
    },
    {
      "section": "Channel",
      "id": "channel_pan",
      "name": "Pan",
      "range": { "min": -100, "max": 100, "unit": "%" },
      "default": 0,
      "description": "Stereo position (L to R)"
    },
    {
      "section": "Channel",
      "id": "channel_pitch",
      "name": "Channel Pitch",
      "range": { "min": -12, "max": 12, "unit": "semitones" },
      "default": 0,
      "description": "Global pitch shift"
    },
    {
      "section": "Channel",
      "id": "freq_slide",
      "name": "Frequency Slide",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "default": 0,
      "description": "Portamento/glide time"
    }
  ],
  "fxParameters": [
    {
      "effect": "DIST",
      "x": { "name": "Distortion", "range": "0-100%" },
      "y": { "name": "Low Pass", "range": "0-100%" }
    },
    {
      "effect": "CRSH",
      "x": { "name": "Sample Rate Reduction", "range": "0-100%" },
      "y": { "name": "Low Pass", "range": "0-100%" }
    },
    {
      "effect": "FLNG",
      "x": { "name": "Depth", "range": "0-100%" },
      "y": { "name": "Feedback", "range": "0-100%" }
    },
    {
      "effect": "PHSR",
      "x": { "name": "Depth", "range": "0-100%" },
      "y": { "name": "Feedback", "range": "0-100%" }
    },
    {
      "effect": "LPF",
      "x": { "name": "Cutoff", "range": "0-100%" },
      "y": { "name": "Resonance", "range": "0-100%" }
    },
    {
      "effect": "HPF",
      "x": { "name": "Cutoff", "range": "0-100%" },
      "y": { "name": "Resonance", "range": "0-100%" }
    },
    {
      "effect": "ECHO",
      "x": { "name": "Feedback", "range": "0-100%" },
      "y": { "name": "Filtering", "range": "0-100%" }
    },
    {
      "effect": "RVRB",
      "x": { "name": "Feedback", "range": "0-100%" },
      "y": { "name": "Wet Level", "range": "0-100%" }
    },
    {
      "effect": "PAN",
      "x": { "name": "Position", "range": "0-100% (L to R)" },
      "y": { "name": "Binaural", "range": "0-100%" }
    },
    {
      "effect": "TRNC",
      "x": { "name": "Release Time", "range": "0-100%" },
      "y": { "name": "Drop Level", "range": "0-100%" }
    }
  ]
}

```

---

## FILE: 02-Data\presets\genre-presets.json

```json
{
  "description": "Complete GMS patches for specific genres and applications",
  "usage": "Load these as starting points or complete solutions for common production needs",
  "presets": [
    {
      "name": "EDM Festival Lead",
      "category": "EDM/Trance",
      "description": "Big room lead with supersaw stack",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sawtooth", "pitch": 0, "fine": 8 },
          "osc3": { "wave": "Sawtooth", "pitch": 0, "fine": -8 }
        },
        "mix": { "osc2": 100, "osc3": 70, "noise": 0 },
        "unisono": { "voices": 8, "stereo": 80, "detune": 55 },
        "filter": { "type": "LP", "cutoff": 85, "res": 18, "kbd": 20 },
        "envelope1": { "dest": "CUTOFF", "attack": 0, "decay": 40, "amount": 25 },
        "levelEg": { "attack": 0, "decay": 25, "sustain": 95, "release": 35 }
      },
      "fxEnabled": ["FLNG", "RVRB"],
      "fxSettings": {
        "FLNG": { "x": 45, "y": 35 },
        "RVRB": { "x": 50, "y": 30 }
      }
    },
    {
      "name": "Trap 808 Sub",
      "category": "Trap/Hip-Hop",
      "description": "Deep sub bass with FM character",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sine", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sine", "pitch": 24, "fine": 0 },
          "osc3": { "wave": "Sine", "pitch": -12, "fine": 0 }
        },
        "modulation": { "mode": "2 to 1 FM", "amount": 40 },
        "mix": { "osc2": 100, "osc3": 50, "noise": 8 },
        "unisono": { "voices": 1, "stereo": 0, "detune": 0 },
        "filter": { "type": "LP", "cutoff": 45, "res": 5 },
        "envelope1": { "dest": "PITCH", "attack": 0, "decay": 30, "amount": -35 },
        "levelEg": { "attack": 0, "decay": 15, "sustain": 65, "release": 35 }
      },
      "fxEnabled": ["DIST"],
      "fxSettings": {
        "DIST": { "x": 18, "y": 85 }
      }
    },
    {
      "name": "Modern Pop Brass",
      "category": "Pop",
      "description": "Bright brassy lead for hooks",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Square", "pitch": 12, "fine": 0 },
          "osc3": { "wave": "Sawtooth", "pitch": -12, "fine": 0 }
        },
        "mix": { "osc2": 80, "osc3": 40, "noise": 0 },
        "unisono": { "voices": 5, "stereo": 60, "detune": 45 },
        "filter": { "type": "LP", "cutoff": 75, "res": 22 },
        "envelope1": { "dest": "CUTOFF", "attack": 5, "decay": 35, "amount": 35 },
        "levelEg": { "attack": 5, "decay": 25, "sustain": 90, "release": 30 }
      },
      "fxEnabled": ["DIST", "ECHO"],
      "fxSettings": {
        "DIST": { "x": 25, "y": 75 },
        "ECHO": { "x": 25, "y": 60 }
      }
    },
    {
      "name": "Cinematic Pad",
      "category": "Ambient/Cinematic",
      "description": "Evolving atmospheric pad",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Triangle", "pitch": 7, "fine": 5 },
          "osc3": { "wave": "Triangle", "pitch": -7, "fine": -5 }
        },
        "mix": { "osc2": 75, "osc3": 65, "noise": 5 },
        "unisono": { "voices": 12, "stereo": 100, "detune": 65 },
        "filter": { "type": "LP", "cutoff": 60, "res": 15 },
        "lfo1": { "dest": "CUTOFF", "rate": 15, "amount": 20, "shape": "Sine" },
        "lfo2": { "dest": "PAN", "rate": 10, "amount": 80, "shape": "Sine" },
        "envelope1": { "dest": "AMOUNT", "attack": 60, "decay": 50, "amount": 30 },
        "levelEg": { "attack": 80, "decay": 60, "sustain": 98, "release": 70 }
      },
      "fxEnabled": ["PHSR", "ECHO", "RVRB"],
      "fxSettings": {
        "PHSR": { "x": 40, "y": 30 },
        "ECHO": { "x": 50, "y": 55 },
        "RVRB": { "x": 65, "y": 45 }
      }
    },
    {
      "name": "FM Bell Pluck",
      "category": "Percussion/Melodic",
      "description": "Bell-like pluck for melodies",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sine", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sine", "pitch": 12, "fine": 0 },
          "osc3": { "wave": "Sine", "pitch": 24, "fine": 0 }
        },
        "modulation": { "mode": "2 to 1 FM", "amount": 65 },
        "mix": { "osc2": 100, "osc3": 35, "noise": 0 },
        "unisono": { "voices": 3, "stereo": 50, "detune": 30 },
        "filter": { "type": "LP", "cutoff": 95, "res": 10 },
        "levelEg": { "attack": 0, "decay": 25, "sustain": 15, "release": 30 }
      },
      "fxEnabled": ["ECHO", "RVRB"],
      "fxSettings": {
        "ECHO": { "x": 40, "y": 65 },
        "RVRB": { "x": 35, "y": 25 }
      }
    },
    {
      "name": "Growl Bass",
      "category": "Dubstep/EDM",
      "description": "Aggressive growl bass with sync",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sawtooth", "pitch": 12, "fine": 0 },
          "osc3": { "wave": "Sawtooth", "pitch": 24, "fine": 0 }
        },
        "modulation": { "mode": "1 SYNC", "amount": 70 },
        "mix": { "osc2": 100, "osc3": 60, "noise": 10 },
        "unisono": { "voices": 4, "stereo": 30, "detune": 40 },
        "filter": { "type": "LP", "cutoff": 65, "res": 40 },
        "envelope1": { "dest": "OSC2 PITCH", "attack": 0, "decay": 40, "amount": 50 },
        "lfo1": { "dest": "CUTOFF", "rate": 55, "amount": 40, "shape": "Saw" },
        "levelEg": { "attack": 0, "decay": 35, "sustain": 80, "release": 25 }
      },
      "fxEnabled": ["DIST", "HPF"],
      "fxSettings": {
        "DIST": { "x": 45, "y": 55 },
        "HPF": { "x": 20, "y": 10 }
      }
    },
    {
      "name": "Trance Gate Lead",
      "category": "Trance",
      "description": "Lead with built-in trance gate",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sawtooth", "pitch": 0, "fine": 6 },
          "osc3": { "wave": "Sawtooth", "pitch": 0, "fine": -6 }
        },
        "mix": { "osc2": 100, "osc3": 80, "noise": 0 },
        "unisono": { "voices": 6, "stereo": 70, "detune": 50 },
        "filter": { "type": "LP", "cutoff": 80, "res": 15 },
        "levelEg": { "attack": 0, "decay": 20, "sustain": 95, "release": 30 }
      },
      "fxEnabled": ["FLNG", "RVRB", "TRNC"],
      "fxSettings": {
        "FLNG": { "x": 35, "y": 30 },
        "RVRB": { "x": 45, "y": 35 },
        "TRNC": { "x": 25, "y": 75 }
      }
    },
    {
      "name": "Lo-Fi Keys",
      "category": "Hip-Hop/Lo-Fi",
      "description": "Warming keys with bit crush",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Triangle", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Pulse", "pitch": 12, "fine": 0 },
          "osc3": { "wave": "Sine", "pitch": -12, "fine": 0 }
        },
        "mix": { "osc2": 70, "osc3": 60, "noise": 15 },
        "unisono": { "voices": 3, "stereo": 40, "detune": 35 },
        "filter": { "type": "LP", "cutoff": 70, "res": 10 },
        "lfo1": { "dest": "CUTOFF", "rate": 8, "amount": 15, "shape": "Sine" },
        "levelEg": { "attack": 5, "decay": 30, "sustain": 85, "release": 35 }
      },
      "fxEnabled": ["CRSH", "LPF", "ECHO"],
      "fxSettings": {
        "CRSH": { "x": 25, "y": 65 },
        "LPF": { "x": 70, "y": 15 },
        "ECHO": { "x": 30, "y": 60 }
      }
    },
    {
      "name": "Industrial Stab",
      "category": "Industrial/Techno",
      "description": "Aggressive inharmonic stab",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Square", "pitch": 7, "fine": 0 },
          "osc3": { "wave": "Noise", "pitch": 0, "fine": 0 }
        },
        "modulation": { "mode": "2 to 1 RM", "amount": 80 },
        "mix": { "osc2": 100, "osc3": 50, "noise": 25 },
        "unisono": { "voices": 2, "stereo": 60, "detune": 20 },
        "filter": { "type": "LP", "cutoff": 75, "res": 35 },
        "envelope1": { "dest": "CUTOFF", "attack": 0, "decay": 15, "amount": 60 },
        "levelEg": { "attack": 0, "decay": 20, "sustain": 20, "release": 25 }
      },
      "fxEnabled": ["DIST", "HPF", "ECHO"],
      "fxSettings": {
        "DIST": { "x": 55, "y": 50 },
        "HPF": { "x": 30, "y": 20 },
        "ECHO": { "x": 35, "y": 40 }
      }
    },
    {
      "name": "Reso Pluck",
      "category": "EDM/Pop",
      "description": "Resonant pluck for melodic lines",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Square", "pitch": 12, "fine": 3 },
          "osc3": { "wave": "None", "pitch": 0, "fine": 0 }
        },
        "mix": { "osc2": 75, "osc3": 0, "noise": 0 },
        "unisono": { "voices": 4, "stereo": 45, "detune": 35 },
        "filter": { "type": "LP", "cutoff": 50, "res": 55 },
        "envelope1": { "dest": "CUTOFF", "attack": 0, "decay": 25, "amount": 70 },
        "levelEg": { "attack": 0, "decay": 20, "sustain": 30, "release": 25 }
      },
      "fxEnabled": ["ECHO", "RVRB"],
      "fxSettings": {
        "ECHO": { "x": 35, "y": 70 },
        "RVRB": { "x": 30, "y": 25 }
      }
    }
  ]
}

```

---

## FILE: 02-Data\presets\mobile-optimized.json

```json
{
  "description": "Mobile-optimized GMS presets for FL Studio Mobile compatibility",
  "usage": "These presets use CPU-efficient settings while maintaining sound quality for mobile devices",
  "optimizationNotes": [
    "Keep unisono voices at 4 or less for mobile CPU efficiency",
    "Limit active FX to 2-3 modules",
    "Use simpler waveforms (sine, triangle) where possible",
    "Avoid heavy modulation simultaneously",
    "Presets are .gms format compatible with both Desktop and Mobile"
  ],
  "mobilePresets": [
    {
      "name": "Mobile Supersaw",
      "category": "Leads",
      "description": "CPU-friendly supersaw for mobile",
      "optimization": "4 voices instead of 8, 2 FX only",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sawtooth", "pitch": 0, "fine": 7 },
          "osc3": { "wave": "Sawtooth", "pitch": 0, "fine": -7 }
        },
        "mix": { "osc2": 100, "osc3": 60, "noise": 0 },
        "unisono": { "voices": 4, "stereo": 70, "detune": 45 },
        "filter": { "type": "LP", "cutoff": 82, "res": 15 },
        "levelEg": { "attack": 0, "decay": 25, "sustain": 90, "release": 30 }
      },
      "fxEnabled": ["FLNG", "RVRB"],
      "fxSettings": {
        "FLNG": { "x": 35, "y": 25 },
        "RVRB": { "x": 40, "y": 30 }
      }
    },
    {
      "name": "Mobile 808",
      "category": "Bass",
      "description": "Efficient sub bass for mobile production",
      "optimization": "Single voice, minimal modulation, 1 FX",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sine", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sine", "pitch": 24, "fine": 0 },
          "osc3": { "wave": "None", "pitch": 0, "fine": 0 }
        },
        "modulation": { "mode": "2 to 1 FM", "amount": 35 },
        "mix": { "osc2": 85, "osc3": 0, "noise": 5 },
        "unisono": { "voices": 1, "stereo": 0, "detune": 0 },
        "filter": { "type": "LP", "cutoff": 48, "res": 5 },
        "envelope1": { "dest": "PITCH", "attack": 0, "decay": 28, "amount": -30 },
        "levelEg": { "attack": 0, "decay": 18, "sustain": 65, "release": 32 }
      },
      "fxEnabled": ["DIST"],
      "fxSettings": {
        "DIST": { "x": 15, "y": 80 }
      }
    },
    {
      "name": "Mobile Pluck",
      "category": "Melodic",
      "description": "Light pluck for mobile melodies",
      "optimization": "2 voices, 1 FX, simple FM",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sine", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sine", "pitch": 12, "fine": 0 },
          "osc3": { "wave": "None", "pitch": 0, "fine": 0 }
        },
        "modulation": { "mode": "2 to 1 FM", "amount": 55 },
        "mix": { "osc2": 100, "osc3": 0, "noise": 0 },
        "unisono": { "voices": 2, "stereo": 40, "detune": 25 },
        "filter": { "type": "LP", "cutoff": 90, "res": 8 },
        "levelEg": { "attack": 0, "decay": 28, "sustain": 12, "release": 28 }
      },
      "fxEnabled": ["ECHO"],
      "fxSettings": {
        "ECHO": { "x": 30, "y": 65 }
      }
    },
    {
      "name": "Mobile Pad",
      "category": "Pads",
      "description": "Wide pad optimized for mobile",
      "optimization": "6 voices (balanced), 2 FX, no LFO modulation",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Triangle", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Triangle", "pitch": 7, "fine": 4 },
          "osc3": { "wave": "Triangle", "pitch": -7, "fine": -4 }
        },
        "mix": { "osc2": 80, "osc3": 70, "noise": 0 },
        "unisono": { "voices": 6, "stereo": 90, "detune": 55 },
        "filter": { "type": "LP", "cutoff": 65, "res": 12 },
        "envelope1": { "dest": "CUTOFF", "attack": 45, "decay": 55, "amount": 25 },
        "levelEg": { "attack": 60, "decay": 55, "sustain": 95, "release": 55 }
      },
      "fxEnabled": ["RVRB"],
      "fxSettings": {
        "RVRB": { "x": 55, "y": 40 }
      }
    },
    {
      "name": "Mobile Arp",
      "category": "Sequence",
      "description": "Tight arp for mobile sequences",
      "optimization": "2 voices, simple subtractive, 1 FX",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sawtooth", "pitch": 12, "fine": 0 },
          "osc3": { "wave": "None", "pitch": 0, "fine": 0 }
        },
        "mix": { "osc2": 70, "osc3": 0, "noise": 0 },
        "unisono": { "voices": 2, "stereo": 30, "detune": 20 },
        "filter": { "type": "LP", "cutoff": 75, "res": 20 },
        "envelope1": { "dest": "CUTOFF", "attack": 0, "decay": 18, "amount": 45 },
        "levelEg": { "attack": 0, "decay": 22, "sustain": 35, "release": 22 }
      },
      "fxEnabled": ["ECHO"],
      "fxSettings": {
        "ECHO": { "x": 32, "y": 70 }
      }
    },
    {
      "name": "Mobile Trap Lead",
      "category": "Leads",
      "description": "Bright trap lead for mobile",
      "optimization": "4 voices, 2 FX, moderate detune",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sawtooth", "pitch": 7, "fine": 3 },
          "osc3": { "wave": "Sawtooth", "pitch": -5, "fine": -3 }
        },
        "mix": { "osc2": 85, "osc3": 45, "noise": 0 },
        "unisono": { "voices": 4, "stereo": 55, "detune": 40 },
        "filter": { "type": "LP", "cutoff": 85, "res": 15 },
        "levelEg": { "attack": 0, "decay": 22, "sustain": 90, "release": 30 }
      },
      "fxEnabled": ["DIST", "ECHO"],
      "fxSettings": {
        "DIST": { "x": 22, "y": 75 },
        "ECHO": { "x": 28, "y": 60 }
      }
    },
    {
      "name": "Mobile Wobble",
      "category": "Bass",
      "description": "Basic wobble for mobile dubstep",
      "optimization": "3 voices, 1 LFO, 2 FX",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sawtooth", "pitch": 12, "fine": 0 },
          "osc3": { "wave": "None", "pitch": 0, "fine": 0 }
        },
        "mix": { "osc2": 100, "osc3": 0, "noise": 0 },
        "unisono": { "voices": 3, "stereo": 25, "detune": 35 },
        "filter": { "type": "LP", "cutoff": 60, "res": 35 },
        "lfo1": { "dest": "CUTOFF", "rate": 55, "amount": 60, "shape": "Triangle", "sync": "Beat" },
        "levelEg": { "attack": 0, "decay": 30, "sustain": 85, "release": 20 }
      },
      "fxEnabled": ["DIST"],
      "fxSettings": {
        "DIST": { "x": 40, "y": 60 }
      }
    },
    {
      "name": "Mobile Keys",
      "category": "Keys",
      "description": "Electric piano-style for mobile",
      "optimization": "3 voices, triangle waves, 1 FX",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Triangle", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Triangle", "pitch": 12, "fine": 2 },
          "osc3": { "wave": "Sine", "pitch": -12, "fine": 0 }
        },
        "mix": { "osc2": 65, "osc3": 50, "noise": 8 },
        "unisono": { "voices": 3, "stereo": 35, "detune": 30 },
        "filter": { "type": "LP", "cutoff": 75, "res": 10 },
        "envelope1": { "dest": "CUTOFF", "attack": 5, "decay": 30, "amount": 20 },
        "levelEg": { "attack": 5, "decay": 30, "sustain": 80, "release": 35 }
      },
      "fxEnabled": ["ECHO"],
      "fxSettings": {
        "ECHO": { "x": 25, "y": 55 }
      }
    }
  ],
  "mobileWorkflowTips": [
    "Save presets in .gms format for cross-platform compatibility",
    "Test patches on both desktop and mobile before finalizing",
    "Use freeze/render for complex patches in mobile projects",
    "Keep polyphony in mind - mobile has limited voices",
    "Export audio from mobile for desktop refinement",
    "Use simpler waveforms on mobile for CPU headroom",
    "Limit simultaneous GMS instances on mobile devices"
  ]
}

```

---

## FILE: 02-Data\presets\sound-archetypes.json

```json
{
  "description": "GMS sound archetypes - foundational building blocks for patch design",
  "usage": "Combine these archetypes to build complete patches for different genres and applications",
  "archetypes": {
    "supersawLead": {
      "name": "Supersaw Lead",
      "description": "Classic EDM supersaw with maximum thickness",
      "category": "Leads",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sawtooth", "pitch": 0, "fine": 7 },
          "osc3": { "wave": "Sawtooth", "pitch": 0, "fine": -7 }
        },
        "mix": { "osc2": 100, "osc3": 50, "noise": 0 },
        "unisono": { "voices": 8, "stereo": 75, "detune": 50 },
        "filter": { "type": "LP", "cutoff": 80, "res": 15 },
        "levelEg": { "attack": 0, "decay": 20, "sustain": 90, "release": 30 }
      },
      "fxChain": ["FLNG", "RVRB"],
      "fxSettings": {
        "FLNG": { "x": 40, "y": 30 },
        "RVRB": { "x": 40, "y": 25 }
      }
    },
    "fmBass": {
      "name": "FM Bass",
      "description": "Subby FM bass with harmonic character",
      "category": "Bass",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sine", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sine", "pitch": 12, "fine": 0 },
          "osc3": { "wave": "Sine", "pitch": -12, "fine": 0 }
        },
        "modulation": { "mode": "2 to 1 FM", "amount": 50 },
        "mix": { "osc2": 100, "osc3": 60, "noise": 0 },
        "unisono": { "voices": 2, "stereo": 10, "detune": 20 },
        "filter": { "type": "LP", "cutoff": 60, "res": 10 },
        "levelEg": { "attack": 0, "decay": 40, "sustain": 80, "release": 25 }
      },
      "fxChain": ["DIST"],
      "fxSettings": {
        "DIST": { "x": 25, "y": 70 }
      }
    },
    "syncBass": {
      "name": "Sync Sweep Bass",
      "description": "Aggressive sync bass with envelope modulation",
      "category": "Bass",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sawtooth", "pitch": 12, "fine": 0 },
          "osc3": { "wave": "Sine", "pitch": -12, "fine": 0 }
        },
        "modulation": { "mode": "1 SYNC", "amount": 60 },
        "mix": { "osc2": 100, "osc3": 50, "noise": 0 },
        "unisono": { "voices": 3, "stereo": 15, "detune": 30 },
        "filter": { "type": "LP", "cutoff": 70, "res": 25 },
        "envelope1": { "dest": "OSC2 PITCH", "attack": 0, "decay": 35, "amount": 40 },
        "levelEg": { "attack": 0, "decay": 30, "sustain": 85, "release": 20 }
      },
      "fxChain": ["DIST", "LPF"],
      "fxSettings": {
        "DIST": { "x": 35, "y": 65 },
        "LPF": { "x": 75, "y": 20 }
      }
    },
    "eightOhEight": {
      "name": "808 Style",
      "description": "Classic 808 sub bass with pitch drop",
      "category": "Bass",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sine", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sine", "pitch": 24, "fine": 0 },
          "osc3": { "wave": "Sine", "pitch": 0, "fine": 0 }
        },
        "modulation": { "mode": "2 to 1 FM", "amount": 35 },
        "mix": { "osc2": 80, "osc3": 0, "noise": 5 },
        "unisono": { "voices": 1, "stereo": 0, "detune": 0 },
        "filter": { "type": "LP", "cutoff": 50, "res": 0 },
        "envelope1": { "dest": "PITCH", "attack": 0, "decay": 25, "amount": -40 },
        "levelEg": { "attack": 0, "decay": 10, "sustain": 60, "release": 40 }
      },
      "fxChain": ["DIST"],
      "fxSettings": {
        "DIST": { "x": 15, "y": 80 }
      }
    },
    "widePad": {
      "name": "Wide Atmospheric Pad",
      "description": "Lush stereo pad with movement",
      "category": "Pads",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Triangle", "pitch": 12, "fine": 5 },
          "osc3": { "wave": "Triangle", "pitch": -12, "fine": -5 }
        },
        "mix": { "osc2": 70, "osc3": 60, "noise": 0 },
        "unisono": { "voices": 10, "stereo": 95, "detune": 60 },
        "filter": { "type": "LP", "cutoff": 65, "res": 20 },
        "envelope1": { "dest": "CUTOFF", "attack": 40, "decay": 50, "amount": 30 },
        "lfo1": { "dest": "CUTOFF", "rate": 20, "amount": 15, "shape": "Sine" },
        "levelEg": { "attack": 50, "decay": 60, "sustain": 95, "release": 60 }
      },
      "fxChain": ["PHSR", "ECHO", "RVRB"],
      "fxSettings": {
        "PHSR": { "x": 35, "y": 25 },
        "ECHO": { "x": 45, "y": 50 },
        "RVRB": { "x": 60, "y": 40 }
      }
    },
    "pluck": {
      "name": "FM Pluck",
      "description": "Bell-like pluck sound",
      "category": "Leads",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sine", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sine", "pitch": 12, "fine": 0 },
          "osc3": { "wave": "Sine", "pitch": 24, "fine": 0 }
        },
        "modulation": { "mode": "2 to 1 FM", "amount": 60 },
        "mix": { "osc2": 100, "osc3": 30, "noise": 0 },
        "unisono": { "voices": 2, "stereo": 40, "detune": 25 },
        "filter": { "type": "LP", "cutoff": 90, "res": 10 },
        "levelEg": { "attack": 0, "decay": 30, "sustain": 10, "release": 25 }
      },
      "fxChain": ["ECHO", "RVRB"],
      "fxSettings": {
        "ECHO": { "x": 35, "y": 60 },
        "RVRB": { "x": 30, "y": 20 }
      }
    },
    "trapLead": {
      "name": "Modern Trap Lead",
      "description": "Bright lead for trap/hip-hop",
      "category": "Leads",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sawtooth", "pitch": 7, "fine": 3 },
          "osc3": { "wave": "Sawtooth", "pitch": -5, "fine": -3 }
        },
        "mix": { "osc2": 80, "osc3": 50, "noise": 0 },
        "unisono": { "voices": 5, "stereo": 50, "detune": 40 },
        "filter": { "type": "LP", "cutoff": 85, "res": 15 },
        "levelEg": { "attack": 0, "decay": 20, "sustain": 90, "release": 30 }
      },
      "fxChain": ["DIST", "ECHO"],
      "fxSettings": {
        "DIST": { "x": 20, "y": 75 },
        "ECHO": { "x": 30, "y": 65 }
      }
    },
    "texture": {
      "name": "Ring Mod Texture",
      "description": "Inharmonic texture for effects",
      "category": "FX",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Square", "pitch": 3, "fine": 0 },
          "osc3": { "wave": "Noise", "pitch": 0, "fine": 0 }
        },
        "modulation": { "mode": "2 to 1 RM", "amount": 70 },
        "mix": { "osc2": 100, "osc3": 40, "noise": 20 },
        "unisono": { "voices": 6, "stereo": 80, "detune": 55 },
        "filter": { "type": "LP", "cutoff": 70, "res": 30 },
        "lfo1": { "dest": "AMOUNT", "rate": 25, "amount": 40, "shape": "Triangle" },
        "levelEg": { "attack": 20, "decay": 50, "sustain": 80, "release": 40 }
      },
      "fxChain": ["PHSR", "RVRB"],
      "fxSettings": {
        "PHSR": { "x": 50, "y": 40 },
        "RVRB": { "x": 55, "y": 50 }
      }
    },
    "wobbleBass": {
      "name": "Wobble Bass",
      "description": "Dubstep-style wobble bass",
      "category": "Bass",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Sawtooth", "pitch": 12, "fine": 0 },
          "osc3": { "wave": "Sine", "pitch": -12, "fine": 0 }
        },
        "mix": { "osc2": 100, "osc3": 60, "noise": 0 },
        "unisono": { "voices": 3, "stereo": 20, "detune": 35 },
        "filter": { "type": "LP", "cutoff": 60, "res": 35 },
        "lfo1": { "dest": "CUTOFF", "rate": 60, "amount": 70, "shape": "Triangle", "sync": "Beat" },
        "levelEg": { "attack": 0, "decay": 30, "sustain": 85, "release": 20 }
      },
      "fxChain": ["DIST", "HPF"],
      "fxSettings": {
        "DIST": { "x": 40, "y": 60 },
        "HPF": { "x": 15, "y": 0 }
      }
    },
    "arpeggio": {
      "name": "Fast Arpeggio",
      "description": "Tight pluck for arpeggios",
      "category": "Leads",
      "settings": {
        "oscillators": {
          "osc1": { "wave": "Sawtooth", "pitch": 0, "fine": 0 },
          "osc2": { "wave": "Square", "pitch": 12, "fine": 0 },
          "osc3": { "wave": "None", "pitch": 0, "fine": 0 }
        },
        "mix": { "osc2": 60, "osc3": 0, "noise": 0 },
        "unisono": { "voices": 2, "stereo": 30, "detune": 20 },
        "filter": { "type": "LP", "cutoff": 75, "res": 20 },
        "envelope1": { "dest": "CUTOFF", "attack": 0, "decay": 15, "amount": 50 },
        "levelEg": { "attack": 0, "decay": 20, "sustain": 30, "release": 20 }
      },
      "fxChain": ["ECHO"],
      "fxSettings": {
        "ECHO": { "x": 35, "y": 70 }
      }
    }
  }
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (GMS)

## Rule 1: The "Mono-Compatible" Supersaw
*   **Rule:** When using max Unisono for a lead, check your mono compatibility.
*   **GMS Move:** Keep **Oscillator 3** set to a simple Sine wave with **Unisono OFF**. This provides a solid mono "core" to the sound that won't disappear in mono, even if Osc 1 & 2 are wide.

## Rule 2: Gain Staging the FX Rack
*   **Rule:** The built-in Distortion in GMS is very sensitive.
*   **GMS Move:** Keep the **Distortion Mix** below 30% for R&B. Over-distorting inside GMS can kill the "Vibe" and make the mix sound amateur and harsh.

## Rule 3: Percussive Plucks
*   **Rule:** For modern Trap melodies, the "Pluck" sound is essential.
*   **GMS Move:** Set **Decay** to ~300ms and **Sustain** to 0 on the Filter Envelope. Link the **Env Amount** to the Cutoff. This creates that sharp, percussive "bounce." [SRC: REPUTABLE]

## Rule 4: Sub-Bass Integrity
*   **Rule:** If using GMS for bass, disable all FX except maybe a tiny bit of Distortion.
*   **Reason:** Reverb or Flanger on a sub-bass creates phase cancellation that ruins the kick drum's impact.

## Rule 5: Mobile-to-Desktop Translation
*   **Rule:** If you made a preset on FL Studio Mobile, save it as a **.gms** file to ensure it opens perfectly on Desktop. Desktop-only features (like advanced modulation) might not travel back to Mobile. [SRC: IL-MAN]

```

---

## FILE: 02-Data\rules\genre-conventions.json

```json
{
  "description": "Genre-specific synthesis guidelines for GMS",
  "usage": "Follow these rules when designing sounds for specific musical genres",
  "genres": {
    "edm": {
      "name": "Electronic Dance Music",
      "subgenres": ["House", "Trance", "Big Room", "Future Bass"],
      "rules": {
        "leads": {
          "waveform": "Sawtooth for all oscillators",
          "unisono": "6-8 voices, 70-80% stereo, 50-60% detune",
          "filter": "LP with medium resonance (15-25%)",
          "fx": "FLNG + RVRB + optional DIST for saturation",
          "envelope": "Fast attack, medium decay, high sustain"
        },
        "bass": {
          "waveform": "Sawtooth or FM sines",
          "unisono": "2-4 voices max, 20-30% stereo",
          "filter": "LP with modulation, try BP for midrange",
          "fx": "DIST essential, HPF to clean mud",
          "modulation": "LFO to cutoff for wobble"
        },
        "pads": {
          "waveform": "Sawtooth or triangle",
          "unisono": "8-12 voices, 90-100% stereo, 60-70% detune",
          "filter": "LP with slow envelope modulation",
          "fx": "PHSR + ECHO + RVRB",
          "lfo": "Slow filter movement, pan modulation"
        }
      },
      "vibeTargets": {
        "brightAir": {
          "unisono": "8 voices, wide stereo",
          "filter": "85-95% cutoff",
          "fx": "FLNG + high shelf EQ boost",
          "result": "Shimmering, airy leads"
        },
        "subWeight": {
          "modulation": "FM mode with sines",
          "osc3": "Sub octave sine",
          "unisono": "1 voice mono",
          "result": "Deep, powerful subs"
        },
        "presentMid": {
          "filter": "Resonant LP around 70-80%",
          "fx": "Light DIST for edge",
          "eq": "Boost 1.5-3kHz range",
          "result": "Forward, present sounds"
        }
      }
    },
    "trap": {
      "name": "Trap / Hip-Hop",
      "subgenres": ["Drill", "Cloud Rap", "Dark Trap"],
      "rules": {
        "808Bass": {
          "waveform": "Sine waves for all",
          "modulation": "FM mode, 40% amount",
          "envelope": "Pitch drop (negative pitch env)",
          "unisono": "1 voice mono",
          "fx": "Light DIST, HPF at 15%",
          "osc3": "Sub layer at -12 semitones"
        },
        "melodicLeads": {
          "waveform": "Sawtooth or triangle",
          "unisono": "4-6 voices, 50-60% stereo",
          "filter": "LP with envelope modulation",
          "fx": "DIST + ECHO",
          "glide": "Medium portamento for slides"
        },
        "darkPads": {
          "waveform": "Sawtooth or pulse",
          "unisono": "6-8 voices, 70% stereo",
          "filter": "Lower cutoff (50-60%)",
          "fx": "RVRB + PHSR",
          "lfo": "Slow filter sweep"
        }
      },
      "vibeTargets": {
        "darkMood": {
          "filter": "Low cutoff (45-55%)",
          "waveform": "Pulse or sawtooth",
          "fx": "Heavy RVRB, dark EQ",
          "result": "Atmospheric, dark"
        },
        "aggressiveEdge": {
          "modulation": "Sync or FM",
          "fx": "DIST at 35-50%",
          "filter": "Resonant with envelope",
          "result": "Aggressive, cutting"
        },
        "wideAir": {
          "unisono": "8 voices, wide spread",
          "fx": "RVRB + stereo widening",
          "result": " Spacious leads"
        }
      }
    },
    "pop": {
      "name": "Pop Music",
      "subgenres": ["Synth Pop", "Electropop", "Alt-Pop"],
      "rules": {
        "brightLeads": {
          "waveform": "Sawtooth or mix of saw+triangle",
          "unisono": "4-6 voices, 60% stereo",
          "filter": "Bright LP (80-90% cutoff)",
          "fx": "Subtle FLNG + ECHO",
          "eq": "Boost presence range"
        },
        "warmKeys": {
          "waveform": "Triangle or pulse",
          "unisono": "2-4 voices, 40% stereo",
          "filter": "Gentle LP",
          "fx": "Light CHRS + ECHO",
          "modulation": "Subtle pitch drift"
        },
        "modernBass": {
          "waveform": "Sawtooth or FM",
          "unisono": "2-3 voices, 15-25% stereo",
          "filter": "Tight envelope modulation",
          "fx": "Light saturation"
        }
      },
      "vibeTargets": {
        "brightAir": {
          "filter": "High cutoff, light resonance",
          "fx": "Subtle shimmer effects",
          "unisono": "Medium width for clarity",
          "result": "Bright, polished"
        },
        "presentMid": {
          "eq": "Presence boost (2-3kHz)",
          "fx": "Light compression",
          "filter": "Mid-focused",
          "result": "Forward in mix"
        },
        "warmLow": {
          "osc3": "Warm sub layer",
          "filter": "Gentle slope",
          "fx": "Analog-style saturation",
          "result": "Warm, full-bodied"
        }
      }
    },
    "experimental": {
      "name": "Experimental / Avant-Garde",
      "subgenres": ["IDM", "Glitch", "Ambient"],
      "rules": {
        "textures": {
          "modulation": "Ring Modulation for inharmonic",
          "waveform": "Any combination",
          "unisono": "High voices (10-16) for chaos",
          "fx": "CRSH + extreme processing",
          "lfo": "Multiple LFOs at different rates"
        },
        "rhythmic": {
          "modulation": "FM with high amounts",
          "fx": "TRNC gate essential",
          "lfo": "Synced to beat divisions",
          "envelope": "Percussive, staccato"
        },
        "ambient": {
          "waveform": "Sine, triangle",
          "unisono": "Max voices, wide stereo",
          "fx": "All spatial effects maxed",
          "envelope": "Very long attack and release"
        }
      },
      "vibeTargets": {
        "textureWeird": {
          "modulation": "RM with extreme settings",
          "fx": "CRSH + PHSR",
          "result": "Alien textures"
        }
      }
    }
  },
  "crossGenrePrinciples": [
    {
      "principle": "Bass must be mono-compatible",
      "application": "All genres",
      "rule": "Keep sub frequencies in mono (0% stereo spread)"
    },
    {
      "principle": "Leads need presence",
      "application": "All genres except ambient",
      "rule": "3-6kHz range must be audible for intelligibility"
    },
    {
      "principle": "Pads create space",
      "application": "All genres",
      "rule": "Use reverb and wide stereo for atmospheric elements"
    },
    {
      "principle": "FX serve the sound",
      "application": "All genres",
      "rule": "Effects should enhance, not dominate"
    }
  ],
  "source": "Image-Line GMS Manual"
}

```

---

## FILE: 02-Data\rules\gms-safety-rules.md

```markdown
Tags: moody | hip-hop/rap | electric

## GMS Safety Rules

### Gain Staging

| Sound Type | Osc Level | Filter Out | Master | Notes |
|------------|-----------|------------|--------|-------|
| Bass | 70% | -6 dB | -12 dB | Clean low-end |
| Lead | 80% | 0 dB | -3 dB | Needs to cut |
| Pad | 60% | -3 dB | -6 dB | Headroom for reverb |
| FX | 50% | -6 dB | -6 dB | Not foreground |

### Low-End Safety

1. **Filter below 40% for pure bass** - Higher cuts fundamental
2. **Resonance under 40% on bass** - Prevents muddy low-end
3. **Test in mono constantly** - Phase issues with detuned oscs
4. **Sidechain to kick** - GMS responds well to sidechain

### Avoid List

| ❌ Don't Do This | ❌ Result | ✅ Instead |
|-----------------|-----------|------------|
| High resonance on bass | Muddy, undefined | Keep under 35% |
| Too much width on bass | Lost mono presence | Reduce stereo width |
| Skip mono test | Poor translation | Test every patch |
| Over-modulate | Chaotic sound | Limit to 2-3 modulations |

```

---

## FILE: 02-Data\rules\sound-design-rules.json

```json
{
  "description": "Sound design decision rules - symptom to solution mappings for GMS synthesis",
  "usage": "Use these rules to diagnose and fix common synthesis problems",
  "rules": [
    {
      "id": "sound-too-thin",
      "symptom": "Sound is thin, weak, lacks body",
      "priority": 1,
      "solutions": [
        {
          "action": "Increase unisono voices",
          "parameter": "unisono.voices",
          "target": "4-8 voices",
          "note": "More voices = thicker sound"
        },
        {
          "action": "Add OSC 3 as sub layer",
          "parameter": "mix.osc3",
          "target": "50-70% with sine wave at -12 semitones",
          "note": "Adds low-end foundation"
        },
        {
          "action": "Enable OSC 2",
          "parameter": "mix.osc2",
          "target": "80-100%",
          "note": "Adds harmonic complexity"
        },
        {
          "action": "Increase detune",
          "parameter": "unisono.detune",
          "target": "40-60%",
          "note": "Creates chorus effect"
        }
      ],
      "category": "texture"
    },
    {
      "id": "sound-too-muddy",
      "symptom": "Sound is muddy, unclear, undefined",
      "priority": 1,
      "solutions": [
        {
          "action": "Reduce unisono voices",
          "parameter": "unisono.voices",
          "target": "1-3 voices",
          "note": "Fewer voices = more focused"
        },
        {
          "action": "Lower filter cutoff",
          "parameter": "filter.cutoff",
          "target": "60-75%",
          "note": "Removes excess highs"
        },
        {
          "action": "Reduce stereo spread",
          "parameter": "unisono.stereo",
          "target": "20-40%",
          "note": "Tighter stereo image"
        },
        {
          "action": "Enable HPF in FX rack",
          "parameter": "fx.HPF.x",
          "target": "15-25%",
          "note": "Removes low-end mud"
        }
      ],
      "category": "clarity"
    },
    {
      "id": "bass-lacks-impact",
      "symptom": "Bass sounds weak, no punch or sub presence",
      "priority": 1,
      "solutions": [
        {
          "action": "Use sine wave for bass",
          "parameter": "oscillators.wave",
          "target": "Sine or Triangle",
          "note": "Clean fundamental for sub"
        },
        {
          "action": "Set unisono to mono",
          "parameter": "unisono",
          "target": "1-2 voices, 0% stereo",
          "note": "Mono bass is essential"
        },
        {
          "action": "Add FM mode",
          "parameter": "modulation",
          "target": "2 to 1 FM, amount 30-50%",
          "note": "Adds harmonic character"
        },
        {
          "action": "Enable pitch envelope",
          "parameter": "envelope1",
          "target": "Dest: PITCH, amount -30 to -40%",
          "note": "Creates pitch drop (808 style)"
        }
      ],
      "category": "bass"
    },
    {
      "id": "lead-not-cutting",
      "symptom": "Lead doesn't cut through the mix",
      "priority": 2,
      "solutions": [
        {
          "action": "Use sawtooth wave",
          "parameter": "oscillators.wave",
          "target": "Sawtooth on all oscillators",
          "note": "Maximum harmonic content"
        },
        {
          "action": "Increase unisono",
          "parameter": "unisono",
          "target": "6-8 voices, 70% stereo",
          "note": "Wider, thicker lead"
        },
        {
          "action": "Add filter envelope",
          "parameter": "envelope1",
          "target": "Dest: CUTOFF, amount 30-50%",
          "note": "Adds bite on attack"
        },
        {
          "action": "Enable distortion",
          "parameter": "fx.DIST",
          "target": "X: 20-35%, Y: 70-80%",
          "note": "Adds edge and presence"
        },
        {
          "action": "Increase filter resonance",
          "parameter": "filter.res",
          "target": "20-30%",
          "note": "Emphasizes cutoff frequency"
        }
      ],
      "category": "leads"
    },
    {
      "id": "sound-too-digital",
      "symptom": "Sound is too sterile, digital, lacks character",
      "priority": 2,
      "solutions": [
        {
          "action": "Add subtle distortion",
          "parameter": "fx.DIST",
          "target": "X: 10-20%, Y: 75%",
          "note": "Analog-style saturation"
        },
        {
          "action": "Detune oscillators",
          "parameter": "oscillators.fine",
          "target": "±3 to ±8 cents",
          "note": "Natural analog drift"
        },
        {
          "action": "Enable bit crusher",
          "parameter": "fx.CRSH",
          "target": "X: 10-20%, Y: 60%",
          "note": "Lo-fi warmth"
        },
        {
          "action": "Add noise",
          "parameter": "mix.noise",
          "target": "5-15%",
          "note": "Analog noise floor simulation"
        }
      ],
      "category": "character"
    },
    {
      "id": "fm-sound-too-harsh",
      "symptom": "FM mode sounds too harsh or chaotic",
      "priority": 1,
      "solutions": [
        {
          "action": "Reduce FM amount",
          "parameter": "modulation.amount",
          "target": "30-50%",
          "note": "Less modulation = cleaner"
        },
        {
          "action": "Use sine waves only",
          "parameter": "oscillators.wave",
          "target": "Sine on OSC1 and OSC2",
          "note": "Cleanest FM timbres"
        },
        {
          "action": "Adjust FM ratio",
          "parameter": "osc2.pitch",
          "target": "+12 or +24 semitones",
          "note": "2:1 or 4:1 ratio for consonance"
        },
        {
          "action": "Add low-pass filter",
          "parameter": "filter",
          "target": "LP type, 60-70% cutoff",
          "note": "Tames harsh harmonics"
        }
      ],
      "category": "fm"
    },
    {
      "id": "pad-too-static",
      "symptom": "Pad sounds lifeless, boring, no movement",
      "priority": 2,
      "solutions": [
        {
          "action": "Add filter LFO",
          "parameter": "lfo1",
          "target": "Dest: CUTOFF, amount 15-25%",
          "note": "Gentle filter movement"
        },
        {
          "action": "Increase unisono detune",
          "parameter": "unisono.detune",
          "target": "60-75%",
          "note": "More chorusing effect"
        },
        {
          "action": "Enable phaser",
          "parameter": "fx.PHSR",
          "target": "X: 30-40%, Y: 25%",
          "note": "Subtle phase movement"
        },
        {
          "action": "Add slow pan LFO",
          "parameter": "lfo2",
          "target": "Dest: PAN, rate 8-12%",
          "note": "Stereo movement"
        },
        {
          "action": "Long attack time",
          "parameter": "levelEg.attack",
          "target": "40-60%",
          "note": "Slow fade in"
        }
      ],
      "category": "movement"
    },
    {
      "id": "pluck-too-long",
      "symptom": "Pluck sound has too much sustain, not percussive",
      "priority": 1,
      "solutions": [
        {
          "action": "Shorten decay",
          "parameter": "levelEg.decay",
          "target": "15-30%",
          "note": "Faster envelope"
        },
        {
          "action": "Lower sustain",
          "parameter": "levelEg.sustain",
          "target": "10-30%",
          "note": "Less hold level"
        },
        {
          "action": "Add filter envelope",
          "parameter": "envelope1",
          "target": "Dest: CUTOFF, fast decay",
          "note": "Closing filter creates pluck"
        },
        {
          "action": "Reduce release",
          "parameter": "levelEg.release",
          "target": "15-25%",
          "note": "Tighter cutoff"
        }
      ],
      "category": "envelope"
    },
    {
      "id": "sound-phaesy",
      "symptom": "Sound loses power in mono, phase cancellation",
      "priority": 1,
      "solutions": [
        {
          "action": "Reduce stereo spread",
          "parameter": "unisono.stereo",
          "target": "20-40%",
          "note": "Less extreme width"
        },
        {
          "action": "Lower unisono voices",
          "parameter": "unisono.voices",
          "target": "3-5 voices",
          "note": "Fewer phase interactions"
        },
        {
          "action": "Check mono compatibility",
          "parameter": null,
          "target": "Use FL Studio mono button",
          "note": "Always test in mono"
        },
        {
          "action": "For bass: mono only",
          "parameter": "unisono",
          "target": "1-2 voices, 0% stereo",
          "note": "Essential for sub frequencies"
        }
      ],
      "category": "phase"
    },
    {
      "id": "wobble-irregular",
      "symptom": "Wobble bass not rhythmic or irregular",
      "priority": 2,
      "solutions": [
        {
          "action": "Sync LFO to beat",
          "parameter": "lfo1.sync",
          "target": "Beat",
          "note": "Locks to tempo"
        },
        {
          "action": "Use triangle or sine",
          "parameter": "lfo1.shape",
          "target": "Triangle or Sine",
          "note": "Smooth wobble motion"
        },
        {
          "action": "Set appropriate rate",
          "parameter": "lfo1.rate",
          "target": "50-70% for 1/4 or 1/8 notes",
          "note": "Musical subdivision"
        },
        {
          "action": "Enable LFO retrigger",
          "parameter": "lfo1.retrig",
          "target": "On",
          "note": "Consistent wobble start"
        }
      ],
      "category": "lfo"
    },
    {
      "id": "effects-too-wet",
      "symptom": "FX are overwhelming the sound, too much effect",
      "priority": 2,
      "solutions": [
        {
          "action": "Reduce reverb",
          "parameter": "fx.RVRB.y",
          "target": "20-35%",
          "note": "Less wet signal"
        },
        {
          "action": "Lower echo feedback",
          "parameter": "fx.ECHO.x",
          "target": "20-35%",
          "note": "Fewer echoes"
        },
        {
          "action": "Use HPF before reverb",
          "parameter": "fx.HPF.x",
          "target": "20-30%",
          "note": "Cleaner reverb input"
        },
        {
          "action": "Disable unnecessary FX",
          "parameter": "fx.enabled",
          "target": "2-3 FX max",
          "note": "Less is more"
        }
      ],
      "category": "effects"
    },
    {
      "id": "cpu-overload",
      "symptom": "GMS causing CPU spikes or audio dropouts",
      "priority": 1,
      "solutions": [
        {
          "action": "Reduce unisono voices",
          "parameter": "unisono.voices",
          "target": "4 or fewer",
          "note": "Biggest CPU saver"
        },
        {
          "action": "Limit active FX",
          "parameter": "fx.enabled",
          "target": "2-3 modules",
          "note": "Each FX uses CPU"
        },
        {
          "action": "Freeze the channel",
          "parameter": null,
          "target": "Alt+F or Channel Settings > Freeze",
          "note": "Render to audio, zero CPU"
        },
        {
          "action": "Simplify oscillators",
          "parameter": "oscillators.wave",
          "target": "Use sine/triangle vs complex waves",
          "note": "Simpler waves use less CPU"
        }
      ],
      "category": "performance"
    }
  ]
}

```

---

## FILE: 02-Data\rules\workflow-decisions.json

```json
{
  "description": "Workflow decision trees for common GMS production tasks",
  "usage": "Follow these decision trees to choose the right approach",
  "workflows": [
    {
      "id": "supersaw",
      "goal": "Create modern supersaw lead",
      "steps": [
        {"step": 1, "action": "Set all oscillators to sawtooth", "reason": "Maximum harmonics"},
        {"step": 2, "action": "Detune OSC2 +7c, OSC3 -7c", "reason": "Natural thickness"},
        {"step": 3, "action": "Unisono: 6-8 voices, 70% stereo", "reason": "Chorus effect"},
        {"step": 4, "action": "Filter: LP, 85% cutoff, 20% res", "reason": "Bright tone"},
        {"step": 5, "action": "FX: FLNG + RVRB", "reason": "Space and width"}
      ]
    },
    {
      "id": "trap808",
      "goal": "Design trap-style 808 bass",
      "steps": [
        {"step": 1, "action": "All oscillators: sine wave", "reason": "Clean sub"},
        {"step": 2, "action": "FM mode, OSC2 at +24st", "reason": "Trap character"},
        {"step": 3, "action": "Unisono: 1 voice, mono", "reason": "Sub must be mono"},
        {"step": 4, "action": "EG1 to PITCH, -35%", "reason": "Pitch drop"},
        {"step": 5, "action": "Light DIST, HPF at 15%", "reason": "Control low-end"}
      ]
    },
    {
      "id": "wobble",
      "goal": "Create dubstep wobble bass",
      "steps": [
        {"step": 1, "action": "Sawtooth oscillators", "reason": "Aggressive tone"},
        {"step": 2, "action": "LFO1 to CUTOFF, 60% amount", "reason": "Wobble effect"},
        {"step": 3, "action": "LFO sync to beat", "reason": "Rhythmic"},
        {"step": 4, "action": "High filter resonance", "reason": "Vocal quality"},
        {"step": 5, "action": "Add DIST for grit", "reason": "Edge and presence"}
      ]
    },
    {
      "id": "pad",
      "goal": "Design atmospheric pad",
      "steps": [
        {"step": 1, "action": "Triangle or sawtooth waves", "reason": "Smooth tone"},
        {"step": 2, "action": "Max unisono voices (10-16)", "reason": "Maximum width"},
        {"step": 3, "action": "100% stereo spread", "reason": "Full width"},
        {"step": 4, "action": "Long attack (60%+)", "reason": "Slow fade-in"},
        {"step": 5, "action": "LFO to filter for movement", "reason": "Evolving texture"}
      ]
    }
  ]
}

```

---

## FILE: 03-Workflows\by-goal\00_Modern_Supersaw_Lead.md

```markdown
# Goal: Modern Supersaw Lead (GMS)

## Routing Context
*   **Track:** Main Lead.
*   **Mixer:** Needs a Limiter and a wide Stereo Enhancer.

## Step-by-Step Setup
1.  Initialize GMS (Bank: Default).
2.  **Osc 1:** Select "Saw".
3.  **Osc 2:** Select "Saw". Detune it by +10 cents.
4.  **Osc 3:** Select "Saw". Detune it by -10 cents.
5.  **Unisono:** Set to 8 voices.
6.  **Spread:** Set to 70%.
7.  **Filter:** Open Cutoff to 90%. Set Filter to "24dB Low Pass".

## Starting FX
*   **Chorus:** Enabled (Depth 30%).
*   **Reverb:** Enabled (Wet 20%, Size 60%).

## What to Listen For
*   The sound should be thick, wide, and "buzzing." If it sounds too harsh, slightly lower the Filter Cutoff.

## Variations
1.  **Plucked Supersaw:** Set the Filter Envelope Decay to 500ms and Sustain to 0.
2.  **Soft Supersaw:** Change Osc 1 to a "Pulse" wave for a less aggressive, more "Pop" energy.

## Pitfalls
*   **Mud:** If you have too many unison voices, the low-end will get muddy. Use the "High Pass" mode in the Filter section to cut everything below 150Hz. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\12_Vibe_Psychedelic.md

```markdown
# Vibe: Psychedelic Trance Gates (GMS)

## The Concept
A rhythmic, pulsing synth sound that "stutters" in time with the beat. Great for trippy transitions.

## Setup
*   **Target:** A long, sustained chord.

## Recipe
1.  **Oscillators:** Use a complex wavetable (e.g., "Digital 1").
2.  **FX:** Enable the **Gate** effect.
3.  **Sequence:** Inside the "Gate" effect, click the pattern dots to create a rhythmic "on/off" pattern (e.g., `X.X.XX.X`).
4.  **Modulation:** Link an **LFO** to the **Filter Cutoff**. Set the LFO shape to "Random" or "Sample & Hold."

## What to Listen For
*   The sound should "bounce" rhythmically. The random LFO will make the tone of the gate shifts sound different every time, creating a "psychedelic" evolving texture.

## Automation
*   Automate the **LFO Speed** to increase as the song approaches a drop.

## Variation
*   **Manual Gate:** Instead of using the internal gate, link the **GMS Master Volume** to a **Fruity Peak Controller** triggered by a muted hi-hat pattern.

```

---

## FILE: 03-Workflows\by-goal\aggressive-fm-leads.md

```markdown
# Workflow: Aggressive FM Lead Design

Creating cutting, metallic leads using FM synthesis.

## Goal
Design aggressive, complex leads that cut through dense EDM mixes using FM (Frequency Modulation) synthesis.

[SRC: IL-MAN]

---

## FM Fundamentals for Leads

### Basic FM Setup
`\`\`
MODULATION: 2 to 1 FM
OSC 1 (Carrier): Sawtooth or Sine
OSC 2 (Modulator): Sawtooth or Sine
OSC 2 PITCH: +12 semitones (2:1 ratio)
AMOUNT: 40-70%
`\`\`

**How it works:**
- OSC 2 modulates OSC 1's frequency
- Creates sideband harmonics
- More amount = more harmonics = more aggressive

---

## Step-by-Step Recipe

### Step 1: Carrier Selection
**For bright leads:** Sawtooth
**For controlled leads:** Sine

`\`\`
OSC 1: Sawtooth (for brightness)
PITCH: 0
FINE: 0
`\`\`

### Step 2: Modulator Setup
`\`\`
OSC 2: Sawtooth (match carrier)
PITCH: +12 semitones (2:1 ratio)
FINE: 0
`\`\`

**Ratio options:**
- +12 semitones (2:1) - Balanced harmonics
- +24 semitones (4:1) - Brighter, metallic
- +19 semitones (3:1) - Hollow, reedy

### Step 3: Modulation Amount
`\`\`
AMOUNT: 50-80%
`\`\`

**Guidelines:**
- 40-50%: Subtle FM character
- 60-70%: Strong metallic tone
- 80%+: Extreme, aggressive

### Step 4: Add Body with OSC 3
`\`\`
OSC 3: Sawtooth or Triangle
PITCH: -12 or -24 semitones
MIX: 40-60%
`\`\`

**Purpose:** Adds fundamental below FM complexity

### Step 5: Unisono Configuration
`\`\`
VOICES: 4-6 (FM is already complex)
STEREO: 50-70%
DETUNE: 40-50%
`\`\`

**Note:** Don't overdo unisono with FM - can get muddy.

### Step 6: Filter Taming
`\`\`
TYPE: LP
CUTOFF: 70-85%
RES: 20-30% (higher than supersaw)
`\`\`

**Why:** FM creates many harmonics; filter controls them.

### Step 7: Envelope Shaping
`\`\`
ATTACK: 0-5%
DECAY: 30-40%
SUSTAIN: 85-95%
RELEASE: 25-35%
`\`\`

### Step 8: FX Polish
`\`\`
DIST: X: 20-30%, Y: 65-75% (essential for aggression)
ECHO: Short slapback for depth
RVRB: Medium room
`\`\`

---

## FM Ratio Reference

| OSC 2 Pitch | Ratio | Character | Best For |
|-------------|-------|-----------|----------|
| +12 semitones | 2:1 | Balanced, musical | General leads |
| +24 semitones | 4:1 | Bright, metallic | Cutting leads |
| +19 semitones | 3:1 | Hollow, reedy | Unique texture |
| +28 semitones | 5:1 | Brass-like | Bold statements |

---

## Genre Applications

### Dubstep Lead
- **Ratio:** 2:1 or 4:1
- **Amount:** 70%+
- **Filter:** High resonance (35%+)
- **FX:** Heavy DIST

### Trance Lead
- **Ratio:** 2:1
- **Amount:** 50-60%
- **Unisono:** 6 voices
- **FX:** RVRB + FLNG

### Trap Lead
- **Ratio:** 4:1
- **Amount:** 60-70%
- **Filter:** Tight envelope
- **FX:** Light DIST

### Experimental/IDM
- **Ratio:** Try 3:1, 5:1, or even non-integer
- **Amount:** 80%+
- **Waveforms:** Experiment with different combos
- **FX:** All of them

---

## Controlling FM Harshness

### If Too Harsh
1. **Reduce amount:** Try 40% instead of 70%
2. **Filter lower:** Drop cutoff to 60-70%
3. **Use sine carrier:** Cleaner than sawtooth
4. **Add LPF FX:** Post-FX filter tames highs

### If Too Weak
1. **Increase amount:** Up to 80%+
2. **Brighter ratio:** Use 4:1 instead of 2:1
3. **More unisono:** Up to 6 voices
4. **Add DIST:** X: 25%+ for edge

---

## Advanced FM Techniques

### Dual FM Layers
`\`\`
Patch A: FM lead (as above)
Patch B: Same, different ratio
Mix: 50/50 for complex texture
`\`\`

### FM + Sync Hybrid
`\`\`
FM for complexity
Add SYNC mode for aggression
Result: Extremely aggressive tone
`\`\`

### Modulated FM Amount
`\`\`
EG1 → AMOUNT
ATK: 10%
DEC: 40%
AMNT: ±40%
Result: Changing FM complexity over time
`\`\`

---

## Quick FM Lead Recipe

`\`\`
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones
OSC 3: Sawtooth, -12 semitones, 50% mix

MODULATION: FM, 60% amount

UNISONO: 5 voices, 60% stereo, 45% detune
FILTER: LP, 78% cutoff, 25% res

EG1: Optional → CUTOFF for bite

FX:
- DIST: X 25%, Y 70%
- RVRB: Medium

RESULT: Aggressive, cutting FM lead
`\`\`

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Too chaotic | Lower amount, use 2:1 ratio |
| Not cutting | Increase amount, add DIST |
| Too digital | Detune OSC2 ±3 cents |
| CPU heavy | Reduce unisono to 3-4 |
| Phase issues | Reduce stereo spread |

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 03-Workflows\by-goal\creating-modern-supersaws.md

```markdown
# Workflow: Creating Modern Supersaws

Designing thick, professional supersaw leads for EDM and trance.

## Goal
Create the iconic "supersaw" sound - thick, bright, and shimmering leads that define modern electronic dance music.

[SRC: IL-MAN]

---

## The Supersaw Formula

### Step 1: Oscillator Configuration
**Waveform:** Sawtooth on all three oscillators

`\`\`
OSC 1: Sawtooth, Pitch 0, Fine 0
OSC 2: Sawtooth, Pitch 0, Fine +7 cents
OSC 3: Sawtooth, Pitch 0, Fine -7 cents
`\`\`

**Why this works:**
- Sawtooth contains all harmonics (brightest waveform)
- Fine detuning (±7 cents) creates natural beating
- Three oscillators = triple the voices

### Step 2: Unisono Settings
`\`\`
VOICES: 6-8 (or 10-12 for maximum impact)
STEREO: 70-80%
DETUNE: 50-60%
`\`\`

**Pro tip:** Start with 6 voices for writing, increase to 8-10 for final render.

### Step 3: Mix Balance
`\`\`
OSC 2 Mix: 100% (fully blended)
OSC 3 Mix: 60-80% (supporting layer)
NOISE: 0% (not needed for this sound)
`\`\`

### Step 4: Filter Setup
`\`\`
TYPE: LP (Low Pass)
CUTOFF: 80-90%
RES: 15-25%
KBD: 10-20% (optional tracking)
`\`\`

**Note:** Keep cutoff high for brightness, use resonance for character.

### Step 5: Envelope Shape
`\`\`
ATTACK: 0% (immediate)
DECAY: 20-30%
SUSTAIN: 90-95%
RELEASE: 30-40%
`\`\`

**For plucky supersaws:** Increase decay, lower sustain.

### Step 6: FX Chain
**Essential:**
1. **FLNG** - X: 40%, Y: 30% (thickening)
2. **RVRB** - X: 45%, Y: 25-35% (space)

**Optional:**
- **DIST** (light) - X: 15-25% for edge
- **ECHO** - Short delay for depth

---

## Genre Variations

### Trance Supersaw
- **Unisono:** 10-12 voices
- **Add:** TRNC gate effect
- **Filter:** Slight envelope modulation
- **FX:** Long reverb tail

### Future Bass Lead
- **Filter:** EG1 → CUTOFF with medium amount
- **Result:** "Talking" filter effect
- **LFO:** Subtle pitch vibrato
- **FX:** Heavy sidechain (external)

### Big Room Lead
- **Unisono:** 8 voices max
- **Filter:** Brighter (90%+ cutoff)
- **FX:** Minimal (just reverb)
- **Note:** Tighter for big room energy

---

## Common Mistakes

### 1. Too Many Voices
**Problem:** 16 voices = muddy, phase issues
**Fix:** 6-8 voices is the sweet spot

### 2. No Stereo Check
**Problem:** Sounds great stereo, weak mono
**Fix:** Test with FL Studio mono button, reduce stereo if needed

### 3. Too Much Detune
**Problem:** Out of tune, unfocused
**Fix:** Keep detune under 60% for musical results

### 4. Wrong Waveform
**Problem:** Using square or triangle
**Fix:** Always sawtooth for supersaws

---

## CPU Optimization

### Writing Phase
- Unisono: 4-6 voices
- FX: Basic (FLNG + RVRB only)

### Rendering Phase
- Unisono: 8-10 voices
- FX: Full chain
- Or: Freeze channel (Alt+F)

---

## Advanced Techniques

### Layered Supersaw
1. **Layer 1:** High unisono, narrow (for body)
2. **Layer 2:** Low unisono, wide (for shimmer)
3. **Mix:** Balance for perfect width

### Filter Envelope Supersaw
`\`\`
EG1 → CUTOFF
ATK: 0%
DEC: 40%
AMNT: +30%
Result: Opening filter on each note
`\`\`

### Stereo Movement
`\`\`
LFO1 → PAN
RATE: Slow (10-15%)
AMNT: 80%
Result: Gentle stereo wandering
`\`\`

---

## Quick Checklist

- [ ] All 3 oscillators = sawtooth
- [ ] OSC2 +7 cents, OSC3 -7 cents
- [ ] Unisono 6-8 voices
- [ ] Stereo 70-80%
- [ ] Detune 50-60%
- [ ] Filter LP, cutoff 80%+
- [ ] FLNG + RVRB enabled
- [ ] Test in mono
- [ ] CPU optimized (freeze if needed)

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 03-Workflows\by-goal\hybrid-synthesis-combos.md

```markdown
# Workflow: Hybrid Synthesis Techniques

Combining FM, Ring Modulation, and Sync for complex textures.

## Goal
Master the interaction between GMS's three oscillators using advanced hybrid synthesis techniques.

[SRC: IL-MAN]

---

## The Power of Three

GMS's true strength lies in combining:
- **OSC 1:** Primary tone
- **OSC 2:** Modulator (for FM, RM, or Sync)
- **OSC 3:** Independent layer (always free)

Even when using modulation on OSC 1+2, OSC 3 remains available for additional layers.

---

## Technique 1: FM + Sub Layer

### Concept
Use FM for complex tone, add OSC 3 as pure sub foundation.

### Setup
`\`\`
MODULATION: 2 to 1 FM
OSC 1: Sawtooth (carrier)
OSC 2: Sawtooth, +12 semitones (modulator)
AMOUNT: 50%

OSC 3: Sine, -12 semitones
MIX: 50%
`\`\`

### Result
- FM provides midrange complexity
- Sine sub provides low-end foundation
- Best of both worlds

### Applications
- **Complex bass:** FM character + solid sub
- **Leads:** Shimmering top + weighty bottom
- **Pads:** Texture + foundation

---

## Technique 2: Sync + Unisono

### Concept
Combine sync sweep with unisono for "supersync" effect.

### Setup
`\`\`
MODULATION: 1 SYNC
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones
AMOUNT: 60%

UNISONO: 6 voices
STEREO: 60%
DETUNE: 50%

EG1 → OSC2 PITCH
AMNT: +40%
`\`\`

### Result
- Each unison voice syncs independently
- Creates dense, aggressive texture
- Perfect for modern bass music

### Applications
- **Dubstep bass:** Aggressive sync sweep
- **Trap leads:** Cutting sync character
- **FX:** Extreme sync chaos

---

## Technique 3: RM + FM Stack

### Concept
Layer FM and Ring Modulation concepts with 3 oscillators.

### Setup
`\`\`
MODULATION: 2 to 1 FM
OSC 1: Sawtooth
OSC 2: Square, +7 semitones
AMOUNT: 40%

OSC 3: Sawtooth, -7 semitones
MIX: 60%
`\`\`

**Note:** While GMS only does one modulation mode at a time between OSC 1+2, you can create complex textures by:
- FM on OSC 1+2
- OSC 3 as additional modulated layer

### Advanced: Two GMS Layers
`\`\`
GMS 1: FM mode
GMS 2: RM mode
MIX: 50/50
Result: True FM + RM hybrid
`\`\`

---

## Technique 4: Modulated Modulation

### Concept
Use envelopes or LFOs to change the AMOUNT parameter over time.

### Setup
`\`\`
MODULATION: 2 to 1 FM
BASE AMOUNT: 30%

EG1 → AMOUNT
ATK: 0%
DEC: 40%
AMNT: +40%
`\`\`

### Result
- Sound starts with less FM (cleaner)
- Builds to more FM (complex)
- Evolving texture

### Applications
- **Evolving pads:** Changing complexity
- **Dynamic bass:** FM builds over note
- **Rhythmic:** LFO modulates amount

---

## Technique 5: Sync + Distortion

### Concept
Sync creates harmonics, distortion enhances them.

### Setup
`\`\`
MODULATION: 1 SYNC
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones
AMOUNT: 70%

FX:
  DIST: X: 45%, Y: 55%
  LPF: X: 75%, Y: 20% (tame)
`\`\`

### Result
- Sync creates bright harmonics
- Distortion adds grit
- LPF tames the madness

### Applications
- **Aggressive leads:** Maximum edge
- **Industrial bass:** Grit and power
- **FX:** Extreme sound design

---

## Technique 6: Noise + Modulation

### Concept
Add noise to modulated tones for texture.

### Setup
`\`\`
MODULATION: 2 to 1 FM
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones
AMOUNT: 50%

NOISE MIX: 15-25%
`\`\`

### Result
- FM provides musical tone
- Noise adds texture/grain
- Great for industrial/lo-fi

### Variations
- **High noise (30%):** Percussive, drum-like
- **Low noise (10%):** Subtle texture
- **Filtered noise:** Use LPF/HPF FX

---

## Technique 7: Dual LFO Modulation

### Concept
Use both LFOs for complex, multi-dimensional movement.

### Setup
`\`\`
LFO1 → CUTOFF
RATE: 30%
AMNT: ±30%
SHAPE: Triangle
SYNC: Beat

LFO2 → PAN
RATE: 10%
AMNT: 80%
SHAPE: Sine
SYNC: None (free)
`\`\`

### Result
- LFO1: Rhythmic filter wobble
- LFO2: Slow stereo wandering
- Complex, evolving sound

### Applications
- **Pads:** Maximum movement
- **Textures:** Organic feel
- **Experimental:** Chaos

---

## Technique 8: Multi-Stage Envelopes

### Concept
Use both EG1 and EG2 on different targets.

### Setup
`\`\`
EG1 → CUTOFF
ATK: 0%
DEC: 30%
AMNT: +40%
Purpose: Attack bite

EG2 → AMOUNT (modulation)
ATK: 20%
DEC: 50%
AMNT: +30%
Purpose: Building complexity
`\`\`

### Result
- Different envelope shapes
- Multi-dimensional evolution
- Sophisticated articulation

---

## Hybrid Combination Guide

| Technique | Best For | Complexity |
|-----------|----------|------------|
| FM + Sub | Bass, leads | Medium |
| Sync + Unisono | Dubstep, trap | High |
| RM + Noise | Industrial, FX | High |
| Modulated Modulation | Pads, evolving | Medium |
| Dual LFO | Textures, pads | High |
| Multi-Stage Envelopes | Sophisticated | High |

---

## CPU Considerations

### Heavy Techniques (High CPU)
- High unisono (10+) + FM
- Multiple LFOs + complex FX
- Solutions:
  - Reduce unisono for writing
  - Freeze channel for mixing
  - Render to audio

### Efficient Hybrids
- Low unisono (2-4) + FM
- Single LFO
- 2-3 FX max

---

## Sound Design Experiments

### Experiment 1: FM Chaos
`\`\`
FM mode
OSC 2: Random pitch each note
Amount: 80%+
Result: Unpredictable FM textures
`\`\`

### Experiment 2: Sync Sweep
`\`\`
Sync mode
EG1 → OSC2 PITCH
Slow attack, high amount
Result: Dramatic sync sweeps
`\`\`

### Experiment 3: RM Drone
`\`\`
RM mode
Low oscillators (C1-C2)
High amount (90%+)
Result: Industrial drone
`\`\`

---

## Quick Hybrid Recipes

### Complex Bass
`\`\`
FM mode, 45% amount
OSC 3 sine sub
6 voices unisono
DIST + LPF
Result: Modern bass
`\`\`

### Evolving Pad
`\`\`
FM mode
LFO → cutoff
LFO → pan
High unisono
Result: Living pad
`\`\`

### Aggressive Lead
`\`\`
Sync mode
High amount
DIST + unisono
Result: Cutting lead
`\`\`

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 03-Workflows\by-goal\rhythmic-trance-gates.md

```markdown
# Workflow: Rhythmic Trance Gate Workflows

Creating pumping, rhythmic patterns with the TRNC effect.

## Goal
Use GMS's built-in TRNC (Trance Gate) effect to create rhythmic pumping and gating without external sidechain compression.

[SRC: IL-MAN]

---

## Understanding TRNC

### What It Does
TRNC creates rhythmic volume drops - simulating the "sidechain pumping" effect popular in EDM and trance.

### Controls
`\`\`
X (Release): How fast the sound returns after drop
  Low X = Sharp pumping
  High X = Smooth swelling

Y (Drop): How much volume drops
  Low Y = Subtle
  High Y = Near silence
`\`\`

---

## Basic Trance Gate Setup

### Step 1: Enable TRNC
1. Click **TRNC** in FX rack
2. Click **GLUE** to enable permanently

### Step 2: Set Drop Amount
`\`\`
Y: 60-85%
`\`\`
**Guidelines:**
- 60% = Subtle pumping
- 75% = Standard sidechain feel
- 85%+ = Extreme gating

### Step 3: Set Release Time
`\`\`
X: 20-40%
`\`\`
**Guidelines:**
- 15-25% = Tight, modern pumping
- 30-40% = Classic trance swelling
- 50%+ = Slow, ambient breathing

### Step 4: LFO Sync (Essential!)
`\`\`
Access LFO section (below FX rack)
LFO Multiplier: Set to tempo
SYNC: Beat or Bar
RATE: Match your rhythm
`\`\`

**Sync options:**
- **1/4 notes:** Standard four-on-floor
- **1/8 notes:** Double-time pumping
- **1/2 notes:** Slow, dramatic

---

## Genre-Specific Settings

### EDM Sidechain Simulation
`\`\`
Y: 75%
X: 25%
SYNC: Beat (1/4 notes)
Result: Classic sidechain pumping
`\`\`

### Trance Gate
`\`\`
Y: 80%
X: 35%
SYNC: Beat (1/8 or 1/4)
Result: Classic trance rhythm
`\`\`

### Ambient Breathing
`\`\`
Y: 50%
X: 60%
SYNC: Bar
Result: Slow, atmospheric
`\`\`

### Stutter Effect
`\`\`
Y: 90%
X: 10%
SYNC: Beat (1/16 or faster)
Result: Glitchy stutter
`\`\`

---

## Advanced Techniques

### Modulated Gate Intensity
`\`\`
LFO2 → TRNC Y (Drop amount)
RATE: Slow (8-16 bars)
SHAPE: Sine
Result: Gate intensity evolves over time
`\`\`

### Momentary Gate
Instead of GLUE:
1. Leave TRNC unglued
2. Click in X/Y panel during playback
3. Temporary gating effect
4. Great for live performance

### Gate + Filter Combo
`\`\`
TRNC: Standard pumping
LPF FX: Automate cutoff inversely
Result: As volume drops, filter closes
`\`\`

---

## Combining with Other FX

### Standard EDM Chain
`\`\`
ECHO (medium) → RVRB (room) → TRNC (pumping)
`\`\`
**Why:** Gate affects echoed/reverberated signal too

### Tight Modern Chain
`\`\`
HPF (15%) → TRNC (tight) → Light RVRB
`\`\`
**Why:** Clean low-end with pumping

### Ambient Chain
`\`\`
RVRB (large) → TRNC (slow) → PHSR (subtle)
`\`\`
**Why:** Atmospheric with slow breathing

---

## Sound Sources for Gating

### Best for TRNC
- **Pads:** Creates rhythmic interest in sustained sounds
- **Leads:** Adds movement to static tones
- **Bass:** Sidechain simulation (though subtle)
- **Effects:** Textures become rhythmic

### Avoid or Use Carefully
- **Percussion:** Already rhythmic, can get messy
- **Fast arps:** Conflicts with gate timing
- **Sub bass:** Keep consistent for power

---

## Creating Custom Rhythms

### Pattern Ideas

**1. Standard Four-on-Floor:**
- SYNC: Beat
- Works with any 4/4 tempo

**2. Syncopated:**
- SYNC: Beat
- Use 1/8 note rate
- Program different note lengths in piano roll
- Gate creates syncopation

**3. Triplets:**
- Set project to triplet grid
- SYNC: Beat
- Rate adjusted for feel

**4. Dotted Rhythms:**
- SYNC: Beat
- Use 1/4 + 1/8 feel
- Creates "push" rhythms

---

## Pro Tips

### 1. Layer Static + Gated
- **Channel 1:** Full pad (no gate)
- **Channel 2:** Same pad with TRNC
- **Mix:** 60/40 or 70/30
- **Result:** Body + rhythmic interest

### 2. Automate the Gate
- Automate Y (drop) for buildups
- Increase from 30% to 80%
- Creates intensity ramp

### 3. Manual Override
- Even with GLUE on, momentary click
- In X/Y panel creates different patterns
- Live performance trick

### 4. Different Rates per Layer
- **Layer 1:** 1/4 note gate
- **Layer 2:** 1/8 note gate
- **Mix:** Complex polyrhythms

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Not pumping | Check LFO sync, increase Y |
| Too choppy | Increase X (release) |
| Not in time | Verify SYNC is set to Beat/Bar |
| Too dramatic | Reduce Y (drop amount) |
| Too subtle | Increase Y, decrease X |

---

## Quick Setup

`\`\`
Enable TRNC in FX rack
GLUE: On

X (Release): 30%
Y (Drop): 75%

LFO Section:
SYNC: Beat
SHAPE: Square (for hard gate)
or Triangle (for soft swell)

RESULT: Classic sidechain pumping
`\`\`

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 03-Workflows\by-goal\trap-bassline-design.md

```markdown
# Workflow: Trap Bassline Design (808-Style)

Creating deep, punchy sub basses for trap and hip-hop production.

## Goal
Design 808-style bass sounds that have deep sub presence, pitch drop characteristics, and cut through modern trap mixes.

[SRC: IL-MAN]

---

## The 808 Formula

808 basses are characterized by:
1. Deep sub frequency (30-60Hz)
2. Pitch drop on attack ("bend")
3. Harmonic character (not pure sine)
4. Short-medium decay

---

## Step-by-Step Recipe

### Step 1: Pure Sine Foundation
`\`\`
OSC 1: Sine wave
PITCH: 0
FINE: 0
`\`\`

**Why sine?**
- Pure fundamental frequency
- No harmonics = maximum sub energy
- Cleanest low-end possible

### Step 2: Add FM Harmonics
`\`\`
MODULATION: 2 to 1 FM
OSC 2: Sine wave
OSC 2 PITCH: +24 semitones (+2 octaves)
AMOUNT: 35-45%
`\`\`

**Why FM?**
- Adds harmonics without adding mud
- Keeps sub frequencies clean
- 4:1 ratio (24 semitones) = bright but controlled

### Step 3: Sub Layer (Optional)
`\`\`
OSC 3: Sine wave
PITCH: -12 semitones (-1 octave)
MIX: 30-50%
`\`\`

**Purpose:** Extra sub octave for massive low-end

### Step 4: MONO ONLY
`\`\`
UNISONO:
  VOICES: 1 (single voice)
  STEREO: 0% (complete mono)
  DETUNE: 0%
`\`\`

**CRITICAL:** Sub bass MUST be mono.
- Phase cancellation destroys low-end
- Club systems play mono below ~100Hz anyway
- Stereo spread on sub = weaker bass

### Step 5: The Pitch Drop (Essential!)
`\`\`
ENVELOPE 1:
  DEST: PITCH
  ATTACK: 0%
  DECAY: 25-35%
  AMNT: -30 to -40% (negative!)
`\`\`

**How it works:**
- Negative amount = pitch goes DOWN
- Fast decay = quick drop
- Creates that "808 slide" effect

### Step 6: Amplitude Envelope
`\`\`
LEVEL EG:
  ATTACK: 0%
  DECAY: 15-25%
  SUSTAIN: 60-75%
  RELEASE: 30-40%
`\`\`

**Note:** Sustained tone for long 808 notes

### Step 7: Filter Control
`\`\`
FILTER:
  TYPE: LP
  CUTOFF: 45-55% (low!)
  RES: 0-10% (keep low)
`\`\`

**Purpose:**
- Removes any harshness from FM
- Keeps focus on sub frequencies
- Low resonance prevents "ringing"

### Step 8: Subtle FX
`\`\`
DIST:
  X: 15-20% (light drive)
  Y: 80%+ (tame highs)

HPF (in FX rack):
  X: 10-20% (remove sub-sub frequencies)
`\`\`

**Why so little FX?**
- 808s need to be clean
- Too much processing = muddy
- Keep it simple

---

## Variations

### Classic 808
`\`\`
Sine FM (as above)
Pitch drop: -35%
Short decay
Minimal FX
`\`\`

### Modern Trap 808
`\`\`
Add slight distortion (20%)
FM amount: 45% (more harmonics)
Use HPF to clean mud
`\`\`

### Saturated 808
`\`\`
More DIST: 30%+
Sawtooth OSC 3: 20% mix
Adds grit while keeping sub
`\`\`

### Short/Punch 808
`\`\`
Decay: 10-15%
Sustain: 40%
For faster patterns
`\`\`

---

## Mixing 808s

### Frequency Space
- **Fundamental:** 30-60Hz (the sub)
- **Body:** 60-120Hz (kick competition zone)
- **Character:** 120-250Hz (harmonics/click)

### Sidechain
Route your kick to sidechain the 808:
- 808 ducks when kick hits
- Prevents frequency collision
- Creates "pumping" feel

### EQ (Post-GMS)
- High-pass at 25-30Hz (remove rumble)
- Small boost at 50-60Hz (sub)
- Cut at 100-150Hz if competing with kick

---

## Writing 808 Patterns

### Note Lengths
- **1/4 notes:** Standard, sustained
- **1/8 notes:** Bouncy, rhythmic
- **1/2 + 1/4:** Dragged feel
- **Full bar:** Drone/ambient

### Pitch Programming
- **Root note:** Foundation
- **+5 semitones:** Common trap slide
- **+7 semitones:** Darker slide
- **Octave jumps:** Dramatic

### Velocity Variation
- Hard velocities = more punch
- Soft velocities = subtle layer
- Create dynamics with velocity

---

## Common 808 Mistakes

### 1. Not Mono
**Problem:** Phase cancellation, weak bass
**Fix:** Always mono unisono

### 2. Too Much Distortion
**Problem:** Upper harmonics mask sub
**Fix:** Keep DIST light (under 25%)

### 3. No Pitch Drop
**Problem:** Sounds like generic sub
**Fix:** Always add negative pitch envelope

### 4. Competing with Kick
**Problem:** Kick and 808 fight
**Fix:** Sidechain or different octaves

### 5. Too Long Release
**Problem:** 808s overlap, muddy
**Fix:** Match release to tempo

---

## Advanced Techniques

### Multi-Layer 808
`\`\`
Layer 1: Pure sine sub (mono, super low)
Layer 2: FM 808 (as above)
Layer 3: Click/transient (high-passed noise)
`\`\`

### Distortion Parallel
`\`\`
GMS: Clean 808
Parallel channel: Heavy DIST
Mix: 80% clean, 20% distorted
Result: Clean sub + gritty top
`\`\`

### Glide/Portamento
`\`\`
MONO VOICE: On
FREQ SLIDE: 20-40%
Result: Slides between notes
`\`\`

---

## Quick 808 Checklist

- [ ] OSC 1: Sine wave
- [ ] FM mode: OSC2 at +24st, 40% amount
- [ ] Unisono: 1 voice, 0% stereo (MONO!)
- [ ] EG1 → PITCH: -35%, fast decay
- [ ] Filter: Low cutoff (under 60%)
- [ ] Light DIST + HPF
- [ ] Test on headphones (sub check)
- [ ] Test in mono (phase check)
- [ ] Sidechain to kick

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 03-Workflows\by-goal\vibe-bright-airy.md

```markdown
# Workflow: Bright and Airy

Achieving shimmer, sparkle, and high-frequency presence.

## Goal
Create sounds with exceptional brightness, air, and high-frequency detail that sits on top of a mix.

[SRC: IL-MAN]

---

## The Brightness Formula

### Oscillator Strategy
`\`\`
Primary: Sawtooth (brightest waveform)
Unisono: 6-8 voices
Stereo: 80%+
Detune: 50-60%
`\`\`

### Filter Approach
`\`\`
Type: LP (ironically)
Cutoff: 85-95%
Resonance: 20-30% (boosts at cutoff)
`\`\`

**Why LP for brightness?**
- High cutoff lets all highs through
- Resonance creates peak at cutoff
- Controlled brightness vs chaos

---

## Step-by-Step Recipe

### Step 1: Waveform Selection
`\`\`
OSC 1: Sawtooth (all harmonics)
OSC 2: Sawtooth, fine +7
OSC 3: Triangle or Sawtooth
`\`\`

### Step 2: Maximum Unisono
`\`\`
VOICES: 8-12
STEREO: 85-95%
DETUNE: 55-65%
`\`\`

**Purpose:** Creates shimmering, airy texture

### Step 3: Bright Filter Settings
`\`\`
TYPE: LP
CUTOFF: 88-95%
RES: 25-35%
KBD: 15-25%
`\`\`

**The resonance trick:**
- High cutoff + resonance = brightness boost
- Creates "screaming" filter peak

### Step 4: Fast Envelope
`\`\`
ATTACK: 0-5%
DECAY: 20-30%
SUSTAIN: 90%+
RELEASE: 25-35%
`\`\`

### Step 5: Filter Envelope (Optional)
`\`\`
EG1 → CUTOFF
ATK: 0%
DEC: 15-25%
AMNT: +20 to +30%
`\`\`

**Result:** Extra bite on attack

### Step 6: Essential FX Chain
`\`\`
FLNG: X: 45%, Y: 35% (adds shimmer)
RVRB: X: 50%, Y: 25% (space and air)
`\`\`

**Avoid:**
- Heavy DIST (darkens)
- Bit crusher (unless lo-fi)
- LPF FX (obviously)

### Step 7: Post-FX EQ Boost
`\`\`
Enable 5-band EQ
Band 4 (8kHz): +2 to +4 dB
Band 5 (12kHz): +3 to +5 dB
`\`\`

---

## Applications

### Shimmering Lead
- High unisono
- Fast attack
- Long release with reverb

### Airy Pad
- Max unisono
- Slow envelope
- PHSR + RVRB

### Sparkle Arp
- High filter cutoff
- Short envelope
- Light FLNG

### Top-Layer FX
- Noise base
- High filter
- CRSH + RVRB

---

## Common Mistakes

### Too Bright
**Problem:** Harsh, fatiguing
**Fix:**
- Lower cutoff to 80%
- Reduce resonance
- Add LPF FX at 70%

### Thin Brightness
**Problem:** All highs, no body
**Fix:**
- Add OSC 3 sub layer
- Reduce detune to 40%
- Boost 200-400Hz in EQ

### Phase Issues
**Problem:** Wide but weak mono
**Fix:**
- Test mono compatibility
- Reduce stereo to 70%
- Use fewer voices (6-8)

---

## Pro Tips

### 1. Layer Bright + Dark
- **Layer 1:** Bright (as above)
- **Layer 2:** Darker version
- **Mix:** Bright provides shimmer, dark provides body

### 2. Automated Brightness
`\`\`
LFO → Filter Cutoff
Slow rate (5-10%)
Subtle amount (±10%)
Result: Breathing brightness
`\`\`

### 3. Resonance Sweep
`\`\`
Automate filter resonance
From 20% to 40%
With high cutoff
Result: Evolving scream
`\`\`

---

## Brightness Checklist

- [ ] Sawtooth waveforms
- [ ] High unisono (8+)
- [ ] Wide stereo (80%+)
- [ ] High cutoff (85%+)
- [ ] Medium-high resonance
- [ ] FLNG for shimmer
- [ ] EQ boost 8kHz+
- [ ] Test in mono

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 03-Workflows\by-goal\vibe-dark-moody.md

```markdown
# Workflow: Dark and Moody

Creating atmospheric, dark sounds for moody productions.

## Goal
Design sounds with reduced highs, enhanced mids/lows, and mysterious character for dark genres.

[SRC: IL-MAN]

---

## The Dark Sound Formula

### Core Elements
1. **Low filter cutoff** - Removes brightness
2. **Pulse/square waves** - Hollow, mysterious
3. **Moderate unisono** - Width without sparkle
4. **Heavy reverb** - Space and depth
5. **Slow movement** - Evolving, atmospheric

---

## Step-by-Step Recipe

### Step 1: Dark Waveforms
`\`\`
OSC 1: Pulse (50-70% width) or Square
OSC 2: Triangle or muted Sawtooth
OSC 3: Sine (for sub weight)
`\`\`

**Why these?**
- Pulse: Hollow, vintage character
- Triangle: Soft, mellow
- Avoid bright sawtooth

### Step 2: Controlled Width
`\`\`
UNISONO:
  VOICES: 5-7
  STEREO: 60-75%
  DETUNE: 45-55%
`\`\`

**Note:** Wide enough for space, not bright/aggressive

### Step 3: Low Filter Cutoff
`\`\`
FILTER:
  TYPE: LP
  CUTOFF: 45-65%
  RES: 10-20%
`\`\`

**Key:** Low cutoff removes highs = dark

### Step 4: Filter Movement
`\`\`
EG1 → CUTOFF
ATK: 20-40%
DEC: 50-60%
AMNT: +20 to +30%
`\`\`

**Result:** Dark swell rather than bright attack

### Step 5: Slow Envelope
`\`\`
LEVEL EG:
  ATTACK: 30-50%
  DECAY: 40-60%
  SUSTAIN: 75-90%
  RELEASE: 40-60%
`\`\`

**Atmosphere:** Slow attacks = mysterious

### Step 6: LFO Movement
`\`\`
LFO1 → CUTOFF
RATE: 10-20% (slow)
AMNT: ±15-25%
SHAPE: Sine
`\`\`

**Result:** Gentle, evolving darkness

### Step 7: Heavy Spatial FX
`\`\`
PHSR: X: 35%, Y: 30% (subtle movement)
ECHO: X: 40%, long time (space)
RVRB: X: 60-80%, Y: 40-55% (big room)
`\`\`

**Dark atmosphere needs space**

### Step 8: EQ for Darkness
`\`\`
5-Band EQ:
  Band 1 (60Hz): +2dB (weight)
  Band 2 (220Hz): Flat or +1dB
  Band 3 (1.5kHz): -1 to -2dB (remove edge)
  Band 4 (8kHz): -3 to -4dB (darken)
  Band 5 (12kHz): -4 to -6dB (no air)
`\`\`

---

## Dark Sound Applications

### Dark Pad
- Follow recipe exactly
- Max reverb
- Slow LFO filter

### Moody Bass
- Lower octave
- Pulse wave
- FM for grit

### Atmospheric Lead
- Triangle waves
- Long reverb tail
- Filter envelope swell

### Tension FX
- Ring modulation
- High reverb
- Random LFO

---

## Genre Applications

### Dark Trap
- Low cutoff (50%)
- Pulse waves
- Heavy reverb
- Slow attacks

### Ambient/Drone
- Sine waves
- Very slow envelopes
- Max reverb
- Subtle LFO

### Industrial
- Ring modulation
- Distortion (dark)
- Phaser
- Gated reverb

### Cinematic
- Layered textures
- Slow evolution
- Massive reverb
- Filter sweeps

---

## From Dark to Light

### Gradual Brightening
`\`\`
Start: Cutoff 50%
→ Automate to 70% over 8 bars
→ Add FLNG
→ Remove EQ cuts
Result: Dark to bright transition
`\`\`

### Reveal Technique
`\`\`
Dark pad throughout
Add bright layer on chorus
Mix: Dark foundation + bright highlight
`\`\`

---

## Common Mistakes

### Too Dark (Muddy)
**Problem:** Can't hear definition
**Fix:**
- Raise cutoff to 60%+
- Cut 200-300Hz mud
- Add subtle highs back

### Lifeless Dark
**Problem:** Boring, static
**Fix:**
- Add LFO filter movement
- Modulate reverb amount
- Layer with texture

### Dark but Weak
**Problem:** No power
**Fix:**
- Add sub layer (OSC3)
- Boost 60-100Hz
- Use compression post-GMS

---

## Pro Tips

### 1. Contrast is Key
- Dark sounds need bright context
- Alternate dark/bright sections
- Dark sounds sit "behind"

### 2. Movement Prevents Boredom
- LFO filter = evolving
- Slow envelope = mysterious
- Automation = cinematic

### 3. Space Enhances Darkness
- Reverb = depth
- Delay = space
- Panning = width

---

## Dark Sound Checklist

- [ ] Pulse or square waves (avoid saw)
- [ ] Low filter cutoff (under 65%)
- [ ] Slow envelope (attack 30%+)
- [ ] LFO filter movement
- [ ] Heavy reverb (40%+ wet)
- [ ] EQ cuts in highs
- [ ] Sub layer for weight
- [ ] Test in context (dark needs contrast)

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 03-Workflows\by-goal\vibe-present-mid.md

```markdown
# Workflow: Present Midrange

Achieving forward, present sounds that speak clearly in a mix.

## Goal
Create sounds with strong midrange presence (1-5kHz) that cut through dense mixes without harshness.

[SRC: IL-MAN]

---

## The Midrange Formula

### Why Midrange Matters
- **1-3kHz:** Speech intelligibility range
- **2-4kHz:** Ear's most sensitive region
- **3-5kHz:** Presence and definition

### Strategy
Balance harmonic content in the "presence zone" while controlling harshness.

---

## Step-by-Step Recipe

### Step 1: Waveform with Mids
`\`\`
OSC 1: Sawtooth (harmonics include mids)
OSC 2: Square (odd harmonics = focused)
OSC 3: Triangle (soft mids)
`\`\`

### Step 2: Moderate Unisono
`\`\`
VOICES: 4-6
STEREO: 50-65%
DETUNE: 40-50%
`\`\`

**Balance:** Present but not overwhelming

### Step 3: Strategic Filtering
`\`\`
TYPE: LP
CUTOFF: 70-80%
RES: 20-30%
`\`\`

**Key:** Cutoff at 70-80% removes extreme highs but keeps presence

### Step 4: Filter Envelope
`\`\`
EG1 → CUTOFF
ATK: 0-5%
DEC: 20-30%
AMNT: +25 to +40%
`\`\`

**Result:** Attack bite brings sound forward

### Step 5: Controlled Envelope
`\`\`
LEVEL EG:
  ATTACK: 0-10%
  DECAY: 25-35%
  SUSTAIN: 85-95%
  RELEASE: 25-35%
`\`\`

### Step 6: Saturation for Presence
`\`\`
DIST: X: 15-25%, Y: 70%
`\`\`

**Why:** Harmonic saturation emphasizes midrange

### Step 7: Minimal Wet FX
`\`\`
RVRB: Keep under 30% wet
ECHO: Short, subtle
`\`\`

**Avoid:** Long reverb tails that push sound back

### Step 8: EQ Focus
`\`\`
5-Band EQ:
  Band 3 (1.5kHz): +2 to +3 dB
  Band 4 (8kHz): Slight cut if harsh
`\`\`

---

## Midrange Applications

### Lead Vocal Synth
- Follow recipe exactly
- Moderate unisono
- Clear filter envelope

### Guitar-Style Lead
- Sawtooth waves
- Medium resonance
- Light distortion

### Brass Synth
- Square + sawtooth
- Filter envelope
- Bright cutoff

### String Pad
- Sawtooth + triangle
- 6 voices
- Slow filter envelope

---

## Controlling Harshness

### If Too Harsh
1. **Lower cutoff:** 65-70%
2. **Reduce resonance:** Under 15%
3. **Use triangle:** Softer than saw
4. **Add LPF FX:** Tame at 75%

### If Not Present Enough
1. **Filter envelope:** Increase amount to 40%+
2. **Boost 2-3kHz:** In EQ
3. **Add DIST:** 20-30% for edge
4. **Reduce reverb:** Wetness pushes back

---

## Frequency Sweet Spots

| Frequency | Character | Boost/Cut |
|-----------|-----------|-----------|
| 1-2kHz | Nasal/boxy | Cut if boxy, boost for presence |
| 2-3kHz | Intelligibility | Safe to boost moderately |
| 3-4kHz | Presence | Boost for forwardness |
| 4-5kHz | Edge/harshness | Cut if harsh |
| 5-8kHz | Sibilance | Cut to reduce harshness |

---

## Mix Position

### Layering Strategy
- **Front layer:** Present mid sound (this recipe)
- **Back layer:** Wider, wetter version
- **Mix:** Present cuts through, wide provides space

### EQ Separation
- Present sound: Boost 2-4kHz
- Competing sounds: Cut 2-4kHz
- Result: Present sound jumps forward

---

## Pro Tips

### 1. Attack is Key
- Fast attack = immediate presence
- Filter envelope on attack = bite
- Distortion on transients = edge

### 2. Less is More
- Moderate unisono (4-6)
- Controlled stereo (50-65%)
- Tight FX (minimal wet)

### 3. Context Matters
- Solo: May sound thin
- In mix: Sits perfectly
- Always judge in context

---

## Present Mid Checklist

- [ ] Sawtooth or square waves
- [ ] Moderate unisono (4-6)
- [ ] Controlled stereo
- [ ] Filter cutoff 70-80%
- [ ] Filter envelope for bite
- [ ] Light distortion
- [ ] Minimal wet FX
- [ ] EQ boost at 2-3kHz
- [ ] Test in full mix context

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 03-Workflows\by-goal\vibe-sub-weight.md

```markdown
# Workflow: Sub Weight and Foundation

Creating deep, powerful sub frequencies that provide mix foundation.

## Goal
Design sounds with massive low-end presence and sub frequency weight for foundation elements.

[SRC: IL-MAN]

---

## The Sub Weight Formula

### Core Principle
Sub weight comes from:
1. Clean fundamentals (sine waves)
2. Low frequency focus (remove highs)
3. Mono compatibility
4. Harmonic support (without mud)

---

## Step-by-Step Recipe

### Step 1: Sine Wave Foundation
`\`\`
OSC 1: Sine wave
PITCH: 0
FINE: 0
`\`\`

**Why sine?**
- Pure fundamental, no harmonics
- Maximum energy at root frequency
- No phase issues in mono

### Step 2: Sub Layer
`\`\`
OSC 3: Sine wave
PITCH: -12 semitones (-1 octave)
MIX: 40-60%
`\`\`

**Purpose:** Reinforces fundamental with sub-octave

### Step 3: Harmonic Support (FM)
`\`\`
MODULATION: 2 to 1 FM
OSC 2: Sine
PITCH: +24 semitones (+2 octaves)
AMOUNT: 30-40%
`\`\`

**Result:** Adds harmonics 2 octaves up (clean separation from sub)

### Step 4: Mono Everything
`\`\`
UNISONO:
  VOICES: 1
  STEREO: 0%
  DETUNE: 0%
`\`\`

**Critical:** Sub must be mono

### Step 5: Low Filter Cutoff
`\`\`
FILTER:
  TYPE: LP
  CUTOFF: 40-55%
  RES: 0-5%
`\`\`

**Purpose:** Remove all high frequency content

### Step 6: Long Envelope
`\`\`
LEVEL EG:
  ATTACK: 10-30%
  DECAY: 40%
  SUSTAIN: 80%
  RELEASE: 50%+
`\`\`

**Result:** Sustained, foundation-like character

### Step 7: Minimal FX
`\`\`
DIST: Light (10-15%) for warmth
HPF: 10% (remove sub-sub frequencies)
`\`\`

**Avoid:**
- ECHO (muddies sub)
- RVRB (unless very short)
- Any stereo widening

---

## Sub Weight Applications

### Sub Bass
- Follow recipe exactly
- Play in 30-60Hz range
- Single notes, sustained

### Kick Drum Foundation
- Shorter envelope
- Add pitch drop (EG → PITCH)
- Faster attack

### Drone/Pad Foundation
- Maximum sustain
- Slow attack
- Layer with brighter elements

### 808 Sub Layer
- As per trap bass recipe
- FM for character
- Pitch envelope essential

---

## Frequency Management

### Low-End Zones
`\`\`
20-40 Hz: Extreme sub (feel more than hear)
40-80 Hz: Sub bass (power zone)
80-120 Hz: Upper sub (kick competition)
120-200 Hz: Low bass (mud zone)
`\`\`

### EQ Strategy
**In GMS 5-band EQ:**
- Band 1 (60Hz): Boost for weight
- Band 2 (220Hz): Cut to reduce mud
- Bands 3-5: Cut or minimize

---

## Common Mistakes

### Too Many Harmonics
**Problem:** Using sawtooth or square
**Fix:** Sine waves only for pure sub

### Stereo Spread
**Problem:** Unisono stereo on sub
**Fix:** Always mono for sub frequencies

### Competing with Kick
**Problem:** Same frequency range
**Fix:**
- Sidechain ducking
- Different octaves
- EQ separation

### Too Much Processing
**Problem:** Heavy FX on sub
**Fix:** Minimal FX, clean signal path

---

## Advanced Techniques

### Layered Sub
`\`\`
Layer 1: Pure sine (20-50Hz)
Layer 2: FM sub (40-80Hz)
Layer 3: Character (100-200Hz)
Result: Full spectrum foundation
`\`\`

### Dynamic Sub
`\`\`
LFO → Filter Cutoff
Very slow rate
Subtle amount (±5%)
Result: Breathing sub
`\`\`

### Harmonic Sub
`\`\`
Add OSC 2 square at +12st
Very low mix (20%)
Adds 2nd harmonic
Result: More audible on small speakers
`\`\`

---

## Sub Weight Checklist

- [ ] Sine wave oscillators
- [ ] Sub octave layer (OSC3)
- [ ] FM at 4:1 ratio (optional)
- [ ] Mono: 1 voice, 0% stereo
- [ ] Low filter cutoff (under 60%)
- [ ] Long envelope
- [ ] Minimal FX
- [ ] Test on headphones
- [ ] Verify mono compatibility

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 03-Workflows\by-goal\vibe-wide-spacious.md

```markdown
# Workflow: Wide and Spacious

Creating expansive stereo sounds that fill the soundstage.

## Goal
Design sounds with maximum stereo width and spatial presence for immersive productions.

[SRC: IL-MAN]

---

## The Width Formula

### Core Elements
1. **Maximum unisono voices** - Spread across stereo field
2. **100% stereo spread** - Full width
3. **High detune** - Chorus effect
4. **Spatial FX** - Reverb and delay
5. **Stereo modulation** - Panning LFOs

---

## Step-by-Step Recipe

### Step 1: Width-Enhancing Waveforms
`\`\`
OSC 1: Sawtooth (spreads well)
OSC 2: Sawtooth or Triangle
OSC 3: Triangle (softer, wider feel)
`\`\`

### Step 2: Maximum Unisono
`\`\`
UNISONO:
  VOICES: 10-16 (maximum)
  STEREO: 95-100%
  DETUNE: 60-70%
`\`\`

**Note:** This is the "supersaw" approach to width

### Step 3: Moderate Filtering
`\`\`
FILTER:
  TYPE: LP
  CUTOFF: 70-80%
  RES: 15-25%
`\`\`

**Balance:** Wide but not harsh

### Step 4: Gentle Envelope
`\`\`
LEVEL EG:
  ATTACK: 10-20%
  DECAY: 30-40%
  SUSTAIN: 85-95%
  RELEASE: 40-50%
`\`\`

### Step 5: Stereo Modulation
`\`\`
LFO1 → PAN
RATE: 8-15% (slow)
AMNT: 60-80%
SHAPE: Sine
`\`\`

**Result:** Gentle stereo wandering

### Step 6: Chorus/Flange
`\`\`
FLNG: X: 40-50%, Y: 30-40%
`\`\`

**Additional thickening**

### Step 7: Spacious Reverb
`\`\`
RVRB:
  X: 50-70% (long decay)
  Y: 35-50% (wet)
`\`\`

**Space = Width**

### Step 8: Stereo Echo
`\`\`
ECHO:
  X: 30-45% (feedback)
  Y: 50% (brightness)
  Ping-pong if available in mixer
`\`\`

---

## Width Applications

### Wide Pad
- Max unisono (12-16)
- Full stereo
- Long reverb
- Slow pan LFO

### Stereo Lead
- 8-10 voices
- 90% stereo
- Medium reverb
- Light FLNG

### Atmospheric FX
- Any waveforms
- Max unisono
- All spatial FX
- Extreme panning

### Background Texture
- High noise mix (10-20%)
- Wide unisono
- Heavy reverb
- Low in mix

---

## Mono Compatibility

### The Width/Mono Trade-off
- More width = potential mono issues
- Always check mono compatibility
- Balance width with solidity

### Testing Mono
`\`\`
1. Play sound in stereo (sounds great)
2. Click FL Studio MONO button
3. If sound disappears or weakens:
   → Reduce stereo spread
   → Reduce unisono voices
   → Check phase issues
`\`\`

### Safe Width Settings
`\`\`
For mono compatibility:
  VOICES: 6-8 (not 12-16)
  STEREO: 70-80% (not 100%)
  DETUNE: 50-60% (moderate)
`\`\`

---

## Layered Width Strategy

### Layer 1: Wide Shimmer
`\`\`
High unisono (10 voices)
100% stereo
Low in mix (30%)
Purpose: Stereo sparkle
`\`\`

### Layer 2: Center Body
`\`\`
Low unisono (2-3 voices)
30% stereo
Main volume (70%)
Purpose: Mono compatibility
`\`\`

### Result
- Wide perception
- Solid mono
- Best of both worlds

---

## Genre-Specific Width

### Trance
- Maximum everything
- Mono check less critical
- Width = genre expectation

### Pop
- Moderate width (70-80%)
- Must be mono-compatible
- Width for choruses

### Hip-Hop
- Selective width
- Keep bass narrow
- Wide pads, narrow leads

### Ambient
- Extreme width accepted
- Long reverbs
- Maximum immersion

---

## Pro Tips

### 1. Width Automation
`\`\`
Verse: 50% stereo
Chorus: Automate to 90%
Result: Expanding into chorus
`\`\`

### 2. Width vs. Focus
`\`\`
Too wide = unfocused
Solution: Reduce to 70-80%
Or: Layer narrow version
`\`\`

### 3. Reverb Width
`\`\`
Wider reverb = wider perception
Increase RVRB wetness
Increase stereo spread
Result: Massive space
`\`\`

---

## Width Checklist

- [ ] High unisono voices (8-12+)
- [ ] Wide stereo spread (80%+)
- [ ] Moderate-high detune
- [ ] Spatial FX (FLNG, RVRB)
- [ ] Pan LFO for movement
- [ ] Long reverb tail
- [ ] Mono compatibility check
- [ ] Layer with narrow version (optional)

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 03-Workflows\by-instrument\bass-design.md

```markdown
# Workflow: Bass Design with GMS

Creating powerful, mix-ready bass sounds for any genre.

## Goal
Master bass synthesis techniques from sub-heavy 808s to aggressive EDM basses.

[SRC: IL-MAN]

---

## Bass Fundamentals

### Key Principles
1. **Mono sub frequencies** - Always
2. **Controlled harmonics** - Not too muddy
3. **Transient clarity** - Punchy attack
4. **Sustained body** - Not weak

---

## 808 Sub Bass

### The Trap Standard
`\`\`
OSC 1: Sine
OSC 2: Sine, +24 semitones
OSC 3: Sine, -12 semitones (optional)

MODULATION: 2 to 1 FM
AMOUNT: 35-45%

MIX: OSC2 100%, OSC3 40%

UNISONO: 1 voice, 0% stereo

EG1 → PITCH
ATK: 0%
DEC: 28%
AMNT: -35%

FILTER: LP, cutoff 45%, res 5%

LEVEL EG:
ATK: 0%
DEC: 18%
SUS: 65%
REL: 35%

FX:
  DIST: X: 18%, Y: 80%
  HPF: X: 12%
`\`\`

**Result:** Classic 808 with pitch drop

---

## FM Bass

### Modern EDM Bass
`\`\`
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones

MODULATION: 2 to 1 FM
AMOUNT: 50-65%

OSC 3: Sawtooth, -12 semitones
MIX: 50%

UNISONO: 2-3 voices, 20% stereo

FILTER: LP, cutoff 65%, res 25%

EG1 → CUTOFF
ATK: 0%
DEC: 35%
AMNT: +35%

FX:
  DIST: X: 30-40%
  HPF: X: 20%
`\`\`

**Result:** Complex, aggressive bass

---

## Sync Bass (Growl)

### Dubstep Growl
`\`\`
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones

MODULATION: 1 SYNC
AMOUNT: 65%

UNISONO: 3 voices, 25% stereo

EG1 → OSC2 PITCH
ATK: 0%
DEC: 40%
AMNT: +45%

FILTER: LP, cutoff 70%, res 40%

LFO1 → CUTOFF (optional wobble)

FX:
  DIST: X: 35%
  LPF: X: 80%
`\`\`

**Result:** Aggressive sync sweep bass

---

## Reese Bass

### Classic Drum & Bass
`\`\`
OSC 1: Sawtooth
OSC 2: Sawtooth, detuned +7 cents
OSC 3: Sawtooth, detuned -7 cents

No modulation

MIX: OSC2 100%, OSC3 70%

UNISONO: 4-6 voices, 60% stereo
DETUNE: 50%

FILTER: LP, cutoff 60%, res 30%

LFO1 → CUTOFF
RATE: 40%
AMNT: ±40%
SYNC: Beat

FX:
  DIST: X: 25%
  HPF: X: 18%
`\`\`

**Result:** Moving, modulated bass

---

## Pluck Bass

### Short, Punchy
`\`\`
OSC 1: Triangle or Sawtooth
OSC 2: Same, +12 or +7 semitones

MIX: 60%

UNISONO: 2 voices

LEVEL EG:
ATK: 0%
DEC: 25%
SUS: 15%
REL: 25%

EG1 → CUTOFF
ATK: 0%
DEC: 20%
AMNT: +50%

FILTER: LP, cutoff starts low
`\`\`

**Result:** Funk/R&B style pluck

---

## Bass Mixing Tips

### Frequency Management
`\`\`
20-60 Hz: Sub (feel in chest)
60-120 Hz: Bass body (kick competition)
120-250 Hz: Upper bass (mud zone)
`\`\`

### Sidechain Setup
`\`\`
Kick triggers sidechain on bass channel
Result: Bass ducks when kick hits
`\`\`

### EQ Strategy
`\`\`
Pre-GMS: Not much needed
Post-GMS:
  High-pass: 25-30 Hz (remove rumble)
  Cut: 100-150 Hz if kick competes
  Boost: 60-80 Hz for weight (optional)
`\`\`

---

## Genre Guide

### Trap
- Sine-based 808s
- Pitch drop essential
- Minimal stereo
- Light distortion

### Dubstep
- Sawtooth oscillators
- Wobble LFO
- Heavy distortion
- Sync or FM

### House/Tech House
- Simpler waveforms
- Less modulation
- Tight envelopes
- Groove-focused

### Drum & Bass
- Reese-style movement
- Heavy modulation
- Wide stereo OK
- Aggressive filtering

### Pop
- Controlled bass
- Mono sub layer
- Subtle character
- Mix-friendly

---

## Common Bass Mistakes

### Too Wide
**Problem:** Phase cancellation, weak sub
**Fix:** Keep sub 100% mono

### Too Much Distortion
**Problem:** Muddy, no definition
**Fix:** Light saturation only

### No Transient
**Problem:** Weak attack, lost in mix
**Fix:** Fast attack, filter envelope

### Competing with Kick
**Problem:** 808 and kick fight
**Fix:** Sidechain, different octaves, EQ separation

---

## Advanced Techniques

### Layered Bass
`\`\`
Layer 1: Pure sine sub (mono)
Layer 2: FM bass (stereo width)
Layer 3: Click/transient (high-passed)
`\`\`

### Split Frequency
`\`\`
GMS 1: Sub frequencies (LP filtered)
GMS 2: Harmonics (HP filtered)
Process separately
`\`\`

### Glide/Portamento
`\`\`
MONO VOICE: On
FREQ SLIDE: 25%
Result: Slides between notes
`\`\`

---

## Quick Bass Recipes

### Sub Only
`\`\`
Sine, mono, no FX
For pure low-end
`\`\`

### Character Bass
`\`\`
FM or Sync
Unisono 2-4
Filter envelope
Light distortion
`\`\`

### Wobble Bass
`\`\`
Sawtooth
LFO → cutoff
Heavy resonance
`\`\`

### 808
`\`\`
Sine FM
Pitch envelope
Mono
Light drive
`\`\`

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 03-Workflows\by-instrument\drum-synthesis.md

```markdown
# Workflow: Drum Synthesis with GMS

Creating synthetic kicks, snares, and percussion.

## Goal
Use GMS as a drum synthesizer for electronic percussion sounds.

[SRC: IL-MAN]

---

## Kick Drum

### Basic Kick Recipe
`\`\`
OSC 1: Sine wave
PITCH: 0 (C1-C2 range)

MODULATION: 2 to 1 FM (optional)
OSC 2: Sine, +24 semitones
AMOUNT: 30-40%

EG1 → PITCH
ATK: 0%
DEC: 25%
AMNT: -40%

LEVEL EG:
ATK: 0%
DEC: 20%
SUS: 0%
REL: 30%

FILTER: LP, cutoff 50%

UNISONO: 1 voice, mono
`\`\`

**Result:** Punchy kick with pitch drop

### Kick Variations

**Deep Sub Kick:**
- OSC 3: Sine, -12 semitones
- No FM
- Longer decay

**Trap Kick:**
- Add light DIST (15%)
- High pitch drop (-50%)
- Short decay

**Techno Kick:**
- Add CLICK (noise, 10%)
- FM amount 45%
- Tight envelope

---

## Snare Drum

### Basic Snare Recipe
`\`\`
OSC 1: Triangle or Pulse
PITCH: Higher range (C3-C4)

OSC 2: Triangle, +7 semitones
MIX: 50%

NOISE MIX: 40-60%

LEVEL EG:
ATK: 0%
DEC: 25%
SUS: 0%
REL: 20%

FILTER: LP, cutoff 70%
UNISONO: 2 voices, 30% stereo

FX:
  HPF: X: 25% (remove mud)
  DIST: X: 20% (optional edge)
`\`\`

**Result:** Electronic snare with body and snap

### Snare Variations

**Clap:**
- Noise: 70%
- Longer attack (5%)
- Reverb

**Rimshot:**
- Pulse wave
- High pitch
- Short everything

**808 Snare:**
- Two oscillators only
- Triangle waves
- Filter envelope

---

## Hi-Hats

### Closed Hi-Hat
`\`\`
NOISE: 100%
All OSC: Off or minimal

LEVEL EG:
ATK: 0%
DEC: 8%
SUS: 0%
REL: 10%

FILTER: HP, cutoff 60%+

FX:
  HPF: X: 40%
  DIST: X: 10% (optional)
`\`\`

### Open Hi-Hat
`\`\`
Same as closed but:
DEC: 40%
REL: 50%

Add RVRB: Short
`\`\`

---

## Toms

### Floor Tom
`\`\`
OSC 1: Sine
PITCH: Lower (C1-C2)

EG1 → PITCH
ATK: 0%
DEC: 35%
AMNT: -30%

LEVEL EG:
ATK: 0%
DEC: 40%
SUS: 10%
REL: 40%

UNISONO: 2 voices
`\`\`

**Higher toms:** Increase pitch, decrease decay

---

## Claps

### Electronic Clap
`\`\`
NOISE: 80%
OSC 1: Triangle (20%)

LEVEL EG:
ATK: 5%
DEC: 30%
SUS: 0%
REL: 35%

TRNC GATE:
Y: 70%
X: 20%
SYNC: 1/8 or 1/16
Result: Multiple claps
`\`\`

---

## Cymbals/CR78 Style

### Metallic Percussion
`\`\`
MODULATION: 2 to 1 FM
OSC 1: Sine
OSC 2: Sine, +24 semitones
AMOUNT: 60%

LEVEL EG:
ATK: 0%
DEC: 60%
SUS: 0%
REL: 70%

NOISE: 20%

FILTER: HP, cutoff 50%

FX:
  HPF: X: 35%
  RVRB: X: 40%, Y: 30%
`\`\`

---

## Percussion Tips

### Velocity Sensitivity
`\`\`
MIDI/EQ Panel:
VELOCITY TO LEVEL: On
Result: Harder hits = louder
`\`\`

### Pitch Variation
- Program different pitches in piano roll
- Create drum fills
- Dynamic patterns

### Layering Strategy
1. **Body:** Sine or triangle (low-mid)
2. **Snap:** Noise or bright FM (high)
3. **Mix:** Balance for character

---

## Drum Kit Organization

### Multi-Output Setup
`\`\`
GMS 1: Kick (C1)
GMS 2: Snare (C2)
GMS 3: Hihats (C3)
GMS 4: Toms (C1-C2)
GMS 5: Percussion (various)
`\`\`

**Route to:** Individual mixer tracks for processing

---

## Quick Drum Recipes

### Punchy Kick
`\`\`
Sine + FM pitch drop
Short decay
Mono
`\`\`

### Electronic Snare
`\`\`
Triangle + noise
Body + snap
HPF to clean
`\`\`

### Tight Hihat
`\`\`
Pure noise
Very short
High pass
`\`\`

### 808 Tom
`\`\`
Sine pitch drop
Medium decay
Sub tone
`\`\`

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 03-Workflows\by-instrument\fx-design.md

```markdown
# Workflow: FX Sound Design

Creating risers, impacts, textures, and special effects.

## Goal
Use GMS for sound design elements beyond traditional instruments.

[SRC: IL-MAN]

---

## Risers

### Noise Riser
`\`\`
OSC 1-3: Minimal or off
NOISE: 100%

LEVEL EG:
ATK: 80% (very slow)
DEC: 0%
SUS: 100%
REL: 30%

FILTER:
  LP type
  CUTOFF: Automate from 20% to 95%
  RES: 30%

LFO1 → CUTOFF
RATE: 80% (fast)
AMNT: ±15%
Result: Vibrating riser
`\`\`

### Tonal Riser
`\`\`
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones

MODULATION: FM
AMOUNT: Automate 10% to 70%

UNISONO: 8 voices

FILTER: Automate cutoff up

Result: Pitch + complexity riser
`\`\`

---

## Impacts

### Sub Impact
`\`\`
OSC 1: Sine
OSC 2: Sine, +12 semitones

MODULATION: FM
AMOUNT: 60%

LEVEL EG:
ATK: 0%
DEC: 8%
SUS: 0%
REL: 40%

EG1 → CUTOFF
ATK: 0%
DEC: 15%
AMNT: -60% (closes)

UNISONO: 2 voices

NOISE: 40%

FX:
  DIST: Heavy
  RVRB: Massive
`\`\`

### Metallic Impact
`\`\`
MODULATION: 2 to 1 RM
High amount (80%+)
Fast envelope
Echo + reverb
Result: Industrial impact
`\`\`

---

## Textures

### Drone
`\`\`
OSC 1: Sine or Triangle
MODULATION: FM or RM
Amount: Low (20-30%)

LFO1 → AMOUNT
Slow rate
Result: Evolving texture

LFO2 → PITCH (subtle)
Different rate
Result: Beating texture
`\`\`

### Sci-Fi Texture
`\`\`
RM mode
Detuned oscillators
High amount
LFO → pan
Result: Alien soundscape
`\`\`

### Noise Texture
`\`\`
NOISE: 100%
HPF in FX rack
Automate cutoff
Result: Wind/rain/ocean
`\`\`

---

## Sweeps

### Filter Sweep
`\`\`
Sawtooth base
Automate filter cutoff
20% to 90%
Medium resonance
Result: Classic sweep
`\`\`

### FM Sweep
`\`\`
FM mode
Automate OSC2 pitch
+12 to +24 semitones
Result: Changing harmonics
`\`\`

### Noise Sweep
`\`\`
Pure noise
Automate HPF cutoff
Low to high or vice versa
Result: White noise sweep
`\`\`

---

## Transition Effects

### Whoosh
`\`\`
NOISE: 100%
Filter: Automate HP cutoff
Fast attack, medium release
Add RVRB
Result: Whoosh effect
`\`\`

### Laser
`\`\`
Sawtooth
Fast filter envelope
Pitch envelope (down)
Short everything
Result: Laser zap
`\`\`

### Stutter
`\`\`
Any sound
TRNC gate
Fast rate (1/16 or 1/32)
High drop amount
Result: Glitch stutter
`\`\`

---

## Atmospheric FX

### Wind
`\`\`
NOISE: 100%
HPF: X: 30%
LFO → HPF cutoff
Slow rate
Result: Blowing wind
`\`\`

### Space/Ambience
`\`\`
Triangle waves
High unisono (12+)
Slow LFOs
Massive reverb
Result: Space atmosphere
`\`\`

### Industrial
`\`\`
RM mode
Sawtooth + square
High amount
DIST + CRSH
Result: Factory/machine
`\`\`

---

## Rhythmic FX

### Gated Effect
`\`\`
Any sustained sound
TRNC effect
SYNC to beat
Adjust drop and release
Result: Rhythmic pattern
`\`\`

### Stutter Rhythms
`\`\`
Short sounds
TRNC at fast rate
Pattern in piano roll
Result: Glitch rhythms
`\`\`

### Pulsing Drone
`\`\`
LFO → AMPLITUDE
Slow rate
Saw or square shape
Result: Pulsing texture
`\`\`

---

## Creative Techniques

### Extreme Modulation
`\`\`
FM or RM
Amount: 100%
Extreme OSC2 pitch
Result: Chaos (use carefully)
`\`\`

### Feedback Loops
`\`\`
Heavy distortion
High resonance
Self-oscillation
Result: Screaming FX
`\`\`

### Random LFO
`\`\`
LFO shape: Random
Multiple destinations
Unsynced
Result: Unpredictable
`\`\`

---

## FX Chain Tricks

### Build-Up Chain
`\`\`
CRSH (increasing)
→ LPF (closing)
→ ECHO (feedback up)
→ RVRB (decay up)
Result: Building intensity
`\`\`

### Degradation Chain
`\`\`
DIST (heavy)
→ CRSH (heavy)
→ LPF (low)
Result: Destroyed sound
`\`\`

### Spatial Chain
`\`\`
ECHO (long)
→ RVRB (massive)
→ PAN (LFO)
Result: Huge space
`\`\`

---

## Sound Design Checklist

- [ ] Start with basic oscillator
- [ ] Add modulation (FM/RM/Sync)
- [ ] Shape with envelopes
- [ ] Add movement (LFOs)
- [ ] Process with FX chain
- [ ] Automate key parameters
- [ ] Layer if needed
- [ ] Test in context

---

## Quick FX Recipes

### Riser
`\`\`
Noise + rising filter
Automate cutoff
Add reverb
`\`\`

### Impact
`\`\`
FM sine + fast envelope
Noise blend
Heavy reverb
`\`\`

### Texture
`\`\`
RM mode
Slow LFOs
High unisono
`\`\`

### Stutter
`\`\`
Any sound
TRNC gate
Fast rate
`\`\`

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 03-Workflows\by-instrument\gms-instrument-workflows.md

```markdown
Tags: hip-hop/rap | R&B | moody

## GMS (Groove Machine Synth) Instrument Workflows

### Hip-Hop Lead Synth

**Sound Goal:** Cutting, memorable hook

**Settings:**
- Oscillator: Saw + Square (blend 70/30)
- Filter: Low-pass, Cutoff 62%, Resonance 28%
- Envelope: Filter envelope with medium attack, fast decay
- FX: Distortion (light), Chorus (subtle)
- Modulation: LFO to pitch (0.1Hz, depth 5)

**Why This Works:**
- Saw provides cutting edge
- Square adds harmonic richness
- Light chorus adds warmth without width issues
- Distortion helps cut through mix

### R&B Smooth Pad

**Sound Goal:** Warm, lush background

**Settings:**
- Oscillator: Saw (detuned) + Sine
- Filter: Low-pass, Cutoff 68%, Resonance 15%
- Envelope: Slow attack (500ms), long release
- FX: Reverb (long), Chorus (moderate)
- Modulation: Stereo width (wide)

**Creation Steps:**
1. Detuned saws create thickness
2. Sine adds warmth to fundamental
3. Slow attack lets transients through
4. Chorus adds width for R&B aesthetic

### Deep Bass 808

**Sound Goal:** Punchy, modern bass

**Settings:**
- Oscillator: Sine + low saw (mix 60/40)
- Filter: Low-pass, Cutoff 32%, Resonance 35%
- Envelope: Fast attack (5ms), short decay
- FX: Soft clip, subtle chorus
- Modulation: None on bass (keeps it tight)

**A/B Test:**
1. Compare with and without chorus
2. Chorus should add warmth, not obvious width
3. If too wide: Reduce chorus depth

### Hi-Hat Texture

**Sound Goal:** Rhythmic high-frequency energy

**Settings:**
- Oscillator: Noise + high square
- Filter: High-pass, Cutoff 800Hz
- Envelope: Fast attack, short decay
- FX: Reverb (small room), Delay (ping-pong)
- Modulation: Filter LFO synced to hi-hat pattern

### Quick Reference Table

| Sound | Osc Mix | Filter | FX | Character |
|-------|---------|--------|-----|-----------|
| Lead | Saw+Square | 62% LP | Dist+Chorus | Cutting |
| Pad | Saw+Sine | 68% LP | Rev+Chorus | Warm |
| Bass | Sine+Saw | 32% LP | Clip | Punchy |
| Hat | Noise+Square | 80% HP | Rev+Delay | Rhythmic |

```

---

## FILE: 03-Workflows\by-instrument\lead-creation.md

```markdown
# Workflow: Lead Creation with GMS

Designing cutting, memorable lead sounds.

## Goal
Create lead sounds that cut through the mix and carry the melodic hook.

[SRC: IL-MAN]

---

## Lead Fundamentals

### What Makes a Good Lead?
1. **Presence** - Cuts through mix
2. **Character** - Memorable tone
3. **Consistency** - Plays evenly across range
4. **Playability** - Responds to performance

---

## Supersaw Lead

### Classic EDM
`\`\`
OSC 1: Sawtooth
OSC 2: Sawtooth, +7 cents
OSC 3: Sawtooth, -7 cents

MIX: OSC2 100%, OSC3 80%

UNISONO: 6-8 voices
STEREO: 75%
DETUNE: 55%

FILTER: LP, cutoff 85%, res 20%

LEVEL EG:
ATK: 0%
DEC: 25%
SUS: 95%
REL: 35%

FX:
  FLNG: X: 40%, Y: 30%
  RVRB: X: 45%, Y: 30%
`\`\`

**Result:** Thick, shimmering EDM lead

---

## FM Lead

### Metallic Character
`\`\`
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones

MODULATION: 2 to 1 FM
AMOUNT: 55%

OSC 3: Triangle, -12 semitones
MIX: 50%

UNISONO: 5 voices, 60% stereo

FILTER: LP, cutoff 80%, res 25%

FX:
  DIST: X: 25%
  ECHO: X: 30%
`\`\`

**Result:** Bright, complex lead

---

## Sync Lead

### Aggressive Edge
`\`\`
OSC 1: Sawtooth
OSC 2: Sawtooth, +12 semitones

MODULATION: 1 SYNC
AMOUNT: 55%

UNISONO: 5 voices, 55% stereo

FILTER: LP, cutoff 82%, res 28%

EG1 → CUTOFF
ATK: 0%
DEC: 30%
AMNT: +30%

FX:
  DIST: X: 30%
  RVRB: Medium
`\`\`

**Result:** Bright, aggressive attack

---

## Pluck Lead

### Fast, Percussive
`\`\`
OSC 1: Sawtooth or Triangle
OSC 2: Same, +12 semitones
MIX: 70%

UNISONO: 3 voices, 40% stereo

LEVEL EG:
ATK: 0%
DEC: 20%
SUS: 15%
REL: 22%

EG1 → CUTOFF
ATK: 0%
DEC: 18%
AMNT: +55%

FILTER: LP, cutoff 75%

FX:
  ECHO: Short delay
  RVRB: Small room
`\`\`

**Result:** Fast, rhythmic lead

---

## Brass Lead

### Synth Brass
`\`\`
OSC 1: Sawtooth
OSC 2: Square, +7 semitones
OSC 3: Sawtooth, -12 semitones

MIX: OSC2 80%, OSC3 50%

UNISONO: 4 voices, 50% stereo

FILTER: LP, cutoff 75%, res 22%

LEVEL EG:
ATK: 8%
DEC: 30%
SUS: 90%
REL: 30%

EG1 → CUTOFF
ATK: 0%
DEC: 25%
AMNT: +35%

FX:
  DIST: X: 20%
  ECHO: Medium
`\`\`

**Result:** Brass-like synth

---

## Mono Lead

### Vintage Style
`\`\`
OSC 1: Sawtooth
OSC 2: Pulse, +12 semitones

MIX: 100%

UNISONO: 1 voice (MONO!)

MONO VOICE: On
FREQ SLIDE: 20%

FILTER: LP, cutoff 78%, res 18%

LEVEL EG:
ATK: 0%
DEC: 28%
SUS: 92%
REL: 28%

FX: Minimal
`\`\`

**Result:** Vintage solo synth

---

## Lead Techniques

### Filter Envelope Bite
`\`\`
EG1 → CUTOFF
Fast attack, medium decay
+25 to +40% amount
Result: Opening filter on each note
`\`\`

### Vibrato
`\`\`
LFO1 → PITCH
RATE: 25%
AMNT: ±8 to ±12%
SHAPE: Sine
RETRIG: Off
Result: Natural vibrato
`\`\`

### Portamento/Glide
`\`\`
MONO VOICE: On
FREQ SLIDE: 15-30%
Result: Slides between notes
`\`\`

---

## Genre-Specific Leads

### Trance
- Supersaw (8+ voices)
- Long release
- Heavy reverb
- Filter modulation

### Trap
- Sawtooth-based
- 4-6 voices
- Moderate stereo
- Light distortion

### Dubstep
- Sync or FM
- Aggressive filter
- Heavy distortion
- Wobble optional

### Pop
- Controlled width
- Medium unisono
- Clean tone
- Subtle FX

### House
- Classic saw
- 4 voices
- Short-medium release
- Groove-focused

---

## Mixing Leads

### EQ Strategy
`\`\`
Cut: 200-400 Hz (remove mud)
Boost: 2-4 kHz (presence)
Air: 8-12 kHz (if needed)
`\`\`

### Compression
`\`\`
Light compression post-GMS
3-6 dB reduction
Result: Even dynamics
`\`\`

### Stereo Placement
`\`\`
Wide leads: Full stereo
Lead + double: Pan slightly
Solo lead: Center
`\`\`

---

## Common Lead Mistakes

### Too Wide
**Problem:** Weak center, phase issues
**Fix:** Reduce stereo to 60-70%

### Too Much Unisono
**Problem:** Muddy, unfocused
**Fix:** 4-6 voices is usually enough

### No Presence
**Problem:** Buried in mix
**Fix:** Filter envelope, boost 2-4kHz

### Static Boring
**Problem:** Lifeless
**Fix:** Add LFO vibrato, filter movement

---

## Quick Lead Recipes

### Big Room Lead
`\`\`
Supersaw, 8 voices
FLNG + RVRB
Bright filter
`\`\`

### Synth Solo
`\`\`
Mono, portamento
Filter envelope
No unisono
`\`\`

### Pop Lead
`\`\`
5 voices, 60% stereo
Clean tone
Light FX
`\`\`

### R&B Lead
`\`\`
Triangle waves
4 voices
Warm filter
Subtle vibrato
`\`\`

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 03-Workflows\by-instrument\pad-textures.md

```markdown
# Workflow: Pad Textures with GMS

Creating lush, evolving atmospheric pads.

## Goal
Design wide, evolving pad sounds that fill space and provide harmonic foundation.

[SRC: IL-MAN]

---

## Pad Fundamentals

### Key Characteristics
1. **Wide stereo** - Fills the sides
2. **Slow attack** - Fades in smoothly
3. **Sustained** - Holds throughout
4. **Evolving** - Movement prevents boredom

---

## Basic Pad Recipe

### Foundation
`\`\`
OSC 1: Sawtooth or Triangle
OSC 2: Triangle, +7 semitones
OSC 3: Triangle, -7 semitones

MIX: OSC2 80%, OSC3 70%

UNISONO: 8-12 voices
STEREO: 90-100%
DETUNE: 60-70%

FILTER: LP, cutoff 65%, res 15%

LEVEL EG:
ATK: 60%
DEC: 50%
SUS: 95%
REL: 60%
`\`\`

### Movement
`\`\`
LFO1 → CUTOFF
RATE: 12%
AMNT: ±20%
SHAPE: Sine

Result: Gentle filter sweep
`\`\`

### Space
`\`\`
FX:
  PHSR: X: 30%, Y: 25%
  ECHO: X: 45%, long time
  RVRB: X: 60%, Y: 45%
`\`\`

---

## Pad Variations

### Supersaw Pad
`\`\`
All sawtooth waves
10-16 voices
Maximum stereo
FLNG + long RVRB
`\`\`

### Analog Pad
`\`\`
Triangle waves
6 voices
70% stereo
Warm filter
Less FX
`\`\`

### FM Texture
`\`\`
FM mode
Sine oscillators
Ratio 2:1 or 3:1
Moderate amount
Evolving texture
`\`\`

### Dark Pad
`\`\`
Low cutoff (50%)
Pulse waves
Slow attack
Heavy reverb
EQ cuts in highs
`\`\`

### Bright Pad
`\`\`
Sawtooth waves
High cutoff (75%)
High unisono
Shimmering FX
EQ boost 8kHz
`\`\`

---

## Evolving Pads

### Filter Evolution
`\`\`
EG1 → CUTOFF
ATK: 40%
DEC: 60%
AMNT: +30%

Result: Pad opens over time
`\`\`

### Stereo Movement
`\`\`
LFO1 → CUTOFF
LFO2 → PAN

Different rates
Creates evolving texture
`\`\`

### Modulation Morphing
`\`\`
EG1 → AMOUNT (modulation)
Slow attack
Result: Texture changes over time
`\`\`

---

## Layered Pads

### Three-Layer Approach
`\`\`
Layer 1 (Low):
  Sine/triangle
  Low octave
  2 voices
  Purpose: Foundation

Layer 2 (Mid):
  Sawtooth
  Root octave
  8 voices
  Purpose: Body and width

Layer 3 (High):
  Triangle/saw
  +12 semitones
  6 voices
  Purpose: Shimmer and air
`\`\`

### Mix Ratios
`\`\`
Low: 40%
Mid: 60%
High: 30%
`\`\`

---

## Pad Techniques

### Chord Voicing
`\`\`
Play rich chords (7ths, 9ths)
Pads love extensions
Strategic voice leading
`\`\`

### Octave Layers
`\`\`
Same pad, different octaves
Root position
+12 semitones
-12 semitones
Result: Massive stacked pad
`\`\`

### Detuned Beauty
`\`\`
OSC 2: +12 cents
OSC 3: -12 cents
Unisono: 70% detune
Result: Chorused thickness
`\`\`

---

## Genre Pads

### Trance
- Supersaw-based
- 12-16 voices
- Maximum stereo
- Long reverb tail
- Filter modulation

### Ambient
- Slowest envelopes
- Sine waves
- Minimal FX
- Massive reverb
- Subtle movement

### Cinematic
- Layered textures
- Wide stereo
- Evolving modulation
- Long releases
- Emotional quality

### Synthwave
- Sawtooth
- 80s style
- Medium unisono
- Chorus/FLNG
- Analog feel

### Downtempo
- Triangle/saw
- 6-8 voices
- Slow attack
- Warm filter
- Subtle FX

---

## Pad Mixing

### Frequency Placement
`\`\`
Pads sit in mids and sides
Cut: 100-300 Hz (remove mud)
Let through: 500Hz-5kHz (presence)
Add air: 8kHz+ (optional)
`\`\`

### Stereo Strategy
`\`\`
Wide pads: Full stereo
Background: 70% width
Lead elements: Center
`\`\`

### Dynamic Control
`\`\`
Sidechain to kick
Pads duck when beat hits
Creates breathing room
`\`\`

---

## Common Pad Mistakes

### Too Loud
**Problem:** Overwhelms mix
**Fix:** Keep pads behind other elements

### Too Static
**Problem:** Boring, lifeless
**Fix:** Add LFO movement, filter evolution

### Too Wide
**Problem:** Phase issues
**Fix:** Test mono, reduce to 80% stereo

### Too Short
**Problem:** Not pad-like
**Fix:** Long attack, long release

---

## Quick Pad Recipes

### Lush Supersaw
`\`\`
Saw waves, 10 voices
100% stereo
Long everything
PHSR + RVRB
`\`\`

### Warm Analog
`\`\`
Triangle, 6 voices
Warm filter
Minimal FX
70% stereo
`\`\`

### Evolving Texture
`\`\`
FM mode
Slow envelopes
LFO movement
Stereo panning
`\`\`

### Dark Atmosphere
`\`\`
Low cutoff
Pulse waves
Heavy reverb
Slow attack
`\`\`

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 03-Workflows\by-instrument\pluck-arpeggios.md

```markdown
# Workflow: Pluck and Arpeggio Sounds

Creating fast, rhythmic plucked sounds.

## Goal
Design tight, percussive pluck sounds perfect for arpeggios and rhythmic patterns.

[SRC: IL-MAN]

---

## Pluck Fundamentals

### Characteristics
1. **Fast attack** - Immediate sound
2. **Short decay** - Doesn't sustain
3. **Percussive** - Transient-focused
4. **Rhythmic** - Repeats well

---

## Basic Pluck Recipe

### Oscillators
`\`\`
OSC 1: Sawtooth or Triangle
OSC 2: Same, +12 semitones
MIX: 70%

No OSC 3 (keeps it tight)
`\`\`

### Amplitude Envelope (Critical!)
`\`\`
LEVEL EG:
  ATTACK: 0%
  DECAY: 20-25%
  SUSTAIN: 10-20%
  RELEASE: 20-25%
`\`\`

**This creates the "pluck"**

### Filter Envelope (The Secret)
`\`\`
FILTER: LP, cutoff 70%

EG1 → CUTOFF
  ATK: 0%
  DEC: 15-20%
  AMNT: +50 to +60%
`\`\`

**Result:** Filter opens then closes = pluck

### Unisono
`\`\`
VOICES: 2-3
STEREO: 40-50%
DETUNE: 25-35%
`\`\`

**Keep tight - not wide**

### FX
`\`\`
ECHO: Short delay (adds rhythm)
  X: 30-40%
  Time: Sync to tempo

Optional RVRB: Very short
`\`\`

---

## Pluck Variations

### Acoustic-Style
`\`\`
Triangle waves
Soft filter
Medium resonance
Gentle envelope
`\`\`

### Electronic Pluck
`\`\`
Sawtooth
Sharp filter envelope
Higher resonance
Short everything
`\`\`

### FM Pluck (Bell-like)
`\`\`
MODULATION: 2 to 1 FM
OSC 1: Sine
OSC 2: Sine, +12 semitones
AMOUNT: 50%
Fast envelope
Result: Bell/mallet pluck
`\`\`

### Harp-like
`\`\`
Triangle waves
Longer decay (30%)
Short echo
Gentle filter
`\`\`

---

## Arpeggio Techniques

### Fast Patterns
`\`\`
Short notes in piano roll
1/8 or 1/16 notes
Fast pluck envelope
ECHO essential
`\`\`

### Echo Timing
`\`\`
ECHO synced to:
  1/8 for fast arps
  1/4 for space
  Dotted for groove
`\`\`

### Velocity Variation
`\`\`
Program different velocities
Create dynamics
Accent certain notes
`\`\`

---

## Advanced Pluck

### Layered Pluck
`\`\`
Layer 1: Tight attack
  Fast envelope
  High filter

Layer 2: Body/sustain
  Slower envelope
  Lower filter
  Reduced volume

Result: Attack + body
`\`\`

### Stereo Pluck
`\`\`
Wider unisono (5 voices)
60% stereo
Short delay
Result: Wide but tight
`\`\`

### Modulated Pluck
`\`\`
LFO → PITCH (subtle)
Rate: Medium
Amount: ±5%
Result: Detuned movement
`\`\`

---

## Genre Applications

### House/Tech House
`\`\`
Sawtooth
Tight envelope
1/16 arps
Short delay
Groove-focused
`\`\`

### Trance
`\`\`
Supersaw pluck
More voices
Longer release
Heavy reverb
Uplifting feel
`\`\`

### Pop
`\`\`
Softer triangle
Medium envelope
Melodic patterns
Subtle FX
`\`\`

### Synthwave
`\`\`
Pulse wave
Medium decay
Arpeggiated bass
Analog feel
`\`\`

### Lo-Fi
`\`\`
Triangle
Noise: 10%
Bit crusher
Warm filter
`\`\`

---

## Arpeggio Programming

### Pattern Ideas
`\`\`
Up: C - E - G - C
Down: C - G - E - C
Up-Down: C - E - G - E
Random: C - G - C - E
`\`\`

### Rhythmic Variations
`\`\`
Steady 1/16
Dotted rhythms
Triplets
Mixed patterns
`\`\`

### Velocity Patterns
`\`\`
Accent on beat: 100 - 70 - 70 - 70
Crescendo: 60 - 70 - 80 - 90
Groove: 100 - 60 - 80 - 60
`\`\`

---

## Common Pluck Mistakes

### Too Long
**Problem:** Sounds like pad, not pluck
**Fix:** Decay under 30%, sustain under 25%

### No Filter Envelope
**Problem:** Static, boring
**Fix:** Always add filter envelope

### Too Wide
**Problem:** Unfocused in fast patterns
**Fix:** Keep stereo under 60%

### Muddy
**Problem:** Competing frequencies
**Fix:** HPF at 20%, filter cutoff 70%+

---

## Pro Tips

### 1. Staccato Programming
`\`\`
Short notes in piano roll
Don't overlap
Let pluck speak
`\`\`

### 2. Echo Groove
`\`\`
ECHO creates groove
Sync to tempo
Try different divisions
`\`\`

### 3. Layer Low
`\`\`
Add sub bass layer
Pluck = mids/highs
Together = full range
`\`\`

### 4. Pattern Variation
`\`\`
Verse: Simple pattern
Chorus: Faster/denser
Bridge: Different pattern
`\`\`

---

## Quick Pluck Recipes

### Tight House Pluck
`\`\`
Sawtooth
Decay 20%
Filter envelope +50%
Short echo
`\`\`

### Bell Pluck
`\`\`
FM mode
Sine waves
Fast envelope
Long release
`\`\`

### Wide Arp
`\`\`
5 voices
60% stereo
Triangle
Synced echo
`\`\`

### Soft Pluck
`\`\`
Triangle
Softer filter
Gentle envelope
Minimal FX
`\`\`

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log & Official Links: GMS

## Official Links
*   **Manual:** [GMS Official Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm)
*   **Mobile:** [FL Studio Mobile GMS Guide](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/FL%20Studio%20Mobile.htm)

## Source Log
1.  **[SRC: IL-MAN]:** Official Manual. Used for oscillator interaction (Sync/FM/RM), FX rack order, and Mobile compatibility rules.
2.  **[SRC: REPUTABLE]:** SeamlessR (Synth Basics). Used for the "Supersaw" unisono logic and FM synthesis tips for metallic leads.
3.  **[SRC: REPUTABLE]:** Image-Line Guru (Video Series). Used for the Trance Gate and Step Sequencer workflow ideas.

## Coverage Checklist
- [x] Oscillator Interaction (Sync, FM, RM)
- [x] Unisono Best Practices
- [x] FX Rack Signal Flow
- [x] 5 Vibe Targets (Moody, Upbeat, Psychedelic, Jazzy, Vibey)
- [x] Mobile-to-Desktop Translation
- [x] Modulation Matrix Routing

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: GMS (Hip-Hop/R&B)

## Vibe 1: The "Modern Trap" Pluck
*   **Sound:** Short, punchy, melodic.
*   **Key Move:** Saw wave + Fast Filter Envelope Decay + Distortion.

## Vibe 2: The "R&B Cloud" Pad
*   **Sound:** Lush, wide, underwater.
*   **Key Move:** 8-voice Unison + Reverb + Low-pass Filter @ 500Hz.

## Vibe 3: The "West Coast" G-Funk Lead
*   **Sound:** Whiny, high-pitched, gliding.
*   **Key Move:** Single Osc (Saw) + Legato mode + Pitch Slide (Glide).

## Vibe 4: The "Neo-Soul" Electric Piano
*   **Sound:** Warm, mellow, bell-like.
*   **Key Move:** Sine/Square mix + FM mode (low amount) + Chorus FX.

```

---

## FILE: 04-Reference\mobile-desktop-workflow.md

```markdown
# Mobile to Desktop Workflow

Cross-platform production with GMS.

## Overview

GMS is available on both:
- **FL Studio Desktop** (Windows/Mac)
- **FL Studio Mobile** (iOS/Android)

This guide covers transferring projects and workflows between platforms.

[SRC: IL-MAN]

---

## File Compatibility

### Presets (.gms)
- **Format:** Native GMS preset files
- **Compatibility:** Cross-platform
- **Transfer:** Cloud storage, email, direct file copy

### Projects (.flp / .flm)
- **FL Studio Mobile projects:** .flm files
- **FL Studio Desktop:** .flp files
- **Transfer:** Can open .flm in desktop FL Studio

---

## Workflow Scenarios

### Scenario 1: Idea Capture on Mobile

**Step 1: Create on Mobile**
`\`\`
Open FL Studio Mobile
Load GMS
Sketch melody/bassline
Save as .flm
`\`\`

**Step 2: Transfer to Desktop**
`\`\`
Options:
1. Email the .flm file
2. Cloud storage (Dropbox, Drive)
3. Direct file transfer
`\`\`

**Step 3: Open on Desktop**
`\`\`
In FL Studio Desktop:
File > Open > Select .flm
Project loads with GMS settings intact
Refine and expand
`\`\`

### Scenario 2: Mobile Sound Design

**Design on Mobile:**
`\`\`
Create GMS patches on mobile
Save as .gms presets
Transfer presets to desktop
Use in desktop projects
`\`\`

**Advantages:**
- Design sounds anywhere
- Touch interface for quick tweaks
- Test sounds in mobile context

### Scenario 3: Desktop to Mobile

**Refine on Desktop:**
`\`\`
Create complex GMS patch on desktop
Freeze/render to audio
Transfer audio to mobile
Use in mobile projects
`\`\`

**Reason:**
- Desktop has more CPU power
- Complex patches may tax mobile
- Audio is universal format

---

## Optimization for Mobile

### CPU-Saving Settings

**Unisono:**
`\`\`
Desktop: 8-16 voices
Mobile: 2-4 voices (writing)
Mobile: 4-6 voices (rendering)
`\`\`

**FX Chain:**
`\`\`
Desktop: All 10 FX
Mobile: 2-3 essential FX
Mobile: Render with full FX on desktop
`\`\`

**Waveforms:**
`\`\`
Complex: Sawtooth + FM (more CPU)
Efficient: Triangle + subtractive (less CPU)
`\`\`

### Mobile Preset Checklist

- [ ] 4 or fewer unisono voices
- [ ] 3 or fewer active FX
- [ ] Simple waveforms if possible
- [ ] Test on target device
- [ ] Render to audio if heavy

---

## Cross-Platform Best Practices

### 1. Save Presets Regularly
`\`\`
When designing sounds:
Save as .gms frequently
Name descriptively
Organize by category
`\`\`

### 2. Test Both Platforms
`\`\`
Before finalizing:
Test patch on mobile
Test patch on desktop
Note any differences
`\`\`

### 3. Layering Strategy
`\`\`
Mobile writing:
Use simpler sounds
Limit polyphony
`\`\`

`\`\`
Desktop production:
Layer mobile sounds
Add complexity
Process with desktop plugins
`\`\`

### 4. Audio Transfer
`\`\`
When GMS is too heavy for mobile:
Render from desktop
Transfer audio file (.wav/.mp3)
Use in mobile projects
`\`\`

---

## Project Migration Guide

### Mobile to Desktop

**What Transfers:**
- GMS settings ✓
- Notes/MIDI ✓
- Basic mixer settings ✓
- Project structure ✓

**What May Need Adjustment:**
- Audio latency compensation
- Plugin parameters
- Advanced mixer routing
- External plugins (not on mobile)

### Step-by-Step Migration

1. **Save on Mobile**
   `\`\`
   File > Save
   Note the filename
   `\`\`

2. **Transfer File**
   `\`\`
   Share via email/cloud
   Or connect device via USB
   Copy .flm file
   `\`\`

3. **Open on Desktop**
   `\`\`
   Launch FL Studio
   File > Open
   Select .flm file
   `\`\`

4. **Verify**
   `\`\`
   Check GMS sounds the same
   Verify levels
   Test playback
   `\`\`

5. **Expand**
   `\`\`
   Add desktop-only plugins
   Refine mix
   Expand arrangement
   `\`\`

---

## Preset Management

### Organizing Presets

**By Category:**
`\`\`
GMS_Presets/
  Bass/
  Leads/
  Pads/
  Drums/
  FX/
  Mobile/
`\`\`

**By Platform:**
`\`\`
GMS_Presets/
  Cross_Platform/ (works on both)
  Desktop_Only/ (heavy patches)
  Mobile_Optimized/ (CPU-friendly)
`\`\`

### Sharing Presets

**Cloud Storage:**
`\`\`
Google Drive
Dropbox
iCloud
OneDrive
`\`\`

**Direct Transfer:**
`\`\`
Email attachment
USB cable
Bluetooth file share
AirDrop (iOS/Mac)
`\`\`

---

## Troubleshooting

### Preset Sounds Different

**Check:**
- Different GMS version
- Sample rate differences
- Host tempo differences
- FX not available on platform

**Solution:**
- Update to latest version
- Check project settings
- Manually adjust differences

### Project Won't Open

**Check:**
- File format (.flm vs .flp)
- FL Studio version compatibility
- File corruption

**Solution:**
- Update FL Studio
- Try importing MIDI only
- Re-save in compatible format

### CPU Issues on Mobile

**Symptoms:**
- Audio dropouts
- Glitching
- Slow response

**Solutions:**
- Reduce unisono voices
- Disable some FX
- Freeze tracks
- Use audio instead of GMS

---

## Quick Reference

### Transfer Methods Ranked by Speed

1. **AirDrop** (iOS/Mac only) - Instant
2. **USB cable** - Fast
3. **Cloud sync** - Medium
4. **Email** - Slower but reliable

### Best Practices Summary

- Design on mobile, refine on desktop
- Save .gms presets for transfer
- Test patches on both platforms
- Render complex sounds to audio
- Keep mobile presets CPU-friendly

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm
- FL Studio Mobile documentation

```

---

## FILE: 04-Reference\modulation-matrix-reference.md

```markdown
# GMS Modulation Matrix Reference

Complete reference for modulation routing capabilities.

## Overview

GMS provides extensive modulation routing through:
- **2 Envelope Generators (EG1, EG2)**
- **2 LFOs (LFO1, LFO2)**
- **MIDI Controllers (Velocity, Mod Wheel, Aftertouch)**

[SRC: IL-MAN]

---

## Envelope Destinations

### EG1 and EG2 can target:

| Destination | Effect | Use Case |
|-------------|--------|----------|
| **CUTOFF** | Filter opens/closes | Filter sweep basses, plucks |
| **RES** | Resonance changes | Filter character evolution |
| **PITCH** | Global pitch | Pitch drop effects, 808s |
| **PAN** | Stereo position | Auto-panning, movement |
| **AMPLITUDE** | Volume contour | Tremolo, gate effects |
| **OSC MIX** | Balance between all oscillators | Morphing textures |
| **AMOUNT** | Modulation depth | Changing FM/RM intensity |
| **OSC1 PITCH** | Individual oscillator | Detuned sweeps |
| **OSC2 PITCH** | Individual oscillator | Sync sweep modulation |
| **OSC3 PITCH** | Individual oscillator | Sub-octave movement |

---

## LFO Destinations

### LFO1 and LFO2 can target the same destinations as envelopes.

### Most Popular LFO Targets:

| Target | Recommended Settings | Result |
|--------|---------------------|--------|
| **CUTOFF** | Rate: 30-60%, Amount: ±40% | Wobble bass, filter sweep |
| **PITCH** | Rate: 25%, Amount: ±10% | Vibrato |
| **PAN** | Rate: 10-15%, Amount: 80% | Auto-panning |
| **AMOUNT** | Rate: 15%, Amount: ±30% | Evolving FM texture |
| **OSC2 PITCH** | Rate: 40%, Amount: ±20% | Sync modulation |

---

## FX Modulation

### LFO Control of FX Parameters

Each effect's X and Y parameters can be modulated:

| Effect | Common LFO Target | Result |
|--------|-------------------|--------|
| **DIST X** | LFO → Drive amount | Pulsing distortion |
| **FLNG X** | LFO → Depth | Sweeping flanger |
| **PHSR X** | LFO → Depth | Moving phaser |
| **LPF X** | LFO → Cutoff | Filter sweep |
| **ECHO X** | LFO → Feedback | Growing echoes |
| **PAN X** | LFO → Position | Stereo movement |
| **TRNC Y** | LFO → Drop | Rhythmic intensity |

### Arming FX to LFO
`\`\`
1. Select effect
2. Click "Arm X" or "Arm Y"
3. LFO now modulates that parameter
4. Adjust LFO RATE and AMOUNT
`\`\`

---

## MIDI Controller Routing

### MIDI/EQ Panel (Click MIDI/EQ button)

| Controller | Assignment Method |
|------------|-------------------|
| **VELOCITY** | Assign to any destination via VELOCITY menu |
| **MODULATION** | Assign to any destination via MODULATION menu |
| **AFTERTOUCH** | Assign to any destination via AFTERTOUCH menu |
| **PITCH BEND** | Set bend range (semitones) |

### Common MIDI Mappings

`\`\`
VELOCITY → AMPLITUDE (default on)
Result: Harder keypress = louder

MODULATION → CUTOFF
Result: Mod wheel opens filter

AFTERTOUCH → AMOUNT
Result: Pressure increases FM
`\`\`

---

## Modulation Amount (AMNT)

### Understanding Amount
- **Range:** ±100%
- **Positive:** Normal modulation direction
- **Negative:** Inverse modulation
- **0%:** No modulation

### Context-Specific Guidelines

| Application | Recommended Amount | Notes |
|-------------|-------------------|-------|
| **Filter sweep** | ±30 to ±60% | Higher = more dramatic |
| **Vibrato** | ±8 to ±15% | Subtle is better |
| **Pitch drop** | -30 to -50% | Negative for drop |
| **Tremolo** | ±40 to ±70% | Depends on desired depth |
| **FM evolution** | ±20 to ±40% | Avoid chaos |

---

## Advanced Routing Examples

### Example 1: Dynamic Bass
`\`\`
EG1 → CUTOFF (fast attack, medium decay)
LFO1 → CUTOFF (slow wobble)
Result: Attack bite + ongoing wobble
`\`\`

### Example 2: Evolving Pad
`\`\`
EG1 → AMOUNT (slow build of FM)
LFO1 → CUTOFF (gentle filter movement)
LFO2 → PAN (stereo wandering)
Result: Complex evolving texture
`\`\`

### Example 3: Expressive Lead
`\`\`
VELOCITY → AMPLITUDE (play dynamics)
MOD WHEEL → CUTOFF (filter control)
LFO1 → PITCH (subtle vibrato)
Result: Highly playable instrument
`\`\`

### Example 4: Rhythmic Texture
`\`\`
LFO1 → CUTOFF (synced to beat)
LFO2 → PAN (different rate)
EG1 → AMOUNT (per-note variation)
Result: Rhythmic, moving texture
`\`\`

---

## Envelope Shapes

### ADSR Controls

| Stage | Typical Ranges | Effect |
|-------|---------------|--------|
| **Attack** | 0-50% | Time to peak |
| **Decay** | 10-60% | Time to sustain |
| **Sustain** | 0-100% | Level during hold |
| **Release** | 10-70% | Time to silence |

### Common Envelope Types

**Pluck/Bell:**
- ATK: 0%
- DEC: 25%
- SUS: 15%
- REL: 25%

**Pad:**
- ATK: 40%
- DEC: 50%
- SUS: 90%
- REL: 50%

**Bass:**
- ATK: 0%
- DEC: 30%
- SUS: 80%
- REL: 25%

**Lead:**
- ATK: 0%
- DEC: 30%
- SUS: 90%
- REL: 30%

---

## LFO Configuration

### Rate Settings

| Sync Mode | Rate Range | Best For |
|-----------|-----------|----------|
| **None** | Hz-based | Free-running effects |
| **Beat** | Tempo-synced | Rhythmic wobble |
| **Bar** | Long periods | Slow evolution |

### Shape Selection Guide

| Shape | Character | Best For |
|-------|-----------|----------|
| **Sine** | Smooth, natural | Vibrato, filter sweeps |
| **Triangle** | Linear | Symmetric modulation |
| **Saw** | Ramp | One-direction effects |
| **Square** | On/Off | Gating, stepped |
| **Random** | Unpredictable | Chaos, textures |

### Retrigger Options

**Retrigger ON:**
- LFO restarts phase on each note
- Consistent modulation
- Best for: rhythmic effects

**Retrigger OFF:**
- LFO free-runs
- Different phase each note
- Best for: organic variation

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# GMS Technical Specifications

Complete technical reference for Groove Machine Synth.

## Plugin Overview

| Attribute | Value |
|-----------|-------|
| **Plugin Name** | GMS (Groove Machine Synth) |
| **Type** | Hybrid Wavetable Synthesizer |
| **Category** | Generator / Instrument |
| **Developer** | Image-Line (Maxx Claster) |
| **Presets** | Toby Emerson, Arlo G (nucleon) |
| **Platforms** | FL Studio Desktop, FL Studio Mobile |

[SRC: IL-MAN]

---

## Engine Specifications

### Oscillator System
| Feature | Specification |
|---------|---------------|
| Oscillators | 3 independent |
| Waveform Types | Sine, Triangle, Square, Pulse, Sawtooth, Custom (.wav) |
| Pitch Range | ±24 semitones |
| Fine Tune | ±100 cents |
| Wavetable Loading | Drag & drop .wav files |

### Modulation Modes
| Mode | Description |
|------|-------------|
| 1 SYNC | Hard sync between OSC1 and OSC2 |
| 2 to 1 FM | Frequency modulation (OSC2 modulates OSC1) |
| 2 to 1 RM | Ring modulation (OSC2 × OSC1) |

### Unisono System
| Parameter | Range |
|-----------|-------|
| Voices | 1-16 |
| Stereo Spread | 0-100% |
| Detune | 0-100% |
| Phase | 0-360° |

### Filter
| Feature | Specification |
|---------|---------------|
| Types | LP (Low Pass), BP (Band Pass), HP (High Pass) |
| Cutoff | 0-100% |
| Resonance | 0-100% |
| Keyboard Tracking | 0-100% |

---

## Envelope Specifications

### Envelope Generators (EG1 & EG2)
| Parameter | Range | Destinations |
|-----------|-------|--------------|
| Attack | 0-100% | CUTOFF, RES, PITCH, PAN, AMPLITUDE, OSC MIX, AMOUNT, OSC1-3 PITCH |
| Decay | 0-100% | Same as above |
| Amount | ±100% | Bipolar modulation |
| Invert | On/Off | Phase inversion |

### Level Envelope (ADSR)
| Stage | Range |
|-------|-------|
| Attack | 0-100% |
| Decay | 0-100% |
| Sustain | 0-100% |
| Release | 0-100% |
| Amplitude | 0-100% (global volume) |

---

## LFO Specifications

| Parameter | LFO 1 | LFO 2 |
|-----------|-------|-------|
| Rate | 0-100% | 0-100% |
| Sync | None/Beat/Bar | None/Beat/Bar |
| Amount | ±100% | ±100% |
| Retrigger | On/Off | On/Off |
| Invert | On/Off | On/Off |
| Shape | 8 types | 8 types |

### LFO Shapes
1. Sine (bipolar: ±1)
2. Triangle (unipolar: 0 to 1)
3. Saw (unipolar)
4. Square (unipolar)
5-8. Additional variations

**Note:** Sine is bipolar (generates +1 and -1), others are unipolar (0 to 1).

---

## FX Rack Specifications

### Signal Flow
`\`\`
DIST → CRSH → FLNG → PHSR → LPF → HPF → ECHO → RVRB → PAN → TRNC
`\`\`

### Effect Parameters

| Effect | X Parameter | Y Parameter |
|--------|-------------|-------------|
| **DIST** | Distortion amount (0-100%) | Low pass cutoff (0-100%) |
| **CRSH** | Sample-rate reduction (0-100%) | Low pass cutoff (0-100%) |
| **FLNG** | Depth (0-100%) | Feedback (0-100%) |
| **PHSR** | Depth (0-100%) | Feedback (0-100%) |
| **LPF** | Cutoff frequency (0-100%) | Resonance (0-100%) |
| **HPF** | Cutoff frequency (0-100%) | Resonance (0-100%) |
| **ECHO** | Feedback amount (0-100%) | Filtering (0-100%) |
| **RVRB** | Feedback/decay (0-100%) | Wet level (0-100%) |
| **PAN** | Left/Right position (0-100%) | Binaural effect (0-100%) |
| **TRNC** | Release time (0-100%) | Drop level (0-100%) |

### LFO Control
- Each effect's X and Y can be armed to LFO
- LFO Multiplier: 0-100%
- Sync: Bar or Beat

---

## EQ Specifications

### 5-Band Equalizer (Post-FX)
| Band | Center Frequency | Type |
|------|------------------|------|
| Band 1 | 60 Hz | Low Shelf |
| Band 2 | 220 Hz | Bell |
| Band 3 | 1500 Hz | Bell |
| Band 4 | 8000 Hz | Bell |
| Band 5 | 12000 Hz | High Shelf |

---

## MIDI Specifications

### Supported Controllers
- **VELOCITY** - Assignable to various targets
- **MODULATION** - Mod wheel mapping
- **AFTERTOUCH** - Pressure mapping
- **PITCH BEND** - Configurable range

### Velocity to Level
- Switch: Enable/disable
- Basic velocity-to-volume relationship

---

## Keyboard Specifications

| Feature | Range/Options |
|---------|---------------|
| Octave | ±4 octaves |
| Mono Voice | On/Off with portamento |
| Frequency Slide | 0-100% (portamento time) |
| Global Pitch | ±12 semitones |
| Global Pan | L100 to R100 |

---

## Performance Specifications

### Polyphony
- **Mode:** Polyphonic (multiple voices)
- **Mono Voice:** Monophonic with portamento
- **Unisono:** 1-16 voices per note

### CPU Usage
| Configuration | Relative Load |
|---------------|----------------|
| 1 voice, no FX | Low |
| 4 voices, 2 FX | Medium |
| 8+ voices, all FX | High |
| 16 voices, 10 FX | Very High |

**Optimization:** Use freeze/render for heavy patches.

---

## File Formats

### Presets
- **Format:** .gms
- **Compatibility:** FL Studio Desktop & Mobile
- **Sharing:** Cross-platform compatible

### Wavetables
- **Format:** .wav files
- **Loading:** Drag & drop or file browser
- **Ideal Length:** Single cycle (2048 samples typical)

---

## Integration

### FL Studio Desktop
- Channel Rack instrument
- Mixer routing
- Patcher compatible
- Automation support

### FL Studio Mobile
- Same engine
- .gms preset compatibility
- Touch-optimized interface

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

## FILE: 04-Reference\terminology-glossary.md

```markdown
# GMS Glossary

Terminology and definitions for Groove Machine Synth.

[SRC: IL-MAN]

---

## A

**ADSR Envelope** - Attack, Decay, Sustain, Release envelope type. GMS uses ADSR for the Level EG (amplitude).

**Aftertouch** - MIDI pressure data sent after a key is held down. GMS can map aftertouch to various destinations.

**AMNT (Amount)** - Parameter controlling modulation depth/intensity. Range is ±100%.

**Arm X/Y** - Clicking to enable LFO control of an effect's X or Y parameter.

## B

**Band Pass (BP)** - Filter type that allows only a band of frequencies to pass, cutting both highs and lows.

**Bandwidth** - Frequency range affected by a filter or equalizer band.

**Bend Range** - Pitch wheel range in semitones, configurable in MIDI panel.

**Bipolar** - LFO shape that generates both positive and negative values (e.g., Sine: +1 to -1).

**Bit Crusher (CRSH)** - FX that reduces sample rate and bit depth for lo-fi effects.

## C

**Carrier** - In FM synthesis, the oscillator whose frequency is being modulated (OSC 1 in GMS).

**Chorus Effect** - The thickening effect created by multiple detuned voices (unisono).

**Cutoff** - Filter parameter determining the frequency boundary.

## D

**Decay** - Envelope stage determining time to reach sustain level.

**DEST (Destination)** - Target parameter for envelope or LFO modulation.

**Detune** - Slight pitch variation between voices (cents or percentage).

**Distortion (DIST)** - FX adding harmonic saturation and overdrive.

**Drop Level** - TRNC parameter controlling how much volume drops during gating.

## E

**Echo** - Delay/echo FX module in GMS FX rack.

**Envelope** - Shape controlling how a parameter changes over time (attack, decay, etc.).

## F

**Filter** - Circuit that removes certain frequencies. GMS has LP, BP, and HP types.

**Fine** - Fine pitch adjustment in cents (±100 cents = ±1 semitone).

**Flanger (FLNG)** - FX creating jet-plane sweeping effect through comb filtering.

**FM (Frequency Modulation)** - Synthesis method where one oscillator modulates another's frequency.

**Freeze** - Rendering a channel to audio to save CPU.

## G

**GMS** - Groove Machine Synth, the hybrid wavetable synthesizer.

**Glue** - Button to permanently enable an FX (vs. momentary activation).

## H

**Hard Sync** - Modulation mode where OSC 1 resets phase based on OSC 2 frequency.

**Harmonics** - Additional frequencies above the fundamental created by waveforms.

**HPF (High Pass Filter)** - FX module cutting low frequencies.

## I

**Invert** - Flipping the phase of a signal (180° shift) or inverting envelope direction.

## K

**KBD (Keyboard)** - Keyboard tracking, making filter cutoff follow note pitch.

## L

**Level EG** - Envelope specifically for amplitude (volume) shaping.

**LFO (Low Frequency Oscillator)** - Oscillator below audio rate used for modulation.

**LP (Low Pass)** - Filter type allowing frequencies below cutoff to pass.

**LPF (Low Pass Filter)** - FX module cutting high frequencies.

## M

**Modulation** - Changing a parameter over time via envelopes, LFOs, or controllers.

**Modulation Matrix** - The routing system connecting sources to destinations.

**Mod Wheel** - MIDI controller typically mapped to modulation destinations.

**Modulator** - In FM synthesis, the oscillator doing the modulating (OSC 2 in GMS).

**Mono** - Single voice mode with portamento/glide.

## N

**Noise** - White noise generator for texture and percussion.

## O

**OSC (Oscillator)** - Sound generator. GMS has 3 oscillators.

**Octave** - Frequency range (×2 or ÷2). GMS allows ±4 octave shifts.

## P

**Pan** - Stereo position (left to right).

**Panning (PAN)** - FX module for auto-panning effects.

**Phaser (PHSR)** - FX creating notch filter sweeps.

**Phase** - Starting point of a waveform cycle (0-360°).

**Pitch** - Perceived frequency of a note. Controlled in semitones and cents.

**Pitch Drop** - 808-style effect using negative pitch envelope.

**Portamento** - Glide between notes (FREQ SLIDE parameter).

**Pulse Wave** - Square wave with variable width (duty cycle).

## R

**Ratio** - Frequency relationship in FM synthesis (e.g., 2:1, 3:1).

**Reverb (RVRB)** - FX adding spatial reflections.

**Resonance (RES)** - Boost at filter cutoff frequency.

**Retrigger** - Restarting envelope or LFO phase on each note.

**Release** - Envelope stage for fade-out after note release.

**Release Time** - TRNC parameter for how fast gate closes.

**RM (Ring Modulation)** - Multiplication of two signals creating sum/difference frequencies.

## S

**Sawtooth** - Waveform with all harmonics, brightest character.

**Sidebands** - Additional frequencies created by FM synthesis.

**Sine** - Pure waveform with no harmonics, fundamental only.

**Square** - Waveform with odd harmonics only, hollow character.

**Stereo** - Two-channel audio (left and right).

**Stereo Spread** - Unisono parameter controlling voice distribution across stereo field.

**Subtractive Synthesis** - Starting with rich waveform and filtering.

**Sustain** - Envelope level maintained while key is held.

**Sync** - See "Hard Sync"

## T

**TRNC (Trance Gate)** - FX creating rhythmic gating/pumping effects.

**Triangle** - Waveform with soft character, odd harmonics only.

## U

**Unipolar** - LFO shape generating only positive values (0 to 1).

**Unisono** - Multiple detuned voices per note for chorus effect.

**Unisono Detune** - Amount of pitch variation between unison voices.

**Unisono Voices** - Number of voices in unison (1-16).

## V

**Velocity** - MIDI note strength (how hard key is pressed).

**Vibrato** - Pitch modulation for expressiveness.

## W

**Waveshape** - The waveform selected for an oscillator.

**Wavetable** - Collection of waveforms. GMS can load custom .wav files.

**Wet/Dry** - Balance between effect (wet) and original (dry) signal.

## X-Y

**X/Y Panel** - Performance control area for FX parameters.

---

## Synthesis Terms

### Hybrid Synthesis
Combination of multiple synthesis methods (subtractive, FM, RM, sync).

### Wavetable Synthesis
Using sampled single-cycle waveforms as oscillator sources.

### Frequency Modulation (FM)
Audio-rate frequency modulation creating complex harmonics.

### Ring Modulation
Amplitude multiplication creating inharmonic sidebands.

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/GMS.htm

```

---

