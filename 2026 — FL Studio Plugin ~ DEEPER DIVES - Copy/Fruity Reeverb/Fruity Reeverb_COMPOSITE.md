# Fruity Reeverb - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Reeverb - Classic Algorithmic Ambience

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██████╗ ███████╗███████╗██╗   ██╗███████╗██████╗ ██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗██╔════╝██╔════╝██║   ██║██╔════╝██╔══██╗██╔══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██████╔╝█████╗  █████╗  ██║   ██║█████╗  ██████╔╝██████╔╝
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██╔══██╗██╔══╝  ██╔══╝  ╚██╗ ██╔╝██╔══╝  ██╔══██╗██╔══██╗
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██║  ██║███████╗███████╗ ╚████╔╝ ███████╗██║  ██║██████╔╝
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═╝  ╚═╝╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═════╝ 
`\`\`

**Plugin Type:** Algorithmic Reverb
**Category:** Effect / Reverb
**Official Manual:** [Image-Line Fruity Reeverb Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Reeverb.htm)

---

## 🎯 What is Fruity Reeverb?

**Note:** This is the legacy Fruity Reeverb (v1). 

Fruity Reeverb is an efficient algorithmic reverb that simulates acoustic spaces by calculating a dense pattern of echoes. While less advanced than Reeverb 2, it is famous for its "vintage digital" sound and extremely low CPU usage. It features basic controls for Room Size, Color (Filtering), and Decay. It is often used for creating simple "small room" ambiences or lo-fi "90s computer" reverb tails.

**Key Capabilities:**
- **Room Size:** Sets the dimensions of the virtual space.
- **Decay Time:** Controls how long the reverb tail lasts.
- **Color (HF/LF Cut):** Simple high and low-pass filtering.
- **Diffusion:** Controls how "smooth" vs "grainy" the echoes are.
- **Mix Controls:** Independent Dry and Reverb levels.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **reeverb-1-vs-2.md**
3. Create **parameter-cheat-sheet.md**
4. Load the "Small Room" preset and use it on a dry drum hit.

### For Lo-Fi Producers:
1. Study **vintage-digital-ambience.md**
2. Review **grainy-tails-setup.md** (Low Diffusion tricks)

### For Mix Engineers:
1. Study **utility-room-ambience.md**
2. Review **pre-delay-calculation.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Room Size:** Large vs Small.
  - **Decay:** Tail length.
  - **Color:** Bright vs Dark.
  - **Diffusion:** Smoothness.
  - **Dry/Reverb:** Balance.

- [ ] **reeverb-1-vs-2.md**
  - Why Reeverb 1 has a distinct "static" character.
  - CPU comparison.

#### 02-Data/parameters/
- [ ] **reeverb-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Reeverb",
    "category": "Reverb",
    "parameters": [
      {
        "name": "Diffusion",
        "type": "knob",
        "description": "Echo density",
        "pro_tip": "Lower values create a 'ticking' or grainy delay effect."
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **small-booth-simulation.md**
  - Tiny Room Size.
  - Short Decay (~0.5s).
  - High Diffusion.
  - Result: Adds "body" to dry vocals without obvious tail.

- [ ] **lo-fi-90s-reverb.md**
  - Using Reeverb 1's specific artifacts.
  - Cutting Highs via Color.
  - Medium decay.

#### 03-Workflows/by-context/
- [ ] **percussion-glue.md**
- [ ] **background-synth-push.md**

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Making Space

**Tasks:**
1. Put Reeverb on a Snare
2. Adjust Room Size from min to max
3. Adjust Color to hear "Dark" vs "Bright"
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How long can the decay go? (Seconds).
- Is there a Pre-Delay knob? (If not, how to simulate it? Add Fruity Delay before it).

### Phase 2: Grain Control (Week 2)
**Goal:** Character

**Tasks:**
1. Lower Diffusion to minimum
2. Listen to the "echo-y" nature of the tail
3. Create grainy-tails-setup.md

**Key Questions to Answer:**
- Can I automate Room Size without clicks? (Usually no, causes pitch artifacts in algorithms).

---

## 📊 Plugin Specifications to Document

### Engine
- Algorithm Type (IIR Delay Network?)
- CPU Footprint

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why does my reverb sound metallic? (Usually too much high-end in "Color" or small room size).
2. Should I use this on the Master? (No, use on a Send or individual track).

---

## 📝 Documentation Standards

### For Each Workflow:
- **Room Size:** %
- **Decay:** Time/Knob pos
- **Color:** Dark/Bright
- **Dry/Wet:** %

---

## 🔗 Cross-Reference with Other Plugins

Fruity Reeverb is often used with:
- **Fruity Delay 2** (For pre-delay)
- **Fruity Parametric EQ 2** (Cleaning up the reverb mud)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Reeverb/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── reeverb-1-vs-2.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── reeverb-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── small-booth-simulation.md
│   │   └── lo-fi-90s-reverb.md
│
└── 04-Reference/
    └── pre-delay-calculation.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Reeverb Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Reeverb.htm)
- [Fruity Reeverb Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Reeverb_tutorials.htm)
- [Fruity Reeverb Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+reeverb+tutorial)

### Community Resources
- [Fruity Reeverb Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+reeverb&restrict_sr=1)
- [Fruity Reeverb User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Reeverb Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Algorithmic Reverb Fundamentals" - Understanding convolution vs algorithmic reverb
- "Vintage Digital Reverb Techniques" - Creating classic digital reverb sounds
- "Reverb in Mix Engineering" - Proper reverb application in mixing

### Advanced Techniques
- **Diffusion Control:** Understanding echo density and smoothness
- **Room Modeling:** Mastering space simulation parameters
- **Vintage Character:** Using the distinctive lo-fi qualities

---

## 📚 In-Depth Technical Analysis

### Algorithmic Reverb Architecture
Fruity Reeverb implements a classic algorithmic reverb system:
- **IIR Network:** Infinite Impulse Response delay network
- **Early Reflections:** Simulated initial sound reflections
- **Late Reverb:** Dense tail simulation
- **Low CPU Usage:** Optimized for efficient processing
- **Vintage Character:** Distinctive lo-fi digital sound

### Internal Processing Chain
The signal processing follows this order:
- **Input Stage:** Signal level monitoring and routing
- **Pre-Delay:** Initial delay before reverb processing
- **Early Reflections:** Initial space simulation
- **Algorithmic Processing:** Main reverb algorithm
- **Filtering:** Color controls for frequency shaping
- **Diffusion:** Echo density processing
- **Output Stage:** Final reverb/dry mix

### Room Size Algorithm
The room size parameter affects the reverb simulation:
- **Small Rooms:** Shorter delay times, tighter reflections
- **Large Rooms:** Longer delay times, more spacious reflections
- **Distance Simulation:** Simulates proximity to walls
- **Reverb Time:** Affects overall decay time
- **Early/Late Balance:** Changes the ratio of early to late reflections

### Decay Time Processing
The decay parameter controls reverb tail length:
- **RT60 Measurement:** Time for reverb to decay 60dB
- **Feedback Loops:** Internal feedback determines decay
- **Frequency Dependence:** Different decay times per frequency band
- **Stability:** Maintains reverb without instability
- **Tail Management:** Controls reverb tail characteristics

### Color Controls
The color parameters affect frequency response:
- **High-Frequency Damping:** Controls brightness of reverb tail
- **Low-Frequency Enhancement:** Controls low-end presence
- **Frequency Slope:** Determines how frequencies decay
- **Tonal Character:** Shapes overall reverb tone
- **Naturalness:** Maintains realistic frequency response

### Diffusion System
The diffusion parameter affects echo density:
- **Low Diffusion:** Discrete, echo-like reflections
- **High Diffusion:** Dense, smooth reverb tail
- **Grain Control:** Controls the "graininess" of the reverb
- **Echo Density:** Determines how many reflections occur
- **Smoothness:** Controls the smoothness of the reverb tail

## 🎛️ Parameter Deep Dive

### Room Size Control
- **Function:** Simulates the dimensions of the virtual space
  - Range: Small to large (typically 0-100%)
  - Effect: Changes the timing and density of reflections
  - Use for: Creating different space characteristics
  - Pro tip: Small rooms for intimate spaces, large for halls
- **Behavior:**
  - Small: Tight, quick reflections
  - Large: Spacious, longer reflections
  - Pro tip: Match to musical context and arrangement
- **Applications:**
  - Intimate spaces: Small settings for close sounds
  - Medium spaces: Medium settings for general ambience
  - Large spaces: Large settings for halls and chambers
  - Creative spaces: Extreme settings for unique effects
  - Pro tip: Use with decay for realistic space simulation

### Decay Time Control
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

### Color Controls
- **High-Frequency Damping:**
  - **Function:** Controls brightness of reverb tail
    - Range: Bright to dark (typically 0-100%)
    - Effect: Determines how high frequencies decay
    - Use for: Controlling reverb brightness
    - Pro tip: Darker settings for more realistic spaces
  - **Behavior:**
    - Bright: Preserves high frequencies
    - Dark: Attenuates high frequencies
    - Pro tip: Use for air absorption simulation
  - **Applications:**
    - Bright reverb: For lush, open spaces
    - Dark reverb: For more realistic spaces
    - Creative damping: For unique tonal effects
    - Mix integration: For frequency space management
    - Pro tip: Use for natural space simulation

- **Low-Frequency Enhancement:**
  - **Function:** Controls low-end presence in reverb
    - Range: Low to high (typically 0-100%)
    - Effect: Determines how low frequencies behave
    - Use for: Managing low-end in reverb
    - Pro tip: Use carefully to avoid muddiness
  - **Behavior:**
    - Low: Reduced low-end in reverb
    - High: Enhanced low-end in reverb
    - Pro tip: Use for bass response management
  - **Applications:**
    - Low LF: For clarity in low-end
    - High LF: For full, rich reverb
    - Creative LF: For unique low-end effects
    - Mix management: For low-end control
    - Pro tip: Use with caution to avoid muddiness

### Diffusion Control
- **Function:** Controls echo density and smoothness
  - Range: Low to high (typically 0-100%)
  - Effect: Changes from discrete echoes to smooth tail
  - Use for: Controlling reverb texture
  - Pro tip: Low values create "grainy" or "echo-y" textures
- **Behavior:**
  - Low: Discrete, echo-like reflections
  - High: Dense, smooth reverb tail
  - Pro tip: Essential for lo-fi textures
- **Applications:**
  - Low diffusion: For vintage digital character
  - High diffusion: For smooth, modern reverb
  - Creative diffusion: For unique reverb textures
  - Lo-fi effects: For grainy, digital artifacts
  - Pro tip: Use for distinctive vintage character

### Mix Controls
- **Dry Level:** Controls original signal level
  - Range: 0-100% (typically)
  - Effect: Adjusts amount of original signal
  - Use for: Balancing original and processed signals
  - Pro tip: Use for parallel processing
- **Reverb Level:** Controls reverb signal level
  - Range: 0-100% (typically)
  - Effect: Adjusts amount of reverb signal
  - Use for: Setting reverb intensity
  - Pro tip: Use for independent level control
- **Applications:**
  - Balance: Adjusting dry/wet ratio
  - Parallel processing: Independent level control
  - Mix integration: Fitting reverb in mix
  - Creative mixing: Unique dry/wet combinations
  - Pro tip: Use for precise mix control

## 🎼 Sound Design Applications

### Vintage Digital Reverb
Using Reeverb for classic digital reverb sounds:

**90s Computer Sound:**
- **Low Diffusion Settings:** Creating grainy digital artifacts
  - Use low diffusion for echo-like characteristics
  - Essential for lo-fi aesthetics
  - Perfect for nostalgic sounds
  - Pro tip: Use for authentic vintage character

- **Medium Decay:** Creating characteristic digital tails
  - Apply medium decay for classic digital length
  - Essential for vintage digital character
  - Perfect for 90s-style production
  - Pro tip: Use with filtering for authenticity

- **Color Filtering:** Adding vintage tonal characteristics
  - Apply appropriate high-frequency damping
  - Essential for authentic vintage sound
  - Perfect for period-appropriate effects
  - Pro tip: Use for realistic vintage response

### Spatial Enhancement
Using Reeverb for spatial applications:

**Small Room Simulation:**
- **Intimate Spaces:** Creating close, intimate ambiences
  - Use small room size for tight reflections
  - Apply short decay for realistic small rooms
  - Essential for booth-style ambience
  - Perfect for vocal enhancement
  - Pro tip: Use for adding body without obvious tail

**Medium Hall Simulation:**
- **Balanced Spaces:** Creating medium-sized spaces
  - Use medium room size for balanced reflections
  - Apply medium decay for realistic halls
  - Essential for general ambience
  - Perfect for instrument enhancement
  - Pro tip: Use for natural space simulation

**Creative Spaces:**
- **Unique Ambiences:** Creating unusual spatial effects
  - Use extreme settings for creative spaces
  - Apply unique color combinations
  - Essential for experimental music
  - Perfect for atmospheric enhancement
  - Pro tip: Use for unique spatial character

### Creative Applications
Using Reeverb for experimental applications:

**Lo-Fi Enhancement:**
- **Vintage Character:** Adding lo-fi digital character
  - Use low diffusion for grainy texture
  - Apply appropriate color settings
  - Essential for lo-fi production
  - Perfect for nostalgic aesthetics
  - Pro tip: Embrace the digital artifacts

**Atmospheric Textures:**
- **Evolving Spaces:** Creating evolving reverb textures
  - Use automation for changing reverb
  - Apply evolving room parameters
  - Essential for ambient music
  - Perfect for evolving soundscapes
  - Pro tip: Use for atmospheric enhancement

**Rhythmic Applications:**
- **Rhythmic Reverb:** Creating rhythmic reverb patterns
  - Use with rhythmic elements
  - Apply appropriate decay settings
  - Essential for electronic music
  - Perfect for rhythmic enhancement
  - Pro tip: Sync to project tempo for precision

## 🧪 Experimental Techniques

### Advanced Reverb Applications
Creative uses of Reeverb's capabilities:

**Pre-Delay Simulation:**
- **External Delay:** Using Fruity Delay before Reeverb for pre-delay
  - Create realistic pre-delay effects
  - Essential for professional reverb
  - Perfect for adding depth to reverb
  - Pro tip: Use for realistic space simulation

**Diffusion Manipulation:**
- **Grain Control:** Using diffusion for texture control
  - Low diffusion for echo-like effects
  - High diffusion for smooth tails
  - Perfect for texture control
  - Essential for character manipulation
  - Useful for vintage digital effects

**Color Experimentation:**
- **Frequency Shaping:** Using color controls for unique effects
  - Create unusual frequency responses
  - Essential for creative reverb
  - Perfect for experimental textures
  - Pro tip: Use for unique tonal effects

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
Efficient approaches to using Reeverb for reverb:

**Small Room Setup:**
- **Booth Simulation:** Creating intimate vocal booth sounds
  - Use small room size for tight reflections
  - Apply short decay for realistic booth
  - Essential for vocal enhancement
  - Pro tip: Use high diffusion for smooth booth sound

**Hall Simulation:**
- **Concert Hall:** Creating realistic concert hall ambience
  - Use large room size for spacious reflections
  - Apply long decay for realistic hall
  - Essential for orchestral applications
  - Pro tip: Use appropriate color settings for realism

**Creative Setup:**
- **Experimental Reverb:** Creating unique reverb textures
  - Use extreme settings for creative effects
  - Apply unique parameter combinations
  - Essential for experimental music
  - Pro tip: Use low diffusion for vintage character

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
Fruity Reeverb works well with various effects:
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
Fruity Reeverb was developed as a classic algorithmic reverb:
- Created to provide efficient reverb processing
- Designed for vintage digital character
- Developed with mixing and production in mind
- Intended to complement other reverb plugins

### Evolution Through FL Studio Versions
- Initially introduced with basic algorithmic capabilities
- Enhanced with additional parameters and controls
- Improved with better sound quality and stability
- Maintained for compatibility and efficiency

### Impact on Music Production
Fruity Reeverb has influenced music production by:
- Providing accessible vintage digital reverb
- Enabling efficient reverb processing
- Facilitating lo-fi and nostalgic sound design
- Supporting various musical genres with flexible reverb

## 🧠 Advanced Processing Techniques

### Reverb Mastery
Advanced techniques for reverb processing:
- **Space Simulation:** Understanding room modeling principles
- **Early/Late Reflections:** Managing reflection timing
- **Frequency Response:** Controlling tonal characteristics
- **Diffusion Control:** Managing echo density
- **Creative Applications:** Using reverb for unique effects

### Vintage Digital Techniques
Advanced vintage digital reverb techniques:
- **Grain Management:** Controlling echo density and texture
- **Color Filtering:** Using frequency shaping for character
- **Diffusion Control:** Managing smoothness vs. graininess
- **Algorithm Characteristics:** Understanding vintage algorithm traits
- **Creative Applications:** Using vintage character for expression

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique reverb textures
- **Atmospheric Processing:** Building ambient reverb effects
- **Rhythmic Effects:** Creating rhythmic reverb patterns
- **Spatial Manipulation:** Creating immersive reverb environments
- **Experimental Processing:** Pushing boundaries of reverb processing

## 📊 Performance Considerations

### CPU Usage
Managing Reeverb's impact on system performance:
- **Low CPU Load:** Highly optimized algorithmic processing
- **Real-Time Performance:** Optimized for live performance
- **Instance Count:** Multiple instances have minimal impact
- **Parameter Automation:** Automated parameters have minimal CPU impact
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Algorithm Quality:** Maintaining vintage digital character
- **Frequency Response:** Preserving appropriate frequency balance
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output
- **Signal Integrity:** Preserving original signal quality

### System Integration
Optimizing Reeverb within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimal audio latency

## 🛠️ Troubleshooting Common Issues

### Reverb Problems
- **Harsh Sound:** Reduce high-frequency color or adjust diffusion
- **Muddy Low End:** Reduce low-frequency enhancement or use filtering
- **Phase Issues:** Check stereo field and width settings
- **Excessive Ringing:** Reduce decay or adjust color settings
- **Poor Definition:** Adjust diffusion and color for clarity

### Technical Issues
- **High CPU Usage:** Reeverb has minimal CPU usage
- **Latency Issues:** Check buffer settings
- **Clipping:** Reduce reverb level or input gain
- **Artifacts:** Check sample rate and bit depth settings
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Adjust room size and decay settings
- **Lack of Character:** Increase diffusion or adjust color
- **Poor Integration:** Use appropriate settings for the mix
- [ ] Create a convincing "rehearsal space" ambience
- [ ] Explain why the "Diffusion" knob is the key to lo-fi textures
- [ ] Use Reeverb 1 to add depth without using modern "lush" algorithms
- [ ] Set up a small room simulation with appropriate parameters
- [ ] Create vintage digital reverb with characteristic artifacts
- [ ] Apply proper color filtering for realistic spaces
- [ ] Use the diffusion control for texture management
- [ ] Troubleshoot harshness and muddiness issues effectively
- [ ] Integrate Reeverb into efficient reverb workflows
- [ ] Create complex reverb automation patterns with smooth transitions
- [ ] Set up a realistic hall simulation with appropriate parameters
- [ ] Use Reeverb for creative lo-fi applications
- [ ] Apply stereo widening techniques using reverb parameters
- [ ] Create rhythmic reverb patterns with precise timing
- [ ] Combine Reeverb with other effects for layered processing
- [ ] Use automation to create evolving reverb characteristics
- [ ] Design custom reverb patches for specific musical contexts
- [ ] Optimize Reeverb settings for minimal CPU usage
- [ ] Use Reeverb for creative sound design applications beyond traditional reverb
- [ ] Set up advanced reverb routing for complex projects
- [ ] Apply Reeverb in live performance scenarios
- [ ] Create experimental reverb effects with extreme settings
- [ ] Combine Reeverb with other effects for layered processing
- [ ] Integrate Reeverb with other automation tools seamlessly
- [ ] Create custom reverb workflows for specific creative needs
- [ ] Use Reeverb effectively in large, complex projects
- [ ] Generate complex rhythmic patterns with parameter automation
- [ ] Create hybrid reverb effects combining algorithmic and convolution
- [ ] Apply Reeverb in mastering contexts with appropriate care
- [ ] Create complex multi-stage reverb chains with smooth automation
- [ ] Design custom room simulations for specific acoustic environments
- [ ] Use Reeverb for creative vocal processing applications
- [ ] Apply advanced diffusion techniques for texture control
- [ ] Create genre-specific reverb presets for efficient workflow
- [ ] Integrate Reeverb with external hardware for hybrid processing
- [ ] Use Reeverb for audio restoration and creative repair applications
- [ ] Combine Reeverb with other spatial processing tools
- [ ] Apply Reeverb in surround sound or multi-channel setups
- [ ] Create complex spatial relationships using multiple instances
- [ ] Use Reeverb for creative instrumental processing applications
- [ ] Integrate Reeverb with other automation tools for complex control

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Reeverb

## Purpose & Identity
Fruity Reeverb (v1) is a classic algorithmic reverb effect. It simulates the acoustic reflection of sound within a virtual room. Unlike its successor (Reeverb 2), the original version is prized for its **lo-fi digital grit**, extremely low CPU usage, and its ability to create "grainy" textures using the Diffusion control. [SRC: IL-MAN]

## 60-Second Mental Model
Imagine a sound bouncing off four digital walls. Reeverb 1 is a simple, "old-school" way to add space. It doesn't sound like a real cathedral; it sounds like a classic 90s rack-mount reverb unit. It’s perfect for when you want "obvious" digital space rather than invisible realism.

## Hip-Hop / R&B Context
In urban production, "perfect" isn't always the goal.
- **The "Booth" Vibe:** Use a tiny Room Size and short Decay to make a dry vocal sound like it was recorded in a small, isolated booth.
- **Lo-Fi Percussion:** Add a "grainy" tail to your snares or hi-hats by turning the Diffusion down. This creates a "crackle" that fits lo-fi hip-hop perfectly.
- **Vintage Samples:** Run a clean digital synth through Reeverb 1 with some high-frequency cutting (Color) to make it sound like it was sampled from an old record.

## When To Use
- When you want a **vintage digital** character (e.g., 90s/early 2000s rap).
- When your project is hitting **100% CPU** and you need a reverb that uses almost no resources.
- When you want to create **glitchy, grainy** spatial effects (low Diffusion).

## When NOT To Use
- **Lush, Modern Vocals:** Use **LuxeVerb** or **Fruity Reeverb 2** for smooth, high-fidelity tails.
- **Master Bus:** Never put Reeverb 1 on the master; it is too metallic for global processing. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Reeverb

## UI Tour
1.  **Room Size Slider:** Sets the dimensions of the virtual box. Larger = more distant echoes. [SRC: IL-MAN]
2.  **Decay Knob:** How long the reverb tail lasts (Time).
3.  **HF/LF Cut (Color):** Simple filters to darken (High Cut) or thin out (Low Cut) the reverb tail.
4.  **Diffusion Knob:** The "Grain" control.
    - **High:** Smooth, cloudy reverb.
    - **Low:** Jagged, echo-like "ticking."
5.  **Dry/Reverb Mix:** Independent sliders for the original and processed signals.

## Functional Flow
1.  **Input:** Mono or Stereo audio enters.
2.  **Delay Network:** The signal is fed into multiple IIR (Infinite Impulse Response) delay lines.
3.  **Feedback Loop:** The Decay setting determines how much of the signal is fed back, creating the "Tail."
4.  **Spectral Shaping:** The Color filters remove frequencies from the feedback loop.
5.  **Diffusion Engine:** The signal is "smeared" to hide individual echoes.
6.  **Mixing:** The final Reverb signal is added to the Dry signal.

## Things Beginners Misunderstand
- **Pre-Delay:** Reeverb 1 has **NO Pre-Delay knob**. To get that professional "gap" before the reverb hits, you must place a **Fruity Delay 2** before it (set to 100% wet, zero feedback). [SRC: REPUTABLE]
- **The "Metallic" Ring:** If you hear a high-pitched ring, your Room Size is too small and your Color is too bright. Increase the HF Cut to dampen the "metal."
- **Stereo Spread:** Reeverb 1 is not as "wide" as Reeverb 2. Use a **Fruity Stereo Enhancer** after it if you need more width.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Reeverb

## 1. The "Booth" Vocal (Intimate Space)
- **Technique:** Set Room Size to **10%**. Set Decay to **0.5s**. Set Diffusion to **MAX**.
- **Application:** Use this on a dry vocal recording.
- **Result:** It adds "body" and "air" without a noticeable tail, making the artist sound like they are in a real room rather than a digital void.

## 2. Low-Diffusion Grain (The Lo-Fi Secret)
- **Technique:** Set Diffusion to **20-30%**. 
- **Application:** Use on a Snare drum or a Rimshot.
- **Listen For:** The reverb tail will sound "jittery" or like a fast series of clicks.
- **Vibe:** Adds a textured, "glitchy" character perfect for boom-bap or experimental trap.

## 3. High-Pass the Tail (Clean Mixes)
- **Technique:** Turn the **LF Cut** slider up to at least 300Hz.
- **Why:** Reeverb 1 can create a lot of muddy low-end buildup. Cutting the lows from the tail ensures your Kick and 808 stay punchy while the vocal has space. [SRC: REPUTABLE]

## 4. Reverb-into-Distortion
- **Technique:** Place Reeverb 1 *before* a distortion plugin (like **Fruity Blood Overdrive**).
- **Effect:** The distortion will "crunch" the reverb tail, creating a massive, wall-of-sound texture common in industrial or "distorted" trap styles.

## Common Pitfalls + Fixes
- **Pitfall:** "The reverb sounds like a cheap bathroom."
  - **Fix:** Your Room Size and HF Cut are likely in conflict. Increase the **HF Cut** (making it darker) and move the **Room Size** to at least 50%.
- **Pitfall:** "Muddy vocals."
  - **Fix:** Use the **Mix** sliders. Lower the **Reverb** slider to 20% and keep **Dry** at 100%. Less is more. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Reeverb

Reeverb 1 translates vibes through **texture** and **imperfection**.

## 1. Moody (Cold, Isolated, Dark)
- **Concept:** A small, damp room with no light.
- **Levers:**
  - **Color:** Max **HF Cut** (Dull/Dark).
  - **Decay:** Short (1.0s).
  - **Room Size:** Medium-Small (30%).
- **Listen For:** The "suffocated" high-end. It feels like someone whispering in a basement.
- **Don't Do This:** Don't use long tails; moody vibes in this plugin come from the *lack* of space.

## 2. Upbeat (Kinetic, Bouncing, Funky)
- **Concept:** A "slap-back" room that adds rhythm.
- **Levers:**
  - **Diffusion:** Low (40%) to emphasize the echoes.
  - **Decay:** Very short (0.3s).
  - **Target:** Percussion bus.
- **Listen For:** The "ghost hits" that add a rhythmic tail to the drums.
- **Don't Do This:** Avoid dark filtering; the "slap" needs high-end to cut through.

## 3. Psychedelic (Fragmented, Glitchy, Unreal)
- **Concept:** Time feels broken.
- **Levers:**
  - **Diffusion:** Minimum (0%).
  - **Automation:** Automate the **Room Size** during a long synth note.
- **Listen For:** The "ticking" of the reverb tail and the pitch-warping artifacts during automation.
- **Don't Do This:** Avoid smooth settings; the more jagged, the better.

## 4. Jazzy (Organic, Roomy, Glue)
- **Concept:** A small jazz club.
- **Levers:**
  - **Room Size:** Medium (50%).
  - **Decay:** Natural (1.5s).
  - **Diffusion:** High (100%).
- **Listen For:** A subtle "halo" around the instruments that blends them together.
- **Don't Do This:** Avoid 100% wet; jazz requires the original dry instrument to lead.

## 5. Vibey (Smooth, Lo-Fi, R&B)
- **Concept:** The "90s Digital" aesthetic.
- **Levers:**
  - **HF Cut:** Moderate (50%).
  - **Diffusion:** Medium (70%).
  - **Mix:** Low Wet (15%).
- **Listen For:** That specific "FL Studio 4" nostalgia. It feels like an old R&B record sampled into a computer.
- **Don't Do This:** Don't try to make it sound "modern"; embrace the digital nature. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\complete-guide.md

```markdown
# Fruity Reeverb – Complete Guide

