# LuxeVerb - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 00-START-HERE.md

```markdown
# LuxeVerb: Start Here

Welcome to the **LuxeVerb** Deeper Dive. LuxeVerb is FL Studio's premium algorithmic reverb, designed for "luxurious" lush textures, advanced pitch-shifted feedback (Shimmer), and artifact-free automation.

## 🗺️ Quick Navigation Guide

### 1. The Essentials (Start Here)
- **[README.md](./README.md):** The central hub for sound design goals and technical specs.
- **[01-Learning/Quick-Reference/parameter-cheat-sheet.md](./01-Learning/Quick-Reference/parameter-cheat-sheet.md):** A 2-minute breakdown of the 6 core modes and pitch controls.
- **[01-Learning/Quick-Reference/luxeverb-mode-decoded.md](./01-Learning/Quick-Reference/luxeverb-mode-decoded.md):** Which algorithm to choose for your instrument.

### 2. Core Concepts
- **[01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md](./01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md):** Understanding the early vs. late reflection architecture.
- **[01-Learning/Concepts/03_Vibe_Translation_Guide.md](./01-Learning/Concepts/03_Vibe_Translation_Guide.md):** Dialing in Lush, Moody, and Psychedelic spaces.

### 3. Workflow Recipes
- **[03-Workflows/by-goal/creating-shimmer-reverbs.md](./03-Workflows/by-goal/creating-shimmer-reverbs.md):** The step-by-step "angelic halo" setup.
- **[03-Workflows/by-goal/cinematic-riser-reverb.md](./03-Workflows/by-goal/cinematic-riser-reverb.md):** Using Size and Decay automation for tension.
- **[03-Workflows/by-goal/vocal-hall-optimization.md](./03-Workflows/by-goal/vocal-hall-optimization.md):** Professional vocal depth without the mud.

## 🚀 Rapid Success Protocol
1. **Choose a Mode:** Try "Lush" for pads or "Plate" for vocals.
2. **Set the Decay:** Use the large central knob to find the tail length.
3. **Add the Shimmer:** Adjust the **Pitch** fader (e.g., +12) and increase **Feedback** for harmonic depth.
4. **Automate the Size:** Experiment with moving the **Size** knob in real-time—it's designed to be glitch-free!
5. **Clean the Mix:** Use the built-in **LP / HP** filters to keep your reverb focused and professional.

---
*For technical specs and parameter data, see the [02-Data/](./02-Data/) folder.*

```

---

## FILE: README.md

```markdown
# LuxeVerb - Advanced Algorithmic Reverb

`\`\`
██╗     ██╗   ██╗██╗  ██╗███████╗██╗   ██╗███████╗██████╗ ██████╗ 
██║     ██║   ██║╚██╗██╔╝██╔════╝██║   ██║██╔════╝██╔══██╗██╔══██╗
██║     ██║   ██║ ╚███╔╝ █████╗  ██║   ██║█████╗  ██████╔╝██████╔╝
██║     ██║   ██║ ██╔██╗ ██╔══╝  ╚██╗ ██╔╝██╔══╝  ██╔══██╗██╔══██╗
███████╗╚██████╔╝██╔╝ ██╗███████╗ ╚████╔╝ ███████╗██║  ██║██████╔╝
╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═════╝ 
`\`\`

**Plugin Type:** Advanced Algorithmic Reverb
**Category:** Effect / Reverb
**Official Manual:** [Image-Line LuxeVerb Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/LuxeVerb.htm)

---

## 🎯 What is LuxeVerb?

LuxeVerb is FL Studio's premium algorithmic reverb, introduced in version 21. It is designed to go beyond standard room simulations, offering "luxurious" lush textures and advanced pitch-shifting feedback. It features six distinct reverb modes and a highly automated parameter set that avoids digital artifacts during real-time sweeps.

**Key Capabilities:**
- **Six Specialized Modes:** Room, Plate, Hall, Cathedral, Space, and Lush.
- **Pitch-Shifted Feedback:** Create "Shimmer" and harmonic reverb tails.
- **Dynamic Controls:** Smooth automation of Decay and Size without clicking.
- **Brightness & Diffusion:** Simulate surface materials and echo density.
- **Integrated Filtering:** High and Low Pass filters for precise tonal focus.
- **Modulation Engine:** Subtle pitch detuning for complex, organic tails.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **luxeverb-mode-comparison.md**
3. Create **parameter-cheat-sheet.md**
4. Load the "Lush" mode and automate the "Decay" knob during a melody playback.

### For Sound Designers:
1. Study **creating-shimmer-reverbs.md**
2. Review **otherworldly-space-textures.md**
3. Learn **real-time-size-automation.md**

### For Mix Engineers:
1. Study **vocal-hall-optimization.md**
2. Review **stereo-width-management.md**
3. Learn **transparency-tuning.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Mode Selector:** 6 core algorithms.
  - **Size & Decay:** Space dimensions and tail length.
  - **Pre-Delay:** Initial gap.
  - **Brightness:** Surface reflectivity.
  - **Shimmer/Pitch:** Harmonic feedback controls.

- [ ] **luxeverb-mode-decoded.md**
  - **Cathedral:** Longest, most resonant.
  - **Space:** Abstract, endless.
  - **Plate:** Metallic, fast-attack.

#### 02-Data/parameters/
- [ ] **luxeverb-params.json**
  `\`\`json
  {
    "plugin_name": "LuxeVerb",
    "category": "Reverb",
    "features": ["Shimmer", "Artifact-free automation", "6 Modes"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-shimmer-reverbs.md**
  - Using the Pitch fader in the feedback loop (+1 Octave).
  - Adjusting feedback amount for the "angelic" glow.
  - Using the LP filter to keep the shimmer from being piercing.

- [ ] **cinematic-riser-reverb.md**
  - Automating the "Size" knob from min to max.
  - Increasing "Decay" simultaneously for massive tension.

- [ ] **acoustic-guitar-hall.md**
  - Hall mode setup.
  - Modulating the tail for "air."
  - Using Pre-Delay to keep the pluck clear.

#### 03-Workflows/by-context/
- [ ] **synthwave-pad-depth.md**
- [ ] **epic-drum-reverb-bus.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **feedback-loop-signal-flow.md**
  - Where the pitch shifter sits in the chain.
  - Diffusion impact on shimmer smoothness.

---

## 🔬 Research Framework

### Phase 1: Mode Exploration (Week 1)
**Goal:** Sonic Palette

**Tasks:**
1. Load a simple click or pluck
2. Cycle through all 6 modes
3. Note the "Early Reflection" character of each
4. Create luxeverb-mode-decoded.md

**Key Questions to Answer:**
- Which mode handles low frequencies most cleanly?
- How does "Brightness" interact with the "HF Cut" filter?

### Phase 2: Shimmer Mastery (Week 2)
**Goal:** Harmonic Tails

**Tasks:**
1. Setup a standard shimmer (+12 semitones)
2. Try a "Dark Shimmer" (-12 semitones)
3. Create creating-shimmer-reverbs.md

---

## 📊 Plugin Specifications to Document

### Engine
- Algorithm Types (Digital Plate, Hall, etc.)
- Interpolation quality

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do I get an "infinite" reverb? (Set Decay to max in Space mode).
2. Why does the pitch change when I move the Size knob? (Actually, LuxeVerb is designed *not* to do this, unlike many other reverbs - verify!).

---

## 🔗 Cross-Reference with Other Plugins

LuxeVerb is often used with:
- **Fruity Delay 3** (Pre-reverb echoes)
- **Fruity Soft Clipper** (Taming massive shimmer buildups)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
LuxeVerb/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── luxeverb-mode-decoded.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── luxeverb-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-shimmer-reverbs.md
│   │   └── cinematic-riser-reverb.md
│
└── 04-Reference/
    └── feedback-loop-signal-flow.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [LuxeVerb Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/LuxeVerb.htm)
- [LuxeVerb Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/LuxeVerb_tutorials.htm)
- [LuxeVerb Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+luxeverb+tutorial)

### Community Resources
- [LuxeVerb Subreddit](https://www.reddit.com/r/FL_Studio/search?q=luxeverb&restrict_sr=1)
- [LuxeVerb User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [LuxeVerb Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Algorithmic Reverb Design" - Understanding digital reverb algorithms
- "Shimmer Reverb Techniques" - Creating harmonic reverb tails
- "Reverb in Mixing and Mastering" - Professional reverb applications

### Advanced Techniques
- **Shimmer Implementation:** Understanding pitch-shifted feedback
- **Mode Selection:** Choosing appropriate reverb modes for content
- **Artifact-Free Automation:** Using smooth parameter changes

---

## 📚 In-Depth Technical Analysis

### Algorithmic Reverb Architecture
LuxeVerb implements sophisticated algorithmic reverb processing:
- **Six Distinct Algorithms:** Room, Plate, Hall, Cathedral, Space, and Lush
- **Pitch-Shifted Feedback:** Advanced harmonic feedback processing
- **Smooth Automation:** Artifact-free parameter changes during playback
- **Real-time Processing:** Optimized for live performance
- **Low Latency:** Minimal processing delay

### Reverb Mode Characteristics
The six reverb modes offer different acoustic characteristics:

**Room Mode:**
- **Acoustic Simulation:** Small to medium room simulation
- **Early Reflections:** Dense, quick reflections
- **Decay Characteristics:** Short to medium decay times
- **Frequency Response:** Balanced frequency response
- **Use Cases:** Vocals, drums, general mixing

**Plate Mode:**
- **Acoustic Simulation:** Artificial plate reverb emulation
- **Early Reflections:** Fast, metallic reflections
- **Decay Characteristics:** Medium decay with metallic character
- **Frequency Response:** Bright, with characteristic plate resonance
- **Use Cases:** Vocals, drums, instruments requiring metallic character

**Hall Mode:**
- **Acoustic Simulation:** Medium to large concert hall simulation
- **Early Reflections:** Spacious, enveloping reflections
- **Decay Characteristics:** Medium to long decay times
- **Frequency Response:** Warm, balanced response
- **Use Cases:** Orchestral, cinematic, general use

**Cathedral Mode:**
- **Acoustic Simulation:** Large cathedral/church simulation
- **Early Reflections:** Very spacious, enveloping reflections
- **Decay Characteristics:** Long decay times with natural character
- **Frequency Response:** Warm, with natural low-end emphasis
- **Use Cases:** Cinematic, orchestral, atmospheric

**Space Mode:**
- **Acoustic Simulation:** Abstract, endless space simulation
- **Early Reflections:** Abstract, non-environmental reflections
- **Decay Characteristics:** Potentially infinite decay
- **Frequency Response:** Balanced, abstract response
- **Use Cases:** Experimental, ambient, infinite reverb effects

**Lush Mode:**
- **Acoustic Simulation:** Dense, luxurious reverb simulation
- **Early Reflections:** Dense, complex reflections
- **Decay Characteristics:** Long, evolving decay
- **Frequency Response:** Rich, full response
- **Use Cases:** Pads, ambient, lush textures

### Pitch-Shifted Feedback System
The shimmer effect uses sophisticated pitch shifting:
- **Harmonic Feedback:** Pitch-shifted signal fed back into reverb
- **Interval Selection:** Various pitch intervals available
- **Quality Preservation:** Maintains reverb quality during pitch shifting
- **Harmonic Integration:** Creates harmonic relationships
- **Real-time Processing:** Immediate response to pitch changes

### Signal Processing Chain
The internal architecture processes audio as follows:
- **Input Stage:** Signal level monitoring and routing
- **Pre-Delay:** Initial delay before reverb processing
- **Early Reflections:** Initial acoustic reflections
- **Algorithm Processing:** Main reverb algorithm application
- **Pitch Shifting:** Harmonic feedback processing
- **Modulation:** Subtle pitch detuning for organic tails
- **Filtering:** High and low-pass filtering
- **Output Stage:** Final reverb signal routing

### Artifact-Free Automation
The plugin features smooth parameter automation:
- **Interpolation:** Smooth transitions between parameter values
- **Real-time Processing:** No clicking or popping during automation
- **Dynamic Response:** Immediate response to parameter changes
- **Quality Preservation:** Maintains reverb quality during automation
- **Performance Optimization:** Optimized for live performance

## 🎛️ Parameter Deep Dive

### Mode Selection Controls
- **Function:** Selects the reverb algorithm
  - Range: Room, Plate, Hall, Cathedral, Space, Lush
  - Effect: Changes the fundamental reverb character
  - Use for: Different acoustic environments
  - Pro tip: Each mode has unique characteristics and applications
- **Behavior:**
  - Room: Small-medium room simulation
  - Plate: Metallic, artificial reverb
  - Hall: Concert hall simulation
  - Cathedral: Church/cathedral simulation
  - Space: Abstract, potentially infinite space
  - Lush: Dense, luxurious reverb
  - Pro tip: Choose based on musical context and desired character
- **Applications:**
  - Vocals: Hall or Room for natural vocal reverb
  - Drums: Room or Plate for drum reverb
  - Pads: Lush or Cathedral for atmospheric reverb
  - Experimental: Space for abstract textures
  - Pro tip: Match mode to musical context and arrangement

### Size Control
- **Function:** Controls the perceived size of the reverb space
  - Range: Small to large (typically 0-100%)
  - Effect: Changes the acoustic dimensions of the space
  - Use for: Creating different spatial characteristics
  - Pro tip: Larger values create more spacious reverb
- **Behavior:**
  - Small: Intimate, close reverb space
  - Large: Spacious, distant reverb space
  - Pro tip: Use with decay for realistic space simulation
- **Applications:**
  - Intimate spaces: Small settings for close sounds
  - Medium spaces: Medium settings for balanced reverb
  - Large spaces: Large settings for spacious effects
  - Creative spaces: Extreme settings for unique effects
  - Pro tip: Use for realistic space simulation

### Decay Control
- **Function:** Controls the length of the reverb tail
  - Range: Short to long (typically 0-100%)
  - Effect: Determines how long reverb persists
  - Use for: Setting reverb duration
  - Pro tip: Match to room size for realism
- **Behavior:**
  - Short: Quick decay, intimate space
  - Long: Extended decay, large space
  - Pro tip: Use shorter decay for busy mixes
- **Applications:**
  - Short decay: For subtle ambience
  - Medium decay: For general reverb applications
  - Long decay: For spacious, atmospheric effects
  - Creative decay: For unique reverb textures
  - Pro tip: Use automation for evolving reverb

### Pre-Delay Control
- **Function:** Sets the initial gap before reverb onset
  - Range: 0-500ms (typically)
  - Effect: Creates separation between dry and wet signals
  - Use for: Maintaining clarity and definition
  - Pro tip: Essential for vocal and drum reverb
- **Behavior:**
  - Low values: Minimal separation
  - High values: Clear separation between dry and wet
  - Pro tip: Use for maintaining attack clarity
- **Applications:**
  - Vocal clarity: High values for vocal definition
  - Drum definition: High values for drum attack preservation
  - Spatial separation: Variable values for space
  - Creative effects: Extreme values for unique effects
  - Pro tip: Use for maintaining element definition

### Brightness Control
- **Function:** Controls the high-frequency content of reflections
  - Range: Dark to bright (typically 0-100%)
  - Effect: Adjusts surface reflectivity characteristics
  - Use for: Tonal shaping of reverb
  - Pro tip: Higher values create brighter, more reflective surfaces
- **Behavior:**
  - Low values: Dark, absorbent surfaces
  - High values: Bright, reflective surfaces
  - Pro tip: Match to acoustic environment characteristics
- **Applications:**
  - Dark reverb: Low values for absorbent spaces
  - Bright reverb: High values for reflective spaces
  - Tonal shaping: Variable values for tone control
  - Creative effects: Extreme values for unique textures
  - Pro tip: Use for acoustic environment simulation

### Shimmer/Pitch Control
- **Function:** Adds pitch-shifted feedback to reverb tail
  - Range: Various pitch intervals (typically semitones)
  - Effect: Creates harmonic reverb tails
  - Use for: Shimmer and angelic effects
  - Pro tip: Essential for creating harmonic reverb
- **Behavior:**
  - 0: No pitch shift, standard reverb
  - Positive: Higher pitch intervals (shimmer up)
  - Negative: Lower pitch intervals (shimmer down)
  - Pro tip: Use +12 semitones for classic shimmer
- **Applications:**
  - Shimmer reverb: +12 semitones for classic effect
  - Dark shimmer: -12 semitones for lower harmonic content
  - Creative shimmer: Variable intervals for unique effects
  - Harmonic enhancement: Pitch intervals for harmonic content
  - Pro tip: Use with filtering to tame harshness

### Diffusion Control
- **Function:** Controls the density of reflections
  - Range: Low to high (typically 0-100%)
  - Effect: Adjusts echo density and smoothness
  - Use for: Creating different reverb textures
  - Pro tip: Higher values create smoother, more diffuse reverb
- **Behavior:**
  - Low values: Discrete, echo-like reflections
  - High values: Dense, smooth reverb tail
  - Pro tip: Use for controlling reverb character
- **Applications:**
  - Echo-like: Low values for discrete reflections
  - Smooth reverb: High values for dense tails
  - Texture control: Variable values for different textures
  - Creative effects: Extreme values for unique textures
  - Pro tip: Use for reverb character control

### Filtering Controls
- **High-Pass Filter:**
  - **Function:** Removes low frequencies from reverb
    - Range: 20Hz to several kHz
    - Effect: Prevents low-end muddiness
    - Use for: Cleaning up reverb low-end
    - Pro tip: Essential for bass-safe reverb
  - **Behavior:**
    - Low values: Preserve low-end
    - High values: Remove low-end
    - Pro tip: Use for bass management
  - **Applications:**
    - Bass safety: High values to protect low-end
    - Clean reverb: Medium values for clarity
    - Creative filtering: Variable values for tone
    - Mix integration: Adjust for appropriate clarity
    - Pro tip: Use to prevent low-end issues

- **Low-Pass Filter:**
  - **Function:** Removes high frequencies from reverb
    - Range: Several kHz to 20kHz
    - Effect: Tames harsh reverb artifacts
    - Use for: Smoothing reverb high-end
    - Pro tip: Use for preventing harshness
  - **Behavior:**
    - Low values: Remove high-end, darker reverb
    - High values: Preserve high-end, brighter reverb
    - Pro tip: Use for brightness control
  - **Applications:**
    - Smooth reverb: Low values for gentle effect
    - Bright reverb: High values for clarity
    - Creative filtering: Variable values for tone
    - Mix integration: Adjust for appropriate brightness
    - Pro tip: Use to tame harshness

## 🎼 Sound Design Applications

### Shimmer Reverb Applications
Using LuxeVerb for harmonic reverb effects:

**Classic Shimmer:**
- **Setup:** Pitch shift +12 semitones with appropriate feedback
  - Use Cathedral or Lush mode for best results
  - Apply moderate pitch shift feedback
  - Essential for ambient and atmospheric music
  - Perfect for "angelic" textures
  - Pro tip: Use with filtering to tame harshness

**Dark Shimmer:**
- **Setup:** Pitch shift -12 semitones for lower harmonic content
  - Creates haunting, dark harmonic tails
  - Essential for atmospheric and dark music
  - Perfect for horror and ambient music
  - Pro tip: Use for unique harmonic textures

**Complex Shimmer:**
- **Setup:** Multiple pitch intervals for complex harmonics
  - Combine different pitch intervals
  - Create rich harmonic content
  - Essential for complex harmonic reverb
  - Perfect for evolving textures
  - Pro tip: Use for sophisticated harmonic effects

### Spatial Enhancement
Using LuxeVerb for spatial applications:

**Vocal Enhancement:**
- **Natural Vocal Reverb:** Creating realistic vocal spaces
  - Use Hall or Room mode for natural vocals
  - Apply appropriate pre-delay for clarity
  - Essential for professional vocal production
  - Perfect for vocal presence
  - Pro tip: Use for maintaining vocal definition

**Instrument Enhancement:**
- **Orchestral Reverb:** Creating realistic orchestral spaces
  - Use Hall or Cathedral mode for orchestral sounds
  - Apply appropriate size and decay settings
  - Essential for orchestral music
  - Perfect for realistic acoustic spaces
  - Pro tip: Use for authentic acoustic simulation

**Creative Enhancement:**
- **Abstract Spaces:** Creating non-realistic spatial effects
  - Use Space mode for abstract textures
  - Apply creative parameter combinations
  - Essential for experimental music
  - Perfect for evolving textures
  - Pro tip: Use for unique spatial effects

### Creative Applications
Using LuxeVerb for experimental applications:

**Cinematic Applications:**
- **Riser Effects:** Creating tension-building reverb effects
  - Automate size and decay for evolving spaces
  - Use for cinematic tension building
  - Essential for film scoring
  - Perfect for build-up effects
  - Pro tip: Use for dramatic tension

**Atmospheric Textures:**
- **Ambient Creation:** Creating evolving ambient textures
  - Use Lush or Cathedral mode for atmospheric sounds
  - Apply creative automation for evolution
  - Essential for ambient music
  - Perfect for evolving soundscapes
  - Pro tip: Use for atmospheric enhancement

**Experimental Effects:**
- **Abstract Processing:** Creating unique reverb textures
  - Use extreme settings for experimental sounds
  - Apply creative parameter combinations
  - Essential for experimental music
  - Perfect for unique sonic signatures
  - Pro tip: Use for creative sound design

## 🧪 Experimental Techniques

### Advanced Reverb Applications
Creative uses of LuxeVerb's capabilities:

**Mode-Specific Experimentation:**
- **Space Mode Infinity:** Creating potentially infinite reverb effects
  - Use maximum decay settings in Space mode
  - Create evolving, endless textures
  - Perfect for ambient and experimental music
  - Essential for infinite reverb effects
  - Useful for evolving soundscapes

**Shimmer Manipulation:**
- **Harmonic Stacking:** Using multiple pitch intervals simultaneously
  - Create complex harmonic reverb structures
  - Stack different pitch intervals
  - Perfect for complex harmonic textures
  - Essential for sophisticated shimmer
  - Useful for evolving harmonic content

**Size Automation:**
- **Dynamic Space Changes:** Automating size for evolving spaces
  - Create evolving spatial characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic spatial expression
  - Useful for expressive spatial control

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Smooth Parameter Changes:** Automating parameters for evolving effects
  - Create evolving reverb characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic reverb expression
  - Use for expressive reverb control

**Modulation Applications:**
- **Parameter Modulation:** Using external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Stage Processing:**
- **Complex Reverb Enhancement:** Multiple processing stages for sophisticated effects
  - Create multi-stage reverb enhancement
  - Apply different processing to different stages
  - Build sophisticated reverb processing chains
  - Perfect for advanced sound design
  - Use for complex reverb processing

## 🎚️ Workflow Optimization

### Reverb Setup Workflows
Efficient approaches to using LuxeVerb for reverb:

**Vocal Reverb Setup:**
- **Natural Vocal Enhancement:** Creating realistic vocal spaces
  - Use Hall mode with appropriate settings
  - Apply pre-delay for vocal clarity
  - Essential for professional vocal production
  - Pro tip: Use for maintaining vocal definition

- **Creative Vocal Enhancement:** Creating unique vocal spaces
  - Use Lush or Space mode for creative effects
  - Apply shimmer for harmonic enhancement
  - Essential for creative vocal production
  - Pro tip: Use for unique vocal character

**Instrument Reverb Setup:**
- **Orchestral Enhancement:** Creating realistic orchestral spaces
  - Use Cathedral or Hall mode for orchestral sounds
  - Apply appropriate size and decay for realism
  - Essential for orchestral music
  - Pro tip: Use for authentic acoustic simulation

- **Creative Instrument Enhancement:** Creating unique instrument spaces
  - Use experimental modes for creative effects
  - Apply creative parameter combinations
  - Essential for creative instrument enhancement
  - Pro tip: Use for unique instrument character

### Integration Workflows
Working with other plugins and tools:

**Effects Integration:**
- **Pre-Effects:** Using before other effects
  - Apply before additional reverb for layered spaces
  - Use before delay for rhythmic patterns
  - Essential for proper signal flow
  - Pro tip: Use for space preparation

- **Post-Effects:** Using after other effects
  - Apply after EQ for frequency-processed reverb
  - Use after compression for dynamics-processed reverb
  - Essential for final processing
  - Pro tip: Use for final space shaping

**Analysis Integration:**
- **Spectrum Analysis:** Using with spectrum analyzers for feedback
  - Monitor frequency changes in real-time
  - Compare with reference tracks
  - Essential for informed parameter control
  - Pro tip: Use for visual feedback

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Atmospheric Enhancement:** Adding space to electronic elements
- **Build-up Effects:** Using reverb automation for tension building
- **Stereo Enhancement:** Adding width to electronic elements
- **Energy Management:** Using reverb for track energy
- **Transition Effects:** Creating smooth transitions between sections

### Hip-Hop and R&B
- **Vocal Enhancement:** Adding subtle space to vocals
- **Sample Enhancement:** Adding space to samples
- **Mix Enhancement:** Using reverb for mix clarity
- [ ] Create a shimmer reverb that harmonizes with the song key
- [ ] Build a cinematic transition using artifact-free automation
- [ ] Explain the unique characteristics of all 6 reverb modes
- [ ] Configure a "Plate" reverb that sounds authentic to 70s hardware
- [ ] Set up a Cathedral reverb for orchestral applications
- [ ] Create a Space mode reverb with potentially infinite decay
- [ ] Use the Shimmer effect to create harmonic reverb tails
- [ ] Apply appropriate pre-delay for vocal clarity
- [ ] Create a Lush mode reverb for atmospheric applications
- [ ] Troubleshoot reverb artifacts and harshness issues effectively
- [ ] Integrate LuxeVerb into efficient reverb workflows
- [ ] Create genre-specific reverb presets for different musical styles
- [ ] Optimize LuxeVerb settings for minimal CPU usage
- [ ] Use LuxeVerb for creative sound design applications
- [ ] Set up advanced reverb routing for complex projects
- [ ] Apply LuxeVerb in live performance scenarios
- [ ] Create experimental reverb effects with extreme settings
- [ ] Combine LuxeVerb with other effects for layered processing
- [ ] Integrate LuxeVerb with other automation tools seamlessly
- [ ] Create custom reverb workflows for specific creative needs
- [ ] Use LuxeVerb effectively in large, complex projects
- [ ] Generate complex harmonic structures with shimmer effects
- [ ] Create hybrid reverb effects combining algorithmic and convolution
- [ ] Apply LuxeVerb in mastering contexts with appropriate care
- [ ] Create complex multi-stage reverb chains with smooth automation
- [ ] Design custom reverb patches for specific acoustic environments
- [ ] Use LuxeVerb for creative vocal processing applications
- [ ] Apply advanced diffusion techniques for texture control
- [ ] Create genre-specific reverb preset libraries for efficient workflow
- [ ] Integrate LuxeVerb with external hardware for hybrid processing
- [ ] Use LuxeVerb for audio restoration and creative repair applications
- [ ] Combine LuxeVerb with other spatial processing tools
- [ ] Apply LuxeVerb in surround sound or multi-channel setups
- [ ] Create complex spatial relationships using multiple parameters
- [ ] Use LuxeVerb for creative instrumental processing applications
- [ ] Integrate LuxeVerb with other automation tools for complex control
- [ ] Create complex atmospheric textures using multiple parameters
- [ ] Design custom reverb algorithms for unique acoustic characteristics
- [ ] Apply advanced filtering techniques for tone shaping
- [ ] Use LuxeVerb for creative stereo enhancement beyond traditional methods
- [ ] Combine LuxeVerb with convolution for hybrid reverb approaches
- [ ] Implement advanced envelope shaping for dynamic expression
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use LuxeVerb for creative sound design in film and game audio
- [ ] Apply LuxeVerb in live sound reinforcement scenarios
- [ ] Create experimental reverb textures using extreme parameter settings
- [ ] Integrate LuxeVerb with external reverbs for complex spatial design
- [ ] Generate complex harmonic structures with precise control
- [ ] Use LuxeVerb for formant synthesis and harmonic creation
- [ ] Apply advanced resonance techniques for character enhancement
- [ ] Create evolving textures using parameter automation
- [ ] Design custom reverb patterns for sophisticated spatial expression
- [ ] Use LuxeVerb for creative bass enhancement with harmonic reverb
- [ ] Combine LuxeVerb with other vintage emulations for authentic sounds
- [ ] Apply LuxeVerb in educational contexts for reverb learning
- [ ] Create custom reverb patches for retro music production
- [ ] Use LuxeVerb for creative lead enhancement with harmonic reverb
- [ ] Implement advanced shimmer techniques for harmonic enhancement

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\01-reverb-fundamentals.md

```markdown
# LuxeVerb Concepts

## Reverb Fundamentals

Reverb simulates sound reflection in physical spaces. Understanding how reverb works helps create realistic or creative effects.

---

## Reverb Components

### Early Reflections
- First sound reflections off walls
- Define room size and shape
- Heard in first 50-100ms
- More prominent in small rooms

### Late Reverb (Tail)
- Diffused reflections
- Creates sense of space
- Longer decay times
- Can be filtered independently

### Pre-Delay
- Time before reverb begins
- Separates dry signal from reverb
- More pre-delay = clearer transients
- Typical: 0-50ms

---

## Reverb Parameters

### Decay Time
- Duration of reverb tail
- Small room: 0.5-1.5 seconds
- Medium room: 1.5-3 seconds
- Large hall: 3-6 seconds
- Cathedral: 8+ seconds

### Diffusion
- How scattered reflections are
- Low diffusion = discrete echoes
- High diffusion = smooth, washed sound
- Affects "cloud" quality

### High/Low Pass Filters
- Remove frequencies from reverb
- Prevents muddy low end
- Controls harsh high end
- Essential for clean mixes

---

## Reverb Types

### Hall
- Natural, musical spaces
- Warm, rounded character
- Versatile for many sources
- Good for: Pads, strings, vocals

### Plate
- Artificial reverb (metal plate)
- Dense, smooth character
- No early reflections
- Good for: Vocals, drums, vocals

### Room
- Small, tight spaces
- Short decay times
- Adds depth without space
- Good for: Drums, guitars, tight mixes

### Cathedral
- Massive, epic spaces
- Very long decay
- Wide stereo image
- Good for: Breakdowns, atmosphere

### Shimmer
- Pitch-shifted reverb
- Ethereal, dreamy quality
- Usually +1 octave
- Good for: Synths, vocals, atmosphere

---

## Stereo Imaging

### Stereo Width
- Reverb stereo spread
- Mono reverb = centered
- Stereo reverb = wide
- Use for depth and space

### Mono Compatibility
- Check reverb in mono
- Phase issues possible
- Some stereo reverb collapses poorly
- Test before finalizing

---

## Common Reverb Problems

### Muddy Mix
- Too much low-frequency reverb
- Solution: High-pass at 150-200Hz
- Check with high-pass engaged

### Harsh Reverb
- Too much high frequency
- Solution: Low-pass at 10-12kHz
- Add high damping

### Masking
- Reverb covers dry signal
- Solution: Increase pre-delay
- Reduce mix percentage

### Phasing
- Mono compatibility issues
- Solution: Use mid-side EQ
- Check in mono

---

## Related Documentation

- [LuxeVerb By-Instrument Workflows](../03-Workflows/by-instrument/INDEX.md)
- [LuxeVerb By-Goal Workflows](../03-Workflows/by-goal/INDEX.md)
- [LuxeVerb Presets](../02-Data/presets/INDEX.md)
- [LuxeVerb Safety Rules](../02-Data/rules/luxeverb-safety-rules.md)

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: LuxeVerb

How to dial in "luxurious" spaces for Hip-Hop, R&B, and Modern Pop.

---

## 1. LUSH / VIBEY
*Creamy, expensive-sounding width and "expensive" atmosphere.*
- **The Mental Model:** A high-end studio recording with a massive budget (Ariana Grande / SZA vibes).
- **LuxeVerb Levers:**
    - **Mode:** **Lush**. (Specifically designed for this vibe).
    - **Decay:** 3.0s – 5.0s.
    - **Shimmer:** **Pitch at +12**, **Feedback at 20%**. This adds a subtle "glow" without being a full shimmer effect.
    - **Detune:** Increase to 40% for expensive-sounding pitch instability in the tail.
    - **Brightness:** High (70%) to add "air" and "sparkle."
- **Listen For:** A wide "halo" that makes the instrument feel like it's floating in silk.

## 2. PSYCHEDELIC
*Motion, harmonic shifts, and otherworldly scales.*
- **The Mental Model:** A liquid landscape that changes shape as you listen (Travis Scott / Mike Dean).
- **LuxeVerb Levers:**
    - **Pitch Fader:** Automate this! Move it between +7 (Fifth) and +12 (Octave) during a note.
    - **Size Knob:** Automate from 0 to 100% rapidly. LuxeVerb is glitch-free, so this will create an evolving sense of "stretching" space.
    - **Mode:** **Space**.
    - **Feedback:** 60%+. Let the harmonic tail buildup until it almost feeds back.
- **Listen For:** Harmonic "screams" and space that feels like it's breathing.

## 3. MOODY
*Darkness, weight, and melancholic depth.*
- **The Mental Model:** A lonely cathedral at night or an underwater room.
- **LuxeVerb Levers:**
    - **Mode:** **Cathedral**.
    - **Brightness:** Low (10–20%). Remove the high-end sparkle.
    - **HF Cut:** Set to **1.5kHz – 3kHz**. This muffles the tail for a darker vibe.
    - **Pre-Delay:** 0ms. Let the reverb wash immediately over the sound to "blur" it.
    - **Pitch:** -12 (Octave Down). A "Dark Shimmer" adds heavy, low-end haunting layers.
- **Listen For:** A thick, dark "ghost" behind the main sound.

## 4. JAZZY / NATURAL
*Organic space, realistic depth, and warmth.*
- **The Mental Model:** A small jazz club or a wooden recording booth.
- **LuxeVerb Levers:**
    - **Mode:** **Room** or **Hall**.
    - **Decay:** Short (0.8s – 1.5s).
    - **Brightness:** Moderate (40%). Keep it feeling like "wood" rather than "glass."
    - **Shimmer:** OFF. Keep it natural.
    - **Multi-Band:** ON (if available in internal processing) for transparency.
- **Listen For:** Realistic depth that makes you forget you're listening to a digital plugin.

---

## Vibe Check Matrix
| Vibe | Mode | Decay | Shimmer | Brightness | Automation Idea |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Lush** | Lush | Long | Subtle (+12) | High | Detune Depth |
| **Psyched**| Space | Medium | Extreme (+7) | High | Size Sweeps |
| **Moody** | Cathedral | Long | Dark (-12) | Low | HF Cut Sweeps |
| **Jazzy** | Hall | Short | Off | Mid | Pre-Delay Time |
| **Upbeat** | Plate | Short | Off | High | Mix Opacity |

```

---

## FILE: 01-Learning\Quick-Reference\01-parameter-quick-reference.md

```markdown
# LuxeVerb Quick Reference

## Parameters at a Glance

| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Algorithm | Hall/Plate/Room/Cathedral/Shimmer | Hall | Space type |
| Decay | 0.1-10 seconds | 2.0 s | Tail length |
| Pre-Delay | 0-100 ms | 20 ms | Separation |
| High Pass | 20-500 Hz | 80 Hz | Low cut |
| Low Pass | 5-20 kHz | 14 kHz | High cut |
| Diffusion | 0-100% | 70% | Scatter amount |
| Mix | 0-100% | 35% | Wet/dry balance |

---

## Decay Time by Space

| Space | Decay Time | Character |
|-------|------------|-----------|
| Small Room | 0.5-1.0s | Tight |
| Medium Room | 1.0-2.0s | Natural |
| Large Room | 2.0-3.0s | Open |
| Hall | 3.0-5.0s | Expansive |
| Cathedral | 6.0-10.0s | Epic |

---

## Filter Settings by Source

| Source | High Pass | Low Pass | Notes |
|--------|------------|----------|-------|
| Vocals | 80-100 Hz | 10-12 kHz | Natural body |
| Drums | 120-200 Hz | 12-14 kHz | Tight low end |
| Synths | 60-80 Hz | 14-16 kHz | Full range |
| Guitar | 100-150 Hz | 10-12 kHz | No mud |
| Piano | 60-80 Hz | 12-14 kHz | Full dynamics |

---

## Mix Percentage by Application

| Application | Mix Range | Notes |
|-------------|-----------|-------|
| Subtle depth | 15-25% | Background |
| Natural space | 25-40% | Realistic |
| Pronounced | 40-55% | Noticeable |
| Effect | 55-75% | Prominent |
| 100% wet | 100% | Pure reverb |

---

## Pre-Delay Guidelines

| Application | Pre-Delay | Purpose |
|-------------|-----------|---------|
| Tight drums | 0-10 ms | Immediate reverb |
| Vocals | 15-25 ms | Clarity |
| Pads | 20-40 ms | Definition |
| Space effect | 40-80 ms | Clear transients |
| Effect | Variable | Creative |

---

## Genre Settings

### Hip-Hop
| Parameter | Value |
|-----------|-------|
| Algorithm | Plate or Room |
| Decay | 1.0-1.5s |
| High Pass | 120 Hz |
| Mix | 25-35% |

### R&B
| Parameter | Value |
|-----------|-------|
| Algorithm | Hall or Plate |
| Decay | 1.5-2.5s |
| High Pass | 80 Hz |
| Mix | 35-45% |

### EDM
| Parameter | Value |
|-----------|-------|
| Algorithm | Hall or Shimmer |
| Decay | 2.0-4.0s |
| High Pass | 100 Hz |
| Mix | 40-55% |

### Ambient
| Parameter | Value |
|-----------|-------|
| Algorithm | Cathedral or Hall |
| Decay | 5.0-8.0s |
| High Pass | 60 Hz |
| Mix | 50-65% |

---

## Troubleshooting Guide

| Problem | Likely Cause | Solution |
|---------|--------------|----------|
| Muddy mix | High-pass too low | Increase high-pass |
| Harsh reverb | Low-pass too high | Decrease low-pass |
| Masking | No pre-delay | Add pre-delay |
| Too obvious | Mix too high | Lower mix |
| No space | Decay too short | Increase decay |
| Phasing | Stereo collapse | Check mono |

---

## Related Documentation

- [Reverb Fundamentals](../02-Learning/Concepts/01-reverb-fundamentals.md)
- [LuxeVerb Workflows](../03-Workflows/INDEX.md)
- [LuxeVerb Presets](../02-Data/presets/INDEX.md)

