# Fruity Stereo Enhancer - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Stereo Enhancer - Quick Width Utility

`\`\`
███████╗████████╗███████╗██████╗ ███████╗ ██╗   ██╗    ███████╗███╗   ██╗██╗  ██╗ █████╗ ███╗   ██╗ ██████╗███████╗██████╗ 
██╔════╝╚══██╔══╝██╔════╝██╔══██╗██╔════╝██║   ██║    ██╔════╝████╗  ██║██║  ██║██╔══██╗████╗  ██║██╔════╝██╔════╝██╔══██╗
███████╗   ██║   █████╗  ██████╔╝█████╗  ██║   ██║    █████╗  ██╔██╗ ██║███████║███████║██╔██╗ ██║██║     █████╗  ██████╔╝
╚════██║   ██║   ██╔══╝  ██╔══██╗██╔══╝  ██║   ██║    ██╔══╝  ██║╚██╗██║██╔══██║██╔══██║██║╚██╗██║██║     ██╔══╝  ██╔══██╗
███████║   ██║   ███████╗██║  ██║███████╗╚██████╔╝    ███████╗██║ ╚████║██║  ██║██║  ██║██║ ╚████║╚██████╗███████╗██║  ██║
╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚══════╝ ╚═════╝     ╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Stereo Width / Phase Utility
**Category:** Utility / Mixing
**Official Manual:** [Image-Line Fruity Stereo Enhancer Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Stereo%20Enhancer.htm)

---

## 🎯 What is Fruity Stereo Enhancer?

Fruity Stereo Enhancer is a streamlined tool for controlling the spatial width of your tracks. It is simpler than Stereo Shaper, focusing on two main methods: **Stereo Separation** (Mid/Side level balance) and **Phase Offset** (Haas effect). It is ideal for widening synth pads, background vocals, or "collapsing" a stereo signal toward mono to fix phase issues.

**Key Capabilities:**
- **Stereo Separation:** Increases the volume of the "side" information vs the "mid."
- **Phase Offset:** Delays one channel (L or R) by up to 500ms to create psychoacoustic width.
- **Invert Phase:** Flips polarity on one channel.
- **Mono Capability:** Can completely mono a signal by turning separation to the right.
- **Panning/Vol:** Standard output controls to compensate for spatial shifts.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **separation-vs-offset.md**
3. Create **parameter-cheat-sheet.md**
4. Put it on a Synth Pad and turn the Stereo Separation knob to the left.

### For Mix Engineers:
1. Study **mono-collapsing-drums.md**
2. Review **haas-effect-widening.md** (Using Phase Offset)
3. Learn **fixing-pan-bias.md**

### For Sound Designers:
1. Study **pseudo-stereo-mono-sources.md**
2. Review **pre-vs-post-filter-phase.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Stereo Sep:** Left (Wide), Right (Mono).
  - **Phase Offset:** Channel delay knob.
  - **Invert Switch:** Polarity flip.
  - **Pan/Vol:** Master output controls.

- [ ] **separation-vs-offset.md**
  - **Separation:** Volume-based width (Mid/Side). Works on existing stereo.
  - **Offset:** Timing-based width (Phase). Works on Mono sources.

#### 02-Data/parameters/
- [ ] **stereo-enhancer-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Stereo Enhancer",
    "category": "Stereo Utility",
    "parameters": [
      {
        "name": "Stereo Separation",
        "type": "knob",
        "description": "Adjusts the Mid/Side balance",
        "use_cases": ["widening mixes", "collapsing to mono"]
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **instant-mono-utility.md**
  - Turning Stereo Sep 100% to the right.
  - Why this is better than the Mixer knob (can be placed in chain).

- [ ] **the-20ms-haas-trick.md**
  - Setting Phase Offset to ~20-40ms.
  - Creating a "double tracked" feel from a single mono vocal.
  - Compensation for the resulting pan shift.

- [ ] **widening-high-hats.md**
  - Increasing Stereo Separation.
  - Result: Highs feel more "outside" the speakers.

#### 03-Workflows/by-context/
- [ ] **synth-pad-immersion.md**
- [ ] **background-vocal-spread.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **phase-offset-comb-filtering.md**
  - Why large offsets sound like delays.
  - Why small offsets sound like phasing.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Width vs Mono

**Tasks:**
1. Put Stereo Enhancer on a Piano
2. Turn Stereo Sep all the way left (Wide)
3. Turn Stereo Sep all the way right (Mono)
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Does "Stereo Separation" affect a purely Mono signal? (No - research why).
- What does the "Invert" switch do to the stereo image?

### Phase 2: Timing Width (Week 2)
**Goal:** The Haas Effect

**Tasks:**
1. Load a Mono guitar
2. Adjust "Phase Offset" knob
3. Notice how the sound seems to pan to the *undelayed* side
4. Use the "Pan" knob to bring it back to center
5. Create the-20ms-haas-trick.md

**Key Questions to Answer:**
- Does this cause phase issues in mono? (Yes, always check mono compatibility).

---

## 📊 Plugin Specifications to Document

### Engine
- Max Phase Offset (500ms)
- Mono Summing Algorithm

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why didn't the width increase on my mono kick? (Separation only works on existing stereo; use Phase Offset instead).
2. How do I center a panned recording? (Set to Mono or adjust Pan).

---

## 📝 Documentation Standards

### For Each Workflow:
- **Sep Position:** Left/Center/Right
- **Offset:** ms value
- **Mono Check:** Mandatory step

---

## 🔗 Cross-Reference with Other Plugins

Fruity Stereo Enhancer is often used with:
- **Wave Candy** (Vectorscope visualization)
- **Fruity Stereo Shaper** (The professional upgrade)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Stereo Enhancer/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── separation-vs-offset.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── stereo-enhancer-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── instant-mono-utility.md
│   │   ├── the-20ms-haas-trick.md
│   │   └── widening-high-hats.md
│
└── 04-Reference/
    └── phase-offset-comb-filtering.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Stereo Enhancer Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Stereo%20Enhancer.htm)
- [Fruity Stereo Enhancer Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Stereo_Enhancer_tutorials.htm)
- [Fruity Stereo Enhancer Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+stereo+enhancer+tutorial)

### Community Resources
- [Fruity Stereo Enhancer Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+stereo+enhancer&restrict_sr=1)
- [Fruity Stereo Enhancer User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Stereo Enhancer Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Stereo Imaging Fundamentals" - Understanding stereo field positioning
- "Phase Relationships in Audio" - Understanding phase and timing effects
- "Mid/Side Processing Techniques" - Advanced stereo processing methods

### Advanced Techniques
- **Haas Effect Processing:** Using timing differences for width
- **Mid/Side Separation:** Understanding mid-side processing
- **Phase Manipulation:** Using phase for spatial effects

---

## 📚 In-Depth Technical Analysis

### Stereo Processing Architecture
Fruity Stereo Enhancer implements sophisticated stereo processing:
- **Mid/Side Conversion:** Converts stereo signal to Mid/Side components
- **Separation Control:** Adjusts the balance between Mid and Side signals
- **Phase Offset:** Delays one channel relative to the other
- **Polarity Inversion:** Flips phase of one channel
- **Panning Control:** Adjusts final stereo positioning

### Mid/Side Processing
The core of the stereo enhancement is Mid/Side processing:
- **Mid Signal:** L + R (sum of channels, center content)
- **Side Signal:** L - R (difference of channels, stereo content)
- **Separation Control:** Adjusts the ratio of Mid to Side
- **Mono Compatibility:** Maintains mono sum integrity
- **Stereo Width:** Controls the perceived width of the signal

### Phase Offset System
The phase offset feature creates width through timing differences:
- **Channel Delay:** Delays either left or right channel
- **Haas Effect:** Uses inter-aural time differences for width perception
- **Maximum Offset:** Up to 500ms delay capability
- **Timing Precision:** Sample-accurate delay implementation
- **Phase Relationships:** Creates complex phase interactions

### Signal Processing Chain
The internal processing follows this order:
- **Input Stage:** Signal level monitoring and routing
- **Mid/Side Conversion:** Converts stereo to Mid/Side
- **Separation Processing:** Adjusts Mid/Side balance
- **Phase Offset:** Applies channel delay if enabled
- **Polarity Processing:** Inverts phase if enabled
- **Output Stage:** Converts back to stereo and applies Pan/Volume

### Stereo Width Algorithms
Different approaches to stereo enhancement:
- **Volume-Based:** Adjusts relative levels of Mid/Side (Separation)
- **Time-Based:** Delays one channel relative to the other (Phase Offset)
- **Phase-Based:** Inverts polarity of one channel (Invert)
- **Combination:** Uses multiple approaches simultaneously
- **Mono Preservation:** Maintains mono compatibility when possible

## 🎛️ Parameter Deep Dive

### Stereo Separation Control
- **Function:** Adjusts the balance between Mid and Side signals
  - Range: Left (wide) to Right (mono)
  - Effect: Controls stereo width through Mid/Side balance
  - Use for: Widening or narrowing stereo field
  - Pro tip: Left increases width, right narrows to mono
- **Behavior:**
  - Far left: Maximum stereo width
  - Center: Original stereo width
  - Far right: Complete mono
  - Pro tip: Use for fixing overly wide or narrow sources
- **Applications:**
  - Widening: Move left to increase stereo width
  - Narrowing: Move right to reduce stereo width
  - Mono conversion: Move fully right for mono
  - Mix integration: Adjust to fit in stereo field
  - Pro tip: Always check mono compatibility after adjustment

### Phase Offset Control
- **Function:** Delays one channel relative to the other
  - Range: 0ms to 500ms (typically)
  - Effect: Creates width through inter-aural time differences
  - Use for: Widening mono sources or adding character
  - Pro tip: Use for Haas effect and pseudo-stereo creation
- **Behavior:**
  - 0ms: No delay, original timing
  - Low values (1-20ms): Subtle width enhancement
  - Medium values (20-100ms): Noticeable width and possible comb filtering
  - High values (100ms+): Delay-like effects with strong width
  - Pro tip: 20-40ms creates natural "double tracking" effect
- **Applications:**
  - Haas effect: 20-40ms for natural width
  - Delay simulation: Higher values for delay-like effects
  - Mono widening: Use on mono sources for stereo creation
  - Comb filtering: Create frequency cancellation effects
  - Pro tip: Use with Pan control to center the sound

### Invert Control
- **Function:** Flips the polarity of one channel
  - Range: On/Off (binary)
  - Effect: Creates phase cancellation effects
  - Use for: Creative phase effects or fixing phase issues
  - Pro tip: Always check mono compatibility when using
- **Behavior:**
  - Off: Normal polarity
  - On: One channel polarity inverted
  - Pro tip: Creates hollow, thin sound in stereo
- **Applications:**
  - Creative effects: For hollow, thin stereo sound
  - Phase fixing: Sometimes used to fix phase issues
  - Mono testing: Reveals phase relationships
  - Experimental: For unique phase effects
  - Pro tip: Use sparingly and always check mono compatibility

### Pan and Volume Controls
- **Pan:** Final stereo positioning
  - Range: Hard left to hard right
  - Effect: Adjusts final stereo position
  - Use for: Compensating for spatial shifts
  - Pro tip: Use after phase offset to center the sound
- **Volume:** Output level adjustment
  - Range: Negative to positive values
  - Effect: Adjusts final output level
  - Use for: Compensating for level changes
  - Pro tip: Use to match processed and unprocessed levels

## 🎼 Sound Design Applications

### Stereo Enhancement
Using Fruity Stereo Enhancer for width control:

**Widening Applications:**
- **Synth Pads:** Increase width for immersive textures
  - Move Stereo Separation left for width
  - Use moderate settings to avoid phase issues
  - Essential for ambient and cinematic music
  - Perfect for creating spacious pads
  - Pro tip: Check mono compatibility after widening

- **Vocal Enhancement:** Add width to mono vocals
  - Use Phase Offset for natural width
  - Apply 20-40ms for Haas effect
  - Use Pan to center after offset
  - Essential for spacious vocal arrangements
  - Perfect for creating "double tracked" effect

- **Instrument Widening:** Add width to mono instruments
  - Use Phase Offset for natural width
  - Apply Stereo Separation for existing stereo
  - Use Pan to center after processing
  - Essential for spacious arrangements
  - Perfect for creating stereo instruments from mono

### Mono Conversion
Using the plugin for mono compatibility:

**Mono Collapsing:**
- **Drum Bus:** Collapse stereo drum bus to mono
  - Move Stereo Separation fully right
  - Check for phase cancellation
  - Essential for mono compatibility
  - Perfect for ensuring mono-safe drums
  - Pro tip: Use before checking mono sum

- **Mix Checking:** Verify mono compatibility
  - Use on individual tracks to check phase
  - Move to mono position to test compatibility
  - Essential for broadcast standards
  - Perfect for ensuring mono-safe mixes
  - Pro tip: Use on critical elements first

- **Phase Issues:** Fix phase problems
  - Use to identify problematic elements
  - Apply appropriate settings to fix
  - Essential for clean stereo imaging
  - Perfect for phase problem solving
  - Pro tip: Always check before and after

### Creative Applications
Using Stereo Enhancer for experimental effects:

**Phase Effects:**
- **Comb Filtering:** Create frequency cancellation effects
  - Use high Phase Offset values
  - Creates notches in frequency response
  - Perfect for experimental sounds
  - Essential for unique tonal effects
  - Pro tip: Use with caution to avoid harshness

- **Haas Effect:** Create natural width with timing
  - Use 20-40ms Phase Offset
  - Creates natural "double tracking" effect
  - Perfect for vocals and instruments
  - Essential for natural width enhancement
  - Pro tip: Use Pan to center after offset

- **Pseudo-Stereo:** Create stereo from mono
  - Use Phase Offset on mono sources
  - Apply appropriate delay values
  - Perfect for mono-to-stereo conversion
  - Essential for widening mono sources
  - Pro tip: Use low values for natural results

## 🧪 Experimental Techniques

### Advanced Stereo Applications
Creative uses of Stereo Enhancer's capabilities:

**Mid/Side Manipulation:**
- **Selective Processing:** Process Mid and Side separately
  - Use multiple instances for complex processing
  - Apply different effects to Mid vs Side
  - Perfect for advanced stereo processing
  - Essential for sophisticated stereo manipulation
  - Useful for creative stereo effects

- **Width Automation:** Automate stereo width over time
  - Use automation clips for dynamic width
  - Create evolving stereo fields
  - Perfect for ambient and evolving music
  - Essential for dynamic stereo enhancement
  - Useful for creative expression

**Phase-Based Effects:**
- **Timing-Based Width:** Use phase offset for creative width
  - Experiment with different delay values
  - Create evolving phase relationships
  - Perfect for experimental music
  - Essential for timing-based effects
  - Useful for unique spatial effects

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Stereo Automation:** Automate separation for dynamic width
  - Create width changes over time
  - Use for evolving arrangements
  - Perfect for dynamic expression
  - Essential for evolving stereo fields
  - Use for creative width changes

**Modulation Applications:**
- **Parameter Modulation:** Use external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Stage Processing:**
- **Complex Stereo Enhancement:** Multiple instances in sophisticated arrangements
  - Create multi-stage stereo enhancement
  - Combine different processing approaches
  - Build complex stereo processing chains
  - Perfect for advanced sound design
  - Use for sophisticated processing

## 🎚️ Workflow Optimization

### Stereo Enhancement Workflows
Efficient approaches to using Stereo Enhancer for width:

**Widening Setup:**
- **Synth Pads:** Moderate separation for natural width
  - Use 20-40% left for subtle widening
  - Check mono compatibility
  - Apply to existing stereo sources
  - Essential for ambient music
  - Pro tip: Use low settings to avoid phase issues

- **Mono Widening:** Phase offset for mono sources
  - Use 20-40ms for natural width
  - Apply Pan to center after offset
  - Check mono compatibility
  - Essential for widening mono instruments
  - Pro tip: Use low values for natural results

- **Creative Widening:** High settings for experimental effects
  - Use high separation for extreme width
  - Apply with caution to avoid phase issues
  - Check mono compatibility thoroughly
  - Perfect for experimental music
  - Pro tip: Use with filtering to tame harshness

### Integration Workflows
Working with other plugins and tools:

**Effects Integration:**
- **Pre-Effects:** Use before other effects for width control
  - Apply width before reverb for spatial effects
  - Use before delay for rhythmic patterns
  - Integrate with chorus for width
  - Essential for proper signal flow
  - Pro tip: Use for width preparation

- **Post-Effects:** Use after other effects for final width
  - Apply after reverb for width adjustment
  - Use after delay for final positioning
  - Integrate with other processing for refinement
  - Essential for final processing
  - Pro tip: Use for final width shaping

**Analysis Integration:**
- **Spectrum Analysis:** Use with spectrum analyzers for feedback
  - Monitor stereo field changes in real-time
  - Compare with reference tracks
  - Use for corrective processing
  - Essential for quality control
  - Pro tip: Use for visual feedback

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Synth Widening:** Increasing width of synth pads and leads
- **Drum Enhancement:** Adding width to drum elements
- **Mix Enhancement:** Using width for spatial enhancement
- **Energy Management:** Using width for track energy
- **Build-up Effects:** Creating tension with width automation

### Hip-Hop and R&B
- **Vocal Widening:** Adding width to mono vocal recordings
- **Sample Enhancement:** Widening sample-based elements
- **Mix Enhancement:** Using width for mix clarity
- **Creative Effects:** Adding unique character to elements
- **Spatial Enhancement:** Creating spacious arrangements

### Rock and Metal
- **Guitar Widening:** Adding width to guitar tracks
- **Drum Enhancement:** Widening drum elements
- **Bass Processing:** Managing bass width in stereo field
- **Mix Enhancement:** Using width for mix clarity
- **Creative Effects:** Adding unique character to instruments

### Ambient and Experimental
- **Atmospheric Widening:** Creating immersive textures
- **Spatial Effects:** Adding spatial interest to ambient sounds
- **Experimental Width:** Pushing boundaries of stereo width
- **Evolution Techniques:** Using automation for change
- **Spatial Processing:** Combining with spatial effects

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Stereo Enhancer works well with various effects:
- **Reverb:** Adding space to widened sounds
- **Delay:** Creating rhythmic patterns with width
- **Chorus:** Adding width to already widened sounds
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of widened signals

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
Fruity Stereo Enhancer was developed as a simple but effective stereo width tool:
- Created to provide accessible stereo enhancement
- Designed for quick width and mono compatibility fixes
- Developed with mixing and mastering in mind
- Intended to complement other stereo processing tools

### Evolution Through FL Studio Versions
- Initially introduced with basic stereo separation
- Enhanced with phase offset capabilities
- Improved with better sound quality and stability
- Expanded with more sophisticated algorithms

### Impact on Music Production
Fruity Stereo Enhancer has influenced music production by:
- Providing accessible stereo enhancement
- Enabling quick mono compatibility fixes
- Facilitating stereo field manipulation
- Supporting various musical genres with width control

## 🧠 Advanced Processing Techniques

### Stereo Field Mastery
Advanced techniques for stereo field control:
- **Mid/Side Processing:** Understanding mid-side relationships
- **Phase Relationships:** Managing phase for width and compatibility
- **Width Control:** Precise control over stereo width
- **Mono Compatibility:** Ensuring mono-safe processing
- **Spatial Imaging:** Creating complex spatial effects

### Phase Enhancement
Advanced phase processing techniques:
- **Haas Effect:** Using timing differences for width
- **Comb Filtering:** Creating frequency cancellation effects
- **Phase Alignment:** Managing phase relationships
- **Time-Based Width:** Using delay for width enhancement
- **Polarity Management:** Controlling polarity relationships

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique stereo textures
- **Atmospheric Processing:** Building ambient stereo effects
- **Rhythmic Effects:** Creating rhythmic stereo patterns
- **Spatial Manipulation:** Creating immersive stereo environments
- **Experimental Processing:** Pushing boundaries of stereo processing

## 📊 Performance Considerations

### CPU Usage
Managing Stereo Enhancer's impact on system performance:
- **Low CPU Load:** Very efficient processing
- **Real-Time Performance:** Optimized for live performance
- **Instance Count:** Multiple instances have minimal impact
- **Parameter Automation:** Automated parameters have minimal CPU impact
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Phase Coherence:** Maintaining phase relationships
- **Stereo Imaging:** Preserving stereo field integrity
- **Headroom Management:** Preventing clipping
- **Dithering:** Appropriate dithering for output
- **Signal Integrity:** Preserving original signal quality

### System Integration
Optimizing Stereo Enhancer within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimal audio latency

## 🛠️ Troubleshooting Common Issues

### Stereo Problems
- **Phase Issues:** Check mono compatibility and phase relationships
- **Loss of Width:** Verify separation settings and source material
- **Excessive Width:** Reduce separation or check for phase issues
- **Mono Collapse:** Verify settings and check for phase cancellation
- **Imbalance:** Check for proper stereo field management

### Technical Issues
- **High CPU Usage:** Stereo Enhancer has minimal CPU usage
- **Latency Issues:** Stereo Enhancer has zero latency
- **Clipping:** Stereo Enhancer doesn't affect gain significantly
- **Artifacts:** Check for phase-related artifacts
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Adjust separation or phase offset values
- **Lack of Width:** Increase separation or use phase offset
- **Poor Integration:** Use appropriate settings for the source
- **Overpowering:** Reduce separation or offset values
- **Lack of Control:** Use automation for dynamic changes

## 🎚️ Advanced Configuration

### Custom Presets
Creating and managing custom configurations:
- **Widening Presets:** Optimized for stereo enhancement applications
- **Mono Conversion:** Configured for mono compatibility
- **Creative Presets:** Set up for sound design applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple Stereo Enhancer instances effectively:
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
- **FL Studio Forums:** Discussions about Stereo Enhancer techniques
- **Reddit Groups:** Sharing stereo enhancement techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced stereo techniques
- **Written Guides:** In-depth articles on stereo imaging
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting Stereo Enhancer configurations
- **Technique Sharing:** Platforms for sharing processing methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Successfully "stereoize" a mono vocal to sound wide but clean
- [ ] Use the plugin to fix a lopsided stereo recording
- [ ] Explain why "Stereo Separation" won't widen a single sine wave
- [ ] Create a Haas effect using Phase Offset for natural width
- [ ] Convert a stereo signal to mono while preserving level
- [ ] Use Mid/Side processing for selective width control
- [ ] Apply phase offset without causing mono compatibility issues
- [ ] Troubleshoot phase and stereo field issues effectively
- [ ] Integrate Stereo Enhancer into efficient mixing workflows
- [ ] Create comb filtering effects using phase offset

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Stereo Enhancer

## Purpose & Identity
Fruity Stereo Enhancer is a streamlined **spatial utility**. Its primary identity is a quick-access tool for adjusting the width of a signal. It uses two main methods: **Stereo Separation** (altering the balance between Mid and Side signals) and **Phase Offset** (applying a tiny delay to one channel to create psychoacoustic width). [SRC: IL-MAN]

## 60-Second Mental Model
Think of it as a "Spatial Magnifying Glass."
- Turn the big knob to the **Left**, and the sound stretches out to the sides.
- Turn the big knob to the **Right**, and the sound collapses into a single point in the center (Mono).
- Use the **Phase Offset** knob to make a mono sound "pretend" to be stereo by delaying one ear slightly.

## Hip-Hop / R&B Context
- **The Wide Melodic Bus:** Spreading your melodies to 40% width to make the beat feel massive and "Spacey" before the vocal starts.
- **Mono-Safe 808s:** Using the right side of the knob to ensure your sub-bass is 100% mono, preventing phase issues in the club (Upbeat).
- **Vocal "Double" Simulation:** Using Phase Offset on a single vocal track to make it sound like it was recorded twice (Vibey).

## When To Use
- When you need to **fix a mono compatibility issue** quickly.
- When you want to **widen a synth pad** without complex matrix mixing.
- When you want to **center a lopsided recording** using the Pan knob.

## When NOT To Use
- **Professional Mid/Side EQ:** Use **Stereo Shaper** or **Patcher** if you need to process the frequencies of the sides independently.
- **Surgical Phase Fixing:** If you have severe correlation issues, **Stereo Shaper** provides more precise control. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Stereo Enhancer

Stereo Enhancer translates vibes through **Spatial Contrast** and **Timing Differences**.

## 1. Spacey (Vast, Immersive, Airy)
- **Concept:** "The Wide Horizon."
- **Levers:**
  - **Stereo Separation:** Turn far left (toward 100% Wide).
  - **Phase Offset:** 20ms.
- **Listen For:** The sound completely vacating the center channel, creating an immersive "Halo" around the listener.
- **Don't Do This:** Don't do this to the Kick; keep the space for pads and ad-libs.

## 2. Upbeat (Punchy, Centered, Impactful)
- **Concept:** "The Mono Core."
- **Levers:**
  - **Stereo Separation:** Turn to the right (Mono).
  - **Target:** Kick, 808, and Snare.
- **Listen For:** A more focused, "in-your-face" energy. The drums hit harder because all the energy is concentrated in the center.

## 3. Psychedelic (Disorienting, Hollow, Shifting)
- **Concept:** "The Time Warp."
- **Levers:**
  - **Phase Offset:** 50ms - 100ms.
  - **Invert:** ON.
- **Listen For:** A strange, "inside-out" sound that feels like it's shifting through your brain. It sounds like a broken speaker in a cool, trippy way.

## 4. Vibey (Smooth, Expensive, Polished)
- **Concept:** "The Natural Double."
- **Levers:**
  - **Phase Offset:** 15ms - 25ms.
  - **Stereo Separation:** Default (Center).
- **Listen For:** A single vocal or guitar sounding like two takes. It adds a professional "Vibey" thickness without the need for a chorus effect.

## 5. Moody (Dark, Claustrophobic, Isolated)
- **Concept:** "The Focused Shadow."
- **Levers:**
  - **Stereo Separation:** 50% toward Mono.
  - **Pan:** Slightly off-center (10% Left).
- **Listen For:** A sound that feels "trapped" and small, creating a sense of isolation and intimacy in dark R&B tracks. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\separation-vs-offset.md

```markdown
# Stereo Separation vs Phase Offset - Understanding the Difference

## Overview
Fruity Stereo Enhancer offers two fundamentally different approaches to creating stereo width: **Stereo Separation** (volume-based) and **Phase Offset** (timing-based). Understanding when and how to use each is critical for professional stereo imaging.

## Quick Reference Table

| Aspect | Stereo Separation | Phase Offset |
|--------|------------------|--------------|
| **Method** | Adjusts Mid/Side volume balance | Delays one channel vs the other |
| **Works on** | Existing stereo signals | Mono signals (creates stereo) |
| **Effect on Mono Source** | None (no change) | Creates width |
| **Mono Compatibility** | Generally good | Often problematic |
| **Artifacts** | Minimal | Comb filtering |
| **Typical Use** | Synth pads, hi-hats, stereo sources | Mono vocals, mono instruments |
| **Recommended Range** | 20-60% for most applications | 20-40ms for natural width |
| **Genre Preference** | All genres | Selective use |

## Stereo Separation Explained

### What It Does
Stereo Separation adjusts the balance between the **Mid** signal (L+R, center content) and the **Side** signal (L-R, stereo content).

**Mid Signal:** Everything that's identical in L and R channels
**Side Signal:** Everything that's different between L and R channels

**Left (Wide):** Increases Side signal, decreases Mid signal
**Result:** Existing stereo content becomes more pronounced

**Right (Mono):** Decreases Side signal, increases Mid signal
**Result:** Stereo content collapses toward mono

### How It Works Technically

#### Mid/Side Conversion
1. **Convert to Mid/Side:**
   - Mid = L + R
   - Side = L - R

2. **Adjust Balance:**
   - Separation left: Increase Side volume
   - Separation right: Decrease Side volume

3. **Convert Back to Stereo:**
   - L = Mid + Side
   - R = Mid - Side

### When to Use Stereo Separation

✅ **Perfect For:**
- Synth pads with built-in stereo
- Hi-hats from stereo samples
- Stereo drum loops
- Reverb/delay returns (already stereo)
- Keys/piano with stereo spread
- Guitar with stereo effects
- Any source with existing L/R differences

❌ **Won't Work On:**
- Pure mono kick drums
- Centered mono bass
- Single mono vocal take
- Mono instrument samples
- Anything without existing stereo content

### Stereo Separation Examples

#### Example 1: Synth Pad
**Source:** Stereo pad with chorus and reverb
**Action:** Stereo Separation 40% left
**Result:** Chorus movement and reverb tail become wider
**Mono:** Good compatibility (slight thinning acceptable)

#### Example 2: Hi-Hats
**Source:** Stereo hi-hat sample
**Action:** Stereo Separation 60% left
**Result:** Hats spread wide in stereo field
**Mono:** Fair compatibility (acceptable high-frequency loss)

#### Example 3: Mono Kick (Mistake)
**Source:** Centered mono kick
**Action:** Stereo Separation 50% left
**Result:** NO CHANGE (no stereo content to enhance)
**Lesson:** Separation doesn't create stereo, only enhances existing

## Phase Offset Explained

### What It Does
Phase Offset delays one channel (L or R) by a specified time relative to the other, creating a timing difference that our brain interprets as width.

**This is the Haas Effect** (also called Precedence Effect)

### How It Works Technically

1. **Delay Applied:**
   - One channel (typically Right) is delayed
   - Left channel remains at original timing

2. **Psychoacoustic Effect:**
   - Brain localizes sound to the first-arriving channel
   - But perceives width due to timing difference
   - Creates "double tracking" or "spatial" effect

3. **Side Effect:**
   - Sound appears to pan toward the undelayed side
   - Must compensate with Pan control

### Timing Ranges and Effects

**1-20ms (Subtle):**
- Minimal comb filtering
- Subtle width enhancement
- Good mono compatibility
- Natural sound

**20-40ms (Sweet Spot):**
- Natural "double tracking" feel
- Noticeable width
- Some comb filtering
- Fair mono compatibility
- **Most common range**

**40-100ms (Obvious):**
- Significant delay perceivable
- Strong comb filtering
- Width but also "phasey" sound
- Poor mono compatibility

**100ms+ (Delay):**
- Perceived as echo, not width
- Rhythmic delay effect
- Not used for width enhancement

### When to Use Phase Offset

✅ **Perfect For:**
- Mono vocal recordings (background/ad-libs)
- Mono instrument takes
- Single mono synth line
- Mono guitar DI
- Creating stereo from mono sources
- Haas effect doubling

❌ **Avoid On:**
- Lead vocals (use real doubling)
- Bass (creates phase issues)
- Kick drums (mono is better)
- Critical mix elements
- Already stereo sources (use Separation instead)

### Phase Offset Examples

#### Example 1: Mono Vocal Ad-lib
**Source:** Single mono vocal recording ("yeah!")
**Action:** Phase Offset 25ms, Pan 10% right
**Result:** Natural "double tracked" width
**Mono:** Fair (some cancellation acceptable for ad-libs)

#### Example 2: Mono Synth Lead
**Source:** Single oscillator mono synth
**Action:** Phase Offset 30ms, Pan 12% right
**Result:** Wide, spacious synth
**Mono:** Poor compatibility, use only if acceptable

#### Example 3: Stereo Pad (Mistake)
**Source:** Lush stereo pad
**Action:** Phase Offset 25ms
**Result:** Confusing phase relationships, sounds "weird"
**Lesson:** Use Separation on stereo sources, not Offset

## The Comb Filtering Problem

### What is Comb Filtering?
When identical signals are delayed and summed, certain frequencies cancel (destructive interference) while others reinforce (constructive interference), creating a "comb" pattern in the frequency response.

**Phase Offset creates comb filtering** - this is unavoidable.

### Why It Happens
- Delayed signal combines with original
- At some frequencies, they're in phase (boost)
- At others, they're out of phase (cancel)
- Creates notches in frequency spectrum

### Audible Result
- "Phasey" or "flanged" sound
- Hollow quality
- Frequency notches in the tone
- Potentially unnatural character

### How to Minimize

1. **Keep offset low:** 20-30ms minimizes severity
2. **Use only on backgrounds:** Not critical elements
3. **Check mono:** Comb filtering is more obvious in mono
4. **Accept it:** It's part of the Haas effect character

## Choosing the Right Technique

### Decision Flow

**Is your source stereo?**
- Yes → Use **Stereo Separation**
- No → Consider **Phase Offset** OR create stereo at source

**Is it a critical element (lead vocal, main melody)?**
- Yes → Use real doubling, NOT Phase Offset
- No → Phase Offset is acceptable

**Does it need to be mono compatible?**
- Yes → Use conservative Stereo Separation (20-35%)
- No → Either technique is fine

**Is it low-frequency content (kick, bass)?**
- Yes → Keep mono, don't use either technique
- No → Proceed with width enhancement

## Combining Both Techniques

### Can You Use Both?
Yes, but carefully:

**Example Setup:**
- Stereo Separation: 30% left (enhance existing stereo)
- Phase Offset: 15ms (add subtle timing width)
- Pan: Compensate for offset shift

**Use Case:** Stereo source that needs extra width
**Warning:** Compounds phase issues, check mono carefully

### When to Combine
- Experimental sound design
- Extreme spatial effects
- Background atmospheric elements
- When mono compatibility is not critical

### When NOT to Combine
- Lead vocals
- Critical mix elements
- Bass or kick
- When mono compatibility matters

## Common Mistakes and Fixes

### Mistake 1: Using Separation on Mono Source
**Problem:** No effect, wasted effort
**Fix:** Use Phase Offset instead (or add stereo at source)

### Mistake 2: Using Phase Offset on Stereo Source
**Problem:** Confusing phase relationships
**Fix:** Use Stereo Separation instead

### Mistake 3: Extreme Phase Offset (60ms+)
**Problem:** Sounds like delay, severe comb filtering
**Fix:** Reduce to 20-40ms range

### Mistake 4: Not Compensating Pan Shift
**Problem:** Offset makes sound pan to one side
**Fix:** Use Pan control to re-center

### Mistake 5: Ignoring Mono
**Problem:** Elements disappear in mono playback
**Fix:** Always check mono, reduce width if necessary

## Genre-Specific Guidance

### Trap
- **Separation:** Aggressive on hi-hats (60-70%)
- **Phase Offset:** Moderate on ad-libs (25-30ms)
- **Mono:** Less critical for modern streaming

### Boom-Bap
- **Separation:** Conservative (15-25%)
- **Phase Offset:** Rarely used
- **Mono:** Very important for vintage vibe

### Melodic Hip-Hop
- **Separation:** Moderate on pads/strings (35-45%)
- **Phase Offset:** Selective on harmonies (20-30ms)
- **Mono:** Important for clarity

### Electronic Hip-Hop
- **Separation:** Aggressive on synths (50-60%)
- **Phase Offset:** Experimental use (20-40ms)
- **Mono:** Situational

### Lo-Fi Hip-Hop
- **Separation:** Subtle (25-35%)
- **Phase Offset:** Minimal (15-20ms)
- **Mono:** Important for warm, cohesive vibe

## Technical Summary

### Stereo Separation
- **Physics:** Volume-based Mid/Side balance
- **Creates:** Width from existing stereo content
- **Artifacts:** Minimal
- **Mono Behavior:** Reduces to original (Side cancels)
- **CPU:** Negligible
- **Latency:** Zero

### Phase Offset
- **Physics:** Time-based delay difference
- **Creates:** Stereo from mono sources (Haas effect)
- **Artifacts:** Comb filtering (frequency notches)
- **Mono Behavior:** Partial cancellation
- **CPU:** Negligible
- **Latency:** Zero additional (delay is the effect)

## Practical Workflow Integration

### For Stereo Sources (Most Common)
1. Load Fruity Stereo Enhancer
2. Use **Stereo Separation** only
3. Start at 30% left
4. Increase/decrease based on genre and taste
5. Check mono
6. Done

### For Mono Sources (Less Common)
1. Consider if source-level stereo is better (unison, doubling)
2. If using Enhancer, use **Phase Offset**
3. Start at 25ms
4. Adjust **Pan** to re-center
5. Check mono (expect some loss)
6. Evaluate if acceptable

## Pro Tips