## Overview
Simple, CPU-efficient reverb perfect for quick room ambience and space creation. More basic than Reeverb 2 but great for workflow speed.

## Parameters

### Room Size
- **Size**: Room dimension simulation (0-100%)
- **Damping**: High-frequency absorption
- **Mix**: Dry/wet balance

### Character
- **Diffusion**: Early reflection density
- **Bass**: Low-frequency content in reverb
- **Decay**: Reverb tail length

## Hip-Hop Applications

### Snare/Clap Ambience
**Settings**:
- Size: 35-50%
- Damping: 60-70%
- Decay: Short-medium
- Mix: 15-25%

**Result**: Natural room sound without wash

### Vocal Space
**Settings**:
- Size: 45-60%
- Damping: 50-60%
- Decay: Medium
- Mix: 12-20%

**Result**: Present but not drowning

### 808/Bass Room (Subtle)
**Settings**:
- Size: 20-30%
- Damping: 80%
- Decay: Short
- Mix: 5-10%

**Result**: Slight air without mud

### Melodic Elements
**Settings**:
- Size: 60-75%
- Damping: 40-50%
- Decay: Medium-long
- Mix: 25-40%

**Result**: Lush atmosphere

## Genre Presets

### Trap
`\`\`json
{
  "name": "Trap Snare Hit",
  "size": 40,
  "damping": 65,
  "decay": 35,
  "diffusion": 60,
  "bass": 30,
  "mix": 18,
  "use": "Snares, claps"
}
`\`\`

### Boom Bap
`\`\`json
{
  "name": "Classic Room",
  "size": 50,
  "damping": 55,
  "decay": 45,
  "diffusion": 70,
  "bass": 40,
  "mix": 22,
  "use": "Drums, samples"
}
`\`\`

### Lo-Fi
`\`\`json
{
  "name": "Warm Space",
  "size": 55,
  "damping": 70,
  "decay": 50,
  "diffusion": 50,
  "bass": 55,
  "mix": 28,
  "use": "Keys, pads"
}
`\`\`

### Melodic
`\`\`json
{
  "name": "Dreamy Hall",
  "size": 70,
  "damping": 45,
  "decay": 60,
  "diffusion": 75,
  "bass": 35,
  "mix": 35,
  "use": "Vocals, synths"
}
`\`\`

## Quick Workflows

### Send-Based Reverb (Professional)
1. Create reverb aux/send track
2. Add Fruity Reeverb (mix 100%)
3. Send instruments to this track
4. Control amount per instrument

**Benefits**: One reverb space, CPU efficient

### Insert Reverb (Quick)
1. Add directly to instrument track
2. Keep mix lower (15-30%)
3. Faster workflow

**Benefits**: Simple, immediate

### Parallel Reverb
1. Duplicate track
2. Reverb mix 100% on duplicate
3. Blend to taste
4. Process reverb separately (EQ, compress)

**Benefits**: Maximum control

## By Instrument

### Drums
- **Kick**: Usually dry (maybe 5% for air)
- **Snare/Clap**: 15-25% for room
- **Hi-Hats**: 10-18% for space
- **Toms/Percs**: 20-30% for depth

### Bass
- **808/Sub**: 0-5% maximum
- **Mid-Bass**: 8-12% if needed
- **Bass Guitar**: 10-15% for natural space

### Melodics
- **Pads**: 30-45% for atmosphere
- **Keys**: 20-35% for natural sound
- **Plucks**: 15-25% for depth
- **Leads**: 18-28% for presence

### Vocals
- **Lead**: 12-20% for clarity with space
- **Backing**: 25-40% for depth
- **Ad-Libs**: 30-50% for contrast

## Mixing Tips

### Do's
- ✓ Use sends for cohesive space
- ✓ High-pass reverb return (remove mud)
- ✓ Match reverb to tempo/vibe
- ✓ A/B test dry vs. reverb

### Don'ts
- ✗ Too much on bass frequencies
- ✗ Same reverb amount on everything
- ✗ Forget to EQ reverb
- ✗ Drown lead elements

## Reeverb vs. Reeverb 2

**Use Fruity Reeverb when**:
- Need quick, simple reverb
- CPU is concern
- Basic room sound sufficient
- Speed over flexibility

**Use Fruity Reeverb 2 when**:
- Need detailed control
- Specific reverb character needed
- Professional polish required
- Have CPU headroom

## Advanced Techniques

### Pre-Delay Trick
1. Send to reverb with delay before it
2. Creates separation
3. Keeps transients dry

### Ducked Reverb
1. Link reverb mix to Peak Controller
2. Triggered by vocal/drums
3. Reverb reduces during hits
4. Returns between for space

### Reverse Reverb
1. Render track with reverb
2. Reverse audio
3. Bounce again
4. Reverse back
5. Reverb leads into sound

## Troubleshooting

**Sounds muddy**: Increase damping, reduce bass

**Too much wash**: Lower mix amount

**Doesn't fit track**: Adjust size to match tempo

**Harsh reverb**: Increase damping

**Can't hear it**: Increase mix or size

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Reeverb (5 Minutes)

1.  **Insert:** Load **Fruity Reeverb** onto a Snare or Clap track.
2.  **Room Size:** Drag the slider to **40%**.
3.  **Decay:** Set the knob to **1.5s**.
4.  **Diffusion:** Keep at **MAX** for a smooth sound, or **50%** for lo-fi grain.
5.  **Dampen:** Move the **HF Cut** slider up if the reverb is too "hissy."
6.  **Mix:** Adjust the **Dry** and **Reverb** sliders until the tail is audible but doesn't drown the hit. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity Reeverb

- **Neglecting the Low Cut:** Leaving the **LF Cut** at 0 on a kick drum. This creates a muddy sub-reverb that kills your mix clarity. **Fix:** Set LF Cut to at least 250Hz.
- **Micro-Room Ringing:** Setting Room Size to minimum and HF Cut to minimum. This creates a metallic "sine-wave" ringing. **Fix:** Increase the HF Cut to dampen the metallic artifacts.
- **Over-Diffusion:** Setting Diffusion to Max when you want a "textured" lo-fi sound. Low diffusion is the "soul" of this plugin.
- **Mixing 100% Wet:** Putting Reeverb 1 on an insert slot and turning the **Dry** slider to 0. You lose all punch. **Fix:** Keep Dry at 100% and use Reverb slider to taste.
- **Expecting Modern Lushness:** Trying to get a "Cloud" reverb out of Reeverb 1. It’s an old algorithm—it’s meant to be simple. **Fix:** Use **Reeverb 2** or **LuxeVerb** for expensive clouds. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points: Fruity Reeverb

| Goal | Room Size | Decay | Diffusion | Color | Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Vocal Booth** | 15% | 0.8s | 100% | Neutral | Close-up rap vocals. |
| **Lo-Fi Grain** | 50% | 2.0s | 20% | Dark | Dusty boom-bap snares. |
| **Digital Cathedral**| 100%| 5.0s | 80% | Bright | 90s style trance/pop pads.|
| **Percussion Glue** | 30% | 0.4s | 100% | Neutral | Tightening drum bus. |
| **Ghost Echoes** | 80% | 3.0s | 0% | Dull | Psychedelic synth tails. |

*Note: "Color" refers to the balance of HF Cut and LF Cut sliders.* [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Starting Points: Moody (Fruity Reeverb)

- **The Goal:** A dark, "basement" feel where the vocal feels lonely and isolated.
- **Recipe:**
  1. Load Reeverb on a **Muted Lead** or **Vocal Ad-lib**.
  2. Room Size: **35%**.
  3. Decay: **1.2s**.
  4. Diffusion: **MAX** (Smooth).
  5. **HF Cut:** Turn slider to **MAX** (Darkest setting).
  6. **LF Cut:** Set to **300Hz** (prevents rumble).
- **Result:** The reverb tail has no high-end "shimmer." It sounds muffled and distant, creating a moody, claustrophobic space.
- **Mix Tip:** Place a **Fruity Delay 2** *before* the reverb with a 50ms delay to simulate a slightly larger room without losing the mood. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey

## Upbeat (The "Rhythmic Bounce")
- **Setup:** Percussion Bus.
- **Move:** Short Decay (0.5s), Med Diffusion (60%), Low LF Cut.
- **Effect:** Adds a small "air" burst to every drum hit that drives the tempo.

## Psychedelic (The "Broken Mirror")
- **Setup:** High-pitched Arp.
- **Move:** 0% Diffusion, High Decay (4s), High Room Size.
- **Effect:** The reverb sounds like a series of distinct echoes that never quite blend into a cloud.

## Jazzy (The "Small Club")
- **Setup:** Clean Guitar.
- **Move:** 50% Room Size, 1.0s Decay, 100% Diffusion.
- **Effect:** Adds a realistic digital "halo" that makes the guitar feel like it’s in a real room.

## Vibey (The "Expensive Lo-Fi")
- **Setup:** Synth Chords.
- **Move:** 70% Room Size, 3.0s Decay, 50% HF Cut.
- **Context:** That nostalgic, slightly grainy R&B sound from the early 2000s. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\notebook-1-vs-2.md

```markdown
# Reeverb 1 vs. Reeverb 2: The Choice

