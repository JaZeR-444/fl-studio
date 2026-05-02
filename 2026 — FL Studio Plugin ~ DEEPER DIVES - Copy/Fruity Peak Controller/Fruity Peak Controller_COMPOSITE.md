# Fruity Peak Controller - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Peak Controller - The Automation Engine

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝ 
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝  
██║     ██║  ██║╚██████╔╝██║   ██║      ██║   
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝   

██████╗ ███████╗ █████╗ ██╗  ██╗     ██████╗ ██████╗ ███╗   ██╗████████╗██████╗  ██████╗ ██╗     ██╗     ███████╗██████╗ 
██╔══██╗██╔════╝██╔══██╗██║ ██╔╝    ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔═══██╗██║     ██║     ██╔════╝██╔══██╗
██████╔╝█████╗  ███████║█████╔╝     ██║     ██║   ██║██╔██╗ ██║   ██║   ██████╔╝██║   ██║██║     ██║     █████╗  ██████╔╝
██╔═══╝ ██╔══╝  ██╔══██║██╔═██╗     ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██╗██║   ██║██║     ██║     ██╔══╝  ██╔══██╗
██║     ███████╗██║  ██║██║  ██╗    ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╔╝███████╗███████╗███████╗██║  ██║
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝     ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Internal Controller / LFO / Envelope Follower
**Category:** Controller / Automation
**Official Manual:** [Image-Line Fruity Peak Controller Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Peak%20Controller.htm)

---

## 🎯 What is Fruity Peak Controller?

Fruity Peak Controller is one of the most essential "utility" plugins in FL Studio. It generates automation signals based on audio input (Peak) or an internal oscillator (LFO). It is the primary tool for **Sidechain Compression** without using a compressor plugin, but it can also drive filter wobbles, volume ducking, and complex modulation chains.

**Key Capabilities:**
- **Peak Follower:** Converts audio volume into an automation signal (Peak).
- **LFO Generator:** Creates Sine, Triangle, Square, Saw, and Random LFOs.
- **Sidechaining:** Automating a fader based on a kick drum's volume.
- **Linking:** Can control any knob in FL Studio via "Link to controller".

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **sidechain-basics.md** (The #1 use case)
3. Create **parameter-cheat-sheet.md**
4. Put it on a Kick channel, right-click a Volume fader on another channel -> Link to Controller -> Select "Peak".

### For Sound Designers:
1. Study **random-lfo-modulation.md**
2. Review **envelope-following-filters.md** (Auto-Wah effect)
3. Learn **inverted-mapping.md** (Ducking vs Boosting)

### For Mix Engineers:
1. Study **transparent-ducking.md**
2. Review **kick-bass-relationship.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Base:** The starting value of the automation (0-100%).
  - **Vol (Volume):** The range/intensity of the movement (Bipolar!).
  - **Tension:** The shape of the attack/decay curve.
  - **Decay:** How fast the peak falls back to zero.
  - **LFO Speed/Shape:** Internal modulation.

- [ ] **sidechain-basics.md**
  - Step 1: Place Peak Controller on Kick.
  - Step 2: Unmute the Kick (if you want to hear it) or Mute (for Ghost Kick).
  - Step 3: Link target parameter (e.g., Bass Volume).
  - Step 4: Set Mapping formula to "Inverted" (1-Input) for ducking.

#### 02-Data/parameters/
- [ ] **peak-controller-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Peak Controller",
    "category": "Controller",
    "parameters": [
      {
        "name": "Peak + LFO",
        "type": "internal_signal",
        "description": "Combines both signals",
        "use_cases": ["complex modulation"]
      },
      {
        "name": "Volume (Knob)",
        "type": "knob",
        "description": "Output multiplier",
        "pro_tip": "Set to negative values to invert the signal (Duck instead of Boost)."
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **auto-wah-filter.md**
  - Placing Peak Controller on a guitar track.
  - Linking Peak output to a Low Pass Filter Cutoff.
  - Result: Filter opens when guitar is loud.

- [ ] **dynamic-reverb-ducking.md**
  - Linking Reverb Wet level to Vocal Peak.
  - "Inverting" the mapping so Reverb drops when singing starts, and swells when singing stops.

- [ ] **random-lfo-modulation.md**
  - Using the "Random" LFO shape.
  - Modulating synth pitch for "Sample & Hold" effects.

#### 03-Workflows/by-context/
- [ ] **ghost-kick-setup.md**
- [ ] **visual-feedback-setup.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **mapping-formulas.md**
  - Common formulas used in the "Link to Controller" window.
  - `1-Input` (Invert).
  - `Input*0.5` (Scale).

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** The Duck

**Tasks:**
1. Setup a Kick and a Pad
2. Put Peak Controller on Kick
3. Link Pad Volume to Peak Ctrl -> Peak
4. Adjust "Base" to 80% and "Vol" to -50% (Ducking)
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Why use "Vol" knob negative vs "1-Input" formula? (Both work, Vol knob is easier to tweak on the fly).
- What does the "Mute" button do? (Silences the audio passing *through* the plugin, so you don't hear the trigger signal on that specific slot).

### Phase 2: LFO Modulation (Week 2)
**Goal:** Movement

**Tasks:**
1. Ignore the audio input
2. Use the LFO section
3. Link a Panning knob to Peak Ctrl -> LFO
4. Create random-lfo-modulation.md

**Key Questions to Answer:**
- Can I sync LFO to BPM? (Yes, Speed knob has steps).

---

## 📊 Plugin Specifications to Document

### Engine
- LFO Shapes (Sine, Triangle, Square, Saw, Random, Dicethrow?)
- Output Range (0.0 to 1.0)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is my Bass silent? (Mapping might be set to 0 Base).
2. How do I smooth the jitter? (Increase Decay or Tension).

---

## 📝 Documentation Standards

### For Each Workflow:
- **Base:** %
- **Vol:** %
- **Decay:** %
- **Mapping:** Inverted vs Normal

---

## 🔗 Cross-Reference with Other Plugins

Fruity Peak Controller is often used with:
- **Fruity Parametric EQ 2** (Dynamic EQ)
- **Fruity Balance** (Volume automation)
- **Fruity Formula Controller** (Combining signals)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Peak Controller/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── sidechain-basics.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── peak-controller-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── auto-wah-filter.md
│   │   ├── dynamic-reverb-ducking.md
│   │   └── random-lfo-modulation.md
│
└── 04-Reference/
    └── mapping-formulas.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Peak Controller Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Peak%20Controller.htm)
- [Fruity Peak Controller Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Peak_Controller_tutorials.htm)
- [Fruity Peak Controller Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+peak+controller+tutorial)

### Community Resources
- [Fruity Peak Controller Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+peak+controller&restrict_sr=1)
- [Fruity Peak Controller User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Peak Controller Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for analyzing automation curves
- **Fruity Spectroman** for visualizing automated parameter changes
- **Fruity Formula Controller** for combining signals
- **Fruity Limiter** for sidechain applications

### Recommended Learning Materials
- "Sidechain Compression Techniques" - Understanding ducking and pumping
- "Envelope Following" - Advanced peak detection applications
- "LFO Modulation" - Creating movement with low-frequency oscillators

### Advanced Techniques
- **Dynamic EQ:** Using peak detection to automate filter parameters
- **Ghost Kicks:** Creating sidechain triggers without audible output
- **Complex Modulation:** Combining LFO and peak detection for unique effects

---

## 📚 In-Depth Technical Analysis

### Peak Detection Architecture
Fruity Peak Controller implements a sophisticated peak detection system:
- **Envelope Follower:** Tracks the amplitude of incoming audio
- **Attack Time:** How quickly the follower responds to rising signals
- **Release Time:** How quickly the follower returns to zero
- **Sensitivity:** How responsive the follower is to input level
- **Smoothing:** Prevents jitter and artifacts in the control signal

### LFO Generation System
The internal LFO generator features multiple wave shapes:
- **Sine Wave:** Smooth, sinusoidal modulation
- **Triangle Wave:** Linear rise and fall modulation
- **Square Wave:** Abrupt on/off modulation
- **Sawtooth Wave:** Linear rise or fall with abrupt reset
- **Random Wave:** Sample and hold random values
- **Speed Control:** Rate of oscillation (Hz or BPM-synced)
- **Phase Control:** Starting point of the LFO cycle

### Signal Processing Chain
The internal processing follows this order:
- **Input Stage:** Audio signal monitoring and routing
- **Peak Detection:** Amplitude tracking and envelope generation
- **LFO Generation:** Internal oscillator creation
- **Signal Mixing:** Combining peak and LFO signals
- **Parameter Control:** Output signal shaping and scaling
- **Controller Output:** Final automation signal generation

### Peak vs LFO Modes
The plugin offers two distinct operating modes:
- **Peak Mode:** Responds to audio input amplitude
- **LFO Mode:** Generates internal modulation signals
- **Combined Mode:** Mixes both peak and LFO signals
- **Signal Routing:** Can route to any parameter in FL Studio
- **Response Characteristics:** Different timing and behavior

### Controller Linking System
The linking mechanism connects to any parameter in FL Studio:
- **Parameter Mapping:** Direct connection to any knob/slider
- **Formula Application:** Mathematical transformations of the signal
- **Range Control:** Scaling the output to match parameter ranges
- **Inversion Options:** Inverting the control signal
- **Bipolar/Unipolar:** Controlling the signal polarity

## 🎛️ Parameter Deep Dive

### Peak Detection Controls
- **Base:** Sets the baseline automation value
  - Range: 0-100% (typically)
  - Effect: Establishes the minimum value of the automation
  - Use for: Setting the resting level of controlled parameters
  - Pro tip: Higher base values mean less room for upward movement
- **Behavior:**
  - 0%: Full range from minimum to maximum
  - 50%: Mid-range operation
  - 100%: Limited upward movement only
  - Pro tip: Use lower base values for more dynamic range
- **Applications:**
  - Sidechain ducking: Lower base for more ducking range
  - Volume control: Higher base for less dynamic range
  - Filter control: Medium base for balanced operation
  - Effect control: Variable base for different effects
  - Pro tip: Match base to desired resting position

### Volume Control
- **Function:** Controls the intensity of the automation signal
  - Range: -100% to +100% (typically)
  - Effect: Determines how much the parameter changes from the base
  - Use for: Controlling the depth of modulation
  - Pro tip: Negative values invert the signal (ducking vs boosting)
- **Behavior:**
  - Positive values: Increase parameter from base
  - Negative values: Decrease parameter from base
  - Zero: No modulation effect
  - Pro tip: Use negative values for ducking effects
- **Applications:**
  - Volume ducking: Negative values for compression simulation
  - Filter opening: Positive values for filter widening
  - Effect intensity: Variable values for effect control
  - Creative modulation: Extreme values for unique effects
  - Pro tip: Use with base for precise control

### Tension Control
- **Function:** Shapes the attack and decay curves
  - Range: 0-100% (typically)
  - Effect: Controls the curve shape of the envelope
  - Use for: Smoothing or sharpening the response
  - Pro tip: Higher values create smoother, more gradual changes
- **Behavior:**
  - Low values: Sharp, fast response
  - High values: Smooth, gradual response
  - Pro tip: Use for natural-sounding transitions
- **Applications:**
  - Fast transients: Low tension for quick response
  - Smooth changes: High tension for gradual changes
  - Natural response: Medium tension for organic feel
  - Creative shaping: Variable tension for unique curves
  - Pro tip: Match to musical content for natural response

### Decay Control
- **Function:** Controls how quickly the signal returns to base
  - Range: 0-100% (typically)
  - Effect: Determines release time of the envelope
  - Use for: Controlling the duration of the effect
  - Pro tip: Longer decay creates more sustained effects
- **Behavior:**
  - Short decay: Quick return to base level
  - Long decay: Slow return to base level
  - Pro tip: Longer decay prevents pumping artifacts
- **Applications:**
  - Fast response: Short decay for quick changes
  - Sustained effects: Long decay for lasting changes
  - Natural decay: Medium decay for organic response
  - Creative effects: Variable decay for unique responses
  - Pro tip: Use longer decay for smoother ducking

### LFO Controls
- **Speed:** Controls the rate of internal oscillation
  - Range: 0.01Hz to 20Hz (or BPM-synced)
  - Effect: Determines how fast the LFO cycles
  - Use for: Setting rhythmic or smooth modulation
  - Pro tip: Sync to BPM for rhythmic precision
- **Behavior:**
  - Slow speeds: Gradual, evolving changes
  - Fast speeds: Rhythmic, pulsing changes
  - Synced speeds: Musical timing precision
  - Pro tip: Use musical divisions for rhythmic effects
- **Applications:**
  - Slow modulation: 0.1-1Hz for evolving effects
  - Rhythmic effects: BPM-synced for musical timing
  - Fast modulation: 5-20Hz for tremolo/vibrato
  - Creative effects: Variable speeds for unique effects
  - Pro tip: Use automation for evolving LFO speeds

## 🎼 Sound Design Applications

### Sidechain Applications
Using Peak Controller for sidechaining:

**Kick-Bass Ducking:**
- Place on kick drum channel
- Link to bass volume or filter cutoff
- Use inverted mapping (1-Input) for ducking
- Set appropriate decay for natural response
- Essential for electronic music production

**Vocal Reverb Ducking:**
- Place on vocal channel
- Link to reverb wet/dry mix
- Use inverted mapping for cleaner vocals
- Set decay to match vocal timing
- Perfect for keeping vocals clear in reverb

**Hi-Hat Filtering:**
- Place on hi-hat channel
- Link to filter cutoff on other elements
- Creates rhythmic filtering effects
- Essential for electronic music
- Perfect for rhythmic interest

### Dynamic Processing
Using Peak Controller for dynamic effects:

**Auto-Wah Effects:**
- Link to filter cutoff on guitar or synth
- Use peak detection for envelope following
- Adjust tension and decay for natural response
- Creates talk-box-like effects
- Essential for guitar and synth enhancement

**Dynamic Reverb:**
- Link to reverb send levels
- Use peak detection for dynamic response
- Creates natural-sounding reverb changes
- Perfect for vocals and instruments
- Essential for professional mixing

**Rhythmic Modulation:**
- Use LFO for rhythmic effects
- Sync to project tempo for precision
- Apply to various parameters for interest
- Perfect for electronic music
- Essential for rhythmic enhancement

### Creative Applications
Using Peak Controller for experimental effects:

**Random Modulation:**
- Use random LFO for sample and hold effects
- Creates unpredictable parameter changes
- Perfect for evolving textures
- Essential for experimental music
- Useful for organic movement

**Complex Automation:**
- Combine peak and LFO for complex modulation
- Use with formula controller for advanced mapping
- Creates evolving, dynamic effects
- Perfect for ambient and experimental music
- Essential for sophisticated modulation

**Visual Feedback:**
- Use for visual automation feedback
- Monitor parameter changes in real-time
- Perfect for live performance
- Essential for visual mixing
- Useful for educational purposes

## 🧪 Experimental Techniques

### Advanced Peak Detection Applications
Creative uses of Peak Controller's capabilities:

**Envelope Following:**
- Use for dynamic EQ applications
- Create filter-following effects
- Generate compression-like effects
- Perfect for dynamic processing
- Essential for responsive effects

**Sidechain Routing:**
- Route external audio to Peak Controller
- Use for external sidechaining
- Create complex routing scenarios
- Perfect for advanced sidechaining
- Essential for creative routing

**Signal Combination:**
- Combine peak and LFO signals
- Use with formula controller for complex mapping
- Create multi-source modulation
- Perfect for sophisticated effects
- Essential for advanced modulation

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- Automate Peak Controller parameters for evolving effects
- Use envelope followers for dynamic control
- Combine with other modulation sources
- Perfect for live performance
- Use for expressive control

**Modulation Applications:**
- Use with external modulation sources
- Combine with other modulation effects
- Create complex modulation chains
- Perfect for evolving sounds
- Use for dynamic expression

**Multi-Stage Processing:**
- Use multiple instances in series
- Combine with other modulation units
- Create complex processing chains
- Perfect for advanced sound design
- Use for sophisticated processing

## 🎚️ Workflow Optimization

### Sidechain Workflows
Efficient approaches to using Peak Controller for sidechaining:

**Kick-Bass Setup:**
- Place Peak Controller on kick drum
- Link to bass volume or filter cutoff
- Set base to 80-90% for ducking
- Use negative volume for ducking effect
- Essential for electronic music production

**Vocal Enhancement:**
- Use on vocal channels for dynamic effects
- Link to reverb or delay sends
- Set appropriate decay for natural response
- Use for keeping vocals clear in mixes
- Pro tip: Use inverted mapping for ducking

**Rhythmic Effects:**
- Use LFO for rhythmic modulation
- Sync to project tempo for precision
- Apply to various parameters for interest
- Essential for electronic music
- Pro tip: Use musical divisions for rhythmic effects

### Integration Workflows
Working with other plugins and tools:

**Effects Integration:**
- Use before reverb for dynamic effects
- Combine with delay for rhythmic patterns
- Integrate with chorus for width
- Work with filtering for tone shaping
- Optimize for effects chains

**Dynamics Integration:**
- Use with compression for control
- Combine with limiting for safety
- Integrate with gates for noise control
- Work with expanders for dynamic range
- Optimize for dynamics processing

**Analysis Integration:**
- Use with spectrum analyzers for visual feedback
- Compare with reference tracks
- Use for corrective processing
- Combine with level meters for comprehensive analysis
- Integrate with other analytical tools

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Sidechain Compression:** Classic pumping effect
- **Rhythmic Filtering:** Creating rhythmic filter effects
- **Kick-Bass Relationship:** Managing frequency conflicts
- **Energy Management:** Using modulation for track energy
- **Build-up Effects:** Creating tension with automation

### Hip-Hop and R&B
- **Vocal Enhancement:** Keeping vocals clear in reverb
- **Drum Processing:** Managing drum mix relationships
- **Bass Enhancement:** Adding movement to bass lines
- **Mix Enhancement:** Using dynamic processing
- **Creative Effects:** Adding unique character to elements

### Rock and Metal
- **Guitar Enhancement:** Adding dynamic effects to guitars
- **Drum Enhancement:** Managing drum mix relationships
- **Bass Processing:** Adding movement to bass lines
- **Mix Enhancement:** Using dynamic processing
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Processing:** Creating evolving textures
- **Dynamic Effects:** Using envelope following
- **Experimental Sounds:** Creating unique sonic signatures
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Peak Controller works well with various effects:
- **Reverb:** Dynamic reverb control
- **Delay:** Rhythmic delay modulation
- **Chorus:** Dynamic chorus effects
- **Filtering:** Dynamic filter control
- **Compression:** Dynamic compression simulation

### Dynamics Processing
Integration with dynamics processors:
- **Parallel Compression:** Combining with parallel compression
- **Upward Compression:** Using with upward compression
- **Limiting:** Combining with limiting for control
- **Gate/Expander:** Using with noise gates
- **De-esser:** Combining for vocal processing

### Equalization
Working with other EQ plugins:
- **Parametric EQ:** Dynamic EQ applications
- **Graphic EQ:** Combining with graphic EQs
- **Multi-Band:** Combining with multi-band processing
- **Dynamic EQ:** Using with dynamic EQ
- **Spectral Processing:** Combining with spectral tools

## 📖 Historical Context

### Development Background
Fruity Peak Controller was developed as a flexible automation tool:
- Created to provide dynamic parameter control
- Designed for sidechain applications
- Developed with mixing and sound design in mind
- Intended to complement traditional dynamics processors

### Evolution Through FL Studio Versions
- Initially introduced with basic peak detection
- Enhanced with LFO capabilities
- Improved with better response and stability
- Expanded with more sophisticated algorithms

### Impact on Music Production
Fruity Peak Controller has influenced music production by:
- Providing accessible sidechain capabilities
- Enabling dynamic processing workflows
- Facilitating creative modulation techniques
- Supporting various musical genres with flexible automation

## 🧠 Advanced Processing Techniques

### Peak Detection Mastery
Advanced techniques for peak detection:
- **Response Optimization:** Adjusting attack and release times
- **Sensitivity Control:** Managing detection sensitivity
- **Smoothing Techniques:** Preventing jitter and artifacts
- **Dynamic Range:** Maximizing usable dynamic range
- **Signal Processing:** Understanding envelope follower behavior

### LFO Mastery
Advanced techniques for LFO generation:
- **Wave Shape Selection:** Understanding different shape characteristics
- **Speed Synchronization:** Syncing to musical timing
- **Phase Relationships:** Managing LFO phase
- **Complex Modulation:** Combining multiple LFOs
- **Rhythmic Precision:** Achieving precise rhythmic effects

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique dynamic textures
- **Atmospheric Processing:** Building dynamic ambient effects
- **Rhythmic Effects:** Creating rhythmic modulation patterns
- **Spatial Manipulation:** Creating dynamic spatial effects
- **Experimental Processing:** Pushing boundaries of dynamic processing

## 📊 Performance Considerations

### CPU Usage
Managing Peak Controller's impact on system performance:
- **Low CPU Load:** Very efficient processing
- **Real-Time Performance:** Optimized for live performance
- **Instance Count:** Multiple instances have minimal impact
- **Parameter Automation:** Automated parameters have minimal CPU impact
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Artifact Prevention:** Ensuring smooth envelope following
- **Phase Coherence:** Maintaining phase relationships
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output
- **Signal Integrity:** Preserving original signal quality

### System Integration
Optimizing Peak Controller within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimal audio latency

## 🛠️ Troubleshooting Common Issues

### Peak Detection Problems
- **No Response:** Check input routing and signal level
- **Excessive Jitter:** Increase tension or decay
- **Phase Issues:** Check stereo field and routing
- **Slow Response:** Decrease decay or tension
- **Over-Responsive:** Reduce sensitivity or increase decay

### Technical Issues
- **High CPU Usage:** Check for other plugins in the chain
- **Latency Issues:** Optimize buffer settings
- **Clipping:** Reduce input gain or increase output headroom
- **Artifacts:** Check sample rate and bit depth settings
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Adjust tension and decay for natural response
- **Lack of Character:** Increase volume or adjust base
- **Poor Integration:** Use appropriate mapping formulas
- **Overpowering:** Reduce volume or use different mapping
- **Lack of Control:** Automate parameters for dynamic changes

## 🎚️ Advanced Configuration

### Custom Presets
Creating and managing custom configurations:
- **Sidechain Presets:** Optimized for sidechain applications
  - Kick-bass ducking: Pre-configured for kick-bass relationship
  - Vocal reverb ducking: Set up for vocal reverb control
  - Hi-hat filtering: Configured for rhythmic filtering
  - Essential for efficient workflow
  - Pro tip: Save frequently used configurations as presets

- **LFO Presets:** Configured for LFO applications
  - Sine modulation: Smooth, periodic modulation
  - Square tremolo: On/off rhythmic effects
  - Random sample: Sample and hold modulation
  - Essential for rhythmic applications
  - Pro tip: Use BPM-synced presets for musical timing

- **Creative Presets:** Set up for sound design applications
  - Auto-wah: Envelope-following filter effects
  - Dynamic reverb: Level-responsive reverb control
  - Rhythmic modulation: Complex rhythmic patterns
  - Essential for creative applications
  - Pro tip: Combine with other effects for unique sounds

- **Genre-Specific:** Configured for specific music styles
  - EDM sidechain: Pumping effect for electronic music
  - Hip-hop ducking: Vocal clarity in hip-hop mixes
  - Rock dynamics: Dynamic processing for rock music
  - Essential for genre-specific workflows
  - Pro tip: Adapt presets to your specific needs

### Multi-Instance Setup
Using multiple Peak Controller instances effectively:
- **Parameter-Specific:** Different instances for different parameters
  - Use separate instances for volume, filter, and pan
  - Allows for independent control of each parameter
  - Essential for complex automation
  - Perfect for sophisticated modulation
  - Pro tip: Use for multi-parameter modulation

- **Parallel Processing:** Multiple instances in parallel
  - Use for different types of modulation simultaneously
  - Combine peak detection with LFO modulation
  - Essential for complex effects
  - Perfect for layered automation
  - Pro tip: Use for sophisticated modulation layers

- **Serial Processing:** Multiple instances in series
  - Use for complex signal processing chains
  - Combine multiple detection and modulation stages
  - Essential for advanced processing
  - Perfect for complex automation
  - Pro tip: Use for intricate modulation chains

- **Selective Processing:** Different instances for different elements
  - Use separate instances for different instruments
  - Allows for instrument-specific processing
  - Essential for selective automation
  - Perfect for targeted processing
  - Pro tip: Use for instrument-specific control

### Integration Configurations
Optimizing for different integration scenarios:
- **Insert Processing:** Inline processing configurations
  - Place directly on instrument tracks
  - Use for direct instrument control
  - Essential for instrument-specific automation
  - Perfect for direct processing
  - Pro tip: Use for real-time instrument control

- **Send Processing:** Effects return configurations
  - Use for controlling effects sends
  - Apply to auxiliary tracks for effects control
  - Essential for effects automation
  - Perfect for dynamic effects
  - Pro tip: Use for dynamic reverb and delay control

- **Hardware Integration:** External hardware integration
  - Use for controlling external hardware
  - Route automation to external devices
  - Essential for hybrid setups
  - Perfect for hardware integration
  - Pro tip: Use for external hardware control

- **DAW Integration:** Optimizing for FL Studio workflow
  - Integrate with FL Studio's automation system
  - Use with playlist automation
  - Essential for comprehensive automation
  - Perfect for integrated workflows
  - Pro tip: Combine with other automation methods

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Peak Controller techniques
  - Active community of users sharing tips
  - Troubleshooting and problem-solving
  - Essential for learning from others
  - Perfect for getting help with issues
  - Pro tip: Search before posting to avoid duplicates

- **Reddit Groups:** Sharing sidechain techniques and presets
  - r/FL_Studio community discussions
  - Sharing of presets and techniques
  - Essential for discovering new approaches
  - Perfect for inspiration and ideas
  - Pro tip: Follow relevant subreddits for updates

- **Discord Servers:** Real-time collaboration and feedback
  - FL Studio Discord communities
  - Real-time problem solving
  - Essential for immediate assistance
  - Perfect for live collaboration
  - Pro tip: Join active communities for best engagement

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced sidechain techniques
  - YouTube channels with Peak Controller tutorials
  - Step-by-step visual guides
  - Essential for visual learners
  - Perfect for hands-on learning
  - Pro tip: Watch multiple tutorials for different perspectives

- **Written Guides:** In-depth articles on dynamic processing
  - Blog posts and articles on sidechaining
  - Technical explanations and examples
  - Essential for detailed understanding
  - Perfect for reference material
  - Pro tip: Bookmark useful resources for later reference

- **Webinars:** Live demonstrations and Q&A sessions
  - Live streaming sessions with experts
  - Interactive learning opportunities
  - Essential for real-time learning
  - Perfect for asking specific questions
  - Pro tip: Participate actively in webinars

### Sharing Platforms
- **Preset Libraries:** Websites hosting Peak Controller configurations
  - Plugin Alliance and other preset sites
  - Community-contributed configurations
  - Essential for expanding your toolkit
  - Perfect for discovering new techniques
  - Pro tip: Contribute your own presets to help others

- **Technique Sharing:** Platforms for sharing processing methods
  - Forums and communities focused on techniques
  - Sharing of workflows and approaches
  - Essential for learning new methods
  - Perfect for expanding your skills
  - Pro tip: Document your techniques for future reference

- **Educational Content:** Tutorials and educational materials
  - Comprehensive courses and guides
  - Structured learning paths
  - Essential for systematic learning
  - Perfect for building foundational knowledge
  - Pro tip: Follow structured learning paths for best results

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Set up a Ghost Kick sidechain in under 30 seconds
- [ ] Create a "Ducking Reverb" that keeps vocals clear in the mix
- [ ] Modulate a filter using the Random LFO for evolving effects
- [ ] Explain the difference between "Peak" and "LFO" output modes
- [ ] Use Peak Controller for dynamic EQ applications
- [ ] Create rhythmic filtering effects with precise timing
- [ ] Apply complex mapping formulas for advanced control
- [ ] Troubleshoot peak detection and response issues effectively
- [ ] Integrate Peak Controller into efficient mixing workflows
- [ ] Create sophisticated modulation chains with multiple sources
- [ ] Design custom sidechain configurations for specific instruments
- [ ] Implement tempo-synced LFO effects with musical precision
- [ ] Combine peak detection with external modulation sources
- [ ] Create complex automation patterns using multiple controllers
- [ ] Optimize Peak Controller settings for minimal CPU usage
- [ ] Use Peak Controller for creative sound design applications
- [ ] Set up advanced sidechain routing for complex projects
- [ ] Apply Peak Controller in live performance scenarios
- [ ] Create genre-specific sidechain presets for efficient workflow
- [ ] Integrate Peak Controller with other automation tools seamlessly

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Peak Controller

## Purpose & Identity
Fruity Peak Controller is an **internal controller engine**. It transforms incoming audio levels or an internal LFO into automation data. It doesn't process the audio signal directly; instead, it "listens" to it and outputs control signals that can drive any other knob in FL Studio. [SRC: IL-MAN]

## 60-Second Mental Model
Imagine a sound engineer with their hand on a fader. When they hear the Kick drum, they quickly pull the fader down. Peak Controller is that engineer.
- **The "Peak" part** is the ear (listening to the audio).
- **The "LFO" part** is a robot hand (moving in a set pattern regardless of audio).

## Hip-Hop / R&B Context
The "Bounce" of modern trap is built on Fruity Peak Controller.
- **Sidechaining:** Automating the Bass volume to "duck" every time the Kick hits so the low-end doesn't turn into a muddy mess.
- **Dynamic Reverb:** Making the reverb get quieter while the artist is rapping, then swell up during the pauses for an "expensive" airy feel.
- **Auto-Wah:** Controlling a filter's cutoff based on how hard a guitarist or keyboardist plays.

## When To Use
- When you need **sidechain ducking** but don't want to use a compressor.
- When you want a sound's **amplitude to control another effect** (e.g., Vocal volume controls distortion depth).
- When you need a **tempo-synced LFO** to modulate something that doesn't have an LFO built-in.

## When NOT To Use
- **Surgical Compression:** If you need to actually *squash* the audio signal's dynamics, use **Fruity Limiter**. Peak Controller only generates data; it doesn't change the audio itself.
- **Global Automation:** For simple linear changes (like a fade-out), use a standard **Automation Clip**.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Peak Controller

## UI Tour
The UI is divided into three distinct sections:

1.  **PEAK Section (The Listener):**
    - **Base:** The resting value of the automation (where the knob sits when there is no sound).
    - **Vol (Volume):** The range of movement. *Positive* boosts from base; *Negative* ducks from base. [SRC: IL-MAN]
    - **Tension:** The "snap" of the attack/decay curve.
    - **Decay:** How fast the signal returns to the Base level.
2.  **LFO Section (The Robot):**
    - **Shape:** Sine, Triangle, Square, Saw, Random.
    - **Speed:** Tempo-synced rate of oscillation.
3.  **The Viewer:** The black box at the top that shows the red (Peak) and green (LFO) lines representing the generated data.

## Functional Flow
1.  **Audio Input:** Sound enters the plugin slot.
2.  **Detection:** The "Peak" engine calculates the amplitude envelope.
3.  **Modulation:** The LFO engine generates its cycle.
4.  **Signal Summing:** If enabled, Peak and LFO signals are combined.
5.  **Broadcast:** The data is sent to the "Remote Control" bus.
6.  **Mute Button:** If enabled, the original audio trigger signal is silenced so it doesn't leak into the mix.

## Things Beginners Misunderstand
- **"Link to Controller" Menu:** You don't "route" the audio to the target. You right-click the target knob (e.g., a mixer fader) -> **Link to controller** -> select **Peak Controller - Peak**.
- **Base vs Volume:** If you want a fader to start at 80% and drop to 20% when the kick hits, set **Base** to 80% and **Vol** to a negative value (-60%).
- **Mute Toggle:** Beginners often forget to turn on **MUTE** if they are using a "Ghost Kick" (a kick you only want to use as a trigger, not to be heard). [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Peak Controller

## 1. The "Ghost Kick" Sidechain
- **Technique:** Place Peak Controller on a sampler track with a short, punchy kick. Enable **MUTE** in the plugin.
- **Execution:** Every time you place a note in the Step Sequencer, the volume of linked tracks will duck, but no kick sound will be heard.
- **Why:** This gives you total rhythmic control over the "bounce" without being tied to the actual audible kick drum.

## 2. Inverted Mapping (The "Standard" Duck)
- **Technique:** When linking a knob, use the **Mapping Formula** `1-Input`.
- **Alternative:** Set the **Vol** knob in Peak Controller to a negative value (e.g., -50%). 
- **Pro Tip:** Negative Vol is usually easier because you can adjust the "strength" of the ducking directly from the Peak Controller UI without opening the linking menu again.

## 3. Dynamic EQ Carving
- **Technique:** Place Peak Controller on the Vocal track.
- **Target:** Link it to a 2kHz-5kHz band on the **Melody Bus EQ**.
- **Execution:** Set **Vol** to a negative value.
- **Result:** Every time the artist raps, the melody track "dips" in the vocal frequency range, then pops back up during the silence. This is more transparent than a static EQ cut. [SRC: REPUTABLE]

## 4. Random Pitch "Drift"
- **Technique:** Ignore the Peak section. Use the **LFO** section.
- **Shape:** Set to **Random**.
- **Target:** Link to a synth's Pitch or Filter Cutoff.
- **Tweak:** Set **Amount** to a very low value (2-5%).
- **Result:** Creates an organic, "analog" instability that makes digital synths feel more vintage.

## Common Pitfalls + Fixes
- **Pitfall:** "The controlled knob is jittering/shaking too fast."
  - **Fix:** Increase the **Decay** time. This smooths out the release of the envelope.
- **Pitfall:** "I lost my manual control over the knob."
  - **Fix:** Once linked, the knob is "locked" to the controller. Use the **Base** knob in Peak Controller to change the resting position. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Peak Controller

Peak Controller is the "Conductor" of the project's movement.

## 1. Moody (Breathing, Pulsing, Heartbeat)
- **Concept:** Using a "Ghost Kick" to make the atmosphere "inhale" and "exhale."
- **Levers:**
  - **Ducking:** Slow **Decay** (500ms+) on a negative **Vol** setting.
  - **Target:** Main melodic pad.
- **Listen For:** The "vacuum" sensation where the sound slowly rushes back in after the kick.
- **Don't Do This:** Don't use sharp attack/decay; the vibe should be liquid and slow.

## 2. Upbeat (Snappy, Bouncing, Kinetic)
- **Concept:** Hard, rhythmic volume changes that drive the dancefloor.
- **Levers:**
  - **Ducking:** Fast **Decay** (100ms) and high negative **Vol**.
  - **Target:** Everything except the drums (Bass, Keys, Vocals).
- **Listen For:** The "snap" where the music jumps back to full volume instantly after every kick.
- **Don't Do This:** Avoid slow release times; it will kill the energy.

## 3. Psychedelic (Liquid, Morphing, Unpredictable)
- **Concept:** Breaking the grid with random modulation.
- **Levers:**
  - **LFO:** Random shape at a medium speed.
  - **Target:** Phaser Rate or Chorus Mix.
- **Listen For:** Sounds that seem to "evolve" on their own without repeating.
- **Don't Do This:** Don't sync the LFO to the beat; let it be free-running for more trippiness.

## 4. Jazzy (Responsive, Organic, Interactive)
- **Concept:** Effects that respond to the intensity of the performance.
- **Levers:**
  - **Envelope Following:** Link **Peak** to **Filter Resonance**.
  - **Target:** Electric Piano or Guitar.
- **Listen For:** The "wah" effect that only triggers when the player hits a loud chord.
- **Don't Do This:** Don't use extreme ducking; keep the modulation subtle (10-20% range).

## 5. Vibey (Clean, Polished, Expensive)
- **Concept:** High-end mix management (Sidechain 2.0).
- **Levers:**
  - **Reverb Ducking:** Vocal Peak -> negative **Vol** -> Reverb Wet/Dry mix.
  - **Result:** The reverb is "pushed away" while the vocal is active, keeping the mix clean, then rushes in to fill the gaps.
- **Listen For:** A "lush" space that doesn't muddy up the lyrics.
- **Don't Do This:** Don't duck the reverb 100%; leave a little bit of "halo" (30% base). [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Peak Controller (5 Minutes)

1.  **Insert:** Load **Fruity Peak Controller** on your Kick drum track.
2.  **Mute:** Click the **MUTE** button in the plugin if you don't want the trigger kick to be heard.
3.  **Target:** Go to your Bass mixer track. Right-click the **Volume Fader**.
4.  **Link:** Select **Link to controller**. 
5.  **Assign:** In the "Internal Controller" dropdown, pick **Peak Controller - Peak**.
6.  **Formula:** Select the **Inverted** preset (Mapping formula: `1-Input`). Click Accept.
7.  **Tweak:** Go back to Peak Controller and adjust **BASE** (the resting fader height) and **VOL** (the depth of the duck). [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity Peak Controller

- **Positive Vol for Sidechain:** Using a positive Volume knob value when you want to duck. **Fix:** Set Vol to a negative value or use the `1-Input` formula.
- **Wrong Decay:** Setting Decay to 0. This causes the controlled knob to "snap" back instantly, creating a digital click or a very jarring, non-musical bounce. **Fix:** Set Decay to at least 20-30%.
- **Multiple Links:** Linking 10 different knobs to one Peak Controller without realizing they all share the same Base/Vol settings. **Fix:** Use multiple instances of Peak Controller if you need different "strengths" of ducking for different tracks.
- **Forgetting Mute:** Using an audible Kick as a trigger and wondering why the kick sounds twice as loud. **Fix:** If the track is purely a sidechain trigger, engage the **MUTE** button.
- **Conflicting LFO:** Having the LFO section active while trying to do a simple sidechain duck. This adds wobbling to your ducking pattern. **Fix:** Set LFO Amount to 0. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points: Fruity Peak Controller

| Goal | Base | Vol | Decay | Mapping | Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Trap Sidechain** | 100% | -80% | 20% | `Input` | Hard, aggressive ducking. |
| **R&B Reverb Duck** | 50% | -30% | 60% | `Input` | Smooth vocal clarity. |
| **Auto-Wah Filter** | 20% | +60% | 40% | `Input` | Filter opens on loud hits. |
| **Analog Pitch Drift**| 50% | 0 (LFO) | N/A | `Input*0.05` | Tiny LFO pitch warble. |
| **Ghost Pulse** | 0% | +100% | 80% | `Input` | Creating swells from silence. |

*Note: If using negative VOL in the plugin, use the standard `Input` mapping formula. If using positive VOL, use the `1-Input` mapping preset.* [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Starting Points: Moody (Fruity Peak Controller)

- **The Goal:** A "breathing" atmosphere where the music pulses with the rhythm of a heartbeat.
- **Recipe:**
  1. Create a "Ghost Kick" (a simple 4-on-the-floor pattern with a deep subby kick).
  2. Load Peak Controller on the Ghost Kick and turn on **MUTE**.
  3. Route your main melody pad to a mixer track.
  4. Link the Pad's **Volume Fader** to **Peak Controller - Peak**.
  5. Set Peak Controller **Base** to 80% and **Vol** to **-40%**.
  6. **Tweak (Critical):** Increase the **Decay** knob to ~70%.
- **Result:** The pad doesn't just "shut off"; it gently ducks and then "gasps" back into volume slowly, creating a heavy, emotional moody pulse. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey

## Upbeat (The "Mainstream Bounce")
- **Setup:** Hard Sidechain (Base 100%, Vol -90%, Decay 10%).
- **Target:** Everything except Kick and Snare.
- **Effect:** The entire track "chops" out for the kick, creating that high-energy pumping sensation.

## Psychedelic (The "Liquid Space")
- **Setup:** LFO section only. Shape: **Random**.
- **Target:** Reverb Size or Phaser Offset.
- **Effect:** The space around the sound constantly changes in size and character, feeling morphic and trippy.

## Jazzy (The "Interactive Wah")
- **Setup:** Peak section. Vol +40%, Tension 50%.
- **Target:** **Fruity Love Philter** Cutoff.
- **Effect:** Subtle filter movement that tracks the velocity of your playing.

## Vibey (The "Expensive Clean-Up")
- **Setup:** Reverb Ducking (Base 40%, Vol -30%, Decay 50%).
- **Target:** Reverb Mixer Slot **Mix Knob**.
- **Context:** Perfect for R&B vocals where you want a huge reverb, but only when the singer pauses. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Peak Controller – Quick Reference

## What It Does
Converts audio peaks into automation data for sidechain effects, ducking, dynamic control, and creative modulation.

## Key Parameters
- **Base**: Minimum controller output value
- **Vol**: Peak detection volume threshold  
- **Tension**: Attack/release curve shape
- **Decay**: How fast controller returns to base
- **LFO**: Adds rhythmic modulation to output

## Common Hip-Hop Uses

### Sidechain Ducking
1. Route kick to Peak Controller
2. Link to mixer volume
3. Base: 100%, Vol: 0-20%, Fast decay

### Pump Effect
1. Use on kick or clap
2. Link to bass volume or filter
3. Medium decay for groove

### Dynamic Gating
1. Link to noise/texture volume
2. Base: 0%, creates rhythmic gates
3. Fast decay for choppy feel

## Quick Recipes

**Classic Kick Duck**: Base 100% | Vol 0% | Decay 200ms | Tension 50%

**Pumping Bass**: Base 80% | Vol 0% | Decay 400ms | Link to bass volume

**Rhythmic Gate**: Base 0% | Vol 100% | Fast decay | Link to pad/texture

**Vocal Duck**: Base 95% | Vol 10% | Decay 150ms | Subtle volume dip

## Routing Tips
- Right-click parameter → Link to controller
- Use multiple instances for complex routing
- Invert controller for opposite effect (volume boost instead of duck)

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Peak Controller

| Parameter | Type | Range | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **BASE** | Knob | 0 to 100% | **Vibey** (Balance) | **Resting Level**| The "default" output value when silent. |
| **VOL (Volume)**| Knob | -100 to +100%| **Upbeat** (Duck) | **Range** | The amount of movement from the Base. |
| **TENSION** | Knob | Curve | **Upbeat** (Snappy) | **Attack** | The sharpness of the initial peak response. |
| **DECAY** | Knob | Time | **Moody** (Slow) | **Release** | How fast the signal returns to Base. |
| **LFO SPEED** | Knob | Tempo | **Psychedelic** | **Rhythm** | Rate of the internal oscillator. |
| **MUTE** | Switch | On/Off | **Moody** | **Cleanup** | Silences the trigger audio passing through. |

- **Vibe Impact Tag (Upbeat):** High negative VOL settings create the "pumping" effect essential for energy.
- **Mix Impact Tag (Clarity):** Negative VOL used on Reverb sends keeps the mix from becoming washed out. [SRC: IL-MAN]

```

---

## FILE: 02-Data\presets\hip-hop-presets.json

```json
{
  "presets": [
    {
      "name": "Trap Kick Duck",
      "category": "sidechain",
      "subgenre": "trap",
      "parameters": {
        "base": 100,
        "volume": 0,
        "tension": 45,
        "decay": 180
      },
      "description": "Fast, punchy sidechain for 808-heavy trap beats",
      "linkTo": "Bass volume or filter cutoff"
    },
    {
      "name": "Boom Bap Pump",
      "category": "sidechain",
      "subgenre": "boom-bap",
      "parameters": {
        "base": 85,
        "volume": 5,
        "tension": 50,
        "decay": 350
      },
      "description": "Medium pump for classic hip-hop groove",
      "linkTo": "Sample volume or mix level"
    },
    {
      "name": "Melodic Ducking",
      "category": "sidechain",
      "subgenre": "melodic",
      "parameters": {
        "base": 95,
        "volume": 10,
        "tension": 60,
        "decay": 250
      },
      "description": "Subtle duck for melodic elements to make room for vocals",
      "linkTo": "Melody/chord volume"
    },
    {
      "name": "Rhythmic Gate",
      "category": "creative",
      "subgenre": "electronic",
      "parameters": {
        "base": 0,
        "volume": 100,
        "tension": 30,
        "decay": 120
      },
      "description": "Creates rhythmic gating on sustained sounds",
      "linkTo": "Pad/texture volume"
    },
    {
      "name": "Bass Pulse",
      "category": "modulation",
      "subgenre": "electronic",
      "parameters": {
        "base": 75,
        "volume": 0,
        "tension": 40,
        "decay": 450,
        "lfo": 0.25
      },
      "description": "Pulsing bass movement synced to kick",
      "linkTo": "Bass filter or volume"
    },
    {
      "name": "Vocal Space Maker",
      "category": "mixing",
      "subgenre": "all",
      "parameters": {
        "base": 92,
        "volume": 15,
        "tension": 55,
        "decay": 200
      },
      "description": "Duck instruments when vocals hit",
      "linkTo": "Instrumental bus volume"
    },
    {
      "name": "Lo-Fi Wobble",
      "category": "creative",
      "subgenre": "lo-fi",
      "parameters": {
        "base": 80,
        "volume": 10,
        "tension": 70,
        "decay": 600,
        "lfo": 0.125
      },
      "description": "Slow, wobbly modulation for lo-fi texture",
      "linkTo": "Filter cutoff or pitch"
    },
    {
      "name": "Snare Gate",
      "category": "creative",
      "subgenre": "experimental",
      "parameters": {
        "base": 0,
        "volume": 100,
        "tension": 20,
        "decay": 80
      },
      "description": "Tight gating triggered by snare hits",
      "linkTo": "Hi-hat or texture volume"
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Peak Controller)

## 1. Kick vs 808 Primacy
- **Rule:** In Trap, the Kick provides the "thump" and the 808 provides the "tone."
- **Application:** Use Peak Controller on the Kick to duck the 808 volume by at least **-6dB** to **-12dB**. The 808 should only be "full volume" after the kick's initial transient is over.

## 2. Vocal Cleanliness
- **Rule:** Reverb should not compete with lyrics.
- **Application:** Sidechain the **Reverb Mix** to the Vocal Peak. Set Decay to roughly the length of a 1/4 note so the reverb "blooms" in the gaps between words.

## 3. Ghost Sidechain Consistency
- **Rule:** Sidechaining should be consistent throughout the song, even if the kick pattern changes.
- **Application:** Use a dedicated **Ghost Kick** track that plays 4-on-the-floor for the entire project. Link your sidechains to this instead of the "real" kick. This keeps the "Vibe" steady even during drum breaks.

## 4. Automation Resolution
- **Rule:** Fast ducking can cause "Zipper Noise" on digital plugins.
- **Application:** If you hear artifacts, increase the **Decay** knob slightly. Smooth transitions are more "Vibey" than instant cuts.

## 5. Gain Staging
- **Rule:** Sidechaining changes the average level of a track.
- **Application:** After setting up sidechaining, re-balance your faders. A sidechained bass might need to be turned up slightly to feel as loud as it was before. [SRC: REPUTABLE]

```

---

## FILE: 02-Data\rules\routing-rules.md

```markdown
# Fruity Peak Controller – Routing Rules

## Signal Routing Guidelines

### Input Source Selection
- **Kick Drum**: Use for sidechain ducking and pumping effects
- **Snare/Clap**: Create rhythmic gating and accents
- **Hi-Hat**: Subtle modulation and texture control
- **Vocals**: Dynamic ducking of backing elements
- **Any Percussive Source**: Rhythmic modulation trigger

### Output Destination Best Practices

#### Volume Control
- **Bass Volume**: Classic sidechain ducking
- **Pad/Synth Volume**: Create space in mix
- **Sample Volume**: Rhythmic gating
- **Effect Send Level**: Dynamic effect amount
- **Mix Bus Volume**: Multitrack ducking

#### Filter Modulation
- **Low-Pass Cutoff**: Ducking with tonal movement
- **Band-Pass Frequency**: Rhythmic sweep effects
- **Resonance**: Accent peak moments

#### Effect Parameters
- **Reverb Mix**: Dynamic space control
- **Delay Feedback**: Rhythmic delay modulation
- **Distortion Amount**: Dynamic saturation
- **Chorus Depth**: Movement modulation

## Routing Strategies by Genre

### Trap/Modern Hip-Hop
- Kick → Bass Volume (aggressive duck)
- Kick → Melody Filter (create space)
- Hi-Hat → Texture Gate (rhythmic variation)

### Boom Bap/Classic
- Kick → Sample Volume (gentle pump)
- Snare → Effect Send (accent hits)
- Drums → Mix Bus (overall glue)

### Lo-Fi/Chill
- Kick → Pad Volume (subtle duck)
- Perc → Filter Cutoff (organic movement)
- Snare → Reverb Mix (dynamic space)

### Melodic/Emotional
- Vocal → Instrumental Volume (auto-ducking)
- Kick → Bass Filter (smooth movement)
- Snare → Chord Volume (rhythmic accent)

## Common Mistakes to Avoid
- **Over-ducking**: Keep Base above 75% for subtle effects
- **Wrong Decay Time**: Match to tempo (shorter = faster)
- **Ignoring Tension**: Adjust for smooth or aggressive curves
- **Multiple Conflicts**: Avoid ducking same element from multiple sources
- **No A/B Testing**: Always compare with controller bypassed

## Advanced Routing Techniques

### Multiband Ducking
Route to different EQ bands for frequency-specific ducking

### Inverted Control
Link with negative values for volume boost on peaks

### Parallel Processing
Send to multiple parameters for complex modulation

### Tempo-Synced Movement
Combine with LFO for rhythmic patterns

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Sidechain Ducking (The "Trap Bounce")

## Step-by-Step Setup
1.  Load **Fruity Peak Controller** on the **Kick Drum** mixer slot.
2.  Enable **MUTE** if you only want the kick to trigger the sidechain (Ghost Kick).
3.  Go to your **Bass/808** mixer track.
4.  Right-click the **Volume Fader** -> **Link to controller**.
5.  Assign: **Peak Controller - Peak**.
6.  Set mapping to **Inverted** (`1-Input`).
7.  **Tweak:** 
    - Set **Base** to your desired bass level (e.g., 80%).
    - Set **Vol** to **-80%** for a hard pump.
    - Set **Decay** to **20%** for a snappy return.

## Context Application
- **Vibe:** Upbeat/Aggressive. This creates the rhythmic "sucking" sound essential for modern club tracks.

## Variation
- **Soft Sidechain:** Set Vol to -30% and increase Decay to 50% for a more transparent R&B feel.

## Pitfalls + Fixes
- **Pitfall:** "The bass never turns back up."
  - **Fix:** Your **Base** is too low. Move the Base knob up until the fader returns to its normal height between kicks. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Shaping_And_Control.md

```markdown
# Goal: Dynamic Reverb Ducking (The "Expensive" Space)

## Routing Context
- **Target:** Lead Vocal.
- **Position:** Place **Fruity Peak Controller** on the Vocal mixer track.
- **Effect:** A Reverb plugin on a separate **Send Track**.

## Step-by-Step Setup
1.  On the **Vocal Track**, load Peak Controller.
2.  On the **Reverb Send**, load your reverb (e.g., Fruity Reeverb 2).
3.  Right-click the Reverb **Wet/Mix** knob -> **Link to controller**.
4.  Assign: **Peak Controller - Peak**.
5.  Set **Mapping Formula** to `1-Input` (Inverted).
6.  **Tweak Peak Controller:**
    - **Base:** 40% (This is the amount of reverb during the pauses).
    - **Vol:** -30% (This is how much the reverb drops when singing starts).
    - **Decay:** 60% (Adjust to match the tempo).

## What To Listen For
- The vocal should sound clear and "dry" while the artist is speaking, but as soon as they stop, the reverb tail should "bloom" and fill the silence.

## Automation Idea
- Link the **Decay** knob to an automation clip to make the reverb bloom slower during the outro. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-instrument\bass-ducking.md

```markdown
# Bass Ducking with Fruity Peak Controller

## Overview
Use kick drum peaks to automatically duck bass volume or filter, creating space for the kick and adding groove.

## Step-by-Step Workflow

### 1. Setup Peak Controller
1. Add Fruity Peak Controller to mixer track
2. Route kick drum to this track (pre-fader send)
3. Don't add to master (this is a control track only)

### 2. Configure Parameters
**For Trap/808-Heavy:**
- Base: 100%
- Vol: 0%
- Tension: 40-50%
- Decay: 150-200ms

**For Boom Bap:**
- Base: 85-90%
- Vol: 5-10%
- Tension: 50-60%
- Decay: 300-400ms

**For Melodic/Smooth:**
- Base: 95%
- Vol: 10-15%
- Tension: 65-70%
- Decay: 250-300ms

### 3. Link to Bass
**Volume Ducking:**
1. Right-click bass mixer volume fader
2. "Link to controller"
3. Select your Peak Controller instance
4. Adjust amount slider for duck depth

**Filter Ducking:**
1. Add filter to bass (Fruity Love Philter or Free Filter)
2. Right-click Low-Pass cutoff frequency
3. Link to Peak Controller
4. Set range from low (ducked) to high (open)

### 4. Fine-Tune
- **Too much duck**: Increase Base value
- **Too slow**: Decrease Decay time
- **Too aggressive**: Increase Tension
- **Not enough**: Lower Vol threshold or increase link amount

## Genre-Specific Recipes

### Trap
`\`\`
Kick hits → Bass volume drops to 0-20%
Decay: 180ms (quick recovery)
Tension: 45% (punchy attack)
Result: Aggressive, modern punch
`\`\`

### Boom Bap
`\`\`
Kick hits → Bass volume drops to 85%
Decay: 350ms (groove pocket)
Tension: 55% (smooth curve)
Result: Classic pump feel
`\`\`

### Lo-Fi
`\`\`
Kick hits → Bass filter closes slightly
Decay: 500ms (lazy feel)
Tension: 70% (gentle)
Result: Organic, breathing movement
`\`\`

## Advanced Techniques

### Multiband Duck
- Duck only low-end frequencies
- Keep mid/high bass consistent
- Use Fruity Parametric EQ 2 with linked gain

### Parallel Compression Duck
- Duck the dry signal
- Keep compressed layer constant
- Maintains energy while creating space

### Filter + Volume Combo
- Link both filter and volume
- Filter: subtle close
- Volume: main duck
- Creates tonal movement with space

## Troubleshooting

**Problem**: Bass disappears completely
- Solution: Increase Base to 70-80%

**Problem**: No noticeable ducking
- Solution: Lower Vol threshold or increase link amount

**Problem**: Pumping sounds unnatural
- Solution: Increase Tension for smoother curve

**Problem**: Duck doesn't recover in time
- Solution: Decrease Decay time or increase tempo sync

```

---

## FILE: 03-Workflows\by-instrument\leads.md

```markdown
# Workflow: Auto-Wah Modulation (Peak Controller)

## The Concept
Using the intensity of your playing to sweep a filter, similar to a physical Wah-Wah pedal.

## Step-by-Step
1.  Load **Fruity Peak Controller** on an Electric Guitar or Synth Lead track.
2.  After Peak Controller, add **Fruity Love Philter** or **Fruity Parametric EQ 2**.
3.  Right-click the **Filter Cutoff** -> **Link to controller**.
4.  Assign: **Peak Controller - Peak**.
5.  **Tweak Peak Controller:**
    - **Base:** 10% (Filter is mostly closed).
    - **Vol:** +70% (Filter opens wide on loud notes).
    - **Tension:** 60% (Makes the filter "snap" open).

## Vibe Check
- **Jazzy:** Adds organic expression to keys.
- **Psychedelic:** Link the **Resonance** knob to the same Peak signal so the filter gets "screamy" as it opens.

## Pitfalls
- **Over-Resonance:** High peaks can cause ear-piercing whistles. Use a Limiter *after* the filter. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-instrument\vocal-ducking.md

```markdown
# Vocal Ducking with Fruity Peak Controller

## Overview
Automatically duck instrumental elements when vocals are present, ensuring clarity and professional mix balance.

## Basic Setup Workflow

### 1. Create Control Track
1. Add mixer track for Peak Controller
2. Route lead vocal to this track (pre-fader send)
3. Insert Fruity Peak Controller on this track

### 2. Configure for Vocals
**Subtle Duck (Professional):**
- Base: 92-95%
- Vol: 10-15%
- Tension: 55-65%
- Decay: 150-250ms

**Aggressive Duck (Loud Vocals):**
- Base: 85-90%
- Vol: 5-10%
- Tension: 45-55%
- Decay: 200-300ms

**Creative Duck (Vocal Chops):**
- Base: 75-80%
- Vol: 0%
- Tension: 40%
- Decay: 100-150ms

### 3. Link to Instrumentals
**Option 1: Individual Elements**
- Link to melody volume
- Link to chord volume
- Link to pad volume
- Gives precise control per element

**Option 2: Bus Ducking**
- Create instrumental bus
- Link bus volume to controller
- Faster setup, affects everything

### 4. Fine-Tune Balance
- A/B test with controller bypassed
- Ensure vocal clarity maintained
- Check that duck isn't too obvious
- Verify timing feels natural

## Genre Applications

### Melodic Rap/Singing
`\`\`
Purpose: Make room for melodic vocals
Base: 93%
Decay: 200ms
Link: Melody/chord layers
Result: Vocals sit perfectly in mix
`\`\`

### Aggressive Trap Vocals
`\`\`
Purpose: Strong vocal presence
Base: 88%
Decay: 180ms
Link: All non-drums
Result: Vocals punch through hard
`\`\`

### Boom Bap/Storytelling
`\`\`
Purpose: Clarity for lyrical content
Base: 95%
Decay: 250ms
Link: Sample/loop volume
Result: Every word heard clearly
`\`\`

### Lo-Fi/Chill Rap
`\`\`
Purpose: Gentle vocal integration
Base: 96%
Decay: 300ms
Link: Pad/texture volume
Result: Smooth, natural blend
`\`\`

## Advanced Techniques

### Frequency-Specific Ducking
1. Use Fruity Parametric EQ 2 on instrumental
2. Link specific band gains to Peak Controller
3. Duck only midrange (vocal frequency area)
4. Preserve bass and air frequencies

### Dynamic Reverb Control
1. Link reverb send level to Peak Controller
2. Base: 100%, Vol: 20%
3. Reverb reduces when vocals present
4. Creates space and clarity

### Multiband Compression Link
1. Add Maximus to instrumental bus
2. Link Mid band to Peak Controller
3. Duck vocal frequency range only
4. Maintains low-end power

### Stereo Width Modulation
1. Link stereo width plugin to controller
2. Narrow stereo field during vocals
3. Wide when vocals absent
4. Creates focus on centered vocal

## Common Scenarios

### Verse Duck (Storytelling)
- Subtle duck (Base 95%)
- Duck pads and melodies
- Keep drums and bass full

### Hook Duck (Melodic)
- Medium duck (Base 90%)
- Duck backing vocals and harmonies
- Emphasize lead vocal

### Ad-Lib Duck (Trap)
- Minimal duck (Base 97%)
- Very fast decay (100ms)
- Quick accents only

### Vocal Chop Duck (Creative)
- Strong duck (Base 80%)
- Fast decay (120ms)
- Rhythmic pumping effect

## Mixing Tips

### Do's
- ✓ Start subtle and increase if needed
- ✓ Match decay to vocal rhythm
- ✓ Test in context of full beat
- ✓ Use multiple instances for different elements

### Don'ts
- ✗ Don't duck drums (usually)
- ✗ Don't over-duck (keeps energy)
- ✗ Don't use identical settings for all vocals
- ✗ Don't forget to bypass/compare

## Troubleshooting

**Vocals still muddy**: Lower Base more or duck more elements

**Pumping too obvious**: Increase Base, increase Tension

**Duck too slow**: Decrease Decay time

**Sounds unnatural**: Increase Tension for smoother curve

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Peak Controller

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Peak Controller.
- **Key Info:** Peak detection vs LFO generation, Bipolar Vol knob logic, Mute button functionality.

## Source ID: [SRC: IL-KB]
- **Source:** Image-Line Knowledge Base - "Sidechaining in FL Studio."
- **Key Info:** Comparison between Peak Controller and Fruity Limiter sidechain methods.

## Source ID: [SRC: REPUTABLE]
- **Source:** "SeamlessR" - Modulation Masterclass (YouTube).
- **Key Info:** Ghost kick workflows, mapping formulas (`1-Input`), and using LFOs for "analog" pitch drift.

## Coverage Checklist
- [x] Peak Follower UI (Base/Vol/Decay)
- [x] LFO Section (Shapes/Speed)
- [x] Mapping Formula Guide
- [x] Ghost Kick Workflow
- [x] Dynamic Reverb Recipe
- [x] 5 Vibe Targets (Moody, Upbeat, Psychedelic, Jazzy, Vibey)
- [x] Mixer-Fader Linking Best Practices

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity Peak Controller

## 1. The "Trap Bounce" (Sidechain)
- **Mix Decision:** Heavy ducking of the whole melodic bus triggered by the Kick.
- **Vibe:** Upbeat/Energetic.
- **Tooling:** Peak Controller + Negative Vol + Fast Decay.

## 2. The "R&B Bloom" (Dynamic Reverb)
- **Mix Decision:** Reverb swells during vocal pauses.
- **Vibe:** Vibey/Polished.
- **Tooling:** Peak Controller + Inverted Mapping on Reverb Send.

## 3. The "Lofi Drift" (Random LFO)
- **Mix Decision:** Subtle, slow random pitch modulation on a piano.
- **Vibe:** Moody/Vintage.
- **Tooling:** LFO Section + Random Shape + Very Low Amount.

## 4. The "Glitch Movement" (High-Speed LFO)
- **Mix Decision:** 1/16th Square wave modulating a high-pass filter.
- **Vibe:** Psychedelic/Kinetic.
- **Tooling:** LFO Section + Square Shape + BPM-synced Speed.

```

---

## FILE: 04-Reference\mapping-formulas.md

```markdown
# Mapping Formulas Reference: Fruity Peak Controller

When using the "Link to Controller" window, these formulas allow you to reshape the signal from Peak Controller.

## 1. The Inverter: `1-Input`
- **Use Case:** Creating a sidechain duck when the **VOL** knob in Peak Controller is positive.
- **Action:** If the kick hits (Input = 1), the result is 0 (Silence).

## 2. The Scaler: `Input*0.5`
- **Use Case:** Taming an overly aggressive modulation.
- **Action:** Reduces the total range of movement by half.

## 3. The Limiter: `min(Input,0.8)`
- **Use Case:** Preventing a filter from opening too wide.
- **Action:** The value will never go above 80%.

## 4. The Offset: `Input+0.2`
- **Use Case:** Ensuring a fader never drops to absolute zero.
- **Action:** Adds a 20% "floor" to the modulation.

## 5. The Logarithmic: `Log(Input)`
- **Use Case:** More natural volume response for human hearing. [SRC: REPUTABLE]

```

---

