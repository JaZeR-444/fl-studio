# Fruity Flanger - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: CLAUDE.md

```markdown
# Fruity Flanger - Project Brief & Guidelines

## Plugin Overview
Fruity Flanger is FL Studio's classic flanging effect plugin that creates time-varying phase modulation for distinctive sweeping and metallic character. It implements the legendary flanging effect through precise delay modulation and feedback control.

## Core Character & Capabilities
- **Flanging Algorithm**: Classic time-delay based phase modulation
- **Delay Modulation**: LFO-controlled delay variation
- **Feedback Control**: Regeneration for metallic character
- **Stereo Processing**: True stereo flanging with image control
- **Modulation Sources**: Multiple LFO waveforms and sync options
- **Real-Time Control**: Zero-latency processing for live use

## Key Applications
- **Classic Flanging**: Vintage effect reproduction
- **Sound Design**: Metallic textures and sweeping effects
- **Electronic Music**: Rhythmic flanging and movement
- **Guitar Effects**: Classic guitar flanging sounds
- **Vocal Processing**: Subtle vocal enhancement and character
- **Creative Textures**: Modulated soundscapes and movement

## Primary Controls Overview
- **Delay Time**: Base delay time (0.1-20ms)
- **LFO Rate**: Modulation speed (0.05-20Hz)
- **LFO Depth**: Delay modulation amount (0-100%)
- **Feedback**: Signal regeneration (0-95%)
- **Stereo**: Stereo image width and character
- **Mix**: Dry/wet signal balance (0-100%)

## Technical Foundations
- **Flanging Theory**: Time-varying phase interference patterns
- **Delay Line**: Analog-style delay modulation
- **Feedback Architecture**: Recursive signal regeneration
- **LFO Generation**: Multiple waveform types and sync
- **Stereo Algorithm**: True stereo processing with phase coherence

## Target User Scenarios
1. **Electronic Producers**: Rhythmic flanging and movement
2. **Guitarists**: Classic guitar effect emulation
3. **Sound Designers**: Metallic textures and creative effects
4. **Mix Engineers**: Subtle enhancement and character
5. **Live Performers**: Real-time effect control
6. **Educators**: Teaching flanging theory and techniques

## Documentation Strategy
This plugin requires comprehensive documentation covering:
- **Flanging Theory**: Understanding phase modulation and comb filtering
- **Parameter Mastery**: Deep control understanding for musical results
- **Creative Applications**: Beyond basic flanging uses
- **Performance Techniques**: Real-time control and expression
- **Genre Integration**: Flanging approaches for different musical styles
- **Advanced Techniques**: Complex modulation and routing strategies

## Workflow Emphasis
- **Musical Application**: Flanging that serves the song
- **Creative Exploration**: Encouraging experimentation with effects
- **Technical Precision**: Accurate parameter control for desired results
- **Performance Readiness**: Real-time control and automation
- **Integration Focus**: Working with other FL Studio tools

## Educational Value
Fruity Flanger serves as excellent learning tool for:
- Phase modulation and interference principles
- Comb filtering theory and applications
- LFO modulation techniques
- Time-based effects understanding
- Creative audio processing
- Performance expression through effects

## Technical Considerations
- **Phase Coherence**: Maintaining proper stereo phase relationships
- **Feedback Stability**: Preventing oscillation while allowing character
- **Delay Accuracy**: Precise time control for flanging quality
- **Modulation Depth**: Balanced LFO depth for musical results
- **Stereo Imaging**: True stereo processing without artifacts

## Professional Standards
- **Industry Practices**: Following professional effect conventions
- **Quality Control**: Maintaining audio fidelity during processing
- **Creative Innovation**: Using flanging artistically
- **Workflow Efficiency**: Streamlined creative processes
- **Performance Standards**: Real-time reliability and control

This plugin represents FL Studio's commitment to classic effects with modern control and should be documented to provide both practical guidance and deep understanding of flanging techniques for users at all skill levels.
```

---

## FILE: README.md

```markdown
# Fruity Flanger - Classic Jet Plane Modulation

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ███████╗██╗      █████╗ ███╗   ██╗ ██████╗ ███████╗██████╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔════╝██║     ██╔══██╗████╗  ██║██╔════╝ ██╔════╝██╔══██╗
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     █████╗  ██║     ███████║██╔██╗ ██║██║  ███╗█████╗  ██████╔╝
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██╔══╝  ██║     ██╔══██║██║╚██╗██║██║   ██║██╔══╝  ██╔══██╗
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██║     ███████╗██║  ██║██║ ╚████║╚██████╔╝███████╗██║  ██║
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Flanger
**Category:** Effect / Modulation
**Official Manual:** [Image-Line Fruity Flanger Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Flanger.htm)

---

## 🎯 What is Fruity Flanger?

Fruity Flanger is a classic modulation effect that creates the "jet plane" swoosh. It works by mixing two identical signals together, with one signal slightly delayed by a varying amount (typically <10ms). This creates a "Comb Filter" that sweeps up and down the frequency spectrum. It adds metallic texture, movement, and width to sounds.

**Key Capabilities:**
- **Short Delays:** Uses very short delay times to create comb filtering.
- **Feedback:** Feeds the output back to the input to intensify the metallic resonance.
- **Invert Feedback:** Creates a "hollow" rather than "metallic" tone.
- **Stereo Phase:** Offsets the LFO modulation for ultra-wide effects.
- **Feed/Delay/Depth:** The holy trinity of flanger controls.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **flanger-vs-phaser.md**
3. Create **parameter-cheat-sheet.md**
4. Apply to a Drum Loop and crank the Feedback.

### For Sound Designers:
1. Study **metallic-textures.md**
2. Review **jet-plane-fx.md**
3. Learn **stereo-widening-flange.md**

### For Mix Engineers:
1. Study **subtle-movement.md** (Hi-hats and cymbals)
2. Review **guitar-modulation.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Delay:** The center point of the sweep (lower = higher pitch).
  - **Depth:** How far the sweep goes.
  - **Rate:** Speed of the LFO.
  - **Feedback:** Intensity/Resonance.
  - **Phase:** Stereo width of the LFO.

- [ ] **flanger-vs-phaser.md**
  - **Flanger:** Uses Delay (Linear harmonic spacing).
  - **Phaser:** Uses All-Pass Filters (Non-linear harmonic spacing).
  - Flanger sounds more "metallic", Phaser sounds more "wooshy/organic".

#### 02-Data/parameters/
- [ ] **fruity-flanger-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Flanger",
    "category": "Modulation",
    "parameters": [
      {
        "name": "Feedback",
        "type": "knob",
        "description": "Intensifies the comb filter effect",
        "pro_tip": "Invert feedback (negative values) for a hollow, woody sound."
      },
      {
        "name": "Phase",
        "type": "knob",
        "description": "Offsets L/R modulation",
        "use_cases": ["stereo widening", "swirling effects"]
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **jet-plane-fx.md**
  - High Feedback.
  - Slow Rate.
  - High Depth.
  - Applied to White Noise or Full Mix.

- [ ] **metallic-textures.md**
  - Static Flanging (Rate = 0).
  - High Feedback.
  - Tuning the "Delay" knob to a specific pitch.

- [ ] **subtle-movement.md**
  - Low Mix (20-30%).
  - Low Feedback.
  - Adding life to sterile hi-hats.

#### 03-Workflows/by-context/
- [ ] **psychedelic-guitar.md**
- [ ] **robotic-vocals.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **comb-filter-theory.md**
  - Why delaying a signal and mixing it with itself creates notches.
  - The math of constructive/destructive interference.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** The Swoosh

**Tasks:**
1. Load White Noise (3xOsc)
2. Add Fruity Flanger
3. Adjust Rate and Feedback
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- What happens when Delay is at minimum vs maximum?
- How does "Invert Wet" change the cancellation?

### Phase 2: Creative Application (Week 2)
**Goal:** Tuning the Metal

**Tasks:**
1. Stop the LFO (Rate 0)
2. Tune the "Delay" knob until the metallic ring matches the song key
3. Automate the "Delay" manually
4. Create metallic-textures.md

**Key Questions to Answer:**
- Can I use this as a Chorus? (Yes, lower feedback, increase delay slightly).

---

## 📊 Plugin Specifications to Document

### Modulation Engine
- Delay Range (ms)
- LFO Shapes
- Feedback Range (-100% to +100%)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why does my bass disappear? (Phase cancellation in low frequencies - use with caution on bass).
2. How do I make it wider? (Increase Phase knob).

### Advanced Usage
1. How to create "Through-Zero" flanging? (Requires one signal to be delayed *ahead* of the other - usually requires specific plugins or pre-delay tricks).

---

## 📝 Documentation Standards

### For Each Workflow:
- **Delay:** ms
- **Feedback:** %
- **Rate:** Speed

---

## 🔗 Cross-Reference with Other Plugins

Fruity Flanger is often used with:
- **Fruity Phaser** (Alternative modulation)
- **Fruity Chorus** (Subtler modulation)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Flanger/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── flanger-vs-phaser.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── fruity-flanger-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── jet-plane-fx.md
│   │   ├── metallic-textures.md
│   │   └── subtle-movement.md
│
└── 04-Reference/
    └── comb-filter-theory.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Flanger Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Flanger.htm)
- [Fruity Flanger Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Flanger_tutorials.htm)
- [Fruity Flanger Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+flanger+tutorial)

### Community Resources
- [Fruity Flanger Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+flanger&restrict_sr=1)
- [Fruity Flanger User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Flanger Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Limiter** for monitoring output levels
- **Wave Candy** for precise waveform analysis

### Recommended Learning Materials
- "Flanging Explained" - Understanding comb filtering and delay-based modulation
- "Modulation Effects Comparison" - Differences between flanger, chorus, and phaser
- "Feedback in Audio Processing" - How feedback creates resonance

### Advanced Techniques
- **Static Flanging:** Using zero rate for tuned metallic textures
- **Through-Zero Simulation:** Creating vintage flanger effects
- **Stereo Widening:** Using phase controls for spatial effects

---

## 🧪 Experimental Techniques

### Advanced Flanger Applications
Creative uses of Fruity Flanger's capabilities:

**Static Flanging:**
- **Tuned Metallic Textures:** Creating static metallic sounds
  - Set Rate to 0 for no modulation
  - Tune Delay to specific musical intervals
  - Use for creating tuned resonant effects
  - Perfect for ambient and atmospheric music
  - Essential for static metallic textures

**Through-Zero Simulation:**
- **Vintage Flanger Effects:** Simulating through-zero flangers
  - Use pre-delay techniques for advanced effects
  - Create vintage-style flanging effects
  - Perfect for retro music production
  - Essential for authentic vintage sounds
  - Useful for classic flanger emulation

**Phase Manipulation:**
- **Stereo Widening Effects:** Using phase controls for spatial effects
  - Adjust Phase knob for stereo width
  - Create immersive stereo environments
  - Perfect for spatial enhancement
  - Essential for stereo field manipulation
  - Useful for wide sound design

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Dynamic Flanger Changes:** Automating parameters for evolving effects
  - Create evolving flanger characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic flanger expression
  - Use for expressive control

**Modulation Applications:**
- **Parameter Modulation:** Using external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Stage Processing:**
- **Complex Flanger Enhancement:** Multiple processing stages for sophisticated effects
  - Create multi-stage flanger enhancement
  - Apply different processing to different stages
  - Build sophisticated flanger processing chains
  - Perfect for advanced sound design
  - Use for complex processing

## 🎚️ Workflow Optimization

### Flanger Setup Workflows
Efficient approaches to using Fruity Flanger:

**Basic Flanger Setup:**
- **Classic Jet Effect:** Creating the classic flanger sound
  - High Feedback for metallic resonance
  - Medium Rate for swooshing effect
  - High Depth for wide modulation
  - Essential for classic flanger sound
  - Pro tip: Use on drums for classic effect

- **Subtle Enhancement:** Adding gentle movement to sounds
  - Low Feedback for subtle effect
  - Low Mix for transparency
  - Medium Rate for natural movement
  - Essential for gentle enhancement
  - Pro tip: Use on hi-hats for subtle movement

**Advanced Flanger Setup:**
- **Tuned Flanging:** Creating musically-tuned flanger effects
  - Stop LFO (Rate = 0)
  - Tune Delay to specific pitch
  - Use for musical resonance
  - Essential for melodic flanger effects
  - Pro tip: Match to song key for harmony

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
- **Rhythmic Flanging:** Creating rhythmic flanger patterns
- **Build-up Effects:** Using flanger for tension building
- **Stereo Enhancement:** Adding width to electronic elements
- **Energy Management:** Using flanger for track energy
- **Transition Effects:** Creating smooth transitions between sections

### Hip-Hop and R&B
- **Vocal Enhancement:** Adding subtle movement to vocals
- **Hi-Hat Processing:** Creating subtle flanging on hi-hats
- **Mix Enhancement:** Adding movement to static elements
- **Creative Effects:** Adding unique character to elements
- **Spatial Effects:** Managing spatial characteristics

### Rock and Metal
- **Guitar Enhancement:** Adding movement to guitar sounds
- **Bass Processing:** Creating subtle bass enhancement
- **Drum Enhancement:** Adding character to drums
- **Mix Enhancement:** Using flanger for mix clarity
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Flanging:** Creating evolving textures
- **Spatial Effects:** Advanced spatial parameter control
- **Experimental Flanging:** Pushing boundaries of modulation
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Flanger works well with various effects:
- **Reverb:** Adding space to flanged sounds
- **Delay:** Creating rhythmic patterns with flanging
- **Chorus:** Adding width to flanged sounds
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of flanged signals

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
Fruity Flanger was developed as a classic modulation effect:
- Created to provide authentic flanging capabilities
- Designed for metallic and swooshing effects
- Developed with electronic music in mind
- Intended to complement other modulation effects

### Evolution Through FL Studio Versions
- Initially introduced with basic flanging capabilities
- Enhanced with additional parameters and controls
- Improved with better sound quality and stability
- Expanded with more sophisticated algorithms

### Impact on Music Production
Fruity Flanger has influenced music production by:
- Providing accessible flanging effects
- Enabling creative modulation workflows
- Facilitating stereo enhancement techniques
- Supporting various musical genres with flexible modulation

## 🧠 Advanced Processing Techniques

### Flanger Mastery
Advanced techniques for flanger processing:
- **Comb Filtering:** Understanding frequency notch creation
- **Feedback Control:** Managing resonance and intensity
- **Phase Relationships:** Understanding stereo phase effects
- **Modulation Depth:** Controlling sweep intensity
- **Creative Applications:** Using flanger for unique effects

### Stereo Field Enhancement
Advanced stereo enhancement techniques:
- **Phase Control:** Using phase offset for width
- **L/R Separation:** Managing left/right differences
- **Spatial Imaging:** Creating immersive stereo effects
- **Width Management:** Controlling stereo field width
- **Creative Applications:** Using stereo for unique effects

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique flanged textures
- **Atmospheric Processing:** Building ambient flanged effects
- **Rhythmic Effects:** Creating rhythmic flanger patterns
- **Spatial Manipulation:** Creating immersive flanged environments
- **Experimental Processing:** Pushing boundaries of flanging

## 📊 Performance Considerations

### CPU Usage
Managing Flanger's impact on system performance:
- **Low CPU Load:** Generally efficient processing
- **Real-Time Performance:** Optimized for live performance
- **Instance Count:** Multiple instances have minimal impact
- **Parameter Automation:** Automated parameters have minimal CPU impact
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Comb Filtering Quality:** Ensuring smooth frequency response
- **Phase Coherence:** Maintaining phase relationships
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output
- **Signal Integrity:** Preserving original signal quality

### System Integration
Optimizing Flanger within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimal audio latency

## 🛠️ Troubleshooting Common Issues

### Flanging Problems
- **Harsh Sound:** Reduce feedback or adjust delay settings
- **Phase Issues:** Check stereo field and width settings
- **Excessive Metallic:** Reduce feedback or depth
- **Poor Definition:** Adjust delay and feedback for clarity
- **Muddy Low End:** Use high-pass filter or reduce low-end feedback

### Technical Issues
- **High CPU Usage:** Flanger has minimal CPU usage
- **Latency Issues:** Check buffer settings
- **Clipping:** Reduce feedback or input gain
- **Artifacts:** Check sample rate and bit depth settings
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Adjust feedback and delay settings
- **Lack of Character:** Increase feedback or adjust delay
- **Poor Integration:** Use appropriate settings for the source
- **Overpowering:** Reduce feedback or use EQ to balance
- **Lack of Control:** Use automation for dynamic changes

## 🎚️ Advanced Configuration

### Custom Flanger Setups
Creating and managing custom flanger configurations:
- **Jet Effect Setups:** Optimized for jet plane effects
- **Metallic Textures:** Configured for metallic sound applications
- **Subtle Enhancement:** Set up for gentle movement applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple Flanger instances effectively:
- **Channel-Specific:** Different instances for different channels
- **Parallel Processing:** Multiple instances in parallel
- **Performance Optimization:** Managing multiple instances
- **Creative Applications:** Combining different flanger effects

### Integration Configurations
Optimizing for different integration scenarios:
- **Insert Processing:** Inline processing configurations
- **Send Processing:** Effects return configurations
- **Hardware Integration:** External hardware integration
- **DAW Integration:** Optimizing for FL Studio workflow

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Flanger techniques
- **Reddit Groups:** Sharing flanging techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced flanging techniques
- **Written Guides:** In-depth articles on comb filtering
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting Flanger configurations
- **Technique Sharing:** Platforms for sharing processing methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create an authentic "Jet Plane" swoosh effect that passes overhead
- [ ] Tune a static flanger to match a specific musical note/key
- [ ] Explain the difference between Positive and Negative feedback settings
- [ ] Create a metallic texture that enhances a synth lead without overpowering
- [ ] Use the Phase control to create ultra-wide stereo effects
- [ ] Apply appropriate feedback settings for different musical genres
- [ ] Create subtle movement effects for static elements without artifacts
- [ ] Troubleshoot phase cancellation and harshness issues effectively
- [ ] Integrate Flanger into efficient modulation workflows
- [ ] Create complex flanger automation patterns with smooth transitions
- [ ] Set up a tuned flanger effect that matches the song key
- [ ] Use the Invert Wet function for hollow, woody sounds
- [ ] Apply stereo widening techniques using the Phase control
- [ ] Create rhythmic flanger patterns with precise timing
- [ ] Combine Flanger with other modulation effects for complex results
- [ ] Use automation to create evolving flanger characteristics
- [ ] Design custom flanger patches for specific musical contexts
- [ ] Optimize Flanger settings for minimal CPU usage
- [ ] Use Flanger for creative sound design applications beyond traditional flanging
- [ ] Set up advanced routing for complex flanger projects
- [ ] Apply Flanger in live performance scenarios
- [ ] Create experimental flanger effects with extreme settings
- [ ] Combine Flanger with other effects for layered processing
- [ ] Integrate Flanger with other automation tools seamlessly
- [ ] Create custom flanger workflows for specific creative needs
- [ ] Use Flanger effectively in large, complex projects
- [ ] Generate complex rhythmic patterns with parameter automation
- [ ] Create hybrid modulation effects combining flanger with other modulators
- [ ] Apply Flanger in mastering contexts with appropriate care
- [ ] Create complex multi-stage flanger chains with smooth automation

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\quick-start-guide.md

```markdown
# Fruity Flanger Quick Start Guide

## Getting Started in 60 Seconds

### Classic Flanging Sound
1. **Load Fruity Flanger** on any track or mixer channel
2. **Set Delay to 5ms** for medium-speed flanging
3. **Set Rate to 0.5Hz** for slow, sweeping movement
4. **Set Depth to 50%** for moderate flanging intensity
5. **Set Feedback to 25%** for metallic character
6. **Set Mix to 30%** for subtle effect blending

## Essential Controls

### The Four Core Parameters
1. **Delay Time** (0.1-20ms): Base delay before modulation
2. **LFO Rate** (0.05-20Hz): Speed of flanging sweep
3. **LFO Depth** (0-100%): Amount of delay variation
4. **Feedback** (0-95%): Regeneration for metallic character

### Additional Controls
5. **Stereo** (0-100%): Stereo image width
6. **Mix** (0-100%): Balance between dry and flanged signal

## Common Starting Points

### Classic Guitar Flange
`\`\`
Delay: 8ms
Rate: 0.8Hz
Depth: 60%
Feedback: 30%
Stereo: 75%
Mix: 40%
`\`\`
**Best For**: Guitar, classic effects, vintage character

### Subtle Vocal Enhancement
`\`\`
Delay: 2ms
Rate: 0.3Hz
Depth: 25%
Feedback: 15%
Stereo: 60%
Mix: 20%
`\`\`
**Best For**: Vocals, subtle enhancement, clarity

### Electronic Music Flange
`\`\`
Delay: 12ms
Rate: 2.0Hz
Depth: 70%
Feedback: 40%
Stereo: 85%
Mix: 50%
`\`\`
**Best For**: Synths, electronic production, rhythmic effects

### Sound Design Textures
`\`\`
Delay: 15ms
Rate: 4.0Hz
Depth: 85%
Feedback: 60%
Stereo: 90%
Mix: 60%
`\`\`
**Best For**: Sound design, creative effects, textures

## Problem-Solving Examples

### Flange Sounds Too Strong
**Solution**: Reduce Mix to 15-25%, lower Depth to 30-40%
**Result**: Subtle enhancement without overwhelming mix

### No Sweeping Movement
**Solution**: Increase Rate to 1-2Hz, ensure Depth > 30%
**Result**: Noticeable flanging sweep and movement

### Effect Sounds Harsh/Metallic
**Solution**: Reduce Feedback to 15-25%, adjust Delay to 3-8ms
**Result**: Warmer, more musical flanging character

### Flanging Gets Lost in Mix
**Solution**: Increase Stereo to 70-85%, slightly raise Mix
**Result**: Better stereo image and presence

## Genre-Specific Applications

### Rock Music
`\`\`
Guitar Flange:
Delay: 6-10ms
Rate: 0.5-1.5Hz
Depth: 50-70%
Feedback: 25-40%
Mix: 35-50%
`\`\`

### Electronic Music
`\`\`
Synth Flange:
Delay: 10-15ms
Rate: 1-4Hz
Depth: 60-80%
Feedback: 30-50%
Mix: 40-60%
`\`\`

### Pop Music
`\`\`
Vocal/Subtle:
Delay: 2-5ms
Rate: 0.2-0.6Hz
Depth: 20-35%
Feedback: 10-20%
Mix: 15-30%
`\`\`

## Pro Tips

### The Musical Sweet Spot
- **Delay**: 3-10ms works best for most applications
- **Rate**: 0.3-2.0Hz provides musical sweep speeds
- **Depth**: 40-70% gives noticeable but not overwhelming effect
- **Feedback**: 20-40% adds character without harshness
- **Mix**: 20-50% integrates effect naturally

### Timing and Tempo
- **Slow Tempos** (60-90 BPM): Use 0.2-0.8Hz Rate
- **Medium Tempos** (90-140 BPM): Use 0.6-2.0Hz Rate
- **Fast Tempos** (140+ BPM): Use 1.5-4.0Hz Rate
- **Sync to Tempo**: Sync LFO to project tempo for rhythmic effects

### Stereo Imaging
- **Mono Sources**: Use 50-70% Stereo for gentle width
- **Stereo Sources**: Use 80-100% Stereo for full image
- **Creative Width**: High Stereo settings for special effects

### Automation Ideas
- **Rate Automation**: Speed up flanging in choruses
- **Depth Automation**: Intensify effect for dramatic moments
- **Feedback Automation**: Vary metallic character over time
- **Mix Automation**: Bring effect in/out for sections

## Common Mistakes to Avoid

❌ Too much Feedback creating harsh metallic tones
❌ Rate too fast creating nervous, chaotic sound
❌ Mix too high overwhelming original signal
❌ Delay too long causing timing issues
❌ Ignoring tempo relationship for rhythmic flanging

## Quick Reference Chart

| Application | Delay | Rate | Depth | Feedback | Mix |
|-------------|--------|-------|----------|------|
| Guitar Classic | 8ms | 0.8Hz | 30% | 40% |
| Subtle Vocal | 3ms | 0.3Hz | 15% | 20% |
| Electronic Rhythmic | 12ms | 2.5Hz | 50% | 50% |
| Sound Design | 15ms | 4.0Hz | 60% | 60% |
| Vintage Tape | 10ms | 0.5Hz | 35% | 45% |

## Integration Tips

### With Other Effects
- **Before Reverb**: Flanging creates focused reverb effects
- **Before Delay**: Flanging modulates delay repeats
- **Before Distortion**: Flanging before distortion creates complex textures
- **After EQ**: Shape flanged frequency content

### In the Mix
- Always check in full mix context
- Use Mix control to balance with dry signal
- Consider stereo placement in mix
- Automate parameters for song structure

This quick start guide provides immediate functionality while teaching fundamental flanging concepts. Start here, then explore advanced modulation techniques and creative applications as you gain experience.
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Flanger

## Purpose & Identity
Fruity Flanger is a classic modulation effect that creates **metallic, sweeping, and resonant** textures. While similar to Chorus, Flanger uses much shorter delay times (under 10ms) and includes a **Feedback** loop, which creates "Comb Filtering"—a series of resonant peaks and notches that sound like a jet engine or a hollow pipe. [SRC: IL-MAN]

## 60-Second Mental Model
Imagine two tape machines playing the same sound. If you press your finger on the rim (the "flange") of one machine, it slows down slightly and then speeds back up. The microscopic timing difference causes the signals to cancel each other out at specific frequencies, creating that characteristic "whoosh" sound.

## Hip-Hop / R&B Context
- **The "Jet" Transition:** Automating a high-feedback flange sweep on a drum break to build tension before a drop.
- **Metallic Snares:** Adding a static (non-moving) flange to a snare to give it a "hollow" or "industrial" character.
- **Spacey Melodies:** Using slow, wide flanging on a Rhodes or Electric Piano to make it feel like it’s "drifting through space."

## When To Use
- When you want a **metallic or robotic** texture.
- When you need a **powerful sweeping transition** (High Feedback).
- When a sound feels too "flat" and needs rhythmic movement that is more aggressive than a chorus.

## When NOT To Use
- **Lead Vocals:** Excessive flanging can make lyrics unintelligible and sound "cheap." Use sparingly or on background ad-libs.
- **Surgical Mixes:** The feedback loop creates resonances that can clash with the key of your song. Always check for "ringing" frequencies. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Flanger

## UI Tour
Fruity Flanger uses a traditional knob-and-switch interface divided into modulation and feedback sections. [SRC: IL-MAN]

### 1. Delay & Depth (The "Width" of the Sweep)
- **Delay**: Sets the center time of the delay line. Lower values result in higher-pitched resonances.
- **Depth**: Sets how far the LFO moves the delay around the center. High depth creates a wider frequency sweep.

### 2. LFO Section (The Movement)
- **Rate**: The speed of the modulation.
- **Phase**: Adjusts the phase offset between the Left and Right channels. Crank this for extreme stereo widening.
- **LFO Shape**: Typically Sine or Triangle.

### 3. Feedback Section (The "Metal")
- **Feed (Feedback)**: Feeds the output back to the input.
- **Invert Feedback (INV FB)**: Inverts the polarity of the feedback. Positive feedback sounds metallic; negative (inverted) feedback sounds hollow or woody.
- **Dry/Wet/Cross**: Mix knobs for the dry signal, the flanged signal, and the "cross-panned" signal.

## Signal Flow
1. **Input**: Signal enters the plugin.
2. **Split**: Signal splits into **Dry Path** and **Wet Path**.
3. **Wet Path (Delay Line)**: The signal enters a short delay (controlled by **Delay** knob).
4. **LFO Modulation**: The delay time is modulated back and forth (controlled by **Rate** and **Depth**).
5. **Feedback Loop**: A portion of the modulated signal is sent back to the start of the delay line (controlled by **Feed**).
6. **Inversion**: If selected, the feedback signal's phase is flipped.
7. **Summing**: Dry and Wet paths are mixed at the output.

## Things Beginners Misunderstand
- **"The Bass Disappeared"**: Flanging uses phase cancellation. If the delay is very short, it will cancel out low frequencies. Use a high-pass filter before the flanger or mix it in parallel.
- **"It's just a chorus"**: While they are related, flangers use much shorter delays (<10ms) than chorus plugins (~20-50ms), leading to the distinct "whistle" or "ring".
- **The "Cross" Knob**: This isn't just a mix knob; it mixes the flanged signal of one channel into the other channel, increasing stereo complexity.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Flanger

## 1. The "Static Tuned" Flange
Set the **Rate** to 0. This stops the LFO. Now, adjust the **Delay** knob. You will hear a fixed metallic resonance.
- **Technique**: Match the resonant pitch to the key of your song.
- **Listen For**: A "ring" that harmonizes with your synth or snare.

## 2. Inverted Woodiness
Toggle the **Invert Feedback** (INV FB) button.
- **Technique**: Use this on percussion or acoustic guitars.
- **Listen For**: The sound becomes "hollower" and "throatier" rather than metallic and shiny. Excellent for "boxy" or vintage R&B textures.

## 3. Ultra-Wide Hats
Set **Phase** to 100%. This moves the Left and Right delay lines in opposite directions.
- **Technique**: Apply to Trap hi-hats.
- **Listen For**: The hats "swirling" around the listener's head rather than staying in the center.

## 4. Through-Zero Simulation (Pseudo)
Set **Dry** to 50% and **Wet** to -50% (Invert Wet).
- **Technique**: Find the point where the signal almost cancels out.
- **Listen For**: The "deep notch" that happens at the bottom of the sweep.

## 5. Mono-Compatibility Check
Always toggle the **Mono** switch on your master track or mixer while using high **Phase** settings.
- **Pitfall**: Extreme flanging can make a sound completely disappear in mono.
- **Fix**: Reduce the **Phase** knob until the sound remains present in mono. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Harsh "Whistling"** | Lower the **Feed** (Feedback) knob. |
| **Low-End Mud/Loss** | Use a High-Pass filter *before* the Flanger at ~300Hz. |
| **Nauseating Movement** | Lower the **Rate** and **Depth**. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Flanger

Flanger translates vibes through **resonance** and **rhythmic sweeping**.

## 1. Upbeat (Hectic, High-Energy, Jet-Engine)
- **Concept:** "The Turbocharger."
- **Levers:**
  - **Feedback:** High (Positive or Negative).
  - **LFO Speed:** Match the tempo (e.g., 1/2 bar).
  - **Depth:** 100%.
- **Listen For:** A screaming "whoosh" that follows the energy of the track.
- **Don't Do This:** Don't use this on every track; it’s an "event" effect.

## 2. Psychedelic (Warped, Melted, Unstable)
- **Concept:** "The Liquid Pipe."
- **Levers:**
  - **Delay:** Very short (<2ms) for extreme comb filtering.
  - **Feedback:** Negative (creates a "hollower" sound). [SRC: REPUTABLE]
  - **LFO Wave:** Random or complex.
- **Listen For:** The sound "hollowing out" and shifting through strange resonant peaks.

## 3. Spacey (Vast, Ethereal, Drifting)
- **Concept:** "The Galactic Drift."
- **Levers:**
  - **LFO Speed:** Extremely slow (0.1Hz).
  - **Stereo Phase:** 180 degrees (Max width).
  - **Mix:** Low (10-20%).
- **Listen For:** A subtle, wide movement that makes the sound feel like it's orbiting the listener.

## 4. Vibey (Smooth, Shimmering, Modern)
- **Concept:** "The Glossy Sheen."
- **Levers:**
  - **Feedback:** Zero.
  - **Delay:** 5-10ms (closer to Chorus territory).
  - **Cross Cutoff:** HP @ 500Hz.
- **Listen For:** A shimmering width that doesn't have the "metallic" ring of traditional flanging.

## 5. Moody (Dark, Damp, Industrial)
- **Concept:** "The Abandoned Factory."
- **Levers:**
  - **Feedback:** Medium.
  - **Post-Filter:** Low Pass @ 2kHz.
- **Listen For:** A "claustrophobic" ringing that sounds like it’s coming through a metal vent. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\signal-flow.md

```markdown
# Signal Flow: Fruity Flanger

The Flanger relies on a feedback loop to create its characteristic metallic resonance.

`\`\`mermaid
graph LR
    Input[Input Audio] --> Split{Splitter}
    Split --> Dry[Dry Signal]
    Split --> DelayLine[Delay Line]
    
    LFO[LFO Modulator] -- Modulates Time --> DelayLine
    
    DelayLine --> Wet[Wet Signal]
    Wet -- Feedback Amount --> DelayLine
    
    Dry --> Mix[Mixer Sum]
    Wet --> Mix
    Mix --> Output[Output Audio]
`\`\`

### Stages
1.  **Split**: Signal is duplicated.
2.  **Delay Line**: One copy is delayed by a tiny amount (0-10ms).
3.  **LFO**: The delay time constantly changes (modulates) based on the **Rate** and **Depth**.
4.  **Feedback**: A portion of the output is sent *back* into the input of the delay line. This reiteration creates the deep "comb filter" notches.
5.  **Mix**: Dry and Wet are combined.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Flanger (5 Minutes)

1.  **Insert:** Load **Fruity Flanger** onto a drum loop or synth.
2.  **Width:** Turn the **Stereo** knob to maximum for a wide "Spacey" feel.
3.  **Intensity:** Adjust the **Depth** slider to set how far the "sweep" goes.
4.  **Feedback:** Increase the **Feedback** knob to hear the "Jet Engine" resonance.
5.  **Timing:** Set the **LFO Speed** to match your project's rhythm (right-click for tempo sync).
6.  **Tip:** Use **Negative Feedback** (knob to the left) for a "hollower," more psychedelic tone. [SRC: IL-MAN]
```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity Flanger

- **Phase Cancellation on Kick/Bass**: Applying flanging directly to a kick drum or sub-bass without a high-pass filter. This leads to weak, "flappy" low end.
- **Feedback Overload**: Setting **Feed** too high on a sound with lots of harmonic content (like a saw lead), causing a piercing, painful whistle.
- **Static Flanging without Tuning**: Using a rate of 0 but not tuning the **Delay** to the song's key, resulting in "out-of-tune" metallic resonance.
- **Ignoring the Cross Knob**: Keeping **Cross** at 0 when you want extra width. The cross-panning is what makes Fruity Flanger sound "expensive" vs "cheap."
- **Over-modulation on Leads**: Setting the **Depth** too high on a lead vocal, making it sound "drunk" and lose its pitch center.

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points: Fruity Flanger

| Target Sound | Delay | Feed | Rate | Depth | Phase |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Jet Plane Swoosh** | 5.0 ms | 70% | 0.2 Hz | 80% | 50% |
| **Trap Hi-Hat Life** | 2.0 ms | 20% | 1.5 Hz | 30% | 100% |
| **R&B Pad Width** | 8.0 ms | -30% | 0.5 Hz | 40% | 80% |
| **Robotic Vocal** | 1.5 ms | 85% | 0.0 Hz | 0% | 0% |
| **Subtle Guitar Air** | 10.0 ms| 0% | 0.1 Hz | 10% | 40% |

*Note: Use "Invert Feedback" for the R&B Pad to get that hollow character.*

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Flanger: The Classic Jet

> **Scope:** Jet Plane Sweeps, Metallic Resonances, and Chorus-like Doubling.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Modulation).

## 🧠 The "Comb" Concept
Flanging is essentially a very short delay (0-20ms) that is modulated.
*   **Result:** This creates a "Comb Filter" (a series of notches) that moves up and down the frequency spectrum.
*   **Sound:** When the delay is near <1ms, the notches cancel out high frequencies, creating the "Jet Plane" whoosh.

**Signal Flow:**
`Input` -> **[DELAY LINE (LFO Modulated)]** -> **[DAMP]** -> **[FEEDBACK (Normal/Inverted)]** -> **[MIX (Dry + Wet + Cross)]** -> **[OUTPUT]**

---

## 🎛️ Section 1: The Invert Switches

The character of the flanger is defined here.
*   **Invert Wet:** Cancels the Dry signal.
    *   *Result:* Creates a hollow, "Inside Out" sound. If Mix is 50/50, silence occurs at DC.
*   **Invert Feedback:** Feeds the inverted signal back into the loop.
    *   *Result:* Enhances odd vs even harmonics. One setting sounds like a "Tube", the other like a "Bell".

---

## 🔁 Section 2: Phase (Stereo)

*   **Knob:** **Phase**.
*   **Function:** Offsets the LFO for the Right Channel.
*   **Settings:**
    *   *0 deg:* Mono modulation (Laser beam).
    *   *180 deg:* Left goes Up, Right goes Down. (Headphone massage).
    *   *10 deg:* Subtle width.

---

## ⚡ Technical Specs: The Cross Knob

*   **Function:** Mixes the *Inverted Left* signal into the *Right Output* (and vice versa).
*   **Effect:** Hyper-Wide Stereo. It creates a pseudo-Haas effect that sits "outside" the speakers.
*   **Warning:** Can ruin mono compatibility if overused.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Zero" Flange
1.  **Delay:** 0ms.
2.  **Depth:** Very High.
3.  **Rate:** Slow.
4.  **Invert Wet:** ON.
5.  **Result:** When the LFO hits the bottom (0ms delay), the Wet signal perfectly cancels the Dry signal (silence). This creates the dramatic "Through Zero" suck effect.

### 2. Infinite Barberpole
1.  **Rate:** 0 (Static).
2.  **Automation:** Create a ramp automation clip for the **Delay** time.
3.  **Result:** A flanger that only goes UP forever (Shepard Tone illusion) if you reset the ramp at the measure.

### 3. Metallic Resonator
1.  **Delay:** Fixed (Rate 0).
2.  **Feed:** 99% (Max).
3.  **Damp:** 0 (No damping).
4.  **Result:** The flanger effectively becomes a physical model of a short string. Tuning the **Delay** knob changes the pitch of the metallic ring.

```

---

## FILE: 02-Data\parameters.json

```json
{
  "pluginName": "Fruity Flanger",
  "version": "1.0",
  "lastUpdated": "2025-01-04",
  "category": "Modulation Effects",
  "parameters": {
    "delayTime": {
      "type": "time",
      "range": {
        "min": 0.1,
        "max": 20,
        "default": 5
      },
      "unit": "ms",
      "description": "Base delay time before modulation begins",
      "technicalDetails": "Analog-style delay line with precise time control",
      "sweetSpots": {
        "fast": [0.1, 2, "rhythmic_effects"],
        "medium": [2, 8, "classic_flange"],
        "slow": [8, 20, "sweeping_effects"]
      }
    },
    "lfoRate": {
      "type": "frequency",
      "range": {
        "min": 0.05,
        "max": 20,
        "default": 0.5
      },
      "unit": "Hz",
      "description": "Speed of delay modulation (LFO rate)",
      "technicalDetails": "Low-frequency oscillator with tempo sync capability",
      "sweetSpots": {
        "very_slow": [0.05, 0.3, "slow_sweep"],
        "slow": [0.3, 1.0, "musical_sweep"],
        "medium": [1.0, 4.0, "rhythmic_modulation"],
        "fast": [4.0, 20, "fast_effects"]
      }
    },
    "lfoDepth": {
      "type": "percentage",
      "range": {
        "min": 0,
        "max": 100,
        "default": 50
      },
      "unit": "%",
      "description": "Amount of delay time variation",
      "technicalDetails": "Controls modulation intensity from subtle to extreme",
      "sweetSpots": {
        "subtle": [20, 40, "gentle_modulation"],
        "moderate": [40, 60, "noticeable_effect"],
        "strong": [60, 80, "prominent_flange"],
        "extreme": [80, 100, "chaotic_modulation"]
      }
    },
    "feedback": {
      "type": "percentage",
      "range": {
        "min": 0,
        "max": 95,
        "default": 25
      },
      "unit": "%",
      "description": "Signal regeneration for metallic character",
      "technicalDetails": "Recursive delay with controlled feedback for comb filtering",
      "sweetSpots": {
        "clean": [0, 20, "minimal_coloration"],
        "warm": [20, 40, "subtle_metallic"],
        "metallic": [40, 60, "classic_flange"],
        "intense": [60, 80, "heavy_character"],
        "extreme": [80, 95, "creative_effects"]
      }
    },
    "stereo": {
      "type": "percentage",
      "range": {
        "min": 0,
        "max": 100,
        "default": 75
      },
      "unit": "%",
      "description": "Stereo image width and character",
      "technicalDetails": "True stereo processing with phase coherence",
      "sweetSpots": {
        "mono": [0, 30, "centered_mono"],
        "narrow": [30, 60, "focused_stereo"],
        "wide": [60, 85, "expansive_stereo"],
        "extreme": [85, 100, "maximum_width"]
      }
    },
    "mix": {
      "type": "percentage",
      "range": {
        "min": 0,
        "max": 100,
        "default": 30
      },
      "unit": "%",
      "description": "Balance between dry and flanged signal",
      "technicalDetails": "Linear crossfade maintaining phase coherence",
      "sweetSpots": {
        "subtle": [10, 30, "gentle_enhancement"],
        "balanced": [30, 50, "musical_integration"],
        "prominent": [50, 70, "effect_focused"],
        "dominant": [70, 90, "effect_dominant"],
        "parallel": [20, 40, "blended_character"]
      }
    }
  },
  "presets": {
    "classic": {
      "vintage_flange": {
        "name": "Vintage Flange",
        "description": "Classic 70s flanging effect",
        "settings": {
          "delayTime": 8,
          "lfoRate": 0.8,
          "lfoDepth": 60,
          "feedback": 35,
          "stereo": 70,
          "mix": 40
        }
      },
      "tape_flange": {
        "name": "Tape Flange",
        "description": "Vintage tape-based flanging character",
        "settings": {
          "delayTime": 10,
          "lfoRate": 0.5,
          "lfoDepth": 50,
          "feedback": 25,
          "stereo": 65,
          "mix": 45
        }
      }
    },
    "musical": {
      "guitar_enhancement": {
        "name": "Guitar Enhancement",
        "description": "Subtle guitar flanging for mix",
        "settings": {
          "delayTime": 4,
          "lfoRate": 0.6,
          "lfoDepth": 35,
          "feedback": 20,
          "stereo": 80,
          "mix": 25
        }
      },
      "vocal_spread": {
        "name": "Vocal Spread",
        "description": "Subtle vocal enhancement and stereo spread",
        "settings": {
          "delayTime": 2.5,
          "lfoRate": 0.4,
          "lfoDepth": 25,
          "feedback": 15,
          "stereo": 75,
          "mix": 20
        }
      }
    },
    "creative": {
      "metallic_sweep": {
        "name": "Metallic Sweep",
        "description": "Intense metallic flanging for effects",
        "settings": {
          "delayTime": 12,
          "lfoRate": 2.5,
          "lfoDepth": 75,
          "feedback": 60,
          "stereo": 85,
          "mix": 60
        }
      },
      "underwater": {
        "name": "Underwater",
        "description": "Muffled underwater effect",
        "settings": {
          "delayTime": 6,
          "lfoRate": 0.3,
          "lfoDepth": 40,
          "feedback": 30,
          "stereo": 60,
          "mix": 50
        }
      }
    },
    "genre": {
      "rock": {
        "name": "Rock Flange",
        "description": "Classic rock guitar flanging",
        "settings": {
          "delayTime": 7,
          "lfoRate": 1.0,
          "lfoDepth": 55,
          "feedback": 30,
          "stereo": 75,
          "mix": 45
        }
      },
      "electronic": {
        "name": "Electronic Flange",
        "description": "Modern electronic music flanging",
        "settings": {
          "delayTime": 10,
          "lfoRate": 2.0,
          "lfoDepth": 70,
          "feedback": 40,
          "stereo": 85,
          "mix": 55
        }
      },
      "pop": {
        "name": "Pop Enhancement",
        "description": "Subtle pop production flanging",
        "settings": {
          "delayTime": 3,
          "lfoRate": 0.4,
          "lfoDepth": 30,
          "feedback": 15,
          "stereo": 65,
          "mix": 25
        }
      }
    }
  },
  "technicalSpecs": {
    "flangingAlgorithm": "analog_style_comb_filter",
    "delayRange": [0.1, 20],
    "lfoWaveforms": ["sine", "triangle", "square", "saw"],
    "tempoSync": true,
    "stereoProcessing": "true_stereo_with_phase_coherence",
    "latency": 0,
    "cpuUsage": 0.3,
    "sampleRates": [44100, 48000, 88200, 96000, 192000]
  }
}
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Flanger

| Parameter | Type | Range | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Delay** | Slider | 0 to 20ms | **Psychedelic**| **Tone** | Initial timing offset. |
| **Depth** | Slider | 0 to 100% | **Upbeat** | **Motion** | How far the LFO moves the delay. |
| **Feedback** | Knob | -100 to 100%| **Upbeat** | **Resonance** | Feeds signal back into input. |
| **LFO Freq** | Knob | 0 to 20Hz | **Spacey** | **Rhythm** | Speed of the modulation sweep. |
| **Stereo** | Slider | 0 to 180° | **Spacey** | **Width** | Phase offset between ears. |

- **Vibe Impact Tag (Resonance):** High Feedback creates "Whistling" tones that cut through a mix.
- **Mix Impact Tag (Width):** Large Stereo values can cause mono phase cancellation. [SRC: IL-MAN]
```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Fruity Flanger",
  "category": "Modulation",
  "parameters": [
    {
      "section": "Delay Line",
      "id": "delay",
      "name": "Delay",
      "range": { "min": 0, "max": 20, "unit": "ms" },
      "description": "Base delay time."
    },
    {
      "section": "Modulation",
      "id": "rate",
      "name": "Rate",
      "range": { "min": 0, "max": 5, "unit": "Hz" },
      "description": "LFO Speed."
    },
    {
      "section": "Modulation",
      "id": "depth",
      "name": "Depth",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "LFO Amplitude."
    },
    {
      "section": "Modulation",
      "id": "phase",
      "name": "Phase",
      "range": { "min": 0, "max": 360, "unit": "deg" },
      "description": "LFO Stereo offset."
    },
    {
      "section": "Feedback",
      "id": "feed",
      "name": "Feed",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Feedback Level."
    },
    {
      "section": "Mix",
      "id": "invert_wet",
      "name": "Inv Wet",
      "options": ["Off", "On"],
      "description": "Inverts Wet signal phase."
    },
    {
      "section": "Mix",
      "id": "cross",
      "name": "Cross",
      "range": { "min": -100, "max": 0, "unit": "dB" },
      "description": "Cross-channel mix level."
    }
  ]
}

```

---

## FILE: 02-Data\presets\classic-jet-plane.json

```json
{
  "presetName": "Classic Jet Plane",
  "plugin": "Fruity Flanger",
  "description": "The quintessential sweeping flanger effect.",
  "settings": {
    "delay": 2.5,
    "depth": 50.0,
    "rate": 0.5,
    "feedback": 0.7,
    "cross": 0.3
  },
  "usage": "Use on drum fills, synth transitions, or heavy electric guitars."
}

```

---

## FILE: 02-Data\presets\metallic-resonator.json

```json
{
  "presetName": "Metallic Resonator",
  "plugin": "Fruity Flanger",
  "description": "High feedback and short delay for a ring-mod style metallic tone.",
  "settings": {
    "delay": 0.5,
    "depth": 5.0,
    "rate": 0.0,
    "feedback": 0.9,
    "cross": 0.0
  },
  "usage": "Creative sound design on percussion or futuristic sound effects."
}

```

---

## FILE: 02-Data\presets\soft-chorus-substitute.json

```json
{
  "presetName": "Soft Chorus Substitute",
  "plugin": "Fruity Flanger",
  "description": "Uses long delay times to mimic a chorus effect.",
  "settings": {
    "delay": 15.0,
    "depth": 30.0,
    "rate": 0.8,
    "feedback": 0.0,
    "cross": 0.5
  },
  "usage": "Use on clean guitars or electric pianos for a lush, moving sound."
}

```

---

## FILE: 02-Data\presets\underwater-vibe.json

```json
{
  "presetName": "Underwater Vibe",
  "plugin": "Fruity Flanger",
  "description": "Slow, deep modulation for a submerged feel.",
  "settings": {
    "delay": 5.0,
    "depth": 80.0,
    "rate": 0.2,
    "feedback": -0.5,
    "cross": 0.8
  },
  "usage": "Atmospheric pads, lo-fi keys, or experimental vocals."
}

```

---

## FILE: 02-Data\presets\wide-stereo-spread.json

```json
{
  "presetName": "Wide Stereo Spread",
  "plugin": "Fruity Flanger",
  "description": "Focuses on widening the signal without heavy modulation.",
  "settings": {
    "delay": 1.0,
    "depth": 10.0,
    "rate": 0.1,
    "feedback": 0.2,
    "cross": 1.0
  },
  "usage": "Best for background vocals or pads that need to feel 'around' the listener."
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Fruity Flanger)

## 1. Low-End Discipline
- **Rule:** Never flange the sub-bass.
- **Application:** Use an EQ *before* the flanger to cut everything below 200Hz, or use the **Cross Cutoff** if the version supports it. Metallic resonance on an 808 will destroy the "thump." [SRC: REPUTABLE]

## 2. The "Subtle Sheen" Rule
- **Rule:** For R&B keys, the Flanger should be "felt, not heard."
- **Application:** Set the **Mix** knob to 15% and **Feedback** to 0. This adds a shimmering width without the "Jet" sound.

## 3. Mono-Compatibility
- **Rule:** Check your sweep in Mono.
- **Move:** If the sound "hollows out" too much when the flanger sweeps, reduce the **Depth** or **Stereo** width.

## 4. Automation Timing
- **Rule:** Sweeps should land on the "One."
- **Application:** If using a flanger for a build-up, ensure the **LFO** is synced so the highest/lowest point of the sweep hits exactly when the beat drops.

## 5. Headroom Safety
- **Rule:** Resonance increases volume.
- **Application:** High Feedback settings can add 3-6dB of gain. Follow the flanger with a **Fruity Limiter** or turn down the output fader. [SRC: IL-MAN]
```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Fruity Flanger

## 1. Drum Loop "Elasticity"

1.  **Input:** Breakbeat.
2.  **Settings:**
    *   **Rate:** Sync to tempo (using LFO Rate or controller). Actually, Rate is in Hz. Use **2/3 Hz**ish.
    *   **Feed:** Medium.
    *   **Mix:** 50%.
3.  **Result:** The drums sound like they are being stretched and squeezed. Classic Jungle/DnB technique.

## 2. Guitar "Mist"

1.  **Input:** Clean Guitar.
2.  **Settings:**
    *   **Rate:** Fast (Vibrato speed).
    *   **Depth:** Low.
    *   **Feed:** Low.
    *   **Phase:** 180 degrees.
3.  **Result:** A shimmering Chorus/Vibrato hybrid that floats around the listener's head. Unlike standard Chorus, the feedback adds a "glassy" texture.

## 3. Hi-Hat Shaker

1.  **Input:** Static Hi-Hat Loop.
2.  **Settings:**
    *   **Delay:** Low.
    *   **Feed:** High.
    *   **Rate:** Fast.
3.  **Result:** The flanger adds movement to the high frequencies, turning a boring "Tick Tick" into a "Shh-Tss-Shh-Tss" groove.

## 4. The "Dive Bomb"

1.  **Automation:** Link **Delay** to a macro.
2.  **Feed:** Max.
3.  **Action:** Slam the Delay knob from Min to Max.
4.  **Result:** A massive laser-fall sound effect, perfect for transitions/drops.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: The Jet Transition (Fruity Flanger)

## Routing Context
- **Target:** Full Drum Bus or Melodic Group.
- **Position:** Insert FX (End of chain).

## Step-by-Step Setup
1.  On the target track, load **Fruity Flanger**.
2.  Set **LFO Speed** to `1/2 bar` (Tempo synced).
3.  Set **Feedback** to `80%` (Positive).
4.  Set **Depth** to `100%`.
5.  **The Play:** During the last 2 bars of a verse, automate the **WET MIX** from `0%` to `50%`.
6.  **The Result:** A soaring jet-engine sweep that builds massive tension before dropping into the hook.

## Vibe Check
- **Upbeat/Aggressive:** Essential for high-energy rap build-ups and EDM-style transitions.

## Variation
- **Hollow Sucking:** Use `-80%` (Negative) Feedback for a "sucking" sound that feels more like it's moving *away* from the listener. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Shaping_And_Control.md

```markdown
# Goal: Psychedelic Metallic Percussion (Flanger)

## Step-by-Step Setup
1.  Load a basic Hi-Hat pattern.
2.  Add **Fruity Flanger**.
3.  Set **LFO Speed** to `0` (Manual mode).
4.  Set **Feedback** to `95%` (Max Resonance).
5.  **The Warp:** Manually move the **Delay** slider between `0ms` and `5ms`.
6.  **Result:** The hi-hats will "ring" with a metallic, pipe-like resonance. 

## Vibe Check
- **Psychedelic/Spacey:** Creates an alien, industrial texture that makes a standard trap beat sound unique and experimental.

## Automation Idea
- Link the **Delay** slider to a **Fruity Peak Controller** on the Snare track. Now the hats "ring" differently every time the snare hits. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\10_Vibe_Moody.md

```markdown
# Vibe Workflow: Moody (Hollow Shadows)

*Goal: Add a dark, mysterious "breathing" texture to your melodies.*

## 🎛️ Routing Context
- **Routing**: Rhodes or Electric Piano -> Fruity Flanger.
- **Mix Status**: 30-50% Wet.

## 🚶 Step-by-Step Setup
1. **The Core Tone**: Set **Delay** to 8.0 ms (Lower center frequency).
2. **Hollow Character**: Click the **INV FB** (Invert Feedback) button.
3. **Subtle Motion**: Set **Rate** to 0.3 Hz. Set **Depth** to 40%.
4. **Darkness**: Place a **Fruity Free Filter** *after* the flanger and set it to a Low Pass at 1500Hz.
5. **Phase check**: Keep **Phase** at 0% for a focused, mono-compatible "shadow."

## 🔄 Variations
- **The "Rainy Day"**: Increase **Dry** to 100% and **Wet** to 20% for a ghost-like feel.
- **The "Underwater"**: Automate the **Delay** knob to move between 2ms and 15ms very slowly.

## ⚠️ Pitfalls & Fixes
- **Problem**: The sound is too "metallic."
- **Fix**: Ensure **INV FB** is active and reduce **Feed** to below 30%.

```

---

## FILE: 03-Workflows\by-goal\11_Vibe_Upbeat.md

```markdown
# Vibe Workflow: Upbeat (The Pop Shimmer)

*Goal: Add rhythmic energy and "sparkle" to a lead or percussion bus.*

## 🎛️ Routing Context
- **Routing**: Synth Lead or Percussion Bus -> Fruity Flanger.
- **Mix Status**: 20-30% Wet.

## 🚶 Step-by-Step Setup
1. **The Pulse**: Set **Rate** to match your song (e.g., 1/4 note or 1/2 note).
2. **Brightness**: Set **Delay** to 1.5 ms (High-frequency resonance).
3. **Width**: Set **Phase** to 60%.
4. **Energy**: Set **Feed** to 40% (Positive feedback for a "shiny" sound).
5. **Punch**: Keep **Dry** at 100% to preserve the attack.

## 🔄 Variations
- **The "Techno Swirl"**: Crank **Depth** to 100% and **Rate** to 4Hz for a vibrating energy.
- **The "Snare Tail"**: Apply only to the snare reverb send for a "sizzling" effect.

## ⚠️ Pitfalls & Fixes
- **Problem**: The lead sounds too thin.
- **Fix**: Reduce the **Wet** knob and increase the **Delay** time slightly to move the comb-filter notches away from the fundamentals.

```

---

## FILE: 03-Workflows\by-goal\12_Vibe_Psychedelic.md

```markdown
# Vibe Workflow: Psychedelic (Reverse Flange Morph)

*Goal: Create a disorienting, shifting texture that moves backward in time.*

## 🎛️ Routing Context
- **Routing**: Synth Lead or Pad -> Mixer Track -> Fruity Flanger.
- **Mix Status**: 100% Wet for sound design, 40% for the final mix.

## 🚶 Step-by-Step Setup
1. **Initialize**: Set **Rate** to 0.1 Hz (very slow).
2. **Width**: Set **Phase** to 100% (Maximum stereo offset).
3. **Resonance**: Set **Feed** to 70%.
4. **The "Swoosh"**: Set **Depth** to 80%.
5. **Recording**: Right-click the Mixer Track arm button and record a 4-bar passage of your synth.
6. **The Flip**: Take the recorded audio, double-click it, and select **Reverse**.
7. **The Re-Chop**: Chop the reversed audio into 1-bar segments and rearrange them.
8. **Mono Check**: Switch your Master track to Mono. Ensure the reversed "swooshes" still have weight.

## 🔄 Variations
- **The "Stutter Shift"**: Automate the **Delay** knob in a "stepped" pattern (holding values for 1 beat) before recording.
- **The "High Shimmer"**: Use a High-Pass Filter at 2kHz *before* the flanger so only the air is processed.

## ⚠️ Pitfalls & Fixes
- **Problem**: The reversed audio sounds like static noise.
- **Fix**: Reduce the **Feed** knob before recording; too much feedback creates a whistle that drowns out the original instrument.

## 🎚️ Automation Ideas
- **Warp Speed**: Link the **Rate** knob to a Peak Controller on your kick drum so the "swirl" speeds up every time the kick hits.

```

---

## FILE: 03-Workflows\by-goal\13_Vibe_Jazzy.md

```markdown
# Vibe Workflow: Jazzy (Analog Flutter)

*Goal: Mimic the subtle, organic pitch instability of tape or a rotating speaker.*

## 🎛️ Routing Context
- **Routing**: Guitar loop or Neo-Soul Keys -> Fruity Flanger.
- **Mix Status**: 10-20% Wet (Extreme Subtlety).

## 🚶 Step-by-Step Setup
1. **The Drift**: Set **Rate** to 0.15 Hz (Barely moving).
2. **The Softness**: Set **Delay** to 10.0 ms (Deep, lush range).
3. **No Resonance**: Set **Feed** to 0%. (We don't want metallic ringing here).
4. **Width**: Set **Phase** to 30% for a gentle "air" around the sound.
5. **Humanity**: Automate the **Rate** knob slightly using a Fruity Formula Controller with a random LFO to avoid a mechanical feel.

## 🔄 Variations
- **The "Bossa Nova"**: Use a Triangle LFO for a "sharper" pitch drift.
- **The "Lofi Vinyl"**: Add 5% **Distortion** (via the FX tab or a separate plugin) after the flanger.

## ⚠️ Pitfalls & Fixes
- **Problem**: It sounds like an effect.
- **Fix**: Lower the **Wet** knob until you can only tell it's on when you bypass it. Jazzy vibes are about the *feeling*, not the hearing.

```

---

## FILE: 03-Workflows\by-goal\14_Vibe_Vibey.md

```markdown
# Vibe Workflow: Vibey (Silky R&B Width)

*Goal: Add a wide, smooth, "liquid" sheen to modern vocals or synth stacks.*

## 🎛️ Routing Context
- **Routing**: Vocal Bus -> Send 1 (Fruity Flanger) -> Reverb.
- **Mix Status**: 100% Wet on the Send track.

## 🚶 Step-by-Step Setup
1. **The Wide Map**: Set **Phase** to 180 (Full stereo inversion).
2. **The Smooth Sweep**: Set **Rate** to 0.8 Hz.
3. **The Center**: Set **Delay** to 5.0 ms.
4. **The Silk**: Set **Feed** to 20% (Low).
5. **The Mix**: Blend the Send fader into the main mix until the vocals feel "expensive."
6. **Mono Check**: Toggle Mono. Ensure the vocal doesn't lose its "body." If it does, lower the Phase to 140.

## 🔄 Variations
- **The "Cloud Hook"**: Place a Reverb *before* the flanger so you are flanging the reverb tail.
- **The "High-End Air"**: Place a High-Pass Filter at 5kHz *after* the flanger on the send track.

## ⚠️ Pitfalls & Fixes
- **Problem**: The vocal sounds "phasy" and loses focus.
- **Fix**: Lower the Send fader and ensure the Dry vocal is still prominent in the center of your mix.

```

---

## FILE: 03-Workflows\by-instrument\drums.md

```markdown
# Instrument Workflow: Drums (Trap & Boom Bap)

## 1. The "Resonant Snare"
- **Recipe**: Feed 80%, Delay 1.2ms, Rate 0.
- **Move**: Tune the Delay until the metallic ring matches the "root" of your song.
- **Vibe**: Adds a industrial, 90s hardware feel to standard Trap snares.

## 2. Moving Hi-Hats
- **Recipe**: Rate 2Hz, Phase 100%, Wet 30%.
- **Move**: Automate the **Rate** to increase during drum fills.
- **Vibe**: Keeps repetitive hat loops interesting by constantly shifting their stereo position.

## 3. Percussion Bus "Glue"
- **Recipe**: INV FB active, Feed 40%, Rate 0.5Hz.
- **Move**: Use a high-pass filter before the flanger.
- **Vibe**: Inverted feedback adds a "boxy" coherence to a bus of mismatched percussive sounds.

```

---

## FILE: 03-Workflows\by-instrument\keys.md

```markdown
# Instrument Workflow: Keys & Pads

## 1. Underwater Rhodes
- **Recipe**: INV FB active, Delay 15ms, Rate 0.3Hz.
- **Move**: Follow with a Low-Pass Filter at 1200Hz.
- **Vibe**: A dark, "throaty" modulation that feels like the electric piano is played inside a resonant box.

## 2. Trance Pad Depth
- **Recipe**: Rate 0.5Hz, Depth 100%, Phase 180.
- **Move**: Automate the **Wet** knob to swell with the pad's filter.
- **Vibe**: Creates an evolving sense of stereo scale that expands as the filter opens.

## 3. Lo-Fi Flutter
- **Recipe**: Feed 30%, Rate 5Hz (Fast), Depth 10% (Low).
- **Vibe**: Mimics the rapid pitch jitter of a worn-out belt on a cheap turntable.

```

---

## FILE: 03-Workflows\by-instrument\vocals.md

```markdown
# Instrument Workflow: Vocals (Modern R&B)

## 1. Silky Ad-Libs
- **Recipe**: Rate 0.8Hz, Phase 180, Wet 40%.
- **Vibe**: Makes ad-libs sound "detached" from the main dry vocal, creating a wide, floating landscape.

## 2. Robotic "Auto-Tune" Edge
- **Recipe**: Feed 90%, Delay 0.5ms, Rate 0.
- **Move**: Put this *after* your pitch correction.
- **Vibe**: Adds a metallic buzzing character that emphasizes the digital nature of the vocal.

## 3. Parallel Widener
- **Recipe**: Delay 10ms, Rate 0.1Hz, Phase 90.
- **Move**: Use as a parallel send mixed at 10%.
- **Vibe**: Adds a subtle "air" and thickness to melodic vocals without making them sound obviously processed.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Flanger

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Flanger.
- **Key Info:** Feedback loop logic, Delay range (<20ms), LFO tempo sync options.

## Source ID: [SRC: REPUTABLE]
- **Source:** "The Science of Modulation" (Sound On Sound).
- **Key Info:** Differences between positive and negative feedback, comb filtering physics, and mono-compatibility issues with large phase offsets.

## Genre Style Board: Fruity Flanger

| Vibe | Key Move | Use Case |
| :--- | :--- | :--- |
| **Upbeat** | High Pos Feedback | Build-ups / Sweeps |
| **Psychedelic**| High Neg Feedback | Metallic Hi-Hats |
| **Spacey** | Slow Wide LFO | Ambient Pads |
| **Vibey** | Low Mix + No Feedback| Glossy R&B Keys |
| **Moody** | Filtered Feedback | Dark Sound Design|

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Modulation)

Sourced applications of flanging in Hip-Hop, Rap, and R&B.

## 1. The "2000s R&B" Texture
- **Source**: Darkchild / Rodney Jerkins productions.
- **Application**: Subtle flanging on rhythmic synth plucks or backing vocals.
- **Goal**: Silky width and a "processed" high-end air.

## 2. Psychedelic Trap
- **Source**: Travis Scott / Mike Dean.
- **Application**: Extreme flanging on synth leads, often automated or reversed.
- **Goal**: Disorientation and a "melting" sonic landscape.

## 3. Gritty Lo-Fi Hip-Hop
- **Source**: J Dilla / Madlib style.
- **Application**: Inverted flanging on drum breaks or samples to add boxy character.
- **Goal**: Mimicking the imperfections of vintage hardware samplers.

## 4. Modern Pop-Rap
- **Source**: Post Malone / Drake.
- **Application**: Flanging on high-frequency percussion (shakers/hats) or background vocal "halos."
- **Goal**: Ear-candy and keeping repetitive elements from sounding static.

```

---

## FILE: 04-Reference\comb-filter-theory.md

```markdown
# Technical Reference: Comb Filter Theory

Understanding the mathematics of Fruity Flanger. [SRC: DSP-DSP]

## 1. Constructive and Destructive Interference
When two signals are combined with a very short delay (typically <15ms), they interfere with each other.
- **Constructive**: Frequencies where the peaks of both waves align are boosted by 6dB.
- **Destructive**: Frequencies where the peak of one aligns with the trough of the other are cancelled completely (notched).

## 2. Linear Spacing
Unlike a Phaser (which uses all-pass filters to space notches non-linearly), a Flanger creates notches at linear multiples of the delay time.
- **Formula**: Notches occur at frequencies $f = (2n+1) / 2d$ (where $d$ is delay in seconds and $n$ is an integer).
- **Result**: This linear spacing creates the "metallic" or "harmonic" character unique to flanging.

## 3. The "Whistle" (Feedback)
Adding feedback ($g$) intensifies these peaks. As $g$ approaches 1 (100%), the peaks become narrower and taller, creating a resonant pitch.
- **Negative Feedback**: Inverting the signal ($g = -1$) shifts the peaks to the locations of the previous notches, creating the "hollow" inverted sound.

## 4. Why 15ms?
Beyond ~20ms, the human ear begins to perceive the delay as a distinct "echo" rather than a timbral change. This is why flangers are restricted to very short delay ranges.

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Fruity Flanger Mechanics

## 1. Modulation Logic

*   **Formula:** `Current_Delay = Delay + (LFO * Depth)`.
*   **Implication:** If Delay is 10ms and Depth is 5ms, the delay line sweeps used 10ms-15ms.
*   **Through Zero:** To achieve Through Zero, the Delay must hit 0ms. Therefore `Delay` should be 0, and `Depth` should drive it? Or `Delay` is the *start* point?
    *   Actually, if Delay is 0 and Depth is 5ms, it sweeps 0-5ms.

## 2. Damping Topology

*   **Type:** 6dB/Oct Low Pass Filter in the Feedback Loop.
*   **Effect:** Simulates "Analog BBD (Bucket Brigade Device)" chips which naturally lose high frequencies on every recirculation.
*   **Value:** "0" means No Damping (Bright). "1" means Full Damping (Dark).

## 3. Stereo Cross

*   **Signal:** `Output_L = Wet_L + Cross_R` ?
*   **Inversion:** The Cross signal is inverted.
*   **Psychoacoustics:** This creates an artificial Phase Difference that forces the brain to localize sound "outside" the head. Highly effective on headphones, dangerous on Mono systems.

## 4. LFO Shape

*   **Sine:** Smooth, musical, liquid. Transitions slow down at the peaks/troughs.
*   **Triangle:** Linear, mechanical, siren-like. Constant rate of change.
*   **Hybrid:** The Shape knob morphs between them, allowing you to fine-tune the "turnaround" feel of the sweep.

```

---

