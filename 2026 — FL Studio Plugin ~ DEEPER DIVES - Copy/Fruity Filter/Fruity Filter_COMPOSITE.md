# Fruity Filter - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: CLAUDE.md

```markdown
# Fruity Filter - Project Brief & Guidelines

## Plugin Overview
Fruity Filter is FL Studio's advanced multi-mode filtering plugin offering comprehensive filter types and processing modes. It provides professional-grade filtering with musical character, creative flexibility, and precise control for all filtering applications.

## Core Architecture & Capabilities
- **Multi-Mode Filtering**: Low-pass, high-pass, band-pass, notch, band-reject
- **Filter Types**: 12dB and 24dB slopes, multiple resonance characteristics
- **Advanced Control**: Cutoff frequency, resonance/Q, drive, and saturation
- **Creative Processing**: Distortion, saturation, and harmonic generation
- **Real-Time Performance**: Zero-latency filtering optimized for live use
- **Visual Feedback**: Frequency analysis and filter response display

## Key Applications
- **Creative Filtering**: Sound design, textural creation, special effects
- **Mix Shaping**: Frequency control, problem solving, enhancement
- **Synthesis**: Filtering oscillators, creating complex timbres
- **Sound Design**: Cinematic effects, environmental creation
- **Live Performance**: Real-time filter manipulation and expression
- **Educational**: Teaching filter theory and audio processing

## Primary Controls Overview
- **Filter Type**: Selection of filtering mode (LP, HP, BP, Notch, etc.)
- **Cutoff Frequency**: Filter frequency point (20Hz-20kHz)
- **Resonance**: Q control and frequency emphasis (0-100%)
- **Slope**: Filter steepness (12dB, 24dB per octave)
- **Drive**: Saturation and distortion amount (0-100%)
- **Mix**: Dry/wet blend (0-100%)
- **Output**: Level compensation (-12dB to +12dB)

## Technical Foundations
- **Multi-Filter Design**: Multiple filter algorithms in single interface
- **Musical Resonance**: Emphasis without instability or oscillation
- **Saturation Circuit**: Analog-style harmonic generation
- **Frequency Precision**: High-resolution cutoff and resonance control
- **Performance Optimization**: Efficient algorithms for real-time use

## Target User Scenarios
1. **Electronic Producers**: Synth filtering, sound design
2. **Mix Engineers**: Creative filtering, problem solving
3. **Sound Designers**: Special effects, textural creation
4. **Live Performers**: Real-time filter expression
5. **Educators**: Teaching filter concepts and techniques
6. **Experimental Artists**: Advanced filter manipulation

## Documentation Strategy
This plugin requires comprehensive documentation covering:
- **Filter Theory**: Understanding different filter types and applications
- **Creative Applications**: Beyond basic filtering uses
- **Mode-Specific Techniques**: LP, HP, BP, Notch, etc. applications
- **Sound Design**: Creating special effects and textures
- **Performance Techniques**: Real-time control and expression
- **Advanced Concepts**: Complex filtering and creative processing

## Workflow Emphasis
- **Creative Exploration**: Encouraging experimentation and discovery
- **Technical Mastery**: Deep understanding of filter characteristics
- **Artistic Application**: Using filtering for creative purposes
- **Performance Readiness**: Real-time control and expression
- **Integration Focus**: Working with other FL Studio tools

## Educational Value
Fruity Filter serves as excellent learning tool for:
- Filter theory and characteristics
- Different filter type behaviors
- Creative audio processing
- Sound design principles
- Performance techniques
- Advanced audio concepts

## Professional Standards
- **Industry Practices**: Following professional filter conventions
- **Quality Control**: Maintaining audio fidelity during processing
- **Creative Innovation**: Pushing filtering boundaries
- **Workflow Efficiency**: Streamlined creative processes
- **Artistic Expression**: Using filters for musical and creative purposes

## Technical Considerations
- **Phase Coherence**: Maintaining proper phase relationships
- **Filter Stability**: Preventing oscillation and distortion
- **Frequency Accuracy**: Precise control across all parameters
- **Gain Management**: Proper level compensation
- **CPU Efficiency**: Optimized algorithms for performance

This plugin represents FL Studio's commitment to advanced filtering tools and should be documented to provide both practical guidance and deep understanding of multi-mode filtering for users at all skill levels.
```

---

## FILE: README.md

```markdown
# Fruity Filter - State Variable Filter

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ███████╗██╗██╗  ████████╗███████╗██████╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔════╝██║██║  ╚══██╔══╝██╔════╝██╔══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     █████╗  ██║██║     ██║   █████╗  ██████╔╝
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██╔══╝  ██║██║     ██║   ██╔══╝  ██╔══██╗
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██║     ██║███████╗██║   ███████╗██║  ██║
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═╝     ╚═╝╚══════╝╚═╝   ╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** State Variable Filter
**Category:** Filter / Tone Shaping
**Official Manual:** [Image-Line Fruity Filter Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Filter.htm)

---

## 🎯 What is Fruity Filter?

Fruity Filter is FL Studio's legacy state-variable filter plugin. While similar to Fruity Free Filter, it offers distinct characteristics, including an **X2 Oversampling** option for higher quality, a **Center** offset (DC removal), and slightly different resonance behavior. It is a workhorse for standard filtering tasks where character is preferred over surgical precision.

**Key Capabilities:**
- **Standard Filter Types:** Low Pass, High Pass, Band Pass.
- **Resonance (Res):** Adds emphasis at the cutoff frequency.
- **Oversampling (2x):** Improves audio quality by reducing aliasing during fast modulation.
- **Lightweight:** Extremely low CPU footprint.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **free-filter-vs-fruity-filter.md**
3. Create **parameter-cheat-sheet.md**
4. Test the difference between 2x Oversampling ON and OFF with high resonance.

### For Sound Designers:
1. Study **resonant-sweeps.md**
2. Review **noise-filtering.md** (Creating wind/ocean FX)
3. Learn **lo-fi-telephone-eq.md** (Using Band Pass)

### For Mix Engineers:
1. Study **mix-cleanup.md**
2. Review **dc-offset-removal.md** (Using the "Center" knob?)

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Cutoff:** Frequency point.
  - **Res (Resonance):** Peak emphasis.
  - **Type:** LP, HP, BP.
  - **2x:** Oversampling switch.

- [ ] **free-filter-vs-fruity-filter.md**
  - **Free Filter:** More types (Shelf, Notch), newer algorithm.
  - **Fruity Filter:** Legacy sound, Oversampling option.

#### 02-Data/parameters/
- [ ] **fruity-filter-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Filter",
    "category": "Filter",
    "parameters": [
      {
        "name": "Resonance",
        "type": "knob",
        "description": "Sharpness of the filter peak",
        "pro_tip": "Use high resonance with automation for 'Acid' basslines."
      },
      {
        "name": "2x Oversampling",
        "type": "switch",
        "description": "Reduces digital aliasing artifacts",
        "use_cases": ["high frequency modulation", "mastering"]
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **resonant-sweeps.md**
  - High Resonance settings.
  - Automating Cutoff.
  - Using 2x mode to keep highs clean.

- [ ] **lo-fi-telephone-eq.md**
  - Selecting Band Pass.
  - Narrowing the frequency range.
  - Cutting lows and highs simultaneously.

- [ ] **subtractive-synthesis-basics.md**
  - Applying LP filter to a Sawtooth wave.
  - Creating a "Pluck" using envelope automation on Cutoff.

#### 03-Workflows/by-context/
- [ ] **kick-drum-filtering.md**
- [ ] **white-noise-transitions.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **oversampling-benefits.md**
  - What is Aliasing?
  - Why filters distort near the Nyquist frequency (22kHz).
  - How 2x helps smooth the top end.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Clean Cuts

**Tasks:**
1. Filter a drum loop (Low Pass)
2. Filter a Pad (High Pass)
3. Experiment with Resonance
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Does "Low Pass" slope feel like 12dB or 24dB?
- What does the "Low" / "Band" / "High" mix fader do? (Some versions allow blending).

### Phase 2: Creative Application (Week 2)
**Goal:** Synthesis

**Tasks:**
1. Create a "Riser" using White Noise + Band Pass + Resonance
2. Compare the sound of Oversampling on vs off
3. Create resonant-sweeps.md

**Key Questions to Answer:**
- Can it self-oscillate?

---

## 📊 Plugin Specifications to Document

### Filter Engine
- Filter Types (LP, HP, BP)
- Oversampling Factor (2x)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why does it sound distorted? (Check Resonance or Input Level).
2. How is this different from Fast LP? (Fast LP is automation optimized, Fruity Filter is general purpose).

---

## 📝 Documentation Standards

### For Each Workflow:
- **Type:** Mode
- **Cutoff:** Hz/Knob %
- **Res:** %

---

## 🔗 Cross-Reference with Other Plugins

Fruity Filter is often used with:
- **3x Osc** (Basic subtraction synthesis)
- **Fruity Delay** (Dub filtering)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Filter/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── free-filter-vs-fruity-filter.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── fruity-filter-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── resonant-sweeps.md
│   │   ├── lo-fi-telephone-eq.md
│   │   └── subtractive-synthesis-basics.md
│
└── 04-Reference/
    └── oversampling-benefits.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Filter Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Filter.htm)
- [Fruity Filter Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Filter_tutorials.htm)
- [Fruity Filter Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+filter+tutorial)

### Community Resources
- [Fruity Filter Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+filter&restrict_sr=1)
- [Fruity Filter User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Filter Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for comparison and fine-tuning
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "State Variable Filter Fundamentals" - Understanding SVF architecture
- "Filter Design and Implementation" - Filter theory and practice
- "Subtractive Synthesis Techniques" - Using filters for sound design

### Advanced Techniques
- **Oversampling Benefits:** Understanding 2x oversampling advantages
- **Resonance Control:** Managing self-oscillation and peaks
- **Filter Types:** Understanding LP, HP, BP characteristics

---

## 📚 In-Depth Technical Analysis

### State Variable Filter Architecture
Fruity Filter implements a state variable filter design with several key characteristics:

**Filter Topology:**
- **State Variable Design:** Uses feedback loops to create multiple filter outputs
- **Simultaneous Outputs:** Can generate LP, HP, and BP outputs simultaneously
- **Resonance Control:** Independent resonance control for emphasis
- **Low CPU Usage:** Efficient implementation for real-time processing
- **Analog Emulation:** Emulates characteristics of analog state variable filters

**Filter Types:**
- **Low Pass (LP):** Allows frequencies below cutoff to pass through
  - Attenuates high frequencies above cutoff point
  - Creates warm, mellow sounds when cutoff is low
  - Essential for subtractive synthesis
  - Commonly used for tone shaping and warmth
  - Pro tip: Use for creating muffled or dark effects

- **High Pass (HP):** Allows frequencies above cutoff to pass through
  - Attenuates low frequencies below cutoff point
  - Creates bright, thin sounds when cutoff is high
  - Essential for removing rumble and low-end mud
  - Commonly used for clarity and definition
  - Pro tip: Use for cleaning up low-end in mixes

- **Band Pass (BP):** Allows frequencies within a range to pass through
  - Attenuates both low and high frequencies
  - Creates focused, narrow frequency bands
  - Essential for isolating specific frequency ranges
  - Commonly used for telephone effects and special effects
  - Pro tip: Use for creating "telephone" or "radio" effects

### Oversampling Technology
The 2x Oversampling feature provides several benefits:
- **Aliasing Reduction:** Reduces digital artifacts during processing
- **Improved Quality:** Enhances audio quality during modulation
- **Higher Resolution:** Processes at double the sample rate internally
- **Better Transients:** Maintains transient accuracy
- **CPU Trade-off:** Increases CPU usage but improves quality

### Resonance Characteristics
The Resonance control affects the filter's behavior at the cutoff point:
- **Peak Emphasis:** Increases amplitude at the cutoff frequency
- **Self-Oscillation:** At maximum values, can generate sine waves
- **Harmonic Enhancement:** Emphasizes harmonics near cutoff
- **Phase Characteristics:** Affects phase relationships at cutoff
- **Stability Considerations:** High values may cause instability

### Signal Processing Chain
The internal processing follows this order:
- **Input Stage:** Signal level monitoring and adjustment
- **Cutoff Control:** Frequency ceiling/gap determination
- **Resonance Processing:** Peak enhancement at cutoff frequency
- **Filter Engine:** Core filtering operation based on selected type
- **Oversampling:** Optional 2x processing for quality improvement
- **Output Stage:** Final level adjustment and monitoring

## 🎛️ Parameter Deep Dive

### Cutoff Control
- **Function:** Sets the frequency boundary for the selected filter type
  - Range: 20Hz to 20kHz (typically)
  - Effect: Determines which frequencies are affected by the filter
  - Use for: Removing unwanted frequency content
  - Pro tip: Use for tone shaping and brightness control
- **Behavior:**
  - Low values: More filtering effect (LP: darker, HP: brighter)
  - Medium values: Balanced filtering
  - High values: Less filtering effect (LP: brighter, HP: darker)
  - Pro tip: Use for creating muffled or open effects
- **Applications:**
  - Tone shaping: Adjust brightness and clarity
  - Frequency isolation: Focus on specific ranges
  - Anti-aliasing: Remove harsh high frequencies
  - Mix integration: Carve space in the frequency spectrum
  - Pro tip: Automate for dynamic tone changes

### Resonance Control
- **Function:** Controls the emphasis at the cutoff frequency
  - Range: 0-100% (typically)
  - Effect: Creates a peak at the cutoff frequency
  - Use for: Adding character and emphasis
  - Pro tip: High values can cause self-oscillation
- **Behavior:**
  - 0%: No emphasis, smooth rolloff
  - Medium: Gentle peak at cutoff
  - High: Strong peak, possible self-oscillation
  - Pro tip: Creates "acid" squelch sounds at high values
- **Applications:**
  - Acid sounds: High resonance for classic acid tones
  - Vowel simulation: Medium resonance for formant-like effects
  - Character addition: Low to medium for subtle enhancement
  - Self-oscillation: Maximum for sine wave generation
  - Pro tip: Use with sawtooth waves for classic acid sounds

### Filter Type Selection
- **Low Pass (LP):** Attenuates frequencies above cutoff
  - Use for: Warming sounds, removing harshness
  - Character: Creates mellow, dark tones when cutoff is low
  - Applications: Bass management, tone shaping
  - Pro tip: Essential for subtractive synthesis
- **High Pass (HP):** Attenuates frequencies below cutoff
  - Use for: Removing rumble, adding clarity
  - Character: Creates bright, thin tones when cutoff is high
  - Applications: Vocal cleanup, mix clarity
  - Pro tip: Use for removing low-end mud
- **Band Pass (BP):** Attenuates frequencies outside a range
  - Use for: Isolating specific frequency bands
  - Character: Creates focused, narrow frequency content
  - Applications: Telephone effects, special effects
  - Pro tip: Perfect for creating "radio" or "walkie-talkie" effects

### Oversampling Control
- **Function:** Processes audio at double the sample rate internally
  - Options: On/Off (2x oversampling)
  - Effect: Reduces aliasing artifacts during processing
  - Use for: Improved audio quality during modulation
  - Pro tip: Use when automating cutoff rapidly
- **Behavior:**
  - Off: Standard sample rate processing
  - On: Double sample rate processing
  - Pro tip: Increases CPU usage but improves quality
- **Applications:**
  - Fast modulation: When automating cutoff rapidly
  - High resonance: When using high resonance settings
  - Quality critical: For mastering and critical listening
  - Performance: When CPU allows for quality improvement
  - Pro tip: Use for smooth filter sweeps

## 🎼 Sound Design Applications

### Subtractive Synthesis
Using Fruity Filter for classic subtractive synthesis:

**Analog Emulation:**
- Low Pass filtering on sawtooth waves
- Resonance for emphasis and character
- Envelope automation for classic synth sounds
- Creates warm, musical filtering
- Essential for subtractive synthesis

**Bass Sound Design:**
- Low Pass filtering for warmth and control
- Resonance for character and growl
- Envelope following for dynamic filtering
- Creates classic bass synth sounds
- Perfect for electronic music production

**Lead Sound Design:**
- High Pass filtering for clarity
- Low Pass filtering for warmth
- Resonance for presence and character
- Creates distinctive lead sounds
- Essential for electronic music

### Creative Filtering
Using Fruity Filter for experimental applications:

**Telephone Effects:**
- Band Pass mode for narrow frequency range
- Low and high cutoff for mid-range focus
- Creates classic "telephone" sound
- Perfect for vocal effects
- Essential for vintage communication effects

**Radio Effects:**
- Band Pass mode with specific ranges
- Creates "radio" or "walkie-talkie" effects
- Perfect for communication-style effects
- Useful for vintage sound design
- Essential for period-accurate effects

**Special Effects:**
- High resonance for metallic tones
- Fast cutoff automation for whooshes
- Creates sci-fi and fantasy effects
- Perfect for sound design
- Essential for creative applications

### Mix Enhancement
Using Fruity Filter for mixing applications:

**Frequency Carving:**
- High Pass filtering to remove low-end mud
- Low Pass filtering to remove harsh highs
- Band Pass for isolating specific elements
- Creates space in dense mixes
- Essential for professional mixing

**Dynamic Filtering:**
- Sidechain filtering for frequency ducking
- Envelope-following for dynamic response
- Creates rhythmic filtering effects
- Perfect for electronic music
- Essential for creative mixing

**Tone Shaping:**
- Gentle Low Pass for warmth
- Subtle High Pass for clarity
- Creates balanced tonal characteristics
- Essential for mix enhancement
- Perfect for subtle processing

## 🧪 Experimental Techniques

### Advanced Filtering Applications
Creative uses of Fruity Filter's capabilities:

**Resonant Sweeps:**
- High resonance settings for emphasis
- Cutoff automation for sweeping effects
- Creates classic "squelch" sounds
- Perfect for electronic music
- Essential for build-ups and drops

**Self-Oscillation:**
- Maximum resonance for sine generation
- Cutoff as pitch control
- Creates pure tones and drones
- Perfect for ambient music
- Useful for experimental synthesis

**Formant Filtering:**
- Medium resonance for vowel-like effects
- Specific cutoff frequencies for different vowels
- Creates talking synth effects
- Perfect for robotic vocals
- Useful for experimental sound design

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- Create complex cutoff automation patterns
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
- Combine with other filtering units
- Create complex filtering chains
- Perfect for advanced sound design
- Use for sophisticated processing

## 🎚️ Workflow Optimization

### Synthesis Workflows
Efficient approaches to using Fruity Filter for synthesis:

**Subtractive Synthesis:**
- Use with oscillator sources (sawtooth, square, triangle)
- Apply Low Pass filtering for warmth
- Add resonance for character
- Use envelope automation for dynamic changes
- Essential for classic synth sounds

**Filter Automation:**
- Create smooth, artifact-free sweeps
- Use oversampling for quality during automation
- Plan automation to musical structure
- Essential for electronic music production
- Pro tip: Use slow automation for build-ups

**Integration Workflows:**
- Use with other synthesis parameters
- Combine with envelope generators
- Integrate with performance controllers
- Essential for live performance
- Pro tip: Map to MIDI controllers

### Integration Workflows
Working with other plugins and tools:

**Synthesizer Integration:**
- Use with subtractive synthesizers
- Combine with wavetable synths for filtering
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
- **Acid House:** Creating classic TB-303 sounds with resonance
- **Dubstep:** Wobble bass and rhythmic filtering
- **Trance:** Filter sweeps and build-ups
- **Techno:** Acid sounds and rhythmic patterns
- **Ambient:** Evolving textures and drones

### Hip-Hop and R&B
- **Vocal Processing:** Creating telephone and radio effects
- **Sample Filtering:** Adding character to samples
- **Mix Enhancement:** Carving space in the mix
- **Creative Effects:** Adding movement to static elements
- **Transitions:** Creating filter sweep effects

### Rock and Metal
- **Guitar Enhancement:** Adding character to guitar sounds
- **Bass Processing:** Creating aggressive bass sounds
- **Drum Enhancement:** Adding character to drums
- **Mix Enhancement:** Carving space in rock mixes
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Drone Creation:** Using self-oscillation for drones
- **Atmospheric Processing:** Creating evolving textures
- **Experimental Sounds:** Creating unique sonic signatures
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Filter works well with various effects:
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
Fruity Filter was developed as a legacy state-variable filter:
- Created to provide classic state-variable filtering
- Designed for low CPU usage and efficiency
- Developed with subtractive synthesis in mind
- Intended to complement other filter plugins

### Evolution Through FL Studio Versions
- Initially introduced with basic state-variable filtering
- Enhanced with oversampling option
- Improved with better sound quality and stability
- Expanded with more sophisticated algorithms

### Impact on Music Production
Fruity Filter has influenced music production by:
- Providing accessible subtractive synthesis tools
- Enabling classic analog-style filtering
- Facilitating creative filter automation
- Supporting various musical genres with flexible filtering

## 🧠 Advanced Processing Techniques

### Filter Mastery
Advanced techniques for filter processing:
- **Harmonic Control:** Precise control over harmonic content
- **Resonance Character:** Understanding resonance effects
- **Dynamic Filtering:** Creating responsive filtering
- **Frequency-Specific:** Targeting specific frequency ranges
- **Spectral Processing:** Combining with spectral tools

### State Variable Filter Techniques
Advanced techniques for state variable filters:
- **Simultaneous Outputs:** Understanding LP/HP/BP relationships
- **Resonance Management:** Controlling self-oscillation
- **Phase Relationships:** Managing phase during filtering
- **Cutoff Tracking:** Following pitch changes proportionally
- **Stability Control:** Preventing instability at high resonance

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique filtered textures
- **Atmospheric Processing:** Building ambient soundscapes
- **Rhythmic Effects:** Creating rhythmic filtering patterns
- **Spatial Manipulation:** Creating immersive environments
- **Experimental Processing:** Pushing boundaries of filtering

## 📊 Performance Considerations

### CPU Usage
Managing Fruity Filter's impact on system performance:
- **Low CPU Load:** Extremely efficient processing
- **Oversampling Impact:** 2x mode increases CPU usage
- **Instance Count:** Multiple instances have minimal impact
- **Real-Time Performance:** Optimized for live performance
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Aliasing Prevention:** Using oversampling to reduce artifacts
- **Phase Response:** Maintaining phase relationships
- **Resonance Stability:** Preventing instability at high values
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output

### System Integration
Optimizing Fruity Filter within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimizing audio latency

## 🛠️ Troubleshooting Common Issues

### Filtering Problems
- **Harsh Sound:** Reduce resonance or adjust cutoff
- **Loss of Clarity:** Increase cutoff frequency
- **Phase Issues:** Check stereo field and width settings
- **Excessive Resonance:** Reduce resonance to prevent self-oscillation
- **Muddy Low End:** Adjust cutoff to preserve low-end clarity

### Technical Issues
- **High CPU Usage:** Disable oversampling if not needed
- **Latency Issues:** Optimize buffer settings
- **Clipping:** Reduce input gain or increase output headroom
- **Aliasing Artifacts:** Enable oversampling for quality
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Try different cutoff/resonance combinations
- **Lack of Character:** Increase resonance for more emphasis
- **Poor Integration:** Use EQ or reduce amount to blend
- **Overpowering:** Reduce resonance or use EQ to balance
- **Lack of Control:** Automate parameters for dynamic changes

## 🎚️ Advanced Configuration

### Custom Presets
Creating and managing custom configurations:
- **Synthesis Presets:** Optimized for subtractive synthesis applications
- **Effect Presets:** Configured for creative filtering applications
- **Mix Presets:** Set up for mixing applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple Fruity Filter instances effectively:
- **Frequency-Specific:** Different instances for different ranges
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
- **FL Studio Forums:** Discussions about Fruity Filter techniques
- **Reddit Groups:** Sharing filter techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced filter techniques
- **Written Guides:** In-depth articles on state variable filters
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting Fruity Filter configurations
- **Technique Sharing:** Platforms for sharing processing methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Demonstrate audible aliasing reduction using the 2x oversampling switch
- [ ] Create a convincing "Telephone" voice effect using Band Pass mode
- [ ] Explain why you would choose Fruity Filter over Parametric EQ 2 for a simple sweep
- [ ] Create a classic "Acid" bass sound using high resonance and cutoff automation
- [ ] Use Fruity Filter for subtractive synthesis with proper envelope control
- [ ] Apply dynamic filtering using sidechain or envelope following
- [ ] Troubleshoot resonance and self-oscillation issues effectively
- [ ] Integrate Fruity Filter into efficient mixing workflows
- [ ] Create formant-like effects using strategic cutoff and resonance settings
- [ ] Optimize oversampling settings for performance vs quality balance

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\quick-start-guide.md

```markdown
# Fruity Filter Quick Start Guide

## Getting Started in 60 Seconds

### Basic Low-Pass Filter
1. **Load Fruity Filter** on any track or mixer channel
2. **Set Type to Low-Pass** (default)
3. **Set Cutoff to 2kHz** for gentle high-frequency roll-off
4. **Set Resonance to 25%** for musical warmth
5. **Keep Mix at 100%** for full filtering effect

## Filter Types Explained

### Low-Pass (LP)
**What it does**: Passes frequencies below cutoff, attenuates above
**Best for**: Sub-bass, warmth, anti-aliasing
**Starting point**: Cutoff 2-4kHz, Resonance 20-40%

### High-Pass (HP) 
**What it does**: Passes frequencies above cutoff, attenuates below
**Best for**: Removing rumble, creating space, cleaning tracks
**Starting point**: Cutoff 80-150Hz, Resonance 10-30%

### Band-Pass (BP)
**What it does**: Passes frequencies around cutoff, attenuates outside
**Best for**: Isolating frequency ranges, special effects
**Starting point**: Cutoff 800-1200Hz, Resonance 30-50%

### Notch Filter
**What it does**: Cuts frequencies at cutoff, passes others
**Best for**: Removing problem frequencies, feedback elimination
**Starting point**: Cut 400-600Hz, narrow Q (70-90%)

### Band-Reject (BR)
**What it does**: Wide notch with selectable width
**Best for**: General frequency reduction, room correction
**Starting point**: Cut 300-800Hz, moderate width (40-60%)

## Essential Parameters

### Cutoff Frequency
- **Range**: 20Hz to 20kHz
- **Low Cutoff** (20-200Hz): Sub-bass focus
- **Mid Cutoff** (200-2kHz): Musical filtering
- **High Cutoff** (2-10kHz): Air and presence
- **Very High** (10-20kHz): Anti-aliasing, clean processing

### Resonance (Q)
- **Range**: 0% to 100%
- **Low Q** (0-20%): Natural response, gentle character
- **Medium Q** (20-50%): Musical emphasis, moderate character
- **High Q** (50-80%): Strong emphasis, creative effects
- **Very High Q** (80-100%): Extreme effects, potential oscillation

### Drive Control
- **Range**: 0% to 100%
- **Clean** (0-15%): Pure filtering
- **Warm** (15-35%): Subtle saturation
- **Driven** (35-60%): Noticeable character
- **Distorted** (60-100%): Heavy saturation, creative use

## Quick Problem Solvers

### Track Sounds Muddy
**Solution**: Use high-pass filter at 100-150Hz
**Settings**: Type HP, Cutoff 120Hz, Resonance 15%, Mix 100%

### Need More High Frequencies
**Solution**: Use band-pass filter targeting high frequencies
**Settings**: Type BP, Cutoff 8kHz, Resonance 30%, Mix 50%

### Frequency Problems
**Solution**: Use notch filter to remove problem frequencies
**Settings**: Type Notch, Cut at problem freq, High Q (70-90%), Mix 100%

### Creative Sound Design
**Solution**: Experiment with extreme settings and automation
**Settings**: Any type, extreme cutoff/resonance, add drive, automate parameters

## Genre-Specific Starting Points

### Electronic Music
`\`\`
Bass Filtering: LP, 200Hz cutoff, 15% resonance
Lead Filtering: HP, 80Hz cutoff, 20% resonance  
FX Filtering: BP, 1.2kHz cutoff, 40% resonance
`\`\`

### Hip-Hop Production
`\`\`
808 Cleaning: HP, 60Hz cutoff, 10% resonance
Vocal Space: BP, 2-4kHz cutoff, 35% resonance
Mix Polish: LP, 12kHz cutoff, 25% resonance
`\`\`

### Rock Music
`\`\`
Guitar Clearing: HP, 120Hz cutoff, 25% resonance
Drum Punch: BP, 200-400Hz cutoff, 50% resonance
Master Warmth: LP, 8kHz cutoff, 30% resonance
`\`\`

### Sound Design
`\`\`
Telephone: LP, 1.5kHz cutoff, 45% resonance
Underwater: LP, 800Hz cutoff, 60% resonance
Sci-Fi: Complex settings with automation
`\`\`

## Pro Tips

### Filter Selection Guidelines
- **Low-Pass**: For sub-bass, warmth, anti-aliasing
- **High-Pass**: For cleaning, creating space, removing rumble
- **Band-Pass**: For isolating frequencies, special effects
- **Notch**: For removing problem frequencies, feedback control

### Resonance Usage
- **Musical Resonance** (20-50%): Adds warmth and character
- **Creative Resonance** (50-80%): Creates dramatic effects
- **Extreme Resonance** (80-100%): Special effects, use carefully

### Creative Applications
- **Filter Sweeps**: Automate cutoff for musical effects
- **Resonance Modulation**: Add LFO to Q for movement
- **Parallel Filtering**: Combine multiple filter types
- **Drive Blending**: Add saturation for character

## Common Mistakes to Avoid

❌ Using wrong filter type for the job
❌ Extreme resonance causing oscillation
❌ Cutoff too low killing important frequencies
❌ Excessive drive creating unwanted distortion
❌ Not checking in mix context

## Filter Type Decision Chart

| Goal | Best Filter Type | Why |
|-------|-----------------|------|
| Remove Sub-Rumble | High-Pass | Eliminates low frequencies |
| Add Warmth | Low-Pass | Gentle high-frequency roll-off |
| Isolate Frequency | Band-Pass | Focuses on specific range |
| Remove Problem | Notch | Precise frequency removal |
| Clean Air | Low-Pass | Controls high frequencies |

This quick start guide provides immediate functionality while teaching fundamental filtering concepts. Start here, then explore advanced filter techniques and creative applications as you gain experience.
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Filter

## The 60-Second Mental Model
Fruity Filter is a **State Variable Filter (SVF)**. Unlike standard EQ plugins that are designed for "clean" carving, an SVF is designed for **character**. It uses an internal feedback loop to create Low Pass, High Pass, and Band Pass shapes. Its standout feature is the **2x Oversampling** switch, which allows the filter to sweep through high frequencies with less digital "grit" and more analog smoothness. [SRC: IL-MAN]

## Purpose & Identity
*   **Identity:** A legacy tonal shaper with a distinctive resonant "peak."
*   **Where it fits:** It's an Effect. Use it when you want your filter sweeps to sound "liquid" or when you need a quick Band Pass for a telephone effect.

## Hip-Hop / R&B Context
*   **Ghostly Melodies:** Use the **Band Pass (BP)** mode to isolate the mid-range of a piano, making it sound like a haunted sample from an old vinyl.
*   **High-End Sparkle:** Apply a High Pass (HP) sweep to hi-hats during a transition. Turn on **2x mode** to ensure the shimmer stays clean and high-fidelity.
*   **Ambient Noise Sweeps:** Filter a white noise source with high resonance to create wind or "whoosh" risers for transition FX.

## When To Use
*   When you want a filter with a **distinct personality** or "whistle."
*   When performing **fast automation** (risers/drops) where digital aliasing might be an issue.
*   When you need a simple **High Pass** to clean up 808 rumble without loading a complex EQ.

## When NOT To Use
*   **Surgical Precision:** Use **Parametric EQ 2** for cutting specific bad frequencies.
*   **Steep Brickwalls:** SVFs like Fruity Filter have a relatively gentle slope (approx 12dB/oct). If you need a "brickwall" cut, use **Fruity Fast LP** or **EQ 2**. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Filter

## UI Tour
1.  **Cutoff Knob:** The main frequency control.
2.  **Resonance (Res) Knob:** Controls the sharpness of the peak at the cutoff point.
3.  **Filter Type Toggle:** 
    *   **Low Pass (LP):** Removes highs.
    *   **High Pass (HP):** Removes lows.
    *   **Band Pass (BP):** Removes both, leaving only a "band."
4.  **2x Switch:** Toggles oversampling for higher audio quality. [SRC: IL-MAN]
5.  **Mix Faders:** (In some versions) allows independent control of the Dry and Filtered signals.

## Signal Flow
1.  **Input:** Audio enters.
2.  **State Selection:** The signal is routed through the chosen filter algorithm (LP/HP/BP).
3.  **Resonance Loop:** A portion of the signal is fed back into the filter to create the resonant peak.
4.  **Oversampling:** If **2x** is ON, the internal processing rate is doubled to prevent aliasing.
5.  **Output:** Summed signal is sent to the mixer.

## Things Beginners Misunderstand
*   **Resonance and Volume:** High resonance doesn't just change the tone; it **boosts volume** significantly. **Fix:** Lower the mixer fader before cranking the Res knob.
*   **The 2x Mode CPU:** It uses more CPU than standard mode. Don't leave it on for every track if your project is large.
*   **Frequency Range:** The Cutoff knob is extremely sensitive. A tiny movement in the low range (left side) changes the sound more than a large movement in the high range (right side). [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Filter

## Technique 1: The "Radio" Vocal
*   **Goal:** Make a vocal sound like it’s coming through a telephone or small speaker.
*   **Action:** 
    *   Select **BP (Band Pass)** mode.
    *   Set **Cutoff** to ~1.5kHz (approx 1 o'clock).
    *   Set **Resonance** to 20%.
*   **Result:** The lows and highs are stripped away, leaving a focused, "nasal" sound perfect for R&B intros.

## Technique 2: High-Fi Shimmer Risers
*   **Goal:** A clean filter sweep during a build-up.
*   **Setup:** Use White Noise or a bright synth pad.
*   **Action:** 
    *   Engage **2x Oversampling**. 
    *   Automate the **Cutoff** from 0 to 100%.
    *   Set **Resonance** to 50%.
*   **Benefit:** The "whistling" peak will sound smooth and detailed rather than "pixelated" as it reaches the highest frequencies. [SRC: REPUTABLE]

## Technique 3: Sub-Bass Protection
*   **Goal:** Clearing space for the 808.
*   **Action:** Place Fruity Filter on your Melody/Synth bus.
*   **Settings:** Mode = **HP (High Pass)**. Cutoff = 300Hz (approx 9 o'clock).
*   **Result:** All "rumble" is removed from the melodies, ensuring the 808 hits with maximum clarity.

## Technique 4: "Liquid" Phasing Effect
*   **Goal:** A trippy, moving texture.
*   **Action:** Set Mode to **BP**. Turn Resonance to `70%`.
*   **Automation:** Link the Cutoff to a slow LFO (Peak Controller).
*   **Listen For:** The focused frequency band will slide up and down, creating a sound similar to a phaser but with more "weight." [SRC: REPUTABLE]

## Common Pitfalls + Fixes
*   **Pitfall:** "Digital distortion/clipping."
    *   **Fix:** Resonance is likely too high. Turn the **Res** knob down or use a **Fruity Limiter** after the filter.
*   **Pitfall:** "The filter sweep sounds 'staticy'."
    *   **Fix:** Enable **2x Oversampling**. This fixes the digital artifacts that occur when filter peaks move rapidly. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Filter

Filter modes are the "Environment" of your track.

## 1. Moody (Lonely, Ghostly, Distant)
*   **Production Lever:** **Band Pass Mode + Low Cutoff.**
*   **Action:** Mode: **BP**. Cutoff: ~500Hz. Resonance: 10%.
*   **Listen For:** A muffled, "trapped" sound. It feels like the melody is playing in another room. 
*   **Don't Do This:** Avoid High Pass; it makes sounds feel "thin" rather than "moody."

## 2. Upbeat (Kinetic, Polished, Energetic)
*   **Production Lever:** **2x Oversampling + High Pass Sweeps.**
*   **Action:** Mode: **HP**. Use 2x mode. Automate the Cutoff to "Reveal" the sound on the downbeat.
*   **Listen For:** A "burst" of clarity that makes the listener want to dance.
*   **Don't Do This:** Don't keep the cutoff low; upbeat vibes need full-spectrum brightness.

## 3. Psychedelic (Vibrant, Warped, Liquid)
*   **Production Lever:** **High Resonance + Modulated BP.**
*   **Action:** Mode: **BP**. Resonance: 80%. LFO on Cutoff.
*   **Listen For:** A "squelchy," metallic texture that feels like it’s moving in your brain.
*   **Don't Do This:** Avoid Low Pass; BP is much more "vocal" and trippy.

## 4. Jazzy (Warm, Antique, Soft)
*   **Production Lever:** **Low Pass Mode + 2x Oversampling.**
*   **Action:** Mode: **LP**. Cutoff: ~3kHz. Resonance: 0%.
*   **Listen For:** A "rounded" tone that mimics vintage microphones. It softens the digital edges of modern VSTs.
*   **Don't Do This:** Avoid resonance; keep the filter curve as flat and natural as possible.

## 5. Vibey (Smooth, Shimmering, Airy)
*   **Production Lever:** **Parallel HP Filtering.**
*   **Action:** Place on a background pad. Mode: **HP**. Cutoff: 1kHz. Mix at 40%.
*   **Listen For:** A "shimmering" high-end layer that sits on top of the main sound like a silk sheet.
*   **Don't Do This:** Don't cut the mids too hard; you want a "lush" blend. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\signal-flow.md

```markdown
# Signal Flow: Fruity Filter

Fruity Filter processes the audio into three parallel streams based on the Cutoff Frequency.

`\`\`mermaid
graph LR
    Input[Input Audio] --> SVF[State Variable Filter Core]
    SVF -- Cutoff/Res --> LP[Low Pass Path]
    SVF -- Cutoff/Res --> BP[Band Pass Path]
    SVF -- Cutoff/Res --> HP[High Pass Path]
    
    LP -- Fader Level --> Mix[Mixer Sum]
    BP -- Fader Level --> Mix
    HP -- Fader Level --> Mix
    
    Mix --> Output[Output Audio]
`\`\`

### Stages
1.  **Input**: Audio enters the State Variable Filter core.
2.  **Filter Calculation**: The engine calculates the Low, Band, and High pass versions of the signal simultaneously based on the **Cutoff** and **Resonance**.
3.  **Mixing**: The user blends these three signals using the vertical sliders.
4.  **Output**: The summed signal.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Filter (5 Minutes)

1.  **Insert:** Load **Fruity Filter** onto any track (e.g., Vocals or a Pad).
2.  **Mode:** Select the mode. `LP` for dark tones, `HP` for thin tones, `BP` for a radio sound.
3.  **Frequency:** Move the **Cutoff** knob until you find the "gap" you want.
4.  **Resonance:** Increase **RES** to make the filter "sing."
5.  **Quality:** Switch on **2x** if you are automating the Cutoff rapidly.
6.  **Tip:** Use the **Mix** slider in the plugin (if available) or the mixer slot to blend the effect. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity Filter

*   **Leaving 2x OFF for Risers:** Automating a high-resonance sweep with 2x disabled. This results in "stepping" noise and digital distortion in the high-end. **Fix:** Enable 2x for all transition sweeps.
*   **Resonance Clipping:** Turning up RES to 100% and wondering why the whole project is distorting. **Fix:** Resonance is a volume boost. Turn down the mixer fader first.
*   **Wrong Mode Choice:** Using LP when you want a telephone effect. **Fix:** **BP (Band Pass)** is the correct mode for the "Phone/Radio" sound.
*   **Ignoring Input Gain:** Sending a signal that is already at 0dB into the filter. The resonance will immediately cause clipping. **Fix:** Keep input levels around -6dB to -12dB.
*   **Static Filtering:** Loading the plugin and never automating it. Fruity Filter’s strength is in its **movement**. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Filter: The State Variable

> **Scope:** Sweeps, Notch Filtering, and Phase Cancellation.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Academic).

## 🧠 The "Mix" Concept
Most filters give you a switch: LP **OR** HP.
Fruity Filter gives you **Faders**: LP **AND** HP.
*   **State Variable:** It calculates all filter states simultaneously.
*   **Topology:** Likely a 12dB/Octave (2-Pole) design.
*   **Benefits:** You can create custom filter shapes by blending the outputs.

**Signal Flow:**
`Input` -> **[SV FILTER CORE]** -> **[LP/BP/HP MIX]** -> **[OVERSAMPLING]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Mix Knobs

*   **Low Pass:** Frequencies below Cutoff.
*   **High Pass:** Frequencies above Cutoff.
*   **Band Pass:** Frequencies around Cutoff.
*   **Combinations:**
    *   *LP + HP:* **Notch Filter** (Band Stop). This removes the middle but keeps the lows and highs.
    *   *All 3:* All Pass / Phasing effect (if phase relationships align).

---

## 🔁 Section 2: "Center" & "x2"

*   **Center:** Removes DC Offset.
    *   *Why:* Fast filter sweeps can generate low-frequency "thumps" or direct current bias. This fixes it.
*   **x2 (Oversampling):** Runs the internal loop at double sample rate.
    *   *Use:* Essential for High Resonance sweeps to prevent the filter from "exploding" or aliasing near Nyquist.

---

## ⚡ Technical Specs: 12dB Slope

*   **Steepness:** The filter is gentle (12dB/Oct). It is not a brickwall.
*   **Resonance:** Self-oscillates easily. The Resonance boosts the Cutoff frequency significantly.
*   **Sound:** It has a "wet", "acid" character typical of State Variable filters (like the Oberheim SEM).

---

## 🧪 "Secret Sauce" Workflows

### 1. Manual Notch Sweep (Phaser)
1.  **Low Pass:** 100%.
2.  **High Pass:** 100%.
3.  **Band Pass:** 0%.
4.  **Action:** Sweep the **Cutoff**.
5.  **Result:** You hear a "hole" moving through the spectrum. This is the classic DJ "Nutella" effect (removing bass/mids without losing energy).

### 2. The "DJ" Kill Switch
1.  **Low Pass:** Link to a button.
2.  **High Pass:** Link to a button.
3.  **Cutoff:** Set to 200Hz.
4.  **Action:** Toggle LP Off and HP On instantly (Bass Kill).

### 3. Parallel Resonant Peak
1.  **Context:** You want to boost a specific frequency without cutting others (Peaking EQ behavior).
2.  **Setup:**
    *   **Band Pass:** 100%.
    *   **Resonance:** High.
    *   **Mix:** Use the FL Mixer's Dry/Wet knob (Fruity Filter doesn't have a Dry knob, only filter outputs).
    *   *Wait:* If you blend the Filter output with the Dry signal, you create a Peaking EQ.

```

---

## FILE: 01-Learning\Quick-Reference\free-filter-vs-fruity-filter.md

```markdown
# Free Filter vs. Fruity Filter: The Difference

FL Studio has two "standard" filters. Here is when to use each.

| Feature | Fruity Filter (Legacy) | Fruity Free Filter (Modern) |
| :--- | :--- | :--- |
| **Oversampling** | **YES (2x Switch)** | NO |
| **Filter Types** | LP, HP, BP | LP, HP, BP, Notch, Low Shelf, High Shelf, Peaking |
| **Resonance** | Aggressive / Whistling | Balanced / Musical |
| **Slope** | Fixed (~12dB/oct) | Fixed (~12dB/oct) |
| **Best For** | **Sound Design & Risers** | **Utility EQ & Tone Shaping** |

## Why choose Fruity Filter?
The **2x Oversampling** makes it objectively better for high-speed automation and risers. The resonance also has a more "vocal" character compared to the transparent sound of Free Filter. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters.json

```json
{
  "pluginName": "Fruity Filter",
  "version": "1.0",
  "lastUpdated": "2025-01-04",
  "category": "Multi-Mode Filtering",
  "parameters": {
    "filterType": {
      "type": "selection",
      "options": ["low_pass", "high_pass", "band_pass", "notch", "band_reject", "all_pass"],
      "default": "low_pass",
      "description": "Filter mode selection"
    },
    "cutoffFrequency": {
      "type": "frequency",
      "range": [20, 20000],
      "default": 2000,
      "unit": "Hz"
    },
    "resonance": {
      "type": "percentage",
      "range": [0, 100],
      "default": 25,
      "unit": "%",
      "description": "Q control and frequency emphasis"
    },
    "slope": {
      "type": "selection",
      "options": [12, 24],
      "default": 24,
      "unit": "dB/octave",
      "description": "Filter steepness"
    },
    "drive": {
      "type": "percentage",
      "range": [0, 100],
      "default": 0,
      "unit": "%",
      "description": "Saturation and harmonic generation"
    },
    "mix": {
      "type": "percentage",
      "range": [0, 100],
      "default": 100,
      "unit": "%",
      "description": "Dry/wet signal balance"
    },
    "outputLevel": {
      "type": "gain",
      "range": [-12, 12],
      "default": 0,
      "unit": "dB",
      "description": "Output level compensation"
    }
  },
  "filterCharacteristics": {
    "low_pass": {
      "description": "Passes frequencies below cutoff",
      "applications": ["sub_bass", "warmth", "anti_aliasing"],
      "typicalSettings": {
        "sub_bass": {"cutoff": 200, "resonance": 15},
        "warmth": {"cutoff": 3000, "resonance": 30},
        "anti_aliasing": {"cutoff": 18000, "resonance": 5}
      }
    },
    "high_pass": {
      "description": "Passes frequencies above cutoff",
      "applications": ["cleaning", "space_creation", "rumble_removal"],
      "typicalSettings": {
        "cleaning": {"cutoff": 120, "resonance": 20},
        "space_creation": {"cutoff": 80, "resonance": 25},
        "rumble_removal": {"cutoff": 40, "resonance": 10}
      }
    },
    "band_pass": {
      "description": "Passes frequencies around cutoff",
      "applications": ["isolation", "fx", "telephone"],
      "typicalSettings": {
        "isolation": {"cutoff": 1000, "resonance": 40},
        "fx": {"cutoff": 2500, "resonance": 60},
        "telephone": {"cutoff": 1500, "resonance": 50}
      }
    },
    "notch": {
      "description": "Cuts frequencies at cutoff point",
      "applications": ["feedback_removal", "problem_frequencies", "room_correction"],
      "typicalSettings": {
        "feedback_removal": {"cutoff": 400, "resonance": 80},
        "problem_frequencies": {"cutoff": 600, "resonance": 70},
        "room_correction": {"cutoff": 300, "resonance": 60}
      }
    }
  },
  "presets": {
    "utility": {
      "sub_extractor": {
        "name": "Sub-Bass Extractor",
        "filterType": "low_pass",
        "cutoffFrequency": 150,
        "resonance": 10,
        "slope": 24,
        "drive": 5,
        "mix": 100
      },
      "air_control": {
        "name": "Air Control",
        "filterType": "low_pass",
        "cutoffFrequency": 12000,
        "resonance": 20,
        "slope": 24,
        "drive": 10,
        "mix": 50
      }
    },
    "creative": {
      "telephone": {
        "name": "Telephone Effect",
        "filterType": "band_pass",
        "cutoffFrequency": 1500,
        "resonance": 45,
        "slope": 12,
        "drive": 25,
        "mix": 90
      },
      "underwater": {
        "name": "Underwater Effect",
        "filterType": "low_pass",
        "cutoffFrequency": 800,
        "resonance": 60,
        "slope": 24,
        "drive": 15,
        "mix": 75
      }
    },
    "genre": {
      "edm_bass": {
        "name": "EDM Bass Filter",
        "filterType": "low_pass",
        "cutoffFrequency": 300,
        "resonance": 20,
        "slope": 24,
        "drive": 15,
        "mix": 85
      },
      "hiphop_clean": {
        "name": "Hip-Hop Clean",
        "filterType": "high_pass",
        "cutoffFrequency": 80,
        "resonance": 15,
        "slope": 12,
        "drive": 10,
        "mix": 80
      },
      "rock_power": {
        "name": "Rock Power",
        "filterType": "band_pass",
        "cutoffFrequency": 800,
        "resonance": 50,
        "slope": 24,
        "drive": 35,
        "mix": 70
      }
    }
  },
  "technicalSpecs": {
    "filterTypes": 6,
    "slopes": [12, 24],
    "resonanceRange": [0, 100],
    "latency": 0,
    "cpuUsage": 0.25,
    "sampleRates": [44100, 48000, 88200, 96000, 192000]
  }
}
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Filter

| Parameter | Type | Description | Vibe Impact | Mix Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Cutoff** | Knob | Freq boundary. | **Moody** (Lows). | Tonal Balance. |
| **Res** | Knob | Peak at cutoff. | **Psychedelic** | Volume / Bite. |
| **Type** | Switch | LP, HP, BP. | **Jazzy** (LP). | Freq Isolation. |
| **2x** | Switch | Oversampling. | **Upbeat** (High-fi).| Aliasing. |

## Mix Impact Tags
*   **Brightness:** Managed via LP/HP cutoff.
*   **Motion:** High-speed response for automated risers.
*   **Aliasing:** Controlled by the **2x** oversampling switch. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity Filter",
  "category": "Filter",
  "parameters": [
    {
      "section": "Filter Core",
      "id": "cutoff",
      "name": "Cutoff Freq",
      "range": { "min": 10, "max": 20000, "unit": "Hz" },
      "description": "Center frequency."
    },
    {
      "section": "Filter Core",
      "id": "res",
      "name": "Resonance",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Feedback/Q amount."
    },
    {
      "section": "Mix",
      "id": "low_pass",
      "name": "Low Pass",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "LP Output Level."
    },
    {
      "section": "Mix",
      "id": "band_pass",
      "name": "Band Pass",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "BP Output Level."
    },
    {
      "section": "Mix",
      "id": "high_pass",
      "name": "High Pass",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "HP Output Level."
    },
    {
      "section": "Options",
      "id": "oversample",
      "name": "x 2",
      "options": ["Off", "On"],
      "description": "2x Oversampling."
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Fruity Filter)

## Rule 1: The "Radio" Intro
*   **Rule:** Intros should feel small to make the drop feel huge.
*   **Application:** Use **BP mode**. Cutoff @ 1.5kHz. Automate the **Mix** level to fade out as the beat hits.

## Rule 2: Resonance Safety
*   **Rule:** Never leave high resonance on a lead vocal.
*   **Why:** Resonant peaks can clash with the singer’s natural overtones, creating a "nasal" or "annoying" whistle.

## Rule 3: 808 Cutoff
*   **Rule:** Keep your 808 fundamental clean.
*   **Move:** If you want to filter an 808, use a **Low Pass** filter. Never use a **Band Pass** on an 808 unless you are making a specific "lo-fi" effect, as it will destroy the sub-bass energy. [SRC: REPUTABLE]

## Rule 4: Automation Smoothing
*   **Rule:** Use "Smooth" curves for moody transitions.
*   **Application:** In the Automation Clip, use a slow-rising curve for the Cutoff. This mimics the "unfolding" of a professional R&B track.

## Rule 5: CPU Discipline
*   **Rule:** Turn **2x OFF** when the filter is not being automated.
*   **Application:** It is a waste of processing power to oversample a static filter. Only engage it when you need the quality for a sweep. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity Filter

## 1. The "Acid" Bassline

1.  **Input:** Saw wave.
2.  **Knobs:**
    *   **Low Pass:** 100%.
    *   **Resonance:** 75% (Singing).
3.  **Automation:**
    *   Link specific notes' Velocity to the **Cutoff** knob (using Fruity Envelope Controller or Patcher).
    *   Or simply draw an LFO loop.
4.  **Why:** The 12dB slope is classic "303" territory (although 303 is technically 18dB/24dB diode ladder, the SVF topology offers a similar "squelch").

## 2. Transition Wash

1.  **Setup:** Put Fruity Filter on the Master (or Submix).
2.  **State:**
    *   **Low Pass:** 100%.
    *   **High Pass:** 0%.
3.  **Build-up:**
    *   Automate **Low Pass** down to 0%.
    *   Automate **High Pass** up to 100%.
    *   Simultaneously sweep **Cutoff** from Low to High.
4.  **Result:** The "Endless Wash" effect where the energy moves from Bass to Treble and disappears, ready for the drop.

## 3. LFO Wah-Wah

1.  **Knobs:** **Band Pass** only.
2.  **Cutoff:** Link to "Fruity Peak Controller" LFO.
3.  **Input:** Electric Guitar or Clavinet.
4.  **Result:** Classic 70s Auto-Wah funk effect.

## 4. Anti-Aliasing Guard

1.  **Context:** You are using a distortion plugin that creates dirty high-end.
2.  **Action:** Place Fruity Filter *after* the distortion.
3.  **Setting:** Low Pass, x2 Oversampling On. Cutoff at 16kHz.
4.  **Why:** The Oversampling switch on Fruity Filter ensures that the filter itself handles the high-frequency content cleanly, acting as a "roof" for the distortion.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Lo-Fi Telephone EQ (Fruity Filter)

## Routing Context
*   **Target:** Vocals or Background Melody.
*   **Setup:** Insert FX.

## Step-by-Step Setup
1.  Load **Fruity Filter**.
2.  Set Type to **BP (Band Pass)**.
3.  Turn **Cutoff** to approximately `1 o'clock` (~1.5kHz).
4.  Set **Resonance** to `25%`. (Adds a slight nasal "bite" found in telephone speakers).
5.  **Tweak:** Switch on **2x Oversampling** to ensure the high-mid frequencies stay clear.

## Result
*   A classic, focused "small speaker" effect that strips the weight and air from the sound, perfect for intros, outros, or transition ad-libs.

## Variations
*   **Old Radio:** Move the Cutoff slightly lower (~800Hz) and increase Resonance to 40%.
*   **Intercom:** Add a small amount of **Fruity Fast Dist** after the filter to simulate speaker distortion.

## Pitfalls + Fixes
*   **Volume Drop:** Band Pass mode removes a lot of signal energy. **Fix:** Use the **Post-Gain** or the Mixer Fader to boost the volume back to audible levels. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Space_And_Motion.md

```markdown
# Workflow: Resonant Riser Sweeps (Fruity Filter)

## The Concept
Creating intense white-noise risers using high resonance and automated band-pass filtering.

## Step-by-Step
1.  Load a **White Noise** source (e.g., from 3x Osc).
2.  Place **Fruity Filter** on the track.
3.  Set Type to **BP**.
4.  Engage **2x Oversampling**.
5.  Set **Resonance** to `80%`. (It should sound like a whistle).
6.  Right-click **Cutoff** -> **Create Automation Clip**.
7.  **The Sweep:** In the Playlist, draw a line that rises from 0% to 100% over 8 bars.

## Vibe Check
*   **Psychedelic / Upbeat:** The result is a "wind-like" rushing sound that builds massive pressure before a drop.

## Automation Idea
*   Link the **Resonance** knob to the same automation clip, but inverted, so the "whistle" gets quieter as the frequency gets higher. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\03_Goal_Creative_Effect.md

```markdown
# Workflow: Melodic "Pluck" Shaping (Fruity Filter)

## The Concept
Using a Low Pass filter to turn a sustained synth sound into a percussive "pluck."

## Step-by-Step
1.  Load a bright **Sawtooth Pad**.
2.  Place **Fruity Filter** on the track.
3.  Set Type to **LP**.
4.  Set **Cutoff** to `0%`. (Silent).
5.  Set **Resonance** to `30%`.
6.  Open **Fruity Envelope Controller** on a separate channel.
7.  Link the **Filter Cutoff** to Articulator 1 of the Envelope Controller.
8.  **Draw the Pluck:** Create a sharp attack and a fast decay (~200ms) in the envelope.

## Vibe Check
*   **Moody / Vibey:** Creates a "rubbery" synth texture perfect for modern R&B melodies.

## Pitfalls
*   **Resonance Artifacts:** If the pluck "clicks" too hard, lower the Resonance. [SRC: REPUTABLE]

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Filter

## Official Links
*   **Manual:** [Fruity Filter Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Filter.htm)

## Source Log
1.  **[SRC: IL-MAN]:** Reference for the state-variable filter types (LP/HP/BP), the 2x oversampling function, and the legacy UI logic.
2.  **[SRC: REPUTABLE]:** SeamlessR (SVF Theory). Referenced for the "whistling" resonance characteristics and the benefits of oversampling during automation.
3.  **[SRC: REPUTABLE]:** Sound On Sound (The SVF Secret). Reference for the "simultaneous output" behavior of state-variable filters and their organic tonal character.

## Coverage Checklist
- [x] State Variable Filter Mental Model
- [x] 2x Oversampling Reference
- [x] Telephone Effect Workflow
- [x] Resonant Sweep Workflow
- [x] 5 Vibe Targets
- [x] Free Filter vs Fruity Filter comparison
- [x] High-Resonance Volume Warnings

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity Filter (Urban Prod)

## Vibe 1: The "Muffled" Interlude
*   **Sound:** Dark, distant, "next room" effect.
*   **Key Move:** LP Mode + 500Hz Cutoff + 0% Resonance + 2x mode ON.

## Vibe 2: The "Cyber" Acid Squelch
*   **Sound:** Sharp, vocal-like, metallic.
*   **Key Move:** BP Mode + 80% Resonance + Fast Cutoff Automation.

## Vibe 3: The "Retro" Radio Vocal
*   **Sound:** Thin, nasal, lo-fi.
*   **Key Move:** BP Mode + 1.5kHz Cutoff + 20% Resonance.

## Vibe 4: The "Shimmering" Riser
*   **Sound:** Bright, clean, escalating.
*   **Key Move:** HP Mode + 2x mode ON + Automated Cutoff (0 to 100%).

```

---

## FILE: 04-Reference\oversampling-benefits.md

```markdown
# Reference: Oversampling Benefits (Fruity Filter)

Fruity Filter is one of the few legacy plugins with a dedicated oversampling switch. Here is why it matters for your mix.

## 1. What is Aliasing?
When a digital filter peak (Resonance) moves very fast, it can create frequencies that the computer cannot represent. These "fold back" into the audible range as harsh, metallic noise.

## 2. How 2x Mode Fixes It
*   **Action:** It doubles the internal sample rate (e.g., from 44.1kHz to 88.2kHz).
*   **Result:** The "errors" are pushed far above the range of human hearing, and then filtered out. 
*   **Audible Difference:** High-frequency sweeps sound "smooth" and "analog" rather than "crunchy" and "digital."

## 3. When to use it
*   **Risper/Drops:** Mandatory.
*   **High Resonance:** Mandatory.
*   **Subtle Tone Shaping:** Optional (Save CPU). [SRC: REPUTABLE]

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Fruity Filter Mechanics

## 1. State Variable Topology

*   **Definition:** A filter design that solves a differential equation relative to state variables.
*   **Outputs:** It provides LP, BP, and HP from the same mathematical loop.
*   **Slope:** Fixed at **12dB/Octave**.

## 2. Phase Cancellation (The Notch)

*   **Math:** `Notch = LowPas + HighPass`.
*   **Observation:** If you turn up both LP and HP knobs, you will see a dip at the cutoff frequency.
*   **Depth:** The depth of this notch depends on the phase alignment. In digital SVF implementations, the notch is usually perfect.

## 3. Oversampling (x2)

*   **Nyquist:** Filters can become unstable or warp as they approach the Nyquist frequency (half the sample rate).
*   **Solution:** Oversampling processes audio at 2x rate, pushing the Nyquist limit higher, allowing the filter to operate cleanly in the audible high-end (15kHz-20kHz) without "cramping".

## 4. DC Offset (Center)

*   **Artifacts:** Highly resonant filters with fast modulation can produce a low-frequency bias (the waveform moves off the center line).
*   **Fix:** The **Center** switch likely activates a High Pass filter at ~5Hz to strip this DC offset, preserving headroom.

```

---

