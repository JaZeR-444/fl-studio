# Fruity Phaser - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Phaser - Resonant Sweep Effect

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██████╗ ██╗  ██╗ █████╗ ███████╗███████╗██████╗ 
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗██║  ██║██╔══██╗██╔════╝██╔════╝██╔══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██████╔╝███████║███████║███████╗█████╗  ██████╔╝
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██╔═══╝ ██╔══██║██╔══██║╚════██║██╔══╝  ██╔══██╗
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██║     ██║  ██║██║  ██║███████║███████╗██║  ██║
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Phaser / All-Pass Filter
**Category:** Effect / Modulation
**Official Manual:** [Image-Line Fruity Phaser Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Phaser.htm)

---

## 🎯 What is Fruity Phaser?

Fruity Phaser creates a "wooshy" or sweeping sound by passing audio through a series of **All-Pass Filters**. These filters shift the phase of specific frequencies, creating "notches" in the spectrum. When these notches are swept up and down via an LFO, it produces the classic psychedelic phaser sound. It is more organic and less metallic than a flanger.

**Key Capabilities:**
- **Multiple Stages:** Defines the number of notches (intensity).
- **Feedback:** Intensifies the resonant peaks.
- **Sweep Range:** Controls how far the frequency sweep goes.
- **Stereo Phase:** Creates swirling circular movement in the stereo field.
- **LFO Modulation:** Built-in speed and depth controls.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **phaser-vs-flanger-visualized.md**
3. Create **parameter-cheat-sheet.md**
4. Apply to a static White Noise and watch the notches on Parametric EQ 2.

### For Sound Designers:
1. Study **psychedelic-pad-design.md**
2. Review **robotic-vocal-textures.md** (High feedback settings)
3. Learn **static-notching.md** (LFO speed at 0)

### For Mix Engineers:
1. Study **adding-movement-to-hats.md**
2. Review **widening-mono-guitars.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Sweep:** LFO Speed.
  - **Min/Max Depth:** The frequency range of the sweep.
  - **Feedback:** Resonance amount.
  - **Notches:** The number of filter stages.
  - **Phase:** Stereo LFO offset.

- [ ] **all-pass-filter-basics.md**
  - Why a filter that lets all frequencies through can still change the sound.
  - How phase shift creates cancellation when mixed with the dry signal.

#### 02-Data/parameters/
- [ ] **phaser-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Phaser",
    "category": "Modulation",
    "parameters": [
      {
        "name": "Notches",
        "type": "knob",
        "description": "Number of frequency dips",
        "pro_tip": "Higher notches = more complex, harsher sound."
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **classic-70s-phaser.md**
  - Slow LFO.
  - Medium Feedback.
  - 4-8 Notches.
  - Applied to electric piano or guitar.

- [ ] **stereo-swirl-setup.md**
  - Maxing the Phase knob.
  - Result: L and R channels sweep in opposite directions.

- [ ] **extreme-resonance-fx.md**
  - High Feedback.
  - Fast LFO.
  - Creating "whistling" textures.

#### 03-Workflows/by-context/
- [ ] **techno-synth-modulation.md**
- [ ] **vocal-shimmer-setup.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **phaser-stage-theory.md**
  - What 4-stage, 8-stage, and 12-stage actually mean for the frequency response.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** The Swoosh

**Tasks:**
1. Put Phaser on a Pad
2. Increase Feedback
3. Adjust the Min/Max Depth to center the sweep
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does the "Notches" knob change the tone?
- What is the difference between this and Fruity Flanger? (Harmonic spacing vs All-pass spacing).

### Phase 2: Creative Application (Week 2)
**Goal:** Spatial Movement

**Tasks:**
1. Use the "Phase" knob to create a circular pan
2. Automate the "Sweep" speed for a buildup
3. Create stereo-swirl-setup.md

**Key Questions to Answer:**
- Can I use this as a static EQ? (Yes, set Sweep to 0 and use Min/Max to park the notches).

---

## 📊 Plugin Specifications to Document

### Engine
- Number of Stages (Min/Max)
- LFO Range (Hz)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it whistling? (Feedback is too high).
2. How do I make it subtler? (Lower the Mix or Reduce Notches).

---

## 📝 Documentation Standards

### For Each Workflow:
- **Rate:** Hz
- **Feedback:** %
- **Notches:** Count
- **Depth:** Range

---

## 🔗 Cross-Reference with Other Plugins

Fruity Phaser is often used with:
- **Fruity Flanger** (Layering modulation types)
- **Fruity Reverb 2** (Phasing the reverb tails)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Phaser/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── all-pass-filter-basics.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── phaser-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── classic-70s-phaser.md
│   │   ├── stereo-swirl-setup.md
│   │   └── extreme-resonance-fx.md
│
└── 04-Reference/
    └── phaser-stage-theory.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Phaser Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Phaser.htm)
- [Fruity Phaser Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Phaser_tutorials.htm)
- [Fruity Phaser Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+phaser+tutorial)

### Community Resources
- [Fruity Phaser Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+phaser&restrict_sr=1)
- [Fruity Phaser User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Phaser Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for visualizing the phaser notches
- **Wave Candy** for precise waveform analysis

### Recommended Learning Materials
- "Phasing Explained" - Understanding all-pass filters and phase shifting
- "Modulation Effects Comparison" - Differences between phaser, flanger, and chorus
- "Vintage Phaser Emulation" - Recreating classic hardware sounds

### Advanced Techniques
- **Static Notching:** Using zero LFO speed for fixed frequency notches
- **Stereo Swirling:** Using phase controls for circular panning effects
- **Feedback Resonance:** Using high feedback for intense resonant peaks

---

## 🧪 Experimental Techniques

### Advanced Phaser Applications
Creative uses of Fruity Phaser's capabilities:

**Static Notching:**
- **Fixed Frequency Notches:** Using zero LFO speed for static effects
  - Set sweep speed to 0 for fixed notches
  - Use for surgical EQ-like effects
  - Perfect for static frequency manipulation
  - Essential for fixed filtering applications
  - Useful for creative EQ applications

**Phase Modulation:**
- **Complex Phase Relationships:** Creating evolving phase patterns
  - Use automation to change phase relationships
  - Create evolving stereo field patterns
  - Perfect for evolving textures
  - Essential for dynamic phase effects
  - Useful for evolving stereo patterns

**Resonant Sweeping:**
- **Feedback-Enhanced Sweeping:** Using high feedback for intense effects
  - Increase feedback for resonant peaks
  - Create intense, whistling effects
  - Perfect for psychedelic sounds
  - Essential for vintage phaser sounds
  - Useful for intense modulation effects

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Dynamic Parameter Changes:** Automating parameters for evolving effects
  - Create evolving phaser characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic phaser expression
  - Use for expressive control

**Modulation Applications:**
- **Parameter Modulation:** Using external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Stage Processing:**
- **Complex Phaser Enhancement:** Multiple processing stages for sophisticated effects
  - Create multi-stage phaser enhancement
  - Apply different processing to different stages
  - Build sophisticated phaser processing chains
  - Perfect for advanced sound design
  - Use for complex processing

## 🎚️ Workflow Optimization

### Phaser Setup Workflows
Efficient approaches to using Fruity Phaser:

**Classic Phaser Setup:**
- **70s Rock Sound:** Creating the classic phaser sound
  - Use 4-8 notches for vintage character
  - Apply medium feedback for warmth
  - Use slow LFO for subtle movement
  - Essential for vintage rock production
  - Pro tip: Use on electric guitars and keyboards

- **Subtle Enhancement:** Adding gentle movement to sounds
  - Low feedback for subtle effect
  - Low notch count for smoothness
  - Medium LFO speed for natural movement
  - Essential for gentle enhancement
  - Pro tip: Use on vocals and pads for subtle movement

**Advanced Phaser Setup:**
- **Psychedelic Effects:** Creating intense phaser effects
  - High notch count for complexity
  - High feedback for resonance
  - Fast LFO for intense movement
  - Essential for psychedelic music
  - Pro tip: Use with caution to avoid harshness

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
- **Rhythmic Phasing:** Creating rhythmic phaser patterns
- **Build-up Effects:** Using phaser for tension building
- **Stereo Enhancement:** Adding width to electronic elements
- **Energy Management:** Using phaser for track energy
- **Transition Effects:** Creating smooth transitions between sections

### Hip-Hop and R&B
- **Vocal Enhancement:** Adding subtle movement to vocals
- **Synth Processing:** Creating movement in static synths
- **Mix Enhancement:** Adding movement to static elements
- **Creative Effects:** Adding unique character to elements
- **Spatial Effects:** Managing spatial characteristics

### Rock and Metal
- **Guitar Enhancement:** Adding classic phaser to guitar sounds
- **Bass Processing:** Creating subtle bass enhancement
- **Keyboard Enhancement:** Adding movement to keyboards
- **Mix Enhancement:** Using phaser for mix clarity
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Phasing:** Creating evolving textures
- **Spatial Effects:** Advanced spatial parameter control
- **Experimental Phasing:** Pushing boundaries of modulation
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Phaser works well with various effects:
- **Reverb:** Adding space to phased sounds
- **Delay:** Creating rhythmic patterns with phasing
- **Chorus:** Adding width to phased sounds
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of phased signals

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
Fruity Phaser was developed as a classic modulation effect:
- Created to provide authentic phasing capabilities
- Designed for organic, "wooshy" modulation effects
- Developed with rock and electronic music in mind
- Intended to complement other modulation effects

### Evolution Through FL Studio Versions
- Initially introduced with basic phasing capabilities
- Enhanced with additional parameters and controls
- Improved with better sound quality and stability
- Expanded with more sophisticated algorithms

### Impact on Music Production
Fruity Phaser has influenced music production by:
- Providing accessible phasing effects
- Enabling creative modulation workflows
- Facilitating stereo enhancement techniques
- Supporting various musical genres with flexible modulation

## 🧠 Advanced Processing Techniques

### Phaser Mastery
Advanced techniques for phaser processing:
- **All-Pass Filters:** Understanding phase shifting principles
- **Notch Control:** Managing frequency notch placement
- **Feedback Management:** Controlling resonance and intensity
- **Stage Count:** Understanding the impact of filter stages
- **Creative Applications:** Using phaser for unique effects

### Stereo Field Enhancement
Advanced stereo enhancement techniques:
- **Phase Control:** Using phase offset for width
- **L/R Separation:** Managing left/right differences
- **Spatial Imaging:** Creating immersive stereo effects
- **Width Management:** Controlling stereo field width
- **Creative Applications:** Using stereo for unique effects

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique phased textures
- **Atmospheric Processing:** Building ambient phased effects
- **Rhythmic Effects:** Creating rhythmic phaser patterns
- **Spatial Manipulation:** Creating immersive phased environments
- **Experimental Processing:** Pushing boundaries of phasing

## 📊 Performance Considerations

### CPU Usage
Managing Phaser's impact on system performance:
- **Filter Stage Count:** More stages increase CPU usage
- **Real-Time Performance:** Generally optimized for live performance
- **Instance Count:** Multiple instances multiply resource usage
- **Parameter Automation:** Automated parameters have minimal CPU impact
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Phase Coherence:** Maintaining phase relationships
- **Notch Quality:** Ensuring smooth frequency response
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output
- **Signal Integrity:** Preserving original signal quality

### System Integration
Optimizing Phaser within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimal audio latency

## 🛠️ Troubleshooting Common Issues

### Phasing Problems
- **Harsh Sound:** Reduce feedback or notch count
- **Phase Issues:** Check stereo field and width settings
- **Excessive Resonance:** Reduce feedback to prevent whistling
- **Poor Definition:** Adjust notch count and feedback for clarity
- **Muddy Low End:** Use high-pass filter or adjust low-end processing

### Technical Issues
- **High CPU Usage:** Reduce notch count or optimize parameters
- **Latency Issues:** Check buffer settings
- **Clipping:** Reduce feedback or input gain
- **Artifacts:** Check sample rate and bit depth settings
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Adjust feedback and notch settings
- **Lack of Character:** Increase feedback or notch count
- **Poor Integration:** Use appropriate settings for the source
- **Overpowering:** Reduce feedback or notch count to balance
- **Lack of Control:** Use automation for dynamic changes

## 🎚️ Advanced Configuration

### Custom Phaser Setups
Creating and managing custom phaser configurations:
- **Vintage Setups:** Optimized for 70s-style phasing applications
- **Subtle Enhancement:** Configured for gentle movement applications
- **Creative Setups:** Set up for sound design applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple Phaser instances effectively:
- **Channel-Specific:** Different instances for different channels
- **Parallel Processing:** Multiple instances in parallel
- **Performance Optimization:** Managing multiple instances
- **Creative Applications:** Combining different phaser effects

### Integration Configurations
Optimizing for different integration scenarios:
- **Insert Processing:** Inline processing configurations
- **Send Processing:** Effects return configurations
- **Hardware Integration:** External hardware integration
- **DAW Integration:** Optimizing for FL Studio workflow

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Phaser techniques
- **Reddit Groups:** Sharing phasing techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced phasing techniques
- **Written Guides:** In-depth articles on all-pass filtering
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting Phaser configurations
- **Technique Sharing:** Platforms for sharing processing methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a classic "Small Stone" or "Phase 90" style preset
- [ ] Explain why All-pass filters are used instead of Delay lines
- [ ] Use the phaser to add width without changing the pitch
- [ ] Set up a vintage 70s rock phaser sound with 4-8 notches
- [ ] Create a subtle phasing effect for vocal enhancement
- [ ] Use the Phase control for stereo swirling effects
- [ ] Apply appropriate feedback settings for different musical genres
- [ ] Create static notching effects using zero LFO speed
- [ ] Troubleshoot harshness and whistling issues effectively
- [ ] Integrate Phaser into efficient modulation workflows
- [ ] Create complex phaser automation patterns with smooth transitions
- [ ] Set up a stereo swirling effect using the Phase control
- [ ] Use high feedback settings for intense resonant effects
- [ ] Apply stereo widening techniques using the Phase control
- [ ] Create rhythmic phaser patterns with precise timing
- [ ] Combine Phaser with other modulation effects for complex results
- [ ] Use automation to create evolving phaser characteristics
- [ ] Design custom phaser patches for specific musical contexts
- [ ] Optimize Phaser settings for minimal CPU usage
- [ ] Use Phaser for creative sound design applications beyond traditional phasing
- [ ] Set up advanced routing for complex phaser projects
- [ ] Apply Phaser in live performance scenarios
- [ ] Create experimental phaser effects with extreme settings
- [ ] Combine Phaser with other effects for layered processing
- [ ] Integrate Phaser with other automation tools seamlessly
- [ ] Create custom phaser workflows for specific creative needs
- [ ] Use Phaser effectively in large, complex projects
- [ ] Generate complex rhythmic patterns with parameter automation
- [ ] Create hybrid modulation effects combining phaser with other modulators
- [ ] Apply Phaser in mastering contexts with appropriate care
- [ ] Create complex multi-stage phaser chains with smooth automation
- [ ] Design custom all-pass filter configurations for unique phase effects
- [ ] Use Phaser for formant-like filtering applications
- [ ] Apply advanced notch control for precise frequency manipulation
- [ ] Create genre-specific phaser presets for efficient workflow
- [ ] Combine Phaser with external hardware for hybrid processing
- [ ] Use Phaser for creative vocal processing applications
- [ ] Integrate Phaser with other spectral processing tools
- [ ] Apply Phaser in surround sound or multi-channel setups
- [ ] Create complex phase relationships using multiple instances
- [ ] Use Phaser for audio restoration and creative repair applications

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Phaser

## Purpose & Identity
Fruity Phaser is a classic **modulation effect** that creates a "wooshy," sweeping sound. Unlike a Flanger (which uses micro-delays), a Phaser uses a series of **All-Pass Filters** to shift the phase of specific frequencies. This creates "notches" in the spectrum that move back and forth, producing an organic, liquid texture that is a staple of psychedelic and soulful music. [SRC: IL-MAN]

## 60-Second Mental Model
Imagine a comb moving back and forth through your audio spectrum. The "Teeth" of the comb are the **Notches** where certain frequencies are cancelled out. As the comb moves (**Sweep**), you hear the characteristic swirling sound. Because it doesn't use delays, it sounds smoother and less metallic than a flanger.

## Hip-Hop / R&B Context
- **The Soulful Rhodes:** Adding a slow, 4-stage phaser to a Rhodes piano to get that classic 70s R&B/Neo-Soul movement (Vibey).
- **Spacey Synth Leads:** Using a wide stereo phaser to make a lead synth feel like it's rotating around the listener's head (Spacey).
- **Warped Hi-Hats:** Using a high-feedback phaser on trap hi-hats to give them a metallic, "alien" character (Psychedelic).

## When To Use
- When you want **organic, liquid movement** in a sound.
- When you want to **widen a mono instrument** without using a Haas delay.
- When you need a **vintage "Retro" character** for keys or guitars.

## When NOT To Use
- **Sub-Bass:** Phasing the low-end will cause inconsistent bass levels and phase cancellation in clubs.
- **Aggressive Metallic Textures:** Use **Fruity Flanger** if you want that "Jet Engine" or "Robot" sound. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Phaser

## UI Tour
1.  **SWEEP Knob:** Controls the LFO speed (Rate). How fast the notches move. [SRC: IL-MAN]
2.  **MIN/MAX DEPTH Knobs:** Define the frequency boundaries of the sweep (The "Bottom" and "Top" of the woosh).
3.  **FEEDBACK Knob:** Sends the processed signal back into the input. Higher settings create sharp, resonant "whistling" peaks.
4.  **NOTCHES Slider:** Sets the number of filter stages. 
    - **Low (4-8):** Warm, vintage sound.
    - **High (12-24):** Intense, metallic, robotic sound.
5.  **PHASE Knob:** Sets the stereo offset of the LFO. 
    - **0%:** L and R move together (Mono-ish).
    - **100%:** L and R move in opposite directions (Swirling Stereo).

## Functional Flow
1.  **Input:** Audio enters.
2.  **All-Pass Chain:** The signal passes through the number of stages set by the "Notches" parameter.
3.  **LFO Modulation:** The internal LFO moves the center frequency of these filters between the Min and Max depths.
4.  **Feedback Loop:** A portion of the output is mixed back into the input (if Feedback > 0).
5.  **Summing:** The phased signal is mixed with the original dry signal to create the audible "notches."
6.  **Output:** Final audio.

## Things Beginners Misunderstand
- **Notches vs EQ:** Increasing "Notches" doesn't make the sound brighter; it makes the frequency response more complex and "jagged."
- **Feedback Whistle:** If your phaser is "screaming," your Feedback is likely above 70%. [SRC: REPUTABLE]
- **Dry/Wet:** Like a chorus, a phaser **needs** the dry signal to work. If you set it to 100% wet, you might only hear a subtle pitch-vibrato rather than the "woosh." [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Phaser

## 1. The "Small Stone" Vintage Vibe
To get that classic 70s R&B guitar or Rhodes sound:
- **Technique:** Use **4 or 6 Notches**. Set **Sweep** to a slow speed (approx 0.5 Hz).
- **Amount:** Set Feedback to **30%**.
- **Result:** A warm, organic "breath" that adds soul to digital samples.

## 2. The "Jet-Stream" Build-up
- **Technique:** Automate the **FEEDBACK** and **SWEEP** knobs during a riser.
- **Execution:** Start with 0% Feedback and slow speed. As the drop approaches, ramp Feedback to 80% and Sweep to a fast flutter.
- **Result:** The sound transforms into a resonant "whistle" that builds massive energy.

## 3. Harmonic "Talk-Box"
- **Technique:** Use **Notches** set to 12 or more. Set **Feedback** to 60%.
- **Execution:** Set **Sweep** to 0. Right-click the **MIN DEPTH** knob and link it to an automation clip or your Mod Wheel.
- **Effect:** Manually sweeping the depth allows you to find "vowel" sounds (Ooh, Aah) within the synth. [SRC: REPUTABLE]

## 4. Wide "Binaural" Swirling
- **Technique:** Turn the **PHASE** knob to **100%**.
- **Result:** The left ear will sweep "up" while the right ear sweeps "down."
- **Why:** This is the secret to making background vocals feel wide and expensive without taking up space in the center.

## Common Pitfalls + Fixes
- **Pitfall:** "The phaser is too quiet/loud."
  - **Fix:** Phasers naturally cause volume fluctuations as frequencies cancel out. Use **Fruity Limiter** after the phaser to level out the "peaks."
- **Pitfall:** "The mix sounds muddy."
  - **Fix:** Reduce the **NOTCHES**. High notch counts create many dips in the frequency spectrum, which can make a sound lose its "core" body. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Phaser

Phaser translates vibes through **Spectral Swirling** and **Phase Rotation**.

## 1. Vibey (Smooth, Soulful, Vintage)
- **Concept:** "The Neo-Soul Drift."
- **Levers:**
  - **Notches:** 4.
  - **LFO Speed:** Very slow (0.2Hz - 0.5Hz).
  - **Feedback:** Low (20%).
- **Listen For:** A gentle, warm movement that makes the sound feel "alive" and expensive.
- **Don't Do This:** Avoid high notch counts; stay simple for soulful vibes.

## 2. Spacey (Galactic, Rotating, Immersive)
- **Concept:** "The Orbital Swirl."
- **Levers:**
  - **Stereo Phase:** 180 degrees (Maximum).
  - **Sweep Range:** Wide.
  - **Mix:** 50%.
- **Listen For:** The sound circling your head. One ear sweeps up while the other sweeps down, creating a 3D sense of space.

## 3. Psychedelic (Warped, Intense, Whistling)
- **Concept:** "The Resonant Scream."
- **Levers:**
  - **Feedback:** High (80%+).
  - **Notches:** 12 (Maximum).
  - **LFO Speed:** Moderate.
- **Listen For:** A sharp, whistling resonance that highlights different overtones as it sweeps. It sounds "trippy" and unstable.

## 4. Upbeat (Kinetic, Rhythmic, Energetic)
- **Concept:** "The Rhythmic Filter."
- **Levers:**
  - **LFO Speed:** Fast (match the beat, e.g., 2Hz or 4Hz).
  - **Notches:** 8.
- **Listen For:** A "chugging" spectral movement that adds a rhythmic pulse to static synth chords.

## 5. Moody (Damp, Claustrophobic, Tense)
- **Concept:** "The Static Notch."
- **Levers:**
  - **LFO Speed:** Zero (Static).
  - **Freq Range:** Park the notches in the low-mids (around 400Hz).
- **Listen For:** A "hollow," boxy character that doesn't move, making the sound feel stuck and lonely. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\complete-guide.md

```markdown
# Fruity Phaser – Complete Production Guide

## Overview
Classic phaser effect that creates sweeping, swooshing movement by using phase cancellation and modulation.

## Core Parameters

### Shape Controls
- **Frequency**: Center frequency of phaser sweep
- **Depth**: How wide the sweep range is
- **Stereo**: Phase offset between L/R channels
- **Stages**: Number of phase shift stages (more = deeper effect)

### Modulation
- **LFO Rate**: Speed of automatic sweep
- **LFO Depth**: Amount of LFO modulation
- **Feedback**: Resonance/intensity of effect

### Mix
- **Dry/Wet**: Balance between original and effected signal

## Hip-Hop Applications

### Synth Movement (Melodic Hip-Hop)
**Settings**:
- Frequency: 400-800Hz
- Depth: 40-60%
- LFO Rate: 1/4 - 1/2 note
- Stages: 6-8
- Wet: 30-50%

**Result**: Lush, moving pad textures

### Hi-Hat Texture (Trap)
**Settings**:
- Frequency: 2-4kHz
- Depth: 30%
- LFO Rate: 1/8 note
- Stages: 4
- Wet: 20-40%

**Result**: Rhythmic hi-hat movement

### Vocal Effect (Experimental)
**Settings**:
- Frequency: 600-1.2kHz
- Depth: 50%
- LFO Rate: 1/2 note
- Feedback: 40%
- Wet: 25%

**Result**: Spacey, modulated vocal texture

### Bass Wobble (Electronic Hip-Hop)
**Settings**:
- Frequency: 200-400Hz
- Depth: 60%
- LFO Rate: 1/4 note
- Stages: 6
- Feedback: 30%

**Result**: Pulsing bass movement

## Genre-Specific Presets

### Trap/Modern
`\`\`json
{
  "name": "Trap Sweep",
  "frequency": 1000,
  "depth": 45,
  "lfoRate": 0.25,
  "stages": 6,
  "feedback": 25,
  "wet": 35,
  "use": "Hi-hats, percussion, synth textures"
}
`\`\`

### Boom Bap
`\`\`json
{
  "name": "Classic Sweep",
  "frequency": 600,
  "depth": 50,
  "lfoRate": 0.5,
  "stages": 8,
  "feedback": 40,
  "wet": 30,
  "use": "Sample movement, drum transition"
}
`\`\`

### Lo-Fi
`\`\`json
{
  "name": "Vintage Phase",
  "frequency": 400,
  "depth": 60,
  "lfoRate": 0.125,
  "stages": 4,
  "feedback": 35,
  "wet": 25,
  "use": "Pads, keys, overall vibe"
}
`\`\`

### Melodic
`\`\`json
{
  "name": "Dreamy Motion",
  "frequency": 800,
  "depth": 55,
  "lfoRate": 0.33,
  "stages": 10,
  "feedback": 30,
  "wet": 40,
  "use": "Synth pads, atmospheric elements"
}
`\`\`

## Creative Workflows

### Build-Up Sweep
1. Start with wet at 0%
2. Automate wet to 80% over 8 bars
3. Increase feedback simultaneously
4. Creates rising tension
5. **Use**: Pre-chorus build, transitions

### Rhythmic Gating
1. Set fast LFO rate (1/8 or 1/16)
2. High depth (70%)
3. Moderate feedback
4. **Result**: Choppy, rhythmic texture
5. **Use**: Hi-hats, shakers, textures

### Stereo Widening
1. Set stereo to 100%
2. Moderate LFO rate
3. Low wet mix (20%)
4. **Result**: Subtle stereo movement
5. **Use**: Pads, synths, backing vocals

### Automated Filter Alternative
1. Link frequency to automation
2. Low LFO depth
3. Manual sweep control
4. **Use**: Filter sweep without filter

## Mixing Tips

### Do's
- ✓ Use subtle wet amounts (20-40%)
- ✓ Sync LFO to tempo
- ✓ Automate for builds/transitions
- ✓ Layer with other effects

### Don'ts
- ✗ Over-use on every element
- ✗ Too much feedback (harsh)
- ✗ Phase bass frequencies (mono issues)
- ✗ Forget to A/B test

## By Instrument

### Synths/Pads
- Frequency: 500-1000Hz
- Depth: 50-60%
- Wet: 30-50%
- Creates lush movement

### Hi-Hats
- Frequency: 2-5kHz
- Depth: 30-40%
- Wet: 20-35%
- Adds texture without overpowering

### Vocals
- Frequency: 600-1.2kHz
- Depth: 40%
- Wet: 15-25%
- Subtle effect, not obvious

### Bass (Careful!)
- Frequency: 300-500Hz
- Depth: 30%
- Wet: 15-20%
- Check mono compatibility

### Percussion
- Frequency: 800-2kHz
- Depth: 40-50%
- Wet: 25-40%
- Adds movement to loops

## Advanced Techniques

### Parallel Phasing
1. Send to aux track
2. Phaser on aux
3. Blend to taste
4. Maintains punch while adding movement

### Sidechain Modulation
1. Link phaser wet to Peak Controller
2. Rhythmic phaser amount
3. Pumping phase effect

### Multi-Band Phasing
1. Split signal with Patcher
2. Phaser on mids only
3. Keep bass/highs clean

## Troubleshooting

**Too harsh**: Lower feedback, reduce stages

**Not noticeable**: Increase depth and wet mix

**Sounds thin in mono**: Reduce stereo amount, check bass frequencies

**Too fast/slow**: Adjust LFO rate to tempo sync

```

---

## FILE: 01-Learning\Concepts\signal-flow.md

```markdown
# Signal Flow: Fruity Phaser

Phasing is created by shifting the *phase* of the audio at specific frequencies using All-Pass Filters.

`\`\`mermaid
graph LR
    Input[Input Audio] --> Split{Splitter}
    Split --> Dry[Dry Signal]
    Split --> FilterChain[Chain of All-Pass Filters]
    
    LFO[LFO Modulator] -- Moves Filter Peaks --> FilterChain
    
    FilterChain --> Wet[Wet Phase-Shifted Signal]
    Wet -- Feedback --> FilterChain
    
    Dry --> Mix[Mixer Sum]
    Wet --> Mix
    Mix --> Output[Output Audio]
`\`\`

### Stages
1.  **Split**: Audio is copied.
2.  **All-Pass Filters**: These filters do not cut volume, but they change the *timing* (phase) of specific frequencies.
3.  **LFO**: Moves the frequencies affected by the All-Pass filters up and down.
4.  **Mix**: When the "Phase Shifted" signal is mixed with the "Dry" signal, frequencies that are out of phase cancel each other out, creating moving notches in the spectrum.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Phaser (5 Minutes)

1.  **Insert:** Load **Fruity Phaser** onto a synth or electric piano.
2.  **Stages:** Turn the **NOTCHES** knob to `4` for a smooth sound, or `12` for a crazy sound.
3.  **Intensity:** Increase the **FEEDBACK** knob to hear the "whistle" of the sweep.
4.  **Width:** Turn the **PHASE** knob to the right to make the sweep move in stereo.
5.  **Speed:** Adjust the **SWEEP** knob to set how fast the "woosh" happens.
6.  **Range:** Use the **MIN/MAX DEPTH** sliders to choose which frequencies get phased (usually keep them wide).
7.  **Tip:** Set **SWEEP** to zero if you want a static "Hollow" EQ effect. [SRC: IL-MAN]
```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity Phaser

- **High Notch Mud:** Using 24 notches on a sound that is already dark. This creates a "filtered" sound that lacks presence. **Fix:** Use 4-8 notches for most melodic duties.
- **Feedback Overload:** Turning Feedback to 100% and leaving it there. This creates a painful sine-whistle that can damage speakers. **Fix:** Only use high feedback for temporary transitions or build-ups.
- **Mix Level Confusion:** Expecting the sound to be louder with the phaser on. Phasing by definition uses cancellation. **Fix:** Turn up the mixer slot volume if the signal feels "thinner" than the dry version.
- **Mono Bass Phasing:** Putting a phaser on your sub-bass. This will cause the bass to "pulse" in and out of phase, ruining the low-end drive. **Fix:** Always High-Pass the signal before phasing.
- **Static Depth:** Never moving the Min/Max depth knobs. The default range might not be the "sweet spot" for your instrument. **Fix:** Tweak the Min/Max while the LFO is moving to find the most musical sweep range. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points: Fruity Phaser

| Goal | Notches | Feedback | Sweep | Phase | Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **70s Soul** | 4-6 | 35% | 0.2 Hz | 20% | Smooth Rhodes / Guitar. |
| **Robotic Pad** | 16 | 60% | 1.5 Hz | 50% | Modern EDM/Trap textures. |
| **Hi-Hat Shine** | 4 | 10% | 4.0 Hz | 100% | Fast, fluttering hats. |
| **The "Vortex"** | 24 | 85% | 0.1 Hz | 100% | Slow, intense space warping. |
| **Talkbox Lead** | 12 | 70% | Static | 0% | Automated "Min Depth" sweeps. |

*Note: For the "Talkbox" effect, set Sweep to 0 and automate the Depth knobs manually.* [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Starting Points: Moody (Fruity Phaser)

- **The Goal:** A submerged, "haunted" atmosphere that feels like shifting fog.
- **Recipe:**
  1. Load Phaser on a **Sustained Pad**.
  2. Set Notches to **4**.
  3. Set Feedback to **15%** (Subtle).
  4. Set Sweep to **0.05 Hz** (Exceedingly slow).
  5. Set **Max Depth** to 50% (prevents the sweep from getting too bright).
- **Result:** A slow, liquid transformation of the pad's harmonics. It sounds like the sound is "breathing" underwater.
- **Mix Tip:** Place a dark Reverb *after* the phaser to diffuse the notches and make them feel more atmospheric. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey

## Upbeat (The "Electric Shimmer")
- **Setup:** Phaser on Hi-Hats.
- **Move:** Fast Sweep (5 Hz), 4 Notches, Phase 100%.
- **Effect:** The hi-hats gain a metallic, fluttering width that adds "kinetic" energy to the groove.

## Psychedelic (The "Frequency Warp")
- **Setup:** High-resonance lead synth.
- **Move:** 24 Notches, 80% Feedback, slow Sweep.
- **Effect:** Intense, screaming frequency peaks that move in a trippy, circular motion.

## Jazzy (The "Suitcase Modulation")
- **Setup:** Clean Electric Piano.
- **Move:** 6 Notches, 40% Feedback, 0.8 Hz Sweep.
- **Context:** Perfect for that vintage "Herbie Hancock" or modern neo-soul vibe.

## Vibey (The "Expensive Halo")
- **Setup:** Background Vocal Bus.
- **Move:** 8 Notches, 20% Feedback, 0.3 Hz Sweep, Phase 100%.
- **Context:** Adds a wide, shimmering "glow" to the backup vocals that doesn't distract from the lead. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Phaser: Cheat Sheet

Creates a rippling, sweeping effect by passing the signal through a series of "All-Pass" filters.

## Parameters

| Parameter | Function | Context / Tip |
| :--- | :--- | :--- |
| **Sweep Freq** | The center frequency range where the phasing occurs. | **Tip:** Determines the "pitch" of the phaser sound. |
| **Min / Max Depth** | Sets the range of the LFO sweep. | **Tip:** A large gap between Min and Max creates a very wide, dramatic sweep. A small gap is subtle. |
| **Freq. Range** | "Large" vs "Small". | **Tip:** Large covers more octaves, creating a more drastic effect. |
| **Stereo** | Offsets the phase of the LFO between L/R channels. | **Tip:** **Crucial for width.** Increase to make the sound swirl around the head. |
| **Stages** | Number of filters used (2, 4, 8...). | **Tip:** More stages = more "ripples" or notches in the spectrum. 4 is classic 70s rock. 8 is dense and sci-fi. |
| **Feedback** | Resonance. | **Tip:** Like Flanger, high feedback makes the effect scream. |

## Quick Reference
*   **Best For:** Electric Piano (Rhodes), Funky Guitars, Synth Pads.
*   **Key Distinction:** Unlike Flanger (Time based), Phaser is *Filter* based. It sounds smoother and more "watery".

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Phaser

| Parameter | Type | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Sweep (Rate)** | Knob | **Upbeat** | **Motion** | LFO modulation speed. |
| **Feedback** | Knob | **Psychedelic** | **Resonance** | Intensity of the peaks. |
| **Notches** | Knob | **Vibey** (Simple) | **Density** | Number of filter stages. |
| **Min/Max Depth**| Slider | **Moody** | **Spectral** | Frequency range of the sweep. |
| **Phase** | Knob | **Spacey** (Width) | **Stereo** | L/R LFO phase offset. |

- **Vibe Impact Tag (Swirl):** Maxing the **Phase** knob creates the "Orbital" effect essential for Spacey atmospheres.
- **Mix Impact Tag (Clarity):** High notch counts can "thin out" a sound by removing too much frequency content. [SRC: IL-MAN]
```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity Phaser",
  "parameters": [
    {
      "id": "stages",
      "name": "Stages",
      "type": "selector",
      "options": ["2", "4", "6", "8", "etc"],
      "defaultValue": "4",
      "description": "Number of all-pass filter stages."
    },
    {
      "id": "min_depth",
      "name": "Min Depth",
      "type": "knob",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "defaultValue": 0,
      "description": "Lowest point of the LFO sweep."
    },
    {
      "id": "max_depth",
      "name": "Max Depth",
      "type": "knob",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "defaultValue": 100,
      "description": "Highest point of the LFO sweep."
    },
    {
      "id": "speed",
      "name": "Speed",
      "type": "knob",
      "range": { "min": 0, "max": 5, "unit": "Hz" },
      "defaultValue": 0.2,
      "description": "Rate of the LFO modulation."
    }
  ]
}

```

---

## FILE: 02-Data\presets\hip-hop-presets.json

```json
{
  "presets": [
    {
      "name": "Trap Hi-Hat Shimmer",
      "category": "texture",
      "subgenre": "trap",
      "parameters": {
        "frequency": 3000,
        "depth": 35,
        "lfoRate": 0.125,
        "stages": 6,
        "feedback": 20,
        "stereo": 50,
        "wet": 28
      },
      "description": "Subtle rhythmic movement on hi-hats",
      "instrument": "hi-hats"
    },
    {
      "name": "Melodic Pad Sweep",
      "category": "movement",
      "subgenre": "melodic",
      "parameters": {
        "frequency": 800,
        "depth": 55,
        "lfoRate": 0.33,
        "stages": 10,
        "feedback": 30,
        "stereo": 70,
        "wet": 42
      },
      "description": "Lush, evolving pad texture",
      "instrument": "synth-pads"
    },
    {
      "name": "Boom Bap Classic",
      "category": "vintage",
      "subgenre": "boom-bap",
      "parameters": {
        "frequency": 600,
        "depth": 50,
        "lfoRate": 0.5,
        "stages": 8,
        "feedback": 40,
        "stereo": 30,
        "wet": 30
      },
      "description": "Classic phaser sweep for samples",
      "instrument": "samples"
    },
    {
      "name": "Lo-Fi Wobble",
      "category": "vibe",
      "subgenre": "lo-fi",
      "parameters": {
        "frequency": 400,
        "depth": 60,
        "lfoRate": 0.125,
        "stages": 4,
        "feedback": 35,
        "stereo": 40,
        "wet": 25
      },
      "description": "Slow, vintage phaser character",
      "instrument": "keys"
    },
    {
      "name": "Vocal Space",
      "category": "creative",
      "subgenre": "experimental",
      "parameters": {
        "frequency": 1000,
        "depth": 45,
        "lfoRate": 0.5,
        "stages": 6,
        "feedback": 25,
        "stereo": 60,
        "wet": 20
      },
      "description": "Spacey vocal modulation",
      "instrument": "vocals"
    },
    {
      "name": "Bass Pulse",
      "category": "movement",
      "subgenre": "electronic",
      "parameters": {
        "frequency": 300,
        "depth": 50,
        "lfoRate": 0.25,
        "stages": 6,
        "feedback": 30,
        "stereo": 20,
        "wet": 18
      },
      "description": "Pulsing bass movement (check mono!)",
      "instrument": "bass"
    },
    {
      "name": "Transition Sweep",
      "category": "fx",
      "subgenre": "all",
      "parameters": {
        "frequency": 1200,
        "depth": 70,
        "lfoRate": 0.25,
        "stages": 8,
        "feedback": 50,
        "stereo": 80,
        "wet": 65
      },
      "description": "Dramatic sweep for transitions",
      "instrument": "fx",
      "automation": "Increase wet over 4-8 bars"
    },
    {
      "name": "Percussion Texture",
      "category": "texture",
      "subgenre": "all",
      "parameters": {
        "frequency": 1500,
        "depth": 40,
        "lfoRate": 0.25,
        "stages": 6,
        "feedback": 28,
        "stereo": 45,
        "wet": 32
      },
      "description": "Movement on percussion loops",
      "instrument": "percussion"
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Phaser)

## 1. The "Center Channel" Rule
- **Rule:** Don't phase the Kick or the 808.
- **Reason:** Phasing causes volume fluctuations and phase cancellation in the low-end. Keep your low-end solid and static. [SRC: REPUTABLE]

## 2. R&B "Rhodes" Protocol
- **Rule:** Slow and Simple.
- **Application:** Use a 4-stage phaser with a very slow LFO (under 1Hz). This mimics the classic sound of 1970s soul records (Vibey).

## 3. Mono-Compatibility
- **Rule:** Extreme stereo phasing can disappear in mono.
- **Check:** Press the **MONO** button on your Master. If your wide phaser lead suddenly sounds quiet or "hollow," reduce the **PHASE** knob.

## 4. Automation for Build-ups
- **Rule:** Speed = Energy.
- **Application:** Gradually automate the **Sweep** knob from slow to fast during the last 4 bars of a verse to build tension before the hook (Upbeat).

## 5. Parallel Clarity
- **Rule:** Don't drown the signal.
- **Application:** Use the **MIX** knob at 30-50%. Phasing is most effective when the "dry" signal is still audible to provide a solid foundation. [SRC: IL-MAN]
```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity Phaser

## 1. "Tame Impala" Psychedelic Drums
**Goal:** Make drums feel like they are "melting" or swimming.

1.  Put Fruity Phaser on your Drum Bus.
2.  Set **Speed** very slow.
3.  Set **Feedback** to around 60-70% (High resonance).
4.  Set **Stages** to high (10 or 12).
    *   *Result:* The entire drum kit will slowly morph through a liquid texture, perfect for psychedelic rock sections.

## 2. Funky Rhodes/Keys
**Goal:** Classic 70s keyboard movement.

1.  Insert on Electric Piano.
2.  Set **Speed** faster (roughly 1-2 Hz).
3.  Set **Stereo** spread to roughly 25%.
4.  Set **Min Depth** and **Max Depth** relatively close to each other (e.g., 40% and 60%).
    *   *Why?* We don't want a massive sweep, just a subtle, nervous vibration around the mid-range.
    *   *Result:* Adds life and stereo width to static chords.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: The "Spacey Orbital" Lead (Fruity Phaser)

## Routing Context
- **Target:** A sustained Synth Lead or Pad.
- **Position:** Insert FX (After Reverb).

## Step-by-Step Setup
1.  On your lead track, load **Fruity Phaser**.
2.  Set **NOTCHES** to `8`.
3.  Set **FEEDBACK** to `40%`.
4.  Set **SWEEP** (Speed) to a very slow rate (approx. `0.2Hz`).
5.  **The Secret:** Turn the **PHASE** knob to `100%`.
6.  **The Result:** The phaser sweep will now move in a circle. While the Left ear is sweeping up, the Right ear is sweeping down. 

## Vibe Check
- **Spacey/Psychedelic:** Makes the synth feel like it's drifting through a 3D vacuum. Essential for "Cloud Rap" and "Ethereal R&B."

## Variation
- **Fast Shiver:** Turn the **SWEEP** up to `10Hz` for a vibrato-like shimmering effect. [SRC: REPUTABLE]
```

---

## FILE: 03-Workflows\by-goal\01_Goal_Creative_Effect.md

```markdown
# Goal: Stereo Swirl Setup (Binaural Phaser)

## Routing Context
- **Target:** Background Vocals or Ambient Pads.
- **Position:** Place **Fruity Phaser** as the last effect before Reverb.

## Step-by-Step Setup
1.  Load **Fruity Phaser**.
2.  Set **NOTCHES** to 8 (for a thick, complex sweep).
3.  Set **SWEEP** to **0.3 Hz** (Slow and drifting).
4.  Set **FEEDBACK** to **40%**.
5.  **The Secret Sauce:** Turn the **PHASE** knob to **100%**.
6.  **Tweak:** Adjust the **MIN/MAX DEPTH** knobs to focus the swirl in the high-mids (approx 1kHz to 8kHz).

## What To Listen For
- The audio should feel like it is "orbiting" your head. The left side will be sweeping UP while the right side sweeps DOWN.
- This creates an expensive, immersive feeling common in R&B and high-end pop-rap.

## Automation Idea
- Link the **PHASE** knob to a Peak Controller on the Snare track. The stereo field "collapses" to mono every time the snare hits, then widens back out instantly. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\transition-builds.md

```markdown
# Build-Up Sweep with Fruity Phaser

## Goal
Create tension and excitement leading into a hook, drop, or new section using automated phaser sweep.

## When to Use
- **Pre-Chorus**: Build tension before hook
- **Pre-Drop**: Rise into beat drop
- **Transitions**: Section changes
- **Breakdowns**: Return from breakdown to full beat

## Basic Setup

### 1. Choose Target Element
Best candidates:
- Synth pads
- Vocal samples
- White noise
- Sustained chords
- Riser effects

### 2. Insert Fruity Phaser
Add to target track or create dedicated riser track

### 3. Starting Settings
`\`\`
Frequency: 1000-1500Hz
Depth: 60-80%
LFO Rate: 0.25 (1/4 note)
Stages: 8-10
Feedback: Start 20%
Wet: Start 0%
`\`\`

## Automation Workflow

### Step 1: Set Timeline
- Determine build length (usually 4, 8, or 16 bars)
- Create automation clip for Wet parameter
- Create automation clip for Feedback parameter

### Step 2: Wet Automation
`\`\`
Bar 1-2: 0% → 15%
Bar 3-4: 15% → 35%
Bar 5-6: 35% → 60%
Bar 7-8: 60% → 80%
`\`\`
*Exponential curve for more dramatic rise*

### Step 3: Feedback Automation
`\`\`
Bar 1-4: 20% → 30%
Bar 5-8: 30% → 55%
`\`\`
*Increases intensity and resonance*

### Step 4: Optional Frequency Sweep
`\`\`
Bar 1: 800Hz
Bar 8: 2500Hz
`\`\`
*Rising pitch adds extra excitement*

## Genre-Specific Recipes

### Trap Build
`\`\`
Duration: 8 bars
Wet: 0% → 70%
Feedback: 25% → 50%
Frequency: 1200Hz → 3000Hz
Stages: 8
Result: Modern, aggressive rise
`\`\`

### Melodic Build
`\`\`
Duration: 16 bars (slow)
Wet: 0% → 60%
Feedback: 20% → 45%
Frequency: 800Hz → 1800Hz
Stages: 10
Result: Emotional, gradual tension
`\`\`

### Boom Bap Transition
`\`\`
Duration: 4 bars (quick)
Wet: 10% → 50%
Feedback: 30% → 40%
Frequency: Static 1000Hz
Stages: 6
Result: Classic sweep effect
`\`\`

### Electronic Drop Build
`\`\`
Duration: 8 bars
Wet: 0% → 85%
Feedback: 30% → 65%
Frequency: 1500Hz → 4000Hz
Stages: 12
Result: Intense, festival-style rise
`\`\`

## Advanced Techniques

### Layered Build
1. Multiple elements with phaser
2. Stagger automation start times
3. Different frequency sweeps
4. Creates complex, evolving build

**Example**:
- Pad: Bars 1-8, low freq sweep
- Synth: Bars 5-8, mid freq sweep
- Noise: Bars 7-8, high freq sweep

### Rhythmic Intensification
1. Start with slow LFO rate (1/2 note)
2. Automate to faster rate (1/8 note)
3. Adds rhythmic urgency
4. Combine with wet automation

### Filter + Phaser Combo
1. Add High-Pass Filter before phaser
2. Automate filter cutoff upward
3. Phaser adds movement
4. Double the rising effect

### Stereo Width Build
1. Start stereo at 30%
2. Automate to 100% during build
3. Phaser expands outward
4. Dramatic stereo effect

## Mixing Considerations

### Don't Overpower
- Build should enhance, not dominate
- Keep main elements audible
- Phaser is supporting role

### Frequency Space
- If building low-frequency element, sweep low freqs
- If building high element, sweep high freqs
- Match sweep to source material

### End Point Matters
- What happens after build peaks?
- Option 1: Bypass phaser at drop
- Option 2: Reset to low wet amount
- Option 3: Keep at medium for ongoing movement

### Combine with Other Builds
- Volume automation (crescendo)
- Filter sweeps
- Reverb increase
- Percussion rolls
- Creates multi-dimensional rise

## Common Build Templates

### 8-Bar Standard Build
`\`\`
Bars 1-2: Subtle introduction (wet 0-10%)
Bars 3-4: Noticeable (wet 10-25%)
Bars 5-6: Intensifying (wet 25-50%)
Bars 7-8: Peak tension (wet 50-80%)
`\`\`

### 4-Bar Quick Build
`\`\`
Bars 1-2: Immediate rise (wet 0-40%)
Bars 3-4: Peak fast (wet 40-75%)
`\`\`

### 16-Bar Epic Build
`\`\`
Bars 1-4: Subtle (wet 0-15%)
Bars 5-8: Building (wet 15-35%)
Bars 9-12: Intensifying (wet 35-60%)
Bars 13-16: Climax (wet 60-85%)
`\`\`

## Pro Tips

✓ **Exponential curves**: More dramatic than linear
✓ **Test in context**: Always check with full beat
✓ **Don't peak too early**: Save max intensity for end
✓ **Match to energy**: Mellow tracks need subtle builds
✓ **Reset after drop**: Don't leave phaser at 80% forever

## Troubleshooting

**Build feels flat**: Increase feedback automation range

**Too harsh**: Lower feedback max value

**Doesn't match vibe**: Adjust frequency sweep range

**Not exciting enough**: Layer multiple elements

**Overwhelming**: Reduce wet max value or shorten build duration

```

---

## FILE: 03-Workflows\by-instrument\drums.md

```markdown
# Workflow: Hi-Hat Flutter (Phaser)

## The Concept
Giving static trap hi-hats a shimmering, metallic "shine" that keeps the high-end interesting.

## Step-by-Step
1.  Load **Fruity Phaser** on your Hi-Hat track.
2.  Set **NOTCHES** to **4**.
3.  Set **PHASE** to **100%**.
4.  Set **SWEEP** to **4.5 Hz** (Fast).
5.  Set **FEEDBACK** to **10%** (Very low).
6.  **Tweak:** Set **MAX DEPTH** to 100% and **MIN DEPTH** to 80%. This keeps the phaser working ONLY in the extreme high frequencies.

## Vibe Check
- **Upbeat:** This adds "kinetic energy" to the hats without making them too loud in the mix.

## Automation Ideas
- Automate the **Mix Level** of the phaser so it only turns on during the "rolls" or high-speed sections of the drum pattern. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-instrument\synth-pad-phasing.md

```markdown
# Synth Pad Phasing Workflow

## Goal
Add lush, evolving movement to synth pads for melodic hip-hop, R&B, and atmospheric tracks.

## Setup

### 1. Choose Your Pad
- Sustained synth pad
- Chord layer
- Ambient texture
- String section

### 2. Insert Fruity Phaser
Add to pad mixer track (post-fader)

### 3. Base Settings
`\`\`
Frequency: 800Hz
Depth: 55%
LFO Rate: 1/3 note (0.33)
Stages: 8-10
Feedback: 30%
Stereo: 70%
Wet: 35-45%
`\`\`

## Step-by-Step

### Step 1: Set Center Frequency
- Start at 800Hz
- Adjust based on pad frequency range
- Lower pads (400-600Hz)
- Higher pads (1000-1500Hz)

### Step 2: Dial in Depth
- Start at 50%
- Increase for more dramatic sweep
- Decrease for subtlety
- Listen in context of full mix

### Step 3: Tempo-Sync LFO
- Set to 1/4, 1/3, or 1/2 note
- Match to song feel
- Slower = dreamier
- Faster = more active

### Step 4: Adjust Stages
- More stages = deeper, more pronounced
- 6-8 stages: balanced
- 10-12 stages: very deep effect
- 4 stages: subtle, vintage

### Step 5: Fine-Tune Mix
- Start wet at 35%
- Increase for effect-heavy sound
- Decrease to taste subtle movement
- A/B test frequently

## Genre Variations

### Melodic Hip-Hop
`\`\`
Frequency: 900Hz
Depth: 50%
Rate: 1/3 note
Stages: 8
Wet: 40%
Result: Emotional, moving pads
`\`\`

### R&B/Soul
`\`\`
Frequency: 700Hz
Depth: 45%
Rate: 1/2 note
Stages: 10
Wet: 35%
Result: Lush, warm texture
`\`\`

### Trap (Atmospheric)
`\`\`
Frequency: 1200Hz
Depth: 40%
Rate: 1/4 note
Stages: 6
Wet: 30%
Result: Modern, spacey vibe
`\`\`

### Lo-Fi Chill
`\`\`
Frequency: 500Hz
Depth: 60%
Rate: 1/4 note (slow)
Stages: 4
Wet: 28%
Result: Vintage, wobbly character
`\`\`

## Advanced Techniques

### Automated Builds
1. Start with wet at 20%
2. Automate to 60% over 8 bars
3. Increase feedback simultaneously
4. Creates rising tension for pre-chorus

### Parallel Processing
1. Send pad to aux track
2. Phaser on aux (wet 100%)
3. Blend aux with dry
4. Maintains clarity with movement

### Multi-Phase Layers
1. Duplicate pad to two tracks
2. Different phaser settings each
3. Pan slightly left/right
4. Creates complex stereo movement

### Sidechain Modulation
1. Link phaser wet to Peak Controller
2. Controller triggered by kick
3. Rhythmic phaser intensity
4. Pumping phase effect

## Mixing Tips

### Frequency Balance
- If phaser makes sound thin: lower frequency
- If too dark: raise frequency
- If harsh: reduce feedback

### Stereo Considerations
- High stereo (70-100%): wide, spacious
- Low stereo (20-40%): centered, focused
- Check mono compatibility

### Layering with Effects
- **Before**: EQ cut problem frequencies
- **After**: Reverb for space, delay for depth
- **Parallel**: Compression for consistency

## Common Mistakes

❌ **Too much wet**: Overwhelming, loses clarity
→ Keep under 50% for most applications

❌ **Wrong frequency range**: Phasing wrong part of spectrum
→ Match to pad's frequency content

❌ **Unsync'd LFO**: Random movement, not musical
→ Always sync to tempo

❌ **Too many stages**: Overly processed sound
→ Start with 6-8, adjust from there

## Troubleshooting

**Sounds too harsh**: Lower feedback, reduce stages

**Not noticeable enough**: Increase depth and wet

**Loses low-end**: Lower center frequency

**Too stereo (mono issues)**: Reduce stereo amount

**Doesn't match vibe**: Adjust LFO rate tempo sync

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Phaser

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Phaser.
- **Key Info:** All-pass filter stage logic (Notches), Feedback resonance behavior, and Stereo phase offset controls.

## Source ID: [SRC: REPUTABLE]
- **Source:** "The Modulation Masterclass" (Sound On Sound).
- **Key Info:** Technical difference between Phasing and Flanging, using static notching for tone shaping, and the psychoacoustics of circular L/R phase sweeps.

## Genre Style Board: Fruity Phaser

| Vibe | Key Move | Use Case |
| :--- | :--- | :--- |
| **Vibey** | 4-Notch + Slow LFO | Neo-Soul Rhodes |
| **Spacey** | 100% Stereo Phase | Wide Pads |
| **Psychedelic**| 12-Notch + High FB | Glitched Hats |
| **Upbeat** | Fast Sweep Automation | Transition Builds |
| **Moody** | Static Notching | Hollow Melodies |
```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity Phaser

## 1. The "70s Soul" Rhodes
- **Mix Decision:** Slow, 4-notch phaser on electric piano.
- **Vibe:** Jazzy/Warm.
- **Tooling:** Low notches + slow Sweep + med Feedback.

## 2. The "Submerged" Pad
- **Mix Decision:** Slow Sine phasing on a pad to simulate deep-sea movement.
- **Vibe:** Moody/Nocturnal.
- **Tooling:** 4 notches + 0.1Hz Sweep.

## 3. The "Wide" R&B Backgrounds
- **Mix Decision:** High stereo offset (Phase 100%) on vocal stacks.
- **Vibe:** Vibey/Expensive.
- **Tooling:** Phase 100% + slow Sweep + 8 Notches.

## 4. The "Robotic" Trap Lead
- **Mix Decision:** High-resonance (high feedback) phaser on a synth lead.
- **Vibe:** Psychedelic/Glitchy.
- **Tooling:** 24 Notches + 80% Feedback.

```

---

## FILE: 04-Reference\phaser-stage-theory.md

```markdown
# Reference: Phaser Stage Theory (Notches)

The "Notches" parameter in **Fruity Phaser** represents the number of **All-Pass Filter Stages**. Understanding this is key to choosing the right "Vibe."

## What is a Stage?
Each "Stage" is an electronic circuit (or mathematical model) that shifts the phase of the signal. When you combine shifted signals with the original, they cancel out to create a "Notch."

| Notch Setting | Approx Stages | Harmonic Result | Vibe / Character |
| :--- | :--- | :--- | :--- |
| **2** | 2-Stage | 1 Major Notch | Subltle, warm, "vibrato-like." |
| **4-8** | 4 to 8 Stages | 2-4 Notches | **Classic Soul / Rock.** Organic breath. |
| **12-16** | 12 to 16 Stages | 6-8 Notches | **Modern EDM.** Sharp, resonant, "wooshy." |
| **24** | 24 Stages | 12 Notches | **Robotic.** Metallic, industrial, "alien." |

## Phase Relationships
- **Odd Notch Counts:** Create a specific type of asymmetry that can sound more "nasal."
- **Even Notch Counts:** The industry standard for musical phasing. 

## Mix Tip
The more notches you add, the more "holes" you are punching in your sound. If you find your instrument is losing its identity, **reduce the notches**. [SRC: IL-MAN]

```

---

