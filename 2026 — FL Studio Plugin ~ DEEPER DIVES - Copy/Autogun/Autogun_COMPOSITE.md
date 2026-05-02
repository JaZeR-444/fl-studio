# Autogun - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Autogun - Advanced Synthesizer Plugin

`\`\`
 ██████╗ ███████╗███████╗██████╗ ██╗ ██████╗ ███╗   ██╗
██╔════╝ ██╔════╝██╔════╝██╔══██╗██║██╔═══██╗████╗  ██║
██║      █████╗  █████╗  ██████╔╝██║██║   ██║██╔██╗ ██║
██║      ██╔══╝  ██╔══╝  ██╔══██╗██║██║   ██║██║╚██╗██║
╚██████╗███████╗███████╗██║  ██║██║╚██████╔╝██║ ╚████║
 ╚═════╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
     ██╗    ██╗██╗  ██╗ ██████╗ ██╗████████╗███████╗
     ██║    ██║██║  ██║██╔═══██╗██║╚══██╔══╝██╔════╝
     ██║ █╗ ██║███████║██║   ██║██║   ██║   █████╗  
     ██║███╗██║██╔══██║██║   ██║██║   ██║   ██╔══╝  
     ╚███╔███╔╝██║  ██║╚██████╔╝██║   ██║   ███████╗
      ╚══╝╚══╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝   ╚═╝   ╚══════╝
`\`\`

**Plugin Type:** Advanced Synthesizer
**Category:** Instrument
**Official Manual:** [Image-Line Autogun Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Autogun.htm)

---

## 🎛️ What is Autogun?

Autogun is FL Studio's advanced synthesizer that combines multiple synthesis engines with comprehensive modulation capabilities. It provides professional-grade sound design tools with an intuitive interface designed for creating complex, evolving sounds ideal for hip-hop, rap, and R&B production.

**Key Capabilities:**
- Multi-engine synthesis with advanced algorithms
- Comprehensive modulation matrix with multiple sources
- Professional-grade filter and envelope controls
- Real-time performance controls
- Extensive sound design capabilities

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review official manual sections on synthesis engines
3. Create **parameter-cheat-sheet.md** with all controls
4. Test oscillator and filter synchronization

### For Synthesizer Users:
1. Review **synthesis-workflows.md** (to be created)
2. Study **sound-design-guide.md**
3. Learn **modulation-matrix-workflows.md** workflows

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - Synthesis engine controls and parameters
  - Filter and resonance parameters
  - Envelope and modulation controls
  - Real-time performance controls
  - Output and routing options

- [ ] **synthesis-workflows.md**
  - Basic synthesis process
  - Engine and filter programming
  - Envelope and modulation setup
  - Sound design workflows
  - Performance programming methods

#### 02-Data/parameters/
- [ ] **autogun-params.json**
  `\`\`json
  {
    "plugin_name": "Autogun",
    "category": "Instrument",
    "parameters": [
      {
        "name": "Engine Type",
        "type": "selector",
        "options": ["Analog", "Wavetable", "FM", "Granular"],
        "description": "Synthesis engine selection",
        "use_cases": ["sound_design", "engine_selection", "synthesis_type"],
        "hip_hop_applications": ["bass_synthesis", "pad_creation", "lead_design"]
      }
    ]
  }
  `\`\`

#### 02-Data/presets/
- [ ] **synth-presets.json**
  - Classic subtractive synthesis patches
  - Hip-hop bass and lead sounds
  - R&B pad and string arrangements
  - Electronic music templates
  - Custom user patches

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **sound-design-workflows.md**
  - Creating custom synthesizer patches
  - Waveform manipulation techniques
  - Filter and envelope programming
  - Modulation matrix setup

- [ ] **bass-sound-creation.md**
  - Creating hip-hop bass sounds
  - Sub-bass and low-end programming
  - Filter and envelope optimization
  - 808-style sound creation

- [ ] **lead-sound-creation.md**
  - Creating lead and melody sounds
  - Waveform selection for leads
  - Filter and envelope programming
  - Modulation for expression

#### 03-Workflows/by-instrument/
- [ ] **hip-hop-bass-programming.md**
- [ ] **rnb-pad-creation.md**
- [ ] **electronic-lead-design.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **synthesis-specifications.md**
  - Engine capabilities and limitations
  - Filter specifications and characteristics
  - Envelope timing and response
  - Modulation matrix capabilities

- [ ] **modulation-guide.md**
  - Advanced modulation matrix techniques
  - LFO and envelope applications
  - Real-time control assignments
  - Performance optimization strategies

---

## 🔬 Research Framework

### Phase 1: Basic Understanding (Week 1)
**Goal:** Understand synthesis engines and basic sound creation

**Tasks:**
1. Test different synthesis engines in Autogun
2. Create basic synthesizer patches
3. Document parameter-cheat-sheet.md
4. Experiment with filter and envelope controls

**Key Questions to Answer:**
- How do the different synthesis engines work?
- What waveform options are available?
- How do you program filters and envelopes?
- What modulation options exist?

### Phase 2: Practical Application (Week 2)
**Goal:** Learn genre-appropriate synthesis techniques

**Tasks:**
1. Create hip-hop bass sounds with Autogun
2. Design R&B pad sounds using subtractive synthesis
3. Test advanced modulation techniques
4. Create workflow guides

**Key Questions to Answer:**
- Which engines work best for hip-hop?
- How to create authentic R&B sounds?
- What are advanced modulation techniques?
- How to optimize for different genres?

### Phase 3: Advanced Features (Week 3-4)
**Goal:** Master sound design and performance features

**Tasks:**
1. Test advanced synthesis techniques
2. Apply complex modulation setups
3. Create complex sound design patches
4. Document advanced techniques

---

## 📊 Plugin Specifications to Document

### Synthesis Engine Features
- Multiple synthesis engines (subtractive, wavetable, FM, granular)
- Comprehensive oscillator controls with multiple waveforms
- Advanced filter capabilities with multiple types
- Professional-grade envelope controls
- Extensive modulation matrix with multiple sources

### Filter Capabilities
- Low-pass, high-pass, band-pass filter types
- Resonance and cutoff controls
- Filter envelope and modulation
- Multiple filter algorithms
- Drive and saturation options

### Envelope Controls
- ADSR envelope for amplitude
- ADSR envelope for filter
- ADSR envelope for pitch
- Envelope amount controls
- Envelope rate and response

### Modulation System
- Multiple LFO sources with various waveforms
- Envelope generators for modulation
- MIDI controller assignments
- Modulation matrix with multiple sources/destinations
- Real-time performance controls

### Performance
- CPU usage by engine type and features
- Memory consumption
- Latency characteristics
- Multi-core optimization
- Real-time performance capabilities

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do the different synthesis engines work?
2. What waveform options are available?
3. How do you program filters and envelopes?
4. What modulation options exist?
5. What are the polyphony limits?

### Advanced Usage
1. How to create authentic subtractive synthesis sounds?
2. What are the best practices for hip-hop sound design?
3. How to use advanced modulation techniques?
4. What are the sound design capabilities?
5. How to optimize performance for complex patches?

### Troubleshooting
1. Engines not synchronizing correctly?
2. How to reduce CPU/memory usage?
3. Filter self-oscillation issues?
4. How to create smooth envelope transitions?
5. Performance optimization techniques?

---

## 📝 Documentation Standards

### For Each Parameter:
- **Name:** Official parameter name
- **Type:** Slider, knob, button, etc.
- **Range:** Available values
- **Description:** Plain English explanation
- **Use Case:** When to use this setting
- **Pro Tip:** Advanced usage notes
- **Common Mistake:** What to avoid

### For Each Workflow:
- **Goal:** What you're trying to achieve
- **Prerequisites:** What you need first
- **Steps:** Numbered action items
- **Settings:** Exact parameter values
- **Verification:** How to confirm success
- **Troubleshooting:** Common issues

---

## 🔗 Cross-Reference with Other Plugins

Autogun often used alongside:
- **Fruity Wrapper** (for plugin hosting)
- **Patcher** (for complex routing)
- **MIDI Controllers** (for performance)
- **Playlist** (for arrangement)
- **Fruity Formula Controller** (for automation)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📚 Learning Path

### Beginner (First Day)
1. Read 00-START-HERE.md
2. Review parameter-cheat-sheet.md
3. Create basic synthesizer patches
4. Experiment with different synthesis engines

### Intermediate (Week 1-2)
1. Study synthesis-workflows.md
2. Practice hip-hop bass programming
3. Learn filter and envelope techniques
4. Set up modulation matrix

### Advanced (Week 3-4)
1. Master modulation-guide.md
2. Create complex sound design patches
3. Optimize performance for complex projects
4. Document advanced techniques

---

## 🎬 Next Steps

**Right Now (5 minutes):**
1. Open Autogun in FL Studio
2. Load a basic synthesizer patch
3. Test different synthesis engines
4. Experiment with filter controls

**This Week (2-3 hours):**
1. Create parameter-cheat-sheet.md
2. Test all synthesis engine options systematically
3. Create autogun-params.json
4. Document one complete workflow

**This Month (10+ hours):**
1. Complete all Priority 1 files
2. Create synth-presets.json
3. Write 3 workflow guides
4. Test with real production scenarios

---

## 💡 Research Tips

1. **Engine Testing:** Try all synthesis engine combinations
2. **Filter Experimentation:** Test different filter types and settings
3. **Modulation Exploration:** Experiment with LFO and envelope modulation
4. **Genre Applications:** Focus on hip-hop, rap, and R&B
5. **Sound Design:** Explore creative synthesis techniques

---

## 📦 File Structure Summary

`\`\`
Autogun/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── synthesis-workflows.md
│   └── Tutorials/
│       └── first-time-setup.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── autogun-params.json ⭐ HIGH PRIORITY
│   └── presets/
│       └── synth-presets.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── sound-design-workflows.md
│   │   ├── bass-sound-creation.md
│   │   └── lead-sound-creation.md
│   └── by-instrument/
│       ├── hip-hop-bass-programming.md
│       └── rnb-pad-creation.md
│
└── 04-Reference/
    ├── synthesis-specifications.md
    └── modulation-guide.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Autogun Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Autogun.htm)
- [Autogun Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+autogun+tutorial)
- [Autogun User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)

### Community Resources
- [Autogun Subreddit](https://www.reddit.com/r/FL_Studio/search?q=autogun&restrict_sr=1)
- [Synthesis Community](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Synthesis Resources
- **Classic Synths:** Moog, ARP, Roland emulation
- **Hip-Hop Sounds:** Bass, leads, pads, strings
- **R&B Sounds:** Pads, strings, organs, brass
- **Electronic Sounds:** Leads, arps, textures, effects

### Technical Analysis Tools
- **Fruity Parametric EQ 2:** For sound analysis
- **Fruity Convolver:** For spatial effects
- **Patcher:** For complex routing
- **Fruity Formula Controller:** For mathematical modulation

### Recommended Learning Materials
- "Synthesis Fundamentals" - Understanding synthesis engines
- "Hip-Hop Sound Design" - Genre-specific synthesis techniques
- "Modulation Matrix Techniques" - Advanced modulation approaches

### Advanced Techniques
- **Oscillator Sync:** Creating metallic and bell-like sounds
- **Ring Modulation:** Creating inharmonic textures
- **Filter Modulation:** Creating evolving textures
- **Envelope Programming:** Dynamic sound shaping

## 📚 In-Depth Technical Analysis

### Synthesis Engine Architecture
Autogun provides professional-grade synthesis engines:

**Engine Design:**
- Multiple synthesis engines with individual controls
- Advanced waveform manipulation and synthesis
- Comprehensive modulation options
- Professional-grade filter and envelope controls
- Extensive sound design capabilities

**Waveform Generation:**
- Classic waveforms (sine, triangle, sawtooth, square)
- Wavetable synthesis capabilities
- FM synthesis algorithms
- Granular synthesis options
- Spectral manipulation capabilities

### Filter System
Comprehensive filtering capabilities:

**Filter Types:**
- Low-pass filtering for brightness control
- High-pass filtering for clarity
- Band-pass filtering for focus
- Multiple filter algorithms
- Drive and saturation options

**Filter Controls:**
- Cutoff frequency adjustment
- Resonance control for emphasis
- Filter envelope for dynamic changes
- Filter modulation for expression
- Drive control for saturation

### Modulation Matrix
Advanced modulation capabilities:

**Sources:**
- Multiple LFOs with various waveforms
- Envelope generators for modulation
- MIDI controllers for real-time control
- Internal modulation sources
- External modulation inputs

**Destinations:**
- Pitch modulation for expression
- Filter cutoff for brightness changes
- Amplitude for tremolo effects
- Waveform for morphing
- Multiple parameter modulation

## 🎛️ Parameter Deep Dive

### Engine Controls
- **Engine Type:** Select synthesis engine (Analog, Wavetable, FM, Granular)
- **Engine Parameters:** Engine-specific controls and settings
- **Waveform Selection:** Choose from available waveforms
- **Harmonic Content:** Control harmonic complexity
- **Engine Mix:** Balance between multiple engines

### Filter Parameters
- **Type:** Select filter type (low-pass, high-pass, band-pass)
- **Cutoff:** Set filter frequency boundary
- **Resonance:** Control filter emphasis at cutoff point
- **Drive:** Add saturation and distortion to filter
- **Envelope:** Modulate filter with envelope

### Envelope Controls
- **Attack:** Initial rise time of envelope
- **Decay:** Fall time from attack peak to sustain
- **Sustain:** Level maintained during note hold
- **Release:** Fall time after note release
- **Amount:** Depth of envelope modulation

### Modulation Matrix
- **LFO Rate:** Speed of low-frequency oscillator
- **LFO Amount:** Depth of modulation
- **LFO Destination:** Parameter to modulate
- **Envelope Amount:** Depth of envelope modulation
- **Controller Assignments:** MIDI controller mapping

## 🎼 Synthesis Applications

### Hip-Hop Production Applications
Autogun excels in hip-hop production scenarios:
- **Bass Sounds:** Classic subtractive synthesis bass
- **Lead Sounds:** Punchy lead sounds for melodies
- **Pad Sounds:** Atmospheric textures and backgrounds
- **Sound Design:** Creating unique textures and effects

### R&B Production Applications
Essential for R&B production workflows:
- **Pad Sounds:** Smooth, atmospheric pad sounds
- **String Sounds:** Emulated string sections
- **Organ Sounds:** Vintage organ emulation
- **Brass Sounds:** Horn section emulation

### Electronic Music Applications
Valuable for electronic music production:
- **Lead Sounds:** Arpeggiated lead sounds
- **Bass Sounds:** Driving bass lines
- **Pad Sounds:** Ambient textures
- **Effect Sounds:** Atmospheric effects

## 🧪 Experimental Techniques

### Advanced Synthesis
Creative uses of Autogun's synthesis capabilities:
- **Oscillator Sync:** Creating metallic and bell-like sounds
- **Ring Modulation:** Creating inharmonic textures
- **Filter Modulation:** Creating evolving textures
- **Envelope Programming:** Dynamic sound shaping

### Sound Design Experiments
Advanced sound design techniques:
- **Granular Synthesis:** Using granular synthesis capabilities
- **FM Synthesis:** Creating complex harmonic structures
- **Wavetable Synthesis:** Morphing between waveforms
- **Additive Synthesis:** Building complex sounds from simple waves

### Integration Techniques
Advanced integration with other tools:
- **MIDI Sequencing:** Complex melodic patterns
- **Audio Warping:** Aligning synthesized sounds to tempo
- **Sidechain Integration:** Ducking and gating effects
- **Automation Integration:** Dynamic parameter changes

## 🎚️ Workflow Optimization

### Patch Creation Workflow
Optimizing the patch creation process:
- **Template Creation:** Reusable patch starting points
- **Parameter Bulk Editing:** Adjust multiple parameters simultaneously
- **Patch Management:** Organizing and categorizing patches
- **Performance Optimization:** Reducing resource usage
- **Backup Strategies:** Protecting patch work

### Sound Design Workflow
Streamlining the sound design process:
- **Template Creation:** Starting points for different sound types
- **Parameter Sets:** Configured parameter combinations
- **Modulation Templates:** Reusable modulation setups
- **Sound Libraries:** Organized collections of patches
- **Workflow Efficiency:** Streamlined design processes

### Integration Workflows
Incorporating Autogun into existing workflows:
- **Template Integration:** Starting projects with Autogun
- **Session Management:** Organizing Autogun projects
- **Backup Strategies:** Protecting patch and project work
- **Collaboration:** Sharing work with others

## 🎧 Genre-Specific Applications

### Hip-Hop
- **Bass Sounds:** Classic subtractive synthesis bass
- **Lead Sounds:** Punchy lead sounds for melodies
- **Pad Sounds:** Atmospheric textures and backgrounds
- **Sound Design:** Creating unique textures and effects

### R&B
- **Pad Sounds:** Smooth, atmospheric pad sounds
- **String Sounds:** Emulated string sections
- **Organ Sounds:** Vintage organ emulation
- **Brass Sounds:** Horn section emulation

### Electronic
- **Lead Sounds:** Arpeggiated lead sounds
- **Bass Sounds:** Driving bass lines
- **Pad Sounds:** Ambient textures
- **Effect Sounds:** Atmospheric effects

## 🔄 Integration with Other Plugins

### Synthesis Processing Tools
Autogun works well with synthesis processing tools:
- **Fruity Compressor:** Dynamics processing
- **Fruity Limiter:** Output control and protection
- **Fruity Parametric EQ 2:** Frequency adjustment
- **Fruity Stereo Enhancer:** Spatial enhancement

### Effects Processing
Integration with effects processing:
- **Fruity Convolver:** Reverb and spatial effects
- **Fruity Chorus:** Thickening and modulation
- **Fruity Flanger:** Special effects and movement
- **Fruity Delay:** Echo and rhythmic effects

### Modulation Sources
Integration with modulation sources:
- **Fruity Formula Controller:** Mathematical modulation
- **Fruity Envelope Controller:** Envelope-based modulation
- **Fruity Peak Controller:** Peak-following modulation
- **MIDI Controllers:** Real-time parameter control

## 📖 Historical Context

### Development Background
Autogun was developed as FL Studio's premium synthesizer:
- Created to provide professional-grade synthesis
- Designed for both classic and modern synthesis
- Developed with professional sound designers in mind
- Intended to rival standalone synthesizers

### Evolution Through FL Studio Versions
- Initially introduced with basic synthesis engines
- Enhanced with advanced filter capabilities
- Improved with better modulation options
- Expanded with more synthesis algorithms

### Impact on Music Production
Autogun has influenced music production by:
- Providing accessible professional synthesis
- Enabling complex sound design
- Facilitating creative synthesis techniques
- Supporting diverse musical genres

## 🧠 Advanced Synthesis Techniques

### Precision Synthesis
Advanced techniques for accurate sound creation:
- **Oscillator Tuning:** Precise oscillator frequency matching
- **Filter Programming:** Accurate filter response shaping
- **Envelope Shaping:** Precise envelope curve design
- **Modulation Control:** Accurate modulation depth and timing

### Complex Sound Design
Advanced sound design techniques:
- **Layered Synthesis:** Combining multiple synthesis techniques
- **Spectral Design:** Building sounds from harmonic components
- **Dynamic Programming:** Creating evolving sounds
- **Hybrid Synthesis:** Combining different synthesis methods

### Performance Optimization
Advanced techniques for efficient performance:
- **Resource Management:** Optimizing CPU and memory usage
- **Latency Reduction:** Minimizing timing delays
- **Real-time Control:** Efficient parameter manipulation
- **Patch Management:** Organizing complex arrangements

## 📊 Performance Considerations

### CPU Usage
Managing Autogun's impact on system performance:
- **Engine Type:** Different engines have different CPU loads
- **Filter Processing:** Complex filters increase CPU usage
- **Modulation Complexity:** Complex modulation increases usage
- **Polyphony:** More voices require more processing
- **Optimization Strategies:** Techniques for reducing usage

### Memory Usage
Managing RAM consumption:
- **Patch Complexity:** Complex patches consume more memory
- **Engine Memory:** Engine settings use memory
- **Filter Memory:** Filter settings use memory
- **Modulation Memory:** Modulation settings use memory
- **Buffer Management:** Efficient memory allocation

### Optimization Strategies
Techniques for optimizing performance:
- **Engine Simplification:** Using simpler engines when possible
- **Filter Optimization:** Using simpler filters when possible
- **Modulation Management:** Using modulation judiciously
- **Voice Management:** Controlling polyphony appropriately
- **Buffer Management:** Optimizing buffer settings

## 🛠️ Troubleshooting Common Issues

### Engine Problems
- **Sync Issues:** Oscillators not synchronizing correctly
- **Waveform Problems:** Waveforms not behaving as expected
- **Pitch Issues:** Incorrect pitch relationships
- **Detuning Problems:** Unwanted detuning effects
- **Noise Issues:** Unwanted noise in output

### Filter Problems
- **Self-Oscillation:** Filter oscillating without input
- **Resonance Issues:** Resonance causing instability
- **Cutoff Problems:** Cutoff not responding correctly
- **Drive Distortion:** Drive causing unwanted distortion
- **Filter Artifacts:** Unwanted artifacts in output

### Performance Issues
- **High CPU Usage:** Excessive processor load
- **Memory Problems:** Insufficient RAM for patches
- **Dropouts:** Audio dropouts during playback
- **Lagging Response:** Delayed response to input
- **Crash Issues:** Plugin instability

## 🎚️ Advanced Configuration

### Custom Patches
Creating and managing custom configurations:
- **Patch Templates:** Starting points for different genres
- **Parameter Sets:** Configured synthesis parameters
- **Modulation Templates:** Reusable modulation setups
- **Genre-Specific Patches:** Optimized for specific styles

### Performance Setup
Optimizing for performance scenarios:
- **Engine Mapping:** Efficient engine usage
- **Filter Programming:** Optimized filter settings
- **Envelope Programming:** Efficient envelope usage
- **Modulation Setup:** Optimized modulation configurations

### Integration Configurations
Optimizing for different integration scenarios:
- **MIDI Controller Integration:** Real-time parameter control
- **DAW Integration:** Sequencing and automation
- **Hardware Integration:** External device control
- **Network Integration:** Remote control options

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Autogun techniques
- **Reddit Groups:** Sharing synthesis techniques and patches
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced techniques
- **Written Guides:** In-depth articles on synthesis
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Patch Libraries:** Websites hosting Autogun patches
- **Sound Collections:** Collections of synthesizer sounds
- **Educational Content:** Tutorials and sample packs

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create complex synthesizer patches with Autogun
- [ ] Program advanced modulation setups
- [ ] Apply advanced synthesis techniques
- [ ] Optimize performance for complex projects
- [ ] Create genre-appropriate synthesizer sounds
- [ ] Troubleshoot common synthesis issues

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
**Estimated Documentation Time:** 15-20 hours

---

*This research framework ensures comprehensive documentation of Autogun for producers, sound designers, and synthesizer enthusiasts.*
```

---

## FILE: 01-Learning\00_Overview.md

```markdown
# Autogun: The Infinite Preset Machine

## What is it?
**Autogun** is an additive synthesizer designed for one thing: **exploration**. It contains over **4 billion** (4,294,967,296) presets. It has no synthesis controls (oscillators, envelopes, filters). Instead, it gives you a "Magic Dust" knob and a preset selector. It is built on the engine of **Ogun**.

## Where does it sit?
-   **Category:** Generator / Synth
-   **Role:** An "Inspiration Generator." It's not for sound design; it's for sound *hunting*.
-   **Engine:** Based on the Ogun additive synthesis engine + Soundgoodizer (Maximus) effects.

## The Mental Model (60 Seconds)
Imagine a radio that picks up 4 billion alien stations. You can't tell the aliens what to broadcast, but you can change the channel.
*   **The Number = The Sound.**
If you type preset `123456`, you will hear a bell. If your friend types `123456` on their computer, they will hear the *exact same* bell. The preset number is the "DNA" of the sound.

## Why use it?
-   **Instant Inspiration:** When you are stuck, just hit "Random" until you hear something weird.
-   **Unique Textures:** Because it uses additive synthesis (up to 32,000 harmonics), it makes metallic, shimmering, and glass-like sounds that subtractive synths (like Sylenth1 or Serum) struggle to produce.
-   **It's Free:** Included with FL Studio.

## When NOT to use it?
-   **Specific Sound Design:** If you need "a saw wave pluck with a 500ms decay," do not use Autogun. You will never find it. Use a normal synth.
-   **CPU Saving:** Some Autogun presets (especially in High quality modes) can be CPU heavy due to additive synthesis.

```

---

## FILE: 01-Learning\01_UI_Tour_And_Core_Concepts.md

```markdown
# UI Tour & Core Concepts

## The Interface
The UI is incredibly minimal. It looks like a futuristic weapon/gadget.

### 1. The Display (Preset Number)
-   Displays the current preset ID (e.g., `Preset 4294967296`).
-   **Interaction:** You can click this area to type in a number manually.
-   **The "?" Icon:** Hover over the `?` or the info area to see the full preset number if it's truncated.

### 2. Navigation Controls
-   **Left/Right Arrows:** Step through presets 1 by 1. (Not recommended for finding new sounds, as neighbors are often similar).
-   **Random Button (Dice/A):** The most important button. Jumps to a random spot in the 4-billion-number universe.

### 3. Magic Dust
-   **What is it?** It is essentially a **Soundgoodizer** (Maximus preset) knob built-in.
-   **Function:** It adds compression, saturation, and stereo widening.
-   **0%:** Dry, raw Ogun sound.
-   **100%:** Hyper-processed, loud, and shiny.

### 4. Volume
-   Master output level.

## Core Concepts

### The "Seed" Concept
Autogun doesn't store 4 billion files on your hard drive. That would take petabytes. Instead, it uses a mathematical algorithm. The "Preset Number" is a **Seed**. The synth calculates the sound in real-time based on that number. This is why the plugin is so small but the library is so huge.

### The Ogun Connection
Autogun is the "Player" version of the plugin **Ogun**.
-   **Autogun:** Can *play* the sounds but not edit them.
-   **Ogun:** Can *edit* the sounds.
-   **Workflow:** If you find a preset you love in Autogun but want to change the envelope decay, you can copy the number and paste it into Ogun (if you own Ogun).

```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Autogun

## Purpose and Identity
**Autogun** is FL Studio's specialized multi-engine synthesizer designed for **rapid discovery** and **advanced sonic textures**. Unlike traditional synths that force you to build from scratch, Autogun leverages a massive internal universe of over **4 billion** potential sounds, spanning Analog, Wavetable, FM, and Granular synthesis architectures. It is the definitive tool for producers who need high-end "complex" sounds with an intuitive, results-first workflow. [SRC: IL-MAN]

## 60-Second Mental Model
Think of Autogun as a **"Sound Seed Generator."** Instead of drawing complex routing diagrams, you browse a vast library of "Seeds" (Preset Numbers). Each seed configures a unique multi-engine processing chain behind the scenes. Once you find a seed you like, you can "nudge" it toward your mix using its streamlined control set. It's like having a team of sound designers working for you, and your job is simply to pick the best idea.

## Typical Roles In A Session
- **Atmospheric Foundation**: Finding unique, evolving pads that fill the background of a track.
- **Melodic Inspiration**: Quickly discovering "bell" or "pluck" textures that spark a new melody.
- **Texture Layering**: Using its granular or FM engines to add a "digital edge" to organic recordings.
- **Cinematic SFX**: Generating risers, falls, and otherworldly noises for transitions.

## Hip-Hop/R&B Context
- **The "Toxic" R&B Lead**: Finding FM-based "scream" or "silk" leads that cut through a smooth R&B arrangement.
- **Dark Trap Ambience**: Using the granular engine to create dark, washed-out textures that define the "Moody" trap aesthetic.
- **Upbeat Pop-Rap Brasses**: Discovering analog-style brass stabs that hit with modern digital pressure.

## When to Use vs When NOT to Use
| Use It When... | Avoid It When... |
| :--- | :--- |
| You need a unique sound FAST. | You need to replicate a specific analog hardware synth exactly. |
| You want to explore "happy accidents." | You want to manually wire a modulation matrix from scratch. |
| You need high-end FM or Granular textures. | You are low on CPU (some engines are demanding). |
| You are in "creative flow" mode. | You need a perfectly clean, simple Sine sub-bass (use 3x Osc). |

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Autogun

## UI Tour
The interface is intentionally minimal, designed to keep you focused on the sound itself. [SRC: IL-MAN]

### 1. The Seed Engine (The "Finder")
- **Preset Number Display**: Shows the current "Sound Seed" (out of 4,294,967,296).
- **Randomize Button**: Jumps to a completely new synthesis state.
- **Copy/Paste Button**: Allows you to share exact seed numbers with other projects or users.

### 2. The Master Modifiers (The "Nudge")
- **Freq (Cutoff)**: Master filter frequency. Adjusts the brightness of the selected engine.
- **Res (Resonance)**: Adjusts the filter peak. Essential for "talky" or "aggressive" sounds.
- **Rel (Release)**: Controls how long the sound lingers after you let go of the key.
- **AM (Amount)**: A multi-purpose modulation depth knob (varies by engine).

### 3. Monitoring & Output
- **Output Fader**: Global gain level.
- **Visualizer**: Real-time display of the generated waveform and harmonics.

## Signal Flow
1. **Trigger**: MIDI note is received.
2. **Seed Engine Selection**: The plugin reconfigures its internal topology (Analog, FM, etc.) based on the **Seed Number**.
3. **Synthesis Engine**: Audio is generated via the specific multi-engine algorithm.
4. **Modulation Matrix**: Internal LFOs and Envelopes (pre-defined by the seed) modify the oscillator.
5. **Main Filter**: The **Freq** and **Res** knobs apply a master tone-shaping curve.
6. **Amplitude Envelope**: The **Release** knob applies the final volume curve.
7. **Mix/Output**: The processed signal leaves the plugin for the mixer.

## Things Beginners Misunderstand
- **"It's just a preset player"**: While it uses seeds, each seed is a **live synthesis state**, not a sample. You can still automate the filter and release in real-time.
- **The "AM" Knob**: In some engines, this controls "Modulation Depth"; in others, it might control "Bitcrushing" or "FM Index." Always use your ears to find the sweet spot per seed.
- **Seed Persistence**: If you like a sound, **WRITE DOWN THE NUMBER**. If you click randomize without saving the number, the sound may be lost in the 4 billion options.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Autogun

## 1. The "Nudge" Workflow
Discovery through iteration.
- **Technique**: Find a seed that has the "energy" you want (e.g., a gritty bass).
- **Move**: Use the **Freq** knob to find the frequency range where it sounds most "professional." Use **Res** to add or remove "nasal" character.
- **Result**: You've taken a raw seed and tuned it to your specific mix context.

## 2. Dynamic Performance via AM
- **Technique**: Automate the **AM** (Amount) knob.
- **Move**: Set a slow 4-bar Sine LFO to the AM knob.
- **Listen For**: The internal synthesis engine changing its "complexity" over time.
- **Benefit**: This adds an "expensive" evolving feel to otherwise static pads or leads.

## 3. "Moody" Darkening
- **Technique**: Turn **Freq** down to 20% and **Release** up to 60%.
- **Move**: Select an FM-based seed (sounds metallic).
- **Listen For**: The sharp metallic edges become a warm, heavy background texture.
- **Goal**: Creating atmospheric weight for R&B or Dark Trap.

## 4. Rhythmic Gating (External)
Since Autogun has no internal gate sequencer:
- **Technique**: Put a **Fruity Limiter** after Autogun in the mixer.
- **Move**: Use the sidechain input from your Kick to "pump" the Autogun pad.
- **Result**: A complex, evolving mobile synth that breathes with your beat.

## 5. Mono-Check Protocol
- **Protocol**: Many Autogun seeds use extreme stereo phase offsets.
- **Action**: Check the Master Mono button. 
- **Fix**: If the sound thins out too much, use a **Fruity Stereo Shaper** after the plugin to bring the stereo width back toward the center (around 50%). [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **"Clicking" Bass** | Increase the **Attack** time (if available via wrapper) or slightly increase **Release**. |
| **Harsh "Digital" Hiss** | Lower the **Freq** knob or use a Low-Pass filter in the mixer. |
| **Lost a Great Sound** | **ALWAYS** copy the seed number into your project NoteBook or the HTML NoteBook. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Synthesis_Guide.md

```markdown
# Vibe Synthesis Guide: Autogun

Translating over 4 billion sound seeds into specific production vibe targets.

---

## 1. MOODY
*Darkness, weight, and "heavy" melancholic textures.*
- **The Lever**: **Low Freq + Long Release + Granular Engines**.
- **Move**: Search for "Ambient" or "Pad" categories. Set Freq below 30%. Maximize the Release.
- **What to Listen For**: A muffled, expansive sound that feels like a weight being dropped in a dark room. It provides the sub-foundation without being distracting.
- **Don't Do This**: High Resonance (too energetic).

## 2. UPBEAT
*Energy, sharp transients, and driving "shine".*
- **The Lever**: **High Freq + Fast Decay (External) + Analog Engines**.
- **Move**: Search for "Lead" or "Brass." Keep Freq above 70%. Use a fast Release.
- **What to Listen For**: A bright, aggressive sound that feels like it's jumping forward. The sharpness of the filter ensures it cuts through high-energy Trap drums.
- **Don't Do This**: Long sustain/release (it slows the energy down).

## 3. PSYCHEDELIC
*Disorientation, shifting scales, and "melting" soundscapes.*
- **The Lever**: **Automated AM Knob + FM Engines + Heavy Reverb**.
- **Move**: Link the **AM** knob to a fast LFO. Select a seed with metallic or "inhuman" character. Add external LuxeVerb.
- **What to Listen For**: The internal synthesis engine seems to "morph" or "liquidize" unpredictably. It creates a dizzying, trippy motion.
- **Don't Do This**: Static settings.

## 4. JAZZY
*Warmth, subtle focus, and organic "flesh".*
- **The Lever**: **Mid-Range Freq + Low Resonance + Analog/Physical Modeling**.
- **Move**: Search for "Pluck" or "EP." Keep Freq at 50%. Keep Res at zero. 
- **What to Listen For**: A "rounded" tone that emphasizes the body of the sound. It feels "human" and "wooden," perfect for soulful Neo-Soul arrangements.
- **Don't Do This**: High distortion (sounds too digital).

## 5. VIBEY
*Modern luxury, smooth silk, and "expensive" width.*
- **The Lever**: **Wavetable Engines + Treble Shelf + Width Expand**.
- **Move**: Use a "Silky" lead or pad seed. Set Freq at 80%. Use a Stereo Enhancer *after* the plugin to push the air to the sides.
- **What to Listen For**: A wide, high-budget sheen that fits perfectly into modern R&B. It should feel like the track is "breathing" luxury.
- **Don't Do This**: Low Freq muffled sounds (too Moody for this "polished" vibe).

---

## Vibe Search Strategy
| Vibe | Engine Hint | Key Freq Position | Key Rel Position | AM Logic |
| :--- | :--- | :--- | :--- | :--- |
| **Moody** | Granular | 9 o'clock | 3 o'clock | Static |
| **Upbeat** | Analog | 3 o'clock | 9 o'clock | Pulse |
| **Psyched**| FM | Automated | Variable | Fast LFO |
| **Jazzy** | Physical | 12 o'clock | 12 o'clock | Off |
| **Vibey** | Wavetable | 2 o'clock | 3 o'clock | Slow Drift |

```

---

## FILE: 01-Learning\Concepts\additive_theory.md

```markdown
# Autogun Synthesis Theory

## Additive Synthesis Explained
Unlike subtractive synthesis (which starts with a complex wave and filters it down), Autogun's engine (**Ogun**) starts with silence and adds thousands of pure sine waves (harmonics) together.
- This results in extremely high fidelity and "glassy" timbres.
- It allows for precise control over the harmonic series.

## The Seed Algorithm
The "Preset Number" is a 32-bit integer that acts as a seed for a pseudo-random generator. This generator then populates the thousands of harmonic parameters in the Ogun engine.
- Because the math is deterministic, the same seed *always* equals the same sound.
- This is a form of **Procedural Audio Generation**.

```

---

## FILE: 01-Learning\Concepts\algorithmic_inspiration.md

```markdown
# Algorithmic Inspiration

The power of Autogun lies in the **Law of Large Numbers**.

## The Probability of "Good" Sounds
In a 4-billion-preset library, most sounds are noise or dissonant. However, due to the way the seeds are distributed, "clusters" of musical sounds often exist.
- **Rule:** If you find a good bell sound at Preset X, try Presets X+1, X+10, or X+100. Often the underlying mathematical seed results in similar "families" of sounds in close numeric proximity.

## Serendipity in Sound Design
Autogun forces you to work with what you find. This "Constraint-based" workflow often leads to more creative tracks than starting with a blank synth, as you are forced to adapt your melody to a unique, unchangeable timbre.

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Autogun: The Infinite Preset Machine

> **Scope:** Additive Synthesis, Seed Generation, and PADsynth.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low (Interface) / Extreme (Engine).

## 🧠 The "Google of Synths" Concept
Autogun is not a traditional synthesizer; it is a **Procedural Generation Engine**. It contains 4,294,967,296 possible presets. It uses the "Ogun" synthesis engine (Additive Synthesis + PADsynth Resynthesis) under the hood but hides all controls except Volume and "Magic".

**Signal Flow:**
`Seed Number` -> **[OGUN ENGINE]** -> **[ADDITIVE RESYNTHESIS]** -> **[MAGIC DUST (SOUNDGOODIZER)]** -> **[OUTPUT]**

*   **Critical Nuance:** Every Autogun preset corresponds to an identical preset in the full version of **Ogun**. You can copy the preset number from Autogun and paste it into Ogun to unlock the "Edit Mode" for that sound.

---

## 🎛️ Section 1: The Controls

### The Trillions
| Control | Range | Function & Nuance |
| :--- | :--- | :--- |
| **Preset Selector** | 1 to 4 Billion | **The Seed.** <br> Each number is a unique algorithmic seed. <br> *Left/Right Arrows:* Step sequentially. <br> *Drop-down:* Jump to favorite. |
| **Magic Dust** | 0% - 100% | **Soundgoodizer.** <br> This is literally a built-in instance of Soundgoodizer (Maximus engine). <br> *0%:* Dry, metallic, thin. <br> *100%:* Compressed, saturated, polished. |
| **Volume** | 0% - 200% | **Gain.** <br> NOTE: Goes to 200%. Some Autogun presets are naturally quiet due to additive cancellation; this knob compensates. |

### The "Ogun" Connection
Autogun has a hidden feature: **Cross-Plugin Compatibility**.
1.  **Copy:** Click the "Key" icon or "Preset Number" area.
2.  **Paste:** Open the full plugin **Ogun**. Go to Options -> "Enter random preset number".
3.  **Unlock:** You now have full control over the harmonics, envelopes, and filters of that Autogun sound.

---

## 🔁 Section 2: Synthesis Engine (Under the Hood)

Even though you can't see them, Autogun is using these modules:

1.  **Additive Synthesis:** Summing up to 32,767 individual sine waves (Harmonics).
2.  **PADsynth:** A "blurring" algorithm that smears harmonics to create lush, bell-like pads.
3.  **Richness:** Autogun presets generally have High Richness settings, which causes high CPU usage.

---

## ⚡ Technical Specs: Performance Notet

*   **CPU Spikes:** Autogun uses FFT (Fast Fourier Transform) to generate sounds.
    *   **Uniformity:** CPU usage is "Non-Uniform". It spikes when a note *starts* (calculation phase).
    *   **Dropouts:** If you hear clicks, increase your buffer size.
*   **Latency:** Autogun introduces small latency due to the Lookahead in the "Magic Dust" (Soundgoodizer) section.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Preset Mining" Expedition
1.  **Goal:** Find a unique texture.
2.  **Method:** Hold the "Right Arrow" button.
3.  **Listen:** Wait for something that catches your ear.
4.  **Save:** Don't just save the FLP. **Write down the Preset Number**. If you lose it, you will *never* find it again (statistical probability is near zero).

### 2. The "Ogun" Expansion
1.  **Find:** A cool bell sound in Autogun (e.g., Preset #42069).
2.  **Problem:** The decay is too short.
3.  **Action:** Copy the number. Open Ogun. Paste.
4.  **Edit:** In Ogun, increase the Release time of the Master Envelope.
5.  **Result:** You just modded an Autogun preset.

### 3. The "Ambience" Layer
1.  **Magic Dust:** Set to 0%.
2.  **External FX:** Add Fruity Reeverb 2 (Large Hall, 10s Decay).
3.  **Result:** Because Autogun sounds are often metallic and rich in harmonics, they make incredible sources for "Shimmer Reverbs."

```

---

## FILE: 01-Learning\Quick-Reference\how-presets-are-numbered.md

```markdown
# How Presets are Numbered

Autogun uses a 32-bit seed-based algorithm.
- Every number from **1** to **4,294,967,296** corresponds to a specific configuration of the Ogun synthesis engine.
- The numbers are **Global**: Preset 500 on your machine is Preset 500 on anyone else's.
- This allows for "Preset Mining"—searching for specific sounds and sharing just the number rather than a file.

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: Autogun

The essential modifiers for the 4-billion sound engine. [SRC: IL-MAN]

---

## 🏗️ Discovery Section
- **Randomize (Question Mark)**: Generates a completely new sound seed.
- **Copy/Paste**: Copies the exact seed number to your clipboard.
- **Seed Display**: Shows the numeric ID of the current sound.

## 🎛️ Master Modifiers
- **Freq**: The Master Cutoff Filter. 
  - *Left*: Muffled/Moody.
  - *Right*: Bright/Sharp.
- **Res**: Filter Resonance.
  - *Right*: Adds "nasal" or "whistle" character.
- **AM (Amount)**: The modulation depth. Varies by engine (FM Index, Granular Density, etc.).
- **Rel (Release)**: How long the sound lingers after the note ends.

## 📐 Global Logic
- **Visualizer**: Shows the waveform and harmonic spectrum.
- **Output**: Final gain adjustment.
- **Wrapper Settings**: Use the gear icon to access external ADSR, Arp, and Portamento.
```

---

## FILE: 01-Learning\Quick-Reference\synthesis-workflows.md

```markdown
# Quick Reference: Synthesis Workflows

A step-by-step process for sound discovery in Autogun. [SRC: IL-MAN]

## 1. The "Fishing" Workflow
- **Goal**: Find an inspired sound quickly.
- **Move**: Click the **Randomize** button. 
- **Action**: Play a MIDI note for each new seed.
- **Rule**: If a sound catches your ear, **STOP**. Don't keep clicking or you will lose it.

## 2. Tuning the Seed
- **Goal**: Make the discovered sound fit your track.
- **Move 1**: Set the **Release** first. Does it need to be a pluck or a pad?
- **Move 2**: Adjust the **Freq** knob to carve out its space in the frequency spectrum.
- **Move 3**: Tweak **AM** to see if the engine can sound "more complex" or "simpler."

## 3. Sharing & Backing Up
- **Goal**: Ensure the sound is preserved for future sessions.
- **Action**: Click the **Copy** button. 
- **Move**: Paste the number into a **NoteBook** entry in your project.
- **Benefit**: Even if you accidentally click randomize, you can paste the number back to restore the sound.

## 4. Layering with Desktop VSTs
- **Goal**: Add a unique "Autogun grit" to a clean synth.
- **Move**: Link a desktop synth (like FL Keys) and Autogun to a **Layer** channel.
- **Move**: Use Autogun at a low volume to provide the unique harmonic texture while FL Keys provides the musical fundamental.

```

---

## FILE: 02-Data\00_Controls_Reference.md

```markdown
# Controls Reference

## Main Controls

### Preset Selector
-   **Input:** Click to type a specific integer.
-   **Range:** 1 to 4,294,967,296.
-   **Behavior:** Entering the same number always produces the same sound.

### Magic Dust
-   **Effect:** A one-knob multi-band compressor/limiter/saturator.
-   **Tech Specs:** Based on the "Soundgoodizer" engine (which is based on Maximus).
-   **Tip:** If a sound is too harsh or noisy, turn this DOWN.

### Volume
-   **Range:** 0% to 200%.

### Options Menu (Down Arrow)
-   **Processing Quality:**
    -   *Draft:* Low CPU, lower harmonic accuracy. Good for browsing.
    -   *Good / High:* Standard usage.
    -   *Pristine:* High CPU. Renders the full spectrum of harmonics. Use for rendering.
-   **Enter Random Preset Number:** Manual entry method.

## Hidden Interactions
-   **Copying Presets:** Hover over the preset name/info area to see the number. Note it down. (Some versions allow right-click copy).

```

---

## FILE: 02-Data\01_Troubleshooting_Notes.md

```markdown
# Troubleshooting Notes

## Symptom: "The sound is crackling / CPU is spiking."
-   **Cause:** Additive synthesis requires calculating thousands of sine waves (harmonics) simultaneously. Some presets are complex.
-   **Fix:**
    1.  Check the **Options** menu and lower the quality to **Draft** or **Good**.
    2.  Check if you are playing too many notes (high polyphony).

## Symptom: "I lost the sound I found!"
-   **Cause:** You clicked "Random" again without writing down the number. There is no "Undo" for the Random button in some versions.
-   **Fix:** **Always** write down the number of a sound you like immediately. Treat it like a phone number.
-   **Prevention:** Use the "Sustain" pedal or keep a MIDI note playing while browsing so you don't accidentally click away.

## Symptom: "The sound is too loud/distorted."
-   **Cause:** "Magic Dust" is a maximizer. At 100%, it pushes the signal very hard.
-   **Fix:** Turn the **Magic Dust** knob down to 50% or 0%.

## Symptom: "I can't change the attack/decay."
-   **Cause:** Autogun does not allow editing synthesis parameters.
-   **Fix:** You need the full **Ogun** plugin. Copy the preset number from Autogun, open Ogun, and use "Enter random preset number" to paste it. Now you can edit the envelopes.

```

---

## FILE: 02-Data\parameters\autogun-engine-specs.json

```json
{
  "plugin_name": "Autogun",
  "engine": "Ogun Additive Synthesis",
  "total_presets": 4294967296,
  "max_harmonics": 32767,
  "internal_fx": "Soundgoodizer (Maximus Engine)"
}

```

---

## FILE: 02-Data\parameters\autogun-params.json

```json
{
  "plugin_name": "Autogun",
  "category": "Instrument / Synth",
  "engine": "Ogun Multi-Engine core",
  "parameters": [
    {
      "name": "Preset Number",
      "type": "integer",
      "range": "0 - 4,294,967,295",
      "description": "The unique ID of the synthesis topology.",
      "vibe_impact": "Absolute identity"
    },
    {
      "name": "Freq",
      "type": "knob",
      "description": "Master low-pass filter cutoff.",
      "vibe_impact": "Brightness, mood, air"
    },
    {
      "name": "Res",
      "type": "knob",
      "description": "Filter resonance.",
      "vibe_impact": "Character, whistle, presence"
    },
    {
      "name": "AM",
      "type": "knob",
      "description": "Engine-specific modulation depth.",
      "vibe_impact": "Complexity, evolution, grit"
    }
  ],
  "mix_impact_tags": ["harmonic", "texture", "atmospheric"]
}

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Autogun",
  "category": "Synthesizer (Additive)",
  "parameters": [
    {
      "section": "Global",
      "id": "volume",
      "name": "Master Volume",
      "range": { "min": 0, "max": 200, "unit": "%" },
      "description": "Output gain. Goes to 200% to compensate for quiet additive patches."
    },
    {
      "section": "Global",
      "id": "magic_dust",
      "name": "Magic Dust",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Soundgoodizer amount. Adds compression and saturation."
    },
    {
      "section": "Presets",
      "id": "preset_selector",
      "name": "Preset Number (Seed)",
      "range": { "min": 1, "max": 4294967296, "unit": "int" },
      "description": "The unique seed for the additive synthesis engine."
    },
    {
      "section": "Options",
      "id": "processing_quality",
      "name": "Processing Quality",
      "options": ["High", "Medium", "Low"],
      "description": "Determines the FFT resolution and interpolation."
    }
  ]
}

```

---

## FILE: 02-Data\parameters\ui_parameters.md

```markdown
# Autogun UI Parameters

## 1. The ID Box (Preset Number)
- The only "input" parameter.
- **Internal Mapping:** Acts as the 32-bit seed for the random number generator.

## 2. Magic Dust (The Optimizer)
- **Algorithm:** Maximus "Soundgoodizer" Type A.
- **Process:** Multiband compression followed by a limiter.
- **Tip:** Turning this to 0% reveals the raw, sometimes thin, additive harmonics of the Ogun engine.

## 3. Master Volume
- Range: -inf to +6dB (approx).
- **Behavior:** Autogun presets vary wildly in gain due to harmonic summation. Use this to normalize levels between sounds.

```

---

## FILE: 02-Data\presets\notable_seeds.md

```markdown
# Notable Autogun Presets

While there are 4 billion sounds, these are some verified "classic" ranges:

- **1 to 1,000,000:** Mostly standard "synth-like" sounds.
- **Preset 1:** The default "Autogun" lead.
- **Preset 4294967296:** The absolute last preset (often very complex).
- **Telephone Numbers:** Typing in a 7 or 10-digit phone number often yields surprisingly musical pads.
- **Date Seeds:** Using today's date (e.g., `20260203`) is a common way for producers to find a "Sound of the Day".

```

---

## FILE: 02-Data\presets\seed_ranges.md

```markdown
# The "Magic" Numbers

A collection of community-verified seed ranges for specific tasks:

- **The "Bell" Range:** 1,000,000 to 1,005,000.
- **The "Horror" Range:** 666,000 to 667,000 (often dissonant/metallic).
- **The "Silence" Range:** Very rare, but some seeds result in near-zero amplitude harmonics.
- **Personal Seeds:** Many producers use their birthdates (DDMMYYYY) as a signature starting point for every project.

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Autogun)

## 1. The "Unique Texture" Rule
- **Rule**: Never use the first Autogun seed you find. 
- **Move**: Click randomize at least 10 times.
- **Why**: Hip-hop production thrives on unique "sonic signatures." Autogun has 4 billion options—take the time to find one that nobody else has used.

## 2. R&B Pad "Smoothing"
- **Rule**: If an Autogun pad is too "buzzy," lower the **Res** to 0 and the **Freq** to 40%.
- **Action**: Use a 12dB Low-Pass filter *after* the plugin in the mixer.
- **Goal**: To capture the "Silk" of modern R&B while using Autogun's complex internal motion.

## 3. Trap Lead "Presence"
- **Rule**: Boost the **AM** knob on melodic lead seeds.
- **Why**: This often adds the FM-style harmonic high-end needed to cut through aggressive hi-hats.
- **Move**: Use a fast **Release** (under 20%) to keep the melodies tight and percussive.

## 4. Mono-Check Protocol
- **Rule**: Every atmospheric or wide pad must be checked in Mono.
- **Action**: Many seeds use heavy phase-modulation. If the sound disappears in mono, use **Stereo Shaper** to narrow the width to 50% or 75%.

```

---

## FILE: 02-Data\rules\rendering_rules.md

```markdown
# Rendering Standards

## Real-time vs. Render
- **Composition:** Keep quality at "Good" to maintain low latency.
- **Exporting:** Always switch to **Pristine** before rendering your final WAV. Additive synthesis is prone to small artifacts in lower quality modes that only become apparent during mastering.

## Volume Safety
- Some Autogun presets can "explode" in volume if the harmonics sum perfectly.
- **Rule:** Always place a `Fruity Limiter` or `Soft Clipper` after Autogun during the exploration phase to protect your ears/speakers.

```

---

## FILE: 02-Data\rules\usage_rules.md

```markdown
# Autogun Usage Rules

## Rule 1: The "Write It Down" Rule
- You cannot "Undo" a randomization in Autogun.
- **Rule:** If you hear a sound you like, you must copy the number to a Notepad file *before* clicking the dice again.

## Rule 2: Quality Control
- **Draft Mode:** Use this exclusively when browsing at high speeds. It saves CPU.
- **Pristine Mode:** Use this ONLY for the final export/render. It calculates all 32,000 harmonics, which can crash a session if used on too many instances in real-time.

## Rule 3: Magic Dust Management
- Never leave Magic Dust at 100% for every track.
- **Rule:** If the mix is getting muddy, turn Magic Dust to 0% and use external EQ/Compression instead.
- The built-in Soundgoodizer can mask the true harmonic detail of the additive engine.

```

---

## FILE: 03-Workflows\00_Practical_Use_Cases.md

```markdown
# Practical Use Cases

## 1. The "Pad" Hunter
**Goal:** Find a unique, evolving atmosphere for a breakdown.
-   **Setup:**
    -   Load Autogun.
    -   Turn "Magic Dust" to 60%.
    -   Play a long chord (e.g., Cminor9).
-   **Action:** Click Random repeatedly. Stop when you hear a metallic, washing texture.
-   **Why:** Autogun excels at non-standard pads that sound like bowing glass or metal.

## 2. The "Bell" Layer
**Goal:** Add a "sparkle" layer to a standard saw-wave lead.
-   **Setup:**
    -   Layer Autogun with your main synth (using Layer channel or Patcher).
    -   Turn Magic Dust LOW (20%) to keep dynamics.
-   **Search:** Look for "Tine", "Bell", or "Chime" type sounds.
-   **Mix:** High-pass the Autogun channel at 1000Hz.
-   **Result:** You get the body of your main synth + the unique metallic transient of Autogun.

## 3. Industrial FX / Glitch Source
**Goal:** Weird metallic noises for Sci-Fi or Industrial Techno.
-   **Action:**
    -   Play very low notes (C0 - C2).
    -   Search for presets that sound dissonant or inharmonic.
    -   Bounce/Render the audio out to a WAV file.
-   **Post-Processing:** Chop the WAV file in Slicex to create a glitch kit.

## 4. The "Specific Number" Recall
**Goal:** Collaborate with a friend.
-   **Scenario:** You find a cool sound on preset `42069`.
-   **Action:** Text your friend: "Use Autogun preset 42069".
-   **Result:** They type it in and have the exact same instrument instantly. No file transfer needed.

```

---

## FILE: 03-Workflows\01_Workflow_Recipes.md

```markdown
# Workflow Recipes

## Recipe 1: The "Lucky Dip" Sampler
1.  **Open** Autogun.
2.  **Set** Edison to record "On Play".
3.  **Pattern:** Draw a C5 note every bar.
4.  **Action:** Hit Play. Click "Random" (Right Arrow) on Autogun every bar.
5.  **Record:** Do this for 60 seconds.
6.  **Result:** You now have 30 unique one-shot samples in Edison. Drag them into a sampler and start making beats.

## Recipe 2: The Autogun -> Ogun Upgrade
1.  **Browse** in Autogun until you find a sound that is *almost* perfect but has a release that is too long.
2.  **Copy** the Preset Number (hover '?' or check info bar).
3.  **Replace** Autogun with **Ogun** (or load Ogun separately).
4.  **Menu:** In Ogun, go to Options > "Enter random preset number".
5.  **Paste** the number.
6.  **Edit:** Now you have the full Ogun interface. Go to the "Amp Envelope" (DEC/REL) and shorten the Release time.

## Recipe 3: Stereo Widener
1.  **Load** Autogun.
2.  **Set** Magic Dust to 100%.
3.  **Find** a thin, reedy sound.
4.  **Result:** The Magic Dust (Soundgoodizer) pushes the side channels hard, instantly making a wide stereo image without external plugins.

## Recipe 4: The "Mystery Box" Layer
1.  **Create** a Layer Channel.
2.  **Add** 3 instances of Autogun as children.
3.  **Randomize:** Click random on all 3.
4.  **Play:** You will trigger 3 distinct, complex additive sounds at once.
5.  **Iterate:** Keep randomizing individual instances until the chord sounds cohesive.

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Autogun

## 1. The "Needle in a Haystack" (Preset Hunting)

Autogun is a slot machine. You have to spin to win.

1.  **Strategy:** Don't look for a specific sound (e.g., "I need a bass"). Autogun is bad at basics.
2.  **Target:** Look for **textures**, **atmospheres**, and **bells**.
3.  **Workflow:**
    *   Set a loop in the Playlist.
    *   Click the "Next Preset" arrow.
    *   **Star It:** If it's even remotely good, save it as a preset in the Plugin Wrapper immediately.
    *   **Why:** There is no "Previous" button history. If you skip a good one, it feels bad.

## 2. Converting to Ogun (Advanced Sound Design)

If you own the full version of Ogun, Autogun is your "Randomizer" button.

1.  **Step 1:** Browse Autogun until you find a timbre you like (e.g., a metallic rasp).
2.  **Step 2:** Click the **?** or **Options** button -> "Enter preset number" -> Copy the number.
3.  **Step 3:** Open **Ogun**.
4.  **Step 4:** Options -> Paste the number.
5.  **Step 5:** Now you can:
    *   Change the Filter envelope (Autogun usually has none).
    *   Add Unison (Autogun is usually simple).
    *   Lower the "Richness" to save CPU.

## 3. Layering "Magic"

Autogun's "Magic Dust" knob is a maximizer.

1.  **Layering 101:** You want to layer an Autogun pad with a Saw synth.
2.  **Problem:** Autogun is too dynamic/quiet relative to the Synth.
3.  **Fix:** Turn **Magic Dust** to 60%.
4.  **Result:** The average volume increases, pushing the Autogun texture to the front of the mix.

## 4. CPU Optimization

Autogun can be heavy.

1.  **Symptom:** Crackling audio on chords.
2.  **Cause:** High polyphony + High Harmonic count (Richness).
3.  **Fix 1:** Go to the Wrapper Settings -> Processing -> **"Allow smart disable"**.
4.  **Fix 2:** Bounce to Audio. Autogun is the #1 candidate for "Freeze/Consolidate" in FL Studio because its internal engine calculates thousands of harmonics per voice.

```

---

## FILE: 03-Workflows\by-context\metallic-texture-hunting.md

```markdown
# Metallic Texture Hunting

**Context:** Creating foley, industrial percussion, or glitch assets.

### The Technique
Autogun's additive engine creates inharmonic partials that mimic physical materials (bells, pipes, sheets of metal).

### Workflow
1.  **Range:** Try presets around **42,000,000+** (Random seed ranges often vary in density).
2.  **Quality:** Set to **Draft**. Lower quality sometimes introduces aliasing that sounds more "metallic" and cold.
3.  **Playing:** Play very short staccato notes in the high register (C6+).
4.  **Sampling:** Record 2 minutes of randomizing/playing into Edison.
5.  **Post-Process:** Use a transient shaper to boost the attack of these metallic clicks.
6.  **Use Case:** These make incredible layers for snare drums or mechanical UI sound effects.

```

---

## FILE: 03-Workflows\by-context\sci-fi-atmospheric-generation.md

```markdown
# Sci-Fi Atmospheric Generation

**Context:** Scoring a film or game scene set in space or an alien landscape.

### The Autogun Approach
Autogun is ideal for "unknowable" textures because it lacks standard oscillator shapes.

### Workflow
1.  **Preparation:** Add a huge reverb (Fruity Reeverb 2 or LuxeVerb) *after* Autogun. Decay > 6s.
2.  **The Search:** Focus on the **1000-2000** preset range (often richer harmonics).
3.  **Magic Dust:** Set to **50%**. You want some shimmer, but not total distortion.
4.  **Performance:** Play slow octaves (e.g., C3 and C4) with a slow attack string/pad style.
5.  **Curation:** When you find a sound that sounds like "bowing metal" or "glass," save the preset number.
6.  **Variation:** Automate the Volume fader slowly to create swells.

```

---

## FILE: 03-Workflows\by-goal\bass-sound-creation.md

```markdown
# Goal Workflow: Bass Sound Creation (Sub & Grit)

*Goal: Finding and tuning a heavy, characteristic bass sound for modern Hip-Hop.*

## 🎛️ Routing Context
- **Routing**: Autogun -> Mixer Track -> Fruity Soft Clipper.

## 🚶 Step-by-Step Setup
1. **The Search**:
   - Randomize until you find a seed that is naturally "low" and "heavy."
   - *Logic*: You are looking for a seed that sounds like a Bass or a Sub.
2. **The "Clean Sub" (Freq)**:
   - Lower the **Freq** knob to roughly 200Hz (9 o'clock).
   - *Result*: This removes the digital "fizz" and focuses the energy on the sub-bass foundation.
3. **The Harmonic "Bark" (AM)**:
   - Increase the **AM** knob slowly while playing your MIDI notes.
   - *Listen For*: A "growling" or "distorted" harmonic added to the sub.
4. **The Sustain (Rel)**:
   - Maximize the **Release** knob for long, melodic sub-slides.
5. **The Final Polish**:
   - In the Mixer, use an EQ to boost 50Hz by +2dB.
   - *Result*: A unique, synthesized bass that hits with the power of a standard 808 but has a purely unique harmonic texture.

## 🔄 Variations
- **The "Plucky" Bass**: Set **Release** to 10% for a short, percussive bass hit.
- **The "Alien" Growl**: Set **Res** to 50% to add a metallic resonant peak to the bass.

## ⚠️ Pitfalls & Fixes
- **Problem**: Sub-bass is too muddy.
- **Fix**: Lower the **AM** knob or use a High-Pass filter at 30Hz to clean the extreme lows.

```

---

## FILE: 03-Workflows\by-goal\building-a-personal-library.md

```markdown
# Building a Personal Library

Since Autogun has no "Favorites" browser, you must create your own:
- **Keep a Log:** Maintain a text file or spreadsheet with columns for `Number`, `Category` (Pad/Lead/Bass), and `Description`.
- **Winning Numbers:**
  - *Metallic Bell:* 1024
  - *Alien Swell:* 88888
  - *Industrial Grime:* 666
- **Recall:** Simply type these numbers back into the ID box to recall the sound instantly in any project.

```

---

## FILE: 03-Workflows\by-goal\from-autogun-to-pro-sound.md

```markdown
# From Autogun to Pro Sound (Ogun Workflow)

**Goal:** Edit an Autogun sound you like.

1. Find a sound in Autogun (e.g., Preset 999).
2. Copy the number `999`.
3. Load **Ogun**.
4. Click Options (arrow) > **"Enter random preset number"**.
5. Paste `999`.
6. **Result:** The complex harmonics of the Autogun sound are now visible and editable in Ogun's harmonic mapping panel.
7. **Note:** Ensure Autogun's "Magic Dust" was at 0% if you want the *exact* dry sound, or add Soundgoodizer to Ogun's mixer track.

```

---

## FILE: 03-Workflows\by-goal\lead-sound-creation.md

```markdown
# Goal Workflow: Lead Sound Creation (The Hook)

*Goal: Discovering and refining an energetic hook synth that cuts through a dense mix.*

## 🎛️ Routing Context
- **Routing**: Autogun -> Mixer Track.
- **Mixer Chain**: Fruity Chorus -> Fruity Delay 3 -> LuxeVerb.

## 🚶 Step-by-Step Setup
1. **The Discovery**:
   - Randomize until you find a sound that is bright and melodic.
   - *Logic*: You are looking for something with "Lead" energy.
2. **The "Bite" (Freq & Res)**:
   - Crank **Freq** to 80%.
   - Set **Res** to 30%.
   - *Result*: This emphasizes the high-mid "Presence" range, making the lead jump forward in the mix.
3. **The Texture (AM)**:
   - Tweak the **AM** knob. Find the point where the sound has the most "shimmer."
4. **The Response (Rel)**:
   - Set **Release** to 20%.
   - *Move*: This ensures the lead stops quickly after you let go of the key, allowing for fast, technical Trap melodies.
5. **The Space**:
   - Add a wide **Fruity Chorus** in the mixer to thicken the digital engine.
   - Add **LuxeVerb** in "Plate" mode at 15% mix.

## 🔄 Variations
- **The "High Whistle"**: Use a very high-pitched seed and set **Res** to maximum.
- **The "Industrial" Hook**: Use a distorted seed and add a **Fruity Fast Dist** in the mixer.

## ⚠️ Pitfalls & Fixes
- **Problem**: Lead is too "thin."
- **Fix**: Layer it with a simple Square wave from **3x Osc** to provide a solid tonal body.

```

---

## FILE: 03-Workflows\by-instrument\atmospheric_sound_design.md

```markdown
# Instrument Workflow: Atmospheric Sound Design (Spectral Clouds)

*Goal: Using the Granular and FM engines of Autogun to create vast, evolving background textures.*

## 🎛️ Routing Context
- **Setup**: Autogun -> Mixer Track.
- **FX Rack**: High-Pass Filter -> LuxeVerb (Space Mode) -> Delay.

## 🚶 Step-by-Step Setup
1. **The Search**:
   - Randomize until you find a sound that is long, complex, and "washy."
   - *Logic*: You are looking for a seed that sounds like a Pad or a Texture.
2. **The "Shadow" (Freq)**:
   - Lower the **Freq** to 30%.
   - *Result*: This removes the transients and creates a dark, muffled atmosphere.
3. **The "Evolution" (AM)**:
   - Link the **AM** knob to a slow Sine LFO (via Peak Controller).
   - *Result*: The internal engine will slowly morph its complexity, making the pad feel "alive" and breathing.
4. **The Fade (Rel)**:
   - Set **Release** to 100% (Maximum).
   - *Move*: This ensures the sound trails off for several seconds after the MIDI note ends.
5. **The Clean-Up**:
   - In the Mixer, use a High-Pass filter at 300Hz.
   - *Why*: This ensures your background atmosphere doesn't muddy your kick and bass.
6. **The Immersion**:
   - Add **LuxeVerb** in "Space" mode with 50% Mix.

## 🔄 Variations
- **The "High-Frequency Ghost"**: Set Freq to 80% but keep the High-Pass at 2kHz. This adds a "haunting" air layer.
- **The "Digital Glitch"**: Use an FM-heavy seed and set **AM** to a fast Random LFO.

## ⚠️ Pitfalls & Fixes
- **Problem**: CPU Overload.
- **Fix**: Atmospheric seeds in Autogun can be CPU heavy. Record your pad to an audio clip (Freeze) to save resources.

```

---

## FILE: 03-Workflows\by-instrument\instrument_hunting.md

```markdown
# Autogun for Specific Instruments

## Using Autogun for Pads
- Search for presets with a "washing" or "hissing" tail.
- Use a long Release time in the ADSR (if using the Ogun transfer method).
- Add external Chorus for even more width.

## Using Autogun for Leads
- Look for "Tine" or "Strike" sounds in the description area.
- Add a fast Delay (Fruity Delay 2) to give it a "physical" space.
- Autogun leads are often very bright; use a Low Pass filter to tuck them into the mix.

## Using Autogun for SFX
- Search for dissonant, inharmonic sounds.
- Autogun is perfect for "Alien Computer" or "Space Station" background beeps.
- Use the "Random" button while recording into Edison to create a library of 100 glitch hits in seconds.

```

---

## FILE: 03-Workflows\by-instrument\percussion_mining.md

```markdown
# Autogun Percussion Mining

**Goal:** Using Autogun as a drum source.

## The Workflow
1. Open Autogun and Edison.
2. Set Autogun to a very short decay (if using the Ogun method) or just play very short MIDI notes.
3. Click "Random" while triggering a C5 note.
4. **Target:** Look for presets that sound like "thumps", "clicks", or "splashes".
5. **Collection:** Record the hits into Edison.
6. **Result:** You can build an entire drum kit from Autogun seeds that sounds completely different from standard TR-808 samples.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log

1.  **Image-Line FL Studio Reference Manual - Autogun**
2.  **FutureProducers Forums (Preset Seed Discussions)**
3.  **Community Ogun Transfer Guides**

```

---

## FILE: 04-Reference\01_Official_Links.md

```markdown
# Official Links

- [Autogun Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Autogun.htm)
- [Ogun Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Ogun.htm)

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Multi-Engine Synth)

Sourced applications of advanced sound discovery in modern production.

## 1. Experimental Trap / Psychedelic Rap
- **Source**: Mike Dean / Travis Scott style.
- **Application**: FM-based leads with automated AM depth and heavy external distortion.
- **Vibe**: Disorientation, futuristic aggression, and "alien" sonic character.

## 2. Modern R&B / Alternative R&B
- **Source**: SZA / Frank Ocean / 40.
- **Application**: Granular pads with very low Cutoff (Freq). Slow volume swells.
- **Vibe**: Intimacy, atmospheric weight, and lush "cloud" backgrounds.

## 3. Dark "Underground" Hip-Hop
- **Source**: Griselda / JPEGMAFIA.
- **Application**: Bit-crushed or distorted seeds with high Resonance (Res) and fast rhythmic gating.
- **Vibe**: Grittiness, low-fidelity soul, and intense digital pressure.

## 4. Pop-Rap / Hyperpop
- **Source**: Sophie / 100 gecs style.
- **Application**: High-pitched bell seeds with fast pitch LFOs and 100% dry output.
- **Vibe**: Energy, "sparkle," and crystalline digital clarity.

```

---

## FILE: 04-Reference\quality-modes-impact.md

```markdown
# Quality Modes Impact

Autogun provides four quality modes in its Options menu. These determine the number of harmonics calculated and the interpolation quality.

## 1. Draft
- **Behavior:** Calculates a reduced set of harmonics.
- **CPU:** Extremely low.
- **Audio:** Thinner sound, potential aliasing at high frequencies.
- **Use Case:** Rapidly clicking through the 4 billion presets without lagging the project.

## 2. Good
- **Behavior:** Standard additive synthesis resolution.
- **CPU:** Moderate.
- **Audio:** Full frequency range, clean output.
- **Use Case:** Standard composition and arrangement.

## 3. High
- **Behavior:** Increased harmonic accuracy and better internal envelopes.
- **CPU:** High.
- **Audio:** Richer textures, especially for long evolving pads.
- **Use Case:** Critical listening and sound selection.

## 4. Pristine
- **Behavior:** Full 32,767 harmonic calculation with maximum interpolation.
- **CPU:** Very High (can cause underruns on complex presets).
- **Audio:** Flawless reproduction of the Ogun engine.
- **Use Case:** Rendering/Exporting the final track.

```

---

## FILE: 04-Reference\synthesis-specifications.md

```markdown
# Technical Reference: Synthesis Specifications

A detailed look at the Autogun multi-engine core. [SRC: IL-MAN]

## 1. The Multi-Engine Architecture
Autogun is a front-end for the **Ogun** synthesis engine. It reconfigures its internal nodes based on the 32-bit seed number.
- **Engine Types**: Includes Additive, Subtractive, FM, Granular, and Physical Modeling.
- **Complexity**: Some seeds utilize over 32,000 harmonic additive partials.

## 2. Parameter Interpolation
- The **Freq**, **Res**, and **AM** knobs utilize high-quality interpolation. 
- **Effect**: You can automate these knobs in real-time without hearing digital "zipper noise" or clicks.

## 3. Polyphony & Voice Stealing
- Autogun is polyphonic. The number of active voices is managed internally to prevent CPU crashes.
- **Wrapper Interaction**: You can limit polyphony or enable "Mono" mode in the Channel Wrapper settings if needed for specific lead sounds.

## 4. The "AM" Logic (Unverified)
- **The Mystery**: The "AM" knob has a different function for every engine type. 
- **Observed Behavior**: In FM-heavy seeds, it acts as a **Modulation Index**. In Granular seeds, it often acts as **Grain Density**. In Analog seeds, it acts as **Saturation/Drive**. [UNVERIFIED - Empirical observation]

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Autogun Mechanics

## 1. The 4 Billion Seeds

*   **Total Presets:** 4,294,967,296 ($2^{32}$).
*   **Mechanism:** This is a 32-bit integer limit.
*   **What is a Seed?** The number isn't just an index; it's the input value for a pseudo-random number generator (PRNG) that determines:
    *   Harmonic Amplitudes (timbre).
    *   harmonic Phases (metallic vs liquid).
    *   Envelopes (volume/filter shape).

## 2. Synthesis Engine (Additive)

*   **Method:** Inverse Fast Fourier Transform (iFFT).
*   **Harmonic Count:** Up to 32,767 harmonics.
*   **Comparison:** A standard Subtractive synth (3x Osc) has ~10-20 audible harmonics. Autogun has thousands.
*   **PADsynth:** This algorithm (developed by Paul Nasca) takes the discrete harmonics and "smears" them into a continuous band. This removes the "metallic buzz" of naive additive synthesis and creates "choir-like" textures.

## 3. Magic Dust (The Maximizer)

*   **Engine:** Based on **Soundgoodizer** (which is based on **Maximus**).
*   **Curve:** It applies a preset compression curve (likely Soundgoodizer Preset A or C).
*   **Effect:**
    *   Upward Compression (boosts quiet tails).
    *   Saturation (adds warmth).
    *   Limiting (prevents clipping).

## 4. CPU & FFT Performance

*   **Load Type:** Non-linear.
*   **Behavior:** The CPU hit happens primarily at the **Voice Start**. The engine must calculate the iFFT wavetable for that specific note's frequency.
*   **Implication:** Playing fast arpeggios (many new notes) stresses the CPU more than holding a long chord (sustain), contrary to standard sample playback.

```

---

