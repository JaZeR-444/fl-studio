# Kepler Exo - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 00-START-HERE.md

```markdown
# Kepler Exo: Start Here

Welcome to **Kepler Exo**, the advanced "pro" evolution of the Kepler engine. While the standard Kepler focuses on JUNO simplicity, Exo adds JUPITER-style complexity with dual oscillators, cross-modulation, and a deep modulation matrix.

## 🗺️ Quick Navigation Guide

### 1. The Essentials (Start Here)
- **[README.md](./README.md):** The central hub for advanced research and engine specs.
- **[01-Learning/Quick-Reference/exo-vs-standard-comparison.md](./01-Learning/Quick-Reference/exo-vs-standard-comparison.md):** Understanding why and when to choose Exo.
- **[01-Learning/Quick-Reference/parameter-cheat-sheet.md](./01-Learning/Quick-Reference/parameter-cheat-sheet.md):** A map of the new DCO2, FM, and Matrix controls.

### 2. Core Concepts
- **[01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md](./01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md):** Navigating the dual-oscillator signal path.
- **[04-Reference/audio-rate-modulation-theory.md](./04-Reference/audio-rate-modulation-theory.md):** The science behind Exo's unique "growl."

### 3. Workflow Recipes
- **[03-Workflows/by-goal/modern-analog-leads.md](./03-Workflows/by-goal/modern-analog-leads.md):** Using Hard Sync for aggressive leads.
- **[03-Workflows/by-goal/evolving-textures-matrix.md](./03-Workflows/by-goal/evolving-textures-matrix.md):** Creating complex, moving pads.
- **[03-Workflows/by-goal/metallic-fm-perc.md](./03-Workflows/by-goal/metallic-fm-perc.md):** Bell-like and glitchy percussion textures.

## 🚀 Rapid Success Protocol
1. **Initialize the Patch.**
2. **Engage DCO 2:** Mix it with DCO 1 for instant thickness.
3. **Turn on Hard Sync:** Automate the DCO 2 Pitch for that classic "tearing" lead sound.
4. **Use the Matrix:** Map LFO 1 to Filter Cutoff for rhythmic movement.
5. **Switch to HQ Filter:** For a smoother, higher-fidelity resonance character.

---
*For technical specs and parameter data, see the [02-Data/](./02-Data/) folder.*

```

---

## FILE: README.md

```markdown
# Kepler Exo - Advanced Analog Synthesis

`\`\`
██╗  ██╗███████╗██████╗ ██╗     ███████╗██████╗     ███████╗██╗  ██╗ ██████╗ 
██║ ██╔╝██╔════╝██╔══██╗██║     ██╔════╝██╔══██╗    ██╔════╝╚██╗██╔╝██╔═══██╗
█████╔╝ █████╗  ██████╔╝██║     █████╗  ██████╔╝    █████╗   ╚███╔╝ ██║   ██║
██╔═██╗ ██╔══╝  ██╔═══╝ ██║     ██╔══╝  ██╔══██╗    ██╔══╝   ██╔██╗ ██║   ██║
██║  ██╗███████╗██║     ███████╗███████╗██║  ██║    ███████╗██╔╝ ██╗╚██████╔╝
╚═╝  ╚═╝╚══════╝╚═╝     ╚══════╝╚══════╝╚═╝  ╚═╝    ╚══════╝╚═╝  ╚═╝ ╚═════╝ 
`\`\`

**Plugin Type:** Advanced Subtractive Synth / JUNO & JUPITER Emulation
**Category:** Generator / Analog / Performance
**Official Manual:** [Image-Line Kepler Exo Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Kepler%20Exo.htm)

---

## 🎯 What is Kepler Exo?

Kepler Exo is the "pro" version of the Kepler synthesizer. While Kepler focuses on the JUNO-6, **Kepler Exo** expands the architecture with inspirations from the **Jupiter-8™** and modern sound design features. It features two DCOs, cross-modulation, Hard Sync, a Modulation Matrix, and high-fidelity effects. It is a powerhouse for users who need vintage analog warmth with modern flexibility.

**Key Capabilities:**
- **Dual DCO Setup:** Two oscillators with sync, detune, and semi-tone offsets.
- **FM & Cross-Modulation:** Creates complex, metallic, and evolving harmonic textures.
- **Modulation Matrix:** Deep routing of LFOs and Envelopes to almost any target.
- **Hard Sync:** Iconic "tearing" sync leads (DCO2 restarts with DCO1).
- **Audio-Rate Modulation:** Modulate the filter frequency using DCO1's output.
- **HQ Filter Mode:** Higher quality 6dB/oct roll-off and resonance behavior.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **exo-vs-standard-comparison.md**
3. Create **parameter-cheat-sheet.md**
4. Enable "Hard Sync" and automate the DCO2 Pitch to hear the classic sync sweep.

### For Sound Designers:
1. Study **complex-fm-textures.md**
2. Review **modulation-matrix-routing.md**
3. Learn **audio-rate-filter-modulation.md**

### For Performers:
1. Study **xy-modulation-offsets.md**
2. Review **performance-arpeggiator-tricks.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **DCO 1 & 2:** Detune, Sync, Waveforms.
  - **Mod Matrix:** Source/Destination slots.
  - **Filter:** VCF, HPF, HQ switch.
  - **FX Rack:** Reverb, Delay, Chorus, Saturation.

- [ ] **exo-vs-standard-comparison.md**
  - Why use Exo? (Dual Oscillators, FM, Matrix).
  - Feature comparison table.

#### 02-Data/parameters/
- [ ] **kepler-exo-params.json**
  `\`\`json
  {
    "plugin_name": "Kepler Exo",
    "category": "Advanced Vintage Synth",
    "features": ["Hard Sync", "FM", "Matrix", "HQ Mode"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **modern-analog-leads.md**
  - Using Hard Sync + Envelope on DCO2 pitch.
  - Adding Saturation and Hyper Chorus.

- [ ] **evolving-textures-matrix.md**
  - Linking LFO 1 to Filter Cutoff.
  - Linking LFO 2 to PWM and DCO2 Level.
  - Creating a movement-heavy ambient pad.

- [ ] **metallic-fm-perc.md**
  - Using high Cross-Modulation values.
  - Short Envelopes on VCA.

#### 03-Workflows/by-context/
- [ ] **hybrid-synth-pop-setup.md**
- [ ] **cinematic-sci-fi-presets.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **audio-rate-modulation-theory.md**
  - How modulating the filter at thousands of times per second creates sidebands.
  - Creating "growl" or "talkbox" effects.

---

## 🔬 Research Framework

### Phase 1: Dual Oscillator Mastery (Week 1)
**Goal:** The Power of Two

**Tasks:**
1. Setup Hard Sync between DCO1 and DCO2
2. Practice FM/Cross-mod tuning
3. Explore the HQ Filter mode
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does the 6dB filter slope sound vs the standard one?
- What are the available sources in the Mod Matrix?

### Phase 2: Modern Modulation (Week 2)
**Goal:** Routing Depth

**Tasks:**
1. Build a patch using 4+ Matrix slots
2. Use X/Y modulation offsets for real-time control
3. Create modulation-matrix-routing.md

---

## 📊 Plugin Specifications to Document

### Engine
- Oscillator Count (2 + Sub + Noise)
- Mod Matrix Slots (Count)
- Filter Slopes (6dB, etc.)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do I get that "tearing" lead sound? (Hard Sync + Pitch Envelope).
2. What is Cross-Mod? (One oscillator modulating the other's frequency or phase).

### Advanced Usage
1. How to use the built-in Saturator for "Aggressive Analog" tones?

---

## 🔗 Cross-Reference with Other Plugins

Kepler Exo is often used with:
- **Hyper Chorus** (Standalone version of its internal effect)
- **Fruity Limiter** (Taming the resonant peaks)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Kepler Exo/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── exo-vs-standard-comparison.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── kepler-exo-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── modern-analog-leads.md
│   │   └── evolving-textures-matrix.md
│
└── 04-Reference/
    └── audio-rate-modulation-theory.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Kepler Exo Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Kepler%20Exo.htm)
- [Kepler Exo Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Kepler_Exo_tutorials.htm)
- [Kepler Exo Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+kepler+exo+tutorial)

### Community Resources
- [Kepler Exo Subreddit](https://www.reddit.com/r/FL_Studio/search?q=kepler+exo&restrict_sr=1)
- [Kepler Exo User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Kepler Exo Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Advanced Analog Synthesis" - Understanding dual oscillator systems
- "FM and Cross-Modulation Techniques" - Creating complex harmonic content
- "Modulation Matrix Mastery" - Deep routing and control techniques

### Advanced Techniques
- **Hard Sync Mastery:** Understanding sync oscillator relationships
- **FM Synthesis:** Implementing frequency modulation in analog emulations
- **Matrix Routing:** Advanced modulation routing strategies

---

## 📚 In-Depth Technical Analysis

### Dual Oscillator Architecture
Kepler Exo implements sophisticated dual oscillator synthesis:
- **Two DCOs:** Digitally Controlled Oscillators with independent controls
- **Sync Capability:** Hard sync between oscillators
- **Cross-Modulation:** One oscillator modulating another
- **Detune Control:** Independent detuning for thickness
- **Semitone Offsets:** Coarse tuning relationships

### Hard Sync Implementation
The hard sync feature creates distinctive sounds:
- **Sync Source:** DCO1 restarts DCO2's waveform
- **Tearing Effect:** Creates characteristic "tearing" sound
- **Harmonic Generation:** Generates rich harmonic content
- **Pitch Relationship:** DCO2 pitch affects harmonic complexity
- **Filter Interaction:** Works synergistically with filter modulation

### FM and Cross-Modulation System
The frequency modulation capabilities include:
- **Audio-Rate Modulation:** High-frequency modulation for metallic tones
- **Harmonic Complexity:** Creates complex, evolving harmonic structures
- **Modulation Depth:** Controls intensity of FM effects
- **Modulation Ratio:** Relationship between carrier and modulator
- **Spectral Evolution:** Creates evolving spectral content

### Modulation Matrix Architecture
The comprehensive matrix system features:
- **Multiple Sources:** LFOs, Envelopes, MIDI CC, Velocity
- **Multiple Destinations:** Almost any parameter can be modulated
- **Bipolar Control:** Positive and negative modulation amounts
- **Real-time Processing:** Immediate response to modulation changes
- **Complex Routing:** Multiple sources to multiple destinations

### Filter Architecture
The advanced filter system includes:
- **HQ Mode:** High-quality filter algorithm with improved resonance
- **6dB/Oct Slope:** Gentle filter rolloff option
- **Resonance Control:** Emphasis at cutoff frequency
- **Key Tracking:** Filter response to keyboard position
- **Envelope Modulation:** Filter cutoff controlled by envelope

### Signal Processing Chain
The internal architecture processes audio as follows:
- **Input Stage:** MIDI note and velocity processing
- **Oscillator Generation:** Dual DCO and sub-oscillator synthesis
- **Oscillator Interaction:** Sync, FM, and cross-modulation processing
- **Filter Processing:** VCF application with resonance
- **Modulation Application:** Matrix-based parameter modulation
- **Effects Processing:** Built-in effects application
- **Output Stage:** Final signal routing and monitoring

### Audio-Rate Modulation
The plugin supports audio-rate modulation:
- **Filter Modulation:** Modulate filter cutoff with audio-rate signals
- **Sideband Generation:** Creates additional harmonic content
- **Growl Effects:** Creates "talkbox" or "growl" effects
- **Spectral Complexity:** Generates complex harmonic structures
- **Real-time Processing:** Immediate response to audio-rate modulation

## 🎛️ Parameter Deep Dive

### DCO Controls
- **DCO 1 Settings:**
  - **Waveform Selection:** Choose between available waveforms (Saw, Square, etc.)
    - Range: Saw, Square, Pulse, Triangle (varies by implementation)
    - Effect: Changes the harmonic content of the oscillator
    - Use for: Different tonal characteristics
    - Pro tip: Saw provides the classic analog character
  - **Behavior:**
    - Saw: Rich harmonic content, warm tone
    - Square: Odd harmonics only, hollow tone
    - Pulse: Variable duty cycle, hollow tone
    - Pro tip: Use Saw as primary for classic analog sound
  - **Applications:**
    - Classic analog: Saw for warm, rich content
    - Hollow sounds: Square for reedy character
    - PWM effects: Pulse for width modulation
    - Creative sounds: Different waveforms for variety
    - Pro tip: Use with DCO2 for complex tones

### DCO 2 Controls
- **Function:** Secondary oscillator with sync and cross-modulation
  - Range: Various waveforms and settings
  - Effect: Adds harmonic complexity and sync effects
  - Use for: Creating rich, complex tones
  - Pro tip: Essential for sync and cross-modulation effects
- **Behavior:**
  - Can be synced to DCO1 for tearing effect
  - Can cross-modulate DCO1 for FM effects
  - Detune creates thickness and chorusing
  - Pro tip: Use for metallic and complex tones
- **Applications:**
  - Sync leads: Hard sync for characteristic leads
  - FM textures: Cross-modulation for metallic sounds
  - Thickness: Detune for chorus-like effects
  - Complex tones: Multiple interactions for rich sounds
  - Pro tip: Use with filter for classic analog sounds

### Hard Sync Control
- **Function:** Enables hard sync between DCO1 and DCO2
  - Range: On/Off (binary)
  - Effect: DCO1 restarts DCO2's waveform cycle
  - Use for: Creating "tearing" sync leads
  - Pro tip: Essential for classic analog sync sounds
- **Behavior:**
  - Off: Normal oscillator operation
  - On: DCO1 controls DCO2's phase
  - Pro tip: Use with DCO2 pitch modulation for sync leads
- **Applications:**
  - Classic leads: Sync for characteristic tearing sound
  - Metallic tones: Sync with high DCO2 pitch for brightness
  - Complex harmonics: Sync for rich harmonic content
  - Creative effects: Sync for unique textures
  - Pro tip: Use with filter envelope for classic sync leads

### Cross-Modulation Control
- **Function:** Modulates one oscillator with another
  - Range: 0-100% (typically)
  - Effect: Creates FM-like harmonic complexity
  - Use for: Adding metallic and complex harmonics
  - Pro tip: Creates bell-like and metallic textures
- **Behavior:**
  - 0%: No cross-modulation
  - Low values: Subtle harmonic addition
  - High values: Complex harmonic structures
  - Pro tip: Use for metallic and bell-like sounds
- **Applications:**
  - Metallic textures: High values for bell-like sounds
  - Complex harmonics: Variable values for harmonic complexity
  - Bell sounds: High values with appropriate waveforms
  - Creative effects: Extreme values for unique textures
  - Pro tip: Use with filtering for controlled complexity

### Detune Controls
- **DCO Detune:**
  - **Function:** Adjusts pitch relationship between oscillators
    - Range: Negative to positive values (typically -100 to +100 cents)
    - Effect: Creates thickness and chorusing
    - Use for: Adding richness to sounds
    - Pro tip: Small amounts create natural thickness
  - **Behavior:**
    - 0: Perfectly in tune
    - Small values: Natural thickness
    - Large values: Pronounced chorusing
    - Pro tip: Use for natural-sounding thickness
  - **Applications:**
    - Natural thickness: Small detune values for subtle thickness
    - Pronounced chorus: Large detune values for obvious effect
    - Unison simulation: Medium values for unison effect
    - Creative detune: Extreme values for unique effects
    - Pro tip: Use for authentic analog thickness

### Filter Controls
- **Cutoff Frequency:**
  - **Function:** Controls the filter's cutoff point
    - Range: 20Hz to 20kHz (typically)
    - Effect: Determines which frequencies pass through
    - Use for: Controlling brightness and tone
    - Pro tip: Lower values for darker sounds
  - **Behavior:**
    - Low values: Dark, muffled sound
    - High values: Bright, open sound
    - Pro tip: Use for tonal shaping
  - **Applications:**
    - Dark sounds: Low values for muffled tones
    - Bright sounds: High values for open tones
    - Tonal shaping: Variable values for tone control
    - Creative effects: Extreme values for unique sounds
    - Pro tip: Use for fundamental tone control

### Resonance Control
- **Function:** Controls filter resonance/Peak
  - Range: 0-100% (typically)
  - Effect: Emphasizes frequencies at the cutoff point
  - Use for: Adding character and emphasis
  - Pro tip: High values can cause self-oscillation
- **Behavior:**
  - 0%: No resonance, smooth rolloff
  - Medium: Gentle peak at cutoff
  - High: Strong peak, possible self-oscillation
  - Pro tip: Creates "acid" squelch sounds at high values
- **Applications:**
  - Acid sounds: High values for classic acid tones
  - Character addition: Medium values for gentle enhancement
  - Self-oscillation: Maximum values for sine generation
  - Creative effects: Variable values for unique effects
  - Pro tip: Use with sawtooth waves for classic sounds

### HQ Filter Mode
- **Function:** High-quality filter algorithm
  - Range: On/Off (binary)
  - Effect: Improves filter resonance and slope characteristics
  - Use for: Higher quality filter response
  - Pro tip: Essential for high-resonance applications
- **Behavior:**
  - Off: Standard filter quality
  - On: High-quality filter processing
  - Pro tip: Use for maximum resonance effects
- **Applications:**
  - High resonance: On for maximum resonance effects
  - Quality enhancement: On for improved filter response
  - Classic analog: On for authentic analog characteristics
  - Creative filtering: On for enhanced filter effects
  - Pro tip: Use for maximum filter character

### Modulation Matrix Controls
- **Sources:**
  - **LFO 1/2:** Low-frequency oscillators for modulation
    - Rate: Speed of modulation
    - Depth: Intensity of modulation
    - Waveform: Shape of modulation
    - Pro tip: Use for rhythmic and evolving effects
  - **Envelope 1/2:** ADSR envelopes for modulation
    - Attack: Time to reach peak
    - Decay: Time to reach sustain
    - Sustain: Level during note hold
    - Release: Time to fade after note release
    - Pro tip: Use for dynamic expression
  - **MIDI CC:** MIDI controller inputs for modulation
    - Various CC numbers for different controls
    - Pro tip: Use for real-time performance

- **Destinations:**
  - **Pitch:** Modulate oscillator pitch
  - **PWM:** Modulate pulse width
  - **Filter Cutoff:** Modulate filter frequency
  - **Filter Resonance:** Modulate filter emphasis
  - **Amplitude:** Modulate volume
  - **Pan:** Modulate stereo position
  - Pro tip: Use for comprehensive parameter control

### Effects Rack Controls
- **Built-in Effects:** Integrated effects processing
  - **Reverb:** Spatial effects processing
  - **Delay:** Rhythmic effects processing
  - **Chorus:** Width and thickness enhancement
  - **Saturation:** Harmonic enhancement and overdrive
  - **Pro tip:** Use for comprehensive sound enhancement

## 🎼 Sound Design Applications

### Analog Lead Design
Using Kepler Exo for classic analog lead sounds:

**Sync Lead Creation:**
- **Hard Sync Setup:** Creating classic tearing sync leads
  - Enable hard sync between oscillators
  - Use sawtooth as DCO1, sawtooth as DCO2
  - Apply filter envelope for characteristic movement
  - Essential for analog lead sounds
  - Perfect for classic tearing leads
  - Pro tip: Use with high resonance for maximum character

- **FM Lead Design:** Creating metallic lead sounds
  - Use cross-modulation for harmonic complexity
  - Apply appropriate filter settings
  - Essential for complex lead sounds
  - Perfect for bell-like lead sounds
  - Pro tip: Use for metallic lead characteristics

- **Detuned Leads:** Creating thick lead sounds
  - Apply moderate detune for thickness
  - Use appropriate filter settings
  - Essential for rich lead sounds
  - Perfect for chorus-like leads
  - Pro tip: Use for natural-sounding thickness

### Bass Applications
Using Kepler Exo for analog bass sounds:

**Classic Analog Bass:**
- **Warm Bass Setup:** Creating warm, analog-style bass sounds
  - Use sawtooth waveform with sub-oscillator
  - Apply appropriate filter settings
  - Essential for analog bass sounds
  - Perfect for warm, round bass
  - Pro tip: Use with chorus for authentic analog character

- **Punchy Bass:** Creating snappy, analog-style bass
  - Use pulse waveform with appropriate settings
  - Apply fast envelope for snappy response
  - Essential for punchy bass sounds
  - Perfect for cutting basslines
  - Pro tip: Use for bass that needs to cut through

- **Sync Bass:** Creating sync-based bass sounds
  - Use hard sync for tearing bass character
  - Apply appropriate filter settings
  - Essential for sync bass sounds
  - Perfect for tearing bass effects
  - Pro tip: Use with moderate resonance for character

### Creative Applications
Using Kepler Exo for experimental applications:

**FM Synthesis:**
- **Metallic Textures:** Creating bell-like and metallic sounds
  - Use high cross-modulation values
  - Apply appropriate filter settings
  - Perfect for experimental music
  - Essential for complex harmonic generation
  - Useful for bell-like textures

**Audio-Rate Modulation:**
- **Filter Modulation:** Using audio-rate signals to modulate filter
  - Modulate filter cutoff with oscillator output
  - Create sideband generation effects
  - Perfect for evolving textures
  - Essential for complex harmonic structures
  - Useful for "growl" effects

**Matrix Modulation:**
- **Complex Modulation:** Using multiple modulation sources
  - Combine LFOs, envelopes, and other sources
  - Create evolving, complex sounds
  - Perfect for ambient and evolving music
  - Essential for sophisticated modulation
  - Useful for evolving textures

### Pad Applications
Using Kepler Exo for atmospheric sounds:

**Lush Pads:**
- **Evolving Pad Creation:** Creating evolving pad sounds
  - Use multiple modulation sources
  - Apply appropriate filter settings
  - Essential for ambient music
  - Perfect for evolving textures
  - Pro tip: Use for atmospheric soundscapes

- **PWM Pads:** Creating evolving PWM pad sounds
  - Use LFO-modulated pulse width
  - Apply appropriate filter settings
  - Essential for evolving textures
  - Perfect for organic pad sounds
  - Pro tip: Use for evolving, organic textures

- **Sync Pads:** Creating sync-based pad textures
  - Use sync for evolving harmonic content
  - Apply appropriate filter settings
  - Essential for evolving textures
  - Perfect for complex pad sounds
  - Pro tip: Use for evolving harmonic content

## 🧪 Experimental Techniques

### Advanced Synthesis Applications
Creative uses of Kepler Exo's dual oscillator capabilities:

**Cross-Modulation Experiments:**
- **Complex Harmonic Generation:** Creating rich harmonic content
  - Use multiple cross-modulation sources
  - Apply different modulation ratios
  - Perfect for bell-like sounds
  - Essential for complex harmonic structures
  - Useful for metallic textures

**Sync Manipulation:**
- **Dynamic Sync Effects:** Changing sync characteristics over time
  - Automate DCO2 pitch during sync
  - Create evolving sync textures
  - Perfect for evolving sync leads
  - Essential for dynamic sync expression
  - Useful for evolving sync textures

**Audio-Rate Modulation:**
- **Filter Sideband Generation:** Creating complex filter modulation
  - Modulate filter with audio-rate signals
  - Create additional harmonic content
  - Perfect for evolving textures
  - Essential for complex harmonic generation
  - Useful for "growl" effects

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Matrix Automation:**
- **Complex Modulation:** Using multiple matrix slots for evolving effects
  - Create evolving modulation characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic matrix expression
  - Use for expressive modulation control

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

### Analog Synthesis Workflows
Efficient approaches to using Kepler Exo for analog-style synthesis:

**Lead Design:**
- **Sync Lead Creation:** Creating classic tearing sync leads
  - Use sawtooth waveforms with sync enabled
  - Apply appropriate filter envelope settings
  - Essential for analog lead sounds
  - Pro tip: Use high resonance for maximum character

- **FM Lead Design:** Creating metallic lead sounds
  - Use cross-modulation for harmonic complexity
  - Apply appropriate filter settings
  - Essential for complex lead sounds
  - Pro tip: Use for bell-like lead sounds

**Bass Design:**
- **Analog Bass Creation:** Creating warm analog-style bass
  - Use sawtooth with sub-oscillator
  - Apply appropriate filter settings
  - Essential for analog bass sounds
  - Pro tip: Use with chorus for authentic character

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
- **Analog Leads:** Creating classic analog lead sounds
- **Sync Basslines:** Creating tearing sync bass sounds
- **FM Textures:** Creating metallic and complex textures
- **Energy Management:** Using analog sounds for track energy
- **Build-up Effects:** Creating tension with sync and FM automation

### Hip-Hop and R&B
- **Analog Warmth:** Adding analog character to digital elements
- **Bass Enhancement:** Creating warm analog bass sounds
- **Pad Sounds:** Creating atmospheric pad sounds
- [ ] Design a patch using Hard Sync and FM simultaneously
- [ ] Explain the benefits of HQ Mode for high-resonance filtering
- [ ] Build an evolving pad that uses the entire Modulation Matrix
- [ ] Distinguish the character of Kepler Exo from the standard Kepler
- [ ] Create a classic sync lead with tearing characteristics
- [ ] Use cross-modulation to create metallic bell-like textures
- [ ] Apply appropriate filter settings for different musical genres
- [ ] Use the modulation matrix for complex parameter control
- [ ] Create a warm analog bass with proper oscillator settings
- [ ] Troubleshoot harshness and aliasing issues effectively
- [ ] Integrate Kepler Exo into efficient analog synthesis workflows
- [ ] Create genre-specific patches optimized for different musical styles
- [ ] Optimize Kepler Exo settings for minimal CPU usage
- [ ] Use Kepler Exo for creative sound design applications
- [ ] Set up advanced synthesis routing for complex projects
- [ ] Apply Kepler Exo in live performance scenarios
- [ ] Create experimental sounds with extreme parameter settings
- [ ] Combine Kepler Exo with other effects for layered processing
- [ ] Integrate Kepler Exo with other automation tools seamlessly
- [ ] Create custom synthesis workflows for specific creative needs
- [ ] Use Kepler Exo effectively in large, complex projects
- [ ] Generate complex rhythmic patterns with matrix automation
- [ ] Create hybrid synthesis patches combining analog and digital methods
- [ ] Apply Kepler Exo in mastering contexts with appropriate care
- [ ] Create complex multi-stage synthesis chains with smooth automation
- [ ] Design custom analog patches for specific musical contexts
- [ ] Use Kepler Exo for creative vocal processing applications
- [ ] Apply advanced sync techniques for tearing effects
- [ ] Create genre-specific preset libraries for efficient workflow
- [ ] Integrate Kepler Exo with external hardware for hybrid processing
- [ ] Use Kepler Exo for audio restoration and creative repair applications
- [ ] Combine Kepler Exo with other spectral processing tools
- [ ] Apply Kepler Exo in surround sound or multi-channel setups
- [ ] Create complex harmonic relationships using multiple oscillators
- [ ] Use Kepler Exo for creative instrumental processing applications
- [ ] Integrate Kepler Exo with other automation tools for complex control
- [ ] Create complex atmospheric textures using multiple parameters
- [ ] Design custom FM algorithms for unique harmonic structures
- [ ] Apply advanced filtering techniques for tone shaping
- [ ] Use Kepler Exo for creative stereo enhancement beyond traditional methods
- [ ] Combine Kepler Exo with convolution for hybrid synthesis approaches
- [ ] Implement advanced envelope shaping for dynamic expression
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use Kepler Exo for creative sound design in film and game audio
- [ ] Apply Kepler Exo in live sound reinforcement scenarios
- [ ] Create experimental synthesis textures using extreme parameter settings
- [ ] Integrate Kepler Exo with external synthesizers for complex sound design
- [ ] Generate complex harmonic structures with precise control
- [ ] Use Kepler Exo for formant synthesis and vowel creation
- [ ] Apply advanced resonance techniques for character enhancement
- [ ] Create evolving textures using parameter automation
- [ ] Design custom matrix routing patterns for sophisticated modulation
- [ ] Use Kepler Exo for creative bass synthesis with sync and FM
- [ ] Combine Kepler Exo with other vintage emulations for authentic sounds
- [ ] Apply Kepler Exo in educational contexts for synthesis learning
- [ ] Create custom analog patches for retro music production
- [ ] Use Kepler Exo for creative lead synthesis with character
- [ ] Implement advanced matrix techniques for complex modulation

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Kepler Exo

Leveraging the "Exo" features for professional Hip-Hop, R&B, and Pop sound design.

---

## 1. PSYCHEDELIC (Primary Focus)
*FM "trippiness," evolving harmonic shifts, and disorienting motion.*
- **The Mental Model:** Shifting landscapes, metallic hallucinations (Travis Scott / Mike Dean).
- **Exo-Only Levers:**
    - **X-Mod (Cross-Mod):** Turn this up to 40–60% for "inhuman" harmonic textures.
    - **Audio Mod (VCF):** Modulate the filter with DCO 1 to create "growling" textures that change with pitch.
    - **Matrix Routing:** Map **LFO 2** to **DCO 2 Semi** (very small amount) for a "warped" pitch feel.
    - **Hard Sync:** Automate DCO 2's pitch with an LFO for "screaming" cycles.
- **Listen For:** Sounds that feel like they are "morphing" between organic and digital.

## 2. UPBEAT
*Aggressive leads, rhythmic precision, and bright energy.*
- **The Mental Model:** High-energy Hyperpop, modern Synth-Pop, and energetic Trap.
- **Exo-Only Levers:**
    - **Hard Sync:** Enable and use **Env 2** to "rip" the pitch of DCO 2 at the start of every note.
    - **Saturator:** Crank the built-in saturation for aggressive "analog bite."
    - **Slope (6dB):** Use the 6dB filter mode for a brighter, more "airy" top end that cuts through a dense mix.
- **Listen For:** "Tearing" textures and bright, snappy transients.

## 3. MOODY
*Heavy low-end, dark atmosphere, and melancholic depth.*
- **The Mental Model:** Deep, atmospheric R&B (Drake / 40 vibes).
- **Exo-Only Levers:**
    - **Dual DCOs:** Detune DCO 1 and DCO 2 slightly (+/- 5 cents) for a massive, thick "shadow" effect.
    - **HQ Filter:** Use HQ mode with 24dB slope for a very smooth, creamy darkness.
    - **Saturation:** Use subtle saturation to "warm up" the low-mids of a pad.
    - **Env 2:** Use a dedicated envelope for a very slow filter sweep.
- **Listen For:** A thick, heavy "cloak" of sound that feels expensive and deep.

## 4. JAZZY / VIBEY
*Neo-Soul warmth, Rhodes-like character, and modern lushness.*
- **The Mental Model:** Moonchild / Robert Glasper; sophisticated Alternative R&B.
- **Exo-Only Levers:**
    - **HQ Chorus:** Use the built-in Chorus I+II for maximum lush width.
    - **Matrix Routing:** Map **Velocity** to **Filter Cutoff**. This makes the synth feel like a "real" instrument that responds to how hard you play.
    - **DCO 2 (Fine):** Detune slightly to create "natural" acoustic-style beating.
- **Listen For:** Expressive, "human" dynamics and a wide, creamy stereo image.

---

## Exo Vibe Matrix (New Levers)
| Vibe | Hard Sync | X-Mod (FM) | Audio Mod | Filter HQ | Matrix Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Psyched**| ON | High | High | STD | LFO -> Pitch |
| **Upbeat** | ON | Low | Low | STD | Env -> Sync Pitch |
| **Moody** | OFF | Low | OFF | ON | Slow Env -> Cutoff |
| **Jazzy** | OFF | OFF | OFF | ON | Velocity -> Cutoff |
| **Vibey** | OFF | Low | OFF | ON | LFO -> PWM |

```

---

## FILE: 01-Learning\Quick-Reference\exo-vs-standard-comparison.md

```markdown
# Kepler vs. Kepler Exo: The Pro Comparison

Which JUNO-inspired engine should you choose for your track? [SRC: IL-MAN]

| Feature | Kepler (Standard) | Kepler Exo |
| :--- | :--- | :--- |
| **Oscillators** | 1 (DCO) + Sub | **2 (DCO1 & DCO2)** + Sub |
| **Oscillator Interaction** | None | **Hard Sync, Cross-Mod (FM)** |
| **Modulation Matrix** | No (Fixed) | **Yes (Deep Routing)** |
| **Envelopes** | 1 ADSR | **2 ADSRs** |
| **LFOs** | 1 | **2** |
| **Filter Modes** | Standard (JUNO) | **Standard + HQ + 6dB Option** |
| **FX Rack** | Chorus Only | **Chorus, Delay, Reverb, Saturation** |
| **Complexity** | Simple, Fast, "Pure" | Deep, Flexible, Sound Design Hub |

## Use **Kepler (Standard)** When:
- You need a "Classic JUNO" sound in 30 seconds.
- You are creating simple 80s basslines or lush, static pads.
- You want to keep CPU usage to an absolute minimum.
- You prefer the "One knob per function" workflow.

## Use **Kepler Exo** When:
- You need **Hard Sync** for "tearing" leads or metallic FM textures.
- You want evolving, complex motion using the **Modulation Matrix**.
- You need a **second envelope** to control the filter separately from the amplitude.
- You want the **HQ Filter** for smoother resonance sweeps.
- You are designing cinematic textures or modern Hybrid-Pop patches.

## Pro Tip: The "Twin" Strategy
Start your idea in **Kepler** to find the vibe. If you realize the sound needs more "bite" or a complex LFO shape that Kepler doesn't have, switch to **Kepler Exo**—the core sound engine is the same, but the ceiling for creativity is much higher.

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: Kepler Exo

Advanced-reference for the expanded "Pro" analog engine. [SRC: IL-MAN]

---

## 🎹 DCO 1 & 2 (Oscillators)
- **DCO 1:** The primary oscillator.
- **DCO 2:** The secondary oscillator.
  - **Fine/Semi:** Tuning offsets relative to DCO 1.
  - **Sync (Hard Sync):** Forces DCO 2 to restart whenever DCO 1 does. Creates "tearing" leads.
  - **X-Mod (Cross-Mod):** DCO 1 modulates the frequency of DCO 2 (FM synthesis).

## 🎚️ VCF (Advanced Filter)
- **Mode (STD/HQ):**
  - *STD:* Classic JUNO emulation.
  - *HQ:* Modern, high-fidelity algorithm with smoother resonance.
- **Slope (24dB/6dB):** Selects between a steep (24dB) or gentle (6dB) filter curve.
- **Audio Mod:** Uses the output of DCO 1 to modulate the filter frequency at high speed (Growl).

## 📐 MOD MATRIX (The Hub)
- **Slots:** Multiple routing slots.
- **Source:** What is moving (LFO 1, Env 2, Velocity, Mod Wheel).
- **Destination:** What is being moved (DCO 2 Pitch, Filter Res, Pan, FX Mix).
- **Amount:** Depth and direction (Bipolar) of the modulation.

## 📐 ENVELOPES & LFOs
- **Env 1 & 2:** Two independent ADSRs. Usually, Env 1 is for Amp (VCA) and Env 2 is for Filter (VCF).
- **LFO 1 & 2:** Two independent LFOs with multiple waveforms and sync modes.

## ✨ FX RACK
- **Saturator:** Adds harmonic "crunch" and analog warmth.
- **Delay / Reverb:** High-quality spatial processing.
- **Chorus:** The classic JUNO Modes I, II, and I+II.

---

## 🎯 Advanced Starting Points
- **Sync Lead:** Sync ON + Env 2 assigned to DCO 2 Pitch in the Matrix.
- **Growl Bass:** Audio Mod turned up + High Resonance + Saw wave.
- **Ambient Drift:** LFO 1 -> DCO 1 Pitch (Slow); LFO 2 -> Filter Cutoff (Slower).
- **Metallic Bell:** High X-Mod + Square waves + Short Release.

```

---

## FILE: 02-Data\parameters\kepler-exo-params.json

```json
{
  "plugin_name": "Kepler Exo",
  "category": "Advanced Vintage Synth",
  "features": ["Hard Sync", "FM", "Matrix", "HQ Mode", "Dual ADSR", "FX Rack"],
  "sections": {
    "DCO_1": {
      "Range": "Octave setting",
      "Waveforms": "Saw, Square, Pulse",
      "PWM": "Pulse Width Modulation"
    },
    "DCO_2": {
      "Semi": "Semitone offset (-24 to +24)",
      "Fine": "Cents offset",
      "Sync": "Hard Sync toggle",
      "X_Mod": "Cross-modulation depth",
      "Level": "Volume of DCO 2"
    },
    "VCF": {
      "Mode": "STD vs HQ",
      "Slope": "24dB vs 6dB",
      "Audio_Mod": "Audio-rate filter modulation",
      "Freq": "Cutoff frequency",
      "Res": "Resonance"
    },
    "MATRIX": {
      "Slots": 8,
      "Sources": ["LFO1", "LFO2", "Env1", "Env2", "Vel", "ModW", "AftT"],
      "Destinations": ["Pitch", "PWM", "Cutoff", "Res", "Level", "Pan", "FX"]
    },
    "FX": {
      "Saturation": "Harmonic drive",
      "Delay": "Time-based echoes",
      "Reverb": "Spatial room simulation",
      "Chorus": "JUNO Modes I, II, I+II"
    }
  }
}

```

---

## FILE: 02-Data\presets\INDEX.md

```markdown
# Kepler Exo Presets Index

## Genre Presets (8 files)
| File | Name | Genre | Mood |
|------|------|-------|------|
| `genre/01-exo-808-beast.json` | Exo 808 Beast | hip-hop/rap | dark |
| `genre/02-exo-soul-keys.json` | Exo Soul Keys | R&B | moody |
| `genre/03-exo-stadium-supersaw.json` | Exo Stadium Supersaw | EDM | electric |
| `genre/04-exo-grim-reaper.json` | Exo Grim Reaper | drill | dark |
| `genre/05-exo-dusty-vhs.json` | Exo Dusty VHS | lo-fi | moody |
| `genre/06-exo-glitch-symphony.json` | Exo Glitch Symphony | trap | dark |
| `genre/07-exo-sci-fi-textures.json` | Exo Sci-Fi Textures | experimental | spacey |
| `genre/08-exo-velvet-pad.json` | Exo Velvet Pad | R&B | smooth |

## Signature Presets (10 files)
| File | Artist | Style |
|------|--------|-------|
| `signature/metro-boomin-exo.json` | Metro Boomin | Exo Boomin System |
| `signature/wheezy-exo.json` | Wheezy | Exo Paperboy |
| `signature/murda-beatz-exo.json` | Murda Beatz | Exo Melody King |
| `signature/tay-keith-exo.json` | Tay Keith | Exo Gunna Wet |
| `signature/harry-fraud-exo.json` | Harry Fraud | Exo SSL Soul |
| `signature/ska-gregory-exo.json` | Ska Gregory | Exo Cash Money |
| `signature/mike-will-exo.json` | Mike Will Made-It | Exo Future Past |
| `signature/zaytoven-exo.json` | Zaytoven | Exo MIDI Pluck Deluxe |
| `signature/just-blaze-exo.json` | Just Blaze | Exo Classic Soul |
| `signature/timbaland-exo.json` | Timbaland | Exo Beat Break |

## Total: 18 preset files

```

---

## FILE: 02-Data\presets\genre-presets.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "genres": ["hip-hop/rap", "R&B", "EDM", "trap", "lo-fi", "drill", "experimental"],
    "description": "Genre-aware presets for Kepler Exo with extended features (4 oscillators, sub osc, expanded modulation)"
  },
  "presets": {
    "hip-hop-bass-exo": {
      "name": "Exo 808 Beast",
      "genre": "hip-hop/rap",
      "mood": "dark",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter"],
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-2",
          "detune": 0,
          "mix": 70
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "-2",
          "detune": 4,
          "mix": 65
        },
        "oscillator3": {
          "waveform": "square",
          "octave": "-1",
          "detune": 0,
          "mix": 50
        },
        "oscillator4": {
          "waveform": "triangle",
          "octave": "0",
          "detune": 3,
          "mix": 35
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 100
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 200,
          "resonance": 30,
          "drive": 18
        },
        "filterB": {
          "type": "lowpass",
          "cutoff": 4000,
          "resonance": 20,
          "drive": 5
        },
        "envelope": {
          "attack": 4,
          "decay": 200,
          "sustain": 60,
          "release": 140
        },
        "modulation": {
          "envToFilterA": 75,
          "lfo1ToPan": 35,
          "lfo2ToPitch": 8
        }
      },
      "chain": {
        "pre": ["Fruity Parametric EQ 2 - High-pass 25Hz"],
        "post": ["Fruity Limiter - Threshold -14dB, Ratio 4:1, Attack 1ms, Release 35ms"]
      },
      "genreTags": ["hip-hop/rap", "trap", "dark", "aggressive"],
      "a/bTesting": {
        "testA": "Sub osc at 100% for maximum sub",
        "testB": "Sub osc at 70% for cleaner sub",
        "testC": "Osc4 adds harmonic complexity"
      },
      "troubleshooting": {
        "muddy": "Filter A cutoff to 150Hz",
        "clipping": "Reduce osc mix levels by 20%"
      }
    },
    "rb-keys-exo": {
      "name": "Exo Soul Keys",
      "genre": "R&B",
      "mood": "moody",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "stereo-width"],
      "settings": {
        "oscillator1": {
          "waveform": "sine",
          "octave": "0",
          "detune": 0,
          "mix": 85
        },
        "oscillator2": {
          "waveform": "triangle",
          "octave": "0",
          "detune": 5,
          "mix": 70
        },
        "oscillator3": {
          "waveform": "saw",
          "octave": "-1",
          "detune": 3,
          "mix": 45
        },
        "oscillator4": {
          "waveform": "square",
          "octave": "0",
          "detune": 8,
          "mix": 30
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 0
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 2500,
          "resonance": 18,
          "drive": 5
        },
        "filterB": {
          "type": "highpass",
          "cutoff": 200,
          "resonance": 10,
          "drive": 0
        },
        "envelope": {
          "attack": 60,
          "decay": 400,
          "sustain": 75,
          "release": 350
        },
        "modulation": {
          "envToFilterA": 30,
          "lfo1ToPan": 50,
          "lfo2ToFilterB": 20
        },
        "stereoWidth": 100
      },
      "chain": {
        "pre": ["Soft clipper - 1.5dB reduction"],
        "post": ["Fruity Reverb 2 - Hall, Decay 2.8s, Mix 22%", "Fruity Parametric EQ 2 - Bell +2dB at 3kHz"]
      },
      "genreTags": ["R&B", "smooth", "moody", "soulful"],
      "a/bTesting": {
        "testA": "LFO pan at 50% for gentle movement",
        "testB": "LFO pan off for static stereo field"
      },
      "troubleshooting": {
        "harshHighs": "Filter A cutoff to 2000Hz",
        "weakLowEnd": "Increase osc1 to 100%"
      }
    },
    "edm-supersaw-exo": {
      "name": "Exo Stadium Supersaw",
      "genre": "EDM",
      "mood": "electric",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter", "stereo-width"],
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "0",
          "detune": 0,
          "mix": 85
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "0",
          "detune": 7,
          "mix": 85
        },
        "oscillator3": {
          "waveform": "saw",
          "octave": "0",
          "detune": 14,
          "mix": 80
        },
        "oscillator4": {
          "waveform": "saw",
          "octave": "+1",
          "detune": 21,
          "mix": 65
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 0
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 4200,
          "resonance": 48,
          "drive": 18
        },
        "filterB": {
          "type": "lowpass",
          "cutoff": 8000,
          "resonance": 25,
          "drive": 8
        },
        "envelope": {
          "attack": 15,
          "decay": 280,
          "sustain": 55,
          "release": 450
        },
        "modulation": {
          "envToFilterA": 70,
          "lfo1ToFilterA": 45,
          "lfo2ToPitch": 12
        },
        "stereoWidth": 120
      },
      "chain": {
        "pre": ["Soft clipper - 2.5dB reduction"],
        "post": ["Fruity Limiter - Ceiling -0.3dB, Gain 6dB", "Fruity Reverb 2 - Cathedral, Decay 4s, Mix 15%"]
      },
      "genreTags": ["EDM", "big room", "electric", "anthem"],
      "a/bTesting": {
        "testA": "4 oscillators for massive width",
        "testB": "3 oscillators for tighter mix",
        "testC": "Dual filter for spectral control"
      },
      "troubleshooting": {
        "muddy": "Filter B high-pass at 250Hz",
        "phasing": "Reduce stereo width to 100%"
      }
    },
    "drill-bass-exo": {
      "name": "Exo Grim Reaper",
      "genre": "drill",
      "mood": "dark",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter"],
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-2",
          "detune": 0,
          "mix": 90
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "-2",
          "detune": 5,
          "mix": 85
        },
        "oscillator3": {
          "waveform": "square",
          "octave": "-1",
          "detune": 0,
          "mix": 60
        },
        "oscillator4": {
          "waveform": "saw",
          "octave": "0",
          "detune": 10,
          "mix": 40
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 100
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 120,
          "resonance": 40,
          "drive": 25
        },
        "filterB": {
          "type": "bandpass",
          "cutoff": 800,
          "resonance": 35,
          "drive": 15
        },
        "envelope": {
          "attack": 6,
          "decay": 220,
          "sustain": 55,
          "release": 180
        },
        "modulation": {
          "envToFilterA": 80,
          "lfo1ToPitch": 20,
          "lfo2ToFilterB": 30
        }
      },
      "chain": {
        "pre": ["High-pass at 35Hz"],
        "post": ["Fruity Limiter - Threshold -12dB, Attack 0.5ms, Release 25ms, Ratio 6:1"]
      },
      "genreTags": ["drill", "dark", "heavy", "aggressive"],
      "a/bTesting": {
        "testA": "Pitch LFO for demonic sub movement",
        "testB": "Static pitch for pure heaviness"
      },
      "troubleshooting": {
        "tooDistorted": "Filter drive to 18%",
        "weakImpact": "Increase filter A resonance to 50%"
      }
    },
    "lofi-pad-exo": {
      "name": "Exo Dusty VHS",
      "genre": "lo-fi",
      "mood": "moody",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "stereo-width"],
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-1",
          "detune": 12,
          "mix": 70
        },
        "oscillator2": {
          "waveform": "triangle",
          "octave": "-2",
          "detune": 18,
          "mix": 65
        },
        "oscillator3": {
          "waveform": "square",
          "octave": "0",
          "detune": 8,
          "mix": 40
        },
        "oscillator4": {
          "waveform": "sine",
          "octave": "-1",
          "detune": 25,
          "mix": 55
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 30
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 1800,
          "resonance": 22,
          "drive": 8
        },
        "filterB": {
          "type": "highpass",
          "cutoff": 150,
          "resonance": 15,
          "drive": 0
        },
        "envelope": {
          "attack": 180,
          "decay": 600,
          "sustain": 80,
          "release": 1000
        },
        "modulation": {
          "envToFilterA": 20,
          "lfo1ToPan": 65,
          "lfo2ToFilterB": 15
        },
        "stereoWidth": 150
      },
      "chain": {
        "pre": ["Vintage Phaser - Mix 35%, Rate 0.25Hz"],
        "post": ["Fruity Reverb 2 - Room, Decay 2.5s, Mix 28%", "Tape Saturation - 4% drive"]
      },
      "genreTags": ["lo-fi", "moody", "chill", "nostalgic"],
      "a/bTesting": {
        "testA": "Heavy detune for tape warble",
        "testB": "Tighter detune for cleaner lo-fi"
      },
      "troubleshooting": {
        "tooNoisy": "Reduce LFO pan to 40%",
        "muddy": "Filter B high-pass at 200Hz"
      }
    },
    "trap-lead-exo": {
      "name": "Exo Glitch Symphony",
      "genre": "trap",
      "mood": "dark",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter"],
      "settings": {
        "oscillator1": {
          "waveform": "square",
          "octave": "+1",
          "detune": 0,
          "mix": 100
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "0",
          "detune": 12,
          "mix": 75
        },
        "oscillator3": {
          "waveform": "square",
          "octave": "0",
          "detune": 5,
          "mix": 60
        },
        "oscillator4": {
          "waveform": "saw",
          "octave": "+1",
          "detune": 20,
          "mix": 50
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 0
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 3200,
          "resonance": 50,
          "drive": 12
        },
        "filterB": {
          "type": "bandpass",
          "cutoff": 1500,
          "resonance": 40,
          "drive": 8
        },
        "envelope": {
          "attack": 1,
          "decay": 70,
          "sustain": 0,
          "release": 45
        },
        "modulation": {
          "envToFilterA": 95,
          "lfo1ToPitch": 35,
          "lfo2ToFilterB": 45
        }
      },
      "chain": {
        "pre": ["Teq4 - High-pass 600Hz"],
        "post": ["Fruily Reverb 2 - Plate, Decay 1s, Mix 20%", "Bitcrusher - 10-bit, 60% wet"]
      },
      "genreTags": ["trap", "dark", "glitch", "experimental"],
      "a/bTesting": {
        "testA": "Sample-hold LFO for random glitches",
        "testB": "Sine LFO for regular vibrato"
      },
      "troubleshooting": {
        "tooChaotic": "Reduce LFO amounts to 20%",
        "tooThin": "Add sub osc at 40%"
      }
    },
    "experimental-texture-exo": {
      "name": "Exo Sci-Fi Textures",
      "genre": "experimental",
      "mood": "spacey",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter", "stereo-width"],
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "0",
          "detune": 0,
          "mix": 80
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "+1",
          "detune": 50,
          "mix": 70
        },
        "oscillator3": {
          "waveform": "square",
          "octave": "-1",
          "detune": 25,
          "mix": 60
        },
        "oscillator4": {
          "waveform": "triangle",
          "octave": "0",
          "detune": 75,
          "mix": 50
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 50
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 5000,
          "resonance": 55,
          "drive": 15
        },
        "filterB": {
          "type": "bandpass",
          "cutoff": 2500,
          "resonance": 45,
          "drive": 10
        },
        "envelope": {
          "attack": 50,
          "decay": 800,
          "sustain": 70,
          "release": 1200
        },
        "modulation": {
          "envToFilterA": 60,
          "lfo1ToFilterB": 80,
          "lfo2ToPitch": 50
        },
        "stereoWidth": 200
      },
      "chain": {
        "pre": ["Fruity Parametric EQ 2 - Multi-band processing"],
        "post": ["Fruity Reverb 2 - Gated, Decay 1.5s, Mix 40%", "Delay - Stereo ping-pong, 600ms, Feedback 50%"]
      },
      "genreTags": ["experimental", "spacey", "cinematic", "ambient"],
      "a/bTesting": {
        "testA": "Extreme detune for metallic textures",
        "testB": "Tighter detune for harmonious clusters"
      },
      "troubleshooting": {
        "tooHarsh": "Filter A cutoff to 3500Hz",
        "lossOfControl": "Reduce modulation amounts by half"
      }
    },
    "rnb-pad-exo": {
      "name": "Exo Velvet Pad",
      "genre": "R&B",
      "mood": "smooth",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "stereo-width"],
      "settings": {
        "oscillator1": {
          "waveform": "sine",
          "octave": "-1",
          "detune": 0,
          "mix": 90
        },
        "oscillator2": {
          "waveform": "triangle",
          "octave": "-1",
          "detune": 4,
          "mix": 75
        },
        "oscillator3": {
          "waveform": "saw",
          "octave": "-2",
          "detune": 6,
          "mix": 50
        },
        "oscillator4": {
          "waveform": "sine",
          "octave": "0",
          "detune": 10,
          "mix": 40
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 25
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 3000,
          "resonance": 15,
          "drive": 3
        },
        "filterB": {
          "type": "lowpass",
          "cutoff": 6000,
          "resonance": 10,
          "drive": 0
        },
        "envelope": {
          "attack": 250,
          "decay": 500,
          "sustain": 85,
          "release": 800
        },
        "modulation": {
          "envToFilterA": 15,
          "lfo1ToPan": 30,
          "lfo2ToFilterB": 10
        },
        "stereoWidth": 110
      },
      "chain": {
        "pre": ["Vintage Chorus - Mix 40%, Rate 0.2Hz"],
        "post": ["Fruity Reverb 2 - Hall, Decay 3s, Mix 18%", "Fruity Parametric EQ 2 - High-shelf +1.5dB at 8kHz"]
      },
      "genreTags": ["R&B", "smooth", "moody", "romantic"],
      "a/bTesting": {
        "testA": "Gentle pan LFO for subtle movement",
        "testB": "Static for centered emotional focus"
      },
      "troubleshooting": {
        "tooDark": "Filter A cutoff to 4000Hz",
        "lacksWarmth": "Increase osc3 to 60%"
      }
    }
  }
}

```

---

## FILE: 02-Data\presets\signature-presets.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "description": "Artist and production style inspired presets for Kepler Exo"
  },
  "presets": {
    "metro-boomin-exo": {
      "name": "Exo Boomin System",
      "inspiredBy": "Metro Boomin modern trap production",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter"],
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-2",
          "detune": 0,
          "mix": 80
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "-2",
          "detune": 4,
          "mix": 75
        },
        "oscillator3": {
          "waveform": "saw",
          "octave": "-1",
          "detune": 0,
          "mix": 55
        },
        "oscillator4": {
          "waveform": "square",
          "octave": "-1",
          "detune": 3,
          "mix": 45
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 100
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 180,
          "resonance": 32,
          "drive": 20
        },
        "filterB": {
          "type": "lowpass",
          "cutoff": 350,
          "resonance": 20,
          "drive": 8
        },
        "envelope": {
          "attack": 5,
          "decay": 180,
          "sustain": 65,
          "release": 120
        },
        "modulation": {
          "envToFilterA": 72,
          "lfo1ToPan": 20,
          "lfo2ToFilterB": 15
        }
      },
      "chain": {
        "post": ["Fruity Limiter - Threshold -15dB, Ratio 4:1, Attack 0.5ms, Release 30ms"]
      },
      "characteristics": ["deep", "punchy", "modern", "cleansounding"],
      "genreTags": ["hip-hop/rap", "trap", "modern"],
      "a/bTesting": {
        "testA": "4 oscillators for modern complexity",
        "testB": "2 oscillators for classic 808"
      },
      "troubleshooting": {
        "notDeepEnough": "Increase sub osc to 100%",
        "muddyMix": "Filter A cutoff to 140Hz"
      }
    },
    "wheezy-exo": {
      "name": "Exo Paperboy",
      "inspiredBy": "Wheezy ATL trap style",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "stereo-width"],
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-2",
          "detune": 0,
          "mix": 85
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "-2",
          "detune": 6,
          "mix": 80
        },
        "oscillator3": {
          "waveform": "square",
          "octave": "0",
          "detune": 0,
          "mix": 60
        },
        "oscillator4": {
          "waveform": "saw",
          "octave": "0",
          "detune": 10,
          "mix": 50
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 90
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 220,
          "resonance": 38,
          "drive": 18
        },
        "filterB": {
          "type": "highpass",
          "cutoff": 80,
          "resonance": 15,
          "drive": 0
        },
        "envelope": {
          "attack": 4,
          "decay": 160,
          "sustain": 58,
          "release": 100
        },
        "modulation": {
          "envToFilterA": 78,
          "lfo1ToPan": 45,
          "lfo2ToPitch": 12
        },
        "stereoWidth": 130
      },
      "chain": {
        "post": ["Fruity Compressor - Attack 8ms, Release 70ms, Ratio 3:1"]
      },
      "characteristics": ["aggressive", "bright", "modern", "punchy"],
      "genreTags": ["hip-hop/rap", "trap", "ATL"],
      "a/bTesting": {
        "testA": "Pan LFO for stereo movement",
        "testB": "Pan LFO off for mono impact"
      },
      "troubleshooting": {
        "tooHarsh": "Reduce osc4 mix to 35%",
        "lacksPunch": "Increase filter drive to 25%"
      }
    },
    "murda-beatz-exo": {
      "name": "Exo Melody King",
      "inspiredBy": "Murda Beatz melodic trap style",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter", "stereo-width"],
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-1",
          "detune": 0,
          "mix": 80
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "-1",
          "detune": 5,
          "mix": 75
        },
        "oscillator3": {
          "waveform": "triangle",
          "octave": "0",
          "detune": 3,
          "mix": 65
        },
        "oscillator4": {
          "waveform": "square",
          "octave": "0",
          "detune": 8,
          "mix": 50
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 0
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 1200,
          "resonance": 28,
          "drive": 10
        },
        "filterB": {
          "type": "lowpass",
          "cutoff": 4500,
          "resonance": 18,
          "drive": 5
        },
        "envelope": {
          "attack": 15,
          "decay": 280,
          "sustain": 68,
          "release": 300
        },
        "modulation": {
          "envToFilterA": 45,
          "lfo1ToFilterB": 35,
          "lfo2ToPan": 25
        },
        "stereoWidth": 115
      },
      "chain": {
        "post": ["Fruity Reverb 2 - Hall, Decay 2s, Mix 20%", "Fruity Limiter - Soft knee"]
      },
      "characteristics": ["melodic", "bright", "emotional", "groove"],
      "genreTags": ["hip-hop/rap", "trap", "melodic"],
      "a/bTesting": {
        "testA": "Dual filter for harmonic complexity",
        "testB": "Single filter for focused sound"
      },
      "troubleshooting": {
        "tooDark": "Filter B cutoff to 5500Hz",
        "muddyChords": "Filter A cutoff to 1000Hz"
      }
    },
    "tay-keith-exo": {
      "name": "Exo Gunna Wet",
      "inspiredBy": "Tay Keith trap style with Wet",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "stereo-width"],
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-1",
          "detune": 0,
          "mix": 85
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "-1",
          "detune": 7,
          "mix": 80
        },
        "oscillator3": {
          "waveform": "square",
          "octave": "0",
          "detune": 4,
          "mix": 55
        },
        "oscillator4": {
          "waveform": "triangle",
          "octave": "0",
          "detune": 12,
          "mix": 45
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 0
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 800,
          "resonance": 35,
          "drive": 12
        },
        "filterB": {
          "type": "bandpass",
          "cutoff": 2000,
          "resonance": 25,
          "drive": 8
        },
        "envelope": {
          "attack": 10,
          "decay": 200,
          "sustain": 62,
          "release": 250
        },
        "modulation": {
          "envToFilterA": 55,
          "lfo1ToPan": 40,
          "lfo2ToFilterB": 30
        },
        "stereoWidth": 140
      },
      "chain": {
        "post": ["Fruity Reverb 2 - Large Room, Decay 2.2s, Mix 25%", "Fruity Compressor - Soft attack"]
      },
      "characteristics": ["smooth", "wet", "melodic", "atmospheric"],
      "genreTags": ["hip-hop/rap", "trap", "melodic", "atmospheric"],
      "a/bTesting": {
        "testA": "Heavy reverb for atmospheric feel",
        "testB": "Less reverb for drier mix"
      },
      "troubleshooting": {
        "tooWashed": "Reduce reverb mix to 15%",
        "lacksClarity": "Bandpass filter B at 2500Hz"
      }
    },
    "harry-fraud-exo": {
      "name": "Exo SSL Soul",
      "inspiredBy": "Harry Fraud Brooklyn soul style",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter", "stereo-width"],
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-1",
          "detune": 0,
          "mix": 78
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "-1",
          "detune": 5,
          "mix": 72
        },
        "oscillator3": {
          "waveform": "triangle",
          "octave": "0",
          "detune": 3,
          "mix": 60
        },
        "oscillator4": {
          "waveform": "sine",
          "octave": "0",
          "detune": 8,
          "mix": 55
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 20
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 2000,
          "resonance": 20,
          "drive": 8
        },
        "filterB": {
          "type": "highpass",
          "cutoff": 120,
          "resonance": 12,
          "drive": 0
        },
        "envelope": {
          "attack": 45,
          "decay": 350,
          "sustain": 72,
          "release": 400
        },
        "modulation": {
          "envToFilterA": 28,
          "lfo1ToPan": 35,
          "lfo2ToFilterB": 18
        },
        "stereoWidth": 105
      },
      "chain": {
        "pre": ["SSL-style EQ emulation"],
        "post": ["Fruily Reverb 2 - Plate, Decay 1.8s, Mix 18%"]
      },
      "characteristics": ["warm", "smooth", "soulful", "classic"],
      "genreTags": ["hip-hop/rap", "R&B", "soulful"],
      "a/bTesting": {
        "testA": "Subtle stereo width for cohesion",
        "testB": "Mono for SSL-style punch"
      },
      "troubleshooting": {
        "tooWarm": "Increase filter A cutoff to 2500Hz",
        "lacksLowEnd": "Sub osc to 40%"
      }
    },
    "ska-gregory-exo": {
      "name": "Exo Cash Money",
      "inspiredBy": "Ska Gregory New Orleans bounce",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "stereo-width"],
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-2",
          "detune": 0,
          "mix": 88
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "-2",
          "detune": 4,
          "mix": 82
        },
        "oscillator3": {
          "waveform": "square",
          "octave": "-1",
          "detune": 0,
          "mix": 65
        },
        "oscillator4": {
          "waveform": "saw",
          "octave": "0",
          "detune": 8,
          "mix": 55
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 95
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 250,
          "resonance": 30,
          "drive": 15
        },
        "filterB": {
          "type": "lowpass",
          "cutoff": 500,
          "resonance": 22,
          "drive": 8
        },
        "envelope": {
          "attack": 6,
          "decay": 140,
          "sustain": 60,
          "release": 110
        },
        "modulation": {
          "envToFilterA": 68,
          "lfo1ToPan": 25,
          "lfo2ToPitch": 8
        },
        "stereoWidth": 90
      },
      "chain": {
        "post": ["Fruily Limiter - Punchy settings, fast release"]
      },
      "characteristics": ["bouncy", "party", "fun", "uplifting"],
      "genreTags": ["hip-hop/rap", "bounce", "party"],
      "a/bTesting": {
        "testA": "Fast decay for bouncy feel",
        "testB": "Longer decay for smoother flow"
      },
      "troubleshooting": {
        "notBouncy": "Envelope decay to 120ms",
        "tooBoomy": "Filter A cutoff to 200Hz"
      }
    },
    "mike-will-exo": {
      "name": "Exo Future Past",
      "inspiredBy": "Mike Will Made-It futuristic style",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter", "stereo-width"],
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "0",
          "detune": 0,
          "mix": 82
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "0",
          "detune": 7,
          "mix": 80
        },
        "oscillator3": {
          "waveform": "saw",
          "octave": "+1",
          "detune": 14,
          "mix": 65
        },
        "oscillator4": {
          "waveform": "square",
          "octave": "0",
          "detune": 21,
          "mix": 50
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 0
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 3800,
          "resonance": 42,
          "drive": 15
        },
        "filterB": {
          "type": "lowpass",
          "cutoff": 7000,
          "resonance": 28,
          "drive": 8
        },
        "envelope": {
          "attack": 12,
          "decay": 260,
          "sustain": 58,
          "release": 380
        },
        "modulation": {
          "envToFilterA": 62,
          "lfo1ToFilterB": 48,
          "lfo2ToPan": 32
        },
        "stereoWidth": 125
      },
      "chain": {
        "pre": ["Soft clipper - 2dB"],
        "post": ["Fruily Reverb 2 - Gated, Decay 1.5s, Mix 22%", "Delay - 320ms, Feedback 35%"]
      },
      "characteristics": ["futuristic", "wide", "bright", "innovative"],
      "genreTags": ["hip-hop/rap", "R&B", "future bass", "experimental"],
      "a/bTesting": {
        "testA": "4 oscillators for maximum width",
        "testB": "2 oscillators for classic saw"
      },
      "troubleshooting": {
        "tooBusy": "Filter B cutoff to 5000Hz",
        "lacksFuture": "Increase modulation amounts"
      }
    },
    "zaytoven-exo": {
      "name": "Exo MIDI Pluck Deluxe",
      "inspiredBy": "Zaytoven piano-driven production",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "stereo-width"],
      "settings": {
        "oscillator1": {
          "waveform": "square",
          "octave": "+1",
          "detune": 0,
          "mix": 100
        },
        "oscillator2": {
          "waveform": "triangle",
          "octave": "0",
          "detune": 4,
          "mix": 70
        },
        "oscillator3": {
          "waveform": "saw",
          "octave": "0",
          "detune": 6,
          "mix": 50
        },
        "oscillator4": {
          "waveform": "sine",
          "octave": "+1",
          "detune": 3,
          "mix": 40
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 0
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 3000,
          "resonance": 38,
          "drive": 8
        },
        "filterB": {
          "type": "highpass",
          "cutoff": 150,
          "resonance": 15,
          "drive": 0
        },
        "envelope": {
          "attack": 2,
          "decay": 55,
          "sustain": 0,
          "release": 35
        },
        "modulation": {
          "envToFilterA": 88,
          "lfo1ToPan": 20,
          "lfo2ToPitch": 5
        },
        "stereoWidth": 85
      },
      "chain": {
        "post": ["Fruily Reverb 2 - Small Room, Decay 0.6s, Mix 12%", "Fruily Compressor - Fast attack"]
      },
      "characteristics": ["plucky", "bright", "melodic", "classic"],
      "genreTags": ["hip-hop/rap", "R&B", "melodic", "piano"],
      "a/bTesting": {
        "testA": "Square wave for classic MIDI",
        "testB": "Saw for modern edge"
      },
      "troubleshooting": {
        "tooClicky": "Attack to 4ms",
        "sustainingTooLong": "Sustain at 0, decay to 45ms"
      }
    },
    "just-blaze-exo": {
      "name": "Exo Classic Soul",
      "inspiredBy": "Just Blaze soulful hip-hop",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter", "stereo-width"],
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-1",
          "detune": 0,
          "mix": 75
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "-1",
          "detune": 5,
          "mix": 70
        },
        "oscillator3": {
          "waveform": "triangle",
          "octave": "0",
          "detune": 3,
          "mix": 62
        },
        "oscillator4": {
          "waveform": "sine",
          "octave": "0",
          "detune": 8,
          "mix": 58
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 35
        },
        "filterA": {
          "type": "lowpass",
          "cutoff": 2200,
          "resonance": 18,
          "drive": 6
        },
        "filterB": {
          "type": "highpass",
          "cutoff": 100,
          "resonance": 10,
          "drive": 0
        },
        "envelope": {
          "attack": 35,
          "decay": 320,
          "sustain": 75,
          "release": 420
        },
        "modulation": {
          "envToFilterA": 22,
          "lfo1ToPan": 28,
          "lfo2ToFilterB": 15
        },
        "stereoWidth": 95
      },
      "chain": {
        "pre": ["Vintage warmth processing"],
        "post": ["Fruily Reverb 2 - Hall, Decay 2.5s, Mix 16%"]
      },
      "characteristics": ["warm", "soulful", "classic", "emotional"],
      "genreTags": ["hip-hop/rap", "R&B", "soulful", "classic"],
      "a/bTesting": {
        "testA": "Subtle stereo for width",
        "testB": "Mono for classic punch"
      },
      "troubleshooting": {
        "tooDark": "Filter A cutoff to 2800Hz",
        "lacksWarmth": "Increase osc4 to 65%"
      }
    },
    "timbaland-exo": {
      "name": "Exo Beat Break",
      "inspiredBy": "Timbaland experimental hip-hop",
      "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter", "stereo-width"],
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "0",
          "detune": 0,
          "mix": 78
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "+1",
          "detune": 15,
          "mix": 68
        },
        "oscillator3": {
          "waveform": "square",
          "octave": "-1",
          "detune": 8,
          "mix": 55
        },
        "oscillator4": {
          "waveform": "triangle",
          "octave": "0",
          "detune": 25,
          "mix": 48
        },
        "subOscillator": {
          "waveform": "sine",
          "octave": "-2",
          "mix": 45
        },
        "filterA": {
          "type": "bandpass",
          "cutoff": 2500,
          "resonance": 48,
          "drive": 12
        },
        "filterB": {
          "type": "notch",
          "cutoff": 1500,
          "resonance": 35,
          "drive": 8
        },
        "envelope": {
          "attack": 8,
          "decay": 180,
          "sustain": 55,
          "release": 220
        },
        "modulation": {
          "envToFilterA": 58,
          "lfo1ToFilterB": 72,
          "lfo2ToPitch": 40
        },
        "stereoWidth": 160
      },
      "chain": {
        "pre": ["Unique pre-processing"],
        "post": ["Fruily Reverb 2 - Experimental, Decay 2s, Mix 30%", "Delay - Ping-pong, 450ms, Feedback 45%"]
      },
      "characteristics": ["experimental", "unconventional", "forward-thinking", "textural"],
      "genreTags": ["hip-hop/rap", "experimental", "innovative"],
      "a/bTesting": {
        "testA": "Extreme modulation for weird textures",
        "testB": "Milder modulation for usable sounds"
      },
      "troubleshooting": {
        "tooWeird": "Reduce LFO amounts to 30%",
        "notWeirdEnough": "Increase modulation diversity"
      }
    }
  }
}

```

