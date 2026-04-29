# MIDI Out - Hardware & Plugin Controller

```
███╗   ███╗██╗██████╗ ██╗     ██████╗ ██╗   ██╗████████╗
████╗ ████║██║██╔══██╗██║    ██╔═══██╗██║   ██║╚══██╔══╝
██╔████╔██║██║██║  ██║██║    ██║   ██║██║   ██║   ██║   
██║╚██╔╝██║██║██║  ██║██║    ██║   ██║██║   ██║   ██║   
██║ ╚═╝ ██║██║██████╔╝██║    ╚██████╔╝╚██████╔╝   ██║   
╚═╝     ╚═╝╚═╝╚═════╝ ╚═╝     ╚═════╝  ╚═════╝    ╚═╝   
```

**Plugin Type:** Internal Controller / MIDI Bridge
**Category:** Controller / Hardware Integration
**Official Manual:** [Image-Line MIDI Out Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/MIDI%20Out.htm)

---

## 🎯 What is MIDI Out?

MIDI Out is a specialized generator plugin that transmits MIDI data rather than audio. It is the primary bridge for controlling **external hardware** (synths, drum machines) and **internal VST plugins**. It features 8 pages of assignable knobs that can be linked to any MIDI Continuous Controller (CC), allowing you to automate hardware directly from the FL Studio Piano Roll or Playlist.

**Key Capabilities:**
- **External Hardware Control:** Send notes and CC data to physical instruments.
- **Internal VST Control:** Map hidden plugin parameters to automatable knobs.
- **MIDI Port & Channel Support:** 16 channels and 256 unique ports for complex setups.
- **Assignable Controllers:** 72 total knobs (8 pages of 9) for custom MIDI mapping.
- **Master Sync Transmission:** Send transport (Start/Stop) to external gear.
- **MIDI File Conduit:** Acts as the destination for imported standard MIDI files.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **midi-port-vs-channel.md**
3. Create **parameter-cheat-sheet.md**
4. Set up an external synth (if available) or an internal VST, match the Port #, and play a note.

### For Hardware Users:
1. Study **hardware-synth-setup-guide.md**
2. Review **automating-external-cc.md**
3. Learn **midi-clock-sync-settings.md**

### For Patcher/Power Users:
1. Study **controlling-vst-hidden-parameters.md**
2. Review **building-custom-midi-dashboards.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Port:** Destination ID.
  - **Channel:** 1-16.
  - **Bank/Patch:** Program change selectors.
  - **Knob Configuration:** Right-click -> Configure.

- [ ] **midi-port-vs-channel.md**
  - Why Ports are for "Wires" and Channels are for "Instruments."
  - FL Studio's internal Port numbering system.

#### 02-Data/parameters/
- [ ] **standard-cc-list.json**
  - Common MIDI CCs (CC 1: Mod Wheel, CC 7: Volume, CC 10: Pan, CC 74: Filter Cutoff).

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **external-synth-integration.md**
  - Step 1: Matching FL Output Port to MIDI Out plugin Port.
  - Step 2: Routing hardware audio back into FL (Mixer track).
  - Step 3: Dealing with Latency (Manual offset).

- [ ] **automating-vst-parameters.md**
  - Using MIDI Out to control a VST that doesn't natively "Link to Controller" easily.
  - Mapping a MIDI Out knob to a CC # expected by the VST.

- [ ] **custom-midi-dashboard.md**
  - Labeling all 9 knobs on Page 1 for a specific hardware synth (e.g., Korg Minilogue).

#### 03-Workflows/by-context/
- [ ] **legacy-midi-file-audition.md**
- [ ] **multitimbral-vst-setup.md** (e.g., Kontakt).

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **latency-offset-calculations.md**
  - How to calculate the ms delay between MIDI Out and Audio In.

---

## 🔬 Research Framework

### Phase 1: The Bridge (Week 1)
**Goal:** Successful Playback

**Tasks:**
1. Connect a VST (like Sylenth or Massive)
2. Set its Input Port to 5
3. Load MIDI Out, set its Port to 5
4. Play notes and verify sound
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Does MIDI Out generate sound? (No).
- How many knobs per page? (9).

### Phase 2: CC Mapping (Week 2)
**Goal:** Automation

**Tasks:**
1. Configure a MIDI Out knob to CC #1 (Mod Wheel)
2. Verify it moves the target plugin's mod wheel
3. Record knob movements into the Piano Roll
4. Create standard-cc-list.json

---

## 📊 Plugin Specifications to Document

### Engine
- Max Ports (256)
- Max Channels (16)
- Controller Pages (8)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is my hardware synth not playing? (Check Port matching and MIDI cable/USB driver).
2. How do I change the name of a knob? (Right-click -> Configure).

### Advanced Usage
1. How to send SysEx data? (Does MIDI Out support this? Research needed).

---

## 🔗 Cross-Reference with Other Plugins

MIDI Out is often used with:
- **Fruity LSD** (The internal GM target)
- **Fruity Dashboard** (The older version of this concept)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
MIDI Out/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── midi-port-vs-channel.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── standard-cc-list.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── external-synth-integration.md
│   │   └── automating-vst-parameters.md
│
└── 04-Reference/
    └── latency-offset-calculations.md
```

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [MIDI Out Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/MIDI%20Out.htm)
- [MIDI Out Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/MIDI_Out_tutorials.htm)
- [MIDI Out Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+midi+out+tutorial)

### Community Resources
- [MIDI Out Subreddit](https://www.reddit.com/r/FL_Studio/search?q=midi+out&restrict_sr=1)
- [MIDI Out User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [MIDI Out Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "MIDI Fundamentals" - Understanding MIDI protocol and implementation
- "Hardware Integration Techniques" - Connecting external synthesizers
- "MIDI CC Automation" - Advanced automation approaches

### Advanced Techniques
- **CC Mapping:** Understanding MIDI Continuous Controller assignment
- **Port Management:** Managing multiple MIDI ports effectively
- **Channel Routing:** Routing to specific MIDI channels

---

## 📚 In-Depth Technical Analysis

### MIDI Architecture
MIDI Out implements sophisticated MIDI routing and control:
- **MIDI Protocol Implementation:** Full MIDI 1.0 specification compliance
- **Port Management:** 256 unique MIDI ports for complex setups
- **Channel Support:** 16 MIDI channels per port
- **Real-time Processing:** Immediate MIDI transmission
- **Low Latency:** Minimal MIDI transmission delay

### Controller Mapping System
The plugin features a comprehensive controller mapping system:
- **72 Knobs:** 8 pages of 9 knobs each (total 72 assignable controllers)
- **CC Assignment:** Each knob can be assigned to any MIDI CC number
- **Program Change:** Bank and patch selection capabilities
- **Note Output:** Standard MIDI note transmission
- **Velocity Sensitivity:** Full velocity support

### Signal Flow Architecture
The internal MIDI processing follows this order:
- **Input Stage:** MIDI data from Piano Roll or automation
- **Port Routing:** Directs MIDI to specific output port
- **Channel Assignment:** Routes to specific MIDI channel
- **Controller Mapping:** Maps internal knobs to MIDI CCs
- **Note Processing:** Handles note on/off messages
- **Output Stage:** Transmits MIDI to external devices or internal plugins

### Port vs Channel Concept
Understanding the MIDI routing system:
- **Ports:** Represent different MIDI destinations (like different cables)
- **Channels:** Represent different instruments on the same cable
- **Routing:** Port + Channel combination determines final destination
- **Isolation:** Different ports prevent MIDI conflicts
- **Organization:** Allows for complex MIDI setups

### CC Controller System
The 72 assignable controllers provide:
- **MIDI CC Support:** Full range of MIDI Continuous Controllers
- **Custom Mapping:** User-definable controller assignments
- **Automation Capability:** Full automation of all mapped controllers
- **Real-time Control:** Immediate response to parameter changes
- **Flexible Assignment:** Multiple controllers to single parameters

### Hardware Integration
The plugin supports various hardware integration scenarios:
- **External Synthesizers:** Direct control of hardware synths
- **Drum Machines:** Control of external drum machines
- **MIDI Controllers:** Integration with hardware controllers
- **USB MIDI Devices:** Support for USB-connected devices
- **Legacy Interfaces:** Compatibility with older MIDI interfaces

## 🎛️ Parameter Deep Dive

### Port Selection Controls
- **Function:** Determines the MIDI destination port
  - Range: 1-256 (typically)
  - Effect: Routes MIDI to specific output destination
  - Use for: Connecting to different MIDI devices
  - Pro tip: Match to device's input port in FL Studio's MIDI Settings
- **Behavior:**
  - Each port corresponds to a different MIDI output
  - Multiple MIDI Out instances can use different ports
  - Port selection affects which device receives MIDI
  - Pro tip: Use different ports for different devices
- **Applications:**
  - Hardware routing: Different ports for different synths
  - VST routing: Different ports for different internal plugins
  - Multi-device setup: Organize complex MIDI setups
  - Creative routing: Unique port assignments for expression
  - Pro tip: Plan port assignments before complex setups

### Channel Selection Controls
- **Function:** Determines the MIDI channel within the selected port
  - Range: 1-16 (standard MIDI channels)
  - Effect: Routes MIDI to specific channel on the device
  - Use for: Targeting specific instruments or sounds
  - Pro tip: Use different channels for multitimbral devices
- **Behavior:**
  - Each channel can carry different instruments
  - Multitimbral devices can play different sounds on different channels
  - Channel selection affects which sound receives MIDI
  - Pro tip: Use for multitimbral device control
- **Applications:**
  - Single synth: Channel 1 for basic synth control
  - Multitimbral: Different channels for different sounds
  - Drum machines: Channel 10 for standard drum mapping
  - Complex setups: Multiple channels for different parts
  - Pro tip: Use channel 10 for drum sounds

### Bank and Patch Controls
- **Function:** Sends program change messages to select sounds
  - **Bank Select:** Changes sound bank on multitimbral devices
    - Range: 0-127 (standard MIDI values)
    - Effect: Changes the available sound set
    - Use for: Accessing different sound banks
    - Pro tip: Essential for multitimbral devices
  - **Patch Select:** Changes patch within the selected bank
    - Range: 0-127 (standard MIDI values)
    - Effect: Selects specific sound within bank
    - Use for: Choosing specific instrument sounds
    - Pro tip: Use for sound selection
- **Behavior:**
  - Bank changes affect available patches
  - Patch selection determines specific sound
  - Both work together to select sounds
  - Pro tip: Use for comprehensive sound selection
- **Applications:**
  - Sound selection: Use for choosing specific sounds
  - Bank switching: Use for accessing different sound sets
  - Multitimbral control: Use for complex device control
  - Creative patching: Use for unique sound combinations
  - Pro tip: Use for comprehensive device control

### Controller Configuration
- **Function:** Assigns internal knobs to MIDI CC numbers
  - Range: CC 0-127 (full MIDI CC range)
  - Effect: Maps parameter changes to MIDI messages
  - Use for: Controlling external parameters
  - Pro tip: Right-click knob to configure assignment
- **Behavior:**
  - Each of the 72 knobs can be assigned to any CC
  - CC values transmitted in real-time
  - Assignments can be saved and recalled
  - Pro tip: Use for controlling hidden parameters
- **Applications:**
  - Hardware control: Assign to device-specific parameters
  - VST control: Control internal plugin parameters
  - Creative mapping: Map to unusual parameters for expression
  - Automation: Full automation of external devices
  - Pro tip: Use for comprehensive device control

### Note Output Controls
- **Function:** Transmits MIDI notes to external devices
  - Range: Standard MIDI note range (typically 0-127)
  - Effect: Triggers notes on external devices
  - Use for: Playing external instruments
  - Pro tip: Essential for external synth control
- **Behavior:**
  - Notes trigger sounds on external devices
  - Velocity affects note intensity
  - Channel determines which sound plays
  - Pro tip: Use for external instrument playback
- **Applications:**
  - External playback: Use for playing hardware synths
  - VST triggering: Use for triggering internal plugins
  - Creative triggering: Use for unique sound triggering
  - Performance: Use for live external instrument control
  - Pro tip: Use for comprehensive external control

## 🎼 Hardware Integration Applications

### External Synthesizer Control
Using MIDI Out for hardware synth integration:

**Monophonic Synthesizers:**
- **Single Voice Control:** Controlling monophonic hardware synths
  - Use single channel for voice control
  - Essential for vintage monosynths
  - Perfect for analog monosynths
  - Pro tip: Use for authentic vintage synth control

- **Parameter Automation:** Automating hardware synth parameters
  - Map CC controls to hardware parameters
  - Use for comprehensive hardware automation
  - Essential for modern hardware workflows
  - Perfect for expressive hardware control
  - Pro tip: Use for detailed hardware parameter control

**Multitimbral Synthesizers:**
- **Multi-Sound Control:** Controlling multiple sounds simultaneously
  - Use different channels for different sounds
  - Essential for complex hardware setups
  - Perfect for orchestral hardware arrangements
  - Pro tip: Use for comprehensive hardware control

### Drum Machine Integration
Using MIDI Out for hardware drum control:

**Standard Drum Machines:**
- **Channel 10 Setup:** Using standard drum channel mapping
  - Route to channel 10 for standard drum mapping
  - Essential for GM-compatible drum machines
  - Perfect for standard drum machine control
  - Pro tip: Use for authentic drum machine control

- **Custom Mapping:** Creating custom drum mappings
  - Map specific notes to specific drum sounds
  - Essential for non-GM drum machines
  - Perfect for custom drum machine control
  - Pro tip: Use for specific hardware requirements

**Advanced Drum Control:**
- **Parameter Automation:** Controlling drum machine parameters
  - Use CC automation for drum sound parameters
  - Essential for expressive drum control
  - Perfect for dynamic drum expression
  - Pro tip: Use for detailed drum machine control

### VST Integration
Using MIDI Out for internal plugin control:

**VST Parameter Control:**
- **Hidden Parameter Access:** Controlling parameters that don't link normally
  - Map to plugin-specific CC numbers
  - Essential for comprehensive VST control
  - Perfect for detailed plugin automation
  - Pro tip: Use for controlling unexposed parameters

- **Creative VST Control:** Using for creative parameter automation
  - Map to unusual parameters for expression
  - Essential for creative VST workflows
  - Perfect for unique parameter automation
  - Pro tip: Use for creative expression

**VST Sequencing:**
- **Note Sequencing:** Triggering internal VST instruments
  - Use for playing internal plugins
  - Essential for VST integration
  - Perfect for internal instrument control
  - Pro tip: Use for comprehensive internal control

### Creative Applications
Using MIDI Out for experimental applications:

**MIDI Mapping:**
- **Custom Control Surfaces:** Creating custom control surfaces
  - Map to specific hardware parameters
  - Essential for custom hardware control
  - Perfect for personalized workflows
  - Pro tip: Use for efficient hardware control

- **Performance Control:** Creating performance-oriented mappings
  - Organize controls for live performance
  - Essential for live hardware control
  - Perfect for performance-oriented workflows
  - Pro tip: Use for live performance efficiency

**Automation Workflows:**
- **Complex Automation:** Creating complex automation workflows
  - Use multiple pages for comprehensive control
  - Essential for complex automation
  - Perfect for detailed parameter control
  - Pro tip: Use for comprehensive automation

## 🧪 Experimental Techniques

### Advanced MIDI Applications
Creative uses of MIDI Out's capabilities:

**MIDI Mapping Experiments:**
- **Unusual Parameter Control:** Mapping to unexpected parameters
  - Use for creative expression
  - Perfect for experimental music
  - Essential for unique parameter control
  - Useful for creative sound design
  - Pro tip: Experiment with unusual parameter mappings

**Multi-Device Control:**
- **Complex Hardware Setups:** Controlling multiple devices simultaneously
  - Use different ports for different devices
  - Create complex MIDI routing networks
  - Perfect for comprehensive hardware studios
  - Essential for complex MIDI setups
  - Useful for professional hardware integration

**MIDI Sequencing:**
- **Advanced Sequencing:** Creating complex MIDI sequences
  - Use multiple channels for different parts
  - Combine with CC automation for expression
  - Perfect for complex MIDI arrangements
  - Essential for advanced MIDI sequencing
  - Useful for evolving MIDI patterns

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Complex CC Automation:** Automating multiple CC parameters simultaneously
  - Create evolving parameter patterns
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic MIDI expression
  - Use for expressive control

**Modulation Applications:**
- **Parameter Modulation:** Using external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Stage Processing:**
- **Complex MIDI Enhancement:** Multiple processing stages for sophisticated effects
  - Create multi-stage MIDI enhancement
  - Apply different processing to different stages
  - Build sophisticated MIDI processing chains
  - Perfect for advanced MIDI design
  - Use for complex MIDI processing

## 🎚️ Workflow Optimization

### Hardware Setup Workflows
Efficient approaches to using MIDI Out for hardware integration:

**Device Connection:**
- **Port Matching:** Ensuring FL Studio MIDI ports match plugin settings
  - Verify MIDI output routing in FL Studio settings
  - Match plugin port to device input port
  - Essential for proper hardware communication
  - Pro tip: Test connection before complex setups

- **Channel Configuration:** Setting up appropriate MIDI channels
  - Use channel 10 for drum machines
  - Apply different channels for multitimbral devices
  - Essential for proper device control
  - Pro tip: Plan channels before programming

**Parameter Mapping:**
- **CC Assignment:** Efficiently mapping controls to device parameters
  - Research device-specific CC numbers
  - Map frequently-used parameters to accessible knobs
  - Essential for efficient hardware control
  - Pro tip: Create templates for common devices

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
- **MIDI Monitoring:** Using with MIDI monitoring tools for feedback
  - Monitor MIDI messages in real-time
  - Compare with reference tracks
  - Essential for informed parameter control
  - Pro tip: Use for MIDI verification

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Hardware Synth Integration:** Controlling external analog synths
- **Drum Machine Sequencing:** Programming external drum machines
- **Parameter Automation:** Automating hardware parameters for expression
- [ ] Control an external hardware synth with 100% synchronized timing
- [ ] Automate 5 different CC parameters on an internal VST using one MIDI Out instance
- [ ] Build a custom labeled control page for a specific instrument
- [ ] Explain why Ports and Channels must match between controller and target
- [ ] Set up comprehensive hardware integration workflows
- [ ] Create custom CC mappings for specific hardware devices
- [ ] Use MIDI Out for multitimbral device control
- [ ] Apply appropriate port and channel settings for different devices
- [ ] Create performance-oriented control layouts
- [ ] Troubleshoot MIDI routing and timing issues effectively
- [ ] Integrate MIDI Out into efficient hardware control workflows
- [ ] Create genre-specific MIDI control presets for different musical styles
- [ ] Optimize MIDI Out settings for minimal latency
- [ ] Use MIDI Out for creative sound design applications
- [ ] Set up advanced MIDI routing for complex projects
- [ ] Apply MIDI Out in live performance scenarios
- [ ] Create experimental MIDI effects with unusual parameter mappings
- [ ] Combine MIDI Out with other effects for layered processing
- [ ] Integrate MIDI Out with other automation tools seamlessly
- [ ] Create custom MIDI workflows for specific creative needs
- [ ] Use MIDI Out effectively in large, complex projects
- [ ] Generate complex MIDI patterns with parameter automation
- [ ] Create hybrid MIDI control combining hardware and software
- [ ] Apply MIDI Out in mastering contexts with appropriate care
- [ ] Create complex multi-device MIDI chains with smooth automation
- [ ] Design custom MIDI control patches for specific musical contexts
- [ ] Use MIDI Out for creative vocal processing applications
- [ ] Apply advanced CC mapping techniques for parameter control
- [ ] Create genre-specific preset libraries for efficient workflow
- [ ] Integrate MIDI Out with external hardware for hybrid processing
- [ ] Use MIDI Out for audio restoration and creative repair applications
- [ ] Combine MIDI Out with other spectral processing tools
- [ ] Apply MIDI Out in surround sound or multi-channel setups
- [ ] Create complex MIDI relationships using multiple parameters
- [ ] Use MIDI Out for creative instrumental processing applications
- [ ] Integrate MIDI Out with other automation tools for complex control
- [ ] Create complex atmospheric textures using multiple parameters
- [ ] Design custom MIDI mapping algorithms for unique parameter relationships
- [ ] Apply advanced filtering techniques for tone shaping
- [ ] Use MIDI Out for creative stereo enhancement beyond traditional methods
- [ ] Combine MIDI Out with convolution for hybrid control approaches
- [ ] Implement advanced envelope shaping for dynamic expression
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use MIDI Out for creative sound design in film and game audio
- [ ] Apply MIDI Out in live sound reinforcement scenarios
- [ ] Create experimental MIDI control textures using extreme parameter settings
- [ ] Integrate MIDI Out with external controllers for complex sound design
- [ ] Generate complex harmonic structures with precise parameter control
- [ ] Use MIDI Out for formant synthesis and parameter creation
- [ ] Apply advanced resonance techniques for character enhancement
- [ ] Create evolving textures using parameter automation
- [ ] Design custom MIDI control patterns for sophisticated expression
- [ ] Use MIDI Out for creative bass enhancement with parameter control
- [ ] Combine MIDI Out with other vintage emulations for authentic sounds
- [ ] Apply MIDI Out in educational contexts for synthesis learning
- [ ] Create custom MIDI control patches for retro music production
- [ ] Use MIDI Out for creative lead enhancement with parameter control
- [ ] Implement advanced MIDI techniques for complex parameter automation

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection