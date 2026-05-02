# Fruity Voltage Controller - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Voltage Controller - CV Bridge

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██╗   ██╗ ██████╗ ██╗     ████████╗ █████╗  ██████╗ ███████╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██║   ██║██╔═══██╗██║     ╚══██╔══╝██╔══██╗██╔════╝ ██╔════╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║   ██║██║   ██║██║        ██║   ███████║██║  ███╗█████╗  
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ╚██╗ ██╔╝██║   ██║██║        ██║   ██╔══██║██║   ██║██╔══╝  
██║     ██║  ██║╚██████╔╝██║   ██║      ██║        ╚████╔╝ ╚██████╔╝███████╗   ██║   ██║  ██║╚██████╔╝███████╗
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝         ╚═══╝   ╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝

 ██████╗  ██████╗ ███╗   ██╗████████╗██████╗  ██████╗ ██╗     ██╗     ███████╗██████╗ 
██╔════╝ ██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔═══██╗██║     ██║     ██╔════╝██╔══██╗
██║      ██║   ██║██╔██╗ ██║   ██║   ██████╔╝██║   ██║██║     ██║     █████╗  ██████╔╝
██║      ██║   ██║██║╚██╗██║   ██║   ██╔══██╗██║   ██║██║     ██║     ██╔══╝  ██╔══██╗
╚██████╗ ╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╔╝███████╗███████╗███████╗██║  ██║
 ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Control Voltage (CV) Generator
**Category:** Utility / Hardware Integration / Modular
**Official Manual:** [Image-Line Fruity Voltage Controller Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Voltage%20Controller.htm)

---

## 🎯 What is Fruity Voltage Controller?

Fruity Voltage Controller is a bridge between the digital world of FL Studio and the analog world of **Eurorack** and **CV-equipped hardware**. It converts MIDI notes and automation into fixed DC voltages that can be sent through a **DC-coupled audio interface** to control the pitch, gates, and parameters of analog synthesizers. It is the essential tool for hybrid modular setups.

**Key Capabilities:**
- **CV/Gate Generation:** Outputs pitch voltages and note-on/off trigger signals.
- **8-Channel Support:** Manage up to 8 independent CV streams.
- **DC Coupling Support:** Specifically designed for audio interfaces that can output DC.
- **Scale Calibration:** Supports 1V/Oct and 1.2V/Oct hardware standards.
- **Voltage Range Selection:** Toggle between 5V, 10V, and bipolar ranges.
- **Note-Triggered Voltage:** Translates Piano Roll positions into precise analog voltages.

---

## 🚀 Quick Start Research Guide

### For Modular Users:
1. Read **00-START-HERE.md** (create this first)
2. Review **dc-coupling-requirements.md** (Hardware check)
3. Create **parameter-cheat-sheet.md**
4. Connect your interface to an analog oscillator, load the plugin, and play a note to verify pitch tracking.

### For Hardware Sound Designers:
1. Study **calibrating- pitch-v-octave.md**
2. Review **routing-cv-to-multiple-modules.md**
3. Learn **clock-sync-via-voltage.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Pitch Scale:** 1V/Oct vs 1.2V/Oct.
  - **Voltage Range:** 5V, 10V, +/- 10V.
  - **Output Selector:** Pairing L/R channels.
  - **Trigger/Gate:** Note duration behavior.

- [ ] **dc-coupling-explained.md**
  - Why standard interfaces might filter out the CV signal.
  - List of known compatible interfaces (e.g., MOTU, Expert Sleepers).

#### 02-Data/parameters/
- [ ] **voltage-specs.json**
  `\`\`json
  {
    "plugin_name": "Fruity Voltage Controller",
    "channels": 8,
    "scales": ["1V/Oct", "1.2V/Oct"],
    "output_pairs": 4
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **modular-synth-integration.md**
  - Routing Piano Roll to a Eurorack Voice.
  - Channel 1 (Pitch) -> VCO.
  - Channel 2 (Gate) -> Envelope Generator.

- [ ] **analog-automation-via-vca.md**
  - Using an FL automation clip to drive a hardware VCA.
  - Scaling the voltage range to match the module's input.

#### 03-Workflows/by-context/
- [ ] **hardware-drum-machine-sync.md**
- [ ] **semi-modular-sequencing.md** (e.g., Mother-32).

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **ppq-resolution-and-analog-timing.md**
  - Setting clock resolution for hardware sequencers.

---

## 🔬 Research Framework

### Phase 1: Calibration (Week 1)
**Goal:** In-Tune Analog

**Tasks:**
1. Connect a hardware oscillator
2. Play C4 and C5 in FL Studio
3. Adjust "Pitch Scale" until the hardware stays in tune across octaves
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I prevent damaging hardware with high voltages?
- What is the latency between the Piano Roll and the CV output?

---

## 📊 Plugin Specifications to Document

### Engine
- Number of Output Pairs (4)
- Clock Resolution (2-96 PPQ)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is there no sound? (Fruity Voltage Controller outputs *control data*, not audio. You must route the analog audio *back* into FL Studio via a different input).
2. Why is the pitch drifting? (Check calibration or hardware warm-up time).

---

## 🔗 Cross-Reference with Other Plugins

Fruity Voltage Controller is often used with:
- **MIDI Out** (Alternative hardware control)
- **Fruity Peak Controller** (Modulating CV via internal LFOs)

---

## 📦 File Structure Summary

`\`\`
Fruity Voltage Controller/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── dc-coupling-explained.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── voltage-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── modular-synth-integration.md
│   │   └── analog-automation-via-vca.md
│
└── 04-Reference/
    └── ppq-resolution-and-analog-timing.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Voltage Controller Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Voltage%20Controller.htm)
- [Fruity Voltage Controller Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Voltage_Controller_tutorials.htm)
- [Fruity Voltage Controller Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+voltage+controller+tutorial)

### Community Resources
- [Fruity Voltage Controller Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+voltage+controller&restrict_sr=1)
- [Fruity Voltage Controller User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Voltage Controller Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Control Voltage Fundamentals" - Understanding CV and gate signals
- "Modular Synthesis Integration" - Connecting digital and analog systems
- "DC Coupling in Audio Interfaces" - Hardware requirements for CV output

### Advanced Techniques
- **Calibration Techniques:** Understanding voltage scaling and pitch tracking
- **Multi-Channel Routing:** Managing multiple CV outputs simultaneously
- **Clock Signal Generation:** Creating timing signals for analog sequencers

---

## 📚 In-Depth Technical Analysis

### CV Generation Architecture
Fruity Voltage Controller implements sophisticated control voltage generation:
- **MIDI-to-Voltage Conversion:** Translates MIDI notes to precise DC voltages
- **Gate Signal Generation:** Creates trigger/gate signals for envelope generators
- **Multi-Channel Support:** Handles up to 8 independent CV streams
- **DC Output:** Generates DC-coupled signals for analog equipment
- **Real-time Processing:** Immediate response to MIDI input

### Pitch Scaling System
The plugin supports multiple pitch scaling standards:
- **1V/Oct Standard:** Classic Moog-style scaling (most common)
- **1.2V/Oct Standard:** Buchla-style scaling (some European modules)
- **Calibration Process:** Adjust for precise octave tracking
- **Frequency Mapping:** Converts MIDI note numbers to voltage values
- **Octave Alignment:** Ensures accurate pitch tracking across octaves

### Channel Architecture
The 8-channel system provides independent control:
- **Channel 1-8:** Individual CV outputs for different parameters
- **Pitch Channels:** Dedicated channels for pitch control
- **Gate Channels:** Dedicated channels for trigger signals
- **Parameter Channels:** Dedicated channels for modulation
- **Clock Channels:** Dedicated channels for timing signals

### DC Coupling Requirements
The plugin requires DC-coupled hardware:
- **DC-Coupled Interfaces:** Allow DC voltage to pass through
- **AC-Coupled Interfaces:** Block DC voltage (incompatible)
- **Hardware Compatibility:** Requires DC-coupled audio interfaces
- **Signal Integrity:** Maintains voltage accuracy
- **Safety Considerations:** Proper voltage levels for connected equipment

### Voltage Range Management
The plugin supports multiple voltage ranges:
- **5V Range:** Standard range for many modules
- **10V Range:** Extended range for wider parameter control
- **Bipolar Range:** Positive and negative voltage control
- **Range Calibration:** Adjust for specific module requirements
- **Safety Limits:** Prevents potentially damaging voltage levels

### Signal Processing Chain
The internal architecture processes MIDI to CV:
- **Input Stage:** MIDI note and automation data monitoring
- **Pitch Conversion:** MIDI note to voltage conversion
- **Gate Generation:** Note-on/off to trigger signal conversion
- **Channel Routing:** Directs signals to appropriate outputs
- **Output Stage:** DC voltage generation and monitoring

## 🎛️ Parameter Deep Dive

### Pitch Scale Control
- **Function:** Sets the voltage scaling for pitch tracking
  - Range: 1V/Oct or 1.2V/Oct
  - Effect: Determines how many volts per octave
  - Use for: Calibrating to specific hardware standards
  - Pro tip: 1V/Oct is most common, 1.2V/Oct for some European modules
- **Behavior:**
  - 1V/Oct: Standard Moog-style scaling
  - 1.2V/Oct: Buchla-style scaling
  - Pro tip: Test with known reference to verify calibration
- **Applications:**
  - Moog-style modules: Use 1V/Oct setting
  - Buchla-style modules: Use 1.2V/Oct setting
  - Generic modules: Start with 1V/Oct
  - Calibration: Adjust based on hardware requirements
  - Pro tip: Verify with reference oscillator

### Voltage Range Control
- **Function:** Sets the output voltage range
  - Range: 5V, 10V, or bipolar options
  - Effect: Determines maximum voltage output
  - Use for: Matching module input requirements
  - Pro tip: Check module specifications before setting
- **Behavior:**
  - 5V: 0 to +5V output range
  - 10V: 0 to +10V output range
  - Bipolar: Negative to positive voltage range
  - Pro tip: Use 5V for most applications
- **Applications:**
  - Standard modules: Use 5V range
  - Extended range: Use 10V for wider control
  - Bipolar modules: Use bipolar range for bidirectional control
  - Safety: Match to module specifications
  - Pro tip: Start with 5V and adjust as needed

### Channel Assignment Controls
- **Function:** Assigns CV outputs to specific channels
  - Range: Channel 1-8 assignments
  - Effect: Determines which channel controls which parameter
  - Use for: Organizing multi-module control
  - Pro tip: Plan assignments before connecting hardware
- **Behavior:**
  - Independent channels: Each channel operates separately
  - Pitch channels: Dedicated to pitch control
  - Gate channels: Dedicated to trigger signals
  - Parameter channels: For modulation and control
  - Pro tip: Use consistent assignment scheme
- **Applications:**
  - Pitch control: Assign to VCO pitch inputs
  - Gate control: Assign to envelope generator triggers
  - Modulation: Assign to filter cutoff, etc.
  - Multi-module: Organize for efficient control
  - Pro tip: Document assignments for reference

### Output Pairing Controls
- **Function:** Pairs L/R outputs for stereo interfaces
  - Range: Output pair selection
  - Effect: Determines which interface outputs carry CV
  - Use for: Routing to specific hardware inputs
  - Pro tip: Match to your interface's output configuration
- **Behavior:**
  - Pair 1: Channels 1-2 on outputs 1-2
  - Pair 2: Channels 3-4 on outputs 3-4
  - And so on for all 4 pairs
  - Pro tip: Verify output assignments before connecting
- **Applications:**
  - Stereo interfaces: Use paired outputs
  - Multi-interface: Assign to different interfaces
  - Hardware routing: Match to module input layout
  - Safety: Verify correct connections
  - Pro tip: Test each pair individually

### Gate/Trigger Controls
- **Function:** Manages gate and trigger signal generation
  - Range: Gate length and timing options
  - Effect: Controls envelope generator behavior
  - Use for: Triggering analog envelopes
  - Pro tip: Match gate length to desired envelope behavior
- **Behavior:**
  - Note-on: Generates trigger at note start
  - Note-off: Generates trigger at note end
  - Gate: Maintains voltage during note duration
  - Pro tip: Use for envelope generators and sequencers
- **Applications:**
  - Envelope triggering: Use for ADSR generators
  - Sequencer clock: Use for timing signals
  - Sample & Hold: Use for trigger inputs
  - Clock division: Use for rhythmic patterns
  - Pro tip: Use for any trigger-based modules

## 🎼 Hardware Integration Applications

### Modular Synthesis
Using Voltage Controller for Eurorack integration:

**VCO Pitch Control:**
- **Channel Assignment:** Assign pitch channel to VCO 1V/Oct input
  - Use appropriate voltage range (typically 5V)
  - Calibrate for accurate octave tracking
  - Essential for melodic synthesis
  - Perfect for main oscillators
  - Pro tip: Verify with reference oscillator

- **Calibration Process:** Fine-tune for perfect tracking
  - Play C4 and C5 in Piano Roll
  - Adjust pitch scale until octaves align
  - Essential for accurate pitch tracking
  - Perfect for melodic content
  - Pro tip: Use chromatic scale for verification

- **Multi-Oscillator Control:** Control multiple VCOs simultaneously
  - Assign different channels to different VCOs
  - Use for layered or detuned sounds
  - Essential for complex patches
  - Perfect for rich textures
  - Pro tip: Use detune for chorusing effects

### Envelope Generation
Using Voltage Controller for envelope control:

**ADSR Triggering:**
- **Gate Signal:** Send gate signal to envelope generator
  - Use appropriate gate length for desired envelope
  - Essential for dynamic note articulation
  - Perfect for percussive sounds
  - Pro tip: Match gate timing to musical content

- **Envelope Shaping:** Control envelope parameters via CV
  - Assign channels to attack, decay, sustain parameters
  - Use for dynamic envelope changes
  - Essential for expressive synthesis
  - Perfect for evolving textures
  - Pro tip: Use automation for evolving envelopes

- **Multiple Envelopes:** Control several envelopes simultaneously
  - Assign different channels to different envelope generators
  - Use for complex modulation
  - Essential for sophisticated patches
  - Perfect for evolving sounds
  - Pro tip: Use for complex modulation matrices

### Filter Control
Using Voltage Controller for filter automation:

**Cutoff Modulation:**
- **Filter Tracking:** Send CV to filter cutoff input
  - Use appropriate voltage range for filter
  - Essential for dynamic filter changes
  - Perfect for evolving textures
  - Pro tip: Use for filter sweeps and movement

- **Resonance Control:** Modulate filter resonance via CV
  - Assign channel to resonance input
  - Use for dynamic resonance changes
  - Essential for expressive filtering
  - Perfect for evolving filter characteristics
  - Pro tip: Use with caution to avoid instability

- **Multi-Filter Control:** Control multiple filters simultaneously
  - Assign different channels to different filters
  - Use for complex filtering arrangements
  - Essential for sophisticated patches
  - Perfect for evolving filter landscapes
  - Pro tip: Use for complex filter arrangements

### Creative Applications
Using Voltage Controller for experimental applications:

**Clock Generation:**
- **Sequencer Sync:** Generate clock signals for analog sequencers
  - Use appropriate PPQ resolution for timing
  - Essential for hardware sequencer synchronization
  - Perfect for rhythmic patterns
  - Pro tip: Match PPQ to desired resolution

- **Clock Division:** Create divided clock signals
  - Use automation to create clock divisions
  - Essential for complex rhythmic patterns
  - Perfect for polyrhythmic sequences
  - Pro tip: Use for evolving rhythmic patterns

- **Trigger Sequences:** Create complex trigger patterns
  - Use Piano Roll for precise trigger timing
  - Essential for complex rhythmic sequences
  - Perfect for evolving rhythmic patterns
  - Pro tip: Use for complex rhythmic arrangements

**Modulation Applications:**
- **LFO Simulation:** Use automation for LFO-like effects
  - Create complex modulation patterns
  - Essential for evolving modulation
  - Perfect for complex modulation patterns
  - Pro tip: Use automation for complex modulation

- **Sample & Hold:** Generate random voltages for S&H modules
  - Use random automation patterns
  - Essential for chaotic modulation
  - Perfect for evolving textures
  - Pro tip: Use for chaotic modulation patterns

- **Cross-Modulation:** Create complex modulation networks
  - Use multiple channels for interconnected modulation
  - Essential for sophisticated patches
  - Perfect for evolving complex sounds
  - Pro tip: Use for complex modulation networks

## 🧪 Experimental Techniques

### Advanced CV Applications
Creative uses of Voltage Controller's capabilities:

**Complex Patch Integration:**
- **Multi-Module Control:** Control numerous modules simultaneously
  - Use all 8 channels for comprehensive control
  - Create complex patch arrangements
  - Perfect for sophisticated modular patches
  - Essential for advanced modular synthesis
  - Useful for complex sound design

**Hybrid Sequencing:**
- **Analog-Digital Sequencing:** Combine digital and analog sequencing
  - Use Piano Roll for digital control
  - Use analog sequencers for additional patterns
  - Perfect for complex rhythmic arrangements
  - Essential for hybrid workflows
  - Useful for evolving sequences

**Voltage Sculpting:**
- **Automation Sculpting:** Create complex voltage automation
  - Use detailed automation for evolving voltages
  - Create unique voltage patterns
  - Perfect for evolving voltage landscapes
  - Essential for sophisticated voltage control
  - Useful for complex voltage arrangements

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Complex Automation:** Create detailed voltage automation
  - Use automation for evolving voltage patterns
  - Create unique voltage evolutions
  - Perfect for evolving voltage landscapes
  - Essential for sophisticated voltage control
  - Use for complex voltage arrangements

**Modulation Applications:**
- **Parameter Modulation:** Use external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Stage Processing:**
- **Complex CV Processing:** Multiple processing stages for sophisticated effects
  - Create multi-stage CV effects
  - Apply different processing to different stages
  - Build sophisticated processing chains
  - Perfect for advanced sound design
  - Use for complex processing

## 🎚️ Workflow Optimization

### Hardware Setup Workflows
Efficient approaches to using Voltage Controller for hardware integration:

**Interface Configuration:**
- **DC Coupling Verification:** Ensure interface supports DC coupling
  - Verify interface specifications
  - Test with known DC source
  - Essential for proper CV output
  - Pro tip: Use interfaces known to support DC

- **Output Assignment:** Assign CV outputs to interface channels
  - Plan output assignments before connecting
  - Document assignments for reference
  - Essential for organized control
  - Pro tip: Use consistent assignment scheme

**Calibration Workflows:**
- **Pitch Calibration:** Calibrate for accurate tracking
  - Use reference oscillator for verification
  - Test across multiple octaves
  - Essential for accurate pitch tracking
  - Pro tip: Verify with chromatic scale

- **Voltage Verification:** Verify voltage levels match module requirements
  - Use multimeter to verify voltages
  - Check module specifications
  - Essential for safe operation
  - Pro tip: Verify before connecting expensive modules

### Integration Workflows
Working with other plugins and tools:

**MIDI Integration:**
- **Piano Roll Integration:** Using with Piano Roll for sequencing
  - Map notes to CV outputs
  - Use velocity for additional control
  - Essential for melodic sequencing
  - Pro tip: Use for precise note timing

**Automation Integration:**
- **Parameter Automation:** Using with automation clips
  - Create evolving voltage patterns
  - Use for dynamic parameter changes
  - Essential for evolving control
  - Pro tip: Use for evolving parameter changes

**Analysis Integration:**
- **Scope Monitoring:** Using with oscilloscopes for verification
  - Monitor voltage waveforms
  - Verify timing and amplitude
  - Essential for accurate verification
  - Pro tip: Use for precise voltage verification

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Modular Basslines:** Creating basslines with hardware modules
- **Analog Sequencing:** Using hardware sequencers for patterns
- **Filter Automation:** Controlling analog filters for movement
- **Energy Management:** Using hardware for track energy
- **Build-up Effects:** Creating tension with analog automation

### Hip-Hop and R&B
- **Analog Warmth:** Adding analog character to digital elements
- **Hardware Processing:** Using analog processors for character
- **Filter Control:** Controlling analog filters for tone
- **Mix Enhancement:** Using analog processing for mix clarity
- **Creative Effects:** Adding unique character to elements

### Rock and Metal
- **Analog Guitars:** Processing guitar through analog equipment
- **Hardware Effects:** Using analog effects for character
- **Filter Processing:** Controlling analog filters for tone
- **Mix Enhancement:** Using analog processing for mix clarity
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Modulation:** Creating evolving textures with analog modules
- **Voltage Sculpting:** Using CV for complex sound design
- **Experimental Integration:** Pushing boundaries of analog/digital integration
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### MIDI Processing
Fruity Voltage Controller works with MIDI processing:
- **MIDI Out:** Alternative hardware control method
- **Piano Roll:** Sequencing CV events
- **Step Sequencer:** Creating rhythmic CV patterns
- **MIDI Controllers:** Real-time CV control
- **Automation:** MIDI CC automation of CV parameters

### Effects Integration
Integration with effects plugins:
- **Reverb:** Processing analog-generated sounds
- **Delay:** Creating rhythmic patterns with analog processing
- **Filtering:** Additional frequency processing
- **Modulation:** Adding movement to analog-generated sounds
- **Compression:** Controlling dynamics of analog-generated signals

### Dynamics Processing
Integration with dynamics processors:
- **Parallel Compression:** Combining with parallel compression
- **Upward Compression:** Using with upward compression
- **Limiting:** Combining with limiting for control
- **Gate/Expander:** Using with noise gates
- **De-esser:** Combining for vocal processing

## 📖 Historical Context

### Development Background
Fruity Voltage Controller was developed as a CV bridge tool:
- Created to connect digital and analog synthesis worlds
- Designed for Eurorack and modular integration
- Developed with hardware enthusiasts in mind
- Intended to complement traditional software synthesis

### Evolution Through FL Studio Versions
- Initially introduced with basic CV generation
- Enhanced with multi-channel support
- Improved with better calibration tools
- Expanded with more sophisticated algorithms

### Impact on Music Production
Fruity Voltage Controller has influenced music production by:
- Providing accessible modular integration
- Enabling hybrid digital/analog workflows
- Facilitating creative hardware experimentation
- Supporting various musical genres with flexible control

## 🧠 Advanced Processing Techniques

### CV Generation Mastery
Advanced techniques for CV generation:
- **Calibration Precision:** Understanding voltage accuracy requirements
- **Multi-Channel Management:** Organizing complex CV routing
- **Timing Synchronization:** Aligning digital and analog timing
- **Voltage Safety:** Managing voltage levels for equipment safety
- **Signal Integrity:** Maintaining voltage accuracy

### Modular Integration
Advanced modular integration techniques:
- **Patch Planning:** Organizing complex modular patches
- **Signal Flow:** Managing complex CV signal routing
- **Timing Networks:** Creating synchronized analog/digital systems
- **Safety Protocols:** Protecting equipment from voltage damage
- **Optimization:** Maximizing efficiency of CV control

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique analog textures
- **Atmospheric Processing:** Building ambient analog effects
- **Rhythmic Effects:** Creating rhythmic analog patterns
- **Spatial Manipulation:** Creating immersive analog environments
- **Experimental Processing:** Pushing boundaries of analog/digital integration

## 📊 Performance Considerations

### CPU Usage
Managing Voltage Controller's impact on system performance:
- **Low CPU Load:** Minimal processing overhead for CV generation
- **Real-Time Performance:** Optimized for live performance
- **Instance Count:** Single instance typically sufficient
- **MIDI Processing:** Minimal impact from MIDI handling
- **Optimization Strategies:** Techniques for performance

### Hardware Safety
Maintaining safety during CV generation:
- **Voltage Verification:** Ensuring safe voltage levels
- **Equipment Protection:** Protecting modules from damage
- **Signal Integrity:** Maintaining voltage accuracy
- **Connection Safety:** Proper connection procedures
- **Monitoring:** Watching for potential issues

### System Integration
Optimizing Voltage Controller within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring interface compatibility
- **Latency Management:** Minimal CV latency

## 🛠️ Troubleshooting Common Issues

### Hardware Problems
- **No CV Output:** Verify DC coupling and connections
- **Incorrect Pitch:** Recalibrate pitch scaling
- **Phase Issues:** Check polarity and connections
- **Excessive Voltage:** Verify voltage range settings
- **Timing Issues:** Check PPQ resolution settings

### Technical Issues
- **High CPU Usage:** Voltage Controller has minimal CPU usage
- **Latency Issues:** Check interface buffer settings
- **Clipping:** Verify voltage levels and module specifications
- **Artifacts:** Check connections and grounding
- **Compatibility:** Verify DC coupling support

### Creative Issues
- **Unmusical Results:** Verify calibration and voltage ranges
- **Lack of Character:** Use appropriate voltage ranges for modules
- **Poor Integration:** Verify proper connections and calibrations
- **Overpowering:** Reduce voltage ranges or use attenuators
- **Lack of Control:** Use proper calibration and voltage ranges

## 🎚️ Advanced Configuration

### Custom Hardware Setups
Creating and managing custom hardware configurations:
- **Modular Patches:** Optimized for specific modular systems
- **Analog Workstations:** Configured for semi-modular systems
- **Creative Setups:** Set up for sound design applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Interface Setup
Using multiple interfaces effectively:
- **Channel Expansion:** Using multiple interfaces for more outputs
- **Safety Management:** Managing voltage safety across interfaces
- **Timing Synchronization:** Synchronizing across interfaces
- **Creative Applications:** Combining different interfaces

### Integration Configurations
Optimizing for different integration scenarios:
- **Modular Integration:** Optimizing for Eurorack systems
- **Semi-Modular:** Optimizing for semi-modular synthesizers
- **Hardware Integration:** External hardware integration
- **DAW Integration:** Optimizing for FL Studio workflow

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Voltage Controller techniques
- **Reddit Groups:** Sharing modular integration techniques and setups
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced modular integration
- **Written Guides:** In-depth articles on CV integration
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Patch Libraries:** Websites hosting modular patch configurations
- **Technique Sharing:** Platforms for sharing integration methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Sequence a hardware modular voice with 100% accurate pitch tracking over 3 octaves
- [ ] Successfully output a clock signal to sync an external analog sequencer
- [ ] Explain the requirement for DC-coupled hardware
- [ ] Demonstrate multi-channel control using a single instance
- [ ] Calibrate pitch scaling for accurate octave tracking
- [ ] Safely connect and control multiple analog modules simultaneously
- [ ] Generate complex voltage patterns using automation
- [ ] Troubleshoot CV output and hardware connection issues effectively
- [ ] Integrate Voltage Controller into efficient modular workflows
- [ ] Create sophisticated hybrid digital/analog patches
- [ ] Design custom voltage control schemes for specific modules
- [ ] Implement safe voltage practices for equipment protection
- [ ] Combine CV control with other modulation sources
- [ ] Create genre-specific CV control presets for efficient workflow
- [ ] Optimize CV settings for minimal latency and maximum accuracy
- [ ] Use Voltage Controller for creative sound design applications
- [ ] Set up advanced multi-module control systems
- [ ] Apply Voltage Controller in live performance scenarios
- [ ] Create experimental CV control effects with non-standard modules
- [ ] Integrate Voltage Controller with other automation tools seamlessly

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Voltage Controller

## The 60-Second Mental Model
Fruity Voltage Controller is a **digital-to-analog converter** for control data. It takes notes and automation from FL Studio and turns them into electrical pulses (Control Voltage / CV) that your analog synthesizer modules can "understand." [SRC: IL-MAN]

## Purpose & Identity
*   **Identity:** A bridge for hybrid music production.
*   **Where it fits:** It is an Effect plugin that should be loaded on a Mixer Track whose physical output is connected to an analog module via a **DC-coupled audio interface**.

## Hip-Hop / R&B Context
*   **Analog Warmth:** Use it to play your Moog, Mother-32, or Eurorack gear directly from the FL Studio Piano Roll.
*   **Hybrid Drum Sync:** Send a CV clock to an analog drum machine to keep it perfectly in time with your FL project.
*   **Modern "Modular" Texture:** Create the unstable, drifting synth leads found in modern trap (Mike Dean style) by modulating real hardware filters with FL automation.

## When To Use
*   When you own **modular or semi-modular hardware**.
*   When you want to use FL Studio's Piano Roll and Automation Clips to control real electricity.
*   When you need more precise pitch tracking for hardware than "MIDI to CV" converters often provide.

## When NOT To Use
*   **If you don't have a DC-coupled interface:** Most standard interfaces (like the Scarlett 2i2) have filters that block DC voltage. This plugin will not work with them. [SRC: IL-KB]
*   **Software-only setups:** If you don't own hardware modules, this plugin does nothing for you.
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Voltage Controller

## UI Tour
1.  **Output Selector:** Choose which interface output pairs (e.g., Output 3-4) the CV will be sent to.
2.  **Calibration Knobs (Pitch/Offset):** Used to tune the 1V/Octave tracking so the hardware plays in tune with FL's Piano Roll.
3.  **Range Switch:** Sets the voltage range (5V, 10V, or Bipolar). Match this to your hardware's input specs.
4.  **Channel Sliders (1-8):** Eight independent streams of voltage.
5.  **Gate/Trigger Modes:** Determines if the output is a "hold" voltage (Gate) or a "blip" (Trigger). [SRC: IL-MAN]

## Signal Flow
1.  **MIDI Input:** The plugin receives notes from the Piano Roll or MIDI input.
2.  **Translation:** It converts MIDI Note #1 (C5) into a specific voltage level (e.g., 2.0V).
3.  **Scaling:** The voltage is scaled based on the "Pitch Scale" calibration.
4.  **DAC (Digital to Analog):** The voltage is sent as an audio-like signal to your interface's output.
5.  **Hardware Input:** The physical cable carries this electricity to the hardware VCO or VCF.

## Things Beginners Misunderstand
*   **"No Audio":** You will not hear sound coming *out* of this plugin. It only outputs control voltage. You must record the hardware's audio back into a different Mixer Track.
*   **DC Filtering:** If you use a standard audio cable and a non-DC-coupled interface, the voltage will "droop" to zero immediately. You need the right hardware. [SRC: REPUTABLE]
*   **Safety:** Sending +10V to a module only expecting +5V can sometimes behave unexpectedly. Always start at the lowest range.
```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Fruity Voltage Controller: Core Techniques and Best Practices

## Essential Techniques

### 1. Calibration for Perfect Pitch

Critical for accurate hardware tracking [SRC: IL-MAN].

**Step-by-Step:**
1. Connect multimeter to CV output
2. Set Mod Source to "Pitch"
3. Play C4 in Piano Roll
4. Note voltage (should be 4.00V for 1V/Oct)
5. Play C5 in Piano Roll
6. Should read 5.00V (exactly 1V higher)
7. If not, adjust Pitch Scale setting
8. Repeat until octaves track perfectly

**Pro Tip:** Let hardware warm up 10-15 minutes before calibration.

### 2. Gate vs Trigger Selection

| Source | Behavior | Best For |
|--------|----------|----------|
| **Gate** | Voltage for full note duration | Envelope generators (ADSR) |
| **Trigger** | Short impulse on note-on | Sample & hold, percussion |

**Hip-Hop Application:**
- **808 bass:** Gate (sustained notes)
- **Hi-hats:** Trigger (short percussion)
- **Pads:** Gate (full ADSR)

### 3. Velocity to VCA Mapping

**Setup:**
- Mod Source: Velocity
- Output: Hardware VCA or VCA-equipped filter
- Result: Dynamic amplitude from FL velocity

**Application:**
`\`\`
Piano Roll velocity: 100 ──► 80% voltage ──► Louder sound
Piano Roll velocity: 50 ──► 40% voltage ──► Quieter sound
`\`\`

### 4. Multi-Timbral Control (Note Colors)

**Concept:** Different note colors control different hardware voices.

**Setup:**
1. Set Mod Source to "Note color 1" (Left channel)
2. Set Mod Source to "Note color 2" (Right channel)
3. In Piano Roll, assign different colors to different notes
4. Each color controls independent CV output

**Application:** Layering multiple analog voices with one plugin instance.

### 5. Clock Sync for Hardware Sequencers

**Setup:**
- Mod Source: Clock
- PPQ: Match hardware sequencer requirements (commonly 24 or 16)
- Connect to sequencer clock input

**Result:** Hardware sequencer advances in perfect sync with FL tempo.

### 6. Automation Offset Control

**Setup:**
- Mod Source: None (0V)
- Offset: Automated via clip
- Polarity: Unipolar or Bipolar

**Application:**
- Filter sweeps: Ramp offset from 0V to 5V
- Wah effects: Sine wave automation on offset
- Build-ups: Exponential ramp on filter CV

### 7. Scale Multiplier Tricks

**Formula:** Channel Output = Scale × (Mod Source + Offset)

**Applications:**
- **Inverted control:** Scale = -1.0 (response reversed)
- **Reduced range:** Scale = 0.5 (half the voltage)
- **Expanded range:** Scale = 2.0 (double voltage)

### 8. 4-Output Multi-Voice Setup

**Efficient Method:**
`\`\`
Track 10: Voltage Controller (Main outputs)
  → Voice 1 control

Track 11: Out 2 outputs
  → Voice 2 control

Track 12: Out 3 outputs
  → Voice 3 control

Track 13: Out 4 outputs
  → Voice 4 control
`\`\`

**Use Automap:** Settings → Automap outputs = On [SRC: IL-MAN]

### 9. Safe Voltage Ranges

**Never exceed module specifications:**
- Most Eurorack: -5V to +5V or 0-5V
- Some modules: Accept -10V to +10V
- Check manufacturer specs before connecting

**Safe Starting Point:** 5V range for all outputs [SRC: IL-MAN]

### 10. Polarity Selection

| Polarity | Use Case |
|----------|----------|
| **Unipolar** | Gates, triggers, positive modulation |
| **Bipolar** | Pitch bend, LFO-style modulation, audio-rate modulation |

---

## What to Listen For / Watch

### During Calibration
- [ ] C4-C5 = exactly 1V difference (for 1V/Oct)
- [ ] All octaves track correctly
- [ ] No pitch drift over time
- [ ] Glitch-free note transitions

### During Sequencing
- [ ] Tight timing (no latency issues)
- [ ] Gates trigger reliably
- [ ] No missed triggers
- [ ] Smooth CV transitions

### During Modulation
- [ ] No stepping (increase automation resolution if needed)
- [ ] No voltage spikes
- [ ] Smooth sweeps
- [ ] Predictable response

---

## Common Pitfalls and Fixes

### Pitfall 1: No CV Output

**Cause:** AC-coupled interface blocking DC [SRC: IL-MAN].

**Fix:** Use DC-coupled audio interface (MOTU, Expert Sleepers).

**Test:** Multimeter should read voltage on output.

### Pitfall 2: Pitch Drifting

**Causes:**
- Hardware not warmed up
- Wrong scale (1.2V/Oct selected for 1V/Oct hardware)
- Calibration drift

**Fixes:**
- Warm up 15 minutes
- Verify scale setting [SRC: IL-MAN]
- Recalibrate

### Pitfall 3: Gates Not Triggering

**Causes:**
- Wrong Mod Source selected
- Voltage too low
- Gate polarity wrong

**Fixes:**
- Confirm Mod Source = Gate
- Increase Offset to 2-3V
- Set Polarity = Unipolar

### Pitfall 4: Stepped/Clock-like Modulation

**Cause:** Automation resolution too low.

**Fix:** Use higher resolution automation or shorter control points.

### Pitfall 5: Multiple Voices Out of Tune

**Cause:** Each voice needs calibration.

**Fix:** Calibrate each Voltage Controller instance separately.

---

## Safety Rules

### Hardware Protection
1. **Never exceed input voltage specs**
2. **Always start with 5V range**
3. **Use offset to test before full modulation**
4. **Check patch twice before powering on**

### Signal Integrity
1. **Use quality cables**
2. **Keep CV cables away from power cables**
3. **Ground loops: Use same power source for computer and modular**
4. **Monitor with multimeter when in doubt**

---

**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Voltage Controller

## Moody (Dark, Analog, Drifting)
*   **Production Levers:**
    *   **Micro-Tuning:** Use the **Offset** knob to slightly detune the hardware VCO against digital layers.
    *   **LFO Drift:** Use a **Fruity Peak Controller** LFO to modulate a CV channel controlling a hardware filter's cutoff. Keep it slow and shallow.
*   **Don't Do This:** Avoid perfect pitch tracking; a little "drift" is the soul of moody analog.

## Upbeat (Rhythmic, Punchy, Modular)
*   **Production Levers:**
    *   **Clock Sync:** Send a steady 1/16th note Trigger signal to a hardware sequencer or drum voice.
    *   **Gate Length:** Set gates to be very short (10ms) to create "pluck" textures on analog envelopes.
*   **Don't Do This:** Don't let gates overlap, or you'll lose the rhythmic "bounce."

## Psychedelic (Experimental, Evolving)
*   **Production Levers:**
    *   **Chaos Control:** Map the **Pitch Scale** to an automation clip and sweep it wildly to create non-linear pitch bends that software synths can't easily replicate.
    *   **Cross-Modulation:** Send CV Channel 1 to hardware VCO Pitch and CV Channel 2 to Filter Resonance.
*   **Don't Do This:** Don't stick to the 1V/Oct standard. Break the scale for trippy results.

## Jazzy (Organic, Responsive)
*   **Production Levers:**
    *   **Velocity Mapping:** Map FL Piano Roll **Velocity** to a CV Channel controlling a hardware VCA. This makes the analog synth respond to your playing dynamics.
    *   **Soft Gates:** Use longer attack times on the hardware envelope to simulate woodwind or brass swells.
*   **Don't Do This:** Avoid harsh, square-wave triggers.

## Vibey (R&B, Smooth, Warm)
*   **Production Levers:**
    *   **Macro Control:** Link multiple CV channels to one FL control knob. One turn shifts the Filter, Resonance, and Drive on your hardware simultaneously.
    *   **PWM Control:** Send a slow, smooth FL automation clip to the Pulse Width input of your analog synth.
*   **Don't Do This:** Avoid fast, jerky movements. Keep the voltage changes "liquid."
```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Fruity Voltage Controller: 5-Minute Quickstart

## Prerequisites

- DC-coupled audio interface (MOTU, Expert Sleepers, etc.)
- External analog hardware (Eurorack or semi-modular)
- Cables to connect interface outputs to hardware
- Multimeter (recommended for calibration)

## Minute 1: Verify DC Coupling

### Test Your Interface
1. Load **Fruity Voltage Controller** on any mixer track
2. Set **Mod Source** to **None (0 V)**
3. Set **Offset** to **+5V**
4. Set **Polarity** to **Unipolar**
5. Connect multimeter to interface output
6. **Should read ~5V DC** (not 0V)

**If 0V:** Your interface is AC-coupled. You need a DC-coupled interface.

## Minute 2: Basic Pitch Setup

### Configure Pitch Output
1. **Left channel** settings:
   - Mod Source: **Pitch**
   - Scale: **1.0**
   - Offset: **0.0**
   - Polarity: **Unipolar**
2. Connect Left output to hardware oscillator **1V/Oct input**
3. Connect hardware audio output to audio interface input

## Minute 3: Basic Gate Setup

### Configure Gate Output
1. **Right channel** settings:
   - Mod Source: **Gate**
   - Scale: **1.0**
   - Offset: **+2V**
   - Polarity: **Unipolar**
2. Connect Right output to **envelope generator gate input**
3. Connect envelope output to hardware **VCA or filter**

## Minute 4: Calibrate Pitch

### One-Minute Calibration
1. Play **C4** in Piano Roll
2. Hardware should play **C**
3. Play **C5** in Piano Roll
4. Should be exactly one octave higher
5. **If not:** Adjust **Settings → Pitch scale** [SRC: IL-MAN]
   - Try 1.2V/Oct if 1V/Oct doesn't track

## Minute 5: Play a Sequence

### Test Sequence
1. Enter notes in Piano Roll:
   - C3 (long note for 808-style)
   - E3, G3, F3 (melodic movement)
2. Should hear hardware responding
3. Adjust **note lengths** to control gate duration
4. Adjust **velocity** if mapped to VCA

## Starting Settings (Copy This)

`\`\`
Global Settings:
  Pitch scale: 1V/Oct
  Voltage range: 5V
  Clock resolution: 24 PPQ

Left Channel (Pitch):
  Mod Source: Pitch
  Offset: 0.0
  Scale: 1.0
  Polarity: Unipolar

Right Channel (Gate):
  Mod Source: Gate
  Offset: +2.0
  Scale: 1.0
  Polarity: Unipolar
`\`\`

## Common Quick Fixes

| Problem | 10-Second Fix |
|---------|---------------|
| No sound from hardware | Check audio return to FL, not just CV out |
| Pitch wrong | Check Pitch Scale (1V vs 1.2V) [SRC: IL-MAN] |
| No gate trigger | Increase Offset to +3V, check Mod Source = Gate |
| Clock not syncing | Match PPQ to hardware (24 is standard) |
| Multiple outputs dead | Enable tracks 11, 12, 13 for Out 2-4 [SRC: IL-MAN] |

## Next Steps

1. **Read:** Common Mistakes (avoid pitfalls)
2. **Try:** Velocity to VCA mapping for dynamics
3. **Explore:** Automation on Offset for filter sweeps
4. **Calibrate:** Fine-tune for perfect pitch tracking

---

**Time:** 5 minutes
**Success Metric:** Hardware plays sequences from FL Piano Roll
**Source:** IL-MAN
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Fruity Voltage Controller: Common Mistakes

## Hardware Setup Mistakes

### #1: Using AC-Coupled Interface

**Mistake:** Standard audio interface blocks DC voltage.

**Symptom:** Multimeter reads 0V on output.

**Reality:** Most interfaces filter out DC. [SRC: IL-MAN]

**Fix:** Use DC-coupled interface (MOTU, Expert Sleepers, specific RME models).

### #2: No Audio Return Path

**Mistake:** Expecting to hear sound directly from Voltage Controller.

**Reality:** Plugin outputs CV (control), not audio. [SRC: IL-MAN]

**Correct Setup:**
`\`\`
Voltage Controller ──► Hardware ──► Audio Output ──► FL Input
      (CV out)           (sound)       (audio)         (record)
`\`\`

### #3: Wrong Voltage Range

**Mistake:** Using 10V range for 5V-max module.

**Risk:** Can damage sensitive modules.

**Fix:** Start with 5V range [SRC: IL-MAN], check module specs.

### #4: Bipolar When Unipolar Needed

**Mistake:** Using bipolar for gates/triggers.

**Symptom:** Negative voltage confuses envelope generator.

**Fix:** Use unipolar for gates (0V to +5V).

## Configuration Mistakes

### #5: Wrong Pitch Scale

**Mistake:** Using 1V/Oct for Buchla hardware (needs 1.2V/Oct).

**Symptom:** Pitch tracking drifts across octaves.

**Fix:** Match scale to hardware standard [SRC: IL-MAN].

### #6: Not Calibrating

**Mistake:** Assuming perfect calibration out of box.

**Symptom:** Pitch slightly off across range.

**Fix:** Always calibrate C4-C5 before recording.

### #7: Gate vs Trigger Confusion

**Mistake:** Using Trigger for sustained notes.

**Symptom:** Envelope releases immediately (no sustain).

**Fix:** Use Gate for sustained notes, Trigger only for percussion.

### #8: Multiple Outputs Not Routed

**Mistake:** Assuming Out 2-4 work automatically.

**Symptom:** No output on secondary channels.

**Fix:** Enable mixer tracks 11, 12, 13 or use Automap [SRC: IL-MAN].

## Creative Mistakes

### #9: Stepped Modulation

**Mistake:** Low-resolution automation causing stepped CV.

**Symptom:** Filter sweeps sound quantized/robotic.

**Fix:** Use high-resolution automation curves.

### #10: Static Values

**Mistake:** No automation = boring.

**Fix:** Automate Offset for movement, even subtle (±0.5V).

### #11: Ignoring Velocity

**Mistake:** Not using velocity to VCA mapping.

**Fix:** Map velocity to hardware VCA for dynamic expression.

### #12: Clock Too Fast

**Mistake:** 96 PPQ for simple analog sequencer.

**Symptom:** Sequencer advances too quickly.

**Fix:** Match PPQ to hardware requirements (often 16 or 24).

## Safety Mistakes

### #13: Exceeding Voltage Specs

**Risk:** Damaging expensive modules.

**Prevention:** Always check module input voltage limits.

### #14: No Multimeter Verification

**Risk:** Sending wrong voltages blind.

**Fix:** Always verify with multimeter before connecting new modules.

### #15: Hot-Swapping Cables

**Risk:** Short circuits, pops, module damage.

**Fix:** Power down before re-patching.

## Quick Fix Reference

| Symptom | Most Likely Fix |
|---------|----------------|
| No CV output | Get DC-coupled interface |
| No sound | Route hardware audio back to FL |
| Wrong pitch | Calibrate or check scale [SRC: IL-MAN] |
| Gate doesn't trigger | Increase offset, verify Mod Source |
| Multiple outs dead | Enable tracks 11-13 |
| Stepped modulation | Increase automation resolution |

---

**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Fruity Voltage Controller: Best Settings & Starting Points

## Universal Starting Template

`\`\`
Global Settings:
  Pitch scale: 1V/Oct
  Voltage range: 5V
  Clock resolution: 24 PPQ
  Automap outputs: Off

Left Channel (Pitch):
  Mod Source: Pitch
  Offset: 0.0
  Scale: 1.0
  Polarity: Unipolar

Right Channel (Gate):
  Mod Source: Gate
  Offset: +2.0
  Scale: 1.0
  Polarity: Unipolar
`\`\`

## Application-Specific Settings

### Analog Bass (808-Style)

`\`\`
Left: Pitch (1V/Oct)
Right: Gate (for envelope)
Notes: Long duration in Piano Roll (sustained)
Post-processing: Hardware filter for "pluck"
Result: Classic analog sub bass
`\`\`

### Lead Sequencing

`\`\`
Left: Pitch
Right: Gate
Velocity: Mapped to filter cutoff for expression
Scale: 1.0
Result: Expressive analog lead
`\`\`

### Pad Chords

`\`\`
Left: Pitch
Right: Gate (long duration)
Mod X: Mapped to filter for movement
Automation: Slow filter sweeps on Mod X
Result: Evolving analog pads
`\`\`

### Drum Machine Sync

`\`\`
Mod Source: Clock
PPQ: 24 (MIDI standard) or 16 (analog)
Connect to: Drum machine clock input
Result: Hardware drums synced to FL
`\`\`

## Hardware-Specific Notes

### Eurorack Modular
- Pitch scale: 1V/Oct [SRC: IL-MAN]
- Range: 5V
- Gates: 5V positive
- Calibrate carefully per module

### Moog Semi-Modular (Mother-32, etc.)
- Pitch scale: 1V/Oct [SRC: IL-MAN]
- Range: 5V
- Use KB (keyboard) input for pitch
- Gate input for envelope

### Buchla Systems
- Pitch scale: 1.2V/Oct [SRC: IL-MAN]
- Range: Check module specs (often wider)
- Different trigger standards

## Voltage Range Guidelines

| Range | Use Case | Caution |
|-------|----------|---------|
| **5V** | Standard, safe for most modules | Safe default |
| **10V** | Extended range | Check module specs |
| **±10V** | Bipolar modulation | Some modules can't handle negative |

## Mod Source Quick Guide

| Source | Voltage Range | Best For |
|--------|---------------|----------|
| **Pitch** | 0-5V (varies by note) | Oscillator pitch |
| **Gate** | 0-5V (note duration) | Envelopes |
| **Trigger** | Short impulse | Percussion, S&H |
| **Velocity** | 0-5V (by velocity) | Dynamic VCA |
| **Clock** | Pulses at PPQ rate | Sequencers |
| **None+Offset** | Manual control | Filter sweeps |

## Copy-Paste Settings

### Basic Voice (Copy This)
`\`\`yaml
Pitch Channel:
  Mod Source: Pitch
  Scale: 1.0
  Offset: 0.0
  Polarity: Unipolar

Gate Channel:
  Mod Source: Gate
  Scale: 1.0
  Offset: 2.0
  Polarity: Unipolar

Settings:
  Pitch Scale: 1V/Oct
  Voltage Range: 5V
`\`\`

### Modulation Setup (Copy This)
`\`\`yaml
Filter CV:
  Mod Source: None (0V)
  Scale: 1.0
  Offset: Automated 0-5V
  Polarity: Unipolar

VCA Control:
  Mod Source: Velocity
  Scale: 1.0
  Offset: 0.0
  Polarity: Unipolar
`\`\`

---

**Source:** IL-MAN
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Fruity Voltage Controller: Vibe Starting Points - Moody

## Vibe Definition
Slow, evolving, atmospheric control—perfect for ambient analog textures and dark bass.

## Core Template

`\`\`
Global:
  Pitch Scale: 1V/Oct
  Voltage Range: 5V

Left Channel:
  Mod Source: Pitch
  Offset: 0.0
  Scale: 1.0

Right Channel:
  Mod Source: Gate (long duration)
  Offset: 2.0

Modulation Channels (Out 2-4):
  Mod Source: Automation on Offset
  Slow ramps: 4-8 bars
  Target: Filter cutoff, PWM
`\`\`

## Variations

### Variation A: Drone Texture
**Setup:**
- Long held notes (8+ bars)
- Filter cutoff automated slowly (0.1Hz)
- PWM subtle wobble
- Result: Living, breathing drone

### Variation B: Dark Bass
**Setup:**
- Slow attack envelope on hardware
- Filter barely open
- Long decay (4s+)
- Result: Moody sub bass

### Variation C: Evolving Pad
**Setup:**
- Chord progression, slow changes
- Filter opens gradually over 8 bars
- Velocity low for intimacy
- Result: Atmospheric bed

## Routing

`\`\`
Voltage Controller ──► Analog VCO ──► Filter ──► VCA ──► FL Input
                         ↓
                    Envelope (slow)
                         ↓
                    Filter cutoff (automated)
`\`\`

## Automation Patterns

### Slow Filter Sweep
`\`\`
Automation: Ramp from 0V to 5V over 8 bars
Result: Gradual opening of filter
`\`\`

### Breathing PWM
`\`\`
Automation: Sine wave, 0.05Hz, ±0.5V
Result: Subtle pulse width movement
`\`\`

## Pitfalls

| Don't | Why | Instead |
|-------|-----|---------|
| Fast gates | Breaks atmosphere | Long gate durations |
| High PPQ clocks | Too rhythmic | No clock or 2-4 PPQ |
| Stepped modulation | Robotic | Smooth automation curves |
| Bipolar polarity | Unnecessary | Unipolar 0-5V |

---

**Vibe:** Moody
**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Fruity Voltage Controller: Vibe Starting Points - Other Vibes

## Upbeat

**Purpose:** Fast, rhythmic, tight control for sequencing and drums.

`\`\`
Settings:
  Left: Pitch (tight tracking)
  Right: Gate (5V, unipolar)
  Clock: 24 PPQ for sync

Techniques:
  - 16th note bass sequences
  - Short gates for percussion
  - Velocity to VCA for dynamics
  - Tight timing, no lag
`\`\`

**Hip-Hop Application:**
- Analog 808 bass sequencing
- Drum machine triggering
- Fast lead sequences
- Rhythmic modulation

## Psychedelic

**Purpose:** Chaotic, extreme, unpredictable modulation.

`\`\`
Settings:
  Scale: ±2.0 or more
  Bipolar: On
  Random automation on offset
  Multiple targets modulated

Techniques:
  - Random filter sweeps
  - Chaotic pitch modulation
  - Sample & hold triggers
  - Extreme ranges
`\`\`

**Hip-Hop Application:**
- Experimental breaks
- Glitch transitions
- Alien textures
- Sound design

## Jazzy

**Purpose:** Smooth, musical, expressive control.

`\`\`
Settings:
  Pitch Scale: Precise 1V/Oct
  Velocity: Mapped to expression
  Automation: Gentle curves
  Humanized timing

Techniques:
  - Legato pitch sequences
  - Velocity-based filter opening
  - Subtle vibrato (Mod X/Y)
  - Swing timing
`\`\`

**Hip-Hop Application:**
- Neo-soul bass
- Jazzy lead lines
- Expressive pads
- Vintage textures

## Vibey

**Purpose:** Groove-aligned, living modulation.

`\`\`
Settings:
  Gate synced to kick
  16 PPQ clock
  Sidechain-style automation
  Dynamic velocity

Techniques:
  - Filter ducking with kick
  - 16th note modulation
  - Bass following pocket
  - Breathing pad movement
`\`\`

**Hip-Hop Application:**
- Modern R&B bass
- Groove-aligned drums
- Living textures
- Alt-hip-hop atmosphere

## Quick Comparison

| Vibe | Speed | Range | Target | Key Setting |
|------|-------|-------|--------|-------------|
| Moody | Slow | 0-5V | Filter | Long gates |
| Upbeat | Fast | 0-5V | Envelope | 24 PPQ |
| Psychedelic | Variable | ±10V | Everything | Extreme scale |
| Jazzy | Musical | 0-5V | Expression | Velocity |
| Vibey | Groove | 0-5V | Filter/VCA | Synced |

---

**Vibes:** Upbeat, Psychedelic, Jazzy, Vibey
**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Voltage Controller

| Parameter | Type | Description | Vibe Impact | Mix Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Pitch Scale** | Knob | Calibrates Volts per Octave. | **Moody** (for detuning). | Pitch accuracy. |
| **Offset** | Knob | Fine-tunes the base voltage. | **Vibey** (centering modulation). | Initial pitch/cutoff. |
| **Range Switch** | Choice | 5V / 10V / Bipolar. | **Psychedelic** (high range). | Input sensitivity. |
| **Out 1-4 (Pairs)** | Select | Physical interface output routing. | N/A | Signal path. |
| **Gate/Trigger** | Mode | Pulse duration behavior. | **Upbeat** (Trigger), **Vibey** (Gate). | Envelopes/Timing. |
| **Voltage Sliders** | Slider | Manual voltage level control. | **Performance** (Manual sweeps). | Fixed DC level. |

## Mix Impact Tags
*   **Pitch Accuracy:** Critical for ensuring hardware layers don't clash with digital ones.
*   **Modulation Depth:** Higher voltage ranges (10V) provide more dramatic filter sweeps.
*   **Timing:** PPQ settings in the reference docs affect how "tight" the hardware sync feels.
```

---

## FILE: 02-Data\presets\00_Preset_Taxonomy.md

```markdown
# Fruity Voltage Controller: Preset Taxonomy

## Preset Categories

Unlike audio plugins, Voltage Controller "presets" are complete configuration states for specific hardware setups.

### By Hardware Type

| Category | Target Hardware | Key Settings |
|----------|----------------|--------------|
| **Eurorack Voice** | Oscillator+Envelope | 1V/Oct, 5V, Pitch/Gate |
| **Drum Machine** | Analog drum machine | Clock, 24 PPQ |
| **Semi-Modular** | Mother-32, 0-Coast | 1V/Oct, specific routings |
| **Buchla** | Buchla modules | 1.2V/Oct |
| **Multi-Voice** | Polyphonic control | Note colors, multiple outs |

### By Application

| Preset | Purpose | Outputs Used |
|--------|---------|--------------|
| **Basic Mono** | Single voice | Main L/R |
| **Bass+Mod** | Bass with filter CV | Main + Out 2 |
| **Drum Sync** | Clock only | One channel |
| **4-Voice Poly** | 4-voice control | All 4 output pairs |
| **Complex Mod** | Many CV destinations | All outputs |

## Named Presets

### 1. "Eurorack Basic"
`\`\`
Pitch Scale: 1V/Oct
Voltage Range: 5V

Left: Pitch (oscillator)
Right: Gate (envelope)
`\`\`

### 2. "Moog Mother-32"
`\`\`
Pitch Scale: 1V/Oct
Left: Pitch → KB input
Right: Gate → Gate input
`\`\`

### 3. "Analog Drums"
`\`\`
Clock: 24 PPQ
Connect to: Drum machine clock in
Result: Tight sync
`\`\`

### 4. "3-Voice Stack"
`\`\`
Main: Voice 1
Out 2: Voice 2
Out 3: Voice 3
Out 4: Clock
`\`\`

### 5. "Filter Sweep"
`\`\`
Left: Pitch
Right: Gate
Out 2 L: Automation → Filter cutoff
Out 2 R: Velocity → VCA
`\`\`

---

**Source:** IL-MAN
**Last Updated:** 2026-02-03

```

---

## FILE: 02-Data\presets\01_Preset_Notes_And_Use.md

```markdown
# Fruity Voltage Controller: Preset Notes and Use

## Detailed Preset Documentation

### Preset 1: "Eurorack Basic"

**Purpose:** Standard monophonic voice control

**Setup:**
1. Connect Left output to VCO 1V/Oct input
2. Connect Right output to envelope gate
3. Set envelope to control VCA and/or filter
4. Play notes in Piano Roll

**Settings:**
`\`\`
Pitch Scale: 1V/Oct
Voltage Range: 5V

Left:
  Mod Source: Pitch
  Offset: 0.0
  Scale: 1.0

Right:
  Mod Source: Gate
  Offset: +2.0
  Scale: 1.0
`\`\`

**When to Use:**
- Any Eurorack oscillator
- Moog, Doepfer, Intellijel, etc.
- Standard 1V/Oct systems

---

### Preset 2: "Moog Mother-32"

**Purpose:** Optimized for Mother-32 semi-modular

**Setup:**
1. Left → Mother-32 KB (pitch)
2. Right → Mother-32 Gate (envelope trigger)
3. Use Mother-32's internal envelope and VCA

**Settings:**
`\`\`
Same as Eurorack Basic
`\`\`

**Notes:**
- Mother-32 uses 1V/Oct standard
- Gate input expects 5V positive
- No additional modules needed

---

### Preset 3: "Analog Drums"

**Purpose:** Sync analog drum machine to FL tempo

**Setup:**
1. Set one channel to Clock
2. Set PPQ to match drum machine
3. Connect to drum machine clock input

**Settings:**
`\`\`
Mod Source: Clock
PPQ: 24 (MIDI) or 16 (common analog)
`\`\`

**Common Drum Machines:**
- TR-808/909: 24 PPQ or 12 PPQ
- Modular sequencers: 16 PPQ
- Vintage: Check manual

---

### Preset 4: "3-Voice Stack"

**Purpose:** Control 3 analog voices from FL

**Setup:**
`\`\`
Track 10 (Main): Voice 1
Track 11 (Out 2): Voice 2
Track 12 (Out 3): Voice 3
Track 13 (Out 4): Clock/Modulation
`\`\`

**Settings per voice:**
`\`\`
Each:
  Left: Pitch
  Right: Gate
`\`\`

**Notes:**
- Each voice needs calibration
- Use Automap for quick setup [SRC: IL-MAN]
- Layer voices for thickness

---

### Preset 5: "Filter Sweep"

**Purpose:** Pitch + gate + filter automation

**Setup:**
`\`\`
Main L: Pitch → VCO
Main R: Gate → EG
Out 2 L: None(0V) + automated offset → Filter cutoff
Out 2 R: Velocity → VCA
`\`\`

**Automation:**
- Create automation clip for Out 2 L offset
- Draw filter sweeps
- Link to song sections

---

## Quick Selection Guide

| I Have... | Use Preset | Notes |
|-----------|-----------|-------|
| Eurorack oscillator | Eurorack Basic | Calibrate first |
| Mother-32 | Moog Mother-32 | Plug and play |
| TR-808/909 | Analog Drums | 24 PPQ |
| Multiple voices | 3-Voice Stack | Calibrate each |
| Want filter sweeps | Filter Sweep | Add automation |

---

**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03

```

---

## FILE: 02-Data\presets\02_Vibe_Preset_Shortlist.md

```markdown
# Fruity Voltage Controller: Vibe Preset Shortlist

## Quick Presets by Vibe

### Moody

#### MP-01: "Dark Drone"
`\`\`
Main:
  L: Pitch
  R: Gate (long duration)
Out 2:
  L: Automation (slow 8-bar ramp) → Filter
  R: Mod X → PWM
Result: Atmospheric, evolving texture
`\`\`

#### MP-02: "Sub Bass"
`\`\`
Main:
  L: Pitch (low octave)
  R: Gate (long)
Settings: Slow hardware envelope
Result: Dark sustained bass
`\`\`

### Upbeat

#### UP-01: "Analog 808"
`\`\`
Main:
  L: Pitch
  R: Gate (short-medium)
Out 2:
  L: Velocity → Filter (more velocity = brighter)
  R: Velocity → VCA
Result: Punchy sequenced bass
`\`\`

#### UP-02: "Drum Sync"
`\`\`
Any channel:
  Mod Source: Clock
  PPQ: 24
Result: Tight analog drum machine sync
`\`\`

### Psychedelic

#### PP-01: "Chaos Control"
`\`\`
All channels:
  Random automation on offset
  Bipolar enabled
  Extreme scale (±2.0)
Result: Unpredictable modulation
`\`\`

#### PP-02: "Sample & Hold"
`\`\`
Trigger channel:
  Mod Source: Trigger
  Connect to: S&H module
Other:
  Mod Source: None + noise
Result: Random voltage generation
`\`\`

### Jazzy

#### JP-01: "Smooth Lead"
`\`\`
Main:
  L: Pitch (precise 1V/Oct)
  R: Gate
Out 2:
  L: Velocity → Filter (gentle)
  R: Mod X → Vibrato
Result: Expressive lead
`\`\`

#### JP-02: "Neo-Soul Bass"
`\`\`
Main:
  L: Pitch
  R: Gate (legato timing)
Velocity: 50-100 range
Result: Dynamic, groovy bass
`\`\`

### Vibey

#### VP-01: "Groove Bass"
`\`\`
Main:
  L: Pitch
  R: Gate (synced)
Out 2:
  L: Automation (sidechain-style) → Filter
Result: Ducking with the pocket
`\`\`

#### VP-02: "Living Pad"
`\`\`
Main:
  L: Pitch
  R: Gate (long)
Out 2:
  L: Slow LFO automation → Filter
  R: Subtle Mod X → PWM
Result: Breathing texture
`\`\`

## One-Line Settings

**Moodiest:** Slow automation, no clock, filter targets
**Most Psychedelic:** Random values, bipolar, extreme scale
**Jazziest:** Velocity mapping, precise tuning, expression
**Vibey-ist:** Synced gates, sidechain automation, groove

---

**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03

```

---

## FILE: 02-Data\rules\00_Do_Dont_Rules.md

```markdown
# Fruity Voltage Controller: Do / Don't Rules

## DO: Best Practices

### Hardware Setup

✅ **DO: Verify DC coupling first**
- Test with multimeter before connecting expensive modules
- 5V offset should read ~5V, not 0V [SRC: IL-MAN]

✅ **DO: Start with 5V range**
- Safe for most modules
- Increase only if needed and verified [SRC: IL-MAN]

✅ **DO: Calibrate before recording**
- C4-C5 should be exactly 1V apart (1V/Oct)
- Let hardware warm up 15 minutes

✅ **DO: Use quality cables**
- Shielded cables for CV
- Keep away from power cables

✅ **DO: Document your patches**
- Write down what goes where
- Save as FL project template

### Configuration

✅ **DO: Use Gate for sustained notes**
- Triggers are for percussion only
- Gate follows note duration [SRC: IL-MAN]

✅ **DO: Automate for movement**
- Even subtle offset changes add life
- Use smooth curves, not stepped

✅ **DO: Match pitch scale to hardware**
- 1V/Oct for most Eurorack
- 1.2V/Oct for Buchla [SRC: IL-MAN]

✅ **DO: Use velocity for dynamics**
- Map to VCA or filter
- Adds expression

### Safety

✅ **DO: Check module specs**
- Never exceed input voltage limits
- When in doubt, start low

✅ **DO: Power down to repatch**
- Avoid hot-swapping
- Prevents shorts and pops

✅ **DO: Monitor with multimeter**
- Check voltages before connecting new modules
- Verify calibration regularly

---

## DON'T: Common Pitfalls

### Hardware

❌ **DON'T: Use AC-coupled interface**
- Won't pass DC voltage
- Test with multimeter first [SRC: IL-MAN]

❌ **DON'T: Exceed voltage specs**
- Can damage modules
- Start with 5V range always

❌ **DON'T: Forget audio return path**
- CV out → Hardware → Audio in [SRC: IL-MAN]
- Don't expect sound from Voltage Controller

❌ **DON'T: Hot-swap cables**
- Power down first
- Prevents damage

### Configuration

❌ **DON'T: Skip calibration**
- Pitch will drift
- Always calibrate C4-C5

❌ **DON'T: Use wrong pitch scale**
- 1.2V/Oct on 1V/Oct hardware = out of tune
- Check hardware manual [SRC: IL-MAN]

❌ **DON'T: Use Trigger for sustained notes**
- Envelope releases immediately
- Use Gate for ADSR

❌ **DON'T: Enable outputs without routing**
- Out 2-4 need tracks 11-13 enabled
- Use Automap [SRC: IL-MAN]

### Creative

❌ **DON'T: Static values only**
- Boring without automation
- Add subtle movement

❌ **DON'T: Stepped automation**
- Sounds robotic
- Use smooth curves

❌ **DON'T: Ignore clock PPQ**
- Wrong PPQ = wrong tempo
- Match to hardware specs

---

## Quick Reference

| Situation | DO This | DON'T Do This |
|-----------|---------|---------------|
| First setup | Test DC coupling with multimeter | Assume interface works |
| New module | Check voltage specs | Send unknown voltages |
| Pitch issues | Calibrate C4-C5 | Ignore drift |
| No gate | Check Mod Source = Gate | Use Trigger |
| Boring sound | Add automation | Leave static |
| Multiple outs | Enable tracks 11-13 | Forget routing |

---

**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03

```

---

## FILE: 02-Data\rules\01_Troubleshooting_Matrix.md

```markdown
# Fruity Voltage Controller: Troubleshooting Matrix

## Problem → Diagnosis → Solution

### No CV Output

| Check | Action | Expected |
|-------|--------|----------|
| Interface | Test with multimeter (None + 5V offset) | Should read ~5V DC |
| Plugin | Verify ON button enabled | LED/checkbox on |
| Routing | Check mixer track routing | Signal reaching outputs |

**If 0V on multimeter:** Interface is AC-coupled. Need DC-coupled interface [SRC: IL-MAN].

---

### Wrong Pitch / Drifting

| Symptom | Cause | Solution |
|---------|-------|----------|
| Flat/sharp octaves | Wrong pitch scale | Switch 1V/Oct ↔ 1.2V/Oct [SRC: IL-MAN] |
| Drift over time | Hardware not warmed up | Wait 15 minutes, recalibrate |
| Overall detuned | Calibration off | Recalibrate C4-C5 |
| Glitchy jumps | Stepped automation | Use higher resolution |

**Calibration Procedure:**
1. Play C4, note voltage (should be 4.00V)
2. Play C5, should be 5.00V (exactly +1V)
3. Adjust Pitch Scale until perfect
4. Check multiple octaves

---

### Gate Not Triggering

| Symptom | Cause | Solution |
|---------|-------|----------|
| No envelope | Wrong Mod Source | Set to Gate, not Trigger [SRC: IL-MAN] |
| Weak trigger | Offset too low | Increase to +3V |
| Negative gate | Bipolar polarity | Switch to Unipolar |
| Double triggers | Note overlap | Shorten note or use legato mode |

---

### Multiple Outputs Dead

| Symptom | Cause | Solution |
|---------|-------|----------|
| Out 2-4 silent | Tracks not enabled | Enable mixer tracks 11-13 |
| No routing | Output assignment | Use Automap [SRC: IL-MAN] |
| Wrong track | Offset math | Out 2 = Track 11, Out 3 = 12, etc. |

---

### Clock Out of Sync

| Symptom | Cause | Solution |
|---------|-------|----------|
| Too fast | PPQ too high | Reduce to 16 or 24 |
| Too slow | PPQ too low | Increase to match hardware |
| Wonky timing | FL tempo drift | Lock to tempo, check BPM |
| No clock | Wrong Mod Source | Set to Clock |

**Common PPQ Values:**
- 24 PPQ: MIDI standard, most drum machines
- 16 PPQ: Analog sequencers
- 4 PPQ: Slow divisions

---

### Modulation Stepped/Robotic

| Symptom | Cause | Solution |
|---------|-------|----------|
| Stepped filter | Low automation resolution | Increase event density |
| Quantized sound | Snap to grid | Disable snap or use finer grid |
| Zipper noise | Too few points | Add more control points |

---

## Specific Scenarios

### "Worked yesterday, not today"

**Checklist:**
- [ ] Hardware powered on?
- [ ] Cables still connected?
- [ ] Calibration drifted (recalibrate)?
- [ ] Interface settings changed?
- [ ] Different FL project?

### "Pitch correct, but wrong octave"

**Fix:**
- Voltage Controller sends correct pitch
- Hardware oscillator may be in wrong octave range
- Check hardware octave switch/button

### "Notes cut off early"

**Fix:**
- Check Gate length in Piano Roll
- Extend note duration
- Or use Trigger for percussion only

---

## Emergency Reset

If completely messed up:

1. **Reset plugin:** Right-click → Init
2. **Start over:**
   `\`\`
   Pitch Scale: 1V/Oct
   Voltage Range: 5V
   
   Left: Pitch, Offset 0, Scale 1.0
   Right: Gate, Offset 2.0, Scale 1.0
   `\`\`
3. **Recalibrate**
4. **Reconnect hardware step by step**

---

**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Voltage Controller)

## Rule 1: The "Analog 808" Lock
*   If using an analog module for sub-bass/808s, ensure your **Pitch Scale** is calibrated perfectly at the low octaves (C1-C3). Even 10 cents of drift will ruin the mix's low-end foundation.

## Rule 2: DC Safety First
*   **Rule:** Never plug your interface output directly into your speakers while Voltage Controller is active. The high DC voltage can damage traditional speaker drivers if a "pop" occurs. Use a mixer or attenuator. [SRC: IL-KB]

## Rule 3: Latency Compensation
*   Analog signals take time to travel out and back in. 
*   **Rule:** Always use **Automatic Plugin Delay Compensation (PDC)** in FL Studio. If the hardware sounds "behind," use the **Track Latency** offset in the Mixer.

## Rule 4: Automation "Stepping"
*   **Rule:** When controlling analog filters, ensure your FL Automation Clips are set to high resolution. Low-resolution automation can cause "zipper noise" because the analog filter is fast enough to hear the digital steps.

## Rule 5: Gain Staging the Return
*   Since the sound comes back through an Input, treat it like a vocal recording. Use a **Fruity Limiter** on the input channel to catch any analog feedback spikes. [SRC: REPUTABLE]
```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Workflow: Quick Result - First CV Setup

## Goal
Get from zero to sequencing hardware in 10 minutes.

## Prerequisites
- DC-coupled audio interface
- Hardware synth/module with 1V/Oct input
- Multimeter
- Cables

## Minute 1-2: Verify DC Coupling
1. Load Voltage Controller on any track
2. Set: None(0V), Offset +5V
3. Multimeter on output: should read ~5V

## Minute 3-4: Basic Connections
1. Left output → Hardware 1V/Oct input
2. Right output → Hardware gate/trigger
3. Hardware audio output → Audio interface input

## Minute 5-6: Calibration
1. Play C4 in Piano Roll
2. Adjust hardware to play C
3. Play C5
4. Should be exactly one octave higher
5. If not, adjust Pitch Scale (1V ↔ 1.2V)

## Minute 7-8: Gate Setup
1. Set Right channel: Mod Source = Gate
2. Set Offset: +2V
3. Play note in Piano Roll
4. Hardware envelope should trigger

## Minute 9-10: First Sequence
1. Enter simple melody: C3, E3, G3, F3
2. Adjust note lengths
3. Listen to hardware response
4. Success!

## Starting Settings
`\`\`
Global: 1V/Oct, 5V range
Left: Pitch, 0 offset, 1.0 scale
Right: Gate, +2 offset, 1.0 scale
`\`\`

## Verification
- [ ] Pitch tracks across octaves
- [ ] Gates trigger reliably
- [ ] Sound returns to FL
- [ ] Can record to Edison

---

**Time:** 10 minutes
**Success:** Hardware responds to FL sequences
**Source:** IL-MAN
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\00_Modular_Synth_Integration.md

```markdown
# Goal: Modular Synth Integration (Fruity Voltage Controller)

## Routing Context
1.  **PC:** FL Studio Piano Roll.
2.  **Audio Interface:** DC-Coupled Output (e.g., Output 3).
3.  **Hardware:** Eurorack Oscillator (VCO) Pitch Input.
4.  **Hardware Return:** VCO Output -> Interface Input 1 -> FL Mixer Track "Hardware In".

## Step-by-Step Setup
1.  Open **Fruity Voltage Controller**.
2.  Set **Out Pair** to the output connected to your VCO.
3.  Load a Tuner (e.g., **GTune** or **Wave Candy**) on the "Hardware In" track.
4.  In the Piano Roll, play **C4**. Use the **Offset** knob until the tuner shows exactly C.
5.  Play **C5**. Use the **Pitch Scale** knob until the tuner shows exactly C.
6.  Repeat until both octaves are perfectly in tune. [SRC: IL-MAN]

## Variations
*   **Dual Oscillator:** Use Channel 1 for VCO 1 and Channel 2 for VCO 2. Detune them slightly in hardware for a massive bass sound.
*   **Filter Tracking:** Send the same CV to your Filter Cutoff so the filter "opens" as you play higher notes.

## Pitfalls
*   **No DC Coupling:** If the tuner shows the pitch "dropping" as soon as you hit a note, your interface is AC-coupled and won't work.

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Modulation_And_Control.md

```markdown
# Workflow: Modulation and Control

## Goal
Use Voltage Controller for complex modulation beyond basic pitch/gate.

## Advanced Modulation Techniques

### Technique 1: Filter Automation

**Setup:**
`\`\`
Voltage Controller (Out 2)
  L: None(0V) + automated offset
     ↓
Hardware filter cutoff CV input
`\`\`

**Execution:**
1. Create automation clip for offset
2. Draw filter sweeps (0-5V range)
3. Filter opens/closes with automation

**Applications:**
- Build-up sweeps
- Breakdown filters
- Wub-wub bass effects

---

### Technique 2: Velocity to VCA

**Setup:**
`\`\`
Right channel or Out 2
  Mod Source: Velocity
  Scale: 1.0
  Offset: 0.0
     ↓
Hardware VCA or filter CV
`\`\`

**Result:** Harder velocity = louder/brighter sound

---

### Technique 3: Multi-Parameter Control

**4-Output Setup:**
`\`\`
Main:    Pitch + Gate (voice control)
Out 2:   Filter cutoff + Resonance
Out 3:   VCA level + PWM
Out 4:   Clock + Manual offset
`\`\`

**Benefit:** Total hardware control from FL.

---

### Technique 4: Clock Synchronization

**Setup:**
- Mod Source: Clock
- PPQ: Match hardware (24 for most)
- Connect to hardware sequencer clock input

**Result:** Hardware sequencers advance with FL tempo.

---

## Macro Control Workflows

### Macro 1: Performance Filter
**One knob controls:**
- Cutoff (Out 2 L)
- Resonance (Out 2 R)
- Slight pitch wobble (Main R offset)

**Setup:** Link multiple parameters to one automation clip.

---

## Vibe Applications

### Moody: Slow Filter Drone
- 8-bar ramp on filter cutoff
- Slow PWM modulation
- Minimal note changes

### Upbeat: Rhythmic Gating
- 16th note sequences
- Velocity-based dynamics
- Gate follows kick pattern

### Psychedelic: Chaos Modulation
- Random automation on all offsets
- Bipolar, extreme scales
- Multiple simultaneous modulations

---

**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\02_Goal_Hardware_Integration.md

```markdown
# Workflow: Hardware Integration

## Goal
Seamlessly integrate analog hardware into FL Studio workflow.

## Hybrid Production Chain

`\`\`
FL STUDIO (Digital)
  ↓
Piano Roll / Automation (sequencing)
  ↓
Voltage Controller (CV generation)
  ↓
DC-Coupled Interface (voltage output)
  ↓
HARDWARE (Analog)
  ↓
Synthesizer / Effects (sound generation)
  ↓
Audio Interface Input (back to digital)
  ↓
FL STUDIO (Recording / Mixing)
  ↓
Effects / Processing / Mastering
`\`\`

## Setup by Hardware Type

### Eurorack Modular
1. Voltage Controller L → VCO 1V/Oct
2. Voltage Controller R → Envelope gate
3. Audio out → Audio interface input

### Semi-Modular (Mother-32, etc.)
1. L → KB (pitch)
2. R → Gate (envelope trigger)
3. Audio out → Interface

### Drum Machine
1. Clock output → Drum machine clock in
2. Drum audio → Interface

---

## Recording Workflow

### Step 1: Sequence
- Use Piano Roll in FL
- Voltage Controller sends CV
- Hardware plays parts

### Step 2: Record
- Edison or Playlist recording
- Capture hardware audio

### Step 3: Process
- Apply FL effects
- Chop/manipulate as audio
- Mix with other tracks

### Step 4: Keep or Re-record
- Keep if perfect
- Re-sequence if needed
- MIDI stays editable

---

## Multi-Channel Efficiency

### 4-Voice Setup
`\`\`
Track 10: Voice 1 (Main)
Track 11: Voice 2 (Out 2)
Track 12: Voice 3 (Out 3)
Track 13: Voice 4 (Out 4)
`\`\`

**Benefit:** Layer multiple analog voices from one plugin instance.

---

**Source:** IL-MAN
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\02_Goal_Modulation_And_Control.md

```markdown
# Workflow: Macro Performance Mapping (Voltage Controller)

## The Concept
Control three different hardware parameters (e.g., Filter, Resonance, and Drive) with a single knob in FL Studio.

## Setup
*   **Channel 1:** Connected to Hardware Filter Cutoff.
*   **Channel 2:** Connected to Hardware Resonance.
*   **Channel 3:** Connected to Hardware VCA Drive.

## Step-by-Step
1.  Open a **Fruity Control Surface** and add a Large Knob.
2.  Right-click **Channel 1 Slider** in Voltage Controller -> **Link to Controller**.
3.  Select the Control Surface Knob.
4.  Repeat for **Channel 2** and **Channel 3**.
5.  **Tweak:** In the Mapping Formula, use `Input*0.5` for Resonance to prevent it from screaming, and `Input*1.2` for the Filter to give it more range.

## Vibe Check
*   **Psychedelic:** This macro allows you to create complex, liquid morphs that feel like the hardware is "breathing."
*   **Upbeat:** Record yourself performing this knob move live during a build-up.

## Automation Idea
*   Automate the Macro Knob using an **Envelope Controller** triggered by the snare drum for rhythmic hardware shifts.

```

---

## FILE: 03-Workflows\by-goal\12_Vibe_Psychedelic.md

```markdown
# Vibe: Psychedelic Chaos (Voltage Controller)

## The Concept
Using high-speed CV modulation to create "FM-like" textures and non-linear movement in analog hardware.

## Setup
*   **Modulator:** A fast FL Automation Clip (set to 1/32 notes).
*   **Target:** Hardware VCO Pitch or Filter Cutoff.

## Settings
*   **Range:** Set to **10V** or **Bipolar**.
*   **Scale:** Over-calibrate it (set it higher than 1V/Oct) to make the pitch jumps wider than musical intervals.

## The Secret Sauce
*   Turn on **Invert** if your hardware supports it, or rapidly toggle the **Gate/Trigger** mode via automation to create rhythmic "clicks" and "pops" in the analog signal.

## What to Listen For
*   "Gurgling" or "Screaming" textures. The analog hardware will respond to the digital speed by creating unique harmonic sidebands.

## Automation
*   Link a **Fruity Peak Controller** (LFO) to the **Offset** knob to make the whole sound "wander" in and out of tune.

```

---

## FILE: 03-Workflows\by-instrument\00_Bass.md

```markdown
# Workflow: Analog Bass (Hip-Hop)

## Concept
Sequence hardware mono-synth for trap-style 808 bass.

## Setup

### FL Studio
`\`\`
Piano Roll: Long sustained notes (C1-C2)
Velocity: 80-127 for dynamics
Automation: Optional filter sweeps
`\`\`

### Voltage Controller
`\`\`
Left: Pitch (1V/Oct)
Right: Gate (long duration)
Out 2 (optional): Velocity → Filter
`\`\`

### Hardware Synth
`\`\`
Oscillator: Saw or square
Filter: Low-pass, medium resonance
Envelope: Fast attack (1-5ms), medium decay (200-400ms)
Output: Audio interface input
`\`\`

## Step-by-Step

### Step 1: Hardware Setup
1. Connect CV outputs to synth
2. Set synth to 1V/Oct mode
3. Set filter to track moderately

### Step 2: Calibration
1. Play C2, tune synth
2. Play C3, verify octave
3. Adjust Pitch Scale if needed

### Step 3: Sequencing
1. Enter 808-style pattern in Piano Roll
2. Long note durations (sustained)
3. Vary velocity for dynamics

### Step 4: Record
1. Record hardware output to Edison
2. Trim and process as needed
3. Mix with drums

## Sound Character
- Analog warmth
- Hardware envelope snap
- True analog saturation
- Weight in the lows

## Variations

### Variation A: Filtered 808
- Velocity → Filter cutoff
- Harder hits = brighter

### Variation B: Saturated
- Drive hardware filter
- Record distortion
- Use parallel with dry

### Variation C: Moving Bass
- Automation on filter
- Evolving over time

---

**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-instrument\01_Leads.md

```markdown
# Workflow: Analog Lead

## Concept
Sequence hardware synth for melodic leads with character.

## Setup

### Voltage Controller
`\`\`
Left: Pitch
Right: Gate
Out 2 L: Mod X → Filter cutoff
Out 2 R: Velocity → VCA
`\`\`

### Hardware Synth
`\`\`
Oscillator: Saw + Square mix
Filter: Low-pass, slight resonance
Envelope: Fast attack, medium decay/sustain
Mod: Mod wheel opens filter
`\`\`

## Step-by-Step

### Step 1: Tuning
1. Calibrate pitch (C4-C5)
2. Set Mod X to filter cutoff
3. Test Mod X response

### Step 2: Sequencing
1. Melodic phrases in Piano Roll
2. Mod X automation for expression
3. Velocity variation for dynamics

### Step 3: Expression
1. Real-time Mod X recording
2. Filter sweeps on long notes
3. Velocity accents on key notes

## Techniques

### Legato Playing
- Overlapping notes in Piano Roll
- Hardware envelope stays open
- Smooth pitch slides

### Staccato Playing
- Short notes
- Percussive envelope
- Rhythmic patterns

### Expressive Filter
- Mod X = filter cutoff
- Record filter performance
- Dynamic timbre changes

---

**Source:** IL-MAN
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-instrument\02_Pads.md

```markdown
# Workflow: Analog Pads

## Concept
Layer multiple analog voices for rich pad textures.

## Multi-Voice Setup

### 3-Voice Polyphony
`\`\`
Track 10 (Main): Voice 1
Track 11 (Out 2): Voice 2
Track 12 (Out 3): Voice 3
`\`\`

Each:
`\`\`
Left: Pitch
Right: Gate (long duration)
`\`\`

### Chord Voicing
`\`\`
Piano Roll chords trigger all 3 voices
Voice 1: Root
Voice 2: Third
Voice 3: Fifth (or Seventh)
`\`\`

## Sound Design

### Per Voice
`\`\`
Oscillator: Slight detune between voices
Filter: Individual filter per voice
Envelope: Slow attack (500ms+), long release
`\`\`

### Collective
`\`\`
Slight detuning: Chorus effect
Individual envelopes: Texture
Stereo spread: Wide image
`\`\`

## Recording Strategy

### Step 1: Sequence Chords
- Long note durations
- Slow chord changes
- Slight timing variations

### Step 2: Record to Audio
- Capture each voice
- Or mix hardware outputs first
- Record stereo sum

### Step 3: Process in FL
- Heavy reverb
- Compression for sustain
- EQ for clarity

## Variations

### Moody Pad
- Slow filter sweeps
- Dark oscillator waveforms
- Long, evolving

### Bright Pad
- Sawtooth oscillators
- Filter slightly open
- Airy, present

### Moving Pad
- LFO on PWM
- Slight pitch drift
- Living, breathing

---

**Source:** IL-MAN
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-instrument\03_Drum_Sync.md

```markdown
# Workflow: Drum Machine Sync

## Concept
Sync analog drum machine to FL Studio tempo.

## Setup

### Voltage Controller
`\`\`
Mod Source: Clock
PPQ: 24 (MIDI standard) or 16 (analog)
Connect to: Drum machine clock input
`\`\`

### Drum Machine
`\`\`
Clock mode: External
Start/Stop: Via FL transport
Audio: Back to FL for mixing
`\`\`

## PPQ Selection

| Hardware | PPQ | Notes |
|----------|-----|-------|
| TR-808/909 | 24 or 12 | Check sync mode |
| Modular seq | 16 | Common analog standard |
| Vintage | Varies | Check manual |

## Integration

### Step 1: Clock Connection
1. Voltage Controller clock output
2. To drum machine clock input
3. Audio from drum machine to FL

### Step 2: Transport Control
- Start FL playback
- Drum machine advances with tempo
- Stop FL → drum stops

### Step 3: Mixing
- Drum machine on dedicated track
- Apply FL effects (EQ, compression)
- Mix with software drums

## Advanced: Hybrid Drums

### Layering
`\`\`
FL Drums: Hi-hats, percussion
Hardware: Kick, snare (analog punch)
`\`\`

### Processing
1. Record hardware drums to audio
2. Slice in Slicex
3. Mix with FL drums
4. Apply parallel compression

---

**Source:** IL-MAN
**Last Updated:** 2026-02-03

```

---

## FILE: 04-Reference\00_Combined_Reference.md

```markdown
# Fruity Voltage Controller: Reference Files

## Source Log

**Primary Sources:**
- [SRC: IL-MAN] Image-Line Official Manual: https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Voltage%20Controller.htm

**Unverified:**
- Exact voltage ranges per parameter
- Specific module compatibility lists
- Detailed PPQ timing across all hardware

## Official Links

**Manual:** https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Voltage%20Controller.htm
**FL Studio Main:** https://www.image-line.com
**DC-Coupled Interfaces:** Check MOTU, Expert Sleepers specifications

## Coverage Checklist

### Completed
- [x] 01-Learning/Concepts (4 files)
- [x] 01-Learning/Quick-Reference (5 files)
- [x] 02-Data/parameters (2 files)
- [x] 02-Data/presets (3 files)
- [x] 02-Data/rules (3 files)
- [x] 03-Workflows/by-goal (3 files)
- [x] 03-Workflows/by-instrument (4 files)
- [x] 04-Reference (3 files)

**Total:** 27 files created
**Note:** Adjusted for controller plugin (fewer instrument workflows needed)

## Genre Style Board

### Hip-Hop Applications
- **Analog 808:** Bass sequencing via CV
- **Drum Sync:** Hardware drum machines
- **Sample Source:** Analog textures to record
- **Vibe Creation:** Slow modulation for atmosphere

### R&B Applications
- **Pad Layers:** Multi-voice analog chords
- **Lead Lines:** Expressive hardware leads
- **Texture:** Analog warmth in background

---

**Source:** IL-MAN
**Last Updated:** 2026-02-03

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Voltage Controller

## Official Links
*   **Manual:** [Fruity Voltage Controller Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Voltage%20Controller.htm)
*   **KB:** [DC-Coupled Interface Requirements](https://support.image-line.com/action/knowledgebase?ans=627)

## Source Log
1.  **[SRC: IL-MAN]:** Official Manual. Used for calibration steps, UI definitions, and channel mapping.
2.  **[SRC: REPUTABLE]:** Expert Sleepers (Silent Way). While a competitor, their documentation is the gold standard for "DC-Coupling" logic used in this file.
3.  **[SRC: REPUTABLE]:** Mylar Melodies (Modular for Beginners). Used for the "Macro Mapping" and "Performance Recording" workflow concepts.

## Coverage Checklist
- [x] DC-Coupling Requirements
- [x] Calibration Workflow (1V/Oct)
- [x] Macro Mapping Setup
- [x] 5 Vibe Targets
- [x] Safety Rules (DC Protection)

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Voltage Controller (Analog Hybrid)

## Vibe 1: The "Mike Dean" Synth Drift
*   **Sound:** Unstable, heavy, heroic analog leads.
*   **Key Move:** Small, slow LFO on the CV Offset to keep the hardware pitch moving.

## Vibe 2: The "Modular Trap" Percussion
*   **Sound:** Clicky, sharp, metallic drum sounds.
*   **Key Move:** Use **Trigger Mode** with 0ms Release to fire analog drum modules.

## Vibe 3: The "Tame Impala" Psychedelic Sweep
*   **Sound:** Liquid, resonant filter sweeps.
*   **Key Move:** Multi-channel macro linking Filter Cutoff and Resonance together.

## Vibe 4: The "Lo-Fi" Analog Grit
*   **Sound:** Warm, slightly out-of-tune textures.
*   **Key Move:** Scale the voltage down to 0.9V/Oct to make the hardware play slightly flat as it goes higher.

```

---

