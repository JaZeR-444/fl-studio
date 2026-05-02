# MIDI Out - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 00-START-HERE.md

```markdown
# MIDI Out: Start Here

Welcome to the **MIDI Out** Deeper Dive. MIDI Out is the primary bridge in FL Studio for controlling **external hardware** (synths, drum machines) and **internal VST plugins**. It transmits pure MIDI data, allowing you to sequence and automate any MIDI-capable device directly from the Piano Roll.

## 🗺️ Quick Navigation Guide

### 1. The Essentials (Start Here)
- **[README.md](./README.md):** The central hub for connection goals and technical specs.
- **[01-Learning/Quick-Reference/parameter-cheat-sheet.md](./01-Learning/Quick-Reference/parameter-cheat-sheet.md):** A fast breakdown of Ports, Channels, and Banks.
- **[01-Learning/Quick-Reference/midi-port-vs-channel.md](./01-Learning/Quick-Reference/midi-port-vs-channel.md):** Understanding the fundamental "wires and instruments" concept.

### 2. Core Concepts
- **[01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md](./01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md):** Mapping the 8 pages of assignable knobs.
- **[02-Data/parameters/standard-cc-list.json](./02-Data/parameters/standard-cc-list.json):** A reference list of common MIDI Continuous Controllers.

### 3. Workflow Recipes
- **[03-Workflows/by-goal/external-synth-integration.md](./03-Workflows/by-goal/external-synth-integration.md):** Step-by-step hardware connection and latency management.
- **[03-Workflows/by-goal/automating-vst-parameters.md](./03-Workflows/by-goal/automating-vst-parameters.md):** Controlling "hidden" VST parameters via MIDI CC.
- **[03-Workflows/by-goal/custom-midi-dashboard.md](./03-Workflows/by-goal/custom-midi-dashboard.md):** Labeling your own 72-knob control surface.

## 🚀 Rapid Success Protocol
1. **Set the Port:** Match the **Port #** in MIDI Out to the **Input Port** of your target hardware or VST.
2. **Match the Channel:** Standard MIDI uses **Channel 1** by default. Multitimbral devices (like Kontakt) can use channels 1–16.
3. **Configure a Knob:** Right-click any knob, select **Configure**, and set the **CC #** (e.g., CC 74 for Filter Cutoff).
4. **Sequence in Piano Roll:** Notes played here will now trigger your target instrument.
5. **Record Automation:** Right-click your configured knob and select **Create automation clip**.

---
*For technical specs and port management data, see the [02-Data/](./02-Data/) folder.*

```

---

## FILE: README.md

```markdown
# MIDI Out - Hardware & Plugin Controller

`\`\`
███╗   ███╗██╗██████╗ ██╗     ██████╗ ██╗   ██╗████████╗
████╗ ████║██║██╔══██╗██║    ██╔═══██╗██║   ██║╚══██╔══╝
██╔████╔██║██║██║  ██║██║    ██║   ██║██║   ██║   ██║   
██║╚██╔╝██║██║██║  ██║██║    ██║   ██║██║   ██║   ██║   
██║ ╚═╝ ██║██║██████╔╝██║    ╚██████╔╝╚██████╔╝   ██║   
╚═╝     ╚═╝╚═╝╚═════╝ ╚═╝     ╚═════╝  ╚═════╝    ╚═╝   
`\`\`

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

`\`\`
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
`\`\`

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
```

---

## FILE: 01-Learning\Concepts\01-midi-fundamentals.md

```markdown
# MIDI Out Concepts

## MIDI Fundamentals

MIDI (Musical Instrument Digital Interface) transmits musical data, not audio. Understanding MIDI helps with hardware control.

---

## MIDI Data Types

### Note Messages
- **Note On** - Note begins (includes velocity)
- **Note Off** - Note ends (sometimes note on with velocity 0)
- Range: 128 notes (0-127, C-2 to G8)

### Control Change (CC)
- Continuous controller messages
- 128 controllers (CC 0-127)
- Common: Volume (CC 7), Pan (CC 10), Mod (CC 1)

### Program Change
- Patch/preset selection
- 128 programs (0-127)
- Often used with Bank Select (CC 0/32)

### Aftertouch
- Pressure after note begins
- **Channel** - Pressure on entire keyboard
- **Poly** - Pressure per individual note

---

## MIDI Channels

### 16 Channels per Port
- Each port supports 16 channels
- Channel 10 reserved for drums (GM standard)
- Devices respond to assigned channel

### Channel Assignment
- Match DAW channel to device channel
- Omni mode = receives on all channels
- Multiple devices need different channels

---

## MIDI Timing

### Clock Sources
| Source | Use Case | Description |
|--------|----------|-------------|
| Internal | Standalone | DAW tempo controls all |
| External | Sync to hardware | Device tempo controls DAW |

### Sync Types
- **MIDI Clock** - Basic tempo sync
- **Song Position** - Location pointer
- **MTC (MIDI Time Code)** - Frame-based sync

### Latency Considerations
- MIDI has inherent latency (~1-5ms per device)
- Round-trip delay = device latency + return latency
- DAW should compensate for round-trip

---

## Common CC Messages

| CC | Name | Typical Use |
|----|------|-------------|
| 0 | Bank Select MSB | Bank switching |
| 1 | Modulation | Vibrato, filter sweep |
| 7 | Volume | Level control |
| 10 | Pan | Stereo position |
| 11 | Expression | Dynamic level |
| 64 | Sustain Pedal | Hold notes |
| 91 | Reverb | Reverb amount |
| 93 | Chorus | Chorus amount |
| 121 | Reset All | Emergency reset |
| 123 | All Notes Off | Stop stuck notes |

---

## Troubleshooting

### No Response
- Check cable connection
- Verify channel match
- Confirm device power/on
- Test with MIDI monitor

### Wrong Notes
- Check transpose settings
- Verify MIDI-OX mapping
- Test single note
- Check device note mapping

### Stuck Notes
- Send All Notes Off (CC 123)
- Send Reset All (CC 121)
- Stop all playback
- Force note-off messages

### Timing Issues
- Enable clock output
- Check buffer size
- Restart DAW sync
- Reduce MIDI complexity

---

## Related Documentation

- [MIDI Out By-Instrument Workflows](../03-Workflows/by-instrument/INDEX.md)
- [MIDI Out By-Goal Workflows](../03-Workflows/by-goal/INDEX.md)
- [MIDI Out Presets](../02-Data/presets/INDEX.md)
- [MIDI Out Safety Rules](../02-Data/rules/midi-out-safety-rules.md)

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: MIDI Out

How to use a data-only utility to capture real "vibe" in Hip-Hop, R&B, and Neo-Soul.

---

## 1. VIBEY / ORGANIC
*Warmth, human imperfection, and real analog depth.*
- **The Mental Model:** Using MIDI Out to control a real hardware synthesizer or a "vibe-heavy" VST.
- **MIDI Out Levers:**
    - **Physical Control:** Routing MIDI Out to an analog synth (e.g. Minilogue, Prophet). The real circuitry provides the vibe that plugins often lack.
    - **CC 1 (Mod Wheel):** Automate subtle vibrato or filter movements to mimic a real player's hands.
    - **CC 11 (Expression):** Use this for "volume swells" during a soulful R&B pad performance.
- **Listen For:** The "breath" and subtle noise floor of real hardware.

## 2. PSYCHEDELIC
*Extreme motion, morphing textures, and "otherworldly" control.*
- **The Mental Model:** Automating parameters that aren't usually available, or creating complex "macro" controls.
- **MIDI Out Levers:**
    - **Hidden VST CCs:** Map MIDI Out knobs to obscure CC numbers in a VST (check the VST's manual). Automating these can create "glitchy" or unusual sonic shifts.
    - **Multi-Knob Automation:** Group multiple MIDI Out knobs into one Dashboard or Patcher macro to morph a sound from "Dry" to "Trippy" with one fader.
    - **Master Sync:** Send MIDI Clock to a vintage drum machine and let its internal "swing" provide a psychedelic groove.
- **Listen For:** Sonic textures that feel like they are "melting" or "bending."

## 3. MOODY
*Darkness, distance, and atmospheric depth.*
- **The Mental Model:** Controlling filters and effects from a distance; minimal but focused.
- **MIDI Out Levers:**
    - **CC 74 (Filter Cutoff):** Automate the cutoff to stay in the low-mids (20–40% range).
    - **Bank/Patch Changes:** Use MIDI Out to cycle through dark, moody factory presets on a hardware unit without touching the hardware.
    - **Vel -> Cutoff:** Use MIDI Out to route velocity to filter brightness. Play softly for a "muffled" moody feel and harder for a "sharp" climax.
- **Listen For:** A dark, heavy presence that feels "cloaked" or mysterious.

## 4. UPBEAT / ENERGETIC
*Tight timing, rhythmic precision, and bright clarity.*
- **The Mental Model:** High-energy club tracks using hardware drum machines or "Mainstage" VSTs.
- **MIDI Out Levers:**
    - **CC 7 (Volume):** Use for precise rhythmic "stutter" automation or gating.
    - **Master Sync ON:** Ensure your external hardware arpeggiators and delays are perfectly locked to FL Studio's BPM.
    - **Program Changes:** Use MIDI Out to instantly flip from a "Verse" patch to a "Hook" patch on your hardware synth.
- **Listen For:** Tight, percussive timing and energetic sonic transitions.

---

## Vibe Check Matrix
| Vibe | Primary Focus | Key CC | Sync Status | VST vs Hardware |
| :--- | :--- | :--- | :--- | :--- |
| **Vibey** | Human Touch | CC 1 (Mod) | ON | Hardware |
| **Psyched**| Texture Morph | CC 11 / Hidden | ON | VST (Deep Map) |
| **Moody** | Dark Filters | CC 74 (Cutoff)| OFF | Hardware |
| **Upbeat** | Transitions | Patch Change | ON | Both |
| **Jazzy** | Performance | CC 64 (Sustain)| OFF | Both |

```

---

## FILE: 01-Learning\Quick-Reference\01-parameter-quick-reference.md

```markdown
# MIDI Out Quick Reference

## Parameters at a Glance

| Parameter | Options | Default | Purpose |
|-----------|---------|---------|---------|
| Channel | 1-16 | 1 | Device channel |
| Port | Auto/Port 1-16 | Auto | Physical output |
| Clock Source | Internal/External | Internal | Sync source |
| Clock Out | On/Off | Off | Send clock |
| Note Length | Default/Short/Long/Pattern | Default | Duration |
| Velocity | 1-127 | 100 | Strength |
| Transpose | -24 to +24 semitones | 0 | Pitch shift |

---

## Channel Reference

| Channel | Common Use |
|---------|------------|
| 1-9 | Melodic instruments |
| 10 | GM Drums (standard) |
| 11-16 | Additional devices |

---

## Note Numbers

### GM Drum Map (Channel 10)
| Note | Drum Sound |
|------|------------|
| 35 | Kick 2 |
| 36 | Kick 1 |
| 38 | Snare 1 |
| 40 | Snare 2 |
| 42 | Hi-Hat Closed |
| 44 | Hi-Hat Pedal |
| 46 | Hi-Hat Open |
| 49 | Crash 1 |
| 51 | Ride 1 |

---

## Common CC Messages

| CC | Name | Range | Purpose |
|----|------|-------|---------|
| 0 | Bank Select MSB | 0-127 | Bank switching |
| 1 | Mod Wheel | 0-127 | Modulation |
| 7 | Volume | 0-127 | Level |
| 10 | Pan | 0-127 L-63-C-63 R | Position |
| 11 | Expression | 0-127 | Dynamics |
| 64 | Sustain | 0=Off, 127=On | Hold |
| 65 | Portamento | 0=Off, 127=On | Glide |
| 71 | Resonance | 0-127 | Filter resonance |
| 74 | Cutoff | 0-127 | Filter frequency |
| 91 | Reverb | 0-127 | Send amount |
| 93 | Chorus | 0-127 | Send amount |
| 121 | Reset All | Any | Emergency reset |
| 123 | All Notes Off | Any | Stop notes |

---

## Emergency Messages

| Message | CC | Purpose |
|---------|-----|---------|
| Reset All Controllers | CC 121 | Clear all settings |
| All Notes Off | CC 123 | Stop stuck notes |
| Local Control Off | CC 122 | Disconnect keyboard |
| Local Control On | CC 122 | Connect keyboard |

---

## Sync Settings

| Mode | Clock Source | Clock Out | Use Case |
|------|--------------|-----------|----------|
| Standalone | Internal | Off | Single device |
| Master | Internal | On | Control slaves |
| Slave | External | Off | Sync to device |

---

## Troubleshooting Quick Fixes

| Issue | Quick Fix |
|-------|-----------|
| No response | Check channel match |
| Wrong notes | Check transpose setting |
| Stuck notes | Send CC 123 |
| Timing drift | Enable clock out |
| Duplicate notes | Disable thru |
| No sync | Check clock source |

---

## Related Documentation

- [MIDI Fundamentals](../02-Learning/Concepts/01-midi-fundamentals.md)
- [MIDI Out Workflows](../03-Workflows/INDEX.md)
- [MIDI Out Presets](../02-Data/presets/INDEX.md)

```

---

## FILE: 01-Learning\Quick-Reference\02-cc-reference.md

```markdown
# MIDI Out CC Message Reference

## Complete CC List

### Channel Volume/Expression
| CC | Name | Range | Purpose |
|----|------|-------|---------|
| 7 | Volume | 0-127 | Master volume |
| 11 | Expression | 0-127 | Dynamic level |
| 10 | Pan | 0-127 L-63-C | Stereo position |

### General Purpose
| CC | Name | Range | Purpose |
|----|------|-------|---------|
| 1 | Modulation | 0-127 | Vibrato, filter |
| 64 | Sustain | 0/127 | Hold pedal |
| 65 | Portamento | 0/127 | Glide on/off |
| 66 | Sostenuto | 0/127 | Selective sustain |
| 67 | Soft Pedal | 0/127 | Soft pedal |
| 91 | Reverb | 0-127 | Reverb amount |
| 93 | Chorus | 0-127 | Chorus amount |
| 74 | Cutoff | 0-127 | Filter frequency |
| 71 | Resonance | 0-127 | Filter resonance |

### Bank Selection
| CC | Name | Purpose |
|----|------|---------|
| 0 | Bank Select MSB | Bank switching |
| 32 | Bank Select LSB | Extended banks |

### Control
| CC | Name | Purpose |
|----|------|---------|
| 120 | All Sound Off | Silence all |
| 121 | Reset All Controllers | Clear settings |
| 123 | All Notes Off | Stop stuck notes |
| 122 | Local Control | Keyboard on/off |

---

## Common CC Mappings

### Synthesizer
| CC | Parameter | Typical |
|----|-----------|---------|
| 1 | Mod Wheel | Filter cutoff |
| 7 | Volume | Level |
| 11 | Expression | Dynamics |
| 74 | Cutoff | Filter frequency |
| 71 | Resonance | Filter resonance |
| 91 | Reverb | Send amount |
| 93 | Chorus | Send amount |

### Drum Machine
| CC | Parameter | Typical |
|----|-----------|---------|
| 7 | Volume | Master level |
| 10 | Pan | |
| 91 Output pan | Reverb | Send amount |

### Effects Unit
| CC | Parameter | Typical |
|----|-----------|---------|
| 7 | Volume | Output level |
| 74 | Cutoff | Filter |
| 71 | Resonance | Emphasis |

---

## NRPN (Non-Registered Parameter Numbers)

### What Are NRPN?
- Extended parameter control
- Device-specific parameters
- Require MSB/LSB setup

### NRPN Setup
| CC | Purpose |
|----|---------|
| 99 | NRPN MSB |
| 98 | NRPN LSB |
| 6 | Data Entry MSB |
| 38 | Data Entry LSB |

### Example: NRPN Message
`\`\`
CC 99 = 1 (Parameter MSB)
CC 98 = 0 (Parameter LSB)  
CC 6 = 64 (Value MSB)
[CC 38 = 0] (Value LSB, optional)
`\`\`

---

## Troubleshooting CC

### Device Not Responding
- Verify CC number matches device
- Check device documentation
- Try different CC values
- Confirm CC is enabled

### Stuck Values
- Send CC 121 (Reset All)
- Send CC 123 (All Notes Off)
- Check for stuck notes
- Restart device if needed

### Unexpected Behavior
- CC might be mapped differently
- Check device CC chart
- Try minimal CC set
- Consult manual

---

## Quick Reference Card

| Need | CC | Value |
|------|-----|-------|
| Volume up | 7 | 127 |
| Volume down | 7 | 0 |
| Pan center | 10 | 64 |
| Sustain on | 64 | 127 |
| Sustain off | 64 | 0 |
| Reset all | 121 | Any |
| All notes off | 123 | Any |

---

## Related Documentation

- [MIDI Fundamentals](../Concepts/01-midi-fundamentals.md)
- [MIDI Out Parameter Quick Reference](../Quick-Reference/parameter-quick-reference.md)

```

---

## FILE: 01-Learning\Quick-Reference\midi-port-vs-channel.md

```markdown
# MIDI Port vs. Channel: The "Wire & Instrument" Model

Understanding the routing logic of MIDI Out. [SRC: IL-KB]

## 1. The Port (The Virtual Wire)
Imagine you have 10 different hardware synthesizers on your desk. Each one needs its own physical cable.
- **Port = Cable.**
- In FL Studio, a **Port** is a unique identification number (0–255) that routes MIDI data to a specific destination.
- **Internal VST Example:** If you set **Serum** to Input Port **5**, and **MIDI Out** to Port **5**, they are now connected by a "Virtual Wire."

## 2. The Channel (The Instrument ID)
Now imagine one of those cables is plugged into a "Multitimbral" synth (like a Roland Fantom or a VST like Kontakt). That single synth can play 16 different sounds at the same time.
- **Channel = Sound Slot.**
- Standard MIDI has **16 Channels**.
- If you want MIDI Out to play the "Piano" sound in slot 1 of Kontakt, use **Channel 1**.
- If you want it to play the "String" sound in slot 2, use **Channel 2**.

---

## 3. How to Route Hardware
1. **Physical Connect:** Plug your synth into your MIDI interface.
2. **FL Settings:** Go to `Options -> MIDI Settings`.
3. **Assign Port:** Locate your MIDI Interface output in the list and set the **Port number** (e.g. 10).
4. **MIDI Out Plugin:** Set the **Port** in the MIDI Out plugin to **10**.
5. **Result:** Notes played in the MIDI Out Piano Roll will travel out through Port 10 to your hardware.

## 4. How to Route VSTs
1. **VST Wrapper:** Click the gear icon on the top left of your VST window.
2. **Set Port:** In the "Settings" tab, look for **Input Port**. Set it to a number (e.g. 20).
3. **MIDI Out Plugin:** Set the **Port** in MIDI Out to **20**.
4. **Result:** MIDI Out is now the "sequencer" for that VST.

---

## 🏁 Summary Checklist
- **Same Port?** -> Data will move between them.
- **Same Channel?** -> The specific sound will play.
- **Conflicts?** -> Avoid using the same Port for different hardware units unless they are "Daisy Chained."

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: MIDI Out

The "Universal Remote" for hardware and plugins. [SRC: IL-MAN]

---

## 🛰️ Connection Section (Top)
- **Port:** The "Virtual Wire." (0–255).
  - *Internal VST:* Match this to the **Input Port** in the VST's wrapper settings.
  - *External Hardware:* Match this to the **Output Port** in FL's MIDI Settings.
- **Channel:** The "Instrument ID." (1–16).
  - Use this to target specific sounds on a multitimbral synth or VST.

## 🎵 Patch & Bank Selection
- **Bank:** Selects the specific group of sounds (MSB/LSB).
- **Patch (Program Change):** Selects the individual sound (0–127).
- **Update on Selection:** If ON, MIDI Out sends the bank/patch data every time you change the value.

## 🕹️ Assignable Controllers (8 Pages)
- **Knobs (9 per page):** Total of 72 controllers.
- **Right-Click -> Configure:**
  - **Full Name:** The label that appears on the UI.
  - **Short Name:** The label that appears in the Browser/Hint bar.
  - **Controller #:** The MIDI CC number (0–127).
- **Note:** Knob 1 on Page 1 is often pre-mapped to CC 1 (Mod Wheel).

## ⚙️ Global Tools
- **Reset:** Sends a "Panic" message (All Notes Off) to the target.
- **Send Master Sync:** Transmits FL Studio's transport status (Start/Stop/Tempo) to the target.

---

## 🎯 High-Signal MIDI CCs
- **CC 1:** Mod Wheel (Expression/Vibrato).
- **CC 7:** Main Volume.
- **CC 10:** Pan.
- **CC 11:** Expression.
- **CC 64:** Sustain Pedal (Hold).
- **CC 74:** Filter Cutoff (Standard).
- **CC 71:** Resonance (Standard).

```

