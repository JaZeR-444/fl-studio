# PoiZone - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# PoiZone - Subtractive Workhorse

`\`\`
██████╗  ██████╗ ██╗███████╗ ██████╗ ███╗   ██╗███████╗
██╔══██╗██╔═══██╗██║╚══███╔╝██╔═══██╗████╗  ██║██╔════╝
██████╔╝██║   ██║██║  ███╔╝ ██║   ██║██╔██╗ ██║█████╗
██╔═══╝ ██║   ██║██║ ███╔╝  ██║   ██║██║╚██╗██║██╔══╝
██║     ╚██████╔╝██║███████╗╚██████╔╝██║ ╚████║███████╗
╚═╝      ╚═════╝ ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
`\`\`

**Plugin Type:** Subtractive Synthesizer
**Category:** Generator / Analog / Trance
**Official Manual:** [Image-Line PoiZone Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/PoiZone.htm)

---

## 🎯 What is PoiZone?

PoiZone is a streamlined subtractive synthesizer designed for fast results. It is built to minimize "menu diving" and maximize workflow, featuring a classic 2-oscillator architecture, a powerful Arpeggiator, and a Trance Gate. It is particularly famous for its "SuperSaw" capabilities and lush 4-voice Unison, making it a staple for Trance, Eurodance, and Techno leads.

**Key Capabilities:**
- **2 Oscillators:** Saw/Pulse waveforms with Pulse Width.
- **Unison Engine:** 4 voices with stereo spread and detune.
- **Trance Gate:** 16-step rhythmic gater for instant movement.
- **Arpeggiator:** Full-featured melodic pattern generator.
- **Built-in Effects:** Delay, Chorus, Reverb (Ring Mod too?).
- **Filter:** Resonant LP/BP/HP with keyboard tracking.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **subtractive-basics.md**
3. Create **parameter-cheat-sheet.md**
4. Enable "Unison" and play a chord to hear the width.

### For Trance Producers:
1. Study **creating-supersaw-leads.md**
2. Review **trance-gate-programming.md**
3. Learn **arpeggiator-layering.md**

### For Sound Designers:
1. Study **pulse-width-modulation-pads.md**
2. Review **noise-oscillator-percussion.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Osc 1 & 2:** Wave shapes, tuning.
  - **Filter:** Cutoff, Res, Type.
  - **Amp Env:** ADSR.
  - **Filter Env:** ADSR.
  - **Unison:** Detune/Pan.
  - **Trance Gate:** Step grid.

- [ ] **poizone-architecture.md**
  - Signal flow: Osc -> Filter -> Amp -> FX.

#### 02-Data/parameters/
- [ ] **poizone-params.json**
  `\`\`json
  {
    "plugin_name": "PoiZone",
    "category": "Synthesizer",
    "polyphony": 32,
    "unison_voices": 4
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-supersaw-leads.md**
  - Osc 1 & 2 set to Saw.
  - Unison Detune at 20-30%.
  - Unison Pan at 100%.
  - Adding Chorus/Delay.

- [ ] **trance-gate-pads.md**
  - Drawing a rhythmic pattern in the Gate grid.
  - Adjusting the "Smooth" knob to soften the clicks.

- [ ] **acid-bass-sequence.md**
  - Pulse wave.
  - High Resonance on LP Filter.
  - Short Decay on Filter Envelope.

#### 03-Workflows/by-context/
- [ ] **eurodance-stab.md**
- [ ] **plucked-arpeggio.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **midi-learn-features.md**
  - How to map knobs quickly.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** The Lead

**Tasks:**
1. Initialize patch
2. Turn on Unison
3. Detune Osc 2 slightly
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I sync the LFO?
- Where is the Ring Modulation? (Check modulation matrix or dedicated knob).

### Phase 2: The Gate (Week 2)
**Goal:** Rhythm

**Tasks:**
1. Enable the Trance Gate
2. Create a 1/16th note pattern
3. Use the "Smooth" knob
4. Create trance-gate-programming.md

---

## 📊 Plugin Specifications to Document

### Engine
- Polyphony (32)
- Filter Types (LP/BP/HP)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the sound mono? (Check Unison Pan and Stereo spread).
2. How do I make the Arp play 2 octaves? (Adjust Range knob).

---

## 🔗 Cross-Reference with Other Plugins

PoiZone is often used with:
- **Toxic Biohazard** (FM counterpart)
- **Sawer** (Vintage counterpart)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
PoiZone/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── poizone-architecture.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── poizone-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-supersaw-leads.md
│   │   ├── trance-gate-pads.md
│   │   └── acid-bass-sequence.md
│
└── 04-Reference/
    └── midi-learn-features.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a "Anthem" Trance lead in under 1 minute
- [ ] Program a rhythmic gate that syncs perfectly with a drum beat
- [ ] Explain the difference between Unison Detune and Osc Detune

---

## 🛠️ Technical Deep Dive

### Signal Flow Architecture
PoiZone follows a classic subtractive synthesis architecture with a clear signal path:
- **Oscillators:** Two primary oscillators with selectable waveforms
- **Pulse Width Modulation:** Dynamic control over pulse width for tonal variation
- **Filter Section:** State-variable filter with multiple response types
- **Amplifier Section:** Dual-envelope control system
- **Unison Processing:** Four-voice unison with detune and stereo spread
- **Effects Processing:** Integrated effects engine with multiple processors
- **Arpeggiator:** Pattern-based note generation
- **Trance Gate:** Rhythmic gating processor

### Oscillator Design
The oscillator section features:
- **Waveform Selection:** Sawtooth, Pulse, Triangle, and Sine waveforms
- **Pulse Width Control:** Adjustable duty cycle for pulse waves
- **Pulse Width Modulation:** Dynamic control over pulse width
- **Oscillator Sync:** Hard sync capabilities for harsh harmonic content
- **Detuning:** Fine and coarse tuning controls for each oscillator
- **Phase Reset:** Synchronized oscillator startup for consistent attacks

### Filter Characteristics
The filter section includes:
- **Filter Types:** Low-pass, Band-pass, and High-pass configurations
- **Resonance Control:** Up to self-oscillation for distinctive tonal character
- **Keyboard Tracking:** Filter cutoff responds to note pitch
- **Envelope Modulation:** Filter cutoff responds to envelope generators
- **LFO Modulation:** Filter cutoff responds to low-frequency oscillators
- **Filter Drive:** Non-linear processing for harmonic saturation

### Unison Engine
The unison section features:
- **Voice Count:** Four independent voices for thickness
- **Detune Control:** Individual voice detuning for chorusing effects
- **Stereo Spread:** Left-right positioning of voices
- **Phase Variation:** Different starting phases for each voice
- **Level Balancing:** Individual voice level control
- **Routing Options:** Flexible routing of unison voices

### Arpeggiator Features
The arpeggiator includes:
- **Pattern Memory:** Multiple stored arpeggio patterns
- **Direction Control:** Up, Down, Both, Random, and Chord modes
- **Octave Range:** Multiple octave spans
- **Rate Control:** Tempo-syncable arpeggiation speed
- **Hold Function:** Sustained arpeggiation without holding keys
- **Gate Time:** Adjustable note duration

### Trance Gate Functionality
The trance gate provides:
- **Step Sequencer:** 16-step pattern programming
- **Gate Probability:** Individual probability for each step
- **Smooth Control:** Transition smoothing between gates
- **Tempo Sync:** Synchronization with project tempo
- **Rate Division:** Various rhythmic subdivisions
- **Pattern Storage:** Multiple gate patterns

---

## 📚 Sound Design Fundamentals

### Subtractive Synthesis Principles
PoiZone implements classic subtractive synthesis principles:
- **Harmonic Richness:** Starting with harmonically rich waveforms
- **Filtering:** Removing unwanted harmonics to shape tone
- **Envelope Control:** Shaping amplitude and harmonic content over time
- **Modulation:** Adding movement and variation to static sounds
- **Resonance:** Emphasizing specific frequency regions
- **Envelope Following:** Dynamic response to input signals

### Waveform Characteristics
Different waveforms provide distinct sonic properties:
- **Sawtooth:** Rich in harmonics, ideal for brass and string sounds
- **Pulse:** Hollow, reedy character, good for hollow sounds
- **Triangle:** Softer harmonics, closer to sine wave but with more content
- **Sine:** Pure tone, useful for sub-bass and simple tones
- **White Noise:** Aperiodic signal for percussive and atmospheric sounds

### Filter Applications
Filters serve multiple purposes in subtractive synthesis:
- **Tonal Shaping:** Removing or emphasizing specific frequency ranges
- **Character Creation:** Creating distinctive tonal signatures
- **Movement Generation:** Modulating filter parameters for motion
- **Resonance Effects:** Creating emphasis at specific frequencies
- **Self-Oscillation:** Using filter as additional oscillator
- **Envelope Creation:** Shaping harmonic content over time

### Envelope Design
Envelope generators shape sound evolution:
- **Attack:** Initial rise time from silence
- **Decay:** Fall from peak to sustain level
- **Sustain:** Continuous level while note is held
- **Release:** Fall from sustain to silence after note release
- **ADSR Variations:** Different envelope configurations
- **Multi-Stage Envelopes:** Complex envelope shapes

---

## ⚙️ Advanced Configuration Techniques

### Oscillator Tuning
Precise oscillator tuning techniques:
- **Fine Tuning:** Micro-adjustments for beating effects
- **Coarse Tuning:** Octave and semitone adjustments
- **Harmonic Relationships:** Creating specific harmonic intervals
- **Detuning Patterns:** Creating chorus-like effects
- **Sync Applications:** Creating harsh harmonic content
- **Phase Alignment:** Ensuring consistent attacks

### Filter Modulation
Advanced filter modulation approaches:
- **Envelope Amount:** Controlling filter response to amplitude
- **Keyboard Tracking:** Adjusting filter response by note
- **LFO Modulation:** Creating cyclic filter movement
- **Velocity Response:** Filter response to playing force
- **Aftertouch Control:** Real-time filter adjustment
- **Mod Wheel Integration:** Expressive filter control

### Unison Optimization
Optimizing the unison section:
- **Detune Amount:** Balancing thickness and clarity
- **Stereo Spread:** Creating optimal stereo imaging
- **Phase Relationships:** Managing phase coherence
- **Voice Level Matching:** Ensuring balanced voices
- **Timing Alignment:** Synchronized voice behavior
- **Processing Considerations:** Effects applied to unison voices

### Arpeggiator Programming
Advanced arpeggiator techniques:
- **Pattern Complexity:** Creating intricate rhythmic patterns
- **Chord Integration:** Using held chords as arpeggio source
- **Rhythmic Variation:** Combining different rhythmic elements
- **Melodic Sequences:** Creating melodic patterns
- **Syncopation:** Adding rhythmic interest
- **Polyrhythmic Patterns:** Multiple rhythmic layers

---

## 🎨 Creative Sound Design Applications

### Lead Sound Creation
Creating distinctive lead sounds:
- **Supersaw Construction:** Using unison for thick sawtooth sounds
- **Filter Sweeping:** Creating dynamic lead movements
- **Resonance Peaks:** Adding distinctive character
- **Envelope Shaping:** Crafting lead envelopes
- **Effects Integration:** Adding chorus, delay, and reverb
- **Stereo Enhancement:** Creating wide lead sounds

### Bass Sound Design
Designing powerful bass sounds:
- **Sub-Bass Foundation:** Creating low-frequency fundamentals
- **Harmonic Content:** Adding upper harmonics for clarity
- **Filter Movement:** Creating evolving bass lines
- **Envelope Tuning:** Crafting appropriate bass envelopes
- **Unison Application:** Thickening bass sounds
- **Distortion Integration:** Adding harmonic saturation

### Pad and Atmospheric Sounds
Creating ambient textures:
- **Wide Stereo Imaging:** Using unison and effects
- **Slow Envelopes:** Creating evolving textures
- **Filter Automation:** Shaping harmonic content over time
- **Chorus Application:** Adding movement and depth
- **Reverb Integration:** Creating spatial depth
- **Layering Techniques:** Combining multiple elements

### Percussive and Stab Sounds
Designing sharp, impactful sounds:
- **Fast Envelopes:** Creating quick attacks and releases
- **Filter Resonance:** Adding distinctive character
- **Noise Integration:** Adding percussive elements
- **Effects Processing:** Adding spatial characteristics
- **Unison Control:** Managing thickness and clarity
- **Dynamic Response:** Creating velocity-sensitive sounds

---

## 🧪 Experimental Techniques

### Unconventional Sound Design
Exploring creative applications:
- **Granular Synthesis Simulation:** Using rapid arpeggiation
- **FM Synthesis Emulation:** Using filter modulation
- **Wavetable Morphing:** Using LFO modulation
- **Physical Modeling Approximation:** Simulating acoustic properties
- **Spectral Processing:** Shaping harmonic content
- **Microtonal Exploration:** Non-standard tunings

### Advanced Modulation
Complex modulation techniques:
- **Cross-Modulation:** Modulating one parameter with another
- **Envelope Following:** Using audio signals to modulate parameters
- **Random Modulation:** Adding aleatoric elements
- **Sample and Hold:** Creating stepped modulation
- **Wavefolder Effects:** Creating complex harmonic content
- **Chaos Modulation:** Using chaotic systems for modulation

### Rhythmic Innovation
Creative rhythmic applications:
- **Polyrhythmic Patterns:** Combining different rhythmic cycles
- **Metric Modulation:** Changing rhythmic feel gradually
- **Syncopated Arpeggios:** Creating rhythmic interest
- **Euclidean Patterns:** Mathematical rhythmic structures
- **Probability Gates:** Randomizing rhythmic elements
- **Humanization:** Adding human-like timing variations

---

## 📖 Additional Resources

### Official Documentation
- [PoiZone Official Manual](https://www.image-line.com/support/flstudio_online_manual/html/plugins/PoiZone.htm)
- [FL Studio Synthesis Guide](https://www.image-line.com/support/flstudio_learning_center/synthesis_guide/)
- [Subtractive Synthesis Tutorial](https://www.image-line.com/support/flstudio_learning_center/subtractive_synthesis/)
- [Trance Production Techniques](https://www.image-line.com/support/flstudio_learning_center/trance_production/)

### Educational Resources
- [Synthesizer Academy](https://www.soundonsound.com/series/synths-explored)
- [Subtractive Synthesis Explained](https://www.attackmagazine.com/technique/tutorials/subtractive-synthesis/)
- [Trance Sound Design](https://www.futuremusic.co.uk/articles/trance-sound-design)
- [Lead Synthesis Techniques](https://www.wholetune.com/lead-synthesis-guide)

### Video Tutorials
- [PoiZone Basics](https://www.youtube.com/watch?v=example)
- [Creating Trance Leads](https://www.youtube.com/watch?v=example)
- [Unison Techniques](https://www.youtube.com/watch?v=example)
- [Arpeggiator Programming](https://www.youtube.com/watch?v=example)

### Community Resources
- [PoiZone User Forum](https://forum.image-line.com/viewtopic.php?t=example)
- [Trance Production Community](https://www.tranceforums.com/)
- [FL Studio Sound Design Group](https://www.facebook.com/groups/flsounds/)
- [Synthesizer Reddit Community](https://www.reddit.com/r/synthesizers/)

---

## 🧠 Expert Tips & Tricks

### Performance Optimization
- **Polyphony Management:** Adjust polyphony based on needs
- **CPU Usage:** Monitor CPU usage with multiple instances
- **Unison Efficiency:** Balance unison quality with performance
- **Filter Processing:** Consider filter complexity and CPU cost
- **Effects Bypass:** Bypass unused effects for efficiency
- **Parameter Automation:** Optimize automation data usage

### Creative Sound Design
- **Layering Philosophy:** Combine different synthesis approaches
- **Negative Space:** Use silence and quiet moments effectively
- **Dynamic Contrast:** Create variation through dynamics
- **Texture Building:** Layer multiple elements for complexity
- **Evolution Techniques:** Create sounds that develop over time
- **Emotional Resonance:** Design sounds that evoke feelings

### Technical Mastery
- **Harmonic Series Understanding:** Know the harmonic relationships
- **Filter Slopes:** Understand different filter characteristics
- **Envelope Curves:** Recognize different envelope shapes
- **Modulation Index:** Control the intensity of modulation
- **Phase Relationships:** Manage phase interactions
- **Stereo Imaging:** Create effective stereo presentations

### Workflow Enhancement
- **Template Creation:** Build templates for common tasks
- **Patch Organization:** Develop a systematic approach
- **Parameter Mapping:** Map frequently used parameters
- **Pattern Libraries:** Build collections of useful patterns
- **Effect Chains:** Develop go-to effect combinations
- **Sound Sets:** Create collections for specific genres

---

## 📈 Impact on Music Production

### Trance Music Revolution
PoiZone significantly impacted trance music production:
- **SuperSaw Standardization:** Made supersaw leads accessible
- **Trance Gate Innovation:** Introduced rhythmic gating to mainstream
- **Quick Production:** Enabled fast creation of signature sounds
- **Genre Definition:** Helped define the trance sound
- **Accessibility:** Made complex sounds achievable for beginners
- **Sound Libraries:** Generated vast collections of presets

### Production Efficiency
The plugin enhanced production workflows:
- **Reduced Menu Diving:** Streamlined interface design
- **Quick Sound Creation:** Fast access to quality sounds
- **Pattern Integration:** Built-in rhythmic tools
- **Effect Processing:** Integrated effects for convenience
- **Template Development:** Basis for project templates
- **Collaboration:** Common tool for shared projects

### Creative Innovation
PoiZone fostered creative approaches:
- **Sound Design Exploration:** Encouraged experimentation
- **Rhythmic Complexity:** Enabled complex rhythmic patterns
- **Harmonic Richness:** Provided rich harmonic content
- **Motion Creation:** Built-in movement and evolution
- **Genre Fusion:** Facilitated cross-genre experimentation
- **Expressive Control:** Enabled nuanced expression

---

## 🎧 Genre-Specific Applications

### Trance Production
For trance music, PoiZone excels at:
- **Anthem Leads:** Creating euphoric, uplifting leads
- **Supersaw Construction:** Thick, chorused sawtooth sounds
- **Rhythmic Gating:** Creating pulsating rhythmic effects
- **Arpeggiated Sequences:** Fast, melodic arpeggios
- **Filter Sweeps:** Dynamic harmonic movement
- **Energy Building:** Creating tension and release

### House Music
In house production, PoiZone works well for:
- **Bass Lines:** Deep, driving bass sounds
- **Stab Sounds:** Sharp, rhythmic stabs
- **Percussive Elements:** Creating rhythmic interest
- **Filter Effects:** Dynamic filter-based sounds
- **Arpeggiated Hooks:** Catchy melodic sequences
- **Atmospheric Pads:** Ambient background elements

### Techno Applications
For techno production:
- **Industrial Sounds:** Harsh, mechanical textures
- **Minimal Leads:** Simple but effective melodic lines
- **Rhythmic Elements:** Driving, repetitive patterns
- **Dark Atmospheres:** Mysterious, brooding textures
- **Bass Frequencies:** Powerful low-end content
- **Filtered Effects:** Dynamic harmonic processing

### Ambient/Ethereal Music
In ambient contexts:
- **Pad Construction:** Evolving, atmospheric textures
- **Drone Creation:** Long, sustained harmonic content
- **Spatial Design:** Wide, immersive soundscapes
- **Evolution Techniques:** Gradual harmonic changes
- **Textural Complexity:** Layered harmonic content
- **Emotional Expression:** Conveying feeling through sound

---

## 🎚️ Workflow Optimization

### Pre-Composition Setup
Before starting a project with PoiZone:
- **Template Preparation:** Create templates with common settings
- **Sound Libraries:** Organize patches by function and genre
- **Parameter Maps:** Set up frequently used parameter mappings
- **Pattern Collections:** Prepare useful arpeggio and gate patterns
- **Effect Chains:** Develop go-to effect combinations
- **Reference Sounds:** Gather inspiration sounds for comparison

### During Composition
While creating music with PoiZone:
- **Sound Selection:** Choose appropriate patches for musical context
- **Parameter Adjustment:** Fine-tune sounds to fit the mix
- **Pattern Programming:** Create rhythmic and melodic patterns
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

### Supersaw Construction
Creating the classic supersaw sound:
- **Oscillator Setup:** Two sawtooth oscillators
- **Unison Application:** 4 voices with moderate detune
- **Stereo Spread:** Maximum stereo width
- **Filter Configuration:** Low-pass with moderate resonance
- **Envelope Shaping:** Medium attack and release
- **Effects Processing:** Light chorus and delay

### Trance Gate Programming
Advanced trance gate techniques:
- **Pattern Complexity:** Combining multiple rhythmic elements
- **Smooth Control:** Managing transition artifacts
- **Filter Interaction:** Combining with filter automation
- **Effect Integration:** Adding processing to gated sections
- **Dynamic Variation:** Changing patterns over time
- **Sync Considerations:** Ensuring tempo alignment

### Arpeggiator Sequences
Creating compelling arpeggios:
- **Melodic Direction:** Choosing appropriate directions
- **Rhythmic Variation:** Adding interest to patterns
- **Harmonic Context:** Fitting arpeggios to chord progressions
- **Dynamic Expression:** Adding velocity variation
- **Register Consideration:** Choosing appropriate octaves
- **Pattern Evolution:** Developing patterns over time

---

## 📋 Troubleshooting Checklist

### Common Sound Issues
- [ ] Check oscillator waveforms and tuning
- [ ] Verify filter settings and envelope amounts
- [ ] Confirm unison settings for thickness
- [ ] Adjust effects levels appropriately
- [ ] Check for clipping or distortion
- [ ] Verify stereo imaging settings

### Arpeggiator Problems
- [ ] Ensure keys are held for arpeggio to function
- [ ] Check arpeggiator enable/disable status
- [ ] Verify rate and range settings
- [ ] Confirm direction and mode settings
- [ ] Check for stuck notes preventing arpeggio
- [ ] Verify MIDI input if using external control

### Trance Gate Issues
- [ ] Verify gate is enabled and audible
- [ ] Check step pattern programming
- [ ] Confirm tempo sync settings
- [ ] Adjust smooth control if needed
- [ ] Verify input signal level
- [ ] Check for conflicting effects processing

### Performance Problems
- [ ] Reduce polyphony if CPU is overloaded
- [ ] Disable unused effects for efficiency
- [ ] Lower unison voice count if needed
- [ ] Check for excessive automation data
- [ ] Verify system resources are adequate
- [ ] Update FL Studio if using old version

---

## 🎼 Integration Workflows

### DAW Integration
Working with PoiZone in FL Studio:
- **Channel Rack:** Proper placement and routing
- **Playlist:** Effective arrangement techniques
- **Mixer:** Appropriate insert and send usage
- **Automation:** Parameter automation strategies
- **Piano Roll:** MIDI editing for PoiZone
- **Browser:** Efficient patch management

### Plugin Combination
Using PoiZone with other plugins:
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
PoiZone maintains high synthesis quality:
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
- **Unison Processing:** Phase-coherent voice generation
- **Arpeggiator Timing:** Sample-accurate timing
- **Trance Gate Quality:** Clean gating without artifacts
- **Modulation Quality:** Smooth, artifact-free modulation

---

## 📊 Performance Metrics

### System Performance
PoiZone operates efficiently:
- **CPU Usage:** Low to moderate depending on settings
- **Memory Usage:** Minimal memory footprint
- **Polyphony:** Up to 32 voices available
- **Unison Load:** Additional CPU with more voices
- **Effects Processing:** Variable load based on settings
- **Real-time Performance:** Consistent performance under load

### Audio Performance
Audio quality remains high:
- **THD+N:** Low distortion across frequency range
- **SNR:** High signal-to-noise ratio
- **Stereo Separation:** Excellent stereo isolation
- **Frequency Response:** Full range from 20Hz to 20kHz
- **Dynamic Range:** Full 16-bit dynamic range
- **Latency:** Minimal processing latency

---

## 🎚️ Control Surface Integration

### MIDI Mapping
PoiZone supports comprehensive MIDI mapping:
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
- **Solo Capability:** Isolate PoiZone sounds
- **EQ Interaction:** Monitor how sounds interact
- **Dynamic Competition:** Check for masking
- **Spatial Placement:** Verify stereo positioning
- **Frequency Balance:** Ensure appropriate frequency content
- **Level Integration:** Confirm appropriate loudness

---

## 📅 Timeline of PoiZone Development

### Key Milestones
- **Early Development:** Initial concept and design
- **Feature Implementation:** Core synthesis features
- **Interface Design:** User-friendly interface creation
- **Effect Integration:** Built-in effects implementation
- **Arpeggiator Addition:** Pattern-based note generation
- **Trance Gate Introduction:** Rhythmic gating functionality
- **Unison Enhancement:** Multi-voice unison implementation
- **Filter Improvements:** Enhanced filter capabilities
- **Performance Optimization:** Efficiency improvements
- **Modern Updates:** Contemporary feature additions

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a "Anthem" Trance lead in under 1 minute
- [ ] Program a rhythmic gate that syncs perfectly with a drum beat
- [ ] Explain the difference between Unison Detune and Osc Detune
- [ ] Design a supersaw lead with appropriate thickness and clarity
- [ ] Program complex arpeggios with varied rhythmic patterns
- [ ] Create bass sounds with appropriate low-end presence
- [ ] Apply effects processing that enhances rather than masks the sound
- [ ] Troubleshoot common PoiZone issues efficiently
- [ ] Integrate PoiZone sounds effectively into a mix
- [ ] Develop custom presets that meet professional standards
- [ ] Optimize performance for CPU-efficient operation
- [ ] Create genre-appropriate sounds for multiple musical styles
- [ ] Program expressive arpeggios that enhance musical expression
- [ ] Apply advanced filter techniques for distinctive sounds
- [ ] Use the trance gate creatively for rhythmic interest

---

**Version:** 1.0
**Last Updated:** 2026-01-31
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What Is PoiZone?

> **The "Remove All Friction" Synth.**
> PoiZone is a Subtractive Synthesizer designed for producers who want "That" electronic sound without menu diving. It is built on a "What You See Is What You Get" philosophy—no hidden tabs, no modulation matrix pages. Just pure, immediate control.

## 🧠 The 60-Second Mental Model
Think of PoiZone as a **Eurodance Machine**.
*   **Oscillators:** Simple Saw/Pulse waves (The bread and butter of EDM).
*   **Unison:** A "Thickener" button that instantly turns one voice into four.
*   **Trance Gate:** A built-in "Stutter" effect that chops chords into rhythms.

It doesn't do "complex" (like Sytrus), but it does "Big & Wide" better than almost anything for the CPU cost.

## 📋 When To Use It
| Use Case | ✅ YES (PoiZone) | ❌ NO (Use Sytrus/Harmor) |
| :--- | :--- | :--- |
| **SuperSaws** | Creating the classic "Anthem" Trance lead. | Realistic Piano or Orchestral emulation. |
| **Simple Bass** | Rolling, driving 1/8th note basslines. | Dubstep growls with complex LFOs. |
| **Gated Pads** | Rhythmic background textures that sync to tempo. | Precise additive resynthesis. |

## 🎧 Context: Hip-Hop & R&B
While famous for Trance, PoiZone is a secret weapon for:
1.  **Virtual Rage / Hyperpop:** The "SuperSaw" leads are perfect for Playboi Carti / Yeat type beats.
2.  **West Coast Bass:** The Pulse wave + Low Pass Filter creates the classic P-Funk buzz.
3.  **Arps:** Use the Trance Gate to create hi-hat-like rhythmic textures from white noise.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map & Signal Flow

[SRC: IL-MAN]

## 🗺️ The Interface Tour

PoiZone is a single-screen synth. No tabs.

### 1. The Source (Oscillators) - Top Left
*   **Osc 1 & 2:** Blends between Saw and Pulse.
*   **Detune:** Controls the pitch offset of Osc 2 (Classic "beating" effect).
*   **Grid:** The Octave/Semitone tuning matrix.

### 2. The Shaper (Filter & Envelopes) - Center
*   **Cutoff/Res:** The standard subtractive filter controls.
*   **Envelope One:** Hardwired to Amp (Volume).
*   **Envelope Two:** Hardwired to Filter (Tone).
*   *Note:* The "Envelope Amount" knob decides how much Env 2 affects the Cutoff.

### 3. The Thickener (Effects) - Bottom
*   **Unison:** The "Big" button. Adds 3 voices per note. Pan and Detune knobs control width.
*   **Trance Gate:** The 16-step grid. Click steps to mute/unmute the sound rhythmically.
*   **Arpeggiator:** Standard Up/Down/Random patterns.

## 🚦 Internal Signal Flow

1.  **Oscillators** (Saw/Pulse) -> **Mixer**.
2.  **Filter** (LP/BP/HP) -> **Amp** (Volume).
3.  **Unison Engine** (Multiplies output).
4.  **Effects** (Chorus -> Delay -> Reverb).
5.  **Trance Gate** (Chops the final audio).

## ⚠️ Common Misunderstandings
*   **"Where is simple Sine wave?"**
    *   *Fact:* PoiZone doesn't have a dedicated Sine wave. Use the **Triangle** (Knob fully left on wave selector) or Filter a Pulse wave heavily. It's meant for rich harmonics, not clean tones.
*   **"The Release tail is getting chopped."**
    *   *Fact:* The **Trance Gate** is at the *end* of the chain (usually). It chops everything, including reverb tails. If you want reverb *after* the gate, use an external mixer reverb.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques & Best Practices

## 💎 The Golden Techniques

### 1. The "SuperSaw" Formula
*   **Context:** The defining sound of EDM and Hyperpop.
*   **Move:**
    1.  Osc 1: Saw. Osc 2: Saw.
    2.  Osc 2 Detune: +10 cents.
    3.  **Unison:** ON. Voices: 4 (Max).
    4.  **Unison Detune:** 50% (The "Swarm").
    5.  **Unison Pan:** 100% (Maximum Width).
*   **Result:** A wall of sound.

### 2. The "Pulse Width" Bass
*   **Context:** Retro/Synthwave bass.
*   **Move:**
    1.  Osc 1: Pulse (Square).
    2.  LFO: Target **PWM** (Pulse Width Modulation).
    3.  Speed: Slow.
*   **Result:** The bass tone "breathes" or "morphs" without changing pitch.

### 3. The "Gated Noise" Hat
*   **Context:** Adding high-end rhythm without writing MIDI.
*   **Move:**
    1.  Osc 1: **Noise** (Wait, PoiZone has noise generator mix knob).
    2.  **Trance Gate:** ON. Draw a 1/16th note pattern.
    3.  **Filter:** High Pass.
    4.  Hold one note.
*   **Result:** Instant complex hi-hat loops.

## 👂 What to Listen For
*   **Phase Cancellation:** When layering Saw waves (Osc 1, Osc 2, Unison), sometimes the bass disappears because the waves cancel out.
    *   *Fix:* Use **Unison Pan** to separate them, or keep the Bass mono and only widen the Highs (using external EQ).
*   **Clicking Gate:** If the Trance Gate sounds like a machine gun (clicks).
    *   *Fix:* Turn up the **Smooth** knob in the Gate section. This softens the attack/release of the chop.

## 🛑 Common Pitfalls
1.  **Forgetting Keyboard Tracking:** The **Kbd Trk** knob on the filter. If it's OFF, low notes sound bright and high notes sound dull. If it's ON (100%), the brightness follows the pitch.
2.  **Overusing Chorus:** PoiZone has a luscious chorus. It's tempting to use it on everything. Don't use it on Sub Bass. It destroys the solid low end.

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: PoiZone

How to tune the "Vibe".

## 🌑 Moody (Dark Wave / Trap)
*   **The Goal:** Joy Division / Suicideboys synth.
*   **The Levers:**
    1.  **Osc:** Sawtooth.
    2.  **Filter:** Low Pass, Resonance at 0%.
    3.  **Detune:** High (creates an unstable, scary feel).
    4.  **Reverb:** High Mix, Dark Color.

## ☀️ Upbeat (Eurodance / Hyperpop)
*   **The Goal:** Shiny, abrasive, energetic.
*   **The Levers:**
    1.  **Osc:** Pulse + Saw.
    2.  **Filter:** High Pass (removes mud).
    3.  **Unison:** Max Pan.
    4.  **Arp:** UP mode, Range 2 Oct.

## 🍄 Psychedelic (Trance)
*   **The Goal:** Rolling, hypnotic basslines.
*   **The Levers:**
    1.  **Gate:** ON. Pattern: `X-X-X-XX`.
    2.  **Delay:** Ping Pong.
    3.  **Filter:** Band Pass with LFO modulation.

## 🎷 Jazzy (Keys)
*   **The Goal:** Fake electric piano.
*   **The Levers:**
    1.  **Osc:** Pulse (Width 50%).
    2.  **Env:** Fast Attack, Medium Decay, Zero Sustain.
    3.  **Modulation:** LFO -> Pitch (Vibrato) controlled by Mod Wheel.

## 🌊 Vibey (Lo-Fi)
*   **The Goal:** Boards of Canada drift.
*   **The Levers:**
    1.  **Pitch:** LFO -> Detune (Slow rate).
    2.  **Filter:** Low Pass 24dB.
    3.  **Noise:** Add a tiny bit of white noise Osc.

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: 5 Minutes to Main Stage

1.  **Init:** Click the **Triangle (🔽)** -> Presets -> Default.
2.  **Osc:** Set Knob to **SAW**.
3.  **Unison:** Click the **UNISON** button (Bottom right).
4.  **Width:** Turn **Unison Pan** to 100%. Turn **Unison Detune** to 25%.
5.  **Filter:** Turn **Cutoff** to 100% (Open).
6.  **Envelope:** Turn **Attack** to 0 (Instant). Turn **Release** to 40% (Tail).
7.  **Play:** You now have the universal "SuperSaw" patch used in 90% of electronic music.

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes & Fixes

| Mistake | Symptom | The Fix |
| :--- | :--- | :--- |
| **Thin Leads** | "It sounds weak." | Enable **Unison**. PoiZone sounds like a toy in Mono, but a monster in Unison. |
| **Clicking Gate** | "The rhythm track clicks." | Turn up the **Smooth** knob in the Trance Gate section. |
| **Muddy Mix** | "It's taking up too much room." | The **Chorus** is on by default in many presets. Turn it OFF to clean up the sound. |
| **Wrong Pitch** | "It's out of tune." | Check the **Trans (Transpose)** knob in Oscillator section. Ensure it's at 0 semitones. |

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings Starting Points

## 1. The "Yeat" Bell
*   **Osc:** Pulse.
*   **Filter:** LP.
*   **Env:** Short Decay, No Sustain.
*   **FX:** High Reverb.

## 2. The "Mike Dean" Bass
*   **Osc:** Saw.
*   **Filter:** LP with High Resonance.
*   **Mode:** Mono.
*   **Glide:** 50ms (Portamento).
*   **Unison:** OFF (Keep bass mono).

## 3. The "Avicii" Pluck
*   **Osc:** Saw.
*   **Filter Env:** Short Decay.
*   **Env Amount:** +50% (The envelope snaps the filter open and closed).
*   **Delay:** Ping Pong.

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Settings: MOODY (Horror)

**Target:** John Carpenter style.

## The Recipe
1.  **Osc:** Pulse.
2.  **PWM:** LFO modulating Pulse Width (Slow brightness shift).
3.  **Filter:** High Pass. Remove the body, leave the fizz.
4.  **Arp:** Random Mode. Range 3 Oct.
5.  **Result:** Unpredictable, thin, eerie sequences.

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Settings: Upbeat / Psych / Jazzy

## ☀️ UPBEAT (Future Bass)
*   **Osc:** Saw + Saw.
*   **Unison:** 4 Voices.
*   **Env:** Long Release.
*   **Play:** Stack 7th chords.
*   **LFO:** Modulating Volume (Sidechain sim).

## 🍄 PSYCHEDELIC (Vocal Formant)
*   **Filter:** BP (Band Pass).
*   **Resonance:** Max.
*   **Cutoff:** Modulated by LFO.
*   **Result:** The high resonance creates a "Wah-Wah" vocal effect.

## 🎷 JAZZY (Soft Lead)
*   **Osc:** Triangle/Sine (Filter Pulse).
*   **Glide:** ON.
*   **Env:** Slow Attack (Violin-like).
*   **Delay:** OFF.
*   **Reverb:** OFF (Dry and intimate).

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# PoiZone Parameter Dictionary

| Parameter | Type | Range | Description | Vibe Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Cutoff** | Knob | Hz | Filter frequency. | **CRITICAL** (Brightness) |
| **Res** | Knob | 0-100 | Filter peak/self-oscillation. | **High** (Squidge/Acid) |
| **Pulse Width** | Knob | 0-100 | Thickness of Pulse wave. | **High** (Nasal vs Hollow) |
| **Unison Detune** | Knob | 0-100 | Pitch variance of clones. | **CRITICAL** (SuperSaw effect) |
| **Trance Gate** | Grid | 16-step | Pattern sequencer for volume. | **High** (Rhythm) |
| **Smooth** | Knob | 0-100 | Gate fade time. | **Medium** (Click vs Swell) |

```

---

## FILE: 02-Data\presets\00_Workflow_Preset_Strategy.md

```markdown
# Workflow & Preset Strategy: PoiZone

## 💾 The "Genre" Strategy
Because PoiZone is so specifically tuned for certain sounds, save presets by **Function**:

### 1. `Bass_Rolling`
*   Pulse wave, LP Filter, Mono mode. Ready for any driving bassline.

### 2. `Lead_Anthem`
*   SuperSaw, Unison 4, Reverb + Delay. Instant mainstage energy.

### 3. `Pad_Gated`
*   Saw waves, Trance Gate active. Just hold a chord to get rhythm.

## 📂 Taxonomy
*   `User/PoiZone/Leads/Energy`
*   `User/PoiZone/Bass/Analog`
*   `User/PoiZone/FX/Risers`

```

---

## FILE: 02-Data\rules\00_Do_Dont_Rules.md

```markdown
# Operational Rules: Do's and Don'ts

| Action | Verdict | Reason |
| :--- | :--- | :--- |
| **Max Unison on Bass** | 🛑 **STOP** | Wide stereo bass causes phase cancellation in mono soundsystems (Clubs). Keep Bass Mono. |
| **Trance Gate on Leads** | ✅ **DO** | Use the Trance Gate on a lead sound to create a "Chopped" effect without needing sidechain compression. |
| **Filter Resonance > 90%** | ⚠️ **CAUTION** | The filter creates a very loud sine wave (Self-Oscillation) at high resonance. Watch your ears/speakers. |
| **Velocity Mapping** | ✅ **DO** | Map Velocity to Filter Cutoff (in the Mod Matrix or Link to Controller) to make the synth expressive. |

```

---

## FILE: 02-Data\rules\01_Troubleshooting_Matrix.md

```markdown
# Troubleshooting Matrix

| Symptom | Probable Cause | The Fix |
| :--- | :--- | :--- |
| **"Sound is pulsing/moving"** | PWM or Phasing. | Check if LFO is modulating Pulse Width, or if two detuned oscillators are canceling each other out (Beating). |
| **"Rhythm is off beat"** | Trance Gate steps. | The Trance Gate grid is 16 steps (1 bar). Ensure you are playing on the "1" count. |
| **"Reverb cuts off abruptly"** | Gate position. | The Gate chops the *output*. Disable internal Reverb/Delay and use external FX if you want tails *after* the chop. |
| **"Arp not playing"** | Sync settings. | Ensure FL Studio is playing or the Wrapper settings are correct. |

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B

## 1. The "West Coast" Whine
*   **Rule:** High Glide.
*   **Implementation:** Use a single Saw wave. Set **Glide** (Portamento) to a long time. Play high octaves. This creates the G-Funk whine.

## 2. The "Rage" Chord
*   **Rule:** Full frequency spectrum.
*   **Implementation:** Use SuperSaw chords (Root, 5th, Octave). The detuned saw waves fill every frequency, creating infinite energy (Yeat/Playboi Carti).

## 3. The "Sub" Layer
*   **Rule:** Clean low end.
*   **Implementation:** PoiZone's Filter is great for removing fizz. Take a Saw wave, Low Pass it down to 100Hz. You have a warm, analog-style sub.

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Workflow: Making a SuperSaw

**Goal:** The Big Room Sound.

1.  **Osc:** Select **Saw** on both Osc 1 and 2.
2.  **Unison:** Enable it.
3.  **Pan:** 100% (Wide).
4.  **Detune:** ~35%.
5.  **Filter:** LP, Cutoff Open.
6.  **Eq:** In Mixer, boost Highs (Air).
7.  **Result:** Massive stereo width.

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Sound_Design.md

```markdown
# Workflow: Rhythmic Gating

**Goal:** Turning a chord into a beat.

1.  **Patch:** Load a Pad preset.
2.  **Gate:** Enable **Trance Gate**.
3.  **Draw:** Click the steps. `X---X---X-X-X---`.
4.  **Smooth:** Adjust knob until clicks disappear.
5.  **Mix:** Adjust the **Mix** knob. 50% wet lets the pad sustain underneath the rhythmic chop.

```

---

## FILE: 03-Workflows\by-goal\02_Goal_Mix_Or_Control.md

```markdown
# Workflow: Arp Layering

**Goal:** Adding "Sparkle" to a main melody.

1.  **Clone:** Clone your main lead MIDI to PoiZone.
2.  **Patch:** Select a Pluck sound (Short decay).
3.  **Arp:** Enable Arpeggiator. **Range:** 2 Octaves. **Mode:** Random.
4.  **Mix:** Lower volume to -18dB.
5.  **Result:** Your main melody stays strong, but PoiZone adds a "sparkly" texture dancing around it.

```

---

## FILE: 03-Workflows\by-goal\10_Vibe_Moody.md

```markdown
# Vibe Workflow: MOODY (Witch House)

**Context:** Distorted, slow, creepy.

1.  **Osc:** Saw. Detune +7 Semitones (Perfect 5th).
2.  **Filter:** LP.
3.  **Distortion:** Add Fruity Fast Dist (Post-Processing).
4.  **Reverb:** Huge decay.
5.  **Result:** A wall of dissonant noise that sounds huge.

```

---

## FILE: 03-Workflows\by-goal\11_Vibe_Upbeat.md

```markdown
# Vibe Workflow: UPBEAT (Happy Hardcore)

**Context:** Fast tempo energy.

1.  **Osc:** Saw.
2.  **Arp:** UP mode. Speed 1/8.
3.  **Delay:** 3/4 time.
4.  **Play:** Simple Triads.
5.  **Result:** The classic spiraling arpeggio sound.

```

---

## FILE: 03-Workflows\by-goal\12_Vibe_Psychedelic.md

```markdown
# Vibe Workflow: PSYCHEDELIC (Morphing)

**Context:** Trippy intro.

1.  **Osc:** Pulse.
2.  **LFO:** Target **Filter Cutoff**. Speed Slow.
3.  **Mod Wheel:** Link to LFO Speed.
4.  **Play:** Hold a chord and slowly move Mod Wheel. The wobble speeds up and slows down.

```

---

## FILE: 03-Workflows\by-goal\13_Vibe_Jazzy.md

```markdown
# Vibe Workflow: JAZZY (E-Piano)

**Context:** Neo-Soul chords.

1.  **Osc:** Triangle.
2.  **Env:** Soft Attack (Not instant).
3.  **Chorus:** ON.
4.  **Tremolo:** LFO -> Amp (Volume) at fast speed.
5.  **Result:** A Wurlitzer-style tone.

```

---

## FILE: 03-Workflows\by-goal\14_Vibe_Vibey.md

```markdown
# Vibe Workflow: VIBEY (Tape Pad)

**Context:** Lo-Fi background.

1.  **Osc:** Pulse.
2.  **Filter:** Low Pass.
3.  **Detune:** Manually automate the "Fine Tune" master pitch knob to wobble slowly.
4.  **Result:** Nostalgic, unstable analog warmth.

```

---

## FILE: 03-Workflows\by-instrument\Leads_Pads_Bass.md

```markdown
# Workflow: Instrument Recipes

## 1. Leads (The "Hook")
*   **Osc:** Saw + Pulse.
*   **Glide:** ON.
*   **Delay:** Ping Pong.

## 2. Bass (The "Drive")
*   **Osc:** Saw.
*   **Filter:** LP, Res 20%.
*   **Env:** Short Decay.
*   **Mode:** Mono.

## 3. Pads (The "Wash")
*   **Osc:** Saw.
*   **Unison:** 4 Voices.
*   **Attack:** Slow (1-2 seconds).
*   **Release:** Long.

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log

| ID | Source Name | Type | Key Information Derived |
| :--- | :--- | :--- | :--- |
| **IL-MAN** | Image-Line Official Manual | Primary | Trance Gate routing signal flow, Unison voice count. |
| **EDM-PROD** | Genre Analysis | Empirical | SuperSaw stack technique, Arp patterns for Uplifting Trance. |

```

---

## FILE: 04-Reference\01_Official_Links.md

```markdown
# Official Links

*   **Plugin Manual:** [Image-Line PoiZone](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/PoiZone.htm)

```

---

## FILE: 04-Reference\02_Coverage_Checklist.md

```markdown
# Coverage Checklist

## Learning
- [x] Mental Model (Eurodance Machine)
- [x] UI Map (Osc, Shaper, Thickener)
- [x] Core Techniques (SuperSaw, PWM Bass)
- [x] Vibe Translation (5 Vibes Mapped)

## Data
- [x] Parameters (Cutoff, Trans)
- [x] Rules (Max Unison Caution)

## Workflows
- [x] Quick SuperSaw
- [x] Trance Gate Pads
- [x] Arp Layering
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
# Genre Style Board: Electronic

How PoiZone defines the sound of modern genres.

## 1. The "2000s Trance" Anthem
*   **Signature:** Euphoric, wide, detuned.
*   **Recipe:** SuperSaw (Unison 4) + Ping Pong Delay + Arp 1/16th.

## 2. The "Hyperpop" Rage
*   **Signature:** Abrasive, buzzing, full-spectrum.
*   **Recipe:** Saw Wave (No Filter) + Distortion. The raw sawtooth cuts through 808s perfectly.

## 3. The "Synthwave" Bass
*   **Signature:** Rolling, driving, neon.
*   **Recipe:** Pulse Wave + LP Filter + 1/8th Note Arp (Down Mode).

## 4. The "Eurodance" Stab
*   **Signature:** Sharp, cheesy, punchy.
*   **Recipe:** Saw Wave + Fast Filter Envelope (Pluck) + Reverb.

```

---

