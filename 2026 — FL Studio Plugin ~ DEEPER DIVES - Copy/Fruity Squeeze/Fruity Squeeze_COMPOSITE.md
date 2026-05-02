# Fruity Squeeze - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Squeeze - Bit-Crusher & Puncher

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ███████╗ ██████╗ ██╗   ██╗███████╗███████╗███████╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔════╝██╔═══██╗██║   ██║██╔════╝██╔════╝██╔════╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ███████╗██║   ██║██║   ██║█████╗  █████╗  █████╗  
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ╚════██║██║ ▄ ██║██║   ██║██╔══╝  ██╔══╝  ██╔══╝  
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ███████║╚██████╔╝╚██████╔╝███████╗███████╗███████╗
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝
`\`\`

**Plugin Type:** Bit-Crusher / Lo-Fi Distortion
**Category:** Effect / Distortion
**Official Manual:** [Image-Line Fruity Squeeze Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Squeeze.htm)

---

## 🎯 What is Fruity Squeeze?

Fruity Squeeze is a unique bit-reducing distortion plugin. It specializes in "squeezing" audio by reducing its bit-depth (Squarize) and applying a specialized sample-based distortion called the "Puncher." It can turn a clean drum loop into a crunchy, 8-bit, broken-radio texture. It is the go-to plugin for Lo-Fi aesthetics, industrial sound design, and "glitching" percussion.

**Key Capabilities:**
- **Squarize:** Reduces bit-depth for digital grit and "stepped" artifacts.
- **Puncher Section:** Replaces original samples with distorted nominal-level versions.
- **Preserve/Impact:** Controls the ratio of clean vs processed samples.
- **Multimode Filter:** Built-in resonant filter (LP/HP) that can be placed Pre or Post distortion.
- **Mix & Gain:** Standard dry/wet and volume re-leveling.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **what-is-a-puncher.md** (Unique concept!)
3. Create **parameter-cheat-sheet.md**
4. Put it on a Drum Loop and slowly turn the "Squarize" knob.

### For Lo-Fi Producers:
1. Study **8-bit-drum-processing.md**
2. Review **broken-transistor-textures.md**
3. Learn **lo-fi-vocal-dist.md**

### For Sound Designers:
1. Study **glitch-percussion-loops.md**
2. Review **pre-vs-post-filtering.md** (Critical for tone)

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Squarize:** Bit depth reduction.
  - **Preserve:** Samples to keep.
  - **Impact:** Samples to distort.
  - **Relation:** Ratio between them.
  - **Filter:** Freq and Res knobs.

- [ ] **puncher-mechanics.md**
  - Explaining the "Relation" knob.
  - How Squeeze differs from standard clipping.

#### 02-Data/parameters/
- [ ] **squeeze-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Squeeze",
    "category": "Lo-Fi",
    "parameters": [
      {
        "name": "Squarize",
        "type": "knob",
        "description": "Bit depth reduction amount",
        "use_cases": ["8-bit sounds", "digital crunch"]
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **crunchy-drum-bus.md**
  - Low Squarize (~10%).
  - Preserve at 50%.
  - Filter set to Post-LP to cut harsh highs.
  - Mix at 30% for parallel body.

- [ ] **total-sound-destruction.md**
  - Max Squarize.
  - Max Amount.
  - Using the "Broken Transistor" settings.

- [ ] **vocal-radio-fx.md**
  - Using high Resonance on the built-in filter.
  - Adding subtle Puncher impact for "static" hiss.

#### 03-Workflows/by-context/
- [ ] **industrial-bass-grit.md**
- [ ] **video-game-sfx-design.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **aliasing-as-art.md**
  - Why digital artifacts in Squeeze are desirable for specific genres.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** The Crunch

**Tasks:**
1. Load a simple Kick drum
2. Increase Squarize
3. Observe the "stepping" in the waveform (if viewing via Edison)
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does "Preserve" affect the transients? (Usually keeps them punchy if high).
- What happens when I switch the filter to "Pre"? (The distortion reacts to the filtered signal).

### Phase 2: The Puncher (Week 2)
**Goal:** Texture

**Tasks:**
1. Use a sustained synth pad
2. Play with the "Impact" and "Relation" knobs
3. Create puncher-mechanics.md

**Key Questions to Answer:**
- Is the Puncher a form of sample-rate reduction? (Conceptually related, but different implementation).

---

## 📊 Plugin Specifications to Document

### Engine
- Bit-reduction range
- Filter types

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it getting so quiet? (Check the Mix slider and Gain).
2. How do I stop the "whistling" sound? (Lower the Filter Resonance).

---

## 📝 Documentation Standards

### For Each Workflow:
- **Squarize:** %
- **Impact/Preserve:** Ratio
- **Filter Position:** Pre/Post

---

## 🔗 Cross-Reference with Other Plugins

Fruity Squeeze is often used with:
- **Distructor** (Layering different distortion types)
- **Fruity Parametric EQ 2** (Surgical cleanup after the squeeze)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Squeeze/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── puncher-mechanics.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── squeeze-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── crunchy-drum-bus.md
│   │   └── vocal-radio-fx.md
│
└── 04-Reference/
    └── aliasing-as-art.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Squeeze Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Squeeze.htm)
- [Fruity Squeeze Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Squeeze_tutorials.htm)
- [Fruity Squeeze Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+squeeze+tutorial)

### Community Resources
- [Fruity Squeeze Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+squeeze&restrict_sr=1)
- [Fruity Squeeze User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Squeeze Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Bit Reduction and Sample Rate Reduction" - Understanding digital degradation
- "Lo-Fi Sound Design" - Creating vintage and degraded audio effects
- "Digital Artifacts as Musical Elements" - Using aliasing creatively

### Advanced Techniques
- **Puncher Mechanics:** Understanding the unique Puncher algorithm
- **Squarize Control:** Mastering bit depth reduction
- **Filter Integration:** Using the internal filter effectively

---

## 📚 In-Depth Technical Analysis

### Bit Reduction Algorithm
Fruity Squeeze implements sophisticated bit reduction:
- **Quantization Process:** Reduces the bit depth of the audio signal
- **Stepped Artifacts:** Creates the characteristic "stepped" digital sound
- **Resolution Control:** Allows for variable bit depth reduction
- **Harmonic Generation:** Creates additional harmonics through quantization
- **Aliasing Characteristics:** Generates aliasing artifacts that can be musically useful

### Puncher Technology
The Puncher section is a unique feature of Fruity Squeeze:
- **Sample Replacement:** Replaces original samples with distorted versions
- **Nominal-Level Processing:** Works with the signal's amplitude characteristics
- **Relation Control:** Determines the ratio between clean and processed samples
- **Impact vs Preserve:** Controls the amount of clean vs processed samples
- **Dynamic Response:** Reacts to the input signal's characteristics

### Signal Processing Chain
The internal architecture follows this order:
- **Input Stage:** Signal level monitoring and adjustment
- **Filter Section:** Pre-distortion filtering (if set to Pre)
- **Squarize Processing:** Bit depth reduction
- **Puncher Section:** Sample replacement and distortion
- **Filter Section:** Post-distortion filtering (if set to Post)
- **Mix Control:** Dry/wet balance adjustment
- **Output Stage:** Final level adjustment and monitoring

### Squarize vs Puncher Relationship
The two main processing sections work together:
- **Squarize:** Reduces bit depth for digital grit
- **Puncher:** Replaces samples with distorted versions
- **Preserve:** Controls the amount of original signal maintained
- **Impact:** Controls the amount of processed signal added
- **Relation:** Sets the ratio between Preserve and Impact

### Filter Integration
The internal filter can be positioned in different places:
- **Pre-Position:** Filters before distortion for tone shaping
- **Post-Position:** Filters after distortion for cleanup
- **Frequency Control:** Adjusts the cutoff frequency
- **Resonance Control:** Emphasizes frequencies at the cutoff point
- **Filter Type:** Low-pass or high-pass filtering options

## 🎛️ Parameter Deep Dive

### Squarize Control
- **Function:** Bit depth reduction amount
  - Range: 0-100% (typically)
  - Effect: Reduces the resolution of the audio signal
  - Use for: Creating digital degradation and 8-bit effects
  - Pro tip: Higher values create more digital artifacts
- **Behavior:**
  - 0%: No bit reduction, clean signal
  - Low values: Subtle bit reduction effect
  - Medium values: Noticeable digital degradation
  - High values: Extreme 8-bit style effects
  - Pro tip: Start low and increase gradually to avoid harshness
- **Applications:**
  - 8-bit sounds: High values for vintage game sounds
  - Subtle degradation: Low values for character addition
  - Industrial textures: Medium to high values for harsh effects
  - Creative effects: Extreme values for unique textures
  - Pro tip: Use with filtering to tame harshness

### Preserve Control
- **Function:** Amount of original signal to maintain
  - Range: 0-100% (typically)
  - Effect: Controls how much of the original signal remains
  - Use for: Maintaining clarity and transients
  - Pro tip: Higher values preserve more of the original sound
- **Behavior:**
  - 0%: No original signal preserved
  - High values: Mostly original signal with some processing
  - Pro tip: Use for maintaining punch while adding character
- **Applications:**
  - Transient preservation: High values to keep attack
  - Subtle processing: High values with low Impact
  - Mix control: Balance between original and processed
  - Character addition: Moderate values for enhancement
  - Pro tip: Use with Impact for controlled degradation

### Impact Control
- **Function:** Amount of processed signal to add
  - Range: 0-100% (typically)
  - Effect: Controls how much of the distorted signal is added
  - Use for: Adding character and degradation
  - Pro tip: Higher values add more processed content
- **Behavior:**
  - 0%: No processed signal added
  - High values: Mostly processed signal
  - Pro tip: Use with Preserve to balance original and processed
- **Applications:**
  - Character addition: Low to medium values for subtle enhancement
  - Aggressive processing: High values for extreme effects
  - Texture creation: Variable values for different textures
  - Creative effects: Maximum values for unique sounds
  - Pro tip: Use with filtering to tame harshness

### Relation Control
- **Function:** Ratio between Preserve and Impact
  - Range: Variable ratio control
  - Effect: Sets the relationship between clean and processed signals
  - Use for: Controlling the balance between original and processed
  - Pro tip: Adjusts the character of the processing
- **Behavior:**
  - Low values: More Preserve relative to Impact
  - High values: More Impact relative to Preserve
  - Pro tip: Use for fine-tuning the processing character
- **Applications:**
  - Subtle enhancement: Low values for more original content
  - Balanced processing: Medium values for equal balance
  - Aggressive effects: High values for more processed content
  - Creative balance: Variable values for unique effects
  - Pro tip: Use for precise control over processing ratio

### Filter Controls
- **Frequency:** Cutoff frequency control
  - Range: 20Hz to 20kHz (typically)
  - Effect: Sets the filter boundary
  - Use for: Frequency selection and tone shaping
  - Pro tip: Use to tame harsh digital artifacts
- **Resonance:** Emphasis at cutoff frequency
  - Range: 0-100% (typically)
  - Effect: Creates peak at cutoff frequency
  - Use for: Adding character and emphasis
  - Pro tip: High values can cause self-oscillation
- **Position:** Pre vs Post distortion placement
  - Pre: Filters before distortion for tone shaping
  - Post: Filters after distortion for cleanup
  - Effect: Changes how filtering affects the processed signal
  - Pro tip: Use Post for taming harshness, Pre for tone shaping

### Mix and Output Controls
- **Mix:** Dry/wet balance control
  - Range: 0% (dry) to 100% (wet)
  - Effect: Balances original and processed signals
  - Use for: Parallel processing and transparency
  - Pro tip: Essential for maintaining dynamics
- **Gain:** Output level compensation
  - Range: Positive and negative values
  - Effect: Adjusts final output level
  - Use for: Compensating for level changes
  - Pro tip: Use to match processed and unprocessed levels

## 🎼 Sound Design Applications

### Lo-Fi Applications
Using Fruity Squeeze for vintage and degraded sounds:

**8-Bit Sound Creation:**
- High Squarize for digital degradation
- Balanced Preserve/Impact for character
- Post-filtering to tame harshness
- Creates authentic vintage game sounds
- Essential for chiptune and retro music

**Vinyl Simulation:**
- Low Squarize for subtle degradation
- High Preserve for original character
- Low Impact for gentle processing
- Creates warm, analog-like degradation
- Perfect for lo-fi and nostalgic music

**Radio Simulation:**
- Medium Squarize for frequency restriction
- Low Preserve for processed character
- High Impact for degradation
- Creates vintage radio sound
- Essential for lo-fi hip-hop and nostalgic music

### Creative Distortion
Using Squeeze for experimental applications:

**Industrial Textures:**
- High Squarize for digital artifacts
- High Impact for processed content
- Low Preserve for aggressive processing
- Creates harsh, industrial sounds
- Perfect for experimental and industrial music

**Glitch Effects:**
- High Squarize for stepped artifacts
- Variable Preserve/Impact for texture
- Creates digital glitch effects
- Perfect for electronic and IDM music
- Essential for glitch and breakcore sounds

**Vocal Processing:**
- Low to medium Squarize for character
- High Preserve for clarity
- Low Impact for subtle processing
- Creates robotic and vintage vocal effects
- Perfect for experimental and electronic vocals

### Mix Enhancement
Using Squeeze for mixing applications:

**Drum Enhancement:**
- Low Squarize for subtle character
- High Preserve for punch retention
- Low Impact for gentle processing
- Adds grit and character to drums
- Essential for electronic and hip-hop music

**Bass Processing:**
- Low Squarize for subtle enhancement
- High Preserve for fundamental retention
- Low Impact for controlled processing
- Adds character without losing low-end
- Perfect for bass enhancement in electronic music

**Texture Addition:**
- Medium Squarize for character
- Balanced Preserve/Impact for texture
- Adds complexity to simple sounds
- Essential for ambient and experimental music
- Perfect for evolving textures

## 🧪 Experimental Techniques

### Advanced Bit Reduction Applications
Creative uses of Squeeze's bit reduction capabilities:

**Progressive Degradation:**
- Automate Squarize for evolving degradation
- Create gradual transition from clean to dirty
- Perfect for build-ups and breakdowns
- Essential for evolving textures
- Useful for creative sound design

**Selective Degradation:**
- Use with EQ to target specific frequency ranges
- Apply bit reduction to specific bands only
- Maintain clarity in some ranges
- Perfect for surgical degradation
- Essential for controlled lo-fi effects

**Rhythmic Degradation:**
- Use with LFO to modulate Squarize
- Create rhythmic digital artifacts
- Perfect for electronic music
- Essential for rhythmic glitch effects
- Useful for creative rhythmic elements

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- Automate Preserve/Impact for dynamic processing
- Use envelope followers for responsive control
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
- Combine with other degradation units
- Create complex processing chains
- Perfect for advanced sound design
- Use for sophisticated processing

## 🎚️ Workflow Optimization

### Lo-Fi Enhancement Workflows
Efficient approaches to using Fruity Squeeze for lo-fi effects:

**8-Bit Creation:**
- High Squarize for digital degradation
- Balanced Preserve/Impact for character
- Post-filtering to tame harshness
- Essential for chiptune and retro music
- Pro tip: Use with filtering to prevent harshness

**Vintage Simulation:**
- Low to medium Squarize for subtle degradation
- High Preserve for original character
- Low Impact for gentle processing
- Creates nostalgic effects
- Pro tip: Use for lo-fi and nostalgic music

**Character Addition:**
- Medium Squarize for character
- Variable Preserve/Impact for balance
- Adds grit and texture to sounds
- Essential for creative enhancement
- Pro tip: Use with parallel processing for dynamics

### Integration Workflows
Working with other plugins and tools:

**Effects Integration:**
- Use before reverb for spatial degradation
- Combine with delay for rhythmic effects
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
- **8-Bit Leads:** Creating retro synth sounds
- **Glitch Effects:** Adding digital artifacts and texture
- **Rhythmic Processing:** Creating rhythmic degradation patterns
- **Energy Management:** Using degradation for track energy
- **Build-up Effects:** Creating tension with progressive degradation

### Hip-Hop and R&B
- **Lo-Fi Vocals:** Adding character to vocal recordings
- **Vintage Sound:** Creating nostalgic, retro sounds
- **Sample Processing:** Adding character to samples
- **Mix Enhancement:** Using degradation for mix character
- **Creative Effects:** Adding unique character to elements

### Rock and Metal
- **Guitar Distortion:** Adding digital grit to guitar sounds
- **Bass Enhancement:** Adding character to bass lines
- **Drum Processing:** Adding character to drums
- **Mix Enhancement:** Using degradation for mix character
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Degradation:** Creating evolving textures
- **Vintage Processing:** Adding nostalgic character
- **Experimental Degradation:** Pushing boundaries of degradation
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Squeeze works well with various effects:
- **Reverb:** Adding space to degraded sounds
- **Delay:** Creating rhythmic patterns with degradation
- **Chorus:** Adding width to degraded sounds
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of degraded signals

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
Fruity Squeeze was developed as a specialized bit reduction and degradation tool:
- Created to provide authentic lo-fi and 8-bit effects
- Designed for creative degradation applications
- Developed with sound design and electronic music in mind
- Intended to complement other distortion plugins with unique character

### Evolution Through FL Studio Versions
- Initially introduced with basic bit reduction capabilities
- Enhanced with the Puncher algorithm
- Improved with better sound quality and stability
- Expanded with more sophisticated degradation algorithms

### Impact on Music Production
Fruity Squeeze has influenced music production by:
- Providing accessible lo-fi effects
- Enabling creative degradation techniques
- Facilitating retro sound design
- Supporting various musical genres with flexible degradation

## 🧠 Advanced Processing Techniques

### Bit Reduction Mastery
Advanced techniques for bit reduction:
- **Resolution Control:** Understanding different bit depth effects
- **Aliasing Management:** Controlling digital artifacts
- **Harmonic Generation:** Managing additional harmonics
- **Dynamic Preservation:** Maintaining dynamics during degradation
- **Tonal Shaping:** Combining with filtering for tone control

### Puncher Algorithm Mastery
Advanced techniques for the Puncher:
- **Sample Replacement:** Understanding the sample replacement process
- **Dynamic Response:** Creating responsive processing
- **Ratio Control:** Managing Preserve/Impact relationships
- **Relation Optimization:** Finding optimal ratio settings
- **Character Development:** Creating specific processing characters

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique degraded textures
- **Atmospheric Processing:** Building ambient degraded effects
- **Rhythmic Effects:** Creating rhythmic degradation patterns
- **Spatial Manipulation:** Creating immersive degraded environments
- **Experimental Processing:** Pushing boundaries of degradation

## 📊 Performance Considerations

### CPU Usage
Managing Squeeze's impact on system performance:
- **Low CPU Load:** Generally efficient processing
- **Real-Time Performance:** Optimized for live performance
- **Instance Count:** Multiple instances have minimal impact
- **Parameter Automation:** Automated parameters have minimal CPU impact
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Aliasing Control:** Managing digital artifacts
- **Phase Response:** Maintaining phase relationships
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output
- **Signal Integrity:** Preserving original signal quality

### System Integration
Optimizing Squeeze within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimal audio latency

## 🛠️ Troubleshooting Common Issues

### Degradation Problems
- **Harsh Sound:** Reduce Squarize or adjust filtering
- **Loss of Clarity:** Increase Preserve or adjust filtering
- **Phase Issues:** Check stereo field and width settings
- **Excessive Artifacts:** Reduce Squarize or use filtering
- **Muddy Low End:** Adjust filtering or reduce low-end processing

### Technical Issues
- **High CPU Usage:** Check for other plugins in the chain
- **Latency Issues:** Optimize buffer settings
- **Clipping:** Reduce input gain or increase output headroom
- **Artifacts:** Check sample rate and bit depth settings
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Try different Preserve/Impact ratios
- **Lack of Character:** Increase Squarize or adjust ratio
- **Poor Integration:** Use EQ or reduce amount to blend
- **Overpowering:** Reduce Squarize or use EQ to balance
- **Lack of Control:** Automate parameters for dynamic changes

## 🎚️ Advanced Configuration

### Custom Presets
Creating and managing custom configurations:
- **Lo-Fi Presets:** Optimized for lo-fi applications
- **8-Bit Presets:** Configured for retro gaming sounds
- **Creative Presets:** Set up for sound design applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple Squeeze instances effectively:
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
- **FL Studio Forums:** Discussions about Squeeze techniques
- **Reddit Groups:** Sharing degradation techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced degradation techniques
- **Written Guides:** In-depth articles on bit reduction and lo-fi effects
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting Squeeze configurations
- **Technique Sharing:** Platforms for sharing processing methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Transform a modern synth into an authentic Nintendo-style 8-bit instrument
- [ ] Explain the difference between "Squarize" (bit reduction) and "Impact" (processed signal amount)
- [ ] Use the internal filter to tame harsh digital aliasing artifacts
- [ ] Create a progressive degradation effect using automation
- [ ] Set up a vintage radio simulation effect
- [ ] Apply subtle lo-fi character to vocals without losing clarity
- [ ] Use the Puncher algorithm for creative sample replacement
- [ ] Troubleshoot harshness and artifact issues effectively
- [ ] Integrate Squeeze into efficient mixing workflows
- [ ] Create industrial textures using extreme settings

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# Fruity Squeeze - What It Is And When To Use

## 60-Second Mental Model

Fruity Squeeze is FL Studio's **lo-fi bit-crusher and transient puncher**. Think of it as a "sample reducer" that intentionally degrades audio for creative effect. It combines two distinct distortion engines: **Squarize** (reduces bit depth → 8-bit/retro digital crunch) and **Puncher** (replaces samples with distorted versions → controlled transient destruction). Use it to add lo-fi character, create glitchy textures, or punch drums harder without traditional compression. [SRC: IL-MAN]

**Core Identity:**
- **Lo-fi degradation tool** (intentional quality reduction)
- **Dual-mode distortion** (bit reduction + sample replacement)
- **Creative FX**, not mastering processor

## Purpose & FL Studio Role

### What It Does
1. **Squarize (Bit Reduction)**: Reduces bit depth from 24-bit → 8-bit/4-bit/1-bit (stepped "quantization" artifacts)
2. **Puncher Section**: Replaces audio samples with distorted nominal-level versions (transient enhancement/destruction)
3. **Preserve/Impact/Relation**: Controls ratio of clean vs. crushed samples
4. **Built-in Filter**: Pre or Post distortion filtering (LP/HP with resonance)
5. **Mix/Gain Controls**: Dry/wet blend + output level compensation

### What It Is NOT
- **Not a clean compressor** (use Fruity Compressor for transparent dynamics)
- **Not a mastering limiter** (use Fruity Limiter for transparent loudness)
- **Not subtle** (Squeeze is intentionally aggressive/lo-fi)
- **Not a clipper** (use Fruity Soft Clipper for waveform clipping)

## When To Use Fruity Squeeze

### Primary Use Cases (High Confidence)
✅ **Lo-Fi 8-Bit Textures**
- Drum loops → crunchy, retro video game sound
- Vocals → phone/radio/broken speaker effect
- Synths → chip-tune/Game Boy aesthetic

✅ **Transient Punching (Puncher Mode)**
- Kick drums → harder attack without compression
- Snares → sharper crack
- Hi-hats → more bite

✅ **Glitch/Psychedelic FX**
- Extreme Squarize → stepped, robotic artifacts
- Automate Squarize → "bit-depth dive" effect (like tape stop but digital)
- Randomize Preserve/Impact → glitchy stutters

✅ **Parallel Lo-Fi Layer**
- Send drums to Squeeze on parallel bus
- Blend crushed layer (30-40%) with clean (70-60%)
- Result: Punch + character without full degradation

✅ **Industrial/Harsh Sound Design**
- Combine Squarize + Puncher + Pre-Filter
- Max settings → destroyed, distorted textures
- Use on pads, bass, vocals for experimental genres

### When NOT To Use
❌ **Transparent Dynamics Control**: Use Fruity Compressor (Squeeze adds obvious artifacts)
❌ **Mastering Chain**: Use Fruity Limiter or Maximus (Squeeze is too colored)
❌ **Subtle Warmth**: Use Fruity Fast Dist or saturation (Squeeze is aggressive)
❌ **Bass Preservation**: Squeeze can destroy sub-bass punch (use with caution <100Hz)

## Hip-Hop/R&B/Pop-Hip-Hop Context

### Where It Fits in the Modern Workflow
**Lo-Fi Hip-Hop (Boom-Bap Revival):**
- Drum breaks → Squarize 30-50% (8-bit crunch, vintage sampler vibe)
- Vocal samples → Squarize 20-30% + LP filter (phone call effect)
- Bass → AVOID (destroys low-end punch)

**Trap/Drill:**
- Hi-hats → Puncher mode (sharper transients, cut through mix)
- 808s → AVOID (Squeeze destroys sub-bass weight)
- Snares → Puncher mode 20-40% parallel (add crack)

**R&B/Pop-Hip-Hop:**
- Vocal FX layer → Squarize 40-60% (robotic doubled vocal)
- Texture pads → Squarize 10-20% (subtle digital character)
- Drum bus (parallel) → Puncher 30% blend (add grit)

**Experimental/Psychedelic:**
- Everything → Extreme Squarize + automation (intentional destruction)
- Glitch drums → Randomized Preserve/Impact (stutter effect)
- Bass → Low-pass + moderate Squarize (controlled distortion)

### Producer vs. Engineer Mindset
| **Producer Mindset** | **Engineer Mindset** |
|---|---|
| "Does this add vibe?" | "Is this destroying the mix?" |
| Use Squeeze creatively (FX) | Use Squeeze cautiously (can ruin dynamics) |
| Automate for movement | Static settings for consistency |
| Parallel processing (blend) | Insert processing (all or nothing) |

**Key Insight**: Squeeze is a **character tool**, not a mixing tool. Add it for vibe, not to "fix" something. If your drums lack punch, use compression first, Squeeze second (for color).  
[SRC: HIPHOP, Mixing Best Practices]

## Typical Roles in a Session

### 1. Insert FX (Lo-Fi Character)
- **Insert on drum loop channel** (after EQ, before reverb)
- **Squarize 20-40%** (8-bit crunch)
- **Filter Post, LP 3-5kHz** (remove harsh digital artifacts)
- **Mix 60-80%** (blend with clean signal)

### 2. Parallel Bus (Drum Punch)
- **Send drums to separate mixer track** (via Fruity Send or mixer routing)
- **Fruity Squeeze on parallel track** (Puncher mode)
- **Impact 50-70%** (transient enhancement)
- **Blend parallel track at -12 dB** (subtle punch layer)

### 3. FX Send (Glitch Automation)
- **Create FX return track** with Squeeze
- **Send vocal/drum hits** to FX track (via send knob)
- **Automate Squarize 0% → 100%** (bit-depth dive effect)
- **Use sparingly** (transitions, fills, drops)

### 4. Sound Design Layer
- **Load on synth pad/texture** (insert)
- **Squarize 40-60%** (intentional degradation)
- **Pre-Filter HP 200Hz** (preserve low-end weight)
- **Result**: Broken radio/cassette tape aesthetic

## Common Misconceptions

### "Squeeze Makes Things Louder"
**PARTIALLY TRUE**. The **Puncher** section can increase perceived loudness by enhancing transients, but this often comes with distortion. True loudness increase requires limiting (Fruity Limiter). Squeeze adds *punch*, not clean *volume*.  
[SRC: IL-MAN]

### "Squarize and Puncher Are the Same Thing"
**FALSE**.  
- **Squarize**: Reduces bit depth (digital quantization artifacts, 8-bit crunch)
- **Puncher**: Replaces samples with distorted versions (transient enhancement/destruction)

They can be used together or separately. Many users never touch Puncher and only use Squarize for lo-fi vibes.  
[SRC: IL-MAN]

### "Squeeze Is Safe on Bass/Kicks"
**FALSE**. Squeeze can destroy low-end punch by adding phase distortion and reducing dynamic range. Use **very cautiously** on bass/kicks. If used, apply:
- Low Squarize (10-20% max)
- Pre-Filter HP to protect sub-bass
- Parallel processing (blend, don't replace)

[SRC: Mixing Best Practices]

### "More Squarize = Better Lo-Fi"
**FALSE**. Extreme Squarize (>70%) creates **unusable artifacts** (aliasing, stepping). Sweet spot for musical lo-fi: **30-50% Squarize**. Higher values = experimental/glitch only.  
[SRC: HIPHOP, Lo-Fi Production]

## Quick Decision Matrix

**Load Fruity Squeeze when:**
- [ ] You want intentional lo-fi/8-bit character
- [ ] Drums need aggressive punch (parallel Puncher mode)
- [ ] Creating glitchy/psychedelic FX
- [ ] Layering crushed texture with clean sound (parallel)
- [ ] Sound design requires broken/distorted aesthetic

**Skip Fruity Squeeze when:**
- [ ] You need transparent dynamics control (→ Fruity Compressor)
- [ ] Mastering or final bus processing (→ Fruity Limiter)
- [ ] Subtle warmth or analog saturation (→ Fruity Fast Dist)
- [ ] Processing bass/kicks without degradation (→ use cautiously or skip)

---

## Vibe-Specific Use Cases

### MOODY
**Application**: Dark, degraded textures  
**Settings**:
- Squarize 30-40% (subtle lo-fi character)
- Filter Post, LP 1-2kHz (dark, muffled)
- Preserve HIGH, Impact LOW (keep some clean signal)
- Mix 50-60% (blend, don't replace)

**What To Listen For**: Muffled, distant quality (not harsh/bright)  
**Avoid**: High Squarize (too digital/glitchy for moody vibe)  
[SRC: HIPHOP]

---

### UPBEAT
**Application**: Punchy drum transients  
**Settings**:
- **Puncher mode** (Preserve LOW, Impact HIGH)
- Squarize 10-20% (subtle digital edge)
- Filter Pre, HP 100Hz (protect bass punch)
- Parallel blend 30-40% (add punch without crushing)

**What To Listen For**: Sharper transients, more attack (not distorted mess)  
**Avoid**: Over-squarizing (dulls transients instead of enhancing)  
[SRC: Mixing Best Practices]

---

### PSYCHEDELIC
**Application**: Extreme bit-depth manipulation  
**Settings**:
- Squarize 70-90% (extreme degradation)
- Automate Squarize (0% → 100% dive effects)
- Puncher randomized (Preserve/Impact automation)
- Filter sweeps (automate cutoff)

**What To Listen For**: Intentional digital artifacts, glitchy chaos  
**Avoid**: Static settings (psychedelic needs movement/automation)  
[SRC: Sound Design]

---

### JAZZY
**Application**: Lo-fi vinyl/cassette warmth  
**Settings**:
- Squarize 20-30% (subtle tape degradation)
- Filter Post, LP 2.5-3kHz (warm, not harsh)
- Preserve 60-70% (keep musical integrity)
- Mix 40-50% (blend with clean)

**Post-FX**: Add Effector → Vinyl preset (layer crackle)

**What To Listen For**: Warm degradation (not digital/harsh)  
**Avoid**: Puncher mode (too aggressive for jazzy vibe)  
[SRC: Lo-Fi Production]

---

### VIBEY
**Application**: Textured background layer  
**Settings**:
- Squarize 10-20% (subtle character)
- Filter Pre, LP 1.5kHz (subdued presence)
- Mix 30-40% (background texture, not focal)
- Parallel processing (blend under main sound)

**What To Listen For**: Subtle degradation (adds texture without dominating)  
**Avoid**: High Squarize (too aggressive for background role)  
[SRC: Mixing]

---

## Critical Mixing Rules (Hip-Hop/R&B)

### Rule 1: Protect Low-End (<150Hz)
**Problem**: Squeeze destroys bass punch via phase distortion.

**Solution**:
- **Pre-Filter HP 100-150Hz** (protect sub-bass)
- **OR**: Use only on mid/high content (hats, snares, vocals)
- **OR**: Parallel processing (blend crushed layer, keep clean bass)

**Red Flag**: If bass/kicks thin out after Squeeze → REMOVE or re-route.  
[SRC: Mixing Best Practices]

---

### Rule 2: Mono Check for Stereo Crushing
**Problem**: Squarize can create phase issues in stereo.

**Workflow**:
1. Apply Squeeze on stereo track
2. Check in mono (Fruity Stereo Shaper → Separation 0%)
3. If sound thins/disappears → reduce Squarize or sum to mono before Squeeze

**Safe Approach**: Use Squeeze on mono sources (kick, snare, lead vocal).  
[SRC: Mixing Best Practices]

---

### Rule 3: Gain Stage After Squeeze
**Problem**: Squeeze changes output level unpredictably (can clip).

**Workflow**:
1. Apply Squeeze
2. Adjust **Gain** knob to match output to input level
3. Check mixer meters (peak should not exceed -6 dB)

**Tool**: Fruity Limiter after Squeeze (CEIL -0.3 dB, safety catch).  
[SRC: Mixing Best Practices]

---

### Rule 4: Parallel > Insert for Drums
**Best Practice**: Use Squeeze on **parallel bus** (blend), not **insert** (replace).

**Why**: Preserves transient punch of clean signal while adding crushed character.

**Workflow**:
1. Send drums to parallel track (Fruity Send or mixer routing)
2. Fruity Squeeze on parallel track (Puncher or Squarize)
3. Blend parallel at -10 to -15 dB

**Result**: Punch + character without full degradation.  
[SRC: HIPHOP, NY Compression Techniques]

---

## 60-Second Quick Workflow

**Add Lo-Fi Character to Drum Loop:**
1. **Insert Fruity Squeeze** on drum loop channel
2. **Squarize 30-40%** (8-bit crunch)
3. **Filter Post, LP 3kHz** (remove harsh highs)
4. **Mix 60-70%** (blend with clean)
5. **A/B check**: Bypass → should add character without destroying punch
6. **If bass/kicks thinned**: Reduce Squarize or use Pre-Filter HP 100Hz

---

**Source Tags:**
- [SRC: IL-MAN] = Image-Line Official Manual
- [SRC: HIPHOP] = Hip-Hop Production Best Practices
- [SRC: Mixing Best Practices] = Industry Mixing Standards
- [SRC: Lo-Fi Production] = Lo-Fi Aesthetic Techniques
- [SRC: Sound Design] = Experimental Sound Design Approaches
- [SRC: NY Compression] = Parallel Processing Techniques

```

---

## FILE: 01-Learning\Concepts\crossover-frequency-theory.md

```markdown
# Crossover Frequency Theory

## What Are Crossover Frequencies?

Crossover frequencies are the points where Fruity Squeeze splits your audio spectrum into separate bands for independent processing.

## Fruity Squeeze Band Structure

`\`\`
Low Band ←─────→ Mid Band ←─────→ High Band
    0 Hz ─── X1 ─── X2 ─── 20 kHz
`\`\`

- **Low Band**: 0 Hz to X1 (Crossover 1)
- **Mid Band**: X1 to X2 (Crossover 2)
- **High Band**: X2 to 20 kHz+

## Default Crossover Points

- **Crossover 1**: ~250 Hz (separates bass from mids)
- **Crossover 2**: ~2 kHz (separates mids from highs)

These defaults work well for most full-range material.

## Choosing Crossover Points

### Bass/Low Crossover (X1)

#### Common Ranges
- **80–120 Hz**: Isolate sub-bass (kick fundamentals, 808s)
- **150–250 Hz**: Separate bass guitar/synth bass from mids
- **300–400 Hz**: Keep low-mids with bass (warmer, fuller)

#### Material-Specific
- **Kick drums**: 80–100 Hz (isolate thump)
- **Bass guitar**: 150–200 Hz (preserve body)
- **Synth bass**: 120–180 Hz (depends on patch)
- **Full mix**: 200–300 Hz (general-purpose split)

### Mid/High Crossover (X2)

#### Common Ranges
- **1.5–2.5 kHz**: General vocal/instrument presence range
- **3–5 kHz**: Brighten without harshness
- **6–8 kHz**: Isolate air and brilliance
- **10+ kHz**: Ultra-high sparkle only

#### Material-Specific
- **Vocals**: 2–3 kHz (control presence without affecting air)
- **Guitars**: 2.5–4 kHz (tame pick attack separately)
- **Drums**: 4–6 kHz (control cymbals independently)
- **Full mix**: 2–3 kHz (standard mastering split)

## Musical Frequency Ranges Reference

| Range | Frequencies | Character |
|-------|-------------|-----------|
| Sub-bass | 20–60 Hz | Feel, rumble, power |
| Bass | 60–250 Hz | Fundamental, warmth, body |
| Low-mids | 250–500 Hz | Fullness, muddiness if excessive |
| Mids | 500 Hz–2 kHz | Body, presence, clarity |
| Upper-mids | 2–4 kHz | Definition, vocal presence |
| Highs | 4–8 kHz | Brilliance, edge, sibilance |
| Air | 8–20 kHz | Sparkle, space, openness |

## Crossover Strategy by Goal

### Maximum Loudness
- X1: 100 Hz, X2: 3 kHz
- Heavy compression on all bands
- Aggressive ratios (8:1 or higher)

### Natural Dynamics
- X1: 200 Hz, X2: 2 kHz
- Light compression (2:1–4:1)
- Preserve transients in highs

### Tonal Reshaping
- X1: 150 Hz (boost bass presence)
- X2: 4 kHz (tame harshness independently)
- Use volume knobs to rebalance

### Vocal Processing
- X1: 300 Hz (keep low-mids with body)
- X2: 3 kHz (control sibilance separately)
- Light mid compression, moderate high limiting

## Technical Considerations

### Filter Slopes
- Fruity Squeeze uses Linkwitz-Riley filters (standard for crossovers)
- Creates minimal phase distortion at crossover points
- Smooth transition between bands

### Overlapping Regions
- Bands overlap slightly around crossover points
- Prevents gaps in frequency response
- Maintains phase coherence

### Interaction Effects
- Compressing one band affects perceived balance of others
- Lower crossover = more isolated bass processing
- Higher crossover = more holistic mid/high treatment

## Common Crossover Mistakes

❌ **Too many narrow bands** → Fruity Squeeze has 3 bands; use them wisely  
❌ **Crossovers in wrong spots** → Splits instruments awkwardly  
❌ **Ignoring source material** → Drums vs. vocals need different splits  
❌ **Set and forget** → Adjust per project/sound

## Practical Workflow

1. **Analyze your source**: Where are the problem frequencies?
2. **Set crossovers around problem areas**: Isolate what needs control
3. **Solo bands**: Listen to each band individually
4. **Adjust if needed**: Move crossovers if bands sound unbalanced
5. **Process**: Apply appropriate compression per band

## Frequency-Specific Examples

### Kick Drum Punch
- X1 at 80 Hz (isolate sub-thump)
- X2 at 3 kHz (separate click/attack)
- Heavy low compression, light high limiting

### Vocal Clarity
- X1 at 250 Hz (body vs. presence)
- X2 at 5 kHz (presence vs. air)
- Moderate mid compression, gentle high control

### Bass Synth Fatness
- X1 at 120 Hz (sub vs. harmonics)
- X2 at 2 kHz (warmth vs. brightness)
- Heavy low limiting, light mid squashing

### Full Mix Glue
- X1 at 200 Hz (bass elements vs. instruments)
- X2 at 2.5 kHz (body vs. clarity)
- Gentle compression across all bands (3:1–4:1)

```

---

## FILE: 01-Learning\Concepts\how-multiband-compression-works.md

```markdown
# How Multiband Compression Works in Fruity Squeeze

## Overview
Fruity Squeeze is a multiband waveshaper that divides your audio into 3 frequency bands and applies independent compression/limiting to each band.

## Signal Flow

1. **Input Signal** → Crossover Filter (splits into 3 bands)
2. **Low Band** → Threshold + Ratio → Waveshaping
3. **Mid Band** → Threshold + Ratio → Waveshaping  
4. **High Band** → Threshold + Ratio → Waveshaping
5. **Mixed Bands** → Output

## Key Concepts

### Frequency Splitting
- Uses **crossover filters** to divide spectrum into Low/Mid/High
- Crossover points are adjustable (default: 250 Hz and 2 kHz)
- Each band processes independently without affecting others

### Waveshaping vs. Traditional Compression
- **Traditional compressor**: Gain reduction based on envelope follower
- **Waveshaper**: Directly reshapes waveform amplitude
- Result: Faster, more aggressive compression with harmonic coloration
- No attack/release controls—instant response

### Per-Band Controls

#### Threshold
- Sets the level where compression begins
- Lower threshold = more compression
- Range: -∞ to 0 dB

#### Ratio
- Controls compression intensity
- Higher ratio = more aggressive squashing
- ∞:1 = hard limiting

#### Volume
- Post-compression output level for each band
- Compensate for gain reduction
- Shape tonal balance

## Why Multiband?

### Tonal Control
- Compress bass without affecting highs
- Tame harsh highs without dulling the mix
- Bring up quieter frequency ranges independently

### Mixing Applications
- **Kick/Bass**: Heavy low compression, light mid/high
- **Vocals**: Smooth mid compression, gentle high limiting
- **Master**: Glue bands together with different ratios

## Waveshaping Character

### Harmonic Addition
- Waveshaping adds harmonics (especially odd-order)
- Creates "warmth" or "grit" depending on settings
- More aggressive than clean compression

### Transparency vs. Color
- **Light ratios (2:1–4:1)**: Relatively transparent
- **Heavy ratios (10:1+)**: Audible distortion/coloration
- **Limiter mode (∞:1)**: Hard clipping with artifacts

## Practical Understanding

### Level Management
1. Signal exceeds threshold → waveshaping activates
2. Ratio determines how much level is reduced
3. Volume knob compensates for lost loudness
4. Result: Controlled dynamics with tonal shaping

### Crossover Interaction
- Bands overlap slightly at crossover points
- Smooth transition prevents phase issues
- Adjust crossovers to match your source material

## Common Misconceptions

❌ **"It's just a limiter"** → It's a multiband waveshaper with compression characteristics  
❌ **"No attack/release = bad"** → Instant response is intentional and useful  
❌ **"Only for heavy limiting"** → Works great for subtle dynamic control too

✅ **Fast, colored multiband dynamics**  
✅ **Tonal shaping via band-specific compression**  
✅ **Adds harmonics and character to sound**

```

---

## FILE: 01-Learning\Concepts\multiband-compression-fundamentals.md

```markdown
# Multiband Compression Fundamentals

## What is Multiband Compression?

Fruity Squeeze splits the frequency spectrum into multiple bands (Low, Mid, High) and applies independent compression to each. This allows precise dynamic control across different frequency ranges without affecting the entire signal.

## Core Concepts

### Frequency Band Splitting
- **Low Band**: Sub/bass frequencies (typically 20-250 Hz)
- **Mid Band**: Body and presence (250 Hz - 5 kHz)
- **High Band**: Air and brilliance (5 kHz - 20 kHz)

### Independent Compression Per Band
Each band has its own:
- **Threshold**: Level where compression begins
- **Ratio**: Amount of gain reduction applied
- **Attack/Release**: How quickly compression responds

### Crossover Points
The frequencies where bands transition. Proper crossover selection prevents frequency masking and phase issues.

## Why Use Multiband Compression in Hip-Hop?

### Taming Muddy Low-End
Compress only the low frequencies to control boomy kicks and sub-bass without dulling the entire mix.

### Controlling Harsh Highs
Apply gentle compression to hi-hats and cymbals without affecting vocal presence in the mids.

### Gluing Elements Together
Makes disparate sounds feel cohesive—essential for sample-heavy production.

### Creating Movement
Sidechain individual bands for rhythmic pumping effects popular in modern trap and electronic hip-hop.

## Common Applications

### On Master Bus
- Gentle multiband compression for final glue
- Control dynamic range without squashing transients
- Add subtle warmth and cohesion

### On Vocal Bus
- Compress mids for consistent presence
- Control sibilance in high band
- Preserve low-end body

### On Drum Bus
- Tighten kick and bass relationship
- Add punch to snares without affecting hi-hats
- Control overall drum dynamics

### On Bass/Sub
- Even out inconsistent low-end
- Prevent bass from overwhelming mix
- Preserve transient attack while controlling sustain

## Hip-Hop Production Tips

### For Moody/Dark Trap
- Heavy low-band compression for tight, controlled 808s
- Light mid compression to preserve atmospheric pads
- Minimal high compression to keep dark aesthetic

### For Upbeat/Energetic
- Moderate compression across all bands for consistent energy
- Faster attack on high band to control bright elements
- Medium ratio to maintain dynamics while adding cohesion

### For Melodic/R&B
- Gentle low compression to support melodic bass
- Transparent mid compression for vocal clarity
- Subtle high compression for silky smooth top-end

### For Electronic/Experimental
- Aggressive ratios for pumping effects
- Sidechain individual bands for rhythmic movement
- Extreme settings for creative sound design

```

---

## FILE: 01-Learning\Concepts\puncher-mechanics.md

```markdown
# Understanding the Puncher Algorithm

## What is the "Puncher"?

The Puncher is Fruity Squeeze's unique sample-replacement distortion algorithm. Unlike traditional clipping or saturation, the Puncher **replaces original audio samples with distorted nominal-level versions** based on the signal's characteristics.

Think of it as a "sample substitution engine" rather than a wave-shaping algorithm.

## How It Differs from Standard Distortion

### Traditional Clipping/Saturation:
- Amplifies signal → clips peaks → creates harmonics
- **Continuous wave shaping**
- Affects all samples equally based on amplitude

### Fruity Squeeze Puncher:
- Analyzes incoming samples
- **Replaces specific samples** with pre-distorted versions
- Creates a "punched" or "stuttered" quality
- **Selective sample processing** based on Preserve/Impact ratio

## The Three-Part Control System

### 1. Preserve
**What it does:** Determines how many of the **original** samples pass through untouched.

- **High Preserve (70-100%):** Most samples remain clean
- **Low Preserve (0-30%):** Few original samples survive
- **Use case:** Maintaining transient punch and clarity

**Analogy:** Think of it as a "gatekeeper" that lets clean samples through.

### 2. Impact
**What it does:** Determines how many **processed/distorted** samples are added.

- **High Impact (70-100%):** Aggressive sample replacement
- **Low Impact (0-30%):** Subtle distortion content
- **Use case:** Adding character and degradation

**Analogy:** Think of it as the "distortion injection" amount.

### 3. Relation
**What it does:** Sets the **ratio** between Preserve and Impact.

This is the most misunderstood parameter. It's NOT a simple mix control—it adjusts how Preserve and Impact **interact**.

- **Left (Favor Preserve):** Original samples are prioritized
- **Center (Balanced):** Equal weighting
- **Right (Favor Impact):** Distorted samples dominate

**Analogy:** Think of it as a "bias control" for the sample replacement algorithm.

## How the Algorithm Works (Simplified)

`\`\`
1. Audio sample arrives
2. Puncher analyzes sample characteristics (amplitude, timing)
3. Based on Preserve/Impact/Relation settings:
   - Keep original sample? (Preserve)
   - Replace with distorted version? (Impact)
   - What's the probability? (Relation)
4. Output the chosen sample
5. Repeat for next sample
`\`\`

## Squarize vs. Puncher

These are **two separate processes** in Fruity Squeeze:

### Squarize (Bit Reduction)
- Reduces bit depth
- Creates "stepped" waveforms
- Generates aliasing artifacts
- **Affects ALL samples equally**

### Puncher (Sample Replacement)
- Selectively replaces samples
- Creates "punchy" distortion character
- **Affects samples based on Preserve/Impact/Relation**

They work **in series:**
1. Squarize processes the signal first
2. Puncher operates on the squarized signal (or vice versa, depending on routing)

## Practical Applications

### Preserving Transients While Adding Body
`\`\`
Preserve: 70%
Impact: 50%
Relation: Favor Preserve
`\`\`
**Result:** Drum hits stay punchy, but body/tail gets crunchy character.

### Aggressive Lo-Fi Destruction
`\`\`
Preserve: 20%
Impact: 80%
Relation: Favor Impact
`\`\`
**Result:** Most samples are replaced with distorted versions—heavy degradation.

### Subtle Vintage Character
`\`\`
Preserve: 60%
Impact: 30%
Relation: Centered
`\`\`
**Result:** Gentle "broken transistor" vibe without losing clarity.

### Glitch/Stutter Effect
`\`\`
Preserve: 40%
Impact: 60%
Relation: Extreme Right
`\`\`
**Result:** Creates irregular sample replacement—sounds like digital glitching.

## Common Misconceptions

### ❌ "Preserve and Impact are just a dry/wet mix"
**Reality:** They control **sample selection probability**, not signal mixing. The Relation knob further modifies this probability.

### ❌ "The Puncher is just another waveshaper"
**Reality:** It's a **sample replacement algorithm**, not continuous wave shaping. This creates its unique "punched" character.

### ❌ "Relation is redundant if I set Preserve/Impact correctly"
**Reality:** Relation fundamentally changes **how** the algorithm prioritizes samples. Small Relation changes = big character shifts.

## Advanced Techniques

### Dynamic Puncher Control
Automate Relation for evolving textures:
- **Intro:** Favor Preserve (clean)
- **Build:** Move toward Center (balanced)
- **Drop:** Favor Impact (crushed)

### Frequency-Specific Punching
Use Fruity Squeeze on specific frequency bands (via Patcher or multiband routing):
- **Lows:** High Preserve (keep punch)
- **Mids:** Balanced (add character)
- **Highs:** High Impact (crush cymbals/hats)

### Parallel Puncher Processing
Two instances in parallel:
- **Instance 1:** High Preserve, low Mix (transient preservation)
- **Instance 2:** High Impact, medium Mix (body distortion)

## Why It Sounds Different

The Puncher creates a **non-linear, sample-selective** distortion that:
1. Preserves micro-dynamics (unlike heavy compression + distortion)
2. Creates irregular harmonic content (not standard odd/even harmonics)
3. Maintains transient clarity while adding body (if configured correctly)
4. Generates a "digital artifact" quality unique to sample replacement

This is why Fruity Squeeze sounds distinct from:
- Fruity Fast Dist (waveshaper)
- Fruity Blood Overdrive (tube simulation)
- Distructor (multiband saturation)

## Troubleshooting

### "I hear crackling/popping"
- **Cause:** Too much Impact with low Preserve
- **Fix:** Increase Preserve or reduce Impact

### "It sounds too clean"
- **Cause:** Too much Preserve, not enough Impact
- **Fix:** Increase Impact and adjust Relation toward Impact

### "The effect is too inconsistent"
- **Cause:** Extreme Relation settings create unpredictable sample selection
- **Fix:** Move Relation toward Center for more stable processing

### "I can't hear any difference"
- **Cause:** Preserve and Impact might be balanced too evenly with centered Relation
- **Fix:** Push Impact higher and/or move Relation to extremes

## The "Broken Transistor" Sound

When you push the Puncher hard:
`\`\`
Squarize: 50%+
Preserve: 10-30%
Impact: 70-90%
Relation: Favor Impact
`\`\`

You get the classic "broken radio" / "failing hardware" sound because:
1. Squarize introduces aliasing
2. Puncher replaces most samples with distorted versions
3. The irregular sample selection mimics hardware failure
4. Combined effect = vintage/lo-fi degradation

## Conclusion

The Puncher is Fruity Squeeze's secret weapon. Understanding Preserve/Impact/Relation as a **sample selection system** rather than simple gain controls unlocks its full potential.

**Key Takeaway:** The Puncher doesn't just "add distortion"—it **rebuilds your audio from a mix of clean and crushed samples** based on intelligent probability.

---

**Experiment:** Load a simple drum loop. Set Preserve to 100%, Impact to 0%, and slowly increase Impact while watching Relation. You'll hear exactly when and how samples get replaced.

```

---

## FILE: 01-Learning\Concepts\waveshaping-vs-compression.md

```markdown
# Waveshaping vs. Traditional Compression

## Core Difference

**Traditional Compressor**: Analyzes signal level → Reduces gain over time  
**Waveshaper (Fruity Squeeze)**: Reshapes waveform amplitude directly

## How Traditional Compressors Work

### Envelope Detection
1. Signal enters compressor
2. Envelope follower tracks signal level
3. When level exceeds threshold, gain reduction begins
4. Attack/release times smooth the gain changes
5. Output = input × gain reduction amount

### Time-Based Response
- **Attack**: How quickly compression starts (1–100 ms typical)
- **Release**: How quickly compression stops (50–500 ms typical)
- **Natural pumping**: Compression tracks dynamics over time

## How Waveshapers Work

### Direct Waveform Manipulation
1. Signal enters waveshaper
2. Transfer function maps input amplitude to output amplitude
3. Any sample above threshold is immediately reshaped
4. No time-based smoothing—instant, sample-accurate response

### Mathematical Transformation
`\`\`
If input > threshold:
    output = threshold + (input - threshold) / ratio
Else:
    output = input
`\`\`

## Key Differences

| Feature | Traditional Compressor | Waveshaper (Squeeze) |
|---------|----------------------|----------------------|
| Response time | Attack/release (ms) | Instant (0 ms) |
| Dynamics tracking | RMS or peak detection | Direct amplitude |
| Harmonic distortion | Minimal (clean) | Audible (adds harmonics) |
| Pumping/breathing | Common artifact | Not possible |
| Transparency | Can be very clean | Always colors sound |
| CPU usage | Moderate | Low |

## When to Use Each

### Use Traditional Compressor For:
- ✅ Smooth, transparent dynamic control
- ✅ Musical pumping effects (sidechain, glue)
- ✅ Preserving tonal character
- ✅ Gentle ratio control (2:1–4:1)
- ✅ Time-based envelope shaping

### Use Waveshaper (Fruity Squeeze) For:
- ✅ Fast transient control (drums, percussion)
- ✅ Adding harmonic excitement
- ✅ Aggressive limiting/squashing
- ✅ Instant brick-wall limiting
- ✅ Lo-fi/distorted compression effects
- ✅ Multiband tonal shaping

## Sonic Character Differences

### Traditional Compressor
- **Clean**: Minimal harmonic addition
- **Smooth**: Gradual gain changes
- **Natural**: Mimics analog compression behavior
- **Musical pumping**: Rhythmic gain reduction
- **Examples**: 1176, LA-2A, SSL Bus Compressor

### Waveshaper (Fruity Squeeze)
- **Colored**: Adds odd-order harmonics
- **Aggressive**: Instant, hard response
- **Gritty**: Audible when pushed hard
- **No pumping**: Instant on/off
- **Examples**: Digital clipping, saturation, hard limiting

## Harmonic Content

### Traditional Compressor
- Adds **even-order harmonics** (if analog-modeled)
- Warm, pleasing distortion at high ratios
- Generally transparent at moderate settings

### Waveshaper
- Adds **odd-order harmonics** (3rd, 5th, 7th)
- Creates "edge," "bite," or "harshness"
- Always audible to some degree when active

## Practical Sound Examples

### Kick Drum

**Traditional compressor**:
- Smooth, punchy attack
- Controlled sustain with natural decay
- Clean low-end thump

**Fruity Squeeze**:
- Instant transient clipping
- Aggressive, clicky attack
- Harmonics in mid-range (adds "click")

### Vocals

**Traditional compressor**:
- Even loudness across phrases
- Natural breath dynamics
- Transparent at 3:1–4:1 ratio

**Fruity Squeeze**:
- Hard-limited peaks (sibilance control)
- Less natural dynamic feel
- Adds edge/presence via harmonics

### Bass Guitar

**Traditional compressor**:
- Sustained, even notes
- Warm, round tone
- Smooth pick/finger attack

**Fruity Squeeze**:
- Fast, aggressive attack control
- Adds brightness and grit
- More "modern" compressed bass tone

## Attack & Release Implications

### No Attack/Release in Fruity Squeeze

**Advantages**:
- Zero latency response
- Perfect for fast transients (drums, plucks)
- Predictable, consistent behavior
- No phase smearing from lookahead

**Disadvantages**:
- Can't create smooth, musical pumping
- No control over compression "feel"
- Always sounds "instant"
- Less forgiving on complex material

## Multiband Context

### Why Waveshaping Works in Multiband

- **Per-band coloration**: Harmonics in one band don't affect others
- **Crossover isolation**: Each band's distortion stays contained
- **Tonal sculpting**: Use harmonic addition as a mixing tool
- **Fast response**: Great for controlling specific frequency ranges instantly

### Traditional Multiband Compressors

- Examples: Waves C6, FabFilter MB
- More transparent, musical compression
- Better for mastering and subtle dynamics
- Slower, more CPU-intensive

## Hybrid Approach

Many engineers use **both**:

1. **Traditional compressor** → Smooth overall dynamics
2. **Fruity Squeeze** → Fast transient control + coloration

Example: Compress vocals with a standard compressor, then use Fruity Squeeze on highs to tame sibilance with harmonic edge.

## Bottom Line

- **Fruity Squeeze = Fast, colored, aggressive multiband waveshaping**
- **Traditional compressor = Musical, transparent, time-based dynamics**
- Neither is "better"—they're different tools for different jobs

```

---

## FILE: 01-Learning\Quick-Reference\common-use-cases.md

```markdown
# Fruity Squeeze Common Use Cases

## 1. Maximizing Loudness (Mastering/Final Mix)

**Goal**: Make your track as loud as possible without destroying it.

### Settings
- **Crossovers**: 100 Hz, 3 kHz
- **Low**: Threshold -10 dB, Ratio 8:1, Volume +3 dB
- **Mid**: Threshold -12 dB, Ratio 6:1, Volume +2 dB
- **High**: Threshold -15 dB, Ratio 4:1, Volume +1 dB
- **Output**: Adjust to taste (often +2 to +4 dB)

### Why It Works
- Heavy low-end compression prevents bass from eating up headroom
- Mid compression adds density and presence
- Lighter high compression preserves clarity
- Result: Loud, full-range track

---

## 2. Punchy Kick Drum

**Goal**: Make kick drum hit hard with controlled low-end.

### Settings
- **Crossovers**: 80 Hz, 3 kHz
- **Low**: Threshold -8 dB, Ratio 10:1, Volume +4 dB
- **Mid**: Threshold -15 dB, Ratio 3:1
- **High**: Threshold -12 dB, Ratio 6:1, Volume +2 dB
- **Input**: +1 to +3 dB for extra drive

### Why It Works
- Isolates sub-bass punch below 80 Hz
- Heavy low compression = tight, controlled thump
- Mid-range stays clean
- High compression adds click/attack without harshness

---

## 3. Vocal De-Essing

**Goal**: Tame sibilance (harsh "s" sounds) without dulling the voice.

### Settings
- **Crossovers**: 300 Hz, 5 kHz
- **Low**: Threshold -∞ (bypass)
- **Mid**: Threshold -18 dB, Ratio 2:1
- **High**: Threshold -10 dB, Ratio 8:1, Volume -2 dB
- **Dry/Wet**: 60–80%

### Why It Works
- Low band bypassed (no need to compress bass on vocals)
- Light mid compression for evenness
- Aggressive high compression targets sibilance (5 kHz+)
- Lower high volume reduces harsh frequencies
- Dry/wet blend keeps natural dynamics

---

## 4. Bass Guitar Fatness

**Goal**: Thick, sustained bass with harmonic richness.

### Settings
- **Crossovers**: 120 Hz, 2 kHz
- **Low**: Threshold -10 dB, Ratio 6:1, Volume +3 dB
- **Mid**: Threshold -12 dB, Ratio 8:1, Volume +2 dB
- **High**: Threshold -∞ (bypass or very light)
- **Input**: +2 dB

### Why It Works
- Compresses fundamental (low band) for sustain
- Heavy mid compression adds harmonics and presence
- Highs left alone or lightly controlled
- Input gain drives waveshaping for "grit"

---

## 5. Parallel Compression (Drums/Mix)

**Goal**: Add density and aggression while preserving natural dynamics.

### Settings
- **Crossovers**: 200 Hz, 2.5 kHz
- **All bands**: Threshold -6 dB, Ratio 10:1+
- **Volumes**: +4 to +6 dB per band
- **Dry/Wet**: 30–50%
- **Output**: Adjust to match input level

### Why It Works
- Aggressive compression on wet signal
- Dry signal preserves transients and dynamics
- Blend creates "New York" style compression
- Multiband allows tonal shaping in parallel chain

---

## 6. 808/Sub-Bass Control

**Goal**: Tight, consistent sub-bass that doesn't overpower the mix.

### Settings
- **Crossovers**: 60 Hz, 150 Hz
- **Low**: Threshold -8 dB, Ratio ∞:1 (limiter mode), Volume +2 dB
- **Mid**: Threshold -12 dB, Ratio 6:1
- **High**: Threshold -∞ (bypass)

### Why It Works
- Ultra-low crossover isolates pure sub frequencies
- Limiting mode prevents bass spikes
- Mid band controls harmonics for definition
- Highs bypassed (no high content in 808s)

---

## 7. Full Mix Glue

**Goal**: Make all elements sit together cohesively without overcompression.

### Settings
- **Crossovers**: 200 Hz, 2 kHz
- **Low**: Threshold -18 dB, Ratio 3:1, Volume +1 dB
- **Mid**: Threshold -15 dB, Ratio 4:1, Volume +1 dB
- **High**: Threshold -18 dB, Ratio 2:1
- **Dry/Wet**: 70–100%

### Why It Works
- Gentle ratios preserve musicality
- Even compression across bands
- Slight volume boosts add cohesion
- Not too aggressive—lets mix breathe

---

## 8. Aggressive EDM/Trap Drums

**Goal**: Hard-hitting, loud drums with punchy transients.

### Settings
- **Crossovers**: 100 Hz, 4 kHz
- **All bands**: Threshold -6 dB, Ratio 8:1+
- **Volumes**: +4 to +6 dB
- **Input**: +3 to +6 dB (drive hard!)
- **Output**: Adjust to prevent clipping

### Why It Works
- High input drives waveshaping for distortion
- Aggressive ratios squash dynamics hard
- Volume boosts compensate for gain reduction
- Result: Loud, aggressive, modern drum sound

---

## 9. Warming Up Digital Synths

**Goal**: Add analog-style warmth and character to clean digital synths.

### Settings
- **Crossovers**: 250 Hz, 2.5 kHz
- **Low**: Threshold -15 dB, Ratio 4:1, Volume +2 dB
- **Mid**: Threshold -12 dB, Ratio 5:1, Volume +1 dB
- **High**: Threshold -18 dB, Ratio 3:1
- **Input**: +2 to +4 dB

### Why It Works
- Moderate compression across all bands
- Input gain drives harmonic distortion
- Waveshaping adds odd-order harmonics (warmth)
- Not too aggressive—preserves synth character

---

## 10. Brightening Dull Recordings

**Goal**: Add presence and air to recordings lacking high-frequency content.

### Settings
- **Crossovers**: 200 Hz, 3 kHz
- **Low**: Threshold -∞ (bypass)
- **Mid**: Threshold -15 dB, Ratio 3:1, Volume +1 dB
- **High**: Threshold -12 dB, Ratio 6:1, Volume +4 to +6 dB
- **Input**: +1 dB

### Why It Works
- Low band bypassed (no change to bass)
- Mid compression brings up presence
- Heavy high boost adds sparkle and air
- Waveshaping harmonics enhance brilliance

---

## 11. Tightening Loose Bass Mixes

**Goal**: Control boomy, unfocused low-end without losing power.

### Settings
- **Crossovers**: 150 Hz, 2 kHz
- **Low**: Threshold -10 dB, Ratio 8:1, Volume +1 dB
- **Mid**: Threshold -15 dB, Ratio 4:1
- **High**: Threshold -∞ (bypass)

### Why It Works
- Heavy low compression tames boom
- Crossover at 150 Hz isolates problematic bass
- Mid compression adds definition
- Highs left alone to preserve clarity

---

## 12. Controlling Harsh Cymbals/Hi-Hats

**Goal**: Tame overly bright or harsh cymbals without dulling them.

### Settings
- **Crossovers**: 300 Hz, 6 kHz
- **Low**: Threshold -∞ (bypass)
- **Mid**: Threshold -∞ (bypass)
- **High**: Threshold -12 dB, Ratio 6:1–10:1, Volume -3 dB
- **Dry/Wet**: 70%

### Why It Works
- Only high band active (targets 6 kHz+)
- Compression reduces cymbal peaks
- Lower volume reduces harshness
- Dry/wet preserves some natural sparkle

---

## Quick Reference Table

| Use Case | Low Crossover | High Crossover | Focus Band | Ratio Range |
|----------|--------------|----------------|------------|-------------|
| Mastering | 100–150 Hz | 2.5–3 kHz | All | 4:1–8:1 |
| Kick drum | 80–100 Hz | 3–4 kHz | Low + High | 8:1–∞:1 |
| Vocals | 250–300 Hz | 4–5 kHz | Mid + High | 2:1–8:1 |
| Bass | 100–150 Hz | 2–3 kHz | Low + Mid | 6:1–10:1 |
| Drums | 100–120 Hz | 3–5 kHz | All | 6:1–10:1 |
| Synths | 200–300 Hz | 2–3 kHz | All | 3:1–6:1 |
| De-essing | Any | 5–8 kHz | High only | 6:1–10:1 |
| Brightening | Any | 3–5 kHz | High only | 4:1–8:1 |

```

---

## FILE: 01-Learning\Quick-Reference\hip-hop-quick-start.md

```markdown
# Hip-Hop Quick Start Guide

## Genre-Specific Presets

### Moody/Dark Trap
**Use Case**: Controlling 808s and dark atmospheres
- **Low**: Threshold -18 dB, Ratio 4:1, Attack 5ms, Release 100ms
- **Mid**: Threshold -12 dB, Ratio 2:1, Attack 10ms, Release 80ms
- **High**: Threshold -15 dB, Ratio 1.5:1, Attack 1ms, Release 50ms
- **Crossovers**: 150 Hz / 4 kHz

### Upbeat/Bounce
**Use Case**: Energetic beats with consistent punch
- **Low**: Threshold -15 dB, Ratio 3:1, Attack 10ms, Release 120ms
- **Mid**: Threshold -10 dB, Ratio 2.5:1, Attack 5ms, Release 90ms
- **High**: Threshold -12 dB, Ratio 2:1, Attack 1ms, Release 60ms
- **Crossovers**: 200 Hz / 5 kHz

### Melodic/R&B
**Use Case**: Smooth, polished production
- **Low**: Threshold -20 dB, Ratio 2:1, Attack 20ms, Release 150ms
- **Mid**: Threshold -15 dB, Ratio 1.5:1, Attack 15ms, Release 100ms
- **High**: Threshold -18 dB, Ratio 1.5:1, Attack 3ms, Release 80ms
- **Crossovers**: 180 Hz / 6 kHz

### Funky/Boom-Bap
**Use Case**: Classic hip-hop with vintage vibe
- **Low**: Threshold -16 dB, Ratio 3:1, Attack 15ms, Release 140ms
- **Mid**: Threshold -12 dB, Ratio 2:1, Attack 10ms, Release 110ms
- **High**: Threshold -20 dB, Ratio 1.2:1, Attack 5ms, Release 90ms
- **Crossovers**: 220 Hz / 4.5 kHz

### Electronic/Experimental
**Use Case**: Heavy processing and creative effects
- **Low**: Threshold -12 dB, Ratio 6:1, Attack 1ms, Release 80ms
- **Mid**: Threshold -8 dB, Ratio 4:1, Attack 3ms, Release 70ms
- **High**: Threshold -10 dB, Ratio 3:1, Attack 0.5ms, Release 50ms
- **Crossovers**: 120 Hz / 3.5 kHz

## Common Issues & Quick Fixes

### 808s Sound Weak
- Increase low-band ratio to 4:1 or higher
- Lower threshold to -20 dB to catch quieter notes
- Slower attack (10-20ms) to preserve punch

### Mix Sounds Harsh
- Reduce high-band ratio to 1.5:1 or lower
- Raise threshold to only compress peaks
- Increase attack time to preserve transients

### Vocals Get Lost
- Reduce mid-band compression
- Adjust crossover to isolate vocal range (800 Hz - 4 kHz)
- Use slower attack to preserve consonants

### Loss of Energy
- Reduce ratios across all bands
- Use faster release times for quicker recovery
- Bypass individual bands to identify problem area

### Pumping/Breathing
- Slower release times (100ms+)
- Reduce ratios for gentler compression
- Adjust threshold higher to compress less

## 5-Minute Workflow

1. **Insert Fruity Squeeze** on master or bus
2. **Solo each band** to understand frequency content
3. **Set crossovers** based on genre (trap = lower, R&B = higher)
4. **Start with low band** - control bass/808s first
5. **Move to mid band** - balance body and vocals
6. **Finish with high band** - control brightness
7. **Listen in context** - adjust for overall balance
8. **A/B test** - bypass to compare against unprocessed

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Fruity Squeeze - Parameter Cheat Sheet

## Core Parameters

### Squarize
- **Function:** Bit depth reduction amount
- **Range:** 0-100%
- **Effect:** Creates digital grit and "stepped" artifacts
- **Low (0-30%):** Subtle character, warm digital texture
- **Medium (30-70%):** Noticeable 8-bit degradation, retro vibe
- **High (70-100%):** Extreme digital crushing, aliasing artifacts
- **Pro Tip:** Start at 10-20% for drums, increase gradually to taste

### Preserve
- **Function:** Amount of original samples to keep
- **Range:** 0-100%
- **Effect:** Maintains clean transients and clarity
- **Low:** More processed content, aggressive distortion
- **High:** More original content, subtle enhancement
- **Pro Tip:** Keep at 50-70% for drums to maintain punch

### Impact
- **Function:** Amount of processed (distorted) samples to add
- **Range:** 0-100%
- **Effect:** Adds crushed/distorted character
- **Low:** Subtle enhancement
- **High:** Aggressive lo-fi distortion
- **Pro Tip:** Balance with Preserve for desired intensity

### Relation
- **Function:** Ratio between Preserve and Impact
- **Range:** Variable ratio control
- **Effect:** Fine-tunes the balance between clean and crushed
- **Left:** More Preserve relative to Impact
- **Right:** More Impact relative to Preserve
- **Pro Tip:** Adjust after setting Preserve/Impact for character fine-tuning

## Filter Section

### Frequency
- **Function:** Filter cutoff frequency
- **Range:** 20 Hz - 20 kHz
- **Low-Pass Mode:** Cuts highs, tames harshness
- **High-Pass Mode:** Cuts lows, cleans up muddiness
- **Pro Tip:** Use Post-LP to tame harsh aliasing from high Squarize

### Resonance (Res)
- **Function:** Emphasis at cutoff frequency
- **Range:** 0-100%
- **Effect:** Creates peak at filter cutoff
- **Low:** Smooth filtering
- **High:** Resonant peak, self-oscillation possible
- **Pro Tip:** Keep below 30% to avoid "whistling" artifacts

### Filter Position
- **Pre:** Filters BEFORE distortion
  - Use for: Tone shaping input signal
  - Effect: Distortion reacts to filtered signal
- **Post:** Filters AFTER distortion
  - Use for: Taming harsh artifacts
  - Effect: Cleans up processed signal
- **Pro Tip:** Use Post for most applications, Pre for creative tone shaping

## Mix & Output

### Mix
- **Function:** Dry/wet balance
- **Range:** 0% (dry) - 100% (wet)
- **Low:** Subtle parallel processing
- **100%:** Full effect replacement
- **Pro Tip:** Use 30-50% for parallel drum processing to maintain dynamics

### Gain
- **Function:** Output level compensation
- **Effect:** Adjusts final output volume
- **Pro Tip:** Bit reduction often reduces perceived loudness, compensate here

## Common Parameter Combinations

### Crunchy Drum Bus
`\`\`
Squarize: 15%
Preserve: 60%
Impact: 40%
Relation: Centered
Filter: Post-LP @ 10kHz, Res 10%
Mix: 35%
`\`\`

### Total 8-Bit Destruction
`\`\`
Squarize: 90%
Preserve: 20%
Impact: 80%
Relation: Favor Impact
Filter: Post-LP @ 8kHz, Res 5%
Mix: 100%
`\`\`

### Vintage Radio Effect
`\`\`
Squarize: 45%
Preserve: 30%
Impact: 70%
Relation: Favor Impact
Filter: Pre-BP @ 2.5kHz, Res 40%
Mix: 80%
`\`\`

### Subtle Lo-Fi Character
`\`\`
Squarize: 8%
Preserve: 80%
Impact: 20%
Relation: Favor Preserve
Filter: Post-LP @ 15kHz, Res 0%
Mix: 25%
`\`\`

### Industrial Bass Grit
`\`\`
Squarize: 35%
Preserve: 40%
Impact: 60%
Relation: Centered
Filter: Post-HP @ 80Hz, Res 15%
Mix: 60%
`\`\`

## Quick Troubleshooting

### Problem: Sound is too harsh/bright
- **Solution:** Lower Squarize, set Filter to Post-LP, reduce high frequencies

### Problem: Losing punch/transients
- **Solution:** Increase Preserve, lower Mix for parallel processing

### Problem: Whistling/ringing artifacts
- **Solution:** Lower Filter Resonance below 20%

### Problem: Sound is getting too quiet
- **Solution:** Increase Gain, check Mix slider isn't too low

### Problem: Too muddy/unclear
- **Solution:** Use Filter in Post-HP mode, reduce low-frequency Squarize

### Problem: Not enough character
- **Solution:** Increase Squarize and Impact, balance with Preserve

## Parameter Interaction Tips

1. **Squarize + Filter Position:** High Squarize creates aliasing; use Post-LP filtering
2. **Preserve + Impact:** These work together via Relation - balance is key
3. **Mix + Gain:** Lower Mix often requires higher Gain to match levels
4. **Resonance + Frequency:** High Res creates peaks; set Frequency carefully
5. **Impact + Filter Pre:** Pre-filtering changes what Impact processes

## Quick Reference Values

### For Drums
- Squarize: 10-25%
- Preserve: 50-70%
- Mix: 30-50% (parallel)

### For Synths
- Squarize: 15-40%
- Preserve: 40-60%
- Mix: 60-100%

### For Vocals
- Squarize: 5-15%
- Preserve: 70-85%
- Mix: 20-40% (parallel)

### For Bass
- Squarize: 10-30%
- Preserve: 50-65%
- Filter: Post-HP to protect lows

---

**Pro Tip:** Always A/B compare with the bypassed plugin to ensure you're adding value, not just different!

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "plugin": "Fruity Squeeze",
  "version": "Latest",
  "category": "Dynamics / Multiband Compressor",
  "parameters": [
    {
      "name": "Low/Mid Crossover",
      "type": "Frequency",
      "range": "~50 Hz - 1 kHz",
      "default": "250 Hz",
      "description": "Sets the frequency that separates the low band from the mid band",
      "unit": "Hz",
      "automation": true,
      "notes": "Lower values isolate more bass frequencies; higher values include more low-mids with bass"
    },
    {
      "name": "Mid/High Crossover",
      "type": "Frequency",
      "range": "~500 Hz - 10 kHz",
      "default": "2 kHz",
      "description": "Sets the frequency that separates the mid band from the high band",
      "unit": "Hz",
      "automation": true,
      "notes": "Lower values create brighter overall sound; higher values keep more presence in mids"
    },
    {
      "name": "Low Threshold",
      "type": "Level",
      "range": "-∞ to 0 dB",
      "default": "-12 dB",
      "description": "Sets the level where low band compression begins",
      "unit": "dB",
      "automation": true,
      "notes": "Lower threshold = more compression; -∞ bypasses low band"
    },
    {
      "name": "Low Ratio",
      "type": "Ratio",
      "range": "1:1 to ∞:1",
      "default": "4:1",
      "description": "Controls the intensity of low band compression",
      "unit": ":1",
      "automation": true,
      "notes": "∞:1 acts as a brick-wall limiter"
    },
    {
      "name": "Low Volume",
      "type": "Level",
      "range": "-∞ to +12 dB",
      "default": "0 dB",
      "description": "Output level for the low band after compression",
      "unit": "dB",
      "automation": true,
      "notes": "Use to compensate for gain reduction or reshape tonal balance"
    },
    {
      "name": "Mid Threshold",
      "type": "Level",
      "range": "-∞ to 0 dB",
      "default": "-12 dB",
      "description": "Sets the level where mid band compression begins",
      "unit": "dB",
      "automation": true,
      "notes": "Lower threshold = more compression; -∞ bypasses mid band"
    },
    {
      "name": "Mid Ratio",
      "type": "Ratio",
      "range": "1:1 to ∞:1",
      "default": "4:1",
      "description": "Controls the intensity of mid band compression",
      "unit": ":1",
      "automation": true,
      "notes": "Mids often need moderate ratios (4:1-6:1) for natural sound"
    },
    {
      "name": "Mid Volume",
      "type": "Level",
      "range": "-∞ to +12 dB",
      "default": "0 dB",
      "description": "Output level for the mid band after compression",
      "unit": "dB",
      "automation": true,
      "notes": "Critical for vocal presence and instrument clarity"
    },
    {
      "name": "High Threshold",
      "type": "Level",
      "range": "-∞ to 0 dB",
      "default": "-12 dB",
      "description": "Sets the level where high band compression begins",
      "unit": "dB",
      "automation": true,
      "notes": "Lower threshold = more compression; -∞ bypasses high band"
    },
    {
      "name": "High Ratio",
      "type": "Ratio",
      "range": "1:1 to ∞:1",
      "default": "4:1",
      "description": "Controls the intensity of high band compression",
      "unit": ":1",
      "automation": true,
      "notes": "Higher ratios useful for de-essing (6:1-10:1)"
    },
    {
      "name": "High Volume",
      "type": "Level",
      "range": "-∞ to +12 dB",
      "default": "0 dB",
      "description": "Output level for the high band after compression",
      "unit": "dB",
      "automation": true,
      "notes": "Adjust to control brightness or tame harshness"
    },
    {
      "name": "Input Level",
      "type": "Level",
      "range": "-12 dB to +12 dB",
      "default": "0 dB",
      "description": "Adjusts signal level entering Fruity Squeeze",
      "unit": "dB",
      "automation": true,
      "notes": "Higher input drives more waveshaping/harmonic distortion"
    },
    {
      "name": "Output Level",
      "type": "Level",
      "range": "-12 dB to +12 dB",
      "default": "0 dB",
      "description": "Final gain stage after all processing",
      "unit": "dB",
      "automation": true,
      "notes": "Use to match output to input level or adjust final loudness"
    },
    {
      "name": "Dry/Wet Mix",
      "type": "Percentage",
      "range": "0% to 100%",
      "default": "100%",
      "description": "Blends compressed signal with original dry signal",
      "unit": "%",
      "automation": true,
      "notes": "50% enables parallel compression for more natural dynamics"
    }
  ],
  "metering": [
    {
      "name": "Input Meter",
      "description": "Shows incoming signal level before processing"
    },
    {
      "name": "Low Band Gain Reduction",
      "description": "Visual feedback for low band compression amount"
    },
    {
      "name": "Mid Band Gain Reduction",
      "description": "Visual feedback for mid band compression amount"
    },
    {
      "name": "High Band Gain Reduction",
      "description": "Visual feedback for high band compression amount"
    },
    {
      "name": "Output Meter",
      "description": "Shows final output level after all processing"
    }
  ],
  "technicalSpecs": {
    "bands": 3,
    "filterType": "Linkwitz-Riley crossover",
    "processingType": "Waveshaper-based compression",
    "attackTime": "0 ms (instant)",
    "releaseTime": "0 ms (instant)",
    "harmonicCharacter": "Odd-order harmonics",
    "latency": "Minimal"
  }
}

```

---

## FILE: 02-Data\parameters\squeeze-params.json

```json
{
  "plugin_name": "Fruity Squeeze",
  "plugin_type": "Effect",
  "category": "Distortion / Lo-Fi / Bit-Crusher",
  "version": "Latest",
  "manufacturer": "Image-Line",
  
  "parameters": [
    {
      "name": "Squarize",
      "type": "knob",
      "range": "0-100%",
      "default": "0%",
      "description": "Bit depth reduction amount - creates digital grit and stepped artifacts",
      "use_cases": [
        "8-bit sound creation",
        "Digital degradation",
        "Retro game sounds",
        "Lo-fi character",
        "Aliasing generation"
      ],
      "ranges": {
        "subtle": "0-20%",
        "moderate": "20-50%",
        "aggressive": "50-80%",
        "extreme": "80-100%"
      },
      "tips": [
        "Start low and increase gradually",
        "Higher values create more aliasing",
        "Use Post-LP filtering to tame harshness",
        "Automate for evolving degradation"
      ]
    },
    {
      "name": "Preserve",
      "type": "knob",
      "range": "0-100%",
      "default": "50%",
      "description": "Amount of original samples to keep - maintains clarity and transients",
      "use_cases": [
        "Transient preservation",
        "Maintaining punch",
        "Clarity retention",
        "Balanced processing",
        "Dynamic control"
      ],
      "ranges": {
        "low": "0-30% - Aggressive processing",
        "medium": "30-70% - Balanced character",
        "high": "70-100% - Subtle enhancement"
      },
      "tips": [
        "Keep high (50-70%) for drums",
        "Use high values to maintain punch",
        "Balance with Impact for intensity",
        "Higher values = more original content"
      ]
    },
    {
      "name": "Impact",
      "type": "knob",
      "range": "0-100%",
      "default": "50%",
      "description": "Amount of processed/distorted samples to add - adds crushed character",
      "use_cases": [
        "Adding distortion",
        "Character enhancement",
        "Aggressive processing",
        "Lo-fi effects",
        "Texture creation"
      ],
      "ranges": {
        "subtle": "0-30%",
        "moderate": "30-70%",
        "aggressive": "70-100%"
      },
      "tips": [
        "Balance with Preserve",
        "Higher values = more processed content",
        "Use Relation to fine-tune interaction",
        "Start moderate and adjust"
      ]
    },
    {
      "name": "Relation",
      "type": "knob",
      "range": "Variable ratio control",
      "default": "Centered",
      "description": "Ratio between Preserve and Impact - fine-tunes processing character",
      "use_cases": [
        "Processing balance",
        "Character fine-tuning",
        "Dynamic control",
        "Texture shaping",
        "Ratio optimization"
      ],
      "positions": {
        "left": "Favor Preserve - More original content",
        "center": "Balanced - Equal weighting",
        "right": "Favor Impact - More processed content"
      },
      "tips": [
        "Adjust after setting Preserve/Impact",
        "Small changes = big character shifts",
        "Automate for evolving textures",
        "Center is a good starting point"
      ]
    },
    {
      "name": "Filter Frequency",
      "type": "knob",
      "range": "20 Hz - 20 kHz",
      "default": "~10 kHz",
      "description": "Filter cutoff frequency for tone shaping",
      "use_cases": [
        "Taming harshness",
        "Tone shaping",
        "Artifact control",
        "Frequency selection",
        "Character control"
      ],
      "modes": {
        "low_pass": "Cuts highs - tames harshness",
        "high_pass": "Cuts lows - cleans muddiness"
      },
      "tips": [
        "Use Post-LP to tame aliasing",
        "Set to 8-12 kHz for most applications",
        "Lower for darker tones",
        "Higher for brighter character"
      ]
    },
    {
      "name": "Filter Resonance",
      "type": "knob",
      "range": "0-100%",
      "default": "0%",
      "description": "Emphasis at filter cutoff frequency - creates resonant peak",
      "use_cases": [
        "Character addition",
        "Frequency emphasis",
        "Vintage simulation",
        "Creative effects",
        "Tone coloring"
      ],
      "ranges": {
        "subtle": "0-20% - Gentle emphasis",
        "moderate": "20-40% - Noticeable peak",
        "extreme": "40-100% - Self-oscillation possible"
      },
      "tips": [
        "Keep below 30% to avoid whistling",
        "Higher values can cause self-oscillation",
        "Use for vintage radio effects",
        "Combine with automation for sweeps"
      ]
    },
    {
      "name": "Filter Position",
      "type": "switch",
      "options": ["Pre", "Post"],
      "default": "Post",
      "description": "Filter placement relative to distortion",
      "modes": {
        "pre": {
          "description": "Filters BEFORE distortion",
          "use_for": "Tone shaping input signal",
          "effect": "Distortion reacts to filtered signal"
        },
        "post": {
          "description": "Filters AFTER distortion",
          "use_for": "Taming harsh artifacts",
          "effect": "Cleans up processed signal"
        }
      },
      "tips": [
        "Use Post for most applications",
        "Use Pre for creative tone shaping",
        "Post-LP is best for taming harshness",
        "Pre changes distortion character"
      ]
    },
    {
      "name": "Mix",
      "type": "knob",
      "range": "0-100%",
      "default": "100%",
      "description": "Dry/wet balance - parallel processing control",
      "use_cases": [
        "Parallel processing",
        "Dynamics preservation",
        "Subtle enhancement",
        "Transparency control",
        "Character blending"
      ],
      "ranges": {
        "parallel": "20-50% - Maintains dynamics",
        "blended": "50-80% - Balanced mix",
        "full": "100% - Complete replacement"
      },
      "tips": [
        "Use 30-50% for parallel drum processing",
        "100% for full effect replacement",
        "Lower values preserve dynamics",
        "Essential for maintaining punch"
      ]
    },
    {
      "name": "Gain",
      "type": "knob",
      "range": "Variable gain control",
      "default": "0 dB",
      "description": "Output level compensation",
      "use_cases": [
        "Level matching",
        "Headroom management",
        "Volume compensation",
        "Gain staging",
        "Output control"
      ],
      "tips": [
        "Bit reduction often reduces perceived loudness",
        "Use to match processed/unprocessed levels",
        "Check levels with bypass comparison",
        "Adjust for consistent output"
      ]
    }
  ],
  
  "parameter_interactions": [
    {
      "parameters": ["Squarize", "Filter Position"],
      "relationship": "High Squarize creates aliasing; use Post-LP filtering to tame",
      "recommendation": "Squarize > 30% → Filter Position: Post-LP"
    },
    {
      "parameters": ["Preserve", "Impact", "Relation"],
      "relationship": "These three work together as a sample selection system",
      "recommendation": "Set Preserve/Impact first, then fine-tune with Relation"
    },
    {
      "parameters": ["Mix", "Gain"],
      "relationship": "Lower Mix often requires higher Gain to match levels",
      "recommendation": "Adjust Gain after setting Mix for consistent output"
    },
    {
      "parameters": ["Resonance", "Frequency"],
      "relationship": "High Resonance creates peaks; set Frequency carefully",
      "recommendation": "Keep Resonance < 30% for most applications"
    },
    {
      "parameters": ["Impact", "Filter Pre"],
      "relationship": "Pre-filtering changes what Impact processes",
      "recommendation": "Use Pre filtering for creative tone shaping before distortion"
    }
  ],
  
  "common_presets": [
    {
      "name": "Crunchy Drum Bus",
      "parameters": {
        "Squarize": "15%",
        "Preserve": "60%",
        "Impact": "40%",
        "Relation": "Centered",
        "Filter_Frequency": "10 kHz",
        "Filter_Resonance": "10%",
        "Filter_Position": "Post-LP",
        "Mix": "35%"
      },
      "use_case": "Parallel drum processing with maintained dynamics"
    },
    {
      "name": "8-Bit Destruction",
      "parameters": {
        "Squarize": "90%",
        "Preserve": "20%",
        "Impact": "80%",
        "Relation": "Favor Impact",
        "Filter_Frequency": "8 kHz",
        "Filter_Resonance": "5%",
        "Filter_Position": "Post-LP",
        "Mix": "100%"
      },
      "use_case": "Extreme digital degradation for retro game sounds"
    },
    {
      "name": "Vintage Radio",
      "parameters": {
        "Squarize": "45%",
        "Preserve": "30%",
        "Impact": "70%",
        "Relation": "Favor Impact",
        "Filter_Frequency": "2.5 kHz",
        "Filter_Resonance": "40%",
        "Filter_Position": "Pre-BP",
        "Mix": "80%"
      },
      "use_case": "Vintage radio simulation with band-pass filtering"
    },
    {
      "name": "Subtle Lo-Fi",
      "parameters": {
        "Squarize": "8%",
        "Preserve": "80%",
        "Impact": "20%",
        "Relation": "Favor Preserve",
        "Filter_Frequency": "15 kHz",
        "Filter_Resonance": "0%",
        "Filter_Position": "Post-LP",
        "Mix": "25%"
      },
      "use_case": "Gentle lo-fi character without losing clarity"
    },
    {
      "name": "Industrial Bass",
      "parameters": {
        "Squarize": "35%",
        "Preserve": "40%",
        "Impact": "60%",
        "Relation": "Centered",
        "Filter_Frequency": "80 Hz",
        "Filter_Resonance": "15%",
        "Filter_Position": "Post-HP",
        "Mix": "60%"
      },
      "use_case": "Adding grit to bass while protecting low end"
    }
  ],
  
  "workflow_recommendations": {
    "drums": {
      "Squarize": "10-25%",
      "Preserve": "50-70%",
      "Mix": "30-50%",
      "notes": "Use parallel processing to maintain punch"
    },
    "synths": {
      "Squarize": "15-40%",
      "Preserve": "40-60%",
      "Mix": "60-100%",
      "notes": "Higher Squarize for retro character"
    },
    "vocals": {
      "Squarize": "5-15%",
      "Preserve": "70-85%",
      "Mix": "20-40%",
      "notes": "Subtle parallel processing for lo-fi character"
    },
    "bass": {
      "Squarize": "10-30%",
      "Preserve": "50-65%",
      "Filter_Position": "Post-HP",
      "notes": "Protect lows with high-pass filtering"
    }
  },
  
  "troubleshooting": [
    {
      "problem": "Sound is too harsh/bright",
      "solution": "Lower Squarize, set Filter to Post-LP, reduce high frequencies"
    },
    {
      "problem": "Losing punch/transients",
      "solution": "Increase Preserve, lower Mix for parallel processing"
    },
    {
      "problem": "Whistling/ringing artifacts",
      "solution": "Lower Filter Resonance below 20%"
    },
    {
      "problem": "Sound getting too quiet",
      "solution": "Increase Gain, check Mix slider isn't too low"
    },
    {
      "problem": "Too muddy/unclear",
      "solution": "Use Filter in Post-HP mode, reduce low-frequency Squarize"
    },
    {
      "problem": "Not enough character",
      "solution": "Increase Squarize and Impact, balance with Preserve"
    }
  ]
}

```

---

## FILE: 02-Data\presets\808-control.json

```json
{
  "presetName": "808 Control",
  "genre": "All Hip-Hop Subgenres",
  "application": "Bass bus compression specifically for 808 control",
  "parameters": {
    "lowBand": {
      "threshold": -16,
      "ratio": 5.0,
      "attack": 8,
      "release": 120,
      "gain": 1.5
    },
    "midBand": {
      "threshold": -20,
      "ratio": 1.2,
      "attack": 15,
      "release": 100,
      "gain": 0
    },
    "highBand": {
      "threshold": -25,
      "ratio": 1.0,
      "attack": 5,
      "release": 60,
      "gain": -1.0
    },
    "crossovers": {
      "lowMid": 250,
      "midHigh": 2000
    },
    "globalSettings": {
      "outputGain": 0,
      "mix": 100
    }
  },
  "description": "Aggressive low-band compression for consistent 808s with minimal mid/high processing",
  "tags": ["808", "bass", "sub", "control", "tight"]
}

```

---

## FILE: 02-Data\presets\electronic-pump.json

```json
{
  "presetName": "Electronic Pump",
  "genre": "Electronic/Experimental Hip-Hop",
  "application": "Heavy compression for pumping, energetic electronic hip-hop",
  "parameters": {
    "lowBand": {
      "threshold": -12,
      "ratio": 6.0,
      "attack": 1,
      "release": 80,
      "gain": 2.0
    },
    "midBand": {
      "threshold": -8,
      "ratio": 4.0,
      "attack": 3,
      "release": 70,
      "gain": 1.5
    },
    "highBand": {
      "threshold": -10,
      "ratio": 3.0,
      "attack": 0.5,
      "release": 50,
      "gain": 1.0
    },
    "crossovers": {
      "lowMid": 120,
      "midHigh": 3500
    },
    "globalSettings": {
      "outputGain": 1.5,
      "mix": 100
    }
  },
  "description": "Aggressive ratios and fast attack for pumping, rhythmic compression effects",
  "tags": ["electronic", "experimental", "pumping", "aggressive", "creative"]
}

```

---

## FILE: 02-Data\presets\melodic-rnb.json

```json
{
  "presetName": "Melodic R&B Polish",
  "genre": "Melodic/R&B Hip-Hop",
  "application": "Smooth, polished production for melodic rap and R&B",
  "parameters": {
    "lowBand": {
      "threshold": -20,
      "ratio": 2.0,
      "attack": 20,
      "release": 150,
      "gain": 0
    },
    "midBand": {
      "threshold": -15,
      "ratio": 1.5,
      "attack": 15,
      "release": 100,
      "gain": 0.5
    },
    "highBand": {
      "threshold": -18,
      "ratio": 1.5,
      "attack": 3,
      "release": 80,
      "gain": 0
    },
    "crossovers": {
      "lowMid": 180,
      "midHigh": 6000
    },
    "globalSettings": {
      "outputGain": 0.3,
      "mix": 85
    }
  },
  "description": "Gentle compression for smooth, transparent sound with vocal clarity",
  "tags": ["melodic", "rnb", "smooth", "vocals", "polished"]
}

```

---

## FILE: 02-Data\presets\moody-trap-master.json

```json
{
  "presetName": "Moody Trap Master",
  "genre": "Moody/Dark Trap",
  "application": "Master bus multiband compression for dark, atmospheric trap beats",
  "parameters": {
    "lowBand": {
      "threshold": -18,
      "ratio": 4.0,
      "attack": 5,
      "release": 100,
      "gain": 0
    },
    "midBand": {
      "threshold": -12,
      "ratio": 2.0,
      "attack": 10,
      "release": 80,
      "gain": 0
    },
    "highBand": {
      "threshold": -15,
      "ratio": 1.5,
      "attack": 1,
      "release": 50,
      "gain": -0.5
    },
    "crossovers": {
      "lowMid": 150,
      "midHigh": 4000
    },
    "globalSettings": {
      "outputGain": 0.5,
      "mix": 100
    }
  },
  "description": "Heavy low-end control for tight 808s, transparent mids for atmosphere, gentle highs for dark aesthetic",
  "tags": ["trap", "moody", "dark", "808s", "master"]
}

```

---

## FILE: 02-Data\presets\preset-library.json

```json
{
  "plugin": "Fruity Squeeze",
  "presets": [
    {
      "name": "Maximum Loudness",
      "category": "Mastering",
      "description": "Aggressive multiband limiting for maximum loudness",
      "settings": {
        "lowMidCrossover": "100 Hz",
        "midHighCrossover": "3 kHz",
        "lowThreshold": "-10 dB",
        "lowRatio": "8:1",
        "lowVolume": "+3 dB",
        "midThreshold": "-12 dB",
        "midRatio": "6:1",
        "midVolume": "+2 dB",
        "highThreshold": "-15 dB",
        "highRatio": "4:1",
        "highVolume": "+1 dB",
        "inputLevel": "0 dB",
        "outputLevel": "+2 dB",
        "dryWet": "100%"
      },
      "useCase": "Final mastering, competitive loudness"
    },
    {
      "name": "Punchy Kick",
      "category": "Drums",
      "description": "Tight, controlled kick drum with enhanced attack",
      "settings": {
        "lowMidCrossover": "80 Hz",
        "midHighCrossover": "3 kHz",
        "lowThreshold": "-8 dB",
        "lowRatio": "10:1",
        "lowVolume": "+4 dB",
        "midThreshold": "-15 dB",
        "midRatio": "3:1",
        "midVolume": "0 dB",
        "highThreshold": "-12 dB",
        "highRatio": "6:1",
        "highVolume": "+2 dB",
        "inputLevel": "+2 dB",
        "outputLevel": "0 dB",
        "dryWet": "100%"
      },
      "useCase": "Individual kick drum processing"
    },
    {
      "name": "Vocal De-Esser",
      "category": "Vocals",
      "description": "Tames sibilance while preserving vocal clarity",
      "settings": {
        "lowMidCrossover": "300 Hz",
        "midHighCrossover": "5 kHz",
        "lowThreshold": "-∞",
        "lowRatio": "1:1",
        "lowVolume": "0 dB",
        "midThreshold": "-18 dB",
        "midRatio": "2:1",
        "midVolume": "0 dB",
        "highThreshold": "-10 dB",
        "highRatio": "8:1",
        "highVolume": "-2 dB",
        "inputLevel": "0 dB",
        "outputLevel": "0 dB",
        "dryWet": "70%"
      },
      "useCase": "Controlling harsh 's' sounds in vocals"
    },
    {
      "name": "Fat Bass",
      "category": "Bass",
      "description": "Thick, sustained bass with harmonic richness",
      "settings": {
        "lowMidCrossover": "120 Hz",
        "midHighCrossover": "2 kHz",
        "lowThreshold": "-10 dB",
        "lowRatio": "6:1",
        "lowVolume": "+3 dB",
        "midThreshold": "-12 dB",
        "midRatio": "8:1",
        "midVolume": "+2 dB",
        "highThreshold": "-∞",
        "highRatio": "1:1",
        "highVolume": "0 dB",
        "inputLevel": "+2 dB",
        "outputLevel": "0 dB",
        "dryWet": "100%"
      },
      "useCase": "Bass guitar, synth bass"
    },
    {
      "name": "Parallel Drum Crush",
      "category": "Drums",
      "description": "New York style parallel compression for drums",
      "settings": {
        "lowMidCrossover": "200 Hz",
        "midHighCrossover": "2.5 kHz",
        "lowThreshold": "-6 dB",
        "lowRatio": "10:1",
        "lowVolume": "+5 dB",
        "midThreshold": "-6 dB",
        "midRatio": "10:1",
        "midVolume": "+5 dB",
        "highThreshold": "-6 dB",
        "highRatio": "10:1",
        "highVolume": "+5 dB",
        "inputLevel": "0 dB",
        "outputLevel": "0 dB",
        "dryWet": "40%"
      },
      "useCase": "Drum bus, full drum mix"
    },
    {
      "name": "808 Sub Control",
      "category": "Bass",
      "description": "Tight, consistent sub-bass without overpowering",
      "settings": {
        "lowMidCrossover": "60 Hz",
        "midHighCrossover": "150 Hz",
        "lowThreshold": "-8 dB",
        "lowRatio": "∞:1",
        "lowVolume": "+2 dB",
        "midThreshold": "-12 dB",
        "midRatio": "6:1",
        "midVolume": "0 dB",
        "highThreshold": "-∞",
        "highRatio": "1:1",
        "highVolume": "0 dB",
        "inputLevel": "0 dB",
        "outputLevel": "0 dB",
        "dryWet": "100%"
      },
      "useCase": "808s, sub-bass synths"
    },
    {
      "name": "Mix Glue",
      "category": "Mastering",
      "description": "Gentle multiband compression for cohesive mix",
      "settings": {
        "lowMidCrossover": "200 Hz",
        "midHighCrossover": "2 kHz",
        "lowThreshold": "-18 dB",
        "lowRatio": "3:1",
        "lowVolume": "+1 dB",
        "midThreshold": "-15 dB",
        "midRatio": "4:1",
        "midVolume": "+1 dB",
        "highThreshold": "-18 dB",
        "highRatio": "2:1",
        "highVolume": "0 dB",
        "inputLevel": "0 dB",
        "outputLevel": "0 dB",
        "dryWet": "85%"
      },
      "useCase": "Master bus, subtle gluing"
    },
    {
      "name": "EDM Drum Smash",
      "category": "Drums",
      "description": "Aggressive, loud drums for EDM/trap",
      "settings": {
        "lowMidCrossover": "100 Hz",
        "midHighCrossover": "4 kHz",
        "lowThreshold": "-6 dB",
        "lowRatio": "10:1",
        "lowVolume": "+5 dB",
        "midThreshold": "-6 dB",
        "midRatio": "8:1",
        "midVolume": "+4 dB",
        "highThreshold": "-6 dB",
        "highRatio": "8:1",
        "highVolume": "+4 dB",
        "inputLevel": "+4 dB",
        "outputLevel": "0 dB",
        "dryWet": "100%"
      },
      "useCase": "EDM, trap, hard-hitting electronic drums"
    },
    {
      "name": "Warm Synth",
      "category": "Synths",
      "description": "Adds analog-style warmth to digital synths",
      "settings": {
        "lowMidCrossover": "250 Hz",
        "midHighCrossover": "2.5 kHz",
        "lowThreshold": "-15 dB",
        "lowRatio": "4:1",
        "lowVolume": "+2 dB",
        "midThreshold": "-12 dB",
        "midRatio": "5:1",
        "midVolume": "+1 dB",
        "highThreshold": "-18 dB",
        "highRatio": "3:1",
        "highVolume": "0 dB",
        "inputLevel": "+3 dB",
        "outputLevel": "0 dB",
        "dryWet": "100%"
      },
      "useCase": "Digital synths, pads, leads"
    },
    {
      "name": "Brighten Mix",
      "category": "Mastering",
      "description": "Adds presence and air to dull mixes",
      "settings": {
        "lowMidCrossover": "200 Hz",
        "midHighCrossover": "3 kHz",
        "lowThreshold": "-∞",
        "lowRatio": "1:1",
        "lowVolume": "0 dB",
        "midThreshold": "-15 dB",
        "midRatio": "3:1",
        "midVolume": "+1 dB",
        "highThreshold": "-12 dB",
        "highRatio": "6:1",
        "highVolume": "+5 dB",
        "inputLevel": "+1 dB",
        "outputLevel": "0 dB",
        "dryWet": "100%"
      },
      "useCase": "Dull recordings, lack of high-end"
    },
    {
      "name": "Tighten Bass Mix",
      "category": "Mastering",
      "description": "Controls boomy low-end without losing power",
      "settings": {
        "lowMidCrossover": "150 Hz",
        "midHighCrossover": "2 kHz",
        "lowThreshold": "-10 dB",
        "lowRatio": "8:1",
        "lowVolume": "+1 dB",
        "midThreshold": "-15 dB",
        "midRatio": "4:1",
        "midVolume": "0 dB",
        "highThreshold": "-∞",
        "highRatio": "1:1",
        "highVolume": "0 dB",
        "inputLevel": "0 dB",
        "outputLevel": "0 dB",
        "dryWet": "100%"
      },
      "useCase": "Boomy mixes, muddy low-end"
    },
    {
      "name": "Cymbal Control",
      "category": "Drums",
      "description": "Tames harsh cymbals and hi-hats",
      "settings": {
        "lowMidCrossover": "300 Hz",
        "midHighCrossover": "6 kHz",
        "lowThreshold": "-∞",
        "lowRatio": "1:1",
        "lowVolume": "0 dB",
        "midThreshold": "-∞",
        "midRatio": "1:1",
        "midVolume": "0 dB",
        "highThreshold": "-12 dB",
        "highRatio": "8:1",
        "highVolume": "-3 dB",
        "inputLevel": "0 dB",
        "outputLevel": "0 dB",
        "dryWet": "70%"
      },
      "useCase": "Overly bright cymbals, harsh hi-hats"
    }
  ]
}

```

---

## FILE: 02-Data\presets\upbeat-bounce.json

```json
{
  "presetName": "Upbeat Bounce",
  "genre": "Upbeat Hip-Hop",
  "application": "Energetic beats with consistent punch and movement",
  "parameters": {
    "lowBand": {
      "threshold": -15,
      "ratio": 3.0,
      "attack": 10,
      "release": 120,
      "gain": 0.5
    },
    "midBand": {
      "threshold": -10,
      "ratio": 2.5,
      "attack": 5,
      "release": 90,
      "gain": 1.0
    },
    "highBand": {
      "threshold": -12,
      "ratio": 2.0,
      "attack": 1,
      "release": 60,
      "gain": 0.5
    },
    "crossovers": {
      "lowMid": 200,
      "midHigh": 5000
    },
    "globalSettings": {
      "outputGain": 1.0,
      "mix": 100
    }
  },
  "description": "Moderate compression across all bands for consistent energy and forward momentum",
  "tags": ["upbeat", "energetic", "bounce", "club", "master"]
}

```

---

## FILE: 02-Data\rules\mixing-rules.json

```json
{
  "plugin": "Fruity Squeeze",
  "mixingRules": [
    {
      "rule": "Lower threshold = more compression",
      "category": "Fundamentals",
      "explanation": "Threshold sets where compression begins. Lower values mean more of the signal exceeds the threshold and gets compressed.",
      "example": "-6 dB threshold compresses more signal than -18 dB threshold"
    },
    {
      "rule": "Higher ratio = more aggressive compression",
      "category": "Fundamentals",
      "explanation": "Ratio controls how much the signal is reduced above the threshold. Higher ratios create more dramatic compression.",
      "example": "10:1 ratio is much more aggressive than 3:1"
    },
    {
      "rule": "Compensate gain reduction with volume boost",
      "category": "Gain Staging",
      "explanation": "Heavy compression reduces overall level. Increase the band's volume parameter to restore loudness.",
      "example": "8:1 ratio at -10 dB threshold often needs +3 to +5 dB volume boost"
    },
    {
      "rule": "Match input and output levels when A/B comparing",
      "category": "Gain Staging",
      "explanation": "Louder sounds better. Match output to input level to make fair comparisons of compression quality.",
      "example": "If compression makes signal quieter, boost output level to match bypass level"
    },
    {
      "rule": "Higher input = more harmonic distortion",
      "category": "Character",
      "explanation": "Fruity Squeeze is a waveshaper. Driving the input harder creates more harmonic coloration.",
      "example": "+4 dB input adds grit and warmth; 0 dB input is cleaner"
    },
    {
      "rule": "Use dry/wet for parallel compression",
      "category": "Technique",
      "explanation": "Blending compressed and dry signals preserves natural dynamics while adding density.",
      "example": "40% wet = aggressive compression on 40%, natural dynamics on 60%"
    },
    {
      "rule": "Set crossovers based on source material",
      "category": "Crossovers",
      "explanation": "Different instruments have energy in different frequency ranges. Adjust crossovers accordingly.",
      "example": "Kick drum: 80 Hz crossover isolates sub-thump; Vocals: 300 Hz keeps low-mids with body"
    },
    {
      "rule": "Lower low/mid crossover = more isolated bass",
      "category": "Crossovers",
      "explanation": "Moving the low/mid crossover down isolates more sub-bass frequencies for independent processing.",
      "example": "60 Hz crossover = tight sub control; 300 Hz crossover = fuller, warmer bass"
    },
    {
      "rule": "Lower mid/high crossover = brighter sound",
      "category": "Crossovers",
      "explanation": "Moving the mid/high crossover down puts more frequencies in the high band, which can then be boosted.",
      "example": "1.5 kHz crossover = more frequencies in bright range; 5 kHz crossover = darker overall"
    },
    {
      "rule": "Bypass bands you don't need to process",
      "category": "Efficiency",
      "explanation": "Set threshold to -∞ to bypass a band. Only process what needs processing.",
      "example": "Vocal de-essing: bypass low and mid, only compress highs"
    },
    {
      "rule": "Heavy low compression prevents bass from eating headroom",
      "category": "Mastering",
      "explanation": "Bass frequencies contain a lot of energy. Compress them heavily to free up headroom for other elements.",
      "example": "Mastering: 8:1 low ratio creates space for louder mid/high content"
    },
    {
      "rule": "Light high compression preserves clarity",
      "category": "Mastering",
      "explanation": "Over-compressing highs creates harshness and fatigue. Use lower ratios on high band.",
      "example": "High band at 2:1–4:1 keeps air and detail; 10:1 sounds harsh"
    },
    {
      "rule": "Solo bands to hear processing individually",
      "category": "Workflow",
      "explanation": "Listen to each band in isolation to understand what each band is doing.",
      "example": "Bypass mid and high to hear only low band compression"
    },
    {
      "rule": "Use volume knobs for tonal shaping",
      "category": "Tone Shaping",
      "explanation": "Band volume controls reshape tonal balance after compression. Boost bands you want louder.",
      "example": "Boost high volume +3 dB for brighter sound; reduce for darker tone"
    },
    {
      "rule": "∞:1 ratio = brick-wall limiter",
      "category": "Limiting",
      "explanation": "Infinite ratio prevents any signal from exceeding the threshold. Hard limiting.",
      "example": "Low band at ∞:1 and -8 dB threshold prevents bass from ever exceeding -8 dB"
    },
    {
      "rule": "Waveshaping adds odd-order harmonics",
      "category": "Character",
      "explanation": "Fruity Squeeze is not a clean compressor. It adds harmonic distortion, especially odd harmonics.",
      "example": "Gentle 3rd and 5th harmonics add warmth; excessive adds harshness"
    },
    {
      "rule": "No attack/release = instant response",
      "category": "Behavior",
      "explanation": "Fruity Squeeze reacts instantly to signal changes. Great for fast transients, but no musical pumping.",
      "example": "Perfect for controlling drum hits; less natural on sustained vocals"
    },
    {
      "rule": "Adjust crossovers if bands sound unbalanced",
      "category": "Troubleshooting",
      "explanation": "If one band dominates or sounds isolated, move the crossover points.",
      "example": "Muddy low-mids? Raise low/mid crossover to 300 Hz"
    },
    {
      "rule": "Use moderate ratios for transparency",
      "category": "Subtlety",
      "explanation": "Ratios between 2:1 and 4:1 provide control without obvious compression artifacts.",
      "example": "Mix glue: all bands at 3:1–4:1 for cohesion without squashing"
    },
    {
      "rule": "Aggressive settings for EDM/electronic, gentle for acoustic",
      "category": "Genre",
      "explanation": "Electronic music tolerates heavy compression and distortion. Acoustic music needs lighter touch.",
      "example": "EDM drums: 10:1 ratios; Jazz: 2:1–3:1 ratios"
    },
    {
      "rule": "Watch gain reduction meters for feedback",
      "category": "Workflow",
      "explanation": "Visual meters show how much compression is happening per band. Adjust based on meter activity.",
      "example": "If low band meter constantly maxed, threshold is too low or ratio too high"
    },
    {
      "rule": "Use on individual tracks AND mix bus",
      "category": "Workflow",
      "explanation": "Fruity Squeeze works well on individual instruments (kick, bass, vocals) and full mixes (mastering).",
      "example": "Heavy on kick drum for punch, light on master for glue"
    },
    {
      "rule": "Parallel compression = aggressive settings + dry/wet blend",
      "category": "Technique",
      "explanation": "Crush the signal hard (low threshold, high ratio) then blend with dry signal for natural dynamics.",
      "example": "All bands at 10:1, then set dry/wet to 30–50%"
    },
    {
      "rule": "De-essing: high band only, moderate-to-heavy ratio",
      "category": "Vocals",
      "explanation": "Control sibilance by compressing only the high band (5–8 kHz) with 6:1–10:1 ratio.",
      "example": "Mid/high crossover at 5 kHz, high threshold -10 dB, ratio 8:1"
    },
    {
      "rule": "Bass control: low band heavy, mid/high light",
      "category": "Bass",
      "explanation": "Compress bass frequencies aggressively, leave harmonics relatively dynamic.",
      "example": "Low at 8:1, mid at 3:1, high bypassed or 2:1"
    },
    {
      "rule": "Check mix in context after processing",
      "category": "Workflow",
      "explanation": "Always listen to processed track in full mix. Solo can be misleading.",
      "example": "Kick might sound over-compressed solo but perfect in mix"
    },
    {
      "rule": "Less is often more with multiband compression",
      "category": "Philosophy",
      "explanation": "Multiband compression is powerful. Easy to overdo. Start subtle, add more if needed.",
      "example": "Try 3:1 ratios first; increase to 6:1 only if not enough control"
    },
    {
      "rule": "Use Fruity Squeeze for color, traditional compressor for transparency",
      "category": "Tool Selection",
      "explanation": "Fruity Squeeze adds harmonic character. Use when you want coloration or speed.",
      "example": "Clean vocal compression: use standard compressor; aggressive drum crush: use Fruity Squeeze"
    }
  ]
}

```

---

## FILE: 03-Workflows\by-goal\8-bit-sound-creation.md

```markdown
# 8-Bit Sound Creation

## Goal
Transform modern audio into authentic retro video game sounds with extreme bit reduction and digital artifacts.

## When to Use
- Chiptune and 8-bit music production
- Retro video game sound effects
- Nostalgic/vintage electronic music
- Creative lo-fi textures
- Glitch and experimental sound design

## The Setup

### Core 8-Bit Settings
`\`\`
Squarize: 85-95%
Preserve: 15-25%
Impact: 75-85%
Relation: Favor Impact (75% right)
Filter Frequency: 6-8 kHz (Post-LP)
Filter Resonance: 5-10%
Mix: 100%
Gain: +4 to +6 dB
`\`\`

## Understanding 8-Bit Sound

### What Makes It "8-Bit"?
1. **Severe bit depth reduction:** Limited resolution creates stepped waveforms
2. **Heavy aliasing:** Digital artifacts that sound "wrong" but nostalgic
3. **Loss of dynamic range:** Extreme compression of dynamics
4. **Harmonic distortion:** Non-musical harmonics from quantization
5. **Limited frequency response:** Missing high and low frequencies

### Fruity Squeeze's Role
- **Squarize:** Reduces bit depth (mimics old ADCs)
- **Puncher:** Adds sample-based distortion (mimics cheap DACs)
- **Filter:** Removes frequencies beyond vintage system capabilities

## Step-by-Step Process

### Step 1: Extreme Bit Reduction
1. Set Squarize to 85%
2. Play your audio
3. **Listen for:** Severe "stepping" and digital artifacts
4. **Adjust:** 80% (less extreme) to 95% (most extreme)

**What you're hearing:** The bit depth is so low that the waveform is "quantized" into discrete steps, like early video game hardware.

### Step 2: Aggressive Puncher Settings
1. Set Preserve to 20%
2. Set Impact to 80%
3. Set Relation to favor Impact
4. **Result:** Most samples are replaced with heavily distorted versions

**Why this works:** Mimics the aggressive sample replacement of old sound chips.

### Step 3: Frequency Limitation
1. Enable Post-LP filtering
2. Set Frequency to 6-8 kHz
3. Keep Resonance low (5-10%)
4. **Purpose:** Old systems couldn't reproduce high frequencies

**Historical accuracy:** NES/Game Boy maxed out around 5-8 kHz

### Step 4: Full Wet Mix
- Set Mix to 100%
- This is a destructive effect—we want full replacement
- No parallel processing for authentic 8-bit

### Step 5: Gain Compensation
- Increase Gain by +4 to +6 dB
- Extreme bit reduction severely reduces perceived loudness
- Match to original level for fair comparison

## Source Material Considerations

### Best Sources for 8-Bit Conversion

#### Synth Leads/Arps
- **Settings:** Squarize 90%, Impact 80%
- Simple waveforms (square/saw) convert best
- Complex wavetables create interesting artifacts

#### Drum Loops
- **Settings:** Squarize 85%, Preserve 25% (keep some transients)
- Kicks become punchy, lo-fi thumps
- Snares get crunchy, distorted snap

#### Chord Stabs
- **Settings:** Squarize 88%, Filter @ 7 kHz
- Rich chords create complex aliasing (cool textures)

#### Bass Lines
- **Settings:** Squarize 80%, Post-HP @ 100 Hz (protect lows)
- Less extreme to maintain low-end presence

### Problematic Sources
- **Complex vocals:** Usually sound unintelligible (can be a feature!)
- **Acoustic instruments:** Lose too much character (unless that's the goal)
- **Wide stereo content:** Collapse to mono for authenticity

## System-Specific Emulations

### NES (Nintendo Entertainment System)
`\`\`
Squarize: 85%
Preserve: 20%
Impact: 80%
Filter: Post-LP @ 8 kHz, Res 8%
Character: Crunchy, bright, limited range
`\`\`
**Pro Tip:** Add subtle PWM modulation to synths before Squeeze

### Game Boy (Original)
`\`\`
Squarize: 90%
Preserve: 15%
Impact: 85%
Filter: Post-LP @ 6 kHz, Res 5%
Character: Dark, crunchy, severe limitations
`\`\`
**Pro Tip:** Lower filter cutoff for authentic muddiness

### Sega Genesis/Mega Drive
`\`\`
Squarize: 70%
Preserve: 30%
Impact: 70%
Filter: Post-LP @ 10 kHz, Res 10%
Character: Less crunchy, more hi-fi than NES/GB
`\`\`
**Pro Tip:** Less extreme settings for "16-bit" sound

### Commodore 64 (SID Chip)
`\`\`
Squarize: 75%
Preserve: 25%
Impact: 75%
Filter: Post-LP @ 9 kHz, Res 25%
Character: Distinctive resonant filtering
`\`\`
**Pro Tip:** Higher resonance for classic SID character

### Atari 2600
`\`\`
Squarize: 95%
Preserve: 10%
Impact: 90%
Filter: Post-LP @ 5 kHz, Res 5%
Character: Most extreme, very lo-fi
`\`\`
**Pro Tip:** Push Squarize to maximum for authentic Atari harshness

## Genre-Specific 8-Bit Styles

### Chiptune/8-Bit Music
- Full destruction (Squarize 90%+)
- Monophonic melodies for authenticity
- Simple, punchy drums
- Arpeggiated chords (like hardware limitations)

### Lo-Fi Hip-Hop (8-Bit Influenced)
- Moderate destruction (Squarize 60-75%)
- Higher Preserve (35-45%) to keep some fidelity
- Apply to samples, not full mix
- Blend with clean elements

### Glitch/Experimental
- Maximum destruction (Squarize 95%)
- Automate Preserve/Impact for evolving textures
- Use on unexpected sources (vocals, acoustics)
- Layer with clean signals for contrast

### Vaporwave/Future Funk
- Medium destruction (Squarize 50-70%)
- Apply to specific elements (not full mix)
- Blend with reverb/delay for dreamlike quality
- Use for nostalgic callbacks

## Advanced 8-Bit Techniques

### Dynamic 8-Bit Conversion
Automate Squarize for evolving degradation:
- **Intro:** Squarize 0% (clean)
- **Build:** Squarize 20% → 80% (progressive crush)
- **Drop:** Squarize 90% (full 8-bit)
- **Outro:** Squarize 90% → 0% (return to clarity)

### Frequency-Specific 8-Bit
Use Patcher to split frequency bands:
- **Lows (< 200 Hz):** Squarize 50% (protect bass)
- **Mids (200 Hz - 2 kHz):** Squarize 90% (full crush)
- **Highs (> 2 kHz):** Filtered out completely
**Result:** Punchy lows, crunchy mids, no highs (like real hardware)

### Layered 8-Bit Processing
Layer multiple instances with different extremes:
- **Layer 1:** Squarize 95%, Mix 60%
- **Layer 2:** Squarize 70%, Mix 40%
**Result:** Complex, stratified digital artifacts

### Rhythmic 8-Bit Glitching
Use LFO to modulate Squarize rhythmically:
- Assign LFO to Squarize (0% to 90%)
- Set LFO to 1/16 note rhythm
- Creates rhythmic digital glitching
**Perfect for:** Breakdowns and build-ups

## Enhancing 8-Bit Sounds

### Pre-Processing (Before Squeeze)
- **Simplify waveform:** Use simple synth shapes (square, saw)
- **Monophonic melodies:** More authentic to old hardware
- **Transient shaping:** Enhance attack for punchier 8-bit

### Post-Processing (After Squeeze)
- **Additional filtering:** Use Parametric EQ 2 to shape
- **Stereo widening:** Subtle widening (old systems were mono)
- **Reverb:** Short, lo-fi reverb for space
- **Bit depth reduction:** Additional bit crusher in series for more extreme effect

### Parallel Blending (Optional)
For "modern 8-bit" hybrid sounds:
- Main chain: Full 8-bit settings (Mix 100%)
- Parallel chain: Clean signal
- Blend: 80% 8-bit / 20% clean
**Result:** Maintains some fidelity while preserving character

## Common Issues & Fixes

### Problem: Sound is too harsh/painful
**Fix:**
- Lower Filter cutoff to 6 kHz or below
- Reduce Filter Resonance to 0-5%
- Lower Squarize slightly (85% instead of 95%)

### Problem: Losing all low-end punch
**Fix:**
- Use Post-HP filtering to protect subs
- Lower Squarize on bass elements (70-80%)
- Consider multiband approach (protect lows)

### Problem: Too much aliasing noise
**Fix:**
- Lower Filter cutoff (5-7 kHz)
- Reduce Impact slightly (75% instead of 85%)
- Use Parametric EQ after to notch out harsh frequencies

### Problem: Effect sounds too modern/clean
**Fix:**
- Increase Squarize to 90-95%
- Lower Preserve to 10-15%
- Favor Impact more aggressively in Relation
- Lower Filter cutoff to 6 kHz or below

### Problem: Unintelligible audio
**Fix:**
- This is often desired for 8-bit! But if not:
- Increase Preserve to 30-40%
- Lower Squarize to 75-85%
- Increase Filter cutoff to 8-10 kHz

## Integration with Other Plugins

### Fruity Chorus (Before Squeeze)
- Adds analog-style modulation
- Thickens sound before crushing
- Use subtle settings

### Fruity WaveShaper (After Squeeze)
- Additional harmonic distortion
- Use for even more aggressive crushing
- Stack effects for extreme results

### Parametric EQ 2 (After Squeeze)
- Notch out harsh aliasing frequencies
- Boost/cut for character
- Shape final tone

### Gross Beat (After Squeeze)
- Time manipulation of 8-bit sounds
- Glitch effects on crushed audio
- Perfect for experimental production

## Export Considerations

### For Chiptune Production
- Export at 44.1 kHz (standard for most DAWs)
- Consider downsampling to 22.05 kHz for more authentic aliasing
- Add subtle dithering if exporting at 16-bit

### For Modern Production
- Keep at project sample rate (48 kHz typical)
- Export with headroom (-3 dB to -6 dB peak)
- Maintain 24-bit or 32-bit float for further processing

## Authenticity vs. Musicality

### Historically Accurate 8-Bit
- Extreme settings (Squarize 90%+)
- Low filter cutoff (5-7 kHz)
- Mono output
- No reverb/delay (or very short)
- Limited dynamic range

### Modern "8-Bit Inspired"
- Moderate settings (Squarize 60-80%)
- Higher filter cutoff (8-12 kHz)
- Stereo width (subtle)
- Modern effects (reverb, delay)
- More dynamic range

**Choose based on your goal:** Authentic chiptune or modern lo-fi aesthetic?

## Final Pro Tips

1. **Reference real hardware:** Listen to actual NES/Game Boy music for accuracy
2. **Less is more (sometimes):** Squarize at 80% can sound better than 95%
3. **Layer with clean:** Blend 8-bit with clean elements for hybrid sounds
4. **Automate for movement:** Static 8-bit can get boring—automate parameters
5. **Embrace artifacts:** Aliasing and distortion are features, not bugs
6. **Save presets:** Create system-specific presets for quick recall
7. **Experiment with sources:** Try unexpected inputs for unique textures

---

**Remember:** Authentic 8-bit is about limitation and character. Embrace the harshness, aliasing, and digital artifacts—that's what makes it nostalgic!

```

---

## FILE: 03-Workflows\by-goal\controlling-808s.md

```markdown
# Controlling 808s with Fruity Squeeze

## Objective
Achieve consistent, tight 808 bass that sits perfectly in the mix without overpowering or getting lost.

## When to Use This Workflow
- Inconsistent 808 velocity across notes
- 808s overwhelming the mix on certain notes
- Need to glue 808s with kick drums
- Creating space for vocals and melodic elements

## Step-by-Step Process

### 1. Insert on Bass Bus
Route all bass elements (808s, sub-bass) to a dedicated bus and insert Fruity Squeeze.

### 2. Set Crossover Points
- **Low/Mid Crossover**: 250 Hz (isolate sub frequencies)
- **Mid/High Crossover**: 2 kHz (keep 808 harmonics separate)

### 3. Configure Low Band (Main Focus)
- **Threshold**: -16 dB (catches most 808 hits)
- **Ratio**: 4:1 to 6:1 (moderate to aggressive)
- **Attack**: 5-10ms (preserves transient punch)
- **Release**: 100-150ms (follows 808 decay naturally)
- **Gain**: +1 to +2 dB (compensate for compression)

### 4. Configure Mid Band (Light Touch)
- **Threshold**: -20 dB (only compress peaks)
- **Ratio**: 1.5:1 (very gentle)
- **Attack**: 15ms
- **Release**: 100ms
- **Gain**: 0 dB

### 5. Configure High Band (Minimal)
- **Threshold**: -25 dB (barely compressing)
- **Ratio**: 1:1 to 1.2:1
- **Attack**: 5ms
- **Release**: 60ms
- **Gain**: -1 dB (reduce brightness if needed)

### 6. Fine-Tune by Genre

**Moody/Dark Trap**
- Higher ratio (6:1) for extremely tight control
- Lower threshold (-18 dB) to compress more
- Longer release (150ms) for smooth tail

**Upbeat/Energetic**
- Medium ratio (4:1) for punch with control
- Moderate threshold (-15 dB)
- Medium release (120ms)

**Melodic/R&B**
- Lower ratio (2.5:1) for natural feel
- Higher threshold (-20 dB) to compress less
- Longer attack (15ms) to preserve musicality

**Electronic/Experimental**
- Extreme ratio (8:1+) for heavy compression
- Very low threshold (-12 dB)
- Fast attack (1-3ms) for aggressive sound

### 7. A/B Testing
- Bypass Fruity Squeeze to compare
- Check consistency across different notes
- Ensure low-end doesn't overwhelm when layered with kick

### 8. Output Gain Compensation
Add output gain to match bypassed level, then add 0.5-1 dB for presence.

## Common Adjustments

### 808s Sound Weak
- Increase low-band gain
- Lower threshold to compress more
- Increase ratio for more consistent level

### 808s Sound Lifeless
- Faster attack to preserve transient
- Lower ratio for more dynamics
- Reduce amount of compression (higher threshold)

### 808s Clash with Kick
- Sidechain low band to kick
- Adjust crossover point to separate frequencies
- Use faster attack for quicker ducking

## Pro Tips for Hip-Hop

1. **Layer with Kick**: Use parallel compression on 808 bus for extra thickness
2. **Automate Threshold**: Lower threshold during verses, raise during chorus for dynamic variation
3. **Monitor in Mono**: Check low-end consistency in mono to ensure translation
4. **Reference Tracks**: Compare your 808 level/consistency to professional references
5. **Room for Vocals**: Leave 3-6 dB headroom between compressed 808 and vocal fundamental

## Genre-Specific Settings Summary

| Genre | Ratio | Threshold | Attack | Release |
|-------|-------|-----------|--------|---------|
| Moody Trap | 6:1 | -18 dB | 5ms | 150ms |
| Upbeat | 4:1 | -15 dB | 10ms | 120ms |
| Melodic | 2.5:1 | -20 dB | 15ms | 140ms |
| Electronic | 8:1 | -12 dB | 1ms | 80ms |

```

---

## FILE: 03-Workflows\by-goal\crunchy-drum-bus.md

```markdown
# Crunchy Drum Bus Processing

## Goal
Add analog-style grit and character to drum groups while maintaining punch and transients.

## When to Use
- Electronic drums need more character
- Clean samples sound too sterile
- Need lo-fi hip-hop drum textures
- Want "sampled from vinyl" vibe
- Mixing modern drums with vintage sounds

## The Setup

### Routing
1. Create a send track or bus for your drum group
2. Add Fruity Squeeze as an insert effect
3. OR use Squeeze directly on drum bus with parallel Mix setting

### Core Settings
`\`\`
Squarize: 15%
Preserve: 60%
Impact: 40%
Relation: Centered
Filter Frequency: 10 kHz (Post-LP)
Filter Resonance: 10%
Mix: 35%
Gain: +2 dB (compensate for perceived volume loss)
`\`\`

## Step-by-Step Process

### Step 1: Set Up Parallel Processing
- **Why parallel?** Maintains original transients while adding crushed character
- Set Mix to 30-40% initially
- Keep dry signal punchy, add Squeeze for body

### Step 2: Dial In Bit Reduction
- Start with Squarize at 0%
- Slowly increase to 10-20%
- **Listen for:** Subtle digital "crunch" on snare hits
- **Stop when:** You hear character without harshness

### Step 3: Balance Preserve/Impact
- Set Preserve to 60% (keeps transients clean)
- Set Impact to 40% (adds crushed body/tail)
- Relation centered (balanced character)
- **Result:** Kick/snare attacks stay punchy, tails get crunchy

### Step 4: Tame High-End Artifacts
- Enable Post-LP filtering
- Set Frequency to 8-12 kHz
- Resonance at 5-10% (minimal)
- **Why:** Bit reduction creates aliasing; filtering prevents harshness

### Step 5: Fine-Tune Mix
- A/B between 25%, 35%, and 50% Mix
- **25%:** Subtle enhancement
- **35%:** Noticeable character (sweet spot)
- **50%:** Aggressive lo-fi
- Adjust to taste for your track

### Step 6: Level Match
- Bypass Squeeze and note perceived loudness
- Increase Gain to match processed volume
- **Important:** Bit reduction often reduces perceived loudness

## Genre-Specific Variations

### Lo-Fi Hip-Hop
`\`\`
Squarize: 20%
Preserve: 55%
Impact: 45%
Mix: 40%
Filter: Post-LP @ 9 kHz, Res 5%
`\`\`
**Character:** Warm, vinyl-sampled vibe

### Trap/Modern Hip-Hop
`\`\`
Squarize: 10%
Preserve: 70%
Impact: 30%
Mix: 25%
Filter: Post-LP @ 12 kHz, Res 8%
`\`\`
**Character:** Subtle grit, maintains punch

### Electronic/IDM
`\`\`
Squarize: 18%
Preserve: 50%
Impact: 50%
Relation: Slight favor to Impact
Mix: 45%
Filter: Post-LP @ 10 kHz, Res 12%
`\`\`
**Character:** Digital crunch, noticeable artifacts

### House/Techno
`\`\`
Squarize: 12%
Preserve: 65%
Impact: 35%
Mix: 30%
Filter: Post-LP @ 11 kHz, Res 6%
`\`\`
**Character:** Warmth and body without losing clarity

## Element-Specific Tips

### Kick Drums
- Keep Preserve high (65-75%) to maintain sub presence
- Use Post-HP filtering at 30-50 Hz if low-end gets muddy
- Lower Mix (20-30%) for subtle enhancement

### Snare/Claps
- Preserve at 55-65% maintains snap
- Squarize adds body to the tail
- Can push Mix higher (40-50%) for more character

### Hi-Hats/Cymbals
- Be careful with high Squarize (creates harshness)
- Use aggressive Post-LP filtering (8-10 kHz)
- Keep Mix lower (20-30%) to avoid brittle sound

### Toms/Percussion
- Benefit from higher Impact (45-55%)
- Preserve transients with 60%+ Preserve
- Squarize adds texture to resonance

## Common Issues & Fixes

### Problem: Kick loses punch
**Cause:** Too much Impact, Preserve too low
**Fix:** 
- Increase Preserve to 70%
- Lower Mix to 25%
- Consider sidechain filtering (use Patcher + EQ before Squeeze)

### Problem: Cymbals sound harsh/brittle
**Cause:** High-frequency aliasing from Squarize
**Fix:**
- Lower Squarize to 10-12%
- Set Filter to Post-LP at 8 kHz
- Reduce Filter Resonance to 0-5%

### Problem: Effect is too subtle
**Cause:** Mix too low, Squarize too conservative
**Fix:**
- Increase Squarize to 18-22%
- Push Mix to 40-50%
- Increase Impact to 50%

### Problem: Drums sound muddy
**Cause:** Low-frequency bit reduction
**Fix:**
- Use Post-HP filtering at 80-100 Hz
- Lower Impact in low frequencies
- Consider multiband routing (Patcher)

### Problem: Losing dynamics
**Cause:** Mix too high, parallel processing lost
**Fix:**
- Reduce Mix to 25-35%
- Increase Preserve to 70%
- Use true parallel routing (send track)

## Advanced Techniques

### Multiband Squeeze
1. Route drums through Patcher
2. Split into Low/Mid/High bands
3. Apply different Squeeze settings per band:
   - **Lows:** Squarize 5%, high Preserve (protect kick)
   - **Mids:** Squarize 20%, balanced Preserve/Impact (snare body)
   - **Highs:** Squarize 10%, heavy Post-LP filtering (tame cymbals)

### Dynamic Squeeze Automation
- **Intro:** Mix at 20% (subtle)
- **Verse:** Mix at 35% (noticeable)
- **Chorus:** Mix at 50% (aggressive lo-fi)
- **Breakdown:** Mix at 0% (clean contrast)
- Creates evolving texture throughout the track

### Layered Parallel Processing
Use two instances:
- **Instance 1 (Transient Layer):**
  - Squarize: 5%
  - Preserve: 90%
  - Mix: 20%
  - Preserves punch
- **Instance 2 (Body Layer):**
  - Squarize: 25%
  - Impact: 70%
  - Mix: 30%
  - Adds crushed character

### Genre-Switching Presets
Save snapshots for different sections:
- **Clean Section:** Bypass or Mix 0%
- **Lo-Fi Section:** Mix 50%, Squarize 25%
- **Hybrid Section:** Mix 35%, Squarize 15%
- Automate between them for dynamic arrangements

## Integration with Other Effects

### Before Squeeze
- **Compression:** Control dynamics before adding grit
- **Transient Shaper:** Enhance/reduce attack before processing
- **EQ:** Remove problem frequencies before bit reduction

### After Squeeze
- **Parametric EQ 2:** Surgical cleanup of harsh frequencies
- **Limiter:** Catch any peaks from aliasing artifacts
- **Reverb/Delay:** Add space to the crushed drums

### Parallel Chain
Run Squeeze in parallel with:
- Clean compression (maintain dynamics)
- Saturation (add different harmonic character)
- Reverb (blend crushed dry with clean space)

## A/B Comparison Checklist

When dialing in your settings, compare:
- [ ] Bypassed vs. processed (is it better?)
- [ ] Mix at 0% vs. current setting (right amount?)
- [ ] Squarize at 0% vs. current (just enough grit?)
- [ ] Preserve/Impact balance (maintaining punch?)
- [ ] Filter on vs. off (taming harshness?)
- [ ] Gain matched (same perceived loudness?)

## Export/Rendering Considerations

When bouncing drums with Squeeze:
- Check for clipping from aliasing artifacts
- Compare processed vs. unprocessed in full mix context
- Consider bouncing with headroom (leave ~3 dB for mastering)
- Save preset for recall if revisions needed

## Recommended Chain

`\`\`
[Drums Bus] 
    → Compression (glue/control)
    → EQ (corrective)
    → Fruity Squeeze (character)
    → Parametric EQ 2 (surgical cleanup)
    → Limiter (safety/ceiling)
    → [Mix Bus]
`\`\`

## Final Pro Tips

1. **Less is more:** Start with subtle settings, increase as needed
2. **A/B constantly:** Bypass frequently to ensure you're adding value
3. **Save presets:** Once you find a sound, save it for future projects
4. **Gain stage:** Always match levels when comparing processed/unprocessed
5. **Trust your ears:** If it sounds good, it is good—specs don't matter

---

**Remember:** The goal is character, not destruction. Keep drums punchy and musical while adding that crushed, lo-fi vibe.

```

---

## FILE: 03-Workflows\by-goal\mastering-glue.md

```markdown
# Mastering Glue with Fruity Squeeze

## Objective
Create cohesion and polish on the master bus without squashing dynamics or losing energy.

## When to Use This Workflow
- Mix elements feel disconnected
- Need subtle "finished" sound
- Final polish before limiting
- Controlling frequency-specific dynamics

## Step-by-Step Process

### 1. Insert on Master Bus
Place Fruity Squeeze before your final limiter, after EQ and other mastering effects.

### 2. Genre-Specific Crossover Settings

**Moody/Dark Trap**
- Low/Mid: 150 Hz
- Mid/High: 4 kHz
- (Emphasizes sub/bass control, darker top-end)

**Upbeat/Bounce**
- Low/Mid: 200 Hz
- Mid/High: 5 kHz
- (Balanced, energetic response)

**Melodic/R&B**
- Low/Mid: 180 Hz
- Mid/High: 6 kHz
- (Warmer, more air in high frequencies)

**Funky/Boom-Bap**
- Low/Mid: 220 Hz
- Mid/High: 4.5 kHz
- (Classic vintage frequency balance)

**Electronic/Experimental**
- Low/Mid: 120 Hz
- Mid/High: 3.5 kHz
- (Extended sub, aggressive mid/high split)

### 3. Start with Gentle Settings

**All Bands Initial Settings**
- **Threshold**: -15 to -20 dB
- **Ratio**: 1.5:1 to 2:1
- **Attack**: 10-30ms
- **Release**: 80-150ms
- **Gain**: 0 dB

### 4. Configure Each Band by Priority

**Low Band (Sub/Bass)**
- Most critical for hip-hop
- **Threshold**: -18 dB
- **Ratio**: 2.5:1 to 3:1
- **Attack**: 15-20ms (preserve kick punch)
- **Release**: 120-150ms (follow bass decay)

**Mid Band (Body/Vocals)**
- Affects vocal presence most
- **Threshold**: -15 dB
- **Ratio**: 1.5:1 to 2:1
- **Attack**: 20-30ms (preserve transients)
- **Release**: 100-120ms

**High Band (Air/Brightness)**
- Most transparent, least compression
- **Threshold**: -12 to -15 dB
- **Ratio**: 1.2:1 to 1.5:1
- **Attack**: 5-10ms (control harsh transients)
- **Release**: 80-100ms

### 5. Genre-Specific Adjustments

**Moody/Dark Trap**
- **Low**: Ratio 3:1, Threshold -18 dB (tight bass control)
- **Mid**: Ratio 2:1, Threshold -12 dB (preserve atmosphere)
- **High**: Ratio 1.3:1, Threshold -15 dB, Gain -0.5 dB (darker aesthetic)

**Upbeat/Energetic**
- **Low**: Ratio 2.5:1, Threshold -15 dB (punchy low-end)
- **Mid**: Ratio 2:1, Threshold -10 dB (forward energy)
- **High**: Ratio 1.8:1, Threshold -12 dB (bright, present)

**Melodic/R&B**
- **Low**: Ratio 2:1, Threshold -20 dB (subtle, natural)
- **Mid**: Ratio 1.5:1, Threshold -15 dB (vocal clarity)
- **High**: Ratio 1.5:1, Threshold -18 dB (silky smooth)

**Electronic/Experimental**
- **Low**: Ratio 4:1, Threshold -12 dB (aggressive)
- **Mid**: Ratio 3:1, Threshold -8 dB (pumping)
- **High**: Ratio 2.5:1, Threshold -10 dB (energetic)

### 6. Critical Listening Checks
- **A/B with bypass**: Should sound more cohesive, not quieter
- **Check transients**: Snares and kicks should still punch
- **Vocal clarity**: Vocals shouldn't get buried
- **Low-end control**: Bass should be tight but not thin
- **Overall energy**: Should feel polished, not lifeless

### 7. Fine-Tuning
- Adjust individual band gains to balance frequency spectrum
- Use slower release for smoother, less noticeable compression
- Reduce ratio if losing too much dynamic range
- Increase threshold if squashing too much

### 8. Output Gain Staging
- Match bypassed level first
- Add 0.3-0.8 dB for perceived loudness without clipping

## Common Issues & Solutions

### Lost Punch
- Increase attack times (30ms+)
- Reduce ratios to 1.5:1 or lower
- Raise thresholds to compress less

### Too Bright/Harsh
- Reduce high-band gain by -0.5 to -1 dB
- Increase high-band threshold
- Lower high-band ratio to 1.2:1

### Muddy Low-End
- Lower low/mid crossover point
- Increase low-band ratio to 3:1+
- Faster attack on low band (10-15ms)

### Lifeless Mix
- Increase all attack times
- Reduce all ratios by 0.5
- Use parallel processing (mix at 70-85%)

## Advanced Techniques

### Parallel Multiband Compression
Set mix to 70-80% for NY-style parallel compression effect.

### Dynamic Crossover Movement
Automate crossover points for different song sections (verse vs. chorus).

### Band-Specific Sidechaining
Sidechain mid-band to vocal for automatic ducking.

### Upward Compression Emulation
Use very low threshold with low ratio to bring up quiet parts.

## Final Mastering Chain Position
Typical order:
1. Subtractive EQ
2. **Fruity Squeeze** ← You are here
3. Additive EQ (if needed)
4. Stereo imaging
5. Final limiter

## Settings Reference Card

| Genre | Low Ratio | Mid Ratio | High Ratio | Low/Mid X | Mid/High X |
|-------|-----------|-----------|------------|-----------|------------|
| Moody | 3:1 | 2:1 | 1.3:1 | 150 Hz | 4 kHz |
| Upbeat | 2.5:1 | 2:1 | 1.8:1 | 200 Hz | 5 kHz |
| Melodic | 2:1 | 1.5:1 | 1.5:1 | 180 Hz | 6 kHz |
| Electronic | 4:1 | 3:1 | 2.5:1 | 120 Hz | 3.5 kHz |

```

---

## FILE: 03-Workflows\by-goal\maximum-loudness-workflow.md

```markdown
# Maximum Loudness Workflow

## Goal
Achieve competitive loudness for mastering or mix bus processing without destroying dynamics or creating excessive distortion.

---

## Prerequisites
- Well-balanced mix with good headroom (-6 dB or more)
- No clipping on master bus
- Proper gain staging throughout mix

---

## Step-by-Step Workflow

### 1. Insert Fruity Squeeze on Master Bus
- Place after EQ but before limiter (if using one)
- Bypass initially to establish baseline

### 2. Set Crossover Points
- **Low/Mid Crossover**: 100–150 Hz
  - Why: Isolates bass for independent heavy compression
- **Mid/High Crossover**: 2.5–3 kHz
  - Why: Separates body from presence/air

### 3. Configure Low Band (Bass)
1. **Threshold**: Start at -12 dB
2. **Ratio**: 6:1–8:1
3. **Volume**: +2 to +4 dB
4. Listen: Bass should be tight, controlled, not boomy

**Why heavy low compression?**
- Bass frequencies contain massive energy
- Compressing them frees headroom for other elements
- Creates perceived loudness without actually increasing peak level

### 4. Configure Mid Band (Body/Presence)
1. **Threshold**: -12 to -15 dB
2. **Ratio**: 4:1–6:1
3. **Volume**: +1 to +3 dB
4. Listen: Mids should be dense, present, not thin

**Why moderate mid compression?**
- Most musical information lives here
- Too much = lifeless, too little = inconsistent
- Adds density and "glue"

### 5. Configure High Band (Clarity/Air)
1. **Threshold**: -15 to -18 dB
2. **Ratio**: 2:1–4:1
3. **Volume**: 0 to +2 dB
4. Listen: Highs should be controlled but not dull

**Why light high compression?**
- Over-compressed highs = harshness and fatigue
- High frequencies need air and space
- Transparency is key here

### 6. Adjust Input Level
- Start at 0 dB
- Increase to +1 to +3 dB for extra drive/warmth
- Don't exceed +4 dB unless you want aggressive distortion

### 7. Set Output Level
1. Check output meter
2. Adjust output level to match input level (for fair comparison)
3. Bypass and A/B compare
4. Aim for 2–4 dB louder than bypassed signal

### 8. Fine-Tune Per Band
**Solo each band and listen:**
- **Low**: Should be tight, punchy, controlled
- **Mid**: Should have body and density
- **High**: Should have clarity without harshness

**Adjust volume knobs to taste:**
- More bass? Boost low volume
- More presence? Boost mid volume
- Brighter? Boost high volume

### 9. Check for Artifacts
Listen for:
- ❌ Pumping/breathing (shouldn't happen with waveshaper, but check anyway)
- ❌ Excessive distortion (especially in mids/highs)
- ❌ Loss of transients (kick/snare punch)
- ❌ Muddiness (too much low-mid compression)

### 10. Compare Bypassed vs. Processed
1. Loop a representative section
2. Bypass Fruity Squeeze
3. Match perceived loudness (turn down monitor if needed)
4. Listen for:
   - ✅ Increased density
   - ✅ Better tonal balance
   - ✅ Louder perceived level
   - ❌ Loss of dynamics (if too much, reduce ratios)

### 11. Optional: Add Limiter After
- If still not loud enough, add a limiter after Fruity Squeeze
- Fruity Limiter or Maximus works well
- Set ceiling to -0.3 dB
- Gain reduction should be minimal (2–3 dB max)

---

## Recommended Settings (Starting Point)

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 120 Hz |
| Mid/High Crossover | 2.8 kHz |
| Low Threshold | -12 dB |
| Low Ratio | 7:1 |
| Low Volume | +3 dB |
| Mid Threshold | -13 dB |
| Mid Ratio | 5:1 |
| Mid Volume | +2 dB |
| High Threshold | -16 dB |
| High Ratio | 3:1 |
| High Volume | +1 dB |
| Input Level | +1 dB |
| Output Level | +2 dB |
| Dry/Wet | 100% |

---

## Common Mistakes to Avoid

❌ **Over-compressing highs** → Creates fatigue and harshness  
❌ **Threshold too low** → Squashes everything, no dynamics left  
❌ **Forgetting volume compensation** → Processed sounds quieter than bypass  
❌ **Not checking in context** → Solo sounds great, mix sounds squashed  
❌ **Ignoring crossover points** → Generic settings don't fit your mix  

---

## Genre-Specific Adjustments

### EDM/Electronic
- More aggressive low compression (10:1+)
- Higher input gain (+3 to +5 dB)
- Brighter high band (+3 dB volume)

### Hip-Hop/Trap
- Heavy low compression for 808s (8:1–10:1)
- Lower low/mid crossover (80–100 Hz)
- Moderate mid compression for vocals (5:1)

### Rock/Pop
- Balanced compression across all bands (4:1–6:1)
- Standard crossovers (150 Hz, 2.5 kHz)
- Light high compression to preserve cymbals

### Acoustic/Jazz
- Gentle ratios (2:1–4:1)
- Higher thresholds (-18 dB or higher)
- Minimal input gain (0 to +1 dB)

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Not loud enough | Increase ratios, lower thresholds, boost volumes |
| Sounds distorted | Reduce input gain, lower ratios, raise thresholds |
| Bass too boomy | Raise low/mid crossover to 150–200 Hz |
| Lacks clarity | Boost high volume or lower mid/high crossover |
| Sounds lifeless | Reduce ratios, raise thresholds, use dry/wet blend |
| Harsh highs | Reduce high volume or increase high threshold |

---

## Final Check

Before bouncing:
1. ✅ A/B with reference track of similar genre
2. ✅ Check on multiple playback systems (headphones, speakers, phone)
3. ✅ Verify no clipping on output meter
4. ✅ Confirm dynamics aren't completely destroyed (some transients should remain)
5. ✅ Listen to full track from start to finish

---

## Advanced Tip: Parallel Processing

For even more control:
1. Duplicate master bus to two channels
2. Process one with aggressive Fruity Squeeze settings
3. Leave other clean
4. Blend to taste (usually 30–50% compressed)

This preserves more natural dynamics while still adding loudness and density.

```

---

## FILE: 03-Workflows\by-goal\vintage-radio-effect.md

```markdown
# Vintage Radio Effect

## Goal
Create authentic AM/FM radio, walkie-talkie, or telephone transmission effects using bit reduction and aggressive filtering.

## When to Use
- Lo-fi hip-hop production (radio interludes)
- Cinematic sound design (communication scenes)
- Transition effects between sections
- Vintage aesthetic in modern music
- Vocal processing for character
- Sound effects for games/film

## The Setup

### Core Radio Settings
`\`\`
Squarize: 40-50%
Preserve: 25-35%
Impact: 65-75%
Relation: Favor Impact (65% right)
Filter Frequency: 2-3 kHz (Band-Pass)
Filter Resonance: 30-45%
Mix: 70-100%
Gain: +3 to +5 dB
`\`\`

## Understanding Radio Sound

### What Makes Radio Sound Like Radio?

1. **Limited bandwidth:** AM/FM transmissions cut lows and highs
2. **Compression:** Heavy broadcast compression flattens dynamics
3. **Distortion:** Transmission artifacts and interference
4. **Noise:** Static, hiss, electromagnetic interference
5. **Resonance:** Speaker/receiver coloration

### Fruity Squeeze's Role
- **Squarize:** Transmission degradation and artifacts
- **Filter:** Bandwidth limitation (most important!)
- **Puncher:** Sample distortion mimicking poor receivers
- **Resonance:** Speaker coloration

## Radio Types & Settings

### AM Radio (1930s-1950s)
`\`\`
Squarize: 55%
Preserve: 20%
Impact: 80%
Relation: Favor Impact
Filter: Band-Pass @ 1.5-3 kHz, Res 40%
Mix: 100%
`\`\`
**Character:** Tinny, narrow, heavy distortion
**Use for:** Vintage broadcasts, old recordings

### FM Radio (1960s-1980s)
`\`\`
Squarize: 35%
Preserve: 40%
Impact: 60%
Relation: Balanced
Filter: Band-Pass @ 2-5 kHz, Res 25%
Mix: 90%
`\`\`
**Character:** Clearer than AM, still limited bandwidth
**Use for:** Retro radio references, less extreme

### Walkie-Talkie / CB Radio
`\`\`
Squarize: 50%
Preserve: 25%
Impact: 75%
Relation: Favor Impact
Filter: Band-Pass @ 1-2.5 kHz, Res 45%
Mix: 100%
`\`\`
**Character:** Harsh, compressed, "over" sound
**Use for:** Military/police comms, two-way radio

### Telephone (Landline)
`\`\`
Squarize: 40%
Preserve: 30%
Impact: 70%
Relation: Slight favor to Impact
Filter: Band-Pass @ 300 Hz-3.4 kHz, Res 20%
Mix: 95%
`\`\`
**Character:** Narrow bandwidth, recognizable voice
**Use for:** Phone conversation effects

### Transistor Radio (Portable)
`\`\`
Squarize: 45%
Preserve: 30%
Impact: 70%
Relation: Favor Impact
Filter: Band-Pass @ 2-4 kHz, Res 35%
Mix: 100%
`\`\`
**Character:** Tinny, distorted, low-fi speaker coloration
**Use for:** Beach radio, vintage portable sound

### Intercom / PA System
`\`\`
Squarize: 38%
Preserve: 35%
Impact: 65%
Relation: Balanced
Filter: Band-Pass @ 500 Hz-4 kHz, Res 30%
Mix: 90%
`\`\`
**Character:** Slightly muffled, public address sound
**Use for:** Announcement effects, store intercom

## Step-by-Step Process

### Step 1: Set Up Band-Pass Filtering
**This is the most important step for radio sound!**

1. Enable the internal filter
2. Set to Band-Pass mode (or use Pre/Post creatively)
3. Set Frequency to 2-3 kHz (center of speech intelligibility)
4. **Result:** Removes lows and highs, leaving narrow midrange

**Why it works:** Real radios have limited speaker/transmission range—this mimics that physical limitation.

### Step 2: Add Bit Reduction
1. Set Squarize to 40-50%
2. **Listen for:** Digital artifacts and transmission "crunch"
3. **Adjust:** Lower for cleaner radio, higher for degraded

**What it mimics:** Transmission degradation, poor signal quality, interference.

### Step 3: Aggressive Puncher Settings
1. Set Preserve to 25-35%
2. Set Impact to 65-75%
3. Favor Impact in Relation
4. **Result:** Aggressive sample replacement for distorted character

**Why it works:** Mimics poor receivers and overdriven transmitters.

### Step 4: Emphasize Resonance
1. Set Filter Resonance to 30-45%
2. **Listen for:** "Tinny" speaker coloration
3. **Adjust:** Higher for smaller speakers, lower for larger

**What it mimics:** Cheap speaker resonance, radio cabinet coloration.

### Step 5: Full or Near-Full Mix
- Set Mix to 70-100%
- This is usually a replacement effect, not parallel
- Lower Mix (70-80%) for "radio in the distance"
- Full Mix (100%) for direct transmission

### Step 6: Compensate Gain
- Increase Gain +3 to +5 dB
- Bandwidth limitation reduces perceived loudness
- Match to original for fair comparison

## Source Material Considerations

### Best Sources

#### Vocals
- **Perfect for radio effects**
- Speech intelligibility remains even with extreme processing
- Use for: Interludes, radio announcements, phone conversations

#### Speech/Dialog
- **Ideal use case**
- Narrow midrange keeps words clear
- Use for: Film/game dialog, storytelling elements

#### Music (Full Mix)
- **Works well for lo-fi aesthetic**
- Sounds like "music playing through a radio"
- Use for: Lo-fi hip-hop, transition effects

#### Individual Instruments
- **Less common but creative**
- Guitar through "radio amp" effect
- Keys/synths for vintage tone

### Problematic Sources
- **Basslines:** Bandwidth limiting removes fundamental (use sparingly)
- **Kick drums:** Lose impact without low frequencies
- **Cymbals/Hi-hats:** Filtered out entirely (can be desirable)

## Advanced Techniques

### Dynamic Radio Tuning
Automate Filter Frequency for "tuning in" effect:
`\`\`
Start: 500 Hz (off-station static)
Middle: 2.5 kHz (tuning in)
End: 2.5 kHz (locked on)
`\`\`
**Combined with:** Noise/static layer for realism

### Distance Simulation
Use Mix automation for radio "in another room":
- **Close:** Mix 100%, full effect
- **Medium:** Mix 60%, blend with reverb
- **Far:** Mix 40%, add room reverb, lower volume

### Signal Degradation
Automate Squarize for poor reception:
`\`\`
Good signal: Squarize 30%
Interference: Squarize 60%
Lost signal: Squarize 80% + automation bursts
`\`\`

### Stereo to Mono Conversion
Real radios are often mono. For authenticity:
1. Route to Fruity Stereo Shaper before Squeeze
2. Set to mono (0% width)
3. Apply Squeeze
4. **Result:** Authentic mono radio sound

### "Radio Switch-On" Effect
Automate multiple parameters:
`\`\`
0:00 - Off (Mix 0%, muted)
0:01 - Static (Squarize 80%, noise layer)
0:02 - Tuning (Filter Frequency sweep)
0:03 - Locked (Settings stabilize)
`\`\`

## Layering Additional Elements

### Static/Noise Layer
Add white/pink noise:
1. Noise generator → same radio filtering
2. Layer at -20 to -30 dB under main signal
3. **Result:** Authentic transmission noise

### Interference/Hum
Add 50/60 Hz tone:
1. Subtle sine wave at electrical frequency
2. Layer at -35 to -40 dB
3. **Result:** AC hum from old equipment

### Crackle/Vinyl Noise
For vintage broadcasts:
1. Vinyl crackle sample or generator
2. Filter to same bandwidth as main signal
3. Layer subtly for texture

## Genre-Specific Applications

### Lo-Fi Hip-Hop
`\`\`
Use for: Intro/outro, transition between sections
Settings: FM Radio preset (less extreme)
Additional: Layer with vinyl crackle
Mix: 80% (blend with clean elements)
`\`\`

### Cinematic/Film
`\`\`
Use for: Dialog scenes, period pieces, communication
Settings: Walkie-talkie or AM radio (depending on era)
Additional: Foley layers (button clicks, static bursts)
Mix: 100% (replace clean dialog)
`\`\`

### Electronic/Experimental
`\`\`
Use for: Creative vocal processing, textural elements
Settings: Extreme settings, automate for movement
Additional: Granular synthesis, reverb
Mix: Variable automation
`\`\`

### Vaporwave/Future Funk
`\`\`
Use for: Nostalgic callbacks, sample processing
Settings: FM Radio preset (1980s aesthetic)
Additional: Reverb, chorus for dreamlike quality
Mix: 70-90% (blend with other processing)
`\`\`

## Integration with Other Plugins

### Before Squeeze

**Compression:**
- Heavy compression (4:1 to 10:1 ratio)
- Mimics broadcast compression
- Flattens dynamics like real radio

**EQ (Pre-shaping):**
- Boost 1-3 kHz (speech intelligibility)
- Cut below 100 Hz and above 8 kHz
- Prepares signal for radio processing

**De-esser (for vocals):**
- Tame harsh sibilants before distortion
- Prevents excessive harshness

### After Squeeze

**Parametric EQ 2:**
- Notch out harsh resonances
- Further shape bandwidth
- Clean up artifacts

**Reverb (optional):**
- Short room reverb for "radio in a space"
- Subtle settings (decay 0.3-0.8s)
- Creates distance

**Noise/Static Layer:**
- Add realism with subtle noise
- Filter noise to same bandwidth
- Adjust level to taste

**Fruity Limiter:**
- Catch any peaks
- Further compress dynamics
- Mimics broadcast limiting

## Troubleshooting

### Problem: Vocals are unintelligible
**Fix:**
- Widen filter bandwidth (1-4 kHz range)
- Lower Squarize (30-40%)
- Increase Preserve (35-45%)

### Problem: Not enough "radio" character
**Fix:**
- Increase Filter Resonance (35-50%)
- Narrow filter bandwidth (2-3 kHz peak)
- Increase Impact (75-80%)

### Problem: Too harsh/painful
**Fix:**
- Lower Filter Resonance (20-30%)
- Reduce Squarize (30-40%)
- Use Parametric EQ after to notch harsh frequencies

### Problem: Sounds too modern/clean
**Fix:**
- Increase Squarize (50-60%)
- Favor Impact more in Relation
- Add noise/static layers
- Convert to mono

### Problem: Losing too much low-end
**Fix:**
- This is often desired for radio! But if not:
- Widen filter bandwidth (include 200-500 Hz)
- Use less extreme filtering
- Blend with clean signal (Mix 70-80%)

## Preset Variations

### "Radio Station Broadcast"
`\`\`
Squarize: 35%
Preserve: 40%
Impact: 60%
Filter: BP @ 2-5 kHz, Res 25%
Mix: 90%
Additional: Compression before Squeeze
`\`\`

### "Distressed Walkie-Talkie"
`\`\`
Squarize: 60%
Preserve: 20%
Impact: 80%
Filter: BP @ 1-2 kHz, Res 50%
Mix: 100%
Additional: Static noise layer, automation bursts
`\`\`

### "Old Telephone Call"
`\`\`
Squarize: 45%
Preserve: 30%
Impact: 70%
Filter: BP @ 300 Hz-3 kHz, Res 20%
Mix: 95%
Additional: Subtle 50/60 Hz hum
`\`\`

### "Portable Transistor Radio"
`\`\`
Squarize: 48%
Preserve: 28%
Impact: 72%
Filter: BP @ 2-4 kHz, Res 40%
Mix: 100%
Additional: Mono conversion, room reverb
`\`\`

## Final Pro Tips

1. **Bandwidth is key:** Filtering is more important than bit reduction for radio sound
2. **Add realism:** Layer noise, static, and hum for authenticity
3. **Automate for movement:** Static radio sounds are boring—add tuning/interference
4. **Convert to mono:** Most radios are mono—this adds authenticity
5. **Compress first:** Heavy compression before Squeeze mimics broadcast chain
6. **Reference real radios:** Listen to actual AM/FM broadcasts for accuracy
7. **Less resonance for clarity:** High resonance is cool but can hurt intelligibility
8. **Blend when appropriate:** Not all radio effects need 100% Mix

---

**Remember:** The goal is recognizable, characterful radio sound—not total destruction. Keep speech/music intelligible unless going for extreme degradation!

```

---

## FILE: 03-Workflows\by-goal\vocal-processing-workflow.md

```markdown
# Vocal Processing Workflow

## Goal
Control vocal dynamics, tame sibilance, and add presence using Fruity Squeeze's multiband waveshaping.

---

## When to Use Fruity Squeeze on Vocals

**Good for:**
- ✅ De-essing (controlling harsh "s" sounds)
- ✅ Adding edge and presence via harmonic distortion
- ✅ Fast sibilance control
- ✅ Aggressive vocal compression (rap, EDM vocals)

**Not ideal for:**
- ❌ Transparent, natural vocal compression (use standard compressor)
- ❌ Smooth, musical dynamics control
- ❌ Subtle envelope shaping

---

## Step-by-Step Workflow

### 1. Prepare Your Vocal
- Remove DC offset if present
- Apply high-pass filter (80–100 Hz) to remove rumble
- Ensure no clipping or distortion in recording

### 2. Insert Fruity Squeeze
- Place after EQ and before reverb/delay
- Can be used in series with traditional compressor:
  - Standard compressor → smooth dynamics
  - Fruity Squeeze → de-essing and character

### 3. Set Crossover Points

**For De-Essing (Primary Goal)**
- **Low/Mid Crossover**: 300–400 Hz
  - Keeps body and warmth together
- **Mid/High Crossover**: 4.5–6 kHz
  - Isolates sibilance range

**For General Compression**
- **Low/Mid Crossover**: 250–300 Hz
  - Separates chest resonance from presence
- **Mid/High Crossover**: 2.5–3.5 kHz
  - Separates body from air/brilliance

### 4. Configure Low Band
**For De-Essing Setup:**
- **Threshold**: -∞ (bypass)
- **Ratio**: 1:1
- **Volume**: 0 dB

**For General Compression:**
- **Threshold**: -∞ (bypass) or -20 dB (very light)
- **Ratio**: 2:1–3:1
- **Volume**: 0 dB

**Why bypass/light on lows?**
- Vocal fundamentals are mostly in mid range
- Over-compressing lows creates muddiness

### 5. Configure Mid Band (Presence/Body)

**For De-Essing Setup:**
- **Threshold**: -18 to -20 dB
- **Ratio**: 2:1–3:1
- **Volume**: 0 to +1 dB

**For General Compression:**
- **Threshold**: -15 to -18 dB
- **Ratio**: 3:1–5:1
- **Volume**: +1 to +2 dB

**Why compress mids?**
- Most vocal energy lives here
- Creates even, present vocal tone
- Adds slight harmonic richness

### 6. Configure High Band (Sibilance Control)

**For De-Essing Setup:**
- **Threshold**: -8 to -12 dB
- **Ratio**: 6:1–10:1
- **Volume**: -2 to -3 dB

**For General Compression:**
- **Threshold**: -15 to -18 dB
- **Ratio**: 4:1–6:1
- **Volume**: 0 to +1 dB

**Why aggressive high compression?**
- Sibilance peaks are much louder than vocal body
- High ratio = de-essing effect
- Lower volume reduces overall harshness

### 7. Adjust Input and Output
- **Input**: 0 to +1 dB (don't overdrive vocals)
- **Output**: Match to bypass level for comparison
- Higher input adds grit (good for aggressive rap/EDM vocals)

### 8. Fine-Tune with Dry/Wet

**For transparent de-essing:**
- Set dry/wet to 60–80%
- Preserves natural vocal dynamics

**For aggressive compression:**
- Keep dry/wet at 100%
- Full processing for maximum control

### 9. Listen and Adjust
**What to listen for:**
- ✅ Even loudness across phrases
- ✅ Reduced sibilance (not completely removed)
- ✅ Clear, present vocal
- ❌ Lisp or muffled "s" sounds (too much high compression)
- ❌ Thin or hollow tone (too much mid compression)

### 10. A/B Compare
1. Bypass Fruity Squeeze
2. Listen to sibilant phrases ("sister," "sing," "six")
3. Re-enable and compare
4. Sibilance should be tamed but still audible

---

## Recommended Settings

### De-Essing Setup

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 350 Hz |
| Mid/High Crossover | 5.5 kHz |
| Low Threshold | -∞ (bypass) |
| Low Ratio | 1:1 |
| Low Volume | 0 dB |
| Mid Threshold | -18 dB |
| Mid Ratio | 2:1 |
| Mid Volume | +1 dB |
| High Threshold | -10 dB |
| High Ratio | 8:1 |
| High Volume | -2 dB |
| Input Level | 0 dB |
| Output Level | 0 dB |
| Dry/Wet | 70% |

### General Vocal Compression

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 280 Hz |
| Mid/High Crossover | 3 kHz |
| Low Threshold | -∞ (bypass) |
| Low Ratio | 1:1 |
| Low Volume | 0 dB |
| Mid Threshold | -15 dB |
| Mid Ratio | 4:1 |
| Mid Volume | +2 dB |
| High Threshold | -15 dB |
| High Ratio | 5:1 |
| High Volume | +1 dB |
| Input Level | 0 dB |
| Output Level | 0 dB |
| Dry/Wet | 100% |

### Aggressive Rap/EDM Vocal

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 300 Hz |
| Mid/High Crossover | 3.5 kHz |
| Low Threshold | -∞ (bypass) |
| Low Ratio | 1:1 |
| Low Volume | 0 dB |
| Mid Threshold | -10 dB |
| Mid Ratio | 6:1 |
| Mid Volume | +3 dB |
| High Threshold | -12 dB |
| High Ratio | 6:1 |
| High Volume | +2 dB |
| Input Level | +2 dB |
| Output Level | 0 dB |
| Dry/Wet | 100% |

---

## Common Vocal Issues and Solutions

### Problem: Sibilance Too Harsh

**Solution:**
- Lower high band volume (-3 to -4 dB)
- Increase high band ratio (8:1–10:1)
- Lower mid/high crossover to 4.5–5 kHz
- Increase high threshold to compress less

### Problem: Vocal Sounds Lifeless

**Solution:**
- Reduce mid band ratio (2:1–3:1)
- Raise mid threshold (-20 dB or higher)
- Use dry/wet blend (60–80%)
- Lower input gain to reduce distortion

### Problem: Vocal Lacks Presence

**Solution:**
- Boost mid band volume (+2 to +3 dB)
- Lower mid band threshold (-12 to -15 dB)
- Increase mid band ratio slightly (5:1)

### Problem: Thin or Hollow Sound

**Solution:**
- Don't compress low band (set to -∞)
- Raise low/mid crossover to 300–400 Hz
- Reduce mid compression (higher threshold or lower ratio)

### Problem: Muffled "S" Sounds (Over-De-essing)

**Solution:**
- Raise high band threshold (-15 dB or higher)
- Reduce high band ratio (4:1–6:1)
- Increase high band volume (0 dB or higher)
- Use dry/wet blend (50–60%)

---

## Signal Chain Recommendation

**Optimal order for vocal processing:**
1. High-pass filter (EQ)
2. De-esser (Fruity Squeeze or dedicated)
3. Standard compressor (smooth dynamics)
4. EQ (tone shaping)
5. Saturation/exciter (optional)
6. Reverb/Delay (sends)

**Alternate order (Fruity Squeeze for character):**
1. High-pass filter
2. Standard compressor
3. Fruity Squeeze (de-essing + character)
4. EQ
5. Reverb/Delay

---

## Genre-Specific Tips

### Pop Vocals
- Light-to-moderate compression (3:1–5:1)
- Standard crossovers (280 Hz, 3 kHz)
- Transparent settings, minimal distortion

### Rap/Hip-Hop
- Moderate-to-heavy compression (5:1–8:1)
- Boost mid volume for presence (+2 to +3 dB)
- Input gain +1 to +2 dB for edge

### EDM/Electronic
- Aggressive compression (6:1–10:1)
- Heavy de-essing (high ratio 8:1+)
- Input gain +2 to +4 dB for distortion/grit

### Rock/Metal
- Moderate compression (4:1–6:1)
- Control harshness with high band
- Preserve aggression (don't over-compress)

---

## Workflow Checklist

Before finalizing vocal:
- ✅ De-essing effective but not excessive
- ✅ Even loudness across all phrases
- ✅ Natural sibilance still present
- ✅ Vocal sits well in mix (not too loud or quiet)
- ✅ No pumping or breathing artifacts
- ✅ Harmonic distortion is musical (if desired)
- ✅ A/B compared with bypass

---

## Advanced Tip: Dual-Stage Processing

For maximum control:
1. **First stage**: Traditional compressor (e.g., Fruity Compressor)
   - Smooth, transparent dynamic control
   - Attack: 10–30 ms, Release: 100–200 ms
   - Ratio: 3:1–4:1
2. **Second stage**: Fruity Squeeze
   - De-essing only (high band compression)
   - Add character with input gain

This combines the musicality of traditional compression with the precision of multiband de-essing.

```

---

## FILE: 03-Workflows\by-instrument\bass-workflow.md

```markdown
# Bass Guitar/Synth Bass Processing

## Goal
Achieve thick, sustained bass with harmonic richness and consistent low-end.

---

## Step-by-Step Workflow

### 1. Insert Fruity Squeeze on Bass Track
- Works for bass guitar, synth bass, 808s
- Place after distortion/saturation but before spatial effects

### 2. Set Crossover Points

**Low/Mid Crossover: 100–150 Hz**
- **100–120 Hz**: Tighter, more isolated sub-bass
- **130–150 Hz**: Fuller, warmer bass with harmonics included

**Mid/High Crossover: 1.5–2.5 kHz**
- **1.5–2 kHz**: Brighter, more presence
- **2–2.5 kHz**: Warmer, less aggressive

### 3. Process Low Band (Fundamental/Sub)

**Settings:**
- **Threshold**: -10 to -12 dB
- **Ratio**: 6:1–10:1
- **Volume**: +2 to +4 dB

**Why:**
- Creates tight, consistent low-end foundation
- Prevents bass from overpowering mix
- Sustains notes evenly

### 4. Process Mid Band (Harmonics/Presence)

**Settings:**
- **Threshold**: -10 to -12 dB
- **Ratio**: 6:1–10:1
- **Volume**: +2 to +3 dB

**Why:**
- Most audible "bass tone" lives here
- Heavy compression adds harmonic richness
- Waveshaping creates grit and definition

### 5. Process High Band (Brightness/Attack)

**Settings:**
- **Threshold**: -∞ (bypass) or -18 dB
- **Ratio**: 2:1–4:1 (if not bypassed)
- **Volume**: 0 dB or -1 dB

**Why:**
- Bass typically doesn't need high compression
- Bypass preserves natural pick/finger attack
- Light compression if bass is very bright

### 6. Drive Input for Grit

**Settings:**
- **Input Level**: +1 to +3 dB

**Why:**
- Adds harmonic distortion for "modern" bass tone
- Creates warmth and saturation
- +2 dB is sweet spot for most basses

### 7. Adjust Output
- Match to input level
- Usually +1 to +2 dB after processing

### 8. Check in Mix Context
- Solo bass with kick drum
- Ensure bass doesn't mask kick or vice versa
- Adjust crossovers if needed

---

## Recommended Settings

### Standard Bass Guitar

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 130 Hz |
| Mid/High Crossover | 2 kHz |
| Low Threshold | -11 dB |
| Low Ratio | 7:1 |
| Low Volume | +3 dB |
| Mid Threshold | -11 dB |
| Mid Ratio | 8:1 |
| Mid Volume | +2 dB |
| High Threshold | -∞ (bypass) |
| High Ratio | 1:1 |
| High Volume | 0 dB |
| Input Level | +2 dB |
| Output Level | +1 dB |

### Synth Bass (Modern/EDM)

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 120 Hz |
| Mid/High Crossover | 2.5 kHz |
| Low Threshold | -10 dB |
| Low Ratio | 8:1 |
| Low Volume | +4 dB |
| Mid Threshold | -10 dB |
| Mid Ratio | 10:1 |
| Mid Volume | +3 dB |
| High Threshold | -18 dB |
| High Ratio | 3:1 |
| High Volume | +1 dB |
| Input Level | +3 dB |
| Output Level | +1 dB |

### 808/Sub-Bass

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 80 Hz |
| Mid/High Crossover | 150 Hz |
| Low Threshold | -8 dB |
| Low Ratio | ∞:1 (limiter) |
| Low Volume | +4 dB |
| Mid Threshold | -12 dB |
| Mid Ratio | 6:1 |
| Mid Volume | +2 dB |
| High Threshold | -∞ (bypass) |
| High Ratio | 1:1 |
| High Volume | 0 dB |
| Input Level | +1 dB |
| Output Level | +1 dB |

### Warm/Vintage Bass

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 150 Hz |
| Mid/High Crossover | 2 kHz |
| Low Threshold | -12 dB |
| Low Ratio | 5:1 |
| Low Volume | +2 dB |
| Mid Threshold | -12 dB |
| Mid Ratio | 6:1 |
| Mid Volume | +2 dB |
| High Threshold | -∞ (bypass) |
| High Ratio | 1:1 |
| High Volume | 0 dB |
| Input Level | +2 dB |
| Output Level | +1 dB |

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Bass too boomy | Lower low/mid crossover to 100–120 Hz; increase low ratio |
| Lacks definition | Boost mid volume; increase mid ratio |
| Too bright/harsh | Lower high volume or bypass high band |
| Sounds thin | Raise low/mid crossover to 150 Hz; boost low volume |
| Inconsistent notes | Lower thresholds; increase ratios |
| Too distorted | Reduce input gain; lower ratios |

---

## Integration with Kick Drum

### Kick/Bass Frequency Management

**Option 1: Separate Ranges**
- **Kick**: Focus 60–80 Hz (sub-thump)
- **Bass**: Focus 100–200 Hz (body/warmth)
- Set bass low/mid crossover at 100–120 Hz
- Minimal low-end overlap

**Option 2: Shared Low-End**
- **Kick + Bass**: Both occupy 60–100 Hz
- Use sidechain compression (separate plugin) to duck bass when kick hits
- Fruity Squeeze controls bass consistency between kicks

---

## Genre-Specific Tips

### Hip-Hop/Trap
- Heavy low limiting (∞:1) for 808s
- Lower crossover (80 Hz) for sub isolation
- Moderate input gain (+2 dB)

### Rock/Metal
- Balanced low/mid compression (6:1–8:1)
- Crossover around 130–150 Hz
- Input gain +1 to +2 dB for warmth

### EDM/House
- Aggressive compression (8:1–10:1)
- Lower crossover (100–120 Hz) for punch
- Higher input gain (+3 dB) for grit

### Funk/R&B
- Moderate compression (5:1–7:1)
- Higher crossover (140–160 Hz) for fullness
- Light input gain (+1 dB) for cleaner tone

### Jazz/Acoustic
- Light compression (4:1–6:1)
- Higher crossover (150 Hz+) for natural warmth
- Minimal input gain (0 to +1 dB)

---

## Advanced Techniques

### Parallel Bass Processing
1. Duplicate bass track
2. Process one with aggressive Fruity Squeeze (10:1 ratios, +4 dB input)
3. Leave other clean or lightly compressed
4. Blend for controlled aggression

### Multiband Saturation
- Use input gain to drive harmonic distortion
- Mid band creates most audible harmonics
- Experiment with +2 to +5 dB input for character

### Dynamic Crossover Automation
- Automate low/mid crossover for different sections
- Lower during verses (tighter bass)
- Higher during chorus (fuller bass)

---

## Workflow Checklist

- ✅ Low-end tight and controlled
- ✅ Note sustain even across range
- ✅ Harmonics audible on small speakers
- ✅ Doesn't mask kick drum
- ✅ Sits well in mix (not overpowering)
- ✅ Minimal distortion (unless intentional)

```

---

## FILE: 03-Workflows\by-instrument\drum-bus-glue.md

```markdown
# Drum Bus Glue with Fruity Squeeze

## Objective
Make drum elements (kick, snare, hi-hats, percussion) feel cohesive and punchy while maintaining individual character.

## When to Use This Workflow
- Drums from different sources sound disconnected
- Hi-hats overpower snare or vice versa
- Need to control drum dynamics without affecting individual processing
- Creating space for vocals and melodic elements

## Step-by-Step Process

### 1. Setup Drum Bus
Route all drum elements to a dedicated drum bus. Insert Fruity Squeeze after individual drum processing but before bus effects (saturation, reverb).

### 2. Set Drum-Optimized Crossovers

**Standard Drum Split**
- **Low/Mid**: 150-200 Hz (separate kick/sub from snare body)
- **Mid/High**: 3-5 kHz (separate snare crack from hi-hats)

**Genre-Specific Crossovers**

| Genre | Low/Mid | Mid/High | Reasoning |
|-------|---------|----------|-----------|
| Moody Trap | 120 Hz | 3 kHz | Extended sub, darker overall |
| Upbeat | 180 Hz | 4.5 kHz | Balanced, energetic |
| Boom-Bap | 220 Hz | 4 kHz | Classic hip-hop split |
| Electronic | 100 Hz | 5 kHz | Deep sub, bright highs |

### 3. Configure Low Band (Kick/Sub Control)

**Purpose**: Tighten kick and control low-end punch

**Moody/Dark Trap Settings**
- **Threshold**: -15 dB
- **Ratio**: 3:1 to 4:1
- **Attack**: 5-10ms (preserve kick punch)
- **Release**: 100-120ms (follow kick decay)
- **Gain**: +1 dB

**Upbeat/Energetic Settings**
- **Threshold**: -12 dB
- **Ratio**: 2.5:1 to 3:1
- **Attack**: 10-15ms (more transient)
- **Release**: 120-140ms
- **Gain**: +1.5 dB

**Boom-Bap Settings**
- **Threshold**: -18 dB
- **Ratio**: 2:1 to 2.5:1
- **Attack**: 15-20ms (preserve vintage feel)
- **Release**: 140-160ms
- **Gain**: +0.5 dB

### 4. Configure Mid Band (Snare/Tom Control)

**Purpose**: Control snare body and overall drum presence

**Moody/Dark Trap Settings**
- **Threshold**: -10 dB
- **Ratio**: 2:1
- **Attack**: 5ms (catch snare transient)
- **Release**: 70-90ms
- **Gain**: +0.5 dB

**Upbeat/Energetic Settings**
- **Threshold**: -8 dB
- **Ratio**: 2.5:1 to 3:1
- **Attack**: 3-5ms (punchy)
- **Release**: 80-100ms
- **Gain**: +1 dB

**Boom-Bap Settings**
- **Threshold**: -12 dB
- **Ratio**: 1.5:1 to 2:1
- **Attack**: 10ms (preserve vintage snap)
- **Release**: 100-120ms
- **Gain**: +0.5 dB

### 5. Configure High Band (Hi-Hat/Cymbal Control)

**Purpose**: Control bright transients without dulling

**Moody/Dark Trap Settings**
- **Threshold**: -12 dB
- **Ratio**: 1.5:1
- **Attack**: 1-2ms (catch fast transients)
- **Release**: 50-60ms
- **Gain**: -0.5 dB (darker aesthetic)

**Upbeat/Energetic Settings**
- **Threshold**: -10 dB
- **Ratio**: 2:1
- **Attack**: 1ms
- **Release**: 60-70ms
- **Gain**: +0.5 dB (bright, present)

**Boom-Bap Settings**
- **Threshold**: -15 dB
- **Ratio**: 1.2:1 to 1.5:1
- **Attack**: 2-3ms
- **Release**: 70-80ms
- **Gain**: 0 dB (natural)

### 6. Genre-Specific Complete Settings

**Moody/Dark Trap Drums**
`\`\`
Low: -15 dB, 3.5:1, 8ms, 110ms, +1 dB
Mid: -10 dB, 2:1, 5ms, 80ms, +0.5 dB
High: -12 dB, 1.5:1, 1ms, 55ms, -0.5 dB
Crossovers: 120 Hz / 3 kHz
`\`\`
**Character**: Tight, controlled, dark

**Upbeat/Energetic Drums**
`\`\`
Low: -12 dB, 3:1, 12ms, 130ms, +1.5 dB
Mid: -8 dB, 2.5:1, 4ms, 90ms, +1 dB
High: -10 dB, 2:1, 1ms, 65ms, +0.5 dB
Crossovers: 180 Hz / 4.5 kHz
`\`\`
**Character**: Punchy, forward, bright

**Melodic/R&B Drums**
`\`\`
Low: -18 dB, 2:1, 15ms, 140ms, +0.5 dB
Mid: -12 dB, 1.5:1, 8ms, 100ms, 0 dB
High: -15 dB, 1.5:1, 2ms, 70ms, 0 dB
Crossovers: 200 Hz / 5 kHz
`\`\`
**Character**: Smooth, natural, polished

**Boom-Bap Drums**
`\`\`
Low: -18 dB, 2.5:1, 18ms, 150ms, +0.5 dB
Mid: -12 dB, 2:1, 10ms, 110ms, +0.5 dB
High: -15 dB, 1.3:1, 3ms, 75ms, 0 dB
Crossovers: 220 Hz / 4 kHz
`\`\`
**Character**: Vintage, warm, punchy

**Electronic/Experimental Drums**
`\`\`
Low: -10 dB, 5:1, 3ms, 90ms, +2 dB
Mid: -6 dB, 4:1, 2ms, 70ms, +1.5 dB
High: -8 dB, 3:1, 0.5ms, 50ms, +1 dB
Crossovers: 100 Hz / 5 kHz
`\`\`
**Character**: Aggressive, pumping, energetic

### 7. Critical Listening Checklist

- **Kick Punch**: Should hit hard without overwhelming
- **Snare Snap**: Clear and present, not buried or harsh
- **Hi-Hat Control**: Consistent level, not splashy or dull
- **Overall Cohesion**: Drums feel like one unit
- **Dynamics**: Still breathes, not brick-walled
- **Separation**: Individual elements still identifiable

### 8. Common Issues & Solutions

**Kick Sounds Weak**
- Lower low-band threshold to -18 dB
- Increase low-band gain to +2 dB
- Faster attack (5ms) for more punch

**Snare Gets Lost**
- Increase mid-band gain (+1 to +2 dB)
- Lower mid-band threshold
- Adjust crossovers to isolate snare fundamental (200-300 Hz)

**Hi-Hats Too Loud/Harsh**
- Lower high-band gain (-1 dB)
- Increase high-band ratio to 2.5:1
- Lower high-band threshold for more control

**Drums Sound Squashed**
- Increase attack times across all bands
- Reduce ratios by 0.5
- Raise thresholds to compress less

**Muddy Low-End**
- Lower low/mid crossover to 120-150 Hz
- Increase low-band ratio to 4:1+
- Reduce low-band gain

### 9. Advanced Techniques

**Parallel Drum Compression**
Duplicate drum bus, compress heavily with Fruity Squeeze, blend at 30-50%.

**Sidechain to Kick**
Sidechain low and mid bands to kick for rhythmic pumping.

**Dynamic Processing Per Section**
Automate threshold/ratio for different song sections (verse light, chorus heavy).

**Frequency-Specific Saturation**
Add saturation before Fruity Squeeze, use compression to control harmonics.

## Integration with Drum Chain

**Typical Drum Bus Chain**
1. EQ (subtractive)
2. **Fruity Squeeze** ← You are here
3. Saturation/distortion
4. Transient shaper
5. Reverb/room ambience

## Quick Start by Genre

Pick your genre, apply these settings, then adjust to taste:

**Trap**: Tight low-end, controlled highs, forward mids
**Boom-Bap**: Natural dynamics, warm tone, vintage feel
**Electronic**: Heavy compression, aggressive, pumping
**R&B**: Smooth, polished, transparent
**Upbeat**: Energetic, punchy, bright

## Pro Tips for Hip-Hop Drums

1. **Leave Headroom**: Aim for 3-5 dB gain reduction max on any band
2. **Solo Bands**: Understand what each frequency range contributes
3. **A/B Constantly**: Compare bypassed vs. processed frequently
4. **Check with Vocals**: Ensure drums don't overpower or get buried
5. **Reference Tracks**: Compare your drum balance to pro mixes
6. **Mono Check**: Verify low-end control translates in mono
7. **Save Presets**: Build library of go-to settings per genre
8. **Automate Mix**: Reduce compression intensity during quiet sections

```

---

## FILE: 03-Workflows\by-instrument\drum-bus-workflow.md

```markdown
# Drum Bus Processing

## Goal
Add cohesion, punch, and density to full drum mix using multiband compression.

---

## Step-by-Step Workflow

### 1. Route All Drums to Bus
- Create drum bus/submix channel
- Route kick, snare, hi-hats, toms, percussion to this bus
- Insert Fruity Squeeze on drum bus

### 2. Set Crossover Points

**Low/Mid Crossover: 150–250 Hz**
- **150–180 Hz**: Tighter, more controlled lows (good for heavy music)
- **200–250 Hz**: Fuller, warmer lows (good for organic drums)

**Mid/High Crossover: 3–5 kHz**
- **3–4 kHz**: More presence/attack emphasis
- **4–5 kHz**: More natural, less aggressive

**Recommended starting point:** 200 Hz / 4 kHz

### 3. Process Low Band (Kick/Low Toms)

**Settings:**
- **Threshold**: -15 to -18 dB
- **Ratio**: 4:1–6:1
- **Volume**: +1 to +2 dB

**Why:**
- Tightens kick and low toms
- Moderate compression preserves punch
- Too much = drums lose power

### 4. Process Mid Band (Snare Body/Tom Resonance)

**Settings:**
- **Threshold**: -12 to -15 dB
- **Ratio**: 5:1–7:1
- **Volume**: +2 to +3 dB

**Why:**
- Creates density and impact
- Glues drums together
- Mid-range contains most "meat" of drum sound

### 5. Process High Band (Cymbals/Hi-Hats/Snare Attack)

**Settings:**
- **Threshold**: -15 to -18 dB
- **Ratio**: 3:1–5:1
- **Volume**: 0 to +1 dB

**Why:**
- Controls cymbal peaks without dulling them
- Lighter compression preserves sparkle
- Snare crack lives here

### 6. Use Parallel Compression for Aggression

**Settings:**
- Set all ratios higher (8:1–10:1)
- Set all thresholds lower (-6 to -10 dB)
- **Dry/Wet**: 30–50%

**Why:**
- Preserves natural transients (dry signal)
- Adds density and loudness (wet signal)
- Classic "New York" drum sound

### 7. Adjust Input for Character
- **Input**: 0 to +2 dB
- Higher input adds harmonic grit
- Good for rock/metal/EDM

### 8. Set Output Level
- Match to bypass level
- Usually +1 to +3 dB louder after processing

### 9. Check Individual Elements
- Solo kick: Should be tight and punchy
- Solo snare: Should have body and crack
- Solo cymbals: Should be controlled but not dull

---

## Recommended Settings

### Natural Drum Glue

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 220 Hz |
| Mid/High Crossover | 4 kHz |
| Low Threshold | -16 dB |
| Low Ratio | 5:1 |
| Low Volume | +1 dB |
| Mid Threshold | -14 dB |
| Mid Ratio | 6:1 |
| Mid Volume | +2 dB |
| High Threshold | -16 dB |
| High Ratio | 4:1 |
| High Volume | +1 dB |
| Input Level | 0 dB |
| Output Level | +1 dB |
| Dry/Wet | 100% |

### Parallel Drum Crush

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 200 Hz |
| Mid/High Crossover | 3.5 kHz |
| Low Threshold | -8 dB |
| Low Ratio | 10:1 |
| Low Volume | +4 dB |
| Mid Threshold | -8 dB |
| Mid Ratio | 10:1 |
| Mid Volume | +4 dB |
| High Threshold | -8 dB |
| High Ratio | 8:1 |
| High Volume | +3 dB |
| Input Level | +1 dB |
| Output Level | 0 dB |
| Dry/Wet | 40% |

### Aggressive EDM/Trap Drums

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 180 Hz |
| Mid/High Crossover | 4.5 kHz |
| Low Threshold | -10 dB |
| Low Ratio | 8:1 |
| Low Volume | +3 dB |
| Mid Threshold | -10 dB |
| Mid Ratio | 10:1 |
| Mid Volume | +4 dB |
| High Threshold | -12 dB |
| High Ratio | 6:1 |
| High Volume | +2 dB |
| Input Level | +3 dB |
| Output Level | +2 dB |
| Dry/Wet | 100% |

### Vintage/Warm Drums

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 250 Hz |
| Mid/High Crossover | 3 kHz |
| Low Threshold | -18 dB |
| Low Ratio | 4:1 |
| Low Volume | +2 dB |
| Mid Threshold | -15 dB |
| Mid Ratio | 5:1 |
| Mid Volume | +2 dB |
| High Threshold | -18 dB |
| High Ratio | 3:1 |
| High Volume | 0 dB |
| Input Level | +2 dB |
| Output Level | +1 dB |
| Dry/Wet | 100% |

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Drums sound squashed | Reduce ratios; raise thresholds; use parallel (dry/wet) |
| Kick lacks punch | Lower low/mid crossover; reduce low compression |
| Snare sounds weak | Boost mid volume; increase mid ratio |
| Cymbals too harsh | Reduce high volume; raise high threshold |
| Mix sounds unnatural | Use dry/wet blend (60–80%) |
| Too much distortion | Reduce input gain; lower ratios |

---

## Genre-Specific Tips

### Rock/Pop
- Moderate compression (4:1–6:1)
- Standard crossovers (200 Hz, 4 kHz)
- Light input gain for warmth (+1 dB)

### Hip-Hop/Trap
- Heavy low compression (8:1+) for tight kicks
- Lower crossover (150–180 Hz)
- Moderate input gain (+2 dB)

### EDM/House
- Aggressive compression across all bands (8:1–10:1)
- Input gain +2 to +4 dB for character
- Often use parallel for maximum aggression

### Metal
- Heavy mid compression for density (8:1–10:1)
- Crossovers around 180 Hz / 4.5 kHz
- Input gain +1 to +2 dB for grit

### Jazz/Acoustic
- Light compression (2:1–4:1)
- Higher thresholds (-20 dB)
- Minimal input gain (0 dB)

---

## Advanced Techniques

### Serial + Parallel Combo
1. Insert Fruity Squeeze in serial mode (100% wet)
   - Light-to-moderate settings for glue
2. Send to parallel bus with second Fruity Squeeze
   - Aggressive settings, blend to taste

### Dynamic Crossover Automation
- Automate low/mid crossover during song
- Lower during heavy sections (tighter kick)
- Higher during sparse sections (fuller drums)

### Multiband Sidechain
- Use Fruity Peak Controller to sidechain mid/high bands from kick
- Creates pumping effect on snare/cymbals when kick hits
- Advanced rhythmic effect

---

## Integration with Other Processing

### Recommended Signal Chain
1. **Individual drum tracks**: EQ, compression
2. **Drum bus**: Fruity Squeeze (glue)
3. **Drum bus**: EQ (final tone shaping)
4. **Drum bus**: Saturation/exciter (optional)
5. **Drum bus**: Reverb send (room glue)

---

## Workflow Checklist

- ✅ Drums glued together cohesively
- ✅ Kick punchy and controlled
- ✅ Snare cuts through with body
- ✅ Cymbals controlled but not dull
- ✅ Transients preserved (if not using extreme settings)
- ✅ Drums sit well in full mix
- ✅ A/B compared with bypass

```

---

## FILE: 03-Workflows\by-instrument\kick-drum-workflow.md

```markdown
# Kick Drum Processing with Fruity Squeeze

## Goal
Create punchy, controlled kick drums with tight low-end and enhanced attack.

---

## Step-by-Step Workflow

### 1. Insert Fruity Squeeze on Kick Channel
- Solo the kick drum track
- Insert Fruity Squeeze in effects slot

### 2. Set Crossover Points

**Low/Mid Crossover: 80–100 Hz**
- Isolates sub-bass thump from body
- Lower (60–80 Hz) = more sub isolation
- Higher (100–120 Hz) = fuller, warmer kick

**Mid/High Crossover: 3–4 kHz**
- Separates body from beater click
- Lower (2–3 kHz) = more click emphasis
- Higher (4–5 kHz) = more natural attack

### 3. Process Low Band (Sub-Bass Punch)

**Settings:**
- **Threshold**: -8 to -10 dB
- **Ratio**: 8:1–∞:1 (limiter mode)
- **Volume**: +3 to +5 dB

**Why:**
- Heavy compression creates tight, controlled thump
- Limiter mode prevents bass from spiking
- Volume boost restores power after gain reduction

### 4. Process Mid Band (Body)

**Settings:**
- **Threshold**: -15 to -18 dB
- **Ratio**: 3:1–5:1
- **Volume**: 0 to +1 dB

**Why:**
- Light-to-moderate compression preserves natural body
- Too much compression here = hollow kick
- Minimal adjustment often best

### 5. Process High Band (Beater Click/Attack)

**Settings:**
- **Threshold**: -10 to -12 dB
- **Ratio**: 6:1–8:1
- **Volume**: +2 to +4 dB

**Why:**
- Controls transient peaks
- Adds harmonic click via waveshaping
- Volume boost brings out attack

### 6. Drive Input for Character

**Settings:**
- **Input Level**: +1 to +4 dB

**Why:**
- Drives waveshaping for harmonic distortion
- Adds edge and presence
- +2 dB = subtle grit, +4 dB = aggressive color

### 7. Adjust Output Level
- Match to input level for fair comparison
- Usually 0 to +2 dB after processing

### 8. Fine-Tune by Listening

**Check for:**
- ✅ Tight, punchy low-end (not boomy)
- ✅ Clear beater attack (not harsh)
- ✅ Controlled dynamics (no wild volume changes)
- ❌ Excessive distortion (reduce input gain)
- ❌ Hollow sound (reduce mid compression)

---

## Recommended Settings

### Standard Punchy Kick

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 85 Hz |
| Mid/High Crossover | 3.5 kHz |
| Low Threshold | -9 dB |
| Low Ratio | 10:1 |
| Low Volume | +4 dB |
| Mid Threshold | -16 dB |
| Mid Ratio | 4:1 |
| Mid Volume | 0 dB |
| High Threshold | -11 dB |
| High Ratio | 7:1 |
| High Volume | +3 dB |
| Input Level | +2 dB |
| Output Level | +1 dB |

### Deep 808-Style Kick

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 60 Hz |
| Mid/High Crossover | 2 kHz |
| Low Threshold | -8 dB |
| Low Ratio | ∞:1 (limiter) |
| Low Volume | +5 dB |
| Mid Threshold | -18 dB |
| Mid Ratio | 3:1 |
| Mid Volume | +1 dB |
| High Threshold | -∞ (bypass) |
| High Ratio | 1:1 |
| High Volume | 0 dB |
| Input Level | +1 dB |
| Output Level | +1 dB |

### Clicky EDM Kick

| Parameter | Value |
|-----------|-------|
| Low/Mid Crossover | 100 Hz |
| Mid/High Crossover | 4 kHz |
| Low Threshold | -10 dB |
| Low Ratio | 8:1 |
| Low Volume | +3 dB |
| Mid Threshold | -15 dB |
| Mid Ratio | 5:1 |
| Mid Volume | +1 dB |
| High Threshold | -8 dB |
| High Ratio | 10:1 |
| High Volume | +5 dB |
| Input Level | +4 dB |
| Output Level | +2 dB |

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Kick sounds boomy | Lower low/mid crossover to 70–80 Hz; increase low ratio |
| Lacks punch | Boost low volume; increase low ratio |
| Too much click | Reduce high volume; raise high threshold |
| Not enough click | Boost high volume; lower mid/high crossover |
| Sounds distorted | Reduce input gain; lower ratios |
| Hollow/thin | Reduce mid compression; raise low/mid crossover |

---

## Genre-Specific Tips

### Hip-Hop/Trap
- Deep sub focus (low/mid crossover at 60–70 Hz)
- Heavy low limiting (∞:1)
- Moderate high boost for attack

### EDM/House
- Balanced punch (low/mid at 80–100 Hz)
- Heavy compression across all bands
- High input gain for aggressive character

### Rock/Pop
- Natural body (low/mid at 100–120 Hz)
- Moderate compression (5:1–7:1)
- Light input gain for cleaner tone

---

## Workflow Checklist

- ✅ Low-end tight and controlled
- ✅ Attack cuts through mix
- ✅ No excessive distortion
- ✅ Sits well with bass
- ✅ Consistent volume across hits

```

---

## FILE: 03-Workflows\by-instrument\vocal-bus-processing.md

```markdown
# Vocal Bus Processing with Fruity Squeeze

## Objective
Control vocal dynamics across different frequency ranges for clarity, presence, and professional polish.

## When to Use This Workflow
- Inconsistent vocal dynamics across register
- Harsh sibilance or plosives
- Vocals getting lost in busy hip-hop mixes
- Need to control multiple vocal layers together

## Step-by-Step Process

### 1. Setup Vocal Bus
Route all lead vocals (main, doubles, ad-libs) to a dedicated vocal bus. Insert Fruity Squeeze after basic EQ and before reverb/delay sends.

### 2. Set Vocal-Optimized Crossovers

**Standard Vocal Split**
- **Low/Mid**: 200-250 Hz (separate body from warmth)
- **Mid/High**: 4-6 kHz (separate presence from air/sibilance)

**Genre-Specific Adjustments**
- **Moody/Dark**: 180 Hz / 4 kHz (warmer, less bright)
- **Upbeat**: 220 Hz / 5.5 kHz (balanced, energetic)
- **Melodic/R&B**: 200 Hz / 6 kHz (smooth, silky)
- **Aggressive Rap**: 250 Hz / 4.5 kHz (forward, punchy)

### 3. Configure Low Band (Body Control)

**Purpose**: Control low-end muddiness and proximity effect

**Settings**
- **Threshold**: -20 to -24 dB
- **Ratio**: 1.5:1 to 2:1 (gentle)
- **Attack**: 20-30ms (preserve natural warmth)
- **Release**: 120-150ms (smooth, natural)
- **Gain**: -0.5 to 0 dB

**Why These Settings**
- Gentle ratio preserves natural body
- Slower attack maintains warmth
- Higher threshold compresses only excessive low-end

### 4. Configure Mid Band (Presence Control)

**Purpose**: Main vocal presence and consistency

**Settings**
- **Threshold**: -12 to -18 dB
- **Ratio**: 2:1 to 3:1 (moderate)
- **Attack**: 10-15ms (quick enough for control)
- **Release**: 80-100ms (follows vocal phrases)
- **Gain**: +0.5 to +1.5 dB (bring forward in mix)

**Why These Settings**
- Moderate ratio for consistent presence
- Medium attack preserves consonant clarity
- Medium release follows natural vocal dynamics

### 5. Configure High Band (De-Essing/Air Control)

**Purpose**: Control sibilance and harshness

**Settings**
- **Threshold**: -15 to -20 dB
- **Ratio**: 2:1 to 3:1 (moderate to aggressive)
- **Attack**: 1-3ms (catch sibilant transients)
- **Release**: 50-70ms (quick recovery)
- **Gain**: -0.5 to -1 dB (tame brightness)

**Why These Settings**
- Fast attack catches sibilance
- Quick release avoids dulling voice
- Lower gain reduces harshness

### 6. Genre-Specific Vocal Settings

**Moody/Dark Trap Vocals**
- **Low**: Ratio 2:1, Threshold -22 dB, Gain 0 dB
- **Mid**: Ratio 2.5:1, Threshold -15 dB, Gain +1 dB
- **High**: Ratio 2.5:1, Threshold -18 dB, Gain -1 dB
- **Goal**: Warm, intimate, controlled

**Upbeat/Energetic Rap**
- **Low**: Ratio 1.5:1, Threshold -24 dB, Gain -0.5 dB
- **Mid**: Ratio 3:1, Threshold -12 dB, Gain +1.5 dB
- **High**: Ratio 2:1, Threshold -15 dB, Gain 0 dB
- **Goal**: Forward, punchy, clear

**Melodic/Sung Vocals (R&B)**
- **Low**: Ratio 1.5:1, Threshold -24 dB, Gain 0 dB
- **Mid**: Ratio 2:1, Threshold -18 dB, Gain +0.5 dB
- **High**: Ratio 3:1, Threshold -16 dB, Gain -0.5 dB
- **Goal**: Smooth, polished, silky

**Aggressive/Shouted Vocals**
- **Low**: Ratio 2.5:1, Threshold -20 dB, Gain -1 dB
- **Mid**: Ratio 3.5:1, Threshold -10 dB, Gain +2 dB
- **High**: Ratio 3:1, Threshold -12 dB, Gain -1 dB
- **Goal**: Controlled aggression, clarity

### 7. Critical Listening Checks

- **Sibilance**: "S" and "T" sounds should be controlled but not lispy
- **Body**: Low-end should feel warm, not boomy or thin
- **Presence**: Vocals should sit on top of beat consistently
- **Intelligibility**: Every word should be clear
- **Naturalness**: Shouldn't sound obviously compressed

### 8. Common Adjustments

**Vocals Sound Thin**
- Increase low-band gain (+1 to +2 dB)
- Raise low/mid crossover to 250-300 Hz
- Reduce low-band ratio to 1.2:1

**Vocals Sound Muddy**
- Reduce low-band gain (-1 dB)
- Lower low/mid crossover to 180 Hz
- Increase low-band ratio to 2.5:1

**Harsh Sibilance**
- Lower high-band threshold to -18 dB
- Increase high-band ratio to 4:1
- Reduce high-band gain to -1.5 dB

**Vocals Getting Lost**
- Increase mid-band gain (+2 dB)
- Lower mid-band threshold to -15 dB
- Adjust mid/high crossover to isolate vocal sweet spot

**Over-Compressed Sound**
- Increase all attack times
- Reduce ratios across all bands
- Raise thresholds to compress less

## Advanced Techniques

### Multiband Sidechain De-Essing
Route high band sidechain to instrumental, ducking sibilance when beat is busy.

### Dynamic Crossover Automation
Automate crossover points for different vocal sections (verse vs. hook).

### Parallel Multiband Processing
Set mix to 60-80% and blend with dry vocal for transparent control.

### Genre-Switching Presets
Save presets for different vocal styles and switch between takes.

## Integration with Vocal Chain

**Typical Vocal Chain Order**
1. Subtractive EQ (remove mud)
2. Standard compressor (overall dynamics)
3. **Fruity Squeeze** ← You are here (frequency-specific control)
4. De-esser (if more sibilance control needed)
5. Additive EQ (presence boost)
6. Saturation/exciter
7. Reverb/delay sends

## Quick Reference by Vocal Type

| Vocal Type | Low Ratio | Mid Ratio | High Ratio | Mid Gain |
|------------|-----------|-----------|------------|----------|
| Moody/Intimate | 2:1 | 2.5:1 | 2.5:1 | +1 dB |
| Energetic Rap | 1.5:1 | 3:1 | 2:1 | +1.5 dB |
| Melodic/Sung | 1.5:1 | 2:1 | 3:1 | +0.5 dB |
| Aggressive | 2.5:1 | 3.5:1 | 3:1 | +2 dB |

## Pro Tips

1. **Solo Each Band**: Understand what frequencies you're affecting
2. **A/B Frequently**: Compare against bypassed signal often
3. **Check Against Beat**: Always listen in context with instrumental
4. **Automate for Sections**: Different settings for verse vs. chorus
5. **Monitor Gain Reduction**: Aim for 3-6 dB reduction on mid band max

```

---

## FILE: 04-Reference\genre-specific-cheat-sheet.md

```markdown
# Genre-Specific Cheat Sheet

## Quick Reference for Hip-Hop Subgenres

### Moody/Dark Trap

**Sonic Characteristics**: Deep subs, controlled dynamics, dark atmospheric vibe, minimal brightness

**Master Bus Settings**
`\`\`
Low Band: -18 dB | 4:1 | 5ms | 100ms | +0 dB
Mid Band: -12 dB | 2:1 | 10ms | 80ms | +0 dB
High Band: -15 dB | 1.5:1 | 1ms | 50ms | -0.5 dB
Crossovers: 150 Hz / 4 kHz
`\`\`

**808 Bus Settings**
`\`\`
Low Band: -16 dB | 5:1 | 8ms | 120ms | +1.5 dB
Mid Band: -20 dB | 1.5:1 | 15ms | 100ms | +0 dB
High Band: -25 dB | 1:1 | 5ms | 60ms | -1 dB
Crossovers: 250 Hz / 2 kHz
`\`\`

**Vocal Bus Settings**
`\`\`
Low Band: -22 dB | 2:1 | 25ms | 140ms | +0 dB
Mid Band: -15 dB | 2.5:1 | 12ms | 85ms | +1 dB
High Band: -18 dB | 2.5:1 | 2ms | 55ms | -1 dB
Crossovers: 180 Hz / 4 kHz
`\`\`

**Key Principles**
- Tight low-end control for massive 808s
- Preserve dark, moody atmosphere
- Controlled but not lifeless dynamics

---

### Upbeat/Energetic Hip-Hop

**Sonic Characteristics**: Forward energy, bright top-end, punchy dynamics, consistent groove

**Master Bus Settings**
`\`\`
Low Band: -15 dB | 3:1 | 10ms | 120ms | +0.5 dB
Mid Band: -10 dB | 2.5:1 | 5ms | 90ms | +1 dB
High Band: -12 dB | 2:1 | 1ms | 60ms | +0.5 dB
Crossovers: 200 Hz / 5 kHz
`\`\`

**Drum Bus Settings**
`\`\`
Low Band: -12 dB | 3:1 | 12ms | 130ms | +1.5 dB
Mid Band: -8 dB | 2.5:1 | 4ms | 90ms | +1 dB
High Band: -10 dB | 2:1 | 1ms | 65ms | +0.5 dB
Crossovers: 180 Hz / 4.5 kHz
`\`\`

**Vocal Bus Settings**
`\`\`
Low Band: -24 dB | 1.5:1 | 20ms | 130ms | -0.5 dB
Mid Band: -12 dB | 3:1 | 10ms | 80ms | +1.5 dB
High Band: -15 dB | 2:1 | 1.5ms | 60ms | +0 dB
Crossovers: 220 Hz / 5.5 kHz
`\`\`

**Key Principles**
- Moderate compression for energy without fatigue
- Bright, present top-end
- Forward vocal and drum presence

---

### Melodic/R&B Hip-Hop

**Sonic Characteristics**: Smooth, polished, silky highs, natural dynamics, vocal-centric

**Master Bus Settings**
`\`\`
Low Band: -20 dB | 2:1 | 20ms | 150ms | +0 dB
Mid Band: -15 dB | 1.5:1 | 15ms | 100ms | +0.5 dB
High Band: -18 dB | 1.5:1 | 3ms | 80ms | +0 dB
Crossovers: 180 Hz / 6 kHz
`\`\`

**Vocal Bus Settings**
`\`\`
Low Band: -24 dB | 1.5:1 | 30ms | 150ms | +0 dB
Mid Band: -18 dB | 2:1 | 12ms | 95ms | +0.5 dB
High Band: -16 dB | 3:1 | 2ms | 65ms | -0.5 dB
Crossovers: 200 Hz / 6 kHz
`\`\`

**Bass Bus Settings**
`\`\`
Low Band: -20 dB | 2.5:1 | 15ms | 140ms | +0.5 dB
Mid Band: -18 dB | 1.2:1 | 20ms | 110ms | +0 dB
High Band: -22 dB | 1:1 | 10ms | 80ms | +0 dB
Crossovers: 180 Hz / 3 kHz
`\`\`

**Key Principles**
- Gentle, transparent compression
- Preserve natural vocal dynamics
- Smooth, silky high frequencies
- Vocal clarity is paramount

---

### Funky/Boom-Bap Hip-Hop

**Sonic Characteristics**: Vintage warmth, punchy drums, natural dynamics, classic sample-based feel

**Master Bus Settings**
`\`\`
Low Band: -16 dB | 3:1 | 15ms | 140ms | +0.5 dB
Mid Band: -12 dB | 2:1 | 10ms | 110ms | +0.5 dB
High Band: -20 dB | 1.2:1 | 5ms | 90ms | +0 dB
Crossovers: 220 Hz / 4.5 kHz
`\`\`

**Drum Bus Settings**
`\`\`
Low Band: -18 dB | 2.5:1 | 18ms | 150ms | +0.5 dB
Mid Band: -12 dB | 2:1 | 10ms | 110ms | +0.5 dB
High Band: -15 dB | 1.3:1 | 3ms | 75ms | +0 dB
Crossovers: 220 Hz / 4 kHz
`\`\`

**Sample/Loop Bus Settings**
`\`\`
Low Band: -18 dB | 2:1 | 20ms | 140ms | +0 dB
Mid Band: -14 dB | 1.8:1 | 15ms | 120ms | +0.5 dB
High Band: -16 dB | 1.5:1 | 5ms | 90ms | +0 dB
Crossovers: 200 Hz / 5 kHz
`\`\`

**Key Principles**
- Preserve vintage, natural feel
- Moderate compression for warmth
- Respect original sample dynamics
- Warm, not overly bright

---

### Electronic/Experimental Hip-Hop

**Sonic Characteristics**: Heavy processing, aggressive compression, pumping effects, creative sound design

**Master Bus Settings**
`\`\`
Low Band: -12 dB | 6:1 | 1ms | 80ms | +2 dB
Mid Band: -8 dB | 4:1 | 3ms | 70ms | +1.5 dB
High Band: -10 dB | 3:1 | 0.5ms | 50ms | +1 dB
Crossovers: 120 Hz / 3.5 kHz
`\`\`

**Bass Bus Settings**
`\`\`
Low Band: -10 dB | 8:1 | 1ms | 90ms | +2.5 dB
Mid Band: -12 dB | 4:1 | 5ms | 80ms | +1 dB
High Band: -15 dB | 2:1 | 2ms | 60ms | +0 dB
Crossovers: 150 Hz / 2.5 kHz
`\`\`

**Drum Bus Settings**
`\`\`
Low Band: -10 dB | 5:1 | 3ms | 90ms | +2 dB
Mid Band: -6 dB | 4:1 | 2ms | 70ms | +1.5 dB
High Band: -8 dB | 3:1 | 0.5ms | 50ms | +1 dB
Crossovers: 100 Hz / 5 kHz
`\`\`

**Key Principles**
- Aggressive ratios for obvious effect
- Fast attack/release for pumping
- Use compression as creative tool
- Don't be afraid to push limits

---

## Parameter Philosophy by Genre

| Genre | Low Ratio | Mid Ratio | High Ratio | Overall Vibe |
|-------|-----------|-----------|------------|--------------|
| Moody Trap | Heavy (4-6:1) | Moderate (2-2.5:1) | Light (1.5:1) | Controlled, dark |
| Upbeat | Moderate (2.5-3:1) | Moderate (2-2.5:1) | Moderate (2:1) | Energetic, bright |
| Melodic | Light (2:1) | Light (1.5-2:1) | Light-Mod (1.5-3:1) | Natural, smooth |
| Boom-Bap | Moderate (2.5-3:1) | Light-Mod (1.5-2:1) | Light (1.2-1.5:1) | Warm, vintage |
| Electronic | Heavy (5-8:1) | Heavy (4-5:1) | Moderate (3:1) | Aggressive, pumping |

## Attack/Release Philosophy by Genre

| Genre | Low A/R | Mid A/R | High A/R | Character |
|-------|---------|---------|----------|-----------|
| Moody Trap | 5ms/100ms | 10ms/80ms | 1ms/50ms | Tight, controlled |
| Upbeat | 10ms/120ms | 5ms/90ms | 1ms/60ms | Punchy, energetic |
| Melodic | 20ms/150ms | 15ms/100ms | 3ms/80ms | Smooth, natural |
| Boom-Bap | 15ms/140ms | 10ms/110ms | 5ms/90ms | Warm, vintage |
| Electronic | 1ms/80ms | 3ms/70ms | 0.5ms/50ms | Fast, aggressive |

## Crossover Philosophy by Genre

| Genre | Low/Mid Hz | Mid/High Hz | Why |
|-------|------------|-------------|-----|
| Moody Trap | 150 | 4000 | Extended sub, darker sound |
| Upbeat | 200 | 5000 | Balanced, energetic split |
| Melodic | 180 | 6000 | Smooth, airy highs |
| Boom-Bap | 220 | 4500 | Classic hip-hop frequencies |
| Electronic | 120 | 3500 | Deep sub, aggressive mids |

## Common Applications Summary

### Master Bus
Gentle glue, frequency-specific control, final polish

### 808/Bass Bus
Heavy low compression, minimal mid/high, consistent sub

### Vocal Bus
Mid focus, sibilance control, presence boost

### Drum Bus
Balanced compression, cohesion, punch preservation

### Sample/Loop Bus
Tame dynamics, add warmth, control peaks

```

---

