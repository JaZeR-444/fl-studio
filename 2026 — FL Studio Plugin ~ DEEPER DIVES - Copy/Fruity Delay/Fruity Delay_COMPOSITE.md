# Fruity Delay - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Fruity Delay - Classic Echo & Delay

`\`\`
███████╗██████╗ ██╗   ██╗██╗████████╗██╗   ██╗    ██████╗ ███████╗██╗      █████╗ ██╗   ██╗
██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝╚██╗ ██╔╝    ██╔══██╗██╔════╝██║     ██╔══██╗╚██╗ ██╔╝
█████╗  ██████╔╝██║   ██║██║   ██║    ╚████╔╝     ██║  ██║█████╗  ██║     ███████║ ╚████╔╝ 
██╔══╝  ██╔══██╗██║   ██║██║   ██║     ╚██╔╝      ██║  ██║██╔══╝  ██║     ██╔══██║  ╚██╔╝  
██║     ██║  ██║╚██████╔╝██║   ██║      ██║       ██████╔╝███████╗███████╗██║  ██║   ██║   
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝      ╚═╝       ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝   ╚═╝   
`\`\`

**Plugin Type:** Delay / Echo Line
**Category:** Effect / Creative
**Official Manual:** [Image-Line Fruity Delay Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Delay.htm)

---

## 🎯 What is Fruity Delay?

Fruity Delay is FL Studio's standard delay line processor. It is optimized for low CPU usage and provides essential echo effects. While simpler than Delay 2, 3, or Bank, its straightforward "Time-based" architecture (rather than Tempo-based steps) makes it unique for specific creative tasks like flanging, chorus, and robotic combs when using very short delay times.

**Key Capabilities:**
- **Time-based Delay:** Uses milliseconds/steps rather than strict tempo-grid locking for fluid adjustments.
- **Feedback Loop:** Controls the number of repeats.
- **Cutoff Filter:** A basic Low-Pass filter in the feedback path to darken echoes over time.
- **Stereo Modes:** Normal, Inverted (Left channel feedback to Right channel), and Ping Pong.
- **Auto-Panner:** Built-in volume panning for the delayed signal.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **delay-time-calculator.md** (How to match ms to BPM manually)
3. Create **parameter-cheat-sheet.md**
4. Test the "Ping Pong" mode on a short percussion sound.

### For Sound Designers:
1. Review **creating-flangers.md** (Using <10ms delay times)
2. Study **haas-effect-widening.md**
3. Learn **feedback-loop-tricks.md**

### For Mix Engineers:
1. Study **vocal-slapback.md**
2. Review **dub-delay-basics.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Input:** Volume/Pan of signal entering the delay.
  - **Feedback:** Volume/Cutoff (LPF) of the signal fed back.
  - **Delay:** Time (Tempo-based steps or manual).
  - **Mode:** Normal, Invert, Ping Pong.

- [ ] **modes-explained.md**
  - **Normal:** Standard stereo delay.
  - **Invert:** Swaps Left/Right channels in the feedback loop. Great for width.
  - **Ping Pong:** Bounces repeats L -> R -> L -> R.

#### 02-Data/parameters/
- [ ] **fruity-delay-params.json**
  `\`\`json
  {
    "plugin_name": "Fruity Delay",
    "category": "Effect",
    "parameters": [
      {
        "name": "Time",
        "type": "knob",
        "unit": "steps/ms",
        "description": "Gap between echoes",
        "use_cases": ["slapback", "rhythmic echo"]
      },
      {
        "name": "Cutoff",
        "type": "knob",
        "description": "Low-pass filter on feedback",
        "pro_tip": "Lower this to make echoes sound more 'analog' and distant"
      }
    ]
  }
  `\`\`

#### 02-Data/presets/
- [ ] **basic-delay-presets.json**
  - Vocal Slapback (100-150ms, 0 feedback)
  - Robotic Comb (5-15ms, High feedback)
  - Dub Echo (High feedback, Low Cutoff)

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-flangers.md**
  - Using extremely short delay times (<10ms)
  - Modulating the "Time" knob
  - Creating metallic textures

- [ ] **haas-effect-widening.md**
  - Muting the "Dry" signal (or using Send)
  - Delaying one channel by 20ms
  - Creating psychoacoustic width

- [ ] **classic-ping-pong.md**
  - Setup for the perfect Left-Right bounce
  - Calculating exact delay times for BPM sync

#### 03-Workflows/by-context/
- [ ] **vocal-throw-setup.md**
- [ ] **guitar-slapback.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **delay-time-chart.md**
  - Reference table converting BPM to Milliseconds
  - 1/4 note, 1/8 note, 1/16 note calculations

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Master the Echo

**Tasks:**
1. Load a simple snare hit
2. Adjust "Time" and "Feedback"
3. Engage "Ping Pong" mode
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does the "Cutoff" knob change the tone of *successive* repeats?
- What happens when you automate the "Time" knob? (Does it pitch shift?)
- How does "Invert" mode differ from "Ping Pong"?

### Phase 2: Creative Application (Week 2)
**Goal:** Beyond Simple Echoes

**Tasks:**
1. Create a Flanger effect (Short delay + automation)
2. Create a "Doubler" effect for vocals
3. Use the "Invert" mode for stereo widening
4. Create creating-flangers.md

**Key Questions to Answer:**
- How close to 0ms can you get before it phases?
- Can you create a "Reverb" using diffusion? (No, but you can simulate early reflections)

---

## 📊 Plugin Specifications to Document

### Audio Engine
- Delay Time Range (Min/Max ms)
- Filter Slope (6dB/oct?)
- Interpolation quality during time changes

### Modes
- Normal
- Invert (Stereo Swap)
- Ping Pong

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do I sync this to BPM? (Steps vs "Auto" settings in newer versions)
2. Why is the delay changing pitch when I move the knob?
3. How do I make the echoes only on the Left side?

### Advanced Usage
1. How to create "Karplus-Strong" string synthesis using high feedback?
2. Difference between Fruity Delay 1, 2, and 3? (Complexity vs CPU)

---

## 📝 Documentation Standards

### For Each Workflow:
- **Delay Time:** Specific Step or MS value
- **Feedback:** Percent amount
- **Cutoff:** Frequency estimation
- **Mode:** Normal/Invert/Ping Pong

---

## 🔗 Cross-Reference with Other Plugins

Fruity Delay is often used with:
- **Fruity Reverb 2** (Placing delay before reverb)
- **Fruity Peak Controller** (Ducking the delay input)
- **Fruity Delay 3** (The advanced sibling)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Fruity Delay/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── modes-explained.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── fruity-delay-params.json
│   └── presets/
│       └── basic-delay-presets.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-flangers.md
│   │   ├── haas-effect-widening.md
│   │   └── classic-ping-pong.md
│
└── 04-Reference/
    └── delay-time-chart.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Fruity Delay Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Delay.htm)
- [Fruity Delay Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Fruity_Delay_tutorials.htm)
- [Fruity Delay Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+fruity+delay+tutorial)

### Community Resources
- [Fruity Delay Subreddit](https://www.reddit.com/r/FL_Studio/search?q=fruity+delay&restrict_sr=1)
- [Fruity Delay User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Fruity Delay Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Delay Fundamentals" - Understanding delay and echo effects
- "Time-Based Effects Processing" - Working with delay and reverb
- "Psychoacoustic Effects" - Haas effect and spatial perception

### Advanced Techniques
- **Haas Effect Processing:** Using short delays for width
- **Flanging Simulation:** Creating flanger effects with delay
- **Comb Filtering:** Understanding comb filter applications

---

## 📚 In-Depth Technical Analysis

### Delay Algorithm
Fruity Delay implements a classic delay algorithm with several key features:
- **Time-Based Processing:** Uses milliseconds for precise timing
- **Feedback Loop:** Controls the number of repeats
- **Filter Integration:** Low-pass filter in the feedback path
- **Stereo Processing:** Multiple stereo modes
- **Panning Control:** Built-in panning for delayed signal

### Signal Processing Chain
The internal signal flow follows this order:
- **Input Stage:** Signal level and panning adjustment
- **Delay Buffer:** Storage for delayed signal
- **Feedback Loop:** Amount of delayed signal fed back
- **Filter Stage:** Low-pass filtering in feedback path
- **Output Stage:** Final level and panning adjustment

### Delay Time Calculation
Fruity Delay offers multiple ways to set delay time:
- **Manual Mode:** Direct millisecond input
- **Step Mode:** Musical divisions (quarter notes, eighth notes, etc.)
- **BPM Sync:** Automatic synchronization to project tempo
- **Ratio Mode:** Fractional relationships to tempo

### Feedback System
The feedback control determines how much of the delayed signal is fed back:
- **Low Feedback:** Few repeats, short decay
- **Medium Feedback:** Moderate repeats, medium decay
- **High Feedback:** Many repeats, long decay
- **Near 100% Feedback:** Nearly infinite repeats
- **Negative Feedback:** Phase inversion in feedback

### Stereo Processing Modes
Fruity Delay offers three distinct stereo modes:
- **Normal:** Standard stereo delay with same settings for both channels
- **Invert:** Swaps left and right channels in feedback loop
- **Ping Pong:** Alternates repeats between left and right channels

## 🎛️ Parameter Deep Dive

### Time Controls
- **Delay Time:** Controls the interval between echoes
  - Range: 0.1ms to several seconds (typically)
  - Function: Sets the gap between repeats
  - Use for: Timing echoes to musical intervals
  - Pro tip: Use BPM sync for rhythmic precision
- **Behavior:**
  - Short times: Create comb filtering and flanging
  - Medium times: Create slapback and rhythmic delays
  - Long times: Create spacious and ambient delays
  - Pro tip: Times under 30ms create comb filtering effects
- **Applications:**
  - Slapback: 100-150ms for classic rock sound
  - Rhythmic: Sync to musical intervals for rhythmic effects
  - Spatial: Longer times for spacious effects
  - Comb filtering: Very short times for metallic effects
  - Pro tip: Use with filtering for natural decay

### Feedback Controls
- **Feedback Amount:** Controls the number of repeats
  - Range: 0-100% (typically)
  - Effect: Determines echo density and decay
  - Use for: Controlling echo persistence
  - Pro tip: Higher values create more repeats
- **Behavior:**
  - 0%: No feedback, single echo
  - Low: Few repeats, quick decay
  - Medium: Several repeats, moderate decay
  - High: Many repeats, long decay
  - Pro tip: Near 100% creates infinite repeats
- **Applications:**
  - Subtle enhancement: Low feedback for gentle effect
  - Rhythmic repeats: Medium feedback for rhythmic patterns
  - Atmospheric: High feedback for ambient effects
  - Infinite: Near 100% for sustained effects
  - Pro tip: Use with filtering to prevent harshness

### Filter Controls
- **Cutoff Filter:** Low-pass filter in feedback path
  - Range: 20Hz to 20kHz (typically)
  - Effect: Darkens successive echoes
  - Use for: Creating natural decay characteristics
  - Pro tip: Lower values create more "analog" sound
- **Behavior:**
  - High settings: Preserves brightness in echoes
  - Low settings: Darkens echoes progressively
  - Pro tip: Creates natural-sounding decay
- **Applications:**
  - Analog simulation: Low cutoff for tape-like decay
  - Bright effects: High cutoff for crystal-clear repeats
  - Natural decay: Medium cutoff for realistic decay
  - Creative effects: Modulated cutoff for evolving sounds
  - Pro tip: Use for realistic echo decay

### Panning Controls
- **Auto-Panner:** Built-in panning for delayed signal
  - Range: 0-100% (typically)
  - Effect: Adds movement to delayed signal
  - Use for: Creating motion in echoes
  - Pro tip: Use for evolving delay textures
- **Behavior:**
  - 0%: No panning movement
  - High values: Pronounced panning movement
  - Pro tip: Creates evolving spatial effects
- **Applications:**
  - Spatial movement: High values for motion
  - Static delays: Low values for stability
  - Evolving textures: Modulated for change
  - Creative effects: High values for interest
  - Pro tip: Use with Ping Pong for complex movement

### Stereo Mode Controls
- **Mode Selection:** Choose stereo processing mode
  - **Normal:** Standard stereo delay
  - **Invert:** Swaps L/R in feedback loop
  - **Ping Pong:** Alternates L/R for bouncing effect
  - Pro tip: Each mode creates different spatial characteristics
- **Behavior:**
  - Normal: Predictable stereo behavior
  - Invert: Creates wider, more diffuse sound
  - Ping Pong: Creates bouncing, rhythmic effect
  - Pro tip: Invert mode increases perceived width
- **Applications:**
  - Standard delays: Use Normal mode
  - Width enhancement: Use Invert mode
  - Rhythmic effects: Use Ping Pong mode
  - Creative effects: Experiment with all modes
  - Pro tip: Combine with other stereo effects

## 🎼 Sound Design Applications

### Classic Delay Effects
Creating traditional delay effects with Fruity Delay:

**Slapback Delay:**
- Short delay time (100-150ms)
- Low feedback (10-30%)
- High cutoff for brightness
- Normal mode for standard effect
- Essential for rockabilly and classic rock

**Echo Slap:**
- Medium delay time (200-300ms)
- Medium feedback (30-50%)
- Medium cutoff for natural decay
- Ping Pong mode for rhythmic bounce
- Perfect for vocal and guitar effects

**Ambient Delay:**
- Long delay time (500ms+)
- High feedback (60-80%)
- Low cutoff for natural decay
- Invert mode for width
- Essential for atmospheric textures

### Creative Delay Applications
Using Fruity Delay for creative effects:

**Flanging Simulation:**
- Very short delay times (5-15ms)
- High feedback (70-90%)
- Modulated delay time
- Creates metallic, swooshing effect
- Perfect for robotic and sci-fi sounds

**Chorus Simulation:**
- Short delay times (15-35ms)
- Low feedback (10-30%)
- Modulated delay time
- Creates thickening effect
- Essential for adding width to sounds

**Comb Filtering:**
- Extremely short delay times (1-10ms)
- High feedback (80-95%)
- Creates metallic, resonant effect
- Perfect for robotic and electronic sounds
- Useful for special effects

### Spatial Effects
Using Fruity Delay for spatial processing:

**Stereo Widening:**
- Use Invert mode for phase manipulation
- Short to medium delay times
- Low feedback for subtle effect
- Creates psychoacoustic width
- Essential for mix enhancement

**Rhythmic Effects:**
- Use Ping Pong mode for bouncing
- Sync to musical tempo
- Medium feedback for rhythmic repeats
- Creates rhythmic interest
- Perfect for electronic music

**Spatial Movement:**
- Use with Auto-Panner
- Medium delay times
- Medium feedback
- Creates evolving spatial effects
- Useful for ambient and experimental music

## 🧪 Experimental Techniques

### Advanced Delay Applications
Creative uses of Fruity Delay's capabilities:

**Haas Effect Processing:**
- Delay one channel by 1-35ms
- Keep feedback low (0-20%)
- Creates psychoacoustic localization
- Perfect for stereo widening
- Essential for mix enhancement

**Karplus-Strong Simulation:**
- Very high feedback (95%+)
- Short delay times (10-50ms)
- Creates string-like resonances
- Perfect for plucked string simulation
- Useful for experimental sounds

**Rhythmic Modulation:**
- Modulate delay time with LFO
- Use medium delay times
- Creates rhythmic pitch modulation
- Perfect for evolving textures
- Useful for ambient music

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- Automate delay time for pitch shifts
- Modulate feedback for rhythmic effects
- Use envelope followers for dynamic control
- Create evolving delay patterns
- Generate algorithmic delay sequences

**Modulation Applications:**
- Use with external modulation sources
- Combine with other modulation effects
- Create complex modulation chains
- Perfect for live performance
- Use for expressive control

**Combination Techniques:**
- Use with filtering for tone shaping
- Combine with other time-based effects
- Layer multiple delay instances
- Create complex delay networks
- Build sophisticated processing chains

## 🎚️ Workflow Optimization

### Rhythmic Delay Workflows
Efficient approaches to creating rhythmic delays:

**BPM Calculation:**
- Calculate delay times for musical intervals
- Use the formula: (60,000 / BPM) * note_value
- For 1/8th note at 128 BPM: (60,000 / 128) * 0.5 = 234ms
- Verify with metronome or reference
- Pro tip: Use calculator for precision

**Pattern Creation:**
- Create rhythmic delay patterns
- Use Ping Pong for bouncing effects
- Sync feedback to musical timing
- Pro tip: Use piano roll automation for complex patterns

**Integration Workflows:**
- Use before reverb for depth
- Combine with compression for control
- Integrate with other effects
- Pro tip: Place in effects loop for flexibility

### Integration Workflows
Working with other plugins and tools:

**Reverb Integration:**
- Use delay before reverb for depth
- Create pre-delay effects
- Combine for complex spatial processing
- Pro tip: Use for realistic acoustic spaces
- Essential for professional mixing

**Dynamics Integration:**
- Use with compression for control
- Combine with limiting for safety
- Integrate with gates for noise control
- Pro tip: Compress after delay to control repeats
- Essential for mix balance

**EQ Integration:**
- Use EQ before delay to shape tone
- Apply EQ after delay to sculpt repeats
- Combine with filtering for tone control
- Pro tip: Filter high frequencies to prevent harshness
- Essential for tonal balance

## 🎧 Genre-Specific Applications

### Electronic Dance Music
- **Rhythmic Delays:** Creating rhythmic patterns with Ping Pong
- **Spatial Effects:** Using delay for width and depth
- **Build-up Effects:** Automating delay parameters for tension
- **Energy Management:** Using delay to enhance track energy
- **Drop Effects:** Creating dramatic effects with delay automation

### Hip-Hop and R&B
- **Vocal Enhancement:** Adding depth to vocal tracks
- **Rhythmic Interest:** Creating rhythmic delay patterns
- **Space Creation:** Adding depth to sparse arrangements
- **Mix Enhancement:** Using delay for spatial enhancement
- **Creative Effects:** Creating unique vocal textures

### Rock and Metal
- **Guitar Enhancement:** Adding depth to guitar tracks
- **Spatial Effects:** Creating spacious guitar sounds
- **Rhythmic Delays:** Adding rhythmic interest to guitars
- **Mix Enhancement:** Using delay for spatial enhancement
- **Creative Effects:** Creating unique guitar textures

### Ambient and Experimental
- **Atmospheric Processing:** Creating ambient textures
- **Evolution Techniques:** Using automation for change
- **Spatial Design:** Creating immersive soundscapes
- **Texture Creation:** Generating evolving textures
- **Experimental Applications:** Pushing boundaries of delay

## 🔄 Integration with Other Plugins

### Effects Processing
Fruity Delay works well with various effects:
- **Reverb:** Adding space to delayed signals
- **Chorus:** Adding width to delayed sounds
- **Filtering:** Additional frequency processing
- **Compression:** Controlling dynamics of delayed signals
- **Modulation:** Adding movement to delayed signals

### Dynamics Processing
Integration with dynamics processors:
- **Parallel Compression:** Combining with parallel compression
- **Upward Compression:** Using with upward compression
- **Limiting:** Combining with limiting for control
- **Gate/Expander:** Using with noise gates
- **De-esser:** Combining with de-essing

### Equalization
Working with other EQ plugins:
- **Parametric EQ:** Combining with parametric EQs for precision
- **Graphic EQ:** Comparing with graphic EQs
- **Multi-Band:** Combining with multi-band processing
- **Dynamic EQ:** Using with dynamic EQ
- **Spectral Processing:** Combining with spectral tools

## 📖 Historical Context

### Development Background
Fruity Delay was developed as a simple but effective delay processor:
- Created to provide basic delay functionality
- Designed for low CPU usage and efficiency
- Developed with mixing and creative applications in mind
- Intended to complement more complex delay plugins

### Evolution Through FL Studio Versions
- Initially introduced with basic delay capabilities
- Enhanced with additional parameters and controls
- Improved with better sound quality and stability
- Expanded with more sophisticated algorithms

### Impact on Music Production
Fruity Delay has influenced music production by:
- Providing accessible delay processing
- Enabling creative delay applications
- Facilitating rhythmic delay effects
- Supporting various musical genres with flexible delay

## 🧠 Advanced Processing Techniques

### Delay Synchronization
Advanced techniques for tempo synchronization:
- **BPM Calculation:** Precise calculation of delay times
- **Musical Division:** Understanding note value relationships
- **Sync Automation:** Automating delay to musical timing
- **Rhythmic Patterns:** Creating complex rhythmic delays
- **Polyrhythmic Effects:** Using multiple delay times

### Stereo Enhancement
Advanced stereo processing techniques:
- **Haas Effect:** Using short delays for width
- **Mid/Side Processing:** Delaying specific stereo components
- **Phase Manipulation:** Using phase relationships for effect
- **Spatial Imaging:** Creating complex spatial effects
- **Width Control:** Managing stereo field characteristics

### Creative Applications
Advanced creative techniques:
- **Sound Design:** Creating unique delay-based textures
- **Atmospheric Processing:** Building ambient soundscapes
- **Rhythmic Effects:** Creating complex rhythmic patterns
- **Spatial Manipulation:** Creating immersive environments
- **Experimental Processing:** Pushing boundaries of delay

## 📊 Performance Considerations

### CPU Usage
Managing Fruity Delay's impact on system performance:
- **Algorithm Complexity:** Different settings may affect CPU usage
- **Real-Time Performance:** Generally optimized for live performance
- **Instance Count:** Multiple instances multiply CPU usage
- **Parameter Automation:** Automated parameters may increase CPU usage
- **Optimization Strategies:** Techniques for performance

### Audio Quality
Maintaining audio quality during processing:
- **Interpolation Quality:** Maintaining smooth delay transitions
- **Filter Quality:** Maintaining good filter characteristics
- **Phase Response:** Minimizing phase artifacts
- **Aliasing Prevention:** Avoiding digital artifacts
- **Headroom Management:** Preventing clipping

### System Integration
Optimizing Fruity Delay within the system:
- **Buffer Management:** Working with audio buffer settings
- **Threading:** Understanding processing thread usage
- **Driver Compatibility:** Ensuring ASIO/WASAPI compatibility
- **Latency Management:** Minimizing audio latency

## 🛠️ Troubleshooting Common Issues

### Delay Problems
- **Flutter Echo:** Reduce feedback or adjust timing
- **Phase Issues:** Check stereo field and width settings
- **Excessive Ringing:** Reduce feedback or adjust filtering
- **Clicking/Popping:** Check for sudden parameter changes
- **Loss of Clarity:** Use filtering or reduce feedback

### Technical Issues
- **High CPU Usage:** Check for other plugins in the chain
- **Latency Issues:** Optimize buffer settings
- **Clipping:** Reduce input gain or increase output headroom
- **Artifacts:** Check sample rate and bit depth settings
- **Compatibility:** Verify plugin compatibility

### Creative Issues
- **Unmusical Results:** Try different delay times or feedback
- **Lack of Character:** Adjust filtering or stereo mode
- **Poor Integration:** Use EQ or reduce amount to blend
- **Overpowering:** Reduce feedback or use EQ to balance
- **Lack of Control:** Automate parameters for dynamic changes

## 🎚️ Advanced Configuration

### Custom Presets
Creating and managing custom configurations:
- **Rhythmic Presets:** Optimized for rhythmic delay applications
- **Spatial Presets:** Configured for spatial enhancement
- **Creative Presets:** Set up for sound design applications
- **Genre-Specific:** Configured for specific music styles

### Multi-Instance Setup
Using multiple Fruity Delay instances effectively:
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
- **FL Studio Forums:** Discussions about Fruity Delay techniques
- **Reddit Groups:** Sharing delay techniques and presets
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced delay techniques
- **Written Guides:** In-depth articles on delay and echo effects
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Preset Libraries:** Websites hosting Fruity Delay configurations
- **Technique Sharing:** Platforms for sharing processing methods
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Manually calculate the millisecond delay for a 1/8th note at 128 BPM (234ms)
- [ ] Create a metallic robotic voice using short delay times (flanging simulation)
- [ ] Explain why "Invert" mode sounds wider than "Normal" (phase manipulation)
- [ ] Set up a basic Ping Pong delay chain
- [ ] Calculate delay times for any musical subdivision at any BPM
- [ ] Create a Haas effect for stereo widening
- [ ] Use Fruity Delay to simulate a flanger effect
- [ ] Explain the difference between delay and reverb applications
- [ ] Troubleshoot common delay artifacts effectively
- [ ] Integrate Fruity Delay into efficient mixing workflows

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Fruity Delay

## The 60-Second Mental Model
Fruity Delay is a **legacy delay line**. Think of it as a specialized tape recorder that records your audio and plays it back a split-second later. It is "un-synced" by default, meaning it cares more about milliseconds and "Steps" than the strict tempo grid. This makes it feel more like a physical machine than its modern siblings (Delay 2/3). [SRC: IL-MAN]

## Purpose & Identity
*   **Identity:** A low-CPU, straightforward echo utility.
*   **Where it fits:** It lives on a Mixer Track (ideally a Send). It takes audio, delays it, and feeds it back into itself to create repeats.

## Hip-Hop / R&B Context
*   **Melodic Slapback:** Used on vocals to add "thickening" without the clutter of a full reverb.
*   **Dub Throws:** Perfect for automating the feedback knob on the last word of a rap bar to let it trail off into the background.
*   **Robotic Textures:** Because it can go down to <10ms, it is excellent for creating the "metallic" vocal textures found in psychedelic trap.

## When To Use
*   When you need a **simple echo** that doesn't eat CPU.
*   When creating **Flangers or Chorus** effects from scratch using very short delay times.
*   When you want a delay that **pitch-shifts** when you move the Time knob (analog style).

## When NOT To Use
*   **Precision Tempo Sync:** If you need dotted-eighth notes exactly on grid without doing math, use **Fruity Delay 3**.
*   **Complex Modulation:** If you need the reverb tail built-in or extensive filter choices, use **Fruity Delay 2**.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Fruity Delay

## UI Tour
1.  **Input Section:**
    *   **Vol:** Level of signal entering the delay.
    *   **Pan:** Stereo position of the input signal.
2.  **Feedback Section:**
    *   **Vol:** How many repeats (Gain of the loop). [SRC: IL-MAN]
    *   **Cutoff:** Low-pass filter that darkens successive echoes.
3.  **Delay Time (Main Knob):** Sets the interval between echoes in Steps (default) or ms.
4.  **Stereo Mode Switch:**
    *   **Normal:** Standard stereo.
    *   **Inverted:** Swaps L/R in the loop.
    *   **Ping Pong:** Bounces L -> R -> L.

## Signal Flow
1.  **Audio In:** Signal enters from the mixer.
2.  **Delay Buffer:** Audio is stored for the duration of the "Time" parameter.
3.  **Filtering:** The signal is darkened by the "Cutoff" value.
4.  **Feedback Loop:** A portion of the filtered audio is sent back to Step 2.
5.  **Output:** The summed echoes are sent to the mixer.

## Things Beginners Misunderstand
*   **Feedback at 100%:** Setting Feedback to max will cause a volume spike that never ends. **Safety Rule:** Always put a Limiter after Fruity Delay if you are experimenting with high feedback. [SRC: REPUTABLE]
*   **Steps vs Ms:** The Time knob is scaled in "Steps" (1/16th notes) by default. To get "triplets" or "dotted" notes, you must move it between the whole numbers.
*   **Automation Pitch:** Moving the Time knob while audio is playing will cause a "Tape Stop" or "Pitch Shift" effect. This is a feature! [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Fruity Delay

## Technique 1: The Haas Widener
*   **Goal:** Make a mono sound wide without using a chorus.
*   **Setup:** Place Fruity Delay on a mono track (or send).
*   **Settings:** Time = 15-30ms. Feedback = 0. Mode = **Invert**. 
*   **Result:** The left and right ears receive the signal at slightly different times, creating an "immense" width that feels like the sound is coming from outside the speakers. [SRC: REPUTABLE]

## Technique 2: Analog-Style Dub Trails
*   **Goal:** Dark, receding echoes that feel distant.
*   **Settings:** Set **Cutoff** to 30-40%. Feedback to 60%.
*   **Tweak:** As the sound repeats, it will lose high frequencies, simulating the way sound naturally decays in a large room.

## Technique 3: Vocal Slapback
*   **Goal:** Give a rapper more "presence" and "thickness."
*   **Settings:** Time = ~100ms. Feedback = 0. Mix = 20%.
*   **Result:** A single ghost repeat that adds a "double-track" feel without cluttering the beat.

## Technique 4: Rhythmic Percussion "Ghosting"
*   **Goal:** Make a simple hi-hat pattern complex.
*   **Settings:** Use **Ping Pong** mode. Sync Time to 3 steps (dotted 16th). 
*   **Result:** The hats will bounce across the stereo field, filling the "gaps" in the rhythm.

## Common Pitfalls + Fixes
*   **Pitfall:** "The delay is muddying my kick drum."
    *   **Fix:** **NEVER** put Fruity Delay on your sub-bass or kick channel. Use it on a Send and put an EQ *before* the delay to cut everything below 200Hz. [SRC: REPUTABLE]
*   **Pitfall:** "The repeats are clicking."
    *   **Fix:** Increase the **Cutoff** slightly or check for clipping at the input.

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Fruity Delay

## 1. Moody (Dark, Emo-Rap, Cinematic)
*   **Production Lever:** **Low Cutoff + High Feedback.**
*   **Action:** Set the Cutoff to 20% so the echoes sound "muffled." Set Feedback to 70%.
*   **Listen For:** A "shadow" that follows the melody, feeling heavy and lonely. 
*   **Don't Do This:** Avoid Ping-Pong mode; moody vibes are usually more centered and "trapped."

## 2. Upbeat (Pop-Rap, Funk, Energetic)
*   **Production Lever:** **Ping-Pong + Short Time.**
*   **Action:** Set Mode to Ping-Pong. Time to 2 Steps (1/8th note). Feedback at 30%.
*   **Listen For:** A "bounce" that adds kinetic energy to the vocal ad-libs.
*   **Don't Do This:** Don't use heavy Cutoff; keep the high frequencies "crisp."

## 3. Psychedelic (Trippy, Travis Scott style, Surreal)
*   **Production Lever:** **Automated Time + Invert Mode.**
*   **Action:** Link the "Time" knob to a slow LFO or automation clip.
*   **Listen For:** The "pitch-warping" sound. As the time changes, the pitch wobbles, creating a melted, "drunk" feel.
*   **Don't Do This:** Avoid zero feedback; you need the repeats to hear the warping.

## 4. Jazzy (Soulful, Lo-fi, Neo-Soul)
*   **Production Lever:** **Vocal Slapback (Single Repeat).**
*   **Action:** Time = 120ms. Feedback = 0%. Mix = 15%.
*   **Listen For:** A "warmth" that mimics vintage tape machines. It adds a "live" feel to dry recordings.
*   **Don't Do This:** Avoid Ping-Pong; it feels too "electronic" for jazz.

## 5. Vibey (Smooth, Modern R&B, Atmospheric)
*   **Production Lever:** **Haas Effect Widening.**
*   **Action:** Time < 30ms. Mode = **Invert**. Mix at 50%.
*   **Listen For:** A "shimmering" width that makes the background vocals feel like a cloud.
*   **Don't Do This:** Don't use this on the Lead Vocal; it will ruin the center image. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\echo-time-buffers.md

```markdown
# The Master's Guide to Echo Time and Physical Buffers in Fruity Delay

## 1. Introduction: The Foundation of Digital Space
Fruity Delay is more than just a "legacy" effect; it is a clinical study in **Time Domain Processing.** It represents the purest form of digital delay, stripped of the filters and modulations of its successors (Delay 2 and 3). For the professional Hip-Hop and R&B producer, this "purity" is a tool. By understanding the underlying computer science of how this plugin manages audio memory, you can perform surgical temporal adjustments that are impossible with "colored" analog emulations.

---

## 2. Theoretical Foundation: The Circular Buffer
### 2.1 Audio Memory Management
Every digital delay operates on a **Circular Buffer** (or "Ring Buffer").
- **The Buffer:** A dedicated segment of your computer's RAM. 
- **The Write Head:** Constantly records the incoming dry audio into the ring.
- **The Read Head:** Follows the write head at a fixed distance (the **Time**).
- **The Physics of Distance:** The distance between the heads, measured in samples, is what we perceive as "Delay Time." 

### 2.2 Discrete Addressing (The Legacy "Jump")
Unlike modern "interpolated" delays, the original Fruity Delay uses discrete memory addressing.
- **The Technical Behavior:** When you change the Time knob, the read head "teleports" to a new address in the RAM ring.
- **The Production Impact:** This creates a discontinuous waveform, resulting in a rhythmic "click." While often seen as a limitation, in **Glitch-Hop** and **Industrial Rap**, this is used as an intentional rhythmic percussive effect.

---

## 3. The Mathematics of Rhythmic Intervals
### 3.1 The 4-Step Unit
In the original Fruity Delay, time is represented in **Units of 4 Steps.**
- **The Logic:** This is hard-coded to the FL Studio Step Sequencer (16 steps per bar).
- **The Calculation:** 
    - **4:00** = 1/4 bar (Quarter Note).
    - **2:00** = 1/8 bar (Eighth Note).
    - **1:00** = 1/16 bar (Sixteenth Note).
- **Sample-Accuracy:** Because the clock is tied to the project's internal PPQ (Pulses Per Quarter-note), the repeats are mathematically perfect and will never drift, regardless of how complex your project becomes.

---

## 4. The Philosophy of the "Clean" Echo
### 4.1 Why Purity Matters in R&B
In high-end R&B production (think Darkchild or Timbaland), the mix is often "stacked" with dozens of vocal layers. 
- **The Problem:** Reverb and "filtered" delays add too much frequency density, making the mix muddy.
- **The Solution:** Use the original Fruity Delay. Because it has no internal filters, it returns a **Bit-Perfect Copy** of the vocal. This "clinical" echo provides space and rhythm without changing the "tone" of the vocal performance.

---

## 5. Genre-Specific Production Strategies
### 5.1 Boom Bap (The "Ghost Drum" Layer)
- **The Technique:** Focus on the 1/16th note (1:00).
- **The Action:** Set Time to 1:00 and Feedback to 10%.
- **The Result:** This adds a subtle "rhythmic shadow" to your snares and hi-hats, mimicking the mechanical timing errors of early hardware samplers like the MPC-60.

### 5.2 Psychedelic Melodics (The "Phase Sweep")
- **The Technique:** Minimal time offsets.
- **The Action:** Set Time to 0:00 and automate the **Offset (OFS)** knob between 0% and 5%.
- **The Result:** This causes the sound to "dance" between the ears, creating a moving phase-cancellation effect that feels trippy and "un-centered."

---

## 6. Technical Nuance: The Offset vs. Pan relationship
### 6.1 Psychoacoustic Localization
The **OFS (Offset)** knob in Fruity Delay is not a panning tool; it is a **Timing Tool.**
- **The Logic:** If you delay the right ear by 5ms, the sound will feel like it is coming from the left ear (even if the volume is identical). This is known as the **Precedence Effect.**
- **Master Tip:** For "Cool" Hip-Hop vocals, don't use the Pan knob. Instead, use a tiny 2ms Offset in Fruity Delay. The vocal will feel "wide" and "uncentered" without actually being panned to one side.

---

## 7. Mathematical Buffer Table for Fruity Delay
Use these values to align your echoes precisely at 44.1kHz:

| Step Setting | Musical Interval | Delay Time (ms) at 120 BPM | Buffer Size (Samples) |
|--------------|------------------|---------------------------|-----------------------|
| **1:00**     | 1/16 Note        | 125ms                     | 5,512 Samples         |
| **2:00**     | 1/8 Note         | 250ms                     | 11,025 Samples        |
| **4:00**     | 1/4 Note         | 500ms                     | 22,050 Samples        |
| **8:00**     | 1/2 Note         | 1000ms                    | 44,100 Samples        |

---

## 8. Conclusion: The Master of the Clock
Mastering the original Fruity Delay is about **Temporal Precision.** While it lacks the "bells and whistles" of modern plugins, its transparent, sample-accurate engine makes it the ultimate tool for rhythmic layering and psychoacoustic widening. By understanding the physics of circular buffers and the math of step-sequencer units, you can control the "Time" of your mix with the accuracy of a computer scientist.

---
**Document Version:** 2.0 (Master Tier)
**Author:** AI Research Specialist
**Keywords:** Circular Buffers, Memory Management, Digital Delay Physics, Step Sequencer Logic, R&B Production.
```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Fruity Delay (5 Minutes)

1.  **Insert:** Load **Fruity Delay** on a Mixer Track (ideally a Send).
2.  **Timing:** Set the **Time** knob to `4.00` (1/4 note delay).
3.  **Repeats:** Turn the **Feedback Vol** to `50%`.
4.  **Tone:** Turn the **Feedback Cutoff** to `50%` to make the echoes sound more distant.
5.  **Stereo:** Switch the mode to **Ping Pong** for a left-to-right bounce.
6.  **Mix:** Adjust the **Mix** level in the mixer (or "Input Vol" in the plugin) until it fits. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Fruity Delay

*   **Feedback Death Loop:** Setting **Feedback Vol** to 100% will cause the delay to build up volume indefinitely until it clips and crashes your ears. **Fix:** Keep feedback below 95%.
*   **Mono Bass Muddle:** Putting delay directly on a Kick or 808. **Fix:** Always High-Pass (cut lows) the input to Fruity Delay at 200Hz.
*   **Static Automation:** Never moving the Time knob. **Fix:** Automate the Time knob slightly to create "vibe" and pitch drift.
*   **Input vs Feedback Vol:** Thinking the "Input Vol" controls the repeats. It only controls how loud the *initial* sound is when it hits the delay. The **Feedback Vol** controls the repeats.
*   **Ignoring Mode:** Leaving it on "Normal" for every track. **Fix:** Use **Invert** for wide backing vocals and **Ping Pong** for rhythmic ear candy. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points: Fruity Delay

| Target Vibe | Time (Steps) | Feedback Vol | Mode | Cutoff |
| :--- | :--- | :--- | :--- | :--- |
| **Vocal Slapback** | 1.50 - 2.00 | 0% | Normal | 100% (Bright) |
| **Trap Perc Ghost**| 3.00 (Dotted) | 40% | Ping Pong | 60% |
| **Moody Dub Tail** | 4.00 | 75% | Normal | 30% (Dark) |
| **Haas Wide** | 0.25 - 0.50 | 0% | Invert | 100% |
| **Robotic Vocals** | 0.10 - 0.20 | 90% | Normal | 100% |

*Note: Steps are 1/16th notes. 4.00 = 1 Quarter note.* [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Starting Points: Moody (Fruity Delay)

*   **The Vibe:** Isolated, dark, and heavy.
*   **Settings:** 
    *   **Time:** 4.00 (1/4 Note)
    *   **Feedback Vol:** 65%
    *   **Cutoff:** 25% (Very Dark)
    *   **Mode:** Normal
*   **Workflow:** Place this on a Vocal Send. Lower the send volume until the delay sounds like a "shadow" rather than a repeat. 
*   **Automation:** Slowly lower the **Cutoff** even further at the end of a phrase to make the vocal "sink" into the track. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey

## Upbeat (The "Bounce")
*   **Mode:** Ping Pong.
*   **Time:** 2.00 (1/8th note).
*   **Tweak:** Set Feedback to 30%. This makes the percussion "dance" between the speakers.

## Psychedelic (The "Melt")
*   **Mode:** Invert.
*   **Time:** 4.00.
*   **Tweak:** Link the **Time** knob to a **Fruity Peak Controller** (LFO). The pitch will wobble constantly.

## Jazzy (The "Slap")
*   **Mode:** Normal.
*   **Time:** 1.5 steps (approx 100ms at 140BPM).
*   **Tweak:** 0% Feedback. It simulates the natural slap of a room.

## Vibey (The "Cloud")
*   **Mode:** Invert.
*   **Time:** 1.00 (1/16th note).
*   **Tweak:** 50% Feedback + 40% Cutoff. Use on background "Oohs" and "Aahs" for a lush wall of sound. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Fruity Delay: The Complete Parameter Encyclopedia (Expert Edition)

**Plugin Architecture:** Foundational Digital Buffer Delay
**Internal Logic:** Sample-Accurate Memory Pointer Management
**Target Genres:** Clean R&B, Boom Bap, Glitch-Hop, Industrial Rap

---

## 1. THE TEMPORAL ENGINE (Memory Control)
The original Fruity Delay uses a discrete memory-addressing system designed for absolute rhythmic stability.

### 1.1 Time Knob (The Step Clock)
- **Technical Range:** 0 to 16 Units (1 Full Bar).
- **The Step-Based Interface:** Unlike milliseconds, this knob moves in **Step Units**. 
- **The Calculation:** 1 Unit = 4 Steps in the FL Studio Step Sequencer.
    - **1:00** = 4 Steps (1/4 Note).
    - **0:50** = 2 Steps (1/8 Note).
- **Master Strategy:** For "Upbeat" rhythmic hi-hats, set Time to **0:25** (1/16 note). This adds a "shadow" to every hat hit that makes the rhythm feel double-timed and high-energy.

### 1.2 OFS (Stereo Offset)
- **Technical Logic:** Delays the Right channel relative to the Left.
- **Physics of Width:** 
    - **0%:** Perfect Mono. 
    - **1-5%:** Psychoacoustic Widener. (The Haas Effect zone).
    - **100%:** Maximum Offset. 
- **R&B Secret:** Set OFS to **5%** and Time to **0:00**. This makes a mono synth lead sound wide and expensive without any "muddy" reverb tail.

---

## 2. THE REGENERATION MODULE (The Feedback)
### 2.1 FB (Feedback) Knob
- **Technical Range:** 0% to 100%.
- **Linear Logic:** Every repeat is a direct volume-percentage of the previous repeat.
    - **50%:** Each echo is half the volume of the previous one.
    - **100%:** The echo repeats at full volume forever. 
- **The "Safety" Tip:** Because this is a digital plugin, 100% feedback will never "saturate" or "distort" on its own—it will stay perfectly clean until it hits your Master Limiter.

---

## 3. THE MIX & GAIN MODULE (Output)
### 3.1 VOL (Wet Level)
- **Linear Scaling:** Controls the amplitude of the delayed signal.
- **The "Insert" Rule:** If you put this directly on a vocal track, set VOL to 20-30%.
- **The "Send" Rule:** If you use a mixer Send track, set VOL to 100% and use the Mixer Send slider to control the mood.

---

## 4. PERFORMANCE & VISUALIZATION
### 4.1 The Step-Sync Indicator
- **Feedback:** The numbers shown on the knob correspond exactly to the bar count in the Playlist. 
- **Zero Latency:** This foundational plugin is the lightest in FL Studio. It uses zero CPU cycles when idle and has **0 samples** of PDC latency. It is the "Safest" plugin to use during a live-streamed production session.

---

## 5. HIDDEN WRAPPER ROUTING (The Expert Trick)
### 5.1 External Filtering
Because the original Fruity Delay has no internal filters, professional producers use the **Mixer Chain** to create their own.
- **Workflow:** 
    1. Insert Fruity Delay in Slot 1.
    2. Insert **Fruity Parametric EQ 2** in Slot 2.
    3. Use the EQ to cut the highs/lows of the delay.
- **The Benefit:** This gives you far more control than the limited filters in Delay 2 or 3. You can use a surgical EQ to make the delay "wrap around" your lead vocal.

---

## 6. TROUBLESHOOTING THE CLICKS
- **Issue:** "I hear a click every time I change the delay time."
- **The Logic:** This is because the read-head is jumping to a new part of the audio memory instantly.
- **The Solution:** Automate the **VOL** knob to go to 0% for a few milliseconds while you change the **Time** knob, then bring it back up. This is how pro "Glitch" engineers perform clean rhythmic switches.

---

## 7. SUMMARY: THE "VIBE" PRESETS
- **THE "BOOM BAP" SHADOW:** Time 0:25, OFS 0%, FB 10%, VOL 15%. (Adds subtle timing weight to snares).
- **THE "WIDE SOUL" LEAD:** Time 0:00, OFS 10%, FB 0%, VOL 100% (Mix 50% in Mixer).
- **THE "RHYTHMIC STUTTER":** Time 0:50, OFS 0%, FB 60%, VOL 40%. (Classic upbeat echo).

---
**Document Version:** 2.5 (Encyclopedia Master)
**Status:** COMPLETE RESEARCH
**Keywords:** Fruity Delay, Digital Buffer, Step Units, Haas Effect, R&B Engineering, FL Studio Foundations.

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Fruity Delay

| Parameter | Type | Description | Vibe Impact | Mix Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Input Vol** | Knob | Level entering the delay. | N/A | Gain staging. |
| **Input Pan** | Knob | Panning of input signal. | **Vibey** (Width). | Stereo balance. |
| **Feedback Vol**| Knob | Gain of the feedback loop. | **Moody** (Trails). | Echo persistence. |
| **Cutoff** | Knob | LPF on feedback loop. | **Moody** (Darkness). | Frequency masking. |
| **Time** | Knob | Gap between echoes. | **Upbeat** (Rhythm). | Pitch / Timing. |
| **Mode** | Switch | Normal/Invert/Ping-Pong. | **Psychedelic** | Spatial width. |

## Mix Impact Tags
*   **Depth:** Longer feedback times push sounds "back" in the mix.
*   **Width:** Invert/Ping-Pong modes expand the stereo image.
*   **Motion:** Automating Time/Pan creates kinetic energy.

```

---

## FILE: 02-Data\presets\delay-archetypes.json

```json
{
  "archetypes": [
    {
      "name": "Classic 1/4 Echo",
      "settings": {
        "time": "4 steps",
        "feedback": "40%",
        "volume": "50%"
      },
      "useCase": "Standard rhythmic echo for any instrument."
    },
    {
      "name": "Stereo Width Haas",
      "settings": {
        "time": "0ms",
        "offset": "15ms",
        "feedback": "0%"
      },
      "useCase": "Simple mono-to-stereo widening."
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Fruity Delay)

## Rule 1: The "200Hz" Wall
*   **Rule:** **NEVER** allow delay feedback to exist below 200Hz.
*   **Why:** Low-end delay causes phase cancellation with the 808 and makes the mix sound "drunk" and muddy.
*   **Fix:** Use an EQ before the delay to High-Pass everything at 200-300Hz. [SRC: REPUTABLE]

## Rule 2: Vocal Throw Discipline
*   **Rule:** For modern Rap, only "throw" the last word of a sentence.
*   **Application:** Use Fruity Delay on a Send. Keep the send fader at 0. Automate the fader to jump up only on the specific word you want to echo.

## Rule 3: Slapback for Presence
*   **Rule:** Use slapback (100-150ms) to make thin vocals sound "expensive."
*   **Settings:** Normal Mode, 0% Feedback, 10-15% Wet. It acts as a "thickener" rather than an echo.

## Rule 4: Ping-Pong for "Ear Candy"
*   **Rule:** Only use Ping-Pong on background elements (Hats, Ad-libs, Perc).
*   **Why:** Panning the main vocal or lead synth too much can distract the listener from the "soul" of the track.

## Rule 5: Pitch Shift Safety
*   **Rule:** Do not automate the "Time" knob during a mixdown unless you *want* the pitch to warp.
*   **Caution:** Even tiny movements in the Time knob during playback will cause the pitch to drift out of tune with the instruments. [SRC: IL-MAN]

```

---

## FILE: 02-Data\rules\delay-rules.json

```json
{
  "rules": [
    {
      "goal": "Add Space without Reverb",
      "action": "Use a single 1/8 note tap with low feedback (<10%) and set volume to 20%."
    },
    {
      "goal": "Percussion Thickening",
      "action": "Set Time very short (<50ms) and increase Feedback to 30% for a 'comb' resonant effect."
    }
  ]
}

```

---

## FILE: 02-Data\rules\visual-cue-mapping.json

```json
{
  "visualMappingRules": {
    "moodClassification": [
      {
        "mood": "Dark / Moody R&B",
        "primaryAnimation": "Breathe",
        "speed": "0.5x",
        "logic": "Slow, constant vertical movement mimics the breathing rate of an intimate performance. Use when the 808 is sustained and the melody is dark."
      },
      {
        "mood": "Upbeat Trap / Club",
        "primaryAnimation": "Dance 1",
        "speed": "2.0x",
        "logic": "Rapid, full-body movement matches the high-energy high-hat rolls. Use when the BPM is >140 and the snare is aggressive."
      },
      {
        "mood": "Psychedelic / Experimental",
        "primaryAnimation": "Manual Mode",
        "logic": "Choreograph jumps (F5) to off-beat ghost notes. Use Size automation (Link to Peak Controller) to make the mascot physically 'pulse' with the low-end energy."
      },
      {
        "mood": "Soulful / Neo-Soul",
        "primaryAnimation": "Sway",
        "speed": "1.0x",
        "logic": "Side-to-side movement mimics the swaying of a live jazz performer. Use when Rhodes keys and clean guitars are dominant."
      }
    ],
    "rhythmicSyncRules": [
      {
        "if": "Snare hits on 2 and 4",
        "action": "Trigger Jump (F5) frame via MIDI exactly on the 2 and 4."
      },
      {
        "if": "Sub-bass drop occurs",
        "action": "Automate Size from 50% to 100% over 1 bar to visualize the 'Weight' of the drop."
      }
    ],
    "brandAestheticRules": [
      {
        "theme": "Cyberpunk Purple",
        "action": "Overlay a 20% opacity purple glass-card over the mascot window to match the DEEPER DIVES design system."
      },
      {
        "theme": "Minimalist Studio",
        "action": "Set mascot size to 25% and position in the bottom-right corner to act as a silent metronome."
      }
    ]
  }
}

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: The "Vocal Throw" (Rap Hook Workflow)

## Routing Context
*   **Insert 1:** Lead Vocal.
*   **Insert 2:** Delay Send (100% Wet).
*   **Routing:** Route Insert 1 to Insert 2. Keep the "Send" knob at 0 by default.

## Step-by-Step Setup
1.  Load **Fruity Delay** on Insert 2.
2.  Set **Time** to `4.00` (1/4 note).
3.  Set **Mode** to `Ping Pong`.
4.  Set **Cutoff** to `40%` (Warm).
5.  Set **Feedback Vol** to `60%`.
6.  Right-click the "Send" knob on Insert 1 -> **Create Automation Clip**.

## Performance
1.  In the Playlist, draw a sharp "spike" in the automation clip only on the last word of the chorus (e.g., the word "Money").
2.  The word "Money" will now bounce L-R-L-R into the background while the rest of the vocal stays dry.

## Variations
*   **Wide Ad-lib:** Set mode to `Invert` and automate the throw for every 2nd ad-lib.
*   **Ghost Throw:** Lower the `Cutoff` to 10% for a muffled, distant echo.

## Pitfalls + Fixes
*   **Mud:** If the echo lingers too long, lower the **Feedback Vol**.
*   **Harshness:** If the "S" sounds are too loud in the delay, put a **De-esser** or **EQ** before the delay on Insert 2. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Space_And_Motion.md

```markdown
# Workflow: Melodic Call-and-Response (Delay throws)

## The Concept
Using delay to "answer" a melody line, filling the silence between phrases.

## Step-by-Step
1.  Identify a gap in your melody (e.g., a 1-bar silence).
2.  Place **Fruity Delay** on a send.
3.  Set **Time** to `8.00` (1/2 note) or `12.00` (dotted 1/2).
4.  Set **Feedback Vol** to `0%` (We only want ONE response).
5.  Automate the send level to "grab" the very last note of the melody before the silence.

## Vibe Mapping
*   **Moody:** Use `Normal` mode + `Cutoff` @ 20%. The "answer" sounds like a ghost.
*   **Upbeat:** Use `Ping Pong` mode. The "answer" jumps across the speakers.

## Automation Idea
*   Automate the **Pan** knob *inside* Fruity Delay so the "Response" note starts on the left and ends on the right. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\12_Vibe_Psychedelic.md

```markdown
# Vibe: Psychedelic Pitch Warp (Liquid Tails)

## The Concept
Using Fruity Delay's analog-style pitch shifting to create "melted" textures common in psychedelic hip-hop (Travis Scott, ASAP Rocky).

## Setup
*   **Target:** A synth lead or a melodic sample.
*   **Mode:** `Invert`.
*   **Feedback Vol:** `85%`.

## Recipe
1.  Load **Fruity Delay**.
2.  Right-click the **Time** knob -> **Create Automation Clip**.
3.  In the Playlist, draw a very slow, subtle "S" curve (Sine-like) that moves the time from `4.00` to `4.10`.
4.  **Listen For:** As the time knob moves, the pitch of the repeats will slightly drop and rise, creating a "drunk" and liquid sensation.

## Variations
*   **Tape Stop:** Drastically automate the Time knob from `4.00` to `16.00` at the end of a song.
*   **Feedback Screech:** Link the **Feedback Vol** to the same automation so the pitch warp gets more intense as it gets louder.

## Pitfalls
*   **Out of Tune:** If the automation is too extreme, the delay will be completely out of key. Keep movements under `0.2` steps for subtle vibes. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\glitch-percussion-loops.md

```markdown
# Masterclass: Designing Glitch Percussion Loops in Fruity Delay

## 1. Executive Summary: The "Clock-Noise" Aesthetic
In industrial Rap, Experimental R&B, and Glitch-hop (think artists like JPEGMAFIA, Death Grips, or FKA Twigs), the most "cool" sounds often come from breaking the tools. The original **Fruity Delay**, with its discrete memory jumps, is a hidden glitch-generator. When you automate its time parameter, it creates rhythmic "clicks" and "pops" that are perfectly sample-accurate. This guide will show you how to turn pure white noise into a robotic, industrial percussive layer using the **Circular Buffer Physics** of the original Delay.

---

## 2. Phase 1: The "Glitch Seed" (Setup)

### 2.1 The Noise Oscillator
1. **The Source:** Open **3x Osc**. Set all oscillators to **White Noise**.
2. **The Routing:** Route this to a mixer track and insert **Fruity Delay**.
3. **The Base Setting:** Set **Time** to `0:00`, **Feedback** to `0%`, and **VOL** to `100%`.

---

## 3. Phase 2: The "Memory Jump" (The Glitch)

### 3.1 The Automation Logic
We are going to force the Delay's "Read Head" to jump randomly through the memory ring.
- **Action:** Right-click the **Time** knob -> **Create automation clip**.
- **The Pattern:** Draw a "Staircase" shape in the automation clip. 
- **The Physics:** Every time the staircase "steps" to a new value, the read head jumps. 
- **The Result:** Because we are inputting White Noise, each jump results in a tiny percussive "snap" of noise. 

---

## 4. Phase 3: Rhythmic Quantization (The Groove)

### 4.1 The "Bit-Crush" Formula
To make the glitch sound rhythmic, we must "Quantize" our automation.
- **The Formula:** Right-click the automation clip -> **Articulator** -> **Mapping Formula** -> Enter `Round(Input*16)/16`.
- **The Logic:** This forces the automation into 16 discrete rhythmic steps.
- **The Result:** The noise-clicks will now hit exactly on the 16th-note grid of your Trap beat. It sounds like a robotic hi-hat pattern.

---

## 5. Phase 4: Spatial Glitching (The Width)

### 5.1 The Offset Stutter
- **Action:** Automate the **OFS (Offset)** knob using a **Random LFO** from **Fruity Envelope Controller**.
- **The Vibe:** Now, the glitch-clicks will randomly "jump" between your Left and Right ears. This creates a disorienting, psychedelic sense of space that is essential for "Industrial" Rap.

---

## 6. Phase 5: Taming the Chaos (Post-FX)

### 6.1 The "Material" Filter
Raw glitch-clicks can be very harsh. 
- **Action:** Add a **Fruity Filter** after the Delay.
- **Setting:** Select **Band-Pass** mode.
- **The Result:** Now, instead of "Broadband Noise," the glitches sound like "Metallic Taps" (BP @ 3kHz) or "Low Thumps" (BP @ 200Hz).

---

## 7. Mathematical Glitch Table
Use these formulas to change the "Complexity" of your loop:

| Glitch Goal | Mapping Formula | Result |
|-------------|-----------------|--------|
| **Robotic Hat** | `Round(Input*16)/16` | Perfect 16th-note grid. |
| **Trippy Triplets**| `Round(Input*12)/12` | Syncs to triplet swing. |
| **Chaos/IDM** | `Input` (Bezier) | Pitch-drifting digital noise. |
| **Broken Engine**| `Round(Input*4)/4` | Heavy, slow rhythmic snaps. |

---

## 8. Conclusion: The Master of Errors
Mastering "Memory Glitching" in the original Fruity Delay is about **harnessing digital artifacts.** By treating the buffer jumps as a synthesis method rather than a mistake, you can create unique percussive textures that give your Hip-Hop tracks an "Underground" and "Cool" edge. Follow this masterclass, and your rhythm sections will have the legendary, technical grit of an elite sound designer.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Glitch Sound Design, Industrial Rap, Fruity Delay Workflow, Memory Jumps, Rhythmic Noise, FL Studio.

```

---

## FILE: 03-Workflows\by-goal\moody-halo-delay.md

```markdown
# Moody R&B "Halo" Delay Workflow

## Goal
Add a subtle "halo" of wide, dark delay around a melodic lead to give it an expensive, professional space.

## Steps
1. **Insert Fruity Delay**: Place it on your lead synth.
2. **The "Halo" Settings**:
   - **Time**: `4:00` (1/4 note).
   - **Feedback**: **30%**.
   - **OFS (Offset)**: **15%**.
3. **The Darkening**:
   - Since this is the basic delay, follow it immediately with a **Fruity Parametric EQ 2**.
   - Use a steep **High-Cut** filter at **2kHz**.
4. **The Wide Mix**:
   - Set the Mixer Slot **Mix level** to **25%**.

## Result
The lead synth stays focused and dry in the center, but is surrounded by a wide, dark "halo" of delayed sound that creates a deep, moody atmosphere without washing out the melody.

```

---

## FILE: 03-Workflows\by-instrument\mono-lead-widening.md

```markdown
# Masterclass: Widening Mono Synth Leads in Fruity Delay

## 1. Executive Summary: The "Intelligent Width" Aesthetic
In high-end R&B and melodic Trap (think the sounds of producers like WondaGurl or Noah "40" Shebib), synth leads must be powerful and centered enough to lead the melody, but wide enough to feel "expensive" and surround the listener. Standard reverb often makes leads sound "washy" and "cheap." The elite solution is **Timing Width** using the foundational **Fruity Delay**. This guide will show you how to use the raw buffer engine of the original Delay to create a massive stereo image that preserves the "punch" of your mono source.

---

## 2. Phase 1: The Psychoacoustic Foundation (Theory)

### 2.1 The Precedence Effect (Haas)
- **The Concept:** If two sounds occur within 30ms, the brain perceives them as a single sound.
- **The Widening Secret:** By delaying one channel (usually the right) by just 5-15 milliseconds, you "break" the mono center without adding identifiable echoes.
- **Why Fruity Delay?** Because it has no internal filtering or modulation, it provides the "Cleanest" possible temporal offset, making it superior to complex delays for this specific task.

---

## 3. Phase 2: The Technical Setup (The Engine)

### 3.1 Signal Chain Placement
1. **The Lead Synth:** Should be mono (or have its stereo width reduced to 0% in the sampler).
2. **Insert Fruity Delay:** Place it as Slot #1 in the mixer.
3. **The Logic:** We want to widen the raw waveform before it hits any other effects like Distortion or Chorus.

### 3.2 Dialing in the "Spread"
- **Time:** Set to **0:00**. We don't want any rhythmic repetition.
- **OFS (Offset):** This is the key knob. Move it to between **5% and 12%**.
- **The Physics:** Moving the knob to 10% creates a ~15ms delay in the right ear. You will immediately feel the synth "jump" from the center to the sides of your headphones.
- **FB (Feedback):** Set to **0%**. We only want one wide reflection.

### 3.3 The Pure Mix
- **VOL (Wet):** Set to **100%**.
- **Mixer Blending:** Go to the FL Studio Mixer and set the **Mix Level** for the Fruity Delay slot to **50%**.
- **The Result:** You are now layering a 100% Mono center lead with a 100% Wide offset lead. This is the "Best of both worlds"—it has the center power of mono and the outer width of stereo.

---

## 4. Phase 3: External Tonal Matching (The "Pro" Layer)

### 4.1 Surgical EQ Shaping
Because the original Fruity Delay is clinical, the "offset" side can sometimes sound identical to the center, leading to a "static" feeling.
- **Action:** Insert a **Fruity Parametric EQ 2** immediately after the Fruity Delay.
- **The Hack:** Use the EQ to **High-Cut** the signal at **5kHz**.
- **The Result:** The "Wide" part of the synth is now darker than the "Center" part. This mimics how sound naturally loses high-frequency energy as it reflects off walls, making the widening feel "3D" and "Organic."

---

## 5. Phase 4: Phase Integrity and Mono Check

### 5.1 The Suicide Switch (Mono Compatibility)
If your offset is wrong, your lead synth will DISAPPEAR when played on a phone speaker (Mono).
1. **Action:** Click the **Mono** switch on your Master mixer track.
2. **The Test:** If the lead synth gets significantly quieter or sounds "hollow," your phase is clashing.
3. **The Fix:** In Fruity Delay, move the **OFS (Offset)** knob by just **1%**. Often, shifting the delay from 15ms to 16ms is enough to move the "phase cancellation" out of the melodic range.

---

## 6. Phase 5: Post-Widening Polish

### 6.1 The "Mood" Stage (Fruity Chorus)
- **Action:** Place a **Fruity Chorus** after the EQ.
- **Settings:** Rate 0.1Hz (extremely slow), Depth 10%, Wet 5%.
- **The Goal:** This adds a tiny bit of "pitch drift" to the wide image, making it feel like an old analog synthesizer recorded in a wide studio hall.

---

## 7. Mathematical Calibration Table for Leads
Use these offsets based on the frequency of your lead:

| Lead Frequency | Target Offset | Vibe |
|----------------|---------------|------|
| **High (Flutes/Plucks)** | 5ms - 8ms     | Tight, crisp clarity. |
| **Mid (Pads/Brass)** | 12ms - 18ms   | Natural, warm width. |
| **Low (Bass/808s)** | 25ms - 35ms   | Moody, hazy atmosphere. |
| **Psychedelic** | 100ms+        | Distant, trippy echoes. |

---

## 8. Troubleshooting the Width
- **Issue:** "The sound feels 'tilted' to the left."
- **Fix:** Because the right ear hears the sound later, the left ear feels "louder." Use the main Mixer **Pan** knob to move the synth about 10% to the right to visually and audibly re-center the image.
- **Issue:** "It sounds like a metallic ring."
- **Fix:** Your **Offset** is too low (<5ms). This is causing high-frequency comb filtering. Increase the Offset until the ring disappears.

---

## 9. Conclusion: The King of Clean
Mastering "Clean Width" in the original Fruity Delay is an exercise in **Precision Engineering.** By utilizing the sample-accurate buffer engine without the "color" of modern delays, you maintain absolute control over the phase and tone of your lead synth. This is the foundational technique used by world-class R&B engineers to make mono sources sound "massive" while keeping the mix clean and focused. Follow this masterclass, and your synth leads will have the professional, wide-reaching impact of a chart-topping production.

---
**Document Version:** 1.0 (Masterclass Edition)
**Keywords:** Lead Widening, Haas Effect, Precedence Effect, Fruity Delay Workflow, Stereo Imaging, R&B Sound Design.
```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Fruity Delay

## Official Links
*   **Manual:** [Fruity Delay Official Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Delay.htm)

## Source Log
1.  **[SRC: IL-MAN]:** Primary technical reference for parameter ranges, signal flow, and stereo mode definitions.
2.  **[SRC: REPUTABLE]:** SeamlessR (Production Basics). Reference for Haas effect logic and feedback safety (the 100% loop warning).
3.  **[SRC: REPUTABLE]:** In The Mix (Delay Masterclass). Reference for vocal throw automation and high-pass filtering (The 200Hz Rule).

## Coverage Checklist
- [x] Basic Routing (Send vs Insert)
- [x] Parameter Definitions
- [x] 5 Vibe Targets (Moody, Upbeat, Psychedelic, Jazzy, Vibey)
- [x] Low-end Protection Rules
- [x] BPM-to-Steps Chart
- [x] Vocal Throw Workflow

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Fruity Delay (Hip-Hop/R&B)

## Vibe 1: The "Modern Rap" Throw
*   **Sound:** Sharp, panned, synced.
*   **Application:** Hooks and Ad-libs.
*   **Key Move:** Ping-Pong Mode + 1/4 note time + Automated Send.

## Vibe 2: The "Underwater" R&B Pad
*   **Sound:** Muffled, wide, eternal.
*   **Application:** Atmospheric background synths.
*   **Key Move:** Invert Mode + 25% Cutoff + 70% Feedback.

## Vibe 3: The "Gritty" Boom Bap Snare
*   **Sound:** Lo-fi, slapback, metallic.
*   **Application:** Snares and Rims.
*   **Key Move:** Normal Mode + 1.5 steps time + 0% Feedback + 100% Cutoff.

## Vibe 4: The "Trippy" Vocal Melt
*   **Sound:** Warped, pitching, disorienting.
*   **Application:** Transitions and Bridge sections.
*   **Key Move:** LFO on Time Knob + Invert Mode + High Feedback.

```

---

## FILE: 04-Reference\delay-time-chart.md

```markdown
# Reference: BPM to Milliseconds Conversion

Since **Fruity Delay** uses manual "Steps" or "MS" (in older versions/Patcher), use this table to find perfect rhythmic sync.

### Formula
`60,000 / BPM = 1 Quarter Note (4 Steps)`

### 140 BPM (Standard Trap)
| Note Value | Steps | Milliseconds |
| :--- | :--- | :--- |
| 1/4 Note | 4.00 | 428.5 ms |
| 1/8 Note | 2.00 | 214.2 ms |
| 1/16 Note | 1.00 | 107.1 ms |
| 1/8 Dotted | 3.00 | 321.4 ms |
| 1/4 Triplet | 2.66 | 285.7 ms |

### 90 BPM (Boom Bap)
| Note Value | Steps | Milliseconds |
| :--- | :--- | :--- |
| 1/4 Note | 4.00 | 666.6 ms |
| 1/8 Note | 2.00 | 333.3 ms |
| 1/16 Note | 1.00 | 166.6 ms |

### How to use in Fruity Delay
1.  Check your project BPM.
2.  Right-click the **Time** knob -> **Type Value**.
3.  Enter the "Steps" value (e.g., `3.0` for a 1/8 dotted feel). [SRC: IL-MAN]

```

---

## FILE: 04-Reference\technical-docs\binary-echo-math.md

```markdown
# Technical Deep-Dive: Binary Echo Math and Floating Point Buffer Precision

## 1. Introduction: The Mathematics of Repetition
Fruity Delay, the foundational "legacy" echo engine of FL Studio, is a window into the **Computer Science of Digital Signal Processing (DSP)**. While modern plugins hide their math behind "Analog Emulations," the original Delay exposes the raw behavior of **Binary Recursion**. This technical guide explore the bit-depth physics of audio buffers, the math of quantization errors in feedback loops, and why the "Legacy" sound is technically unique in a 32-bit floating-point environment.

---

## 2. Integer vs. Floating Point Logic
### 2.1 The 32-Bit Float Buffer
Fruity Delay operates within the **32-Bit Floating Point** environment of the FL Studio Mixer.
- **The Physics:** A 32-bit float provides a dynamic range of **1528dB**. 
- **The Implication:** Mathematically, the feedback loop can sustain repeats for hundreds of hours before the "Signal-to-Noise Ratio" becomes an issue. 
- **The "Legacy" Character:** In early versions of FL Studio, buffers were 16-bit. Every repeat was "Quantized" (rounded off). 
- **Master Engineering Secret:** To mimic the "Grit" of the original 90s Fruity Delay, use a **Bitcrusher** AFTER the plugin, set to **12-bit**. This simulates the truncation errors of the early binary engine.

---

## 3. The Mathematics of Recursive Summation
### 3.1 The Infinite Series
The feedback loop is a **Geometric Series**: `Sn = a(1 - r^n) / (1 - r)`.
- **The Energy Build-up:** If Feedback (`r`) is set to 1.0 (100%), the total energy in the buffer sums to infinity over time. 
- **Binary Truncation:** Even in 32-bit float, at extremely low volumes (below -144dB), the computer must "Zero" the signal. 
- **The Physics:** This creates a "Digital Fade-out" that is technically sharper and "Cold" compared to the smooth "Analog Decay" of Delay 3. This clinical ending is essential for industrial Rap and glitch sound design.

---

## 4. Sample-Accurate Temporal Offsets (OFS)
### 4.1 Fractional Delay Math
The **OFS (Offset)** knob in Fruity Delay shifts the read pointer by a percentage of the buffer.
- **The Equation:** `Samples_Delayed = (OFS / 100) * BufferSize`.
- **The Phase Trap:** If you use an offset of exactly **1 sample** (at 44.1kHz), you create a massive notch filter at **22,050Hz**. 
- **The "Cool" Widening:** Use an offset of **10% - 15%**. This moves the phase interference into the sub-audio range, providing "Transparent Width" that is technically perfect.

---

## 5. Rhythmic Quantization Logic
### 5.1 The Master Clock Pulse
Fruity Delay is linked to the **PPQ (Pulses Per Quarter-note)** of the project.
- **The Logic:** If the PPQ is 96, there are 96 "Slots" for the delay read-head to land on per beat.
- **The Result:** The original Delay is mathematically incapable of "Drifting" out of time. It is the most technically stable rhythmic tool in your arsenal.

---

## 6. Table of Digital Buffer Constants

| Parameter | Logic Type | Mathematical behavior | Result |
|-----------|------------|-----------------------|--------|
| **Time**  | Integer    | Pointer Jumping.      | Percussive Clicks. |
| **FB**    | Linear     | Scalar Multiplication.| Exponential Decay. |
| **VOL**   | Linear     | Scalar Multiplication.| Level Balance. |
| **OFS**   | Fractional | Vector Shifting.      | Phase Widening. |

---

## 7. Conclusion: The Master of the Bit
Mastering the math of the foundational Fruity Delay is about **Technical Objectivity.** By understanding the binary recursion and buffer management, you move beyond "using an effect" and start **Engineering Time.** It is the definitive guide for any producer who values the clinical precision and zero-latency stability of the original FL Studio architecture. Follow these mathematical principles to own the "Truth" of your digital signal.

---
**Document Version:** 1.0 (Technical Reference Tier)
**Author:** Binary Signal Architect
**Keywords:** Digital Delay, Buffer Math, Floating Point, Bit Depth, Recursion, DSP Physics.

```

---

## FILE: 04-Reference\technical-docs\binary-quantization-noise.md

```markdown
# Technical Deep-Dive: Binary Quantization Noise and Feedback Truncation

## 1. Introduction: The Sound of the Floor
In the modern 32-bit floating-point environment of FL Studio, we often assume audio is perfectly clean. But the original **Fruity Delay** carries the DNA of early digital synthesis. When audio is recursively cycled through a feedback loop, tiny mathematical errors accumulate. This guide explores the physics of **Quantization Noise** and **LSB (Least Significant Bit) Truncation**, explaining why the foundational Delay engine has a unique "Gritty" character that modern plugins struggle to emulate.

---

## 2. Theoretical Foundation: The Quantization Error
### 2.1 The Staircase Waveform
Digital audio represents a smooth wave as a series of steps. 
- **The Physics:** The difference between the "True" analog value and the "Digital" step is **Quantization Error**.
- **The Result:** This error manifests as a low-level white noise known as the **Quantization Noise Floor**.
- **In Feedback Loops:** In Fruity Delay, every time the sound repeats, it is multiplied by the Feedback knob and then "Stored" back into the buffer. This repeated storage causes the noise floor to rise cumulatively with every echo.

---

## 3. Feedback Truncation Math
### 3.1 The LSB "Fade-out"
In a 16-bit or 24-bit system, there is a minimum representable voltage.
- **The Math:** If a repeat is multiplied by a feedback of 50%, eventually the voltage drops below the **Least Significant Bit (LSB)**.
- **The Result:** The computer "Truncates" (chops) the signal to zero.
- **The Sound:** Unlike an analog delay which fades into a "Warm Hiss," the original Fruity Delay has a **"Digital Fade"** that is technically colder and more clinical. This is the "Cool" secret to industrial Rap and Glitch-hop rhythmic textures.

---

## 4. Engineering the "Digital Dust"
### 4.1 Intentional Bit-Starvation
Professional "Lo-Fi" producers often use the original Fruity Delay specifically for its "Cold" feedback character.
- **The Master Hack:** Set Feedback to 99%. 
- **The Science:** As the repeats continue for several minutes, the accumulation of 32-bit floating point rounding errors begins to create a unique, shimmering "Noise Cloud." 
- **The Effect:** This "Digital Dust" is perfectly harmonically related to your melody, creating a psychedelic atmosphere that sounds "High-Tech but Haunted."

---

## 5. Temporal Aliasing in Legacy Buffers
### 5.1 Pointer Jitter
Because the original Delay is a "Raw" memory manager, its timing is tied to the **Internal Clock Jitter** of the DAW.
- **The Physics:** Micro-fluctuations in the CPU clock can cause the read-pointer to drift by fractions of a sample.
- **The Neurology:** The brain perceives this as "Instability," adding to the psychedelic "Cool" factor of the legacy sound.

---

## 6. Table of Digital Noise Characteristics

| Parameter | Mathematical Cause | Audible Result | Vibe |
|-----------|--------------------|----------------|------|
| **Feedback** | Recursive Summing  | Rising Noise Floor.| Vintage / Dusty. |
| **Time Jump**| Address Jitter     | High-Freq Clicks.  | Glitch / Robotic.|
| **LSB Fade** | Truncation Logic   | Abrupt Silence.    | Cold / Industrial.|
| **OFS**      | Vector Cancellation| Hollow Phasing.    | Trippy / Moody.  |

---

## 7. Conclusion: The Master of the Bit-Depth
Mastering the physics of quantization in the foundational Fruity Delay is about **Technological Honesty.** By understanding the noise floor and the truncation math, you move move beyond "clean" and start **Designing Digital Artifacts.** It is the definitive guide for any producer who values the technical grit and clinical precision of the original FL Studio architecture. Follow these mathematical principles to own the "Truth" of your digital signal.

---
**Document Version:** 1.0 (Technical Reference Tier)
**Author:** Binary Signal Architect
**Keywords:** Quantization Noise, LSB Truncation, Feedback Math, Digital Delay Physics, FL Studio Legacy.

```

---

## FILE: 04-Reference\technical-docs\circular-buffer-physics.md

```markdown
# Technical Deep-Dive: Circular Buffer Physics and Pointer Jumps

## 1. Introduction: The Architecture of Digital Memory
Fruity Delay is a "Raw Buffer" processor. Unlike modern plugins that try to hide the digital nature of audio, the foundational Delay engine exposes the **Computer Science of Time**. Every echo you hear is a result of a **Memory Address Pointer** cycling through a ring of RAM. This technical guide explores the mathematics of this "Circular Buffer" and why its discrete behavior is a powerful sound-design tool for professional engineers.

---

## 2. The Circular Ring Buffer
### 2.1 The Mathematics of RAM Rings
Imagine a ring of 44,100 memory cells (representing 1 second at 44.1kHz).
- **The Write Pointer (`W`):** Constantly moves around the ring at the sample rate, writing incoming audio into the cells.
- **The Read Pointer (`R`):** Follows the write pointer at a fixed distance `D`.
- **The Equation:** `R = (W - D) mod BufferSize`.
- **The Result:** The modular math ensures that when the pointer reaches the end of the memory segment, it wraps back around to the beginning, creating a "Circular" stream.

---

## 3. Discrete Jumps vs. Slew Interpolation
### 3.1 The Legacy "Click" Physics
In the original Fruity Delay, changing the **Time** parameter instantly shifts the value of `D`.
- **The Result:** The Read Pointer jumps to a completely different part of the memory ring in 1 sample.
- **The Waveform Discontinuity:** Because the audio values at the old address and the new address are different, a "Step" is created in the waveform. 
- **The Sound:** This step produces an instantaneous burst of high-frequency energy—a "Click."
- **Master Use:** In industrial Rap and Glitch sound design, these clicks are used as "Percussive Textures." Pro engineers will automate the Time knob to create "Clock-Noise" patterns that match the beat.

---

## 4. The Physics of Rhythmic Feedback
### 4.1 Feedback Accumulation Math
Fruity Delay's feedback is a **Recursive Equation**:
`Output(t) = Input(t) + Output(t - D) * Gain`
- **The Stability Rule:** If `Gain < 1.0` (below 100%), the energy eventually dissipates. 
- **The Gain trap:** If `Gain = 1.0`, the buffer becomes a **Permanent Memory Loop**.
- **Digital Purity:** Because there is no internal filtering, the noise floor of the feedback is non-existent. You can loop a sound 1000 times without adding any "Analog Hiss." This is the secret to the "Expensive" and "Clean" R&B echoes of the early 2000s.

---

## 5. Temporal Resolution and PPQ
### 5.1 The Master Clock Link
Fruity Delay doesn't just read the BPM; it reads the **PPQ (Pulses Per Quarter-note)** of the FL Studio engine.
- **The Precision:** If your project is set to 96 PPQ, the Delay has 96 discrete "slots" per beat to land on.
- **The Alignment:** This ensures that your echoes are perfectly phase-aligned with your kick and 808, a technical requirement for hard-hitting modern Trap.

---

## 6. Conclusion: The Master of Memory
Mastering the original Fruity Delay is about mastering **Memory Management.** By understanding the pointers, the wrap-around math, and the discrete jump behavior, you move beyond "adding an effect" and start **Programming with Time.** It is the definitive tool for the technical producer who values sample-accurate precision and clean, uncolored digital repetition.

---
**Document Version:** 1.0 (Technical Reference)
**Author:** DSP Research Lead
**Keywords:** Circular Buffer, Memory Management, Modular Arithmetic, Delay Physics, Glitch Sound Design.

```

---

