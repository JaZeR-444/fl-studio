# Wave Traveller - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: CLAUDE.md

```markdown
# Wave Traveller - Project Brief & Guidelines

## Plugin Overview
Wave Traveller is FL Studio's advanced wave sequencing and granular synthesis plugin. It allows users to traverse through audio waveforms with precise control, creating evolving textures, rhythmic patterns, and complex soundscapes through sophisticated wave manipulation.

## Core Character & Capabilities
- **Wave Sequencing**: Navigate through audio waveforms with precision
- **Granular Synthesis**: Break audio into grains for unique textures
- **Time Manipulation**: Stretch, compress, and reverse audio material
- **Spatial Processing**: Advanced stereo and 3D positioning
- **Modulation Matrix**: Complex parameter relationships
- **Real-Time Control**: Live performance and expressive capabilities

## Key Applications
- Sound design for film and media
- Experimental electronic music production
- Ambient and generative music creation
- Live performance and improvisation
- Audio texture manipulation
- Rhythmic pattern generation

## Primary Controls Overview
- **Wave Position**: Navigate through source waveform
- **Grain Size**: Control size of audio grains
- **Grain Density**: Number of grains per second
- **Pitch Shift**: Transposition control
- **Time Stretch**: Tempo manipulation
- **Spread**: Stereo width and spatial positioning
- **Feedback**: Recursive processing for complexity

## Technical Foundations
- **Granular Engine**: Advanced grain-based audio processing
- **Wave Scanning**: High-resolution waveform navigation
- **Real-Time Processing**: Zero-latency algorithmic manipulation
- **Modulation System**: Comprehensive parameter interconnection
- **Audio Import**: Support for various audio formats and resolutions

## Target User Scenarios
1. **Sound Designers**: Creating unique textures and effects
2. **Electronic Producers**: Advanced synthesis techniques
3. **Film Composers**: Evolving soundscapes and transitions
4. **Live Performers**: Real-time sound manipulation
5. **Experimental Artists**: Pushing audio processing boundaries
6. **Educators**: Teaching advanced synthesis concepts

## Documentation Strategy
This plugin requires comprehensive documentation covering:
- **Technical Fundamentals**: Granular synthesis and wave sequencing theory
- **Practical Applications**: Real-world use cases and techniques
- **Creative Workflows**: From simple to complex sound design
- **Performance Techniques**: Live use and improvisation
- **Integration Methods**: Combining with other FL Studio tools
- **Advanced Concepts**: Expert-level techniques and experimentation

## Workflow Emphasis
- **Creative Exploration**: Encourage experimentation and discovery
- **Technical Mastery**: Deep understanding of parameters and concepts
- **Artistic Expression**: Using technology for creative purposes
- **Performance Readiness**: Real-time application and control
- **Integration Focus**: Working within FL Studio ecosystem

## Preset Philosophy
Wave Traveller presets should demonstrate:
- **Audio Transformation**: Creative manipulation techniques
- **Texture Generation**: From simple to complex textures
- **Rhythmic Applications**: Pattern creation and manipulation
- **Evolutionary Sound**: Changing and developing audio over time
- **Experimental Approaches**: Pushing creative boundaries

## Educational Value
Wave Traveller serves as an excellent learning tool for:
- Granular synthesis concepts
- Wave sequencing techniques
- Advanced modulation methods
- Creative audio processing
- Experimental sound design
- Live performance techniques

This plugin represents FL Studio's advanced synthesis capabilities and should be documented to reflect both its power and its complexity, making it accessible to beginners while offering depth for experts.
```

---

## FILE: README.md

```markdown
# Wave Traveller - Spline-Based Scratching

`\`\`
██╗    ██╗ █████╗ ██╗   ██╗███████╗    ████████╗██████╗  █████╗ ██╗   ██╗███████╗██╗     ██╗     ███████╗██████╗ 
██║    ██║██╔══██╗██║   ██║██╔════╝    ╚══██╔══╝██╔══██╗██╔══██╗██║   ██║██╔════╝██║     ██║     ██╔════╝██╔══██╗
██║ █╗ ██║███████║██║   ██║█████╗         ██║   ██████╔╝███████║██║   ██║█████╗  ██║     ██║     █████╗  ██████╔╝
██║███╗██║██╔══██║╚██╗ ██╔╝██╔══╝         ██║   ██╔══██╗██╔══██║╚██╗ ██╔╝██╔══╝  ██║     ██║     ██╔══╝  ██╔══██╗
╚███╔███╔╝██║  ██║ ╚████╔╝ ███████╗       ██║   ██║  ██║██║  ██║ ╚████╔╝ ███████╗███████╗███████╗███████╗██║  ██║
 ╚══╝╚══╝ ╚═╝  ╚═╝  ╚═══╝  ╚══════╝       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Scratch Generator / Sampler
**Category:** Generator / Scratching / Creative
**Official Manual:** [Image-Line Wave Traveller Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Wave%20Traveller.htm)

---

## 🎯 What is Wave Traveller?

Wave Traveller is a specialized sampler for creating realistic scratch effects and complex sample manipulation. Unlike Fruity Scratcher (which is real-time), Wave Traveller uses **Spline Paths** assigned to MIDI keys. When you press a key, the playhead travels along a drawn path (Speed/Direction) to traverse the sample. This allows for precise, repeatable, and tempo-synced scratch patterns.

**Key Capabilities:**
- **Spline Path Editor:** Draw curves representing playback speed and direction.
- **Key Assignment:** Map different scratch patterns to different MIDI notes.
- **Sample Playback:** Accurate vinyl simulation physics.
- **Tempo Sync:** Paths are defined by grid time (beats/bars).
- **Freeze/Mute:** Spline controls for stops and cuts.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **spline-physics-decoded.md** (Slope = Speed)
3. Create **parameter-cheat-sheet.md**
4. Load a vocal sample, select Note C5, and draw a "V" shape to hear a Forward-Reverse scratch.

### For Hip-Hop Producers:
1. Study **programming-baby-scratches.md**
2. Review **chirp-and-flare-patterns.md**
3. Learn **tempo-synced-rhythms.md**

### For Sound Designers:
1. Study **glitch-envelope-design.md**
2. Review **rearranging-loops-via-spline.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Piano Keyboard:** Selects the pattern slot.
  - **Graph:** X = Time, Y = Sample Position.
  - **Spline Tools:** Curve, Line, Pencil.
  - **Speed:** Global playback rate.

- [ ] **spline-physics-decoded.md**
  - **Steep Slope:** Fast playback.
  - **Flat Slope:** Stop/Silence.
  - **Down Slope:** Reverse playback.

#### 02-Data/parameters/
- [ ] **wavetraveller-presets.json**
  `\`\`json
  {
    "plugin_name": "Wave Traveller",
    "category": "Scratching",
    "features": ["Spline Editor", "Key Mapping"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-realistic-scratches.md**
  - Drawing "mountains" (Forward/Back) synced to 1/8th notes.
  - Using the curve tension to simulate hand acceleration/deceleration.

- [ ] **glitch-loop-remixing.md**
  - Loading a drum loop.
  - Mapping different segments to keys using "Jump" lines.
  - Playing the loop in a new order.

#### 03-Workflows/by-context/
- [ ] **vocal-hook-scratch-solo.md**
- [ ] **tape-stop-fx.md**

---

## 🔬 Research Framework

### Phase 1: The Path (Week 1)
**Goal:** Control

**Tasks:**
1. Load a sample
2. Select C5
3. Draw a line from Bottom Left to Top Right (Normal playback)
4. Bend the line to create speed variations
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I set the scratch length? (Grid settings).
- What happens if the line goes off the graph? (Sample loop or silence?).

### Phase 2: The Pattern (Week 2)
**Goal:** Performance

**Tasks:**
1. Create 4 different scratch patterns on C5, C#5, D5, D#5
2. Sequence them in the Piano Roll
3. Create creating-realistic-scratches.md

---

## 📊 Plugin Specifications to Document

### Engine
- Interpolation Quality
- Max Sample Length

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it silent? (Did you draw a line? Is the note length in Piano Roll long enough?).
2. How is this different from Gross Beat? (Wave Traveller is a Generator/Instrument, Gross Beat is an Effect).

---

## 🔗 Cross-Reference with Other Plugins

Wave Traveller is often used with:
- **Fruity Scratcher** (Real-time alternative)
- **Gross Beat** (Effect version)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Wave Traveller/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── spline-physics-decoded.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── wavetraveller-presets.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-realistic-scratches.md
│   │   └── glitch-loop-remixing.md
│
└── 04-Reference/
    └── scratch-technique-names.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Wave Traveller Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Wave%20Traveller.htm)
- [Wave Traveller Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Wave_Traveller_tutorials.htm)
- [Wave Traveller Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+wave+traveller+tutorial)

### Community Resources
- [Wave Traveller Subreddit](https://www.reddit.com/r/FL_Studio/search?q=wave+traveller&restrict_sr=1)
- [Wave Traveller User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Wave Traveller Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Scratch Techniques Fundamentals" - Understanding turntablism
- "Spline-Based Audio Manipulation" - Advanced sample manipulation
- "Hip-Hop Production Techniques" - Using scratches in production

### Advanced Techniques
- **Spline Physics:** Understanding slope and speed relationships
- **Scratch Programming:** Creating complex scratch patterns
- **Sample Manipulation:** Advanced sample editing techniques

---

## 📚 In-Depth Technical Analysis

### Spline-Based Architecture
Wave Traveller implements sophisticated spline-based sample manipulation:
- **Spline Path System:** Curved paths determine playback trajectory
- **Speed Mapping:** Slope of spline determines playback speed
- **Direction Control:** Path direction determines forward/reverse playback
- **Real-time Processing:** Immediate response to spline changes
- **Precision Control:** Frame-accurate sample positioning

### Sample Playback Engine
The internal sample playback system features:
- **High-Quality Interpolation:** Ensures smooth playback during speed changes
- **Direction Handling:** Manages forward and reverse playback seamlessly
- **Boundary Management:** Handles sample start/end boundaries
- **Loop Control:** Manages sample looping behavior
- **Pitch Accuracy:** Maintains pitch relationship to speed

### Spline Physics System
The spline physics system works as follows:
- **X-Axis:** Represents time (horizontal movement along path)
- **Y-Axis:** Represents sample position (vertical position in sample)
- **Slope Calculation:** Steep slopes = fast playback, shallow = slow
- **Direction Determination:** Upward slope = forward, downward = reverse
- **Speed Mapping:** Mathematical relationship between slope and playback speed

### MIDI Integration
The plugin integrates with MIDI as follows:
- **Key Mapping:** Each MIDI note maps to a different spline pattern
- **Note Duration:** Determines how long the playback follows the spline
- **Velocity Response:** May affect playback characteristics
- **Polyphony:** Supports multiple simultaneous spline paths
- **Channel Handling:** Responds to MIDI channel messages

### Signal Processing Chain
The internal architecture processes audio as follows:
- **Input Stage:** Sample loading and preparation
- **Spline Processing:** Path interpretation and speed calculation
- **Playback Engine:** Sample playback based on spline path
- **Direction Control:** Forward/reverse playback management
- **Output Stage:** Final signal routing and monitoring

### Spline Editing System
The spline editor provides sophisticated editing capabilities:
- **Curve Tools:** Create smooth curved paths
- **Line Tools:** Create straight path segments
- **Pencil Tools:** Draw freehand paths
- **Point Editing:** Adjust individual spline points
- **Path Smoothing:** Automatic path optimization

## 🎛️ Parameter Deep Dive

### Spline Path Controls
- **Function:** Defines the playback trajectory through the sample
  - Range: Full sample duration on X-axis, full sample position on Y-axis
  - Effect: Controls how playback traverses the sample
  - Use for: Creating scratch patterns and sample manipulation
  - Pro tip: Steep slopes create fast playback, shallow create slow
- **Behavior:**
  - Upward slope: Forward playback
  - Downward slope: Reverse playback
  - Steep slope: Fast playback speed
  - Shallow slope: Slow playback speed
  - Flat: Pause/silence
  - Pro tip: Use combination of slopes for complex patterns
- **Applications:**
  - Scratch patterns: Create forward/backward scratch movements
  - Loop manipulation: Create complex loop arrangements
  - Sample slicing: Navigate to specific sample points
  - Creative effects: Create unusual playback patterns
  - Pro tip: Use for precise sample navigation

### Sample Position Mapping
- **Y-Axis Function:** Maps vertical position to sample location
  - Range: Top of graph = end of sample, bottom = start of sample
  - Effect: Determines which part of sample is played
  - Use for: Navigating to specific sample points
  - Pro tip: Use for precise sample point access
- **Behavior:**
  - Higher Y position: Later in sample
  - Lower Y position: Earlier in sample
  - Pro tip: Use for sample point navigation
- **Applications:**
  - Sample navigation: Navigate to specific points
  - Loop creation: Create complex loop arrangements
  - Sample slicing: Access specific sample sections
  - Creative manipulation: Unusual sample navigation
  - Pro tip: Use for precise sample access

### Time Mapping Controls
- **X-Axis Function:** Maps horizontal position to time progression
  - Range: Left to right represents time progression
  - Effect: Controls how long playback takes to traverse path
  - Use for: Controlling scratch duration and timing
  - Pro tip: Use for tempo-synced scratch patterns
- **Behavior:**
  - Wider path: Longer playback time
  - Narrower path: Shorter playback time
  - Pro tip: Match to musical timing for precision
- **Applications:**
  - Timing control: Control scratch duration
  - Rhythmic patterns: Create rhythmic scratch patterns
  - Tempo sync: Sync to project tempo
  - Creative timing: Unusual timing patterns
  - Pro tip: Use for musical timing precision

### Global Speed Control
- **Function:** Adjusts overall playback speed
  - Range: Variable (typically 0.1x to 4.0x)
  - Effect: Multiplies all spline-based speed calculations
  - Use for: Overall speed adjustment
  - Pro tip: Use for global tempo matching
- **Behavior:**
  - Low values: Slower overall playback
  - High values: Faster overall playback
  - Pro tip: Use for tempo matching
- **Applications:**
  - Tempo matching: Match to project tempo
  - Speed adjustment: Overall speed control
  - Creative effects: Extreme speed changes
  - Performance: Adjust for different contexts
  - Pro tip: Use for project integration

### Grid and Quantization Controls
- **Function:** Controls the grid for spline snapping
  - Range: Various note values (1/4, 1/8, 1/16, etc.)
  - Effect: Snaps spline points to musical timing
  - Use for: Creating rhythmically precise patterns
  - Pro tip: Use for tempo-synced scratch patterns
- **Behavior:**
  - Smaller values: More precise timing control
  - Larger values: More quantized timing
  - Pro tip: Match to musical context
- **Applications:**
  - Rhythmic precision: Create precise rhythmic patterns
  - Tempo sync: Sync to project timing
  - Pattern creation: Create quantized patterns
  - Creative quantization: Unusual quantization patterns
  - Pro tip: Use for musical timing precision

## 🎼 Sound Design Applications

### Turntablism Applications
Using Wave Traveller for DJ techniques:

**Basic Scratching:**
- **Baby Scratch:** Simple forward/back movement
  - Draw a simple up/down path
  - Essential for turntablism basics
  - Perfect for beginners
  - Pro tip: Start with simple movements

- **Transformer Scratch:** Forward/back with scratch motion
  - Draw a zigzag pattern with alternating slopes
  - Essential for advanced turntablism
  - Perfect for rhythmic scratching
  - Pro tip: Use for classic transformer effect

- **Chirp Scratch:** Forward-back-forward movement
  - Create a V-shaped pattern with return
  - Essential for complex scratching
  - Perfect for rhythmic patterns
  - Pro tip: Use for chirp effect

### Creative Sample Manipulation
Using Wave Traveller for experimental applications:

**Loop Manipulation:**
- **Loop Remixing:** Rearranging loop segments
  - Map different loop sections to different keys
  - Create new arrangements from existing loops
  - Essential for creative loop manipulation
  - Perfect for sample-based music
  - Pro tip: Use for creative loop remixing

- **Stutter Effects:** Creating rhythmic stutter patterns
  - Draw short back-and-forth paths
  - Create rhythmic stutter effects
  - Essential for electronic music
  - Perfect for rhythmic interest
  - Pro tip: Use for glitch and breakcore sounds

- **Granular Effects:** Creating granular textures
  - Draw many small, rapid paths
  - Create evolving granular textures
  - Essential for ambient music
  - Perfect for evolving textures
  - Pro tip: Use for ambient and experimental music

### Sound Design Applications
Using Wave Traveller for creative sound design:

**Texture Creation:**
- **Evolutionary Textures:** Creating evolving textures
  - Draw complex, evolving spline paths
  - Create textures that evolve over time
  - Perfect for ambient and experimental music
  - Essential for evolving textures
  - Useful for atmospheric soundscapes

- **Rhythmic Textures:** Creating rhythmic patterns
  - Draw rhythmic spline patterns
  - Create rhythmic textural elements
  - Perfect for electronic music
  - Essential for rhythmic textures
  - Useful for evolving rhythmic patterns

- **Atmospheric Effects:** Creating atmospheric manipulation
  - Draw smooth, flowing spline paths
  - Create evolving atmospheric effects
  - Perfect for ambient music
  - Essential for atmospheric soundscapes
  - Useful for evolving atmospheres

### Creative Applications
Using Wave Traveller for experimental effects:

**Glitch Effects:**
- **Glitch Patterns:** Creating complex glitch patterns
  - Draw erratic spline paths
  - Create unpredictable glitch effects
  - Perfect for experimental music
  - Essential for glitch music
  - Useful for unique sonic textures

- **Glitch Sequences:** Creating evolving glitch sequences
  - Draw evolving spline patterns
  - Create sequences that develop over time
  - Perfect for IDM and experimental music
  - Essential for evolving glitch effects
  - Useful for complex glitch patterns

- **Glitch Textures:** Creating glitch-based textures
  - Draw complex spline patterns
  - Create textured glitch effects
  - Perfect for experimental music
  - Essential for textured glitches
  - Useful for unique sonic textures

## 🧪 Experimental Techniques

### Advanced Spline Applications
Creative uses of Wave Traveller's spline capabilities:

**Complex Path Programming:**
- **Multi-Directional Paths:** Creating paths that move in multiple directions
  - Draw paths that go forward, backward, and pause
  - Create complex navigational patterns
  - Perfect for advanced sample manipulation
  - Essential for sophisticated navigation
  - Useful for complex sample manipulation

**Rhythmic Pattern Creation:**
- **Polyrhythmic Patterns:** Creating complex rhythmic patterns
  - Draw patterns that create polyrhythmic effects
  - Use different slopes for different rhythmic values
  - Perfect for complex rhythmic music
  - Essential for polyrhythmic scratching
  - Useful for complex rhythmic patterns

**Temporal Effects:**
- **Time-Stretched Patterns:** Creating evolving temporal effects
  - Draw patterns that evolve over time
  - Use for evolving textural effects
  - Perfect for ambient and experimental music
  - Essential for evolving temporal effects
  - Useful for evolving textural patterns

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Spline Automation:** Automating spline parameters for evolving effects
  - Create evolving spline patterns
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic spline expression
  - Use for expressive spline control

**Modulation Applications:**
- **Parameter Modulation:** Using external modulation sources
  - Modulate spline parameters with audio
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving spline effects
  - Use for dynamic spline expression

**Multi-Stage Processing:**
- **Complex Spline Enhancement:** Multiple processing stages for sophisticated effects
  - Create multi-stage spline enhancement
  - Apply different processing to different stages
  - Build sophisticated spline processing chains
  - Perfect for advanced sound design
  - Use for complex spline processing

## 🎚️ Workflow Optimization

### Scratch Programming Workflows
Efficient approaches to using Wave Traveller for scratching:

**Pattern Creation:**
- **Template Approach:** Create scratch pattern templates
  - Develop standard scratch patterns
  - Use for consistent scratch programming
  - Essential for efficient scratch programming
  - Pro tip: Create templates for common scratch types

- **Rhythmic Programming:** Program scratches to musical timing
  - Use grid quantization for precision
  - Match scratch patterns to project tempo
  - Essential for musical scratching
  - Pro tip: Use for tempo-synced scratching

**Sample Preparation:**
- **Sample Optimization:** Prepare samples for optimal scratching
  - Use high-quality samples for best results
  - Trim samples to appropriate length
  - Essential for quality scratch results
  - Pro tip: Use for optimal scratch quality

### Integration Workflows
Working with other plugins and tools:

**Effects Integration:**
- **Pre-Effects:** Using before other effects
  - Apply before reverb for spatial effects
  - Use before delay for rhythmic patterns
  - Essential for proper signal flow
  - Pro tip: Use for scratch enhancement

- **Post-Effects:** Using after other effects
  - Apply after reverb for processed spatial effects
  - Use after delay for processed rhythmic patterns
  - Essential for final processing
  - Pro tip: Use for final scratch shaping

**Analysis Integration:**
- **Spectrum Analysis:** Using with spectrum analyzers for feedback
  - Monitor frequency changes in real-time
  - Compare with reference tracks
  - Essential for informed parameter control
  - Pro tip: Use for visual feedback

## 🎧 Genre-Specific Applications

### Hip-Hop and Rap
- **Scratch Programming:** Creating turntable-style scratch effects
- **Sample Chopping:** Manipulating sample-based elements
- **Rhythmic Effects:** Creating rhythmic scratch patterns
- **Energy Management:** Using scratches for track energy
- **Build-up Effects:** Creating tension with scratch automation

### Electronic Dance Music
- **Glitch Effects:** Creating complex glitch patterns
- **Rhythmic Manipulation:** Creating rhythmic sample manipulation
- **Texture Creation:** Creating evolving textural elements
- **Energy Management:** Using manipulation for track energy
- **Build-up Effects:** Creating tension with sample manipulation

### Experimental and Ambient
- **Atmospheric Manipulation:** Creating evolving textures
- **Spatial Effects:** Advanced spatial parameter control
- **Experimental Manipulation:** Pushing boundaries of sample manipulation
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Wave Traveller works well with various effects:
- **Reverb:** Adding space to manipulated samples
- **Delay:** Creating rhythmic patterns with manipulation
- **Chorus:** Adding width to manipulated samples
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of manipulated signals

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
Wave Traveller was developed as a specialized scratching tool:
- Created to provide precise, repeatable scratch patterns
- Designed for hip-hop and turntablism applications
- Developed with sample manipulation in mind
- Intended to complement traditional sampler approaches

### Evolution Through FL Studio Versions
- Initially introduced with basic spline functionality
- Enhanced with additional editing tools
- Improved with better sound quality and stability
- Expanded with more sophisticated spline controls

### Impact on Music Production
Wave Traveller has influenced music production by:
- Providing precise scratch pattern creation
- Enabling repeatable scratch performances
- Facilitating sample-based composition
- Supporting various musical genres with scratching

## 🧠 Advanced Processing Techniques

### Spline Mastery
Advanced techniques for spline manipulation:
- **Path Optimization:** Creating efficient spline paths
- **Speed Control:** Managing playback speed relationships
- **Direction Management:** Controlling forward/reverse playback
- **Timing Precision:** Creating rhythmically accurate patterns
- **Creative Navigation:** Using splines for unique navigation

### Scratch Programming
Advanced scratch programming techniques:
- **Pattern Complexity:** Creating complex scratch patterns
- **Rhythmic Precision:** Syncing to musical timing
- **Dynamic Expression:** Creating expressive scratch performances
- **Technical Execution:** Executing complex scratch patterns
- **Creative Applications:** Using scratches for unique effects

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique spline-controlled textures
- **Atmospheric Processing:** Building ambient spline-controlled effects
- **Rhythmic Effects:** Creating rhythmic spline patterns
- **Spatial Manipulation:** Creating immersive spline-controlled environments
- **Experimental Processing:** Pushing boundaries of spline control

## 📊 Performance Considerations

### CPU Usage
Managing Wave Traveller's impact on system performance:
- **Spline Processing:** Complex splines may increase CPU usage
- **Real-Time Performance:** Generally optimized for live performance
- **Sample Complexity:** Large samples may increase CPU usage
- **Parameter Automation:** Automated parameters have minimal CPU impact
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Interpolation Quality:** Maintaining smooth playback transitions
- **Phase Coherence:** Maintaining phase relationships
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output
- **Signal Integrity:** Preserving original signal quality

### System Integration
Optimizing Wave Traveller within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimal audio latency

## 🛠️ Troubleshooting Common Issues

### Spline Problems
- **No Sound:** Verify spline path is drawn and note length is sufficient
- **Unexpected Direction:** Check slope direction on spline
- **Phase Issues:** Check stereo field and width settings
- **Timing Issues:** Verify grid settings and quantization
- **Playback Problems:** Check sample boundaries and looping

### Technical Issues
- **High CPU Usage:** Simplify spline paths or optimize parameters
- **Latency Issues:** Check buffer settings
- **Clipping:** Reduce input gain or increase output headroom
- **Artifacts:** Check sample rate and bit depth settings
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Adjust spline patterns for better results
- **Lack of Character:** Use more complex spline patterns
- **Poor Integration:** Use appropriate spline patterns for the source
- **Overpowering:** Reduce spline complexity or use EQ to balance
- **Lack of Control:** Use simpler spline patterns for precision

## 🎚️ Advanced Configuration

### Custom Scratch Setups
Creating and managing custom scratch configurations:
- **Hip-Hop Setups:** Optimized for hip-hop scratching applications
- **Electronic Setups:** Configured for electronic music applications
- **Creative Setups:** Set up for sound design applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple Wave Traveller instances effectively:
- **Sample-Specific:** Different instances for different samples
- **Pattern-Specific:** Different instances for different scratch patterns
- **Performance Optimization:** Managing multiple instances
- **Creative Applications:** Combining different spline manipulations

### Integration Configurations
Optimizing for different integration scenarios:
- **Insert Processing:** Inline processing configurations
- **Send Processing:** Effects return configurations
- **Hardware Integration:** External hardware integration
- **DAW Integration:** Optimizing for FL Studio workflow

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Wave Traveller techniques
- **Reddit Groups:** Sharing scratching techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced scratching techniques
- **Written Guides:** In-depth articles on spline-based manipulation
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Spline Libraries:** Websites hosting Wave Traveller configurations
- **Technique Sharing:** Platforms for sharing manipulation methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Program a realistic "Transformer" scratch using spline paths
- [ ] Map 5 different scratch variations to 5 different MIDI keys
- [ ] Explain the relationship between spline slope and playback speed
- [ ] Create a tempo-synced scratch pattern that follows the grid
- [ ] Use spline paths to rearrange a drum loop in real-time
- [ ] Apply appropriate spline patterns for different musical genres
- [ ] Troubleshoot spline path and playback issues effectively
- [ ] Integrate Wave Traveller into efficient scratching workflows
- [ ] Create complex scratch patterns with precise timing
- [ ] Optimize spline paths for minimal CPU usage
- [ ] Use Wave Traveller for creative sound design applications
- [ ] Set up advanced scratch routing for complex projects
- [ ] Apply Wave Traveller in live performance scenarios
- [ ] Create experimental scratch effects with extreme spline patterns
- [ ] Combine Wave Traveller with other effects for layered processing
- [ ] Integrate Wave Traveller with other automation tools seamlessly
- [ ] Create custom scratch workflows for specific creative needs
- [ ] Use Wave Traveller effectively in large, complex projects
- [ ] Design custom spline patterns for specific musical expressions
- [ ] Use Wave Traveller for both rhythmic and melodic sample manipulation

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\granular-synthesis-fundamentals.md

```markdown
# Granular Synthesis Fundamentals

## Understanding Granular Synthesis

### What is Granular Synthesis?
Granular synthesis is a sound synthesis method that operates on the microsound time scale. It works by breaking down audio into tiny pieces called "grains" (typically 1-50 milliseconds each) and then reorganizing these grains to create new sounds.

### The Basic Concept
`\`\`
Original Audio ──► Grain Extraction ──► Grain Manipulation ──► Grain Reassembly ──► New Sound
`\`\`

**Key Principle**: By controlling grain size, density, position, and pitch, we can completely transform the character of the original audio while maintaining some of its essential qualities.

## Core Granular Parameters Explained

### Grain Size: The Building Block Unit
**Technical Definition**: Duration of each individual grain
- **Micro Grains** (1-10ms): Produce noise-like, textural sounds
- **Short Grains** (10-30ms): Create rhythmic, percussive effects
- **Medium Grains** (30-100ms): Musical, recognizable source material
- **Long Grains** (100ms+): Smooth, continuous textures

**Psychoacoustic Effect**: Grains shorter than ~20ms are perceived as texture rather than pitched content, while longer grains maintain more of the original pitch and timbre.

### Grain Density: The Cloud Formation
**Technical Definition**: Number of grains generated per second
- **Sparse Density** (1-10Hz): Isolated grains, pointillistic texture
- **Medium Density** (10-50Hz): Overlapping grains, continuous sound
- **High Density** (50-100Hz): Dense cloud, noise-like quality

**Cloud Formation**: Higher density creates overlapping grains that blend together, forming continuous soundscapes. Lower density creates rhythmic, separated events.

### Grain Window: The Audio Envelope
**Window Function**: Shapes the attack and decay of each grain to avoid clicks
- **Hanning Window**: Smooth fade-in and fade-out
- **Hamming Window**: Slightly different envelope shape
- **Cosine Window**: Smooth, rounded envelope

**Purpose**: Prevents clicks and pops when grains start and stop, creates smooth transitions between grains.

## Wave Scanning vs Traditional Sampling

### Traditional Sampling
`\`\`
Play Sample from Start → End
Speed: Fixed or pitch-controlled
Direction: Forward only (usually)
Manipulation: Limited to pitch/time
`\`\`

### Wave Scanning (Wave Traveller's Approach)
`\`\`
Access Any Point → Any Time → Any Direction → Any Speed
Position: Random or controlled
Direction: Forward, reverse, random
Manipulation: Complete freedom
`\`\`

**Advantages of Wave Scanning**:
- Non-linear audio access
- Real-time position jumping
- Bidirectional playback
- Independent pitch and time control

## The Granular Continuum

### From Texture to Recognition
As you move from micro to macro grain sizes, you traverse a continuum:

`\`\`
Noise (1-5ms) → Texture (5-20ms) → Rhythm (20-50ms) → Melody (50-200ms) → Sample (200ms+)
`\`\`

**Creative Implication**: You can move continuously between recognizable audio and abstract texture by adjusting grain size and density.

### The Quantum Physics Analogy
Just as quantum physics looks at matter at the smallest scales, granular synthesis looks at audio at the microsound level. Both reveal new properties and behaviors not visible at macro scales.

## Advanced Granular Concepts

### Grain Overlap and Density
**Overlap Calculation**: When Grain Size × Grain Density > 1, grains overlap
- **No Overlap**: Each grain finishes before next starts
- **Light Overlap**: Grains touch or slightly overlap
- **Heavy Overlap**: Multiple grains playing simultaneously

**Sound Implication**:
- No overlap = rhythmic, separated
- Light overlap = smooth, continuous
- Heavy overlap = dense, complex textures

### Stochastic vs Deterministic Processing

#### Deterministic Granular
- Predictable grain placement
- Regular timing
- Controlled patterns
- Musical precision

#### Stochastic Granular
- Random grain selection
- Probabilistic timing
- Chaotic textures
- Organic development

**Wave Traveller Approach**: Hybrid system allowing both deterministic (LFO control) and stochastic (random modulation) processing.

### Pitch Shifting in Granular Context

#### Granular Pitch Shift Method
1. Extract grain at position P
2. Shift grain pitch by semitones S
3. Resample grain to original duration
4. Output at correct timing

**Advantages over Traditional Pitch Shifting**:
- No time stretching artifacts
- Maintains grain character
- Real-time processing
- Extreme pitch shifts possible

#### Formant Preservation
**Traditional Pitch Shift**: Changes formants (vocal character)
**Granular Pitch Shift**: Can preserve formants by maintaining grain structure

## Spatial Granular Synthesis

### Multi-Channel Granular Processing
Each grain can have its own spatial position:
- **Stereo Field**: Left/right positioning per grain
- **3D Space**: Height, depth, width positioning
- **Movement**: Grain trajectories through space
- **Diffusion**: Spatial spread of grain cloud

**Wave Traveller Implementation**:
- Spread parameter controls overall width
- Individual grain positioning options
- Spatial modulation capabilities
- Integration with FL Studio's spatial effects

### Granular Diffusion
**Concept**: Spread grains across stereo/3D field
- **Point Source**: All grains from center
- **Wide Diffusion**: Grains spread across field
- **Dynamic Diffusion**: Movement patterns over time

## Real-Time Processing Challenges

### CPU Considerations
**Per-Grain Processing**: Each grain requires individual processing
- Window calculation
- Pitch shifting algorithm
- Spatial positioning
- Envelope generation
- Output mixing

**Optimization Strategies**:
- Limit maximum grain density
- Use efficient window functions
- Pre-calculate where possible
- Render complex patches

### Latency Management
**Buffer Trade-off**: Lower latency = higher CPU usage
- **64 samples**: ~1.5ms latency (high CPU)
- **256 samples**: ~6ms latency (balanced)
- **1024 samples**: ~23ms latency (low CPU)

**Real-Time Performance**: Choose buffer size based on complexity needs vs. latency requirements.

## Granular Synthesis Applications

### Audio Transformation
**Source Material Types**:
- **Speech**: Creates alien voices, textures
- **Music**: Abstracts melodies, creates textures
- **Nature Sounds**: Organic, evolving textures
- **Drum Loops**: Rhythmic complexity, new patterns

**Transformation Continuum**:
`\`\`
Original → Subtle Variation → Abstract Texture → Completely New Sound
`\`\`

### Musical Applications
- **Textural Pads**: Evolving background textures
- **Lead Sounds**: Granular manipulation of melodic sources
- **Rhythmic Elements**: Granular processing of percussive material
- **Sound Effects**: Cinematic, experimental sounds
- **Live Performance**: Real-time sound manipulation

### Sound Design Applications
- **Film Scores**: Evolving atmospheres, transitions
- **Game Audio**: Dynamic, responsive soundscapes
- **Ambient Music**: Generative, changing textures
- **Experimental Music**: Pushing sonic boundaries

## Wave Traveller's Unique Approach

### Integration with Traditional Workflow
- **Audio Import**: Direct file loading
- **MIDI Integration**: Note triggering
- **DAW Integration**: Automation, syncing
- **Effect Integration**: Works with other FL Studio plugins

### Creative Workflow Features
- **Visual Feedback**: Waveform display, grain visualization
- **Real-Time Control**: Immediate parameter response
- **Preset System**: Save and recall complex textures
- **Performance Mode**: Live-friendly controls

### Technical Innovations
- **High-Quality Algorithms**: Advanced grain processing
- **Efficient CPU Usage**: Optimized for real-time use
- **Flexible Routing**: Multiple send/output options
- **Extensive Modulation**: Complex parameter relationships

## Learning Path for Granular Mastery

### Beginner Stage
1. Understand grain size and density basics
2. Experiment with different source materials
3. Learn basic parameter relationships
4. Create simple textures and rhythms

### Intermediate Stage
1. Master spatial processing techniques
2. Develop complex modulation strategies
3. Create multi-layered granular patches
4. Integrate with other effects and instruments

### Advanced Stage
1. Design custom granular instruments
2. Create live performance setups
3. Develop unique granular processing chains
4. Push boundaries of granular synthesis

## Common Misconceptions

### "Granular synthesis is just stuttering effects"
**Reality**: Granular synthesis ranges from subtle texture to complete transformation, much more than simple stutter effects.

### "It's only for experimental music"
**Reality**: Granular techniques are used in mainstream music production, film scoring, and commercial applications.

### "It requires a PhD in physics"
**Reality**: Modern granular tools like Wave Traveller make complex concepts accessible through intuitive interfaces.

### "It always sounds chaotic and random"
**Reality**: Granular synthesis can be highly controlled and musical when used with proper understanding.

Understanding these fundamentals provides the foundation for creative and effective use of Wave Traveller's granular synthesis capabilities.
```

---

## FILE: 01-Learning\parameter-reference.md

```markdown
# Wave Traveller Parameter Reference

## Core Audio Processing Parameters

### Wave Position (0-100%)
**Purpose**: Selects current position within the loaded audio file
- **Range**: 0% (start) to 100% (end)
- **Resolution**: 0.1% precision
- **Control Types**: Manual, LFO, envelope follower, automation

**Technical Behavior**:
- Controls read position for grain generation
- Higher resolution than sample-level editing
- Smooth interpolation between positions
- Can create continuous motion or jumps

**Creative Applications**:
- Slow sweeps for evolving textures
- Rapid movement for chaotic effects
- Rhythmic positioning for pattern creation
- Static positioning for sustained textures

### Grain Size (1-500ms)
**Purpose**: Determines duration of individual audio grains
- **Range**: 1 millisecond to 500 milliseconds
- **Default**: 50 milliseconds
- **Effect**: Controls texture from颗粒状 (1ms) to smooth (500ms)

**Size Categories**:
`\`\`
Micro Grains (1-20ms): Noisy, textural, granular
Short Grains (20-50ms): Rhythmic, percussive, defined
Medium Grains (50-150ms): Textural, smooth, musical
Long Grains (150-500ms): Evolving, ambient, continuous
`\`\`

**Technical Implications**:
- Smaller grains = more CPU usage
- Larger grains = more pitch recognition
- Size affects perceived tempo and rhythm
- Interacts with Grain Density for texture

### Grain Density (1-100Hz)
**Purpose**: Controls number of grains generated per second
- **Range**: 1 Hz to 100 Hz (grains per second)
- **Default**: 20 Hz
- **Effect**: From sparse (1Hz) to dense (100Hz) grain clouds

**Density Categories**:
`\`\`
Sparse (1-10Hz): Pointillistic, isolated grains
Light (10-30Hz): Textural, ambient clouds
Medium (30-60Hz): Rhythmic, patterned
Dense (60-100Hz): Noise-like, continuous texture
`\`\`

**CPU Considerations**:
- Higher density = significantly more CPU usage
- Exponential CPU increase with density
- 50Hz+ may strain older computers
- Render to audio for complex patches

### Pitch Shift (-24 to +24 semitones)
**Purpose**: Transposes individual grains while maintaining playback speed
- **Range**: -24 semitones (2 octaves down) to +24 semitones (2 octaves up)
- **Resolution**: 1 semitone steps
- **Quality**: High-quality granular pitch shifting

**Pitch Applications**:
`\`\`
Harmonic: 0, ±5, ±7, ±12 semitones
Dissonant: ±1, ±2, ±3, ±6 semitones
Extreme: ±18 to ±24 semitones
Microtonal: Fine-tuning via modulation
`\`\`

**Technical Behavior**:
- Individual grain transposition
- Formant preservation options
- No time stretching artifacts
- Real-time pitch modulation

## Spatial Processing Parameters

### Spread (0-100%)
**Purpose**: Controls stereo width and spatial positioning of grains
- **Range**: 0% (mono) to 100% (maximum width)
- **Default**: 50%
- **Effect**: Spatial distribution of grain cloud

**Spread Characteristics**:
`\`\`
0-25%: Focused mono, centered image
25-50%: Narrow stereo, focused placement
50-75%: Wide stereo, spacious image
75-100%: Extreme width, immersive field
`\`\`

**Advanced Spatial Control**:
- Grain-to-grain spatial variation
- Stereo imaging based on grain position
- Movement patterns via modulation
- 3D positioning with additional processing

### Pan Position (-100 to +100)
**Purpose**: Overall stereo positioning of processed signal
- **Range**: -100 (hard left) to +100 (hard right)
- **Default**: 0 (center)
- **Control**: Manual, LFO, automation

**Pan Modulation**:
- Auto-panning effects
- Spatial movement patterns
- Dynamic positioning based on input
- Rhythmic spatial effects

## Advanced Processing Parameters

### Feedback (0-95%)
**Purpose**: Feeds processed signal back into input for recursive processing
- **Range**: 0% (no feedback) to 95% (maximum recursion)
- **Default**: 0%
- **Effect**: Creates complexity and evolving textures

**Feedback Characteristics**:
`\`\`
0-20%: Subtle thickening, gentle evolution
20-50%: Pronounced texture development
50-80%: Complex, evolving soundscapes
80-95%: Chaotic, unstable, experimental
`\`\`

**Creative Feedback Uses**:
- Infinite sustain effects
- Texture generation from simple sources
- Complex rhythmic patterns
- Experimental sound design

### Time Stretch (0.1x to 4.0x)
**Purpose**: Changes playback speed without affecting pitch
- **Range**: 0.1x (10% speed) to 4.0x (400% speed)
- **Default**: 1.0x (normal speed)
- **Algorithm**: Advanced granular time stretching

**Stretch Applications**:
`\`\`
Slow (0.1x-0.5x): Ambient, evolving textures
Normal (0.8x-1.2x): Subtle variations
Fast (1.5x-2.5x): Energetic, rhythmic
Extreme (2.5x-4.0x): High-speed, glitchy
`\`\`

## Modulation Parameters

### LFO Section
**Wave Position LFO**:
- Rate: 0.01Hz to 100Hz
- Depth: 0% to 100%
- Waveform: Sine, Triangle, Square, Saw, Random

**Grain Size LFO**:
- Rate: 0.1Hz to 50Hz
- Depth: ±50% variation
- Sync to tempo option

**Pitch LFO**:
- Rate: 0.5Hz to 20Hz
- Depth: ±12 semitones
- MIDI sync available

### Envelope Follower
**Input Source**:
- Internal audio input
- Sidechain input
- External MIDI controller
- Automation envelope

**Response Parameters**:
- Attack: 0ms to 2000ms
- Release: 10ms to 5000ms
- Sensitivity: 0% to 100%
- Smooth: 0% to 100%

## Audio Input/Output Parameters

### Input Section
**Audio Source Selection**:
- Internal audio input
- Loaded audio file
- Sidechain input
- MIDI-triggered samples

**Input Gain**:
- Range: -20dB to +20dB
- Default: 0dB
- LED metering for level monitoring

### Output Section
**Master Volume**:
- Range: -∞ to +12dB
- Default: 0dB
- Soft limiting at +6dB

**Output Routing**:
- Main output
- Send outputs (A, B, C)
- Individual grain outputs (advanced)
- MIDI output (grain position data)

## Filter Section

### Grain Filter
**Filter Type**:
- Low Pass (24dB/octave)
- High Pass (24dB/octave)
- Band Pass (12dB/octave)
- Notch (12dB/octave)

**Filter Parameters**:
- Cutoff: 20Hz to 20kHz
- Resonance: 0% to 95%
- Key follow: 0% to 100%
- Envelope amount: -100% to +100%

### Filter Envelope
**ADSR Parameters**:
- Attack: 0ms to 10s
- Decay: 0ms to 10s
- Sustain: 0% to 100%
- Release: 10ms to 20s

## Global Parameters

### Sample Rate
**Options**: 22.05kHz, 44.1kHz, 48kHz, 88.2kHz, 96kHz
**Effect**: Higher rates = better quality, more CPU usage
**Recommendation**: 44.1kHz for most applications

### Buffer Size
**Options**: 64, 128, 256, 512, 1024 samples
**Effect**: Smaller buffers = less latency, more CPU strain
**Recommendation**: 256-512 samples for balance

### Quality Mode
**Options**: Economy, Standard, High Quality
**Effect**: Trade-off between CPU usage and audio quality
**Recommendation**: Standard for most uses, High Quality for final rendering

## Preset and Recall Parameters

### Preset Management
**Save/Load**: Full parameter state saving
**Categories**: User-defined preset organization
**Search**: Text-based preset finding
**Import/Export**: Cross-platform preset sharing

### Recall Options
**MIDI Learn**: Assign any parameter to MIDI controller
**Automation**: Full DAW automation support
**Randomize**: Parameter randomization with constraints
**Compare**: A/B comparison of different settings

## Technical Specifications

### Performance Metrics
- **Latency**: Variable (based on buffer size)
- **CPU Usage**: 5-40% depending on settings
- **Memory**: 100-500MB based on audio file size
- **Polyphony**: Unlimited grains (CPU-limited)

### Audio Quality
- **Sample Rate**: Up to 192kHz support
- **Bit Depth**: 16, 24, 32-bit floating point
- **Dynamic Range**: 144dB theoretical
- **THD+N**: <0.01% typical

This parameter reference provides comprehensive understanding of Wave Traveller's extensive control set for mastering granular synthesis and wave sequencing techniques.
```

---

## FILE: 01-Learning\quick-start-guide.md

```markdown
# Wave Traveller Quick Start Guide

## Getting Started in 60 Seconds

### Your First Wave Traveller Experience
1. **Load Plugin**: Insert Wave Traveller on any audio track or mixer channel
2. **Load Audio**: Click the waveform display and choose an audio file
3. **Start Simple**: Set Grain Size to 50ms, Grain Density to 20Hz
4. **Move Wave Position**: Drag the position slider to explore the audio
5. **Add Movement**: Slowly modulate Wave Position with LFO for texture

## Basic Controls Overview

### The Essential Four Parameters
1. **Wave Position** (0-100%): Where you are in the audio file
2. **Grain Size** (1-500ms): Length of each audio grain
3. **Grain Density** (1-100Hz): How many grains per second
4. **Pitch Shift** (-24 to +24 semitones): Transposition of grains

### Quick Sound Categories

#### Smooth Textures
`\`\`
Grain Size: 100-200ms
Grain Density: 10-30Hz
Wave Position: Slow movement
Pitch Shift: 0 semitones
`\`\`

#### Rhythmic Patterns
`\`\`
Grain Size: 10-50ms
Grain Density: 30-80Hz
Wave Position: Synced to tempo
Pitch Shift: Rhythmic changes
`\`\`

#### Chaos & Noise
`\`\`
Grain Size: 1-20ms
Grain Density: 50-100Hz
Wave Position: Random movement
Pitch Shift: Extreme modulation
`\`\`

## First Sound Experiments

### Experiment 1: Texture Creation
1. Load any audio file (speech, music, or field recording)
2. Set Grain Size to 150ms
3. Set Grain Density to 25Hz
4. Slowly move Wave Position from start to end
5. Result: Evolving, textural soundscape

### Experiment 2: Rhythmic Granulation
1. Load drum loop or percussive audio
2. Set Grain Size to 30ms
3. Set Grain Density to 50Hz
4. Sync Wave Position to project tempo
5. Result: Complex rhythmic patterns

### Experiment 3: Pitch Manipulation
1. Load melodic audio (vocals, instruments)
2. Set moderate grain settings (50ms, 30Hz)
3. Automate Pitch Shift from -12 to +12
4. Keep Wave Position steady
5. Result: Harmonized, alien-like textures

## Audio File Selection Guide

### Best Sources for Wave Traveller
- **Vocal recordings**: Speech, singing, vocal chops
- **Instrumental audio**: Piano, strings, guitars
- **Field recordings**: Nature sounds, urban environments
- **Drum loops**: Rhythmic source material
- **Synth sounds**: Rich harmonic content
- **Noise types**: White noise, colored noise

### File Requirements
- **Format**: WAV, AIFF, MP3, FLAC supported
- **Length**: 1 second to 5 minutes works best
- **Quality**: Higher quality = better results
- **Mono vs Stereo**: Both work, stereo offers spatial possibilities

## Common Pitfalls to Avoid

### Beginner Mistakes
❌ Using too small grain sizes (under 5ms) - creates noise
❌ Extremely high grain density (over 80Hz) - CPU intensive
❌ No movement in Wave Position - static, boring sounds
❌ Ignoring Pitch Shift - missing creative potential
❌ Using poor quality source audio

### Quick Problem Solutions
**Sound too grainy?** → Increase Grain Size to 100ms+
**No texture development?** → Add Wave Position movement
**CPU overloading?** → Reduce Grain Density
**Sound boring?** → Add Pitch Shift modulation
**Lost in source audio?** → Increase grain processing

## Performance Tips

### CPU Management
- Start with Grain Density under 30Hz
- Use shorter audio files for experimentation
- Render complex patches to audio
- Monitor CPU meter during creation

### Creative Workflow
- Save interesting settings as presets
- Record audio output for later use
- Experiment with parameter automation
- Combine with other effects for more complexity

## Basic Preset Starting Points

### "Vocal Texture" Preset
`\`\`
Wave Position: Manual sweep
Grain Size: 120ms
Grain Density: 25Hz
Pitch Shift: 0 semitones
Spread: 50%
Feedback: 20%
`\`\`

### "Rhythmic Granulator" Preset
`\`\`
Wave Position: Tempo-synced LFO
Grain Size: 25ms
Grain Density: 60Hz
Pitch Shift: Random modulation
Spread: 80%
Feedback: 40%
`\`\`

### "Ambient Evolution" Preset
`\`\`
Wave Position: Very slow LFO
Grain Size: 200ms
Grain Density: 15Hz
Pitch Shift: Gentle drift
Spread: 100%
Feedback: 60%
`\`\`

## Integration Tips

### In Your Mix
- Use on sends for texture layering
- Process individual tracks for character
- Apply to full mix for experimental effects
- Combine with reverb for spatial enhancement

### With Other Plugins
- **Reverb after**: Creates huge, evolving spaces
- **Delay before**: Inputs complex rhythms to delays
- **EQ before**: Shapes source before granulation
- **Compression after**: Controls dynamic texture

## Next Steps

Once comfortable with basics, explore:
- Advanced modulation routing
- Multiple instance layering
- Live performance techniques
- Complex preset creation
- Integration with FL Studio's Piano Roll

Wave Traveller rewards experimentation - spend time exploring each parameter and listening to how they interact. Your first hour should be about discovery, not perfection.
```

---

## FILE: 01-Learning\Concepts\what-is-wave-traveller.md

```markdown
Tags: lofi | hip-hop/rap | psychedelic

## What Is Wave Traveller?

Wave Traveller is FL Studio's wavetable synthesizer featuring a massive preset library, extensive modulation options, and creative sampling capabilities. It excels at creating evolving textures, aggressive basses, and atmospheric soundscapes.

### Core Architecture

**Tone targets:**
- **Lofi:** Bit-crushed, filtered, vintage warmth
- **Atmospheric:** Evolving pads, complex textures
- **Aggressive:** Hard basses, metallic textures, evolving leads

**Signal Flow:**
`\`\`
Wavetable Selection → Oscillator Processing → Filter → Modulation → Output
    ↓                    ↓                   ↓           ↓
Resampling          Wave shaping        8 filter      Envelopes
Interpolation       Spectral FX        types         LFOs
`\`\`

### What Makes Wave Traveller Unique

1. **Massive Preset Library:** 500+ built-in wavetables
2. **Spectral Processing:** Advanced wave manipulation
3. **Resampling:** Internal signal feedback for evolution
4. **Complex Modulation:** 3 envelopes + 3 LFOs + modulation matrix

### Key Parameters

| Parameter | Function | Typical Range |
|-----------|----------|---------------|
| Wavetable | Source waveform | 100s of options |
| Position | Scan through wavetable | Creates movement |
| Mutate | Spectral transformation | Radical changes |
| Resample | Feedback for evolution | 0-100% |
| Filter | Tone shaping | 8 types, 24dB/oct |

### Classic Wave Traveller Sounds

**Lofi Piano:**
1. Piano wavetable
2. Low-pass filter at 70%
3. Resample: 30% (slow evolution)
4. Reverb send
5. Bit reduction in Fruity LoTope

**Aggressive Bass:**
1. Aggressive wavetable
2. Position: 70%
3. High-pass filter on input
4. Low-pass filter on output
5. Heavy modulation on position

**Ethereal Pad:**
1. Complex wavetable
2. Slow LFO on position
3. Reverb and delay sends
4. High-resonance filter sweeps

### Typical Mistakes

| Mistake | Result | Fix |
|---------|--------|-----|
| Too much resampling | Uncontrolled evolution | Keep under 50% |
| Wrong wavetable for genre | Mismatch | Browse presets for reference |
| No modulation plan | Static sound | Program envelopes/LFOs |
| Filter too open | Harsh sound | Cut back to 60-70% |
| Ignoring position control | Missed character | Sweep position for variety |

### First Adjustments by Goal

**For lofi hip-hop:**
1. Start with "Piano" or "Keys" category
2. Add low-pass filter
3. Set resample to 20-40%
4. Add subtle LFO to position

**For atmospheric:**
1. Choose "Texture" or "Atmosphere" wavetable
2. Slow LFO to position
3. High resonance filter sweeps
4. Effects sends (reverb, delay)

**For aggressive bass:**
1. Select "Aggressive" or "Bass" category
2. Set position to 60-80%
3. Heavy modulation to position
4. Parallel compression

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Wave Traveller - Parameter Cheat Sheet

**Plugin Type:** Vinyl Scratch Simulator & Sample Manipulator
**Category:** Creative Effect / DJ Tool
**Official Manual:** [Wave Traveller](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Wave%20Traveller.htm)

---

## Main Controls

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Position** | 0-100% | Playback position in sample | Automate for scratch effects |
| **Speed** | -200% to +200% | Playback speed/direction | 100% = normal, negative = reverse |
| **Crossfade** | 0-100ms | Smooths position jumps | Higher = smoother, lower = more aggressive |
| **Loop Mode** | Off/Forward/Ping-Pong | Playback looping behavior | Ping-pong for back-and-forth scratching |

---

## Scratch Modes

| Mode | Description | Use Case |
|------|-------------|----------|
| **Manual** | User controls position directly | Automation or MIDI control |
| **Auto Scratch** | Built-in scratch patterns | Quick scratch effects |
| **Follow Speed** | Scratching follows speed changes | Realistic turntable behavior |

---

## Sample Loading

| Control | Function | Tip |
|---------|----------|-----|
| **Load Sample** | Import audio file | WAV, MP3, OGG supported |
| **Sample Start** | Beginning trim point | Skip intro silence |
| **Sample End** | Ending trim point | Cut off tail |
| **Sample Root** | Reference pitch | Match to project key |

---

## Vinyl Simulation

| Parameter | Range | Function | Authenticity |
|-----------|-------|----------|--------------|
| **Vinyl Noise** | 0-100% | Adds crackle and pop | 20-40% for subtle vintage vibe |
| **Wow & Flutter** | 0-100% | Pitch instability | Simulates worn turntable |
| **Motor Lag** | 0-100% | Spin-up/spin-down time | Realistic start/stop behavior |

---

## Quick Start Techniques

| Technique | Settings | Automation |
|-----------|----------|------------|
| **Baby Scratch** | Manual mode, moderate crossfade | Position: back-and-forth |
| **Chirp Scratch** | Fast crossfade, follow speed | Position: quick forward jumps |
| **Crab Scratch** | Very fast crossfade | Position: rapid staccato movements |
| **Transform Scratch** | Loop mode, position automation | Speed: rhythmic on/off |
| **Vinyl Stop** | Motor lag 60%+ | Speed: 100% to 0% |

---

## Scratch Pattern Guide

### Baby Scratch (Beginner)
- **Movement:** Slow back-and-forth
- **Position Range:** 40-60%
- **Speed:** Constant 100%
- **Crossfade:** 30ms

### Scribble Scratch
- **Movement:** Fast random position jumps
- **Position Range:** Full range (0-100%)
- **Speed:** Varies
- **Crossfade:** 5-10ms (tight)

### Transformer
- **Movement:** On/off rhythmic cuts
- **Position:** Fixed or slowly moving
- **Speed:** 0% (cut) / 100% (play)
- **Crossfade:** Very low (0-5ms)

---

## BPM Sync & Timing

| Feature | Function | Use Case |
|---------|----------|----------|
| **Sync to Host** | Lock playback to project tempo | Time-stretched loops |
| **Manual BPM** | Set sample's original BPM | Accurate time-stretching |
| **Stretch Mode** | Time-stretch algorithm | High quality for melodic, low for drums |

---

## DJ Techniques Simulation

### Vinyl Stop Effect
1. **Speed:** 100%
2. **Automate:** Speed to 0% over 1-2 bars
3. **Motor Lag:** 70-80%
4. **Result:** Realistic turntable slowdown

### Backspin
1. **Speed:** Start at 100%
2. **Automate:** Speed to -100% quickly
3. **Motor Lag:** Low (20%)
4. **Result:** Rewind effect

### Chop/Stutter
1. **Position:** Automate to repeat small section
2. **Loop Mode:** Forward
3. **Crossfade:** 5-15ms
4. **Result:** Rhythmic sample chopping

---

## Sample Source Ideas

### Drum Loops
- **Use:** Create scratch patterns with drums
- **Tip:** Use snare or cymbal hits for punchy scratches

### Vocal Samples
- **Use:** Classic DJ scratch vocals ("Fresh!", "Ah yeah!")
- **Tip:** Short, punchy words work best

### Sound Effects
- **Use:** Scratch siren, horn, or laser sounds
- **Tip:** Harmonic content scratches better than noise

### Music Loops
- **Use:** Full instrumental loops for mixing
- **Tip:** Match BPM to project for seamless integration

---

## Automation Strategies

### MIDI Control
- **Position:** Map to mod wheel or pitch bend
- **Speed:** Map to fader or knob
- **Crossfade:** Map to expression controller
- **Result:** Real-time scratch performance

### Pattern Automation
- **Draw Curves:** Create scratch patterns in automation clips
- **LFO:** Use LFO tool for rhythmic scratching
- **Step Sequences:** Stutter and chop effects

---

## Mixing Integration

### EQ Suggestions
- **High-Pass:** 80-100Hz to remove low-end rumble from scratching
- **Boost:** 2-5kHz for scratch clarity and cut-through
- **Cut:** 200-400Hz if muddy

### Compression
- **Ratio:** 3:1 to 6:1
- **Attack:** Fast (catch transients)
- **Release:** Medium
- **Why:** Scratching has extreme dynamics

### Effects After Wave Traveller
- **Reverb:** For space (use sparingly)
- **Delay:** Echo scratch patterns
- **Distortion:** Add aggression to scratches

---

## Genre Applications

| Genre | Typical Use |
|-------|-------------|
| **Hip-Hop** | Classic DJ scratching, vocal chops |
| **Turntablism** | Complex scratch routines |
| **EDM** | Build-up vinyl stops, drops |
| **Glitch Hop** | Chopped and screwed vocals |
| **Experimental** | Abstract sample manipulation |

---

## Famous Scratch Sounds

### Classic Scratch Samples
- **"Ah" / "Fresh"** - Vocal scratches (Fab 5 Freddy)
- **"Ahhhhhh"** - Long scream/siren scratch
- **Cymbal Crash** - Percussive scratch element
- **Horn Stab** - Melodic scratch sound

### Reference Artists
- **DJ Qbert** - Turntablist pioneer
- **Mix Master Mike** - Beastie Boys DJ
- **DJ Shadow** - Sampling and scratching innovator
- **Cut Chemist** - Creative sample manipulation

---

## Performance Tips

### Live Scratching
1. **Map Position to Controller:** Fader or XY pad
2. **Practice Patterns:** Start with baby scratch
3. **Use Headphones:** Monitor cue point
4. **Record Takes:** Capture best performance

### Programmed Scratching
1. **Draw Automation:** Precise control
2. **Use Step Sequencer:** Rhythmic scratches
3. **Layer Scratches:** Multiple Wave Traveller instances
4. **Quantize:** Snap to grid for tight timing

---

## CPU & Performance

- **CPU Usage:** Low to moderate
- **Latency:** Minimal (suitable for live use)
- **Sample Loading:** RAM-based (entire sample loaded)
- **Realtime Safe:** Yes

---

## Common Mistakes to Avoid

1. **Too Much Crossfade:** Makes scratches mushy (use 10-30ms max)
2. **No Sample Trimming:** Unwanted silence affects scratch timing
3. **Improper BPM Sync:** Time-stretched samples sound wrong
4. **Excessive Vinyl Noise:** Over 50% sounds unrealistic
5. **Static Position:** Automate position for actual scratching effect

---

## Creative Uses Beyond Scratching

### Sample Browsing
- Scrub through long samples to find interesting sections
- Use as creative preview tool

### Vocal Chopping
- Chop vocals into rhythmic patterns
- Create stutter effects

### Textural Sound Design
- Slow, subtle position changes on ambient sounds
- Granular-like effects at low crossfade times

### Build-Ups
- Automate speed from 0% to 100% for tension
- Combine with filter sweeps

---

## Workflow Integration

### As Insert Effect
- Load on individual sample track
- Direct scratch manipulation
- Automate for specific sections

### As Creative Tool
- Offline processing: Render scratched audio
- Build scratch sample library
- Export unique textures

---

## Related Plugins

- **Fruity Scratcher** - Alternative scratcher plugin
- **Gross Beat** - Time manipulation and scratching
- **Effector** - Multi-effect with scratch-like capabilities
- **Transporter** - Loop manipulation (different approach)

---

**Last Updated:** February 3, 2026
**Status:** Complete reference material

```

---

## FILE: 02-Data\parameters.json

```json
{
  "pluginName": "Wave Traveller",
  "version": "1.0",
  "lastUpdated": "2025-01-04",
  "category": "Granular Synthesis & Wave Sequencing",
  "parameters": {
    "wavePosition": {
      "type": "percentage",
      "range": {
        "min": 0,
        "max": 100,
        "default": 50
      },
      "unit": "%",
      "description": "Current position within the loaded audio file",
      "technicalDetails": "Controls read position for grain generation with 0.1% resolution",
      "modulationTargets": ["lfo", "envelope_follower", "automation", "midi_control"],
      "sweetSpots": {
        "slow_evolution": [0, 100, "0.1-2Hz LFO"],
        "rhythmic": [0, 100, "tempo_synced"],
        "random": [0, 100, "random_modulation"],
        "static": ["fixed_value", "for_sustained_textures"]
      }
    },
    "grainSize": {
      "type": "time",
      "range": {
        "min": 1,
        "max": 500,
        "default": 50
      },
      "unit": "ms",
      "description": "Duration of individual audio grains",
      "technicalDetails": "Controls grain length affecting texture from颗粒状 to smooth",
      "cpuImpact": "exponential_invers",
      "sweetSpots": {
        "texture": [1, 20, "granular_noises"],
        "rhythmic": [20, 50, "percussive_effects"],
        "musical": [50, 150, "recognizable_source"],
        "ambient": [150, 500, "evolving_textures"]
      }
    },
    "grainDensity": {
      "type": "frequency",
      "range": {
        "min": 1,
        "max": 100,
        "default": 20
      },
      "unit": "Hz",
      "description": "Number of grains generated per second",
      "technicalDetails": "Controls grain cloud density, higher values increase CPU usage exponentially",
      "cpuImpact": "exponential_direct",
      "sweetSpots": {
        "sparse": [1, 10, "isolated_grains"],
        "textural": [10, 30, "ambient_clouds"],
        "rhythmic": [30, 60, "pattern_generation"],
        "dense": [60, 100, "noise_like"]
      }
    },
    "pitchShift": {
      "type": "semitones",
      "range": {
        "min": -24,
        "max": 24,
        "default": 0
      },
      "unit": "semitones",
      "description": "Transposition of individual grains",
      "technicalDetails": "High-quality granular pitch shifting without time stretching artifacts",
      "modulationTargets": ["lfo", "automation", "midi_pitch_bend"],
      "sweetSpots": {
        "unison": 0,
        "harmonic": [5, 7, 12, -5, -7, -12],
        "dissonant": [1, 2, 3, 6, -1, -2, -3],
        "extreme": [18, 24, -18, -24]
      }
    },
    "spread": {
      "type": "percentage",
      "range": {
        "min": 0,
        "max": 100,
        "default": 50
      },
      "unit": "%",
      "description": "Stereo width and spatial positioning of grains",
      "technicalDetails": "Controls spatial distribution of grain cloud across stereo field",
      "sweetSpots": {
        "focused": [0, 25, "mono_center"],
        "narrow": [25, 50, "subtle_stereo"],
        "wide": [50, 75, "expansive_stereo"],
        "extreme": [75, 100, "maximum_width"]
      }
    },
    "panPosition": {
      "type": "percentage",
      "range": {
        "min": -100,
        "max": 100,
        "default": 0
      },
      "unit": "%",
      "description": "Overall stereo positioning",
      "technicalDetails": "Global pan control for processed signal",
      "modulationTargets": ["lfo", "automation", "midi_control"]
    },
    "feedback": {
      "type": "percentage",
      "range": {
        "min": 0,
        "max": 95,
        "default": 0
      },
      "unit": "%",
      "description": "Recursive processing feedback amount",
      "technicalDetails": "Feeds processed signal back into input, 95% maximum to avoid infinite loops",
      "sweetSpots": {
        "subtle": [0, 20, "gentle_evolution"],
        "moderate": [20, 50, "texture_development"],
        "complex": [50, 80, "evolving_soundscapes"],
        "chaotic": [80, 95, "experimental"]
      }
    },
    "timeStretch": {
      "type": "multiplier",
      "range": {
        "min": 0.1,
        "max": 4.0,
        "default": 1.0
      },
      "unit": "x",
      "description": "Playback speed without affecting pitch",
      "technicalDetails": "Granular time stretching algorithm preserving pitch characteristics",
      "sweetSpots": {
        "ambient": [0.1, 0.5, "slow_evolution"],
        "normal": [0.8, 1.2, "subtle_variations"],
        "energetic": [1.5, 2.5, "fast_rhythmic"],
        "extreme": [2.5, 4.0, "glitch_effects"]
      }
    }
  },
  "lfoParameters": {
    "wavePositionLFO": {
      "rate": {
        "type": "frequency",
        "range": [0.01, 100],
        "unit": "Hz",
        "default": 1.0
      },
      "depth": {
        "type": "percentage",
        "range": [0, 100],
        "unit": "%",
        "default": 50
      },
      "waveform": {
        "type": "selection",
        "options": ["sine", "triangle", "square", "saw", "random"],
        "default": "sine"
      },
      "sync": {
        "type": "boolean",
        "default": false,
        "options": ["free_running", "tempo_synced"]
      }
    },
    "grainSizeLFO": {
      "rate": {
        "type": "frequency",
        "range": [0.1, 50],
        "unit": "Hz",
        "default": 0.5
      },
      "depth": {
        "type": "percentage",
        "range": [0, 50],
        "unit": "%",
        "default": 25
      }
    },
    "pitchLFO": {
      "rate": {
        "type": "frequency",
        "range": [0.5, 20],
        "unit": "Hz",
        "default": 2.0
      },
      "depth": {
        "type": "semitones",
        "range": [0, 12],
        "unit": "semitones",
        "default": 3
      }
    }
  },
  "filterParameters": {
    "filterType": {
      "type": "selection",
      "options": ["low_pass", "high_pass", "band_pass", "notch"],
      "default": "low_pass"
    },
    "cutoff": {
      "type": "frequency",
      "range": [20, 20000],
      "unit": "Hz",
      "default": 2000
    },
    "resonance": {
      "type": "percentage",
      "range": [0, 95],
      "unit": "%",
      "default": 0
    }
  },
  "envelopeParameters": {
    "attack": {
      "type": "time",
      "range": [0, 10000],
      "unit": "ms",
      "default": 10
    },
    "decay": {
      "type": "time",
      "range": [0, 10000],
      "unit": "ms",
      "default": 500
    },
    "sustain": {
      "type": "percentage",
      "range": [0, 100],
      "unit": "%",
      "default": 50
    },
    "release": {
      "type": "time",
      "range": [10, 20000],
      "unit": "ms",
      "default": 1000
    }
  },
  "audioParameters": {
    "inputGain": {
      "type": "gain",
      "range": [-20, 20],
      "unit": "dB",
      "default": 0
    },
    "outputGain": {
      "type": "gain",
      "range": [-96, 12],
      "unit": "dB",
      "default": 0
    },
    "sampleRate": {
      "type": "selection",
      "options": [22050, 44100, 48000, 88200, 96000, 192000],
      "default": 44100
    }
  },
  "modulationMatrix": {
    "sources": [
      "lfo1", "lfo2", "lfo3", "envelope_follower", "midi_velocity", 
      "mod_wheel", "pitch_bend", "aftertouch", "automation", "random"
    ],
    "destinations": [
      "wave_position", "grain_size", "grain_density", "pitch_shift", 
      "spread", "feedback", "time_stretch", "filter_cutoff"
    ],
    "maxSlots": 16
  },
  "performanceMetrics": {
    "latency": {
      "64_samples": 1.5,
      "128_samples": 3.0,
      "256_samples": 6.0,
      "512_samples": 12.0,
      "1024_samples": 23.0
    },
    "cpuUsage": {
      "conservative": 5,
      "moderate": 15,
      "complex": 30,
      "extreme": 40
    },
    "memoryUsage": {
      "base": 100,
      "perMB_of_audio": 2.5
    }
  },
  "supportedFormats": {
    "audio": ["wav", "aiff", "mp3", "flac", "ogg"],
    "project": ["flp", "all"],
    "preset": ["json", "fxb", "fxp"]
  },
  "genreApplications": {
    "ambient": {
      "typicalSettings": {
        "grainSize": [100, 300],
        "grainDensity": [5, 25],
        "feedback": [30, 60],
        "timeStretch": [0.2, 0.8]
      },
      "useCase": "Evolving textures and soundscapes"
    },
    "electronic": {
      "typicalSettings": {
        "grainSize": [10, 80],
        "grainDensity": [20, 60],
        "pitchShift": [-12, 12],
        "timeStretch": [0.8, 2.0]
      },
      "useCase": "Rhythmic granulation and complex textures"
    },
    "cinematic": {
      "typicalSettings": {
        "grainSize": [50, 200],
        "grainDensity": [10, 40],
        "feedback": [20, 50],
        "spread": [60, 100]
      },
      "useCase": "Sound design and evolving atmospheres"
    },
    "experimental": {
      "typicalSettings": {
        "grainSize": [1, 100],
        "grainDensity": [40, 100],
        "pitchShift": [-24, 24],
        "feedback": [50, 95]
      },
      "useCase": "Pushing boundaries and exploring new sounds"
    }
  }
}
```

---

## FILE: 02-Data\preset-library.md

```markdown
# Wave Traveller Preset Library

## Textural & Ambient Presets

### "Ethereal Vocal Pad"
`\`\`
Audio Source: Vocal recording (speech or singing)
Wave Position: Slow LFO (0.3Hz, 75% depth)
Grain Size: 180ms
Grain Density: 15Hz
Pitch Shift: Random ±2 semitones
Spread: 85%
Feedback: 40%
Time Stretch: 0.7x
Filter: Low Pass, 800Hz cutoff
`\`\`
**Best For**: Ambient music, cinematic atmospheres
**Character**: Ethereal, evolving, otherworldly
**Modulation**: Wave position LFO creates slow movement

### "Ocean Waves"
`\`\`
Audio Source: Ocean recording or white noise
Wave Position: Manual sweep or slow random
Grain Size: 250ms
Grain Density: 8Hz
Pitch Shift: 0 semitones
Spread: 100%
Feedback: 55%
Time Stretch: 0.5x
Filter: Band Pass, 200-800Hz
`\`\`
**Best For**: Relaxation, meditation, environmental sound
**Character**: Natural, flowing, continuous
**Technique**: Slow grain density for wave-like motion

### "Metallic Textures"
`\`\`
Audio Source: Metal hits or industrial sounds
Wave Position: Fast random movement
Grain Size: 30ms
Grain Density: 45Hz
Pitch Shift: ±7 semitones random
Spread: 70%
Feedback: 25%
Time Stretch: 1.2x
Filter: High Pass, 500Hz cutoff
`\`\`
**Best For**: Industrial music, sound design
**Character**: Metallic, mechanical, textured
**Effect**: High grain density for metallic shimmer

## Rhythmic & Groove Presets

### "Granular Beat Machine"
`\`\`
Audio Source: Drum loop or breakbeat
Wave Position: Tempo-synced LFO (1/16 notes)
Grain Size: 25ms
Grain Density: 32Hz
Pitch Shift: 0 semitones
Spread: 60%
Feedback: 15%
Time Stretch: 1.0x
Filter: Resonant sweep automation
`\`\`
**Best For**: Electronic music, beat production
**Character**: Rhythmic, glitchy, complex
**Technique**: Wave position synced to rhythm

### "Micro-Permutation"
`\`\`
Audio Source: Any rhythmic audio
Wave Position: Random with probability control
Grain Size: 15ms
Grain Density: 80Hz
Pitch Shift: Occasional ±12 semitone jumps
Spread: 40%
Feedback: 10%
Time Stretch: Variable automation
Filter: No filtering
`\`\`
**Best For**: Experimental electronic, IDM
**Character**: Complex, unpredictable, glitch
**Effect**: High density for micro-rhythms

### "Stutter Vocal"
`\`\`
Audio Source: Vocal recording
Wave Position: Stutter pattern (repeated small segments)
Grain Size: 40ms
Grain Density: 25Hz
Pitch Shift: 0 semitones
Spread: 50%
Feedback: 5%
Time Stretch: 1.0x
Filter: Slight high pass (100Hz)
`\`\`
**Best For**: Hip-hop, electronic remixes
**Character**: Rhythmic vocal effect, stutter
**Pattern**: Wave position automation creates stutter

## Melodic & Musical Presets

### "Granular Harmonizer"
`\`\`
Audio Source: Melodic instrument (piano, guitar)
Wave Position: Slow manual movement
Grain Size: 120ms
Grain Density: 20Hz
Pitch Shift: Harmony selection (0, +5, +7 semitones)
Spread: 75%
Feedback: 30%
Time Stretch: 1.0x
Filter: Gentle low pass (3kHz)
`\`\`
**Best For**: Ambient, cinematic, neo-classical
**Character**: Harmonic, musical, evolving
**Technique**: Pitch shift creates chord textures

### "Alien Choir"
`\`\`
Audio Source: Choir or vocal recording
Wave Position: Very slow LFO (0.1Hz)
Grain Size: 200ms
Grain Density: 12Hz
Pitch Shift: +12 to +24 semitones
Spread: 90%
Feedback: 45%
Time Stretch: 0.8x
Filter: Formant-shaping EQ
`\`\`
**Best For**: Sci-fi, experimental, cinematic
**Character**: Alien, heavenly, transformed
**Effect**: Extreme pitch shift with preservation

### "Frozen Instrument"
`\`\`
Audio Source: Any musical recording
Wave Position: Static (one position)
Grain Size: 300ms
Grain Density: 6Hz
Pitch Shift: 0 semitones
Spread: 80%
Feedback: 65%
Time Stretch: 0.3x
Filter: Resonant frequency automation
`\`\`
**Best For**: Ambient pads, texture creation
**Character**: Frozen, sustained, ethereal
**Technique**: High feedback with static position

## Experimental & Sound Design Presets

### "Glitch Matrix"
`\`\`
Audio Source: Any audio (speech works well)
Wave Position: Random with variable probability
Grain Size: 5-50ms random
Grain Density: 60-90Hz random
Pitch Shift: Random -24 to +24 semitones
Spread: 0-100% random
Feedback: 0-80% random
Time Stretch: 0.5x to 2.0x random
Filter: Random filter type and cutoff
`\`\`
**Best For**: Experimental music, sound design
**Character**: Chaotic, unpredictable, glitch
**Technique**: All parameters randomized

### "Data Stream"
`\`\`
Audio Source: Digital noise or modem sounds
Wave Position: Fast linear sweep
Grain Size: 10ms
Grain Density: 100Hz
Pitch Shift: Synchronized to sweep
Spread: 30%
Feedback: 20%
Time Stretch: 2.0x
Filter: High pass with resonance sweep
`\`\`
**Best For**: Sci-fi, cyberpunk themes
**Character**: Digital, fast-paced, technological
**Effect**: High-density processing for digital texture

### "Particle Physics"
`\`\`
Audio Source: Short percussive sounds
Wave Position: Multiple simultaneous positions
Grain Size: 2-20ms distribution
Grain Density: 80Hz
Pitch Shift: Microtonal variations
Spread: 100%
Feedback: 50%
Time Stretch: Random bursts
Filter: Multi-band filtering
`\`\`
**Best For**: Sound design, experimental
**Character**: Particle-like, scattered, complex
**Technique**: Multiple grain streams simultaneously

## Live Performance Presets

### "DJ Texture Tool"
`\`\`
Audio Source: Incoming audio from deck
Wave Position: Manual control (MIDI mapped)
Grain Size: 50ms
Grain Density: 30Hz
Pitch Shift: MIDI-controlled (±12 semitones)
Spread: 60%
Feedback: 25%
Time Stretch: 1.0x
Filter: DJ-friendly EQ
`\`\`
**Best For**: Live DJ performance, remix
**Character**: Controllable, musical, DJ-ready
**Control**: MIDI mapping for real-time control

### "Reactive Texture"
`\`\`
Audio Source: Input from microphone or line
Wave Position: Envelope follower controlled
Grain Size: 20-100ms input-dependent
Grain Density: 10-50Hz input-dependent
Pitch Shift: Input dynamics controlled
Spread: Input level dependent
Feedback: 0-40% automatic
Time Stretch: 1.0x
Filter: Dynamics-controlled filtering
`\`\`
**Best For**: Live improvisation, installations
**Character**: Reactive, responsive, dynamic
**Input**: Responds to live input levels

## Film & Media Presets

### "Horror Ambience"
`\`\`
Audio Source: Dark atmosphere recordings
Wave Position: Slow, ominous movement
Grain Size: 150ms
Grain Density: 10Hz
Pitch Shift: Occasional -1 semitone drops
Spread: 100%
Feedback: 60%
Time Stretch: 0.4x
Filter: Dark EQ roll-off
`\`\`
**Best For**: Horror films, thriller games
**Character**: Menacing, unsettling, evolving
**Emotion**: Creates tension and unease

### "Sci-Fi Evolution"
`\`\`
Audio Source: Electronic sounds, frequencies
Wave Position: Complex pattern automation
Grain Size: 80ms
Grain Density: 25Hz
Pitch Shift: Automation from -12 to +24
Spread: 85%
Feedback: 35%
Time Stretch: Variable for sections
Filter: Sci-fi frequency sweeps
`\`\`
**Best For**: Science fiction, futuristic themes
**Character**: Advanced, technological, evolving
**Application**: Perfect for transitions and developments

### "Fantasy Magic"
`\`\`
Audio Source: Bells, chimes, ethereal sounds
Wave Position: Magical, unpredictable patterns
Grain Size: 100ms
Grain Density: 18Hz
Pitch Shift: Harmonic, magical progressions
Spread: 75%
Feedback: 40%
Time Stretch: 0.6x
Filter: Sparkling high-frequency emphasis
`\`\`
**Best For**: Fantasy films, magical effects
**Character**: Magical, ethereal, enchanting
**Emotion**: Creates wonder and mystery

## Preset Creation Guidelines

### Naming Convention
- **Descriptive**: Clear purpose and character
- **Genre-Specific**: Target application
- **Technical**: Key parameter info
- **Creative**: Evocative and memorable

### Custom Preset Template
`\`\`
Preset Name: [Descriptive Name]
Category: [Textural/Rhythmic/Experimental/etc.]
Audio Source: [Recommended source type]
Character: [Sound description]
Best For: [Applications, genres]
Key Settings: [Most important parameters]
Modulation: [Automation or LFO setup]
Tips: [Usage suggestions]
`\`\`

### Preset Organization
- **By Application**: Ambient, Rhythmic, Sound Design
- **By Source Type**: Vocal, Instrumental, Noise
- **By Complexity**: Simple, Moderate, Advanced
- **By Genre**: Electronic, Cinematic, Experimental

## Performance Optimization

### CPU Management
- **Conservative Presets**: Grain density < 30Hz
- **Moderate Presets**: Grain density 30-60Hz
- **Complex Presets**: Grain density > 60Hz (render recommended)

### Memory Efficiency
- **Short Audio Files**: Better for performance
- **Longer Files**: Better for evolving textures
- **Loop Mode**: For repetitive patterns

### Real-Time Considerations
- **Higher Buffer Sizes**: For complex presets
- **Lower Quality Mode**: During performance
- **Render Complex Patches**: For final production

This preset library provides comprehensive coverage of Wave Traveller's capabilities across all applications and genres.
```

---

## FILE: 02-Data\parameters\wave-traveller-params.json

```json
{
  "$schema": "./schema.json",
  "plugin": {
    "name": "Wave Traveller",
    "version": "1.x",
    "category": "Effect",
    "type": "Vinyl Scratch Simulator & Sample Manipulator",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Wave%20Traveller.htm"
  },
  "parameters": {
    "playback": [
      {
        "id": "position",
        "name": "Position",
        "type": "slider",
        "range": "0-100%",
        "description": "Playback position in sample",
        "automatable": true,
        "performanceUse": "Automate for scratch effects"
      },
      {
        "id": "speed",
        "name": "Speed",
        "type": "slider",
        "range": "-200% to +200%",
        "default": "100%",
        "description": "Playback speed and direction",
        "note": "Negative values = reverse playback"
      },
      {
        "id": "crossfade",
        "name": "Crossfade",
        "type": "slider",
        "range": "0-100ms",
        "unit": "ms",
        "default": "20ms",
        "description": "Smooths position jumps",
        "sweetSpot": "10-30ms for scratching"
      }
    ],
    "vinylSimulation": [
      {
        "id": "vinylNoise",
        "name": "Vinyl Noise",
        "type": "slider",
        "range": "0-100%",
        "default": "0%",
        "description": "Adds crackle and pop",
        "sweetSpot": "20-40% for vintage vibe"
      },
      {
        "id": "wowFlutter",
        "name": "Wow & Flutter",
        "type": "slider",
        "range": "0-100%",
        "description": "Pitch instability simulation"
      },
      {
        "id": "motorLag",
        "name": "Motor Lag",
        "type": "slider",
        "range": "0-100%",
        "description": "Spin-up/spin-down inertia",
        "sweetSpot": "70-80% for realistic vinyl stop"
      }
    ],
    "sample": [
      {
        "id": "sampleStart",
        "name": "Sample Start",
        "description": "Beginning trim point"
      },
      {
        "id": "sampleEnd",
        "name": "Sample End",
        "description": "Ending trim point"
      },
      {
        "id": "loopMode",
        "name": "Loop Mode",
        "options": ["Off", "Forward", "Ping-Pong"],
        "description": "Playback looping behavior"
      }
    ]
  },
  "scratchTechniques": {
    "babyScratch": "Basic back-and-forth movement",
    "chirpScratch": "Fast forward jumps",
    "crabScratch": "Rapid staccato movements",
    "transformScratch": "Rhythmic on/off cuts"
  },
  "historicalReference": {
    "originated": "1970s hip-hop DJing",
    "pioneers": ["Grand Wizzard Theodore", "DJ Qbert", "Mix Master Mike"]
  },
  "cpuUsage": "Low to Moderate",
  "latency": "Minimal",
  "realtimeSafe": true
}

```

---

## FILE: 02-Data\presets\genre-presets.json

```json
{
  "presetArchetypes": {
    "lofiKeys": {
      "description": "Warm, degraded piano for hip-hop",
      "settings": {
        "category": "Piano",
        "position": 50,
        "mutate": 0,
        "resample": 30,
        "filter": { "type": "lowpass", "cutoff": 75, "resonance": 20 },
        "lfo": { "to": "position", "rate": 0.1, "depth": 10 }
      },
      "useCases": ["hip-hop keys", "sample source", "lofi texture"],
      "tags": ["lofi", "hip-hop/rap", "moody"]
    },
    "darkTexture": {
      "description": "Evolving atmospheric background",
      "settings": {
        "category": "Texture",
        "position": 40,
        "mutate": 20,
        "resample": 50,
        "filter": { "type": "lowpass", "cutoff": 60, "resonance": 30 },
        "lfo": { "to": "position", "rate": 0.05, "depth": 20 }
      },
      "useCases": ["moody intros", "background", "builds"],
      "tags": ["moody", "atmospheric", "psychedelic"]
    },
    "aggressiveBass": {
      "description": "Hard, cutting bass for drops",
      "settings": {
        "category": "Aggressive",
        "position": 70,
        "mutate": 30,
        "resample": 20,
        "filter": { "type": "lowpass", "cutoff": 45, "resonance": 45 },
        "lfo": { "to": "position", "rate": 0.2, "depth": 30 }
      },
      "useCases": ["drops", "builds", "bass focus"],
      "tags": ["electric", "intense", "deep bass edm"]
    },
    "etherealPad": {
      "description": "Lush, evolving pad for breakdowns",
      "settings": {
        "category": "Pad",
        "position": 50,
        "mutate": 10,
        "resample": 40,
        "filter": { "type": "lowpass", "cutoff": 65, "resonance": 25 },
        "lfo": { "to": "position", "rate": 0.08, "depth": 15 }
      },
      "useCases": ["breakdowns", "intros", "emotional moments"],
      "tags": ["moody", "upbeat", "atmospheric"]
    },
    "vinylStutter": {
      "description": "Rhythmic glitch/stutter effect",
      "settings": {
        "category": "Glitch",
        "position": 50,
        "mutate": 0,
        "resample": 0,
        "filter": { "type": "bandpass", "cutoff": 80, "resonance": 40 },
        "lfo": { "to": "position", "rate": "1/8", "depth": 50 }
      },
      "useCases": ["rhythmic texture", "glitch elements", "vinyl stops"],
      "tags": ["lofi", "funky", "electric"]
    }
  },
  "genreSettings": {
    "hipHop": {
      "keys": { "position": 50, "resample": 30, "filter": 75 },
      "texture": { "position": 40, "resample": 45, "filter": 65 },
      "sampleSource": { "position": 60, "resample": 20, "filter": 80 }
    },
    "lofi": {
      "degraded": { "position": 55, "resample": 50, "filter": 70 },
      "vintage": { "position": 45, "resample": 40, "filter": 65 },
      "warm": { "position": 50, "resample": 35, "filter": 72 }
    },
    "deepBassEDM": {
      "wobble": { "position": 65, "resample": 25, "filter": 45 },
      "growl": { "position": 75, "resample": 35, "filter": 40 },
      "texture": { "position": 55, "resample": 50, "filter": 55 }
    }
  }
}

```

---

## FILE: 02-Data\rules\wave-traveller-safety-rules.md

```markdown
Tags: hip-hop/rap | lofi | deep bass edm

## Wave Traveller Safety Rules

### Gain Staging

| Sound Type | Master Volume | Resample Impact | Watch For |
|------------|---------------|-----------------|-----------|
| Pads | -6 dB | Adds ~3dB over time | Creeping levels |
| Bass | -3 dB | Minimal effect | Filter resonance |
| Keys | 0 dB | Moderate evolution | Transients |
| Textures | -6 dB | Heavy evolution | Uncontrolled changes |

### Low-End Rules

**Critical for bass-heavy genres:**

1. **High-pass input filter removes rumble** - Use if wavetable has excessive low content
2. **Resample affects low frequencies most** - Test bass patches at high resample values
3. **Filter cutoff = low-end presence** - Lower cutoff = more bass
4. **Mutate can add low-end harmonics** - Use sparingly on bass

### Resample Safety

**What resample does:**
- Feeds output back into input
- Creates evolving, degrading sound
- Can add harmonics or remove them
- Over time, sound changes unpredictably

**Safe resample levels:**

| Level | Effect | Safe For |
|-------|--------|----------|
| 0-20% | Subtle evolution | Keys, pads |
| 20-40% | Noticeable change | Textures, atmosphere |
| 40-60% | Heavy evolution | Intros, breakdowns |
| 60%+ | Radical change | Sound design only |

### Avoid List

| ❌ Don't Do This | ❌ Result | ✅ Instead |
|-----------------|-----------|------------|
| High resample on lead | Unpredictable pitch/tonal shifts | Keep under 30% |
| Skip mono test | Phase issues with complex wavetables | Test EVERY patch |
| Ignore position control | Static, boring sound | Modulate position |
| High resonance on bass | Boomy, muddy low-end | Keep under 40% |
| No filter on raw wavetable | Harsh, fatiguing | Always filter |

### The "Bass Patch Test"

`\`\`
1. Create bass patch with 50% resample
2. Play sustained root note for 10 seconds
3. Listen: Does it stay controlled?
4. Check mono: Still punchy?
5. If evolving too much: Reduce resample
6. If too static: Increase position LFO depth
`\`\`

### Wavetable Categories by Use

| Category | Best For | Avoid |
|----------|----------|-------|
| Piano/Keys | Hip-hop melodies, lofi | Aggressive music |
| Bass | Drops, energy | Subtle backgrounds |
| Texture | Atmosphere, mood | Clear melodies |
| Aggressive | Intensity, impact | Relaxed sections |
| Pad | Emotional moments | Fast, busy mixes |
| Glitch | Rhythmic texture | Sustained notes |

```

---

## FILE: 03-Workflows\by-context\granular-texture-creation.md

```markdown
# Workflow: Granular Texture Creation

## Understanding Texture Creation

### What Makes a Good Granular Texture?
- **Evolution**: Sound develops and changes over time
- **Balance**: Not too chaotic, not too static
- **Musicality**: Serves the artistic purpose
- **Interest**: Captures listener attention
- **Integration**: Fits within the mix context

### Texture Categories
1. **Ambient Textures**: Slow, evolving, atmospheric
2. **Rhythmic Textures**: Patterned, repetitive, groove-oriented
3. **Chaotic Textures**: Random, complex, experimental
4. **Musical Textures**: Harmonic, melodic, structured

## Step-by-Step Texture Creation Workflow

### Phase 1: Source Selection and Preparation

#### Choosing the Right Audio Source
`\`\`
Best Sources for Different Textures:

Ambient Textures:
- Nature recordings (rain, wind, water)
- Field recordings (urban, environmental)
- Long musical recordings (pads, strings)
- Vocal recordings (speech, singing)

Rhythmic Textures:
- Drum loops and breaks
- Percussive recordings
- Staccato instrumental phrases
- Mechanical sounds

Musical Textures:
- Melodic recordings (piano, guitar)
- Vocal performances
- Orchestral recordings
- Synth pads and leads

Experimental Textures:
- Any audio can work
- Digital noise
- Unusual sources
- Multiple sources layered
`\`\`

#### Audio Preparation
1. **Quality Check**: Ensure clean, high-quality source
2. **Length Optimization**: 5 seconds to 2 minutes ideal
3. **Format**: WAV or AIFF for best quality
4. **Normalization**: Consistent level for predictable results
5. **Loop Points**: Mark useful sections for cycling

### Phase 2: Basic Parameter Setup

#### Foundation Settings Template
`\`\`
Starting Point for Most Textures:
Wave Position: 50% (center of audio)
Grain Size: 80ms (musical range)
Grain Density: 20Hz (light cloud)
Pitch Shift: 0 semitones (no transposition)
Spread: 50% (moderate stereo)
Feedback: 20% (gentle evolution)
Time Stretch: 1.0x (normal speed)
`\`\`

#### Adjusting for Texture Type

#### Ambient Texture Setup
`\`\`
Ambient Foundation:
Grain Size: 150-300ms (long, smooth grains)
Grain Density: 5-15Hz (sparse cloud)
Feedback: 30-60% (significant evolution)
Time Stretch: 0.3-0.8x (slower development)
Spread: 70-100% (wide stereo)
LFO: Very slow (0.1-0.5Hz) wave position
`\`\`

#### Rhythmic Texture Setup
`\`\`
Rhythmic Foundation:
Grain Size: 10-50ms (short, defined grains)
Grain Density: 30-80Hz (dense, rhythmic)
Feedback: 5-25% (moderate complexity)
Time Stretch: 0.8-2.0x (tempo variation)
Spread: 40-60% (focused stereo)
LFO: Tempo-synced wave position
`\`\`

#### Experimental Texture Setup
`\`\`
Experimental Foundation:
Grain Size: 1-100ms (wide variation)
Grain Density: 40-100Hz (very dense)
Feedback: 50-95% (maximum evolution)
Time Stretch: Random variation
Spread: 0-100% (dynamic spatial)
Multiple LFOs on different parameters
`\`\`

### Phase 3: Movement and Evolution

#### Creating Natural Movement

#### Wave Position Modulation
1. **Slow LFO** (0.1-2Hz): Continuous evolution
2. **Random Walk**: Organic, unpredictable movement
3. **Linear Sweep**: Predictable development
4. **Patterned Movement**: Repeating sequences

#### LFO Settings for Different Effects
`\`\`
Gentle Evolution:
- Rate: 0.2-0.5Hz
- Waveform: Sine or Triangle
- Depth: 30-50%
- Sync: Free running

Rhythmic Movement:
- Rate: 1/8 to 1/4 notes
- Waveform: Square or Saw
- Depth: 50-80%
- Sync: Tempo synced

Chaotic Movement:
- Rate: Random or fast
- Waveform: Random or Sample & Hold
- Depth: 70-100%
- Sync: Free running
`\`\`

#### Multi-Parameter Modulation
1. **Parallel Modulation**: Same LFO on multiple parameters
2. **Inverse Modulation**: Opposite movements on different parameters
3. **Phase Offset**: Different phase relationships
4. **Frequency Division**: Different LFO rates for complexity

### Phase 4: Advanced Textural Techniques

#### Layered Texture Creation
`\`\`
Layer 1 (Base):
Grain Size: 200ms, Density: 10Hz, Pitch: 0 semitones
Function: Foundation, body, warmth

Layer 2 (Detail):
Grain Size: 50ms, Density: 30Hz, Pitch: +5 semitones
Function: Mid-range detail, interest

Layer 3 (Sparkle):
Grain Size: 15ms, Density: 60Hz, Pitch: +12 semitones
Function: High-frequency detail, air
`\`\`

#### Feedback-Based Evolution
1. **Light Feedback** (10-25%): Gentle thickening
2. **Medium Feedback** (25-50%): Noticeable development
3. **Heavy Feedback** (50-80%): Complex evolution
4. **Maximum Feedback** (80-95%): Chaotic transformation

#### Temporal Development
`\`\`
Structure for Evolving Texture:
0-30 seconds: Introduction, subtle changes
30-60 seconds: Development, increased complexity
60-90 seconds: Peak activity, maximum interest
90-120 seconds: Transition, transformation
120+ seconds: Resolution, new state
`\`\`

### Phase 5: Integration and Refinement

#### Frequency Shaping
1. **High-Pass Filter**: Remove unwanted low frequencies
2. **Low-Pass Filter**: Smooth harsh harmonics
3. **Band-Pass Filter**: Focus on frequency range
4. **Notch Filter**: Remove problematic frequencies

#### Spatial Processing
1. **Stereo Width**: Adjust spread parameter
2. **Pan Movement**: Add spatial animation
3. **Reverb**: Add space and depth
4. **Delay**: Create rhythmic complexity

#### Dynamic Processing
1. **Compression**: Control dynamics
2. **Limiting**: Prevent digital clipping
3. **Gating**: Add rhythmic interest
4. **Sidechain**: Create ducking effects

## Genre-Specific Texture Creation

### Ambient Music Textures
`\`\`
Characteristics:
- Slow evolution
- Wide stereo field
- Smooth frequency content
- Long duration development

Typical Settings:
Grain Size: 200-400ms
Grain Density: 5-15Hz
Feedback: 40-70%
Time Stretch: 0.2-0.6x
LFO: Very slow wave position
`\`\`

### Electronic Music Textures
`\`\`
Characteristics:
- Rhythmic elements
- Punchy attacks
- Clear frequency content
- Controlled complexity

Typical Settings:
Grain Size: 20-80ms
Grain Density: 20-60Hz
Feedback: 15-35%
Time Stretch: 0.8-1.5x
LFO: Tempo-synced patterns
`\`\`

### Cinematic Textures
`\`\`
Characteristics:
- Emotional impact
- Dynamic range
- Supporting visuals
- Scene-specific development

Typical Settings:
Grain Size: 50-200ms
Grain Density: 10-40Hz
Feedback: 25-60%
Time Stretch: Variable by scene
LFO: Programmed movements
`\`\`

### Experimental Textures
`\`\`
Characteristics:
- Unpredictable evolution
- Extreme parameter ranges
- Novel sound qualities
- Challenge conventions

Typical Settings:
Grain Size: 1-500ms (variable)
Grain Density: 30-100Hz
Feedback: 60-95%
Time Stretch: Random/complex
Multiple LFOs, random modulation
`\`\`

## Professional Tips and Techniques

### Saving and Preset Management
1. **Document Settings**: Note successful parameter combinations
2. **Create Preset Categories**: Organize by texture type
3. **Version Control**: Keep track of evolution
4. **Backup Presets**: Save valuable custom textures

### Performance Optimization
1. **CPU Management**: Monitor CPU usage with complex textures
2. **Rendering**: Render complex textures for playback
3. **Buffer Settings**: Adjust for real-time vs. offline processing
4. **Freeze Tracks**: Commit complex textures to audio

### Creative Development
1. **Experimentation**: Try unusual source materials
2. **Happy Accidents**: Document unexpected good results
3. **Constraint-Based**: Work within limitations
4. **Collaboration**: Share and exchange textures

## Troubleshooting Texture Issues

### Problem: Texture Sounds Static
**Solutions**:
- Add wave position LFO movement
- Increase feedback amount
- Add multiple modulation sources
- Try different grain sizes

### Problem: Texture Too Harsh
**Solutions**:
- Increase grain size
- Decrease grain density
- Add filtering
- Reduce extreme pitch shifts

### Problem: Texture Too Chaotic
**Solutions**:
- Decrease feedback
- Use larger grain sizes
- Reduce modulation depth
- Simplify parameter relationships

### Problem: Texture Doesn't Evolve
**Solutions**:
- Add slow wave position movement
- Increase feedback gradually
- Use time stretching
- Add automation over time

## Advanced Texture Concepts

### Generative Textures
- Self-evolving without external input
- Complex parameter relationships
- Long-term development
- Infinite variation possibilities

### Reactive Textures
- Respond to input audio
- Follow musical dynamics
- Interactive performance
- Real-time adaptation

### Multi-Layer Textures
- Combine multiple instances
- Different settings per layer
- Cross-fade between layers
- Complex frequency distribution

This workflow provides systematic approach to creating professional granular textures with Wave Traveller, from basic concepts to advanced techniques.
```

---

## FILE: 03-Workflows\by-goal\vinyl-scratches-lofi-hiphop.md

```markdown
# Vinyl Scratches & Lo-Fi Textures for Hip-Hop

**Genre:** Lo-Fi Hip-Hop, Boom Bap, Underground Rap
**Vibe:** Nostalgic, dusty, authentic
**Difficulty:** Intermediate
**Time:** 15 minutes

---

## What Wave Traveller Brings to Hip-Hop

Wave Traveller creates **authentic vinyl scratch effects** and **lo-fi sample manipulation** through:
- **Spline-based scratching** (draw your scratch patterns)
- **Vinyl stop/start effects** (turntable simulation)
- **Reverse scratches** and stutters
- **Degraded, vintage sample textures**

---

## Quick Setup: Classic Scratch Pattern

### Step 1: Load Your Sample

**Best Sources for Scratching:**
- **Drum breaks** (classic hip-hop)
- **Vocal one-shots** ("Fresh!" "Yeah!" etc.)
- **Horn stabs** (jazz samples)
- **"Ahh" sounds** (classic scratch sound)
- **Pre-made scratch samples**

**Recommendations:**
- **Short samples** (0.5-2 seconds work best)
- **Punchy transients** (clear attack)
- **Mono samples** (vintage vibe)

### Step 2: Essential Wave Traveller Settings

`\`\`
Sample Start: 0%
Sample End: 100% (use full sample)
Speed: 100% (normal playback)
Attack: 5ms (quick response)
Release: 10ms (fast decay)
`\`\`

### Step 3: Draw Your Scratch Pattern

**The Spline Editor:**
- **Horizontal axis:** Time (left to right)
- **Vertical axis:** Position in sample (top to bottom)
- **Draw pattern:** Your scratch movement

**Basic Scratch Patterns:**

**1. Baby Scratch (simple forward-backward):**
`\`\`
^
│    ╱╲    ╱╲
│   ╱  ╲  ╱  ╲
│  ╱    ╲╱    ╲
└─────────────────→
  Start      End
`\`\`

**2. Forward Scratch (aggressive push):**
`\`\`
^
│              ┌──
│            ╱
│          ╱
│  ───────
└─────────────────→
`\`\`

**3. Reverse Scratch (pull back):**
`\`\`
^
│  ──┐
│    │╲
│    │ ╲
│    │  └─────
└─────────────────→
`\`\`

---

## Genre-Specific Techniques

### 1. Lo-Fi Boom Bap (J Dilla, MF DOOM)

**Sample Choice:** Drum break or jazz sample

**Settings:**
`\`\`
Speed: 95% (slightly slower, tape feel)
Attack: 8ms
Release: 15ms
Volume Envelope: Gentle fade in/out
`\`\`

**Spline Pattern:**
- **Slow, lazy scratches** (not aggressive)
- **Subtle movement** (30-50% of sample range)
- **Irregular timing** (human feel)

**Post-Processing:**
- **Bitcrusher:** 12-bit
- **Fruity Squeeze:** Warm saturation
- **Low-pass filter:** 8kHz cutoff
- **Vinyl noise layer**

**Vibe:** Dusty, warm, authentic

**Reference:**
- J Dilla - "Donuts" (album)
- MF DOOM - "Meat Grinder"
- Madlib - "Shades of Blue"

---

### 2. Turntablism / DJ Scratching (DJ Shadow, Cut Chemist)

**Sample Choice:** "Ahh" sound or vocal one-shot

**Settings:**
`\`\`
Speed: 100%
Attack: 2ms (instant)
Release: 5ms (fast)
`\`\`

**Advanced Scratch Patterns:**

**Crab Scratch:**
`\`\`
Multiple rapid back-and-forth movements
^
│ ╱╲╱╲╱╲╱╲╱╲
└──────────────→
`\`\`

**Transformer Scratch:**
`\`\`
Staccato cuts (on-off-on-off)
^
│ ┌─┐ ┌─┐ ┌─┐
│ │ │ │ │ │ │
└─┴─┴─┴─┴─┴─┴──→
`\`\`

**Vibe:** Technical, rhythmic, impressive

**Reference:**
- DJ Shadow - "Midnight in a Perfect World"
- Cut Chemist - "The Garden"
- DJ Qbert - "Wave Twisters"

---

### 3. Vinyl Stop Effect (Outro/Transition)

**Use Case:** End of song or section transition

**Settings:**
`\`\`
Speed: Start at 100%, automate to 0%
Attack: 10ms
Release: 200ms (long tail)
`\`\`

**Spline Pattern:**
- **Simple forward movement**
- **Gradually slow down** (matches speed automation)

**Automation:**
1. **Speed:** 100% → 0% over 2-4 seconds
2. **Pitch:** Drops naturally with speed
3. **Volume:** Fade out at the end

**Vibe:** Turntable power-off, nostalgic

**Reference:**
- Common outro effect in 90s hip-hop
- Used in countless Dilla productions

---

### 4. Psychedelic Reverse Textures

**Sample Choice:** Melodic sample (vocal, synth, guitar)

**Settings:**
`\`\`
Speed: 80% (slower, dreamier)
Attack: 15ms
Release: 100ms
`\`\`

**Spline Pattern:**
- **Full reverse motion** (bottom to top)
- **Slow, smooth curves** (no sharp angles)
- **Multiple cycles** (continuous movement)

**Post-Processing:**
- **Vintage Phaser** (slow LFO)
- **Long reverb** (4+ seconds)
- **Vintage Chorus** (wide stereo)

**Vibe:** Trippy, atmospheric, experimental

**Reference:**
- ASAP Rocky - "L$D"
- Mac Miller - "2009"

---

## Step-by-Step: Creating a Scratch Hook

### Step 1: Find the Perfect Sample

**Look for:**
- **Short vocal phrases** ("Yeah!" "Fresh!" "Check it out!")
- **Classic breaks:** Amen Break, Apache, Funky Drummer
- **Jazz stabs:** Horns, piano hits

### Step 2: Load into Wave Traveller

1. Drag sample into Wave Traveller
2. **Set loop points** (if needed)
3. **Normalize** the sample (full volume)

### Step 3: Program Your Scratch Pattern

**For 16th-Note Rhythmic Scratching:**

**Beat 1:** Forward scratch
**Beat 1.5:** Reverse scratch
**Beat 2:** Rest
**Beat 2.5:** Forward scratch
**Beat 3:** Baby scratch (forward-back-forward)
**Beat 4:** Rest

**Draw this pattern with splines:**
- Each scratch = one spline path
- **Timing** matters (match to BPM)

### Step 4: Map to MIDI Keyboard

**Wave Traveller Keyboard Mapping:**
- **C3:** Trigger main scratch pattern
- **D3:** Trigger variation 1
- **E3:** Trigger variation 2
- **F3:** Trigger reverse pattern

**Performance:**
- Play patterns **live** in time with beat
- Record MIDI performance
- **Quantize** if needed (but keep some human feel)

### Step 5: Layer with Beat

**Mix Integration:**
1. **Scratch:** Center, -9dB
2. **Drums:** Slightly ducked when scratch plays
3. **EQ scratch:** High-pass at 200Hz (make room for kick/bass)

---

## Advanced Techniques

### Technique 1: Pitch-Shifted Scratches

**Setup:**
- Load **same sample** on multiple notes
- **Pitch shift** each instance (C, D, E, F, G)
- Create **melodic scratch patterns**

**Result:** Harmonic scratching (not just rhythmic)

---

### Technique 2: Sidechain to Scratch

**Setup:**
- Send scratch output to sidechain input of kick compressor
- **Duck the scratch** when kick hits
- Creates space, prevents clashing

---

### Technique 3: Scratch Automation

**Automate:**
- **Speed** (slow down over time)
- **Sample Start** (move through sample)
- **Volume envelope** (shape dynamics)

**Result:** Evolving, dynamic scratches

---

### Technique 4: Reverse + Forward Combo

**Pattern:**
1. **Bar 1-2:** Forward scratches
2. **Bar 3:** Reverse the entire pattern
3. **Bar 4:** Forward again

**Creates:** Palindrome effect, trippy vibe

---

## Mixing Vinyl Scratches

### Frequency Management
- **High-pass:** 150-200Hz (avoid mud)
- **Boost:** +2dB at 2-4kHz (presence)
- **Subtle high-shelf:** +1dB at 8kHz (air)

### Stereo Width
- **Scratches:** Mono (center)
- **Can add subtle stereo width** with delay/chorus
- **Never wide stereo on low-mids**

### Compression
- **Ratio:** 3:1
- **Fast attack** (5ms)
- **Medium release** (80ms)
- **Makes scratches punchy and consistent**

---

## Common Mistakes

1. **Overly complex splines:** Keep it simple, scratching is about rhythm
2. **Too long samples:** Short samples (0.5-2s) work best
3. **Ignoring timing:** Scratches must be **on beat**
4. **No low-end cut:** Scratches fight with bass
5. **Too loud:** Scratches should complement, not dominate

---

## Preset Cheat Sheet

| Vibe | Speed | Attack | Release | Sample Type | Processing |
|------|-------|--------|---------|-------------|------------|
| **Lo-Fi Boom Bap** | 95% | 8ms | 15ms | Jazz/Soul | Bitcrush, Vinyl |
| **Turntablism** | 100% | 2ms | 5ms | "Ahh" Sample | Clean, Punchy |
| **Vinyl Stop** | 100%→0% | 10ms | 200ms | Any | Automation |
| **Psychedelic** | 80% | 15ms | 100ms | Melodic | Phaser, Reverb |
| **Aggressive Trap** | 105% | 1ms | 3ms | Vocal Stab | Distortion |

---

## Creative Uses

### Use 1: Intro/Outro
- **Vinyl start effect:** Speed 0% → 100% (pitch up)
- **Vinyl stop effect:** Speed 100% → 0% (pitch down)
- Classic hip-hop transition

### Use 2: Fill/Transition
- **Quick scratch** between sections
- **2-4 bar pattern** before chorus
- Builds energy, signals change

### Use 3: Rhythmic Element
- **Continuous scratching** throughout track
- Acts as **percussive element**
- Common in turntablism-heavy hip-hop

---

## Reference Artists

**Lo-Fi/Boom Bap:**
- J Dilla
- MF DOOM
- Madlib
- Nujabes

**Turntablism:**
- DJ Shadow
- Cut Chemist
- DJ Qbert
- Mix Master Mike

**Modern Hip-Hop:**
- Kendrick Lamar - "HUMBLE." (DJ scratches in intro)
- Tyler, The Creator - "EARFQUAKE"
- Mac Miller - Various productions

---

## Production Tips

### For Authentic Vinyl Feel
- **Layer vinyl crackle** underneath
- **Bit-reduce** to 12-14 bit
- **Low-pass filter** at 8-10kHz
- **Warm saturation** (tape emulation)

### For Modern Clarity
- Keep **high-fidelity**
- **Clean EQ** (surgical cuts)
- **Subtle compression**
- **Focus on rhythm** over texture

### For Psychedelic Vibe
- **Reverse sections**
- **Pitch shift** (±3-7 semitones)
- **Heavy effects** (phaser, reverb, delay)
- **Automate wildly**

---

## Next Steps

1. **Practice drawing splines:** Get comfortable with the editor
2. **Study DJ techniques:** Understand real scratching
3. **Build sample library:** Collect good scratch samples
4. **Experiment with automation:** Make it dynamic
5. **Combine with other effects:** Layer with distortion, chorus, etc.

---

**Related Workflows:**
- [Fruity Scratcher for Quick Scratches](../../Fruity%20Scratcher/03-Workflows/by-goal/basic-scratch-patterns.md)
- [Lo-Fi Hip-Hop Production Guide](./lofi-production-complete.md)
- [Vinyl Stop Effect Automation](./vinyl-stop-automation.md)

---

**Last Updated:** February 3, 2026
**Genre:** Lo-Fi Hip-Hop, Boom Bap, Turntablism
**Vibe:** 💿 Straight Outta The Vinyl Era

```

---

## FILE: 03-Workflows\by-goal\vinyl-stop-effect.md

```markdown
# Vinyl Stop Effect with Wave Traveller

**Difficulty:** Beginner
**Time Required:** 5 minutes
**Goal:** Create realistic turntable vinyl stop effect
**Genre:** Hip-Hop, EDM, Turntablism

---

## Prerequisites

- Wave Traveller plugin
- Audio sample loaded (drum loop or full track section)
- Understanding of automation

---

## Workflow Steps

### Step 1: Load Sample

1. **Load Wave Traveller** on track
2. **Import Sample** - Drag audio file or use Load button
3. **Set Sample Start/End** to desired section

---

### Step 2: Configure Vinyl Simulation

4. **Motor Lag:** **70-80%**
   - *Why:* Realistic turntable inertia

5. **Vinyl Noise (Optional):** **30-40%**
   - *Why:* Adds authenticity

6. **Wow & Flutter:** **20%**
   - *Why:* Natural pitch wobble during slowdown

---

### Step 3: Speed Automation

7. **Speed:** Start at **100%**
8. **Create Automation Clip** for Speed parameter
9. **Draw Curve:** 100% to 0% over 1-2 bars
   - *Curve Shape:* Exponential decay (realistic slowdown)

10. **Placement:** Trigger stop 2-4 bars before drop/change

---

### Step 4: Fine-Tuning

11. **Adjust Motor Lag** if stop is too fast/slow
12. **Crossfade:** Keep at **20-30ms**

---

## Variations

### Quick Stop (0.5 bars)
- Motor lag: 40-50%
- Abrupt, dramatic

### Slow Stop (4 bars)
- Motor lag: 85-95%
- Gradual, smooth

### Reverse Spin-Up
- Speed: 0% to 100%
- At drop/build

---

**Last Updated:** February 3, 2026
**Status:** Complete workflow

```

---

## FILE: 03-Workflows\by-instrument\wave-traveller-instrument-workflows.md

```markdown
Tags: lofi | hip-hop/rap | moody

## Wave Traveller Instrument Workflows

### Lofi Hip-Hop Piano

**Sound Goal:** Warm, degraded, nostalgic keys

**Settings:**
- Category: Piano
- Wavetable: Standard piano
- Position: 50
- Mutate: 0
- Resample: 35%
- Filter: Low-pass, Cutoff 72%, Resonance 18%
- Envelope: Position modulation, slow attack, long release
- Effects: Fruity Reeverb (small room), Fruity Limiter (soft clip)

**Creation Steps:**
1. Start with piano wavetable
2. Add low-pass filter for warmth
3. Set resample for slow degradation
4. Add subtle LFO to position (0.05Hz)
5. Soft clip output for analog warmth

**A/B Test:**
1. Compare with and without resample
2. Resample should add character, not chaos
3. If too degraded → Reduce resample to 25%

### Hip-Hop Bass 808

**Sound Goal:** Punchy, modern 808 bass

**Settings:**
- Category: Bass
- Wavetable: Aggressive 808
- Position: 60
- Mutate: 15
- Resample: 15%
- Filter: Low-pass, Cutoff 38%, Resonance 35%
- Envelope: Amp envelope with punch (fast attack, short decay)
- Processing: Fruity Limiter for soft clip

**Why This Works:**
- Moderate position lets wavetable character shine
- Low resample keeps bass focused
- Punchy envelope hits like classic 808

### Atmospheric Texture

**Sound Goal:** Evolving, moody background

**Settings:**
- Category: Texture
- Wavetable: Complex texture
- Position: 45
- Mutate: 25
- Resample: 50%
- Filter: Low-pass, Cutoff 58%, Resonance 30%
- LFO: To position, 0.08Hz, depth 25
- Effects: Long reverb tail, subtle delay

**Creation Tips:**
1. Higher resample creates continuous evolution
2. Modulate position slowly for movement
3. Effects add depth without clutter

### Vinyl Scratch Loop

**Sound Goal:** Rhythmic, lofi groove element

**Settings:**
- Category: Glitch
- Wavetable: Scratch/texture
- Position: 50
- Mutate: 0
- Resample: 0
- Filter: Band-pass, Cutoff 75%, Resonance 45%
- LFO: To position, synced to 1/8 note, depth 50

**Synced Rhythms:**

| Feel | Sync Setting | Effect |
|------|--------------|--------|
| Choppy | 1/4 note | Sparse rhythm |
| Standard | 1/8 note | Even groove |
| Bouncy | 1/8 triplet | Swung feel |
| Intense | 1/16 note | Busy texture |

### Dark Drone

**Sound Goal:** Ominous, low rumble

**Settings:**
- Category: Texture
- Wavetable: Dark drone
- Position: 30
- Mutate: 40
- Resample: 60%
- Filter: Low-pass, Cutoff 25%, Resonance 50%
- Envelope: Slow attack (3s), infinite sustain
- LFO: To filter cutoff, very slow (0.02Hz)

**Use Cases:**
- Horror/ominous sections
- Tension builds
- Transition effects
- Not for mix clarity—foreground element

### Quick Reference Table

| Sound | Category | Position | Resample | Filter | Use Case |
|-------|----------|----------|----------|--------|----------|
| Piano | Piano | 50 | 35% | 72% LP | Hip-hop keys |
| 808 Bass | Bass | 60 | 15% | 38% LP | Trap drops |
| Texture | Texture | 45 | 50% | 58% LP | Atmosphere |
| Scratch | Glitch | 50 | 0% | 75% BP | Rhythmic |
| Drone | Texture | 30 | 60% | 25% LP | Dark mood |
| Pad | Pad | 50 | 40% | 65% LP | Breakdowns |

```

---

## FILE: 04-Reference\01_Official_Links.md

```markdown
# Wave Traveller - Official Links & Resources

## Official Documentation

### Primary Manual
- **Main Page:** [Wave Traveller Plugin](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Wave%20Traveller.htm)
- **Publisher:** Image-Line
- **Last Verified:** February 3, 2026

## Technology Overview

### Vinyl Scratch Simulation
- **Digital Turntable:** Simulates DJ scratching
- **Real-Time Manipulation:** Sample scrubbing and time control
- **Vinyl Character:** Optional crackle, wow, and flutter

---

## Turntablism History

### DJ Scratching Origins
- **Invented:** 1970s by Grand Wizzard Theodore
- **Popularized:** 1980s hip-hop culture
- **Evolution:** From simple baby scratches to complex routines

### Famous Turntablists
- **DJ Qbert** - Innovator of complex scratch techniques
- **Mix Master Mike** - Beastie Boys DJ
- **DJ Shadow** - Sampling and turntablism fusion
- **Cut Chemist** - Creative sample manipulation

---

## Related Plugins

- **Fruity Scratcher** - Alternative scratch plugin
- **Gross Beat** - Time manipulation
- **Transporter** - Loop-based manipulation

---

## Reference Tracks

1. **DJ Shadow - "Organ Donor"** (1996)
2. **Beastie Boys - "Intergalactic"** (1998)
3. **Herbie Hancock - "Rockit"** (1983)

---

## Learning Resources

### Scratch Techniques
- **DMC World DJ Championships** - Advanced techniques
- **Turntablist Transcription Collective** - Notation system
- **YouTube:** Search "DJ scratch tutorial"

---

**Last Updated:** February 3, 2026
**Status:** Complete reference links

```

---

