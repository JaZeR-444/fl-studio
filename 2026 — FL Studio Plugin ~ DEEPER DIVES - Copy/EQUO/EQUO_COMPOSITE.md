# EQUO - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# EQUO - Morphing Graphic Equalizer

`\`\`
███████╗ ██████╗ ██╗   ██╗ ██████╗ 
██╔════╝██╔═══██╗██║   ██║██╔═══██╗
█████╗  ██║   ██║██║   ██║██║   ██║
██╔══╝  ██║   ██║██║   ██║██║   ██║
███████╗╚██████╔╝╚██████╔╝╚██████╔╝
╚══════╝ ╚═════╝  ╚═════╝  ╚═════╝ 
`\`\`

**Plugin Type:** Graphic Equalizer / Morphing Tool
**Category:** Effect / Filter
**Official Manual:** [Image-Line EQUO Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/EQUO.htm)

---

## 🎯 What is EQUO?

EQUO is an advanced morphing graphic equalizer designed for both live performance and complex automation. Unlike standard parametric EQs, EQUO allows you to "draw" your EQ curves and seamlessly morph between different EQ states using a dedicated "Morph" knob. It features 8 banks of EQ/Pan/Send settings that can be blended in real-time.

**Key Capabilities:**
- Morphing between 8 different EQ states
- "Draw" mode for intuitive curve creation (Pencil, Line, Curve)
- Combined EQ, Panning, and Send level control per band
- "Analyze" function to match EQ to audio input
- Master Shift (frequency) and Mix (dry/wet) controls
- Low CPU usage for complex filtering

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review official manual on the "Morph" knob behavior
3. Create **parameter-cheat-sheet.md**
4. Test drawing curves and switching banks

### For Live Performers:
1. Review **live-performance-setup.md** (to be created)
2. Study **bank-morphing.md**
3. Learn **midi-linking-strategies.md** for the Morph knob

### For Sound Designers:
1. Study **creative-filtering.md**
2. Review **vocoder-style-effects.md** (using steep bands)
3. Learn **automation-workflows.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - Drawing Modes (Pencil, Line, Curve)
  - Bank Selectors (1-8)
  - Morph Knob
  - Shift / Bandwidth / Mix knobs
  - Analyze button
  - Vol / Pan / Send modes

- [ ] **morphing-explained.md**
  - How the Morph knob interpolates between banks
  - Creating smooth transitions vs. rhythmic steps
  - Setting up the "Master" vs "Individual" banks

#### 02-Data/parameters/
- [ ] **equo-params.json**
  `\`\`json
  {
    "plugin_name": "EQUO",
    "category": "Effect",
    "parameters": [
      {
        "name": "Morph",
        "type": "knob",
        "range": "0-100%",
        "description": "Blends between active EQ banks",
        "use_cases": ["filter sweeps", "evolving textures"]
      },
      {
        "name": "Shift",
        "type": "knob",
        "description": "Offsets all band frequencies",
        "pro_tip": "Automate this for phaser-like sweeping effects"
      }
    ]
  }
  `\`\`

#### 02-Data/presets/
- [ ] **morphing-templates.json**
  - Low-pass to High-pass sweep
  - Vowel/Formant morphing (A-E-I-O-U shapes)
  - Rhythmic Gating patterns

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-evolving-pads.md**
  - Drawing different curves in Banks 1-4
  - Automating the Morph knob slowly
  - Using the "Smooth" setting

- [ ] **matching-eq-workflow.md**
  - Using the "Analyze" button on a reference track
  - Freezing the curve
  - Applying it to a target track (inverse or match)

- [ ] **creative-panning.md**
  - Using the "Pan" mode to spread frequencies
  - E.g., Lows mono, Mids left, Highs right
  - Morphing panning states

#### 03-Workflows/by-context/
- [ ] **live-set-transition-tool.md**
- [ ] **complex-automation-clips.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **interpolation-algorithms.md**
  - How EQUO handles transition audio
  - CPU efficiency compared to Parametric EQ 2

- [ ] **analyzing-bandwidth.md**
  - How the "BW" (Bandwidth) knob affects band interaction
  - Creating comb-filter effects with low bandwidth

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Understand the Bank and Morph system

**Tasks:**
1. Open EQUO
2. Select Bank 1, draw a shape
3. Select Bank 2, draw a different shape
4. Move the Morph knob
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Does Morph move linearly (1->2->3) or blend all?
- How do drawing modes differ (Pencil vs Curve)?
- What does the "Shift" knob actually sound like?

### Phase 2: Advanced Application (Week 2)
**Goal:** Creative Sound Design

**Tasks:**
1. Setup a formant filter (vowel shapes)
2. Automate Morph with an LFO
3. Experiment with the "Analyze" function
4. Create creative-filtering.md

**Key Questions to Answer:**
- Can EQUO replace a Vocoder for some tasks?
- How detailed is the analysis resolution?
- How to use the Send mode for frequency-dependent reverb?

---

## 📊 Plugin Specifications to Document

### Filter Engine
- Number of Bands (User definable/fixed?)
- Frequency Range
- Internal headroom
- Morphing resolution

### Modes
- VOL (Volume/EQ)
- PAN (Frequency-based panning)
- SEND (Frequency-based effects send)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do you reset a curve to flat?
2. How do you copy Bank 1 to Bank 2?
3. What is the difference between "Mix" and "Vol"?

### Creative Usage
1. How to create "Shepard Tone" filter effects using Shift?
2. Can you use EQUO for stereo widening? (Yes, via Pan mode)
3. How to "lock" analysis curves?

---

## 📝 Documentation Standards

### For Each Workflow:
- **Banks Setup:** Detailed description of what to draw in each bank
- **Morph Strategy:** How to move between them (LFO, Automation, Manual)
- **Audio Example:** Description of the resulting sound

---

## 🔗 Cross-Reference with Other Plugins

EQUO is often used with:
- **Fruity Peak Controller** (Driving the Morph knob)
- **Fruity Parametric EQ 2** (Precise cuts vs EQUO's broad strokes)
- **Vocodex** (Comparison for formant effects)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
EQUO/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── morphing-explained.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── equo-params.json
│   └── presets/
│       └── morphing-templates.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-evolving-pads.md
│   │   ├── matching-eq-workflow.md
│   │   └── creative-panning.md
│
└── 04-Reference/
    └── interpolation-algorithms.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [EQUO Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/EQUO.htm)
- [EQUO Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/EQUO_tutorials.htm)
- [EQUO Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+equo+tutorial)

### Community Resources
- [EQUO Subreddit](https://www.reddit.com/r/FL_Studio/search?q=equo&restrict_sr=1)
- [EQUO User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [EQUO Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for comparison and fine-tuning
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Graphic Equalizer Fundamentals" - Understanding graphic EQ principles
- "Morphing Techniques" - Advanced morphing and automation
- "Frequency-Based Processing" - Frequency-dependent effects

### Advanced Techniques
- **Bank Morphing:** Using multiple banks for complex transitions
- **Frequency Panning:** Using frequency-based panning for stereo imaging
- **Analysis Matching:** Using the analyze feature for EQ matching

---

## 📚 In-Depth Technical Analysis

### Morphing Engine
EQUO's core feature is its morphing capability between 8 different EQ states:
- **Bank System:** 8 separate EQ configurations
- **Morph Control:** Smooth interpolation between banks
- **Real-time Morphing:** Seamless transitions during playback
- **Curve Interpolation:** Mathematical interpolation between drawn curves
- **Smooth Transitions:** Audio-transparent morphing algorithms

### Graphic Equalizer Architecture
The graphic EQ system features:
- **Draw Mode:** Intuitive curve drawing with pencil, line, and curve tools
- **Frequency Bands:** Fixed frequency points for EQ control
- **Resolution:** Number of adjustable frequency points
- **Bandwidth Control:** Adjustable bandwidth for each frequency band
- **Smooth Curves:** Mathematical smoothing for natural-sounding curves

### Processing Modes
EQUO offers multiple processing modes:
- **VOL Mode:** Volume/EQ control for amplitude shaping
- **PAN Mode:** Frequency-based panning for stereo imaging
- **SEND Mode:** Frequency-dependent send levels for effects routing
- **Mode Switching:** Real-time switching between processing types
- **Combined Processing:** Using multiple modes simultaneously

### Analysis Function
The analysis feature includes:
- **Real-time Analysis:** Live spectrum analysis of input
- **Curve Matching:** Matching EQ curve to analyzed spectrum
- **Inverse Analysis:** Creating inverse curves for correction
- **Freeze Function:** Freezing analyzed curves for later use
- **Reference Comparison:** Comparing to reference tracks

## 🎛️ Parameter Deep Dive

### Morph Controls
- **Morph Knob:** Blends between active EQ banks
  - Range: 0-100% (typically)
  - Function: Interpolates between two selected banks
  - Use for: Filter sweeps, evolving textures, rhythmic effects
  - Pro tip: Automate for evolving soundscapes
- **Bank Selectors:** Choose between 8 different EQ states
  - Range: 1-8 banks
  - Function: Select active banks for morphing
  - Use for: Storing different EQ configurations
  - Pro tip: Use for A/B comparisons and complex morphing
- **Morph Speed:** Controls transition speed between banks
  - Range: Variable from instant to slow
  - Function: Adjusts morphing speed
  - Use for: Smooth transitions vs rhythmic steps
  - Pro tip: Match to tempo for rhythmic effects

### EQ Controls
- **Shift Knob:** Offsets all band frequencies
  - Range: Variable frequency shift
  - Function: Moves entire EQ curve up/down
  - Use for: Phaser-like sweeping effects
  - Pro tip: Automate for doppler and pitch-shifting effects
- **Bandwidth (BW) Knob:** Controls band interaction
  - Range: Narrow to wide bandwidth
  - Function: Adjusts how bands interact
  - Use for: Comb-filter effects with low bandwidth
  - Pro tip: Low bandwidth creates more distinct bands
- **Mix Knob:** Dry/wet balance control
  - Range: 0% (dry) to 100% (wet)
  - Function: Balances processed and unprocessed signals
  - Use for: Subtle processing and parallel processing
  - Pro tip: Use for transparent processing

### Drawing Controls
- **Pencil Mode:** Freehand curve drawing
  - Function: Draw curves by hand
  - Use for: Organic, irregular curves
  - Pro tip: Use for unique, non-mathematical shapes
- **Line Mode:** Straight line segment drawing
  - Function: Draw straight segments
  - Use for: Precise, angular curves
  - Pro tip: Use for surgical EQ adjustments
- **Curve Mode:** Smooth curve drawing
  - Function: Draw smooth, curved segments
  - Use for: Natural-sounding EQ curves
  - Pro tip: Use for musical, smooth transitions

### Mode Controls
- **VOL Mode:** Volume/EQ control
  - Function: Adjust amplitude at different frequencies
  - Use for: Standard EQ applications
  - Pro tip: Use for tone shaping and frequency correction
- **PAN Mode:** Frequency-based panning
  - Function: Pan different frequencies to different positions
  - Use for: Stereo imaging and spatial effects
  - Pro tip: Use for creating wide, immersive stereo fields
- **SEND Mode:** Frequency-dependent sends
  - Function: Send different frequencies to different destinations
  - Use for: Frequency-specific effects routing
  - Pro tip: Use for frequency-dependent reverb and delay

## 🎼 Sound Design Applications

### Morphing Applications
Creating evolving sounds with EQUO's morphing capabilities:

**Evolving Pads:**
- Draw different curves in Banks 1-4
- Automate the Morph knob slowly
- Use the "Smooth" setting for gradual changes
- Create atmospheric, evolving textures
- Perfect for ambient and cinematic music

**Vowel Morphing:**
- Create vowel shapes in different banks (A-E-I-O-U)
- Use morphing to simulate formant changes
- Create "talking" effects on bass and lead sounds
- Perfect for robotic and vocal-like effects
- Use for creating talking synthesizers

**Rhythmic Filtering:**
- Create rhythmic gating patterns in banks
- Use morphing for rhythmic filter effects
- Sync to tempo for rhythmic precision
- Create complex rhythmic textures
- Perfect for electronic and dance music

### Frequency-Based Processing
Using EQUO for advanced frequency processing:

**Stereo Imaging:**
- Use PAN mode to spread frequencies across stereo field
- Low frequencies in center, highs wide
- Create immersive stereo experiences
- Perfect for wide, spacious mixes
- Use for creative stereo manipulation

**Effects Routing:**
- Use SEND mode for frequency-specific effects
- Send lows to reverb, highs to delay
- Create complex effects routing
- Perfect for creative effects processing
- Use for frequency-dependent processing

**Analysis-Based Processing:**
- Use ANALYZE to match EQ to audio input
- Create inverse curves for correction
- Match to reference tracks
- Perfect for corrective EQ
- Use for tone matching

## 🧪 Experimental Techniques

### Advanced Morphing Applications
Creative uses of EQUO's morphing capabilities:

**Shepard Tone Effects:**
- Use Shift knob for continuous pitch shifting
- Create ascending/descending illusions
- Combine with morphing for complex effects
- Perfect for experimental and ambient music
- Use for creating impossible pitch effects

**Vocoder Simulation:**
- Create formant shapes for vowel simulation
- Use morphing between vowel shapes
- Combine with carrier signals
- Perfect for robotic and vocal effects
- Use for creating talking synthesizers

**Comb-Filter Effects:**
- Use low bandwidth settings
- Create distinct, narrow bands
- Combine with morphing for evolving comb filters
- Perfect for metallic and resonant effects
- Use for creating resonant textures

### Creative Parameter Manipulation
Advanced parameter techniques:

**Automation Techniques:**
- Automate Morph knob for evolving effects
- Use LFOs to modulate morphing
- Create rhythmic morphing patterns
- Perfect for evolving textures
- Use for dynamic sound design

**Modulation Applications:**
- Use external controllers for morphing
- Combine with other modulation sources
- Create complex modulation chains
- Perfect for live performance
- Use for expressive control

**Multi-Mode Processing:**
- Combine VOL, PAN, and SEND modes
- Use different modes simultaneously
- Create complex processing chains
- Perfect for advanced sound design
- Use for sophisticated processing

## 🎚️ Workflow Optimization

### Preset Management
Efficient approaches to managing EQUO settings:
- **Bank Templates:** Collections of useful bank configurations
- **Morphing Presets:** Pre-configured morphing sequences
- **Genre-Specific:** Optimized for different musical styles
- **Application-Specific:** Mixing vs sound design presets
- **Quick Access:** Favorites for immediate access

### Integration Workflows
Working with other tools and plugins:
- **EQ Integration:** Combining with parametric EQs
- **Analysis Workflows:** Using with spectrum analyzers
- **Automation:** Integrating with automation clips
- **MIDI Control:** Mapping to MIDI controllers
- **Effects Chains:** Incorporating into effect chains

### Performance Optimization
Techniques for maximizing performance:
- **Mode Selection:** Different modes have different CPU loads
- **Parameter Automation:** Efficient automation strategies
- **Instance Management:** Multiple instances vs single instance
- **Bypass Strategies:** When to bypass for performance
- **Buffer Optimization:** Settings for real-time performance

## 🎧 Genre-Specific Applications

### Electronic Music
- **Filter Sweeps:** Morphing between different filter curves
- **Vowel Effects:** Creating robotic and vocal-like effects
- **Rhythmic Processing:** Creating rhythmic filter effects
- **Ambient Textures:** Creating evolving ambient sounds
- **Sound Design:** Creating unique electronic textures

### Hip-Hop and R&B
- **Vocal Processing:** Creating vowel-like effects on vocals
- **Bass Enhancement:** Shaping bass frequencies
- **Mix Enhancement:** Adding character to mixes
- **Sample Processing:** Enhancing and reshaping samples
- **Creative Effects:** Adding unique character to elements

### Rock and Metal
- **Guitar Processing:** Shaping guitar tones
- **Drum Enhancement:** Enhancing drum frequencies
- **Bass Processing:** Shaping bass frequencies
- **Mix Enhancement:** Adding character to rock mixes
- **Creative Effects:** Adding unique character to instruments

### Experimental and Ambient
- **Texture Creation:** Generating evolving textures
- **Atmospheric Processing:** Creating ambient soundscapes
- **Experimental Sounds:** Creating unique sonic signatures
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
EQUO works well with various effects:
- **Reverb:** Adding space to morphed sounds
- **Delay:** Creating rhythmic patterns with morphing
- **Chorus:** Adding width to morphed sounds
- **Filtering:** Selective frequency processing
- **Compression:** Controlling dynamics of morphed signals

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
- **Graphic EQ:** Comparing with traditional graphic EQs
- **Multi-Band:** Combining with multi-band processing
- **Dynamic EQ:** Using with dynamic EQ
- **Spectral Processing:** Combining with spectral tools

## 📖 Historical Context

### Development Background
EQUO was developed as FL Studio's advanced morphing equalizer:
- Created to provide morphing capabilities between EQ states
- Designed for both live performance and studio use
- Developed with creative sound design in mind
- Intended to complement traditional EQs

### Evolution Through FL Studio Versions
- Initially introduced with basic morphing capabilities
- Enhanced with additional drawing tools and modes
- Improved with better sound quality and stability
- Expanded with more sophisticated morphing algorithms

### Impact on Music Production
EQUO has influenced music production by:
- Providing accessible morphing EQ capabilities
- Enabling creative sound design techniques
- Facilitating live performance with EQ
- Supporting various musical genres with flexible processing

## 🧠 Advanced Processing Techniques

### Morphing Mastery
Advanced techniques for morphing:
- **Smooth Transitions:** Creating seamless morphing
- **Rhythmic Morphing:** Syncing morphing to tempo
- **Complex Sequences:** Creating multi-bank morphing
- **Real-time Control:** Live morphing techniques
- **Automation Programming:** Complex morphing automation

### Frequency-Based Processing
Advanced frequency processing techniques:
- **Surgical EQ:** Precise frequency adjustments
- **Broad Strokes:** General tonal shaping
- **Frequency Mapping:** Mapping frequencies to other parameters
- **Spectral Shaping:** Advanced spectral manipulation
- **Harmonic Processing:** Processing based on harmonic content

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique sonic textures
- **Vocal Processing:** Advanced vocal manipulation
- **Instrument Enhancement:** Creative instrument processing
- **Mix Enhancement:** Advanced mix processing
- **Experimental Processing:** Pushing boundaries of EQ

## 📊 Performance Considerations

### CPU Usage
Managing EQUO's impact on system performance:
- **Mode Impact:** Different modes have different CPU loads
- **Parameter Complexity:** Some parameters are more intensive
- **Instance Count:** Multiple instances multiply CPU usage
- **Real-Time Performance:** Impact on buffer sizes
- **Offline Processing:** When to bounce for performance

### Audio Quality
Maintaining audio quality during processing:
- **Bit Depth:** Maintaining high bit depth
- **Sample Rate:** Using appropriate sample rates
- **Aliasing Prevention:** Avoiding digital artifacts
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output

### System Integration
Optimizing EQUO within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimizing audio latency

## 🛠️ Troubleshooting Common Issues

### Morphing Problems
- **Harsh Transitions:** Increase morphing smoothness
- **Unnatural Morphing:** Adjust bandwidth settings
- **Phase Issues:** Check stereo field and width settings
- **Excessive Artifacts:** Reduce morphing speed or intensity
- **Audio Dropouts:** Check system resources and buffer settings

### Technical Issues
- **High CPU Usage:** Switch to less intensive mode
- **Latency Issues:** Optimize buffer settings
- **Clipping:** Reduce input gain or increase output headroom
- **Artifacts:** Check sample rate and bit depth settings
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Try different morphing speeds or curves
- **Lack of Character:** Adjust bandwidth or morphing settings
- **Poor Integration:** Use parallel processing or EQ to blend
- **Overpowering:** Reduce mix or use EQ to balance
- **Lack of Control:** Automate parameters for dynamic changes

## 🎚️ Advanced Configuration

### Custom Presets
Creating and managing custom configurations:
- **Mixing Presets:** Optimized for mixing applications
- **Sound Design Presets:** Configured for creative applications
- **Performance Presets:** Set up for live use
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple EQUO instances effectively:
- **Frequency-Specific:** Different instances for different bands
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
- **FL Studio Forums:** Discussions about EQUO techniques
- **Reddit Groups:** Sharing morphing techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced morphing techniques
- **Written Guides:** In-depth articles on graphic EQ and morphing
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting EQUO configurations
- **Technique Sharing:** Platforms for sharing processing methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a convincing "talking bass" using vowel morphing
- [ ] Use the Analyze feature to balance a mix
- [ ] Create a complex stereo field using Frequency Panning
- [ ] Explain the difference between EQUO and a standard graphic EQ

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\00_Overview.md

```markdown
# EQUO - Overview

## What is EQUO?

EQUO is a morphing graphic equalizer that allows you to draw and interpolate between different EQ curves in real-time. It features 8 different EQ banks that can be morphed between using a central X/Y pad, making it ideal for creating evolving filter sweeps, formant filtering, and creative sound design. Unlike traditional parametric EQs, EQUO lets you visualize and draw your EQ curves directly, with smooth transitions between different configurations.

**Key Capabilities:**
- **8 EQ Banks:** Store 8 different EQ configurations for morphing
- **X/Y Morphing Pad:** Real-time interpolation between different EQ states
- **Draw Mode:** Intuitive curve drawing with pencil, line, and curve tools
- **Analysis Function:** Match EQ to input signal spectrum
- **Three Processing Modes:** VOL (volume), PAN (frequency-based panning), SEND (frequency-based sends)
- **Master Shift:** Overall frequency shifting capability
- **Low CPU Usage:** Optimized for real-time performance

**Primary Use Cases:**
- Morphing filter sweeps for builds and drops
- Formant filtering for vocal-like effects
- Creative sound design with evolving textures
- Frequency-based panning for stereo enhancement
- Analysis-based EQ matching
- Live performance with real-time EQ manipulation

---

## Where it sits in FL Studio ecosystem

EQUO is categorized as a **Morphing Graphic Equalizer** and fits into the Effect category of FL Studio's plugin ecosystem. It serves as:

- A **creative filter tool** for evolving sound design
- An **analysis-based EQ** for matching to reference signals
- A **formant processor** for vocal-like filtering
- A **stereo enhancement tool** via frequency-based panning
- A **performance processor** for live manipulation

It works well in various contexts within FL Studio:
- On individual tracks for creative filtering
- On bus channels for group processing
- On the master channel for creative effects
- In automation clips for complex morphing sequences
- As part of creative sound design workflows

## What problem it solves and who it's for

EQUO addresses several key challenges in music production:

1. **Creative EQ Automation:** Allows for complex, evolving EQ changes that would be difficult with traditional parametric EQs
2. **Formant Filtering:** Provides vowel-like filtering for robotic or talking effects
3. **Visual EQ Design:** Offers intuitive curve drawing for precise EQ shaping
4. **Real-time Morphing:** Enables smooth transitions between different EQ states
5. **Analysis-Based Matching:** Allows for matching EQ to input or reference signals

It's ideal for:
- Sound designers looking for evolving filter effects
- Producers wanting creative filter sweeps and builds
- Mix engineers needing formant filtering capabilities
- Live performers who want real-time EQ manipulation
- Anyone who wants visual, intuitive EQ control

## A simple mental model: how to think about it in 60 seconds

Think of EQUO as a "visual morphing filter" where you can draw different EQ curves in 8 different "banks" and then smoothly move between them using an X/Y pad. Imagine having 8 different filter presets that you can blend between in real-time, with the added ability to draw exactly the EQ curve you want. It's like having a graphic EQ with the ability to animate between different curve shapes.

The X/Y pad is like having a macro control that simultaneously adjusts all the EQ bands based on which direction you move, but instead of just controlling one parameter, it morphs between completely different EQ configurations.

## When to use it

**Use EQUO when:**
- You want to create evolving filter sweeps or builds
- You need formant filtering for vocal-like effects
- You want to match EQ to a reference signal
- You're creating creative sound design with morphing textures
- You need frequency-based panning for stereo enhancement
- You want visual, intuitive EQ curve design
- You're performing live and need real-time EQ manipulation

**Don't use EQUO when:**
- You need surgical parametric EQ for specific frequency adjustments
- You want transparent, linear-phase EQ processing
- You need advanced dynamic EQ capabilities
- You require precise Q-factor control on specific frequencies
- You're looking for traditional EQ behavior without morphing capabilities

## Links

- [Official Manual Page](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/EQUO.htm)
- [EQUO Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/EQUO_tutorials.htm)
- [EQUO Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+equo+tutorial)
```

---

## FILE: 01-Learning\01_UI_Tour_And_Core_Concepts.md

```markdown
# EQUO - UI Tour And Core Concepts

## UI Tour

### Main Interface Layout

EQUO presents a unique interface centered around its morphing graphic equalizer functionality. The interface is organized into several key areas:

#### Top Section
- **Title Bar**: Shows the plugin name and version
- **Preset Browser**: For loading and saving EQ configurations
- **Mode Selector**: VOL (Volume), PAN (Panning), SEND (Send Level) modes
- **Global Controls**: Including bypass and mix controls

#### Central Area - EQ Graph and X/Y Pad
- **EQ Graph**: Visual representation of the current EQ curve
- **X/Y Morph Pad**: Central pad for morphing between different EQ banks
- **Bank Selectors**: 8 numbered buttons (1-8) for selecting different EQ configurations
- **Drawing Tools**: Pencil, Line, and Curve tools for drawing EQ curves
- **Analysis Button**: For matching EQ to input signal

#### Right Panel - Parameter Controls
- **Shift Knob**: Frequency shifting (moves entire curve left/right)
- **Bandwidth Knob**: Controls interaction between adjacent bands
- **Mix Knob**: Dry/Wet blend control
- **Current Bank Display**: Shows which bank is currently active

#### Bottom Section
- **Parameter Value Displays**: Numeric readouts for precise control
- **Status Indicators**: Showing current settings and activity

### Visual Feedback Elements

EQUO provides extensive visual feedback through:
- **EQ Curve Visualization**: Real-time display of current EQ curve
- **X/Y Position Indicator**: Shows current morph position on the pad
- **Bank Activation Lights**: Visual indication of which banks are active during morphing
- **Parameter Value Displays**: Numeric readouts for precise control
- **Active State Indicators**: Showing which parameters are being adjusted

## Core Concepts and Terminology

### Morphing EQ Fundamentals

**Morphing**: The process of smoothly interpolating between different EQ curves stored in different banks. This allows for real-time transitions between completely different frequency responses.

**Banks**: Eight separate EQ configurations that can be stored and recalled. Each bank contains a complete EQ curve that can be morphed to/from.

**X/Y Control**: The central pad that controls morphing between different banks. X-axis typically controls one set of banks while Y-axis controls another.

**Drawing Modes**: Three different tools (Pencil, Line, Curve) for creating EQ curves directly on the graph.

**Analysis Function**: Feature that analyzes the input signal and attempts to match the EQ curve to it.

### Key Parameters Explained

**Shift**: Controls overall frequency shifting of the entire EQ curve. Turning this parameter shifts all frequencies up or down by the same amount, creating phaser-like effects or pitch shifting.

**Bandwidth**: Controls how much adjacent bands interact with each other. Low bandwidth creates more distinct bands (like a comb filter), while high bandwidth creates smoother curves.

**Mix**: Controls the blend between processed and unprocessed signals. 0% is completely dry, 100% is completely wet.

**VOL/PAN/SEND Modes**:
- VOL: Volume-based EQ affecting amplitude
- PAN: Frequency-based panning affecting stereo position
- SEND: Frequency-based send levels for routing to effects

### Parameter Interactions

Understanding how parameters interact is crucial for effective use:

- **Shift + Morph**: Shift affects the entire curve regardless of morph position
- **Bandwidth + Morph**: Low bandwidth can create comb-filter effects during morphing
- **Mix + Morph**: Lower mix values reduce the intensity of morphing changes

### Core Terminology

**Morphing**: Smooth interpolation between different EQ curves
**Banks**: Separate EQ configurations (8 total)
**X/Y Pad**: Two-dimensional morphing control
**Drawing Modes**: Pencil, Line, Curve tools for EQ curve creation
**Analysis**: Automatic EQ matching to input signal
**Shift**: Frequency shifting of entire curve
**Bandwidth**: Band interaction control
**VOL/PAN/SEND**: Processing modes

## Typical Starting Workflow (the first 5 minutes)

1. **Load EQUO**: Insert EQUO into a channel in the Channel Rack or as an insert effect

2. **Select a Mode**: Choose between VOL (standard EQ), PAN (frequency-based panning), or SEND (frequency-based sends)

3. **Draw a Simple Curve**: Use the pencil tool to draw a basic EQ curve in Bank 1

4. **Create a Second Curve**: Switch to Bank 2 and draw a different curve (e.g., high-pass or low-pass)

5. **Test Morphing**: Move the X/Y pad to morph between the two curves

6. **Adjust Bandwidth**: Modify the bandwidth to hear how it affects the morphing

7. **Set Mix**: Adjust the dry/wet mix to taste

8. **Save as Starting Point**: Save this basic morphing setup as a starting template

## Common Beginner Traps (what people misunderstand)

1. **Thinking it's a regular EQ**: Many users expect EQUO to work like traditional parametric EQs, but it's a morphing graphic EQ with unique capabilities.

2. **Not understanding morphing**: The X/Y pad doesn't control individual parameters but interpolates between complete EQ curves.

3. **Ignoring drawing tools**: Users often don't realize they can draw curves directly rather than adjusting individual bands.

4. **Overlooking the analysis function**: The analysis feature can automatically match EQ to input signals, which many users miss.

5. **Misunderstanding modes**: The PAN and SEND modes work differently than standard EQ and can create unexpected results if misunderstood.

6. **Extreme bandwidth settings**: Very low bandwidth can create comb-filter effects that might be mistaken for malfunction.

7. **Not using multiple banks**: Some users only use one bank and miss the morphing capabilities entirely.

8. **Confusing Shift with pitch shift**: The Shift parameter moves the entire EQ curve but doesn't actually transpose the audio.
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: EQUO

## Purpose and Identity
**EQUO** is a multi-bank, morphing graphic equalizer. Unlike standard parametric EQs (like Parametric EQ 2) which focus on precise frequency cuts using nodes, EQUO is designed for **spectral shaping** and **real-time movement**. It allows you to draw 8 different EQ curves and seamlessly blend between them. [SRC: IL-MAN]

## 60-Second Mental Model
Imagine having 8 different EQ plugins on one track, each set to a different shape. Instead of switching between them, you have a master "Morph" knob that slides your sound through each shape like a liquid. It's not just an EQ; it's a creative filter bank that can change its entire personality with one automation move.

## Typical Roles In A Session
- **Spectral Animator**: Creating evolving pads and textures by morphing EQ shapes.
- **Rhythmic Filter**: Creating "vocal" or "wah-wah" effects on bass and leads.
- **Stereo Architect**: Spreading specific frequencies across the stereo field using the "Pan" mode.
- **Mixing Guard**: Using the "Analyze" function to quickly identify where a sound's energy is concentrated.

## Hip-Hop/R&B Context
- **Vocal Formants**: Creating robotic or talking textures on ad-libs by morphing between vowel-like EQ curves.
- **Underwater Bridge**: Creating a complex, textured low-pass filter transition that is more interesting than a simple sweep.
- **808/Kick Splitter**: Using the Pan mode to keep the sub-frequencies mono while pushing the harmonic "click" of the kick to the sides.

## When to Use vs When NOT to Use
| Use It When... | Avoid It When... |
| :--- | :--- |
| You want rhythmic, morphing filter effects. | You need surgical, precise frequency notches. |
| You need to spread frequencies across stereo (Pan mode). | You need zero phase-shift (use a Linear Phase EQ). |
| You want to "draw" an EQ curve quickly. | You are low on screen space (legacy UI is large). |

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: EQUO

## UI Tour
EQUO's interface is divided into the large display area and the control bank. [SRC: IL-MAN]

### 1. The Spectral Display (The "Grid")
- **Frequency Bands**: A series of vertical bars representing the frequency spectrum.
- **Drawing Tools**: Icons for **Pencil** (Freehand), **Line** (Straight), and **Curve** (Smooth).
- **Target Selector**: Buttons for **Vol** (EQ), **Pan** (Stereo), and **Send** (Mixer Send level).

### 2. The Bank Bank (Top Right)
- **1-8 Selectors**: Click a number to edit that specific EQ state.
- **Master / Individual Switch**: Determines if you are editing one bank or the combined result.

### 3. The Master Knobs (Bottom)
- **Morph**: Interpolates between the selected banks.
- **Shift**: Moves the entire frequency spectrum up or down (Pitch-like effect).
- **BW (Bandwidth)**: Controls how sharp or blurry the interactions between bands are.
- **Mix**: Global Dry/Wet balance.

## Signal Flow
1. **Input Stage**: The stereo signal enters.
2. **Frequency Splitting**: The internal engine splits the audio into multiple fixed-bandwidth bands.
3. **Target Processing**: 
   - If **Vol**: Adjusts gain of each band.
   - If **Pan**: Adjusts stereo position of each band.
   - If **Send**: Adjusts how much of each band is sent to the target mixer track.
4. **Morphing Logic**: The **Morph knob** calculates the weighted average of the active banks' settings.
5. **Summing**: The processed bands are recombined into a single audio signal.
6. **Output**: The signal leaves via the global **Mix** control.

## Things Beginners Misunderstand
- **"It's not an EQ"**: While it can EQ, its resolution is much lower than Parametric EQ 2. It is meant for broad, creative shapes.
- **The "Shift" knob**: It doesn't shift the pitch of the music; it shifts where the EQ filters are sitting. It can create "Phaser" like effects.
- **Send Mode**: To use this, you must have a "Send" track configured in your mixer. EQUO will then send specific frequencies only to that track.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: EQUO

## 1. The "Vowel" Talkbox
Create a sound that sounds like it's saying "A-E-I-O-U."
- **Technique**: Draw 5 different vowel frequency shapes into Banks 1-5.
- **Move**: Automate the **Morph knob** to sweep through the banks.
- **Listen For**: The resonant "formant" frequencies that mimic human speech.

## 2. Low-End Discipline (The 808 Split)
Using EQUO to ensure your sub-bass stays mono.
- **Technique**: Set EQUO to **Pan** mode.
- **Move**: Drag the bars representing frequencies below 150Hz to the middle (Center). Spread the bars above 1kHz to the sides.
- **Result**: A mix that has a focused low-end but a wide, expensive-sounding top end.

## 3. The "Spectral Riser"
Create tension during a build-up.
- **Technique**: Set Bank 1 to flat. Set Bank 2 to a thin, resonant peak in the high-mids.
- **Move**: Automate the **Morph knob** from 1 to 2, and simultaneously automate the **Shift knob** from left to right.
- **Listen For**: A sweeping "whistle" that climbs in frequency.

## 4. Copying and Pasting Banks
Don't draw from scratch every time.
- **Technique**: Right-click a Bank number to find the **Copy/Paste** commands.
- **Benefit**: Create a basic "Low Pass" shape in Bank 1, paste it to Bank 2, and then just tweak Bank 2 slightly for a smooth morph.

## 5. Mono Translation Check
- **Protocol**: If you use the **Pan** mode to create width, always check the **Master Mono** button.
- **Failure Mode**: Over-panning specific frequencies can cause them to disappear entirely in mono if the phase cancels out.
- **Fix**: Reduce the **BW** (Bandwidth) knob to smooth out the phase relationships. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Harsh "Ringing"** | Lower the **BW** knob to widen the filter bands. |
| **Sound is too quiet** | You have cut too many frequency bands in **Vol** mode. Increase the **Mix** or **Gain**. |
| **Morph sounds "Steppy"** | Increase your PPQ settings in FL Studio or use a smoother automation curve. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: EQUO

Translating abstract "vibes" into concrete settings moves for Hip-Hop and R&B.

---

## 1. MOODY
*Depth, darkness, and "underwater" weight.*
- **The Lever**: **Serial Filter Stacking + Low Shift**.
- **Move**: Set Bank 1 to a steep Low Pass. Set Bank 2 to an even deeper Low Pass. Automate **Morph** slowly between them. Keep the **Shift** knob centered or slightly left.
- **What to Listen For**: A "muffled" presence that feels like it's buried in the mix but still breathing.
- **Don't Do This**: High resonance/BW (too energetic).

## 2. UPBEAT
*Clarity, snap, and high-frequency "sparkle".*
- **The Lever**: **Peaking Sweeps + Fast Morphing**.
- **Move**: Draw a sharp "Bell" shape in Bank 1 at 3kHz and Bank 2 at 5kHz. Automate **Morph** at 1/4 note speeds.
- **What to Listen For**: The sound "jumps" forward rhythmically, adding energy to the groove.
- **Don't Do This**: Cutting the highs (kills the upbeat energy).

## 3. PSYCHEDELIC
*Disorientation, shifting spatial field, and warped textures.*
- **The Lever**: **Randomized Pan Banks + Shift Modulation**.
- **Move**: Draw a "Jagged" random line in **Pan** mode for Bank 1 and Bank 2. Automate the **Shift** knob with a fast LFO.
- **What to Listen For**: The sound "melting" and spinning around the listener's head unpredictably.
- **Don't Do This**: Static EQ shapes.

## 4. JAZZY
*Warmth, organic "rounding," and subtle focus.*
- **The Lever**: **Gentle Curve Smoothing + Low-Mid Focus**.
- **Move**: Use the **Curve** tool to draw a gentle hump between 300Hz and 600Hz. Set **BW** to maximum for transparency.
- **What to Listen For**: A "wooden" or "chewy" character that makes digital pianos sound more physical and expensive.
- **Don't Do This**: Aggressive "Pencil" drawing (sounds too digital).

## 5. VIBEY
*Modern silk, smooth breathing, and modern space.*
- **The Lever**: **Air-Shelf Morphing + Stereo Pan Spread**.
- **Move**: Bank 1: Boost 10kHz+. Bank 2: Boost 15kHz+. Use **Pan** mode to move the air to the sides.
- **What to Listen For**: A "silky" sheen that feels expensive and wraps around the vocal ad-libs.
- **Don't Do This**: Heavy low-mid processing.

---

## Vibe Parameter Matrix
| Vibe | Mode | Key Knob | BW Value | Morph Speed |
| :--- | :--- | :--- | :--- | :--- |
| **Moody** | Vol | Shift (Left) | High | Slow |
| **Upbeat** | Vol | Mix | Med | Fast |
| **Psyched** | Pan | Shift (Mod) | Low | Chaos |
| **Jazzy** | Vol | BW | Max | None |
| **Vibey** | Pan | Mix | Med | Pulse |

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: 5 Minutes with EQUO

## 1. Resetting the Slate
- Right-click the display area and select **Reset**.
- Ensure the **Mix** knob is at 100% and **BW** is at 50%.

## 2. Drawing your first state
1. Select **Bank 1**.
2. Click the **Pencil** tool.
3. Draw a "V" shape (cuts the mids).
4. Click the **Curve** tool.
5. Click and drag across the top to smooth out the edges.

## 3. Creating the Morph
1. Select **Bank 2**.
2. Draw an inverted "V" (boosts the mids).
3. Move the **Morph knob** from 0 to 100%. 
4. *Listen*: The sound transitions smoothly between the two shapes.

## 4. Tuning the "Width"
1. Switch the mode button to **Pan**.
2. Select **Bank 1**.
3. Draw a line from Bottom-Left to Top-Right.
4. *Result*: Lows are panned left, Highs are panned right.

## 5. Mono Check (Mandatory)
1. Always toggle the Master Mono button.
2. If the sound disappears, lower the height of your drawings in **Pan** mode.

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: EQUO

- **Confusing "Shift" with Pitch**: The **Shift** knob moves the filter bands, not the actual audio pitch. Using it incorrectly on a lead vocal can make the singer sound like they have a "blocked nose" or a "helium voice" effect.
- **Over-modulating the BW Knob**: Setting **BW** (Bandwidth) too low creates intense resonant spikes that can hurt the listener's ears. Keep it above 20% for musical results.
- **Ignoring the Analyze Button**: Producers often guess EQ shapes. Use the **Analyze** button while playing a sound to see its real-time spectral distribution—then EQ based on reality.
- **Leaving "Send" active without a target**: If the **Send** mode is active but you haven't routed EQUO to a Send mixer track, you won't hear anything happening in that mode.
- **Morphing too many banks**: If you automate Morph to go through all 8 banks too fast, the sound becomes chaotic and messy. Stick to 2-3 banks for controlled transitions.

```

---

## FILE: 02-Data\00_Controls_Reference.md

```markdown
# EQUO - Controls Reference

## Parameter List with Descriptions

### EQ Bank Controls

**Bank Selectors (1-8)**
- **Description**: Selects which of the 8 EQ banks to edit or activate
  - Each bank stores a complete EQ curve configuration
  - Banks can be morphed between using the X/Y pad
  - Useful for storing different EQ shapes for different sections
- **Range**: 1-8 (fixed)
- **Effect**: Changes which EQ configuration is active or being edited
- **Use for**: Storing different EQ curves for morphing
- **Pro tip**: Use different banks for different frequency responses (e.g., low-pass, high-pass, band-pass)

**X/Y Morph Pad**
- **Description**: Controls interpolation between different EQ banks
  - X-axis typically controls morphing between banks 1-4
  - Y-axis typically controls morphing between banks 5-8
  - Allows real-time morphing between different EQ curves
- **Range**: X: 0-100%, Y: 0-100%
- **Effect**: Interpolates between stored EQ curves based on pad position
- **Use for**: Real-time EQ curve morphing and automation
- **Pro tip**: Use with automation for evolving filter sweeps

### Drawing Tools

**Pencil Tool**
- **Description**: Allows freehand drawing of EQ curves
  - Creates organic, irregular EQ shapes
  - Good for subtle, musical EQ adjustments
- **Effect**: Enables freehand EQ curve drawing
- **Use for**: Organic EQ shaping and subtle adjustments
- **Pro tip**: Use for creating natural-sounding EQ curves

**Line Tool**
- **Description**: Draws straight line segments between points
  - Creates angular, precise EQ shapes
  - Good for surgical EQ adjustments
- **Effect**: Enables linear EQ curve drawing
- **Use for**: Precise EQ shaping and surgical adjustments
- **Pro tip**: Use for creating sharp filter cutoffs

**Curve Tool**
- **Description**: Draws smooth, curved segments
  - Creates musical, smooth EQ shapes
  - Good for natural-sounding EQ adjustments
- **Effect**: Enables smooth curve EQ drawing
- **Use for**: Musical EQ shaping and smooth transitions
- **Pro tip**: Use for creating musical-sounding EQ curves

### Processing Mode Controls

**VOL (Volume) Mode**
- **Description**: Standard volume-based EQ processing
  - Adjusts amplitude at different frequencies
  - Traditional EQ behavior
- **Effect**: Applies gain adjustments to frequency bands
- **Use for**: Standard EQ applications
- **Pro tip**: Use for traditional EQ tasks

**PAN (Panning) Mode**
- **Description**: Frequency-based panning
  - Adjusts stereo position of different frequencies
  - Creates stereo imaging effects
- **Effect**: Pans different frequencies to different positions in stereo field
- **Use for**: Stereo enhancement and imaging
- **Pro tip**: Use for creating wide, immersive stereo fields

**SEND Mode**
- **Description**: Frequency-dependent send levels
  - Sends different frequencies to different destinations
  - Useful for frequency-specific effects routing
- **Effect**: Routes different frequencies to different outputs
- **Use for**: Frequency-specific effects processing
- **Pro tip**: Use for routing different frequencies to different effects

### Core Parameter Controls

**Shift Knob**
- **Description**: Frequency shifting control
  - Shifts entire EQ curve left or right
  - Creates phaser-like or pitch-shifting effects
- **Range**: Negative to positive values (typically -100% to +100%)
- **Effect**: Moves all frequency bands by the same amount
- **Use for**: Creating pitch-shift or phaser-like effects
- **Pro tip**: Use with automation for doppler-style effects

**Bandwidth Knob**
- **Description**: Controls interaction between adjacent bands
  - Low values create comb-filter effects
  - High values create smooth curves
- **Range**: 0-100% (typically)
- **Effect**: Adjusts how much adjacent bands affect each other
- **Use for**: Creating comb-filter effects or smooth curves
- **Pro tip**: Use low values for metallic, resonant effects

**Mix Knob**
- **Description**: Dry/Wet blend control
  - 0%: Completely dry (original signal)
  - 100%: Completely wet (processed signal)
- **Range**: 0-100%
- **Effect**: Blends original and processed signals
- **Use for**: Controlling intensity of processing
- **Pro tip**: Use for parallel processing and transparency

### Analysis Function

**Analyze Button**
- **Description**: Analyzes input signal and creates matching EQ curve
  - Creates inverse curve to flatten frequency response
  - Creates matching curve to match reference
- **Effect**: Automatically generates EQ curve based on input
- **Use for**: Matching EQ to input signal or reference
- **Pro tip**: Use to match EQ to reference tracks or flatten problematic frequencies

### Global Controls

**Bypass**
- **Description**: Toggles processing on/off
  - When bypassed, signal passes through unchanged
  - Useful for A/B comparison
- **Effect**: Completely bypasses all processing
- **Use for**: A/B comparison and disabling processing
- **Pro tip**: Use for comparing processed and unprocessed signals

**Output Level**
- **Description**: Final output gain control
  - Adjusts overall output level
  - Compensates for level changes from processing
- **Range**: Usually ±12dB or more
- **Effect**: Adjusts final output level
- **Use for**: Gain staging and level matching
- **Pro tip**: Use for matching levels after processing

## Default Values and Safe Starting Ranges

### Bank Defaults
- **Active Bank**: 1 (usually)
- **All Banks**: Flat EQ curve (0dB across all frequencies) by default
- **Safe Range**: Banks 1-8 all available for use

### X/Y Pad Defaults
- **X Position**: 50% (center)
- **Y Position**: 50% (center)
- **Safe Range**: 20%-80% for most applications to avoid extreme settings

### Processing Mode Defaults
- **Default Mode**: VOL (Volume/Standard EQ)
- **Safe Starting Mode**: VOL for most applications
- **Alternative Modes**: PAN for stereo enhancement, SEND for routing

### Parameter Defaults
- **Shift**: 0% (no frequency shift)
- **Bandwidth**: 50% (medium interaction)
- **Mix**: 100% (fully processed)
- **Output Level**: 0dB (no gain change)

### Safe Starting Ranges
- **Shift**: -30% to +30% for subtle effects
- **Bandwidth**: 30% to 70% for musical results
- **Mix**: 50% to 100% for effective processing
- **X/Y Positions**: 30%-70% to stay in musical range

## Special Behaviors, Hidden Interactions, Right-Click Options, Integration Points

### Parameter Interactions
- **X/Y + Banks**: The X/Y pad position determines interpolation between active banks
- **Bandwidth + Morph**: Low bandwidth can create comb-filter effects during morphing
- **Shift + Morph**: Shift affects the entire curve regardless of morph position
- **Mode + EQ Curve**: Different modes interpret the EQ curve differently (volume vs panning vs send level)

### Hidden Interactions
- **Morph Smoothing**: Internal smoothing prevents clicks during morphing
- **Frequency Wrapping**: At extreme shift values, frequencies may wrap around
- **Mode Memory**: Each bank remembers its mode setting independently
- **Analysis Lock**: Analysis results can be locked to prevent real-time updates

### Right-Click Options
- **Parameter Reset**: Right-clicking on any knob resets it to default
- **MIDI Learn**: Right-clicking on parameters reveals MIDI learn options
- **Curve Copy/Paste**: Right-clicking on EQ graph allows copying/pasting curves between banks
- **Bank Operations**: Right-clicking on bank numbers may reveal additional bank operations

### Integration Points
- **MIDI Control**: All parameters can be mapped to MIDI CC messages
- **FL Studio Automation**: Full automation support for all parameters
- **Analyzer Integration**: Works with FL Studio's spectrum analyzer for visual feedback
- **Mixer Integration**: Properly integrates with FL Studio's mixer routing
- **Patcher Compatibility**: Can be used within Patcher for complex routing

## MIDI/automation notes and gotchas

### MIDI Implementation
- **X/Y Pad Control**: Can be controlled via two separate MIDI CC messages for X and Y axes
- **Bank Selection**: Banks can be switched via MIDI notes or CC messages
- **Parameter Automation**: All parameters support MIDI CC mapping and automation
- **Real-time Morphing**: X/Y pad can be controlled in real-time via MIDI controllers

### Automation Notes
- **X/Y Pad Automation**: Can be automated using XY controller automation lanes
- **Smooth Morphing**: Automation should be smoothed to avoid clicks during morphing
- **Bank Switching**: Automating bank selection can cause audible transitions
- **Parameter Interpolation**: Morphing parameters are interpolated smoothly during automation

### Gotchas
- **Extreme Morphing**: Rapid X/Y movements during automation can cause artifacts
- **Bank Switching Artifacts**: Automating bank selection may cause audible transitions
- **Parameter Range**: Some parameters have non-linear response curves
- **CPU Usage**: Complex morphing with multiple automation parameters may increase CPU usage
- **MIDI Mapping Conflicts**: Multiple parameters mapped to same CC number will interfere
- **Analysis Automation**: The analyze function may conflict with automation of EQ curves
- **Mode Changes**: Changing modes during playback may cause audible transitions
- **Bandwidth Automation**: Extreme bandwidth automation can create unexpected comb-filter effects
```

---

## FILE: 02-Data\01_Troubleshooting_Notes.md

```markdown
# EQUO - Troubleshooting Notes

## Known Issues, Limitations, Weird Behaviors

### Known Issues
- **Morphing Artifacts**: When morphing between banks with very different curves, there can be audible artifacts or clicks during transitions
- **Extreme Parameter Interactions**: At extreme settings (especially low bandwidth), the morphing algorithm can create unexpected comb-filter effects
- **Analysis Accuracy**: The analysis function may not perfectly match complex harmonic content, especially with multiple instruments
- **X/Y Pad Sensitivity**: The X/Y pad can be overly sensitive to small movements, making precise positioning challenging
- **Mode Switching Glitches**: Switching between VOL/PAN/SEND modes during playback can cause momentary artifacts

### Limitations
- **Fixed Band Count**: The number of EQ bands is fixed and cannot be adjusted by the user
- **No Linear Phase Mode**: EQUO uses minimum phase processing which can introduce phase shifts
- **Limited Bandwidth Control**: The bandwidth parameter affects all bands simultaneously rather than individually
- **No Mid/Side Processing**: EQUO processes left and right channels identically without independent M/S processing
- **No Dynamic EQ**: EQUO is static and doesn't respond dynamically to input level like dynamic EQs
- **CPU Usage at High Settings**: Extreme settings with high bandwidth values may increase CPU usage

### Weird Behaviors
- **Non-Linear Morphing**: The morphing between banks isn't always perceptually linear - some transitions happen faster than others
- **Frequency Wrapping**: At extreme shift values, frequencies may wrap around creating unexpected results
- **Band Interaction**: Adjacent bands can interact in complex ways that might not be immediately predictable
- **PAN Mode Stereo Imaging**: In PAN mode, extreme settings can create unusual stereo imaging effects that might seem like phase issues but are actually the intended behavior
- **SEND Mode Routing**: In SEND mode, the routing behavior might not be immediately obvious to new users

## CPU/Performance Considerations

### CPU Usage Patterns
- **Base Load**: EQUO has a moderate base CPU load that's comparable to other graphic EQs
- **Parameter Complexity**: CPU usage remains relatively stable regardless of parameter settings
- **Multiple Instances**: CPU usage increases linearly with the number of instances
- **Real-Time Morphing**: Morphing between banks in real-time has minimal additional CPU impact
- **Analysis Function**: The analysis function has a moderate CPU impact when active

### Performance Optimization Tips
- **Use Conservative Settings**: Avoid extreme bandwidth settings that may increase processing demands
- **Freeze Tracks**: When rendering down complex arrangements with many EQUO instances
- **Disable Analysis**: When not actively using the analysis function, disable it to save CPU
- **Optimize Instance Count**: Consolidate processing where possible to reduce instance count
- **Monitor Performance**: Use FL Studio's performance meter to monitor CPU usage

### Buffer Size Considerations
- **Small Buffers**: May cause increased CPU usage or audio dropouts with complex morphing
- **Large Buffers**: May introduce latency but can reduce CPU usage and improve stability
- **Recommended Setting**: Use FL Studio's automatic buffer size adjustment or experiment with 256-512 samples for a good balance

## "Symptom -> Cause -> Fix -> How to verify" Table

| Symptom | Possible Cause | Solution | How to Verify |
|---------|----------------|----------|---------------|
| Clicking/popping during morphing | Morphing between banks with very different curves | Smooth transitions by using more similar curves in adjacent banks | Listen for smooth transitions during X/Y pad movement |
| Harsh or metallic sound | Bandwidth set too low creating comb-filter effects | Increase bandwidth to 50% or higher | Compare with higher bandwidth settings |
| Phase issues in stereo | Using PAN mode with extreme settings | Reduce PAN mode settings or switch to VOL mode | Use stereo analyzer to check phase correlation |
| No audible morphing | X/Y pad positioned at extreme bank settings | Move X/Y pad to intermediate positions between banks | Watch for curve changes in the display |
| Analysis not matching input | Complex harmonic content or multiple instruments | Use simpler input or manually adjust the analyzed curve | Compare analyzed curve with input spectrum |
| High CPU usage | Too many instances or extreme bandwidth settings | Reduce instance count or optimize bandwidth settings | Monitor CPU meter in FL Studio |
| Latency issues | Large buffer size or too many instances | Reduce buffer size or optimize instances | Check timing accuracy with metronome |
| Clipping/distortion | Output gain too high or extreme curve settings | Lower output gain or reduce extreme curve settings | Use peak meters to ensure no red peaks |
| No sound | Input gain too low, muted track, or bypassed plugin | Check gain, unmute, verify bypass status | Verify signal path in mixer |
| Weak morphing effect | Banks set too similarly or X/Y pad at extremes | Create more distinct curves in different banks | Verify X/Y pad is between bank positions |
| Unpredictable morphing | Non-linear response between banks | Understand that morphing isn't perceptually linear | Test with simple sine wave input to understand response |
| Comb filtering | Bandwidth set too low with certain curve shapes | Increase bandwidth or adjust curve shapes | Listen for periodic frequency cancellations |

## Version-Specific Notes (labeled clearly with version)

### FL Studio 20.x Series
- **Initial Implementation**: The original implementation of EQUO with basic morphing capabilities
- **Basic Parameter Set**: Includes VOL/PAN/SEND modes and 8 banks
- **Limited Presets**: Smaller preset library compared to later versions

### FL Studio 20.7
- **Morphing Algorithm**: Improved morphing algorithm for smoother transitions
- **Parameter Smoothing**: Added improved parameter smoothing to reduce artifacts during automation

### FL Studio 20.8
- **Performance Optimization**: Minor optimizations to reduce CPU usage
- **UI Improvements**: Enhanced visual feedback for X/Y pad positioning

### FL Studio 21.0
- **Analysis Enhancement**: Improved analysis algorithm for better matching
- **Bandwidth Control**: Refined bandwidth parameter for more musical results

### FL Studio 21.1
- **Stability Improvements**: Fixed occasional crashes when using extreme bandwidth settings
- **Parameter Validation**: Improved validation of extreme parameter combinations to prevent instability

### FL Studio 21.2
- **MIDI Learn Enhancement**: Improved MIDI learn functionality for X/Y pad control
- **Automation Handling**: Better handling of X/Y pad automation for smoother transitions

### FL Studio 21.3
- **Interface Updates**: Minor UI improvements for better curve visualization
- **Bug Fixes**: Addressed rare initialization issues when loading projects

### FL Studio 21.4
- **Performance Monitoring**: Added internal performance monitoring for better stability
- **Parameter Interpolation**: Better interpolation between bank settings for smoother morphing

### FL Studio 21.5
- **Compatibility Improvements**: Better compatibility with third-party controller mapping
- **Analysis Accuracy**: Minor improvements to analysis accuracy with complex inputs
- **Documentation Updates**: Enhanced tooltips and parameter descriptions

### FL Studio 21.6
- **Algorithm Refinement**: Further refinement of the morphing algorithm
- **Parameter Smoothing**: Enhanced parameter smoothing for even smoother transitions
- **Stability**: Additional stability improvements for extreme settings

*Note: Version-specific behaviors should be verified against official Image-Line release notes, as these are based on general FL Studio development patterns.*
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: EQUO

| Parameter | Function | Vibe Impact | Mix Impact |
| :--- | :--- | :--- | :--- |
| **Morph** | Crossfades between the 8 Bank states. | Motion, evolution. | Dynamic frequency balance. |
| **Shift** | Offsets all filter bands in frequency. | Psychedelic, "talky." | Harmonic resonance focus. |
| **BW** | Bandwidth of the individual filter bands. | Character, harshness. | Phase clarity vs. resonance. |
| **Mix** | Overall dry/wet balance. | "Vibey" transparency. | Parallel processing. |
| **Analyze** | Matches EQ to the incoming signal. | Reality check. | Spectral balancing. |
| **VOL** | Adjusts gain per frequency band. | Moody (cuts), Upbeat (boosts). | Fundamental tone shaping. |
| **PAN** | Adjusts stereo position per band. | Vibey, wide space. | Stereo image distribution. |
| **SEND** | Adjusts external send level per band. | Deep texture control. | Frequency-dependent FX. |

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (EQUO)

## 1. Low-End Discipline
- **Rule**: In **VOL** mode, never boost frequencies below 100Hz by more than 3dB.
- **Why**: EQUO is a graphic EQ with a fixed 12dB slope. Heavy boosts in the sub-region create messy phase shift that destroys 808 impact.
- **Action**: Use Parametric EQ 2 for sub-boosts; use EQUO only for broad shaping or cleaning mud (cuts).

## 2. Vocal "Air" Width
- **Rule**: If a vocal ad-lib feels "claustrophobic," use **PAN** mode.
- **Technique**: Boost 10kHz+ and pan it hard Left/Right in EQUO.
- **Goal**: Creating "silky" air that wraps around the listener without conflicting with the main center lead.

## 3. Sample Cleanup (Pre-Processing)
- **Rule**: Use the **Analyze** button on old vinyl samples.
- **Action**: Identify the "Boxy" frequencies (usually 400Hz - 600Hz) and cut them in Bank 1. 
- **Goal**: Modernizing old soul samples to sit comfortably in a crisp trap mix.

## 4. Club Translation (Mono Safety)
- **Rule**: Always verify **Pan** drawings in mono.
- **Move**: Place EQUO before your reverb. 
- **Why**: Wide spectral panning can sound great in headphones but "hollow" in a mono club system if too many mid-frequencies are hard-panned.

```

---

## FILE: 03-Workflows\00_Practical_Use_Cases.md

```markdown
# EQUO - Practical Use Cases

## 8-12 Real Use Cases with Step-by-Step Setup

### Use Case 1: Morphing Filter Sweep for Build-ups
**Goal**: Create a morphing filter sweep that transitions between different EQ curves for tension and release

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a track with a sustained pad or chord progression
2. In Bank 1, draw a low-pass filter curve (high frequencies attenuated)
3. In Bank 2, draw a flat response curve (all frequencies at 0dB)
4. In Bank 3, draw a high-pass filter curve (low frequencies attenuated)
5. Set the X/Y pad to Bank 1 position initially (bottom-left)
6. Create an automation clip for the X/Y pad position
7. Draw a path from Bank 1 to Bank 2 over 8 bars for a build-up
8. Add a return from Bank 2 to Bank 1 for the drop/release
9. Adjust Mix to 80-90% for effective morphing
10. Fine-tune the morphing path for smooth transitions

**Recommended starting settings/ranges**:
- Banks 1-3: Different EQ curves for morphing
- Mix: 80-95% for effective morphing
- Bandwidth: 50-70% for smooth transitions
- Shift: 0-20% to avoid frequency misalignment

**Why it works / what to listen for**:
- The morphing creates smooth transitions between different EQ states
- Different frequency responses create tension and release
- Listen for smooth, musical transitions between EQ curves
- The physical modeling of the morphing creates natural-sounding transitions

**Variations**:
1. **Vowel Formant Morphing**: Create vowel shapes in different banks (A, E, I, O, U) for talking effects
2. **Rhythmic Morphing**: Use step automation to create rhythmic filter changes
3. **All 8 Banks**: Create complex morphing paths through all 8 banks for evolving textures

**Pitfalls + quick fixes**:
- Pitfall: Morphing creates harsh artifacts
  - Fix: Increase bandwidth to 60-70% and ensure curves in banks are not too extreme
- Pitfall: Sweep doesn't align with musical timing
  - Fix: Use grid-aligned automation and match to bar/beat divisions

### Use Case 2: Creative Vowel Filtering for Vocal-like Effects
**Goal**: Use EQUO to create vowel-like filtering effects similar to a vocoder

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a vocal track or a carrier signal (sawtooth wave works well)
2. In Bank 1, create a formant filter shape that resembles an "A" vowel
3. In Bank 2, create a formant filter shape for "E" vowel
4. In Bank 3, create a formant filter shape for "I" vowel
5. In Bank 4, create a formant filter shape for "O" vowel
6. In Bank 5, create a formant filter shape for "U" vowel
7. Set X/Y pad to interpolate between these vowel banks
8. Use moderate Mix (70-80%) to preserve vocal clarity
9. Apply light compression after EQUO to even out dynamics
10. Add subtle reverb for spatial enhancement

**Recommended starting settings/ranges**:
- Banks 1-5: Vowel formant shapes
- Mix: 70-85% for vocal clarity
- Bandwidth: 40-60% for natural formant response
- Shift: 0-10% to maintain natural pitch relationships

**Why it works / what to listen for**:
- The formant filtering emphasizes specific frequency regions that mimic vocal tract resonances
- Different vowel shapes emphasize different frequency bands
- Listen for vowel-like character in the processed sound
- The morphing between vowels creates talking or singing effects

**Variations**:
1. **Consonant Effects**: Add sharp attacks in some banks to simulate consonants
2. **Melodic Morphing**: Map vowel banks to MIDI notes for melodic vowel changes
3. **Carrier Modulation**: Use different carrier signals (sawtooth, square, complex tones)

**Pitfalls + quick fixes**:
- Pitfall: Vowel sounds are unclear or indistinct
  - Fix: Make formant peaks more pronounced and use appropriate bandwidth
- Pitfall: Effect sounds too synthetic
  - Fix: Reduce Mix to 60-70% and add more natural-sounding source material

### Use Case 3: Stereo Enhancement with Frequency-Based Panning
**Goal**: Use EQUO's PAN mode to create frequency-dependent stereo enhancement

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a mono track that needs stereo enhancement
2. Switch to PAN mode (instead of VOL mode)
3. In Bank 1, create a flat curve (all frequencies centered)
4. In Bank 2, create a curve that pans low frequencies center, mids left, highs right
5. In Bank 3, create a curve that pans low frequencies center, mids right, highs left
6. Set Mix to 70-80% to blend original with enhanced stereo
7. Use X/Y pad to morph between different stereo imaging approaches
8. Add a spectrum analyzer to monitor stereo field changes
9. Fine-tune the morphing for musical stereo enhancement
10. Check mono compatibility regularly

**Recommended starting settings/ranges**:
- Mode: PAN for frequency-based panning
- Banks 1-3: Different stereo imaging curves
- Mix: 70-85% for natural enhancement
- Bandwidth: 50-65% for smooth transitions

**Why it works / what to listen for**:
- Different frequencies are positioned differently in the stereo field
- Creates natural-sounding stereo enhancement without phase issues
- Listen for wider, more immersive stereo image
- The morphing allows for dynamic stereo field changes

**Variations**:
1. **Wide Mix Enhancement**: Use for adding width to dense mixes
2. **Rhythmic Stereo**: Create rhythmic stereo changes with automation
3. **Mono-Compatible**: Ensure extreme settings maintain mono compatibility

**Pitfalls + quick fixes**:
- Pitfall: Stereo enhancement causes phase cancellation in mono
  - Fix: Reduce the extreme panning in high frequencies and check mono regularly
- Pitfall: Stereo sounds unnatural or artificial
  - Fix: Reduce Mix to 60-70% and use more subtle panning curves

### Use Case 4: Frequency-Dependent Effects Routing
**Goal**: Use EQUO's SEND mode to route different frequencies to different effects

**Step-by-step setup inside FL Studio**:
1. Insert EQUO in SEND mode on a track with complex frequency content
2. In Bank 1, create a curve that sends lows to one return track and highs to another
3. In Bank 2, create a curve that emphasizes mid frequencies to a third return
4. Create three return tracks with different effects:
   - Return 1: Reverb for low frequencies
   - Return 2: Delay for high frequencies
   - Return 3: Chorus for mid frequencies
5. Route EQUO's SEND output to these return tracks
6. Adjust the EQ curves to control how much of each frequency range goes to each effect
7. Use X/Y pad to morph between different routing approaches
8. Use Mix to blend processed and unprocessed signals
9. Fine-tune the routing for optimal effect distribution
10. Monitor the individual return tracks to ensure balanced processing

**Recommended starting settings/ranges**:
- Mode: SEND for frequency-dependent routing
- Banks 1-2: Different routing curves
- Mix: 80-90% for effective routing
- Bandwidth: 40-60% for controlled frequency separation

**Why it works / what to listen for**:
- Different frequency ranges are processed by different effects
- Creates complex, evolving textures as frequencies morph between effects
- Listen for frequency-specific processing that changes over time
- The morphing allows for dynamic routing changes

**Variations**:
1. **Genre-Specific Routing**: Route frequencies to genre-appropriate effects
2. **Rhythmic Routing**: Create rhythmic changes in routing with automation
3. **Creative Combinations**: Combine with other effects for unique results

**Pitfalls + quick fixes**:
- Pitfall: Effects overwhelm the original signal
  - Fix: Reduce Mix to 60-70% and adjust return track levels
- Pitfall: Frequency separation is too obvious or unnatural
  - Fix: Increase bandwidth to 60-70% for smoother transitions between frequency bands

### Use Case 5: Dynamic EQ Alternative
**Goal**: Use EQUO as a creative alternative to dynamic EQ with morphing capabilities

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a track that needs dynamic EQ treatment
2. In Bank 1, create an EQ curve that addresses one set of frequency issues
3. In Bank 2, create an EQ curve for a different section with different needs
4. In Bank 3, create a flat curve for untreated sections
5. Use the X/Y pad to morph between different EQ treatments as the song progresses
6. Apply moderate Mix (70-80%) to blend treatments
7. Use automation to change the morph position during different song sections
8. Add a spectrum analyzer to visualize the changes
9. Fine-tune the curves to address specific frequency problems
10. Save the configuration as a template for similar applications

**Recommended starting settings/ranges**:
- Banks 1-3: Different EQ treatments for different sections
- Mix: 70-85% for transparent treatment
- Bandwidth: 50-70% for natural transitions
- Shift: 0-15% to maintain frequency relationships

**Why it works / what to listen for**:
- Different EQ curves can be applied to different sections of a song
- Morphing allows for smooth transitions between different treatments
- Listen for appropriate EQ treatment that changes with the music
- The visual interface makes EQ adjustments more intuitive

**Variations**:
1. **Vocal Treatment**: Different EQ for verse/chorus sections
2. **Instrument Evolution**: Change EQ character throughout a piece
3. **Mix Enhancement**: Different EQ for different mix sections

**Pitfalls + quick fixes**:
- Pitfall: EQ changes are too abrupt or obvious
  - Fix: Use smoother curves and higher bandwidth settings
- Pitfall: Morphing creates unwanted artifacts
  - Fix: Ensure similar gain levels across banks and use appropriate bandwidth

### Use Case 6: Creative Sound Design with Extreme Morphing
**Goal**: Use EQUO for creative sound design with extreme morphing between banks

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a sound design track with interesting harmonic content
2. In Bank 1, create a radical EQ curve (extreme cuts and boosts)
3. In Bank 2, create an opposite curve (boosts where Bank 1 cuts)
4. In Bank 3, create a comb-filter effect with alternating cuts/boosts
5. In Bank 4, create a narrow bandpass filter effect
6. Set X/Y pad to morph between these extreme curves
7. Use high Mix (90-100%) to fully hear the processing
8. Add automation to create evolving morphing patterns
9. Experiment with different morphing paths through the banks
10. Record the morphing automation for complex evolving textures

**Recommended starting settings/ranges**:
- Banks 1-4: Extreme, contrasting EQ curves
- Mix: 90-100% for full effect
- Bandwidth: 30-50% for more dramatic transitions
- Shift: 0-25% for additional frequency manipulation

**Why it works / what to listen for**:
- Extreme morphing creates unique, evolving textures
- Contrasting curves create interesting harmonic interactions
- Listen for complex, evolving timbral changes
- The morphing creates movement that static EQ cannot achieve

**Variations**:
1. **Rhythmic Morphing**: Sync morphing to tempo for rhythmic effects
2. **Random Morphing**: Use random automation for aleatoric textures
3. **Resonance Effects**: Create metallic, resonant textures with extreme settings

**Pitfalls + quick fixes**:
- Pitfall: Sound becomes too harsh or fatiguing
  - Fix: Reduce Mix to 70-80% and moderate the extreme EQ settings
- Pitfall: Morphing creates unwanted artifacts
  - Fix: Increase bandwidth to 50-60% for smoother transitions

### Use Case 7: Bass Enhancement with Morphing Character
**Goal**: Enhance bass with morphing character changes for dynamic low-end

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a bass track
2. In Bank 1, create a curve that emphasizes fundamental frequencies
3. In Bank 2, create a curve that emphasizes harmonic content and attack
4. In Bank 3, create a curve that adds sub-bass enhancement
5. Use VOL mode for amplitude changes
6. Set Mix to 75-85% to maintain bass foundation
7. Use X/Y pad to morph between different bass characters
8. Apply light compression after EQUO to control dynamics
9. Use automation to change bass character during different sections
10. Monitor with spectrum analyzer to ensure balanced low-end

**Recommended starting settings/ranges**:
- Banks 1-3: Different bass enhancement approaches
- Mix: 75-85% for natural enhancement
- Bandwidth: 50-65% for musical transitions
- Shift: 0-10% to maintain fundamental relationships

**Why it works / what to listen for**:
- Different EQ curves emphasize different aspects of the bass sound
- Morphing allows for dynamic character changes
- Listen for enhanced bass presence and character
- The morphing adds movement to sustained bass lines

**Variations**:
1. **Sub-Bass Enhancement**: Emphasize frequencies below 100Hz in specific banks
2. **Attack Enhancement**: Highlight note attacks and transients
3. **Harmonic Enhancement**: Bring out upper harmonics for more character

**Pitfalls + quick fixes**:
- Pitfall: Bass becomes too boomy or undefined
  - Fix: Reduce low-frequency boosts and ensure fundamental frequencies are not over-emphasized
- Pitfall: Morphing affects bass foundation negatively
  - Fix: Keep fundamental frequencies consistent across banks and use moderate changes

### Use Case 8: Acoustic Space Simulation
**Goal**: Use EQUO to simulate different acoustic spaces by morphing EQ curves

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a track that needs acoustic space simulation
2. In Bank 1, create an EQ curve that simulates a small room (boosts in mid-frequencies)
3. In Bank 2, create an EQ curve for a medium hall (specific frequency resonances)
4. In Bank 3, create an EQ curve for a large space (different resonance pattern)
5. In Bank 4, create an EQ curve for an outdoor space (high-frequency roll-off)
6. Use VOL mode for amplitude-based EQ changes
7. Set Mix to 60-75% to blend original with "acoustic" simulation
8. Use X/Y pad to morph between different acoustic simulations
9. Add subtle reverb after EQUO to enhance the space simulation
10. Fine-tune the curves to match the desired acoustic characteristics

**Recommended starting settings/ranges**:
- Banks 1-4: Different acoustic space simulations
- Mix: 60-75% for natural simulation
- Bandwidth: 50-65% for realistic transitions
- Shift: 0-15% to maintain natural frequency relationships

**Why it works / what to listen for**:
- Different spaces have characteristic frequency responses
- Morphing between spaces creates evolving acoustic environments
- Listen for changes in the perceived acoustic environment
- The morphing allows for dynamic space changes

**Variations**:
1. **Room Tone**: Simulate different room tone characteristics
2. **Venue Simulation**: Create different venue acoustic signatures
3. **Environmental Changes**: Simulate movement through different spaces

**Pitfalls + quick fixes**:
- Pitfall: Acoustic simulation sounds artificial
  - Fix: Use more subtle EQ changes and reference actual room impulse responses
- Pitfall: Morphing between spaces is too obvious
  - Fix: Use smoother curves and higher Mix settings to blend better

### Use Case 9: Creative Rhythmic Filtering
**Goal**: Use EQUO with automation to create rhythmic filtering effects

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a track with rhythmic content
2. Create simple but contrasting EQ curves in Banks 1 and 2
3. Set up an automation clip for the X/Y pad position
4. Create a rhythmic pattern that alternates between the two banks
5. Sync the automation to the project tempo (eighth or sixteenth notes)
6. Use moderate Mix (70-80%) to maintain rhythmic content
7. Adjust the timing to create syncopated or straight rhythmic patterns
8. Add slight variations to make the pattern more interesting
9. Fine-tune the EQ curves to create the desired rhythmic filtering effect
10. Consider using different rhythmic patterns for different song sections

**Recommended starting settings/ranges**:
- Banks 1-2: Contrasting but musical EQ curves
- Mix: 70-80% for rhythmic clarity
- Bandwidth: 40-60% for rhythmic definition
- Automation: Tempo-synced rhythmic patterns

**Why it works / what to listen for**:
- Rhythmic changes in EQ create interesting filtering effects
- The morphing happens in time with the music
- Listen for rhythmic filtering that enhances the groove
- The visual interface makes rhythmic automation more intuitive

**Variations**:
1. **Syncopated Patterns**: Create off-beat rhythmic filtering
2. **Polyrhythmic**: Use different subdivisions for complex rhythms
3. **Fill Patterns**: Create rhythmic fills with morphing automation

**Pitfalls + quick fixes**:
- Pitfall: Rhythmic filtering competes with other rhythmic elements
  - Fix: Use more subtle EQ differences between banks
- Pitfall: Pattern is too repetitive or predictable
  - Fix: Add variations and slight timing adjustments to the automation

### Use Case 10: Mix Enhancement and Glue
**Goal**: Use EQUO on a group bus to enhance mix cohesion with subtle morphing

**Step-by-step setup inside FL Studio**:
1. Route multiple tracks to a group bus
2. Insert EQUO on the group bus
3. In Bank 1, create a subtle enhancement curve (gentle boosts/cuts)
4. In Bank 2, create a different enhancement curve for contrast
5. Use conservative settings to maintain mix balance
6. Set Mix to 90-95% for mostly processed signal
7. Use X/Y pad to make subtle morphing adjustments
8. Add to the mix subtly without overwhelming the original balance
9. Use automation sparingly for gentle changes during the song
10. A/B compare frequently to ensure enhancement is beneficial

**Recommended starting settings/ranges**:
- Banks 1-2: Subtle enhancement curves
- Mix: 90-95% for mostly processed signal
- Bandwidth: 55-70% for smooth transitions
- Shift: 0-5% to maintain natural relationships

**Why it works / what to listen for**:
- Subtle EQ changes can enhance mix cohesion
- The morphing allows for gentle changes during the song
- Listen for improved mix clarity and cohesion
- The enhancement should be felt more than heard

**Variations**:
1. **Subtle Enhancement**: Very minimal EQ changes for transparency
2. **Character Enhancement**: Slightly more pronounced changes for character
3. **Section Enhancement**: Different enhancement for different song sections

**Pitfalls + quick fixes**:
- Pitfall: Enhancement becomes too obvious or changes the mix balance
  - Fix: Reduce Mix to 60-70% and use more conservative EQ curves
- Pitfall: Morphing creates unwanted artifacts in the mix
  - Fix: Use higher bandwidth settings and ensure similar gain levels across banks

### Use Case 11: Creative Pitch-Shift Alternative
**Goal**: Use EQUO's Shift parameter with morphing to create pitch-like effects

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a melodic track or chord progression
2. Set up different banks with different Shift amounts:
   - Bank 1: Shift 0% (original pitch)
   - Bank 2: Shift 20% (slight pitch shift)
   - Bank 3: Shift 40% (more pronounced shift)
3. Use the Shift parameter to create pitch-like effects without actual pitch shifting
4. Set Mix to 80-90% to blend original with shifted content
5. Use X/Y pad to morph between different shift amounts
6. Add light reverb to mask any artifacts
7. Fine-tune the shift amounts for musical results
8. Use automation for evolving pitch-like effects
9. Monitor for artifacts that might occur with extreme shifting
10. Compare with original to ensure musicality is maintained

**Recommended starting settings/ranges**:
- Shift Amount: 0-50% for musical results
- Banks 1-3: Different shift amounts
- Mix: 80-90% for effective blending
- Bandwidth: 50-65% for smooth transitions

**Why it works / what to listen for**:
- The Shift parameter moves the entire frequency spectrum
- Creates pitch-like effects without actual pitch shifting algorithms
- Listen for pitch-like movement that maintains timing
- The morphing allows for dynamic pitch-like changes

**Variations**:
1. **Subtle Pitch**: Small shift amounts for detune-like effects
2. **Dramatic Shift**: Larger amounts for more obvious pitch effects
3. **Rhythmic Shifting**: Sync morphing to tempo for rhythmic pitch changes

**Pitfalls + quick fixes**:
- Pitfall: Shift creates metallic or artificial artifacts
  - Fix: Reduce shift amounts and use more conservative settings
- Pitfall: Effect doesn't sound like pitch shifting
  - Fix: Understand that Shift is frequency shifting, not pitch shifting (harmonics don't maintain relationships)

### Use Case 12: Parallel Processing with Morphing
**Goal**: Use EQUO in a parallel processing chain with morphing capabilities

**Step-by-step setup inside FL Studio**:
1. Create a send track from your source
2. Insert EQUO on the send track
3. In Bank 1, create an aggressive EQ curve for parallel enhancement
4. In Bank 2, create a different aggressive curve for contrast
5. Set EQUO Mix to 100% (fully processed)
6. Control the amount of effect through the send level
7. Use the X/Y pad to morph between different parallel processing approaches
8. Blend the parallel signal back with the dry signal
9. Use automation to change the morphing during different sections
10. Fine-tune the send level to balance the parallel processing

**Recommended starting settings/ranges**:
- Banks 1-2: Aggressive curves for parallel processing
- Mix: 100% (since parallel processing controls the blend)
- Bandwidth: 45-65% for parallel processing transitions
- Send Level: 10-30% of original signal

**Why it works / what to listen for**:
- Parallel processing allows for aggressive processing without affecting the original
- Morphing between different aggressive curves creates dynamic enhancement
- Listen for enhanced elements that don't lose their original character
- The morphing adds movement to the parallel-processed signal

**Variations**:
1. **Subtle Parallel**: Gentle curves for transparent enhancement
2. **Aggressive Parallel**: Extreme curves for dramatic enhancement
3. **Rhythmic Parallel**: Sync morphing to rhythm for dynamic changes

**Pitfalls + quick fixes**:
- Pitfall: Parallel signal overwhelms the original mix
  - Fix: Reduce send level and/or use more conservative curves
- Pitfall: Morphing in parallel chain creates phase issues
  - Fix: Check phase alignment and consider using mono-compatible settings
```

---

## FILE: 03-Workflows\01_Workflow_Recipes.md

```markdown
# EQUO - Workflow Recipes

## 6-10 Recipes Combining EQUO with Other FL Studio Tools

### Recipe 1: EQUO + Fruity Convolver for Morphing Reverb Spaces
**Goal**: Create evolving reverb spaces that morph between different acoustic environments

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a track with interesting harmonic content (vocals, pads, or guitars)
2. Set EQUO to VOL mode with Banks 1-4 configured for different frequency responses:
   - Bank 1: Emphasize low-mids (200-500Hz) for room-like response
   - Bank 2: Emphasize highs (5-10kHz) for hall-like brightness
   - Bank 3: Emphasize lows (50-150Hz) for cavernous effect
   - Bank 4: Flat response for neutral baseline
3. Send EQUO output to a dedicated return track
4. Insert Fruity Convolver on the return track
5. Load a large hall impulse response
6. Set Convolver to 100% wet signal
7. Use the X/Y pad on EQUO to morph between different frequency responses
8. This changes which frequencies are sent to the reverb, creating morphing spatial characteristics
9. Add Fruity Limiter on the return track to control any level changes
10. Use automation to create evolving spatial morphs throughout the track

**Routing notes**:
- Use post-fader sends to maintain consistent reverb levels regardless of EQUO output
- The EQUO processes the dry signal before it's sent to the reverb
- This creates frequency-dependent reverb characteristics

**How to control it quickly**:
- Map the X/Y pad to a MIDI controller for real-time morphing
- Use automation clips for complex morphing patterns
- Create macro controls for quick access to different spatial characters

**Performance tips**:
- Use conservative EQUO settings to avoid extreme frequency changes
- Monitor the reverb return level to prevent overwhelming the mix
- Use high-pass filtering on the reverb return to prevent low-end buildup

### Recipe 2: EQUO + Fruity Peak Controller for Dynamic Filtering
**Goal**: Create dynamic filtering that responds to the input signal's level

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Peak Controller on a track before EQUO
2. Set Peak Controller to compress with a 2:1 ratio, fast attack, medium release
3. Insert EQUO after Peak Controller
4. Configure EQUO Banks 1-3 with different EQ curves:
   - Bank 1: Emphasize lows and highs (V-shaped curve)
   - Bank 2: Flat response
   - Bank 3: Emphasize mids (dip lows and highs)
5. Set X/Y pad to morph between these banks based on the Peak Controller's gain reduction
6. Use Peak Controller's output to modulate the X/Y position via automation modulation
7. Adjust the Peak Controller's curve to determine when different EQ curves are activated
8. Set EQUO Mix to 80-90% to maintain some original character
9. Add Fruity Parametric EQ 2 after for final tonal adjustment
10. Use Fruity Limiter at the end to control any level changes

**Routing notes**:
- Peak Controller affects the signal level which then influences the EQUO morphing
- The dynamic response comes from the Peak Controller's gain changes
- EQUO morphs based on the level changes from Peak Controller

**How to control it quickly**:
- Adjust Peak Controller's threshold to change the activation point
- Use Peak Controller's ratio to control the intensity of morphing
- Map Peak Controller's parameters to macros for easy adjustment

**Performance tips**:
- Use moderate compression settings to avoid over-processing
- Check for artifacts when the morphing occurs rapidly
- Use the Peak Controller's smooth response settings to prevent clicks

### Recipe 3: EQUO + Edison for Analysis-Based Enhancement
**Goal**: Use Edison to analyze a reference track and apply similar characteristics with EQUO

**Step-by-step setup inside FL Studio**:
1. Insert Edison on a reference track that has the tonal character you want to match
2. Use Edison's FFT analysis to identify key frequency characteristics
3. Insert EQUO on the target track
4. Create Banks in EQUO that emphasize similar frequency ranges as identified in Edison:
   - Bank 1: Based on the reference track's low-end characteristics
   - Bank 2: Based on the reference track's mid-range characteristics
   - Bank 3: Based on the reference track's high-end characteristics
5. Use Edison's spectrum analyzer while adjusting EQUO to match the reference
6. Set EQUO Mix to 70-80% to blend processed and original
7. Use the X/Y pad to morph between different "reference" characteristics
8. Compare the processed track with the reference using Edison's AB comparison
9. Fine-tune the EQUO curves to match the reference's spectral profile
10. Save the EQUO settings as a preset for future use

**Routing notes**:
- Use Edison's analysis to inform EQUO's curve shapes
- A/B compare using Edison to match tonal characteristics
- Use Edison's FFT display to visualize the changes

**How to control it quickly**:
- Use Edison's snapshot feature to save reference spectra
- Create EQUO presets that match different reference tracks
- Map EQUO's X/Y pad to a controller for real-time morphing between reference characteristics

**Performance tips**:
- Use Edison's smoothing settings to get clearer frequency analysis
- Compare the processed signal with the reference in both spectrum and time domains
- Use moderate EQUO settings to avoid over-processing

### Recipe 4: EQUO + Fruity Formula Controller for Complex Modulation
**Goal**: Create complex, mathematically-derived modulation patterns for EQUO morphing

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Formula Controller on a blank automation track
2. Create a formula that generates complex morphing patterns (e.g., sine waves with different frequencies)
3. Insert EQUO on the target track
4. Configure EQUO Banks 1-4 with dramatically different EQ curves:
   - Bank 1: Low-pass filter shape
   - Bank 2: High-pass filter shape
   - Bank 3: Band-pass filter shape
   - Bank 4: Notch filter shape
5. Use MIDI learn to map Formula Controller's output to EQUO's X and Y parameters
6. Set one formula output to control X axis, another to control Y axis
7. Adjust the formula parameters to create interesting morphing patterns
8. Use EQUO's Mix control at 85-95% for effective processing
9. Add Fruity Parametric EQ 2 after EQUO for final tonal adjustment
10. Use Fruity Limiter to control any level fluctuations

**Routing notes**:
- Formula Controller generates complex modulation patterns
- Map different formula outputs to X and Y axes for 2D morphing
- The mathematical patterns create evolving, non-repetitive morphing

**How to control it quickly**:
- Adjust formula parameters to change the morphing pattern
- Use different mathematical functions for different morphing behaviors
- Map formula variables to macros for real-time control

**Performance tips**:
- Start with simple formulas and gradually increase complexity
- Monitor for artifacts when using complex morphing patterns
- Use the formula's period settings to sync with musical timing if desired

### Recipe 5: EQUO + Patcher for Advanced Routing
**Goal**: Use Patcher to create complex routing with multiple EQUO instances for different frequency bands

**Step-by-step setup inside FL Studio**:
1. Insert Patcher on a track that needs complex frequency-dependent processing
2. Inside Patcher, create three routing paths using Fruity Formula Controller:
   - Low band: Frequencies below 200Hz
   - Mid band: Frequencies 200Hz-2kHz
   - High band: Frequencies above 2kHz
3. Insert a separate EQUO instance on each frequency band
4. Configure each EQUO instance with appropriate banks for its frequency range:
   - Low EQUO: Banks emphasizing different low-end characteristics
   - Mid EQUO: Banks emphasizing different mid-range characteristics
   - High EQUO: Banks emphasizing different high-end characteristics
5. Route the outputs of all three EQUOs back to Patcher's output
6. Use the X/Y pads on each EQUO independently for different morphing per band
7. Add Fruity Limiter at the end of Patcher to control overall level
8. Use Fruity Parametric EQ 2 after Patcher for final tonal balance
9. Adjust the crossover points in Formula Controller for smooth band separation
10. Fine-tune each EQUO's Mix setting for appropriate band blending

**Routing notes**:
- Use Patcher to split the signal into frequency bands
- Process each band with its own EQUO instance
- Recombine the bands after processing
- This allows for independent morphing per frequency range

**How to control it quickly**:
- Create macros in Patcher to control multiple EQUO instances simultaneously
- Map different controllers to different EQUO instances for per-band control
- Use Patcher's interface to adjust crossover points

**Performance tips**:
- Use gentle crossover slopes to avoid phase issues between bands
- Monitor the combined output for phase coherence
- Check for level imbalances between frequency bands

### Recipe 6: EQUO + Fruity Soft Clipper for Harmonic Enhancement
**Goal**: Use EQUO for dynamic EQ followed by soft clipping for harmonic enhancement

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a track that needs harmonic enhancement (bass, synths, or drums)
2. Configure EQUO Banks 1-3 with curves that emphasize different harmonic regions:
   - Bank 1: Emphasize fundamentals and first harmonics
   - Bank 2: Emphasize mid-range harmonics (2-5kHz)
   - Bank 3: Emphasize high harmonics (5-10kHz)
3. Insert Fruity Soft Clipper after EQUO
4. Set Soft Clipper to add subtle saturation (20-30% Drive)
5. Use the X/Y pad to morph between different harmonic emphasis approaches
6. Set EQUO Mix to 75-85% for effective processing with natural blend
7. Adjust Soft Clipper's output to match the input level
8. Add Fruity Parametric EQ 2 after for final harmonic balance
9. Use Fruity Limiter if the combination creates unwanted level changes
10. Fine-tune the balance between EQUO's EQ morphing and Soft Clipper's saturation

**Routing notes**:
- EQUO processes the EQ before harmonic enhancement
- Soft Clipper adds saturation to the already EQ'd signal
- This creates frequency-dependent harmonic enhancement

**How to control it quickly**:
- Map EQUO's X/Y pad and Soft Clipper's Drive to different controller axes
- Use automation to change both EQ morphing and saturation simultaneously
- Create presets that combine specific EQUO banks with appropriate clipper settings

**Performance tips**:
- Use conservative saturation settings to avoid harshness
- The combination of EQ morphing and saturation creates complex harmonic evolution
- Check for clipping when both EQUO and Soft Clipper are set to high values

### Recipe 7: EQUO + Fruity Fast Dist for Creative Distortion Morphing
**Goal**: Morph between different distortion characteristics using EQUO's frequency selection

**Step-by-step setup inside FL Studio**:
1. Insert Fruity Fast Dist on a track (set to moderate drive, 30-40%)
2. Insert EQUO after Fast Dist
3. Configure EQUO Banks 1-4 to emphasize different aspects of the distorted signal:
   - Bank 1: Emphasize low-end clarity in the distorted signal
   - Bank 2: Emphasize mid-range presence in the distorted signal
   - Bank 3: Emphasize high-end harmonics in the distorted signal
   - Bank 4: Create a "de-emphasized" version for cleaner sections
4. Set EQUO to VOL mode with Mix at 80-90%
5. Use the X/Y pad to morph between different frequency emphases in the distorted signal
6. Add Fruity Parametric EQ 2 after EQUO to fine-tune the distorted character
7. Insert Fruity Limiter to control any level changes from the morphing
8. Use automation to create evolving distortion characteristics
9. Adjust Fast Dist's drive based on which EQUO bank is most prominent
10. Save the combination as a preset for future use

**Routing notes**:
- Distortion comes first, then frequency morphing
- EQUO shapes the frequency content of the already-distorted signal
- This allows for morphing between different distorted tonal characters

**How to control it quickly**:
- Map EQUO's X/Y pad to a controller for real-time morphing of distortion character
- Use Fast Dist's Drive parameter as a macro to control overall intensity
- Create automation patterns that combine distortion drive changes with EQUO morphing

**Performance tips**:
- Be careful with extreme settings as distortion + EQ morphing can create harsh artifacts
- Use the Mix control to blend processed and unprocessed for smoother transitions
- Monitor for clipping when emphasizing already-distorted harmonics

### Recipe 8: EQUO + Fruity Balance for Stereo Enhancement
**Goal**: Use EQUO in PAN mode combined with Fruity Balance for dynamic stereo enhancement

**Step-by-step setup inside FL Studio**:
1. Insert EQUO on a stereo track
2. Set EQUO to PAN mode (this maps frequency to stereo position)
3. Configure Banks 1-3 with different stereo enhancement approaches:
   - Bank 1: Low frequencies center, highs wide (traditional approach)
   - Bank 2: Mid frequencies center, lows and highs wide (vocal-friendly)
   - Bank 3: All frequencies wide (maximum width)
4. Insert Fruity Balance after EQUO
5. Use Fruity Balance to adjust the overall stereo width and balance
6. Use the X/Y pad to morph between different stereo imaging approaches
7. Set EQUO Mix to 70-80% to maintain some original stereo character
8. Add Fruity Stereo Enhancer after if additional stereo processing is needed
9. Use Fruity Limiter to control any level changes from the stereo processing
10. Check mono compatibility regularly during the morphing process

**Routing notes**:
- EQUO in PAN mode maps frequency to stereo position
- Fruity Balance provides overall stereo control after frequency-based panning
- This creates dynamic stereo imaging that changes with frequency content

**How to control it quickly**:
- Map EQUO's X/Y pad for real-time stereo morphing
- Use Fruity Balance's controls for overall stereo adjustment
- Create automation for evolving stereo landscapes

**Performance tips**:
- Always check mono compatibility when using stereo enhancement
- Use conservative settings to avoid phase issues
- The PAN mode in EQUO creates frequency-dependent stereo positioning
```

---

## FILE: 03-Workflows\by-goal\creating-evolving-pads.md

```markdown
# Goal Workflow: Creating Evolving Pads (Spectral Motion)

*Goal: Adding non-linear, liquid movement to a static pad or texture.*

## 🎛️ Routing Context
- **Routing**: Pad Synth -> EQUO -> Deep Reverb (LuxeVerb).
- **Mix Status**: 100% Wet.

## 🚶 Step-by-Step Setup
1. **The Four States**:
   - **Bank 1**: Draw a "Low Pass" slope (Right-side cut).
   - **Bank 2**: Draw a "Band Pass" peak in the mids (Hump).
   - **Bank 3**: Draw a "Comb" pattern (Multiple thin spikes).
   - **Bank 4**: Draw a "High Pass" slope (Left-side cut).
2. **Master Control**: Switch the selector to **Master**.
3. **The Morph**: Automate the **Morph knob** to sweep from 0 to 100%.
   - *Logic*: As the knob moves, EQUO will interpolate between all four shapes in sequence.
4. **Resonance Focus**: Set the **BW (Bandwidth)** knob to 30%. This makes the "spikes" in Bank 3 more audible and "whistly."
5. **Slow Evolution**: Set the automation clip to a 16-bar length. 
6. **Result**: The pad will sound like it is slowly morphing its DNA, shifting from dark to nasal to airy.

## 🔄 Variations
- **The "Pulse"**: Set the automation to a sharp 1/8 note "saw" shape to create a rhythmic filter effect.
- **The "Vibe Shift"**: Use Bank 1 for "Verse EQ" and Bank 2 for "Chorus EQ," then automate the switch during the transition.

## ⚠️ Pitfalls & Fixes
- **Problem**: Transitions sound "clicky."
- **Fix**: Ensure the **Smooth** button is active at the bottom of the plugin.

```

---

## FILE: 03-Workflows\by-goal\creative-panning.md

```markdown
# Goal Workflow: Creative Panning (3D Presence)

*Goal: Transform a flat mono instrument into a wide, frequency-staggered stereo image.*

## 🎛️ Routing Context
- **Routing**: Instrument (Synth/Piano) -> Mixer Track -> EQUO.
- **Mix Status**: 100% Wet.

## 🚶 Step-by-Step Setup
1. **Mode Selection**: Click the **PAN** button on the UI.
2. **Bank Setup**: Select **Bank 1**.
3. **The Staircase**: Using the **Pencil** tool, draw a jagged pattern alternating between top (Right) and bottom (Left).
   - *Example*: 100Hz (Center), 500Hz (Left), 1kHz (Right), 3kHz (Left), 8kHz (Right).
4. **Smoothing**: Select the **Curve** tool and drag it across the tops of your pencil marks to soften the jumps.
5. **Morphing Movement**: Select **Bank 2**. Right-click the display and select **Flip Horizontally**.
6. **Automation**: Create an automation clip for the **Morph knob**. Set it to a slow 4-bar Sine LFO.
7. **Mono Check**: Switch your Master track to Mono. Ensure the tonal balance hasn't shifted drastically.

## 🔄 Variations
- **The "High-End Cloud"**: Only pan frequencies above 5kHz to create a wide "shimmer" while keeping the body centered.
- **The "808 Growl"**: Pan the low-mid frequencies (200Hz - 500Hz) hard to add "movement" to a distorted bass.

## ⚠️ Pitfalls & Fixes
- **Problem**: The sound feels "hollow" in the middle.
- **Fix**: Reduce the **Morph** range or lower the height of the drawings in the grid to bring frequencies closer to the center.

```

---

## FILE: 03-Workflows\by-goal\matching-eq-workflow.md

```markdown
# Goal Workflow: Matching EQ Workflow (Spectral Grafting)

*Goal: Correcting a dull recording by matching its frequency profile to a professional reference track.*

## 🎛️ Routing Context
- **Routing**: Target Track (Your Sound) -> Mixer Track with EQUO.
- **Reference**: Have a high-quality audio clip loaded into a separate mixer track.

## 🚶 Step-by-Step Setup
1. **Analyze Reference**:
   - Temporarily route your professional reference track into the mixer track containing EQUO.
   - Play the reference.
   - Click and hold the **Analyze** button in EQUO for 5-10 seconds.
   - *Result*: EQUO will draw a curve representing the "average" frequency balance of the reference.
2. **Freeze the Curve**: Once the drawing is stable, let go of the button.
3. **Switch to Target**: Route your professional reference back to its original track, and route your "Your Sound" back into the EQUO mixer track.
4. **Inverse Correction (The Secret)**:
   - Right-click the display and select **Invert**.
   - *Logic*: By inverting the reference curve, you are now cutting the frequencies where the reference was too loud and boosting where it was quiet.
5. **Transparency Check**: Set the **Mix** knob to 20-30%. You rarely want a 100% "matched" EQ as it can sound unnatural.
6. **Final Polish**: Adjust the **Shift** knob if the overall tone feels too bright or dark after the match.

## 🔄 Variations
- **The "Direct Match"**: Don't invert. Just use the analyzed curve to see which frequencies your sound is missing.
- **Drum Grafting**: Match your hi-hats to a "silky" reference to get that professional top-end air.

## ⚠️ Pitfalls & Fixes
- **Problem**: The matched sound is noisy.
- **Fix**: Matching EQ often boosts unwanted low-level noise. Use a **High Shelf** cut in EQUO to tame the noise floor after the analysis.

```

---

## FILE: 03-Workflows\by-instrument\bass.md

```markdown
# Instrument Workflow: 808 & Bass (Impact Control)

## 1. The "Mono Sub" Rule
- **Recipe**: Mode: **PAN**. Bank 1 -> All frequencies below 150Hz set to Center (Middle of grid).
- **Move**: Ensure this is the first state in your chain.
- **Vibe**: Guarantees that the sub-bass foundation stays perfectly mono, essential for club system impact.

## 2. Harmonic Growl
- **Recipe**: Mode: **VOL**. Bank 1 -> Boost 400Hz - 800Hz by 4dB.
- **Move**: Use the **Pencil** tool to draw narrow spikes.
- **Vibe**: Emphasizes the distortion "bark" of a saturated 808, helping it cut through on phone speakers.

## 3. Sidechain-Style Gating
- **Recipe**: Mode: **VOL**. Bank 1 -> Zero Gain (Flat). Bank 2 -> Cut all frequencies.
- **Move**: Automate **Morph** to "flick" to Bank 2 every time the kick hits.
- **Vibe**: A very precise, spectral sidechain effect that leaves no artifacts.

```

---

## FILE: 03-Workflows\by-instrument\drums.md

```markdown
# Instrument Workflow: Drums (The Pocket Maker)

## 1. The "Boxy" Snare Cure
- **Recipe**: Bank 1 -> Cut 400Hz - 600Hz by 6dB.
- **Move**: Use the **Curve** tool to create a smooth dip.
- **Vibe**: Removes the "cheap" or "hollow" plastic sound from acoustic snare samples.

## 2. Percussion Stereo Cloud
- **Recipe**: Mode: **PAN**. Bank 1 -> Jagged Pencil drawing.
- **Move**: Link **Shift** knob to a slow Sine LFO.
- **Vibe**: High-frequency shakers and hats will "swirl" across the stereo field, creating an immersive ear-candy texture.

## 3. High-Energy Build-up
- **Recipe**: Mode: **VOL**. Bank 1 -> Flat. Bank 2 -> High Pass at 1kHz.
- **Move**: Automate **Morph** from 0 to 100 over 8 bars.
- **Vibe**: The drums progressively thin out, making the bass impact of the "drop" feel much larger.

```

---

## FILE: 03-Workflows\by-instrument\vocals.md

```markdown
# Instrument Workflow: Vocals (Silky Presence)

## 1. R&B "Silky" Air
- **Recipe**: Bank 1 -> Boost 12kHz+ using **Line** tool.
- **Move**: Set **Mix** to 40% for transparency.
- **Vibe**: Adds a professional, expensive-sounding "sheen" to melodic rap vocals.

## 2. The "Radio" Ad-lib
- **Recipe**: Bank 1 -> Band Pass (Peaking) at 2.5kHz.
- **Move**: Set **BW** knob to 20% for a sharp, narrow focus.
- **Vibe**: Creates a focused "telephone" texture that separates background ad-libs from the main lead.

## 3. Formant Morphing (Robotic)
- **Recipe**: Bank 1 -> Peak at 1kHz. Bank 2 -> Peak at 3kHz.
- **Move**: Automate **Morph** at 1/2 note speeds.
- **Vibe**: Adds a subtle "talking" character to the vocal, popular in experimental hip-hop and electronic R&B.

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Hip-Hop & R&B)

Sourced applications of spectral shaping in modern production.

## 1. The "Toronto" Low-Pass (Moody)
- **Source**: 40 (Noah Shebib) / Drake style.
- **Application**: Using EQUO to muffle high frequencies during verses, then "Morphing" them back open for the hook.
- **Vibe**: Intimacy, closeness, and dark atmospheric weight.

## 2. Experimental Vocal Formants (Psychedelic)
- **Source**: Travis Scott / Mike Dean.
- **Application**: Using the **Shift** knob automated with a fast LFO on vocal ad-libs.
- **Vibe**: Robotic, shifting, and disorienting "talking" textures.

## 3. Silky R&B Air (Vibey)
- **Source**: Darkchild / Rodney Jerkins.
- **Application**: Boosting only the frequencies above 12kHz and panning them wide.
- **Vibe**: Modern luxury, high-budget sheen, and "expensive" vocal layers.

## 4. G-Funk / West Coast Filter Sweeps (Upbeat)
- **Source**: Dr. Dre / DJ Quik.
- **Application**: Using high resonance (Low BW) and sweeping the **Shift** knob on synth leads.
- **Vibe**: Chirpy, energetic, and rhythmic "talking" leads.

```

---

## FILE: 04-Reference\interpolation-algorithms.md

```markdown
# Technical Reference: Interpolation Algorithms

Understanding how EQUO handles transitions. [SRC: IL-MAN]

## 1. Linear Morphing
The **Morph** knob does not just "switch" between banks. It uses **Linear Interpolation** to calculate the state of every single band at every moment.
- *Calculation*: Result = (Bank A * (1 - Morph)) + (Bank B * Morph).
- *Result*: This allows for perfectly smooth, artifact-free transitions even with extreme automation.

## 2. Band Interaction (The BW Knob)
The **BW (Bandwidth)** knob determines how much the 16+ bands overlap.
- **Low BW**: Bands are isolated. This creates sharp, resonant peaks (Phaser/Talkbox sound).
- **High BW**: Bands overlap significantly. This creates smooth, natural EQ curves (Parametric-like sound).

## 3. CPU Efficiency
EQUO is highly optimized because it uses a **Fixed-Band Graphic Architecture**.
- Unlike Parametric EQ 2, which has to calculate complex filter slopes for every node move, EQUO simply adjusts the gain of pre-existing bands.
- **Advantage**: Excellent for live performance and low-latency projects.

## 4. Phase Shift
EQUO is an **IIR (Infinite Impulse Response)** filter bank.
- *Physics*: Every boost or cut creates a slight shift in the phase of the audio.
- *Verification*: To hear this, place EQUO on a sine wave and sweep the Shift knob. You will hear the volume change slightly as the phase interacts with the waveform cycles.

```

---

## FILE: 04-references\00_Source_Log.md

```markdown
# EQUO - Source Log

## Bibliography of Sources Used

### Title: Image-Line FL Studio Official Manual - EQUO
- **URL**: https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/EQUO.htm
- **Publisher/Author**: Image-Line
- **Date**: 2026 (estimated based on current version)
- **Why it's credible**: Official documentation from the plugin developer, contains authoritative information about features, parameters, and usage
- **What it was used for**: Understanding basic functionality, parameter descriptions, and official recommended practices

### Title: FL Studio EQUO Tutorials
- **URL**: https://www.image-line.com/support/flstudio_online_manual/html/plugins/EQUO_tutorials.htm
- **Publisher/Author**: Image-Line
- **Date**: 2026 (estimated based on current version)
- **Why it's credible**: Official tutorial content from the developer with step-by-step guidance
- **What it was used for**: Learning proper setup procedures and recommended workflows

### Title: EQUO Video Tutorials
- **URL**: https://www.youtube.com/results?search_query=fl+studio+equo+tutorial
- **Publisher/Author**: Various FL Studio educators and users
- **Date**: Various dates, focusing on recent content (2023-2026)
- **Why it's credible**: Practical examples from experienced users, though secondary to official documentation
- **What it was used for**: Understanding practical applications and creative uses

### Title: EQUO Subreddit Discussion
- **URL**: https://www.reddit.com/r/FL_Studio/search?q=equo&restrict_sr=1
- **Publisher/Author**: FL Studio user community
- **Date**: Various dates
- **Why it's credible**: Real-world usage insights from active practitioners
- **What it was used for**: Understanding common use cases, problems, and creative applications

### Title: EQUO User Forum Threads
- **URL**: https://forum.image-line.com/viewforum.php?f=193
- **Publisher/Author**: Image-Line user forums
- **Date**: Various dates
- **Why it's credible**: Direct user feedback and discussion moderated by the developer community
- **What it was used for**: Identifying common issues, advanced techniques, and user experiences

### Title: EQUO Preset Libraries
- **URL**: https://www.kvraudio.com/forum/viewforum.php?f=232
- **Publisher/Author**: KVR Audio forums
- **Date**: Various dates
- **Why it's credible**: Shared resources from experienced sound designers and producers
- **What it was used for**: Understanding common sound design approaches and parameter combinations

### Title: Graphic Equalizer Principles
- **URL**: https://en.wikipedia.org/wiki/Graphic_equalizer
- **Publisher/Author**: Wikipedia contributors
- **Date**: Regularly updated
- **Why it's credible**: General technical information about graphic equalizers
- **What it was used for**: Understanding the theoretical basis of EQUO's graphic EQ functionality

### Title: Morphing Audio Effects Theory
- **URL**: https://www.soundonsound.com/techniques/morphing-audio-effects
- **Publisher/Author**: Sound on Sound Magazine
- **Date**: Recent publication
- **Why it's credible**: Professional audio magazine with technical expertise
- **What it was used for**: Understanding the principles behind morphing effects and interpolation

### Title: Frequency-Based Panning Techniques
- **URL**: https://www.attackmagazine.com/technique/tutorials/frequency-based-panning/
- **Publisher/Author**: Attack Magazine
- **Date**: Recent publication
- **Why it's credible**: Specialized resource on frequency-based panning techniques
- **What it was used for**: Understanding how EQUO's PAN mode works and its applications

### Title: Send Effects Routing in DAWs
- **URL**: https://www.discogs.com/producer-guides/send-effects-routing
- **Publisher/Author**: Discogs Producer Guides
- **Date**: Recent publication
- **Why it's credible**: Comprehensive resource on send effects routing
- **What it was used for**: Understanding how EQUO's SEND mode functions and integrates with FL Studio's routing

### Title: Physical Modeling in Audio Synthesis
- **URL**: https://ccrma.stanford.edu/~jos/pasp/
- **Publisher/Author**: Stanford CCRMA
- **Date**: Ongoing
- **Why it's credible**: Authoritative academic resource on physical modeling techniques
- **What it was used for**: Understanding the theoretical basis of EQUO's morphing algorithms

### Title: Digital Signal Processing for Audio Effects
- **URL**: https://www.dsprelated.com/freebooks/pasp/
- **Publisher/Author**: Julius O. Smith III
- **Date**: Ongoing
- **Why it's credible**: Academic resource on DSP techniques for audio effects
- **What it was used for**: Understanding the implementation of morphing algorithms

### Title: Interpolation Algorithms in Audio Processing
- **URL**: https://www.aes.org/e-lib/browse.cfm?elib=19842
- **Publisher/Author**: Audio Engineering Society
- **Date**: Recent publication
- **Why it's credible**: Professional audio engineering research
- **What it was used for**: Understanding the interpolation methods used in EQUO's morphing

### Title: Creative Applications of Graphic EQs
- **URL**: https://www.musictech.net/guides/creative-applications-of-graphic-eqs/
- **Publisher/Author**: MusicTech Magazine
- **Date**: Recent publication
- **Why it's credible**: Professional music technology resource
- **What it was used for**: Understanding creative uses of graphic equalizers like EQUO

### Title: Frequency-Dependent Effects Processing
- **URL**: https://www.producerhive.com/blog/frequency-dependent-effects-processing
- **Publisher/Author**: Producer Hive
- **Date**: Recent publication
- **Why it's credible**: Educational resource for music producers
- **What it was used for**: Understanding how frequency-dependent processing works in EQUO's different modes

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
# EQUO - Official Links

## Official Manual Link(s)
- [Image-Line FL Studio Online Manual - EQUO](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/EQUO.htm)

## Official Image-Line Knowledge-Base Links
- [EQUO Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/EQUO_tutorials.htm)
- [FL Studio Community Forum - EQUO Section](https://forum.image-line.com/viewforum.php?f=193)

## Relevant Release Notes Links (if they impact behavior)
- [FL Studio 21 Release Notes - Effects Updates](https://www.image-line.com/fl-studio-history/)
  - Note: Specific release notes for EQUO improvements are typically included in the general FL Studio release notes
  - Look for mentions of graphic EQ improvements, morphing algorithm updates, or performance enhancements

## Gold Standard Community References
- [KVR Audio EQUO Forum Thread](https://www.kvraudio.com/forum/viewforum.php?f=232)
- [Reddit FL Studio Community - EQUO Discussions](https://www.reddit.com/r/FL_Studio/search?q=equo&restrict_sr=1)
- [YouTube - Official FL Studio Channel - EQUO Tutorials](https://www.youtube.com/results?search_query=fl+studio+equo+tutorial)

## Additional Official Resources
- [Image-Line Support Page for FL Studio](https://support.image-line.com/)
- [FL Studio Manual Index](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/index.htm)
- [Image-Line Learning Center](https://www.image-line.com/fl-studio-learning/)
```

---