---

## FILE: 02-Data\parameters\standard-cc-list.json

```json
{
  "reference_name": "Standard MIDI CC List",
  "source": "MIDI Association Specification",
  "common_assignments": [
    {"cc": 1, "name": "Modulation Wheel", "usage": "Expression, Vibrato"},
    {"cc": 2, "name": "Breath Controller", "usage": "Wind instrument control"},
    {"cc": 5, "name": "Portamento Time", "usage": "Slide speed"},
    {"cc": 7, "name": "Main Volume", "usage": "Overall loudness"},
    {"cc": 10, "name": "Pan", "usage": "Stereo position"},
    {"cc": 11, "name": "Expression", "usage": "Dynamic swells"},
    {"cc": 64, "name": "Damper Pedal (Sustain)", "usage": "Holding notes"},
    {"cc": 65, "name": "Portamento ON/OFF", "usage": "Glide toggle"},
    {"cc": 71, "name": "Resonance", "usage": "Filter Q / Timbre"},
    {"cc": 72, "name": "Release Time", "usage": "Tail length"},
    {"cc": 73, "name": "Attack Time", "usage": "Onset speed"},
    {"cc": 74, "name": "Brightness (Cutoff)", "usage": "Filter frequency"},
    {"cc": 91, "name": "Reverb Send Level", "usage": "Spatial depth"},
    {"cc": 93, "name": "Chorus Send Level", "usage": "Thickness"},
    {"cc": 120, "name": "All Sound Off", "usage": "Instant silence"},
    {"cc": 123, "name": "All Notes Off", "usage": "Panic / Mute"}
  ]
}

```

---

## FILE: 02-Data\presets\INDEX.md

```markdown
# MIDI Out Complete Presets INDEX

## Genre Presets (10 files)
| File | Name | Genre | Mood |
|------|------|-------|------|
| `genre/01-basic-output.json` | Basic MIDI Output | universal | standard |
| `genre/02-hip-hop-drums.json` | Hip-Hop Drums | hip-hop/rap | funky |
| `genre/03-edm-synth.json` | EDM Synth | EDM | electric |
| `genre/04-rnb-keys.json` | R&B Keys | R&B | melodic |
| `genre/05-ambient-pad.json` | Ambient Pad | universal | moody |
| `genre/06-cinematic-control.json` | Cinematic Control | universal | epic |

## Signature Presets (6 files)
| File | Artist | Style |
|------|--------|-------|
| `signature/metro-boomin-midi.json` | Metro Boomin | Dark Trap |
| `signature/zaytoven-keys.json` | Zaytoven | Live Keys |
| `signature/timbaland-drums.json` | Timbaland | Unconventional Drums |
| `signature/hans-zimmer-epic.json` | Hans Zimmer | Cinematic |
| `signature/jordan-rudess.json` | Jordan Rudess | Expressive |
| `signature/armin-trance.json` | Armin van Buuren | Trance |

## Quick Reference
| Goal | Preset | File |
|------|--------|------|
| Basic MIDI | Basic Output | `genre/01-basic-output.json` |
| Drum programming | Hip-Hop Drums | `genre/02-hip-hop-drums.json` |
| Synth control | EDM Synth | `genre/03-edm-synth.json` |
| Keys performance | R&B Keys | `genre/04-rnb-keys.json` |
| Pad control | Ambient Pad | `genre/05-ambient-pad.json` |
| Cinematic | Cinematic Control | `genre/06-cinematic-control.json` |

## Workflow Reference
- [MIDI Out By-Instrument Workflows](../03-Workflows/by-instrument/INDEX.md)
- [MIDI Out By-Goal Workflows](../03-Workflows/by-goal/INDEX.md)
- [MIDI Out Safety Rules](../02-Data/rules/midi-out-safety-rules.md)

```

---

## FILE: 02-Data\presets\genre\01-basic-midi-output.json

```json
{
  "name": "Basic MIDI Output",
  "genre": "universal",
  "mood": "upbeat",
  "description": "Standard MIDI configuration for general-purpose output",
  "parameters": {
    "channel": 1,
    "port": "Auto",
    "clockSource": "Internal",
    "clockOut": false,
    "noteLength": "Default",
    "velocity": 100,
    "pitchBendRange": 2,
    "aftertouch": false,
    "midiCC": true,
    "thru": true,
    "syncToHost": true
  },
  "workflow": {
    "useCase": "General MIDI output to hardware",
    "steps": [
      "Select MIDI channel (1-16)",
      "Choose output port or Auto",
      "Set clock source based on setup",
      "Configure note length for style",
      "Adjust velocity for instrument response"
    ],
    "troubleshooting": [
      { "issue": "No sound", "fix": "Check MIDI channel matches hardware" },
      { "issue": "Timing issues", "fix": "Set clock to Internal or External" },
      { " "issue": "Wrong notes", "fix": "Verify transpose settings" }
    ]
  },
  "abTest": {
    "listenFor": "Clean MIDI signal transmission",
    "duration": "Test all notes and CC messages"
  }
}
```

---

## FILE: 02-Data\presets\genre\02-hip-hop-drums.json

```json
{
  "name": "Hip-Hop Drum MIDI",
  "genre": "hip-hop/rap",
  "mood": "funky",
  "description": "MIDI configuration optimized for drum machine output",
  "parameters": {
    "channel": 10,
    "port": "MIDI",
    "clockSource": "Internal",
    "clockOut": true,
    "noteLength": "Short",
    "velocity": 110,
    "pitchBendRange": 0,
    "aftertouch": false,
    "midiCC": true,
    "thru": true,
    "syncToHost": true,
    "programChange": true,
    "bankSelect": true
  },
  "workflow": {
    "useCase": "Trigger drum machines like TR-808, MPC",
    "steps": [
      "Set channel to 10 (drums standard)",
      "Enable clock output for sync",
      "Set short note length for tight hits",
      "Higher velocity for punchy drums",
      "Enable program change for kit switching"
    ],
    "troubleshooting": [
      { "issue": "Late triggers", "fix": "Reduce MIDI output delay" },
      { "issue": "Wrong drum sounds", "fix": "Check MIDI note mapping" },
      { "issue": "No sync", "fix": "Enable clock out, check tempo" }
    ]
  },
  "abTest": {
    "listenFor": "Tight, synchronized drum triggering",
    "duration": "Full beat pattern"
  }
}
```

---

## FILE: 02-Data\presets\genre\03-edm-synth.json

```json
{
  "name": "EDM Synth MIDI",
  "genre": "EDM",
  "mood": "electric",
  "description": "MIDI configuration for EDM synths with modulation support",
  "parameters": {
    "channel": 1,
    "port": "MIDI",
    "clockSource": "Internal",
    "clockOut": true,
    "noteLength": "Default",
    "velocity": 100,
    "pitchBendRange": 12,
    "aftertouch": true,
    "midiCC": true,
    "thru": true,
    "syncToHost": true,
    "mpe": false,
    "nrpn": true
  },
  "workflow": {
    "useCase": "EDM hardware and software synths",
    "steps": [
      "Set channel 1 for main synth",
      "Enable aftertouch for expression",
      "Pitch bend range 12 semitones",
      "Enable NRPN for parameter control",
      "Clock sync for tempo effects"
    ],
    "troubleshooting": [
      { "issue": "No modulation", "fix": "Check CC mapping in synth" },
      { "issue": "Pitch drift", "fix": "Verify MIDI clock sync" },
      { "issue": "Stuck notes", "fix": "Enable thru, check note off" }
    ]
  },
  "abTest": {
    "listenFor": "Full modulation and expression control",
    "duration": "Arpeggio with pitch bend"
  }
}
```

---

## FILE: 02-Data\presets\genre\04-rnb-keys.json

```json
{
  "name": "R&B Keys MIDI",
  "genre": "R&B",
  "mood": "melodic",
  "description": "MIDI configuration for expressive keyboard performances",
  "parameters": {
    "channel": 2,
    "port": "MIDI",
    "clockSource": "Internal",
    "clockOut": false,
    "noteLength": "Default",
    "velocity": 90,
    "pitchBendRange": 2,
    "aftertouch": true,
    "midiCC": true,
    "thru": true,
    "syncToHost": true,
    "mpe": false,
    "sustainPedal": true,
    "modWheel": true
  },
  "workflow": {
    "useCase": "R&B keyboard and piano sounds",
    "steps": [
      "Lower velocity (90) for smooth response",
      "Enable sustain pedal CC 64",
      "Mod wheel for vibrato/depth",
      "Aftertouch for expression",
      "Subtle pitch bend range (2)"
    ],
    "troubleshooting": [
      { "issue": "Sticky sustain", "fix": "Check sustain pedal CC mapping" },
      { "issue": "No modulation", "fix": "Verify mod wheel CC 1" },
      { "issue": "Velocity too hard", "fix": "Reduce velocity to 80-90" }
    ]
  },
  "abTest": {
    "listenFor": "Natural, expressive keyboard response",
    "duration": "Chord progression with sustain"
  }
}
```

---

## FILE: 02-Data\presets\genre\05-ambient-pad.json

