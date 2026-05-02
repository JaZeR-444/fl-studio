# Fruity Love Philter - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Love Philter - Advanced Filter Bank

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██╗      ██████╗ ██╗   ██╗███████╗    ██████╗ ██╗  ██╗██╗██╗  ████████╗███████╗██████╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██║     ██╔═══██╗██║   ██║██╔════╝    ██╔══██╗██║  ██║██║██║  ╚══██╔══╝██╔════╝██╔══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║     ██║   ██║██║   ██║█████╗      ██████╔╝███████║██║██║     ██║   █████╗  ██████╔╝
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║     ██║   ██║╚██╗ ██╔╝██╔══╝      ██╔═══╝ ██╔══██║██║██║     ██║   ██╔══╝  ██╔══██╗
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ███████╗╚██████╔╝ ╚████╔╝ ███████╗    ██║     ██║  ██║██║███████╗██║   ███████╗██║  ██║
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚══════╝ ╚═════╝   ╚═══╝  ╚══════╝    ╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚═╝   ╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Filter Bank / Modulation / Gate
**Category:** Filter / Creative
**Official Manual:** [Image-Line Fruity Love Philter Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Love%20Philter.htm)

---

## 🎯 What is Fruity Love Philter?

Fruity Love Philter is the most advanced filter plugin in FL Studio. It consists of **8 independent Filter Units** that can be routed in parallel or series. But the real power lies in its envelope handling: every parameter (Cutoff, Res, Pan, Vol) has its own dedicated Envelope, LFO, and Keyboard Mapping editor. It is essentially a modular filter synthesizer for audio.

**Key Capabilities:**
- **8 Filter Units:** Each with its own type and settings.
- **Complex Envelopes:** Draw custom LFO shapes and envelopes for modulation.
- **Pattern Sequencer:** Trigger different envelope patterns via Piano Roll.
- **X/Y Controller:** Real-time performance control.
- **Waveshaper:** Built-in distortion per filter unit.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **envelope-editor-basics.md**
3. Create **parameter-cheat-sheet.md**
4. Load the "Simple Lowpass" preset and draw a custom curve in the "Cut" tab.

### For Sound Designers:
1. Study **rhythmic-gating.md** (Trance gates)
2. Review **formant-filtering.md** (Vowel sounds)
3. Learn **dubstep-wobble-design.md**

### For Live Performers:
1. Study **xy-pad-performance.md**
2. Review **keyboard-tracking-filters.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Unit Bank:** 1-8 tabs.
  - **Filter Type:** LP, HP, BP, Peaking, etc.
  - **IES (Envelope/LFO/Map):** The modulation source tabs.
  - **Target (Vol/Pan/Cut/Res):** The modulation destination tabs.

- [ ] **signal-flow-diagram.md**
  - **Input -> Filter 1 -> Filter 2 (if serial) -> Output.**
  - **Parallel Routing:** How to send Filter 1 to "Next" vs "Out".

#### 02-Data/parameters/
- [ ] **love-philter-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Love Philter",
    "category": "Filter",
    "parameters": [
      {
        "name": "Envelope Editor",
        "type": "graph",
        "description": "Custom shape drawing",
        "use_cases": ["sidechain curves", "rhythmic gates"]
      },
      {
        "name": "Waveshaper",
        "type": "graph",
        "description": "Distortion curve per unit",
        "pro_tip": "Add grit to the filter resonance"
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **rhythmic-gating.md**
  - Using the "Vol" tab.
  - Drawing a square wave pattern synced to tempo.
  - Creating "Trance Gate" effects.

- [ ] **sidechain-pumping.md**
  - Drawing a ducking curve in the "Vol" envelope.
  - Triggering it with MIDI notes or simply looping it.

- [ ] **complex-wobbles.md**
  - Using the LFO tool to generate sine waves in the "Cut" tab.
  - Adjusting speed via the "Time" knob.

#### 03-Workflows/by-context/
- [ ] **lo-fi-texture-chain.md**
- [ ] **wah-wah-clavinet.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **pattern-sequencing.md**
  - How to use the "Pattern" selector to switch between 10 different envelope variations using Piano Roll notes (C5 to A5).

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Modulation

**Tasks:**
1. Enable Unit 1
2. Select Low Pass
3. Go to "Cut" (Cutoff) tab -> "LFO" sub-tab
4. Enable the LFO
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I sync the LFO to tempo? (Right click tempo knob?).
- What is the difference between "Pat" (Pattern) and "LFO"?

### Phase 2: Advanced Routing (Week 2)
**Goal:** Multi-Stage Processing

**Tasks:**
1. Send Unit 1 (Low Pass) to Unit 2 (High Pass)
2. Modulate them in opposite directions
3. Use the Waveshaper on Unit 2
4. Create rhythmic-gating.md

**Key Questions to Answer:**
- How to create a parallel processing chain (Unit 1 and Unit 2 split)?

---

## 📊 Plugin Specifications to Document

### Engine
- Number of Units (8)
- Filter Types (State Variable, Mango, Vanilla, etc.?)
- Envelope Points Max

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is nothing happening? (Check if the Envelope "Enable" LED is on).
2. Why is it distorted? (Check the Waveshaper tab or Input drive).

### Advanced Usage
1. How to use Love Philter as a multi-band compressor? (By filtering bands and compressing/limiting via waveshaper - complex but possible).

---

## 📝 Documentation Standards

### For Each Workflow:
- **Unit:** 1-8
- **Tab:** Cut/Res/Vol
- **Shape:** Screenshot or description of the curve

---

## 🔗 Cross-Reference with Other Plugins

Fruity Love Philter is often used with:
- **Sytrus** (Same filter/envelope architecture)
- **Fruity Keyboard Controller** (External triggering)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Love Philter/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── envelope-editor-basics.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── love-philter-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── rhythmic-gating.md
│   │   ├── sidechain-pumping.md
│   │   └── complex-wobbles.md
│
└── 04-Reference/
    └── pattern-sequencing.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Love Philter Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Love%20Philter.htm)
- [Fruity Love Philter Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Love_Philter_tutorials.htm)
- [Fruity Love Philter Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+love+philter+tutorial)

### Community Resources
- [Fruity Love Philter Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+love+philter&restrict_sr=1)
- [Fruity Love Philter User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Love Philter Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for comparison and fine-tuning
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Advanced Filter Design" - Understanding complex filter architectures
- "Envelope and LFO Programming" - Creating custom modulation curves
- "Sidechain Techniques Without Sidechain" - Internal modulation approaches

### Advanced Techniques
- **Multi-Unit Routing:** Understanding serial vs parallel routing
- **Envelope Programming:** Drawing custom modulation curves
- **Pattern Sequencing:** Using MIDI notes to trigger patterns

---

## 📚 In-Depth Technical Analysis

### Filter Architecture
Fruity Love Philter implements a sophisticated multi-unit filter architecture:
- **8 Independent Filter Units:** Each with its own processing chain
- **Modular Routing:** Units can be connected in series or parallel
- **Per-Unit Controls:** Each unit has independent parameters
- **Signal Flow Flexibility:** Complex routing possibilities
- **CPU Efficiency:** Optimized for multiple filter units

### Filter Unit System
Each of the 8 filter units features:
- **Filter Type Selection:** Low Pass, High Pass, Band Pass, Peaking, Notch, etc.
- **Cutoff Control:** Frequency boundary adjustment
- **Resonance Control:** Emphasis at the cutoff frequency
- **Volume Control:** Individual unit level
- **Pan Control:** Individual unit stereo positioning
- **Waveshaper:** Built-in distortion per unit
- **Envelope/LFO/Mapping:** Dedicated modulation for each parameter

### Envelope/LFO/Mapping (IES) System
The IES system provides comprehensive modulation:
- **Envelope Editor:** Draw custom modulation curves
- **LFO Generator:** Internal oscillator for modulation
- **Keyboard Mapping:** MIDI note-based parameter control
- **Pattern Sequencing:** MIDI-triggered envelope patterns
- **X/Y Control:** Real-time performance control

### Signal Processing Chain
The internal architecture follows this order per unit:
- **Input Stage:** Signal level monitoring and routing
- **Filter Processing:** Core filtering operation
- **Waveshaper:** Distortion and saturation processing
- **Modulation Application:** Envelope/LFO/Mapping application
- **Output Stage:** Level and panning adjustment
- **Routing:** Series/parallel output routing

### Filter Types and Characteristics
Love Philter offers multiple filter types:
- **Low Pass (LP):** Allows frequencies below cutoff to pass
- **High Pass (HP):** Allows frequencies above cutoff to pass
- **Band Pass (BP):** Allows frequencies within a range to pass
- **Notch:** Removes frequencies within a range
- **Peaking:** Boosts/cuts specific frequency range
- **All Pass:** Passes all frequencies with phase shift
- **Specialized Types:** Unique filter algorithms

## 🎛️ Parameter Deep Dive

### Filter Unit Controls
- **Unit Selection:** 8 independent filter units (1-8)
  - Function: Each unit operates independently with its own parameters
  - Range: 1-8 units available
  - Effect: Allows for complex multi-stage filtering
  - Use for: Creating complex filter chains
  - Pro tip: Use different units for different frequency ranges
- **Behavior:**
  - Each unit can be enabled/disabled independently
  - Units can be routed in series or parallel
  - Each unit has its own IES (Envelope/LFO/Map) system
  - Pro tip: Use series routing for cascaded filtering
- **Applications:**
  - Multi-band processing: Different units for different bands
  - Complex filtering: Cascaded filter effects
  - Parallel processing: Multiple filters in parallel
  - Creative effects: Unique filter combinations
  - Pro tip: Use parallel routing for frequency-specific processing

### Filter Type Selection
- **Low Pass (LP):** Allows frequencies below cutoff
  - Range: 20Hz to 20kHz
  - Effect: Removes high frequencies above cutoff
  - Use for: Warming sounds, removing harshness
  - Pro tip: Essential for bass management
- **High Pass (HP):** Allows frequencies above cutoff
  - Range: 20Hz to 20kHz
  - Effect: Removes low frequencies below cutoff
  - Use for: Removing rumble, adding clarity
  - Pro tip: Perfect for cleaning up low-end mud
- **Band Pass (BP):** Allows frequencies within a range
  - Range: Variable center frequency and bandwidth
  - Effect: Isolates specific frequency band
  - Use for: Creating focused sounds
  - Pro tip: Great for telephone effects
- **Notch:** Removes specific frequency band
  - Range: Variable center frequency and bandwidth
  - Effect: Creates "hole" in frequency spectrum
  - Use for: Removing specific frequencies
  - Pro tip: Useful for removing resonances
- **Peaking:** Boosts/cuts specific frequency range
  - Range: Variable center frequency and bandwidth
  - Effect: Creates bell-shaped boost/cut
  - Use for: Surgical EQ applications
  - Pro tip: Perfect for frequency-specific enhancement

### Cutoff and Resonance Controls
- **Cutoff:** Frequency boundary control
  - Range: 20Hz to 20kHz (typically)
  - Effect: Determines filter boundary
  - Use for: Frequency selection and tone shaping
  - Pro tip: Use for fundamental frequency control
- **Behavior:**
  - Low values: More filtering effect
  - High values: Less filtering effect
  - Pro tip: Use with resonance for character
- **Applications:**
  - Tone shaping: Adjust brightness and clarity
  - Frequency isolation: Focus on specific ranges
  - Anti-aliasing: Remove harsh high frequencies
  - Mix integration: Carve space in frequency spectrum
  - Pro tip: Automate for dynamic tone changes

- **Resonance:** Emphasis at cutoff frequency
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
  - Acid sounds: High resonance for classic acid tones
  - Character addition: Medium resonance for warmth
  - Self-oscillation: Maximum resonance for sine generation
  - Formant simulation: Resonance for vowel-like effects
  - Pro tip: Use with sawtooth waves for classic acid sounds

### IES (Envelope/LFO/Map) Controls
- **Envelope Editor:** Custom modulation curve drawing
  - Function: Draw custom automation curves
  - Range: User-defined shapes
  - Effect: Creates unique modulation patterns
  - Use for: Complex automation without clips
  - Pro tip: Perfect for evolving filter patterns
- **LFO Generator:** Internal modulation oscillator
  - Shapes: Sine, Triangle, Square, Saw, Random
  - Speed: Variable from slow to fast
  - Depth: Modulation intensity control
  - Sync: Tempo synchronization options
  - Pro tip: Use for rhythmic modulation
- **Keyboard Mapping:** MIDI note-based control
  - Function: Map MIDI notes to parameter values
  - Range: Full keyboard range
  - Effect: Creates key-tracking effects
  - Use for: Pitch-based parameter control
  - Pro tip: Use for talking synth effects

### Pattern Sequencing
- **Pattern Selection:** 10 different envelope patterns
  - Range: Patterns 1-10
  - Function: Switch between different envelope curves
  - Use for: MIDI-triggered pattern changes
  - Pro tip: Trigger with MIDI notes C5 to A5
- **Behavior:**
  - Each pattern can have different envelope shapes
  - Patterns can be switched via MIDI notes
  - Allows for complex rhythmic patterns
  - Pro tip: Use for evolving rhythmic effects
- **Applications:**
  - Rhythmic gating: Different patterns for different effects
  - Filter wobbles: Pattern-based filter movement
  - Creative sequencing: Complex modulation patterns
  - Live performance: MIDI-triggered pattern changes
  - Pro tip: Use for dynamic live performance

## 🎼 Sound Design Applications

### Filter Automation
Using Love Philter for complex filter automation:

**Trance Gates:**
- **Rhythmic Gating:** Create rhythmic volume patterns
  - Use "Vol" tab for volume automation
  - Draw square wave patterns synced to tempo
  - Create "Trance Gate" effects
  - Essential for trance and electronic music
  - Perfect for rhythmic interest

**Wobble Bass:**
- **Filter Sweeps:** Create rhythmic filter movement
  - Use "Cut" tab for cutoff automation
  - Draw sine or triangle wave patterns
  - Sync to project tempo for precision
  - Essential for dubstep and electronic music
  - Perfect for bass wobble effects

**Sidechain Simulation:**
- **Internal Sidechaining:** Create pumping effects without external input
  - Draw ducking curves in envelope editor
  - Use LFO for rhythmic patterns
  - Create compression-like effects
  - Essential for electronic music
  - Perfect for pumping effects

### Creative Filtering
Using Love Philter for experimental applications:

**Formant Filtering:**
- **Vowel Simulation:** Create vowel-like effects
  - Use peaking filters for formant frequencies
  - Draw automation for vowel transitions
  - Create talking synth effects
  - Perfect for robotic vocals
  - Essential for vocal-like synthesis

**Multi-Band Processing:**
- **Complex Filtering:** Use multiple units for different bands
  - Unit 1: Low frequencies
  - Unit 2: Mid frequencies
  - Unit 3: High frequencies
  - Create complex filter chains
  - Perfect for sophisticated processing

**Waveshaping:**
- **Distortion Integration:** Combine filtering with waveshaping
  - Use waveshaper per unit for character
  - Create complex harmonic structures
  - Add grit to filtered sounds
  - Perfect for aggressive sounds
  - Essential for creative processing

### Performance Applications
Using Love Philter for live performance:

**X/Y Control:**
- **Real-time Morphing:** Use X/Y pad for live control
  - X axis: Morph between different filter types
  - Y axis: Control resonance or other parameters
  - Create live filter morphing
  - Perfect for live performance
  - Essential for expressive control

**MIDI Control:**
- **Pattern Triggering:** Use MIDI notes to trigger patterns
  - Map notes to different filter patterns
  - Create live pattern sequencing
  - Perfect for live performance
  - Essential for dynamic control

## 🧪 Experimental Techniques

### Advanced Filter Applications
Creative uses of Love Philter's capabilities:

**Multi-Stage Filtering:**
- **Series Processing:** Chain multiple units in series
  - Create complex filter responses
  - Build sophisticated filter chains
  - Perfect for advanced sound design
  - Essential for complex filtering
  - Useful for creating unique responses

**Parallel Processing:**
- **Parallel Units:** Use multiple units in parallel
  - Process different frequency ranges separately
  - Create complex stereo imaging
  - Perfect for sophisticated processing
  - Essential for advanced applications
  - Useful for creative stereo effects

**Envelope Programming:**
- **Custom Curves:** Draw complex automation curves
  - Create evolving filter patterns
  - Develop rhythmic automation
  - Perfect for evolving textures
  - Essential for dynamic effects
  - Useful for creative expression

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **IES Programming:** Use Envelope/LFO/Map system for complex automation
  - Draw custom automation curves
  - Use LFO for rhythmic effects
  - Apply keyboard mapping for expression
  - Perfect for evolving effects
  - Use for expressive control

**Modulation Applications:**
- **Parameter Modulation:** Use external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Unit Processing:**
- **Complex Chains:** Multiple units in sophisticated arrangements
  - Create multi-stage filter effects
  - Combine different filter types
  - Build complex processing chains
  - Perfect for advanced sound design
  - Use for sophisticated processing

## 🎚️ Workflow Optimization

### Filter Design Workflows
Efficient approaches to using Love Philter for filter design:

**Multi-Unit Setup:**
- **Frequency-Specific Units:** Assign different units to frequency ranges
  - Unit 1: Low frequencies (20Hz-200Hz)
  - Unit 2: Low-mid frequencies (200Hz-500Hz)
  - Unit 3: Mid frequencies (500Hz-2kHz)
  - Unit 4: High-mid frequencies (2kHz-5kHz)
  - Unit 5: High frequencies (5kHz-20kHz)
  - Essential for multi-band processing

**Pattern Creation:**
- **Rhythmic Patterns:** Create complex rhythmic automation
  - Use envelope editor for custom patterns
  - Apply LFO for rhythmic effects
  - Sync to project tempo for precision
  - Essential for electronic music
  - Pro tip: Use for evolving rhythmic effects

**Performance Optimization:**
- **CPU Management:** Optimize for performance
  - Use appropriate filter types
  - Limit complex modulation when needed
  - Optimize for live performance
  - Essential for efficient operation
  - Pro tip: Use simpler filters for multiple instances

### Integration Workflows
Working with other plugins and tools:

**Effects Integration:**
- **Pre-Effects:** Use before other effects for tone shaping
  - Apply before reverb for spatial effects
  - Use before delay for rhythmic patterns
  - Integrate with chorus for width
  - Essential for proper signal flow
  - Pro tip: Use for tone preparation

- **Post-Effects:** Use after other effects for final shaping
  - Apply after reverb for tone adjustment
  - Use after delay for final EQ
  - Integrate with other processing for refinement
  - Essential for final processing
  - Pro tip: Use for final tone shaping

**Dynamics Integration:**
- **Compressor Integration:** Use with compression for control
  - Apply before compression for tone shaping
  - Use after compression for final EQ
  - Combine for sophisticated processing
  - Essential for dynamics control
  - Pro tip: Use for comprehensive processing

**Analysis Integration:**
- **Spectrum Analysis:** Use with spectrum analyzers for feedback
  - Monitor frequency changes in real-time
  - Compare with reference tracks
  - Use for corrective processing
  - Essential for quality control
  - Pro tip: Use for visual feedback

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Trance Gates:** Creating rhythmic gating effects
- **Wobble Bass:** Creating rhythmic filter movement
- **Sidechain Simulation:** Creating pumping effects
- **Energy Management:** Using filtering for track energy
- **Build-up Effects:** Creating tension with filter automation

### Hip-Hop and R&B
- **Vocal Enhancement:** Adding formant filtering to vocals
- **Bass Processing:** Managing low-end with filtering
- **Drum Enhancement:** Adding character to drums
- **Mix Enhancement:** Using filtering for mix clarity
- **Creative Effects:** Adding unique character to elements

### Rock and Metal
- **Guitar Filtering:** Adding character to guitar sounds
- **Bass Enhancement:** Managing low-end with filtering
- **Drum Processing:** Adding character to drums
- **Mix Enhancement:** Using filtering for mix clarity
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Filtering:** Creating evolving textures
- **Formant Effects:** Creating vowel-like effects
- **Experimental Filtering:** Pushing boundaries of filtering
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Love Philter works well with various effects:
- **Reverb:** Adding space to filtered sounds
- **Delay:** Creating rhythmic patterns with filtering
- **Chorus:** Adding width to filtered sounds
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of filtered signals

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
Fruity Love Philter was developed as an advanced filter workstation:
- Created to provide sophisticated multi-unit filtering
- Designed for complex modulation and automation
- Developed with sound design and electronic music in mind
- Intended to complement other filter plugins with advanced features

### Evolution Through FL Studio Versions
- Initially introduced with basic multi-unit architecture
- Enhanced with advanced envelope/LFO systems
- Improved with better filter algorithms
- Expanded with more sophisticated routing options

### Impact on Music Production
Fruity Love Philter has influenced music production by:
- Providing accessible complex filtering
- Enabling sophisticated modulation workflows
- Facilitating creative filter automation
- Supporting various musical genres with flexible filtering

## 🧠 Advanced Processing Techniques

### Filter Mastery
Advanced techniques for filter processing:
- **Multi-Unit Routing:** Understanding series vs parallel routing
- **Envelope Programming:** Drawing complex automation curves
- **Pattern Sequencing:** Using MIDI for pattern triggering
- **Frequency-Specific:** Targeting specific frequency ranges
- **Spectral Processing:** Combining with spectral tools

### Modulation Mastery
Advanced modulation techniques:
- **IES System:** Mastering Envelope/LFO/Map controls
- **Curve Design:** Creating sophisticated automation curves
- **Pattern Creation:** Developing complex rhythmic patterns
- **Real-time Control:** Using X/Y for live performance
- **MIDI Integration:** Using MIDI for parameter control

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique filtered textures
- **Atmospheric Processing:** Building ambient filtered effects
- **Rhythmic Effects:** Creating rhythmic filtering patterns
- **Spatial Manipulation:** Creating immersive filtered environments
- **Experimental Processing:** Pushing boundaries of filtering

## 📊 Performance Considerations

### CPU Usage
Managing Love Philter's impact on system performance:
- **Multi-Unit Impact:** Each unit adds to CPU usage
- **Real-Time Performance:** Generally optimized for live performance
- **Instance Count:** Multiple instances multiply CPU usage
- **Parameter Automation:** Complex envelopes may increase CPU usage
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Filter Quality:** Maintaining good filter characteristics
- **Phase Response:** Minimizing phase artifacts
- **Aliasing Prevention:** Avoiding digital artifacts
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output

### System Integration
Optimizing Love Philter within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimal audio latency

## 🛠️ Troubleshooting Common Issues

### Filtering Problems
- **Harsh Sound:** Reduce resonance or adjust curve
- **Loss of Clarity:** Increase cutoff frequency or reduce resonance
- **Phase Issues:** Check stereo field and width settings
- **Excessive Resonance:** Reduce resonance to prevent self-oscillation
- **Muddy Low End:** Adjust cutoff to preserve low-end clarity

### Technical Issues
- **High CPU Usage:** Reduce unit count or optimize parameters
- **Latency Issues:** Optimize buffer settings
- **Clipping:** Reduce input gain or increase output headroom
- **Artifacts:** Check sample rate and bit depth settings
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Try different filter types or curves
- **Lack of Character:** Increase resonance or adjust curve
- **Poor Integration:** Use EQ or reduce amount to blend
- **Overpowering:** Reduce resonance or use EQ to balance
- **Lack of Control:** Use automation for dynamic changes

## 🎚️ Advanced Configuration

### Custom Presets
Creating and managing custom configurations:
- **Filter Chain Presets:** Optimized for multi-unit applications
- **Pattern Sequences:** Configured for rhythmic applications
- **Creative Presets:** Set up for sound design applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Unit Setup
Using multiple filter units effectively:
- **Frequency-Specific:** Different units for different ranges
- **Parallel Processing:** Multiple units in parallel
- **Serial Processing:** Multiple units in series
- **Selective Processing:** Different units for different elements

### Integration Configurations
Optimizing for different integration scenarios:
- **Insert Processing:** Inline processing configurations
- **Send Processing:** Effects return configurations
- **Hardware Integration:** External hardware integration
- **DAW Integration:** Optimizing for FL Studio workflow

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Love Philter techniques
- **Reddit Groups:** Sharing filter techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced filter techniques
- **Written Guides:** In-depth articles on multi-unit filtering
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting Love Philter configurations
- **Technique Sharing:** Platforms for sharing processing methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a "Sidechain" pumping effect without any external inputs
- [ ] Build a 16-step Trance Gate pattern with precise timing
- [ ] Use the X/Y pad to morph between Low Pass and High Pass filters
- [ ] Trigger different filter wobbles using MIDI notes (patterns 1-10)
- [ ] Program complex filter automation using the envelope editor
- [ ] Set up multi-unit filter chains with different routing
- [ ] Create formant filtering effects for talking synth sounds
- [ ] Troubleshoot complex filter routing and automation issues
- [ ] Integrate Love Philter into sophisticated mixing workflows
- [ ] Optimize multi-unit setups for performance vs quality balance

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Love Philter

## Purpose & Identity
Fruity Love Philter is the **advanced filter workstation** of FL Studio. Its primary identity is a modular filter synthesizer that can process external audio. It consists of 8 independent Filter Units that can be routed in series, parallel, or complex matrices. Every parameter has its own dedicated multi-point envelope and LFO editor. [SRC: IL-MAN]

## 60-Second Mental Model
Think of it as a "Filter Laboratory." Instead of just one knob, you have 8 different filter units (tabs 1-8). Each unit can be a different filter type (Low Pass, Band Pass, etc.). The "Love" comes from the modulation: you can draw exact rhythmic patterns for the volume, panning, and cutoff of each filter, making it a powerful rhythmic gate and sound design tool.

## Hip-Hop / R&B Context
- **The "Trance Gate" Vocal:** Drawing a staggered volume pattern to turn a long vocal "Ooh" into a rhythmic, chopped-up texture (Upbeat).
- **Phonk Bass Grit:** Using the built-in **Waveshaper** on a filter unit to add aggressive harmonic distortion to an 808 sweep (Psychedelic).
- **Warped R&B Rhodes:** Using parallel filters with slow, wide LFOs to create an evolving, liquid piano texture (Spacey).

## When To Use
- When you need **rhythmic gating** (Trance gate effects).
- When you want **complex multi-stage filtering** (e.g., Low Pass followed by a Notch).
- When you need a filter that **reacts to MIDI notes** (using the Keyboard Mapping tab).

## When NOT To Use
- **Simple Sweeps:** Use **Fruity Free Filter** if you just need one basic cutoff knob.
- **Mastering EQ:** Love Philter is for creative character, not surgical mix balance. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Love Philter

## UI Tour
The interface is dense and relies heavily on tab switching. [SRC: IL-MAN]

### 1. The Unit Tabs (Top)
- **1-8**: Selects the active filter unit. Each is a full duplicate of the controls below.
- **Enabled (LED)**: Must be on for the unit to process audio.

### 2. The Modulation Engine (The Centerpiece)
- **Target Tabs**: Choose what you want to move: **Vol** (Volume), **Pan**, **Cut** (Cutoff), **Res** (Resonance).
- **IES Sub-Tabs**: 
  - **Env**: The standard ADSR/Graphic Envelope.
  - **LFO**: A repeating oscillator.
  - **Map**: Keyboard mapping (MIDI note to value).

### 3. The Filter Controls (Right)
- **Type**: Selector for filter algorithms (Mango, Vanilla, etc.).
- **Cut/Res Knobs**: Master offsets for the current unit.
- **Drive/Waveshaper**: Built-in distortion stage.

### 4. The Routing (Bottom Right)
- **Next**: Sends the output of this unit to the next unit (Serial).
- **Out**: Sends the output of this unit to the plugin's final output (Parallel).

## Signal Flow
1. **Input**: Audio enters Unit 1.
2. **Pre-Filter Waveshaper**: (If active) the sound is distorted before filtering.
3. **Filter Unit**: The specific filter algorithm is applied.
4. **Modulation Summing**: The Envelope, LFO, and Map values are summed to move the knobs.
5. **Post-Filter Waveshaper**: (If active) final saturation.
6. **Routing Decision**: 
   - If **Next** is active: Unit 1 -> Unit 2.
   - If **Out** is active: Unit 1 -> Output Mix.
7. **Final Summing**: All units routed to "Out" are mixed together.

## Things Beginners Misunderstand
- **"Why is there no sound?"**: Check the **Routing**. If Unit 1 is set to "Next" but Unit 2 is disabled, the sound stops at Unit 1.
- **"The filter isn't moving"**: You must enable the **Freeze** or **LED** in the envelope editor for the modulation to take effect.
- **Global Knobs**: The large Cut/Res knobs on the main UI act as "Multipliers" for whatever you've drawn in the envelope.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Love Philter

## 1. The "Ghost" Sidechain
Use Love Philter to create sidechain ducking without a kick drum.
- **Technique**: Select Unit 1. Go to the **Vol** tab -> **Env** sub-tab. Draw a curve that starts low and ends high. Set **Sync** to "Beat."
- **Listen For**: The sound "inhaling" on every beat.

## 2. Serial "Brickwall" Filtering
Fruity Free Filter is 12dB/octave. Love Philter can go much steeper.
- **Technique**: Set Unit 1 to Low Pass. Set Unit 2 to Low Pass. Route Unit 1 to "Next."
- **Benefit**: You now have a 24dB/octave filter. Stack more units for even steeper, more aggressive cuts.

## 3. Formant "Talking" Sweeps
Create a synthesizer that sounds like it's saying "A-E-I-O-U."
- **Technique**: Set Unit 1 to a **Peaking** filter with high Q. Set Unit 2 to another Peaking filter.
- **Move**: Modulate the Cutoff of both in opposite directions.
- **Listen For**: Human-like vowel resonances. [SRC: REPUTABLE]

## 4. Pattern Swapping via MIDI
Trigger different rhythmic gates using your Piano Roll.
- **Technique**: Change the **Pattern** selector (bottom left) to 1. Draw a gate. Change to 2. Draw a different gate.
- **Performance**: Use MIDI notes C5 and D5 to switch between them in real-time.

## 5. Low-End Protection Rules
- **Protocol**: When using the **Waveshaper** (distortion) in Love Philter, the low end can become unstable.
- **Fix**: Use Unit 1 as a dedicated Low-Pass at 200Hz (routed to Out). Use Unit 2 for your creative distortion and filtering (routed to Out). This keeps your sub-bass clean and separate from the "creative" processing.

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Resonant Peaks** | The resonance can be much louder than the original signal. Use the internal **Waveshaper** as a limiter by flattening the top of the curve. |
| **Clicking Gates** | In the **Vol** envelope, add a tiny bit of "Attack" or curve to the sharp edges of your squares. |
| **Silent Units** | Verify that the unit is not set to "Next" if the following unit is off. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Love Philter

Love Philter translates vibes through **Complex Modulation** and **Unit Stacking**.

## 1. Upbeat (Kinetic, Rhythmic, Chopped)
- **Concept:** "The Rhythmic Gate."
- **Levers:**
  - **Tab:** VOL (Volume).
  - **Source:** Envelope (ENV).
  - **Action:** Draw a 16-step "Pulse" (Square wave) curve.
- **Listen For:** Sharp volume cuts that turn a static sound into a rhythmic pattern.
- **Don't Do This:** Don't use smoothing; keep the gate boundaries vertical for maximum snap.

## 2. Psychedelic (Morphing, Liquid, Resonant)
- **Concept:** "Series Squelch."
- **Levers:**
  - **Routing:** Unit 1 (Low Pass) -> Unit 2 (Band Pass).
  - **Modulation:** Link both to different LFO speeds.
  - **Waveshaper:** Add a "S-curve" distortion to Unit 2.
- **Listen For:** A squelchy, whistling resonance that feels like it’s evolving and folding into itself.

## 3. Spacey (Galactic, Resonant, Airy)
- **Concept:** "Parallel Spectral Split."
- **Levers:**
  - **Unit 1:** High Pass @ 5kHz (Air).
  - **Unit 2:** Low Pass @ 500Hz (Weight).
  - **Pan:** Pan Unit 1 Left and Unit 2 Right.
- **Listen For:** A hollow, wide sound where the high-end and low-end move independently in the stereo field.

## 4. Vibey (Smooth, Glossy, Lo-Fi)
- **Concept:** "The Warm Envelope."
- **Levers:**
  - **Filter Type:** Mango (or standard Low Pass).
  - **Tab:** CUT (Cutoff).
  - **Source:** Envelope.
  - **Shape:** A slow, swelling curve.
- **Listen For:** A "soft-open" filter effect that makes melodies feel like they are gently blooming.

## 5. Moody (Heavy, Damp, Distressed)
- **Concept:** "The Crushed Muffle."
- **Levers:**
  - **Filter Type:** Vanilla LP.
  - **Waveshaper:** Heavy "Bit-crush" style curve (Stepped).
  - **Freq:** Low (Around 400Hz).
- **Listen For:** A dark, distorted crunch that feels like audio recorded onto a broken tape head. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Love Philter (5 Minutes)

1.  **Insert:** Load **Fruity Love Philter** into an effect slot.
2.  **Enable Unit:** Ensure **UNIT 1** is selected at the top.
3.  **Choose Filter:** Select **Low Pass 2** from the dropdown menu.
4.  **Draw Modulation:**
    - Click the **CUT** (Cutoff) tab.
    - Click the **ENV** (Envelope) sub-tab.
    - Click the **Enable** LED (bottom left of the graph).
    - Draw a mountain-shaped curve.
5.  **Sync:** Press Play. The filter will now sweep based on the curve you drew.
6.  **Gating:** Click the **VOL** (Volume) tab and draw some gaps in the envelope to create rhythmic silence.
7.  **Tip:** Use the **Waveshaper** tab to add distortion specifically to the filtered signal. [SRC: IL-MAN]
```

---

## FILE: 01-Learning\Quick-Reference\envelope-editor-basics.md

```markdown
# Quick Reference: Envelope Editor Basics

How to draw your sound in Love Philter. [SRC: IL-MAN]

## 1. The Tabs
- **Env**: A one-shot or repeating envelope.
- **LFO**: A periodic wave (Sine, Square, etc.).
- **Map**: Links a MIDI value (Key, Velocity) to the parameter.

## 2. Tools & Shortcuts
- **Right-Click Node**: Change curve type (Single curve, Double curve, Step, etc.).
- **Shift + Click**: Lock horizontal/vertical movement.
- **Alt + Click**: Reset node to default.
- **Articulator Options (Small Triangle)**: 
  - **Copy/Paste**: Move curves between Cut, Res, and Vol.
  - **Analyze Audio**: (If available) creates a curve based on an audio file.

## 3. The "Sync" Control
- **Snap**: Snaps nodes to the grid.
- **Sync**: Locks the envelope to the project tempo (Beats/Bars).
- **Global**: If ON, all notes share the same LFO phase. If OFF, every new note restarts the LFO from the beginning.

## 4. Tension Handle
- Drag the small circle between two nodes to change the "tension."
- **Concave**: Slow start, fast finish.
- **Convex**: Fast start, slow finish.
- **Linear**: Straight line.

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Love Philter

| Parameter | Type | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Filter Unit** | Tab | **Spacey** (Split) | **Routing** | 8 parallel/series modules. |
| **IES Tabs** | Selector | **Vibey** (Mod) | **Automation** | Envelope, LFO, Map sources. |
| **Target Tabs** | Selector | **All** | **Modulation** | Vol, Pan, Cut, Res targets. |
| **Waveshaper** | Graph | **Moody** (Grit) | **Tone** | Per-unit distortion engine. |
| **Next/Out** | Switch | **Psychedelic** | **Signal Flow**| Routes unit to next or output. |

- **Vibe Impact Tag (Rhythmic):** The VOL envelope tab is the primary lever for "Upbeat" trance gates.
- **Mix Impact Tag (Resonance):** High "Res" values in LP mode can create massive volume spikes. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\love-philter-params.json

```json
{
  "plugin_name": "Fruity Love Philter",
  "category": "Filter",
  "units": 8,
  "parameters": [
    {
      "name": "Articulator Editor",
      "type": "graph",
      "description": "Visual curve editor for Env, LFO, and Map.",
      "vibe_impact": "Rhythm, motion, identity",
      "mix_impact_tags": ["motion", "rhythm"]
    },
    {
      "name": "Waveshaper",
      "type": "graph",
      "description": "Per-unit distortion engine.",
      "vibe_impact": "Aggression, grit, warmth",
      "mix_impact_tags": ["loudness", "harmonic"]
    },
    {
      "name": "Cutoff (Knob)",
      "type": "knob",
      "description": "Global multiplier for the Cutoff envelope.",
      "vibe_impact": "Brightness, focus"
    },
    {
      "name": "Resonance (Knob)",
      "type": "knob",
      "description": "Global multiplier for the Resonance envelope.",
      "vibe_impact": "Character, whistle"
    },
    {
      "name": "Routing (Next/Out)",
      "type": "button",
      "description": "Determines if signal goes to the next unit or the exit.",
      "vibe_impact": "Complexity, scale"
    }
  ]
}

```

---

## FILE: 02-Data\presets\formant-talker.json

```json
{
  "presetName": "Formant Talker",
  "plugin": "Fruity Love Philter",
  "description": "Uses the 'Vowel' filter type to mimic speech.",
  "settings": {
    "unit1": {
      "filter": "Formant",
      "x_mod": "Vowel A-E",
      "y_mod": "Vowel I-O"
    }
  },
  "usage": "Automate the X/Y pad to make your synth 'talk'."
}

```

---

## FILE: 02-Data\presets\gated-noise.json

```json
{
  "presetName": "Gated Noise",
  "plugin": "Fruity Love Philter",
  "description": "Uses a noise gate envelope to rhythmically chop audio.",
  "settings": {
    "unit1": {
      "vol": "Gate Pattern 1",
      "filter": "Off"
    }
  },
  "usage": "Instant 'Trance Gate' effect without sidechaining."
}

```

---

## FILE: 02-Data\presets\phaser-jet.json

```json
{
  "presetName": "Phaser Jet",
  "plugin": "Fruity Love Philter",
  "description": "Complex 8-stage phaser using multiple filter units.",
  "settings": {
    "unit1": "Phaser",
    "unit2": "Phaser",
    "routing": "Series"
  },
  "usage": "Thick, swirling modulation for pads."
}

```

---

## FILE: 02-Data\presets\simple-low-pass.json

```json
{
  "presetName": "Simple Low Pass",
  "plugin": "Fruity Love Philter",
  "description": "A high-quality, resonant low pass filter.",
  "settings": {
    "unit1": {
      "filter": "Vanilla Low Pass",
      "cutoff": 0.5,
      "resonance": 0.2
    }
  },
  "usage": "Cleaner alternative to Fast LP."
}

```

---

## FILE: 02-Data\presets\trance-gate.json

```json
{
  "presetName": "Trance Gate",
  "plugin": "Fruity Love Philter",
  "description": "Rhythmic volume gating using the pattern sequencer.",
  "settings": {
    "unit1": {
      "type": "Vol",
      "pattern": "16th notes on/off"
    }
  },
  "usage": "Turn a sustained pad into a rhythmic chord progression."
}

```

---

## FILE: 02-Data\presets\wub-bass-filter.json

```json
{
  "presetName": "Wub Bass Filter",
  "plugin": "Fruity Love Philter",
  "description": "LFO-driven low pass filter for Dubstep wobble.",
  "settings": {
    "unit1": {
      "filter": "Mango Low Pass",
      "lfo": "Sine",
      "speed": "Tempo Sync 1/4"
    }
  },
  "usage": "Apply to a Reese bass for instant wobble."
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Love Philter)

## 1. The "1/16th Note" Rule
- **Rule:** Trap gates need to be precise.
- **Application:** Use the **Snap** tool in the Envelope Editor. Set it to `1/4 step` to ensure your volume chops are perfectly aligned with the hi-hats. [SRC: REPUTABLE]

## 2. Low-End Protection (The Vanilla Rule)
- **Rule:** Don't modulate the sub-bass unit.
- **Application:** If using multiple units, keep **Unit 1** as a static Low-Pass for the sub (no envelope) and do all your crazy rhythmic modulation on **Unit 2** (High-passed at 300Hz).

## 3. Stereo Cohesion
- **Rule:** Don't pan the low-mids.
- **Application:** In the **PAN** envelope tab, ensure any rhythmic panning only affects the high-frequency units (Units 3-8). Centered low-end ensures the beat stays "Punchy."

## 4. Waveshaper Gain Staging
- **Rule:** Distortion adds volume.
- **Application:** If you use the Waveshaper, use the **VOL** knob on that same unit to compensate. If the unit is clipping, your envelopes will sound "flat" and lifeless.

## 5. Mono-Check (IES Mapping)
- **Rule:** Keyboard mapping can create stereo imbalances.
- **Move:** If you map pitch to Pan, check your mix in Mono. High notes might disappear if you pan them too far and have mono-summing issues. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: The Trap Trance Gate (Fruity Love Philter)

## Routing Context
- **Target:** A sustained Synth Pad or R&B Vocal "Ooh."
- **Position:** Insert FX (After Reverb).

## Step-by-Step Setup
1.  On the synth track, load **Fruity Love Philter**.
2.  Go to the **VOL** (Volume) tab.
3.  Click the **ENV** (Envelope) sub-tab and enable it.
4.  Right-click the graph -> **Articulator tools -> Create sequence**.
5.  Set the sequence to a `1/16th note` pattern with gaps (silence).
6.  **The Result:** The synth is now "chopped" into a rhythmic pattern that follows the tempo of your beat.

## Vibe Check
- **Upbeat/Kinetic:** Adds rhythmic energy to boring, static sounds. Essential for "Hyperpop" and modern trap.

## Variation
- **Smooth Swell:** Change the square steps to **Bezier curves** for a "breathing" effect rather than a "chopping" effect. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-instrument\synths-xy.md

```markdown
# Instrument: Synths (X/Y Performance)

Love Philter is designed for live performance.

## The X/Y Pad Workflow
1. Link **Cutoff** to X.
2. Link **Resonance** to Y.
3. **Usage**: In a live set or recording, drag the puck around. Top-right = Screaming high resonance filter. Bottom-left = Muffled, dark filter.

## Parallel Filtering (The 8 Units)
Love Philter has 8 independent filter units that can be routed in parallel or series.
- **Workflow**: 
  - Unit 1: Low Pass (Left Panned)
  - Unit 2: High Pass (Right Panned)
  - **Result**: Complex stereo separation where lows are left and highs are right, but both are moving.

```

---

## FILE: 03-Workflows\by-instrument\vocals.md

```markdown
# Instrument Workflow: Vocals (Silky Presence)

## 1. R&B "Silky" Air
- **Recipe**: Bank 1 -> Boost 12kHz+ using **Line** tool.
- **Move**: Set **Mix** to 40% for transparency.
- **Vibe**: Adds a professional, expensive-sounding "sheen" to melodic rap vocals.

## 2. The "Radio" Ad-lib
- **Recipe**: Bank 1 -> Band Pass (Peaking) at 2.5kHz.
- **Move**: Set **BW** knob to 20% for a sharp, narrow focus.
- **Vibe**: Creates a focused "telephone" texture that separates background ad-libs from the main lead.

## 3. Formant Morphing (Robotic)
- **Recipe**: Bank 1 -> Peak at 1kHz. Bank 2 -> Peak at 3kHz.
- **Move**: Automate **Morph** at 1/2 note speeds.
- **Vibe**: Adds a subtle "talking" character to the vocal, popular in experimental hip-hop and electronic R&B.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Love Philter

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Love Philter.
- **Key Info:** 8-unit routing logic (Next/Out), IES modulation source definitions, and Waveshaper graph behavior.

## Source ID: [SRC: REPUTABLE]
- **Source:** "The Art of the Gate" (Sound On Sound).
- **Key Info:** Using volume envelopes for rhythmic gating, difference between LFO and Envelope modulation for rhythmic sync, and formant filtering frequencies for "Talking" synths.

## Genre Style Board: Fruity Love Philter

| Vibe | Key Tab | Move | Use Case |
| :--- | :--- | :--- | :--- |
| **Upbeat** | VOL | 1/16th Note Gate | Chopped Vocals |
| **Psychedelic**| WS (Waveshape) | Heavy S-Curve | Distorted Sweeps |
| **Spacey** | PAN | L/R Phase Offset | Wide Resonances |
| **Vibey** | CUT | Smooth Bezier Env | Soft Filters |
| **Moody** | Unit 1 -> 2 | Serial Muffling | Dark Textures |

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Advanced Filtering)

Sourced applications of modular filtering in Hip-Hop, Rap, and R&B.

## 1. Complex Future Bass Wobble
- **Source**: Flume / Hudson Mohawke style.
- **Application**: Parallel units with different LFO rates on Cutoff and Pan.
- **Goal**: Creating a sound that feels like it's "expanding" and "contracting" in 3D space.

## 2. Experimental Vocal Glitch
- **Source**: JPEGMAFIA / Travis Scott.
- **Application**: Using Pattern Sequencing to jump between different High-Pass and Notch filters rapidly.
- **Goal**: Chaotic, mechanical textures that retain the pitch of the original vocal.

## 3. Smooth Neo-Soul Gating
- **Source**: Moonchild / Kaytranada.
- **Application**: Using the **Vol** envelope with high **Tension** (convex curves) to create a "lazy" sidechain pump.
- **Goal**: A vibey, organic rhythmic feel that sounds more human than a standard sidechain.

## 4. Industrial Trap Grit
- **Source**: Metro Boomin / Mike Dean.
- **Application**: Serial routing (LP -> HP) with heavy **Waveshaper** distortion between stages.
- **Goal**: Aggressive, "lo-fi but loud" filtering that makes synth leads scream.

```

---

## FILE: 04-Reference\pattern-sequencing.md

```markdown
# Technical Reference: Pattern Sequencing

Mastering the MIDI-triggered patterns in Love Philter. [SRC: IL-MAN]

## 1. What are Patterns?
Fruity Love Philter has 10 internal "Pattern Slots." These are global states for all 8 units.
- **Access**: The number selector at the bottom left of the UI.

## 2. Triggering via MIDI
You can change the active pattern using MIDI notes in the Piano Roll.
- **C5**: Switches to Pattern 1.
- **C#5**: Switches to Pattern 2.
- **D5**: Switches to Pattern 3.
- ...up to **A5** (Pattern 10).

## 3. Workflow Move
Instead of using one long automation clip for an entire song, draw 4 different rhythmic gates in Patterns 1-4.
- Use your Piano Roll to "play" the gates.
- **Benefit**: This allows for precise, live-performance style control over rhythmic chopping.

## 4. Smoothing Jumps
When switching patterns, the envelope values may jump suddenly. 
- **Fix**: Use the **Smoothing** knob (if available in the unit) or ensure your patterns share a similar starting value to avoid digital clicks. [UNVERIFIED]

```

---

## FILE: 04-Reference\signal-flow-diagram.md

```markdown
# Technical Reference: Signal Flow Diagram

Understanding the internal modularity of Love Philter. [SRC: IL-MAN]

## 1. Global Input
The stereo signal enters the plugin.

## 2. Unit Level (1 of 8)
Within each unit, the signal flow is:
- **Input Gain -> Waveshaper (Pre) -> Filter -> Waveshaper (Post) -> Pan -> Volume Out**.
- *Note*: The Waveshaper's position (Pre/Post) is determined by the **WS** routing button.

## 3. Inter-Unit Routing
This is where Love Philter becomes "Modular."
- **Unit 1 -> Next**: Signal goes to Unit 2.
- **Unit 1 -> Out**: Signal goes to the final plugin output.
- **Unit 1 -> Next + Out**: Signal splits. One copy goes to Unit 2, another to the output.

## 4. Complex Example: Parallel High/Low Processing
- **Unit 1**: Low-Pass Filter at 200Hz. Routed to **Out**.
- **Unit 2**: High-Pass Filter at 200Hz. Routed to **Out**.
- **Result**: You can now apply different waveshaping and LFOs to the bass and the highs independently inside a single plugin.

## 5. Output Summing
All Units set to **Out** are summed together. The global **Mix** slider in the wrapper controls the overall Dry/Wet.

```

---

