# Wasp XT - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Wasp XT - Enhanced Analog Emulation

`\`\`
██╗    ██╗ █████╗ ███████╗██████╗     ██╗  ██╗████████╗
██║    ██║██╔══██╗██╔════╝██╔══██╗    ╚██╗██╔╝╚══██╔══╝
██║ █╗ ██║███████║███████╗██████╔╝     ╚███╔╝    ██║   
██║███╗██║██╔══██║╚════██║██╔═══╝      ██╔██╗    ██║   
╚███╔███╔╝██║  ██║███████║██║         ██╔╝ ██╗   ██║   
 ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚═╝         ╚═╝  ╚═╝   ╚═╝   
`\`\`

**Plugin Type:** Subtractive Synthesizer
**Category:** Generator / Analog / Legacy
**Official Manual:** [Image-Line Wasp XT Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Wasp%20XT.htm)

---

## 🎯 What is Wasp XT?

**IMPORTANT: Wasp XT is a legacy 32-bit plugin.**

Wasp XT is the "Extended" version of the original Wasp. It retains the aggressive, buzzy character of the EDP Wasp emulation but adds a more comprehensive GUI, a **Modulation Matrix**, and refined envelope controls. It allows for more complex sound design while keeping the "dirty" filter that made the original famous.

**Key Capabilities:**
- **3 Oscillators:** Saw, Pulse, Square, Noise.
- **Enhanced GUI:** More knobs, clearer layout.
- **Modulation Matrix:** Route LFOs/Envelopes to Pitch, PWM, Cutoff.
- **Distortion/Drive:** Integrated saturation.
- **Filter:** "Fat" LP, BP, HP modes.

---

## 🚀 Quick Start Research Guide

### For Legacy Users:
1. Read **00-START-HERE.md** (create this first)
2. Review **xt-features.md**
3. Create **parameter-cheat-sheet.md**

### For Sound Designers:
1. Study **fat-mode-filter.md**
2. Review **pwm-pads.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Osc 1/2/3:** Shapes.
  - **Fat Mode:** Filter switch.
  - **LFO 1/2:** Routing destinations.

- [ ] **xt-features.md**
  - What was added vs the original Wasp.

#### 02-Data/parameters/
- [ ] **wasp-xt-specs.json**
  `\`\`json
  {
    "plugin_name": "Wasp XT",
    "status": "Legacy",
    "architecture": "32-bit"
  }
  `\`\`

---

## 🔬 Research Framework

### Phase 1: Extended Features (Week 1)
**Goal:** Modulation

**Tasks:**
1. Load Wasp XT
2. Use LFO 2 to modulate Pulse Width
3. Engage "Fat" mode on the filter
4. Create parameter-cheat-sheet.md

---

## 📊 Plugin Specifications to Document

### Engine
- Filter Modes (Fat LP, etc.)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Can I open old Wasp presets in XT? (Usually yes, but check compatibility).

---

## 🔗 Cross-Reference with Other Plugins

Wasp XT is often used with:
- **Wasp** (Original)
- **Sawer** (The spiritual successor)

---

## 📦 File Structure Summary

`\`\`
Wasp XT/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── xt-features.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── wasp-xt-specs.json
│
└── 03-Workflows/
    └── by-goal/
        └── fat-mode-filter.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Wasp XT Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Wasp%20XT.htm)
- [Wasp XT Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Wasp_XT_tutorials.htm)
- [Wasp XT Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+wasp+xt+tutorial)

### Community Resources
- [Wasp XT Subreddit](https://www.reddit.com/r/FL_Studio/search?q=wasp+xt&restrict_sr=1)
- [Wasp XT User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Wasp XT Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Analog Synthesis Fundamentals" - Understanding subtractive synthesis
- "Modulation Matrix Techniques" - Advanced modulation approaches
- "Vintage Synthesizer Emulation" - How analog emulations work

### Advanced Techniques
- **Modulation Matrix:** Understanding advanced routing options
- **Fat Filter Mode:** Mastering the distinctive "Fat" filter sound
- **PWM Applications:** Using pulse width modulation effectively

---

## 📚 In-Depth Technical Analysis

### Extended Architecture
Wasp XT implements enhanced analog synthesis emulation:
- **Enhanced Oscillator System:** More detailed oscillator modeling
- **Modulation Matrix:** Advanced routing capabilities
- **Fat Filter Mode:** Enhanced filter algorithm
- **Improved GUI:** More detailed parameter access
- **Legacy Architecture:** Maintains 32-bit compatibility

### Modulation Matrix System
The modulation matrix provides sophisticated routing:
- **Sources:** LFOs, Envelopes, MIDI CC
- **Destinations:** Pitch, PWM, Cutoff, Resonance, Amplitude
- **Amount Control:** Bipolar modulation amount
- **Routing Flexibility:** Multiple sources to multiple destinations
- **Real-time Processing:** Immediate response to modulation

### Fat Filter Algorithm
The "Fat" filter mode provides enhanced characteristics:
- **Enhanced Resonance:** More pronounced resonance peak
- **Warm Character:** Additional harmonic saturation
- **Analog Emulation:** Enhanced analog modeling
- **Low-pass Focus:** Emphasized low-pass characteristics
- **Vintage Character:** Authentic vintage filter emulation

### Oscillator Architecture
The three-oscillator system features:
- **Oscillator 1:** Primary waveform generator (Saw, Square, etc.)
- **Oscillator 2:** Secondary waveform with detune
- **Oscillator 3:** Noise generator for texture
- **Mixing Matrix:** Flexible oscillator mixing
- **Sync Capability:** Hard sync between oscillators

### Signal Processing Chain
The internal architecture processes audio as follows:
- **Input Stage:** Oscillator mixing and initial processing
- **Filter Processing:** Filter application with Fat mode
- **Modulation Processing:** Matrix-based modulation application
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

### Fat Filter Mode
- **Function:** Enhanced filter algorithm with increased character
  - Range: On/Off (binary)
  - Effect: Changes filter response and harmonic content
  - Use for: Adding warmth and character
  - Pro tip: Essential for the "Fat" Wasp XT sound
- **Behavior:**
  - Off: Standard filter response
  - On: Enhanced filter response with more character
  - Pro tip: Use for vintage-style sounds
- **Applications:**
  - Vintage character: On for authentic vintage sound
  - Warmth addition: On for harmonic saturation
  - Acid sounds: On for enhanced acid characteristics
  - Creative effects: On for unique filter character
  - Pro tip: Use for the signature Wasp XT sound

### Modulation Matrix Controls
- **LFO 1/2 Routing:**
  - **Function:** Routes LFOs to various destinations
    - Destinations: Pitch, PWM, Cutoff, Resonance, Amplitude
    - Effect: Adds movement and expression to the sound
    - Use for: Creating evolving and dynamic sounds
    - Pro tip: Use for adding life to static sounds
  - **Behavior:**
    - Amount: Controls modulation intensity
    - Rate: Controls modulation speed
    - Waveform: Different modulation shapes
    - Pro tip: Use subtle amounts for natural modulation
  - **Applications:**
    - Vibrato: Route to pitch for pitch modulation
    - Tremolo: Route to amplitude for volume modulation
    - Filter sweeps: Route to cutoff for dynamic filtering
    - PWM: Route to pulse width for timbre changes
    - Pro tip: Combine multiple destinations for complex modulation

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
Using Wasp XT for bass sounds:

**Acid Bass:**
- **Classic Setup:** Sawtooth wave with high resonance in Fat mode
  - Use sawtooth waveform for rich harmonics
  - Apply high resonance for characteristic peak
  - Enable Fat mode for enhanced character
  - Essential for acid house and techno
  - Perfect for classic acid sounds
  - Pro tip: Use for authentic acid character

- **Filter Automation:** Automated filter cutoff for squelch
  - Apply fast filter envelope for squelching effect
  - Use Fat mode for enhanced resonance
  - Essential for classic acid sounds
  - Perfect for dance music
  - Pro tip: Use for characteristic acid squelch

- **Resonance Control:** Managing resonance for character
  - Use high resonance for classic acid tones
  - Enable Fat mode for enhanced response
  - Essential for acid sound design
  - Perfect for squelchy basslines
  - Pro tip: Near self-oscillation for maximum character

### Lead Applications
Using Wasp XT for lead sounds:

**Aggressive Leads:**
- **Waveform Selection:** Using square/pulse for hollow leads
  - Apply square or pulse waveforms for hollow character
  - Use Fat mode for enhanced harmonic content
  - Essential for aggressive lead sounds
  - Perfect for cutting through mixes
  - Pro tip: Use for leads that need to cut through

- **Filter Shaping:** Using filter for lead character
  - Apply dynamic filter changes for expression
  - Use Fat mode for enhanced character
  - Essential for expressive lead playing
  - Perfect for evolving lead sounds
  - Pro tip: Use filter automation for expression

- **Distortion Enhancement:** Adding drive for character
  - Apply moderate distortion for extra bite
  - Use Fat mode for enhanced saturation
  - Essential for aggressive lead sounds
  - Perfect for cutting leads
  - Pro tip: Use for leads that need extra character

### Creative Applications
Using Wasp XT for experimental applications:

**PWM Applications:**
- **PWM Pads:** Creating evolving PWM textures
  - Use LFO to modulate pulse width
  - Essential for evolving pad sounds
  - Perfect for ambient music
  - Pro tip: Use slow LFO rates for evolving textures

- **PWM Leads:** Creating dynamic PWM leads
  - Apply envelope to pulse width for dynamic changes
  - Essential for expressive lead playing
  - Perfect for evolving lead sounds
  - Pro tip: Use for dynamic expression

- **PWM Effects:** Creating PWM-based effects
  - Use extreme PWM for metallic effects
  - Essential for experimental sounds
  - Perfect for unique textures
  - Pro tip: Combine with other modulation for complexity

### Texture Creation
Using Wasp XT for textural applications:

**Atmospheric Textures:**
- **Evolutionary Textures:** Creating evolving textures
  - Use complex modulation for evolving sounds
  - Essential for ambient music
  - Perfect for evolving textures
  - Pro tip: Use for atmospheric soundscapes

- **Rhythmic Textures:** Creating rhythmic patterns
  - Apply rhythmic modulation for interest
  - Essential for electronic music
  - Perfect for rhythmic interest
  - Pro tip: Sync to project tempo for precision

- **Experimental Sounds:** Creating unique sonic signatures
  - Push parameters beyond normal settings
  - Essential for experimental music
  - Perfect for unique sounds
  - Pro tip: Use for creative sound design

## 🧪 Experimental Techniques

### Advanced Modulation Applications
Creative uses of Wasp XT's modulation capabilities:

**Matrix Routing:**
- **Complex Routing:** Creating sophisticated modulation networks
  - Route multiple sources to multiple destinations
  - Use for complex evolving sounds
  - Perfect for advanced sound design
  - Essential for sophisticated modulation
  - Useful for complex textures

**Multi-Source Modulation:**
- **Layered Modulation:** Combining multiple modulation sources
  - Use multiple LFOs simultaneously
  - Create complex modulation interactions
  - Perfect for evolving textures
  - Essential for sophisticated modulation
  - Useful for complex movement

**Envelope Modulation:**
- **Dynamic Envelopes:** Using envelopes to modulate other parameters
  - Use amplitude envelope to modulate filter cutoff
  - Create responsive parameter changes
  - Perfect for expressive sounds
  - Essential for dynamic expression
  - Useful for responsive sounds

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
Efficient approaches to using Wasp XT for sound design:

**Bass Design:**
- **Acid Bass Creation:** Creating classic acid bass sounds
  - Use sawtooth waveform with high resonance
  - Enable Fat mode for enhanced character
  - Apply fast filter envelope for squelch
  - Essential for acid house and techno
  - Pro tip: Use near self-oscillation for maximum character

- **Aggressive Bass:** Creating cutting bass sounds
  - Use distortion for extra bite
  - Apply appropriate envelope settings
  - Enable Fat mode for enhanced saturation
  - Essential for bass that cuts through
  - Pro tip: Use for busy mixes

**Lead Design:**
- **Expressive Leads:** Creating dynamic lead sounds
  - Use filter automation for expression
  - Apply appropriate envelope settings
  - Use Fat mode for enhanced character
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
- **Acid House:** Creating classic acid basslines with Fat mode
- **Techno:** Creating aggressive, cutting bass with enhanced character
- **Rave:** Creating energetic lead sounds with complex modulation
- **Energy Management:** Using Wasp XT for track energy
- **Build-up Effects:** Creating tension with filter automation

### Hip-Hop and R&B
- **Vintage Bass:** Creating retro-style bass sounds with Fat character
- **Lo-Fi Character:** Adding vintage character to elements
- **Mix Enhancement:** Using Wasp XT for mix clarity
- **Creative Effects:** Adding unique character to elements
- **Spatial Effects:** Managing spatial characteristics

### Rock and Metal
- **Guitar Enhancement:** Adding synthetic elements to guitar tracks
- **Bass Enhancement:** Creating synthetic bass elements
- **Drum Enhancement:** Adding synthetic elements to drums
- **Mix Enhancement:** Using Wasp XT for mix clarity
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Synthesis:** Creating evolving textures with modulation
- **Vintage Processing:** Using Fat mode for vintage character
- **Experimental Synthesis:** Pushing boundaries of synthesis
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Wasp XT works well with various effects:
- **Reverb:** Adding space to Wasp XT-generated sounds
- **Delay:** Creating rhythmic patterns with Wasp XT
- **Chorus:** Adding width to Wasp XT-generated sounds
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of Wasp XT signals

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
Wasp XT was developed as an enhanced version of the original Wasp:
- Created to provide more sophisticated modulation options
- Designed for advanced sound design capabilities
- Developed with electronic music in mind
- Intended to complement the original Wasp with extended features

### Evolution Through FL Studio Versions
- Initially introduced with basic Wasp XT features
- Enhanced with additional modulation capabilities
- Improved with better sound quality and stability
- Maintained as a legacy option for compatibility

### Impact on Music Production
Wasp XT has influenced music production by:
- Providing accessible advanced modulation
- Enabling sophisticated sound design workflows
- Facilitating vintage sound creation with modern features
- Supporting various musical genres with flexible synthesis

## 🧠 Advanced Processing Techniques

### Synthesis Mastery
Advanced techniques for subtractive synthesis:
- **Oscillator Relationships:** Understanding oscillator interactions
- **Filter Response:** Managing filter characteristics
- **Envelope Shaping:** Creating expressive envelopes
- **Modulation Integration:** Combining with other modulation
- **Creative Applications:** Using synthesis for unique effects

### Modulation Matrix Mastery
Advanced modulation matrix techniques:
- **Source Management:** Understanding different modulation sources
- **Destination Control:** Managing parameter destinations
- **Amount Balancing:** Balancing modulation amounts
- **Routing Complexity:** Creating complex routing networks
- **Creative Routing:** Using modulation in unexpected ways

### Filter Mastery
Advanced filter techniques:
- **Resonance Control:** Managing resonance for character
- **Self-Oscillation:** Using self-oscillation for sine generation
- **Filter Modulation:** Creating dynamic filter changes
- **Formant Synthesis:** Using filters for vowel-like effects
- **Creative Filtering:** Pushing boundaries of filter use

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique Wasp XT textures
- **Atmospheric Processing:** Building ambient Wasp XT effects
- **Rhythmic Effects:** Creating rhythmic Wasp XT patterns
- **Spatial Manipulation:** Creating immersive Wasp XT environments
- **Experimental Processing:** Pushing boundaries of synthesis

## 📊 Performance Considerations

### CPU Usage
Managing Wasp XT's impact on system performance:
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
Optimizing Wasp XT within the system:
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
Creating and managing custom Wasp XT configurations:
- **Bass Presets:** Optimized for bass applications
- **Lead Presets:** Configured for lead applications
- **Creative Presets:** Set up for sound design applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple Wasp XT instances effectively:
- **Sound-Specific:** Different instances for different sounds
- **Parallel Processing:** Multiple instances in parallel
- **Performance Optimization:** Managing multiple instances
- **Creative Applications:** Combining different Wasp XT sounds

### Integration Configurations
Optimizing for different integration scenarios:
- **Insert Processing:** Inline processing configurations
- **Send Processing:** Effects return configurations
- **Hardware Integration:** External hardware integration
- **DAW Integration:** Optimizing for FL Studio workflow

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Wasp XT techniques
- **Reddit Groups:** Sharing synthesis techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced synthesis techniques
- **Written Guides:** In-depth articles on subtractive synthesis
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting Wasp XT configurations
- **Technique Sharing:** Platforms for sharing synthesis methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create an authentic acid bass sound using the Fat filter mode
- [ ] Explain the difference between Wasp and Wasp XT in terms of modulation capabilities
- [ ] Successfully load and use the plugin in a modern 64-bit environment
- [ ] Demonstrate the characteristic "Fat" filter sound that defines the XT version
- [ ] Create a PWM pad using the LFO routing system
- [ ] Set up complex modulation routings using the matrix system
- [ ] Apply appropriate filter settings to achieve the classic acid sound with Fat enhancement
- [ ] Use the internal distortion and Fat mode together for maximum character
- [ ] Troubleshoot compatibility issues with legacy plugin architecture
- [ ] Integrate Wasp XT into efficient synthesis workflows
- [ ] Create genre-specific sounds optimized for different musical styles
- [ ] Optimize Wasp XT settings for minimal CPU usage in legacy architecture
- [ ] Use Wasp XT for creative sound design applications beyond traditional synthesis
- [ ] Set up advanced modulation routing for complex patches
- [ ] Apply Wasp XT in live performance scenarios with legacy considerations
- [ ] Create experimental sounds with extreme parameter settings
- [ ] Combine Wasp XT with other effects for layered processing approaches
- [ ] Integrate Wasp XT with other automation tools seamlessly
- [ ] Create custom synthesis workflows for specific creative needs
- [ ] Use Wasp XT effectively in large, complex projects with legacy considerations

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\what-is-wasp-xt.md

```markdown
Tags: electric | psychedelic | hip-hop/rap

## What Is Wasp XT?

Wasp XT is the extended version of the classic Wasp synthesizer, adding dual filters, expanded modulation matrix, and more sophisticated routing options. It maintains the iconic yellow/black interface while offering modern flexibility.

### What XT Adds Over Original Wasp

| Feature | Original Wasp | Wasp XT |
|---------|---------------|---------|
| Filters | 1 | 2 (can be serial or parallel) |
| Mod Matrix | 4 slots | 12 slots |
| Osc Modes | Basic | Extended with more wave options |
| Routing | Fixed | Serial/Parallel filter options |
| Envelopes | 2 | 4 |

### Tone Targets

- **Electric:** Aggressive, buzzy, cutting leads and bass
- **Psychedelic:** Complex modulation, evolving textures
- **Moody:** Dark filters, slow envelopes, atmospheric

### Signal Flow

`\`\`
Osc1 ──┐
       ├──→ Mixer → Filter 1 ──→ Filter 2 ──→ Amp → Output
Osc2 ──┘              ↑                    ↑
                       └──← Mod Matrix ←──┘
`\`\`

### Filter Configurations

**Serial (Standard):**
- Both filters in series
- 48dB/octave total slope
- Classic "darker" sound

**Parallel:**
- Split signal to both filters
- Results blended
- Can create complex tonal shapes

**Dual Band:**
- Filter 1: Low-pass
- Filter 2: High-pass
- Creates band-pass effect
- Good for creative effects

### Common XT Sounds

**Super Saw Bass:**
1. Osc1-3 (if available): Detuned saws
2. Filter 1: Low-pass at 35%
3. Filter 2: Low-pass at 50% (less closed)
4. Serial routing
5. Heavy chorus for thickness

**Evolving Pad:**
1. Slow attack envelope
2. Filter 1: Low-pass with some resonance
3. Filter 2: Very subtle modulation
4. Parallel routing for width
5. LFO modulating filter 2

**Aggressive Lead:**
1. Detuned saws
2. Filter 1: Low-pass at 60%
3. Filter 2: Band-pass at center
4. Heavy resonance
5. Fast envelope on filter 1

### Typical XT Mistakes

| Mistake | Result | Fix |
|---------|--------|-----|
| Both filters fully open | Harsh, no character | Close filter 1 to 60-70% |
| Too many modulations | Unfocused sound | Simplify, start over |
| Serial filter on bass | Lost low-end | Use parallel or single filter |
| No envelope on filter | Static, boring | Add envelope modulation |
| Chorus on everything | No dynamics | Use selectively |

### First XT Adjustments

**For supersaw leads:**
1. Stack 2-3 oscs with heavy detune
2. Serial filters: Filter 1 at 50%, Filter 2 at 60%
3. Light resonance on both
4. Envelope on Filter 1 cutoff
5. Chorus for 80s sheen

**For complex pads:**
1. Parallel filter routing
2. Filter 1: Warm low-pass
3. Filter 2: Subtle modulation
4. Multiple envelope destinations
5. Slower, musical modulations

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Wasp XT - Parameter Cheat Sheet

**Plugin Type:** Enhanced 3-Oscillator Subtractive Synthesizer
**Category:** Synth / Bass & Lead Generator
**Status:** ACTIVE (Replaces discontinued Wasp)
**Official Manual:** [Wasp XT](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/WaspXT.htm)

---

## Main Oscillators

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **OSC 1-3 Waveform** | Sine/Triangle/Saw/Square/Pulse/Noise | Primary sound source | Layer different shapes for complex timbres |
| **Pitch** | -48 to +48 semitones | Oscillator tuning | OSC 3 at -12 for sub bass layer |
| **Level** | 0-100% | Oscillator volume | Balance for desired mix |
| **Phase** | 0-360° | Starting phase | Affects initial transient and layering |
| **Detune** | -100 to +100 cents | Fine pitch adjustment | Slight detune (5-15 cents) for width |
| **Pulse Width** | 0-100% | PWM duty cycle (Pulse wave only) | 50% = square, vary for timbre changes |

---

## Enhanced Filter Section

| Parameter | Range | Function | Sweet Spot |
|-----------|-------|----------|------------|
| **Filter Type** | LP/HP/BP/BR/Formant | Filter mode | LP for bass/pads, BP for vocal-like |
| **Cutoff** | 20Hz-20kHz | Filter frequency | 500-2kHz for bass, 2-8kHz for leads |
| **Resonance** | 0-100% | Filter emphasis | 40-70% for character |
| **Drive** | 0-100% | Pre-filter distortion | 20-40% for warmth, 70%+ for aggression |
| **Env Amount** | -100 to +100% | Envelope modulation depth | 70-90% for dynamic movement |
| **Key Follow** | 0-100% | Filter tracks keyboard | 50% for natural brightness scaling |

---

## Envelopes (ADSR)

### Filter Envelope
| Stage | Bass | Lead | Pad |
|-------|------|------|-----|
| **Attack** | 0-5ms | 50-200ms | 500ms-1.5s |
| **Decay** | 200-500ms | 300-800ms | 1-3s |
| **Sustain** | 20-40% | 60-80% | 70-90% |
| **Release** | 100-300ms | 500ms-1s | 2-5s |

### Amp Envelope
Similar structure, controls volume

---

## LFO System

| Parameter | Range | Function | Use Case |
|-----------|-------|----------|----------|
| **Rate** | 0.01-20 Hz | LFO speed | 0.1-2 Hz for vibrato, 4-12 Hz for tremolo |
| **Depth** | 0-100% | Modulation intensity | Start at 30%, adjust to taste |
| **Waveform** | Sine/Triangle/Saw/Square/S&H | LFO shape | Sine for smooth, S&H for random |
| **Target** | Pitch/Filter/Amp/PWM | Modulation destination | Multiple targets possible |
| **Sync** | Free/Tempo | LFO timing | Tempo sync for rhythmic effects |

---

## Effects Section (Enhanced vs Original Wasp)

| Effect | Function | When to Use |
|--------|----------|-------------|
| **Distortion** | Pre/post filter drive | Warmth or aggression |
| **Chorus** | Stereo width and thickness | Pads, leads |
| **Delay** | Time-based echo | Rhythmic interest, space |
| **Reverb** | Ambience and space | Nearly everything (subtle) |
| **Unison** | Voice stacking and detuning | Massive supersaw leads |

---

## Quick Start Presets

| Sound | Oscillator Setup | Filter | Envelope | Effects |
|-------|------------------|--------|----------|---------|
| **Deep Sub Bass** | OSC 1: Sine, OSC 3: Sine (-12) | LP, Low cutoff (150-300Hz), Low res | Fast attack, medium decay | None or subtle chorus |
| **Supersaw Lead** | All OSC: Saw, slight detune | LP, Medium cutoff, Moderate res | Medium attack, sustain 70% | Unison 5-7 voices, chorus |
| **Wobble Bass** | OSC 1+2: Square | LP, High res, LFO to cutoff | Fast attack, short decay | Drive 50%+ |
| **Lush Pad** | OSC 1: Saw, OSC 2: Square (+7), OSC 3: Triangle (-12) | LP, Medium cutoff | Slow attack (1s+), long release | Chorus + Reverb |
| **Pluck** | OSC 1: Triangle | LP, Medium cutoff, High env amount | Very fast attack, fast decay, no sustain | Short delay |

---

## Unison Mode (Wasp XT Enhancement)

| Voices | Character | CPU Impact | Use Case |
|--------|-----------|------------|----------|
| **2-3** | Subtle thickness | Low | Natural doubling |
| **4-5** | Noticeable width | Medium | Standard leads |
| **6-8** | Supersaw character | High | Massive EDM leads |
| **9-12** | Ultra-wide wall | Very High | Epic pads, special FX |

**Tip:** Combine unison with slight detune (10-20 cents) for maximum width

---

## Wasp XT vs Original Wasp

| Feature | Wasp (Discontinued) | Wasp XT |
|---------|---------------------|---------|
| **Status** | Legacy | Active |
| **Oscillators** | 3 basic | 3 enhanced |
| **Filter Types** | 4 | 5 (adds Formant) |
| **Effects** | None/Basic | Distortion, Chorus, Delay, Reverb |
| **Unison** | No | Yes (up to 12 voices) |
| **LFO Targets** | Limited | Extensive |
| **Modulation Matrix** | Basic | Advanced |

**Verdict:** Wasp XT is superior in every way - use for all new projects

---

## Modulation Matrix

### Available Sources
- LFO 1 & 2
- Mod Wheel
- Velocity
- Aftertouch
- Envelopes

### Available Destinations
- Oscillator Pitch, Level, Phase
- Filter Cutoff, Resonance
- Amplifier
- Effects parameters

**Power User Tip:** Assign mod wheel to filter cutoff for live filter sweeps

---

## Genre Applications

| Genre | Typical Wasp XT Use |
|-------|---------------------|
| **EDM/Trance** | Supersaw leads (unison 7 voices), plucks |
| **Dubstep** | Wobble bass (LFO to filter), aggressive leads |
| **House** | Classic stab sounds, bass |
| **Synthwave** | Retro leads, pads (saw+square layers) |
| **Ambient** | Lush evolving pads (slow attacks, long releases) |

---

## Sound Design Tips

### Thick Bass
- Layer OSC 1 (saw) + OSC 3 (sine, -12 semitones)
- Low-pass filter at 200-400Hz
- Slight saturation/drive for harmonics
- No effects or subtle chorus

### Modern Lead
- All oscillators saw wave, slightly detuned
- Unison 5-7 voices
- Medium-high filter cutoff with resonance
- Moderate envelope modulation
- Chorus + subtle delay

### Pad
- Mix of saw + square waves
- Slow attack (800ms+), long release (2s+)
- Chorus + reverb
- Unison for width

---

## CPU & Performance

- **CPU Usage:** Low to moderate (depends on unison voices)
- **Optimization:** Fewer unison voices = less CPU
- **Polyphony:** Up to 32 voices (depends on CPU)
- **Realtime Safe:** Yes

---

## MIDI Integration

### Velocity Sensitivity
- Assign velocity to filter cutoff for dynamic timbre
- Velocity to amplitude for volume expression
- Combine both for realistic playing

### Mod Wheel
- Default: Often mapped to vibrato depth
- Custom: Assign to filter cutoff, effects mix, etc.

### Aftertouch
- Vibrato intensity
- Filter expression
- Effects parameter control

---

## Common Mistakes to Avoid

1. **Too Many Unison Voices:** 12 voices = CPU hog, often unnecessary
2. **Excessive Resonance:** Above 80% can be piercing
3. **Ignoring Filter Envelope:** Dynamic filter = more interesting sound
4. **No Oscillator Layering:** Use all 3 oscillators for full sound
5. **Forgetting Effects:** Built-in effects save CPU vs separate plugins

---

## Mixing Integration

### EQ Suggestions
- **Bass:** High-pass at 30-40Hz (remove sub-rumble)
- **Leads:** Cut 200-400Hz if muddy, boost 2-5kHz for presence
- **Pads:** High-pass at 100-200Hz, gentle dip at 300-500Hz

### Compression
- **Ratio:** 2:1 to 4:1 for most sounds
- **Attack:** Fast for plucks, slow for pads
- **Release:** Medium (auto-release often works well)

### Effects Chain
1. Wasp XT (with built-in effects)
2. EQ (corrective)
3. Compression (dynamics)
4. Additional reverb/delay (if needed)

---

## Automation Ideas

1. **Filter Cutoff Sweep:** Build-ups and drops
2. **LFO Rate:** Slow to fast for tension
3. **Unison Voices:** Start with 1, end with 12 for massive build
4. **Effects Mix:** Dry to wet transition

---

## Related Plugins

- **Wasp (Original)** - Discontinued predecessor
- **3x Osc** - Simpler alternative
- **Sawer** - More advanced subtractive synthesis
- **Sytrus** - FM-based alternative
- **Harmless/Harmor** - Additive alternatives

---

**Last Updated:** February 3, 2026
**Status:** ACTIVE - Recommended for all new projects

```

---

## FILE: 01-Learning\Quick-Reference\quickstart-guide.md

```markdown
# Wasp XT Quick Start Guide

## What is Wasp XT?
Wasp XT is an enhanced version of the classic Wasp synthesizer, featuring expanded oscillators, advanced modulation options, and modern processing capabilities while retaining the distinctive character of the original.

## 5-Minute Setup
1. Load Wasp XT on a mixer channel
2. Start with the "Classic Wasp" preset
3. Play a simple melody to hear the character
4. Try oscillator unison for richness
5. Add filter modulation for movement

## Essential Controls
- **Oscillator Mix**: Balance between the two oscillators
- **Filter Cutoff**: Main frequency control (classic Wasp sound)
- **Filter Resonance**: Filter scream and character
- **Envelope Amount**: How much filter responds to notes
- **LFO Rate**: Modulation speed
- **Arpeggiator**: Built-in pattern generator

## Quick Patches
- **Classic Lead**: Osc1 = Saw, Osc2 = Square, moderate resonance
- **Bass Sound**: Sub oscillator + square wave, high filter env
- **Pad Sound**: Slow LFO, unison detune, soft attack
- **FX Sound**: High resonance, filter modulation, ring mod

## Pro Tips
- Use oscillator sync for hard sync effects
- Try ring modulation for metallic tones
- Use the arpeggiator for instant patterns
- Automate filter cutoff for classic acid lines
```

---

## FILE: 02-Data\parameters\wasp-xt-params.json

```json
{
  "$schema": "./schema.json",
  "plugin": {
    "name": "Wasp XT",
    "version": "1.x",
    "category": "Instrument",
    "type": "Enhanced 3-Oscillator Subtractive Synthesizer",
    "status": "ACTIVE (Replaces discontinued Wasp)",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/WaspXT.htm"
  },
  "parameters": {
    "oscillators": [
      {
        "id": "waveform",
        "name": "Waveform",
        "options": ["Sine", "Triangle", "Saw", "Square", "Pulse", "Noise"],
        "count": 3
      },
      {
        "id": "pitch",
        "name": "Pitch",
        "range": "-48 to +48 semitones"
      },
      {
        "id": "detune",
        "name": "Detune",
        "range": "-100 to +100 cents"
      }
    ],
    "filter": [
      {
        "id": "type",
        "name": "Filter Type",
        "options": ["LP", "HP", "BP", "BR", "Formant"]
      },
      {
        "id": "cutoff",
        "name": "Cutoff",
        "range": "20Hz-20kHz",
        "sweetSpot": "500-2000Hz for bass, 2-8kHz for leads"
      },
      {
        "id": "resonance",
        "name": "Resonance",
        "range": "0-100%",
        "sweetSpot": "40-70%"
      },
      {
        "id": "drive",
        "name": "Drive",
        "range": "0-100%",
        "description": "Pre-filter distortion"
      }
    ],
    "unison": [
      {
        "id": "voices",
        "name": "Unison Voices",
        "range": "1-12",
        "sweetSpot": "5-7 for leads, 2-3 for subtle width"
      },
      {
        "id": "detune",
        "name": "Unison Detune",
        "range": "0-100%",
        "sweetSpot": "35-45% for supersaw"
      }
    ],
    "effects": [
      {
        "name": "Distortion",
        "description": "Pre/post filter saturation"
      },
      {
        "name": "Chorus",
        "description": "Stereo width and thickness"
      },
      {
        "name": "Delay",
        "description": "Time-based echo"
      },
      {
        "name": "Reverb",
        "description": "Spatial ambience"
      }
    ]
  },
  "enhancements": {
    "overWasp": [
      "Unison mode (up to 12 voices)",
      "Formant filter type",
      "Built-in effects suite",
      "Advanced modulation matrix",
      "Improved sound quality"
    ]
  },
  "cpuUsage": "Low to Moderate (depends on unison voices)",
  "latency": "Minimal",
  "realtimeSafe": true,
  "status": "ACTIVE"
}

```

---

## FILE: 02-Data\presets\genre-presets.json

```json
{
  "presetArchetypes": {
    "supersawLead": {
      "description": "Massive, wide lead for EDM choruses",
      "settings": {
        "oscillators": { "count": 3, "detune": 15 },
        "filter1": { "type": "lowpass", "cutoff": 55, "resonance": 30 },
        "filter2": { "type": "lowpass", "cutoff": 65, "resonance": 20 },
        "routing": "serial",
        "env1": { "to": "filter1", "attack": 5, "decay": 200, "sustain": 70, "release": 150 },
        "chorus": { "enabled": true, "depth": 70 }
      },
      "useCases": ["EDM drops", "big choruses", "anthem leads"],
      "tags": ["electric", "upbeat", "psychedelic"]
    },
    "darkPad": {
      "description": "Moody, atmospheric foundation",
      "settings": {
        "oscillators": { "count": 2, "detune": 5 },
        "filter1": { "type": "lowpass", "cutoff": 45, "resonance": 20 },
        "filter2": { "type": "lowpass", "cutoff": 55, "resonance": 15 },
        "routing": "parallel",
        "env1": { "to": "filter1", "attack": 500, "decay": 500, "sustain": 80, "release": 500 },
        "chorus": { "enabled": true, "depth": 50 }
      },
      "useCases": ["moody intros", "background texture", "cinematic"],
      "tags": ["moody", "atmospheric", "dark"]
    },
    "aggressiveBass": {
      "description": "Cutting bass for hip-hop drops",
      "settings": {
        "oscillators": { "count": 2, "detune": 10 },
        "filter1": { "type": "lowpass", "cutoff": 35, "resonance": 45 },
        "filter2": { "type": "lowpass", "cutoff": 40, "resonance": 35 },
        "routing": "serial",
        "env1": { "to": "filter1", "attack": 10, "decay": 100, "sustain": 80, "release": 50 },
        "chorus": { "enabled": false, "depth": 0 }
      },
      "useCases": ["hip-hop bass", "trap drops", "aggressive hooks"],
      "tags": ["hip-hop/rap", "electric", "intense"]
    },
    "acidRipper": {
      "description": "Resonant, TB-303 style sound",
      "settings": {
        "oscillators": { "count": 1, "wave": "saw" },
        "filter1": { "type": "lowpass", "cutoff": 50, "resonance": 70 },
        "filter2": { "type": "highpass", "cutoff": 80, "resonance": 30 },
        "routing": "serial",
        "env1": { "to": "filter1", "attack": 1, "decay": 150, "sustain": 40, "release": 100 },
        "chorus": { "enabled": false, "depth": 0 }
      },
      "useCases": ["acid lines", "rhythmic riffs", "techno"],
      "tags": ["electric", "psychedelic", "intense"]
    },
    "shimmerPad": {
      "description": "Bright, airy, ethereal texture",
      "settings": {
        "oscillators": { "count": 2, "detune": 8 },
        "filter1": { "type": "lowpass", "cutoff": 70, "resonance": 15 },
        "filter2": { "type": "lowpass", "cutoff": 85, "resonance": 10 },
        "routing": "parallel",
        "env1": { "to": "filter2", "attack": 800, "decay": 400, "sustain": 90, "release": 600 },
        "ch chorus": { "enabled": true, "depth": 60 }
      },
      "useCases": ["breakdowns", "intros", "ethereal sections"],
      "tags": ["moody", "upbeat", "shimmer"]
    }
  },
  "genreSettings": {
    "hipHop": {
      "subBass": { "filter1": 28, "res": 30, "routing": "single", "chorus": true },
      "midBass": { "filter1": 40, "res": 40, "routing": "serial", "chorus": true },
      "texture": { "filter1": 55, "res": 25, "routing": "parallel", "chorus": true }
    },
    "rnb": {
      "smoothBass": { "filter1": 35, "res": 28, "routing": "serial", "chorus": true },
      "keys": { "filter1": 65, "res": 18, "routing": "parallel", "chorus": true },
      "pad": { "filter1": 50, "res": 20, "routing": "parallel", "chorus": true }
    },
    "deepBassEDM": {
      "wobble": { "filter1": 35, "res": 50, "routing": "serial", "chorus": false },
      "supersaw": { "filter1": 50, "res": 35, "routing": "serial", "chorus": true },
      "texture": { "filter1": 45, "res": 40, "routing": "parallel", "chorus": true }
    }
  }
}

```

---

## FILE: 02-Data\presets\sound-design-presets.json

```json
{
  "classicEmulations": {
    "vintageWasp": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "square",
      "oscMix": 50,
      "detune": 5,
      "filterCutoff": 60,
      "filterRes": 70,
      "envAmount": 80,
      "attack": 10,
      "decay": 200,
      "sustain": 40,
      "release": 300,
      "lfoRate": 4.0,
      "lfoDepth": 30,
      "unison": 0,
      "description": "Faithful original Wasp character"
    },
    "acidBass": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "pulse",
      "oscMix": 70,
      "detune": 0,
      "filterCutoff": 40,
      "filterRes": 85,
      "envAmount": 90,
      "attack": 0,
      "decay": 50,
      "sustain": 0,
      "release": 100,
      "lfoRate": 0,
      "lfoDepth": 0,
      "unison": 2,
      "description": "303-style acidic bass lines"
    }
  },
  "modernLeads": {
    "supersaw": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "sawtooth",
      "oscMix": 100,
      "detune": 15,
      "unison": 8,
      "unisonSpread": 20,
      "filterCutoff": 75,
      "filterRes": 40,
      "envAmount": 60,
      "attack": 20,
      "decay": 300,
      "sustain": 50,
      "release": 400,
      "lfoRate": 6.5,
      "lfoDepth": 40,
      "lfoTarget": "filter",
      "description": "Trance and EDM supersaw lead"
    },
    "hardSync": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "square",
      "oscSync": true,
      "oscSyncRatio": 2.0,
      "filterCutoff": 80,
      "filterRes": 60,
      "envAmount": 70,
      "attack": 5,
      "decay": 150,
      "sustain": 30,
      "release": 200,
      "lfoRate": 8.0,
      "lfoDepth": 50,
      "lfoTarget": "pitch",
      "description": "Hard sync lead for electro"
    }
  },
  "bassPresets": {
    "subBass": {
      "osc1Wave": "sine",
      "osc2Wave": "square",
      "oscMix": 30,
      "subOsc": true,
      "subOctave": -2,
      "filterCutoff": 35,
      "filterRes": 20,
      "envAmount": 40,
      "attack": 50,
      "decay": 200,
      "sustain": 60,
      "release": 500,
      "distortion": "subtle",
      "description": "Deep sub bass for dubstep and EDM"
    },
    "wobbleBass": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "square",
      "oscMix": 60,
      "filterCutoff": 50,
      "filterRes": 75,
      "envAmount": 80,
      "lfoRate": 2.0,
      "lfoDepth": 70,
      "lfoTarget": "filter",
      "attack": 10,
      "decay": 100,
      "sustain": 20,
      "release": 200,
      "description": "Dubstep wobble bass"
    }
  },
  "padPresets": {
    "spacePad": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "triangle",
      "oscMix": 50,
      "detune": 8,
      "unison": 4,
      "filterCutoff": 65,
      "filterRes": 30,
      "envAmount": 50,
      "attack": 800,
      "decay": 1000,
      "sustain": 70,
      "release": 1500,
      "lfoRate": 0.3,
      "lfoDepth": 60,
      "lfoTarget": "filter",
      "delay": "20%",
      "reverb": "30%",
      "description": "Evolving space pad"
    },
    "warmPad": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "pulse",
      "oscMix": 40,
      "detune": 4,
      "unison": 2,
      "filterCutoff": 55,
      "filterRes": 25,
      "envAmount": 45,
      "attack": 600,
      "decay": 800,
      "sustain": 65,
      "release": 1200,
      "lfoRate": 0.2,
      "lfoDepth": 40,
      "lfoTarget": "filter",
      "description": "Warm analog pad"
    }
  },
  "fxPresets": {
    "scifiEffect": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "noise",
      "oscMix": 70,
      "ringMod": true,
      "ringModFreq": 100,
      "filterCutoff": 85,
      "filterRes": 80,
      "envAmount": 90,
      "lfoRate": 15.0,
      "lfoDepth": 80,
      "lfoTarget": "ringMod",
      "attack": 5,
      "decay": 50,
      "sustain": 10,
      "release": 100,
      "description": "Science fiction special effect"
    },
    "metallicHit": {
      "osc1Wave": "square",
      "osc2Wave": "pulse",
      "oscSync": true,
      "oscSyncRatio": 1.5,
      "ringMod": true,
      "ringModFreq": 500,
      "filterCutoff": 90,
      "filterRes": 90,
      "envAmount": 100,
      "attack": 0,
      "decay": 20,
      "sustain": 0,
      "release": 50,
      "distortion": "high",
      "description": "Metallic percussion hit"
    }
  },
  "arpeggioPresets": {
    "retroArp": {
      "osc1Wave": "square",
      "osc2Wave": "sawtooth",
      "oscMix": 60,
      "arpPattern": "up",
      "arpRate": "1/16",
      "filterCutoff": 70,
      "filterRes": 50,
      "envAmount": 60,
      "gateLength": 80,
      "swing": 0,
      "octaves": 2,
      "description": "Classic 8-bit arpeggio"
    },
    "complexArp": {
      "osc1Wave": "sawtooth",
      "osc2Wave": "triangle",
      "oscMix": 50,
      "unison": 3,
      "arpPattern": "random",
      "arpRate": "1/8T",
      "filterCutoff": 60,
      "filterRes": 70,
      "envAmount": 80,
      "lfoRate": 4.0,
      "lfoDepth": 60,
      "lfoTarget": "filter",
      "gateLength": 60,
      "swing": 25,
      "octaves": 3,
      "description": "Complex evolving arpeggio"
    }
  }
}
```

---

## FILE: 02-Data\rules\wasp-xt-safety-rules.md

```markdown
Tags: hip-hop/rap | R&B | deep bass edm

## Wasp XT Safety Rules

### Gain Staging with Dual Filters

| Sound Type | Pre-Filter | Post-Filter 1 | Post-Filter 2 | Final |
|------------|------------|---------------|----------------|-------|
| Sub bass | -6 dB | -6 dB | N/A | -12 dB | Two filters compound gain |
| Mid bass | -3 dB | -3 dB | -3 dB | -6 dB | Serial filters need headroom |
| Lead | 0 dB | 0 dB | N/A | -3 dB | Single filter sufficient |
| Pad | -3 dB | -3 dB | -3 dB | -6 dB | Parallel needs blending |

### Low-End Safety Rules (Critical)

**Dual filters amplify low-end issues:**

1. **Serial routing on bass = danger** - Two filters can compound the cut
2. **Parallel routing preserves low-end** - Better for bass-heavy genres
3. **Test each filter stage solo'd** - Check what EACH filter is doing
4. **Resonance stacks in serial** - Can create massive boosts at cutoff
5. **Never trust visual meters** - Listen more than you watch

### Mono Translation

**With dual filters, phase issues multiply:**

1. Solo the Wasp instance
2. Sum to mono
3. Listen for: "Does it still hit?"
4. If thin: Check if filters are removing fundamentals
5. If muddy: One filter might be too open

### The "XT Bass Test"

`\`\`
1. Set filters to: F1=35%, F2=40%, serial routing
2. Play sustained root note
3. Check mono: Should be focused and punchy
4. If thin: Bypass F2, test F1 alone
5. If muddy: Increase F1 cutoff slightly
6. If weak: Boost pre-filter gain
7. Document which filter configuration works best
`\`\`

### Avoid List

| ❌ Don't Do This | ❌ Result | ✅ Do This Instead |
|-----------------|-----------|-------------------|
| Serial filters at max resonance | Extreme boost, distortion | Keep serial resonance under 40% |
| Both filters wide open | Harsh, no definition | Close at least one filter |
| Complex routing without plan | Unfocused sound | Draw signal flow first |
| Too many mod destinations | Chaotic sound | Limit to 2-3 per envelope |
| Skip mono testing | Poor translation | Test EVERY patch in mono |
| High-pass filter on sub bass | Lost foundation | Use low-pass only |

### Headroom Guidelines

**With dual filters, gain staging is critical:**

- Start with pre-filter levels 6dB lower than single-filter sounds
- Each filter stage can add or remove up to 6dB at resonance
- Parallel routing requires careful level matching
- Use output limiter/soft clip for safety

### Filter Routing Comparison

| Routing | Character | Bass-Safe? | Best For |
|---------|-----------|-------------|----------|
| Serial | Darker, more cut | ❌ Use with caution | Leads, pads |
| Parallel | Preserves lows | ✅ Yes | Bass, texture |
| Single | Cleanest | ✅ Yes | Simple sounds |

```

---

## FILE: 03-Workflows\by-context\integration-guide.md

```markdown
# Wasp XT Integration Guide

## DAW Integration Strategies

### FL Studio Native Integration
**Optimal Workflow**:
`\`\`
MIDI Controller → Wasp XT → Mixer → Effects → Master
`\`\`

**Best Practices**:
- Use Patcher for complex routing
- Create template projects with Wasp XT
- Set up custom control surfaces
- Utilize playlist automation

**Patcher Integration**:
- **Multi-Instance Layering**: Multiple Wasp XT instances
- **Effect Chain Management**: Built-in effects
- **MIDI Routing**: Complex MIDI distribution
- **Parameter Control**: Centralized parameter mapping

### Cross-DAW Compatibility
**Plugin Format Support**:
- **VST2**: Universal compatibility
- **VST3**: Enhanced performance
- **AU**: macOS native support
- **AAX**: Pro Tools integration

**Migration Considerations**:
- **Settings Transfer**: Export/import capabilities
- **Preset Compatibility**: Cross-platform presets
- **Automation Translation**: DAW-specific adaptation
- **Workflow Adaptation**: DAW interface differences

## Plugin Chain Integration

### Pre-Effects Processing
**Input Chain Design**:
`\`\`
Audio Input → EQ → Wasp XT → Compressor → Effects → Output
`\`\`

**Pre-Wasp XT Effects**:
- **Equalization**: Input signal shaping
- **Noise Gating**: Clean signal preparation
- **Distortion**: Drive into Wasp XT
- **Ring Modulation**: External ring modulation

### Post-Effects Processing
**Output Chain Design**:
`\`\`
Wasp XT → Delay → Reverb → Stereo Imager → Limiter
`\`\`

**Effect Categories**:
- **Time-Based**: Delay, reverb for space
- **Modulation**: Chorus, phaser for movement
- **Dynamic**: Compression, limiting for control
- **Spatial**: Stereo processing for width

### Parallel Processing
**Send/Return Configuration**:
- **Dry Signal**: Direct Wasp XT output
- **Wet Signals**: Processed versions
- **Blend Control**: Dry/wet mixing
- **Creative Routing**: Complex signal flows

## Hardware Integration

### MIDI Controller Setup
**Recommended Controllers**:
- **Keyboard**: 88-key weighted action
- **Fader Surface**: 8-16 faders for parameters
- **Knob Controller**: 16+ knobs for real-time control
- **Drum Pads**: For percussive trigger

**Mapping Strategies**:
`\`\`json
{
  "midiMapping": {
    "CC1": "filterCutoff",
    "CC2": "filterResonance",
    "CC3": "oscillatorMix",
    "CC4": "lfoDepth",
    "CC5": "attack",
    "CC6": "decay",
    "CC7": "detune",
    "CC8": "effectMix"
  }
}
`\`\`

### Audio Interface Integration
**Requirements**:
- **Low Latency**: 128-256 samples
- **High Quality**: Clean preamps
- **Multiple I/O**: For external processing
- **Stable Drivers**: Reliable operation

**Configuration**:
- **Sample Rate**: 44.1kHz or higher
- **Buffer Size**: Balance latency vs stability
- **Clock Source**: Internal or external
- **Gain Staging**: Optimal signal levels

### External Hardware Processing
**Hardware Effects Chain**:
`\`\`
Wasp XT → Hardware Compressor → Hardware Reverb → Audio Interface
`\`\`

**Benefits**:
- **Analog Character**: Warmth and saturation
- **Physical Knobs**: Tactile control
- **Processing Power**: Offload CPU
- **Unique Algorithms**: Hardware-only effects

## Software Integration

### Plugin Host Integration
**Max for Live**:
- **Custom Interfaces**: Dedicated control surfaces
- **Randomization**: Generative patch creation
- **Sequencers**: Custom pattern generators
- **Recording**: Parameter automation capture

**Script Integration**:
- **Python Scripts**: Batch processing
- **Automation**: Custom parameter automation
- **Preset Generation**: Algorithmic patch creation
- **Data Analysis**: Parameter optimization

### Third-Party Plugins
**Complementary Plugins**:
- **Multi-band Processors**: Frequency-specific processing
- **Spatial Processors**: Stereo width control
- **Modulation Plugins**: Additional LFO sources
- **Analysis Tools**: Frequency and dynamics analysis

**Integration Methods**:
- **Sidechain**: Wasp XT drives other plugins
- **MIDI Sync**: Tempo and rhythm synchronization
- **Parameter Linking**: Cross-plugin control
- **Automation Sharing**: Host automation coordination

## Workflow Optimization

### Template Creation
**Project Templates**:
`\`\`
Empty Project → Wasp XT Instances → Mixer Channels → Effects → Master Channel
`\`\`

**Template Elements**:
- **Pre-configured Tracks**: Labeled and ready
- **MIDI Routing**: Pre-configured paths
- **Effect Chains**: Basic processing setup
- **Automation Templates**: Common automation patterns

### Preset Management
**Organization System**:
- **Genre Folders**: EDM, Hip-Hop, Soundtrack
- **Use Case Folders**: Leads, Bass, Pads, FX
- **Project Folders**: Song-specific presets
- **Favorite Presets**: Quick access library

**Backup Strategy**:
- **Cloud Storage**: Off-site backup
- **Local Backup**: Secondary storage
- **Version Control**: Preset evolution tracking
- **Export Formats**: Multiple format support

## Advanced Integration

### Multi-Instance Coordination
**Instance Roles**:
- **Instance 1**: Bass foundation
- **Instance 2**: Harmonic complexity
- **Instance 3**: Textural elements
- **Instance 4**: Lead lines

**Synchronization**:
- **MIDI Sync**: Shared timing
- **Parameter Sync**: Linked parameter changes
- **Preset Coordination**: Complementary settings
- **Automation Sync**: Coordinated movements

### External Control Integration
**OSC Integration**:
- **Wi-Fi Control**: Tablet/smartphone control
- **Custom Interfaces**: Web-based control
- **Remote Monitoring**: Real-time parameter display
- **Collaborative Control**: Multiple operators

**MIDI Learn**:
- **Automatic Mapping**: Learn from hardware
- **Custom Scaling**: Parameter range mapping
- **Inverse Mapping**: Opposite parameter behavior
- **Conditional Logic**: If-then parameter control

## Troubleshooting Integration

### Common Issues
**Plugin Not Loading**:
1. Check installation path
2. Verify plugin format compatibility
3. Rescan plugin database
4. Reinstall if necessary

**Automation Problems**:
1. Verify automatable parameters
2. Check automation lane assignment
3. Test with simple automation
4. Check host automation settings

**MIDI Issues**:
1. Verify controller connections
2. Check MIDI channel assignments
3. Test with different controller
4. Update MIDI drivers

**Performance Issues**:
1. Monitor CPU usage
2. Optimize buffer settings
3. Reduce instance count
4. Render to audio when possible

## Best Practices

### Performance Optimization
**CPU Management**:
- **Instance Limit**: Maximum practical number
- **Rendering**: Freeze completed tracks
- **Buffer Settings**: Optimize for workflow
- **Multi-core**: Distribute processing load

**Memory Optimization**:
- **Preset Loading**: Efficient preset management
- **Cache Management**: Clear unnecessary data
- **Project Organization**: Streamlined project structure
- **System Resources**: Optimize OS settings

### Creative Workflow
**Sound Design Process**:
1. **Initial Patch**: Start from known good preset
2. **Exploration**: Systematic parameter exploration
3. **Refinement**: Fine-tune promising sounds
4. **Documentation**: Save and categorize results

**Production Integration**:
1. **Sound Selection**: Choose appropriate patches
2. **Arrangement**: Place sounds in mix
3. **Processing**: Apply effects and automation
4. **Mixing**: Balance and spatial placement

### Maintenance
**Regular Updates**:
- **Plugin Updates**: Latest features and fixes
- **Driver Updates**: Hardware compatibility
- **System Updates**: OS stability
- **Backup Updates**: Preserve current settings

**Documentation**:
- **Preset Notes**: Document custom settings
- **Workflow Documentation**: Record efficient processes
- **Troubleshooting Log**: Track solutions
- **Version History**: Track changes over time
```

---

## FILE: 03-Workflows\by-context\live-performance.md

```markdown
# Wasp XT Live Performance Guide

## Performance Setup Configuration

### Hardware Requirements
**Essential Equipment**:
- Laptop with adequate CPU/RAM
- High-quality audio interface (128-256 samples)
- MIDI controller (keyboard + faders/knobs)
- Backup power supply and cables
- Headphones or IEM system for monitoring

**Optional Enhancements**:
- Foot pedals for hands-free control
- Tablet for preset management
- MIDI controller for parameter mapping
- Backup audio interface

### Controller Mapping Strategy

### Essential Parameters to Map
**Primary Controls**:
- **Filter Cutoff**: Main sound shaping
- **Filter Resonance**: Character control
- **Oscillator Mix**: Timbre adjustment
- **Envelope Amount**: Dynamic response
- **LFO Rate/Depth**: Modulation control
- **Effect Mix**: Wet/dry balance

**Secondary Controls**:
- **Attack/Decay**: Envelope shaping
- **Detune/Unison**: Voice width control
- **Waveform Selection**: Quick timbre changes
- **Arpeggiator**: Pattern control

### Controller Types and Mapping

**Keyboard Controllers**:
`\`\`
Mod Wheel → Filter Cutoff
Pitch Bend → Vibrato
Aftertouch → Resonance
Expression → LFO Depth
Sustain → Arpeggiator Hold
`\`\`

**Fader/Controller Surfaces**:
`\`\`
Fader 1-4 → Filter, Resonance, Mix, LFO
Knob 1-4 → Osc Mix, Detune, Attack, Decay
Button 1-8 → Preset switching
Footswitch 1-2 → Effect toggles
`\`\`

## Live Performance Techniques

### Real-Time Sound Manipulation
**Filter Performance**:
- **Slow Sweeps**: Ambient transitions
- **Fast Cuts**: Rhythmic effects
- **Resonance Automation**: Character changes
- **Filter Morphing**: Dynamic timbre shifts

**Oscillator Control**:
- **Waveform Switching**: Instant timbre changes
- **Mix Automation**: Harmonic content control
- **Detune Live**: Width and chorus effects
- **Sync Ratio Changes**: Hard sync variations

### Performance Strategies

### Set Structure Management
**Song Section Mapping**:
- **Intro**: Simple, clean sounds
- **Verse**: Stable, musical sounds
- **Build-up**: Increasing complexity
- **Drop**: Maximum intensity
- **Breakdown**: Filtered, atmospheric
- **Outro**: Simplified decay

**Preset Organization**:
- **By Song**: Dedicated presets per track
- **By Section**: Different presets for song parts
- **By Mood**: Emotional presets
- **Emergency**: Reliable fallback presets

### Improvisation Techniques
**Spontaneous Creation**:
- **Randomize Function**: Generate unexpected sounds
- **Parameter Morphing**: Smooth evolution
- **Effect Combining**: Layer multiple techniques
- **Real-time Recording**: Capture improvisations

**Creative Approaches**:
- **Audio Rate Modulation**: Experimental sounds
- **Extreme Settings**: Push parameters to limits
- **Unexpected Combinations**: Try unusual settings
- **Audience Response**: Adapt to crowd energy

## Genre-Specific Performance

### Electronic Music Sets
**EDM Performance**:
- **Build Control**: Gradual filter opening
- **Drop Impact**: Sudden parameter changes
- **Transition Tools**: Smooth preset morphing
- **Energy Management**: Dynamic intensity control

**Techno Performance**:
- **Loop Creation**: Repetitive patterns
- **Hypnotic Effects**: Slow, evolving changes
- **Rhythmic Control**: Precise timing
- **Groove Maintenance**: Consistent feel

### Ambient Sets
**Atmospheric Performance**:
- **Slow Evolution**: Gradual parameter changes
- **Texture Building**: Layer complexity
- **Spatial Effects**: Wide, immersive sounds
- **Temporal Flow**: Long-form development

### Experimental Sets
**Avant-Garde Performance**:
- **Sound Destruction**: Extreme processing
- **Glitch Creation**: Digital artifacts
- **Random Elements**: Controlled chaos
- **Audience Participation**: Interactive elements

## Advanced Performance Concepts

### Multi-Instance Performance
**Layered Setup**:
- **Instance 1**: Bass foundation
- **Instance 2**: Harmonic content
- **Instance 3**: Atmospheric texture
- **Instance 4**: Lead elements

**Control Strategies**:
- **Master Controls**: Global parameter control
- **Instance Switching**: Selective editing
- **Parallel Processing**: Combined output
- **Send Effects**: Shared spatial processing

### Ensemble Performance
**Multi-Musician Setups**:
- **Shared Sync**: Common tempo and timing
- **Individual Control**: Personal parameter space
- **Collaborative Effects**: Shared processing chains
- **Communication**: Clear visual/audible cues

### Adaptive Performance
**Environmental Adaptation**:
- **Acoustic Response**: Adapt to room acoustics
- **Audience Feedback**: Respond to crowd energy
- **Technical Adjustments**: Handle equipment issues
- **Musical Development**: Evolve with performance

## Troubleshooting Live Issues

### Technical Problems
**Audio Issues**:
1. Check audio interface connections
2. Verify driver stability
3. Monitor CPU usage
4. Test backup equipment
5. Restart system if needed

**MIDI Problems**:
1. Verify controller connections
2. Check MIDI mapping
3. Test with different controllers
4. Update controller drivers
5. Use keyboard/mouse backup

**Performance Problems**:
1. Monitor system resources
2. Optimize plugin settings
3. Reduce instance count if needed
4. Freeze rendered tracks
5. Increase buffer size

### Creative Blocks
**Performance Recovery**:
- **Use Presets**: Fall back to reliable patches
- **Simplify**: Reduce complexity
- **Randomize**: Generate new ideas
- **Take Break**: Reset creative perspective

## Preparation and Practice

### Pre-Performance Setup
**Equipment Check**:
- [ ] Audio interface connected and tested
- [ ] MIDI controllers mapped and working
- [ ] Presets organized and loaded
- [ ] Backup equipment ready
- [ ] Monitor levels set properly

**Technical Preparation**:
- [ ] System optimized for performance
- [ ] Background processes disabled
- [ ] Power management configured
- [ ] Save critical project states

### Practice Techniques
**Skill Development**:
- **Parameter Control**: Practice smooth parameter changes
- **Preset Switching**: Fast, seamless transitions
- **Improvisation**: Develop creative spontaneity
- **Troubleshooting**: Quick problem resolution

**Performance Rehearsal**:
- **Set Flow**: Practice entire performance
- **Transitions**: Perfect preset changes
- **Timing**: Sync with other elements
- **Endurance**: Maintain energy through set

## Professional Best Practices

### Set Design
**Structural Planning**:
- **Opening**: Strong, attention-grabbing
- **Development**: Logical progression
- **Climax**: Peak intensity moment
- **Resolution**: Satisfying conclusion

**Emotional Arc**:
- **Energy Management**: Control crowd response
- **Mood Changes**: Emotional journey
- **Surprise Elements**: Unexpected moments
- **Community Building**: Audience connection

### Technical Excellence
**Reliability**:
- **Backup Plans**: Multiple contingency options
- **Redundancy**: Critical systems doubled
- **Testing**: Thorough pre-show checking
- **Documentation**: Clear setup procedures

**Professionalism**:
- **Punctuality**: Early arrival and setup
- **Communication**: Clear interaction with team
- **Preparation**: Thorough planning and practice
- **Adaptability**: Flexible problem-solving
```

---

## FILE: 03-Workflows\by-context\troubleshooting-workflows.md

```markdown
# Wasp XT Troubleshooting Guide

## Sound Issues

### No Sound Output
**Causes**:
- Mixer channel muted or volume at 0
- Plugin bypassed
- No MIDI input
- Wrong output routing

**Solutions**:
1. Check mixer channel volume and routing
2. Disable plugin bypass
3. Verify MIDI input from keyboard or piano roll
4. Check audio interface connections

### Thin or Weak Sound
**Causes**:
- Filter cutoff too low
- Resonance too high
- No oscillator unison
- Low filter envelope amount

**Solutions**:
1. Increase filter cutoff above 12 o'clock
2. Reduce resonance to enhance body
3. Enable oscillator unison with detune
4. Increase filter envelope amount for presence

### Distorted or Harsh Sound
**Causes**:
- Excessive resonance
- Filter self-oscillation
- Overloaded mixer channel
- Extreme oscillator settings

**Solutions**:
1. Reduce resonance below 3 o'clock
2. Lower filter cutoff to stop self-oscillation
3. Check mixer levels and avoid clipping
4. Use moderate oscillator levels

## Performance Issues

### High CPU Usage
**Causes**:
- Multiple instances
- High unison voices
- Complex arpeggiator patterns
- High sample rates

**Solutions**:
1. Limit unison voices (4-8 max)
2. Use fewer instances when possible
3. Simplify arpeggiator patterns
4. Render to audio when possible

### Audio Glitches
**Causes**:
- Low buffer size
- CPU overload
- Driver issues
- Too many effects

**Solutions**:
1. Increase buffer size to 256-512 samples
2. Reduce CPU load by freezing tracks
3. Update audio drivers
4. Disable unnecessary effects

### Timing Problems
**Causes**:
- Wrong tempo sync settings
- MIDI clock issues
- DAW timing problems
- Buffer compensation errors

**Solutions**:
1. Enable host tempo sync
2. Check MIDI clock routing
3. Verify DAW timing settings
4. Adjust PDC compensation

## Creative Problems

### Can't Get Classic Wasp Sound
**Solutions**:
- Use single oscillator (sawtooth)
- Set resonance to moderate levels
- Use moderate filter cutoff
- Limit modulation depth
- Disable modern features initially

### Sounds Too Digital
**Solutions**:
- Reduce oscillator unison
- Use gentler filter envelope
- Lower LFO rate and depth
- Add subtle saturation
- Use vintage-style processing

### Arpeggiator Not Working
**Causes**:
- Arpeggiator disabled
- No MIDI notes being received
- Wrong sync settings
- Pattern complexity issues

**Solutions**:
1. Enable arpeggiator button
2. Verify MIDI input to plugin
3. Set sync to host or internal
4. Start with simple patterns

## Integration Issues

### Plugin Not Loading
**Causes**:
- Installation issues
- Plugin path problems
- Version incompatibility
- Corrupted installation

**Solutions**:
1. Reinstall plugin
2. Check plugin installation path
3. Verify DAW compatibility
4. Reset plugin database

### Automation Not Working
**Causes**:
- Parameters not automatable
- Automation disabled
- Wrong track mapping
- DAW automation issues

**Solutions**:
1. Check which parameters can be automated
2. Enable automation in DAW
3. Verify correct track mapping
4. Test with simple automation

### MIDI Controller Issues
**Problems**: Controller not responding to plugin
**Solutions**:
1. Check MIDI learn functionality
2. Verify controller connections
3. Map parameters manually if needed
4. Update controller drivers

## Preset and Settings Issues

### Presets Not Loading
**Causes**:
- Corrupted preset files
- Wrong preset format
- File permission issues
- Plugin version mismatch

**Solutions**:
1. Reinstall preset pack
2. Check file format compatibility
3. Verify file permissions
4. Update plugin to latest version

### Custom Settings Not Saving
**Causes**:
- Read-only preset folder
- Insufficient permissions
- Plugin protection
- Saving to wrong location

**Solutions**:
1. Check folder write permissions
2. Run DAW as administrator
3. Disable plugin protection if present
4. Verify save location is correct

## Advanced Troubleshooting

### Sound Character Problems
**Diagnosis**: Sound doesn't match expectations
**Approach**:
1. Reset to init patch
2. Build sound step by step
3. Compare with reference presets
4. Document working combinations

### Performance Optimization
**Goals**: Reduce CPU while maintaining quality
**Methods**:
1. Render heavy patches to audio
2. Use freeze/smart render functions
3. Optimize buffer settings
4. Limit simultaneous instances

### Creative Blocks
**Solutions**:
- Use randomize function
- Load and modify existing presets
- Try extreme settings
- Study oscillator combinations
- Reference classic patches
```

---

## FILE: 03-Workflows\by-goal\advanced-sound-design.md

```markdown
# Advanced Wasp XT Sound Design

## Oscillator Mastery

### Oscillator Combinations
**Wave Pairing Strategies**:
- **Saw + Square**: Classic synth bass and leads
- **Saw + Triangle**: Rich pads and atmospheric sounds
- **Square + Pulse**: Aggressive bass and percussion
- **Saw + Noise**: Textured effects and percussion

**Oscillator Sync Techniques**:
- **Hard Sync**: Osc2 slaved to Osc1
- **Soft Sync**: Gentle locking with some slip
- **Frequency Ratios**: 2:1, 3:2, 5:4 for harmonics
- **Dynamic Sync**: Automated ratio changes

### Ring Modulation Exploration
**Classic Ring Mod**:
- **High Frequencies**: Metallic percussion hits
- **Low Frequencies**: Gritty bass textures
- **Modulated Rate**: Alien communication effects
- **Dual Ring Mod**: Complex metallic textures

**Advanced Ring Mod**:
- **Freq Modulation**: LFO controls ring mod frequency
- **Mix Control**: Blend between clean and ring mod
- **Envelope Following**: Ring mod responds to playing dynamics
- **Audio Rate Modulation**: Extreme sound mangling

## Filter Techniques

### Filter Character Shaping
**Resonance Techniques**:
- **Self-Oscillation**: Turn filter into oscillator
- **Gentle Boost**: Subtle presence enhancement
- **Aggressive Scream**: Filter distortion character
- **Q Control**: Precision resonance shaping

**Cutoff Strategies**:
- **Slow Sweeps**: Ambient pads and soundscapes
- **Fast Rhythms**: Filter percussion and effects
- **Random Walk**: Organic, unpredictable movement
- **Step Sequencing**: Filter note patterns

### Multi-Stage Filtering
**Series Filtering**:
`\`\`
Oscillator → Filter1 → Filter2 → Output
`\`\`
- **Lo-Pass → Hi-Pass**: Band-pass characteristics
- **Band-Pass → Notch**: Complex frequency shaping
- **Dynamic Filters**: Real-time filter morphing

**Parallel Filtering**:
- **Frequency Splitting**: Different filters for different bands
- **Character Mixing**: Blend filter types
- **Stereo Separation**: Different filters per channel

## Envelope Shaping

### Advanced Envelope Programming
**Multi-Stage Envelopes**:
- **Pre-Attack**: Initial sound shaping
- **Breakpoint Envelopes**: Complex curve design
- **Looped Envelopes**: Cyclical modulation
- **Velocity Mapping**: Dynamic response curves

**Envelope Modulation**:
- **Filter Envelope**: Classic synth filtering
- **Pitch Envelope**: Percussive and effect sounds
- **Amplitude Envelope**: Dynamic shaping
- **Modulation Envelope**: LFO depth control

### Cross-Modulation
**Envelope-to-LFO**:
- **Triggered LFO**: Envelope starts LFO
- **LFO Speed Modulation**: Envelope controls LFO rate
- **LFO Depth Shaping**: Dynamic LFO intensity
- **LFO Waveform Morphing**: Envelope-controlled waveform

**Envelope-to-Envelope**:
- **Secondary Envelopes**: Complex layering
- **Envelope Scaling**: Relative envelope control
- **Envelope Delay**: Staggered envelope triggers
- **Envelope Hold**: Sustained envelope levels

## Modulation Systems

### LFO Advanced Techniques
**Multi-LFO Setup**:
- **LFO1 → Filter Cutoff**: Classic filter modulation
- **LFO2 → Pitch**: Vibrato and pitch effects
- **LFO3 → Pan**: Stereo movement
- **LFO4 → Modulation**: Complex routing

**LFO Waveform Programming**:
- **Custom Waveforms**: Draw your own LFO shapes
- **Waveform Morphing**: Smooth transitions between shapes
- **Random LFO**: Controlled chaos
- **Audio Rate LFO**: FM synthesis effects

### Modulation Matrix
**Routing Possibilities**:
- **Velocity → Any Parameter**: Dynamic control
- **Aftertouch → Filter**: Expressive playing
- **Mod Wheel → Resonance**: Real-time character
- **Breath Control → Envelope**: Wind instrument emulation

**Mathematical Operations**:
- **Parameter Addition**: Multiple sources combine
- **Parameter Multiplication**: Modulation depth scaling
- **Parameter Inversion**: Opposite parameter movement
- **Parameter Quantization**: Stepped parameter changes

## Effects Integration

### Internal Effects Chain
**Signal Path Design**:
`\`\`
Oscillator → Filter → Distortion → Delay → Reverb → Output
`\`\`

**Effect Sequencing**:
- **Pre-Filter Effects**: Oscillator-level processing
- **Post-Filter Effects**: Filtered signal processing
- **Master Effects**: Output-level processing
- **Send Effects**: Parallel processing

### External Processing
**Send Effects**:
- **Reverb Sends**: Space and ambiance
- **Delay Sends**: Rhythmic complexity
- **Chorus Sends**: Stereo width
- **Distortion Sends**: Parallel saturation

**Insert Effects**:
- **Equalization**: Frequency shaping
- **Compression**: Dynamic control
- **Stereo Imaging**: Spatial processing
- **Limiting**: Output protection

## Performance Techniques

### Real-Time Control
**Parameter Assignment**:
- **Mod Wheel**: Filter cutoff or vibrato
- **Pitch Bend**: Pitch modulation range
- **Expression Pedal**: Dynamic parameter control
- **Footswitches**: Effect switching

**Performance Strategies**:
- **Parameter Morphing**: Smooth transitions
- **Scene Switching**: Instant parameter changes
- **Randomization**: Controlled unpredictability
- **Expression Mapping**: Expressive playing techniques

### Automation Programming
**Automated Parameters**:
- **Filter Automation**: Classic filter sweeps
- **Oscillator Automation**: Sound evolution
- **Effect Automation**: Textural changes
- **Parameter Ramping**: Smooth transitions

**Automation Techniques**:
- **Draw Automation**: Precise control
- **Record Automation**: Humanized changes
- **LFO Automation**: Meta-modulation
- **Random Automation**: Controlled randomness

## Creative Sound Design

### Experimental Techniques
**Extreme Settings**:
- **Maximum Resonance**: Self-oscillation exploration
- **High FM Rates**: Bell and metallic sounds
- **Complex Ring Mod**: Digital destruction
- **Filter Modulation**: Audio rate modulation

**Hybrid Synthesis**:
- **Additive Elements**: Harmonic construction
- **Subtractive Processing**: Frequency carving
- **FM Elements**: Frequency modulation
- **Physical Modeling**: Emulation techniques

### Genre-Specific Design

**EDM Elements**:
- **Supersaw Leads**: Wide detuned unison
- **Sub Bass**: Deep fundamental reinforcement
- **Atmospheric Pads**: Slow evolving textures
- **FX Hits**: Stutter and impact sounds

**Soundtrack Elements**:
- **Ambient Textures**: Slow filter movements
- **Sci-Fi Effects**: Ring mod and sync
- **Drama Hits**: Sharp percussive sounds
- **Atmospheric Beds**: Long evolving sounds

**Experimental Elements**:
- **Granular Textures**: Small fragment processing
- **Glitch Effects**: Audio manipulation
- **Drone Sounds**: Static harmonic content
- **Noise Elements**: Textural noise integration
```

---

## FILE: 03-Workflows\by-goal\edm-supersaw-lead.md

```markdown
# EDM Supersaw Lead Creation with Wasp XT

**Difficulty:** Intermediate
**Time Required:** 15 minutes
**Goal:** Create massive EDM supersaw lead sound
**Genre:** EDM, Trance, Progressive House

---

## Prerequisites

- Wasp XT synthesizer
- Understanding of synthesis basics
- Reference: Modern EDM supersaw leads

---

## Workflow Steps

### Step 1: Oscillator Setup

1. **All 3 Oscillators:** Set to **Sawtooth**
2. **OSC 1 Pitch:** 0 (center)
3. **OSC 2 Pitch:** +7 semitones (perfect fifth)
4. **OSC 3 Pitch:** +12 semitones (octave)
5. **Detune:** OSC 2 and 3 slightly (5-10 cents)

---

### Step 2: Unison Configuration

6. **Unison Voices:** **7**
7. **Unison Detune:** **35-45%**
8. **Unison Spread:** **Wide**

---

### Step 3: Filter

9. **Type:** Low-pass
10. **Cutoff:** 3000-5000 Hz
11. **Resonance:** 30-40%
12. **Envelope Amount:** 60%

---

### Step 4: Effects

13. **Chorus:** 40-50% mix
14. **Reverb:** 15-20% mix
15. **Optional Delay:** 1/8 note, 20% mix

---

### Step 5: Performance

16. **Assign mod wheel** to filter cutoff for live control

---

**Last Updated:** February 3, 2026
**Status:** Complete workflow

```

---

## FILE: 03-Workflows\by-instrument\wasp-xt-instrument-workflows.md

```markdown
Tags: hip-hop/rap | deep bass edm | electric

## Wasp XT Instrument Workflows

### XT Hip-Hop Supsaw Bass

**Sound Goal:** Big, wide, modern trap bass

**Settings:**
- Oscillators: 3 saws, detune spread 15
- Pre-filter gain: -4 dB each
- Filter 1: Low-pass 38%, Resonance 35%
- Filter 2: Low-pass 45%, Resonance 25%
- Routing: Serial
- Envelope 1: Filter 1 cutoff, fast attack, medium decay, high sustain
- Envelope 2: Pitch, slight modulation for movement
- Chorus: ON, depth 60%

**Creation Steps:**
1. Stack 3 oscs with wide detune
2. Serial filters create dark, rich character
3. Envelope on F1 for punchy attacks
4. Chorus for width (trap needs space)

**A/B Test:**
1. Compare serial vs parallel routing
2. Parallel should feel wider, serial darker
3. Choose based on song mood

**Quick Fix Path:**
- If muddy → Close F1 to 35%
- If thin → More detune on oscs
- If not wide enough → Increase chorus

### XT R&B Smooth Pad

**Sound Goal:** Warm, lush, soulful background

**Settings:**
- Oscillators: 2 saws, detune 5
- Pre-filter gain: -3 dB each
- Filter 1: Low-pass 52%, Resonance 20%
- Filter 2: Low-pass 60%, Resonance 15%
- Routing: Parallel
- Envelope 1: Filter 2 cutoff, slow attack, long release
- LFO: To F2 cutoff, very slow (0.05Hz), subtle depth
- Chorus: ON, depth 55%

**Why Parallel?**
- Parallel routing preserves low-end warmth
- Two filters create dimensional sound
- Perfect for R&B "wall of sound" aesthetic

### XT Deep Bass Wobble

**Sound Goal:** Rhythmic, funky bass movement

**Settings:**
- Oscillators: 2 saws, detune 8
- Pre-filter gain: -3 dB each
- Filter 1: Low-pass 32%, Resonance 50%
- Filter 2: Low-pass 40%, Resonance 40%
- Routing: Serial (for tight response)
- Envelope 1: Filter 1 cutoff with pitch bend
- LFO: To filter cutoff, synced to 1/8 notes
- Chorus: OFF (wobble doesn't need chorus)

**Synced LFO Settings:**

| Rhythm | FL Studio Setting | Result |
|--------|------------------|--------|
| Quarter notes | 1/4 note | Slow wobble |
| Eighth notes | 1/8 note | Standard wobble |
| Triplets | 1/8 triplet | Bouncy feel |
| Sixteenth | 1/16 note | Fast wobble |

### XT Electric Lead

**Sound Goal:** Cutting, memorable hook

**Settings:**
- Oscillators: 2 saws, detune 12
- Pre-filter gain: 0 dB each
- Filter 1: Low-pass 62%, Resonance 32%
- Filter 2: Band-pass, center frequency
- Routing: Serial
- Envelope 1: F1 cutoff, medium attack, fast decay
- Envelope 2: Amp, punchy attack, sustain 70%
- Chorus: ON, depth 45%

**When to Use:**
- Song hooks and melodies
- Call-and-response sections
- Emphasis on specific phrases
- Not for sustained notes (too intense)

### XT Complex Pad (Evolving)

**Sound Goal:** Otherworldly, textural

**Settings:**
- Oscillators: 2 saws + 1 square, detune spread
- Pre-filter gain: -6 dB each
- Filter 1: Low-pass 48%, Resonance 25%
- Filter 2: Low-pass 65%, Resonance 20%
- Routing: Parallel
- Envelope 1: F1 cutoff, slow attack (1s), long release
- Envelope 2: F2 cutoff, random modulation
- LFO: Stereo panning, very slow
- Chorus: ON, depth 70%

**Modulation Plan:**
1. Envelope 1: Filter opens slowly over 3 seconds
2. LFO: Filters move subtly out of sync
3. Result: Ever-evolving texture

### Quick Reference Table

| Sound | OSCs | Detune | F1 | F2 | Route | Chorus | Character |
|-------|------|--------|-----|-----|-------|--------|-----------|
| Trap bass | 3 | 15 | 38% | 45% | Serial | ON | Big, dark |
| R&B pad | 2 | 5 | 52% | 60% | Parallel | ON | Warm, lush |
| Wobble | 2 | 8 | 32% | 40% | Serial | OFF | Rhythmic |
| Lead | 2 | 12 | 62% | BP | Serial | ON | Cutting |
| Texture | 3 | 10 | 48% | 65% | Parallel | ON | Evolving |

```

---

## FILE: 04-Reference\01_Official_Links.md

```markdown
# Wasp XT - Official Links & Resources

## Official Documentation

### Primary Manual
- **Main Page:** [Wasp XT Plugin](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/WaspXT.htm)
- **Publisher:** Image-Line
- **Status:** ACTIVE (Replaces Wasp)
- **Last Verified:** February 3, 2026

## Plugin Overview

### Description
Wasp XT is an enhanced 3-oscillator subtractive synthesizer that replaces the discontinued Wasp plugin. It features improved oscillators, expanded filter types, built-in effects, and powerful unison mode for massive supersaw leads.

### Key Enhancements over Wasp
- **Unison Mode:** Up to 12 detuned voices
- **Extended Filter Types:** Includes formant filter
- **Built-in Effects:** Distortion, chorus, delay, reverb
- **Advanced Modulation:** Expanded modulation matrix
- **Better Performance:** Optimized DSP

---

## Related Plugins

- **Wasp** - Original (discontinued) version
- **3x Osc** - Simpler alternative
- **Sawer** - Advanced subtractive synth
- **Sytrus** - FM alternative

---

## Reference Sounds

### Supersaw Leads
- Modern EDM and trance music
- Progressive house buildups
- Euphoric festival anthems

---

**Last Updated:** February 3, 2026
**Status:** Complete reference links

```

---

## FILE: 04-Reference\faq.md

```markdown
# Wasp XT FAQ

## General Questions

### Q: What's the difference between Wasp and Wasp XT?
**A**: Wasp XT is an enhanced version with additional oscillators, expanded modulation options, modern effects, and improved audio quality while maintaining the original's character. XT adds features like ring modulation, advanced envelopes, and comprehensive MIDI control.

### Q: Can Wasp XT replace vintage analog synths?
**A**: While Wasp XT captures much of the original's character, it includes modern conveniences like preset storage, MIDI control, and effects that vintage synths lack. It can replace vintage units for practical use but purists may still prefer originals.

### Q: What are the system requirements?
**A**: Minimum requirements vary by version, but generally: 4GB RAM, multi-core processor, 64-bit OS, supported audio interface. Recommended: 8GB+ RAM, fast CPU for multiple instances.

## Sound Design Questions

### Q: How do I get the classic Wasp lead sound?
**A**: Start with sawtooth oscillator, moderate filter resonance (50-70%), medium filter cutoff, and add slight resonance envelope. Use oscillator detune for width and moderate LFO on filter for movement.

### Q: Why does my sound sound digital/processed?
**A**: Common causes include excessive resonance, high unison settings, over-modulation, and using modern effects heavily. Try reducing resonance, lowering unison voices, and using gentler modulation to retain analog character.

### Q: How do I create bass sounds in Wasp XT?
**A**: Use square or sawtooth waves, add sub-octave, set filter cutoff to low-medium, increase filter envelope amount, and add moderate resonance. Try oscillator sync for aggressive bass sounds.

## Technical Questions

### Q: What's the best buffer size for low latency performance?
**A**: For live performance: 128-256 samples. For studio work: 256-512 samples. Lower settings reduce latency but may cause glitches; higher settings increase latency but improve stability.

### Q: Can I use Wasp XT for live performance?
**A**: Yes, Wasp XT is excellent for live performance. Map essential parameters to MIDI controllers, organize presets for your set, and use lower buffer settings for minimal latency.

### Q: Does Wasp XT support MPE (MIDI Polyphonic Expression)?
**A**: Support varies by version. Most modern versions support basic MPE features like per-note pitch bend and channel pressure. Check your specific version's documentation for exact capabilities.

## Workflow Questions

### Q: How do I create complex evolving pads?
**A**: Use slow LFO on filter cutoff, add unison with detune, set long attack/release envelopes, use slow arpeggiator patterns, and add delay/reverb effects for space.

### Q: What's the best way to organize presets?
**A**: Organize by genre (EDM, Hip-Hop, Ambient), use case (leads, bass, pads, FX), and project. Use descriptive names and add notes for complex patches.

### Q: Can I automate all parameters?
**A**: Most parameters can be automated via your DAW's automation system. Common automation targets include filter cutoff, resonance, LFO rate/depth, oscillator mix, and envelope parameters.

## Integration Questions

### Q: How do I use Wasp XT with external hardware?
**A**: Connect your audio interface, configure Wasp XT on a mixer channel, and route output to hardware processors or mixer. Use MIDI controllers for real-time parameter control.

### Q: Can I use multiple instances simultaneously?
**A**: Yes, you can use multiple instances, but be mindful of CPU usage. Each additional instance increases processing load. Freeze rendered tracks when possible.

### Q: Does Wasp XT work in all DAWs?
**A**: Wasp XT is available in VST, VST3, AU, and AAX formats, making it compatible with most major DAWs including FL Studio, Ableton Live, Logic Pro, Pro Tools, and Cubase.

## Troubleshooting Questions

### Q: Why is there no sound coming out?
**A**: Check: mixer channel volume, plugin bypass status, audio interface connections, MIDI input, and that oscillators are enabled and have reasonable levels.

### Q: The filter isn't responding, what's wrong?
**A**: Verify filter envelope amount isn't zero, check that cutoff frequency isn't at minimum or maximum, ensure resonance isn't causing self-oscillation masking the sound, and test with different filter settings.

### Q: I'm getting audio glitches and dropouts, what should I do?
**A**: Increase buffer size, reduce CPU load by closing other applications, use fewer instances, update audio drivers, and ensure your system meets requirements.

### Q: Presets aren't loading correctly?
**A**: Check file permissions, verify preset format compatibility, ensure you're using the correct version for your presets, and try re-saving problematic presets.

## Performance Questions

### Q: How many instances can I run?
**A**: This depends on your CPU power and buffer settings. Modern systems can typically handle 4-8 instances with moderate settings, but this varies widely based on CPU speed and other factors.

### Q: Is Wasp XT CPU-intensive?
**A**: Moderate CPU usage is typical. Factors that increase CPU load include higher unison voice counts, complex arpeggiator patterns, high sample rates, and low buffer settings.

### Q: Can I render Wasp XT tracks to save CPU?
**A**: Yes, rendering tracks to audio is recommended for CPU optimization. Freeze or render completed tracks to free up resources for additional processing.

## Creative Questions

### Q: How do I create Sci-Fi sounds?
**A**: Use ring modulation, oscillator sync, high resonance settings, filter self-oscillation, audio rate modulation, and extreme LFO settings for alien communication and metallic effects.

### Q: What's the best way to create percussion sounds?
**A**: Use short envelope times (fast attack, short decay), high resonance with filter cutoff automation, ring modulation, oscillator sync, and noise generator integration for percussive textures.

### Q: How do I create warm analog sounds?
**A**: Use gentle filter settings, moderate resonance, avoid excessive processing, use saturation carefully, employ subtle detuning, and limit extreme parameter changes.

## Advanced Questions

### Q: Can I create my own waveforms?
**A**: This depends on the version. Some advanced versions support custom waveform drawing or import. Check your specific version's documentation for oscillator customization features.

### Q: How do I use the arpeggiator creatively?
**A**: Try custom patterns, vary gate length, combine with manual playing, use tempo sync for rhythmic effects, and automate arpeggiator parameters for evolving patterns.

### Q: What are the best external effects to pair with Wasp XT?
**A**: Classic combinations include reverb for space, delay for rhythmic complexity, saturation for analog warmth, chorus for stereo width, and EQ for frequency shaping.

## Comparison Questions

### Q: How does Wasp XT compare to other vintage emulations?
**A**: Wasp XT focuses specifically on emulating the EDP Wasp character with modern enhancements. Compared to other vintage emulations, it offers unique filter character and oscillator combinations specific to the original design.

### Q: Should I use Wasp XT or a hardware synth?
**A**: Wasp XT offers convenience, recall, and integration benefits that hardware can't match. Use hardware for specific character or tactile control, Wasp XT for recall-ability and modern workflow integration.

### Q: Is Wasp XT worth it if I have other synths?
**A**: Wasp XT offers unique sound character that complements other synthesizers. Its distinctive filter and oscillator combinations provide sounds difficult to achieve with other synths.

## Version-Specific Questions

### Q: What's the difference between versions?
**A**: Version differences may include enhanced GUI, additional effects, improved audio quality, expanded modulation options, and updated compatibility. Check version notes for specific feature differences.

### Q: Can I upgrade to the latest version?
**A**: Most manufacturers offer upgrade paths. Check the manufacturer's website for upgrade options, pricing, and eligibility requirements.

### Q: Are presets compatible between versions?
**A**: Most presets are forward compatible, but newer versions may have features unavailable in older versions. Backward compatibility may be limited when using new features.

## Support and Resources

### Q: Where can I get help if I'm having problems?
**A**: Check the manual, manufacturer website, user forums, YouTube tutorials, and contact technical support for specific issues.

### Q: Are there tutorial resources available?
**A**: Yes, resources include official tutorials, community-created content, YouTube channels, blogs, and online courses focused on synthesis and Wasp XT specifically.

### Q: Can I share my custom presets?
**A**: Most preset formats can be shared. Export your custom presets and share them via community forums, social media, or preset libraries with proper credit.
```

---

## FILE: 04-Reference\maintenance-guide.md

```markdown
# Wasp XT Maintenance Guide

## Regular Maintenance Procedures

### Daily Maintenance
**Pre-Use Checks**:
- Verify plugin loads correctly
- Test with familiar preset
- Check audio interface connectivity
- Confirm MIDI controller response
- Verify preset loading/saving

**Performance Validation**:
- Test CPU usage with typical settings
- Check for audio glitches
- Verify automation functionality
- Test with your common workflow

### Weekly Maintenance
**System Optimization**:
- Check for plugin updates
- Update audio interface drivers
- Optimize DAW settings
- Clear plugin cache if needed

**Library Management**:
- Organize new presets
- Remove duplicate presets
- Backup custom presets
- Test new sounds thoroughly

### Monthly Maintenance
**Comprehensive Testing**:
- Test all oscillator combinations
- Verify all filter types work correctly
- Check automation of all parameters
- Test MIDI controller mappings

**System Health**:
- Run system diagnostics
- Check hard drive health
- Verify RAM stability
- Update operating system patches

## Backup and Recovery

### Preset Backup Strategy
**Automatic Backup**:
- Export custom presets weekly
- Sync to cloud storage
- Create version history
- Document preset changes

**Manual Backup**:
- Export preset library quarterly
- Store on multiple devices
- Include parameter documentation
- Test backup restoration

### Project Backup
**Project Organization**:
- Use consistent naming conventions
- Include Wasp XT plugin state
- Document custom settings
- Backup project files regularly

**Version Control**:
- Keep multiple project versions
- Document changes between versions
- Maintain rollback capability
- Archive completed projects

## Performance Optimization

### CPU Optimization
**Efficient Usage**:
- Limit concurrent instances
- Use appropriate buffer sizes
- Freeze completed tracks
- Optimize oscillator voice counts

**Settings Optimization**:
- Disable unnecessary effects
- Use moderate unison settings
- Optimize sample rates
- Close background applications

### Memory Management
**RAM Optimization**:
- Clear unused instances
- Minimize preset loading
- Restart DAW periodically
- Monitor memory usage

**Cache Management**:
- Clear plugin cache regularly
- Optimize preset loading
- Minimize temporary files
- Use SSD storage for better performance

## Troubleshooting Guide

### Common Problems and Solutions

#### Audio Issues
**No Sound Output**:
1. Check mixer channel routing
2. Verify plugin is not bypassed
3. Confirm audio interface connections
4. Test with simple preset
5. Check DAW output settings

**Distorted Audio**:
1. Check for clipping in mixer
2. Reduce oscillator levels
3. Lower filter resonance
4. Verify output level settings
5. Check audio interface gain

**High CPU Usage**:
1. Increase buffer size
2. Reduce unison voice count
3. Close other applications
4. Render tracks to audio
5. Check for plugin conflicts

#### MIDI Problems
**No MIDI Input**:
1. Verify MIDI controller connections
2. Check MIDI channel assignments
3. Test with different controller
4. Update MIDI drivers
5. Check DAW MIDI settings

**Parameter Control Issues**:
1. Verify MIDI mapping assignments
2. Check controller ranges
3. Test with simple controls
4. Re-learn MIDI assignments
5. Update controller firmware

#### Plugin Issues
**Plugin Won't Load**:
1. Reinstall plugin
2. Check installation path
3. Verify plugin format compatibility
4. Rescan plugin database
5. Contact technical support

**Preset Loading Errors**:
1. Check file permissions
2. Verify preset format
3. Test with different preset
4. Reset plugin to default
5. Reinstall if persistent

## Advanced Maintenance

### System Optimization

#### Operating System
**Windows Optimization**:
- Disable unnecessary startup programs
- Set power plan to High Performance
- Disable visual effects
- Update system drivers regularly
- Use dedicated audio interface

**macOS Optimization**:
- Disable Dashboard widgets
- Use Activity Monitor to manage resources
- Optimize Energy Saver settings
- Keep software updated
- Use proper disk format (APFS)

#### Audio Interface Setup
**Driver Maintenance**:
- Use latest manufacturer drivers
- Optimize buffer settings
- Enable exclusive mode
- Configure proper sample rate
- Test with different settings

**Connection Management**:
- Use quality cables
- Check for loose connections
- Verify grounding
- Test different ports if available
- Use proper impedance matching

### Plugin-Specific Care

#### Regular Health Checks
**Parameter Testing**:
- Verify all knobs and controls respond
- Test automation for each parameter
- Check preset loading/saving
- Verify MIDI control functionality

**Sound Quality Verification**:
- Test with reference sounds
- Compare with known good presets
- Check for audio artifacts
- Verify stereo imaging
- Test at different volumes

#### Update Management
**Plugin Updates**:
- Check manufacturer website regularly
- Read update notes before updating
- Backup settings before updates
- Test new version thoroughly
- Document any changes

**Compatibility Updates**:
- Keep DAW updated
- Update MIDI controller firmware
- Maintain audio interface drivers
- Update operating system patches

## Professional Practices

### Documentation
**Setting Documentation**:
- Record custom parameter settings
- Document MIDI controller mappings
- Note favorite preset combinations
- Keep troubleshooting logs

**Workflow Documentation**:
- Document efficient processes
- Record successful techniques
- Note system configuration
- Maintain contact list for support

### Planning and Scheduling

#### Maintenance Schedule
**Daily Tasks**:
- [ ] Check plugin loading
- [ ] Test favorite presets
- [ ] Verify audio connections
- [ ] Check MIDI response

**Weekly Tasks**:
- [ ] Check for updates
- [ ] Organize new presets
- [ ] Clean system temp files
- [ ] Test with new sounds

**Monthly Tasks**:
- [ ] Full system backup
- [ ] Update documentation
- [ ] Deep system cleanup
- [ ] Review and optimize settings

#### Upgrade Planning
**Technology Roadmap**:
- Plan hardware upgrades
- Schedule software updates
- Budget for new equipment
- Research new techniques

**Skill Development**:
- Practice new techniques regularly
- Watch tutorials and courses
- Experiment with advanced features
- Connect with user community

## Emergency Procedures

### Performance Recovery
**Live Show Issues**:
1. Switch to backup preset
2. Use minimal settings if glitching
3. Restart audio interface if needed
4. Have backup equipment ready
5. Maintain professional demeanor

**Studio Session Issues**:
1. Save current work immediately
2. Switch to simpler settings
3. Restart DAW if necessary
4. Use backup system if available
5. Document the problem for future prevention

### Data Recovery
**Preset Recovery**:
1. Check backup locations
2. Use auto-recovery features
3. Contact support for corrupted files
4. Re-create lost presets if necessary
5. Implement better backup system

**Project Recovery**:
1. Check auto-save locations
2. Use cloud backup services
3. Restore from version control
4. Contact technical support
5. Prevent future data loss

## Best Practices Summary

### Consistency
- Use consistent naming conventions
- Maintain regular backup schedule
- Follow systematic testing procedures
- Document all changes and decisions

### Proactive Approach
- Test new settings before critical sessions
- Keep system in optimal condition
- Update software regularly
- Plan for potential failures

### Continuous Improvement
- Learn from troubleshooting experiences
- Refine workflows over time
- Stay updated with new developments
- Connect with other users for knowledge sharing
```

---

## FILE: 04-Reference\technical-specifications.md

```markdown
# Wasp XT Technical Specifications

## Audio Engine Architecture

### Core Processing
- **Oscillator Architecture**: Dual analog-modeling oscillators
- **Filter Design**: State-variable filter with ladder emulation
- **Envelope System**: ADSR with additional parameters
- **LFO Section**: Multi-waveform low-frequency oscillators
- **Processing**: 32-bit floating point internal processing

### Oscillator Specifications
**Waveforms Available**:
- Sawtooth
- Square/Pulse
- Triangle
- Sine
- Noise (white/pink)
- Custom/User waveforms (if supported)

**Oscillator Features**:
- **Frequency Range**: 20Hz - 20kHz
- **Detune Range**: ±100 cents
- **Sync Mode**: Hard oscillator sync
- **Ring Modulation**: Built-in ring modulator
- **Sub Oscillator**: One octave below fundamental

### Filter Characteristics
**Filter Types**:
- Low-pass (24dB/oct)
- High-pass (24dB/oct)
- Band-pass (12dB/oct)
- Notch (12dB/oct)

**Filter Parameters**:
- **Cutoff Frequency**: 20Hz - 20kHz
- **Resonance**: 0 - Self-oscillation
- **Key Tracking**: 0 - 100%
- **Envelope Amount**: 0 - 100%
- **Velocity Sensitivity**: 0 - 100%

## Modulation System

### LFO Specifications
**Waveform Options**:
- Sine
- Triangle
- Sawtooth (up/down)
- Square
- Sample & Hold
- Random
- Custom waveforms

**LFO Parameters**:
- **Rate**: 0.1Hz - 100Hz
- **Depth**: 0 - 100%
- **Phase**: 0 - 360°
- **Sync**: Host MIDI sync option
- **Retrigger**: Phase reset on note-on

### Envelope Generator
**ADSR Parameters**:
- **Attack**: 0 - 10 seconds
- **Decay**: 0 - 10 seconds
- **Sustain**: 0 - 100%
- **Release**: 0 - 10 seconds

**Advanced Envelope Features**:
- **Velocity Scaling**: Envelope responds to velocity
- **Key Scaling**: Envelope varies with keyboard range
- **Delay**: Envelope start delay
- **Loop Modes**: Loop and sustain options

## MIDI Implementation

### MIDI Controller Numbers
- **CC#1**: Modulation → LFO depth (default)
- **CC#2**: Breath Control → Filter resonance
- **CC#4**: Foot Controller → Filter cutoff
- **CC#5**: Portamento Time → Glide time
- **CC#7**: Volume → Main output level
- **CC#10**: Pan → Stereo position
- **CC#11**: Expression → Envelope amount
- **CC#74**: Filter Cutoff → Filter frequency
- **CC#71**: Filter Resonance → Filter Q
- **CC#73**: Attack Time → Envelope attack
- **CC#72**: Release Time → Envelope release
- **CC#75**: Filter Q → Alternate resonance control

### Note Range and Scaling
**Keyboard Range**:
- **MIDI Range**: C-2 to G8 (notes 0-127)
- **Velocity Response**: 1-127 with customizable curves
- **Aftertouch**: Channel and polyphonic support
- **Pitch Bend**: ±12 semitones (configurable)

## Effects Section

### Built-in Effects
**Delay Effects**:
- **Delay Time**: 1ms - 2 seconds
- **Feedback**: 0 - 95%
- **Mix**: 0 - 100%
- **Sync**: Host tempo sync option

**Chorus Effects**:
- **Rate**: 0.1Hz - 20Hz
- **Depth**: 0 - 100%
- **Mix**: 0 - 100%
- **Voices**: 2-4 voice chorus

**Distortion/Saturation**:
- **Drive Amount**: 0 - 100%
- **Tone Control**: High-frequency rolloff
- **Mix**: 0 - 100% (parallel saturation)

**Reverb**:
- **Room Size**: Small - Hall
- **Decay Time**: 0.5 - 10 seconds
- **Damping**: High-frequency damping control
- **Mix**: 0 - 100%

## Performance Specifications

### Audio Quality
**Sample Rate Support**:
- 44.1kHz, 48kHz, 88.2kHz, 96kHz, 192kHz
- **Internal Processing**: Up to 192kHz
- **Oversampling**: 2x, 4x, 8x options

**Bit Depth**:
- **Input**: 16, 24, 32-bit integer, 32-bit float
- **Processing**: 32-bit float throughout
- **Output**: Match host bit depth

### CPU Performance
**Resource Usage**:
- **Single Instance**: 1-5% of one core (varies with settings)
- **Multiple Instances**: Linear scaling
- **Heavy Settings**: Up to 15% with extreme unison
- **Voice Count**: Mono (1 voice), Poly (configurable, typically 8-16 voices)

### Latency
**Processing Delay**:
- **Minimum**: 0-2 samples (native processing)
- **Total Latency**: Host buffer dependent
- **Lookahead**: Optional 0-64 samples for filter
- **Compensation**: Automatic PDC support

## Platform Specifications

### Windows Support
**System Requirements**:
- **OS**: Windows 7 SP1 - Windows 11
- **CPU**: Intel i3 or AMD Ryzen 3 minimum
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB available space

**Plugin Formats**:
- **VST2**: Compatible with most DAWs
- **VST3**: Enhanced performance and integration
- **AAX**: Pro Tools compatibility (if available)

### macOS Support
**System Requirements**:
- **OS**: macOS 10.9 - macOS 14+
- **CPU**: Intel Core i5 or Apple Silicon M1/M2
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB available space

**Plugin Formats**:
- **VST2**: Universal compatibility
- **VST3**: Modern standard
- **AU**: macOS native format
- **AAX**: Pro Tools support

### Linux Support
**Compatibility**:
- **Status**: Via Wine or similar compatibility layer
- **Performance**: Variable depending on Wine version
- **Stability**: Generally stable with recent Wine versions
- **Recommendation**: Windows or macOS preferred

## Physical Specifications (Hardware Versions)

### Build Quality
**Construction**:
- **Chassis**: Metal or high-quality plastic
- **Knobs**: Rotary encoders with detents
- **Display**: LED or LCD screen
- **Connectivity**: Standard MIDI and audio connectors

**Dimensions**:
- **Rack Mount**: 1U or 2U rack space
- **Desktop**: Compact footprint
- **Weight**: 1-3kg depending on construction
- **Power**: External power adapter (12V typical)

### Environmental Ratings
**Operating Conditions**:
- **Temperature**: 0°C to 40°C (32°F to 104°F)
- **Humidity**: 10% to 90% RH (non-condensing)
- **Altitude**: Sea level to 3000 meters
- **Power Requirements**: 100-240V AC, 50/60Hz

## Limitations and Constraints

### Technical Limitations
**Known Issues**:
- **Maximum Voices**: Limited polyphony (typically 8-16 voices)
- **CPU Scaling**: Linear increase with each instance
- **Memory**: Limited to single process (32-bit versions)
- **Filter Precision**: Analog emulation limitations

**Design Constraints**:
- **Monophonic Mode**: Single note at a time
- **Polyphony Limits**: Voice stealing when exceeding limits
- **MIDI Resolution**: Standard 7-bit resolution
- **Parameter Resolution**: Limited by internal precision

### Performance Constraints
**CPU Management**:
- **Buffer Dependency**: Performance affected by buffer size
- **Sample Rate Impact**: Higher rates increase CPU usage
- **Voice Count**: More voices = more processing
- **Effects Processing**: Built-in effects add CPU load

**Memory Usage**:
- **Base RAM**: 50-150MB per instance
- **Preset Storage**: 1-2MB per 100 presets
- **Cache Memory**: 10-50MB for performance
- **Streaming**: No audio streaming required

## Compatibility Matrix

### DAW Support
| DAW | VST2 | VST3 | AU | AAX | Notes |
|------|-------|--------|----|------|-------|
| FL Studio | ✓ | ✓ | N/A | N/A | Native integration |
| Ableton Live | ✓ | ✓ | ✓ | N/A | Full support |
| Logic Pro | N/A | N/A | ✓ | N/A | AU version |
| Pro Tools | ✓ | ✓ | N/A | ✓ | AAX version |
| Cubase | ✓ | ✓ | N/A | N/A | Full VST support |
| Reaper | ✓ | ✓ | N/A | N/A | Excellent compatibility |

### System Requirements

#### Minimum Requirements
- **CPU**: Intel i3 or AMD Ryzen 3
- **RAM**: 4GB DDR3
- **OS**: Windows 7 SP1 or macOS 10.9
- **Audio Interface**: ASIO/Core Audio device

#### Recommended Requirements
- **CPU**: Intel i7 or AMD Ryzen 7
- **RAM**: 16GB DDR4/DDR5
- **OS**: Windows 10/11 or macOS 12+
- **Audio Interface**: Professional interface with low latency

#### Professional Requirements
- **CPU**: Intel i9 or AMD Ryzen 9
- **RAM**: 32GB+ high-speed memory
- **OS**: Latest OS versions
- **Storage**: SSD with adequate space
- **Audio Interface**: Professional-grade interface
```

---

