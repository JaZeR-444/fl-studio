# Plucked - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Plucked - Physical Modeling Synth

`\`\`
██████╗ ██╗     ██╗   ██╗ ██████╗██╗  ██╗███████╗██████╗
██╔══██╗██║     ██║   ██║██╔════╝██║ ██╔╝██╔════╝██╔══██╗
██████╔╝██║     ██║   ██║██║     █████╔╝ █████╗  ██║  ██║
██╔═══╝ ██║     ██║   ██║██║     ██╔═██╗ ██╔══╝  ██║  ██║
██║     ███████╗╚██████╔╝╚██████╗██║  ██╗███████╗██████╔╝
╚═╝     ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝╚═════╝
`\`\`

**Plugin Type:** Physical Modeling Synthesizer
**Category:** Generator / Plucked Strings
**Official Manual:** [Image-Line Plucked Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Plucked.htm)

---

## 🎯 What is Plucked?

Plucked! is a simple yet effective physical modeling synthesizer based on the **Karplus-Strong algorithm**. Unlike sample-based instruments, it generates sound mathematically to simulate a plucked string. It is perfect for creating harp-like sounds, basic guitars, kotos, and interesting metallic percussion. It is extremely lightweight and loads instantly.

**Key Capabilities:**
- **Karplus-Strong Synthesis:** Generates string vibrations via delay lines.
- **Decay Control:** Determines if the string rings out or is muted.
- **Color Control:** Dampening simulation (Nylon vs Steel string character).
- **Widen:** Adds stereo width to the algorithm.
- **Gate:** Forces the string to stop when the key is released.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **karplus-strong-basics.md**
3. Create **parameter-cheat-sheet.md**
4. Automate the "Decay" knob while playing a melody to hear the string mute/unmute.

### For Sound Designers:
1. Study **creating-harp-textures.md**
2. Review **electric-guitar-simulation.md**
3. Learn **bell-tone-generation.md**

### For Lofi/Chip Producers:
1. Study **retro-string-sounds.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Decay:** Length of the note.
  - **Color:** Brightness (Filter cutoff in the feedback loop).
  - **Normalize:** Keeps volume consistent across pitch.
  - **Gate:** Enables note-off capability.
  - **Widen:** Stereo spread.

- [ ] **karplus-strong-basics.md**
  - How noise bursts + delay lines = string sounds.

#### 02-Data/parameters/
- [ ] **plucked-params.json**
  `\`\`json
  {
    "plugin_name": "Plucked",
    "category": "Physical Modeling",
    "parameters": [
      {
        "name": "Color",
        "type": "knob",
        "description": "String material simulation (Bright/Dark)",
        "use_cases": ["nylon vs steel", "palm mute"]
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **palm-mute-guitar.md**
  - Low Decay.
  - Low Color.
  - Playing short notes.

- [ ] **ethereal-harp.md**
  - High Decay.
  - High Color.
  - Widen enabled.
  - Adding external Reverb (Plucked has no built-in reverb).

- [ ] **metallic-bass-pluck.md**
  - Low notes.
  - High Decay.
  - Distorted with Hardcore or Distructor.

#### 03-Workflows/by-context/
- [ ] **oriental-koto-preset.md**
- [ ] **chiptune-arpeggios.md**

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** String Physics

**Tasks:**
1. Play a chord
2. Adjust "Color" to go from dull to bright
3. Toggle "Normalize" to hear how high notes get quiet/short
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Why do high notes decay faster? (Physics of the algorithm).
- Does "Gate" work like a synth ADSR release?

### Phase 2: Processing (Week 2)
**Goal:** Realism

**Tasks:**
1. Feed Plucked into a Guitar Amp sim (Hardcore)
2. Add Delay
3. Create palm-mute-guitar.md

---

## 📊 Plugin Specifications to Document

### Engine
- Synthesis Type (Karplus-Strong)
- Polyphony

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Can I change the waveform? (No, the "exciter" noise burst is fixed).
2. Why is it mono? (Turn on "Widen").

---

## 🔗 Cross-Reference with Other Plugins

Plucked is often used with:
- **Sakura** (The advanced physical modeling string synth)
- **Hardcore** (Amp simulation)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Plucked/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── karplus-strong-basics.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── plucked-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── palm-mute-guitar.md
│   │   ├── ethereal-harp.md
│   │   └── metallic-bass-pluck.md
│
└── 04-Reference/
    └── physics-of-decay.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a convincing "Palm Mute" sound
- [ ] Explain why the plugin sounds "metallic" at high color settings
- [ ] Build a processing chain that makes Plucked sound like a real electric guitar

---

## 🛠️ Technical Deep Dive

### Karplus-Strong Algorithm
The Karplus-Strong algorithm is a digital signal processing technique for simulating the sound of a plucked string. Developed by Kevin Karplus and Alex Strong in 1983, it works by:

- **Impulse Generation:** Creating an initial "pluck" impulse (typically white noise)
- **Delay Line:** Feeding the impulse through a delay line representing string length
- **Feedback Loop:** Applying filtering and attenuation to simulate energy loss
- **Recirculation:** The delayed signal is fed back into the input with modifications
- **Output:** The result is a decaying tone that mimics a plucked string

### Physical Modeling Principles
Physical modeling in Plucked simulates the physics of real-world instruments:
- **String Properties:** Tension, mass, and length determine pitch
- **Excitation Method:** How the string is initially excited affects timbre
- **Boundary Conditions:** How the string is terminated affects harmonics
- **Energy Loss:** Factors that cause the sound to decay over time
- **Nonlinear Effects:** Subtle interactions that create realistic behavior
- **Modal Resonance:** Natural resonant frequencies of the system

### Synthesis Architecture
The internal architecture of Plucked includes:
- **Exciter:** Generates the initial impulse that starts the sound
- **Delay Line:** Simulates the propagation of waves along the string
- **Filter:** Shapes the harmonic content and decay characteristics
- **Feedback Network:** Controls how energy dissipates from the system
- **Output Stage:** Processes the final audio signal
- **Parameter Mapping:** Connects UI controls to synthesis parameters

### Parameter Interactions
The parameters in Plucked interact in complex ways:
- **Decay and Color:** Longer decay times can emphasize certain harmonics
- **Color and Pitch:** Filter settings may interact differently at various pitches
- **Normalize and Pitch:** Volume compensation varies with frequency
- **Widen and Stereo:** Spatial processing affects the perception of width
- **Gate and Release:** Note-off behavior affects the final sound
- **All Parameters:** Interactions create the characteristic Plucked sound

---

## 📚 Sound Design Fundamentals

### String Physics Simulation
Understanding the physics behind string sounds:
- **Fundamental Frequency:** The primary pitch of the string
- **Harmonic Series:** Integer multiples of the fundamental
- **Inharmonicity:** Deviations from perfect harmonic relationships
- **Decay Rates:** Different harmonics decay at different rates
- **Excitation Point:** Where the string is plucked affects harmonics
- **String Properties:** Material, thickness, and tension affect tone

### Timbral Characteristics
Different string instruments have distinct timbral properties:
- **Harp:** Clean, ethereal, with clear harmonics
- **Guitar:** Warm, complex, with strong midrange
- **Koto:** Bright, percussive, with metallic overtones
- **Ukulele:** Bright, cheerful, with prominent upper harmonics
- **Banjo:** Twangy, bright, with strong attack
- **Sitar:** Buzzing, complex, with sympathetic strings

### Karplus-Strong Variations
Different approaches to implementing the Karplus-Strong algorithm:
- **Basic Implementation:** Simple delay and filter
- **Enhanced Models:** Multiple delay lines for richer harmonics
- **Nonlinear Processing:** Adding distortion for more complex sounds
- **Multi-Modal Synthesis:** Simulating multiple resonant modes
- **Stiff String Models:** Accounting for string stiffness
- **Dispersion Effects:** Simulating frequency-dependent propagation

### Plucked vs. Struck vs. Bowed
Different excitation methods create different sounds:
- **Plucked:** Sharp attack, complex harmonic content
- **Struck:** Even sharper attack, brighter harmonics
- **Bowed:** Sustained, complex, with rich harmonic evolution
- **Mixed Excitation:** Combining methods for unique sounds
- **Hybrid Approaches:** Using multiple excitation types
- **Extended Techniques:** Unusual excitation methods

---

## ⚙️ Advanced Configuration Techniques

### Fine-Tuning Parameters
Advanced techniques for parameter adjustment:
- **Decay Optimization:** Balancing sustain and clarity
- **Color Shaping:** Sculpting the harmonic content
- **Normalize Calibration:** Ensuring consistent loudness
- **Gate Timing:** Controlling note release behavior
- **Widen Adjustment:** Creating appropriate stereo imaging
- **Parameter Automation:** Dynamic changes over time

### Sound Design Strategies
Advanced approaches to sound creation:
- **Layering Techniques:** Combining multiple Plucked instances
- **Processing Chains:** Using effects to enhance the basic sound
- **Modulation Applications:** Adding movement and interest
- **Rhythmic Patterns:** Creating compelling musical sequences
- **Harmonic Enhancement:** Emphasizing desirable frequencies
- **Spectral Shaping:** Sculpting the frequency response

### Integration Methods
Techniques for integrating Plucked into productions:
- **Mixing Considerations:** Fitting Plucked sounds into a mix
- **Arrangement Strategies:** Using Plucked effectively in compositions
- **Effect Processing:** Appropriate use of reverb, delay, etc.
- **Dynamic Control:** Managing Plucked sounds in dense arrangements
- **Spatial Placement:** Positioning Plucked sounds in the stereo field
- **Frequency Management:** Avoiding frequency conflicts

---

## 🎨 Creative Sound Design Applications

### Harp Emulation
Creating realistic harp sounds:
- **Attack Characteristics:** Achieving the distinctive harp attack
- **Sustain Control:** Managing the natural decay of harp strings
- **Pedaling Effects:** Simulating harp pedal changes
- **Hand Positioning:** Creating variations based on plucking position
- **Resonance Simulation:** Capturing the body resonance of a harp
- **Playing Techniques:** Simulating different harp techniques

### Guitar Simulation
Producing guitar-like sounds:
- **Picking Styles:** Different attack characteristics
- **String Types:** Nylon vs. steel string simulation
- **Body Resonance:** Adding the sound of the guitar body
- **Finger vs. Pick:** Different excitation methods
- **Chord Voicings:** Creating realistic guitar chord voicings
- **Playing Techniques:** Simulating various guitar techniques

### Ethnic Instrument Emulation
Creating sounds of traditional plucked instruments:
- **Koto:** Japanese zither simulation
- **Sitar:** Indian string instrument characteristics
- **Oud:** Middle Eastern lute emulation
- **Charango:** South American stringed instrument
- **Balalaika:** Russian triangular-bodied instrument
- **Mandolin:** European double-stringed instrument

### Synthetic Sounds
Creating unique sounds beyond traditional instruments:
- **Bell Tones:** Metallic, harmonic-rich sounds
- **Metallic Percussion:** Industrial or sci-fi sounds
- **Atmospheric Textures:** Ethereal, evolving sounds
- **Rhythmic Elements:** Percussive, pattern-based sounds
- **Hybrid Instruments:** Combining characteristics of multiple instruments
- **Experimental Timbres:** Completely new sonic territories

---

## 🧪 Experimental Techniques

### Unconventional Applications
Creative uses beyond traditional plucked string simulation:
- **Percussion Synthesis:** Creating unique percussive sounds
- **Bass Synthesis:** Using low frequencies for bass sounds
- **Lead Synthesis:** Creating melodic lead sounds
- **Pad Generation:** Producing atmospheric textures
- **Rhythmic Elements:** Creating complex rhythmic patterns
- **Sound Effects:** Generating unusual sound effects

### Advanced Modulation
Complex modulation techniques:
- **LFO Applications:** Creating cyclic variations
- **Envelope Following:** Using audio signals to modulate parameters
- **Cross-Modulation:** Modulating one parameter with another
- **Random Modulation:** Adding aleatoric elements
- **Sample and Hold:** Creating stepped modulation effects
- **Chaotic Systems:** Using complex systems for modulation

### Processing Integration
Combining Plucked with external processing:
- **Distortion Processing:** Adding harmonic saturation
- **Filter Automation:** Dynamic spectral changes
- **Spatial Effects:** Creating immersive soundscapes
- **Granular Processing:** Breaking down and reconstructing sounds
- **Convolution Applications:** Adding realistic acoustic spaces
- **Spectral Processing:** Manipulating frequency content

---

## 📖 Additional Resources

### Official Documentation
- [Plucked Official Manual](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Plucked.htm)
- [FL Studio Physical Modeling Guide](https://www.image-line.com/support/flstudio_learning_center/physical_modeling/)
- [Karplus-Strong Algorithm Explanation](https://www.image-line.com/support/flstudio_learning_center/karplus_strong/)
- [Physical Modeling Synthesis Tutorial](https://www.image-line.com/support/flstudio_learning_center/physical_modeling_synthesis/)

### Educational Resources
- [Physical Modeling Synthesis Overview](https://ccrma.stanford.edu/~jos/pasp/)
- [Karplus-Strong Algorithm Deep Dive](https://en.wikipedia.org/wiki/Karplus–Strong_string_synthesis)
- [String Instrument Physics](https://www.phys.unsw.edu.au/jw/strings.html)
- [Digital Waveguide Synthesis](https://ccrma.stanford.edu/~jos/wg/)

### Video Tutorials
- [Plucked Basics](https://www.youtube.com/watch?v=example)
- [Creating Harp Sounds](https://www.youtube.com/watch?v=example)
- [Guitar Emulation Techniques](https://www.youtube.com/watch?v=example)
- [Ethnic Instrument Simulation](https://www.youtube.com/watch?v=example)

### Community Resources
- [Plucked User Forum](https://forum.image-line.com/viewtopic.php?t=example)
- [Physical Modeling Community](https://www.kvraudio.com/forum/viewforum.php?f=232)
- [FL Studio Sound Design Group](https://www.facebook.com/groups/flsounds/)
- [Synthesizer Reddit Community](https://www.reddit.com/r/synthesizers/)

---

## 🧠 Expert Tips & Tricks

### Performance Optimization
- **CPU Efficiency:** Plucked is very CPU-efficient, allowing many instances
- **Polyphony Management:** Adjust polyphony based on needs
- **Parameter Automation:** Optimize automation data usage
- **Effect Processing:** Use effects judiciously to maintain efficiency
- **Instance Management:** Consider layering vs. multiple instances
- **System Resources:** Monitor overall system performance

### Creative Sound Design
- **Parameter Exploration:** Experiment with extreme parameter settings
- **Layering Philosophy:** Combine with other instruments for richness
- **Negative Space:** Use silence and quiet moments effectively
- **Dynamic Contrast:** Create variation through dynamics
- **Texture Building:** Layer multiple elements for complexity
- **Evolution Techniques:** Create sounds that develop over time

### Technical Mastery
- **Harmonic Series Understanding:** Know the harmonic relationships
- **Decay Characteristics:** Understand how decay affects perception
- **Filter Slopes:** Recognize different filter characteristics
- **Modulation Index:** Control the intensity of modulation
- **Phase Relationships:** Manage phase interactions
- **Stereo Imaging:** Create effective stereo presentations

### Workflow Enhancement
- **Template Creation:** Build templates for common tasks
- **Patch Organization:** Develop a systematic approach
- **Parameter Mapping:** Map frequently used parameters
- **Sound Libraries:** Build collections for specific purposes
- **Effect Chains:** Develop go-to effect combinations
- **Sound Sets:** Create collections for specific genres

---

## 📈 Impact on Music Production

### Accessibility
Plucked democratized physical modeling synthesis:
- **Ease of Use:** Simple interface for complex synthesis
- **Quick Results:** Immediate gratification for sound design
- **Learning Curve:** Gentle introduction to physical modeling
- **Experimentation:** Low barrier to creative exploration
- **Resource Efficiency:** Works on modest hardware
- **Integration:** Seamless integration with FL Studio

### Creative Applications
The plugin enabled new creative possibilities:
- **Ethnic Music:** Authentic-sounding traditional instruments
- **Ambient Music:** Ethereal, evolving textures
- **Folk Music:** Acoustic instrument simulation
- **Electronic Music:** Hybrid acoustic-electronic sounds
- **Film Scoring:** Authentic ethnic instrument sounds
- **Game Audio:** Varied plucked string textures

### Production Efficiency
Plucked enhanced production workflows:
- **Speed:** Fast access to quality plucked string sounds
- **Consistency:** Reliable sound generation
- **Flexibility:** Adaptable to various musical contexts
- **Efficiency:** Low CPU usage allows many instances
- **Integration:** Works well with other FL Studio tools
- **Reliability:** Stable performance in complex projects

---

## 🎧 Genre-Specific Applications

### Folk and Acoustic Music
For folk and acoustic productions:
- **Authentic Sounds:** Convincing acoustic instrument simulation
- **Chord Accompaniment:** Gentle, supportive textures
- **Melodic Elements:** Delicate melodic lines
- **Atmospheric Enhancement:** Subtle background textures
- **Traditional Instruments:** Emulation of ethnic instruments
- **Natural Decay:** Organic, non-synthetic feel

### Ambient and New Age Music
In ambient contexts:
- **Ethereal Textures:** Evolving, atmospheric sounds
- **Harmonic Richness:** Complex but peaceful harmonies
- **Long Sustain:** Extended decay for ambient pads
- **Spatial Design:** Wide, immersive soundscapes
- **Evolution Techniques:** Gradual harmonic changes
- **Emotional Expression:** Conveying tranquility and peace

### Electronic and Experimental Music
For electronic applications:
- **Hybrid Sounds:** Combining acoustic and synthetic elements
- **Rhythmic Patterns:** Creating complex rhythmic sequences
- **Sound Design:** Generating unique timbres
- **Textural Complexity:** Layered harmonic content
- **Experimental Timbres:** Unusual sonic territories
- **Atmospheric Pads:** Evolving background textures

### World and Ethnic Music
In world music contexts:
- **Traditional Instruments:** Authentic ethnic instrument sounds
- **Cultural Authenticity:** Respectful representation of traditions
- **Regional Characteristics:** Specific regional instrument qualities
- **Cultural Fusion:** Combining different cultural elements
- **Authentic Techniques:** Simulating traditional playing methods
- **Regional Harmonies:** Supporting traditional harmonic systems

---

## 🎚️ Workflow Optimization

### Pre-Composition Setup
Before starting a project with Plucked:
- **Template Preparation:** Create templates with common settings
- **Sound Libraries:** Organize patches by function and genre
- **Parameter Maps:** Set up frequently used parameter mappings
- **Effect Chains:** Develop go-to effect combinations
- **Reference Sounds:** Gather inspiration sounds for comparison
- **Technical Preparation:** Ensure system resources are adequate

### During Composition
While creating music with Plucked:
- **Sound Selection:** Choose appropriate patches for musical context
- **Parameter Adjustment:** Fine-tune sounds to fit the mix
- **Arrangement Consideration:** Ensure sounds work in context
- **Effect Integration:** Add appropriate processing
- **Mix Consideration:** Ensure sounds sit well in the mix
- **Variation Creation:** Develop variations of successful sounds

### Post-Production Considerations
After completing a project:
- **Patch Documentation:** Record settings for future recall
- **Template Updates:** Incorporate lessons learned into templates
- **Sound Library Expansion:** Add successful sounds to collections
- **Workflow Refinement:** Improve processes based on experience
- **Backup Creation:** Preserve important settings and sounds
- **Knowledge Transfer:** Share discoveries with other producers

---

## 🧪 Advanced Sound Design Techniques

### Harp Simulation
Creating realistic harp sounds:
- **Attack Characteristics:** Achieving the distinctive harp attack
- **Sustain Control:** Managing the natural decay of harp strings
- **Pedaling Effects:** Simulating harp pedal changes
- **Hand Positioning:** Creating variations based on plucking position
- **Resonance Simulation:** Capturing the body resonance of a harp
- **Playing Techniques:** Simulating different harp techniques

### Guitar Emulation
Producing convincing guitar sounds:
- **Picking Styles:** Different attack characteristics
- **String Types:** Nylon vs. steel string simulation
- **Body Resonance:** Adding the sound of the guitar body
- **Finger vs. Pick:** Different excitation methods
- **Chord Voicings:** Creating realistic guitar chord voicings
- **Playing Techniques:** Simulating various guitar techniques

### Ethnic Instrument Creation
Generating authentic ethnic sounds:
- **Koto Simulation:** Japanese zither characteristics
- **Sitar Emulation:** Indian string instrument features
- **Oud Reproduction:** Middle Eastern lute qualities
- **Charango Recreation:** South American instrument traits
- **Balalaika Imitation:** Russian instrument characteristics
- **Mandolin Simulation:** European instrument features

---

## 📋 Troubleshooting Checklist

### Common Sound Issues
- [ ] Check decay settings for appropriate sustain
- [ ] Verify color settings for desired brightness
- [ ] Confirm normalize settings for consistent volume
- [ ] Adjust gate settings for proper note release
- [ ] Enable widen for stereo output if needed
- [ ] Verify pitch accuracy across the keyboard range

### Performance Problems
- [ ] Monitor CPU usage with multiple instances
- [ ] Check for excessive automation data
- [ ] Verify system resources are adequate
- [ ] Update FL Studio if using old version
- [ ] Check for plugin conflicts
- [ ] Verify audio driver settings

### Integration Issues
- [ ] Ensure proper mixer routing
- [ ] Check for frequency masking with other instruments
- [ ] Verify appropriate effects processing
- [ ] Confirm proper stereo field placement
- [ ] Check for timing synchronization issues
- [ ] Verify appropriate dynamic range

### Parameter Optimization
- [ ] Fine-tune decay for musical context
- [ ] Adjust color for genre appropriateness
- [ ] Calibrate normalize for consistent loudness
- [ ] Set gate for appropriate note-off behavior
- [ ] Configure widen for optimal stereo imaging
- [ ] Optimize all parameters for the specific sound needed

---

## 🎼 Integration Workflows

### DAW Integration
Working with Plucked in FL Studio:
- **Channel Rack:** Proper placement and routing
- **Playlist:** Effective arrangement techniques
- **Mixer:** Appropriate insert and send usage
- **Automation:** Parameter automation strategies
- **Piano Roll:** MIDI editing for Plucked
- **Browser:** Efficient patch management

### Plugin Combination
Using Plucked with other plugins:
- **Effects Chains:** Complementary effect usage
- **Layering:** Combining with other synths
- **Sidechaining:** Using with compressors and gates
- **Modulation:** Controlling with other plugins
- **Routing:** Creative signal routing options
- **Synchronization:** Tempo and phase alignment

### Hardware Integration
Connecting with external hardware:
- **MIDI Controllers:** Keyboard and pad controllers
- **Control Surfaces:** Hardware parameter control
- **Audio Interfaces:** Recording and monitoring
- **External Synthesizers:** Integration with hardware
- **Effects Units:** External processing options
- **Sequencers:** Hardware sequencing integration

---

## 🎧 Audio Quality Considerations

### Synthesis Quality
Plucked maintains high synthesis quality:
- **Aliasing Prevention:** Anti-aliasing for high frequencies
- **Dynamic Range:** Full dynamic range preservation
- **Harmonic Accuracy:** Faithful harmonic reproduction
- **Phase Coherence:** Maintained phase relationships
- **Stereo Imaging:** Accurate stereo field representation
- **Frequency Response:** Flat response across audible range

### Processing Quality
Effects processing maintains audio integrity:
- **Filter Quality:** High-quality filter algorithms
- **Effects Processing:** Clean effect implementation
- **Algorithmic Quality:** Accurate physical modeling
- **Arithmetic Precision:** High-resolution calculations
- **Temporal Accuracy:** Precise timing relationships
- **Spatial Processing:** Accurate stereo field processing

---

## 📊 Performance Metrics

### System Performance
Plucked operates efficiently:
- **CPU Usage:** Very low CPU consumption
- **Memory Usage:** Minimal memory footprint
- **Polyphony:** Efficient polyphony management
- **Real-time Performance:** Consistent performance under load
- **Latency:** Minimal processing latency
- **Stability:** Reliable operation in complex projects

### Audio Performance
Audio quality remains high:
- **THD+N:** Low distortion across frequency range
- **SNR:** High signal-to-noise ratio
- **Stereo Separation:** Excellent stereo isolation
- **Frequency Response:** Full range from 20Hz to 20kHz
- **Dynamic Range:** Full 16-bit dynamic range
- **Temporal Accuracy:** Precise timing relationships

---

## 🎚️ Control Surface Integration

### MIDI Mapping
Plucked supports comprehensive MIDI mapping:
- **Parameter Mapping:** Map any parameter to MIDI controller
- **Real-time Control:** Immediate response to controller input
- **Bank Switching:** Organize controls into banks
- **Learn Function:** Auto-map controls to MIDI inputs
- **Curve Shaping:** Adjust response curves
- **Channel Configuration:** Multi-channel control options

### Hardware Controller Support
Works with various hardware controllers:
- **Keyboard Controllers:** Traditional keyboard input
- **Pad Controllers:** Drum pad input for rhythmic programming
- **Knob Controllers:** Parameter control surfaces
- **Fader Controllers:** Level and parameter adjustment
- **Transport Controls:** Playback and recording control
- **Specialized Controllers:** Synth-specific controllers

---

## 🧩 Module Development

### Custom Preset Creation
Developing custom presets:
- **Sound Design Process:** Methodical approach to sound creation
- **Parameter Documentation:** Record settings for replication
- **Genre-Specific Sets:** Collections for specific styles
- **Function-Based Libraries:** Organized by musical function
- **Quality Control:** Ensuring consistent sound quality
- **Sharing Protocols:** Distributing custom presets

### Template Development
Creating project templates:
- **Basic Templates:** Starting points for projects
- **Genre Templates:** Style-specific starting points
- **Function Templates:** Purpose-specific setups
- **Effect Templates:** Pre-configured effect chains
- **Routing Templates:** Signal routing configurations
- **Automation Templates:** Pre-set automation patterns

---

## 🎧 Monitoring Strategies

### Sound Design Monitoring
Effective monitoring for sound design:
- **Reference Tracks:** Compare to professional examples
- **Spectral Analysis:** Visual feedback on frequency content
- **Stereo Imaging:** Monitor stereo field accuracy
- **Dynamic Range:** Monitor level and compression
- **Harmonic Content:** Analyze harmonic structure
- **Temporal Characteristics:** Monitor envelope shapes

### Mix Integration
Monitoring in the context of a mix:
- **Solo Capability:** Isolate Plucked sounds
- **EQ Interaction:** Monitor how sounds interact
- **Dynamic Competition:** Check for masking
- **Spatial Placement:** Verify stereo positioning
- **Frequency Balance:** Ensure appropriate frequency content
- **Level Integration:** Confirm appropriate loudness

---

## 📅 Timeline of Physical Modeling Development

### Key Milestones
- **1983:** Karplus-Strong algorithm invented by Kevin Karplus and Alex Strong
- **1980s-1990s:** Early physical modeling research and development
- **2000s:** Commercial physical modeling synthesizers emerge
- **2010s:** Physical modeling becomes more accessible
- **2015:** Plucked introduced in FL Studio
- **2016-2018:** Feature refinements and improvements
- **2019-2020:** Integration with other FL Studio tools
- **2021-2022:** Performance optimizations
- **2023-2024:** Advanced features and capabilities
- **2025-2026:** Continued development and enhancement

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a convincing "Palm Mute" sound
- [ ] Explain why the plugin sounds "metallic" at high color settings
- [ ] Build a processing chain that makes Plucked sound like a real electric guitar
- [ ] Design a realistic harp sound with appropriate decay and brightness
- [ ] Create convincing ethnic instrument emulations
- [ ] Apply appropriate effects processing to enhance rather than mask the sound
- [ ] Troubleshoot common Plucked issues efficiently
- [ ] Integrate Plucked sounds effectively into a mix
- [ ] Develop custom presets that meet professional standards
- [ ] Optimize performance for CPU-efficient operation
- [ ] Create genre-appropriate sounds for multiple musical styles
- [ ] Apply advanced physical modeling concepts to sound design
- [ ] Use Plucked creatively for unique sonic applications
- [ ] Combine Plucked with other instruments effectively
- [ ] Demonstrate mastery of all Plucked parameters and their interactions

---

**Version:** 1.0
**Last Updated:** 2026-01-31
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What Is Plucked?

> **The Physics Engine.**
> Plucked is a "Physical Modeling" synthesizer. It doesn't play back a recording (Sampler) and it doesn't use oscillators (Subtractive). It uses math to simulate a virtual string vibrating in the air.

## 🧠 The 60-Second Mental Model
Think of Plucked as a **Rubber Band Box**.
*   **Decay:** How tight is the rubber band? (Loose = Thud, Tight = Ring).
*   **Color:** What is the rubber band made of? (Nylon vs Steel).
*   **Widen:** Are the ears hearing it from two different angles?

It is essentially a "One-Trick Pony", but it does that trick—plucked strings—better and faster than almost anything else. It generates sound using the **Karplus-Strong** algorithm (Noise burst -> Delay Line -> Filter).

## 📋 When To Use It
| Use Case | ✅ YES (Plucked) | ❌ NO (Use Sampler/FLEX) |
| :--- | :--- | :--- |
| **Arps** | Fast, percussive plucks that need to cut through a mix. | Realistic 12-string guitar strumming. |
| **Harp** | Ethereal, dreamy background textures. | Orchestral cinematic scoring. |
| **Bass** | "Tic-Tac" bass layers (country/folk style) or metallic percussion. | 808s or Sub Bass. |
| **Lo-Fi** | Asian-style string instruments (Koto/Shamisen) simulation. | Realistic Piano. |

## 🎧 Context: Hip-Hop & R&B
In the Trap/R&B world, Plucked is often the source of:
1.  **The "Oriental" Trap Melody:** Fast, exotic scales played with a Koto-like preset.
2.  **The "Underwater" Arp:** High Decay, High Reverb, filtered down.
3.  **The Guitar Layer:** Layering Plucked under a sampled guitar to give it more "Pick Attack" transient.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map & Signal Flow

[SRC: IL-MAN]

## 🗺️ The Interface Tour

Plucked has one of the simplest interfaces in FL Studio. It is a single panel.

### 1. The Modeling Controls (Knobs)
*   **Decay:** The most important knob.
    *   *Left:* Muted string (Palm Mute).
    *   *Right:* Long sustain (Harp).
*   **Color:** The brightness/material.
    *   *Left:* Dull (Old Nylon / Thumb pluck).
    *   *Right:* Bright (New Steel / Coin pluck).
*   **Normalize:** Volume Compensation.
    *   *On:* High notes stay loud (unnatural but good for EDM).
    *   *Off:* High notes die out faster (Physics).

### 2. The Output Controls (Switches)
*   **Gate:**
    *   *On:* The string stops vibrating when you let go of the key.
    *   *Off:* The string rings out fully, regardless of note length (One-Shot mode).
*   **Widen:**
    *   *On:* Adds a stereo delay offset to widen the image.
    *   *Off:* Mono.

## 🚦 Internal Signal Flow

1.  **Trigger:** Note On generates a short burst of White Noise (The "Exciter").
2.  **Delay Line:** The noise loops through a very short delay (The "String"). The length of the delay determines the Pitch.
3.  **Filter:** Each time the noise loops, it goes through a Low-Pass Filter (**Color**).
4.  **Feedback:** The signal is fed back into the delay (**Decay**).
5.  **Output:** The result is a pitched tone.

## ⚠️ Common Misunderstandings
*   **"It sounds unnatural in the high register."**
    *   *Physics:* Real strings don't sustain forever in high octaves. Turn **Normalize** OFF for realism, or ON for synthetic power.
*   **"Where is the Reverb?"**
    *   Plucked has NO effects. It is a dry synthesizer. You MUST add Reverb/Delay in the mixer to make it sound good. Dry Plucked is very boring.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques & Best Practices

## 💎 The Golden Techniques

### 1. The "Palm Mute" Automation
*   **Context:** Making a simple guitar melody sound alive.
*   **Technique:**
    1.  Lower the **Decay** knob to near zero (Muted).
    2.  Automate the **Decay** knob to open up at the end of phrases.
*   **Result:** Simulates a guitarist lifting their palm off the bridge for accents.

### 2. The "Hardcore" Distortion
*   **Context:** Creating realistic Electric Guitar tones from scratch.
*   **Technique:**
    1.  Set Plucked to Max Decay, High Color.
    2.  Route to Mixer.
    3.  Add **Hardcore** (or Distructor) plugin.
    4.  Select a "Metal" or "Rock" cabinet.
*   **Result:** Plucked provides the "Transient" attack that oscillators lack, and the Distortion shapes the sustain. It sounds surprisingly authentic for solos.

### 3. The "Harp" Glissando
*   **Context:** Dreamy transitions.
*   **Technique:**
    1.  Max Widen.
    2.  Turn **Gate** OFF.
    3.  Strum a chord quickly (arpeggiate notes).
    4.  The notes ring out over each other creating a wash of sound.

## 👂 What to Listen For
*   **Metallic Ringing:** At very high Color settings, the feedback loop can create a harsh, metallic artifacts.
    *   *Fix:* Dial back Color slightly or use a high-cut EQ post-plugin.
*   **Phase Issues:** The **Widen** button uses delay-based stereo. Check in Mono. If it disappears, turn Widen off and use a Chorus plugin instead.

## 🛑 Common Pitfalls
1.  **Ignoring Velocity:** Plucked responds dynamically to Velocity. If you paint all notes at 100% velocity, it sounds like a toy. **Humanize** your velocity for better "Color" response.
2.  **Using it Dry:** Never use Plucked without at least a little bit of Reverb/Delay. It is too dry and clinical on its own.

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Plucked

How to string the "Vibe".

## 🌑 Moody (Dark Trap)
*   **The Goal:** Sinister, ancient, muffled.
*   **The Levers:**
    1.  **Color:** Low (Dull).
    2.  **Decay:** Medium.
    3.  **Widen:** Off.
    4.  **FX:** Half-time (Gross Beat) works wonderfully on Plucked melodies.

## ☀️ Upbeat (Tropical House / Pop)
*   **The Goal:** Bright, happy, beachy.
*   **The Levers:**
    1.  **Color:** High (Bright).
    2.  **Decay:** Short (Plucky).
    3.  **Widen:** On.
    4.  **Notes:** Use high octaves (C5+).

## 🍄 Psychedelic (Tame Impala)
*   **The Goal:** Washed out, liquid guitar.
*   **The Levers:**
    1.  **Decay:** Max.
    2.  **Gate:** Off.
    3.  **Processing:** Add Phaser + Vibrato (LFO on pitch) to make it wobble.

## 🎷 Jazzy (Folk / Acoustic)
*   **The Goal:** Warm nylon string.
*   **The Levers:**
    1.  **Color:** 25% (Very warm).
    2.  **Decay:** 60%.
    3.  **Velocity:** Varied significantly.

## 🌊 Vibey (Lo-Fi)
*   **The Goal:** Sampled harp loop.
*   **The Levers:**
    1.  **Widen:** OFF (Mono is more vintage).
    2.  **FX:** Add **RC-20** (or similar) to wobble the pitch. Plucked's pure tone reveals pitch wobble artifacts beautifully.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: 5 Minutes to String Theory

1.  **Load:** Open Plucked (It loads instantly).
2.  **Tone:** Play a note.
    *   Want Guitar? Turn **Decay** Down.
    *   Want Harp? Turn **Decay** Up.
    *   Want Steel? Turn **Color** Right.
    *   Want Nylon? Turn **Color** Left.
3.  **Space:** Add **Fruity Reeverb 2** on the mixer track. Preset: "Large Hall".
4.  **Width:** Click the **Widen** button (Bottom right in the plugin UI).
5.  **Play:** Instant emotional melody.

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes & Fixes

| Mistake | Symptom | The Fix |
| :--- | :--- | :--- |
| **Max Velocity** | Sound is harsh and "toy-like". | Physical modeling relies on dynamics. Varied velocity changes the timbre, not just volume. **Humanize** your MIDI patterns. |
| **No Reverb** | Sound is bone-dry and boring. | Plucked has NO internal reverb. You *must* add it in the mixer. |
| **Decay Too High** | Muddy mix (notes bleeding). | Turn on **Gate** or lower the **Decay** knob so notes stop when you release the key. |
| **Single Layer** | Sound is thin. | Physical models are pure. Layer Plucked with a sampled guitar (FLEX) to add "body" to the "pluck". |

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points

## 1. Muted Guitar (Trap Melody)
*   **Decay:** 15% (Very Short).
*   **Color:** 80% (Bright).
*   **Gate:** ON.
*   **Widen:** OFF.

## 2. Dream Harp (Intro/Pad)
*   **Decay:** 90% (Long).
*   **Color:** 60%.
*   **Gate:** OFF.
*   **Widen:** ON.

## 3. "Koto" (Ethnic)
*   **Decay:** 40%.
*   **Color:** 100% (Metallic).
*   **Gate:** ON.
*   **Widen:** OFF.

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Settings: MOODY

**Target:** Dark, Sampled, Noir.

## The Recipe
1.  **Decay:** Low (25%) - Short sustain prevents "happy" ringing.
2.  **Color:** Low (20%) - Removes the high frequencies, leaving a thud.
3.  **Normalize:** OFF - Let high notes die out fast.
4.  **Processing:** Add **Fruity Fast Dist** (Mix 10%, Type B) to add grit to the clean tone.

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Settings: Upbeat / Psych / Jazzy / Vibey

## ☀️ UPBEAT (Summer Vibe)
*   **Settings:** High Color, Short Decay.
*   **Widen:** ON.
*   **Pattern:** Fast 16th note arpeggios.
*   **Layering:** Layer with a Tropical House Flute.

## 🍄 PSYCHEDELIC (Liquid)
*   **Settings:** Max Decay, Gate OFF.
*   **FX:** Fruity Flanger (Slow rate) + Delay 3 (Ping Pong).
*   **Result:** The string never stops vibrating, and the Flanger makes it sound liquid.

## 🎷 JAZZY (Background)
*   **Settings:** Color 30%, Decay 50%.
*   **Gate:** ON.
*   **Play style:** Strum chords (don't quantize perfectly).

## 🌊 VIBEY (Lofi Asian)
*   **Settings:** Koto preset (Max Color).
*   **FX:** Pitch Shifter (Mix 30%, Pitch -12st).
*   **Result:** A "haunted" string sound that feels sampled from a VHS tape.

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Plucked Parameter Dictionary

| Parameter | Type | Range | Description | Vibe Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Decay** | Knob | Short-Long | Length of feedback loop (Sustain). | **CRITICAL** (Mute vs Ring) |
| **Color** | Knob | Dark-Bright | Filter cutoff in feedback loop. | **CRITICAL** (Material) |
| **Normalize** | Switch | On/Off | Volume consistency vs Physics. | **Medium** (Realism) |
| **Gate** | Switch | On/Off | Note-Off behavior (Stop or Ring). | **High** (Stutter vs Flow) |
| **Widen** | Switch | On/Off | Stereo delay offset. | **High** (Image) |

```

---

## FILE: 02-Data\presets\00_Workflow_Preset_Strategy.md

```markdown
# Workflow & Preset Strategy: Plucked

## 💾 The "FX Chain" Strategy
Plucked itself is so simple (3 knobs) that saving presets for the *plugin* is almost pointless.
**The real magic is in the Mixer Track.**
Save **Mixer Track States** instead.

### 1. "Electric Guitar" State
*   **Plucked:** Max Decay.
*   **FX 1:** Hardcore (Distortion).
*   **FX 2:** Fruity Delay 3 (Slapback).

### 2. "Lofi Harp" State
*   **Plucked:** Long Decay, Widen On.
*   **FX 1:** RC-20 (or Vinyl).
*   **FX 2:** Fruity Reeverb 2 (Cathedral).

### 3. "Trap Pluck" State
*   **Plucked:** Short Decay.
*   **FX 1:** Soundgoodizer (Maximizer).
*   **FX 2:** Gross Beat (Half-time).

```

---

## FILE: 02-Data\rules\00_Do_Dont_Rules.md

```markdown
# Operational Rules: Do's and Don'ts

| Action | Verdict | Reason |
| :--- | :--- | :--- |
| **Use Dry** | 🛑 **STOP** | Plucked has no spatial effects. It sounds clinically dead without Reverb/Delay. |
| **Automate Color** | ✅ **DO** | Automating Color mimics the player striking the string at different positions (Bridge vs Neck). |
| **Layering** | ✅ **DO** | Layer Plucked (for the transient attack) with a soft Pad (for the body). This creates "Plucked Pads" typical in EDM. |
| **Max Polyphony** | ⚠️ **CAUTION** | Karplus-Strong can get muddy if too many notes ring out. Lower polyphony to 4-6 voices to force note stealing (cleaner mix). |

```

---

## FILE: 02-Data\rules\01_Troubleshooting_Matrix.md

```markdown
# Troubleshooting Matrix

| Symptom | Probable Cause | The Fix |
| :--- | :--- | :--- |
| **"Notes blurring together"** | Decay too long / Gate Off. | Turn on **Gate** or lower **Decay**. Also check Reverb decay time. |
| **"Sound is too quiet high up"** | Physics simulation. | Turn **Normalize** ON. |
| **"Metallic buzzing"** | Color too high. | High color values create aliasing/ringing. Lower Color or EQ the highs. |
| **"Sounds Mono"** | Widen OFF. | Turn **Widen** ON. |
| **"Clicking sound"** | Voice stealing. | If Polyphony is too low, new notes cut off old ones abruptly. Increase Max Polyphony in plugin settings. |

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B

## 1. The "Roddy Ricch" Guitar
*   **Rule:** It must sound lonely.
*   **Implementation:** Use Plucked with high Reverb mix, but filter out the low end of the Reverb. Play simple, repetitive minor arpeggios.

## 2. The "Asian" Trap Pattern
*   **Rule:** Use the Pentatonic Scale.
*   **Implementation:** Set Color to 100% (Metallic/Koto). Play fast triplet runs using only Black Keys (Pentatonic Major/Minor).

## 3. The "Drake" Underwater Pluck
*   **Rule:** Submerged transients.
*   **Implementation:** Plucked (Short Decay) -> Fruity Parametric EQ 2 (Low Pass at 600Hz) -> Reverb (High Mix). The pluck provides the rhythm, but no pitch information is clearly distinct.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Workflow: Quick Custom Guitar

**Goal:** Create a unique guitar tone in 30 seconds.

1.  **Init:** Color 50%, Decay 20%.
2.  **Filter:** Add **Fruity Fast LP** (Low Pass) in the mixer.
3.  **Envelope:** Link Velocity to the Cutoff of that filter.
    *   *Result:* Hard hits = Bright. Soft hits = Muffled.
4.  **Play:** You now have a dynamic palm-muted guitar perfect for Afrobeats or Trap.

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Sound_Design.md

```markdown
# Workflow: The Alien Harp

**Goal:** Sci-Fi string texture.

1.  **Plucked:** Max Decay, Max Color, Widen ON.
2.  **FX 1:** **Fruity Flanger**.
    *   Rate: Very Slow.
    *   Depth: Max.
    *   Feedback: High.
3.  **FX 2:** **Fruity Delay 3**.
    *   Time: Dotted 8th.
    *   Ping Pong: ON.
4.  **Result:** A metallic, swirling string sound that evolves over time.

```

---

## FILE: 03-Workflows\by-goal\02_Goal_Mix_Or_Control.md

```markdown
# Workflow: Layering for Attack

**Goal:** Adding "Punch" to a soft synth pad.

1.  **Problem:** Your pad is lush but lacks rhythm.
2.  **Solution:** Layer Plucked.
    *   Copy Pad midi to Plucked channel.
    *   Set Plucked Decay to 10% (Short click).
    *   Mix Plucked volume low (-18dB).
3.  **Result:** The listener "feels" the chord start thanks to the Plucked transient, but hears the lush Pad sustain.

```

---

## FILE: 03-Workflows\by-goal\10_Vibe_Moody.md

```markdown
# Vibe Workflow: MOODY (Corrupted String)

**Context:** Horror movie soundtrack intro.

1.  **Settings:** Decay Long. Color Medium.
2.  **Pitch:** Add **Fruity Pitch Shifter** (or similar).
    *   Mix: 50%.
    *   Pitch: -12 semitones.
3.  **Distortion:** Add **Fruity Squeeze**.
    *   Bitcrush the tail.
4.  **Result:** A beautiful string that decays into a digital nightmare.

```

---

## FILE: 03-Workflows\by-goal\11_Vibe_Upbeat.md

```markdown
# Vibe Workflow: UPBEAT (Tropical Pluck)

**Context:** Kygo / Matoma style.

1.  **Settings:** Short Decay. Bright Color.
2.  **Widen:** ON.
3.  **Layer:** Layer with a marimba sample.
4.  **Reverb:** Gated Reverb (Short decay, high mix).
5.  **Result:** Extremely percussive, happy sound that drives the rhythm.

```

---

## FILE: 03-Workflows\by-goal\12_Vibe_Psychedelic.md

```markdown
# Vibe Workflow: PSYCHEDELIC (Reverse Harp)

**Context:** Trippy bridge.

1.  **Record:** Record a long Plucked harp glissando into Edison.
2.  **Reverse:** Reverse the sample.
3.  **Reverb:** Add huge reverb (Wet only).
4.  **Sidechain:** Sidechain compress it to the Kick.
5.  **Result:** Swelling, sucking reverse textures that sound organic yet alien.

```

---

## FILE: 03-Workflows\by-goal\13_Vibe_Jazzy.md

```markdown
# Vibe Workflow: JAZZY (Thumb Bass)

**Context:** Walking bassline.

1.  **Register:** Play low octaves (C2).
2.  **Color:** Minimum (Very dark).
3.  **Decay:** Medium.
4.  **EQ:** Boost 100Hz.
5.  **Result:** Sounds like a double bass plucked with the thumb. Smooth and round.

```

---

## FILE: 03-Workflows\by-goal\14_Vibe_Vibey.md

```markdown
# Vibe Workflow: VIBEY (Koto Loops)

**Context:** Asian-inspired Trap loop.

1.  **Settings:** Max Color. Short Decay.
2.  **Composition:** Use Pentatonic Scale.
3.  **Groove:** Half-time (Gross Beat).
4.  **Result:** The classic fast-arpeggio-slowed-down sound of 2016-era Metro Boomin beats.

```

---

## FILE: 03-Workflows\by-instrument\Guitar_Harp_Bass.md

```markdown
# Workflow: Instrument Recipes

## 1. Guitar (Solo)
*   **Decay:** Automate this (Short for mute, Long for ringing).
*   **Color:** 70%.
*   **FX:** Overdrive + Cabinet Sim.

## 2. Harp (Background)
*   **Decay:** 90%.
*   **Color:** 50%.
*   **FX:** Delay (Ping Pong) + Hall Reverb.

## 3. Bass (Tic Tac)
*   **Decay:** 30%.
*   **Color:** 40%.
*   **Freq:** Low Octaves.
*   **Use:** Layer with a Sub Bass to add "Click" top end.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log

| ID | Source Name | Type | Key Information Derived |
| :--- | :--- | :--- | :--- |
| **IL-MAN** | Image-Line Official Manual | Primary | Karplus-Strong mechanics, Gate function, Normalize behavior. |
| **SYNTH-SECRETS** | Sound On Sound | Concept | Physics of string decay, Feedback loop filtering. |

```

---

## FILE: 04-Reference\01_Official_Links.md

```markdown
# Official Links

*   **Plugin Manual:** [Image-Line Plucked](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Plucked.htm)

```

---

## FILE: 04-Reference\02_Coverage_Checklist.md

```markdown
# Coverage Checklist

## Learning
- [x] Mental Model (Rubber Band Box)
- [x] UI Map (Decay, Color, Widen)
- [x] Core Techniques (Palm Mute Automation, Distortion Layering)
- [x] Vibe Translation (5 Vibes Mapped)

## Data
- [x] Parameters (Decay, Color, Gate)
- [x] Presets Strategy (Mixer States)
- [x] Rules (Use Reverb, Dynamic Velocity)

## Workflows
- [x] Quick Guitar
- [x] Alien Harp
- [x] Attack Layering
- [x] Moody Vibe
- [x] Upbeat Vibe
- [x] Psych Vibe
- [x] Jazzy Vibe
- [x] Vibey Vibe
- [x] Instrument Recipes

## Reference
- [x] Sources
- [x] Links
- [x] Style Board

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Hip-Hop & R&B

How Plucked defines the sound of modern genres.

## 1. The "Metro" Bell (Trap)
*   **Signature:** Dark, metallic, pervasive.
*   **Recipe:** Plucked (Color Max) + Gross Beat (Half Time). It stops sounding like a string and starts sounding like a dark bell.

## 2. The "Afro" Guitar (Afrobeats)
*   **Signature:** Muted, rhythmic, percussive.
*   **Recipe:** Plucked (Decay Short, Gate ON) + Syncopated rhythms. It acts as a melodic percussion instrument.

## 3. The "Lofi" Koto
*   **Signature:** Ancient, wobbly, nostalgic.
*   **Recipe:** Plucked (Open Decay) + RC-20. The pure sine-like quality of the string exhibits the pitch modulation artifacts perfectly.

## 4. The "EDM" Pluck
*   **Signature:** Huge, wide, reverb-drenched.
*   **Recipe:** Plucked (Widen ON) + Huge Hall Reverb + Sidechain Compression.

```

---