```

---

## FILE: 01-Learning\Quick-Reference\02-mode-comparison.md

```markdown
# LuxeVerb Mode Comparison

## The Six Algorithms

LuxeVerb features six distinct reverb algorithms, each with unique acoustic characteristics.

---

## Room

### Character
- Small to medium spaces
- Dense, quick early reflections
- Short to medium decay
- Natural, intimate feel

### Best For
- Drum overheads
- Acoustic guitar
- Background vocals
- Tight mixes

### Parameters
| Parameter | Range | Recommended |
|-----------|-------|-------------|
| Size | Small | 20-40% |
| Decay | Short | 0.5-1.5s |
| Pre-Delay | Short | 10-20ms |
| Brightness | Medium | 50% |

---

## Plate

### Character
- Artificial metallic reverb
- Fast early reflections
- Medium decay with metallic character
- Smooth, dense tails

### Best For
- Vocals (classic 70s sound)
- Drums (snare, tom)
- Percussion
- Snappy, punchy sounds

### Parameters
| Parameter | Range | Recommended |
|-----------|-------|-------------|
| Size | Medium | 40-60% |
| Decay | Medium | 1.5-2.5s |
| Pre-Delay | Short | 5-15ms |
| Brightness | Bright | 60-80% |

---

## Hall

### Character
- Medium to large concert halls
- Spacious early reflections
- Medium to long decay
- Warm, balanced response

### Best For
- Lead vocals
- Orchestral instruments
- Piano
- General-purpose reverb

### Parameters
| Parameter | Range | Recommended |
|-----------|-------|-------------|
| Size | Medium-Large | 50-70% |
| Decay | Medium-Long | 2.0-4.0s |
| Pre-Delay | Medium | 20-40ms |
| Brightness | Warm | 40-60% |

---

## Cathedral

### Character
- Large cathedral/church spaces
- Very spacious reflections
- Long decay with natural resonance
- Epic, dramatic character

### Best For
- Cinematic moments
- Atmospheric pads
- Choir vocals
- Epic build-ups

### Parameters
| Parameter | Range | Recommended |
|-----------|-------|-------------|
| Size | Large | 70-90% |
| Decay | Long | 4.0-8.0s |
| Pre-Delay | Long | 40-80ms |
| Brightness | Warm | 30-50% |

---

## Space

### Character
- Abstract, non-environmental spaces
- Unique reflection patterns
- Potentially infinite decay
- Otherworldly, experimental

### Best For
- Ambient textures
- Experimental music
- Sci-fi sounds
- Infinite swell effects

### Parameters
| Parameter | Range | Recommended |
|-----------|-------|-------------|
| Size | Variable | 50-100% |
| Decay | Variable | 3.0-10.0s |
| Pre-Delay | Variable | 20-60ms |
| Brightness | Variable | 40-70% |

---

## Lush

### Character
- Dense, luxurious reverb
- Complex reflection patterns
- Long, evolving decay
- Rich, full response

### Best For
- Synth pads
- Atmospheric backgrounds
- Dreamy textures
- Ambient music

### Parameters
| Parameter | Range | Recommended |
|-----------|-------|-------------|
| Size | Medium-Large | 60-80% |
| Decay | Long | 3.0-6.0s |
| Pre-Delay | Medium | 25-50ms |
| Brightness | Rich | 50-70% |

---

## Mode Selection Guide

| Sound Source | Recommended Mode | Alternative |
|-------------|-----------------|-------------|
| Lead Vocal | Hall | Plate |
| Backing Vocal | Room | Hall |
| Snare | Plate | Room |
| Kick | Room | Hall |
| Toms | Hall | Cathedral |
| Acoustic Guitar | Room | Hall |
| Electric Guitar | Plate | Hall |
| Synth Pad | Lush | Space |
| Piano | Hall | Lush |
| Drums (Full) | Room | Hall |
| Vocals (Background) | Room | Lush |
| Choir | Cathedral | Hall |
| Cinematic Effect | Cathedral | Space |
| Ambient Texture | Space | Lush |

---

## Quick Selection Chart

### By Size
| Size | Mode |
|------|------|
| Small | Room |
| Medium | Plate, Room |
| Large | Hall, Lush |
| Very Large | Cathedral, Space |

### By Character
| Character | Mode |
|-----------|------|
| Natural | Room, Hall |
| Metallic | Plate |
| Epic | Cathedral, Space |
| Dense | Lush |
| Abstract | Space |

---

## Related Documentation

- [LuxeVerb Parameter Quick Reference](../Quick-Reference/parameter-quick-reference.md)
- [LuxeVerb Reverb Fundamentals](../Concepts/01-reverb-fundamentals.md)
- [Creating Shimmer Reverbs Workflow](../../03-Workflows/by-goal/creating-shimmer-reverbs.md)

```

---

## FILE: 01-Learning\Quick-Reference\luxeverb-mode-decoded.md

```markdown
# LuxeVerb Mode Decoded

Choosing the right algorithm for your mix. [SRC: IL-MAN]

## 1. ROOM
- **Character:** Dense, quick, and realistic. Focuses on "closeness."
- **Best For:** Percussion, drums (snares/claps), and dry vocals that need a sense of physical space without a long tail.
- **Mix Tip:** Keep Decay below 1.0s for the most natural feel.

## 2. PLATE
- **Character:** Bright, metallic, and smooth. No distinct early reflections.
- **Best For:** Lead vocals, electric guitars, and "Classic 80s" synth sounds.
- **Mix Tip:** Use high Brightness to make the reverb "shimmer" on top of the vocal.

## 3. HALL
- **Character:** Balanced and spacious. Simulates a medium concert hall.
- **Best For:** Pianos, acoustic guitars, and melodic buses.
- **Mix Tip:** This is the most versatile "all-rounder." Start here if you are unsure.

## 4. CATHEDRAL
- **Character:** Enveloping, resonant, and massive.
- **Best For:** Orchestral pads, choirs, and "Dark/Moody" R&B textures.
- **Mix Tip:** Use the LF Cut to ensure the massive low-end of this mode doesn't muddy your track.

## 5. SPACE
- **Character:** Abstract, clean, and potentially "endless."
- **Best For:** Cinematic sound design, "Trippy" soundscapes, and experimental textures.
- **Mix Tip:** Turn Decay to max for a purely frozen, ethereal drone.

## 6. LUSH
- **Character:** High-quality, heavily modulated, and expensive-sounding.
- **Best For:** Professional Pop vocals, ambient pads, and "expensive" R&B halos.
- **Mix Tip:** Combine this with the **Pitch** fader set to +12 for the ultimate "Shimmer" reverb.

---

## Quick Selection Table
| Instrument | Recommended Mode | Secondary Choice |
| :--- | :--- | :--- |
| **Vocals (Lead)** | Plate | Lush |
| **Vocals (Adlib)**| Lush | Space |
| **Drums (Snare)** | Room | Plate |
| **Pads/Synths** | Cathedral | Space |
| **Piano** | Hall | Lush |
| **Bass (Sub)** | *None* | Room (Very Low Mix) |

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: LuxeVerb

High-end spatial control reference. [SRC: IL-MAN]

---

## 🏛️ Reverb Modes (The Algorithms)
- **Room:** Intimate, dense reflections.
- **Plate:** Metallic, fast-attack, classic vocal sound.
- **Hall:** Balanced, medium-to-large acoustic space.
- **Cathedral:** Massive, resonant, slightly dark.
- **Space:** Abstract, clean, potentially infinite.
- **Lush:** Highly modulated, "luxurious" ensemble tail.

## ⏱️ Time & Size
- **Decay:** Length of the reverb tail (0.1s to Infinite).
- **Size:** Perceived dimensions of the virtual room. (Artifact-free automation).
- **Pre-Delay:** Initial gap before reverb starts. Crucial for keeping transients clear.

## ✨ Shimmer & Pitch (Feedback Loop)
- **Pitch:** Sets the semitone shift of the feedback tail (e.g., +12 for octave up).
- **Feedback:** Depth of the pitch-shifted signal. Higher = more intense "shimmer."
- **Detune:** Adds subtle pitch instability for more organic, "expensive" sounding tails.

## 🎚️ Tonal Shaping
- **Brightness:** Controls high-frequency reflectivity of "surfaces."
- **HF Cut / LF Cut:** Built-in filters for the wet signal.
- **Diffusion:** "Blurriness" of the early reflections. Low = discrete echoes; High = smooth cloud.

## 📐 Mix & Output
- **Dry / Wet:** Balance. Usually used at 100% Wet on a Send track.
- **Freeze:** Locks the current reverb buffer for an infinite drone.

---

## 🎯 Quick Vibe Starting Points
- **Standard Vocal:** Plate Mode, 1.5s Decay, 30ms Pre-Delay, Mix at 20%.
- **Angelic Shimmer:** Lush Mode, 4s Decay, Pitch +12, Feedback 40%.
- **Deep Dark Room:** Cathedral Mode, 6s Decay, Brightness 20%, HF Cut at 2kHz.
- **Cinematic Rise:** Automate Size from 0% to 100% over 4 bars.

```

---

## FILE: 02-Data\parameters\luxeverb-params.json

```json
{
  "plugin_name": "LuxeVerb",
  "category": "Reverb / Spatial",
  "features": ["6 Algorithms", "Shimmer", "Artifact-free automation"],
  "parameters": [
    {
      "name": "Mode",
      "type": "selector",
      "values": ["Room", "Plate", "Hall", "Cathedral", "Space", "Lush"],
      "vibe_impact": "Atmospheric character, acoustic reality"
    },
    {
      "name": "Decay",
      "type": "knob",
      "description": "Length of reverb tail.",
      "mix_impact": "Depth, space usage"
    },
    {
      "name": "Size",
      "type": "knob",
      "description": "Perceived room dimensions.",
      "vibe_impact": "Scale, proximity"
    },
    {
      "name": "Pitch",
      "type": "fader",
      "description": "Feedback loop pitch shift (Semitones).",
      "vibe_impact": "Harmonic shimmer, angelic vs dark tones"
    },
    {
      "name": "Feedback",
      "type": "knob",
      "description": "Depth of pitch-shifted signal.",
      "vibe_impact": "Glow intensity"
    },
    {
      "name": "Brightness",
      "type": "knob",
      "description": "Surface reflectivity control.",
      "mix_impact": "Presence, air"
    },
    {
      "name": "HF Cut / LF Cut",
      "type": "knobs",
      "description": "Internal filtering.",
      "mix_impact": "Clarity, mud prevention"
    }
  ]
}

```

---

## FILE: 02-Data\presets\INDEX.md

```markdown
# LuxeVerb Complete Presets INDEX

## Genre Presets (10 files)
| File | Name | Genre | Mood |
|------|------|-------|------|
| `genre/01-classic-hall.json` | Classic Hall | universal | natural |
| `genre/02-vocal-plate.json` | Vocal Plate | R&B | smooth |
| `genre/03-shimmer-verb.json` | Shimmer Verb | EDM | electric |
| `genre/04-cinematic-large.json` | Cinematic Large | cinematic | epic |
| `genre/05-trap-atmosphere.json` | Trap Atmosphere | hip-hop/rap | dusty |
| `genre/06-ambient-glow.json` | Ambient Glow | universal | moody |

## Signature Presets (6 files)
| File | Artist | Style |
|------|--------|-------|
| `signature/the-weeknd.json` | The Weeknd | Dreamy Pop |
| `signature/daft-punk.json` | Daft Punk | French House |
| `signature/deadmau5-space.json` | deadmau5 | Melodic Techno |
| `signature/calvin-harris-energy.json` | Calvin Harris | Big Room EDM |
| `signature/avicii-sunrise.json` | Avicii | Progressive House |
| `signature/hans-zimmer-epic.json` | Hans Zimmer | Cinematic |

## Quick Reference
| Goal | Preset | File |
|------|--------|------|
| Natural space | Classic Hall | `genre/01-classic-hall.json` |
| Vocal depth | Vocal Plate | `genre/02-vocal-plate.json` |
| Ethereal shimmer | Shimmer Verb | `genre/03-shimmer-verb.json` |
| Epic atmosphere | Cinematic Large | `genre/04-cinematic-large.json` |
| Trap mood | Trap Atmosphere | `genre/05-trap-atmosphere.json` |
| Ambient texture | Ambient Glow | `genre/06-ambient-glow.json` |

## Workflow Reference
- [LuxeVerb By-Instrument Workflows](../03-Workflows/by-instrument/INDEX.md)
- [LuxeVerb By-Goal Workflows](../03-Workflows/by-goal/INDEX.md)
- [LuxeVerb Safety Rules](../02-Data/rules/luxeverb-safety-rules.md)

```

---

## FILE: 02-Data\presets\genre\01-classic-hall.json

```json
{
  "metadata": {
    "plugin": "LuxeVerb",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Classic Hall",
    "category": "genre",
    "genre": "R&B",
    "mood": "smooth"
  },
  "settings": {
    "algorithm": "hall",
    "decay": 2.5,
    "preDelay": 20,
    "highPass": 80,
    "lowPass": 8000,
    "diffusion": 50,
    "density": 50,
    "modulation": 30,
    "mix": 30,
    "freeze": false
  },
  "chain": {
    "pre": ["Source EQ if needed"]
  },
  "workflow": "Use on vocals and instruments. Classic hall sound for smooth productions.",
  "genreTags": ["R&B", "smooth", "classic", "hall"],
  "a/bTesting": {
    "testA": "Decay 2.5s for standard",
    "testB": "Decay 3s for more space"
  },
  "troubleshooting": {
    "tooMuddy": "Increase high-pass to 120Hz",
    "tooDark": "Increase low-pass to 10000Hz"
  }
}

```

---

## FILE: 02-Data\presets\genre\02-vocal-plate.json

```json
{
  "metadata": {
    "plugin": "LuxeVerb",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Vocal Plate",
    "category": "genre",
    "genre": "R&B",
    "mood": "smooth"
  },
  "settings": {
    "algorithm": "plate",
    "decay": 1.8,
    "preDelay": 5,
    "highPass": 100,
    "lowPass": 7000,
    "diffusion": 40,
    "density": 60,
    "modulation": 15,
    "mix": 25,
    "freeze": false
  },
  "chain": {
    "pre": ["De-esser if needed"]
  },
  "workflow": "Optimized for vocals. Tight, smooth plate for vocal depth.",
  "genreTags": ["R&B", "vocal", "smooth", "plate"],
  "a/bTesting": {
    "testA": "Decay 1.8s for tight",
    "testB": "Decay 2.2s for more warmth"
  },
  "troubleshooting": {
    "boxing": "Increase pre-delay to 15ms",
    "tooDark": "Increase low-pass to 8000Hz"
  }
}

```

---

## FILE: 02-Data\presets\genre\03-shimmer-verb.json

```json
{
  "metadata": {
    "plugin": "LuxeVerb",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Shimmer Verb",
    "category": "genre",
    "genre": "EDM",
    "mood": "electric"
  },
  "settings": {
    "algorithm": "shimmer",
    "decay": 4,
    "preDelay": 30,
    "highPass": 200,
    "lowPass": 12000,
    "diffusion": 70,
    "density": 50,
    "modulation": 40,
    "mix": 35,
    "freeze": false
  },
  "chain": {
    "post": ["High-shelf boost if needed"]
  },
  "workflow": "Use on leads and pads. Creates ethereal, shiny atmosphere.",
  "genreTags": ["EDM", "shimmer", "ethereal", "atmospheric"],
  "a/bTesting": {
    "testA": "Default shimmer settings",
    "testB": "Longer decay for more shimmer"
  },
  "troubleshooting": {
    "tooThin": "Increase diffusion to 80%",
    "notShimmering": "Increase modulation to 50%"
  }
}

```

---

## FILE: 02-Data\presets\genre\04-cinematic-large.json

```json
{
  "metadata": {
    "plugin": "LuxeVerb",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Cinematic Large",
    "category": "genre",
    "genre": "ambient",
    "mood": "moody"
  },
  "settings": {
    "algorithm": "hall",
    "decay": 5,
    "preDelay": 50,
    "highPass": 50,
    "lowPass": 10000,
    "diffusion": 60,
    "density": 40,
    "modulation": 50,
    "mix": 40,
    "freeze": false
  },
  "chain": {
    "pre": ["Dynamic processing"]
  },
  "workflow": "For cinematic moments and film scores. Large, spacious atmosphere.",
  "genreTags": ["ambient", "cinematic", "large", "atmospheric"],
  "a/bTesting": {
    "testA": "Decay 5s for epic",
    "testB": "Decay 6s for maximum"
  },
  "troubleshooting": {
    "tooWashy": "Increase high-pass to 80Hz",
    "unstable": "Reduce modulation to 30%"
  }
}

```

---

## FILE: 02-Data\presets\genre\05-trap-atmosphere.json

```json
{
  "name": "Modern Trap Atmosphere",
  "genre": "hip-hop/rap",
  "mood": "dusty",
  "description": "Atmospheric reverb for moody trap productions",
  "parameters": {
    "mode": "Lush",
    "size": 65,
    "decay": 4.5,
    "predelay": 25,
    "brightness": 45,
    "diffusion": 70,
    "highpass": 100,
    "lowpass": 12000,
    "mix": 45
  },
  "characteristics": [
    "M dusty atmosphere",
    "Smooth tails",
    "Trap-ready character"
  ],
  "workflow": {
    "useCase": "Moody trap and atmospheric hip-hop",
    "steps": [
      "Set mode to Lush",
      "Size at 65% for atmosphere",
      "Decay 4.5s for smooth tails",
      "High-pass at 100Hz",
      "Mix at 45%"
    ],
    "tips": [
      "Perfect for 808 tails",
      "Adds mood to vocals",
      "Great for atmospheric pads"
    ]
  },
  "abTest": {
    "listenFor": "Smooth, dusty atmosphere without muddiness",
    "duration": "Full verse section"
  }
}
```

---

## FILE: 02-Data\presets\genre\06-ambient-glow.json

```json
{
  "name": "Ambient Glow",
  "genre": "universal",
  "mood": "moody",
  "description": "Ethereal, glowing reverb for ambient and atmospheric music",
  "parameters": {
    "mode": "Lush",
    "size": 75,
    "decay": 6.5,
    "predelay": 35,
    "brightness": 55,
    "diffusion": 85,
    "highpass": 60,
    "lowpass": 14000,
    "mix": 55
  },
  "characteristics": [
    "Ethereal glow",
    "Infinite feel",
    "Dreamy atmosphere"
  ],
  "workflow": {
    "useCase": "Ambient music and soundscapes",
    "steps": [
      "Set mode to Lush",
      "Size at 75% for space",
      "Decay 6.5s for long tails",
      "Diffusion at 85% for smoothness",
      "Mix at 55%"
    ],
    "tips": [
      "Perfect for evolving pads",
      "Creates dreamy atmosphere",
      "Great for film scores"
    ]
  },
  "abTest": {
    "listenFor": "Ethereal, glowing atmosphere with smooth evolution",
    "duration": "Full ambient passage"
  }
}
```

---

## FILE: 02-Data\presets\signature\avicii-sunrise.json

```json
{
  "name": "Avicii Sunrise",
  "producer": "Avicii",
  "description": "Warm, uplifting reverb for progressive house productions",
  "reference": "Wake Me Up, Levels",
  "parameters": {
    "mode": "Hall",
    "size": 72,
    "decay": 3.8,
    "predelay": 22,
    "brightness": 52,
    "diffusion": 68,
    "highpass": 75,
    "lowpass": 13500,
    "mix": 38
  },
  "characteristics": [
    "Warm, uplifting feel",
    "Progressive structure",
    "Vocal-friendly"
  ],
  "workflow": {
    "useCase": "Progressive house and melodic EDM",
    "signatureElements": [
      "Warm character",
      "Uplifting feel",
      "Perfect for vocals"
    ],
    "steps": [
      "Use for emotional sections",
      "Warm decay for feeling",
      "Great for vocal cuts",
      "Perfect for breakdowns"
    ],
    "tips": [
      "Warm, emotional sound",
      "Great for vocals",
      "Perfect breakdowns"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\calvin-harris-energy.json

```json
{
  "name": "Calvin Harris Energy",
  "producer": "Calvin Harris",
  "description": "Powerful, energetic reverb for big room productions",
  "reference": "Summer, This Is What You Came For",
  "parameters": {
    "mode": "Hall",
    "size": 80,
    "decay": 4.0,
    "predelay": 15,
    "brightness": 60,
    "diffusion": 60,
    "highpass": 90,
    "lowpass": 14000,
    "mix": 40
  },
  "characteristics": [
    "Big, powerful sound",
    "Festival-ready",
    "Energy enhancement"
  ],
  "workflow": {
    "useCase": "Big room EDM and festival tracks",
    "signatureElements": [
      "Massive space",
      "Energy for drops",
      "Club and festival ready"
    ],
    "steps": [
      "Use for builds and drops",
      "Large size for impact",
      "Perfect for vocal vocals",
      "Enhances energy"
    ],
    "tips": [
      "Massive festival sound",
      "Great for vocals",
      "Energy for drops"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\daft-punk.json

```json
{
  "metadata": {
    "plugin": "LuxeVerb",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Daft Punk Space",
    "category": "signature",
    "inspiredBy": "Daft Punk robot funk"
  },
  "settings": {
    "algorithm": "large",
    "decay": 4,
    "preDelay": 40,
    "highPass": 80,
    "lowPass": 9000,
    "diffusion": 65,
    "density": 55,
    "modulation": 45,
    "mix": 35,
    "freeze": false
  },
  "chain": {
    "post": ["Robot voice effect if needed"]
  },
  "workflow": "Large, spacey atmosphere. Perfect for robot vocals and space funk.",
  "characteristics": ["spacey", "robotic", "large", "funky"],
  "genreTags": ["EDM", "electro", "funk", "robot"],
  "a/bTesting": {
    "testA": "Standard space settings",
    "testB": "Longer decay for more space"
  },
  "troubleshooting": {
    "notSpaceyEnough": "Increase modulation to 55%",
    "tooWashy": "Increase high-pass to 120Hz"
  }
}

```

---

## FILE: 02-Data\presets\signature\deadmau5-space.json

```json
{
  "name": "Deadmau5 Space",
  "producer": "deadmau5",
  "description": "Clean, spacious reverb for melodic electronic productions",
  "reference": "Strobe, Ghosts N Stuff",
  "parameters": {
    "mode": "Hall",
    "size": 70,
    "decay": 3.5,
    "predelay": 20,
    "brightness": 50,
    "diffusion": 65,
    "highpass": 80,
    "lowpass": 13000,
    "mix": 35
  },
  "characteristics": [
    "Clean character",
    "Spacious feel",
    "Melodic enhancement"
  ],
  "workflow": {
    "useCase": "Melodic techno and progressive",
    "signatureElements": [
      "Clean, precise reverb",
      "Space for melody",
      "Classic electronic feel"
    ],
    "steps": [
      "Use on melodic elements",
      "Clean decay for precision",
      "Perfect for synth leads",
      "Great for progression"
    ],
    "tips": [
      "Clean, precise character",
      "Space for melody",
      "Classic electronic sound"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\the-weeknd.json

```json
{
  "metadata": {
    "plugin": "LuxeVerb",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "The Weeknd Atmosphere",
    "category": "signature",
    "inspiredBy": "The Weeknd 80s retro style"
  },
  "settings": {
    "algorithm": "hall",
    "decay": 3.5,
    "preDelay": 25,
    "highPass": 100,
    "lowPass": 7500,
    "diffusion": 55,
    "density": 45,
    "modulation": 35,
    "mix": 30,
    "freeze": false
  },
  "chain": {
    "post": ["Tape saturation - 3%"]
  },
  "workflow": "Signature 80s retro atmosphere. Warm, spacious, nostalgic.",
  "characteristics": ["retro", "warm", "nostalgic", "80s"],
  "genreTags": ["R&B", "synthwave", "retro", "moody"],
  "a/bTesting": {
    "testA": "Standard settings",
    "testB": "Add tape saturation for more warmth"
  },
  "troubleshooting": {
    "notRetroEnough": "Add tape saturation after",
    "tooModern": "Reduce low-pass to 6000Hz"
  }
}

```

---

## FILE: 02-Data\rules\luxeverb-safety-rules.md

```markdown
# LuxeVerb Safety Rules

## Volume Management

### Input Level
- NEVER exceed -6 dB input gain
- Push louder signals through high-quality EQ first
- Check input meter before heavy reverb

### Output Level
- Target mix percentage: 20-50%
- Never exceed -3 dB output
- Reduce wet signal if clipping

### Return Track
- Use send/return for shared reverb
- Set return fader at unity (0 dB)
- Reduce individual send levels

## Tail Management

### Decay Time Limits
| Application | Maximum Safe | Recommended |
|-------------|--------------|-------------|
| Drums | 1.5 seconds | 0.5-1.0s |
| Vocals | 2.5 seconds | 1.0-1.8s |
| Synths | 4.0 seconds | 1.5-2.5s |
| Cinematic | 8.0 seconds | 4.0-6.0s |

### Tail Overload Prevention
- Long decays (>4s) create muddy mixes
- Use high-pass filter on reverb return
- Cut reverb below 100-200 Hz
- Use pre-delay for clarity

### Multiple Reverbs
- Maximum 2-3 simultaneous reverbs
- Different time scales for each
- Different frequency character

## Frequency Management

### High-Frequency Safety
- High damping (>50%) prevents harshness
- Use high-pass filter on input
- Reduce shimmer mix if fatiguing

### Low-Frequency Safety
- Always high-pass reverb return
- Typical: 80-200 Hz for most
- Lower (60-80 Hz) for vocals
- Higher (150-200 Hz) for drums

### Masking Prevention
- Reverb should not mask dry signal
- Use pre-delay to separate
- Reduce reverb on transient elements

## CPU Safety

### Effect Quality
- Start with medium quality
- Increase only if needed
- High quality uses 3-4x CPU

### Multiple Instances
- Limit to 2-4 instances per project
- Use sends for shared reverb
- Freeze reverb tracks if struggling

## Genre-Specific Limits

### Hip-Hop/Rap
| Setting | Limit | Reason |
|---------|-------|--------|
| Decay Time | 1.2s | Prevents masking |
| Mix | 30% | Keeps vocals forward |
| High Pass | 100 Hz | Tight low end |
| Quality | Medium | CPU efficiency |

### R&B
| Setting | Limit | Reason |
|---------|-------|--------|
| Decay Time | 2.0s | Smooth tails |
| Mix | 40% | Ambient depth |
| High Pass | 80 Hz | Warmth |
| Quality | High | Smooth character |

### EDM
| Setting | Limit | Reason |
|---------|-------|--------|
| Decay Time | 2.5s | Build energy |
| Mix | 50% | Big sound |
| High Pass | 120 Hz | Clean bass |
| Quality | High | Maximum clarity |

## Common Mistakes to Avoid

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| No high-pass | Muddy low end | Always HPF reverb |
| 100% wet mix | Loss of dry signal | Mix 30-50% |
| Long decay on drums | Bleed/masking | Keep under 1.5s |
| Multiple full mixes | Phase issues | Use different times |
| Input too hot | Distorted reverb | -6dB input max |

## Quick Reference Limits

| Parameter | Maximum Safe | Warning Zone |
|-----------|--------------|--------------|
| Input Gain | -6 dB | -6 to 0 dB |
| Mix | 50% (70% max) | 50-70% |
| Decay (Drums) | 1.5 seconds | 1.5-2.5s |
| Decay (Vocals) | 2.5 seconds | 2.5-4.0s |
| Decay (Synths) | 4.0 seconds | 4.0-6.0s |
| High Pass | 80-200 Hz | Depends on source |
| Quality | High (4 instances max) | Very High |

## Troubleshooting

### Reverb Clipping
1. Reduce input gain
2. Enable high-pass filter
3. Reduce mix percentage
4. Lower decay time

### Muddy Mix
1. Increase high-pass frequency
2. Add pre-delay
3. Reduce decay time
4. Sidechain reverb to dry

### Harsh Highs
1. Increase high damping
2. Enable high-pass filter
3. Reduce shimmer amount
4. Lower output high-frequency

### Phase Issues
1. Reduce reverb mix
2. Increase high-pass filter
3. Use shorter decay
4. Sum to mono and check

## FL Studio Integration

### Send Setup
1. Create Fruity Send
2. Insert LuxeVerb on send
3. Route instruments to send
4. Control wetness per track

### Automation
1. Pre-delay for builds
2. Decay time changes
3. Mix for breakdowns
4. High-pass automation

### Sidechain
1. Insert Fruity Limiter
2. Key to kick
3. Threshold -20dB
4. Attack/release for feel

```

---

## FILE: 03-Workflows\by-goal\01-creating-shimmer-reverbs.md

```markdown
# LuxeVerb Creating Shimmer Reverbs

## What Is Shimmer?

Shimmer reverb adds pitch-shifted harmonics to the reverb tail, creating an ethereal, "angelic" quality. Traditional shimmers use +1 octave pitch shifting, but LuxeVerb allows more flexibility.

---

## Signal Flow

`\`\`
Input → Early Reflections → Main Reverb → Pitch Shift → Feedback → Output
         ↓                              ↓
      Standard                     Harmonic
      reflections                   tail
`\`\`

The pitch shifter is in the feedback loop, causing pitch-shifted signal to accumulate and re-pitch-shift, creating complex harmonic series.

---

## Step-by-Step Setup

### 1. Base Reverb
| Parameter | Value | Reason |
|-----------|-------|--------|
| Mode | Lush or Cathedral | Dense reverb for shimmer |
| Size | 70% | Large space for tail |
| Decay | 4-6s | Long tail for shimmer accumulation |
| Pre-Delay | 30ms | Maintain attack clarity |

### 2. Pitch Shift
| Parameter | Value | Reason |
|-----------|-------|--------|
| Pitch | +12 semitones | Classic shimmer (1 octave) |
| Feedback | 40-60% | Amount of shimmer accumulation |
| Mix | 50% | Balance dry/wet |

### 3. Filtering
| Parameter | Value | Reason |
|-----------|-------|--------|
| Low-Pass | 10-12kHz | Tame harsh high frequencies |
| High-Pass | 80Hz | Remove low-end mud |
| Brightness | 50% | Control overall clarity |

### 4. Fine Tuning
1. Start with Feedback at 50%
2. Adjust Pitch to taste (+12 for classic, try +/-7 or +/-5 for variations)
3. Reduce Mix if too washy
4. Add Low-Pass if harsh

---

## Variation: Dark Shimmer

For a haunting, lower shimmer:

| Parameter | Value | Reason |
|-----------|-------|--------|
| Pitch | -12 semitones | Descending shimmer |
| Feedback | 35% | Less accumulation |
| Mode | Cathedral | Darker base |

---

## Variation: Metallic Shimmer

For sci-fi, synthetic shimmer:

| Parameter | Value | Reason |
|-----------|-------|--------|
| Pitch | +7 semitones (perfect 5th) | Harmonic interval |
| Feedback | 65% | Maximum accumulation |
| Mode | Space | Abstract character |

---

## Automation Ideas

### Build-Up Effect
1. Start with shimmer OFF or Mix at 0%
2. Automate Mix from 0% to 50% over 8 bars
3. Release for impact

### Pitch Evolution
1. Start at +12 semitones
2. Automate Pitch down to 0 over 4 bars
3. Creates descending angel effect

### Filter Sweep
1. Start Low-Pass at 8kHz
2. Automate to 14kHz over 4 bars
3. Opens up the shimmer gradually

---

## Common Issues

### Harsh/Shrill
- Reduce Pitch feedback
- Lower Mix percentage
- Add more Low-Pass filtering

### No Shimmer Effect
- Check that Feedback is enabled
- Verify Pitch is not at 0
- Increase Feedback amount

### Too Washy
- Reduce Decay time
- Lower Mix percentage
- Add more Pre-Delay

### Artifacts/Glitches
- Reduce Feedback below 70%
- Increase Low-Pass frequency
- Reduce input gain

---

## Tips for Success

### Start Subtle
- Begin with lower Feedback (30%)
- Increase gradually until effect is audible
- More is not always better

### Match the Key
| Key | Interval | Pitch Shift |
|-----|----------|-------------|
| Major | +12 (octave) | Classic shimmer |
| Minor | -12 (down octave) | Dark shimmer |
| Both | +7 (5th) | Harmonic interest |
| Suspense | -7 (down 5th) | Tension |

### Use on Appropriate Sources
- Synth pads (best)
- Vocals (good)
- Guitar (good)
- Drums (use sparingly)
- Full mix (use very sparingly)

---

## Related Documentation

- [LuxeVerb Mode Comparison](../Quick-Reference/02-mode-comparison.md)
- [LuxeVerb Parameter Quick Reference](../Quick-Reference/parameter-quick-reference.md)
- [Cinematic Riser Workflow](02-cinematic-riser-reverb.md)

```

---

## FILE: 03-Workflows\by-goal\INDEX.md

```markdown
# LuxeVerb By-Goal Workflows Index

## Available Goal Workflows

| Goal | Description | Difficulty |
|------|-------------|------------|
| [Create Depth](by-goal-workflows.md#goal-create-depth) | Subtle mix depth | Beginner |
| [Create Space](by-goal-workflows.md#goal-create-space) | Epic atmospheric spaces | Intermediate |
| [Add Warmth](by-goal-workflows.md#goal-add-warmth) | Analog character | Beginner |
| [Create Atmosphere](by-goal-workflows.md#goal-create-atmosphere) | Ethereal, dreamy textures | Intermediate |
| [Create Transitions](by-goal-workflows.md#goal-create-transitions) | Build-ups and releases | Intermediate |
| [Create Vocal Tail](by-goal-workflows.md#goal-create-vocal-tail) | Natural vocal depth | Beginner |

## Quick Start by Need

| Need | Recommended Goal | Key Settings |
|------|-----------------|---------------|
| Subtle depth | Create Depth | Hall, 35% mix |
| Epic atmosphere | Create Space | Cathedral, 50% mix |
| Warm character | Add Warmth | Plate, 40% mix |
| Dreamy texture | Create Atmosphere | Shimmer, 55% mix |
| Build energy | Create Transitions | Hall, 60% mix |
| Vocal depth | Create Vocal Tail | Plate, 45% mix |

## Goal to Element Mapping

| Element | Best Goal Workflow |
|---------|-------------------|
| Lead vocals | Create Vocal Tail or Create Depth |
| Synths/pads | Create Atmosphere or Create Space |
| Drums | Add Warmth |
| Guitars | Add Warmth or Create Depth |
| Full mix | Create Depth |
| Transitions | Create Transitions |
| Breakdowns | Create Space or Create Atmosphere |

## Related Documentation

- [LuxeVerb By-Instrument Workflows](02-Workflows/by-instrument/INDEX.md)
- [LuxeVerb Genre Presets](../02-Data/presets/genre/INDEX.md)
- [LuxeVerb Signature Presets](../02-Data/presets/signature/INDEX.md)
- [LuxeVerb Safety Rules](../02-Data/rules/luxeverb-safety-rules.md)

```

---

## FILE: 03-Workflows\by-goal\by-goal-workflows.md

```markdown
# LuxeVerb By-Goal Workflows

## Goal: Create Depth

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Algorithm | Hall | Natural space |
| Decay | 2.5 seconds | Medium depth |
| Pre-Delay | 20 ms | Definition |
| High Pass | 80 Hz | Clean lows |
| Low Pass | 14 kHz | Smooth highs |
| Diffusion | 70% | Natural buildup |
| Mix | 35% | Subtle depth |

### Steps
1. Select Hall algorithm
2. Set medium decay (2-3s)
3. Add pre-delay for clarity
4. High-pass at 80 Hz
5. Low-pass at 14 kHz
6. Mix at 30-40%

### Tips
- Use for subtle depth
- Check mono compatibility
- Automate mix for sections
- Layer with dry signal

---

## Goal: Create Space

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Algorithm | Cathedral | Maximum space |
| Decay | 8 seconds | Long tails |
| Pre-Delay | 40 ms | Definition |
| High Pass | 60 Hz | Extended lows |
| Low Pass | 12 kHz | Controlled highs |
| Diffusion | 95% | Maximum smoothness |
| Mix | 50% | Pronounced space |

### Steps
1. Select Cathedral algorithm
2. Extend decay (6-10s)
3. Increase pre-delay
4. Wide high-pass (60 Hz)
5. Controlled low-pass
6. Mix at 45-55%

### Tips
- Creates epic atmosphere
- Use for breakdowns
- Check for build-up
- Add sidechain if needed

---

## Goal: Add Warmth

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Algorithm | Plate | Warm character |
| Decay | 1.5 seconds | Tight tails |
| Pre-Delay | 5 ms | Immediate body |
| High Pass | 100 Hz | Warm lows |
| Low Pass | 12 kHz | Smooth highs |
| Diffusion | 85% | Dense warmth |
| Mix | 40% | Warmth blend |

### Steps
1. Select Plate algorithm
2. Set short decay (1-2s)
3. Minimal pre-delay
4. High-pass at 100 Hz
5. High diffusion for warmth
6. Mix at 35-45%

### Tips
- Great for vocals and drums
- Adds analog warmth
- Use on guitar and keys
- Layer with hall for depth

---

## Goal: Create Atmosphere

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Algorithm | Shimmer | Ethereal quality |
| Decay | 4 seconds | Evolving tails |
| Pre-Delay | 30 ms | Definition |
| High Pass | 200 Hz | Focus on highs |
| Low Pass | 16 kHz | Full shimmer |
| Diffusion | 90% | Smooth evolution |
| Mix | 55% | Strong atmosphere |

### Steps
1. Select Shimmer algorithm
2. Medium-long decay (3-5s)
3. Moderate pre-delay
4. High-pass at 200 Hz
5. Full low-pass for shimmer
6. Mix at 50-60%

### Tips
- Creates dreamy atmosphere
- Great for synths and pads
- Automate for build-ups
- Layer with regular reverb

---

## Goal: Create Transitions

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Algorithm | Hall or Plate | Versatile |
| Decay | 4-6 seconds | Build tails |
| Pre-Delay | 10 ms | Immediate response |
| High Pass | 80 Hz | Clean lows |
| Low Pass | 10 kHz | Controlled highs |
| Diffusion | 80% | Smooth buildup |
| Mix | 60% | Strong effect |

### Steps
1. Select Hall or Plate
2. Extended decay for builds
3. Short pre-delay
4. Standard filtering
5. Moderate diffusion
6. Mix at 55-65%

### Tips
- Automate mix for builds
- Use pre-delay for separation
- Layer with white noise
- Release to impact

---

## Goal: Create Vocal Tail

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Algorithm | Plate | Vocal character |
| Decay | 1.8 seconds | Natural tail |
| Pre-Delay | 15 ms | Clarity |
| High Pass | 80 Hz | No mud |
| Low Pass | 10 kHz | Smooth top |
| Diffusion | 75% | Natural density |
| Mix | 45% | Present but natural |

### Steps
1. Select Plate algorithm
2. Natural decay (1.5-2s)
3. Moderate pre-delay
4. Clean high-pass (80 Hz)
5. Controlled low-pass
6. Mix at 40-50%

### Tips
- Should enhance, not overwhelm
- Compress after reverb
- De-esser before reverb
- A/B with dry frequently

```

---

## FILE: 03-Workflows\by-goal\cinematic-riser-reverb.md

```markdown
# Workflow: Cinematic Riser Reverb (Transition Mastery)

*Goal: Using LuxeVerb's artifact-free automation to create a massive "space expansion" effect for transitions, risers, and build-ups.*

## Vibe Mapping
- **Upbeat:** ⭐⭐⭐⭐⭐ (Primary)
- **Psychedelic:** ⭐⭐⭐⭐⭐ (Primary)
- **Moody:** ⭐⭐⭐

## 🎛️ Routing Context
- **Preferred:** Insert chain on a transition FX or melodic bus.
- **Mix Status:** Starts low, ends high.

## 🚶 Step-by-Step Setup
1. **The Starting Point:**
   - Set **Mode** to **Space** or **Cathedral**.
   - **Size:** 0%.
   - **Decay:** 1.0s.
   - **Mix:** 20%.
2. **The Automation Plan (The Build):**
   - Create an automation clip for **Size**, **Decay**, and **Mix**.
   - Over 4 or 8 bars, automate **Size** from **0% to 100%**.
   - Automate **Decay** from **1.0s to 10.0s (or Infinite)**.
   - Automate **Mix** from **20% to 100%**.
3. **The Result:**
   - Because LuxeVerb uses high-quality interpolation, the "room" will feel like it is physically growing larger without the "clicks" or "pitch wobbles" found in older reverb plugins.
4. **The "Climax" Polish:**
   - Turn on the **Shimmer** (+12) and automate the **Feedback** to reach 50% at the very end of the riser.
5. **The "Silence" Drop:**
   - At the moment of the "drop," cut all automation back to zero or bypass the plugin. The sudden silence after the massive reverb expansion creates a huge impact.

## 🔄 Variations
- **The "Sucking" Reverb:** Reverse the automation. Start with a massive room and shrink it down to a "point" just before the beat hits.
- **The "Infinite Drone":** Press the **Freeze** button at the peak of the riser to hold the sound forever.

## ⚠️ Pitfalls & Fixes
- **Problem:** The build is too quiet.
- **Fix:** Use a **Saturator** or **Fruity Soft Clipper** *after* LuxeVerb to boost the perceived loudness of the growing reverb tail.
- **Problem:** CPU issues during the sweep.
- **Fix:** Switch to **STD Filter Mode** and disable **HQ interpolation** if your project is heavy.

## 🎚️ Automation Ideas
- **Filter Sweep:** Automate the **Brightness** to increase as the room gets larger to add "sparkle" to the climax.
- **Detune Drive:** Increase **Detune** during the riser to make the tail sound more "chaotic" and "tense."

```

---

## FILE: 03-Workflows\by-goal\creating-shimmer-reverbs.md

```markdown
# Workflow: Creating Shimmer Reverbs (Angelic Halo)

*Goal: Creating the iconic "Shimmer" reverb—a lush, harmonic tail that sounds an octave above the source—perfect for R&B pads and ethereal vocals.*

## Vibe Mapping
- **Lush:** ⭐⭐⭐⭐⭐ (Primary)
- **Psychedelic:** ⭐⭐⭐⭐⭐ (Primary)
- **Vibey:** ⭐⭐⭐⭐

## 🎛️ Routing Context
- **Preferred:** Parallel Send track. This allows you to process the shimmer tail independently (e.g., adding more EQ or Sidechain).
- **Mix Status:** 100% Wet on the Send.

## 🚶 Step-by-Step Setup
1. **The Foundation:**
   - Set **Mode** to **Lush** or **Cathedral**.
   - Set **Decay** to 4.0s or longer.
2. **The Pitch Shift (The Core):**
   - Locate the **Pitch** fader. Set it to **+12.00** (exactly one octave up).
3. **The Glow (Feedback):**
   - Increase the **Feedback** knob slowly. Start at **20%** and go up to **50%**.
   - *Listen for:* A shimmering, high-frequency "glow" that starts to bloom behind the notes.
4. **Tone Sculpting:**
   - **Brightness:** High (70%) for clarity.
   - **HF Cut:** Set to **8kHz**. This keeps the shimmer from being "piercing" or "whistling."
   - **LF Cut:** Set to **300Hz**. This ensures the shimmer doesn't add low-end mud.
5. **Diffusion:**
   - Set to **100%**. You want the shimmer to be a smooth "cloud" rather than distinct high-pitched echoes.

## 🔄 Variations
- **The "Fifth" Shimmer:** Set **Pitch** to **+7.00**. This adds a perfect fifth, creating a more "mystical" or "otherworldly" harmonic character.
- **The "Dark Haunt":** Set **Pitch** to **-12.00** and lower the **Brightness**. This creates a heavy, brooding "sub-reverb."

## ⚠️ Pitfalls & Fixes
- **Problem:** The shimmer is "runaway" (getting louder and louder).
- **Fix:** Lower the **Feedback** knob immediately. The feedback loop can self-oscillate if set too high.
- **Problem:** The transients sound "chirpy."
- **Fix:** Increase **Pre-Delay** to 50ms so the initial hit stays clean.

## 🎚️ Automation Ideas
- **Harmonic Bloom:** Automate the **Feedback** knob to increase at the end of a melodic phrase.
- **Pitch Sweep:** Slowly move the **Pitch** fader from 0 to +12 during a build-up.

```

---

## FILE: 03-Workflows\by-goal\moody-rnb-underwater-spaces.md

```markdown
# Workflow: Moody R&B Underwater Spaces
**Goal:** Create the wide, dark, and "expensive" atmosphere found in Modern R&B and Trap Soul.

## 1. The "Push-Back" Technique
To get the vocal or instrument to feel like it's "behind" the listener:
- **Low Cut (Input):** Set to **300Hz - 500Hz**. This prevents the reverb from getting muddy in the low-mids.
- **High Cut (Output):** Aggressively set to **2kHz - 4kHz**. This "darkens" the space, creating the "underwater" feel.
- **Predelay:** Keep this high (**40ms - 80ms**). This allows the initial "dry" sound to hit clearly before the dark "cloud" of reverb swallows it.

## 2. Creating Harmonic "Glow" (Shimmer)
Modern R&B often has a "heavenly" glow on top of dark pads.
- **Pitch Shift:** Set the "Feedback" or "Pitch" module to **+1 Octave (+12 semitones)**.
- **Mix:** Keep the Shimmer Mix low (**10-20%**).
- **Modulation:** Increase the **Speed** and **Depth** in LuxeVerb to ~30%. This adds a "swirling" movement that makes the reverb feel alive and lush.

## 3. The Sidechain "Pump"
To prevent the reverb from washing out the drums:
1. Load LuxeVerb as an **Effect Send**.
2. Put a **Peak Controller** on your Kick track.
3. Link the LuxeVerb's **Wet Volume** to the Kick's peak (Inverted).
4. **Result:** The reverb "ducks" every time the Kick hits, allowing the beat to stay punchy while the atmosphere remains massive.

## 4. Preset Logic Archetypes
- **Dark Hall:** Decay 5.0s | Diffusion 100% | High Cut 3kHz. (The "Drake" Piano sound).
- **Crystal Cloud:** Decay 8.0s | Shimmer +12 | High Cut 8kHz. (The "Ambient" Vocal pad).

```

---

## FILE: 03-Workflows\by-goal\vocal-hall-optimization.md

```markdown
# Workflow: Vocal Hall Optimization (Clean Depth)

*Goal: Adding deep, "expensive" concert hall reverb to lead vocals while maintaining 100% clarity and presence.*

## Vibe Mapping
- **Lush:** ⭐⭐⭐⭐⭐ (Primary)
- **Vibey:** ⭐⭐⭐⭐⭐ (Primary)
- **Jazzy:** ⭐⭐⭐⭐

## 🎛️ Routing Context
- **Preferred:** Parallel Send track.
- **Mix Status:** 100% Wet on Send.

## 🚶 Step-by-Step Setup
1. **The Algorithm:**
   - Set **Mode** to **Hall** (for natural depth) or **Plate** (for bright presence).
2. **The "Front-to-Back" Separation:**
   - Set **Pre-Delay** to **35ms – 60ms**.
   - *Why:* This allows the dry vocal "consonants" to hit the listener's ear before the reverb starts, preventing the vocal from sounding "washed out" or distant.
3. **The Tail Control:**
   - **Decay:** 1.8s – 2.5s (The sweet spot for modern R&B).
   - **Brightness:** 50%.
4. **The "Abbey Road" Filter Trick:**
   - Set **LF Cut** to **500Hz**. (Removes vocal "thumps" and mud).
   - Set **HF Cut** to **6kHz**. (Removes harsh sibilance "S" sounds from the reverb).
5. **Diffusion:**
   - Set to **80%**. You want a smooth, creamy tail that stays behind the vocal.
6. **Modulation:**
   - Set **Detune** to **25%**. This adds a subtle "living" quality to the tail that sounds much more professional than a static digital tail.

## 🔄 Variations
- **The "Cloud" Vocal:** Use **Lush Mode**, increase **Decay** to 4.0s, and add a very low amount of **Feedback** (10%) on the **Pitch +12** fader.
- **The "Intimate" Booth:** Use **Room Mode**, **Size 10%**, and **Decay 0.6s**.

## ⚠️ Pitfalls & Fixes
- **Problem:** The vocal sounds like it's in a "barrel."
- **Fix:** You have too much low-end in the reverb. Increase the **LF Cut**.
- **Problem:** Reverb is making the "S" and "T" sounds too loud.
- **Fix:** Use a **De-esser** *before* the reverb on your send track, or lower the **HF Cut** knob.

## 🎚️ Automation Ideas
- **Tail Ducking:** (Internal to FL) Use a Fruity Peak Controller on the Dry Vocal to duck the volume of the Reverb Send whenever the singer is actually singing.
- **Vibe Expansion:** Automate the **Decay** to get longer during the bridge of the song for an "emotional" lift.

```

---

## FILE: 03-Workflows\by-instrument\01-hall-reverb-workflow.md

```markdown
# Hall Reverb Workflow

## Goal
Create deep, immersive hall reverb for leads, pads, and atmospheric elements.

## Plugin Settings

### Input Section
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input | -6 dB | Prevent clipping from tails |
| Low Cut | 80 Hz | Remove mud from reverb |
| High Cut | 14 kHz | Smooth high frequencies |

### Early Reflections
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Size | 85-100 | Large hall character |
| Predelay | 15-30 ms | Clear transient definition |
| Diffusion | 70% | Natural buildup |

### Reverb Decay
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Time | 2.5-4.0 s | Long, expansive tails |
| High Damping | 35% | Smooth decay without harshness |
| Low Damping | 0% | Maintain body |

### Modulation
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mod Depth | 15% | Subtle movement |
| Mod Rate | 0.15 Hz | Slow, organic texture |

### Output
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mix | 25-40% | Blend with dry signal |
| Low Cut | 150 Hz | Prevent low-end buildup |
| High Cut | 12 kHz | Control brightness |

## Genre Applications

### R&B Ballads (Moody)
- Time: 3.5s, Size: 95, Diffusion: 75%
- Low Cut: 100Hz on output
- Creates expansive, emotional atmosphere

### Trap Leads (Deep Bass)
- Time: 2.0s, Size: 75, Diffusion: 60%
- High Damping: 50% for tight tails
- Adds space without losing aggression

### EDM Pads (Electric)
- Time: 4.0s, Size: 100, Diffusion: 80%
- Modulation: 20% depth, 0.2Hz rate
- Movement and dimension for synths

## A/B Testing Method

### Test Sequence
1. Toggle reverb on/off every 4 bars
2. Compare with bypassed signal
3. Listen for:
   - Phasing issues in mono
   - Masking of dry signal
   - Tail clarity on decay

### Quick Fixes
| Issue | Solution |
|-------|----------|
| Muddy low end | Increase output low cut to 200Hz |
| Harsh highs | Increase high damping to 50% |
| Masking dry | Reduce mix to 20%, increase predelay |
| Boxy sound | Decrease size to 70, increase diffusion |

## FL Studio Tips

### Routing
- Insert on send track for shared reverb
- Use wet/dry knob on return channel
- Route multiple instruments to same send

### Automation
- Pre-delay automation for build-ups
- Decay time changes for sections
- Mix automation for breakdowns

### Sidechain (Optional)
- Key to kick for cleaner low end
- Set threshold to -20dB
- Ratio 4:1 for subtle ducking

```

---

## FILE: 03-Workflows\by-instrument\02-plate-reverb-workflow.md

```markdown
# Plate Reverb Workflow

## Goal
Achieve warm, vintage plate character for vocals, drums, and keys.

## Plugin Settings

### Input Section
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input | 0 dB | Clean signal path |
| Low Cut | 60 Hz | Preserve low warmth |
| High Cut | 16 kHz | Full frequency response |

### Early Reflections
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Size | 40-55 | Classic plate density |
| Predelay | 0-10 ms | Immediate body |
| Diffusion | 85% | Dense, smooth texture |

### Reverb Decay
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Time | 1.0-2.0 s | Tight, warm tails |
| High Damping | 25% | Smooth high end |
| Low Damping | 10% | Maintain warmth |

### Modulation
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mod Depth | 10% | Subtle analog feel |
| Mod Rate | 0.1 Hz | Slow variation |

### Output
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mix | 30-50% | Pronounced plate character |
| Low Cut | 120 Hz | Control low density |
| High Cut | 14 kHz | Smooth top end |

## Genre Applications

### R&B Vocals (Melodic)
- Time: 1.8s, Size: 50, Diffusion: 90%
- Mix: 45%, Predelay: 5ms
- Smooth, intimate vocal depth

### Hip-Hop Drums (Funky)
- Time: 1.2s, Size: 45, Diffusion: 80%
- High Damping: 35% for tighter tails
- Vintage drum warmth

### Lo-Fi Keys (Dusty)
- Time: 2.0s, Size: 55, Diffusion: 95%
- Add slight saturation pre-reverb
- Warm, nostalgic character

## A/B Testing Method

### Test Sequence
1. Compare plate vs hall character
2. Check pre/post EQ interaction
3. Listen for metallic artifacts
4. Test mono compatibility

### Quick Fixes
| Issue | Solution |
|-------|----------|
| Too dense | Reduce diffusion to 70% |
| Harsh upper mids | Increase high damping to 40% |
| Losing transients | Decrease predelay, increase mix |
| Thin sound | Reduce low cut to 40Hz |

## FL Studio Tips

### Drum Processing Chain
1. EQ (slight boost at 200Hz)
2. Compressor (2:1, fast attack)
3. LuxeVerb (plate settings)
4. Parallel blend with dry

### Vocal Chain
1. De-esser before reverb
2. EQ (gentle 3kHz boost pre)
3. LuxeVerb (plate settings)
4. Compressor after reverb
5. EQ (high shelf boost post)

### Sidechain (Optional)
- Key to kick for drum reverb
- Quick release for natural feel
- Gentle ducking (2-3dB)

```

---

## FILE: 03-Workflows\by-instrument\03-shimmer-workflow.md

```markdown
# Shimmer Reverb Workflow

## Goal
Create ethereal, pitch-shifted shimmer for leads, vocals, and atmospheric textures.

## Plugin Settings

### Input Section
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input | -3 dB | Clean headroom |
| Low Cut | 200 Hz | Focus on upper frequencies |
| High Cut | 18 kHz | Full shimmer range |

### Pitch Section
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Shift | +1 Octave | Classic shimmer sound |
| Blend | 60-80% | Balance dry/shifted |
| Feedback | 40-55% | Build ethereal layers |

### Early Reflections
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Size | 60-75 | Controlled sparkle |
| Predelay | 20-40 ms | Definition before shimmer |
| Diffusion | 90% | Maximum smoothness |

### Reverb Decay
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Time | 3.0-5.0 s | Long, evolving tails |
| High Damping | 15% | Preserve shimmer sparkle |
| Low Damping | 0% | Full low-end body |

### Modulation
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mod Depth | 25% | Movement in pitch-shifted signal |
| Mod Rate | 0.25 Hz | Organic variation |

### Output
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mix | 40-60% | Pronounced shimmer effect |
| Low Cut | 250 Hz | Remove low-end mud |
| High Cut | 16 kHz | Maximum sparkle |

## Genre Applications

### EDM Drops (Electric)
- Shift: +1 Octave, Feedback: 50%
- Time: 4.0s, Size: 70
- Epic build and release character

### R&B Atmosphere (Melodic)
- Shift: +1 Octave, Feedback: 45%
- Time: 5.0s, Size: 65
- Dreamy, romantic texture

### Trap Transitions (Deep Bass)
- Shift: +1 Octave, Feedback: 35%
- Time: 2.5s, Size: 60
- Risers and tension building

### Ambient Pads (Moody)
- Shift: +1 Octave, Feedback: 55%
- Time: 6.0s, Size: 75
- Infinite, evolving soundscapes

## A/B Testing Method

### Test Sequence
1. Toggle shimmer pitch on/off
2. Compare feedback levels
3. Check for digital artifacts
4. Test with different root keys

### Quick Fixes
| Issue | Solution |
|-------|----------|
| Chirpy artifacts | Reduce feedback to 35% |
| Losing shimmer | Increase blend to 75% |
| Muddy low end | Increase input low cut to 300Hz |
| Too harsh | Increase high damping to 25% |

## FL Studio Tips

### Build-Up Technique
1. Start with low shimmer mix (20%)
2. Automate blend to 60% over 4 bars
3. Automate feedback up 10%
4. Release for impact

### Layering
- Layer shimmer with hall reverb
- Send both to same bus
- Blend for complex textures

### Sidechain (Optional)
- Key to kick for clean low end
- Slow attack on sidechain
- Maintain shimmer sustain

```

---

## FILE: 03-Workflows\by-instrument\04-cinematic-workflow.md

```markdown
# Cinematic Reverb Workflow

## Goal
Create massive, cinematic spaces for dramatic effect, impacts, and atmospheric scoring.

## Plugin Settings

### Input Section
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input | -6 dB | Massive headroom for tails |
| Low Cut | 40 Hz | Full low-end sweep |
| High Cut | 18 kHz | Complete frequency range |

### Early Reflections
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Size | 95-100 | Maximum hall size |
| Predelay | 30-50 ms | Clear definition |
| Diffusion | 95% | Maximum smoothness |

### Reverb Decay
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Time | 6.0-10.0 s | Epic, lasting tails |
| High Damping | 20% | Slow high-frequency decay |
| Low Damping | 0% | Deep, rumbling lows |

### Modulation
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mod Depth | 30% | Significant movement |
| Mod Rate | 0.08 Hz | Very slow evolution |

### Output
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mix | 50-75% | Dominant reverb presence |
| Low Cut | 80 Hz | Deep bass extension |
| High Cut | 14 kHz | Controlled brightness |

## Genre Applications

### Cinematic Transitions (Moody)
- Time: 8.0s, Size: 100, Diffusion: 95%
- Modulation: 35% depth, 0.05Hz rate
- Epic, sweeping changes

### Impact Hits (Electric)
- Time: 6.0s, Size: 100, Diffusion: 90%
- Pre-delay: 40ms
- Massive sonic backdrop

### Score Elements (Melodic)
- Time: 10.0s, Size: 95, Diffusion: 98%
- High Damping: 25% for smoother decay
- Evolving, orchestral space

### Drum Swells (Deep Bass)
- Time: 5.0s, Size: 90, Diffusion: 85%
- Low damping for extended rumble
- Thunderous drum tails

## A/B Testing Method

### Test Sequence
1. Test with full mix vs individual elements
2. Check mono compatibility (phasing)
3. Listen for build-up over full decay
4. Compare different decay times

### Quick Fixes
| Issue | Solution |
|-------|----------|
| Too chaotic | Reduce modulation to 15% |
| Losing impact | Reduce mix to 40%, increase predelay |
| Clipping constantly | Reduce input gain to -12dB |
| Phasing in mono | Reduce size to 80, increase diffusion |

## FL Studio Tips

### Impact Reverb Chain
1. Impact sound
2. Transient shaper (boost attack)
3. LuxeVerb (cinematic settings)
4. Bus compressor (slow attack, fast release)
5. Limiter on output

### Transition Technique
1. Reverb on return track
2. High-pass filter on send at 200Hz
3. Automate send level from 0% to 70%
4. Release for dramatic effect

### Sidechain (Essential)
- Key to kick and snare
- Threshold: -30dB
- Ratio: 8:1
- Quick release (50ms)
- Creates space for transients

```

---

## FILE: 03-Workflows\by-instrument\INDEX.md

```markdown
# LuxeVerb By-Instrument Workflow Index

## Available Workflows

| # | Workflow | Description | Best For |
|---|----------|-------------|----------|
| 01 | [Hall Reverb](01-hall-reverb-workflow.md) | Deep, immersive hall spaces | Leads, pads, atmospheric elements |
| 02 | [Plate Reverb](02-plate-reverb-workflow.md) | Warm, vintage plate character | Vocals, drums, keys |
| 03 | [Shimmer Reverb](03-shimmer-workflow.md) | Ethereal, pitch-shifted shimmer | Leads, vocals, atmospheric textures |
| 04 | [Cinematic Reverb](04-cinematic-workflow.md) | Massive, epic cinematic spaces | Impacts, transitions, score elements |

## Quick Reference by Goal

### Vocal Processing
1. [Plate Reverb](02-plate-reverb-workflow.md) - Primary choice
2. [Hall Reverb](01-hall-reverb-workflow.md) - Secondary space

### Drum Processing
1. [Plate Reverb](02-plate-reverb-workflow.md) - Vintage warmth
2. [Cinematic Reverb](04-cinematic-workflow.md) - Epic drum fills

### Synth Processing
1. [Shimmer Reverb](03-shimmer-workflow.md) - Electric textures
2. [Hall Reverb](01-hall-reverb-workflow.md) - Deep pads

### Transitions & Effects
1. [Cinematic Reverb](04-cinematic-workflow.md) - Massive sweeps
2. [Shimmer Reverb](03-shimmer-workflow.md) - Rising tension

## Genre Quick Start

| Genre | Primary Workflow | Settings Reference |
|-------|------------------|-------------------|
| R&B Ballads | Hall Reverb | Time: 3.5s, Size: 95 |
| Hip-Hop Drums | Plate Reverb | Time: 1.2s, Size: 45 |
| Trap | Shimmer Reverb | Time: 2.5s, Shift: +1 Octave |
| EDM | Cinematic Reverb | Time: 8.0s, Size: 100 |
| Lo-Fi | Plate Reverb | Time: 2.0s, Diffusion: 95% |

## Related Documentation

- [LuxeVerb Genre Presets](../02-Data/presets/genre/INDEX.md)
- [LuxeVerb Signature Presets](../02-Data/presets/signature/INDEX.md)
- [LuxeVerb Safety Rules](../02-Data/rules/luxeverb-safety-rules.md)

```

---

## FILE: 04-Reference\feedback-loop-signal-flow.md

```markdown
# Technical Reference: Feedback Loop Signal Flow

Understanding how LuxeVerb processes Shimmer and Harmonic Tails. [SRC: IL-MAN]

## The Core Signal Path
1. **Input Stage:** The dry signal enters the plugin.
2. **Pre-Delay:** The signal is delayed by the set **Pre-Delay** time.
3. **Early Reflections (ER):** The first "bounces" off virtual walls are calculated based on **Size** and **Mode**.
4. **Main Algorithmic Tank:** The "Late Reflections" or main reverb tail is generated. This is where the **Decay** and **Brightness** parameters live.

---

## 🔁 The "Shimmer" Feedback Loop
LuxeVerb is unique because it allows you to inject a **Pitch Shifter** into the feedback path of the main reverb tank.

1. **Tap:** A portion of the Main Algorithmic Tank output is tapped.
2. **Pitch Shift:** This signal passes through the internal Pitch Shifter (controlled by the **Pitch** fader).
3. **Internal Filtering:** The pitch-shifted signal passes through the **HF / LF Cut** filters.
4. **Feedback:** The processed signal is fed back into the *input* of the Main Algorithmic Tank based on the **Feedback** amount.
5. **Diffusion / Modulation:** As the signal cycles through this loop, it is constantly being diffused and detuned (if **Detune** is active), creating a smooth, shimmering "cloud" rather than a distinct series of pitched echoes.

---

## Technical Implications
- **Self-Oscillation:** Because this is a feedback loop, high settings can cause the reverb to grow in volume forever. LuxeVerb has internal safety limiting, but monitoring is still advised.
- **Latency:** LuxeVerb is zero-latency for standard reverb, but the internal pitch-shifter may introduce a microscopic delay within the feedback tail itself (standard behavior for pitch shifting).
- **Interpolation:** The **Size** and **Decay** knobs use high-quality interpolation, which allows them to be automated in real-time without the "Doppler effect" or "zipper noise" common in vintage-style reverbs.

---
*For a quick guide on the knobs below the display, see the [01-Learning/Quick-Reference/parameter-cheat-sheet.md](../01-Learning/Quick-Reference/parameter-cheat-sheet.md).*

```

---

