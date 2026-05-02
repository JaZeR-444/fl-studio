# Fruity Balance - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: CLAUDE.md

```markdown
# Fruity Balance - Project Brief & Guidelines

## Plugin Overview
Fruity Balance is FL Studio's advanced stereo balance and spatial processing plugin. It provides precise control over stereo image, panning, and spatial placement of audio signals, making it essential for mix positioning, stereo enhancement, and spatial effects.

## Core Capabilities
- **Stereo Panning**: Precise left/right positioning
- **Balance Control**: Left/right channel level adjustment
- **Stereo Width**: Image width enhancement or reduction
- **Spatial Processing**: Advanced spatial manipulation
- **Mono Compatibility**: Ensuring proper mono behavior
- **Visual Feedback**: Real-time stereo analysis

## Key Applications
- Track panning and positioning in stereo field
- Stereo width enhancement for individual tracks
- Mix bus spatial adjustment
- Creating space and depth in mixes
- Fixing stereo imaging problems
- Creative spatial effects and movement

## Primary Controls Overview
- **Pan**: Continuous stereo panning control
- **Balance**: Left/right channel level adjustment
- **Width**: Stereo image width control
- **Mono**: Mono compatibility check
- **Bypass**: A/B comparison switch
- **Output Level**: Gain compensation for processing

## Technical Foundations
- **Constant Power Panning**: Maintains perceived loudness
- **Phase-Coherent Processing**: Preserves stereo information
- **Balance vs. Pan**: Understanding the difference
- **Spatial Algorithms**: Advanced width processing
- **Mono Sum**: Proper mono summing behavior

## Target User Scenarios
1. **Mix Engineers**: Precise stereo positioning
2. **Mastering Engineers**: Final spatial adjustments
3. **Producers**: Creative spatial effects
4. **Sound Designers**: 3D positioning and movement
5. **Live Engineers**: Real-time spatial control
6. **Educators**: Teaching stereo concepts

## Documentation Strategy
This plugin requires comprehensive documentation covering:
- **Stereo Theory**: Understanding stereo imaging and perception
- **Spatial Processing**: Advanced spatial manipulation techniques
- **Mix Integration**: How spatial processing affects overall mix
- **Problem Solving**: Common stereo imaging issues
- **Creative Applications**: Beyond basic panning
- **Technical Precision**: Accurate spatial control

## Workflow Emphasis
- **Mix Context**: Always consider spatial decisions in full mix
- **Translation Quality**: Ensuring proper behavior across systems
- **Mono Compatibility**: Critical for radio and small speakers
- **Creative Exploration**: Using spatial processing artistically
- **Professional Standards**: Industry best practices

## Educational Value
Fruity Balance serves as excellent learning tool for:
- Stereo imaging concepts
- Spatial perception principles
- Mix balance techniques
- Mono compatibility importance
- Creative spatial design
- Professional workflow development

## Technical Considerations
- **Phase Relationships**: Maintaining proper phase coherence
- **Mono Sum**: Ensuring proper mono behavior
- **Stereo Width**: Understanding width algorithms
- **Perception**: How humans perceive stereo image
- **Translation**: Results across different playback systems

## Professional Standards
- **Industry Conventions**: Following standard stereo practices
- **Quality Control**: Maintaining audio quality
- **System Translation**: Consistent results across systems
- **Workflow Efficiency**: Streamlined spatial adjustments
- **Artistic Intent**: Serving musical and artistic goals

This plugin represents FL Studio's commitment to professional spatial processing tools and should be documented to provide both practical guidance and deep understanding of stereo imaging concepts for users at all skill levels.
```

---

## FILE: README.md

```markdown
# Fruity Balance - Gain & Pan Utility

`\`\`
██████╗  █████╗ ██╗      █████╗ ███╗   ██╗ ██████╗███████╗
██╔══██╗██╔══██╗██║     ██╔══██╗████╗  ██║██╔════╝██╔════╝
██████╔╝███████║██║     ███████║██╔██╗ ██║██║     █████╗  
██╔══██╗██╔══██║██║     ██╔══██║██║╚██╗██║██║     ██╔══╝  
██████╔╝██║  ██║███████╗██║  ██║██║ ╚████║╚██████╗███████╗
╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝
`\`\`

**Plugin Type:** Volume / Panning Utility
**Category:** Utility / Mixing / Automation
**Official Manual:** [Image-Line Fruity Balance Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Balance.htm)

---

## 🎯 What is Fruity Balance?

Fruity Balance is an extremely lightweight utility plugin. It does two things: **Volume** and **Panning**. While simple, it is crucial for **Automation**. Automating the Mixer Fader is often bad practice (it messes up relative leveling later). Instead, you automate the Volume knob on Fruity Balance, leaving your mixer fader free for mixing adjustments. It is also used to drive the input of other plugins (like Distortion).

**Key Capabilities:**
- **Volume:** -Inf to +6dB (ish).
- **Pan:** Left/Right balance.
- **Automation Safe:** Keeps your mixer faders clean.
- **Input Drive:** Boost signals before they hit a compressor or distortion unit.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **why-not-automate-faders.md**
3. Create **parameter-cheat-sheet.md**
4. Use it to create a "Volume Fade In" on a synth track.

### For Mix Engineers:
1. Study **gain-staging-chains.md**
2. Review **pre-fx-volume-automation.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Volume:** Knob.
  - **Balance:** Knob.

- [ ] **why-not-automate-faders.md**
  - The "Golden Rule" of FL Studio automation.
  - Use Fruity Balance for *artistic* volume changes.
  - Use Mixer Faders for *static* mix levels.

#### 02-Data/parameters/
- [ ] **balance-specs.json**
  `\`\`json
  {
    "plugin_name": "Fruity Balance",
    "cpu_load": "Negligible",
    "volume_range": "-Inf to +6dB?"
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **sidechain-ducking-manual.md**
  - Automating the Volume knob to duck on kicks (Manual Sidechain).

- [ ] **driving-distortion-inputs.md**
  - Placing Balance *before* Fruity Soft Clipper.
  - Boosting Volume to drive the clipper harder.

- [ ] **stereo-panning-automation.md**
  - Auto-panning effects using LFO automation on the Balance knob.

#### 03-Workflows/by-context/
- [ ] **fade-out-master.md**
- [ ] **vocal-rider-setup.md**

---

## 🔬 Research Framework

### Phase 1: The Tool (Week 1)
**Goal:** Utility

**Tasks:**
1. Place Balance at the start of an FX chain
2. Automate a fade-in
3. Place Balance at the *end* of an FX chain
4. Note the difference (Pre-FX volume vs Post-FX volume)
5. Create parameter-cheat-sheet.md

---

## 📊 Plugin Specifications to Document

### Engine
- Latency (0 ms)
- Pan Law (Circular/Linear?)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why use this instead of the channel volume knob? (Channel knob is pre-FX. Balance can be placed anywhere in the chain, e.g., Post-Distortion but Pre-Reverb).

---

## 🔗 Cross-Reference with Other Plugins

Fruity Balance is often used with:
- **Fruity Peak Controller** (To automate the volume)
- **Fruity Soft Clipper** (To be driven by Balance)

---

## 📦 File Structure Summary

`\`\`
Fruity Balance/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── why-not-automate-faders.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── balance-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── sidechain-ducking-manual.md
│   │   └── driving-distortion-inputs.md
│
└── 04-Reference/
    └── gain-staging-basics.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Balance Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Balance.htm)
- [Fruity Balance Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Balance_tutorials.htm)
- [Fruity Balance Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+balance+tutorial)

### Community Resources
- [Fruity Balance Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+balance&restrict_sr=1)
- [Fruity Balance User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Balance Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Gain Staging Fundamentals" - Understanding volume control and signal flow
- "Automation Best Practices" - Proper automation techniques
- "Panning Techniques" - Stereo field positioning

### Advanced Techniques
- **Pre-FX Volume Control:** Using Balance before effects for drive
- **Post-FX Volume Control:** Using Balance after effects for level
- **Automation Management:** Keeping mixer faders clean for mixing

---

## 📚 In-Depth Technical Analysis

### Signal Flow Architecture
Fruity Balance operates with a simple but effective signal flow:
- **Input Stage:** Receives audio signal from previous processor
- **Volume Control:** Adjusts signal amplitude (-∞ to +6dB range)
- **Pan Control:** Adjusts stereo positioning (Left to Right)
- **Output Stage:** Sends processed signal to next processor

### Volume Control System
The volume control features:
- **Range:** From complete silence (-∞) to +6dB boost
- **Curve:** Logarithmic response for natural volume perception
- **Resolution:** High-resolution control for precise adjustments
- **Response:** Instantaneous with no latency
- **Headroom:** Maintains signal integrity at maximum boost

### Panning Control System
The panning control features:
- **Range:** Full stereo field from hard left to hard right
- **Law:** Constant power panning law for smooth transitions
- **Center:** True center position with equal left/right output
- **Phase:** Maintains phase coherence across the stereo field
- **Resolution:** Precise positioning control

### Performance Characteristics
Fruity Balance is optimized for performance:
- **CPU Usage:** Negligible processing overhead
- **Latency:** Zero latency operation
- **Memory Usage:** Minimal memory footprint
- **Real-time Performance:** Optimized for live performance
- **Automation Response:** Instant response to parameter changes

### Integration with FL Studio Architecture
Fruity Balance integrates seamlessly with FL Studio:
- **Channel Rack:** Works with all channel types
- **Mixer Integration:** Complements mixer fader functions
- **Automation System:** Fully compatible with FL Studio automation
- **Routing:** Compatible with all routing options
- **MIDI Control:** Responds to MIDI CC messages

## 🎛️ Parameter Deep Dive

### Volume Control
- **Function:** Adjusts the amplitude of the audio signal
  - Range: -∞ (complete silence) to +6dB (maximum boost)
  - Response: Logarithmic for natural volume perception
  - Use for: Level adjustment, gain staging, driving effects
  - Pro tip: Use for driving distortion/saturation plugins
- **Behavior:**
  - 0dB: Unity gain (no change)
  - Negative values: Attenuation (quieter)
  - Positive values: Amplification (louder)
  - Pro tip: Use sparingly above 0dB to avoid clipping
- **Applications:**
  - Pre-FX: Adjusting drive into effects
  - Post-FX: Adjusting level after effects
  - Automation: Creating volume changes without touching mixer
  - Gain staging: Managing signal levels in chains

### Pan Control
- **Function:** Positions the audio signal in the stereo field
  - Range: -100% (hard left) to +100% (hard right)
  - Center: 0% (equal left/right)
  - Law: Constant power panning for smooth transitions
  - Pro tip: Use for creative stereo positioning
- **Behavior:**
  - Left positions: Reduce right channel, maintain left
  - Right positions: Reduce left channel, maintain right
  - Center: Equal left/right output
  - Pro tip: Use for stereo widening effects
- **Applications:**
  - Instrument placement: Positioning elements in stereo field
  - Automation: Creating stereo movement
  - Creative effects: Panning automation for interest
  - Mix balance: Adjusting stereo position without affecting level

### Advanced Parameter Techniques
- **Volume + Pan Combinations:** Using both controls together
- **Automation Curves:** Creating smooth or stepped automation
- **MIDI Mapping:** Mapping to external controllers
- **Envelope Following:** Using with envelope followers
- **LFO Modulation:** Modulating parameters with LFOs

## 🎼 Sound Design Applications

### Volume Applications
Using Fruity Balance for volume control:

**Gain Staging:**
- Adjusting levels between effects in a chain
- Managing headroom in processing chains
- Preventing clipping in complex chains
- Maintaining consistent levels across tracks
- Optimizing signal-to-noise ratio

**Creative Volume Effects:**
- **Tremolo:** Automating volume for rhythmic effects
- **Swells:** Creating gradual volume increases/decreases
- **Gating:** Creating rhythmic on/off effects
- **Sidechain Simulation:** Manual ducking effects
- **Dynamic Changes:** Creating expression through volume

**Pre-FX Processing:**
- Driving distortion plugins harder with volume boost
- Adjusting input levels to compressors
- Controlling saturation amount in drive effects
- Managing dynamics before effects
- Creating variable drive effects

### Panning Applications
Using Fruity Balance for stereo positioning:

**Stereo Field Management:**
- Placing instruments in the stereo field
- Creating space for overlapping elements
- Managing stereo width of elements
- Balancing left/right content
- Creating stereo separation

**Creative Panning Effects:**
- **Auto-Panning:** Creating rhythmic stereo movement
- **Ping-Pong:** Creating alternating left/right effects
- **Width Control:** Adjusting stereo image width
- **Position Automation:** Moving sounds across the stereo field
- **Stereo Enhancement:** Creating wider stereo images

**Mix Integration:**
- Centering important elements (vocals, kick, snare)
- Widening less important elements
- Creating depth through panning
- Balancing competing elements
- Creating clear mix separation

## 🧪 Experimental Techniques

### Advanced Volume Manipulation
Creative uses of Fruity Balance's volume control:

**Rhythmic Effects:**
- Automate volume to create rhythmic patterns
- Create complex rhythmic textures
- Use with step sequencers for pattern-based effects
- Combine with other rhythmic effects
- Generate polyrhythmic volume patterns

**Dynamic Expression:**
- Use for musical expression and dynamics
- Create crescendo and diminuendo effects
- Simulate acoustic instrument dynamics
- Add human-like expression to electronic sounds
- Create evolving volume landscapes

**Effect Drive Control:**
- Use to control drive into distortion units
- Adjust compression ratio by changing input level
- Control saturation amount in drive effects
- Create variable tone by adjusting drive
- Generate harmonic changes through volume

### Creative Panning Applications
Advanced panning techniques:

**Spatial Effects:**
- Create surround-like effects in stereo
- Simulate movement around the listener
- Create depth through panning automation
- Generate spatial illusions
- Simulate acoustic spaces through panning

**Rhythmic Panning:**
- Create rhythmic stereo movement
- Use for electronic music effects
- Generate complex rhythmic patterns
- Combine with volume automation
- Create polyrhythmic spatial effects

**Width Manipulation:**
- Adjust stereo width of elements
- Create pseudo-stereo from mono sources
- Enhance stereo width of narrow sources
- Control stereo field occupation
- Create width automation effects

## 🎚️ Workflow Optimization

### Gain Staging Workflows
Efficient approaches to using Fruity Balance for gain staging:

**Pre-Effects:**
- Place before effects to control drive
- Adjust input levels to prevent clipping
- Optimize signal levels for effect processing
- Maintain headroom in chains
- Ensure optimal signal-to-noise ratio

**Post-Effects:**
- Place after effects to adjust output level
- Compensate for level changes from effects
- Maintain consistent levels after processing
- Adjust wet/dry balance for effects
- Optimize final output levels

**Chain Management:**
- Use multiple instances in long chains
- Maintain consistent levels throughout
- Prevent cumulative gain changes
- Optimize for CPU efficiency
- Ensure proper headroom management

### Automation Workflows
Working with Fruity Balance automation:

**Volume Automation:**
- Create volume fades and swells
- Generate rhythmic volume changes
- Add expression to static sounds
- Create dynamic interest
- Simulate acoustic dynamics

**Pan Automation:**
- Create stereo movement
- Generate spatial interest
- Add motion to static elements
- Create evolving stereo images
- Simulate acoustic movement

**Complex Automation:**
- Combine volume and pan automation
- Create complex dynamic changes
- Generate evolving textures
- Add musical expression
- Create unique sonic effects

### Integration Workflows
Working with other plugins and tools:

**Mixer Integration:**
- Keep mixer faders for static levels
- Use Balance for dynamic changes
- Maintain clean automation lanes
- Optimize for collaborative work
- Ensure proper gain staging

**Effects Integration:**
- Use before effects for drive control
- Use after effects for level adjustment
- Combine with other dynamics processors
- Integrate with effects chains
- Optimize for CPU efficiency

## 🎧 Genre-Specific Applications

### Electronic Music
- **Volume Automation:** Creating rhythmic volume changes
- **Panning Effects:** Creating stereo movement and interest
- **Gain Staging:** Managing levels in complex synth patches
- **Drive Control:** Controlling saturation in distortion units
- **Spatial Effects:** Creating wide, immersive soundscapes

### Hip-Hop and R&B
- **Vocal Riding:** Adjusting vocal levels throughout songs
- **Drum Leveling:** Managing drum kit dynamics
- **Bass Management:** Controlling low-end levels
- **Mix Balancing:** Maintaining consistent mix levels
- **Creative Effects:** Adding rhythmic interest to elements

### Rock and Metal
- **Guitar Leveling:** Managing distorted guitar dynamics
- **Drum Processing:** Controlling drum kit levels
- **Bass Management:** Managing low-end consistency
- **Mix Balancing:** Maintaining consistent mix levels
- **Creative Effects:** Adding movement to static elements

### Ambient and Experimental
- **Volume Swells:** Creating gradual volume changes
- **Spatial Movement:** Creating evolving stereo images
- **Dynamic Textures:** Creating evolving soundscapes
- **Gain Staging:** Managing levels in complex ambient patches
- **Creative Processing:** Using for unique sonic effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Balance works well with various effects:
- **Reverb:** Adjusting wet/dry balance
- **Delay:** Controlling feedback and level
- **Distortion:** Controlling drive and saturation
- **Filtering:** Adjusting level after filtering
- **Compression:** Controlling input and output levels

### Dynamics Processing
Integration with dynamics processors:
- **Compressor Integration:** Using as input/output gain
- **Limiter Integration:** Managing levels before/after limiting
- **Gate Integration:** Controlling gated signal levels
- **Expander Integration:** Adjusting expanded signal levels
- **De-esser Integration:** Managing de-essed signal levels

### Equalization
Working with EQ plugins:
- **Pre-EQ:** Adjusting level before EQ
- **Post-EQ:** Adjusting level after EQ
- **Multi-band:** Combining with multi-band processing
- **Dynamic EQ:** Using with dynamic EQ
- **Spectral Processing:** Combining with spectral tools

## 📖 Historical Context

### Development Background
Fruity Balance was developed as a simple but essential utility plugin:
- Created to provide basic volume and pan control
- Designed for clean gain staging and automation
- Developed with CPU efficiency in mind
- Intended to complement mixer functions

### Evolution Through FL Studio Versions
- Initially introduced with basic volume and pan controls
- Enhanced with better automation capabilities
- Improved with better performance optimization
- Maintained simplicity while improving quality

### Impact on Music Production
Fruity Balance has influenced music production by:
- Providing clean gain staging solutions
- Enabling proper automation practices
- Facilitating complex effects chains
- Supporting various musical genres with simple processing

## 🧠 Advanced Processing Techniques

### Gain Staging Mastery
Advanced techniques for gain staging:
- **Pre/Post Processing:** Understanding signal flow
- **Headroom Management:** Maintaining optimal levels
- **Dynamic Range:** Preserving dynamic information
- **Signal Integrity:** Maintaining audio quality
- **Chain Optimization:** Optimizing processing chains

### Stereo Field Management
Advanced stereo field techniques:
- **Width Control:** Managing stereo image width
- **Positioning:** Precise stereo positioning
- **Separation:** Creating space between elements
- **Imaging:** Creating clear stereo images
- **Coherence:** Maintaining phase coherence

### Creative Applications
Advanced creative techniques:
- **Rhythmic Effects:** Creating rhythmic volume and pan effects
- **Spatial Effects:** Creating spatial interest and movement
- **Dynamic Effects:** Creating dynamic expression
- **Textural Effects:** Creating evolving textures
- **Experimental Effects:** Pushing boundaries of simple processing

## 📊 Performance Considerations

### CPU Usage
Managing Fruity Balance's impact on system performance:
- **Negligible CPU Load:** Minimal processing overhead
- **Multiple Instances:** Safe for extensive use
- **Real-Time Performance:** Optimized for live performance
- **Automation Impact:** No additional CPU from automation
- **Efficiency:** Maximum efficiency with minimal resources

### Audio Quality
Maintaining audio quality during processing:
- **Zero Latency:** No timing delays
- **High Resolution:** Precise parameter control
- **No Artifacts:** Clean processing without artifacts
- **Phase Coherence:** Maintains phase relationships
- **Signal Integrity:** Preserves original signal quality

### System Integration
Optimizing Fruity Balance within the system:
- **Buffer Management:** Works with any buffer settings
- **Threading:** Minimal processing thread usage
- **Driver Compatibility:** Works with all audio drivers
- **Latency Management:** No additional latency

## 🛠️ Troubleshooting Common Issues

### Volume Problems
- **Clipping:** Reduce volume if output is clipping
- **Low Output:** Increase volume if signal is too quiet
- **Distortion:** Check for excessive gain staging
- **Phase Issues:** Verify stereo field and panning settings
- **Level Mismatch:** Adjust to match other elements

### Panning Problems
- **Mono Output:** Check if signal is properly panned
- **Imbalanced Stereo:** Verify left/right balance
- **Phase Cancellation:** Check for phase issues
- **Stereo Width:** Adjust panning for desired width
- **Center Issues:** Verify center position settings

### Technical Issues
- **Automation Problems:** Check automation lane settings
- **MIDI Mapping:** Verify controller mapping
- **Plugin Conflicts:** Check for conflicts with other plugins
- **Sample Rate:** Verify sample rate compatibility
- **Bit Depth:** Check bit depth settings

## 🎚️ Advanced Configuration

### Custom Presets
Creating and managing custom configurations:
- **Volume Presets:** Optimized for different volume applications
- **Panning Presets:** Configured for specific panning applications
- **Automation Presets:** Set up for different automation scenarios
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple Fruity Balance instances effectively:
- **Chain Processing:** Multiple instances in series
- **Parallel Processing:** Multiple instances in parallel
- **Selective Processing:** Different instances for different elements
- **Performance Optimization:** Managing multiple instances

### Integration Configurations
Optimizing for different integration scenarios:
- **Insert Processing:** Inline processing configurations
- **Send Processing:** Effects return configurations
- **Hardware Integration:** External hardware integration
- **DAW Integration:** Optimizing for FL Studio workflow

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Fruity Balance techniques
- **Reddit Groups:** Sharing volume and panning techniques
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced volume and panning techniques
- **Written Guides:** In-depth articles on gain staging and panning
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting Fruity Balance configurations
- **Technique Sharing:** Platforms for sharing processing methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Explain 3 reasons why automating the Mixer Fader is bad practice
- [ ] Use Fruity Balance to drive a distortion plugin into saturation
- [ ] Create a rhythmic tremolo effect by automating the Volume knob
- [ ] Demonstrate proper gain staging using multiple Balance instances
- [ ] Create a complex stereo panning automation sequence
- [ ] Explain the difference between pre-FX and post-FX volume control
- [ ] Set up a volume rider for dynamic vocal control
- [ ] Create a ping-pong delay effect using panning automation
- [ ] Troubleshoot volume and panning issues effectively
- [ ] Integrate Fruity Balance into efficient mixing workflows

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

```

---

## FILE: 01-Learning\quick-start-guide.md

```markdown
# Fruity Balance Quick Start Guide

## Getting Started in 30 Seconds

### Basic Stereo Positioning
1. **Load Fruity Balance** on any stereo track
2. **Set Pan to -25** for left positioning
3. **Set Width to 110%** for enhanced stereo
4. **Check Mono button** to verify mono compatibility
5. **Adjust Output Level** to match original volume

## Core Controls Explained

### Pan Control (-100 to +100)
- **-100**: Hard left
- **-50**: Center-left
- **0**: Center
- **+50**: Center-right  
- **+100**: Hard right
- **Curve**: Constant power for smooth panning

### Balance Control (-100 to +100)
- **Negative**: Right channel louder
- **0**: Perfect balance
- **Positive**: Left channel louder
- **Use**: Fixing channel imbalances, not panning

### Width Control (0-200%)
- **0%**: Mono
- **50%**: Narrow stereo
- **100%**: Normal stereo
- **150%**: Wide stereo
- **200%**: Maximum width (use carefully)

### Mono Button
- **Checked**: Mono output for compatibility testing
- **Unchecked**: Normal stereo output
- **Purpose**: Check mono compatibility

## Common Starting Points

### Lead Vocal Positioning
`\`\`
Pan: -10 (slightly left)
Balance: 0 (balanced)
Width: 80% (focused stereo)
Mono: Check regularly
`\`\`

### Stereo Guitar Enhancement
`\`\`
Pan: 0 (center)
Balance: 0 (balanced)
Width: 120% (enhanced stereo)
Mono: Check phase issues
`\`\`

### Background Pad Widening
`\`\`
Pan: 0 (center)
Balance: 0 (balanced)
Width: 150% (very wide)
Mono: Check for cancellation
`\`\`

### Bass Guitar (Usually Mono)
`\`\`
Pan: 0 (center)
Balance: 0 (balanced)
Width: 0% (force mono)
Mono: Should sound identical
`\`\`

## Quick Problem Solvers

### Track Sounds Too Narrow
**Solution**: Increase Width to 120-150%
**Tip**: Check mono compatibility after widening

### Left/Right Channel Imbalance
**Solution**: Adjust Balance (not Pan)
**Note**: Balance fixes level, Pan fixes position

### Stereo Image Collapses in Mono
**Solution**: Reduce Width to 80-100%
**Fix**: May need phase correction

### Track Gets Lost in Mix
**Solution**: Increase Width for presence
**Alternative**: Pan to create space

## Basic Workflow Steps

### Step 1: Initial Position
1. Use Pan for basic left/right positioning
2. Set Width to 100% (neutral)
3. Check Balance for channel levels

### Step 2: Enhancement
1. Adjust Width for desired stereo character
2. Fine-tune Balance for even channels
3. Check Mono button regularly

### Step 3: Context Check
1. Listen in full mix context
2. Verify relationship with other tracks
3. Adjust Output Level if needed

### Step 4: Final Verification
1. Check mono compatibility
2. Listen on different systems
3. Make final adjustments

## Instrument-Specific Tips

### Vocals
- **Lead Vocals**: Center to ±15% panning
- **Background Vocals**: Wider positioning (±30-50%)
- **Width**: 70-90% for focused image
- **Mono**: Critical to check

### Guitars
- **Rhythm Guitars**: Pan left/right oppositely (-50/+50)
- **Lead Guitars**: Center or slightly off-center
- **Acoustic**: Can use wider stereo (120% width)
- **Mono**: Check for phase issues

### Keyboards
- **Piano**: Can use natural stereo or enhanced width
- **Synths**: Often use wide stereo (120-150%)
- **Organ**: Traditional positioning or creative
- **Mono**: Important for bass content

### Drums (Stereo Kits)
- **Kick/Snare**: Usually center
- **Overheads**: Natural stereo, maybe slight width boost
- **Room Mics**: Often widened for space
- **Mono**: Check carefully for phase

## Genre-Specific Approaches

### Pop Music
`\`\`
Lead Elements: Center-focused
Supporting Elements: Moderate panning
Background Elements: Wider positioning
Width: Natural to slightly enhanced
`\`\`

### Rock Music
`\`\`
Rhythm Section: Traditional panning
Lead Elements: Center or slightly off
Background: Wide for atmosphere
Width: Natural to moderately enhanced
`\`\`

### Electronic Music
`\`\`
Bass Elements: Center or mono
Melodic Elements: Creative panning
Pads/Atmosphere: Very wide
Width: Often enhanced (120-150%)
`\`\`

### Classical/Acoustic
`\`\`
Main Elements: Natural positioning
Supporting Elements: Traditional panning
Ambience: Natural stereo width
Width: Usually 100% (natural)
`\`\`

## Common Mistakes to Avoid

❌ Using Balance instead of Pan for positioning
❌ Forgetting to check mono compatibility
❌ Over-widening elements that should be focused
❌ Ignoring context with other instruments
❌ Not level-matching when A/B testing

## Pro Tips

### The 10% Rule
- Most stereo enhancement needs only 10-20% width increase
- Subtle changes often work best
- Extreme changes are for special effects

### Mono Testing
- Always check mono compatibility
- Listen for phase cancellation
- Some tracks should be mono by design

### Width Balance
- Not everything should be wide
- Create contrast between narrow and wide elements
- Width creates space, not always better

### Context Awareness
- Stereo decisions affect entire mix
- Consider arrangement and genre conventions
- Leave space for important elements

## Visual Feedback Guide

### Stereo Image Display
- **Left/Right**: Shows channel levels
- **Center Correlation**: Mono compatibility indicator
- **Width Meter**: Shows current stereo width
- **Phase Meter**: Phase relationship indicator

### Reading the Meters
- **Centered Image**: Balanced stereo
- **Left/Right Bias**: Channel imbalance
- **Narrow Image**: May be mono or phase issues
- **Wide Image**: Enhanced stereo presence

This quick start guide provides immediate functionality while teaching fundamental stereo concepts. Start here, then explore advanced spatial techniques as you gain experience.
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Balance

## Purpose & Identity
Fruity Balance is a minimalist gain and panning utility. Its primary identity is as a **specialized automation bridge**. While simple, it solves one of the biggest headaches in FL Studio: the conflict between "Artistic Automation" and "Mix Leveling." [SRC: IL-MAN]

## 60-Second Mental Model
Imagine a physical volume knob added to your effect pedalboard. It doesn't change the color of your sound; it just changes how loud it is *at that specific point* in the chain. It’s a clean "fader" that you can hide anywhere in your mixer rack.

## Hip-Hop / R&B Context
In modern rap and R&B, energy is managed through volume automation.
- **The Energy Lift:** Boosting the volume by 1-2dB exactly when the hook hits to make it feel more "Upbeat."
- **Melodic Ducking:** Manually lowering the melody volume during a rapid-fire rap verse to increase intelligibility.
- **Intro Swells:** Creating smooth, atmospheric fade-ins for "Vibey" pads.

## When To Use
- When you need to **automate volume** without losing the ability to move your Mixer Faders manually.
- When you want to **gain stage** between two plugins (e.g., boosting into a saturator).
- When creating **rhythmic gating** effects via high-speed automation.

## When NOT To Use
- **Surgical Panning:** Use **Fruity Stereo Shaper** if you need precise Mid/Side control or delay-based widening.
- **Final Master Leveling:** Use the Master Fader or a dedicated limiter for final ceiling management.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Balance

## UI Tour
Fruity Balance features a streamlined interface designed for speed:

1.  **Volume Knob (Left):** Adjusts signal gain from silence (-inf) to +6dB. [SRC: IL-MAN]
2.  **Balance Knob (Right):** Adjusts the Left/Right balance of the stereo field.
3.  **Visual Meter:** Shows the input/output activity (minimalist feedback).

## Functional Flow
1.  **Input:** Audio enters from the previous slot or the Channel Rack.
2.  **Gain Stage:** The Volume knob multiplies the amplitude of the signal. 
3.  **Pan Engine:** The Balance knob applies a **Constant Power Panning Law**, ensuring that the perceived loudness remains consistent as you pan left or right. [SRC: UNVERIFIED - common FL behavior]
4.  **Output:** Audio is passed to the next effect slot.

## Things Beginners Misunderstand
- **Automation Values:** In an FL Automation Clip, `50%` (center) on the clip usually corresponds to `0dB` (Unity) on the plugin knob. Turning it higher than 50% boosts the signal. [SRC: REPUTABLE]
- **Stereo vs Mono:** Balance is a *Balance* control, not a *Pan* control in the traditional sense. It turns down one side to make the sound appear on the other. It does not "move" information from Left to Right.
- **Slot Placement:** Beginners often place it at the end of the chain. Try placing it **before** a Reverb to automate the "dry" volume without cutting off the reverb tail.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Balance

## 1. The "Fader Guard" Strategy
- **Technique:** Never automate the actual Mixer Faders. Always use Fruity Balance for volume changes.
- **Why:** If you automate the fader, you can't easily turn the whole track down later to make room for the Kick. With Balance, your fader stays free for "Global Leveling." [SRC: REPUTABLE]

## 2. Input Drive (Saturation Staging)
- **Technique:** Place Balance *before* **Fruity Blood Overdrive** or **Fruity Soft Clipper**.
- **Execution:** Automate the Volume knob to boost (+3dB) during high-energy sections.
- **Result:** You "drive" the distortion unit harder, creating more harmonics during the chorus without changing the perceived volume (if compensated at the output).

## 3. The "Tail-Safe" Mute
- **Technique:** Place Balance *before* a Delay or Reverb.
- **Execution:** Automate Volume to 0 to "mute" the instrument.
- **Benefit:** The instrument stops playing, but the Delay and Reverb tails continue to ring out naturally. Muting the mixer track would cut them off abruptly. [SRC: REPUTABLE]

## 4. Manual Sidechain Ducking
- **Technique:** Draw a sharp "dip" in the automation clip synchronized with every Kick hit.
- **Why:** This is more precise than a compressor. You can shape the "bounce" exactly to the vibe of the track (e.g., a "Moody" slow return vs an "Upbeat" fast snap).

## Common Pitfalls + Fixes
- **Pitfall:** "The volume boost is causing digital clipping."
  - **Fix:** Keep the Volume knob at or below the default (center) position. Use it for *attenuation* (cutting) more than *amplification*.
- **Pitfall:** "The panning sounds 'thin'."
  - **Fix:** Balance is a simple gain-based panner. For a wider, more natural stereo image, use **Fruity Stereo Shaper** with a tiny delay (Haas effect).

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Balance

Balance enables vibes through **energy management** and **spatial discipline**.

## 1. Moody (Dark, Introspective, Heavy)
- **Concept:** Creating "Low-Energy Pockets."
- **Levers:**
  - **Automation:** Slow, linear volume fades (approx. -3dB) during the verse to make the track feel "smaller" and more personal.
  - **Panning:** Narrow the "Balance" toward the center (using Patcher or automation) to make the sound feel "trapped."
- **Listen For:** A sense of withdrawal and distance.
- **Don't Do This:** Avoid sudden volume jumps; keep transitions "liquid."

## 2. Upbeat (Kinetic, Energetic, Pop)
- **Concept:** "The Lift."
- **Levers:**
  - **Automation:** Instant +1.5dB boost on the downbeat of the hook.
  - **Gating:** Rapid square-wave automation on the volume for a "chopped" energy.
- **Listen For:** A "snap" in energy that makes the listener's head move.
- **Don't Do This:** Don't let the volume stay static; energy must pulse.

## 3. Psychedelic (Morphing, Swirling, Liquid)
- **Concept:** Spatial Disorientation.
- **Levers:**
  - **LFO Panning:** Link the Balance knob to a slow Sine LFO (using **Fruity Peak Controller**).
  - **Tremolo:** Link the Volume knob to a fast Square LFO for metallic textures.
- **Listen For:** Sounds that seem to "orbit" your head.
- **Don't Do This:** Don't keep the pan in the center; psychedelic vibes require motion.

## 4. Jazzy (Soulful, Organic, Human)
- **Concept:** Simulating a "Live Player."
- **Levers:**
  - **Vocal Riding:** Manually automate the Volume knob to follow the dynamics of a singer, bringing up the whispers and taming the shouts.
  - **Soft Off-Center:** Pan the piano slightly (15%) to one side to simulate its position on a stage.
- **Listen For:** A sense of "performance" where the volume feels responsive.
- **Don't Do This:** Avoid mechanical repeating patterns; keep it human.

## 5. Vibey (Smooth, Glossy, Modern R&B)
- **Concept:** "The Bloom."
- **Levers:**
  - **Volume Swells:** Use a slow Bezier curve to "bloom" a pad from 0 to -6dB.
  - **Stereo Placement:** Pan ad-libs hard Left/Right (100%) to create a wide "expensive" halo around the centered lead.
- **Listen For:** A shimmering, polished atmosphere with perfect clarity.
- **Don't Do This:** Don't crowd the center channel; use the Balance knob to move background elements out of the way. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Balance (5 Minutes)

1.  **Insert:** Load **Fruity Balance** into any FX slot (usually Slot 10 for gain control).
2.  **Level:** Adjust the **Volume** knob to set your "Pre-Fader" level.
3.  **Pan:** Use the **Balance** knob to place the sound in the stereo field.
4.  **Automate:** Right-click the **Volume** knob -> **Create Automation Clip**.
5.  **Mix:** Leave your **Mixer Fader** at its resting position. Use the automation clip for artistic changes (fades, swells).
6.  **Tip:** Hold **Alt+Click** on any knob to reset it to its default (Center/0dB) position. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity Balance

- **Automating the Master:** Using Fruity Balance on the Master track for a fade-out. **Fix:** Use it on an "Instrument Bus" instead, so your Master Metering stays accurate.
- **Over-Boosting:** Turning the Volume knob to maximum (+6dB). This reduces digital headroom. **Fix:** Keep the knob at or below center (0dB) and turn up your monitors if the sound is too quiet.
- **Mixer Conflict:** Having both Mixer Fader automation AND Fruity Balance automation on the same track. This makes troubleshooting volume issues impossible. **Fix:** Choose one method (ideally Balance) and stick to it.
- **Slot Placement:** Putting Balance *after* a heavy Limiter. The limiter will "fight" your volume automation. **Fix:** Place Balance *before* the Limiter.
- **Ignoring Mono:** Panning elements hard Left/Right using the Balance knob without checking how they sound in Mono. Some sounds lose energy when panned gain-wise. **Fix:** Periodically check your Master in Mono. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points: Fruity Balance

| Target Vibe | Slot Position | Volume Knob | Balance Knob | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Intro Swell** | Slot 1 (Pre-FX) | 0% to 80% | Center | Atmospheric Pad entry. |
| **R&B Width** | Slot 10 (Post-FX) | Center | Hard Left (100%)| Doubled background vocal.|
| **Energy Lift** | Slot 10 (End) | +1.5dB (Boost) | Center | Chorus/Hook arrival. |
| **Melody Duck** | Slot 1 (Start) | -3dB (Cut) | Center | Making room for rap bars. |
| **Auto-Pan** | Slot 5 (Mid) | Center | LFO Modulated | Trippy synth leads. |

*Note: "Center" on the Volume knob represents 0dB (Unity Gain).* [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Starting Points: Moody (Fruity Balance)

- **The Goal:** A receding, "lost" feeling where the music seems to drift away.
- **Recipe:**
  1. Load Balance at the **end** of your melody chain.
  2. Right-click the **Volume** knob -> **Create Automation Clip**.
  3. Draw a slow, linear downward slope from 50% to 35% over 8 bars.
  4. At the same time, automate the **Balance** knob to move from Center to 20% Right.
- **Result:** The melody gets slightly quieter and moves off-center, making the listener feel like the "ground" is shifting. It adds a layer of emotional instability perfect for moody R&B.
- **Mix Tip:** Link this to a low-pass filter for an even more "submerged" vibe. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey

## Upbeat (The "Energy Pulse")
- **Setup:** Balance on the Drum Bus.
- **Automation:** Set Volume to boost +1dB every 4th bar on the "snare" hit.
- **Vibe Tip:** This creates a subtle "push" that makes the rhythm feel more aggressive.

## Psychedelic (The "Orbital")
- **Setup:** Balance on a Synth Lead.
- **Modulation:** Link the Balance knob to a **Fruity Peak Controller** (LFO section).
- **Speed:** 1/2 bar.
- **Effect:** The sound slowly orbits the listener's head, creating a sense of liquid space.

## Jazzy (The "Vocal Rider")
- **Setup:** Balance on a soulful vocal take.
- **Technique:** Draw automation points to manually "Ride" the volume, bringing up the tail of every word so nothing gets lost in the mix.

## Vibey (The "Silk Swell")
- **Setup:** Balance on a lush Reverb send.
- **Automation:** Slow fade-in (S-Curve) at the start of the break.
- **Context:** The reverb "blooms" into existence rather than just starting, feeling expensive and high-end. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Balance: The Automation Essential

> **Scope:** Gain Staging, Volume Automation, and Stereo Panning.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Utility).

## 🧠 The "Utility" Concept
Fruity Balance is arguably the most important utility plugin for **Mixing Workflow**.
*   **Function:** It creates a "Gain Stage" in the middle of your effect chain.
*   **Why use it?** To separate **Volume Automation** from **Static Mixing**.
    *   *Bad Workflow:* Automating the Mixer Track Fader. (Now you can't adjust the overall level of the track easily).
    *   *Good Workflow:* Automating Fruity Balance Volume. (The Mixer Fader remains free for mixing adjustments).

**Signal Flow:**
`Input` -> **[BALANCE (PAN)]** -> **[VOLUME (GAIN)]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Controls

| Knob | Function | Details |
| :--- | :--- | :--- |
| **Balance** | Panning. | **True Summing:** Unlike standard "Balance" controls that just mute the other side, Fruity Balance mixes the Left and Right channels together as you pan. |
| **Volume** | Gain. | **Range:** -inf to +6dB (approx). It allows for slight boosting, but is primarily for attenuation. |

---

## 🔁 Section 2: Panning Physics

*   **Mode:** "True Pan" / Summing.
*   **Behavior:**
    *   *Hard Left:* You hear both the Left signal AND the Right signal coming out of the Left speaker.
    *   *Standard Mixer Pan:* Usually attenuates the Right channel (Circular Panning Law). You lose the Right signal info.
*   **Application:** Use Fruity Balance when you have a stereo synth (e.g., Ping Pong sound) and you want to move the *entire image* to the left without losing the "Pong" delay taps.

---

## ⚡ Technical Specs: CPU Usage

*   **Load:** Negligible.
*   **Math:** It is a simple multiplication algorithm (`Samples * Volume`).
*   **Latency:** 0 samples. 0ms.
*   **Optimization:** You can load 500 instances of Fruity Balance without denting a modern CPU.

---

## 🧪 "Secret Sauce" Workflows

### 1. The Pre-Fader Send Trick
1.  **Context:** You want to send a vocal to a Reverb bus, but you want the Reverb to stay loud even if you turn the vocal volume down (Pre-Fader).
2.  **FL Studio Limitation:** FL's "Send" knobs are Post-Fader only (mostly).
3.  **Workaround:**
    *   Route Vocal to a "Submix" track.
    *   Place Fruity Balance on the Submix.
    *   Route Submix to Master (Dry) and Reverb (Wet).
    *   Automate Fruity Balance Volume to control the Dry level.
    *   The Send to the Reverb happens *before* the Volume Fader of the Submix track, effectively simulating a Pre-Fader send if you structure the routing chains correctly. (Actually, easier: Just route Vocal to Reverb, and use Fruity Balance on the Vocal track as the "Fader" to kill the dry signal while the route remains active).

### 2. Sidechain Ducking (Manual)
1.  **Goal:** Duck the Bass when the Kick hits.
2.  **Tool:** Fruity Balance.
3.  **Action:** Automate the Volume knob.
4.  **Shape:** Draw a quick dip (V shape) on every kick.
5.  **Benefit:** cleaner and more transparent than a Compressor. No attack/release artifacts. Just pure volume Envelope.

```

---

## FILE: 01-Learning\Quick-Reference\gain-staging-basics.md

```markdown
# Gain Staging Basics with Fruity Balance

## Why use Fruity Balance?
Automation of the Mixer Slider can be difficult once you want to tweak the overall level later. Fruity Balance allows you to automate volume **before** the mixer slider.

## Core Parameters
- **Volume**: Controls the gain of the signal. Use this for automation.
- **Pan**: Controls the stereo placement of the signal.

## Best Practices
- **Level Matching**: Use Fruity Balance at the end of an FX chain to compensate for gain changes made by compressors or EQs.
- **Automation Hub**: Always automate the **Volume** knob in Fruity Balance rather than the Mixer Fader. This keeps your faders free for final mix balancing.

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Fruity Balance - Parameter Cheat Sheet

**Plugin Type:** Gain Staging / Panning Utility
**Category:** Utility
**Official Manual:** [Fruity Balance](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Balance.htm)

---

## 🎚️ Gain & Pan Controls

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Volume** | 0% to 100% | Signal gain adjustment | Automate THIS instead of the Mixer Fader! |
| **Pan** | 100% Left to 100% Right | Stereo balance | Use for movement/panning automation |

---

## 🎛️ Why Use Fruity Balance?

| Problem | Fruity Balance Solution |
|---------|-------------------------|
| **Rigid Faders** | Automating a Mixer Fader makes it hard to change the *overall* level later. Use Fruity Balance for volume automation, and keep the Fader for overall balance. |
| **Pre/Post FX Volume** | Place it at the start of a chain to drive compressors harder, or at the end to level match. |
| **Gain Staging** | Use it to bring hot signals (peaking above 0dB) down to a healthy level (~ -12dB) before they hit other plugins. |

---

## 🔧 Technical Engine Data

- **Type:** Linear Multiplier
- **PDC:** 0 samples (Zero Latency)
- **CPU:** Near-zero (The lightest gain plugin in FL)
- **Mapping:** 
  - 80% (0.8) = Unity Gain (0 dB)
  - 100% (1.0) = +5.6 dB boost

---

## 🎯 Quick Start Workflows

### The "Fader-Safe" Automation
1. **Goal:** You want to automate the volume of a vocal, but still be able to move the mixer fader.
2. **Action:** Insert **Fruity Balance** as the last effect in the chain.
3. **Action:** Create an automation clip for the **Volume** knob.
4. **Benefit:** Your Mixer Fader is still free for final mixing adjustments.

### Pre-Compressor Gain Matching
1. **Goal:** Your recording is too quiet to trigger a compressor properly.
2. **Action:** Place **Fruity Balance** BEFORE the compressor.
3. **Action:** Increase the **Volume** knob until the compressor starts working.

---

## ⚡ Pro Tips

1. **The 80% Rule:** Remember that "Default" (80%) is zero gain. If you want to *boost* a signal, you only have about 5.6dB of headroom within the plugin itself.
2. **Stereo Pan Law:** Fruity Balance uses a **Circular Pan Law**. This means the sound won't seem to get louder as you pan it to one side, which is essential for a natural mix.
3. **Visual Feedback:** Watch the Peak Meter in the Mixer while adjusting Fruity Balance to ensure your gain staging is consistent.

---

**Last Updated:** February 3, 2026
**Status:** ⭐ HIGH PRIORITY - Elaborated Reference

```

---

## FILE: 02-Data\parameters.json

```json
{
  "pluginName": "Fruity Balance",
  "version": "1.0",
  "lastUpdated": "2025-01-04",
  "category": "Spatial Processing",
  "parameters": {
    "pan": {
      "type": "continuous",
      "range": {
        "min": -100,
        "max": 100,
        "default": 0
      },
      "unit": "percent",
      "description": "Stereo panning position using constant power curve",
      "technicalDetails": "Constant power panning maintains perceived loudness across positions",
      "sweetSpots": {
        "hard_left": -100,
        "center_left": [-30, -20],
        "center": 0,
        "center_right": [20, 30],
        "hard_right": 100
      }
    },
    "balance": {
      "type": "continuous",
      "range": {
        "min": -100,
        "max": 100,
        "default": 0
      },
      "unit": "percent",
      "description": "Left/right channel level balance adjustment",
      "technicalDetails": "Adjusts relative channel levels without changing stereo position",
      "sweetSpots": {
        "left_dominant": [-20, -10],
        "balanced": 0,
        "right_dominant": [10, 20]
      }
    },
    "width": {
      "type": "percentage",
      "range": {
        "min": 0,
        "max": 200,
        "default": 100
      },
      "unit": "percent",
      "description": "Stereo image width control from mono to double width",
      "technicalDetails": "Spatial processing algorithm for stereo width enhancement",
      "sweetSpots": {
        "mono": 0,
        "narrow": [50, 80],
        "natural": 100,
        "enhanced": [120, 150],
        "extreme": [180, 200]
      }
    },
    "outputLevel": {
      "type": "gain",
      "range": {
        "min": -20,
        "max": 20,
        "default": 0
      },
      "unit": "dB",
      "description": "Output level compensation for gain changes from processing",
      "technicalDetails": "Maintains consistent output levels despite spatial processing"
    },
    "mono": {
      "type": "boolean",
      "default": false,
      "description": "Switch to mono output for compatibility testing",
      "technicalDetails": "Sum to mono with proper phase handling"
    },
    "bypass": {
      "type": "boolean",
      "default": false,
      "description": "Bypass processing for A/B comparison",
      "technicalDetails": "Hard bypass maintaining level matching"
    }
  },
  "presets": {
    "vocal": {
      "lead_vocal_center": {
        "name": "Lead Vocal - Center",
        "description": "Centered lead vocal with focused image",
        "settings": {
          "pan": 0,
          "balance": 0,
          "width": 80,
          "outputLevel": 0
        }
      },
      "lead_vocal_slight": {
        "name": "Lead Vocal - Slight Pan",
        "description": "Lead vocal slightly off-center for space",
        "settings": {
          "pan": -15,
          "balance": 0,
          "width": 85,
          "outputLevel": 0
        }
      },
      "background_vocals": {
        "name": "Background Vocals - Wide",
        "description": "Wide stereo background vocals",
        "settings": {
          "pan": 0,
          "balance": 0,
          "width": 130,
          "outputLevel": -2
        }
      }
    },
    "guitar": {
      "rhythm_left": {
        "name": "Rhythm Guitar - Left",
        "description": "Left-positioned rhythm guitar",
        "settings": {
          "pan": -50,
          "balance": 0,
          "width": 90,
          "outputLevel": 0
        }
      },
      "rhythm_right": {
        "name": "Rhythm Guitar - Right",
        "description": "Right-positioned rhythm guitar",
        "settings": {
          "pan": 50,
          "balance": 0,
          "width": 90,
          "outputLevel": 0
        }
      },
      "acoustic_wide": {
        "name": "Acoustic Guitar - Wide",
        "description": "Wide stereo acoustic guitar",
        "settings": {
          "pan": 0,
          "balance": 0,
          "width": 140,
          "outputLevel": -1
        }
      }
    },
    "keyboard": {
      "piano_natural": {
        "name": "Piano - Natural",
        "description": "Natural piano stereo width",
        "settings": {
          "pan": 0,
          "balance": 0,
          "width": 110,
          "outputLevel": 0
        }
      },
      "synth_wide": {
        "name": "Synth - Wide",
        "description": "Wide stereo synthesizer",
        "settings": {
          "pan": 0,
          "balance": 0,
          "width": 160,
          "outputLevel": -2
        }
      },
      "organ_traditional": {
        "name": "Organ - Traditional",
        "description": "Traditional Leslie positioning",
        "settings": {
          "pan": 0,
          "balance": 0,
          "width": 125,
          "outputLevel": 0
        }
      }
    },
    "drums": {
      "overheads_natural": {
        "name": "Drum Overheads - Natural",
        "description": "Natural drum overhead positioning",
        "settings": {
          "pan": 0,
          "balance": 0,
          "width": 105,
          "outputLevel": 0
        }
      },
      "room_wide": {
        "name": "Room Mics - Wide",
        "description": "Wide room microphone enhancement",
        "settings": {
          "pan": 0,
          "balance": 0,
          "width": 150,
          "outputLevel": -3
        }
      }
    },
    "utility": {
      "bass_mono": {
        "name": "Bass - Mono",
        "description": "Mono bass guitar for solid foundation",
        "settings": {
          "pan": 0,
          "balance": 0,
          "width": 0,
          "outputLevel": 0
        }
      },
      "phase_check": {
        "name": "Phase Check",
        "description": "Check stereo phase issues",
        "settings": {
          "pan": 0,
          "balance": 0,
          "width": 100,
          "outputLevel": 0,
          "mono": true
        }
      }
    }
  },
  "genreApplications": {
    "pop": {
      "typicalSettings": {
        "lead_elements": {"pan": 0, "width": 80},
        "supporting_elements": {"pan": [-30, 30], "width": 90},
        "background_elements": {"pan": 0, "width": 120}
      },
      "useCase": "Clean, commercial stereo imaging"
    },
    "rock": {
      "typicalSettings": {
        "rhythm_section": {"pan": [-50, 50], "width": 100},
        "lead_elements": {"pan": [-10, 10], "width": 85},
        "background": {"pan": 0, "width": 110}
      },
      "useCase": "Traditional rock stereo placement"
    },
    "electronic": {
      "typicalSettings": {
        "bass_elements": {"pan": 0, "width": 0},
        "melodic_elements": {"pan": [-40, 40], "width": 130},
        "atmospheric": {"pan": 0, "width": 150}
      },
      "useCase": "Wide, modern electronic imaging"
    },
    "acoustic": {
      "typicalSettings": {
        "main_elements": {"pan": [-20, 20], "width": 100},
        "supporting": {"pan": [-40, 40], "width": 95},
        "ambient": {"pan": 0, "width": 105}
      },
      "useCase": "Natural, realistic stereo field"
    }
  },
  "technicalSpecs": {
    "panningLaw": "Constant power (-3dB center"),
    "widthAlgorithm": "Mid-side processing",
    "phaseCoherence": "Maintained across all settings",
    "latency": 0,
    "cpuUsage": 0.1,
    "sampleRates": [44100, 48000, 88200, 96000],
    "bitDepths": [16, 24, 32]
  }
}
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Balance

| Parameter | Type | Range | Default | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Volume** | Knob | -inf to +6.02dB| 0dB | **Upbeat** (Lifts) | **Energy** | Controls the output signal gain. |
| **Balance** | Knob | L 100 to R 100 | Center | **Vibey** (Width) | **Placement** | Controls stereo balance. |

- **Vibe Impact Tag (Upbeat):** Rapidly automating Volume creates "Chopper" or "Gate" effects.
- **Mix Impact Tag (Loudness):** Precise gain-staging before a limiter ensures maximum loudness without distortion. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\balance-params.json

```json
{
  "plugin": {
    "name": "Fruity Balance",
    "category": "Utility",
    "type": "Gain / Pan",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Balance.htm"
  },
  "parameters": {
    "volume": {
      "id": "volume",
      "range": "0-100%",
      "unityGain": "80%",
      "maxBoost": "+5.6 dB",
      "description": "Linear gain adjustment."
    },
    "pan": {
      "id": "pan",
      "range": "-100% to +100%",
      "type": "Circular Balance",
      "description": "Stereo panning control."
    }
  },
  "useCases": [
    "Volume automation (preserving mixer faders)",
    "Gain staging between plugins",
    "Level matching after heavy compression/EQ",
    "Stereo placement in FX chains"
  ]
}
```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity Balance",
  "category": "Utility / Gain",
  "parameters": [
    {
      "section": "Main",
      "id": "volume",
      "name": "Volume",
      "range": { "min": -60, "max": 6, "unit": "dB" },
      "description": "Gain attenuation or boost."
    },
    {
      "section": "Main",
      "id": "balance",
      "name": "Balance",
      "range": { "min": -50, "max": 50, "unit": "%" },
      "description": "Stereo panning position (Summing law)."
    }
  ]
}

```

---

## FILE: 02-Data\presets\00_Template_And_State_Strategy.md

```markdown
# Template & State Strategy: Fruity Balance

## 1. The "Clean Mix" Template
- **Placement:** Mixer Slot 10 on EVERY track.
- **Logic:** All artistic volume changes are done here. The Mixer Faders are used ONLY for the initial static balance.
- **Benefit:** When you need to turn the whole song down by -3dB for a label export, you can just select all faders and move them without breaking any automation clips.

## 2. The "Pre-Drive" Wrapper
- **Placement:** Directly before **Fruity Blood Overdrive**.
- **State:** Volume set to -inf by default.
- **Use:** Swell the volume to "feed" the distortion unit, creating a dynamic saturation effect.

## 3. The "Mono-Safe" Pan Bus
- **Placement:** On a parallel bus.
- **Routing:** Split signal into two instances. Invert the Pan on one.
- **Result:** Precise control over the "Difference" signal without affecting the "Sum." [SRC: REPUTABLE]

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Fruity Balance)

## 1. Headroom Discipline
- **Rule:** Never boost the Volume knob past 0dB during the "Rough Mix" stage.
- **Application:** Use the knob primarily for **Attenuation** (turning things down). Boosting too early in the chain creates digital "Inter-sample Peaks" that can sound harsh after mastering. [SRC: REPUTABLE]

## 2. Panning Hierarchy
- **Rule:** Kick, Snare, and Lead Vocal stay centered (Balance: 0).
- **Application:** Use Fruity Balance to move hi-hats, percs, and ad-libs at least **30%** away from the center to clear a "hole" for the rapper.

## 3. Automation "Rounding"
- **Rule:** Avoid 90-degree vertical lines in volume automation.
- **Application:** Use a tiny Bezier curve even for "instant" cuts. This prevents the microscopic "clicks" that can occur when a waveform is sliced at a non-zero crossing.

## 4. Mono-Check Requirement
- **Rule:** Any sound panned more than 50% must be checked in mono.
- **Move:** Turn the **Balance** knob hard left. Switch Master to Mono. If the sound disappears or thins out, your source has phase issues that Balance cannot fix.

## 5. Gain-Staging sends
- **Rule:** Reverb/Delay sends should be "Balanced" before they hit the effect.
- **Application:** Place Fruity Balance at Slot 1 of your Reverb Send. This allows you to control the "Intensity" of the input independently of the return fader. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity Balance

## 1. The "Golden Rule" of Automation

**Never Automate the Mixer Fader.**

1.  **Scenario:** You have a vocal track. You draw dynamic automation on the Fader to smooth out the levels (Vocal Riding).
2.  **Problem:** Later, you realize the whole vocal is too loud in the chorus.
3.  **Struggle:** You grab the fader to lower it. It snaps back immediately because of the automation. You have to edit every point in the automation clip.
4.  **Solution (Fruity Balance):**
    *   Add Fruity Balance as the last plugin in the vocal chain.
    *   Automate the **Volume** knob of Fruity Balance for the "Riding".
    *   Use the Mixer Fader to set the overall mix level.

## 2. Panning Automation Effects

1.  **Scenario:** You want a Hi-Hat to pan Left-Right-Left on 16th notes.
2.  **Tool:** Fruity Balance.
3.  **Action:** Automate the **Balance** knob.
4.  **Why:** If you automate the Channel Pan (in the Channel Rack), it happens *before* the effects. If you have a Stereo Delay on the Hat, panning before the delay changes how the delay reacts.
5.  **Post-FX Panning:** Placing Fruity Balance *after* the Delay allows you to pan the *entire* wet signal (Hat + Echoes) together, moving the whole space.

## 3. Creating Headroom (Gain Staging)

1.  **Context:** You have a distortion plugin (Distructor) that boosts the volume by +12dB.
2.  **Issue:** The next plugin (Compressor) is getting hit too hard (Clipping input).
3.  **Fix:** Insert Fruity Balance *between* Distructor and Compressor.
4.  **Setting:** Set Volume to -12dB (approx 25%).
5.  **Result:** You restore unity gain within the plugin chain.

## 4. Manual Trance Gate

1.  **Goal:** A rhythmic stutter effect.
2.  **Setup:**
    *   Add Fruity Balance.
    *   Right-click Volume -> **Create Automation Clip**.
3.  **Drawing:**
    *   Draw a square wave pattern in the Playlist.
    *   On / Off / On / Off.
4.  **Precision:** Fruity Balance is sample-accurate (mostly) for volume changes, creating tight, click-free gates if you smooth the edges slightly.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Sidechain Ducking Manual (Fruity Balance)

## Routing Context
- **Target:** Bass or Melody Bus.
- **Position:** Place **Fruity Balance** at the start of the FX chain (Slot 1).

## Step-by-Step Setup
1.  On the target track, load **Fruity Balance**.
2.  Right-click the **Volume** knob -> **Create Automation Clip**.
3.  In the **Playlist**, use the **Paint Tool** to draw a recurring shape every time the Kick hits.
4.  **The Shape:** 
    - Start at 100%. 
    - Drop instantly to 0% (or 20% for a softer vibe) on the Kick hit.
    - Curve back up to 100% over the next 1/8th note.
5.  **Refine:** Change the curve type to **Bezier** to adjust the "snap" of the bounce.

## What To Listen For
- A rhythmic "pumping" sensation. Unlike a sidechain compressor, this is 100% predictable and doesn't rely on the kick's actual volume level.

## Vibe Check
- **Upbeat:** Keep the curve sharp and fast.
- **Moody:** Make the recovery (return to 100%) slower and more gradual.

## Pitfalls + Fixes
- **Pitfall:** "Digital clicking."
  - **Fix:** Avoid a perfectly vertical line down to zero. Give the "drop" a tiny bit of horizontal distance (approx. 2ms) to prevent slicing the waveform too aggressively. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Shaping_And_Control.md

```markdown
# Goal: Driving Distortion Inputs (Fruity Balance)

## Routing Context
- **Target:** 808 or Aggressive Lead.
- **Position:** **Fruity Balance** (Slot 1) followed by **Fruity Blood Overdrive** (Slot 2).

## Step-by-Step Setup
1.  Load both plugins.
2.  Set **Fruity Blood Overdrive** to your desired "tone," but keep the internal gain moderate.
3.  Go to **Fruity Balance**.
4.  Right-click the **Volume** knob -> **Link to controller** -> **Fruity Peak Controller** (linked to the Snare).
5.  **Formula:** Use `Input*0.2`.
6.  **Result:** Every time the snare hits, the signal entering the distortion unit gets +2dB louder.

## What To Listen For
- The distortion should get "grittier" or "fuzzier" momentarily on every snare hit, creating a dynamic texture that reacts to the rhythm of the track.

## Vibe Check
- **Psychedelic:** This "moving distortion" creates a liquid texture that feels unstable and alive.

## Pitfalls + Fixes
- **Pitfall:** "The overall volume is jumping too much."
  - **Fix:** Place a **Fruity Soft Clipper** at Slot 3 to catch the volume peaks while keeping the distorted texture. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\automation-volume-riding.md

```markdown
# Automation & Volume Riding Workflow

## Goal
Smooth out the dynamics of a performance (like a vocal or lead synth) by "riding" the volume.

## Steps
1. **Insert Fruity Balance**: Place it as the last effect on your mixer track.
2. **Create Automation Clip**: Right-click the **Volume** knob and select **Create automation clip**.
3. **Analyze the Waveform**: Look for quiet parts and loud peaks.
4. **Draw the Curves**:
    - Boost quiet phrases by 1-2 dB.
    - Dip loud peaks to prevent clipping.
5. **Adjust Mixer Fader**: Now use the main Mixer Fader to set the overall level of the track in the mix.

## Pro Tip
You can link the **Volume** knob to a physical fader on your MIDI controller for real-time volume riding.

```

