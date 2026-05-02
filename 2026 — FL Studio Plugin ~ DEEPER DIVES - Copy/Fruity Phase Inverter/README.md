# Fruity Phase Inverter - Simple Phase Utility

```
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝ 
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝  
██║     ██║  ██║╚██████╔╝██║   ██║      ██║   
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝   

██████╗ ██╗  ██╗ █████╗ ███████╗███████╗    ██╗███╗   ██╗██╗   ██╗███████╗██████╗ ████████╗███████╗██████╗ 
██╔══██╗██║  ██║██╔══██╗██╔════╝██╔════╝    ██║████╗  ██║██║   ██║██╔════╝██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
██████╔╝███████║███████║███████╗█████╗      ██║██╔██╗ ██║██║   ██║█████╗  ██████╔╝   ██║   █████╗  ██████╔╝
██╔═══╝ ██╔══██║██╔══██║╚════██║██╔══╝      ██║██║╚██╗██║╚██╗ ██╔╝██╔══╝  ██╔══██╗   ██║   ██╔══╝  ██╔══██╗
██║     ██║  ██║██║  ██║███████║███████╗    ██║██║ ╚████║ ╚████╔╝ ███████╗██║  ██║   ██║   ███████╗██║  ██║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝    ╚═╝╚═╝  ╚═══╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
```

**Plugin Type:** Phase Utility
**Category:** Utility / Troubleshooting
**Official Manual:** [Image-Line Fruity Phase Inverter Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Phase%20Inverter.htm)

---

## 🎯 What is Fruity Phase Inverter?

Fruity Phase Inverter is a single-purpose utility designed to flip the polarity of an audio signal. It allows you to invert the phase of either the **Left** channel, the **Right** channel, or both. This is essential for fixing phase cancellation issues between microphones (e.g., top and bottom snare mics) or creating specific stereo widening effects.

**Key Capabilities:**
- **Left Invert:** Flips polarity of the L channel.
- **Right Invert:** Flips polarity of the R channel.
- **Both Invert:** Flips the entire signal (useful for comparison).
- **Lightweight:** Zero latency, zero CPU impact.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **polarity-vs-phase.md**
3. Create **parameter-cheat-sheet.md**
4. Put it on a mono kick, clone the kick, and flip the phase on one. Watch them cancel out to silence.

### For Mix Engineers:
1. Study **snare-top-bottom-alignment.md**
2. Review **kick-bass-phase-check.md**
3. Learn **manual-stereo-widening.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Invert L:** Toggle.
  - **Invert R:** Toggle.

- [ ] **polarity-vs-phase.md**
  - Why "Inverting" is technically flipping polarity.
  - How 180-degree shifts cause total silence in mono.

#### 02-Data/parameters/
- [ ] **phase-inverter-params.json**
  ```json
  {
    "plugin_name": "Fruity Phase Inverter",
    "category": "Utility",
    "parameters": [
      {
        "name": "Left Invert",
        "type": "switch",
        "description": "Flips L channel polarity"
      }
    ]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **snare-phase-fix.md**
  - Top mic vs Bottom mic.
  - Why the bottom mic is naturally out of phase.
  - Flipping the bottom mic to gain "thump".

- [ ] **pseudo-stereo-width.md**
  - Cloning a mono track.
  - Panning clone hard left, original hard right.
  - Inverting phase on the clone.
  - *Warning:* This vanishes in mono!

#### 03-Workflows/by-context/
- [ ] **drum-overhead-alignment.md**
- [ ] **layered-kick-cleanup.md**

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Silence is Gold

**Tasks:**
1. Load a sample
2. Clone it to a second mixer track
3. Route both to Master
4. Flip phase on one
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Is it truly silent? (If not, why? Check for tiny timing offsets).

---

## 📊 Plugin Specifications to Document

### Engine
- Latency (0 samples)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why did my sound get quieter when I flipped the switch? (You fixed a phase issue that was boosting, or created a new one).
2. When should I use this over Stereo Shaper? (Use this for speed/simplicity when you only need a flip).

---

## 🔗 Cross-Reference with Other Plugins

Fruity Phase Inverter is often used with:
- **Fruity Stereo Shaper** (Advanced phase/delay)
- **Edison** (Visualizing the phase alignment)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

```
Fruity Phase Inverter/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── polarity-vs-phase.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── phase-inverter-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── snare-phase-fix.md
│   │   └── pseudo-stereo-width.md
│
└── 04-Reference/
    └── mono-compatibility-guide.md
