# Newtime - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 00-START-HERE.md

```markdown
# Newtime: Start Here

Welcome to the **Newtime** Deeper Dive. Newtime is FL Studio's dedicated tool for time-warping and audio quantization. It allows you to stretch audio, shift pitch, and correct timing issues with professional-grade precision while maintaining audio quality.

## 🗺️ Quick Navigation Guide

### 1. The Essentials (Start Here)
- **[README.md](./README.md):** The central hub for warping goals and engine specs.
- **[01-Learning/Quick-Reference/parameter-cheat-sheet.md](./01-Learning/Quick-Reference/parameter-cheat-sheet.md):** A fast breakdown of the Warping Markers, Time, and Pitch controls.
- **[01-Learning/Quick-Reference/time-stretching-algorithms.md](./01-Learning/Quick-Reference/time-stretching-algorithms.md):** Choosing between Slices, Tones, and Tonal modes.

### 2. Core Concepts
- **[01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md](./01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md):** Navigating the time-line and marker system.
- **[04-Reference/algorithm-selection-guide.md](./04-Reference/algorithm-selection-guide.md):** When to prioritize transient preservation vs. harmonic integrity.

### 3. Workflow Recipes
- **[03-Workflows/by-goal/tempo-matching-samples.md](./03-Workflows/by-goal/tempo-matching-samples.md):** Forcing any loop to match your project BPM perfectly.
- **[03-Workflows/by-goal/key-transposition.md](./03-Workflows/by-goal/key-transposition.md):** Shifting keys without the "chipmunk" vocal effect.
- **[03-Workflows/by-goal/creative-texture-stretching.md](./03-Workflows/by-goal/creative-texture-stretching.md):** Using extreme warping for cinematic atmospheres.

## 🚀 Rapid Success Protocol
1. **Drag and Drop:** Toss an audio clip directly into the Newtime window.
2. **Set the Grid:** Ensure the grid matches your project's tempo (usually automatic).
3. **Warp the Markers:** Drag the white markers to quantize audio beats to the grid.
4. **Adjust Pitch:** Use the **Pitch** knob to transpose the entire sample.
5. **Preserve Formants:** Keep the **Formant** button active for vocals to maintain a natural "human" sound.
6. **Send to Playlist:** Use the **Drag-to-Playlist** button to export your warped audio.

---
*For technical specs and algorithm data, see the [02-Data/](./02-Data/) folder.*

```

---

## FILE: README.md

```markdown
﻿# Newtime - Time Stretching & Pitch Shifting

`\`\`
██╗    ██╗███████╗██████╗ ██╗   ██╗ █████╗ ██████╗     ██████╗ ██████╗  █████╗ ███╗   ██╗███████╗██████╗
██║    ██║██╔════╝██╔══██╗██║   ██║██╔══██╗██╔══██╗    ██╔════╝ ██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔══██╗
██║ █╗ ██║█████╗  ██████╔╝██║   ██║███████║██████╔╝    ██║      ██████╔╝███████║██╔██╗ ██║█████╗  ██████╔╝
██║███╗██║██╔══╝  ██╔══██╗██║   ██║██╔══██║██╔══██╗    ██║      ██╔══██╗██╔══██║██║╚██╗██║██╔══╝  ██╔══██╗
╚███╔███╔╝███████╗██████╔╝╚██████╔╝██║  ██║██║  ██║    ╚██████╗ ██████╔╝██║  ██║██║ ╚████║███████╗██║  ██║
 ╚══╝╚══╝ ╚══════╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝     ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Time Stretching / Pitch Shifting
**Category:** Generator / Utility / Audio Processing
**Official Manual:** [Image-Line Newtime Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Newtime.htm)

---

## 🎯 What is Newtime?

Newtime is FL Studio's dedicated **Time Stretching and Pitch Shifting** plugin. It is specifically designed to handle audio files that need to be stretched to different tempos or shifted to different keys without affecting the other parameter. It uses advanced algorithms to maintain audio quality during these transformations, making it essential for working with samples that need to match your project's tempo or key.

**Key Capabilities:**
- **Time Stretching:** Change audio length without affecting pitch.
- **Pitch Shifting:** Change audio pitch without affecting tempo.
- **Preserve Formants:** Maintain vocal characteristics during pitch shifting.
- **Multiple Algorithms:** Different algorithms for different content types (Slices, Tones, etc.).
- **Real-time Processing:** Immediate response to parameter changes.
- **High Quality Modes:** Preset algorithms optimized for different audio types.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **time-stretching-algorithms.md** (Different modes for different content)
3. Create **parameter-cheat-sheet.md**
4. Load a vocal sample and adjust the "Pitch" knob to hear the key change.

### For Sample Manipulators:
1. Study **tempo-matching-workflows.md**
2. Review **key-transposition-techniques.md**
3. Learn **formant-preservation-for-vocals.md**

### For Sound Designers:
1. Study **creative-pitch-shifting.md**
2. Review **time-stretching-for-textures.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Time:** Stretch factor (0.5x to 2x typically).
  - **Pitch:** Transposition in semitones (-24 to +24).
  - **Formant:** Preserve vocal characteristics.
  - **Algorithm:** Different modes for different content.
  - **Quality:** Processing quality vs speed.

- [ ] **time-stretching-algorithms.md**
  - **Slices:** For rhythmic content (drums, percussion).
  - **Tones:** For pitched content (melodies, vocals).
  - **Tonal:** For harmonic content (instruments, pads).

#### 02-Data/parameters/
- [ ] **newtime-specs.json**
  `\`\`json
  {
    "plugin_name": "Newtime",
    "category": "Time Stretching",
    "features": [
      {
        "name": "Time Stretching",
        "type": "ratio",
        "range": "0.1x to 10x",
        "description": "Changes audio length without affecting pitch"
      },
      {
        "name": "Pitch Shifting",
        "type": "knob",
        "range": "-24 to +24 semitones",
        "description": "Changes pitch without affecting tempo",
        "pro_tip": "Use Formant control to maintain vocal character"
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **tempo-matching-samples.md**
  - Loading a sample at 120 BPM into a 140 BPM project.
  - Calculating the stretch factor (140/120 = 1.167).
  - Applying the stretch while maintaining audio quality.

- [ ] **key-transposition.md**
  - Changing a C-major sample to match an A-minor project.
  - Using the Pitch knob for transposition.
  - Preserving formants for vocal samples.

- [ ] **creative-texture-stretching.md**
  - Using extreme time stretching for evolving textures.
  - Applying to ambient or pad samples.
  - Creating atmospheric soundscapes.

#### 03-Workflows/by-context/
- [ ] **vocal-key-matching.md**
- [ ] **drum-loop-tempo-sync.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **algorithm-selection-guide.md**
  - When to use Slices vs Tones vs Tonal algorithms.
  - Quality vs CPU considerations for each algorithm.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Understanding the Controls

**Tasks:**
1. Load a drum loop at different tempo
2. Adjust Time to match project tempo
3. Load a melodic sample
4. Adjust Pitch to match project key
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Which algorithm is best for vocals?
- How does Formant control affect the sound?

### Phase 2: Quality Optimization (Week 2)
**Goal:** Preserving Audio Integrity

**Tasks:**
1. Compare all algorithm types on the same sample
2. Test extreme pitch/time changes
3. Create algorithm-selection-guide.md

---

## 📊 Plugin Specifications to Document

### Engine
- Algorithm Types (Slices, Tones, Tonal)
- Quality Modes (Draft, High, etc.)
- Formant Preservation (On/Off)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why does my stretched audio sound "phasy" or "watery"? (Try a different algorithm or increase quality).
2. How do I transpose a vocal sample without losing its character? (Use Formant preservation).

### Advanced Usage
1. Can I use this for real-time performance? (Yes, but CPU intensive at high quality).

---

## 🔗 Cross-Reference with Other Plugins

Newtime is often used with:
- **DirectWave** (For sample-based time stretching)
- **Newtone** (The audio-streaming version)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Newtime/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── time-stretching-algorithms.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── newtime-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── tempo-matching-samples.md
│   │   └── key-transposition.md
│
└── 04-Reference/
    └── algorithm-selection-guide.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Newtime Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Newtime.htm)
- [Newtime Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Newtime_tutorials.htm)
- [Newtime Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+newtime+tutorial)

### Community Resources
- [Newtime Subreddit](https://www.reddit.com/r/FL_Studio/search?q=newtime&restrict_sr=1)
- [Newtime User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Newtime Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Time Stretching Fundamentals" - Understanding different algorithms
- "Pitch Shifting Techniques" - Maintaining quality during transposition
- "Formant Preservation in Vocals" - Keeping vocals natural during pitch shift

### Advanced Techniques
- **Algorithm Selection:** Understanding when to use each algorithm
- **Formant Control:** Managing vocal characteristics during pitch shift
- **Quality Optimization:** Balancing quality with performance

---

## 📚 In-Depth Technical Analysis

### Time Stretching Architecture
Newtime implements sophisticated time stretching algorithms:
- **Phase Vocoder:** Advanced phase-based time stretching
- **Granular Processing:** Granular synthesis-based stretching
- **Spectral Processing:** Frequency domain manipulation
- **Real-time Processing:** Immediate response to parameter changes
- **Quality Preservation:** Maintains audio fidelity during stretching

### Pitch Shifting System
The pitch shifting capabilities include:
- **Harmonic Preservation:** Maintains harmonic relationships
- **Formant Control:** Preserves vocal characteristics
- **Semitone Accuracy:** Precise pitch adjustment in semitones
- **Cent-Level Tuning:** Fine-tuning capabilities for precision
- **Quality Modes:** Different algorithms for different quality needs

### Algorithm Types
Newtime offers different algorithms for different content:

**Slices Algorithm:**
- **Purpose:** Designed for rhythmic content like drums
- **Approach:** Preserves transient integrity
- **Characteristics:** Maintains attack characteristics
- **Best For:** Drum loops, percussion, rhythmic samples
- **Quality:** Good for rhythmic content

**Tones Algorithm:**
- **Purpose:** Designed for pitched content like melodies
- **Approach:** Maintains harmonic relationships
- **Characteristics:** Preserves pitch clarity
- **Best For:** Vocals, instruments, melodic content
- **Quality:** Good for pitched content

**Tonal Algorithm:**
- **Purpose:** Designed for harmonic content like pads
- **Approach:** Preserves harmonic structure
- **Characteristics:** Maintains harmonic integrity
- **Best For:** Pads, ambient textures, harmonic content
- **Quality:** Good for harmonic content

### Formant Preservation
The formant control system maintains vocal characteristics:
- **Vowel Preservation:** Maintains vowel-like characteristics
- **Naturalness:** Keeps vocals sounding natural
- **Harmonic Relationships:** Preserves harmonic structure
- **Algorithm Integration:** Works with pitch shifting algorithms
- **Quality Impact:** May affect processing quality

### Signal Processing Chain
The internal architecture processes audio as follows:
- **Input Stage:** Audio signal monitoring and routing
- **Algorithm Selection:** Chooses appropriate processing method
- **Time Stretching:** Length adjustment without pitch change
- **Pitch Shifting:** Frequency adjustment without time change
- **Formant Processing:** Vocal characteristic preservation
- **Quality Processing:** Quality enhancement and artifact reduction
- **Output Stage:** Final signal routing and monitoring

### Quality vs Performance Trade-offs
Different quality modes balance processing power and audio quality:
- **Draft Mode:** Fast processing with lower quality
- **High Quality Mode:** Better quality with more processing power
- **Ultra Quality Mode:** Maximum quality with highest processing power
- **CPU Considerations:** Higher quality modes use more CPU
- **Real-time Performance:** Lower quality modes better for live performance

## 🎛️ Parameter Deep Dive

### Time Control
- **Function:** Controls time stretching factor
  - Range: 0.1x to 10x (typically)
  - Effect: Changes audio length without affecting pitch
  - Use for: Tempo matching and duration adjustment
  - Pro tip: Values closer to 1.0 preserve more quality
- **Behavior:**
  - Below 1.0: Shortens audio (speeds up)
  - Above 1.0: Lengthens audio (slows down)
  - 1.0: No change (unity)
  - Pro tip: Use for tempo synchronization
- **Applications:**
  - Tempo matching: Adjust to match project tempo
  - Duration extension: Lengthen samples for longer sections
  - Speed adjustment: Change sample speed for different feels
  - Creative stretching: Extreme values for unique textures
  - Pro tip: Use with appropriate algorithm for content type

### Pitch Control
- **Function:** Controls pitch transposition
  - Range: -24 to +24 semitones (typically)
  - Effect: Changes pitch without affecting tempo
  - Use for: Key matching and creative pitch effects
  - Pro tip: Use with formant control for vocals
- **Behavior:**
  - Negative values: Lower pitch (transpose down)
  - Positive values: Higher pitch (transpose up)
  - Zero: No pitch change (unity)
  - Pro tip: Use for key transposition
- **Applications:**
  - Key matching: Transpose to match project key
  - Creative pitch: Extreme values for unique effects
  - Vocal processing: Adjust pitch with formant preservation
  - Instrument matching: Transpose instruments to key
  - Pro tip: Use formant preservation for vocals

### Formant Control
- **Function:** Preserves vocal characteristics during pitch shift
  - Range: On/Off or percentage (depending on implementation)
  - Effect: Maintains vowel-like characteristics in vocals
  - Use for: Natural-sounding vocal pitch shifting
  - Pro tip: Essential for vocal samples
- **Behavior:**
  - Off: No formant preservation (may sound unnatural when pitched)
  - On: Formant preservation active (maintains natural vocal character)
  - Pro tip: Use for vocals and speech
- **Applications:**
  - Vocal preservation: On for natural vocal character
  - Speech processing: On for natural speech character
  - Instrument processing: Off for most instruments
  - Creative effects: Variable settings for unique results
  - Pro tip: Use for maintaining vocal naturalness

### Algorithm Selection
- **Function:** Chooses processing algorithm for different content
  - **Slices:** For rhythmic content (drums, percussion)
    - Preserves transient characteristics
    - Best for content with clear attacks
    - Essential for drum loops
    - Perfect for percussion
    - Pro tip: Use for rhythmic content
  - **Tones:** For pitched content (vocals, instruments)
    - Preserves harmonic relationships
    - Best for melodic content
    - Essential for vocals
    - Perfect for instruments
    - Pro tip: Use for pitched content
  - **Tonal:** For harmonic content (pads, ambient)
    - Preserves harmonic structure
    - Best for sustained content
    - Essential for pads
    - Perfect for ambient textures
    - Pro tip: Use for harmonic content
- **Behavior:**
  - Each algorithm optimized for specific content types
  - Different algorithms produce different artifacts
  - Quality varies between algorithms
  - Pro tip: Match algorithm to content type
- **Applications:**
  - Drum loops: Slices algorithm for transient preservation
  - Vocals: Tones algorithm for harmonic preservation
  - Pads: Tonal algorithm for harmonic structure
  - Mixed content: Experiment to find best algorithm
  - Pro tip: Test different algorithms for optimal results

### Quality Control
- **Function:** Balances processing quality with performance
  - Range: Draft, High, Ultra (or similar quality levels)
  - Effect: Determines processing algorithm sophistication
  - Use for: Balancing quality with CPU usage
  - Pro tip: Higher quality uses more CPU
- **Behavior:**
  - Draft: Fast, lower quality processing
  - High: Balanced quality and performance
  - Ultra: Highest quality, most CPU intensive
  - Pro tip: Use appropriate quality for project needs
- **Applications:**
  - Real-time performance: Draft for low CPU usage
  - Final production: High/Ultra for best quality
  - Experimentation: Different levels for different results
  - CPU management: Adjust based on system resources
  - Pro tip: Use higher quality for final renders

## 🎼 Sound Design Applications

### Sample Manipulation
Using Newtime for sample processing:

**Tempo Matching:**
- **Drum Loop Adjustment:** Adjusting drum loops to project tempo
  - Calculate stretch factor based on tempo difference
  - Use Slices algorithm for drum preservation
  - Essential for sample-based music
  - Perfect for tempo synchronization
  - Pro tip: Use for seamless loop integration

- **Melodic Sample Adjustment:** Adjusting melodic samples to project tempo
  - Use Tones algorithm for pitch preservation
  - Calculate appropriate stretch factor
  - Essential for sample-based music
  - Perfect for tempo synchronization
  - Pro tip: Use for seamless sample integration

- **Ambient Sample Adjustment:** Adjusting ambient samples to project tempo
  - Use Tonal algorithm for harmonic preservation
  - Apply appropriate stretch factor
  - Essential for ambient music
  - Perfect for texture synchronization
  - Pro tip: Use for atmospheric sample integration

### Pitch Transposition
Using Newtime for key matching:

**Vocal Transposition:**
- **Key Matching:** Transposing vocals to project key
  - Use appropriate semitone adjustment
  - Enable formant preservation
  - Essential for vocal integration
  - Perfect for key synchronization
  - Pro tip: Use for natural vocal transposition

- **Harmony Creation:** Creating vocal harmonies through pitch shifting
  - Apply different pitch shifts for harmonies
  - Use formant preservation for naturalness
  - Essential for vocal arrangements
  - Perfect for harmony creation
  - Pro tip: Use for vocal layering

- **Creative Vocal Effects:** Creating unique vocal effects through pitch shifting
  - Apply extreme pitch shifts for creative effects
  - Use formant preservation selectively
  - Essential for creative vocal design
  - Perfect for robotic vocal effects
  - Pro tip: Use for creative vocal expression

### Creative Applications
Using Newtime for experimental applications:

**Texture Creation:**
- **Atmospheric Textures:** Creating evolving textures through time stretching
  - Apply extreme time stretching to ambient samples
  - Use for evolving soundscapes
  - Perfect for ambient music
  - Essential for atmospheric design
  - Useful for evolving textures

- **Granular Effects:** Creating granular textures through extreme stretching
  - Use extreme time stretching for granular effects
  - Apply to various sample types
  - Perfect for experimental music
  - Essential for granular synthesis approaches
  - Useful for evolving textures

- **Stretched Textures:** Creating unique stretched textures
  - Apply creative time stretching values
  - Use for evolving musical textures
  - Perfect for ambient and experimental music
  - Essential for texture creation
  - Useful for evolving soundscapes

### Instrument Processing
Using Newtime for instrument manipulation:

**Sample-Based Instruments:**
- **Key Matching:** Adjusting samples to project key
  - Transpose samples to match project
  - Use appropriate algorithm for content
  - Essential for sample-based instruments
  - Perfect for key synchronization
  - Pro tip: Use for sample library management

- **Tempo Matching:** Adjusting samples to project tempo
  - Stretch samples to match project tempo
  - Use appropriate algorithm for content
  - Essential for sample-based instruments
  - Perfect for tempo synchronization
  - Pro tip: Use for sample library management

- **Creative Processing:** Using for creative instrument effects
  - Apply extreme settings for unique effects
  - Use for creative sound design
  - Essential for experimental instruments
  - Perfect for unique sonic signatures
  - Pro tip: Use for creative instrument design

## 🧪 Experimental Techniques

### Advanced Time Stretching Applications
Creative uses of Newtime's capabilities:

**Extreme Stretching:**
- **Atmospheric Creation:** Using extreme time stretching for atmosphere
  - Apply 5x+ stretching for evolving textures
  - Use with ambient samples for soundscapes
  - Perfect for ambient and drone music
  - Essential for evolving textures
  - Useful for atmospheric sound design

**Algorithm Experimentation:**
- **Cross-Algorithm Use:** Using algorithms for unintended purposes
  - Apply Slices algorithm to melodic content
  - Use Tones algorithm for rhythmic content
  - Perfect for experimental results
  - Essential for creative exploration
  - Useful for unique textures

**Formant Manipulation:**
- **Creative Formant Control:** Using formant preservation for creative effects
  - Apply variable formant settings for unique results
  - Use for creative vocal manipulation
  - Perfect for experimental vocals
  - Essential for creative formant effects
  - Useful for robotic vocal textures

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Dynamic Time/Pitch:** Automating time and pitch for evolving effects
  - Create evolving time/pitch characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic time/pitch expression
  - Use for expressive control

**Modulation Applications:**
- **Parameter Modulation:** Using external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Stage Processing:**
- **Complex Enhancement:** Multiple processing stages for sophisticated effects
  - Create multi-stage enhancement
  - Apply different processing to different stages
  - Build sophisticated processing chains
  - Perfect for advanced sound design
  - Use for complex processing

## 🎚️ Workflow Optimization

### Sample Processing Workflows
Efficient approaches to using Newtime for sample manipulation:

**Tempo Matching:**
- **Calculation Workflow:** Efficient tempo matching calculations
  - Calculate stretch factor mathematically (target_tempo/original_tempo)
  - Apply appropriate algorithm for content type
  - Essential for efficient sample processing
  - Pro tip: Use calculator for precise ratios

- **Quality Optimization:** Optimizing quality settings for workflow
  - Use Draft for initial testing
  - Apply higher quality for final production
  - Essential for efficient workflow
  - Pro tip: Use appropriate quality for each stage

**Key Matching:**
- **Pitch Calculation:** Calculating appropriate pitch shifts
  - Determine semitone difference between keys
  - Apply formant preservation for vocals
  - Essential for key synchronization
  - Pro tip: Use for natural vocal transposition

- **Algorithm Selection:** Choosing appropriate algorithms
  - Match algorithm to content type
  - Test different algorithms for best results
  - Essential for quality preservation
  - Pro tip: Use Slices for drums, Tones for vocals

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
- **Loop Manipulation:** Adjusting samples to project tempo and key
- **Vocal Processing:** Transposing vocals with formant preservation
- **Texture Creation:** Creating evolving textures through time stretching
- [ ] Successfully stretch a drum loop to match a different project tempo
- [ ] Transpose a vocal sample to a different key while preserving formants
- [ ] Explain the difference between Slices, Tones, and Tonal algorithms
- [ ] Use the Formant control to maintain vocal character during pitch shift
- [ ] Apply appropriate algorithm selection for different content types
- [ ] Create atmospheric textures using extreme time stretching
- [ ] Set up tempo matching workflows for efficient sample processing
- [ ] Use pitch shifting for creative vocal effects
- [ ] Apply quality optimization for performance vs fidelity balance
- [ ] Troubleshoot time stretching artifacts and quality issues effectively
- [ ] Integrate Newtime into efficient sample processing workflows
- [ ] Create genre-specific time stretching presets for different musical styles
- [ ] Optimize Newtime settings for minimal CPU usage
- [ ] Use Newtime for creative sound design applications
- [ ] Set up advanced sample routing for complex projects
- [ ] Apply Newtime in live performance scenarios
- [ ] Create experimental time stretching effects with extreme settings
- [ ] Combine Newtime with other effects for layered processing
- [ ] Integrate Newtime with other automation tools seamlessly
- [ ] Create custom time stretching workflows for specific creative needs
- [ ] Use Newtime effectively in large, complex projects
- [ ] Generate complex rhythmic patterns with time stretching automation
- [ ] Create hybrid time stretching approaches combining different algorithms
- [ ] Apply Newtime in mastering contexts with appropriate care
- [ ] Create complex multi-stage time stretching chains with smooth automation
- [ ] Design custom time stretching patches for specific musical contexts
- [ ] Use Newtime for creative vocal processing applications
- [ ] Apply advanced formant preservation techniques for vocal enhancement
- [ ] Create genre-specific preset libraries for efficient workflow
- [ ] Integrate Newtime with external hardware for hybrid processing
- [ ] Use Newtime for audio restoration and creative repair applications
- [ ] Combine Newtime with other spectral processing tools
- [ ] Apply Newtime in surround sound or multi-channel setups
- [ ] Create complex temporal relationships using multiple parameters
- [ ] Use Newtime for creative instrumental processing applications
- [ ] Integrate Newtime with other automation tools for complex control
- [ ] Create complex atmospheric textures using multiple parameters
- [ ] Design custom time stretching algorithms for unique temporal characteristics
- [ ] Apply advanced filtering techniques for tone shaping
- [ ] Use Newtime for creative stereo enhancement beyond traditional methods
- [ ] Combine Newtime with convolution for hybrid stretching approaches
- [ ] Implement advanced envelope shaping for dynamic expression
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use Newtime for creative sound design in film and game audio
- [ ] Apply Newtime in live sound reinforcement scenarios
- [ ] Create experimental time stretching textures using extreme parameter settings
- [ ] Integrate Newtime with external processors for complex sound design
- [ ] Generate complex harmonic structures with precise control
- [ ] Use Newtime for formant synthesis and vocal creation
- [ ] Apply advanced resonance techniques for character enhancement
- [ ] Create evolving textures using parameter automation
- [ ] Design custom temporal processing patterns for sophisticated expression
- [ ] Use Newtime for creative bass enhancement with time stretching
- [ ] Combine Newtime with other vintage emulations for authentic sounds
- [ ] Apply Newtime in educational contexts for synthesis learning
- [ ] Create custom time stretching patches for retro music production
- [ ] Use Newtime for creative lead enhancement with temporal processing
- [ ] Implement advanced algorithm selection techniques for optimal results

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Newtime

How to use a technical warping utility to shape the "feeling" of Hip-Hop, R&B, and Pop samples.

---

## 1. PSYCHEDELIC / TRIPPY
*Extreme textures, liquid motion, and "impossible" time shifts.*
- **The Mental Model:** A dream sequence or a melting clock (Travis Scott / Mike Dean vibes).
- **Newtime Levers:**
    - **Extreme Stretch:** Set **Time** to 4x or higher. Use the **Tonal** algorithm. This creates a grainy, "liquid" texture that evolves slowly.
    - **Formant OFF:** Pitch a vocal down -12 semitones with Formant preservation **OFF**. This creates that "monstrous" deep voice popular in dark psychedelic rap.
    - **Manual Warping:** Purposely drag markers *away* from the grid to create "unstable" or "drunk" rhythms.
- **Listen For:** Granular artifacts and time that feels like it's "bending."

## 2. VIBEY / LUSH
*Smooth transitions, warm natural tones, and "soulful" alignment.*
- **The Mental Model:** An expensive-sounding R&B track where everything is perfectly in sync but feels natural.
- **Newtime Levers:**
    - **Formant ON:** Always keep Formant active when transposing R&B vocals to keep them "human" and "lush."
    - **Tones Algorithm:** Use this for melodies to ensure the harmonic "shine" stays intact.
    - **Groove Templates:** Apply a 16th note "Swing" template to quantized markers to add a "Vibey" soul to a mechanical drum loop.
- **Listen For:** Natural-sounding pitch changes and a "swung" organic pocket.

## 3. UPBEAT / ENERGETIC
*Tight rhythms, sharp transients, and rhythmic precision.*
- **The Mental Model:** A high-energy Pop-Rap track where every drum hit is "on the money."
- **Newtime Levers:**
    - **Slices Algorithm:** Use this for all drum loops to ensure the transients stay sharp and punchy during tempo changes.
    - **Hard Quantize:** Use **Alt+Q** to snap all markers to the 1/16th note grid. This adds "urgency" and "drive" to the track.
    - **High-Quality Mode:** Ensure you are in **Ultra** quality to prevent any "smear" that would lower the track's energy.
- **Listen For:** Snappy transients and a rock-solid, driving groove.

## 4. MOODY / DARK
*Heavy low-end, slow "dragging" rhythms, and dark transposition.*
- **The Mental Model:** Deep, melancholic R&B or "Phonk" style textures.
- **Newtime Levers:**
    - **Pitch Down:** Transpose melodic samples down -5 or -7 semitones. This naturally "darkens" the frequency profile.
    - **Draft Quality:** (Creative use) Use a lower quality mode to purposely introduce "gritty" digital artifacts for a moody, lo-fi aesthetic.
    - **Dragging Markers:** Move markers slightly *late* (to the right of the grid) to create a "lazy" or "dragging" moody pocket.
- **Listen For:** A dark, heavy presence and a rhythm that feels like it's "struggling" to move forward.

---

## Vibe Check Matrix
| Vibe | Algorithm | Pitch Move | Formant Status | Rhythmic Pocket |
| :--- | :--- | :--- | :--- | :--- |
| **Psyched**| Tonal | -12 ST | OFF | Off-Grid |
| **Vibey** | Tones | +2 / -2 ST | ON | Swung |
| **Upbeat** | Slices | 0 ST | N/A | Hard Grid |
| **Moody** | Tonal | -7 ST | OFF | Dragging |
| **Jazzy** | Tones | Variable | ON | Human Performance|

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: Newtime

The audio warping and quantization reference. [SRC: IL-MAN]

---

## 🕒 Warping & Timeline
- **Markers (White Bars):** These represent "anchors" in the audio. Drag them to stretch the audio between them.
- **Quantize (Magnet Icon):** Automatically snaps markers to the nearest grid line.
- **Groove Template:** Applies a specific swing or feel to the markers.

## 🎛️ Global Processing
- **Time:** Multiplies the overall length of the audio clip (Stretch).
- **Pitch:** Transposes the audio in semitones (-24 to +24).
- **Formant (Toggle):** When ON, keeps the vocal character (the "throat") the same while shifting pitch. Essential for vocals.
- **Fine (Cents):** Precise pitch tuning.

## ⚙️ Algorithm Selector
- **Slices:** Best for drums and percussion. Preserves transient "hit" sharpess.
- **Tones:** Best for vocals and lead instruments. Maintains clear harmonic pitch.
- **Tonal:** Best for complex polyphonic sounds (pads, full mixes). Preserves harmonic structure.

## 📐 Quality & Edit
- **Draft / High / Ultra:** Sets the processing resolution. High/Ultra is recommended for final renders.
- **Marker Smoothing:** Blurs the transition between stretched sections to avoid "clicks."
- **Center Focus:** Keeps the selection in the middle of the screen during playback.

---

## 🎯 Quick Mastery Tips
- **Perfect Loop:** Trim the sample to an exact bar length in the Playlist *before* sending it to Newtime.
- **Transparent Transpose:** Use **Tones** mode with **Formant** ON for the most natural vocal pitch shifting.
- **Heavy Quantize:** Use the **Alt + Q** shortcut to bring up the quantization menu for rapid timing correction.

```

---

## FILE: 01-Learning\Quick-Reference\time-stretching-algorithms.md

```markdown
# Time Stretching Algorithms: Choosing the Right Mode

Matching the processing engine to your audio content. [SRC: IL-MAN]

## 1. SLICES (The Rhythmic Engine)
- **Philosophy:** Audio is cut into microscopic slices at transient peaks. The space between slices is filled or shortened.
- **Character:** Sharp, punchy, and zero pitch artifacts.
- **Best For:** Drum loops, Hi-Hat patterns, and percussive SFX.
- **Caution:** Can sound "choppy" on sustained notes or vocals.

## 2. TONES (The Melodic Engine)
- **Philosophy:** Uses a phase vocoder to stretch harmonic information while keeping frequencies intact.
- **Character:** Smooth, musical, and respects pitch.
- **Best For:** Vocals, flute, monophonic synth leads, and basslines.
- **Caution:** Rapid rhythmic drums may sound "watery" or "blurred" in this mode.

## 3. TONAL (The Polyphonic Engine)
- **Philosophy:** A more advanced version of Tones designed for multiple overlapping frequencies.
- **Character:** Very high-fidelity, best for complex textures.
- **Best For:** Chord progressions, full song stems, piano, and atmospheric pads.
- **Caution:** Highest CPU usage of the three modes.

---

## Algorithm Selection Guide
| If it sounds like... | Use this Algorithm |
| :--- | :--- |
| **"Boom-Tap-Bap"** (Drums) | **Slices** |
| **"La-La-La"** (Singing) | **Tones** |
| **"Doo-Re-Mi"** (Chords) | **Tonal** |
| **"Whoosh-Sweep"** (FX) | **Tonal** or **Tones** |

---
*Pro Tip: If you get "Metallic" or "Phasy" artifacts, try switching from Tones to Tonal and increasing the Quality setting to High.*

```

