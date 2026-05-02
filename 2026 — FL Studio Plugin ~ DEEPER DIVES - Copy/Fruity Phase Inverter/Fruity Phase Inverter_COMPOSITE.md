# Fruity Phase Inverter - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Phase Inverter - Simple Phase Utility

`\`\`
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
`\`\`

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
  `\`\`json
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
  `\`\`

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

`\`\`
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
`\`\`

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
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Phase Inverter

## Purpose & Identity
Fruity Phase Inverter is a foundational utility for **flipping the polarity** of an audio signal. It allows you to invert the positive and negative voltage swings of the Left and Right channels independently. This is primarily used to fix phase cancellation—where two signals "fight" and silence each other—or to create wide, immersive stereo effects. [SRC: IL-MAN]

## 60-Second Mental Model
Imagine a jump-rope. Normal audio is the rope going UP then DOWN. Flipping the polarity makes it go DOWN then UP. If you have two ropes and one goes up while the other goes down, they cancel each other out. Fruity Phase Inverter ensures both ropes are moving in the same direction at the same time.

## Hip-Hop / R&B Context
Physics rules the mix, especially in the low-end.
- **Layered Kicks:** When you layer a "Thump" kick with a "Click" kick, they might partially cancel out, making the final kick sound thin. Flipping the phase on one often "recovers" the lost bass.
- **Vocal Stacks:** If wide R&B vocal stacks sound "hollow" in the middle, one of the takes might be out of phase.
- **The "Wide" Ad-lib:** Intentionally inverting one channel of a mono ad-lib to make it sound like it's coming from "outside" the speakers.

## When To Use
- When a sound gets **quieter or thinner** when you add a second layer.
- When recording a snare with **two microphones** (Top and Bottom).
- When you need to check if two tracks are identical (they will go silent if one is inverted).

## When NOT To Use
- **Standard Panning:** Use the Mixer Pan or **Fruity PanOMatic**.
- **Delay-based Width:** If you want the Haas effect, use **Fruity Stereo Shaper**. Phase Inverter only does a 180-degree flip.
- **Surgical EQ:** If a sound is "muddy," use an EQ; phase inversion is for "hollow" sounds.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Phase Inverter

## UI Tour
The UI is purely functional, consisting of two main toggle switches:

1.  **LEFT (L) Button:**
    - **Off:** Normal polarity.
    - **On (Lit):** Inverts the Left channel by 180 degrees. [SRC: IL-MAN]
2.  **RIGHT (R) Button:**
    - **Off:** Normal polarity.
    - **On (Lit):** Inverts the Right channel by 180 degrees.
3.  **BOTH Buttons On:** Inverts the entire stereo signal. (Audibly, this sounds identical to both being off, unless combined with other tracks).

## Functional Flow
1.  **Input:** Stereo audio enters the plugin.
2.  **Polarity Check:** The plugin checks the state of the L/R buttons.
3.  **Multiplication:** If a button is ON, the plugin multiplies every sample value in that channel by **-1**.
4.  **Zero Latency:** This calculation is instantaneous. It does not delay the signal in time.
5.  **Output:** Signal leaves with shifted polarity.

## Polarity vs. Phase
- **Polarity (What this plugin does):** An instantaneous flip of the "positive" and "negative" peaks.
- **Phase:** A delay in time. 
- *Note:* While we call it "Phase Inverter," it is technically a **Polarity Inverter**. Inverting polarity is equivalent to a 180-degree phase shift for a sine wave. [SRC: REPUTABLE]

## Things Beginners Misunderstand
- **"It sounds the same":** If you put this on a single track and flip the phase, it will sound identical. You only hear the effect when **combining** it with another signal (like a parallel bus or a layer).
- **Mono Compatibility:** If you invert only ONE channel (L or R), the sound will completely disappear when summed to mono. Always check your master in mono! [SRC: IL-KB]

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Phase Inverter

## 1. The "Kick Recovery" Check
- **Technique:** Every time you layer two drum samples, load Phase Inverter on one of them.
- **Execution:** Toggle the L and R buttons together.
- **Listen For:** Does the low-end get "bigger" or "thinner"? Keep the setting that sounds **heavier**.
- **Why:** Samples from different packs often have inverted polarity relative to each other.

## 2. Snare Top/Bottom Alignment
- **Technique:** If you record a live snare with a mic on top and one underneath.
- **Execution:** Put Phase Inverter on the **Bottom Mic**. Flip both L and R.
- **Reason:** When the stick hits the snare, the top head moves *away* from the top mic, but *toward* the bottom mic. They are naturally 180 degrees out of phase. Flipping the bottom mic brings the "thump" back. [SRC: REPUTABLE]

## 3. Pseudo-Stereo "Outside" Width
- **Technique:** Use this for background ad-libs that need to stay out of the way of the lead.
- **Setup:** Send a mono vocal to a stereo mixer track. 
- **Execution:** Invert the **Left channel only**.
- **Result:** The vocal will sound extremely wide, as if it's coming from outside the speakers.
- **Warning:** This sound will **vanish** on phone speakers or mono systems. Use with caution.

## 4. The "Null Test" (Plugin Comparison)
- **Technique:** Checking if two plugins sound exactly the same.
- **Execution:** Put Plugin A on Track 1, Plugin B on Track 2. Invert the phase on Track 2.
- **Result:** If they are identical, you will hear **total silence**. Any sound you hear is the "difference" (distortion, noise, or EQ) between the two. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
- **Pitfall:** "The bass disappeared on my phone."
  - **Fix:** You inverted one channel of your bass. Bass must always be in phase and ideally mono. 
- **Pitfall:** "I'm losing volume."
  - **Fix:** You might have partial phase cancellation. Try nudging the audio clip by a few milliseconds in the playlist instead of just using the 180-degree flip.

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Phase Inverter

Phase is about the **physicality** of the sound.

## 1. Moody (Heavy, Solid, Immovable)
- **Concept:** Ensuring the low-end is perfectly aligned so it feels "heavy."
- **Levers:**
  - **Sub-Bass Alignment:** Align the phase of your 808 with your Kick. If the 808 "pushes" while the Kick "pulls," the vibe feels weak and empty.
- **Listen For:** A "thud" that you can feel in your chest.
- **Don't Do This:** Avoid inverting channels on your low-end; keep it solid and mono.

## 2. Upbeat (Snappy, Sharp, Energetic)
- **Concept:** Maximizing transient "crack."
- **Levers:**
  - **Snare Polarity:** If layering snares, ensure the initial "transient" peaks are all moving UP at the same time. Use Phase Inverter to flip any sample that is moving DOWN.
- **Listen For:** A snare that "cuts" through the mix without needing more volume.
- **Don't Do This:** Don't let your transients fight; it kills the energy.

## 3. Psychedelic (Disorienting, Wide, Immersive)
- **Concept:** Breaking the stereo "center."
- **Levers:**
  - **One-Channel Inversion:** Invert the Right channel of a synth pad. It creates a "phasey" wide sensation that feels trippy and unnatural.
- **Listen For:** Sounds that seem to wrap around the back of your head.
- **Don't Do This:** Don't use this on the "hook" elements; keep the main focus stable.

## 4. Jazzy (Organic, Roomy, Authentic)
- **Concept:** Natural mic placement simulation.
- **Levers:**
  - **Overhead Alignment:** In a jazz drum kit, ensure the overheads and the kick mic aren't canceling each other's low frequencies.
- **Listen For:** A "natural" kit sound where the kick feels integrated into the room.
- **Don't Do This:** Avoid extreme widening; jazz vibes rely on a realistic soundstage.

## 5. Vibey (Lush, Polished, Expensive)
- **Concept:** Smooth layering without "hollowness."
- **Levers:**
  - **Vocal Stack Check:** In R&B, you might have 10 layers of vocals. If they sound "thin" or "comb-filtered," use Phase Inverter to find the rogue take that is out of phase.
- **Listen For:** A "thick" vocal wall that sounds like a single giant voice.
- **Don't Do This:** Don't ignore the mono-check; expensive vibes must work everywhere. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\complete-guide.md

```markdown
# Fruity Phase Inverter – Complete Guide

## What It Does
Inverts the phase of audio signals (flips waveform polarity). Essential for phase alignment, stereo manipulation, and creative effects.

## Parameters
- **Left Channel Invert**: Flip left channel phase
- **Right Channel Invert**: Flip right channel phase
- **Swap L/R**: Exchange left and right channels

## Core Concepts

### Phase Inversion Basics
- Flips waveform upside down (positive becomes negative)
- Doesn't change sound when heard alone
- Creates cancellation when mixed with non-inverted signal
- Critical for fixing phase issues in multimic recordings

### Common Applications
1. **Phase Correction**: Fix phase issues between layered sounds
2. **Stereo Width**: Create wider stereo image
3. **Bass Management**: Mono bass frequencies
4. **Creative Effects**: Phase cancellation tricks

## Hip-Hop Production Uses

### Layered Kicks
**Problem**: Two kicks cancel each other out
**Solution**: Invert phase on one kick
- Test both ways to see which sounds fuller
- May need to invert one or both channels

### Sample Stacking
**Problem**: Layered samples sound thin
**Solution**: Flip phase on one layer
- Creates constructive interference
- Often makes sound fuller and punchier

### Stereo Bass Fix
**Problem**: Bass disappears on mono playback
**Solution**: 
1. Split bass to stereo
2. Invert one channel
3. Creates phase-based stereo (mono-compatible)

### Vocal Double Phase
**Problem**: Doubled vocals sound muddy
**Solution**:
- Pan doubles left/right
- Invert phase on one side
- Creates spacious effect

## Workflow Recipes

### Make 808 Mono (Club-Ready)
1. Route 808 to track with Phase Inverter
2. Don't invert either channel
3. Use "Swap L/R" to check for issues
4. If swap changes sound, fix phase at source

### Wider Hi-Hats
1. Duplicate hi-hat track
2. Pan one left, one right
3. Add Phase Inverter to one side
4. Invert both channels on one side
5. Creates wide, phase-based stereo

### Fix Thin Snare
1. Layer two snare samples
2. If sound is thin, add Phase Inverter
3. Invert phase on second snare
4. Test both ways for fuller sound

### Vocal Clarity in Mix
1. If vocal fights with sample
2. Try inverting sample phase
3. May reduce frequency masking
4. Test in context

## Advanced Techniques

### Mid-Side Processing Setup
1. Duplicate track
2. One track: normal (Mid)
3. Second track: Phase Inverter on one channel (Side)
4. Process each differently
5. Recombine for MS effect

### Phase-Based Gating
1. Send signal to two tracks
2. Invert phase on one
3. Mix together = silence
4. Modulate mix for gating effect

### Stereo Enhancement
1. Duplicate mono source
2. Pan copies left/right
3. Invert one side
4. Add slight delay to one
5. Creates pseudo-stereo

## Genre-Specific Tips

### Trap
- Use on layered 808s to maximize low-end
- Fix phase on stacked claps
- Mono check all bass elements

### Boom Bap
- Ensure sample phase coherency
- Check when layering drum breaks
- Fix vinyl rip phase issues

### Lo-Fi
- Create vintage phase effects
- Subtle inversion for texture
- Combine with filtering

### Melodic
- Wide stereo on pads
- Phase-based vocal widening
- Layered synth correction

## Mixing Considerations

### When to Use
- ✓ Layered sounds seem thin
- ✓ Multi-mic recordings
- ✓ Stereo width creation
- ✓ Bass mono compatibility

### When to Avoid
- ✗ If sound is already full
- ✗ On individual mono sources (no effect)
- ✗ Without A/B testing
- ✗ On master bus (usually)

## Troubleshooting

**Problem**: Inverting phase makes sound worse
- Try inverting different channel
- May not be phase issue
- Check source quality

**Problem**: No audible difference
- Normal if listening in mono
- Check in stereo playback
- Ensure signal has stereo content

**Problem**: Sound completely cancels
- Good! Shows phase was perfectly out
- Use this to identify phase issues
- Invert to fix

**Problem**: Bass disappears on phone speakers
- Bass has phase issues
- Use Phase Inverter + EQ to mono low end
- Test on various playback systems

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Phase Inverter (5 Minutes)

1.  **Insert:** Load **Fruity Phase Inverter** on a mixer track (e.g., a Bass layer).
2.  **Toggle Both:** Click both the **L** and **R** buttons to flip the total polarity.
3.  **Listen:** Does the sound get louder or quieter when combined with your Kick drum?
4.  **Decide:** If it sounds "fuller" when the lights are **ON**, leave it on.
5.  **Stereo Width:** (Optional) Turn ON only the **L** button for an instant (but mono-unsafe) widening effect on background ad-libs. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity Phase Inverter

- **Ignoring the Mix:** Toggling the phase while the track is soloed. Polarity flipping has **no audible effect** on a solo track. You must listen to it *in the mix*.
- **One-Channel Bass:** Inverting only L or R on a sub-bass. This results in the bass completely disappearing on mono speakers (like most smartphones or club systems). **Fix:** Always flip L and R together for bass.
- **Confusion with Delay:** Thinking that inverting phase will fix a timing issue. **Fix:** Phase Inverter only flips polarity (180 deg). If your samples are off by a few milliseconds, use the "Track Latency" offset in the mixer or nudge the clip.
- **Null Test Failure:** Not realizing that if two sounds aren't *identical* in volume and timing, they won't fully cancel out even with inverted phase.
- **Double Inversion:** Using a plugin that already has a phase flip (like Fruity Stereo Shaper) and also using Phase Inverter, resulting in a "double flip" that puts you back where you started. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points: Fruity Phase Inverter

| Goal | L Button | R Button | Use Case |
| :--- | :--- | :--- | :--- |
| **Kick/Bass Align** | ON | ON | Fixing low-end cancellation between layers. |
| **Snare Bottom Mic**| ON | ON | Aligning top/bottom snare phase. |
| **Pseudo-Stereo** | ON | OFF | Massive width for non-essential ad-libs. |
| **The Null Test** | ON | ON | Comparing two identical tracks for silence. |
| **Mono Check** | OFF | OFF | Default state—start here first. |

*Note: There are no knobs to turn. Success is a binary choice: Is it better or worse with the switch on?* [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Starting Points: Moody (Fruity Phase Inverter)

- **The Goal:** A "solid" and "heavy" low-end mood. 
- **Recipe:**
  1. Load your Kick and 808 on separate tracks.
  2. Load Phase Inverter on the **808 Track**.
  3. While both play, toggle **L and R together**.
  4. Listen for the "weight." If the 808 feels like it "sucks" the energy out of the room when the switch is OFF, turn it ON.
- **Vibe Lever:** The "Physical Impact." A phase-aligned low-end feels immovable and heavy, essential for moody trap.
- **Mono Check:** Ensure the 808 stays loud when you hit the mono switch on the master. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey

## Upbeat (The "Transient Punch")
- **Setup:** Layered Snares.
- **Move:** Flip phase on Layer 2. Keep it on if the "snap" of the snare gets louder.
- **Effect:** Instant rhythmic clarity without adding volume.

## Psychedelic (The "Width Illusion")
- **Setup:** Mono Synth Pad.
- **Move:** Invert **Left Channel only**.
- **Effect:** The sound feels like it’s "stretching" your eardrums outward.

## Jazzy (The "Kit Cohesion")
- **Setup:** Drum Overheads vs Kick Mic.
- **Move:** Flip phase on the Kick mic.
- **Effect:** The kick should feel like it "sits" inside the drum kit rather than floating on top of it.

## Vibey (The "Thick Vocals")
- **Setup:** Vocal Doubles (Left and Right takes).
- **Move:** Check phase by panning both doubles to center. If they sound hollow, one take is out of phase.
- **Effect:** A rich, full vocal "wall" that feels expensive. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Fruity Phase Inverter – Quick Reference

## What It Does
Flips audio phase to fix cancellation issues, create stereo width, or ensure mono compatibility.

## 3 Simple Controls
- **Invert Left**: Flip left channel phase
- **Invert Right**: Flip right channel phase  
- **Swap**: Exchange L/R channels

## When to Use

### Fix Thin Layered Sounds
Layered kicks or snares sound weak? Invert phase on one layer.

### Make Bass Mono-Compatible
If bass disappears on phone speakers, check phase with this tool.

### Create Stereo Width
Duplicate signal, pan L/R, invert one side = wider sound.

### Correct Multi-Mic Issues
If two mics on same source, invert phase to avoid cancellation.

## Quick Workflows

**Layered Kick Fix**
1. Add to second kick layer
2. Invert left + right
3. Listen - fuller or thinner?
4. Keep whichever sounds better

**Mono Bass Check**
1. Add to bass track
2. Press "Swap L/R"
3. If sound changes = phase issue
4. Fix at source or use EQ to mono low end

**Wide Hi-Hats**
1. Duplicate hi-hat track
2. Pan one left, one right
3. Invert both channels on right
4. Instant width

**Sample Phase Test**
1. Add to layered sample
2. Try different invert combinations
3. Choose fullest sound

## Pro Tips
- Always A/B test (bypass on/off)
- Use on layers, not individual tracks
- Check in mono to test compatibility
- If no change in mono = only affects stereo
- Trust your ears over theory

## Common Mistakes
- ❌ Using on single mono track (does nothing)
- ❌ Not testing in mono playback
- ❌ Inverting without comparing
- ❌ Assuming inversion always helps

## Hip-Hop Applications
- **808s**: Ensure mono compatibility
- **Claps**: Fix layered clap phase
- **Samples**: Stack samples without cancellation
- **Vocals**: Create wide double effect

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Phase Inverter

| Parameter | Type | Range | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Invert L** | Switch | On / Off | **Psychedelic** | **Phase** | Flips polarity of the Left channel. |
| **Invert R** | Switch | On / Off | **Psychedelic** | **Phase** | Flips polarity of the Right channel. |

- **Vibe Impact Tag (Psychedelic):** Inverting only one channel creates a disorienting width effect that breaks standard stereo rules.
- **Mix Impact Tag (Low-End):** Inverting both channels is the primary fix for "thin" sounding drum layers. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\parameter-reference.json

```json
{
  "parameters": [
    {
      "name": "Invert Left",
      "type": "toggle",
      "default": "off",
      "description": "Inverts the phase of the left audio channel",
      "range": "on/off",
      "impact": "Flips left channel waveform polarity",
      "uses": [
        "Fix phase issues in left channel",
        "Create stereo phase effects",
        "Part of mid-side processing"
      ]
    },
    {
      "name": "Invert Right",
      "type": "toggle",
      "default": "off",
      "description": "Inverts the phase of the right audio channel",
      "range": "on/off",
      "impact": "Flips right channel waveform polarity",
      "uses": [
        "Fix phase issues in right channel",
        "Create stereo phase effects",
        "Part of mid-side processing"
      ]
    },
    {
      "name": "Swap L/R",
      "type": "toggle",
      "default": "off",
      "description": "Exchanges left and right audio channels",
      "range": "on/off",
      "impact": "Swaps stereo image",
      "uses": [
        "Test for phase issues (if sound changes, phase problem exists)",
        "Correct reversed stereo recordings",
        "Creative stereo placement"
      ]
    }
  ],
  "combinations": [
    {
      "name": "Both Inverted",
      "settings": {
        "invertLeft": true,
        "invertRight": true
      },
      "result": "Full polarity flip - sounds identical in isolation but affects phase when mixed with non-inverted signals"
    },
    {
      "name": "Left Only Inverted",
      "settings": {
        "invertLeft": true,
        "invertRight": false
      },
      "result": "Creates phase-based stereo effect, useful for stereo widening"
    },
    {
      "name": "Right Only Inverted",
      "settings": {
        "invertLeft": false,
        "invertRight": true
      },
      "result": "Creates phase-based stereo effect (opposite of left-only)"
    },
    {
      "name": "Swap + Invert",
      "settings": {
        "swap": true,
        "invertLeft": true
      },
      "result": "Complex stereo manipulation for advanced phase effects"
    }
  ]
}

```

---

## FILE: 02-Data\presets\00_Template_And_State_Strategy.md

```markdown
# Template & State Strategy: Fruity Phase Inverter

Since Phase Inverter is a technical utility, use these states for troubleshooting your sessions.

## 1. The "Low-End Health Check" State
- **Placement:** Mixer Slot 1 on every Bass/Drum layer.
- **Logic:** Start with both switches OFF. Toggle them ON/OFF during the "Rough Mix" stage to ensure no phase-fighting is happening between the Kick and Sub.

## 2. The "Pseudo-Stereo" Wrapper
- **Placement:** Used inside **Patcher** on a mono source.
- **Routing:** Split mono signal -> Left path (Normal) / Right path (Phase Inverter ON).
- **Result:** A reusable "Mega-Width" module for ad-libs.

## 3. The "Phase Flip" Bus
- **Placement:** On a parallel compression bus.
- **Reason:** Sometimes parallel compression can cause slight phase shifts when blended back. Use Phase Inverter to see if the "inverted" blend sounds more punchy. [SRC: REPUTABLE]

```

---

## FILE: 02-Data\presets\common-presets.json

```json
{
  "presets": [
    {
      "name": "Layered Kick Phase Fix",
      "category": "correction",
      "subgenre": "all",
      "settings": {
        "invertLeft": true,
        "invertRight": true
      },
      "description": "Use on second kick layer to fix phase cancellation",
      "workflow": "Add to layer, bypass to A/B test, keep if fuller"
    },
    {
      "name": "Stereo Width (Left Invert)",
      "category": "creative",
      "subgenre": "all",
      "settings": {
        "invertLeft": true,
        "invertRight": false
      },
      "description": "Duplicate track, pan L/R, use this on one side for width",
      "workflow": "Creates phase-based stereo widening effect"
    },
    {
      "name": "Stereo Width (Right Invert)",
      "category": "creative",
      "subgenre": "all",
      "settings": {
        "invertLeft": false,
        "invertRight": true
      },
      "description": "Alternative stereo widening (opposite of left invert)",
      "workflow": "Use with duplicated track panned opposite"
    },
    {
      "name": "Phase Test (Swap)",
      "category": "diagnostic",
      "subgenre": "all",
      "settings": {
        "swap": true
      },
      "description": "Test for phase issues - if sound changes, phase problem exists",
      "workflow": "Toggle swap on/off to identify phase problems"
    },
    {
      "name": "Full Polarity Flip",
      "category": "correction",
      "subgenre": "all",
      "settings": {
        "invertLeft": true,
        "invertRight": true
      },
      "description": "Complete phase inversion for fixing layered samples",
      "workflow": "Use when stacking samples sounds thin"
    },
    {
      "name": "Mid-Side Preparation",
      "category": "advanced",
      "subgenre": "all",
      "settings": {
        "invertLeft": true,
        "invertRight": false
      },
      "description": "Part of manual mid-side processing chain",
      "workflow": "Duplicate track, use this to create Side channel"
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Phase Inverter)

## 1. Mono Compatibility Rule #1
- **Rule:** If you use Phase Inverter to widen a sound (L-only flip), **it will disappear in mono.**
- **Application:** Never use this technique on the Lead Vocal, Kick, or 808. Use it only for wide "ear candy" or background textures.

## 2. Layering Polarity
- **Rule:** When layering two drum samples, one is almost always "better" in phase.
- **Application:** You have a 50/50 chance of your samples fighting. Toggling Phase Inverter is a **non-negotiable step** in every hip-hop drum layering session.

## 3. Vocal Doubling Physics
- **Rule:** Two separate vocal takes should be naturally in phase if the artist stayed the same distance from the mic.
- **Application:** If panned doubles sound "thin" when brought to the center, one take was likely recorded with a different preamp or mic setting that inverted its polarity. [SRC: REPUTABLE]

## 4. Sub-Bass Safety
- **Rule:** Never invert only one channel of a sub-bass.
- **Application:** Sub-bass should be identical in L and R channels (Mono). Inverting one channel creates "Stereo Bass," which causes destructive interference in almost all club environments.

## 5. The "Difference" Listen
- **Rule:** Use Phase Inverter to hear what you are *actually* doing to a sound.
- **Application:** Duplicate a track. Put an EQ on Track 2 and Invert the phase. The only sound you hear is the "difference" made by that EQ. This is a pro-level way to "audition" your processing. [SRC: REPUTABLE]

```

---

## FILE: 02-Data\rules\phase-rules.md

```markdown
# Phase Inversion Rules for Hip-Hop Production

## When to Invert Phase

### Layered Drums
**Rule**: Always test phase on layered kick drums
- If kicks sound thin together → try inverting one
- Test both ways (inverted vs. non-inverted)
- Choose whichever sounds fuller and punchier
- Same applies to: claps, snares, 808s

### Stacked Samples
**Rule**: Check phase when combining similar sounds
- Multiple samples playing same role
- If combined sound is weaker than individual → phase issue
- Invert one sample and compare
- May need to invert left, right, or both channels

### Multi-Mic Recordings
**Rule**: Bottom mic typically inverted
- If using multiple mics on same source
- Bottom mic captures opposite phase
- Invert to align with top mic
- Critical for drum recordings

## When NOT to Invert Phase

### Single Mono Sources
**Rule**: Phase inversion does nothing to mono signal alone
- Only matters when mixed with other signals
- No point inverting individual mono track
- Save CPU, skip it

### Already Aligned Signals
**Rule**: Don't fix what isn't broken
- If layers sound full → leave alone
- Inverting can make good sound worse
- Always A/B test before keeping

### Master Bus
**Rule**: Never on master (except rare mastering scenarios)
- Won't improve overall mix
- Can cause playback issues
- Handle phase at individual track level

## Stereo Width Rules

### Duplicate + Invert Method
**Rule**: Safe way to create stereo width
1. Duplicate mono track
2. Pan one left, one right
3. Invert left OR right (not both)
4. Result: phase-based stereo widening

### Bass Frequency Caution
**Rule**: Don't phase-widen bass frequencies
- Creates mono compatibility issues
- Bass disappears on mono systems
- Keep bass <150Hz mono, widen mids/highs only

### Vocal Doubling
**Rule**: Invert for spacious double effect
- Record/copy vocal twice
- Pan hard left/right
- Invert one side
- Creates wide, ethereal effect

## Phase Checking Rules

### Mono Compatibility Test
**Rule**: Always check mixes in mono
1. Use mixer mono toggle
2. If elements disappear → phase issue
3. Fix with Phase Inverter or source alignment
4. Critical for club/radio playback

### Swap Test
**Rule**: Use "Swap L/R" to diagnose phase
- Enable swap
- If sound changes noticeably → phase issue exists
- If no change → phase is good
- Quick diagnostic tool

### A/B Comparison
**Rule**: Always compare before committing
- Bypass plugin to hear difference
- Switch back and forth multiple times
- Choose version that sounds better in context
- Trust ears over theory

## Mixing Context Rules

### In Full Mix
**Rule**: Phase decisions must be made in context
- Solo testing can be misleading
- What works solo may fail in mix
- Always verify in full arrangement
- Check at various listening levels

### Genre Considerations
**Rule**: Different genres have different phase priorities

**Trap**: 
- Bass mono compatibility critical
- Phase-widen hi-hats acceptable
- Check 808 phase carefully

**Boom Bap**:
- Sample phase coherency important
- Drum break phase alignment
- Vinyl rip phase issues common

**Lo-Fi**:
- Phase "issues" sometimes desirable
- Creates vintage character
- Less strict compatibility needed

**Melodic**:
- Wide stereo on pads/synths
- Mono low-end still important
- Vocal phase alignment critical

## Advanced Phase Rules

### Mid-Side Processing
**Rule**: Phase Inverter creates Side channel
1. Duplicate track
2. One = Mid (normal)
3. Other = Side (invert one channel)
4. Process separately, recombine

### Phase Cancellation as Effect
**Rule**: Intentional cancellation for gating
- Send signal to two paths
- Invert phase on one
- Mix together = silence
- Modulate mix amount for effect

### Correlation Metering
**Rule**: Use correlation meter to verify
- +1 = perfectly in phase
- 0 = no correlation
- -1 = perfectly out of phase
- Aim for positive correlation on bass

## Troubleshooting Rules

**If layered sounds are thin**:
→ Try inverting phase on one layer

**If bass disappears in mono**:
→ Check phase with "Swap" test
→ Fix source or mono low frequencies

**If no change when inverting**:
→ Signal is likely mono
→ Or phase already aligned

**If sound completely cancels**:
→ Perfect phase cancellation
→ Invert to fix

**If unsure which way to invert**:
→ Test all combinations
→ Choose fullest/punchiest result
→ When in doubt, leave off

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Kick & Bass Alignment (Low-End Check)

## Routing Context
- **Track 1:** Kick Drum.
- **Track 2:** Sub-Bass or 808.
- **Position:** Place **Fruity Phase Inverter** on Slot 1 of the **Bass Track**.

## Step-by-Step Setup
1.  Play both your Kick and Bass together.
2.  Open **Fruity Phase Inverter** on the Bass track.
3.  Click both **L** and **R** buttons to ON.
4.  **Listen:** Does the low-end frequency (the "thud") get stronger or weaker?
5.  **Decision:** If it sounds bigger with the buttons **ON**, leave them on. If it sounds thinner, turn them **OFF**.

## What To Listen For
- You are looking for "constructive interference." When the phase is aligned, the two sounds add together to create a massive wall of sound. When misaligned, the bass "hollows out" the kick.

## Variation
- **Delayed Bass:** If the flip doesn't fix it, try nudging the Bass audio clip back by 5-10ms in the Playlist. This is "Time-based Phase Alignment." [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\03_Goal_Creative_Effect.md

```markdown
# Goal: Pseudo-Stereo Width (The "Haas" Flip)

## Step-by-Step Setup
1.  Take a **Mono Vocal** or Mono Lead.
2.  Duplicate the track to a second mixer channel.
3.  Pan Track 1 **Hard Left** (100%).
4.  Pan Track 2 **Hard Right** (100%).
5.  On Track 2, load **Fruity Phase Inverter**.
6.  Click the **L** (Left) button to ON.
7.  **Result:** You will hear an incredibly wide sound that feels like it’s "stretching" the room.

## Vibe Check
- **Psychedelic:** This effect is disorienting and trippy. Great for vocal ad-libs or transition sweeps.

## Pitfalls + Fixes
- **Pitfall:** "The sound disappears on phone speakers."
  - **Fix (Critical):** Check your master in **Mono**. If the sound vanishes, you MUST reduce the width or use a different widening technique (like a 10ms delay). **Pseudo-stereo from phase inversion is 100% mono-incompatible.** [SRC: IL-KB]

```

---

## FILE: 03-Workflows\by-instrument\drums.md

```markdown
# Workflow: Layered Kick Cleanup (Phase Inverter)

## The Concept
Preventing "phase fighting" between a punchy "click" kick and a deep "sub" kick.

## Step-by-Step
1.  Route your **Kick Click** and **Kick Sub** to a "Kick Bus" track.
2.  On the **Kick Sub** track, load **Fruity Phase Inverter**.
3.  Toggle the phase switches while listening to the Kick Bus.
4.  **Tweak:** If one setting sounds "tighter," keep it.
5.  **Verification:** Use **Wave Candy** (Oscilloscope mode) to see if the two kick waveforms are moving in the same direction at the start of the sample.

## Vibe Check
- **Upbeat:** A phase-aligned kick has more "crack" and "punch," driving the energy of pop-rap tracks.

## Pitfalls
- **Accidental L-only Inversion:** Ensure both L and R are toggled if the kick is mono. Inverting only one side will make the kick sound "sideways" and ruin the center of your mix. [SRC: REPUTABLE]

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Phase Inverter

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Phase Inverter.
- **Key Info:** L/R toggle functionality, 180-degree polarity shift description, utility categorization.

## Source ID: [SRC: IL-KB]
- **Source:** Image-Line Knowledge Base - "Phase and Mono Compatibility."
- **Key Info:** Warning about inverting single channels and the physics of mono summing (L+R=0).

## Source ID: [SRC: REPUTABLE]
- **Source:** "Sound On Sound" - Phase vs. Polarity (Article).
- **Key Info:** Technical distinction between time-delay (Phase) and instantaneous voltage flip (Polarity). Snare mic alignment best practices.

## Coverage Checklist
- [x] Polarity vs Phase Definitions
- [x] L/R Independent Toggle Mechanics
- [x] Snare Top/Bottom Alignment Workflow
- [x] Kick/Bass "Recovery" Recipe
- [x] Pseudo-Stereo "Haas" Creative Workflow
- [x] Mono Compatibility Reference Chart
- [x] Null Testing Best Practices

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity Phase Inverter

## 1. The "Thumping" Trap Kick
- **Mix Decision:** Invert layered sub-kick to match the transient of the main kick.
- **Vibe:** Upbeat/Moody.
- **Tooling:** Both L+R Inverted toggle.

## 2. The "Ghostly" Wide Ad-lib
- **Mix Decision:** Invert one channel of a mono background vocal for "outside-speaker" width.
- **Vibe:** Psychedelic/Trippy.
- **Tooling:** Left-only Inverted toggle.

## 3. The "Solid" R&B Vocal Wall
- **Mix Decision:** Check all 12 vocal stacks for phase alignment to ensure maximum "thickness."
- **Vibe:** Vibey/Expensive.
- **Tooling:** Dual Invert check on every 2nd layer.

## 4. The "Natural" Jazz Kit
- **Mix Decision:** Align overheads with the snare mic polarity.
- **Vibe:** Jazzy/Organic.
- **Tooling:** Polarity flip on Snare Top vs Overheads.

```

---

## FILE: 04-Reference\mono-compatibility-guide.md

```markdown
# Reference: Mono Compatibility Guide (Phase)

When using **Fruity Phase Inverter**, follow these rules to ensure your mix translates to all listening environments.

## The Rule of Summation
Mono summing happens when the Left and Right channels are added together (`L + R`).
- If L and R are identical, the sound gets +6dB louder.
- If L and R are 180 degrees out of phase (inverted), they result in **0 (Silence)**.

## Compatibility Table

| Action | Result in Stereo | Result in Mono | Vibe Recommendation |
| :--- | :--- | :--- | :--- |
| **Both Inverted (L+R)** | Normal sound. | Normal sound. | Safe for all tracks. |
| **Left Inverted Only** | Mega-wide / Weird. | **Total Silence.** | Only for "Ear Candy." |
| **90-Degree Shift** | Phasey / Thin. | Tonal loss (Comb-filter).| Avoid on low-end. |

## How to Test in FL Studio
1.  Go to the **Master Mixer Track**.
2.  Locate the **Stereo Separation** knob (below the fader).
3.  Turn it all the way to the **RIGHT** (Merged/Mono).
4.  If any instrument disappears or sounds like it's through a "tin can," your phase is wrong. [SRC: IL-MAN]

```

---