---

## FILE: 03-Workflows\by-goal\pre-fader-automation.md

```markdown
# The "Pre-Fader" Automation Workflow

## Goal
Perform complex volume "riding" or automation while keeping your mixer faders free for the final mix balance.

## The Problem
If you automate the **Mixer Fader**, you can no longer move that fader to adjust the overall volume of the track without breaking the automation or using a complex sub-mix bus.

## The Solution
1. **Insert Fruity Balance**: Place it at the very end of your effect chain on the mixer track.
2. **Create Automation Clip**: Right-click the **Volume** knob in Fruity Balance and select **Create automation clip**.
3. **Draw Your Automation**: 
   - Dip the volume during verses.
   - Boost it during choruses.
   - Fade it out at the end.
4. **The "Free" Fader**: Notice that your Mixer Fader is still at its original position. You can now move it up or down to set the overall level of the vocal relative to the drums, and your automation will scale perfectly.

## Why this is better
This mimics a professional console workflow where "VCA faders" or "Trim" are used for automation, leaving the physical fader for the mix engineer.

```

---

## FILE: 03-Workflows\by-instrument\vocals.md

```markdown
# Workflow: Vocal Gain Riding (Balance)

## The Concept
Manually leveling a soulful vocal take so that every whisper is heard without needing a heavy compressor that ruins the "vibe."

## Step-by-Step
1.  Place **Fruity Balance** as the first plugin on the Vocal chain.
2.  Right-click **Volume** -> **Create Automation Clip**.
3.  Listen through the verse. Every time a word sounds too quiet or "falls off" at the end, draw a point to boost it (+2-3dB).
4.  Every time a word is too aggressive, draw a point to tuck it down.
5.  **Result:** A perfectly leveled vocal that still sounds "dynamic" and human.

## Vibe Check
- **Jazzy/Soulful:** This maintains the emotional nuances of the performance while ensuring it sits perfectly on top of the beat.

## Pitfalls
- **Over-Correction:** If you level it too perfectly, it will sound like a robot. Leave some natural variations to preserve the "human" vibe. [SRC: REPUTABLE]

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Reference: Gain Staging Basics (Fruity Balance)

Proper gain staging is the invisible foundation of an "Expensive" sounding mix.

## 1. The Unity Point
In Fruity Balance, the default position (12 o'clock) is **Unity Gain (0dB)**. This means the signal leaves exactly as loud as it entered.

## 2. Pre-Fader vs. Post-Fader
- **Pre-Fader (Slot 1):** Changes the volume *before* any other processing. This affects how hard the signal hits compressors or saturators.
- **Post-Fader (Slot 10):** Changes the final volume after all processing. This is what you should automate for artistic fades.

## 3. The Digital Floor
Modern DAWs (FL Studio) use **32-bit float** audio. This means you technically have "infinite" headroom *inside* the DAW, but your converters (speakers/headphones) and final exports (16-bit/24-bit) do NOT.
- **Rule:** Keep your individual track peaks around **-6dB to -12dB** at the Fruity Balance stage to ensure you have enough room for mastering.

## 4. Visualizing the Balance
Use **Fruity dB Meter** *after* Fruity Balance to verify your gain moves are hitting your intended targets. [SRC: IL-MAN]

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity Balance

## 1. The "Trap Bounce" (Sidechain)
- **Mix Decision:** Deep, fast volume ducking on the 808 to clear space for the Kick transient.
- **Vibe:** Upbeat/Aggressive.
- **Tooling:** Volume Automation + Bezier Curves.

## 2. The "R&B Cloud" (Stereo Space)
- **Mix Decision:** Panning background vocal "halos" 100% L/R using separate mixer tracks and Balance knobs.
- **Vibe:** Vibey/Expensive.
- **Tooling:** Balance Knob + Parallel Sends.

## 3. The "Lofi Fade" (Nocturnal)
- **Mix Decision:** Slow volume swell at the start of the break to simulate a waking dream.
- **Vibe:** Moody/Nocturnal.
- **Tooling:** Volume Automation + Slow Linear Fade.

## 4. The "Liquid Lead" (Movement)
- **Mix Decision:** Constant LFO panning on a synth to create spatial disorientation.
- **Vibe:** Psychedelic.
- **Tooling:** Balance Knob + Peak Controller LFO.

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Fruity Balance Mechanics

## 1. Panning Law

*   **Type:** Circular Panning (Summed).
*   **Math:** When Panning Left:
    *   Left Output = Left Input + (Right Input * Pan_Factor).
    *   Right Output = Right Input * (1 - Pan_Factor).
*   **Result:** This conserves the *energy* of the stereo signal. It does not simply discard the Right channel (which would be "Balance" panning).

## 2. Volume Resolution

*   **Bit Depth:** 32-Bit Floating Point.
*   **Headroom:** Infinite internal headroom.
    *   You can boost +6dB inside Fruity Balance, clip the plugin meter, but sound clean as long as you lower the gain later in the chain.
    *   FL Studio's internal audio path is 32-bit float, so Fruity Balance cannot "clip" digitally unless it hits the Master Output (DAC).

## 3. Automation Smoothing

*   **Parameter:** Volume / Balance.
*   **Smoothing:** Fruity Balance has extremely fast parameter response times (low smoothing).
*   **Benefit:** Ideal for "Sidechaining" and "Gating" where instant volume drops are needed.
*   **downside:** If you automate it with a "Stepped" automation clip (rectangular), it might click. Use small slopes (2ms) to de-click.

## 4. Gain Range

*   **Max Boost:** ~x2.0 (+6dB).
*   **Max Cut:** -Infinity (Silence).
*   **Default:** 0.8 / 1.0 (Unity Gain is roughly at the 80% mark? No, check hint bar).
*   **Unity:** The default load state is Unity Gain (0dB).

```

---

## FILE: 04-Reference\technical-docs\gain-mapping-unity.md

```markdown
# Gain Mapping & Unity Logic

## FL Studio Internal Mapping
FL Studio uses a specific internal scale for gain. Understanding this is key to precise gain staging.

### The 80% Threshold
In Fruity Balance (and many other FL native parameters):
- **Value 0.0 (0%)**: -Inf dB (Silence)
- **Value 0.8 (80%)**: 0 dB (Unity Gain - signal is unchanged)
- **Value 1.0 (100%)**: +5.6 dB (Maximum boost)

## Pan Law Logic (Circular)
When you pan a sound in Fruity Balance, the plugin applies a **-3dB Pan Law**:
- **Center:** Both L and R are at 0dB.
- **Hard Left:** L is at +3dB relative to the center, R is at -Inf dB.
- **Result:** The "Center" position doesn't sound quieter than the "Side" position. This maintains a perceived constant volume as the sound moves across the stereo field.

## Signal Flow
1. **Input:** Stereo or Mono signal.
2. **Gain Multiplier:** Volume adjustment is applied first.
3. **Pan Law:** Signal is distributed to L/R channels.
4. **Output:** To the next slot in the mixer or the mixer fader.

```

---

## FILE: 04-Reference\technical-docs\stereo-panning-laws.md

```markdown
# Stereo Panning Laws & Fruity Balance

## Panning Law in FL Studio
By default, FL Studio uses a **Circular Panning Law**. This means as you pan a sound away from the center, the volume of the signal is adjusted to maintain a perceived constant loudness.

## Fruity Balance Behavior
Fruity Balance implements a standard linear balance pan. 
- **Hard Left**: The Right channel is fully attenuated.
- **Hard Right**: The Left channel is fully attenuated.

## Mono vs. Stereo Input
- If the input is **Mono**, Fruity Balance distributes the single signal between the L/R channels.
- If the input is **Stereo**, it attenuates one side relative to the other. To truly "move" a stereo image, consider using **Fruity Stereo Shaper**.

```

---

