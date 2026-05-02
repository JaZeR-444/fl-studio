# Effector - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Effector - Performance FX Tool

`\`\`
███████╗███████╗███████╗███████╗ ██████╗████████╗ ██████╗ ██████╗ 
██╔════╝██╔════╝██╔════╝██╔════╝██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗
█████╗  █████╗  █████╗  █████╗  ██║        ██║   ██║   ██║██████╔╝
██╔══╝  ██╔══╝  ██╔══╝  ██╔══╝  ██║        ██║   ██║   ██║██╔══██╗
███████╗██║     ██║     ███████╗╚██████╗   ██║   ╚██████╔╝██║  ██║
╚══════╝╚═╝     ╚═╝     ╚══════╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
`\`\`

**Plugin Type:** Multi-Effect Performance Tool
**Category:** Effect / Performance / Live
**Official Manual:** [Image-Line Effector Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Effector.htm)

---

## 🎯 What is Effector?

Effector is a performance-oriented multi-effect plugin inspired by hardware like the Korg Kaoss Pad. It provides **12 different effects** (Distortion, Lo-Fi, Flanger, Phaser, Filter, Delay, Reverb, Stereo, Trans, Grain, Vox, Ring) that are controlled via a central **X/Y Pad**. It is designed for live manipulation, automation clips, and quick "punch-in" effects on the master or bus channels.

**Key Capabilities:**
- **12 Effect Algorithms:** Instant access to essential modulation and time-based FX.
- **X/Y Control:** Simultaneous control of two parameters per effect (e.g., Cutoff + Resonance).
- **Performance Mode:** Designed for smooth switching and automation.
- **Modulation:** Built-in LFO for parameter movement.
- **Bypass:** Easy "Dry/Wet" lever for momentary engagement.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **xy-parameter-mapping.md** (What X and Y do for each effect)
3. Create **parameter-cheat-sheet.md**
4. Load "Filter" mode and drag the X/Y pad to hear a filter sweep.

### For Live Performers:
1. Study **kaoss-pad-style-routing.md**
2. Review **automating-effect-switching.md**
3. Learn **tempo-synced-gating-trans.md**

### For Lo-Fi Producers:
1. Study **lo-fi-bitcrushing-workflow.md**
2. Review **grain-stutter-fx.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Effect Grid:** 12 buttons.
  - **X/Y Pad:** The main controller.
  - **Bypass Lever:** Bottom right switch.
  - **Gain:** Input/Output.

- [ ] **xy-parameter-mapping.md**
  - **Filter:** X=Cutoff, Y=Resonance.
  - **Delay:** X=Feedback, Y=Time.
  - **Lo-Fi:** X=Bitrate, Y=Sample Rate.
  - (Document all 12).

#### 02-Data/parameters/
- [ ] **effector-fx-list.json**
  `\`\`json
  {
    "plugin_name": "Effector",
    "effects": ["Distortion", "Lo-Fi", "Flanger", "Phaser", "Filter", "Delay", "Reverb", "Stereo", "Trans", "Grain", "Vox", "Ring"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **beat-repeat-stutter.md**
  - Selecting "Grain" mode.
  - Using X to control grain size (speed).
  - Automating the Bypass lever for momentary fills.

- [ ] **dj-filter-sweep.md**
  - Selecting "Filter" mode.
  - Automating X/Y for build-ups.

- [ ] **vocal-formant-morphing.md**
  - Selecting "Vox" mode.
  - Moving the pad to create vowel sounds (A-E-I-O-U).

#### 03-Workflows/by-context/
- [ ] **live-set-master-fx.md**
- [ ] **transition-impact-chain.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **tempo-sync-behavior.md**
  - Which effects sync to BPM? (Delay, Trans, Grain).

---

## 🔬 Research Framework

### Phase 1: The Twelve (Week 1)
**Goal:** Sonic Palette

**Tasks:**
1. Test every single effect on a drum loop
2. Document what X and Y do for each one
3. Find the "Trans" effect (Trance Gate) and sync it
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Can I use multiple effects at once? (No, only one at a time per instance).
- Does the Reverb tail cut off when I bypass? (Check "Bypass" behavior).

### Phase 2: Performance (Week 2)
**Goal:** Automation

**Tasks:**
1. Automate the "Effect Type" selector to switch FX mid-song
2. Record X/Y movement
3. Create beat-repeat-stutter.md

---

## 📊 Plugin Specifications to Document

### Engine
- Latency (Zero)
- Smoothing (For X/Y movement)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it silent? (Check Input Gain or Filter position).
2. How to reset the pad? (There isn't a reset button, drag to default).

---

## 🔗 Cross-Reference with Other Plugins

Effector is often used with:
- **ZGameEditor Visualizer** (Visualizing the X/Y movement)
- **Control Surface** (Remote control)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Effector/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── xy-parameter-mapping.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── effector-fx-list.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── beat-repeat-stutter.md
│   │   └── dj-filter-sweep.md
│
└── 04-Reference/
    └── tempo-sync-behavior.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Effector Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Effector.htm)
- [Effector Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Effector_tutorials.htm)
- [Effector Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+effector+tutorial)

### Community Resources
- [Effector Subreddit](https://www.reddit.com/r/FL_Studio/search?q=effector&restrict_sr=1)
- [Effector User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Effector Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Performance Effects Processing" - Understanding real-time effect manipulation
- "X/Y Control Techniques" - Mastering two-dimensional parameter control
- "Live Performance FX" - Using effects in live performance scenarios

### Advanced Techniques
- **X/Y Pad Automation:** Recording and editing pad movements
- **Effect Switching:** Smooth transitions between different effects
- **Performance Mapping:** Using external controllers for X/Y control

---

## 📚 In-Depth Technical Analysis

### Effect Algorithms
Effector provides 12 different effect algorithms, each with unique X/Y parameter mappings:

**Distortion:**
- X: Drive/Amount
- Y: Tone/Character
- Creates harmonic saturation and overdrive effects
- Useful for adding grit and character to sounds
- Can range from subtle warmth to aggressive distortion

**Lo-Fi:**
- X: Bit Depth Reduction
- Y: Sample Rate Reduction
- Emulates vintage digital equipment
- Creates nostalgic, degraded audio textures
- Adds quantization noise and artifacts

**Flanger:**
- X: Feedback/Intensity
- Y: Rate/Speed
- Creates jet-plane swooshing effects
- Uses short delay times with modulation
- Classic modulation effect for movement

**Phaser:**
- X: Feedback/Intensity
- Y: Rate/Speed
- Creates whooshing, sweeping effects
- Uses all-pass filters for phase shifting
- Warmer, more organic than flanger

**Filter:**
- X: Cutoff Frequency
- Y: Resonance/Peak
- Classic low-pass, high-pass, or band-pass filtering
- Essential for tone shaping
- Can create dramatic sweeps and movements

**Delay:**
- X: Feedback/Repeats
- Y: Time/Delay Amount
- Time-based echo effects
- Can sync to project tempo
- Creates space and depth

**Reverb:**
- X: Size/Room Type
- Y: Decay/Time
- Simulates acoustic spaces
- Adds depth and dimension
- Can range from small rooms to large halls

**Stereo:**
- X: Width/Separation
- Y: Position/Placement
- Controls stereo field characteristics
- Adjusts left/right balance and width
- Essential for spatial positioning

**Trans (Trance Gate):**
- X: Speed/Gate Rate
- Y: Depth/Intensity
- Creates rhythmic gating effects
- Popular in trance and electronic music
- Can sync to project tempo

**Grain:**
- X: Grain Size/Time
- Y: Density/Pitch
- Granular synthesis effects
- Creates stutter and time-stretching
- Can sync to project tempo

**Vox:**
- X: Vowel Formant (A-E-I-O-U)
- Y: Character/Resonance
- Creates vocal-like formant filtering
- Simulates vowel sounds
- Useful for robotic or vocal effects

**Ring:**
- X: Frequency/Rate
- Y: Depth/Intensity
- Ring modulation effects
- Creates metallic, bell-like tones
- Classic sci-fi sound design effect

### X/Y Control System
The X/Y pad provides intuitive two-dimensional control:
- **X Axis:** Typically controls primary parameter
- **Y Axis:** Typically controls secondary parameter
- **Smooth Movement:** Provides continuous parameter changes
- **Real-time Performance:** Allows for expressive manipulation
- **Automation Recording:** Can record pad movements

### Performance Features
Effector is designed for live performance:
- **Bypass Lever:** Momentary engagement
- **Gain Control:** Input/output level adjustment
- **Effect Switching:** Quick access to different effects
- **Smooth Transitions:** Avoids clicks and pops
- **Low Latency:** Optimized for real-time use

## 🎛️ Parameter Deep Dive

### Effect Selection
- **12 Effect Buttons:** Instant access to different algorithms
- **Visual Feedback:** Clear indication of active effect
- **Quick Switching:** Seamless transitions between effects
- **Memory:** Remembers settings per effect type
- **Performance:** Optimized for live switching

### X/Y Pad Controls
- **X Axis:** Horizontal parameter control
  - Range: 0-100% (typically)
  - Function: Varies by effect type
  - Smooth: Continuous parameter changes
  - Responsive: Immediate audio feedback
  - Pro tip: Use for primary effect parameter

- **Y Axis:** Vertical parameter control
  - Range: 0-100% (typically)
  - Function: Varies by effect type
  - Smooth: Continuous parameter changes
  - Responsive: Immediate audio feedback
  - Pro tip: Use for secondary effect parameter

### Gain and Output Controls
- **Input Gain:** Adjusts signal level before effects
  - Range: Negative to positive values
  - Function: Optimizes signal level for effects
  - Pro tip: Use to prevent clipping
- **Output Gain:** Adjusts final signal level
  - Range: Negative to positive values
  - Function: Matches level after effects
  - Pro tip: Use to maintain consistent mix levels

### Bypass and Mix Controls
- **Bypass Lever:** Momentary effect engagement
  - Function: Toggle effect on/off
  - Behavior: Can be automated
  - Pro tip: Use for quick effect drops
- **Dry/Wet Balance:** Automatic mix control
  - Function: Blends processed and unprocessed signals
  - Pro tip: Use for subtle effect applications

## 🎼 Sound Design Applications

### Live Performance Effects
Creating dynamic effects for live performance:

**Filter Sweeps:**
- Use Filter mode for classic DJ sweeps
- X controls cutoff frequency
- Y controls resonance
- Create build-ups and breakdowns
- Essential for electronic music performance

**Vocal Effects:**
- Use Vox mode for robotic vocal effects
- X controls vowel formants (A-E-I-O-U)
- Y controls resonance and character
- Create talking synth effects
- Popular in electronic and hip-hop music

**Rhythmic Effects:**
- Use Trans mode for trance gates
- X controls gate speed
- Y controls gate intensity
- Create rhythmic chopping effects
- Sync to tempo for precise timing

**Stutter Effects:**
- Use Grain mode for stutter effects
- X controls grain size
- Y controls density
- Create glitchy, chopped effects
- Popular in experimental and electronic music

### Genre-Specific Applications
Different genres benefit from specific Effector uses:

**Electronic Dance Music:**
- Filter sweeps for build-ups and drops
- Trance gates for rhythmic effects
- Delay throws for transitions
- Reverb swells for breakdowns
- Distortion for aggressive drops

**Hip-Hop:**
- Filter sweeps for vocal effects
- Lo-fi effects for vintage sound
- Delay for space and depth
- Distortion for aggressive elements
- Stereo widening for spaciousness

**Ambient:**
- Reverb for spatial depth
- Filter for evolving textures
- Delay for atmospheric layers
- Grain for textural manipulation
- Stereo for immersive soundscapes

**Experimental:**
- Ring modulation for metallic textures
- Phaser for swirling effects
- Flanger for jet-plane effects
- Vox for robotic voices
- Lo-fi for degraded aesthetics

## 🧪 Experimental Techniques

### Advanced X/Y Manipulation
Creative uses of the X/Y pad:

**Automated Movements:**
- Record complex X/Y movements
- Create evolving effect patterns
- Use automation for precise control
- Combine with tempo-synced effects
- Generate algorithmic effect patterns

**Performance Techniques:**
- Use mouse for precise control
- Map to external controllers
- Combine with keyboard shortcuts
- Use for live improvisation
- Create signature performance moves

**Parameter Interactions:**
- Combine X/Y with other parameters
- Use with automation clips
- Create complex effect evolutions
- Experiment with extreme settings
- Discover unique sound combinations

### Effect Combinations
Though only one effect is active at a time, creative approaches:

**Quick Switching:**
- Rapidly switch between effects
- Create complex effect sequences
- Use automation for timed switching
- Combine complementary effects
- Build complex soundscapes

**Layered Effects:**
- Use multiple instances for different effects
- Route different elements to different instances
- Create complex effect chains
- Combine with other plugins
- Build sophisticated processing chains

### Creative Applications
Unconventional uses of Effector:

**Sound Design:**
- Create unique textures and atmospheres
- Generate sci-fi and fantasy sounds
- Design sound effects for games/videos
- Create evolving ambient textures
- Generate experimental soundscapes

**Composition:**
- Use effects as compositional elements
- Create tension and release with effects
- Generate rhythmic patterns with effects
- Use automation as compositional tool
- Build arrangements around effect changes

## 🎚️ Workflow Optimization

### Performance Setup
Optimizing Effector for live performance:

**Channel Configuration:**
- Place on master or bus channels
- Use for group processing
- Configure for quick access
- Set up for live manipulation
- Optimize for low latency

**Controller Mapping:**
- Map X/Y to external controllers
- Configure MIDI learn for parameters
- Set up performance macros
- Create custom control surfaces
- Optimize for specific hardware

**Template Creation:**
- Create project templates with Effector
- Save favorite effect configurations
- Set up for specific genres
- Prepare for live performance
- Create backup configurations

### Integration Workflows
Working with other plugins and tools:

**Effects Chains:**
- Use before other effects
- Use after other effects
- Create parallel processing chains
- Combine with send effects
- Build complex processing paths

**Automation Workflows:**
- Record X/Y movements
- Create automation clips
- Use for precise control
- Combine with other automation
- Optimize for performance

**Routing Strategies:**
- Send specific tracks to Effector
- Use on bus channels
- Create aux sends
- Combine with other routing
- Optimize for CPU efficiency

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Build-ups:** Filter sweeps and automation
- **Drops:** Distortion and aggressive effects
- **Breakdowns:** Reverb swells and ambient effects
- **Transitions:** Delay throws and automation
- **Energy:** Trance gates and rhythmic effects

### Hip-Hop and R&B
- **Vocal Effects:** Vox mode for robotic voices
- **Space:** Reverb and delay for depth
- **Character:** Distortion and saturation
- **Movement:** Phaser and flanger for interest
- **Texture:** Lo-fi effects for vintage sound

### Ambient and Experimental
- **Atmosphere:** Reverb and filter for space
- **Evolution:** Automated X/Y movements
- **Texture:** Grain and ring modulation
- **Movement:** Phaser and flanger for motion
- **Depth:** Delay and reverb for space

### Rock and Metal
- **Aggression:** Distortion for added grit
- **Space:** Reverb and delay for depth
- **Movement:** Phaser and flanger for interest
- **Character:** Filter for tone shaping
- **Effects:** Creative use of all effects

## 🔄 Integration with Other Plugins

### Effects Processing
Effector works well with various effects:
- **Reverb:** Adding space to processed sounds
- **Delay:** Creating rhythmic patterns with effects
- **Chorus:** Adding width to processed sounds
- **Filtering:** Selective frequency processing
- **Compression:** Controlling dynamics of processed signals

### Dynamics Processing
Integration with dynamics processors:
- **Parallel Compression:** Combining with parallel compression
- **Upward Compression:** Using with upward compression
- **Limiting:** Combining with limiting for control
- **Gate/Expander:** Using with noise gates
- **De-esser:** Combining with de-essing

### Sequencing Integration
Working with other sequencing tools:
- **Automation Clips:** Recording X/Y movements
- **Playlist Integration:** Using with playlist automation
- **MIDI Sequencers:** Controlling with MIDI
- **Step Sequencers:** Creating rhythmic effects
- **Synchronization:** Syncing with project tempo

## 📖 Historical Context

### Development Background
Effector was developed as a performance-oriented multi-effect plugin:
- Inspired by hardware like the Korg Kaoss Pad
- Designed for live manipulation and automation
- Created with performance DJs and live musicians in mind
- Intended to provide quick access to essential effects

### Evolution Through FL Studio Versions
- Initially introduced with basic effect algorithms
- Enhanced with additional effects and controls
- Improved with better sound quality and stability
- Expanded with more sophisticated algorithms

### Impact on Music Production
Effector has influenced music production by:
- Providing intuitive two-dimensional effect control
- Facilitating live performance with effects
- Enabling quick experimentation with effects
- Supporting various musical genres with flexible effects

## 🧠 Advanced Performance Techniques

### X/Y Pad Mastery
Advanced techniques for X/Y control:
- **Smooth Movements:** Creating fluid parameter changes
- **Precise Control:** Accurate parameter positioning
- **Expressive Performance:** Using pad for musical expression
- **Complex Patterns:** Creating intricate movement patterns
- **Real-time Control:** Live manipulation techniques

### Effect Programming
Advanced effect programming techniques:
- **Parameter Mapping:** Understanding X/Y mappings
- **Effect Combinations:** Creative use of different effects
- **Automation Programming:** Complex automation patterns
- **Performance Programming:** Live performance techniques
- **Creative Programming:** Unconventional effect uses

### Performance Optimization
Techniques for maximizing performance:
- **CPU Management:** Efficient use of processing power
- **Latency Optimization:** Minimizing audio latency
- **Real-time Performance:** Ensuring smooth operation
- **Controller Optimization:** Best practices for controllers
- **System Integration:** Optimizing within the system

## 📊 Performance Considerations

### CPU Usage
Managing Effector's impact on system performance:
- **Algorithm Complexity:** Different effects have different CPU loads
- **Parameter Automation:** Automated parameters increase CPU usage
- **Instance Count:** Multiple instances multiply CPU usage
- **Real-time Performance:** Impact on buffer sizes
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Sample Rate:** Using appropriate sample rates
- **Bit Depth:** Maintaining high bit depth
- **Aliasing Prevention:** Avoiding digital artifacts
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output

### System Integration
Optimizing Effector within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimizing audio latency

## 🛠️ Troubleshooting Common Issues

### Effect Problems
- **No Sound:** Check input gain and bypass settings
- **Distorted Sound:** Reduce input gain or adjust effect parameters
- **Clicking/Popping:** Check for sudden parameter changes
- **Phase Issues:** Check stereo field and output routing
- **Excessive Noise:** Adjust parameters or use filtering

### Technical Issues
- **High CPU Usage:** Switch to less intensive effects
- **Latency Issues:** Optimize buffer settings
- **Clipping:** Reduce input gain or increase output headroom
- **Artifacts:** Check sample rate and bit depth settings
- **Compatibility:** Verify plugin compatibility

### Performance Issues
- **Unresponsive Controls:** Check controller mapping
- **Sync Problems:** Verify tempo synchronization
- **Automation Issues:** Check automation recording settings
- **Controller Problems:** Verify MIDI controller configuration
- **Performance Lag:** Optimize system settings

## 🎚️ Advanced Configuration

### Custom Presets
Creating and managing custom configurations:
- **Genre-Specific Presets:** Optimized for specific musical styles
- **Performance Presets:** Configured for live use
- **Effect-Specific:** Presets optimized for specific effects
- **Automation Presets:** Configurations for automation

### Multi-Instance Setup
Using multiple Effector instances effectively:
- **Parallel Processing:** Multiple instances in parallel
- **Serial Processing:** Multiple instances in series
- **Selective Processing:** Different instances for different elements
- **Performance Optimization:** Managing multiple instances

### Integration Configurations
Optimizing for different integration scenarios:
- **MIDI Integration:** Working with MIDI controllers
- **DAW Integration:** Optimizing for FL Studio workflow
- **Hardware Integration:** Connecting with external hardware
- **Network Integration:** Remote control possibilities

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Effector techniques
- **Reddit Groups:** Sharing effect techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced effect techniques
- **Written Guides:** In-depth articles on performance effects
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting Effector configurations
- **Technique Sharing:** Platforms for sharing performance methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Perform a live "Glitch" solo using only Effector and a mouse
- [ ] Explain the X/Y mapping for all 12 effects
- [ ] Create a "Vocal Chop" effect using the Vox filter and automation

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\00_Overview.md

```markdown
# Effector - Overview

