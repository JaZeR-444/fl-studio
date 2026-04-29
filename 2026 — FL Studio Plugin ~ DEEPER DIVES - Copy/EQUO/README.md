# EQUO - Morphing Graphic Equalizer

```
███████╗ ██████╗ ██╗   ██╗ ██████╗ 
██╔════╝██╔═══██╗██║   ██║██╔═══██╗
█████╗  ██║   ██║██║   ██║██║   ██║
██╔══╝  ██║   ██║██║   ██║██║   ██║
███████╗╚██████╔╝╚██████╔╝╚██████╔╝
╚══════╝ ╚═════╝  ╚═════╝  ╚═════╝ 
```

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
  ```json
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
  ```

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

```
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
```

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