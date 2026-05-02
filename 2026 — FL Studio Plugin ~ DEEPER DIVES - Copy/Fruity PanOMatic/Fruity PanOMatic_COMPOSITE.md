# Fruity PanOMatic - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity PanOMatic - Auto-Panner & Tremolo

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██████╗  █████╗ ███╗   ██╗ ██████╗ ███╗   ███╗ █████╗ ████████╗██╗ ██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗██╔══██╗████╗  ██║██╔═══██╗████╗ ████║██╔══██╗╚══██╔══╝██║██╔════╝ 
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██████╔╝███████║██╔██╗ ██║██║   ██║██╔████╔██║███████║   ██║   ██║██║      
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██╔═══╝ ██╔══██║██║╚██╗██║██║   ██║██║╚██╔╝██║██╔══██║   ██║   ██║██║      
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██║     ██║  ██║██║ ╚████║╚██████╔╝██║ ╚═╝ ██║██║  ██║   ██║   ██║╚██████╗ 
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ 
`\`\`

**Plugin Type:** Panner / Tremolo / Volume LFO
**Category:** Effect / Modulation
**Official Manual:** [Image-Line Fruity PanOMatic Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20PanOMatic.htm)

---

## 🎯 What is Fruity PanOMatic?

Fruity PanOMatic is a classic, lightweight modulation effect dedicated to one job: Moving sound. It includes a **Panning LFO** (Auto-Pan) and a **Volume LFO** (Tremolo). While simple, it is invaluable for adding life to hi-hats, creating swirling pads, or inducing rhythmic gating effects.

**Key Capabilities:**
- **Auto-Pan:** Moves sound Left/Right automatically.
- **Tremolo:** Modulates volume Up/Down automatically.
- **LFO Shapes:** Sine, Triangle, Square.
- **Speed & Amount:** Precise control over the modulation.
- **Low CPU:** Negligible performance cost.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **auto-pan-vs-tremolo.md**
3. Create **parameter-cheat-sheet.md**
4. Apply to a static Hi-Hat and increase the Pan Amount.

### For Sound Designers:
1. Study **rhodes-tremolo.md**
2. Review **rhythmic-gating-square.md** (Using Square LFO)
3. Learn **binaural-swirls.md** (Slow Sine Pan)

### For Mix Engineers:
1. Study **hi-hat-movement.md**
2. Review **cleaning-center-channel.md** (Moving heavy elements slightly)

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Pan:** Static position.
  - **Vol:** Static volume.
  - **LFO Section:** Shape, Speed, Amount.
  - **Destination:** Pan vs Vol.

- [ ] **auto-pan-vs-tremolo.md**
  - **Auto-Pan:** Spatial movement (L <-> R).
  - **Tremolo:** Dynamics movement (Loud <-> Quiet).

#### 02-Data/presets/
- [ ] **classic-presets.json**
  - Rhodes Tremolo (Med Speed, Med Amount, Sine, Vol).
  - Helicopter (Fast Speed, High Amount, Square, Pan).
  - Slow Drift (Slow Speed, Low Amount, Sine, Pan).

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **rhythmic-gating-square.md**
  - Selecting "Square" wave LFO.
  - Targeting "Vol".
  - Syncing speed to 1/8th or 1/16th note (by ear or calculation).
  - Creating a chopper effect.

- [ ] **hi-hat-movement.md**
  - Subtle Auto-Pan (Sine, Low Amount).
  - Keeps hats from sounding static in the center.

- [ ] **rotary-speaker-sim.md**
  - Combining Pan modulation with Volume modulation (requires two instances?).
  - Fast speed.

#### 03-Workflows/by-context/
- [ ] **pad-swirling.md**
- [ ] **guitar-vibrato-sim.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **lfo-sync-chart.md**
  - Does PanOMatic sync to BPM automatically? (No, usually Herz-based. Needs a chart).

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Movement

**Tasks:**
1. Load a Sustained Chord
2. Set LFO to Sine, Destination Pan
3. Increase Amount
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I sync this to tempo? (Manually, or use peak controller instead if precise sync is needed).
- What does the "Soft" vs "Hard" shape switch do? (Triangle vs Square).

### Phase 2: Creative Application (Week 2)
**Goal:** Rhythmic Gating

**Tasks:**
1. Use Square LFO on Volume
2. Tune Speed to match the beat
3. Create rhythmic-gating-square.md

**Key Questions to Answer:**
- Can I automate the Speed knob for risers?

---

## 📊 Plugin Specifications to Document

### Engine
- LFO Range (Hz)
- Shapes (Sine, Triangle, Square)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why isn't it panning? (Check "Amount" knob).
2. Is it BPM synced? (Usually no, it's free-running Hz).

---

## 📝 Documentation Standards

### For Each Workflow:
- **Dest:** Pan/Vol
- **Shape:** Sine/Square
- **Speed:** Clock Position

---

## 🔗 Cross-Reference with Other Plugins

Fruity PanOMatic is often used with:
- **Fruity Peak Controller** (Better LFO sync)
- **Fruity Stereo Shaper** (Static width)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity PanOMatic/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── auto-pan-vs-tremolo.md
│
├── 02-Data/
│   ├── presets/
│   │   └── classic-presets.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── rhythmic-gating-square.md
│   │   ├── hi-hat-movement.md
│   │   └── rotary-speaker-sim.md
│
└── 04-Reference/
    └── lfo-sync-chart.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity PanOMatic Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20PanOMatic.htm)
- [Fruity PanOMatic Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_PanOMatic_tutorials.htm)
- [Fruity PanOMatic Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+panomatic+tutorial)

### Community Resources
- [Fruity PanOMatic Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+panomatic&restrict_sr=1)
- [Fruity PanOMatic User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity PanOMatic Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "LFO Fundamentals" - Understanding Low Frequency Oscillators
- "Panning Techniques" - Stereo field positioning methods
- "Tremolo and Vibrato" - Volume and pitch modulation effects

### Advanced Techniques
- **LFO Synchronization:** Syncing to project tempo
- **Multi-Parameter Modulation:** Using multiple LFOs simultaneously
- **Creative Panning:** Advanced stereo field manipulation

---

## 📚 In-Depth Technical Analysis

### LFO Architecture
Fruity PanOMatic implements a sophisticated Low Frequency Oscillator system:
- **Modulation Engine:** Generates periodic modulation signals
- **LFO Shapes:** Sine, Triangle, Square, and potentially other shapes
- **Speed Control:** Determines modulation rate (Hz)
- **Amount Control:** Determines modulation intensity
- **Destination Routing:** Selects which parameter to modulate

### Panning LFO System
The panning LFO creates spatial movement:
- **Stereo Positioning:** Moves audio between left and right channels
- **Phase Relationships:** Maintains phase coherence during panning
- **Amplitude Compensation:** Prevents volume changes during panning
- **Smooth Transitions:** Ensures artifact-free panning movement
- **Center Stability:** Maintains center position when amount is zero

### Volume LFO System
The volume LFO creates amplitude modulation:
- **Amplitude Control:** Modulates the volume level
- **Dynamic Range:** Changes the perceived dynamic range
- **Rhythmic Effects:** Creates rhythmic volume changes
- **Tremolo Effects:** Classic tremolo modulation
- **Gate Simulation:** Can create gating effects with square waves

### Signal Processing Chain
The internal processing follows this order:
- **Input Stage:** Signal level monitoring and adjustment
- **LFO Generator:** Creates modulation signal
- **Destination Router:** Selects modulation target (Pan or Vol)
- **Modulation Application:** Applies modulation to target
- **Output Stage:** Final signal routing and monitoring

### Modulation Characteristics
The plugin offers different modulation characteristics:
- **Sine Wave:** Smooth, sinusoidal modulation
- **Triangle Wave:** Linear rise and fall modulation
- **Square Wave:** Abrupt on/off modulation
- **Speed Range:** Various modulation rates
- **Amount Range:** Various modulation intensities

## 🎛️ Parameter Deep Dive

### LFO Controls
- **Speed:** Controls the rate of modulation
  - Range: 0.1Hz to 20Hz (typically)
  - Effect: Determines how fast the modulation cycles
  - Use for: Setting rhythmic or smooth movement
  - Pro tip: Higher values create faster movement
- **Behavior:**
  - Low values: Slow, gradual changes
  - Medium values: Moderate movement speed
  - High values: Fast, rhythmic changes
  - Pro tip: Use lower values for subtle movement
- **Applications:**
  - Slow movement: 0.1-1Hz for subtle interest
  - Moderate movement: 1-5Hz for standard effects
  - Fast movement: 5-20Hz for rhythmic effects
  - Pro tip: Match to musical tempo for rhythmic effects

### Amount Control
- **Function:** Controls the intensity of modulation
  - Range: 0-100% (typically)
  - Effect: Determines how much the parameter changes
  - Use for: Controlling modulation depth
  - Pro tip: Start low and increase gradually
- **Behavior:**
  - 0%: No modulation
  - Low: Subtle modulation
  - High: Pronounced modulation
  - Pro tip: Use low values for natural movement
- **Applications:**
  - Subtle enhancement: 10-30% for gentle movement
  - Moderate effect: 30-60% for noticeable effect
  - Aggressive modulation: 60-100% for strong effect
  - Pro tip: Use lower values for mixing applications

### LFO Shape Selection
- **Sine Wave:** Smooth, sinusoidal modulation
  - Character: Gentle, smooth movement
  - Use for: Natural panning, smooth tremolo
  - Effect: Creates organic movement
  - Pro tip: Best for subtle effects
- **Triangle Wave:** Linear rise and fall
  - Character: Consistent rate of change
  - Use for: Mechanical panning, consistent tremolo
  - Effect: Creates linear movement
  - Pro tip: Good for rhythmic effects
- **Square Wave:** Abrupt on/off changes
  - Character: Sharp, rhythmic changes
  - Use for: Gating effects, rhythmic tremolo
  - Effect: Creates on/off patterns
  - Pro tip: Best for aggressive rhythmic effects

### Destination Controls
- **Pan Destination:** Modulates stereo position
  - Effect: Moves sound between left and right
  - Use for: Stereo movement and interest
  - Applications: Hi-hat movement, pad swirling
  - Pro tip: Use for adding stereo width to mono sources
- **Vol Destination:** Modulates volume level
  - Effect: Changes amplitude periodically
  - Use for: Tremolo and rhythmic effects
  - Applications: Guitar tremolo, rhythmic gating
  - Pro tip: Use for creating rhythmic interest

### Static Controls
- **Pan Knob:** Static stereo position
  - Range: Hard left to hard right
  - Effect: Sets base stereo position
  - Use for: Centering or positioning audio
  - Pro tip: Use as base position before LFO modulation
- **Vol Knob:** Static volume level
  - Range: Negative to positive values
  - Effect: Sets base volume level
  - Use for: Level compensation
  - Pro tip: Use to match processed and unprocessed levels

## 🎼 Sound Design Applications

### Panning Applications
Using PanOMatic for stereo movement:

**Hi-Hat Enhancement:**
- Low Amount for subtle movement
- Sine Wave for natural feel
- Medium Speed for musical movement
- Adds interest to static hi-hats
- Essential for electronic music

**Pad Swirling:**
- Medium Amount for noticeable movement
- Sine or Triangle Wave for smooth movement
- Slow Speed for gradual evolution
- Creates immersive pad textures
- Perfect for ambient and cinematic music

**Guitar Auto-Pan:**
- Low to Medium Amount for natural feel
- Triangle Wave for mechanical feel
- Medium Speed for rhythmic interest
- Adds width to mono guitar recordings
- Essential for spacious guitar sounds

### Volume Applications
Using PanOMatic for amplitude modulation:

**Guitar Tremolo:**
- Medium Amount for noticeable effect
- Sine or Triangle Wave for smooth tremolo
- Medium Speed for musical tremolo
- Classic guitar effect simulation
- Essential for surf and rock music

**Rhythmic Gating:**
- High Amount for strong effect
- Square Wave for on/off gating
- Tempo-synced Speed for rhythmic gating
- Creates rhythmic chopping effects
- Perfect for electronic and dance music

**Dynamic Enhancement:**
- Low Amount for subtle effect
- Sine Wave for natural feel
- Slow Speed for gentle dynamics
- Adds movement to static elements
- Essential for mix enhancement

### Creative Applications
Using PanOMatic for experimental effects:

**Rotary Speaker Simulation:**
- Combine Pan and Vol modulation
- Use different LFO speeds for realism
- Sine Wave for smooth rotation
- Creates Leslie speaker effects
- Perfect for vintage organ simulation

**Binaural Effects:**
- Use slow Pan modulation
- Sine Wave for smooth movement
- Low Amount for subtle effect
- Creates spatial interest
- Essential for immersive audio

**Rhythmic Enhancement:**
- Use Square Wave for rhythmic effects
- Sync to project tempo for precision
- Medium Amount for musical effect
- Creates rhythmic interest in static elements
- Perfect for electronic music production

## 🧪 Experimental Techniques

### Advanced LFO Applications
Creative uses of PanOMatic's LFO capabilities:

**Multi-Stage Modulation:**
- Use multiple instances for complex effects
- Combine Pan and Vol modulation
- Create evolving rhythmic patterns
- Perfect for complex sound design
- Essential for sophisticated modulation

**Automation Integration:**
- Automate LFO parameters for evolving effects
- Use envelope followers for dynamic control
- Combine with other modulation sources
- Perfect for live performance
- Use for expressive control

**Rhythmic Patterns:**
- Create complex rhythmic patterns
- Use different LFO shapes together
- Combine with step sequencers
- Perfect for electronic music
- Essential for rhythmic sound design

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Speed Automation:**
- Automate speed for evolving rhythms
- Create rhythmic builds and breakdowns
- Use for dynamic expression
- Perfect for evolving arrangements
- Essential for dynamic modulation

**Amount Modulation:**
- Modulate amount with external sources
- Create dynamic depth changes
- Use for evolving effects
- Perfect for atmospheric music
- Essential for dynamic expression

**Shape Morphing:**
- Use automation to change LFO shapes
- Create evolving character changes
- Use for dynamic expression
- Perfect for evolving textures
- Essential for sophisticated modulation

## 🎚️ Workflow Optimization

### Rhythmic Enhancement Workflows
Efficient approaches to using PanOMatic for rhythm:

**Hi-Hat Movement:**
- Use Sine Wave for natural movement
- Low Amount for subtle effect
- Medium Speed for musical timing
- Essential for electronic music
- Pro tip: Use for adding interest to static elements

**Rhythmic Gating:**
- Use Square Wave for on/off effects
- High Amount for strong effect
- Tempo-synced Speed for precision
- Essential for dance music
- Pro tip: Use for rhythmic interest

**Pad Enhancement:**
- Use Sine or Triangle Wave for smooth movement
- Medium Amount for noticeable effect
- Slow Speed for gradual evolution
- Essential for ambient music
- Pro tip: Use for immersive textures

### Integration Workflows
Working with other plugins and tools:

**Effects Integration:**
- Use before reverb for spatial effects
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
- **Hi-Hat Movement:** Adding interest to static hi-hats
- **Rhythmic Gating:** Creating rhythmic chopping effects
- **Pad Swirling:** Creating immersive pad textures
- **Energy Management:** Using modulation for track energy
- **Build-up Effects:** Creating tension with modulation

### Hip-Hop and R&B
- **Vocal Enhancement:** Adding subtle movement to vocals
- **Hi-Hat Enhancement:** Adding interest to hi-hats
- **Rhythmic Interest:** Creating rhythmic patterns
- **Mix Enhancement:** Adding movement to static elements
- **Creative Effects:** Adding unique character to elements

### Rock and Metal
- **Guitar Tremolo:** Adding tremolo effects to guitars
- **Hi-Hat Movement:** Adding interest to drum patterns
- **Bass Enhancement:** Adding subtle movement to bass
- **Mix Enhancement:** Adding width to rock mixes
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Movement:** Creating evolving textures
- **Spatial Effects:** Adding spatial interest to ambient sounds
- **Experimental Effects:** Creating unique sonic signatures
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity PanOMatic works well with various effects:
- **Reverb:** Adding space to modulated sounds
- **Delay:** Creating rhythmic patterns with modulation
- **Chorus:** Adding width to modulated sounds
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of modulated signals

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
Fruity PanOMatic was developed as a dedicated auto-panning and tremolo effect:
- Created to provide simple, effective modulation
- Designed for low CPU usage and efficiency
- Developed with mixing and sound design in mind
- Intended to complement other modulation plugins

### Evolution Through FL Studio Versions
- Initially introduced with basic LFO capabilities
- Enhanced with additional wave shapes and controls
- Improved with better sound quality and stability
- Expanded with more sophisticated algorithms

### Impact on Music Production
Fruity PanOMatic has influenced music production by:
- Providing accessible modulation effects
- Enabling rhythmic enhancement techniques
- Facilitating stereo field manipulation
- Supporting various musical genres with flexible modulation

## 🧠 Advanced Processing Techniques

### LFO Mastery
Advanced techniques for LFO processing:
- **Wave Shape Selection:** Understanding different shape characteristics
- **Speed Optimization:** Finding optimal modulation rates
- **Amount Control:** Managing modulation intensity
- **Rhythmic Precision:** Syncing to musical timing
- **Dynamic Expression:** Creating expressive modulation

### Stereo Enhancement
Advanced stereo processing techniques:
- **Width Control:** Managing stereo field width
- **Phase Relationships:** Maintaining phase coherence
- **Mono Compatibility:** Ensuring mono-safe processing
- **Spatial Imaging:** Creating complex spatial effects
- **Imaging Control:** Managing stereo positioning

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique modulated textures
- **Atmospheric Processing:** Building ambient modulated effects
- **Rhythmic Effects:** Creating rhythmic modulation patterns
- **Spatial Manipulation:** Creating immersive environments
- **Experimental Processing:** Pushing boundaries of modulation

## 📊 Performance Considerations

### CPU Usage
Managing PanOMatic's impact on system performance:
- **Low CPU Load:** Very efficient processing
- **Real-Time Performance:** Optimized for live performance
- **Instance Count:** Multiple instances have minimal impact
- **Parameter Automation:** Automated parameters have minimal CPU impact
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Artifact Prevention:** Ensuring smooth modulation
- **Phase Coherence:** Maintaining phase relationships
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output
- **Signal Integrity:** Preserving original signal quality

### System Integration
Optimizing PanOMatic within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimal audio latency

## 🛠️ Troubleshooting Common Issues

### Modulation Problems
- **Harsh Movement:** Reduce Amount or change LFO shape
- **Loss of Clarity:** Check for phase issues or excessive modulation
- **Phase Issues:** Verify stereo field and width settings
- **Excessive Movement:** Reduce Amount for more subtle effect
- **Rhythmic Issues:** Adjust Speed for better timing

### Technical Issues
- **High CPU Usage:** Check for other plugins in the chain
- **Latency Issues:** Optimize buffer settings
- **Clipping:** Reduce input gain or increase output headroom
- **Artifacts:** Check sample rate and bit depth settings
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Try different LFO shapes or speeds
- **Lack of Character:** Increase Amount or change shape
- **Poor Integration:** Use lower Amount or different shape
- **Overpowering:** Reduce Amount or use different shape
- **Lack of Control:** Automate parameters for dynamic changes

## 🎚️ Advanced Configuration

### Custom Presets
Creating and managing custom configurations:
- **Rhythmic Presets:** Optimized for rhythmic applications
- **Stereo Enhancement:** Configured for width applications
- **Creative Presets:** Set up for sound design applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple PanOMatic instances effectively:
- **Parameter-Specific:** Different instances for different parameters
- **Parallel Processing:** Multiple instances in parallel
- **Serial Processing:** Multiple instances in series
- **Selective Processing:** Different instances for different elements

### Integration Configurations
Optimizing for different integration scenarios:
- **Insert Processing:** Inline processing configurations
- **Send Processing:** Effects return configurations
- **Hardware Integration:** External hardware integration
- **DAW Integration:** Optimizing for FL Studio workflow

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about PanOMatic techniques
- **Reddit Groups:** Sharing modulation techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced LFO techniques
- **Written Guides:** In-depth articles on panning and tremolo
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting PanOMatic configurations
- **Technique Sharing:** Platforms for sharing processing methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a convincing "Helicopter" effect using Square LFO on Pan
- [ ] Add subtle stereo interest to a mono sample without artifacts
- [ ] Explain the difference between Pan LFO and Volume LFO
- [ ] Set up rhythmic gating using Square LFO on Volume
- [ ] Create swirling pad effects using Sine LFO on Pan
- [ ] Demonstrate tremolo effects using various LFO shapes
- [ ] Use automation to create evolving modulation patterns
- [ ] Troubleshoot phase and stereo field issues effectively
- [ ] Integrate PanOMatic into efficient mixing workflows
- [ ] Create rotary speaker simulation using combined modulation

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity PanOMatic

## Purpose & Identity
Fruity PanOMatic is a lightweight, dedicated **modulation utility**. Its primary identity is an auto-panner and tremolo unit. It uses a Low Frequency Oscillator (LFO) to move a sound between the left and right speakers (Auto-Pan) or to oscillate its volume (Tremolo). It is the simplest and most efficient way to add "Life" and "Movement" to static sounds. [SRC: IL-MAN]

## 60-Second Mental Model
Think of it as a "Rhythmic Ghost" sitting at your mixer. 
- In **Pan Mode**, the ghost grabs the Pan knob and swings it back and forth. 
- In **Vol Mode**, the ghost moves the Volume slider up and down. 
You control how fast the ghost moves (**Speed**) and how far it moves (**Amount**).

## Hip-Hop / R&B Context
- **Rhythmic Hi-Hats:** Adding subtle auto-panning to a 1/16th note hi-hat pattern so it "dances" around the rapper's head (Upbeat).
- **Rhodes Tremolo:** Adding a slow volume wobble to an electric piano for that classic 70s Soul/R&B vibe (Vibey).
- **Spacey Pad Orbits:** Making an atmospheric synth pad slowly drift from left to right over 8 bars (Spacey).

## When To Use
- When you want a **quick and easy auto-panner**.
- When you need a **rhythmic chopper/gate** effect (using Square LFO).
- When you want to **separate two instruments** by having them pan in opposite directions.

## When NOT To Use
- **Precise BPM Sync:** PanOMatic is Hertz-based (Hz), not beat-based. Use **Fruity Peak Controller** or **Gross Beat** if you need the LFO to lock perfectly to the project grid without manual calculation. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity PanOMatic

## UI Tour
1.  **PAN Section (Top Left):** Sets the base stereo position.
2.  **VOL Section (Top Right):** Sets the base volume level.
3.  **LFO Shape Selector:** 
    - **Sine:** Smooth, curved movement. [SRC: IL-MAN]
    - **Triangle:** Linear rise and fall (more "mechanical").
    - **Square:** Instant ON/OFF (Gating).
4.  **SPEED Knob:** How fast the LFO cycles (measured in Hz, not BPM-synced).
5.  **AMOUNT Knob:** How far the LFO pushes the parameter from its center position.
6.  **Destination Toggle:** Choose whether the LFO affects **PAN** or **VOL**.

## Functional Flow
1.  **Input:** Stereo or Mono audio enters.
2.  **LFO Generation:** The LFO generates a signal (0 to 1) based on the Speed and Shape.
3.  **Mapping:** The LFO signal is multiplied by the Amount and applied to the chosen Destination.
4.  **Offset:** The result is added to the base Pan/Vol setting.
5.  **Output:** Audio leaves with modulated spatial/amplitude properties.

## Things Beginners Misunderstand
- **BPM Sync:** The Speed knob is **NOT** synced to your project tempo by default. You must tune it by ear or use a Hz-to-BPM calculation. [SRC: REPUTABLE]
- **The Amount Knob:** If Amount is at 0, the LFO does nothing. Beginners often turn the Speed knob and wonder why they hear no change.
- **Dual Modulation:** A single instance can only modulate ONE destination (Pan OR Vol). To modulate both at once, you need two instances of PanOMatic in series.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity PanOMatic

## 1. The "Human" Hi-Hat
Static hi-hats in trap beats can be fatiguing.
- **Technique:** Set Destination to **Pan**, Shape to **Sine**, and Amount to **15-20%**. 
- **Tweak:** Set Speed so it feels like it’s drifting slowly across the 16th notes.
- **Result:** The hats feel "alive" and move around the center, leaving room for the snare and vocal.

## 2. Square Wave "Chopping"
- **Technique:** Set Destination to **Vol**, Shape to **Square**, and Amount to **100%**.
- **Tweak:** Turn the Speed knob up until the sound "flickers."
- **Application:** Use this on a long, sustained sub-bass or vocal note to create a rhythmic glitch effect common in experimental hip-hop.

## 3. The Vintage R&B Rhodes (Tremolo)
- **Technique:** Set Destination to **Vol**, Shape to **Sine**, and Amount to **40%**.
- **Tweak:** Set Speed to approx. **3-5 Hz**.
- **Application:** Apply this to a clean electric piano. It simulates the "Suitcase" vibrato of a real Rhodes.

## 4. Binaural "Vortex" Risers
- **Technique:** Automate the **Speed** knob from 1Hz to 20Hz over 4 bars.
- **Setup:** Target **Pan** with a **Triangle** wave.
- **Effect:** The sound will swirl faster and faster until it becomes a blur, creating massive tension before a drop. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
- **Pitfall:** "The sound disappears entirely."
  - **Fix:** You likely have Destination set to **Vol** with a **Square** wave and high Amount. Move the base **VOL** knob up to ensure the signal still passes during the "On" phase.
- **Pitfall:** "The panning makes me dizzy."
  - **Fix:** Your Amount is too high. In a mix, panning should be felt more than heard. Keep Amount below 30% for background elements. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity PanOMatic

PanOMatic translates vibes through **Spatial Motion** and **Dynamic Pulsing**.

## 1. Upbeat (Kinetic, Chopped, High-Energy)
- **Concept:** "The Helicopter Gate."
- **Levers:**
  - **LFO Shape:** Square.
  - **Destination:** Vol (Volume).
  - **Speed:** Fast (match the hi-hat rhythm).
- **Listen For:** Sharp, percussive volume cuts that turn a long synth note into a rhythmic "stutter."
- **Don't Do This:** Don't use Sine; you want the hard edges of the Square wave.

## 2. Spacey (Galactic, Drifting, Immersive)
- **Concept:** "The Planetary Orbit."
- **Levers:**
  - **LFO Shape:** Sine.
  - **Destination:** Pan.
  - **Speed:** Very Slow (0.1Hz - 0.5Hz).
  - **Amount:** 50% - 80%.
- **Listen For:** The sound slowly traveling from one ear to the other, creating a vast sense of 3D space.

## 3. Psychedelic (Warped, Disorienting, Liquid)
- **Concept:** "The Stereo Swirl."
- **Levers:**
  - **LFO Shape:** Sine.
  - **Destination:** Pan.
  - **Amount:** 100% (Maximum Width).
  - **Speed:** Medium-Fast (2Hz+).
- **Listen For:** A dizzying, circular motion that makes the listener feel like the room is spinning.

## 4. Vibey (Smooth, Vintage, Soulful)
- **Concept:** "The R&B Tremolo."
- **Levers:**
  - **LFO Shape:** Sine.
  - **Destination:** Vol.
  - **Speed:** Moderate (match the "bounce" of the track).
  - **Amount:** 30% (Subtle).
- **Listen For:** A gentle "breathing" volume that mimics the vibrato of a vintage Rhodes piano or a Hammond organ.

## 5. Moody (Stagnant, Tense, Heavy)
- **Concept:** "The Nervous Drift."
- **Levers:**
  - **LFO Shape:** Triangle.
  - **Amount:** Low (10%).
  - **Speed:** Very Fast.
- **Listen For:** A micro-shiver in the sound that adds a sense of "anxiety" or instability to a dark pad. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\panning-law.md

```markdown
# The Law of Panning

How Fruity PanOMatic handles gain compensation.

## Circular Panning Law
- When a sound is panned hard left, it needs to be louder than when it is centered to maintain the same *perceived* volume.
- PanOMatic handles this automatically.
- **Warning**: If you automate Volume *and* Pan simultaneously, you might get unexpected volume dips. It is cleaner to use PanOMatic for Panning and a Fruity Balance for Volume automation.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity PanOMatic (5 Minutes)

1.  **Insert:** Load **Fruity PanOMatic** onto a synth or hi-hat track.
2.  **Target:** Choose the destination tab: **PAN** (movement) or **VOL** (tremolo).
3.  **Shape:** Select the **Sine** wave for smooth motion or **Square** for chopping.
4.  **Amount:** Turn the **AMT** knob up until you hear the movement.
5.  **Speed:** Adjust the **SPD** knob to set the rate of the movement.
6.  **Tip:** Right-click the **SPD** knob to see if there are any tempo-sync options (Note: In older versions, you must tune this by ear). [SRC: IL-MAN]
```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity PanOMatic

- **Ignoring Destination:** Wondering why the volume isn't changing when the LFO is set to **Pan**. Always check the toggle.
- **Over-Panning:** Setting Amount to 100% on a lead vocal. This creates "Ear Fatigue" and makes the mix sound unprofessional. **Fix:** Keep melodic panning below 40%.
- **Zero Amount:** Turning the Speed knob but hearing no change because Amount is at 0.
- **Sync Frustration:** Expecting the Speed knob to snap to 1/4 or 1/8 notes automatically. **Fix:** PanOMatic is free-running (Hz). You must sync it by ear or use the reference chart.
- **Bass Panning:** Using Auto-Pan on a Kick or Sub-bass. This destroys the low-end energy and ruins mono-compatibility. **Fix:** Only pan elements above 200Hz. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points: Fruity PanOMatic

| Goal | Dest | Shape | Speed | Amount | Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Drifting Hats** | Pan | Sine | 1.0 Hz | 20% | Subtle hi-hat movement. |
| **Hard Chopper** | Vol | Square | 6.0 Hz | 100% | Rhythmic vocal glitch. |
| **Leslie Speaker** | Pan | Triangle| 8.5 Hz | 60% | Fast organ/guitar swirl. |
| **Soul Tremolo** | Vol | Sine | 4.2 Hz | 30% | Rhodes / Neo-soul keys. |
| **Hypnotic Pad** | Pan | Sine | 0.3 Hz | 40% | Evolving ambient textures. |

*Note: Hz values are approximate—always tune the Speed knob to your project's "bounce."* [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Starting Points: Moody (Fruity PanOMatic)

- **The Goal:** A lonely, drifting atmosphere that feels like it’s floating in a cold room.
- **Recipe:**
  1. Load PanOMatic on a **Felt Piano** or **Rhodes**.
  2. Set Destination to **PAN**.
  3. Shape: **Sine**.
  4. Amount: **25%**.
  5. Speed: **0.2 Hz** (very slow).
- **Result:** The sound subtly moves from left to right over several bars. The listener can't quite "pinpoint" the source, creating a sense of distance and melancholy.
- **Mix Tip:** Place a dark Reverb *before* PanOMatic so the entire reverb tail drifts with the dry signal. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey

## Upbeat (The "Energy Pump")
- **Setup:** Target **Vol** with **Square** wave.
- **Speed:** ~1/8th note speed.
- **Tip:** Use this on a background synth to add a rhythmic "pulse" that matches the snare.

## Psychedelic (The "Brain Massage")
- **Setup:** Target **Pan** with **Triangle** wave.
- **Speed:** ~12-15 Hz (Very fast).
- **Effect:** The audio vibrates between ears so fast it creates a binaural "buzzing" texture.

## Jazzy (The "Electric Soul")
- **Setup:** Target **Vol** with **Sine** wave.
- **Speed:** 4.5 Hz.
- **Amount:** 35%.
- **Context:** The quintessential "Suitcase Rhodes" vibe.

## Vibey (The "Cloud Drift")
- **Setup:** Target **Pan** with **Sine** wave.
- **Speed:** 0.5 Hz.
- **Amount:** 15%.
- **Context:** Apply to background vocal "Oohs" and "Aahs" to make them feel like a wide cloud of sound. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\lfo-sync-chart.md

```markdown
# LFO Sync Chart: Hz to BPM (Fruity PanOMatic)

Since PanOMatic uses **Hertz (Hz)** instead of Beats, use this chart to find the "Sweet Spot" for your project tempo.

| BPM | 1/1 Note (Hz) | 1/2 Note (Hz) | 1/4 Note (Hz) | 1/8 Note (Hz) |
| :--- | :--- | :--- | :--- | :--- |
| **80** | 1.33 | 2.66 | 5.33 | 10.66 |
| **100** | 1.66 | 3.33 | 6.66 | 13.33 |
| **120** | 2.00 | 4.00 | 8.00 | 16.00 |
| **140** | 2.33 | 4.66 | 9.33 | 18.66 |
| **160** | 2.66 | 5.33 | 10.66 | 21.32 |

**The Formula:** `(BPM / 60) * (Multiplier)`
- *Example for 1/4 notes at 120BPM:* `(120 / 60) * 4 = 8.00Hz`. [SRC: REPUTABLE]

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity PanOMatic

| Parameter | Type | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- |
| **PAN Knob** | Knob | N/A | **Placement** | Static L/R balance. |
| **VOL Knob** | Knob | N/A | **Loudness** | Static volume level. |
| **AMT (Amount)**| Knob | **Psychedelic**| **Depth** | Intensity of LFO modulation. |
| **SPD (Speed)** | Knob | **Upbeat** | **Timing** | Rate of the LFO (in Hz). |
| **Shape** | Switch | **Vibey** | **Curve** | Sine, Triangle, or Square. |
| **Target** | Switch | **Spacey** | **Routing** | Pan vs Vol modulation. |

- **Vibe Impact Tag (Movement):** High AMT + Sine Pan creates the "Planetary Orbit" feel.
- **Mix Impact Tag (Clarity):** Moving hi-hats out of the center clears a "hole" for the lead vocal. [SRC: IL-MAN]
```

---

## FILE: 02-Data\presets\auto-panner-quarter.json

```json
{
  "presetName": "Auto-Panner 1/4 Note",
  "plugin": "Fruity PanOMatic",
  "description": "Standard left-right panning synced to tempo.",
  "settings": {
    "panLFO": true,
    "speed": "Tempo Sync 1/4",
    "amount": 0.8,
    "shape": "Sine"
  },
  "usage": "Apply to hi-hats or shakers to keep them moving."
}

```

---

## FILE: 02-Data\presets\volume-tremolo.json

```json
{
  "presetName": "Volume Tremolo",
  "plugin": "Fruity PanOMatic",
  "description": "Uses the Volume LFO instead of Pan.",
  "settings": {
    "volLFO": true,
    "panLFO": false,
    "speed": "Tempo Sync 1/8",
    "amount": 0.5,
    "shape": "Triangle"
  },
  "usage": "Classic electric piano tremolo or stutter pads."
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (PanOMatic)

## 1. Center Channel Protection
- **Rule:** Keep the Kick and 808 centered.
- **Application:** Never use PanOMatic on your main drum bus or bass track. Auto-panning the low-end will cause immediate mix instability and listener fatigue. [SRC: REPUTABLE]

## 2. Percussion Movement
- **Rule:** Hats should "dance" around the vocal.
- **Application:** Use a subtle Sine-wave auto-pan (AMT @ 20%) on your Hi-Hats. It makes the drums feel more immersive and "Expensive."

## 3. Tremolo for "Soul"
- **Rule:** R&B keys need organic motion.
- **Application:** Use Sine-wave Volume modulation on Rhodes or Wurlitzer samples. This mimics the mechanical vibrato of real hardware.

## 4. Mono-Check Requirement
- **Rule:** High-speed panning can cause phase issues.
- **Move:** Switch to Mono. If your auto-panned synth starts "pumping" in volume or disappearing, reduce the **AMT** knob.

## 5. Gain Staging
- **Rule:** Tremolo reduces average volume.
- **Application:** If you use high Volume modulation (AMT @ 50%), you will need to turn up the **VOL** knob on PanOMatic to compensate for the lost energy. [SRC: IL-MAN]
```

---

## FILE: 03-Workflows\surround-and-sidechain.md

```markdown
# Workflow: Surround Simulation

PanOMatic was originally designed for basic surround panning before FL Studio had advanced routing.

## The Circle Pan
1. Use **Pan LFO** set to Sine.
2. Use **Vol LFO** set to Cosine (offset by 90 degrees).
3. **Result**: The sound appears to rotate around the listener's head (louder when centered, quieter when panned hard, or vice versa depending on phase).

## Sidechain Hack
- If you don't want to set up routing for a simple sidechain:
  1. Load PanOMatic.
  2. Set **Vol LFO** to a Saw wave (Ramp Down).
  3. Sync speed to 1/4 beat.
  4. Invert the phase if needed.
  5. **Result**: A "4-on-the-floor" volume ducking effect (Pseudo-Sidechain).

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Dynamic Hi-Hat Movement (PanOMatic)

## Routing Context
- **Target:** 1/16th Note Trap Hi-Hats.
- **Position:** Insert FX (After EQ).

## Step-by-Step Setup
1.  On the hi-hat track, load **Fruity PanOMatic**.
2.  Set **Target** to `PAN`.
3.  Set **Shape** to `Sine`.
4.  Set **SPD** (Speed) to a moderate rate (approx. `2Hz` for a slow drift, or `8Hz` for a fast shimmer).
5.  **The Secret:** Keep **AMT** (Amount) very low (approx. `15%`).
6.  **Result:** The hats subtly move back and forth in the stereo field.

## What To Listen For
- The hats shouldn't "fly" across the ears; they should just feel like they have a "width" that is alive. This clears room in the exact center for the rapper's voice.

## Vibe Check
- **Vibey/Upbeat:** Adds a professional, "high-end" polish to a standard trap beat.

## Automation Idea
- Automate the **AMT** knob to increase during the build-up, making the hats get wider and crazier before the drop. [SRC: REPUTABLE]
```

---

## FILE: 03-Workflows\by-goal\01_Goal_Shaping_And_Control.md

```markdown
# Goal: Rhythmic Gating (The "Chopper")

## Routing Context
- **Target:** Sustained Pad, Vocal Loop, or Sub-bass.
- **Position:** End of the FX chain.

## Step-by-Step Setup
1.  Load **Fruity PanOMatic**.
2.  Set toggle to **VOL**.
3.  Set LFO Shape to **Square**.
4.  Set **Amount** to 100%.
5.  Set **VOL** knob to +3dB (to compensate for the silent phases).
6.  Turn **Speed** to ~6 Hz. 
7.  **Refine:** Adjust Speed until the "gaps" in the volume match the 1/8th notes of your drum beat.

## Vibe Check
- **Upbeat:** This creates a "stutter" that adds intense energy to an otherwise boring pad.
- **Psychedelic:** Turn the Speed up to **18 Hz** to create a metallic "grating" texture.

## Pitfalls + Fixes
- **Pitfall:** "The gaps are too long."
  - **Fix:** You cannot change the duty cycle (width) of the square wave in PanOMatic. If you need shorter gaps, use **Gross Beat** or **Fruity Love Philter**. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-instrument\keys.md

```markdown
# Workflow: Soulful Rhodes Tremolo (PanOMatic)

## The Concept
Simulating the internal volume-vibrato of a vintage Fender Rhodes suitcase piano.

## Step-by-Step
1.  Place **Fruity PanOMatic** on your electric piano track.
2.  Set toggle to **VOL**.
3.  Set Shape to **Sine**.
4.  Set Speed to **4.5 Hz**.
5.  Set Amount to **35%**.
6.  **Tweak:** Adjust the Amount while playing your chords. You want a "pulsing" warmth that doesn't sound like a hard cut.

## Vibe Check
- **Jazzy/Vibey:** This is the foundational sound of Neo-Soul and R&B keys.
- **Variation:** Switch toggle to **PAN** at 1.0 Hz for a "Ping-Pong" Rhodes effect.

## Pitfalls
- **Speed Clashes:** If the tremolo is too fast or slow relative to the BPM, it can feel "nervous." Use the formula `BPM / 60` to find the exact pulse of the beat. [SRC: REPUTABLE]

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity PanOMatic

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity PanOMatic.
- **Key Info:** Description of LFO shapes, Pan vs Vol destination logic, and Hz-based speed parameter.

## Source ID: [SRC: REPUTABLE]
- **Source:** "Mixing Modern Trap" (Studio School).
- **Key Info:** Importance of keeping the center clear for vocals, using auto-pan for hi-hat separation, and calculating Hz for tempo-synced tremolo.

## Genre Style Board: Fruity PanOMatic

| Vibe | Key Dest | Move | Use Case |
| :--- | :--- | :--- | :--- |
| **Upbeat** | VOL | Square LFO | Rhythmic Gating |
| **Psychedelic**| PAN | High AMT Sine | Swirling Melodies |
| **Spacey** | PAN | Low AMT Slow | Drifting Pads |
| **Vibey** | VOL | Sine Tremolo | R&B Rhodes |
| **Moody** | PAN | Fast Triangle | Nervous Shiver |
```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity PanOMatic

## 1. The "Wandering" Lo-Fi Piano
- **Mix Decision:** Use a 0.2 Hz Sine pan to make the piano feel unanchored and nostalgic.
- **Vibe:** Moody/Drift.
- **Tooling:** Pan LFO + Slow Speed.

## 2. The "Suitcase" R&B Rhodes
- **Mix Decision:** Standard 4.5Hz Sine tremolo for vintage warmth.
- **Vibe:** Vibey/Jazzy.
- **Tooling:** Vol LFO + Sine Shape.

## 3. The "Chopped" Trap Vocal
- **Mix Decision:** 1/16th Square wave gating on a vocal ad-lib.
- **Vibe:** Upbeat/Aggressive.
- **Tooling:** Vol LFO + Square Shape + High Amount.

## 4. The "Binaural" Synth Buzz
- **Mix Decision:** 15Hz+ Triangle panning to create a wide, vibrating high-end layer.
- **Vibe:** Psychedelic.
- **Tooling:** Pan LFO + Fast Speed.

```

---

## FILE: 04-Reference\lfo-sync-chart.md

```markdown
# Reference: LFO Speed (Hz) to BPM Sync Chart

Since Fruity PanOMatic uses **Hz (Hertz)** instead of musical divisions, use this chart to sync your movement to the project tempo.

### The Formula
`Speed (Hz) = (BPM * Multiplier) / 60`

| Target Division | Multiplier |
| :--- | :--- |
| 1 Bar (4 Beats) | 0.25 |
| 1/2 Note | 0.5 |
| 1/4 Note (The Beat) | 1.0 |
| 1/8 Note | 2.0 |
| 1/16 Note | 4.0 |

### Example Hz for Common Tempos

| BPM | 1/4 Note (Hz) | 1/8 Note (Hz) | 1 Bar (Hz) |
| :--- | :--- | :--- | :--- |
| **90** (Boom Bap) | 1.50 | 3.00 | 0.37 |
| **120** (House/Pop) | 2.00 | 4.00 | 0.50 |
| **140** (Trap) | 2.33 | 4.66 | 0.58 |
| **160** (Fast Trap) | 2.66 | 5.33 | 0.66 |

### Verification Tip
Right-click the **Speed** knob -> **Type Value**. Enter the Hz result for perfect mathematical sync. [SRC: IL-MAN]

```

---