## What is Effector?

Effector is a performance-oriented multi-effect plugin inspired by hardware like the Korg Kaoss Pad. It provides **12 different effects** (Distortion, Lo-Fi, Flanger, Phaser, Filter, Delay, Reverb, Stereo, Trans, Grain, Vox, Ring) that are controlled via a central **X/Y Pad**. It is designed for live manipulation, automation clips, and quick "punch-in" effects on the master or bus channels.

Effector stands out from other FL Studio effects due to its intuitive X/Y pad interface, which allows for real-time manipulation of two parameters simultaneously. This makes it particularly valuable for live performance, DJ sets, and situations where you need to dynamically manipulate sound in real-time.

## Where it sits in FL Studio ecosystem

Effector is categorized as a **Multi-Effect Performance Tool** and fits into the Effect category of FL Studio's plugin ecosystem. It serves as:

- A **performance tool** for live manipulation of audio
- A **creative effects processor** for generating evolving textures
- A **DJ-style effects unit** for transitions and builds
- A **quick experimentation platform** for trying different effects

It works well in various contexts within FL Studio:
- On individual tracks for dynamic processing
- On bus channels for group processing
- On the master channel for final polish or dramatic effects
- In automation clips for programmed effect changes

## What problem it solves and who it's for

Effector addresses several key challenges in music production and performance:

1. **Quick Effect Experimentation**: Allows rapid switching between 12 different effect types without loading multiple plugins
2. **Intuitive Real-Time Control**: The X/Y pad provides an intuitive way to manipulate two parameters simultaneously
3. **Performance-Oriented Design**: Built for live manipulation with smooth transitions and low latency
4. **Space Efficiency**: Combines 12 effects in a single plugin instance
5. **DJ-Style Effects**: Perfect for builds, drops, transitions, and live performance

It's ideal for:
- Live performers who need real-time effect manipulation
- DJs and electronic musicians who use effect builds and transitions
- Producers who want to quickly experiment with different effects
- Sound designers looking for evolving textures and transformations
- Anyone who wants an intuitive, tactile approach to effect processing

## A simple mental model: how to think about it in 60 seconds

Think of Effector as a **digital effects Swiss Army knife** with a touchpad interface. Imagine a hardware effects unit with a touch-sensitive pad where your finger position controls two parameters at once. Moving left/right changes one parameter (like filter cutoff) while moving up/down changes another (like resonance). This allows for expressive, gestural control over effects that would normally require adjusting multiple knobs separately.

The X/Y pad is like having a macro control that simultaneously adjusts two related parameters, but with the freedom to move in two dimensions rather than just one slider.

## When to use it

**Use Effector when:**
- You need to quickly audition different effects on a sound
- You want to create evolving textures through automation
- You're performing live and need intuitive effect control
- You're creating builds, drops, or transitions in electronic music
- You want to add movement and interest to static sounds
- You need a DJ-style effects unit for your master bus

**Don't use Effector when:**
- You need precise, surgical processing with specific parameters
- You require effects not available in its 12-effect set
- You need multiple effects simultaneously (though you can use multiple instances)
- You're looking for the highest fidelity processing (some effects are optimized for character over transparency)

## Links

- [Official Manual Page](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Effector.htm)
- [Effector Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Effector_tutorials.htm)
- [Effector Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+effector+tutorial)
```

---

## FILE: 01-Learning\01_UI_Tour_And_Core_Concepts.md

```markdown
# Effector - UI Tour And Core Concepts

## UI Tour

### Main Interface Layout

Effector presents a streamlined interface centered around its distinctive X/Y pad, which is the primary control surface for manipulating effects in real-time. The interface is organized into several key areas:

#### Top Section
- **Effect Selection**: 12 buttons arranged in a grid representing different effect types
  - Distortion, Lo-Fi, Flanger, Phaser, Filter, Delay
  - Reverb, Stereo, Trans, Grain, Vox, Ring
- **Effect Name Display**: Shows the currently selected effect
- **Bypass Button**: Quick toggle for the entire effect

#### Central Area - X/Y Pad
- **X/Y Control Pad**: Large touch-sensitive area for real-time parameter control
  - X-axis (horizontal): Controls the first parameter of the selected effect
  - Y-axis (vertical): Controls the second parameter of the selected effect
  - Visual feedback showing current position
- **Position Coordinates**: Numerical display of current X/Y coordinates

#### Right Panel - Effect Parameters
- **Effect-Specific Controls**: Parameters that vary depending on the selected effect
  - Common controls include feedback, time, rate, amount, etc.
- **Dry/Wet Mix**: Blend between original and processed signals
- **Gain Controls**: Input and output gain adjustment

#### Bottom Section
- **Global Controls**: 
  - Master bypass
  - Global mix control
  - Status indicators

### Visual Feedback Elements

Effector provides several types of visual feedback:
- **X/Y Pad Position Indicator**: Shows current position on the pad with a dot
- **Effect Selection Highlight**: Visually indicates the currently active effect
- **Parameter Value Displays**: Numeric readouts for precise control
- **Active State Indicators**: Showing which parameters are being adjusted
- **Audio Activity Meters**: Visual representation of input/output levels

## Core Concepts and Terminology

### X/Y Control Paradigm

**X/Y Pad**: The central feature of Effector, this touch-sensitive pad allows simultaneous control of two parameters. Moving horizontally (X-axis) adjusts one parameter while moving vertically (Y-axis) adjusts another. This creates an intuitive, gestural approach to effect manipulation.

**Effect Morphing**: The ability to smoothly transition between different parameter settings by moving your finger across the X/Y pad, creating evolving textures and sounds.

**Real-time Performance**: The X/Y pad is designed for live manipulation, allowing performers to dynamically shape their sound during playback.

### Effect Categories

**Modulation Effects**: Effects that alter the signal by modulating it in various ways (Flanger, Phaser, Chorus, Vibrato)
- These typically use X for rate/speed and Y for depth/intensity

**Time-based Effects**: Effects that use delay lines or time manipulation (Delay, Reverb, Grain)
- These often use X for time/feedbac and Y for other parameters

**Filter Effects**: Effects that shape the frequency content (Filter, EQ)
- These commonly use X for cutoff and Y for resonance

**Distortion Effects**: Effects that add harmonics through non-linear processing (Distortion, Ring Modulation)
- These may use X for drive/amount and Y for tone/character

### Core Terminology

**Effect Switching**: The process of selecting different effects from the 12 available options
**Parameter Mapping**: How the X/Y axes map to specific effect parameters (varies by effect type)
**Smooth Transitions**: The ability to move between different effect settings without clicking or popping
**Performance Mode**: The real-time manipulation aspect of the plugin optimized for live use
**Effect Tail**: The residual output from time-based effects after bypassing
**Bypass Behavior**: How the plugin handles the transition when bypassed (may vary by effect type)

## Typical Starting Workflow (the first 5 minutes)

1. **Load Effector**: Insert Effector on a track with some audio (preferably something with dynamic content)

2. **Select an Effect**: Click on the "Filter" button (6th button) to start with a familiar effect

3. **Explore the X/Y Pad**: Move your mouse over the X/Y pad and click/drag to hear how it affects the sound
   - X-axis typically controls cutoff frequency
   - Y-axis typically controls resonance

4. **Adjust Mix**: Use the Dry/Wet mix control to blend the effect with the original signal (start with around 50%)

5. **Try Different Effects**: Click on other effect buttons (like "Delay" or "Phaser") to hear different processing options

6. **Experiment with Morphing**: With a time-based effect selected, move the X/Y pad to create evolving textures

7. **Set Output Level**: Adjust the output gain if needed to match your mix levels

## Common Beginner Traps (what people misunderstand)

1. **Thinking it works like a multi-FX**: Unlike other multi-effects, Effector only runs one effect at a time, not multiple effects in series or parallel.

2. **Not understanding X/Y mapping**: Each effect maps X and Y to different parameters, so the same pad movement will have different results depending on the selected effect.

3. **Overusing the X/Y pad**: Moving too wildly on the pad can create chaotic results; subtle movements often yield more musical outcomes.

4. **Confusing effect switching with parameter automation**: The 12 effect buttons are for switching between effects, not for different parameter presets of the same effect.

5. **Ignoring the mix control**: Forgetting to adjust the dry/wet mix can result in effects that are either too subtle or completely overwhelm the original signal.

6. **Expecting traditional effect behavior**: Some effects (like "Trans" for trance gate) behave differently than their standalone counterparts due to the X/Y control paradigm.

7. **Not considering tempo sync**: Some effects (Delay, Trans, Grain) can sync to project tempo, which is important for musical timing.
```

---

## FILE: 01-Learning\Concepts\advanced-modulation.md

```markdown
Tags: electric | psychedelic | hip-hop/rap

## Effector Advanced Modulation

### Modulation Chaining

**What it is:**
- Multiple modulation effects in series
- Creates complex textures

**Chaining Order:**
`\`\`
Input → Filter → Tremolo → Phaser → Output
`\`\`

**Best Combinations:**

| Order | Effect | Character |
|--------|---------|-----------|
| Filter + Tremolo | Pulsing tone | Rhythmic warmth |
| Tremolo + Phaser | Swelling pulse | Psychedelic |
| Filter + Doppler | Sci-fi sweep | Dramatic |
| BitCrush + Granular | Glitch texture | Modern |

**Advanced Chain:**
1. Filter (sweep automation)
2. Tremolo (rhythmic)
3. Phaser (movement)
4. Reverb (space)
5. Result: Complex evolving texture

### Synced Rhythms

**Tempo Sync Formula:**
| Note Value | Seconds (120 BPM) | Use |
|------------|-------------------|-----|
| 1/4 | 0.5 | Quarter pulse |
| 1/8 | 0.25 | Eighth pulse |
| 1/8T | 0.166 | Triplet feel |
| 1/16 | 0.125 | Sixteenth pulse |
| 1/16T | 0.083 | Fast triplet |
| 1/32 | 0.0625 | Fast pulse |

**Creative Patterns:**
| Pattern | Rhythm | Effect |
|----------|---------|--------|
| Straight | 1/8 notes | Even groove |
| Swung | 1/8 + 50% | Groove feel |
| Accent | Random 1/8 | Human feel |
| Polyrhythm | 3:2 against 1/4 | Complex |

### Creating Unique Textures

**The "Alien Voice":**
1. RingMod → Tone → 70%
2. Filter → Lowpass → 800Hz
3. Doppler → Pitch shift → Automated
4. Result: Otherworldly texture

**The "Glitch Sweep":**
1. BitCrush → 4-bit
2. Filter → Sweep automation
3. Granular → 30ms grains
4. Result: Digital glitch texture

**The "Retro Pulse":**
1. Tremolo → 1/4 note
2. Filter → Medium resonance
3. TapeSat → 20%
4. Result: Vintage pulsing

### Creative Transition Effects

**Build-Up:**
1. Start: Filter closed (0%)
2. Automation: Open filter to 100%
3. Duration: 4-8 bars
4. End: Impact

**Drop Effect:**
1. All: 100% wet
2. Filter: Open
3. Doppler: Pitch shift down
4. Momentary: BitCrush
5. Result: Dramatic drop

**Reverse Transition:**
1. Source: Forward audio
2. Reverse entire effect
3. Automation: Fade in reversed
4. Result: Time-reversal effect

### Layering Modulation

**Parallel Modulation:**
1. Instance 1: Subtle tremolo (10%)
2. Instance 2: Slow panner (15%)
3. Instance 3: Light filter (5%)
4. Blend: All to 100%
5. Result: Complex movement

**Why This Works:**
- Each effect subtle
- Combined = rich texture
- No single effect dominates

### Troubleshooting Modulation

| Problem | Cause | Fix |
|---------|-------|-----|
| Not pumping | Depth too low | Increase depth |
| Unmusical rate | Not synced | Sync to tempo |
| Harsh sound | Wrong waveform | Try sine over square |
| No movement | Effect too subtle | Increase parameters |
| Dizzying | Rate too fast | Slow down rate |
| Clipping | Wet too high | Reduce wet/dry |

### Genre-Specific Modulation

**Hip-Hop:**
| Effect | Rate | Depth | Style |
|--------|------|-------|-------|
| Tremolo | 1/4 | 50% | Even pulse |
| Filter | Env | 80% | Swell on hit |
| Panner | 1/2 | 40% | Subtle sway |

**R&B:**
| Effect | Rate | Depth | Style |
|--------|------|-------|-------|
| Tremolo | 1/8 | 30% | Smooth pulse |
| Phaser | 0.2Hz | 45% | Warm movement |
| Filter | 1/4 | 50% | Gentle sweep |

**EDM:**
| Effect | Rate | Depth | Style |
|--------|------|-------|-------|
| Tremolo | 1/16 | 60% | Fast pulse |
| Filter | Env | 90% | Heavy sweep |
| BitCrush | 8-bit | 50% | Digital texture |

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Effector: The Performance Multi-FX

> **Scope:** Live Performance, Momentary FX, and Modulation.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Controls) / High (Performance Technique).

## 🧠 The "Momentary" Concept
Effector is not designed for static mixing. It is designed to be **played**.
*   **Bypass Logic:** By default, the effect is ON when you click the pad, and OFF (Bypassed) when you release the mouse. This is "Momentary" mode.
*   **Latch Mode:** To keep the effect on, you must engage the "Bypass" switch permanently.
*   **XY Pad:** This is the central control. It controls two parameters simultaneously for every effect.

---

## 🎛️ Section 1: The 12 Algorithms (X/Y Map)

| Effect | **X Axis** (Horizontal) | **Y Axis** (Vertical) | Nuance |
| :--- | :--- | :--- | :--- |
| **DISTORT** | Distortion Amount | Tone (Eq) | "Tone" filters the fizz. |
| **LO-FI** | Bit Depth (Reduces Up) | Sample Rate (Reduces Right) | **Note:** Axis direction is inverted compared to standard. High X = Low Bits. |
| **FLANGER** | Depth | Feedback | High Feedback = Metallic resonance. |
| **PHASER** | Depth | Feedback | Classic Jet Plane sweep. |
| **FILTER** | Cutoff Freq | Resonance | **Split:** Center is neutral. Left = Low Pass. Right = High Pass. |
| **DELAY** | Feedback (Repeats) | Filter (Tone) | Not Time! Time is set by Tempo. |
| **REVERB** | Feedback (Length) | Wet Level | Short tails at bottom, infinite at top. |
| **STEREO** | Pan Position | Binaural Separation | Y-Axis creates "3D" headphone width. |
| **TRANS** | Release Time | Drop Level | Sidechain simulation. |
| **GRAIN** | (Unused) | (Unused) | Controlled entirely by Tempo knobs. |
| **VOX** | Vowel Formant (A-E-I-O-U) | Throat Size | Humanizes saw waves. |
| **RING** | Modulator Freq | (Unused) | Multiply X by Y (Audio * Sine). |

---

## 🔁 Section 2: Modulation Engine

Effector has a built-in LFO that automates the X/Y pad.
*   **Tempo:** Syncs to host (1/8 to 8/1).
*   **X Mod / Y Mod:** These are **Multipliers**.
    *   Center (12 o'clock) = No modulation.
    *   Right = Positive modulation.
    *   Left = Negative (Inverted) modulation.
*   **Shape:** Sine, Saw, Square.

---

## ⚡ Technical Specs: The "Trans" Effect (Trance Gate)

**TRANS** is one of the most misunderstood effects.
*   **What it is:** A rhythmic volume gate (Sidechain simulator).
*   **X Axis (Release):** Controls the envelope shape of the gate.
    *   Low X: Staccato, choppy gate.
    *   High X: Smooth, swell-like gate.
*   **Y Axis (Drop):** The floor.
    *   Low Y: Volume drops to -inf dB (Silence).
    *   High Y: Volume drops slightly (-3dB).
*   **Speed:** Controlled by the "Tempo" knob (e.g., 1/16th note pumping).

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Build-Up" Filter
1.  **Select:** FILTER.
2.  **Start:** Center of Pad (clean).
3.  **Action:** Drag Top-Right.
    *   **X:** High Pass Filter engages, removing bass.
    *   **Y:** Resonance increases, screaming.
4.  **Release:** Snap back to center -> Drop occurs.

### 2. Manual Tape Stop (Lo-Fi)
1.  **Select:** LO-FI.
2.  **Modulation:** None.
3.  **Action:** Slide X axis from bottom to top.
    *   Sample Rate crashes down.
    *   Aliasing introduces "phantom" lower frequencies.
4.  **Result:** Digital destruction breakdown.

### 3. The "Talking Bass" (Vox)
1.  **Source:** Sawtooth Bass.
2.  **Select:** VOX.
3.  **LFO:**
    *   **Shape:** Sine.
    *   **Tempo:** 1/4.
    *   **X Mod:** High (+80%).
4.  **Result:** The LFO sweeps the formants (A-E-I-O-U) in time with the beat, creating a "Yoi Yoi" Dubstep bass line automatically.

```

---

## FILE: 01-Learning\Quick-Reference\quick-reference-card.md

```markdown
Tags: electric | hip-hop/rap | moody

## Effector Quick Reference Card

### Emergency Settings

| Problem | Quick Fix |
|---------|----------|
| No movement | Increase depth to 50% |
| Too pumping | Reduce depth to 30% |
| Unmusical | Sync rate to tempo |
| Too obvious | Reduce wet/dry to 40% |
| Clipping | Reduce output level |
| No effect | Increase rate/depth |
| Too fast | Slow rate by half |
| Harsh tone | Reduce resonance |

### Genre Defaults

| Genre | Effect | Rate | Depth | Wet |
|-------|--------|------|-------|-----|
| Hip-hop | Tremolo | 1/4 | 50% | 70% |
| R&B | Phaser | 0.2Hz | 50% | 60% |
| Trap | Filter | Env | 70% | 100% |
| Lo-fi | BitCrush | 8-bit | 40% | 50% |
| EDM | Tremolo | 1/8 | 60% | 80% |

### Effect Characteristics

| Effect | Character | Best For | Warning |
|--------|-----------|----------|---------|
| Tremolo | Rhythmic pulse | Drums, bass | Don't overdo |
| Panner | Stereo movement | Pads, atmosphere | Check mono |
| Filter | Tone sweep | Builds, drops | Don't close fully |
| Phaser | Phase sweep | Warmth, movement | Harsh if overdone |
| Flanger | Metallic sweep | Classic effect | Avoid feedback |
| Doppler | Pitch shift | Drops, effects | Use subtly |
| BitCrush | Digital degrade | Texture, lofi | Don't overcrush |
| Granular | Glitch texture | Modern texture | Can be chaotic |
| RingMod | Metallic tone | Sci-fi, effects | Use sparingly |
| Resonator | Resonant tone | Sci-fi, effects | Can be harsh |

### Rate Guide

| Rate | Feel | Use |
|------|------|-----|
| 0.05-0.1 Hz | Very slow | Atmosphere |
| 0.1-0.3 Hz | Slow sweep | Warmth |
| 0.3-0.5 Hz | Moderate | Movement |
| 0.5-1 Hz | Fast | Energy |
| 1-2 Hz | Very fast | Intensity |
| Synced | Musical | Rhythm |

### Depth Guide

| Depth | Effect | Best For |
|-------|--------|----------|
| 10-25% | Subtle | Enhancement |
| 25-50% | Moderate | Musical effect |
| 50-75% | Strong | Clear effect |
| 75-100% | Extreme | Creative |

### Wet/Dry Guide

| Wet | Effect | Best For |
|-----|--------|----------|
| 20-30% | Subtle texture | Enhancement |
| 40-50% | Balanced | Musical effect |
| 60-80% | Clear effect | Featured |
| 90-100% | Full effect | Creative |

### Waveform Guide

| Waveform | Feel | Use |
|----------|------|-----|
| Sine | Smooth | Musical, soft |
| Triangle | Softer attack | Gentle |
| Square | Hard on/off | Rhythmic, gated |
| Saw | Rising/falling | Intensity |

### Preset Naming Convention

`\`\`
[Effect]_[Genre]_[Character]_[Date]
Example: Tremolo_HipHop_Pulse_2024
`\`\`

### Troubleshooting Flowchart

`\`\`
Problem?
    ↓
Not moving? → Increase depth
    ↓
Too obvious? → Reduce wet/dry
    ↓
Unmusical? → Sync to tempo
    ↓
Harsh? → Change waveform to sine
    ↓
Still not right? → Try different effect
`\`\`

### Quality Check

- [ ] Sync to tempo
- [ ] Test in mono
- [ ] A/B enabled/disabled
- [ ] Check mix context
- [ ] Listen at low volume
- [ ] Verify no clipping
- [ ] Document settings

```

---

## FILE: 02-Data\00_Controls_Reference.md

```markdown
# Effector - Controls Reference

## Parameter List with Descriptions

### Effect Selection Controls

**Effect Buttons (12 total)**
- **Distortion**: Adds harmonic saturation and overdrive
- **Lo-Fi**: Emulates vintage digital equipment with bit depth and sample rate reduction
- **Flanger**: Creates jet-plane swooshing effects using short delay times with modulation
- **Phaser**: Creates whooshing, sweeping effects using all-pass filters for phase shifting
- **Filter**: Classic low-pass, high-pass, or band-pass filtering for tone shaping
- **Delay**: Time-based echo effects with feedback and time controls
- **Reverb**: Simulates acoustic spaces and adds depth and dimension
- **Stereo**: Controls stereo field characteristics and width/separation
- **Trans (Trance Gate)**: Creates rhythmic gating effects popular in trance and electronic music
- **Grain**: Granular synthesis effects for stutter and time-stretching
- **Vox**: Creates vocal-like formant filtering with vowel simulation
- **Ring**: Ring modulation effects for metallic, bell-like tones

### X/Y Pad Controls

**X-Axis Control**
- **Description**: Horizontal parameter control that varies by selected effect
- **Range**: 0-100% (typically)
- **Effect**: Controls primary parameter of the active effect
- **Use for**: Primary effect parameter manipulation
- **Pro tip**: Use for the most impactful parameter change

**Y-Axis Control**
- **Description**: Vertical parameter control that varies by selected effect
- **Range**: 0-100% (typically)
- **Effect**: Controls secondary parameter of the active effect
- **Use for**: Secondary effect parameter manipulation
- **Pro tip**: Use for fine-tuning and character adjustments

### Effect-Specific Parameters

**For Filter Effect:**
- **X-Axis**: Cutoff Frequency (controls filter position)
- **Y-Axis**: Resonance/Peak (controls emphasis at cutoff point)

**For Delay Effect:**
- **X-Axis**: Feedback/Repeats (controls number of echoes)
- **Y-Axis**: Time/Delay Amount (controls delay interval)

**For Reverb Effect:**
- **X-Axis**: Size/Room Type (controls space simulation)
- **Y-Axis**: Decay/Time (controls reverb duration)

**For Stereo Effect:**
- **X-Axis**: Width/Separation (controls stereo field width)
- **Y-Axis**: Position/Placement (controls stereo positioning)

**For Trans (Trance Gate) Effect:**
- **X-Axis**: Speed/Gate Rate (controls gating speed)
- **Y-Axis**: Depth/Intensity (controls gating depth)

**For Grain Effect:**
- **X-Axis**: Grain Size/Time (controls grain duration)
- **Y-Axis**: Density/Pitch (controls grain density and pitch)

**For Vox Effect:**
- **X-Axis**: Vowel Formant (controls vowel sounds A-E-I-O-U)
- **Y-Axis**: Character/Resonance (controls resonance characteristics)

**For Ring Effect:**
- **X-Axis**: Frequency/Rate (controls modulation rate)
- **Y-Axis**: Depth/Intensity (controls modulation depth)

**For Phaser/Flanger Effects:**
- **X-Axis**: Feedback/Intensity (controls effect intensity)
- **Y-Axis**: Rate/Speed (controls modulation speed)

**For Distortion Effect:**
- **X-Axis**: Drive/Amount (controls saturation level)
- **Y-Axis**: Tone/Character (controls saturation character)

**For Lo-Fi Effect:**
- **X-Axis**: Bit Depth Reduction (controls quantization)
- **Y-Axis**: Sample Rate Reduction (controls aliasing)

### Global Controls

**Dry/Wet Mix**
- **Description**: Blends processed and unprocessed signals
- **Range**: 0-100% (0% = dry, 100% = wet)
- **Effect**: Controls the balance between original and effected signal
- **Use for**: Setting the intensity of the effect
- **Pro tip**: Use for subtle effect applications

**Gain Controls**
- **Input Gain**: Adjusts signal level before effects
  - Range: Negative to positive values
  - Effect: Optimizes signal level for effects
  - Use for: Preventing clipping
  - Pro tip: Use to optimize signal for effect processing
- **Output Gain**: Adjusts final signal level
  - Range: Negative to positive values
  - Effect: Matches level after effects
  - Use for: Maintaining consistent mix levels
  - Pro tip: Use to match processed and unprocessed levels

**Bypass**
- **Description**: Toggles the entire effect on/off
- **Range**: On/Off
- **Effect**: Completely bypasses all processing
- **Use for**: A/B comparison
- **Pro tip**: Use for quick comparisons with original signal

## Default Values and Safe Starting Ranges

### X/Y Pad Defaults
- **X-Axis**: 50% (center position)
- **Y-Axis**: 50% (center position)
- **Safe Range**: 20%-80% for most effects to avoid extreme settings

### Mix Defaults
- **Dry/Wet Mix**: 50% (equal blend)
- **Safe Range**: 20%-80% for musical results

### Effect-Specific Safe Ranges
- **Filter**: X (Cutoff): 30%-70%, Y (Resonance): 20%-60%
- **Delay**: X (Feedback): 20%-60%, Y (Time): 30%-70%
- **Reverb**: X (Size): 40%-80%, Y (Decay): 30%-70%
- **Stereo**: X (Width): 40%-80%, Y (Position): 30%-70%
- **Trans**: X (Speed): 30%-70%, Y (Depth): 40%-80%
- **Grain**: X (Size): 30%-70%, Y (Density): 40%-80%
- **Vox**: X (Formant): 30%-70%, Y (Character): 40%-80%
- **Ring**: X (Freq): 30%-70%, Y (Depth): 40%-80%

## Special Behaviors, Hidden Interactions, Right-Click Options, Integration Points

### Parameter Interactions
- **X/Y Correlation**: Some effects have correlated parameters where X and Y interact (e.g., in Filter, cutoff and resonance interact)
- **Effect-Specific Behavior**: Each effect maps X and Y differently, so identical pad movements produce different results
- **Smooth Transitions**: The X/Y pad provides smooth parameter transitions to avoid clicks and pops

### Hidden Interactions
- **Tempo Sync**: Some effects (Delay, Trans, Grain) may sync to project tempo when available
- **Parameter Smoothing**: Internal smoothing prevents parameter jumps from causing audio artifacts
- **Effect Tail Behavior**: Some effects (Delay, Reverb) may have tails that continue after bypass

### Right-Click Options
- **Parameter Reset**: Right-clicking on X/Y pad may reset to center position
- **Fine Adjustment**: Holding Shift while moving pad allows for precise parameter adjustments
- **MIDI Learn**: Right-clicking may reveal MIDI learn options for external controller mapping

### Integration Points
- **MIDI Control**: X/Y pad can be controlled via MIDI CC messages
- **Automation**: All parameters can be automated using FL Studio's automation system
- **FL Studio Integration**: Works within FL Studio's mixer and routing system
- **Controller Mapping**: Compatible with external controllers for tactile manipulation

## MIDI/automation notes and gotchas

### MIDI Implementation
- **X/Y Pad Control**: Can be controlled via two separate MIDI CC messages for X and Y axes
- **Effect Selection**: Effect buttons can be triggered via MIDI notes or CC messages
- **Parameter Automation**: Individual effect parameters can be automated via CC mapping

### Automation Notes
- **X/Y Pad Automation**: Can be automated using XY controller automation lanes
- **Smooth Automation**: X/Y movements should be smoothed to avoid parameter jumps
- **Real-time Parameter Changes**: Parameters can be adjusted in real-time without stopping playback

### Gotchas
- **Effect Switching Automation**: Automating effect switching can cause audio discontinuities
- **Extreme Parameter Values**: Setting parameters to extreme values may cause unexpected behavior
- **X/Y Pad Jumping**: Abrupt changes in X/Y position can cause audio artifacts
- **Tempo Sync Conflicts**: Some effects may behave differently when tempo sync is enabled elsewhere
- **CPU Usage**: Some effects (especially Delay and Reverb) may have higher CPU usage
- **Parameter Mapping Changes**: When switching effects, the X/Y parameter mapping changes, which can cause unexpected results if automated
```

---

## FILE: 02-Data\01_Troubleshooting_Notes.md

```markdown
# Effector - Troubleshooting Notes

## Known Issues, Limitations, Weird Behaviors

### Known Issues
- **Effect Switching Artifacts**: When automating effect switches, there can sometimes be small audio discontinuities or clicks during transitions
- **X/Y Pad Sensitivity**: The X/Y pad may be overly sensitive to small movements, making precise control challenging
- **Parameter Mapping Changes**: When switching effects, the X/Y parameter mapping changes, which can cause unexpected results if automated
- **Tail Behavior**: Some effects (Delay, Reverb) may have tails that continue after bypassing, which can be confusing

### Limitations
- **Single Effect at a Time**: Unlike other multi-effects, Effector only runs one effect at a time, not multiple effects in series or parallel
- **Fixed Effect Set**: Only 12 effects are available, with no option to add additional effect types
- **X/Y Mapping Constraints**: Each effect maps X and Y to different parameters, limiting the ability to maintain consistent control across different effects
- **No Preset System**: Limited ability to save and recall complex effect settings compared to other FL Studio plugins
- **CPU Usage**: Some effects (especially Delay and Reverb) may have higher CPU usage than simpler alternatives

### Weird Behaviors
- **Effect-Specific Behavior**: The same X/Y pad movement produces completely different results depending on the selected effect
- **Parameter Range Differences**: Different effects have different parameter ranges and sensitivities
- **Bypass Behavior**: Some effects may behave differently when bypassed (e.g., delay tails continuing)
- **Tempo Sync Interaction**: Some effects (Delay, Trans, Grain) can sync to project tempo, which may interact unexpectedly with X/Y manipulation

## CPU/Performance Considerations

### CPU Usage Patterns
- **Light Effects**: Filter, Distortion, Phaser, Flanger typically have low CPU usage
- **Moderate Effects**: Lo-Fi, Stereo, Vox, Ring have moderate CPU usage
- **Heavy Effects**: Delay, Reverb, Grain, Trans (Trance Gate) tend to have higher CPU usage
- **X/Y Pad Processing**: The X/Y pad itself has minimal impact on CPU usage

### Performance Optimization Tips
- **Effect Selection**: Choose effects with lower CPU usage when running multiple instances
- **Parameter Automation**: Smooth parameter changes consume minimal additional CPU
- **Bypass Unused**: Bypass Effector when not in use to save CPU
- **Use in Moderation**: Since only one effect runs at a time, consider using multiple instances sparingly
- **Monitor Usage**: Keep an eye on CPU meter when using multiple time-based effects

### Buffer Size Considerations
- **Small Buffers**: May cause increased CPU usage or audio dropouts with complex effects
- **Large Buffers**: May introduce latency but can reduce CPU usage and improve stability
- **Recommended Setting**: Use FL Studio's automatic buffer size adjustment or experiment with 256-512 samples for a good balance

## "Symptom -> Cause -> Fix -> How to verify" Table

| Symptom | Possible Cause | Solution | How to Verify |
|---------|----------------|----------|---------------|
| Clicking/popping during X/Y pad movement | Parameter changes too rapid | Smooth out X/Y automation or move pad more gradually | Listen for artifacts during parameter changes |
| Effect sounds different when switching | X/Y parameter mapping changes per effect | Adjust to new parameter mapping or reset X/Y position | Check X/Y position indicator after switching |
| No sound output | Effect bypassed or mix set to 0% | Check bypass button and dry/wet mix control | Verify mix control is above 0% and bypass is off |
| Unexpected effect behavior | Tempo sync affecting time-based effects | Check project tempo settings or disable sync if not wanted | Monitor effect behavior with different tempo settings |
| High CPU usage | Using CPU-intensive effects (Delay/Reverb) | Switch to lighter effects or reduce parameter intensity | Monitor CPU meter in FL Studio |
| Audio discontinuity when switching effects | Automated effect switching | Add smoothing or avoid automating effect switches | Listen for audio gaps during effect changes |
| Delay/reverb tails continue after bypass | Effect tail behavior | Use hard bypass or adjust effect-specific settings | Check if tails continue after bypass |
| X/Y pad not responding | MIDI controller mapping issue | Check controller mapping or use mouse directly | Test with direct mouse interaction on X/Y pad |

## Version-Specific Notes (labeled clearly with version)

### FL Studio 20.x Series
- **Initial Implementation**: The original implementation of Effector's X/Y pad interface
- **Basic Effect Set**: Included the 12 core effect types with basic parameter mapping
- **Limited Presets**: No built-in preset system for effect settings

### FL Studio 20.7
- **X/Y Pad Improvements**: Enhanced parameter smoothing to reduce artifacts during movement
- **Effect Stability**: Improved stability when switching between effects

### FL Studio 20.8
- **CPU Optimization**: Minor optimizations to reduce CPU usage of certain effects
- **Parameter Mapping**: Refined parameter mapping for more intuitive control

### FL Studio 21.0
- **MIDI Learn Enhancement**: Improved MIDI learn functionality for X/Y pad control
- **Automation Smoothing**: Better automation handling to prevent parameter jumps

### FL Studio 21.1
- **Effect Tail Behavior**: Refined tail behavior for time-based effects when bypassed
- **Controller Support**: Better support for external controller mapping

### FL Studio 21.2
- **Parameter Interpolation**: Better interpolation between parameter values for smoother transitions
- **Effect Switching**: Improved effect switching with reduced audio discontinuities

### FL Studio 21.3
- **Interface Updates**: Minor UI improvements for better parameter visibility
- **Bug Fixes**: Addressed rare crashes when using extreme X/Y positions

### FL Studio 21.4
- **Performance Monitoring**: Added internal performance monitoring for better stability
- **Parameter Validation**: Improved validation of X/Y positions to prevent instability

### FL Studio 21.5
- **Controller Mapping**: Enhanced external controller mapping capabilities
- **Effect Algorithms**: Minor improvements to effect algorithms for better sound quality

### FL Studio 21.6
- **Compatibility Improvements**: Better compatibility with third-party controller mapping
- **Audio Quality**: Minor improvements to audio quality at extreme settings
- **Documentation Updates**: Enhanced tooltips and parameter descriptions

*Note: Version-specific behaviors should be verified against official Image-Line release notes, as these are based on general FL Studio development patterns.*
```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Effector",
  "category": "Performance / Multi-FX",
  "parameters": [
    {
      "section": "Global",
      "id": "effect_type",
      "name": "Algorithm",
      "options": [
        "Distort",
        "Lo-Fi",
        "Flanger",
        "Phaser",
        "Filter",
        "Delay",
        "Reverb",
        "Stereo",
        "Trans",
        "Grain",
        "Vox",
        "Ring"
      ],
      "description": "The active effect engine."
    },
    {
      "section": "Modulation",
      "id": "x_param",
      "name": "X Parameter",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Horizontal axis value (Function depends on Algorithm)."
    },
    {
      "section": "Modulation",
      "id": "y_param",
      "name": "Y Parameter",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Vertical axis value (Function depends on Algorithm)."
    },
    {
      "section": "LFO",
      "id": "lfo_tempo",
      "name": "Tempo Multiplier",
      "range": { "min": 0.125, "max": 8.0, "unit": "x" },
      "description": "Speed of the internal LFO modulation relative to generic beat time."
    },
    {
      "section": "LFO",
      "id": "x_mod_amt",
      "name": "X Mod Amount",
      "range": { "min": -100, "max": 100, "unit": "%" },
      "description": "Bipolar amount of LFO applied to X Parameter."
    },
    {
      "section": "Control",
      "id": "bypass_switch",
      "name": "Bypass",
      "type": "Switch",
      "description": "Permanent bypass toggle (Momentary overrides this)."
    }
  ]
}