---

## FILE: 02-Data\parameters\newtime-specs.json

```json
{
  "plugin_name": "Newtime",
  "category": "Audio Utility / Warping",
  "engine_specs": {
    "algorithms": ["Slices", "Tones", "Tonal"],
    "quality_modes": ["Draft", "High", "Ultra"],
    "pitch_range_semitones": 24,
    "stretch_range_ratio": "0.1x to 10x"
  },
  "parameters": [
    {
      "name": "Time",
      "type": "knob",
      "description": "Sets the global stretch factor.",
      "mix_impact": "Tempo matching, duration control"
    },
    {
      "name": "Pitch",
      "type": "knob",
      "description": "Transposes frequency in semitones.",
      "vibe_impact": "Key matching, creative transposition"
    },
    {
      "name": "Formant",
      "type": "toggle",
      "description": "Preserves vocal characteristics during pitch shift.",
      "vibe_impact": "Natural vs Artificial vocal tone"
    },
    {
      "name": "Quantize",
      "type": "button/macro",
      "description": "Snaps markers to grid.",
      "mix_impact": "Rhythmic correction, groove alignment"
    },
    {
      "name": "Marker Smoothing",
      "type": "knob",
      "description": "Interpolates between stretched sections.",
      "mix_impact": "Artifact reduction, click prevention"
    }
  ]
}

```

---

## FILE: 02-Data\presets\01-time-stretch.json

```json
{
  "name": "Time Stretch",
  "genre": "universal",
  "description": "Standard time stretching for tempo adjustment",
  "parameters": {
    "mode": "Time Stretch",
    "percentage": 100,
    "preservePitch": true,
    "quality": "High"
  },
  "workflow": {
    "useCase": "Tempo matching",
    "steps": [
      "Load audio",
      "Set stretch mode",
      "Adjust percentage",
      "Preserve pitch if needed"
    ],
    "tips": [
      "Use High quality",
      "Check for artifacts",
      "Preserve pitch for melody"
    ]
  },
  "abTest": {
    "listenFor": "Natural time change",
    "duration": "Full audio"
  }
}
```

---

## FILE: 02-Data\presets\02-beat-warping.json

```json
{
  "name": "Beat Warping",
  "genre": "hip-hop/rap",
  "description": "Beat-level time editing for rhythm manipulation",
  "parameters": {
    "mode": "Beat Edit",
    "grid": "1/16",
    "snap": true,
    "fade": 5
  },
  "workflow": {
    "useCase": "Beat editing and warping",
    "steps": [
      "Enable grid view",
      "Snap to beat",
      "Edit beat positions",
      "Add fades"
    ],
    "tips": [
      "Use short fades",
      "Check transients",
      "Preserve groove"
    ]
  },
  "abTest": {
    "listenFor": "Tight, edited rhythm",
    "duration": "4-bar loop"
  }
}
```

---

## FILE: 02-Data\presets\INDEX.md

```markdown
# Newtime Complete Presets INDEX

## Presets (8 files)
| File | Name | Genre | Mood | Use Case |
|------|------|-------|------|----------|
| `01-time-stretch.json` | Time Stretch | universal | natural | Standard tempo matching |
| `02-beat-warping.json` | Beat Warp | universal | natural | Beat-level editing |
| `moody-dark-trap-stretch.json` | Dark Trap Stretch | hip-hop/rap | moody | Mood creation |
| `upbeat-bouncy-warp.json` | Bouncy Beat Warp | hip-hop/rap | upbeat | Groove matching |
| `electro-warp.json` | Electro Warp | hip-hop/rap | electronic | Energy manipulation |
| `jazzy-stretch.json` | Jazzy Stretch | hip-hop/rap | smooth | Smooth tempo changes |
| `funky-beat-edit.json` | Funky Beat Edit | hip-hop/rap | funky | Groove preservation |
| `energetic-drill-warp.json` | Drill Warp | hip-hop/rap | energetic | Intensity building |

## Quick Reference
| Goal | Preset | Mode | File |
|------|--------|------|------|
| Tempo change | Time Stretch | Time Stretch | `01-time-stretch.json` |
| Beat editing | Beat Warp | Beat Edit | `02-beat-warping.json` |
| Dark mood | Dark Trap Stretch | Sustain | `moody-dark-trap-stretch.json` |
| Bouncy groove | Bouncy Beat Warp | Slices | `upbeat-bouncy-warp.json` |
| Electronic | Electro Warp | Complex | `electro-warp.json` |
| Jazzy smooth | Jazzy Stretch | Sustain | `jazzy-stretch.json` |
| Funky groove | Funky Beat Edit | Slices | `funky-beat-edit.json` |
| Drill energy | Drill Warp | Slices | `energetic-drill-warp.json` |

## Related Documentation
- [Newtime README](../README.md)
- [Newtime Safety Rules](../02-Data/rules/newtime-safety-rules.md)

```

---

## FILE: 02-Data\presets\electro-warp.json

```json
{
  "name": "Electro Warp",
  "genre": "hip-hop/rap",
  "mood": "electric",
  "description": "Time manipulation for electronic hip-hop",
  "parameters": {
    "mode": "Complex",
    "percentage": 110,
    "preservePitch": true,
    "quality": "Highest",
    "transient": 60,
    "smoothing": 40
  },
  "workflow": {
    "useCase": "Electro hip-hop, experimental rap",
    "steps": [
      "Use Complex for quality",
      "Subtle stretch for energy",
      "Preserve pitch on synths",
      "Balance transient and smooth",
      "Check for artifacts"
    ],
    "tips": [
      "Great on synth loops",
      "Perfect for creating drops",
      "Try extreme percentages",
      "Layer with effects"
    ]
  }
}

```

---

## FILE: 02-Data\presets\energetic-drill-warp.json

```json
{
  "name": "Dril",
  "genre": "hip-hop/rap",
  "mood": "energetic",
  "description": "Aggressive time manipulation for drill energy",
  "parameters": {
    "mode": "Slices",
    "percentage": 130,
    "preservePitch": true,
    "quality": "High",
    "transient": 75,
    "smoothing": 35
  },
  "workflow": {
    "useCase": "Drill, trap, aggressive hip-hop",
    "steps": [
      "Use Slices for intensity",
      "Stretch for heavy feel",
      "Preserve pitch on 808s",
      "High transient for impact",
      "Moderate smoothing"
    ],
    "tips": [
      "Perfect on 808 phrases",
      "Great for double-time feel",
      "Stretch vocals subtly",
      "Check low-end impact"
    ]
  }
}

```

---

## FILE: 02-Data\presets\funky-beat-edit.json

```json
{
  "name": "Funky Beat Edit",
  "genre": "hip-hop/rap",
  "mood": "funky",
  "description": "Beat editing for funk-inspired grooves",
  "parameters": {
    "mode": "Slices",
    "percentage": 100,
    "preservePitch": true,
    "quality": "High",
    "transient": 80,
    "smoothing": 20
  },
  "workflow": {
    "useCase": "G-funk, funk-inspired hip-hop",
    "steps": [
      "Use Slices for groove",
      "Match tempo precisely",
      "Preserve pitch on bass",
      "High transient for punch",
      "Minimal smoothing"
    ],
    "tips": [
      "Great on drum breaks",
      "Perfect for sampling",
      "Edit for swing timing",
      "Layer with live instruments"
    ]
  }
}

```

---

## FILE: 02-Data\presets\jazzy-stretch.json

```json
{
  "name": "Jazzy Stretch",
  "genre": "hip-hop/rap",
  "mood": "smooth",
  "description": "Smooth stretching for jazzy hip-hop",
  "parameters": {
    "mode": "Sustain",
    "percentage": 115,
    "preservePitch": true,
    "quality": "High",
    "transient": 40,
    "smoothing": 70
  },
  "workflow": {
    "useCase": "Jazzy hip-hop, lo-fi, soulful rap",
    "steps": [
      "Use Sustain for smooth",
      "Moderate stretch for flow",
      "Preserve pitch strictly",
      "Low transient for warmth",
      "High smoothing for lo-fi"
    ],
    "tips": [
      "Perfect on jazz samples",
      "Great for creating space",
      "Add vinyl crackle after",
      "Check harmonic content"
    ]
  }
}

```

---

## FILE: 02-Data\presets\moody-dark-trap-stretch.json

```json
{
  "name": "Dark Trap Stretch",
  "genre": "hip-hop/rap",
  "mood": "moody",
  "description": "Time stretching for moody trap productions",
  "parameters": {
    "mode": "Sustain",
    "percentage": 125,
    "preservePitch": true,
    "quality": "High",
    "transient": 50,
    "smoothing": 60
  },
  "workflow": {
    "useCase": "Dark trap, drill, moody hip-hop",
    "steps": [
      "Use Sustain mode for smooth",
      "Stretch moderately for mood",
      "Preserve pitch on melodic",
      "Adjust transient for body",
      "Use smoothing for darkness"
    ],
    "tips": [
      "Perfect on vocal chops",
      "Great on pad sounds",
      "Stretch 120-140% for effect",
      "Check for artifacts"
    ]
  }
}

```

---

## FILE: 02-Data\presets\upbeat-bouncy-warp.json

```json
{
  "name": "Bouncy Beat Warp",
  "genre": "hip-hop/rap",
  "mood": "upbeat",
  "description": "Beat warping for energetic hip-hop grooves",
  "parameters": {
    "mode": "Slices",
    "percentage": 100,
    "preservePitch": true,
    "quality": "High",
    "transient": 70,
    "smoothing": 30
  },
  "workflow": {
    "useCase": "Upbeat hip-hop, party tracks",
    "steps": [
      "Use Slices for rhythmic",
      "Set percentage to match tempo",
      "Preserve pitch on drums",
      "High transient for punch",
      "Low smoothing for clarity"
    ],
    "tips": [
      "Perfect for drum loops",
      "Great for beat matching",
      "Adjust percentage for feel",
      "Check phase on bass"
    ]
  }
}

```

---

## FILE: 02-Data\rules\newtime-safety-rules.md

```markdown
# Newtime Safety Rules

## ⚠️ Critical Warnings

### Do NOT
- Stretch audio beyond 200% without checking artifacts
- Use "Slices" mode on sustained sounds
- Apply time stretching to impulse responses
- Stretch vocals heavily in "Slices" mode
- Ignore transient preservation settings

### Do
- Use "Slices" only for rhythmic material
- Use "Sustain" for pads and sustained sounds
- Use "Complex" for highest quality on complex audio
- Check for artifacts at stretched positions
- Use "Preserve Pitch" for melodic content

---

## Artifact Prevention

### Signs of Artifacts
- "Warbling" or "Robotic" quality
- "Phasing" at stretch points
- "Hollow" or "Empty" sound
- "Metallic" ringing on transients

### Prevention Methods
| Issue | Fix |
|-------|-----|
| Warbling | Switch to "Complex" mode |
| Phasing | Reduce stretch percentage |
| Hollow sound | Increase "Transient" setting |
| Metallic ringing | Increase "Smoothing" |

---

## Quality Settings Guide

| Mode | Quality | CPU | Best For |
|------|---------|-----|----------|
| Slices | Fast | Low | Rhythmic, percussion |
| Sustain | Medium | Medium | Pads, sustained sounds |
| Complex | High | High | Complex, full mixes |
| RePitch | Instant | Lowest | Preview, rough drafts |

---

## Genre-Specific Rules

### Hip-Hop/Rap
- Use "Slices" for drum loops
- Use "Complex" for full beats
- Keep stretch under 150% for vocals
- Check on laptop speakers

### EDM
- Use "Slices" for risers
- Use "Complex" for synths
- Use "RePitch" for quick adjustments
- Match to kick frequency

### R&B
- Use "Sustain" for vocals
- Use "Complex" for instruments
- Preserve pitch on melodic content
- Check for breath artifacts

---

## Related Documentation
- [Newtime Presets INDEX](./presets/INDEX.md)
- [Newtime Workflows](../03-Workflows/by-goal/INDEX.md)
- [Algorithm Selection Guide](../04-Reference/algorithm-selection-guide.md)

```

