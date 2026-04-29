# Harmor - The Additive King

```
██╗  ██╗ █████╗ ██████╗ ███╗   ███╗ ██████╗ ██████╗
██║  ██║██╔══██╗██╔══██╗████╗ ████║██╔═══██╗██╔══██╗
███████║███████║██████╔╝██╔████╔██║██║   ██║██████╔╝
██╔══██║██╔══██║██╔══██╗██║╚██╔╝██║██║   ██║██╔══██╗
██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║╚██████╔╝██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝
```

**Plugin Type:** Additive Synthesis / Resynthesizer / Image-to-Sound
**Category:** Generator / Advanced Synthesis / Master Tool
**Official Manual:** [Image-Line Harmor Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Harmor.htm)

---

## 🎯 What is Harmor?

Harmor is quite possibly the most powerful synthesizer ever created for a DAW. It is a **True Additive Synthesizer** that can generate up to 516 sine-wave partials per note. It is famous for its **Audio Resynthesis** (drag-and-drop any sample to turn it into editable data) and **Image Synthesis** (turning pictures into sound). Harmor breaks the boundaries of traditional sound design, offering "Sampler-quality" audio manipulation with the flexibility of a modular synth.

**Key Capabilities:**
- **516 Partials per Voice:** High-resolution additive generation.
- **Audio Resynthesis:** Lossless manipulation of imported audio files.
- **Image Resynthesis:** Synthesize sound directly from PNG/BMP files.
- **Dual Engine Architecture:** Two independent additive engines (A & B) for layering.
- **Unique Processing Units:** Prism, Pluck, Blur, Strum, and specialized Phasers.
- **Custom Filter Shapes:** Draw your own frequency response curves by hand.
- **Advanced Modulation:** Multi-part articulation envelopes for every parameter.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **resynthesis-vs-sampling.md**
3. Create **parameter-cheat-sheet.md**
4. Drag a vocal sample into the "IMG" or "ADV" tab and hear it play back perfectly as additive data.

### For Sound Designers:
1. Study **image-synthesis-art.md** (Sound from pictures)
2. Review **blur-and-prism-textures.md**
3. Learn **resynthesizing-vocals-for-manipulation.md**

### For Power Users:
1. Study **custom-filter-and-phaser-curves.md**
2. Review **additive-unison-phasing.md**
3. Learn **automation-of-spectral-data.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Osc/Timbre:** Shape and Partials.
  - **Filters:** Type, Cutoff, Resonance, and Custom Graph.
  - **Prism:** Frequency shifting/warping.
  - **Blur:** Temporal smearing.
  - **Pluck:** Physical decay model.
  - **IMG/ADV:** Resynthesis controls.

- [ ] **harmor-signal-flow.md**
  - Additive Generator -> Prism -> Filter -> Phaser -> Blur -> Effects.

#### 02-Data/parameters/
- [ ] **harmor-specs.json**
  ```json
  {
    "plugin_name": "Harmor",
    "partials": 516,
    "layers": 2,
    "synthesis": ["Additive", "Audio Resynthesis", "Image Synthesis"]
  }
  ```

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **audio-time-stretching-lossless.md**
  - Importing a vocal.
  - Using the "Speed" or "Time" knob to freeze or stretch without any pitch shifting or "grainy" artifacts.

- [ ] **image-to-sound-soundscapes.md**
  - Dragging a photo of a forest into the IMG tab.
  - Adjusting the "Frequency" mapping.
  - Result: Ethereal, organic textures derived from visual data.

- [ ] **the-harmonic-prism-growl.md**
  - Using the Prism knob to warp harmonics.
  - Automating the prism amount for "Transformer" style movement.

#### 03-Workflows/by-context/
- [ ] **cinematic-riser-design.md**
- [ ] **robotic-vocal-tuning.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **resynthesis-algorithm-depth.md**
  - How Harmor handles Phase and Amplitude data during import.

---

## 🔬 Research Framework

### Phase 1: Additive Basics (Week 1)
**Goal:** Pure Synthesis

**Tasks:**
1. Build a Square wave manually using partials
2. Test the "Prism" effect on a simple lead
3. Use the "Blur" effect to turn a pluck into a pad
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- What is the difference between "Sub" and "Main" Timbre?
- How do I draw a custom Filter curve?

### Phase 2: Resynthesis (Week 2)
**Goal:** Manipulating Reality

**Tasks:**
1. Import a drum loop
2. Slow it down to 10% speed
3. Use the "Pluck" fader to shorten the drums
4. Create audio-time-stretching-lossless.md

---

## 📊 Plugin Specifications to Document

### Engine
- Polyphony (User definable)
- FFT Window Size (if applicable)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the sound silent after I dragged an image? (Check the "IMG" level and frequency scale).
2. How to mix Engine A and Engine B? (Use the A/B fader in the Main tab).

### Advanced Usage
1. How to use Harmor as a "Spectral Filter" for external audio? (Using the "Audio Input" feature in Patcher).

---

## 🔗 Cross-Reference with Other Plugins

Harmor is often used with:
- **Harmless** (The simplified version)
- **Morphine** (The additive counterpart)

---

## 📦 File Structure Summary

```
Harmor/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── harmor-signal-flow.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── harmor-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── audio-time-stretching-lossless.md
│   │   └── image-to-sound-soundscapes.md
│
└── 04-Reference/
    └── resynthesis-algorithm-depth.md
```

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Harmor Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Harmor.htm)
- [Harmor Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Harmor_tutorials.htm)
- [Harmor Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+harmor+tutorial)

### Community Resources
- [Harmor Subreddit](https://www.reddit.com/r/FL_Studio/search?q=harmor&restrict_sr=1)
- [Harmor User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Harmor Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for spectral analysis of Harmor outputs
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Limiter** for monitoring harmonic content
- **Patcher** for external audio input routing

### Recommended Learning Materials
- "Additive Synthesis Explained" - Understanding the fundamentals behind Harmor's technology
- "Audio Resynthesis Techniques" - Deep dive into converting samples to additive data
- "Image Synthesis Guide" - Creating sounds from visual data

### Advanced Techniques
- **Spectral Morphing:** Using Harmor to blend two different sounds at the harmonic level
- **Vocal Resynthesis:** Converting vocal recordings into manipulable additive data
- **Algorithmic Composition:** Using Harmor's modulation capabilities for procedural sound generation

---

## 🧪 Experimental Techniques

### Advanced Additive Applications
Creative uses of Harmor's additive synthesis capabilities:

**Spectral Manipulation:**
- **Harmonic Isolation:** Isolating and manipulating specific harmonics
  - Use the partial editor to select specific harmonics
  - Adjust individual harmonic amplitudes and frequencies
  - Perfect for surgical harmonic manipulation
  - Essential for advanced additive synthesis
  - Useful for creating unique harmonic structures

**Phase Relationships:**
- **Phase Control:** Manipulating harmonic phase relationships
  - Adjust phase of individual harmonics
  - Create evolving phase relationships
  - Perfect for evolving textures
  - Essential for advanced additive synthesis
  - Useful for creating unique timbres

**Spectral Morphing:**
- **Cross-Synthesis:** Morphing between different spectral content
  - Load two different samples in Engines A and B
  - Crossfade between spectral content
  - Perfect for evolving textures
  - Essential for spectral cross-synthesis
  - Useful for creating hybrid sounds

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Spectral Automation:** Automating spectral parameters for evolving effects
  - Create evolving spectral characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic spectral expression
  - Use for expressive spectral control

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

### Additive Synthesis Workflows
Efficient approaches to using Harmor for additive synthesis:

**Manual Harmonic Design:**
- **Harmonic Building:** Creating sounds from individual harmonics
  - Start with fundamental frequency
  - Add harmonics systematically
  - Essential for additive synthesis mastery
  - Pro tip: Use harmonic series for natural sounds

- **Spectral Shaping:** Shaping harmonic content for specific timbres
  - Adjust harmonic amplitudes for desired timbre
  - Use harmonic relationships for character
  - Essential for spectral design
  - Pro tip: Use for creating specific instrument sounds

**Resynthesis Workflows:**
- **Sample Resynthesis:** Converting samples to additive data
  - Import samples for resynthesis
  - Adjust resynthesis parameters
  - Essential for sample manipulation
  - Pro tip: Use for lossless sample manipulation

- **Vocal Resynthesis:** Converting vocals to additive data
  - Import vocal samples for resynthesis
  - Adjust parameters for vocal characteristics
  - Essential for vocal manipulation
  - Pro tip: Use for robotic vocal effects

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
- **Spectral Bass Design:** Creating bass sounds with precise harmonic control
- **Lead Enhancement:** Creating leads with specific harmonic content
- **Rhythmic Textures:** Creating rhythmic patterns with spectral manipulation
- **Energy Management:** Using additive synthesis for track energy
- **Build-up Effects:** Creating tension with spectral automation

### Hip-Hop and R&B
- **Vocal Processing:** Resynthesizing vocals for manipulation
- **Sample Enhancement:** Manipulating samples with additive control
- **Mix Enhancement:** Using additive synthesis for mix clarity
- **Creative Effects:** Adding unique character to elements
- **Spatial Effects:** Managing spatial characteristics

### Rock and Metal
- **Guitar Enhancement:** Adding synthetic elements to guitar tracks
- **Bass Enhancement:** Creating synthetic bass elements
- **Drum Enhancement:** Adding synthetic elements to drums
- **Mix Enhancement:** Using additive synthesis for mix clarity
- [ ] Create a "Prism Growl" lead using automated harmonic warping
- [ ] Build a 2-layer patch using independent Engines A and B
- [ ] Manually construct a harmonic series to create a specific timbre
- [ ] Use the partial editor to isolate and manipulate specific harmonics
- [ ] Apply spectral morphing between two different audio sources
- [ ] Create evolving textures using phase automation
- [ ] Use the custom filter drawing feature for unique frequency responses
- [ ] Troubleshoot resynthesis artifacts and quality issues effectively
- [ ] Integrate Harmor into efficient additive synthesis workflows
- [ ] Create complex spectral patches with multiple parameters
- [ ] Design custom image-to-sound conversions for unique textures
- [ ] Optimize Harmor settings for minimal CPU usage with high partial count
- [ ] Use Harmor for creative sound design applications beyond traditional synthesis
- [ ] Set up advanced spectral routing for complex projects
- [ ] Apply Harmor in live performance scenarios
- [ ] Create experimental sounds with extreme parameter settings
- [ ] Combine Harmor with other effects for layered processing
- [ ] Integrate Harmor with other automation tools seamlessly
- [ ] Create custom additive synthesis workflows for specific creative needs
- [ ] Use Harmor effectively in large, complex projects
- [ ] Generate complex rhythmic patterns with spectral automation
- [ ] Create hybrid synthesis patches combining additive and other methods
- [ ] Apply Harmor in mastering contexts with appropriate care
- [ ] Create complex multi-stage spectral chains with smooth automation
- [ ] Design custom harmonic structures for specific musical contexts
- [ ] Use Harmor for creative vocal processing applications
- [ ] Apply advanced phase manipulation techniques for texture control
- [ ] Create genre-specific additive presets for efficient workflow
- [ ] Integrate Harmor with external hardware for hybrid processing
- [ ] Use Harmor for audio restoration and creative repair applications
- [ ] Combine Harmor with other spectral processing tools
- [ ] Apply Harmor in surround sound or multi-channel setups
- [ ] Create complex spectral relationships using multiple engines
- [ ] Use Harmor for creative instrumental processing applications
- [ ] Integrate Harmor with other automation tools for complex control
- [ ] Create complex atmospheric textures using multiple parameters
- [ ] Design custom resynthesis algorithms for unique spectral characteristics
- [ ] Apply advanced harmonic control for precise timbre shaping
- [ ] Use Harmor for creative stereo enhancement beyond traditional methods
- [ ] Combine Harmor with convolution for hybrid synthesis approaches
- [ ] Implement advanced envelope shaping for dynamic spectral expression
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use Harmor for creative sound design in film and game audio
- [ ] Apply Harmor in live sound reinforcement scenarios
- [ ] Create experimental synthesis textures using extreme parameter settings
- [ ] Integrate Harmor with external synthesizers for complex sound design
- [ ] Generate complex harmonic structures with precise control
- [ ] Use Harmor for formant synthesis and vowel creation
- [ ] Apply spectral freezing techniques for sustained textures
- [ ] Create evolving spectral animations with automation
- [ ] Design custom additive algorithms for unique harmonic behaviors
- [ ] Implement advanced resynthesis techniques for complex audio
- [ ] Use Harmor for granular synthesis applications
- [ ] Apply phase vocoder techniques within the additive framework
- [ ] Create hybrid resynthesis patches combining multiple approaches
- [ ] Use Harmor for audio forensics and analysis applications
- [ ] Implement spectral filtering techniques for precise frequency control
- [ ] Create custom image synthesis algorithms for visual-to-audio conversion
- [ ] Apply Harmor in scientific and research audio applications
- [ ] Use for therapeutic and sound healing applications
- [ ] Combine with neural networks for AI-assisted sound design

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection