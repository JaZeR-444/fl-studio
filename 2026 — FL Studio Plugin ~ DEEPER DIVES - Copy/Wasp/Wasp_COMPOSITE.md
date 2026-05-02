# Wasp - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Wasp - Legacy Analog Bite

`\`\`
██╗    ██╗ █████╗ ███████╗██████╗ 
██║    ██║██╔══██╗██╔════╝██╔══██╗
██║ █╗ ██║███████║███████╗██████╔╝
██║███╗██║██╔══██║╚════██║██╔═══╝ 
╚███╔███╔╝██║  ██║███████║██║     
 ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚═╝     
`\`\`

**Plugin Type:** Subtractive Synthesizer
**Category:** Generator / Analog / Legacy
**Official Manual:** [Image-Line Wasp Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Wasp.htm)

---

## 🎯 What is Wasp?

**IMPORTANT: Wasp is a legacy 32-bit plugin.**

Wasp is a classic emulation of the **EDP Wasp**, a gritty British synthesizer from the late 70s. It is famous for its aggressive, buzzing tone (hence the name) and nasty filter. While superseded by Wasp XT and other modern synths, the original Wasp is beloved for its simplicity and specific "biting" character that cuts through mixes effortlessly.

**Key Capabilities:**
- **3 Oscillators:** Saw, Pulse, Square, Noise (Osc 3).
- **Dual Envelopes:** ADSR for Amp and Filter.
- **LFO Modulation:** Pitch and Filter routing.
- **Distortion:** Built-in drive for extra grit.
- **Filter:** LP/BP/HP/Notch.

---

## 🚀 Quick Start Research Guide

### For Archivists/Legacy Users:
1. Read **00-START-HERE.md** (create this first)
2. Review **wasp-vs-wasp-xt.md**
3. Create **parameter-cheat-sheet.md**
4. Load a bass preset and crank the Distortion knob.

### For Sound Designers:
1. Study **aggressive-acid-bass.md**
2. Review **buzzing-lead-tones.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Osc 1/2:** Mix and Tune.
  - **Filter:** Frequency and Res.
  - **Distortion:** Drive level.

- [ ] **wasp-vs-wasp-xt.md**
  - **Wasp:** Simpler, rawer.
  - **XT:** More modulation, updated GUI.

#### 02-Data/parameters/
- [ ] **wasp-specs.json**
  `\`\`json
  {
    "plugin_name": "Wasp",
    "status": "Legacy",
    "architecture": "32-bit"
  }
  `\`\`

---

## 🔬 Research Framework

### Phase 1: The Buzz (Week 1)
**Goal:** Character

**Tasks:**
1. Load Wasp (via Bridge if on 64-bit)
2. Compare Saw wave to 3xOsc Saw wave (Wasp should sound "buzzy")
3. Test the Distortion
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Does it work on Mac? (No, Windows only usually).

---

## 📊 Plugin Specifications to Document

### Engine
- Aliasing (High)
- Filter Character (Dirty)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why does it look so small? (Old GUI, not vector based).
2. Can I automate it? (Yes, standard controls).

---

## 🔗 Cross-Reference with Other Plugins

Wasp is often used with:
- **Wasp XT** (The upgrade)
- **Fruity Fast Dist** (Similar distortion character)

---

## 📦 File Structure Summary

`\`\`
Wasp/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── wasp-vs-wasp-xt.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── wasp-specs.json
│
└── 03-Workflows/
    └── by-goal/
        └── aggressive-acid-bass.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Wasp Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Wasp.htm)
- [Wasp Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Wasp_tutorials.htm)
- [Wasp Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+wasp+tutorial)

### Community Resources
- [Wasp Subreddit](https://www.reddit.com/r/FL_Studio/search?q=wasp&restrict_sr=1)
- [Wasp User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Wasp Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Analog Synthesis Fundamentals" - Understanding subtractive synthesis
- "Vintage Synthesizer Emulation" - How analog emulations work
- "EDP Wasp History" - Understanding the original hardware

### Advanced Techniques
- **Analog Emulation:** Understanding the analog modeling approach
- **Filter Character:** Mastering the distinctive filter sound
- **Distortion Integration:** Using the built-in drive effectively

---

## 📚 In-Depth Technical Analysis

### Analog Emulation Architecture
Wasp implements sophisticated analog synthesis emulation:
- **Oscillator Modeling:** Emulates the original EDP Wasp oscillator design
- **Filter Emulation:** Models the characteristic Wasp filter circuit
- **Envelope Processing:** Simulates analog envelope generators
- **Distortion Circuit:** Emulates the built-in drive/distortion
- **Aliasing Characteristics:** Preserves the characteristic aliasing of the original

### Oscillator System
The three-oscillator architecture features:
- **Oscillator 1:** Primary waveform generator (Saw, Square, etc.)
- **Oscillator 2:** Secondary waveform generator with detune
- **Oscillator 3:** Noise generator for texture and grit
- **Mixing:** Combines oscillators before filter processing
- **Sync Capability:** Hard sync between oscillators (if available)

### Filter Design
The filter section implements classic subtractive synthesis:
- **Filter Types:** Low-pass, Band-pass, High-pass, Notch
- **Resonance Control:** Emulates analog filter resonance
- **Self-Oscillation:** Can self-oscillate at high resonance
- **Cutoff Control:** Emulates analog filter cutoff behavior
- **Drive Integration:** Filter drive for additional saturation

### Envelope Architecture
The dual-envelope system provides:
- **Amplitude Envelope:** ADSR for volume control
- **Filter Envelope:** ADSR for filter cutoff control
- **Envelope Routing:** Routes to different parameters
- **Modulation Depth:** Controls envelope influence
- **Response Curves:** Emulates analog envelope shapes

### LFO System
The LFO provides modulation capabilities:
- **LFO Rate:** Controls modulation speed
- **LFO Target:** Routes to pitch, filter, or other parameters
- **LFO Waveform:** Different modulation shapes
- **Modulation Depth:** Controls modulation intensity
- **Sync Options:** Tempo-sync options (if available)

### Signal Processing Chain
The internal architecture processes audio as follows:
- **Input Stage:** Oscillator mixing and initial processing
- **Filter Processing:** Filter application and resonance
- **Distortion Processing:** Drive/distortion application
- **Envelope Control:** Amplitude and filter envelope application
- **LFO Modulation:** Low-frequency modulation application
- **Output Stage:** Final signal routing and monitoring

### Legacy Architecture Considerations
As a legacy 32-bit plugin:
- **32-bit Architecture:** Limited to 32-bit processing
- **Bridge Compatibility:** May require Bridge on 64-bit systems
- **Performance:** Generally optimized for older systems
- **Compatibility:** May have compatibility issues with newer systems
- **Support:** Limited ongoing development and support

## 🎛️ Parameter Deep Dive

### Oscillator Controls
- **Oscillator 1 Settings:**
  - **Waveform Selection:** Choose between available waveforms (Saw, Square, etc.)
    - Range: Saw, Square, Pulse, Triangle (varies by implementation)
    - Effect: Changes the harmonic content of the oscillator
    - Use for: Different tonal characteristics
    - Pro tip: Saw provides the classic "buzzy" character
  - **Behavior:**
    - Saw: Rich harmonic content, aggressive tone
    - Square: Odd harmonics only, hollow tone
    - Pulse: Variable duty cycle, hollow tone
    - Pro tip: Use Saw for classic Wasp sound
  - **Applications:**
    - Bass sounds: Saw for aggressive bass
    - Lead sounds: Square for hollow leads
    - Texture: Pulse for variable harmonic content
    - Creative effects: Different waveforms for variety
    - Pro tip: Use Saw for authentic Wasp character

### Oscillator 2 Controls
- **Function:** Secondary oscillator with detune capability
  - Range: 0-100% detune (typically)
  - Effect: Adds thickness and movement to the sound
  - Use for: Creating richer, more complex tones
  - Pro tip: Use for chorus-like effects
- **Behavior:**
  - 0%: Perfectly in tune with Osc 1
  - Low values: Slight detune for thickness
  - High values: Noticeable detune for movement
  - Pro tip: Use moderate values for natural thickness
- **Applications:**
  - Thickness: Low values for subtle thickening
  - Movement: Moderate values for natural movement
  - Chorus effect: Moderate values for chorus-like effect
  - Creative detune: High values for unique effects
  - Pro tip: Use for adding character to simple sounds

### Oscillator 3 Controls
- **Function:** Noise generator for texture and grit
  - Range: 0-100% (typically)
  - Effect: Adds noise content to the sound
  - Use for: Adding texture and character
  - Pro tip: Use sparingly for subtle grit
- **Behavior:**
  - 0%: No noise added
  - Low values: Subtle noise addition
  - High values: Prominent noise content
  - Pro tip: Use for adding character and grit
- **Applications:**
  - Texture: Low values for subtle texture
  - Percussion: Higher values for percussive elements
  - Atmospheric: Variable values for atmospheric content
  - Creative effects: High values for unique textures
  - Pro tip: Use for adding vintage character

### Filter Controls
- **Cutoff Frequency:**
  - **Function:** Controls the filter's cutoff point
    - Range: 0-100% (typically)
    - Effect: Determines which frequencies pass through
    - Use for: Controlling brightness and tone
    - Pro tip: Lower values for darker sounds
  - **Behavior:**
    - Low values: Dark, muffled sound
    - High values: Bright, open sound
    - Pro tip: Use for tonal shaping
  - **Applications:**
    - Dark sounds: Low values for muffled tones
    - Bright sounds: High values for open tones
    - Tonal shaping: Variable values for tone control
    - Creative effects: Extreme values for unique sounds
    - Pro tip: Use for fundamental tone control

### Resonance Control
- **Function:** Controls filter resonance/Peak
  - Range: 0-100% (typically)
  - Effect: Emphasizes frequencies at the cutoff point
  - Use for: Adding character and emphasis
  - Pro tip: High values can cause self-oscillation
- **Behavior:**
  - 0%: No resonance, smooth rolloff
  - Medium values: Gentle peak at cutoff
  - High values: Strong peak, possible self-oscillation
  - Pro tip: Use for adding character and bite
- **Applications:**
  - Character addition: Medium values for gentle emphasis
  - Acid sounds: High values for classic acid tones
  - Self-oscillation: Maximum values for sine generation
  - Formant simulation: Resonance for vowel-like effects
  - Pro tip: Use with sawtooth waves for classic acid sounds

### Envelope Controls
- **Amplitude Envelope:**
  - **Attack:** Time to reach full amplitude
    - Range: 0 to maximum time
    - Effect: Controls initial onset
    - Use for: Shaping note attack
    - Pro tip: Short attack for percussive sounds
  - **Decay:** Time to reach sustain level
    - Range: 0 to maximum time
    - Effect: Controls decay from peak to sustain
    - Use for: Shaping note decay
    - Pro tip: Use for natural envelope shapes
  - **Sustain:** Level maintained during note hold
    - Range: 0-100%
    - Effect: Controls level during note hold
    - Use for: Controlling sustained level
    - Pro tip: Use for dynamic expression
  - **Release:** Time to fade after note release
    - Range: 0 to maximum time
    - Effect: Controls fade time after note release
    - Use for: Shaping note ending
    - Pro tip: Longer release for smooth endings

### Filter Envelope
- **Function:** Controls filter cutoff over time
  - Range: Negative to positive values
  - Effect: Modulates filter cutoff during note
  - Use for: Creating dynamic filter changes
  - Pro tip: Essential for classic synth sounds
- **Behavior:**
  - Positive values: Opens filter during note
  - Negative values: Closes filter during note
  - Pro tip: Use for dynamic filter expression
- **Applications:**
  - Opening filter: Positive values for brightness increase
  - Closing filter: Negative values for brightness decrease
  - Dynamic expression: Variable values for expression
  - Creative effects: Extreme values for unique effects
  - Pro tip: Use for classic synth filter sweeps

### Distortion/Drive Controls
- **Function:** Adds saturation and grit to the signal
  - Range: 0-100% (typically)
  - Effect: Adds harmonic content and saturation
  - Use for: Adding character and grit
  - Pro tip: Essential for Wasp's signature sound
- **Behavior:**
  - 0%: Clean signal, no additional saturation
  - Low values: Subtle saturation addition
  - High values: Heavy saturation and distortion
  - Pro tip: Use for the characteristic Wasp grit
- **Applications:**
  - Subtle character: Low values for gentle saturation
  - Aggressive distortion: High values for heavy distortion
  - Vintage character: Moderate values for vintage grit
  - Creative effects: Extreme values for unique textures
  - Pro tip: Use for the signature Wasp bite

## 🎼 Sound Design Applications

### Bass Applications
Using Wasp for bass sounds:

**Acid Bass:**
- **Classic Setup:** Sawtooth wave with high resonance
  - Use sawtooth waveform for rich harmonics
  - Apply high resonance for characteristic peak
  - Essential for acid house and techno
  - Perfect for classic acid sounds
  - Pro tip: Use for authentic acid character

- **Filter Automation:** Automated filter cutoff for squelch
  - Apply fast filter envelope for squelching effect
  - Essential for classic acid sounds
  - Perfect for dance music
  - Pro tip: Use for characteristic acid squelch

- **Resonance Control:** Managing resonance for character
  - Use high resonance for classic acid tones
  - Essential for acid sound design
  - Perfect for squelchy basslines
  - Pro tip: Near self-oscillation for maximum character

### Lead Applications
Using Wasp for lead sounds:

**Aggressive Leads:**
- **Waveform Selection:** Using square/pulse for hollow leads
  - Apply square or pulse waveforms for hollow character
  - Essential for aggressive lead sounds
  - Perfect for cutting through mixes
  - Pro tip: Use for leads that need to cut through

- **Filter Shaping:** Using filter for lead character
  - Apply dynamic filter changes for expression
  - Essential for expressive lead playing
  - Perfect for evolving lead sounds
  - Pro tip: Use filter automation for expression

- **Distortion Enhancement:** Adding drive for character
  - Apply moderate distortion for extra bite
  - Essential for aggressive lead sounds
  - Perfect for cutting leads
  - Pro tip: Use for leads that need extra character

### Creative Applications
Using Wasp for experimental applications:

**Texture Creation:**
- **Atmospheric Textures:** Creating evolving textures
  - Use noise and filter modulation for evolution
  - Essential for ambient music
  - Perfect for evolving textures
  - Pro tip: Use for atmospheric soundscapes

- **Rhythmic Textures:** Creating rhythmic patterns
  - Apply rhythmic filter automation
  - Essential for electronic music
  - Perfect for rhythmic interest
  - Pro tip: Sync to project tempo for precision

- **Experimental Sounds:** Creating unique sonic signatures
  - Push parameters beyond normal settings
  - Essential for experimental music
  - Perfect for unique sounds
  - Pro tip: Use for creative sound design

### Vintage Applications
Using Wasp for retro sounds:

**70s/80s Emulation:**
- **Vintage Character:** Creating authentic vintage sounds
  - Use appropriate waveforms and settings
  - Essential for retro music
  - Perfect for vintage emulation
  - Pro tip: Study original hardware for authenticity

- **Analog Emulation:** Emulating analog characteristics
  - Use aliasing and distortion for character
  - Essential for analog-style sounds
  - Perfect for vintage character
  - Pro tip: Embrace imperfections for authenticity

- **Period Authenticity:** Creating period-appropriate sounds
  - Match settings to era-appropriate sounds
  - Essential for authentic retro music
  - Perfect for period pieces
  - Pro tip: Research original sounds for accuracy

## 🧪 Experimental Techniques

### Advanced Wasp Applications
Creative uses of Wasp's capabilities:

**Oscillator Manipulation:**
- **Oscillator Sync:** Creating hard sync effects
  - Use oscillator sync for metallic tones
  - Perfect for bell-like sounds
  - Essential for advanced synthesis
  - Useful for metallic textures

**Filter Modulation:**
- **Complex Filter Automation:** Creating evolving filter patterns
  - Use complex automation for evolving sounds
  - Perfect for ambient and evolving music
  - Essential for sophisticated filter work
  - Useful for evolving textures

**Distortion Integration:**
- **Multi-Stage Distortion:** Combining with external distortion
  - Use internal drive with external distortion
  - Perfect for complex saturation
  - Essential for sophisticated distortion
  - Useful for unique saturation textures

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Complex Automation:** Creating evolving parameter patterns
  - Create complex automation patterns
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic expression
  - Use for expressive control

**Modulation Applications:**
- **Parameter Modulation:** Using external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Stage Processing:**
- **Complex Enhancement:** Multiple processing stages for sophisticated effects
  - Create multi-stage enhancement
  - Apply different processing to different stages
  - Build sophisticated processing chains
  - Perfect for advanced sound design
  - Use for complex processing

## 🎚️ Workflow Optimization

### Sound Design Workflows
Efficient approaches to using Wasp for sound design:

**Bass Design:**
- **Acid Bass Creation:** Creating classic acid bass sounds
  - Use sawtooth waveform with high resonance
  - Apply fast filter envelope for squelch
  - Essential for acid house and techno
  - Pro tip: Use near self-oscillation for maximum character

- **Aggressive Bass:** Creating cutting bass sounds
  - Use distortion for extra bite
  - Apply appropriate envelope settings
  - Essential for bass that cuts through
  - Pro tip: Use for busy mixes

**Lead Design:**
- **Expressive Leads:** Creating dynamic lead sounds
  - Use filter automation for expression
  - Apply appropriate envelope settings
  - Essential for expressive lead playing
  - Pro tip: Use for melodic expression

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
- **Acid House:** Creating classic acid basslines
- **Techno:** Creating aggressive, cutting bass
- **Rave:** Creating energetic lead sounds
- **Energy Management:** Using Wasp for track energy
- **Build-up Effects:** Creating tension with filter automation

### Hip-Hop and R&B
- **Vintage Bass:** Creating retro-style bass sounds
- **Lo-Fi Character:** Adding vintage character to elements
- **Mix Enhancement:** Using Wasp for mix clarity
- **Creative Effects:** Adding unique character to elements
- **Spatial Effects:** Managing spatial characteristics

### Rock and Metal
- **Guitar Enhancement:** Adding synthetic elements to guitar tracks
- **Bass Enhancement:** Creating synthetic bass elements
- **Drum Enhancement:** Adding synthetic elements to drums
- **Mix Enhancement:** Using Wasp for mix clarity
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Synthesis:** Creating evolving textures
- **Vintage Processing:** Using vintage characteristics for atmosphere
- **Experimental Synthesis:** Pushing boundaries of synthesis
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Wasp works well with various effects:
- **Reverb:** Adding space to Wasp-generated sounds
- **Delay:** Creating rhythmic patterns with Wasp
- **Chorus:** Adding width to Wasp-generated sounds
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of Wasp signals

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
Wasp was developed as a tribute to the EDP Wasp synthesizer:
- Created to provide authentic EDP Wasp emulation
- Designed for aggressive, cutting sounds
- Developed with electronic music in mind
- Intended to complement other FL Studio synths

### Evolution Through FL Studio Versions
- Initially introduced with basic EDP Wasp emulation
- Enhanced with additional features and stability
- Improved with better sound quality and accuracy
- Maintained as a legacy option for compatibility

### Impact on Music Production
Wasp has influenced music production by:
- Providing accessible acid synthesis
- Enabling aggressive bass sound design
- Facilitating vintage sound creation
- Supporting various musical genres with analog character

## 🧠 Advanced Processing Techniques

### Synthesis Mastery
Advanced techniques for subtractive synthesis:
- **Oscillator Relationships:** Understanding oscillator interactions
- **Filter Response:** Managing filter characteristics
- **Envelope Shaping:** Creating expressive envelopes
- **Modulation Integration:** Combining with other modulation
- **Creative Applications:** Using synthesis for unique effects

### Filter Mastery
Advanced filter techniques:
- **Resonance Control:** Managing resonance for character
- **Self-Oscillation:** Using self-oscillation for sine generation
- **Filter Modulation:** Creating dynamic filter changes
- **Formant Synthesis:** Using filters for vowel-like effects
- **Creative Filtering:** Pushing boundaries of filter use

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique Wasp textures
- **Atmospheric Processing:** Building ambient Wasp effects
- **Rhythmic Effects:** Creating rhythmic Wasp patterns
- **Spatial Manipulation:** Creating immersive Wasp environments
- **Experimental Processing:** Pushing boundaries of synthesis

## 📊 Performance Considerations

### CPU Usage
Managing Wasp's impact on system performance:
- **Legacy Architecture:** 32-bit plugin may have performance considerations
- **Real-Time Performance:** Generally optimized for live performance
- **Instance Count:** Multiple instances multiply resource usage
- **Parameter Automation:** Automated parameters have minimal CPU impact
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Aliasing Characteristics:** Understanding and managing aliasing
- **Filter Quality:** Maintaining filter characteristics
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output
- **Signal Integrity:** Preserving original signal quality

### System Integration
Optimizing Wasp within the system:
- **Bridge Compatibility:** Working with FL Studio Bridge
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimal audio latency

## 🛠️ Troubleshooting Common Issues

### Sound Problems
- **Harsh Sound:** Reduce resonance or adjust waveform
- **Lack of Character:** Increase drive or adjust filter settings
- **Phase Issues:** Check stereo field and width settings
- **Excessive Distortion:** Reduce drive or adjust oscillator mix
- **Poor Definition:** Adjust filter settings and resonance

### Technical Issues
- **Loading Problems:** May require Bridge on 64-bit systems
- **Latency Issues:** Check buffer settings
- **Clipping:** Reduce input gain or increase output headroom
- **Artifacts:** Check sample rate and bit depth settings
- **Compatibility:** Verify with current FL Studio version

### Creative Issues
- **Unmusical Results:** Adjust filter and envelope settings
- **Lack of Character:** Increase drive or adjust resonance
- **Poor Integration:** Use appropriate settings for the mix
- **Overpowering:** Reduce drive or use EQ to balance
- **Lack of Control:** Use automation for dynamic changes

## 🎚️ Advanced Configuration

### Custom Preset Libraries
Creating and managing custom Wasp configurations:
- **Bass Presets:** Optimized for bass applications
- **Lead Presets:** Configured for lead applications
- **Creative Presets:** Set up for sound design applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple Wasp instances effectively:
- **Sound-Specific:** Different instances for different sounds
- **Parallel Processing:** Multiple instances in parallel
- **Performance Optimization:** Managing multiple instances
- **Creative Applications:** Combining different Wasp sounds

### Integration Configurations
Optimizing for different integration scenarios:
- **Insert Processing:** Inline processing configurations
- **Send Processing:** Effects return configurations
- **Hardware Integration:** External hardware integration
- **DAW Integration:** Optimizing for FL Studio workflow

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Wasp techniques
- **Reddit Groups:** Sharing synthesis techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced synthesis techniques
- **Written Guides:** In-depth articles on subtractive synthesis
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting Wasp configurations
- **Technique Sharing:** Platforms for sharing synthesis methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create an authentic acid bass sound using the original EDP Wasp emulation
- [ ] Explain the difference between Wasp and Wasp XT in terms of sound character
- [ ] Successfully load and use the plugin in a modern 64-bit environment
- [ ] Demonstrate the characteristic "buzzy" sound that defines the Wasp
- [ ] Create a bassline that cuts through a dense mix using Wasp's character
- [ ] Apply appropriate filter settings to achieve the classic acid sound
- [ ] Use the internal distortion to add character without external effects
- [ ] Troubleshoot compatibility issues with legacy plugin architecture
- [ ] Integrate Wasp into efficient synthesis workflows
- [ ] Create genre-specific sounds optimized for different musical styles
- [ ] Optimize Wasp settings for minimal CPU usage in legacy architecture
- [ ] Use Wasp for creative sound design applications beyond traditional synthesis
- [ ] Set up advanced routing for complex Wasp-based patches
- [ ] Apply Wasp in live performance scenarios with legacy considerations
- [ ] Create experimental sounds with extreme parameter settings
- [ ] Combine Wasp with other effects for layered processing approaches
- [ ] Integrate Wasp with other automation tools seamlessly
- [ ] Create custom synthesis workflows for specific creative needs
- [ ] Use Wasp effectively in large, complex projects with legacy considerations
- [ ] Design custom patches that leverage Wasp's unique analog emulation characteristics

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\what-is-wasp.md

```markdown
Tags: moody | electric | hip-hop/rap

## What Is Wasp?

Wasp is FL Studio's dual-oscillator virtual analog synthesizer featuring a distinctive yellow-and-black "insect" interface. It combines subtractive synthesis with a flexible modulation matrix, offering raw, aggressive sounds typical of early 80s synthesizers.

### What Makes Wasp Unique

**Tone targets:**
- **Moody:** Dark, growling bass and lead sounds
- **Electric:** Buzzy, cutting leads and arpeggios
- **Funky:** Synced, resonant filter sweeps

**Core architecture:**
- 2 oscillators (sawtooth + square with pulse width)
- 1 low-pass filter (24dB/octave, resonant)
- 1 modulation matrix (4 slots)
- Built-in chorus (for that 80s warmth)

### Signal Flow

`\`\`
Osc1 → [Mixer] → Filter → Amp → Output
    ↘              ↑
Osc2 →            ↙ Mod Matrix
                   
Mod Matrix → Filter Cutoff/Resonance
           → Osc Pitch
           → Pulse Width
           → Amp Level
`\`\`

### How to Create Classic Sounds

**Wasp Bass:**
1. Osc1: Saw, octave down (-1)
2. Osc2: Square, octave down (-1), slight detune
3. Filter: Cutoff 30%, Resonance 40%
4. Mod: Filter envelope to Cutoff (medium depth)
5. Amp: Short attack, medium decay

**Wasp Lead:**
1. Osc1: Saw, unison detune
2. Osc2: Square with pulse width modulation
3. Filter: Cutoff 60%, Resonance 25%
4. Mod: Filter envelope to Cutoff (high depth)
5. Amp: Medium attack, sustain at 70%

**80s Sync Lead:**
1. Both oscs: Sawtooth
2. Sync enabled on Osc2
3. Filter: Open, low resonance
4. Mod: LFO to filter (slow, 0.2Hz)
5. Chorus: Slight warmth

### Typical Mistakes

| Mistake | Result | Fix |
|---------|--------|-----|
| Filter too open | Harsh, thin sound | Cut back cutoff to 50-60% |
| Too much resonance | Whistling, booming | Reduce resonance to 30-40% |
| No envelope on filter | Static, boring | Add filter envelope modulation |
| Oscillators un DETUNED | Weak sound | Detune oscs slightly for thickness |
| Chorus on everything | Always sounds "80s" | Use selectively |

### First Adjustment Priorities

**For hip-hop/R&B bass:**
1. Start with both oscs one octave down
2. Set filter cutoff to 25-35%
3. Add filter envelope with fast attack, medium decay
4. Keep resonance moderate (30%)

**For leads:**
1. Detuned saw oscs
2. Filter at 60% with slight resonance
3. Filter envelope with full depth
4. Chorus for 80s warmth

**For pads:**
1. Both oscs, slight detune
2. Filter open (70%+), low resonance
3. Long attack on amp envelope
4. Chorus essential for thickness

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Wasp - Parameter Cheat Sheet

**Plugin Type:** 3-Oscillator Subtractive Synthesizer
**Category:** Synth / Bass & Lead Generator
**Status:** DISCONTINUED (Replaced by Wasp XT)
**Official Manual:** [Wasp](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Wasp.htm)

---

## IMPORTANT NOTICE

**Wasp has been DISCONTINUED and replaced by Wasp XT.**
- **Legacy Support:** Old projects will still load Wasp
- **New Projects:** Use Wasp XT instead (enhanced version)
- **Documentation:** Kept for reference and legacy project support

---

## Main Oscillators

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **OSC 1 Waveform** | Sine/Saw/Square/Noise | Primary oscillator | Saw for bass, Square for leads |
| **OSC 2 Waveform** | Sine/Saw/Square/Noise | Second oscillator | Detune from OSC 1 for thickness |
| **OSC 3 Waveform** | Sine/Saw/Square/Noise | Third oscillator | Use as sub-oscillator (-12 semitones) |
| **Pitch** | -48 to +48 semitones | Oscillator tuning | OSC 3 at -12 for sub bass |
| **Level** | 0-100% | Oscillator volume | Balance oscillators for desired timbre |

---

## Filter Section

| Parameter | Range | Function | Sweet Spot |
|-----------|-------|----------|------------|
| **Filter Type** | LP/HP/BP/BR | Filter mode | LP (low-pass) for most use cases |
| **Cutoff** | 20Hz-20kHz | Filter frequency | 500-2000Hz for basses, higher for leads |
| **Resonance** | 0-100% | Filter emphasis | 30-60% for character without harshness |
| **Env Amount** | -100 to +100% | Envelope modulation depth | 60-80% for dynamic filter movement |

---

## Envelopes

### Filter Envelope (ADSR)
| Stage | Function | Bass Setting | Lead Setting |
|-------|----------|--------------|--------------|
| **Attack** | Time to reach peak | 0-10ms | 50-200ms |
| **Decay** | Time to sustain level | 200-500ms | 300-800ms |
| **Sustain** | Held level | 20-40% | 60-80% |
| **Release** | Time to silence | 100-300ms | 500ms-1s |

### Amp Envelope (ADSR)
Similar structure but controls volume instead of filter

---

## Quick Start Presets

| Use Case | Settings |
|----------|----------|
| **Deep Sub Bass** | OSC 1: Sine, OSC 3: Sine (-12), LP Filter low cutoff, Low resonance |
| **Aggressive Saw Lead** | OSC 1+2: Saw (detuned), High cutoff, Moderate resonance |
| **Acid Bass** | OSC 1: Saw/Square, High resonance, Envelope modulation |
| **Pad** | All 3 OSC (Saw/Square mix), Slow attack, Long release |

---

## LFO Modulation

| Target | Effect | Use Case |
|--------|--------|----------|
| **Pitch** | Vibrato | Expressive leads |
| **Filter Cutoff** | Wah-wah | Rhythmic filter sweeps |
| **Amplitude** | Tremolo | Pulsing pads |

---

## Wasp vs Wasp XT

| Feature | Wasp | Wasp XT |
|---------|------|---------|
| **Status** | Discontinued | Active |
| **Oscillators** | 3 | 3 (enhanced) |
| **Effects** | Basic | Extended |
| **Modulation** | Limited | Advanced |
| **Recommendation** | Legacy only | Use for new projects |

---

## Migration to Wasp XT

If you're using Wasp:
1. **New Projects:** Switch to Wasp XT
2. **Old Projects:** Wasp will still load
3. **Preset Conversion:** Manually recreate in Wasp XT
4. **Sound Similarity:** Wasp XT can recreate all Wasp sounds with more features

---

## Common Uses

- **Bass:** Deep sub bass, acid bass, wobble bass
- **Leads:** Aggressive saw leads, filtered leads
- **Pads:** Layered oscillator pads
- **Sound Design:** Noise-based textures, drones

---

## CPU & Performance

- **CPU Usage:** Low (simple architecture)
- **Voices:** Polyphonic (exact count varies by system)
- **Legacy:** Efficient, older algorithm

---

## Related Plugins

- **Wasp XT** - Direct successor (RECOMMENDED)
- **3x Osc** - Even simpler 3-oscillator synth
- **Transistor Bass** - For TB-303 style bass
- **Sawer** - More advanced subtractive synthesis

---

**Last Updated:** February 3, 2026
**Status:** DISCONTINUED - Use Wasp XT for new projects

```

---

## FILE: 01-Learning\Quick-Reference\quickstart-guide.md

```markdown
# Wasp Quick Start Guide

## What is Wasp?
Wasp is a classic analog synthesizer plugin modeled after the legendary EDP Wasp from 1978. Known for its distinctive aggressive character and unusual sound palette, it remains a favorite for electronic music producers.

## 5-Minute Setup
1. Load Wasp on a mixer channel
2. Start with the "Classic Wasp" preset
3. Play a simple note to hear the characteristic tone
4. Try oscillator sync for harder sounds
5. Use filter envelope for expressive control

## Essential Controls
- **Oscillator 1**: Primary sound source (saw, square, triangle, pulse)
- **Oscillator 2**: Secondary sound source with detune
- **Sync**: Hard sync between oscillators for aggressive tones
- **Filter Cutoff**: Main frequency control (aggressive, resonant)
- **Filter Resonance**: Filter character and self-oscillation
- **Envelope**: ADSR with fast attack for percussive sounds
- **LFO**: Low-frequency oscillator for modulation

## Quick Settings
- **Classic Lead**: Sawtooth OSC1, fast attack, medium resonance
- **Aggressive Bass**: Square waves, sync enabled, high resonance
- **Eerie Pad**: Triangle + detuned sawtooth, slow LFO, warm resonance
- **Percussive Hit**: Pulse waves, very fast attack, short release
- **Experimental Texture**: Random waveforms, high resonance, ring modulation

## Pro Tips
- Use oscillator sync for hard, aggressive sounds
- Push filter resonance into self-oscillation for piercing tones
- Use LFO on filter cutoff for classic wobbling
- Try extreme oscillator combinations for unique textures
- Experiment with pulse width for dynamic range variation
- Layer multiple instances for complex sounds
```

---

## FILE: 02-Data\parameters\wasp-params.json

```json
{
  "$schema": "./schema.json",
  "plugin": {
    "name": "Wasp",
    "version": "1.x",
    "category": "Instrument",
    "type": "3-Oscillator Subtractive Synthesizer",
    "status": "DISCONTINUED - Replaced by Wasp XT",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Wasp.htm"
  },
  "discontinuationNotice": {
    "discontinued": true,
    "replacedBy": "Wasp XT",
    "legacySupport": "Still loads in FL Studio for old projects",
    "recommendation": "Use Wasp XT for all new projects"
  },
  "parameters": {
    "oscillators": [
      {
        "id": "osc1Waveform",
        "name": "OSC 1 Waveform",
        "options": ["Sine", "Saw", "Square", "Noise"]
      },
      {
        "id": "osc2Waveform",
        "name": "OSC 2 Waveform",
        "options": ["Sine", "Saw", "Square", "Noise"]
      },
      {
        "id": "osc3Waveform",
        "name": "OSC 3 Waveform",
        "options": ["Sine", "Saw", "Square", "Noise"]
      }
    ],
    "filter": [
      {
        "id": "filterType",
        "name": "Filter Type",
        "options": ["LP", "HP", "BP", "BR"]
      },
      {
        "id": "cutoff",
        "name": "Cutoff",
        "range": "20Hz-20kHz"
      },
      {
        "id": "resonance",
        "name": "Resonance",
        "range": "0-100%"
      }
    ]
  },
  "migrationPath": {
    "targetPlugin": "Wasp XT",
    "process": "Manual recreation of patches",
    "note": "Wasp XT includes all Wasp features plus enhancements"
  },
  "cpuUsage": "Low",
  "legacyOnly": true
}

```

---

## FILE: 02-Data\presets\comprehensive-wasp-presets.json

```json
{
  "classicWaspPresets": {
    "aggressiveLead": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "square",
      "oscSync": true,
      "syncRatio": 2.0,
      "detune": 5,
      "filterCutoff": 75,
      "filterResonance": 85,
      "attack": 0.001,
      "decay": 0.2,
      "sustain": 30,
      "release": 0.5,
      "lfoRate": 2.5,
      "lfoDepth": 60,
      "lfoTarget": "filter",
      "description": "Classic aggressive lead sound"
    },
    "deepBass": {
      "osc1Wave": "square",
      "osc2Wave": "sawtooth",
      "oscSync": false,
      "detune": 8,
      "filterCutoff": 35,
      "filterResonance": 60,
      "attack": 0.002,
      "decay": 0.8,
      "sustain": 50,
      "release": 0.8,
      "lfoRate": 1.2,
      "lfoDepth": 40,
      "lfoTarget": "filter",
      "description": "Deep electronic bass with character"
    },
    "eeriePad": {
      "osc1Wave": "triangle",
      "osc2Wave": "detuned_saw",
      "oscSync": false,
      "detune": 15,
      "filterCutoff": 60,
      "filterResonance": 40,
      "attack": 0.2,
      "decay": 1.5,
      "sustain": 70,
      "release": 2.0,
      "lfoRate": 0.3,
      "lfoDepth": 30,
      "lfoTarget": "pitch",
      "description": "Ethereal pad with movement"
    },
    "percussiveHit": {
      "osc1Wave": "pulse",
      "osc2Wave": "square",
      "oscSync": true,
      "syncRatio": 3.0,
      "detune": 0,
      "filterCutoff": 80,
      "filterResonance": 90,
      "attack": 0.001,
      "decay": 0.05,
      "sustain": 0,
      "release": 0.1,
      "lfoRate": 8.0,
      "lfoDepth": 80,
      "lfoTarget": "none",
      "description": "Sharp percussive hit"
    },
    "mysteryTexture": {
      "osc1Wave": "random",
      "osc2Wave": "sawtooth",
      "oscSync": false,
      "detune": 25,
      "filterCutoff": 50,
      "filterResonance": 70,
      "attack": 0.01,
      "decay": 2.0,
      "sustain": 40,
      "release": 1.5,
      "lfoRate": 4.5,
      "alienModulation": true,
      "description": "Mysterious evolving texture"
    }
  },
  "modernLead": {
    "warming": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "pulse",
      "detune": 3,
      "pulseWidth": 25,
      "filterCutoff": 65,
      "filterResonance": 50,
      "attack": 0.005,
      "decay": 0.4,
      "sustain": 60,
      "release": 0.8,
      "description": "Warm modern lead character"
    },
    "brightCut": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "sawtooth",
      "syncRatio": 2.5,
      "detune": 12,
      "filterCutoff": 85,
      "filterResonance": 75,
      "attack": 0.001,
      "decay": 0.1,
      "sustain": 20,
      "release": 0.3,
      "description": "Bright cutting lead sound"
    },
    "squelch": {
      "osc1Wave": "sawtooth",
      "ringMod": true,
      "detune": 20,
      "filterCutoff": 40,
      "filterResonance": 30,
      "attack": 0.001,
      "decay": 0.05,
      "sustain": 10,
      "release": 0.1,
      "description": "Gritty, distorted character"
    },
    "evolvingPad": {
      "osc1Wave": "triangle",
      "osc2Wave": "sine",
      "lfoRate": 0.2,
      "lfoTarget": "filterAndResonance",
      "attack": 0.3,
      "decay": 2.5,
      "sustain": 80,
      "release": 1.5,
      "description": "Slowly evolving atmospheric pad"
    }
  }
  },
  "experimentalPresets": {
    "alienCommunication": {
      "osc1Wave": "noise",
      "osc2Wave": "sawtooth",
      "ringModFreq": 150,
      "ringModDepth": 50,
      "detune": 30,
      "filterCutoff": 70,
      "filterResonance": 85,
      "attack": 0.005,
      "lfoRate": 6.0,
      "lfoTarget": "all",
      "description": "Science fiction alien voice"
    },
    "glitchMachine": {
      "osc1Wave": "pulse",
      "osc2Wave": "random",
      "sampleRateMod": true,
      "sampleRateTarget": 5000,
      "detune": 50,
      "filterCutoff": 100,
      "filterResonance": 100,
      "attack": 0.001,
      "decay": 0.01,
      "sustain": 0,
      "release": 0.01,
      "lfoRate": 15.0,
      "lfoTarget": "all",
      "description": "Digital glitch effects machine"
    },
    "subharmonics": {
      "osc1Wave": "sine",
      "osc2Wave": "triangle",
      "subharmonicGen": true,
      "fundamental": "C2",
      "overtones": [3,5,7,9,11],
      "filterCutoff": 80,
      "filterResonance": 30,
      "attack": 0.01,
      "decay": 0.3,
      "sustain": 60,
      "release": 0.6,
      "description": "Bell-like harmonic series"
    },
    "windchimes": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "square",
      "randomVelocity": true,
      "detune": 10,
      "filterCutoff": 90,
      "filterResonance": 20,
      "attack": 0.002,
      "decay": 0.8,
      "sustain": 0,
      "release": 1.5,
      "lfoRate": 0.8,
      "lfoTarget": "cutoff",
      "description": "Wind chimes metallic textures"
    }
  },
  "bassPresets": {
    "subBass": {
      "osc1Wave": "sine",
      "osc2Wave": "square",
      "subOsc": true,
      "subOctave": -2,
      "detune": 2,
      "filterCutoff": 25,
      "filterResonance": 40,
      "attack": 0.01,
      "decay": 0.4,
      "sustain": 40,
      "release": 0.6,
      "lfoRate": 1.5,
      "lfoDepth": 30,
      "lfoTarget": "filter",
      "description": "Deep sub-bass with sine wave"
    },
    "wobbleBass": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "sawtooth",
      "oscSync": false,
      "detune": 8,
      "filterCutoff": 45,
      "filterResonance": 70,
      "attack": 0.002,
      "decay": 0.1,
      "sustain": 20,
      "release": 0.3,
      "lfoRate": 4.0,
      "lfoDepth": 60,
      "lfoTarget": "filter",
      "description": "Dubstep wobble bass"
    },
    "acidBass": {
      "osc1Wave": "square",
      "osc2Wave": "sawtooth",
      "oscSync": true,
      "syncRatio": 3.0,
      "detune": 5,
      "filterCutoff": 55,
      "filterResonance": 80,
      "attack": 0.001,
      "decay": 0.05,
      "sustain": 0,
      "release": 0.2,
      "lfoRate": 6.0,
      "lfoDepth": 70,
      "lfoTarget": "filter",
      "description": "303-style acid bass line"
    }
  },
    "funkyBass": {
      "osc1Wave": "pulse",
      "osc2Wave": "triangle",
      "oscSync": false,
      "detune": 15,
      "pulseWidth": 20,
      "filterCutoff": 35,
      "filterResonance": 50,
      "attack": 0.003,
      "decay": 0.15,
      "sustain": 30,
      "release": 0.4,
      "lfoRate": 3.0,
      "lfoDepth": 40,
      "lfoTarget": "pitch",
      "description": "Funky rhythmic bass"
    }
  },
    "technoBass": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "pulse",
      "ringMod": true,
      "ringModFreq": 100,
      "detune": 3,
      "filterCutoff": 40,
      "filterResonance": 60,
      "attack": 0.001,
      "decay": 0.05,
      "sustain": 0,
      "release": 0.1,
      "lfoRate": 2.0,
      "lfoDepth": 50,
      "lfoTarget": "filter",
      "description": "Techno metallic bass"
    }
  },
    "droneBass": {
      "osc1Wave": "sine",
      "osc2Wave": "sine",
      "detune": 1,
      "subOsc": true,
      "subOctave": -1,
      "filterCutoff": 30,
      "filterResonance": 25,
      "attack": 0.5,
      "decay": 2.0,
      "sustain": 80,
      "release": 1.5,
      "lfoRate": 0.2,
      "lfoDepth": 60,
      "lfoTarget": "none",
      "description": "Sustained drone bass texture"
    }
  }
  },
  "effectsPresets": {
    "vibrato": {
      "osc1Wave": "sine",
      "osc2Wave": "sine",
      "detune": 0,
      "oscSync": false,
      "lfoRate": 5.0,
      "lfoDepth": 100,
      "lfoTarget": "pitch",
      "attack": 0.1,
      "decay": 0.1,
      "sustain": 80,
      "release": 0.1,
      "description": "Expressive pitch vibrato"
    },
    "tremolo": {
      "osc1Wave": "sawtoff",
      "osc2Wave": "sawtooth",
      "detune": 0,
      "lfoRate": 8.0,
      "lfoDepth": 100,
      "lfoTarget": "volume",
      "attack": 0.1,
      "decay": 0.1,
      "sustain": 0,
      "release": 0.1,
      "description": "Volume amplitude modulation"
    },
    "phaserEffect": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "sawtooth",
      "lfoRate": 3.0,
      "lfoTarget": "filter",
      "filterCutoff": 50,
      "filterResonance": 60,
      "attack": 0.05,
      "decay": 0.2,
      "sustain": 30,
      "release": 0.5,
      "description": "Wasp style phaser effect"
    },
    "flangerEffect": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "sawtooth",
      "oscSync": false,
      "delayTime": 10,
      "detune": 2,
      "feedback": 30,
      "lfoRate": 4.0,
      "lfoDepth": 60,
      "lfoTarget": "filter",
      "attack": 0.002,
      "decay": 0.1,
      "sustain": 0,
      "release": 0.2,
      "description": "Jet-like flanger effect"
    }
  },
    "delayEcho": {
      "osc1Wave": "square",
      "osc2Wave": "pulse",
      "delayTime": 250,
      "detune": 5,
      "filterCutoff": 20,
      "filterResonance": 30,
      "feedback": 10,
      "attack": 0.01,
      "decay": 0.05,
      "sustain": 0,
      "release": 0.5,
      "lfoRate": 0.5,
      "lfoDepth": 30,
      "lfoTarget": "volume",
      "description": "Echoing delay effect"
    }
  }
  },
  "performancePresets": {
    "livePerformance": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "square",
      "oscSync": false,
      "detune": 3,
      "filterCutoff": 70,
      "filterResonance": 60,
      "attack": 0.001,
      "decay": 0.1,
      "sustain": 40,
      "release": 0.2,
      "lfoRate": 3.0,
      "lfoDepth": 50,
      "lfoTarget": "filter",
      "description": "Optimized for live performance"
    },
    "studioRecording": {
      "osc1Wave": "triangle",
      "osc2Wave": "sawtooth",
      "detune": 2,
      "filterCutoff": 60,
      "filterResonance": 50,
      "attack": 0.002,
      "decay": 0.3,
      "sustain": 50,
      "release": 0.5,
      "lfoRate": 2.0,
      "lfoDepth": 40,
      "lfoTarget": "filter",
      "description": "Optimized for recording quality"
    },
    "cpuEfficient": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "square",
      "detune": 1,
      "filterCutoff": 50,
      "filterResonance": 40,
      "attack": 0.005,
      "decay": 0.2,
      "sustain": 40,
      "release": 0.3,
      "lfoRate": 2.5,
      "lfoDepth": 30,
      "lfoTarget": "filter",
      "description": "Optimized for low CPU usage"
    },
    "highQuality": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "sawtooth",
      "oscSync": true,
      "detune": 2,
      "filterCutoff": 75,
      "filterResonance": 60,
      "attack": 0.001,
      "decay": 0.1,
      "sustain": 40,
      "release": 0.4,
      "lfoRate": 2.0,
      "lfoDepth": 40,
      "lfoTarget": "filter",
      "description": "Optimized for high audio quality"
    }
  },
    "multiLayer": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "pulse",
      "detune": 8,
      "filterCutoff": 60,
      "filterResonance": 50,
      "attack": 0.002,
      "decay": 0.2,
      "sustain": 40,
      "release": 0.3,
      "lfoRate": 1.5,
      "lfoDepth": 30,
      "lfoTarget": "filter",
      "description": "Multiple instances layered together"
    }
  }
  }
}
```

---

## FILE: 02-Data\presets\genre-presets.json

```json
{
  "presetArchetypes": {
    "classicBass": {
      "description": "Dark, punchy bass for hip-hop foundation",
      "settings": {
        "osc1": { "wave": "saw", "octave": -1, "detune": 0 },
        "osc2": { "wave": "square", "octave": -1, "detune": 5 },
        "filter": { "cutoff": 35, "resonance": 35 },
        "filterEnv": { "attack": 10, "decay": 200, "sustain": 50, "release": 100 },
        "ampEnv": { "attack": 5, "decay": 100, "sustain": 80, "release": 50 },
        "chorus": "on"
      },
      "useCases": ["hip-hop bass", "R&B sub", "foundation layer"],
      "tags": ["hip-hop/rap", "R&B", "dark"]
    },
    "buzzyLead": {
      "description": "Cutting lead for hooks and melodies",
      "settings": {
        "osc1": { "wave": "saw", "octave": 0, "detune": 10 },
        "osc2": { "wave": "saw", "octave": 0, "detune": -10 },
        "filter": { "cutoff": 60, "resonance": 25 },
        "filterEnv": { "attack": 5, "decay": 150, "sustain": 70, "release": 100 },
        "ampEnv": { "attack": 10, "decay": 200, "sustain": 60, "release": 150 },
        "chorus": "on"
      },
      "useCases": ["synth lead", "hook melody", "arpeggio"],
      "tags": ["electric", "upbeat", "cutting"]
    },
    "electricKeys": {
      "description": "Retro electric piano sound",
      "settings": {
        "osc1": { "wave": "square", "octave": 0, "detune": 0 },
        "osc2": { "wave": "square", "octave": 1, "detune": 3 },
        "filter": { "cutoff": 70, "resonance": 15 },
        "filterEnv": { "attack": 2, "decay": 100, "sustain": 80, "release": 200 },
        "ampEnv": { "attack": 5, "decay": 50, "sustain": 90, "release": 100 },
        "chorus": "on"
      },
      "useCases": ["electric piano", "_keys", "chords"],
      "tags": ["funky", "R&B", "smooth"]
    },
    "syncGrowl": {
      "description": "Aggressive sync sound for emphasis",
      "settings": {
        "osc1": { "wave": "saw", "octave": 0, "detune": 0 },
        "osc2": { "wave": "saw", "octave": 0, "detune": 0, "sync": true },
        "filter": { "cutoff": 45, "resonance": 50 },
        "filterEnv": { "attack": 1, "decay": 300, "sustain": 60, "release": 200 },
        "ampEnv": { "attack": 1, "decay": 50, "sustain": 100, "release": 100 },
        "chorus": "off"
      },
      "useCases": ["builds", "drops", "aggressive hooks"],
      "tags": ["electric", "intense", "psychedelic"]
    }
  },
  "genreStartingPoints": {
    "hipHop": {
      "subBass": { "cutoff": 25, "resonance": 25, "chorus": true },
      "midBass": { "cutoff": 40, "resonance": 40, "chorus": true },
      "keys": { "cutoff": 65, "resonance": 20, "chorus": true }
    },
    "rnb": {
      "smoothBass": { "cutoff": 35, "resonance": 30, "chorus": true },
      "electricKeys": { "cutoff": 70, "resonance": 15, "chorus": true },
      "pad": { "cutoff": 75, "resonance": 10, "chorus": true }
    },
    "deepBassEDM": {
      "wobble": { "cutoff": 35, "resonance": 45, "chorus": false },
      "growl": { "cutoff": 45, "resonance": 55, "chorus": false },
      "layer": { "cutoff": 55, "resonance": 35, "chorus": true }
    }
  }
}

```

---

## FILE: 02-Data\rules\wasp-safety-rules.md

```markdown
Tags: hip-hop/rap | R&B | deep bass edm

## Wasp Safety Rules

### Gain Staging

| Sound Type | Osc Level | Filter Output | Master Output | Why |
|------------|-----------|---------------|---------------|-----|
| Sub bass | 70% | -6 dB | -12 dB | Prevents clipping, maintains clean fundamental |
| Mid bass | 80% | -3 dB | -6 dB | Punchy without mud |
| Lead | 75% | 0 dB | -3 dB | Needs to cut through |
| Pad | 60% | -3 dB | -6 dB | Softer attack, needs headroom |

### Low-End Safety Rules

**Critical for bass-heavy production:**

1. **Never let raw saw waves hit the mixer at 0 dB** - They clip easily, especially with resonance
2. **Filter cutoff below 30% for sub-bass** - Opens above = lost low-end translation
3. **High resonance kills sub frequencies** - Keep resonance under 40% for pure bass
4. **Test in mono constantly** - Detuned oscs create phase issues

### Mono Translation Checklist

- [ ] Solo the bass channel
- [ ] Sum to mono
- [ ] Does the fundamental still hit?
- [ ] If thin: Reduce filter cutoff by 10%
- [ ] If muddy: Increase filter cutoff by 5%, reduce resonance
- [ ] If weak: Check oscillator levels (might need boost)

### Avoid List

| ❌ Don't Do This | ❌ Result | ✅ Do This Instead |
|-----------------|-----------|-------------------|
| High resonance on bass | Muddy, undefined low-end | Keep resonance under 40% on bass |
| Undetuned oscs | Thin, weak sound | Always detune oscs 3-10 cents |
| Filter fully open on bass | Harsh, no character | Cut back to 50-70% |
| 100% wet chorus on everything | Always sounds "80s" | Use selectively, especially on leads |
| Fast attack on pad | Lost transients | Slow attack (10-50ms) for pads |
| No filter envelope | Static, boring | Add envelope for movement |

### Headroom Guidelines

**Before processing:**
- Set oscillator levels so peaks hit -6 dB
- Apply gentle limiting or compression after Wasp
- Watch for resonance boost—can add 6+ dB at cutoff

**During mixing:**
- High-pass filter Wasp outputs if not contributing to low-end
- Sidechain bass to kick (Wasp responds well to sidechain)
- Use Fruity Limiter for soft clipping if needed

### The "Wasp Bass Test"

`\`\`
1. Create basic bass patch (detuned saws, octave down)
2. Set filter cutoff to 25%, resonance 30%
3. Play root note sustained for 2 seconds
4. Check in mono—should be thick and focused
5. Increase cutoff to 35%—should still hit hard
6. Add slight resonance—should add character, not mud
7. If any step fails, rebalance levels
`\`\`

```

---

## FILE: 03-Workflows\by-context\integration-guide.md

```markdown
# Wasp Integration Guide

## DAW Integration Strategies

### FL Studio Native Integration
**Optimal Signal Flow**:
`\`\`
MIDI Controller → Wasp → Mixer Channel → Effects → Master
Audio Interface → Wasp Input → Audio Interface Output → Monitoring
`\`\`

**Best Practices**:
- Use on individual mixer channels for precise control
- Create preset groups for different musical styles
- Utilize playlist automation for dynamic changes
- Use Patcher for complex routing
- Create custom control surfaces for efficient workflow

**Patcher Integration**:
- **Multi-Instance Layering**: Multiple Wasp instances
- **Parameter Linking**: Synchronized parameter control
- **MIDI Distribution**: Complex MIDI routing
- **Effect Chain Management**: Built-in processing chain
- **Dry/Wet Blending**: Parallel signal mixing

### Cross-DAW Compatibility
**Plugin Format Support**:
- **VST2**: Universal Windows compatibility
- **VST3**: Enhanced performance and modern features
- **W**: Legacy format for some systems
- **AAX**: Pro Tools professional integration
- **AU**: macOS native format with Logic integration

**Migration Considerations**:
- **Settings Transfer**: Cross-platform preset compatibility
- **Automation Translation**: DAW-specific automation handling
- **Workflow Adaptation**: Interface differences between DAWs
- **Performance Optimization**: DAW-specific performance tips

### Plugin Chain Integration

### Classic Signal Chain Order
**Traditional Chain**:
`\`\`
Instrument → Wasp → Delay → Reverb → EQ → Compression → Master
`\`\`

**Modern Chain**:
`\`\`
Instrument → EQ → Wasp → Stereo Enhancement → Reverb → Limiter
`\`\`

### Chain Positioning Strategies
#### Pre-Wasp Processing
**Input Enhancement**:
- **Equalization**: Shape tone before Wasp
- **Dynamics Control**: Compression before modulation
- **Noise Reduction**: Clean signal preparation
- **Distortion**: Character addition before modulation

**Instrument-Specific Processing**:
- **Guitar**: Wah, compressor, overdrive before Wasp
- **Keyboard**: Organ effects before Wasp
- **Synthesizer**: MIDI layering before Wasp

#### Post-Wasp Processing
**Immediate Effects**:
- **Delay**: Rhythmic complexity addition
- **Reverb**: Space and ambiance
- **Stereo Enhancement**: Width processors
- **Mastering**: EQ, limiting, compression
- **Final Polish**: Harmonic excitement, tape emulation

### Parallel Processing Configurations

#### Send/Return Setup
**Parallel Wasp**:
`\`\`
Dry Signal → Master Bus
                ↘
                → Wasp → Return Bus → Master Bus
`\`\`

**Benefits**:
- **Dry Signal Preservation**: Maintain original character
- **Wet Signal Processing**: Process Wasp separately
- **Mix Control**: Independent dry/wet balance
- **Creative Possibilities**: Different processing for wet signal

#### Multi-Bus Configuration
**Frequency-Specific Processing**:
- **Low Bus**: Bass-specific Wasp settings
- **Mid Bus**: Vocal/guitar Wasp settings
- **High Bus**: Percussion/cymbal Wasp settings
- **Master Bus**: Final blend and control

## Hardware Integration

### MIDI Controller Setup

#### Recommended Controllers
**Keyboard Controllers**:
`\`\`
Mod Wheel: Filter Cutoff (default)
Pitch Bend: Oscillator Detune
Aftertouch: Filter Resonance
Sustain: Bypass
Program Change: Preset Selection
Control Change: Parameter assignment
`\`\`

#### Fader/Knob Controllers**:
`\`\`
Knob 1: Oscillator 1 Waveform
Knob 2: Oscillator 2 Waveform
Knob 3: Filter Cutoff
Knob 4: Filter Resonance
Knob 5: Oscillator Detune
Fader 6: LFO Rate
Fader 7: LFO Depth
Fader 8: Mix/Dry Wet
`\`\`

**Foot Controller Setup**:
`\`\`
Footswitch 1: Wasp Bypass/Enable
Footswitch 2: Preset Next
Footswitch 3: Preset Previous
Footswitch 4: LFO Enable/Disable
Expression Pedal: Continuous parameter control
Footswitch 5: Filter Cutoff
Footswitch 6: Resonance Control
`\`\`

### Audio Interface Integration

#### Connection Types
- **Line Level**: Studio connections
- **Instrument Level**: Direct instrument connections
- **Microphone Level**: Vocal recording connections
- **Send/Return**: Effect loop integration
- **Digital I/O**: Digital audio connections

#### Optimization Settings**
- **Sample Rate**: 44.1kHz or higher for quality
- **Buffer Size**: Balance latency and stability
- **Clock Source**: Internal or external synchronization
- **Gain Staging**: Proper level management

### External Hardware Chaining

#### Vintage Hardware Integration
**Analog Chain**:
`\`\`
Instrument → Hardware Compressor → Hardware Reverb → Audio Interface
`\`\`

**Digital Integration**:
`\`\`
Wasp → Hardware Effects → Audio Interface
`\`\`

**Hybrid Processing**:
- **Analog Character**: Preserve vintage qualities
- **Digital Precision**: Maintain audio quality
- **Extended Features**: Modern capabilities
- **Workflow Integration**: DAW compatibility

## Software Integration

### Third-Party Plugin Compatibility

#### Complementary Effects
**Distortion**: Additional saturation and drive
- **Compression**: Dynamic range control
- **Limiting**: Output protection
- **EQ**: Frequency shaping
- **Gate**: Noise reduction and rhythmic control

#### Creative Processing**
**Modulation Effects**: Additional LFO sources
- **Spatial Effects**: Stereo enhancement
- **Temporal Effects**: Time-based processing
- **Pitch Effects**: Pitch correction and manipulation
- **Granular Processing**: Grain-based effects

#### Analysis Tools**
**Spectrum Analyzers**: Frequency domain analysis
- **Phase Scopes**: Visual phase display
- **Audio Meters**: Level and monitoring
- **Signal Analysis**: Real-time analysis tools

### Max for Live Integration
**Custom Interfaces**:
- **Dedicated Wasp Controller**: Visual parameter control
- **Preset Manager**: Advanced preset organization
- **MIDI Learn**: Enhanced parameter mapping
- **Performance Recorder**: Capture parameter automation
- **Data Visualization**: Real-time parameter display

**Advanced Features**:
- **Randomization**: Generate unexpected parameter settings
- **Pattern Generation**: Automated parameter changes
- **Parameter Morphing**: Smooth transitions
- **Remote Control**: Network-based parameter control

## Workflow Optimization

### Template Creation
**Project Templates**:
- **Synth Templates**: Pre-configured Wasp setups
- **Effect Chain Templates**: Complete processing chains
- **Recording Templates**: Studio-optimized configurations
- **Performance Templates**: Live performance setups

**Preset Templates**:
- **Organization System**: Categorized preset libraries
- **Performance Banks**: Live-use preset collections
- **Studio Banks**: Recording-optimized settings
- **User Custom**: Personalized presets

**Automation Templates**:
- **Parameter Automation**: Common Wasp parameter curves
- **MIDI Recording**: Capture parameter changes
- **Pattern Automation**: Rhythmic parameter control
- **Performance Recording**: Live performance capture

### Preset Management System
**Organization Strategy**:
- **By Character**: Aggressive, Warm, Textural, Ethereal
- **By Application**: Lead, Bass, Pad, FX, Experimental
- **By Complexity**: Simple, Intermediate, Advanced
- **By Waveform**: Sawtooth, Square, Triangle, Mixed

**Backup and Sharing**
- **Cloud Storage**: Automatic preset backup
- **Version Control**: Track preset evolution
- **Export Formats**: Multiple format options
- **Community Sharing**: Share and download presets

## Advanced Integration Concepts

### Multi-Instance Coordination

#### Parallel Processing
**Instance Roles**:
- **Instance 1**: Low-frequency focused Wasp
- **Instance 2**: Mid-frequency focused Wasp
- **Instance 3**: High-frequency focused Wasp
- **Instance 4**: Effects layer Wasp
- **Instance 5**: Ambient texture Wasp

**Synchronization**:
- **Parameter Linking**: Shared control across instances
- **Clock Sync**: Common tempo synchronization
- **Phase Coordinated**: Aligned phase relationships
- **Preset Coordination**: Synchronized preset changes

### Multi-Layer Management
**Layer Distribution**:
- **Frequency Splitting**: Different processing per frequency range
- **Stereo Placement**: Spatial positioning per layer
- **Dynamic Mixing**: Proportional level changes
- **Creative Blending**: Crossfade between layers
- **Automation Coordination**: Coordinated automation lanes

### External Control Integration

#### OSC and Network Control
**Network Capabilities**:
- **Wi-Fi Control**: Tablet/smartphone control
- **Web Interface**: Browser-based parameter control
- **Remote Monitoring**: Real-time parameter display
- **Collaborative Control**: Multiple operators

#### Advanced MIDI Integration
**MIDI Learn**:
- **Automatic Detection**: Learn controller mapping automatically
- **Custom Scaling**: Non-linear parameter mapping
- **Conditional Logic**: If-then parameter relationships
- **Layer Mapping**: Multiple controllers per parameter

#### API Integration
- **Programming Access**: Direct parameter adjustment
- **Automation Control**: Programmed parameter changes
- **Data Analysis**: Signal and parameter analysis
- **Custom Algorithms**: User-defined processing
- **Remote Control**: Network-based parameter control

## Performance Optimization

### CPU Management

#### Efficient Usage Techniques
**Parameter Optimization**:
- **Oscillator Optimization**: Use efficient oscillator combinations
- **Filter Optimization**: Efficient filter algorithms
- **Envelope Optimization**: Minimal envelope processing
- **LFO Optimization**: Efficient modulation algorithms
- **Instance Management**: Limit concurrent instances

**Resource Allocation**:
- **Buffer Size**: Optimize for workflow needs
- **Multi-Core**: Distribute processing load
- **Memory Management**: Clear unused instances
- **Background Processes**: Disable unnecessary applications

#### Audio Quality Maintenance
**Signal Integrity**:
- **Gain Staging**: Proper level management
- **Headroom Management**: Avoid clipping and distortion
- **Noise Floor Control**: Minimize added noise
- **Dithering**: Proper bit depth conversion

**Monitoring Setup**:
- **Studio Monitors**: Calibrated monitoring environment
- **Headphone Monitoring**: Detailed checking of artifacts
- **Metering**: Visual level and frequency analysis
- **A/B Testing**: Compare settings and versions

## Troubleshooting Integration Issues

### Common Problems

#### Plugin Loading Issues
**Symptoms**: Plugin doesn't appear or load
**Solutions**:
1. Check installation path and permissions
2. Verify plugin format compatibility with DAW
3. Rescan plugin database in DAW
4. Reinstall plugin if necessary

#### Automation Problems
**Symptoms**: Parameters not automating or responding
**Solutions**:
1. Verify parameters are automatable
2. Check automation lane assignments
3. Test with simple automation curves
4. Check DAW automation settings

#### Audio Issues
**Symptoms**: No sound, distortion, glitches
**Solutions**:
1. Check signal chain routing
2. Verify input levels and gain staging
3. Test with known good settings
4. Check for clipping at any stage
5. Update audio interface drivers

#### Performance Issues
**CPU Overload**:
1. Reduce instance count
2. Increase buffer size
3. Optimize filter and LFO settings
4. Close other applications
5. Render completed tracks to audio

**Latency Problems**:
1. Decrease buffer size
2. Check for software monitoring
3. Update audio interface drivers
4. Optimize system performance
5. Use direct monitoring when possible

## Best Practices

### Professional Workflow
**Planning**:
- Document Wasp settings for each project
- Create preset libraries for common uses
- Plan signal chain before recording
- Test settings before critical sessions

**Execution**:
- Use consistent gain staging
- A/B test Wasp settings
- Monitor levels and artifacts
- Save successful settings immediately

### Creative Integration
**Sound Design**:
- Experiment with unusual parameter combinations
- Layer multiple instances
- Combine with other effects creatively
- Document successful combinations

**Performance**:
- Map essential parameters to controllers
- Create performance preset banks
- Practice real-time parameter changes
- Have backup equipment ready

### Maintenance
**Regular Updates**:
- Keep Wasp plugin updated
- Update DAW software
- Maintain audio interface drivers
- Update MIDI controller firmware

**System Care**:
- Regular system maintenance
- Backup important presets
- Monitor system performance
- Clean up temporary files

### Quality Assurance
- **Documentation**: Keep detailed documentation
- **Testing**: Comprehensive testing protocols
- **Improvement**: Continuous refinement of techniques
- **Standards**: Maintain quality benchmarks
```

---

## FILE: 03-Workflows\by-context\live-performance.md

```markdown
# Wasp Live Performance Guide

## Performance Setup Configuration

### Essential Equipment Requirements
**Core Equipment**:
- Laptop with adequate CPU (8GB+ RAM recommended)
- Professional audio interface with low latency
- High-quality microphone for modulator
- MIDI keyboard or controller for Wasp
- Backup power supply and essential cables
- Foot pedals for hands-free control

**Enhanced Setup**:
- Foot pedals for envelope and filter control
- Tablet for preset management
- Backup audio interface and cables
- Power conditioning for stable performance

### Controller Mapping for Live Use

#### Essential Parameters to Map
**Primary Controls**:
- **Filter Cutoff**: Primary sound character control
- **Filter Resonance**: Filter intensity and character
- **Oscillator 1**: Primary wave selection
- **Oscillator 2**: Secondary wave with detune
- **Sync**: Hard sync for aggressive sounds
- **Envelope**: ADSR with fast attack for percussive
- **LFO**: Low-frequency modulation

**Secondary Controls**:
- **Detune**: Oscillator 2 tuning control
- **LFO Rate**: Modulation speed control
- **LFO Depth**: Modulation amount control
- **Freeze**: Hold current analysis
- **Preset Selection**: Quick preset switching

#### Controller Types and Mappings

**Foot Controller Setup**:
`\`\`
Footswitch 1: Wasp Bypass/Enable
Footswitch 2: Preset Next
Footswitch 3: Preset Previous  
Footswitch 4: Filter Cutoff
Footswitch 5: Resonance Control
Expression Pedal: Detune or LFO Depth
`\`\`

**MIDI Keyboard Setup**:
`\`\`
Mod Wheel: Filter Cutoff
Pitch Bend: Oscillator 1 Detune
Aftertouch: Filter Resonance
Sustain: Wasp Enable/Bypass
Program Change: Preset Selection
Control Change: Oscillator 2 Waveform
`\`\`

**Knob/Fader Controller Setup**:
`\`\`
Knob 1: Oscillator 1 Filter Cutoff
Knob 2: Oscillator 1 Detune
Knob 3: Filter Resonance
Knob 4: LFO Rate
Knob 5: LFO Depth
Fader 1: Oscillator 1 Mix
Fader 2: Oscillator 2 Mix
Fader 3: Output Level
`\`\`

### Live Performance Techniques

#### Real-Time Sound Manipulation

**Dynamic Parameter Control**
- **Filter Sweeps**: Smooth filter movement
- **Oscillator Sync**: Create movement
- **Detune Morphing**: Dynamic tuning changes
- **LFO Control**: Add modulation and movement
- **Envelope Control**: Shape dynamics in real-time

**Creative Performance Applications**:
- **Parameter Morphing**: Smooth transitions between settings
- **Multi-Preset Morphing**: Crossfade between sounds
- **Automation Recording**: Capture parameter movements
- **Freeze Function**: Hold current settings
- **Parameter Locking**: Lock parameters while varying others

### Set Structure Management

#### Song Section Settings
**Performance Mapping**:
`\`\`json
{
  "songStructure": {
    "intro": {
      "filterCutoff": 50,
      "resonance": 70,
      "envelope": {
        "attack": 0.01,
        "decay": 0.5,
        "sustain": 30
      },
      "detune": 5,
      "description": "Subtle support for opening"
    },
    "verse": {
      "filterCutoff": 70,
      "resonance": 70,
      "envelope": {
        "attack": 0.01,
        "decay": 0.3,
        "sustain": 50
      },
      "detune": 5,
      "description": "Classic Wasp character for verses"
    },
    "preChorus": {
      "filterCutoff": 75,
      "resonance": 80,
      "envelope": {
        "attack": 0.001,
        "decay": 0.05,
        "sustain": 40
      },
      "detune": 5,
      "oscSync": true,
      "osc2Wave": "sawtooth",
      "description": "Building tension before chorus"
    },
    "chorus": {
      "filterCutoff": 85,
      "resonance": 80,
      "envelope": {
        "attack": 0.001,
        "decay": 0.02,
        "sustain": 20,
      },
      "detune": 0,
      "description": "Maximum effect for main section"
    },
    "bridge": {
      "filterCutoff": 65,
      "resonance": 70,
      "envelope": {
        "attack": 0.002,
        "decay": 0.08,
        "sustain": 40,
      },
      "detune": 0,
      "oscSync": true,
      "osc2Wave": "sawtooth",
      "description": "Different character for bridge"
    },
    "solo": {
      "filterCutoff": 90,
      "resonance": 90,
      "envelope": {
        "attack": 0.001,
        "decay": 0.01,
        "sustain": 10,
      },
      "detune": 10,
      "oscSync": true,
      "osc2Wave": "square",
      "description": "Maximum intensity for solo"
    },
    "outro": {
      "filterCutoff": 50,
      "resonance": 70,
      "envelope": {
        "attack": 0.002,
        "decay": 0.15,
        "sustain": 60,
      },
      "detune": 0,
      "description": "Fade out with reduced character"
    }
  }
}
`\`\`

#### Genre-Specific Setups
**Electronic Music Sets**:
- **EDM Leads**: High oscillator sync, aggressive settings
- **Techno Rhythms**: Complex patterns, fast rates
- **Ambient Pads**: Slow movement, evolving textures
- **Build-Ups**: Gradual intensity increases

**Rock and Pop Sets**:
- **Classic Rock**: 4-stage settings, aggressive character
- **Lead Solos**: 6-stage sync, full character
- **Rhythm Support**: Medium settings, versatile play

**Performance Sets**:
- **Live Performance**: Optimized for low latency
- **Studio Recording**: High-quality settings
- **Minimal CPU**: Reduced instance count

### Improvisation and Expression

#### Real-Time Sound Manipulation
**Dynamic Parameter Control**:
- **Filter Control**: Real-time filter sweeps
- **Detune Morphing**: Dynamic tuning adjustments
- **LFO Integration**: Creative LFO use

**Creative Performance Techniques**:
- **Multiple Instance**: Layer multiple Wasp sounds
- **Parallel Processing**: Different routing approaches
- **Randomized Control**: Unpredictable variations
- **Experimental Settings**: Push parameters to limits

## Troubleshooting Live Issues

### Technical Problems

#### Audio Issues
**No Sound Output**:
1. Check all audio connections
2. Verify mixer gain routing
3. Check for clipped signals
4. Test with known good preset

**High CPU Usage**:
1. Reduce oscillator count to 2
2. Increase buffer size
3. Disable other applications
4. Render tracks when possible

**Audio Glitches**:
1. Increase buffer size
2. Check for driver updates
3. Check for system overload
4. Test with simplified settings

#### Latency Problems**:
1. Check buffer size settings
2. Verify PDC compensation
3. Optimize system performance
4. Check for software monitoring

### MIDI Controller Problems
**Controller Not Responding**:
1. Check MIDI connections
2. Verify MIDI channel assignments
3. Test with different controllers
4. Update MIDI controller firmware
5. Re-learn parameter mappings

### Creative Problems
#### Wasp Sounds Wrong
**Solutions**:
1. Use slower LFO rates
2. Reduce resonance and detune
3. Use appropriate oscillator waveforms
4. Reference original hardware characteristics
5. Test with simpler settings

#### Performance Fatigue
**Technical Solutions**:
- Simplify control assignments
- Use backup simpler setup
- Take breaks between long performances
- Maintain comfortable playing posture

### Equipment Recovery

#### Technical Failures
**Audio Interface Problems**:
1. Switch to backup audio interface
2. Use direct monitoring
3. Have backup cables ready
4. Restart audio interface

**System Failures**:
1. Use backup computer system
2. Restart DAW if needed
3. Load simplified settings
4. Reopen project

## Preparation and Practice

### Pre-Performance Setup
**Equipment Check**:
- [ ] Audio interface connected and tested
- [ ] MIDI controllers mapped and working
- [ ] Presets organized and loaded
- [ ] Backup equipment available and tested
- [ ] Monitor levels set appropriately

**Technical Preparation**:
- [ ] System optimized for performance
- [ ] All drivers updated and tested
- [ ] All software closed
- [ ] Memory available for plugins

**Practice Techniques**
- **Parameter Control Practice**:
- Practice smooth parameter changes
- Master preset switching without disruption
- Develop muscle memory for controls
- Practice emergency procedures

#### Set Design Practice
**Structural Planning**:
- Map Wasp intensity to song dynamics
- Plan preset changes for smooth transitions
- Design control flow for intuitive operation
- Prepare backup plans for equipment failures

## Professional Best Practices

### Set Management
#### Energy Planning
- **Dynamic Arc**: Plan Wasp intensity throughout performance
- **Audience Engagement**: Adjust for crowd response
- **Song Flow**: Smooth transitions between songs
- **Peak Moments**: Maximum effect at impact points

#### Repertoire Organization
- **Preset Banks**: Organized by musical style
- **Quick Access**: Frequently used presets easily reachable
- **Backup Plans**: Alternative settings for each song

### Technical Excellence
#### Reliability Measures
- **Equipment Redundancy**: Critical systems doubled
- **Backup Configuration**: Quick switch to simple setup
- **Testing Protocol**: Thorough pre-show verification
- **Emergency Procedures**: Clear action plans

#### Performance Optimization
- **Buffer Management**: Balance latency and stability
- **CPU Monitoring**: Watch system performance
- **Audio Quality**: Maintain consistent monitoring

### Post-Performance
- **Review and Documentation**:
- **Performance Notes**: Record what worked and didn't
- **Settings Archive**: Save successful configurations
- **Equipment Notes**: Document any issues or needs
- **Improvement Planning**: Plan adjustments for next performance

### Maintenance
- **Regular Maintenance**:
- [ ] Daily checks for connections and functionality
- [ ] Weekly updates and tests
- [ ] Monthly comprehensive testing
- [ ] Quarterly deep system cleanup

**Creative Maintenance**
- **Inspiration and Ideas**:
- [ ] Sound design journal
- [ ] Experimentation with unusual settings
- [ ] Learning about new techniques
- [ ] Community engagement
- [ ] Documentation maintenance

- **Skill Development**:
- [ ] Technical skills development
- [ ] Creative practice and experimentation
- [ ] Learning from other users
- [ ] Knowledge sharing

### Environmental Considerations
- **Acoustic Environment**:
- [ ] Consistent temperature and humidity
- [ ] Minimize background noise
- [ ] Ensure proper electrical grounding
- [ ] Position equipment optimally
- [ ] Monitor room acoustics

- **Electrical Issues**:
- [ ] Surge protection setup
- [ ] Power quality management
- [ ] Cable management
- [ ] Check for interference

### Safety and Reliability
- **Equipment Protection**:
- [ ] Connection security
- [ ] Strain relief on cables
- [ ] Protect connectors from damage
- [ ] Secure equipment placement
- [ ] Power conditioning equipment

### Emergency Procedures

#### Technical Failures**:
- **Audio Interface Failure**: Switch to backup interface
- **Computer Failure**: Use simplified setup
- **Equipment Damage**: Continue with reduced complexity
- **System Failure**: Reboot system

**Performance Recovery**:
- **Sound Quality Issues**: Use simpler preset
- **Timing Issues**: Increase buffer or manual timing
- **CPU Issues**: Reduce processing complexity

## Multi-Instance Management

### Parallel Processing
- **Instance Roles**:
- **Instance 1**: Aggressive lead Wasp
- **Instance 2**: Atmospheric texture Wasp
- **Instance 3**: Subtle pad Wasp

**Synchronization**:
- **Parameter Linking**: Shared control across instances
- **Clock Sync**: Common MIDI clock
- **Preset Coordination**: Synchronized changes
- **Phase Coherence**: Maintained phase relationships

#### Dynamic Layer Control
- **Blend Control**: Crossfade between instances
- **Routing Control**: Independent signal paths
- **Mix Automation**: Coordinated dry/wet balance

## Advanced Live Applications

### Multi-Instance Performance

#### Multi-Layer Design**
**Instance Roles**:
- **Layer 1**: Foundation with aggressive character
- **Instance 2**: Harmonic content layer
- **Instance 3**: Atmosphere and texture
- **Instance 4**: Effects layer and special processing

**Creative Layering Techniques**:
- **Frequency Splitting**: Different processing per layer
- **Stereo Enhancement**: Width and imaging
- **Dynamic Routing**: Switching between layer configurations
- **Processing Chains**: Complex routing schemes

#### Resource Management
- **CPU Efficiency**: Optimal parameter usage
- **Instance Limitation**: Maximum with quality settings
- **Memory Usage**: Efficient signal flow

### Real-Time Control

#### Advanced Control Strategies
- **Multi-Parameter Control**: Complex parameter changes
- **MIDI Learn**: Custom parameter mapping
- **Expression Pedals**: Continuous control
- **Gesture Control**: Physical movement-based changes
- **Performance Recording**: Capture parameter movements

#### Creative Applications
- **Experimental Settings**:
- **Extreme Parameters**: Push to limits
- **Randomization**: Generate unexpected results
- **Sound Design**: Create unique textures
- **Advanced Routing**: Complex signal paths
- **Cross-Modulation**: Inter-band effects

### Performance Optimization

#### Setup Optimization
- **Buffer Management**: Balance latency and stability
- **System Configuration**: Optimize for audio
- **Multi-Threading**: Distribute processing load
- **Plugin Management**: Limit concurrent instances
- **Background Processes**: Disable applications

**Audio Quality**:
- **Signal Integrity**: Proper gain staging
- **Headroom Management**: Avoid clipping and distortion
- **Noise Floor Control**: Minimize added noise
- **Monitoring Setup**: Professional monitoring

#### Monitoring Setup**:
- **Studio Monitors**: Calibrated monitoring environment
- **Headphone Monitoring**: Detailed checking
- **Metering**: Visual level analysis
- **A/B Testing**: Compare with/without Wasp

### Advanced Live Applications

### Multi-Wasp Layering
#### Parallel Routing Strategies**:
- **Send/Return Architecture**:
`\`\`
Dry Signal → Master Bus
                ↘
                → Wasp 1 → Return Bus → Master Bus
                → Wasp 2 → Return Bus → Master Bus
                → Wasp 3 → Effects Bus → Master Bus
`\`\`

- **Frequency-Specific Processing**:
- **Low Bus**: Sub-bass Wasp
- **Mid Bus**: Vocal/keyboard Wasp
- **High Bus**: Harmonic Wasp
- **FX Bus**: Effects processing and textures

**Dynamic Mix Control**:
- **Global Mix**: Proportional blending
- **Independent Levels**: Separate control per instance
- **Automated Changes**: Synchronized parameter modifications
- **Fade Control**: Crossfade between instances
- **Priority Control**: Dynamic level importance

### Creative Performance

#### Multi-Wasp Ensemble Techniques
- **Orchestration**: Multiple Wasp voices in harmony
- **Counterpoint**: Independent melodic lines
- **Layering**: Complex harmonic relationships
- **Spatial Distribution**: Different stereo positions per voice

#### Advanced Layering Techniques
- **Polyphony Creation**: Multi-voice chord progressions
- **Randomized Layering**: Controlled chaos
- **Programmed Changes**: Synchronized parameter evolution

## Troubleshooting Live Issues

### Emergency Procedures

#### Sound Recovery
- **Quick Switch**: Switch to backup preset
- **Simple Settings**: Use minimal Wasp configuration
- **Hardware Backup**: Switch to alternate equipment
- **Manual Control**: Parameter control via computer/keyboard

#### Technical Recovery
- **Interface Reset**: Restart audio interface
- **System Reboot**: Reboot DAW if needed
- **Project Recovery**: Load simplified project version

### Backup and Recovery
- **Data Recovery**:
- **Preset Exports**: Export successful configurations
- **Cloud Backup**: Automatic cloud synchronization
- **Local Backup**: External drive copies
- **Version Control**: Track preset evolution
- **Emergency Recovery**: Restore from backup location

## Best Practices

### Documentation Standards
- **System Documentation**: Hardware configurations
- **Preset Documentation**: Parameter settings and notes
- **Troubleshooting Logs**: Issue resolution tracking
- **Performance Notes**: Live performance insights

### Communication Standards
- **Issue Reporting**: Detailed problem descriptions
- **Equipment Notes**: Technical specifications
- **Service Delivery**: Professional communication
- **User Experience**: Satisfaction tracking

### Professional Excellence
- **Reliability**: Redundant systems
- **Performance Stability**: Consistent quality delivery
- **Continuous Improvement**: Ongoing skill development
- **Client Communication**: Professional communication

## Creative Development
- **Innovation Documentation**: Sound design discoveries
- **Experimentation Results**: Creative process documentation
- **Collaboration**: Shared creative work
- **Skill Development**: Continuous learning and practice
- **Community Sharing**: Knowledge contribution

### Platform Integration
- **Cross-DAW Workflow**: Seamless integration between DAWs
- **Cloud Collaboration**: Remote project sharing
- **Version Control**: Consistent versions
- **Format Support**: Universal compatibility

## Genre-Specific Applications

#### Electronic Music Performance**
- **EDM Production**:
- **High Wasp**: Fast, aggressive character for leads
- **Complex Patterns**: Rhythmic precision
- **Build-Ups**: Gradual intensity increases
- **Drop Optimization**: Maximum filter engagement

#### Rock Performance**:
- **Classic Rock**: Traditional Wasp character
- **Lead Solos**: Expressive control techniques
- **Rhythm Section**: Support rhythmic elements
- **Vocal Wasp**: Textural enhancement options

#### Ambient Performance**:
- **Ethereal Textures**: Slow, evolving soundscapes
- **Atmospheric Pads**: Long release times, minimal movement
- **Drone Creation**: Environmental sound generation

#### Live Performance Optimization**
- **CPU Efficiency**: Limit instances and optimize settings
- **Memory Management**: Efficient resource usage
- **Latency Management**: Critical for live use
- **System Optimization**: Background process optimization

**Audio Quality**:
- **Signal-to-Noise**: Highest possible ratio
- **Dynamic Range**: Optimal volume range
- **Frequency Response**: Linear across frequency spectrum
- **Stereo Imaging**: Precise control
- **Monitor Quality**: Studio-grade accuracy
- **Latency**: Consistent below 10ms
```

---

## FILE: 03-Workflows\by-context\troubleshooting-workflows.md

```markdown
# Wasp Troubleshooting Guide

## Sound Issues

### No Sound Output
**Causes**:
- Mixer channel muted or volume at 0
- Plugin bypassed
- No MIDI input or note playing
- Wrong routing in mixer
- Oscillators not enabled

**Solutions**:
1. Check mixer channel volume and routing
2. Disable plugin bypass
3. Verify MIDI input from keyboard or piano roll
4. Check audio interface connections
5. Ensure oscillators are enabled and have volume

### Thin or Weak Sound
**Causes**:
- Filter cutoff too low
- No oscillator unison
- No resonance or envelope amount
- Output level too low
- Wrong oscillator waveforms

**Solutions**:
1. Increase filter cutoff above 12 o'clock
2. Enable oscillator unison with detune
3. Add resonance and filter envelope
4. Increase output level appropriately
5. Try aggressive oscillator waveforms

### Distorted or Harsh Sound
**Causes**:
- Excessive resonance
- Self-oscillating filter
- High oscillator levels
- Extreme sync ratios
- Poor signal gain staging

**Solutions**:
1. Reduce resonance below self-oscillation
2. Lower oscillator levels
3. Adjust sync ratio to moderate settings
4. Check and adjust input gain staging
5. Use appropriate output volume

## Performance Issues

### High CPU Usage
**Causes**:
- Multiple instances
- High unison voices
- Complex oscillator sync
- High sample rates
- Low buffer sizes

**Solutions**:
1. Reduce instance count
2. Limit unison voices (4-8 max)
3. Use moderate sync ratios
4. Increase buffer size to 256-512 samples
5. Close other applications

### Audio Glitches
**Causes**:
- Low buffer size
- CPU overload
- Driver issues
- Too many effects
- Poor system performance

**Solutions**:
1. Increase buffer size
2. Reduce CPU load by freezing tracks
3. Update audio drivers
4. Close unnecessary background applications
5. Optimize system settings

### Timing Problems
**Causes**:
- Wrong tempo sync settings
- MIDI clock issues
- DAW timing problems
- Buffer compensation errors
- Envelope timing issues

**Solutions**:
1. Enable host tempo sync
2. Check MIDI clock routing
3. Verify DAW timing settings
4. Adjust PDC compensation
5. Use manual rate when appropriate

## Creative Problems

### Can't Get Classic Wasp Sound
**Solutions**:
- Use aggressive waveforms (sawtooth, square)
- Enable oscillator sync with ratio 2:1 or 3:2
- Push filter into resonance
- Use fast attack, short decay envelope
- Add slight detune and unison
- Keep the interface simple and characteristic

### Sounds Too Digital or Processed
**Solutions**:
- Reduce resonance and filter envelope
- Use moderate oscillator levels
- Avoid extreme parameter settings
- Use simpler routing chains
- Use gentle LFO modulation
- Reference original hardware characteristics

### LFO and Modulation Problems
**LFO Not Working**:
- LFO disabled or rate at 0
- Wrong modulation target
- Sync issues with host tempo
- Depth parameter at minimum

**Solutions**:
1. Enable LFO and set appropriate rate (0.5-10Hz)
2. Verify modulation target assignments
3. Check sync settings and enable host sync
4. Increase depth parameter to hear modulation
5. Test with simple LFO waveforms

### Filter Character Issues
**Filter Not Responding**:
- Cutoff at maximum or minimum
- Envelope amount at 0%
- Envelope not enabled
- Plugin bypassed
- Signal routing issues

**Solutions**:
1. Check cutoff parameter settings
2. Increase envelope amount for filter movement
3. Enable envelope generator
4. Verify plugin is not bypassed
5. Check signal routing to plugin

## Integration Issues

### Plugin Not Loading
**Causes**:
- Installation corruption
- Plugin path problems
- Version incompatibility
- Missing dependencies
- DAW plugin scan issues

**Solutions**:
1. Reinstall plugin completely
2. Check installation directory permissions
3. Verify DAW compatibility
4. Rescan plugin database
5. Check system requirements

### Automation Not Working
**Causes**:
- Parameters not automatable
- Automation disabled
- Wrong track mapping
- DAW-specific issues
- Plugin version incompatibility

**Solutions**:
1. Check which parameters can be automated
2. Enable automation in DAW
3. Verify correct automation lane assignments
4. Test with simple automation curves
5. Check DAW automation settings

### MIDI Controller Problems
**Controller Not Responding**:
- No MIDI connection
- Wrong MIDI channel
- Driver issues
- Power problems
- Wrong mapping

**Solutions**:
1. Check MIDI connections and cables
2. Verify MIDI channel assignments
3. Update MIDI controller drivers
4. Test with different controller
5. Re-learn parameter mappings

## Hardware-Specific Issues

### Audio Interface Problems
**No Sound from Interface**:
- Connection issues
- Driver problems
- Power issues
- Wrong sample rate
- Muted channels

**Solutions**:
1. Check all cable connections
2. Update audio interface drivers
3. Verify power supply and connections
4. Check sample rate settings
5. Test with different cables

### High Latency Issues**
- Buffer size too low
- Incorrect driver settings
- Multiple effects in chain
- System performance issues
- Audio interface buffering

**Solutions**:
1. Increase buffer size to 128-256 samples
2. Use direct monitoring when possible
3. Update audio interface drivers
4. Optimize system performance
5. Reduce effects chain complexity

## Advanced Troubleshooting

### System Performance

### CPU Optimization
**Analysis Tools**:
- System Resource Monitor
- CPU usage graphs
- Memory usage tracking
- Performance profiling
- Bottleneck identification

**Optimization Strategies**:
- Prioritize critical instances
- Optimize buffer settings
- Use appropriate quality settings
- Close unnecessary applications
- Consider hardware upgrades

### Memory Management
**Memory Analysis**:
- RAM usage monitoring
- Plugin memory profiling
- Cache usage tracking
- Leak detection

**Management Techniques**:
- Freeze completed tracks
- Clear plugin cache regularly
- Optimize sample buffers
- Restart applications when memory leaks

### Audio Processing

### Signal Chain Analysis
**Gain Staging**:
- Optimal level management
- Headroom optimization
- Clipping prevention
- Noise floor control

**Routing Verification**:
- Signal flow diagrams
- Channel assignments
- Send/return verification
- Bypass state analysis

### Advanced Techniques
**Experimental Settings**:
- Extreme parameter testing
- Unusual waveform combinations
- Creative modulation routing
- Multi-layer sound design
- Audio rate modulation

## Recovery Procedures

### Emergency Protocols

**Sound Failure Recovery**:
1. Switch to simple preset
2. Use minimal settings
3. Check all connections
4. Restart audio interface
5. Have backup equipment ready

**System Failure Recovery**:
1. Switch to backup audio interface
2. Use simplified signal chain
3. Restart computer system
4. Load critical projects from backup
5. Document system state

**Performance Recovery**:
1. Reduce processing complexity
2. Increase buffer sizes
3. Disable non-essential effects
4. Render tracks to audio
5. Use simplified controller mappings

### Data Recovery

**Preset Recovery**:
- Reload from cloud backup
- Use local backup copies
- Recreate from documentation
- Contact support for corrupted files
- Use factory defaults as last resort

**Project Recovery**:
- Load from backup locations
- Use autosaved versions
- Reconstruct from memory/notes
- Contact collaborators for project files

## Preventive Maintenance

### Regular Checklists
**Daily Maintenance**:
- [ ] Check all connections
- [ ] Verify all inputs and outputs
- [ ] Test basic functionality
- [ ] Monitor system performance
- [ ] Check backup systems

**Weekly Maintenance**:
- [ ] Check for updates and patches
- [ ] Clean temporary files
- [ ] Optimize system settings
- [ ] Test different configurations
- [ ] Update backup systems

**Monthly Maintenance**:
- [ ] Complete system diagnostics
- [ ] Check hardware health
- [ ] Archive completed projects
- [ ] Review and update documentation
- [ ] Clean hardware and connections

### Environmental Considerations

**Power Management**:
- Surge protection setup
- Battery backup systems
- Power conditioning equipment
- Load balancing checks
- Uninterruptible power supply

**Environmental Control**:
- Temperature monitoring
- Humidity management
- Air quality control
- Vibration isolation
- Noise reduction measures

## Professional Best Practices

### Documentation
**System Documentation**:
- Hardware configurations
- Software settings
- Routing diagrams
- Troubleshooting logs
- Maintenance schedules

**User Documentation**:
- Personal settings
- Custom presets
- Preferences and defaults
- Learning materials
- Best practices guides

### Communication
**Issue Reporting**:
- Detailed problem descriptions
- Environmental information
- System specifications
- Steps taken and results
- Resolution documentation

**Knowledge Sharing**:
- Technique sharing
- Preset distribution
- Troubleshooting guides
- Documentation maintenance
- Community participation

### Performance Excellence

**Quality Standards**:
- Audio quality targets
- Performance benchmarks
- Reliability metrics
- User satisfaction goals
- Continuous improvement plans

**Technical Standards**:
- Compatibility requirements
- Integration guidelines
- Performance specifications
- Quality assurance protocols

**Service Delivery**:
- Response time targets
- Resolution effectiveness
- Follow-up procedures
- Client communication standards
- Success rate tracking

## Creative Development

**Innovation Support**:
- Time for experimentation
- Research and development
- Creative freedom
- Risk taking culture
- Innovation documentation

**Skill Development**:
- Technical training programs
- Creative workshops
- Knowledge sharing sessions
- Mentoring opportunities
- External learning resources

**Project Management**:
- Version control systems
- Collaboration tools
- Documentation standards
- Review and feedback processes
- Quality assurance workflows
```

---

## FILE: 03-Workflows\by-goal\advanced-wasp-techniques.md

```markdown
# Advanced Wasp Techniques

## Oscillator Mastery

### Waveform Analysis and Design

#### Classic Waveform Characteristics
**Sawtooth**: Rich harmonic series, bright and aggressive
- **Square**: Odd harmonics, aggressive and edgy
- **Triangle**: Softer, warmer tone, fewer harmonics
- **Pulse**: Variable duty cycle, dynamic range
- **Sine**: Pure tone, fundamental frequency only

#### Waveform Programming
**Advanced Techniques**:
- **Pulse Width Control**: Duty cycle from 1% to 99%
- **Harmonic Blending**: Mix between waveforms
- **Waveform Morphing**: Smooth transitions between shapes
- **Frequency Modulation**: Dynamic pitch variation
- **Phase Control**: Initial phase adjustment

### Oscillator Synchronization

#### Hard Sync Fundamentals
**Sync Theory**: Slave oscillator frequency locked to master
**Sync Ratios**:
- 2:1 = octave higher
- 3:1 = octave plus fifth
- 4:1 = two octaves higher
- 3:2 = octave plus fifth
- **Synchronization**: Phase relationship control

**Advanced Sync Applications**:
- **Phase Modulated Sync**: Dynamic phase variation
- **Variable Ratio Sync**: Changing sync during performance
- **Multi-Oscillator Sync**: Complex routing patterns
- **Polyrhythmic Sync**: Different sync ratios per voice

#### Creative Applications**:
- **Chord Sync**: Sync to musical intervals
- **Noise Sync**: Random noise as sync source
- **External Sync**: External hardware synchronization
- **Audio Rate Sync**: Frequency-based synchronization

## Filter Architecture

### Filter Type Characteristics
**Low-Pass Filter**: All frequencies below cutoff
- **High-Pass Filter**: All frequencies above cutoff
- **Band-Pass Filter**: Frequency band with phase shift
- **Notch Filter**: Frequency rejection with dip

#### Filter Response Control
**Resonance Control**:
- **Level**: 0% to self-oscillation
- **Q Factor**: Bandwidth control
- **Slope Control**: Steepness of filter rolloff
- **Mode**: Different response curves

**Advanced Filter Techniques**:
- **Multi-Stage Filters**: Multiple cascaded filters
- **State Variable Filters**: Digital filter implementations
- **Frequency Modulation**: Filter cutoff modulation
- **Nonlinear Processing**: Analog-saturation modeling

### Envelope Generation

#### ADSR Envelope Parameters
**Attack**: Initial rise time (0.001-2.0s)
- **Decay**: Initial decay time (0.01-5.0s)
- **Sustain**: Hold level during key press
- **Release**: Release time after key release

#### Advanced Envelope Shapes
- **Exponential**: Natural logarithmic response
- **Linear**: Straight line response
- **Power Laws**: Variable curve shapes
- **Inverted**: Reverse envelope shapes
- **Multi-Stage**: Complex multi-breakpoint envelopes

#### Envelope Applications
- **Percussive Envelopes**: Sharp attack, no sustain
- **Pad Envelopes**: Slow attack, long sustain
- **Lead Envelopes**: Balanced articulation
- **Bass Envelopes**: Quick attack, moderate sustain
- **Gate Envelopes**: Rhythmic gating

## Modulation Systems

### LFO (Low Frequency Oscillator)

#### LFO Waveform Options
**Standard Waveforms**:
- Sine: Smooth, continuous variation
- Triangle: Linear rise and fall
- Square: Abrupt transitions
- Sawtooth: Linear rise, sharp fall
- Random: Unpredictable variation

**Advanced Waveforms**:
- **Sample & Hold**: Randomized value holding
- **S&H**: Square with hold periods
- **Chaos**: Complex chaotic patterns
- **Custom**: User-drawn waveforms

#### LFO Routing Options
- **Pitch Modulation**: Vibrato and pitch effects
- **Filter Modulation**: Filter cutoff wobbling
- **Amplitude Modulation**: Tremolo effects
- **Pulse Width Modulation**: Dynamic tone changes
- **Phase Modulation**: Phasing effects

#### Complex Modulation

#### Multi-LFO System**:
- **LFO1**: Primary modulation (0.1-10Hz)
- **LFO2**: Secondary modulation (0.05-2Hz)
- **LFO3**: Tertiary modulation (0.01-1Hz)
- **LFO4**: Quaternary modulation (0.005-0.5Hz)

#### Modulation Matrix**
- **Cross-Modulation**: LFOs modulating each other
- **Parameter Scaling**: Different multiplier per LFO
- **Phase Relationships**: Coordinated phase relationships
- **Logic Operations**: Mathematical operations on LFO outputs

### Performance Techniques

#### Real-Time Control

#### Parameter Assignment
- **Essential Controls**: Filter cutoff, resonance, envelope
- **Expression Pedals**: Continuous parameter control
- **Mod Wheels**: Standard MIDI controllers
- **Aftertouch**: Pressure-sensitive control
- **Footswitches**: Bypass, preset switching

#### Performance Strategies
- **Smooth Transitions**: Parameter morphing
- **Gesture Control**: Physical movement-based changes
- **Layer Switching**: Multi-voice management
- **Automation Recording**: Capture parameter movements
- **Performance Banks**: Organized preset collections

#### Live Performance Techniques
- **Set Structure**: Song section parameter mapping
- **Improvisation**: Creative real-time manipulation
- **Audience Response**: Adaptive performance adjustment
- **Synchronization**: Multi-instrument coordination
- **Backup Plans**: Emergency equipment and settings

## Sound Design Applications

### Creative Sound Design

#### Unconventional Approaches
**Extreme Settings**: Push parameters to limits
- **Noise Sources**: Additive noise generation
- **Random Modulation**: Chaotic element creation
- **Distortion**: Creative harmonic generation
- **Glitch Effects**: Digital artifact creation

#### Experimental Techniques
**Multi-Instance Processing**: Complex layering strategies
- **Signal Routing**: Advanced signal path design
- **Audio Rate Modulation**: Pitch and time manipulation
- **Spectral Processing**: Frequency domain effects
- **Physical Modeling**: Acoustic instrument emulation

#### Musical Applications
**Electronic Music Genres**:
- **EDM Leads**: Bright, cutting sounds
- **Ambient Pads**: Evolving textures
- **Bass Sounds**: Sub-frequency content
- **Sound Effects**: Impact and texture sounds
- **Sequencing**: Pattern-based sound design

**Film and Media**:
- **Sci-Fi Sounds**: Alien and futuristic effects
- **Atmospheric Textures**: Environmental ambience
- **Character Voices**: Unique vocal-like sounds

#### Realistic Emulation
**Instrument Modeling**: Acoustic instrument recreation
**Vocal Synthesis**: Voice-like sound generation
**Nature Sounds**: Environmental sound effects
**Machine Sounds**: Mechanical noise and textures

## Advanced Concepts

### Mathematical Foundations

#### Synthesis Mathematics
- **Additive Synthesis**: Harmonic construction
- **Subtractive Synthesis**: Filtering complex harmonics
- **Frequency Modulation**: Carrier signal generation
- **Phase Modulation**: Phase manipulation
- **Wavetable Synthesis**: Waveform table-based synthesis

#### Signal Processing Theory
- **Convolution**: Impulse response processing
- **Fourier Analysis**: Frequency domain analysis
- **Hilbert Transform**: Frequency domain representation
- **Wavelet Analysis**: Time-frequency representation

### Advanced Algorithms
- **Physical Modeling**: Physical system simulation
- **Neural Networks**: Machine learning approaches
- **Genetic Algorithms**: Evolutionary algorithms
- **Machine Learning**: AI-based sound design

## Audio Processing

#### Digital Signal Processing
- **Sampling Theory**: Digital audio theory
- **Quantization**: Resolution reduction
- **Dithering**: Noise shaping
- **Aliasing Prevention**: Anti-aliasing techniques
- **Interpolation**: Sample value estimation

#### Multi-rate Processing
- **Rate Conversion**: Changing sample rates
- **Time-scaling**: Time-based audio manipulation
- **Wavelet Synthesis**: Wavelet-based processing
- **Phase Vocoder**: Vocal formant synthesis

## Practical Applications

### Genre-Specific Techniques
- **Electronic Music**: EDM, techno, ambient, experimental
- **Film Scoring**: Cinematic, atmospheric sounds
- **Game Audio**: Interactive sound effects
- **Podcast Audio**: Broadcast-quality production
- **Music Production**: Complete track creation

### Workflow Integration
- **Template Systems**: Reusable starting points
- **Automation Strategies**: Parameter programming
- **Session Management**: Recording workflow
- **Collaboration**: Multi-user work

### Quality Assurance

#### Audio Quality Standards
- **Clarity**: Sound definition and intelligibility
- **Noise Floor**: Background noise level
- **Dynamic Range**: Volume range management
- **Frequency Response**: Amplitude vs frequency
- **Stereo Imaging**: Spatial characteristics
- **Phase Coherence**: Phase consistency

#### Performance Metrics
- **Latency**: Processing delay measurement
- **Throughput**: Processing speed measurement
- **CPU Usage**: Resource utilization
- **Memory Usage**: Memory consumption tracking
- **Quality Metrics**: Objective quality assessment

#### User Experience
- **Intuitiveness**: Interface usability
- **Learning Curve**: Ease of understanding
- **Efficiency**: Workflow optimization
- **Reliability**: System stability

## Technical Deep Dive

### Plugin Architecture

#### DSP Implementation
- **Sample Rate Support**: Multiple sample rate options
- **Bit Depth**: Internal processing precision
- **Channel Count**: Mono and stereo configurations
- **Multi-Threading**: Parallel processing
- **Memory Management**: Efficient allocation
- **Interface Standards**: Plugin format support

#### Compatibility
- **VST2**: Universal compatibility
- **VST3**: Enhanced features
- **AU**: macOS support
- **AAX**: Pro Tools integration
- **Standalone**: Independent operation

#### Extension Support
- **MIDI Learn**: User-definable mapping
- **Automation**: Host automation integration
- **Presets**: Parameter save/load systems
- **Preferences**: Customizable interface settings

### Feature Development
- **API Access**: Programming interface
- **Scripting**: User automation
- **Third-Party**: External developer access
- **Customization**: User-specific extensions
- **Future Proofing**: Extensibility planning

## Professional Practices

### Workflow Optimization
- **Project Organization**: Systematic file management
- **Template Creation**: Reusable project setups
- **Naming Conventions**: Consistent naming systems
- **Version Control**: Change tracking and management
- **Documentation**: Comprehensive system documentation

### Performance Optimization
- **CPU Management**: Resource efficiency
- **Memory Management**: Optimal memory usage
- **Buffer Management**: Latency vs. stability balance
- **Multi-Core**: Parallel processing utilization
- **System Configuration**: OS optimization

### Quality Assurance
- **Testing Methodologies**: Comprehensive testing protocols
- **Bug Reporting**: Issue documentation
- **User Feedback**: Experience collection
- **Performance Monitoring**: Ongoing quality assurance
- **Continuous Improvement**: Process refinement

### Career Development

#### Skill Development
- **Technical Skills**: Advanced synthesis knowledge
- **Creative Skills**: Sound design abilities
- **Communication**: Collaboration and presentation
- **Problem Solving**: Technical troubleshooting
- **Industry Knowledge**: Field-specific expertise
- **Learning Attitude**: Continuous education mindset

### Community Engagement
- **Knowledge Sharing**: Community participation
- **Contribution**: Open source involvement
- **Support**: Helping other users
- **Mentorship**: Experience sharing
- **Collaboration**: Team project work
```

---

## FILE: 03-Workflows\by-goal\legacy-project-maintenance.md

```markdown
# Legacy Project Maintenance with Wasp

**Difficulty:** Beginner
**Time Required:** 5 minutes
**Goal:** Maintain old projects using discontinued Wasp plugin
**Status:** Legacy Support Only

---

## Important Notice

**Wasp is DISCONTINUED.** This workflow is for maintaining old projects only.
**For new projects:** Use Wasp XT instead.

---

## Workflow Steps

### Step 1: Opening Legacy Projects

1. **FL Studio will load Wasp automatically** if project contains it
2. **No action needed** - plugin still functions
3. **Save backup** before making changes

---

### Step 2: Migration Decision

**Option A: Keep Wasp**
- If project sounds correct, keep as-is
- Wasp will continue to work in FL Studio

**Option B: Migrate to Wasp XT**
1. Note Wasp settings
2. Replace with Wasp XT
3. Manually recreate settings
4. Fine-tune to match original sound

---

### Step 3: Troubleshooting

**If Wasp doesn't load:**
- Reinstall FL Studio (includes legacy plugins)
- Check plugin manager

**If sound is different:**
- Verify all automation is intact
- Check mixer routing

---

**Last Updated:** February 3, 2026
**Status:** Legacy support documentation

```

---

## FILE: 03-Workflows\by-instrument\wasp-instrument-workflows.md

```markdown
Tags: hip-hop/rap | R&B | deep bass edm

## Wasp Instrument Workflows

### Hip-Hop Sub Bass

**Sound Goal:** Dark, punchy, focused foundation

**Settings:**
- Osc1: Saw, octave -1, detune 0
- Osc2: Square, octave -1, detune 5
- Filter: Cutoff 28%, Resonance 30%
- Filter Env: Attack 5ms, Decay 150ms, Sustain 60%, Release 50ms
- Amp Env: Attack 10ms, Decay 100ms, Sustain 80%, Release 30ms
- Chorus: ON (depth 50%)

**Creation Steps:**
1. Start with oscs at 70% level each
2. Filter envelope modulates cutoff with medium depth
3. Quick amp envelope for punch
4. Light chorus for warmth (not width)

**A/B Test:**
- Compare with and without chorus
- Chorus should add warmth, not obvious width
- If too wide: Reduce chorus depth

**Quick Fix Path:**
- If muddy → Cutoff to 25%, reduce resonance
- If thin → Detune oscs more (10 cents)
- If not hitting → Boost amp sustain to 90%

### R&B Smooth Bass

**Sound Goal:** Warm, melodic, groove-oriented

**Settings:**
- Osc1: Saw, octave -1, detune 0
- Osc2: Saw, octave -1, detune 3
- Filter: Cutoff 38%, Resonance 25%
- Filter Env: Attack 10ms, Decay 200ms, Sustain 70%, Release 100ms
- Amp Env: Attack 20ms, Decay 150ms, Sustain 85%, Release 80ms
- Chorus: ON (depth 60%)

**Why These Settings:**
- Slower filter envelope = smoother attacks
- Higher sustain = notes ring out
- More detune = rich harmonic content
- Strong chorus = classic R&B warmth

### Deep Bass EDM Growl

**Sound Goal:** Aggressive, textured, bass-heavy

**Settings:**
- Osc1: Saw, octave 0, detune 0
- Osc2: Saw, octave 0, detune 15 (heavy detune)
- Filter: Cutoff 45%, Resonance 55%
- Filter Env: Attack 1ms, Decay 300ms, Sustain 50%, Release 150ms
- Amp Env: Attack 1ms, Decay 50ms, Sustain 100%, Release 100ms
- Chorus: OFF

**Modulation Addition:**
- LFO to filter cutoff (0.5Hz, medium depth) = wobble
- Manual filter sweep = intentional growl

**When to Use:**
- Build sections
- Drop moments
- Emphasis on specific notes
- Not for sustained bass notes (too intense)

### Electric Keys/Pluck

**Sound Goal:** Retro, vibey, nostalgic

**Settings:**
- Osc1: Square, octave 0, detune 0
- Osc2: Square, octave 1, detune 2
- Filter: Cutoff 65%, Resonance 18%
- Filter Env: Attack 2ms, Decay 100ms, Sustain 80%, Release 150ms
- Amp Env: Attack 5ms, Decay 80ms, Sustain 70%, Release 100ms
- Chorus: ON (depth 50%)

**Quick Tweaks:**
- For more pluck → Increase filter resonance to 25%
- For smoother → Reduce filter envelope depth
- For funkier → Add slight LFO to pitch (0.1Hz)

### Wasp Lead Hook

**Sound Goal:** Cutting, memorable, singable

**Settings:**
- Osc1: Saw, octave 0, detune 10
- Osc2: Saw, octave 0, detune -10
- Filter: Cutoff 62%, Resonance 30%
- Filter Env: Attack 5ms, Decay 200ms, Sustain 65%, Release 100ms
- Amp Env: Attack 10ms, Decay 150ms, Sustain 60%, Release 100ms
- Chorus: ON (depth 40%)

**A/B Test Method:**
1. Play the hook melody
2. Toggle chorus ON/OFF
3. Listen: "Does it cut through either way?"
4. If not cutting → Increase filter cutoff by 5%
5. If too harsh → Reduce resonance to 25%

### Quick Reference Table

| Sound | Octave | Detune | Cutoff | Res | Chorus | Character |
|-------|--------|--------|--------|-----|--------|-----------|
| Sub bass | -1 | 5 | 28% | 30% | ON | Dark, punchy |
| Mid bass | -1 | 8 | 35% | 35% | ON | Rich, warm |
| Growl | 0 | 15 | 45% | 55% | OFF | Aggressive |
| Keys | 0/+1 | 2 | 65% | 18% | ON | Retro, smooth |
| Lead | 0 | 10 | 62% | 30% | ON | Cutting, warm |
| Pad | 0 | 5 | 72% | 12% | ON | Lush, wide |

```

---

## FILE: 04-Reference\01_Official_Links.md

```markdown
# Wasp - Official Links & Resources

## Official Documentation

### Primary Manual
- **Main Page:** [Wasp Plugin](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Wasp.htm)
- **Publisher:** Image-Line
- **Status:** DISCONTINUED - Replaced by Wasp XT
- **Last Verified:** February 3, 2026

## Plugin Status

### Discontinuation Notice
- **Status:** DISCONTINUED
- **Replaced By:** Wasp XT (enhanced version)
- **Legacy Support:** Still loads in FL Studio for old projects
- **Recommendation:** Use Wasp XT for all new projects

### Why Discontinued?
- Wasp XT offers all Wasp features plus enhancements
- Simplified Image-Line plugin lineup
- Better performance and more features in Wasp XT

---

## Migration Guide

### Moving to Wasp XT
1. **Read Wasp XT documentation** (see Wasp XT folder)
2. **Manually recreate patches** in Wasp XT
3. **Update projects** one at a time
4. **Verify sound** matches original

---

## Related Plugins

- **Wasp XT** - Direct successor (RECOMMENDED)
- **3x Osc** - Simpler alternative
- **Sawer** - Advanced subtractive synth

---

## Support

### For Legacy Projects
- **FL Studio Forum:** Search "Wasp legacy"
- **Support:** Image-Line may provide limited legacy support

---

**Last Updated:** February 3, 2026
**Status:** DISCONTINUED - Reference only

```

---

## FILE: 04-Reference\faq.md

```markdown
# Wasp FAQ

## General Questions

### Q: What makes Wasp special compared to other synthesizers?
**A**: Wasp's distinctive character comes from its aggressive filter envelopes, unusual filter response, and raw, edgy sound. The combination of cheap components and aggressive design creates unique sonic character that still inspires electronic musicians 40+ years later.

### Q: Is Wasp difficult to program?
**A**: Wasp can be challenging due to its aggressive character and interacting parameters, but becomes more intuitive with practice. Start with basic presets and gradually build complexity.

### Q: Should I use Wasp for bass or leads?
**A**: Wasp can work for both roles, though it's particularly loved for aggressive leads. Use lower settings for bass, higher settings for leads, and detune appropriately for each use case.

### Q: What's the difference between Wasp and modern synths?
**A**: Wasp uses analog modeling for character, while modern synths often use cleaner processing and digital oscillators. Modern synths offer more stability and features, but Wasp provides unique character that many producers prefer.

### Q: Can I get a classic techno sound with Wasp?
**A**: Yes! Use 4-6 stages, medium-high resonance, oscillator sync, and moderate detune. Use square or sawtooth waves for classic sound.

## Sound Design Questions

### Q: How do I get that aggressive Wasp lead sound?
**A**: Use high resonance (80-90%), fast attack (0.001-0.005s), oscillator sync, square waves, and push filter into self-oscillation.

### Q: How do I create ambient pads with Wasp?
**A**: Use slow LFO, minimal modulation, warm resonance, triangle wave, long envelope release, and gentle filter settings. Layer multiple instances for depth.

### Q: Why does my Wasp sound digital or processed?
**A**: Common causes include excessive resonance, very fast LFO, digital-sounding oscillators, or extreme parameter settings. Try reducing resonance, using slower rates, and warmer waveforms.

### Q: Can I make Wasp sound more vintage?
**A**: Add subtle noise or component imperfections. Use moderate settings, avoid extreme parameters, and experiment with detune and slight modulation drift.

### Q: How do I create percussion sounds?
****A**: Use short envelope times, low sustain, pulse waveforms, high resonance, and rapid LFO changes. Try rhythmic LFO patterns for interesting percussion.

### Q: What's the best way to control filter sweeps?
**- **Manual Control**: Smooth knob movements
- **Automation**: Record parameter changes
- **Mod Wheel**: Real-time filter cutoff control
- **LFO**: Dedicated LFO for rate
- **MIDI CC**: Assign filter cutoff to controller

## Technical Questions

### Q: What's the best buffer size for low latency?
**A**: For live performance: 64-128 samples. For recording: 256-512 samples. Adjust based on system capabilities.

### Q: What causes digital artifacts in Wasp?
**A:** High sample rates, excessive parameter changes, or poor quality filter emulations. Use lower settings and moderate parameter movements.

### Q: How do I minimize Wasp's CPU usage?
**A**: Limit instance count, use moderate settings, freeze completed tracks, increase buffer size, and optimize system performance.

### Q: Can I use multiple instances of Wasp simultaneously?
**A**: Yes, but monitor CPU usage carefully. Modern systems can typically handle 2-4 instances with moderate settings.

### Q: What are Wasp's system requirements?
**A**: Minimum: 4GB RAM, multi-core processor. Recommended: 8GB+ RAM for comfort. Requires 64-bit OS.

### Q: Does Wasp support MPE?
**: Most modern versions do, but check specific version documentation. MPE typically available for pitch bend and channel pressure control.

## Performance Questions

### Q: Can I automate all Wasp parameters?
**A**: Yes, most parameters can be automated via DAW automation systems. Common targets include filter cutoff, LFO rate, detune, envelope parameters, and dry/wet mix.

### Q: How many instances can I run?
**A**: This depends on CPU power. Modern systems typically handle 2-4 instances with moderate settings. Consider freezing tracks if you need more.

### Q: Should I use Wasp before or after effects?
**A**: Both work differently. Pre-effects: shape tone and character. Post-effects: add its distinctive character.

### Q: How do I fit Wasp tracks in a mix?
**A**: Wasp takes up significant frequency space. Use EQ to create space, keep levels conservative, consider sidechain compression, and ensure mono compatibility.

## Integration Questions

### Q: Can I use Wasp in any DAW?
**A**: Most Wasp plugins are available in VST, VST3, and AU formats, making them compatible with virtually all major DAWs including FL Studio.

### Q: How do I integrate Wasp with external hardware?
**:
- Use audio interface with multiple inputs for separate carrier sources. Route output through external processors. Use MIDI for controller integration.

### Q: What MIDI controllers work best for Wasp control?
-**- Keyboard controllers: Mod wheel for filter, pitch bend, aftertouch
- **Faders**: Multiple faders for parameter control
- **Foot switches**: Bypass, preset selection, freeze
- **Expression pedals**: Continuous parameter control
- **Modular synths**: CV/gate integration

### Q: Can I share Wasp presets?
**A**: Most plugins allow preset export and sharing. Share via community forums, social media, or preset libraries. Always credit original creators when sharing modified.

## Advanced Questions

### Q: What is hard sync and how does it work?
**A: Hard sync locks slave oscillator to master frequency at integer multiples. Use 2:1 or 3:2 ratios for classic aggressive sync.

### Q: Can I create custom oscillator waveforms?
**A**: Many modern versions support custom waveforms through additive synthesis or import. Check plugin version capabilities.

### Q: What are band-pass filters in Wasp?
**A**: Multiple band-pass filter stages that create characteristic notches. Different configurations produce different filtering characteristics.

### Q: How do I get self-oscillation?
**A: Push filter resonance to maximum to create unique oscillation.

### Q: Can I create matrix modulation?
- **A**: Some advanced Wasp plugins support VCFs (voltage control filters) for unique filter movement capabilities.

### Q: What is patch memory in a synthesizer?
**A**: Ability to save and recall patch configurations. Wasp has patch memory for storing complete sound configurations.

### Q: How do I use Wasp as a MIDI controller?
**A:**:
- **As sound source**: Route other MIDI instruments into Wasp
- **Control surface**: Use Wasp as MIDI sound source
- **Performance Tools**: Record parameter automation

### Q: Can I use Wasp for audio processing?
-**A:** As an insert effect with audio input
- **Sound Design**: Use Wasp as sound source for additional processing

### Q: What's the difference between LFOs and envelope followers?
- **LFO**: Continuous low-frequency modulation
- **Envelope Followers**: Track modulator envelope peaks and sustain
- **Relationship**: LFO adds continuous movement, envelope followers respond to signal amplitude changes

## Comparison Questions

### Q: How does this compare to original hardware?
**A**: Software offers convenience, perfect recall, and unlimited instances. Hardware provides tactile control and unique character. Many studios use both for different purposes.

### Q: Should I use this instead of other synths?
**A**: Use Wasp when you want its unique character. Other synths are cleaner but different, not replacements.

### Q: What makes one synthesizer better than another?
**A:** Factors include sound quality, CPU efficiency, parameter range, MIDI implementation, workflow features, and user interface.

### Q: Are there good Wasp resources available?
**A:** Check manufacturer documentation, user forums, YouTube tutorials, and community forums for advanced techniques and sound design.

### Q: What are the best resources for learning Wasp programming?
**A:** Synthesis tutorials, signal processing courses, electronic music theory, hardware design knowledge, and audio engineering books.

## Technical Questions

### Q: Why is there latency in my Wasp?
**A:** Check buffer size settings, verify PDC compensation, check for software monitoring, update audio interface drivers, test different buffer sizes.

### Q: Presets aren't loading correctly?
**A:** Check file permissions, verify format compatibility, ensure plugin version matches, re-save problematic presets, or reinstall if necessary.

### Q: How can I organize my Wasp presets?
**A:** Organize by musical style, use consistent naming, include parameter summary, categorize by use case, and maintain backup systems.

### Q: Can I control multiple Wasp instances simultaneously?
**A:** Yes, through MIDI learn or separate automation lanes, but be mindful of CPU usage.

### Q: What's the difference between 2-osc and 4-osc voices?
- **A:** 2-osc has additional octave one octave higher, which creates richer, fuller sound. 4-osc has more even harmonics. Choose based on sound preference.

### Q: Should I use unison or detune?
- **Unison** for richer sound and width, **Detune** for character and space. Use both for different effects in different combinations.

## Creative Applications

### Q: How can I create complex, evolving textures?
**A:** Layer multiple instances, use extreme settings, combine with other effects, record and process audio-rate Wasp tracks for textural elements.

### Q: Can I use Wasp for sound design?
**A:** Yes! Wasp excels at creating unique soundscapes, alien communication, or instrument emulation with extreme settings.

### Q: Can I use Wasp for film and media scoring?
**:** Yes, Wasp provides unique character for sci-fi, horror, or atmospheric sound design through its aggressive filtering.

### Q: What are some unconventional Wasp uses?
- **:** Rhythmic gate patterns for percussion, unstable frequencies for drones, or pulse-width modulation for unique textures, noise as carrier source.

### Q: Can I create harmonic content with Wasp?
- **A:** Use sub-octaves and fine tuning for harmony, combine with external sources, or process multiple instances.

## Support and Resources

### Q: Where can I get help with Wasp issues?
**:** Check manual, manufacturer website, user forums, YouTube tutorials, and contact technical support for specific problems.

### Q: Are there good resources for learning about Wasp programming?
- **A:** Synthesis tutorials, signal processing courses, electronic music theory, audio engineering books, online workshops, user communities, and manufacturer documentation.
```

---

## FILE: 04-Reference\technical-specifications.md

```markdown
# Wasp Technical Specifications

## Audio Engine Architecture

### Core Processing Algorithm
- **Vocoder Type**: Channel vocoder with envelope followers
- **Processing Resolution**: 64-bit internal floating point
- **Sample Rate Support**: 44.1kHz - 192kHz
- **Band Configurations**: 4, 8, 12, 16, 20, 24, 32 bands
- **Latency**: 2-10 samples typical, host-compensated

### Signal Flow Architecture
`\`\`
Modulator → Band-Pass Filters → Envelope Followers → Modulators → VCA → Output
Carrier → Band-Pass Filters → Gain Controls → VCA → Output
`\`\`

## Band Analysis System

### Frequency Band Configuration
**Band Count Options**:
- **4 Bands**: Fast response, choppy character
- **8 Bands**: Clear articulation, moderate quality
- **12 Bands**: Natural speech, good intelligibility
- **16 Bands**: Smooth, musical quality
- **20 Bands**: Very smooth, professional quality
- **24 Bands**: Maximum smoothness, studio quality
- **32 Bands**: Ultimate smoothness, experimental use

**Frequency Distribution**:
- **Linear Spacing**: Even frequency distribution
- **Logarithmic Scaling**: More bands in high frequencies
- **Mel Scale**: Psychoacoustic frequency mapping
- **Custom Distribution**: User-definable frequency ranges

**Band Filter Characteristics**:
- **Filter Type**: Band-pass filters per band
- **Q Factor**: Adjustable bandwidth per band
- **Slope**: Steepness of filter rolloff
- **Crossover Frequency**: Band separation points
- **Overlap Control**: Adjacent band overlap percentage

### Envelope Following System
**Envelope Detection**:
- **Attack Detection**: Fast onset detection
- **Release Detection**: Decay time measurement
- **Sustain Detection**: Steady-state analysis
- **Peak Detection**: Maximum level tracking
- **Gate Threshold**: Minimum detection level

## Modulation System

### Modulator Signal Processing
**Input Characteristics**:
- **Input Gain**: Adjustable input amplification
- **High-Pass Filter**: Remove unwanted frequencies
- **Low-Pass Filter**: Remove rumble and noise
- **Noise Gate**: Background noise reduction
- **Compressor**: Dynamic range control

**Signal Analysis**:
- **Band Level**: Signal strength per frequency band
- **Peak Detection**: Maximum level tracking
- **RMS Calculation**: Average level measurement
- **Correlation**: Signal relationship analysis

### Carrier Signal Processing
**Carrier Generation**:
- **Oscillator Types**: Saw, square, triangle, pulse, noise
- **Frequency Range**: 20Hz - 20kHz (adjustable)
- **Detune Control**: Fine pitch adjustment
- **Pulse Width**: Variable pulse width control
- **Phase Control**: Phase relationship adjustment
- **Filter Section**: Multi-mode filtering
- **Amplitude Control**: Volume and gain staging
- **Distortion**: Saturation and overdrive options
- **Effects**: Chorus, delay, modulation

**Carrier Processing**:
- **Filter Section**: Multi-mode filtering
- **Amplitude Control**: Volume and gain staging
- **Distortion**: Add character and aggression
- **Effects**: Chorus, delay, modulation
- **Stereo Enhancement**: Width and imaging

## Output Processing

### VCA (Voltage-Controlled Amplifier)
**Modulation Control**:
- **Multiplier Range**: 0 - 200% gain control
- **Response Curve**: Linear/logarithmic options
- **Smooth Control**: Parameter smoothing
- **Bleed Control**: Modulation amount control
- **Inversion**: Optional signal inversion
- **Output Configuration**:
- **Dry/Wet Mix**: 0-100% balance control
- **Output Level**: Master gain control
- **Mute/Solo**: Per-band mute options
- **Phase Invert**: Optional phase inversion
- **Stereo Mode**: Mono/stereo processing options

## MIDI Implementation

### Standard MIDI Controller Assignments
- **Standard MIDI CCs**:
- **CC#1**: Modulation Wheel → Band Count
- **CC#2**: Breath Control → Attack Time
- **CC#4**: Foot Controller → Release Time
- **CC#5**: Portamento Time → Band Overlap
- **CC#6**: Volume → Output Level
- **CC#7**: Pan → Stereo Balance
- **CC#11**: Expression → Dry/Wet Mix
- **CC#12**: Effect Control 1 → Carrier Type
- **CC#13**: Effect Control 2 → Carrier Filter
- **CC#14**: Effect Control 3 → Carrier Resonance

- **Extended Control**:
- **NRPN**: Non-registered parameter numbers
- **RPN**: Registered Parameter Numbers
- **Sysex**: System Exclusive messages
- **MIDI Learn**: User-definable assignments
- **Program Change**: Preset selection

### MIDI Synchronization
**Clock Options**:
- **Internal Clock**: Internal tempo generation
- **External MIDI**: Sync to external MIDI clock
- **Host Sync**: Follow DAW tempo
- **Tap Tempo**: Real-time tempo detection
- **Sample Sync**: Word clock synchronization

## Performance Specifications

### Audio Quality Metrics
- **Signal-to-Noise Ratio**:
- **Dynamic Range**: 100dB+ (with proper settings)
- **THD+N**: <0.005% (typical)
- **Crosstalk**: <-80dB (for stereo separation)
- **Frequency Response**: 20Hz - 20kHz ±0.5dB

### CPU Performance
**Resource Usage**:
- **4 Bands**: 0.5% - 2% of one core
- **8 Bands**: 1% - 4% of one core
- **16 Bands**: 2% - 8% of one core
- **24 Bands**: 4% - 15% of one core
- **32 Bands**: 8% - 30% of one core

**Memory Requirements**:
- **Base RAM**: 100MB - 500MB per instance
- **Band Scaling**: +10MB per additional 8 bands
- **Preset Storage**: 1-5MB per 100 presets
- **Cache Memory**: 20MB - 100MB for performance

### Latency Performance
**Processing Delay**:
- **Minimum**: 2.5 samples (native processing)
- **Typical**: 5-10 samples (with full processing)
- **Maximum**: 15-20 samples (maximum band count)
- **Compensation**: Automatic PDC compensation

## Platform Compatibility

### Windows Support
**System Requirements**:
- **Operating System**: Windows 7 SP1 - Windows 11
- **Processor**: Intel i3 or AMD Ryzen 3 minimum
- **RAM**: 8GB minimum, 16GB recommended
- **Storage**: 500MB available space
- **Graphics**: Display resolution 1024x768 minimum

**Plugin Formats**:
- **VST2**: Universal compatibility
- **VST3**: Enhanced performance and features
- **AAX**: Pro Tools compatibility

### macOS Support
**System Requirements**:
- **Operating System**: macOS 10.9 - macOS 14+
- **Processor**: Intel Core i5 or Apple Silicon M1/M2
- **RAM**: 8GB minimum, 16GB recommended
- **Storage**: 500MB available space
- **Graphics**: Retina display support

**Plugin Formats**:
- **VST2**: Universal format
- **VST3**: Modern standard
- **AU**: macOS native format
- **AAX**: Pro Tools support

### Linux Support
**Compatibility**:
- **Wine**: Via Wine compatibility layer
- **Performance**: Varies with Wine version
- **Stability**: Generally stable with recent versions
- **Recommendation**: Native Windows or macOS preferred

## Advanced Features

### Analysis Capabilities
**Signal Analysis**:
- **Real-Time Spectrum**: Frequency domain analysis
- **Phase Analysis**: Phase relationship monitoring
- **Peak/Level**: Continuous level tracking
- **Correlation**: Stereo coherence analysis
- **Envelope Visualization**: Per-band envelope shapes
- **Spectrum Analyzer**: Full frequency spectrum

### Creative Processing
**Modulation Matrix**:
- **Cross-Modulation**: Inter-band interactions
- **Complex Routing**: Multiple modulation paths
- **Feedback Control**: Controlled signal feedback
- **Dynamic Routing**: Input-dependent processing
- **Mathematical Operations**: Mathematical operations on LFOs

### Creative Processing
**Freeze Function**:
- **Parameter Freeze**: Hold current analysis
- **Spectral Freeze**: Hold frequency spectrum
- **Time Freeze**: Hold audio buffer
- **Pattern Freeze**: Hold modulation pattern

### Multi-Instrument Design
**Ensemble Techniques**:
- **Multiple Voices**: Different Wasp voices
- **Chord Generation**: Add harmonic content
- **Stereo Distribution**: Different positions per voice
- **Spatial Placement**: Wider stereo field

### Experimental Techniques
**Extreme Settings**:
- **Maximum Band Count**: Ultimate smoothness
- **High Feedback**: Self-oscillation limits
- **Random Parameters**: Generate unexpected settings
- **Noise Sources**: Additive noise generation
- **Glitch Creation**: Digital artifact creation

## Comparison with Hardware Vocoders

### Classic Hardware Emulation
**Emulated Characteristics**:
- **Frequency Response**: Hardware frequency responses
- **Nonlinearity**: Analog circuit behavior
- **Component Aging**: Temperature drift simulation
- **Noise Floor**: Hardware noise characteristics
- **Digital Presicion**: Perfect signal precision
- **Memory Limitation**: System resource limitations

### Software Advantages**
- **Digital Benefits**: Perfect recall, unlimited instances
- **Automation**: Complete parameter control
- **Multiple Instances**: Unlimited vocoder units
- **Low Noise Floor**: No analog noise floor
- **Extended Features**: Modern capabilities

### Hybrid Approach
- **Analog Modeling**: Preserve vintage character
- **Digital Precision**: Maintain audio quality
- **Extended Features**: Modern capabilities
- **Workflow Integration**: DAW compatibility

## Technical Limitations

### Known Constraints
**Processing Limits**:
- **Maximum Band Count**: Limited by CPU and memory
- **Frequency Resolution**: Limited by sample rate
- **Analysis Latency**: Processing delay inherent
- **Memory Allocation**: System resource limitations

**Design Trade-offs**:
- **Quality vs Performance**: Higher quality vs CPU usage
- **Flexibility vs Usability**: More features vs ease of use

### System Requirements Impact
**Minimum Requirements**:
- **CPU**: Modern multi-core processor
- **Memory**: 8GB RAM minimum
- **Storage**: Fast SSD for optimal performance
- **Operating System**: 64-bit OS required

**Recommended Setup**:
- **CPU**: Intel i7/i9 or AMD Ryzen 7/9
- **Memory**: 16GB+ high-speed memory
- **Storage**: NVMe SSD with adequate space
- **Audio Interface**: Professional multi-channel interface

## Quality Metrics

### Measurement Standards
**Objective Measurements**:
- **THD+N**: Total harmonic distortion plus noise
- **SNR**: Signal-to-noise ratio
- **Dynamic Range**: Effective bit depth conversion
- **Frequency Response**: Amplitude vs frequency characteristics
- **Phase Response**: Phase shift vs frequency
- **Subjective Quality**: How close to human speech
- **Naturalness**: How close to human speech
- **Musicality**: Musical quality assessment

### Validation Procedures
- **Audio Testing**:
- **Input Signals**: Standard test signal library
- **Reference Comparisons**: Benchmark against standards
- **User Testing**: Human evaluation protocols
- **Automated Testing**: Algorithmic quality checks
- **Quality Assessment**: Measure user experience

## Workflow Optimization

### System-Level Performance

#### CPU Management
- **Resource Utilization**:
- **Efficient Usage**: Optimize parameter usage
- **Instance Limitation**: Limit concurrent instances
- **Quality Settings**: Balance quality vs performance
- **Multi-Core Utilization**: Distribute processing load
- **Background Processes**: Disable unnecessary applications

#### Audio Quality Maintenance
- **Signal Chain Integrity**:
- **Gain Staging**: Proper level management
- **Headroom Management**: Avoid clipping and distortion
- **Noise Floor Control**: Minimize added noise
- **Dithering**: Proper bit depth conversion

#### Monitoring Setup**:
- **Studio Monitors**: Calibrated monitoring environment
- **Headphone Monitoring**: Detailed checking of artifacts
- **Metering**: Visual level and frequency analysis
- **A/B Testing**: Compare with/without Wasp

**Maintenance**
**Regular Updates**:
- Check for plugin updates and patches
- Update audio interface drivers
- Maintain MIDI controller firmware
- Optimize DAW settings

### Memory Optimization
- **Memory Usage**:
- **Preset Caching**: Efficient preset loading
- **Cache Management**: Clear unnecessary data
- **Plugin Chain**: Efficient signal flow
- **System Resources**: Optimize OS settings

## Career Development

**Skill Development**:
- **Technical Skills**: Advanced synthesis knowledge
- **Creative Skills**: Sound design abilities
- **Learning Attitude**: Continuous education mindset
- **Community Engagement**: Sharing and collaboration
- **Professional Practices**:
- **Standards**: Maintain quality benchmarks
- **Service Delivery**: Professional communication
- **Client Communication**: Professional correspondence
- **Quality Assurance**: High standards delivery
- **Reliability**: Redundant systems
- **Continuous Improvement**: Process refinement
```

---