---

## FILE: 02-Data\presets\genre\01-exo-808-beast.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo 808 Beast",
    "category": "genre",
    "genre": "hip-hop/rap",
    "mood": "dark",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter"]
  },
  "settings": {
    "oscillator1": { "waveform": "saw", "octave": "-2", "detune": 0, "mix": 70 },
    "oscillator2": { "waveform": "saw", "octave": "-2", "detune": 4, "mix": 65 },
    "oscillator3": { "waveform": "square", "octave": "-1", "detune": 0, "mix": 50 },
    "oscillator4": { "waveform": "triangle", "octave": "0", "detune": 3, "mix": 35 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 100 },
    "filterA": { "type": "lowpass", "cutoff": 200, "resonance": 30, "drive": 18 },
    "filterB": { "type": "lowpass", "cutoff": 4000, "resonance": 20, "drive": 5 },
    "envelope": { "attack": 4, "decay": 200, "sustain": 60, "release": 140 },
    "modulation": { "envToFilterA": 75, "lfo1ToPan": 35, "lfo2ToPitch": 8 }
  },
  "chain": {
    "pre": ["Fruily Parametric EQ 2 - High-pass 25Hz"],
    "post": ["Fruily Limiter - Threshold -14dB, Ratio 4:1, Attack 1ms, Release 35ms"]
  },
  "genreTags": ["hip-hop/rap", "trap", "dark", "aggressive"],
  "a/bTesting": {
    "testA": "Sub osc at 100% for maximum sub",
    "testB": "Sub osc at 70% for cleaner sub",
    "testC": "Osc4 adds harmonic complexity"
  },
  "troubleshooting": {
    "muddy": "Filter A cutoff to 150Hz",
    "clipping": "Reduce osc mix levels by 20%"
  }
}

```

---

## FILE: 02-Data\presets\genre\02-exo-soul-keys.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo Soul Keys",
    "category": "genre",
    "genre": "R&B",
    "mood": "moody",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "stereo-width"]
  },
  "settings": {
    "oscillator1": { "waveform": "sine", "octave": "0", "detune": 0, "mix": 85 },
    "oscillator2": { "waveform": "triangle", "octave": "0", "detune": 5, "mix": 70 },
    "oscillator3": { "waveform": "saw", "octave": "-1", "detune": 3, "mix": 45 },
    "oscillator4": { "waveform": "square", "octave": "0", "detune": 8, "mix": 30 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 0 },
    "filterA": { "type": "lowpass", "cutoff": 2500, "resonance": 18, "drive": 5 },
    "filterB": { "type": "highpass", "cutoff": 200, "resonance": 10, "drive": 0 },
    "envelope": { "attack": 60, "decay": 400, "sustain": 75, "release": 350 },
    "modulation": { "envToFilterA": 30, "lfo1ToPan": 50, "lfo2ToFilterB": 20 },
    "stereoWidth": 100
  },
  "chain": {
    "pre": ["Soft clipper - 1.5dB reduction"],
    "post": ["Fruily Reverb 2 - Hall, Decay 2.8s, Mix 22%", "Fruily Parametric EQ 2 - Bell +2dB at 3kHz"]
  },
  "genreTags": ["R&B", "smooth", "moody", "soulful"],
  "a/bTesting": {
    "testA": "LFO pan at 50% for gentle movement",
    "testB": "LFO pan off for static stereo field"
  },
  "troubleshooting": {
    "harshHighs": "Filter A cutoff to 2000Hz",
    "weakLowEnd": "Increase osc1 to 100%"
  }
}

```

---

## FILE: 02-Data\presets\genre\03-exo-stadium-supersaw.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo Stadium Supersaw",
    "category": "genre",
    "genre": "EDM",
    "mood": "electric",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter", "stereo-width"]
  },
  "settings": {
    "oscillator1": { "waveform": "saw", "octave": "0", "detune": 0, "mix": 85 },
    "oscillator2": { "waveform": "saw", "octave": "0", "detune": 7, "mix": 85 },
    "oscillator3": { "waveform": "saw", "octave": "0", "detune": 14, "mix": 80 },
    "oscillator4": { "waveform": "saw", "octave": "+1", "detune": 21, "mix": 65 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 0 },
    "filterA": { "type": "lowpass", "cutoff": 4200, "resonance": 48, "drive": 18 },
    "filterB": { "type": "lowpass", "cutoff": 8000, "resonance": 25, "drive": 8 },
    "envelope": { "attack": 15, "decay": 280, "sustain": 55, "release": 450 },
    "modulation": { "envToFilterA": 70, "lfo1ToFilterA": 45, "lfo2ToPitch": 12 },
    "stereoWidth": 120
  },
  "chain": {
    "pre": ["Soft clipper - 2.5dB reduction"],
    "post": ["Fruily Limiter - Ceiling -0.3dB, Gain 6dB", "Fruily Reverb 2 - Cathedral, Decay 4s, Mix 15%"]
  },
  "genreTags": ["EDM", "big room", "electric", "anthem"],
  "a/bTesting": {
    "testA": "4 oscillators for massive width",
    "testB": "3 oscillators for tighter mix",
    "testC": "Dual filter for spectral control"
  },
  "troubleshooting": {
    "muddy": "Filter B high-pass at 250Hz",
    "phasing": "Reduce stereo width to 100%"
  }
}

```

---

## FILE: 02-Data\presets\genre\04-exo-grim-reaper.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo Grim Reaper",
    "category": "genre",
    "genre": "drill",
    "mood": "dark",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter"]
  },
  "settings": {
    "oscillator1": { "waveform": "saw", "octave": "-2", "detune": 0, "mix": 90 },
    "oscillator2": { "waveform": "saw", "octave": "-2", "detune": 5, "mix": 85 },
    "oscillator3": { "waveform": "square", "octave": "-1", "detune": 0, "mix": 60 },
    "oscillator4": { "waveform": "saw", "octave": "0", "detune": 10, "mix": 40 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 100 },
    "filterA": { "type": "lowpass", "cutoff": 120, "resonance": 40, "drive": 25 },
    "filterB": { "type": "bandpass", "cutoff": 800, "resonance": 35, "drive": 15 },
    "envelope": { "attack": 6, "decay": 220, "sustain": 55, "release": 180 },
    "modulation": { "envToFilterA": 80, "lfo1ToPitch": 20, "lfo2ToFilterB": 30 }
  },
  "chain": {
    "pre": ["High-pass at 35Hz"],
    "post": ["Fruily Limiter - Threshold -12dB, Attack 0.5ms, Release 25ms, Ratio 6:1"]
  },
  "genreTags": ["drill", "dark", "heavy", "aggressive"],
  "a/bTesting": {
    "testA": "Pitch LFO for demonic sub movement",
    "testB": "Static pitch for pure heaviness"
  },
  "troubleshooting": {
    "tooDistorted": "Filter drive to 18%",
    "weakImpact": "Increase filter A resonance to 50%"
  }
}

```

---

## FILE: 02-Data\presets\genre\05-exo-dusty-vhs.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo Dusty VHS",
    "category": "genre",
    "genre": "lo-fi",
    "mood": "moody",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "stereo-width"]
  },
  "settings": {
    "oscillator1": { "waveform": "saw", "octave": "-1", "detune": 12, "mix": 70 },
    "oscillator2": { "waveform": "triangle", "octave": "-2", "detune": 18, "mix": 65 },
    "oscillator3": { "waveform": "square", "octave": "0", "detune": 8, "mix": 40 },
    "oscillator4": { "waveform": "sine", "octave": "-1", "detune": 25, "mix": 55 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 30 },
    "filterA": { "type": "lowpass", "cutoff": 1800, "resonance": 22, "drive": 8 },
    "filterB": { "type": "highpass", "cutoff": 150, "resonance": 15, "drive": 0 },
    "envelope": { "attack": 180, "decay": 600, "sustain": 80, "release": 1000 },
    "modulation": { "envToFilterA": 20, "lfo1ToPan": 65, "lfo2ToFilterB": 15 },
    "stereoWidth": 150
  },
  "chain": {
    "pre": ["Vintage Phaser - Mix 35%, Rate 0.25Hz"],
    "post": ["Fruily Reverb 2 - Room, Decay 2.5s, Mix 28%", "Tape Saturation - 4% drive"]
  },
  "genreTags": ["lo-fi", "moody", "chill", "nostalgic"],
  "a/bTesting": {
    "testA": "Heavy detune for tape warble",
    "testB": "Tighter detune for cleaner lo-fi"
  },
  "troubleshooting": {
    "tooNoisy": "Reduce LFO pan to 40%",
    "muddy": "Filter B high-pass at 200Hz"
  }
}

```

---

## FILE: 02-Data\presets\genre\06-exo-glitch-symphony.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo Glitch Symphony",
    "category": "genre",
    "genre": "trap",
    "mood": "dark",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter"]
  },
  "settings": {
    "oscillator1": { "waveform": "square", "octave": "+1", "detune": 0, "mix": 100 },
    "oscillator2": { "waveform": "saw", "octave": "0", "detune": 12, "mix": 75 },
    "oscillator3": { "waveform": "square", "octave": "0", "detune": 5, "mix": 60 },
    "oscillator4": { "waveform": "saw", "octave": "+1", "detune": 20, "mix": 50 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 0 },
    "filterA": { "type": "lowpass", "cutoff": 3200, "resonance": 50, "drive": 12 },
    "filterB": { "type": "bandpass", "cutoff": 1500, "resonance": 40, "drive": 8 },
    "envelope": { "attack": 1, "decay": 70, "sustain": 0, "release": 45 },
    "modulation": { "envToFilterA": 95, "lfo1ToPitch": 35, "lfo2ToFilterB": 45 }
  },
  "chain": {
    "pre": ["Teq4 - High-pass 600Hz"],
    "post": ["Fruily Reverb 2 - Plate, Decay 1s, Mix 20%", "Bitcrusher - 10-bit, 60% wet"]
  },
  "genreTags": ["trap", "dark", "glitch", "experimental"],
  "a/bTesting": {
    "testA": "Sample-hold LFO for random glitches",
    "testB": "Sine LFO for regular vibrato"
  },
  "troubleshooting": {
    "tooChaotic": "Reduce LFO amounts to 20%",
    "tooThin": "Add sub osc at 40%"
  }
}

```

---

## FILE: 02-Data\presets\genre\07-exo-sci-fi-textures.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo Sci-Fi Textures",
    "category": "genre",
    "genre": "experimental",
    "mood": "spacey",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter", "stereo-width"]
  },
  "settings": {
    "oscillator1": { "waveform": "saw", "octave": "0", "detune": 0, "mix": 80 },
    "oscillator2": { "waveform": "saw", "octave": "+1", "detune": 50, "mix": 70 },
    "oscillator3": { "waveform": "square", "octave": "-1", "detune": 25, "mix": 60 },
    "oscillator4": { "waveform": "triangle", "octave": "0", "detune": 75, "mix": 50 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 50 },
    "filterA": { "type": "lowpass", "cutoff": 5000, "resonance": 55, "drive": 15 },
    "filterB": { "type": "bandpass", "cutoff": 2500, "resonance": 45, "drive": 10 },
    "envelope": { "attack": 50, "decay": 800, "sustain": 70, "release": 1200 },
    "modulation": { "envToFilterA": 60, "lfo1ToFilterB": 80, "lfo2ToPitch": 50 },
    "stereoWidth": 200
  },
  "chain": {
    "pre": ["Fruily Parametric EQ 2 - Multi-band processing"],
    "post": ["Fruily Reverb 2 - Gated, Decay 1.5s, Mix 40%", "Delay - Stereo ping-pong, 600ms, Feedback 50%"]
  },
  "genreTags": ["experimental", "spacey", "cinematic", "ambient"],
  "a/bTesting": {
    "testA": "Extreme detune for metallic textures",
    "testB": "Tighter detune for harmonious clusters"
  },
  "troubleshooting": {
    "tooHarsh": "Filter A cutoff to 3500Hz",
    "lossOfControl": "Reduce modulation amounts by half"
  }
}

```

---

## FILE: 02-Data\presets\genre\08-exo-velvet-pad.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo Velvet Pad",
    "category": "genre",
    "genre": "R&B",
    "mood": "smooth",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "stereo-width"]
  },
  "settings": {
    "oscillator1": { "waveform": "sine", "octave": "-1", "detune": 0, "mix": 90 },
    "oscillator2": { "waveform": "triangle", "octave": "-1", "detune": 4, "mix": 75 },
    "oscillator3": { "waveform": "saw", "octave": "-2", "detune": 6, "mix": 50 },
    "oscillator4": { "waveform": "sine", "octave": "0", "detune": 10, "mix": 40 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 25 },
    "filterA": { "type": "lowpass", "cutoff": 3000, "resonance": 15, "drive": 3 },
    "filterB": { "type": "lowpass", "cutoff": 6000, "resonance": 10, "drive": 0 },
    "envelope": { "attack": 250, "decay": 500, "sustain": 85, "release": 800 },
    "modulation": { "envToFilterA": 15, "lfo1ToPan": 30, "lfo2ToFilterB": 10 },
    "stereoWidth": 110
  },
  "chain": {
    "pre": ["Vintage Chorus - Mix 40%, Rate 0.2Hz"],
    "post": ["Fruily Reverb 2 - Hall, Decay 3s, Mix 18%", "Fruily Parametric EQ 2 - High-shelf +1.5dB at 8kHz"]
  },
  "genreTags": ["R&B", "smooth", "moody", "romantic"],
  "a/bTesting": {
    "testA": "Gentle pan LFO for subtle movement",
    "testB": "Static for centered emotional focus"
  },
  "troubleshooting": {
    "tooDark": "Filter A cutoff to 4000Hz",
    "lacksWarmth": "Increase osc3 to 60%"
  }
}

```

---

## FILE: 02-Data\presets\signature\harry-fraud-exo.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo SSL Soul",
    "category": "signature",
    "inspiredBy": "Harry Fraud Brooklyn soul style",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter", "stereo-width"]
  },
  "settings": {
    "oscillator1": { "waveform": "saw", "octave": "-1", "detune": 0, "mix": 78 },
    "oscillator2": { "waveform": "saw", "octave": "-1", "detune": 5, "mix": 72 },
    "oscillator3": { "waveform": "triangle", "octave": "0", "detune": 3, "mix": 60 },
    "oscillator4": { "waveform": "sine", "octave": "0", "detune": 8, "mix": 55 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 20 },
    "filterA": { "type": "lowpass", "cutoff": 2000, "resonance": 20, "drive": 8 },
    "filterB": { "type": "highpass", "cutoff": 120, "resonance": 12, "drive": 0 },
    "envelope": { "attack": 45, "decay": 350, "sustain": 72, "release": 400 },
    "modulation": { "envToFilterA": 28, "lfo1ToPan": 35, "lfo2ToFilterB": 18 },
    "stereoWidth": 105
  },
  "chain": {
    "pre": ["SSL-style EQ emulation"],
    "post": ["Fruily Reverb 2 - Plate, Decay 1.8s, Mix 18%"]
  },
  "characteristics": ["warm", "smooth", "soulful", "classic"],
  "genreTags": ["hip-hop/rap", "R&B", "soulful"],
  "a/bTesting": {
    "testA": "Subtle stereo width for cohesion",
    "testB": "Mono for SSL-style punch"
  },
  "troubleshooting": {
    "tooWarm": "Increase filter A cutoff to 2500Hz",
    "lacksLowEnd": "Sub osc to 40%"
  }
}

```

---

## FILE: 02-Data\presets\signature\just-blaze-exo.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo Classic Soul",
    "category": "signature",
    "inspiredBy": "Just Blaze soulful hip-hop",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter", "stereo-width"]
  },
  "settings": {
    "oscillator1": { "waveform": "saw", "octave": "-1", "detune": 0, "mix": 75 },
    "oscillator2": { "waveform": "saw", "octave": "-1", "detune": 5, "mix": 70 },
    "oscillator3": { "waveform": "triangle", "octave": "0", "detune": 3, "mix": 62 },
    "oscillator4": { "waveform": "sine", "octave": "0", "detune": 8, "mix": 58 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 35 },
    "filterA": { "type": "lowpass", "cutoff": 2200, "resonance": 18, "drive": 6 },
    "filterB": { "type": "highpass", "cutoff": 100, "resonance": 10, "drive": 0 },
    "envelope": { "attack": 35, "decay": 320, "sustain": 75, "release": 420 },
    "modulation": { "envToFilterA": 22, "lfo1ToPan": 28, "lfo2ToFilterB": 15 },
    "stereoWidth": 95
  },
  "chain": {
    "pre": ["Vintage warmth processing"],
    "post": ["Fruily Reverb 2 - Hall, Decay 2.5s, Mix 16%"]
  },
  "characteristics": ["warm", "soulful", "classic", "emotional"],
  "genreTags": ["hip-hop/rap", "R&B", "soulful", "classic"],
  "a/bTesting": {
    "testA": "Subtle stereo for width",
    "testB": "Mono for classic punch"
  },
  "troubleshooting": {
    "tooDark": "Filter A cutoff to 2800Hz",
    "lacksWarmth": "Increase osc4 to 65%"
  }
}

```

---

## FILE: 02-Data\presets\signature\metro-boomin-exo.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo Boomin System",
    "category": "signature",
    "inspiredBy": "Metro Boomin modern trap production",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter"]
  },
  "settings": {
    "oscillator1": { "waveform": "saw", "octave": "-2", "detune": 0, "mix": 80 },
    "oscillator2": { "waveform": "saw", "octave": "-2", "detune": 4, "mix": 75 },
    "oscillator3": { "waveform": "saw", "octave": "-1", "detune": 0, "mix": 55 },
    "oscillator4": { "waveform": "square", "octave": "-1", "detune": 3, "mix": 45 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 100 },
    "filterA": { "type": "lowpass", "cutoff": 180, "resonance": 32, "drive": 20 },
    "filterB": { "type": "lowpass", "cutoff": 350, "resonance": 20, "drive": 8 },
    "envelope": { "attack": 5, "decay": 180, "sustain": 65, "release": 120 },
    "modulation": { "envToFilterA": 72, "lfo1ToPan": 20, "lfo2ToFilterB": 15 }
  },
  "chain": {
    "post": ["Fruily Limiter - Threshold -15dB, Ratio 4:1, Attack 0.5ms, Release 30ms"]
  },
  "characteristics": ["deep", "punchy", "modern", "cleansounding"],
  "genreTags": ["hip-hop/rap", "trap", "modern"],
  "a/bTesting": {
    "testA": "4 oscillators for modern complexity",
    "testB": "2 oscillators for classic 808"
  },
  "troubleshooting": {
    "notDeepEnough": "Increase sub osc to 100%",
    "muddyMix": "Filter A cutoff to 140Hz"
  }
}

```

---

## FILE: 02-Data\presets\signature\mike-will-exo.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo Future Past",
    "category": "signature",
    "inspiredBy": "Mike Will Made-It futuristic style",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter", "stereo-width"]
  },
  "settings": {
    "oscillator1": { "waveform": "saw", "octave": "0", "detune": 0, "mix": 82 },
    "oscillator2": { "waveform": "saw", "octave": "0", "detune": 7, "mix": 80 },
    "oscillator3": { "waveform": "saw", "octave": "+1", "detune": 14, "mix": 65 },
    "oscillator4": { "waveform": "square", "octave": "0", "detune": 21, "mix": 50 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 0 },
    "filterA": { "type": "lowpass", "cutoff": 3800, "resonance": 42, "drive": 15 },
    "filterB": { "type": "lowpass", "cutoff": 7000, "resonance": 28, "drive": 8 },
    "envelope": { "attack": 12, "decay": 260, "sustain": 58, "release": 380 },
    "modulation": { "envToFilterA": 62, "lfo1ToFilterB": 48, "lfo2ToPan": 32 },
    "stereoWidth": 125
  },
  "chain": {
    "pre": ["Soft clipper - 2dB"],
    "post": ["Fruily Reverb 2 - Gated, Decay 1.5s, Mix 22%", "Delay - 320ms, Feedback 35%"]
  },
  "characteristics": ["futuristic", "wide", "bright", "innovative"],
  "genreTags": ["hip-hop/rap", "R&B", "future bass", "experimental"],
  "a/bTesting": {
    "testA": "4 oscillators for maximum width",
    "testB": "2 oscillators for classic saw"
  },
  "troubleshooting": {
    "tooBusy": "Filter B cutoff to 5000Hz",
    "lacksFuture": "Increase modulation amounts"
  }
}

```

---

## FILE: 02-Data\presets\signature\murda-beatz-exo.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo Melody King",
    "category": "signature",
    "inspiredBy": "Murda Beatz melodic trap style",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter", "stereo-width"]
  },
  "settings": {
    "oscillator1": { "waveform": "saw", "octave": "-1", "detune": 0, "mix": 80 },
    "oscillator2": { "waveform": "saw", "octave": "-1", "detune": 5, "mix": 75 },
    "oscillator3": { "waveform": "triangle", "octave": "0", "detune": 3, "mix": 65 },
    "oscillator4": { "waveform": "square", "octave": "0", "detune": 8, "mix": 50 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 0 },
    "filterA": { "type": "lowpass", "cutoff": 1200, "resonance": 28, "drive": 10 },
    "filterB": { "type": "lowpass", "cutoff": 4500, "resonance": 18, "drive": 5 },
    "envelope": { "attack": 15, "decay": 280, "sustain": 68, "release": 300 },
    "modulation": { "envToFilterA": 45, "lfo1ToFilterB": 35, "lfo2ToPan": 25 },
    "stereoWidth": 115
  },
  "chain": {
    "post": ["Fruily Reverb 2 - Hall, Decay 2s, Mix 20%", "Fruily Limiter - Soft knee"]
  },
  "characteristics": ["melodic", "bright", "emotional", "groove"],
  "genreTags": ["hip-hop/rap", "trap", "melodic"],
  "a/bTesting": {
    "testA": "Dual filter for harmonic complexity",
    "testB": "Single filter for focused sound"
  },
  "troubleshooting": {
    "tooDark": "Filter B cutoff to 5500Hz",
    "muddyChords": "Filter A cutoff to 1000Hz"
  }
}

```

---

## FILE: 02-Data\presets\signature\ska-gregory-exo.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo Cash Money",
    "category": "signature",
    "inspiredBy": "Ska Gregory New Orleans bounce",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "stereo-width"]
  },
  "settings": {
    "oscillator1": { "waveform": "saw", "octave": "-2", "detune": 0, "mix": 88 },
    "oscillator2": { "waveform": "saw", "octave": "-2", "detune": 4, "mix": 82 },
    "oscillator3": { "waveform": "square", "octave": "-1", "detune": 0, "mix": 65 },
    "oscillator4": { "waveform": "saw", "octave": "0", "detune": 8, "mix": 55 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 95 },
    "filterA": { "type": "lowpass", "cutoff": 250, "resonance": 30, "drive": 15 },
    "filterB": { "type": "lowpass", "cutoff": 500, "resonance": 22, "drive": 8 },
    "envelope": { "attack": 6, "decay": 140, "sustain": 60, "release": 110 },
    "modulation": { "envToFilterA": 68, "lfo1ToPan": 25, "lfo2ToPitch": 8 },
    "stereoWidth": 90
  },
  "chain": {
    "post": ["Fruily Limiter - Punchy settings, fast release"]
  },
  "characteristics": ["bouncy", "party", "fun", "uplifting"],
  "genreTags": ["hip-hop/rap", "bounce", "party"],
  "a/bTesting": {
    "testA": "Fast decay for bouncy feel",
    "testB": "Longer decay for smoother flow"
  },
  "troubleshooting": {
    "notBouncy": "Envelope decay to 120ms",
    "tooBoomy": "Filter A cutoff to 200Hz"
  }
}

```

---

## FILE: 02-Data\presets\signature\tay-keith-exo.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo Gunna Wet",
    "category": "signature",
    "inspiredBy": "Tay Keith trap style with Wet",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "stereo-width"]
  },
  "settings": {
    "oscillator1": { "waveform": "saw", "octave": "-1", "detune": 0, "mix": 85 },
    "oscillator2": { "waveform": "saw", "octave": "-1", "detune": 7, "mix": 80 },
    "oscillator3": { "waveform": "square", "octave": "0", "detune": 4, "mix": 55 },
    "oscillator4": { "waveform": "triangle", "octave": "0", "detune": 12, "mix": 45 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 0 },
    "filterA": { "type": "lowpass", "cutoff": 800, "resonance": 35, "drive": 12 },
    "filterB": { "type": "bandpass", "cutoff": 2000, "resonance": 25, "drive": 8 },
    "envelope": { "attack": 10, "decay": 200, "sustain": 62, "release": 250 },
    "modulation": { "envToFilterA": 55, "lfo1ToPan": 40, "lfo2ToFilterB": 30 },
    "stereoWidth": 140
  },
  "chain": {
    "post": ["Fruily Reverb 2 - Large Room, Decay 2.2s, Mix 25%", "Fruily Compressor - Soft attack"]
  },
  "characteristics": ["smooth", "wet", "melodic", "atmospheric"],
  "genreTags": ["hip-hop/rap", "trap", "melodic", "atmospheric"],
  "a/bTesting": {
    "testA": "Heavy reverb for atmospheric feel",
    "testB": "Less reverb for drier mix"
  },
  "troubleshooting": {
    "tooWashed": "Reduce reverb mix to 15%",
    "lacksClarity": "Bandpass filter B at 2500Hz"
  }
}

```

---

## FILE: 02-Data\presets\signature\timbaland-exo.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo Beat Break",
    "category": "signature",
    "inspiredBy": "Timbaland experimental hip-hop",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "dual-filter", "stereo-width"]
  },
  "settings": {
    "oscillator1": { "waveform": "saw", "octave": "0", "detune": 0, "mix": 78 },
    "oscillator2": { "waveform": "saw", "octave": "+1", "detune": 15, "mix": 68 },
    "oscillator3": { "waveform": "square", "octave": "-1", "detune": 8, "mix": 55 },
    "oscillator4": { "waveform": "triangle", "octave": "0", "detune": 25, "mix": 48 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 45 },
    "filterA": { "type": "bandpass", "cutoff": 2500, "resonance": 48, "drive": 12 },
    "filterB": { "type": "notch", "cutoff": 1500, "resonance": 35, "drive": 8 },
    "envelope": { "attack": 8, "decay": 180, "sustain": 55, "release": 220 },
    "modulation": { "envToFilterA": 58, "lfo1ToFilterB": 72, "lfo2ToPitch": 40 },
    "stereoWidth": 160
  },
  "chain": {
    "pre": ["Unique pre-processing"],
    "post": ["Fruily Reverb 2 - Experimental, Decay 2s, Mix 30%", "Delay - Ping-pong, 450ms, Feedback 45%"]
  },
  "characteristics": ["experimental", "unconventional", "forward-thinking", "textural"],
  "genreTags": ["hip-hop/rap", "experimental", "innovative"],
  "a/bTesting": {
    "testA": "Extreme modulation for weird textures",
    "testB": "Milder modulation for usable sounds"
  },
  "troubleshooting": {
    "tooWeird": "Reduce LFO amounts to 30%",
    "notWeirdEnough": "Increase modulation diversity"
  }
}

```

---

## FILE: 02-Data\presets\signature\wheezy-exo.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo Paperboy",
    "category": "signature",
    "inspiredBy": "Wheezy ATL trap style",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "stereo-width"]
  },
  "settings": {
    "oscillator1": { "waveform": "saw", "octave": "-2", "detune": 0, "mix": 85 },
    "oscillator2": { "waveform": "saw", "octave": "-2", "detune": 6, "mix": 80 },
    "oscillator3": { "waveform": "square", "octave": "0", "detune": 0, "mix": 60 },
    "oscillator4": { "waveform": "saw", "octave": "0", "detune": 10, "mix": 50 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 90 },
    "filterA": { "type": "lowpass", "cutoff": 220, "resonance": 38, "drive": 18 },
    "filterB": { "type": "highpass", "cutoff": 80, "resonance": 15, "drive": 0 },
    "envelope": { "attack": 4, "decay": 160, "sustain": 58, "release": 100 },
    "modulation": { "envToFilterA": 78, "lfo1ToPan": 45, "lfo2ToPitch": 12 },
    "stereoWidth": 130
  },
  "chain": {
    "post": ["Fruily Compressor - Attack 8ms, Release 70ms, Ratio 3:1"]
  },
  "characteristics": ["aggressive", "bright", "modern", "punchy"],
  "genreTags": ["hip-hop/rap", "trap", "ATL"],
  "a/bTesting": {
    "testA": "Pan LFO for stereo movement",
    "testB": "Pan LFO off for mono impact"
  },
  "troubleshooting": {
    "tooHarsh": "Reduce osc4 mix to 35%",
    "lacksPunch": "Increase filter drive to 25%"
  }
}

```

---

## FILE: 02-Data\presets\signature\zaytoven-exo.json

```json
{
  "metadata": {
    "plugin": "Kepler Exo",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Exo MIDI Pluck Deluxe",
    "category": "signature",
    "inspiredBy": "Zaytoven piano-driven production",
    "exoFeatures": ["sub-oscillator", "expanded-modulation", "stereo-width"]
  },
  "settings": {
    "oscillator1": { "waveform": "square", "octave": "+1", "detune": 0, "mix": 100 },
    "oscillator2": { "waveform": "triangle", "octave": "0", "detune": 4, "mix": 70 },
    "oscillator3": { "waveform": "saw", "octave": "0", "detune": 6, "mix": 50 },
    "oscillator4": { "waveform": "sine", "octave": "+1", "detune": 3, "mix": 40 },
    "subOscillator": { "waveform": "sine", "octave": "-2", "mix": 0 },
    "filterA": { "type": "lowpass", "cutoff": 3000, "resonance": 38, "drive": 8 },
    "filterB": { "type": "highpass", "cutoff": 150, "resonance": 15, "drive": 0 },
    "envelope": { "attack": 2, "decay": 55, "sustain": 0, "release": 35 },
    "modulation": { "envToFilterA": 88, "lfo1ToPan": 20, "lfo2ToPitch": 5 },
    "stereoWidth": 85
  },
  "chain": {
    "post": ["Fruily Reverb 2 - Small Room, Decay 0.6s, Mix 12%", "Fruily Compressor - Fast attack"]
  },
  "characteristics": ["plucky", "bright", "melodic", "classic"],
  "genreTags": ["hip-hop/rap", "R&B", "melodic", "piano"],
  "a/bTesting": {
    "testA": "Square wave for classic MIDI",
    "testB": "Saw for modern edge"
  },
  "troubleshooting": {
    "tooClicky": "Attack to 4ms",
    "sustainingTooLong": "Sustain at 0, decay to 45ms"
  }
}

```

---

## FILE: 02-Data\rules\kepler-exo-safety-rules.md

```markdown
# Kepler Exo Safety Rules

## Critical Settings

### Gain Staging
- Always maintain -6dB to -12dB headroom on output before external processing
- Individual oscillator levels should not exceed 75% when using multiple oscillators
- Sub oscillator (Exo-only) should be set to 85% to prevent low-end buildup
- Monitor input levels in Fruity Limiter; red means reduce

### Resonance Dangers
- Resonances above 70% create self-oscillation that can damage speakers
- Recommended maximum: 55% for sustained notes, 70% for short plucks
- When resonance causes distortion, reduce by 10% increments
- High resonance with high filter drive = speaker stress

### CPU Management
- Exo adds 2 additional oscillators and expanded modulation
- Each voice uses approximately 3.5% CPU on average systems
- Voices = CPU usage; reduce polyphony when not needed
- Mono mode saves 40% CPU vs stereo polyphony
- Unused modulation sources still consume CPU; disable them

### Filter Safety
- Never drive filter input above -6dB when using high resonance
- Self-oscillation from extreme settings can generate ultrasonic frequencies
- Low-pass filter at maximum cutoff can still pass harsh frequencies
- Always high-pass sounds that don't need sub frequencies

### Modulation Depth Limits
- Modulation depth over 100% creates unwanted harmonic distortion
- Recommended modulation range: 25-75% for musical results
- Audio-rate modulation (over 20Hz) creates FM-like sidebands
- Test all modulation at low volume before full sessions

## Quick-Fix Paths

| Problem | Immediate Fix |
|---------|---------------|
| Distorted output | Reduce all oscillator levels by 15% |
| Dull sound | Check if filter is in "Exo LPF" mode with low cutoff |
| No sub bass | Enable Sub Oscillator and route to output |
| Clicking on attacks | Increase envelope attack by 5-10ms |
| Phase issues | Check oscillator sync settings |
| CPU overload | Switch to Mono mode, reduce polyphony |
| Self-oscillation | Reduce filter resonance by 20% |
| Harsh highs | Enable Exo "Warmth" mode (6dB/oct filter) |
| Modulation not working | Verify modulation routing is active (green indicator) |
| Unexpected pitch | Check transpose settings in pitch section |

## Session Checklist

- [ ] Set master output to -6dB before mixing
- [ ] Enable Sub Osc for any bass sounds
- [ ] Start with resonance below 50%
- [ ] Disable unused modulation routings
- [ ] Set appropriate polyphony for instrument type
- [ ] Save safety template with these settings
- [ ] Test at high volume before mixing
- [ ] Monitor for self-oscillation on loud notes
- [ ] Check CPU meter during dense chords
- [ ] Backup patches before radical changes

## Genre-Specific Safety

### Hip-Hop/Bass
- Sub Osc must be enabled and at 100%
- Filter resonance never above 45% for 808s
- High-pass everything below 30Hz except bass
- Mono bass channel mandatory

### R&B/Keys
- Poly mode at 6-8 voices
- Resonance below 35% for clean tones
- Use "Warmth" mode for vintage feel
- Stereo width between 80-120%

### EDM/Leads
- Higher resonance acceptable (50-60%)
- Filter drive up to 25% for character
- Mono mode during drops, stereo for builds
- CPU management critical during drops

```

---

## FILE: 03-Workflows\by-goal\evolving-textures-matrix.md

```markdown
# Workflow: Evolving Textures (Vibey/Psychedelic)

*Goal: Using the 8-slot Modulation Matrix to create complex, shifting, and atmospheric pads that never sound the same twice.*

## Vibe Mapping
- **Vibey:** ⭐⭐⭐⭐⭐ (Primary)
- **Psychedelic:** ⭐⭐⭐⭐⭐ (Primary)
- **Moody:** ⭐⭐⭐⭐

## 🚶 Step-by-Step Setup
1. **The Dual-Osc Base:**
   - **DCO 1:** Sawtooth.
   - **DCO 2:** Pulse.
   - **Detune (Fine):** Set DCO 2 to **+7 cents** for natural beating.
2. **The Matrix (Motion Strategy):**
   - **Slot 1:** Source: **LFO 1**, Destination: **Filter Cutoff**, Amount: **+30%** (Slow rhythmic movement).
   - **Slot 2:** Source: **LFO 2**, Destination: **PWM**, Amount: **+50%** (Harmonic shifting).
   - **Slot 3:** Source: **Env 2**, Destination: **DCO 2 Level**, Amount: **-40%** (The second oscillator fades out as the note is held).
   - **Slot 4:** Source: **Mod Wheel**, Destination: **FX Reverb Mix**, Amount: **+80%** (Performative depth).
3. **LFO Setup:**
   - **LFO 1:** Sine wave, synced to 1/1 bar.
   - **LFO 2:** Random/S&H wave, slow rate (creates "organic" unpredictable changes).
4. **The Filter (HQ Mode):**
   - Enable **HQ Filter**.
   - Set **Freq** to 35%.
   - Set **Resonance** to 20%.
5. **The "Expensive" Space:**
   - Turn on **Chorus I+II** and a large **Reverb**.

## 🔄 Variations
- **The "Dreamy Underwater" Pad:** Set **LP Filter** to 500Hz and map **LFO 1** to **Pan**.
- **The "Glitchy Atmosphere":** Map a fast **Random LFO** to **DCO 2 Semi** (at a very low amount, e.g., 2%).

## ⚠️ Pitfalls & Fixes
- **Problem:** The sound is too "chaotic."
- **Fix:** Lower the **Amount** in the Matrix slots. Subtle modulation (5–15%) is often more effective than extreme values.
- **Problem:** CPU spiking.
- **Fix:** Disable **HQ Filter** mode if you have multiple instances of Exo running.

## 🎚️ Automation Ideas
- **Texture Morph:** Automate the **LFO 2 Rate** to speed up during the bridge of the song.
- **Matrix Intensity:** If your DAW allows, automate the **Master Modulation Depth** (if available) or the individual Matrix amounts.

```

---

## FILE: 03-Workflows\by-goal\metallic-fm-perc.md

```markdown
# Workflow: Metallic FM Percussion (Psychedelic/Jazzy)

*Goal: Using Cross-Modulation (FM) and short envelopes to create bell-like, metallic, and "glitchy" percussive elements.*

## Vibe Mapping
- **Psychedelic:** ⭐⭐⭐⭐⭐ (Primary)
- **Jazzy:** ⭐⭐⭐ (For "organic" bell hits)
- **Upbeat:** ⭐⭐⭐ (For percussive ear candy)

## 🚶 Step-by-Step Setup
1. **The FM Engine:**
   - **DCO 1:** Square wave. (This is the "Carrier").
   - **DCO 2:** Square wave. (This is the "Modulator").
   - Set **DCO 2 Semi** to **+19** (an octave and a fifth) or **+7**. These non-unison ratios create metallic harmonics.
2. **The "Ring" (Cross-Mod):**
   - Increase **X-Mod** to **60–80%**. You should hear a metallic, bell-like clang.
3. **The Percussive Shape (ADSR):**
   - **Attack:** 0.
   - **Decay:** Very short (100–300ms).
   - **Sustain:** 0.
   - **Release:** Very short.
4. **Filter Sculpting:**
   - Set **Filter Freq** to 50%.
   - Set **Resonance** to 60%.
   - Map **Env 2** to **Filter Cutoff** with a positive amount for a "snap."
5. **Texture:**
   - Add 20% **Noise** to add a "shaker" or "hit" character to the start of the sound.

## 🔄 Variations
- **The "Digital Cowbell":** Set **DCO 2 Semi** to specific dissonant ratios and keep the filter open.
- **The "Organic Kalimba":** Lower the **X-Mod** and use the **HQ Filter** with high resonance to create a "woody" pluck.

## ⚠️ Pitfalls & Fixes
- **Problem:** The sound is too "harsh" or "noisy."
- **Fix:** Lower the **X-Mod** or the **DCO 2 Level**. FM can get messy very quickly.
- **Problem:** It sounds too "thin."
- **Fix:** Add a bit of **Sub-Oscillator** (even 10-20%) to ground the metallic clang.

## 🎚️ Automation Ideas
- **Dynamic Clang:** Map **Velocity** to **X-Mod** in the Matrix. This makes the sound more metallic the harder you play—just like a real metal instrument.
- **Glitch Roll:** Automate the **DCO 2 Semi** pitch during a drum fill.

```

---

## FILE: 03-Workflows\by-goal\modern-analog-leads.md

```markdown
# Workflow: Modern Analog Leads (Upbeat/Aggressive)

*Goal: Creating the iconic "tearing" sync lead—aggressive, bright, and cutting—using Kepler Exo's dual-oscillator sync engine.*

## Vibe Mapping
- **Upbeat:** ⭐⭐⭐⭐⭐ (Primary)
- **Psychedelic:** ⭐⭐⭐⭐ (With high resonance)
- **Moody:** ⭐⭐ (If filtered dark)

## 🎛️ Routing Context
- **Preferred:** Insert chain with a bit of "OTT" style compression after the plugin.
- **Mix Status:** 100% Dry/Wet on the synth (Effect logic is internal).

## 🚶 Step-by-Step Setup
1. **The Sync Core:**
   - **DCO 1:** Select **Sawtooth**. This is your "Master" clock.
   - **DCO 2:** Select **Sawtooth**. This is your "Slave" oscillator.
   - Engage the **SYNC** button.
2. **The "Tear" (Pitch Modulation):**
   - Go to the **Modulation Matrix**.
   - Slot 1: **Source = Env 2**, **Destination = DCO 2 Semi (or Pitch)**.
   - Set **Amount** to **+100%**.
3. **The Envelope (Env 2):**
   - **Attack:** 0 (Instant).
   - **Decay:** Moderate (400–800ms).
   - **Sustain:** 0.
   - **Listen:** As you play, the DCO 2 pitch "rips" downward, creating the classic sync sweep.
4. **The Grit (Saturation):**
   - Turn on the built-in **Saturator** and drive it to **30%**.
5. **The Space:**
   - Engage **Chorus II** and add a bit of built-in **Delay**.

## 🔄 Variations
- **The "Screaming" Lead:** Increase **Filter Resonance** to 70% in **STD Mode**.
- **The "Industrial" Lead:** Add **Noise** and use **DCO 1 Audio Mod** to "growl" the filter.

## ⚠️ Pitfalls & Fixes
- **Problem:** The sync sound is too "harsh" or "piercing."
- **Fix:** Switch the Filter to **6dB slope** for a gentler rolloff, or lower the **LP Filter**.
- **Problem:** The "rip" is too fast.
- **Fix:** Increase the **Decay** time on **Env 2**.

## 🎚️ Automation Ideas
- **Sync Warp:** Automate the **Semi** pitch of **DCO 2** manually (or with a Mod Wheel) to create manual "screams."
- **Drive Build:** Automate the **Saturation Drive** to increase during a transition.

```

---

## FILE: 03-Workflows\by-instrument\01-bass-workflows.md

```markdown
# Kepler Exo Bass Workflows

## Exo 808 Beast

### Sound Profile
Massive, modern 808 with 4 oscillators + sub oscillator for extreme low-end presence.

### Recommended Preset
`genre/01-exo-808-beast.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 70% | Sub harmonics |
| Oscillator 2 | Saw, -2 octave, 65% | Thickness |
| Oscillator 3 | Square, -1 octave, 50% | Click/Attack |
| Oscillator 4 | Triangle, 0 octave, 35% | Harmonics |
| Sub Oscillator | Sine, -2 octave, 100% | Foundation |
| Filter A | Lowpass, 200Hz, Res 30, Drive 18 | Main tone |
| Filter B | Lowpass, 4000Hz, Res 20, Drive 5 | High control |
| Envelope | A:4, D:200, S:60, R:140 | Punch |
| Modulation | Env→FilterA: 75%, LFO1→Pan: 35% | Movement |

### Exo-Specific Advantages
- **Sub Oscillator:** Dedicated low-end without affecting harmonics
- **Dual Filter:** Independent sub and harmonic control
- **4 Oscillators:** Layered harmonic complexity
- **Expanded Modulation:** More movement possibilities

### Genre Variations
- **Modern Trap:** Increase FilterA resonance to 38%, add LFO2→Pitch (8%)
- **Hip-Hop Classic:** Reduce osc3/4 mix, warmer FilterA drive (12%)
- **Dark Drill:** Increase FilterA drive to 25%, faster LFO1 (0.5Hz)
- **R&B Smooth:** Softer attack (10ms), reduced FilterA drive (12%)

### Chain Processing
`\`\`
Kepler Exo → Fruity Parametric EQ 2
  - High-pass: 25Hz
  → Fruity Limiter
  - Threshold: -14dB
  - Ratio: 4:1
  - Attack: 1ms
  - Release: 35ms
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Sub Oscillator to 100% |
| More punch | Increase FilterA resonance to 38% |
| More grit | Increase FilterA drive to 22% |
| Cleaner sound | Reduce osc3/4 to 30% each |
| More movement | Increase LFO1 pan to 45% |

### Layering Strategies
- **Quad Layer:** All 4 oscillators + sub for maximum impact
- **Trio Layer:** Osc1 + Osc2 + sub for classic 808
- **Dual Layer:** Osc1 + sub for pure sub
- **Solo Sub:** Sub only, osc1-4 at 0%

---

## Exo Grim Reaper

### Sound Profile
Extreme drill bass with menacing harmonics and dark texture.

### Recommended Preset
`genre/04-exo-grim-reaper.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 90% | Weight |
| Oscillator 2 | Saw, -2 octave, 85% | Thickness |
| Oscillator 3 | Square, -1 octave, 60% | Aggression |
| Oscillator 4 | Saw, 0 octave, 40% | Dissonance |
| Sub Oscillator | Sine, -2 octave, 100% | Core |
| Filter A | Lowpass, 120Hz, Res 40, Drive 25 | Darkness |
| Filter B | Bandpass, 800Hz, Res 35, Drive 15 | Texture |
| Envelope | A:6, D:220, S:55, R:180 | Heaviness |
| Modulation | Env→FilterA: 80%, LFO1→Pitch: 20% | Demonic |

### Chain Processing
`\`\`
Kepler Exo → High-pass at 35Hz
  → Fruity Limiter
  - Threshold: -12dB
  - Ratio: 6:1
  - Attack: 0.5ms
  - Release: 25ms
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More menacing | Increase LFO1→Pitch to 28% |
| Darker | Reduce FilterA cutoff to 100Hz |
| More aggressive | Increase FilterB drive to 20% |
| Cleaner sub | Increase FilterA cutoff to 150Hz |

---

## Exo Soul Keys Bass

### Sound Profile
Warm, smooth bass for R&B with vintage character.

### Recommended Preset
`genre/02-exo-soul-keys.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, 0 octave, 85% | Core tone |
| Oscillator 2 | Triangle, 0 octave, 70% | Warmth |
| Oscillator 3 | Saw, -1 octave, 45% | Body |
| Oscillator 4 | Square, 0 octave, 30% | Clarity |
| Sub Oscillator | Sine, -2 octave, 20% | Foundation |
| Filter A | Lowpass, 2500Hz, Res 18, Drive 5 | Smooth |
| Filter B | Highpass, 200Hz, Res 10, Drive 0 | Cleanup |
| Envelope | A:60, D:400, S:75, R:350 | Flow |
| Modulation | Env→FilterA: 30%, LFO1→Pan: 50% | Gentle |

### Chain Processing
`\`\`
Kepler Exo → Soft Clipper
  - Input reduction: 1.5dB
  → Fruity Reverb 2
  - Type: Hall
  - Decay: 2.8s
  - Mix: 22%
  → Fruity Parametric EQ 2
  - Bell +2dB at 3kHz
`\`\`

---

## Bass Workflow Summary

### By Genre
| Genre | Preset | Sub Setting | Key Tweaks |
|-------|--------|-------------|------------|
| Trap | Exo 808 Beast | 100% | FilterA res 35%, LFO on |
| Drill | Exo Grim Reaper | 100% | FilterA drive 25%, pitch LFO |
| R&B | Exo Soul Keys | 20% | Stereo width, warm filters |
| Hip-Hop | Exo 808 Beast | 90% | Classic tone, moderate drive |
| EDM | Stadium Supersaw | 0% | High resonance, filter sweeps |

### Exo Advantages Over Standard Kepler
| Feature | Standard Kepler | Kepler Exo |
|---------|----------------|-----------|
| Sub Oscillator | No | Yes, dedicated |
| Oscillators | 3 max | 4 + sub |
| Filters | 1 | 2 (A and B) |
| Modulation | Basic | Expanded |
| Stereo Width | Limited | More options |
| CPU Usage | Lower | Higher |

### Quick Tweaks Reference
| Sound | Osc1-4 Mix | Sub | FilterA | Modulation |
|-------|------------|-----|---------|------------|
| Pure sub | 0% | 100% | 100Hz | None |
| Classic 808 | 70% | 100% | 180Hz | Light LFO |
| Modern trap | 80% | 100% | 200Hz | Full LFO |
| R&B smooth | 75% | 20% | 2500Hz | Pan LFO |
| Drill heavy | 90% | 100% | 120Hz | Pitch LFO |

```

---

## FILE: 03-Workflows\by-instrument\01-exo-808-beast.md

```markdown
# Exo 808 Beast Workflow

## Sound Profile
Massive, modern 808 with 4 oscillators + sub oscillator for extreme low-end presence.

## Recommended Preset
`genre/01-exo-808-beast.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 70% | Sub harmonics |
| Oscillator 2 | Saw, -2 octave, 65% | Thickness |
| Oscillator 3 | Square, -1 octave, 50% | Click/Attack |
| Oscillator 4 | Triangle, 0 octave, 35% | Harmonics |
| Sub Oscillator | Sine, -2 octave, 100% | Foundation |
| Filter A | Lowpass, 200Hz, Res 30, Drive 18 | Main tone |
| Filter B | Lowpass, 4000Hz, Res 20, Drive 5 | High control |
| Envelope | A:4, D:200, S:60, R:140 | Punch |
| Modulation | Env→FilterA: 75%, LFO1→Pan: 35% | Movement |

## Exo-Specific Advantages
- **Sub Oscillator:** Dedicated low-end without affecting harmonics
- **Dual Filter:** Independent sub and harmonic control
- **4 Oscillators:** Layered harmonic complexity
- **Expanded Modulation:** More movement possibilities

## Genre Variations
- **Modern Trap:** Increase FilterA resonance to 38%, add LFO2→Pitch (8%)
- **Hip-Hop Classic:** Reduce osc3/4 mix, warmer FilterA drive (12%)
- **Dark Drill:** Increase FilterA drive to 25%, faster LFO1 (0.5Hz)

## Chain Processing
`\`\`
Kepler Exo → Fruily Parametric EQ 2
  - High-pass: 25Hz
  → Fruily Limiter
  - Threshold: -14dB
  - Ratio: 4:1
  - Attack: 1ms
  - Release: 35ms
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Sub Oscillator to 100% |
| More punch | Increase FilterA resonance to 38% |
| More grit | Increase FilterA drive to 22% |
| Cleaner sound | Reduce osc3/4 to 30% each |
| More movement | Increase LFO1 pan to 45% |

```

---

## FILE: 03-Workflows\by-instrument\02-exo-grim-reaper.md

```markdown
# Exo Grim Reaper Workflow

## Sound Profile
Extreme drill bass with menacing harmonics and dark texture.

## Recommended Preset
`genre/04-exo-grim-reaper.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 90% | Weight |
| Oscillator 2 | Saw, -2 octave, 85% | Thickness |
| Oscillator 3 | Square, -1 octave, 60% | Aggression |
| Oscillator 4 | Saw, 0 octave, 40% | Dissonance |
| Sub Oscillator | Sine, -2 octave, 100% | Core |
| Filter A | Lowpass, 120Hz, Res 40, Drive 25 | Darkness |
| Filter B | Bandpass, 800Hz, Res 35, Drive 15 | Texture |
| Envelope | A:6, D:220, S:55, R:180 | Heaviness |
| Modulation | Env→FilterA: 80%, LFO1→Pitch: 20% | Demonic |

## Chain Processing
`\`\`
Kepler Exo → High-pass at 35Hz
  → Fruily Limiter
  - Threshold: -12dB
  - Ratio: 6:1
  - Attack: 0.5ms
  - Release: 25ms
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More menacing | Increase LFO1→Pitch to 28% |
| Darker | Reduce FilterA cutoff to 100Hz |
| More aggressive | Increase FilterB drive to 20% |
| Cleaner sub | Increase FilterA cutoff to 150Hz |

```

---

## FILE: 03-Workflows\by-instrument\02-lead-workflows.md

```markdown
# Kepler Exo Lead Workflows

## Exo Stadium Supersaw

### Sound Profile
Massive, festival-ready supersaw with 4 oscillators + dual filters for ultimate width.

### Recommended Preset
`genre/03-exo-stadium-supersaw.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 85% | Core |
| Oscillator 2 | Saw, 0 octave, 85% | Width |
| Oscillator 3 | Saw, 0 octave, 80% | Thickness |
| Oscillator 4 | Saw, +1 octave, 65% | Harmonics |
| Sub Oscillator | Sine, -2 octave, 0% | (Not needed) |
| Filter A | Lowpass, 4200Hz, Res 48, Drive 18 | Main power |
| Filter B | Lowpass, 8000Hz, Res 25, Drive 8 | Air control |
| Envelope | A:15, D:280, S:55, R:450 | Presence |
| Modulation | Env→FilterA: 70%, LFO1→FilterA: 45% | Movement |
| Stereo Width | 120% | Maximum spread |

### Exo-Specific Advantages
- **4 Oscillators:** 7 detuned voices create massive width
- **Dual Filters:** Independent high-end control
- **Expanded Modulation:** Filter movement with LFO1
- **Stereo Width:** Built-in width processing

### Genre Variations
- **Big Room:** Increase FilterA resonance to 52%, longer release (500ms)
- **Future Bass:** Softer attack (25ms), increase Stereo Width to 130%
- **Progressive House:** Moderate FilterA resonance (42%), LFO1→Pan instead
- **Hardstyle:** Higher resonance (55%), shorter decay (200ms)

### Chain Processing
`\`\`
Kepler Exo → Soft Clipper
  - Input reduction: 2.5dB
  → Fruity Limiter
  - Ceiling: -0.3dB
  - Gain: 6dB
  → Fruity Reverb 2
  - Type: Cathedral
  - Decay: 4s
  - Mix: 15%
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More massive | All 4 oscillators at 90% |
| Tighter mix | Osc3/4 at 60% each |
| More movement | Increase LFO1 rate to 0.7Hz |
| More aggressive | Increase FilterA resonance to 52% |
| More air | Increase FilterB cutoff to 10000Hz |
| Safer for mixing | Enable mono below 200Hz |

---

## Exo Glitch Symphony

### Sound Profile
Complex, experimental lead with rhythmic modulation and percussive character.

### Recommended Preset
`genre/06-exo-glitch-symphony.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Square, +1 octave, 100% | Click |
| Oscillator 2 | Saw, 0 octave, 75% | Body |
| Oscillator 3 | Square, 0 octave, 60% | Rhythm |
| Oscillator 4 | Saw, +1 octave, 50% | Texture |
| Sub Oscillator | Sine, -2 octave, 0% | (Not needed) |
| Filter A | Lowpass, 3200Hz, Res 50, Drive 12 | Punch |
| Filter B | Bandpass, 1500Hz, Res 40, Drive 8 | Focus |
| Envelope | A:1, D:70, S:0, R:45 | Percussive |
| Modulation | Env→FilterA: 95%, LFO1→Pitch: 35% | Glitch |

### Chain Processing
`\`\`
Kepler Exo → Teq4
  - High-pass: 600Hz
  → Fruity Reverb 2
  - Type: Plate
  - Decay: 1s
  - Mix: 20%
  → Bitcrusher
  - Bit depth: 10-bit
  - Wet: 60%
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| Less chaotic | Reduce LFO1 modulation to 20% |
| More plucky | Reduce envelope decay to 50ms |
| More rhythmic | Increase LFO1 rate to 5Hz |
| More texture | Add sample-hold to LFO2 |

---

## Exo Velvet Pad

### Sound Profile
Smooth, warm pad with subtle stereo movement for emotional moments.

### Recommended Preset
`genre/08-exo-velvet-pad.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, -1 octave, 90% | Foundation |
| Oscillator 2 | Triangle, -1 octave, 75% | Body |
| Oscillator 3 | Saw, -2 octave, 50% | Warmth |
| Oscillator 4 | Sine, 0 octave, 40% | Air |
| Sub Oscillator | Sine, -2 octave, 25% | Subtle |
| Filter A | Lowpass, 3000Hz, Res 15, Drive 3 | Soft |
| Filter B | Lowpass, 6000Hz, Res 10, Drive 0 | Air |
| Envelope | A:250, D:500, S:85, R:800 | Smooth |
| Modulation | Env→FilterA: 15%, LFO1→Pan: 30% | Gentle |

### Chain Processing
`\`\`
Kepler Exo → Vintage Chorus
  - Mix: 40%
  - Rate: 0.2Hz
  → Fruily Reverb 2
  - Type: Hall
  - Decay: 3s
  - Mix: 18%
  → Fruily Parametric EQ 2
  - High-shelf +1.5dB at 8kHz
`\`\`

---

## Exo Sci-Fi Textures

### Sound Profile
Otherworldly, evolving textures with extreme modulation for cinematic moments.

### Recommended Preset
`genre/07-exo-sci-fi-textures.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 80% | Core |
| Oscillator 2 | Saw, +1 octave, 70% | Dissonance |
| Oscillator 3 | Square, -1 octave, 60% | Texture |
| Oscillator 4 | Triangle, 0 octave, 50% | Harmonics |
| Sub Oscillator | Sine, -2 octave, 50% | Depth |
| Filter A | Lowpass, 5000Hz, Res 55, Drive 15 | Power |
| Filter B | Bandpass, 2500Hz, Res 45, Drive 10 | Focus |
| Envelope | A:50, D:800, S:70, R:1200 | Evolving |
| Modulation | Env→FilterA: 60%, LFO1→FilterB: 80% | Complex |

### Chain Processing
`\`\`
Kepler Exo → Fruily Parametric EQ 2
  - Multi-band processing
  → Fruily Reverb 2
  - Type: Gated
  - Decay: 1.5s
  - Mix: 40%
  → Stereo Delay
  - Time: 600ms
  - Feedback: 50%
`\`\`

---

## Lead Workflow Summary

### By Role
| Role | Preset | Stereo Width | Processing |
|------|--------|--------------|------------|
| Main drop lead | Stadium Supersaw | 120% | Limiter + Reverb |
| Build lead | Stadium Supersaw | 100% | Filter sweeps |
| Rhythmic accent | Glitch Symphony | 80% | Bitcrusher |
| Emotional moment | Velvet Pad | 110% | Reverb + Chorus |
| Cinematic FX | Sci-Fi Textures | 150% | Delay + Reverb |

### By Genre
| Genre | Recommended Settings |
|-------|---------------------|
| Big Room EDM | Stadium Supersaw, high resonance |
| Future Bass | Stadium Supersaw, wide stereo, soft attack |
| Trap | Glitch Symphony, percussive envelope |
| R&B | Velvet Pad, warm filters, gentle LFO |
| Cinematic | Sci-Fi Textures, extreme modulation |

### Exo vs Standard Kepler for Leads
| Feature | Standard Kepler | Kepler Exo |
|---------|----------------|-----------|
| Oscillator stack | 3 max | 4 + sub |
| Stereo width | Limited | 120%+ built-in |
| Dual filters | No | Yes |
| Modulation depth | Standard | Expanded |
| CPU per voice | Lower | Higher |
| Recommended voices | 8-16 | 4-8 for dense chords |

```

---

## FILE: 03-Workflows\by-instrument\03-exo-soul-keys.md

```markdown
# Exo Soul Keys Workflow

## Sound Profile
Warm, smooth bass for R&B with vintage character.

## Recommended Preset
`genre/02-exo-soul-keys.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, 0 octave, 85% | Core tone |
| Oscillator 2 | Triangle, 0 octave, 70% | Warmth |
| Oscillator 3 | Saw, -1 octave, 45% | Body |
| Oscillator 4 | Square, 0 octave, 30% | Clarity |
| Sub Oscillator | Sine, -2 octave, 20% | Foundation |
| Filter A | Lowpass, 2500Hz, Res 18, Drive 5 | Smooth |
| Filter B | Highpass, 200Hz, Res 10, Drive 0 | Cleanup |
| Envelope | A:60, D:400, S:75, R:350 | Flow |
| Modulation | Env→FilterA: 30%, LFO1→Pan: 50% | Gentle |

## Chain Processing
`\`\`
Kepler Exo → Soft Clipper
  - Input reduction: 1.5dB
  → Fruily Reverb 2
  - Type: Hall
  - Decay: 2.8s
  - Mix: 22%
  → Fruily Parametric EQ 2
  - Bell +2dB at 3kHz
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More warmth | Increase osc3 to 55% |
| Cleaner | Reduce FilterA resonance to 15% |
| More presence | Increase osc4 to 40% |
| More movement | Increase LFO1 to 60% |

```

---

## FILE: 03-Workflows\by-instrument\03-pad-fx-workflows.md

```markdown
# Kepler Exo Pad & FX Workflows

## Exo Dusty VHS

### Sound Profile
Lo-fi, nostalgic texture with tape warble and degraded character.

### Recommended Preset
`genre/05-exo-dusty-vhs.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -1 octave, 70% | Body |
| Oscillator 2 | Triangle, -2 octave, 65% | Warmth |
| Oscillator 3 | Square, 0 octave, 40% | Click |
| Oscillator 4 | Sine, -1 octave, 55% | Subtle |
| Sub Oscillator | Sine, -2 octave, 30% | Foundation |
| Filter A | Lowpass, 1800Hz, Res 22, Drive 8 | Muffled |
| Filter B | Highpass, 150Hz, Res 15, Drive 0 | Cleanup |
| Envelope | A:180, D:600, S:80, R:1000 | Slow |
| Modulation | Env→FilterA: 20%, LFO1→Pan: 65% | Warble |
| Stereo Width | 150% | Maximum |

### Chain Processing
`\`\`
Kepler Exo → Vintage Phaser
  - Mix: 35%
  - Rate: 0.25Hz
  → Fruily Reverb 2
  - Type: Room
  - Decay: 2.5s
  - Mix: 28%
  → Tape Saturation
  - Drive: 4%
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More warble | Increase LFO1→Pan to 75% |
| Cleaner | Reduce Stereo Width to 100% |
| More degraded | Increase LFO1 rate to 0.3Hz |
| Darker | Reduce FilterA cutoff to 1500Hz |

---

## Exo Risers

### Sound Profile
Building tension with multiple oscillator layers and filter automation.

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, +1 octave, 85% | Brightness |
| Oscillator 2 | Saw, +1 octave, 80% | Thickness |
| Oscillator 3 | Square, +1 octave, 65% | Edge |
| Oscillator 4 | Saw, +2 octave, 50% | Air |
| Sub Oscillator | Sine, -2 octave, 0% | (Not needed) |
| Filter A | Lowpass, sweep 0→5000Hz | Building |
| Filter B | Lowpass, 8000Hz, Res 20, Drive 5 | Air |
| Envelope | A:200, D:400, S:80, R:300 | Slow rise |
| Modulation | LFO1→FilterA: 60% | Movement |

### Automation Sequence
1. Bar 1: FilterA 0→800Hz
2. Bar 2: FilterA 800→2000Hz
3. Bar 3: FilterA 2000→4000Hz, increase LFO rate
4. Bar 4: FilterA 4000→5000Hz, full intensity

### Chain Processing
`\`\`
Kepler Exo → White Noise (50% mix)
  → Fruily Limiter
  - Ceiling: -0.3dB
  - Attack: 0.5ms
`\`\`

---

## Exo Brass Stabs

### Sound Profile
Bold, punchy stabs with dual-filter architecture for aggressive impact.

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 90% | Core |
| Oscillator 2 | Saw, 0 octave, 85% | Body |
| Oscillator 3 | Square, -1 octave, 55% | Click |
| Oscillator 4 | Triangle, 0 octave, 45% | Warmth |
| Sub Oscillator | Sine, -2 octave, 35% | Weight |
| Filter A | Lowpass, 3500Hz, Res 42, Drive 12 | Bold |
| Filter B | Lowpass, 6000Hz, Res 25, Drive 5 | Air |
| Envelope | A:2, D:60, S:0, R:40 | Short |
| Modulation | Env→FilterA: 85% | Punch |

### Chain Processing
`\`\`
Kepler Exo → Fruily Parametric EQ 2
  - Bell +4dB at 3kHz
  → Fruily Compressor
  - Attack: 1ms
  - Release: 40ms
  - Ratio: 5:1
`\`\`

---

## Exo Textural Layers

### Sound Profile
Evolving atmospheric layers for background depth.

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, -2 octave, 75% | Subtle |
| Oscillator 2 | Triangle, -1 octave, 70% | Body |
| Oscillator 3 | Saw, -1 octave, 55% | Air |
| Oscillator 4 | Square, 0 octave, 40% | Texture |
| Sub Oscillator | Sine, -2 octave, 50% | Depth |
| Filter A | Lowpass, 2000Hz, Res 18, Drive 5 | Soft |
| Filter B | Bandpass, 1500Hz, Res 30, Drive 3 | Focus |
| Envelope | A:400, D:800, S:85, R:1500 | Long |
| Modulation | LFO1→FilterB: 45%, LFO2→Pan: 35% | Evolving |

### Chain Processing
`\`\`
Kepler Exo → Vintage Chorus
  - Mix: 45%
  - Depth: 60%
  → Fruily Reverb 2
  - Type: Cathedral
  - Decay: 5s
  - Mix: 35%
`\`\`

---

## FX Workflow Summary

### By Purpose
| FX Type | Oscillator Setup | Filter Strategy | Modulation |
|---------|------------------|-----------------|-------------|
| Riser | 4 saws, high oct | Sweep up | LFO to filter |
| Dwnlifter | 2 saws, low | Sweep down | Static |
| Texture | Mixed waveforms | Static with LFO | Multiple targets |
| Impact | 4 oscillators | High resonance | Fast envelope |
| Pad | Sine/triangle mix | Soft lowpass | LFO pan |

### By Genre
| Genre | Recommended FX |
|-------|----------------|
| Trap | 4-bar risers, glitch textures |
| EDM | 8-bar builds, massive risers |
| R&B | Smooth swells, subtle transitions |
| Lo-Fi | VHS warble, tape degradation |
| Cinematic | Long evolutions, complex textures |

### Exo-Specific Techniques
| Technique | How To |
|-----------|--------|
| Maximum width | 4 oscillators, wide detune, Stereo Width 150% |
| Evolving pad | Slow LFO to FilterB, LFO2 to Pan |
| Aggressive stab | High FilterA resonance, fast envelope |
| Tape warble | LFO1→Pan at 65%, slow rate |
| Dual-layer | FilterA for body, FilterB for air |

```

---

## FILE: 03-Workflows\by-instrument\04-exo-stadium-supersaw.md

```markdown
# Exo Stadium Supersaw Workflow

## Sound Profile
Massive, festival-ready supersaw with 4 oscillators + dual filters for ultimate width.

## Recommended Preset
`genre/03-exo-stadium-supersaw.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 85% | Core |
| Oscillator 2 | Saw, 0 octave, 85% | Width |
| Oscillator 3 | Saw, 0 octave, 80% | Thickness |
| Oscillator 4 | Saw, +1 octave, 65% | Harmonics |
| Sub Oscillator | Sine, -2 octave, 0% | (Not needed) |
| Filter A | Lowpass, 4200Hz, Res 48, Drive 18 | Main power |
| Filter B | Lowpass, 8000Hz, Res 25, Drive 8 | Air control |
| Envelope | A:15, D:280, S:55, R:450 | Presence |
| Modulation | Env→FilterA: 70%, LFO1→FilterA: 45% | Movement |
| Stereo Width | 120% | Maximum spread |

## Chain Processing
`\`\`
Kepler Exo → Soft Clipper
  - Input reduction: 2.5dB
  → Fruily Limiter
  - Ceiling: -0.3dB
  - Gain: 6dB
  → Fruily Reverb 2
  - Type: Cathedral
  - Decay: 4s
  - Mix: 15%
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More massive | All 4 oscillators at 90% |
| Tighter mix | Osc3/4 at 60% each |
| More movement | Increase LFO1 rate to 0.7Hz |
| More aggressive | Increase FilterA resonance to 52% |
| More air | Increase FilterB cutoff to 10000Hz |

```

---

## FILE: 03-Workflows\by-instrument\05-exo-glitch-symphony.md

```markdown
# Exo Glitch Symphony Workflow

## Sound Profile
Complex, experimental lead with rhythmic modulation and percussive character.

## Recommended Preset
`genre/06-exo-glitch-symphony.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Square, +1 octave, 100% | Click |
| Oscillator 2 | Saw, 0 octave, 75% | Body |
| Oscillator 3 | Square, 0 octave, 60% | Rhythm |
| Oscillator 4 | Saw, +1 octave, 50% | Texture |
| Sub Oscillator | Sine, -2 octave, 0% | (Not needed) |
| Filter A | Lowpass, 3200Hz, Res 50, Drive 12 | Punch |
| Filter B | Bandpass, 1500Hz, Res 40, Drive 8 | Focus |
| Envelope | A:1, D:70, S:0, R:45 | Percussive |
| Modulation | Env→FilterA: 95%, LFO1→Pitch: 35% | Glitch |

## Chain Processing
`\`\`
Kepler Exo → Teq4
  - High-pass: 600Hz
  → Fruily Reverb 2
  - Type: Plate
  - Decay: 1s
  - Mix: 20%
  → Bitcrusher
  - Bit depth: 10-bit
  - Wet: 60%
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| Less chaotic | Reduce LFO1 modulation to 20% |
| More plucky | Reduce envelope decay to 50ms |
| More rhythmic | Increase LFO1 rate to 5Hz |
| More texture | Add sample-hold to LFO2 |

```

---

## FILE: 03-Workflows\by-instrument\06-exo-velvet-pad.md

```markdown
# Exo Velvet Pad Workflow

## Sound Profile
Smooth, warm pad with subtle stereo movement for emotional moments.

## Recommended Preset
`genre/08-exo-velvet-pad.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, -1 octave, 90% | Foundation |
| Oscillator 2 | Triangle, -1 octave, 75% | Body |
| Oscillator 3 | Saw, -2 octave, 50% | Warmth |
| Oscillator 4 | Sine, 0 octave, 40% | Air |
| Sub Oscillator | Sine, -2 octave, 25% | Subtle |
| Filter A | Lowpass, 3000Hz, Res 15, Drive 3 | Soft |
| Filter B | Lowpass, 6000Hz, Res 10, Drive 0 | Air |
| Envelope | A:250, D:500, S:85, R:800 | Smooth |
| Modulation | Env→FilterA: 15%, LFO1→Pan: 30% | Gentle |

## Chain Processing
`\`\`
Kepler Exo → Vintage Chorus
  - Mix: 40%
  - Rate: 0.2Hz
  → Fruily Reverb 2
  - Type: Hall
  - Decay: 3s
  - Mix: 18%
  → Fruily Parametric EQ 2
  - High-shelf +1.5dB at 8kHz
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More width | Increase Stereo Width to 120% |
| More warmth | Increase osc3 to 60% |
| Smoother | Reduce FilterA resonance to 12% |
| More movement | Increase LFO1 to 40% |

```

---

## FILE: 03-Workflows\by-instrument\07-exo-sci-fi-textures.md

```markdown
# Exo Sci-Fi Textures Workflow

## Sound Profile
Otherworldly, evolving textures with extreme modulation for cinematic moments.

## Recommended Preset
`genre/07-exo-sci-fi-textures.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 80% | Core |
| Oscillator 2 | Saw, +1 octave, 70% | Dissonance |
| Oscillator 3 | Square, -1 octave, 60% | Texture |
| Oscillator 4 | Triangle, 0 octave, 50% | Harmonics |
| Sub Oscillator | Sine, -2 octave, 50% | Depth |
| Filter A | Lowpass, 5000Hz, Res 55, Drive 15 | Power |
| Filter B | Bandpass, 2500Hz, Res 45, Drive 10 | Focus |
| Envelope | A:50, D:800, S:70, R:1200 | Evolving |
| Modulation | Env→FilterA: 60%, LFO1→FilterB: 80% | Complex |

## Chain Processing
`\`\`
Kepler Exo → Fruily Parametric EQ 2
  - Multi-band processing
  → Fruily Reverb 2
  - Type: Gated
  - Decay: 1.5s
  - Mix: 40%
  → Stereo Delay
  - Time: 600ms
  - Feedback: 50%
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More extreme | Increase LFO1→FilterB to 90% |
| Less harsh | Reduce FilterA cutoff to 4000Hz |
| More controlled | Reduce modulation by half |
| More space | Increase reverb to 50% |

```

---

## FILE: 03-Workflows\by-instrument\08-exo-dusty-vhs.md

```markdown
# Exo Dusty VHS Workflow

## Sound Profile
Lo-fi, nostalgic texture with tape warble and degraded character.

## Recommended Preset
`genre/05-exo-dusty-vhs.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -1 octave, 70% | Body |
| Oscillator 2 | Triangle, -2 octave, 65% | Warmth |
| Oscillator 3 | Square, 0 octave, 40% | Click |
| Oscillator 4 | Sine, -1 octave, 55% | Subtle |
| Sub Oscillator | Sine, -2 octave, 30% | Foundation |
| Filter A | Lowpass, 1800Hz, Res 22, Drive 8 | Muffled |
| Filter B | Highpass, 150Hz, Res 15, Drive 0 | Cleanup |
| Envelope | A:180, D:600, S:80, R:1000 | Slow |
| Modulation | Env→FilterA: 20%, LFO1→Pan: 65% | Warble |
| Stereo Width | 150% | Maximum |

## Chain Processing
`\`\`
Kepler Exo → Vintage Phaser
  - Mix: 35%
  - Rate: 0.25Hz
  → Fruily Reverb 2
  - Type: Room
  - Decay: 2.5s
  - Mix: 28%
  → Tape Saturation
  - Drive: 4%
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More warble | Increase LFO1→Pan to 75% |
| Cleaner | Reduce Stereo Width to 100% |
| More degraded | Increase LFO1 rate to 0.3Hz |
| Darker | Reduce FilterA cutoff to 1500Hz |

```

---

## FILE: 03-Workflows\by-instrument\09-exo-risers.md

```markdown
# Exo Risers Workflow

## Sound Profile
Building tension with multiple oscillator layers and filter automation.

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, +1 octave, 85% | Brightness |
| Oscillator 2 | Saw, +1 octave, 80% | Thickness |
| Oscillator 3 | Square, +1 octave, 65% | Edge |
| Oscillator 4 | Saw, +2 octave, 50% | Air |
| Sub Oscillator | Sine, -2 octave, 0% | (Not needed) |
| Filter A | Lowpass, sweep 0→5000Hz | Building |
| Filter B | Lowpass, 8000Hz, Res 20, Drive 5 | Air |
| Envelope | A:200, D:400, S:80, R:300 | Slow rise |
| Modulation | LFO1→FilterA: 60% | Movement |

## Automation Sequence
1. Bar 1: FilterA 0→800Hz
2. Bar 2: FilterA 800→2000Hz
3. Bar 3: FilterA 2000→4000Hz, increase LFO rate
4. Bar 4: FilterA 4000→5000Hz, full intensity

## Chain Processing
`\`\`
Kepler Exo → White Noise (50% mix)
  → Fruily Limiter
  - Ceiling: -0.3dB
  - Attack: 0.5ms
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More tension | Increase max filter to 6000Hz |
| Smoother | Lengthen to 8 bars |
| Brighter | Increase FilterB cutoff |
| More movement | Increase LFO rate |

```

---

## FILE: 03-Workflows\by-instrument\10-exo-brass-stabs.md

```markdown
# Exo Brass Stabs Workflow

## Sound Profile
Bold, punchy stabs with dual-filter architecture for aggressive impact.

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 90% | Core |
| Oscillator 2 | Saw, 0 octave, 85% | Body |
| Oscillator 3 | Square, -1 octave, 55% | Click |
| Oscillator 4 | Triangle, 0 octave, 45% | Warmth |
| Sub Oscillator | Sine, -2 octave, 35% | Weight |
| Filter A | Lowpass, 3500Hz, Res 42, Drive 12 | Bold |
| Filter B | Lowpass, 6000Hz, Res 25, Drive 5 | Air |
| Envelope | A:2, D:60, S:0, R:40 | Short |
| Modulation | Env→FilterA: 85% | Punch |

## Chain Processing
`\`\`
Kepler Exo → Fruily Parametric EQ 2
  - Bell +4dB at 3kHz
  → Fruily Compressor
  - Attack: 1ms
  - Release: 40ms
  - Ratio: 5:1
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More aggressive | Increase FilterA resonance to 48% |
| More retro | Replace osc3 with triangle |
| More modern | Add slight bitcrusher |
| Longer sustain | Increase release to 60ms |

```

---

## FILE: 03-Workflows\by-instrument\11-exo-textural-layers.md

```markdown
# Exo Textural Layers Workflow

## Sound Profile
Evolving atmospheric layers for background depth.

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, -2 octave, 75% | Subtle |
| Oscillator 2 | Triangle, -1 octave, 70% | Body |
| Oscillator 3 | Saw, -1 octave, 55% | Air |
| Oscillator 4 | Square, 0 octave, 40% | Texture |
| Sub Oscillator | Sine, -2 octave, 50% | Depth |
| Filter A | Lowpass, 2000Hz, Res 18, Drive 5 | Soft |
| Filter B | Bandpass, 1500Hz, Res 30, Drive 3 | Focus |
| Envelope | A:400, D:800, S:85, R:1500 | Long |
| Modulation | LFO1→FilterB: 45%, LFO2→Pan: 35% | Evolving |

## Chain Processing
`\`\`
Kepler Exo → Vintage Chorus
  - Mix: 45%
  - Depth: 60%
  → Fruily Reverb 2
  - Type: Cathedral
  - Decay: 5s
  - Mix: 35%
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More movement | Increase LFO1 to 55% |
| More width | Increase Stereo Width to 140% |
| Smoother | Reduce FilterA resonance to 15% |
| Darker | Reduce FilterA cutoff to 1800Hz |

```

---

## FILE: 03-Workflows\by-instrument\INDEX.md

```markdown
# Kepler Exo By-Instrument Workflows Index

## Bass Workflows
| File | Name | Genre | Key Feature |
|------|------|-------|-------------|
| `01-exo-808-beast.md` | Exo 808 Beast | Trap/Hip-Hop | 4 osc + sub |
| `02-exo-grim-reaper.md` | Exo Grim Reaper | Drill | Dark weight |
| `03-exo-soul-keys.md` | Exo Soul Keys | R&B | Warm vintage |

## Lead Workflows
| File | Name | Genre | Key Feature |
|------|------|-------|-------------|
| `04-exo-stadium-supersaw.md` | Exo Stadium Supersaw | EDM | Max width |
| `05-exo-glitch-symphony.md` | Exo Glitch Symphony | Trap | Complex |
| `06-exo-velvet-pad.md` | Exo Velvet Pad | R&B | Smooth warm |

## Pad & FX Workflows
| File | Name | Genre | Key Feature |
|------|------|-------|-------------|
| `07-exo-sci-fi-textures.md` | Exo Sci-Fi Textures | Cinematic | Evolving |
| `08-exo-dusty-vhs.md` | Exo Dusty VHS | Lo-Fi | Warble |
| `09-exo-risers.md` | Exo Risers | All | Build tension |
| `10-exo-brass-stabs.md` | Exo Brass Stabs | All | Punchy |
| `11-exo-textural-layers.md` | Exo Textural Layers | Ambient | Background |

## Exo vs Standard Kepler Quick Reference
| Workflow | Standard Kepler | Kepler Exo Advantage |
|----------|------------------|----------------------|
| 808 | 3 oscillators | 4 + sub oscillator |
| Supersaw | Limited modulation | Dual filter + width |
| Texture | Basic | 4 osc + dual filter |
| Riser | Basic | 4 osc layers |

## Quick Start
- **Maximum sub:** Start with `01-exo-808-beast.md`
- **Stadium lead:** Start with `04-exo-stadium-supersaw.md`
- **Cinematic:** Start with `07-exo-sci-fi-textures.md`
- **Lo-Fi:** Start with `08-exo-dusty-vhs.md`

```

---

## FILE: 03-Workflows\by-instrument\instrument-workflows.md

```markdown
# Kepler Exo Instrument Workflows

## Hip-Hop/Bass Instruments

### 808 Sub Bass
**Genre:** Hip-hop/rap, trap, drill
**Mood:** Dark, aggressive

#### Core Setup
1. Oscillators: Osc1 + Osc2 (saw waves, -2 octave)
2. Sub Oscillator: Enabled, 100%, sine wave
3. Filter A: Lowpass, 150-200Hz, resonance 28-35
4. Filter B: Disabled or high-pass at 80Hz
5. Envelope: Attack 4ms, Decay 180ms, Sustain 65%, Release 120ms
6. Modulation: Env to Filter A at 70-80%

#### Genre Tweaks
- **Trap:** Add subtle pitch LFO (0.2Hz, 8% amount)
- **Drill:** Increase filter drive to 25%, add aggressive pitch LFO
- **Old School:** Reduce filter resonance to 20%, shorter decay

#### Chain Processing
- Fruity Parametric EQ 2: High-pass at 30Hz
- Fruity Limiter: -15dB threshold, 4:1 ratio, fast attack
- Optional: Fruity Compressor for parallel pumping effect

#### A/B Testing Points
- Test A: Sub osc at 100% vs Test B: Sub osc at 70%
- Test A: Single filter vs Test B: Dual filter stacking

#### Troubleshooting
| Problem | Solution |
|---------|----------|
| Muddy low-end | High-pass everything below 40Hz except bass |
| Weak impact | Increase filter drive to 22% |
| Distorted | Reduce osc levels by 15% |
| Clicking on attacks | Increase envelope attack to 6ms |

---

### Mid-Range Bass
**Genre:** Hip-hop/rap, R&B
**Mood:** Funky, smooth

#### Core Setup
1. Oscillators: Osc1 (saw, -1 octave), Osc2 (square, -1 octave)
2. Sub Oscillator: Enabled, 40-60%, sine wave
3. Filter A: Lowpass, 500-800Hz, resonance 30-38
4. Envelope: Attack 3ms, Decay 140ms, Sustain 60%, Release 160ms
5. Modulation: Env to Filter A at 65-75%

#### Genre Tweaks
- **R&B:** Softer resonance (25%), longer attack (15ms)
- **Dirty South:** Higher resonance (42%), increased drive (18%)

#### Chain Processing
- Fruity Parametric EQ 2: Bell +2dB at 400Hz, cut at 100Hz
- Fruity Compressor: Attack 12ms, Release 80ms, Ratio 2.5:1
- Optional: Vintage Warmer for saturation

#### A/B Testing Points
- Test A: Square wave for presence vs Test B: Saw for warmth

---

## R&B Lead Instruments

### Smooth Lead
**Genre:** R&B, hip-hop/rap
**Mood:** Moody, emotional

#### Core Setup
1. Oscillators: Osc1 (sine, 0), Osc2 (triangle, 0, +3 cents detune)
2. Sub Oscillator: Enabled, 20-30%, sine wave
3. Filter A: Lowpass, 2500-3500Hz, resonance 15-20
4. Filter B: Highpass at 200Hz for cleanup
5. Envelope: Attack 50ms, Decay 400ms, Sustain 72%, Release 350ms
6. Modulation: LFO to pan at 30-40%, slow rate

#### Genre Tweaks
- **Modern R&B:** Add slight filter LFO movement
- **Classic 90s:** Increase resonance to 25%, warmer envelope

#### Chain Processing
- Soft clipper: 1.5dB input reduction
- Fruity Reverb 2: Hall, 2.5s decay, 20% mix
- Fruity Compressor: Soft knee, 2.5:1 ratio

#### A/B Testing Points
- Test A: Pan LFO on for movement vs Test B: Static mono

---

### Electric Keys
**Genre:** R&B, EDM crossover
**Mood:** Electric, modern

#### Core Setup
1. Oscillators: Osc1 (saw, 0), Osc2 (saw, 0, +7 cents)
2. Osc3 (triangle, +1), Osc4 (square, 0)
3. Sub Oscillator: Disabled or 15%
4. Filter A: Lowpass, 4000Hz, resonance 35
5. Envelope: Attack 15ms, Decay 250ms, Sustain 55%, Release 300ms
6. Modulation: Env to Filter at 60%, LFO to filter at 40%

#### Chain Processing
- Fruily Parametric EQ 2: Bell +3dB at 3kHz
- Fruity Limiter: -0.3dB ceiling
- Delay: Stereo, 250ms, 30% feedback

---

## EDM Lead Instruments

### Big Room Lead
**Genre:** EDM, big room, festival
**Mood:** Electric, anthem

#### Core Setup
1. Oscillators: All 4 oscillators, saw waves, varying detune
   - Osc1: 0 octave, 0 detune, 90%
   - Osc2: 0 octave, +7 cents, 88%
   - Osc3: +1 octave, +14 cents, 75%
   - Osc4: +1 octave, +21 cents, 65%
2. Sub Oscillator: Enabled, 0% (cleaner highs)
3. Filter A: Lowpass, 4000-5000Hz, resonance 45-52
4. Filter B: Lowpass, 7000Hz, resonance 25
5. Envelope: Attack 12ms, Decay 220ms, Sustain 58%, Release 400ms
6. Modulation: Env to Filter A at 75%, LFO to Filter B at 50%

#### Genre Tweaks
- **Future Bass:** Softer attack (25ms), wider stereo width
- **Progressive House:** Smoother resonance (40%), longer release
- **Hardstyle:** Higher resonance (60%), shorter decay

#### Chain Processing
- Soft clipper: 2dB input reduction
- Fruity Limiter: Ceiling -0.3dB, 6dB gain
- Fruity Reverb 2: Cathedral, 4s decay, 12% mix

#### A/B Testing Points
- Test A: 4 oscillators massive vs Test B: 2 oscillators focused
- Test A: High resonance for screeches vs Test B: Lower for smooth

#### Troubleshooting
| Problem | Solution |
|---------|----------|
| Too harsh | Reduce filter A cutoff by 500Hz |
| No impact | Increase filter resonance by 10% |
| CPU overload | Switch to mono mode during drops |
| Phasing | Reduce stereo width to 100% |

---

### Pluck Lead
**Genre:** EDM, trap
**Mood:** Energetic, rhythmic

#### Core Setup
1. Oscillators: Osc1 (square, +1), Osc2 (saw, 0)
2. Sub Oscillator: Disabled
3. Filter A: Lowpass, 3000Hz, resonance 45
4. Envelope: Attack 1ms, Decay 60ms, Sustain 0%, Release 40ms
5. Modulation: Env to Filter at 90-95%

#### Chain Processing
- Fruity Reverb 2: Small room, 0.5s decay, 15% mix
- Fruity Compressor: Fast attack, 4:1 ratio

---

## Pad/Ambient Instruments

### Atmospheric Pad
**Genre:** R&B, ambient, lo-fi
**Mood:** Moody, spacey

#### Core Setup
1. Oscillators: All 4 oscillators with wide detuning
   - Osc1: Saw, -1 octave, 0 detune, 75%
   - Osc2: Saw, -1 octave, +12 cents, 70%
   - Osc3: Triangle, -2 octave, +18 cents, 60%
   - Osc4: Sine, -1 octave, +25 cents, 55%
2. Sub Oscillator: Enabled, 25-35%, sine wave
3. Filter A: Lowpass, 2000-2500Hz, resonance 18-22
4. Filter B: Highpass at 150Hz
5. Envelope: Attack 200ms, Decay 600ms, Sustain 82%, Release 1000ms
6. Modulation: LFO to pan at 50-65%, slow rate (0.1Hz)

#### Genre Tweaks
- **Lo-Fi:** Add sample-hold LFO to filter cutoff
- **Cinematic:** Increase stereo width, add reverb
- **Ambient:** Even slower modulation, longer release

#### Chain Processing
- Vintage Phaser: Mix 40%, Rate 0.25Hz
- Fruity Reverb 2: Hall/Cathedral, 3-5s decay, 25-35% mix
- Tape Saturation: 3-5% drive

#### A/B Testing Points
- Test A: Wide detune for chorus-like effect
- Test B: Tight detune for cleaner sound

---

## FX/Texture Instruments

### Risers
**Genre:** EDM, trap
**Mood:** Uplifting, build

#### Core Setup
1. Oscillators: Osc1 + Osc2 (saw waves, high octave)
2. Sub Oscillator: Disabled
3. Filter: Lowpass, sweeping from closed to open
4. Envelope: Long attack, long release
5. Automation: Filter cutoff, pitch, volume

#### Tips
- Automate filter cutoff throughout the bar
- Add pitch bend automation
- Layer with white noise if needed

---

### Downlifters
**Genre:** EDM, trap
**Mood:** Dark, tension

#### Core Setup
1. Oscillators: Osc1 + Osc2 (saw waves, low octave)
2. Filter: Lowpass, closed to slightly open
3. Envelope: Fast attack, long release
4. Automation: Filter cutoff down, pitch down slightly

---

## Workflow Quick Reference

### Bass Workflow Checklist
- [ ] Enable Sub Oscillator for any bass sound
- [ ] Set Filter A lowpass between 150-300Hz
- [ ] Start with resonance below 35%
- [ ] Set envelope attack based on genre (fast for trap, slower for R&B)
- [ ] Route through high-pass filter on other channels
- [ ] Check mono compatibility

### Lead Workflow Checklist
- [ ] Set polyphony appropriate to genre (4-8 voices)
- [ ] Enable stereo width processing
- [ ] Set filter cutoff for tonal character
- [ ] Add reverb for space
- [ ] Check frequency range against vocals
- [ ] Automate filter sweeps for interest

### Pad Workflow Checklist
- [ ] Use 4 oscillators with wide detune
- [ ] Set slow attack for smooth entry
- [ ] Enable LFO panning for movement
- [ ] Add chorus or phaser for width
- [ ] Set long release for sustained feel
- [ ] Mix at lower volume than leads

## Cross-Genre Translation

### Trap to R&B
1. Reduce filter resonance by 50%
2. Lengthen envelope attack to 20-30ms
3. Reduce filter drive by 66%
4. Add subtle stereo width
5. Increase reverb mix by 50%

### EDM to Hip-Hop
1. Reduce filter cutoff by 40%
2. Shorten envelope release by 50%
3. Increase sub oscillator level
4. Remove sidechain compression
5. Add subtle compression for consistency

### R&B to EDM
1. Increase filter resonance by 50%
2. Add filter LFO movement
3. Increase filter drive
4. Add delay effects
5. Increase stereo width

```

---

## FILE: 04-Reference\audio-rate-modulation-theory.md

```markdown
# Technical Reference: Audio-Rate Modulation Theory

Understanding the "Growl" and "Scream" in Kepler Exo. [SRC: IL-MAN], [SRC: REPUTABLE]

## What is Audio-Rate Modulation?
Standard LFO modulation happens slowly (e.g., 5 cycles per second). **Audio-Rate Modulation** happens at thousands of cycles per second—fast enough to be within the range of human hearing. In Kepler Exo, this is implemented primarily as **Audio Mod** (VCF) and **X-Mod** (DCO Cross-Mod).

---

## 1. Audio Mod (Filter Growl)
- **The Concept:** The output of **DCO 1** is used as a modulation source for the **Filter Cutoff**.
- **The Result:** Instead of a simple "wah-wah" effect, the filter opens and closes so fast that it creates **Sidebands** (new frequencies).
- **Sound Character:** This creates "growling," "talking," or "ripping" textures. It is the secret to modern "analog-growl" bass and aggressive industrial leads.
- **Tip:** This effect is most audible when **Resonance** is high, as the "moving peak" of the filter creates the most harmonic distortion.

## 2. X-Mod (Cross-Modulation / FM)
- **The Concept:** **DCO 1** modulates the frequency (pitch) of **DCO 2**.
- **The Result:** Frequency Modulation (FM). Depending on the ratio between the two oscillators, you get:
  - **Harmonic Ratios (1:1, 2:1):** Musical, thick, rich sounds.
  - **Inharmonic Ratios (1.5:1, 3.14:1):** Metallic, bell-like, dissonant, and "noisy" sounds.
- **Why it's in Exo:** This expands Kepler beyond standard "analog" sounds into the realm of digital FM (DX7 style) but with the warmth of an analog filter.

---

## Technical Implications
1. **Pitch Tracking:** Because the modulation frequency changes with the notes you play (Keytracking), the "vibe" of the FM/Audio-Mod stays consistent across the keyboard.
2. **Aliasing:** At extreme audio-rate settings, you may hear digital artifacts. Use the **HQ Filter Mode** to minimize these and keep the sound "smooth."
3. **Phase Relationships:** Because DCO 1 and 2 are digitally controlled, their phase relationship is stable. This makes the FM in Kepler Exo more predictable and "tuned" than on ancient purely analog hardware.

---
*For practical workflows using these theories, see the [03-Workflows/by-goal/metallic-fm-perc.md](../03-Workflows/by-goal/metallic-fm-perc.md) guide.*

```

---

## FILE: 04-Reference\modulation-matrix-routing.md

```markdown
# Technical Reference: Modulation Matrix Routing

Mastering the 8-slot control hub of Kepler Exo. [SRC: IL-MAN]

## The Matrix Workflow
The Modulation Matrix is where you turn a "static" sound into an "evolving" performance.
- **Source:** What is providing the movement?
- **Destination:** What is being moved?
- **Amount:** How far and in which direction (Positive/Negative)?

---

## 🛰️ Common Sources
| Source | Typical Use Case |
| :--- | :--- |
| **LFO 1 / 2** | Rhythmic wobbles, slow drifts, vibrato. |
| **Env 2** | One-shot sweeps (Filter "snaps," Pitch "dives"). |
| **Velocity** | Expressive volume, brightness, or FM intensity. |
| **Mod Wheel** | Performative control (Opening filters, adding vibrato). |
| **Note / Key** | Keytracking adjustments (e.g., thinning the bass as you go higher). |
| **Aftertouch** | Squeezing the keys to add vibrato or growl. |

## 🎯 High-Signal Destinations
| Destination | The Result |
| :--- | :--- |
| **DCO 2 Pitch** | Essential for Hard Sync "tears" and FM detuning. |
| **Filter Cutoff** | Rhythmic "wah" or "growl" effects. |
| **PWM** | "Phaser-like" evolving harmonic motion. |
| **Resonance** | Making the filter sound more "vocal" or "wet." |
| **X-Mod Amt** | Creating "exploding" metallic harmonics on specific notes. |
| **LFO Rate** | One LFO modulating the speed of another (Chaos). |
| **FX Mix** | Adding reverb or delay only on high-velocity notes. |

---

## 🏆 Pro Routing Combinations
1. **The Human Touch:** **Velocity** -> **Filter Cutoff** (+25%) + **Attack** (-10%).
   - *Effect:* Harder playing makes the sound brighter and snappier.
2. **The "Broken Tape" Feel:** **LFO 1 (Random)** -> **DCO 1 & 2 Pitch** (+2%).
   - *Effect:* Subtle, unpredictable pitch drifting.
3. **The "Riser" Engine:** **Mod Wheel** -> **DCO 2 Semi** (+100%) + **Filter Res** (+50%).
   - *Effect:* Pushing the mod wheel up creates a massive, screaming riser.
4. **The Rhythmic Pulse:** **LFO 1 (Synced)** -> **VCA Level** (+100%).
   - *Effect:* Acts as a built-in "Trance Gate."

---
*For a quick guide on finding these controls, see the [01-Learning/Quick-Reference/parameter-cheat-sheet.md](../01-Learning/Quick-Reference/parameter-cheat-sheet.md).*

```

---

