# Kepler - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 00-START-HERE.md

```markdown
# Kepler: Start Here

Welcome to the **Kepler** Deeper Dive. Kepler is a meticulous recreation of the legendary **Roland JUNO-6™**, bringing the warm, "human" character of 80s analog synthesis directly into FL Studio.

## 🗺️ Quick Navigation Guide

### 1. The Essentials (Start Here)
- **[README.md](./README.md):** The central hub for research goals and specifications.
- **[01-Learning/Quick-Reference/parameter-cheat-sheet.md](./01-Learning/Quick-Reference/parameter-cheat-sheet.md):** A fast breakdown of every slider and switch.
- **[01-Learning/Quick-Reference/juno-architecture-101.md](./01-Learning/Quick-Reference/juno-architecture-101.md):** Why the "Single Oscillator" design is so powerful.

### 2. Core Concepts
- **[01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md](./01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md):** Visual tour of the DCO, VCF, and VCA sections.
- **[01-Learning/Concepts/03_Vibe_Translation_Guide.md](./01-Learning/Concepts/03_Vibe_Translation_Guide.md):** Dialing in 80s Moody, Vibey, and Jazzy patches.

### 3. Workflow Recipes
- **[03-Workflows/by-goal/classic-lush-pads.md](./03-Workflows/by-goal/classic-lush-pads.md):** The signature "JUNO" pad setup.
- **[03-Workflows/by-goal/snappy-80s-bass.md](./03-Workflows/by-goal/snappy-80s-bass.md):** Punchy low-end using the Sub-Oscillator.
- **[03-Workflows/by-goal/arpeggiated-sequences.md](./03-Workflows/by-goal/arpeggiated-sequences.md):** Creating hypnotic, rhythmic motion.

## 🚀 Rapid Success Protocol
1. **Initialize the Patch** (Start clean).
2. **Select the Saw Wave** (Middle fader in DCO).
3. **Engage Chorus II** (The secret sauce).
4. **Set Filter Cutoff to 50%** and increase **Resonance** for character.
5. **Add the Sub-Oscillator** (4th fader in DCO) for instant weight.

---
*For technical specs and parameter data, see the [02-Data/](./02-Data/) folder.*

```

---

## FILE: README.md

```markdown
# Kepler - Vintage Analog Synthesizer

`\`\`
██╗  ██╗███████╗██████╗ ██╗     ███████╗██████╗ 
██║ ██╔╝██╔════╝██╔══██╗██║     ██╔════╝██╔══██╗
█████╔╝ █████╗  ██████╔╝██║     █████╗  ██████╔╝
██╔═██╗ ██╔══╝  ██╔═══╝ ██║     ██╔══╝  ██╔══██╗
██║  ██╗███████╗██║     ███████╗███████╗██║  ██║
╚═╝  ╚═╝╚══════╝╚═╝     ╚══════╝╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Subtractive Synthesizer / JUNO-6 Emulation
**Category:** Generator / Analog / Vintage
**Official Manual:** [Image-Line Kepler Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Kepler.htm)

---

## 🎯 What is Kepler?

Kepler is a meticulous software recreation of the iconic **Roland JUNO-6™** synthesizer. It captures the warm, "human" character of 1980s analog hardware, known for its simple yet powerful architecture. It excels at lush pads, classic 80s basslines, and piercing leads, featuring the legendary JUNO-style chorus and a highly resonant filter.

**Key Capabilities:**
- **Authentic DCO:** Emulates the Digitally Controlled Oscillators (Pulse, Saw, Square).
- **Sub-Oscillator:** Adds deep low-end weight to any patch.
- **Vintage Chorus:** Built-in "I" and "II" chorus modes for instant thickness.
- **Resonant VCF:** High-quality low-pass filter with self-oscillation.
- **Built-in Arpeggiator:** Classic "Up/Down" modes with tempo sync.
- **PWM Modulation:** Pulse Width Modulation via LFO or Envelope.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **juno-architecture-101.md**
3. Create **parameter-cheat-sheet.md**
4. Select the "Saw" wave and click the "Chorus II" button to hear the 80s come alive.

### For Sound Designers:
1. Study **creating-80s-bass-patches.md**
2. Review **vowel-filter-resonance.md**
3. Learn **pwm-modulation-tricks.md**

### For Synth Enthusiasts:
1. Study **recreating-classic-patches.md**
2. Review **lfo-retrigger-behavior.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **DCO Section:** Range, LFO, PWM, Waveforms.
  - **VCF Section:** Freq, Res, Env, LFO, Kybd.
  - **VCA Section:** Env/Gate switch.
  - **Chorus:** I, II, and I+II modes.
  - **Arp:** Range and Mode.

- [ ] **juno-architecture-101.md**
  - Explaining the "Single Oscillator" design.
  - Why the Sub-Osc and Chorus are the keys to the JUNO sound.

#### 02-Data/parameters/
- [ ] **kepler-params.json**
  `\`\`json
  {
    "plugin_name": "Kepler",
    "category": "Vintage Synth",
    "sections": {
      "VCF": {
        "Frequency": "Filter cutoff",
        "Resonance": "Feedback amount",
        "Kybd": "Key tracking"
      }
    }
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **classic-lush-pads.md**
  - Using Saw + Pulse waves.
  - Chorus I+II active.
  - Long Attack and Release.
  - Subtle LFO on Pitch.

- [ ] **snappy-80s-bass.md**
  - Pulse wave with narrow PWM.
  - Sub-oscillator at 100%.
  - Fast Envelope modulation on VCF.

- [ ] **arpeggiated-sequences.md**
  - Setting Arp to "Up/Down".
  - Syncing to 1/16 notes.
  - Modulating Filter Freq in real-time.

#### 03-Workflows/by-context/
- [ ] **vaporwave-sound-design.md**
- [ ] **synthwave-lead-chains.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **chorus-mode-analysis.md**
  - Audible difference between Mode I (slow/subtle) and Mode II (faster/wider).
  - The "Secret" I+II mode.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** The JUNO Workflow

**Tasks:**
1. Build a patch from scratch (Initialize)
2. Test the High Pass Filter (Fixed vs Sweeppable?)
3. Experiment with the Arpeggiator Range
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Can the filter self-oscillate? (Yes, and what frequency?)
- How do I sync the LFO to the project BPM?

### Phase 2: Emulation Accuracy (Week 2)
**Goal:** Vintage Character

**Tasks:**
1. Compare Kepler to a real JUNO-6 recording (if possible)
2. Test the "Noise" fader for percussive sounds
3. Create classic-lush-pads.md

---

## 📊 Plugin Specifications to Document

### Engine
- Polyphony (6-voice original emulation?)
- Oscillator Types (DCO)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is my sound so wide? (Check the Chorus section).
2. How do I make it sound like a Nintendo? (Turn off Chorus, use Square wave, short envelopes).

### Advanced Usage
1. How does the "Hold" button interact with FL Studio's sustain pedal handling?

---

## 🔗 Cross-Reference with Other Plugins

Kepler is often used with:
- **Kepler Exo** (The advanced version)
- **Fruity Delay 3** (Tape delay complement)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Kepler/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── juno-architecture-101.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── kepler-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── classic-lush-pads.md
│   │   └── snappy-80s-bass.md
│
└── 04-Reference/
    └── chorus-mode-analysis.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Kepler Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Kepler.htm)
- [Kepler Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Kepler_tutorials.htm)
- [Kepler Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+kepler+tutorial)

### Community Resources
- [Kepler Subreddit](https://www.reddit.com/r/FL_Studio/search?q=kepler&restrict_sr=1)
- [Kepler User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Kepler Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "JUNO-6 Synthesis Fundamentals" - Understanding classic analog synthesis
- "Vintage Synthesizer Emulation" - How analog emulations work
- "80s Synth Sound Design" - Creating authentic retro sounds

### Advanced Techniques
- **PWM Mastery:** Understanding pulse width modulation
- **Chorus Integration:** Mastering the built-in chorus effects
- **Sub-Oscillator Usage:** Using the sub-oscillator for bass enhancement

---

## 📚 In-Depth Technical Analysis

### JUNO-6 Architecture Emulation
Kepler implements a meticulous emulation of the classic Roland JUNO-6:
- **DCO Design:** Digitally Controlled Oscillator architecture
- **Single Oscillator:** One oscillator with multiple waveforms
- **Sub-Oscillator:** Additional oscillator at octave below
- **Analog Filter:** Classic low-pass filter with resonance
- **Built-in Effects:** Integrated chorus and other effects

### Oscillator System
The oscillator architecture features:
- **DCO Technology:** Digitally controlled analog-style oscillators
- **Waveform Selection:** Sawtooth, Pulse, Square, and combinations
- **Pulse Width Modulation:** Variable pulse width with modulation
- **Sub-Oscillator:** Additional oscillator at octave below main
- **LFO Integration:** Modulation of oscillator parameters

### Filter Architecture
The VCF (Voltage Controlled Filter) system includes:
- **Low-Pass Filter:** Classic analog-style low-pass filtering
- **Resonance Control:** Emphasis at cutoff frequency
- **Self-Oscillation:** Ability to oscillate at high resonance
- **Key Tracking:** Filter response to keyboard position
- **Envelope Modulation:** Filter cutoff controlled by envelope

### Chorus System
The built-in chorus provides authentic JUNO character:
- **Chorus I:** Subtle, slow chorus effect
- **Chorus II:** Faster, wider chorus effect
- **Chorus I+II:** Combined chorus modes for maximum thickness
- **Analog Emulation:** Emulates the classic JUNO chorus circuit
- **Stereo Enhancement:** Creates width and depth

### Arpeggiator System
The integrated arpeggiator features:
- **Pattern Modes:** Up, Down, Up/Down patterns
- **Range Control:** Adjustable note range
- **Tempo Sync:** Synchronization with project tempo
- **Note Resolution:** Various rhythmic subdivisions
- **Real-time Control:** Live arpeggiator manipulation

### Signal Processing Chain
The internal architecture processes audio as follows:
- **Input Stage:** MIDI note and velocity processing
- **Oscillator Generation:** DCO and sub-oscillator synthesis
- **Filter Processing:** VCF application with resonance
- **Envelope Application:** ADSR envelope shaping
- **Chorus Processing:** Built-in chorus application
- **Output Stage:** Final signal routing and monitoring

### Vintage Character Emulation
Kepler captures the authentic JUNO-6 character:
- **Analog Warmth:** Emulates analog circuit behavior
- **DCO Imperfections:** Includes subtle analog artifacts
- **Filter Response:** Authentic low-pass filter characteristics
- **Chorus Texture:** Classic JUNO chorus sound
- **Overall Feel:** Captures the "human" character of analog synths

## 🎛️ Parameter Deep Dive

### DCO (Digitally Controlled Oscillator) Controls
- **Waveform Selection:**
  - **Sawtooth:** Rich harmonic content, classic JUNO sound
    - Range: Pure sawtooth setting
    - Effect: Creates full harmonic spectrum
    - Use for: Pads, leads, and bass sounds
    - Pro tip: Essential for classic JUNO character
  - **Pulse/Square:** Hollow, reedy sound
    - Range: Variable pulse width (square to narrow pulse)
    - Effect: Creates odd harmonics only
    - Use for: Reed sounds, hollow leads
    - Pro tip: Use with PWM for classic JUNO character
  - **Behavior:**
    - Sawtooth: Full harmonic content, warm sound
    - Square: Odd harmonics only, hollow sound
    - Pulse: Variable harmonic content based on width
    - Pro tip: Combine with sub-oscillator for full sound
  - **Applications:**
    - Classic pads: Sawtooth with chorus
    - Hollow leads: Square with filter modulation
    - Reed sounds: Pulse with narrow width
    - Bass sounds: Sawtooth with sub-oscillator
    - Pro tip: Use sawtooth for authentic JUNO sound

### Pulse Width Modulation (PWM)
- **Function:** Modulates the pulse width of square/pulse waves
  - Range: 0-100% (typically)
  - Effect: Changes harmonic content and timbre
  - Use for: Creating evolving timbre changes
  - Pro tip: Essential for classic JUNO character
- **Behavior:**
  - 0%: Narrow pulse width, hollow sound
  - 50%: Square wave, balanced harmonic content
  - 100%: Wide pulse width, different harmonic content
  - Pro tip: Use LFO for classic PWM modulation
- **Applications:**
  - Classic JUNO sound: LFO-modulated PWM
  - Reed sounds: Static PWM for hollow character
  - Evolving textures: Envelope-modulated PWM
  - Creative effects: Extreme PWM for unique timbres
  - Pro tip: Use with chorus for authentic character

### Sub-Oscillator Controls
- **Function:** Adds octave-down oscillator for low-end weight
  - Range: 0-100% (typically)
  - Effect: Adds fundamental frequency at octave below
  - Use for: Enhancing low-end presence
  - Pro tip: Essential for 80s bass sounds
- **Behavior:**
  - 0%: No sub-oscillator
  - 50%: Balanced sub-oscillator level
  - 100%: Maximum sub-oscillator level
  - Pro tip: Use for powerful bass sounds
- **Applications:**
  - Bass enhancement: 100% for maximum low-end
  - Pad thickness: 20-40% for subtle low-end
  - Lead weight: 30-60% for presence
  - Creative bass: Variable levels for character
  - Pro tip: Use for authentic 80s bass character

### VCF (Voltage Controlled Filter) Controls
- **Cutoff Frequency:**
  - **Function:** Controls the filter's cutoff point
    - Range: Low to high frequencies (typically 20Hz to 20kHz)
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

### Filter Envelope Controls
- **Function:** Controls filter cutoff over time
  - Range: Negative to positive values
  - Effect: Modulates filter cutoff during note
  - Use for: Creating dynamic filter changes
  - Pro tip: Essential for classic synth sounds
- **Behavior:**
  - Positive values: Opens filter during note
  - Negative values: Closes filter during note
  - Pro tip: Use for dynamic filter expression
- **Applications:**
  - Opening filter: Positive values for brightness increase
  - Closing filter: Negative values for brightness decrease
  - Dynamic expression: Variable values for expression
  - Creative effects: Extreme values for unique effects
  - Pro tip: Use for classic synth filter sweeps

### VCA (Voltage Controlled Amplifier) Controls
- **Function:** Controls amplitude envelope
  - **Gate vs Env:** Gate mode for percussive sounds, Env for sustained sounds
  - **ADSR Envelope:** Attack, Decay, Sustain, Release controls
  - **Velocity Sensitivity:** Response to MIDI velocity
  - **Use for:** Controlling note dynamics
  - **Pro tip:** Essential for expressive playing
- **Behavior:**
  - Gate: Fast attack and release for percussive sounds
  - Env: Full ADSR envelope for sustained sounds
  - Pro tip: Use Env for most applications
- **Applications:**
  - Percussive: Gate mode for quick sounds
  - Sustained: Env mode for pads and leads
  - Dynamic: Full envelope for expressive sounds
  - Creative: Variable envelopes for unique effects
  - Pro tip: Use Env for authentic JUNO response

### Chorus Controls
- **Chorus I:** Subtle, slow chorus effect
  - Range: On/Off (typically)
  - Effect: Adds gentle stereo width and thickness
  - Use for: Subtle enhancement
  - Pro tip: Use for gentle thickness addition

- **Chorus II:** Faster, wider chorus effect
  - Range: On/Off (typically)
  - Effect: Adds more pronounced stereo width and movement
  - Use for: More obvious thickness
  - Pro tip: Use for classic JUNO character

- **Chorus I+II:** Combined chorus modes
  - Range: On/Off (typically)
  - Effect: Maximum thickness and width
  - Use for: Maximum JUNO character
  - Pro tip: Use for classic lush pads

### Arpeggiator Controls
- **Function:** Built-in arpeggiator with multiple modes
  - **Range:** Various note ranges (typically 1-4 octaves)
  - **Mode:** Up, Down, Up/Down patterns
  - **Speed:** Tempo-synced or free-running
  - **Effect:** Creates automatic arpeggiated patterns
  - **Pro tip:** Essential for 80s-style sequences
- **Behavior:**
  - Up: Ascending arpeggio pattern
  - Down: Descending arpeggio pattern
  - Up/Down: Alternating arpeggio pattern
  - Pro tip: Sync to project tempo for precision
- **Applications:**
  - Classic sequences: Up/Down mode for 80s sequences
  - Rhythmic patterns: Various ranges for different patterns
  - Live performance: Real-time arpeggiator control
  - Creative sequences: Variable patterns for interest
  - Pro tip: Use for authentic 80s sequences

## 🎼 Sound Design Applications

### 80s Synth Recreation
Using Kepler for authentic 80s sounds:

**Classic Pads:**
- **Lush Pad Setup:** Creating the classic JUNO pad sound
  - Use sawtooth waveform with sub-oscillator
  - Apply Chorus I+II for thickness
  - Set long attack and release times
  - Essential for 80s ballads and synthpop
  - Perfect for lush, evolving textures
  - Pro tip: Use with reverb for ethereal quality

- **PWM Pads:** Creating evolving PWM pad sounds
  - Use pulse waveform with LFO-modulated PWM
  - Apply appropriate filter settings
  - Essential for evolving 80s textures
  - Perfect for atmospheric music
  - Pro tip: Use for evolving, organic textures

- **Filter Sweep Pads:** Creating dynamic filter sweep pads
  - Use sawtooth with envelope-modulated filter
  - Apply appropriate resonance settings
  - Essential for dynamic pad sounds
  - Perfect for evolving arrangements
  - Pro tip: Use for building tension and release

### Bass Applications
Using Kepler for 80s-style bass sounds:

**Classic 80s Bass:**
- **Snappy Bass Setup:** Creating the classic JUNO bass sound
  - Use pulse waveform with narrow PWM
  - Apply sub-oscillator for low-end weight
  - Set fast envelope for snappy response
  - Essential for 80s pop and synthwave
  - Perfect for punchy basslines
  - Pro tip: Use with chorus for authentic character

- **Squirming Bass:** Creating animated bass sounds
  - Use LFO-modulated filter cutoff
  - Apply appropriate resonance settings
  - Essential for animated basslines
  - Perfect for evolving bass patterns
  - Pro tip: Use for basslines that move and squirm

- **Sub-Bass Enhancement:** Adding low-end weight to bass sounds
  - Use sub-oscillator for fundamental enhancement
  - Apply appropriate filter settings
  - Essential for powerful bass sounds
  - Perfect for dance music
  - Pro tip: Use for maximum low-end impact

### Lead Applications
Using Kepler for 80s-style lead sounds:

**Piercing Leads:**
- **Classic Lead Setup:** Creating the classic JUNO lead sound
  - Use sawtooth or square waveform
  - Apply appropriate filter settings
  - Use chorus for thickness
  - Essential for 80s lead sounds
  - Perfect for cutting through mixes
  - Pro tip: Use for leads that need to cut through

- **PWM Leads:** Creating evolving lead sounds
  - Use pulse waveform with envelope-modulated PWM
  - Apply appropriate filter settings
  - Essential for evolving lead sounds
  - Perfect for expressive leads
  - Pro tip: Use for leads with character

- **Filter Sweep Leads:** Creating dynamic lead sounds
  - Use envelope-modulated filter cutoff
  - Apply appropriate resonance settings
  - Essential for dynamic lead expression
  - Perfect for expressive lead playing
  - Pro tip: Use for leads with movement

### Creative Applications
Using Kepler for experimental applications:

**Vowel Simulation:**
- **Formant Filtering:** Creating vowel-like sounds
  - Use resonance to emphasize specific frequencies
  - Apply appropriate envelope settings
  - Perfect for talking synth effects
  - Essential for formant synthesis
  - Useful for robotic vocal effects

**Rhythmic Applications:**
- **Arpeggiated Patterns:** Creating rhythmic sequences
  - Use built-in arpeggiator for sequences
  - Apply appropriate range and mode settings
  - Perfect for 80s-style sequences
  - Essential for rhythmic patterns
  - Useful for evolving sequences

**Atmospheric Applications:**
- **Evolving Textures:** Creating evolving atmospheric sounds
  - Use automation for evolving parameters
  - Apply appropriate chorus settings
  - Perfect for ambient music
  - Essential for evolving textures
  - Useful for atmospheric soundscapes

## 🧪 Experimental Techniques

### Advanced JUNO Applications
Creative uses of Kepler's vintage capabilities:

**PWM Experimentation:**
- **Complex PWM Modulation:** Creating evolving PWM patterns
  - Use multiple modulation sources for PWM
  - Create complex harmonic evolution
  - Perfect for evolving textures
  - Essential for sophisticated PWM design
  - Useful for organic harmonic movement

**Filter Automation:**
- **Dynamic Filter Changes:** Automating filter parameters for evolving sounds
  - Create evolving filter characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic filter expression
  - Use for expressive filter control

**Chorus Combinations:**
- **Advanced Chorus Techniques:** Using chorus modes in sophisticated ways
  - Combine different chorus modes for unique effects
  - Use automation for evolving chorus
  - Perfect for sophisticated chorus design
  - Essential for advanced chorus applications
  - Useful for evolving chorus textures

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Complex Automation:** Creating evolving parameter patterns
  - Create evolving sound characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic sound expression
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

### Vintage Synth Workflows
Efficient approaches to using Kepler for 80s-style synthesis:

**Pad Creation:**
- **Lush Pad Setup:** Creating classic JUNO-style pads
  - Use sawtooth waveform with chorus
  - Apply appropriate envelope settings
  - Essential for 80s-style music
  - Pro tip: Use long release times for smooth endings

- **PWM Pad Creation:** Creating evolving PWM pads
  - Use pulse waveform with LFO-modulated PWM
  - Apply appropriate filter settings
  - Essential for evolving textures
  - Pro tip: Use for organic, evolving sounds

**Bass Design:**
- **Classic 80s Bass:** Creating authentic 80s bass sounds
  - Use pulse waveform with sub-oscillator
  - Apply appropriate envelope settings
  - Essential for 80s-style bass
  - Pro tip: Use for punchy, snappy basslines

- **Animated Bass:** Creating moving bass sounds
  - Use LFO-modulated filter cutoff
  - Apply appropriate resonance settings
  - Essential for animated basslines
  - Pro tip: Use for basslines that squirm and move

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

### Synthwave and Retrowave
- **Authentic 80s Sounds:** Creating genuine JUNO-6 sounds
- **Lush Pads:** Creating atmospheric pad sounds
- **Punchy Bass:** Creating snappy bass sounds
- **Piercing Leads:** Creating cutting lead sounds
- **Arpeggiated Sequences:** Creating rhythmic sequences

### Vaporwave and Lo-Fi
- **Nostalgic Pads:** Creating nostalgic, dreamy textures
- **Chorus Enhancement:** Using built-in chorus for character
- **Filter Automation:** Creating evolving filter patterns
- **Mix Enhancement:** Using vintage character for mix clarity
- **Creative Effects:** Adding unique character to elements

### Electronic Dance Music
- **80s-Style Leads:** Creating cutting lead sounds
- **Bass Enhancement:** Creating powerful basslines
- **Rhythmic Elements:** Creating rhythmic patterns with arpeggiator
- [ ] Recreate the classic "JUNO Brass" preset from scratch
- [ ] Explain why the Sub-Oscillator is essential for 80s bass
- [ ] Use the Arpeggiator to create a synced sequence
- [ ] Demonstrate the difference between Chorus I and II
- [ ] Create a lush pad with proper Chorus I+II settings
- [ ] Set up a snappy 80s-style bass with PWM
- [ ] Use the sub-oscillator for maximum low-end enhancement
- [ ] Apply appropriate filter settings for different musical genres
- [ ] Create arpeggiated sequences with the built-in arpeggiator
- [ ] Troubleshoot harshness and aliasing issues effectively
- [ ] Integrate Kepler into efficient 80s-style workflows
- [ ] Create genre-specific patches optimized for different musical styles
- [ ] Optimize Kepler settings for minimal CPU usage
- [ ] Use Kepler for creative sound design applications
- [ ] Set up advanced routing for complex projects
- [ ] Apply Kepler in live performance scenarios
- [ ] Create experimental sounds with extreme parameter settings
- [ ] Combine Kepler with other effects for layered processing
- [ ] Integrate Kepler with other automation tools seamlessly
- [ ] Create custom synthesis workflows for specific creative needs
- [ ] Use Kepler effectively in large, complex projects
- [ ] Generate complex rhythmic patterns with arpeggiator automation
- [ ] Create hybrid synthesis patches combining vintage and modern methods
- [ ] Apply Kepler in mastering contexts with appropriate care
- [ ] Create complex multi-stage synthesis chains with smooth automation
- [ ] Design custom JUNO-6 patches for specific musical contexts
- [ ] Use Kepler for creative vocal processing applications
- [ ] Apply advanced PWM techniques for texture control
- [ ] Create genre-specific preset libraries for efficient workflow
- [ ] Integrate Kepler with external hardware for hybrid processing
- [ ] Use Kepler for audio restoration and creative repair applications
- [ ] Combine Kepler with other spectral processing tools
- [ ] Apply Kepler in surround sound or multi-channel setups
- [ ] Create complex harmonic relationships using multiple parameters
- [ ] Use Kepler for creative instrumental processing applications
- [ ] Integrate Kepler with other automation tools for complex control
- [ ] Create complex atmospheric textures using multiple parameters
- [ ] Design custom DCO algorithms for unique harmonic structures
- [ ] Apply advanced filtering techniques for tone shaping
- [ ] Use Kepler for creative stereo enhancement beyond traditional methods
- [ ] Combine Kepler with convolution for hybrid synthesis approaches
- [ ] Implement advanced envelope shaping for dynamic expression
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use Kepler for creative sound design in film and game audio
- [ ] Apply Kepler in live sound reinforcement scenarios
- [ ] Create experimental synthesis textures using extreme parameter settings
- [ ] Integrate Kepler with external synthesizers for complex sound design
- [ ] Generate complex harmonic structures with precise control
- [ ] Use Kepler for formant synthesis and vowel creation
- [ ] Apply advanced resonance techniques for character enhancement
- [ ] Create evolving textures using parameter automation
- [ ] Design custom arpeggiator patterns for rhythmic expression
- [ ] Use Kepler for creative bass synthesis beyond traditional approaches
- [ ] Combine Kepler with other vintage emulations for authentic sounds
- [ ] Apply Kepler in educational contexts for synthesis learning
- [ ] Create custom 80s-style patches for retro music production
- [ ] Use Kepler for creative lead synthesis with character
- [ ] Implement advanced chorus techniques for thickness and width

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What Kepler Is And When To Use It

## Purpose & Identity

Kepler is FL Studio's meticulous software recreation of the iconic **Roland JUNO-6** analog synthesizer from 1982. It captures the warm, "human" character of 1980s analog hardware, known for its deceptively simple architecture that produces rich, musical tones [SRC: IL-MAN].

**60-Second Mental Model:**
One oscillator + sub-oscillator + legendary analog filter + built-in chorus = instant 80s magic. The JUNO design proves that limitations breed creativity—fewer options force better decisions.

## Where It Fits in FL Studio

| Context | Role | Typical Usage |
|---------|------|---------------|
| **Lead Generation** | Main melodic/harmonic content | Synth leads, basslines, pads |
| **Background Textures** | Atmospheric support | Pads, drones, ambient layers |
| **Bass Foundation** | Low-end support | 80s-style bass, sub-bass |
| **Rhythmic Elements** | Sequenced patterns | Arpeggios, bass sequences |
| **Vintage Character** | Analog warmth injection | Any source needing vintage vibe |

## When to Use Kepler

### Use It For:
- **Lush 80s pads** - Sawtooth + Chorus I+II = instant JUNO pad [SRC: REPUTABLE]
- **Punchy basslines** - Pulse wave + sub-osc = snappy 80s bass
- **Cutting leads** - Filtered sawtooth with envelope modulation
- **Vaporwave/retrowave** - Authentic 80s character
- **Analog warmth** - When digital synths sound too clean
- **Arpeggiated sequences** - Built-in arp for classic patterns
- **Simple, effective sounds** - When you need results fast

### Don't Use It For:
- **Complex wavetable sounds** - Use FLEX or Harmor instead
- **FM synthesis** - Use Sytrus or Morphine
- **Granular/textural** - Use Harmor or Gross Beat
- **Modern EDM supersaws** - Use FLEX or third-party synths
- **When you need 100+ modulation options** - Use Patcher or modular setups

## Hip-Hop/R&B Context

### Typical Placements

| Element | Patch Type | Why It Works |
|---------|-----------|--------------|
| **Lead Synth** | Filtered saw lead | Cuts through mix, vintage character |
| **Bass** | Pulse + sub-osc | Punchy, defined low-end |
| **Pad Layer** | Saw pad with chorus | Fills space, analog warmth |
| **Arp/Seq** | Up/Down pattern | Rhythmic interest, 80s vibe |
| **Texture** | PWM pad | Evolving, organic movement |

### Genre-Specific Applications

**Hip-Hop:**
- 808-style bass with sub-oscillator
- Lead synths for melodic trap
- Arpeggios for rhythmic interest
- Vintage textures for lo-fi

**R&B:**
- Warm pads for emotional sections
- Bass for neo-soul vibes
- Lead for 80s-inspired productions
- Textures for atmospheric moments

**Pop-Hip-Hop:**
- Versatile bass and lead sounds
- Quick, effective patch creation
- Vintage-modern hybrid sounds

## Quick Decision Matrix

| Sound Needed | Use Kepler? | Recommended Approach |
|-------------|-------------|---------------------|
| 80s pad | Yes | Saw + Chorus I+II |
| 808 bass | Yes | Pulse + 100% sub-osc |
| Wavetable lead | No | Use FLEX instead |
| FM bells | No | Use Sytrus |
| Vintage bass | Yes | Narrow PWM + fast filter |
| Complex sequence | Maybe | Use arpeggiator |
| Ambient drone | Yes | Slow filter, chorus |
| Modern supersaw | Partial | Saw + manual unison |

## Related Plugins

| Plugin | Use Instead When... |
|--------|---------------------|
| Kepler Exo | You need more modulation and control |
| FLEX | You need modern synthesis, wavetables, more voices |
| Sytrus | You need FM synthesis |
| Harmor | You need additive/granular, image synthesis |
| MiniSynth | You need simpler, more immediate results |

---

**Version:** 1.0
**Sources:** [IL-MAN], [SRC: REPUTABLE]
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow

## UI Tour

### Main Interface Layout

`\`\`
┌─────────────────────────────────────────────┐
│  KEPLER - JUNO-6 Emulation                  │
│                                             │
│  ┌──────────┬──────────┬──────────┐        │
│  │   DCO    │   VCF    │   VCA    │        │
│  │ (Osc)    │ (Filter) │ (Amp)    │        │
│  └──────────┴──────────┴──────────┘        │
│                                             │
│  ┌──────────┬──────────┬──────────┐        │
│  │   LFO    │  CHORUS  │   ARP    │        │
│  └──────────┴──────────┴──────────┘        │
└─────────────────────────────────────────────┘
`\`\`

### Section Overview

| Section | Controls | Function |
|---------|----------|----------|
| **DCO** | Waveform, Range, PWM, Sub-Osc, LFO | Oscillator sound generation |
| **VCF** | Freq, Res, Env, LFO, Kybd | Filter tone shaping |
| **VCA** | Env/Gate, ADSR | Amplitude envelope |
| **LFO** | Rate, Delay | Modulation source |
| **Chorus** | I, II, I+II buttons | Stereo thickening |
| **Arp** | Range, Mode, Rate | Automatic patterns |

## Signal Flow

`\`\`
MIDI Note
    │
    ├──→ [DCO] ──────────────────────────────────┐
    │      │                                       │
    │      ├──→ Sawtooth Wave                     │
    │      ├──→ Pulse Wave (PWM)                  │
    │      ├──→ Sub-Oscillator (-1 octave)        │
    │      └──→ Noise                             │
    │              │                               │
    │              ↓                               │
    │      [LFO → Pitch Modulation]               │
    │              │                               │
    └──→ [VCF] ────┤                               │
           │       │                               │
           ├──→ Cutoff Frequency                   │
           ├──→ Resonance                         │
           ├──→ Env Amount (filter envelope)      │
           ├──→ LFO Amount (filter modulation)    │
           └──→ Keyboard Tracking                 │
                  │                               │
                  ↓                               │
           [Filter processes mixed oscillator]    │
                  │                               │
    ┌─────────────┘                               │
    │                                             │
    ↓                                             │
[VCA + Envelope] ────────────────────────────────┤
    │                                             │
    ├──→ Gate Mode (organ-style)                  │
    └──→ Env Mode (ADSR envelope)                 │
           │                                      │
           ↓                                      │
    [Chorus I/II/I+II] ──────────────────────────┤
           │                                      │
           ├──→ Chorus I (subtle)                 │
           ├──→ Chorus II (pronounced)            │
           └──→ I+II (maximum thickness)          │
                  │                               │
                  ↓                               │
           [Final Output] ←───────────────────────┘
`\`\`

## Key Interactions

### DCO (Digitally Controlled Oscillator)

**Waveform Selection:**
- **Sawtooth:** Rich, full sound—classic for pads and leads
- **Pulse:** Hollow, reedy—great for bass and brass
- **PWM:** Variable pulse width creates evolving timbres

**Range Selector:**
- 16', 8', 4' settings (like organ footage)
- Lower numbers = higher pitch
- 8' is standard concert pitch

**Pulse Width Modulation (PWM):**
- Manual: Static pulse width
- LFO: Automated pulse width sweep
- Env: Envelope-controlled width

### VCF (Voltage Controlled Filter)

**Cutoff Frequency:**
- Controls which frequencies pass
- Lower = darker, Higher = brighter
- Cornerstone of subtractive synthesis

**Resonance:**
- Emphasizes frequencies at cutoff
- High values can create self-oscillation
- Classic "squelch" sound

**Filter Envelope (Env):**
- Positive: Opens filter during note
- Negative: Closes filter during note
- Amount controls intensity

**Keyboard Tracking (Kybd):**  
- Filter follows keyboard pitch
- Ensures consistent tone across range

### VCA (Voltage Controlled Amplifier)

**Gate Mode:**
- Organ-style on/off
- No sustain control
- Good for percussive sounds

**Env Mode:**
- Full ADSR envelope
- Attack, Decay, Sustain, Release
- Standard for most sounds

### LFO (Low Frequency Oscillator)

**Rate:**
- Speed of modulation
- Can sync to tempo [UNVERIFIED]

**Delay:**
- Time before LFO starts
- Creates evolving modulation

**Destinations:**
- Pitch (vibrato)
- Filter (wah effect)
- Pulse Width (timbre shift)

### Chorus Section

**Chorus I:**
- Subtle, slow modulation
- Gentle stereo width

**Chorus II:**
- Faster, more pronounced
- Classic JUNO width

**Chorus I+II:**
- Both modes combined
- Maximum thickness
- The "secret weapon" [SRC: REPUTABLE]

## Things Beginners Misunderstand

### 1. "It's Just One Oscillator"
- **Misconception:** Limited compared to multi-osc synths
- **Reality:** Sub-oscillator + chorus = deceptively rich sound
- **Fix:** Embrace the limitation—focus on filter and envelope

### 2. "Chorus is Optional"
- **Misconception:** Chorus is an effect you can skip
- **Reality:** Chorus IS the JUNO sound
- **Fix:** Start with Chorus I or II on every patch

### 3. "Filter Self-Oscillation is a Bug"
- **Misconception:** Squealing filter means something's wrong
- **Reality:** It's a feature—creates pure sine waves
- **Fix:** Use high resonance with key tracking for melodic filtering

### 4. "More Envelope is Better"
- **Misconception:** High filter envelope = better sound
- **Reality:** Subtle envelope moves often sound more professional
- **Fix:** Start with moderate amounts, adjust to taste

### 5. "PWM is Just for Special Effects"
- **Misconception:** PWM sounds too "animated"
- **Reality:** Gentle PWM adds life to static sounds
- **Fix:** Try slow LFO PWM on pads for subtle movement

## Right-Click Behaviors

| Control | Right-Click Menu |
|---------|------------------|
| Any knob | Reset to default, MIDI learn, Create automation clip |
| Waveform buttons | N/A (toggle only) |
| Chorus buttons | N/A (toggle only) |
| Arp controls | N/A (selector buttons) |

## Verification Checklist

To verify unverified claims:

- [ ] Test LFO sync to project tempo
- [ ] Verify self-oscillation frequency at max resonance
- [ ] Compare Chorus I vs II vs I+II with spectrum analyzer
- [ ] Test keyboard tracking accuracy
- [ ] Verify PWM range and behavior

---

**Version:** 1.0
**Sources:** [IL-MAN], [UNVERIFIED: sync features]
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices

## 1. The JUNO Pad Formula

**What:** Create lush, atmospheric pads instantly

**Technique:**
1. Select **Sawtooth** waveform
2. Enable **Sub-Oscillator** at 30-50%
3. Set **Filter Cutoff** to 50% (half open)
4. Enable **Chorus I+II** (both buttons)
5. Set envelope: **Attack** 30%, **Release** 40%
6. Add subtle **LFO** to pitch (vibrato)

**What to Listen For:**
- Rich, swirling texture
- Stereo width from chorus
- Smooth attack and release
- Not muddy—filter keeps it defined

**Common Pitfall:** Filter too open = harsh; too closed = muddy
**Fix:** Sweep cutoff while holding chord to find sweet spot

---

## 2. The 80s Bass Punch

**What:** Snappy, punchy bass that defined 80s pop

**Technique:**
1. Select **Pulse** waveform
2. Set **PWM** narrow (20-30%)
3. Enable **Sub-Oscillator** at 100%
4. Set **Filter Cutoff** low (20-30%)
5. Set **Filter Env** to positive (opens filter)
6. Fast envelope: **Attack** 0%, **Decay** 20%, **Sustain** 0%

**What to Listen For:**
- Immediate attack
- Defined pitch (not just "thump")
- Sits well in mix without masking

**Pro Tip:** Enable Chorus I for subtle width on bass

---

## 3. PWM Animation

**What:** Add organic movement to static sounds

**Technique:**
1. Select **Pulse** waveform
2. Set **PWM Source** to **LFO**
3. Set **LFO Rate** slow (1-3 Hz estimated)
4. Adjust **PWM Amount** to taste (20-40%)

**What to Listen For:**
- Evolving timbre (not pitch)
- Breathing quality
- Interest without distraction

**Applications:**
- Pads: Slow, subtle animation
- Bass: Medium speed for "squirm"
- Leads: Fast for vibrato-like effect

---

## 4. Filter Self-Oscillation

**What:** Create pure sine waves from filter resonance

**Technique:**
1. Set **Resonance** to maximum
2. Set **Filter Cutoff** to desired pitch
3. Play notes (filter tracks keyboard)
4. Use **Keyboard Tracking** to tune across range

**What to Listen For:**
- Pure sine-like tone
- Pitched resonance follows keys
- Classic "acid" squeal at high notes

**Warning:** Can be loud—turn down volume

---

## 5. The Arpeggiator Foundation

**What:** Create rhythmic sequences instantly

**Technique:**
1. Enable **Arpeggiator**
2. Set **Mode** to Up/Down
3. Set **Range** to 2-3 octaves
4. Hold multiple notes (chord)
5. Adjust **Rate** to sync with tempo [UNVERIFIED]

**What to Listen For:**
- Automatic pattern generation
- Synced to project tempo
- Variation from held notes

**Variations:**
- Up mode: Ascending patterns
- Down mode: Descending patterns
- Range affects pattern length

---

## 6. Chorus Stacking

**What:** Understand and use the three chorus modes

**Technique:**
| Mode | Sound | Best For |
|------|-------|----------|
| **Off** | Mono, thinner | Bass, when space is limited |
| **I** | Subtle width | Subtle enhancement, bass |
| **II** | Pronounced | Standard 80s sound |
| **I+II** | Maximum | Lush pads, maximum width |

**What to Listen For:**
- I: Gentle stereo spread
- II: Classic JUNO movement
- I+II: Thick, almost reverb-like

**Pro Tip:** I+II uses more CPU—use strategically

---

## 7. Envelope Shaping

**What:** Control sound dynamics with ADSR

**ADSR Guidelines:**

| Sound Type | Attack | Decay | Sustain | Release |
|-----------|--------|-------|---------|---------|
| **Pad** | 20-40% | 30% | 70% | 40-60% |
| **Bass** | 0-5% | 15-25% | 40-60% | 10-20% |
| **Lead** | 0-10% | 20% | 80% | 15-30% |
| **Pluck** | 0% | 10-20% | 0% | 10-20% |
| **Organ** | 0% | N/A | 100% | 0% (Gate mode) |

**What to Listen For:**
- Attack: How quickly sound starts
- Sustain: Level while holding note
- Release: How quickly sound fades

---

## 8. Keyboard Tracking

**What:** Maintain consistent tone across keyboard range

**Technique:**
1. Enable **Keyboard Tracking** (Kybd)
2. Filter cutoff follows note pitch
3. Higher notes = higher cutoff

**What to Listen For:**
- Consistent brightness across range
- No "dead" notes at top or bottom
- Natural filter response

**When to Disable:**
- Creating "one-note" bass sounds
- When you want darker high notes
- Special effects

---

## 9. Noise Percussion

**What:** Create drums and percussion with noise

**Technique:**
1. Select **Noise** waveform (if available) [UNVERIFIED]
2. Or use filtered noise from oscillator
3. Set **Filter Cutoff** high
4. Use **Gate** mode for instant on/off
5. Short **Decay** for percussive sounds

**What to Listen For:**
- Snare-like snap
- Hi-hat sizzle
- Percussive attack

---

## 10. Sub-Oscillator Bass Boost

**What:** Add fundamental low-end to any sound

**Technique:**
1. Enable **Sub-Oscillator**
2. Set level based on need:
   - 20-30%: Subtle warmth
   - 50-70%: Noticeable bass boost
   - 100%: Maximum low-end

**What to Listen For:**
- Weight in low frequencies
- Not overwhelming the main oscillator
- Tight, focused bass

**Applications:**
- Bass sounds: Always 100%
- Leads: 30-50% for body
- Pads: 20-40% for thickness

---

## 11. Velocity Dynamics

**What:** Add expression with velocity sensitivity

**Technique:**
1. Kepler responds to MIDI velocity
2. Harder playing = louder, brighter
3. Softer playing = quieter, darker

**What to Listen For:**
- Dynamic response to playing
- Expressive performance
- Natural variation

**Enhancement:**
- Add velocity to filter cutoff for brightness control
- Use aftertouch if available [UNVERIFIED]

---

## 12. The Initialize Workflow

**What:** Start fresh for custom patch creation

**Technique:**
1. Initialize patch (return all to defaults)
2. Start with **Sawtooth** or **Pulse**
3. Set **Filter Cutoff** to middle
4. Build sound step by step:
   - Oscillator first
   - Filter second
   - Envelope third
   - Chorus last

**What to Listen For:**
- Each element contributing clearly
- No accidental settings
- Controlled, intentional sound

---

## Common Pitfalls & Fixes

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| **Filter too open** | Harsh, digital sound | Lower cutoff, add resonance |
| **No sub-osc on bass** | Thin bass | Enable sub-osc at 100% |
| **Forgot chorus** | Thin, lifeless sound | Enable Chorus I or II |
| **Attack too slow** | Late, lagging notes | Reduce attack to 0-10% |
| **Release too short** | Choppy sound | Increase release |
| **Too much resonance** | Squealing, harsh | Reduce resonance |
| **Wrong octave range** | Too high/low | Adjust Range selector |

## Automation Ideas

1. **Filter Sweeps**
   - Automate cutoff for build-ups
   - Classic synth effect

2. **PWM Movement**
   - Automate PWM amount
   - Creates evolving pads

3. **Chorus Toggle**
   - Switch chorus on/off for sections
   - Instant arrangement change

4. **LFO Rate**
   - Speed up LFO for intensity
   - Slow down for relaxation

---

**Version:** 1.0
**Sources:** [IL-MAN], [SRC: REPUTABLE]
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Kepler

Mapping vintage JUNO-style controls to modern Hip-Hop, R&B, and Pop-Hip-Hop vibes.

---

## 1. MOODY
*80s Melancholy, dark textures, and "Night Drive" energy.*
- **The Mental Model:** A rainy city street at midnight (Drive soundtrack vibes).
- **Kepler Levers:**
    - **Filter (Freq):** Lower it significantly (20–40%) to remove the "shine."
    - **Sub-Osc:** Set to 100% to provide a heavy, foundational weight.
    - **Chorus I:** Use for a slow, subtle drift that feels lonely rather than energetic.
    - **Release:** Long (50%+) so notes bleed into each other like shadows.
    - **DCO (LFO):** Very slight pitch modulation (1–2%) to simulate "tuning instability."
- **Listen For:** A warm, dark presence that sits "behind" the beat.

## 2. UPBEAT
*Synth-Pop energy, bright leads, and rhythmic bounce.*
- **The Mental Model:** Energetic 80s Pop or bright, high-energy Trap leads.
- **Kepler Levers:**
    - **Filter (Freq):** Open wide (80–100%).
    - **Arpeggiator:** Mode: Up/Down, Range: 2, Speed: 1/16.
    - **Chorus II:** The faster speed adds energy and movement.
    - **Attack:** Short/Instant to keep the transients "snappy."
    - **Waveforms:** Combine Saw and Pulse for maximum harmonic brightness.
- **Listen For:** "Sparkle," clarity, and rhythmic precision.

## 3. PSYCHEDELIC
*Motion, evolving filters, "trippy" detuning, and resonant squelch.*
- **The Mental Model:** Travis Scott / Mike Dean synth workouts; hallucinogenic textures.
- **Kepler Levers:**
    - **Resonance:** High (70–90%). Sweep the **Freq** fader for "vocal" resonant effects.
    - **PWM:** Set to **LFO** and crank the Depth. This creates a "phasing" harmonic shift.
    - **LFO Rate:** Automate the speed to go from slow to chaotic.
    - **Chorus I+II:** Use the "secret" combined mode for maximum stereo disorientation.
- **Listen For:** Squealing filters and shifting harmonic shapes.

## 4. JAZZY
*Neo-Soul keys, organic warmth, and smooth transitions.*
- **The Mental Model:** Moonchild / Robert Glasper style warm synth textures.
- **Kepler Levers:**
    - **Waveform:** Square wave only (Hollow, organic "reed" feel).
    - **Filter (Freq):** Moderate (50%) with slight Resonance for "woodwind" character.
    - **Kybd (Key Tracking):** Set to 100% so high notes stay bright and "expressive."
    - **PWM:** Low depth for subtle warmth.
    - **Chorus:** OFF or Chorus I (Keep it natural).
- **Listen For:** A "rounded" tone that feels like a real instrument.

## 5. VIBEY
*Lush pads, atmospheric "halo" sounds, and expensive-sounding width.*
- **The Mental Model:** Modern R&B atmospheric textures (PBR&B / Alternative R&B).
- **Kepler Levers:**
    - **Chorus I+II:** For that signature wide, lush "halo."
    - **Attack & Release:** Both long (Slow fade in, slow fade out).
    - **Noise:** Add 5% for "dusty" analog texture.
    - **Filter Envelope:** Use a slow decay to make the pad "breathe."
- **Listen For:** A wide, "creamy" sound that fills the speakers without being harsh.

---

## Vibe Check Matrix
| Vibe | Waveform | Filter | Chorus | Attack | Release |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Moody** | Saw + Sub | Low | I | Instant | Long |
| **Upbeat** | Saw + Pulse | High | II | Instant | Short |
| **Psyched**| Pulse + Res | High | I+II | Instant | Varies |
| **Jazzy** | Square | Mid | Off/I | Instant | Med |
| **Vibey** | Saw + Pulse | Mid | I+II | Slow | Long |
```

---

## FILE: 01-Learning\Concepts\advanced-synthesis-techniques.md

```markdown
Tags: hip-hop/rap | R&B | electric

## Advanced Kepler Synthesis Techniques

### Subtractive Synthesis Mastery

**Core Subtractive Principle:**
Kepler uses subtractive synthesis—generate harmonically rich waveforms, then sculpt them with filters. The key is understanding what each waveform contains so you know what you're removing.

**Waveform Harmonic Content:**

| Waveform | Harmonics | Character | Best For |
|----------|-----------|-----------|----------|
| Sawtooth | All harmonics | Bright, rich | Leads, bass |
| Square | Odd harmonics | Hollow, woody | Bass, keys |
| Triangle | Few harmonics | Pure, soft | Pads, bass |
| Sine | Fundamental only | Pure | Sub-bass, fundamentals |

**Strategic Subtraction:**

| Goal | Waveform | Filter Approach |
|------|----------|----------------|
| Dark bass | Sawtooth | Aggressive low-pass (200Hz) |
| Cutting lead | Sawtooth | Moderate cutoff (2-5kHz) |
| Warm pad | Square | Gentle cutoff (1-2kHz) |
| Pure sub | Sine | No filter, high resonance |

### Filter Topology

**24dB/octave Low-Pass:**
- Steep roll-off (4 poles)
- Classic analog character
- Best for: Aggressive filtering
- Resonance creates "wah" effect

**12dB/octave Low-Pass:**
- Gentler slope (2 poles)
- More transparent
- Best for: Musical filtering
- Less colored resonance

**Filter Resonance Settings:**

| Resonance | Effect | Use Case |
|----------|--------|----------|
| 0-20% | Clean, transparent | Pads, fundamentals |
| 20-40% | Musical emphasis | Leads, bass |
| 40-60% | Noticeable character | Synth sounds |
| 60-80% | Pronounced "wah" | Solo passages |
| 80%+ | Self-oscillation | Sound design |

### Oscillator Sync Techniques

**Hard Sync Basics:**
- Master oscillator defines pitch
- Slave oscillator resets to master
- Creates rich, metallic harmonics
- Sweepable with filter

**Sync Strategies by Genre:**

| Genre | Sync Approach | Sound |
|-------|---------------|-------|
| Hip-hop | Subtle sync sweep | Glitchy texture |
| R&B | Warm sync | Smooth harmonics |
| EDM | Aggressive sync | Screaming lead |
| Lo-fi | Detuned sync | Vintage character |

### Modulation Routing Deep Dive

**Envelope to Filter:**
`\`\`
Attack: 0-10ms (fast for punch)
Decay: 100-500ms (varies with genre)
Sustain: 50-80% (maintains body)
Release: 100-300ms (natural fade)
`\`\`

**LFO to Pitch:**
| Rate | Feel | Use |
|------|------|-----|
| 0.1-0.2Hz | Slow warp | Ambient |
| 0.5-1Hz | Moderate vibrato | Movement |
| 2-8Hz | Fast vibrato | Percussive |

### Creating Signature Sounds

**The "Juno" Sound:**
1. Saw + Square waves
2. Slight detune (5-10 cents)
3. Low-pass filter at 60%
4. Resonance at 25%
5. Filter envelope with medium depth
6. Chorus effect for width

**Modern Trap Lead:**
1. Detuned saws (2 oscs)
2. Low-pass filter at 70%
3. Resonance at 35%
4. Fast filter envelope attack
5. Distortion after Kepler

**Warm R&B Pad:**
1. Triangle + Sine mix
2. Very gentle filtering (80%+)
3. Low resonance (15%)
4. Long attack envelope
5. Reverb and delay sends

### Troubleshooting Synthesis

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Too harsh | Filter too open | Close cutoff by 10-20% |
| No punch | No filter envelope | Add envelope modulation |
| Thin sound | No detuning | Detune oscs 5-15 cents |
| Muddiness | Too many lows | High-pass unneeded frequencies |
| No character | Resonance too low | Increase resonance |

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: 5 Minutes to First Result

## Minute 1: Initialize

1. **Load Kepler** on a new channel
2. Click **Initialize** or reset all parameters to default
3. Set **Range** to 8' (concert pitch)

## Minute 2: Basic Pad

1. Select **Sawtooth** waveform
2. Set **Filter Cutoff** to 50%
3. Set **Attack** to 30%, **Release** to 40%
4. Enable **Chorus II**

## Minute 3: Test and Adjust

1. Play a chord (hold multiple notes)
2. Adjust **Filter Cutoff** until it sounds good
3. Add **Sub-Oscillator** at 30% for thickness
4. Try **Chorus I+II** for maximum lushness

## Minute 4: Save Your Patch

1. Click the **Preset** menu
2. Select **Save preset as...**
3. Name it "My First Pad"
4. Save to your user presets folder

## Minute 5: Experiment

1. Try **Pulse** waveform instead of Saw
2. Adjust **PWM** to hear timbre change
3. Play with **Filter Envelope** (increase amount)
4. Test the **Arpeggiator** (hold chord, enable Arp)

## Quick Presets to Try

### Instant Pad
- Waveform: Sawtooth
- Filter: 50%
- Chorus: I+II
- Sub-Osc: 30%
- Attack: 30%, Release: 40%

### Snappy Bass
- Waveform: Pulse
- PWM: 30%
- Filter: 25%
- Sub-Osc: 100%
- Attack: 0%, Decay: 20%, Sustain: 40%

### Punchy Lead
- Waveform: Sawtooth
- Filter: 70%
- Resonance: 40%
- Chorus: II
- Attack: 5%, Release: 20%

## Next Steps

- See `02_Best_Settings_Starting_Points.md` for more presets
- Check `03_Vibe_Starting_Points_Moody.md` for vibe-specific setups
- Review `01_Common_Mistakes.md` to avoid pitfalls

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes

## 1. Forgetting the Chorus

**The Mistake:** Leaving chorus off, wondering why sound is thin.

**Why It Happens:** Users treat chorus as optional effect.

**The Problem:** Chorus IS the JUNO sound—without it, you lose 50% of the character.

**The Fix:**
- Always start with Chorus I or II on
- Use I+II for pads and lush sounds
- Only disable for specific bass sounds

---

## 2. Filter Too Open on Pads

**The Mistake:** Filter cutoff at 80-100% for pads.

**Why It Happens:** Thinking "more open = better."

**The Problem:** Sounds harsh, digital, and fights with other elements.

**The Fix:**
- Pads: Keep cutoff at 40-60%
- Use resonance for brightness instead
- Trust the chorus for shimmer

---

## 3. No Sub-Oscillator on Bass

**The Mistake:** Creating bass without sub-oscillator.

**Why It Happens:** Not understanding the JUNO architecture.

**The Problem:** Thin, weak bass without foundation.

**The Fix:**
- Bass sounds: Always 100% sub-osc
- Listen to the difference—it's dramatic
- Sub-oscillator is free bass boost

---

## 4. Attack Too Slow on Bass

**The Mistake:** 20%+ attack on bass patches.

**Why It Happens:** Thinking pads and bass use same envelope.

**The Problem:** Bass sounds late, loses punch, fights kick drum.

**The Fix:**
- Bass attack: 0-5% always
- Use filter envelope for "bite" instead
- Keep amplitude envelope snappy

---

## 5. Wrong Waveform for the Job

**The Mistake:** Using pulse for pads or saw for hollow bass.

**Why It Happens:** Not understanding waveform character.

**The Problem:** Wrong tone for intended sound.

**The Fix:**
| Sound | Use |
|-------|-----|
| Lush pad | Sawtooth |
| Punchy bass | Pulse |
| Hollow reed | Pulse (narrow) |
| Bright lead | Sawtooth |
| Nasal/brassy | Pulse (medium) |

---

## 6. Filter Self-Oscillation Confusion

**The Mistake:** Thinking squealing filter is broken.

**Why It Happens:** Not understanding resonance.

**The Problem:** Users lower resonance, lose character.

**The Fix:**
- High resonance + high cutoff = self-oscillation
- It's a feature, not a bug
- Use it intentionally for special effects

---

## 7. Ignoring Keyboard Tracking

**The Mistake:** Leaving keyboard tracking off.

**Why It Happens:** Not understanding its purpose.

**The Problem:** Inconsistent tone across keyboard range.

**The Fix:**
- Enable Kybd for most sounds
- Creates natural filter response
- Essential for realistic playing

---

## 8. Extreme PWM Settings

**The Mistake:** PWM at 0% or 100%.

**Why It Happens:** Not understanding pulse width.

**The Problem:** 0% = almost silent, 100% = unusual harmonics.

**The Fix:**
- Sweet spot: 20-60% for most sounds
- Narrow (10-30%) for hollow bass
- Wide (50-70%) for fuller pulse

---

## 9. Forgetting to Save Patches

**The Mistake:** Creating great sounds, not saving them.

**Why It Happens:** Being in the flow, forgetting procedure.

**The Problem:** Lose good sounds forever.

**The Fix:**
- Save immediately when you find something good
- Use descriptive names
- Create personal preset library

---

## 10. Not Using the Arpeggiator

**The Mistake:** Ignoring the arpeggiator entirely.

**Why It Happens:** Thinking it's only for "arp sounds."

**The Problem:** Missing out on instant sequences.

**The Fix:**
- Try it on bass sounds for sequences
- Use on pads for rhythmic texture
- Experiment with different ranges

---

## Mistake Prevention Checklist

Before finalizing a patch:

- [ ] Chorus enabled (unless intentional)
- [ ] Sub-oscillator appropriate for sound type
- [ ] Attack time appropriate (fast for bass, slow for pads)
- [ ] Filter cutoff in sweet spot (not maxed)
- [ ] Waveform matches intended sound
- [ ] Keyboard tracking on (unless special effect)
- [ ] Patch saved with descriptive name

---

**Version:** 1.0
**Sources:** [IL-MAN], [SRC: REPUTABLE]
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings: Starting Points

## Universal Starting Points

### The JUNO Pad
Use this when you need a pad immediately:

| Parameter | Value | Notes |
|-----------|-------|-------|
| Waveform | Sawtooth | Rich, full |
| Range | 8' | Concert pitch |
| Sub-Osc | 30% | Added warmth |
| Filter Cutoff | 50% | Half open |
| Resonance | 20% | Slight character |
| Chorus | I+II | Maximum lushness |
| Attack | 30% | Slow fade in |
| Release | 50% | Long sustain |

---

## Sound-Type Starting Points

### Classic 80s Bass

| Parameter | Value |
|-----------|-------|
| Waveform | Pulse |
| PWM | 30% (narrow) |
| Range | 8' or 16' |
| Sub-Osc | 100% |
| Filter Cutoff | 30% |
| Resonance | 30% |
| Filter Env | +40% |
| Attack | 0% |
| Decay | 20% |
| Sustain | 40% |
| Release | 15% |
| Chorus | I or Off |

### Punchy Lead

| Parameter | Value |
|-----------|-------|
| Waveform | Sawtooth |
| Range | 8' |
| Sub-Osc | 40% |
| Filter Cutoff | 70% |
| Resonance | 40% |
| Filter Env | +20% |
| Attack | 5% |
| Decay | 30% |
| Sustain | 80% |
| Release | 25% |
| Chorus | II |

### Warm Pad

| Parameter | Value |
|-----------|-------|
| Waveform | Sawtooth |
| Range | 16' |
| Sub-Osc | 40% |
| Filter Cutoff | 40% |
| Resonance | 15% |
| Filter Env | +10% |
| Attack | 40% |
| Decay | 30% |
| Sustain | 70% |
| Release | 60% |
| Chorus | I+II |

### Pluck/Short

| Parameter | Value |
|-----------|-------|
| Waveform | Saw or Pulse |
| Range | 8' |
| Sub-Osc | 20% |
| Filter Cutoff | 60% |
| Resonance | 35% |
| Filter Env | +50% |
| Attack | 0% |
| Decay | 15% |
| Sustain | 0% |
| Release | 15% |
| Chorus | I |

### PWM Pad (Evolving)

| Parameter | Value |
|-----------|-------|
| Waveform | Pulse |
| PWM Source | LFO |
| PWM Amount | 40% |
| Range | 8' |
| Sub-Osc | 30% |
| Filter Cutoff | 45% |
| Resonance | 20% |
| Attack | 35% |
| Release | 50% |
| Chorus | I+II |

---

## Quick Reference Card

### If you want... | Start with...
---|---
Lush pad | Saw + Chorus I+II + 50% cutoff
80s bass | Pulse + 100% sub-osc + fast envelope
Bright lead | Saw + high cutoff + Chorus II
Warm texture | 16' range + sub-osc + Chorus I
Plucky sound | Short envelope + filter env
Evolving pad | PWM + LFO + slow attack

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Starting Points: Moody

## The Moody Aesthetic

**Key Characteristics:**
- Dark and atmospheric
- Slow evolution
- Emotional weight
- Warm but not bright

## Moody Starting Point 1: Dark Pad

| Parameter | Value | Why |
|-----------|-------|-----|
| Waveform | Sawtooth | Full body |
| Range | 16' | Lower, warmer |
| Sub-Osc | 40% | Depth |
| Filter Cutoff | 35% | Dark |
| Resonance | 15% | Smooth |
| Filter Env | +15% | Gentle sweep |
| Chorus | I | Subtle width |
| Attack | 40% | Slow fade |
| Release | 60% | Long sustain |
| LFO | Slow, filter | Breathing |

**Use for:** Atmospheric pads, intros, breakdowns

---

## Moody Starting Point 2: Intimate Bass

| Parameter | Value | Why |
|-----------|-------|-----|
| Waveform | Pulse | Controlled |
| PWM | 35% | Warm |
| Range | 16' | Deep |
| Sub-Osc | 80% | Weight |
| Filter Cutoff | 25% | Dark |
| Resonance | 10% | Smooth |
| Chorus | Off | Focused |
| Attack | 10% | Soft start |
| Release | 40% | Lingering |

**Use for:** Emotional bass, ballads

---

## Moody Starting Point 3: Distant Lead

| Parameter | Value | Why |
|-----------|-------|-----|
| Waveform | Sawtooth | Present |
| Range | 8' | Standard |
| Sub-Osc | 30% | Body |
| Filter Cutoff | 40% | Muted |
| Resonance | 20% | Character |
| Chorus | I | Gentle |
| Attack | 20% | Slow |
| Release | 45% | Fade out |

**Use for:** Melancholic leads, background lines

---

## Moody Checklist

- [ ] Filter cutoff below 50%
- [ ] Low or no resonance
- [ ] Chorus I or Off (not II)
- [ ] Slow attack and long release
- [ ] Sub-oscillator for warmth
- [ ] Optional: LFO for subtle movement

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey

## Upbeat

**Characteristics:** Energetic, clear, punchy

### Upbeat Dance Bass

| Parameter | Value |
|-----------|-------|
| Waveform | Pulse |
| PWM | 25% |
| Sub-Osc | 100% |
| Filter Cutoff | 35% |
| Resonance | 40% |
| Filter Env | +50% |
| Attack | 0% |
| Decay | 18% |
| Sustain | 50% |
| Release | 12% |
| Chorus | II |

**Use for:** Pop, dance, hip-hop bass

### Upbeat Bright Lead

| Parameter | Value |
|-----------|-------|
| Waveform | Sawtooth |
| Sub-Osc | 50% |
| Filter Cutoff | 75% |
| Resonance | 45% |
| Chorus | II |
| Attack | 5% |
| Release | 20% |

**Use for:** Pop leads, energetic synths

---

## Psychedelic

**Characteristics:** Expansive, evolving, mind-bending

### Psychedelic Evolving Pad

| Parameter | Value |
|-----------|-------|
| Waveform | Pulse |
| PWM Source | LFO |
| PWM Amount | 50% |
| Filter Cutoff | 50% |
| Filter LFO | 40% |
| Chorus | I+II |
| LFO Rate | Medium |
| Attack | 30% |
| Release | 50% |

**Use for:** Experimental sections, intros

### Psychedelic Arp Pattern

| Parameter | Value |
|-----------|-------|
| Waveform | Saw |
| Filter Cutoff | 55% |
| Resonance | 50% |
| Chorus | I+II |
| Arpeggiator | On, Up/Down |
| Arp Range | 3 octaves |
| LFO | Filter, fast |

**Use for:** Rhythmic psychedelic elements

---

## Jazzy

**Characteristics:** Natural, dynamic, restrained

### Jazzy Electric Piano-style

| Parameter | Value |
|-----------|-------|
| Waveform | Sawtooth |
| Sub-Osc | 25% |
| Filter Cutoff | 55% |
| Resonance | 15% |
| Filter Env | +20% |
| Chorus | I |
| Attack | 8% |
| Release | 35% |

**Use for:** Jazz chords, Rhodes-like sounds

### Jazzy Soft Lead

| Parameter | Value |
|-----------|-------|
| Waveform | Saw |
| Sub-Osc | 30% |
| Filter Cutoff | 60% |
| Resonance | 10% |
| Chorus | I |
| Attack | 12% |
| Release | 30% |

**Use for:** Jazz solos, melodic lines

---

## Vibey

**Characteristics:** Warm, analog, characterful

### Vibey Warm Pad

| Parameter | Value |
|-----------|-------|
| Waveform | Saw |
| PWM | Slow LFO |
| Sub-Osc | 45% |
| Filter Cutoff | 45% |
| Resonance | 25% |
| Chorus | I+II |
| Attack | 25% |
| Release | 50% |

**Use for:** Soul/R&B pads, lo-fi

### Vibey Analog Bass

| Parameter | Value |
|-----------|-------|
| Waveform | Pulse |
| PWM | 40% |
| Sub-Osc | 90% |
| Filter Cutoff | 40% |
| Resonance | 30% |
| Chorus | I |
| Attack | 5% |
| Release | 25% |

**Use for:** Soul bass, warm low-end

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 01-Learning\Quick-Reference\juno-architecture-101.md

```markdown
# JUNO Architecture 101: The Kepler Model

Understanding the "Single Oscillator" philosophy of the 1980s. [SRC: IL-MAN], [SRC: REPUTABLE]

## 1. The Single Oscillator Philosophy
Unlike modern synths (like Sytrus or Vital) that have 3+ oscillators, Kepler (and the JUNO-6) has only **one main DCO**.
- **The Magic is in the Mix:** You don't choose *between* waveforms; you can engage Saw, Pulse, and Sub *simultaneously*.
- **Consistency:** Because all waves come from one master clock, they are perfectly in phase, leading to a very "solid" and "stable" low-end.

## 2. The Sub-Oscillator: The "Bass" Engine
Because there is only one main oscillator, the **Sub** fader is essential. It provides a rock-solid square wave exactly one octave below your main pitch. This is the secret to Kepler's massive bass presence.

## 3. The Chorus: The "Ensemble" Engine
Without the chorus, a single-oscillator synth can sound "thin" or "flat."
- **Stereo Invention:** The JUNO chorus was designed to make a single oscillator sound like a whole ensemble of instruments.
- **Always-On:** In most iconic patches, the chorus is considered part of the "tone" rather than an "effect."

## 4. The Resonant Filter (VCF)
Kepler's filter is famous for being "liquid" and "musical."
- **Self-Oscillation:** At 100% resonance, the filter creates its own sine wave. This allows you to play the filter itself as an instrument.
- **Keytracking (Kybd):** Essential for keeping leads bright across the whole keyboard range.

## 5. DCO vs. VCO
- **VCO (Vintage):** Tuning drifts over time (unstable, "warm").
- **DCO (Kepler):** Tuning is rock-solid (digitally controlled).
- **The Best of Both:** Kepler emulates the *character* of the DCO (stable tuning) while maintaining the *analog circuitry feel* of the filter and chorus.

---
*For a deeper map of these sections, see the [01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md](../Concepts/01_UI_Map_And_Signal_Flow.md) guide.*

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: Kepler

Fast-reference for the JUNO-6 emulation engine. [SRC: IL-MAN]

---

## 🎹 DCO (Oscillator) Section
- **LFO:** Pitch modulation depth from the LFO.
- **PWM (Pulse Width Modulation):** Width of the Square/Pulse wave.
- **PWM Switch (LFO/ENV):** Selects whether the LFO or the Envelope modulates the pulse width.
- **Range (16/8/4):** Sets the octave (Pitch).
- **Square (Pulse):** Toggles the square/pulse wave.
- **Saw:** Toggles the sawtooth wave.
- **Sub:** Adds a square wave one octave below the main.
- **Noise:** Injects white noise (grit).

## 🎚️ VCF (Filter) Section
- **HPF:** High Pass Filter (Fixed/Stepped). Use to thin out the low end.
- **Freq:** Filter Cutoff frequency.
- **Res:** Filter Resonance. High values cause "ringing" or self-oscillation.
- **Env:** Depth of the ADSR Envelope's impact on the filter.
- **LFO:** Depth of the LFO's impact on the filter (creates "wobble").
- **Kybd (Key Tracking):** How much the filter opens as you play higher notes.

## 📐 VCA & ENV Section
- **VCA Switch (Env/Gate):**
  - *Gate:* Instant On/Off (Classic organ/rhythm feel).
  - *Env:* Follows the ADSR envelope.
- **A-D-S-R:** Attack, Decay, Sustain, Release.

## ✨ CHORUS Section
- **Off:** Pure, dry signal.
- **I:** Slow, subtle widening.
- **II:** Faster, deeper, more aggressive widening.
- **I+II:** The "Secret Mode." Extreme width and grit.

## 🕹️ ARP (Arpeggiator)
- **Range (1/2/3):** Octave range of the arpeggio.
- **Mode:** Up, Down, or Up/Down.
- **Speed:** Tempo-synced rate (1/4, 1/8, 1/16, etc.).

---

## 🎯 Quick Starting Points
- **Lush Pad:** Saw + Sub + Chorus II + Long Release.
- **80s Bass:** Pulse + Sub + High Resonance + Fast Filter Envelope.
- **Industrial Lead:** Saw + Noise + Max Resonance (Filter self-oscillation).
- **Neo-Soul Keys:** Square + Sub + Low LP Filter + Chorus I.

```

---

## FILE: 01-Learning\Quick-Reference\quick-reference-card.md

```markdown
Tags: hip-hop/rap | R&B | electric

## Kepler Quick Reference Card

### Emergency Settings

| Problem | Quick Fix |
|---------|----------|
| Too harsh | Cutoff +20%, resonance -15% |
| Too muddy | Cutoff -15%, resonance +10% |
| No punch | Fast filter attack, resonance +10% |
| Too thin | Detune oscs, resonance +10% |
| No character | Increase resonance to 35% |
| Too loud | Oscillator level -3dB |
| Clipping | Enable soft clip, reduce output |

### Genre Defaults

| Genre | Waveforms | Cutoff | Resonance | Detune |
|-------|-----------|--------|-----------|---------|
| Hip-hop bass | Sine+Sine | 25% | 25% | 0 |
| Hip-hop lead | Saw+Square | 65% | 30% | 10 |
| R&B | Saw+Square | 70% | 20% | 5 |
| Trap lead | 3 Saws | 60% | 35% | 15 |
| EDM lead | Saw+Square | 55% | 45% | 12 |
| Lo-fi | Square | 75% | 15% | 8 |

### Waveform Guide

| Waveform | Harmonics | Character | Best For |
|----------|-----------|-----------|----------|
| Saw | All | Bright, rich | Leads, bass |
| Square | Odd | Hollow, woody | Bass, keys |
| Triangle | Few | Pure, soft | Pads, subs |
| Sine | None | Pure | Sub-bass |

### Envelope Guide

| Use | Attack | Decay | Sustain | Release |
|-----|--------|--------|---------|---------|
| Punchy bass | 5-10ms | 100-200ms | 70-80% | 50-100ms |
| Smooth pad | 50-100ms | 500-800ms | 80-90% | 500-1000ms |
| Pluck | 0-5ms | 50-150ms | 30-50% | 100-200ms |
| Lead | 10-20ms | 200-400ms | 60-80% | 150-300ms |

### LFO Guide

| Rate | Feel | Use |
|------|------|-----|
| 0.05-0.1Hz | Very slow | Ambient warp |
| 0.1-0.3Hz | Slow sweep | Pad movement |
| 0.3-0.5Hz | Moderate | Subtle vibrato |
| 1-2Hz | Fast | Tremolo/vibrato |
| 4-8Hz | Very fast | Percussive |

### Resonance Guide

| Value | Effect | Best For |
|-------|---------|----------|
| 0-20% | Clean | Fundamentals |
| 20-35% | Musical | General use |
| 35-50% | Character | Leads, bass |
| 50-70% | Pronounced | Solo passages |
| 70%+ | Extreme | Sound design |

### Troubleshooting Flowchart

`\`\`
Problem?
    ↓
Too harsh? → Cutoff +15%, res -10%
    ↓
Too muddy? → Cutoff -15%, res +10%
    ↓
No punch? → Fast attack, res +10%
    ↓
Too thin? → Detune oscs, res +10%
    ↓
Still not right? → Reset and start over
`\`\`

### Quick Preset Names

`\`\`
Bass_HipHop_Deep_[DATE]
Lead_RnB_Smooth_[DATE]
Lead_Trap_Wide_[DATE]
Pad_Atmospheric_[DATE]
Keys_Electric_[DATE]
`\`\`

### Quality Check

- [ ] Oscillators balanced
- [ ] Filter not clipping
- [ ] Modulation musical
- [ ] Mono compatible
- [ ] Fits genre
- [ ] Sounds good in mix

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary

## DCO (Digitally Controlled Oscillator)

### Waveform Selector
**Type:** Toggle (Saw/Pulse)

**Function:** Selects oscillator waveform.

**Technical:** Sawtooth = all harmonics; Pulse = odd harmonics only [UNVERIFIED]

**Vibe Impact:**
- **Sawtooth:** Rich, full—good for all vibes except very specific cases
- **Pulse:** Hollow, reedy—excellent for bass, Jazzy sounds

**Best Practices:**
- Pads: Usually sawtooth
- Bass: Usually pulse
- Leads: Either, depending on character needed

**Source ID:** [IL-MAN]

---

### Range
**Type:** Selector (16'/8'/4')

**Function:** Sets pitch range (like organ footage).

**Technical:** 16' = one octave below 8'; 4' = one octave above [UNVERIFIED]

**Vibe Impact:**
- **16':** Deep, warm—Moody, Vibey
- **8':** Standard—Upbeat, Jazzy
- **4':** Bright, high—specialized use

**Best Practices:**
- 8' is standard for most sounds
- 16' for deep bass or warm pads
- 4' for bright leads or special effects

**Source ID:** [IL-MAN]

---

### PWM (Pulse Width Modulation)

#### Manual PWM
**Type:** Knob [UNVERIFIED: Range]

**Function:** Sets static pulse width.

**Range:** 0-100%

**Vibe Impact:**
- **Narrow (10-30%):** Hollow, reedy, nasal—Jazzy bass
- **Medium (40-60%):** Balanced—general use
- **Wide (70-90%):** Fuller, brighter—Upbeat leads

**Best Practices:**
- Bass: 20-40% for punch
- Pads: 40-60% for warmth
- Avoid extremes (0%, 100%)

**Source ID:** [IL-MAN]

#### PWM Source
**Type:** Toggle (Manual/LFO/Env)

**Function:** Selects what modulates pulse width.

**Vibe Impact:**
- **Manual:** Static, consistent
- **LFO:** Animated, evolving—Psychedelic, Vibey
- **Env:** Dynamic, per-note

**Best Practices:**
- Static sounds: Manual
- Evolving pads: LFO
- Articulated bass: Env

**Source ID:** [IL-MAN]

---

### Sub-Oscillator
**Type:** Knob [UNVERIFIED: Range]

**Function:** Adds octave-down oscillator.

**Range:** 0-100%

**Vibe Impact Tags:** `depth`, `warmth`

**Best Practices:**
- Bass: Always 100%
- Pads: 20-40%
- Leads: 30-50%

**What to Listen For:**
- Adds fundamental low-end
- Can overwhelm if too high on non-bass

**Source ID:** [IL-MAN]

---

## VCF (Voltage Controlled Filter)

### Cutoff Frequency
**Type:** Knob [UNVERIFIED: Range in Hz]

**Function:** Sets filter cutoff point.

**Range:** ~20Hz to ~20kHz [UNVERIFIED]

**Vibe Impact:**
- **Low (20-40%):** Dark, Moody, atmospheric
- **Medium (40-60%):** Warm, Vibey, Jazzy
- **High (60-80%):** Bright, Upbeat, present

**Mix Impact Tags:** `brightness`, `depth`

**Automation Common:** High—essential for expression

**Source ID:** [IL-MAN]

---

### Resonance
**Type:** Knob [UNVERIFIED: Range]

**Function:** Emphasizes frequencies at cutoff.

**Range:** 0-100%

**Vibe Impact:**
- **Low (0-20%):** Smooth, natural—Moody, Jazzy
- **Medium (30-50%):** Character—Upbeat, Vibey
- **High (60%+):** Squeal, acid—Psychedelic, special FX

**Best Practices:**
- High resonance can self-oscillate
- Use moderate for character without harshness

**Source ID:** [IL-MAN]

---

### Filter Envelope (Env)
**Type:** Knob (bipolar) [UNVERIFIED: Range]

**Function:** Amount of envelope modulation on filter.

**Range:** Negative to positive

**Behavior:**
- **Positive:** Opens filter during note
- **Negative:** Closes filter during note
- **Zero:** No envelope modulation

**Best Practices:**
- Bass: +30% to +50% for punch
- Pads: +10% to +20% for subtle sweep

**Source ID:** [IL-MAN]

---

### Filter LFO
**Type:** Knob [UNVERIFIED: Range]

**Function:** Amount of LFO modulation on filter.

**Vibe Impact:**
- **Low:** Subtle wah effect
- **Medium:** Noticeable movement
- **High:** Extreme wah—Psychedelic

**Best Practices:**
- Pads: Low to medium for movement
- Leads: Medium for character

**Source ID:** [IL-MAN]

---

### Keyboard Tracking (Kybd)
**Type:** Toggle/Amount [UNVERIFIED]

**Function:** Filter follows keyboard pitch.

**Best Practices:**
- Enable for most sounds
- Creates consistent tone across range
- Essential for realistic playing

**Source ID:** [IL-MAN]

---

## VCA (Voltage Controlled Amplifier)

### Gate/Env Toggle
**Type:** Toggle

**Function:** Selects amplitude control mode.

**Behavior:**
- **Gate:** Organ-style on/off
- **Env:** Full ADSR envelope

**Best Practices:**
- Use Env for 99% of sounds
- Gate only for special organ/percussive effects

**Source ID:** [IL-MAN]

---

### ADSR Envelope

#### Attack
**Type:** Knob [UNVERIFIED: Time range]

**Function:** Time to reach full volume.

**Best Practices:**
- Bass: 0-5% (instant)
- Pads: 20-40% (slow fade)
- Leads: 0-10% (fast)

#### Decay
**Type:** Knob [UNVERIFIED: Time range]

**Function:** Time to fall from attack peak to sustain.

#### Sustain
**Type:** Knob [UNVERIFIED: Level range]

**Function:** Level while holding note.

#### Release
**Type:** Knob [UNVERIFIED: Time range]

**Function:** Time to fade after release.

**Best Practices:**
- Pads: Long release (40-60%)
- Bass: Short release (10-20%)

**Source ID:** [IL-MAN]

---

## LFO Section

### Rate
**Type:** Knob [UNVERIFIED: Hz range]

**Function:** Speed of LFO modulation.

**Estimated Range:** 0.1 Hz to 20+ Hz [UNVERIFIED]

**Vibe Impact:**
- **Slow:** Subtle, evolving—Moody, Vibey
- **Medium:** Noticeable—general use
- **Fast:** Vibrato/tremolo—Psychedelic, special FX

**Best Practices:**
- Pads: Slow for subtle movement
- Bass: Medium for animation

**Automation Common:** Moderate

**Source ID:** [IL-MAN]

---

### Delay
**Type:** Knob [UNVERIFIED: Time range]

**Function:** Time before LFO starts after note on.

**Best Practices:**
- Set for evolving sounds
- Creates interest after attack

**Source ID:** [IL-MAN]

---

## Chorus Section

### Chorus I
**Type:** Toggle

**Function:** Subtle chorus effect.

**Effect:** Gentle stereo width and thickness

**Best for:** Subtle enhancement, bass, Jazzy

**Source ID:** [IL-MAN]

---

### Chorus II
**Type:** Toggle

**Function:** Pronounced chorus effect.

**Effect:** More stereo width and movement

**Best for:** Standard 80s sound, Upbeat

**Source ID:** [IL-MAN]

---

### Chorus I+II
**Type:** Combined (both buttons on)

**Function:** Maximum chorus effect.

**Effect:** Thick, lush, almost reverb-like

**Best for:** Pads, maximum width

**CPU Note:** Uses more CPU than single chorus [UNVERIFIED]

**Source ID:** [IL-MAN]

---

## Arpeggiator Section

### Arp On/Off
**Type:** Toggle

**Function:** Enable arpeggiator.

**Source ID:** [IL-MAN]

---

### Mode
**Type:** Selector (Up/Down/Up-Down)

**Function:** Arpeggio pattern direction.

**Best Practices:**
- Up-Down: Classic 80s sound
- Up: Ascending sequences
- Down: Descending sequences

**Source ID:** [IL-MAN]

---

### Range
**Type:** Selector (1-4 octaves) [UNVERIFIED]

**Function:** How many octaves arpeggiator spans.

**Best Practices:**
- 2 octaves: Standard
- 3-4 octaves: Wide, dramatic

**Source ID:** [IL-MAN]

---

## Summary Table

| Parameter | Moody | Upbeat | Psychedelic | Jazzy | Vibey |
|-----------|-------|--------|-------------|-------|-------|
| Filter Cutoff | 20-40% | 60-80% | 40-60% | 40-60% | 30-50% |
| Resonance | Low | Medium | Medium | Low | Low-Med |
| Chorus | I/Off | II/I+II | I+II | I | I/II |
| Attack | Slow | Fast | Variable | Slight | Slight |
| Release | Long | Short | Medium | Medium | Med-Long |
| Sub-Osc | 30-50% | 50-100% | Variable | 20-40% | 40-60% |

---

**Version:** 1.0
**Sources:** [IL-MAN], [UNVERIFIED: exact ranges need verification]
**Last Updated:** 2026-02-03

```

---

## FILE: 02-Data\parameters\kepler-params.json

```json
{
  "plugin_name": "Kepler",
  "category": "Vintage Synth",
  "sections": {
    "DCO": {
      "LFO": "Pitch modulation depth",
      "PWM": "Pulse width modulation amount",
      "PWM_Mode": "LFO or Envelope source",
      "Range": "Octave setting (16', 8', 4')",
      "Wave_Square": "Toggles Pulse/Square wave",
      "Wave_Saw": "Toggles Sawtooth wave",
      "Sub": "Sub-oscillator volume",
      "Noise": "White noise volume"
    },
    "VCF": {
      "HPF": "High Pass Filter frequency (Stepped)",
      "Frequency": "Low Pass Cutoff frequency",
      "Resonance": "Filter resonance/peak",
      "Env_Depth": "Envelope modulation depth",
      "LFO_Depth": "LFO modulation depth",
      "Kybd": "Key tracking amount"
    },
    "VCA": {
      "Mode": "Gate (On/Off) or Env (ADSR)",
      "Level": "Overall VCA gain"
    },
    "ENV": {
      "Attack": "Attack time",
      "Decay": "Decay time",
      "Sustain": "Sustain level",
      "Release": "Release time"
    },
    "CHORUS": {
      "Mode": "I, II, or I+II (Combined)",
      "Status": "On/Off"
    },
    "ARP": {
      "Mode": "Up, Down, Up/Down",
      "Range": "Octave range (1-3)",
      "Sync": "Tempo sync subdivisions"
    }
  }
}

```

---

## FILE: 02-Data\presets\INDEX.md

```markdown
# Kepler Presets Index

## Genre Presets (10 files)
| File | Name | Genre | Mood |
|------|------|-------|------|
| `genre/01-808-thunder.json` | 808 Thunder | hip-hop/rap | dark |
| `genre/02-mid-range-growler.json` | Mid-Range Growler | hip-hop/rap | aggressive |
| `genre/03-silk-lead.json` | Silk Lead | R&B | moody |
| `genre/04-punchy-foundation.json` | Punchy Foundation | R&B | funky |
| `genre/05-supersaw-hero.json` | Supersaw Hero | EDM | electric |
| `genre/06-resonance-bass.json` | Resonance Bass | EDM | electric |
| `genre/07-glitch-pluck.json` | Glitch Pluck | trap | dark |
| `genre/08-dusty-texture.json` | Dusty Texture | lo-fi | moody |
| `genre/09-reaper-sub.json` | Reaper Sub | drill | dark |
| `genre/10-ethereal-wash.json` | Ethereal Wash | ambient | moody |

## Signature Presets (10 files)
| File | Artist | Style |
|------|--------|-------|
| `signature/metro-boomin-bass.json` | Metro Boomin | Boomin Bass |
| `signature/zaytoven.json` | Zaytoven | MIDI Pluck |
| `signature/mike-will.json` | Mike Will Made-It | Future Bass |
| `signature/sounwave.json` | Sounwave | West Coast Drfill |
| `signature/travis-scott.json` | Travis Scott | Auto-Tune Lead |
| `signature/21-savage.json` | 21 Savage | Monolithic Sub |
| `signature/the-weeknd.json` | The Weeknd | Night Drive Pad |
| `signature/drake.json` | Drake | OVO Lead |
| `signature/pierre-bourne.json` | Pierre Bourne | Trinidad Jame$ |
| `signature/metro-boomin-bass-stab.json` | Metro Boomin | If-You-Know-You-Know |

## Total: 20 preset files

```

---

## FILE: 02-Data\presets\genre-presets.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "genres": ["hip-hop/rap", "R&B", "EDM", "trap", "lo-fi", "drill"],
    "description": "Comprehensive genre-aware presets for Kepler virtual analog synthesizer"
  },
  "presets": {
    "hip-hop-bass": {
      "name": "808 Thunder",
      "genre": "hip-hop/rap",
      "mood": "dark",
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-2",
          "detune": 0,
          "mix": 80
        },
        "oscillator2": {
          "waveform": "square",
          "octave": "-2",
          "detune": 7,
          "mix": 60
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 180,
          "resonance": 25,
          "drive": 15,
          "envAmt": 85,
          "envVel": 40
        },
        "envelope": {
          "attack": 5,
          "decay": 180,
          "sustain": 60,
          "release": 120
        },
        "lfo": {
          "waveform": "sine",
          "rate": 0.5,
          "amt": 20,
          "dest": "filterCutoff"
        }
      },
      "chain": {
        "pre": ["Fruity Parametric EQ 2 - High-cut 200Hz, +3dB at 80Hz"],
        "post": ["Fruity Limiter - Threshold -18dB, Ratio 4:1, Makeup +6dB"]
      },
      "genreTags": ["hip-hop/rap", "trap", "drill", "dark"],
      "a/bTesting": {
        "testA": "Filter resonance at 25, sub audible",
        "testB": "Filter resonance at 45, more character"
      },
      "troubleshooting": {
        "muddyMix": "High-pass filter at 30Hz on full mix",
        "clipping": "Reduce oscillator mix levels by 15%"
      }
    },
    "hip-hop-bass-2": {
      "name": "Mid-Range Growler",
      "genre": "hip-hop/rap",
      "mood": "aggressive",
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "0",
          "detune": 0,
          "mix": 100
        },
        "oscillator2": {
          "waveform": "square",
          "octave": "-1",
          "detune": 5,
          "mix": 70
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 650,
          "resonance": 40,
          "drive": 25,
          "envAmt": 90,
          "envVel": 50
        },
        "envelope": {
          "attack": 2,
          "decay": 150,
          "sustain": 50,
          "release": 100
        },
        "lfo": {
          "waveform": "square",
          "rate": 2,
          "amt": 30,
          "dest": "filterCutoff"
        }
      },
      "chain": {
        "pre": ["Fruity Parametric EQ 2 - Bell +4dB at 400Hz"],
        "post": ["Fruity Compressor - Attack 10ms, Release 80ms, Ratio 3:1"]
      },
      "genreTags": ["hip-hop/rap", "aggressive", "hard"],
      "a/bTesting": {
        "testA": "LFO rate at 2Hz for rhythmic pulsing",
        "testB": "LFO off for static tone"
      },
      "troubleshooting": {
        "harshness": "High-shelf cut above 4kHz by 3dB",
        "weakImpact": "Increase filter drive to 35%"
      }
    },
    "rb-lead": {
      "name": "Silk Lead",
      "genre": "R&B",
      "mood": "moody",
      "settings": {
        "oscillator1": {
          "waveform": "sine",
          "octave": "0",
          "detune": 0,
          "mix": 100
        },
        "oscillator2": {
          "waveform": "triangle",
          "octave": "0",
          "detune": 3,
          "mix": 50
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 2200,
          "resonance": 15,
          "drive": 5,
          "envAmt": 30,
          "envVel": 20
        },
        "envelope": {
          "attack": 50,
          "decay": 400,
          "sustain": 70,
          "release": 300
        },
        "lfo": {
          "waveform": "sine",
          "rate": 0.25,
          "amt": 15,
          "dest": "pan"
        }
      },
      "chain": {
        "pre": ["Soft clipper - 2dB input reduction"],
        "post": ["Reverb - Hall, Decay 2.5s, Pre-delay 30ms, Mix 20%"]
      },
      "genreTags": ["R&B", "moody", "smooth", "melodic"],
      "a/bTesting": {
        "testA": "Pan LFO on for movement",
        "testB": "Pan LFO off for centered mono"
      },
      "troubleshooting": {
        "harshHighs": "Reduce oscillator2 mix to 30%",
        "tooDark": "Increase filter cutoff to 2800Hz"
      }
    },
    "rb-bass": {
      "name": "Punchy Foundation",
      "genre": "R&B",
      "mood": "funky",
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-1",
          "detune": 0,
          "mix": 80
        },
        "oscillator2": {
          "waveform": "square",
          "octave": "-2",
          "detune": 2,
          "mix": 40
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 800,
          "resonance": 35,
          "drive": 12,
          "envAmt": 70,
          "envVel": 60
        },
        "envelope": {
          "attack": 3,
          "decay": 120,
          "sustain": 65,
          "release": 150
        },
        "lfo": {
          "waveform": "sine",
          "rate": 0.8,
          "amt": 25,
          "dest": "filterCutoff"
        }
      },
      "chain": {
        "pre": ["High-pass filter at 40Hz"],
        "post": ["Fruity Compressor - Attack 15ms, Release 90ms, Ratio 2.5:1"]
      },
      "genreTags": ["R&B", "funky", "groove", "smooth"],
      "a/bTesting": {
        "testA": "Filter env amount at 70 for punch",
        "testB": "Filter env amount at 40 for smoother attack"
      },
      "troubleshooting": {
        "muddyLowEnd": "Cut below 60Hz on bass channel",
        "maskingVocals": "EQ dip at 300-500Hz by 2dB"
      }
    },
    "edm-lead": {
      "name": "Supersaw Hero",
      "genre": "EDM",
      "mood": "electric",
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "0",
          "detune": 0,
          "mix": 90
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "0",
          "detune": 7,
          "mix": 90
        },
        "oscillator3": {
          "waveform": "saw",
          "octave": "+1",
          "detune": 14,
          "mix": 70
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 4000,
          "resonance": 50,
          "drive": 20,
          "envAmt": 80,
          "envVel": 40
        },
        "envelope": {
          "attack": 20,
          "decay": 250,
          "sustain": 60,
          "release": 400
        },
        "lfo": {
          "waveform": "saw-up",
          "rate": 0.5,
          "amt": 40,
          "dest": "filterCutoff"
        }
      },
      "chain": {
        "pre": ["Soft clipper - 3dB reduction"],
        "post": ["Fruity Limiter - Ceiling -0.3dB, Gain 6dB", "Delay - Stereo, 300ms, Feedback 40%, Mix 25%"]
      },
      "genreTags": ["EDM", "big room", "electric", "anthem"],
      "a/bTesting": {
        "testA": "3 oscillators for massive sound",
        "testB": "2 oscillators for tighter mix"
      },
      "troubleshooting": {
        "muddyMix": "High-pass filter at 200Hz on lead channel",
        "phaseIssues": "Invert phase on osc3 if summing issues"
      }
    },
    "edm-bass": {
      "name": "Resonance Bass",
      "genre": "EDM",
      "mood": "electric",
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-2",
          "detune": 0,
          "mix": 100
        },
        "oscillator2": {
          "waveform": "square",
          "octave": "-1",
          "detune": 3,
          "mix": 60
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 250,
          "resonance": 65,
          "drive": 30,
          "envAmt": 100,
          "envVel": 80
        },
        "envelope": {
          "attack": 5,
          "decay": 200,
          "sustain": 55,
          "release": 150
        },
        "lfo": {
          "waveform": "sine",
          "rate": 0.3,
          "amt": 35,
          "dest": "filterCutoff"
        }
      },
      "chain": {
        "pre": ["Teq4 - High-pass at 45Hz"],
        "post": ["Fruity Limiter - Attack 1ms, Release 50ms, Ratio 6:1"]
      },
      "genreTags": ["EDM", "deep bass", "house", "techno"],
      "a/bTesting": {
        "testA": "High resonance for resonance sweeps",
        "testB": "Lower resonance for consistent bass"
      },
      "troubleshooting": {
        "distortedSound": "Reduce filter drive to 20%",
        "weakSub": "Add sub oscillator routed directly to output"
      }
    },
    "trap-lead": {
      "name": "Glitch Pluck",
      "genre": "trap",
      "mood": "dark",
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
          "detune": 8,
          "mix": 70
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 3000,
          "resonance": 45,
          "drive": 10,
          "envAmt": 95,
          "envVel": 100
        },
        "envelope": {
          "attack": 1,
          "decay": 80,
          "sustain": 0,
          "release": 50
        },
        "lfo": {
          "waveform": "sample-hold",
          "rate": 4,
          "amt": 50,
          "dest": "pitch"
        }
      },
      "chain": {
        "pre": ["Teq4 - High-pass at 500Hz"],
        "post": ["Fruity Reverb 2 - Plate, Decay 1.2s, Mix 18%", "Bitcrusher - 8-bit, 50% wet"]
      },
      "genreTags": ["trap", "dark", "glitch", "aggressive"],
      "a/bTesting": {
        "testA": "Sample-hold LFO for random pitch glitches",
        "testB": "Sine LFO for regular vibrato"
      },
      "troubleshooting": {
        "tooChaotic": "Reduce LFO amount to 25%",
        "tooThin": "Add osc3 with saw wave at +2 octave"
      }
    },
    "lofi-pad": {
      "name": "Dusty Texture",
      "genre": "lo-fi",
      "mood": "moody",
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-1",
          "detune": 15,
          "mix": 75
        },
        "oscillator2": {
          "waveform": "triangle",
          "octave": "-2",
          "detune": 22,
          "mix": 60
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 1500,
          "resonance": 20,
          "drive": 8,
          "envAmt": 25,
          "envVel": 15
        },
        "envelope": {
          "attack": 150,
          "decay": 500,
          "sustain": 75,
          "release": 800
        },
        "lfo": {
          "waveform": "sine",
          "rate": 0.1,
          "amt": 20,
          "dest": "filterCutoff"
        }
      },
      "chain": {
        "pre": ["Vintage Phaser - 4 stages, 0.3Hz rate, Mix 40%"],
        "post": ["Fruity Reverb 2 - Room, Decay 3s, Mix 25%", "Tape Saturation - 3% drive"]
      },
      "genreTags": ["lo-fi", "moody", "chill", "nostalgic"],
      "a/bTesting": {
        "testA": "Detune oscillators heavily for warmth",
        "testB": "Tighter detune for cleaner sound"
      },
      "troubleshooting": {
        "tooNoisy": "Reduce LFO amount to 10%",
        "tooDark": "Increase filter cutoff to 2000Hz"
      }
    },
    "drill-bass": {
      "name": "Reaper Sub",
      "genre": "drill",
      "mood": "dark",
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
          "mix": 90
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 120,
          "resonance": 30,
          "drive": 20,
          "envAmt": 60,
          "envVel": 30
        },
        "envelope": {
          "attack": 8,
          "decay": 250,
          "sustain": 70,
          "release": 180
        },
        "lfo": {
          "waveform": "square",
          "rate": 0.4,
          "amt": 15,
          "dest": "pitch"
        }
      },
      "chain": {
        "pre": ["Fruity Parametric EQ 2 - High-pass at 20Hz"],
        "post": ["Fruity Limiter - Threshold -12dB, Attack 0.5ms, Release 30ms"]
      },
      "genreTags": ["drill", "dark", "heavy", "aggressive"],
      "a/bTesting": {
        "testA": "Pitch LFO on for sub wobble",
        "testB": "Pitch LFO off for steady sub"
      },
      "troubleshooting": {
        "distortedByDesign": "Keep distortion intentional, check for unwanted clipping",
        "weakLowEnd": "Increase filter drive to 30%"
      }
    },
    "ambient-pad": {
      "name": "Ethereal Wash",
      "genre": "ambient",
      "mood": "moody",
      "settings": {
        "oscillator1": {
          "waveform": "sine",
          "octave": "-1",
          "detune": 0,
          "mix": 100
        },
        "oscillator2": {
          "waveform": "triangle",
          "octave": "-1",
          "detune": 12,
          "mix": 70
        },
        "oscillator3": {
          "waveform": "saw",
          "octave": "0",
          "detune": 25,
          "mix": 40
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 2500,
          "resonance": 25,
          "drive": 5,
          "envAmt": 20,
          "envVel": 10
        },
        "envelope": {
          "attack": 500,
          "decay": 800,
          "sustain": 85,
          "release": 1500
        },
        "lfo": {
          "waveform": "sine",
          "rate": 0.15,
          "amt": 30,
          "dest": "pan"
        }
      },
      "chain": {
        "pre": ["Vintage Chorus - Mix 50%, Rate 0.3Hz"],
        "post": ["Fruity Reverb 2 - Cathedral, Decay 6s, Mix 30%"]
      },
      "genreTags": ["ambient", "moody", "cinematic", "spacey"],
      "a/bTesting": {
        "testA": "3 oscillators for width and depth",
        "testB": "2 oscillators for simpler arrangements"
      },
      "troubleshooting": {
        "phasingIssues": "Reduce LFO pan amount to 15%",
        "tooBright": "Filter cutoff to 1800Hz"
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
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "description": "Artist and production style inspired presets for Kepler"
  },
  "presets": {
    "metro-boomin": {
      "name": "Boomin Bass",
      "inspiredBy": "Metro Boomin style",
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
          "detune": 3,
          "mix": 75
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 160,
          "resonance": 35,
          "drive": 18,
          "envAmt": 70,
          "envVel": 45
        },
        "envelope": {
          "attack": 5,
          "decay": 200,
          "sustain": 65,
          "release": 130
        },
        "lfo": {
          "waveform": "sine",
          "rate": 0.25,
          "amt": 10,
          "dest": "filterCutoff"
        }
      },
      "chain": {
        "post": ["Fruity Limiter - Threshold -16dB, Ratio 4:1, Attack 1ms, Release 40ms"]
      },
      "characteristics": ["deep", "punchy", "modern", "cleansounding"],
      "genreTags": ["hip-hop/rap", "trap", "modern"],
      "a/bTesting": {
        "testA": "Filter env amount at 70 for initial punch",
        "testB": "Filter env amount at 50 for smoother attack"
      },
      "troubleshooting": {
        "notDeepEnough": "High-pass full mix at 35Hz to create space",
        "tooMuchSub": "Sidechain to kick at 0.3s release"
      }
    },
    "zaytoven": {
      "name": "MIDI Pluck",
      "inspiredBy": "Zaytoven style",
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
          "detune": 2,
          "mix": 50
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 2800,
          "resonance": 40,
          "drive": 8,
          "envAmt": 90,
          "envVel": 100
        },
        "envelope": {
          "attack": 2,
          "decay": 60,
          "sustain": 0,
          "release": 40
        },
        "lfo": {
          "waveform": "sine",
          "rate": 0.5,
          "amt": 5,
          "dest": "pitch"
        }
      },
      "chain": {
        "post": ["Fruity Reverb 2 - Small Room, Decay 0.8s, Mix 15%", "Fruity Compressor - Fast attack, Ratio 3:1"]
      },
      "characteristics": ["plucky", "bright", "melodic", "groove"],
      "genreTags": ["hip-hop/rap", "R&B", "melodic"],
      "a/bTesting": {
        "testA": "Square wave for classic MIDI feel",
        "testB": "Add saw for modern edge"
      },
      "troubleshooting": {
        "tooClicky": "Increase envelope attack to 5ms",
        "sustainingTooLong": "Reduce sustain to 0, increase release slightly"
      }
    },
    "mike-will": {
      "name": "Future Bass",
      "inspiredBy": "Mike Will Made-It style",
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "0",
          "detune": 0,
          "mix": 90
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "0",
          "detune": 7,
          "mix": 90
        },
        "oscillator3": {
          "waveform": "saw",
          "octave": "+1",
          "detune": 14,
          "mix": 60
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 3500,
          "resonance": 45,
          "drive": 15,
          "envAmt": 75,
          "envVel": 35
        },
        "envelope": {
          "attack": 10,
          "decay": 180,
          "sustain": 55,
          "release": 250
        },
        "lfo": {
          "waveform": "saw-down",
          "rate": 0.25,
          "amt": 50,
          "dest": "filterCutoff"
        }
      },
      "chain": {
        "pre": ["Soft clipper - 2dB input"],
        "post": ["Fruity Reverb 2 - Large Hall, Decay 3.5s, Mix 25%", "Fruity Limiter - Ceiling -0.5dB"]
      },
      "characteristics": ["wide", "bright", "uplifting", "melodic"],
      "genreTags": ["hip-hop/rap", "R&B", "future bass"],
      "a/bTesting": {
        "testA": "Filter sweep down on attack",
        "testB": "Static filter for sustained chords"
      },
      "troubleshooting": {
        "muddyArrangement": "High-pass synth at 300Hz except on bass notes",
        "maskingVocals": "Notch EQ at 2-3kHz on synth"
      }
    },
    "sounwave": {
      "name": "West Coast Drfill",
      "inspiredBy": "Sounwave style (TDE)",
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-1",
          "detune": 0,
          "mix": 80
        },
        "oscillator2": {
          "waveform": "square",
          "octave": "-2",
          "detune": 4,
          "mix": 55
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 600,
          "resonance": 30,
          "drive": 12,
          "envAmt": 65,
          "envVel": 50
        },
        "envelope": {
          "attack": 8,
          "decay": 220,
          "sustain": 60,
          "release": 200
        },
        "lfo": {
          "waveform": "sine",
          "rate": 0.35,
          "amt": 20,
          "dest": "pan"
        }
      },
      "chain": {
        "post": ["Fruity Parametric EQ 2 - High-shelf +2dB at 4kHz", "Fruity Compressor - Soft knee, Ratio 2:1"]
      },
      "characteristics": ["smooth", "warm", "moody", "spacey"],
      "genreTags": ["hip-hop/rap", "West Coast", "moody"],
      "a/bTesting": {
        "testA": "Pan movement for width",
        "testB": "Mono for punch"
      },
      "troubleshooting": {
        "tooDark": "Increase filter cutoff by 100Hz increments",
        "lacksCharacter": "Add subtle bitcrusher after Kepler"
      }
    },
    "travis-scott": {
      "name": "Auto-Tune Lead",
      "inspiredBy": "Travis Scott atmospheric leads",
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "0",
          "detune": 0,
          "mix": 85
        },
        "oscillator2": {
          "waveform": "triangle",
          "octave": "0",
          "detune": 6,
          "mix": 65
        },
        "filter": {
          "type": "bandpass",
          "cutoff": 2000,
          "resonance": 35,
          "drive": 10,
          "envAmt": 40,
          "envVel": 30
        },
        "envelope": {
          "attack": 30,
          "decay": 350,
          "sustain": 70,
          "release": 400
        },
        "lfo": {
          "waveform": "sine",
          "rate": 0.2,
          "amt": 15,
          "dest": "filterCutoff"
        }
      },
      "chain": {
        "pre": ["Fruity Parametric EQ 2 - Band-pass filter"],
        "post": ["Fruity Reverb 2 - Large Room, Decay 2.5s, Mix 35%", "Tape Delay - 400ms, Feedback 35%, Mix 20%"]
      },
      "characteristics": ["spacey", "atmospheric", "wide", "melodic"],
      "genreTags": ["hip-hop/rap", "trap", "atmospheric"],
      "a/bTesting": {
        "testA": "Bandpass filter for focused sound",
        "testB": "Lowpass filter for warmer tone"
      },
      "troubleshooting": {
        "tooMidFocused": "Widen bandpass Q to 25",
        "lacksSpace": "Increase reverb mix to 45%"
      }
    },
    "21-savage": {
      "name": "Monolithic Sub",
      "inspiredBy": "21 Savage deep bass aesthetic",
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-2",
          "detune": 0,
          "mix": 100
        },
        "oscillator2": {
          "waveform": "saw",
          "octave": "-2",
          "detune": 2,
          "mix": 80
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 100,
          "resonance": 25,
          "drive": 25,
          "envAmt": 50,
          "envVel": 25
        },
        "envelope": {
          "attack": 10,
          "decay": 300,
          "sustain": 80,
          "release": 250
        },
        "lfo": {
          "waveform": "sine",
          "rate": 0.15,
          "amt": 8,
          "dest": "pitch"
        }
      },
      "chain": {
        "pre": ["High-pass at 25Hz on everything except bass"],
        "post": ["Fruity Limiter - Low threshold, slow attack, heavy compression"]
      },
      "characteristics": ["deep", "heavy", "monolithic", "dark"],
      "genreTags": ["hip-hop/rap", "drill", "dark trap"],
      "a/bTesting": {
        "testA": "Low filter cutoff for pure sub",
        "testB": "Higher cutoff for more harmonic content"
      },
      "troubleshooting": {
        "distortedOutput": "Reduce filter drive to 15%",
        "notScaryEnough": "Add parallel distortion layer"
      }
    },
    "the-weeknd": {
      "name": "Night Drive Pad",
      "inspiredBy": "The Weeknd 80s retro synths",
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
          "detune": 8,
          "mix": 85
        },
        "oscillator3": {
          "waveform": "square",
          "octave": "0",
          "detune": 16,
          "mix": 50
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 2800,
          "resonance": 35,
          "drive": 10,
          "envAmt": 35,
          "envVel": 20
        },
        "envelope": {
          "attack": 200,
          "decay": 500,
          "sustain": 80,
          "release": 800
        },
        "lfo": {
          "waveform": "sine",
          "rate": 0.1,
          "amt": 40,
          "dest": "pan"
        }
      },
      "chain": {
        "pre": ["Vintage Chorus - Mix 45%, Depth 60%"],
        "post": ["Fruity Reverb 2 - Tape, Decay 4s, Mix 20%", "Fruity Parametric EQ 2 - High-shelf +3dB at 6kHz"]
      },
      "characteristics": ["retro", "warm", "wide", "nostalgic"],
      "genreTags": ["R&B", "synthwave", "retro", "moody"],
      "a/bTesting": {
        "testA": "Heavy detune for chorus-like effect",
        "testB": "Tighter detune for cleaner sound"
      },
      "troubleshooting": {
        "phaseCancellation": "Mono the bass frequencies below 200Hz",
        "tooBusy": "Reduce LFO pan rate"
      }
    },
    "drake": {
      "name": "OVO Lead",
      "inspiredBy": "Drake melodic delivery style",
      "settings": {
        "oscillator1": {
          "waveform": "triangle",
          "octave": "0",
          "detune": 0,
          "mix": 100
        },
        "oscillator2": {
          "waveform": "sine",
          "octave": "0",
          "detune": 4,
          "mix": 60
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 3500,
          "resonance": 20,
          "drive": 5,
          "envAmt": 25,
          "envVel": 15
        },
        "envelope": {
          "attack": 40,
          "decay": 400,
          "sustain": 75,
          "release": 350
        },
        "lfo": {
          "waveform": "sine",
          "rate": 0.3,
          "amt": 10,
          "dest": "filterCutoff"
        }
      },
      "chain": {
        "post": ["Fruity Reverb 2 - Studio, Decay 1.5s, Mix 18%", "Fruity Compressor - Soft attack, Ratio 2.5:1"]
      },
      "characteristics": ["smooth", "melodic", "clean", "forward"],
      "genreTags": ["hip-hop/rap", "R&B", "melodic"],
      "a/bTesting": {
        "testA": "Triangle wave for soft attack",
        "testB": "Add saw wave for presence"
      },
      "troubleshooting": {
        "tooSoft": "Increase drive to 12%",
        "maskingVocals": "Sidechain to lead vocals"
      }
    },
    "metro-boomin-bass": {
      "name": "If-You-Know-You-Know",
      "inspiredBy": "Metro Boomin signature bass stab",
      "settings": {
        "oscillator1": {
          "waveform": "saw",
          "octave": "-2",
          "detune": 0,
          "mix": 100
        },
        "oscillator2": {
          "waveform": "square",
          "octave": "-1",
          "detune": 0,
          "mix": 70
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 250,
          "resonance": 50,
          "drive": 22,
          "envAmt": 85,
          "envVel": 70
        },
        "envelope": {
          "attack": 3,
          "decay": 120,
          "sustain": 45,
          "release": 80
        },
        "lfo": {
          "waveform": "square",
          "rate": 1,
          "amt": 20,
          "dest": "filterCutoff"
        }
      },
      "chain": {
        "post": ["Fruity Limiter - Fast attack 0.5ms, Release 25ms, Ratio 6:1"]
      },
      "characteristics": ["punchy", "aggressive", "immediate", "标志性"],
      "genreTags": ["hip-hop/rap", "trap", "hard"],
      "a/bTesting": {
        "testA": "Square wave on osc2 for snappy attack",
        "testB": "Remove osc2 for smoother bass"
      },
      "troubleshooting": {
        "clippingOnHits": "Increase release on limiter to 35ms",
        "notPunchyEnough": "Shorten envelope decay to 100ms"
      }
    },
    "pierre-bourne": {
      "name": "Trinidad Jame$",
      "inspiredBy": "Pierre Bourne plucks",
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
          "detune": 5,
          "mix": 80
        },
        "filter": {
          "type": "lowpass",
          "cutoff": 4000,
          "resonance": 55,
          "drive": 8,
          "envAmt": 95,
          "envVel": 100
        },
        "envelope": {
          "attack": 1,
          "decay": 50,
          "sustain": 0,
          "release": 30
        },
        "lfo": {
          "waveform": "sine",
          "rate": 3,
          "amt": 8,
          "dest": "pitch"
        }
      },
      "chain": {
        "post": ["Fruity Reverb 2 - Small Room, Decay 0.5s, Mix 12%", "Fruity Compressor - Fast attack 1ms, Ratio 4:1"]
      },
      "characteristics": ["bouncy", "plucky", "fun", "repetitive"],
      "genreTags": ["hip-hop/rap", "trap", "playful"],
      "a/bTesting": {
        "testA": "Very short decay for plucky sound",
        "testB": "Longer decay for sustained plucks"
      },
      "troubleshooting": {
        "tooClicky": "Increase attack to 2ms",
        "losingDefinition": "Notch EQ at 800Hz by 2dB"
      }
    }
  }
}

```

---

## FILE: 02-Data\presets\genre\01-808-thunder.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "808 Thunder",
    "category": "genre",
    "genre": "hip-hop/rap",
    "mood": "dark"
  },
  "settings": {
    "oscillator1": {
      "waveform": "saw",
      "octave": "-2",
      "detune": 0,
      "mix": 80
    },
    "oscillator2": {
      "waveform": "square",
      "octave": "-2",
      "detune": 7,
      "mix": 60
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 180,
      "resonance": 25,
      "drive": 15,
      "envAmt": 85,
      "envVel": 40
    },
    "envelope": {
      "attack": 5,
      "decay": 180,
      "sustain": 60,
      "release": 120
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.5,
      "amt": 20,
      "dest": "filterCutoff"
    }
  },
  "chain": {
    "pre": ["Fruity Parametric EQ 2 - High-cut 200Hz, +3dB at 80Hz"],
    "post": ["Fruity Limiter - Threshold -18dB, Ratio 4:1, Makeup +6dB"]
  },
  "genreTags": ["hip-hop/rap", "trap", "drill", "dark"],
  "a/bTesting": {
    "testA": "Filter resonance at 25, sub audible",
    "testB": "Filter resonance at 45, more character"
  },
  "troubleshooting": {
    "muddyMix": "High-pass filter at 30Hz on full mix",
    "clipping": "Reduce oscillator mix levels by 15%"
  }
}

```

---

## FILE: 02-Data\presets\genre\02-mid-range-growler.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Mid-Range Growler",
    "category": "genre",
    "genre": "hip-hop/rap",
    "mood": "aggressive"
  },
  "settings": {
    "oscillator1": {
      "waveform": "saw",
      "octave": "0",
      "detune": 0,
      "mix": 100
    },
    "oscillator2": {
      "waveform": "square",
      "octave": "-1",
      "detune": 5,
      "mix": 70
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 650,
      "resonance": 40,
      "drive": 25,
      "envAmt": 90,
      "envVel": 50
    },
    "envelope": {
      "attack": 2,
      "decay": 150,
      "sustain": 50,
      "release": 100
    },
    "lfo": {
      "waveform": "square",
      "rate": 2,
      "amt": 30,
      "dest": "filterCutoff"
    }
  },
  "chain": {
    "pre": ["Fruily Parametric EQ 2 - Bell +4dB at 400Hz"],
    "post": ["Fruily Compressor - Attack 10ms, Release 80ms, Ratio 3:1"]
  },
  "genreTags": ["hip-hop/rap", "aggressive", "hard"],
  "a/bTesting": {
    "testA": "LFO rate at 2Hz for rhythmic pulsing",
    "testB": "LFO off for static tone"
  },
  "troubleshooting": {
    "harshness": "High-shelf cut above 4kHz by 3dB",
    "weakImpact": "Increase filter drive to 35%"
  }
}

```

---

## FILE: 02-Data\presets\genre\03-silk-lead.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Silk Lead",
    "category": "genre",
    "genre": "R&B",
    "mood": "moody"
  },
  "settings": {
    "oscillator1": {
      "waveform": "sine",
      "octave": "0",
      "detune": 0,
      "mix": 100
    },
    "oscillator2": {
      "waveform": "triangle",
      "octave": "0",
      "detune": 3,
      "mix": 50
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 2200,
      "resonance": 15,
      "drive": 5,
      "envAmt": 30,
      "envVel": 20
    },
    "envelope": {
      "attack": 50,
      "decay": 400,
      "sustain": 70,
      "release": 300
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.25,
      "amt": 15,
      "dest": "pan"
    }
  },
  "chain": {
    "pre": ["Soft clipper - 2dB input reduction"],
    "post": ["Reverb - Hall, Decay 2.5s, Pre-delay 30ms, Mix 20%"]
  },
  "genreTags": ["R&B", "moody", "smooth", "melodic"],
  "a/bTesting": {
    "testA": "Pan LFO on for movement",
    "testB": "Pan LFO off for centered mono"
  },
  "troubleshooting": {
    "harshHighs": "Reduce oscillator2 mix to 30%",
    "tooDark": "Increase filter cutoff to 2800Hz"
  }
}

```

---

## FILE: 02-Data\presets\genre\04-punchy-foundation.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Punchy Foundation",
    "category": "genre",
    "genre": "R&B",
    "mood": "funky"
  },
  "settings": {
    "oscillator1": {
      "waveform": "saw",
      "octave": "-1",
      "detune": 0,
      "mix": 80
    },
    "oscillator2": {
      "waveform": "square",
      "octave": "-2",
      "detune": 2,
      "mix": 40
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 800,
      "resonance": 35,
      "drive": 12,
      "envAmt": 70,
      "envVel": 60
    },
    "envelope": {
      "attack": 3,
      "decay": 120,
      "sustain": 65,
      "release": 150
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.8,
      "amt": 25,
      "dest": "filterCutoff"
    }
  },
  "chain": {
    "pre": ["High-pass filter at 40Hz"],
    "post": ["Fruily Compressor - Attack 15ms, Release 90ms, Ratio 2.5:1"]
  },
  "genreTags": ["R&B", "funky", "groove", "smooth"],
  "a/bTesting": {
    "testA": "Filter env amount at 70 for punch",
    "testB": "Filter env amount at 40 for smoother attack"
  },
  "troubleshooting": {
    "muddyLowEnd": "Cut below 60Hz on bass channel",
    "maskingVocals": "EQ dip at 300-500Hz by 2dB"
  }
}

```

---

## FILE: 02-Data\presets\genre\05-supersaw-hero.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Supersaw Hero",
    "category": "genre",
    "genre": "EDM",
    "mood": "electric"
  },
  "settings": {
    "oscillator1": {
      "waveform": "saw",
      "octave": "0",
      "detune": 0,
      "mix": 90
    },
    "oscillator2": {
      "waveform": "saw",
      "octave": "0",
      "detune": 7,
      "mix": 90
    },
    "oscillator3": {
      "waveform": "saw",
      "octave": "+1",
      "detune": 14,
      "mix": 70
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 4000,
      "resonance": 50,
      "drive": 20,
      "envAmt": 80,
      "envVel": 40
    },
    "envelope": {
      "attack": 20,
      "decay": 250,
      "sustain": 60,
      "release": 400
    },
    "lfo": {
      "waveform": "saw-up",
      "rate": 0.5,
      "amt": 40,
      "dest": "filterCutoff"
    }
  },
  "chain": {
    "pre": ["Soft clipper - 3dB reduction"],
    "post": ["Fruily Limiter - Ceiling -0.3dB, Gain 6dB", "Delay - Stereo, 300ms, Feedback 40%, Mix 25%"]
  },
  "genreTags": ["EDM", "big room", "electric", "anthem"],
  "a/bTesting": {
    "testA": "3 oscillators for massive sound",
    "testB": "2 oscillators for tighter mix"
  },
  "troubleshooting": {
    "muddyMix": "High-pass filter at 200Hz on lead channel",
    "phaseIssues": "Invert phase on osc3 if summing issues"
  }
}

```

---

## FILE: 02-Data\presets\genre\06-resonance-bass.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Resonance Bass",
    "category": "genre",
    "genre": "EDM",
    "mood": "electric"
  },
  "settings": {
    "oscillator1": {
      "waveform": "saw",
      "octave": "-2",
      "detune": 0,
      "mix": 100
    },
    "oscillator2": {
      "waveform": "square",
      "octave": "-1",
      "detune": 3,
      "mix": 60
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 250,
      "resonance": 65,
      "drive": 30,
      "envAmt": 100,
      "envVel": 80
    },
    "envelope": {
      "attack": 5,
      "decay": 200,
      "sustain": 55,
      "release": 150
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.3,
      "amt": 35,
      "dest": "filterCutoff"
    }
  },
  "chain": {
    "pre": ["Teq4 - High-pass at 45Hz"],
    "post": ["Fruily Limiter - Attack 1ms, Release 50ms, Ratio 6:1"]
  },
  "genreTags": ["EDM", "deep bass", "house", "techno"],
  "a/bTesting": {
    "testA": "High resonance for resonance sweeps",
    "testB": "Lower resonance for consistent bass"
  },
  "troubleshooting": {
    "distortedSound": "Reduce filter drive to 20%",
    "weakSub": "Add sub oscillator routed directly to output"
  }
}

```

---

## FILE: 02-Data\presets\genre\07-glitch-pluck.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Glitch Pluck",
    "category": "genre",
    "genre": "trap",
    "mood": "dark"
  },
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
      "detune": 8,
      "mix": 70
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 3000,
      "resonance": 45,
      "drive": 10,
      "envAmt": 95,
      "envVel": 100
    },
    "envelope": {
      "attack": 1,
      "decay": 80,
      "sustain": 0,
      "release": 50
    },
    "lfo": {
      "waveform": "sample-hold",
      "rate": 4,
      "amt": 50,
      "dest": "pitch"
    }
  },
  "chain": {
    "pre": ["Teq4 - High-pass at 500Hz"],
    "post": ["Fruily Reverb 2 - Plate, Decay 1.2s, Mix 18%", "Bitcrusher - 8-bit, 50% wet"]
  },
  "genreTags": ["trap", "dark", "glitch", "aggressive"],
  "a/bTesting": {
    "testA": "Sample-hold LFO for random pitch glitches",
    "testB": "Sine LFO for regular vibrato"
  },
  "troubleshooting": {
    "tooChaotic": "Reduce LFO amount to 25%",
    "tooThin": "Add osc3 with saw wave at +2 octave"
  }
}

```

---

## FILE: 02-Data\presets\genre\08-dusty-texture.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Dusty Texture",
    "category": "genre",
    "genre": "lo-fi",
    "mood": "moody"
  },
  "settings": {
    "oscillator1": {
      "waveform": "saw",
      "octave": "-1",
      "detune": 15,
      "mix": 75
    },
    "oscillator2": {
      "waveform": "triangle",
      "octave": "-2",
      "detune": 22,
      "mix": 60
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 1500,
      "resonance": 20,
      "drive": 8,
      "envAmt": 25,
      "envVel": 15
    },
    "envelope": {
      "attack": 150,
      "decay": 500,
      "sustain": 75,
      "release": 800
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.1,
      "amt": 20,
      "dest": "filterCutoff"
    }
  },
  "chain": {
    "pre": ["Vintage Phaser - 4 stages, 0.3Hz rate, Mix 40%"],
    "post": ["Fruily Reverb 2 - Room, Decay 3s, Mix 25%", "Tape Saturation - 3% drive"]
  },
  "genreTags": ["lo-fi", "moody", "chill", "nostalgic"],
  "a/bTesting": {
    "testA": "Detune oscillators heavily for warmth",
    "testB": "Tighter detune for cleaner sound"
  },
  "troubleshooting": {
    "tooNoisy": "Reduce LFO amount to 10%",
    "tooDark": "Increase filter cutoff to 2000Hz"
  }
}

```

---

## FILE: 02-Data\presets\genre\09-reaper-sub.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Reaper Sub",
    "category": "genre",
    "genre": "drill",
    "mood": "dark"
  },
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
      "mix": 90
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 120,
      "resonance": 30,
      "drive": 20,
      "envAmt": 60,
      "envVel": 30
    },
    "envelope": {
      "attack": 8,
      "decay": 250,
      "sustain": 70,
      "release": 180
    },
    "lfo": {
      "waveform": "square",
      "rate": 0.4,
      "amt": 15,
      "dest": "pitch"
    }
  },
  "chain": {
    "pre": ["Fruily Parametric EQ 2 - High-pass at 20Hz"],
    "post": ["Fruily Limiter - Threshold -12dB, Attack 0.5ms, Release 30ms"]
  },
  "genreTags": ["drill", "dark", "heavy", "aggressive"],
  "a/bTesting": {
    "testA": "Pitch LFO on for sub wobble",
    "testB": "Pitch LFO off for steady sub"
  },
  "troubleshooting": {
    "distortedByDesign": "Keep distortion intentional, check for unwanted clipping",
    "weakLowEnd": "Increase filter drive to 30%"
  }
}

```

---

## FILE: 02-Data\presets\genre\10-ethereal-wash.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Ethereal Wash",
    "category": "genre",
    "genre": "ambient",
    "mood": "moody"
  },
  "settings": {
    "oscillator1": {
      "waveform": "sine",
      "octave": "-1",
      "detune": 0,
      "mix": 100
    },
    "oscillator2": {
      "waveform": "triangle",
      "octave": "-1",
      "detune": 12,
      "mix": 70
    },
    "oscillator3": {
      "waveform": "saw",
      "octave": "0",
      "detune": 25,
      "mix": 40
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 2500,
      "resonance": 25,
      "drive": 5,
      "envAmt": 20,
      "envVel": 10
    },
    "envelope": {
      "attack": 500,
      "decay": 800,
      "sustain": 85,
      "release": 1500
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.15,
      "amt": 30,
      "dest": "pan"
    }
  },
  "chain": {
    "pre": ["Vintage Chorus - Mix 50%, Rate 0.3Hz"],
    "post": ["Fruily Reverb 2 - Cathedral, Decay 6s, Mix 30%"]
  },
  "genreTags": ["ambient", "moody", "cinematic", "spacey"],
  "a/bTesting": {
    "testA": "3 oscillators for width and depth",
    "testB": "2 oscillators for simpler arrangements"
  },
  "troubleshooting": {
    "phasingIssues": "Reduce LFO pan amount to 15%",
    "tooBright": "Filter cutoff to 1800Hz"
  }
}

```

---

## FILE: 02-Data\presets\signature\21-savage.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Monolithic Sub",
    "category": "signature",
    "inspiredBy": "21 Savage deep bass aesthetic"
  },
  "settings": {
    "oscillator1": {
      "waveform": "saw",
      "octave": "-2",
      "detune": 0,
      "mix": 100
    },
    "oscillator2": {
      "waveform": "saw",
      "octave": "-2",
      "detune": 2,
      "mix": 80
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 100,
      "resonance": 25,
      "drive": 25,
      "envAmt": 50,
      "envVel": 25
    },
    "envelope": {
      "attack": 10,
      "decay": 300,
      "sustain": 80,
      "release": 250
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.15,
      "amt": 8,
      "dest": "pitch"
    }
  },
  "chain": {
    "pre": ["High-pass at 25Hz on everything except bass"],
    "post": ["Fruily Limiter - Low threshold, slow attack, heavy compression"]
  },
  "characteristics": ["deep", "heavy", "monolithic", "dark"],
  "genreTags": ["hip-hop/rap", "drill", "dark trap"],
  "a/bTesting": {
    "testA": "Low filter cutoff for pure sub",
    "testB": "Higher cutoff for more harmonic content"
  },
  "troubleshooting": {
    "distortedOutput": "Reduce filter drive to 15%",
    "notScaryEnough": "Add parallel distortion layer"
  }
}

```

---

## FILE: 02-Data\presets\signature\drake.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "OVO Lead",
    "category": "signature",
    "inspiredBy": "Drake melodic delivery style"
  },
  "settings": {
    "oscillator1": {
      "waveform": "triangle",
      "octave": "0",
      "detune": 0,
      "mix": 100
    },
    "oscillator2": {
      "waveform": "sine",
      "octave": "0",
      "detune": 4,
      "mix": 60
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 3500,
      "resonance": 20,
      "drive": 5,
      "envAmt": 25,
      "envVel": 15
    },
    "envelope": {
      "attack": 40,
      "decay": 400,
      "sustain": 75,
      "release": 350
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.3,
      "amt": 10,
      "dest": "filterCutoff"
    }
  },
  "chain": {
    "post": ["Fruily Reverb 2 - Studio, Decay 1.5s, Mix 18%", "Fruily Compressor - Soft attack, Ratio 2.5:1"]
  },
  "characteristics": ["smooth", "melodic", "clean", "forward"],
  "genreTags": ["hip-hop/rap", "R&B", "melodic"],
  "a/bTesting": {
    "testA": "Triangle wave for soft attack",
    "testB": "Add saw wave for presence"
  },
  "troubleshooting": {
    "tooSoft": "Increase drive to 12%",
    "maskingVocals": "Sidechain to lead vocals"
  }
}

```

---

## FILE: 02-Data\presets\signature\metro-boomin-bass-stab.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "If-You-Know-You-Know",
    "category": "signature",
    "inspiredBy": "Metro Boomin signature bass stab"
  },
  "settings": {
    "oscillator1": {
      "waveform": "saw",
      "octave": "-2",
      "detune": 0,
      "mix": 100
    },
    "oscillator2": {
      "waveform": "square",
      "octave": "-1",
      "detune": 0,
      "mix": 70
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 250,
      "resonance": 50,
      "drive": 22,
      "envAmt": 85,
      "envVel": 70
    },
    "envelope": {
      "attack": 3,
      "decay": 120,
      "sustain": 45,
      "release": 80
    },
    "lfo": {
      "waveform": "square",
      "rate": 1,
      "amt": 20,
      "dest": "filterCutoff"
    }
  },
  "chain": {
    "post": ["Fruily Limiter - Fast attack 0.5ms, Release 25ms, Ratio 6:1"]
  },
  "characteristics": ["punchy", "aggressive", "immediate", "标志性"],
  "genreTags": ["hip-hop/rap", "trap", "hard"],
  "a/bTesting": {
    "testA": "Square wave on osc2 for snappy attack",
    "testB": "Remove osc2 for smoother bass"
  },
  "troubleshooting": {
    "clippingOnHits": "Increase release on limiter to 35ms",
    "notPunchyEnough": "Shorten envelope decay to 100ms"
  }
}

```

---

## FILE: 02-Data\presets\signature\metro-boomin-bass.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Boomin Bass",
    "category": "signature",
    "inspiredBy": "Metro Boomin style"
  },
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
      "detune": 3,
      "mix": 75
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 160,
      "resonance": 35,
      "drive": 18,
      "envAmt": 70,
      "envVel": 45
    },
    "envelope": {
      "attack": 5,
      "decay": 200,
      "sustain": 65,
      "release": 130
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.25,
      "amt": 10,
      "dest": "filterCutoff"
    }
  },
  "chain": {
    "post": ["Fruily Limiter - Threshold -16dB, Ratio 4:1, Attack 1ms, Release 40ms"]
  },
  "characteristics": ["deep", "punchy", "modern", "cleansounding"],
  "genreTags": ["hip-hop/rap", "trap", "modern"],
  "a/bTesting": {
    "testA": "Filter env amount at 70 for initial punch",
    "testB": "Filter env amount at 50 for smoother attack"
  },
  "troubleshooting": {
    "notDeepEnough": "High-pass full mix at 35Hz to create space",
    "tooMuchSub": "Sidechain to kick at 0.3s release"
  }
}

```

---

## FILE: 02-Data\presets\signature\mike-will.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Future Bass",
    "category": "signature",
    "inspiredBy": "Mike Will Made-It style"
  },
  "settings": {
    "oscillator1": {
      "waveform": "saw",
      "octave": "0",
      "detune": 0,
      "mix": 90
    },
    "oscillator2": {
      "waveform": "saw",
      "octave": "0",
      "detune": 7,
      "mix": 90
    },
    "oscillator3": {
      "waveform": "saw",
      "octave": "+1",
      "detune": 14,
      "mix": 60
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 3500,
      "resonance": 45,
      "drive": 15,
      "envAmt": 75,
      "envVel": 35
    },
    "envelope": {
      "attack": 10,
      "decay": 180,
      "sustain": 55,
      "release": 250
    },
    "lfo": {
      "waveform": "saw-down",
      "rate": 0.25,
      "amt": 50,
      "dest": "filterCutoff"
    }
  },
  "chain": {
    "pre": ["Soft clipper - 2dB input"],
    "post": ["Fruily Reverb 2 - Large Hall, Decay 3.5s, Mix 25%", "Fruily Limiter - Ceiling -0.5dB"]
  },
  "characteristics": ["wide", "bright", "uplifting", "melodic"],
  "genreTags": ["hip-hop/rap", "R&B", "future bass"],
  "a/bTesting": {
    "testA": "Filter sweep down on attack",
    "testB": "Static filter for sustained chords"
  },
  "troubleshooting": {
    "muddyArrangement": "High-pass synth at 300Hz except on bass notes",
    "maskingVocals": "Notch EQ at 2-3kHz on synth"
  }
}

```

---

## FILE: 02-Data\presets\signature\pierre-bourne.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Trinidad Jame$",
    "category": "signature",
    "inspiredBy": "Pierre Bourne plucks"
  },
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
      "detune": 5,
      "mix": 80
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 4000,
      "resonance": 55,
      "drive": 8,
      "envAmt": 95,
      "envVel": 100
    },
    "envelope": {
      "attack": 1,
      "decay": 50,
      "sustain": 0,
      "release": 30
    },
    "lfo": {
      "waveform": "sine",
      "rate": 3,
      "amt": 8,
      "dest": "pitch"
    }
  },
  "chain": {
    "post": ["Fruily Reverb 2 - Small Room, Decay 0.5s, Mix 12%", "Fruily Compressor - Fast attack 1ms, Ratio 4:1"]
  },
  "characteristics": ["bouncy", "plucky", "fun", "repetitive"],
  "genreTags": ["hip-hop/rap", "trap", "playful"],
  "a/bTesting": {
    "testA": "Very short decay for plucky sound",
    "testB": "Longer decay for sustained plucks"
  },
  "troubleshooting": {
    "tooClicky": "Increase attack to 2ms",
    "losingDefinition": "Notch EQ at 800Hz by 2dB"
  }
}

```

---

## FILE: 02-Data\presets\signature\sounwave.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "West Coast Drfill",
    "category": "signature",
    "inspiredBy": "Sounwave style (TDE)"
  },
  "settings": {
    "oscillator1": {
      "waveform": "saw",
      "octave": "-1",
      "detune": 0,
      "mix": 80
    },
    "oscillator2": {
      "waveform": "square",
      "octave": "-2",
      "detune": 4,
      "mix": 55
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 600,
      "resonance": 30,
      "drive": 12,
      "envAmt": 65,
      "envVel": 50
    },
    "envelope": {
      "attack": 8,
      "decay": 220,
      "sustain": 60,
      "release": 200
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.35,
      "amt": 20,
      "dest": "pan"
    }
  },
  "chain": {
    "post": ["Fruily Parametric EQ 2 - High-shelf +2dB at 4kHz", "Fruily Compressor - Soft knee, Ratio 2:1"]
  },
  "characteristics": ["smooth", "warm", "moody", "spacey"],
  "genreTags": ["hip-hop/rap", "West Coast", "moody"],
  "a/bTesting": {
    "testA": "Pan movement for width",
    "testB": "Mono for punch"
  },
  "troubleshooting": {
    "tooDark": "Increase filter cutoff by 100Hz increments",
    "lacksCharacter": "Add subtle bitcrusher after Kepler"
  }
}

```

---

## FILE: 02-Data\presets\signature\the-weeknd.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Night Drive Pad",
    "category": "signature",
    "inspiredBy": "The Weeknd 80s retro synths"
  },
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
      "detune": 8,
      "mix": 85
    },
    "oscillator3": {
      "waveform": "square",
      "octave": "0",
      "detune": 16,
      "mix": 50
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 2800,
      "resonance": 35,
      "drive": 10,
      "envAmt": 35,
      "envVel": 20
    },
    "envelope": {
      "attack": 200,
      "decay": 500,
      "sustain": 80,
      "release": 800
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.1,
      "amt": 40,
      "dest": "pan"
    }
  },
  "chain": {
    "pre": ["Vintage Chorus - Mix 45%, Depth 60%"],
    "post": ["Fruily Reverb 2 - Tape, Decay 4s, Mix 20%", "Fruily Parametric EQ 2 - High-shelf +3dB at 6kHz"]
  },
  "characteristics": ["retro", "warm", "wide", "nostalgic"],
  "genreTags": ["R&B", "synthwave", "retro", "moody"],
  "a/bTesting": {
    "testA": "Heavy detune for chorus-like effect",
    "testB": "Tighter detune for cleaner sound"
  },
  "troubleshooting": {
    "phaseCancellation": "Mono the bass frequencies below 200Hz",
    "tooBusy": "Reduce LFO pan rate"
  }
}

```

---

## FILE: 02-Data\presets\signature\travis-scott.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Auto-Tune Lead",
    "category": "signature",
    "inspiredBy": "Travis Scott atmospheric leads"
  },
  "settings": {
    "oscillator1": {
      "waveform": "saw",
      "octave": "0",
      "detune": 0,
      "mix": 85
    },
    "oscillator2": {
      "waveform": "triangle",
      "octave": "0",
      "detune": 6,
      "mix": 65
    },
    "filter": {
      "type": "bandpass",
      "cutoff": 2000,
      "resonance": 35,
      "drive": 10,
      "envAmt": 40,
      "envVel": 30
    },
    "envelope": {
      "attack": 30,
      "decay": 350,
      "sustain": 70,
      "release": 400
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.2,
      "amt": 15,
      "dest": "filterCutoff"
    }
  },
  "chain": {
    "pre": ["Fruily Parametric EQ 2 - Band-pass filter"],
    "post": ["Fruily Reverb 2 - Large Room, Decay 2.5s, Mix 35%", "Tape Delay - 400ms, Feedback 35%, Mix 20%"]
  },
  "characteristics": ["spacey", "atmospheric", "wide", "melodic"],
  "genreTags": ["hip-hop/rap", "trap", "atmospheric"],
  "a/bTesting": {
    "testA": "Bandpass filter for focused sound",
    "testB": "Lowpass filter for warmer tone"
  },
  "troubleshooting": {
    "tooMidFocused": "Widen bandpass Q to 25",
    "lacksSpace": "Increase reverb mix to 45%"
  }
}

```

---

## FILE: 02-Data\presets\signature\zaytoven.json

```json
{
  "metadata": {
    "plugin": "Kepler",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "MIDI Pluck",
    "category": "signature",
    "inspiredBy": "Zaytoven style"
  },
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
      "detune": 2,
      "mix": 50
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 2800,
      "resonance": 40,
      "drive": 8,
      "envAmt": 90,
      "envVel": 100
    },
    "envelope": {
      "attack": 2,
      "decay": 60,
      "sustain": 0,
      "release": 40
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.5,
      "amt": 5,
      "dest": "pitch"
    }
  },
  "chain": {
    "post": ["Fruily Reverb 2 - Small Room, Decay 0.8s, Mix 15%", "Fruily Compressor - Fast attack, Ratio 3:1"]
  },
  "characteristics": ["plucky", "bright", "melodic", "groove"],
  "genreTags": ["hip-hop/rap", "R&B", "melodic"],
  "a/bTesting": {
    "testA": "Square wave for classic MIDI feel",
    "testB": "Add saw for modern edge"
  },
  "troubleshooting": {
    "tooClicky": "Increase envelope attack to 5ms",
    "sustainingTooLong": "Reduce sustain to 0, increase release slightly"
  }
}

```

---

## FILE: 02-Data\rules\kepler-safety-rules.md

```markdown
Tags: hip-hop/rap | R&B | electric

## Kepler Safety Rules

### Gain Staging

| Stage | Target Level | Purpose | Priority |
|-------|-------------|---------|----------|
| Oscillator | -6 to -3 dB | Headroom for resonance | Critical |
| Mixer | -3 to 0 dB | Clean summation | High |
| Filter | Watch resonance boost | Avoid clipping | Critical |
| VCA/Amp | -6 dB | Dynamic range | Medium |
| Output | Match other channels | Consistent mixing | High |

### Resonance Safety

**The Resonance Boost Rule:**
Resonance can add +6dB to +12dB at the cutoff frequency. Always account for this when setting oscillator levels.

**Safe Resonance Ranges:**

| Use Case | Max Resonance | Why |
|----------|--------------|-----|
| Sub-bass | 30% | Prevents mud |
| Fundamentals | 40% | Maintains clarity |
| Musical | 50% | Character without chaos |
| Solo/lead | 60% | Maximum expression |
| Sound design | 80% | Controlled chaos |

### CPU Management

| Issue | Solution | Priority |
|-------|----------|----------|
| Multiple instances | Use mono versions | High |
| Complex routing | Simplify matrix | Medium |
| Reverb tails | Render and freeze | Medium |
| Modulation heavy | Reduce LFO count | Low |

### The "Kepler Check" Workflow

1. **Initialize patch**
2. **Set oscillator levels** to -6 dB each
3. **Add filter** with 30% resonance
4. **Test at full mix volume**
5. **Check mono compatibility**
6. **A/B with reference**

### Prevention Checklist

- [ ] Oscillators below -3 dB
- [ ] Resonance boost accounted for
- [ ] Filter not clipping
- [ ] Modulation in musical ranges
- [ ] Mono compatible
- [ ] CPU efficient
- [ ] Saved as preset

### Genre Safety Guidelines

**Hip-Hop:**
| Parameter | Safe Range | Warning |
|-----------|-------------|---------|
| Filter Cutoff | 25-40% (bass), 60-80% (lead) | Avoid >90% |
| Resonance | 25-40% | Avoid >50% |
| Osc Level | -6 to -3 dB | Never 0 dB |
| Envelope | Fast attack (5-10ms) | Natural release |

**R&B:**
| Parameter | Safe Range | Warning |
|-----------|-------------|---------|
| Filter Cutoff | 60-80% | Avoid <50% (too dark) |
| Resonance | 15-30% | Avoid >40% |
| Osc Level | -6 dB | Consistent |
| Envelope | Medium attack (20ms) | Smooth decay |

**EDM:**
| Parameter | Safe Range | Warning |
|-----------|-------------|---------|
| Filter Cutoff | Variable (automation) | Close fully for drops |
| Resonance | 35-55% | Character is key |
| Osc Level | -3 dB | Needs punch |
| Envelope | Fast attack | Immediate response |

```

---

## FILE: 03-Workflows\by-goal\arpeggiated-sequences.md

```markdown
# Workflow: Arpeggiated Sequences (Upbeat/Psychedelic)

*Goal: Using Kepler's built-in arpeggiator and resonant filter to create rhythmic, hypnotic motion.*

## Vibe Mapping
- **Upbeat:** ⭐⭐⭐⭐⭐ (Primary)
- **Psychedelic:** ⭐⭐⭐⭐⭐ (With filter modulation)
- **Vibey:** ⭐⭐⭐ (With slow delay/reverb)

## 🚶 Step-by-Step Setup
1. **The Sound:**
   - Use **Sawtooth** or **Square** waveform.
   - **Range:** 8'.
   - **Filter Freq:** 50%.
   - **Resonance:** 40% (Adds the "pluck" character).
2. **The Arpeggiator:**
   - **Range:** 2 (Swings across two octaves).
   - **Mode:** **Up/Down** (The classic hypnotic JUNO pattern).
   - **Speed:** Sync to **1/16** or **1/8** (BPM dependent).
3. **The Envelopes:**
   - **Decay:** Short (30%).
   - **Sustain:** 0%.
   - **Release:** Short.
4. **Modulation (LFO):**
   - Set **LFO Speed** to match the track tempo if possible.
   - Raise **LFO Depth** in the **VCF (Filter)** section. This makes the "brightness" of the arpeggio rise and fall rhythmically.
5. **The Space:**
   - Engage **Chorus II** for maximum energy and width.

## 🔄 Variations
- **The "Acid Arp":** Increase **Resonance** to 90% and manually sweep the **Filter Freq**.
- **The "Bell Arp":** Use **Range 4'**, **Sub OFF**, and **Square Wave** with **High HPF** to thin it out.

## ⚠️ Pitfalls & Fixes
- **Problem:** Arpeggio is out of time.
- **Fix:** Ensure the **Speed** setting is correctly set to a synced division (1/8, 1/16) and that your DAW transport is playing.
- **Problem:** Notes are overlapping and sounding messy.
- **Fix:** Decrease the **Release** fader.

## 🎚️ Automation Ideas
- **Filter Climb:** Automate **Filter Freq** from 0 to 100% over 8 bars for a classic riser.
- **Range Warp:** Automate the **Arp Range** from 1 to 3 during a climax.

```

---

## FILE: 03-Workflows\by-goal\classic-lush-pads.md

```markdown
# Workflow: Classic Lush Pads (Vibey/Moody)

*Goal: Creating the definitive JUNO-style pad—creamy, wide, and atmospheric—perfect for R&B, Synthwave, and Ambient textures.*

## Vibe Mapping
- **Vibey:** ⭐⭐⭐⭐⭐ (Primary)
- **Moody:** ⭐⭐⭐⭐⭐ (With dark filtering)
- **Psychedelic:** ⭐⭐⭐ (With PWM modulation)

## 🚶 Step-by-Step Setup
1. **The Core Tone:**
   - Engage **Sawtooth** and **Pulse** waves simultaneously (DCO Section).
   - Set **Range** to **8'**.
   - Add **Sub-Oscillator** at **30%** for low-end body.
2. **The Signature Width:**
   - Engage **Chorus I+II** (Press both buttons if your interface supports it, or choose the combined mode).
3. **The Envelopes (VCA):**
   - **Attack:** 1–2 seconds (Slow fade-in).
   - **Release:** 2–3 seconds (Slow fade-out).
   - **Sustain:** 100% (Continuous sound).
4. **The Filter (VCF):**
   - **Freq (Cutoff):** Set to **40%** (Warm/Dark).
   - **Resonance:** Set to **15%** (Subtle character).
   - **Env Depth:** Set to **10%** (Just enough to make the pad "breathe" as it starts).
5. **The Drift (LFO):**
   - Set LFO to **Triangle**.
   - Set **LFO Speed** to slow.
   - Slightly raise **LFO depth** in the DCO section (1-2%) for pitch drift.

## 🔄 Variations
- **The "Dreamy Soul" Pad:** Lower **Filter Freq** to **20%** and increase **Chorus II** speed.
- **The "Tape Wear" Pad:** Use **PWM** modulated by a slow **LFO** to create evolving harmonic "warping."

## ⚠️ Pitfalls & Fixes
- **Problem:** Pad is too loud and "distorts" the chorus.
- **Fix:** Lower the **VCA Level** slider. The chorus circuit in vintage synths has limited headroom.
- **Problem:** Low-end is too "blurry" for the mix.
- **Fix:** Use the **HPF** slider to remove the sub-frequencies (set to 1 or 2).

## 🎚️ Automation Ideas
- **Filter Bloom:** Automate the **Filter Freq** to slowly open from 20% to 60% during a breakdown.
- **Resonant Rise:** Increase **Resonance** and **Freq** simultaneously during a riser.

```

---

## FILE: 03-Workflows\by-goal\snappy-80s-bass.md

```markdown
# Workflow: Snappy 80s Bass (Upbeat/Moody)

*Goal: Creating a punchy, solid analog bassline with the classic JUNO "snap"—perfect for 80s Pop, Synthwave, and modern G-Funk.*

## Vibe Mapping
- **Upbeat:** ⭐⭐⭐⭐⭐ (Primary)
- **Moody:** ⭐⭐⭐⭐ (With dark filtering)
- **Jazzy:** ⭐⭐⭐ (With Square wave + Sub)

## 🚶 Step-by-Step Setup
1. **The Foundation:**
   - Engage the **Pulse** wave.
   - Set **Range** to **16'**.
   - Crank the **Sub-Oscillator** to **100%**. This is the source of the weight.
2. **The "Snap" (VCF Envelope):**
   - **Filter Freq:** Set to **0%** (Closed).
   - **Env Depth:** Set to **60%** (This "opens" the filter when a note hits).
   - **Resonance:** Set to **30%** for that "pluck" character.
3. **The ADSR (ENV):**
   - **Attack:** 0 (Instant).
   - **Decay:** Short (30-40%) to create the "snap."
   - **Sustain:** 0-20% (Brief sustain).
   - **Release:** Short (20%) for a clean cutoff.
4. **Width & Texture:**
   - **Chorus I:** Engage for a wider, "modern" bass feel. (Optional: Leave Off for a tighter, center-focused mono bass).
5. **DCO PWM:**
   - Set **PWM Mode** to **LFO**.
   - Set **PWM Depth** to 30% for subtle thickness.

## 🔄 Variations
- **The "Techno Stab":** Set **Resonance** to 80% and **Decay** even shorter.
- **The "R&B Sub":** Turn off **Pulse**, use **Square + Sub**, and set **Filter Freq** very low with 0 resonance.

## ⚠️ Pitfalls & Fixes
- **Problem:** Bass disappears in the mix.
- **Fix:** Turn off **Chorus**. Chorus makes the low end wide, which can cause phase cancellation in mono.
- **Problem:** Bass is too "clicky."
- **Fix:** Increase the **Attack** fader slightly (just a few milliseconds).

## 🎚️ Automation Ideas
- **Filter Growl:** Automate the **Filter Decay** to get longer during the chorus to make the bass feel "bigger."
- **PWM Sweep:** Automate the **PWM Depth** for a "squelchy" timbral change.

```

---

## FILE: 03-Workflows\by-instrument\01-808-sub-bass.md

```markdown
# 808 Sub Bass Workflow

## Sound Profile
Deep, punchy sub with harmonic complexity for modern hip-hop and trap productions.

## Recommended Preset
`genre/01-808-thunder.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 80% | Sub harmonics |
| Oscillator 2 | Square, -2 octave, 60% | Harmonic content |
| Filter | Lowpass, 180Hz, Resonance 25 | Tone shaping |
| Filter Drive | 15% | Harmonic saturation |
| Envelope | A:5, D:180, S:60, R:120 | Punch envelope |
| LFO | Sine, 0.5Hz, 20% to Filter | Subtle movement |

## Genre Variations
- **Trap:** Increase resonance to 35%, filter drive to 20%
- **Drill:** Add pitch LFO at 0.4Hz, 15% to pitch
- **Old School:** Reduce resonance to 20%, shorter decay
- **R&B:** Softer attack (8ms), warmer filter drive (10%)

## Chain Processing
`\`\`
Kepler → Fruity Parametric EQ 2
  - High-pass at 30Hz
  - +3dB bell at 80Hz
  → Fruity Limiter
  - Threshold: -18dB
  - Ratio: 4:1
  - Attack: 1ms
  - Release: 40ms
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More punch | Increase filter resonance to 35% |
| Darker tone | Reduce filter cutoff to 150Hz |
| Brighter tone | Increase filter cutoff to 220Hz |
| More grit | Increase filter drive to 22% |
| Cleaner sound | Reduce osc2 mix to 40% |
| More wobble | Increase LFO rate to 0.8Hz |

## Troubleshooting
| Problem | Solution |
|---------|----------|
| Muffled sound | Increase filter cutoff by 20Hz |
| Distorted output | Reduce oscillator mix by 15% |
| Clicking on attacks | Increase envelope attack to 6ms |
| Phase issues | Invert osc2 phase |
| Weak low-end | Add Fruity Parametric EQ boost at 60Hz |
| Masking vocals | High-pass at 200Hz on bass channel |

## Automation Ideas
- Filter cutoff automation for risers (0→200Hz over 4 bars)
- Resonance increase on hit points
- LFO rate changes for rhythmic interest
- Filter drive increases during drops

```

---

## FILE: 03-Workflows\by-instrument\01-bass-workflows.md

```markdown
# Kepler Bass Workflows

## 808 Sub Bass

### Sound Profile
Deep, punchy sub with harmonic complexity for modern hip-hop and trap productions.

### Recommended Preset
`genre/01-808-thunder.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 80% | Sub harmonics |
| Oscillator 2 | Square, -2 octave, 60% | Harmonic content |
| Filter | Lowpass, 180Hz, Resonance 25 | Tone shaping |
| Filter Drive | 15% | Harmonic saturation |
| Envelope | A:5, D:180, S:60, R:120 | Punch envelope |
| LFO | Sine, 0.5Hz, 20% to Filter | Subtle movement |

### Genre Variations
- **Trap:** Increase resonance to 35%, filter drive to 20%
- **Drill:** Add pitch LFO at 0.4Hz, 15% to pitch
- **Old School:** Reduce resonance to 20%, shorter decay
- **R&B:** Softer attack (8ms), warmer filter drive (10%)

### Chain Processing
`\`\`
Kepler → Fruity Parametric EQ 2
  - High-pass at 30Hz
  - +3dB bell at 80Hz
  → Fruity Limiter
  - Threshold: -18dB
  - Ratio: 4:1
  - Attack: 1ms
  - Release: 40ms
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More punch | Increase filter resonance to 35% |
| Darker tone | Reduce filter cutoff to 150Hz |
| brighter tone | Increase filter cutoff to 220Hz |
| More grit | Increase filter drive to 22% |
| Cleaner sound | Reduce osc2 mix to 40% |
| More wobble | Increase LFO rate to 0.8Hz |

### Troubleshooting
| Problem | Solution |
|---------|----------|
| Muffled sound | Increase filter cutoff by 20Hz |
| Distorted output | Reduce oscillator mix by 15% |
| Clicking on attacks | Increase envelope attack to 6ms |
| Phase issues | Invert osc2 phase |
| Weak low-end | Add Fruity Parametric EQ boost at 60Hz |
| Masking vocals | High-pass at 200Hz on bass channel |

### Automation Ideas
- Filter cutoff automation for risers (0→200Hz over 4 bars)
- Resonance increase on hit points
- LFO rate changes for rhythmic interest
- Filter drive increases during drops

---

## Mid-Range Bass

### Sound Profile
Funky, present bass for R&B and melodic hip-hop with harmonic richness.

### Recommended Preset
`genre/04-punchy-foundation.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -1 octave, 80% | Body |
| Oscillator 2 | Square, -2 octave, 40% | Clarity |
| Filter | Lowpass, 800Hz, Resonance 35 | Character |
| Filter Drive | 12% | Saturation |
| Envelope | A:3, D:120, S:65, R:150 | Groove |
| LFO | Sine, 0.8Hz, 25% to Filter | Rhythm |

### Genre Variations
- **R&B:** Softer resonance (25%), slower LFO (0.4Hz)
- **Funky:** Faster LFO (1Hz), higher resonance (40%)
- **Melodic:** Slower attack (15ms), longer release (200ms)

### Chain Processing
`\`\`
Kepler → Fruity Parametric EQ 2
  - High-pass at 40Hz
  - Bell +2dB at 400Hz
  - Cut at 150Hz
  → Fruity Compressor
  - Attack: 15ms
  - Release: 90ms
  - Ratio: 2.5:1
  - Makeup: Auto
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More funk | Increase LFO rate to 1.2Hz |
| Smoother tone | Reduce resonance to 25% |
| More presence | Increase osc2 mix to 55% |
| More warmth | Reduce filter cutoff to 600Hz |
| More attack | Decrease envelope decay to 80ms |

### A/B Testing Checklist
- [ ] Resonance at 35% vs 25%
- [ ] LFO on vs LFO off
- [ ] Osc2 at 40% vs 55%
- [ ] Filter drive at 12% vs 18%

---

## Drill Sub

### Sound Profile
Heavy, menacing sub with extreme low-end presence for drill productions.

### Recommended Preset
`genre/09-reaper-sub.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 90% | Weight |
| Oscillator 2 | Saw, -2 octave, 90% | Thickness |
| Filter | Lowpass, 120Hz, Resonance 30 | Darkness |
| Filter Drive | 20% | Distortion |
| Envelope | A:8, D:250, S:70, R:180 | Sustain |
| LFO | Square, 0.4Hz, 15% to Pitch | Dissonance |

### Genre Variations
- **UK Drill:** Faster LFO (0.6Hz), higher resonance (38%)
- **American Drill:** Static pitch, lower resonance (25%)
- **Dark Trap:** Subtle LFO (0.2Hz), moderate drive (15%)

### Chain Processing
`\`\`
Kepler → Fruity Parametric EQ 2
  - High-pass at 25Hz
  → Fruity Limiter
  - Threshold: -12dB
  - Ratio: 6:1
  - Attack: 0.5ms
  - Release: 30ms
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More menacing | Increase pitch LFO to 20% |
| Heavier | Increase filter drive to 28% |
| Cleaner | Reduce osc2 mix to 70% |
| More movement | Increase LFO rate to 0.6Hz |

### Safety Notes
- Monitor for unwanted distortion at high filter drive
- Use high-pass filters on all other channels
- Check mono compatibility before mixing

---

## Bass Workflow Summary

### By Genre
| Genre | Preset | Key Tweaks |
|-------|--------|------------|
| Trap | 808 Thunder | Resonance 35%, LFO on |
| Drill | Reaper Sub | Pitch LFO, high drive |
| R&B | Punchy Foundation | Softer attack, warmth |
| Hip-Hop | 808 Thunder | Classic settings |
| EDM | Resonance Bass | Higher resonance, filter sweeps |

### By Role
| Role | Recommended Settings |
|------|---------------------|
| Main 808 | 808 Thunder, +3dB at 80Hz |
| Layer bass | Punchy Foundation, lower volume |
| Sub layer | Reaper Sub, filtered below 150Hz |
| Textural bass | Glitch Pluck, short envelope |

### Genre Translation Quick Reference
| From → To | Adjustment |
|-----------|------------|
| Trap → R&B | Reduce resonance 50%, slow LFO |
| Trap → Drill | Add pitch LFO, increase drive |
| Drill → Trap | Remove pitch LFO, reduce drive |
| R&B → Trap | Increase resonance, add LFO |

```

---

## FILE: 03-Workflows\by-instrument\02-lead-workflows.md

```markdown
# Kepler Lead Workflows

## Smooth R&B Lead

### Sound Profile
Warm, emotional lead with smooth attack and silky sustain for R&B vocal-inspired melodies.

### Recommended Preset
`genre/03-silk-lead.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, 0 octave, 100% | Core tone |
| Oscillator 2 | Triangle, 0 octave, 50% | Harmonics |
| Filter | Lowpass, 2200Hz, Resonance 15 | Softness |
| Filter Drive | 5% | Subtle warmth |
| Envelope | A:50, D:400, S:70, R:300 | Smooth entry/exit |
| LFO | Sine, 0.25Hz, 15% to Pan | Subtle movement |

### Genre Variations
- **Neo-Soul:** Increase resonance to 20%, add slight vibrato
- **Contemporary R&B:** Faster attack (30ms), brighter filter (2800Hz)
- **90s R&B:** Triangle wave at 70%, lower filter (1800Hz)

### Chain Processing
`\`\`
Kepler → Soft Clipper
  - Input reduction: 2dB
  → Fruity Reverb 2
  - Type: Hall
  - Decay: 2.5s
  - Pre-delay: 30ms
  - Mix: 20%
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More presence | Increase osc2 mix to 65% |
| Warmer tone | Reduce filter cutoff to 1800Hz |
| Brighter tone | Increase filter cutoff to 3000Hz |
| More movement | Increase LFO rate to 0.4Hz |
| More width | Enable stereo width processing |

### Troubleshooting
| Problem | Solution |
|---------|----------|
| Harsh highs | Reduce osc2 mix to 35% |
| Too dark | Increase filter cutoff by 300Hz |
| Weak projection | Increase filter drive to 8% |
| Clicking attacks | Increase envelope attack to 40ms |
| Monophonic feel | Increase LFO pan to 25% |

---

## EDM Supersaw Lead

### Sound Profile
Massive, stadium-filling lead with wide stereo width and powerful presence.

### Recommended Preset
`genre/05-supersaw-hero.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 90% | Core |
| Oscillator 2 | Saw, 0 octave, 90% | Width |
| Oscillator 3 | Saw, +1 octave, 70% | Harmonics |
| Filter | Lowpass, 4000Hz, Resonance 50 | Power |
| Filter Drive | 20% | Saturation |
| Envelope | A:20, D:250, S:60, R:400 | Presence |
| LFO | Saw-up, 0.5Hz, 40% to Filter | Movement |

### Genre Variations
- **Big Room:** Higher resonance (55%), longer release (500ms)
- **Progressive House:** Softer attack (30ms), moderate resonance (45%)
- **Future Bass:** Add filter LFO movement, stereo width 120%

### Chain Processing
`\`\`
Kepler → Soft Clipper
  - Input reduction: 3dB
  → Fruity Limiter
  - Ceiling: -0.3dB
  - Gain: 6dB
  → Stereo Delay
  - Time: 300ms
  - Feedback: 40%
  - Mix: 25%
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More massive | Enable all 3 oscillators at 100% |
| Tighter mix | Reduce osc3 to 60% |
| More movement | Increase LFO rate to 0.8Hz |
| More aggressive | Increase resonance to 55% |
| Smoother | Reduce filter drive to 15% |

### Safety Notes
- Use high-pass filter at 200Hz when layered with bass
- Monitor for phase cancellation when summing to mono
- Reduce polyphony if CPU becomes an issue

---

## Trap Pluck Lead

### Sound Profile
Punchy, rhythmic lead with percussive character for trap melodies and hi-hat patterns.

### Recommended Preset
`genre/07-glitch-pluck.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Square, +1 octave, 100% | Click |
| Oscillator 2 | Saw, 0 octave, 70% | Body |
| Filter | Lowpass, 3000Hz, Resonance 45 | Snap |
| Filter Drive | 10% | Edge |
| Envelope | A:1, D:80, S:0, R:50 | Percussive |
| LFO | Sample-hold, 4Hz, 50% to Pitch | Glitch |

### Genre Variations
- **Melodic Trap:** Slower LFO (2Hz), less modulation (25%)
- **Aggressive Trap:** Increase filter resonance (52%), faster decay (60ms)
- **Ethereal Trap:** Reduce LFO modulation (20%), longer release (80ms)

### Chain Processing
`\`\`
Kepler → Teq4
  - High-pass at 500Hz
  → Fruity Reverb 2
  - Type: Plate
  - Decay: 1.2s
  - Mix: 18%
  → Bitcrusher
  - Bit depth: 8-bit
  - Wet: 50%
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| Less glitchy | Reduce LFO modulation to 25% |
| More plucky | Reduce envelope decay to 60ms |
| More body | Increase osc2 mix to 80% |
| More click | Increase osc1 to 100% |

---

## Ambient Pad

### Sound Profile
Ethereal, evolving soundscape with deep stereo width and atmospheric depth.

### Recommended Preset
`genre/10-ethereal-wash.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, -1 octave, 100% | Foundation |
| Oscillator 2 | Triangle, -1 octave, 70% | Body |
| Oscillator 3 | Saw, 0 octave, 40% | Air |
| Filter | Lowpass, 2500Hz, Resonance 25 | Softness |
| Filter Drive | 5% | Gentle warmth |
| Envelope | A:500, D:800, S:85, R:1500 | Slow evolution |
| LFO | Sine, 0.15Hz, 30% to Pan | Movement |

### Genre Variations
- **Cinematic:** Longer attack (800ms), longer release (2000ms)
- **Chillout:** Slower LFO (0.1Hz), reduced stereo width
- **Space Ambient:** Increase LFO pan to 45%, add reverb

### Chain Processing
`\`\`
Kepler → Vintage Chorus
  - Mix: 50%
  - Rate: 0.3Hz
  → Fruity Reverb 2
  - Type: Cathedral
  - Decay: 6s
  - Mix: 30%
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More width | Enable chorus processing |
| More warmth | Increase filter drive to 8% |
| More movement | Increase LFO rate to 0.25Hz |
| Smoother | Reduce oscillator3 mix to 30% |

### Troubleshooting
| Problem | Solution |
|---------|----------|
| Phasing | Reduce LFO pan to 15% |
| Too bright | Reduce filter cutoff to 2000Hz |
| Too dark | Increase filter cutoff to 3000Hz |
| Too busy | Reduce LFO rate to 0.1Hz |

---

## Lead Workflow Summary

### By Genre
| Genre | Preset | Chain Priority |
|-------|--------|----------------|
| R&B | Silk Lead | Reverb first |
| EDM | Supersaw Hero | Limiter + Delay |
| Trap | Glitch Pluck | Bitcrusher + Reverb |
| Ambient | Ethereal Wash | Chorus + Reverb |
| Lo-Fi | Dusty Texture | Phaser + Saturation |

### By Role
| Role | Recommended Settings |
|------|---------------------|
| Main hook | Supersaw Hero, +3dB at 3kHz |
| Countermelody | Silk Lead, lower octave |
| Textural layer | Ethereal Wash, low volume |
| Rhythmic accent | Glitch Pluck, short notes |
| Vocal support | Silk Lead, filtered mids |

### Quick Genre Translation
| From → To | Adjustment |
|-----------|------------|
| R&B → EDM | Add oscillator3, increase resonance |
| EDM → R&B | Remove oscillator3, reduce resonance |
| Trap → Ambient | Slow envelope, add LFO pan |
| Ambient → Trap | Shorten envelope, add pitch LFO |

```

---

## FILE: 03-Workflows\by-instrument\02-mid-range-bass.md

```markdown
# Mid-Range Bass Workflow

## Sound Profile
Funky, present bass for R&B and melodic hip-hop with harmonic richness.

## Recommended Preset
`genre/04-punchy-foundation.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -1 octave, 80% | Body |
| Oscillator 2 | Square, -2 octave, 40% | Clarity |
| Filter | Lowpass, 800Hz, Resonance 35 | Character |
| Filter Drive | 12% | Saturation |
| Envelope | A:3, D:120, S:65, R:150 | Groove |
| LFO | Sine, 0.8Hz, 25% to Filter | Rhythm |

## Genre Variations
- **R&B:** Softer resonance (25%), slower LFO (0.4Hz)
- **Funky:** Faster LFO (1Hz), higher resonance (40%)
- **Melodic:** Slower attack (15ms), longer release (200ms)

## Chain Processing
`\`\`
Kepler → Fruity Parametric EQ 2
  - High-pass at 40Hz
  - Bell +2dB at 400Hz
  - Cut at 150Hz
  → Fruily Compressor
  - Attack: 15ms
  - Release: 90ms
  - Ratio: 2.5:1
  - Makeup: Auto
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More funk | Increase LFO rate to 1.2Hz |
| Smoother tone | Reduce resonance to 25% |
| More presence | Increase osc2 mix to 55% |
| More warmth | Reduce filter cutoff to 600Hz |
| More attack | Decrease envelope decay to 80ms |

## A/B Testing Checklist
- [ ] Resonance at 35% vs 25%
- [ ] LFO on vs LFO off
- [ ] Osc2 at 40% vs 55%
- [ ] Filter drive at 12% vs 18%

```

---

## FILE: 03-Workflows\by-instrument\03-drill-sub.md

```markdown
# Drill Sub Workflow

## Sound Profile
Heavy, menacing sub with extreme low-end presence for drill productions.

## Recommended Preset
`genre/09-reaper-sub.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 90% | Weight |
| Oscillator 2 | Saw, -2 octave, 90% | Thickness |
| Filter | Lowpass, 120Hz, Resonance 30 | Darkness |
| Filter Drive | 20% | Distortion |
| Envelope | A:8, D:250, S:70, R:180 | Sustain |
| LFO | Square, 0.4Hz, 15% to Pitch | Dissonance |

## Genre Variations
- **UK Drill:** Faster LFO (0.6Hz), higher resonance (38%)
- **American Drill:** Static pitch, lower resonance (25%)
- **Dark Trap:** Subtle LFO (0.2Hz), moderate drive (15%)

## Chain Processing
`\`\`
Kepler → Fruily Parametric EQ 2
  - High-pass at 25Hz
  → Fruily Limiter
  - Threshold: -12dB
  - Ratio: 6:1
  - Attack: 0.5ms
  - Release: 30ms
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More menacing | Increase pitch LFO to 20% |
| Heavier | Increase filter drive to 28% |
| Cleaner | Reduce osc2 mix to 70% |
| More movement | Increase LFO rate to 0.6Hz |

## Safety Notes
- Monitor for unwanted distortion at high filter drive
- Use high-pass filters on all other channels
- Check mono compatibility before mixing

```

---

## FILE: 03-Workflows\by-instrument\03-pad-fx-workflows.md

```markdown
# Kepler Pad & FX Workflows

## Lo-Fi Dusty Pad

### Sound Profile
Warm, nostalgic texture with degraded character reminiscent of old VHS tapes and worn cassettes.

### Recommended Preset
`genre/08-dusty-texture.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -1 octave, 75% | Body |
| Oscillator 2 | Triangle, -2 octave, 60% | Warmth |
| Filter | Lowpass, 1500Hz, Resonance 20 | Muffled |
| Filter Drive | 8% | Saturation |
| Envelope | A:150, D:500, S:75, R:800 | Slow movement |
| LFO | Sine, 0.1Hz, 20% to Filter | Gentle drift |

### Genre Variations
- **Chillhop:** Faster LFO (0.2Hz), reduced detune
- **Boom Bap:** Reduced stereo width, increased warmth
- **Jazz Hop:** Softer attack (200ms), longer release

### Chain Processing
`\`\`
Kepler → Vintage Phaser
  - Stages: 4
  - Rate: 0.3Hz
  - Mix: 40%
  → Fruity Reverb 2
  - Type: Room
  - Decay: 3s
  - Mix: 25%
  → Tape Saturation
  - Drive: 3%
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More degraded | Increase LFO to 30% |
| Cleaner sound | Reduce LFO to 10% |
| More warmth | Increase filter drive to 12% |
| More movement | Increase LFO rate to 0.15Hz |

---

## Metallic Texture

### Sound Profile
Industrial, edgy texture with dissonant harmonics for aggressive or experimental productions.

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 85% | Edge |
| Oscillator 2 | Square, +1 octave, 70% | Dissonance |
| Filter | Bandpass, 2000Hz, Resonance 50 | Focus |
| Filter Drive | 15% | Grind |
| Envelope | A:10, D:300, S:60, R:400 | Sustain |
| LFO | Square, 2Hz, 40% to Pitch | Mechanical |

### Chain Processing
`\`\`
Kepler → Fruity Distancer
  - Drive: 25%
  → Fruity Reverb 2
  - Type: Gated
  - Decay: 1.5s
  - Mix: 35%
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More industrial | Increase LFO rate to 4Hz |
| Less harsh | Reduce bandpass resonance to 35% |
| More abrasive | Increase filter drive to 20% |
| More rhythmic | Sync LFO to tempo (1/4 notes) |

---

## Risers

### Sound Profile
Tension-building elements for transitions, builds, and pre-drop energy.

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, +1 octave, 90% | Brightness |
| Oscillator 2 | Saw, +1 octave, 85% | Thickness |
| Filter | Lowpass, sweep 0→5000Hz | Building energy |
| Filter Drive | 10% | Saturation |
| Envelope | A:100, D:500, S:80, R:200 | Slow attack |
| LFO | None or Sine, 0.5Hz to Filter | Movement |

### Automation Sequence
1. Start: Filter cutoff at 0Hz
2. Bar 1: Filter to 500Hz
3. Bar 2: Filter to 1500Hz
4. Bar 3: Filter to 3000Hz
5. Bar 4: Filter to 5000Hz
6. Drop: Filter to 500Hz

### Chain Processing
`\`\`
Kepler → White Noise Layer (mix 50%)
  → Fruity Limiter
  - Ceiling: -0.5dB
  - Attack: 0.5ms
`\`\`

---

## Downlifters

### Sound Profile
Dark, tension-releasing elements for breakdowns and post-drop sections.

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 100% | Low rumble |
| Oscillator 2 | Square, -1 octave, 60% | Dissonance |
| Filter | Lowpass, sweep 5000→100Hz | Closing down |
| Filter Drive | 18% | Distortion |
| Envelope | A:5, D:100, S:50, R:150 | Fast action |
| LFO | None | Static |

### Automation Sequence
1. Start: Filter cutoff at 5000Hz
2. Bar 1: Filter to 2000Hz
3. Bar 2: Filter to 500Hz
4. End: Filter to 100Hz

### Chain Processing
`\`\`
Kepler → Fruity Distancer
  - Drive: 30%
  → Fruity Delay
  - Time: 250ms
  - Feedback: 60%
`\`\`

---

## Brass Stabs

### Sound Profile
 Punchy, aggressive stabs for rhythmic emphasis and impact moments.

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 95% | Core |
| Oscillator 2 | Square, -1 octave, 50% | Click |
| Filter | Lowpass, 3500Hz, Resonance 40 | Bold |
| Filter Drive | 12% | Edge |
| Envelope | A:1, D:50, S:0, R:30 | Short |
| LFO | None | Static |

### Chain Processing
`\`\`
Kepler → Fruity Parametric EQ 2
  - Bell +4dB at 3kHz
  → Fruity Compressor
  - Attack: 1ms
  - Release: 50ms
  - Ratio: 4:1
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More aggressive | Increase resonance to 50% |
| More retro | Replace osc2 with triangle |
| More modern | Add slight bitcrusher |

---

## Keys Electric

### Sound Profile
Clean, electric piano-style sound with crisp attack and smooth sustain.

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, 0 octave, 90% | Core |
| Oscillator 2 | Triangle, 0 octave, 60% | Body |
| Filter | Lowpass, 4000Hz, Resonance 15 | Clarity |
| Filter Drive | 3% | Subtle warmth |
| Envelope | A:5, D:200, S:80, R:250 | Piano-like |
| LFO | Sine, 0.5Hz, 8% to Pitch | Vibrato |

### Chain Processing
`\`\`
Kepler → Fruity Reverb 2
  - Type: Studio
  - Decay: 1.2s
  - Mix: 15%
  → Fruity Compressor
  - Attack: 10ms
  - Release: 100ms
  - Ratio: 2:1
`\`\`

---

## FX Workflow Summary

### By Purpose
| FX Type | Preset Base | Key Settings |
|---------|-------------|--------------|
| Riser | Custom | Sweeping filter, 4-bar automation |
| Dwnlifter | Custom | Closing filter, fast release |
| Texture | Dusty Texture | LFO modulation, tape saturation |
| Impact | Brass Stabs | Short envelope, high resonance |
| Transition | Metallic | Square LFO, high drive |

### By Genre
| Genre | Recommended FX |
|-------|----------------|
| Trap | 1-bar risers, glitch textures |
| EDM | 4-bar risers, impactful impacts |
| R&B | Subtle transitions, smooth swells |
| Lo-Fi | VHS warble, tape degradation |
| Ambient | Long evolutions, gentle pads |

### Troubleshooting FX
| Problem | Solution |
|---------|----------|
| Riser too abrupt | Lengthen automation to 8 bars |
| Impact lacking punch | Increase filter resonance |
| FX masking lead | High-pass FX at 200Hz |
| FX too dry | Add reverb or delay |
| FX too wet | Reduce mix, increase dry signal |

```

---

## FILE: 03-Workflows\by-instrument\04-rnb-lead.md

```markdown
# R&B Smooth Lead Workflow

## Sound Profile
Warm, emotional lead with smooth attack and silky sustain for R&B vocal-inspired melodies.

## Recommended Preset
`genre/03-silk-lead.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, 0 octave, 100% | Core tone |
| Oscillator 2 | Triangle, 0 octave, 50% | Harmonics |
| Filter | Lowpass, 2200Hz, Resonance 15 | Softness |
| Filter Drive | 5% | Subtle warmth |
| Envelope | A:50, D:400, S:70, R:300 | Smooth entry/exit |
| LFO | Sine, 0.25Hz, 15% to Pan | Subtle movement |

## Genre Variations
- **Neo-Soul:** Increase resonance to 20%, add slight vibrato
- **Contemporary R&B:** Faster attack (30ms), brighter filter (2800Hz)
- **90s R&B:** Triangle wave at 70%, lower filter (1800Hz)

## Chain Processing
`\`\`
Kepler → Soft Clipper
  - Input reduction: 2dB
  → Fruily Reverb 2
  - Type: Hall
  - Decay: 2.5s
  - Pre-delay: 30ms
  - Mix: 20%
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More presence | Increase osc2 mix to 65% |
| Warmer tone | Reduce filter cutoff to 1800Hz |
| Brighter tone | Increase filter cutoff to 3000Hz |
| More movement | Increase LFO rate to 0.4Hz |
| More width | Enable stereo width processing |

## Troubleshooting
| Problem | Solution |
|---------|----------|
| Harsh highs | Reduce osc2 mix to 35% |
| Too dark | Increase filter cutoff by 300Hz |
| Weak projection | Increase filter drive to 8% |
| Clicking attacks | Increase envelope attack to 40ms |
| Monophonic feel | Increase LFO pan to 25% |

```

---

## FILE: 03-Workflows\by-instrument\05-edm-supersaw.md

```markdown
# EDM Supersaw Lead Workflow

## Sound Profile
Massive, stadium-filling lead with wide stereo width and powerful presence.

## Recommended Preset
`genre/05-supersaw-hero.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 90% | Core |
| Oscillator 2 | Saw, 0 octave, 90% | Width |
| Oscillator 3 | Saw, +1 octave, 70% | Harmonics |
| Filter | Lowpass, 4000Hz, Resonance 50 | Power |
| Filter Drive | 20% | Saturation |
| Envelope | A:20, D:250, S:60, R:400 | Presence |
| LFO | Saw-up, 0.5Hz, 40% to Filter | Movement |

## Genre Variations
- **Big Room:** Higher resonance (55%), longer release (500ms)
- **Progressive House:** Softer attack (30ms), moderate resonance (45%)
- **Future Bass:** Add filter LFO movement, stereo width 120%

## Chain Processing
`\`\`
Kepler → Soft Clipper
  - Input reduction: 3dB
  → Fruily Limiter
  - Ceiling: -0.3dB
  - Gain: 6dB
  → Stereo Delay
  - Time: 300ms
  - Feedback: 40%
  - Mix: 25%
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More massive | Enable all 3 oscillators at 100% |
| Tighter mix | Reduce osc3 to 60% |
| More movement | Increase LFO rate to 0.8Hz |
| More aggressive | Increase resonance to 55% |
| Smoother | Reduce filter drive to 15% |

## Safety Notes
- Use high-pass filter at 200Hz when layered with bass
- Monitor for phase cancellation when summing to mono
- Reduce polyphony if CPU becomes an issue

```

---

## FILE: 03-Workflows\by-instrument\06-trap-pluck.md

```markdown
# Trap Pluck Workflow

## Sound Profile
Punchy, rhythmic lead with percussive character for trap melodies and hi-hat patterns.

## Recommended Preset
`genre/07-glitch-pluck.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Square, +1 octave, 100% | Click |
| Oscillator 2 | Saw, 0 octave, 70% | Body |
| Filter | Lowpass, 3000Hz, Resonance 45 | Snap |
| Filter Drive | 10% | Edge |
| Envelope | A:1, D:80, S:0, R:50 | Percussive |
| LFO | Sample-hold, 4Hz, 50% to Pitch | Glitch |

## Genre Variations
- **Melodic Trap:** Slower LFO (2Hz), less modulation (25%)
- **Aggressive Trap:** Increase filter resonance (52%), faster decay (60ms)
- **Ethereal Trap:** Reduce LFO modulation (20%), longer release (80ms)

## Chain Processing
`\`\`
Kepler → Teq4
  - High-pass at 500Hz
  → Fruily Reverb 2
  - Type: Plate
  - Decay: 1.2s
  - Mix: 18%
  → Bitcrusher
  - Bit depth: 8-bit
  - Wet: 50%
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| Less glitchy | Reduce LFO modulation to 25% |
| More plucky | Reduce envelope decay to 60ms |
| More body | Increase osc2 mix to 80% |
| More click | Increase osc1 to 100% |

```

---

## FILE: 03-Workflows\by-instrument\07-ambient-pad.md

```markdown
# Ambient Pad Workflow

## Sound Profile
Ethereal, evolving soundscape with deep stereo width and atmospheric depth.

## Recommended Preset
`genre/10-ethereal-wash.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, -1 octave, 100% | Foundation |
| Oscillator 2 | Triangle, -1 octave, 70% | Body |
| Oscillator 3 | Saw, 0 octave, 40% | Air |
| Filter | Lowpass, 2500Hz, Resonance 25 | Softness |
| Filter Drive | 5% | Gentle warmth |
| Envelope | A:500, D:800, S:85, R:1500 | Slow evolution |
| LFO | Sine, 0.15Hz, 30% to Pan | Movement |

## Genre Variations
- **Cinematic:** Longer attack (800ms), longer release (2000ms)
- **Chillout:** Slower LFO (0.1Hz), reduced stereo width
- **Space Ambient:** Increase LFO pan to 45%, add reverb

## Chain Processing
`\`\`
Kepler → Vintage Chorus
  - Mix: 50%
  - Rate: 0.3Hz
  → Fruily Reverb 2
  - Type: Cathedral
  - Decay: 6s
  - Mix: 30%
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More width | Enable chorus processing |
| More warmth | Increase filter drive to 8% |
| More movement | Increase LFO rate to 0.25Hz |
| Smoother | Reduce oscillator3 mix to 30% |

## Troubleshooting
| Problem | Solution |
|---------|----------|
| Phasing | Reduce LFO pan to 15% |
| Too bright | Reduce filter cutoff to 2000Hz |
| Too dark | Increase filter cutoff to 3000Hz |
| Too busy | Reduce LFO rate to 0.1Hz |

```

---

## FILE: 03-Workflows\by-instrument\08-lofi-dusty.md

```markdown
# Lo-Fi Dusty Pad Workflow

## Sound Profile
Warm, nostalgic texture with degraded character reminiscent of old VHS tapes and worn cassettes.

## Recommended Preset
`genre/08-dusty-texture.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -1 octave, 75% | Body |
| Oscillator 2 | Triangle, -2 octave, 60% | Warmth |
| Filter | Lowpass, 1500Hz, Resonance 20 | Muffled |
| Filter Drive | 8% | Saturation |
| Envelope | A:150, D:500, S:75, R:800 | Slow movement |
| LFO | Sine, 0.1Hz, 20% to Filter | Gentle drift |

## Genre Variations
- **Chillhop:** Faster LFO (0.2Hz), reduced detune
- **Boom Bap:** Reduced stereo width, increased warmth
- **Jazz Hop:** Softer attack (200ms), longer release

## Chain Processing
`\`\`
Kepler → Vintage Phaser
  - Stages: 4
  - Rate: 0.3Hz
  - Mix: 40%
  → Fruily Reverb 2
  - Type: Room
  - Decay: 3s
  - Mix: 25%
  → Tape Saturation
  - Drive: 3%
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More degraded | Increase LFO to 30% |
| Cleaner sound | Reduce LFO to 10% |
| More warmth | Increase filter drive to 12% |
| More movement | Increase LFO rate to 0.15Hz |

```

---

## FILE: 03-Workflows\by-instrument\09-riser.md

```markdown
# Riser Workflow

## Sound Profile
Tension-building elements for transitions, builds, and pre-drop energy.

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, +1 octave, 90% | Brightness |
| Oscillator 2 | Saw, +1 octave, 85% | Thickness |
| Filter | Lowpass, sweep 0→5000Hz | Building energy |
| Filter Drive | 10% | Saturation |
| Envelope | A:100, D:500, S:80, R:200 | Slow attack |
| LFO | None or Sine, 0.5Hz to Filter | Movement |

## Automation Sequence
1. Start: Filter cutoff at 0Hz
2. Bar 1: Filter to 500Hz
3. Bar 2: Filter to 1500Hz
4. Bar 3: Filter to 3000Hz
5. Bar 4: Filter to 5000Hz
6. Drop: Filter to 500Hz

## Chain Processing
`\`\`
Kepler → White Noise Layer (mix 50%)
  → Fruily Limiter
  - Ceiling: -0.5dB
  - Attack: 0.5ms
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More tension | Increase max shift to 1000Hz |
| Smoother build | Lengthen automation to 8 bars |
| More aggressive | Increase drive to 15% |
| Cleaner | Set feedback to 0% |

## By Genre
| Genre | Build Length | Automation |
|-------|--------------|------------|
| Trap | 2 bar | Filter sweep |
| EDM | 4 bar | Full automation |
| Hip-Hop | 1 bar | Simple sweep |
| R&B | 2 bar | Gentle sweep |

```

---

## FILE: 03-Workflows\by-instrument\10-downlifter.md

```markdown
# Downlifter Workflow

## Sound Profile
Dark, tension-releasing elements for breakdowns and post-drop sections.

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, -2 octave, 100% | Low rumble |
| Oscillator 2 | Square, -1 octave, 60% | Dissonance |
| Filter | Lowpass, sweep 5000→100Hz | Closing down |
| Filter Drive | 18% | Distortion |
| Envelope | A:5, D:100, S:50, R:150 | Fast action |
| LFO | None | Static |

## Automation Sequence
1. Start: Filter cutoff at 5000Hz
2. Bar 1: Filter to 2000Hz
3. Bar 2: Filter to 500Hz
4. End: Filter to 100Hz

## Chain Processing
`\`\`
Kepler → Fruily Distancer
  - Drive: 30%
  → Fruily Delay
  - Time: 250ms
  - Feedback: 60%
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More tension | Slow the automation |
| More release | Speed up the automation |
| Darker | Reduce starting cutoff |
| More impact | Increase filter drive |

```

---

## FILE: 03-Workflows\by-instrument\11-brass-stabs.md

```markdown
# Brass Stabs Workflow

## Sound Profile
Punchy, aggressive stabs for rhythmic emphasis and impact moments.

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 95% | Core |
| Oscillator 2 | Square, -1 octave, 50% | Click |
| Filter | Lowpass, 3500Hz, Resonance 40 | Bold |
| Filter Drive | 12% | Edge |
| Envelope | A:1, D:50, S:0, R:30 | Short |
| LFO | None | Static |

## Chain Processing
`\`\`
Kepler → Fruily Parametric EQ 2
  - Bell +4dB at 3kHz
  → Fruily Compressor
  - Attack: 1ms
  - Release: 50ms
  - Ratio: 4:1
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More aggressive | Increase resonance to 50% |
| More retro | Replace osc2 with triangle |
| More modern | Add slight bitcrusher |
| Longer sustain | Increase release to 50ms |

```

---

## FILE: 03-Workflows\by-instrument\12-metallic-texture.md

```markdown
# Metallic Texture Workflow

## Sound Profile
Industrial, edgy texture with dissonant harmonics for aggressive or experimental productions.

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Saw, 0 octave, 85% | Edge |
| Oscillator 2 | Square, +1 octave, 70% | Dissonance |
| Filter | Bandpass, 2000Hz, Resonance 50 | Focus |
| Filter Drive | 15% | Grind |
| Envelope | A:10, D:300, S:60, R:400 | Sustain |
| LFO | Square, 2Hz, 40% to Pitch | Mechanical |

## Chain Processing
`\`\`
Kepler → Fruily Distancer
  - Drive: 25%
  → Fruily Reverb 2
  - Type: Gated
  - Decay: 1.5s
  - Mix: 35%
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More industrial | Increase LFO rate to 4Hz |
| Less harsh | Reduce bandpass resonance to 35% |
| More abrasive | Increase filter drive to 20% |
| More rhythmic | Sync LFO to tempo (1/4 notes) |

```

---

## FILE: 03-Workflows\by-instrument\13-keys-electric.md

```markdown
# Keys Electric Workflow

## Sound Profile
Clean, electric piano-style sound with crisp attack and smooth sustain.

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator 1 | Sine, 0 octave, 90% | Core |
| Oscillator 2 | Triangle, 0 octave, 60% | Body |
| Filter | Lowpass, 4000Hz, Resonance 15 | Clarity |
| Filter Drive | 3% | Subtle warmth |
| Envelope | A:5, D:200, S:80, R:250 | Piano-like |
| LFO | Sine, 0.5Hz, 8% to Pitch | Vibrato |

## Chain Processing
`\`\`
Kepler → Fruily Reverb 2
  - Type: Studio
  - Decay: 1.2s
  - Mix: 15%
  → Fruily Compressor
  - Attack: 10ms
  - Release: 100ms
  - Ratio: 2:1
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More electric | Increase filter drive to 5% |
| More mellow | Reduce filter cutoff to 3500Hz |
| More crisp | Increase filter cutoff to 4500Hz |
| Less vibrato | Reduce LFO to 4% |

```

---

## FILE: 03-Workflows\by-instrument\INDEX.md

```markdown
# Kepler By-Instrument Workflows Index

## Bass Workflows
| File | Name | Genre | Key Feature |
|------|------|-------|-------------|
| `01-808-sub-bass.md` | 808 Sub Bass | Trap/Hip-Hop | Deep punch |
| `02-mid-range-bass.md` | Mid-Range Bass | R&B | Funky groove |
| `03-drill-sub.md` | Drill Sub | Drill | Dark weight |

## Lead Workflows
| File | Name | Genre | Key Feature |
|------|------|-------|-------------|
| `04-rnb-lead.md` | R&B Smooth Lead | R&B | Warm emotion |
| `05-edm-supersaw.md` | EDM Supersaw Lead | EDM | Stadium width |
| `06-trap-pluck.md` | Trap Pluck | Trap | Percussive rhythm |
| `07-ambient-pad.md` | Ambient Pad | Ambient | Ethereal wash |

## Pad & FX Workflows
| File | Name | Genre | Key Feature |
|------|------|-------|-------------|
| `08-lofi-dusty.md` | Lo-Fi Dusty | Lo-Fi | VHS warmth |
| `09-riser.md` | Riser | All | Build tension |
| `10-downlifter.md` | Downlifter | All | Release tension |
| `11-brass-stabs.md` | Brass Stabs | All | Punchy accents |
| `12-metallic-texture.md` | Metallic Texture | Experimental | Industrial edge |
| `13-keys-electric.md` | Keys Electric | R&B/EDM | Clean tone |

## Summary by Genre
| Genre | Bass | Lead | FX/Pad |
|-------|------|------|--------|
| Trap | 808 Sub, Drill Sub | Trap Pluck | Riser, Metallic |
| R&B | Mid-Range | R&B Lead | Keys Electric |
| EDM | - | EDM Supersaw | Riser, Downlifter |
| Lo-Fi | - | - | Lo-Fi Dusty |
| Drill | Drill Sub | - | Downlifter |
| Ambient | - | Ambient Pad | Ambient Pad |
| Experimental | - | - | Metallic |

## Quick Reference
- **For punchy bass:** Start with `01-808-sub-bass.md`
- **For melodic leads:** Start with `05-edm-supersaw.md`
- **For textures:** Start with `08-lofi-dusty.md`
- **For transitions:** Start with `09-riser.md` or `10-downlifter.md`

```

---

## FILE: 03-Workflows\by-instrument\instrument-workflows.md

```markdown
Tags: hip-hop/rap | R&B | electric

## Kepler Instrument Workflows

### Hip-Hop Sub Bass

**Sound Goal:** Deep, focused 808 foundation

**Settings:**
- Osc1: Sine, octave -2
- Osc2: Sine, octave -1, detune 0
- Mix: Osc1 70%, Osc2 30%
- Filter: Low-pass, Cutoff 25%, Resonance 25%
- Filter Env: Attack 5ms, Decay 150ms, Sustain 60%, Release 50ms
- Amp Env: Attack 5ms, Decay 100ms, Sustain 80%, Release 30ms

**A/B Test:**
1. Play bass pattern
2. Toggle filter resonance between 20% and 40%
3. Listen: "Is it focused or harsh?"
4. Adjust: Increase/decrease resonance

**Quick Fix Path:**
- Too muddy → Cutoff to 22%
- Too thin → Detune slightly (2-3 cents)
- No punch → Increase sustain to 90%

### R&B Smooth Lead

**Sound Goal:** Warm, melodic lead for hooks

**Settings:**
- Osc1: Saw, octave 0
- Osc2: Square, octave 0, detune 5
- Mix: 60% Osc1, 40% Osc2
- Filter: Low-pass, Cutoff 65%, Resonance 20%
- Filter Env: Attack 15ms, Decay 200ms, Sustain 70%, Release 150ms
- Amp Env: Attack 20ms, Decay 150ms, Sustain 70%, Release 200ms
- Chorus: Depth 40%, Rate 0.3Hz

**Why This Works:**
- Saw provides presence
- Square adds warmth
- Gentle filtering maintains character
- Chorus adds width without harshness

### Electric Piano Sound

**Sound Goal:** Vintage electric piano

**Settings:**
- Osc1: Triangle, octave 0
- Osc2: Triangle, octave 1, detune 3
- Mix: 70% Osc1, 30% Osc2
- Filter: Low-pass, Cutoff 75%, Resonance 15%
- Filter Env: Attack 10ms, Decay 100ms, Sustain 85%, Release 250ms
- Amp Env: Attack 10ms, Decay 50ms, Sustain 90%, Release 150ms
- Chorus: Depth 50%

**Quick Tweaks:**
- For brighter → Cutoff to 80%
- For warmer → Cutoff to 70%
- For more body → Increase resonance to 20%

### Trap Supsaw Lead

**Sound Goal:** Wide, aggressive lead

**Settings:**
- Osc1: Saw, octave 0, detune 0
- Osc2: Saw, octave 0, detune 10
- Osc3: Saw, octave 0, detune -10
- Mix: Equal levels
- Filter: Low-pass, Cutoff 60%, Resonance 35%
- Filter Env: Attack 2ms, Decay 250ms, Sustain 75%, Release 100ms
- Amp Env: Attack 5ms, Decay 200ms, Sustain 70%, Release 100ms

**Processing Chain:**
1. Kepler output
2. Fruity Limiter (soft clip)
3. Fruity Parametric EQ (tame highs)

### Atmospheric Pad

**Sound Goal:** Evolving, spacious pad

**Settings:**
- Osc1: Saw, octave 0, detune 5
- Osc2: Square, octave 0, detune -5
- Osc3: Sine, octave -1
- Mix: 40% Osc1, 30% Osc2, 30% Osc3
- Filter: Low-pass, Cutoff 70%, Resonance 20%
- Filter Env: Attack 500ms, Decay 800ms, Sustain 90%, Release 800ms
- LFO: To filter cutoff, Rate 0.1Hz, Depth 15%

**Creation Steps:**
1. Set slow attack for smooth entry
2. Add LFO for subtle movement
3. Layer sine for foundation
4. Use reverb for space

### Quick Reference Table

| Sound | OSCs | Waveforms | Cutoff | Res | Character |
|-------|------|-----------|--------|-----|-----------|
| Sub bass | 2 | Sine+Sine | 25% | 25% | Deep, focused |
| R&B lead | 2 | Saw+Square | 65% | 20% | Warm, melodic |
| Electric keys | 2 | Triangle | 75% | 15% | Vintage, smooth |
| Trap lead | 3 | Saw detuned | 60% | 35% | Wide, aggressive |
| Atmospheric pad | 3 | Mix | 70% | 20% | Evolving, wide |

```

---

## FILE: 04-Reference\chorus-mode-analysis.md

```markdown
# Technical Reference: Chorus Mode Analysis

Deciphering the legendary JUNO-style chorus in Kepler. [SRC: IL-MAN], [SRC: REPUTABLE]

## The Chorus Philosophy
The chorus in Kepler isn't just an effect; it's a stereo-generator designed to compensate for the single-oscillator architecture. It uses two LFO-modulated delay lines to create a wide, lush, and slightly detuned sound.

## Mode I: The "Subtle Drift"
- **Rate:** ~0.4 Hz (Slow).
- **Depth:** Moderate.
- **Character:** Gentle, organic, and widening.
- **Best For:** Pads that need to feel "stable," Basslines that need a bit of air, and subtle vocal-like synth leads.

## Mode II: The "Active Ensemble"
- **Rate:** ~0.6 Hz (Faster).
- **Depth:** Deeper.
- **Character:** Energetic, "wobbly," and significantly wider.
- **Best For:** Energetic Leads, Arpeggios, and "Super-JUNO" pads where you want the detuning to be an obvious feature.

## Mode I+II: The "Secret" Mono-Grit Mode
On the original hardware, pressing both buttons simultaneously created a unique effect. Kepler emulates this.
- **Rate:** A specific combination rate.
- **Depth:** High.
- **Character:** Much more aggressive, gritty, and noisy.
- **Best For:** Bass sounds that need to "growl," lo-fi textures, and industrial sound design.
- **Note:** This mode is significantly noisier by design, mimicking the DC-bias issues of the original hardware.

## Mix Integration Tips
1. **Mono Compatibility:** The JUNO chorus is famous for sounding great in stereo but potentially causing "thinning" in mono. Always check the Mono button in the FL Studio wrapper.
2. **Gain Staging:** The chorus can add significant peak volume. If your Kepler output is clipping, lower the **VCA Level** slider before trying to fix it with a limiter.
3. **External FX:** Sometimes, turning Kepler's chorus **OFF** and using **Hyper Chorus** instead allows for even more modern density (8 voices vs 2).

---
*For a quick guide on these settings, see the [01-Learning/Quick-Reference/parameter-cheat-sheet.md](../01-Learning/Quick-Reference/parameter-cheat-sheet.md).*

```

---