1. **Default to Separation** - Most sources are already stereo
2. **Offset is specialty** - Use Phase Offset sparingly
3. **Check your source** - Know if it's stereo or mono before processing
4. **Mono is king** - Always check compatibility
5. **Less is more** - Subtle width often sounds more professional
6. **Save presets** - Document your go-to settings
7. **Genre matters** - Respect genre conventions
8. **Automation** - Dynamic width creates interest
9. **Layer strategically** - Different width on different layers
10. **Trust your ears** - If it sounds good, it is good (but check mono!)

---

**Quick Decision:** Stereo source? → Stereo Separation. Mono source? → Phase Offset (or create stereo at source).

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Stereo Enhancer (5 Minutes)

1.  **Insert:** Load **Fruity Stereo Enhancer** onto a pad or melodic loop.
2.  **Width:** Turn the large **STEREO SEPARATION** knob to the left. Notice the sound getting wider.
3.  **Mono:** Turn the same knob to the right to collapse the sound to the center.
4.  **Pseudo-Stereo:** If your sound is purely Mono (centered):
    - Turn the **PHASE OFFSET** knob to about 10 o'clock.
    - The sound will instantly become wide.
5.  **Fix:** If the sound feels "pulled" to one side after using Phase Offset, use the **PAN** knob to center it.
6.  **Tip:** Use the **INVERT** switch to check if your sound has phase issues (it will sound hollow if it does). [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Fruity Stereo Enhancer - Parameter Cheat Sheet

## Core Controls

### Stereo Separation
**Function:** Adjusts Mid/Side balance for width control
- **Left (Wide):** Increases Side signal, widens stereo field
- **Center:** Original stereo width maintained
- **Right (Mono):** Reduces Side signal, collapses to mono
- **Range:** Wide ↔ Mono
- **Use:** Control stereo width of existing stereo signals
- **Note:** Does NOT affect pure mono signals

### Phase Offset
**Function:** Delays one channel to create psychoacoustic width
- **0ms:** No delay, original timing
- **1-20ms:** Subtle width, natural sound
- **20-40ms:** Haas effect, "double tracking" feel
- **40-100ms:** Noticeable delay, possible comb filtering
- **100ms+:** Echo-like effects
- **Use:** Create stereo from mono sources
- **Warning:** Always check mono compatibility

### Invert Phase
**Function:** Flips polarity of one channel
- **Off:** Normal operation
- **On:** Creates phase cancellation effects
- **Result:** Hollow, thin sound in stereo
- **Warning:** Will cause severe cancellation in mono
- **Use:** Creative effects only

### Pan
**Function:** Positions the final output in stereo field
- **Use:** Compensate for pan shift from Phase Offset
- **Tip:** After using Phase Offset, use Pan to re-center

### Volume
**Function:** Adjusts output level
- **Use:** Compensate for perceived loudness changes
- **Tip:** Match processed/unprocessed levels for A/B comparison

## Quick Reference Table

| Parameter | Function | Range | Mono Affects? | Common Use |
|-----------|----------|-------|---------------|------------|
| Stereo Separation | Width control | Wide ↔ Mono | No | Widening pads/hats |
| Phase Offset | Timing delay | 0-500ms | Yes | Haas effect |
| Invert | Polarity flip | On/Off | Creates issues | Creative FX |
| Pan | Position | L ↔ R | Yes | Re-centering |
| Volume | Level | -∞ to +∞ | Yes | Matching levels |

## Common Workflows

### Widen Stereo Pads
1. Set Stereo Separation: 20-40% left
2. Check mono compatibility
3. Adjust volume to match

### Create Pseudo-Stereo Vocal
1. Set Phase Offset: 20-30ms
2. Use Pan to re-center (usually slight right)
3. Check mono compatibility
4. Reduce offset if comb filtering occurs

### Instant Mono Utility
1. Set Stereo Separation: Fully right
2. Use on elements that need mono checking
3. Automate on/off for quick A/B testing

### Haas Effect Width
1. Phase Offset: 25-35ms
2. Pan to center (compensate for shift)
3. Check mono (expect some cancellation)
4. Use only on non-critical elements

## Hip-Hop Specific Quick Settings

### Moody Hip-Hop
- **Dark Pads:** Sep 30% left, no offset
- **Atmospheric Synths:** Sep 40% left, offset 15ms
- **Background Vocals:** Offset 25ms, pan to center

### Upbeat Hip-Hop
- **Hi-Hats:** Sep 50% left for width
- **Claps:** Sep 20% left, minimal offset
- **Vocal Doubles:** Offset 30ms, pan compensate

### Melodic Hip-Hop
- **Keys/Piano:** Sep 25% left, clean width
- **Strings:** Sep 35% left, offset 10ms for depth
- **Vocal Harmonies:** Offset 20-40ms per layer

### Electronic Hip-Hop
- **Synth Leads:** Sep 15% left (keep focused)
- **Pads:** Sep 45% left for space
- **Vocal Chops:** Offset 15-25ms for movement

### Trap
- **Hi-Hat Rolls:** Sep 60% left for width
- **Snare Layers:** Sep 20% left
- **Vocal Ad-libs:** Offset 20ms, pan left/right

## Warning Signs

### Too Much Width
- Sound feels "thin" or "hollow"
- Loses punch in mono
- Phase cancellation audible
- Elements sound distant

### Phase Issues
- Sound disappears in mono
- Comb filtering (flanging sound)
- Frequency notches appear
- Lacks low-end punch

### Incorrect Application
- Mono kick/bass widened (bad)
- Critical vocal too wide (bad)
- Stereo separation on mono source (no effect)
- Phase offset too high (sounds like delay)

## Pro Tips

1. **Always check mono** - Hit the mono button frequently
2. **Haas sweet spot** - 20-40ms is most natural
3. **Separation for stereo** - Use on existing stereo sources
4. **Offset for mono** - Use on mono sources to create width
5. **Pan compensation** - Phase offset shifts pan, compensate with Pan knob
6. **Less is more** - Subtle settings sound more natural
7. **Genre matters** - Trap = wide hats, Boom-bap = tighter stereo field
8. **Stack carefully** - Multiple widening effects compound quickly
9. **Save presets** - Create go-to settings for common scenarios
10. **Automation** - Automate width for dynamic arrangements

## Common Mistakes to Avoid

1. ❌ Widening kick drums or bass
2. ❌ Using Phase Offset without checking mono
3. ❌ Inverting phase without understanding consequences
4. ❌ Extreme separation settings on all tracks
5. ❌ Forgetting to compensate pan after phase offset
6. ❌ Using stereo separation on mono sources
7. ❌ Ignoring mono compatibility for streaming platforms
8. ❌ Over-widening lead vocals
9. ❌ Not matching levels after processing
10. ❌ Using multiple widening plugins without purpose

## Frequency-Specific Considerations

### Low Frequencies (20-200Hz)
- **Keep narrow** - Mono or minimal width
- **Reason:** Maintains punch and power
- **Exception:** Creative bass width in electronic genres

### Mid Frequencies (200Hz-5kHz)
- **Moderate width** - 20-40% separation
- **Reason:** Balances clarity and focus
- **Application:** Vocals, keys, guitars

### High Frequencies (5kHz+)
- **Can be wider** - 40-60% separation
- **Reason:** Creates air and space
- **Application:** Hi-hats, cymbals, atmospheric elements

## Integration with Other Plugins

### Before Stereo Enhancer
- **EQ:** Shape tone first
- **Compression:** Control dynamics
- **Saturation:** Add harmonics

### After Stereo Enhancer
- **Reverb:** Space and depth
- **Delay:** Rhythmic elements
- **Limiter:** Final level control

### Parallel Processing
- **Blend wet/dry:** Use mixer send for subtle enhancement
- **Frequency-specific:** Process only highs/mids in parallel

---

**Quick Start:** Load on a synth pad → Move Stereo Separation 30% left → Check mono → Adjust to taste

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Stereo Enhancer

| Parameter | Type | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Stereo Sep** | Knob | **Spacey** (Left) | **Width** | Mid/Side level balance. |
| **Phase Offset**| Knob | **Vibey** | **Phase** | Channel delay (0-500ms). |
| **Pan** | Knob | **Moody** | **Placement** | Output L/R balance. |
| **Vol** | Knob | N/A | **Loudness** | Output gain. |
| **Invert** | Switch | **Psychedelic** | **Correlation**| Phase polarity flip. |

- **Vibe Impact Tag (Separation):** Moving the knob to the Left increases the "Side" signal volume, creating an expansive, wide feeling.
- **Mix Impact Tag (Clarity):** Moving the knob to the Right collapses the signal to Mono, which is essential for "Upbeat" drum clarity. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\stereo-enhancer-params.json

```json
{
  "plugin_name": "Fruity Stereo Enhancer",
  "category": "Stereo Utility",
  "type": "Width Control",
  "version": "Latest",
  "parameters": [
    {
      "name": "Stereo Separation",
      "type": "knob",
      "range": "Wide to Mono",
      "default": "Center",
      "description": "Adjusts the Mid/Side balance to control stereo width",
      "use_cases": [
        "Widening stereo pads and synths",
        "Collapsing stereo field to mono",
        "Fixing overly wide mixes",
        "Creating space in arrangement",
        "Mono compatibility checking"
      ],
      "hip_hop_applications": {
        "moody": "30-40% left for atmospheric pads and dark synths",
        "upbeat": "50-60% left for hi-hats and percussion elements",
        "melodic": "25-35% left for keys, strings, and harmonic elements",
        "electronic": "45-55% left for synth pads and atmospheric layers",
        "trap": "60-70% left for hi-hat rolls and percussion"
      },
      "frequency_response": "Affects entire frequency spectrum",
      "mono_compatibility": "Does not affect pure mono signals",
      "notes": "Left increases width, right narrows to mono"
    },
    {
      "name": "Phase Offset",
      "type": "knob",
      "range": "0ms to 500ms",
      "default": "0ms",
      "description": "Delays one channel relative to the other to create psychoacoustic width",
      "use_cases": [
        "Creating Haas effect (20-40ms)",
        "Widening mono sources",
        "Adding character to mono recordings",
        "Creating pseudo-stereo from mono",
        "Experimental delay effects"
      ],
      "hip_hop_applications": {
        "moody": "15-25ms for atmospheric vocal layers and background elements",
        "upbeat": "20-35ms for vocal doubles and ad-libs",
        "melodic": "20-40ms for vocal harmonies and stacked vocals",
        "electronic": "15-30ms for vocal chops and synth leads",
        "trap": "20-30ms for vocal ad-libs and background vocals"
      },
      "sweet_spots": {
        "subtle_width": "1-20ms",
        "haas_effect": "20-40ms",
        "noticeable_delay": "40-100ms",
        "echo_like": "100ms+"
      },
      "mono_compatibility": "Creates phase cancellation in mono - always check",
      "notes": "Creates pan shift toward undelayed side - compensate with Pan control"
    },
    {
      "name": "Invert Phase",
      "type": "switch",
      "range": "On/Off",
      "default": "Off",
      "description": "Flips the polarity of one channel",
      "use_cases": [
        "Creative phase effects",
        "Creating hollow stereo sound",
        "Experimental sound design",
        "Phase relationship testing"
      ],
      "hip_hop_applications": {
        "moody": "Rarely used - creates thin, hollow effects",
        "upbeat": "Not recommended for main elements",
        "melodic": "Creative effects on background layers only",
        "electronic": "Experimental effects on synth layers",
        "trap": "Not commonly used in trap production"
      },
      "mono_compatibility": "Severe cancellation in mono - use with extreme caution",
      "notes": "Always check mono compatibility when enabled"
    },
    {
      "name": "Pan",
      "type": "knob",
      "range": "Hard Left to Hard Right",
      "default": "Center",
      "description": "Adjusts final stereo positioning after processing",
      "use_cases": [
        "Compensating for phase offset pan shift",
        "Re-centering after processing",
        "Final positioning in stereo field",
        "Balancing stereo image"
      ],
      "hip_hop_applications": {
        "moody": "Center for main elements, compensate offset shifts",
        "upbeat": "Use to re-center after Haas effect",
        "melodic": "Fine-tune positioning after width processing",
        "electronic": "Compensate for phase offset pan bias",
        "trap": "Re-center vocal elements after offset"
      },
      "notes": "Essential for compensating phase offset pan shift"
    },
    {
      "name": "Volume",
      "type": "knob",
      "range": "Negative to Positive dB",
      "default": "0dB",
      "description": "Adjusts output level after processing",
      "use_cases": [
        "Matching processed and unprocessed levels",
        "Compensating for perceived loudness changes",
        "A/B comparison at matched levels",
        "Final output level adjustment"
      ],
      "hip_hop_applications": {
        "moody": "Match levels for subtle processing",
        "upbeat": "Compensate for any width-related level changes",
        "melodic": "Ensure consistent levels across arrangement",
        "electronic": "Match processed and dry signals",
        "trap": "Maintain consistent vocal levels"
      },
      "notes": "Use for level-matched A/B comparisons"
    }
  ],
  "processing_chain": [
    "Input Stage",
    "Mid/Side Conversion",
    "Separation Processing",
    "Phase Offset Application",
    "Polarity Processing (if enabled)",
    "Mid/Side to Stereo Conversion",
    "Pan Application",
    "Volume Application",
    "Output Stage"
  ],
  "cpu_usage": "Very Low",
  "latency": "Zero samples",
  "audio_quality": {
    "bit_depth": "32-bit floating point",
    "sample_rate": "Project sample rate",
    "processing": "High-quality Mid/Side conversion"
  },
  "common_mistakes": [
    "Widening low-frequency elements (kick, bass)",
    "Using Phase Offset without mono checking",
    "Inverting phase without understanding consequences",
    "Extreme separation on all tracks",
    "Not compensating pan after phase offset",
    "Using separation on mono sources (no effect)",
    "Ignoring mono compatibility",
    "Over-widening lead vocals"
  ],
  "best_practices": [
    "Always check mono compatibility",
    "Use 20-40ms for natural Haas effect",
    "Apply separation to existing stereo sources",
    "Use phase offset on mono sources for width",
    "Compensate pan shift with Pan control",
    "Keep low frequencies narrow (mono or minimal width)",
    "Save presets for common scenarios",
    "Use automation for dynamic width changes"
  ]
}

```

---

## FILE: 02-Data\presets\hip-hop-width-presets.json

```json
{
  "preset_collection": "Fruity Stereo Enhancer - Hip-Hop Width Presets",
  "version": "1.0",
  "genre": "Hip-Hop / Rap",
  "presets": [
    {
      "name": "Moody Pad Widener",
      "category": "Moody Hip-Hop",
      "description": "Subtle width for dark, atmospheric pads",
      "parameters": {
        "stereo_separation": "30% left",
        "phase_offset": "0ms",
        "invert": false,
        "pan": "center",
        "volume": "0dB"
      },
      "use_on": ["Synth pads", "Atmospheric layers", "Dark textures"],
      "notes": "Creates space without losing focus"
    },
    {
      "name": "Moody Vocal Layer",
      "category": "Moody Hip-Hop",
      "description": "Haas effect for background vocals in moody tracks",
      "parameters": {
        "stereo_separation": "center",
        "phase_offset": "20ms",
        "invert": false,
        "pan": "slightly right (compensate)",
        "volume": "0dB"
      },
      "use_on": ["Background vocals", "Vocal layers", "Ad-libs"],
      "notes": "Check mono compatibility - may need adjustment"
    },
    {
      "name": "Moody Synth Atmosphere",
      "category": "Moody Hip-Hop",
      "description": "Wide atmospheric synths for moody productions",
      "parameters": {
        "stereo_separation": "40% left",
        "phase_offset": "15ms",
        "invert": false,
        "pan": "center",
        "volume": "-1dB"
      },
      "use_on": ["Atmospheric synths", "Drone pads", "Background textures"],
      "notes": "Combines separation and offset for immersive width"
    },
    {
      "name": "Upbeat Hi-Hat Spread",
      "category": "Upbeat Hip-Hop",
      "description": "Wide, energetic hi-hats for upbeat tracks",
      "parameters": {
        "stereo_separation": "55% left",
        "phase_offset": "0ms",
        "invert": false,
        "pan": "center",
        "volume": "0dB"
      },
      "use_on": ["Hi-hats", "Shakers", "Percussion loops"],
      "notes": "Keeps highs wide and energetic"
    },
    {
      "name": "Upbeat Vocal Double",
      "category": "Upbeat Hip-Hop",
      "description": "Natural double-tracking for upbeat vocals",
      "parameters": {
        "stereo_separation": "center",
        "phase_offset": "30ms",
        "invert": false,
        "pan": "slightly right",
        "volume": "0dB"
      },
      "use_on": ["Vocal doubles", "Ad-libs", "Background vocals"],
      "notes": "Creates natural double-tracked feel"
    },
    {
      "name": "Upbeat Clap Width",
      "category": "Upbeat Hip-Hop",
      "description": "Slight width for claps without losing punch",
      "parameters": {
        "stereo_separation": "20% left",
        "phase_offset": "0ms",
        "invert": false,
        "pan": "center",
        "volume": "0dB"
      },
      "use_on": ["Claps", "Snares", "Percussion hits"],
      "notes": "Maintains punch while adding width"
    },
    {
      "name": "Melodic Keys Spread",
      "category": "Melodic Hip-Hop",
      "description": "Clean width for piano and keys",
      "parameters": {
        "stereo_separation": "25% left",
        "phase_offset": "0ms",
        "invert": false,
        "pan": "center",
        "volume": "0dB"
      },
      "use_on": ["Piano", "Keys", "Rhodes", "Synth keys"],
      "notes": "Natural width without phase issues"
    },
    {
      "name": "Melodic String Width",
      "category": "Melodic Hip-Hop",
      "description": "Lush width for string sections",
      "parameters": {
        "stereo_separation": "35% left",
        "phase_offset": "10ms",
        "invert": false,
        "pan": "center",
        "volume": "-0.5dB"
      },
      "use_on": ["Strings", "Orchestral elements", "String pads"],
      "notes": "Combines techniques for depth and width"
    },
    {
      "name": "Melodic Vocal Harmony",
      "category": "Melodic Hip-Hop",
      "description": "Haas effect for vocal harmonies",
      "parameters": {
        "stereo_separation": "center",
        "phase_offset": "25ms",
        "invert": false,
        "pan": "slightly right",
        "volume": "0dB"
      },
      "use_on": ["Vocal harmonies", "Stacked vocals", "Choir elements"],
      "notes": "Layer multiple with different offset times"
    },
    {
      "name": "Electronic Synth Pad",
      "category": "Electronic Hip-Hop",
      "description": "Wide pads for electronic hip-hop",
      "parameters": {
        "stereo_separation": "50% left",
        "phase_offset": "0ms",
        "invert": false,
        "pan": "center",
        "volume": "0dB"
      },
      "use_on": ["Synth pads", "Atmospheric layers", "Drone elements"],
      "notes": "Creates spacious electronic textures"
    },
    {
      "name": "Electronic Vocal Chop",
      "category": "Electronic Hip-Hop",
      "description": "Movement for vocal chops",
      "parameters": {
        "stereo_separation": "center",
        "phase_offset": "20ms",
        "invert": false,
        "pan": "center",
        "volume": "0dB"
      },
      "use_on": ["Vocal chops", "Vocal samples", "Chopped vocals"],
      "notes": "Adds character and movement"
    },
    {
      "name": "Electronic Synth Lead Focus",
      "category": "Electronic Hip-Hop",
      "description": "Minimal width to keep leads focused",
      "parameters": {
        "stereo_separation": "15% left",
        "phase_offset": "0ms",
        "invert": false,
        "pan": "center",
        "volume": "0dB"
      },
      "use_on": ["Synth leads", "Lead melodies", "Hook elements"],
      "notes": "Keeps leads upfront and focused"
    },
    {
      "name": "Trap Hi-Hat Roll",
      "category": "Trap",
      "description": "Extreme width for trap hi-hat rolls",
      "parameters": {
        "stereo_separation": "65% left",
        "phase_offset": "0ms",
        "invert": false,
        "pan": "center",
        "volume": "0dB"
      },
      "use_on": ["Hi-hat rolls", "Trap hats", "Rapid hi-hats"],
      "notes": "Classic trap wide hi-hats"
    },
    {
      "name": "Trap Vocal Ad-lib",
      "category": "Trap",
      "description": "Haas effect for trap ad-libs",
      "parameters": {
        "stereo_separation": "center",
        "phase_offset": "25ms",
        "invert": false,
        "pan": "slightly right",
        "volume": "0dB"
      },
      "use_on": ["Ad-libs", "Vocal fills", "Background vocals"],
      "notes": "Creates space for ad-libs in mix"
    },
    {
      "name": "Trap Snare Layer",
      "category": "Trap",
      "description": "Slight width for layered snares",
      "parameters": {
        "stereo_separation": "20% left",
        "phase_offset": "0ms",
        "invert": false,
        "pan": "center",
        "volume": "0dB"
      },
      "use_on": ["Snare layers", "Clap layers", "Percussion"],
      "notes": "Adds dimension without losing punch"
    },
    {
      "name": "Instant Mono Check",
      "category": "Utility",
      "description": "Quick mono collapse for compatibility checking",
      "parameters": {
        "stereo_separation": "100% right (full mono)",
        "phase_offset": "0ms",
        "invert": false,
        "pan": "center",
        "volume": "0dB"
      },
      "use_on": ["Any stereo source"],
      "notes": "Use for quick mono compatibility checks"
    },
    {
      "name": "Subtle Haas Effect",
      "category": "Utility",
      "description": "Natural Haas effect for general use",
      "parameters": {
        "stereo_separation": "center",
        "phase_offset": "25ms",
        "invert": false,
        "pan": "slightly right (compensate)",
        "volume": "0dB"
      },
      "use_on": ["Mono sources needing width"],
      "notes": "Sweet spot for natural width"
    },
    {
      "name": "Boom-Bap Drum Width",
      "category": "Boom-Bap",
      "description": "Conservative width for classic boom-bap drums",
      "parameters": {
        "stereo_separation": "15% left",
        "phase_offset": "0ms",
        "invert": false,
        "pan": "center",
        "volume": "0dB"
      },
      "use_on": ["Drum loops", "Drum bus", "Percussion"],
      "notes": "Keeps drums punchy and centered"
    },
    {
      "name": "Lo-Fi Vintage Width",
      "category": "Lo-Fi Hip-Hop",
      "description": "Gentle width for lo-fi productions",
      "parameters": {
        "stereo_separation": "20% left",
        "phase_offset": "12ms",
        "invert": false,
        "pan": "center",
        "volume": "-0.5dB"
      },
      "use_on": ["Lo-fi pads", "Jazz samples", "Vinyl textures"],
      "notes": "Subtle vintage character"
    },
    {
      "name": "Experimental Wide FX",
      "category": "Experimental",
      "description": "Extreme width for creative effects",
      "parameters": {
        "stereo_separation": "70% left",
        "phase_offset": "40ms",
        "invert": false,
        "pan": "center",
        "volume": "-2dB"
      },
      "use_on": ["FX layers", "Risers", "Transitions"],
      "notes": "Check mono - expect significant cancellation"
    }
  ],
  "usage_notes": {
    "mono_checking": "Always verify mono compatibility after applying width",
    "stacking": "Use different offset values when layering multiple instances",
    "automation": "Automate separation for dynamic width changes",
    "frequency_specific": "Consider using only on high frequencies for some presets",
    "genre_mixing": "Combine techniques from different genres for hybrid styles"
  },
  "best_practices": [
    "Start with conservative settings and increase gradually",
    "Check mono compatibility frequently",
    "Use phase offset primarily on non-critical elements",
    "Keep low frequencies (kick, bass) narrow or mono",
    "Save custom variations for your specific workflow",
    "A/B compare with and without processing",
    "Use automation for dynamic width changes in arrangements",
    "Layer multiple instances with different settings for complex width"
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Stereo Enhancer)

## 1. The "Mono 808" Rule
- **Rule:** 808s must be mono.
- **Application:** Load Stereo Enhancer on your 808. Turn the **Stereo Separation** knob all the way to the right. This guarantees that your sub-bass will play correctly on large club systems. [SRC: REPUTABLE]

## 2. The Haas Limit (30ms)
- **Rule:** Don't turn the Phase Offset too high for standard instruments.
- **Reason:** Once you pass 35ms, the ear hears a distinct echo. 
- **Application:** For a natural "Vibey" double, keep the **Phase Offset** between 10ms and 25ms.

## 3. The "Center Hole" Rule
- **Rule:** Leave room for the Lead Vocal.
- **Application:** Turn the **Stereo Separation** knob 20% to the left on your main melody bus. This subtly pushes the melodies out of the center, clearing a "hole" for the rapper without changing the volume.

## 4. Mono Compatibility Check
- **Rule:** Check the mix in mono.
- **Check:** Use the Master track's Mono switch. If your wide lead guitar disappears, you have used too much **Phase Offset** or the **Invert** switch incorrectly.

## 5. Panning Offset Fix
- **Rule:** Phase Offset causes a "Directional Bias."
- **Application:** When you use Phase Offset, the sound will seem to lean toward the ear that *isn't* delayed. Always use the **Pan** knob on Stereo Enhancer to pull the sound back into the center. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Instant Pseudo-Stereo (Fruity Stereo Enhancer)

## Routing Context
- **Target:** A mono Synth Lead or dry Acoustic Guitar.
- **Position:** Insert FX (Slot 1).

## Step-by-Step Setup
1.  On the mono track, load **Fruity Stereo Enhancer**.
2.  Set **STEREO SEPARATION** to the middle (Default).
3.  Slowly turn the **PHASE OFFSET** knob to the left (approx. 15ms-20ms).
4.  **The Result:** The sound will immediately jump out to the sides.
5.  **The Fix:** Notice the sound feels like it's coming more from the Right ear. Turn the **PAN** knob slightly to the Left until the sound feels centered again.

## Vibe Check
- **Vibey/Spacey:** Turns a boring mono sound into a 3D professional instrument. Essential for atmospheric R&B.

## Variation
- **Super Wide:** Use the **INVERT** switch along with the Phase Offset for an even wider, more psychedelic effect. (Warning: Check Mono!). [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\haas-effect-vocal-width.md

```markdown
# Haas Effect for Vocal Width - Complete Workflow

## Overview
The Haas effect uses timing differences between left and right channels to create a sense of stereo width from a mono source. This is perfect for making mono vocal recordings feel wider without traditional doubling.

## What is the Haas Effect?

The Haas effect (also called precedence effect) occurs when the same sound reaches our ears at slightly different times. Our brain perceives this as a wider sound source while maintaining the localization of the first-arriving sound.

**Key Timing Ranges:**
- **1-20ms:** Subtle width, minimal comb filtering
- **20-40ms:** Optimal Haas effect, natural "double tracking"
- **40-100ms:** Noticeable delay, significant comb filtering
- **100ms+:** Perceived as distinct echo, not width

## When to Use Haas Effect

### Best Applications
✅ Background vocals
✅ Vocal ad-libs
✅ Vocal harmonies
✅ Doubles/layers
✅ Atmospheric vocal elements
✅ Vocal chops

### Avoid On
❌ Lead vocals (use traditional doubling instead)
❌ Rap verses (keep focused and upfront)
❌ Hook vocals (maintain center position)
❌ Elements that need mono compatibility

## Step-by-Step Workflow

### Step 1: Load the Plugin
1. Select your mono vocal track in mixer
2. Add **Fruity Stereo Enhancer** to an empty slot
3. Ensure your vocal is properly gained and compressed first

### Step 2: Set Phase Offset
1. Turn the **Phase Offset** knob to **25ms**
   - This is the sweet spot for most vocals
   - Natural double-tracking feel
   - Minimal harsh artifacts

### Step 3: Compensate Pan Shift
The Haas effect creates a pan bias toward the *undelayed* channel:

1. Play your vocal and listen for pan position
2. Adjust the **Pan** knob slightly to the right (typically)
3. Goal: Re-center the vocal in the stereo field
4. Fine-tune by ear until it sounds centered

**Typical Pan Compensation:**
- 25ms offset → Pan ~5-10% right
- 30ms offset → Pan ~10-15% right
- 35ms offset → Pan ~15-20% right

### Step 4: Check Mono Compatibility
**CRITICAL STEP - Do not skip!**

1. Hit the mono button in FL Studio
2. Listen for:
   - Thinning of the vocal
   - Loss of body/weight
   - Flanging/phasing artifacts
   - Reduction in volume

3. If mono cancellation is severe:
   - Reduce Phase Offset to 15-20ms
   - Or use traditional stereo doubling instead

### Step 5: Volume Matching
1. Bypass the plugin
2. Note the perceived loudness
3. Enable the plugin
4. Adjust **Volume** knob to match bypass level
5. This ensures accurate A/B comparison

## Genre-Specific Settings

### Moody Hip-Hop
**Goal:** Atmospheric, wide background vocals

- **Phase Offset:** 20ms
- **Pan Compensation:** 8% right
- **Volume:** -0.5dB
- **Use on:** Background vocals, harmonies, vocal pads
- **Notes:** Keep offset low to maintain dark, cohesive sound

### Upbeat Hip-Hop
**Goal:** Energetic, spacious doubles

- **Phase Offset:** 30ms
- **Pan Compensation:** 12% right
- **Volume:** 0dB
- **Use on:** Vocal doubles, ad-libs, energetic layers
- **Notes:** Slightly higher offset for more noticeable width

### Melodic Hip-Hop
**Goal:** Lush, layered vocal harmonies

- **Phase Offset:** 25ms
- **Pan Compensation:** 10% right
- **Volume:** -1dB
- **Use on:** Harmonies, stacked vocals, melodic layers
- **Notes:** Stack multiple with different offset times (20ms, 25ms, 30ms)

### Electronic Hip-Hop
**Goal:** Processed, synthetic vocal character

- **Phase Offset:** 20ms
- **Pan Compensation:** 8% right
- **Volume:** 0dB
- **Use on:** Vocal chops, processed vocals, robotic elements
- **Notes:** Works well with vocoder and other FX

### Trap
**Goal:** Spacious ad-libs and background elements

- **Phase Offset:** 25ms
- **Pan Compensation:** 10% right
- **Volume:** 0dB
- **Use on:** Ad-libs ("yeah," "ay"), background chants, vocal fills
- **Notes:** Keeps ad-libs wide without interfering with centered lead

## Advanced Techniques

### Multi-Layer Haas
Create ultra-wide vocals by stacking multiple instances:

**Layer 1 (Most Subtle):**
- Phase Offset: 15ms
- Pan: 5% right
- Volume: -3dB

**Layer 2 (Medium):**
- Phase Offset: 25ms
- Pan: 10% right
- Volume: -3dB

**Layer 3 (Widest):**
- Phase Offset: 35ms
- Pan: 15% right
- Volume: -4dB

**Result:** Gradually widening stereo field with depth

### Frequency-Specific Haas
Apply Haas effect only to certain frequencies:

1. Duplicate your vocal track (Ctrl+L)
2. On Track 1:
   - High-pass filter at 5kHz
   - Apply Haas effect (25ms offset)
3. On Track 2:
   - Low-pass filter at 5kHz
   - Keep centered (no Haas)

**Result:** Wide highs, focused lows - best of both worlds

### Automated Haas
Automate the Phase Offset for dynamic width:

**Verse:** 0ms (mono, focused)
**Pre-Chorus:** Ramp up to 25ms (building width)
**Chorus:** 25ms (full width)
**Post-Chorus:** Ramp down to 0ms (returning to focus)

## Troubleshooting

### Problem: Vocal sounds thin in stereo
**Solution:** Reduce Phase Offset to 15-20ms

### Problem: Severe mono cancellation
**Solution:** 
- Reduce offset significantly (10-15ms)
- Or use traditional stereo doubling instead
- Or apply only to high frequencies

### Problem: Vocal sounds flanged/phased
**Solution:**
- You're hearing comb filtering
- Reduce Phase Offset
- Try 20ms instead of 30ms

### Problem: Vocal doesn't sound centered
**Solution:** Adjust Pan compensation more aggressively

### Problem: Inconsistent width perception
**Solution:**
- Your offset is too high (over 40ms)
- Reduce to 25-30ms range
- Check your monitoring environment

## Comparison: Haas vs Traditional Doubling

| Aspect | Haas Effect | Traditional Doubling |
|--------|-------------|---------------------|
| Setup Time | Instant | Requires recording |
| Mono Compatibility | Poor to Fair | Excellent |
| Natural Sound | Good | Excellent |
| Control | Precise | Variable |
| Artifacts | Comb filtering | None |
| Best For | Background elements | Lead vocals |
| Automation | Easy | Difficult |

## Integration with Other Plugins

### Before Stereo Enhancer
1. **EQ:** Clean up vocal first
2. **De-esser:** Control sibilance
3. **Compressor:** Even out dynamics

### After Stereo Enhancer
1. **Reverb:** Add space (use pre-delay to avoid muddiness)
2. **Delay:** Rhythmic elements (may increase width further)
3. **Limiter:** Final level control

### Parallel Processing
For maximum control:

1. Send vocal to auxiliary channel
2. Apply Haas effect on auxiliary
3. Blend wet/dry with mixer fader
4. Result: Precise control over width amount

## Haas Effect Presets

### "Subtle Background"
- Offset: 15ms
- Pan: 6% right
- Use: Minimal width, maximum mono compatibility

### "Natural Double"
- Offset: 25ms
- Pan: 10% right
- Use: Sweet spot for most applications

### "Wide Atmosphere"
- Offset: 35ms
- Pan: 15% right
- Use: Maximum width, expect mono issues

### "Experimental Wide"
- Offset: 50ms
- Pan: 20% right
- Use: Creative effects, not for critical elements

## Pro Tips

1. **Start conservative** - Begin with 20ms and increase if needed
2. **Trust your ears** - If it sounds good in stereo but bad in mono, reduce offset
3. **Genre matters** - Trap/modern = wider acceptable, Boom-bap = tighter better
4. **Streaming platforms** - Many use mono summation, always check
5. **Reference tracks** - Compare your width to professional releases
6. **Save presets** - Create your go-to settings for quick recall
7. **Layer carefully** - Multiple Haas instances compound quickly
8. **Frequency specific** - Consider applying only to highs (5kHz+)
9. **Automation** - Use for dynamic arrangements and builds
10. **Less is more** - Subtle width often sounds more professional

## Common Mistakes

❌ **Using on lead vocals** - Keep leads focused and centered
❌ **Ignoring mono** - Always check mono compatibility
❌ **Too high offset** - Over 40ms sounds like delay, not width
❌ **Forgetting pan compensation** - Haas creates pan shift
❌ **Stacking carelessly** - Multiple instances without purpose
❌ **No level matching** - Compare at matched volumes
❌ **Over-processing** - Subtle is often better
❌ **Wrong elements** - Use on backgrounds, not critical parts

## Success Metrics

You've nailed it when:
- ✅ Vocal feels wide and spacious in stereo
- ✅ Mono compatibility is acceptable for your genre
- ✅ No obvious flanging or phasing artifacts
- ✅ Pan position sounds centered after compensation
- ✅ Width enhances the mix without dominating
- ✅ A/B comparison shows clear improvement
- ✅ Settings are documented in your preset

## Further Reading

- **Haas Effect Theory:** Understanding psychoacoustics
- **Comb Filtering:** Why timing creates frequency cancellation
- **Mid/Side Processing:** Alternative width techniques
- **Stereo Imaging:** Comprehensive stereo field control
- **Mono Compatibility:** Broadcasting and streaming standards

---

**Quick Start:** Load plugin → Set Phase Offset to 25ms → Pan 10% right → Check mono → Adjust to taste

```

---

## FILE: 03-Workflows\by-instrument\hi-hat-width-enhancement.md

```markdown
# Hi-Hat Width Enhancement - Complete Workflow

## Overview
Hi-hats are perfect candidates for stereo widening because they occupy the high-frequency spectrum where width creates air and energy without sacrificing low-end punch. This workflow shows you how to make hi-hats feel wide and spacious in upbeat, trap, and electronic hip-hop productions.

## Why Widen Hi-Hats?

### Benefits
✅ Creates energy and movement in the mix
✅ Opens up space for vocals and other centered elements
✅ Adds professional polish to drum programming
✅ Enhances groove and rhythm perception
✅ Makes tracks feel more "expensive" and polished
✅ Minimal mono compatibility issues (highs are less critical)

### Genre Applications
- **Trap:** Wide hi-hat rolls are signature (60-70% width)
- **Upbeat Hip-Hop:** Energetic, spacious hats (50-60% width)
- **Electronic Hip-Hop:** Synthetic, wide hats (45-55% width)
- **Boom-Bap:** Conservative width to maintain punch (15-25% width)
- **Melodic Hip-Hop:** Moderate width for balance (30-40% width)

## Core Technique: Stereo Separation

**Use Stereo Separation (NOT Phase Offset) for hi-hats**

Why? Most hi-hats in FL Studio are already stereo:
- Layered samples create natural stereo content
- Panning creates stereo field
- Effects (reverb/delay) add stereo information

**Phase Offset** would only work on pure mono hi-hats (rare)

## Step-by-Step Workflow

### Step 1: Identify Your Hi-Hat Type

**Stereo Hi-Hats (Most Common):**
- Multiple layered samples
- Stereo samples from packs
- Already has L/R information

**Action:** Use Stereo Separation control

**Mono Hi-Hats (Less Common):**
- Single mono sample
- No stereo information

**Action:** Consider Phase Offset OR use Stereo Shaper instead

### Step 2: Load Fruity Stereo Enhancer
1. Select your hi-hat channel in the mixer
2. Load **Fruity Stereo Enhancer** in an empty effects slot
3. Ensure it's AFTER any reverb/delay for maximum width

### Step 3: Adjust Stereo Separation

**Conservative Width (Boom-Bap):**
- Turn knob **15-25% to the left**
- Subtle width enhancement
- Maintains punch and focus

**Moderate Width (Melodic/Upbeat):**
- Turn knob **40-50% to the left**
- Noticeable width
- Balanced and professional

**Aggressive Width (Trap/Electronic):**
- Turn knob **60-70% to the left**
- Maximum width
- Signature trap sound

### Step 4: Check Mono Compatibility
1. Enable mono monitoring in FL Studio
2. Listen for thinning or loss of presence
3. If hats disappear significantly, reduce width
4. High frequencies are more forgiving in mono than mids/lows

**Acceptable mono loss for hats:** 20-30% volume reduction is okay

### Step 5: Volume Matching
1. Bypass the plugin
2. Note the perceived loudness
3. Enable the plugin
4. Slightly reduce volume if needed (typically -0.5 to -1dB)

## Genre-Specific Settings

### Trap Hi-Hats
**Goal:** Signature wide, aggressive hats

`\`\`
Stereo Separation: 65% left
Phase Offset: 0ms
Pan: Center
Volume: 0dB
`\`\`

**Use on:**
- Hi-hat rolls
- Rapid trap hats
- 808 hi-hats
- Triplet rolls

**Notes:** This is a defining characteristic of trap - go wide!

### Upbeat Hip-Hop Hats
**Goal:** Energetic, spacious without being extreme

`\`\`
Stereo Separation: 50% left
Phase Offset: 0ms
Pan: Center
Volume: -0.5dB
`\`\`

**Use on:**
- Open hats
- Closed hats
- Shakers
- Tambourines

**Notes:** Balanced width that adds energy without dominating

### Melodic Hip-Hop Hats
**Goal:** Controlled width that doesn't overpower melodies

`\`\`
Stereo Separation: 35% left
Phase Offset: 0ms
Pan: Center
Volume: 0dB
`\`\`

**Use on:**
- Melodic hi-hats
- Subtle percussion
- Background rhythm

**Notes:** Keep hats in the background to support melodies

### Boom-Bap Hats
**Goal:** Punchy, focused with minimal width

`\`\`
Stereo Separation: 20% left
Phase Offset: 0ms
Pan: Center
Volume: 0dB
`\`\`

**Use on:**
- Classic boom-bap hats
- Jazz-sampled hats
- Vintage drum breaks

**Notes:** Maintains classic centered punch

### Lo-Fi Hip-Hop Hats
**Goal:** Warm, subtle width

`\`\`
Stereo Separation: 25% left
Phase Offset: 0ms
Pan: Center
Volume: -0.5dB
`\`\`

**Use on:**
- Dusty hats
- Vinyl-sampled percussion
- Jazzy hats

**Notes:** Gentle width enhances lo-fi aesthetic

## Advanced Techniques

### Frequency-Specific Width
Apply width only to the highest frequencies:

1. **Duplicate your hi-hat track**
2. **Track 1 (Highs):**
   - High-pass filter at 10kHz
   - Apply Stereo Separation: 60% left
3. **Track 2 (Body):**
   - Low-pass filter at 10kHz
   - Minimal or no width: 10% left

**Result:** Extremely wide air, focused body

### Automated Width for Builds
Create dynamic energy with automation:

**Verse:** 30% left (moderate)
**Pre-Chorus:** Automate from 30% → 60% (building)
**Chorus:** 60% left (full width)
**Bridge:** Drop to 20% (create contrast)

### Stereo Delay Enhancement
Stack width techniques for maximum effect:

1. **Slot 1:** Fruity Delay 3 (stereo pingpong)
2. **Slot 2:** Fruity Stereo Enhancer (50% separation)

**Result:** Rhythmic AND spatial width

### Multi-Layer Hi-Hat Width
Different width for different hat layers:

**Layer 1 (Main Closed):** 40% width
**Layer 2 (Sizzle/Air):** 65% width  
**Layer 3 (Body/Attack):** 20% width

**Result:** Complex, professional stereo field

## Hi-Hat Specific Considerations

### Open vs Closed Hats

**Closed Hats:**
- Can handle more width (50-65%)
- Less sustain = less phase issues
- Perfect for trap rolls

**Open Hats:**
- Be more conservative (30-45%)
- Long sustain can create muddiness if too wide
- Check mono carefully

### Hi-Hat Rolls
Trap rolls sound better VERY wide:

`\`\`
Stereo Separation: 70% left
Phase Offset: 0ms
Use on: Rapid hi-hat rolls only
`\`\`

This creates the characteristic "swirling" roll sound

### Hi-Hat vs Other Percussion

**Wider (50%+):**
- Hi-hats
- Shakers
- Tambourines
- Cymbals

**Narrower (20-30%):**
- Snares
- Claps
- Toms
- Kicks (keep mono!)

## Integration with Other Plugins

### Effect Chain Order

**Optimal Order:**
1. **EQ** - Shape tone
2. **Compression** - Control dynamics
3. **Reverb/Delay** - Add space (creates stereo)
4. **Stereo Enhancer** - Enhance existing stereo
5. **Limiter** - Final level control

### Plugin Combinations

**With Fruity Delay 3:**
- Delay creates stereo pingpong
- Stereo Enhancer widens the delayed signal
- Result: Extremely spacious rhythmic hats

**With Fruity Reeverb 2:**
- Reverb creates stereo field
- Stereo Enhancer expands the reverb tail
- Result: Massive atmospheric hats

**With Fruity Parametric EQ 2:**
- Boost air frequencies (12-16kHz)
- Apply width to enhanced frequencies
- Result: Brilliant, airy wide hats

## Troubleshooting

### Problem: Hats sound thin or weak
**Solution:**
- Width is too aggressive
- Reduce Stereo Separation to 40% or less
- Check if you're removing too many mids with EQ

### Problem: Hats disappear in mono
**Solution:**
- This is somewhat expected with wide hats
- Reduce width to 40-50% maximum
- Consider if mono compatibility matters for your release

### Problem: Hats sound phasey/flanged
**Solution:**
- You may have used Phase Offset accidentally
- Or your hats have phase issues in the sample itself
- Use Stereo Separation only (0ms Phase Offset)

### Problem: Hats overpower the mix
**Solution:**
- Reduce Stereo Separation
- Lower the volume -1 to -2dB
- Use automation to reduce width in busy sections

### Problem: Hats sound synthetic/fake
**Solution:**
- Width might be too uniform
- Use automation for dynamic width
- Layer multiple hats with different width amounts

## Preset Quick Reference

### "Trap Roll Extreme"
`\`\`
Separation: 70% left
Use: Hi-hat rolls only
Mono: Expect significant loss
`\`\`

### "Upbeat Energy"
`\`\`
Separation: 50% left
Use: General upbeat production
Mono: Good compatibility
`\`\`

### "Subtle Polish"
`\`\`
Separation: 25% left
Use: Boom-bap, lo-fi
Mono: Excellent compatibility
`\`\`

### "Melodic Balance"
`\`\`
Separation: 35% left
Use: Melodic hip-hop
Mono: Very good compatibility
`\`\`

### "Electronic Wide"
`\`\`
Separation: 55% left
Use: Electronic/future bass
Mono: Good compatibility
`\`\`

## Pro Tips

1. **Go wider than you think** - Hats can handle aggressive width
2. **Mono is less critical** - High frequencies are more forgiving
3. **Trap = wide** - Don't be shy with trap hi-hat width
4. **Automate it** - Dynamic width creates movement
5. **Layer with different widths** - Creates depth and complexity
6. **After reverb/delay** - Place Enhancer AFTER spatial effects
7. **Check on multiple systems** - Ensure width translates
8. **Combine with EQ** - Boost air + width = professional sound
9. **Genre dictates width** - Trap wide, boom-bap narrow
10. **Save your presets** - Create genre-specific quick recalls

## Common Mistakes

❌ **Widening kick or bass** - Keep lows centered!
❌ **Using Phase Offset on stereo hats** - Use Separation instead
❌ **Same width on all percussion** - Vary width for interest
❌ **Ignoring the genre** - Trap needs more width than boom-bap
❌ **Too early in chain** - Place after reverb/delay
❌ **No volume compensation** - Match levels for fair comparison
❌ **Over-thinking mono** - High frequencies are more forgiving
❌ **Static width** - Use automation for dynamics

## Success Metrics

You've nailed it when:
- ✅ Hats feel spacious and energetic
- ✅ Mix has more air and openness
- ✅ Vocals have space to sit in the center
- ✅ Groove feels more professional
- ✅ Width matches the genre expectations
- ✅ A/B comparison shows clear improvement
- ✅ Mono compatibility is acceptable for your use case

## Integration with Drum Bus

### Should You Widen Individual Hats or Drum Bus?

**Individual Hats (Recommended):**
- More control
- Can be more aggressive
- Better for modern production
- Trap/electronic styles

**Drum Bus (Conservative):**
- Affects all drums
- More natural/cohesive
- Better for boom-bap/lo-fi
- Maximum mono compatibility

**Hybrid Approach:**
- Wide hats individually (60%)
- Subtle drum bus width (15%)
- Maximum control and cohesion

## Further Applications

Once you master hi-hat widening:
- Apply to shakers and tambourines
- Experiment with cymbal crashes
- Try on percussion loops
- Use on synth arpeggios (similar frequency range)

---

**Quick Start:** Hi-hat channel → Stereo Enhancer → Separation 50% left → Check in mix → Adjust to genre

```

---

## FILE: 03-Workflows\by-instrument\synth-pad-widening.md

```markdown
# Synth Pad Widening - Complete Workflow

## Overview
Synth pads are ideal candidates for stereo widening. They occupy the mid-to-high frequency range, provide harmonic and atmospheric content, and benefit greatly from spatial enhancement. This workflow covers everything from subtle enhancement to immersive soundscapes across all hip-hop subgenres.

## Why Widen Synth Pads?

### Benefits
✅ Creates immersive, atmospheric textures
✅ Fills the stereo field without cluttering the center
✅ Enhances emotional impact of moody/melodic productions
✅ Provides contrast to centered elements (vocals, bass, kick)
✅ Adds professional polish and depth
✅ Generally good mono compatibility (depends on technique)

### Genre Applications
- **Moody Hip-Hop:** Wide pads create dark, immersive atmospheres (40-50% width)
- **Melodic Hip-Hop:** Lush, spacious pads support melodies (35-45% width)
- **Electronic Hip-Hop:** Synthetic, expansive pads (50-60% width)
- **Ambient/Experimental:** Maximum width for soundscapes (60-70% width)
- **Lo-Fi Hip-Hop:** Subtle width for warmth (25-35% width)

## Understanding Pad Stereo Content

### Most Pads Are Already Stereo
Modern synth pads typically have:
- **Multiple oscillators** with stereo spreading
- **Unison/detune** creating natural width
- **Built-in effects** (chorus, reverb, delay)
- **Stereo samples** from preset libraries

**This means:** Use **Stereo Separation** (not Phase Offset)

### Mono Pads (Less Common)
- Single oscillator, no unison
- Mono samples or recordings
- Dry, minimal processing

**For these:** Phase Offset can work, but Stereo Separation won't help

## Step-by-Step Workflow

### Step 1: Analyze Your Pad
1. Load the pad in mixer
2. Check the stereo field visually (Wave Candy or Stereo Shaper)
3. Determine if it has existing stereo content

**If stereo:** Proceed with Stereo Separation
**If mono:** Consider Phase Offset (20-40ms) or use source-level width first

### Step 2: Apply Fruity Stereo Enhancer
1. Select your pad channel in mixer
2. Load **Fruity Stereo Enhancer** in an empty effects slot
3. Place AFTER reverb/chorus/delay for maximum effect

### Step 3: Set Stereo Separation

**Subtle Enhancement (Lo-Fi, Boom-Bap):**
- Turn knob **25-35% to the left**
- Natural, warm width
- Excellent mono compatibility

**Moderate Width (Melodic, Moody):**
- Turn knob **35-45% to the left**
- Noticeable but balanced
- Professional sound

**Aggressive Width (Electronic, Experimental):**
- Turn knob **50-60% to the left**
- Immersive, expansive
- Check mono carefully

**Maximum Width (Ambient, FX):**
- Turn knob **60-70% to the left**
- Extreme spatial enhancement
- Mono compatibility compromised

### Step 4: Fine-Tune with Volume
Widening can create perceived loudness changes:

1. Bypass the plugin
2. Note the level
3. Enable and adjust **Volume** to match (-0.5 to -1dB typically)

### Step 5: Check Mono Compatibility
1. Enable mono monitoring
2. Listen for:
   - Thinning of pad body
   - Loss of harmonic richness
   - Phase cancellation artifacts
3. If severe issues, reduce width by 10-20%

### Step 6: Context Check
Play in full mix context:
- Does it support the vocals?
- Is there room for other elements?
- Does it match the genre vibe?

## Genre-Specific Settings

### Moody Hip-Hop Pads
**Goal:** Dark, atmospheric, immersive

`\`\`
Stereo Separation: 40% left
Phase Offset: 0ms
Pan: Center
Volume: -0.5dB
`\`\`

**Use on:**
- Dark ambient pads
- Drone textures
- Atmospheric layers
- Cinematic soundscapes

**Notes:** Creates space without losing the moody, cohesive feel

### Melodic Hip-Hop Pads
**Goal:** Lush, supportive, balanced

`\`\`
Stereo Separation: 35% left
Phase Offset: 0ms
Pan: Center
Volume: -0.5dB
`\`\`

**Use on:**
- String pads
- Synth pads
- Orchestral layers
- Piano pad textures

**Notes:** Wide enough to be lush, focused enough to support melodies

### Electronic Hip-Hop Pads
**Goal:** Synthetic, expansive, modern

`\`\`
Stereo Separation: 50% left
Phase Offset: 0ms
Pan: Center
Volume: -1dB
`\`\`

**Use on:**
- Synth pads
- Digital textures
- Future bass pads
- Experimental sounds

**Notes:** Embraces the synthetic, processed aesthetic

### Lo-Fi Hip-Hop Pads
**Goal:** Warm, vintage, subtle

`\`\`
Stereo Separation: 30% left
Phase Offset: 0ms
Pan: Center
Volume: -0.5dB
`\`\`

**Use on:**
- Vintage synth emulations
- Sampled pads
- Warm analog textures
- Jazz-influenced pads

**Notes:** Subtle enhancement maintains lo-fi warmth

### Ambient/Experimental Pads
**Goal:** Maximum immersion, soundscape

`\`\`
Stereo Separation: 65% left
Phase Offset: 0ms
Pan: Center
Volume: -1.5dB
`\`\`

**Use on:**
- Ambient drones
- Experimental textures
- Sound design elements
- Cinematic atmospheres

**Notes:** Push boundaries, mono compatibility less critical

## Advanced Techniques

### Frequency-Specific Pad Widening
Widen only certain frequency ranges:

**Setup:**
1. Duplicate pad track
2. **Track 1 (Highs - Wide):**
   - High-pass at 2kHz
   - Stereo Separation: 60% left
3. **Track 2 (Lows/Mids - Focused):**
   - Low-pass at 2kHz
   - Stereo Separation: 20% left

**Result:** Wide air and shimmer, focused low-mid body

### Mid/Side Pad Processing
Use Stereo Enhancer with Mid/Side EQ:

**Workflow:**
1. **Fruity Parametric EQ 2** (Mid/Side mode)
   - Boost Side signal at 5kHz+ for air
2. **Fruity Stereo Enhancer**
   - Stereo Separation: 40% left (enhances the boosted side)

**Result:** Precise control over stereo content enhancement

### Layered Pad Width Strategy
Different width for different pad layers:

**Layer 1 (Foundation):** 25% width (mono-compatible body)
**Layer 2 (Texture):** 45% width (adds space)
**Layer 3 (Air/Shimmer):** 65% width (extreme width for sparkle)

**Result:** Professional, dimensional pad sound

### Automated Width for Dynamics
Create movement and build-ups:

**Intro:** 20% (intimate)
**Verse:** 35% (supportive)
**Pre-Chorus:** Automate 35% → 55% (building)
**Chorus:** 55% (expansive)
**Outro:** Automate 55% → 70% (floating away)

### Haas Effect for Mono Pads
If your pad is truly mono:

`\`\`
Stereo Separation: Center
Phase Offset: 25ms
Pan: 10% right (compensate)
Volume: -0.5dB
`\`\`

**Use:** Creates natural "double tracking" feel
**Warning:** Check mono compatibility carefully

## Pad-Specific Considerations

### Drone Pads
Long, sustained tones:
- Can handle aggressive width (50-65%)
- Excellent mono compatibility (smooth frequency content)
- Use for ambient/experimental genres

### Chord Pads
Harmonic chord progressions:
- Moderate width (35-45%)
- Balance clarity and space
- Ensure chords remain intelligible in mono

### Arpeggiated Pads
Moving, rhythmic pad textures:
- Conservative to moderate (25-40%)
- Too much width can blur the rhythm
- Consider stereo delay instead for rhythmic width

### String Pads
Orchestral string textures:
- Moderate width (35-45%)
- Mimics natural orchestra placement
- Excellent mono compatibility

### Vocal Pads
Processed vocal textures:
- Moderate width (30-40%)
- Maintain vocal intelligibility
- Check mono for streaming platforms

## Integration with Other Effects

### Effect Chain Order

**Optimal Order:**
1. **EQ** - Shape tone
2. **Compression** - Control dynamics (optional for pads)
3. **Saturation** - Add harmonics
4. **Chorus/Flanger** - Creates stereo movement
5. **Reverb** - Adds space (creates more stereo)
6. **Delay** - Rhythmic/spatial elements
7. **Fruity Stereo Enhancer** - Enhance all stereo content
8. **Limiter** - Final level control

### Why Place Enhancer Near the End?
Reverb, chorus, and delay create stereo information. Enhancing AFTER these effects widens the spatial content they create.

### Plugin Combinations

**With Fruity Reeverb 2:**
- Reverb creates stereo tail
- Stereo Enhancer expands reverb width
- Result: Massive, atmospheric pad

**With Fruity Chorus:**
- Chorus creates stereo movement
- Stereo Enhancer widens the movement
- Result: Lush, animated texture

**With Fruity Delay 3:**
- Delay creates rhythmic stereo
- Stereo Enhancer expands spatial field
- Result: Expansive rhythmic pad

**With Fruity Love Philter:**
- Filter sweeps create movement
- Stereo Enhancer adds spatial dimension
- Result: Dynamic, wide filtered pad

## Troubleshooting

### Problem: Pad sounds thin or weak
**Solution:**
- Width too aggressive, reduce to 35-40%
- May need to boost low-mids (200-500Hz) with EQ
- Check if source pad has enough body

### Problem: Pad loses body in mono
**Solution:**
- Reduce Stereo Separation to 30-35%
- Use frequency-specific widening (only highs)
- Ensure source pad has strong mono core

### Problem: Pad sounds phasey/flanged
**Solution:**
- If you used Phase Offset, reduce or remove it
- Source pad may have phase issues
- Use Stereo Separation only (0ms offset)

### Problem: Pad overpowers the mix
**Solution:**
- Reduce width to 30-35%
- Lower volume by 1-2dB
- EQ to reduce frequency overlap with vocals

### Problem: Pad feels distant/disconnected
**Solution:**
- Width may be too extreme (60%+)
- Reduce to 35-45% for more cohesion
- Add slight mid-range presence with EQ

## Preset Quick Reference

### "Moody Atmosphere"
`\`\`
Separation: 40% left
Use: Dark, moody hip-hop pads
Mono: Good compatibility
`\`\`

### "Melodic Lush"
`\`\`
Separation: 35% left
Use: Melodic, harmonic pads
Mono: Excellent compatibility
`\`\`

### "Electronic Expansive"
`\`\`
Separation: 50% left
Use: Synthetic, modern pads
Mono: Fair compatibility
`\`\`

### "Lo-Fi Warmth"
`\`\`
Separation: 30% left
Use: Vintage, lo-fi pads
Mono: Excellent compatibility
`\`\`

### "Ambient Immersion"
`\`\`
Separation: 65% left
Use: Experimental soundscapes
Mono: Poor compatibility (not a concern)
`\`\`

## Pro Tips

1. **After spatial FX** - Place Enhancer after reverb/chorus/delay
2. **Less for chords** - Harmonic pads need clarity, keep moderate
3. **More for drones** - Sustained tones can go very wide
4. **Automate for dynamics** - Create builds and movement
5. **Layer different widths** - Professional dimensional sound
6. **Check in context** - Always test in full mix
7. **Frequency-specific** - Widen highs, keep lows focused
8. **Genre dictates width** - Match expectations
9. **Mono is important** - Streaming platforms use mono summing
10. **Save presets** - Build your go-to pad enhancement library

## Common Mistakes

❌ **Widening before reverb** - Place after spatial effects
❌ **Too wide for melodic content** - Chords need clarity
❌ **Same width for all pads** - Vary for depth and interest
❌ **Ignoring mono** - Always check compatibility
❌ **Using Phase Offset on stereo pads** - Use Separation instead
❌ **Over-widening low frequencies** - Keep lows focused
❌ **No volume compensation** - Match levels for comparison
❌ **Forgetting genre context** - Trap ≠ Boom-bap

## Success Metrics

You've nailed it when:
- ✅ Pad feels immersive and atmospheric
- ✅ Creates space without overpowering mix
- ✅ Supports vocals and centered elements
- ✅ Mono compatibility is acceptable
- ✅ Width matches genre expectations
- ✅ Emotional impact is enhanced
- ✅ A/B comparison shows clear improvement

## Further Applications

Master pad widening and apply to:
- String sections
- Brass layers
- Choir/vocal pads
- Textural sound design
- Ambient FX and risers

---

**Quick Start:** Pad channel → Stereo Enhancer (after reverb) → Separation 40% left → Check mono → Adjust to genre and taste

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Stereo Enhancer

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Fruity Stereo Enhancer.
- **Key Info:** Description of Stereo Separation logic (Mid/Side balance), Phase Offset delay range (0-500ms), and phase inversion functionality.

## Source ID: [SRC: REPUTABLE]
- **Source:** "Mixing for the Modern Club" (Sound On Sound).
- **Key Info:** Importance of mono-collapsing the low-end, using the Haas effect for perceived width, and avoiding phase cancellation in rhythmic percussion.

## Genre Style Board: Fruity Stereo Enhancer

| Vibe | Setting | Effect |
| :--- | :--- | :--- |
| **Upbeat** | 100% Right (Mono) | Solid 808s / Kicks |
| **Spacey** | 100% Left (Wide) | Ethereal Clouds |
| **Vibey** | 20ms Phase Offset | Pseudo-Double Track |
| **Psychedelic**| 50ms Offset + Invert | Disorienting Width |
| **Moody** | 50% Right + Pan | Small Isolated Focus|

```

---

