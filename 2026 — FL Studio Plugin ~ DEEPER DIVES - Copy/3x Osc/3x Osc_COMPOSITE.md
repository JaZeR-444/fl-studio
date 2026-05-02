# 3x Osc - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# 3x Osc - Advanced Oscillator Synthesizer

`\`\`
██╗  ██╗███████╗██╗   ██╗██████╗ ███████╗██████╗ 
██║  ██║██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗
███████║█████╗   ╚████╔╝ ██████╔╝█████╗  ██████╔╝
██╔══██║██╔══╝    ╚██╔╝  ██╔═══╝ ██╔══╝  ██╔══██╗
██║  ██║███████╗   ██║   ██║     ███████╗██║  ██║
╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝     ╚══════╝╚═╝  ╚═╝
     ██████╗ ███████╗███████╗████████╗███████╗███╗   ███╗
    ██╔════╝ ██╔════╝██╔════╝╚══██╔══╝██╔════╝████╗ ████║
    ██║      █████╗  ███████╗   ██║   █████╗  ██╔████╔██║
    ██║      ██╔══╝  ╚════██║   ██║   ██╔══╝  ██║╚██╔╝██║
    ╚██████╗███████╗███████║   ██║   ███████╗██║ ╚═╝ ██║
     ╚═════╝╚══════╝╚══════╝   ╚═╝   ╚══════╝╚═╝     ╚═╝
`\`\`

**Plugin Type:** Advanced Oscillator Synthesizer
**Category:** Instrument
**Official Manual:** [Image-Line 3x Osc Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/3x%20Osc.htm)

---

## 🌊 What is 3x Osc?

3x Osc is FL Studio's advanced oscillator synthesizer that provides three independent oscillators with extensive waveform manipulation capabilities. It offers professional-grade subtractive synthesis with comprehensive modulation options, making it ideal for creating complex sounds for hip-hop, rap, and R&B production.

**Key Capabilities:**
- Three independent oscillators with extensive controls
- Comprehensive waveform manipulation and synthesis
- Advanced modulation matrix with multiple sources
- Professional-grade filter and envelope controls
- Extensive sound design capabilities

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review official manual sections on oscillator synthesis
3. Create **parameter-cheat-sheet.md** with all controls
4. Test oscillator synchronization and modulation

### For Synthesizer Users:
1. Review **oscillator-workflows.md** (to be created)
2. Study **sound-design-guide.md**
3. Learn **modulation-matrix-workflows.md** workflows

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - Oscillator controls and parameters
  - Waveform selection and shaping
  - Filter and envelope parameters
  - Modulation matrix controls
  - Output and routing options

- [ ] **oscillator-workflows.md**
  - Basic oscillator programming process
  - Waveform selection and shaping techniques
  - Filter and envelope programming
  - Modulation matrix setup
  - Sound design workflows

#### 02-Data/parameters/
- [ ] **3xosc-params.json**
  `\`\`json
  {
    "plugin_name": "3x Osc",
    "category": "Instrument",
    "parameters": [
      {
        "name": "Oscillator 1 Waveform",
        "type": "selector",
        "options": ["Sine", "Triangle", "Sawtooth", "Square", "Noise"],
        "description": "Oscillator 1 waveform selection",
        "use_cases": ["sound_design", "waveform_selection", "oscillator_sync"]
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
  - Oscillator capabilities and limitations
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
**Goal:** Understand oscillator synthesis and basic sound creation

**Tasks:**
1. Test different oscillator waveforms in 3x Osc
2. Create basic synthesizer patches
3. Document parameter-cheat-sheet.md
4. Experiment with filter and envelope controls

**Key Questions to Answer:**
- How do the three oscillators work together?
- What waveform options are available?
- How do you program filters and envelopes?
- What modulation options exist?

### Phase 2: Practical Application (Week 2)
**Goal:** Learn genre-appropriate synthesis techniques

**Tasks:**
1. Create hip-hop bass sounds with 3x Osc
2. Design R&B pad sounds using subtractive synthesis
3. Test advanced modulation techniques
4. Create workflow guides

**Key Questions to Answer:**
- Which waveforms work best for hip-hop?
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

### Oscillator Features
- Three independent oscillators with individual controls
- Multiple waveform options (sine, triangle, sawtooth, square, noise)
- Oscillator synchronization capabilities
- Detuning and pitch modulation options
- Ring modulation and other advanced features

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
- CPU usage by oscillator count and features
- Memory consumption
- Latency characteristics
- Multi-core optimization
- Real-time performance capabilities

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do the three oscillators work together?
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
1. Oscillators not synchronizing correctly?
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

3x Osc often used alongside:
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
3. Create basic oscillator patches
4. Experiment with different waveforms

### Intermediate (Week 1-2)
1. Study oscillator-workflows.md
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
1. Open 3x Osc in FL Studio
2. Load a basic oscillator patch
3. Test different waveform combinations
4. Experiment with filter controls

**This Week (2-3 hours):**
1. Create parameter-cheat-sheet.md
2. Test all oscillator options systematically
3. Create 3xosc-params.json
4. Document one complete workflow

**This Month (10+ hours):**
1. Complete all Priority 1 files
2. Create synth-presets.json
3. Write 3 workflow guides
4. Test with real production scenarios

---

## 💡 Research Tips

1. **Oscillator Testing:** Try all waveform combinations
2. **Filter Experimentation:** Test different filter types and settings
3. **Modulation Exploration:** Experiment with LFO and envelope modulation
4. **Genre Applications:** Focus on hip-hop, rap, and R&B
5. **Sound Design:** Explore creative synthesis techniques

---

## 📦 File Structure Summary

`\`\`
3x Osc/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── oscillator-workflows.md
│   └── Tutorials/
│       └── first-time-setup.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── 3xosc-params.json ⭐ HIGH PRIORITY
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
- [3x Osc Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/3x%20Osc.htm)
- [3x Osc Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+3x+osc+tutorial)
- [3x Osc User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)

### Community Resources
- [3x Osc Subreddit](https://www.reddit.com/r/FL_Studio/search?q=3x+osc&restrict_sr=1)
- [Subtractive Synthesis Community](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Synthesis Resources
- **Classic Synthesizers:** Moog, ARP, Roland emulation
- **Hip-Hop Sounds:** Bass, leads, pads, strings
- **R&B Sounds:** Pads, strings, organs, brass
- **Electronic Sounds:** Leads, arps, textures, effects

### Technical Analysis Tools
- **Fruity Parametric EQ 2:** For sound analysis
- **Fruity Convolver:** For spatial effects
- **Patcher:** For complex routing
- **Fruity Formula Controller:** For mathematical modulation

### Recommended Learning Materials
- "Subtractive Synthesis Fundamentals" - Understanding oscillator synthesis
- "Hip-Hop Sound Design" - Genre-specific synthesis techniques
- "Modulation Matrix Techniques" - Advanced modulation approaches

### Advanced Techniques
- **Oscillator Sync:** Creating metallic and bell-like sounds
- **Ring Modulation:** Creating inharmonic textures
- **Filter Modulation:** Creating evolving textures
- **Envelope Programming:** Dynamic sound shaping

## 📚 In-Depth Technical Analysis

### Oscillator Architecture
3x Osc provides professional-grade oscillator synthesis:

**Oscillator Design:**
- Three independent oscillators with individual controls
- Multiple waveform options per oscillator
- Oscillator synchronization capabilities
- Detuning and pitch modulation options
- Ring modulation and other advanced features

**Waveform Generation:**
- Classic waveforms (sine, triangle, sawtooth, square)
- Noise generation capabilities
- Waveform shaping and morphing
- Harmonic content control
- Spectral manipulation options

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

### Oscillator Controls
- **Waveform Selection:** Choose from sine, triangle, sawtooth, square, noise
- **Frequency:** Set oscillator frequency (pitch)
- **Detune:** Fine-tune oscillator for detuning effects
- **Sync:** Synchronize oscillators for metallic sounds
- **Mix:** Balance between oscillators

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
3x Osc excels in hip-hop production scenarios:
- **Bass Sounds:** Classic subtractive bass synthesis
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
Creative uses of 3x Osc's synthesis capabilities:
- **Oscillator Sync:** Creating metallic and bell-like sounds
- **Ring Modulation:** Creating inharmonic textures
- **Filter Modulation:** Creating evolving textures
- **Envelope Programming:** Dynamic sound shaping

### Sound Design Experiments
Advanced sound design techniques:
- **Granular Synthesis:** Using oscillators for granular textures
- **FM Synthesis:** Using oscillators for frequency modulation
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
Incorporating 3x Osc into existing workflows:
- **Template Integration:** Starting projects with 3x Osc
- **Session Management:** Organizing 3x Osc projects
- **Backup Strategies:** Protecting patch and project work
- **Collaboration:** Sharing work with others

## 🎧 Genre-Specific Applications

### Hip-Hop
- **Bass Sounds:** Classic subtractive bass synthesis
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
3x Osc works well with synthesis processing tools:
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
3x Osc was developed as FL Studio's premium subtractive synthesizer:
- Created to provide professional-grade synthesis
- Designed for both classic and modern synthesis
- Developed with professional sound designers in mind
- Intended to rival standalone synthesizers

### Evolution Through FL Studio Versions
- Initially introduced with basic oscillator synthesis
- Enhanced with advanced filter capabilities
- Improved with better modulation options
- Expanded with more waveform options

### Impact on Music Production
3x Osc has influenced music production by:
- Providing accessible subtractive synthesis
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
Managing 3x Osc's impact on system performance:
- **Oscillator Count:** More oscillators increase CPU usage
- **Filter Processing:** Complex filters increase CPU usage
- **Modulation Complexity:** Complex modulation increases usage
- **Polyphony:** More voices require more processing
- **Optimization Strategies:** Techniques for reducing usage

### Memory Usage
Managing RAM consumption:
- **Patch Complexity:** Complex patches consume more memory
- **Oscillator Memory:** Oscillator settings use memory
- **Filter Memory:** Filter settings use memory
- **Modulation Memory:** Modulation settings use memory
- **Buffer Management:** Efficient memory allocation

### Optimization Strategies
Techniques for optimizing performance:
- **Oscillator Simplification:** Using fewer oscillators when possible
- **Filter Optimization:** Using simpler filters when possible
- **Modulation Management:** Using modulation judiciously
- **Voice Management:** Controlling polyphony appropriately
- **Buffer Management:** Optimizing buffer settings

## 🛠️ Troubleshooting Common Issues

### Oscillator Problems
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
- **Oscillator Mapping:** Efficient oscillator usage
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
- **FL Studio Forums:** Discussions about 3x Osc techniques
- **Reddit Groups:** Sharing synthesis techniques and patches
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced techniques
- **Written Guides:** In-depth articles on synthesis
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Patch Libraries:** Websites hosting 3x Osc patches
- **Sound Collections:** Collections of synthesizer sounds
- **Educational Content:** Tutorials and sample packs

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create complex synthesizer patches with 3x Osc
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

*This research framework ensures comprehensive documentation of 3x Osc for producers, sound designers, and synthesizer enthusiasts.*
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: 3x Osc

## Purpose & Identity
3x Osc is FL Studio's legendary **subtractive synthesizer**. Its primary identity is simplicity and efficiency. While it looks basic, it is the industry standard for creating the **cleanest sub-basses** and classic "analog" synth textures. It uses three independent oscillators that can be mixed and detuned to create everything from simple whistles to thick supersaws. [SRC: IL-MAN]

## 60-Second Mental Model
Think of it as "The Raw Material Factory." You have 3 basic shapes (Sine, Saw, Square, etc.). You mix them together, tune them to different octaves, and then send them to the "Finishing School" (the Wrapper settings) where they get filtered and shaped by envelopes.

## Hip-Hop / R&B Context
- **The "Pure" Sub:** Using Oscillator 1 as a single Sine wave for a perfectly clean sub-bass that never muddies the mix (Moody).
- **G-Funk Whistle:** Using a high-pitched Sine wave with a long glide (Portamento) for that classic West Coast lead (Upbeat).
- **Lo-Fi Organ:** Layering three Sine waves at intervals (Root, +7 semitones, +1 Octave) for a soulful R&B texture (Jazzy/Vibey).

## When To Use
- When you need a **Sub-Bass** that won't clash with other instruments.
- When you want to learn the **basics of synthesis** without being distracted by complex UI.
- When you need a **low-CPU** sound source for massive layered projects.

## When NOT To Use
- **Complex Sound Design:** Use **Sytrus** or **Harmor** if you need FM synthesis, resynthesis, or 100+ oscillators.
- **Natural Instruments:** 3x Osc is strictly electronic. Use **FLEX** or **DirectWave** for pianos, guitars, or strings. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: 3x Osc

## UI Tour
The plugin interface is categorized by the three oscillators. [SRC: IL-MAN]

### 1. Oscillator Sections (1, 2, 3)
- **Waveform Selector**: Sine, Triangle, Sawtooth, Square, Pulse, Rounded-Saw, Noise.
- **Invert Switch**: Flips the phase of the oscillator.
- **Volume**: Level of the oscillator (Osc 1 is always 100% by default).
- **Phase Offset**: Adjusts the starting point of the waveform.
- **Detune**: Fine-tuning (-100 to +100 cents).
- **Coarse Tune**: Pitch shifting in Semitones.

### 2. Mixer Section
- **AM (Amplitude Modulation)**: Oscillator 3 modulates the volume of Osc 1 and 2.
- **Stereo Phase**: Offsets the phase between Left and Right channels for width.

### 3. The "Hidden" Logic (Wrapper Tabs)
*Crucial: The following are part of the FL Studio Channel Wrapper, not the 3x Osc window itself:*
- **INS (Instrument)**: Envelope, LFO, and Filter settings.
- **MISC**: Polyphony, Arpeggiator, and Key tracking.

## Signal Flow
1. **Trigger**: MIDI note is received.
2. **Generation**: Three oscillators generate waveforms simultaneously.
3. **Phase/Invert**: Phase offsets are applied.
4. **Summing**: The signals are mixed (with optional AM from Osc 3).
5. **Wrapper Processing**: The combined signal passes through the Channel Wrapper's Filter and ADSR Envelopes.
6. **Output**: Final signal leaves the Channel Rack for the Mixer.

## Things Beginners Misunderstand
- **"Osc 1 doesn't have a volume knob"**: Osc 1 is the "Master" oscillator. You balance Osc 2 and Osc 3 against it.
- **"It sounds too plain"**: 3x Osc relies on **Detuning**. By setting Osc 2 to +5 cents and Osc 3 to -5 cents, you create the "Unison" thickness found in professional synths.
- **Filter**: If you don't enable the Filter in the **INS** tab, the sound will be very bright and "raw."

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: 3x Osc

## 1. The "Unison" Thickener
Make a simple saw lead sound massive.
- **Technique**: Set Osc 1 and Osc 2 both to **Sawtooth**.
- **Move**: Set Osc 2 Fine Tune to **+10 cents**.
- **Listen For**: A "beating" or "chorusing" effect that adds movement and width.

## 2. Low-End Foundation (The Sub Sine)
Create a sub-bass that never clips.
- **Technique**: Use only **Oscillator 1**. Set it to **Sine**.
- **Move**: Go to the **INS** tab -> **VOL** sub-tab. Set a long **Release** time.
- **Goal**: A sub-bass that follows your 808 patterns but stays perfectly clean and consistent.

## 3. High-Pass Texture (White Noise)
Add "air" or "grit" to a sound.
- **Technique**: Use Osc 3 set to **Noise**.
- **Move**: Turn the Osc 3 volume very low (~10%).
- **Result**: Adds a layer of harmonic texture that makes digital synths feel more "analog" or "vinyly."

## 4. Amplitude Modulation (AM)
Create aggressive, industrial textures.
- **Technique**: Set Osc 1 to Sine. Set Osc 3 to Square.
- **Move**: Turn the **AM** switch ON. Crank the volume of Osc 3.
- **Result**: Osc 3 "chops" the volume of Osc 1 at audio rates, creating a gritty, distorted character.

## 5. Mono-Check Protocol (Stereo Phase)
- **Protocol**: If you use the **Stereo Phase** knob to create width.
- **Action**: Check your mix in Mono. 
- **Why**: 3x Osc's internal widening works by shifting phase. In extreme cases, the sound will completely disappear in mono.
- **Fix**: Lower the Stereo Phase knob until the sound remains solid in the center. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **Harsh Highs** | Enable the **Low Pass Filter** in the INS tab. |
| **"Clicking" Starts** | Increase the **Attack** time in the VOL envelope slightly (~2ms). |
| **Weak Bass** | Ensure only ONE oscillator is providing the sub frequencies. Don't detune your lowest oscillator. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Synthesis_Guide.md

```markdown
# Vibe Synthesis Guide: 3x Osc

Translating geometric waveforms into specific Hip-Hop and R&B aesthetic targets.

---

## 1. MOODY
*Darkness, weight, and "heavy" atmospheres.*
- **The Lever**: **Sine Foundation + Deep LP Filtering**.
- **Move**: Osc 1: Sine. Osc 2: Triangle (Detuned -5c). INS Tab: LP Filter at 500Hz.
- **What to Listen For**: A heavy, muffled sound that feels like a weight being dropped on carpet. It provides the sub-foundation without being distracting.
- **Don't Do This**: High resonance (too energetic).

## 2. UPBEAT
*Energy, sharp transients, and rhythmic drive.*
- **The Lever**: **Square Wave + Fast ADSR Decay**.
- **Move**: Osc 1: Square. Osc 2: Saw (+7 Semitones). VOL Env: Decay at 200ms, Sustain at 0%.
- **What to Listen For**: A sharp, percussive "knock" that hits the chest. The fast decay ensures the synth stays out of the way of the drums.
- **Don't Do This**: Long sustain (it slows the energy down).

## 3. PSYCHEDELIC
*Disorientation, shifting textures, and "melting" soundscapes.*
- **The Lever**: **Pitch LFO + Detuned Saw Stacks**.
- **Move**: Osc 1, 2, 3 all Saws (Detuned +5, 0, -5). INS Tab: Pitch LFO at 2Hz with moderate depth.
- **What to Listen For**: The pitch seems to "melt" and swirl. The wide detuning creates a liquid landscape that feels larger than the speakers.
- **Don't Do This**: Symmetrical detuning without LFO (too static).

## 4. JAZZY
*Warmth, subtle focus, and "organic" soul.*
- **The Lever**: **Triangle Wave + Slow Release + No Noise**.
- **Move**: Osc 1: Triangle. Osc 2: Sine (+12 Semitones). Muffled LP Filter at 1kHz. 
- **What to Listen For**: A rounded, warm tone that mimics the sound of a vintage organ or clean electric piano. It should sound "soulful" and "woodwind-like."
- **Don't Do This**: Using the Square wave (too digital).

## 5. VIBEY
*Modern luxury, expensive sheen, and smooth motion.*
- **The Lever**: **Rounded Saw + Stereo Phase + 10k Shelf**.
- **Move**: Osc 1: Rounded Saw. Stereo Phase at 20%. Add external Reverb. High Shelf EQ at 10kHz.
- **What to Listen For**: A wide, "silky" pad that feels modern and professional. The rounded saw provides the character without the harshness of a standard saw.
- **Don't Do This**: Using 100% "Dry" synthesis (needs some saturation to sound "expensive").

---

## Vibe Parameter Matrix
| Vibe | Primary Wave | Detune | Filter Cutoff | ADSR Character |
| :--- | :--- | :--- | :--- | :--- |
| **Moody** | Sine | None | Low (500Hz) | Long Release |
| **Upbeat** | Square | +7st | Open | Fast Decay |
| **Psyched**| Saw | Heavy | Mod | Slow LFO |
| **Jazzy** | Triangle | Subtle | Mid (1.2kHz) | Natural |
| **Vibey** | Rounded Saw | Mod | High | Smooth Swell |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: 3x Osc

3x Osc translates vibes through **Waveform Purity** and **Inter-Oscillator Detuning**.

## 1. Moody (Dark, Deep, Submerged)
- **Concept:** "The Pure Sine Sub."
- **Levers:**
  - **Osc 1:** Sine Wave.
  - **Osc 2 & 3:** Turned OFF (Mix knobs at 0).
  - **Filter:** (In Wrapper) Low Pass @ 100Hz.
- **Listen For:** A pressure-like vibration that you feel in your chest rather than hear in your ears.
- **Don't Do This:** Don't use a Sawtooth; keep the harmonics minimal for a "Heavy" mood.

## 2. Upbeat (Kinetic, Sharp, Aggressive)
- **Concept:** "The G-Funk Whistle."
- **Levers:**
  - **Osc 1:** Sine or Triangle.
  - **Pitch:** +2 Octaves.
  - **Polyphony:** Mono (1 voice) with high Glide/Slide.
- **Listen For:** A piercing, laser-like lead that cuts through the loudest drums.

## 3. Jazzy (Warm, Soulful, Organic)
- **Concept:** "The Sine Organ."
- **Levers:**
  - **Osc 1:** Sine (Root).
  - **Osc 2:** Sine (+7 semitones) @ 30% volume.
  - **Osc 3:** Sine (+12 semitones) @ 20% volume.
- **Listen For:** A warm, hollow tone that mimics a Hammond organ, perfect for soulful R&B chords.

## 4. Melodic (Lush, Wide, Shimmering)
- **Concept:** "The Budget Supersaw."
- **Levers:**
  - **Osc 1 & 2:** Sawtooth.
  - **Detune:** Turn the "Coarse" and "Fine" knobs on Osc 2 slightly.
  - **Phase Offset:** Use the **Phase** knob in the Wrapper to widen the sound.
- **Listen For:** A thick, vibrating texture that fills the melodic space.

## 5. Psychedelic (Warped, Robotic, Inharmonic)
- **Concept:** "The AM/RM Scream."
- **Levers:**
  - **Osc 3:** Select "Noise" or "Square."
  - **Switch:** Toggle the **AM** (Amplitude Modulation) or **RM** (Ring Modulation) switch on the Osc 3 panel.
- **Listen For:** Metallic, non-musical resonances that sound like a robot talking. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: 3x Osc (5 Minutes)

1.  **Insert:** Load **3x Osc** from the Channel Rack.
2.  **Waveform:** By default, all 3 oscillators are Sine waves. Select the **Sawtooth** icon for a buzzier sound.
3.  **Mix:** Use the **OSC 2** and **OSC 3** mix knobs to blend them with the first oscillator.
4.  **Tune:** Use the **CRS** (Coarse) and **FINE** knobs to detune the oscillators for a "thicker" sound.
5.  **Finishing:** Click the **Plugin Cog Icon** (Wrapper Settings) -> **Envelope/Filter Tab**.
    - This is where you actually add the **ADSR Envelope** and **Filter** to 3x Osc.
6.  **Tip:** Osc 3 has special **AM** and **RM** switches for creating weird, psychedelic textures. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\channel-settings-integration.md

```markdown
# 3x Osc Channel Settings Integration

## The Missing Knobs
3x Osc is a "Legacy" plugin structure. It has no built-in Filter or ADSR envelopes on its main GUI.

## Where to find them:
1. Open the plugin window.
2. Click the **"INS" (Instrument)** tab in the FL Studio wrapper (the icon looks like an envelope/graph).
3. Here you can access:
   - **Envelope (VOL/PAN/MOD/PITCH/FILT):** Traditional ADSR.
   - **LFO:** Dedicated modulation.
   - **Filter:** Various types (LP, HP, BP, etc.) and slopes.

## Pro Tip:
If your 3x Osc sound is clicking at the start, go to the **VOL** envelope in this tab and increase the **ATT (Attack)** slightly.

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# 3x Osc: The Subtractive Synthesis Titan

> **Scope:** Synthesis Architecture, Anti-Aliasing, and Modulation.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** Low-Medium.

## 🧠 The "Fundamental" Concept
3x Osc is a lightweight, subtractive synthesizer. Its power comes not from complex filters (it has none internally), but from its integration with the Channel Settings (INS/MISC tabs) and its raw oscillator purity.

**Signal Flow:**
`Oscillators 1,2,3` -> **[AM MODULATION]** -> **[PHASE OFFSET]** -> **[DETUNE/PAN]** -> **[MIXING]** -> **[CHANNEL SVF FILTER]** -> **[OUTPUT]**

*   **Critical Nuance:** 3x Osc relies heavily on the **instrument channel settings** for envelopes (ADSR) and filtering. If you don't use the INS tab, it's just a raw drone generator.

---

## 🎛️ Section 1: Oscillator Architecture

### Shapes & Selection
| Shape | Harmonic Content | Best Use |
| :--- | :--- | :--- |
| **Sine** | Fundamental only. | Sub-bass, AM Modulator source. |
| **Triangle** | Odd harmonics (steep roll-off). | Flutes, soft leads. |
| **Square** | Odd harmonics (no roll-off). | Chip-tune, hollow bass. |
| **Saw** | All harmonics (Even + Odd). | Trance leads, Reese bass. |
| **Rounded Saw** | Softened harmonics. | Warm analog pads. |
| **Noise** | Random white noise. | Percussion, FX, "Air". |
| **Custom** | *Uses the Sample in the Channel.* | Single-cycle wavetable synthesis. |

### The Mix Logic (The "Ratio" Trap)
The mix knobs are not independent volume knobs. They are ratios.

*   **Osc 1:** Has NO mix knob. It is always the reference (100%).
*   **Osc 2:** Mixes *into* the sum. 50% = Equal volume with Osc 1.
*   **Osc 3:** Mixes *into* the sum of (1+2). 33% = Equal volume with (1+2).
*   **Math:** To get 3 equal oscillators, set Osc 2 to 50% and Osc 3 to ~33%.

---

## 🔁 Section 2: Phase & Detune Physics

### Phase Offset (The "Click" Maker)
*   **Knob:** Sets where the waveform starts (0 - 360 degrees).
*   **Stereo Offset:** The knob has a stereo deviation. Left channel starts at 0, Right at 180.
    *   **Result:** Extreme stereo width on headphones.
*   **Warning:** Non-zero phase starts can cause "Clicks" at the start of a note.
    *   **Fix:** Add 2ms of Attack in the INS envelope.

### Phase Invert (Cancellation)
*   **Switch:** Inverts the polarity.
*   **Use Case:** If Osc 1 is a Saw, and Osc 2 is an Inverted Saw at the same volume... Silence.
    *   **Modulation:** Slightly detuning Osc 2 creates a PWM (Pulse Width Modulation) effect as they drift in and out of cancellation.

---

## 🌊 Section 3: Advanced Features

### AM OSC 3 (Amplitude Modulation)
*   **Function:** Osc 3 stops making sound. instead, it modulates the volume of Osc 1+2.
*   **Physics:** This creates "Sidebands" (Sum and Difference frequencies).
*   **Result:** Bell tones, metallic textures, and aggressive growls.
*   **Tip:** Use a Sine wave on Osc 3 for clean ring modulation.

### HQ (Anti-Aliasing)
*   **Off:** Raw digital oscillators. High notes will "fold back" and create dissonant noise (Aliasing). Good for Chip-tune.
*   **On:** Band-limited oscillators. Clean up to 20kHz. Essential for modern leads.

---

## ⚡ Technical Specs: The "Custom" Shape

When you select the "Die" icon (Question mark or waveform icon depending on skin):

1.  **Source:** It looks at the **SMP** tab of the Channel Settings.
2.  **Usage:** Drag a single-cycle waveform (e.g., "Galbanum - Architecture Waveforms") onto the channel.
3.  **Result:** 3x Osc becomes a Wavetable Synthesizer. You can stack 3 copies of that wavetable, detune them, and filter them.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Reese" Bass
1.  **Osc 1:** Saw.
2.  **Osc 2:** Saw. Mix 50%.
3.  **Detune:** Fine tune Osc 2 by -15 cents. Fine tune Osc 1 by +15 cents.
4.  **Result:** Massive phasing movement.

### 2. The "Chip" Arp
1.  **Osc 1:** Square.
2.  **Osc 2:** Square. Mix 25%. Coarse Pitch +12 (Octave).
3.  **Osc 3:** Noise. Mix 10%.
4.  **HQ:** OFF (Crucial for the grit).
5.  **Envelope:** Short Decay, no Sustain.

### 3. The "Pseudo-FM" Bell
1.  **Osc 1:** Sine.
2.  **Osc 2:** Sine. Coarse +7 (Fifth).
3.  **Osc 3:** Sine. Coarse +12.
4.  **Mode:** Turn ON **AM OSC 3**.
5.  **Result:** Osc 3 vibrates Osc 1+2 creates metallic inharmonics.

```

---

## FILE: 01-Learning\Quick-Reference\oscillator-workflows.md

```markdown
# Quick Reference: Oscillator Workflows

A step-by-step process for building sounds in 3x Osc. [SRC: IL-MAN]

## 1. Initializing (The Clean Slate)
- Right-click the plugin header and select **Reset**.
- The sound will be a basic Sine wave on Oscillator 1.

## 2. Choosing the Texture
- Decide on your waveform. 
- **Saw** for leads/pads.
- **Sine/Triangle** for bass.
- **Noise** for textures.

## 3. The "Layer" Strategy
- **Layer 1**: Fundamental. (Osc 1).
- **Layer 2**: Character. (Osc 2 - usually detuned or an octave higher).
- **Layer 3**: Dirt or Width. (Osc 3 - noise or high-octave saw).

## 4. Setting the "Sculpt" (INS Tab)
- Go to the **INS** (Instrument) tab.
- Choose a **Filter Type** (e.g. Fast LP).
- Adjust **Cutoff** and **Resonance**.
- *Move*: Draw a "Slope" in the **Filter Envelope** to make the filter close as you play.

## 5. Adding Space
- Since 3x Osc has no internal reverb, route it to a Mixer track.
- Add a **Fruity Reverb 2** or **LuxeVerb**.
- **Pro Tip**: Apply a High-Pass filter *after* the reverb to keep the synth's low end solid.

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: 3x Osc

The essential modifiers for the three-headed oscillator engine. [SRC: IL-MAN]

---

## 🎹 Oscillator Controls (Osc 1, 2, 3)
- **Waveform Selector**: 
  - **Sine**: Clean fundamental.
  - **Triangle**: Warm, woodwind character.
  - **Sawtooth**: Bright, rich harmonics.
  - **Square**: Hollow, 8-bit character.
- **INV (Invert)**: Flips phase. Use to fix "weak" low-end when layering.
- **VOL**: Volume balance (Osc 1 is fixed).
- **CRS (Coarse)**: Pitch shift in Semitones.
- **FINE**: Pitch shift in Cents (+/- 100).

## 🎛️ Master Section
- **AM (Amplitude Modulation)**: Osc 3 modulates the volume of 1 & 2.
- **Stereo Phase**: Offsets Left and Right channels for width.

## 🛠️ The "Invisible" Controls (Wrapper Tabs)
*To find these, click the icons at the top of the plugin window.*
- **ENV (Envelope)**: ADSR for Vol, Cutoff, and Pitch.
- **LFO**: Constant rhythmic modulation.
- **FILT (Filter)**: Low Pass, High Pass, Band Pass.
- **ARP**: Built-in Arpeggiator.

---

## 🎯 Quick Mastery Tips
- **Massive Saw**: Set all 3 oscillators to Saw. Fine tune: Osc 2 (+5c), Osc 3 (-5c).
- **Deep Sub**: Use only Osc 1 set to Sine. Pitch down -24 semitones.
- **Clean Attack**: In the INS tab, set Vol Attack to ~2ms to avoid "pop" sounds.
```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: 3x Osc

| Parameter | Type | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Shape** | Icon | **Upbeat** (Saw) | **Spectral** | Sine, Triangle, Saw, Square, Noise. |
| **CRS (Coarse)**| Knob | **Jazzy** (Intervals)| **Pitch** | Tuning in semitones. |
| **FINE** | Knob | **Vibey** (Detune) | **Width** | Micro-tuning for thickness. |
| **PHASE** | Knob | **Psychedelic** | **Phase** | Starting position of the wave. |
| **AM / RM** | Switch | **Psychedelic** | **Texture** | Logic-based modulation (Osc 3). |
| **OSC Mix** | Knob | **Melodic** | **Loudness** | Blending oscillators 2 and 3. |

- **Vibe Impact Tag (Shape):** Sine waves are for "Moody" sub-basses. Square waves are for "Vibey" flutes.
- **Mix Impact Tag (Phase):** Adjusting the **Phase** knob in the Wrapper settings is the secret to making 3x Osc sound wide without using a stereo plugin. [SRC: IL-MAN]

```

---

## FILE: 02-Data\parameters\3xosc-params.json

```json
{
  "plugin_name": "3x Osc",
  "category": "Generator / Synth",
  "engine": "Subtractive Synthesizer",
  "parameters": [
    {
      "name": "Waveform",
      "type": "selector",
      "values": ["Sine", "Triangle", "Saw", "Square", "Pulse", "Rounded Saw", "Noise"],
      "vibe_impact": "Fundamental texture, identity"
    },
    {
      "name": "Fine Tune",
      "type": "knob",
      "unit": "Cents",
      "description": "Adjusts pitch in 1/100ths of a semitone.",
      "vibe_impact": "Unison, detune, psychedelic"
    },
    {
      "name": "Coarse Tune",
      "type": "knob",
      "unit": "Semitones",
      "description": "Adjusts pitch in fixed intervals.",
      "vibe_impact": "Harmonics, sub-layers"
    },
    {
      "name": "AM (Osc 3)",
      "type": "switch",
      "description": "Enables Amplitude Modulation using Oscillator 3.",
      "vibe_impact": "Aggression, industrial, grit"
    }
  ],
  "mix_impact_tags": ["sub-bass", "transient", "thickness"]
}
```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "3x Osc",
  "category": "Synthesizer (Subtractive)",
  "parameters": [
    {
      "section": "Oscillator 1",
      "id": "osc1_shape",
      "name": "Shape",
      "options": [
        "Sine",
        "Triangle",
        "Square",
        "Saw",
        "Rounded Saw",
        "Noise",
        "Custom"
      ],
      "description": "Fundamental waveform type."
    },
    {
      "section": "Oscillator 1",
      "id": "osc1_invert",
      "name": "Invert Phase",
      "type": "Switch",
      "description": "Flips polarity 180 degrees."
    },
    {
      "section": "Oscillator 2",
      "id": "osc2_mix",
      "name": "Mix Level",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Ratio of Osc 2 volume mixed into Osc 1."
    },
    {
      "section": "Oscillator 2",
      "id": "osc2_coarse",
      "name": "Coarse Pitch",
      "range": { "min": -24, "max": 24, "unit": "semitones" },
      "description": "Pitch offset relative to root note."
    },
    {
      "section": "Oscillator 2",
      "id": "osc2_fine",
      "name": "Fine Pitch",
      "range": { "min": -100, "max": 100, "unit": "cents" },
      "description": "Detuning for phasing/thickening."
    },
    {
      "section": "Oscillator 3",
      "id": "osc3_mix",
      "name": "Mix Level",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Ratio of Osc 3 volume mixed into the sum of 1+2."
    },
    {
      "section": "Oscillator 3",
      "id": "am_osc3",
      "name": "AM OSC 3",
      "type": "Switch",
      "description": "Uses Osc 3 to amplitude modulate Osc 1+2."
    },
    {
      "section": "Global",
      "id": "phase_rand",
      "name": "Phase Randomness",
      "type": "Knob",
      "description": "Adds jitter to the start phase of all oscillators for analog feel."
    },
    {
      "section": "Global",
      "id": "hq_mode",
      "name": "HQ (Anti-Aliasing)",
      "type": "Switch",
      "description": "Enables band-limiting filters."
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (3x Osc)

## 1. The "Sub-Only" Rule
- **Rule:** Keep the sub-bass simple. 
- **Application:** Use only **Oscillator 1** as a Sine wave. Disable Osc 2 and 3. Complex waveforms in the sub-bass cause frequency clashing with the kick drum. [SRC: REPUTABLE]

## 2. Portamento for Leads
- **Rule:** Rap leads must "slide."
- **Application:** Go to the Wrapper Settings -> **MISC** tab. Turn on **Polyphony: Mono** and increase the **Slide** time. This creates the "whining" lead sound of classic hip-hop.

## 3. Harmonic Layering
- **Rule:** Mimic acoustic intervals.
- **Application:** Set Osc 2 to `+7 semitones` (a Perfect Fifth). This adds a "Soulful" jazz quality to your chords that feels more complex than a standard synth.

## 4. Phase Widening Safety
- **Rule:** Watch for Mono Cancellation.
- **Application:** If you use the "Stereo Phase" trick in the Wrapper, check your mix in Mono. If the sound disappears, reduce the phase offset.

## 5. Gain Staging
- **Rule:** 3x Osc is LOUD.
- **Application:** Because it is so simple, its output is very high. Always turn down the **Main Volume** in the Wrapper to around `60%` before adding effects to prevent digital clipping in your plugins. [SRC: IL-MAN]
```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: 3x Osc

## 1. The Ultimate Sub-Bass Layer

3x Osc is the industry standard for clean sub-bass because of its low CPU and perfect Sine wave.

1.  **Osc 1:** Sine Wave.
2.  **Osc 2/3:** Volume 0.
3.  **Channel Settings (INS):**
    *   **Vol Envelope:**
        *   Attack: 0ms.
        *   Hold: Max.
        *   Decay: 0.
        *   Sustain: Max.
        *   Release: 100ms (To prevent clicks).
4.  **Mono:** Go to MISC tab -> Cut Itself: 1, By: 1. Or set Polyphony to 1.
5.  **Result:** A pure, fundamental bass tone that anchors any mix.

## 2. White Noise Risers (The "Whoosh")

1.  **Osc 1:** Noise (The dice/static icon).
2.  **Osc 2/3:** Off.
3.  **INS Tab (Filter):**
    *   **Type:** Low Pass (LP).
    *   **Resonance:** 25%.
4.  **Automation:**
    *   Create an Automation Clip for the **Mod X** (Filter Cutoff).
    *   Draw a line from 0 to 100 over 8 bars.
5.  **Result:** The classic EDM buildup effect.

## 3. Chiptune / 8-Bit Lead

1.  **Osc 1:** Square Wave.
2.  **Osc 2:** Pulse (Square). Coarse Pitch +12 semitones. Mix 25%.
3.  **Detune:** Main Detune knob slightly up for a "Chorus" effect.
4.  **Arpeggiator:** Go to FUNC tab -> Arpeggiator -> Up.
5.  **Slide:** Go to MISC tab -> Portamento -> Slide ON. Time ~50ms.
6.  **Result:** A Mario-style lead that glides between notes.

## 4. Super-Saw Pads (Analog Warmth)

1.  **Osc 1:** Saw.
2.  **Osc 2:** Saw. Coarse +0. Mix 50%. Fine Tune +10 cents.
3.  **Osc 3:** Saw. Coarse -12 (Octave down). Mix 25%. Detune -10 cents.
4.  **Stereo Phase:** Increase Phase Offset on all oscillators to widen the image.
5.  **INS Envelope:** Long Attack (1s), Long Release (2s).
6.  **Filter:** Low Pass with slight LFO modulation on cutoff.
7.  **Result:** A lush, breathing analog pad.

## 5. Kick Drum Synthesis

1.  **Osc 1:** Sine.
1.  **Pitch Envelope:**
    *   Go to INS tab -> Pitch Envelope.
    *   Amount: +100% (Knob right).
    *   Attack: 0.
    *   Decay: Short (150ms).
    *   Sustain: 0.
3.  **Vol Envelope:** Short Decay, no Sustain.
4.  **Distortion:** Add Fruity Fast Dist in the mixer.
5.  **Result:** A punchy, synthesized kick drum tailored to your key.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: The "Pure" Trap Sub-Bass (3x Osc)

## Step-by-Step Setup
1.  Initialize **3x Osc**.
2.  Set **Osc 1** to **Sine** (Default).
3.  Turn **Osc 2 Mix** and **Osc 3 Mix** all the way down to zero.
4.  Go to the **Wrapper Settings** (Gear icon) -> **Envelope/Filter Tab**.
5.  **Envelope:**
    - Enable **VOL** Envelope.
    - Set **Attack** to 0 (Instant).
    - Set **Hold** and **Sustain** to Max (Infinite).
    - Set **Release** to a short value (~100ms) to prevent "clicks" when stopping notes.
6.  **Filter:**
    - Set Type to **Fast LP**.
    - Set Cutoff to **150Hz**.

## Result
- The cleanest, most powerful sub-bass possible in FL Studio. It has no high-end noise, meaning it will never fight with your snares or melodies.

## Vibe Check
- **Moody/Heavy:** This is the bedrock of modern trap music.

## Variation
- **Soft Saturated Sub:** Add **Fruity Soft Clipper** after 3x Osc and drive the volume until you hear a slight warmth. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\bass-sound-creation.md

```markdown
# Goal Workflow: Bass Sound Creation (The Sub Foundation)

*Goal: Creating a perfectly consistent, deep, and melodic sub-bass for R&B and Hip-Hop.*

## 🎛️ Routing Context
- **Routing**: 3x Osc -> Mixer Track 1.
- **Mixer Chain**: Fruity Soft Clipper (to catch peaks).

## 🚶 Step-by-Step Setup
1. **The Core Tone**:
   - Set **Oscillator 1** to **Sine**.
   - Set Osc 2 and Osc 3 volume to zero.
2. **The Pitch**:
   - Turn the **Coarse Tune** (CRS) knob on Osc 1 all the way to the left (-24 semitones).
   - *Result*: The synth now triggers in the deep sub-frequency range.
3. **The Response (INS Tab)**:
   - Click the **INS** icon. Go to the **VOL** (Volume) tab.
   - Set **Attack** to 2ms (Prevents clicks).
   - Set **Decay** to 100% (Sustain the bass as long as the key is held).
   - Set **Release** to 150ms (Allows the bass to fade out gracefully).
4. **The Protection**:
   - Go to the **FILT** sub-tab.
   - Select **Fast LP**. Set Cutoff to 500Hz.
   - *Why*: This ensures no high-frequency harmonics leak into the mix.
5. **Legato Gliding**:
   - Go to the **MISC** tab.
   - Enable **Mono** and **Portamento**.
   - *Result*: The bass will slide between notes (the "808 slide" feel).

## 🔄 Variations
- **The "Warm" Sub**: Switch Osc 1 to **Triangle** wave for a slightly fuzzier, vintage soul character.
- **The "Punchy" Kick-Bass**: Set Vol Decay to 500ms so the bass hits hard and then drops in volume.

## ⚠️ Pitfalls & Fixes
- **Problem**: Bass is too quiet on phone speakers.
- **Fix**: Use a **Triangle** wave instead of a Sine, or add a subtle Saturator in the mixer.

```

---

## FILE: 03-Workflows\by-goal\chip-tune-lead.md

```markdown
# Chip-Tune Lead Workflow (3x Osc)

## Goal
Create a retro 8-bit style lead sound with fast arpeggiation.

## Technical Steps
1. **Oscillators:**
   - Set **Osc 1** to **Square** wave.
   - Set **Osc 2** to **Square** wave, tuned **+12 semitones** (1 octave up).
   - Keep volume of Osc 2 relatively low (~30%).
2. **Arpeggiator (Channel Settings):**
   - Go to the **FUNC** (Functions) tab in the wrapper.
   - In the **Arpeggiator** section, select the **Up** arrow.
   - Set **Time** to a fast value (e.g., 1:16 or faster).
3. **Envelope:**
   - In the **INS** tab, go to **VOL**.
   - Set **Sustain** to 100%, **Decay** to 0, and **Release** to a very short value for a "plucky" or "gated" feel.

## Why it works
Classic game consoles used square waves due to their simple harmonic structure. Fast arpeggiation mimics the limited polyphony of retro hardware where chords were simulated by rapidly cycling notes.

```

---

## FILE: 03-Workflows\by-goal\creating-classic-reese-bass.md

```markdown
# Creating a Classic Reese Bass (3x Osc)

## Goal
Create a thick, moving bass sound characteristic of DnB and Dubstep.

## Steps
1. **Initialize:** Set all 3 oscillators to **Sawtooth**.
2. **Osc 1:** Default pitch.
3. **Osc 2:** Fine tune to **+15 cents**.
4. **Osc 3:** Fine tune to **-15 cents**.
5. **Channel Settings:** 
   - Go to the **Instrument (INS)** tab.
   - Select **Filter**.
   - Set to **Low Pass (LP)**.
   - Turn down the **Cutoff** until it sounds deep.
   - Add a bit of **Resonance**.
6. **Processing:** Add `Fruity WaveShaper` after 3x Osc for distortion/grit.

## Why it works
The slight detuning between the 3 saw waves creates "beating" (phase cancellation and reinforcement), resulting in the characteristic wobbling movement.

```

---

## FILE: 03-Workflows\by-goal\lead-sound-creation.md

```markdown
# Goal Workflow: Lead Sound Creation (The Modern Synth)

*Goal: Designing a bright, energetic lead that cuts through a heavy Trap mix.*

## 🎛️ Routing Context
- **Routing**: 3x Osc -> Mixer Track.
- **Mixer Chain**: Fruity Chorus -> Fruity Delay 3 -> LuxeVerb.

## 🚶 Step-by-Step Setup
1. **The Layer Stacking**:
   - Set **Osc 1** to **Sawtooth**.
   - Set **Osc 2** to **Sawtooth**. Set fine tune to **+8 cents**.
   - Set **Osc 3** to **Square**. Set coarse tune to **+12 semitones** (Octave Up).
   - *Result*: A thick, multi-octave foundation.
2. **The "Bite" (Filter)**:
   - Go to the **INS** tab -> **FILT** sub-tab.
   - Select **Vanilla LP**. Set Cutoff to 60%.
   - Increase **Resonance** to 30% for a "vocal" character.
3. **The Movement (Pitch LFO)**:
   - Go to the **PITCH** sub-tab in the INS tab.
   - Select the **LFO** icon.
   - Set Speed to 4Hz. Increase **AMT** (Amount) slightly.
   - *Result*: Adds a subtle vibrato that makes the lead sound more "expensive" and less static.
4. **The Envelope (Rhythmic)**:
   - Go to the **VOL** sub-tab.
   - Set **Decay** to 800ms. Set **Sustain** to 20%.
   - *Result*: The lead hits hard and then drops back, leaving room for the vocal.
5. **The Space**:
   - In the Mixer, add **Fruity Delay 3**. Set to 1/4 note.
   - Add **LuxeVerb** in "Plate" mode. Set mix to 15%.

## 🔄 Variations
- **The "Chiptune" Lead**: Turn off Osc 2 and 3. Set Osc 1 to **Pulse** and disable all filters.
- **The "Screaming" Lead**: Set Filter Resonance to 90% and automate the Cutoff knob.

## ⚠️ Pitfalls & Fixes
- **Problem**: Lead is too "buzzy."
- **Fix**: Lower the **Cutoff** frequency in the INS tab or add a Low-Pass filter in the mixer.

```

---

## FILE: 03-Workflows\by-goal\white-noise-riser.md

```markdown
# White Noise Riser Workflow (3x Osc)

## Goal
Create a classic sweeping noise riser for builds and transitions.

## Technical Steps
1. **Oscillators:**
   - Set **Osc 1** to the **Noise** waveform.
   - Set **Osc 2** and **Osc 3** volumes to zero (fully counter-clockwise).
2. **Channel Settings (Instrument Tab):**
   - Enable the **Filter**. Set it to **Low Pass (LP)**.
   - Set **Cutoff** to 0%.
   - Set **Resonance** to ~40% for a "whistling" sweep.
3. **Automation:**
   - Create an automation clip for the **Filter Cutoff**.
   - Draw a ramp from 0% to 80% over 4 or 8 bars.
4. **FX:**
   - Add `Fruity Reverb 2` with a long tail (Wet 50%).
   - Add `Fruity Delay 3` for rhythmic movement.

## Why it works
The noise oscillator provides a broadband frequency source. By sweeping a resonant filter through it, you isolate moving bands of noise, creating the "whoosh" sound.

```

---

## FILE: 03-Workflows\by-instrument\sub_bass_stabilization.md

```markdown
# Instrument Workflow: Sub Bass Stabilization (Phase Align)

*Goal: Ensuring your synthesized 3x Osc sub-bass works perfectly with your kick samples.*

## 🎛️ Routing Context
- **Setup**: One track for Kick (Sample) and one track for 3x Osc (Bass).

## 🚶 Step-by-Step Setup
1. **Reference the Kick**:
   - Play your kick sample.
2. **The 3x Osc Base**:
   - Use only Osc 1 set to **Sine**.
   - Set pitch to -24 semitones.
3. **Phase Matching**:
   - Slowly turn the **Phase Offset** knob on Osc 1 in 3x Osc.
   - *Test*: Listen to the moment where the kick and the sub-bass sound **Punchiest** together.
4. **The "Invert" Test**:
   - Click the **INV** switch on Osc 1.
   - If the bass sounds **louder** with INV on, leave it on. This means your oscillators were out of phase with the kick sample.
5. **Attack Calibration**:
   - In the INS -> VOL tab, increase **Attack** to roughly 10ms.
   - *Result*: This "delays" the entry of the sub-bass so the kick's initial "click" has 100% of the headroom.
6. **Result**: A kick and sub that feel like a single cohesive instrument.

## 🔄 Variations
- **The "Sidechain" Stabilizer**: Use Fruity Peak Controller on the Kick to duck the volume of 3x Osc for even more clarity.
- **The "High-End" Sizzle**: Add Osc 3 as White Noise at 2% volume to help the bass cut through on tiny laptop speakers.

## ⚠️ Pitfalls & Fixes
- **Problem**: Low end sounds "wobbly."
- **Fix**: You have two oscillators playing in the sub-range. Mute everything except **Osc 1**.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: 3x Osc

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - 3x Osc.
- **Key Info:** Oscillator shape selection, AM/RM modulation logic, and the relationship between the plugin and the Wrapper's ADSR/Filter tabs.

## Source ID: [SRC: REPUTABLE]
- **Source:** "Classic Subtractive Synthesis" (Sound On Sound).
- **Key Info:** Fundamentals of layering oscillators for "Thickness," using detuning to create width, and the importance of Sine waves for phase-consistent sub-bass.

## Genre Style Board: 3x Osc

| Vibe | Setting | Use Case |
| :--- | :--- | :--- |
| **Moody** | Single Sine + 100Hz LPF | Deep Sub Bass |
| **Upbeat** | Sawtooth + Mono Slide | G-Funk Whistle |
| **Jazzy** | 3-Sine Harmonic Stack | R&B Organ |
| **Melodic** | Square + 2kHz Filter | Soft Flutes |
| **Psychedelic**| Osc 3 RM Switch | Ring-Mod Clangs |

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Subtractive Synthesis)

Sourced applications of basic oscillator synthesis in modern production.

## 1. West Coast G-Funk Lead (Upbeat)
- **Source**: DJ Quik / Dr. Dre.
- **Application**: Single Triangle wave. Legato Glide ON. Pitch LFO at 4Hz.
- **Vibe**: The "high whistle" sound. High energy, soaring, and nostalgic.

## 2. The "Sub-Heavy" Trap Bass (Moody)
- **Source**: Metro Boomin / 808 Mafia.
- **Application**: Pure Sine wave. Coarse Tune -24st. Long Release in the VOL envelope.
- **Vibe**: Ground-shaking weight, clean power, and minimal intrusion.

## 3. R&B "Silk" Pads (Vibey)
- **Source**: Darkchild / SZA style.
- **Application**: 3 Detuned Rounded Saws. 12dB Low-Pass Filter at 1kHz. Slow Attack Swell.
- **Vibe**: Modern luxury, expensive-sounding background atmosphere.

## 4. Experimental / IDM SFX (Psychedelic)
- **Source**: Flying Lotus / Mike Dean.
- **Application**: Amplitude Modulation (AM) active. White Noise layer. Rapid Pitch Envelope sweeps.
- **Vibe**: Disorientation, glitchy "alien" textures, and intense sonic movement.

```

---

## FILE: 04-Reference\am-synthesis-theory.md

```markdown
# AM Synthesis Theory in 3x Osc

## What is AM?
**Amplitude Modulation (AM)** is a synthesis technique where the amplitude (volume) of one signal is modulated by another signal.

## How 3x Osc Implements AM
When the **"AM" switch** on Oscillator 3 is enabled:
- **Oscillator 3** becomes the **Modulator**.
- **Oscillators 1 and 2** become the **Carriers**.

## Sonic Characteristics
- **Audio Rate Modulation:** If Oscillator 3 is set to a high frequency (audible range), it creates sidebands—additional frequencies that weren't in the original sound.
- **Timbres:** AM in 3x Osc is excellent for creating metallic, bell-like, or "robotic" sounds that are hard to achieve with standard subtractive synthesis.
- **Pitch Relationship:** The frequency of the sidebands is determined by the sum and difference of the Carrier and Modulator frequencies.

## Controls
- **Pitch of Osc 3:** Controls the "speed" or frequency of the modulation.
- **Volume of Osc 3:** Controls the "depth" or intensity of the modulation.

```

---

## FILE: 04-Reference\synthesis-specifications.md

```markdown
# Technical Reference: Synthesis Specifications

A detailed look at the 3x Osc engine and capabilities. [SRC: IL-MAN]

## 1. Oscillator Resolution
- **Type**: Band-limited oscillators.
- **Waveforms**: 7 internal (Sine, Triangle, Sawtooth, Square, Pulse, Rounded Saw, Noise).
- **Interpolation**: High-quality sinc-interpolation for pitch shifting.

## 2. Modulation Matrix (The Wrapper)
Modulation is handled by the FL Studio Channel Wrapper, not the generator itself.
- **Envelope Resolution**: Millisecond accuracy based on PPQ (Pulse Per Quarter) project settings.
- **LFO Waveforms**: Sine, Triangle, Square, Saw, Random.
- **Filter Order**: Usually 12dB or 24dB depending on the algorithm selected (Fast LP, Vanilla, etc.).

## 3. CPU Footprint
- **Resource Usage**: Negligible. 3x Osc is one of the most efficient synthesizers ever created.
- **Polyphony**: Theoretically unlimited (restricted only by FL Studio's global voice limit).

## 4. Aliasing
- Because the oscillators are band-limited, 3x Osc has very low aliasing at high frequencies compared to other "budget" synths.
- **Verification**: To hear aliasing, turn off all filters and play a Sawtooth wave at the very top of the keyboard (C8+). 3x Osc remains remarkably clean.

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: 3x Osc Mechanics

## 1. Oscillator Band-Limiting (HQ Mode)

*   **HQ Off (Naive):** The oscillators are generated mathematically as pure functions.
    *   **Issue:** When playing high notes (e.g., C6), the harmonics of a Saw wave extend beyond the Nyquist frequency (22.05kHz). These frequencies "bounce back" into the audible spectrum as dissonance.
    *   **Sound:** Gritty, digital dirt, buzzing.
*   **HQ On (BLEP):** Uses "Band-Limited Step" algorithms.
    *   **Function:** It suppresses harmonics above Nyquist.
    *   **Comparison:** Similar to the difference between a NES sound chip (Aliased) and a modern VA synth (Anti-Aliased).

## 2. Mix Level Mathematics

The mix knobs in 3x Osc are **relative ratios**, not absolute decibels. The algorithm normalizes the total output to 0dBfs (floating point).

*   **Formula:** `Total Output = Normalize(Osc1 + Osc2 + Osc3)`
*   **Implication:** Turning up Osc 2 *turns down* Osc 1 proportionally.
*   **Tips:**
    *   To mute Osc 1: You cannot. You must turn Osc 2/3 to 100% and ensure Osc 1 is effectively buried, or use a shape with no volume (Custom empty sample).
    *   To solo Osc 2: You cannot easily. Use volume envelopes or Phase Cancellation tricks.

## 3. AM Modulation Topology

When **AM OSC 3** is engaged:
*   **Carrier:** Osc 1 + Osc 2.
*   **Modulator:** Osc 3.
*   **Math:** `Output = (Osc1 + Osc2) * Osc3`.
*   **Unipolar vs Bipolar:**
    *   If Osc 3 is a Square wave (0 to 1), it acts as a gate (on/off).
    *   If Osc 3 is a Sine wave (-1 to 1), it acts as a Ring Modulator (inverting phase at negative cycle).

## 4. Phase Offset Physics

*   **Knob Range:** 0 to 360 degrees.
*   **Stereo Separation:** The "Phase Offset" knob adds a delta between L and R.
    *   `L_Phase = User_Setting`
    *   `R_Phase = User_Setting + Separation_Amount`
*   **Phase Cancellation:** If `L_Phase` and `R_Phase` are 180 degrees apart (Anti-phase), the sound will vanish when summed to Mono.
    *   **Check:** Always check your 3x Osc patches in Mono if using Phase Offset.

```

---

