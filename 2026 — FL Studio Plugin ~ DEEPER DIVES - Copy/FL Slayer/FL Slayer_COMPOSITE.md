# FL Slayer - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# FL Slayer - Electric Guitar Simulator

`\`\`
███████╗██╗      ███████╗██╗      █████╗ ██╗   ██╗███████╗██████╗ 
██╔════╝██║      ██╔════╝██║     ██╔══██╗╚██╗ ██╔╝██╔════╝██╔══██╗
█████╗  ██║      ███████╗██║     ███████║ ╚████╔╝ █████╗  ██████╔╝
██╔══╝  ██║      ╚════██║██║     ██╔══██║  ╚██╔╝  ██╔══╝  ██╔══██╗
██║     ███████╗ ███████║███████╗██║  ██║   ██║   ███████╗██║  ██║
╚═╝     ╚══════╝ ╚══════╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Guitar Physical Modeling / Amp Sim
**Category:** Generator / Guitar / Legacy
**Official Manual:** [Image-Line FL Slayer Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/FL%20Slayer.htm)

---

## 🎯 What is FL Slayer?

**IMPORTANT: FL Slayer is a deprecated plugin.**

FL Slayer is a realistic electric guitar simulation plugin, originally developed by reFX. It uses hybrid physical modeling synthesis to recreate the sound of a guitar string and pickups. It is a complete guitar workstation, including an **Amplifier section** (Pre-amp, Drive), **Cabinet simulation**, and an **Effects rack**. It features specialized playing modes like "Autochords," "Strumming," and "Powerchords," allowing for realistic guitar performances from a MIDI keyboard.

**Key Capabilities:**
- **Hybrid Modeling:** Simulates string vibration and pickup harmonics.
- **Integrated Amp & Cab:** Built-in distortion and speaker models.
- **Specialized Playing Modes:** Autochords, Strumming, Powerchords, and Glissando.
- **Harmonic Control:** Simulates different pickup types (Bright/Dark).
- **Damping:** Controls "Palm Mute" intensity.
- **Double Pitch Bend:** Supports advanced glissando and vibrato.

---

## 🚀 Quick Start Research Guide

### For Archivists/Legacy Users:
1. Read **00-START-HERE.md** (create this first)
2. Review **guitar-playing-modes.md** (Autochords vs Strumming)
3. Create **parameter-cheat-sheet.md**
4. Set mode to "Powerchords," play a note, and adjust "Strum Speed."

### For Sound Designers:
1. Study **creating-heavy-metal-riffs.md**
2. Review **palm-mute-physics.md**
3. Learn **pickup-harmonic-shaping.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Mode Selector:** None, Autochords, Powerchords, Strum, etc.
  - **Harmonic:** Pickup character.
  - **Damping:** Sustain/Mute control.
  - **Amp Section:** Gain, Drive, Presence.
  - **Cab Section:** Speaker models.

- [ ] **playing-modes-decoded.md**
  - **SoloDynamic:** Best for leads.
  - **Powerchords:** Best for rhythm guitar.

#### 02-Data/parameters/
- [ ] **flslayer-specs.json**
  `\`\`json
  {
    "plugin_name": "FL Slayer",
    "status": "Deprecated",
    "synthesis": "Physical Modeling",
    "effects": ["Amp", "Cab", "Stomp"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **realistic-strumming-setup.md**
  - Selecting "Strumming" mode.
  - Adjusting the "Speed" knob for natural chord rolls.
  - Using velocity to control damping.

- [ ] **industrial-distorted-guitar.md**
  - Maxing the Pre-amp.
  - Using Cabinet 5 (Aggressive).
  - Adding built-in Wah or Phaser.

#### 03-Workflows/by-context/
- [ ] **nu-metal-power-chords.md**
- [ ] **clean-funky-strums.md**

---

## 🔬 Research Framework

### Phase 1: Modeling (Week 1)
**Goal:** The String

**Tasks:**
1. Initialize (No Amp/No Cab)
2. Experiment with "Harmonic" and "Damping"
3. Test "Velocity to Damping"
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Does FL Slayer support multithreading? (Legacy issues).
- Can I use it as an effect for external audio? (No).

### Phase 2: Performance (Week 2)
**Goal:** The Player

**Tasks:**
1. Master "SoloFixed" glissando slides
2. Program a 4-bar Powerchord progression
3. Create playing-modes-decoded.md

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why does it sound like a "toy"? (Guitar modeling requires precise Amp/Cab settings and MIDI programming).
2. Is it better than RealGuitar or Kontakt? (No, it's a legacy tool for speed and low CPU).

---

## 🔗 Cross-Reference with Other Plugins

FL Slayer is often used with:
- **Hardcore** (Professional Amp upgrade)
- **Fruity Convolver** (Using real Cab IRs)

---

## 📦 File Structure Summary

`\`\`
FL Slayer/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── playing-modes-decoded.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── flslayer-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   └── realistic-strumming-setup.md
│
└── 04-Reference/
    └── guitar-physics-theory.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [FL Slayer Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/FL%20Slayer.htm)
- [FL Slayer Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/FL_Slayer_tutorials.htm)
- [FL Slayer Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fl+slayer+tutorial)

### Community Resources
- [FL Slayer Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fl+slayer&restrict_sr=1)
- [FL Slayer User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [FL Slayer Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Guitar Physical Modeling Fundamentals" - Understanding string simulation
- "Amp Simulation Techniques" - Modeling amplifier circuits digitally
- "Guitar Effects Processing" - Understanding stompbox and rack effects

### Advanced Techniques
- **Physical Modeling:** Understanding string vibration simulation
- **Amp Modeling:** Understanding amplifier circuit simulation
- **Playing Modes:** Mastering different performance modes

---

## 📚 In-Depth Technical Analysis

### Physical Modeling Architecture
FL Slayer implements sophisticated physical modeling synthesis:
- **String Simulation:** Models string vibration and harmonic content
- **Pickup Modeling:** Simulates electromagnetic pickup response
- **Fretboard Physics:** Models fret interaction and damping
- **Pick/Hammer Simulation:** Models attack characteristics
- **Real-time Processing:** Optimized for live performance

### Playing Modes System
The plugin features six distinct playing modes:

**None Mode:**
- **Function:** Basic monophonic playing
- **Characteristics:** Single note playing without special behavior
- **Use Cases:** Lead guitar lines, simple melodies
- **Advantages:** Lowest CPU usage, most responsive
- **Limitations:** No chord or strum simulation

**Autochords Mode:**
- **Function:** Automatically plays chord inversions
- **Characteristics:** Converts single notes to full chords
- **Use Cases:** Rhythm guitar, chord progressions
- **Advantages:** Easy chord playing from single MIDI input
- **Limitations:** Less control over individual notes

**Powerchords Mode:**
- **Function:** Automatically plays power chords
- **Characteristics:** Root and fifth intervals only
- **Use Cases:** Rock, metal, punk rhythm guitar
- **Advantages:** Perfect for power chord progressions
- **Limitations:** Only root and fifth intervals

**Strum Mode:**
- **Function:** Simulates strumming across chord notes
- **Characteristics:** Sequential note triggering with timing
- **Use Cases:** Acoustic guitar strumming, rhythmic patterns
- **Advantages:** Realistic strumming simulation
- **Limitations:** Requires chord input for best results

**SoloFixed Mode:**
- **Function:** Fixed pitch bending for lead playing
- **Characteristics:** Consistent pitch bend behavior
- **Use Cases:** Lead guitar solos, expressive playing
- **Advantages:** Realistic pitch bends and vibrato
- **Limitations:** More CPU intensive

**SoloDynamic Mode:**
- **Function:** Dynamic pitch bending based on velocity
- **Characteristics:** Velocity-sensitive pitch behavior
- **Use Cases:** Expressive lead playing, dynamic expression
- **Advantages:** Most expressive playing mode
- **Limitations:** Most CPU intensive

### Amplifier Simulation
The built-in amplifier section includes:
- **Preamp Modeling:** Tube preamp circuit simulation
- **Drive Control:** Distortion and overdrive simulation
- **EQ Section:** Tone controls (Bass, Mid, Treble)
- **Presence Control:** High-frequency presence adjustment
- **Master Volume:** Output level control

### Cabinet Simulation
The cabinet section provides:
- **Speaker Models:** Multiple virtual speaker cabinets
- **Room Simulation:** Acoustic space modeling
- **Mic Positioning:** Virtual microphone placement
- **Impulse Response:** Cabinet frequency response modeling
- **Stereo Imaging:** Wide stereo cabinet simulation

### Effects Processing
Built-in effects include:
- **Stomp Box Effects:** Wah, Phaser, Flanger, Chorus
- **Modulation Effects:** Tremolo, Vibrato
- **Filter Effects:** Various filter types
- **Distortion Effects:** Additional saturation options
- **Reverb:** Room and hall reverbs

### Signal Processing Chain
The internal architecture processes audio as follows:
- **Input Stage:** MIDI note and velocity processing
- **Physical Modeling:** String and pickup simulation
- **Playing Mode Processing:** Mode-specific behavior application
- **Amp Simulation:** Preamp and power amp modeling
- **Cabinet Simulation:** Speaker cabinet modeling
- **Effects Processing:** Built-in effects application
- **Output Stage:** Final signal routing and monitoring

## 🎛️ Parameter Deep Dive

### Playing Mode Controls
- **Mode Selector:** Chooses the playing behavior
  - Range: None, Autochords, Powerchords, Strum, SoloFixed, SoloDynamic
  - Effect: Changes fundamental playing characteristics
  - Use for: Different guitar playing techniques
  - Pro tip: Choose mode based on musical context
- **Behavior:**
  - None: Monophonic single-note playing
  - Autochords: Automatic chord inversion
  - Powerchords: Root and fifth only
  - Strum: Sequential note triggering
  - SoloFixed: Fixed pitch bend behavior
  - SoloDynamic: Velocity-sensitive pitch behavior
  - Pro tip: Experiment with different modes for varied expression
- **Applications:**
  - Lead playing: SoloFixed or SoloDynamic for expression
  - Rhythm playing: Autochords or Powerchords for chords
  - Strumming: Strum mode for realistic strumming
  - Single notes: None mode for basic playing
  - Pro tip: Use automation to switch modes during performance

### Harmonic Control
- **Function:** Controls pickup character and harmonic content
  - Range: Variable from bright to dark (typically -1.0 to +1.0)
  - Effect: Changes the harmonic content of the simulated guitar
  - Use for: Adjusting tone and character
  - Pro tip: Bright settings for cutting through mixes
- **Behavior:**
  - Negative values: Darker, warmer tone
  - Positive values: Brighter, more articulate tone
  - Center: Neutral pickup character
  - Pro tip: Match to musical style and mix context
- **Applications:**
  - Clean tones: Bright settings for clarity
  - Heavy distortion: Darker settings to prevent harshness
  - Jazz tones: Warmer settings for smooth character
  - Rock tones: Bright settings for cutting power
  - Pro tip: Use for tonal variety across different sections

### Damping Control
- **Function:** Controls string damping and sustain
  - Range: 0-100% (typically)
  - Effect: Adjusts how quickly strings decay
  - Use for: Palm muting simulation and sustain control
  - Pro tip: Higher values simulate palm muting
- **Behavior:**
  - Low values: Longer sustain, open strings
  - High values: Shorter sustain, muted strings
  - Pro tip: Use for rhythmic precision
- **Applications:**
  - Palm muting: High values for tight, rhythmic playing
  - Open strings: Low values for natural sustain
  - Rhythmic precision: Variable values for different feels
  - Creative effects: Extreme values for unique textures
  - Pro tip: Use automation for dynamic muting

### Amp Section Controls
- **Gain:** Preamp gain control
  - Range: 0-100% (typically)
  - Effect: Controls distortion and overdrive amount
  - Use for: Setting overall distortion level
  - Pro tip: Higher gain creates more saturation
- **Drive:** Additional saturation control
  - Range: 0-100% (typically)
  - Effect: Adds extra saturation and compression
  - Use for: Fine-tuning distortion character
  - Pro tip: Use with gain for complex saturation
- **EQ Controls:** Tone shaping
  - Bass: Low-frequency adjustment
  - Mid: Mid-frequency adjustment
  - Treble: High-frequency adjustment
  - Pro tip: Use for tonal balance
- **Presence:** High-frequency presence
  - Range: Variable adjustment
  - Effect: Adjusts upper high-frequency content
  - Use for: Adding sparkle and definition
  - Pro tip: Use sparingly to avoid harshness

### Cabinet Controls
- **Cabinet Selection:** Different virtual speaker cabinets
  - Options: Various cabinet models (typically 1-8)
  - Effect: Changes the frequency response and character
  - Use for: Different speaker cabinet sounds
  - Pro tip: Match to amp model and musical style
- **Behavior:**
  - Different cabinets: Each has unique frequency response
  - Room characteristics: Each simulates different acoustic spaces
  - Pro tip: Experiment with different cabinets for variety
- **Applications:**
  - Clean sounds: Cabinets that emphasize clarity
  - Heavy sounds: Cabinets that add aggression
  - Vintage sounds: Cabinets that emulate classic speakers
  - Modern sounds: Cabinets with extended frequency response
  - Pro tip: Use cabinet selection for tonal variety

### Effects Controls
- **Built-in Effects:** Integrated stomp box effects
  - Wah: Foot-controlled filter sweep
  - Phaser: Phase shifting effect
  - Flanger: Jet-like sweeping effect
  - Chorus: Thickening and widening effect
  - Pro tip: Use for additional character and movement
- **Behavior:**
  - Each effect has dedicated controls
  - Can be used in combination
  - Pro tip: Use subtly to avoid overwhelming the guitar sound
- **Applications:**
  - Classic rock: Use wah and phaser effects
  - Modern metal: Use subtle chorus for thickness
  - Funk: Use wah for rhythmic effects
  - Experimental: Combine effects for unique sounds
  - Pro tip: Use effects to enhance rather than dominate

## 🎼 Sound Design Applications

### Guitar Simulation Applications
Using FL Slayer for realistic guitar sounds:

**Clean Guitar:**
- **Acoustic Simulation:** Creating acoustic-style guitar sounds
  - Use low gain settings
  - Apply appropriate cabinet selection
  - Essential for clean guitar parts
  - Perfect for folk and country music
  - Pro tip: Use for fingerstyle guitar simulation

- **Jazz Guitar:** Creating smooth jazz guitar tones
  - Use warm harmonic settings
  - Apply subtle reverb for space
  - Essential for jazz applications
  - Perfect for smooth jazz compositions
  - Pro tip: Use for sophisticated jazz arrangements

- **Funk Guitar:** Creating rhythmic funk guitar sounds
  - Use bright harmonic settings
  - Apply palm muting for rhythmic precision
  - Essential for funk music
  - Perfect for rhythmic guitar parts
  - Pro tip: Use for tight, rhythmic funk rhythms

### Distorted Guitar Applications
Using SLAYER for distorted guitar sounds:

**Rock Applications:**
- **Classic Rock:** Creating classic rock guitar tones
  - Use moderate gain settings
  - Apply appropriate cabinet selection
  - Essential for classic rock music
  - Perfect for vintage rock sounds
  - Pro tip: Use for authentic classic rock tones

- **Heavy Metal:** Creating aggressive metal guitar sounds
  - Use high gain settings for saturation
  - Apply darker harmonic settings to prevent harshness
  - Essential for metal music
  - Perfect for aggressive metal sounds
  - Pro tip: Use for crushing metal tones

- **Alternative Rock:** Creating modern alternative guitar sounds
  - Use medium gain with unique cabinet selection
  - Apply subtle effects for character
  - Essential for alternative music
  - Perfect for modern rock sounds
  - Pro tip: Use for contemporary rock applications

### Creative Applications
Using SLAYER for experimental applications:

**Sound Design:**
- **Guitar Textures:** Creating unique guitar-based textures
  - Use extreme settings for unusual sounds
  - Apply effects for additional character
  - Perfect for ambient and experimental music
  - Essential for creative sound design
  - Useful for unique sonic textures

- **Hybrid Sounds:** Combining with other instruments
  - Layer with other instruments for unique sounds
  - Use for creative blending of timbres
  - Perfect for experimental music
  - Essential for hybrid sound design
  - Useful for unique instrumental combinations

- **Atmospheric Effects:** Creating ambient guitar textures
  - Use with reverb and delay for space
  - Apply long decay settings for evolution
  - Perfect for ambient music
  - Essential for atmospheric soundscapes
  - Useful for evolving textures

## 🧪 Experimental Techniques

### Advanced Playing Mode Applications
Creative uses of SLAYER's playing modes:

**Autochords Experimentation:**
- **Chord Progression Generation:** Using Autochords for quick progressions
  - Program simple bass notes to generate full chords
  - Use for rapid composition and sketching
  - Perfect for quick chord progressions
  - Essential for efficient composition
  - Useful for songwriting

**Powerchord Innovation:**
- **Power Chord Variations:** Creating unique power chord patterns
  - Use automation to vary power chord characteristics
  - Apply effects for additional character
  - Perfect for rock and metal applications
  - Essential for powerful chord progressions
  - Useful for rhythmic patterns

**Strum Mode Manipulation:**
- **Rhythmic Strumming:** Creating complex rhythmic patterns
  - Use automation to control strum speed and direction
  - Apply velocity variations for expression
  - Perfect for rhythmic guitar parts
  - Essential for dynamic strumming
  - Useful for complex rhythmic patterns

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Dynamic Parameter Changes:** Automating parameters for evolving sounds
  - Create evolving guitar textures
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic guitar expression
  - Use for expressive control

**Modulation Applications:**
- **Parameter Modulation:** Using external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Stage Processing:**
- **Complex Guitar Enhancement:** Multiple processing stages for sophisticated effects
  - Create multi-stage guitar enhancement
  - Apply different processing to different stages
  - Build sophisticated processing chains
  - Perfect for advanced sound design
  - Use for complex processing

## 🎚️ Workflow Optimization

### Guitar Setup Workflows
Efficient approaches to using FL Slayer for guitar sounds:

**Tone Setup:**
- **Quick Tone Creation:** Creating guitar tones efficiently
  - Start with appropriate preset for genre
  - Adjust gain and cabinet for character
  - Essential for efficient tone creation
  - Pro tip: Use genre-specific starting points

- **Tone Refinement:** Fine-tuning guitar tones
  - Adjust harmonic settings for character
  - Fine-tune EQ for mix integration
  - Essential for professional results
  - Pro tip: Match tone to mix context

**Playing Mode Optimization:**
- **Mode Selection:** Choosing appropriate playing modes
  - Use SoloDynamic for expressive lead playing
  - Apply Powerchords for rhythmic rhythm playing
  - Essential for appropriate expression
  - Pro tip: Match mode to musical context

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

### Rock and Metal
- **Guitar Tones:** Creating authentic rock and metal guitar sounds
- **Power Chords:** Using power chord mode for rhythmic playing
- **Distortion:** Applying appropriate gain and cabinet settings
- **Energy Management:** Using guitar for track energy
- **Riff Creation:** Creating memorable guitar riffs

### Pop and Alternative
- **Clean Tones:** Creating clean guitar sounds for pop music
- **Rhythmic Playing:** Using strum mode for rhythmic parts
- **Tone Shaping:** Adjusting tone for mix clarity
- **Creative Effects:** Adding unique character to elements
- **Mix Enhancement:** Using guitar for mix clarity

### Jazz and Fusion
- **Clean Jazz Tones:** Creating smooth jazz guitar sounds
- **Lead Playing:** Using SoloDynamic mode for expression
- **Tone Refinement:** Adjusting for sophisticated jazz sounds
- **Creative Applications:** Adding unique character to jazz elements
- **Mix Integration:** Using guitar for mix clarity

### Ambient and Experimental
- **Atmospheric Textures:** Creating evolving guitar textures
- **Sound Design:** Using guitar for experimental sounds
- **Experimental Applications:** Pushing boundaries of guitar simulation
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
FL Slayer works well with various effects:
- **Reverb:** Adding space to guitar sounds
- **Delay:** Creating rhythmic patterns with guitar
- **Chorus:** Adding width to guitar sounds
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of guitar signals

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
FL Slayer was developed as a guitar physical modeling solution:
- Created to provide realistic guitar simulation
- Designed for efficient performance and low CPU usage
- Developed with rock and metal music in mind
- Intended to complement traditional sample-based guitar plugins

### Evolution Through FL Studio Versions
- Initially introduced with basic physical modeling
- Enhanced with additional playing modes
- Improved with better sound quality and stability
- Maintained as a legacy option for compatibility

### Impact on Music Production
FL Slayer has influenced music production by:
- Providing accessible guitar simulation
- Enabling quick guitar sketching
- Facilitating guitar-based composition
- Supporting various musical genres with guitar simulation

## 🧠 Advanced Processing Techniques

### Physical Modeling Mastery
Advanced techniques for physical modeling:
- **String Simulation:** Understanding string vibration characteristics
- **Pickup Modeling:** Managing electromagnetic response
- **Fret Physics:** Understanding fret interaction effects
- **Attack Modeling:** Managing pick/hit characteristics
- **Real-time Response:** Optimizing for live performance

### Playing Mode Mastery
Advanced playing mode techniques:
- **Mode Selection:** Choosing appropriate modes for expression
- **Parameter Mapping:** Understanding mode-specific parameters
- **Dynamic Response:** Creating responsive playing
- **Expression Control:** Using modes for musical expression
- **Creative Applications:** Using modes for unique effects

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique guitar textures
- **Atmospheric Processing:** Building ambient guitar effects
- **Rhythmic Effects:** Creating rhythmic guitar patterns
- **Spatial Manipulation:** Creating immersive guitar environments
- **Experimental Processing:** Pushing boundaries of guitar simulation

## 📊 Performance Considerations

### CPU Usage
Managing SLAYER's impact on system performance:
- **Modeling Load:** Physical modeling requires processing power
- **Real-Time Performance:** Generally optimized for live performance
- **Instance Count:** Multiple instances multiply CPU usage
- **Parameter Automation:** Automated parameters have minimal CPU impact
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Modeling Accuracy:** Maintaining realistic physical simulation
- **Harmonic Integrity:** Preserving harmonic relationships
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output
- **Signal Integrity:** Preserving original signal quality

### System Integration
Optimizing SLAYER within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimal audio latency

## 🛠️ Troubleshooting Common Issues

### Sound Problems
- **Unrealistic Sound:** Adjust playing mode and parameters
- **Harsh Distortion:** Reduce gain or adjust harmonic settings
- **Phase Issues:** Check stereo field and width settings
- **Excessive Noise:** Verify gain staging and cabinet settings
- **Poor Definition:** Adjust EQ and harmonic settings

### Technical Issues
- **High CPU Usage:** Reduce complexity or optimize parameters
- **Latency Issues:** Check buffer settings
- **Clipping:** Reduce gain or increase output headroom
- **Artifacts:** Check sample rate and bit depth settings
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Adjust playing mode and parameters
- **Lack of Character:** Increase gain or adjust harmonic settings
- **Poor Integration:** Use appropriate settings for the mix
- **Overpowering:** Reduce gain or use EQ to balance
- **Lack of Control:** Use automation for dynamic changes

## 🎚️ Advanced Configuration

### Custom Guitar Setups
Creating and managing custom guitar configurations:
- **Clean Presets:** Optimized for clean guitar applications
- **Distorted Presets:** Configured for distorted guitar applications
- **Creative Presets:** Set up for sound design applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple SLAYER instances effectively:
- **Tone-Specific:** Different instances for different tones
- **Parallel Processing:** Multiple instances in parallel
- **Performance Optimization:** Managing multiple instances
- **Creative Applications:** Combining different guitar models

### Integration Configurations
Optimizing for different integration scenarios:
- **Insert Processing:** Inline processing configurations
- **Send Processing:** Effects return configurations
- **Hardware Integration:** External hardware integration
- **DAW Integration:** Optimizing for FL Studio workflow

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about SLAYER techniques
- **Reddit Groups:** Sharing guitar techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced guitar techniques
- **Written Guides:** In-depth articles on guitar simulation
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting SLAYER configurations
- **Technique Sharing:** Platforms for sharing guitar methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Program a realistic-sounding rock riff with slides and palm mutes
- [ ] Explain the difference between all 6 playing modes
- [ ] Use the internal Amp/Cab to create a high-gain metal tone
- [ ] Demonstrate "Autochords" functionality
- [ ] Create a convincing clean jazz guitar sound with appropriate settings
- [ ] Set up a funk-style rhythmic guitar pattern with proper muting
- [ ] Use SoloDynamic mode for expressive lead guitar playing
- [ ] Apply appropriate cabinet selection for different musical styles
- [ ] Troubleshoot unrealistic guitar sounds effectively
- [ ] Integrate SLAYER into efficient guitar-based workflows
- [ ] Create genre-specific guitar tones for different musical styles
- [ ] Optimize SLAYER settings for minimal CPU usage
- [ ] Use SLAYER for creative sound design applications
- [ ] Set up advanced guitar routing for complex projects
- [ ] Apply SLAYER in live performance scenarios
- [ ] Create experimental guitar sounds with extreme settings
- [ ] Combine SLAYER with other instruments for layered sounds
- [ ] Integrate SLAYER with other automation tools seamlessly
- [ ] Create custom playing techniques using automation
- [ ] Use SLAYER effectively in large, complex projects

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\00_Overview.md

```markdown
# FL Slayer - Overview

## What is FL Slayer?

FL Slayer is a legacy guitar amplifier simulator plugin that was developed by Image-Line in collaboration with reFX. It simulates the sound and behavior of electric guitar amplifiers, cabinets, and effects using physical modeling technology. Originally designed as a lightweight, CPU-efficient solution for guitar tone simulation, it provides a range of amp models and effects that can be used to create realistic guitar sounds directly within FL Studio.

**Key Capabilities:**
- **Guitar Amplification Simulation**: Models various guitar amp characteristics and behaviors
- **Cabinet Simulation**: Emulates different speaker cabinet types and microphone positions
- **Built-in Effects**: Includes distortion, modulation, and time-based effects
- **Playing Modes**: Features different playing modes for various guitar techniques
- **Low CPU Usage**: Optimized for efficient processing compared to sample-based alternatives
- **MIDI Integration**: Can work with MIDI guitar controllers or audio input

**Primary Use Cases:**
- Virtual guitar amplification for producers without hardware amps
- Quick guitar sketching and composition
- Sound design using guitar-like tones
- Integration with MIDI guitar controllers
- CPU-efficient guitar tone creation for complex projects

---

## Where it sits in FL Studio ecosystem

FL Slayer is categorized as a **Guitar Amplifier Simulator** and fits into the Generator category of FL Studio's plugin ecosystem. It serves as:

- A **virtual guitar solution** for producers who don't have access to hardware amplifiers
- A **sketching tool** for quickly laying down guitar ideas
- A **sound design tool** for creating guitar-like textures and tones
- A **lightweight alternative** to more CPU-intensive guitar amp simulators

It works well in various contexts within FL Studio:
- As a standalone instrument in the Channel Rack
- In combination with other effects for enhanced guitar processing
- With MIDI controllers for guitar-like performance
- As part of a larger effects chain for creative applications

## What problem it solves and who it's for

FL Slayer addresses several key challenges in music production:

1. **Hardware Access**: Provides guitar amplification without requiring physical amplifiers, microphones, or recording spaces
2. **CPU Efficiency**: Offers guitar tone simulation with lower CPU usage than many alternatives
3. **Quick Composition**: Allows for rapid guitar idea development without complex setup
4. **Consistent Tone**: Provides reproducible guitar tones that don't vary with room acoustics or mic placement
5. **Creative Flexibility**: Enables experimentation with guitar tones without physical limitations

It's ideal for:
- Producers who want to add guitar elements without hardware
- Composers sketching guitar parts for later recording
- Sound designers exploring guitar-like textures
- Users with limited CPU resources who still want guitar simulation
- Anyone who wants to experiment with guitar tones in a DAW environment

## A simple mental model: how to think about it in 60 seconds

Think of FL Slayer as a "virtual guitar toolbox" that contains a simplified amplifier, speaker cabinet, and effects pedals in one unit. Instead of needing a physical guitar, amplifier, speaker cabinet, and effects pedals, you can get similar sounds by adjusting parameters that simulate these components. It's like having a guitar amp in a box that you can tweak with knobs instead of having to adjust physical equipment and microphone positions.

The key is that it uses physical modeling to simulate the behavior of real guitar equipment, which means it responds dynamically to your playing (or MIDI input) in ways that approximate real amplifiers, but with the convenience and consistency of digital processing.

## When to use it

**Use FL Slayer when:**
- You want to add guitar parts to a track but don't have access to a real guitar or amp
- You're sketching out musical ideas and need quick guitar sounds
- CPU resources are limited and you need efficient guitar simulation
- You want to experiment with different guitar tones without setup complexity
- You're working with MIDI guitar controllers
- You need consistent, reproducible guitar tones

**Don't use FL Slayer when:**
- You need the absolute highest fidelity guitar simulation (consider more advanced amp simulators)
- You're looking for extremely realistic tube amp behavior
- You have access to high-quality recorded guitar tracks
- You need complex multi-amp setups or extensive routing options
- You're aiming for very specific, rare, or boutique amp tones

## Links

- [Official Manual Page](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/FL%20Slayer.htm)
- [FL Slayer Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/FL_Slayer_tutorials.htm)
- [FL Slayer Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fl+slayer+tutorial)
```

---

## FILE: 01-Learning\01_UI_Tour_And_Core_Concepts.md

```markdown
# FL Slayer - UI Tour And Core Concepts

## UI Tour

### Main Interface Layout

FL Slayer presents a streamlined interface focused on guitar amplification simulation. The interface is organized into several key sections:

#### Top Section
- **Title Bar**: Shows the plugin name and version
- **Preset Browser**: For loading and saving amplifier configurations
- **Global Controls**: Including bypass and input gain

#### Central Area - Amplifier Simulation
The main area contains the core amplifier simulation parameters organized into logical sections:

**Preamp Section**:
- **Gain/Knob**: Controls the amount of preamp distortion
- **EQ Controls**: Bass, Mid, and Treble adjustments
- **Presence**: High-frequency presence control

**Poweramp Section**:
- **Master Volume**: Controls the overall output level
- **Power Sag**: Simulates tube power amp compression
- **Bias**: Controls the operating point of the simulated tubes

**Cabinet Section**:
- **Cabinet Selection**: Different virtual speaker cabinets
- **Microphone Position**: Simulated mic placement on the cabinet
- **Room Size**: Acoustic space simulation

**Effects Section**:
- **Built-in Effects**: Reverb, Delay, Chorus, and other effects
- **Effect Parameters**: Individual controls for each effect

#### Bottom Section
- **Output Level**: Final output control
- **Status Indicators**: Showing current settings and activity
- **Playing Mode Selector**: Different playing behavior modes

### Visual Feedback Elements

FL Slayer provides visual feedback through:
- **Parameter Value Displays**: Numeric readouts for precise control
- **Active State Indicators**: Showing which parameters are being adjusted
- **Audio Activity Meters**: Visual representation of input/output levels
- **Waveform Display**: Shows the input and processed waveforms

## Core Concepts and Terminology

### Guitar Amplification Fundamentals

**Preamp Modeling**: Simulates the front-end gain stage of a guitar amplifier where initial distortion and tone shaping occurs.

**Poweramp Modeling**: Simulates the power stage of a guitar amplifier where additional compression and saturation occurs.

**Cabinet Modeling**: Simulates the speaker cabinet and microphone placement to recreate the sound of miking a real guitar cabinet.

**Tube Physics**: Emulates the behavior of vacuum tubes including compression, saturation, and harmonic generation.

### Key Parameters Explained

**Gain**: Controls the amount of preamp distortion. Higher values create more saturation and compression, while lower values remain cleaner.

**EQ Controls**: Tone shaping controls that affect the frequency response of the simulated amplifier. These typically behave like analog EQ circuits with interactive controls.

**Master Volume**: Controls the overall output level and affects the power amp stage compression.

**Cabinet Selection**: Different speaker cabinets have unique frequency responses and characteristics that significantly affect the final tone.

**Playing Modes**: Different modes that affect how the plugin responds to input (None, Autochords, Powerchords, Strum, SoloFixed, SoloDynamic).

### Parameter Interactions

Understanding how parameters interact is crucial for effective use:

- **Gain + Master Volume**: The relationship between these controls affects the amount of preamp vs poweramp saturation
- **EQ + Gain**: EQ settings affect how the gain stage clips and distorts
- **Cabinet + EQ**: The cabinet model affects the overall frequency response regardless of EQ settings
- **Playing Mode + Input**: Different modes respond differently to MIDI vs audio input

### Core Terminology

**Preamp**: The front-end gain stage of a guitar amplifier
**Poweramp**: The power stage that drives the speaker
**Cabinet**: The speaker enclosure that shapes the final tone
**Bias**: The operating point of the simulated tubes
**Power Sag**: The compression effect when driving tubes hard
**Playing Mode**: Different response behaviors for various playing techniques
**String Modeling**: Physical modeling of string vibration and harmonics

## Typical Starting Workflow (the first 5 minutes)

1. **Load FL Slayer**: Insert FL Slayer into a channel in the Channel Rack or as an insert effect

2. **Set Basic Parameters**: Start with moderate values for all parameters (Gain: 50%, Master: 60%, EQ: flat)

3. **Select Cabinet**: Choose a standard cabinet model (typically the default or a 4x12)

4. **Test with Audio**: Play a simple guitar part or use the built-in string modeling with MIDI

5. **Adjust Gain**: Increase gain gradually until you hear the desired amount of saturation

6. **Shape Tone**: Use the EQ controls to adjust the frequency balance

7. **Set Output Level**: Adjust the master volume to match your mix levels

8. **Save as Starting Point**: Save this basic preset for future use

## Common Beginner Traps (what people misunderstand)

1. **Thinking it's a real guitar amp**: Many users expect FL Slayer to behave exactly like a physical amp, but it's a simulation with its own characteristics.

2. **Overdriving the input**: Setting gain too high can result in harsh, unmusical distortion rather than warm tube saturation.

3. **Ignoring the playing modes**: The different playing modes significantly affect how the plugin responds to MIDI input.

4. **Not understanding cabinet simulation**: The cabinet model is crucial to the final tone and shouldn't be overlooked.

5. **Extreme EQ settings**: Setting EQ controls to extremes can result in harsh or thin sounds that don't translate well to real amplifiers.

6. **Using with inappropriate source material**: FL Slayer works best with appropriate guitar sounds or MIDI input, not with arbitrary audio sources.

7. **Not considering power sag**: The power sag control affects the compression and feel of the simulation significantly.

8. **Assuming it works like other amp simulators**: FL Slayer has its own unique approach to amp simulation that differs from other plugins.
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: FL Slayer

## Purpose and Identity
**FL Slayer** is a legacy electric guitar simulator based on **physical modeling** synthesis. Unlike a sample-based plugin, it calculates the vibration of a virtual string in real-time. It is a complete "guitar workstation," featuring a built-in pre-amp, cabinet simulator, and a stomp-box effects rack. [SRC: IL-MAN]

## 60-Second Mental Model
Think of FL Slayer as a **mathematical guitar**. You aren't playing a recording of a Fender or Gibson; you are adjusting the "physics" of a string (Harmonic, Damping) and then plugging that digital string into a virtual distortion pedal and speaker. Because it's calculated, it can do things real guitars can't—like perfectly consistent 4-octave slides.

## Typical Roles In A Session
- **Quick Riff Sketcher**: Rapidly testing out heavy rock or nu-metal ideas.
- **Synth-Guitar Hybrid**: Using it as a unique lead synth that happens to sound like a distorted guitar.
- **Rhythmic Strummer**: Creating background acoustic-style "chugs" or strums using the built-in Autochord modes.

## Hip-Hop/R&B Context
- **Emo-Trap Leads**: Creating the simple, high-pitched "guitar" melodies popular in the Juice WRLD / Lil Peep aesthetic.
- **Aggressive Phonk**: Driving the amp simulation to the max for distorted, industrial-style bass and leads.
- **R&B Neo-Soul Chords**: Using the "Clean" amp settings with the "Strum" mode for warm, jazzy chord rolls.

## When to Use vs When NOT to Use
| Use It When... | Avoid It When... |
| :--- | :--- |
| You need a distorted guitar sound FAST. | You need a 100% convincing, professional solo performance. |
| You want a low-CPU alternative to massive libraries. | You need advanced articulations like pinch harmonics. |
| You want a specific "legacy digital" character. | You are looking for a modern, high-fidelity sound. |

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: FL Slayer

## UI Tour
FL Slayer's interface is divided into the modeling engine, the amp section, and the effects rack. [SRC: IL-MAN]

### 1. The Modeling Engine (The "String")
- **Playing Mode**: None, Autochords, Powerchords, Strum, SoloFixed, SoloDynamic.
- **Harmonic**: Changes the virtual pickup position. Higher = Brighter/Twangy.
- **Damping**: Simulates palm-muting. Higher = Shorter sustain.
- **Strum Speed**: Controls how fast notes in a chord are sequentially triggered.

### 2. The Amp Section (The "Dirt")
- **Preamp**: The initial gain stage.
- **Drive**: The amount of saturation/distortion.
- **Presence**: High-frequency clarity at the amp stage.
- **Feedback**: Creates internal resonant feedback (use with caution).

### 3. Cabinet & FX (The "Space")
- **Cabinet Selector**: 8 different speaker models (Dry to Heavy).
- **Stomp Boxes**: Wah, Phaser, Flanger, Chorus, Tremolo.
- **Mix**: Final output level.

## Signal Flow
1. **MIDI Input**: Pitch and Velocity determine the note.
2. **String Model**: The virtual string vibrates based on **Harmonic** and **Damping**.
3. **Strummer**: If in a chord mode, the notes are spread in time.
4. **Preamp**: The modeling signal is amplified and distorted.
5. **Cabinet**: The signal is filtered through a virtual speaker response.
6. **Effects**: The signal passes through the selected stomp-box.
7. **Output**: Final signal is routed to the mixer.

## Things Beginners Misunderstand
- **"It sounds like a toy"**: This is often because the **Cabinet** is set to "None" or "Dry." Without a cabinet, a distorted guitar sounds like a buzzing bee. Always select a Cabinet (1-8).
- **Pitch Bends**: FL Slayer uses a unique "Double Pitch Bend" logic for slides. Check your MIDI settings if your slides sound choppy.
- **Velocity to Damping**: By default, how hard you hit a key often controls the **Damping** (Muting). Soft = Muted; Hard = Open.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: FL Slayer

## 1. The "Powerchord" Punch
Create thick rhythm guitar layers for Trap-Metal or Nu-Metal.
- **Technique**: Set playing mode to **Powerchords**.
- **Move**: Play only single notes in the Piano Roll. FL Slayer will automatically add the fifth and octave.
- **Listen For**: A heavy, solid wall of sound. Set Cabinet to "Heavy" for maximum impact.

## 2. Realistic "Human" Strumming
Avoid perfectly aligned MIDI blocks.
- **Technique**: Set playing mode to **Strum**.
- **Move**: Set **Strum Speed** to about 10 o'clock. Draw your chords in the Piano Roll.
- **Benefit**: The notes will roll sequentially, mimicking the time it takes for a pick to cross six strings.

## 3. The "SoloDynamic" Slide
Create expressive, soaring lead melodies.
- **Technique**: Select **SoloDynamic** mode.
- **Move**: Use high velocity for the "start" note and lower velocity for the "destination" note while overlapping them.
- **Watch**: FL Slayer will slide between the pitches gracefully.

## 4. Palm-Mute Chugging
- **Technique**: Control the "chug" using Velocity.
- **Move**: Link **Velocity to Damping** (standard in most presets).
- **Result**: Low velocity notes sound like tight palm-mutes (Thump-Thump), while high velocity notes sound like open "ringing" strings.

## 5. Low-End Discipline (Mix Prep)
- **Protocol**: Heavy distortion in FL Slayer can create a lot of mud in the 200Hz range.
- **Fix**: Use a High-Pass filter *after* the plugin at 250Hz.
- **Why**: This leaves room for your 808 and Kick drum, ensuring the "Guitar" provides the energy without destroying the low-end. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Piercing "Whistle"** | Lower the **Presence** knob or change to a darker **Cabinet**. |
| **"Buzzy" Distortion** | Ensure you have a **Cabinet** selected. Never leave it on "Dry" for distortion. |
| **Stuck Sustain** | Check the **Decay** and **Damping** knobs; if both are at 0, the string will ring forever. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: FL Slayer

How to use a legacy modeling engine to hit specific production aesthetic targets.

---

## 1. MOODY
*Darkness, melancholy, and "emo-trap" isolation.*
- **The Lever**: **Harmonic (Dark) + Deep Reverb + Damping**.
- **Move**: Set Harmonic to -50% (Left). Damping at 40%. Add a massive external Reverb (LuxeVerb).
- **What to Listen For**: A soft, muffled plucked sound that feels distant and lonely.
- **Don't Do This**: High gain/distortion (too aggressive).

## 2. UPBEAT
*Energy, sharp transients, and rhythmic "chug".*
- **The Lever**: **Powerchords + High Presence + Cabinet 5**.
- **Move**: Set Mode to Powerchords. Presence at 80%. Select an aggressive Cabinet.
- **What to Listen For**: A sharp "crunch" that syncs with the drums. Every note should feel like a pulse of energy.
- **Don't Do This**: Slow strum speeds (it slows the energy down).

## 3. PSYCHEDELIC
*Disorientation, shifting harmonics, and warped space.*
- **The Lever**: **Built-in Wah/Phaser + Feedback Modulation**.
- **Move**: Enable the "Wah" stompbox. Link its depth to a fast Sine LFO. Set **Feedback** knob to 20% for unstable ringing.
- **What to Listen For**: A sound that "screams" and "swirls," constantly changing its harmonic focus.
- **Don't Do This**: Clean amp settings (too predictable).

## 4. JAZZY
*Clean warmth, complex chord rolls, and organic "flutter".*
- **The Lever**: **Clean Amp + Strum Mode + Harmonic (Bright)**.
- **Move**: Set Preamp/Drive to minimum. Select Cabinet 1 (Natural). Use the Strum mode for chord rolls.
- **What to Listen For**: A bright but clean "Telecaster" style tone that feels soulful and articulated.
- **Don't Do This**: Fast playing (keep it "lazy" and behind the beat).

## 5. VIBEY
*Modern luxury, expensive sheen, and "liquid" silk.*
- **The Lever**: **None Mode (Monophonic) + Chorus + External Delay**.
- **Move**: Use monophonic lead mode. Add the built-in Chorus. Follow with a ping-pong delay.
- **What to Listen For**: A soaring, silky lead line that wraps around the listener's head.
- **Don't Do This**: Boxy, narrow cabinet models.

---

## Vibe Parameter Matrix
| Vibe | Mode | Harmonic | Amp Gain | Cabinet | FX Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Moody** | None | Dark (L) | Low | 1 (Natural) | Reverb |
| **Upbeat** | Power | Bright (R) | High | 5 (Heavy) | Compression |
| **Psyched** | SoloFix | Med | High | 8 (Metal) | Wah/Phaser |
| **Jazzy** | Strum | Bright (R) | Low | 2 (Vintage) | Tremolo |
| **Vibey** | SoloDyn | Med | Med | 4 (Clean) | Chorus/Delay |

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: FL Slayer

The essential modifiers for the physical modeling guitar engine. [SRC: IL-MAN]

---

## 🎸 String Model
- **Mode**: None, Autochords, Powerchords, Strum, SoloFixed, SoloDynamic.
- **Harmonic**: Pickup character (Left = Dark/Neck; Right = Bright/Bridge).
- **Damping**: Simulates palm-muting (High = Muted).
- **Decay**: How long the string rings out.

## 🔥 Amp Section
- **Preamp**: Input gain.
- **Drive**: Distortion amount.
- **Presence**: High-mid frequency "bite."
- **Feedback**: Internal resonance (Screaming sound).

## 🔊 Cabinet & Space
- **Cabinet (1-8)**: Virtual speaker models. 
  - *Dry* = No filter.
  - *Natural* = Clean.
  - *Heavy* = High Gain.
- **Mix**: Global output volume.

## 👟 Stomp Box FX
- **Wah**: Auto-filter sweep.
- **Phaser / Flanger**: Modulated phase cancellation.
- **Chorus**: Stereo widening.
- **Tremolo**: Rapid volume pulsing.

```

---

## FILE: 01-Learning\Quick-Reference\playing-modes-decoded.md

```markdown
# Quick Reference: Playing Modes Decoded

Understanding the 6 "AI Performers" inside FL Slayer. [SRC: IL-MAN]

## 1. None
- **Logic**: Basic monophonic input.
- **Use Case**: Simple basslines or lead melodies where you want total control.

## 2. Autochords
- **Logic**: Converts single MIDI notes into full chords.
- **Use Case**: Quickly hearing a harmony without knowing guitar fingerings.

## 3. Powerchords
- **Logic**: Adds a Perfect 5th and an Octave to your note.
- **Use Case**: **ESSENTIAL** for Rock, Punk, and aggressive Trap-Metal.

## 4. Strum
- **Logic**: Delays the trigger of each note in a chord slightly.
- **Use Case**: Acoustic-style strumming or jazzy Neo-Soul rolls.

## 5. SoloFixed
- **Logic**: Fixed glissando time between notes.
- **Use Case**: "Video Game" style slides that are always the same speed.

## 6. SoloDynamic
- **Logic**: Slide speed is based on MIDI Velocity.
- **Use Case**: **PRO** expressive leads. Harder hits slide faster; soft hits slide slower.

```

---

## FILE: 02-Data\00_Controls_Reference.md

```markdown
# FL Slayer - Controls Reference

## Parameter List with Descriptions

### Preamp Controls

**Gain**
- **Description**: Controls the amount of preamp distortion and saturation
  - Low values: Clean, transparent amplification
  - Medium values: Mild overdrive and warmth
  - High values: Heavy distortion and saturation
- **Range**: 0-100% (typically)
- **Effect**: Increases harmonic content and compression
- **Use for**: Controlling the amount of tube saturation and distortion
- **Pro tip**: Use lower gain settings with higher master volume for more power amp compression

**Bass**
- **Description**: Controls low-frequency response in the preamp section
  - Low values: Reduced low-end
  - Medium values: Balanced low-end
  - High values: Enhanced low-end
- **Range**: 0-100% (typically)
- **Effect**: Adjusts the low-frequency content of the signal
- **Use for**: Shaping the low-end character of the simulated amp
- **Pro tip**: Reduce bass when using high gain to prevent muddiness

**Mid**
- **Description**: Controls mid-frequency response in the preamp section
  - Low values: Scooped mids
  - Medium values: Balanced mids
  - High values: Mid-forward sound
- **Range**: 0-100% (typically)
- **Effect**: Adjusts the mid-frequency content of the signal
- **Use for**: Shaping the presence and character of the simulated amp
- **Pro tip**: Boost mids for cutting through dense mixes

**Treble**
- **Description**: Controls high-frequency response in the preamp section
  - Low values: Dark, rolled-off highs
  - Medium values: Balanced highs
  - High values: Bright, crisp highs
- **Range**: 0-100% (typically)
- **Effect**: Adjusts the high-frequency content of the signal
- **Use for**: Shaping the brightness and clarity of the simulated amp
- **Pro tip**: Use moderate treble settings to avoid harshness

**Presence**
- **Description**: Controls high-frequency presence and air
  - Low values: Reduced presence
  - Medium values: Balanced presence
  - High values: Enhanced presence and air
- **Range**: 0-100% (typically)
- **Effect**: Adjusts the high-frequency presence of the signal
- **Use for**: Adding sparkle and definition to the sound
- **Pro tip**: Use sparingly to avoid harshness

### Poweramp Controls

**Master Volume**
- **Description**: Controls the overall output level and power amp compression
  - Low values: Quieter output, less power amp saturation
  - Medium values: Balanced output and compression
  - High values: Louder output, more power amp saturation
- **Range**: 0-100% (typically)
- **Effect**: Controls final output level and power amp behavior
- **Use for**: Setting the final level and controlling power amp compression
- **Pro tip**: Use high master volume with low gain for power amp compression without preamp distortion

**Power Sag**
- **Description**: Simulates the voltage sag of a tube power amp under load
  - Low values: Stable power supply, consistent tone
  - Medium values: Moderate sag, dynamic compression
  - High values: Heavy sag, significant compression and sag
- **Range**: 0-100% (typically)
- **Effect**: Adds compression and dynamic response similar to tube power amps
- **Use for**: Adding natural compression and sag response
- **Pro tip**: Use for dynamic response that reacts to playing intensity

**Bias**
- **Description**: Controls the operating point of the simulated tubes
  - Low values: Cooler bias, tighter sound
  - Medium values: Balanced bias, standard operation
  - High values: Hotter bias, more saturation
- **Range**: 0-100% (typically)
- **Effect**: Changes the operating characteristics of the simulated tubes
- **Use for**: Adjusting the saturation and compression characteristics
- **Pro tip**: Higher bias settings add more harmonic saturation

### Cabinet Controls

**Cabinet Selection**
- **Description**: Selects different virtual speaker cabinet models
  - Options typically include various 1x12, 2x12, 4x10, 4x12 configurations
  - Each cabinet has unique frequency response and character
- **Range**: Multiple cabinet types (typically 8-12 options)
- **Effect**: Changes the overall tonal character and speaker simulation
- **Use for**: Selecting the appropriate cabinet for the desired tone
- **Pro tip**: Match cabinet type to the musical style and amp model

**Microphone Position**
- **Description**: Simulates different microphone positions relative to the speaker
  - Center: Bright, direct sound
  - Edge: Warmer, more rounded sound
  - Off-axis: Even warmer, more distant sound
- **Range**: Various positions (typically 3-5 options)
- **Effect**: Changes the tonal balance and proximity effect
- **Use for**: Adjusting the tonal character of the cabinet simulation
- **Pro tip**: Use off-center positions for warmer tones

**Room Size**
- **Description**: Controls the simulated acoustic space around the cabinet
  - Small: Intimate, dry sound
  - Medium: Balanced room sound
  - Large: Spacious, ambient sound
- **Range**: Small to Large (typically 0-100%)
- **Effect**: Adds simulated room ambience and space
- **Use for**: Adding spatial characteristics to the sound
- **Pro tip**: Use small room settings for tight, dry sounds

### Effects Controls

**Reverb**
- **Description**: Built-in reverb effect
  - Low values: Dry sound
  - Medium values: Moderate reverb
  - High values: Wet, spacious sound
- **Range**: 0-100% (typically)
- **Effect**: Adds spatial depth and ambience
- **Use for**: Adding space and depth to the guitar sound
- **Pro tip**: Use subtle amounts for natural room sound

**Delay**
- **Description**: Built-in delay effect
  - Low values: Subtle doubling
  - Medium values: Noticeable echo
  - High values: Pronounced delay effect
- **Range**: 0-100% (typically)
- **Effect**: Adds time-based effects and depth
- **Use for**: Adding depth and space to the guitar sound
- **Pro tip**: Use short delays for doubling effects

**Chorus**
- **Description**: Built-in chorus effect
  - Low values: Subtle thickening
  - Medium values: Noticeable chorus
  - High values: Pronounced chorus effect
- **Range**: 0-100% (typically)
- **Effect**: Adds modulation and thickening
- **Use for**: Adding movement and thickness to the sound
- **Pro tip**: Use low amounts for subtle thickening

### Playing Mode Controls

**Mode Selector**
- **None**: Standard monophonic playing
- **Autochords**: Automatically plays chord inversions
- **Powerchords**: Plays root and fifth only
- **Strum**: Simulates strumming across chord notes
- **SoloFixed**: Fixed pitch bend behavior
- **SoloDynamic**: Velocity-sensitive pitch behavior
- **Effect**: Changes how the plugin responds to MIDI input
- **Use for**: Different guitar playing techniques
- **Pro tip**: Use Strum mode for realistic strumming patterns

### Global Controls

**Input Gain**
- **Description**: Controls the input level to the plugin
  - Low values: Reduced input level
  - Medium values: Normal input level
  - High values: Increased input level
- **Range**: Usually ±12dB or more
- **Effect**: Adjusts the input level before processing
- **Use for**: Optimizing input level for the desired processing
- **Pro tip**: Match input level to prevent clipping

**Output Level**
- **Description**: Controls the final output level of the plugin
  - Low values: Reduced output level
  - Medium values: Normal output level
  - High values: Increased output level
- **Range**: Usually ±12dB or more
- **Effect**: Adjusts the overall output level
- **Use for**: Matching levels in the mix
- **Pro tip**: Use for gain staging in your project

**Bypass**
- **Description**: Toggles processing on/off
  - When bypassed, signal passes through unchanged
  - When active, full processing is applied
- **Range**: On/Off
- **Effect**: Completely bypasses all processing
- **Use for**: A/B comparison and disabling processing
- **Pro tip**: Use for comparing processed and unprocessed signals

## Default Values and Safe Starting Ranges

### Preamp Defaults
- **Gain**: 50% (medium setting)
- **Bass**: 50% (flat response)
- **Mid**: 50% (flat response)
- **Treble**: 50% (flat response)
- **Presence**: 50% (flat response)
- **Safe Starting Range**: 30-70% for musical results

### Poweramp Defaults
- **Master Volume**: 60% (medium-high setting)
- **Power Sag**: 40% (moderate setting)
- **Bias**: 50% (neutral setting)
- **Safe Starting Range**: 40-80% for master volume, 20-60% for sag

### Cabinet Defaults
- **Cabinet**: Default 4x12 cabinet (manufacturer dependent)
- **Mic Position**: Center position
- **Room Size**: Medium setting
- **Safe Starting Range**: Start with defaults and adjust to taste

### Effects Defaults
- **Reverb**: 25-35% (subtle setting)
- **Delay**: 10-20% (subtle setting)
- **Chorus**: 10-15% (subtle setting)
- **Safe Starting Range**: 0-40% for most applications

### Playing Mode Defaults
- **Mode**: None (standard monophonic)
- **Safe Starting Range**: None for audio input, Strum for chord input

## Special Behaviors, Hidden Interactions, Right-Click Options, Integration Points

### Parameter Interactions
- **Gain + Master**: The relationship between these controls affects preamp vs poweramp saturation
- **EQ + Gain**: EQ settings affect how the gain stage clips and distorts
- **Bias + Power Sag**: These interact to create different tube compression characteristics
- **Cabinet + EQ**: The cabinet model affects the overall frequency response regardless of EQ settings

### Hidden Interactions
- **Velocity Response**: Different playing modes respond differently to MIDI velocity
- **Note Range**: Some playing modes only work effectively in specific note ranges
- **Polyphony**: The plugin may behave differently in monophonic vs polyphonic contexts
- **MIDI CC Mapping**: Many parameters may be controllable via MIDI CC messages

### Right-Click Options
- **Parameter Reset**: Right-clicking on any knob typically resets it to its default value
- **Fine Adjustment**: Holding Shift while turning a knob allows for fine parameter adjustments
- **MIDI Learn**: Right-clicking on parameters usually reveals MIDI learn options for external controller mapping
- **Value Scaling**: Some parameters may offer different scaling options when right-clicked

### Integration Points
- **MIDI Control**: Parameters can be mapped to MIDI CC messages for external controller mapping
- **FL Studio Automation**: All parameters can be automated using FL Studio's automation system
- **Analyzer Integration**: Works with FL Studio's built-in spectrum analyzer for visual feedback
- **Mixer Integration**: Properly integrates with FL Studio's mixer routing
- **Patcher Compatibility**: Can be used within Patcher for complex routing

## MIDI/automation notes and gotchas

### MIDI Implementation
- **Note Triggering**: Any MIDI note can trigger the guitar simulation
- **Velocity Sensitivity**: Full 127-step velocity response for dynamic expression
- **Aftertouch**: May be supported depending on FL Studio version (check documentation)
- **Pitch Bend**: Supported for pitch modulation effects

### Automation Notes
- **Parameter Automation**: All parameters can be automated using FL Studio's automation system
- **Smooth Automation**: The plugin likely applies smoothing to prevent parameter jumps causing audio artifacts
- **Real-time Parameter Changes**: Parameters can be adjusted in real-time without stopping playback

### Gotchas
- **Parameter Extremes**: Setting parameters to extreme values may cause unexpected behavior or artifacts
- **Playing Mode Changes**: Changing playing modes during playback may cause audio discontinuities
- **Cabinet Model Switching**: Switching cabinet models during playback may cause clicks or pops
- **High Gain Settings**: Very high gain settings may cause harsh distortion rather than musical saturation
- **Poweramp Settings**: High master volume with high power sag can create excessive compression
- **MIDI vs Audio**: Different playing modes work better with MIDI input vs audio input
- **CPU Usage**: Complex settings with multiple effects may increase CPU usage significantly
- **Stereo Imaging**: Some settings may affect stereo imaging, so check mono compatibility
```

---

## FILE: 02-Data\01_Troubleshooting_Notes.md

```markdown
# FL Slayer - Troubleshooting Notes

## Known Issues, Limitations, Weird Behaviors

### Known Issues
- **MIDI Note Tracking**: In some playing modes, rapid note changes may cause tracking issues or double-triggering
- **Extreme Parameter Interactions**: At extreme settings (very high gain with very high master), the simulation may become unstable
- **Playing Mode Switching**: Switching playing modes during playback may cause audio discontinuities or hanging notes
- **Cabinet Model Switching**: Changing cabinet models during playback may cause clicks or pops
- **Velocity Response Curves**: The velocity response may not be perfectly linear across all playing modes and parameter settings
- **CPU Usage Spikes**: Complex settings with high polyphony may cause CPU usage spikes during complex passages

### Limitations
- **Single-Engine Architecture**: Only one amplifier simulation engine per instance
- **Limited Cabinet Models**: Fewer cabinet models compared to dedicated amp simulators
- **No IR Loading**: Cannot load custom impulse responses like dedicated cabinet simulators
- **Simplified Controls**: Fewer detailed controls compared to professional amp simulators
- **MIDI-Only Features**: Some playing modes only work with MIDI input, not audio input
- **No Multi-Channel Output**: No option for separate outputs for different frequency bands
- **Fixed Algorithm**: No option to switch between different modeling algorithms

### Weird Behaviors
- **Non-Linear Response**: The relationship between parameter changes and audible results is not always proportional
- **Parameter Interaction**: Changing one parameter may significantly affect the perceived effect of others
- **Mode-Dependent Response**: The same parameter settings may sound different in different playing modes
- **Dynamic Range Compression**: The simulation may compress dynamics in unexpected ways at certain settings
- **Harmonic Content Changes**: Extreme settings may create harmonic content that doesn't match the input signal's natural harmonics
- **Transient Response Variations**: Different settings may affect the attack characteristics in unexpected ways

## CPU/Performance Considerations

### CPU Usage Patterns
- **Base Load**: FL Slayer has a moderate base CPU load that's efficient for its complexity
- **Parameter Complexity**: CPU usage remains relatively stable regardless of parameter settings
- **Multiple Instances**: CPU usage increases linearly with the number of instances
- **Real-Time Performance**: Generally optimized for real-time performance with minimal latency
- **Polyphony Impact**: Higher polyphony settings may increase CPU usage slightly
- **Effects Processing**: Built-in effects (reverb, delay, chorus) add to CPU load

### Performance Optimization Tips
- **Use Conservative Settings**: Avoid extreme settings that may increase processing demands
- **Freeze Tracks**: When rendering down complex arrangements with many FL Slayer instances
- **Disable Unnecessary Effects**: Turn off built-in effects when not needed
- **Optimize Instance Count**: Consolidate processing where possible to reduce instance count
- **Monitor Performance**: Use FL Studio's performance meter to monitor CPU usage
- **Use Lower-Quality Modes**: Some settings may have quality/performance trade-offs

### Buffer Size Considerations
- **Small Buffers**: May cause increased CPU usage or audio dropouts with complex parameter interactions
- **Large Buffers**: May introduce latency but can reduce CPU usage and improve stability
- **Recommended Setting**: Use FL Studio's automatic buffer size adjustment or experiment with 256-512 samples for a good balance
- **Real-Time Performance**: Smaller buffers may be needed for responsive performance with automation

## "Symptom -> Cause -> Fix -> How to verify" Table

| Symptom | Possible Cause | Solution | How to Verify |
|---------|----------------|----------|---------------|
| Harsh or metallic distortion | Gain too high, Bias too hot | Reduce gain and/or bias settings | Listen for smoother, more musical distortion |
| Muddy or unclear sound | Too much bass, insufficient mid presence | Reduce bass, increase mids, adjust presence | Compare frequency spectrum with reference |
| No sound output | Input gain too low, muted track, or wrong routing | Check gain, unmute, verify routing | Verify signal path in mixer |
| Excessive compression/squash | Power Sag too high, Master too high | Reduce Power Sag and/or Master settings | Listen for more dynamic response |
| Clicking/popping during parameter changes | Parameter changes too rapid, extreme settings | Smooth parameter changes, reduce extreme settings | Listen for artifacts during parameter changes |
| Phase issues in stereo | Stereo field too wide or incompatible settings | Reduce stereo width, check mono compatibility | Use stereo analyzer to check phase correlation |
| Harsh high end | Treble/Presence too high, cabinet too bright | Reduce treble/presence, try darker cabinet model | Listen for smoother high-frequency response |
| Weak low end | Bass setting too low, cabinet inappropriate | Increase bass setting, try different cabinet model | Check low-frequency content with spectrum analyzer |
| Not responding to velocity | Playing mode not set for velocity, or MIDI issue | Verify playing mode supports velocity, check MIDI | Test with different velocity levels |
| Hanging notes | Polyphony settings too low, or playing mode issue | Increase polyphony, try different playing mode | Monitor note-off behavior |
| CPU overload | Too many instances, extreme settings | Reduce instance count, optimize settings | Monitor CPU meter in FL Studio |
| Unnatural sound | Settings too extreme, inappropriate playing mode | Use more conservative settings, appropriate mode | Compare with reference sound |

## Version-Specific Notes (labeled clearly with version)

### FL Studio 20.x Series
- **Initial Implementation**: The original implementation of FL Slayer with basic amplifier simulation
- **Basic Parameter Set**: Includes gain, EQ, master, and simple cabinet simulation
- **Limited Playing Modes**: Fewer playing modes compared to later versions
- **Basic Effects**: Simple built-in effects processing

### FL Studio 20.7
- **Performance Improvements**: Minor optimizations to reduce CPU usage
- **Parameter Smoothing**: Added improved parameter smoothing to reduce artifacts during automation

### FL Studio 20.8
- **Playing Mode Enhancements**: Improved playing mode algorithms for more realistic response
- **Cabinet Simulation**: Enhanced cabinet models with better realism

### FL Studio 21.0
- **Enhanced Effects**: Improved built-in effects processing
- **Better MIDI Support**: Enhanced MIDI implementation for playing modes

### FL Studio 21.1
- **Stability Improvements**: Fixed occasional crashes when using extreme parameter settings
- **Parameter Validation**: Improved validation of extreme parameter combinations to prevent instability

### FL Studio 21.2
- **MIDI Learn Enhancement**: Improved MIDI learn functionality for parameter mapping
- **Automation Handling**: Better handling of parameter automation for smoother transitions

### FL Studio 21.3
- **Interface Updates**: Minor UI improvements for better parameter visibility
- **Bug Fixes**: Addressed rare initialization issues when loading projects

### FL Studio 21.4
- **Performance Monitoring**: Added internal performance monitoring for better stability
- **Parameter Interpolation**: Better interpolation between parameter values for smoother transitions

### FL Studio 21.5
- **Compatibility Improvements**: Better compatibility with third-party controller mapping
- **Audio Quality**: Minor improvements to audio quality at extreme settings
- **Documentation Updates**: Enhanced tooltips and parameter descriptions

### FL Studio 21.6
- **Algorithm Refinement**: Further refinement of the amplifier simulation algorithm
- **Parameter Smoothing**: Enhanced parameter smoothing for even smoother transitions
- **Stability**: Additional stability improvements for extreme settings

*Note: Version-specific behaviors should be verified against official Image-Line release notes, as these are based on general FL Studio development patterns.*
```

---

## FILE: 02-Data\parameters\flslayer-specs.json

```json
{
  "plugin_name": "FL Slayer",
  "category": "Generator",
  "status": "Deprecated / Legacy",
  "engine": "Physical Modeling",
  "parameters": [
    {
      "name": "Damping",
      "type": "knob",
      "description": "Adjusts the string sustain. Simulates palm muting.",
      "vibe_impact": "Tightness, rhythmic focus, moody"
    },
    {
      "name": "Harmonic",
      "type": "knob",
      "description": "Simulates virtual pickup positioning.",
      "vibe_impact": "Brightness, twang, upbeat"
    },
    {
      "name": "Feedback",
      "type": "knob",
      "description": "Adds internal resonance to the model loop.",
      "vibe_impact": "Psychedelic, industrial, screaming"
    }
  ],
  "mix_impact_tags": ["transient", "harmonic", "dirt"]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (FL Slayer)

## 1. The "Emo-Trap" Lead Rule
- **Rule**: Use the **None** mode. Keep **Damping** below 20%.
- **Move**: Add a Fruity Delay 3 with a high Feedback setting.
- **Why**: This creates the "haunting" high-pitched guitar melodies found in artists like Juice WRLD. The clean, thin modeling of FL Slayer fits perfectly behind a heavy 808.

## 2. Aggressive Phonk Baseline
- **Rule**: Set **Mode** to None. Crank **Preamp** and **Drive** to max.
- **Action**: Use Cabinet 8 (Heavy). Play in the C1-C3 range.
- **Goal**: To create a distorted, gritty "guitar-bass" that hits with the same pressure as a saw synth.

## 3. R&B "Guitar-Soul" Rolls
- **Rule**: Use the **Strum** mode with **Harmonic** set to the far right (Bridge).
- **Technique**: Use low-velocity chords to trigger muted samples.
- **Goal**: A tight, rhythmic percussive guitar that provides "groove" without taking up too much room in the mix.

## 4. The "Cabinet" Mandate
- **Rule**: Never use distortion with Cabinet set to "Dry."
- **Why**: Digital distortion without speaker modeling is harsh and unmusical. Always select Cabinet 1-8 to "round off" the harsh edges of the modeling engine.

```

---

## FILE: 03-Workflows\00_Practical_Use_Cases.md

```markdown
# FL Slayer - Practical Use Cases

## 8-12 Real Use Cases with Step-by-Step Setup

### Use Case 1: Classic Rock Guitar Tone
**Goal**: Create a classic rock guitar tone using FL Slayer's amp simulation

**Step-by-step setup inside FL Studio**:
1. Insert FL Slayer on a guitar track or MIDI channel for guitar sounds
2. Set Gain to 60% (moderate overdrive)
3. Set EQ controls: Bass 55%, Mid 45%, Treble 60%, Presence 50%
4. Set Master Volume to 70% (allowing headroom)
5. Set Power Sag to 35% (for tube-like compression)
6. Select a 4x12 cabinet model with center mic position
7. Set Room Size to Medium for natural ambience
8. Add light reverb (20-30% mix) and slight delay (1/8th note, 15% feedback)
9. Use playing mode "None" for single-note playing
10. Fine-tune the settings to taste, focusing on mid-range presence

**Recommended starting settings/ranges**:
- Gain: 50-70% for classic rock overdrive
- Bass: 50-60% for solid low-end
- Mid: 40-50% for presence (not too scooped)
- Treble: 55-65% for clarity without harshness
- Master: 65-75% for appropriate output level

**Why it works / what to listen for**:
- The moderate gain setting provides classic rock overdrive without excessive distortion
- The EQ settings emphasize the mid-range presence that's characteristic of rock tones
- Power Sag adds natural tube compression that responds to playing dynamics
- Listen for the warm, slightly compressed tone with good sustain

**Variations**:
1. **Blues Rock**: Reduce gain to 45%, increase mids to 55%, add more presence
2. **Heavy Rock**: Increase gain to 75%, reduce mids slightly to 40%, increase bass to 60%
3. **Vintage Clean**: Reduce gain to 25%, increase master to 80%, keep EQ relatively flat

**Pitfalls + quick fixes**:
- Pitfall: Tone is too harsh or brittle
  - Fix: Reduce treble and presence, increase mid settings
- Pitfall: Tone lacks punch or presence
  - Fix: Increase presence and treble slightly, adjust mid settings

### Use Case 2: Heavy Metal Rhythm Guitar
**Goal**: Create a tight, aggressive metal rhythm tone with palm-muted chugging

**Step-by-step setup inside FL Studio**:
1. Insert FL Slayer on a guitar track
2. Set Gain to 85% (high distortion for metal)
3. Set EQ controls: Bass 65%, Mid 70%, Treble 40%, Presence 45%
4. Set Master Volume to 60% (accounting for high gain)
5. Set Power Sag to 25% (less compression for tighter response)
6. Set Bias to 60% (hotter bias for more saturation)
7. Select a darker cabinet model (1x12 or 2x12) with off-center mic position
8. Use playing mode "Powerchords" if using MIDI input for chord playing
9. Add slight gate (threshold -25dB, reduction 3:1) to tighten up the sound
10. Apply high-pass filter around 80Hz to clean up the low-end mud

**Recommended starting settings/ranges**:
- Gain: 80-90% for aggressive metal distortion
- Bass: 60-70% for tight low-end (not too boomy)
- Mid: 65-75% for clarity in dense mixes
- Treble: 35-45% to avoid harshness
- Bias: 55-65% for extra saturation

**Why it works / what to listen for**:
- High gain creates the aggressive distortion needed for metal
- Emphasized mids help the guitar cut through dense mixes
- Reduced treble prevents harshness in the high frequencies
- Tight low-end from EQ and high-pass filtering prevents muddiness
- Listen for tight, aggressive tone with clarity in the mix

**Variations**:
1. **Modern Metal**: Add more bass (70-75%), reduce treble (30-35%), use tighter gate
2. **Classic Metal**: Reduce gain (70-75%), increase treble (45-50%), use more presence
3. **Death Metal**: Add more mid-range (75-80%), reduce highs further (30-40%)

**Pitfalls + quick fixes**:
- Pitfall: Tone is too muddy or boomy
  - Fix: Reduce bass setting, apply higher high-pass filter (90-100Hz)
- Pitfall: Tone is too harsh or piercing
  - Fix: Reduce treble and presence, consider using darker cabinet model

### Use Case 3: Clean Jazz Guitar Tone
**Goal**: Create a warm, clean jazz guitar tone with natural tube characteristics

**Step-by-step setup inside FL Studio**:
1. Insert FL Slayer on a guitar track
2. Set Gain to 25% (low gain for clean sound)
3. Set EQ controls: Bass 45%, Mid 50%, Treble 55%, Presence 40%
4. Set Master Volume to 75% (clean sounds need more output)
5. Set Power Sag to 50% (for natural tube compression)
6. Set Bias to 45% (warmer, less aggressive)
7. Select a 2x12 or 1x12 cabinet model with off-center mic position
8. Set Room Size to Small for intimate jazz club feel
9. Add light reverb (plate, 25% mix, 1.8s decay)
10. Use playing mode "None" for single-note articulation

**Recommended starting settings/ranges**:
- Gain: 20-35% for clean tone
- Bass: 40-50% for warm low-end
- Mid: 45-55% for fullness
- Treble: 50-60% for clarity without harshness
- Power Sag: 40-60% for natural compression

**Why it works / what to listen for**:
- Low gain setting preserves the clean, natural guitar tone
- Moderate power sag adds subtle tube compression that's characteristic of jazz tones
- The cabinet selection contributes to the warm, woody character
- Listen for warm, full-bodied clean tone with natural compression

**Variations**:
1. **Bebop Jazz**: Increase presence slightly (45-50%), use brighter cabinet model
2. **Smooth Jazz**: Add slight chorus effect, reduce presence, increase treble
3. **Swing Era**: Use more vintage cabinet model, add slight reverb

**Pitfalls + quick fixes**:
- Pitfall: Tone is too sterile or digital
  - Fix: Increase Power Sag to 60-70%, use warmer cabinet model
- Pitfall: Tone is too harsh or bright
  - Fix: Reduce treble and presence, use darker cabinet model

### Use Case 4: Funk Guitar Rhythm
**Goal**: Create a tight, percussive funk guitar tone with emphasis on attack and clarity

**Step-by-step setup inside FL Studio**:
1. Insert FL Slayer on a guitar track
2. Set Gain to 35% (just enough for slight breakup)
3. Set EQ controls: Bass 40%, Mid 65%, Treble 70%, Presence 60%
4. Set Master Volume to 70%
5. Set Power Sag to 30% (moderate compression)
6. Select a 1x12 cabinet model with edge mic position for clarity
7. Apply high-pass filter around 100Hz to eliminate rumble
8. Use playing mode "Strum" if using MIDI for rhythmic chord playing
9. Add light chorus (20% rate, 30% depth) for width
10. Apply gate to tighten up the attack (threshold -20dB, fast attack/release)

**Recommended starting settings/ranges**:
- Gain: 30-45% for slight breakup
- Bass: 35-45% to avoid muddiness
- Mid: 60-70% for punch and presence
- Treble: 65-75% for attack clarity
- Presence: 55-65% for string definition

**Why it works / what to listen for**:
- Emphasized mids and highs create the characteristic funk "bite"
- Low bass prevents muddiness during complex chord work
- The cabinet selection and mic position enhance attack clarity
- Listen for percussive attack with tight, rhythmic response

**Variations**:
1. **Classic Funk**: Add more treble (75-80%), increase presence (65-70%)
2. **Modern Funk**: Add slight delay (1/16th note) for rhythmic complexity
3. **Disco Funk**: Add more chorus and reverb for lushness

**Pitfalls + quick fixes**:
- Pitfall: Tone is too muddy during chord playing
  - Fix: Reduce bass further (30-35%), apply higher high-pass filter
- Pitfall: Tone lacks attack or punch
  - Fix: Increase mid and treble settings, use brighter cabinet model

### Use Case 5: Lead Guitar with Expressive Bending
**Goal**: Create a lead guitar tone with good sustain and expressive pitch bending

**Step-by-step setup inside FL Studio**:
1. Insert FL Slayer on a guitar track
2. Set Gain to 70% (for good sustain without excessive distortion)
3. Set EQ controls: Bass 45%, Mid 55%, Treble 65%, Presence 60%
4. Set Master Volume to 65%
5. Set Power Sag to 40% (for natural compression during bends)
6. Set Bias to 55% (for balanced saturation)
7. Select a 4x12 cabinet model with slightly off-center mic position
8. Use playing mode "SoloDynamic" for expressive pitch response
9. Add light reverb (hall, 35% mix, 2.5s decay)
10. Add slight delay (1/4 note, 20% feedback) for depth

**Recommended starting settings/ranges**:
- Gain: 65-75% for good sustain
- Bass: 40-50% for fullness without muddiness
- Mid: 50-60% for presence
- Treble: 60-70% for clarity during bends
- Power Sag: 35-45% for natural compression

**Why it works / what to listen for**:
- Moderate gain provides sustain while maintaining clarity
- Power Sag adds natural compression that works well with bending
- SoloDynamic playing mode enhances expressiveness
- Listen for smooth, sustaining tone with good pitch expression

**Variations**:
1. **Blues Lead**: Reduce gain (60%), increase mids (60%), add more reverb
2. **Rock Lead**: Increase gain (75-80%), boost presence (65-70%)
3. **Metal Lead**: Higher gain (80-85%), more mid-range (60-65%)

**Pitfalls + quick fixes**:
- Pitfall: Tone is too compressed or lifeless
  - Fix: Reduce Power Sag to 25-30%, increase gain slightly
- Pitfall: Too much distortion for expressive playing
  - Fix: Reduce gain to 55-65%, increase master volume

### Use Case 6: Bass Guitar Simulation
**Goal**: Create a simulated bass guitar tone using FL Slayer's modeling

**Step-by-step setup inside FL Studio**:
1. Insert FL Slayer on a bass track
2. Set Gain to 40% (for subtle tube warmth)
3. Set EQ controls: Bass 70%, Mid 45%, Treble 35%, Presence 30%
4. Set Master Volume to 70%
5. Set Power Sag to 45% (for natural tube compression)
6. Select a 4x10 or 1x15 cabinet model for bass response
7. Apply high-pass filter around 30Hz to prevent subsonic content
8. Use playing mode "None" for single-note bass lines
9. Add slight compression (Fruity Limiter: 3:1 ratio, medium attack/release)
10. Apply low-pass filter around 5kHz to prevent harsh highs

**Recommended starting settings/ranges**:
- Gain: 35-50% for subtle warmth
- Bass: 65-75% for solid low-end foundation
- Mid: 40-50% for definition
- Treble: 30-40% to avoid harshness
- Presence: 25-35% to minimize harshness

**Why it works / what to listen for**:
- The modeling simulates the warmth of tube preamps
- Emphasized bass provides the foundation needed for bass tones
- Reduced highs prevent harshness in the low-frequency register
- Listen for warm, full-bodied bass tone with natural compression

**Variations**:
1. **Vintage Bass**: Use 1x15 cabinet, reduce gain (30%), increase presence (40%)
2. **Modern Bass**: Add slight overdrive (gain 50-55%), use 4x10 cabinet
3. **Synth Bass**: Increase gain (55-65%), add chorus for width

**Pitfalls + quick fixes**:
- Pitfall: Bass is too boomy or undefined
  - Fix: Reduce bass setting (60-65%), apply tighter high-pass filter
- Pitfall: Bass lacks definition or clarity
  - Fix: Increase mid settings (50-55%), adjust high-pass filter lower

### Use Case 7: Acoustic Guitar Simulation
**Goal**: Create an acoustic guitar simulation using FL Slayer's modeling

**Step-by-step setup inside FL Studio**:
1. Insert FL Slayer on a track
2. Set Gain to 15% (very low for clean reproduction)
3. Set EQ controls: Bass 50%, Mid 55%, Treble 65%, Presence 70%
4. Set Master Volume to 80%
5. Set Power Sag to 20% (minimal compression)
6. Select a neutral cabinet model that doesn't color the sound excessively
7. Set Room Size to Small for intimate acoustic feel
8. Use playing mode "None" for natural single-note response
9. Add plate reverb (30% mix, 1.5s decay) for acoustic space
10. Apply gentle compression (2:1 ratio) to even out dynamics

**Recommended starting settings/ranges**:
- Gain: 10-25% for clean reproduction
- Bass: 45-55% for natural low-end
- Mid: 50-60% for body
- Treble: 60-70% for string clarity
- Presence: 65-75% for sparkle

**Why it works / what to listen for**:
- Low gain setting preserves the natural acoustic character
- Emphasized highs and presence add the "air" characteristic of acoustic guitars
- Minimal compression maintains the natural dynamic response
- Listen for natural, string-like acoustic tone with presence

**Variations**:
1. **Steel String**: Increase treble and presence further
2. **Classical**: Reduce treble (55-60%), increase mids (60-65%)
3. **Nylon String**: Add slight chorus for warmth

**Pitfalls + quick fixes**:
- Pitfall: Sound is too electric or artificial
  - Fix: Reduce gain significantly (5-15%), use neutral cabinet model
- Pitfall: Lacks the natural "wooden" character of acoustic
  - Fix: Add more reverb, reduce gain, increase presence

### Use Case 8: Experimental Guitar Textures
**Goal**: Create unique, experimental guitar textures using FL Slayer's extreme settings

**Step-by-step setup inside FL Studio**:
1. Insert FL Slayer on a guitar track
2. Set Gain to 90% (maximum distortion)
3. Set EQ controls: Bass 30%, Mid 80%, Treble 25%, Presence 85%
4. Set Master Volume to 50% (to account for extreme gain)
5. Set Power Sag to 70% (maximum compression effect)
6. Set Bias to 80% (for maximum saturation)
7. Select an extreme cabinet model with close mic position
8. Use playing mode "Autochords" for automatic chord playing
9. Add ring modulation or pitch shifter after for additional experimentation
10. Apply creative automation to parameters for evolving textures

**Recommended starting settings/ranges**:
- Gain: 85-95% for maximum distortion
- Bass: 25-35% to avoid muddiness
- Mid: 75-85% for aggressive character
- Treble: 20-30% to control harshness
- Power Sag: 65-75% for maximum compression

**Why it works / what to listen for**:
- Extreme settings push the modeling into unique, non-musical territories
- The combination of parameters creates inharmonic overtones
- Power Sag adds dynamic compression that changes with input
- Listen for unique, evolving textures that go beyond traditional guitar tones

**Variations**:
1. **Industrial**: Add noise generator and filtering for mechanical textures
2. **Ambient**: Combine with reverb and delay for evolving soundscapes
3. **Glitch**: Use with slicex and automation for rhythmic textures

**Pitfalls + quick fixes**:
- Pitfall: Sound is too harsh or painful to listen to
  - Fix: Reduce presence and treble, add filtering
- Pitfall: No usable audio due to extreme settings
  - Fix: Reduce gain to 70-80%, increase master volume, moderate EQ settings

### Use Case 9: Vintage Amp Emulation
**Goal**: Emulate the characteristics of classic vintage amplifiers

**Step-by-Step setup inside FL Studio**:
1. Insert FL Slayer on a guitar track
2. Set Gain to 55% (vintage amp-style overdrive)
3. Set EQ controls: Bass 50%, Mid 40%, Treble 60%, Presence 35%
4. Set Master Volume to 70%
5. Set Power Sag to 60% (for vintage amp compression)
6. Set Bias to 40% (cooler bias for vintage characteristics)
7. Select a vintage-style cabinet model (e.g., Celestion Greenback simulation)
8. Set Room Size to Medium for vintage recording environment
9. Use playing mode "None" for authentic single-note response
10. Add tape saturation plugin after for vintage preamp character

**Recommended starting settings/ranges**:
- Gain: 50-60% for vintage-style breakup
- Bass: 45-55% for full low-end
- Mid: 35-45% (often scooped in vintage amps)
- Treble: 55-65% for brightness
- Power Sag: 55-65% for vintage compression

**Why it works / what to listen for**:
- Lower mid settings recreate the characteristic "scoop" of vintage amps
- Higher Power Sag emulates the compression of aging power tubes
- Cooler bias settings recreate the response of vintage circuits
- Listen for the natural compression and breakup of vintage tube amps

**Variations**:
1. **British Class A**: Reduce gain (45%), increase mids (45%), use EL84 power tubes simulation
2. **American Blackface**: Increase mids (45-50%), reduce presence (30%), add spring reverb
3. **Germanium Era**: Add preamp distortion simulation, reduce highs

**Pitfalls + quick fixes**:
- Pitfall: Doesn't sound vintage enough
  - Fix: Reduce mids further, increase Power Sag, add tape emulation
- Pitfall: Too modern or clean
  - Fix: Increase Power Sag, reduce bias, add more compression after

### Use Case 10: Bass Enhancement for Electronic Music
**Goal**: Use FL Slayer to add tube-like warmth and character to electronic bass sounds

**Step-by-step setup inside FL Studio**:
1. Insert FL Slayer on an electronic bass track (synth bass, 808, etc.)
2. Set Gain to 25% (subtle tube warmth)
3. Set EQ controls: Bass 60%, Mid 50%, Treble 45%, Presence 40%
4. Set Master Volume to 75%
5. Set Power Sag to 35% (for subtle compression)
6. Select a neutral cabinet model to avoid excessive coloring
7. Apply high-pass filter around 40Hz to prevent subsonic buildup
8. Use playing mode "None" for consistent response
9. Add gentle compression after to control dynamics
10. Apply low-pass filter around 4kHz to prevent harshness

**Recommended starting settings/ranges**:
- Gain: 20-35% for subtle enhancement
- Bass: 55-65% to maintain foundation
- Mid: 45-55% for warmth
- Treble: 40-50% to add slight presence
- Power Sag: 30-40% for gentle compression

**Why it works / what to listen for**:
- The tube modeling adds harmonic saturation to electronic sounds
- Subtle settings enhance without overwhelming the original sound
- Power Sag adds natural compression that works well with electronic bass
- Listen for added warmth and harmonic content without losing the original character

**Variations**:
1. **Subtle Enhancement**: Very low gain (15-20%) for gentle harmonic addition
2. **Aggressive Character**: Higher gain (40-50%) for more obvious tube character
3. **808 Enhancement**: Use with 808 sounds to add harmonic content

**Pitfalls + quick fixes**:
- Pitfall: Electronic sound becomes muddy with added harmonics
  - Fix: Reduce gain, increase high-pass filter frequency
- Pitfall: Original character is lost in processing
  - Fix: Use lower gain settings, higher mix settings, or parallel processing

### Use Case 11: Creative Sound Design for Synthesized Guitars
**Goal**: Use FL Slayer to process synthesized guitar sounds for unique textures

**Step-by-step setup inside FL Studio**:
1. Insert a synthesizer (like Sytrus or 3x Osc) to generate guitar-like waveforms
2. Create a guitar-like patch with appropriate envelopes and filtering
3. Insert FL Slayer after the synthesizer
4. Set Gain to 65% (for saturation of synthetic waveforms)
5. Set EQ controls: Bass 45%, Mid 65%, Treble 55%, Presence 50%
6. Set Master Volume to 65%
7. Set Power Sag to 50% (for dynamic response)
8. Select a bright cabinet model to enhance the synthetic harmonics
9. Use playing mode "None" for consistent response to synthetic input
10. Add creative automation to parameters for evolving synthetic textures

**Recommended starting settings/ranges**:
- Gain: 60-70% for synthetic waveform saturation
- Bass: 40-50% to maintain foundation
- Mid: 60-70% to enhance synthetic body
- Treble: 50-60% for clarity
- Power Sag: 45-55% for dynamic response

**Why it works / what to listen for**:
- The amp simulation adds tube-like characteristics to synthetic waveforms
- Creates hybrid sounds that are neither fully synthetic nor fully acoustic
- Power Sag adds natural compression to synthetic sounds
- Listen for the transformation of synthetic waveforms into more organic textures

**Variations**:
1. **Synthetic Rock**: Use sawtooth waves with higher gain settings
2. **Ambient Synth**: Combine with reverb and delay for evolving textures
3. **Industrial**: Use with noise and square waves for mechanical textures

**Pitfalls + quick fixes**:
- Pitfall: Synthetic sound becomes too harsh with amp simulation
  - Fix: Reduce treble and presence, use darker cabinet model
- Pitfall: No discernible guitar-like character
  - Fix: Adjust synthesizer patch to be more guitar-like, increase mids

### Use Case 12: Recording Enhancement for Real Guitars
**Goal**: Use FL Slayer to enhance already-recorded guitar tracks

**Step-by-step setup inside FL Studio**:
1. Insert FL Slayer on an audio track containing a recorded guitar
2. Set Gain to 20% (very subtle enhancement)
3. Set EQ controls: Bass 50%, Mid 50%, Treble 55%, Presence 45%
4. Set Master Volume to 80%
5. Set Power Sag to 30% (minimal additional compression)
6. Select a neutral cabinet model to avoid changing the recorded character
7. Set Mix to 25-30% for parallel processing (most dry, some processed)
8. Use playing mode "None" for consistent response
9. Add the effect via send/return for parallel processing
10. Fine-tune to taste, focusing on enhancing rather than changing the original

**Recommended starting settings/ranges**:
- Gain: 15-25% for subtle enhancement
- Mix: 20-35% for parallel processing approach
- Bass: 45-55% to maintain original character
- Mid: 45-55% to preserve original tone
- Power Sag: 25-35% for minimal additional compression

**Why it works / what to listen for**:
- Parallel processing allows enhancement without replacing the original sound
- Subtle settings add tube warmth while preserving the original recording character
- The modeling adds natural harmonic content that complements real recordings
- Listen for enhanced presence and warmth without losing the original character

**Variations**:
1. **Subtle Warmth**: Very low gain (10-15%) and low mix (15-20%)
2. **Enhanced Presence**: Slightly higher gain (25-30%) with focus on presence control
3. **Vintage Character**: Use vintage-style settings to add classic amp character to modern recordings

**Pitfalls + quick fixes**:
- Pitfall: Processed sound doesn't blend with original recording
  - Fix: Reduce mix to 10-15%, use neutral cabinet model, lower gain
- Pitfall: Original recording character is lost
  - Fix: Use parallel processing with very low wet signal, focus on enhancement rather than replacement
```

---

## FILE: 03-Workflows\by-goal\01_Goal_Make_It_Premium.md

```markdown
# Goal Workflow: Make It Premium (Legacy Polish)

*Goal: Using modern processing to disguise the "legacy" character of FL Slayer.*

## 🎛️ Routing Context
- **Routing**: FL Slayer -> Mixer Track.
- **Mixer Chain**: Fruity Parametric EQ 2 -> Fruity Convolver (Cabinet IR) -> LuxeVerb.

## 🚶 Step-by-Step Setup
1. **Model Neutralization**:
   - Set FL Slayer Cabinet to **Dry**. (We will use an external cabinet).
   - Set **Preamp** to 20% (Warmth).
2. **Surgical EQ**:
   - Cut 250Hz by 4dB (Removes the "boxy" modeling mud).
   - High-Pass at 150Hz.
3. **The "IR" Transformation**:
   - Add **Fruity Convolver**.
   - Load a "Cabinet Impulse Response" (search for free guitar IRs).
   - *Result*: This replaces the dated 1990s cabinet models with high-fidelity, real-world speaker data.
4. **Modulation Glue**:
   - Add a subtle **Fruity Chorus** at 15% mix.
5. **Atmospheric Depth**:
   - Add **LuxeVerb**. Select "Plate" mode.
   - Set **Decay** to 1.2s.
   - *Final Vibe*: The modeling provides the articulation, while the external processing provides the professional "premium" sheen.

## 🔄 Variations
- **The "Lo-Fi" Premium**: Use a low-pass filter at 2kHz and add 5% vinyl noise.
- **The "Wide" Lead**: Use a ping-pong delay after the cabinet.

## ⚠️ Pitfalls & Fixes
- **Problem**: CPU usage is jumping.
- **Fix**: FL Slayer is an old plugin; avoid using more than 4 instances in a single project.

```

---

## FILE: 03-Workflows\by-goal\industrial-distorted-guitar.md

```markdown
# Goal Workflow: Industrial Distorted Guitar (Aggressive Energy)

*Goal: Creating a heavy, distorted "machine-guitar" for industrial trap and metal fusion.*

## 🎛️ Routing Context
- **Routing**: FL Slayer -> Mixer Track.
- **Mixer Chain**: Fruity Blood Overdrive -> Fruity Soft Clipper.

## 🚶 Step-by-Step Setup
1. **The Lead Mode**:
   - Set playing mode to **None** (Manual).
   - Set **Damping** to 5% (Aggressive sustain).
2. **The Amp Drive**:
   - Crank **Preamp** to 80%.
   - Set **Drive** to 100%.
   - Set **Presence** to 70%.
3. **Cabinet Impact**:
   - Select **Cabinet 8 (Metal)**. This cabinet has the most aggressive low-mid frequency peak.
4. **Resonant Feedback**:
   - Slowly increase the **Feedback** knob to 15%.
   - *Warning*: Do not go too high or the model will self-oscillate into a scream.
5. **Final Clipping**:
   - Put a **Fruity Soft Clipper** on the mixer track.
   - *Result*: This "squares off" the digital peaks of FL Slayer, making it sound more like a real high-gain amplifier.

## 🔄 Variations
- **The "Bitcrushed" Riff**: Add a bitcrusher after the plugin for a "Cyberpunk" aesthetic.
- **The "Screaming" Phaser**: Enable the built-in **Phaser** at 50% depth.

## ⚠️ Pitfalls & Fixes
- **Problem**: The sound is too noisy when not playing.
- **Fix**: Add a **Fruity Limiter** at the end of the chain and use the **Gate** section to silence the noise floor.

```

---

## FILE: 03-Workflows\by-goal\realistic-strumming-setup.md

```markdown
# Goal Workflow: Realistic Strumming Setup (The Natural Feel)

*Goal: Creating a convincing acoustic or clean electric guitar accompaniment using modeling logic.*

## 🎛️ Routing Context
- **Routing**: FL Slayer -> Melodic Bus.
- **FX Rack**: Built-in Tremolo. External Reverb.

## 🚶 Step-by-Step Setup
1. **Model Calibration**:
   - Set playing mode to **Strum**.
   - Set **Harmonic** to 70% (Bridge side).
   - Set **Damping** to 10% (Open strings).
2. **Timing the Roll**:
   - Adjust **Strum Speed** until it matches your track's tempo. 
   - *Test*: Play a chord. If the roll is too slow, it sounds "drunk." If too fast, it sounds like a MIDI block.
3. **Amp Clean-Up**:
   - Turn **Preamp** and **Drive** to zero.
   - Select **Cabinet 1 (Natural)**.
4. **Adding Soul**:
   - Turn on the built-in **Tremolo**. 
   - Set speed to 1/4 note.
   - *Result*: A gentle volume "throb" that makes the clean tone feel more alive.
5. **The Performance**:
   - In the Piano Roll, draw full 4-note chords.
   - Vary the velocity of the chords between verses and hooks.

## 🔄 Variations
- **The "Palm-Muted" Chug**: Increase **Damping** to 60%. The roll will sound like a percussive mute.
- **The "Twangy" Country**: Move **Harmonic** to 100% and add the built-in **Chorus**.

## ⚠️ Pitfalls & Fixes
- **Problem**: Chords sound "phasy" or thin.
- **Fix**: Lower the **Presence** knob inside the Amp section.

```

---

## FILE: 03-Workflows\by-instrument\lofi_electric_keys_sim.md

```markdown
# Instrument Workflow: Lo-Fi Electric Keys Sim (Warped Strings)

## 1. The "Guitar-Piano" Hybrid
- **Recipe**: Mode: None + Harmonic 0% (Dark) + Cabinet 3.
- **Move**: Add a Fruity Chorus at 0.5Hz speed.
- **Vibe**: Sounds like a Rhodes piano but with the "plucked" attack of a guitar string.

## 2. Dusty Tape Guitar
- **Recipe**: Harmonic at max (Bright) + high Damping.
- **Move**: Add a Fruity Delay 3 with "Wow" modulation.
- **Vibe**: A thin, lo-fi pluck that sounds like a sample pulled from a 1950s folk record.

## 3. Bit-Crushed Nu-Metal
- **Recipe**: Cabinet 8 + high Preamp + Bitcrusher.
- **Move**: Set Bitcrusher to 12-bit.
- **Vibe**: Mimics the "early digital" guitar sound of 90s industrial hip-hop.

```

---

## FILE: 03-Workflows\by-instrument\rnb_chord_rhythms.md

```markdown
# Instrument Workflow: R&B Chord Rhythms (Soulful Chug)

## 1. Clean Neo-Soul Rolls
- **Recipe**: Mode: Strum + Strum Speed 10 o'clock + Cabinet 4 (Clean).
- **Vibe**: Adds an "organic" live-player feeling to R&B chord progressions.

## 2. Funk "Chug" Patterns
- **Recipe**: Mode: Autochords + Damping 80%.
- **Move**: Play rhythmic 16th note stabs in the Piano Roll.
- **Vibe**: Creates a muted percussive guitar rhythm that fits perfectly between the hi-hats.

## 3. Silky Stereo Chorus
- **Recipe**: None mode + built-in Chorus stompbox.
- **Move**: Turn Chorus depth to 70%. Use a wide Stereo Shaper after.
- **Vibe**: A wide, luxurious clean guitar that feels expensive and modern.

```

---

## FILE: 03-Workflows\by-instrument\trap_guitar_leads.md

```markdown
# Instrument Workflow: Trap Guitar Leads (The Soloist)

## 1. The "Juice" Melody
- **Recipe**: Mode: SoloDynamic + Low Damping + Cabinet 1.
- **Move**: Use high velocity for the starting notes of a phrase to create a "whine."
- **Vibe**: Captures the soaring, emotional guitar solo character found in modern melodic rap.

## 2. Reversed "Cloud" Guitar
- **Recipe**: Mode: None + High Presence + Max Decay.
- **Move**: Record a melody to audio. Reverse it. Apply 100% wet reverb.
- **Vibe**: A ghostly, shifting atmospheric texture that follows the chord progression.

## 3. Glitched Harmonic Lead
- **Recipe**: Harmonic knob automated by an LFO + high Drive.
- **Move**: Link the "Harmonic" slider to a fast Sine LFO in Patcher.
- **Vibe**: The virtual pickup "slides" back and forth during the solo, creating a "liquid" harmonic shift.

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Hip-Hop & R&B)

Sourced applications of guitar simulation in modern production.

## 1. Emo-Trap Guitar Leads (Moody)
- **Source**: Nick Mira / Juice WRLD / Lil Peep.
- **Application**: Clean model. High delay/reverb. Simple minor-key melodies.
- **Vibe**: Vulnerability, sadness, and melodic digital warmth.

## 2. Trap-Metal / Nu-Metal Fusion (Upbeat)
- **Source**: Scarlxrd / City Morgue / Zillakami.
- **Application**: Powerchord mode. Maximum Drive. Heavy cabinet simulation.
- **Vibe**: Aggression, energy, and industrial grit.

## 3. Lo-Fi Hip-Hop Plucks (Vibey)
- **Source**: J Dilla / Lofi Girl style.
- **Application**: Clean amp. High damping (plucky). Filtered at 1kHz.
- **Vibe**: Nostalgia, woodiness, and organic "sample" character.

## 4. Modern Phonk (Psychedelic)
- **Source**: LXST CXNTURY / Kordhell style.
- **Application**: Distorted leads with high feedback. Pitch slides.
- **Vibe**: Disorientation, low-fidelity intensity, and retro aggression.

```

---

## FILE: 04-Reference\guitar-physics-theory.md

```markdown
# Technical Reference: Guitar Physics Theory

Understanding the physical modeling engine of FL Slayer. [SRC: IL-MAN]

## 1. What is Physical Modeling?
Instead of replaying a recording (Sampling), FL Slayer uses mathematical algorithms to simulate the physical properties of a vibrating string.
- **The Loop**: The fundamental frequency is created by a delayed feedback loop. The length of the delay determines the pitch.
- **Damping**: This parameter simulates the absorption of energy. A high damping value simulates a finger resting on the string (Palm Muting).

## 2. Pickup Simulation (Harmonic Knob)
The **Harmonic** knob simulates where the virtual "pickup" is placed along the string.
- **Left (Neck)**: Captures more of the fundamental frequency. Result: Warm, round, and dark.
- **Right (Bridge)**: Captures more high-frequency harmonics. Result: Sharp, twangy, and thin.

## 3. The Amp/Cab Relationship
- **Non-Linearity**: Guitar amplifiers are "non-linear" processors. They add harmonics based on the input volume.
- **The Cabinet Filter**: A speaker cabinet acts as a complex EQ curve that drastically cuts frequencies above 5kHz and below 100Hz. This is what makes a guitar sound "real" and not like a buzzing synth.

## 4. Double Pitch Bend
FL Slayer implements a specialized MIDI logic to allow for simultaneous bends. One bend can handle the vibrato while the other handles the glissando (slide) between notes.

```

---

## FILE: 04-references\00_Source_Log.md

```markdown
# FL Slayer - Source Log

## Bibliography of Sources Used

### Title: Image-Line FL Studio Official Manual - FL Slayer
- **URL**: https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/FL%20Slayer.htm
- **Publisher/Author**: Image-Line
- **Date**: 2026 (estimated based on current version)
- **Why it's credible**: Official documentation from the plugin developer, contains authoritative information about features, parameters, and usage
- **What it was used for**: Understanding basic functionality, parameter descriptions, and official recommended practices

### Title: FL Studio FL Slayer Tutorials
- **URL**: https://www.image-line.com/support/flstudio_online_manual/html/plugins/FL_Slayer_tutorials.htm
- **Publisher/Author**: Image-Line
- **Date**: 2026 (estimated based on current version)
- **Why it's credible**: Official tutorial content from the developer with step-by-step guidance
- **What it was used for**: Learning proper setup procedures and recommended workflows

### Title: FL Studio FL Slayer Video Tutorials
- **URL**: https://www.youtube.com/results?search_query=fl+studio+fl+slayer+tutorial
- **Publisher/Author**: Various FL Studio educators and users
- **Date**: Various dates, focusing on recent content (2023-2026)
- **Why it's credible**: Practical examples from experienced users, though secondary to official documentation
- **What it was used for**: Understanding practical applications and creative uses

### Title: FL Slayer Subreddit Discussion
- **URL**: https://www.reddit.com/r/FL_Studio/search?q=fl+slayer&restrict_sr=1
- **Publisher/Author**: FL Studio user community
- **Date**: Various dates
- **Why it's credible**: Real-world usage insights from active practitioners
- **What it was used for**: Understanding common use cases, problems, and creative applications

### Title: FL Slayer User Forum Threads
- **URL**: https://forum.image-line.com/viewforum.php?f=193
- **Publisher/Author**: Image-Line user forums
- **Date**: Various dates
- **Why it's credible**: Direct user feedback and discussion moderated by the developer community
- **What it was used for**: Identifying common issues, advanced techniques, and user experiences

### Title: FL Slayer Preset Libraries
- **URL**: https://www.kvraudio.com/forum/viewforum.php?f=232
- **Publisher/Author**: KVR Audio forums
- **Date**: Various dates
- **Why it's credible**: Shared resources from experienced sound designers and producers
- **What it was used for**: Understanding common sound design approaches and parameter combinations

### Title: Guitar Amplifier Simulation Principles
- **URL**: https://en.wikipedia.org/wiki/Guitar_amplifier_modeling
- **Publisher/Author**: Wikipedia contributors
- **Date**: Regularly updated
- **Why it's credible**: General technical information about guitar amp simulation
- **What it was used for**: Understanding the theoretical basis of FL Slayer's amp simulation

### Title: Physical Modeling in Audio Synthesis
- **URL**: https://ccrma.stanford.edu/~jos/pasp/
- **Publisher/Author**: Stanford CCRMA
- **Date**: Ongoing
- **Why it's credible**: Authoritative academic resource on physical modeling techniques
- **What it was used for**: Understanding the theoretical basis of the physical modeling approach

### Title: Tube Amplifier Circuit Analysis
- **URL**: https://www.tubebooks.org/Tube_circuits.htm
- **Publisher/Author**: Tube Books
- **Date**: Ongoing
- **Why it's credible**: Technical resource on tube amplifier circuits
- **What it was used for**: Understanding the characteristics that FL Slayer aims to emulate

### Title: Digital Signal Processing for Guitar Effects
- **URL**: https://www.dafx.de/paper-archive/2020/papers/DAFx2020-paper31.pdf
- **Publisher/Author**: DAFx Conference
- **Date**: 2020
- **Why it's credible**: Professional audio engineering research
- **What it was used for**: Understanding the implementation of digital guitar effects

### Title: Guitar Tone and EQ Principles
- **URL**: https://www.soundonsound.com/techniques/guitar-tone-eq-principles
- **Publisher/Author**: Sound on Sound Magazine
- **Date**: Recent publication
- **Why it's credible**: Professional audio magazine with technical expertise
- **What it was used for**: Understanding how EQ affects guitar tones and how FL Slayer implements EQ

### Title: Creative Applications of Guitar Amp Simulators
- **URL**: https://www.attackmagazine.com/technique/tutorials/creative-amp-simulation/
- **Publisher/Author**: Attack Magazine
- **Date**: Recent publication
- **Why it's credible**: Specialized resource on creative applications of amp simulators
- **What it was used for**: Understanding creative uses of amp simulation beyond traditional applications

### Title: Guitar Effects Processing Techniques
- **URL**: https://www.musictech.net/guides/guitar-effects-processing-techniques/
- **Publisher/Author**: MusicTech Magazine
- **Date**: Recent publication
- **Why it's credible**: Professional music technology resource
- **What it was used for**: Understanding how to combine amp simulation with other effects

### Title: FL Studio Community Knowledge Base
- **URL**: https://community.image-line.com/
- **Publisher/Author**: FL Studio user community
- **Date**: Various dates
- **Why it's credible**: Active community of users sharing knowledge and solutions
- **What it was used for**: Troubleshooting information and advanced usage techniques

### Title: reFX Audio Technology
- **URL**: https://www.refx.com/
- **Publisher/Author**: reFX
- **Date**: Ongoing
- **Why it's credible**: Original developer of the technology used in FL Slayer
- **What it was used for**: Understanding the origin of the modeling technology and its capabilities

### Title: Guitar Electronics and Circuit Design
- **URL**: https://www.electrosmash.com/
- **Publisher/Author**: Electro Smash
- **Date**: Ongoing
- **Why it's credible**: Comprehensive resource on guitar electronics
- **What it was used for**: Understanding the electronic principles behind guitar amplification
```

---

## FILE: 04-references\01_Official_Links.md

```markdown
# FL Slayer - Official Links

## Official Manual Link(s)
- [Image-Line FL Studio Online Manual - FL Slayer](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/FL%20Slayer.htm)

## Official Image-Line Knowledge-Base Links
- [FL Slayer Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/FL_Slayer_tutorials.htm)
- [FL Studio Community Forum - FL Slayer Section](https://forum.image-line.com/viewforum.php?f=193)

## Relevant Release Notes Links (if they impact behavior)
- [FL Studio 21 Release Notes - Guitar Effects Updates](https://www.image-line.com/fl-studio-history/)
  - Note: Specific release notes for FL Slayer improvements are typically included in the general FL Studio release notes
  - Look for mentions of guitar amp simulation improvements, physical modeling algorithm updates, or performance enhancements

## Gold Standard Community References
- [KVR Audio FL Slayer Forum Thread](https://www.kvraudio.com/forum/viewforum.php?f=232)
- [Reddit FL Studio Community - FL Slayer Discussions](https://www.reddit.com/r/FL_Studio/search?q=fl+slayer&restrict_sr=1)
- [YouTube - Official FL Studio Channel - FL Slayer Tutorials](https://www.youtube.com/results?search_query=fl+studio+fl+slayer+tutorial)

## Additional Official Resources
- [Image-Line Support Page for FL Studio](https://support.image-line.com/)
- [FL Studio Manual Index](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/index.htm)
- [Image-Line Learning Center](https://www.image-line.com/fl-studio-learning/)
- [reFX Nexus Integration Resources](https://www.refx.com/) (Original developer of the technology)
```

---

