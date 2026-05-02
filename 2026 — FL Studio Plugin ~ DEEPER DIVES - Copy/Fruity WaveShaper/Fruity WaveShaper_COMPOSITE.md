# Fruity WaveShaper - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity WaveShaper - Precision Distortion Graph

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██╗    ██╗ █████╗ ██╗   ██╗███████╗    ███████╗██╗  ██╗ █████╗ ██████╗ ███████╗██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██║    ██║██╔══██╗██║   ██║██╔════╝    ██╔════╝██║  ██║██╔══██╗██╔══██╗██╔════╝██╔══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║ █╗ ██║███████║██║   ██║█████╗      ███████╗███████║███████║██████╔╝█████╗  ██████╔╝
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║███╗██║██╔══██║╚██╗ ██╔╝██╔══╝      ╚════██║██╔══██║██╔══██║██╔═══╝ ██╔══╝  ██╔══██╗
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ╚███╔███╔╝██║  ██║ ╚████╔╝ ███████╗    ███████║██║  ██║██║  ██║██║     ███████╗██║  ██║
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝        ╚══╝╚══╝ ╚═╝  ╚═╝  ╚═══╝  ╚══════╝    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Waveshaper / Distortion
**Category:** Effect / Distortion
**Official Manual:** [Image-Line Fruity WaveShaper Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20WaveShaper.htm)

---

## 🎯 What is Fruity WaveShaper?

Fruity WaveShaper is a graph-based distortion effect that maps input signal levels to output levels. By drawing custom curves, you can create anything from subtle analog-style saturation to extreme digital destruction. It is the most precise distortion tool in FL Studio, allowing for "Hard Clipping," "Soft Clipping," and "Bit Crushing" all within a single interface.

**Key Capabilities:**
- **Spline-Based Graph:** Intuitive control over the transfer function.
- **Unipolar/Bipolar Modes:** Process the full wave or positive/negative halves independently.
- **Oversampling:** Reduces aliasing artifacts during extreme distortion.
- **Pre/Post Gain:** Standard gain staging for driving the curve.
- **HQ Mode:** Ensures processing even at extremely low levels.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **distortion-curves-visualized.md**
3. Create **parameter-cheat-sheet.md**
4. Apply to a Sine wave and observe how different graph shapes create different harmonics.

### For Sound Designers:
1. Study **asymmetric-distortion-design.md** (Bipolar mode)
2. Review **creating-soft-limiters.md**
3. Learn **digital-screams-and-overtones.md**

### For Mix Engineers:
1. Study **subtle-harmonic-saturation.md**
2. Review **taming-transients-with-curves.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Pre:** Input drive.
  - **Mix:** Dry/Wet balance.
  - **Post:** Output level.
  - **Center:** DC offset removal.
  - **Unipolar/Bipolar:** Graph mode switch.

- [ ] **distortion-curves-visualized.md**
  - **Linear (45°):** Clean signal.
  - **Hard Clip:** Horizontal line at top.
  - **Soft Clip:** Rounded curve at top.
  - **Bitcrush:** Stepped "staircase" shape.

#### 02-Data/parameters/
- [ ] **waveshaper-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity WaveShaper",
    "category": "Distortion",
    "parameters": [
      {
        "name": "Oversample",
        "type": "selector",
        "options": ["Off", "2x", "4x", "8x", "16x"],
        "description": "Reduces aliasing high-frequency noise"
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **808-saturation-guide.md**
  - Drawing a subtle "S" curve for warmth.
  - Driving the "Pre" knob until the sub "hums."

- [ ] **hard-style-kick-distortion.md**
  - Using complex, non-linear shapes.
  - Balancing Post-gain to maintain impact.

- [ ] **asymmetric-clipping.md**
  - Using Bipolar mode.
  - Shaping the top half of the wave differently than the bottom for "tube" character.

#### 03-Workflows/by-context/
- [ ] **vocal-grit-layering.md**
- [ ] **parallel-destruction-bus.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **math-of-waveshaping.md**
  - Transfer functions explained.
  - Odd vs Even harmonic generation.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Understanding the Graph

**Tasks:**
1. Put WaveShaper on a Sine wave
2. Draw a "Staircase" and listen for bit-reduction
3. Enable Bipolar mode and draw a "Z" shape
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Why does the sound disappear when the line is flat on the bottom?
- What does the "HQ" button actually do for the CPU?

### Phase 2: High-Fidelity Grit (Week 2)
**Goal:** Alias-Free Distortion

**Tasks:**
1. Compare 1x oversampling vs 16x on a high-pitched lead
2. Listen for "digital mirrors" (aliasing) in the high end
3. Create subtle-harmonic-saturation.md

---

## 📊 Plugin Specifications to Document

### Engine
- Max Oversampling (16x)
- Latency (0 ms, or PDC with oversampling?)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do I make it a Limiter? (Draw a horizontal line starting at the desired threshold).
2. What is the difference between Unipolar and Bipolar? (Unipolar mirrors the shape; Bipolar allows independent half-wave shaping).

---

## 🔗 Cross-Reference with Other Plugins

Fruity WaveShaper is often used with:
- **Fruity Soft Clipper** (Simple version)
- **Distructor** (Integrated module)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity WaveShaper/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── distortion-curves-visualized.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── waveshaper-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── 808-saturation-guide.md
│   │   └── asymmetric-clipping.md
│
└── 04-Reference/
    └── math-of-waveshaping.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity WaveShaper Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20WaveShaper.htm)
- [Fruity WaveShaper Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_WaveShaper_tutorials.htm)
- [Fruity WaveShaper Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+waveshaper+tutorial)

### Community Resources
- [Fruity WaveShaper Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+waveshaper&restrict_sr=1)
- [Fruity WaveShaper User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity WaveShaper Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Waveshaping Fundamentals" - Understanding transfer functions
- "Distortion and Saturation Techniques" - Advanced distortion approaches
- "Harmonic Generation in Audio" - Understanding odd/even harmonics

### Advanced Techniques
- **Transfer Function Design:** Creating custom distortion curves
- **Bipolar vs Unipolar:** Understanding the differences
- **Oversampling Applications:** Using oversampling to reduce artifacts

---

## 📚 In-Depth Technical Analysis

### Waveshaping Algorithm
Fruity WaveShaper implements a sophisticated waveshaping algorithm:
- **Transfer Function:** Maps input amplitude to output amplitude
- **Spline-Based Graph:** Intuitive curve drawing interface
- **Harmonic Generation:** Creates odd and even harmonics based on curve shape
- **Non-Linear Processing:** Complex transfer functions for unique sounds
- **Real-time Processing:** Immediate response to curve changes

### Unipolar vs Bipolar Modes
The plugin offers two distinct processing modes:

**Unipolar Mode:**
- **Symmetric Processing:** Both positive and negative halves processed identically
- **Even Harmonic Generation:** Creates predominantly even-order harmonics
- **Tube-like Character:** Emulates tube saturation characteristics
- **Smooth Distortion:** Creates warmer, more musical distortion
- **Consistent Response:** Same processing for positive and negative signals

**Bipolar Mode:**
- **Independent Processing:** Positive and negative halves processed separately
- **Asymmetric Distortion:** Allows different processing for positive and negative signals
- **Odd Harmonic Generation:** Creates predominantly odd-order harmonics
- **Transistor-like Character:** Emulates solid-state distortion
- **Flexible Response:** Different processing for positive and negative signals

### Oversampling System
The oversampling feature reduces aliasing artifacts:
- **2x Oversampling:** Doubles internal processing rate
- **4x Oversampling:** Quadruples internal processing rate
- **8x Oversampling:** 8x internal processing rate
- **16x Oversampling:** 16x internal processing rate
- **Aliasing Reduction:** Minimizes high-frequency artifacts during extreme distortion

### Signal Processing Chain
The internal architecture processes audio as follows:
- **Input Stage:** Signal level monitoring and adjustment
- **Pre-Gain:** Input amplification for driving the curve
- **Transfer Function:** Core waveshaping operation
- **Oversampling:** Optional high-rate processing
- **Post-Gain:** Output level adjustment
- **Output Stage:** Final signal routing and monitoring

### Harmonic Generation Principles
The waveshaping process generates harmonics based on curve characteristics:
- **Linear Curves:** Generate minimal additional harmonics
- **Soft Clipping:** Generate even-order harmonics for warmth
- **Hard Clipping:** Generate odd-order harmonics for aggression
- **Asymmetric Curves:** Generate complex harmonic structures
- **Stepped Curves:** Generate aliasing artifacts similar to bitcrushing

## 🎛️ Parameter Deep Dive

### Pre-Gain Control
- **Function:** Input amplification to drive the transfer function
  - Range: Negative to positive values (typically -24dB to +24dB)
  - Effect: Controls how much the signal exceeds the transfer curve
  - Use for: Setting initial drive level into the distortion
  - Pro tip: Higher values create more harmonic content
- **Behavior:**
  - Low values: Minimal curve interaction, clean signal
  - Medium values: Noticeable harmonic addition
  - High values: Aggressive harmonic generation
  - Pro tip: Start low and increase gradually to avoid harshness
- **Applications:**
  - Subtle saturation: Low values for warmth
  - Moderate distortion: Medium values for character
  - Aggressive effects: High values for extreme distortion
  - Bitcrushing: Very high values for digital artifacts
  - Pro tip: Use with oversampling to prevent aliasing

### Mix Control
- **Function:** Dry/wet balance for parallel processing
  - Range: 0% (dry) to 100% (wet)
  - Effect: Balances original and processed signals
  - Use for: Maintaining dynamics while adding character
  - Pro tip: Essential for transparent processing
- **Behavior:**
  - 0%: Completely dry signal
  - 50%: Equal dry and wet signals
  - 100%: Completely processed signal
  - Pro tip: Use for parallel processing techniques
- **Applications:**
  - Subtle enhancement: Low mix (10-30%) for gentle addition
  - Moderate processing: Medium mix (30-70%) for noticeable effect
  - Aggressive processing: High mix (70-100%) for full effect
  - Parallel processing: Various mix levels for dynamic control
  - Pro tip: Use for maintaining dynamics while adding character

### Post-Gain Control
- **Function:** Output level compensation after processing
  - Range: Negative to positive values (typically -24dB to +24dB)
  - Effect: Adjusts final output level after distortion
  - Use for: Compensating for level changes from distortion
  - Pro tip: Essential for maintaining consistent levels
- **Behavior:**
  - Negative values: Reduce output level
  - Positive values: Increase output level
  - Pro tip: Use to match processed and unprocessed levels
- **Applications:**
  - Level matching: Adjust to match original signal
  - Gain staging: Compensate for distortion gain
  - Mix integration: Adjust to fit in mix
  - Master bus: Careful with level changes
  - Pro tip: Use for gain compensation after processing

### Center Control
- **Function:** DC offset removal
  - Range: On/Off (typically)
  - Effect: Removes DC bias from the signal
  - Use for: Preventing DC offset issues
  - Pro tip: Essential for preventing unwanted DC content
- **Behavior:**
  - On: Removes DC offset from signal
  - Off: Preserves DC offset in signal
  - Pro tip: Keep enabled to prevent DC issues
- **Applications:**
  - DC removal: Prevents DC offset accumulation
  - Clean processing: Maintains signal integrity
  - Mix safety: Prevents DC issues in mixes
  - Master processing: Essential for master bus
  - Pro tip: Always use for professional results

### Oversampling Controls
- **Function:** Internal processing rate multiplier
  - Options: Off, 2x, 4x, 8x, 16x
  - Effect: Reduces aliasing artifacts during extreme distortion
  - Use for: High-quality processing during extreme settings
  - Pro tip: Higher values reduce aliasing but increase CPU usage
- **Behavior:**
  - Off: Standard sample rate processing
  - Higher values: Increased processing rate, reduced aliasing
  - Pro tip: Use higher values for extreme curves
- **Applications:**
  - Anti-aliasing: Higher values for extreme curves
  - Quality preservation: Use for high-quality results
  - CPU management: Balance quality with performance
  - Extreme processing: Essential for aggressive settings
  - Pro tip: Use 4x or 8x for aggressive distortion

## 🎼 Sound Design Applications

### Saturation Applications
Using WaveShaper for harmonic enhancement:

**Tube Saturation Simulation:**
- **Unipolar Mode:** For symmetric, even-harmonic generation
- **Soft Clipping Curve:** Gentle saturation curve
- **Low Drive:** Subtle harmonic addition
- **Creates warmth and musicality**
- **Essential for analog-style enhancement**

**Transistor Distortion:**
- **Bipolar Mode:** For asymmetric, odd-harmonic generation
- **Hard Clipping Curve:** Sharp saturation curve
- **Medium to High Drive:** For aggressive character
- **Creates solid-state distortion**
- **Perfect for modern, aggressive sounds**

**Bitcrushing Simulation:**
- **Stepped Curves:** Create staircase transfer functions
- **High Drive:** Maximum input amplification
- **No Oversampling:** Preserve aliasing artifacts
- **Creates digital degradation**
- **Essential for lo-fi and retro sounds**

### Creative Distortion
Using WaveShaper for experimental applications:

**Asymmetric Distortion:**
- **Bipolar Mode:** For independent positive/negative processing
- **Different Curves:** Draw different shapes for positive and negative halves
- **Creates complex harmonic structures**
- **Perfect for unique distortion characteristics**
- **Essential for experimental sound design**

**Dynamic Distortion:**
- **Curve Automation:** Automate the transfer function over time
- **Creates evolving distortion characteristics**
- **Perfect for evolving textures**
- **Essential for dynamic sound design**
- **Use for expressive distortion**

**Harmonic Enhancement:**
- **Subtle Curves:** Gentle modifications to transfer function
- **Adds harmonic content without harshness**
- **Perfect for musical enhancement**
- **Essential for subtle character addition**
- **Use for professional mixing**

### Mix Enhancement
Using WaveShaper for mixing applications:

**Bus Processing:**
- **Subtle Saturation:** Low drive settings for bus enhancement
- **Parallel Processing:** Use mix control for transparency
- **Maintains dynamics while adding character**
- **Essential for professional mixing**
- **Perfect for bus glue**

**Vocal Enhancement:**
- **Gentle Saturation:** Low drive for vocal warmth
- **Tube-like Curves:** Unipolar mode for even harmonics
- **Adds presence and character**
- **Essential for vocal enhancement**
- **Perfect for subtle vocal processing**

**Bass Enhancement:**
- **Harmonic Addition:** Adds low-end harmonics
- **Maintains fundamental:** Careful curve design preserves low-end
- **Adds punch and presence:** Subtle saturation for bass
- **Essential for bass enhancement**
- **Perfect for sub-bass harmonics**

## 🧪 Experimental Techniques

### Advanced Waveshaping Applications
Creative uses of WaveShaper's capabilities:

**Custom Transfer Functions:**
- **Draw unique curves:** Create non-standard distortion characteristics
- **Harmonic sculpting:** Shape harmonic content precisely
- **Frequency-dependent distortion:** Create complex transfer functions
- **Perfect for experimental sound design**
- **Essential for unique distortion**

**Curve Automation:**
- **Morph curves over time:** Change distortion characteristics dynamically
- **Create evolving textures:** Use automation for changing distortion
- **Dynamic expression:** Automate for musical expression
- **Perfect for evolving arrangements**
- **Essential for dynamic sound design**

**Multi-Stage Processing:**
- **Cascade multiple instances:** Create complex harmonic structures
- **Different curves per stage:** Apply different processing in sequence
- **Build sophisticated distortion chains**
- **Perfect for advanced sound design**
- **Essential for complex processing**

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Pre/Post Gain Techniques:**
- **Drive Compensation:** Use post-gain to compensate for pre-gain
- **Dynamic Processing:** Adjust gains for different dynamic responses
- **Level Matching:** Match levels for A/B comparison
- **Perfect for transparent processing**
- **Essential for professional results**

**Mix Control Applications:**
- **Parallel Saturation:** Use low mix for subtle enhancement
- **Dynamic Blending:** Automate mix for changing character
- **Transparency Control:** Adjust for appropriate transparency
- **Perfect for mixing applications**
- **Essential for professional processing**

**Oversampling Optimization:**
- **Quality vs Performance:** Balance oversampling for quality/performance
- **Extreme Settings:** Use high oversampling for aggressive curves
- **CPU Management:** Optimize for system performance
- **Perfect for high-quality processing**
- **Essential for artifact-free results**

## 🎚️ Workflow Optimization

### Distortion Design Workflows
Efficient approaches to using WaveShaper for distortion:

**Curve Creation:**
- **Template Approach:** Start with basic curve templates
- **Incremental Modification:** Gradually adjust for desired effect
- **Harmonic Analysis:** Use spectrum analyzer to verify harmonic content
- **Essential for consistent results**
- **Pro tip: Use reference tracks for comparison**

**Gain Staging:**
- **Pre-Gain Optimization:** Set appropriate drive levels
- **Post-Gain Compensation:** Match levels after processing
- **Mix Integration:** Balance processed and unprocessed signals
- **Essential for professional results**
- **Pro tip: Use for transparent processing**

**Quality Management:**
- **Oversampling Selection:** Choose appropriate oversampling for settings
- **CPU Optimization:** Balance quality with performance needs
- **Artifact Prevention:** Use oversampling to prevent aliasing
- **Essential for high-quality results**
- **Pro tip: Use higher oversampling for extreme curves**

### Integration Workflows
Working with other plugins and tools:

**Effects Integration:**
- **Pre-EQ:** Use EQ before for frequency-specific processing
- **Post-EQ:** Use EQ after for tone shaping
- **Reverb Integration:** Apply reverb to distorted signals
- **Delay Integration:** Create rhythmic patterns with distortion
- **Pro tip: Use for comprehensive processing chains**

**Dynamics Integration:**
- **Compressor Integration:** Use before or after compression
- **Limiter Integration:** Apply limiting to distorted signals
- **Gate Integration:** Use gates for noise control
- **Pro tip: Use for comprehensive dynamics control**

**Analysis Integration:**
- **Spectrum Analysis:** Use with spectrum analyzers for feedback
- **Reference Comparison:** Compare with reference tracks
- **Level Monitoring:** Monitor input and output levels
- **Pro tip: Use for informed processing decisions**

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Bass Enhancement:** Adding harmonics to bass sounds
- **Lead Processing:** Adding character to lead synths
- **Drum Enhancement:** Adding punch to drums
- **Energy Management:** Using distortion for track energy
- **Build-up Effects:** Creating tension with distortion automation

### Hip-Hop and R&B
- **Vocal Enhancement:** Adding warmth and character to vocals
- **808 Processing:** Adding harmonics to sub-bass
- **Drum Enhancement:** Adding character to drums
- **Mix Enhancement:** Using saturation for mix glue
- **Creative Effects:** Adding unique character to elements

### Rock and Metal
- **Guitar Distortion:** Creating tube-like saturation
- **Bass Enhancement:** Adding grit to bass lines
- **Drum Processing:** Adding character to drums
- **Mix Enhancement:** Using saturation for mix cohesion
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Processing:** Creating evolving textures with distortion
- **Harmonic Enhancement:** Adding subtle harmonic content
- **Experimental Distortion:** Pushing boundaries of distortion
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity WaveShaper works well with various effects:
- **Reverb:** Adding space to distorted sounds
- **Delay:** Creating rhythmic patterns with distortion
- **Chorus:** Adding width to distorted sounds
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of distorted signals

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
Fruity WaveShaper was developed as a precision distortion tool:
- Created to provide flexible waveshaping capabilities
- Designed for both subtle and aggressive distortion
- Developed with sound design and mixing in mind
- Intended to complement other distortion plugins with graph-based control

### Evolution Through FL Studio Versions
- Initially introduced with basic waveshaping capabilities
- Enhanced with bipolar/unipolar modes
- Improved with oversampling options
- Expanded with more sophisticated algorithms

### Impact on Music Production
Fruity WaveShaper has influenced music production by:
- Providing accessible waveshaping
- Enabling precise harmonic control
- Facilitating creative distortion techniques
- Supporting various musical genres with flexible distortion

## 🧠 Advanced Processing Techniques

### Waveshaping Mastery
Advanced techniques for waveshaping:
- **Transfer Function Design:** Creating custom distortion curves
- **Harmonic Control:** Managing odd vs even harmonic generation
- **Dynamic Distortion:** Creating responsive distortion
- **Frequency-Specific:** Targeting specific frequency ranges
- **Spectral Processing:** Combining with spectral tools

### Curve Design
Advanced curve design techniques:
- **Soft Clipping:** Gentle saturation curves for warmth
- **Hard Clipping:** Aggressive curves for harmonic complexity
- **Asymmetric Curves:** Different positive/negative processing
- **Stepped Curves:** Creating bitcrushing artifacts
- **Smooth Curves:** Artifact-free harmonic generation

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique distorted textures
- **Atmospheric Processing:** Building ambient distorted effects
- **Rhythmic Effects:** Creating rhythmic distortion patterns
- **Spatial Manipulation:** Creating immersive distorted environments
- **Experimental Processing:** Pushing boundaries of distortion

## 📊 Performance Considerations

### CPU Usage
Managing WaveShaper's impact on system performance:
- **Oversampling Impact:** Higher oversampling increases CPU usage
- **Real-Time Performance:** Generally optimized for live performance
- **Instance Count:** Multiple instances multiply CPU usage
- **Curve Complexity:** Complex curves may have minimal impact
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Aliasing Prevention:** Using oversampling to reduce artifacts
- **Harmonic Integrity:** Preserving musical harmonic content
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output
- **Signal Integrity:** Preserving original signal quality

### System Integration
Optimizing WaveShaper within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimal audio latency

## 🛠️ Troubleshooting Common Issues

### Distortion Problems
- **Harsh Sound:** Increase oversampling or adjust curve
- **Loss of Clarity:** Reduce drive or adjust curve shape
- **Phase Issues:** Check stereo field and width settings
- **Excessive Harmonics:** Use filtering or adjust curve
- **Muddy Low End:** Adjust curve or use filtering to clean

### Technical Issues
- **High CPU Usage:** Reduce oversampling or optimize parameters
- **Latency Issues:** Check oversampling settings
- **Clipping:** Reduce input gain or increase output headroom
- **Artifacts:** Increase oversampling or adjust curve
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Adjust curve shape or drive amount
- **Lack of Character:** Increase drive or adjust curve for more harmonics
- **Poor Integration:** Use parallel processing or EQ to blend
- **Overpowering:** Reduce drive or use EQ to balance
- **Lack of Control:** Use automation for dynamic changes

## 🎚️ Advanced Configuration

### Custom Curves
Creating and managing custom waveshaping configurations:
- **Saturation Curves:** Optimized for harmonic enhancement
- **Distortion Curves:** Configured for aggressive processing
- **Creative Curves:** Set up for sound design applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple WaveShaper instances effectively:
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
- **FL Studio Forums:** Discussions about WaveShaper techniques
- **Reddit Groups:** Sharing waveshaping techniques and curves
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced waveshaping techniques
- **Written Guides:** In-depth articles on transfer functions
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Curve Libraries:** Websites hosting WaveShaper configurations
- **Technique Sharing:** Platforms for sharing processing methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Manually replicate the Fruity Soft Clipper sound using WaveShaper
- [ ] Create a convincing "Bitcrush" effect using only the graph editor
- [ ] Explain why Bipolar mode sounds more "analog" than Unipolar
- [ ] Design custom transfer functions for specific harmonic content
- [ ] Use oversampling effectively to prevent aliasing artifacts
- [ ] Apply parallel processing techniques for transparent enhancement
- [ ] Create asymmetric distortion with Bipolar mode
- [ ] Troubleshoot distortion artifacts and harmonic issues effectively
- [ ] Integrate WaveShaper into efficient mixing workflows
- [ ] Create complex harmonic enhancement using curve design

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity WaveShaper

## Purpose & Identity
Fruity WaveShaper is a **graph-based distortion engine**. Its primary identity is a precision transfer-function mapper. It allows you to draw an exact curve that dictates how input volume maps to output volume. This makes it the most surgical tool in FL Studio for creating saturation, clipping, and digital destruction. [SRC: IL-MAN]

## 60-Second Mental Model
Think of it as a "Level Translator."
- If the line is a straight 45-degree angle, the sound is clean (In = Out).
- If you flatten the top of the line, you are **Clipping** the sound.
- If you make the line a "staircase," you are **Bitcrushing** the sound.
You are physically reshaping the waveform's peaks with your mouse.

## Hip-Hop / R&B Context
- **Custom 808 Grit:** Drawing a curve that only distorts the loudest peaks of an 808, keeping the sub-fundamental clean but adding "buzz" to the top (Moody).
- **Vocal Warming:** Using a subtle "S" curve to add tube-like harmonics to an R&B lead vocal (Vibey).
- **Digital Screams:** Using complex, jagged curves on a synth lead to create aggressive, metallic overtones (Psychedelic).

## When To Use
- When you need a **specific type of distortion** that other plugins can't provide.
- When you want to **Hard Clip** a drum bus with 100% precision.
- When you want to **Bitcrush** without using a dedicated bitcrusher plugin.

## When NOT To Use
- **Simple Tasks:** Use **Fruity Soft Clipper** if you just want basic peak rounding; it's faster and uses less CPU.
- **Dynamic Control:** WaveShaper is a static distortion. Use a compressor if you want the volume to change based on timing rather than just amplitude. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity WaveShaper

## UI Tour
1.  **The Graph:** Your "Transfer Function."
    *   **X-Axis:** Input volume (Quiet to Loud).
    *   **Y-Axis:** Output volume.
2.  **Pre-Gain:** Drives the signal into the graph. Higher Pre = more distortion.
3.  **Post-Gain:** Adjusts the volume *after* it leaves the graph. Use this to compensate for loudness increases.
4.  **Oversampling (HQ):** Multiplies the internal sample rate (up to 16x) to prevent aliasing. [SRC: IL-MAN]
5.  **Unipolar/Bipolar Switch:**
    *   **Unipolar (Half-Wave):** Processes the positive and negative sides of the wave the same way.
    *   **Bipolar (Full-Wave):** Allows you to shape the top half and bottom half of the wave independently. [SRC: IL-MAN]

## Signal Flow
1.  **Input:** Audio enters the plugin.
2.  **Pre-Gain:** The signal is boosted or cut before hitting the graph.
3.  **Mapping:** Each sample's volume is checked against the X-axis of the graph and output according to the Y-axis.
4.  **Oversampling:** The signal is filtered to remove digital artifacts (if enabled).
5.  **Post-Gain/Mix:** The final level is adjusted and blended with the dry signal.

## Things Beginners Misunderstand
*   **The Flat Line:** If you draw a horizontal line at the top, you are **Clipping**. If you draw it in the middle, you are drastically lowering the volume.
*   **Pre-Gain vs Graph:** You can achieve the same distortion by either boosting the Pre-Gain or moving the graph points up. Most pros prefer a subtle graph and a high Pre-Gain for better control.
*   **Bipolar Mode:** In Bipolar mode, the center of the graph is "Zero." Everything above is positive voltage, everything below is negative. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity WaveShaper

WaveShaper translates vibes through **Waveform Geometry** and **Harmonic Sculpting**.

## 1. Upbeat (Punchy, Aggressive, Modern)
- **Concept:** "The Hard Ceiling."
- **Levers:**
  - **Graph:** A horizontal line starting at the very top edge.
  - **Pre-Gain:** Drive the input +6dB.
- **Listen For:** A sharp, aggressive "Snap." The transients are flattened instantly, making the drums sound louder and more modern.
- **Don't Do This:** Don't use oversampling if you want the "aliased" high-end grit common in underground trap.

## 2. Psychedelic (Complex, Warped, Metallic)
- **Concept:** "Asymmetric Folding."
- **Levers:**
  - **Mode:** Bipolar (Two-sided graph).
  - **Graph:** Draw a "Z" shape on the top half and an "S" shape on the bottom.
- **Listen For:** Strange, ringing overtones that sound "alien" or synthetic. The asymmetry creates a disorienting harmonic series.

## 3. Spacey (Dense, Textured, Saturated)
- **Concept:** "The Dense Reverb."
- **Levers:**
  - **Placement:** AFTER a Reverb plugin.
  - **Graph:** A very gentle "Soft Clip" curve.
- **Listen For:** The reverb tail sounding "thicker" and more filled-out. It makes the digital space feel like it has physical "air" and weight.

## 4. Vibey (Warm, Analog, Smooth)
- **Concept:** "The Tube Simulator."
- **Levers:**
  - **Mode:** Unipolar.
  - **Graph:** A smooth, rounded "S" curve.
  - **Oversampling:** 8x or 16x (to keep it clean).
- **Listen For:** Gentle harmonic saturation that adds a "glow" to vocals or keys. It mimics the warmth of a high-end analog preamp.

## 5. Moody (Crushed, Lo-Fi, Distressed)
- **Concept:** "The Staircase Crush."
- **Levers:**
  - **Graph:** Draw a "Staircase" (Stepped) line.
  - **Post-Gain:** Turn down to compensate for harshness.
- **Listen For:** A digital, "crunchy" texture that sounds like 8-bit audio or a low-quality sample rip. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\curve-design-philosophy.md

```markdown
# Curve Design Philosophy

## The Art of Drawing Distortion

Fruity WaveShaper's graph editor is both a technical tool and a creative instrument. Understanding curve design philosophy helps you move from random experimentation to intentional sonic sculpting.

[SRC: IL-MAN] The spline-based graph editor allows drawing custom transfer functions with precision control over the input-to-output mapping.

## Curve Archetypes

### 1. The Gentle Saturation (S-Curve)
`\`\`
Output
  1.0│      ╭──────
     │    ╭╯
  0.5│  ╭╯
     │ ╭╯
  0.0├●─────────────────
     │╯
 -0.5│
     │
 -1.0│
     └──────────────────
       -1.0  0.0  1.0   Input
`\`\`

**Characteristics:**
- Soft compression of peaks
- Gradual transition zones
- Even harmonic emphasis
- Analog/tube character

**Use When:** You want warmth without obvious distortion

### 2. The Hard Limiter (Plateau)
`\`\`
Output
  1.0│███████████████
     │
  0.5│
     │
  0.0├────────●───────
     │
 -0.5│
     │
-1.0│████████████████
     └──────────────────
       -1.0  0.0  1.0   Input
`\`\`

**Characteristics:**
- Sharp threshold behavior
- Zero transients above threshold
- Aggressive odd harmonics
- Digital/punchy character

**Use When:** You need maximum control or aggressive bite

### 3. The Soft Limiter (Rounded Plateau)
`\`\`
Output
  1.0│      ╭──────╮
     │    ╭╯      ╰╮
  0.5│  ╭╯          ╰╮
     │ ╭╯              ╰╮
  0.0├●───────────────────
     │╯
 -0.5│
     │
 -1.0│
     └──────────────────
       -1.0  0.0  1.0   Input
`\`\`

**Characteristics:**
- Gradual limiting
- Controlled peak reduction
- Mix of harmonics
- Smooth yet controlled

**Use When:** You want loudness without harshness

### 4. The Bitcrusher (Staircase)
`\`\`
Output
  1.0│██████████████████
 0.75│        ███████████
 0.50│  █████████████████
 0.25│        ███████████
  0.0├●──────────────────
-0.25│
-0.50│
-0.75│
 -1.0│██████████████████
      └──────────────────
        -1.0  0.0  1.0   Input
`\`\`

**Characteristics:**
- Quantized steps
- Digital artifacts and aliasing
- Extreme harmonic complexity
- Lo-fi/creative destruction

**Use When:** You want intentional degradation

[SRC: IL-MAN] The graph supports unlimited points for complex curve shapes including stepped "bitcrush" patterns.

## Design Principles

### Principle 1: Smoothness = Musicality
**Sharp corners** in curves create high-frequency harmonics that can sound harsh.
**Smooth curves** create more even, musical distortion.

**Rule:** Round your corners unless you want aggressive edge.

### Principle 2: Threshold is Everything
Where your curve **deviates from diagonal** determines when distortion kicks in.

**Earlier deviation** = More distortion (good for character)
**Later deviation** = Less distortion (good for headroom)

### Principle 3: Symmetry Controls Character
- **Symmetric curves** (Unipolar): Even harmonics, warmth
- **Asymmetric curves** (Bipolar): Complex harmonics, edge

### Principle 4: Pre-Gain is Your Friend
Don't flatten the curve—**drive the signal into the curve** using Pre gain.
This maintains curve flexibility while controlling distortion amount.

## Practical Design Workflows

### Workflow 1: Analog-Style Saturation
1. Draw soft S-curve with gentle compression
2. Use Unipolar mode
3. Add Pre gain to taste (+6 to +12dB)
4. Compensate with Post gain (-6 to -12dB)
5. Mix at 30-50% for parallel processing

### Workflow 2: Hard Clipper/Limiter
1. Draw horizontal line at desired threshold (0.7-0.8)
2. Use Unipolar mode
3. Add Pre gain to push signals into the ceiling
4. Mix at 100% for full limiting

### Workflow 3: Asymmetric Character
1. Switch to Bipolar mode
2. Shape positive half with soft curve
3. Shape negative half with harder curve (or vice versa)
4. Adjust Pre gain to balance distortion
5. Mix to taste

[SRC: IL-MAN] The spline interpolation ensures smooth transitions between curve points for artifact-free distortion.

## Common Curve Mistakes

### Mistake 1: Flat Curve at Bottom
**Problem:** Signal disappears when input is negative
**Fix:** Ensure curve passes through (0,0) and maintains unity gain slope near center

### Mistake 2: Over-Compression
**Problem:** Curve too flat across wide range = "squashed" sound
**Fix:** Limit flat sections to only the loudest peaks

### Mistake 3: Extreme Asymmetry
**Problem:** Positive and negative halves too different = phase issues
**Fix:** Keep some relationship between halves for stability

## Curve Library Quick Reference

| Goal | Mode | Shape | Pre Gain | Mix |
|------|------|-------|----------|-----|
| 808 Warmth | Unipolar | Soft S-curve | +8dB | 40% |
| Vocal Grit | Bipolar | Asymmetric soft | +6dB | 25% |
| Drum Punch | Unipolar | Hard clip | +12dB | 60% |
| Mix Glue | Unipolar | Gentle saturation | +4dB | 20% |
| Creative Destroy | Bipolar | Random complex | +20dB | 100% |

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Concepts\oversampling-and-aliasing.md

```markdown
# Oversampling and Aliasing

## The Aliasing Problem

When you heavily distort a signal, you create new frequencies (harmonics). Some of these frequencies exceed the Nyquist limit (half your sample rate). When this happens, those frequencies "fold back" into the audible range as unwanted artifacts—this is **aliasing**.

`\`\`
Sample Rate: 44.1kHz → Nyquist: 22.05kHz

Original:    ████████
Harmonics:         ████████ (above 22kHz)
                    ↓ ALIASING
Folded back:             ████ (unwanted mirror)
`\`\`

[SRC: IL-MAN] Oversampling increases the internal processing rate to reduce aliasing artifacts that occur during extreme distortion.

## How Oversampling Works

### The Math
- **2x:** Processes at 88.2kHz (Nyquist: 44.1kHz)
- **4x:** Processes at 176.4kHz (Nyquist: 88.2kHz)
- **8x:** Processes at 352.8kHz (Nyquist: 176.4kHz)
- **16x:** Processes at 705.6kHz (Nyquist: 352.8kHz)

Higher internal Nyquist = more "room" for harmonics before aliasing occurs.

### The Trade-Offs

| Setting | Quality | CPU Usage | Latency | Best For |
|---------|---------|-----------|---------|----------|
| Off | Standard | Minimal | 0 | Subtle saturation |
| 2x | Improved | Low | Minimal | Light distortion |
| 4x | High | Moderate | Minimal | Standard distortion |
| 8x | Very High | High | Slight | Heavy distortion |
| 16x | Maximum | Very High | Noticeable | Extreme destruction |

[SRC: IL-MAN] Higher oversampling values reduce CPU efficiency but improve audio quality during aggressive distortion.

## When You Need Oversampling

### Always Use Oversampling (4x minimum):
- **Hard clipping** at high drive levels
- **Bitcrushing** effects (staircase curves)
- **High-frequency content** being distorted (leads, cymbals)
- **Multiple WaveShaper instances** in series

### Can Skip Oversampling:
- **Very subtle** saturation (S-curve, low drive)
- **Low-frequency sources** (808s, kicks below 100Hz)
- **Unipolar mode** with gentle curves
- **Mix bus** applications with conservative settings

## Hearing Aliasing: Training Your Ears

Aliasing typically manifests as:
1. **"Digital shimmer"** on high notes
2. **Unpleasant overtones** that don't belong
3. **Harshness** that EQ can't fix
4. **Chime-like artifacts** on transient edges

**Test:** Put WaveShaper on a pure sine wave at 5kHz. Use hard clipping with high drive.
- **No oversampling:** You'll hear extra "bells" and artifacts
- **16x oversampling:** Clean harmonics only

[SRC: IL-MAN] Aliasing appears as unwanted high-frequency artifacts that sound "metallic" or "digital" compared to the desired harmonic content.

## CPU Optimization Strategy

### Project-Wide Approach
1. **Mixing stage:** Use 2x-4x for most instances
2. **Critical tracks only:** Use 8x-16x (leads, vocals)
3. **Bounce/freezing:** Use high oversampling, then render
4. **Final mix:** Use conservative settings on master bus

### Smart Instance Management
`\`\`
Track Level:    2x-4x (acceptable quality)
Bus Level:      4x-8x (higher stakes)
Master Bus:     4x (balance quality/CPU)
Experimental:   8x-16x (when sound design)
`\`\`

## Safety Rules for Aliasing Prevention

1. **When in doubt, use 4x** — good balance of quality/performance
2. **High drive = High oversampling** — protect against artifacts
3. **Test with sine waves** — reveals aliasing clearly
4. **Monitor high frequencies** — aliasing lives there
5. **Export with oversampling** — final renders should be clean

[SRC: IL-MAN] The Oversample selector offers 2x, 4x, 8x, and 16x options to balance quality against CPU usage.

## Common Mistakes

### Mistake 1: Never Using Oversampling
- **Result:** "Cheap" sounding distortion
- **Fix:** Use minimum 4x for noticeable distortion

### Mistake 2: Always Using 16x
- **Result:** CPU overload, session crashes
- **Fix:** Match oversampling to the distortion intensity

### Mistake 3: Ignoring Aliasing on Buses
- **Result:** Cumulative artifacts across multiple tracks
- **Fix:** Use 4x-8x on parallel/distortion buses

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Concepts\transfer-function-fundamentals.md

```markdown
# Transfer Function Fundamentals

## What is a Transfer Function?

A transfer function maps input signal amplitude to output amplitude. In Fruity WaveShaper, the graph IS the transfer function—the diagonal line represents the relationship between what goes in and what comes out.

`\`\`
Input Level ─┐
             │    ╭─────╮
      +1.0   │   ╱       ╲    ← Output clipped at +0.8
             │  ╱         ╲
       0.0   ├─●───────────●─  ← Unity gain (no change)
             │╱             ╲
      -1.0   │               ← Output clipped at -0.8
             │
             └────────────────
                -1.0   +1.0   Input Level
`\`\`

[SRC: IL-MAN] The graph diagonal represents unity gain (1:1 mapping). Any deviation creates distortion.

## Curve Shapes and Their Sonic Signatures

### Linear (45° Diagonal)
- **Sound:** Clean, transparent
- **Harmonics:** None (pure signal)
- **Use:** Bypass reference, subtle saturation starting point

### Soft Clip (S-Curve)
- **Sound:** Warm, analog-like
- **Harmonics:** Even-order predominance
- **Use:** 808 warmth, vocal saturation, bus glue

### Hard Clip (Horizontal Plateau)
- **Sound:** Aggressive, punchy
- **Harmonics:** Odd-order predominance
- **Use:** Drum transients, EDM leads, hard distortion

### Bitcrush (Staircase)
- **Sound:** Digital, lo-fi, degraded
- **Harmonics:** Aliasing artifacts, quantization noise
- **Use:** Creative destruction, retro effects

[SRC: IL-MAN] Spline-based graph allows infinite curve variations between these archetypes.

## Harmonic Generation Mechanics

### Symmetric Curves (Unipolar Mode)
- **Mathematical Property:** f(-x) = -f(x)
- **Harmonic Content:** Primarily even-order harmonics
- **Character:** Tube-like, warm, musical
- **Examples:** S-curves, gentle saturation

### Asymmetric Curves (Bipolar Mode)
- **Mathematical Property:** f(-x) ≠ -f(x)
- **Harmonic Content:** Mix of odd and even harmonics
- **Character:** Transistor-like, aggressive, complex
- **Examples:** Different positive/negative shaping

[SRC: IL-MAN] Unipolar mode mirrors the curve for both halves of the waveform. Bipolar allows independent positive/negative half-wave processing.

## Input/Output Mapping Examples

| Input Level | Soft Clip Output | Hard Clip Output | Linear Output |
|-------------|------------------|------------------|---------------|
| -1.0 (full negative) | -0.85 | -0.80 | -1.0 |
| -0.5 | -0.45 | -0.50 | -0.5 |
| 0.0 | 0.0 | 0.0 | 0.0 |
| +0.5 | +0.45 | +0.50 | +0.5 |
| +1.0 (full positive) | +0.85 | +0.80 | +1.0 |

## Key Insight: Pre-Gain Drives the Curve

The **Pre** knob pushes your signal into the curve. Higher pre-gain means:
- More signal hits the non-linear portion
- More harmonic generation
- More distortion/saturation

**Safety Rule:** Always monitor output with **Post** gain to compensate. [SRC: IL-MAN] Pre/Post gain controls allow proper gain staging through the waveshaping process.

## Visual Debugging Tips

1. **Flat Line at Bottom:** Signal completely muted (check Pre gain)
2. **Flat Line at Top:** Hard limiter behavior (good for safety)
3. **Wavy Curves:** Complex harmonic structures (experimental territory)
4. **Sharp Corners:** Abrupt transitions = more high-frequency harmonics

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Concepts\unipolar-vs-bipolar.md

```markdown
# Unipolar vs Bipolar Mode

## Mode Selection: The First Decision

Fruity WaveShaper's **Unipolar/Bipolar** switch fundamentally changes how the plugin processes your audio. This is the most important creative decision you'll make.

[SRC: IL-MAN] Unipolar mode applies the same curve to both positive and negative signal halves. Bipolar mode allows independent shaping of positive and negative halves.

## Unipolar Mode (Symmetric Processing)

### How It Works
`\`\`
Positive Half ─┐
               │    ╭──╮
               │   ╱    ╲
               │  ╱      ╲
    Input ─────┼─●────────●──
               │╲        ╱
               │ ╲______╱
               │
Negative Half ─┘   (Mirrored shape)
`\`\`

### Sonic Character
- **Warm, musical, analog-like**
- **Even harmonics** (2nd, 4th, 6th, etc.)
- **Tube/tape saturation** quality
- **Smooth, pleasing** distortion

### Best Applications
- **808 saturation** (add warmth without aggression)
- **Vocal tracking** (smooth presence)
- **Mix bus glue** (cohesive saturation)
- **Acoustic instruments** (natural enhancement)

### Safety Note
Even harmonics are generally more musical and less fatiguing. This is the "safe" mode for most mixing applications. [SRC: IL-MAN] Even harmonics create consonant intervals that blend musically with the fundamental.

## Bipolar Mode (Asymmetric Processing)

### How It Works
`\`\`
Positive Half ─┐
               │    ╭──╮
               │   ╱    ╲
               │  ╱      ╲
    Input ─────┼─●──────────
               │╲          
               │ ╲________  ← Different shape!
               │           
Negative Half ─┘
`\`\`

### Sonic Character
- **Aggressive, complex, modern**
- **Mix of odd and even harmonics**
- **Transistor/diode** clipping quality
- **Punchy, characterful** distortion

### Best Applications
- **Drum crunch** (transient bite)
- **EDM leads** (aggressive presence)
- **Electric guitars** (amp-like distortion)
- **Creative destruction** (experimental)

### Critical Warning
Odd harmonics can sound harsh and cause listener fatigue. Use with **Mix** control at 30-50% for transparent results. [SRC: IL-MAN] Odd harmonics create dissonant intervals that can sound aggressive or "honky."

## Mode Comparison Chart

| Aspect | Unipolar | Bipolar |
|--------|----------|---------|
| Curve Behavior | Mirrored symmetric | Independent halves |
| Harmonic Type | Even-order | Mixed odd+even |
| Character | Warm, analog | Aggressive, modern |
| Fatigue Level | Low | Higher |
| CPU Usage | Slightly lower | Slightly higher |
| Best For | Saturation, warmth | Distortion, punch |

## When to Switch Modes

### Start with Unipolar when:
- Working with low-end (808s, kicks, bass)
- Processing vocals or acoustic sources
- Adding subtle mix bus saturation
- You want "character" without "edge"

### Switch to Bipolar when:
- Drums need more transient bite
- Synths need more aggressive presence
- Creating distortion effects (not mixing)
- Designing unique character sounds

## Pro Workflow: A/B Testing Modes

1. **Set your curve** (start with soft clip)
2. **Process in Unipolar** — listen for warmth
3. **Switch to Bipolar** — listen for added edge/complexity
4. **Choose based on the vibe you want**

**Remember:** Bipolar isn't "better" — it's different. Unipolar often wins in hip-hop/R&B mixing for its warmth. [SRC: IL-MAN] Both modes are equally valid creative choices depending on the desired sonic outcome.

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity WaveShaper (5 Minutes)

1.  **Insert:** Load **Fruity WaveShaper** onto a synth or drum track.
2.  **Mode:** Ensure it is in **Unipolar** mode (the default).
3.  **Draw:** Click in the graph window. The line is your "Logic."
    - *Curve the middle up:* Adds volume/warmth.
    - *Flatten the top:* Creates clipping.
4.  **Drive:** Increase the **PRE** knob to push more sound into your curve.
5.  **Clean:** If it sounds "fuzzy" in a bad way, set the **OVERSAMPLING** to 4x.
6.  **Tip:** Right-click the graph to find **Presets** for common shapes like "Soft Clip" or "Bitcrush." [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\distortion-curves-visualized.md

```markdown
# Distortion Curves Visual Reference

## Visual Curve Library

[SRC: IL-MAN] The graph editor allows drawing custom transfer functions. The diagonal line represents unity gain (input = output).

### 1. Linear (Bypass/Unity)
`\`\`
Output
  1.0│          ╱
  0.5│        ╱
  0.0├──────●──────
 -0.5│    ╱
 -1.0│  ╱
     └────────────────
       -1.0  0.0  1.0  Input

Sonic Character: Clean, transparent
Use: Reference point, subtle saturation start
`\`\`

### 2. Soft Clip (S-Curve)
`\`\`
Output
  1.0│          ╭──────
  0.5│        ╭╯
  0.0├──────●──────
 -0.5│    ╱
 -1.0│  ╱
     └────────────────
       -1.0  0.0  1.0  Input

Sonic Character: Warm, analog-like, even harmonics
Use: 808 saturation, vocal warmth, mix glue
Mode: Unipolar recommended
`\`\`

### 3. Hard Clip (Limiter)
`\`\`
Output
  1.0│███████████████
  0.5│
  0.0├────────●──────
 -0.5│
 -1.0│████████████████
     └────────────────
       -1.0  0.0  1.0  Input

Sonic Character: Aggressive, punchy, odd harmonics
Use: Drum transients, hard limiting, EDM aggression
Mode: Either (Unipolar = warmer, Bipolar = punchier)
`\`\`

### 4. Soft Limiter (Rounded Ceiling)
`\`\`
Output
  1.0│        ╭─────╮
  0.5│      ╭╯     ╰╮
  0.0├──────●───────
 -0.5│    ╱
 -1.0│  ╱
     └────────────────
       -1.0  0.0  1.0  Input

Sonic Character: Controlled, loud, smooth limiting
Use: Gentle peak control, transparent limiting
Mode: Unipolar for warmth
`\`\`

### 5. Foldback Distortion (Wavefolding)
`\`\`
Output
  1.0│    ╭╮      ╭╮
  0.5│   ╱  ╲    ╱  ╲
  0.0├─●────●────●───
 -0.5│╱      ╲  ╱
 -1.0│        ╲╱
     └────────────────
       -1.0  0.0  1.0  Input

Sonic Character: Metallic, complex, modular synth-like
Use: Creative sound design, experimental textures
Mode: Bipolar for maximum complexity
`\`\`

### 6. Bitcrush (Staircase)
`\`\`
Output
  1.0│█████████████████
 0.75│       ▓▓▓▓▓▓▓▓▓▓
 0.50│  █████████████████
 0.25│       ▓▓▓▓▓▓▓▓▓▓
  0.0├─●──────────────────
-0.25│
-0.50│
-0.75│
 -1.0│███████████████████
      └──────────────────
        -1.0  0.0  1.0  Input

Sonic Character: Digital, lo-fi, quantized
Use: Retro video game sounds, creative destruction
Mode: Either (aliasing increases with drive)
`\`\`

### 7. Asymmetric (Bipolar Mode Special)
`\`\`
Output (Positive)     Output (Negative)
  1.0│  ╭────╮        1.0│
  0.5│ ╱      ╲       0.5│
  0.0├●────────        0.0├────────
 -0.5│               -0.5│    ╲
 -1.0│               -1.0│███████
     └────────              └────────

Sonic Character: Complex, textured, transistor-like
Use: Unique character, amp simulation, edge
Mode: Bipolar ONLY
`\`\`

## Curve Drawing Tips

### Creating Smooth Curves
1. **Use 3-5 points** for basic shapes
2. **Space points evenly** horizontally
3. **Avoid sharp corners** unless you want harshness
4. **Keep center at (0,0)** for unity gain at low levels

### Creating Stepped Curves (Bitcrush)
1. **Add multiple horizontal segments**
2. **Keep vertical jumps** between steps
3. **Use 8-16 steps** for typical bitcrushing
4. **Enable oversampling** to reduce aliasing

[SRC: IL-MAN] Points can be added by clicking on the graph. Right-click points to delete.

## Harmonic Generation by Curve

| Curve Type | Primary Harmonics | Character | Best For |
|------------|-------------------|-----------|----------|
| Linear | None | Clean | Reference |
| Soft Clip | Even (2nd, 4th, 6th) | Warm, musical | Mixing, warmth |
| Hard Clip | Odd (3rd, 5th, 7th) | Aggressive, punchy | Drums, EDM |
| Foldback | All (complex) | Metallic, modular | Experimental |
| Bitcrush | Aliased artifacts | Digital, degraded | Creative |
| Asymmetric | Mixed odd/even | Complex, textured | Character |

## Quick Curve Selection Guide

### Goal: Add Warmth
→ **Soft S-curve** + Unipolar + Medium Pre gain

### Goal: Add Punch
→ **Hard clip** + Bipolar + High Pre gain

### Goal: Control Peaks
→ **Limiter shape** + Unipolar + Adjust threshold

### Goal: Creative Destruction
→ **Any complex shape** + Bipolar + High drive + High oversampling

### Goal: Lo-fi Character
→ **Staircase** + High drive + Moderate oversampling

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\gain-staging-safety.md

```markdown
# Gain Staging Safety Guide

## The Golden Rule of Distortion

**Input + Curve = Output.** If any stage clips unexpectedly, your mix suffers. Proper gain staging through WaveShaper prevents disasters.

[SRC: IL-MAN] Pre and Post gain controls allow proper gain staging through the waveshaping process.

## The Signal Flow

`\`\`
Input → [Pre Gain] → [Transfer Curve] → [Post Gain] → Output
        (Drive)         (Distortion)       (Compensate)
`\`\`

## Stage-by-Stage Safety

### Stage 1: Input Level (Before WaveShaper)

**Check:** Is your input peaking near -6dB to -12dB?

**Safety Rules:**
- Never feed clipped audio into WaveShaper
- If channel meter shows red, reduce level before the plugin
- Leave headroom for Pre gain amplification

**How to Check:**
1. Bypass WaveShaper
2. Monitor channel meter
3. Adjust input gain if needed
4. Re-enable WaveShaper

### Stage 2: Pre Gain (Driving the Curve)

**Check:** How much are you amplifying?

**Safety Tiers:**

| Pre Gain | Risk Level | Typical Use |
|----------|------------|-------------|
| 0 to +6dB | Safe | Subtle saturation |
| +6 to +12dB | Moderate | Standard distortion |
| +12 to +18dB | High | Aggressive processing |
| +18 to +24dB | Extreme | Creative destruction |

**Safety Rules:**
- Start at 0dB, increase gradually
- Watch the channel meter after WaveShaper
- Higher Pre gain = more distortion = need more Post gain reduction

[SRC: IL-MAN] Pre gain increases signal level before the transfer function, controlling how much distortion is applied.

### Stage 3: Transfer Curve (The Distortion)

**Check:** Is your curve design reasonable?

**Safety Checks:**
- Ensure curve passes through (0,0) for unity gain at low levels
- Avoid completely flat curves (signal kills)
- Extreme curves need higher oversampling

**Common Mistakes:**
- **Mistake:** Flat line at -1.0 = silent negative signal
- **Fix:** Ensure minimum -0.8 to -1.0 output range

### Stage 4: Post Gain (Output Compensation)

**Check:** Is output level reasonable?

**The Compensation Formula:**
`\`\`
If Pre = +12dB → Post should be approximately -8 to -12dB
If Pre = +6dB → Post should be approximately -4 to -6dB
`\`\`

**Safety Rules:**
- Match processed level to unprocessed for A/B comparison
- Never exceed 0dB on master bus
- Use Post gain to prevent channel/master clipping

[SRC: IL-MAN] Post gain adjusts output level to compensate for distortion-induced level changes.

### Stage 5: Mix Control (Parallel Safety)

**Check:** Is the blend appropriate?

**Safety Guidelines:**

| Mix % | Risk | Use Case |
|-------|------|----------|
| 100% | High | Effect is dominant—ensure it sounds good solo |
| 50-70% | Moderate | Parallel processing—balance with dry |
| 20-40% | Safe | Enhancement—dry signal dominates |
| 0-20% | Very Safe | Subtle spice—barely noticeable |

## Complete Gain Staging Checklist

Before finalizing any WaveShaper setting:

- [ ] Input level healthy (-12dB to -6dB before plugin)
- [ ] Pre gain appropriate for desired distortion
- [ ] Curve passes through (0,0)
- [ ] Oversampling adequate for curve intensity
- [ ] Post gain compensates for distortion level increase
- [ ] Output level matches reference (dry signal)
- [ ] Mix percentage appropriate for context
- [ ] Master bus not clipping with new settings
- [ ] No unwanted DC offset (Center enabled)

## Aliasing Prevention Safety

### When Aliasing Occurs
- Hard clipping with high drive
- Stepped/bitcrush curves
- No oversampling enabled
- High-frequency sources (>5kHz)

### Safety Settings

| Distortion Intensity | Minimum Oversampling | CPU Impact |
|---------------------|---------------------|------------|
| Subtle (S-curve, low drive) | Off or 2x | Low |
| Moderate (soft clip, medium drive) | 2x or 4x | Medium |
| Heavy (hard clip, high drive) | 4x or 8x | High |
| Extreme (bitcrush, max drive) | 8x or 16x | Very High |

[SRC: IL-MAN] Oversampling increases internal processing rate to reduce aliasing artifacts.

## Hip-Hop/R&B Specific Safety

### 808s and Sub Bass
- **Danger:** Hard clipping removes low-end punch
- **Safety:** Use soft S-curve, Unipolar mode
- **Pre Gain:** +6 to +12dB max
- **Mix:** Keep at 40-60% to preserve original sub

### Drums
- **Danger:** Over-distortion = mushy transients
- **Safety:** Bipolar mode for punch, but watch mix level
- **Pre Gain:** +8 to +16dB
- **Mix:** 50-70% for aggression, less for subtlety

### Vocals
- **Danger:** Distortion causes sibilance and harshness
- **Safety:** De-esser BEFORE WaveShaper, low mix
- **Pre Gain:** +3 to +8dB
- **Mix:** 20-35% for grit without losing intelligibility

### Mix Bus
- **Danger:** Cumulative distortion across all tracks
- **Safety:** Very conservative settings, Unipolar only
- **Pre Gain:** +2 to +6dB max
- **Mix:** 15-25% maximum

## Emergency Troubleshooting

### Problem: Output Suddenly Clipping
**Solution:** Reduce Post gain by 6-12dB immediately

### Problem: Sound Disappeared
**Solution:** Check if curve has flat section at bottom; redraw with proper unity gain

### Problem: Harsh, Digital Sound
**Solution:** Enable 4x+ oversampling, reduce Pre gain, or switch to Unipolar

### Problem: Low End Lost
**Solution:** Check Center is enabled, reduce drive, use softer curve

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\hiphop-rnb-applications.md

```markdown
# Hip-Hop/R&B Application Guide

## WaveShaper in Urban Music Production

Fruity WaveShaper is essential for modern hip-hop and R&B production. This guide covers genre-specific applications from 808 saturation to vocal grit.

[SRC: IL-MAN] WaveShaper provides precise control over distortion characteristics for creative sound design and mixing.

## 808s and Sub Bass

### The Challenge
808s need to cut through on small speakers (phones, earbuds) while maintaining sub-bass impact on systems that can reproduce it.

### WaveShaper Solution: Harmonic Saturation
**Goal:** Add upper harmonics that create "presence" without losing the fundamental sub.

**Settings:**
- **Mode:** Unipolar (even harmonics = warmth)
- **Curve:** Soft S-curve with gentle compression
- **Pre:** +8 to +12dB
- **Mix:** 50-70% (blend for best of both worlds)
- **Post:** -8 to -12dB (compensate for drive)
- **Oversample:** 4x

**Why This Works:**
- Unipolar preserves low-end warmth
- S-curve adds harmonics that translate to small speakers
- High mix preserves original 808 punch
- Even harmonics sound "musical" in hip-hop context

### Pro Tips
1. **Place after initial EQ** but before final compression
2. **Mono the lows** (below 100Hz) before distortion to prevent phase issues
3. **Layer approach:** Distort the "presence" layer, keep original for sub

[SRC: IL-MAN] Unipolar mode creates even-order harmonics that blend musically with hip-hop and R&B productions.

## Drums (Kicks, Snares, Hats)

### Kicks: Hard Punch
**Goal:** Maximum transient impact for hard-hitting beats.

**Settings:**
- **Mode:** Bipolar (asymmetric = punch)
- **Curve:** Hard clip at 0.7-0.8 threshold
- **Pre:** +12 to +18dB
- **Mix:** 60-80%
- **Post:** -12 to -18dB
- **Oversample:** 4x-8x

### Snares: Crack and Body
**Goal:** Add crack to the transient, warmth to the body.

**Settings:**
- **Mode:** Bipolar
- **Curve:** Asymmetric—harder on positive (crack), softer on negative (body)
- **Pre:** +10 to +14dB
- **Mix:** 50-70%
- **Post:** -10 to -14dB
- **Oversample:** 4x

### Hi-Hats: Sizzle Control
**Goal:** Add density without harshness.

**Settings:**
- **Mode:** Unipolar
- **Curve:** Very soft saturation
- **Pre:** +4 to +8dB
- **Mix:** 30-50%
- **Post:** -4 to -8dB
- **Oversample:** 8x (hats have high frequency content)

## Vocals

### Lead Vocals: Presence and Grit
**Goal:** Add "attitude" and presence without destroying intelligibility.

**Settings:**
- **Mode:** Start Unipolar, try Bipolar for edge
- **Curve:** Soft S-curve
- **Pre:** +4 to +8dB
- **Mix:** 20-35% (conservative for transparency)
- **Post:** -4 to -8dB
- **Oversample:** 4x

**Processing Chain:**
1. EQ (remove mud, boost presence)
2. **WaveShaper** (grit and saturation)
3. De-esser (if sibilance increased)
4. Compression

### Ad-libs and Doubles: Creative Destruction
**Goal:** Extreme character for background vocals.

**Settings:**
- **Mode:** Bipolar
- **Curve:** Hard clip or complex asymmetric
- **Pre:** +12 to +20dB
- **Mix:** 70-100%
- **Post:** -12 to -20dB
- **Oversample:** 4x-8x

### Background Vocals: Blend and Warmth
**Settings:**
- **Mode:** Unipolar
- **Curve:** Gentle saturation
- **Pre:** +6 to +10dB
- **Mix:** 40-60%
- **Post:** -6 to -10dB

## Mix Bus Processing

### Glue and Saturation
**Goal:** Cohesive "analog" feel across the whole mix.

**Settings:**
- **Mode:** Unipolar (safer for full mix)
- **Curve:** Very gentle S-curve
- **Pre:** +2 to +6dB
- **Mix:** 15-25% (very conservative)
- **Post:** -2 to -6dB
- **Oversample:** 4x

**Critical Warnings:**
- Keep it subtle—easy to overdo
- Use Pre gain sparingly
- Monitor master bus carefully
- Consider parallel bus instead of insert

[SRC: IL-MAN] Mix bus saturation should be subtle to avoid cumulative distortion across multiple tracks.

## Genre-Specific Applications

### Trap
**808 Focus:** Heavy saturation for speaker presence
- Pre: +10 to +16dB
- Mix: 60-80%
- Oversample: 4x minimum

### Boom Bap
**Drum Punch:** Classic hard-hitting sound
- Bipolar mode for transients
- Hard clip curve
- Moderate oversampling

### R&B/Soul
**Warmth and Smoothness:** Gentle saturation
- Unipolar mode
- Soft curves
- Low mix percentages

### Experimental/Alt
**Creative Destruction:** Push boundaries
- Bipolar mode
- Complex curves
- High drive
- Varies by track

## Parallel Processing Setup

### Creating a Distortion Bus
1. **Route drums to bus**
2. **Insert WaveShaper on bus**
3. **Heavy settings:** Bipolar, hard clip, high drive
4. **Blend with original:** Use Mix control or bus fader

### Vocal Distortion Layer
1. **Duplicate vocal track**
2. **Heavy distortion on duplicate** (100% wet)
3. **EQ the distorted layer** (high-pass to reduce mud)
4. **Blend underneath** main vocal

## Common Hip-Hop Mistakes

### Mistake 1: Over-Saturating 808s
**Problem:** 808s become mushy, lose punch
**Fix:** Use Unipolar, keep Mix above 50%

### Mistake 2: Too Much Vocal Distortion
**Problem:** Lyrics unintelligible, sibilance harsh
**Fix:** Keep Mix under 35%, de-ess after

### Mistake 3: Ignoring Aliasing
**Problem:** "Cheap" digital sound on high frequencies
**Fix:** Use 4x+ oversampling on hats, snares, leads

### Mistake 4: Master Bus Overload
**Problem:** Mix becomes harsh and fatiguing
**Fix:** Use parallel bus instead, keep mix bus subtle

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Fruity WaveShaper Parameter Cheat Sheet

## Quick Parameter Reference

| Parameter | Range | Default | Vibe Impact | Mix Impact |
|-----------|-------|---------|-------------|------------|
| **Pre** | -24dB to +24dB | 0dB | Drive level into curve | Controls distortion amount |
| **Mix** | 0% to 100% | 100% | Dry/wet balance | Parallel processing control |
| **Post** | -24dB to +24dB | 0dB | Output compensation | Gain staging safety |
| **Center** | On/Off | On | DC offset removal | Prevents low-end mud |
| **Mode** | Unipolar/Bipolar | Unipolar | Harmonic character | Symmetry vs. asymmetry |
| **Oversample** | Off, 2x, 4x, 8x, 16x | Off | Aliasing prevention | Quality vs. CPU trade-off |
| **HQ** | On/Off | Off | Ultra-low level processing | Prevents signal degradation |

[SRC: IL-MAN] All parameters are available as automation targets in FL Studio's browser.

## Pre (Input Drive)

### What It Does
Amplifies the input signal before it hits the transfer curve. Higher values push the signal deeper into the non-linear portion of your curve.

### Vibe Tags
- **Subtle:** -12dB to -6dB (gentle harmonic addition)
- **Standard:** 0dB to +6dB (noticeable character)
- **Aggressive:** +12dB to +20dB (heavy distortion)
- **Extreme:** +20dB+ (creative destruction)

### Mix Impact
Low values preserve dynamics; high values create consistent saturation. Use **Post** gain to compensate.

### Safety Notes
- Always monitor output level with Post gain
- Watch for clipping in the channel meter
- High values + hard clipping = aliasing (use oversampling)

[SRC: IL-MAN] Pre gain increases input level to drive the transfer function harder.

## Mix (Dry/Wet)

### What It Does
Blends the processed (distorted) signal with the original (dry) signal.

### Vibe Tags
- **Transparent:** 10-25% (subtle enhancement)
- **Standard:** 30-50% (parallel distortion)
- **Aggressive:** 60-80% (dominant effect)
- **Full:** 100% (complete replacement)

### Mix Impact
Essential for parallel processing. Lower values maintain original dynamics while adding harmonic character.

### Pro Tips
- **Hip-hop vocals:** 20-30% for grit without losing clarity
- **808 saturation:** 40-60% for warmth with punch intact
- **Drums:** 50-70% for punchy aggression

[SRC: IL-MAN] Mix controls the balance between dry and processed signal for parallel processing effects.

## Post (Output Level)

### What It Does
Attenuates or amplifies the signal after processing. Critical for gain staging.

### Vibe Tags
- **Attenuate:** -6dB to -12dB (match original level after heavy distortion)
- **Unity:** 0dB (no change)
- **Boost:** +3dB to +6dB (intentional level increase)

### Mix Impact
Use to A/B test distortion—match processed and unprocessed levels for fair comparison.

### Safety Notes
- Compensate for Pre gain increases
- Watch master bus clipping
- Critical for consistent loudness

[SRC: IL-MAN] Post gain adjusts output level to compensate for distortion-induced level changes.

## Center (DC Offset Removal)

### What It Does
Removes DC offset from the signal to prevent low-frequency buildup.

### Vibe Tags
- **Always On:** Prevents DC accumulation
- **Rarely Off:** Only for experimental sound design

### Mix Impact
Essential for clean low-end. DC offset can cause headroom issues and muddy bass.

### Safety Notes
- Leave enabled for 99% of applications
- Disabling may cause cumulative DC buildup on buses

[SRC: IL-MAN] Center removes DC offset to prevent low-frequency accumulation and headroom loss.

## Mode (Unipolar/Bipolar)

### What It Does
Switches between symmetric (Unipolar) and asymmetric (Bipolar) curve application.

### Vibe Tags
- **Unipolar:** Warm, analog, even harmonics
- **Bipolar:** Aggressive, complex, mixed harmonics

### Mix Impact
Unipolar = safer for mixing. Bipolar = more character but potential harshness.

### Decision Tree
`\`\`
Need warmth? → Unipolar
Need punch? → Bipolar
808/bass? → Unipolar
Drums/leads? → Bipolar
`\`\`

[SRC: IL-MAN] Unipolar applies the same curve to both positive and negative signal halves. Bipolar allows independent shaping.

## Oversample

### What It Does
Increases internal processing rate to reduce aliasing artifacts.

### Vibe Tags
- **Off:** Standard quality, low CPU
- **2x:** Minimal improvement
- **4x:** Good balance (recommended default)
- **8x:** High quality for aggressive distortion
- **16x:** Maximum quality for extreme settings

### Mix Impact
Higher = cleaner high frequencies, lower = potential aliasing artifacts.

### Safety Notes
- Use minimum 4x for hard clipping or bitcrushing
- High values increase CPU usage
- Critical for high-frequency sources

[SRC: IL-MAN] Oversampling multiplies the internal processing rate to reduce aliasing during distortion.

## HQ (High Quality)

### What It Does
Enables processing of ultra-low level signals that might otherwise be lost.

### Vibe Tags
- **On:** Better quality at low levels
- **Off:** Standard processing

### Mix Impact
Generally leave on for critical applications. Slight CPU increase.

[SRC: IL-MAN] HQ mode ensures processing fidelity for very low-level signals.

## Quick Settings Reference

### For 808s
- Pre: +6 to +12dB
- Mix: 40-60%
- Post: -6 to -12dB
- Mode: Unipolar
- Oversample: 2x or 4x

### For Drums
- Pre: +8 to +16dB
- Mix: 50-70%
- Post: -8 to -16dB
- Mode: Bipolar
- Oversample: 4x or 8x

### For Vocals
- Pre: +3 to +8dB
- Mix: 20-35%
- Post: -3 to -8dB
- Mode: Unipolar or Bipolar
- Oversample: 4x

### For Mix Bus
- Pre: +2 to +6dB
- Mix: 15-25%
- Post: -2 to -6dB
- Mode: Unipolar
- Oversample: 4x

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\problem-solver.md

```markdown
# Problem Solver Quick Reference

## Symptom-to-Solution Lookup

[SRC: IL-MAN] This guide maps common distortion problems to WaveShaper solutions.

## Sound Problems

### Problem: "My 808 Lost Its Punch"
**Symptoms:**
- Sub-bass feels weaker after WaveShaper
- Low-end sounds "sucked out"
- Kick and bass no longer hit hard

**Solutions:**
1. **Switch to Unipolar mode** (preserves even harmonics, warmer)
2. **Use softer S-curve** instead of hard clipping
3. **Reduce Pre gain** to +6dB or less
4. **Increase Mix to 60-80%** to keep more original signal
5. **Enable Center** to prevent DC offset issues

### Problem: "Drums Sound Mushy"
**Symptoms:**
- Transients lost
- Attack feels blurred
- No snap or punch

**Solutions:**
1. **Switch to Bipolar mode** for more transient bite
2. **Use hard clip curve** for aggressive limiting
3. **Increase Pre gain** to +12dB or more
4. **Keep Mix at 50-70%** to blend with dry
5. **Use 4x or 8x oversampling** to prevent aliasing smear

### Problem: "Vocals Sound Harsh"
**Symptoms:**
- Sibilance increased
- Upper mids grating
- Listener fatigue

**Solutions:**
1. **Switch to Unipolar mode** (fewer odd harmonics)
2. **Reduce Pre gain** to +4dB or less
3. **Decrease Mix to 20-30%** for subtlety
4. **Add oversampling** (4x minimum)
5. **Consider de-esser before WaveShaper**

### Problem: "It Sounds Digital/Metallic"
**Symptoms:**
- High-frequency artifacts
- Unwanted "shimmer"
- Doesn't sound "analog"

**Solutions:**
1. **Enable 4x or 8x oversampling** immediately
2. **Use softer curve** (reduce sharp corners)
3. **Reduce Pre gain** to moderate levels
4. **Switch to Unipolar** for even harmonics
5. **Check for stepped curves** (bitcrushing creates artifacts)

[SRC: IL-MAN] Aliasing artifacts manifest as unwanted high-frequency content that sounds "metallic" or "digital."

## Technical Problems

### Problem: "Output Clipping Red Lights"
**Symptoms:**
- Channel meter in red
- Master bus clipping
- Distortion even with gentle curve

**Solutions:**
1. **Reduce Post gain** by 6-12dB immediately
2. **Check Pre gain** isn't too high
3. **Verify input level** before WaveShaper
4. **Add limiter after WaveShaper** if needed

### Problem: "Signal Disappeared"
**Symptoms:**
- Complete silence
- Only some frequencies audible
- Negative half of wave gone

**Solutions:**
1. **Check curve passes through (0,0)**
2. **Ensure no flat line at -1.0** in graph
3. **Reset curve and start over**
4. **Verify Pre gain isn't negative** (rare)

### Problem: "CPU Overload"
**Symptoms:**
- FL Studio lagging
- Audio dropouts
- High CPU meter

**Solutions:**
1. **Reduce oversampling** to 4x or 2x
2. **Freeze/render** tracks with heavy distortion
3. **Consolidate** multiple WaveShaper instances
4. **Use less extreme curves** (fewer points)

### Problem: "Can't Hear The Effect"
**Symptoms:**
- No audible change
- Mix sounds the same
- Plugin seems bypassed

**Solutions:**
1. **Increase Pre gain** significantly (+12dB or more)
2. **Check Mix isn't at 0%**
3. **Verify curve deviates from diagonal**
4. **Try extreme curve** temporarily to confirm it's working
5. **Check plugin isn't bypassed** in channel rack

## Vibe-Based Problem Solving

### Need More Warmth (Moody/Jazzy vibes)
- **Mode:** Unipolar
- **Curve:** Soft S-curve
- **Pre:** +6 to +10dB
- **Mix:** 40-60%
- **Oversample:** 2x-4x

### Need More Energy (Upbeat vibes)
- **Mode:** Bipolar
- **Curve:** Hard clip or aggressive S-curve
- **Pre:** +10 to +16dB
- **Mix:** 60-80%
- **Oversample:** 4x-8x

### Need Weird Textures (Psychedelic vibes)
- **Mode:** Bipolar
- **Curve:** Complex asymmetric or foldback
- **Pre:** +12 to +20dB
- **Mix:** 30-50%
- **Oversample:** 8x-16x

### Need Vintage Character (Jazzy/Vibey vibes)
- **Mode:** Unipolar
- **Curve:** Gentle saturation with rounded corners
- **Pre:** +4 to +8dB
- **Mix:** 20-40%
- **Oversample:** 2x-4x

[SRC: IL-MAN] The sonic character depends on curve shape, mode selection, and gain staging combined.

## Decision Tree: Which Setting First?

`\`\`
Problem identified
       │
       ├─→ Sound quality issue?
       │       ├─→ Harsh/Digital → Check oversampling + mode
       │       ├─→ Weak/Lost low-end → Check curve shape + Center
       │       └─→ No character → Check Pre gain + curve
       │
       └─→ Technical issue?
               ├─→ Clipping → Reduce Post gain
               ├─→ Silence → Check curve at (0,0)
               ├─→ CPU → Reduce oversampling
               └─→ Not working → Verify plugin active
`\`\`

## Quick Fixes Table

| Symptom | First Try | Second Try | Third Try |
|---------|-----------|------------|-----------|
| Too harsh | Unipolar mode | Reduce Pre gain | Add oversampling |
| Too weak | Increase Pre gain | Bipolar mode | Increase Mix |
| Digital artifacts | 8x oversampling | Softer curve | Reduce drive |
| Lost low-end | Check Center | Unipolar mode | Softer curve |
| Clipping | Reduce Post gain | Reduce Pre gain | Check input |
| CPU high | 2x oversampling | Freeze track | Remove instances |

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity WaveShaper

| Parameter | Type | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- |
| **PRE Gain** | Knob | **Upbeat** (Drive)| **Intensity** | Input amplification. |
| **POST Gain** | Knob | N/A | **Volume** | Output compensation. |
| **MIX** | Knob | **Vibey** | **Transparency**| Dry/Wet balance. |
| **Oversample** | Selector | **Vibey** (Clean) | **Artifacts** | Reduces high-end aliasing. |
| **Bipolar** | Switch | **Psychedelic** | **Phase** | Splits wave into L/R halves.|
| **Center** | Switch | N/A | **Safety** | Removes DC offset. |

- **Vibe Impact Tag (Bipolar):** Allows for independent processing of the positive and negative peaks, essential for "Psychedelic" harmonic generation.
- **Mix Impact Tag (Clipping):** Hard horizontal lines in the graph create "Hard Clipping" for maximum drum loudness. [SRC: IL-MAN]
```

---

## FILE: 02-Data\parameters\parameter-specifications.md

```markdown
# Parameter Specifications

## Complete Parameter Dictionary

[SRC: IL-MAN] This document provides detailed specifications for all Fruity WaveShaper controls.

## Pre (Input Drive)

**Function:** Input amplification before transfer curve

**Technical Specs:**
- Range: -24dB to +24dB
- Step Size: 0.1dB (fine control)
- Default: 0dB
- Automation: Full support

**Behavior:**
- Linear gain increase/decrease
- Applied before curve processing
- Higher values = more distortion
- No internal ceiling (can clip if not monitored)

**Use Cases:**
- **Subtle saturation:** +3 to +6dB
- **Standard distortion:** +8 to +12dB
- **Heavy processing:** +14 to +20dB
- **Creative destruction:** +20dB+

**Safety Considerations:**
- Always monitor output level
- Compensate with Post gain
- Watch for channel/master clipping
- Higher values need more oversampling

## Mix (Dry/Wet Balance)

**Function:** Blend processed and original signals

**Technical Specs:**
- Range: 0% to 100%
- Step Size: 1%
- Default: 100%
- Automation: Full support

**Behavior:**
- 0% = 100% dry (no effect)
- 50% = Equal dry and wet
- 100% = 100% processed
- Linear crossfade

**Use Cases:**
- **Transparent:** 10-25%
- **Standard parallel:** 30-50%
- **Aggressive:** 60-80%
- **Full effect:** 90-100%

**Hip-Hop/R&B Guidelines:**
- 808s: 50-70%
- Drums: 60-80%
- Vocals: 20-35%
- Mix bus: 15-25%

## Post (Output Compensation)

**Function:** Gain adjustment after processing

**Technical Specs:**
- Range: -24dB to +24dB
- Step Size: 0.1dB
- Default: 0dB
- Automation: Full support

**Behavior:**
- Compensates for Pre gain and curve-induced level changes
- Prevents clipping on output
- Allows level-matched A/B comparison

**Compensation Formula:**
`\`\`
If Pre = +12dB → Post ≈ -8 to -12dB
If Pre = +6dB → Post ≈ -4 to -6dB
`\`\`

**Safety Considerations:**
- Essential for gain staging
- Prevents master bus clipping
- Enables fair effect evaluation

## Center (DC Offset Removal)

**Function:** Removes DC bias from signal

**Technical Specs:**
- Type: Toggle (On/Off)
- Default: On
- Automation: Not recommended
- Processing: Real-time high-pass at 0Hz

**Behavior:**
- Removes DC offset component
- Prevents low-frequency accumulation
- Minimal phase impact

**When to Use:**
- **Always leave ON** for 99% of applications
- Only disable for experimental sound design
- Critical for mix bus and parallel processing

**Consequences of Disabling:**
- Cumulative DC buildup on buses
- Headroom loss
- Potential speaker damage

## Mode (Unipolar/Bipolar)

**Function:** Selects curve application symmetry

**Technical Specs:**
- Type: Selector (2 options)
- Options: Unipolar, Bipolar
- Default: Unipolar
- Automation: Full support

**Unipolar Mode:**
- Applies same curve to positive and negative halves
- Creates symmetric distortion
- Generates even-order harmonics (2nd, 4th, 6th...)
- Warmer, analog-like character

**Bipolar Mode:**
- Allows independent positive/negative curve shaping
- Creates asymmetric distortion
- Generates mixed odd/even harmonics
- More aggressive, complex character

**Harmonic Math:**
- Even harmonics: Octave and octave+fifth (musical)
- Odd harmonics: Fifth, major seventh, etc. (more dissonant)

**Selection Guidelines:**
- **Warmth/analog:** Unipolar
- **Punch/aggression:** Bipolar
- **Low-end sources:** Unipolar
- **High-transient sources:** Bipolar

## Oversample

**Function:** Internal processing rate multiplier

**Technical Specs:**
- Type: Selector (5 options)
- Options: Off, 2x, 4x, 8x, 16x
- Default: Off
- Automation: Not available
- Latency: Minimal PDC applied automatically

**Processing Rates:**
- Off: Native sample rate (44.1kHz → Nyquist 22.05kHz)
- 2x: Double rate (88.2kHz → Nyquist 44.1kHz)
- 4x: Quadruple rate (176.4kHz → Nyquist 88.2kHz)
- 8x: 8x rate (352.8kHz → Nyquist 176.4kHz)
- 16x: 16x rate (705.6kHz → Nyquist 352.8kHz)

**Aliasing Reduction:**
Higher internal Nyquist = more room for harmonics before folding back.

**CPU Usage Scaling:**
- Off: Baseline
- 2x: ~1.3x CPU
- 4x: ~1.6x CPU
- 8x: ~2.2x CPU
- 16x: ~3.5x CPU

**Recommendations by Use Case:**
- Subtle saturation (S-curve, low drive): Off-2x
- Moderate distortion: 2x-4x
- Hard clipping: 4x-8x
- Extreme/bitcrush: 8x-16x
- High-frequency sources: 4x minimum

## HQ (High Quality Mode)

**Function:** Enhanced processing for low-level signals

**Technical Specs:**
- Type: Toggle (On/Off)
- Default: Off
- Automation: Not available
- Processing: Extended precision for low amplitudes

**Behavior:**
- Processes ultra-low signals that might otherwise be lost
- Minimal impact on audible range
- Slight CPU increase

**Use Cases:**
- Critical mastering applications
- Very dynamic sources
- When preserving micro-dynamics is essential
- Generally leave off for standard mixing

## Transfer Curve (Graph Editor)

**Function:** Visual transfer function design

**Technical Specs:**
- Type: Interactive spline graph
- X-Axis: Input amplitude (-1.0 to +1.0)
- Y-Axis: Output amplitude (-1.0 to +1.0)
- Points: Unlimited
- Interpolation: Spline-based smoothing

**Default State:**
- Linear diagonal from (-1,-1) to (1,1)
- Represents unity gain (no change)
- 0dB reference point

**Interaction:**
- Click to add points
- Drag to move points
- Right-click to delete points
- Double-click to reset to linear

**Curve Analysis:**
- **Deviation from diagonal:** Amount of distortion
- **Slope at any point:** Local gain/transient response
- **Flat sections:** Limiting/clipping behavior
- **Sharp corners:** High-frequency harmonic generation

## Automation Specifications

**Automatable Parameters:**
1. Pre (Input gain)
2. Mix (Dry/wet)
3. Post (Output gain)
4. Mode (Unipolar/Bipolar)
5. Transfer curve points (advanced)

**Automation Ramps:**
- Smooth interpolation
- No zipper noise
- Sample-accurate updates

**Recommended Automation Workflows:**
- Pre gain: Dynamic distortion (verse to chorus)
- Mix: Blend variation (build-ups, breakdowns)
- Mode: Character switching (different song sections)

## Latency Specifications

**Standard Processing:**
- Latency: 0 samples (zero latency)
- PDC: None required
- Use: Tracking, live performance, low-latency mixing

**With Oversampling:**
- Latency: Minimal (typically 0-4 samples)
- PDC: Automatically compensated by FL Studio
- Use: Mixing, mastering, final renders

**HQ Mode:**
- Latency: Unchanged
- Processing: Extended precision only

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Source:** [SRC: IL-MAN] Image-Line Fruity WaveShaper Documentation

```

---

## FILE: 02-Data\parameters\waveshaper-params.json

```json
{
  "pluginName": "Fruity WaveShaper",
  "version": "FL Studio 20.8+",
  "category": "Distortion / Waveshaper",
  "parameters": [
    {
      "id": "pre",
      "name": "Pre",
      "section": "Gain",
      "range": { "min": -24, "max": 24, "default": 0, "unit": "dB" },
      "description": "Input gain driving the transfer curve",
      "automation": true,
      "vibeTags": ["drive", "input", "saturation-amount"],
      "mixImpact": "Controls how much signal hits the non-linear curve portion",
      "safetyNotes": "Higher values increase distortion; compensate with Post gain"
    },
    {
      "id": "mix",
      "name": "Mix",
      "section": "Blend",
      "range": { "min": 0, "max": 100, "default": 100, "unit": "%" },
      "description": "Dry/wet balance for parallel processing",
      "automation": true,
      "vibeTags": ["blend", "parallel", "transparency"],
      "mixImpact": "Higher values = more processed signal; lower = more original",
      "safetyNotes": "Use 20-50% for subtle enhancement, 100% for effect"
    },
    {
      "id": "post",
      "name": "Post",
      "section": "Gain",
      "range": { "min": -24, "max": 24, "default": 0, "unit": "dB" },
      "description": "Output gain compensation after processing",
      "automation": true,
      "vibeTags": ["output", "compensation", "gain-staging"],
      "mixImpact": "Critical for matching processed and unprocessed levels",
      "safetyNotes": "Adjust to prevent channel or master bus clipping"
    },
    {
      "id": "center",
      "name": "Center",
      "section": "Processing",
      "type": "toggle",
      "default": true,
      "description": "DC offset removal",
      "automation": false,
      "vibeTags": ["dc-offset", "low-end-protection"],
      "mixImpact": "Prevents cumulative DC buildup on buses",
      "safetyNotes": "Leave enabled except for experimental purposes"
    },
    {
      "id": "mode",
      "name": "Mode",
      "section": "Processing",
      "type": "selector",
      "options": ["Unipolar", "Bipolar"],
      "default": "Unipolar",
      "description": "Symmetric vs asymmetric curve application",
      "automation": true,
      "vibeTags": ["symmetry", "harmonics", "character"],
      "mixImpact": "Unipolar=even harmonics(warm), Bipolar=mixed harmonics(aggressive)",
      "safetyNotes": "Unipolar safer for mixing; Bipolar more aggressive"
    },
    {
      "id": "oversample",
      "name": "Oversample",
      "section": "Quality",
      "type": "selector",
      "options": ["Off", "2x", "4x", "8x", "16x"],
      "default": "Off",
      "description": "Internal processing rate multiplier for aliasing reduction",
      "automation": false,
      "vibeTags": ["quality", "anti-aliasing", "fidelity"],
      "mixImpact": "Higher values reduce high-frequency artifacts",
      "safetyNotes": "Use 4x+ for hard clipping or high-frequency sources"
    },
    {
      "id": "hq",
      "name": "HQ",
      "section": "Quality",
      "type": "toggle",
      "default": false,
      "description": "High-quality processing for ultra-low level signals",
      "automation": false,
      "vibeTags": ["fidelity", "low-level"],
      "mixImpact": "Preserves very quiet signal details",
      "safetyNotes": "Slight CPU increase; use for critical applications"
    }
  ],
  "transferCurve": {
    "type": "spline-graph",
    "editable": true,
    "xRange": [-1.0, 1.0],
    "yRange": [-1.0, 1.0],
    "defaultShape": "linear",
    "pointLimit": "unlimited",
    "interpolation": "spline",
    "description": "Custom transfer function mapping input to output amplitude"
  },
  "automationSupport": {
    "allParameters": true,
    "curvePoints": true,
    "recommendedAutomationTargets": ["pre", "mix", "post", "mode"]
  },
  "latency": {
    "standard": "0 samples",
    "withOversampling": "Minimal PDC (plugin delay compensation)"
  },
  "source": "[SRC: IL-MAN]"
}

```

---

## FILE: 02-Data\presets\curve-shapes.json

```json
{
  "curveLibrary": {
    "name": "Fruity WaveShaper Curve Shapes",
    "version": "1.0",
    "curveTypes": [
      {
        "id": "linear",
        "name": "Linear (Unity)",
        "description": "No distortion, bypass reference",
        "points": [
          {"x": -1.0, "y": -1.0},
          {"x": 0.0, "y": 0.0},
          {"x": 1.0, "y": 1.0}
        ],
        "characteristics": {
          "harmonics": "none",
          "symmetry": "symmetric",
          "suggestedMode": "Unipolar",
          "useCase": "Reference, subtle saturation starting point"
        }
      },
      {
        "id": "soft-clip",
        "name": "Soft Clip (S-Curve)",
        "description": "Gentle saturation with even harmonics",
        "points": [
          {"x": -1.0, "y": -0.85},
          {"x": -0.5, "y": -0.4},
          {"x": 0.0, "y": 0.0},
          {"x": 0.5, "y": 0.4},
          {"x": 1.0, "y": 0.85}
        ],
        "characteristics": {
          "harmonics": "even-order (warm)",
          "symmetry": "symmetric",
          "suggestedMode": "Unipolar",
          "useCase": "808 warmth, vocal saturation, mix glue"
        }
      },
      {
        "id": "hard-clip",
        "name": "Hard Clip (Limiter)",
        "description": "Aggressive limiting with odd harmonics",
        "points": [
          {"x": -1.0, "y": -0.8},
          {"x": -0.8, "y": -0.8},
          {"x": 0.0, "y": 0.0},
          {"x": 0.8, "y": 0.8},
          {"x": 1.0, "y": 0.8}
        ],
        "characteristics": {
          "harmonics": "odd-order (aggressive)",
          "symmetry": "symmetric",
          "suggestedMode": "Unipolar or Bipolar",
          "useCase": "Drum punch, hard limiting, EDM leads"
        }
      },
      {
        "id": "soft-limiter",
        "name": "Soft Limiter",
        "description": "Controlled peak reduction with smooth transition",
        "points": [
          {"x": -1.0, "y": -0.9},
          {"x": -0.7, "y": -0.7},
          {"x": -0.4, "y": -0.4},
          {"x": 0.0, "y": 0.0},
          {"x": 0.4, "y": 0.4},
          {"x": 0.7, "y": 0.7},
          {"x": 1.0, "y": 0.9}
        ],
        "characteristics": {
          "harmonics": "mixed (controlled)",
          "symmetry": "symmetric",
          "suggestedMode": "Unipolar",
          "useCase": "Transparent limiting, loudness control"
        }
      },
      {
        "id": "foldback",
        "name": "Foldback (Wavefolding)",
        "description": "Complex folding for metallic textures",
        "points": [
          {"x": -1.0, "y": 0.5},
          {"x": -0.75, "y": 0.0},
          {"x": -0.5, "y": 0.5},
          {"x": -0.25, "y": 0.0},
          {"x": 0.0, "y": 0.0},
          {"x": 0.25, "y": 0.0},
          {"x": 0.5, "y": 0.5},
          {"x": 0.75, "y": 0.0},
          {"x": 1.0, "y": 0.5}
        ],
        "characteristics": {
          "harmonics": "complex (all orders)",
          "symmetry": "symmetric",
          "suggestedMode": "Bipolar",
          "useCase": "Experimental, modular-style distortion"
        }
      },
      {
        "id": "asymmetric-soft",
        "name": "Asymmetric Soft",
        "description": "Different positive/negative shaping for tube-like character",
        "bipolar": {
          "positive": [
            {"x": 0.0, "y": 0.0},
            {"x": 0.5, "y": 0.4},
            {"x": 1.0, "y": 0.75}
          ],
          "negative": [
            {"x": -1.0, "y": -0.85},
            {"x": -0.5, "y": -0.45},
            {"x": 0.0, "y": 0.0}
          ]
        },
        "characteristics": {
          "harmonics": "mixed (odd+even)",
          "symmetry": "asymmetric",
          "suggestedMode": "Bipolar",
          "useCase": "Character distortion, amp simulation"
        }
      },
      {
        "id": "asymmetric-hard",
        "name": "Asymmetric Hard",
        "description": "Aggressive asymmetric clipping for edge",
        "bipolar": {
          "positive": [
            {"x": 0.0, "y": 0.0},
            {"x": 0.4, "y": 0.5},
            {"x": 0.7, "y": 0.75},
            {"x": 1.0, "y": 0.8}
          ],
          "negative": [
            {"x": -1.0, "y": -0.6},
            {"x": -0.5, "y": -0.4},
            {"x": 0.0, "y": 0.0}
          ]
        },
        "characteristics": {
          "harmonics": "complex (aggressive)",
          "symmetry": "asymmetric",
          "suggestedMode": "Bipolar",
          "useCase": "Drum crunch, vocal attitude, experimental"
        }
      },
      {
        "id": "staircase-8",
        "name": "Bitcrush 8-Step",
        "description": "8-step quantization for lo-fi sound",
        "type": "staircase",
        "steps": 8,
        "characteristics": {
          "harmonics": "aliased, digital artifacts",
          "symmetry": "symmetric",
          "suggestedMode": "Unipolar",
          "useCase": "Lo-fi, retro, creative destruction"
        }
      },
      {
        "id": "staircase-16",
        "name": "Bitcrush 16-Step",
        "description": "16-step quantization for subtle degradation",
        "type": "staircase",
        "steps": 16,
        "characteristics": {
          "harmonics": "aliased, less severe",
          "symmetry": "symmetric",
          "suggestedMode": "Unipolar",
          "useCase": "Subtle lo-fi, vintage character"
        }
      },
      {
        "id": "s-curve-aggressive",
        "name": "Aggressive S-Curve",
        "description": "Heavy saturation with pronounced S-shape",
        "points": [
          {"x": -1.0, "y": -0.7},
          {"x": -0.6, "y": -0.5},
          {"x": -0.3, "y": -0.2},
          {"x": 0.0, "y": 0.0},
          {"x": 0.3, "y": 0.2},
          {"x": 0.6, "y": 0.5},
          {"x": 1.0, "y": 0.7}
        ],
        "characteristics": {
          "harmonics": "even-order (strong)",
          "symmetry": "symmetric",
          "suggestedMode": "Unipolar",
          "useCase": "Heavy saturation, 808s, bass"
        }
      }
    ],
    "drawingGuidelines": {
      "smoothCurves": {
        "points": "3-5 for basic shapes",
        "spacing": "Even horizontal distribution",
        "corners": "Avoid sharp angles for musical results",
        "center": "Always pass through (0,0)"
      },
      "steppedCurves": {
        "points": "8-16 for bitcrushing",
        "alignment": "Horizontal segments with vertical jumps",
        "oversampling": "Required: 4x minimum"
      },
      "asymmetricCurves": {
        "mode": "Bipolar required",
        "balance": "Keep some relationship between halves",
        "experimentation": "Try different positive/negative ratios"
      }
    }
  }
}

```

---

## FILE: 02-Data\presets\preset-archetypes.json

```json
{
  "presetLibrary": {
    "name": "Fruity WaveShaper Preset Archetypes",
    "version": "1.0",
    "categories": [
      {
        "name": "808 Bass",
        "presets": [
          {
            "id": "808-warmth",
            "name": "808 Warm Saturation",
            "description": "Gentle saturation for 808 presence on small speakers",
            "curve": {
              "type": "s-curve",
              "points": [
                {"x": -1.0, "y": -0.9},
                {"x": -0.5, "y": -0.45},
                {"x": 0.0, "y": 0.0},
                {"x": 0.5, "y": 0.45},
                {"x": 1.0, "y": 0.9}
              ]
            },
            "parameters": {
              "pre": 10,
              "mix": 60,
              "post": -8,
              "mode": "Unipolar",
              "oversample": "4x",
              "center": true
            },
            "tags": ["808", "sub-bass", "warmth", "hip-hop", "trap"],
            "vibeTarget": ["Moody", "Vibey"]
          },
          {
            "id": "808-aggressive",
            "name": "808 Aggressive",
            "description": "Harder saturation for distorted 808 character",
            "curve": {
              "type": "hard-clip",
              "points": [
                {"x": -1.0, "y": -0.85},
                {"x": -0.7, "y": -0.7},
                {"x": 0.0, "y": 0.0},
                {"x": 0.7, "y": 0.7},
                {"x": 1.0, "y": 0.85}
              ]
            },
            "parameters": {
              "pre": 14,
              "mix": 70,
              "post": -12,
              "mode": "Unipolar",
              "oversample": "4x",
              "center": true
            },
            "tags": ["808", "aggressive", "distorted", "trap", "experimental"],
            "vibeTarget": ["Psychedelic", "Upbeat"]
          }
        ]
      },
      {
        "name": "Drums",
        "presets": [
          {
            "id": "drum-punch",
            "name": "Drum Punch Enhancer",
            "description": "Transient bite for kicks and snares",
            "curve": {
              "type": "hard-clip",
              "points": [
                {"x": -1.0, "y": -0.9},
                {"x": -0.5, "y": -0.5},
                {"x": 0.0, "y": 0.0},
                {"x": 0.6, "y": 0.7},
                {"x": 0.8, "y": 0.8},
                {"x": 1.0, "y": 0.8}
              ]
            },
            "parameters": {
              "pre": 16,
              "mix": 65,
              "post": -14,
              "mode": "Bipolar",
              "oversample": "4x",
              "center": true
            },
            "tags": ["drums", "transient", "punch", "edm", "hip-hop"],
            "vibeTarget": ["Upbeat", "Vibey"]
          },
          {
            "id": "drum-saturation",
            "name": "Drum Saturation",
            "description": "Warm drum bus saturation",
            "curve": {
              "type": "s-curve",
              "points": [
                {"x": -1.0, "y": -0.85},
                {"x": -0.3, "y": -0.25},
                {"x": 0.0, "y": 0.0},
                {"x": 0.3, "y": 0.25},
                {"x": 1.0, "y": 0.85}
              ]
            },
            "parameters": {
              "pre": 8,
              "mix": 50,
              "post": -6,
              "mode": "Unipolar",
              "oversample": "2x",
              "center": true
            },
            "tags": ["drums", "warm", "glue", "mix-bus"],
            "vibeTarget": ["Jazzy", "Moody"]
          }
        ]
      },
      {
        "name": "Vocals",
        "presets": [
          {
            "id": "vocal-warmth",
            "name": "Vocal Warmth",
            "description": "Subtle saturation for vocal presence",
            "curve": {
              "type": "s-curve",
              "points": [
                {"x": -1.0, "y": -0.92},
                {"x": -0.4, "y": -0.35},
                {"x": 0.0, "y": 0.0},
                {"x": 0.4, "y": 0.35},
                {"x": 1.0, "y": 0.92}
              ]
            },
            "parameters": {
              "pre": 6,
              "mix": 30,
              "post": -4,
              "mode": "Unipolar",
              "oversample": "4x",
              "center": true
            },
            "tags": ["vocals", "warmth", "presence", "rnb", "soul"],
            "vibeTarget": ["Moody", "Jazzy", "Vibey"]
          },
          {
            "id": "vocal-grit",
            "name": "Vocal Grit",
            "description": "Aggressive vocal character for attitude",
            "curve": {
              "type": "hard-clip",
              "points": [
                {"x": -1.0, "y": -0.85},
                {"x": -0.6, "y": -0.6},
                {"x": 0.0, "y": 0.0},
                {"x": 0.6, "y": 0.75},
                {"x": 0.9, "y": 0.85},
                {"x": 1.0, "y": 0.85}
              ]
            },
            "parameters": {
              "pre": 12,
              "mix": 40,
              "post": -10,
              "mode": "Bipolar",
              "oversample": "4x",
              "center": true
            },
            "tags": ["vocals", "grit", "attitude", "hip-hop", "rap"],
            "vibeTarget": ["Upbeat", "Psychedelic"]
          }
        ]
      },
      {
        "name": "Mix Bus",
        "presets": [
          {
            "id": "mix-glue",
            "name": "Mix Bus Glue",
            "description": "Subtle saturation for mix cohesion",
            "curve": {
              "type": "s-curve",
              "points": [
                {"x": -1.0, "y": -0.95},
                {"x": -0.5, "y": -0.45},
                {"x": 0.0, "y": 0.0},
                {"x": 0.5, "y": 0.45},
                {"x": 1.0, "y": 0.95}
              ]
            },
            "parameters": {
              "pre": 4,
              "mix": 20,
              "post": -2,
              "mode": "Unipolar",
              "oversample": "4x",
              "center": true
            },
            "tags": ["mix-bus", "glue", "subtle", "mastering"],
            "vibeTarget": ["Vibey", "Jazzy", "Moody"]
          }
        ]
      },
      {
        "name": "Creative",
        "presets": [
          {
            "id": "bitcrush",
            "name": "Bitcrusher",
            "description": "Digital degradation staircase",
            "curve": {
              "type": "staircase",
              "steps": 8,
              "points": "auto-generated"
            },
            "parameters": {
              "pre": 18,
              "mix": 80,
              "post": -15,
              "mode": "Unipolar",
              "oversample": "8x",
              "center": true
            },
            "tags": ["creative", "lo-fi", "destruction", "experimental"],
            "vibeTarget": ["Psychedelic"]
          },
          {
            "id": "limiter",
            "name": "Soft Limiter",
            "description": "Transparent peak control",
            "curve": {
              "type": "limiter",
              "threshold": 0.8,
              "points": [
                {"x": -1.0, "y": -1.0},
                {"x": -0.8, "y": -0.8},
                {"x": 0.0, "y": 0.0},
                {"x": 0.8, "y": 0.8},
                {"x": 1.0, "y": 0.8}
              ]
            },
            "parameters": {
              "pre": 6,
              "mix": 100,
              "post": 0,
              "mode": "Unipolar",
              "oversample": "4x",
              "center": true
            },
            "tags": ["limiter", "peak-control", "utility"],
            "vibeTarget": ["Upbeat"]
          }
        ]
      }
    ]
  }
}

```

---

## FILE: 02-Data\presets\vibe-presets.json

```json
{
  "vibePresets": {
    "name": "Fruity WaveShaper Vibe-Targeted Presets",
    "version": "1.0",
    "description": "Curated presets organized by vibe targets for quick selection",
    "vibes": [
      {
        "id": "moody",
        "name": "Moody",
        "description": "Warm, atmospheric, introspective saturation",
        "characteristics": ["Warm", "Smooth", "Even harmonics", "Subtle"],
        "presets": [
          {
            "name": "Moody 808",
            "curve": "soft-clip",
            "parameters": {
              "pre": 8,
              "mix": 50,
              "post": -6,
              "mode": "Unipolar",
              "oversample": "2x"
            },
            "application": "Subtle 808 warmth for emotional tracks"
          },
          {
            "name": "Moody Vocals",
            "curve": "soft-clip",
            "parameters": {
              "pre": 4,
              "mix": 25,
              "post": -3,
              "mode": "Unipolar",
              "oversample": "4x"
            },
            "application": "Gentle vocal presence without edge"
          },
          {
            "name": "Moody Mix Bus",
            "curve": "soft-clip",
            "parameters": {
              "pre": 3,
              "mix": 20,
              "post": -2,
              "mode": "Unipolar",
              "oversample": "4x"
            },
            "application": "Subtle glue for emotional cohesion"
          }
        ]
      },
      {
        "id": "upbeat",
        "name": "Upbeat",
        "description": "Energetic, punchy, driving distortion",
        "characteristics": ["Aggressive", "Punchy", "Mixed harmonics", "Forward"],
        "presets": [
          {
            "name": "Upbeat Drums",
            "curve": "hard-clip",
            "parameters": {
              "pre": 14,
              "mix": 70,
              "post": -12,
              "mode": "Bipolar",
              "oversample": "4x"
            },
            "application": "Maximum impact for dance/EDM drums"
          },
          {
            "name": "Upbeat 808",
            "curve": "s-curve-aggressive",
            "parameters": {
              "pre": 12,
              "mix": 65,
              "post": -10,
              "mode": "Unipolar",
              "oversample": "4x"
            },
            "application": "Hard-hitting 808s for club tracks"
          },
          {
            "name": "Upbeat Vocals",
            "curve": "asymmetric-hard",
            "parameters": {
              "pre": 10,
              "mix": 45,
              "post": -8,
              "mode": "Bipolar",
              "oversample": "4x"
            },
            "application": "Attitude and presence for hype vocals"
          }
        ]
      },
      {
        "id": "psychedelic",
        "name": "Psychedelic",
        "description": "Experimental, complex, mind-bending textures",
        "characteristics": ["Complex", "Weird", "All harmonics", "Creative"],
        "presets": [
          {
            "name": "Psychedelic Drums",
            "curve": "foldback",
            "parameters": {
              "pre": 16,
              "mix": 60,
              "post": -14,
              "mode": "Bipolar",
              "oversample": "8x"
            },
            "application": "Modular-style drum destruction"
          },
          {
            "name": "Psychedelic Bass",
            "curve": "asymmetric-soft",
            "parameters": {
              "pre": 12,
              "mix": 70,
              "post": -10,
              "mode": "Bipolar",
              "oversample": "8x"
            },
            "application": "Warped bass textures for experimental"
          },
          {
            "name": "Psychedelic Effects",
            "curve": "staircase-8",
            "parameters": {
              "pre": 20,
              "mix": 80,
              "post": -18,
              "mode": "Unipolar",
              "oversample": "16x"
            },
            "application": "Digital artifacts and lo-fi destruction"
          }
        ]
      },
      {
        "id": "jazzy",
        "name": "Jazzy",
        "description": "Smooth, sophisticated, vintage warmth",
        "characteristics": ["Warm", "Smooth", "Even harmonics", "Musical"],
        "presets": [
          {
            "name": "Jazzy Mix Bus",
            "curve": "soft-clip",
            "parameters": {
              "pre": 2,
              "mix": 15,
              "post": -1,
              "mode": "Unipolar",
              "oversample": "2x"
            },
            "application": "Ultra-subtle glue for jazz/R&B"
          },
          {
            "name": "Jazzy Drums",
            "curve": "soft-clip",
            "parameters": {
              "pre": 6,
              "mix": 40,
              "post": -5,
              "mode": "Unipolar",
              "oversample": "2x"
            },
            "application": "Warm drum character without aggression"
          },
          {
            "name": "Jazzy Keys",
            "curve": "soft-limiter",
            "parameters": {
              "pre": 5,
              "mix": 30,
              "post": -4,
              "mode": "Unipolar",
              "oversample": "4x"
            },
            "application": "Controlled piano/rhodes warmth"
          }
        ]
      },
      {
        "id": "vibey",
        "name": "Vibey",
        "description": "Cool, relaxed, smooth character",
        "characteristics": ["Warm", "Relaxed", "Even harmonics", "Chill"],
        "presets": [
          {
            "name": "Vibey 808",
            "curve": "soft-clip",
            "parameters": {
              "pre": 6,
              "mix": 55,
              "post": -5,
              "mode": "Unipolar",
              "oversample": "2x"
            },
            "application": "Relaxed sub-bass for chill tracks"
          },
          {
            "name": "Vibey Vocals",
            "curve": "soft-clip",
            "parameters": {
              "pre": 5,
              "mix": 35,
              "post": -4,
              "mode": "Unipolar",
              "oversample": "4x"
            },
            "application": "Smooth vocal presence for laid-back vibes"
          },
          {
            "name": "Vibey Atmosphere",
            "curve": "soft-clip",
            "parameters": {
              "pre": 3,
              "mix": 45,
              "post": -2,
              "mode": "Unipolar",
              "oversample": "4x"
            },
            "application": "Subtle saturation for ambient layers"
          }
        ]
      }
    ]
  }
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (WaveShaper)

## 1. The "Safety First" Rule
- **Rule:** Always keep **CENTER** (DC Offset removal) turned **ON**.
- **Reason:** Asymmetric waveshaping (especially in Bipolar mode) can shift your whole waveform off the zero-line, eating your headroom and causing clicks. [SRC: REPUTABLE]

## 2. Harmonic Balance
- **Rule:** Even harmonics = Warm (Vibey). Odd harmonics = Aggressive (Upbeat).
- **Application:** Use smooth, rounded curves for R&B. Use sharp, angular corners for Trap and Industrial rap.

## 3. Transient Preservation
- **Rule:** Distortion kills the "Click."
- **Application:** Use the **MIX** knob at 20-30% for drums. This allows the original sharp transient to pass through while the WaveShaper adds harmonic "body" underneath it.

## 4. Aliasing Awareness
- **Rule:** Don't let digital "Ice" ruin the high end.
- **Application:** For high-pitched melodies (Leads/Bells), always use **4x or 8x Oversampling**. This prevents the distortion from reflecting back as unpleasant metallic noise.

## 5. 808 "Talk" Shape
- **Rule:** Curve the low-mids.
- **Application:** In the graph, create a small "hump" in the middle of the line (around the 50% input mark). This distorts the "body" of the 808 without squashing the deep sub-fundamental at the start of the wave. [SRC: IL-MAN]
```

---

## FILE: 02-Data\rules\safety-rules.json

```json
{
  "safetyRules": {
    "name": "Fruity WaveShaper Safety Rules",
    "version": "1.0",
    "description": "Critical safety rules for preventing distortion disasters",
    "source": "[SRC: IL-MAN]",
    "categories": [
      {
        "name": "Gain Staging",
        "priority": "CRITICAL",
        "rules": [
          {
            "id": "gs-1",
            "rule": "Always compensate Post gain for Pre gain increases",
            "explanation": "Input drive increases output level; compensation prevents clipping",
            "formula": "Post ≈ -(Pre × 0.6 to 0.8)",
            "example": "If Pre = +12dB, set Post to -8 to -10dB",
            "consequence": "Channel or master bus clipping"
          },
          {
            "id": "gs-2",
            "rule": "Monitor channel meter after WaveShaper",
            "explanation": "Visual feedback confirms gain staging is correct",
            "action": "Watch for red indicators on channel and master meters",
            "consequence": "Unintentional clipping distortion"
          },
          {
            "id": "gs-3",
            "rule": "Leave Center enabled at all times",
            "explanation": "DC offset removal prevents cumulative low-frequency buildup",
            "exception": "Only disable for specific experimental sound design",
            "consequence": "Headroom loss, speaker damage, muddy low-end"
          },
          {
            "id": "gs-4",
            "rule": "Match processed/unprocessed levels for A/B comparison",
            "explanation": "Fair comparison requires equal loudness",
            "method": "Adjust Post gain until perceived loudness matches bypassed",
            "consequence": "Preference for louder option (not necessarily better)"
          }
        ]
      },
      {
        "name": "Aliasing Prevention",
        "priority": "HIGH",
        "rules": [
          {
            "id": "ap-1",
            "rule": "Use minimum 4x oversampling for hard clipping",
            "explanation": "Hard clipping generates high frequencies that alias without oversampling",
            "threshold": "Apply when Pre > +10dB or curve has sharp corners",
            "consequence": "Digital artifacts, 'metallic' sound, harshness"
          },
          {
            "id": "ap-2",
            "rule": "Use 8x-16x oversampling for bitcrushing effects",
            "explanation": "Stepped curves create extreme aliasing",
            "threshold": "Any stepped/staircase curve shape",
            "consequence": "Severe digital artifacts, unmusical distortion"
          },
          {
            "id": "ap-3",
            "rule": "Use 4x oversampling for high-frequency sources",
            "explanation": "Sources > 5kHz are more prone to audible aliasing",
            "sources": ["Hi-hats", "Cymbals", "High leads", "Vocal sibilance"],
            "consequence": "Harsh high-end, listener fatigue"
          },
          {
            "id": "ap-4",
            "rule": "Balance oversampling with CPU usage",
            "explanation": "Higher oversampling = higher CPU load",
            "guideline": "Use 2x-4x for most instances, 8x-16x only for critical tracks",
            "consequence": "Session lag, audio dropouts, crashes"
          }
        ]
      },
      {
        "name": "Mode Selection",
        "priority": "MEDIUM",
        "rules": [
          {
            "id": "ms-1",
            "rule": "Use Unipolar for low-end sources (808s, bass, kicks)",
            "explanation": "Even harmonics preserve low-end warmth and punch",
            "rationale": "Odd harmonics can cause phase issues and mud in lows",
            "consequence": "Weak or muddy low-end, loss of sub impact"
          },
          {
            "id": "ms-2",
            "rule": "Use conservative Mix settings with Bipolar mode",
            "explanation": "Bipolar generates more aggressive harmonics",
            "guideline": "Keep Mix at 30-50% for Bipolar unless full distortion effect desired",
            "consequence": "Harshness, listener fatigue, difficult to mix"
          },
          {
            "id": "ms-3",
            "rule": "Start with Unipolar for mix bus applications",
            "explanation": "Even harmonics are safer for full mix processing",
            "rationale": "Bipolar on mix bus can create cumulative harshness",
            "consequence": "Harsh, fatiguing mix, unprofessional sound"
          },
          {
            "id": "ms-4",
            "rule": "Match mode to distortion intensity",
            "explanation": "Aggressive distortion in Bipolar = very aggressive sound",
            "guideline": "Subtle saturation = Unipolar; Heavy crunch = Bipolar",
            "consequence": "Unintentional harshness or weak character"
          }
        ]
      },
      {
        "name": "Curve Design",
        "priority": "MEDIUM",
        "rules": [
          {
            "id": "cd-1",
            "rule": "Ensure curve passes through (0,0)",
            "explanation": "Unity gain at zero prevents signal cancellation",
            "check": "Verify graph shows diagonal through center point",
            "consequence": "Signal attenuation or cancellation at low levels"
          },
          {
            "id": "cd-2",
            "rule": "Avoid completely flat sections at extremes",
            "explanation": "Flat line = no signal; kills negative or positive half",
            "check": "Maintain minimum -0.8 to -1.0 and +0.8 to +1.0 range",
            "consequence": "Missing half of waveform, severe distortion"
          },
          {
            "id": "cd-3",
            "rule": "Round sharp corners for musical results",
            "explanation": "Sharp corners generate high-frequency harshness",
            "technique": "Use spline smoothing, add intermediate points",
            "consequence": "Unpleasant high-end, digital artifacts"
          },
          {
            "id": "cd-4",
            "rule": "Test extreme curves with sine waves",
            "explanation": "Pure tones reveal curve behavior clearly",
            "method": "Apply WaveShaper to 1kHz sine, analyze output spectrum",
            "consequence": "Unexpected harmonic content, aliasing"
          }
        ]
      },
      {
        "name": "Hip-Hop/R&B Specific",
        "priority": "HIGH",
        "rules": [
          {
            "id": "hh-1",
            "rule": "Never hard-clip 808s at high mix percentages",
            "explanation": "Hard clipping removes low-end punch and creates mud",
            "alternative": "Use soft S-curve with 50-70% Mix",
            "consequence": "Weak 808s, lost sub impact, muddy mix"
          },
          {
            "id": "hh-2",
            "rule": "De-ess vocals BEFORE WaveShaper",
            "explanation": "Distortion amplifies sibilance",
            "chain": "EQ → De-esser → WaveShaper → Compression",
            "consequence": "Harsh sibilance, unintelligible vocals"
          },
          {
            "id": "hh-3",
            "rule": "Keep vocal Mix at 35% or below",
            "explanation": "Vocals need intelligibility; heavy distortion conflicts",
            "exception": "Creative ad-libs or intentional effect",
            "consequence": "Lyrics unintelligible, amateur sound"
          },
          {
            "id": "hh-4",
            "rule": "Use parallel processing instead of mix bus distortion",
            "explanation": "Cumulative distortion across many tracks = harsh mix",
            "technique": "Create dedicated distortion bus, blend to taste",
            "consequence": "Fatiguing, over-compressed sound"
          },
          {
            "id": "hh-5",
            "rule": "Mono low frequencies before distortion",
            "explanation": "Stereo distortion of low frequencies = phase issues",
            "method": "Use stereo separation plugin or mono compatibility check",
            "consequence": "Phase cancellation, weak bass on mono systems"
          }
        ]
      }
    ],
    "emergencyProcedures": {
      "clipping": "Immediately reduce Post gain by 6-12dB",
      "silence": "Check curve passes through (0,0); redraw if needed",
      "harshness": "Enable 4x+ oversampling, switch to Unipolar, reduce Mix",
      "cpuOverload": "Reduce oversampling to 2x, freeze/render tracks",
      "lostLowEnd": "Enable Center, reduce Pre gain, use Unipolar"
    }
  }
}

```

---

## FILE: 02-Data\rules\symptom-solutions.json

```json
{
  "symptomSolutions": {
    "name": "Fruity WaveShaper Symptom-Solution Mapping",
    "version": "1.0",
    "description": "Decision tree for solving common distortion problems",
    "source": "[SRC: IL-MAN]",
    "symptoms": [
      {
        "id": "weak-low-end",
        "symptom": "808s or bass sound weak after WaveShaper",
        "priority": 1,
        "causes": [
          "Hard clipping removing low-end punch",
          "DC offset issues",
          "Bipolar mode on low frequencies",
          "Low Mix percentage"
        ],
        "solutions": [
          {
            "action": "Switch to Unipolar mode",
            "reason": "Even harmonics preserve low-end warmth",
            "priority": 1
          },
          {
            "action": "Use soft S-curve instead of hard clip",
            "reason": "Gentle saturation maintains fundamental",
            "priority": 1
          },
          {
            "action": "Increase Mix to 50-70%",
            "reason": "Blend more original signal",
            "priority": 2
          },
          {
            "action": "Verify Center is enabled",
            "reason": "DC offset can attenuate lows",
            "priority": 2
          }
        ],
        "prevention": "Always use Unipolar for 808s unless intentional effect"
      },
      {
        "id": "harsh-sound",
        "symptom": "Sound is harsh, grating, or fatiguing",
        "priority": 1,
        "causes": [
          "Aliasing from insufficient oversampling",
          "Bipolar mode generating odd harmonics",
          "Sharp corners in curve",
          "Too high Pre gain"
        ],
        "solutions": [
          {
            "action": "Enable 4x-8x oversampling",
            "reason": "Reduces aliasing artifacts",
            "priority": 1
          },
          {
            "action": "Switch to Unipolar mode",
            "reason": "Even harmonics are more musical",
            "priority": 1
          },
          {
            "action": "Round curve corners",
            "reason": "Sharp corners generate high frequencies",
            "priority": 2
          },
          {
            "action": "Reduce Pre gain by 3-6dB",
            "reason": "Less drive = less harmonic generation",
            "priority": 2
          }
        ],
        "prevention": "Use minimum 4x oversampling for any noticeable distortion"
      },
      {
        "id": "digital-artifacts",
        "symptom": "Metallic, shimmering, or 'digital' artifacts",
        "priority": 1,
        "causes": [
          "Aliasing from no oversampling",
          "Bitcrushing without oversampling",
          "High-frequency sources with hard clipping"
        ],
        "solutions": [
          {
            "action": "Enable 8x-16x oversampling",
            "reason": "High-frequency sources need more oversampling",
            "priority": 1
          },
          {
            "action": "Use softer curve",
            "reason": "Less aggressive curves generate fewer artifacts",
            "priority": 2
          },
          {
            "action": "Switch to Unipolar mode",
            "reason": "Even harmonics less prone to aliasing",
            "priority": 2
          }
        ],
        "prevention": "Test with sine waves to identify aliasing before mixing"
      },
      {
        "id": "no-effect",
        "symptom": "Can't hear any distortion effect",
        "priority": 2,
        "causes": [
          "Mix set to 0%",
          "Pre gain too low",
          "Curve is linear",
          "Plugin bypassed"
        ],
        "solutions": [
          {
            "action": "Verify Mix is above 0%",
            "reason": "0% Mix = no processed signal",
            "priority": 1
          },
          {
            "action": "Increase Pre gain to +10dB or higher",
            "reason": "Low drive = minimal curve interaction",
            "priority": 1
          },
          {
            "action": "Check curve deviates from diagonal",
            "reason": "Linear curve = no distortion",
            "priority": 1
          },
          {
            "action": "Confirm plugin is not bypassed",
            "reason": "Bypassed plugins pass audio unchanged",
            "priority": 1
          }
        ],
        "prevention": "Start with moderate Pre gain (+8dB) and adjust to taste"
      },
      {
        "id": "signal-loss",
        "symptom": "Audio disappears or becomes very quiet",
        "priority": 1,
        "causes": [
          "Curve has flat section at bottom",
          "Not passing through (0,0)",
          "Negative half completely clipped"
        ],
        "solutions": [
          {
            "action": "Reset curve to linear",
            "reason": "Restores proper signal flow",
            "priority": 1
          },
          {
            "action": "Ensure curve passes through (0,0)",
            "reason": "Center point must maintain unity gain",
            "priority": 1
          },
          {
            "action": "Verify output range covers -0.8 to +0.8 minimum",
            "reason": "Extreme clipping kills half the signal",
            "priority": 1
          }
        ],
        "prevention": "Always verify curve passes through center before finalizing"
      },
      {
        "id": "vocals-sibilant",
        "symptom": "Vocals become too sibilant after WaveShaper",
        "priority": 2,
        "causes": [
          "Distortion amplifies existing sibilance",
          "Bipolar mode emphasizing transients",
          "High Pre gain on vocal track"
        ],
        "solutions": [
          {
            "action": "Add de-esser BEFORE WaveShaper",
            "reason": "Remove sibilance before distortion amplifies it",
            "priority": 1
          },
          {
            "action": "Reduce Mix to 20-30%",
            "reason": "Less processed signal = less sibilance",
            "priority": 2
          },
          {
            "action": "Switch to Unipolar mode",
            "reason": "Even harmonics less aggressive on transients",
            "priority": 2
          },
          {
            "action": "Reduce Pre gain",
            "reason": "Less drive = less harmonic generation",
            "priority": 3
          }
        ],
        "prevention": "Always de-ess vocals before applying distortion"
      },
      {
        "id": "drums-mushy",
        "symptom": "Drums lose punch and sound mushy",
        "priority": 2,
        "causes": [
          "Soft curve rounding off transients",
          "Too high Mix percentage",
          "Unipolar mode on transients"
        ],
        "solutions": [
          {
            "action": "Switch to Bipolar mode",
            "reason": "Asymmetric distortion preserves transient bite",
            "priority": 1
          },
          {
            "action": "Use hard clip curve",
            "reason": "Sharp threshold maintains transient edge",
            "priority": 1
          },
          {
            "action": "Reduce Mix slightly",
            "reason": "Blend more dry transient",
            "priority": 2
          }
        ],
        "prevention": "Use Bipolar mode for drum transients and punch"
      },
      {
        "id": "cpu-overload",
        "symptom": "FL Studio lagging or audio dropouts",
        "priority": 3,
        "causes": [
          "Too many instances with high oversampling",
          "16x oversampling on all tracks",
          "Complex curves with many points"
        ],
        "solutions": [
          {
            "action": "Reduce oversampling to 2x-4x on non-critical tracks",
            "reason": "Lower quality setting reduces CPU",
            "priority": 1
          },
          {
            "action": "Freeze or render distorted tracks",
            "reason": "Baked-in distortion frees CPU",
            "priority": 1
          },
          {
            "action": "Consolidate multiple instances into buses",
            "reason": "Group processing reduces instance count",
            "priority": 2
          }
        ],
        "prevention": "Use 4x as default; reserve 8x-16x for critical tracks only"
      }
    ],
    "decisionTree": {
      "firstQuestion": "What is the primary problem?",
      "branches": {
        "soundQuality": {
          "question": "What does it sound like?",
          "options": {
            "harsh": "harsh-sound",
            "digital": "digital-artifacts",
            "weak": "weak-low-end",
            "mushy": "drums-mushy",
            "sibilant": "vocals-sibilant"
          }
        },
        "technical": {
          "question": "What is happening?",
          "options": {
            "noSound": "signal-loss",
            "noEffect": "no-effect",
            "lag": "cpu-overload"
          }
        }
      }
    }
  }
}

```

---

## FILE: 02-Data\rules\workflow-rules.json

```json
{
  "workflowRules": {
    "name": "Fruity WaveShaper Workflow Decision Rules",
    "version": "1.0",
    "description": "Rules for selecting appropriate WaveShaper settings by context",
    "source": "[SRC: IL-MAN]",
    "contexts": [
      {
        "name": "808s and Sub Bass",
        "rules": {
          "mode": {
            "value": "Unipolar",
            "reason": "Even harmonics preserve low-end warmth and punch",
            "exception": "Aggressive distorted 808s may use Bipolar with caution"
          },
          "curve": {
            "value": "soft-s-curve",
            "reason": "Gentle saturation maintains fundamental frequency",
            "avoid": "hard-clipping (removes punch)"
          },
          "preGain": {
            "min": 6,
            "max": 14,
            "sweetSpot": "8-12dB",
            "reason": "Enough drive for harmonics, not enough to lose sub"
          },
          "mix": {
            "min": 40,
            "max": 70,
            "sweetSpot": "50-60%",
            "reason": "Blend original punch with saturated presence"
          },
          "oversample": {
            "minimum": "2x",
            "recommended": "4x",
            "reason": "Low-frequency sources less prone to aliasing"
          },
          "chainPosition": {
            "after": "Initial EQ (high-pass cleanup)",
            "before": "Compression and limiting",
            "reason": "Saturation before compression preserves character"
          }
        }
      },
      {
        "name": "Drums (Kicks, Snares, Hats)",
        "rules": {
          "mode": {
            "value": "Bipolar",
            "reason": "Asymmetric distortion preserves transient bite",
            "exception": "Subtle drum bus may use Unipolar"
          },
          "curve": {
            "value": "hard-clip",
            "reason": "Sharp threshold enhances transients",
            "options": ["hard-clip", "asymmetric-hard"]
          },
          "preGain": {
            "min": 10,
            "max": 18,
            "sweetSpot": "12-16dB",
            "reason": "High drive for aggressive transient control"
          },
          "mix": {
            "min": 50,
            "max": 80,
            "sweetSpot": "60-70%",
            "reason": "Aggressive distortion for impact"
          },
          "oversample": {
            "minimum": "4x",
            "recommended": "4x-8x",
            "reason": "Hats and cymbals have high-frequency content"
          },
          "hiHatSpecific": {
            "mode": "Unipolar preferred",
            "preGain": "4-8dB",
            "oversample": "8x minimum",
            "reason": "High frequencies need more anti-aliasing"
          }
        }
      },
      {
        "name": "Vocals",
        "rules": {
          "mode": {
            "primary": "Unipolar",
            "alternative": "Bipolar (for attitude/grit)",
            "reason": "Even harmonics are more forgiving on vocals"
          },
          "curve": {
            "value": "soft-s-curve",
            "reason": "Gentle saturation maintains intelligibility",
            "avoid": "hard-clipping (causes sibilance issues)"
          },
          "preGain": {
            "min": 3,
            "max": 10,
            "sweetSpot": "5-8dB",
            "reason": "Conservative drive preserves vocal clarity"
          },
          "mix": {
            "min": 15,
            "max": 40,
            "sweetSpot": "25-35%",
            "reason": "Transparency - keep lyrics intelligible"
          },
          "oversample": {
            "minimum": "4x",
            "recommended": "4x",
            "reason": "Vocals have sibilance in high frequencies"
          },
          "chainRequirements": {
            "before": "De-esser",
            "reason": "Distortion amplifies sibilance - de-ess first"
          },
          "adLibs": {
            "mix": "60-80%",
            "curve": "asymmetric",
            "reason": "Background vocals can be more aggressive"
          }
        }
      },
      {
        "name": "Mix Bus",
        "rules": {
          "mode": {
            "value": "Unipolar",
            "critical": true,
            "reason": "Even harmonics safer for full mix; Bipolar creates cumulative harshness"
          },
          "curve": {
            "value": "soft-s-curve",
            "reason": "Very gentle saturation for glue effect",
            "avoid": ["hard-clip", "bipolar", "aggressive"]
          },
          "preGain": {
            "min": 1,
            "max": 6,
            "sweetSpot": "2-4dB",
            "reason": "Extremely conservative for mix cohesion"
          },
          "mix": {
            "min": 10,
            "max": 25,
            "sweetSpot": "15-20%",
            "reason": "Subtle effect - full mix context"
          },
          "oversample": {
            "minimum": "4x",
            "recommended": "4x",
            "reason": "Full mix has all frequencies"
          },
          "alternativeApproach": {
            "method": "Parallel bus instead of insert",
            "reason": "More control, less cumulative distortion",
            "recommended": true
          },
          "warning": "Mix bus distortion is powerful - easy to overdo"
        }
      },
      {
        "name": "Creative Sound Design",
        "rules": {
          "mode": {
            "value": "Bipolar",
            "reason": "Maximum flexibility and complexity",
            "option": "Either - experiment freely"
          },
          "curve": {
            "options": ["foldback", "staircase", "asymmetric", "custom"],
            "reason": "No rules - create unique textures"
          },
          "preGain": {
            "range": "0 to +24dB",
            "reason": "Extreme drive for creative destruction"
          },
          "mix": {
            "range": "0 to 100%",
            "reason": "Context-dependent - full creative freedom"
          },
          "oversample": {
            "minimum": "8x",
            "recommended": "16x for extreme cases",
            "reason": "Creative distortion often needs maximum quality"
          },
          "guideline": "No safety rules - experiment freely"
        }
      }
    ],
    "vibeMapping": {
      "Moody": {
        "mode": "Unipolar",
        "curve": "soft-s-curve",
        "preGainRange": "4-10dB",
        "mixRange": "30-60%",
        "characteristics": ["Warm", "Even harmonics", "Introspective"]
      },
      "Upbeat": {
        "mode": "Bipolar",
        "curve": "hard-clip or asymmetric",
        "preGainRange": "10-16dB",
        "mixRange": "60-80%",
        "characteristics": ["Aggressive", "Punchy", "Energetic"]
      },
      "Psychedelic": {
        "mode": "Bipolar",
        "curve": "foldback or custom",
        "preGainRange": "12-20dB",
        "mixRange": "40-70%",
        "characteristics": ["Complex", "Weird", "Experimental"]
      },
      "Jazzy": {
        "mode": "Unipolar",
        "curve": "soft-s-curve or soft-limiter",
        "preGainRange": "2-8dB",
        "mixRange": "20-45%",
        "characteristics": ["Smooth", "Musical", "Sophisticated"]
      },
      "Vibey": {
        "mode": "Unipolar",
        "curve": "soft-s-curve",
        "preGainRange": "4-8dB",
        "mixRange": "35-60%",
        "characteristics": ["Relaxed", "Warm", "Cool"]
      }
    },
    "safetyChecklist": {
      "beforeApplying": [
        "Input level is healthy (-12dB to -6dB)",
        "Center is enabled",
        "Oversampling appropriate for distortion level"
      ],
      "afterApplying": [
        "Output level matches input (use Post gain)",
        "No clipping on channel or master meter",
        "Effect is audible and appropriate"
      ],
      "beforeFinalizing": [
        "Aliasing checked with high-frequency sources",
        "Low-end preserved on bass/808s",
        "Vocals remain intelligible"
      ]
    }
  }
}

```

---

## FILE: 03-Workflows\by-goal\00_808_Saturation_Guide.md

```markdown
# Goal: 808 Saturation Guide (Fruity WaveShaper)

## Routing Context
*   **Track:** 808 Mixer Track.
*   **Placement:** After EQ, before Limiter.

## Step-by-Step Setup
1.  Load **Fruity WaveShaper**.
2.  Enable **Unipolar** mode (default).
3.  Draw a subtle curve: 
    *   Create a point at the 50% mark on the X-axis.
    *   Push that point slightly upward toward the top-left corner.
4.  Play your 808. Increase **Pre-Gain** until you hear the sub-bass start to "growl" or "hum."
5.  Check the "Post-Gain" to ensure you aren't clipping the mixer track red.

## Starting Settings
*   **Curve:** Gentle "S" or soft-arc.
*   **Pre-Gain:** +3dB to +6dB.
*   **Oversampling:** 2x or 4x.

## What to Listen For
*   Listen for "mid-range presence." You want the 808 to feel audible on laptop/phone speakers without losing the deep sub power.

## Variations
1.  **Aggressive:** Draw a sharper curve for a "fuzzy" distorted 808 (great for dark trap).
2.  **Tube-Warmth:** In **Bipolar** mode, draw a slightly different curve for the top and bottom to add "warm" asymmetric saturation.

## Pitfall
*   **Loss of Sub:** If you drive the Pre-Gain too hard, you might actually flatten the 808 so much it loses its low-end impact. Back off the Pre-Gain if the sub feels "thin."

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Asymmetric "Tube" Saturation (WaveShaper)

## Routing Context
- **Target:** Lead R&B Vocal or Rhodes Piano.
- **Position:** Insert FX (Slot 1).

## Step-by-Step Setup
1.  On your track, load **Fruity WaveShaper**.
2.  Switch the mode to **BIPOLAR** (the icon with two halves).
3.  **Top Half (Positive Peaks):** Draw a smooth, rounded curve that flattens slightly at the top.
4.  **Bottom Half (Negative Peaks):** Leave it as a perfectly straight 45-degree line (Clean).
5.  **The Play:** Increase the **PRE** knob until you hear a subtle "warmth" in the vocal.
6.  **Oversampling:** Set to `8x`.

## Result
- By only distorting one side of the waveform, you are creating specific "Even Harmonics." This mimics the behavior of real analog vacuum tubes, adding a rich, "Vibey" character that sounds organic and expensive.

## Vibe Check
- **Vibey/Jazzy:** Perfect for adding "Soul" to digital instruments.

## Pitfalls + Fixes
- **Pitfall:** "The volume is too quiet."
  - **Fix:** Increase the **POST** knob. Waveshaping often reduces the peak volume of a signal. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\11_Vibe_Upbeat.md

```markdown
# Vibe: Upbeat Kick Clipping (Loudness Hack)

## The Concept
Use WaveShaper as a "Hard Clipper" to shave off the invisible peaks of your kick drum. This allows you to turn the kick up louder in the mix without it hitting 0dB.

## Setup
*   **Track:** Kick Mixer Track.
*   **Placement:** Last plugin in the chain.

## Starting Settings
1.  Draw a perfectly straight diagonal line from the bottom-left to the top-right.
2.  Now, grab the top-right point and drag it **to the left** (making the line flat at the very top).
3.  **Bands:** Set Oversampling to **16x** (Important for transients).

## Workflow
1.  Play your Kick. 
2.  Increase **Pre-Gain** until you see the waveform being "squashed" against that top flat line.
3.  Stop when the kick starts to sound "fuzzy" or "distorted." Back it off slightly.
4.  The kick should now sound louder and punchier, but the peaks are capped.

## Variations
*   **Soft Clip:** Instead of a flat line, make the very end of the line a smooth curve. This is more musical but less aggressive.

## Pitfalls
*   **Aliasing:** Without high oversampling, clipping transients can create "digital clicking." Always use 8x or 16x for drums. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\12_Vibe_Psychedelic.md

```markdown
# Vibe: Psychedelic Vocal Grit (Bipolar Asymmetry)

## The Concept
Using Bipolar mode to create "unstable" and harmonically complex distortion that sounds otherworldly.

## Setup
*   **Carrier:** Lead Vocal.
*   **Plugin:** Fruity WaveShaper.
*   **Mode:** **Bipolar** (Essential).

## Recipe
1.  In the graph, notice the center line.
2.  **Top Half (Positive):** Draw a smooth "S" curve for warmth.
3.  **Bottom Half (Negative):** Draw a "Staircase" (Stepped) shape.
4.  Increase **Pre-Gain**.

## What to Listen For
*   The vocal will sound "split." The vowels will have a warm analog texture, while the consonants and low-level noise will have a "crunchy" digital bit-crushed texture. 

## Automation
*   Automate the **Pre-Gain** to increase during high-energy words or ad-libs.
*   Automate the **Mix** knob to bring this grit in and out for "psychedelic" transitions.

## Variation
*   **Mirror World:** Swap the shapes (Staircase on top, S-curve on bottom) and listen to how the vocal character changes.

```

---

## FILE: 03-Workflows\by-goal\808-saturation.md

```markdown
# 808 Saturation Masterclass

## The Goal

Make 808s audible on small speakers (phones, earbuds) while maintaining sub-bass impact on systems that can reproduce it.

[SRC: IL-MAN] WaveShaper adds upper harmonics to 808s that create the perception of bass even on speakers that cannot reproduce the fundamental frequency.

## Why 808s Need Distortion

### The Physics Problem
- 808 fundamental: 30-60Hz
- Phone speaker response: Often rolls off below 200Hz
- Result: 808s disappear on phones

### The WaveShaper Solution
Add harmonics (60Hz, 90Hz, 120Hz, 180Hz...) that phones CAN reproduce.

`\`\`
Fundamental:  ████████  (40Hz - inaudible on phones)
2nd Harmonic:    ████████  (80Hz - barely audible)
3rd Harmonic:      ████████  (120Hz - audible!)
5th Harmonic:          ████████  (200Hz - clear!)
`\`\`

## The Perfect 808 Saturation Chain

### Step 1: Clean Up
**Before WaveShaper:**
- High-pass at 25-30Hz (remove rumble)
- Cut 200-400Hz mud if needed
- Boost 60-100Hz for body (optional)

### Step 2: WaveShaper Settings
**For Warm, Musical 808s:**
- **Mode:** Unipolar (even harmonics = warmth)
- **Curve:** Soft S-curve
- **Pre:** +8 to +12dB
- **Mix:** 50-70%
- **Post:** -8 to -12dB
- **Oversample:** 4x
- **Center:** Enabled

### Step 3: Post-Processing
**After WaveShaper:**
- Compression (glue the saturation)
- EQ (cut any harshness added by distortion)
- Limiter (control peaks)

## Three 808 Saturation Recipes

### Recipe 1: Warm Trap 808
Best for: Modern trap, melodic hip-hop
- **Mode:** Unipolar
- **Pre:** +10dB
- **Mix:** 60%
- **Curve:** Soft S-curve
- **Sound:** Present but warm, translates everywhere

### Recipe 2: Hard 808
Best for: Hard trap, drill
- **Mode:** Unipolar (or Bipolar for extra edge)
- **Pre:** +14dB
- **Mix:** 70%
- **Curve:** Hard clip
- **Sound:** Aggressive, distorted character

### Recipe 3: Subtle 808
Best for: R&B, soul, boom bap
- **Mode:** Unipolar
- **Pre:** +6dB
- **Mix:** 45%
- **Curve:** Gentle S-curve
- **Sound:** Natural enhancement, barely noticeable

## Common 808 Mistakes

### Mistake 1: Hard Clipping
**Problem:** Removes low-end punch
**Fix:** Use soft S-curve, not hard clip

### Mistake 2: 100% Mix
**Problem:** Loses original sub impact
**Fix:** Blend 50-70% to keep the fundamental

### Mistake 3: Bipolar Mode
**Problem:** Can cause phase issues in low-end
**Fix:** Use Unipolar unless you want aggressive distortion

### Mistake 4: No Oversampling
**Problem:** Aliasing creates harsh artifacts
**Fix:** Use 4x minimum

### Mistake 5: Too Much Distortion
**Problem:** 808 becomes mushy, loses definition
**Fix:** If you cannot hear the note, reduce Pre gain

## Advanced Techniques

### Parallel 808 Distortion
1. **Duplicate the 808 track**
2. **Original track:** Keep clean (100% sub)
3. **Duplicate track:** Heavy distortion (100% wet, no Mix)
4. **High-pass the distorted layer** at 100-150Hz
5. **Blend to taste**

**Why This Works:** Complete separation of sub and harmonics. Maximum control.

### Multi-Band Distortion
1. **Split 808 into bands** (use Maximus or similar)
2. **Sub band (30-80Hz):** Clean, no distortion
3. **Mid band (80-200Hz):** Light saturation
4. **High band (200Hz+):** Heavy saturation
5. **Blend bands**

**Why This Works:** Precise control over what gets distorted.

### Dynamic Distortion
- **Automate Pre gain:** More saturation on longer notes
- **Automate Mix:** Less distortion during busy sections
- **Sidechain to kick:** Distortion pumps with the beat

## Testing Your 808 Saturation

### Phone Test
1. Bounce mix
2. Play on phone speaker
3. Can you hear the 808 melody?
4. If yes, your saturation is working

### Car Test
1. Play in car with subwoofer
2. Is the sub too overwhelming?
3. Adjust Mix percentage accordingly

### Mono Test
1. Collapse mix to mono
2. Does 808 disappear?
3. If yes, check for phase issues (mono low-end BEFORE WaveShaper)

## Troubleshooting

### 808 Sounds Weak
- Increase Pre gain (+2-4dB)
- Increase Mix percentage
- Check for conflicting frequencies in other instruments

### 808 Sounds Harsh
- Switch to Unipolar mode
- Use softer curve
- Enable 4x+ oversampling

### 808 Disappears on Phones
- Increase Pre gain for more harmonics
- Check Mix is at least 50%
- Ensure you are not high-passing too aggressively

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\drum-punch.md

```markdown
# Drum Punch Enhancement

## The Goal

Add punch, crack, and aggression to drums while maintaining dynamic control.

[SRC: IL-MAN] Bipolar mode preserves transient bite through asymmetric distortion of drum hits.

## Drum Distortion Philosophy

Drums are about **transients**—the initial attack that makes a kick punch and a snare crack. WaveShaper can enhance or destroy these transients depending on your settings.

## Kick Drums: Maximum Impact

### The Challenge
Kicks need to hit hard without becoming muddy or losing low-end weight.

### Settings for Hard-Hitting Kicks
- **Mode:** Bipolar (asymmetric = bite)
- **Curve:** Hard clip or asymmetric
- **Pre:** +12 to +16dB
- **Mix:** 60-75%
- **Post:** -12 to -16dB
- **Oversample:** 4x-8x

### Asymmetric Kick Curve
**Positive half:** Hard clip (sharp attack)  
**Negative half:** Softer curve (sustain control)  

This emphasizes the transient while controlling the body.

### Technique
1. Solo the kick
2. Apply settings above
3. Adjust Mix until punch is maximized without losing body
4. Check in context with bass/808

## Snare Drums: Crack and Body

### The Challenge
Snares need crack (transient) AND body (ring). Different distortion for each.

### Settings for Cracking Snares
- **Mode:** Bipolar
- **Curve:** Asymmetric—hard positive, soft negative
- **Pre:** +10 to +14dB
- **Mix:** 55-70%
- **Post:** -10 to -14dB
- **Oversample:** 4x

### Technique
**Parallel Processing:**
1. **Main snare:** Light saturation (Unipolar, 30% Mix)
2. **Parallel bus:** Heavy distortion (Bipolar, 100% Mix)
3. **Blend parallel bus** underneath for crack
4. **EQ the parallel layer** (boost 3-5kHz for crack)

## Hi-Hats: Sizzle and Control

### The Challenge
Hats need density but can become harsh with distortion.

### Settings for Controlled Hats
- **Mode:** Unipolar (safer for highs)
- **Curve:** Gentle saturation
- **Pre:** +4 to +8dB
- **Mix:** 30-50%
- **Post:** -4 to -8dB
- **Oversample:** 8x (critical for high frequencies)

### Technique
**High-Frequency Protection:**
- Distort BEFORE any high-shelf boosts
- Or boost highs AFTER distortion
- Prevents excessive harshness

## Drum Bus Processing

### Settings for Cohesive Drum Sound
- **Mode:** Unipolar (glue) OR Bipolar (aggression)
- **Curve:** Soft clip or gentle saturation
- **Pre:** +6 to +10dB
- **Mix:** 40-60%
- **Post:** -6 to -10dB
- **Oversample:** 4x

### Philosophy
Drum bus saturation ties the kit together. Each drum gets individual character; the bus adds cohesion.

## Genre-Specific Drum Recipes

### Trap Drums
- **Mode:** Bipolar
- **Pre:** +14dB
- **Mix:** 70%
- **Oversample:** 4x
- **Character:** Aggressive, modern, hard-hitting

### Boom Bap Drums
- **Mode:** Unipolar
- **Pre:** +8dB
- **Mix:** 50%
- **Oversample:** 2x
- **Character:** Warm, vintage, punchy

### EDM Drums
- **Mode:** Bipolar
- **Pre:** +16dB
- **Mix:** 75%
- **Oversample:** 8x
- **Character:** Maximum impact, cutting through synths

### Lo-Fi Drums
- **Mode:** Unipolar
- **Pre:** +6dB
- **Mix:** 45%
- **Oversample:** 2x
- **Additional:** Bitcrush some elements
- **Character:** Warm, crushed, "vinyl" feel

## Advanced Drum Techniques

### Transient Shaping with Curves
**Goal:** Isolate and enhance just the transient

**Method:**
1. Use hard clip threshold at 0.6-0.7
2. Everything below threshold = clean
3. Everything above = clipped (enhanced transient)
4. Blend with Mix control

### Room Mic Distortion
1. Send drums to room reverb
2. Distort the room return heavily
3. Blend room distortion under dry drums
4. Creates "crushed room" sound

### Ghost Note Enhancement
- **Increase Pre gain** for ghost notes
- **Harder curve** for clear articulation
- **Lower Mix** to keep subtle
- Brings quiet notes forward without crushing loud ones

## Common Drum Mistakes

### Mistake 1: Too Much Distortion
**Problem:** Drums sound like white noise
**Fix:** Reduce Mix, use softer curve

### Mistake 2: Destroying Transients
**Problem:** Soft curve rounds off attacks
**Fix:** Use Bipolar mode, hard clip curve

### Mistake 3: Ignoring Phase
**Problem:** Distorted kick and 808 conflict
**Fix:** Check mono compatibility

### Mistake 4: No Oversampling on Hats
**Problem:** Harsh, digital-sounding cymbals
**Fix:** Use 8x+ oversampling

## Testing Your Drum Distortion

### Punch Test
1. Solo drums
2. Bypass WaveShaper
3. Re-enable WaveShaper
4. Should hear more attack, not just loudness

### Context Test
1. Play drums with music
2. Do drums cut through?
3. If not, increase Mix or Pre gain

### Fatigue Test
1. Listen for 30 seconds
2. Do ears tire?
3. If yes, reduce drive or switch to Unipolar

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\mix-bus-glue.md

```markdown
# Mix Bus Glue

## The Goal

Create cohesive, "glued" mixes with subtle saturation that makes everything sound like it belongs together.

[SRC: IL-MAN] Gentle mix bus saturation adds even harmonics that create musical cohesion across all track elements.

## Mix Bus Philosophy

Mix bus processing affects EVERYTHING. Small changes have big impacts. Conservative settings are essential.

**Warning:** It's easy to overdo mix bus distortion. When in doubt, use less.

## The Safe Mix Bus Recipe

### Settings
- **Mode:** Unipolar (even harmonics = musical cohesion)
- **Curve:** Gentle S-curve
- **Pre:** +2 to +4dB
- **Mix:** 15-25%
- **Post:** -2 to -4dB
- **Oversample:** 4x
- **HQ:** Enabled

### Why These Settings?
- **Unipolar:** Even harmonics create consonance, not dissonance
- **Low Pre:** Just enough drive for cohesion, not destruction
- **Low Mix:** Effect should be barely perceptible
- **HQ:** Ensures quality at these subtle levels

## Alternative: Parallel Mix Bus

### Method
1. Route all tracks to a "Mix Bus Distortion" send
2. Insert WaveShaper on the send bus
3. Heavier settings on the bus
4. Blend send bus underneath main mix

### Settings for Parallel Bus
- **Mode:** Unipolar or Bipolar
- **Pre:** +6 to +10dB
- **Mix:** 100% (on the bus)
- **Blend:** 10-20% of bus into main mix

### Why Parallel?
- More control over the amount
- Can EQ the distorted signal separately
- Easier to adjust after the fact

## Genre-Specific Mix Bus Approaches

### Hip-Hop Mix Bus
- **Mode:** Unipolar
- **Pre:** +3dB
- **Mix:** 20%
- **Character:** Warm, punchy, cohesive

### R&B/Soul Mix Bus
- **Mode:** Unipolar
- **Pre:** +2dB
- **Mix:** 15%
- **HQ:** Enabled
- **Character:** Smooth, expensive, musical

### EDM Mix Bus
- **Mode:** Unipolar
- **Pre:** +4dB
- **Mix:** 25%
- **Character:** Energetic, glued, punchy

### Lo-Fi Mix Bus
- **Mode:** Unipolar
- **Pre:** +3dB
- **Mix:** 30%
- **Oversample:** 2x
- **Character:** Warm, crushed, "vintage"

## When to Use Mix Bus Saturation

### Good Candidates
- Mix sounds "sterile" or "digital"
- Tracks feel disconnected from each other
- Need subtle "analog" character
- Final polish before limiting

### Skip Mix Bus Saturation When
- Individual tracks already heavily saturated
- Mix is already warm/dark
- You are not sure (can always add later)

## Testing Mix Bus Saturation

### A/B Test
1. Disable WaveShaper
2. Match loudness (adjust master fader)
3. Enable WaveShaper
4. Should hear cohesion, not "effect"

### Fatigue Test
1. Listen to full mix for 60 seconds
2. Do ears tire or feel stressed?
3. If yes, reduce Mix to 15% or less

### Element Check
1. Solo each element (kick, snare, vocal, etc.)
2. Does each element still sound good?
3. If any element suffers, reduce Pre or Mix

## Common Mix Bus Mistakes

### Mistake 1: Too Aggressive
**Problem:** Mix becomes harsh and fatiguing
**Fix:** Reduce Pre to +2dB, Mix to 15%

### Mistake 2: Bipolar Mode
**Problem:** Cumulative harshness across all tracks
**Fix:** Use Unipolar for mix bus

### Mistake 3: No Oversampling
**Problem:** Subtle aliasing artifacts
**Fix:** Use 4x minimum

### Mistake 4: Forgetting Post Gain
**Problem:** Mix bus level change affects everything
**Fix:** Compensate with Post gain

## Integration with Mastering Chain

### Position in Chain
`\`\`
Mix Elements → Mix Bus EQ → WaveShaper (Mix Bus Glue) → 
Master Bus Compression → Master Bus EQ → Limiter
`\`\`

### Before the Limiter
WaveShaper should come BEFORE the final limiter. Let the limiter catch any peaks created by saturation.

### With Master Bus Compression
- Saturation adds harmonics
- Compression controls dynamics
- Together create "finished" sound

## Advanced Mix Bus Techniques

### Dynamic Saturation
- Automate Mix percentage
- More saturation during choruses
- Less during verses
- Creates dynamic interest

### Frequency-Conscious Saturation
**Goal:** Saturation that respects frequency balance

**Method:**
1. Use multi-band approach
2. Different saturation for lows/mids/highs
3. Or: Use EQ before/after WaveShaper
4. Shape the tonal result

### Mid/Side Mix Bus
**Goal:** Different saturation for center and sides

**Method:**
1. Use M/S processing plugin
2. More saturation on sides (width)
3. Less on center (focus)
4. Creates "3D" mix depth

## Safety Checklist

Before committing to mix bus WaveShaper:

- [ ] Unipolar mode enabled
- [ ] Pre gain at +4dB or less
- [ ] Mix at 25% or less
- [ ] 4x oversampling enabled
- [ ] Post gain compensates for level change
- [ ] No clipping on master bus
- [ ] Mix sounds cohesive, not "effected"
- [ ] No listener fatigue after 60 seconds

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\vibe-jazzy.md

```markdown
# Mood: Jazzy - Sophisticated Saturation

## Vibe Target: Jazzy

**Characteristics:** Smooth, sophisticated, musical, warm  
**Goal:** Enhance musicality without obvious processing  
**Best For:** Jazz-influenced hip-hop, soul, R&B, lo-fi

[SRC: IL-MAN] Even harmonics from Unipolar mode create the musical consonance that fits jazzy productions.

## The Jazzy Philosophy

Jazzy distortion is about **musical enhancement**. You're adding harmonics that blend with the chord progressions, not fighting them. Think "vintage studio" not "modern plugin."

## 808s: Walking Bass Feel

### The Challenge
Jazzy 808s should feel like a walking bass line—present but not overwhelming. They need to groove, not just hit.

### Settings
- **Mode:** Unipolar (even harmonics = musical)
- **Curve:** Gentle S-curve with smooth transitions
- **Pre:** +6dB
- **Mix:** 50%
- **Post:** -5dB
- **Oversample:** 2x

### Technique
1. Longer 808 notes that "bloom"
2. Gentle saturation for note-to-note consistency
3. Less distortion on sustained notes
4. Follow the chord changes

**Why This Works:** Even harmonics (octave, fifth) harmonize with jazz chord voicings rather than clashing.

## Drums: Pocket and Swing

### Settings
- **Mode:** Unipolar
- **Curve:** Soft saturation
- **Pre:** +5dB
- **Mix:** 40%
- **Post:** -4dB

### Technique
Focus on "pocket" not punch. The drums should sit in the groove, not on top of it.

**Jazz Tip:** Less is more. Jazzy drums often benefit from subtle saturation that you barely notice but miss when it's gone.

## Vocals: Smooth and Sophisticated

### The Challenge
Jazzy vocals need to sound effortless and intimate. The production should disappear—only the performance matters.

### Settings
- **Mode:** Unipolar
- **Curve:** Very soft S-curve
- **Pre:** +3dB
- **Mix:** 20%
- **Post:** -2dB
- **Oversample:** 4x

### Chain
1. Minimal EQ (let the voice be natural)
2. **WaveShaper** (ultra-subtle warmth)
3. Gentle compression (2:1, slow attack)
4. Optional tape saturation after

**Philosophy:** The listener shouldn't hear the WaveShaper—just a "good sounding" vocal.

## Keys and Rhodes: Vintage Character

### Settings
- **Mode:** Unipolar
- **Curve:** Soft limiter shape
- **Pre:** +4dB
- **Mix:** 35%
- **Post:** -3dB

### Technique
Rhodes and electric pianos love gentle saturation—it mimics vintage amp and tape characteristics.

**Specific:** Rhodes often benefit from asymmetric curves (Bipolar) to simulate the "bark" of the tines.

## Mix Bus: Cohesive Warmth

### Settings
- **Mode:** Unipolar
- **Curve:** Gentle S-curve
- **Pre:** +2dB
- **Mix:** 15%
- **Post:** -1dB
- **HQ:** Enabled

### Philosophy
This is "invisible" processing. The goal is a mix that sounds like it came from a vintage console—warm, cohesive, expensive.

## Brass and Horns: Controlled Edge

### Settings
- **Mode:** Unipolar (standard) OR Bipolar (for "brass bite")
- **Curve:** Soft clip
- **Pre:** +6dB
- **Mix:** 30%

### Technique
Brass can handle slightly more aggressive distortion than vocals. The "bite" helps them cut through without harshness.

## Example Track Breakdown

### Jazz-Hop Single
**808:** Walking bass (Pre: +6, Mix: 50%)  
**Drums:** Pocket groove (Pre: +5, Mix: 40%)  
**Vocals:** Smooth intimacy (Pre: +3, Mix: 20%)  
**Rhodes:** Vintage warmth (Pre: +4, Mix: 35%)  
**Mix Bus:** Cohesive glue (Pre: +2, Mix: 15%)  

**Result:** Sophisticated production that feels vintage and expensive.

## Harmonic Theory for Jazz

### Why Even Harmonics Work
- **2nd harmonic:** Octave above (perfect consonance)
- **4th harmonic:** Two octaves above (perfect consonance)
- **6th harmonic:** Octave + fifth (consonant interval)

These harmonics create "chord tones" that enhance rather than clash with jazz harmonies.

### Chord-Specific Tips
- **Major 7th chords:** Even harmonics emphasize the major 3rd and 7th
- **Minor chords:** Even harmonics add warmth to the minor 3rd
- **Dominant chords:** Even harmonics support the tension

## Safety for Jazzy Vibes

### Do
- Use Unipolar for musical even harmonics
- Keep everything subtle (low Pre, low Mix)
- Enable HQ mode for critical applications
- Follow the chord changes with 808 notes

### Don't
- Use aggressive curves (breaks the smooth vibe)
- Push Mix above 40% on any element
- Use Bipolar unless specifically wanted
- Over-process (jazz is about performance, not production)

## Quick Settings Reference

| Element | Mode | Curve | Pre | Mix | Post |
|---------|------|-------|-----|-----|------|
| 808 | Unipolar | Gentle S | +6 | 50% | -5 |
| Drums | Unipolar | Soft | +5 | 40% | -4 |
| Vocals | Unipolar | Very soft | +3 | 20% | -2 |
| Keys | Unipolar | Soft | +4 | 35% | -3 |
| Mix Bus | Unipolar | Gentle | +2 | 15% | -1 |
| Brass | Unipolar | Soft | +6 | 30% | -5 |

---

**Vibe:** Jazzy  
**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\vibe-moody.md

```markdown
# Mood: Moody - Atmospheric Distortion

## Vibe Target: Moody

**Characteristics:** Warm, introspective, atmospheric, emotional  
**Goal:** Create depth and warmth without aggression  
**Best For:** Emotional hip-hop, R&B ballads, atmospheric productions

[SRC: IL-MAN] Unipolar mode creates even-order harmonics that blend musically with moody productions.

## The Moody Philosophy

Moody distortion is about **presence, not aggression**. You're adding harmonic richness that supports the emotional weight of the track, not competing with it.

## 808s: Warm Sub Presence

### The Challenge
Moody 808s need to rumble without overwhelming. The goal is "felt" bass that adds weight to emotional moments.

### Settings
- **Mode:** Unipolar (warmth preservation)
- **Curve:** Soft S-curve with gentle compression
- **Pre:** +8dB
- **Mix:** 55%
- **Post:** -6dB
- **Oversample:** 2x (low frequencies, subtle processing)

### Technique
1. Start with 808 peaking at -12dB
2. Apply WaveShaper as described
3. High-pass other elements at 80Hz to give 808 space
4. Blend until 808 "hums" on small speakers

**Why This Works:** Unipolar even harmonics add presence that translates to earbuds without subwoofer muddiness.

## Drums: Subtle Pocket

### Settings
- **Mode:** Unipolar
- **Curve:** Gentle saturation
- **Pre:** +6dB
- **Mix:** 40%
- **Post:** -4dB

### Technique
Focus on the snare body and kick warmth, not transients. The goal is "vintage" character that sits back in the mix.

## Vocals: Intimate Warmth

### The Challenge
Moody vocals need to feel close and personal without harshness.

### Settings
- **Mode:** Unipolar
- **Curve:** Very soft S-curve
- **Pre:** +4dB
- **Mix:** 25%
- **Post:** -3dB
- **Oversample:** 4x

### Chain
1. EQ (remove mud 200-400Hz)
2. **WaveShaper** (warmth)
3. Compression (gentle, 2:1 ratio)
4. De-ess if needed

## Mix Bus: Cohesive Atmosphere

### Settings
- **Mode:** Unipolar
- **Curve:** Gentle S-curve
- **Pre:** +3dB
- **Mix:** 20%
- **Post:** -2dB

### Philosophy
This is "glue" not "effect." Should be barely perceptible—just a sense that everything belongs together.

## Synth Pads and Textures

### Settings
- **Mode:** Unipolar
- **Curve:** Soft saturation
- **Pre:** +5dB
- **Mix:** 45%
- **Post:** -4dB

### Technique
Pads love saturation—it adds movement and prevents "digital sterility." Blend generously for a "living" sound.

## Example Track Breakdown

### Moody Trap Ballad
**808:** Warm saturation (Pre: +8, Mix: 55%)  
**Drums:** Gentle saturation (Pre: +6, Mix: 40%)  
**Vocals:** Intimate warmth (Pre: +4, Mix: 25%)  
**Mix Bus:** Subtle glue (Pre: +3, Mix: 20%)  
**Pads:** Heavy saturation (Pre: +5, Mix: 45%)  

**Result:** Cohesive, warm, introspective mix that feels "expensive" and emotional.

## Safety for Moody Vibes

### Do
- Use Unipolar mode for warmth
- Keep Pre gain moderate (4-10dB)
- Blend with Mix at 25-60%
- Focus on low-mid warmth

### Don't
- Use Bipolar mode (too aggressive)
- Hard clipping (removes emotion)
- High Mix on vocals (loses intimacy)
- Forget to de-ess (moody ≠ muddy)

## Quick Settings Reference

| Element | Mode | Curve | Pre | Mix | Post |
|---------|------|-------|-----|-----|------|
| 808 | Unipolar | Soft S | +8 | 55% | -6 |
| Drums | Unipolar | Gentle | +6 | 40% | -4 |
| Vocals | Unipolar | Soft S | +4 | 25% | -3 |
| Mix Bus | Unipolar | Gentle | +3 | 20% | -2 |
| Pads | Unipolar | Soft | +5 | 45% | -4 |

---

**Vibe:** Moody  
**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\vibe-psychedelic.md

```markdown
# Mood: Psychedelic - Experimental Distortion

## Vibe Target: Psychedelic

**Characteristics:** Weird, complex, mind-bending, experimental  
**Goal:** Create unique textures and unexpected sounds  
**Best For:** Experimental hip-hop, alt-R&B, psychedelic productions

[SRC: IL-MAN] Bipolar mode with complex curves creates the harmonic complexity needed for experimental sounds.

## The Psychedelic Philosophy

Psychedelic distortion is about **breaking rules and exploring**. WaveShaper becomes a sound design tool, not just a mixing effect. Embrace the weird.

## 808s: Warped Reality

### The Challenge
Psychedelic 808s shouldn't sound like typical trap. They need character, movement, and unexpected qualities.

### Settings
- **Mode:** Bipolar (asymmetric weirdness)
- **Curve:** Asymmetric—soft on positive, hard on negative
- **Pre:** +12dB
- **Mix:** 70%
- **Post:** -10dB
- **Oversample:** 8x

### Experimental Variations

**Foldback 808:**
- Use foldback/wavefolding curve
- Creates "buzzing" metallic harmonics
- Automate Pre gain for morphing character

**Staircase 808:**
- Bitcrush curve (8-16 steps)
- Digital degradation meets sub-bass
- Use 16x oversampling to control artifacts

## Drums: Glitched Percussion

### Settings
- **Mode:** Bipolar
- **Curve:** Complex asymmetric or foldback
- **Pre:** +14dB
- **Mix:** 60%
- **Post:** -12dB
- **Oversample:** 8x-16x

### Techniques

**Rhythmic Distortion:**
- Automate Mix parameter
- Creates "breathing" distortion that pulses with the beat

**Transient Destruction:**
- Extreme hard clipping
- Crushes transients into new textures
- Best on background percussion, not main kick

## Vocals: Alien Transmission

### Settings
- **Mode:** Bipolar
- **Curve:** Complex asymmetric or stepped
- **Pre:** +12dB
- **Mix:** 50%
- **Post:** -10dB
- **Oversample:** 8x

### Creative Techniques

**Granular-Style Distortion:**
- Use stepped curve (bitcrush)
- Creates "pixelated" vocal effect
- Blend at 40-60% for intelligibility

**Formant Shifting:**
- Asymmetric curve affects different frequency ranges differently
- Creates "voice character" changes
- Try inverted asymmetry (hard positive, soft negative)

## Textures and Pads: Atmospheric Weirdness

### Settings
- **Mode:** Bipolar
- **Curve:** Foldback or custom wavy
- **Pre:** +10dB
- **Mix:** 60%
- **Post:** -8dB

### Techniques

**Evolving Distortion:**
- Automate curve points over time
- Morphs from soft to hard saturation
- Creates "living" textures

**Frequency-Specific:**
- Put WaveShaper on frequency-split bus
- Distort only mids, keep highs clean
- Create "focused" weirdness

## Leads: Sonic Destruction

### Settings
- **Mode:** Bipolar
- **Curve:** Extreme hard clip or complex custom
- **Pre:** +18dB
- **Mix:** 80%
- **Post:** -16dB
- **Oversample:** 16x

### Techniques

**Resonant Destruction:**
- Use comb-filter before WaveShaper
- Distortion reacts to resonant frequencies
- Creates "screaming" leads

**Parallel Madness:**
- Heavy distorted layer (100% Mix)
- Blend with clean layer
- Creates "double-tracked" weirdness

## Example Track Breakdown

### Experimental Alt-R&B
**808:** Warped foldback (Pre: +12, Mix: 70%)  
**Drums:** Glitched percussion (Pre: +14, Mix: 60%)  
**Vocals:** Alien transmission (Pre: +12, Mix: 50%)  
**Textures:** Evolving weirdness (automated)  
**Leads:** Sonic destruction (Pre: +18, Mix: 80%)  

**Result:** Otherworldly production that challenges expectations.

## Creative Curve Designs

### The "Broken Radio"
`\`\`
Points: Stepped with irregular spacing
Creates: Gaps and dropouts like bad reception
Use on: Background vocals, texture layers
`\`\`

### The "Alien Speech"
`\`\`
Mode: Bipolar
Positive: Soft S-curve
Negative: Hard clip
Creates: Different vowel sounds, formant shift
Use on: Lead vocals, spoken word
`\`\`

### The "Glitch Step"
`\`\`
Type: Staircase with 8 steps
Positive: Compressed steps
Negative: Expanded steps
Creates: Digital artifacts with dynamic range
Use on: Drums, percussion, transitions
`\`\`

## Safety for Psychedelic Vibes

### Do
- Experiment with extreme settings
- Use high oversampling (8x-16x)
- Automate parameters for movement
- Create parallel processed layers
- Break all the "normal" rules

### Don't
- Use on everything (creates mush)
- Forget about the song (effect should serve the music)
- Skip oversampling (experimental ≠ low quality)
- Ignore phase issues (check mono compatibility)

## Quick Settings Reference

| Element | Mode | Curve | Pre | Mix | Post | Oversample |
|---------|------|-------|-----|-----|------|------------|
| 808 | Bipolar | Asymmetric | +12 | 70% | -10 | 8x |
| Drums | Bipolar | Foldback | +14 | 60% | -12 | 8x-16x |
| Vocals | Bipolar | Complex | +12 | 50% | -10 | 8x |
| Textures | Bipolar | Wavy | +10 | 60% | -8 | 8x |
| Leads | Bipolar | Extreme | +18 | 80% | -16 | 16x |

---

**Vibe:** Psychedelic  
**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\vibe-upbeat.md

```markdown
# Mood: Upbeat - Energetic Distortion

## Vibe Target: Upbeat

**Characteristics:** Punchy, energetic, driving, forward  
**Goal:** Maximum impact and excitement  
**Best For:** Club bangers, dance tracks, high-energy hip-hop

[SRC: IL-MAN] Bipolar mode creates mixed harmonics that add punch and aggressive presence.

## The Upbeat Philosophy

Upbeat distortion is about **impact and excitement**. Every element needs to hit hard and cut through the mix. This is where you push WaveShaper into aggressive territory.

## 808s: Hard-Hitting Subs

### The Challenge
Upbeat 808s need to rattle trunks AND punch through on club systems. They need to be felt AND heard.

### Settings
- **Mode:** Unipolar (warmth) OR Bipolar (aggressive)
- **Curve:** Hard clip or aggressive S-curve
- **Pre:** +12dB
- **Mix:** 65%
- **Post:** -10dB
- **Oversample:** 4x

### Technique
1. Drive hard into the curve (+12dB Pre)
2. Keep Mix high (65%) for dominant saturation
3. Compensate with Post gain (-10dB)
4. Sidechain to kick for dynamic pocket

**Aggressive Variation:** Switch to Bipolar for even more bite. This adds odd harmonics that cut through dense mixes.

## Drums: Maximum Punch

### Settings
- **Mode:** Bipolar (asymmetric = bite)
- **Curve:** Hard clip with sharp threshold
- **Pre:** +16dB
- **Mix:** 70%
- **Post:** -14dB
- **Oversample:** 4x-8x

### Technique
The goal is transient aggression. Bipolar mode preserves the "crack" of snares and the "punch" of kicks.

**Kick-Specific:** Use asymmetric curve—harder on positive (attack), softer on negative (sustain).

## Vocals: Attitude and Presence

### The Challenge
Upbeat vocals need to command attention without getting lost in busy production.

### Settings
- **Mode:** Bipolar
- **Curve:** Asymmetric hard clip
- **Pre:** +10dB
- **Mix:** 45%
- **Post:** -8dB
- **Oversample:** 4x

### Chain
1. EQ (boost 3-5kHz presence)
2. De-esser (essential with high drive)
3. **WaveShaper** (attitude)
4. Compression (aggressive, 4:1)
5. Limiter (safety)

**Ad-libs:** Push harder (Mix: 70%, Pre: +14dB) for hype background vocals.

## Mix Bus: Energetic Glue

### Settings
- **Mode:** Unipolar (safer for full mix)
- **Curve:** Moderate S-curve
- **Pre:** +5dB
- **Mix:** 25%
- **Post:** -4dB

### Philosophy
Keep it musical but present. Upbeat doesn't mean harsh—maintain energy without listener fatigue.

## Leads and Synths: Cutting Through

### Settings
- **Mode:** Bipolar
- **Curve:** Hard clip
- **Pre:** +12dB
- **Mix:** 60%
- **Post:** -10dB

### Technique
Lead elements can take aggressive distortion. Bipolar mode adds the edge needed to cut through drums and bass.

## Example Track Breakdown

### Club Banger
**808:** Hard saturation (Pre: +12, Mix: 65%)  
**Kicks:** Aggressive clip (Pre: +16, Mix: 70%)  
**Snares:** Asymmetric bite (Pre: +14, Mix: 65%)  
**Vocals:** Attitude (Pre: +10, Mix: 45%)  
**Leads:** Cutting distortion (Pre: +12, Mix: 60%)  
**Mix Bus:** Energetic glue (Pre: +5, Mix: 25%)  

**Result:** High-energy mix that hits hard in clubs and car systems.

## Safety for Upbeat Vibes

### Do
- Use Bipolar for drums and aggressive elements
- Drive Pre gain hard (+10 to +16dB)
- Use 4x+ oversampling to prevent harshness
- De-ess vocals before distortion

### Don't
- Forget Post gain compensation (will clip!)
- Use 100% Mix on everything (fatigue)
- Skip oversampling (will sound cheap)
- Overdo mix bus (harsh final result)

## Quick Settings Reference

| Element | Mode | Curve | Pre | Mix | Post | Oversample |
|---------|------|-------|-----|-----|------|------------|
| 808 | Unipolar/Bipolar | Hard clip | +12 | 65% | -10 | 4x |
| Kicks | Bipolar | Hard clip | +16 | 70% | -14 | 4x-8x |
| Snares | Bipolar | Asymmetric | +14 | 65% | -12 | 4x |
| Vocals | Bipolar | Hard clip | +10 | 45% | -8 | 4x |
| Leads | Bipolar | Hard clip | +12 | 60% | -10 | 4x |
| Mix Bus | Unipolar | Moderate S | +5 | 25% | -4 | 4x |

---

**Vibe:** Upbeat  
**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\vibe-vibey.md

```markdown
# Mood: Vibey - Cool and Relaxed

## Vibe Target: Vibey

**Characteristics:** Cool, relaxed, smooth, effortless  
**Goal:** Create a laid-back atmosphere without sounding sleepy  
**Best For:** Chill-hop, lo-fi, relaxed R&B, vibey hip-hop

[SRC: IL-MAN] Soft curves and moderate settings create the relaxed character that defines vibey productions.

## The Vibey Philosophy

Vibey distortion is about effortless cool. Nothing should sound like it is trying too hard. The saturation adds vibe without calling attention to itself.

## 808s: Relaxed Subs

### The Challenge
Vibey 808s should support the groove without demanding attention. They are the foundation, not the feature.

### Settings
- **Mode:** Unipolar (warm, relaxed)
- **Curve:** Soft S-curve with gentle knee
- **Pre:** +6dB
- **Mix:** 55%
- **Post:** -5dB
- **Oversample:** 2x

### Technique
1. Longer decay times
2. Less transient emphasis
3. Blend with original for pillowy low-end
4. Sidechain gently to kick

**The Vibey Difference:** Less aggressive than upbeat, more present than moody. The sweet spot.

## Drums: Relaxed Pocket

### Settings
- **Mode:** Unipolar
- **Curve:** Gentle saturation
- **Pre:** +6dB
- **Mix:** 45%
- **Post:** -5dB

### Technique
Focus on swing and pocket rather than punch. The drums should feel like they are breathing with the track.

**Lo-Fi Tip:** Combine with vinyl noise and tape saturation for authentic vibey character.

## Vocals: Effortless Cool

### The Challenge
Vibey vocals need to sound like the singer just woke up and delivered a flawless take. Relaxed but compelling.

### Settings
- **Mode:** Unipolar
- **Curve:** Soft S-curve
- **Pre:** +5dB
- **Mix:** 35%
- **Post:** -4dB
- **Oversample:** 4x

### Chain
1. Gentle EQ (high-pass 80Hz, slight 3kHz boost)
2. **WaveShaper** (relaxed warmth)
3. Light compression (3:1, medium attack)
4. Optional chorus for width

**Vocal Texture:** Vibey productions often benefit from slight imperfections. WaveShaper adds character that feels human.

## Textures and Atmosphere: Chill Layers

### Settings
- **Mode:** Unipolar
- **Curve:** Gentle saturation
- **Pre:** +4dB
- **Mix:** 50%
- **Post:** -3dB

### Technique
Pads and textures can take more saturation in vibey tracks. They create the atmosphere that defines the mood.

**Layering:** Saturated textures + clean leads = depth without clutter.

## Mix Bus: Relaxed Glue

### Settings
- **Mode:** Unipolar
- **Curve:** Gentle S-curve
- **Pre:** +3dB
- **Mix:** 20%
- **Post:** -2dB

### Philosophy
The mix should feel like a warm blanket. Everything belongs together in a relaxed way.

## Keys and Guitars: Laid-Back Character

### Settings
- **Mode:** Unipolar
- **Curve:** Soft saturation
- **Pre:** +5dB
- **Mix:** 40%
- **Post:** -4dB

### Technique
Electric pianos and guitars love gentle saturation in vibey productions. It adds analog warmth to digital sources.

## Example Track Breakdown

### Chill-Hop Beat
**808:** Relaxed subs (Pre: +6, Mix: 55%)  
**Drums:** Pocket groove (Pre: +6, Mix: 45%)  
**Vocals:** Effortless cool (Pre: +5, Mix: 35%)  
**Textures:** Chill layers (Pre: +4, Mix: 50%)  
**Mix Bus:** Relaxed glue (Pre: +3, Mix: 20%)  

**Result:** Laid-back production that feels effortless and cool.

## Quick Settings Reference

| Element | Mode | Curve | Pre | Mix | Post |
|---------|------|-------|-----|-----|------|
| 808 | Unipolar | Soft S | +6 | 55% | -5 |
| Drums | Unipolar | Gentle | +6 | 45% | -5 |
| Vocals | Unipolar | Soft | +5 | 35% | -4 |
| Textures | Unipolar | Gentle | +4 | 50% | -3 |
| Mix Bus | Unipolar | Gentle S | +3 | 20% | -2 |

---

**Vibe:** Vibey  
**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\vocal-saturation.md

```markdown
# Vocal Saturation and Grit

## The Goal

Add presence, warmth, and attitude to vocals while maintaining intelligibility and clarity.

[SRC: IL-MAN] Careful saturation adds harmonic content that helps vocals cut through dense mixes without harshness.

## Vocal Distortion Philosophy

Vocals are the most important element in most hip-hop/R&B tracks. WaveShaper should enhance, not compete.

**Golden Rule:** Always de-ess vocals BEFORE applying distortion. Distortion amplifies sibilance.

## Lead Vocals: Warm Presence

### The Challenge
Lead vocals need to command attention without harshness or sibilance issues.

### Settings for Warm Lead Vocals
- **Mode:** Unipolar (even harmonics = warmth)
- **Curve:** Soft S-curve
- **Pre:** +4 to +8dB
- **Mix:** 25-40%
- **Post:** -4 to -8dB
- **Oversample:** 4x
- **Chain Position:** After EQ, before compression

### Complete Vocal Chain
`\`\`
Input → High-Pass (80Hz) → EQ (presence boost 3-5kHz) → 
De-Esser → WaveShaper → Compression (3:1) → 
EQ (carve space) → Limiter (safety)
`\`\`

### Technique
1. Start conservative (Pre: +4dB, Mix: 25%)
2. Increase until presence improves
3. Back off if sibilance increases
4. A/B with bypass to verify improvement

## Rap Vocals: Attitude and Edge

### The Challenge
Rap vocals need aggression and articulation without harshness.

### Settings for Rap Vocals
- **Mode:** Bipolar (aggression) OR Unipolar (warmth)
- **Curve:** Hard clip (Bipolar) or soft S (Unipolar)
- **Pre:** +6 to +10dB
- **Mix:** 30-45%
- **Post:** -6 to -10dB
- **Oversample:** 4x

### Aggressive Rap Recipe
- **Mode:** Bipolar
- **Pre:** +10dB
- **Mix:** 40%
- **Curve:** Hard clip
- **Character:** Gritty, in-your-face, modern

### Smooth Rap Recipe
- **Mode:** Unipolar
- **Pre:** +6dB
- **Mix:** 35%
- **Curve:** Soft S-curve
- **Character:** Warm, articulate, classic

## R&B/Soul Vocals: Smooth Intimacy

### The Challenge
R&B vocals should feel close and intimate without obvious processing.

### Settings for R&B Vocals
- **Mode:** Unipolar
- **Curve:** Very soft S-curve
- **Pre:** +3 to +6dB
- **Mix:** 20-35%
- **Post:** -3 to -6dB
- **Oversample:** 4x

### Technique
Focus on subtle enhancement. The saturation should be felt, not heard.

## Background Vocals: Blend and Texture

### The Challenge
Background vocals should support the lead without competing.

### Settings for Background Vocals
- **Mode:** Unipolar
- **Curve:** Soft saturation
- **Pre:** +5 to +8dB
- **Mix:** 40-60%
- **Post:** -5 to -8dB

### Technique
More saturation than lead vocals—helps them sit back in the mix while adding texture.

## Ad-libs: Creative Destruction

### The Challenge
Ad-libs can handle (and often benefit from) heavy creative distortion.

### Settings for Ad-libs
- **Mode:** Bipolar
- **Curve:** Hard clip or asymmetric
- **Pre:** +10 to +16dB
- **Mix:** 60-80%
- **Post:** -10 to -16dB
- **Oversample:** 4x

### Creative Techniques
**Double-Track Distortion:**
1. Main ad-lib: 100% wet, heavy distortion
2. Doubled ad-lib: Clean
3. Pan slightly different
4. Creates wide, aggressive ad-lib texture

## Vocal Saturation Recipes

### Presence Boost
- Pre: +6dB
- Mix: 30%
- Mode: Unipolar
- Use: Vocals not cutting through mix

### Vintage Warmth
- Pre: +4dB
- Mix: 25%
- Mode: Unipolar
- HQ: Enabled
- Use: Soul/R&B intimacy

### Modern Aggression
- Pre: +10dB
- Mix: 40%
- Mode: Bipolar
- Use: Trap rap, hype vocals

### Lo-Fi Texture
- Pre: +8dB
- Mix: 50%
- Mode: Unipolar
- Oversample: 2x
- Use: Chill-hop, bedroom pop

## Common Vocal Mistakes

### Mistake 1: No De-esser
**Problem:** Sibilance becomes unbearable
**Fix:** ALWAYS de-ess before WaveShaper

### Mistake 2: Too Much Distortion
**Problem:** Lyrics unintelligible
**Fix:** Keep Mix at 40% or below for leads

### Mistake 3: Wrong Mode
**Problem:** Harsh, fatiguing vocals
**Fix:** Use Unipolar for warmth

### Mistake 4: Ignoring Oversampling
**Problem:** Harsh high-end artifacts
**Fix:** Use 4x minimum

### Mistake 5: Post-Gain Mismatch
**Problem:** Cannot A/B accurately
**Fix:** Match processed/unprocessed loudness

## Advanced Vocal Techniques

### Formant Shifting with Asymmetry
**Goal:** Change vocal character without pitch shift

**Method:**
1. Bipolar mode
2. Different curves for positive/negative
3. Adjust Pre gain to taste
4. Creates "vowel shift" effect

### Frequency-Specific Saturation
**Goal:** Distort only specific vocal ranges

**Method:**
1. Use Maximus or multi-band splitter
2. Distort only mid-range (presence)
3. Keep lows and highs clean
4. Maximum clarity with added character

### Dynamic Saturation
**Goal:** Different distortion for different vocal intensities

**Method:**
1. Automate Pre gain
2. More saturation on quiet parts
3. Less on loud/screamed parts
4. Balances vocal dynamics

## Testing Your Vocal Saturation

### Intelligibility Test
1. Play vocal in mix
2. Can you understand every word?
3. If not, reduce Mix or Pre gain

### Sibilance Test
1. Listen to S and T sounds
2. Should not be harsh or painful
3. If harsh, add de-esser or reduce drive

### Context Test
1. Solo vocal: sounds great
2. In mix: disappears?
3. May need more presence (increase Pre or Mix)

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-instrument\808s.md

```markdown
# 808 Workflow

## 808s in Hip-Hop Production

808s are the foundation of modern hip-hop. WaveShaper transforms them from simple sub-bass to present, punchy low-end instruments.

[SRC: IL-MAN] WaveShaper adds upper harmonics that make 808s audible on systems that cannot reproduce the fundamental sub-bass frequency.

## The 808 Challenge

### The Problem
- 808 fundamental: 30-60Hz (sub-bass)
- Phone speakers: Often roll off below 200Hz
- Result: 808 melody disappears on phones

### The WaveShaper Solution
Add harmonics at 60Hz, 90Hz, 120Hz, 180Hz, 200Hz+ that phones CAN reproduce.

## Standard 808 Workflow

### Step 1: Pre-Processing
**Before WaveShaper:**
1. **High-pass** at 25-30Hz (remove rumble)
2. **Cut 200-400Hz** if muddy
3. **Optional:** Boost 60-100Hz for body
4. **Check mono** (stereo 808s cause phase issues)

### Step 2: WaveShaper Settings

**For Warm, Musical 808s:**
`\`\`
Mode:       Unipolar (even harmonics = warmth)
Curve:      Soft S-curve
Pre:        +8 to +12dB
Mix:        50-70%
Post:       -8 to -12dB
Oversample: 4x
Center:     Enabled
`\`\`

**Why Unipolar?** Even harmonics (octave, fifth) blend musically and preserve low-end warmth.

### Step 3: Post-Processing
**After WaveShaper:**
1. **Compression** (2:1 ratio, glue the saturation)
2. **EQ** (cut any harshness from distortion)
3. **Sidechain** to kick (dynamic pocket)
4. **Limiter** (control peaks, not for loudness)

## Three 808 Saturation Recipes

### Recipe 1: Warm Trap 808
Best for: Modern trap, melodic hip-hop, R&B
- **Pre:** +10dB
- **Mix:** 60%
- **Curve:** Soft S-curve
- **Mode:** Unipolar
- **Character:** Present, warm, translates everywhere

### Recipe 2: Hard 808
Best for: Hard trap, drill, aggressive beats
- **Pre:** +14dB
- **Mix:** 70%
- **Curve:** Hard clip
- **Mode:** Unipolar (or Bipolar for extra edge)
- **Character:** Distorted, aggressive, modern

### Recipe 3: Subtle 808
Best for: Boom bap, soul, R&B ballads
- **Pre:** +6dB
- **Mix:** 45%
- **Curve:** Gentle S-curve
- **Mode:** Unipolar
- **Character:** Natural, barely noticeable enhancement

## Common 808 Mistakes

### Mistake 1: Hard Clipping
**Problem:** Removes low-end punch
**Solution:** Use soft S-curve, not hard clip

### Mistake 2: 100% Mix
**Problem:** Loses original sub impact
**Solution:** Blend 50-70% to keep the fundamental

### Mistake 3: Bipolar Mode
**Problem:** Can cause phase issues
**Solution:** Use Unipolar unless you want aggressive distortion

### Mistake 4: No Oversampling
**Problem:** Aliasing creates harsh artifacts
**Solution:** Use 4x minimum

### Mistake 5: No Pre-Processing
**Problem:** Distorting mud and rumble
**Solution:** High-pass and clean up BEFORE WaveShaper

## Advanced 808 Techniques

### Parallel 808 Distortion
1. **Duplicate the 808 track**
2. **Original:** Clean, full range (100% dry)
3. **Duplicate:** Heavy distortion (100% wet, no Mix)
4. **High-pass duplicate** at 100-150Hz
5. **Blend to taste**

**Result:** Complete separation of sub and harmonics. Maximum control.

### Multi-Band 808 Distortion
1. **Split 808** into frequency bands
2. **Sub (30-80Hz):** Clean, no distortion
3. **Low-mids (80-200Hz):** Light saturation
4. **Mids (200Hz+):** Heavy saturation
5. **Blend bands**

**Result:** Precise control over what gets distorted.

### 808 Note Variation
- **Long notes:** More saturation (sustained harmonics)
- **Short notes:** Less saturation (transient focus)
- Automate Pre gain or Mix for note-to-note variation

## Testing Your 808 Saturation

### Phone Test
1. Bounce mix
2. Play on phone speaker
3. Can you hear the 808 melody?
4. If yes, your saturation is working

### Car Test
1. Play in car with subwoofer
2. Is the sub too overwhelming?
3. Adjust Mix percentage

### Mono Test
1. Collapse mix to mono
2. Does 808 disappear?
3. If yes, check for phase issues

## 808 Workflow Summary

`\`\`
Input 808
    ↓
High-pass 25Hz (remove rumble)
    ↓
EQ cleanup (cut 200-400Hz mud)
    ↓
WaveShaper (Unipolar, Soft S-curve, Pre: +8-12dB, Mix: 50-70%)
    ↓
Compression (2:1, glue saturation)
    ↓
EQ shaping (remove any harshness)
    ↓
Sidechain to kick (dynamic pocket)
    ↓
Limiter (control peaks)
    ↓
Output: Present, punchy 808 that translates everywhere
`\`\`

## Troubleshooting

### 808 Sounds Weak
- Increase Pre gain (+2-4dB)
- Increase Mix percentage
- Check for conflicting frequencies

### 808 Sounds Harsh
- Switch to Unipolar mode
- Use softer curve
- Enable 4x+ oversampling
- Add low-pass filter after (soften highs)

### 808 Disappears on Phones
- Increase Pre gain for more harmonics
- Check Mix is at least 50%
- Ensure you are not high-passing too aggressively

### 808 Too Loud in Mix
- Reduce 808 channel fader
- Or reduce WaveShaper Mix
- Or reduce Post gain

---

**Instrument:** 808 Bass  
**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-instrument\kick-drums.md

```markdown
# Kick Drum Workflow

## Kicks in Hip-Hop and Electronic Music

Kicks provide the rhythmic foundation and transient punch. WaveShaper can enhance attack, control sustain, and add character without losing impact.

[SRC: IL-MAN] Bipolar mode with asymmetric curves preserves transient bite while controlling the body of kick drums.

## The Kick Challenge

### The Problem
Kicks need to:
- Punch through the mix (attack)
- Support the low-end (body)
- Not conflict with 808s/bass
- Translate on all systems

### WaveShaper Solutions
- **Transient enhancement:** Hard clip positive half
- **Sustain control:** Softer curve on negative half
- **Character addition:** Harmonics that cut through

## Standard Kick Workflow

### Step 1: Pre-Processing
**Before WaveShaper:**
1. **Tune the kick** to match the key
2. **High-pass** at 30-40Hz (remove useless sub)
3. **Cut 300-400Hz** if boxy
4. **Optional:** Boost 60-80Hz for weight

### Step 2: WaveShaper Settings

**For Punchy Kicks:**
`\`\`
Mode:       Bipolar (asymmetric = bite)
Curve:      Hard clip positive, soft negative
Pre:        +12 to +16dB
Mix:        60-75%
Post:       -12 to -16dB
Oversample: 4x-8x
Center:     Enabled
`\`\`

**Why Bipolar?** Asymmetric distortion preserves transient attack while shaping the body.

### Step 3: Post-Processing
**After WaveShaper:**
1. **Compression** (control the enhanced attack)
2. **EQ** (carve space for 808s below)
3. **Transient shaper** (if needed)
4. **Sidechain** to 808 (or vice versa)

## Asymmetric Kick Curve Design

### Positive Half (Attack)
- **Hard clip** at 0.7-0.8 threshold
- Sharp transition
- Emphasizes the "click" and "punch"

### Negative Half (Sustain/Body)
- **Soft S-curve** or gentle saturation
- Gradual transition
- Controls the "boom" without removing it

### Why This Works
- **Positive = transient:** Hard clipping adds bite
- **Negative = sustain:** Soft curve maintains body
- Result: Punchy attack + controlled sustain

## Kick Recipes by Genre

### Trap Kicks
- **Mode:** Bipolar
- **Pre:** +14dB
- **Mix:** 70%
- **Curve:** Hard clip positive, moderate negative
- **Character:** Maximum punch, modern aggression

### Boom Bap Kicks
- **Mode:** Unipolar
- **Pre:** +8dB
- **Mix:** 55%
- **Curve:** Soft S-curve
- **Character:** Warm, vintage punch

### EDM Kicks
- **Mode:** Bipolar
- **Pre:** +16dB
- **Mix:** 75%
- **Curve:** Extreme hard clip
- **Oversample:** 8x
- **Character:** Maximum impact, cutting through synths

### Lo-Fi Kicks
- **Mode:** Unipolar
- **Pre:** +6dB
- **Mix:** 50%
- **Curve:** Gentle saturation
- **Oversample:** 2x
- **Additional:** Slight bitcrush on room mic
- **Character:** Warm, crushed, "vinyl"

## Kick and 808 Relationship

### The Frequency Conflict
- Kick: Typically 50-80Hz + click at 2-5kHz
- 808: Typically 40-60Hz + harmonics
- Problem: They occupy similar frequency ranges

### WaveShaper Solutions

**Option 1: Distort Kick, Keep 808 Clean**
- Kick gets bite from WaveShaper
- 808 provides the sub foundation
- Natural separation

**Option 2: Distort Both Differently**
- Kick: Bipolar, hard clip (transient)
- 808: Unipolar, soft S-curve (warmth)
- Different characters = separation

**Option 3: Parallel Distortion**
- Distort a parallel kick layer
- Blend with clean kick
- Control the amount of "click" vs "thud"

## Common Kick Mistakes

### Mistake 1: Too Much Distortion
**Problem:** Kick sounds like noise, loses definition
**Solution:** Reduce Mix to 60-70%, use softer curve

### Mistake 2: Destroying the Low-End
**Problem:** Hard clipping removes sub frequencies
**Solution:** Use asymmetric curve or reduce drive

### Mistake 3: Phase Issues with 808
**Problem:** Kick and 808 cancel each other
**Solution:** Sidechain kick to 808, or offset timing

### Mistake 4: No Oversampling
**Problem:** Digital artifacts on transient
**Solution:** Use 4x minimum, 8x for aggressive settings

## Advanced Kick Techniques

### Transient Isolation
1. **Hard clip threshold** at 0.6-0.7
2. Everything below = clean sustain
3. Everything above = enhanced transient
4. Blend with Mix control

### Layered Kick Distortion
1. **Sub layer (40-80Hz):** Clean, no distortion
2. **Click layer (2-5kHz):** Distorted for bite
3. **Body layer (100-200Hz):** Light saturation
4. **Blend all three**

### Dynamic Kick Distortion
- **Automate Pre gain:** More distortion on beat 1
- **Less distortion:** On off-beats or ghost notes
- Creates rhythmic variation

## Testing Your Kick Distortion

### Punch Test
1. Solo the kick
2. Bypass WaveShaper
3. Re-enable
4. Should hear more attack, not just volume

### Context Test
1. Play kick with 808
2. Do they complement or fight?
3. Adjust settings for separation

### System Test
1. Play on different systems
2. Does kick punch through everywhere?
3. If not, increase Pre gain or adjust curve

## Kick Workflow Summary

`\`\`
Input Kick
    ↓
Tuning and basic EQ
    ↓
High-pass 30-40Hz
    ↓
WaveShaper (Bipolar, Asymmetric, Pre: +12-16dB, Mix: 60-75%)
    ↓
Compression (control enhanced transient)
    ↓
EQ (carve space, boost click if needed)
    ↓
Sidechain to 808 (or 808 to kick)
    ↓
Output: Punchy kick that cuts through the mix
`\`\`

## Troubleshooting

### Kick Sounds Weak
- Increase Pre gain (+2-4dB)
- Check Mix is at least 60%
- Ensure curve emphasizes positive half

### Kick Sounds Harsh
- Use softer curve
- Switch to Unipolar mode
- Enable 8x oversampling

### Kick Conflicts with 808
- Sidechain one to the other
- EQ separation (kick higher, 808 lower)
- Different distortion settings

---

**Instrument:** Kick Drum  
**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-instrument\lead-vocals.md

```markdown
# Lead Vocal Workflow

## Vocals in Hip-Hop and R&B

Vocals are the most important element. WaveShaper should enhance presence and character while maintaining complete intelligibility.

[SRC: IL-MAN] Gentle saturation adds harmonics that help vocals cut through dense productions without harshness.

## The Vocal Challenge

### The Problem
Vocals need to:
- Cut through the mix (presence)
- Sound warm and intimate (character)
- Remain 100% intelligible (clarity)
- Handle dynamic range (control)

### WaveShaper Solutions
- **Presence boost:** Harmonics in upper-mids
- **Warmth:** Even harmonics from Unipolar mode
- **Clarity:** Conservative settings (low Mix)
- **Control:** Proper gain staging

**CRITICAL RULE:** Always de-ess vocals BEFORE WaveShaper. Distortion amplifies sibilance.

## Standard Lead Vocal Workflow

### Step 1: Pre-Processing (Before WaveShaper)
1. **High-pass** at 80-100Hz (remove rumble)
2. **Cut 200-400Hz** if muddy
3. **Boost 2-5kHz** for presence (optional)
4. **De-esser** (ESSENTIAL - must come before distortion)

### Step 2: WaveShaper Settings

**For Warm Lead Vocals:**
`\`\`
Mode:       Unipolar (even harmonics = warmth)
Curve:      Soft S-curve
Pre:        +4 to +8dB
Mix:        25-40%
Post:       -4 to -8dB
Oversample: 4x
Center:     Enabled
`\`\`

**Why Unipolar?** Even harmonics are musical and forgiving on vocals. Bipolar can add harshness.

### Step 3: Post-Processing (After WaveShaper)
1. **Compression** (3:1 to 6:1, control dynamics)
2. **EQ** (carve space, de-ess if needed)
3. **Optional de-esser** (if sibilance increased)
4. **Limiter** (safety, prevent peaks)

## Complete Vocal Chain

`\`\`
Input Vocal
    ↓
High-Pass (80-100Hz)
    ↓
EQ (presence boost 2-5kHz, cut mud 200-400Hz)
    ↓
De-esser (CRITICAL - must be before WaveShaper)
    ↓
WaveShaper (Unipolar, Soft S-curve, Pre: +4-8dB, Mix: 25-40%)
    ↓
Compression (3:1-6:1 ratio)
    ↓
EQ (fine-tuning, de-ess if needed)
    ↓
Optional: Second de-esser
    ↓
Limiter (safety)
    ↓
Output: Present, warm, clear vocal
`\`\`

## Vocal Recipes by Genre

### Rap/Hip-Hop Vocals
- **Mode:** Unipolar (warmth) OR Bipolar (aggression)
- **Pre:** +6 to +10dB
- **Mix:** 30-45%
- **Curve:** Soft S-curve (Unipolar) or hard clip (Bipolar)
- **Character:** Presence and attitude

### R&B/Soul Vocals
- **Mode:** Unipolar
- **Pre:** +3 to +6dB
- **Mix:** 20-35%
- **Curve:** Very soft S-curve
- **Character:** Smooth, intimate, sophisticated

### Pop Vocals
- **Mode:** Unipolar
- **Pre:** +4 to +8dB
- **Mix:** 25-40%
- **Curve:** Soft S-curve
- **Character:** Clear, present, radio-ready

### Lo-Fi/Alt Vocals
- **Mode:** Unipolar
- **Pre:** +6 to +10dB
- **Mix:** 40-60%
- **Curve:** Gentle saturation
- **Character:** Warm, textured, "imperfect"

## Background Vocals

### Settings
- **Mode:** Unipolar
- **Pre:** +5 to +8dB
- **Mix:** 40-60%
- **Reason:** More saturation helps them sit back in the mix

### Technique
Background vocals can take more distortion than leads:
- Adds texture and interest
- Helps them blend rather than compete
- Creates "choir" effect

## Ad-libs and Extras

### Settings
- **Mode:** Bipolar (creative destruction)
- **Pre:** +10 to +16dB
- **Mix:** 60-80%
- **Reason:** Ad-libs can be aggressive and weird

### Creative Techniques
**Double-Track Distortion:**
1. Main ad-lib: Clean or light saturation
2. Double: Heavy distortion, 100% wet
3. Pan slightly different
4. Creates wide, textured ad-lib layer

## Common Vocal Mistakes

### Mistake 1: No De-esser
**Problem:** Sibilance becomes unbearable
**Solution:** ALWAYS de-ess before WaveShaper

### Mistake 2: Too Much Distortion
**Problem:** Lyrics unintelligible
**Solution:** Keep Mix at 40% or below for leads

### Mistake 3: Bipolar Mode
**Problem:** Harsh, fatiguing vocals
**Solution:** Use Unipolar for warmth and smoothness

### Mistake 4: Ignoring Oversampling
**Problem:** Harsh high-frequency artifacts
**Solution:** Use 4x minimum

### Mistake 5: Wrong Chain Order
**Problem:** Distortion before de-esser = disaster
**Solution:** De-esser must come FIRST

## Advanced Vocal Techniques

### Frequency-Specific Saturation
1. **Use multi-band splitter** (Maximus, etc.)
2. **Distort only the mid-range** (presence area)
3. **Keep lows clean** (no rumble distortion)
4. **Keep highs controlled** (prevent sibilance)

### Formant Shifting
1. **Bipolar mode**
2. **Different curves** for positive/negative
3. **Adjust Pre gain**
4. Creates "vowel character" changes

### Dynamic Saturation
- **Automate Pre gain**
- More saturation on quiet passages
- Less on loud/screamed sections
- Balances vocal dynamics

### Parallel Vocal Distortion
1. **Create parallel bus**
2. **Heavy distortion** on bus (100% wet)
3. **High-pass the bus** at 200Hz
4. **Blend under** main vocal
5. Adds presence without affecting low-end

## Testing Your Vocal Saturation

### Intelligibility Test
1. Play vocal in mix
2. Can you understand every word?
3. If not, reduce Mix or Pre gain

### Sibilance Test
1. Listen to S and T sounds
2. Should not be harsh or painful
3. If harsh, add de-esser or reduce drive

### Context Test
1. Solo vocal: sounds great
2. In mix: disappears?
3. May need more presence (increase Pre or Mix)

### Fatigue Test
1. Listen for 60 seconds
2. Do ears tire?
3. If yes, use Unipolar mode, reduce drive

## Vocal Workflow Summary

`\`\`
Input Vocal
    ↓
High-pass 80-100Hz
    ↓
EQ (presence boost, mud cut)
    ↓
DE-ESSER (CRITICAL FIRST STEP)
    ↓
WaveShaper (Unipolar, Soft S-curve, Pre: +4-8dB, Mix: 25-40%)
    ↓
Compression (3:1-6:1, control dynamics)
    ↓
EQ (fine-tuning)
    ↓
Optional: Second de-esser
    ↓
Limiter (safety)
    ↓
Output: Professional vocal with presence and warmth
`\`\`

## Troubleshooting

### Vocal Sounds Harsh
- Switch to Unipolar mode
- Enable 4x+ oversampling
- Reduce Pre gain by 2-4dB

### Vocal Sounds Muddy
- High-pass higher (100Hz)
- Cut 200-400Hz more aggressively
- Check Center is enabled

### Sibilance Increased
- De-ess BEFORE WaveShaper (must be in chain)
- Reduce Pre gain
- Add second de-esser after WaveShaper

### Vocal Not Cutting Through
- Increase Pre gain (+2-4dB)
- Increase Mix to 35-40%
- Boost 3-5kHz in Post-EQ

---

**Instrument:** Lead Vocal  
**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-instrument\snare-drums.md

```markdown
# Snare Drum Workflow

## Snares in Hip-Hop and Modern Production

Snares provide the backbeat and rhythmic anchor. They need body, crack, and presence to drive the groove.

[SRC: IL-MAN] Asymmetric distortion in Bipolar mode can enhance snare crack (transient) while maintaining body (sustain).

## The Snare Challenge

### The Problem
Snares need:
- **Crack:** Initial transient impact
- **Body:** Sustained tone and ring
- **Presence:** Cut through dense mixes
- **Control:** Not overwhelming

### WaveShaper Solutions
- **Transient emphasis:** Hard positive curve
- **Body warmth:** Soft negative curve
- **Presence boost:** Harmonics that cut through
- **Dynamic control:** Blending with Mix

## Standard Snare Workflow

### Step 1: Pre-Processing
**Before WaveShaper:**
1. **Tune the snare** to complement the key
2. **High-pass** at 100-150Hz (remove kick bleed)
3. **Cut 200-400Hz** if boxy
4. **Boost 3-5kHz** for crack (optional)

### Step 2: WaveShaper Settings

**For Cracking Snares:**
`\`\`
Mode:       Bipolar (asymmetric character)
Curve:      Hard clip positive, soft negative
Pre:        +10 to +14dB
Mix:        55-70%
Post:       -10 to -14dB
Oversample: 4x
Center:     Enabled
`\`\`

**Why Bipolar?** Different positive/negative shaping emphasizes crack while preserving body.

### Step 3: Post-Processing
**After WaveShaper:**
1. **EQ** (fine-tune presence)
2. **Compression** (2:1 to 4:1, control dynamics)
3. **Reverb** (add space and tail)
4. **Transient shaper** (if needed)

## Asymmetric Snare Curve Design

### Positive Half (Crack/Attack)
- **Hard clip** at 0.7-0.8 threshold
- Sharp knee
- Emphasizes the "snap" and "crack"

### Negative Half (Body/Sustain)
- **Soft S-curve**
- Gradual saturation
- Maintains the "tone" and "ring"

### Why This Works
- **Positive = crack:** Hard clipping emphasizes transient
- **Negative = body:** Soft curve warms the sustain
- Result: Punchy crack + warm body

## Snare Recipes by Style

### Trap Snares
- **Mode:** Bipolar
- **Pre:** +12dB
- **Mix:** 65%
- **Curve:** Hard clip positive, moderate negative
- **Post-EQ:** Boost 3-5kHz
- **Character:** Maximum crack, modern aggression

### Boom Bap Snares
- **Mode:** Unipolar
- **Pre:** +8dB
- **Mix:** 50%
- **Curve:** Soft S-curve
- **Post-EQ:** Gentle high-mid boost
- **Character:** Warm, vintage, thick

### R&B Snares
- **Mode:** Unipolar
- **Pre:** +6dB
- **Mix:** 45%
- **Curve:** Gentle saturation
- **Post-EQ:** Smooth top end
- **Character:** Smooth, present, controlled

### EDM Snares
- **Mode:** Bipolar
- **Pre:** +14dB
- **Mix:** 70%
- **Curve:** Extreme asymmetric
- **Post-EQ:** Aggressive presence boost
- **Character:** Maximum cut, synthetic edge

## Parallel Snare Distortion

### Method
1. **Main snare track:** Light saturation (30% Mix)
2. **Create parallel bus:** Send snare to new channel
3. **Heavy distortion on bus:** Bipolar, 100% Mix, high drive
4. **EQ the bus:** High-pass 200Hz, boost 3-5kHz
5. **Blend bus** under main snare

### Why This Works
- **Main snare:** Natural, controlled
- **Distorted layer:** Extra crack and aggression
- **Blended:** Best of both worlds
- **EQ'd layer:** Only adds desired frequencies

## Snare and Clap Layering

### Clap Enhancement
Claps often need extra "smack" to cut through:
- **Mode:** Bipolar
- **Pre:** +12dB
- **Mix:** 60%
- **Curve:** Hard clip

### Layered Distortion
When snare and clap are layered:
1. **Distort them together** on a bus
2. Or: **Distort the clap** more than the snare
3. Creates cohesive "snap" between elements

## Common Snare Mistakes

### Mistake 1: Too Much Distortion
**Problem:** Snare sounds like noise
**Solution:** Reduce Mix to 50-60%

### Mistake 2: Losing the Ring
**Problem:** Snare becomes "dead"
**Solution:** Use softer curve on negative half

### Mistake 3: Harshness
**Problem:** Snare hurts the ears
**Solution:** Enable 4x+ oversampling

### Mistake 4: No Crack
**Problem:** Snare has body but no attack
**Solution:** Ensure positive half is clipped harder

## Advanced Snare Techniques

### Transient Design with Curves
1. **Set hard threshold** at 0.6
2. Transients above threshold = clipped
3. Creates consistent "snap" across all hits
4. Use Mix to blend with natural transients

### Ghost Note Enhancement
Quiet snare hits need help to be heard:
- **Higher Pre gain** (they hit the curve less)
- **Brings quiet notes** forward
- **Does not crush** loud notes (already hitting ceiling)

### Room Distortion
1. **Send snare to room reverb**
2. **Distort the room return** heavily
3. **Blend room distortion** under dry snare
4. Creates "crushed room" snare sound

## Testing Your Snare Distortion

### Crack Test
1. Solo the snare
2. Should have clear "snap" on attack
3. Should not be all sustain/body

### Context Test
1. Play snare in mix
2. Does it provide clear backbeat?
3. If lost, increase Pre or Mix

### Ring Test
1. Listen to snare tail
2. Should have pleasant ring/tone
3. If "dead," use softer negative curve

## Snare Workflow Summary

`\`\`
Input Snare
    ↓
Tuning and basic EQ (high-pass, cut mud)
    ↓
Optional: Boost 3-5kHz for crack
    ↓
WaveShaper (Bipolar, Asymmetric, Pre: +10-14dB, Mix: 55-70%)
    ↓
EQ refinement (carve space in mix)
    ↓
Compression (2:1-4:1, control dynamics)
    ↓
Reverb (add space and tail)
    ↓
Output: Snare with crack, body, and presence
`\`\`

## Troubleshooting

### Snare Sounds Thin
- Reduce high-pass frequency
- Use softer negative curve
- Add body with Post-EQ

### Snare Sounds Harsh
- Switch to Unipolar mode
- Enable 4x+ oversampling
- Add gentle low-pass after

### Snare Lacks Crack
- Increase Pre gain
- Ensure positive half is clipped harder
- Check Mix is at least 55%

### Snare Too Loud
- Reduce channel fader
- Or reduce WaveShaper Mix
- Or reduce Pre gain

---

**Instrument:** Snare Drum  
**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity WaveShaper

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity WaveShaper.
- **Key Info:** Transfer function graph logic, Unipolar vs Bipolar modes, Oversampling rates (up to 16x), and DC Offset removal (Center).

## Source ID: [SRC: REPUTABLE]
- **Source:** "The Harmonic Series and Distortion" (Audio Engineering Society).
- **Key Info:** Mathematical explanation of how symmetric curves create odd harmonics (Hard/Square) and asymmetric curves create even harmonics (Tube/Warmth).

## Genre Style Board: Fruity WaveShaper

| Vibe | Graph Shape | Result |
| :--- | :--- | :--- |
| **Upbeat** | Hard Flat Top | Maximum Knock |
| **Psychedelic**| Multi-point Jagged | Metallic Ringing |
| **Spacey** | Soft Curve + Mix | Dense Reverb |
| **Vibey** | Bipolar (One side) | Analog Tube Glow |
| **Moody** | Stepped Staircase | Gritty Bitcrush |
```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity WaveShaper (Hip-Hop/R&B)

## Vibe 1: The "Modern Trap" 808
*   **Sound:** Searing, mid-range heavy, audible on phone speakers.
*   **Key Move:** Hard-clipping curve + Pre-Gain drive + 200Hz EQ boost.

## Vibe 2: The "Vintage Sample" Cracker
*   **Sound:** Lo-fi, bit-reduced, dusty.
*   **Key Move:** Staircase graph shape + No oversampling (for that raw alias crunch).

## Vibe 3: The "Smooth R&B" Gloss
*   **Sound:** Velvety high-end, tube-like warmth.
*   **Key Move:** Gentle Unipolar S-Curve + 16x Oversampling.

## Vibe 4: The "Distorted Ad-lib" (Travis/Carti)
*   **Sound:** Gritty, fuzzy, aggressive.
*   **Key Move:** Parallel send + Extreme Pre-Gain + Bipolar Asymmetry.

```

---

## FILE: 04-Reference\harmonic-generation-theory.md

```markdown
# Harmonic Generation in Waveshaping

## The Mathematics of Distortion

Waveshapers create new frequencies (harmonics) by applying a non-linear transfer function to the input signal. Understanding this process helps you predict and control the results.

[SRC: IL-MAN] The transfer function determines which harmonics are generated and in what proportions.

## Harmonic Basics

### What Are Harmonics?
When a pure sine wave passes through a non-linear system, it generates additional sine waves at integer multiples of the original frequency.

`\`\`
Fundamental: 100Hz
2nd Harmonic: 200Hz (octave)
3rd Harmonic: 300Hz (octave + fifth)
4th Harmonic: 400Hz (two octaves)
5th Harmonic: 500Hz (two octaves + major third)
`\`\`

### Even vs Odd Harmonics

**Even Harmonics (2nd, 4th, 6th, 8th...)**
- **Musical intervals:** Octaves and fifths (consonant)
- **Sound:** Warm, musical, analog-like
- **Generated by:** Symmetric curves (Unipolar mode)
- **Examples:** Tube saturation, tape warmth

**Odd Harmonics (3rd, 5th, 7th, 9th...)**
- **Musical intervals:** Fifths, major thirds, sevenths
- **Sound:** Aggressive, punchy, complex
- **Generated by:** Asymmetric curves (Bipolar mode)
- **Examples:** Transistor clipping, digital distortion

## How Curves Generate Harmonics

### Linear Curve (No Distortion)
**Transfer:** Output = Input (y = x)
**Harmonics:** None (pure signal)
**Use:** Bypass, reference, starting point

### Soft Clip (S-Curve)
**Transfer:** Gentle compression near peaks
**Harmonics:** Predominantly even-order
**Distribution:** Strong 2nd, moderate 4th, weak 6th
**Sound:** Warm, smooth, musical

### Hard Clip (Limiter)
**Transfer:** Sharp threshold, flat ceiling
**Harmonics:** Mix of odd and even
**Distribution:** Strong 3rd, strong 5th, weaker evens
**Sound:** Aggressive, punchy, edgy

### Asymmetric Curve (Bipolar Mode)
**Transfer:** Different positive/negative shaping
**Harmonics:** All orders (complex mixture)
**Distribution:** Depends on asymmetry degree
**Sound:** Complex, textured, "character"

### Bitcrush (Staircase)
**Transfer:** Quantized steps
**Harmonics:** Aliased artifacts (non-musical)
**Distribution:** Irregular, aliased
**Sound:** Digital, degraded, lo-fi

[SRC: IL-MAN] Curve symmetry determines whether primarily even or odd harmonics are generated.

## Mathematical Representation

### Transfer Function Example: Soft Clip
`\`\`
f(x) = x / (1 + |x|/threshold)

Where:
- x = input amplitude (-1 to 1)
- threshold = clipping point (0.5 to 1.0)
- As x increases, f(x) approaches threshold
`\`\`

### Harmonic Series Generation
For a sine wave input: sin(ωt)

**Soft clip produces:**
`\`\`
sin(ωt) + 0.1sin(2ωt) + 0.02sin(4ωt) + ...
         ↑2nd harmonic    ↑4th harmonic
`\`\`

**Hard clip produces:**
`\`\`
sin(ωt) + 0.3sin(3ωt) + 0.2sin(5ωt) + ...
         ↑3rd harmonic    ↑5th harmonic
`\`\`

## Pre-Gain and Harmonic Intensity

### The Relationship
Higher Pre gain = More signal enters non-linear region = More harmonics generated.

**Low Pre (+0 to +6dB):**
- Signal barely touches curve
- Minimal harmonics (subtle)
- Clean with slight warmth

**Medium Pre (+6 to +12dB):**
- Signal enters curve moderately
- Noticeable harmonics
- Clear saturation effect

**High Pre (+12 to +20dB):**
- Signal deep in non-linear region
- Heavy harmonics
- Aggressive distortion

**Extreme Pre (+20dB+):**
- Signal heavily clipped
- Maximum harmonics
- Creative destruction

## Oversampling and Aliasing

### The Nyquist Problem
Without oversampling, harmonics above Nyquist frequency (sample rate ÷ 2) fold back into audible range as artifacts.

**Example at 44.1kHz:**
- Nyquist = 22.05kHz
- 5th harmonic of 5kHz = 25kHz
- Without oversampling: 25kHz - 22.05kHz = 2.95kHz (aliased!)

### How Oversampling Helps
**2x Oversampling (88.2kHz internal):**
- New Nyquist = 44.1kHz
- 25kHz harmonic now below Nyquist
- No aliasing

**4x, 8x, 16x:**
- Pushes Nyquist even higher
- More room for harmonics
- Cleaner distortion

[SRC: IL-MAN] Higher oversampling values provide more headroom for harmonics before aliasing occurs.

## Practical Harmonic Control

### Creating Warmth (Even Harmonics)
1. Use Unipolar mode (symmetric curves)
2. Soft S-curve transfer function
3. Moderate Pre gain (+6 to +12dB)
4. Lower Mix for subtlety

**Applications:**
- 808 warmth
- Vocal presence
- Mix bus glue
- Vintage character

### Creating Punch (Odd Harmonics)
1. Use Bipolar mode (asymmetric curves)
2. Hard clip or aggressive curves
3. Higher Pre gain (+10 to +16dB)
4. Moderate to high Mix

**Applications:**
- Drum transients
- EDM leads
- Aggressive vocals
- Modern character

### Creating Complexity (All Harmonics)
1. Use Bipolar mode
2. Complex asymmetric curves
3. Vary Pre gain dynamically
4. Experiment with Mix

**Applications:**
- Experimental sound design
- Creative destruction
- Texture layers
- Unique characters

## Harmonic Analysis with Edison

### Visualizing Harmonics
1. Insert WaveShaper on track
2. Open Fruity Edison (recorder)
3. Play a pure sine wave through WaveShaper
4. Record output
5. View spectrum in Edison

### What to Look For
- **Even peaks:** 200Hz, 400Hz, 600Hz (symmetric curve)
- **Odd peaks:** 300Hz, 500Hz, 700Hz (asymmetric curve)
- **Aliasing:** Peaks in unexpected places (need more oversampling)

## Harmonic Series Reference

| Input | 2nd Harmonic | 3rd Harmonic | 4th Harmonic | 5th Harmonic |
|-------|--------------|--------------|--------------|--------------|
| 50Hz (808 sub) | 100Hz | 150Hz | 200Hz | 250Hz |
| 100Hz (sub bass) | 200Hz | 300Hz | 400Hz | 500Hz |
| 200Hz (kick body) | 400Hz | 600Hz | 800Hz | 1000Hz |
| 1kHz (vocal presence) | 2kHz | 3kHz | 4kHz | 5kHz |
| 5kHz (vocal sibilance) | 10kHz | 15kHz | 20kHz | 25kHz (aliases!) |

**Note:** High-frequency sources (above 4kHz) need oversampling to prevent audible aliasing.

## Mixing Implications

### Frequency Masking
Harmonics can mask other instruments:
- 2nd harmonic of bass (100Hz) conflicts with kick
- 3rd harmonic of vocals (3kHz) conflicts with guitars
- Solution: Use Mix control to balance

### Chord Interactions
Even harmonics blend with chords:
- 2nd harmonic = octave (always consonant)
- 4th harmonic = two octaves (consonant)

Odd harmonics create tension:
- 3rd harmonic = perfect fifth (consonant)
- 5th harmonic = major third (can clash with minor chords)
- 7th harmonic = minor seventh (dissonant)

[SRC: IL-MAN] The musical relationship between generated harmonics and the harmonic content of the mix determines whether distortion sounds pleasing or harsh.

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 04-Reference\plugin-integration.md

```markdown
# Integration with Other Plugins

## Using WaveShaper in Processing Chains

Fruity WaveShaper integrates with other FL Studio plugins to create comprehensive distortion and saturation workflows.

[SRC: IL-MAN] WaveShaper works as an insert effect or in parallel configurations with other plugins.

## EQ and WaveShaper

### Pre-EQ Strategy
**Before WaveShaper:**
- High-pass unwanted low frequencies
- Remove problematic resonances
- Shape the tone going into distortion

**Example Chain:**
`\`\`
Input → Fruity Parametric EQ 2 (cleanup) → WaveShaper → Output
`\`\`

**Pre-EQ Benefits:**
- Remove rumble before distortion
- Shape which frequencies get saturated
- Prevent distortion of unwanted content

### Post-EQ Strategy
**After WaveShaper:**
- Remove harshness added by distortion
- Shape the resulting harmonics
- Fine-tune the final tone

**Example Chain:**
`\`\`
Input → WaveShaper → Fruity Parametric EQ 2 (shaping) → Output
`\`\`

**Post-EQ Benefits:**
- Tame high-frequency artifacts
- Enhance desirable harmonics
- Fit the distorted sound into the mix

### Combined Pre/Post EQ
`\`\`
Input → EQ (cleanup) → WaveShaper → EQ (shaping) → Output
`\`\`

**Hip-Hop/R&B Example:**
1. **Pre-EQ:** High-pass 80Hz on vocals
2. **WaveShaper:** Add presence (Pre: +6dB)
3. **Post-EQ:** Cut 4-6kHz harshness, boost 8kHz air

## Compression and WaveShaper

### WaveShaper Before Compression
`\`\`
Input → WaveShaper → Fruity Compressor → Output
`\`\`

**Benefits:**
- Distortion adds character
- Compression controls resulting dynamics
- Saturated peaks are easier to compress

**Use Case:** Vocals, drums (standard hip-hop chain)

### Compression Before WaveShaper
`\`\`
Input → Fruity Compressor → WaveShaper → Output
`\`\`

**Benefits:**
- Controlled dynamics hit the curve consistently
- More predictable distortion amount
- Gentle saturation of compressed signal

**Use Case:** Mix bus, controlled sources

### Parallel Compression with WaveShaper
`\`\`
Input ─┬─→ WaveShaper ─┐
       │               ├─→ Output
       └─→ Compressor ─┘
`\`\`

**Benefits:**
- Distorted layer + compressed clean layer
- Maximum punch and character
- Controlled dynamics with attitude

**Use Case:** Drums, aggressive vocals

## Limiters and WaveShaper

### WaveShaper as Limiter
WaveShaper CAN function as a limiter with specific curve designs:
- Draw horizontal line at threshold (0.7-0.8)
- Everything above = clipped to threshold
- Mix at 100%

### Limiter After WaveShaper
`\`\`
Input → WaveShaper → Fruity Limiter → Output
`\`\`

**Benefits:**
- WaveShaper adds character
- Limiter catches peaks
- Safe gain staging

**Standard Position:** WaveShaper always comes BEFORE the final limiter.

## Multi-Band Processing

### Maximus Integration
`\`\`
Input → Maximus (bands split) → WaveShaper on specific bands → Output
`\`\`

**Applications:**
- Distort only mid-range (vocals)
- Keep sub-bass clean (808s)
- Process highs separately (cymbals)

### Example: Multi-Band 808
1. **Low band (30-80Hz):** Clean, no WaveShaper
2. **Mid band (80-200Hz):** Light WaveShaper (Pre: +6dB)
3. **High band (200Hz+):** Heavy WaveShaper (Pre: +12dB)
4. **Result:** Controlled harmonic distribution

## Reverb and WaveShaper

### Distorted Reverb (Send Configuration)
`\`\`
Input → Send → WaveShaper → Reverb → Output
`\`\`

**Benefits:**
- Saturated reverb tails
- "Crushed room" sound
- Creative texture

**Use Case:** Snare room, vocal ambience

### Reverb Then Distortion
`\`\`
Input → Reverb → WaveShaper → Output
`\`\`

**Benefits:**
- Distort the entire space
- Aggressive ambience
- Experimental textures

## De-essing and WaveShaper

### Critical: De-ess BEFORE WaveShaper
`\`\`
Input → De-esser → WaveShaper → Output
`\`\`

**Why:** Distortion amplifies sibilance significantly.

**Chain for Vocals:**
1. EQ (remove mud)
2. **De-esser** (control sibilance)
3. WaveShaper (add warmth/presence)
4. Compression (control dynamics)
5. Optional: Second de-esser (if needed)

## Parallel Processing Setups

### Distortion Bus Method
`\`\`
All Tracks ─┬─→ Main Mix Bus ─────────┐
            │                        ├─→ Master
            └─→ Distortion Bus ──────┘
                     ↑
                 WaveShaper (heavy settings)
`\`\`

**Benefits:**
- Control distortion amount per track via send level
- One WaveShaper instance processes many tracks
- Efficient CPU usage

### Individual Parallel Channels
`\`\`
Track ─┬─→ Clean Channel ─┐
       │                  ├─→ Output
       └─→ WaveShaper ────┘
               (heavy, 100% Mix)
`\`\`

**Benefits:**
- Blend clean and distorted signals
- EQ each layer separately
- Maximum control

## Common Plugin Combinations

### Hip-Hop Vocal Chain
`\`\`
Input → EQ → De-esser → WaveShaper → Compressor → EQ → Limiter
`\`\`

### 808 Chain
`\`\`
Input → EQ (cleanup) → WaveShaper → Compression → Sidechain to kick
`\`\`

### Drum Bus Chain
`\`\`
Drums ─┬─→ Clean Bus ─┐
       │              ├─→ Master
       └─→ WaveShaper Bus ─┘
               (heavy, blended)
`\`\`

### Mix Bus Chain
`\`\`
All Tracks → EQ → WaveShaper (subtle) → Compression → EQ → Limiter
`\`\`

## Plugin Order Guidelines

### General Rules
1. **EQ first:** Clean up before processing
2. **WaveShaper:** Add character early in chain
3. **Dynamics after:** Control what WaveShaper creates
4. **Final EQ:** Shape the result
5. **Limiter last:** Safety only

### Exceptions
- **De-esser:** Always before WaveShaper for vocals
- **High-pass:** Can be before or after depending on goal
- **Reverb:** Usually after WaveShaper (distort the source, not the space)

## Third-Party Plugin Integration

### VST/AU Compatibility
- **Standard insert:** WaveShaper works with any VST/AU plugin
- **Sidechain:** Standard VST sidechain support
- **PDC:** Automatic Plugin Delay Compensation

### Recommended Third-Party Pairings
- **Saturation:** Use WaveShaper for control, tape plugins for color
- **Multi-band:** FabFilter Pro-MB for precise band control
- **Transient designers:** Pair with WaveShaper for maximum punch
- **Metering:** Use Voxengo SPAN to analyze harmonics

## Workflow Examples

### Example 1: Aggressive Hip-Hop Beat
`\`\`
Kick:   Sample → EQ → WaveShaper (Bipolar, heavy) → Comp
Snare:  Sample → EQ → WaveShaper (Bipolar, heavy) → Comp → Reverb
808:    Synth → EQ → WaveShaper (Unipolar, medium) → Comp
Vocal:  Recording → EQ → De-esser → WaveShaper → Comp → EQ
Master: Mix → WaveShaper (subtle) → Comp → Limiter
`\`\`

### Example 2: Smooth R&B Track
`\`\`
Kick:   Sample → EQ → WaveShaper (Unipolar, gentle) → Comp
Snare:  Sample → EQ → WaveShaper (Unipolar, gentle) → Comp → Reverb
808:    Synth → EQ → WaveShaper (Unipolar, gentle) → Comp
Vocal:  Recording → EQ → De-esser → WaveShaper (Unipolar, subtle) → Comp
Master: Mix → WaveShaper (very subtle) → Comp → Limiter
`\`\`

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

## FILE: 04-Reference\technical-specifications.md

```markdown
# Plugin Specifications and Technical Details

## Fruity WaveShaper Technical Specifications

[SRC: IL-MAN] Official technical specifications for the Fruity WaveShaper plugin.

## General Specifications

### Plugin Information
- **Name:** Fruity WaveShaper
- **Type:** Waveshaper / Distortion
- **Category:** Effect / Distortion
- **Format:** FL Studio native plugin
- **Availability:** Included with FL Studio (all editions)

### System Requirements
- **Host:** FL Studio 12.5 or later
- **Platform:** Windows, macOS
- **Architecture:** 32-bit and 64-bit
- **CPU:** Minimal (increases with oversampling)
- **Memory:** Negligible RAM usage

## Audio Specifications

### Signal Processing
- **Internal Processing:** 32-bit floating point
- **Input/Output:** 32-bit floating point
- **Sample Rate Support:** All standard rates (44.1kHz - 192kHz)
- **Latency:** 
  - Standard: 0 samples (zero latency)
  - With oversampling: Minimal PDC (Plugin Delay Compensation)

### Transfer Function Engine
- **Type:** Spline-based waveshaping
- **Interpolation:** Catmull-Rom splines
- **Point Limit:** Unlimited
- **Range:** 
  - Input: -1.0 to +1.0 (normalized)
  - Output: -1.0 to +1.0 (normalized)

## Parameter Specifications

### Pre (Input Gain)
- **Range:** -24dB to +24dB
- **Default:** 0dB
- **Step Size:** 0.1dB
- **Automation:** Full support
- **Function:** Input amplification before curve processing

### Mix (Dry/Wet)
- **Range:** 0% to 100%
- **Default:** 100%
- **Step Size:** 1%
- **Automation:** Full support
- **Function:** Blend processed and original signals

### Post (Output Gain)
- **Range:** -24dB to +24dB
- **Default:** 0dB
- **Step Size:** 0.1dB
- **Automation:** Full support
- **Function:** Output level compensation

### Center (DC Offset Removal)
- **Type:** Toggle (On/Off)
- **Default:** On
- **Automation:** Not recommended
- **Function:** Removes DC bias from signal

### Mode (Unipolar/Bipolar)
- **Options:** Unipolar, Bipolar
- **Default:** Unipolar
- **Automation:** Full support
- **Function:** Symmetric vs asymmetric curve application

### Oversample
- **Options:** Off, 2x, 4x, 8x, 16x
- **Default:** Off
- **Automation:** Not available
- **Function:** Internal processing rate multiplier

### HQ (High Quality)
- **Type:** Toggle (On/Off)
- **Default:** Off
- **Automation:** Not available
- **Function:** Enhanced processing for low-level signals

[SRC: IL-MAN] All parameters except Center, Oversample, and HQ support full automation.

## Oversampling Specifications

### Processing Rates by Setting

| Setting | Internal Rate (44.1kHz project) | Nyquist Frequency | Latency Impact |
|---------|----------------------------------|-------------------|----------------|
| Off | 44.1kHz | 22.05kHz | 0 samples |
| 2x | 88.2kHz | 44.1kHz | < 1 sample |
| 4x | 176.4kHz | 88.2kHz | 1-2 samples |
| 8x | 352.8kHz | 176.4kHz | 2-4 samples |
| 16x | 705.6kHz | 352.8kHz | 4-8 samples |

### Aliasing Prevention
- **Off:** Standard quality, potential aliasing with heavy distortion
- **2x:** Basic anti-aliasing
- **4x:** Recommended for most applications
- **8x:** High-quality for aggressive settings
- **16x:** Maximum quality for extreme distortion

## Harmonic Generation Characteristics

### Unipolar Mode (Symmetric)
- **Harmonic Type:** Predominantly even-order
- **2nd Harmonic:** Strong
- **4th Harmonic:** Moderate
- **6th+ Harmonics:** Weak
- **Character:** Warm, musical, analog-like

### Bipolar Mode (Asymmetric)
- **Harmonic Type:** Mix of odd and even
- **3rd Harmonic:** Strong
- **5th Harmonic:** Moderate
- **Even Harmonics:** Present but weaker
- **Character:** Aggressive, complex, punchy

## CPU Usage Estimates

### Baseline Usage (No Oversampling)
- **Single instance:** < 0.1% CPU (modern processor)
- **Multiple instances:** Scales linearly
- **Complex curves:** Minimal impact

### With Oversampling

| Setting | Approximate CPU Multiplier |
|---------|---------------------------|
| Off | 1.0x (baseline) |
| 2x | 1.3x |
| 4x | 1.6x |
| 8x | 2.2x |
| 16x | 3.5x |

**Note:** Actual CPU usage varies by system and project settings.

## Automation and Control

### Supported Automation Targets
1. Pre (Input Gain)
2. Mix (Dry/Wet)
3. Post (Output Gain)
4. Mode (Unipolar/Bipolar)
5. Transfer curve points (advanced)

### Automation Behavior
- **Smooth interpolation:** No zipper noise
- **Sample-accurate updates:** Immediate response
- **Parameter smoothing:** Built-in smoothing

### MIDI Mapping
- **All parameters:** Mappable to MIDI controllers
- **Curve editing:** Not directly MIDI-controllable
- **Recommended:** Map Pre, Mix, and Mode for live control

## Compatibility

### FL Studio Integration
- **Patcher:** Supported as module
- **Channel rack:** Full functionality
- **Mixer:** Insert or send processing
- **PDC:** Automatic compensation when needed

### Sidechain Compatibility
- **Fruity Limiter:** Full compatibility
- **Fruity Compressor:** Standard sidechain
- **3rd-party:** Standard VST sidechain

### Multi-Instance Behavior
- **Independent processing:** Each instance is separate
- **No crosstalk:** Instances do not interact
- **CPU scaling:** Linear with instance count

## Known Limitations

### Technical Limits
- **No external curve import:** Curves must be drawn manually
- **No preset system:** Settings saved per project
- **No A/B comparison:** Single curve state
- **Oversampling latency:** Minimal but present at high settings

### Workflow Considerations
- **Curve editing:** No undo for individual point deletions
- **Visual feedback:** No real-time spectrum display
- **Reset:** Double-click graph to reset to linear

## Version History

### FL Studio 20.8+
- Modern vector-based UI
- Improved spline interpolation
- HQ mode added
- Enhanced oversampling algorithms

### Earlier Versions
- Basic functionality consistent
- UI improvements over time
- Core waveshaping unchanged

## Best Practices Summary

### Recommended Settings by Use Case

| Application | Mode | Oversample | Pre Range | Mix Range |
|-------------|------|------------|-----------|-----------|
| 808s | Unipolar | 4x | +8 to +12dB | 50-70% |
| Drums | Bipolar | 4x-8x | +12 to +16dB | 60-75% |
| Vocals | Unipolar | 4x | +4 to +8dB | 25-40% |
| Mix Bus | Unipolar | 4x | +2 to +4dB | 15-25% |
| Creative | Bipolar | 8x-16x | +10 to +20dB | 30-80% |

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Source:** [SRC: IL-MAN] Image-Line Official Documentation

```

---

## FILE: 04-Reference\transfer-function-design.md

```markdown
# Transfer Function Design Guide

## Understanding Transfer Functions

A transfer function defines how input amplitude maps to output amplitude. In Fruity WaveShaper, the graph IS the transfer function.

[SRC: IL-MAN] The spline-based graph editor allows creating custom transfer functions by placing and manipulating curve points.

## Transfer Function Fundamentals

### The Coordinate System
`\`\`
Y-Axis (Output)
     │
 1.0├────────●────────
     │      ╱   ╲
 0.5├─────●       ●───
     │   ╱           ╲
 0.0├──●───────────────●──
     │╱                 ╲
-0.5├●                   ╲
     │                     ●
-1.0├───────────────────────
     └───────────────────────
    -1.0  -0.5   0.0   0.5   1.0   X-Axis (Input)
`\`\`

**Key Points:**
- **Diagonal line (y=x):** Unity gain (no change)
- **Above diagonal:** Gain increase (amplification)
- **Below diagonal:** Gain reduction (attenuation)
- **Flat sections:** Limiting/clipping

### Mathematical Basis
The transfer function f(x) determines output y for any input x:
- **Linear:** f(x) = x (45° diagonal)
- **Hard Clip:** f(x) = min(x, threshold) for positive
- **Soft Clip:** f(x) = x / (1 + |x|/k)
- **Custom:** Defined by spline interpolation of points

## Curve Point Fundamentals

### Adding Points
- **Click on graph** to add control points
- **Minimum needed:** 3 points for basic curve
- **Recommended:** 5-7 points for smooth curves

### Point Placement
**X-Axis (Input):**
- -1.0 = Full negative amplitude
- 0.0 = Zero crossing (silence)
- +1.0 = Full positive amplitude

**Y-Axis (Output):**
- -1.0 = Full negative output
- 0.0 = Silence
- +1.0 = Full positive output

### Critical Point: (0,0)
The curve MUST pass through (0,0) for proper operation.
- **Below (0,0):** Negative half of waveform attenuated
- **Above (0,0):** Negative half amplified
- **At (0,0):** Unity gain at zero crossing (correct)

[SRC: IL-MAN] The center point (0,0) must maintain unity gain to prevent signal attenuation or phase issues.

## Common Transfer Functions

### 1. Linear (Unity)
`\`\`
Points: (-1, -1), (0, 0), (1, 1)
Result: Clean signal, no distortion
Use: Reference, starting point
`\`\`

### 2. Soft Clip (S-Curve)
`\`\`
Points: (-1, -0.85), (-0.5, -0.4), (0, 0), (0.5, 0.4), (1, 0.85)
Result: Gentle compression, even harmonics
Use: 808 warmth, vocal saturation
`\`\`

### 3. Hard Clip (Limiter)
`\`\`
Points: (-1, -0.8), (-0.8, -0.8), (0, 0), (0.8, 0.8), (1, 0.8)
Result: Sharp threshold, aggressive limiting
Use: Drum punch, hard limiting
`\`\`

### 4. Soft Limiter
`\`\`
Points: (-1, -0.9), (-0.7, -0.7), (-0.4, -0.4), (0, 0), (0.4, 0.4), (0.7, 0.7), (1, 0.9)
Result: Gradual limiting, controlled peaks
Use: Transparent peak control
`\`\`

### 5. Bitcrush (Staircase)
`\`\`
Points: Multiple horizontal segments with vertical jumps
Result: Quantized output, digital artifacts
Use: Lo-fi effects, creative destruction
`\`\`

## Spline Interpolation

### How It Works
Fruity WaveShaper uses spline interpolation to create smooth curves between points:
- **Catmull-Rom splines:** Smooth, continuous curves
- **Tangent matching:** Ensures smooth transitions
- **No sharp corners:** Unless intentionally placed

### Smoothness Guidelines
**For musical distortion:**
- Space points evenly
- Avoid abrupt y-axis changes
- Use 3-5 points for simple curves
- Use 7-10 points for complex shapes

**For aggressive distortion:**
- Sharp corners create high-frequency harmonics
- Use vertical/horizontal segments for hard clipping
- Cluster points near threshold for sharp knees

[SRC: IL-MAN] Spline interpolation ensures smooth transitions between points for artifact-free distortion.

## Asymmetric Transfer Functions (Bipolar Mode)

### Independent Half-Wave Processing
In Bipolar mode, you can shape positive and negative halves independently:

**Positive Half:**
`\`\`
Points: (0, 0), (0.5, 0.6), (1.0, 0.8)
Result: Harder positive compression
`\`\`

**Negative Half:**
`\`\`
Points: (-1.0, -0.9), (-0.5, -0.4), (0, 0)
Result: Softer negative compression
`\`\`

### Creating Asymmetry
1. Switch to Bipolar mode
2. Shape positive half first
3. Shape negative half differently
4. Compare with Unipolar for reference

### Applications
- **Drum transients:** Hard positive, soft negative
- **Tube simulation:** Gentle asymmetry
- **Creative effects:** Extreme differences

## Advanced Curve Design

### Multi-Segment Curves
Create complex transfer functions with multiple behaviors:

**Example: Expand then Compress**
`\`\`
(-1, -0.5)   ← Expanded low levels
(-0.5, -0.3)
(0, 0)        ← Unity
(0.5, 0.7)
(1, 0.8)      ← Compressed peaks
`\`\`
Result: Quiet signals amplified, loud signals limited

### Wavefolding
Fold output back when it exceeds limits:
`\`\`
(-1, 0.5)
(-0.75, 0)
(-0.5, 0.5)
(-0.25, 0)
(0, 0)
(0.25, 0)
(0.5, 0.5)
(0.75, 0)
(1, 0.5)
`\`\`
Result: Metallic, complex harmonics

### Exponential Curves
Create non-linear response:
`\`\`
Points spaced closer together at high amplitudes
Result: Gentle at low levels, aggressive at peaks
`\`\`

## Curve Design Best Practices

### 1. Always Include (0,0)
`\`\`
Verify: Curve passes through origin
Consequence if missing: Signal attenuation, phase issues
`\`\`

### 2. Maintain Monotonicity
`\`\`
Rule: Curve should generally increase left-to-right
Exception: Intentional wavefolding
Consequence: Non-monotonic curves can create chaos
`\`\`

### 3. Limit Flat Sections
`\`\`
Guideline: Flat sections = clipping
Too much flatness = squashed dynamics
Use: Only at intended thresholds
`\`\`

### 4. Test with Sine Waves
`\`\`
Method: Apply curve to pure 1kHz sine
Analysis: View output in spectrum analyzer
Look for: Expected harmonics, no unexpected artifacts
`\`\`

[SRC: IL-MAN] Testing curves with pure tones reveals their harmonic generation characteristics clearly.

## Point Editing Shortcuts

### Mouse Operations
- **Left click:** Add point
- **Left click + drag:** Move point
- **Right click:** Delete point
- **Double click:** Reset to linear

### Keyboard Shortcuts
- **Alt + click:** Fine adjustment mode
- **Ctrl + Z:** Undo last point change
- **Spacebar:** Audition current curve (if supported)

## Curve Library

### Quick Reference Points

| Curve Type | Point 1 | Point 2 | Point 3 | Point 4 | Point 5 |
|------------|---------|---------|---------|---------|---------|
| Linear | (-1,-1) | (0,0) | (1,1) | - | - |
| Soft S | (-1,-0.85) | (-0.5,-0.4) | (0,0) | (0.5,0.4) | (1,0.85) |
| Hard Clip | (-1,-0.8) | (-0.8,-0.8) | (0,0) | (0.8,0.8) | (1,0.8) |
| Soft Limiter | (-1,-0.9) | (-0.7,-0.7) | (0,0) | (0.7,0.7) | (1,0.9) |

### Import/Export
While WaveShaper doesn't natively export curves, document your designs:
- Screenshot the graph
- Record point coordinates
- Save in project notes
- Share with collaborators

---

**Version:** 1.0  
**Last Updated:** 2026-02-03

```

---

