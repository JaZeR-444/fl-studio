# Fruity Granulizer - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Granulizer - Granular Synthesis Engine

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗     ██████╗ ██████╗  █████╗ ███╗   ██╗██╗   ██╗██╗     ██╗███████╗███████╗██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔════╝ ██╔══██╗██╔══██╗████╗  ██║██║   ██║██║     ██║╚══███╔╝██╔════╝██╔══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║  ███╗██████╔╝███████║██╔██╗ ██║██║   ██║██║     ██║  ███╔╝ █████╗  ██████╔╝
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║   ██║██╔══██╗██╔══██║██║╚██╗██║██║   ██║██║     ██║ ███╔╝  ██╔══╝  ██╔══██╗
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ╚██████╔╝██║  ██║██║  ██║██║ ╚████║╚██████╔╝███████╗██║███████╗███████╗██║  ██║
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝        ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚═╝╚══════╝╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Granular Synthesizer / Sampler
**Category:** Generator / Sampling / Sound Design
**Official Manual:** [Image-Line Fruity Granulizer Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Granulizer.htm)

---

## 🎯 What is Fruity Granulizer?

Fruity Granulizer is a specialized sampler that uses **Granular Synthesis** to manipulate audio. It works by splitting a sample into thousands of tiny "grains," which are then replayed, looped, and staggered. This allows for extreme time-stretching (freezing audio in time), pitch-shifting without changing tempo, and creating "ethereal" or "glitchy" textures that are impossible with standard samplers.

**Key Capabilities:**
- **Grain Manipulation:** Control grain Attack, Hold, and Spacing.
- **Time-Stretching:** Play samples at 1% speed while maintaining original pitch.
- **Pitch-Shifting:** Change sample keys without changing the playback duration.
- **Wave Spacing:** Control the density and order of grains (Reverse grain flow!).
- **Stereo Separation:** Spread grains across the stereo field for massive width.
- **LFO Modulation:** Built-in LFO for wave spacing and effects.
- **Key-to-Sample Mapping:** Map different sample start points across the keyboard.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **granular-basics-decoded.md** (What is a Grain?)
3. Create **parameter-cheat-sheet.md**
4. Drag a vocal "Ah" into the Granulizer, hold a note, and turn "GR. SPACING" to the right to hear it slow down.

### For Sound Designers:
1. Study **audio-freezing-techniques.md**
2. Review **creating-ethereal-pads-from-noise.md**
3. Learn **reversed-grain-textures.md**

### For IDM/Glitch Producers:
1. Study **glitchy-rhythm-generation.md**
2. Review **random-grain-playback.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Grain section:** Attack (ATT), Hold (HOLD).
  - **Spacing:** Grain Spacing (Speed), Wave Spacing (Density).
  - **Time section:** Sample Start, Key-to-Sample mapping.
  - **FX:** LFO Speed/Depth and Stereo Pan.

- [ ] **grain-mechanics-visualized.md**
  - Diagram of overlapping grains.
  - How Spacing relates to Speed.

#### 02-Data/parameters/
- [ ] **granulizer-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Granulizer",
    "category": "Granular Synth",
    "controls": ["Grain Spacing", "Wave Spacing", "Randomness", "Pan Spread"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **the-infinite-freeze.md**
  - Setting "GR. SPACING" to a high value.
  - Finding a stable loop point.
  - Using high Attack/Hold for a smooth, "organ-like" sustain.

- [ ] **vocal-cloud-synthesis.md**
  - Loading a vocal phrase.
  - Increasing "PAN" spread.
  - Adding "RAND" (Randomness) to grain positions.
  - Result: A wide, shimmering vocal wash.

- [ ] **robotic-stutter-effects.md**
  - Setting "HOLD" to short values.
  - Using negative "WAVE SPACING" for backwards-traveling grains.

#### 03-Workflows/by-context/
- [ ] **ambient-soundscape-workflow.md**
- [ ] **experimental-percussion-morphing.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **granular-aliasing-and-artifacts.md**
  - Why short grains create "metallic" ringing.
  - How to use the internal filter (if applicable) or external EQ to tame it.

---

## 🔬 Research Framework

### Phase 1: The Grain (Week 1)
**Goal:** Pure Granular Tone

**Tasks:**
1. Load a simple Sine wave sample
2. Adjust "HOLD" and "ATT"
3. Notice how grains click vs swell
4. Practice "Wave Spacing" to change density
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- What happens when "WAVE SPACING" is negative? (Grains play in reverse order).
- How does "GR. SPACING" differ from the project BPM?

### Phase 2: Texture (Week 2)
**Goal:** Atmosphere

**Tasks:**
1. Load a busy field recording (Rain, City)
2. Use the "RAND" knob to smear the texture
3. Use the "PAN" knob to widen it
4. Create the-infinite-freeze.md

---

## 📊 Plugin Specifications to Document

### Engine
- Max Grain Polyphony
- Interpolation Type

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why does it sound like a robot? (Grains are too small or spacing is too uniform).
2. How to make it smooth? (Increase Attack and Overlap).

### Advanced Usage
1. How to use "Key-to-Sample" to play different parts of a vocal phrase across the keyboard?

---

## 🔗 Cross-Reference with Other Plugins

Fruity Granulizer is often used with:
- **Fruity Reverb 2** (Essential for smoothing granular artifacts)
- **Slicex** (For pre-slicing samples)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Granulizer/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── grain-mechanics-visualized.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── granulizer-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── the-infinite-freeze.md
│   │   └── vocal-cloud-synthesis.md
│
└── 04-Reference/
    └── granular-aliasing-and-artifacts.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Granulizer Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Granulizer.htm)
- [Fruity Granulizer Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Granulizer_tutorials.htm)
- [Fruity Granulizer Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+granulizer+tutorial)

### Community Resources
- [Fruity Granulizer Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+granulizer&restrict_sr=1)
- [Fruity Granulizer User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Granulizer Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Granular Synthesis Fundamentals" - Understanding granular processing
- "Time-Stretching Techniques" - Advanced time manipulation
- "Sound Design with Granular Synthesis" - Creative applications

### Advanced Techniques
- **Grain Control Mastery:** Understanding attack, hold, and spacing parameters
- **Time-Stretching:** Creating infinite sustain and time manipulation
- **Texture Creation:** Building complex textures from simple samples

---

## 📚 In-Depth Technical Analysis

### Granular Synthesis Architecture
Fruity Granulizer implements granular synthesis through a sophisticated engine:
- **Sample Segmentation:** Divides samples into tiny "grains" (typically 1-100ms)
- **Grain Playback:** Independently plays and positions each grain
- **Overlap Control:** Manages how grains overlap in time
- **Density Management:** Controls the number of grains playing simultaneously
- **Phase Coherence:** Maintains phase relationships between grains

### Grain Parameters
The core grain parameters control the fundamental synthesis behavior:

**Grain Attack (ATT):**
- Controls the fade-in time of each grain
- Short values create sharp, percussive grains
- Long values create smooth, swelling grains
- Affects the overall texture and character
- Critical for avoiding clicks and artifacts

**Grain Hold (HOLD):**
- Controls the duration of each grain
- Short values create staccato, percussive textures
- Long values create smooth, sustained textures
- Affects the harmonic content and sustain
- Works with spacing to determine grain density

**Grain Spacing:**
- Controls the time gap between consecutive grains
- Positive values: Forward grain playback
- Negative values: Reverse grain playback
- Zero: Maximum density (grains play immediately after each other)
- Affects the perceived speed and texture

### Wave Spacing Control
Wave Spacing determines how grains are distributed across the original sample:
- **Forward Distribution:** Grains move forward through the sample
- **Reverse Distribution:** Grains move backward through the sample
- **Random Distribution:** Grains are positioned randomly
- **Overlapping:** Controls how grains overlap in time
- **Density:** Affects the number of grains per time unit

### Stereo Processing
Granulizer features advanced stereo processing:
- **Pan Spread:** Distributes grains across the stereo field
- **Stereo Width:** Controls overall stereo image width
- **Phase Relationships:** Manages phase coherence between channels
- **Spatial Imaging:** Creates immersive spatial effects
- **Width Control:** Adjusts stereo field characteristics

### Modulation System
The internal modulation system includes:
- **LFO Control:** Modulates grain parameters
- **Speed Modulation:** Changes grain playback speed
- **Depth Control:** Amount of modulation applied
- **Waveform Selection:** Different LFO shapes
- **Sync Options:** Tempo synchronization capabilities

## 🎛️ Parameter Deep Dive

### Grain Controls
- **Grain Attack (ATT):** Controls the fade-in time of each grain
  - Range: 0-100% (typically)
  - Effect: Shorter = sharper, longer = smoother
  - Use for: Controlling grain texture and avoiding artifacts
  - Pro tip: Longer values create smoother, more ambient textures
- **Behavior:**
  - Short: Creates sharp, percussive grains
  - Medium: Balanced grain attack
  - Long: Creates smooth, swelling grains
  - Pro tip: Use longer values for ambient textures
- **Applications:**
  - Percussive textures: Short attack for sharp grains
  - Ambient textures: Long attack for smooth grains
  - Transition effects: Medium attack for balance
  - Sound design: Variable attack for texture
  - Pro tip: Combine with hold for texture control

### Grain Hold (HOLD)
- **Function:** Controls the duration of each grain
  - Range: 0-100% (typically)
  - Effect: Shorter = staccato, longer = sustained
  - Use for: Controlling grain sustain and harmonic content
  - Pro tip: Longer values create more harmonic content
- **Behavior:**
  - Short: Creates staccato, percussive textures
  - Medium: Balanced sustain
  - Long: Creates smooth, sustained textures
  - Pro tip: Works with spacing to determine grain density
- **Applications:**
  - Percussive effects: Short hold for staccato
  - Sustained textures: Long hold for smooth sounds
  - Transition effects: Variable hold for evolution
  - Sound design: Medium hold for balance
  - Pro tip: Use with spacing for texture control

### Grain Spacing
- **Function:** Controls the time gap between consecutive grains
  - Range: Negative to positive values
  - Effect: Determines playback speed and grain density
  - Use for: Controlling time-stretching and texture
  - Pro tip: Negative values create reverse playback
- **Behavior:**
  - Positive: Forward grain playback
  - Negative: Reverse grain playback
  - Zero: Maximum density
  - Pro tip: Affects perceived speed and texture
- **Applications:**
  - Time-stretching: Positive spacing for slowing down
  - Reverse effects: Negative spacing for reverse playback
  - Density control: Zero spacing for maximum density
  - Texture creation: Variable spacing for complexity
  - Pro tip: Use with wave spacing for complex textures

### Wave Spacing
- **Function:** Controls how grains are distributed across the sample
  - Range: Variable positive and negative values
  - Effect: Determines sample scanning direction and density
  - Use for: Controlling sample traversal and texture
  - Pro tip: Negative values scan sample in reverse
- **Behavior:**
  - Positive: Forward sample scanning
  - Negative: Reverse sample scanning
  - Zero: Stationary grain position
  - Pro tip: Creates different textural characteristics
- **Applications:**
  - Forward scanning: Positive values for normal playback
  - Reverse scanning: Negative values for reverse textures
  - Stationary: Zero values for frozen textures
  - Complex scanning: Variable values for evolving textures
  - Pro tip: Combine with grain spacing for complex effects

### Randomness Control
- **Function:** Adds randomness to grain positioning
  - Range: 0-100% (typically)
  - Effect: Creates unpredictable grain placement
  - Use for: Adding organic variation to textures
  - Pro tip: Higher values create more chaotic textures
- **Behavior:**
  - 0%: Predictable grain placement
  - Medium: Some variation in placement
  - 100%: Completely random grain placement
  - Pro tip: Creates organic, non-repetitive textures
- **Applications:**
  - Organic textures: Medium randomness for natural variation
  - Chaotic effects: High randomness for unpredictable textures
  - Smooth textures: Low randomness for controlled variation
  - Experimental: Maximum randomness for unique effects
  - Pro tip: Use with low values for subtle variation

### Pan Spread Control
- **Function:** Distributes grains across the stereo field
  - Range: 0-100% (typically)
  - Effect: Controls stereo width of the granular texture
  - Use for: Creating wide, immersive textures
  - Pro tip: Higher values create wider stereo images
- **Behavior:**
  - 0%: Mono grain placement
  - Medium: Moderate stereo distribution
  - 100%: Maximum stereo separation
  - Pro tip: Creates immersive spatial effects
- **Applications:**
  - Mono compatibility: Low spread for mono-safe processing
  - Stereo enhancement: Medium spread for width
  - Wide effects: High spread for maximum width
  - Spatial textures: Maximum spread for immersion
  - Pro tip: Use medium values for natural stereo imaging

## 🎼 Sound Design Applications

### Time-Stretching Applications
Using Granulizer for time manipulation:

**Infinite Sustain:**
- High grain spacing for frozen textures
- Long grain hold for sustained sounds
- Low randomness for smooth textures
- Creates organ-like sustained sounds
- Essential for ambient and atmospheric music

**Slow Motion Effects:**
- Positive grain spacing for time stretching
- Variable hold for texture control
- Creates dreamy, slowed-down effects
- Perfect for ambient and experimental music
- Essential for cinematic sound design

**Reverse Time Effects:**
- Negative grain spacing for reverse playback
- Creates backwards textures and effects
- Perfect for experimental and cinematic music
- Essential for unique time manipulation
- Useful for creative sound design

### Texture Creation
Using Granulizer for complex texture generation:

**Ambient Pads:**
- Long grain attack and hold
- High randomness for organic variation
- Wide pan spread for immersive width
- Creates evolving ambient textures
- Essential for ambient and cinematic music

**Vocal Textures:**
- Load vocal samples for processing
- High randomness for organic variation
- Wide pan spread for spaciousness
- Creates ethereal vocal textures
- Perfect for ambient and experimental music

**Percussive Textures:**
- Short grain attack and hold
- Low randomness for predictable patterns
- Creates rhythmic granular textures
- Perfect for experimental percussion
- Essential for glitch and IDM music

### Creative Applications
Using Granulizer for experimental sound design:

**Glitch Effects:**
- Short grain sizes for glitchy textures
- High randomness for unpredictable effects
- Variable spacing for rhythmic patterns
- Creates digital glitch effects
- Perfect for electronic and experimental music

**Spectral Processing:**
- Use with harmonic-rich samples
- Variable parameters for spectral manipulation
- Creates evolving spectral textures
- Perfect for ambient and experimental music
- Essential for spectral sound design

**Stutter Effects:**
- Short grain hold for staccato effects
- Variable spacing for rhythmic patterns
- Creates stutter and glitch effects
- Perfect for electronic and experimental music
- Essential for rhythmic sound design

## 🧪 Experimental Techniques

### Advanced Granular Applications
Creative uses of Granulizer's capabilities:

**Granular Synthesis:**
- Use with simple waveforms for synthesis
- Create evolving harmonic structures
- Combine with filtering for tone shaping
- Perfect for experimental synthesis
- Useful for creating unique textures

**Time-Freezing:**
- Maximum grain spacing for frozen textures
- Creates infinite sustain effects
- Perfect for ambient and cinematic music
- Essential for time manipulation
- Useful for atmospheric sound design

**Reverse Granulation:**
- Negative wave spacing for reverse effects
- Creates backwards textures and movement
- Perfect for experimental and cinematic music
- Essential for unique granular effects
- Useful for creative sound design

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- Automate grain parameters for evolving textures
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
- Combine with other processing units
- Create complex processing chains
- Perfect for advanced sound design
- Use for sophisticated processing

## 🎚️ Workflow Optimization

### Texture Creation Workflows
Efficient approaches to creating granular textures:

**Ambient Pad Creation:**
- Load harmonic-rich samples
- Set long grain attack and hold
- Use high randomness for organic variation
- Apply wide pan spread for width
- Essential for ambient music production

**Vocal Texture Creation:**
- Load vocal samples for processing
- Use medium grain parameters
- Apply high randomness for variation
- Use wide pan spread for spaciousness
- Perfect for ethereal vocal effects

**Percussive Texture Creation:**
- Load rhythmic samples for processing
- Use short grain parameters
- Apply low randomness for predictability
- Use for rhythmic granular effects
- Essential for experimental percussion

### Integration Workflows
Working with other plugins and tools:

**Synthesizer Integration:**
- Use with subtractive synthesizers
- Combine with wavetable synths for texture
- Integrate with physical modeling synths
- Work with sample-based synths for enhancement
- Optimize for different synthesis types

**Effects Integration:**
- Use before reverb for spatial effects
- Combine with delay for rhythmic patterns
- Integrate with chorus for width
- Work with filtering for tone shaping
- Optimize for effects chains

**Analysis Integration:**
- Use with spectrum analyzers for visual feedback
- Compare with reference tracks
- Use for corrective processing
- Combine with level meters for comprehensive analysis
- Integrate with other analytical tools

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Ambient Breaks:** Creating atmospheric textures
- **Build-up Effects:** Using granular time-stretching
- **Transition Effects:** Creating smooth transitions
- **Sound Design:** Creating unique textures and effects
- **Experimental Elements:** Adding glitch and texture

### Hip-Hop and R&B
- **Vocal Processing:** Creating ethereal vocal textures
- **Sample Manipulation:** Granular processing of samples
- **Atmospheric Elements:** Adding ambient textures
- **Creative Effects:** Adding unique character to elements
- **Transitions:** Creating smooth transitions

### Rock and Metal
- **Guitar Textures:** Creating ambient guitar textures
- **Bass Processing:** Adding character to bass lines
- **Drum Enhancement:** Adding texture to drums
- **Mix Enhancement:** Adding width to rock mixes
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Drone Creation:** Using granular synthesis for drones
- **Atmospheric Processing:** Creating evolving textures
- **Experimental Sounds:** Creating unique sonic signatures
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Granulizer works well with various effects:
- **Reverb:** Adding space to granular textures
- **Delay:** Creating rhythmic patterns with granular sounds
- **Chorus:** Adding width to granular textures
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of granular signals

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
Fruity Granulizer was developed as a specialized granular synthesis tool:
- Created to provide accessible granular synthesis
- Designed for time-stretching and texture creation
- Developed with sound design in mind
- Intended to complement traditional samplers

### Evolution Through FL Studio Versions
- Initially introduced with basic granular capabilities
- Enhanced with additional parameters and controls
- Improved with better sound quality and stability
- Expanded with more sophisticated algorithms

### Impact on Music Production
Fruity Granulizer has influenced music production by:
- Providing accessible granular synthesis
- Enabling creative time manipulation
- Facilitating texture creation workflows
- Supporting various musical genres with flexible processing

## 🧠 Advanced Processing Techniques

### Granular Synthesis Mastery
Advanced techniques for granular synthesis:
- **Grain Control:** Precise control over grain parameters
- **Texture Creation:** Creating complex textures from simple samples
- **Time Manipulation:** Advanced time-stretching techniques
- **Harmonic Control:** Managing harmonic content in grains
- **Spectral Processing:** Combining with spectral tools

### Time-Stretching Techniques
Advanced time manipulation techniques:
- **Infinite Sustain:** Creating sustained textures
- **Reverse Time:** Creating backwards effects
- **Rhythmic Stretching:** Creating rhythmic time effects
- **Smooth Transitions:** Creating seamless time changes
- **Density Control:** Managing grain density for quality

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique granular textures
- **Atmospheric Processing:** Building ambient soundscapes
- **Rhythmic Effects:** Creating rhythmic granular patterns
- **Spatial Manipulation:** Creating immersive environments
- **Experimental Processing:** Pushing boundaries of granular synthesis

## 📊 Performance Considerations

### CPU Usage
Managing Granulizer's impact on system performance:
- **Grain Density:** Higher density increases CPU usage
- **Real-Time Performance:** Generally optimized for live performance
- **Instance Count:** Multiple instances multiply CPU usage
- **Parameter Automation:** Automated parameters may increase CPU usage
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Grain Artifacts:** Managing clicks and pops
- **Aliasing Prevention:** Avoiding digital artifacts
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output
- **Signal Integrity:** Preserving original signal quality

### System Integration
Optimizing Granulizer within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimizing audio latency

## 🛠️ Troubleshooting Common Issues

### Granular Problems
- **Clicking/Popping:** Increase grain attack or reduce hold
- **Harsh Textures:** Adjust randomness or spacing parameters
- **Phase Issues:** Check stereo field and width settings
- **Excessive Density:** Reduce grain spacing or increase hold
- **Loss of Clarity:** Adjust grain parameters or use filtering

### Technical Issues
- **High CPU Usage:** Reduce grain density or optimize parameters
- **Latency Issues:** Optimize buffer settings
- **Clipping:** Reduce input gain or increase output headroom
- **Artifacts:** Check sample rate and bit depth settings
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Adjust grain parameters for better results
- **Lack of Character:** Increase randomness or adjust spacing
- **Poor Integration:** Use EQ or reduce amount to blend
- **Overpowering:** Reduce randomness or use EQ to balance
- **Lack of Control:** Automate parameters for dynamic changes

## 🎚️ Advanced Configuration

### Custom Presets
Creating and managing custom configurations:
- **Ambient Presets:** Optimized for ambient texture applications
- **Vocal Presets:** Configured for vocal processing applications
- **Percussive Presets:** Set up for rhythmic granular applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple Granulizer instances effectively:
- **Sample-Specific:** Different instances for different samples
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
- **FL Studio Forums:** Discussions about Granulizer techniques
- **Reddit Groups:** Sharing granular techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced granular techniques
- **Written Guides:** In-depth articles on granular synthesis
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting Granulizer configurations
- **Technique Sharing:** Platforms for sharing processing methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Transform a 1-second sample into a 60-second smooth ambient pad
- [ ] Explain the difference between Grain Spacing and Wave Spacing
- [ ] Create a "Robotic" talking texture using small grain sizes
- [ ] Demonstrate "Reverse Granular" playback with negative wave spacing
- [ ] Use Granulizer for time-stretching without artifacts
- [ ] Create complex textures using randomness and pan spread
- [ ] Troubleshoot grain artifacts and density issues effectively
- [ ] Integrate Granulizer into efficient sound design workflows
- [ ] Create evolving textures using parameter automation
- [ ] Optimize grain parameters for performance vs quality balance
- [ ] Create an infinite sustain effect using grain spacing
- [ ] Generate a "vocal cloud" texture with randomized grains
- [ ] Set up a granular freeze effect that holds indefinitely
- [ ] Create glitchy stutter effects using short grain parameters
- [ ] Apply appropriate grain settings for different musical genres
- [ ] Use the internal LFO for dynamic granular modulation
- [ ] Demonstrate Mid/Side processing with granular synthesis
- [ ] Create complex granular textures using multiple parameters
- [ ] Design custom granular patches for specific sound design needs
- [ ] Optimize granular settings for minimal CPU usage
- [ ] Use Granulizer for creative sound design applications
- [ ] Set up advanced granular routing for complex projects
- [ ] Apply Granulizer in live performance scenarios
- [ ] Create experimental granular effects with extreme settings
- [ ] Combine Granulizer with other effects for layered processing
- [ ] Integrate Granulizer with other automation tools seamlessly
- [ ] Create custom granular workflows for specific creative needs
- [ ] Use Granulizer effectively in large, complex projects
- [ ] Generate complex rhythmic patterns with granular synthesis
- [ ] Create hybrid granular-synthetic textures

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Granulizer

## Purpose & Identity
Fruity Granulizer is a specialized **Granular Sampler**. Its primary identity is a texture-generation engine. Instead of playing back a sample normally, it breaks the audio into thousands of tiny pieces called "grains." By replaying, overlapping, and staggering these grains, Granulizer can "freeze" time, change pitch without affecting speed, and create ethereal clouds of sound. [SRC: IL-MAN]

## 60-Second Mental Model
Imagine a photograph. A standard sampler plays the whole photo. Granulizer cuts the photo into tiny confetti-sized squares. It then throws the confetti into the air and lets you control how fast it falls, which direction it blows, and how much it overlaps. You can make a 1-second vocal "Ah" last for an eternity.

## Hip-Hop / R&B Context
- **Vocal Clouds:** Turning a single word from a vocal take into a wide, shimmering background pad (Spacey).
- **Glitchy Hats:** Using short grain sizes to turn a hi-hat sample into a robotic, stuttering texture (Upbeat).
- **Ambient Outros:** Stretching the final chord of a beat into an infinite, drifting atmosphere (Vibey).

## When To Use
- When you want to **time-stretch** a sample to extreme lengths (1% speed).
- When you need a **ghostly or ethereal** texture.
- When you want to create **glitchy, robotic artifacts** intentionally.

## When NOT To Use
- **Pristine Sampling:** If you want a sample to sound exactly like the original, use the standard **Fruity Sampler**.
- **Real-time Performance:** Granulizer can have a small "startup" lag as it fills its grain buffer. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Granulizer

## UI Tour
The interface is divided into sample properties, grain engine settings, and modulation. [SRC: IL-MAN]

### 1. Grain Engine (The "Confetti")
- **ATT (Grain Attack)**: Fades each grain in. High values create smooth washes; low values create clicks.
- **HOLD (Grain Hold)**: The length of each individual grain.
- **G.SPACING (Grain Spacing)**: How often a new grain is spawned. This effectively controls the "speed" of the playback.

### 2. Wave Engine (The "Flow")
- **W.SPACING (Wave Spacing)**: Controls where the next grain is pulled from in the sample. 
  - *Positive*: Forward flow.
  - *Zero*: Frozen at one spot.
  - *Negative*: Reversed flow.

### 3. Mod & FX (The "Chaos")
- **RAND (Randomness)**: Randomizes the starting position of each grain.
- **PAN (Pan Spread)**: Randomly pans each grain across the stereo field.
- **LFO Section**: Automates the wave spacing for vibrato or rhythmic patterns.

## Signal Flow
1. **Sample Load**: Audio file is loaded into the buffer.
2. **Grain Slicing**: The engine identifies a window of audio based on **HOLD**.
3. **Envelope Application**: Each grain is shaped by the **ATT** (Attack) curve.
4. **Spatial Positioning**: Grains are panned based on the **PAN** setting.
5. **Traversal**: The engine moves through the sample based on **W.SPACING**.
6. **Summing**: Multiple overlapping grains (polyphony) are mixed into the output.

## Things Beginners Misunderstand
- **"It sounds like a robot"**: This happens when grains are too short and spacing is too regular. Increase **ATT** and **RAND** to "humanize" the grain cloud.
- **Polyphony**: Granulizer can play many grains at once. If your CPU is spiking, lower the grain density by increasing **G.SPACING**.
- **W.SPACING vs G.SPACING**: Spacing is *how often* a grain is triggered; Wave Spacing is *where* the engine looks for the next grain.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Granulizer

## 1. The "Infinite Cloud" (Audio Freezing)
Set **W.SPACING** to 0 and **G.SPACING** to a low value.
- **Technique**: Use a long **ATT** (50%+) and a long **HOLD**.
- **Listen For**: A smooth, never-ending sustain of whatever millisecond of audio the cursor is currently touching.

## 2. Reversed Grain Swirl
Set **W.SPACING** to a negative value.
- **Technique**: This makes the grains play in reverse order, but the individual grains themselves still play forward.
- **Listen For**: A "sucking" or "rising" texture that is perfect for psychedelic transitions.

## 3. The "Spectral Smear"
Crank the **RAND** (Randomness) knob to 100%.
- **Technique**: Use this on a busy sample like a city street or a drum loop.
- **Listen For**: The recognizable rhythms disappear and turn into a "texture cloud" or "wall of sound."

## 4. Key-to-Sample Mapping
In the "Time" tab, adjust the **START** position while holding different keys.
- **Technique**: You can make the Piano Roll play different parts of a vocal sample depending on the MIDI note.
- **Benefit**: "Performing" a sample across the keys.

## 5. Mono-Check and Phase
- **Protocol**: High **PAN** spread settings create massive width but can vanish in mono.
- **Fix**: Check Mono. If the sound thins out too much, lower the **PAN** knob until the "core" of the grain is audible in the center. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Metallic Ringing** | Increase **ATT** or use a Low-Pass filter to remove aliasing. |
| **Losing the Beat** | Sync **G.SPACING** manually to your project tempo. |
| **Clicks and Pops** | Increase **ATT** (Attack) to smooth the grain edges. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Granulizer

Granulizer translates vibes through **Temporal Manipulation** and **Spectral Smearing**.

## 1. Spacey (Galactic, Infinite, Weightless)
- **Concept:** "The Infinite Freeze."
- **Levers:**
  - **Grain Spacing:** Set to maximum (Clockwise).
  - **Hold:** High (50%+).
  - **Attack:** High (ensure smooth crossfades).
- **Listen For:** The audio "stopping" in time but continuing to shimmer. It sounds like being frozen in a nebula.

## 2. Psychedelic (Backwards, Warped, Liquid)
- **Concept:** "Reverse Grain Flow."
- **Levers:**
  - **Wave Spacing:** Negative (Counter-clockwise).
  - **Randomness:** Medium (30%).
- **Listen For:** The sample playing "backwards" grain-by-grain, creating a sucking, surreal texture that feels physically impossible.

## 3. Upbeat (Glitchy, Robotic, Kinetic)
- **Concept:** "The Digital Stutter."
- **Levers:**
  - **Hold:** Very short (10-20ms).
  - **Attack:** Zero (to encourage clicking).
  - **Speed:** High.
- **Listen For:** Metallic, high-speed repetitions that sound like a computer glitching in time with the beat.

## 4. Vibey (Lush, Shimmering, Polished)
- **Concept:** "The Vocal Halo."
- **Levers:**
  - **Pan Spread:** Maximum (100%).
  - **Randomness:** High (70%+).
  - **Sample:** A smooth R&B vocal "Ooh."
- **Listen For:** A wide, airy wash of sound where you can no longer hear the individual words, only the "vibe" of the voice.

## 5. Moody (Dark, Distant, Submerged)
- **Concept:** "The Grainy Shadow."
- **Levers:**
  - **Sample Start:** Set to a quiet part of the sample.
  - **LFO Depth:** Low.
  - **Post-Filter:** Low Pass @ 500Hz.
- **Listen For:** A muffled, crackling atmosphere that feels like a dusty old record being stretched. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\grain-envelopes.md

```markdown
# Grain Envelopes Explained

The shape of the individual grain is crucial for the texture.

## Attack and Decay
- **Sharp Attack/Decay**: Creates a buzzing, "zipper" noise. Good for aggressive bass or leads.
- **Slow Attack/Decay**: Creates a blurred, smooth, "cloud-like" texture. Essential for pads.

## Hold
- Determines how long the grain stays at full volume before decaying.
- **Short Hold**: Staccato grains.
- **Long Hold**: Overlapping grains (smearing).

## Randomness
- Granulizer allows you to randomize the **Stereo Pan** of each grain.
- **Workflow**: Turn up the stereo randomness to make a mono vocal sample sound incredibly wide and immersive.

```

---

## FILE: 01-Learning\Concepts\granular-basics.md

```markdown
# Granular Synthesis Basics

Fruity Granulizer breaks audio into tiny pieces called "grains."

## Core Parameters
- **Grain Spacing**: Determines how often a new grain is generated. Lower values = smoother sound, higher values = more "buzz" or stutter.
- **Wave Spacing**: Controls the playback speed of the grains relative to the original sample.
- **Attack/Hold/Decay**: This is the envelope *per grain*, not for the whole sound. Adjusting this changes the texture from "clicking" (fast attack/decay) to "smooth" (slow attack/decay).

## The "Transient" Loop
Granulizer is often better than a standard sampler for loops because it can stretch the loop to fit the tempo (using the 'Fit' option) while allowing you to completely deconstruct the texture of the sound without changing the pitch.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Granulizer (5 Minutes)

1.  **Load:** Drag a vocal or piano sample into the **Fruity Granulizer** window.
2.  **Play:** Hold a MIDI note. It will likely sound like a choppy version of the original.
3.  **Smooth:** Increase the **Grain Attack (ATT)** and **Hold** until the "clicks" disappear.
4.  **Stretch:** Turn the **Grain Spacing** knob to the right. The sample will slow down significantly without changing pitch.
5.  **Widen:** Turn the **Pan Spread** knob to the right to fill the stereo field.
6.  **Tip:** Use the **Sample Start** knob to "scan" through different parts of the audio while playing. [SRC: IL-MAN]
```

---

## FILE: 01-Learning\Quick-Reference\grain-mechanics-visualized.md

```markdown
# Quick Reference: Grain Mechanics Visualized

Understanding the "Guts" of the Granulizer engine. [SRC: IL-MAN]

## 1. What is a Grain?
A grain is a tiny "window" into your audio.
- `[---Audio Sample---]`
- `   [Grain 1]`
- `      [Grain 2]`
- `         [Grain 3]`

## 2. Attack (ATT) vs. Hold (HOLD)
- **HOLD**: The width of the window. `[HOLD]`
- **ATT**: The "curtain" at the edges of the window.
  - `0% ATT`: `[#######]` (Sharp edges = Clicks)
  - `50% ATT`: `[/#####\]` (Smoothed edges = Lush)

## 3. Wave Spacing (W.SPACING)
The "Step Size" between the start of Grain 1 and Grain 2.
- **Positive**: `G1 -> G2 -> G3` (Forward)
- **Zero**: `G1, G1, G1` (Frozen in place)
- **Negative**: `G3 -> G2 -> G1` (Backward)

## 4. Grain Spacing (G.SPACING)
The "Spawn Rate" of new grains.
- **Low Values**: Grains are triggered rapidly (creates a smooth, dense "Cloud").
- **High Values**: Grains are triggered slowly (creates distinct rhythmic "Steps").

## 5. Density vs. CPU
- Higher density (Low G.SPACING + Long HOLD) = **High CPU**.
- Lower density (High G.SPACING + Short HOLD) = **Low CPU**.

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Granulizer

| Parameter | Type | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Grain ATT** | Knob | **Vibey** (Soft) | **Transient** | Fade-in time of each grain. |
| **Grain HOLD**| Knob | **Spacey** (Long) | **Sustain** | Duration of each grain. |
| **G. Spacing** | Knob | **Spacey** (Speed) | **Timing** | Speed of grain playback. |
| **W. Spacing** | Knob | **Psychedelic** | **Density** | Direction/Density of sample scanning. |
| **Pan Spread** | Knob | **Spacey** (Width) | **Width** | Stereo distribution of grains. |
| **Randomness** | Knob | **Vibey** (Organic) | **Clarity** | Jitter in grain positioning. |

- **Vibe Impact Tag (Spacey):** Extreme Grain Spacing "freezes" audio, creating infinite celestial sustains.
- **Mix Impact Tag (Clarity):** Short ATT/HOLD settings cause "Metallic" ringing (aliasing). [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\granulizer-params.json

```json
{
  "plugin_name": "Fruity Granulizer",
  "category": "Granular Synth",
  "parameters": [
    {
      "name": "ATT",
      "type": "knob",
      "description": "Grain Attack - Fades the grain in and out.",
      "vibe_impact": "Smoothness, silk, ethereal",
      "mix_impact_tags": ["transient", "artifact"]
    },
    {
      "name": "HOLD",
      "type": "knob",
      "description": "Grain Hold - The duration of each grain.",
      "vibe_impact": "Body, weight, harmonic focus",
      "mix_impact_tags": ["depth", "loudness"]
    },
    {
      "name": "G.SPACING",
      "type": "knob",
      "description": "Grain Spacing - The spawn rate of new grains.",
      "vibe_impact": "Rhythm, jitter, energy",
      "mix_impact_tags": ["motion", "rhythm"]
    },
    {
      "name": "W.SPACING",
      "type": "knob",
      "description": "Wave Spacing - Traversal speed through the sample.",
      "vibe_impact": "Time warpage, reverse, freeze",
      "mix_impact_tags": ["motion", "direction"]
    },
    {
      "name": "RAND",
      "type": "knob",
      "description": "Randomness - Randomizes grain start position.",
      "vibe_impact": "Chaos, trippy, organic",
      "mix_impact_tags": ["depth", "width"]
    },
    {
      "name": "PAN",
      "type": "knob",
      "description": "Pan Spread - Randomly pans grains.",
      "vibe_impact": "Width, immersion, vibe",
      "mix_impact_tags": ["width", "stereo"]
    }
  ]
}

```

---

## FILE: 02-Data\presets\ambient-cloud.json

```json
{
  "presetName": "Ambient Cloud",
  "plugin": "Fruity Granulizer",
  "description": "Smears the sample into a seamless pad.",
  "settings": {
    "grainSpacing": 30,
    "waveSpacing": 0,
    "attack": 50,
    "release": 50,
    "hold": 0
  },
  "usage": "Turn any short sample (like a bell or pluck) into an infinite drone."
}

```

---

## FILE: 02-Data\presets\stutter-bass.json

```json
{
  "presetName": "Stutter Bass",
  "plugin": "Fruity Granulizer",
  "description": "Aggressive, fast-retriggering bass texture.",
  "settings": {
    "grainSpacing": 20,
    "waveSpacing": 0,
    "attack": 0,
    "hold": 10
  },
  "usage": "Use with a saw wave sample for Neuro-style bass movement."
}

```

---

## FILE: 02-Data\presets\vocal-chops.json

```json
{
  "presetName": "Vocal Chops",
  "plugin": "Fruity Granulizer",
  "description": "Stuttery, glitchy vocal settings.",
  "settings": {
    "grainSpacing": 80,
    "waveSpacing": 100,
    "attack": 5,
    "hold": 0,
    "loop": true
  },
  "usage": "Load a vocal sample and play chords to create a choppy texture."
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Granulizer)

## 1. Low-End Discipline
- **Rule:** Never granulate a full-frequency loop.
- **Application:** Use an EQ *before* Granulizer to remove everything below 200Hz. Granular synthesis creates unpredictable phase relationships that will destroy your Kick and 808 if not filtered. [SRC: REPUTABLE]

## 2. Smoothness over Artifacts
- **Rule:** For R&B "Clouds," grains must overlap.
- **Application:** Ensure your **HOLD** time is at least 2x your **Grain Spacing**. This ensures that at least two grains are playing at once, preventing "holes" or silence in the sound.

## 3. Mono Compatibility
- **Rule:** Max Pan Spread can disappear in Mono.
- **Check:** Switch to Mono. If your "Spacey" texture loses 50% of its volume, reduce the **Pan Spread** or add a centered "Dry" layer.

## 4. Key-to-Sample Alignment
- **Rule:** Respect the key of the song.
- **Application:** Granulizer pitch-shifts the sample based on the note you play. Ensure your root sample is tuned to C before playing melodic patterns.

## 5. Resample & Treat
- **Rule:** Granulizer is an "Inspiration Generator."
- **Application:** Don't leave Granulizer running "live." Once you find a "Vibey" texture, record it into **Edison** and use it as a static audio clip to save CPU and ensure consistency. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\key-mapping-pitch.md

```markdown
# Key Mapping for Pitch

By default, Granulizer changes speed when you change pitch (like a tape). To fix this:

1. Go to **SMP** tab.
2. Right-click **Pitch** knob -> **Reset**.
3. In Granulizer parameters, set **Wave Spacing** to 100%.
4. **Result**: Now, playing higher notes changes the pitch of the grains but NOT the speed of the sample playback. This is "Time Stretching" in real-time.

```

---

## FILE: 03-Workflows\legacy-time-stretch.md

```markdown
# Legacy Time Stretching

Before audio clips had advanced time-stretching algorithms (e3 generic, etc.), Granulizer was the king of tempo matching.

## The Workflow
1. Load a vocal loop that is 100bpm.
2. Your project is 128bpm.
3. Open Granulizer.
4. Right-click the **Root Key** on the piano keyboard (C5) and select "Autodetect".
5. OR simply use the **Time Stretching** knobs (Pitch/Mul) on the SMP tab, but Granulizer offers a texture that standard stretching doesn't.
6. **Key Feature**: Turn the **Wave Spacing** to 100%. This locks the playback speed to the original sample speed. If you lower it, the sample plays slower *without* changing pitch (if Grain Spacing is set correctly).

## The "Freeze" Effect
1. Set **Wave Spacing** to 0%.
2. Now the sample is frozen at the **Start** point.
3. Automate the **Start** knob to scrub through the audio manually.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: The "Vocal Cloud" (Fruity Granulizer)

## Routing Context
- **Target:** A single sustained vocal note (e.g., a "Hey" or "Ooh").
- **Position:** Parallel Send (Wet 100%) followed by a massive Reverb.

## Step-by-Step Setup
1.  Drag your vocal sample into **Fruity Granulizer**.
2.  Set **Grain ATT** to `40%` and **Grain HOLD** to `60%`.
3.  Set **Grain Spacing** to `80%` (to slow it down).
4.  Set **Pan Spread** to `100%`.
5.  Set **Randomness** to `50%`.
6.  **The Result:** The vocal is transformed into a wide, shimmering "cloud" where you can still hear the texture of the voice but no recognizable words.

## Vibe Check
- **Vibey/Spacey:** This is the foundational texture for high-end ambient R&B (think PARTYNEXTDOOR or 6LACK).

## Automation Idea
- Automate the **Wave Spacing** from positive to negative during a bridge to make the "Cloud" feel like it's reversing into itself. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\12_Vibe_Psychedelic.md

```markdown
# Vibe Workflow: Psychedelic (Re-Chop Melt)

*Goal: Create a disorienting, melting sonic landscape that evolves unpredictably.*

## 🎛️ Routing Context
- **Routing**: Vocal phrase or Melodic sample -> Fruity Granulizer.
- **Mix Status**: 100% Wet.

## 🚶 Step-by-Step Setup
1. **Initialize**: Set **W.SPACING** to -20% (Slow reverse traversal).
2. **Thickness**: Set **HOLD** to 60%. **ATT** to 40%.
3. **Chaos**: Crank **RAND** to 100%. Set **PAN** to 100%.
4. **Modulation**: Automate **G.SPACING** using a random LFO so the grain density changes constantly.
5. **Recording**: Arm your mixer and record 8 bars of this "melted" audio.
6. **The Re-Chop**: Take the recorded audio, slice it into random 1/4 note segments, and reverse every second segment.
7. **Mono Check**: Toggle Mono. Ensure the wide grains still have enough center energy to be heard.

## 🔄 Variations
- **The "Data-Mosh"**: Set **HOLD** to 5% and **ATT** to 0%. The sound will turn into digital static.
- **The "Pitch-Glitch"**: Automate the **Pitch** knob in the Granulizer during the recording.

## ⚠️ Pitfalls & Fixes
- **Problem**: CPU Overload.
- **Fix**: Increase **G.SPACING** (Slow down grain spawning) or reduce the number of active MIDI notes.

```

---

## FILE: 03-Workflows\by-goal\14_Vibe_Vibey.md

```markdown
# Vibe Workflow: Vibey (Silky Vocal Halo)

*Goal: Add a luxurious, wide, and expensive-sounding atmosphere to a dry vocal.*

## 🎛️ Routing Context
- **Routing**: Lead Vocal -> Send Track (Fruity Granulizer) -> Reverb.
- **Mix Status**: 100% Wet on the Send.

## 🚶 Step-by-Step Setup
1. **Source**: Load a 1-bar snippet of the lead vocal into the Granulizer.
2. **Smoothness**: Set **ATT** to 80% (Long fades). Set **HOLD** to 50%.
3. **Density**: Set **G.SPACING** to 10% (Very fast triggers).
4. **Width**: Set **PAN** to 80%. **RAND** to 30% (Organic drift).
5. **Slow Movement**: Set **W.SPACING** to 5% (Barely moving through the sample).
6. **Integration**: Blend the Send fader until the vocal feels like it has a shimmering "halo."
7. **Mono Check**: Ensure the halo doesn't thin out the main vocal when summed to mono.

## 🔄 Variations
- **The "High-End Cloud"**: High-Pass the send track at 5kHz so you only flange/granulate the "air."
- **The "Resampled Pad"**: Record this halo to audio and use it as a separate pad instrument.

## ⚠️ Pitfalls & Fixes
- **Problem**: The grains are too "jittery."
- **Fix**: Increase **ATT** and reduce **RAND**.

```

---

## FILE: 03-Workflows\by-instrument\pads.md

```markdown
# Instrument: Pads (From Anything)

How to turn any noise into a pad.

1. Load a sample of a spoken word or a foley sound (like keys jingling).
2. Set **Attack** and **Release** to 50%.
3. Set **Grain Spacing** low (20-40ms).
4. Automate the **Sample Start** knob.
5. **Result**: A spectral wash that retains the tonal characteristics of the original sound but loses all rhythmic context.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Granulizer

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Granulizer.
- **Key Info:** Grain spacing vs Wave spacing definitions, LFO modulation targets, and internal sampler mapping logic.

## Source ID: [SRC: REPUTABLE]
- **Source:** Curtis Roads - "Microsound" (MIT Press).
- **Key Info:** Foundations of granular synthesis, how grain duration affects perceived pitch and timbre, and the importance of envelope shaping (Attack/Release) for avoiding digital clicks.

## Genre Style Board: Fruity Granulizer

| Vibe | Key Move | Application |
| :--- | :--- | :--- |
| **Spacey** | Max G. Spacing (Freeze) | Infinite Pads |
| **Psychedelic**| Negative W. Spacing | Reverse Textures |
| **Upbeat** | Short Hold + High Speed | Glitch Percussion |
| **Vibey** | Max Pan + Max Rand | Vocal Halos |
| **Moody** | 500Hz LPF + Stretched | Dusty Atmospheres |

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Granular Synthesis)

Sourced applications of granular textures in Hip-Hop, Rap, and R&B.

## 1. Cloud Rap / Ethereal Trap
- **Source**: Clams Casino / Mike Dean.
- **Application**: Granulating melodic vocal samples or string loops with high Attack and pan spread.
- **Goal**: Creating a sense of vast, ungraspable space and "immersion."

## 2. Dark Alternative R&B
- **Source**: The Weeknd / Arca / PARTYNEXTDOOR.
- **Application**: "Freezing" a vocal or piano and automating the Sample Start point.
- **Goal**: Haunting, static drones that feel cold and digital.

## 3. IDM-Infused Hip-Hop
- **Source**: Flying Lotus / J Dilla (Donuts-era).
- **Application**: Rhythmic grain stuttering on drum breaks or vocal chops.
- **Goal**: "Glitchy" energy and unexpected sonic artifacts.

## 4. Modern Lo-Fi / Chillhop
- **Source**: ChilledCow aesthetics.
- **Application**: Using `RAND` and `PAN` on natural field recordings (Rain, Vinyl Crackle).
- **Goal**: Adding a "shimmering" or "breathing" life to static noise floors.

```

---

## FILE: 04-Reference\granular-aliasing-and-artifacts.md

```markdown
# Technical Reference: Granular Aliasing and Artifacts

Understanding the "Digital Dirt" of Fruity Granulizer. [SRC: REPUTABLE]

## 1. Why the "Metallic Ring"?
When grain sizes (**HOLD**) are very small (<10ms), the frequency of the grain onset becomes audible. This creates a "robotic" metallic pitch that isn't in the original sample.
- **Problem**: This ringing can sound harsh and "unmusical."
- **Fix**: Increase **ATT** (Attack) to smooth the edges or increase **HOLD** to move the resonance below the audible range.

## 2. Rhythmic Phasing
If **G.SPACING** is perfectly regular and multiple grains overlap, they can "phase" into each other, causing specific frequencies to boost or cut.
- **Fix**: Add a tiny bit of **RAND** (Randomness) to "blur" the phase relationship between grains.

## 3. Transient Smearing
Granulizers struggle with sharp transients (Kicks, Snares). Because grains are triggered based on a clock, the exact "snap" of a drum hit might get split between two grains.
- **Constraint**: If you need to keep drum hits sharp, do not use granular processing directly on them. Use it on the *tail* or *reverb* of the drums instead.

## 4. Low-End Protection
- **Rule**: Never use high **PAN** spread on sub-bass frequencies within a sample.
- **Move**: Use a High-Pass Filter before the Granulizer to ensure only the mid/high frequencies are being "scattered" across the stereo field. Keep your bass mono and solid.
- **Verification**: Press the "Mono" button on your mixer. If the sound disappears, your granular low-end is out of phase.

```

---

