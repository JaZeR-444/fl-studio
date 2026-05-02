# Fruity Flangus - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Flangus - Advanced Unison Flanger

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ███████╗██╗      █████╗ ███╗   ██╗ ██████╗ ██╗   ██╗███████╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔════╝██║     ██╔══██╗████╗  ██║██╔════╝ ██║   ██║██╔════╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     █████╗  ██║     ███████║██╔██╗ ██║██║  ███╗██║   ██║███████╗
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██╔══╝  ██║     ██╔══██║██║╚██╗██║██║   ██║██║   ██║╚════██║
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██║     ███████╗██║  ██║██║ ╚████║╚██████╔╝╚██████╔╝███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚══════╝
`\`\`

**Plugin Type:** Multi-Voice Flanger / Unison Simulator
**Category:** Effect / Modulation
**Official Manual:** [Image-Line Fruity Flangus Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Flangus.htm)

---

## 🎯 What is Fruity Flangus?

While Fruity Flanger is a classic single-line flanger, **Fruity Flangus** is a powerhouse designed to simulate **Unison** and rich stereo chorusing. It stacks multiple flanger voices (Order) on top of each other, allowing for massive, lush, and wide textures that a standard flanger cannot achieve. It is less about the "Jet Plane" and more about "Ensemble" and "Thickness."

**Key Capabilities:**
- **Stacked Flangers (Order):** Run multiple flangers in parallel.
- **Stereo Spread:** Spreads the voices across the stereo field.
- **Cross Mixing:** Blends L/R channels for complex imaging.
- **Damping:** Softens the high frequencies of the effect.
- **Unison Simulation:** Can make a single oscillator sound like a Supersaw.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **flanger-vs-flangus.md**
3. Create **parameter-cheat-sheet.md**
4. Increase the "Order" knob and hear the sound get thicker.

### For Sound Designers:
1. Study **creating-supersaws.md** (Using Flangus on a single saw)
2. Review **dimension-expander.md**
3. Learn **complex-stereo-imaging.md**

### For Mix Engineers:
1. Study **thickening-vocals.md**
2. Review **synth-pad-enhancement.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Order:** Number of stacked voices.
  - **Depth/Speed:** Modulation controls.
  - **Delay:** Base offset.
  - **Spread:** Stereo distribution of voices.
  - **Cross:** Stereo cross-talk.

- [ ] **flanger-vs-flangus.md**
  - **Flanger:** Aggressive, resonant, single sweep.
  - **Flangus:** Smooth, wide, multi-voice, chorus-like.

#### 02-Data/parameters/
- [ ] **fruity-flangus-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Flangus",
    "category": "Modulation",
    "parameters": [
      {
        "name": "Order",
        "type": "knob",
        "description": "Number of stacked flanger voices",
        "pro_tip": "Higher order = richer, smoother unison sound."
      },
      {
        "name": "Stereo Cross",
        "type": "knob",
        "description": "Mixes L/R channels",
        "use_cases": ["gluing stereo image", "complex width"]
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-supersaws.md**
  - Taking a mono Saw wave.
  - Maxing out the "Order".
  - Adjusting Spread and Depth.
  - Result: Instant Trance lead.

- [ ] **dimension-expander.md**
  - Low Depth.
  - High Spread.
  - Short Delay.
  - Adding subtle width without obvious modulation.

- [ ] **dark-chorus.md**
  - Using the "Damp" knob to darken the effect.
  - Great for background pads.

#### 03-Workflows/by-context/
- [ ] **string-section-thickener.md**
- [ ] **vocal-ensemble-effect.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **unison-theory.md**
  - How stacking detuned voices creates "beating" and width.
  - How Flangus simulates this using delay lines.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Thickness

**Tasks:**
1. Load a simple Sine or Triangle wave
2. Increase Order to max
3. Adjust Spread
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does "Order" affect CPU?
- What happens when Delay is large? (Becomes a multi-tap delay mess).

### Phase 2: Creative Application (Week 2)
**Goal:** Stereo Mastery

**Tasks:**
1. Use Stereo Cross to blend a hard-panned signal
2. Use Flangus as a subtler alternative to Fruity Chorus
3. Create dimension-expander.md

**Key Questions to Answer:**
- Difference between Flangus and Unison in a synth (e.g., Sytrus)? (Flangus is post-processing, Sytrus is oscillator level).

---

## 📊 Plugin Specifications to Document

### Engine
- Max Order (Voices)
- Cross-Mix Topology

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it quieter? (Phase cancellation can reduce volume - check levels).
2. How do I make it sound less "wobbly"? (Reduce Depth and Speed).

---

## 📝 Documentation Standards

### For Each Workflow:
- **Order:** Number
- **Spread:** %
- **Depth:** %

---

## 🔗 Cross-Reference with Other Plugins

Fruity Flangus is often used with:
- **Fruity Chorus** (Similar, but Flangus is denser)
- **Fruity Stereo Shaper** (Width control)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Flangus/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── flanger-vs-flangus.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── fruity-flangus-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-supersaws.md
│   │   ├── dimension-expander.md
│   │   └── dark-chorus.md
│
└── 04-Reference/
    └── unison-theory.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Flangus Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Flangus.htm)
- [Fruity Flangus Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Flangus_tutorials.htm)
- [Fruity Flangus Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+flangus+tutorial)

### Community Resources
- [Fruity Flangus Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+flangus&restrict_sr=1)
- [Fruity Flangus User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Flangus Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Unison Simulation Techniques" - Understanding stacked voices
- "Chorus and Flanging Fundamentals" - Modulation effects theory
- "Stereo Imaging Principles" - Creating wide stereo sounds

### Advanced Techniques
- **Order Stacking:** Understanding multiple voice interactions
- **Stereo Cross Control:** Managing L/R channel interactions
- **Unison Simulation:** Creating thick, wide sounds from single sources

---

## 📚 In-Depth Technical Analysis

### Multi-Voice Architecture
Fruity Flangus implements a sophisticated multi-voice architecture:
- **Parallel Processing:** Multiple flanger voices operate simultaneously
- **Independent Modulation:** Each voice has its own modulation parameters
- **Phase Relationships:** Carefully managed phase relationships between voices
- **Stereo Distribution:** Voices distributed across the stereo field
- **Damping Control:** High-frequency attenuation for natural sound

### Signal Processing Chain
The internal processing follows this order:
- **Input Stage:** Signal level monitoring and adjustment
- **Voice Generation:** Creates multiple delayed copies of input
- **Modulation Engine:** Applies LFOs to each voice with slight variations
- **Stereo Distribution:** Spreads voices across stereo field
- **Cross Mixing:** Blends left and right channels
- **Damping:** Applies high-frequency attenuation
- **Output Stage:** Final level adjustment and monitoring

### Order Control System
The Order parameter controls the number of stacked voices:
- **Single Voice (Order 1):** Functions like a traditional flanger
- **Multiple Voices (Order 2-8):** Creates increasingly thick textures
- **Phase Relationships:** Each voice has slightly different timing
- **Detuning Simulation:** Mimics multiple instruments playing together
- **CPU Considerations:** Higher order values increase CPU usage

### Stereo Processing Architecture
Flangus features advanced stereo processing:
- **Spread Control:** Distributes voices across the stereo field
- **Cross Mixing:** Allows left/right channel interaction
- **Phase Management:** Maintains phase coherence across voices
- **Width Control:** Adjusts overall stereo width
- **Imaging Control:** Manages stereo positioning

### Modulation System
The modulation system creates the characteristic flanging effect:
- **LFO Control:** Speed and depth of modulation
- **Delay Control:** Base delay time for each voice
- **Depth Control:** Amount of modulation applied
- **Feedback Simulation:** Creates resonant peaks
- **Rate Control:** Speed of the modulation effect

## 🎛️ Parameter Deep Dive

### Order Control
- **Function:** Sets the number of stacked flanger voices
  - Range: 1-8 (typically)
  - Effect: More voices = thicker, richer sound
  - Use for: Creating unison and ensemble effects
  - Pro tip: Higher values create smoother, more natural unison
- **Behavior:**
  - Order 1: Single flanger effect
  - Order 2-3: Basic unison thickening
  - Order 4-6: Rich ensemble effects
  - Order 7-8: Dense, supersaw-like textures
  - Pro tip: Start with Order 4 for balanced thickness
- **Applications:**
  - Subtle thickening: Order 2-3 for gentle enhancement
  - Moderate unison: Order 4-5 for ensemble effects
  - Dense textures: Order 6-8 for supersaw simulation
  - Experimental: Maximum order for complex textures
  - Pro tip: Use with sawtooth waves for classic supersaw sounds

### Spread Control
- **Function:** Distributes voices across the stereo field
  - Range: 0-100% (typically)
  - Effect: Controls stereo width of the effect
  - Use for: Creating spatial separation between voices
  - Pro tip: Higher values create wider, more immersive sound
- **Behavior:**
  - 0%: All voices centered
  - Medium: Moderate stereo distribution
  - 100%: Maximum stereo separation
  - Pro tip: Use with caution to avoid phase issues
- **Applications:**
  - Mono compatibility: Low spread for mono-safe processing
  - Stereo enhancement: Medium spread for width
  - Wide effects: High spread for maximum width
  - Experimental: Maximum spread for extreme separation
  - Pro tip: Use medium values for natural stereo imaging

### Depth Control
- **Function:** Controls the amount of modulation applied to each voice
  - Range: 0-100% (typically)
  - Effect: Determines intensity of the flanging effect
  - Use for: Controlling the depth of the modulation
  - Pro tip: Lower values for subtle effects, higher for pronounced flanging
- **Behavior:**
  - 0%: No modulation, static delays
  - Low: Subtle modulation effects
  - Medium: Noticeable flanging
  - High: Pronounced, aggressive flanging
  - Pro tip: Use low values for chorus-like effects
- **Applications:**
  - Chorus simulation: Low depth for chorus-like effects
  - Flanging: Medium depth for classic flanging
  - Aggressive effects: High depth for intense modulation
  - Subtle enhancement: Very low depth for thickness
  - Pro tip: Combine with low speed for chorus effects

### Speed Control
- **Function:** Controls the rate of modulation
  - Range: 0.1-10 Hz (typically)
  - Effect: Determines how fast the modulation cycles
  - Use for: Controlling the speed of the effect
  - Pro tip: Lower values for subtle, chorus-like effects
- **Behavior:**
  - Very low: Slow, subtle changes
  - Medium: Classic flanging speed
  - High: Fast, aggressive modulation
  - Pro tip: Sync to tempo for rhythmic effects
- **Applications:**
  - Slow modulation: For subtle chorus effects
  - Medium modulation: For classic flanging
  - Fast modulation: For aggressive, sweeping effects
  - Tempo-synced: For rhythmic modulation
  - Pro tip: Use low speeds for background enhancement

### Delay Control
- **Function:** Sets the base delay time for each voice
  - Range: 0.1-50 ms (typically)
  - Effect: Determines the fundamental delay time
  - Use for: Setting the base timing of the effect
  - Pro tip: Short delays create chorus-like effects, longer create flanging
- **Behavior:**
  - Short delays: Chorus-like thickening
  - Medium delays: Classic flanging
  - Long delays: More pronounced comb filtering
  - Pro tip: Use short delays for subtle thickening
- **Applications:**
  - Chorus simulation: Short delays for thickness
  - Flanging: Medium delays for classic effect
  - Comb filtering: Longer delays for pronounced notches
  - Experimental: Extreme delays for unique effects
  - Pro tip: Use with feedback for resonant peaks

### Cross Control
- **Function:** Controls the amount of cross-mixing between left and right channels
  - Range: 0-100% (typically)
  - Effect: Allows L/R channel interaction
  - Use for: Managing stereo field coherence
  - Pro tip: Higher values create more cohesive stereo image
- **Behavior:**
  - 0%: No cross-mixing, isolated channels
  - Medium: Balanced cross-mixing
  - 100%: Maximum cross-mixing
  - Pro tip: Use for stereo field management
- **Applications:**
  - Stereo coherence: Medium cross for balanced imaging
  - Channel isolation: Low cross for separated processing
  - Width management: High cross for cohesive sound
  - Experimental: Maximum cross for unique effects
  - Pro tip: Use to prevent phase cancellation

### Damping Control
- **Function:** Applies high-frequency attenuation to the effect
  - Range: 0-100% (typically)
  - Effect: Darkens the high-end of the processed signal
  - Use for: Preventing harshness in the effect
  - Pro tip: Higher values create warmer, more natural sound
- **Behavior:**
  - 0%: No damping, preserves high frequencies
  - Medium: Gentle high-frequency roll-off
  - 100%: Maximum damping, darkens effect significantly
  - Pro tip: Use to prevent harshness in bright sources
- **Applications:**
  - Bright sources: High damping to tame harshness
  - Warm effects: Medium damping for natural sound
  - Dark textures: Maximum damping for vintage character
  - Subtle processing: Low damping for transparency
  - Pro tip: Use with bright synths to prevent harshness

## 🎼 Sound Design Applications

### Unison Simulation
Creating ensemble effects with Flangus:

**Supersaw Simulation:**
- High Order (6-8) for multiple voices
- Medium Spread for stereo width
- Low Depth and Speed for subtle chorus
- Short Delay for thickness without obvious modulation
- Essential for trance and electronic music

**Analog Ensemble:**
- Medium Order (4-6) for realistic ensemble
- Medium Spread for natural width
- Low Depth and Speed for subtle enhancement
- Short Delay for thickness
- Perfect for vintage synth emulation

**Vocal Stacking:**
- Medium Order (3-5) for multiple voices
- Low Spread for natural vocal ensemble
- Low Depth and Speed for subtle thickening
- Short Delay for chorus-like effect
- Essential for vocal enhancement

### Chorus Applications
Using Flangus for chorus effects:

**Analog Chorus:**
- Low Order (2-3) for subtle doubling
- Medium Spread for width
- Low Depth and Speed for analog character
- Short Delay for natural chorus
- Perfect for guitar and synth enhancement

**Digital Chorus:**
- Medium Order (4-5) for digital character
- High Spread for wide effect
- Medium Depth and Speed for digital chorus
- Medium Delay for digital chorus character
- Essential for modern chorus sounds

**Vintage Chorus:**
- Low Order (2-3) for vintage character
- Low Spread for mono-compatible processing
- Low Depth and Speed for subtle effect
- Short Delay for vintage chorus
- Perfect for retro sound design

### Flanging Applications
Creating traditional flanging effects:

**Classic Flanging:**
- Low Order (1-2) for traditional flanging
- Medium Spread for stereo effect
- Medium Depth and Speed for classic sound
- Medium Delay for traditional flanging
- Essential for jet-plane effects

**Rhythmic Flanging:**
- Medium Order (3-4) for rhythmic complexity
- Medium Spread for stereo movement
- Medium Depth and Synced Speed for rhythmic effect
- Medium Delay for rhythmic flanging
- Perfect for electronic music

**Experimental Flanging:**
- High Order (6-8) for complex textures
- High Spread for wide effects
- High Depth and Speed for aggressive effect
- Long Delay for pronounced comb filtering
- Useful for sound design

## 🧪 Experimental Techniques

### Advanced Unison Applications
Creative uses of Flangus's multi-voice capabilities:

**Multi-Timbral Unison:**
- Use different Order values for different sections
- Create evolving unison textures
- Combine with automation for dynamic changes
- Perfect for evolving pads and textures
- Useful for ambient and atmospheric music

**Rhythmic Unison:**
- Sync Speed to project tempo
- Create rhythmic thickening effects
- Use automation for rhythmic patterns
- Perfect for electronic and dance music
- Essential for rhythmic enhancement

**Harmonic Unison:**
- Use with harmonic-rich sources
- Create complex harmonic interactions
- Combine with filtering for selective enhancement
- Perfect for rich, complex textures
- Useful for orchestral and ensemble simulation

### Stereo Field Manipulation
Advanced stereo processing techniques:

**Wide Stereo Creation:**
- Use high Spread values for maximum width
- Combine with Cross for stereo coherence
- Use with bright, harmonic-rich sources
- Perfect for creating spacious sounds
- Essential for wide mix elements

**Immersive Stereo:**
- Use medium-to-high Spread values
- Combine with medium Cross values
- Apply to complex, evolving sounds
- Perfect for ambient and cinematic music
- Essential for immersive soundscapes

**Phase-Controlled Stereo:**
- Use low Cross values for separated processing
- Combine with careful Spread management
- Monitor for mono compatibility
- Perfect for experimental stereo effects
- Essential for phase-aware processing

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- Automate Order for dynamic thickness changes
- Modulate Spread for evolving stereo width
- Use envelope followers for dynamic control
- Combine with other modulation sources
- Perfect for live performance and expression

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

### Unison Creation Workflows
Efficient approaches to creating unison effects:

**Supersaw Creation:**
- Start with sawtooth oscillator
- Set Order to 6-8 for multiple voices
- Adjust Spread for stereo width
- Use low Depth and Speed for thickness
- Essential for trance lead sounds

**Analog Ensemble:**
- Use with analog-style oscillator
- Set Order to 4-6 for realistic ensemble
- Adjust Spread for natural width
- Use low Depth and Speed for analog character
- Perfect for vintage synth emulation

**Vocal Thickening:**
- Use with vocal recordings
- Set Order to 3-5 for multiple voices
- Use low Spread for natural ensemble
- Apply low Depth and Speed for subtle effect
- Essential for vocal enhancement

### Integration Workflows
Working with other plugins and tools:

**Synthesizer Integration:**
- Use with subtractive synthesizers
- Combine with wavetable synths for thickening
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
- **Trance Leads:** Creating supersaw sounds with high Order
- **House Chords:** Adding thickness to chord progressions
- **Techno Textures:** Creating evolving unison textures
- **Dubstep Wobbles:** Adding thickness to bass wobbles
- **Ambient Pads:** Creating lush, evolving textures

### Hip-Hop and R&B
- **Vocal Enhancement:** Adding thickness to vocal tracks
- **Synth Enhancement:** Adding character to synth sounds
- **Mix Enhancement:** Adding width to sparse arrangements
- **Creative Effects:** Adding movement to static elements
- **Transitions:** Creating filter sweep effects

### Rock and Metal
- **Guitar Enhancement:** Adding chorus and thickness to guitars
- **Bass Processing:** Creating wider bass sounds
- **Synth Enhancement:** Adding character to synth parts
- **Mix Enhancement:** Adding width to rock mixes
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Drone Creation:** Using high Order for dense drones
- **Atmospheric Processing:** Creating evolving textures
- **Experimental Sounds:** Creating unique sonic signatures
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Flangus works well with various effects:
- **Reverb:** Adding space to unison sounds
- **Delay:** Creating rhythmic patterns with unison
- **Chorus:** Combining with other chorus effects
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of unison signals

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
Fruity Flangus was developed as an advanced unison simulator:
- Created to provide multi-voice flanging and chorus effects
- Designed for creating thick, wide sounds from single sources
- Developed with electronic music production in mind
- Intended to complement traditional flanger and chorus plugins

### Evolution Through FL Studio Versions
- Initially introduced with basic multi-voice flanging
- Enhanced with additional parameters and controls
- Improved with better sound quality and stability
- Expanded with more sophisticated algorithms

### Impact on Music Production
Fruity Flangus has influenced music production by:
- Providing accessible unison simulation
- Enabling thick sound creation from single sources
- Facilitating supersaw sound design
- Supporting various musical genres with flexible unison

## 🧠 Advanced Processing Techniques

### Unison Simulation Mastery
Advanced techniques for unison simulation:
- **Voice Count Management:** Understanding optimal voice counts
- **Phase Relationships:** Managing phase between voices
- **Stereo Distribution:** Optimizing stereo field distribution
- **Frequency Response:** Understanding frequency interactions
- **Dynamic Response:** Creating responsive unison effects

### Stereo Enhancement
Advanced stereo processing techniques:
- **Width Control:** Precise stereo field management
- **Phase Coherence:** Maintaining phase relationships
- **Mono Compatibility:** Ensuring mono-safe processing
- **Spatial Imaging:** Creating complex spatial effects
- **Imaging Control:** Managing stereo positioning

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique unison textures
- **Atmospheric Processing:** Building ambient soundscapes
- **Rhythmic Effects:** Creating rhythmic unison patterns
- **Spatial Manipulation:** Creating immersive environments
- **Experimental Processing:** Pushing boundaries of unison

## 📊 Performance Considerations

### CPU Usage
Managing Flangus's impact on system performance:
- **Voice Count Impact:** Higher Order values increase CPU usage
- **Real-Time Performance:** Generally optimized for live performance
- **Instance Count:** Multiple instances multiply CPU usage
- **Parameter Automation:** Automated parameters may increase CPU usage
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Phase Coherence:** Maintaining phase relationships
- **Aliasing Prevention:** Avoiding digital artifacts
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output
- **Signal Integrity:** Preserving original signal quality

### System Integration
Optimizing Flangus within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimizing audio latency

## 🛠️ Troubleshooting Common Issues

### Unison Problems
- **Phase Issues:** Reduce Cross or Spread values
- **Loss of Clarity:** Reduce Order or adjust Delay
- **Excessive Width:** Lower Spread or increase Cross
- **Harsh Sound:** Use Damping or reduce Depth
- **CPU Overload:** Reduce Order or optimize settings

### Technical Issues
- **High CPU Usage:** Lower Order value or optimize parameters
- **Latency Issues:** Optimize buffer settings
- **Clipping:** Reduce input gain or increase output headroom
- **Artifacts:** Check sample rate and bit depth settings
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Try different Order/Spread combinations
- **Lack of Character:** Increase Order or adjust Depth/Speed
- **Poor Integration:** Use EQ or reduce amount to blend
- **Overpowering:** Reduce Order or use EQ to balance
- **Lack of Control:** Automate parameters for dynamic changes

## 🎚️ Advanced Configuration

### Custom Presets
Creating and managing custom configurations:
- **Unison Presets:** Optimized for unison simulation applications
- **Chorus Presets:** Configured for chorus applications
- **Flanging Presets:** Set up for traditional flanging applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple Flangus instances effectively:
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
- **FL Studio Forums:** Discussions about Flangus techniques
- **Reddit Groups:** Sharing unison techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced unison techniques
- **Written Guides:** In-depth articles on multi-voice processing
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting Flangus configurations
- **Technique Sharing:** Platforms for sharing processing methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Transform a mono synth into a wide stereo Supersaw using Order 6-8
- [ ] Explain the benefit of "Stereo Cross" for stereo field management
- [ ] Create a lush pad texture that sounds rich but not obviously modulated
- [ ] Use Flangus to thicken vocals without creating chorus artifacts
- [ ] Set up a classic analog chorus effect using low Order and Depth
- [ ] Create rhythmic unison effects by syncing Speed to tempo
- [ ] Troubleshoot phase and mono compatibility issues effectively
- [ ] Integrate Flangus into efficient mixing workflows
- [ ] Create complex stereo imaging using Spread and Cross controls
- [ ] Optimize Order settings for performance vs quality balance

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Flangus

## Purpose & Identity
Fruity Flangus is an **advanced multi-voice flanger** and unison simulator. Unlike the standard Fruity Flanger, Flangus is designed to stack multiple flanging voices (up to 8) to create rich, dense, and wide stereo textures. Its primary identity is a **Dimension Expander**—a tool for adding "Thickness" without the obvious "Wobble" of a traditional chorus. [SRC: IL-MAN]

## 60-Second Mental Model
Think of it as an "Ensemble" button. If Fruity Flanger is a single jet engine, Fruity Flangus is a whole fleet of jets flying in formation. By stacking these voices and spreading them across the stereo field, you can turn a thin, mono sound into a massive wall of audio.

## Hip-Hop / R&B Context
- **Vocal Thickening:** Making a thin R&B vocal sound like it was recorded with three microphones.
- **Supersaw Leads:** Turning a simple Sawtooth synth into a wide, energetic "Pop-Trap" lead.
- **Atmospheric Width:** Adding subtle dimension to spacey pads so they wrap around the listener's head.

## When To Use
- When you need **Unison** on a sound that doesn't have it built-in.
- When you want **extreme stereo width** that stays cohesive (using Stereo Cross).
- When a sound feels "flat" and needs a shimmering, expensive polish.

## When NOT To Use
- **Simple Mono Flanging:** Use **Fruity Flanger** if you just want a basic single-line sweep.
- **High CPU Sessions:** Stacking 8 voices (Order 8) uses significantly more CPU than a single-voice effect. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Flangus

## UI Tour
Fruity Flangus features a streamlined interface focused on voice count and stereo distribution. [SRC: IL-MAN]

### 1. The Engine (The "Thickness")
- **Order**: Determines the number of stacked flanger voices (1 to 8). This is the most important knob for "thickness."
- **Delay**: Sets the base delay time for the voices.
- **Speed**: The rate of the LFO modulation.
- **Depth**: How far the LFO modulates the delay lines.

### 2. Stereo & Tonal (The "Width & Color")
- **Spread**: Spreads the voices across the stereo field. 0% is mono; 100% is ultra-wide.
- **Cross**: Adjusts the amount of left-to-right channel feedback and mixing.
- **Damping**: A low-pass filter for the wet signal. Use this to make the effect sound "darker" or more "distant."

### 3. Mix Section
- **Dry/Wet**: Balance between the original and processed signal.

## Signal Flow
1. **Input**: Signal enters.
2. **Multi-Tap Generation**: The signal is split into multiple parallel paths based on the **Order** setting.
3. **Staggered Modulation**: Each path receives an LFO modulation with a slight phase offset from the others.
4. **Damping**: The high frequencies of the combined wet paths are attenuated.
5. **Stereo Logic**: Each voice is panned across the field based on **Spread**, and channels are inter-mixed based on **Cross**.
6. **Summing**: The multi-voice cloud is mixed back with the Dry signal.

## Things Beginners Misunderstand
- **"Order is volume"**: Increasing the order adds more voices, which increases the RMS level. You may need to lower the track fader.
- **"It's just a chorus"**: Technically, flanging uses much shorter delay times than chorusing. Even with many voices, Flangus maintains a "comb-filtered" or "phasy" quality that standard chorus does not.
- **The Cross Knob**: If you set Cross to high levels, you can create intense phase cancellation. Always check your meters.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Flangus

## 1. The "Supersaw" Transformation
Apply Flangus to a single Sawtooth wave (e.g., from 3xOsc).
- **Technique**: Set **Order** to 8. Set **Spread** to 100%. Set **Speed** to 0.5Hz.
- **Listen For**: The sound instantly expands from a thin line into a massive wall of sound.

## 2. Dimension Expansion (The Width Trick)
Adding width without making it sound "wobbly."
- **Technique**: Set **Depth** to <10%. Set **Speed** very low (<0.2Hz). Set **Spread** to 80%.
- **Listen For**: The sound gets wider and "larger" without the listener noticing the pitch is shifting.

## 3. Darkened Ensemble
Use the **Damping** knob to push the effect into the background.
- **Technique**: Turn **Damping** up to 70%. Use a high **Order** (6 or 8).
- **Listen For**: A thick, warm "blur" that sits behind the dry signal. Excellent for background strings or pads.

## 4. Phase Glue
Using the **Cross** knob to tighten the stereo image.
- **Technique**: Set **Cross** to ~30%.
- **Listen For**: The left and right channels start to "bleed" into each other, which can sometimes make an ultra-wide sound feel more cohesive and "glued" together.

## 5. Mono-Compatibility Rules
- **Protocol**: Every time you increase **Spread**, toggle the **Mono** button on your master track.
- **Fix**: If the sound "thins out" too much in mono, decrease the **Order** or the **Spread** knob until the core of the sound remains solid. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **"Muffled Sound"** | Lower the **Damping** knob. |
| **"Nauseating Wobble"** | Lower the **Speed** and **Depth**. |
| **"Lost in the Mix"** | Increase **Dry** level and lower **Wet**. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Flangus

Flangus translates vibes through **Voice Density** and **Spatial Dimension**.

## 1. Upbeat (High-Energy, Aggressive, Wide)
- **Concept:** "The Wall of Sound."
- **Levers:**
  - **Order:** 8 (Maximum thickness).
  - **Spread:** 100%.
  - **Depth:** 20%.
- **Listen For:** A dense, "Supersaw" energy that makes melodic leads feel massive.
- **Don't Do This:** Don't use slow speeds; keep the shimmer fast and energetic.

## 2. Psychedelic (Morphing, Liquified, Wide)
- **Concept:** "The Stereo Melt."
- **Levers:**
  - **Stereo Cross:** 100% (Maximum channel bleeding).
  - **Depth:** High (50%+).
  - **Speed:** 1.5Hz.
- **Listen For:** A disorienting width where the left and right channels feel like they are "swapping" places.

## 3. Spacey (Ethereal, Galactic, Deep)
- **Concept:** "The Infinite Horizon."
- **Levers:**
  - **Delay:** High (20ms+).
  - **Spread:** 100%.
  - **Damping:** High (to darken the edges).
- **Listen For:** A wide, dark atmosphere that feels like it’s stretching far beyond the speakers.

## 4. Vibey (Smooth, Glossy, Polished)
- **Concept:** "The Silk Layer."
- **Levers:**
  - **Order:** 4.
  - **Depth:** Very Low (5%).
  - **Mix:** 20%.
- **Listen For:** A subtle "rounding" of the sound that adds expensive-sounding width without being an obvious effect.

## 5. Moody (Heavy, Dark, Damp)
- **Concept:** "The Underwater Unison."
- **Levers:**
  - **Order:** 2.
  - **Damping:** Maximum.
  - **Delay:** 15ms.
- **Listen For:** A thick, muffled detuning that feels lonely and submerged. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\04_Unison_vs_Chorus.md

```markdown
# Unison vs. Chorus

While both effects create multiple "voices" from a single source, Fruity Flangus is specifically designed for **Unison** and **Flanging** rather than standard Chorus.

## The Difference
- **Chorus**: Uses longer delay times (15ms-50ms) and slow modulation to simulate multiple players.
- **Flangus/Unison**: Uses much shorter delay times (0.1ms-10ms). Because the delay is so short, the voices "interfere" with each other, creating a **comb filter** effect.

## Why Use Flangus for Unison?
1. **Thickness**: It makes a single-oscillator synth sound like a multi-oscillator beast.
2. **Phase Movement**: The short delays create a "swirling" phase movement that feels more integrated with the original sound than a chorus.
3. **Stereo Control**: Flangus excels at spreading these unison voices across the stereo field without making the sound feel "detached."

```

---

## FILE: 01-Learning\Concepts\05_Feedback_Polarity.md

```markdown
# Feedback Polarity

Fruity Flangus allows for both positive and negative feedback, which significantly changes the tone of the flanging effect.

## Positive Feedback (+)
- **Sound**: Resonant, hollow, and "tube-like."
- **Effect**: Boosts the frequencies where the original and delayed signals are in phase.
- **Use Case**: Classic "jet plane" sweeps and metallic textures.

## Negative Feedback (-)
- **Sound**: Deep, "scooped," and "through-zero" sounding.
- **Effect**: Attenuates the frequencies where the signals are in phase, creating a distinctive "hollow" character.
- **Use Case**: More subtle, sophisticated flanging that feels more "underwater" or "spacey."

## Phase Cancellation
When feedback is high, the phase relationship becomes critical. If you find your sound disappearing, try switching the polarity of the feedback to see if it restores the fundamental frequency.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Flangus (5 Minutes)

1.  **Insert:** Load **Fruity Flangus** onto a synth or vocal.
2.  **Stack:** Turn the **Order** knob to `4`. You will immediately hear the sound get "thicker."
3.  **Widen:** Increase the **Spread** knob to move the voices to the edges of the stereo field.
4.  **Polish:** Use the **Damping** knob to remove any harsh metallic high-end.
5.  **Mix:** Adjust the **Mix** slider until the effect blends perfectly.
6.  **Tip:** Use **Stereo Cross** at `50%` to "glue" the left and right sides together for a more natural sound. [SRC: IL-MAN]
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Flangus

| Parameter | Type | Range | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Order** | Knob | 1 to 8 | **Upbeat** (Energy) | **Density** | Number of stacked voices. |
| **Delay** | Knob | 0 to 50ms | **Spacey** (Deep) | **Timing** | Base time offset. |
| **Depth** | Knob | 0 to 100% | **Psychedelic** | **Motion** | Modulation intensity. |
| **Spread** | Knob | 0 to 100% | **Spacey** (Width) | **Width** | Stereo distribution. |
| **Stereo Cross**| Knob | 0 to 100% | **Vibey** (Glue) | **Phase** | Mixes L/R channels. |
| **Damp** | Knob | 0 to 100% | **Moody** (Dark) | **Tone** | High-frequency roll-off. |

- **Vibe Impact Tag (Density):** High Order values simulate "Unison" found in high-end hardware synths.
- **Mix Impact Tag (Glue):** Stereo Cross is the secret to making wide effects sound "natural" rather than "hollow." [SRC: IL-MAN]

```

---

## FILE: 02-Data\presets\chorus-style-ensemble.json

```json
{
  "presetName": "Chorus-Style Ensemble",
  "plugin": "Fruity Flangus",
  "description": "Mimics a classic ensemble chorus using high order and long delays.",
  "settings": {
    "order": 8.0,
    "delay": 15.0,
    "depth": 20.0,
    "speed": 0.3,
    "stereo": 1.0,
    "feedback": 0.0
  },
  "usage": "Great for string pads or electric pianos where you want a lush, wide sound without the 'swish' of a flanger."
}

```

---

## FILE: 02-Data\presets\subtle-thickener.json

```json
{
  "presetName": "Subtle Thickener",
  "plugin": "Fruity Flangus",
  "description": "Adds body without obvious modulation artifacts.",
  "settings": {
    "order": 1.5,
    "delay": 5.0,
    "depth": 10.0,
    "speed": 0.1,
    "stereo": 0.3,
    "feedback": 0.0
  },
  "usage": "Use on vocals or background instruments to help them stand out in the mix."
}

```

---

## FILE: 02-Data\presets\vintage-tape-flange.json

```json
{
  "presetName": "Vintage Tape Flange",
  "plugin": "Fruity Flangus",
  "description": "Classic tape-style flanging with negative feedback.",
  "settings": {
    "order": 2.0,
    "delay": 1.0,
    "depth": 80.0,
    "speed": 0.2,
    "stereo": 0.5,
    "feedback": -0.6
  },
  "usage": "Best for drum fills or psychedelic guitar sections."
}

```

---

## FILE: 02-Data\presets\wide-unison-lead.json

```json
{
  "presetName": "Wide Unison Lead",
  "plugin": "Fruity Flangus",
  "description": "Transforms a thin synth lead into a wide, powerful unison sound.",
  "settings": {
    "order": 4.0,
    "delay": 2.5,
    "depth": 50.0,
    "speed": 0.5,
    "stereo": 1.0,
    "feedback": 0.3
  },
  "usage": "Use on EDM leads or pads to add weight and width."
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Fruity Flangus)

## 1. Mono-Compatibility (The Order Rule)
- **Rule:** High Order settings (6-8) create complex phase relationships.
- **Application:** Always check your lead vocal in Mono when using Flangus. If it sounds "thin" or "phased out," reduce the **Spread** or increase **Stereo Cross**. [SRC: REPUTABLE]

## 2. Low-End Discipline
- **Rule:** Keep the sub-bass out of the Flangus.
- **Application:** Use Flangus on a **Parallel Send** with a high-pass filter at 300Hz. This ensures your width doesn't ruin the punch of your 808.

## 3. The "Silk" Vocal Rule
- **Rule:** For professional R&B vocals, avoid the "Wobble."
- **Application:** Set **Depth** to less than 10%. Use the **Order** knob to add thickness, but keep the modulation slow and shallow.

## 4. Damping for Space
- **Rule:** "Spacey" sounds shouldn't be "Hissing."
- **Application:** Use high **Damping** values (70%+) for background pads. This pushes the sound further back in the mix, creating a sense of distance.

## 5. Gain Staging
- **Rule:** Summing 8 voices can increase volume.
- **Application:** Watch your mixer peaks. If Flangus causes clipping, lower the **Dry/Wet** mix or the channel fader. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Creating Supersaw Leads (Fruity Flangus)

## Routing Context
- **Target:** A single Sawtooth wave (e.g., from 3x Osc).
- **Position:** Insert FX (Before Distortion).

## Step-by-Step Setup
1.  Initialize a single Sawtooth oscillator. It will sound thin and centered.
2.  Load **Fruity Flangus**.
3.  Set **Order** to `8`.
4.  Set **Spread** to `100%`.
5.  Set **Depth** to `20%` and **Speed** to `1.5 Hz`.
6.  **The Secret:** Set **Stereo Cross** to `30%` to keep the core centered while the edges shimmer.
7.  **Result:** Your mono saw is now a massive, wide Supersaw lead.

## Vibe Check
- **Upbeat/Pop-Trap:** Perfect for the high-energy melodic leads found in Lil Uzi Vert or Travis Scott style tracks.

## Pitfalls + Fixes
- **Pitfall:** "It sounds too metallic."
  - **Fix:** Increase the **Damping** to `40%` to soften the high-frequency resonances. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Shaping_And_Control.md

```markdown
# Goal: The "Dimension Expander" (Fruity Flangus)

## The Concept
Adding "Invisible Width" to a sound without the listener hearing a modulation effect.

## Step-by-Step Setup
1.  Load Flangus on a melodic instrument (e.g., Piano or Bells).
2.  Set **Order** to `4`.
3.  Set **Depth** to `0%` (Static voices).
4.  Set **Delay** to `10ms`.
5.  Set **Spread** to `80%`.
6.  Set **Stereo Cross** to `50%`.
7.  **The Mix:** Lower the Dry/Wet mix to `15%`.

## Result
- The sound simply feels "bigger" and more "3D." It mimics the classic Roland Dimension D hardware, which is a staple for "Vibey" R&B production.

## Vibe Check
- **Vibey/Spacey:** Adds a sense of professional polish and expensive-sounding space.

## Automation Idea
- Automate the **Mix** slider to increase during the chorus, making the arrangement wider as it builds. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\02_Goal_Adding_Texture.md

```markdown
# Goal: Adding Texture

How to use Flangus as a texture generator rather than a melodic effect.

## The Static Resonator
1. Turn **Speed** and **Depth** to 0%.
2. Set **Delay** to a very short value (0.5ms).
3. Increase **Feedback** to 90%.
4. **Action**: Manually move the **Delay** knob to find a "sweet spot" resonance.
5. **Result**: Adds a fixed, metallic ringing to your sound, similar to a small room or a metal pipe.

## The Subtle Thicken
- Use **Order 8**.
- Keep **Delay** at 5ms and **Depth** at 5%.
- **Result**: Adds a microscopic amount of movement that makes a digital sound feel more "real" and less "static."

## Layering with Reverb
- Place Flangus **after** a long reverb.
- **Result**: Modulates the reverb tail, creating a "shimmering" or "swirling" atmosphere that feels more alive.

```

---

## FILE: 03-Workflows\by-instrument\drums.md

```markdown
# Instrument: Drums

Adding movement to stagnant loops.

## The Flanged Fill
- Automate the **Mix** knob of Flangus to only kick in during a drum fill.
- **Result**: Makes the fill stand out and feel more "special."

## Metallic Hats
- Use high **Feedback** and short **Delay**.
- **Result**: Transforms standard hi-hats into industrial, metallic percussion.

```

---

## FILE: 03-Workflows\by-instrument\guitars.md

```markdown
# Instrument: Guitars

Creative modulation for string instruments.

## The Through-Zero Flange
- Use negative **Feedback**.
- Set **Depth** high.
- **Result**: Creates that classic "swoosh" that sounds like the guitar is disappearing and reappearing.

## 12-String Simulation
- Use a short **Delay** (5ms).
- Set **Order** to a high value.
- **Result**: Adds a complex set of harmonics that mimic the richness of a 12-string acoustic guitar.

```

---

## FILE: 03-Workflows\by-instrument\vocals.md

```markdown
# Instrument: Vocals

Using Flangus to add "lushness" to vocal tracks.

## The "Double" Effect
- Use a **Delay** of 10ms.
- Keep **Feedback** at 0%.
- **Result**: Sounds like a second vocal is singing along, adding thickness without the "watery" sound of a chorus.

## Lo-Fi Robotic Vocals
- Increase **Feedback** to 80%+.
- Use a very short **Delay** (under 1ms).
- **Result**: A metallic, resonant quality that works great for futuristic or robotic vocal textures.

## Wide Backgrounds
- Set **Stereo** to 100%.
- Use a slow **Speed** (0.1Hz).
- **Result**: Background vocals feel like they are wrapping around the lead.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log

- **Official Manual**: [Fruity Flangus - Image-Line](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Flangus.htm)
- **Technical Analysis**: Internal measurements of comb-filter peak distribution.
- **Workflow Patterns**: Standard mixing practices for unison effects.
```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Unison)

Sourced applications of multi-voice ensemble in Hip-Hop, Rap, and R&B.

## 1. Cloud Rap / Vapor Trap
- **Source**: Clams Casino / Main Attrakionz style.
- **Application**: Order 8 + 100% Spread on synth pads and filtered samples.
- **Goal**: Creating a "washed out" atmospheric landscape that feels infinite.

## 2. Early 2000s Pop-R&B
- **Source**: Timbaland / The Neptunes.
- **Application**: Order 4 + Medium Speed on melodic synth plucks.
- **Goal**: Turning a simple sine or square pluck into a more "synthetic" but expensive-sounding ensemble.

## 3. Modern Alternative R&B
- **Source**: 40 (Noah Shebib) / Frank Ocean.
- **Application**: Order 6 + High Damping + slow Speed on Rhodes or piano.
- **Goal**: Adding a "liquid" or "swirling" underwater depth to classic keyboard sounds.

## 4. Cinematic / Orchestral Trap
- **Source**: Metro Boomin / Mike Dean.
- **Application**: Stacking Order on string section samples or brass.
- **Goal**: Making a single string sample sound like a massive 50-person orchestra.

```

---

## FILE: 04-Reference\unison-theory.md

```markdown
# Technical Reference: Unison Theory (Flangus Model)

Understanding how Fruity Flangus simulates "Thickness." [SRC: REPUTABLE]

## 1. What is Unison?
In traditional analog synthesis, Unison is the act of triggering multiple oscillators simultaneously for a single note. Because no two oscillators are perfectly in tune or in phase, they create "beating" (constructive/destructive interference) that our ears perceive as a thick, lush ensemble.

## 2. The Flangus Emulation
Fruity Flangus simulates this effect post-oscillator by:
- **Delay Stacking**: Creating multiple copies of the input signal.
- **Micro-Offsets**: Each copy (Order) is given a slightly different base delay time.
- **Independent LFOs**: Each voice is modulated by an LFO that is slightly out of phase with the others.

## 3. Beating and Cancellation
- **Constructive**: When the waves align, the volume increases.
- **Destructive**: When one wave is at its peak and another at its trough, they cancel out.
- **Stereo Spread**: By panning these "beating" voices differently across the stereo field, Flangus prevents them from cancelling each other out completely in the master mix, resulting in massive width.

## 4. Why "Order" Matters
- **Order 1-2**: Sparse. You can hear individual "sweeps."
- **Order 6-8**: Dense. The individual sweeps blur together into a singular "texture." This is why higher orders sound "smoother."

```

---

## FILE: 04-Reference\technical-docs\comb-filtering-explained.md

```markdown
# Comb Filtering Explained

Comb filtering is the technical phenomenon that powers Fruity Flangus.

## The Physics
When a signal is delayed by a very short amount (0.1ms - 10ms) and mixed back with the original, certain frequencies cancel each other out while others reinforce each other. 
- The resulting frequency response graph looks like the teeth of a **comb**, hence the name.

## Why It Swirls
In Flangus, the **LFO (Speed/Depth)** is constantly moving the delay time back and forth. This causes the "teeth" of the comb to sweep across the frequency spectrum. This is what we hear as the "swishing" or "jet plane" sound.

## Order and Complexity
The **Order** parameter in Flangus determines how many of these "combs" are active at once. Higher order = more complex, lush sound.
- **Order 1**: Simple flanger.
- **Order 4**: Deep, complex unison.

```

---