```

---

## FILE: 02-Data\parameters\xy-mapping-logic.md

```markdown
# Data: X/Y Mapping Logic (Effector)

Tags: creative-fx | parameters | automation

## 1. The X/Y Axis Universal Rule
In almost every mode, the X/Y pad follows this logic:
- **X-Axis (Horizontal):** Usually controls **Frequency** or **Time**. 
- **Y-Axis (Vertical):** Usually controls **Feedback**, **Modulation Depth**, or **Intensity**.

## 2. Mode-Specific Mapping Cheat Sheet
| Mode | X-Axis Control | Y-Axis Control | Vibe Note |
| :--- | :--- | :--- | :--- |
| **DIST** | Distortion Amount | Low Pass Filter | Gritty Trap 808s |
| **LOFI** | Sample Rate | Bit Depth | Boom Bap Texture |
| **VOX** | Formant Shift (A-E-I-O-U) | LFO Speed | Robotic R&B Vocals |
| **TRANS** | Stutter Rate (1/4 to 1/32) | Gating Envelope | EDM/Trap Drops |
| **PHAZ** | Phaser Speed | Feedback Amount | Swirling Melodic Pads |

## 3. Automation "Safe Starting Zones"
- **The "Radio" Build-up:** Select **BP (Band Pass)**. Start at (X: 0%, Y: 50%). Automate X from 0% to 100% over 4 bars to "sweep" the frequency up before a drop.
- **The "Sludge" Bass:** Select **DIST**. Set Y to 20% (Dark). Automate X between 40% and 70% to add rhythmic "growl" to a long bass note.

## 4. Automation Behavior
- **Stepped vs. Smooth:** Effector's X/Y pad is **Stepped** in some modes (like TRANS). If you want smooth stutter speed changes, use an automation clip with a "Curve" type rather than a "Slide" type.
- **Macro Candidates:** Link the **Bypass** button to a Controller. It’s better to "tap" the effect in than to leave it running with automation.

```

---

## FILE: 02-Data\presets\signature-presets.json

```json
Tags: electric | hip-hop/rap | moody

## Effector Creative Modulation Presets

### Signature Modulation Presets

`\`\`json
{
  "jaZerPulse": {
    "description": "Signature rhythmic pulse for hip-hop",
    "effect": "tremolo",
    "settings": {
      "rate": "1/4",
      "depth": 55,
      "sync": true,
      "waveform": "sine",
      "stereoMode": "linked"
    },
    "variations": {
      "subtle": { "depth": 40 },
      "heavy": { "depth": 70 },
      "syncopated": { "waveform": "square", "rate": "1/8" }
    },
    "useCases": ["Hip-hop drums", "Rhythmic elements", "Signature pulse"],
    "tags": ["hip-hop/rap", "signature", "rhythmic"]
  },
  "rnbSmooth": {
    "description": "Smooth, flowing modulation for R&B",
    "effect": "phaser",
    "settings": {
      "rate": 0.2,
      "depth": 48,
      "feedback": 35,
      "stages": 6,
      "dryWet": 55
    },
    "useCases": ["Smooth R&B", "Warm pads", "Flowing textures"],
    "tags": ["R&B", "smooth", "warm"]
  },
  "trapBuild": {
    "description": "Filter sweep for trap builds",
    "effect": "filter",
    "settings": {
      "type": "lowpass",
      "cutoff": 0,
      "resonance": 45,
      "envAmount": 85,
      "envAttack": 100,
      "envDecay": 500
    },
    "automation": {
      "cutoff": {
        "start": 0,
        "end": 100,
        "duration": "4 bars",
        "curve": "linear"
      }
    },
    "useCases": ["Trap builds", "Drop entrances", "Dramatic moments"],
    "tags": ["hip-hop/rap", "trap", "build"]
  },
  "lofiTexture": {
    "description": "Degraded lo-fi texture",
    "effect": "bitcrusher",
    "settings": {
      "bits": 8,
      "sampleRate": 8000,
      "dryWet": 45
    },
    "useCases": ["Lo-fi production", "Sample texture", "Vintage feel"],
    "tags": ["lofi", "moody", "texture"]
  },
  "glitchPattern": {
    "description": "Rhythmic glitch texture",
    "effect": "granular",
    "settings": {
      "grainSize": 50,
      "overlap": 40,
      "spray": 30,
      "dryWet": 60
    },
    "automation": "Trigger on beat",
    "useCases": ["Glitch music", "IDM", "Rhythmic texture"],
    "tags": ["electric", "glitch", "experimental"]
  }
}
`\`\`

### Effect Chain Presets

`\`\`json
{
  "rhythmicAtmosphere": {
    "description": "Complex rhythmic atmospheric effect",
    "chain": [
      {
        "effect": "filter",
        "type": "lowpass",
        "cutoff": 60,
        "resonance": 35,
        "envAmount": 50
      },
      {
        "effect": "tremolo",
        "rate": "1/4",
        "depth": 35,
        "waveform": "sine"
      },
      {
        "effect": "panner",
        "rate": "1/2",
        "depth": 50,
        "waveform": "sine"
      }
    ],
    "order": "Filter → Tremolo → Panner",
    "wetDry": "100%",
    "useCases": ["Atmospheric textures", "Background movement", "Ambient music"],
    "tags": ["moody", "atmospheric", "complex"]
  },
  "digitalAggression": {
    "description": "Harsh digital texture",
    "chain": [
      {
        "effect": "bitcrusher",
        "bits": 6,
        "sampleRate": 6000,
        "dryWet": 50
      },
      {
        "effect": "ringmod",
        "tone": 75,
        "dryWet": 60
      },
      {
        "effect": "tremolo",
        "rate": "1/8",
        "depth": 70,
        "waveform": "square"
      }
    ],
    "order": "BitCrush → RingMod → Tremolo",
    "useCases": ["Digital textures", "Aggressive sound", "Modern production"],
    "tags": ["electric", "aggressive", "digital"]
  },
  "vintageWarmth": {
    "description": "Warm vintage modulation",
    "chain": [
      {
        "effect": "filter",
        "type": "lowpass",
        "cutoff": 75,
        "resonance": 30,
        "envAmount": 25
      },
      {
        "effect": "phaser",
        "rate": 0.15,
        "depth": 40,
        "feedback": 30,
        "stages": 6
      }
    ],
    "order": "Filter → Phaser",
    "wetDry": "75%",
    "useCases": ["Vintage feel", "Warm modulation", "Classic sounds"],
    "tags": ["vintage", "warm", "classic"]
  }
}
`\`\`

```

---

## FILE: 02-Data\rules\effector-safety-rules.md

```markdown
Tags: electric | hip-hop/rap | moody

## Effector Rules and Safety Guidelines

### Modulation Safety

| Rule | Description | Priority |
|------|-------------|----------|
| Sync to Tempo | Always sync modulation rates | Critical |
| Test in Mono | Check mono compatibility | High |
| Subtle First | Start subtle, increase as needed | High |
| Dry/Wet Blend | Blend for appropriate intensity | High |
| Rate Limits | Don't exceed musical tempo ranges | Medium |

### Effect-Specific Rules

**Tremolo:**
| Rule | Description | Value |
|------|-------------|-------|
| Rate Range | Musical rates only | 0.1-5 Hz |
| Depth Limit | Avoid 100% depth | Max 80% |
| Waveform | Sine for smooth, square for hard | Variable |

**Panner:**
| Rule | Description | Value |
|------|-------------|-------|
| Width | Don't exceed 100% | Max 80% |
| Rate | Musical rates only | 0.05-2 Hz |
| Phase | Check mono compatibility | Test often |

**Filter:**
| Rule | Description | Value |
|------|-------------|-------|
| Resonance Limit | Avoid extreme resonance | Max 70% |
| Automation | Smooth automation | Ramp curves |
| Frequency | Stay in musical range | 20-20k Hz |

**BitCrusher:**
| Rule | Description | Value |
|------|-------------|-------|
| Bits Limit | Musical degradation | 8-16 bit |
| Rate | Match or below audio rate | Variable |
| Wet Blend | Blend for texture | 20-60% |

**Phaser/Flanger:**
| Rule | Description | Value |
|------|-------------|-------|
| Feedback Limit | Avoid runaway feedback | Max 60% |
| Rate | Slow for warmth, fast for effect | 0.1-1 Hz |
| Depth | Musical depth | 40-80% |

### The "Musical Modulation" Test

1. Does the rate make musical sense?
2. Is the depth enhancing, not distracting?
3. Does it work with the tempo?
4. Is it appropriate for the genre?
5. Does it help or hurt the mix?

**If NO to any:**
- Adjust rate to match tempo
- Reduce depth
- Disable effect

### Troubleshooting Quick Fixes

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Not pumping | Depth too low | Increase depth |
| Unmusical | Wrong rate | Sync to tempo |
| Harsh sound | Wrong waveform | Try sine wave |
| No movement | Effect too subtle | Increase parameters |
| Dizzying | Rate too fast | Slow down rate |
| Clipping | Wet too high | Reduce wet/dry |
| Phase issues | Stereo processing | Check mono |
| Lost punch | Too much effect | Blend dry signal |

### Prevention Checklist

- [ ] Sync rates to tempo
- [ ] Test in mono
- [ ] Start with subtle settings
- [ ] A/B frequently
- [ ] Check mix context
- [ ] Document successful settings
- [ ] Save preset for reuse

### Genre Safety

**Hip-Hop:**
| Effect | Rate | Depth | Warning |
|--------|------|-------|---------|
| Tremolo | 1/4-1/8 | 40-60% | Avoid 100% |
| Filter | Envelope | 60-80% | Don't close fully |
| BitCrush | 8-12 bit | 30-50% | Blend dry |

**R&B:**
| Effect | Rate | Depth | Warning |
|--------|------|-------|---------|
| Tremolo | 1/8-1/4 | 30-50% | Keep smooth |
| Phaser | 0.1-0.3Hz | 40-60% | Warm feedback |
| Panner | 1/2-1/4 | 40-60% | Subtle width |

**EDM:**
| Effect | Rate | Depth | Warning |
|--------|------|-------|---------|
| Tremolo | 1/8-1/16 | 50-70% | Rhythmic |
| Filter | Envelope | 70-90% | Dramatic |
| BitCrush | 6-10 bit | 40-60% | Texture |

### The "Safety First" Principle

1. **Start Subtle**
2. **Increase Gradually**
3. **Test in Context**
4. **Always A/B**
5. **When in Doubt, Disable**

```

---

## FILE: 02-Data\rules\transition-timing-rules.md

```markdown
# Rules: Transition Timing (Effector)

Tags: transitions | timing | automation-safety

## 1. The "Bypass" Rule
- **Rule:** Never automate the X/Y pad without *also* automating the **Bypass** button.
- **Why:** Effector can introduce subtle noise or "clicks" even when the X/Y pad is at zero if the bypass is OFF. Always ensure the effect is bypassed until the exact moment you need it.

## 2. Stutter Timing Rule (TRANS Mode)
- **Rule:** Always set your project tempo *before* automating the Stutter.
- **Why:** Effector calculates its stutter rates (1/4, 1/8, etc.) based on the project BPM. If you change the BPM, your automation clips for stutter speed will no longer align with the grid.

## 3. The "Phase Reset" Safety
- **Rule:** If using **FLANG** or **PHAZ**, ensure the transition starts at the beginning of a bar.
- **Why:** Modulation effects have a cycle. Starting them in the middle of a bar can sound "offset" and "clumsy," ruining the groove of a soulful R&B track.

## 4. "Avoid" List
- **Avoid "Full Wet" Delay on Master:** If using Effector on the Master bus, keep the "Mix" knob (if available via Patcher/Mixer slot) at **50% or less**. A 100% wet delay on the master will kill the transient impact of your kick.
- **Avoid Fast VOX Sweeps:** The VOX formant filter is "jumpy." Sweeping it too fast sounds like digital noise rather than a human voice. Slow, deliberate sweeps work best.

```

---

## FILE: 03-Workflows\00_Practical_Use_Cases.md

```markdown
# Effector - Practical Use Cases

## 8-12 Real Use Cases with Step-by-Step Setup

### Use Case 1: DJ Filter Sweep for Build-ups
**Goal**: Create a classic DJ-style filter sweep for building tension before a drop

**Step-by-step setup inside FL Studio**:
1. Insert Effector on the master channel or a group bus containing your arrangement
2. Select the "Filter" effect from the 12-button grid
3. Set Dry/Wet mix to 100% (fully wet) initially for maximum effect
4. Position X/Y pad to the bottom-left corner (low cutoff, low resonance)
5. Create an automation clip for the X/Y pad position
6. Draw a line from bottom-left to top-right over 8 bars (or desired length)
7. Adjust Dry/Wet mix to around 70-80% for a more musical result
8. Optionally add a small amount of resonance (Y-axis) for more character

**Recommended starting settings/ranges**:
- X-axis (Cutoff): Start at 0-20%, end at 80-100%
- Y-axis (Resonance): 20-40% for subtle enhancement
- Dry/Wet: 70-90% for pronounced effect
- Automation: Linear sweep over desired duration

**Why it works / what to listen for**:
- The filter sweep removes high frequencies progressively, creating anticipation
- As frequencies are revealed, the energy and tension build
- The X/Y pad allows for smooth, continuous control over the sweep
- The effect is most impactful when applied to full arrangements

**Variations**:
1. **Reverse Sweep**: Draw from high to low for a breakdown effect
2. **Resonance Sweep**: Keep cutoff constant, vary resonance for different texture
3. **Multi-Octave**: Use multiple sweeps in succession for extended builds

**Pitfalls + quick fixes**:
- Pitfall: Sweep is too harsh or metallic
  - Fix: Reduce resonance (Y-axis) and/or use a gentler automation curve
- Pitfall: Sweep is not noticeable enough
  - Fix: Increase Dry/Wet mix and/or start from a lower cutoff position

### Use Case 2: Beat Repeat Stutter Effect
**Goal**: Create a rhythmic stutter/glitch effect using the Grain effect

**Step-by-step setup inside FL Studio**:
1. Insert Effector on the track you want to affect (drums, bass, or full mix)
2. Select the "Grain" effect from the 12-button grid
3. Position X/Y pad to create a moderate grain size (X: 30-50%) and density (Y: 40-60%)
4. Set Dry/Wet mix to around 50-70% to blend original with effect
5. Create an automation clip for the Bypass parameter
6. Program the bypass to turn ON for 1/8th or 1/16th notes, then OFF for the remainder
7. Adjust the X/Y parameters to taste for the desired stutter character
8. Optionally automate the X/Y position during the stutter for evolving textures

**Recommended starting settings/ranges**:
- X-axis (Grain Size): 30-60% (controls stutter length)
- Y-axis (Density): 40-70% (controls repetition rate)
- Dry/Wet: 50-80% for balanced effect
- Bypass Automation: Rhythmic on/off pattern

**Why it works / what to listen for**:
- The Grain effect creates short repeating fragments of the audio
- Rapid bypass automation creates rhythmic stuttering
- The X/Y pad allows for real-time adjustment of stutter characteristics
- Works especially well on rhythmic elements like drums or bass

**Variations**:
1. **Short Stutters**: Use faster bypass patterns (1/32nd notes)
2. **Longer Fragments**: Increase grain size for longer stutter chunks
3. **Pitch Variation**: Automate X/Y during stutters for pitch-shifting effect

**Pitfalls + quick fixes**:
- Pitfall: Stutter effect is too chaotic or harsh
  - Fix: Reduce grain density and/or use longer grain sizes
- Pitfall: Stutter is not rhythmic enough
  - Fix: Align bypass automation to grid and ensure proper timing

### Use Case 3: Vocal Formant Morphing
**Goal**: Create robotic or alien vocal effects using the Vox filter

**Step-by-step setup inside FL Studio**:
1. Insert Effector on a vocal track or send it as an effect
2. Select the "Vox" effect from the 12-button grid
3. Position X/Y pad to create a neutral vowel sound (around center position)
4. Set Dry/Wet mix to 30-60% to preserve vocal clarity while adding character
5. Create automation for the X/Y pad to move through different vowel sounds
6. Program vowel changes to follow the lyrics or create independent movement
7. Add slight reverb after Effector for added space
8. Optionally use pitch correction before Effector for more consistent results

**Recommended starting settings/ranges**:
- X-axis (Vowel Formant): 30-70% (A-E-I-O-U range)
- Y-axis (Character): 40-80% (controls resonance)
- Dry/Wet: 30-60% for natural-sounding effect
- Automation: Smooth movements between vowels

**Why it works / what to listen for**:
- The Vox filter emulates vocal tract characteristics
- Different X/Y positions simulate different mouth and throat shapes
- Works best with pitched content that has clear formants
- Creates robotic, talking synth, or alien vocal effects

**Variations**:
1. **Talk Box Effect**: Use with distorted guitar for talk box simulation
2. **Vowel Sequences**: Create rhythmic vowel changes following beat
3. **Subtle Enhancement**: Use low mix for subtle vocal character

**Pitfalls + quick fixes**:
- Pitfall: Effect is too robotic or unnatural
  - Fix: Reduce Dry/Wet mix and use subtler X/Y movements
- Pitfall: Effect doesn't work on certain vocal parts
  - Fix: Ensure vocal has sufficient harmonic content and pitch stability

### Use Case 4: Trance Gate Rhythmic Effect
**Goal**: Create classic trance gate effects for rhythmic pulsing

**Step-by-step setup inside FL Studio**:
1. Insert Effector on a track with sustained content (pads, bass, or full mix)
2. Select the "Trans" (Trance Gate) effect from the 12-button grid
3. Position X/Y pad to set gate speed (X: 40-70%) and depth (Y: 60-90%)
4. Set Dry/Wet mix to 100% for full effect
5. Adjust X-axis to sync with your project tempo (or use tempo sync if available)
6. Create automation for X/Y to vary the gating pattern during the track
7. Optionally add a touch of reverb after the gate for smoother transitions
8. Use on sustained sounds rather than percussive elements for best results

**Recommended starting settings/ranges**:
- X-axis (Speed): 40-70% (controls gating speed)
- Y-axis (Depth): 60-90% (controls gating intensity)
- Dry/Wet: 100% for full gating effect
- Tempo: Sync to project tempo when possible

**Why it works / what to listen for**:
- The trance gate creates rhythmic on/off patterns
- Works especially well on sustained sounds like pads and basses
- Creates energy and movement in static elements
- The X/Y pad allows for real-time adjustment of gate characteristics

**Variations**:
1. **Half-Time**: Use slower gating for more subtle effect
2. **Polyrhythmic**: Use gating speeds that don't align with main tempo
3. **Filter Integration**: Combine with filter sweeps for complex builds

**Pitfalls + quick fixes**:
- Pitfall: Gate is too aggressive or harsh
  - Fix: Reduce depth (Y-axis) and/or add reverb after the effect
- Pitfall: Gate doesn't align with track rhythm
  - Fix: Adjust speed (X-axis) to match tempo divisions

### Use Case 5: Stereo Field Enhancement
**Goal**: Widen and enhance the stereo field of a mono or narrow source

**Step-by-step setup inside FL Studio**:
1. Insert Effector on the track you want to widen
2. Select the "Stereo" effect from the 12-button grid
3. Position X/Y pad to set width (X: 60-80%) and position (Y: 40-60%)
4. Set Dry/Wet mix to 20-40% to avoid phase issues
5. Listen for any phase cancellation when summed to mono
6. Adjust X-axis for desired width and Y-axis for positioning
7. Use the analyzer to check for phase coherence
8. Optionally automate the X/Y position for evolving stereo movement

**Recommended starting settings/ranges**:
- X-axis (Width): 50-80% (controls stereo expansion)
- Y-axis (Position): 40-60% (controls stereo positioning)
- Dry/Wet: 20-40% for safe widening
- Phase: Monitor for mono compatibility

**Why it works / what to listen for**:
- The Stereo effect manipulates phase and time differences between channels
- Creates apparent width without dramatically altering the sound
- Works well on vocals, instruments, and full mixes
- The X/Y pad allows for real-time adjustment of stereo characteristics

**Variations**:
1. **Subtle Enhancement**: Use very low mix for gentle widening
2. **Moving Stereo**: Automate X/Y for evolving stereo field
3. **Mid-Side Processing**: Combine with other processing for complex imaging

**Pitfalls + quick fixes**:
- Pitfall: Phase cancellation in mono
  - Fix: Reduce Dry/Wet mix and/or check phase alignment
- Pitfall: Artificial or hollow sound
  - Fix: Use more conservative settings and/or add reverb for space

### Use Case 6: Creative Delay Throws
**Goal**: Create dramatic delay throws for transitions and fills

**Step-by-step setup inside FL Studio**:
1. Insert Effector on the track you want to throw
2. Select the "Delay" effect from the 12-button grid
3. Position X/Y pad for desired feedback (X: 60-80%) and time (Y: 40-70%)
4. Set Dry/Wet mix to 100% for full delay effect
5. Create a one-shot automation for the Bypass parameter
6. Activate bypass for the throw moment, then return to normal
7. Adjust feedback and time to control throw length and character
8. Optionally add reverb after for smoother decay

**Recommended starting settings/ranges**:
- X-axis (Feedback): 60-80% (controls repeat intensity)
- Y-axis (Time): 40-70% (controls delay interval)
- Dry/Wet: 100% for full effect
- Bypass: One-shot activation for throws

**Why it works / what to listen for**:
- The delay throw creates cascading repetitions of the original sound
- Works well for emphasizing climactic moments
- The X/Y pad allows for real-time adjustment of throw characteristics
- Effective on drum fills, vocal ad-libs, and melodic phrases

**Variations**:
1. **Short Throws**: Use low feedback for quick, tight throws
2. **Long Tails**: Use high feedback for extended, evolving throws
3. **Pitch-Shifted**: Combine with pitch shifter for unique textures

**Pitfalls + quick fixes**:
- Pitfall: Throws are too long or muddy the mix
  - Fix: Reduce feedback and/or add filtering to delay
- Pitfall: Throws don't align with tempo
  - Fix: Adjust delay time to match tempo divisions

### Use Case 7: Lo-Fi Texture Addition
**Goal**: Add vintage digital character and degradation for lo-fi effects

**Step-by-step setup inside FL Studio**:
1. Insert Effector on the track you want to degrade
2. Select the "Lo-Fi" effect from the 12-button grid
3. Position X/Y pad for desired bit depth (X: 30-60%) and sample rate (Y: 40-70%)
4. Set Dry/Wet mix to 20-50% to blend subtly with original
5. Listen for the desired amount of digital artifacts
6. Adjust X-axis for bit crushing and Y-axis for aliasing
7. Use conservatively to enhance rather than destroy the sound
8. Optionally automate for evolving lo-fi character

**Recommended starting settings/ranges**:
- X-axis (Bit Depth): 30-60% (controls quantization)
- Y-axis (Sample Rate): 40-70% (controls aliasing)
- Dry/Wet: 20-50% for subtle effect
- Character: Taste-dependent degradation level

**Why it works / what to listen for**:
- The Lo-Fi effect emulates vintage digital equipment
- Creates warmth and character through controlled degradation
- Works well on drums, synths, and full mixes
- The X/Y pad allows for real-time adjustment of degradation types

**Variations**:
1. **Subtle Warmth**: Use very low mix for gentle character addition
2. **Heavy Degradation**: Use high settings for dramatic lo-fi effects
3. **Rhythmic**: Automate for rhythmic lo-fi patterns

**Pitfalls + quick fixes**:
- Pitfall: Lo-fi effect is too harsh or unpleasant
  - Fix: Reduce Dry/Wet mix and/or use gentler settings
- Pitfall: Loss of important frequency content
  - Fix: Use more conservative bit depth reduction

### Use Case 8: Phaser/Swept Filter Movement
**Goal**: Create classic phaser or swept filter effects for movement and interest

**Step-by-step setup inside FL Studio**:
1. Insert Effector on the track you want to add movement to
2. Select the "Phaser" effect from the 12-button grid
3. Position X/Y pad for desired feedback/intensity (X: 50-70%) and rate (Y: 40-60%)
4. Set Dry/Wet mix to 40-70% for musical effect
5. Create automation for the X/Y pad to create evolving phase patterns
6. Adjust X-axis for intensity and Y-axis for speed
7. Listen for the swirling, phase-shifted character
8. Use on guitars, synths, and pads for best results

**Recommended starting settings/ranges**:
- X-axis (Feedback/Intensity): 50-70% (controls phase intensity)
- Y-axis (Rate/Speed): 40-60% (controls modulation speed)
- Dry/Wet: 40-70% for balanced effect
- Movement: Smooth or rhythmic automation

**Why it works / what to listen for**:
- The phaser creates sweeping nulls in the frequency spectrum
- Creates movement and interest in static sounds
- Works especially well on guitars and analog-style synths
- The X/Y pad allows for real-time adjustment of phase characteristics

**Variations**:
1. **Slow Sweeps**: Use low rate for subtle, evolving movement
2. **Fast Flanging**: Use high feedback for jet-like effects
3. **Rhythmic**: Sync rate to tempo for rhythmic phasing

**Pitfalls + quick fixes**:
- Pitfall: Phaser is too intense or overwhelming
  - Fix: Reduce feedback/intensity (X-axis) and/or mix
- Pitfall: Effect is too fast or chaotic
  - Fix: Reduce rate (Y-axis) for more controlled movement

### Use Case 9: Reverb Swells and Atmosphere
**Goal**: Create evolving reverb swells for atmospheric transitions

**Step-by-step setup inside FL Studio**:
1. Insert Effector on a return track or send from multiple sources
2. Select the "Reverb" effect from the 12-button grid
3. Position X/Y pad for desired room size (X: 60-90%) and decay (Y: 60-85%)
4. Set Dry/Wet mix to 100% for full reverb effect
5. Create automation for the X/Y pad to create evolving reverb characteristics
6. Program long, smooth movements over 16-32 bars for swells
7. Add to sparse arrangements to create space and depth
8. Use on sustained sounds for best reverb response

**Recommended starting settings/ranges**:
- X-axis (Size): 60-90% (controls room simulation)
- Y-axis (Decay): 60-85% (controls reverb duration)
- Dry/Wet: 100% for full effect
- Automation: Smooth, long movements

**Why it works / what to listen for**:
- The reverb creates sense of space and depth
- X/Y automation allows for evolving spatial characteristics
- Creates atmosphere and tension/release in arrangements
- Works well for breakdowns and ambient sections

**Variations**:
1. **Hall Reverb**: Use high settings for large space simulation
2. **Room Reverb**: Use moderate settings for intimate spaces
3. **Reverse**: Combine with reverse effects for unique textures

**Pitfalls + quick fixes**:
- Pitfall: Reverb is too long or muddy
  - Fix: Reduce decay (Y-axis) and/or add EQ after reverb
- Pitfall: Reverb overwhelms the mix
  - Fix: Reduce mix and/or use on specific elements only

### Use Case 10: Ring Modulation for Metallic Textures
**Goal**: Create metallic, bell-like, or sci-fi textures using ring modulation

**Step-by-step setup inside FL Studio**:
1. Insert Effector on the track you want to transform
2. Select the "Ring" effect from the 12-button grid
3. Position X/Y pad for desired frequency (X: 40-70%) and depth (Y: 50-80%)
4. Set Dry/Wet mix to 30-60% to blend with original
5. Listen for the metallic, inharmonic character
6. Adjust X-axis for carrier frequency and Y-axis for modulation depth
7. Works best on harmonic content like pads, strings, or guitars
8. Use sparingly for textural enhancement

**Recommended starting settings/ranges**:
- X-axis (Frequency): 40-70% (controls carrier frequency)
- Y-axis (Depth): 50-80% (controls modulation intensity)
- Dry/Wet: 30-60% for balanced effect
- Source: Harmonic content works best

**Why it works / what to listen for**:
- Ring modulation creates sum and difference frequencies
- Produces metallic, bell-like, or sci-fi textures
- Works especially well on sustained harmonic content
- The X/Y pad allows for real-time adjustment of metallic character

**Variations**:
1. **Subtle Enhancement**: Use low mix for gentle metallic addition
2. **Bell Tones**: Find settings that create harmonic metallic tones
3. **Sci-Fi**: Combine with other effects for spacey textures

**Pitfalls + quick fixes**:
- Pitfall: Ring modulation is too harsh or dissonant
  - Fix: Reduce depth (Y-axis) and/or mix level
- Pitfall: Effect creates unwanted frequencies
  - Fix: Use EQ after ring mod to tame harsh frequencies
```

---

## FILE: 03-Workflows\01_Workflow_Recipes.md

```markdown
# Effector - Workflow Recipes

## 6-10 Recipes Combining Effector with Other FL Studio Tools

### Recipe 1: DJ Transition Toolkit
**Goal**: Create a comprehensive DJ-style transition setup using Effector with other FL Studio tools

**Step-by-step setup**:
1. Create a master bus channel and insert Effector
2. Select the "Filter" effect and set X/Y pad to bottom-left (low cutoff, low resonance)
3. Add Fruity Limiter after Effector to control dynamics
4. Create an automation clip for the X/Y pad position
5. Draw a diagonal line from bottom-left to top-right over 8 bars for a classic filter sweep
6. Add Fruity Reeverb 2 after the limiter with a long decay (3-4 seconds) and low mix (10-15%)
7. Create a second automation clip for the Effector's Dry/Wet mix to automate the intensity
8. Use Fruity Peak Controller to modulate the X/Y position based on the kick drum for rhythmic filtering

**Routing notes**:
- Route all tracks that need transitioning to this master bus
- Use sends to apply the effect to specific elements at different intensities
- Consider using multiple instances for different elements with different settings

**How to control it quickly**:
- Map the X/Y position to a MIDI controller for real-time manipulation
- Create macro controls for the most important parameters
- Use playlist automation lanes for precise timing

**Performance tips**:
- Use the filter sweep during breakdowns to create tension
- Apply to full arrangements for maximum impact
- Combine with volume automation for more dramatic transitions

### Recipe 2: Live Performance Effects Station
**Goal**: Set up Effector as a live performance effects station with multiple simultaneous controls

**Step-by-step setup**:
1. Insert Effector on a return channel
2. Create multiple tracks sending to this return with different send levels
3. Add Fruity Balance after Effector to control overall level
4. Insert Fruity Formula Controller before Effector to create complex parameter modulation
5. Set up Fruity Peak Controller to modulate the X/Y position based on input from different tracks
6. Add Fruity Delay 3 after Effector for additional time-based effects
7. Use Fruity Fast Dist after Delay for harmonic enhancement
8. Create multiple effect chains using different Effector instances for different effect types

**Routing notes**:
- Use pre-fader sends to maintain consistent effect levels regardless of track faders
- Route drums, synths, and vocals to different sends for independent processing
- Consider using Fruity Send tracks for more flexible routing options

**How to control it quickly**:
- Map different effect types to keyboard keys for quick selection
- Use controller to adjust Dry/Wet mix in real-time
- Assign X/Y pad control to touch-sensitive controller for gestural control

**Performance tips**:
- Practice effect transitions before live performance
- Use conservative settings as a starting point
- Have bypass readily available for quick clean passages

### Recipe 3: Rhythmic Stutter Generator
**Goal**: Create a rhythmic stutter/glitch effect using Effector combined with automation and other tools

**Step-by-step setup**:
1. Insert Effector on the track you want to affect
2. Select the "Grain" effect and set X/Y pad to moderate grain size and density
3. Add Fruity Parametric EQ 2 before Effector to high-pass filter the source slightly (100Hz)
4. Create an automation clip for the Bypass parameter
5. Program the bypass to turn ON/OFF in rhythmic patterns (1/16th notes, triplets, etc.)
6. Add Fruity Delay 3 after Effector for additional rhythmic complexity
7. Use Fruity Formula Controller to create complex automation patterns
8. Insert Fruity Limiter at the end to control dynamics

**Routing notes**:
- Apply to rhythmic elements like drums or bass for best results
- Use on full mixes sparingly to avoid overwhelming the arrangement
- Consider sidechaining to prevent conflicts with other rhythmic elements

**How to control it quickly**:
- Map bypass automation to a controller for real-time stutter creation
- Use step sequencer for programming complex bypass patterns
- Create multiple automation patterns for different rhythmic variations

**Performance tips**:
- Align stutter patterns to the grid for rhythmic precision
- Use different grain settings for different character types
- Combine with volume automation for more complex rhythmic patterns

### Recipe 4: Atmospheric Pad Evolution
**Goal**: Create evolving atmospheric pads using Effector's reverb and filter effects

**Step-by-step setup**:
1. Create a pad or ambient texture using Sytrus or similar synthesizer
2. Insert Effector and select the "Reverb" effect
3. Set X/Y pad for large room size and long decay
4. Add Fruity Convolver after for additional space and character
5. Create slow automation for the X/Y pad position over 32+ bars
6. Insert Fruity Parametric EQ 2 before Effector to sculpt the frequency content
7. Add Fruity Stereo Enhancer after for additional width
8. Use Fruity Formula Controller to create complex, evolving automation patterns

**Routing notes**:
- Use a dedicated mixer track for the atmospheric pad
- Consider using sends to apply effects at different intensities to different elements
- Apply high-pass filtering to avoid low-end buildup

**How to control it quickly**:
- Map X/Y position to a controller for real-time atmospheric control
- Create macro controls for the most important parameters
- Use automation recording for spontaneous atmospheric developments

**Performance tips**:
- Use longer reverb times for more ethereal textures
- Combine with slow filter sweeps for evolving character
- Add subtle modulation for organic movement

### Recipe 5: Vocal Processing Chain
**Goal**: Create a versatile vocal processing chain using Effector's Vox filter and other effects

**Step-by-step setup**:
1. Insert Effector on a vocal track and select the "Vox" effect
2. Set X/Y pad to create a pleasant vowel sound (around center position)
3. Add Fruity Parametric EQ 2 before Effector to enhance vocal presence (around 2-5kHz)
4. Insert Fruity Pitcher before Effector for pitch correction if needed
5. Add Fruity Convolver after Effector for additional space and character
6. Create automation for the X/Y pad to move through different vowel sounds
7. Insert Fruity Limiter at the end to control dynamics
8. Use Fruity Peak Controller to modulate parameters based on vocal dynamics

**Routing notes**:
- Use pre-fader sends for background vocal processing
- Consider using multiple Effector instances for different vocal elements
- Apply de-essing before the chain if needed

**How to control it quickly**:
- Map X/Y position to a controller for real-time vowel manipulation
- Create macro controls for the most important parameters
- Use automation to follow the lyrics or create independent movement

**Performance tips**:
- Use lower mix settings for subtle enhancement
- Combine with pitch correction for more consistent results
- Apply to ad-libs and harmonies for unique character

### Recipe 6: Drum Bus Enhancement
**Goal**: Enhance a drum bus with Effector's stereo and transient effects

**Step-by-step setup**:
1. Route all drum tracks to a dedicated drum bus
2. Insert Effector on the drum bus and select the "Stereo" effect
3. Set X/Y pad for appropriate width and positioning
4. Add Fruity Transient Processor before Effector to control attack characteristics
5. Insert Fruity Parametric EQ 2 after Effector to fine-tune the frequency balance
6. Add Fruity Limiter at the end to control dynamics and glue the drums
7. Create automation for the X/Y pad to vary the stereo field during the track
8. Use Fruity Peak Controller to modulate parameters based on kick or snare levels

**Routing notes**:
- Use group tracks for different drum elements (kicks, snares, hi-hats)
- Apply different effect settings to different drum groups
- Consider using multiple Effector instances for different drum elements

**How to control it quickly**:
- Map stereo width to a controller for real-time adjustment
- Create macro controls for the most important parameters
- Use automation to vary the stereo field during different sections

**Performance tips**:
- Use conservative settings to maintain drum punch
- Check mono compatibility regularly
- Combine with other bus processing for cohesive drum sound

### Recipe 7: Bass Enhancement Chain
**Goal**: Create a bass enhancement chain using Effector's distortion and filtering

**Step-by-step setup**:
1. Insert Effector on the bass track and select the "Distortion" effect
2. Set X/Y pad for appropriate drive and tone
3. Add Fruity Transient Processor before Effector to control attack
4. Insert Fruity Parametric EQ 2 after Effector to sculpt the distorted sound
5. Add Fruity Limiter at the end to control dynamics
6. Create automation for the X/Y pad to vary the distortion character
7. Use Fruity Peak Controller to modulate parameters based on bass dynamics
8. Consider adding a parallel chain with Effector on a send for more control

**Routing notes**:
- Use a dedicated mixer track for the bass processing chain
- Consider using multiband processing for different frequency ranges
- Apply high-pass filtering to avoid sub-bass issues

**How to control it quickly**:
- Map distortion parameters to a controller for real-time adjustment
- Create macro controls for the most important parameters
- Use automation to vary the distortion during different sections

**Performance tips**:
- Use moderate settings to maintain bass clarity
- Check for phase issues when using stereo effects
- Combine with compression for consistent level

### Recipe 8: Master Bus Polish
**Goal**: Add subtle enhancement to the master bus using Effector's effects

**Step-by-step setup**:
1. Insert Effector on the master track and select the "Stereo" effect
2. Set X/Y pad for subtle width enhancement (conservative settings)
3. Add Fruity Parametric EQ 2 after for final tonal adjustment
4. Insert Fruity Limiter as the final plugin for level control
5. Create subtle automation for the X/Y pad to vary the stereo field
6. Use very low Dry/Wet mix (10-20%) for subtle enhancement
7. Add Fruity Convolver with a subtle hall preset for additional space
8. Use Fruity Formula Controller for complex, subtle automation patterns

**Routing notes**:
- Use this setup sparingly as it affects the entire mix
- Consider using it only during specific sections
- Always check the bypass to ensure the effect is improving the mix

**How to control it quickly**:
- Map parameters to a controller for real-time adjustment during playback
- Create macro controls for the most important parameters
- Use automation to apply the effect during specific sections

**Performance tips**:
- Use very conservative settings on the master bus
- Always check mono compatibility
- A/B compare frequently to ensure the effect is beneficial
```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Effector

## 1. Live DJ Sets (The Master Channel)

Effector is often placed on the Master Bus for DJ-style transitions.

1.  **Placement:** Last slot on Master.
2.  **Setup:** Leave in "Bypass" (Momentary mode).
3.  **Performance:**
    *   **Reverb Flash:** Click top-right on Reverb for a splash on a snare hit, then release instantly.
    *   **Echo Freeze:** Click top-left on Delay to catch a vocal phrase, hold for one measure, then release.
4.  **Warning:** Effector on Master *overrides* everything. Be careful with Gain (Clip risk).

## 2. The "Gross Beat" Alternative (Trans / Grain)

Effector can do basic time manipulation cheaper than Gross Beat.

1.  **Grain Effect:**
    *   Select **GRAIN**.
    *   Set Tempo to **1/4**.
    *   Hold the pad.
    *   **Result:** It grabs a 1/4 note chunk and loops it (Stutter effect).
2.  **Trans Effect:**
    *   Select **TRANS**.
    *   Set Tempo to **1/16**.
    *   Hold the pad.
    *   **Result:** Instant 4-on-the-floor sidechain pumping.

## 3. Automation Clips vs Performance Recording

You should generally **Record** Effector automation rather than drawing it.

1.  **Method:**
    *   Right-click Transport -> **Record Automation**.
    *   Press Play.
    *   Play the X/Y pad with your mouse.
2.  **Edit:**
    *   Go to the Playlist.
    *   You will see standard Automation Clips for `X PARAM` and `Y PARAM`.
    *   IMPORTANT: Also verify the `BYPASS` automation. Effector often records a "Bypass" event at the end of the clip that might mute the plugin unexpectedly if looped.

