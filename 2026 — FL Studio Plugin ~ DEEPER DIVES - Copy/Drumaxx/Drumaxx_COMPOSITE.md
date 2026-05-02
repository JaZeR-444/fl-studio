# Drumaxx - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 00-START-HERE.md

```markdown
# Drumaxx - 00-START-HERE.md

## Initial Setup and Quick Wins

Welcome to the Drumaxx research project! This guide will help you get started with documenting this drum machine emulation plugin. Follow these steps to begin your research:

### Step 1: Basic Familiarization (15 minutes)
1. Open FL Studio and insert Drumaxx on a channel
2. Load a classic drum kit (TR-808, TR-909, etc.)
3. Play the pads to understand the basic interface
4. Explore the different drum sounds available
5. Take screenshots of the main interface panels

### Step 2: Parameter Mapping (30 minutes)
1. Create a temporary text file called "drumaxx-initial-notes.txt"
2. Document every visible parameter and control in Drumaxx
3. Change each parameter and note the effect
4. Group parameters by function (kit selection, pattern programming, individual drum controls)
5. Save this as your starting point for parameter-cheat-sheet.md

### Step 3: Hip-Hop/R&B Specific Testing (45 minutes)
1. Load a hip-hop drum kit
2. Create a simple boom-bap pattern (kick on 1 and 3, snare on 2 and 4)
3. Program hi-hat patterns with swung timing
4. Test real-time performance controls
5. Document how Drumaxx handles hip-hop-style programming

### Step 4: Create Your First Documentation File (20 minutes)
1. Create the parameter-cheat-sheet.md file in Quick-Reference/
2. Organize parameters by function
3. Include practical applications for hip-hop production
4. Add screenshots showing different interface sections

### Step 5: Set Up Research Schedule
- **Daily (15 min):** Test one new feature or workflow
- **Weekly (2-3 hours):** Complete one major documentation file
- **Monthly (5+ hours):** Review and expand all previous work

## Essential Research Goals for Hip-Hop/R&B Production

### Primary Focus Areas:
1. **Kit Programming:** How to efficiently program drum patterns
2. **Sound Selection:** Which kits work best for different genres
3. **Pattern Creation:** Creating authentic hip-hop and R&B grooves
4. **Performance Optimization:** Managing CPU and memory for complex arrangements

### Quick Documentation Wins:
1. Document the kit selection process
2. Explain pattern programming basics
3. Show how to create a boom-bap pattern
4. Demonstrate real-time performance controls

## Research Tools Checklist

- [ ] FL Studio with Drumaxx plugin
- [ ] Understanding of basic drum programming concepts
- [ ] Screenshot tool for capturing interface
- [ ] Text editor for documentation
- [ ] Audio interface for testing

## Next Steps After Completing This Guide

1. Move to parameter-cheat-sheet.md creation
2. Document drum-programming-workflows.md
3. Create your first workflow for hip-hop beat programming
4. Test Drumaxx with actual hip-hop production sessions

## Troubleshooting Common Issues

- If kits don't load, check plugin installation
- If patterns seem complex, start with simple 4-bar loops
- If performance is sluggish, reduce pattern density
- If sounds are clicking, check for sample issues

## Success Metrics

Complete this guide when you can:
- [ ] Load drum kits into Drumaxx successfully
- [ ] Create a basic 4-on-the-floor pattern
- [ ] Adjust individual drum parameters
- [ ] Create a simple boom-bap pattern
- [ ] Understand the main interface sections

---

**Time Estimate:** 2 hours for initial setup and first documentation
**Priority:** Start with kit selection and basic pattern programming
**Goal:** Enable effective drum programming for hip-hop/rap/R&B production
```

---

## FILE: README.md

```markdown
# Drumaxx - Drum Machine Emulation Plugin

`\`\`
██████╗ ██████╗ ██╗   ██╗███╗   ███╗ █████╗ ██╗  ██╗██╗  ██╗
██╔══██╗██╔══██╗██║   ██║████╗ ████║██╔══██╗╚██╗██╔╝╚██╗██╔╝
██║  ██║██████╔╝██║   ██║██╔████╔██║███████║ ╚███╔╝  ╚███╔╝ 
██║  ██║██╔══██╗██║   ██║██║╚██╔╝██║██╔══██║ ██╔██╗  ██╔██╗ 
██████╔╝██║  ██║╚██████╔╝██║ ╚═╝ ██║██║  ██║██╔╝ ██╗██╔╝ ██╗
╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Drum Machine Emulation
**Category:** Instrument
**Official Manual:** [Image-Line Drumaxx Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Drumaxx.htm)

---

## 🥁 What is Drumaxx?

Drumaxx is FL Studio's drum machine emulation plugin that combines classic drum machine sounds with modern features. It provides authentic recreation of vintage drum machine sounds with enhanced capabilities for contemporary hip-hop, rap, and R&B production.

**Key Capabilities:**
- Authentic vintage drum machine emulation
- Comprehensive drum kit programming
- Advanced pattern sequencing
- Real-time performance controls
- Extensive sound customization options

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review official manual sections on drum programming
3. Create **parameter-cheat-sheet.md** with all controls
4. Test drum kit programming and pattern creation

### For Drum Machine Users:
1. Review **drum-programming-workflows.md** (to be created)
2. Study **kit-customization-guide.md**
3. Learn **pattern-sequencing-workflows.md** workflows

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - Drum kit controls and layout
  - Pattern sequencing parameters
  - Sound customization options
  - Real-time performance controls
  - Kit import/export functions

- [ ] **drum-programming-workflows.md**
  - Basic pattern creation process
  - Drum kit customization techniques
  - Real-time performance controls
  - Pattern chaining and arrangement
  - Sound design possibilities

#### 02-Data/parameters/
- [ ] **drumaxx-params.json**
  `\`\`json
  {
    "plugin_name": "Drumaxx",
    "category": "Instrument",
    "parameters": [
      {
        "name": "Drum Kit",
        "type": "selector",
        "options": ["Classic", "Modern", "Custom"],
        "description": "Drum kit selection",
        "use_cases": ["kit_selection", "sound_variety", "genre_specific"]
      }
    ]
  }
  `\`\`

#### 02-Data/presets/
- [ ] **drum-kits-presets.json**
  - Classic drum machine kits
  - Hip-hop specific configurations
  - R&B drum arrangements
  - Electronic music templates
  - Custom user kits

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **kit-customization.md**
  - Creating custom drum kits
  - Sound replacement techniques
  - Parameter adjustment workflows
  - Kit sharing and import/export

- [ ] **pattern-programming.md**
  - Creating drum patterns from scratch
  - Programming hip-hop rhythms
  - Advanced pattern chaining
  - Real-time pattern manipulation

- [ ] **performance-optimization.md**
  - CPU usage optimization
  - Memory management strategies
  - Real-time performance tips
  - Troubleshooting common issues

#### 03-Workflows/by-instrument/
- [ ] **hip-hop-beat-programming.md**
- [ ] **rnb-groove-creation.md**
- [ ] **electronic-pattern-design.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **programming-specifications.md**
  - Pattern length capabilities
  - Resolution and timing accuracy
  - Polyphony limits
  - Memory usage characteristics

- [ ] **sound-design-guide.md**
  - Advanced sound manipulation
  - Synthesis techniques within Drumaxx
  - Creative sound design possibilities
  - Integration with external effects

---

## 🔬 Research Framework

### Phase 1: Basic Understanding (Week 1)
**Goal:** Understand drum kit programming and basic pattern creation

**Tasks:**
1. Test different drum kits in Drumaxx
2. Create basic drum patterns
3. Document parameter-cheat-sheet.md
4. Experiment with real-time controls

**Key Questions to Answer:**
- What drum kits are available?
- How do you create and edit patterns?
- What real-time performance controls exist?
- How do you customize drum sounds?

### Phase 2: Practical Application (Week 2)
**Goal:** Learn genre-appropriate drum programming

**Tasks:**
1. Program hip-hop beats with Drumaxx
2. Create R&B grooves and patterns
3. Test advanced programming techniques
4. Create workflow guides

**Key Questions to Answer:**
- Which kits work best for hip-hop?
- How to create authentic R&B grooves?
- What are advanced programming techniques?
- How to optimize for live performance?

### Phase 3: Advanced Features (Week 3-4)
**Goal:** Master sound design and performance features

**Tasks:**
1. Test sound design capabilities
2. Apply advanced performance controls
3. Create complex pattern arrangements
4. Document advanced techniques

---

## 📊 Plugin Specifications to Document

### Drum Kit Features
- Available drum kits (classic machine emulations)
- Sound customization capabilities
- Kit import/export functionality
- Real-time parameter adjustment
- Polyphony and voice allocation

### Pattern Sequencing
- Pattern length (steps per pattern)
- Resolution (timing accuracy)
- Pattern chaining capabilities
- Real-time pattern switching
- Swing and groove controls

### Performance Controls
- Real-time parameter adjustment
- Performance pads and controls
- MIDI learn capabilities
- Automation compatibility
- Live performance features

### Sound Design
- Individual drum sound editing
- Synthesis parameters per drum
- Effects processing options
- Sample replacement capabilities
- Creative sound design tools

### Performance
- CPU usage by kit and features
- Memory consumption
- Latency characteristics
- Multi-core optimization
- Real-time performance capabilities

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. What drum kits are available in Drumaxx?
2. How do you create and edit drum patterns?
3. What real-time performance controls are available?
4. How do you customize individual drum sounds?
5. What are the polyphony limits?

### Advanced Usage
1. How to create authentic vintage drum sounds?
2. What are the best practices for hip-hop beat programming?
3. How to use advanced pattern chaining techniques?
4. What are the sound design capabilities?
5. How to optimize performance for live use?

### Troubleshooting
1. Patterns not triggering correctly?
2. How to reduce CPU/memory usage?
3. Timing accuracy issues?
4. How to import custom samples?
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

Drumaxx often used alongside:
- **Fruity Wrapper** (for plugin hosting)
- **Patcher** (for complex routing)
- **MIDI Controllers** (for performance)
- **Playlist** (for pattern arrangement)
- **Fruity Formula Controller** (for automation)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📚 Learning Path

### Beginner (First Day)
1. Read 00-START-HERE.md
2. Review parameter-cheat-sheet.md
3. Create your first drum pattern
4. Experiment with different drum kits

### Intermediate (Week 1-2)
1. Study drum-programming-workflows.md
2. Practice hip-hop beat programming
3. Learn kit customization techniques
4. Set up performance controls

### Advanced (Week 3-4)
1. Master sound-design-guide.md
2. Create complex pattern arrangements
3. Optimize performance for live use
4. Document advanced techniques

---

## 🎬 Next Steps

**Right Now (5 minutes):**
1. Open Drumaxx in FL Studio
2. Load a classic drum kit
3. Create a simple 8-bar pattern
4. Test real-time performance controls

**This Week (2-3 hours):**
1. Create parameter-cheat-sheet.md
2. Test all drum kits systematically
3. Create drumaxx-params.json
4. Document one complete workflow

**This Month (10+ hours):**
1. Complete all Priority 1 files
2. Create drum-kits-presets.json
3. Write 3 workflow guides
4. Test with real production scenarios

---

## 💡 Research Tips

1. **Kit Testing:** Try all available drum kits
2. **Pattern Creation:** Create various rhythm patterns
3. **Performance Testing:** Test real-time controls
4. **Genre Applications:** Focus on hip-hop, rap, and R&B
5. **Sound Design:** Explore customization options

---

## 📦 File Structure Summary

`\`\`
Drumaxx/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── drum-programming-workflows.md
│   └── Tutorials/
│       └── first-time-setup.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── drumaxx-params.json ⭐ HIGH PRIORITY
│   └── presets/
│       └── drum-kits-presets.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── kit-customization.md
│   │   ├── pattern-programming.md
│   │   └── performance-optimization.md
│   └── by-instrument/
│       ├── hip-hop-beat-programming.md
│       └── rnb-groove-creation.md
│
└── 04-Reference/
    ├── programming-specifications.md
    └── sound-design-guide.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Drumaxx Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Drumaxx.htm)
- [Drumaxx Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+drumaxx+tutorial)
- [Drumaxx User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)

### Community Resources
- [Drumaxx Subreddit](https://www.reddit.com/r/FL_Studio/search?q=drumaxx&restrict_sr=1)
- [Drum Programming Community](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Drum Programming Resources
- **Classic Drum Machines:** TR-808, TR-909, TR-606, LinnDrum
- **Hip-Hop Patterns:** Boom-bap, Trap, G-Funk rhythms
- **R&B Grooves:** Neo-soul, Contemporary R&B patterns
- **Electronic Beats:** House, Techno, DnB patterns

### Technical Analysis Tools
- **Playlist** for pattern arrangement
- **Mixer** for individual drum processing
- **Patcher** for complex routing
- **Fruity Formula Controller** for automation

### Recommended Learning Materials
- "Drum Programming Fundamentals" - Understanding rhythm and timing
- "Hip-Hop Beat Construction" - Genre-specific programming techniques
- "Vintage Drum Machine Sounds" - Authentic sound recreation

### Advanced Techniques
- **Pattern Variation:** Creating subtle variations for interest
- **Humanization:** Adding timing imperfections for feel
- **Layering:** Combining drum sounds for unique textures
- **Automation:** Dynamic parameter changes during patterns

## 📚 In-Depth Technical Analysis

### Drum Machine Emulation
Drumaxx provides authentic vintage drum machine emulation:

**Classic Machine Recreation:**
- TR-808 bass drum emulation
- TR-909 snare and hi-hat simulation
- TR-606 percussion sounds
- LinnDrum clap and cowbell
- Authentic analog circuit modeling

**Modern Enhancements:**
- Enhanced sound quality and clarity
- Additional sound design capabilities
- Improved pattern sequencing
- Better integration with DAW
- Expanded customization options

### Pattern Sequencing Engine
Advanced pattern creation and management:

**Pattern Architecture:**
- Up to 128 steps per pattern
- Multiple patterns per project
- Pattern chaining and arrangement
- Real-time pattern switching
- Swing and timing adjustment

**Programming Interface:**
- Intuitive step sequencer
- Real-time recording capabilities
- Pattern variation tools
- Humanization features
- Groove template application

### Sound Design Capabilities
Extensive sound customization options:

**Individual Drum Editing:**
- Pitch adjustment per drum
- Decay/time controls
- Tone/color parameters
- Distortion and saturation
- Filter controls

**Synthesis Parameters:**
- Analog modeling algorithms
- Waveform selection
- Envelope shaping
- Modulation options
- Harmonic content control

## 🎛️ Parameter Deep Dive

### Kit Selection Controls
- **Kit Browser:** Interface for selecting drum kits
- **Kit Categories:** Organized by machine type and genre
- **Kit Preview:** Audition kits before selection
- **Kit Import/Export:** Share and load custom kits
- **Kit Customization:** Modify existing kits

### Pattern Programming Controls
- **Step Sequencer:** Visual interface for pattern creation
- **Resolution:** Timing division options (1/4, 1/8, 1/16, 1/32)
- **Swing:** Timing offset for groove feel
- **Pattern Length:** Adjustable number of steps
- **Pattern Chain:** Arrange patterns in sequence

### Individual Drum Controls
- **Pitch:** Tune individual drum sounds
- **Decay:** Adjust envelope release times
- **Tone:** Modify harmonic content and character
- **Attack:** Control initial transient response
- **Level:** Set individual drum volumes

### Performance Controls
- **Real-time Pads:** Trigger sounds during performance
- **Knob Assignments:** Map parameters to hardware
- **MIDI Learn:** Assign external controllers
- **Automation:** DAW parameter automation
- **Live Controls:** Performance-specific parameters

## 🎼 Drum Programming Applications

### Hip-Hop Production Applications
Drumaxx excels in hip-hop production scenarios:
- **Boom-Bap Programming:** Classic four-on-the-floor patterns
- **Trap Beat Creation:** Hi-hat rolls and 808 integration
- **G-Funk Emulation:** P-Funk inspired patterns
- **Jazz-Rap Grooves:** Complex syncopated rhythms

### R&B Production Applications
Essential for R&B production workflows:
- **Neo-Soul Patterns:** Complex, syncopated rhythms
- **Contemporary R&B:** Modern groove programming
- **Ballad Programming:** Subtle, supportive patterns
- **Uptempo Grooves:** Dance-oriented patterns

### Electronic Music Applications
Valuable for electronic music production:
- **House Programming:** Four-on-the-floor patterns
- **Techno Patterns:** Minimal, driving rhythms
- **DnB Programming:** Complex breakbeat patterns
- **Ambient Beats:** Textural, atmospheric patterns

## 🧪 Experimental Techniques

### Advanced Programming
Creative uses of Drumaxx's programming capabilities:
- **Polyrhythmic Patterns:** Multiple rhythms simultaneously
- **Metric Modulation:** Changing time signatures
- **Micro-Timing:** Subtle timing adjustments for feel
- **Probability Gates:** Randomized pattern variations

### Sound Design Experiments
Advanced sound design techniques:
- **Drum Synthesis:** Creating entirely new drum sounds
- **Layering Experiments:** Combining multiple sounds
- **Texture Creation:** Using drums for atmospheric sounds
- **Melodic Applications:** Tuning drums for melodic content

### Integration Techniques
Advanced integration with other tools:
- **MIDI Sequencing:** Complex rhythmic patterns
- **Audio Warping:** Aligning patterns to tempo
- **Sidechain Integration:** Ducking and gating effects
- **Automation Integration:** Dynamic parameter changes

## 🎚️ Workflow Optimization

### Kit Creation Workflow
Optimizing the kit creation process:
- **Template Creation:** Reusable kit starting points
- **Sample Replacement:** Efficient sound swapping
- **Parameter Bulk Editing:** Adjust multiple drums simultaneously
- **Kit Management:** Organizing and categorizing kits
- **Performance Optimization:** Reducing resource usage

### Pattern Programming Workflow
Streamlining the pattern creation process:
- **Pattern Templates:** Starting points for different genres
- **Pattern Variation:** Creating subtle variations efficiently
- **Pattern Chaining:** Arranging patterns for songs
- **Humanization:** Adding feel to programmed patterns
- **Groove Extraction:** Capturing live feel

### Integration Workflows
Incorporating Drumaxx into existing workflows:
- **Template Integration:** Starting projects with Drumaxx
- **Session Management:** Organizing Drumaxx projects
- **Backup Strategies:** Protecting kit and pattern work
- **Collaboration:** Sharing work with others

## 🎧 Genre-Specific Applications

### Hip-Hop
- **Boom-Bap:** Classic four-on-the-floor with swung hi-hats
- **Trap:** Hi-hat rolls, 808 integration, sub-genre patterns
- **G-Funk:** P-Funk inspired patterns with analog feel
- **Conscious Rap:** Complex rhythms supporting lyrical content

### R&B
- **Neo-Soul:** Complex, syncopated rhythms with feel
- **Contemporary R&B:** Modern patterns with groove
- **Ballad Programming:** Subtle, supportive patterns
- **Uptempo Grooves:** Dance-oriented rhythmic patterns

### Electronic
- **House:** Driving four-on-the-floor patterns
- **Techno:** Minimal, hypnotic rhythms
- **DnB:** Complex breakbeat programming
- **Ambient:** Textural, atmospheric patterns

## 🔄 Integration with Other Plugins

### Drum Processing Tools
Drumaxx works well with drum processing tools:
- **Fruity Compressor:** Individual drum compression
- **Fruity Limiter:** Output control and protection
- **Fruity Parametric EQ 2:** Individual drum EQ
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
Drumaxx was developed as FL Studio's premium drum machine emulation:
- Created to provide authentic vintage drum sounds
- Designed for both classic and modern programming
- Developed with professional drum programmers in mind
- Intended to rival standalone drum machines

### Evolution Through FL Studio Versions
- Initially introduced with basic drum machine emulation
- Enhanced with advanced pattern sequencing
- Improved with better sound quality
- Expanded with more customization options

### Impact on Music Production
Drumaxx has influenced music production by:
- Providing accessible vintage drum sounds
- Enabling complex pattern programming
- Facilitating creative sound design
- Supporting diverse musical genres

## 🧠 Advanced Programming Techniques

### Precision Programming
Advanced techniques for accurate drum programming:
- **Grid Manipulation:** Fine-tuning timing and placement
- **Velocity Programming:** Dynamic expression through velocity
- **Humanization:** Adding natural feel to programmed patterns
- **Groove Templates:** Applying consistent feels across patterns

### Complex Rhythmic Structures
Advanced rhythmic programming techniques:
- **Polyrhythms:** Multiple simultaneous rhythmic patterns
- **Metric Modulation:** Changing time signatures within patterns
- **Syncopation:** Off-beat rhythmic displacement
- **Cross-Rhythm:** Contrasting rhythmic patterns

### Performance Optimization
Advanced techniques for efficient performance:
- **Resource Management:** Optimizing CPU and memory usage
- **Latency Reduction:** Minimizing timing delays
- **Real-time Control:** Efficient parameter manipulation
- **Pattern Management:** Organizing complex arrangements

## 📊 Performance Considerations

### CPU Usage
Managing Drumaxx's impact on system performance:
- **Kit Complexity:** More complex kits use more CPU
- **Pattern Density:** Dense patterns increase CPU usage
- **Effects Processing:** Built-in effects add to CPU load
- **Polyphony:** More voices require more processing
- **Optimization Strategies:** Techniques for reducing usage

### Memory Usage
Managing RAM consumption:
- **Kit Size:** Large kits consume more memory
- **Sample Quality:** Higher quality samples use more RAM
- **Pattern Count:** More patterns increase memory usage
- **Buffer Management:** Efficient memory allocation
- **Streaming vs. Preload:** Choosing appropriate methods

### Optimization Strategies
Techniques for optimizing performance:
- **Kit Simplification:** Using simpler kits when possible
- **Pattern Optimization:** Reducing pattern density
- **Effect Management:** Using effects judiciously
- **Voice Management:** Controlling polyphony appropriately
- **Buffer Management:** Optimizing buffer settings

## 🛠️ Troubleshooting Common Issues

### Pattern Programming Problems
- **Timing Issues:** Patterns not aligning to grid
- **Sync Problems:** Patterns not syncing with project
- **Step Skipping:** Missing steps in patterns
- **Resolution Issues:** Incorrect timing resolution
- **Swing Problems:** Groove not applying correctly

### Sound Quality Issues
- **Clicking/Popping:** Artifacts in drum sounds
- **Distortion:** Overdriven or clipped sounds
- **Phase Issues:** Problems with stereo imaging
- **Quality Loss:** Poor sound quality from kits
- **Tuning Problems:** Incorrect pitch of drums

### Performance Issues
- **High CPU Usage:** Excessive processor load
- **Memory Problems:** Insufficient RAM for kits
- **Dropouts:** Audio dropouts during playback
- **Lagging Response:** Delayed response to input
- **Crash Issues:** Plugin instability

## 🎚️ Advanced Configuration

### Custom Kits
Creating and managing custom configurations:
- **Kit Templates:** Starting points for different genres
- **Sample Integration:** Incorporating custom samples
- **Parameter Sets:** Configured drum settings
- **Genre-Specific Kits:** Optimized for specific styles

### Pattern Management
Using patterns effectively:
- **Pattern Libraries:** Collections of useful patterns
- **Pattern Variation:** Creating subtle pattern changes
- **Pattern Chaining:** Arranging patterns for songs
- **Pattern Automation:** Dynamic pattern changes

### Integration Configurations
Optimizing for different integration scenarios:
- **MIDI Controller Integration:** Real-time parameter control
- **DAW Integration:** Sequencing and automation
- **Hardware Integration:** External device control
- **Network Integration:** Remote control options

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Drumaxx techniques
- **Reddit Groups:** Sharing programming techniques and kits
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced techniques
- **Written Guides:** In-depth articles on programming
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Kit Libraries:** Websites hosting Drumaxx kits
- **Pattern Collections:** Collections of programmed patterns
- **Educational Content:** Tutorials and sample packs

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Program complex drum patterns with Drumaxx
- [ ] Create custom drum kits with appropriate sounds
- [ ] Apply advanced programming techniques
- [ ] Optimize performance for complex projects
- [ ] Create genre-appropriate drum programming
- [ ] Troubleshoot common programming issues

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
**Estimated Documentation Time:** 15-20 hours

---

*This research framework ensures comprehensive documentation of Drumaxx for producers, programmers, and sound designers.*
```

---

## FILE: 01-Learning\Concepts\advanced-modeling.md

```markdown
Tags: hip-hop/rap | R&B | electric

## Advanced Drumaxx Modeling Techniques

### Membrane Physics Deep Dive

**How Drumaxx models drums:**
- Simulates drumhead (membrane)
- Resonates based on tension
- Damping simulates dampening
- Mass distribution creates overtones

**Tension Control:**
| Tension | Effect | Best For |
|---------|--------|----------|
| Low (20-40) | Deep, loose, warm | Jazzy, smooth |
| Medium (50-70) | Balanced, versatile | Most styles |
| High (80-100) | Tight, punchy, cutting | Trap, EDM |

**Damping Control:**
| Damping | Effect | Best For |
|---------|--------|----------|
| Low (10-25) | Long decay, ringy | Vintage, ambient |
| Medium (30-50) | Controlled, musical | R&B, hip-hop |
| High (60-90) | Short, punchy | Aggressive, EDM |

### Excitation Positioning

**What it does:**
- Where the "stick" hits the drum
- Center = fundamental focus
- Edge = more overtone, brighter

**Position Map:**
| Position | Effect | Sound |
|----------|--------|-------|
| 0-30% | Center | Fundamental, deep |
| 30-60% | Mid | Balanced |
| 60-100% | Edge | Bright, overtone-rich |

**Creative Applications:**
- Kick: Center position (20-40%)
- Snare: Off-center (40-60%)
- Tom: Edge (50-70%)
- Experimental: Extreme positions (0% or 100%)

### Multi-Drum Layering

**Strategy:**
1. Layer 2-3 Drumaxx instances
2. Different drum "physics"
3. Blend for unique sound

**Example Layer:**
| Layer | Tension | Mass | Position | Purpose |
|-------|---------|------|----------|---------|
| 1 | 75 | Center 60/40 | 25% | Punch |
| 2 | 85 | Center 50/50 | 70% | Click |
| 3 | 65 | Center 70/30 | 40% | Tone |

**Blending:**
- Layer 1: 70% wet
- Layer 2: 30% wet
- Layer 3: 40% wet
- Result: Complex, unique drum

### The "Organic" Drum

**Goal:** Realistic, acoustic feel

**Settings:**
| Parameter | Value | Reasoning |
|-----------|-------|-----------|
| Tension | 65-75 | Balanced |
| Damping | 35-45 | Controlled decay |
| Mass Center | 55 | Fundamental focus |
| Mass Edge | 45 | Harmonics |
| Excitation Position | 50% | Center-middle |
| Excitation Force | 60-70 | Realistic hit |

**Why This Works:**
- Medium tension = acoustic feel
- Controlled damping = natural decay
- Balanced mass = full spectrum

### The "Electric" Drum

**Goal:** Processed, synthetic feel

**Settings:**
| Parameter | Value | Reasoning |
|-----------|-------|-----------|
| Tension | 80-90 | Tight, punchy |
| Damping | 25-35 | Some ring |
| Mass Center | 45 | Fundamental |
| Mass Edge | 55 | Bright |
| Excitation Position | 40-60% | Variable |
| Excitation Force | 80-90 | Strong hit |

### Creating Sound Effects

**Impact Sound:**
| Parameter | Value |
|-----------|-------|
| Membrane | Kick preset |
| Tension | 90 |
| Damping | 15 |
| Mass | Center-heavy |
| Position | 20% |
| Force | 100 |

**Riser/Build:**
| Parameter | Value |
|-----------|-------|
| Membrane | Tom preset |
| Tension | Sweep automation |
| Damping | 20 |
| Position | Variable |
| Force | Ramp up |

### Troubleshooting Drum Sounds

| Problem | Cause | Fix |
|---------|-------|-----|
| No punch | Tension too low | Increase to 75+ |
| Too boomy | Damping too low | Increase damping |
| No crack | Excitation too soft | Increase force |
| Too ringy | Damping too low | Increase damping |
| Thuddy | Position too center | Move toward edge |
| Harsh | Position too edge | Move toward center |
| No low-end | Tension too high | Lower to 65-70 |
| Inconsistent | Force variation | Normalize force |

```

---

## FILE: 01-Learning\Concepts\physical-modeling-percussion.md

```markdown
# Concept: Physical Modeling Percussion (Drumaxx)

Tags: organic | hip-hop/rap | funky | hybrid

## What It Is
Unlike sampler-based drum machines (which play back recordings), Drumaxx uses **Physical Modeling**. It simulates the physical components of a drum: the membrane (skin), the mallet (stick), and the body (shell).

## Why It Matters
- **Dynamic Realism:** Samplers often suffer from "machine gun effect" (the same sound repeated). Drumaxx calculates each hit slightly differently, providing natural variation.
- **Infinite Tuning:** You can change the "material" of the drum (e.g., from plastic to metal) mid-pattern.
- **Unique Textures:** It excels at "Hybrid" sounds—drums that sound half-acoustic, half-electronic.

## How to Hear It
- **The "Skin" Tension:** Adjust the **Tension** knob. High tension sounds like a tight snare or bongo; low tension sounds like a loose kick or floor tom.
- **The "Mallet" Impact:** Change the **Mallet** type. A hard mallet adds "click" and transient snap; a soft mallet creates a "thump."

## Typical Mistakes
- **Over-Modeling:** Setting the "Material" too high can make drums sound "metallic" and "thin" in a way that doesn't sit well in a Hip-Hop mix.
- **Ignoring Velocity:** Drumaxx is designed to respond to velocity. If all your MIDI notes are at 100%, you lose the physical modeling benefit.

## What to Adjust First
1. **Mallet Force:** This is your primary "snap" control.
2. **Membrane Size:** This determines the fundamental pitch and weight of the drum.

```

---

## FILE: 01-Learning\Quick-Reference\cheat-sheet.md

```markdown
# Drumaxx: The Physical Percussionist

> **Scope:** Physical Modeling (Drums), Sequencing, and Integrated FX.
> **Source:** Image-Line Official Manual (v21.2) + Direct Analysis.
> **Complexity:** High (Modeling Synthesis).

## 🧠 The "Mallet & Membrane" Concept
Drumaxx does not use samples. It calculates the physics of a drum head being struck.
*   **Mallet:** The stick/beater. Controls volume, noise (brush), and attack stiffness.
*   **Membrane:** The skin. Controls pitch (Tension), tone (Material), and decay.

**Signal Flow:**
`Trigger` -> **[MALLET GEN]** -> **[MEMBRANE MODEL]** -> **[SOF (KICK HELPER)]** -> **[EQ/FILTERS]** -> **[OUTPUT]**

*   **Critical Nuance:** The **SOF** (Self Oscillating Filter) is a cheat code. Real physical models struggle to make the "Sine Wave Thump" of an 808. The SOF adds a dedicated sine sweep to the signal path to reinforce the low end.

---

## 🎛️ Section 1: The Geometry Controls

You don't select "Snare" or "Tom". You sculpt it.

| Control | Function | Sonic Result |
| :--- | :--- | :--- |
| **Tension** | **Pitch.** | Higher tension = Higher pitch. Tighter skin. |
| **Material** | **Stiffness/Mass.** | *Left:* Heavy, rubbery, dull (Toms). <br> *Right:* Metallic, thin, reflective (Cymbals). |
| **Shape** | **Geometry.** | *Square:* Disharmonic, gong-like. <br> *Round:* Harmonic, clean drum. |
| **Phase** | **Strike Position.** | Center hit vs Rim shot. Changes the harmonic ratio. |

---

## 🔁 Section 2: Mallet Physics

*   **Noise Level:** Simulates the "Chaotic" sound of a snare wire or brush.
*   **Retrig:**
    *   *On:* Every hit sounds identical (Machine Gun).
    *   *Off:* The noise seed is randomized. Vital for realistic Hi-Hats.
*   **Decay:** The "Hardness" of the stick. Short decay = Wood tip. Long decay = Felt mallet.

---

## ⚡ Technical Specs: The Step Sequencer

Drumaxx has a built-in step sequencer that runs *per pad*.
*   **Capacity:** 16 Patterns per Pad. 64 Steps per Pattern.
*   **Trigger Key:** You map a MIDI key (e.g., C3) to trigger a *Start* of the internal sequencer.
*   **Usage:** You can press one key to play a complex Hi-Hat rolling rhythm, freeing up your hands to play chords.

---

## 🧪 "Secret Sauce" Workflows

### 1. The "Fake Acoustic" Snare
1.  **Mallet Noise:** High (Snare wires).
2.  **Membrane Tension:** High (Pop).
3.  **Material:** 70% Right (Metallic/Plastic skin).
4.  **Velocity Mod:** Link Velocity to **Cutoff** (Filter).
5.  **Result:** Hard hits open the filter (Crack). Soft hits are dull (Ghost notes).

### 2. The Metallic Glitch
1.  **Shape:** Square (Left).
2.  **Material:** Max Right (Metal).
3.  **Tension:** Automate this!
4.  **Physics:** Changing tension while the model is vibrating creates a "Pitch Slide" that sounds like a talking drum or a warped gong.

### 3. The SOF Sub-Kick
1.  **Goal:** Massive TR-808 Kick.
2.  **Membrane:** Mute it (Decay 0). We only want the SOF.
3.  **SOF Freq:** 60Hz.
4.  **SOF Decay:** Long.
5.  **Result:** A pure, clean sine sweep generated by filter self-oscillation, which is cleaner than any sample.

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Drumaxx Parameter Cheat Sheet

## Membrane Controls
- **Material (Stiffness):** Adjusts the rigidity. High = Metal/Glass, Low = Plastic/Skin.
- **Shape:** Geometric boundary (Circular to Rectangular). Affects overtone series.
- **Tension:** Controls the skin tightness (Fundamental Pitch).
- **Damping:** Controls energy loss (Decay of high frequencies).

## Mallet Controls
- **Amplitude:** Strike force strength.
- **Noise:** Adds white noise to simulate brushes or stick impact.
- **Decay:** Length of the mallet's own sound.

## Sequencing
- **Trigger Key:** Key assigned to play the pad.
- **Velocity Matrix:** Maps MIDI velocity to parameters (e.g., higher velocity = more "Material").

```

---

## FILE: 01-Learning\Quick-Reference\quick-reference-card.md

```markdown
Tags: hip-hop/rap | R&B | electric

## Drumaxx Quick Reference Card

### Membrane Types

| Type | Sound | Best For |
|------|-------|----------|
| Kick | Deep, punchy | 808s, kicks |
| Snare | Crisp, resonant | Snares, claps |
| Tom | Pitched, warm | Toms, melodic |
| Hat | Short, bright | Hi-hats, cymbals |
| Clap | Short, snappy | Claps, hand claps |
| Percussion | Varied | Special effects |

### Tension Guide

| Value | Feel | Use |
|--------|------|-----|
| 20-40 | Loose, warm | Jazz, smooth |
| 50-70 | Balanced | General use |
| 75-90 | Tight, punchy | Trap, EDM |
| 90+ | Very tight | Extreme punch |

### Damping Guide

| Value | Decay | Use |
|--------|-------|-----|
| 10-20 | Long, ringy | Ambient, vintage |
| 25-40 | Medium | Musical, general |
| 45-60 | Short | Punchy, tight |
| 70+ | Very short | Staccato, crisp |

### Position Guide

| Position | Sound | Use |
|----------|-------|-----|
| 0-25% | Center-heavy | Deep kicks |
| 25-50% | Balanced | General use |
| 50-75% | Edge emphasis | Bright, crisp |
| 75-100% | Edge-heavy | Clicky, overtones |

### Excitation Force

| Force | Impact | Use |
|--------|--------|-----|
| 20-40% | Soft | Ghost notes |
| 50-70% | Medium | Musical playing |
| 80-100% | Hard | Aggressive, accents |

### Troubleshooting Quick Fixes

| Problem | Fix |
|---------|-----|
| No punch | Tension 75+, damping 25-35 |
| Too boomy | Damping 40+, tension 65+ |
| No crack | Force 80%+, position 45-60% |
| Too ringy | Damping 40+, position 35-50% |
| Thuddy | Position 30-40%, force 70%+ |
| Harsh | Position 50-65%, damping 35% |
| No low-end | Tension 65-75%, position 25-35% |

### Genre Settings

| Genre | Tension | Damping | Position |
|-------|---------|---------|----------|
| Hip-hop | 75-85 | 25-35 | 25-40% |
| R&B | 65-75 | 35-45 | 35-50% |
| Trap | 80-90 | 20-30 | 25-35% |
| Jazz | 55-65 | 40-50 | 40-55% |
| EDM | 80-90 | 20-30 | 30-40% |
| Rock | 70-80 | 30-40 | 35-45% |

### Recording/Export Checklist

- [ ] Set tension appropriate for sound
- [ ] Adjust damping for decay
- [ ] Match position to sound
- [ ] Set force appropriate
- [ ] Test at multiple velocities
- [ ] Check mono compatibility
- [ ] Export at proper level
- [ ] Document settings

### Sound Design Quick Settings

| Sound | Tension | Damping | Position |
|-------|---------|---------|----------|
| 808 Kick | 85 | 20 | 25% |
| Vintage Snare | 65 | 45 | 45% |
| Punchy Kick | 80 | 30 | 35% |
| Crisp Hat | 75 | 15 | 60% |
| Warm Tom | 60 | 40 | 45% |
| Deep Sub | 70 | 35 | 20% |

```

---

## FILE: 02-Data\parameters\drumaxx-specs.json

```json
{
  "plugin_name": "Drumaxx",
  "category": "Drum / Percussion",
  "synthesis_type": "Physical Modeling",
  "pads": 16,
  "internal_sequencer": {
    "bars": 4,
    "steps_per_bar": 16
  },
  "outputs": 16
}

```

---

## FILE: 02-Data\parameters\parameters.json

```json
{
  "pluginName": "Drumaxx",
  "category": "Physical Modeling Percussion",
  "parameters": [
    {
      "section": "Mallet",
      "id": "mallet_amp",
      "name": "Strike Force",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Volume of the initial hit."
    },
    {
      "section": "Mallet",
      "id": "noise_level",
      "name": "Noise",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Brush/Wire texture mix."
    },
    {
      "section": "Membrane",
      "id": "tension",
      "name": "Tension",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Tuning of the drum head."
    },
    {
      "section": "Membrane",
      "id": "material",
      "name": "Material",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Damping factor (Wood to Metal)."
    },
    {
      "section": "SOF",
      "id": "sof_decay",
      "name": "Kick Body Decay",
      "range": { "min": 0, "max": 100, "unit": "%" },
      "description": "Length of the Self-Oscillating filter sweep."
    },
    {
      "section": "Effects",
      "id": "eq_gain",
      "name": "EQ Gain",
      "range": { "min": -18, "max": 18, "unit": "dB" },
      "description": "Output equalizer band gain."
    }
  ]
}

```

---

## FILE: 02-Data\presets\signature-presets.json

```json
Tags: electric | hip-hop/rap | moody

## Drumaxx Advanced Presets

### Signature Drum Presets

`\`\`json
{
  "jaZerTrap808": {
    "description": "Signature deep 808 with crack",
    "settings": {
      "membrane": { "type": "kick", "tension": 88, "damping": 18 },
      "mass": { "center": 60, "edge": 40 },
      "excitation": { "position": 22, "force": 88 },
      "filter": { "cutoff": 95, "resonance": 25 }
    },
    "variations": {
      "deep": { "tension": 85, "position": 18, "force": 85 },
      "crack": { "tension": 90, "position": 28, "force": 90 },
      "punch": { "tension": 92, "position": 25, "force": 95 }
    },
    "useCases": ["Trap drops", "Hip-hop verses", "Signature sound"],
    "tags": ["hip-hop/rap", "trap", "signature"]
  },
  "rnbSmooth": {
    "description": "Warm, smooth snare for R&B",
    "settings": {
      "membrane": { "type": "snare", "tension": 62, "damping": 42 },
      "mass": { "center": 45, "edge": 55 },
      "excitation": { "position": 52, "force": 68 },
      "filter": { "cutoff": 750, "resonance": 32 }
    },
    "variations": {
      "smooth": { "tension": 60, "damping": 45 },
      "snap": { "tension": 65, "damping": 35, "position": 58 }
    },
    "useCases": ["R&B ballads", "Smooth grooves", "Warm texture"],
    "tags": ["R&B", "smooth", "warm"]
  },
  "lofiDusty": {
    "description": "Degraded, dusty drum sound",
    "settings": {
      "membrane": { "type": "snare", "tension": 55, "damping": 50 },
      "mass": { "center": 40, "edge": 60 },
      "excitation": { "position": 48, "force": 55 },
      "filter": { "cutoff": 650, "resonance": 28 }
    },
    "processing": "Add bit crush and wow/flutter after",
    "useCases": ["Lo-fi hip-hop", "Sample-based", "Dusty texture"],
    "tags": ["lofi", "moody", "dusty"]
  },
  "edmPunch": {
    "description": "Extreme punch for EDM drops",
    "settings": {
      "membrane": { "type": "kick", "tension": 92, "damping": 12 },
      "mass": { "center": 65, "edge": 35 },
      "excitation": { "position": 20, "force": 95 },
      "filter": { "cutoff": 100, "resonance": 35 }
    },
    "variations": {
      "extreme": { "tension": 95, "force": 100 },
      "controlled": { "tension": 88, "damping": 18 }
    },
    "useCases": ["EDM drops", "Bass music", "Maximum impact"],
    "tags": ["deep bass edm", "electric", "punchy"]
  },
  "organicJazz": {
    "description": "Natural, acoustic drum sound",
    "settings": {
      "membrane": { "type": "tom", "tension": 58, "damping": 45 },
      "mass": { "center": 52, "edge": 48 },
      "excitation": { "position": 50, "force": 62 },
      "filter": { "cutoff": 200, "resonance": 22 }
    },
    "useCases": ["Jazz influences", "Organic feel", "Natural sound"],
    "tags": ["organic", "jazz", "natural"]
  }
}
`\`\`

### Creative Sound Design Presets

`\`\`json
{
  "cinematicImpact": {
    "description": "Massive impact for film/ trailers",
    "settings": {
      "membrane": { "type": "kick", "tension": 85, "damping": 10 },
      "mass": { "center": 70, "edge": 30 },
      "excitation": { "position": 15, "force": 100 },
      "filter": { "cutoff": 80, "resonance": 45 }
    },
    "processing": "Layer with boom and riser",
    "useCases": ["Film scores", "Trailers", "Dramatic moments"],
    "tags": ["cinematic", "dramatic", "impact"]
  },
  "alienTexture": {
    "description": "Otherworldly drum texture",
    "settings": {
      "membrane": { "type": "tom", "tension": 75, "damping": 25 },
      "mass": { "center": 35, "edge": 65 },
      "excitation": { "position": 65, "force": 75 },
      "filter": { "cutoff": 500, "resonance": 55 }
    },
    "processing": "Add granular and reverb",
    "useCases": ["Sci-fi", "Experimental", "Alien textures"],
    "tags": ["psychedelic", "sci-fi", "experimental"]
  },
  "glitchRhythm": {
    "description": "Broken, rhythmic drum pattern",
    "settings": {
      "membrane": { "type": "percussion", "tension": 80, "damping": 30 },
      "mass": { "center": 45, "edge": 55 },
      "excitation": { "position": 50, "force": 80 },
      "filter": { "cutoff": 400, "resonance": 40 }
    },
    "processing": "Automate position and force",
    "useCases": ["Glitch music", "IDM", "Experimental"],
    "tags": ["electric", "glitch", "experimental"]
  }
}
`\`\`

```

---

## FILE: 02-Data\rules\drumaxx-safety-rules.md

```markdown
Tags: hip-hop/rap | R&B | electric

## Drumaxx Rules and Safety Guidelines

### Physical Modeling Safety

| Rule | Description | Priority |
|------|-------------|----------|
| Resonance Limits | Never exceed 80% resonance | High |
| Tension Balance | Match tension to genre | High |
| Damping Control | Avoid extreme damping | Medium |
| Mass Distribution | Balance center/edge mass | Medium |

### Sound Design Rules

| Rule | Description | Priority |
|------|-------------|----------|
| Tension Limits | Keep tension between 50-90 | High |
| Damping Range | Use 20-60 for musical sounds | High |
| Force Limits | Match force to musical context | Medium |
| Position | Match position to sound type | Medium |

### Gain Staging Rules

| Stage | Target Level | Purpose |
|-------|-------------|---------|
| Input | -6 to -3 dB | Headroom |
| Processing | Clean signal path | Preserve dynamics |
| Output | -3 to 0 dB | Mix ready |
| Export | -1 dB peak | Standard |

### The "Physical Realism" Test

**For realistic drums:**
1. Does the tension match the genre?
2. Is the damping appropriate for decay?
3. Does the position make sense?
4. Is the force natural for the sound?

**For creative sounds:**
1. Is the effect intentional?
2. Does it serve the arrangement?
3. Is it too distracting?
4. Can you hear it in the mix?

### Troubleshooting Quick Fixes

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| No punch | Tension too low | Increase to 75+ |
| Too boomy | Damping too low | Increase damping |
| No crack | Force too soft | Increase force |
| Too ringy | Damping too low | Increase damping |
| Thuddy | Position too center | Move toward edge |
| Harsh | Position too edge | Move toward center |
| No low-end | Tension too high | Lower to 65-70 |
| Inconsistent | Force varies | Normalize force |

### Prevention Checklist

- [ ] Match settings to genre
- [ ] Test at multiple velocities
- [ ] Check mono compatibility
- [ ] Listen in mix context
- [ ] Save successful settings
- [ ] Document variations
- [ ] Export test versions

### Genre Safety

**Hip-Hop:**
| Parameter | Safe Range | Warning |
|-----------|------------|---------|
| Tension | 70-85 | Avoid < 65 or > 90 |
| Damping | 25-40 | Avoid < 20 |
| Position | 25-45% | Center-heavy |

**R&B:**
| Parameter | Safe Range | Warning |
|-----------|------------|---------|
| Tension | 60-75 | Avoid < 55 |
| Damping | 35-50 | Avoid < 25 |
| Position | 35-55% | Balanced |

**EDM:**
| Parameter | Safe Range | Warning |
|-----------|------------|---------|
| Tension | 75-90 | Avoid < 70 |
| Damping | 15-30 | Avoid < 10 |
| Position | 20-40% | Center-heavy |

### The "Musical Balance" Principle

1. **Match the Genre**
2. **Serve the Arrangement**
3. **Test in Context**
4. **Trust Your Ears**
5. **Less is Often More**

```

---

## FILE: 02-Data\rules\gain-staging-and-safety.md

```markdown
# Rules: Gain Staging & Safety (Drumaxx)

Tags: gain-staging | mix-safety | dynamic-range

## 1. The "Pad Volume" Rule
Each pad in Drumaxx has its own volume, plus a Master output. 
- **Rule:** Never exceed -3dB on an individual pad before it hits the internal Drumaxx mixer. 
- **Why:** Physical modeling can create unpredictable resonant peaks. Leaving 3dB of headroom prevents internal clipping that sounds "harsh" rather than "saturated."

## 2. Low-End Mono Safety
If using Drumaxx for Kicks or low Percussion:
- **Rule:** Check the "Stereo" parameter. For Hip-Hop/Rap kicks, keep the low-frequency pads in **Mono**.
- **Why:** Wide low-end in Drumaxx can cause phase issues that make your 808s feel weak.

## 3. The "Decay vs. Tail" Safety
- **Rule:** If your drum patterns are fast (e.g., Trap hi-hats), ensure the **Decay** is set to a "Safe Zone" where tails don't overlap more than 50%.
- **Why:** Overlapping modeling calculations can spike CPU and create "muddy" build-ups in the mid-range.

## 4. "Avoid" List
- **Avoid 100% Velocity:** Unless you need a distorted "hit," keep your max velocity at 110. This allows the model to "breathe."
- **Avoid High "Material" on Kicks:** Keeping the Material knob below 40% ensures the kick stays "thumpy" and doesn't become "clanky."

```

---

## FILE: 03-Workflows\common-usage.md

```markdown
# Common Workflows: Drumaxx

## 1. Multi-Output Routing

Drumaxx is often used as a full drum kit. You need to mix the Kick and Snare separately.

1.  **Wrapper:** Enable "Multiple Outputs".
2.  **Drumaxx:**
    *   Select the Kick Pad.
    *   Look at the LCD display "Output". Change offset to 0.
    *   Select the Snare Pad.
    *   Change Output offset to 1.
3.  **Mixer:** The Kick goes to the Main Track. The Snare goes to Main Track + 1.

## 2. Humanizing Hi-Hats

Physical models excel at this.

1.  **Setup:** Closed Hat on Pad 1.
2.  **Modulation:**
    *   Go to "Velocity Modulation" matrix.
    *   Target 1: **Phasing**.
    *   Target 2: **Tone (Material)**.
3.  **Piano Roll:** Randomize the velocity of your Hi-Hat notes (Alt+R).
4.  **Physics:**
    *   Low velocity = Center hit (Darker).
    *   High velocity = Edge hit (Brighter).
    *   This is far more realistic than just volume changes.

## 3. Creating "Foley" Textures

Drumaxx can make weird wooden clicks and scrapes.

1.  **Material:** All the way Left (Wood/Heavy).
2.  **Shape:** Square.
3.  **Decay:** Very Short.
4.  **Sequencer:** Create a fast stream of 32nd notes.
5.  **Result:** Sounds like a Geiger counter or rain hitting a tin roof. Add Reverb (Global FX) to wash it out.

## 4. The "Clap" Stack

Claps are hard to model because they are spread out in time (multiple hands).

1.  **Mallet:** High Noise.
2.  **Mid Filter:**
    *   **Retrig**: Set to "II" or "III".
3.  **Effect:** This causes the noise burst to re-trigger rapidly within a few milliseconds, simulating the "flam" of multiple hands clapping.

```

---

## FILE: 03-Workflows\by-goal\building-evolving-percussion.md

```markdown
# Building Evolving Percussion (Drumaxx)

## Goal
Create a rhythmic element that slowly shifts its tonal character over time.

## Technical Steps
1. **Pad Initialization:**
   - Select an unused pad. Set **Material** to Low (soft skin).
2. **Internal LFO / Automation:**
   - Right-click the **Tension** slider and select **Create Automation Clip**.
   - Draw a slow, triangular wave over 8 bars.
3. **The "Talking Drum" Effect:**
   - Set the automation to shift Tension by +/- 20%.
   - This causes the "pitch" of the drum to glide up and down while it's being played by the sequencer.
4. **Sequencing:**
   - Program a steady 1/8th note pattern in the Drumaxx step sequencer.
   - Vary the **Velocity** of the steps to trigger different responses in the physical model.

## Why it works
Because Drumaxx is a physical model, changing "Tension" doesn't just pitch-shift a static recording; it recalculates the vibration of the entire mesh. This results in organic, fluid transitions that sound like a drummer pressing their hand on the skin while playing.

```

---

## FILE: 03-Workflows\by-goal\creating-realistic-snares.md

```markdown
# Creating Realistic Snares (Drumaxx)

## Goal
Design a responsive, natural-sounding snare drum that doesn't suffer from the "machine-gun" effect.

## Technical Steps
1. **Membrane Setup:**
   - Set **Material** to a high-medium value (snare skins are tightly stretched plastic).
   - Set **Shape** to Circular.
   - Adjust **Tension** to the desired fundamental note (usually around 200Hz for a standard snare).
2. **Mallet Interaction:**
   - Set **Mallet Noise** to ~60%. This simulates the impact noise and the "rattle" of the snare wires.
   - Adjust **Mallet Amplitude** for the desired "hit" strength.
3. **Velocity Matrix (The Key to Realism):**
   - In the **Velocity** tab, map MIDI Velocity to **Material**.
   - **Result:** Harder hits sound brighter and more metallic, just like a real snare.
   - Map Velocity to **Mallet Noise** so ghost notes have less rattle.
4. **Damping:**
   - Increase **Damping** to ~30% to simulate a studio snare with a dampening ring (moongel).

## Why it works
Real instruments change timbre based on how hard they are struck. By using the Velocity Matrix to modulate "Material" and "Noise," you break the static nature of samples and create a dynamic performance.

```

---

## FILE: 03-Workflows\by-goal\sound-design.md

```markdown
Tags: electric | psychedelic | moody

## Drumaxx Sound Design Workflows

### Creating Signature Sounds

**Trap 808 Kick:**
1. Start: Membrane=Kick preset
2. Tension: 85
3. Damping: 20
4. Mass: Center 65/35
5. Position: 25%
6. Force: 85
7. Add slight pitch envelope (drop 5 semitones)

**Creative Process:**
1. Create basic drum
2. Add variation: Second layer at 15%
3. Process: Compress lightly
4. Saturate: Add tube warmth
5. Result: Signature 808 sound

### Sci-Fi Texture

**Goal:** Alien, futuristic sound

**Settings:**
| Layer | Type | Tension | Damping | Position | Purpose |
|-------|------|---------|---------|----------|---------|
| 1 | Kick | 90 | 10 | 15% | Thump |
| 2 | Tom | 70 | 30 | 60% | Body |
| 3 | Snare | 60 | 20 | 80% | Snap |

**Processing Chain:**
1. Drumaxx output → High-pass (remove sub)
2. Distortion: Light tube saturation
3. Reverb: Large space
4. Delay: Ping-pong stereo
5. Result: Sci-fi impact

### Vintage Drum Sound

**Goal:** 70s/80s warmth

**Settings:**
| Parameter | Value | Reason |
|-----------|-------|--------|
| Membrane | Kick+Snare blend |
| Tension | 60-70 | Loose, warm |
| Damping | 40-50 | Controlled |
| Position | 45% | Slightly off-center |
| Force | 65-75 | Medium hit |

**Processing:**
1. Drumaxx → Vintage compressor (2:1)
2. Tape saturation: Light (15%)
3. EQ: Slight low boost, high cut
4. Result: Classic warmth

### Deep House Kick

**Goal:** Pulsing, groovy kick

**Settings:**
| Parameter | Value |
|-----------|-------|
| Membrane | Kick |
| Tension | 75 |
| Damping | 30 |
| Mass | 55/45 |
| Position | 35% |
| Force | 70-80 (consistent) |

**Key Techniques:**
- Consistent velocity
- Sidechain to bass
- Pitch automation (subtle)
- Result: Grooving kick

### Glitch Drum Pattern

**Goal:** Broken, rhythmic feel

**Settings per Hit:**
| Hit Type | Tension | Damping | Position | Force |
|----------|---------|---------|----------|-------|
| Standard | 75 | 30 | 40% | 80 |
| Click | 90 | 10 | 60% | 100 |
| Ghost | 80 | 50 | 50% | 30 |
| Long | 65 | 70 | 30% | 70 |

**Pattern Creation:**
1. Program irregular rhythm
2. Vary hit types
3. Add silence between hits
4. Result: Glitch aesthetic

### One-Shot Export Workflow

**Goal:** Create sample library

**Steps:**
1. Design drum sound
2. Test at multiple velocities
3. Record 5-10 variations
4. Trim to consistent length (-20dB threshold)
5. Add fades (2ms in, 20ms out)
6. Export as WAV
7. Tag with tempo and key

### Layering with Samples

**Hybrid Approach:**
1. Drumaxx: Core punch and character
2. Sample: Layer for consistency
3. Blend: 70% Drumaxx / 30% sample

**Best For:**
- Consistency in mix
- Unique character
- Producer workflow

### Quick Reference Table

| Sound | Tension | Damping | Position | Force | Processing |
|-------|---------|---------|----------|-------|------------|
| 808 Kick | 85 | 20 | 25% | 85 | Pitch drop |
| Vintage | 65 | 45 | 45% | 70 | Tape sat |
| House | 75 | 30 | 35% | 75 | Comp |
| Glitch | Varies | Varies | Varies | Varies | Irregular |
| Sci-fi | 90 | 10 | 15% | 100 | Reverb+delay |

```

---

## FILE: 03-Workflows\by-instrument\funky-snare-creation.md

```markdown
# Workflow: Funky Snare Creation (Drumaxx)

Tags: funky | hip-hop/rap | snares

## Goal: Create a "Live-Feel" Snare with Hip-Hop Snap
This recipe turns Drumaxx into a funky snare generator that sounds like a sampled breakbeat but hits like a modern Trap snare.

## 1. Starting Moves (The Core)
- **Select Pad:** Choose a Snare-type pad.
- **Membrane Size:** Set to ~45% (A standard 14-inch snare size).
- **Material:** Set to **"Wood"** or ~25%. This adds organic "thud."

## 2. Safe Moves (The Snap)
- **Mallet Type:** Hard (increases the initial "crack").
- **Tension:** Increase to ~75%. This "tightens" the drum skin for a funky, high-pitched pop.
- **Velocity Mapping:** Link **Mallet Force** to Velocity.

## 3. Risky Moves (The Character)
- **Resonance:** Increase to 60%. This adds a "ringing" tone (like a metal rim-shot). If it's too much, it sounds like a trash can lid—pull it back if it hurts the ears.
- **Phase:** Slightly adjust the Phase knob to find where the "snare wires" sound most crisp.

## 4. A/B Test
- **A:** Standard sampled snare.
- **B:** Drumaxx Funky Snare.
- **Listen for:** Does the Drumaxx version feel more "alive" when you play a ghost-note pattern (varying velocities)? If yes, you've succeeded.

## 5. Quick Fix Path
- **Too thin?** Increase Membrane Size.
- **Too dull?** Increase Mallet Hardness.
- **Too long?** Decrease Decay.

```

---

## FILE: 03-Workflows\by-instrument\organic-hat-humanization.md

```markdown
# Workflow: Organic Hat Humanization (Drumaxx)

Tags: funky | r&b | hi-hats | humanization

## Goal: Create Hi-Hats that "Swing" and "Vary" Naturally
This workflow eliminates the "robotic" feel of Trap hats by using Drumaxx's physical engine.

## 1. Starting Moves
- **Select Pad:** Choose a "Hi-Hat" or "Percussion" pad.
- **Tension:** Set to **High** (80%).
- **Material:** Set to **"Metal"** (~70%).

## 2. The Humanization Trick
- **Modulation:** Link the **Decay** or **Cutoff** to a random LFO or the "Note Randomizer" in FL Studio.
- **Why:** In real life, a drummer never hits a cymbal in the exact same spot. Small changes in decay simulate the cymbal being choked or allowed to ring.

## 3. Safe Moves
- **Self-Muting:** Ensure the Hi-Hat pad is set to **Cut itself** (Group 1). This ensures that when a "Closed" hat hits, the "Open" hat stops immediately.
- **Vel -> Cut:** Link Velocity to Filter Cutoff. Harder hits = Brighter hats.

## 4. A/B Test
- **A:** Loop a 1/8 note hi-hat pattern with 100% velocity.
- **B:** Use the random velocity and Drumaxx model.
- **Listen for:** "Air" and "Movement." Does the hat pattern feel like it's "breathing"?

## 5. Quick Fix Path
- **Hats too "noisy"?** Decrease Resonance.
- **Hats too "electronic"?** Decrease Material and increase "Membrane Weight."

```

---

## FILE: 04-Reference\membrane-mesh-theory.md

```markdown
# Membrane Mesh Theory in Drumaxx

## The Core Concept
Drumaxx does not use samples. Instead, it uses a **Mathematical Mesh** to represent a drum skin (membrane).

## Interconnected Points
- The model treats the drum head as a 2D grid of **interconnected physical points**.
- When the "Mallet" strikes the grid, energy is injected into one or more points.
- This energy travels through the mesh based on physical laws of **inertia, mass, and tension**.

## Parameters as Physics
- **Mass:** Determines how heavy the "material" is. Heavier mass = lower frequency and slower response.
- **Stiffness (Material):** Determines how much the points resist movement. Higher stiffness = more high-frequency overtones (Metallic).
- **Inertia:** Controls how long the points continue to vibrate after the initial strike.
- **Damping:** Simulates energy loss to the environment or the drum shell.

## The Advantage
This approach allows for "impossible" drums—such as a square drum made of glass the size of a building—that would be impossible to sample in the real world.

```

---

## FILE: 04-Reference\technical-specs.md

```markdown
# Technical Specs: Drumaxx Mechanics

## 1. 2D Waveguide Mesh

*   **Synthesis:** 2-Dimensional Digital Waveguide Mesh.
*   **Concept:** The "Membrane" is a grid of points (Nodes) connected by springs (Edges).
*   **Parameters:**
    *   **Tension:** The stiffness of the springs.
    *   **Material:** The mass of the nodes.
    *   **Shape:** The boundary condition of the mesh (Square vs Circular clamp).
*   **CPU:** Calculating a 2D mesh is CPU intensive. Drumaxx uses simplified algorithms compared to full scientific simulations, optimized for musical real-time usage.

## 2. SOF (Self-Oscillating Filter)

*   **Type:** Resonant All-Pass Filter.
*   **Physics:** When resonance is set to infinity, the filter outputs a sine wave at the cutoff frequency.
*   **Usage:** Used to generate the "Fundamental" (F0) of the drum, while the Membrane generates the "Partials" (Overtones).
*   **Sweep:** The SOF has a dedicated pitch envelope (Decay) to create the "Pew" sound of a tom or kick.

## 3. Velocity Matrix Resolution

*   **Modulation:** 4 Slots per Pad.
*   **Logic:** `Value = Base_Param + (Velocity * Mod_Amount)`.
*   **Range:** The modulation is bipolar (-100% to +100%). You can make a drum get *quieter* the harder you hit it (Negative Amplitude modulation).

## 4. Polyphony Limits

*   **Voice Stealing:** Drumaxx has fixed polyphony limits to save CPU.
*   **Choking:**
    *   Hi-Hats (Closed/Open) interact via Choke Groups.
    *   If you play Pad 2 (Open Hat), playing Pad 1 (Closed Hat) kills the voice of Pad 2 instantly.
    *   This mimics the physical mechanics of a hi-hat pedal closing.

```

---

