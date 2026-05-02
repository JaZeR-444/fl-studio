# Fruity Keyboard Controller - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Keyboard Controller - Note-to-Data Bridge

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██╗  ██╗███████╗██╗   ██╗██████╗  ██████╗  █████╗ ██████╗ ██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██║ ██╔╝██╔════╝╚██╗ ██╔╝██╔══██╗██╔═══██╗██╔══██╗██╔══██╗██╔══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     █████╔╝ █████╗   ╚████╔╝ ██████╔╝██║   ██║███████║██████╔╝██║  ██║
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██╔═██╗ ██╔══╝    ╚██╔╝  ██╔══██╗██║   ██║██╔══██║██╔══██╗██║  ██║
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██║  ██╗███████╗   ██║   ██████╔╝╚██████╔╝██║  ██║██║  ██║██████╔╝
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ 

 ██████╗ ██████╗ ███╗   ██╗████████╗██████╗  ██████╗ ██╗     ██╗     ███████╗██████╗ 
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔═══██╗██║     ██║     ██╔════╝██╔══██╗
██║     ██║   ██║██╔██╗ ██║   ██║   ██████╔╝██║   ██║██║     ██║     █████╗  ██████╔╝
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██╗██║   ██║██║     ██║     ██╔══╝  ██╔══██╗
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╔╝███████╗███████╗███████╗██║  ██║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Internal Controller / MIDI Note Utility
**Category:** Controller / Automation
**Official Manual:** [Image-Line Fruity Keyboard Controller Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Keyboard%20Controller.htm)

---

## 🎯 What is Fruity Keyboard Controller?

Fruity Keyboard Controller is a generator plugin that converts MIDI note data into automation signals. Instead of producing sound, it tracks which keys are pressed (or their velocity) and outputs a value between 0 and 1. This allows you to control effect parameters using the Piano Roll—for example, playing different filter cutoff frequencies using actual notes, or changing reverb size based on how hard you hit a key.

**Key Capabilities:**
- **Note Mapping:** Assign specific automation values to every note on the keyboard.
- **Velocity Mapping:** Use note intensity to drive effect parameters.
- **Smoothing:** Built-in attack/release smoothing for fluid transitions between notes.
- **Linking:** Can control any automatable knob in FL Studio via "Link to controller."
- **Experimental Design:** Create rhythmic effects by sequencing automation data in the Piano Roll.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **note-vs-velocity-outputs.md**
3. Create **parameter-cheat-sheet.md**
4. Link a Filter Cutoff to the "Note" output, then draw a scale in the Keyboard Controller's Piano Roll.

### For Sound Designers:
1. Study **key-tracked-distortion-drive.md**
2. Review **pitch-bend-simulation-via-data.md**
3. Learn **sequencing-effects-with-midi.md**

### For Patcher Users:
1. Study **building-midi-mapped-fx-racks.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Note Map:** The graph for mapping pitch to value.
  - **Velocity Map:** The graph for mapping intensity to value.
  - **Smoothing (Attack/Release):** Glide time between values.
  - **Output Meter:** Visual feedback of the signal.

- [ ] **mapping-logic-guide.md**
  - How a C5 note can represent a 50% knob position.
  - Linear vs Stepped mapping.

#### 02-Data/parameters/
- [ ] **keyboard-controller-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Keyboard Controller",
    "outputs": ["Note", "Velocity"],
    "use_cases": ["Filtering", "Gating", "Dry/Wet control"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **playing-the-filter-cutoff.md**
  - Mapping the Note output to Parametric EQ 2.
  - Customizing the Note Map so C4 is low and C7 is high.
  - Recording a "Filter Lead" using the Piano Roll.

- [ ] **dynamic-reverb-velocity.md**
  - Mapping Velocity output to Reverb Wet level.
  - Harder notes = More reverb.
  - Using the "Smoothing" knob to prevent abrupt jumps.

- [ ] **pattern-based-gating.md**
  - Setting specific notes to 0% and 100% values.
  - Creating a "Trance Gate" by sequencing MIDI notes.

#### 03-Workflows/by-context/
- [ ] **expressive-solo-leads.md**
- [ ] **midi-controlled-glitch-rack.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **smoothing-physics.md**
  - How Attack/Release times affect the automation "slew" rate.

---

## 🔬 Research Framework

### Phase 1: Note Tracking (Week 1)
**Goal:** Pitch to Value

**Tasks:**
1. Link a target knob to "Keyboard Controller -> Note"
2. Create a "Staircase" note map
3. Play a melody and watch the target knob jump
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Can I map one note to multiple values? (No, 1:1 mapping usually).
- Does the "Smoothing" knob introduce latency?

### Phase 2: Velocity Depth (Week 2)
**Goal:** Expressive Touch

**Tasks:**
1. Link a target to "Velocity" output
2. Adjust the Velocity Map curve
3. Play with varying pressure
4. Create dynamic-reverb-velocity.md

---

## 📊 Plugin Specifications to Document

### Engine
- Number of Output Sources (2: Note, Vel)
- Curve Resolution

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the knob not moving? (Check if you are sending MIDI to the Keyboard Controller channel specifically).
2. How to create a "Toggle" switch? (Map one note to 0, another to 1).

---

## 🔗 Cross-Reference with Other Plugins

Fruity Keyboard Controller is often used with:
- **Gross Beat** (Triggering pattern slots via notes)
- **Fruity Envelope Controller** (Combining pitch tracking with envelopes)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Keyboard Controller/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── mapping-logic-guide.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── keyboard-controller-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── playing-the-filter-cutoff.md
│   │   └── dynamic-reverb-velocity.md
│
└── 04-Reference/
    └── smoothing-physics.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Keyboard Controller Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Keyboard%20Controller.htm)
- [Fruity Keyboard Controller Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Keyboard_Controller_tutorials.htm)
- [Fruity Keyboard Controller Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+keyboard+controller+tutorial)

### Community Resources
- [Fruity Keyboard Controller Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+keyboard+controller&restrict_sr=1)
- [Fruity Keyboard Controller User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Keyboard Controller Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "MIDI to Automation Conversion" - Understanding note-to-parameter mapping
- "Key Tracking Techniques" - Implementing pitch-based parameter control
- "Velocity Mapping Fundamentals" - Using velocity for expression

### Advanced Techniques
- **Note Mapping:** Converting pitch to parameter values
- **Velocity Sensitivity:** Using velocity for dynamic control
- **Smoothing Applications:** Creating fluid parameter transitions

---

## 📚 In-Depth Technical Analysis

### MIDI-to-Parameter Conversion
Fruity Keyboard Controller implements sophisticated MIDI-to-automation conversion:
- **Note-to-Value Mapping:** Converts MIDI note numbers to parameter values
- **Velocity-to-Value Mapping:** Converts MIDI velocity to parameter values
- **Real-time Processing:** Instant conversion of MIDI events
- **Curve Interpolation:** Smooth transitions between mapped values
- **Range Scaling:** Maps MIDI range (0-127) to parameter range (0-1)

### Signal Processing Architecture
The internal architecture follows this order:
- **MIDI Input Stage:** Receives and processes MIDI note data
- **Note Mapping Engine:** Converts pitch to automation values
- **Velocity Mapping Engine:** Converts velocity to automation values
- **Smoothing Processor:** Applies attack/release to transitions
- **Output Stage:** Generates automation signals for linking

### Mapping Systems
The plugin features two distinct mapping systems:

**Note Mapping:**
- **Pitch Tracking:** Maps MIDI note numbers to parameter values
- **Range Coverage:** Covers full keyboard range (C-2 to G8)
- **Curve Editing:** Draw custom mapping curves
- **Linear Mapping:** Default linear relationship
- **Custom Curves:** User-defined pitch-to-value relationships

**Velocity Mapping:**
- **Dynamic Tracking:** Maps MIDI velocity to parameter values
- **Range Coverage:** Covers full velocity range (0-127)
- **Curve Editing:** Draw custom velocity curves
- **Linear Mapping:** Default linear relationship
- **Custom Curves:** User-defined velocity-to-value relationships

### Smoothing Algorithm
The smoothing system provides fluid transitions:
- **Attack Control:** Rise time for parameter changes
- **Release Control:** Fall time for parameter changes
- **Slew Rate:** Rate of change between values
- **Latency Considerations:** Potential timing delays
- **Smoothness Control:** Degree of parameter transition smoothing

### Output Characteristics
The automation output has specific characteristics:
- **Range:** 0.0 to 1.0 (normalized)
- **Resolution:** High-resolution parameter control
- **Response Time:** Adjustable based on smoothing settings
- **Curve Type:** Linear or user-defined curves
- **Linking Compatibility:** Works with all automatable parameters

## 🎛️ Parameter Deep Dive

### Note Mapping Controls
- **Note Map Graph:** Visual editor for pitch-to-value mapping
  - Function: Defines how MIDI notes map to parameter values
  - Range: MIDI note numbers (0-127) to output values (0-1)
  - Use for: Creating key-tracking effects
  - Pro tip: Draw custom curves for non-linear mapping
- **Behavior:**
  - C-2 (note 0): Lowest keyboard note
  - G8 (note 127): Highest keyboard note
  - Smooth interpolation between points
  - Pro tip: Use for filter cutoff tracking to pitch
- **Applications:**
  - Filter tracking: Map pitch to filter cutoff
  - Volume mapping: Map pitch to volume
  - Effect intensity: Map pitch to effect parameters
  - Creative mapping: Non-standard pitch-to-parameter relationships
  - Pro tip: Use for creating resonant filter effects

### Velocity Mapping Controls
- **Velocity Map Graph:** Visual editor for velocity-to-value mapping
  - Function: Defines how MIDI velocity maps to parameter values
  - Range: MIDI velocity (0-127) to output values (0-1)
  - Use for: Creating velocity-sensitive effects
  - Pro tip: Draw custom curves for expressive response
- **Behavior:**
  - Velocity 0: Minimum output value
  - Velocity 127: Maximum output value
  - Smooth interpolation between points
  - Pro tip: Use for dynamic expression
- **Applications:**
  - Dynamic filtering: Map velocity to filter cutoff
  - Distortion drive: Map velocity to distortion amount
  - Reverb wetness: Map velocity to reverb mix
  - Creative expression: Non-standard velocity-to-parameter relationships
  - Pro tip: Use for creating organic, expressive sounds

### Smoothing Controls
- **Attack:** Rise time for parameter changes
  - Range: 0ms to several seconds
  - Effect: Controls how quickly parameters rise
  - Use for: Smoothing parameter transitions
  - Pro tip: Longer attack creates smoother rises
- **Behavior:**
  - 0ms: Instant parameter rise
  - Long values: Gradual parameter rise
  - Pro tip: Match to musical timing for natural response
- **Applications:**
  - Smooth filtering: Longer attack for smooth filter changes
  - Organic response: Medium attack for natural feel
  - Creative effects: Variable attack for expression
  - Pro tip: Use for preventing abrupt parameter changes

- **Release:** Fall time for parameter changes
  - Range: 0ms to several seconds
  - Effect: Controls how quickly parameters fall
  - Use for: Smoothing parameter transitions
  - Pro tip: Longer release creates smoother falls
- **Behavior:**
  - 0ms: Instant parameter fall
  - Long values: Gradual parameter fall
  - Pro tip: Match to musical timing for natural response
- **Applications:**
  - Smooth filtering: Longer release for smooth filter changes
  - Organic response: Medium release for natural feel
  - Creative effects: Variable release for expression
  - Pro tip: Use for preventing abrupt parameter changes

### Output Controls
- **Output Meter:** Visual feedback of automation signal
  - Range: 0-1 (normalized)
  - Effect: Shows current automation value
  - Use for: Monitoring automation output
  - Pro tip: Essential for visual feedback
- **Behavior:**
  - Real-time display of automation value
  - Shows smoothed transitions
  - Pro tip: Use for verification of mapping
- **Applications:**
  - Parameter monitoring: Visual feedback of automation
  - Mapping verification: Confirming mapping accuracy
  - Creative feedback: Visualizing automation changes
  - Pro tip: Use for debugging mapping issues

## 🎼 Sound Design Applications

### Key-Tracking Applications
Using Keyboard Controller for pitch-based parameter control:

**Filter Tracking:**
- **Low-Pass Tracking:** Map pitch to filter cutoff
  - Higher notes open filter
  - Lower notes close filter
  - Creates resonant filter effects
  - Essential for analog-style filtering
  - Perfect for creating talking synth effects

- **Band-Pass Tracking:** Map pitch to center frequency
  - Each note emphasizes specific frequency
  - Creates formant-like effects
  - Essential for vowel simulation
  - Perfect for talking synth sounds
  - Useful for robotic vocal effects

**Effect Parameter Tracking:**
- **Reverb Size:** Map pitch to reverb size
  - Higher notes create larger spaces
  - Lower notes create smaller spaces
  - Creates spatial mapping
  - Essential for pitch-based reverb
  - Perfect for evolving textures

### Velocity-Sensitive Applications
Using Keyboard Controller for dynamic expression:

**Dynamic Distortion:**
- **Drive Mapping:** Map velocity to distortion amount
  - Harder hits create more distortion
  - Softer hits create cleaner sound
  - Creates expressive distortion
  - Essential for organic distortion
  - Perfect for guitar-style expression

**Dynamic Filtering:**
- **Cutoff Mapping:** Map velocity to filter cutoff
  - Harder hits open filter
  - Softer hits close filter
  - Creates expressive filtering
  - Essential for dynamic expression
  - Perfect for organic filter effects

**Effect Intensity:**
- **Wet/Dry Mapping:** Map velocity to effect mix
  - Harder hits increase effect
  - Softer hits decrease effect
  - Creates dynamic expression
  - Essential for expressive effects
  - Perfect for organic processing

### Creative Applications
Using Keyboard Controller for experimental effects:

**Sequenced Automation:**
- **Piano Roll Sequencing:** Sequence automation in piano roll
  - Draw automation patterns as MIDI notes
  - Create complex automation sequences
  - Perfect for evolving effects
  - Essential for non-linear automation
  - Useful for creative expression

**Pattern-Based Effects:**
- **Rhythmic Automation:** Create rhythmic effects with MIDI
  - Map specific notes to automation values
  - Create rhythmic patterns
  - Perfect for rhythmic effects
  - Essential for pattern-based processing
  - Useful for creative rhythmic effects

**Experimental Mapping:**
- **Non-Standard Mapping:** Create unusual parameter relationships
  - Map pitch to unrelated parameters
  - Create unique sonic relationships
  - Perfect for experimental music
  - Essential for creative sound design
  - Useful for unique expression

## 🧪 Experimental Techniques

### Advanced Mapping Applications
Creative uses of Keyboard Controller's mapping capabilities:

**Multi-Parameter Mapping:**
- **Complex Mapping:** Map one MIDI note to multiple parameters
  - Use multiple instances for different parameters
  - Create complex parameter relationships
  - Perfect for sophisticated mapping
  - Essential for complex automation
  - Useful for advanced sound design

**Curve Manipulation:**
- **Custom Curves:** Draw complex mapping curves
  - Create non-linear relationships
  - Develop unique mapping characteristics
  - Perfect for creative mapping
  - Essential for sophisticated mapping
  - Useful for unique expression

**Automation Sequencing:**
- **Piano Roll Automation:** Use piano roll for complex automation
  - Draw automation as MIDI notes
  - Create evolving automation patterns
  - Perfect for complex sequences
  - Essential for non-linear automation
  - Useful for creative expression

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Smoothing Techniques:**
- **Slew Rate Control:** Use attack/release for smooth transitions
  - Create fluid parameter changes
  - Prevent abrupt changes
  - Perfect for organic expression
  - Essential for smooth automation
  - Useful for professional results

**Velocity Curves:**
- **Custom Velocity Response:** Draw custom velocity curves
  - Create expressive velocity mapping
  - Develop unique dynamic response
  - Perfect for organic expression
  - Essential for sophisticated dynamics
  - Useful for creative expression

**Note Curves:**
- **Custom Pitch Response:** Draw custom pitch curves
  - Create expressive pitch mapping
  - Develop unique pitch response
  - Perfect for organic expression
  - Essential for sophisticated pitch tracking
  - Useful for creative expression

## 🎚️ Workflow Optimization

### Mapping Workflows
Efficient approaches to using Keyboard Controller for mapping:

**Key-Tracking Setup:**
- **Filter Tracking:** Map pitch to filter cutoff
  - Draw appropriate curve in note map
  - Link to filter cutoff parameter
  - Test with different pitches
  - Essential for analog-style filtering
  - Pro tip: Use for talking synth effects

**Velocity Sensitivity:**
- **Dynamic Response:** Map velocity to effect parameters
  - Draw appropriate curve in velocity map
  - Link to desired parameter
  - Test with different velocities
  - Essential for expressive dynamics
  - Pro tip: Use for organic expression

**Creative Mapping:**
- **Non-Standard Mapping:** Map to unusual parameters
  - Experiment with different parameter mappings
  - Test for creative expression
  - Develop unique sonic relationships
  - Essential for creative sound design
  - Pro tip: Use for experimental music

### Integration Workflows
Working with other plugins and tools:

**Effects Integration:**
- **Filter Integration:** Use with filters for key tracking
  - Link to filter cutoff parameters
  - Create resonant filter effects
  - Develop talking synth sounds
  - Essential for analog-style filtering
  - Pro tip: Use with resonance for character

**Dynamics Integration:**
- **Distortion Integration:** Use with distortion for expression
  - Link to distortion drive parameters
  - Create dynamic distortion effects
  - Develop expressive distortion
  - Essential for organic distortion
  - Pro tip: Use with velocity for expression

**Analysis Integration:**
- **Spectrum Analysis:** Use with spectrum analyzers for feedback
  - Monitor frequency changes in real-time
  - Compare with reference tracks
  - Use for corrective processing
  - Essential for quality control
  - Pro tip: Use for visual feedback

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Filter Automation:** Map pitch to filter cutoff for evolving sounds
- **Distortion Drive:** Use velocity for dynamic distortion
- **Effect Intensity:** Map notes to effect parameters
- **Rhythmic Effects:** Create rhythmic automation patterns
- **Energy Management:** Use automation for track energy

### Hip-Hop and R&B
- **Vocal Expression:** Use velocity for dynamic vocal processing
- **Bass Enhancement:** Map pitch to bass parameters
- **Drum Dynamics:** Use velocity for expressive drum sounds
- **Mix Enhancement:** Use automation for mix dynamics
- **Creative Effects:** Add unique character to elements

### Rock and Metal
- **Guitar Expression:** Use velocity for dynamic guitar processing
- **Bass Tracking:** Map pitch to bass parameters
- **Drum Enhancement:** Use velocity for expressive drums
- **Mix Enhancement:** Use automation for mix dynamics
- **Creative Effects:** Add unique character to instruments

### Ambient and Experimental
- **Atmospheric Mapping:** Map pitch to atmospheric parameters
- **Dynamic Textures:** Use velocity for evolving textures
- **Experimental Mapping:** Create unusual parameter relationships
- **Evolution Techniques:** Use automation for change
- **Spatial Processing:** Combine with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Keyboard Controller works well with various effects:
- **Reverb:** Mapping pitch to reverb parameters
- **Delay:** Mapping pitch to delay parameters
- **Chorus:** Mapping pitch to chorus parameters
- **Filtering:** Mapping pitch to filter parameters
- **Compression:** Mapping pitch to compression parameters

### Dynamics Processing
Integration with dynamics processors:
- **Parallel Compression:** Using velocity for parallel compression
- **Upward Compression:** Using velocity for upward compression
- **Limiting:** Mapping pitch to limiting parameters
- **Gate/Expander:** Using velocity for noise gates
- **De-esser:** Using velocity for vocal processing

### Equalization
Working with other EQ plugins:
- **Parametric EQ:** Mapping pitch to EQ parameters
- **Graphic EQ:** Mapping pitch to graphic EQ
- **Multi-Band:** Mapping pitch to multi-band processing
- **Dynamic EQ:** Using velocity for dynamic EQ
- **Spectral Processing:** Mapping pitch to spectral tools

## 📖 Historical Context

### Development Background
Fruity Keyboard Controller was developed as a MIDI-to-automation bridge:
- Created to provide key tracking for non-keyboard-aware plugins
- Designed for expressive parameter control
- Developed with sound design in mind
- Intended to complement traditional automation

### Evolution Through FL Studio Versions
- Initially introduced with basic note-to-parameter mapping
- Enhanced with velocity mapping capabilities
- Improved with better smoothing algorithms
- Expanded with more sophisticated mapping options

### Impact on Music Production
Fruity Keyboard Controller has influenced music production by:
- Providing accessible key tracking
- Enabling expressive parameter control
- Facilitating creative automation techniques
- Supporting various musical genres with flexible mapping

## 🧠 Advanced Processing Techniques

### Mapping Mastery
Advanced techniques for MIDI-to-parameter mapping:
- **Curve Design:** Creating sophisticated mapping curves
- **Range Optimization:** Optimizing mapping ranges
- **Response Shaping:** Shaping parameter response
- **Dynamic Mapping:** Creating responsive mappings
- **Creative Mapping:** Developing unique relationships

### Velocity Control
Advanced velocity processing techniques:
- **Dynamic Response:** Creating expressive velocity response
- **Curve Optimization:** Optimizing velocity curves
- **Range Control:** Managing velocity ranges
- **Expression Mapping:** Mapping velocity to expression
- **Sensitivity Adjustment:** Adjusting velocity sensitivity

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique mapped textures
- **Atmospheric Processing:** Building ambient mapped effects
- **Rhythmic Effects:** Creating rhythmic mapping patterns
- **Spatial Manipulation:** Creating immersive mapped environments
- **Experimental Processing:** Pushing boundaries of mapping

## 📊 Performance Considerations

### CPU Usage
Managing Keyboard Controller's impact on system performance:
- **Low CPU Load:** Very efficient processing
- **Real-Time Performance:** Optimized for live performance
- **Instance Count:** Multiple instances have minimal impact
- **Parameter Automation:** No parameters to automate (mapping only)
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Artifact Prevention:** Ensuring smooth parameter transitions
- **Latency Management:** Minimizing timing delays
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output
- **Signal Integrity:** Preserving original signal quality

### System Integration
Optimizing Keyboard Controller within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimal automation latency

## 🛠️ Troubleshooting Common Issues

### Mapping Problems
- **No Response:** Verify MIDI input and parameter linking
- **Incorrect Mapping:** Check mapping curve and range
- **Phase Issues:** Verify parameter behavior and range
- **Excessive Smoothing:** Reduce smoothing for faster response
- **Inconsistent Response:** Check MIDI velocity and note data

### Technical Issues
- **High CPU Usage:** Keyboard Controller has minimal CPU usage
- **Latency Issues:** Check smoothing settings
- **Clipping:** Keyboard Controller doesn't affect gain
- **Artifacts:** Check parameter linking and mapping
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Adjust mapping curves for better response
- **Lack of Expression:** Use velocity mapping for expression
- **Poor Integration:** Use appropriate mapping ranges
- **Overpowering:** Reduce mapping intensity
- **Lack of Control:** Use smoothing for parameter transitions

## 🎚️ Advanced Configuration

### Custom Mapping Presets
Creating and managing custom mapping configurations:
- **Filter Tracking Presets:** Optimized for filter key tracking
- **Velocity Sensitivity:** Configured for dynamic expression
- **Creative Mappings:** Set up for sound design applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple Keyboard Controller instances effectively:
- **Parameter-Specific:** Different instances for different parameters
- **Note/Velocity Separation:** Separate instances for note and velocity
- **Performance Optimization:** Managing multiple instances
- **Creative Applications:** Combining different mappings

### Integration Configurations
Optimizing for different integration scenarios:
- **Insert Processing:** Inline processing configurations
- **Send Processing:** Effects return configurations
- **Hardware Integration:** External hardware integration
- **DAW Integration:** Optimizing for FL Studio workflow

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Keyboard Controller techniques
- **Reddit Groups:** Sharing mapping techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced mapping techniques
- **Written Guides:** In-depth articles on MIDI-to-parameter mapping
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Mapping Libraries:** Websites hosting Keyboard Controller configurations
- **Technique Sharing:** Platforms for sharing mapping methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Sequence an effect's Dry/Wet mix using only the Piano Roll
- [ ] Create a velocity-sensitive distortion patch that sounds organic
- [ ] Build a custom "Slew" effect using the Attack/Release knobs
- [ ] Explain why Keyboard Controller is useful for plugins without built-in key tracking
- [ ] Map pitch to filter cutoff for talking synth effects
- [ ] Use velocity mapping for dynamic expression
- [ ] Create complex automation sequences with MIDI
- [ ] Troubleshoot mapping and linking issues effectively
- [ ] Integrate Keyboard Controller into efficient workflows
- [ ] Optimize smoothing settings for different applications

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Keyboard Controller

## Purpose & Identity
Fruity Keyboard Controller is a **note-to-automation bridge**. Its primary identity is a generator that doesn't make sound, but instead converts MIDI notes and velocity into data signals. It allows you to "play" an effect parameter (like a filter cutoff or reverb mix) using the Piano Roll as if it were a melodic instrument. [SRC: IL-MAN]

## 60-Second Mental Model
Think of it as a "Translator." It takes the pitch of a note (C5, D5, etc.) or the hardness of a hit (Velocity) and turns it into a knob position (0 to 100%). You can then link any knob in FL Studio to this signal. If you play a scale in the Piano Roll, the target knob will follow that scale.

## Hip-Hop / R&B Context
- **Vocal Glitch Sequencing:** Mapping the "Note" output to a Mute plugin. You can then "play" rhythmic cuts in a vocal by drawing patterns in the Piano Roll (Upbeat).
- **Expressive Electric Piano:** Mapping "Velocity" to a filter cutoff. Harder hits make the keys sound brighter and "Vibey."
- **Key-Tracked Distortion:** Mapping "Note" to a distortion drive. High-pitched melodies get grittier, while low-pitched ones stay clean (Psychedelic).

## When To Use
- When you want to **sequence automation** with the precision of the Piano Roll.
- When you need a plugin to **react to the pitch** you are playing (Key Tracking).
- When you want to use **MIDI Velocity** to control non-expressive effects.

## When NOT To Use
- **Simple LFOs:** Use **Fruity LFO** or **Formula Controller** if you just want a standard repeating wave.
- **Envelope Control:** Use **Fruity Envelope Controller** if you need ADSR-style shaping rather than just note-to-value mapping. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Keyboard Controller

## UI Tour
The interface is centered around two main mapping graphs. [SRC: IL-MAN]

### 1. The Output Selectors
- **Note**: Tracks the pitch of the incoming MIDI data.
- **Velocity**: Tracks the intensity/hardness of the incoming MIDI data.

### 2. The Mapping Graphs
- **The Graph Window**: A visual editor where you define the relationship between MIDI input (Horizontal) and automation output (Vertical).
- **Preset Buttons**: Quick access to linear, stepped, or inverted curves.

### 3. The Slew Engine (The "Smoothing")
- **Attack**: How long it takes the automation to "reach" the target value of a new note.
- **Release**: How long it takes to "slide back" or transition when a note is released.

### 4. Monitoring
- **Output Meter**: A vertical bar showing the real-time data being broadcast (0.0 to 1.0).

## Signal Flow
1. **MIDI Trigger**: You play a note in the Keyboard Controller's Piano Roll.
2. **Note Identification**: The engine looks at the pitch (e.g., C5) and the velocity (e.g., 100).
3. **Graph Lookup**: The engine checks the **Note Map** to see what value C5 represents (e.g., 0.5).
4. **Slew Processing**: The value transitions from the previous note's value to 0.5 based on the **Attack** time.
5. **Output Broadcast**: The resulting value is sent to any parameter linked via "Link to controller."

## Things Beginners Misunderstand
- **"It's not working"**: You must put notes into the **Keyboard Controller's** specific Piano Roll channel. It cannot "hear" the notes you play on your Serum or Harmless channel unless they are layered.
- **Velocity vs. Note**: These are two independent signals. You can link one knob to the pitch and a different knob to the pressure.
- **Polyphony**: Keyboard Controller is monophonic in its output logic. If you play a chord, it typically tracks only the **highest** note or the **most recent** one.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Keyboard Controller

## 1. The "Effect Piano"
Link the **Note** output to a Reverb's Wet/Dry mix.
- **Technique**: Map C5 to 0% and C6 to 100%. In your Piano Roll, play a low note for dry and a high note for a big wash.
- **Benefit**: You can "rhythmically play" the reverb into your track.

## 2. Velocity-Responsive Dirt
Link the **Velocity** output to a Distortion's Drive.
- **Technique**: Use a steep exponential curve in the Velocity Map.
- **Listen For**: The sound stays clean during quiet passages but "snarls" aggressively when you strike the keys hard.

## 3. Smooth Slew (The Glide)
Turn the **Attack** knob to ~200ms.
- **Technique**: Play two notes an octave apart.
- **Watch**: The linked knob will "slide" smoothly from one position to the next rather than snapping.
- **Use Case**: Creating smooth filter sweeps without drawing automation curves.

## 4. The MIDI "Toggle" Switch
Use two specific notes to turn an effect on and off.
- **Technique**: In the Note Map, set C5 to 0 and D5 to 1. Leave all other notes at 0.
- **Benefit**: In your Piano Roll, you can now "trigger" an effect with a single D5 note and "kill" it with a C5.

## 5. Mono-Check Logic
- **Protocol**: If using Keyboard Controller to drive Stereo Width, ensure your Note Map doesn't go below 0.2 to avoid complete phase cancellation.
- **Fix**: Right-click the Note Map and use the "Compress" function to keep the values in a safe range.

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Knob is "jittery"** | Increase the **Attack** smoothing. |
| **Output is inverted** | Right-click the Graph and select "Invert." |
| **Not hearing synth** | Ensure you are Layering the Keyboard Controller with your actual Sound Generator. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Keyboard Controller

Keyboard Controller translates vibes through **Note-Responsive Expression**.

## 1. Upbeat (Kinetic, Chopped, Rhythmic)
- **Concept:** "The Performance Gate."
- **Levers:**
  - **Output:** Note.
  - **Mapping:** Set one note to 0 and another to 1.
  - **Action:** Link to **Fruity Mute 2**.
- **Listen For:** Sharp, perfectly timed volume chops that follow your drum pattern.
- **Don't Do This:** Don't use too much smoothing; you want the cuts to be "instant."

## 2. Psychedelic (Liquid, Morphing, Intense)
- **Concept:** "The Whining Filter."
- **Levers:**
  - **Output:** Note.
  - **Mapping:** Linear slope (C0=0, C10=1).
  - **Action:** Link to **Fruity Phaser** Speed.
- **Listen For:** The modulation speed accelerating as you play higher notes, creating a "screaming" psychedelic effect.

## 3. Spacey (Galactic, Immersive, Floating)
- **Concept:** "Velocity Distance."
- **Levers:**
  - **Output:** Velocity.
  - **Mapping:** Logarithmic curve (Softer hits = much less).
  - **Action:** Link to **Reverb Wet** level.
- **Listen For:** Hard notes sounding close, while soft notes vanish into an infinite "Spacey" abyss.

## 4. Vibey (Smooth, Organic, Analog)
- **Concept:** "The Brightness Drift."
- **Levers:**
  - **Output:** Note.
  - **Action:** Link to **Filter Cutoff**.
- **Listen For:** A subtle brightening of the sound as the melody rises, mimicking how real acoustic instruments (like a piano) sound brighter in the upper octaves.

## 5. Moody (Stagnant, Heavy, Under Pressure)
- **Concept:** "The Weighted Slew."
- **Levers:**
  - **Smoothing:** High Attack/Release.
- **Listen For:** Automation that "drags" behind your notes, creating a heavy, sluggish feeling that fits dark, moody atmospheres. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\04_Ready_To_Use_Mapping_Patterns.md

```markdown
# Concepts: Ready-To-Use Mapping Patterns

Standard performance configurations for the Keyboard Controller.

---

## 1. The "Resonant Step-Filter"
- **Logic**: Maps each octave to a specific filter "shelf."
- **Setup**: In the **Note Map**, use the "Staircase" preset.
- **Verification**: Link to a Filter Cutoff. C4 = 20%, C5 = 40%, C6 = 60%.
- **Use Case**: Creating rhythmic "stepped" filter movements popular in G-Funk and modern Trap.

## 2. "Heavy Pressure" Drive
- **Logic**: Distortion only appears when you smash the keys.
- **Setup**: In the **Velocity Map**, set all values to 0 except the very top (Velocity 110-127), which you set to 100%.
- **Verification**: Link to a Distortion Drive knob. Only your loudest MIDI notes will cause "snarling."
- **Use Case**: Adding aggression to the peaks of a melody.

## 3. The "Ghost" Reverb Swell
- **Logic**: High notes trigger a huge wash; low notes trigger nothing.
- **Setup**: In the **Note Map**, set a steep linear ramp starting at C6.
- **Verification**: Link to a Reverb's Wet knob.
- **Use Case**: Playing a melody where the "climax" notes naturally bloom into space.

## 4. Rhythmic Toggle (Kill-Switch)
- **Logic**: Use C5 to turn audio ON and C#5 to turn audio OFF.
- **Setup**: Note Map -> C5 = 1.0; C#5 = 0.0. All other notes set to 0.
- **Verification**: Link to a Mixer track's Volume.
- **Use Case**: Creating manual "Transform" scratch patterns or rhythmic gates.

## 5. Expressive Attack-Speed
- **Logic**: Link velocity to the Attack time of an envelope.
- **Move**: Note played harder = Shorter attack (snappy). Note played softer = Longer attack (ambient).
- **Verification**: Requires Patcher or linking to an internal envelope controller.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Keyboard Controller (5 Minutes)

1.  **Insert:** Load **Fruity Keyboard Controller** as a Channel (Generator).
2.  **Target:** Right-click any knob on another plugin (e.g., a Filter Cutoff) -> **Link to controller**.
3.  **Source:** From the "Internal Controllers" list, select **Keyboard Controller - Note**.
4.  **Sequence:** Open the Piano Roll for the Keyboard Controller and draw some notes.
5.  **Observe:** Press Play. The target knob will jump to different positions based on which notes you drew.
6.  **Smooth:** Turn the **Smoothing** knob clockwise to make the transitions between notes glide smoothly.
7.  **Tip:** Use the **Velocity** output if you want the knob to react to how hard you hit the keys. [SRC: IL-MAN]
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Keyboard Controller

| Parameter | Type | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Note Map** | Graph | **Psychedelic**| **Melodic** | Maps MIDI Pitch to 0-1 data. |
| **Velocity Map**| Graph | **Spacey** (Depth)| **Dynamics** | Maps MIDI Velocity to 0-1 data. |
| **Smoothing** | Knob | **Moody** (Slew) | **Timing** | Attack/Release time for transitions. |
| **Attack** | Slider | **Vibey** | **Smooth** | Rise time of the data signal. |
| **Release** | Slider | **Moody** | **Decay** | Fall time of the data signal. |

- **Vibe Impact Tag (Dynamic):** Velocity mapping allows for "Human" performances to drive digital effects.
- **Mix Impact Tag (Slew):** High smoothing settings prevent digital "zipper noise" when automating. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\keyboard-controller-params.json

```json
{
  "plugin_name": "Fruity Keyboard Controller",
  "category": "Controller",
  "outputs": [
    {
      "name": "Note",
      "description": "Output based on the pitch of the triggered MIDI key.",
      "vibe_impact": "Melodic tracking, rhythmic steps"
    },
    {
      "name": "Velocity",
      "description": "Output based on the pressure/velocity of the triggered MIDI key.",
      "vibe_impact": "Expressive dynamics, human touch"
    }
  ],
  "parameters": [
    {
      "name": "Attack",
      "type": "knob",
      "description": "The time it takes for the output to reach a new note's value.",
      "vibe_impact": "Glide, silk, smoothness",
      "mix_impact_tags": ["motion", "slew"]
    },
    {
      "name": "Release",
      "type": "knob",
      "description": "The time it takes for the output to return to its default state after a note is released.",
      "vibe_impact": "Decay, shadow, drift"
    },
    {
      "name": "Note Map",
      "type": "graph",
      "description": "Defines the pitch-to-data relationship."
    },
    {
      "name": "Velocity Map",
      "type": "graph",
      "description": "Defines the pressure-to-data relationship."
    }
  ]
}

```

---

## FILE: 02-Data\presets\drum-trigger-map.json

```json
{
  "presetName": "Drum Trigger Map",
  "plugin": "Fruity Keyboard Controller",
  "description": "Specific mapping for triggering Slicex regions.",
  "settings": {
    "notes": "C3 to C4 linear"
  },
  "usage": "Use to re-order drum slices without moving the actual slice markers."
}

```

---

## FILE: 02-Data\presets\major-scale-map.json

```json
{
  "presetName": "Major Scale White Keys",
  "plugin": "Fruity Keyboard Controller",
  "description": "Maps white keys to a major scale, ignoring black keys.",
  "settings": {
    "map": [0, 2, 4, 5, 7, 9, 11]
  },
  "usage": "Link to a synth's pitch to play in key without knowing theory."
}

```

---

## FILE: 02-Data\presets\velocity-inverter.json

```json
{
  "presetName": "Velocity Inverter",
  "plugin": "Fruity Keyboard Controller",
  "description": "Output drops as velocity increases.",
  "settings": {
    "velocityMap": "Inverted Line (1.0 to 0.0)"
  },
  "usage": "Creative ducking effects or controlling inverse parameters."
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Keyboard Controller)

## 1. The "Ghost Note" Rule
- **Rule:** Don't let your automation notes make sound.
- **Application:** Always place the Keyboard Controller on its own dedicated channel in the Channel Rack. Do not use it on the same channel as your synth unless you want both to trigger at once. [SRC: REPUTABLE]

## 2. Velocity Calibration
- **Rule:** Normalize your performance before mapping.
- **Application:** If you are a heavy-handed player, use the **Velocity Map** to pull down the top end of the curve so you don't hit 100% on every note.

## 3. Smoothing for Transparency
- **Rule:** No clicking in R&B.
- **Application:** Use at least **10ms of Attack/Release** smoothing when mapping to volume or filters. This prevents the microscopic "clicks" that occur when a parameter jumps instantly.

## 4. Key-Tracking Alignment
- **Rule:** Match the filter to the key.
- **Application:** If your song is in C Minor, ensure your **Note Map** has its highest points on C, Eb, and G notes. This makes the automation feel "musical" rather than random.

## 5. Parallel Layering
- **Rule:** Use "Link to controller" with **Remove Conflicts OFF**.
- **Application:** You can have one Keyboard Controller drive five different plugins at once. This is the secret to complex, "Spacey" macro-automation. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\controlling-vsts.md

```markdown
# Controlling 3rd Party Plugins

The Keyboard Controller isn't just for FL native plugins.

1. **Browse Parameters**: Open your VST plugin. Go to the plugin menu -> "Browse parameters".
2. **Link to Controller**: Find the parameter (e.g., Serum Filter Cutoff). Right-click -> "Link to controller".
3. **Internal Controller**: In the "Internal controller" dropdown, select "Fruity Keyboard Controller - Note" or "Velocity".
4. **Mapping**: Now you can use the Keyboard Controller's graphical mapping interface to create complex curves for your VST parameters that the VST itself doesn't support.

```

---

## FILE: 03-Workflows\patcher-integration.md

```markdown
# Workflow: Patcher Control

The Keyboard Controller is powerful inside Patcher.

1. **The Selector Switch**:
   - Map the Keyboard Controller to specific keys (C, D, E).
   - Link the output of the Keyboard Controller to a "Fruity Balance" gain knob on multiple signal paths.
   - **Result**: Hitting 'C' activates Synth A, Hitting 'D' activates Synth B.

2. **Key Tracking Filter**:
   - Link the Note output to a filter cutoff.
   - **Result**: Higher notes automatically sound brighter, lower notes sound darker. This mimics analog synth key tracking.

3. **Velocity Inversion**:
   - Use the velocity mapping curve.
   - Draw a reverse line (High velocity = Low output).
   - Link to attack time.
   - **Result**: Hard hits have fast attack, soft hits have slow attack.

```

---

## FILE: 03-Workflows\xyz-teleport.md

```markdown
# Workflow: XYZ Controller Link

Combining Keyboard Controller with Surface/XYZ Control.

1. **Setup**: You have a complex Patcher preset with an X/Y pad.
2. **Goal**: You want to jump to specific X/Y coordinates when you press a key.
3. **Execution**:
   - Use **Fruity Keyboard Controller**.
   - Map Note C5 to `0.5` (Center).
   - Map Note C#5 to `1.0` (Top Right).
   - Link the Keyboard Controller Note output to the X parameter of the pad.
   - Now, playing keys teleports your X/Y pad to specific "presets" instantly.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Playing the Filter Cutoff (Keyboard Controller)

## Routing Context
- **Target:** A Lead Synth or Bass.
- **Position:** generator (Keyboard Controller) -> Effect (Fruity Free Filter).

## Step-by-Step Setup
1.  On your synth track, add **Fruity Free Filter**.
2.  Load **Fruity Keyboard Controller**.
3.  Right-click the **FREQ** knob on Free Filter -> **Link to controller**.
4.  Select **Keyboard Controller - Note**.
5.  **The Map:** In Keyboard Controller, draw a diagonal line from bottom-left to top-right in the Note Map.
6.  **The Sequence:** Copy your synth's MIDI melody into the Keyboard Controller's Piano Roll.
7.  **The Tweak:** Adjust the Synth's melody or the Keyboard Controller's notes to create "Filter Counter-Melodies."

## Result
- The filter cutoff follows your melody perfectly. High notes are bright, low notes are dark. This creates an "Analog Key Tracking" feel that makes synths sound much more expensive.

## Vibe Check
- **Vibey/Jazzy:** Adds organic life to Rhodes and lead lines.

## Pitfalls + Fixes
- **Pitfall:** "The filter range is too small."
  - **Fix:** In the "Remote Control Settings" window (when linking), adjust the **Mapping Formula** to `Input*1.5` to expand the range. [SRC: REPUTABLE]

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Keyboard Controller

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Keyboard Controller.
- **Key Info:** Note vs Velocity output logic, Attack/Release smoothing parameters, and the 128-note mapping grid.

## Source ID: [SRC: REPUTABLE]
- **Source:** "The Art of MIDI Modulation" (Mix Magazine).
- **Key Info:** Using keyboard tracking to maintain tonal consistency across octaves, and the "Trance Gate" technique using note-to-volume mapping.

## Genre Style Board: Fruity Keyboard Controller

| Vibe | Output Source | Action |
| :--- | :--- | :--- |
| **Upbeat** | Note | Rhythmic Pattern Gating |
| **Psychedelic**| Note | Key-tracked Phaser Speed |
| **Spacey** | Velocity | Dynamic Reverb Swells |
| **Vibey** | Note | Key-tracked Filter Brightness|
| **Moody** | Note + Smooth | Slow Sluggish Automation |

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Performance Bridge)

Sourced applications of MIDI-to-Data conversion in Hip-Hop, Rap, and R&B.

## 1. G-Funk / West Coast Filter Steps
- **Source**: Battlecat / DJ Quik style.
- **Application**: Mapping note intervals to fixed Low-Pass Filter steps.
- **Goal**: Creating that signature "chirpy" or "jumping" resonant filter sound that defines the West Coast aesthetic.

## 2. Experimental / Psychedelic Vocal Stutter
- **Source**: Travis Scott / JPEGMAFIA.
- **Application**: Sequencing 1/32nd note bursts in the Keyboard Controller to "slice" a vocal bus's volume.
- **Goal**: Chaotic, mechanical vocal "glitches" that are perfectly synchronized to the project BPM.

## 3. Soulful / Neo-Soul Expression
- **Source**: Robert Glasper / Moonchild.
- **Application**: Using Velocity to drive the "Detune" or "Wow" of a piano effect.
- **Goal**: Adding a "human" layer of instability where the sound gets more "warped" as the musician plays with more emotion.

## 4. Modern Trap "808 Growl"
- **Source**: Metro Boomin / 808 Mafia.
- **Application**: Linking Velocity to the Mix level of a heavy Distortion or Soft Clipper on the 808.
- **Goal**: Ensuring the 808 hits "clean" on the off-beats and "distorted" on the primary down-beats.

```

---

## FILE: 04-Reference\smoothing-physics.md

```markdown
# Technical Reference: Smoothing Physics (Slew Rate)

How the Attack and Release parameters shape your automation. [SRC: IL-MAN]

## 1. What is Slew?
In electronics, a "Slew Rate" is the maximum speed at which a signal can change. Fruity Keyboard Controller uses its **Attack** and **Release** knobs to control the slew rate of the generated automation data.

## 2. Attack vs. Snap
- **0ms Attack**: The data "snaps" instantly to the new value. (Ideal for rhythmic gating).
- **100ms+ Attack**: The data "glides" toward the value.
- **Physics**: This is essentially a "Low-Pass Filter" for your control data. It rounds off the sharp corners of your MIDI transitions.

## 3. The "Release" Interaction
The **Release** parameter determines how the data behaves when the MIDI note stops.
- **Short Release**: The automation jumps back to its "resting" state (usually 0) immediately.
- **Long Release**: The effect "lingers." For example, if you linked a filter to a note, a long release would keep the filter open for a few seconds after the key is released.

## 4. Latency Considerations
Smoothing does not technically add "latency" (the start time of the signal remains the same), but it does add "perceived delay." 
- If you have a 500ms Attack, you won't hear the full effect of the note until half a second after you play it.
- **Pro Tip**: Use short Attack times for lead sounds where precision is needed, and long Attack times for atmospheric pads.

```

---