Engineers often keep **Fruity Reeverb (v1)** in their toolset despite version 2 being technically superior.

| Feature | Reeverb 1 (Legacy) | Reeverb 2 (Modern) |
| :--- | :--- | :--- |
| **Sound Engine** | Static, grainy, lo-fi. | Lush, smooth, modulated. |
| **Pre-Delay** | None (Use external). | Built-in knob. |
| **Diffusion** | Highly textured (Echoes).| Very dense (Clouds). |
| **CPU Usage** | Negligible. | Very Low. |
| **Vibe Match** | Lo-Fi, 90s Rap, Glitch. | Modern R&B, Pop, Cinematic. |

## Why choose Reeverb 1?
- **Texture:** The "Diffusion" knob in v1 has a much more drastic effect on the grain of the sound.
- **CPU:** If you need to put a unique reverb on every hi-hat in a complex pattern, Reeverb 1 is your friend.
- **Simplicity:** Two sliders and three knobs. No fancy graphs to distract you. [SRC: REPUTABLE]

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Reeverb

| Parameter | Type | Range | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **ROOM SIZE** | Slider | Small to Large | **Jazzy** | **Early Ref** | Sets the dimensions of the box. |
| **DECAY** | Knob | 0 to 10s | **Vibey** | **RT60** | Controls the length of the tail. |
| **DIFFUSION** | Knob | Grainy to Smooth | **Psychedelic**| **Density** | Controls the echo density. |
| **HF CUT** | Slider | Dull to Bright | **Moody** | **Damping** | Removes high frequencies. |
| **LF CUT** | Slider | Sub to Thin | **Upbeat** | **Clarity** | Removes low frequencies. |
| **DRY** | Slider | 0 to 100% | **All** | **Presence** | Original signal level. |
| **REVERB** | Slider | 0 to 100% | **All** | **Wetness** | Reverb signal level. |

- **Vibe Impact Tag (Psychedelic):** Low Diffusion (0-20%) creates "discrete echoes" that break the sense of a real space.
- **Mix Impact Tag (Clarity):** High LF Cut is essential for preventing "reverb mud" in the sub-bass. [SRC: IL-MAN]

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Fruity Reeverb)

## 1. Sub-Bass Separation
- **Rule:** Never apply reverb to frequencies below **100 Hz** in a club track.
- **Application:** Always turn the **LF Cut** slider up to at least 200Hz. This keeps your 808s and Kicks focused while the upper harmonics can still have space.

## 2. Percussion "Snap"
- **Rule:** Reverb should not dull the "crack" of the snare.
- **Application:** Place a **Fruity Delay 2** before Reeverb 1. Set the delay to 20ms (100% wet, 0% feedback). This "pre-delay" allows the dry snare transient to hit before the reverb washes over it.

## 3. The "Mono Check" Tail
- **Rule:** Reeverb 1 tails can sometimes collapse poorly in mono.
- **Application:** Check your master in mono. If the reverb disappears, decrease the **Room Size** or increase the **Dry** signal to ensure the core sound is still audible.

## 4. Vintage Vocal "Booth"
- **Rule:** 90s vocals often sound very dry but "attached" to a space.
- **Application:** Use Room Size 10%, Decay 0.5s, and low Reverb volume (15%). It should be felt more than heard.

## 5. Gain Staging
- **Rule:** Adding Reverb increases the Peak level of your track.
- **Application:** If the Mixer track was peaking at -3dB, adding reverb might push it to 0dB. Pull down the **DRY** slider slightly to maintain your headroom. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Small Booth Simulation (Vocals)

## Step-by-Step Setup
1.  Load **Fruity Reeverb** on a dry Vocal track.
2.  Set **Room Size** to **10%**.
3.  Set **Decay** to **0.4s**.
4.  Set **Diffusion** to **100%** (Smooth).
5.  Set **HF Cut** to 30% (Bright and airy).
6.  Set **LF Cut** to 50% (Clear).
7.  Set **Reverb** mix slider to **10%**.

## Context Application
- **Hip-Hop Ad-libs:** Makes the background vocals feel like they were recorded in a separate room from the lead.
- **Vibe:** Moody/Intimate.

## Variation
- **The "Bathroom" Ad-lib:** Increase Room Size to 30% and HF Cut to 0% for a colder, reflective "bathroom" vibe. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\03_Goal_Creative_Effect.md

```markdown
# Goal: Lo-Fi 90s Reverb (Grainy Texture)

## Routing Context
- **Target:** Boom-Bap Snare, Lo-Fi Piano, or Vintage Synth.
- **Position:** Insert Slot 1.

## Step-by-Step Setup
1.  Load **Fruity Reeverb**.
2.  Set **Room Size** to **60%**.
3.  Set **Decay** to **2.5s**.
4.  **The Secret:** Set **Diffusion** to **15%**. (Listen for the "echoey" grain).
5.  **Color:** Move **HF Cut** to 70% (Darkens the tail).
6.  Set **LF Cut** to 20% (Leaves some low-mid "mud" for authenticity).
7.  Set **Reverb** slider to **25%**, **Dry** to **100%**.

## What To Listen For
- The reverb tail should sound "pixelated" or "grainy." It shouldn't be a smooth cloud; it should sound like a series of distinct, fast digital echoes.
- This creates that iconic "primitive digital" vibe found in early hardware samplers.

## Automation Idea
- Link the **Room Size** slider to an automation clip. During a transition, sweep it from 10% to 100%. You will hear the room "expand" with a distinctive metallic pitch-shift artifact. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-instrument\drums.md

```markdown
# Workflow: Lo-Fi Snare Glue (Reeverb 1)

## The Concept
Using Reeverb 1's low CPU and grainy diffusion to add "texture" to a dry drum kit.

## Step-by-Step
1.  Place **Fruity Reeverb** on your Snare Mixer track.
2.  Set **Diffusion** to **40%**.
3.  Set **Decay** to **0.6s**.
4.  Set **Room Size** to **40%**.
5.  **Tweak:** Adjust **LF Cut** to 300Hz so the reverb doesn't make the snare sound "boomy."

## Vibe Check
- **Upbeat:** Adds a rhythmic "dust" to every snare hit that makes the drum pattern feel more cohesive.

## Pitfalls
- **Metallic Ringing:** If the snare sounds like a metal trash can, move the **HF Cut** slider up slightly to dampen the high frequencies. [SRC: REPUTABLE]

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Reeverb (v1)

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Reeverb.
- **Key Info:** Algorithmic IIR logic, diffusion knob as echo density, lack of pre-delay knob confirmation.

## Source ID: [SRC: IL-KB]
- **Source:** Image-Line Knowledge Base - "Legacy Plugins."
- **Key Info:** Notes on why Reeverb 1 is kept for project compatibility and its unique "metallic" character.

## Source ID: [SRC: REPUTABLE]
- **Source:** "Lo-Fi Production Bible" (Community Guide).
- **Key Info:** Use of low diffusion for "bit-crushed" spatial textures, and placing reverb before distortion for wall-of-sound textures.

## Coverage Checklist
- [x] Room Size / Decay Logic
- [x] Diffusion (Grain) Mastery
- [x] Pre-Delay External Simulation
- [x] 90s Digital Reverb Workflow
- [x] Small Booth Recipe
- [x] 5 Vibe Targets (Moody, Upbeat, Psychedelic, Jazzy, Vibey)
- [x] Low-End Discipline Rules

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity Reeverb

## 1. The "90s Boom Bap" Booth
- **Mix Decision:** Small, dark room to make the MC sound "studio-dry" but natural.
- **Vibe:** Moody/Grounded.
- **Tooling:** Min Room Size + High HF Cut.

## 2. The "Cloudy" R&B Pad
- **Mix Decision:** Long, shimmering tail with high diffusion.
- **Vibe:** Vibey/Lush.
- **Tooling:** Max Diffusion + 4s Decay + Low Mix.

## 3. The "Glitchy" Trap Snare
- **Mix Decision:** Low diffusion to add a "crackling" digital echo to drum hits.
- **Vibe:** Psychedelic/Upbeat.
- **Tooling:** 20% Diffusion + med Decay.

## 4. The "Underground" Industrial Vibe
- **Mix Decision:** Reverb placed BEFORE a hard clipper or distortion unit.
- **Vibe:** Aggressive/Psychedelic.
- **Tooling:** 100% Wet Reverb -> Blood Overdrive.

```

---

## FILE: 04-Reference\pre-delay-calculation.md

```markdown
# Reference: Pre-Delay Simulation & Timing

Since **Fruity Reeverb (v1)** does not have a built-in pre-delay knob, you must use external plugins to create the professional "gap" needed for clarity.

## Why simulate Pre-Delay?
Pre-delay is the time between the dry sound and the first reverb reflection. In hip-hop, this allows the "consonants" of a rapper or the "crack" of a snare to finish before the reverb washes over them.

## The Chain
1.  **Fruity Delay 2** (Slot 1): Set to 100% Wet, 0% Feedback, Time: ~20ms.
2.  **Fruity Reeverb** (Slot 2): Your space settings.

## Common Pre-Delay Timings

| Instrument | Timing (ms) | Effect |
| :--- | :--- | :--- |
| **Lead Vocal** | 20ms - 40ms | Maximum clarity, large room feel. |
| **Snare Drum** | 10ms - 20ms | Keeps the transient "sharp." |
| **Pads/Synths**| 0ms - 5ms | Instant "atmosphere" blend. |
| **Ad-libs** | 50ms+ | Creates a "slap-back" room vibe. |

### BPM Sync Calculation
For tempo-synced pre-delay (1/64 note): 
- `Time (ms) = (60,000 / BPM) / 16`. [SRC: IL-MAN]

```

---