---

## FILE: 03-Workflows\by-goal\INDEX.md

```markdown
# Newtime Workflows INDEX

## By-Goal Workflows

| File | Focus |
|------|-------|
| [creative-texture-stretching.md](creative-texture-stretching.md) | Creative stretching |
| [key-transposition.md](key-transposition.md) | Key changes |
| [tempo-matching-samples.md](tempo-matching-samples.md) | Sample tempo matching |
| [hop-hop-subgenre-warp.md](hop-hop-subgenre-warp.md) | Hip-Hop Sub-Genre Warping |

## Quick Reference

| Goal | Workflow |
|------|----------|
| Creative textures | Creative Texture Stretching |
| Key changes | Key Transposition |
| Sample tempo matching | Tempo Matching Samples |
| Dark trap stretch | Hip-Hop Sub-Genre Warping |
| Bouncy warp | Hip-Hop Sub-Genre Warping |
| Electro warp | Hip-Hop Sub-Genre Warping |
| Jazzy stretch | Hip-Hop Sub-Genre Warping |
| Funky beat edit | Hip-Hop Sub-Genre Warping |
| Drill warp | Hip-Hop Sub-Genre Warping |

## Related Documentation

- [Newtime Presets](../02-Data/presets/INDEX.md)
- [Newtime Safety Rules](../02-Data/rules/newtime-safety-rules.md)

```

---

## FILE: 03-Workflows\by-goal\creative-texture-stretching.md

```markdown
# Workflow: Creative Texture Stretching (Granular Space)

*Goal: Using extreme time-stretching to transform a simple sound (like a piano note or a vocal) into a long, evolving cinematic pad or "Granular" texture.*

## Vibe Mapping
- **Psychedelic:** ⭐⭐⭐⭐⭐ (Primary)
- **Moody:** ⭐⭐⭐⭐⭐ (Primary)
- **Vibey:** ⭐⭐⭐⭐

## 🚶 Step-by-Step Setup
1. **The Source:** Load a short, harmonic sample. A single piano chord or an "Aah" vocal note works best.
2. **The Algorithm:** Select **Tonal**. This mode is best at handling the complex overlapping cycles created during extreme stretching.
3. **The "Impossible" Stretch:**
   - Set the **Time** knob to its maximum (e.g., **10.0x**).
   - *Result:* Your 1-second sample is now a 10-second drone.
4. **Sculpting the Motion:**
   - Manually drag the markers far apart from each other.
   - Purposefully create "dead air" or "crowded" spots in the timeline to make the drone feel like it is breathing and evolving inconsistently.
5. **Texture Polish:**
   - Increase **Marker Smoothing** to 50%. This creates a "liquid" feel as the algorithm interpolates the massive gaps.
   - Set **Quality** to **Ultra** to preserve the delicate high-frequency spectral data.
6. **Post-Processing (The Secret Sauce):**
   - Drag the resulting 10-second drone into the Playlist.
   - Route it to a Mixer track with **LuxeVerb** (Space mode) and **Hyper Chorus** (8 Voices).
   - *Final Vibe:* You have created a purely unique atmospheric texture from a standard loop.

## 🔄 Variations
- **The "Data-Mosh":** Set Quality to **Draft**. The lower resolution will create gritty, "broken" digital artifacts that sound like a malfunctioning computer—perfect for industrial or experimental hip-hop.
- **The "Pitch-Time Sweep":** Automate **Time** and **Pitch** simultaneously in opposite directions (e.g. Time gets shorter, Pitch gets lower).

## ⚠️ Pitfalls & Fixes
- **Problem:** Audio is "clicking."
- **Fix:** Ensure markers are placed at "Zero Crossings" or increase **Marker Smoothing**.
- **Problem:** Sound is too quiet.
- **Fix:** Extreme stretching thins out the energy. Use a **Compressor** or **Limiter** after the effect to bring the volume back up.

## 🎚️ Automation Ideas
- **Texture Morph:** Create two different stretches of the same sound and crossfade between them.
- **Formant Breath:** Automate the **Formant** toggle to switch on and off during the drone to make it sound like it's "waking up."

```

---

## FILE: 03-Workflows\by-goal\hop-hop-subgenre-warp.md

```markdown
# Hip-Hop Sub-Genre Newtime Workflows

## Moody Dark Trap Stretch
| Parameter | Setting |
|-----------|---------|
| Mode | Sustain |
| Percentage | 125% |
| Preserve Pitch | True |
| Quality | High |
| Transient | 50% |
| Smoothing | 60% |

### Tips
- Use Sustain mode for smooth
- Stretch moderately for mood
- Preserves melodic content
- Perfect on vocal chops

---

## Upbeat Bouncy Warp
| Parameter | Setting |
|-----------|---------|
| Mode | Slices |
| Percentage | 100% |
| Preserve Pitch | True |
| Quality | High |
| Transient | 70% |
| Smoothing | 30% |

### Tips
- Use Slices for rhythmic
- Match tempo for groove
- High transient for punch
- Perfect for drum loops

---

## Electro Warp
| Parameter | Setting |
|-----------|---------|
| Mode | Complex |
| Percentage | 110% |
| Preserve Pitch | True |
| Quality | Highest |
| Transient | 60% |
| Smoothing | 40% |

### Tips
- Use Complex for quality
- Subtle stretch for energy
- Great on synth loops
- Perfect for creating drops

---

## Jazzy Stretch
| Parameter | Setting |
|-----------|---------|
| Mode | Sustain |
| Percentage | 115% |
| Preserve Pitch | True |
| Quality | High |
| Transient | 40% |
| Smoothing | 70% |

### Tips
- Use Sustain for smooth
- Moderate stretch for flow
- High smoothing for lo-fi
- Perfect on jazz samples

---

## Funky Beat Edit
| Parameter | Setting |
|-----------|---------|
| Mode | Slices |
| Percentage | 100% |
| Preserve Pitch | True |
| Quality | High |
| Transient | 80% |
| Smoothing | 20% |

### Tips
- Use Slices for groove
- Match tempo precisely
- High transient for punch
- Great on drum breaks

---

## Energetic Drill Warp
| Parameter | Setting |
|-----------|---------|
| Mode | Slices |
| Percentage | 130% |
| Preserve Pitch | True |
| Quality | High |
| Transient | 75% |
| Smoothing | 35% |

### Tips
- Use Slices for intensity
- Stretch for heavy feel
- Perfect on 808 phrases
- Great for double-time feel

---

## Related Documentation
- [Newtime Presets INDEX](../02-Data/presets/INDEX.md)
- [Newtime Safety Rules](../02-Data/rules/newtime-safety-rules.md)

```

---

## FILE: 03-Workflows\by-goal\key-transposition.md

