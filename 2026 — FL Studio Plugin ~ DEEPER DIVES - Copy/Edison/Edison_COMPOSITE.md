# Edison - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Edison - Wave Editor & Recorder Plugin

`\`\`
███████╗██████╗ ██╗███████╗ ██████╗ ███╗   ██╗
██╔════╝██╔══██╗██║██╔════╝██╔═══██╗████╗  ██║
█████╗  ██║  ██║██║███████╗██║   ██║██╔██╗ ██║
██╔══╝  ██║  ██║██║╚════██║██║   ██║██║╚██╗██║
███████╗██████╔╝██║███████║╚██████╔╝██║ ╚████║
╚══════╝╚═════╝ ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝
`\`\`

**Plugin Type:** Wave Editor & Recorder
**Category:** Utility/Effects
**Official Manual:** [Image-Line Edison Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Edison.htm)

---

## 🎧 What is Edison?

Edison is FL Studio's comprehensive wave editor and recorder plugin that provides professional-grade audio editing capabilities within the DAW. It offers real-time audio analysis, editing tools, and recording functionality essential for hip-hop, rap, and R&B production workflows.

**Key Capabilities:**
- Real-time audio waveform visualization
- Comprehensive audio editing tools
- Built-in recording functionality
- Advanced analysis and measurement tools
- Professional-grade editing capabilities

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review official manual sections on editing tools
3. Create **parameter-cheat-sheet.md** with all controls
4. Test recording and basic editing functions

### For Audio Editors:
1. Review **editing-workflows.md** (to be created)
2. Study **recording-guide.md**
3. Learn **analysis-tools-workflows.md** workflows

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - Waveform display controls
  - Editing tools and functions
  - Recording parameters
  - Analysis and measurement tools
  - Export and import functions

- [ ] **editing-workflows.md**
  - Basic editing process
  - Cutting and splicing techniques
  - Fade and crossfade creation
  - Time stretching and pitch shifting
  - Noise reduction and cleanup

#### 02-Data/parameters/
- [ ] **edison-params.json**
  `\`\`json
  {
    "plugin_name": "Edison",
    "category": "Utility",
    "parameters": [
      {
        "name": "Recording Mode",
        "type": "selector",
        "options": ["Off", "Record", "Monitor"],
        "description": "Recording state control",
        "use_cases": ["recording", "monitoring", "editing"]
      }
    ]
  }
  `\`\`

#### 02-Data/presets/
- [ ] **editing-presets.json**
  - Hip-hop vocal editing templates
  - Sample preparation configurations
  - Analysis tool setups
  - Recording session templates
  - Cleanup routine configurations

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **recording-workflows.md**
  - Setting up recording sessions
  - Input monitoring and routing
  - Recording techniques and best practices
  - Post-recording processing

- [ ] **vocal-editing.md**
  - Hip-hop and rap vocal editing
  - Breath control and removal
  - Timing correction techniques
  - Pitch correction workflows

- [ ] **sample-preparation.md**
  - Sample cleaning and preparation
  - Loop creation and editing
  - Format conversion workflows
  - Quality optimization techniques

#### 03-Workflows/by-instrument/
- [ ] **rap-vocal-editing.md**
- [ ] **hip-hop-sample-preparation.md**
- [ ] **rnb-vocal-processing.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **editing-specifications.md**
  - Supported audio formats
  - Sample rate and bit depth capabilities
  - Processing limitations
  - Performance characteristics

- [ ] **analysis-tools-guide.md**
  - Spectral analysis capabilities
  - Measurement tools and functions
  - Frequency analysis techniques
  - Dynamic range analysis

---

## 🔬 Research Framework

### Phase 1: Basic Understanding (Week 1)
**Goal:** Understand waveform display and basic editing

**Tasks:**
1. Load audio files into Edison
2. Explore waveform visualization
3. Document parameter-cheat-sheet.md
4. Test basic editing functions

**Key Questions to Answer:**
- How does the waveform display work?
- What editing tools are available?
- How do you make selections and edits?
- What analysis tools are provided?

### Phase 2: Practical Application (Week 2)
**Goal:** Learn genre-appropriate editing techniques

**Tasks:**
1. Edit rap vocals with Edison
2. Prepare hip-hop samples using Edison
3. Test analysis tools with different audio types
4. Create workflow guides

**Key Questions to Answer:**
- Which tools work best for vocal editing?
- How to prepare samples efficiently?
- What are the analysis capabilities?
- How to optimize for different genres?

### Phase 3: Advanced Features (Week 3-4)
**Goal:** Master recording and advanced analysis

**Tasks:**
1. Test recording capabilities
2. Apply advanced analysis tools
3. Create complex editing workflows
4. Document advanced techniques

---

## 📊 Plugin Specifications to Document

### Waveform Display
- Real-time waveform visualization
- Zoom and navigation controls
- Selection and editing tools
- Grid and timing alignment
- Multiple view modes

### Editing Tools
- Cut, copy, paste functionality
- Fade and crossfade creation
- Time stretching and pitch shifting
- Noise reduction and cleanup tools
- Format conversion capabilities

### Recording Features
- Built-in recording functionality
- Input monitoring and routing
- Recording quality settings
- Real-time effects during recording
- Multi-take management

### Analysis Tools
- Spectral analysis capabilities
- Frequency measurement tools
- Dynamic range analysis
- Level and peak measurement
- Phase correlation analysis

### Performance
- CPU usage by feature
- Memory consumption
- Latency characteristics
- Supported sample rates
- Bit depth capabilities

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How does the waveform display work?
2. What editing tools are available?
3. How do you make selections and edits?
4. What analysis tools are provided?
5. What audio formats are supported?

### Advanced Usage
1. How to efficiently edit rap vocals?
2. What are the best practices for sample preparation?
3. How to use spectral analysis tools?
4. What are the recording capabilities?
5. How to optimize performance for large files?

### Troubleshooting
1. Audio not displaying correctly?
2. How to reduce CPU/memory usage?
3. Recording quality issues?
4. How to import/export audio files?
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

Edison often used alongside:
- **Fruity Wrapper** (for plugin hosting)
- **Patcher** (for complex routing)
- **MIDI Controllers** (for transport control)
- **Playlist** (for arrangement)
- **Fruity Formula Controller** (for automation)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📚 Learning Path

### Beginner (First Day)
1. Read 00-START-HERE.md
2. Review parameter-cheat-sheet.md
3. Load audio and explore waveform
4. Experiment with basic editing tools

### Intermediate (Week 1-2)
1. Study editing-workflows.md
2. Practice vocal editing techniques
3. Learn sample preparation methods
4. Set up recording sessions

### Advanced (Week 3-4)
1. Master analysis-tools-guide.md
2. Create complex editing workflows
3. Optimize performance for large files
4. Document advanced techniques

---

## 🎬 Next Steps

**Right Now (5 minutes):**
1. Open Edison in FL Studio
2. Load a vocal sample
3. Explore the waveform display
4. Test basic selection tools

**This Week (2-3 hours):**
1. Create parameter-cheat-sheet.md
2. Test all editing tools systematically
3. Create edison-params.json
4. Document one complete workflow

**This Month (10+ hours):**
1. Complete all Priority 1 files
2. Create editing-presets.json
3. Write 3 workflow guides
4. Test with real production scenarios

---

## 💡 Research Tips

1. **Waveform Analysis:** Use various audio types for testing
2. **Editing Practice:** Work with different audio content
3. **Performance Testing:** Monitor CPU and memory usage
4. **Genre Applications:** Focus on hip-hop, rap, and R&B
5. **Analysis Tools:** Explore all measurement capabilities

---

## 📦 File Structure Summary

`\`\`
Edison/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── editing-workflows.md
│   └── Tutorials/
│       └── first-time-setup.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── edison-params.json ⭐ HIGH PRIORITY
│   └── presets/
│       └── editing-presets.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── recording-workflows.md
│   │   ├── vocal-editing.md
│   │   └── sample-preparation.md
│   └── by-instrument/
│       ├── rap-vocal-editing.md
│       └── hip-hop-sample-preparation.md
│
└── 04-Reference/
    ├── editing-specifications.md
    └── analysis-tools-guide.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Edison Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Edison.htm)
- [Edison Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+edison+tutorial)
- [Edison User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)

### Community Resources
- [Edison Subreddit](https://www.reddit.com/r/FL_Studio/search?q=edison&restrict_sr=1)
- [Audio Editing Community](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Audio Resources
- **Vocal Samples:** Rap verses, hooks, ad-libs
- **Hip-Hop Samples:** Breakbeats, loops, instrumental sections
- **R&B Vocals:** Smooth vocals, harmonies, ad-libs
- **Instrumental Samples:** Piano, strings, brass, etc.

### Technical Analysis Tools
- **Spectrum Analyzer:** For frequency analysis
- **Oscilloscope:** For waveform analysis
- **Level Meters:** For amplitude measurement
- **Phase Correlation:** For stereo analysis

### Recommended Learning Materials
- "Digital Audio Editing Fundamentals" - Understanding waveform editing
- "Hip-Hop Vocal Production" - Genre-specific editing techniques
- "Audio Analysis Techniques" - Using measurement tools effectively

### Advanced Techniques
- **Precision Editing:** Frame-accurate editing techniques
- **Spectral Processing:** Using frequency-domain tools
- **Time Stretching:** Preserving quality during tempo changes
- **Noise Reduction:** Cleaning up audio recordings

## 📚 In-Depth Technical Analysis

### Waveform Visualization
Edison provides comprehensive waveform analysis:

**Display Features:**
- Real-time waveform visualization
- Zoom and navigation controls
- Selection and editing tools
- Grid and timing alignment
- Multiple view modes (waveform, spectrogram)

**Analysis Capabilities:**
- Amplitude measurement
- Timing and duration analysis
- Frequency content visualization
- Dynamic range assessment
- Phase relationship analysis

### Editing Engine
Professional-grade editing features:

**Basic Editing:**
- Cut, copy, paste functionality
- Undo/redo with unlimited steps
- Selection tools (time, amplitude, spectral)
- Fade and crossfade creation
- Crossfade curve customization

**Advanced Editing:**
- Time stretching and pitch shifting
- Noise reduction and restoration
- Spectral editing capabilities
- Batch processing options
- Format conversion tools

### Recording Capabilities
Built-in recording functionality:

**Input Handling:**
- Multiple input source support
- Input monitoring with zero latency
- Recording quality settings
- Real-time effects during recording
- Multi-take management

**Recording Features:**
- Automatic gain control
- Input level monitoring
- Recording quality optimization
- File format selection
- Post-recording processing

### Analysis Tools
Comprehensive measurement and analysis:

**Spectral Analysis:**
- Frequency spectrum visualization
- Harmonic content analysis
- Noise floor assessment
- Frequency response measurement
- Spectral editing capabilities

**Dynamic Analysis:**
- Level and peak measurement
- Dynamic range assessment
- RMS and true peak analysis
- Compression effect visualization
- Loudness measurement

## 🎛️ Parameter Deep Dive

### Display Controls
- **Zoom Level:** Adjusts horizontal and vertical zoom
- **View Mode:** Switches between waveform and spectrogram
- **Grid Settings:** Shows timing grid for alignment
- **Selection Tools:** Various selection methods
- **Navigation:** Scroll and position controls

### Editing Tools
- **Cut Tool:** Removes selected audio
- **Copy Tool:** Copies selected audio to clipboard
- **Paste Tool:** Inserts copied audio
- **Fade Tool:** Creates fade-ins and fade-outs
- **Selection Tool:** Makes selections for editing

### Recording Parameters
- **Input Source:** Selects audio input source
- **Recording Quality:** Sets bit depth and sample rate
- **Monitoring:** Enables input monitoring
- **Gain Control:** Adjusts input gain
- **File Format:** Selects recording format

### Analysis Parameters
- **Spectrum Resolution:** Adjusts frequency analysis detail
- **Window Type:** Selects analysis window function
- **Smoothing:** Applies smoothing to analysis
- **Range Settings:** Sets analysis range
- **Overlay Options:** Shows additional analysis data

## 🎼 Editing Applications

### Hip-Hop Production Applications
Edison excels in hip-hop production scenarios:
- **Vocal Editing:** Rap verse and hook arrangement
- **Sample Preparation:** Cleaning and preparing samples
- **Loop Creation:** Creating seamless loops from audio
- **Timing Correction:** Aligning elements to grid

### Rap Production Applications
Essential for rap production workflows:
- **Verse Editing:** Arranging rap verses and ad-libs
- **Hook Arrangement:** Creating catchy vocal hooks
- **Breath Control:** Managing breath sounds in vocals
- **Timing Correction:** Aligning rap delivery to beat

### R&B Production Applications
Valuable for R&B production:
- **Vocal Processing:** Smoothing and enhancing vocals
- **Harmony Arrangement:** Creating backing vocal arrangements
- **Atmosphere Creation:** Generating ambient textures
- **Smooth Transitions:** Creating seamless musical progressions

## 🧪 Experimental Techniques

### Advanced Editing
Creative uses of Edison's editing capabilities:
- **Granular Editing:** Working with tiny audio fragments
- **Reverse Editing:** Creating reverse effects and textures
- **Stretched Timing:** Manipulating audio duration
- **Layered Editing:** Working with multiple audio layers

### Analysis Experiments
Advanced analysis techniques:
- **Spectral Manipulation:** Using frequency-domain editing
- **Harmonic Analysis:** Understanding harmonic content
- **Dynamic Analysis:** Studying dynamic range
- **Phase Analysis:** Examining stereo relationships

### Integration Techniques
Advanced integration with other tools:
- **MIDI Sequencing:** Aligning audio to MIDI sequences
- **Audio Warping:** Matching audio to tempo
- **Sidechain Integration:** Using analysis for processing
- **Automation Integration:** Dynamic parameter changes

## 🎚️ Workflow Optimization

### Editing Workflow
Optimizing the editing process:
- **Template Creation:** Reusable editing starting points
- **Batch Processing:** Applying changes to multiple files
- **Selection Methods:** Efficient selection techniques
- **Undo Management:** Managing editing history
- **Performance Optimization:** Reducing processing load

### Recording Workflow
Streamlining the recording process:
- **Session Templates:** Starting points for recording sessions
- **Input Setup:** Efficient input configuration
- **Monitoring Setup:** Optimal monitoring configuration
- **Quality Control:** Recording quality verification
- **Post-Recording:** Efficient post-recording workflow

### Integration Workflows
Incorporating Edison into existing workflows:
- **Template Integration:** Starting projects with Edison
- **Session Management:** Organizing Edison projects
- **Backup Strategies:** Protecting edited audio
- **Collaboration:** Sharing edited audio with others

## 🎧 Genre-Specific Applications

### Hip-Hop
- **Sample Chopping:** Creating rhythmic patterns
- **Vocal Arrangement:** Organizing rap verses and hooks
- **Loop Creation:** Making seamless loops from samples
- **Timing Correction:** Aligning elements to beat

### Rap
- **Verse Editing:** Arranging rap verses and ad-libs
- **Hook Arrangement:** Creating catchy vocal hooks
- **Breath Control:** Managing breath sounds in vocals
- **Delivery Timing:** Aligning rap delivery to beat

### R&B
- **Vocal Smoothing:** Enhancing vocal smoothness
- **Harmony Creation:** Arranging backing vocals
- **Atmosphere Building:** Creating ambient textures
- **Smooth Transitions:** Seamless musical progressions

## 🔄 Integration with Other Plugins

### Audio Processing Tools
Edison works well with audio processing tools:
- **Fruity Compressor:** Dynamics processing
- **Fruity Limiter:** Level control and protection
- **Fruity Parametric EQ 2:** Frequency adjustment
- **Fruity Stereo Enhancer:** Spatial enhancement

### Effects Processing
Integration with effects processing:
- **Fruity Convolver:** Reverb and convolution effects
- **Fruity Chorus:** Chorus and ensemble effects
- **Fruity Flanger:** Modulation effects
- **Fruity Delay:** Delay and echo effects

### Analysis Tools
Integration with analysis tools:
- **Fruity Spectroman:** Additional spectrum analysis
- **Fruity dB Meter:** Level measurement
- **Fruity Formula Controller:** Mathematical analysis
- **Dashboard:** Visual monitoring

## 📖 Historical Context

### Development Background
Edison was developed as FL Studio's professional audio editor:
- Created to provide comprehensive audio editing
- Designed for both basic and advanced editing
- Developed with professional audio editors in mind
- Intended to rival standalone audio editors

### Evolution Through FL Studio Versions
- Initially introduced with basic waveform display
- Enhanced with advanced editing tools
- Improved with better analysis capabilities
- Expanded with more format support

### Impact on Music Production
Edison has influenced music production by:
- Providing accessible audio editing
- Enabling in-DAW sample preparation
- Facilitating creative sound design
- Supporting diverse musical genres

## 🧠 Advanced Editing Techniques

### Precision Editing
Advanced techniques for accurate audio editing:
- **Frame-Accurate Editing:** Sample-level precision
- **Zero-Crossing Editing:** Minimizing clicks and pops
- **Spectral Editing:** Frequency-domain editing
- **Phase-Aware Editing:** Maintaining stereo integrity

### Creative Applications
Advanced creative applications of editing:
- **Sound Design:** Creating new sounds from existing audio
- **Texture Creation:** Generating atmospheric elements
- **Rhythmic Manipulation:** Creating complex rhythmic patterns
- **Tonal Transformation:** Changing fundamental character

### Performance Optimization
Advanced techniques for efficient performance:
- **Resource Management:** Optimizing CPU and memory usage
- **File Management:** Efficient file handling strategies
- **Processing Optimization:** Reducing computational load
- **Workflow Efficiency:** Streamlining editing processes

## 📊 Performance Considerations

### CPU Usage
Managing Edison's impact on system performance:
- **File Size:** Larger files require more processing
- **Analysis Tools:** Active analysis increases CPU usage
- **Real-time Processing:** Effects during editing add to CPU load
- **Simultaneous Instances:** Multiple instances increase usage
- **Optimization Strategies:** Techniques for reducing usage

### Memory Usage
Managing RAM consumption:
- **File Size:** Large files consume more memory
- **Processing:** Active editing requires memory
- **Analysis Data:** Spectral analysis uses memory
- **Undo History:** Extensive history increases memory usage
- **Buffer Management:** Efficient memory allocation

### Optimization Strategies
Techniques for optimizing performance:
- **File Reduction:** Using smaller files when possible
- **Analysis Management:** Disabling analysis when not needed
- **Processing Control:** Using effects judiciously
- **History Management:** Controlling undo history
- **File Format:** Choosing appropriate formats

## 🛠️ Troubleshooting Common Issues

### Editing Problems
- **Clicks/Pops:** Issues with cut points and fades
- **Timing Issues:** Problems with alignment and sync
- **Quality Loss:** Degradation during processing
- **Format Issues:** Problems with file compatibility
- **Selection Problems:** Issues with making selections

### Analysis Issues
- **Spectral Artifacts:** Problems with frequency analysis
- **Measurement Inaccuracy:** Issues with level measurement
- **Display Problems:** Issues with waveform display
- **Resolution Issues:** Problems with analysis detail
- **Performance Issues:** Slow analysis processing

### Performance Issues
- **High CPU Usage:** Excessive processor load
- **Memory Problems:** Insufficient RAM for files
- **Dropouts:** Audio dropouts during editing
- **Lagging Response:** Delayed response to input
- **Crash Issues:** Plugin instability

## 🎚️ Advanced Configuration

### Custom Presets
Creating and managing custom configurations:
- **Editing Templates:** Starting points for different tasks
- **Analysis Setups:** Configured analysis parameters
- **Recording Sessions:** Optimized recording configurations
- **Genre-Specific Presets:** Configured for specific styles

### Workflow Optimization
Using Edison efficiently:
- **Keyboard Shortcuts:** Efficient editing shortcuts
- **Tool Customization:** Customizing tool behavior
- **Interface Layout:** Optimizing the interface
- **Session Templates:** Starting points for projects

### Integration Configurations
Optimizing for different integration scenarios:
- **DAW Integration:** Sequencing and automation
- **Hardware Integration:** External device control
- **Network Integration:** Remote control options
- **Plugin Integration:** Working with other plugins

## 🌐 Community and Resources

### Online Communities
- **FL Studio Forums:** Discussions about Edison techniques
- **Reddit Groups:** Sharing editing techniques and tips
- **Discord Servers:** Real-time collaboration and feedback

### Educational Resources
- **Video Tutorials:** Demonstrations of advanced techniques
- **Written Guides:** In-depth articles on editing
- **Webinars:** Live demonstrations and Q&A sessions

### Sharing Platforms
- **Sample Libraries:** Websites hosting audio samples
- **Tutorial Collections:** Collections of editing tutorials
- **Educational Content:** Tutorials and educational materials

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Perform precise audio editing with Edison
- [ ] Create custom editing configurations for different tasks
- [ ] Apply advanced analysis techniques
- [ ] Optimize performance for large audio files
- [ ] Create genre-appropriate editing workflows
- [ ] Troubleshoot common editing issues

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
**Estimated Documentation Time:** 15-20 hours

---

*This research framework ensures comprehensive documentation of Edison for producers, editors, and sound designers.*
```

---

## FILE: 01-Learning\Concepts\advanced-editing.md

```markdown
Tags: hip-hop/rap | R&B | lofi

## Advanced Edison Editing Techniques

### Time-Stretching Mastery

**What it does:**
- Changes duration without pitch change
- Preserves character while fitting arrangement

**Best Practices:**
1. Use elastic mode for best quality
2. Keep stretches under 30%
3. Process in shorter segments for quality
4. Add light reverb after stretch (masks artifacts)

**Hip-Hop Stretch Settings:**
| Situation | Mode | Preserve |
|-----------|------|----------|
| Phrase-level | Slicing | Rhythm |
| Word-level | Elastic | Timing |
| Subtle | Realtime | Character |

### Pitch Editing

**Corrective Pitch:**
1. Identify off-pitch notes
2. Use pitch correction tool
3. Blend with original (60/40)
4. Add subtle vibrato

**Creative Pitch:**
1. Shift entire sample
2. Layer with original
3. Detune for thickness
4. Result: Double-tracked effect

**Best Practices:**
- Subtle shifts (1-3 semitones)
- Match key of project
- Layer for chorus, solo for verse

### Spectral Editing

**What it is:**
- Edit audio by frequency content
- Remove sounds within frequency range
- Surgical audio cleanup

**Workflow:**
1. Switch to spectral view
2. Select frequency range
3. Silence unwanted sound
4. Crossfade edges
5. Result: Clean audio

**Use Cases:**
- Remove clicks between words
- Silence background noise
- Separate layered sounds

### Crossfade Techniques

**Seamless Loop:**
1. Identify loop points
2. Apply crossfade (5-20ms)
3. Match RMS levels
4. Test seamless playback

**Sample-to-Music:**
1. Trim sample end
2. Crossfade to next section
3. Match levels
4. Blend into arrangement

**Quick Crossfade Table:**
| Material | Fade Length | Type |
|----------|-------------|------|
| Vocals | 5-15ms | S-curve |
| Drums | 2-10ms | Linear |
| Loops | 10-30ms | S-curve |
| Texture | 50-100ms | Exponential |

### Multi-Track Recording

**Setup:**
1. Enable multi-track mode
2. Configure input/output
3. Record multiple passes
4. Take best parts

**Advanced Technique:**
1. Record full take
2. Record ad-libs separately
3. Blend into one track
4. Result: Polished vocal

### Batch Processing

**What it is:**
- Apply same processing to multiple files
- Efficient workflow

**Workflow:**
1. Import all files
2. Select all
3. Apply processing
4. Export all
5. Result: Consistent batch

**Best Uses:**
- Normalize sample library
- Add consistent fades
- Apply EQ curve
- Convert format/bit depth

### Destructive Editing Safety

**Rules:**
1. ALWAYS work on copy
2. Use non-destructive first
3. Save versions
4. Document changes
5. Keep original

**Safe Workflow:**
1. Original → Save copy
2. Process on copy
3. Export as new file
4. Original remains intact

### The "Professional Polish" Workflow

**For vocal samples:**
1. **Import/Record** → Set levels, no clipping
2. **Clean** → Remove clicks, pops, silence
3. **Trim** → Remove dead space
4. **Fade** → 5ms in, 10ms out
5. **EQ** → Remove rumble, add presence
6. **Compress** → Light (2:1, -18dB)
7. **Enhance** → Harmonic or tape warmth
8. **Normalize** → Peak to -1dB
9. **Export** → As WAV, 44.1/16

**Result:** Professional sample every time

### Troubleshooting Artifacts

| Problem | Cause | Fix |
|---------|-------|-----|
| Audio clicks | Hard cut | Add fade |
| Phasing | Stereo reverse | Check mono |
| Aliasing | High-frequency content | Low-pass filter |
| Distortion | Clipping | Reduce gain |
| Noise floor | Poor recording | Gate or silence |

```

---

## FILE: 01-Learning\Concepts\recording-mastery.md

```markdown
Tags: hip-hop/rap | R&B | electric

## Edison Recording Mastery

### Input Signal Chain

**Optimal Signal Path:**
`\`\`
Source → Preamp → Audio Interface → Edison
              ↓
         Hardware Monitoring
`\`\`

**Level Setting:**
| Stage | Target Level | Purpose |
|-------|-------------|---------|
| Source | Healthy output | Clean signal |
| Preamp | +6dB headroom | Clean gain |
| Interface | -12dBFS | Clean A/D |
| Edison | Watch meters | No clipping |

**Clipping Indicators:**
- Edison meter red = clipping
- If clipping: Reduce input at interface
- Never rely on software clipping

### Microphone Techniques

**Vocal Mic Setup:**
| Mic Type | Character | Best For |
|----------|-----------|----------|
| Large Diaphragm | Warm, full | R&B, hip-hop |
| Small Diaphragm | Bright, detailed | Clarity |
| Dynamic | Punchy | Rap, aggressive |
| Condenser | Smooth | Ballads, smooth |

**Polar Pattern:**
| Pattern | Use | Result |
|---------|-----|--------|
| Cardioid | Solo recording | Rejection of room |
| Supercardioid | Noise rejection | Narrow pickup |
| Figure-8 | Dual vocals | Room capture |

### Recording Environment

**Ideal Conditions:**
- Low background noise (< -60dB)
- Moderate humidity (40-60%)
- Minimal reflections
- Consistent temperature

**Quick Treatment:**
- Blankets on walls (absorption)
- Carpet on floor (reflection control)
- Moving blanket around mic (proximity)
- Result: Cleaner recordings

### Multiple Take Workflow

**Recording Strategy:**
1. Record full take
2. Record alternate take
3. Record ad-libs
4. Take best parts from each
5. Edit into single "comp"

**Comp Selection Criteria:**
| Criterion | Weight | Notes |
|-----------|--------|-------|
| Timing | High | Tight to grid |
| Pitch | High | On key/flow |
| Energy | Medium | Consistent |
| Clarity | High | Articulation |

### Punch Recording

**What it is:**
- Replace specific sections without re-recording whole take

**Workflow:**
1. Identify problem section
2. Set punch in/out points
3. Record new section
4. Check seamlessness
5. Repeat as needed

**Best Practices:**
- Match previous level
- Match previous timbre
- Practice before recording
- Record 2-3 passes

### Signal Processing in Record

**When to process on input:**
- Compression: Dynamic control
- EQ: Tone shaping
- Saturation: Character

**When to process after:**
- Precision processing
- Creative effects
- Fine adjustments

### Recording Workflow Checklist

- [ ] Set sample rate
- [ ] Configure buffer size
- [ ] Select input source
- [ ] Set monitor level
- [ ] Test recording level
- [ ] Begin recording
- [ ] Monitor for clipping
- [ ] Stop, check recording
- [ ] Edit if needed
- [ ] Export as needed

### Recording Vocals for Hip-Hop

**Style-Specific Approach:**

| Style | Mic | Distance | Compression |
|--------|-----|----------|-------------|
| Aggressive rap | Dynamic | 2-4 inches | Light on input |
| Smooth rap | Condenser | 4-6 inches | None on input |
| Harmonies | Condenser | 6-12 inches | None on input |
| Ad-libs | Dynamic | 2-4 inches | Light on input |

**Setup:**
1. Pop filter in place
2. Monitor mix: 80% input / 20% playback
3. Start recording
4. Take breaks every 20 minutes

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Edison Parameter Cheat Sheet

## Recording Controls
- **Record:** `Shift + R` (Wait for input or manual).
- **Play/Stop:** `Space`.
- **Loop Toggle:** Loops the selected region.

## Processing Tools
- **Blur Tool:** `Ctrl + B`. Convolution-based spectral smearing.
- **Tune Loop:** `Ctrl + L`. Smooths out loop points.
- **Amp Envelopes:** Adjust volume/pan over time inside the editor.

## Analysis
- **Spectral View:** Displays frequency heat map.
- **Snap to Zero-Crossing:** Prevents clicks during edits.
- **Scripting:** `Tools > Run script`. Python-based DSP operations.

```

---

## FILE: 01-Learning\Quick-Reference\quick-reference-card.md

```markdown
Tags: hip-hop/rap | R&B | electric

## Edison Quick Reference Card

### Recording Quick Settings

| Source | Sample Rate | Bit Depth | Input Level |
|--------|-------------|-----------|-------------|
| Vocals | 44.1 kHz | 24-bit | -12 dBFS |
| Instruments | 44.1 kHz | 24-bit | -6 dBFS |
| Drums | 48 kHz | 24-bit | -6 dBFS |
| Samples | Match project | 16/24-bit | -3 dBFS |

### Edit Keyboard Shortcuts

| Action | Shortcut |
|--------|-----------|
| Cut | Ctrl+X |
| Copy | Ctrl+C |
| Paste | Ctrl+V |
| Undo | Ctrl+Z |
| Redo | Ctrl+Y |
| Select All | Ctrl+A |
| Delete | Delete |
| Trim | Ctrl+T |
| Normalize | Ctrl+N |
| Fade In | F1 |
| Fade Out | F2 |
| Zoom In | + |
| Zoom Out | - |
| Play | Space |
| Stop | Enter |
| Record | R |

### Fade Types

| Type | Use | Length |
|------|-----|--------|
| Linear | Standard | 5-20ms |
| S-curve | Vocals | 10-30ms |
| Exponential | Smooth | 20-50ms |
| Logarithmic | Drum transients | 2-10ms |

### Common Edit Lengths

| Element | Typical Length |
|---------|----------------|
| Vocal phrase | 1-4 bars |
| One-shot | 500ms-2s |
| Drum hit | 100-500ms |
| Loop | 1-8 bars |
| Texture | 4-32 bars |

### Processing Quick Settings

| Effect | Setting | Purpose |
|--------|---------|---------|
| Normalize | Peak to -1dB | Standardize level |
| Reverse | 100% | Creative effect |
| Pitch shift | ±2 semitones | Subtle correction |
| Time stretch | <30% | Fit to tempo |
| Fade in | 5-20ms | Remove clicks |
| Fade out | 10-50ms | Natural decay |
| High-pass | 80 Hz | Remove rumble |
| Low-pass | 16 kHz | Remove hiss |

### Export Settings

| Use | Format | Sample Rate | Bit Depth |
|-----|---------|--------------|-----------|
| FL Studio | WAV | Match project | 24-bit |
| Distribution | WAV | 44.1 kHz | 16-bit |
| Web | MP3 | 44.1 kHz | 320kbps |
| Archive | WAV | 48 kHz | 24-bit |

### Troubleshooting Quick Fixes

| Problem | Fix |
|---------|-----|
| Clicks | Add fades |
| Pops | De-ess or reduce gain |
| Hiss | High-pass filter |
| Hum | Ground lift |
| Distortion | Reduce input gain |
| Phase | Reverse polarity |
| Noise floor | Gate or edit out |
| Thin sound | Add low-end EQ |

### Recording Checklist

- [ ] Set sample rate
- [ ] Configure buffer size
- [ ] Select input source
- [ ] Test input level
- [ ] Enable monitoring
- [ ] Check for clipping
- [ ] Record test clip
- [ ] Review quality

### Edit Checklist

- [ ] Remove silence
- [ ] Add fades
- [ ] Match levels
- [ ] Check transients
- [ ] Test looping
- [ ] A/B processing
- [ ] Export properly

```

---

## FILE: 01-Learning\Quick-Reference\recording-workflows.md

```markdown
# Edison Recording Workflows

## Basic Recording
1. Load **Edison** into a Mixer track.
2. Select **Input** source in the Mixer (e.g., Mono Mic).
3. Set Record mode to **"On Play"** or **"On Input"**.
4. Press the **Record** button in Edison.
5. Start playback or start playing.

## Loop Slicing
1. Select a drum loop region.
2. Right-click > **Regions > Detection > Dull/Medium/Sharp auto-slicing**.
3. Export to **Slicex** or **Sampler** by clicking the "Drag selection" icon.

## Noise Reduction
1. Select a region of "Silence" (only noise).
2. Right-click > **Clean up > Acquire noise profile**.
3. Select the whole clip.
4. Right-click > **Clean up > Clean up tool**.
5. Adjust threshold and amount.

```

---

## FILE: 01-Learning\Quick-Reference\sampling-hotkeys-cheat-sheet.md

```markdown
# Quick Reference: Sampling Hotkeys (Edison)

Tags: sampling | workflow-speed | shortcuts

## 1. Top 5 Efficiency Keys
| Command | Key | When to use |
| :--- | :--- | :--- |
| **Snap to Zero Crossing** | `Shift+S` | Every time you chop. |
| **Time Stretch / Pitch** | `Alt+T` | Changing the "Vibe" of a loop. |
| **Blur Tool** | `Ctrl+B` | Creating "Ambient" R&B pads. |
| **Normalize** | `Ctrl+N` | Getting quiet recordings to 0dB. |
| **Dump to Playlist** | `Shift+C` | Sending your flip to the arrangement. |

## 2. Genre-Specific Shortcuts
- **The "Moody" Swell:** Select a hit > `Alt+Left` (Reverse) > `Ctrl+B` (Blur) > `Alt+Left` (Reverse again).
- **The "Boom Bap" Grit:** `Tools > Format > Edit Properties` > Set Sample Rate to **22050Hz**.
- **The "Vocal Chop" Prep:** `Regions > Auto-detect regions` > `Ctrl+Delete` (Remove quiet parts).

## 3. Troubleshooting
- **No Sound?** Check if the "Monitor" button (Speaker icon) is ON.
- **Can't Drag Sample?** Ensure you are clicking the "Drag / Copy sample" icon (Arrow/Page icon) in the top right.
- **Selection is too small?** Press `Page Up` or `Page Down` to zoom in/out instantly.

## 4. FL-Native Best Practice
Instead of "Exporting" to your hard drive, use the **"Drag / Copy"** icon to move the sample directly into **Fruity Slicer** or **Slicex**. This keeps your project folder clean and your workflow fast.

```

---

## FILE: 02-Data\parameters\edison-params.json

```json
{
  "plugin_name": "Edison",
  "category": "Utility",
  "engine_precision": "32-bit float",
  "tools": [
    "Blur Tool",
    "Tune Loop",
    "Claw Machine",
    "Spectral View",
    "Python Scripting"
  ],
  "sample_rate_support": "Project Dependent",
  "bit_depth_support": "16, 24, 32-bit"
}

```

---

## FILE: 02-Data\presets\sample-collections.json

```json
Tags: hip-hop/rap | R&B | electric

## Edison Sample Collection

### Essential Sample Pack Settings

`\`\`json
{
  "vocalOneShots": {
    "description": "Professional vocal samples for hip-hop",
    "recordingSettings": {
      "sampleRate": "44100",
      "bitDepth": "24",
      "inputGain": "-12dB",
      "compression": "2:1, -20dB",
      "fadeIn": "10ms",
      "fadeOut": "20ms"
    },
    "samples": [
      {
        "name": "Ah Yeah",
        "editing": "Trim silence, fade edges",
        "level": "-3dB",
        "key": "D",
        "bpm": "Variable"
      },
      {
        "name": "Go",
        "editing": "Short, punchy trim",
        "level": "-2dB",
        "key": "N/A",
        "bpm": "Variable"
      },
      {
        "name": "Word",
        "editing": "Natural decay",
        "level": "-3dB",
        "key": "N/A",
        "bpm": "Variable"
      }
    ],
    "exportFormat": {
      "format": "WAV",
      "sampleRate": "44100",
      "bitDepth": "16"
    },
    "useCases": ["Hip-hop production", "Sample flips", "One-shot elements"],
    "tags": ["hip-hop/rap", "vocals", "essential"]
  },
  "drumOneShots": {
    "description": "Punchy drum samples",
    "creationSettings": {
      "transientBoost": "+50%",
      "fadeOut": "50ms",
      "normalization": "-1dB"
    },
    "samples": [
      {
        "name": "Kick Punchy",
        "frequency": "80Hz",
        "decay": "200ms",
        "character": "Punchy"
      },
      {
        "name": "Snare Crisp",
        "frequency": "4kHz",
        "decay": "150ms",
        "character": "Crisp"
      },
      {
        "name": "Hat Closed",
        "frequency": "8kHz",
        "decay": "80ms",
        "character": "Sharp"
      }
    ],
    "useCases": ["Drum programming", "Sample library", "Custom drums"],
    "tags": ["hip-hop/rap", "drums", "essential"]
  },
  "textureLoops": {
    "description": "Atmospheric texture loops",
    "creationSettings": {
      "reverb": "Large, 30% wet",
      "fadeIn": "500ms",
      "fadeOut": "1000ms",
      "looping": true
    },
    "samples": [
      {
        "name": "Ambient Pad",
        "duration": "8 bars",
        "key": "Am",
        "bpm": "90"
      },
      {
        "name": "Textural Swell",
        "duration": "4 bars",
        "key": "Cmaj",
        "bpm": "100"
      }
    ],
    "useCases": ["Background", "Atmosphere", "Texture"],
    "tags": ["moody", "atmospheric", "texture"]
  }
}
`\`\`

### Processing Chains

`\`\`json
{
  "vocalProcessing": {
    "description": "Standard vocal processing chain",
    "chain": [
      {
        "step": 1,
        "effect": "Trim Silence",
        "settings": "Threshold -40dB"
      },
      {
        "step": 2,
        "effect": "High-Pass Filter",
        "settings": "80Hz"
      },
      {
        "step": 3,
        "effect": "Compressor",
        "settings": "Ratio 3:1, Threshold -18dB"
      },
      {
        "step": 4,
        "effect": "Enhance",
        "settings": "Harmonic 25%, High +2dB"
      },
      {
        "step": 5,
        "effect": "Fade In",
        "settings": "10ms S-curve"
      },
      {
        "step": 6,
        "effect": "Fade Out",
        "settings": "20ms S-curve"
      },
      {
        "step": 7,
        "effect": "Normalize",
        "settings": "Peak to -1dB"
      }
    ],
    "useCases": ["Professional vocals", "Sample creation", "Polished results"]
  },
  "drumProcessing": {
    "description": "Punchy drum processing chain",
    "chain": [
      {
        "step": 1,
        "effect": "Transient Designer",
        "settings": "Attack +50%"
      },
      {
        "step": 2,
        "effect": "EQ",
        "settings": "Low-shelf +3dB at 80Hz, High-shelf +2dB at 5kHz"
      },
      {
        "step": 3,
        "effect": "Compressor",
        "settings": "Ratio 4:1, Threshold -15dB"
      },
      {
        "step": 4,
        "effect": "Trim",
        "settings": "100ms from transient"
      },
      {
        "step": 5,
        "effect": "Fade Out",
        "settings": "50ms"
      },
      {
        "step": 6,
        "effect": "Normalize",
        "settings": "Peak to -1dB"
      }
    ],
    "useCases": ["Punchy drums", "One-shot samples", "Impact sounds"]
  }
}
`\`\`

```

---

## FILE: 02-Data\rules\destructive-editing-safety.md

```markdown
# Rules: Destructive Editing Safety (Edison)

Tags: sampling | workflow-safety | destructive-editing

## 1. The "Safety Save" Rule
Edison is a **Destructive** editor. Any changes you make (Blur, Pitch, Reverse) are applied directly to the audio data in RAM.
- **Rule:** Before applying a heavy effect (like Blur or Time Stretch), press **Ctrl+S** or "Save sample as" to a temp folder.
- **Why:** FL Studio's "Undo" history for Edison is separate from the main project undo. If you run out of undo levels in Edison, your original sample is gone forever.

## 2. Zero-Crossing Rule
- **Rule:** Always enable **"Snap to Zero Crossing" (Shift+S)** before making a cut or a slice.
- **Why:** Cutting audio in the middle of a waveform cycle creates a "click" or "pop." Snapping to zero ensures the waveform starts and ends at 0dB silence.

## 3. High-Resolution Export Rule
- **Rule:** Always record and edit at **32-bit Float**.
- **Why:** Hip-hop/Trap production often involves extreme gain changes (e.g., normalizing a quiet 808). 32-bit Float prevents digital noise and artifacts when pushing volume to the limit.

## 4. "Avoid" List
- **Avoid Over-Normalizing:** Don't normalize every single chop. Normalize the *entire* loop first, then chop. Normalizing individual chops separately ruins their relative volume levels.
- **Avoid 100% De-noising:** When using "Acquire noise profile," only apply it at **50-70%**. 100% de-noising usually adds "robotic" artifacts that ruin the soulful texture of R&B vocals.

```

---

## FILE: 02-Data\rules\edison-safety-rules.md

```markdown
Tags: hip-hop/rap | R&B | electric

## Edison Rules and Safety Guidelines

### Recording Rules

| Rule | Description | Priority |
|------|-------------|----------|
| Headroom | Always leave 6dB headroom | Critical |
| Sample Rate | Match project sample rate | High |
| Bit Depth | Record at 24-bit minimum | High |
| Input Level | Never clip on input | Critical |
| Monitor Mix | Hear yourself while recording | High |

### Editing Rules

| Rule | Description | Priority |
|------|-------------|----------|
| Non-destructive First | Always try non-destructive edits | High |
| Fade Everything | Always add fades to edits | Critical |
| Trim to Waveform | Remove silence, keep signal | High |
| Crossfade Loops | Crossfade at loop points | High |
| Save Versions | Keep original, work on copies | Medium |

### Processing Rules

| Rule | Description | Priority |
|------|-------------|----------|
| A/B Testing | Always compare processed vs original | Critical |
| Gain Staging | Check levels before/after | High |
| Light Touch | Subtle processing sounds better | Medium |
| Destructive Warning | Mark destructive edits clearly | High |
| Preset Backup | Save before loading new preset | Medium |

### File Management Rules

| Rule | Description | Priority |
|------|-------------|----------|
| Consistent Naming | Use naming convention | High |
| Organize Library | Tag and categorize | Medium |
| Backup Original | Never delete source files | Critical |
| Version Control | Save iterations | Medium |
| Export Standards | Use consistent export settings | High |

### Troubleshooting Quick Fixes

| Problem | Quick Fix | Follow-up |
|---------|----------|-----------|
| Clicks | Add fades | Check edit points |
| Pops | De-ess or reduce gain | Check proximity |
| Hiss | High-pass filter | Check environment |
| Hum | Ground lift or DI | Check cables |
| Distortion | Reduce input gain | Check signal chain |
| Phase Issues | Reverse polarity | Check mic placement |
| Noise Floor | Gate or edit out | Record quieter |
| Thin Sound | Add low-end EQ | Check mic distance |

### Quality Checklist

**Before Export:**
- [ ] No clipping (check meters)
- [ ] Consistent levels
- [ ] No clicks or pops
- [ ] Proper fade in/out
- [ ] Crossfades at loops
- [ ] Matches project tempo
- [ ] In correct key

**Before Recording:**
- [ ] Sample rate set
- [ ] Input level tested
- [ ] Monitoring configured
- [ ] No background noise
- [ ] Equipment working
- [ ] Backup recording ready

### The "Quality First" Principle

**Never Sacrifice Quality:**
- Always record the best possible source
- Clean up in editing, not fixing bad recordings
- Prevention over correction
- If it doesn't sound good going in, fix the source

**Best Practices:**
1. Treat Edison as part of signal chain
2. Quality at every stage
3. Clean in, clean out
4. Document all changes
5. Keep originals safe

```

---

## FILE: 03-Workflows\by-goal\audio-analysis.md

```markdown
# Audio Analysis Workflow (Edison)

## Goal
Inspect an audio file for technical errors like clipping, DC offset, or frequency resonance.

## Technical Steps
1. **Waveform Inspection:**
   - Look for "flat-topped" waveforms. This indicates **Digital Clipping**.
   - If the waveform is not centered on the horizontal axis, it has **DC Offset**. Use `Right-click > Tools > Center` to fix.
2. **Spectral Analysis:**
   - Switch to **Spectral View** (`Shift + S`).
   - Identify constant horizontal lines. These are **Resonant Hums** or constant interference.
   - Use the **Gain** tool on a specific frequency selection to surgically reduce them.
3. **Format Check:**
   - Check the status bar for Sample Rate and Bit Depth.
   - Use **Resample** (`Alt + R`) to convert if necessary for your project.

## Why it works
Edison's 32-bit floating-point engine provides extremely high visual resolution, allowing you to see problems that are often inaudible but affect the final mix quality.

```

---

## FILE: 03-Workflows\by-goal\cleanup-restoration.md

```markdown
# Cleanup and Restoration (Edison)

## Goal
Remove unwanted noise, breaths, or mouth clicks from a recording.

## Technical Steps
1. **Noise Profiling:**
   - Highlight a section containing only background noise.
   - Go to `Tools > Clean up > Acquire noise profile`.
2. **Denoising:**
   - Select the entire audio clip.
   - Go to `Tools > Clean up > Clean up tool`.
   - Adjust **Threshold** and **Amount** while listening to the "Output noise only" toggle to ensure you aren't removing actual music.
3. **De-Clicking:**
   - Use the `Tools > Spectral > Declicker` for rapid removal of mouth clicks or vinyl pops.
4. **Fading:**
   - Use `Ctrl + F` to apply quick fades to the start and end of regions to prevent DC offset clicks.

## Why it works
Edison uses spectral subtraction algorithms for denoising, which separates steady-state noise from dynamic audio signals based on the statistical profile you provide.

```

---

## FILE: 03-Workflows\by-goal\lofi-sample-flip-creative.md

```markdown
# Workflow: Creative Lo-Fi Sample Flipping
**Goal:** Transform generic loops into unique, textured "Moody" or "Jazzy" foundations using Edison's internal tools.

## 1. The "Old Record" Texture (Blur & Pitch)
- **Blur Tool (Ctrl+B):** Select a small melodic portion of your sample. Apply Blur with a high "Decay" setting (~500ms). This creates an ethereal, pad-like tail out of any sound.
- **Pitch Manipulation:** 
    - Use the **Time Stretch/Pitch Shift (Alt+T)** tool.
    - Set the "Pitch" to **-1200 cents** (1 octave down) but keep "Time" at 100%. This creates a deep, grimy texture common in Dark R&B.
    - Alternatively, shift it **+7 semitones** for a "chipmunk" soulful vocal feel.

## 2. The "Perfect Chop" Prep
1. **Auto-detect Regions:** Use `Regions > Auto-detect regions` to find transients.
2. **Manual Fine-tuning:** Zoom in to the sample start. Ensure the marker is exactly at the zero-crossing to avoid clicks.
3. **The Fade-In/Out (Ctrl+F):** Apply a micro-fade (2-5ms) to the beginning and end of your chops to ensure they "sit" better when triggered fast in Fruity Slicer or Sampler.

## 3. Harmonic Destruction (Bitcrushing)
1. **Sample Rate Reduction:** Go to `Tools > Format > Edit Properties`.
2. Reduce the **Sample Rate** from 44100 to **22050** or **11025**.
3. **The Result:** Instant high-end "grit" and aliasing that defines the "Boom Bap" 12-bit sound (SP-1200 style).

## 4. Reverse & Reverb "Ghost" Loops
1. Select a melodic hit (e.g., a bell or piano chord).
2. **Reverse it (Alt+Left).**
3. Apply a large reverb (external or via Edison's "Acquire Noise Profile" hack).
4. **Reverse it again.**
5. **Result:** You now have a "Ghostly" swell that leads perfectly into the next chord hit, essential for Moody Trap Soul.

```

---

## FILE: 03-Workflows\by-goal\recipe-collection.md

```markdown
Tags: hip-hop/rap | R&B | lofi

## Edison Workflow Recipes

### The "One-Hit Wonder"

**Goal:** Create instant hit sound

**Steps:**
1. **Record/Import** → Source material
2. **Trim** → Remove silence
3. **Enhance** → EQ + Harmonic (25%)
4. **Fade** → 5ms in, 10ms out
5. **Normalize** → -1dB peak
6. **Export** → One-shot sample

**Time:** 2-3 minutes

### The "Sample Flip"

**Goal:** Transform existing sample

**Steps:**
1. **Import** → Original sample
2. **Pitch** → Shift down 3 semitones
3. **Time** → Stretch 20%
4. **Filter** → Low-pass at 4kHz
5. **Reverb** → Small room, 20% wet
6. **Reverse** → Optional creative
7. **Export** → New sample

### The "Lo-Fi Texture"

**Goal:** Degraded, vintage sound

**Steps:**
1. **Import** → Clean sample
2. **Bit Crush** → Reduce bits (12-bit)
3. **Sample Rate** → Downsample to 8kHz
4. **Pitch** → Detune slightly (-5 cents)
5. **Tape** → Add wow/flutter
6. **EQ** → Roll off extremes
7. **Fade** → Long in/out (100ms)
8. **Export** → Texture sample

### The "Layered Drum"

**Goal:** Unique drum sound

**Steps:**
1. **Import** → 3 drum samples
2. **Trim** → Each to minimal length
3. **Level** → Match peaks
4. **Phase** → Align transients
5. **Process** → Light compression (3:1)
6. **Blend** → 50/25/25 ratio
7. **Export** → Layered drum

### The "Vocal Chop"

**Goal:** Rhythmic vocal element

**Steps:**
1. **Import** → Vocal recording
2. **Select** → Best phrase
3. **Trim** → Tight selection
4. **Fade** → 3ms in/out
5. **Pitch** → Stabilize if needed
6. **Duplicate** → 2-4 times
7. **Vary** → Slight pitch/level per
8. **Arrange** → Rhythmic pattern
9. **Export** → Vocal chop

### The "Texture Layer"

**Goal:** Background atmosphere

**Steps:**
1. **Record/Import** → Field recording or synth
2. **Process** → Long reverb (3+ seconds)
3. **Filter** → Remove harshness
4. **Fade** → Very long in/out
5. **Loop** → Test seamless
6. **Export** → Texture loop

### Quick Reference Table

| Goal | Time | Key Steps | Export |
|------|-------|-----------|--------|
| One-hit | 2-3 min | Trim, enhance, fade | Sample |
| Sample flip | 10-15 min | Pitch, stretch, filter | Sample |
| Lo-fi texture | 5-10 min | Bit crush, tape, EQ | Texture |
| Layered drum | 5-8 min | Import, trim, blend | One-shot |
| Vocal chop | 5-10 min | Select, fade, arrange | Loop |
| Texture layer | 5-10 min | Reverb, filter, fade | Loop |

### The "Professional Workflow"

**Daily Production:**
1. Morning: Record samples as needed
2. Throughout day: Edit and process
3. End of day: Export completed samples
4. Organize: Tag and file properly

**Sample Library Maintenance:**
1. Quality check all exports
2. Consistent naming convention
3. Tag with BPM, key, genre
4. Back up regularly
5. Document creation notes

```

---

## FILE: 04-Reference\analysis-tools-reference.md

```markdown
# Edison Analysis Tools Reference

## Visualization Modes
- **Waveform:** Amplitude (Volume) over Time. Best for transient inspection.
- **Spectrum:** Frequency Intensity over Time. Best for identifying frequency build-ups.
- **Dual:** Shows both for a comprehensive view.

## Measurement Tools
- **Snap to Grid:** Aligns selections to bars/beats.
- **Snap to Zero-Crossing:** Ensures edits happen when the waveform is at 0 amplitude, preventing "pops".
- **Detect Regions:** Automatically finds slices based on volume peaks (transients).

## Advanced DSP Tools
- **Equalize:** Standard frequency shaping.
- **Blur:** Multiplies the audio by an impulse for ambient textures.
- **Time Stretch:** Changes length without changing pitch.
- **Pitch Shift:** Changes pitch without changing length.

```

---