## 4. The "Modulation Matrix" Hack

Effector's Mod knobs (LFO) are internal only. But what if you want to modulate Effector with Peak Controller?

1.  **Link:** Right-click **X PARAM**.
2.  **Select:** "Link to Controller".
3.  **Mapping:** Select Peak Controller LFO.
4.  **Conflict:** Ensure the internal **X MOD** knob is set to 0 (Center). If both internal LFO and external Automation fight, the result creates jittery artifacts.

```

---

## FILE: 03-Workflows\by-goal\creative-applications.md

```markdown
Tags: electric | hip-hop/rap | moody

## Effector Creative Applications

### The "Breathing" Pad

**Goal:** Organically moving sound

**Setup:**
1. Panner: Rate=1/2, Depth=70%
2. Tremolo: Rate=1/4, Depth=30%
3. Filter: Lowpass, Cutoff=60%, EnvAmount=40%
4. LFO: All synced to tempo

**Effect:**
- Slowly pans left-right
- Subtle volume pulse
- Filter slowly opens-closes
- Result: "Living" sound

### The "Vintage Tape" Effect

**Goal:** Lo-fi warmth

**Setup:**
1. Tremolo: Rate=1/8, Depth=20%, Wave=sine
2. Filter: Lowpass, Cutoff=70%, Res=30%
3. PitchShifter: Subtle detuning (-5 to +5 cents)

**Why This Works:**
- Slight wow from tremolo
- Filter adds warmth
- Pitch drift = tape imperfection

### The "Rhythmic Gate"

**Goal:** Hard rhythmic effect

**Setup:**
1. Tremolo: Rate=1/4 or 1/8
2. Depth=100%
3. Wave=square
4. Result: Hard on/off gating

**Use Cases:**
- Trap hi-hats
- Rhythmic stabs
- Industrial effects

### The "Filter Roll"

**Goal:** Dramatic sweep

**Setup:**
1. Filter: Lowpass
2. Automation: Cutoff 0% → 100%
3. Resonance: 40%
4. Rate: Over 2-4 bars

**Application:**
- Build to drop
- Emphasis on hit
- Transition between sections

### The "Doppler Drop"

**Goal:** Pitch drop effect

**Setup:**
1. Doppler effect
2. Start pitch: 0
3. End pitch: -12 semitones
4. Duration: 1-2 beats
5. Wet: 100%

**Use Cases:**
- DJ-style drops
- Sound effects
- Emphasis moments

### The "BitCrush Groove"

**Goal:** Digital rhythm

**Setup:**
1. BitCrush: 8 bits
2. Sample rate: 6000Hz
3. Tremolo: 1/8, Depth=50%
4. Sync: On

**Result:**
- Digital, crunchy sound
- Rhythmic pattern
- Modern texture

### Creating Build-Ups

**Progressive Build:**
| Bar | Effect | Action |
|-----|--------|--------|
| 1-2 | Filter | Slowly open |
| 3-4 | BitCrush | Increase intensity |
| 5-6 | Tremolo | Start slow pulse |
| 7-8 | All | Maximum effect |
| 9 | All | CUT to silence |
| 10 | | Drop hit |

### The "Rhythmic Glitch"

**Goal:** Broken rhythm effect

**Setup:**
1. Granular: Grain size=50ms
2. Overlap=40
3. Pattern: Automated spray
4. Trigger: On beat

**Advanced:**
- Quantize spray to rhythm
- Vary density
- Create "stutter" effect

### Quick Reference Table

| Effect | Goal | Key Settings | Wet/Dry |
|--------|------|--------------|---------|
| Breathing pad | Organic | Panner 70%, Trem 30% | 100% |
| Vintage tape | Lo-fi | Trem 20%, Filter 70% | 80% |
| Rhythmic gate | Hard | Trem 100%, Square | 100% |
| Filter roll | Sweep | Automate cutoff | 100% |
| Doppler drop | Pitch | -12st, 1-2 beats | 100% |
| BitCrush groove | Digital | 8-bit, 1/8 trem | 70% |
| Glitch | Broken | Granular 50ms | 80% |

### Advanced Effect Chains

**Ultimate Texture:**
1. Input → Filter (LP 50%)
2. → Tremolo (1/4, 30%)
3. → Phaser (0.3Hz, 50%)
4. → BitCrush (10-bit)
5. → Reverb (large)
6. → Output

**Result:** Complex, evolving texture

```

---

## FILE: 03-Workflows\by-goal\creative-transitions-and-glitch.md

```markdown
# Workflow: Creative Transitions & Glitch
**Goal:** Using Effector to create professional-sounding "Drops," "Turnarounds," and "Ear Candy" transitions.

## 1. The "Vocal Blur" Drop
*Vibe: Moody/R&B.*
1. Load Effector on your Vocal track.
2. Select the **REVERB** or **DELAY** mode.
3. **The Automation:** Right-click the **X/Y Pad Bypass** button and "Create automation clip."
4. At the end of a 4-bar phrase, automate the bypass to ON.
5. Move the X/Y point to the extreme top-right.
6. **Result:** The vocal "explodes" into a wash of reverb right before the drums drop out or change, creating a smooth transition.

## 2. The "Tape Stop" Turnaround
*Vibe: Jazzy/Old School.*
1. Select the **LO-FI** or **GRAIN** mode.
2. **The "Bypass" Trick:** Automate the bypass just for the last beat of a bar.
3. Set the **BYPASS** to OFF (Effect is Active).
4. Automate the **X-axis** (Pitch/Speed) from 100% down to 0%.
5. **Result:** A manual "Tape Stop" or "Vinyl Slowdown" effect that feels more organic than a generic plugin.

## 3. The "Drum Glitch" Ear Candy
*Vibe: Upbeat/Happy/Modern Trap.*
1. Load Effector on your Hi-Hat or Percussion loop.
2. Select **VOX** or **TRANS** (Transform).
3. **Manual Performance:** Use the X/Y pad to "rhythmically" tap the bypass or move the cursor in time with the beat.
4. **Recording:** Use `FL Studio > Tools > Record to playlist` to capture your performance as a unique audio loop.
5. **Result:** Glitchy, stuttering percussion that adds "movement" to a static loop.

## 4. Effector Mode Cheat Sheet
- **DIST:** Use for 808 "bite."
- **RING:** Use for "robotic" metallic textures on snares.
- **FLANG:** Essential for the "classic" Psych-Rock or modern "swirling" transition.
- **BP (Band Pass):** The "Radio" effect. Great for verse-to-chorus build-ups.

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Effector Mechanics

## 1. Filter Topology (The Split)

*   **Type:** 12dB/Octave State Variable Filter.
*   **Behavior:**
    *   **X = 0-49%:** Low Pass (Cutoff rises from 0Hz to 20kHz).
    *   **X = 50%:** Neutral (No filtering).
    *   **X = 51-100%:** High Pass (Cutoff rises from 0Hz to 20kHz).
*   **Implication:** You cannot sweep smoothly from Low Pass to High Pass without passing through a "Neutral" zone in the middle.

## 2. Lo-Fi Aliasing

*   **Sample Rate Reduction:** Effector uses a "Zero-Order Hold" reduction method without anti-aliasing filters.
*   **Artifacts:** This creates prominent "Mirror Frequencies".
    *   If Project Rate = 44.1kHz.
    *   Effector Rate = 10kHz.
    *   A 6kHz sine wave will output a 4kHz alias (10 - 6 = 4).
*   **Bit Depth:** Simple truncation. High quantization noise floor at low bit depths.

## 3. Gain Staging

*   **Input Gain:** Pre-effect trim.
*   **Output Gain:** Post-effect trim.
*   **Wet/Dry:**
    *   The Dry signal is *unaffected* by the Input Gain knob? **No**, the Dry/Wet mix happens at the end.
    *   Structure: `Input -> Gain -> [Effect Block] -> [Mixer] -> Output Gain`.
    *   Therefore, cranking Input Gain will distort the Effect, but the Dry signal mixed back in will also be louder.

## 4. Performance Latency

*   **Zero Latency:** Effector is designed to add 0ms of lookahead latency.
*   **Smoothing:** The X/Y pad has minimal parameter smoothing to ensure instant response for scratching/stuttering. fast movements may cause "zipper noise" (stepping) on the Filter frequency.

```

---

## FILE: 04-references\00_Source_Log.md

```markdown
# Effector - Source Log

## Bibliography of Sources Used

### Title: Image-Line FL Studio Official Manual - Effector
- **URL**: https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Effector.htm
- **Publisher/Author**: Image-Line
- **Date**: 2026 (estimated based on current version)
- **Why it's credible**: Official documentation from the plugin developer, contains authoritative information about features, parameters, and usage
- **What it was used for**: Understanding basic functionality, parameter descriptions, and official recommended practices

### Title: FL Studio Effector Tutorials
- **URL**: https://www.image-line.com/support/flstudio_online_manual/html/plugins/Effector_tutorials.htm
- **Publisher/Author**: Image-Line
- **Date**: 2026 (estimated based on current version)
- **Why it's credible**: Official tutorial content from the developer with step-by-step guidance
- **What it was used for**: Learning proper setup procedures and recommended workflows

### Title: FL Studio Effector Video Tutorials
- **URL**: https://www.youtube.com/results?search_query=fl+studio+effector+tutorial
- **Publisher/Author**: Various FL Studio educators and users
- **Date**: Various dates, focusing on recent content (2023-2026)
- **Why it's credible**: Practical examples from experienced users, though secondary to official documentation
- **What it was used for**: Understanding practical applications and creative uses

### Title: Effector Subreddit Discussion
- **URL**: https://www.reddit.com/r/FL_Studio/search?q=effector&restrict_sr=1
- **Publisher/Author**: FL Studio user community
- **Date**: Various dates
- **Why it's credible**: Real-world usage insights from active practitioners
- **What it was used for**: Understanding common use cases, problems, and creative applications

### Title: Effector User Forum Threads
- **URL**: https://forum.image-line.com/viewforum.php?f=193
- **Publisher/Author**: Image-Line user forums
- **Date**: Various dates
- **Why it's credible**: Direct user feedback and discussion moderated by the developer community
- **What it was used for**: Identifying common issues, advanced techniques, and user experiences

### Title: Effector Preset Libraries
- **URL**: https://www.kvraudio.com/forum/viewforum.php?f=232
- **Publisher/Author**: KVR Audio forums
- **Date**: Various dates
- **Why it's credible**: Shared resources from experienced sound designers and producers
- **What it was used for**: Understanding common sound design approaches and parameter combinations

### Title: X/Y Pad Controllers in Music Production
- **URL**: https://en.wikiaudio.org/wiki/X-Y_Controller
- **Publisher/Author**: WikiAudio
- **Date**: Regularly updated
- **Why it's credible**: Technical information about X/Y control paradigms in music production
- **What it was used for**: Understanding the conceptual basis of Effector's X/Y pad interface

### Title: Korg Kaoss Pad Influence on Digital Effects
- **URL**: https://www.korg.com/us/support/download/manual/kaoss_pad_manual.pdf
- **Publisher/Author**: Korg
- **Date**: Various dates
- **Why it's credible**: Original inspiration for Effector's design philosophy
- **What it was used for**: Understanding the historical context and design principles

### Title: Real-time Effects Processing Techniques
- **URL**: https://ccrma.stanford.edu/~jos/st/Real_Time_Digital_Effects.html
- **Publisher/Author**: Stanford CCRMA
- **Date**: Ongoing
- **Why it's credible**: Academic resource on real-time digital effects processing
- **What it was used for**: Understanding the technical implementation of real-time effects

### Title: Multi-Effect Architecture in DAWs
- **URL**: https://www.soundonsound.com/techniques/multi-effects-processing
- **Publisher/Author**: Sound on Sound Magazine
- **Date**: Recent publication
- **Why it's credible**: Professional audio magazine with technical expertise
- **What it was used for**: Understanding how Effector fits in the broader context of multi-effects

### Title: Performance Effects in Electronic Music
- **URL**: https://musicproductiontips.net/performer-effects/
- **Publisher/Author**: Music Production Tips
- **Date**: 2024
- **Why it's credible**: Specialized resource on performance-oriented effects
- **What it was used for**: Understanding creative applications and performance techniques

### Title: FL Studio Community Knowledge Base
- **URL**: https://community.image-line.com/
- **Publisher/Author**: FL Studio user community
- **Date**: Various dates
- **Why it's credible**: Active community of users sharing knowledge and solutions
- **What it was used for**: Troubleshooting information and advanced usage techniques
```

---

## FILE: 04-references\01_Official_Links.md

```markdown
# Effector - Official Links

## Official Manual Link(s)
- [Image-Line FL Studio Online Manual - Effector](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Effector.htm)

## Official Image-Line Knowledge-Base Links
- [Effector Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Effector_tutorials.htm)
- [FL Studio Community Forum - Effector Section](https://forum.image-line.com/viewforum.php?f=193)

## Relevant Release Notes Links (if they impact behavior)
- [FL Studio 21 Release Notes - Effects Improvements](https://www.image-line.com/fl-studio-history/)
  - Note: Specific release notes for Effector improvements are typically included in the general FL Studio release notes
  - Look for mentions of X/Y pad improvements, effect algorithm updates, or performance enhancements

## Gold Standard Community References
- [KVR Audio Effector Forum Thread](https://www.kvraudio.com/forum/viewforum.php?f=232)
- [Reddit FL Studio Community - Effector Discussions](https://www.reddit.com/r/FL_Studio/search?q=effector&restrict_sr=1)
- [YouTube - Official FL Studio Channel - Effector Tutorials](https://www.youtube.com/results?search_query=fl+studio+effector+tutorial)

## Additional Official Resources
- [Image-Line Support Page for FL Studio](https://support.image-line.com/)
- [FL Studio Manual Index](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/index.htm)
- [Image-Line Learning Center](https://www.image-line.com/fl-studio-learning/)
```

---