```json
{
  "name": "Ambient Pad Control",
  "genre": "universal",
  "mood": "moody",
  "description": "MIDI setup for controlling ambient pad hardware",
  "parameters": {
    "channel": 1,
    "port": "MIDI",
    "clockSource": "Internal",
    "clockOut": false,
    "noteLength": "Default",
    "velocity": 85,
    "aftertouch": true,
    "modWheel": true,
    "cc74": true,
    "reverb": true,
    "chorus": true
  },
  "characteristics": [
    "Smooth modulation",
    "Expression control",
    "Atmospheric feel"
  ],
  "workflow": {
    "useCase": "Ambient pad performances",
    "steps": [
      "Set channel 1 for pad",
      "Enable aftertouch for expression",
      "Mod wheel for filter sweeps",
      "CC 74 for brightness",
      "Use lower velocity for smooth"
    ],
    "tips": [
      "Great for atmospheric music",
      "Express through modulation",
      "Perfect for evolving pads"
    ]
  },
  "abTest": {
    "listenFor": "Smooth pad control with expressive modulation",
    "duration": "Full ambient passage"
  }
}
```

---

## FILE: 02-Data\presets\genre\05-external-sequencer.json

```json
{
  "name": "External Sequencer MIDI",
  "genre": "universal",
  "mood": "upbeat",
  "description": "MIDI configuration for vintage sequencer sync",
  "parameters": {
    "channel": 1,
    "port": "MIDI",
    "clockSource": "External",
    "clockOut": true,
    "noteLength": "Pattern",
    "velocity": 100,
    "pitchBendRange": 2,
    "aftertouch": false,
    "midiCC": true,
    "thru": true,
    "syncToHost": true,
    "songPosition": true,
    "transport": true
  },
  "workflow": {
    "useCase": "Sync with vintage hardware sequencers",
    "steps": [
      "Set clock source to External",
      "Enable song position for location",
      "Transport control for start/stop",
      "MIDI thru for pass-through",
      "Pattern note length for step seq"
    ],
    "troubleshooting": [
      { "issue": "Sync loss", "fix": "Check clock source on both devices" },
      { "issue": "Wrong position", "fix": "Enable song position" },
      { "issue": "No transport", "fix": "Enable transport MIDI" }
    ]
  },
  "abTest": {
    "listenFor": "Precise synchronization with hardware",
    "duration": "Full song with multiple sections"
  }
}
```

---

## FILE: 02-Data\presets\genre\06-cinematic-control.json

```json
{
  "name": "Cinematic Control",
  "genre": "universal",
  "mood": "moody",
  "description": "MIDI setup for controlling cinematic hardware",
  "parameters": {
    "channel": 1,
    "port": "MIDI",
    "clockSource": "Internal",
    "clockOut": true,
    "noteLength": "Long",
    "velocity": 90,
    "aftertouch": true,
    "modWheel": true,
    "cc11": true,
    "reverb": true,
    "expression": true
  },
  "characteristics": [
    "Long sustains",
    "Dynamic expression",
    "Cinematic character"
  ],
  "workflow": {
    "useCase": "Cinematic and orchestral hardware",
    "steps": [
      "Long note length for sustains",
      "Velocity at 90 for dynamics",
      "Aftertouch for expression",
      "CC 11 for dynamics",
      "Clock sync for tempo"
    ],
    "tips": [
      "Perfect for film scores",
      "Express through dynamics",
      "Great for orchestral sounds"
    ]
  },
  "abTest": {
    "listenFor": "Cinematic control with expressive dynamics",
    "duration": "Full cinematic passage"
  }
}
```

---

## FILE: 02-Data\presets\genre\06-lofi-bitcrush.json

```json
{
  "name": "Lo-Fi Bitcrush MIDI",
  "genre": "hip-hop/rap",
  "mood": "dusty",
  "description": "MIDI setup for degraded, vintage hardware sounds",
  "parameters": {
    "channel": 3,
    "port": "MIDI",
    "clockSource": "Internal",
    "clockOut": false,
    "noteLength": "Short",
    "velocity": 80,
    "pitchBendRange": 1,
    "aftertouch": false,
    "midiCC": true,
    "thru": true,
    "syncToHost": true,
    "programChange": true,
    "randomCC": false
  },
  "workflow": {
    "useCase": "Lo-fi gear and degraded sounds",
    "steps": [
      "Lower velocity for worn sounds",
      "Minimal pitch bend for stability",
      "Program change for preset switching",
      "Short note length for glitchy feel",
      "No aftertouch for simple control"
    ],
    "troubleshooting": [
      { "issue": "Too clean", "fix": "Process audio, not MIDI" },
      { "issue": "Inconsistent feel", "fix": "Lower velocity variance" },
      { "issue": "Wrong character", "fix": "Check instrument selection" }
    ]
  },
  "abTest": {
    "listenFor": "Vintage character and feel",
    "duration": "Lo-fi chord progression"
  }
}
```

---

## FILE: 02-Data\presets\signature\dj-premier-sampling.json

```json
{
  "name": "DJ Premier MIDI",
  "producer": "DJ Premier",
  "description": "MIDI setup for sampling workflow with turntables and hardware",
  "reference": "N.Y. State of Mind, Nas Is Like",
  "parameters": {
    "channel": 1,
    "port": "MIDI",
    "clockSource": "External",
    "clockOut": false,
    "noteLength": "Default",
    "velocity": 100,
    "pitchBendRange": 0,
    "aftertouch": false,
    "midiCC": true,
    "thru": true,
    "syncToHost": false,
    "transport": true,
    "songPosition": true
  },
  "workflow": {
    "useCase": "Sampling and scratch-based production",
    "characteristics": [
      "External clock sync",
      "Transport control",
      "Simple, direct output"
    ],
    "steps": [
      "Set clock to External for sync",
      "Enable transport MIDI control",
      "Song position for location",
      "Thru for sample playback",
      "Minimal MIDI data for accuracy"
    ],
    "tips": [
      "Sync with turntable timecode",
      "Use for sample triggering",
      "Programmatic control of playback"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\hans-zimmer-epic.json

```json
{
  "name": "Hans Zimmer Epic",
  "producer": "Hans Zimmer",
  "description": "MIDI setup for cinematic orchestral control",
  "reference": "Inception, Dark Knight",
  "parameters": {
    "channel": 1,
    "port": "MIDI",
    "clockSource": "Internal",
    "clockOut": true,
    "noteLength": "Long",
    "velocity": 90,
    "aftertouch": true,
    "modWheel": true,
    "cc11": true,
    "sustain": true
  },
  "characteristics": [
    "Epic sweep control",
    "Dynamic expression",
    "Cinematic power"
  ],
  "workflow": {
    "useCase": "Cinematic orchestral performances",
    "signatureElements": [
      "Mod wheel for sweeps",
      "Aftertouch for expression",
      "Long sustains for drama"
    ],
    "steps": [
      "Mod wheel for dramatic sweeps",
      "Aftertouch for intensity",
      "Long note lengths for drama",
      "CC 11 for dynamics",
      "Clock sync for precision"
    ],
    "tips": [
      "Perfect for film scores",
      "Epic cinematic sweeps",
      "Dynamic control"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\jordan-rudess.json

```json
{
  "name": "Jordan Rudess",
  "producer": "Jordan Rudess",
  "description": "MIDI setup for expressive keyboard performances",
  "reference": "Dream Theater compositions",
  "parameters": {
    "channel": 1,
    "port": "MIDI",
    "clockSource": "Internal",
    "clockOut": false,
    "noteLength": "Default",
    "velocity": 100,
    "aftertouch": true,
    "modWheel": true,
    "pitchBend": true,
    "cc74": true,
    "cc1": true
  },
  "characteristics": [
    "Full expression",
    "Complex modulation",
    "Keyboard virtuosity"
  ],
  "workflow": {
    "useCase": "Expressive keyboard performances",
    "signatureElements": [
      "Full CC control",
      "Aftertouch expression",
      "Pitch bend for drama"
    ],
    "steps": [
      "Enable all CC messages",
      "Aftertouch for pressure",
      "Mod wheel for sweeps",
      "Pitch bend for expression",
      "CC 74 for filter"
    ],
    "tips": [
      "Maximum expression",
      "Great for virtuosos",
      "Full keyboard control"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\metro-boomin-midi.json

```json
{
  "name": "Metro Boomin MIDI",
  "producer": "Metro Boomin",
  "description": "MIDI setup for dark trap hardware control",
  "reference": "Harder, Creepin', Savage",
  "parameters": {
    "channel": 10,
    "port": "MIDI",
    "clockSource": "Internal",
    "clockOut": true,
    "noteLength": "Short",
    "velocity": 115,
    "programChange": true,
    "cc7": true
  },
  "characteristics": [
    "Aggressive velocity",
    "Drum-focused",
    "Dark character"
  ],
  "workflow": {
    "useCase": "Dark trap production with hardware",
    "signatureElements": [
      "High velocity for punch",
      "Clock sync for precision",
      "Program changes for kits"
    ],
    "steps": [
      "Channel 10 for drums",
      "High velocity for impact",
      "Quick note length for punch",
      "Program change for kit switching",
      "Clock sync for tight timing"
    ],
    "tips": [
      "Signature trap sound",
      "Tight timing",
      "Dark character"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\metro-boomin-trap.json

```json
{
  "name": "Metro Boomin MIDI Setup",
  "producer": "Metro Boomin",
  "description": "MIDI configuration for dark trap production with hardware",
  "reference": "Harder, Creepin', Savage",
  "parameters": {
    "channel": 10,
    "port": "MIDI",
    "clockSource": "Internal",
    "clockOut": true,
    "noteLength": "Medium",
    "velocity": 115,
    "pitchBendRange": 0,
    "aftertouch": false,
    "midiCC": true,
    "thru": true,
    "syncToHost": true,
    "programChange": true,
    "filterCC": false
  },
  "workflow": {
    "useCase": "Dark trap with hardware drum machines",
    "characteristics": [
      "Hard-hitting drum triggers",
      "Precise timing for 808s",
      "Minimal MIDI data for stability"
    ],
    "steps": [
      "Channel 10 for drum machine",
      "Higher velocity (115) for punch",
      "Clock out for sync",
      "Medium note length for 808 sustain",
      "Program change for kit switching"
    ],
    "tips": [
      "Use with TR-808 or similar",
      "Route 808 to bass channel",
      "Layer with sampled drums"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\timbaland-drums.json

```json
{
  "name": "Timbaland Drums MIDI",
  "producer": "Timbaland",
  "description": "MIDI configuration for unconventional drum programming",
  "reference": "Dirt Off Your Shoulder, Give It to Me",
  "parameters": {
    "channel": 10,
    "port": "MIDI",
    "clockSource": "Internal",
    "clockOut": true,
    "noteLength": "Short",
    "velocity": 100,
    "pitchBendRange": 0,
    "aftertouch": false,
    "midiCC": true,
    "thru": true,
    "syncToHost": true,
    "swing": true,
    "humanize": true
  },
  "workflow": {
    "useCase": "Unique, quantized drum patterns",
    "characteristics": [
      "Swing timing for groove",
      "Humanized velocities",
      "Short, staccato hits"
    ],
    "steps": [
      "Channel 10 for drums",
      "Short note length for tightness",
      "Enable swing for groove",
      "Humanize velocity for feel",
      "Clock sync for production"
    ],
    "tips": [
      "Program on-grid, add swing",
      "Mix short and normal lengths",
      "Layer unconventional sounds"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\zaytoven-keys.json

```json
{
  "name": "Zaytoven Keys MIDI",
  "producer": "Zaytoven",
  "description": "MIDI setup for live keyboard performance in trap production",
  "reference": "What They Want, Easy",
  "parameters": {
    "channel": 1,
    "port": "MIDI",
    "clockSource": "Internal",
    "clockOut": false,
    "noteLength": "Default",
    "velocity": 95,
    "pitchBendRange": 2,
    "aftertouch": true,
    "midiCC": true,
    "thru": true,
    "syncToHost": true,
    "modWheel": true,
    "sustainPedal": true,
    "volumeCC": 7
  },
  "workflow": {
    "useCase": "Live keyboard recording for trap",
    "characteristics": [
      "Natural keyboard feel",
      "Mod wheel for filter sweeps",
      "Sustain pedal expression"
    ],
    "steps": [
      "Channel 1 for main keyboard",
      "Moderate velocity (95)",
      "Mod wheel for filter movement",
      "Sustain for legato passages",
      "Aftertouch for additional expression"
    ],
    "tips": [
      "Record live for organic feel",
      "Use with vintage keys or plugins",
      "Layer multiple chord textures"
    ]
  }
}
```

---

## FILE: 02-Data\rules\midi-out-safety-rules.md

```markdown
# MIDI Out Safety Rules

## Connection Safety

### Port Selection
- ALWAYS verify port before sending MIDI
- Check device is powered on before connection
- Use proper MIDI cables (not audio)

### Channel Management
- Maximum 16 MIDI channels per port
- Assign unique channels per device
- Document all channel assignments

### Loop Prevention
- NEVER create MIDI feedback loops
- Disable MIDI thru if not needed
- Avoid MIDI-OX passthrough loops

## Data Transmission

### Note Safety
- Maximum 127 velocity value
- Valid notes: 0-127 (C-2 to G8)
- Never send velocity 0 as note on

### CC Message Limits
| CC Number | Function | Safety Note |
|-----------|----------|-------------|
| CC 0 | Bank Select | Use with MSB |
| CC 32 | Bank Select LSB | Use with CC 0 |
| CC 64 | Sustain Pedal | Can cause stuck notes |
| CC 121 | Reset All Controllers | Emergency reset |
| CC 123 | All Notes Off | Emergency cut |

### SysEx Safety
- Use manufacturer-specific SysEx only
- Verify device supports SysEx
- Back up before SysEx changes

## Timing Safety

### Latency Considerations
- MIDI has inherent latency (~1-5ms per device)
- Compensate for round-trip delay
- Monitor total system latency

### Clock Sync
| Mode | Use Case | Safety |
|------|----------|--------|
| Internal | Standalone | Always safe |
| External | DAW sync | Verify before playing |
| MIDI Clock | Vintage gear | Check tempo match |
| PPQ | High resolution | 96 PPQ minimum |

### Timing Drift
- Check sync every session
- Restart DAW if drift occurs
- Use dedicated MIDI interface

## Performance Safety

### CPU Usage
- MIDI Out uses minimal CPU
- Enable only needed outputs
- Disable unused ports

### Note Density
- Maximum 1000 notes per second
- Use throttling for complex patterns
- Quantize complex MIDI data

### Automation Safety
- CC automation can be resource-intensive
- Limit automation rate for smooth values
- Use last 8 bars for parameter locks

## Hardware Safety

### Device Communication
- NEVER force send during device boot
- Wait for device ready state
- Check device manual for MIDI specs

### Power Safety
- Disconnect MIDI before power cycling
- Hot-swap only if device supports
- Verify cable connections

### Device Protection
| Issue | Prevention |
|-------|------------|
| Stuck notes | Send All Notes Off (CC 123) |
| Wrong program | Verify bank select CCs |
| Data corruption | Use short SysEx messages |
| Locked device | Send Reset All (CC 121) |

## Common Mistakes to Avoid

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| Wrong channel | No response or wrong device | Double-check channel |
| No clock sync | Timing drift | Enable clock output |
| Feedback loop | Infinite notes | Disable thru when not needed |
| Velocity 127 constant | Unnatural dynamics | Use velocity curves |
| No note off | Stuck notes | Always send note off |

## Troubleshooting

### No Response
1. Check MIDI cable connection
2. Verify channel match
3. Check device power/on
4. Test with MIDI monitor

### Wrong Notes
1. Verify transpose settings
2. Check MIDI-OX mapping
3. Test with single note
4. Verify device note mapping

### Timing Issues
1. Enable clock output
2. Check buffer size
3. Restart DAW sync
4. Reduce MIDI complexity

### Stuck Notes
1. Send All Notes Off (CC 123)
2. Send Reset All Controllers (CC 121)
3. Force stop all playback
4. Check for stuck note-on messages

### Duplicate Messages
1. Disable MIDI thru
2. Check for duplicate routing
3. Remove extra MIDI Out plugins
4. Verify DAW MIDI settings

## FL Studio Integration

### MIDI Settings
1. Options > MIDI Settings
2. Enable output port
3. Set latency compensation
4. Test before session

### Multi-Port Setup
1. Document port assignments
2. Use unique channels per port
3. Label tracks with device name
4. Create template with setup

### Latency Compensation
1. Measure round-trip latency
2. Set in Preferences
3. Verify with audio recording
4. Adjust for hardware response

## Reference Charts

### GM Drum Channel
| Note | Drum Sound |
|------|------------|
| 35 | Kick 2 |
| 36 | Kick 1 |
| 38 | Snare 1 |
| 40 | Snare 2 |
| 42 | Hi-Hat Closed |
| 46 | Hi-Hat Open |
| 49 | Crash 1 |
| 51 | Ride 1 |

### Common CC Messages
| CC | Name | Typical Use |
|----|------|-------------|
| 1 | Mod Wheel | Vibrato/modulation |
| 7 | Volume | Level control |
| 10 | Pan | Stereo position |
| 11 | Expression | Dynamic level |
| 64 | Sustain | Pedal hold |
| 91 | Reverb | Send amount |
| 93 | Chorus | Effect depth |

### Emergency Reset Sequence
1. CC 121 - Reset All Controllers
2. CC 123 - All Notes Off
3. CC 120 - Local Control Off
4. CC 120 - Local Control On

```

---

## FILE: 03-Workflows\by-goal\02-multiple-devices.md

```markdown
# MIDI Out Multiple Devices Setup

## Overview

Controlling multiple MIDI devices requires careful channel and port management to avoid conflicts and ensure reliable communication.

---

## Channel Planning

### Standard Assignment
| Channel | Device Type | Example |
|---------|-------------|---------|
| 1-4 | Synths | Lead, pad, bass |
| 5-8 | Additional synths | Layers |
| 10 | Drum machine | GM drums |
| 11-16 | Other gear | Sequencers, samplers |

### Per-Port Allocation
| Port | Channels | Capacity |
|------|----------|----------|
| Port 1 | 1-16 | Full device |
| Port 2 | 1-16 | Secondary device |
| Port 3 | 1-16 | Tertiary device |

---

## Setup Process

### Step 1: Inventory
1. List all MIDI devices
2. Note channel capabilities
3. Check port availability
4. Plan assignments

### Step 2: Assignment
| Device | Port | Channel | Notes |
|--------|------|---------|-------|
| Main Synth | Port 1 | 1 | Lead sounds |
| Bass Synth | Port 1 | 2 | Bass sounds |
| Drum Machine | Port 1 | 10 | GM drums |
| Pad Synth | Port 2 | 1 | Pad sounds |
| Sampler | Port 3 | 1 | Samples |

### Step 3: Configuration
1. Set device channels in hardware
2. Configure FL Studio MIDI settings
3. Enable correct output ports
4. Test each device

---

## Common Setups

### Two Synths + Drum Machine
`\`\`
Port 1:
  Channel 1: Lead Synth
  Channel 2: Pad Synth  
  Channel 10: Drum Machine
`\`\`

### Synth + Drum Machine + Sampler
`\`\`
Port 1:
  Channel 1: Synth
  Channel 10: Drums
Port 2:
  Channel 1: Sampler
`\`\`

### Full Studio Setup
`\`\`
Port 1: Main Keyboard Synth (Channels 1-4)
Port 2: Drum Machine (Channel 10)
Port 3: Hardware Sequencer (Channel 1)
Port 4: Backup/Sampler (Channel 1)
`\`\`

---

## Troubleshooting

### No Response from Device
- Check port assignment
- Verify channel match
- Confirm power/on status
- Test cable

### Wrong Channel
- Device receiving on different channel
- Check device MIDI channel setting
- Match in FL Studio

### Conflicting Messages
- Multiple devices on same channel
- Reassign channels
- Use different ports

### Timing Issues
- MIDI thru chain causing delay
- Use direct connections
- Check clock sync

---

## Documentation Template

Record your setup:

| Device | Port | Channel | Function | Notes |
|--------|------|---------|----------|-------|
| | | | | |
| | | | | |
| | | | | |
| | | | | |

---

## Related Documentation

- [MIDI Fundamentals](../Concepts/01-midi-fundamentals.md)
- [MIDI Out Parameter Quick Reference](../Quick-Reference/parameter-quick-reference.md)
- [Hardware Control Workflow](../03-Workflows/by-goal/01-hardware-control.md)

```

---

## FILE: 03-Workflows\by-goal\INDEX.md

```markdown
# MIDI Out By-Goal Workflows Index

## Available Goal Workflows

| Goal | Description | Difficulty |
|------|-------------|------------|
| [Hardware Control](by-goal-workflows.md#goal-hardware-control) | Basic external device control | Beginner |
| [External Sync](by-goal-workflows.md#goal-external-sync) | DAW-to-hardware timing sync | Intermediate |
| [Drum Programming](by-goal-workflows.md#goal-drum-programming) | Trigger drum machines | Beginner |
| [Expressive Performance](by-goal-workflows.md#goal-expressive-performance) | Modulation and CC control | Intermediate |
| [Multiple Devices](by-goal-workflows.md#goal-multiple-devices) | Complex MIDI setups | Advanced |
| [Sampling Workflow](by-goal-workflows.md#goal-sampling-workflow) | Sample triggering and control | Intermediate |

## Quick Start by Need

| Need | Recommended Goal | Key Settings |
|------|-----------------|---------------|
| Control synth | Hardware Control | Match channel |
| Sync vintage gear | External Sync | Clock Source: External |
| Program drums | Drum Programming | Channel 10 |
| Expression | Expressive Performance | Enable CC/aftertouch |
| Complex setup | Multiple Devices | Document channels |
| Trigger samples | Sampling Workflow | Pattern note length |

## Goal to Device Mapping

| Device Type | Best Goal Workflow |
|-------------|-------------------|
| Synthesizer | Hardware Control or Expressive Performance |
| Drum Machine | Drum Programming |
| Vintage Sequencer | External Sync |
| Hardware Sampler | Sampling Workflow |
| Multiple Devices | Multiple Devices |

## Related Documentation

- [MIDI Out By-Instrument Workflows](02-Workflows/by-instrument/INDEX.md)
- [MIDI Out Genre Presets](../02-Data/presets/genre/INDEX.md)
- [MIDI Out Signature Presets](../02-Data/presets/signature/INDEX.md)
- [MIDI Out Safety Rules](../02-Data/rules/midi-out-safety-rules.md)

```

---

## FILE: 03-Workflows\by-goal\automating-vst-parameters.md

```markdown
# Workflow: Automating VST Parameters (The MIDI Bridge)

*Goal: Controlling "hidden" or hard-to-reach VST parameters using MIDI Out as an automation hub.*

## Vibe Mapping
- **Psychedelic:** ⭐⭐⭐⭐⭐ (Primary)
- **Upbeat:** ⭐⭐⭐⭐
- **Vibey:** ⭐⭐⭐

## 🚶 Step-by-Step Setup
1. **The Target (VST):**
   - Load your VST (e.g., Massive, Sylenth, Serum).
   - Click the gear icon (top left). In the "Settings" tab, look for **Input Port**. Set it to a unique number (e.g., **Port 20**).
2. **The Controller (MIDI Out):**
   - Load **MIDI Out**.
   - Set its **Port** to **20**.
   - Now, notes in MIDI Out will play the VST.
3. **The Map (CC Assignment):**
   - Research your VST's "MIDI Implementation Chart" (usually at the back of its manual).
   - *Example:* If CC #11 controls the "Brightness" in your VST.
4. **The Configure:**
   - In MIDI Out, Right-Click Knob 1. Select **Configure**.
   - Name it "BRIGHTNESS."
   - Set **Controller #** to **11**.
   - Click OK.
5. **The Automation:**
   - Right-click your new "BRIGHTNESS" knob and select **Create automation clip**.
   - *Result:* You are now automating that "hidden" parameter through the MIDI Out bridge.

## 🔄 Variations
- **The "Macro" Hub:** Map all 9 knobs on Page 1 to the most important parameters of your VST. You now have a "Custom Dashboard" for that specific plugin.
- **The "Patcher" Setup:** Place both the VST and MIDI Out inside a **Patcher** instance. This allows you to save the whole mapping as one single preset.

## ⚠️ Pitfalls & Fixes
- **Problem:** Knob is moving but nothing is happening.
- **Fix:** Ensure the VST is actually "listening" to MIDI CC. Some VSTs require you to enable "MIDI Learn" or "External MIDI Control" in their internal options.
- **Problem:** Port conflicts.
- **Fix:** Never use the same Input Port for two different VSTs unless you want them to play the exact same notes at the same time.

## 🎚️ Automation Ideas
- **Texture Morph:** Automate three different CC knobs at once to morph a sound from a pluck to a pad.
- **Vibrato Pulse:** Map a knob to **CC 1** (Mod Wheel) and draw a "pulsing" automation clip for rhythmic vibrato.

```

---

## FILE: 03-Workflows\by-goal\by-goal-workflows.md

```markdown
# MIDI Out By-Goal Workflows

## Goal: Hardware Control

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel | 1-16 | Match device |
| Port | Hardware port | Physical output |
| Clock Source | Internal | Host sync |
| Clock Out | True/False | Sync to device |
| Note Length | Default | Standard timing |
| Velocity | 100 | Default strength |

### Steps
1. Identify correct MIDI port
2. Match channel to device
3. Set clock source
4. Configure note length
5. Test communication
6. Verify response

### Tips
- Document channel assignments
- Test all notes before session
- Use MIDI monitor for debugging
- Label cables and ports

---

## Goal: External Sync

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel | 1 | Primary channel |
| Port | Hardware port | Physical output |
| Clock Source | External | Slave mode |
| Clock Out | True | Pass clock |
| Transport | True | Control playback |
| Song Position | True | Location sync |

### Steps
1. Set MIDI Out clock to External
2. Configure device to receive sync
3. Enable transport control
4. Test start/stop sync
5. Verify location sync
6. Monitor for drift

### Tips
- External sync requires setup
- Monitor for timing drift
- Restart sync if issues
- Document sync chain

---

## Goal: Drum Programming

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel | 10 | GM drum channel |
| Port | Hardware port | Drum machine output |
| Clock Out | True | Sync slave devices |
| Note Length | Short | Tight hits |
| Velocity | 110 | Punchy response |
| Program Change | True | Kit switching |

### Steps
1. Set channel to 10 (GM drums)
2. Connect to drum machine
3. Enable clock output
4. Program notes
5. Use program change for kits
6. Test trigger response

### Tips
- Channel 10 is standard drums
- Map notes to sounds
- Velocity affects intensity
- Program change for kits

---

## Goal: Expressive Performance

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel | 1-4 | Synth channels |
| Aftertouch | True | Channel pressure |
| Mod Wheel | True | CC 1 |
| Sustain | True | CC 64 |
| Expression | True | CC 11 |

### Steps
1. Enable expression controls
2. Configure synth to receive
3. Map CC messages
4. Test modulation
5. Record performance
6. Edit automation

### Tips
- Synth must support CC
- Document CC mappings
- Record live for feel
- Edit for precision

---

## Goal: Multiple Devices

### Configuration
| Device | Channel | Port |
|---------|---------|------|
| Synth 1 | 1 | Port 1 |
| Synth 2 | 2 | Port 1 |
| Drum Machine | 10 | Port 2 |
| Sequencer | 1 | Port 3 |

### Steps
1. Assign unique channels
2. Route to correct ports
3. Document assignments
4. Test each device
5. Monitor performance
6. Troubleshoot conflicts

### Tips
- Maximum 16 channels per port
- Document everything
- Test before recording
- Use labeled cables

---

## Goal: Sampling Workflow

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel | 1-16 | Flexible |
| Port | Hardware port | Sampler output |
| Clock Source | External or Internal | Per setup |
| Note Length | Pattern | Sample length |
| Transport | True | Transport control |
| Thru | True | Pass-through |

### Steps
1. Configure MIDI output
2. Set up sample triggering
3. Program patterns
4. Use transport control
5. Record samples
6. Edit and process

### Tips
- Precise timing important
- Use quantize for accuracy
- Record multiple takes
- Edit for perfection

```

---

## FILE: 03-Workflows\by-goal\custom-midi-dashboard.md

```markdown
# Workflow: Custom MIDI Dashboard (Personal UI)

*Goal: Designing a custom, labeled control surface within MIDI Out to manage a specific hardware unit or complex VST chain.*

## Vibe Mapping
- **Vibey:** ⭐⭐⭐⭐⭐
- **Upbeat:** ⭐⭐⭐⭐
- **Jazzy:** ⭐⭐⭐⭐

## 🚶 Step-by-Step Setup
1. **The Goal:** Choose one synth (Hardware or VST) that you use often.
2. **The Research:** Find its MIDI CC list. Pick the **9 most important controls** (e.g. Cutoff, Res, Attack, Release, FX Mix, etc.).
3. **The Layout (Page 1):**
   - Knob 1: "CUTOFF" (CC 74)
   - Knob 2: "RESO" (CC 71)
   - Knob 3: "DRIVE" (CC 13)
   - Knob 4: "ATTACK" (CC 73)
   - Knob 5: "RELEASE" (CC 72)
   - ...and so on.
4. **The Page Strategy:**
   - Use **Page 1** for "Performance Controls."
   - Use **Page 2** for "Effects."
   - Use **Page 3** for "Oscillator Tuning."
5. **The Save:**
   - Go to the Channel Options (small triangle) and select **Save preset as...**
   - Name it "DASHBOARD - [Instrument Name]."
   - *Result:* Next time you load this preset, all your labels and CC numbers are ready to go. No more looking at manuals!

## 🔄 Variations
- **The "Patcher" Integration:** Link these MIDI Out knobs to the Surface knobs in Patcher for a beautiful, custom graphical interface.
- **The "Global Remote":** Use MIDI Out to control FL Studio itself by linking the MIDI Out knobs to other FL parameters (using internal MIDI loopback software like loopMIDI).

## ⚠️ Pitfalls & Fixes
- **Problem:** Labels are too long.
- **Fix:** Use the **Short Name** field in the Configure window. It's limited but cleaner for the UI.
- **Problem:** Wrong Bank/Patch on load.
- **Fix:** Ensure the "Update on selection" button is OFF if you only want the knobs to load, not the program change.

## 🎚️ Automation Ideas
- **One-Clip Build:** Group all "Filter" and "FX" knobs from your dashboard into one single automation clip using the **Link to controller -> Link to same clip** trick.
- **Visual Performance:** Record a performance where you "tweak" the knobs on your custom dashboard while watching the target plugin move in sync.

```

---

## FILE: 03-Workflows\by-goal\external-synth-integration.md

```markdown
# Workflow: External Synth Integration (Hardware Bridge)

*Goal: Connecting a physical hardware synthesizer to FL Studio so you can play and automate it just like a plugin.*

## Vibe Mapping
- **Vibey:** ⭐⭐⭐⭐⭐ (Primary)
- **Moody:** ⭐⭐⭐⭐
- **Jazzy:** ⭐⭐⭐⭐

## 🚶 Step-by-Step Setup
1. **The Physical Connection:**
   - Plug the **MIDI OUT** of your computer's interface into the **MIDI IN** of the synth.
   - Plug the **Audio Output** of the synth into the **Audio Input** of your computer's interface.
2. **The FL MIDI Config:**
   - Go to `Options -> MIDI Settings`.
   - Find your interface in the "Output" list.
   - Set the **Port** number (e.g., **Port 1**).
3. **The MIDI Out Setup:**
   - Load **MIDI Out** in the Channel Rack.
   - Set its **Port** to **1**.
   - Set **Channel** to **1** (unless your synth is set to a different one).
4. **The Audio In (Mixer):**
   - Go to an empty Mixer track (e.g., Track 10).
   - Label it "SYNTH AUDIO."
   - Select the correct physical **Input** from your interface (e.g., Input 1/2).
   - *Result:* You can now play the MIDI Out Piano Roll and hear the synth's audio coming into the Mixer.
5. **Managing Latency:**
   - Because hardware takes time to process, you may hear a delay.
   - Go to the Mixer track "SYNTH AUDIO."
   - Click the "Track Latency" icon (the small clock) at the bottom.
   - Use **Manual Offset** to shift the audio until it matches the project metronome.

## 🔄 Variations
- **The "Multitimbral" Beast:** If using a workstation (like a Fantom or Montage), load 4 MIDI Out instances, all on Port 1, but using Channels 1, 2, 3, and 4 to play 4 different sounds at once.
- **The "Daisy Chain":** Use the MIDI THRU port on your first synth to connect a second synth. Give the second synth a different MIDI Channel (e.g. Channel 2).

## ⚠️ Pitfalls & Fixes
- **Problem:** No sound.
- **Fix:** Ensure the synth's local control is OFF (if it has a keyboard) and check the Audio Input in the Mixer.
- **Problem:** Stuck notes.
- **Fix:** Click the **Reset** button in the MIDI Out UI to send an "All Notes Off" message.

## 🎚️ Automation Ideas
- **Filter Sweep:** Configure Knob 1 to **CC 74**. Right-click and "Create automation clip." You are now automating the real analog filter of your hardware!
- **Patch Flip:** Automate the **Patch** number to change sounds instantly during a song transition.

```

---

## FILE: 03-Workflows\by-instrument\01-hardware-synth-workflow.md

```markdown
# Hardware Synth Workflow

## Goal
Configure MIDI Out for controlling external hardware synthesizers.

## Plugin Settings

### Basic Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel | 1-4 | Synth channel assignment |
| Port | Hardware Port | Physical MIDI output |
| Clock Source | Internal | Host tempo sync |
| Clock Out | True | Sync external gear |

### Note Settings
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Note Length | Default | Standard note duration |
| Velocity | 100 | Default hit strength |
| Pitch Bend Range | 12 | Two octave pitch bend |
| Transpose | 0 | Standard tuning |

### Expression
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Aftertouch | True | Channel pressure |
| Mod Wheel | True | CC 1 for modulation |
| Sustain | True | CC 64 pedal |
| Volume | True | CC 7 volume |

## Workflow Steps

### Stage 1: Port Setup
1. Identify correct MIDI port
2. Check cable connection
3. Verify synth receives MIDI
4. Set synth to same channel

### Stage 2: Channel Assignment
1. Assign unique channel per synth
2. Avoid channel 10 (drums)
3. Document assignments
4. Label in FL Studio

### Stage 3: Timing Configuration
1. Internal clock for standalone
2. External if synced to DAW
3. Enable clock out for multi-gear
4. Set tempo in FL Studio

### Stage 4: Expression Setup
1. Enable aftertouch on synth
2. Map mod wheel in synth
3. Connect sustain pedal
4. Test CC messages

## Genre Applications

### EDM Synth Lead
| Setting | Value |
|---------|-------|
| Channel | 1 |
| Velocity | 100 |
| Pitch Bend | 12 |
| Aftertouch | True |
| Mod Wheel | True |

### R&B Keys
| Setting | Value |
|---------|-------|
| Channel | 2 |
| Velocity | 90 |
| Pitch Bend | 2 |
| Aftertouch | True |
| Sustain | True |

### Trap 808
| Setting | Value |
|---------|-------|
| Channel | 3 |
| Velocity | 115 |
| Pitch Bend | 0 |
| Note Length | Long |
| Portamento | True |

## A/B Testing Method

### Test Points
1. Verify note reception
2. Check velocity sensitivity
3. Test modulation response
4. Verify sync timing

### Quick Tests
1. Play single note, listen for response
2. Bend pitch, verify range
3. Press sustain, test release
4. Tap tempo, check sync

## Quick Fixes

| Issue | Solution |
|-------|----------|
| No sound | Check channel match |
| Wrong notes | Verify transpose |
| Late notes | Reduce MIDI output delay |
| Stuck notes | Enable note off |
| No sync | Enable clock out |

## FL Studio Tips

### MIDI Device Setup
1. Options > MIDI Settings
2. Enable output port
3. Set latency compensation
4. Test before session

### Multi-Synth Setup
1. Channel 1-4 for 4 synths
2. MIDI channel filtering
3. Separate tracks per channel
4. Record automation separately

```

---

## FILE: 03-Workflows\by-instrument\02-drum-machine-workflow.md

```markdown
# Drum Machine Workflow

## Goal
Configure MIDI Out for triggering drum machines and samplers.

## Plugin Settings

### Standard Drum Settings
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel | 10 | GM drum channel |
| Port | Hardware Port | Physical output |
| Clock Source | Internal | Tempo sync |
| Clock Out | True | Sync slave devices |

### Drum-Specific
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Note Length | Short | Tight hits |
| Velocity | 110 | Punchy response |
| Pitch Bend Range | 0 | No pitch change |
| Aftertouch | False | Not used for drums |

### Drum Machine Features
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Program Change | True | Kit switching |
| Bank Select | True | Bank selection |
| MIDI Thru | True | Pass-through |
| Note Off | True | Clean releases |

## Workflow Steps

### Stage 1: Channel Setup
1. Set MIDI channel to 10
2. Verify drum machine receives
3. Match drum machine channel
4. Test kick trigger

### Stage 2: Note Mapping
1. GM drum map standard
2. Verify kick on note 36
3. Verify snare on note 38
4. Map custom sounds as needed

### Stage 3: Velocity Tuning
1. Default velocity 110
2. Adjust per sound:
   - Kick: 115-120
   - Snare: 100-110
   - Hi-hats: 90-100
3. Program velocity variations

### Stage 4: Clock Sync
1. Enable clock out
2. Set drum machine to MIDI sync
3. Verify tempo matches
4. Test start/stop sync

## Genre Applications

### Trap Drums
| Setting | Value |
|---------|-------|
| Channel | 10 |
| Velocity | 115 |
| Note Length | Short |
| Clock Out | True |
| 808 tuning | Via program change |

### Boom Bap Drums
| Setting | Value |
|---------|-------|
| Channel | 10 |
| Velocity | 100 |
| Note Length | Medium |
| Swing | 55% |
| Clock Out | True |

### EDM Drums
| Setting | Value |
|---------|-------|
| Channel | 10 |
| Velocity | 110 |
| Note Length | Short |
| Clock Out | True |
| Quantize | 100% |

## A/B Testing Method

### Drum Trigger Test
1. Play kick pattern
2. Listen for consistent hits
3. Check ghost notes
4. Test rimshots

### Sync Test
1. Start FL Studio playback
2. Verify drum machine starts
3. Stop, verify sync stop
4. Check tempo accuracy

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Wrong sounds | Check note-to-sound mapping |
| Late hits | Reduce output delay |
| No sync | Enable clock out on MIDI Out |
| Stuck notes | Enable note off |
| Velocity too hard | Reduce to 100 |

## FL Studio Tips

### Pattern-Based Workflow
1. Program drums in piano roll
2. Send via MIDI Out to drum machine
3. Record audio back to FL
4. Mix with other elements

### Multi-Drum Setup
1. Channel 10 for main drums
2. Channel 11-16 for extras
3. Program variations
4. Layer for depth

### Velocity Programming
1. Ghost notes: velocity 50-60
2. Main hits: velocity 100-120
3. Accents: velocity 120-127
4. Humanize for feel

```

---

## FILE: 03-Workflows\by-instrument\03-external-sequencer-workflow.md

```markdown
# External Sequencer Workflow

## Goal
Configure MIDI Out for syncing with vintage hardware sequencers.

## Plugin Settings

### Sync Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel | 1-16 | Programmable |
| Port | Hardware Port | Physical output |
| Clock Source | External | Slave to hardware |
| Clock Out | True | Pass sync |

### Transport Control
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Transport | True | Start/Stop/Cont |
| Song Position | True | Location pointer |
| Song Select | False | Not commonly used |
| MIDI Thru | True | Pass-through |

### Timing
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Note Length | Default | As programmed |
| Latency | Compensated | Round-trip |
| Swing | As needed | Groove setting |
| Quantize | As needed | Timing resolution |

## Workflow Steps

### Stage 1: Clock Setup
1. Set MIDI Out clock to External
2. Set hardware sequencer to MIDI sync
3. Enable song position
4. Verify tempo transmission

### Stage 2: Transport Setup
1. Enable transport MIDI
2. Configure hardware receive
3. Test start/stop
4. Verify continue

### Stage 3: Song Position
1. Enable song position
2. Set hardware to receive SP
3. Test jump locations
4. Verify bar accuracy

### Stage 4: Thru Routing
1. Enable MIDI thru
2. Route incoming to output
3. Test pass-through
4. Use for loop sync

## Common Hardware

### Roland MC-303/808
| Setting | Value |
|---------|-------|
| Channel | 1 |
| Clock | External |
| Transport | True |
| Song Position | True |

### Akai MPC Series
| Setting | Value |
|---------|-------|
| Channel | 1 |
| Clock | MIDI |
| Transport | True |
| Song Position | True |

### Elektron Devices
| Setting | Value |
|---------|-------|
| Channel | 1 |
| Clock | External |
| Transport | True |
| Song Position | True |

## A/B Testing Method

### Sync Test
1. Start both devices
2. Verify tight sync
3. Stop, restart
4. Check re-sync speed

### Position Test
1. Set song position
2. Verify hardware jumps
3. Test multiple locations
4. Verify bar accuracy

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Sync drift | Enable clock out on MIDI Out |
| Wrong start | Verify transport CCs |
| Position error | Enable song position |
| No data | Check cable, port settings |

## FL Studio Tips

### Latency Compensation
1. Measure round-trip latency
2. Set in MIDI settings
3. Verify with audio recording
4. Adjust as needed

### Multiple Devices
1. Cascade sync clock
2. Master clock to first device
3. Thru to second, etc.
4. Document chain order

### Performance Setup
1. Pre-program sequences
2. Use transport for switching
3. Mute tracks via MIDI CC
4. Program changes for sounds

```

---

## FILE: 03-Workflows\by-instrument\04-modulation-workflow.md

```markdown
# Modulation Control Workflow

## Goal
Configure MIDI Out for expressive modulation control of hardware.

## Plugin Settings

### CC Message Setup
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mod Wheel | CC 1 | Vibrato/modulation |
| Volume | CC 7 | Volume control |
| Pan | CC 10 | Stereo position |
| Expression | CC 11 | Dynamic level |

### Advanced Modulation
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Breath | CC 2 | Wind controller |
| Foot | CC 4 | Pedal control |
| Resonance | CC 71 | Filter resonance |
| Cutoff | CC 74 | Filter cutoff |

### NRPN Setup
| Parameter | Value | Purpose |
|-----------|-------|---------|
| NRPN | True | Parameter-specific |
| MSB | CC 99 | NRPN MSB |
| LSB | CC 98 | NRPN LSB |
| Data Entry | CC 6 | Value change |

## Workflow Steps

### Stage 1: CC Mapping
1. Identify synth CC assignments
2. Enable CC in MIDI Out
3. Map automation to CC
4. Test single CC

### Stage 2: Automation
1. Draw automation in playlist
2. Link to MIDI Out CC
3. Test smooth transitions
4. Verify hardware response

### Stage 3: NRPN Routing
1. Enable NRPN
2. Set MSB/LSB for parameter
3. Test data entry
4. Automate NRPN values

### Stage 4: Expression Setup
1. Set up expression pedal
2. Map to CC 4 or 11
3. Test sweep range
4. Configure min/max values

## Common CC Mappings

### Filter Sweep
| CC | Value | Purpose |
|----|-------|---------|
| CC 74 | Filter Cutoff | Timbre sweep |
| CC 71 | Resonance | Emphasis control |
| CC 91 | Reverb | Send amount |
| CC 93 | Chorus | Effect depth |

### Volume Dynamics
| CC | Value | Purpose |
|----|-------|---------|
| CC 7 | Volume | Master volume |
| CC 11 | Expression | Dynamic range |
| CC 64 | Sustain | Pedal hold |
| CC 65 | Portamento | Glide control |

## Genre Applications

### EDM Filter Sweeps
| CC | Purpose |
|----|---------|
| CC 74 | Main filter cutoff |
| CC 91 | Reverb mix |
| CC 1 | Mod wheel LFO |
| CC 77 | Filter resonance |

### R&B Expression
| CC | Purpose |
|----|---------|
| CC 11 | Expression pedal |
| CC 7 | Volume swells |
| CC 1 | Vibrato depth |
| CC 71 | String resonance |

### Trap 808 Slide
| CC | Purpose |
|----|---------|
| CC 65 | Portamento on/off |
| CC 5 | Portamento time |
| CC 1 | Pitch bend range |
| CC 64 | Sustain hold |

## A/B Testing Method

### Modulation Test
1. Automate single CC
2. Verify smooth response
3. Check range limits
4. Test hardware interpretation

### NRPN Test
1. Set specific NRPN
2. Change value
3. Verify parameter change
4. Test automation recording

## Quick Fixes

| Issue | Solution |
|-------|----------|
| No modulation | Verify CC enabled |
| Wrong parameter | Check synth CC chart |
| Choppy automation | Increase automation rate |
| Stuck value | Check CC reset |

## FL Studio Tips

### Automation Drawing
1. Use smooth line tool
2. Right-click for automation
3. Link to MIDI Out CC
4. Test before recording

### Multiple Parameters
1. Use different CCs per parameter
2. Document CC assignments
3. Create CC templates
4. Use MIDI OX for mapping

### Performance Automation
1. Record live modulation
2. Use MIDI controller
3. Capture expression moves
4. Edit for precision

```

---

## FILE: 03-Workflows\by-instrument\INDEX.md

```markdown
# MIDI Out By-Instrument Workflow Index

## Available Workflows

| # | Workflow | Description | Best For |
|---|----------|-------------|----------|
| 01 | [Hardware Synth](01-hardware-synth-workflow.md) | External synth control | Synth leads, basses, pads |
| 02 | [Drum Machine](02-drum-machine-workflow.md) | Drum machine triggering | 808s, MPC, TR-series |
| 03 | [External Sequencer](03-external-sequencer-workflow.md) | Vintage sequencer sync | MC-303, MPC, Elektron |
| 04 | [Modulation Control](04-modulation-workflow.md) | CC and NRPN control | Expression, filter sweeps |

## Quick Reference by Goal

### Synth Control
1. [Hardware Synth](01-hardware-synth-workflow.md) - Primary setup
2. [Modulation Control](04-modulation-workflow.md) - Expression

### Drum Programming
1. [Drum Machine](02-drum-machine-workflow.md) - Main workflow
2. [Hardware Synth](01-hardware-synth-workflow.md) - Layering

### Vintage Hardware
1. [External Sequencer](03-external-sequencer-workflow.md) - Sync
2. [Hardware Synth](01-hardware-synth-workflow.md) - Sound control

## Quick Start by Genre

| Genre | Primary Workflow | Key Settings |
|-------|------------------|---------------|
| Hip-Hop | Drum Machine | Channel 10, Velocity 115 |
| Trap | Hardware Synth + Drum Machine | 808 control, mod sweeps |
| R&B | Hardware Synth + Modulation | Expression, aftertouch |
| EDM | Hardware Synth | Filter CC, clock sync |
| Lo-Fi | External Sequencer | Swing, humanize |

## Related Documentation

- [MIDI Out Genre Presets](02-Data/presets/genre/INDEX.md)
- [MIDI Out Signature Presets](02-Data/presets/signature/INDEX.md)
- [MIDI Out Safety Rules](02-Data/rules/midi-out-safety-rules.md)

```

---

## FILE: 04-Reference\latency-offset-calculations.md

```markdown
# Technical Reference: Latency Offset Calculations

Ensuring 100% rhythmic alignment when using MIDI Out with hardware. [SRC: IL-MAN]

## 1. The Latency Chain
When you use MIDI Out, there are three types of delay:
1. **MIDI Transmission Delay:** The time it takes for data to travel through the cable (~1ms).
2. **Hardware Processing Delay:** The time it takes for your synth to turn that MIDI into sound (varies, ~5-20ms).
3. **Audio Interface Buffer:** The time it takes for the synth's audio to travel back into your DAW.

## 2. How to Measure Offset
To get perfectly timed hardware recordings:
1. Load a simple "Click" or "Blip" sound into your hardware synth.
2. In the FL Piano Roll, place a note exactly on the start of every bar.
3. Record the audio into an Edison or a Playlist track.
4. **Compare:** Zoom in on the recorded waveform. Look at the distance between the bar line and the start of the audio peak.
5. **The Math:** If the peak is **450 samples** late, you need to compensate for that.

## 3. Applying the Fix
There are two ways to fix this in FL Studio:

### A. The "Manual Offset" Method (Preferred)
1. Go to the Mixer track where the hardware audio is coming in.
2. Click the **Track Latency** (clock icon) at the bottom.
3. Select **Set in ms...** (or samples).
4. Enter the amount you measured (e.g., -15ms).
- *Note:* Use a negative value to shift the audio "back in time" to match the grid.

### B. The "PDC" Method
If you have **Automatic PDC** (Plugin Delay Compensation) enabled, FL will try to handle this, but it often fails with external hardware because FL doesn't know how slow your hardware synth is. Manual offset is always safer for hardware.

---

## 4. MIDI Clock Sync Latency
If you are using **Master Sync** to drive a hardware sequencer or arpeggiator:
- Go to `Options -> MIDI Settings`.
- Select your Output device.
- Look for **Synchronization Offset**.
- Adjust this value (usually a small negative number) until the hardware sequencer hits at the same time as the FL Studio metronome.

---
*For a quick guide on connecting devices, see the [01-Learning/Quick-Reference/midi-port-vs-channel.md](../01-Learning/Quick-Reference/midi-port-vs-channel.md) guide.*

```

---