```markdown
# Workflow: Key Transposition (Natural Shifting)

*Goal: Shifting the pitch of an audio sample to match your project key while preserving its natural "human" character (formants).*

## Vibe Mapping
- **Vibey:** ⭐⭐⭐⭐⭐ (Primary)
- **Moody:** ⭐⭐⭐⭐
- **Jazzy:** ⭐⭐⭐⭐

## 🚶 Step-by-Step Setup
1. **The Algorithm:**
   - Select **Tones** (for monophonic leads/vocals) or **Tonal** (for chords).
2. **The "Human" Shield (Formant):**
   - Locate the **Formant** toggle button. **Turn it ON**.
   - *Why:* This prevents the "Chipmunk" effect when pitching up and the "Darth Vader" effect when pitching down.
3. **The Move:**
   - Turn the **Pitch** knob to your desired transposition.
   - *Example:* If your sample is in C-Major and your track is in D-Major, set Pitch to **+2**.
4. **Fine-Tuning:**
   - If the sample sounds slightly "out of tune" with your project, adjust the **Fine** knob (Cents) while listening to your track's metronome or a piano.
5. **Quality Check:**
   - Switch the **Quality** selector to **Ultra**. This ensures the pitch shifting algorithm uses maximum resolution to avoid metallic ringing.
6. **The Blend:**
   - Drag the clip back into FL Studio. Use the Mixer to add a little Reverb (LuxeVerb) to "glue" the newly pitched sample into the track.

## 🔄 Variations
- **The "Dark Haunt":** Turn Formant **OFF** and pitch down **-12**. This is the secret to that "heavy" chopped and screwed vocal vibe.
- **The "Harmony Maker":** Clone your sample. Pitch one up +7 (Fifth) and the other up +12 (Octave). Layer them for a massive thick vocal stack.

## ⚠️ Pitfalls & Fixes
- **Problem:** Vocal sounds "nasal" or "plastic."
- **Fix:** Your **Pitch** shift is too extreme (e.g. more than 7 semitones). The algorithm can only do so much. Try to keep shifts within +/- 5 semitones for realism.
- **Problem:** Chords sound messy.
- **Fix:** Ensure you are in **Tonal** mode, not Tones.

## 🎚️ Automation Ideas
- **Pitch Dive:** Automate the **Fine** pitch to drop at the end of a long vocal note for an emotional "sag."
- **Formant Warp:** Automate the **Formant** button (if possible) or the Pitch while Formant is off to create a "liquid" pitch effect.

```

---

## FILE: 03-Workflows\by-goal\tempo-matching-samples.md

```markdown
# Workflow: Tempo Matching Samples (The BPM Bridge)

*Goal: Forcing any audio loop or sample—regardless of its original speed—to match your project tempo perfectly without changing its pitch.*

## Vibe Mapping
- **Upbeat:** ⭐⭐⭐⭐⭐ (Primary)
- **Vibey:** ⭐⭐⭐⭐
- **Moody:** ⭐⭐⭐⭐

## 🚶 Step-by-Step Setup
1. **The Grid Sync:**
   - Ensure your project tempo is set (e.g., 140 BPM).
   - Drag your sample (e.g., a 120 BPM drum loop) into Newtime.
2. **Algorithm Selection:**
   - If it's a drum loop, select **Slices**.
   - If it's a melody, select **Tones**.
3. **The Calculation:**
   - Look at the top bar. Newtime will usually detect the original tempo.
   - Click the **Time** knob and select **Project Tempo**.
   - *Result:* Newtime will automatically stretch the markers to fit the 140 BPM project grid.
4. **Fine-Tuning (Manual Warping):**
   - If the rhythm still feels slightly "off," zoom in.
   - Click and drag the white markers to line up perfectly with the vertical grid lines.
   - Hold **Shift** while dragging a marker to move it without moving neighboring markers (Lock Mode).
5. **The Export:**
   - Click the **Drag to Playlist** icon (the small paper/arrow icon) and drag the processed audio onto your Playlist.

## 🔄 Variations
- **The "Double Time":** Set the **Time** knob to **0.5x**. Your loop will now play twice as fast (useful for Trap/DnB).
- **The "Half Time":** Set the **Time** knob to **2.0x**. Your loop will now play at half-speed (the "Drake" effect).

## ⚠️ Pitfalls & Fixes
- **Problem:** Audio sounds "choppy" after stretching.
- **Fix:** Increase the **Marker Smoothing** knob to 20-30% to hide the slices.
- **Problem:** Transients sound dull.
- **Fix:** Switch from Tones back to **Slices** mode.

## 🎚️ Automation Ideas
- **Tempo Drift:** Automate the **Time** knob in the Playlist wrapper to slowly speed up a loop during a transition.
- **Rhythmic Stutter:** Manually place 4 markers very close together to create a "machine gun" rhythmic stutter effect.

```

---

## FILE: 04-Reference\algorithm-selection-guide.md

```markdown
# Technical Reference: Algorithm Selection Guide

Mastering the three processing engines of Newtime. [SRC: IL-MAN]

## Overview
Newtime uses different mathematical approaches to solve the problem of stretching audio without changing pitch. Choosing the wrong algorithm is the #1 cause of "watery" or "metallic" artifacts.

---

## 1. SLICES (Time-Domain)
- **How it works:** Identifies transients (attacks) and "slices" the audio at these points. It then moves the slices and fills the gaps with crossfaded silence or loop-points.
- **Strength:** **Zero pitch distortion.** Since it doesn't change the frequency of the slices, it is the most transparent mode for non-pitched sounds.
- **Ideal For:** Drum loops, breakbeats, industrial percussion, Foley.
- **When to Avoid:** On any sound with long, sustained tail (vocals, pads). It will sound like a "stutter" effect.

## 2. TONES (Frequency-Domain / Mono)
- **How it works:** Uses a **Phase Vocoder** to analyze the frequency content and re-synthesize it at a different time-rate.
- **Strength:** Keeps harmonics perfectly in place. Excellent for monophonic sounds.
- **Ideal For:** Vocals, basslines, woodwinds, monophonic synth leads.
- **When to Avoid:** On chords or full mixes. The "phase" of overlapping frequencies can "smear," creating a watery sound.

## 3. TONAL (Frequency-Domain / Poly)
- **How it works:** A multi-layered Phase Vocoder designed to handle complex, overlapping frequency spectrums.
- **Strength:** The highest fidelity for complex material.
- **Ideal For:** Piano chords, full song stems, atmospheric pads, acoustic guitar strumming.
- **When to Avoid:** If you are extremely low on CPU resources (Tonal is the heaviest mode).

---

## 📐 Quality vs. Artifacts
- **Draft:** Fast, but uses lower-resolution Fourier transforms. Can sound "metallic."
- **High:** The standard for professional production.
- **Ultra:** Maximum resolution. Use for vocals and final renders where every detail matters.

## 💡 The "Formant" Variable
Formant preservation is a secondary process that runs *on top* of the Tones or Tonal algorithms.
- **If ON:** The algorithm identifies the "resonance peaks" of the sound (the vowel shape) and keeps them at the same frequency while shifting the harmonics.
- **If OFF:** The whole spectrum moves together (The "Chipmunk" effect).

---
*For a quick guide on finding these settings, see the [01-Learning/Quick-Reference/parameter-cheat-sheet.md](../01-Learning/Quick-Reference/parameter-cheat-sheet.md) guide.*

```

---

