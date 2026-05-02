# Multiband Delay - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 00-START-HERE.md

```markdown
# Multiband Delay: Start Here

Welcome to the **Multiband Delay** Deeper Dive. This is one of FL Studio's most powerful sound design tools, splitting your audio into **16 frequency bands** and allowing you to set independent delay, volume, and panning for every single one.

## 🗺️ Quick Navigation Guide

### 1. The Essentials (Start Here)
- **[README.md](./README.md):** The central hub for sound design goals and spectral specs.
- **[01-Learning/Quick-Reference/parameter-cheat-sheet.md](./01-Learning/Quick-Reference/parameter-cheat-sheet.md):** A map of the 16-band editor, Scale knob, and Morph system.
- **[01-Learning/Quick-Reference/visual-editor-modes.md](./01-Learning/Quick-Reference/visual-editor-modes.md):** Mastering the Pencil, Line, and Curve drawing tools.

### 2. Core Concepts
- **[01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md](./01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md):** Understanding the HML spectral split.
- **[04-Reference/morph-interpolation-logic.md](./04-Reference/morph-interpolation-logic.md):** How the 8-preset morphing bank actually works.

### 3. Workflow Recipes
- **[03-Workflows/by-goal/spectral-width-widening.md](./03-Workflows/by-goal/spectral-width-widening.md):** Frequency-targeted stereo enhancement.
- **[03-Workflows/by-goal/cascading-frequency-delay.md](./03-Workflows/by-goal/cascading-frequency-delay.md):** Making high frequencies "trail" behind the lows.
- **[03-Workflows/by-goal/reversing-spectral-echoes.md](./03-Workflows/by-goal/reversing-spectral-echoes.md):** Using the Scale knob for "sucking" reverse effects.

## 🚀 Rapid Success Protocol
1. **Choose a View:** Select **Time**, **Vol**, or **Pan** using the tabs above the grid.
2. **Draw a Shape:** Use the **Curve** tool to draw a sweep across the 16 bands.
3. **Extend the Range:** Turn the **Scale** knob to the right to turn the 100ms base delay into a 1000ms long echo.
4. **Add Feedback:** Increase the **FB** knob to create repeating spectral clouds.
5. **Morph the Vibe:** Move the **Morph** knob to blend between the 8 different preset slots at the bottom.

---
*For technical specs and band management data, see the [02-Data/](./02-Data/) folder.*

```

---

## FILE: README.md

```markdown
# Multiband Delay - Frequency-Dependent Echo

`\`\`
███╗   ███╗██╗   ██╗██╗     ████████╗██╗██████╗  █████╗ ███╗   ██╗██████╗ 
████╗ ████║██║   ██║██║     ╚══██╔══╝██║██╔══██╗██╔══██╗████╗  ██║██╔══██╗
██╔████╔██║██║   ██║██║        ██║   ██║██████╔╝███████║██╔██╗ ██║██║  ██║
██║╚██╔╝██║██║   ██║██║        ██║   ██║██╔══██╗██╔══██║██║╚██╗██║██║  ██║
██║ ╚═╝ ██║╚██████╔╝███████╗   ██║   ██║██████╔╝██║  ██║██║ ╚████║██████╔╝
╚═╝     ╚═╝ ╚═════╝ ╚══════╝   ╚═╝   ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ 

██████╗ ███████╗██╗      █████╗ ██╗   ██╗
██╔══██╗██╔════╝██║     ██╔══██╗╚██╗ ██╔╝
██║  ██║█████╗  ██║     ███████║ ╚████╔╝ 
██║  ██║██╔══╝  ██║     ██╔══██║  ╚██╔╝  
██████╔╝███████╗███████╗██║  ██║   ██║   
╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝   ╚═╝   
`\`\`

**Plugin Type:** Multiband Delay / Spectral FX
**Category:** Effect / Creative / Sound Design
**Official Manual:** [Image-Line Multiband Delay Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Multiband%20Delay.htm)

---

## 🎯 What is Multiband Delay?

Multiband Delay is a unique sound-design tool that splits audio into **16 distinct frequency bands**. Each band has its own independent **Delay**, **Volume**, and **Panning** controls. This allows for complex spectral echoes where high frequencies might delay to the left while low frequencies repeat in the center. It is ideal for creating "Spectral Clouds," futuristic transitions, and widening sounds in a frequency-targeted way.

**Key Capabilities:**
- **16 Frequency Bands:** High-resolution spectral splitting.
- **Independent Band Control:** Custom Delay (0-100ms), Vol, and Pan per band.
- **Delay Scaling:** Master "Scale" knob extends delay range up to 1000ms or reverses it.
- **Morphing System:** Seamlessly blend between 8 internal presets via the Morph knob.
- **Spline Editor:** Draw curves across the frequency bands (Pencil, Line, Curve).
- **Filter Selection:** Multiple band-splitting algorithms (e.g., Gentle).

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **multiband-grid-basics.md** (The 16-band UI)
3. Create **parameter-cheat-sheet.md**
4. Load a factory preset and move the "Morph" knob to see how the band settings evolve.

### For Sound Designers:
1. Study **creating-spectral-risers.md**
2. Review **morphing-automation-patterns.md**
3. Learn **negative-scale-reverse-echoes.md**

### For Mix Engineers:
1. Study **frequency-specific-stereo-widening.md**
2. Review **taming-high-frequency-delays.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Band Editor:** 16 sliders for Time, Vol, and Pan.
  - **Scale Knob:** Multiplier (-100% to +100%).
  - **Morph Knob:** Blending presets.
  - **Feedback:** Delay repeats.
  - **Filter Type:** Crossover character.

- [ ] **visual-editor-modes.md**
  - Pencil (Individual bands)
  - Line (Linear sweeps)
  - Curve (Smooth arcs)

#### 02-Data/parameters/
- [ ] **multiband-delay-specs.json**
  `\`\`json
  {
    "plugin_name": "Multiband Delay",
    "bands": 16,
    "max_delay_ms": 1000,
    "presets_per_morph": 8
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **spectral-width-widening.md**
  - Setting Pan mode.
  - Drawing an "S" curve across the 16 bands.
  - Result: Each frequency band occupies a slightly different part of the stereo field.

- [ ] **cascading-frequency-delay.md**
  - Setting Time mode.
  - Drawing a diagonal line from Low (0ms) to High (100ms).
  - High frequencies "trail" behind the low frequencies.

- [ ] **reversing-spectral-echoes.md**
  - Using the Scale knob at -100%.
  - Creating "sucking" sounds before transients.

#### 03-Workflows/by-context/
- [ ] **impact-sfx-thickening.md**
- [ ] **ambient-pad-morphing.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **morph-interpolation-logic.md**
  - How the plugin calculates the state between Preset 1 and Preset 2.

---

## 🔬 Research Framework

### Phase 1: Band Mapping (Week 1)
**Goal:** 16-Band Precision

**Tasks:**
1. Put Multiband Delay on a Drum Loop
2. Solo specific bands (using Volume sliders)
3. Draw a "Staircase" shape in the Time tab
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- What is the frequency range of Band 1 vs Band 16?
- How does the "Gentle" filter mode affect band isolation?

### Phase 2: Morphing Dynamics (Week 2)
**Goal:** Movement

**Tasks:**
1. Setup 4 distinct states in the Morph bank
2. Automate the Morph knob with a Sine LFO
3. Create morphing-automation-patterns.md

---

## 📊 Plugin Specifications to Document

### Engine
- Latency (Accumulative?)
- Filter Slopes (Gentle, etc.)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the delay so short? (Increase the "Scale" knob to multiply the 100ms base time).
2. How do I reset a curve? (Usually a right-click or Alt-click option).

### Advanced Usage
1. Can I use this as a static EQ? (Yes, use the Volume tab).

---

## 🔗 Cross-Reference with Other Plugins

Multiband Delay is often used with:
- **LuxeVerb** (Spectral space)
- **Fruity Peak Controller** (Driving the Morph knob)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Multiband Delay/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── visual-editor-modes.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── multiband-delay-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── spectral-width-widening.md
│   │   └── cascading-frequency-delay.md
│
└── 04-Reference/
    └── morph-interpolation-logic.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Multiband Delay Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Multiband%20Delay.htm)
- [Multiband Delay Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Multiband_Delay_tutorials.htm)
- [Multiband Delay Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+multiband+delay+tutorial)

### Community Resources
- [Multiband Delay Subreddit](https://www.reddit.com/r/FL_Studio/search?q=multiband+delay&restrict_sr=1)
- [Multiband Delay User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Multiband Delay Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Multiband Processing Fundamentals" - Understanding frequency-specific processing
- "Spectral Delay Techniques" - Advanced delay approaches
- "Phase Relationships in Multiband Processing" - Managing phase coherence

### Advanced Techniques
- **Band-Specific Processing:** Understanding individual band control
- **Spectral Morphing:** Mastering the morphing system
- **Curve Drawing:** Using the spline editor effectively

---

## 📚 In-Depth Technical Analysis

### Multiband Architecture
Multiband Delay implements sophisticated frequency-specific delay processing:
- **16-Band Splitting:** High-resolution frequency band separation
- **Independent Processing:** Each band has separate delay parameters
- **Spectral Precision:** Accurate frequency band isolation
- **Real-time Processing:** Immediate response to parameter changes
- **Phase Coherence:** Maintains phase relationships between bands

### Frequency Band System
The plugin divides audio into 16 distinct frequency bands:
- **Band Distribution:** Logarithmic frequency distribution across bands
- **Overlap Management:** Band overlap to prevent gaps in spectrum
- **Filter Quality:** High-quality crossover filters for band separation
- **Spectral Resolution:** 16-band resolution for detailed processing
- **Transition Smoothing:** Smooth transitions between bands

### Delay Processing Engine
Each frequency band has independent delay processing:
- **Time Control:** Individual delay time per band (0-100ms base)
- **Volume Control:** Individual level per band
- **Pan Control:** Individual stereo position per band
- **Feedback Control:** Individual feedback per band
- **Scale Multiplier:** Global multiplier for all bands (extends to 1000ms)

### Morphing System
The 8-preset morphing system provides:
- **Preset Storage:** 8 internal presets for different delay configurations
- **Smooth Blending:** Interpolation between different band settings
- **Real-time Morphing:** Dynamic blending between configurations
- **Automation Capability:** Full automation of morphing
- **Creative Flexibility:** Allows for evolving delay patterns

### Spline Editor Architecture
The visual editor provides curve-based parameter control:
- **Pencil Mode:** Individual band adjustment
- **Line Mode:** Linear interpolation between points
- **Curve Mode:** Smooth interpolation between points
- **Visual Feedback:** Real-time visualization of parameter curves
- **Precision Control:** Frame-accurate parameter positioning

### Filter Algorithm Options
Different filter algorithms for band splitting:
- **Gentle Mode:** Soft crossover slopes for smooth transitions
- **Sharp Mode:** Steep crossover slopes for precise separation
- **Phase Response:** Different phase characteristics per mode
- **Frequency Accuracy:** Different frequency response per mode
- **CPU Considerations:** Different processing loads per mode

### Signal Processing Chain
The internal architecture processes audio as follows:
- **Input Stage:** Audio signal monitoring and routing
- **Frequency Splitting:** 16-band frequency separation
- **Delay Processing:** Individual delay per frequency band
- **Morphing:** Blending between different delay configurations
- **Curve Application:** Spline-based parameter shaping
- **Output Stage:** Final signal routing and monitoring

### Scale Control System
The scale parameter extends delay capabilities:
- **Positive Scaling:** Extends delay times (up to 1000ms)
- **Negative Scaling:** Reverses delay patterns (creates "reverse" effects)
- **Multiplier Effect:** Multiplies all band delay times
- **Creative Applications:** Enables long delays and reverse effects
- **Timing Control:** Precise control over delay timing

## 🎛️ Parameter Deep Dive

### Band Editor Controls
- **Function:** Individual control over 16 frequency bands
  - **Time:** Delay time for each band (0-100ms base)
    - Range: 0-100ms (before scaling)
    - Effect: Controls delay time per frequency band
    - Use for: Frequency-specific delay timing
    - Pro tip: Lower bands for faster response, higher for delayed response
  - **Volume:** Level for each band
    - Range: 0-100% (typically)
    - Effect: Controls amplitude of delayed signal per band
    - Use for: Frequency-specific level control
    - Pro tip: Use for spectral shaping of delay
  - **Pan:** Stereo position for each band
    - Range: Hard left to hard right
    - Effect: Controls stereo position of delayed signal per band
    - Use for: Frequency-specific stereo positioning
    - Pro tip: Create spectral stereo movement
- **Behavior:**
  - Each band operates independently
  - Changes affect only the selected parameter
  - Visual feedback shows current curve
  - Pro tip: Use for precise spectral control
- **Applications:**
  - Spectral delay: Different delays per frequency
  - Stereo widening: Different panning per frequency
  - Creative shaping: Volume curves for spectral effects
  - Frequency isolation: Individual band control
  - Pro tip: Use for complex spectral processing

### Scale Control
- **Function:** Global delay time multiplier
  - Range: -100% to +100% (typically)
  - Effect: Multiplies all band delay times
  - Use for: Extending delay range or reversing patterns
  - Pro tip: Positive values extend delays, negative reverse them
- **Behavior:**
  - Positive values: Extend delay times (up to 1000ms)
  - Negative values: Reverse delay patterns
  - Zero: Unity scaling (base delay times)
  - Pro tip: Use negative for reverse echo effects
- **Applications:**
  - Long delays: Positive values for extended delays
  - Reverse effects: Negative values for reverse patterns
  - Timing precision: Zero for base timing
  - Creative scaling: Extreme values for unique effects
  - Pro tip: Use for dramatic timing changes

### Morph Control
- **Function:** Blends between 8 internal presets
  - Range: 0-100% (across 8 presets)
  - Effect: Interpolates between different band configurations
  - Use for: Evolving delay patterns
  - Pro tip: Essential for dynamic delay changes
- **Behavior:**
  - Each preset stores complete band settings
  - Smooth interpolation between presets
  - Real-time morphing capability
  - Pro tip: Use for evolving delay characteristics
- **Applications:**
  - Preset blending: Morph between different delay setups
  - Evolution: Create evolving delay patterns
  - Automation: Automate for dynamic expression
  - Creative morphing: Combine different delay approaches
  - Pro tip: Use for dynamic delay expression

### Feedback Control
- **Function:** Controls delay repeats and resonance
  - Range: 0-100% (typically)
  - Effect: Determines how much delayed signal feeds back
  - Use for: Creating delay tails and resonance
  - Pro tip: Higher values create longer delay tails
- **Behavior:**
  - Low values: Short delay tails
  - High values: Long delay tails, possible resonance
  - Pro tip: Use for delay tail control
- **Applications:**
  - Short tails: Low values for tight delays
  - Long tails: High values for sustained delays
  - Resonance: Maximum values for resonant effects
  - Creative feedback: Extreme values for unique effects
  - Pro tip: Use with caution to avoid harshness

### Filter Type Control
- **Function:** Selects band splitting algorithm
  - Options: Gentle, Sharp, and other modes
  - Effect: Changes crossover characteristics between bands
  - Use for: Different frequency separation approaches
  - Pro tip: Gentle for smooth transitions, Sharp for precise separation
- **Behavior:**
  - Gentle: Soft crossover slopes, smooth transitions
  - Sharp: Steep crossover slopes, precise separation
  - Pro tip: Match to desired spectral characteristics
- **Applications:**
  - Smooth processing: Gentle mode for smooth transitions
  - Precise separation: Sharp mode for clear separation
  - Creative separation: Different modes for different effects
  - Quality optimization: Choose based on CPU needs
  - Pro tip: Use Gentle for musical applications

## 🎼 Sound Design Applications

### Spectral Effects
Using Multiband Delay for frequency-specific effects:

**Spectral Riser Creation:**
- **Ascending Pattern:** Creating frequency-ascending delay patterns
  - Draw ascending line in Time tab
  - Low frequencies first, high frequencies delayed
  - Essential for riser effects
  - Perfect for build-ups and transitions
  - Pro tip: Use automation for evolving risers

- **Descending Pattern:** Creating frequency-descending delay patterns
  - Draw descending line in Time tab
  - High frequencies first, low frequencies delayed
  - Essential for downlift effects
  - Perfect for breakdowns and releases
  - Pro tip: Use negative scale for reverse effects

- **Complex Patterns:** Creating evolving spectral patterns
  - Use spline editor for complex curves
  - Combine with automation for evolution
  - Essential for complex spectral effects
  - Perfect for evolving textures
  - Pro tip: Use for sophisticated spectral design

### Stereo Enhancement
Using Multiband Delay for stereo field manipulation:

**Frequency-Specific Panning:**
- **S-Curve Panning:** Creating S-curve stereo positioning
  - Draw S-curve in Pan tab
  - Low and high frequencies to opposite sides
  - Mid frequencies centered
  - Essential for stereo widening
  - Perfect for wide stereo effects
  - Pro tip: Use for maximum stereo width

- **Gradient Panning:** Creating smooth stereo gradients
  - Draw linear gradient in Pan tab
  - Create smooth stereo field transitions
  - Essential for natural stereo enhancement
  - Perfect for subtle stereo widening
  - Pro tip: Use for natural stereo enhancement

- **Complex Panning:** Creating complex stereo patterns
  - Use spline editor for complex panning
  - Create evolving stereo field patterns
  - Essential for sophisticated stereo design
  - Perfect for evolving stereo effects
  - Pro tip: Use for creative stereo manipulation

### Creative Applications
Using Multiband Delay for experimental applications:

**Reverse Effects:**
- **Negative Scaling:** Creating reverse echo effects
  - Use negative scale values for reverse patterns
  - High frequencies arrive before low frequencies
  - Perfect for experimental music
  - Essential for reverse delay effects
  - Useful for "sucking" sounds

**Spectral Clouds:**
- **Complex Delay Patterns:** Creating evolving spectral textures
  - Use multiple bands with different delays
  - Apply appropriate feedback settings
  - Perfect for ambient music
  - Essential for evolving textures
  - Useful for atmospheric effects

**Rhythmic Applications:**
- **Frequency-Based Rhythms:** Creating rhythmic patterns with frequency
  - Use different delays per frequency band
  - Create rhythmic spectral patterns
  - Perfect for electronic music
  - Essential for rhythmic delay effects
  - Useful for evolving rhythmic patterns

### Texture Creation
Using Multiband Delay for texture generation:

**Atmospheric Textures:**
- **Evolving Delays:** Creating evolving atmospheric textures
  - Use automation for evolving delay patterns
  - Apply appropriate feedback settings
  - Perfect for ambient music
  - Essential for evolving soundscapes
  - Useful for atmospheric enhancement

- **Spectral Evolution:** Creating evolving spectral content
  - Use morphing for evolving spectral patterns
  - Apply spline editor for complex curves
  - Perfect for evolving textures
  - Essential for sophisticated spectral design
  - Useful for evolving spectral effects

- **Complex Textures:** Creating complex textural elements
  - Combine multiple delay approaches
  - Use with other effects for complexity
  - Perfect for experimental music
  - Essential for complex textural design
  - Useful for unique sonic textures

## 🧪 Experimental Techniques

### Advanced Multiband Applications
Creative uses of Multiband Delay's capabilities:

**Spectral Manipulation:**
- **Frequency-Specific Delay:** Creating unique spectral delay patterns
  - Use different delays for different frequency ranges
  - Create evolving spectral textures
  - Perfect for experimental music
  - Essential for sophisticated spectral design
  - Useful for unique spectral effects

**Morphing Experiments:**
- **Preset Morphing:** Creating evolving preset transitions
  - Store different delay configurations as presets
  - Morph between them for evolving effects
  - Perfect for evolving arrangements
  - Essential for dynamic expression
  - Useful for evolving delay patterns

**Curve-Based Processing:**
- **Spline Manipulation:** Using spline editor for complex curves
  - Draw complex curves for evolving effects
  - Create organic delay patterns
  - Perfect for evolving textures
  - Essential for sophisticated curve design
  - Useful for organic delay patterns

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Spectral Automation:** Automating spectral parameters for evolving effects
  - Create evolving spectral characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic spectral expression
  - Use for expressive spectral control

**Modulation Applications:**
- **Parameter Modulation:** Using external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Stage Processing:**
- **Complex Delay Enhancement:** Multiple processing stages for sophisticated effects
  - Create multi-stage delay enhancement
  - Apply different processing to different stages
  - Build sophisticated delay processing chains
  - Perfect for advanced sound design
  - Use for complex delay processing

## 🎚️ Workflow Optimization

### Spectral Delay Workflows
Efficient approaches to using Multiband Delay for spectral effects:

**Riser Creation:**
- **Spectral Riser Setup:** Creating frequency-based riser effects
  - Draw ascending delay pattern
  - Use appropriate feedback settings
  - Essential for build-up effects
  - Pro tip: Use automation for evolving risers

- **Stereo Widening:** Creating frequency-specific stereo enhancement
  - Draw S-curve in pan tab
  - Apply appropriate delay settings
  - Essential for stereo enhancement
  - Pro tip: Use for maximum stereo width

**Texture Creation:**
- **Atmospheric Delay:** Creating evolving atmospheric textures
  - Use complex delay patterns
  - Apply appropriate feedback for evolution
  - Essential for ambient music
  - Pro tip: Use for evolving soundscapes

### Integration Workflows
Working with other plugins and tools:

**Effects Integration:**
- **Pre-Effects:** Using before other effects
  - Apply before reverb for spatial effects
  - Use before delay for rhythmic patterns
  - Essential for proper signal flow
  - Pro tip: Use for tone preparation

- **Post-Effects:** Using after other effects
  - Apply after reverb for processed spatial effects
  - Use after delay for processed rhythmic patterns
  - Essential for final processing
  - Pro tip: Use for final tone shaping

**Analysis Integration:**
- **Spectrum Analysis:** Using with spectrum analyzers for feedback
  - Monitor frequency changes in real-time
  - Compare with reference tracks
  - Essential for informed parameter control
  - Pro tip: Use for visual feedback

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Spectral Risers:** Creating frequency-based build-up effects
- **Stereo Enhancement:** Adding width to electronic elements
- **Rhythmic Effects:** Creating rhythmic delay patterns
- [ ] Create a "Spectral Riser" that sweeps frequencies in time
- [ ] Widen a mono sound using frequency-staggered panning
- [ ] Use the Morph knob to transition between 4 distinct textures
- [ ] Explain why the Scale knob is the key to long delay times
- [ ] Create frequency-specific delay patterns with the band editor
- [ ] Set up complex spectral delay with appropriate feedback
- [ ] Use the spline editor for complex curve creation
- [ ] Apply appropriate filter types for different applications
- [ ] Create reverse delay effects using negative scaling
- [ ] Troubleshoot phase and frequency separation issues effectively
- [ ] Integrate Multiband Delay into efficient spectral workflows
- [ ] Create genre-specific delay presets for different musical styles
- [ ] Optimize Multiband Delay settings for minimal CPU usage
- [ ] Use Multiband Delay for creative sound design applications
- [ ] Set up advanced spectral routing for complex projects
- [ ] Apply Multiband Delay in live performance scenarios
- [ ] Create experimental delay effects with extreme settings
- [ ] Combine Multiband Delay with other effects for layered processing
- [ ] Integrate Multiband Delay with other automation tools seamlessly
- [ ] Create custom spectral delay workflows for specific creative needs
- [ ] Use Multiband Delay effectively in large, complex projects
- [ ] Generate complex rhythmic patterns with spectral automation
- [ ] Create hybrid delay effects combining frequency and time processing
- [ ] Apply Multiband Delay in mastering contexts with appropriate care
- [ ] Create complex multi-stage delay chains with smooth automation
- [ ] Design custom spectral delay patches for specific musical contexts
- [ ] Use Multiband Delay for creative vocal processing applications
- [ ] Apply advanced spectral processing techniques for character enhancement
- [ ] Create genre-specific preset libraries for efficient workflow
- [ ] Integrate Multiband Delay with external hardware for hybrid processing
- [ ] Use Multiband Delay for audio restoration and creative repair applications
- [ ] Combine Multiband Delay with other spectral processing tools
- [ ] Apply Multiband Delay in surround sound or multi-channel setups
- [ ] Create complex spectral relationships using multiple bands
- [ ] Use Multiband Delay for creative instrumental processing applications
- [ ] Integrate Multiband Delay with other automation tools for complex control
- [ ] Create complex atmospheric textures using multiple parameters
- [ ] Design custom spectral algorithms for unique spectral characteristics
- [ ] Apply advanced filtering techniques for tone shaping
- [ ] Use Multiband Delay for creative stereo enhancement beyond traditional methods
- [ ] Combine Multiband Delay with convolution for hybrid delay approaches
- [ ] Implement advanced envelope shaping for dynamic expression
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use Multiband Delay for creative sound design in film and game audio
- [ ] Apply Multiband Delay in live sound reinforcement scenarios
- [ ] Create experimental delay textures using extreme parameter settings
- [ ] Integrate Multiband Delay with external processors for complex sound design
- [ ] Generate complex harmonic structures with precise control
- [ ] Use Multiband Delay for formant synthesis and spectral creation
- [ ] Apply advanced resonance techniques for character enhancement
- [ ] Create evolving textures using parameter automation
- [ ] Design custom spectral processing patterns for sophisticated expression
- [ ] Use Multiband Delay for creative bass enhancement with spectral processing
- [ ] Combine Multiband Delay with other vintage emulations for authentic sounds
- [ ] Apply Multiband Delay in educational contexts for synthesis learning
- [ ] Create custom spectral delay patches for retro music production
- [ ] Use Multiband Delay for creative lead enhancement with spectral processing
- [ ] Implement advanced morphing techniques for spectral evolution

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Multiband Delay

How to use spectral splitting to create futuristic vibes in Hip-Hop, R&B, and Pop.

---

## 1. PSYCHEDELIC (Primary Focus)
*Evolving textures, frequency-split echoes, and "liquid" motion.*
- **The Mental Model:** A sound being shattered into a prism and reconstructed in real-time.
- **Multiband Delay Levers:**
    - **Time Tab:** Draw a "jagged" or "chaotic" pattern. High frequencies delay late, low frequencies delay early.
    - **Morph Knob:** Automate this! Blend between a "wide" state and a "distorted" state.
    - **Scale Knob (Negative):** Move between +100% and -100%. The delays will flip from "Echoing" to "Sucking" (Reverse).
- **Listen For:** A sound that feels like it's "spinning" or "disintegrating" into harmonics.

## 2. VIBEY / MODERN LUSH
*Expensive-sounding width and spectral "shimmer."*
- **The Mental Model:** Modern Pop/R&B "Halos" where the sound wraps around your head.
- **Multiband Delay Levers:**
    - **Pan Tab:** Draw a smooth "S" curve. This places different frequencies in different parts of the stereo field.
    - **Vol Tab:** Use a "Ramp" to lower the volume of the lowest 4 bands. This keeps the sub-energy mono and clean.
    - **Scale:** Set to a low value (10–20%). This creates "micro-delays" that sound more like a high-quality ensemble than a distinct echo.
- **Listen For:** Immersive width that doesn't feel "chorused" or "fake."

## 3. MOODY
*Dark, trailing shadows and "underwater" spectral trails.*
- **The Mental Model:** Dark, cavernous spaces where only the bass and low-mids echo.
- **Multiband Delay Levers:**
    - **Vol Tab:** Lower the volume of all high-frequency bands (Bands 10-16).
    - **Feedback (FB):** High (60%). Create a long, dark spectral trail.
    - **Filter Type:** **Gentle**. This prevents harsh digital resonance in the shadows.
    - **Time Tab:** Keep low-frequency delays slightly longer than high-frequency ones.
- **Listen For:** A dark, heavy "ghost" that follows the main melody.

## 4. UPBEAT / ENERGETIC
*Rhythmic jitters, bright "shimmer" delays, and sharp transients.*
- **The Mental Model:** Hyperpop "ear candy" or energetic EDM-style build-ups.
- **Multiband Delay Levers:**
    - **Time Tab:** Draw a "Staircase" patterns where bands are synced to 1/16th note divisions (requires manual calculation or Scale snapping).
    - **Vol Tab:** Boost only the "Click" frequencies (3kHz – 8kHz) in the delayed signal.
    - **Feedback:** Low. Keep the repeats tight and snappy.
- **Listen For:** Rhythmic "jitter" that adds energy to a static loop.

---

## Vibe Check Matrix
| Vibe | Grid Shape | Scale Value | Morph Status | Filter Type |
| :--- | :--- | :--- | :--- | :--- |
| **Psyched**| Jagged / Random| Variable | Automated | Sharp |
| **Vibey** | Smooth S-Curve | 15% (Micro) | Static | Gentle |
| **Moody** | Low-Pass Ramp | 50% | Static | Gentle |
| **Upbeat** | Staircase | 100% (Sync) | Pulsing | Sharp |
| **Jazzy** | Minimal Curve | OFF | OFF | Gentle |

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: Multiband Delay

The frequency-dependent echo reference. [SRC: IL-MAN]

---

## 📊 The 16-Band Editor (Grid)
- **Time Tab:** Sets the base delay time (0–100ms) for each of the 16 bands.
- **Vol Tab:** Sets the output level for each band (can be used as a 16-band EQ).
- **Pan Tab:** Sets the stereo position for each band.
- **Pencil / Line / Curve:** Drawing tools to shape the bands quickly.

## ⏱️ Global Delay Controls
- **Scale:** Multiplies the base delay time.
  - *Positive (0 to 100%):* Extends delay up to 1000ms.
  - *Negative (0 to -100%):* Creates reverse "pre-echo" effects.
- **FB (Feedback):** Amount of delayed signal fed back into the input.
- **Feedback Type (Normal / Invert):** Changes the phase of the repeats.

## 🌀 Morphing System (Bottom)
- **Morph Knob:** Blends between the 8 internal preset slots (A through H).
- **Preset Slots (1-8):** Click a number to edit that specific state. All 16 bands are saved per slot.

## ⚙️ Filter & Quality
- **Filter Type (Gentle / Sharp):** Sets the slope of the 16-band frequency splitters.
  - *Gentle:* Smoother, more musical transitions.
  - *Sharp:* Precise isolation (can introduce phase artifacts).
- **Smoothing:** Blurs the transitions between bands to avoid "clicking" during automation.

---

## 🎯 Quick Spectral Recipes
- **Spectral Width:** Pan Tab -> Draw an "S" curve.
- **High-End Sparkle:** Vol Tab -> Lower the first 10 bands, keep the top 6 at max.
- **Cascading Echo:** Time Tab -> Draw a diagonal line from bottom-left to top-right.
- **Reverse Suck:** Set Scale to -100%.

```

---

## FILE: 01-Learning\Quick-Reference\visual-editor-modes.md

```markdown
# Visual Editor Modes: Multiband Delay

Mastering the drawing tools for the 16-band grid. [SRC: IL-MAN]

## 1. PENCIL MODE (Individual Control)
- **Function:** Draw or adjust individual bands one by one.
- **Best For:** Fine-tuning specific frequencies or creating "staircase" patterns where each band is precisely set.
- **Shortcut:** Left-click and drag horizontally to "paint" multiple bands at the same level.

## 2. LINE MODE (Linear Sweeps)
- **Function:** Draws a straight line between two points.
- **Best For:** Creating smooth "Spectral Ramps."
  - *Example:* A ramp from Low (0ms) to High (100ms) creates a delay that arrives later as the frequency gets higher.
- **Usage:** Click and drag from the start frequency to the end frequency.

## 3. CURVE MODE (Logarithmic / Smooth Arcs)
- **Function:** Draws a smooth curve (spline) between points.
- **Best For:** More "natural" sounding frequency distributions.
- **Usage:** Click and drag to create the curve. Use this in the **Pan Tab** to create organic-feeling stereo width that "blooms" around the center.

---

## Editor Pro-Tips
- **Right-Click:** Often opens a menu to Reset, Invert, or Flip the current curve.
- **Snap to Grid:** Hold **Alt** (standard FL behavior) if you want to bypass the internal grid snapping for very precise, tiny micro-delay offsets.
- **Vol as EQ:** Remember that the **Vol Tab** is essentially a 16-band Graphic EQ. You can use Line mode to create a low-pass or high-pass filter for the delayed signal only.

---
*For a guide on the Morph system that stores these curves, see the [04-Reference/morph-interpolation-logic.md](../04-Reference/morph-interpolation-logic.md) guide.*

```

---

## FILE: 02-Data\parameters\multiband-delay-specs.json

```json
{
  "plugin_name": "Multiband Delay",
  "category": "Delay / Spectral / Creative",
  "engine_specs": {
    "frequency_bands": 16,
    "base_delay_max_ms": 100,
    "total_scaled_delay_max_ms": 1000,
    "morph_presets": 8,
    "filter_types": ["Gentle", "Sharp"],
    "scaling_range": "-100% to +100%"
  },
  "parameters": [
    {
      "name": "Time (Band)",
      "type": "grid-slider",
      "description": "Sets base delay for 1 of 16 bands.",
      "mix_impact": "Spectral timing, rhythmic smearing"
    },
    {
      "name": "Vol (Band)",
      "type": "grid-slider",
      "description": "Sets level for 1 of 16 bands.",
      "mix_impact": "Spectral EQ, frequency focus"
    },
    {
      "name": "Pan (Band)",
      "type": "grid-slider",
      "description": "Sets stereo position for 1 of 16 bands.",
      "mix_impact": "Frequency-specific widening"
    },
    {
      "name": "Scale",
      "type": "knob",
      "description": "Global multiplier for all band delays.",
      "vibe_impact": "Reverse vs Forward echoes, scale of space"
    },
    {
      "name": "Morph",
      "type": "knob",
      "description": "Blends between 8 band-configuration presets.",
      "vibe_impact": "Evolving textures, motion"
    },
    {
      "name": "Feedback (FB)",
      "type": "knob",
      "description": "Amount of repeats.",
      "mix_impact": "Depth, cloud density"
    }
  ]
}

```

---

## FILE: 02-Data\presets\INDEX.md

```markdown
# Multiband Delay Complete Presets INDEX

## Genre Presets (10 files)
| File | Name | Genre | Mood | Character |
|------|------|-------|------|-----------|
| `genre/01-rhythmic-width.json` | Rhythmic Width | universal | electric | Rhythmic, dimensional |
| `genre/02-vocal-echo.json` | Vocal Echo | universal | smooth | Warm, clear |
| `genre/03-space-effect.json` | Space Effect | universal | moody | Ethereal, atmospheric |
| `genre/04-trap-slap.json` | Trap Slap | hip-hop/rap | aggressive | Punchy, tight |
| `genre/moody-dark-atmosphere.json` | Dark Atmosphere | hip-hop/rap | moody | Eerie, atmospheric |
| `genre/upbeat-bouncy-rhythm.json` | Bouncy Rhythm | hip-hop/rap | upbeat | Short, rhythmic |
| `genre/electro-width.json` | Electro Width | hip-hop/rap | electric | Wide, energetic |
| `genre/jazzy-echo.json` | Jazzy Echo | hip-hop/rap | smooth | Warm, smooth |
| `genre/funky-slap.json` | Funky Slap | hip-hop/rap | funky | Punchy, groovy |
| `genre/energetic-drill-stutter.json` | Drill Stutter | hip-hop/rap | energetic | Short, intense |

## Signature Presets (3 files)
| File | Artist | Style |
|------|--------|-------|
| `signature/deadmau5-spatial.json` | deadmau5 | Progressive Techno |
| `signature/calvin-harris-energy.json` | Calvin Harris | Big Room EDM |
| `signature/flume-texture.json` | Flume | Future Bass |

## Quick Reference
| Goal | Preset | File |
|------|--------|------|
| Rhythmic width | Rhythmic Width | `genre/01-rhythmic-width.json` |
| Vocal delay | Vocal Echo | `genre/02-vocal-echo.json` |
| Space creation | Space Effect | `genre/03-space-effect.json` |
| Trap bass | Trap Slap | `genre/04-trap-slap.json` |
| Dark mood | Dark Atmosphere | `genre/moody-dark-atmosphere.json` |
| Bouncy rhythm | Bouncy Rhythm | `genre/upbeat-bouncy-rhythm.json` |
| Electro width | Electro Width | `genre/electro-width.json` |
| Jazzy echo | Jazzy Echo | `genre/jazzy-echo.json` |
| Funky slap | Funky Slap | `genre/funky-slap.json` |
| Drill stutter | Drill Stutter | `genre/energetic-drill-stutter.json` |

## Workflow Reference
- [Multiband Delay By-Goal Workflows](../03-Workflows/by-goal/INDEX.md)
- [Multiband Delay Safety Rules](../02-Data/rules/multiband-delay-safety-rules.md)

```

---

## FILE: 02-Data\presets\genre\01-rhythmic-width.json

```json
{
  "name": "Rhythmic Width",
  "genre": "universal",
  "mood": "electric",
  "description": "Different delay times per band for rhythmic width",
  "parameters": {
    "lowBand": {
      "time": 120,
      "feedback": 40,
      "mix": 30
    },
    "midBand": {
      "time": 240,
      "feedback": 50,
      "mix": 40
    },
    "highBand": {
      "time": 360,
      "feedback": 30,
      "mix": 50
    }
  },
  "workflow": {
    "useCase": "Adding rhythmic width",
    "steps": [
      "Set low band short",
      "Set mid band double",
      "Set high band triple",
      "Blend to taste"
    ],
    "troubleshooting": [
      { "issue": "Too busy", "fix": "Reduce mix levels" },
      { "issue": "Phasing", "fix": "Shorten delay times" }
    ]
  },
  "abTest": {
    "listenFor": "Rhythmic, dimensional sound",
    "duration": "Full mix"
  }
}
```

---

## FILE: 02-Data\presets\genre\02-vocal-echo.json

```json
{
  "name": "Vocal Echo",
  "genre": "universal",
  "mood": "smooth",
  "description": "Mid-focused delay for vocal echoes",
  "parameters": {
    "lowBand": {
      "time": 0,
      "feedback": 0,
      "mix": 0
    },
    "midBand": {
      "time": 320,
      "feedback": 45,
      "mix": 50
    },
    "highBand": {
      "time": 200,
      "feedback": 20,
      "mix": 25
    }
  },
  "workflow": {
    "useCase": "Vocal and instrument echoes",
    "steps": [
      "Disable low band",
      "Set mid band delay",
      "Add subtle high band",
      "Blend for depth"
    ],
    "troubleshooting": [
      { "issue": "Too washy", "fix": "Reduce mid feedback" },
      { "issue": "No presence", "fix": "Add high band" }
    ]
  },
  "abTest": {
    "listenFor": "Clear, dimensional vocals",
    "duration": "Vocal phrase"
  }
}
```

---

## FILE: 02-Data\presets\genre\03-space-effect.json

```json
{
  "name": "Space Effect",
  "genre": "EDM",
  "mood": "electric",
  "description": "Wide spatial effects with different band timing",
  "parameters": {
    "lowBand": {
      "time": 100,
      "feedback": 35,
      "mix": 25
    },
    "midBand": {
      "time": 200,
      "feedback": 50,
      "mix": 40
    },
    "highBand": {
      "time": 400,
      "feedback": 40,
      "mix": 55
    }
  },
  "workflow": {
    "useCase": "Creative spatial effects",
    "steps": [
      "Short low for rhythm",
      "Medium mid for body",
      "Long high for air",
      "Blend for space"
    ],
    "tips": [
      "Great for synths",
      "Creates depth",
      "Use on full mix"
    ]
  }
}
```

---

## FILE: 02-Data\presets\genre\04-trap-slap.json

```json
{
  "name": "Trap Slap",
  "genre": "hip-hop/rap",
  "mood": "funky",
  "description": "High-frequency slap delay for trap effects",
  "parameters": {
    "lowBand": {
      "time": 0,
      "feedback": 0,
      "mix": 0
    },
    "midBand": {
      "time": 150,
      "feedback": 30,
      "mix": 20
    },
    "highBand": {
      "time": 280,
      "feedback": 60,
      "mix": 45
    }
  },
  "workflow": {
    "useCase": "Trap hi-hat and vocal slaps",
    "steps": [
      "Focus on high band",
      "Medium delay time",
      "Higher feedback",
      "Create slap effect"
    ],
    "tips": [
      "Great on hi-hats",
      "Adds movement",
      "Use on vocals too"
    ]
  }
}
```

---

## FILE: 02-Data\presets\genre\electro-width.json

```json
{
  "name": "Electro Width",
  "genre": "hip-hop/rap",
  "mood": "electric",
  "description": "Wide, energetic delays for electronic hip-hop",
  "parameters": {
    "lowBand": {
      "time": 100,
      "feedback": 50,
      "mix": 40
    },
    "midBand": {
      "time": 200,
      "feedback": 60,
      "mix": 50
    },
    "highBand": {
      "time": 400,
      "feedback": 55,
      "mix": 55
    }
  },
  "workflow": {
    "useCase": "Electro hip-hop, experimental rap",
    "steps": [
      "Vary times per band",
      "Moderate feedback for width",
      "Higher mix for energy",
      "Create movement with time",
      "Check stereo imaging"
    ],
    "tips": [
      "Great on synth leads",
      "Perfect for build-ups",
      "Use on percussion",
      "Automate for dynamics"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\energetic-drill-stutter.json

```json
{
  "name": "Drill Stutter",
  "genre": "hip-hop/rap",
  "mood": "energetic",
  "description": "Short, intense delays for drill energy",
  "parameters": {
    "lowBand": {
      "time": 60,
      "feedback": 70,
      "mix": 50
    },
    "midBand": {
      "time": 120,
      "feedback": 65,
      "mix": 55
    },
    "highBand": {
      "time": 180,
      "feedback": 60,
      "mix": 60
    }
  },
  "workflow": {
    "useCase": "Drill, trap, aggressive hip-hop",
    "steps": [
      "Very short times for stutter",
      "High feedback for intensity",
      "High mix for presence",
      "Create aggressive rhythm",
      "Automate for effect"
    ],
    "tips": [
      "Perfect on 808s",
      "Great on snares",
      "Use on vocals for effect",
      "Combine with distortion"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\funky-slap.json

```json
{
  "name": "Funky Slap",
  "genre": "hip-hop/rap",
  "mood": "funky",
  "description": "Punchy, rhythmic delays for funky grooves",
  "parameters": {
    "lowBand": {
      "time": 120,
      "feedback": 55,
      "mix": 45
    },
    "midBand": {
      "time": 240,
      "feedback": 50,
      "mix": 50
    },
    "highBand": {
      "time": 360,
      "feedback": 45,
      "mix": 55
    }
  },
  "workflow": {
    "useCase": "G-funk, funk-inspired hip-hop",
    "steps": [
      "Rhythmic times for groove",
      "Moderate feedback for punch",
      "Higher mix for presence",
      "Sync to beat",
      "Create funky character"
    ],
    "tips": [
      "Great on bass for slap effect",
      "Perfect on guitars",
      "Use on drums for texture",
      "Layer with wah effects"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\jazzy-echo.json

```json
{
  "name": "Jazzy Echo",
  "genre": "hip-hop/rap",
  "mood": "smooth",
  "description": "Warm, smooth echoes for jazzy hip-hop",
  "parameters": {
    "lowBand": {
      "time": 180,
      "feedback": 45,
      "mix": 25
    },
    "midBand": {
      "time": 360,
      "feedback": 50,
      "mix": 35
    },
    "highBand": {
      "time": 540,
      "feedback": 40,
      "mix": 40
    }
  },
  "workflow": {
    "useCase": "Jazzy hip-hop, lo-fi, soulful rap",
    "steps": [
      "Moderate times for warmth",
      "Lower feedback for smooth",
      "Lower mix for subtlety",
      "Sync to tempo loosely",
      "Maintain natural feel"
    ],
    "tips": [
      "Perfect on Rhodes and keys",
      "Great on vocals for depth",
      "Use on guitars for space",
      "Add vinyl noise for lo-fi"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\moody-dark-atmosphere.json

```json
{
  "name": "Dark Atmosphere",
  "genre": "hip-hop/rap",
  "mood": "moody",
  "description": "Eerie, atmospheric delays for moody productions",
  "parameters": {
    "lowBand": {
      "time": 250,
      "feedback": 60,
      "mix": 30
    },
    "midBand": {
      "time": 500,
      "feedback": 70,
      "mix": 40
    },
    "highBand": {
      "time": 750,
      "feedback": 80,
      "mix": 45
    }
  },
  "workflow": {
    "useCase": "Dark trap, drill, moody hip-hop",
    "steps": [
      "Set long times for atmosphere",
      "Increase feedback for tails",
      "Higher mix for presence",
      "Create depth without clutter",
      "Automate for dynamics"
    ],
    "tips": [
      "Perfect for intros",
      "Great on pads and vocals",
      "Use high feedback carefully",
      "Check mono compatibility"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\upbeat-bouncy-rhythm.json

```json
{
  "name": "Bouncy Rhythm",
  "genre": "hip-hop/rap",
  "mood": "upbeat",
  "description": "Short, rhythmic delays for bouncy hip-hop",
  "parameters": {
    "lowBand": {
      "time": 80,
      "feedback": 40,
      "mix": 35
    },
    "midBand": {
      "time": 160,
      "feedback": 50,
      "mix": 45
    },
    "highBand": {
      "time": 240,
      "feedback": 35,
      "mix": 50
    }
  },
  "workflow": {
    "useCase": "Upbeat hip-hop, party tracks",
    "steps": [
      "Short times for rhythm",
      "Low feedback for clean repeats",
      "Higher mix for presence",
      "Sync to tempo",
      "Blend with dry signal"
    ],
    "tips": [
      "Perfect on hi-hats",
      "Great on snare for 808 bounce",
      "Try on vocals for rhythm",
      "Adjust for tempo changes"
    ]
  }
}

```

---

## FILE: 02-Data\presets\signature\calvin-harris-energy.json

```json
{
  "name": "Calvin Harris Energy Style",
  "producer": "Calvin Harris",
  "description": "Pumping delay effect for EDM drops",
  "reference": "Summer, This Is What You Came For",
  "parameters": {
    "lowBand": {
      "time": 80,
      "feedback": 70,
      "mix": 45
    },
    "midBand": {
      "time": 160,
      "feedback": 60,
      "mix": 50
    },
    "highBand": {
      "time": 320,
      "feedback": 50,
      "mix": 55
    }
  },
  "workflow": {
    "useCase": "EDM, big room house",
    "signatureElements": [
      "Pumping rhythm",
      "Aggressive delay",
      "Energy building"
    ],
    "steps": [
      "Short times for pumping",
      "High feedback for intensity",
      "Blend to taste",
      "Sidechain to kick"
    ],
    "tips": [
      "Perfect for builds and drops",
      "Great on synth leads",
      "Use with sidechain compression"
    ]
  }
}

```

---

## FILE: 02-Data\presets\signature\deadmau5-spatial.json

```json
{
  "name": "Deadmau5 Spatial Style",
  "producer": "deadmau5",
  "description": "Wide, atmospheric delay with long release tails",
  "reference": "Strobe, Some Chords",
  "parameters": {
    "lowBand": {
      "time": 200,
      "feedback": 50,
      "mix": 25
    },
    "midBand": {
      "time": 400,
      "feedback": 60,
      "mix": 35
    },
    "highBand": {
      "time": 600,
      "feedback": 70,
      "mix": 40
    }
  },
  "workflow": {
    "useCase": "Progressive electronic, ambient",
    "signatureElements": [
      "Long, evolving delays",
      "Wide stereo image",
      "Atmospheric depth"
    ],
    "steps": [
      "Set increasing times per band",
      "Increase feedback for tails",
      "Blend for atmosphere",
      "Automate mix for builds"
    ],
    "tips": [
      "Perfect for breakdowns",
      "Great for melodic elements",
      "Check mono compatibility"
    ]
  }
}

```

---

## FILE: 02-Data\presets\signature\flume-texture.json

```json
{
  "name": "Flume Texture Style",
  "producer": "Flume",
  "description": "Unique frequency-shifted delays for experimental textures",
  "reference": "Never Be Like You, Helix",
  "parameters": {
    "lowBand": {
      "time": 150,
      "feedback": 55,
      "mix": 40
    },
    "midBand": {
      "time": 300,
      "feedback": 65,
      "mix": 50
    },
    "highBand": {
      "time": 450,
      "feedback": 45,
      "mix": 60
    }
  },
  "workflow": {
    "useCase": "Future bass, experimental electronic",
    "signatureElements": [
      "Frequency-shifted delays",
      "Unconventional textures",
      "Dreamy quality"
    ],
    "steps": [
      "Set varied times per band",
      "Increase mid feedback for character",
      "Blend for texture",
      "Automate for movement"
    ],
    "tips": [
      "Great on vocals and synths",
      "Perfect for breakdowns",
      "Layer with reverb for depth"
    ]
  }
}

```

---

## FILE: 02-Data\rules\multiband-delay-safety-rules.md

```markdown
# Multiband Delay Safety Rules

## Level Management

### Input Levels
- Keep input levels moderate
- Avoid overloading bands
- Check each band level

### Output Levels
- Each band has output control
- Match levels between bands
- Check summed output

---

## Delay Time Guidelines

| Band | Time Range | Typical Use |
|------|------------|-------------|
| Low | 80-200ms | Rhythmic |
| Mid | 120-300ms | Echoes |
| High | 200-500ms | Atmosphere |

---

## Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Phasing | Long delays in bass | Shorten low band |
| Muddy | Too much low delay | Reduce low mix |
| Harsh | Too much high delay | Reduce high mix |

---

## Related Documentation

- [Multiband Delay Quick Reference](../01-Learning/Quick-Reference/quick-reference.md)

```

---

## FILE: 03-Workflows\by-goal\INDEX.md

```markdown
# Multiband Delay Workflows INDEX

## By-Goal Workflows

| File | Focus |
|------|-------|
| [reversing-spectral-echoes.md](reversing-spectral-echoes.md) | Reverse delay effects |
| [cascading-frequency-delay.md](cascading-frequency-delay.md) | Cascading delays |
| [spectral-width-widening.md](spectral-width-widening.md) | Width enhancement |
| [hop-hop-subgenre-delays.md](hop-hop-subgenre-delays.md) | Hip-Hop Sub-Genre Delays |

## Quick Reference

| Goal | Workflow |
|------|----------|
| Reverse effects | Reversing Spectral Echoes |
| Cascading delays | Cascading Frequency Delay |
| Width widening | Spectral Width Widening |
| Dark atmosphere | Hip-Hop Sub-Genre Delays |
| Bouncy rhythm | Hip-Hop Sub-Genre Delays |
| Electro width | Hip-Hop Sub-Genre Delays |
| Jazzy echo | Hip-Hop Sub-Genre Delays |
| Funky slap | Hip-Hop Sub-Genre Delays |
| Drill stutter | Hip-Hop Sub-Genre Delays |

## Related Documentation

- [Multiband Delay Presets](../02-Data/presets/INDEX.md)
- [Multiband Delay Safety Rules](../02-Data/rules/multiband-delay-safety-rules.md)

```

---

## FILE: 03-Workflows\by-goal\cascading-frequency-delay.md

```markdown
# Workflow: Cascading Frequency Delay (Futuristic Trails)

*Goal: Creating a "falling" or "rising" spectral echo where high frequencies trail behind low frequencies (or vice versa).*

## Vibe Mapping
- **Psychedelic:** ⭐⭐⭐⭐⭐ (Primary)
- **Upbeat:** ⭐⭐⭐⭐⭐ (Primary)
- **Moody:** ⭐⭐⭐⭐ (With dark filtering)

## 🎛️ Routing Context
- **Preferred:** Parallel Send track or high-mix insert on a melody.
- **Mix Status:** 50% Wet.

## 🚶 Step-by-Step Setup
1. **The Base Time:**
   - Select the **Time** tab.
   - Set the **Scale** knob to **50%**.
2. **The "Ramp" Pattern:**
   - Select the **Line** drawing tool.
   - Draw a line from the bottom-left corner (Band 1, 0ms) to the top-right corner (Band 16, 100ms).
   - *Result:* The higher the frequency, the later it repeats. This creates a "smearing" effect that sounds futuristic and digital.
3. **The Feedback Cloud:**
   - Increase the **FB (Feedback)** knob to **40%**.
   - *Result:* The cascading repeats will now "stack," creating a lush spectral cloud that evolves.
4. **Sculpting the Tone (Vol Tab):**
   - Switch to the **Vol** tab.
   - Lower the volume of the middle bands (Bands 6-10) slightly.
   - *Why:* This creates a "split" in the spectrum, making the high-frequency trails sound like they are separate from the main sound.
5. **The Filter Character:**
   - Set **Filter Type** to **Sharp**. This emphasizes the individual bands, making the cascade sound more "glitchy" and defined.

## 🔄 Variations
- **The "Falling" Echo:** Draw the line from top-left to bottom-right.
- **The "Butterfly":** Use the **Curve** tool to draw a "V" shape in the Time tab. Lows and Highs arrive late, Mids arrive early.

## ⚠️ Pitfalls & Fixes
- **Problem:** The echoes are too short.
- **Fix:** Increase the **Scale** knob. Remember, the grid only sets the *relative* time; Scale sets the *actual* time.
- **Problem:** Metallic ringing.
- **Fix:** Switch the **Filter Type** to **Gentle**.

## 🎚️ Automation Ideas
- **Cascade Sweep:** Automate the **Scale** knob from 0 to 100% during a transition.
- **Texture Morph:** Automate the **Morph** knob between a "Rising" ramp and a "Falling" ramp.

```

---

## FILE: 03-Workflows\by-goal\hop-hop-subgenre-delays.md

```markdown
# Hip-Hop Sub-Genre Multiband Delay Workflows

## Moody Dark Atmosphere
| Band | Time | Feedback | Mix |
|------|------|----------|-----|
| Low | 250ms | 60% | 30% |
| Mid | 500ms | 70% | 40% |
| High | 750ms | 80% | 45% |

### Tips
- Long times for atmosphere
- Higher feedback for tails
- Perfect for intros
- Use on pads and vocals

---

## Upbeat Bouncy Rhythm
| Band | Time | Feedback | Mix |
|------|------|----------|-----|
| Low | 80ms | 40% | 35% |
| Mid | 160ms | 50% | 45% |
| High | 240ms | 35% | 50% |

### Tips
- Short times for rhythm
- Low feedback for clean
- Great on hi-hats
- Perfect for 808 bounce

---

## Electro Width
| Band | Time | Feedback | Mix |
|------|------|----------|-----|
| Low | 100ms | 50% | 40% |
| Mid | 200ms | 60% | 50% |
| High | 400ms | 55% | 55% |

### Tips
- Vary times per band
- Moderate feedback for width
- Great on synth leads
- Perfect for build-ups

---

## Jazzy Echo
| Band | Time | Feedback | Mix |
|------|------|----------|-----|
| Low | 180ms | 45% | 25% |
| Mid | 360ms | 50% | 35% |
| High | 540ms | 40% | 40% |

### Tips
- Moderate times for warmth
- Lower feedback for smooth
- Perfect on Rhodes and keys
- Great on vocals for depth

---

## Funky Slap
| Band | Time | Feedback | Mix |
|------|------|----------|-----|
| Low | 120ms | 55% | 45% |
| Mid | 240ms | 50% | 50% |
| High | 360ms | 45% | 55% |

### Tips
- Rhythmic times for groove
- Moderate feedback for punch
- Great on bass for slap effect
- Perfect on guitars

---

## Energetic Drill Stutter
| Band | Time | Feedback | Mix |
|------|------|----------|-----|
| Low | 60ms | 70% | 50% |
| Mid | 120ms | 65% | 55% |
| High | 180ms | 60% | 60% |

### Tips
- Very short times for stutter
- High feedback for intensity
- Perfect on 808s
- Great on snares

---

## Related Documentation
- [Multiband Delay Presets INDEX](../02-Data/presets/INDEX.md)
- [Multiband Delay Safety Rules](../02-Data/rules/multiband-delay-safety-rules.md)

```

---

## FILE: 03-Workflows\by-goal\reversing-spectral-echoes.md

```markdown
# Workflow: Reversing Spectral Echoes (Sucking Effects)

*Goal: Using the negative Scale parameter to create pre-echoes and "sucking" sounds that pull the listener into the next beat.*

## Vibe Mapping
- **Psychedelic:** ⭐⭐⭐⭐⭐ (Primary)
- **Upbeat:** ⭐⭐⭐⭐ (For transitions)
- **Moody:** ⭐⭐⭐⭐ (Haunting ghost effects)

## 🎛️ Routing Context
- **Preferred:** Insert on a Vocal, Snare, or Impact FX.
- **Mix Status:** 100% Wet during build-ups, 20% for background textures.

## 🚶 Step-by-Step Setup
1. **The Grid Shape:**
   - Select the **Time** tab.
   - Draw a smooth **Curve** from left to right.
2. **The "Reverse" Flip (The Secret):**
   - Locate the **Scale** knob. Turn it to the **Left (Negative Range)**.
   - Set it to **-80%**.
   - *Result:* The delay engine is now running in reverse logic. The echoes appear to arrive *before* or during the transient in a "pre-echo" fashion.
3. **Ghost Feedback:**
   - Increase **FB (Feedback)** to 30%. This creates a "reversed cloud" that feels like it's sucking the sound backwards into a black hole.
4. **Spectral Texture (Vol Tab):**
   - Switch to the **Vol** tab and draw a "Jagged" random line.
   - *Result:* The reverse suck will now have a "broken" or "lo-fi" texture.
5. **Smoothing:**
   - Set **Smoothing** to 50% to make the reverse effect feel "liquid" and less "jittery."

## 🔄 Variations
- **The "Vocal Ghost":** Put this on a lead vocal send. Set Scale to -20% and Mix to 15%. This adds a haunting "aura" that precedes the singer's words.
- **The "Sucking Snare":** Automate the **Mix** slider to jump to 100% exactly one beat before a snare hit, then back to 0%.

## ⚠️ Pitfalls & Fixes
- **Problem:** The effect sounds "metallic" or "resonant."
- **Fix:** Decrease the **Feedback** knob or change the **Filter Type** to **Gentle**.
- **Problem:** No audible effect.
- **Fix:** Ensure the **Time** sliders in the grid are not at 0. Negative scale on a 0ms delay still equals zero.

## 🎚️ Automation Ideas
- **The Sucking Build:** Automate the **Scale** knob from +100% (Standard Echo) to -100% (Reverse Suck) over 8 bars.
- **Feedback Scream:** Automate **FB** to 100% for a split second right before a drop.

```

---

## FILE: 03-Workflows\by-goal\spectral-width-widening.md

```markdown
# Workflow: Spectral Width Widening (3D Presence)

*Goal: Creating extreme, high-fidelity stereo width by placing different frequency bands in different parts of the stereo field.*

## Vibe Mapping
- **Vibey:** ⭐⭐⭐⭐⭐ (Primary)
- **Upbeat:** ⭐⭐⭐⭐⭐ (Primary)
- **Psychedelic:** ⭐⭐⭐⭐

## 🎛️ Routing Context
- **Preferred:** Insert chain on a Pad, Synth Lead, or Melodic Bus.
- **Mix Status:** 20-40% Wet.

## 🚶 Step-by-Step Setup
1. **The Base Sound:** Load a wide, mono synth or a centered vocal ad-lib.
2. **Select Pan Tab:** Click the **Pan** tab above the grid.
3. **The "S" Curve (The Width Secret):**
   - Select the **Curve** drawing tool.
   - Click the far left (Low frequencies) and drag to the bottom (Hard Left).
   - Click the center and drag to the middle (Center).
   - Click the far right (High frequencies) and drag to the top (Hard Right).
   - *Result:* Low frequencies are on the left, Mids in the center, and Highs on the right.
4. **Naturalize (Smoothing):** Increase the **Smoothing** knob slightly to prevent harsh "jumps" between bands.
5. **Micro-Delay Shift:**
   - Switch to the **Time** tab.
   - Set the **Scale** knob to roughly **10%**.
   - Draw a very slight diagonal line. This adds microscopic time offsets between the bands, enhancing the "Precedence Effect" (Haas Effect) for massive 3D depth.
6. **Low-End Discipline:**
   - Switch to the **Vol** tab.
   - Lower the volume of the first 2 or 3 bands (the Sub frequencies) to 0.
   - *Why:* This ensures the wide delay effect doesn't muddy your mono kick and sub-bass.

## 🔄 Variations
- **The "High-End Cloud":** Only draw curves in the right half of the Pan grid (Bands 8-16).
- **The "Mirror":** Right-click the Pan grid and select **Flip Horizontally** to swap the stereo image.

## ⚠️ Pitfalls & Fixes
- **Problem:** The sound feels "hollow" in mono.
- **Fix:** You have too much phase cancellation. Decrease the **Scale** knob or the **Mix** slider.
- **Problem:** The transients sound "smeary."
- **Fix:** Lower the **Time** sliders for the high-frequency bands.

## 🎚️ Automation Ideas
- **Stereo Breathe:** Automate the **Scale** knob to move between 0% and 20% rhythmically.
- **Morph Pan:** Create a second Pan state in Slot B and automate the **Morph** knob to slowly "swirl" the frequencies across the speakers.

```

---

## FILE: 04-Reference\morph-interpolation-logic.md

```markdown
# Technical Reference: Morph Interpolation Logic

Understanding the 8-preset morphing engine of Multiband Delay. [SRC: IL-MAN]

## 1. The Preset Bank (A-H)
Multiband Delay stores **8 independent states** of the 16-band grid. Each state captures the Time, Volume, and Pan settings for all 16 bands simultaneously.
- **Access:** Click the numbers 1 through 8 at the bottom of the UI to select a slot for editing.

## 2. Linear vs. Non-Linear Interpolation
The **Morph** knob acts as a master crossfader.
- **Operation:** As you turn the knob from 0% to 100%, the plugin moves through all 8 presets in order (1 -> 2 -> 3 -> 4...).
- **Interpolation:** The transition between presets is **Linear**.
  - *Example:* If Preset 1 has Band 5 at 10ms and Preset 2 has Band 5 at 50ms, at the halfway point between the two presets, Band 5 will be exactly at 30ms.

---

## 3. Real-Time Smoothing
Because changing delay times in real-time usually causes "pitch warps" (the Doppler effect), Multiband Delay uses an internal **Smoothing** algorithm.
- **The Knob:** The "Smoothing" knob on the UI controls how long the interpolation takes to resolve.
- **The Result:** High smoothing makes the morphing sound "liquid" and ethereal. Low smoothing makes the morphing sound "glitchy" and "steppy."

---

## 4. Automation Best Practices
- **Step Automation:** Use "Hold" mode in FL Studio automation clips if you want to jump instantly between presets without morphing.
- **LFO Drive:** Driving the Morph knob with a **Fruity Peak Controller** (LFO mode) is the best way to create "Spectral Animation" where the width and delay times are constantly shifting.
- **Scale Interaction:** Remember that the **Scale** knob is *global*. It multiplies the results of the Morph interpolation.

---

## 5. Technical Implications
- **Phase Shift:** Morphing between different **Pan** settings can cause microscopic phase shifts. This is usually desirable for "psychedelic" vibes but should be checked in mono if the mix becomes thin.
- **CPU:** The interpolation of 16 bands (multiplied by Time, Vol, and Pan) is computationally expensive. If you automate the Morph knob rapidly, keep an eye on your CPU meter.

---
*For a practical guide on drawing the curves used in these presets, see the [01-Learning/Quick-Reference/visual-editor-modes.md](../01-Learning/Quick-Reference/visual-editor-modes.md) guide.*

```

---