```

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Phase Inverter Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Phase%20Inverter.htm)
- [Fruity Phase Inverter Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Phase_Inverter_tutorials.htm)
- [Fruity Phase Inverter Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+phase+inverter+tutorial)

### Community Resources
- [Fruity Phase Inverter Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+phase+inverter&restrict_sr=1)
- [Fruity Phase Inverter User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Phase Inverter Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Phase and Polarity Fundamentals" - Understanding phase relationships
- "Stereo Imaging Techniques" - Creating width and depth
- "Phase Cancellation and Alignment" - Fixing phase issues

### Advanced Techniques
- **Polarity Inversion:** Understanding polarity vs phase
- **Stereo Widening:** Creating width through phase manipulation
- **Phase Alignment:** Fixing phase issues in recordings

---

## 📚 In-Depth Technical Analysis

### Phase Inversion Algorithm
Fruity Phase Inverter implements a simple but critical algorithm:
- **Polarity Flip:** Multiplies signal by -1 (180° phase shift)
- **Sample-Accurate Processing:** Zero latency operation
- **Channel-Specific Control:** Independent control over L/R channels
- **Mathematical Precision:** Exact inversion without artifacts
- **CPU Efficiency:** Minimal processing overhead

### Signal Processing Architecture
The internal architecture follows this order:
- **Input Stage:** Signal level monitoring and routing
- **Phase Detection:** Channel identification and routing
- **Inversion Engine:** Polarity multiplication by -1
- **Output Stage:** Final signal routing and monitoring

### Phase vs Polarity
Understanding the distinction:
- **Phase:** Time-based relationship between signals
- **Polarity:** Inversion of the signal's amplitude
- **Phase Inversion:** 180° time shift (requires delay)
- **Polarity Inversion:** Amplitude multiplication by -1 (instantaneous)
- **Practical Impact:** Both create similar audible effects

### Mono Compatibility Issues
Critical considerations for mono compatibility:
- **Complete Cancellation:** Two identical signals with opposite polarity cancel completely
- **Partial Cancellation:** Signals with similar content partially cancel
- **Level Reduction:** Mono summing can reduce overall level
- **Tonal Changes:** Phase relationships affect frequency response
- **Monitoring:** Essential to check mono compatibility

### Stereo Field Impact
Phase inversion affects the stereo field in specific ways:
- **Width Perception:** Inverting one channel can increase perceived width
- **Imaging:** Changes spatial positioning of elements
- **Coherence:** Affects how stereo elements work together
- **Separation:** Can improve or worsen element separation
- **Balance:** Alters the stereo balance of the mix

## 🎛️ Parameter Deep Dive

### Left Channel Control
- **Function:** Inverts the polarity of the left channel
  - Range: On/Off (binary)
  - Effect: Multiplies left channel by -1
  - Use for: Fixing phase issues in left channel
  - Pro tip: Use when left channel is out of phase with right
- **Behavior:**
  - Off: Normal polarity
  - On: Inverted polarity (× -1)
  - Pro tip: Can create stereo width when used appropriately
- **Applications:**
  - Multi-mic alignment: Fix phase between mics
  - Stereo widening: Create width with mono sources
  - Phase cancellation: Create specific cancellation effects
  - Mono compatibility: Check for mono issues
  - Pro tip: Always verify mono compatibility after use

### Right Channel Control
- **Function:** Inverts the polarity of the right channel
  - Range: On/Off (binary)
  - Effect: Multiplies right channel by -1
  - Use for: Fixing phase issues in right channel
  - Pro tip: Use when right channel is out of phase with left
- **Behavior:**
  - Off: Normal polarity
  - On: Inverted polarity (× -1)
  - Pro tip: Can create stereo width when used appropriately
- **Applications:**
  - Multi-mic alignment: Fix phase between mics
  - Stereo widening: Create width with mono sources
  - Phase cancellation: Create specific cancellation effects
  - Mono compatibility: Check for mono issues
  - Pro tip: Always verify mono compatibility after use

### Combined Channel Control
- **Function:** Inverts both channels simultaneously
  - Range: On/Off (both channels)
  - Effect: Multiplies both channels by -1
  - Use for: Overall polarity flip
  - Pro tip: Equivalent to rotating phase 180°
- **Behavior:**
  - Off: Normal polarity for both channels
  - On: Inverted polarity for both channels
  - Pro tip: No change in stereo imaging, only overall polarity
- **Applications:**
  - Overall polarity: Flip entire signal polarity
  - Comparison: A/B with original signal
  - Phase testing: Determine optimal polarity
  - Mono compatibility: Check overall polarity impact
  - Pro tip: No stereo width changes when both channels inverted

### Advanced Phase Techniques
- **Channel-Specific Inversion:** Inverting only one channel
  - Creates stereo width perception
  - Can fix specific channel phase issues
  - Affects mono compatibility significantly
  - Pro tip: Use for creative stereo effects
- **Sequential Inversion:** Inverting channels one at a time
  - Allows for precise phase alignment
  - Helps identify problematic channels
  - Essential for multi-mic setups
  - Pro tip: Test each channel individually

## 🎼 Sound Design Applications

### Phase Alignment
Using Phase Inverter for phase alignment:

**Multi-Microphone Setup:**
- **Snare Drum:** Top and bottom mic phase alignment
  - Bottom mic is naturally out of phase
  - Flip bottom mic polarity for "thump"
  - Creates fuller snare sound
  - Essential for drum recording
  - Perfect for achieving maximum impact

- **Kick Drum:** Inside and outside mic alignment
  - Outside mic captures different phase relationship
  - Align for maximum low-end impact
  - Creates punchy kick sound
  - Essential for electronic and rock music
  - Perfect for achieving maximum low-end

- **Guitar Amp:** Multiple mic setup alignment
  - Close mic vs room mic phase relationship
  - Align for optimal tone
  - Creates fuller guitar sound
  - Essential for guitar recording
  - Perfect for achieving professional tone

### Stereo Enhancement
Using Phase Inverter for stereo enhancement:

**Pseudo-Stereo Creation:**
- **Mono to Stereo:** Creating stereo from mono sources
  - Clone mono track to two channels
  - Pan one hard left, one hard right
  - Invert phase on one channel
  - Creates perceived width
  - Warning: Vanishes in mono

- **Width Enhancement:** Adding width to narrow sources
  - Duplicate track with slight timing offset
  - Apply phase inversion to duplicate
  - Creates Haas effect-like width
  - Essential for stereo enhancement
  - Perfect for adding width to mono sources

**Creative Stereo Effects:**
- **Phase Manipulation:** Creating unique stereo effects
  - Invert specific frequency ranges
  - Create unusual stereo imaging
  - Develop creative phase effects
  - Perfect for experimental music
  - Essential for creative stereo design

### Problem Solving
Using Phase Inverter for problem solving:

**Phase Cancellation:**
- **Identifying Issues:** Finding phase cancellation problems
  - Listen for loss of low-end
  - Check for thin, hollow sound
  - Verify mono compatibility
  - Essential for mix diagnosis
  - Perfect for troubleshooting

- **Fixing Issues:** Correcting phase cancellation
  - Identify problematic tracks
  - Apply phase inversion appropriately
  - Verify improvement in mono
  - Essential for professional mixing
  - Perfect for achieving solid low-end

**Mono Compatibility:**
- **Testing Compatibility:** Ensuring mono compatibility
  - Use mono button to check sum
  - Identify problematic phase relationships
  - Apply inversion to fix issues
  - Essential for broadcast compatibility
  - Perfect for ensuring professional standards

## 🧪 Experimental Techniques

### Advanced Phase Applications
Creative uses of Phase Inverter's capabilities:

**Stereo Widening:**
- Use phase inversion for creative width
- Combine with delay for Haas effect
- Create unusual stereo imaging
- Perfect for experimental music
- Essential for creative stereo design

**Cancellation Effects:**
- Create specific cancellation patterns
- Use for subtractive mixing
- Generate unique tonal changes
- Perfect for sound design
- Useful for creative subtraction

**Phase Manipulation:**
- Experiment with different phase relationships
- Create evolving phase effects
- Use automation for dynamic phase changes
- Perfect for evolving textures
- Essential for dynamic phase effects

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- Automate phase inversion for dynamic effects
- Create rhythmic phase changes
- Use for evolving stereo fields
- Perfect for live performance
- Use for expressive control

**Modulation Applications:**
- Use with external modulation sources
- Combine with other modulation effects
- Create complex phase modulation chains
- Perfect for evolving sounds
- Use for dynamic expression

**Multi-Stage Processing:**
- Use multiple instances in series
- Combine with other phase tools
- Create complex phase relationships
- Perfect for advanced sound design
- Use for sophisticated processing

## 🎚️ Workflow Optimization

### Phase Alignment Workflows
Efficient approaches to using Phase Inverter for alignment:

**Drum Recording:**
- Check phase relationships between mics
- Align top and bottom snare mics
- Verify kick drum mic alignment
- Essential for professional drum recording
- Pro tip: Always check phase in drum recording

**Multi-Track Alignment:**
- Align multiple tracks for optimal sum
- Check phase relationships between elements
- Verify mono compatibility after alignment
- Essential for professional mixing
- Pro tip: Use spectrum analyzer for visual feedback

**Live Performance:**
- Use for real-time phase correction
- Apply during live mixing
- Monitor for phase issues during performance
- Essential for live sound
- Pro tip: Have phase inversion readily available

### Integration Workflows
Working with other plugins and tools:

**Analysis Integration:**
- Use with spectrum analyzers for visual feedback
- Compare with reference tracks
- Use for corrective processing
- Combine with level meters for comprehensive analysis
- Integrate with other analytical tools

**Effects Integration:**
- Use before reverb for spatial effects
- Combine with delay for rhythmic patterns
- Integrate with chorus for width
- Work with filtering for tone shaping
- Optimize for effects chains

**Dynamics Integration:**
- Use with compression for control
- Combine with limiting for safety
- Integrate with gates for noise control
- Work with expanders for dynamic range
- Optimize for dynamics processing

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Kick Enhancement:** Aligning kick samples for maximum impact
- **Bass Management:** Ensuring phase alignment in bass elements
- **Stereo Enhancement:** Creating width in electronic elements
- **Mono Compatibility:** Ensuring club system compatibility
- **Energy Management:** Using phase for track energy

### Hip-Hop and R&B
- **Drum Phase:** Aligning drum samples for punch
- **Vocal Enhancement:** Checking phase in vocal layers
- **Bass Processing:** Ensuring bass phase alignment
- **Mix Enhancement:** Using phase for mix clarity
- **Creative Effects:** Adding unique character to elements

### Rock and Metal
- **Guitar Phase:** Aligning multiple guitar tracks
- **Drum Enhancement:** Managing drum phase relationships
- **Bass Processing:** Ensuring bass phase alignment
- **Mix Enhancement:** Using phase for mix clarity
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Processing:** Creating evolving phase effects
- **Spatial Effects:** Using phase for spatial enhancement
- **Experimental Sounds:** Creating unique sonic signatures
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Phase Inverter works well with various effects:
- **Reverb:** Managing phase in reverb returns
- **Delay:** Creating phase relationships with delays
- **Chorus:** Combining with chorus for width
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of phase-adjusted signals

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
Fruity Phase Inverter was developed as a simple but essential utility:
- Created to provide quick phase inversion
- Designed for low CPU usage and efficiency
- Developed with mixing and recording in mind
- Intended to complement other phase tools

### Evolution Through FL Studio Versions
- Initially introduced with basic phase inversion
- Enhanced with independent L/R control
- Improved with better integration and stability
- Maintained simplicity while improving functionality

### Impact on Music Production
Fruity Phase Inverter has influenced music production by:
- Providing accessible phase correction
- Enabling quick phase alignment
- Facilitating proper stereo imaging
- Supporting various musical genres with phase management

## 🧠 Advanced Processing Techniques

### Phase Alignment Mastery
Advanced techniques for phase alignment:
- **Multi-Mic Alignment:** Aligning multiple microphones
- **Stereo Pair Alignment:** Managing stereo pair relationships
- **Layered Element Alignment:** Aligning layered elements
- **Dynamic Phase:** Managing phase during automation
- **Frequency-Specific:** Aligning specific frequency ranges

### Stereo Enhancement
Advanced stereo processing techniques:
- **Width Control:** Managing stereo field width
- **Phase Relationships:** Understanding complex phase interactions
- **Mono Compatibility:** Ensuring mono-safe processing
- **Spatial Imaging:** Creating complex spatial effects
- **Imaging Control:** Managing stereo positioning

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique phase-based textures
- **Atmospheric Processing:** Building ambient phase effects
- **Rhythmic Effects:** Creating rhythmic phase patterns
- **Spatial Manipulation:** Creating immersive environments
- **Experimental Processing:** Pushing boundaries of phase manipulation

## 📊 Performance Considerations

### CPU Usage
Managing Phase Inverter's impact on system performance:
- **Minimal CPU Load:** Extremely efficient processing
- **Real-Time Performance:** Optimized for live performance
- **Instance Count:** Multiple instances have negligible impact
- **Parameter Automation:** No parameters to automate (binary switches)
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Artifact Prevention:** Zero artifacts in inversion
- **Phase Coherence:** Maintaining phase relationships
- **Headroom Management:** No level changes from inversion
- **Dithering:** Not applicable (no quantization changes)
- **Signal Integrity:** Preserving original signal content

### System Integration
Optimizing Phase Inverter within the system:
- **Buffer Management:** Working with any buffer settings
- **Threading:** Minimal processing thread usage
- **Driver Compatibility:** Works with all audio drivers
- **Latency Management:** Zero additional latency

## 🛠️ Troubleshooting Common Issues

### Phase Problems
- **Complete Cancellation:** Check for identical signals with opposite polarity
- **Loss of Low End:** Verify phase relationships between elements
- **Thin Sound:** Check for phase cancellation issues
- **Mono Issues:** Verify mono compatibility after phase changes
- **Stereo Imbalance:** Check for uneven phase application

### Technical Issues
- **High CPU Usage:** Phase Inverter has minimal CPU usage
- **Latency Issues:** Phase Inverter has zero latency
- **Clipping:** Phase Inverter doesn't affect gain
- **Artifacts:** Phase Inverter is artifact-free
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Phase inversion is a technical tool, not creative
- **Lack of Character:** Phase inversion doesn't add character
- **Poor Integration:** Phase issues indicate other problems
- **Overpowering:** Phase inversion is subtle but impactful
- **Lack of Control:** Binary on/off control is sufficient for phase

## 🎚️ Advanced Configuration

### Custom Setup
Creating and managing custom phase configurations:
- **Drum Setup:** Optimized for drum phase alignment
- **Vocal Setup:** Configured for vocal phase management
- **Instrument Setup:** Set up for instrument phase management
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple Phase Inverter instances effectively:
- **Track-Specific:** Different instances for different tracks
- **Channel-Specific:** Independent control per channel
- **Performance Optimization:** Managing multiple instances
- **Creative Applications:** Combining different phase states

### Integration Configurations
Optimizing for different integration scenarios:
- **Insert Processing:** Inline processing configurations
- **Send Processing:** Effects return configurations
- **Hardware Integration:** External hardware integration
- **DAW Integration:** Optimizing for FL Studio workflow

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about phase inverter techniques
- **Reddit Groups:** Sharing phase alignment techniques
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of phase alignment techniques
- **Written Guides:** In-depth articles on phase and polarity
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Technique Libraries:** Websites hosting phase alignment configurations
- **Technique Sharing:** Platforms for sharing phase management methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Perfectly null a signal using two identical tracks with opposite polarity
- [ ] Identify which microphone in a multi-mic setup is out of phase by ear
- [ ] Explain why flipping phase on one channel creates perceived stereo width
- [ ] Demonstrate proper phase alignment between top and bottom snare mics
- [ ] Create pseudo-stereo width from a mono source using phase inversion
- [ ] Troubleshoot phase cancellation issues in a mix
- [ ] Verify mono compatibility after applying phase inversion
- [ ] Integrate phase checking into efficient mixing workflows
- [ ] Apply phase inversion for creative stereo enhancement
- [ ] Explain the difference between phase and polarity inversion

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection