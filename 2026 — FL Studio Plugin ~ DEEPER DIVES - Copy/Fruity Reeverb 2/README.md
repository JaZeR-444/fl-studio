# Fruity Reeverb 2 - Pro Algorithmic Space

```
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██████╗ ███████╗███████╗██╗   ██╗███████╗██████╗ ██████╗     ██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗██╔════╝██╔════╝██║   ██║██╔════╝██╔══██╗██╔══██╗    ╚════██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██████╔╝█████╗  █████╗  ██║   ██║█████╗  ██████╔╝██████╔╝     █████╔╝
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██╔══██╗██╔══╝  ██╔══╝  ╚██╗ ██╔╝██╔══╝  ██╔══██╗██╔══██╗    ██╔═══╝ 
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██║  ██║███████╗███████╗ ╚████╔╝ ███████╗██║  ██║██████╔╝    ███████╗
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═╝  ╚═╝╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═════╝     ╚══════╝
```

**Plugin Type:** Algorithmic Reverb
**Category:** Effect / Reverb / Mixing
**Official Manual:** [Image-Line Fruity Reeverb 2 Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Reeverb%202.htm)

---

## 🎯 What is Fruity Reeverb 2?

Fruity Reeverb 2 is FL Studio's flagship algorithmic reverb. It simulates natural acoustic environments by generating complex reflections that build up over time. It is a major upgrade over the original Reeverb, featuring **Mid/Side processing**, detailed **damping**, **modulation**, and **bass multiplier** controls. It is highly versatile, capable of everything from tight drum rooms to massive 20-second lush cathedral tails.

**Key Capabilities:**
- **Acoustic Space Modeling:** Rooms, Halls, Cathedrals, and custom spaces.
- **Mid/Side Processing:** Process stereo edges independently for width without mud.
- **Bass Multiplier:** Adjust the decay time of low frequencies separately (Warmth vs Brightness).
- **Tempo Modulation:** Built-in LFO for the reverb time to add organic movement.
- **Pre-Delay:** Controls the gap between dry sound and reverb onset (Clarity).
- **Stereo Separation:** Independent width control for the reverb tail.
- **Tone Filtering:** Integrated High and Low Cut filters.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **damping-vs-filtering.md** (Tonal balance)
3. Create **parameter-cheat-sheet.md**
4. Load the default and turn "Decay" to 5 seconds to hear the tail character.

### For Mix Engineers:
1. Study **using-mid-side-for-clarity.md**
2. Review **pre-delay-calculation-for-tempo.md**
3. Learn **cleaning-low-end-rumble.md** (Bass Multiplier)

### For Sound Designers:
1. Study **lush-ambient-textures.md**
2. Review **modulating-reverb-tails.md**
3. Learn **early-reflection-shaping.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Decay:** Tail duration (up to 20s).
  - **Size:** Perceived room dimensions.
  - **Pre Delay:** Ms gap.
  - **Bass / Cross:** Low-end decay weighting.
  - **Mod / Speed:** Pitch detune in the tail.
  - **Mid/Side Switch:** Spatial focus.

- [ ] **reverb-tone-shaping-guide.md**
  - **L.Cut:** Removing low rumble.
  - **H.Cut:** Softening harsh highs.
  - **DAMP:** High frequency decay speed.

#### 02-Data/parameters/
- [ ] **reeverb2-params.json**
  ```json
  {
    "plugin_name": "Fruity Reeverb 2",
    "category": "Reverb",
    "max_decay_seconds": 20,
    "features": ["Mid/Side", "Tempo modulation", "Diffusion"]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-tight-drum-rooms.md**
  - Small Size setting.
  - Low Decay (0.5s - 1.0s).
  - High Diffusion for density.
  - L.Cut set to 300Hz.

- [ ] **endless-ambient-washes.md**
  - Space mode (Large size).
  - Max Decay.
  - Subtle Modulation (Mod knob at 20%).
  - Smooth High Damping.

- [ ] **side-only-vocal-width.md**
  - Setting the plugin to "Side" mode.
  - Applied to a center-panned vocal.
  - Result: Space around the vocal without affecting the dry center presence.

#### 03-Workflows/by-context/
- [ ] **orchestral-hall-placement.md**
- [ ] **guitar-shimmer-simulation.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **bass-multiplier-mechanics.md**
  - How the "Cross" frequency defines the low-end warmth zone.

---

## 🔬 Research Framework

### Phase 1: The Tail (Week 1)
**Goal:** Tonal Balance

**Tasks:**
1. Compare "Bright" room (Bass knob low) vs "Warm" room (Bass knob high)
2. Experiment with "High Damping" to hear how the reverb "muffles" over time
3. Use the Modulation section to hear the chorus-like effect in the tail
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does "Size" affect the "Decay" time? (Physically, they are linked).
- What does the "ER" (Early Reflections) knob actually add to the sound?

### Phase 2: Spatial Focus (Week 2)
**Goal:** Mixing Width

**Tasks:**
1. Setup a vocal on a send
2. Toggle between Mid and Side modes
3. Adjust "Stereo Separation" to see the tail spread
4. Create using-mid-side-for-clarity.md

---

## 📊 Plugin Specifications to Document

### Engine
- Latency (Low CPU)
- Max Decay (20 seconds)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is my mix muddy? (Check Reverb L.Cut and Bass multiplier).
2. How to keep the vocal "in front"? (Increase Pre-Delay to ~20-50ms).

---

## 🔗 Cross-Reference with Other Plugins

Fruity Reeverb 2 is often used with:
- **LuxeVerb** (The premium alternative)
- **Fruity Delay 3** (Layering echoes)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Fruity Reeverb 2/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── reverb-tone-shaping-guide.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── reeverb2-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-tight-drum-rooms.md
│   │   └── using-mid-side-for-clarity.md
│
└── 04-Reference/
    └── bass-multiplier-mechanics.md
```

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Reeverb 2 Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Reeverb%202.htm)
- [Fruity Reeverb 2 Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Reeverb_2_tutorials.htm)
- [Fruity Reeverb 2 Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+reeverb+2+tutorial)

### Community Resources
- [Fruity Reeverb 2 Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+reeverb+2&restrict_sr=1)
- [Fruity Reeverb 2 User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Reeverb 2 Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for analyzing reverb tails and impulse responses
- **Fruity Spectroman** for visualizing frequency response
- **Fruity Limiter** for monitoring output levels
- **Fruity Convolver** for comparison with convolution reverb

### Recommended Learning Materials
- "Algorithmic Reverb Explained" - Understanding artificial space simulation
- "Reverb in Mix Engineering" - Practical applications for mixing
- "Mid/Side Processing Techniques" - Advanced spatial control

### Advanced Techniques
- **Pre-Delay Timing:** Setting pre-delay to musical intervals for rhythmic reverb
- **Bass Management:** Using bass multiplier for low-end control
- **Modulation Effects:** Applying subtle modulation for organic movement

---

## 🧪 Experimental Techniques

### Advanced Reverb Applications
Creative uses of Fruity Reeverb 2's capabilities:

**Mid/Side Processing:**
- **Stereo Field Control:** Using Mid/Side processing for precise stereo control
  - Process center content separately from sides
  - Essential for professional mixing
  - Perfect for maintaining vocal clarity
  - Pro tip: Use for transparent stereo enhancement
  - Useful for complex stereo manipulation

**Modulation Integration:**
- **Organic Movement:** Using modulation for natural reverb movement
  - Apply subtle modulation for organic feel
  - Essential for natural-sounding reverbs
  - Perfect for evolving textures
  - Pro tip: Use low modulation for natural movement
  - Useful for atmospheric enhancement

**Bass Multiplier Applications:**
- **Low-End Control:** Using bass multiplier for frequency-specific decay
  - Control low-frequency decay independently
  - Essential for bass management
  - Perfect for preventing low-end muddiness
  - Pro tip: Use for authentic acoustic space simulation
  - Useful for frequency-specific reverb design

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Dynamic Reverb Changes:** Automating reverb parameters for evolving effects
  - Create evolving reverb characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic reverb expression
  - Use for expressive control

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
  - Use for complex processing

## 🎚️ Workflow Optimization

### Reverb Setup Workflows
Efficient approaches to using Fruity Reeverb 2:

**Small Room Setup:**
- **Drum Room Simulation:** Creating tight drum room sounds
  - Use small size for intimate reflections
  - Apply short decay for realistic drum rooms
  - Essential for drum processing
  - Pro tip: Use high diffusion for density

- **Vocal Enhancement:** Adding subtle space to vocals
  - Use pre-delay for vocal clarity
  - Apply appropriate decay for naturalness
  - Essential for vocal processing
  - Pro tip: Use side mode for width without center muddiness

**Cathedral Setup:**
- **Large Space Simulation:** Creating massive reverb spaces
  - Use large size for spacious reflections
  - Apply long decay for realistic halls
  - Essential for orchestral applications
  - Pro tip: Use appropriate damping for realism

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
- **Build-up Effects:** Using reverb for tension building
- **Stereo Enhancement:** Adding width to electronic elements
- **Energy Management:** Using reverb for track energy
- **Transition Effects:** Creating smooth transitions between sections

### Hip-Hop and R&B
- **Vocal Enhancement:** Adding subtle space to vocals
- **Sample Enhancement:** Adding space to samples
- **Mix Enhancement:** Using reverb for mix clarity
- **Creative Effects:** Adding unique character to elements
- **Spatial Effects:** Managing spatial characteristics

### Rock and Metal
- **Guitar Enhancement:** Adding space to guitar sounds
- **Drum Enhancement:** Adding space to drums
- **Vocal Enhancement:** Adding space to vocals
- **Mix Enhancement:** Using reverb for mix clarity
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Reverb:** Creating evolving textures
- **Spatial Effects:** Advanced spatial parameter control
- **Experimental Reverb:** Pushing boundaries of reverb processing
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Reeverb 2 works well with various effects:
- **Reverb:** Adding additional space to reverb
- **Delay:** Creating rhythmic patterns with reverb
- **Chorus:** Adding width to reverb-processed sounds
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of reverb signals

### Dynamics Processing
Integration with dynamics processors:
- **Parallel Compression:** Combining with parallel compression
- **Upward Compression:** Using with upward compression
- **Limiting:** Combining with limiting for control
- **Gate/Expander:** Using with noise gates
- **De-esser:** Combining for vocal processing

### Equalization
Working with other EQ plugins:
- **Parametric EQ:** Combining with parametric EQs for precision
- **Graphic EQ:** Comparing with graphic EQs
- **Multi-Band:** Combining with multi-band processing
- **Dynamic EQ:** Using with dynamic EQ
- **Spectral Processing:** Combining with spectral tools

## 📖 Historical Context

### Development Background
Fruity Reeverb 2 was developed as an advanced algorithmic reverb:
- Created to provide sophisticated reverb processing
- Designed for professional mixing and mastering
- Developed with spatial enhancement in mind
- Intended to complement the original Reeverb with advanced features

### Evolution Through FL Studio Versions
- Initially introduced with basic algorithmic capabilities
- Enhanced with Mid/Side processing
- Improved with bass multiplier and modulation features
- Expanded with more sophisticated algorithms

### Impact on Music Production
Fruity Reeverb 2 has influenced music production by:
- Providing accessible professional reverb processing
- Enabling sophisticated spatial design
- Facilitating creative reverb applications
- Supporting various musical genres with flexible reverb

## 🧠 Advanced Processing Techniques

### Reverb Mastery
Advanced techniques for reverb processing:
- **Space Simulation:** Understanding room modeling principles
- **Early/Late Reflections:** Managing reflection timing
- **Frequency Response:** Controlling tonal characteristics
- **Diffusion Control:** Managing echo density
- **Creative Applications:** Using reverb for unique effects

### Mid/Side Processing
Advanced Mid/Side processing techniques:
- **Stereo Field Control:** Managing center vs side content
- **Width Management:** Controlling stereo width independently
- **Clarity Enhancement:** Maintaining center clarity while adding space
- **Phase Relationships:** Understanding L/R phase effects
- **Creative Applications:** Using MS for unique effects

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique reverb textures
- **Atmospheric Processing:** Building ambient reverb effects
- **Rhythmic Effects:** Creating rhythmic reverb patterns
- [ ] Create a "Small Room" reverb that adds body to a snare without an audible tail
- [ ] Design a "Lush" cathedral preset using the modulation and mid/side features
- [ ] Explain why Pre-Delay is essential for vocal clarity
- [ ] Use the Bass Multiplier to create a "Bright" vs "Dark" acoustic character
- [ ] Set up a Mid/Side reverb chain for transparent stereo enhancement
- [ ] Create a drum room with appropriate size and decay settings
- [ ] Apply pre-delay for vocal clarity in dense mixes
- [ ] Use modulation for organic reverb movement
- [ ] Implement bass multiplier for low-end management
- [ ] Troubleshoot reverb muddiness and clarity issues effectively
- [ ] Integrate Reeverb 2 into efficient mixing workflows
- [ ] Create genre-specific reverb presets for different musical styles
- [ ] Optimize Reeverb 2 settings for minimal CPU usage
- [ ] Use Reeverb 2 for creative sound design applications
- [ ] Set up advanced reverb routing for complex projects
- [ ] Apply Reeverb 2 in live performance scenarios
- [ ] Create experimental reverb effects with extreme settings
- [ ] Combine Reeverb 2 with other effects for layered processing
- [ ] Integrate Reeverb 2 with other automation tools seamlessly
- [ ] Create custom reverb workflows for specific creative needs
- [ ] Use Reeverb 2 effectively in large, complex projects
- [ ] Generate complex rhythmic patterns with parameter automation
- [ ] Create hybrid reverb effects combining algorithmic and convolution
- [ ] Apply Reeverb 2 in mastering contexts with appropriate care
- [ ] Create complex multi-stage reverb chains with smooth automation
- [ ] Design custom room simulations for specific acoustic environments
- [ ] Use Reeverb 2 for creative vocal processing applications
- [ ] Apply advanced bass management techniques for low-end control
- [ ] Create genre-specific reverb presets for efficient workflow
- [ ] Integrate Reeverb 2 with external hardware for hybrid processing
- [ ] Use Reeverb 2 for audio restoration and creative repair applications
- [ ] Combine Reeverb 2 with other spatial processing tools
- [ ] Apply Reeverb 2 in surround sound or multi-channel setups
- [ ] Create complex spatial relationships using multiple instances
- [ ] Use Reeverb 2 for creative instrumental processing applications
- [ ] Integrate Reeverb 2 with other automation tools for complex control
- [ ] Create complex atmospheric textures using multiple parameters
- [ ] Design custom early reflection patterns for unique spaces
- [ ] Apply advanced damping techniques for realistic acoustic simulation
- [ ] Use Reeverb 2 for creative stereo enhancement beyond traditional reverb
- [ ] Combine Reeverb 2 with convolution reverb for hybrid spaces
- [ ] Implement advanced pre-delay techniques for professional mixing
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use Reeverb 2 for creative sound design in film and game audio
- [ ] Apply Reeverb 2 in live sound reinforcement scenarios
- [ ] Create experimental reverb textures using extreme parameter settings
- [ ] Integrate Reeverb 2 with external reverbs for complex spatial design

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection