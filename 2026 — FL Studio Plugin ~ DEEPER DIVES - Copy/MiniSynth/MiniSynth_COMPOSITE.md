# MiniSynth - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 00-START-HERE.md

```markdown
# MiniSynth: Start Here

Welcome to the **MiniSynth** Deeper Dive. MiniSynth is FL Studio's high-efficiency powerhouse, designed for low CPU usage and perfect cross-platform compatibility with FL Studio Mobile. Its simple interface hides a complex, multi-mode oscillator engine.

## 🗺️ Quick Navigation Guide

### 1. The Essentials (Start Here)
- **[README.md](./README.md):** The central hub for sound design goals and mobile specs.
- **[01-Learning/Quick-Reference/parameter-cheat-sheet.md](./01-Learning/Quick-Reference/parameter-cheat-sheet.md):** A 60-second map of the multi-mode tabs and the "Modifier" knob.
- **[01-Learning/Quick-Reference/minisynth-waveform-decoded.md](./01-Learning/Quick-Reference/minisynth-waveform-decoded.md):** What the Modifier knob actually does in every mode.

### 2. Core Concepts
- **[01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md](./01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md):** Understanding the 6-tab streamlined architecture.
- **[01-Learning/Concepts/03_Vibe_Translation_Guide.md](./01-Learning/Concepts/03_Vibe_Translation_Guide.md):** Dialing in Chiptune, Upbeat, and Moody patches.

### 3. Workflow Recipes
- **[03-Workflows/by-goal/deep-mobile-bass.md](./03-Workflows/by-goal/deep-mobile-bass.md):** Creating solid low-end for mobile-to-desktop projects.
- **[03-Workflows/by-goal/lush-trance-leads.md](./03-Workflows/by-goal/lush-trance-leads.md):** The SuperSaw setup for massive energetic leads.
- **[03-Workflows/by-goal/glitchy-lfo-effects.md](./03-Workflows/by-goal/glitchy-lfo-effects.md):** Using LFO Feedback for complex sound design.

## 🚀 Rapid Success Protocol
1. **Choose your Mode:** Cycle through the **Waveform** icons (Saw, SuperSaw, Bell, etc.).
2. **Turn the Modifier:** This knob is the secret! In SuperSaw it's Detune; in Pulse it's Width.
3. **Set the Filter:** Use the **Filter Tab** to set Cutoff, Res, and the all-important **Env** (Envelope Amount).
4. **Dial the FX:** Enable built-in **Chorus** or **Phaser** for instant width.
5. **Sync to Mobile:** Save your patch as a `.nmsynth` file to take your sound on the go.

---
*For technical specs and modifier mapping data, see the [02-Data/](./02-Data/) folder.*

```

---

## FILE: README.md

```markdown
# MiniSynth - High-Efficiency Synthesizer

`\`\`
███╗   ███╗██╗███╗   ██╗██╗███████╗██╗   ██╗███╗   ██╗████████╗██╗  ██╗
████╗ ████║██║████╗  ██║██║██╔════╝╚██╗ ██╔╝████╗  ██║╚══██╔══╝██║  ██║
██╔████╔██║██║██╔██╗ ██║██║███████╗ ╚████╔╝ ██╔██╗ ██║   ██║   ███████║
██║╚██╔╝██║██║██║╚██╗██║██║╚════██║  ╚██╔╝  ██║╚██╗██║   ██║   ██╔══██║
██║ ╚═╝ ██║██║██║ ╚████║██║███████║   ██║   ██║ ╚████║   ██║   ██║  ██║
╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝
`\`\`

**Plugin Type:** Subtractive Synthesizer
**Category:** Generator / Low-CPU / Mobile Compatible
**Official Manual:** [Image-Line MiniSynth Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/MiniSynth.htm)

---

## 🎯 What is MiniSynth?

MiniSynth is a versatile, high-efficiency synthesizer designed for low CPU overhead and mobile compatibility. It features an advanced multi-mode oscillator that changes its topology based on the selected waveform (e.g., SuperSaw mode enables 8 voices). With its simple 6-tab interface, it is perfect for both desktop production and FL Studio Mobile users, excelling at everything from deep bass to "chiptune" bells.

**Key Capabilities:**
- **Advanced Multi-mode Oscillator:** Dynamically reconfigures for Saw, Pulse, Bell, and SuperSaw.
- **Waveform Modifiers:** A single "Modifier" knob provides unique shaping per waveform (PWM, Detune, Pitch).
- **Integrated FX:** Built-in Delay, Chorus, Phaser, and Distortion.
- **Dual Envelopes:** Dedicated ADSR for both Amplitude and Filter.
- **LFO Modulation:** Built-in LFO for movement with feedback and width controls.
- **Cross-Platform:** Fully compatible with FL Studio Mobile patches.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **minisynth-waveform-library.md**
3. Create **parameter-cheat-sheet.md**
4. Select "SuperSaw" and adjust the "Modifier" knob to hear the detune spread.

### For Mobile Users:
1. Study **syncing-patches-mobile-to-desktop.md**
2. Review **touch-optimized-ui-workflows.md**

### For Sound Designers:
1. Study **creating-chiptune-leads.md**
2. Review **bell-synthesis-modifiers.md**
3. Learn **compact-fx-chain-optimization.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Waveform Selector:** The 8 core modes.
  - **Modifier Knob:** What it does in each mode.
  - **Filter:** Cutoff & Res.
  - **Envelopes:** Amp vs Filter tabs.
  - **LFO:** Rate, Width, Feedback.

- [ ] **minisynth-waveform-decoded.md**
  - **Saw:** Saw + Square (Modifier = PWM).
  - **Saw+Saw:** Dual Saw (Modifier = Pitch 2).
  - **SuperSaw:** 8 Saws (Modifier = Detune).
  - **Bell:** Spectral Saw (Modifier = Harmonics).

#### 02-Data/parameters/
- [ ] **minisynth-modifier-map.json**
  `\`\`json
  {
    "plugin_name": "MiniSynth",
    "waveform_modifiers": {
      "Saw": "Pulse Width",
      "Saw + Saw": "Osc 2 Pitch",
      "SuperSaw": "Detune Amount",
      "Bell": "Spectral Balance"
    }
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **deep-mobile-bass.md**
  - Selecting "Pulse" waveform.
  - Modifier at 50% (Square).
  - Low Filter Cutoff + High Resonance.
  - Enabling built-in Distortion.

- [ ] **lush-trance-leads.md**
  - SuperSaw mode.
  - High Detune (Modifier).
  - Built-in Chorus and Delay.

- [ ] **glitchy-lfo-effects.md**
  - Fast LFO Rate.
  - LFO Feedback increased.
  - Modulating Filter Cutoff.

#### 03-Workflows/by-context/
- [ ] **low-resource-project-templates.md**
- [ ] **game-audio-sfx-synthesis.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **lfo-feedback-mechanics.md**
  - How the LFO Feedback parameter adds complexity to the modulation shape.

---

## 🔬 Research Framework

### Phase 1: Waveform Logic (Week 1)
**Goal:** Understanding the Modifier

**Tasks:**
1. Cycle through all 8 waveforms
2. Record how the "Modifier" knob changes the sound for each
3. Identify which waveforms support 8 voices
4. Create minisynth-waveform-decoded.md

**Key Questions to Answer:**
- Does "Saw + Saw" allow for semitone tuning or just cents?
- What is "DeafSaw"?

### Phase 2: Built-in Processing (Week 2)
**Goal:** The All-in-One Chain

**Tasks:**
1. Test the internal Distortion character
2. Verify if the FX order is fixed (Chorus -> Phaser -> Delay?)
3. Create deep-mobile-bass.md

---

## 📊 Plugin Specifications to Document

### Engine
- Polyphony (Fixed? User adjustable?)
- CPU Footprint (Compare to Sytrus)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do I make it wider? (Use SuperSaw mode or the built-in Chorus).
2. Why is the filter not moving? (Check the Env amount in the Filter tab).

### Advanced Usage
1. How to share a patch with FL Studio Mobile? (Save as .nmsynth file?).

---

## 🔗 Cross-Reference with Other Plugins

MiniSynth is often used with:
- **Fruity Peak Controller** (External LFO source)
- **FL Studio Mobile** (The mobile version)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
MiniSynth/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── minisynth-waveform-decoded.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── minisynth-modifier-map.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── deep-mobile-bass.md
│   │   └── lush-trance-leads.md
│
└── 04-Reference/
    └── lfo-feedback-mechanics.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [MiniSynth Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/MiniSynth.htm)
- [MiniSynth Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/MiniSynth_tutorials.htm)
- [MiniSynth Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+minisynth+tutorial)

### Community Resources
- [MiniSynth Subreddit](https://www.reddit.com/r/FL_Studio/search?q=minisynth&restrict_sr=1)
- [MiniSynth User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [MiniSynth Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Subtractive Synthesis Fundamentals" - Understanding classic synthesis
- "Low-CPU Synthesis Techniques" - Efficient synthesis approaches
- "Mobile Music Production" - Cross-platform workflow optimization

### Advanced Techniques
- **Waveform Modifiers:** Understanding the modifier knob per waveform
- **Multi-Mode Oscillator:** Mastering the dynamic oscillator architecture
- **Cross-Platform Compatibility:** Optimizing for mobile/desktop workflows

---

## 📚 In-Depth Technical Analysis

### Multi-Mode Oscillator Architecture
MiniSynth implements a sophisticated multi-mode oscillator system:
- **Dynamic Topology:** Changes internal architecture based on waveform selection
- **8 Voice Modes:** Certain waveforms enable 8-voice unison processing
- **Waveform-Specific Processing:** Each waveform has unique internal processing
- **CPU Optimization:** Efficient processing for each mode
- **Real-time Switching:** Immediate response to waveform changes

### Waveform-Specific Processing
Each waveform mode implements different internal processing:

**Saw Mode:**
- **Processing:** Single sawtooth oscillator with PWM capability
- **Modifier Function:** Pulse width modulation for square-like characteristics
- **CPU Load:** Low CPU usage
- **Harmonic Content:** Rich harmonic content
- **Applications:** Bass, leads, and general synthesis

**Saw + Saw Mode:**
- **Processing:** Dual sawtooth oscillators with detune capability
- **Modifier Function:** Pitch detuning of second oscillator
- **CPU Load:** Moderate CPU usage
- **Harmonic Content:** Thickened harmonic content
- **Applications:** Thick leads and basses

**SuperSaw Mode:**
- **Processing:** 8 sawtooth oscillators with independent detuning
- **Modifier Function:** Detune amount for all 8 oscillators
- **CPU Load:** Higher CPU usage due to 8-voice processing
- **Harmonic Content:** Extremely rich, chorused harmonic content
- **Applications:** Classic trance leads and wide sounds

**Bell Mode:**
- **Processing:** Spectral sawtooth with harmonic emphasis
- **Modifier Function:** Spectral balance/shaping
- **CPU Load:** Moderate CPU usage
- **Harmonic Content:** Emphasized harmonics for bell-like tones
- **Applications:** Bell sounds, chimes, and metallic textures

### Signal Processing Chain
The internal architecture processes audio as follows:
- **Input Stage:** MIDI note and velocity processing
- **Oscillator Generation:** Multi-mode oscillator synthesis
- **Filter Processing:** Low-pass filter with resonance
- **Envelope Application:** Amplitude and filter envelope shaping
- **LFO Modulation:** Low-frequency modulation application
- **Internal FX:** Built-in effects processing
- **Output Stage:** Final signal routing and monitoring

### CPU Efficiency Architecture
MiniSynth is optimized for low CPU usage:
- **Streamlined Processing:** Minimal unnecessary processing
- **Efficient Algorithms:** Optimized for real-time performance
- **Mobile Compatibility:** Designed for mobile device performance
- **Resource Management:** Efficient voice allocation
- **Performance Optimization:** Maintains quality while conserving resources

### Cross-Platform Compatibility
The plugin maintains compatibility across platforms:
- **Parameter Mapping:** Consistent parameter behavior
- **Sound Quality:** Maintains sound quality across platforms
- **Feature Availability:** All features available on both platforms
- **File Format:** Compatible file format between platforms
- **Workflow Integration:** Consistent workflow across platforms

## 🎛️ Parameter Deep Dive

### Waveform Selection Controls
- **Function:** Changes oscillator architecture and processing
  - Range: 8 different waveform modes
  - Effect: Alters fundamental sound character and internal processing
  - Use for: Different synthesis approaches per sound
  - Pro tip: Each mode has unique modifier behavior
- **Behavior:**
  - Saw: Single oscillator with PWM capability
  - Saw + Saw: Dual oscillator with detune
  - SuperSaw: 8-oscillator unison with detune
  - Bell: Spectral oscillator with harmonic emphasis
  - Pro tip: Experiment with modifier in each mode
- **Applications:**
  - Bass sounds: Saw mode for classic bass tones
  - Thick leads: Saw + Saw for detuned thickness
  - Wide leads: SuperSaw for chorused width
  - Bell sounds: Bell mode for metallic textures
  - Pro tip: Match mode to desired sound character

### Modifier Knob Controls
- **Saw Mode:**
  - **Function:** Pulse Width Modulation
    - Range: Square to Sawtooth characteristics
    - Effect: Changes harmonic content from hollow to rich
    - Use for: Creating hollow to rich tonal variations
    - Pro tip: Low values create square-like sounds, high values maintain saw character
  - **Behavior:**
    - 0%: Square wave characteristics (odd harmonics only)
    - 50%: Balanced harmonic content
    - 100%: Sawtooth characteristics (rich harmonics)
    - Pro tip: Use for tonal variation in saw mode
  - **Applications:**
    - Reed sounds: Low values for hollow character
    - Saw sounds: High values for rich harmonics
    - PWM effects: Variable values for width modulation
    - Creative effects: Extreme values for unique textures
    - Pro tip: Use for tonal variation in saw mode

### Saw + Saw Mode Modifier
- **Function:** Pitch detuning of second oscillator
  - Range: 0 to significant detune (typically in cents)
  - Effect: Changes thickness and chorusing of the sound
  - Use for: Creating thick, detuned sounds
  - Pro tip: Higher values create more chorusing
- **Behavior:**
  - 0%: Perfectly in-tune dual oscillators
  - Low values: Subtle thickness addition
  - High values: Pronounced chorusing effect
  - Pro tip: Use for natural-sounding thickness
- **Applications:**
  - Subtle thickness: Low values for gentle thickening
  - Pronounced chorus: High values for obvious effect
  - Unison simulation: Medium values for unison effect
  - Creative detune: Extreme values for unique effects
  - Pro tip: Use for authentic analog thickness

### SuperSaw Mode Modifier
- **Function:** Detune amount for 8-voice unison
  - Range: 0 to maximum detune
  - Effect: Controls the spread and thickness of the 8 oscillators
  - Use for: Creating wide, chorused supersaw sounds
  - Pro tip: Essential for classic trance leads
- **Behavior:**
  - 0%: All 8 oscillators perfectly in-tune
  - Low values: Subtle 8-voice thickness
  - High values: Maximum 8-voice spread and width
  - Pro tip: Use for authentic supersaw character
- **Applications:**
  - Trance leads: High values for classic supersaw sound
  - Wide sounds: Medium to high values for width
  - Thickness: Variable values for different thickness levels
  - Creative effects: Extreme values for unique textures
  - Pro tip: Use for classic trance supersaw sounds

### Bell Mode Modifier
- **Function:** Spectral balance/shaping
  - Range: Variable harmonic emphasis
  - Effect: Changes harmonic content for bell-like characteristics
  - Use for: Creating bell and metallic sounds
  - Pro tip: Creates harmonic emphasis for metallic tones
- **Behavior:**
  - Low values: Emphasizes lower harmonics
  - High values: Emphasizes higher harmonics
  - Pro tip: Use for metallic and bell-like sounds
- **Applications:**
  - Bell sounds: Variable values for different bell characteristics
  - Metallic textures: High values for bright metallic sounds
  - Chime sounds: Medium values for chime-like tones
  - Creative effects: Extreme values for unique textures
  - Pro tip: Use for metallic and bell-like synthesis

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

### Envelope Controls
- **Amplitude Envelope:**
  - **Attack:** Time to reach full amplitude
    - Range: 0 to maximum time
    - Effect: Controls initial onset
    - Use for: Shaping note attack
    - Pro tip: Short attack for percussive sounds
  - **Decay:** Time to reach sustain level
    - Range: 0 to maximum time
    - Effect: Controls decay from peak to sustain
    - Use for: Shaping note decay
    - Pro tip: Use for natural envelope shapes
  - **Sustain:** Level maintained during note hold
    - Range: 0-100%
    - Effect: Controls level during note hold
    - Use for: Controlling sustained level
    - Pro tip: Use for dynamic expression
  - **Release:** Time to fade after note release
    - Range: 0 to maximum time
    - Effect: Controls fade time after note release
    - Use for: Shaping note ending
    - Pro tip: Longer release for smooth endings

### Filter Envelope
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

### LFO Controls
- **Function:** Low-frequency modulation for movement
  - **Rate:** Speed of modulation
    - Range: Slow to fast (typically 0.1Hz to 20Hz)
    - Effect: Controls speed of modulation
    - Use for: Setting rhythmic or smooth modulation
    - Pro tip: Sync to tempo for rhythmic effects
  - **Width:** Intensity of modulation
    - Range: 0-100% (typically)
    - Effect: Controls depth of modulation
    - Use for: Setting modulation intensity
    - Pro tip: Higher values create more modulation
  - **Feedback:** LFO self-modulation
    - Range: 0-100% (typically)
    - Effect: Adds complexity to LFO shape
    - Use for: Creating evolving modulation patterns
    - Pro tip: Creates organic, evolving modulation
- **Behavior:**
  - Rate: Controls modulation speed
  - Width: Controls modulation depth
  - Feedback: Adds complexity to modulation
  - Pro tip: Use for evolving, organic modulation
- **Applications:**
  - Vibrato: Rate and Width for pitch modulation
  - Tremolo: Rate and Width for amplitude modulation
  - Filter modulation: Rate and Width for cutoff modulation
  - Complex modulation: Feedback for evolving patterns
  - Pro tip: Use for expressive movement

### Internal Effects Controls
- **Chorus:** Stereo width and thickness enhancement
  - Range: 0-100% (typically)
  - Effect: Adds stereo width and thickness
  - Use for: Widening and thickening sounds
  - Pro tip: Essential for supersaw sounds
- **Phaser:** Phase shifting effects
  - Range: 0-100% (typically)
  - Effect: Creates phase shifting and sweeping
  - Use for: Adding movement and character
  - Pro tip: Use for swirling effects
- **Delay:** Rhythmic echo effects
  - Range: 0-100% (typically)
  - Effect: Adds rhythmic echoes
  - Use for: Creating rhythmic patterns
  - Pro tip: Use for rhythmic enhancement
- **Distortion:** Harmonic saturation
  - Range: 0-100% (typically)
  - Effect: Adds harmonic content and grit
  - Use for: Adding character and saturation
  - Pro tip: Use for aggressive sounds

## 🎼 Sound Design Applications

### Bass Applications
Using MiniSynth for bass sounds:

**Classic Analog Bass:**
- **Saw Mode Bass:** Creating warm, analog-style bass sounds
  - Use sawtooth waveform with appropriate modifier
  - Apply filter with resonance for character
  - Essential for analog-style bass sounds
  - Perfect for warm, round bass
  - Pro tip: Use with moderate resonance for character

- **Pulse Mode Bass:** Creating hollow, reedy bass sounds
  - Use saw mode with modifier for square characteristics
  - Apply fast envelope for snappy response
  - Essential for punchy bass sounds
  - Perfect for cutting basslines
  - Pro tip: Use for bass that needs to cut through

- **Sub Bass Enhancement:** Creating deep, powerful bass
  - Use low cutoff settings with appropriate resonance
  - Apply sub-oscillator if available
  - Essential for powerful bass sounds
  - Perfect for sub-bass content
  - Pro tip: Use with care to avoid muddiness

### Lead Applications
Using MiniSynth for lead sounds:

**Trance Leads:**
- **SuperSaw Setup:** Creating classic trance lead sounds
  - Use SuperSaw mode with high modifier for detune
  - Apply appropriate filter settings
  - Essential for trance music
  - Perfect for classic supersaw leads
  - Pro tip: Use with chorus for maximum width

- **Bell Mode Leads:** Creating metallic lead sounds
  - Use Bell mode with appropriate modifier settings
  - Apply filter automation for expression
  - Essential for metallic lead sounds
  - Perfect for bell-like leads
  - Pro tip: Use for unique metallic character

- **Saw + Saw Leads:** Creating thick lead sounds
  - Use dual sawtooth with appropriate detune
  - Apply filter for tonal shaping
  - Essential for thick lead sounds
  - Perfect for chorused leads
  - Pro tip: Use for natural-sounding thickness

### Creative Applications
Using MiniSynth for experimental applications:

**Chiptune Applications:**
- **Retro Game Sounds:** Creating authentic chiptune sounds
  - Use square-like settings with appropriate modifiers
  - Apply minimal filtering for authentic character
  - Perfect for retro gaming music
  - Essential for chiptune production
  - Useful for nostalgic sounds

**Atmospheric Textures:**
- **Evolving Pads:** Creating evolving pad sounds
  - Use sawtooth with slow modulation
  - Apply appropriate filter settings
  - Perfect for ambient music
  - Essential for evolving textures
  - Useful for atmospheric soundscapes

**Experimental Sounds:**
- **Unique Textures:** Creating unusual sonic signatures
  - Push parameters beyond normal settings
  - Combine with internal effects
  - Perfect for experimental music
  - Essential for creative sound design
  - Useful for unique textures

### Mobile-Specific Applications
Using MiniSynth for mobile production:

**Cross-Platform Workflows:**
- **Mobile Compatibility:** Ensuring patches work on mobile
  - Use CPU-efficient settings
  - Apply appropriate polyphony settings
  - Essential for mobile workflows
  - Perfect for mobile production
  - Pro tip: Test on mobile for compatibility

- **Touch Interface Optimization:** Optimizing for mobile touch interface
  - Use simple parameter combinations
  - Apply appropriate automation settings
  - Essential for mobile performance
  - Perfect for mobile workflows
  - Pro tip: Keep interfaces simple for touch

## 🧪 Experimental Techniques

### Advanced Synthesis Applications
Creative uses of MiniSynth's multi-mode capabilities:

**Waveform Manipulation:**
- **Modifier Experimentation:** Using modifier differently per waveform
  - Create unique sounds in each mode
  - Use automation for evolving characteristics
  - Perfect for creative sound design
  - Essential for waveform mastery
  - Useful for unique textures

**Multi-Mode Sequencing:**
- **Mode Changes During Playback:** Changing modes during sequences
  - Automate waveform selection for evolution
  - Create complex, evolving sounds
  - Perfect for evolving arrangements
  - Essential for dynamic expression
  - Useful for evolving textures

**LFO Feedback Applications:**
- **Complex Modulation:** Using LFO feedback for evolving patterns
  - Create organic, evolving modulation
  - Use for atmospheric effects
  - Perfect for evolving textures
  - Essential for complex modulation
  - Useful for organic movement

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Modifier Automation:** Automating modifier for tonal evolution
  - Create evolving tonal characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic tonal expression
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

### Synthesis Workflows
Efficient approaches to using MiniSynth for synthesis:

**Bass Design:**
- **Analog Bass Creation:** Creating warm analog-style bass sounds
  - Use sawtooth waveform with appropriate settings
  - Apply filter with moderate resonance
  - Essential for analog bass sounds
  - Pro tip: Use with chorus for authentic analog character

- **Punchy Bass:** Creating snappy bass sounds
  - Use square-like characteristics with modifier
  - Apply fast envelope for snappy response
  - Essential for punchy bass sounds
  - Pro tip: Use for bass that needs to cut through

**Lead Design:**
- **SuperSaw Creation:** Creating classic trance lead sounds
  - Use SuperSaw mode with appropriate detune
  - Apply internal chorus for width
  - Essential for trance leads
  - Pro tip: Use for authentic supersaw character

- **Bell Lead Design:** Creating metallic lead sounds
  - Use Bell mode with appropriate settings
  - Apply filter automation for expression
  - Essential for metallic leads
  - Pro tip: Use for unique metallic character

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
- **Trance Leads:** Creating classic supersaw lead sounds
- **Bass Enhancement:** Creating powerful basslines
- **Rhythmic Effects:** Creating rhythmic patterns with internal effects
- [ ] Explain the exact function of the "Modifier" knob for all 8 waveforms
- [ ] Create a production-ready patch using only internal FX and envelopes
- [ ] Successfully transfer a patch between Desktop and Mobile versions
- [ ] Demonstrate the use of LFO Feedback for complex modulation
- [ ] Create a classic trance supersaw lead with proper detune settings
- [ ] Set up a bell mode patch for metallic lead sounds
- [ ] Use the modifier knob effectively in each waveform mode
- [ ] Apply appropriate filter settings for different musical genres
- [ ] Create a wide, chorused sound using SuperSaw mode
- [ ] Troubleshoot aliasing and harshness issues effectively
- [ ] Integrate MiniSynth into efficient synthesis workflows
- [ ] Create genre-specific patches optimized for different musical styles
- [ ] Optimize MiniSynth settings for minimal CPU usage
- [ ] Use MiniSynth for creative sound design applications
- [ ] Set up advanced synthesis routing for complex projects
- [ ] Apply MiniSynth in live performance scenarios
- [ ] Create experimental sounds with extreme parameter settings
- [ ] Combine MiniSynth with other effects for layered processing
- [ ] Integrate MiniSynth with other automation tools seamlessly
- [ ] Create custom synthesis workflows for specific creative needs
- [ ] Use MiniSynth effectively in large, complex projects
- [ ] Generate complex rhythmic patterns with internal LFO
- [ ] Create hybrid synthesis patches combining different approaches
- [ ] Apply MiniSynth in mastering contexts with appropriate care
- [ ] Create complex multi-stage synthesis chains with smooth automation
- [ ] Design custom analog patches for specific musical contexts
- [ ] Use MiniSynth for creative vocal processing applications
- [ ] Apply advanced PWM techniques for character enhancement
- [ ] Create genre-specific preset libraries for efficient workflow
- [ ] Integrate MiniSynth with external hardware for hybrid processing
- [ ] Use MiniSynth for audio restoration and creative repair applications
- [ ] Combine MiniSynth with other spectral processing tools
- [ ] Apply MiniSynth in surround sound or multi-channel setups
- [ ] Create complex harmonic relationships using multiple parameters
- [ ] Use MiniSynth for creative instrumental processing applications
- [ ] Integrate MiniSynth with other automation tools for complex control
- [ ] Create complex atmospheric textures using multiple parameters
- [ ] Design custom oscillator algorithms for unique harmonic structures
- [ ] Apply advanced filtering techniques for tone shaping
- [ ] Use MiniSynth for creative stereo enhancement beyond traditional methods
- [ ] Combine MiniSynth with convolution for hybrid synthesis approaches
- [ ] Implement advanced envelope shaping for dynamic expression
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use MiniSynth for creative sound design in film and game audio
- [ ] Apply MiniSynth in live sound reinforcement scenarios
- [ ] Create experimental synthesis textures using extreme parameter settings
- [ ] Integrate MiniSynth with external synthesizers for complex sound design
- [ ] Generate complex harmonic structures with precise control
- [ ] Use MiniSynth for formant synthesis and vowel creation
- [ ] Apply advanced resonance techniques for character enhancement
- [ ] Create evolving textures using parameter automation
- [ ] Design custom synthesis patterns for sophisticated expression
- [ ] Use MiniSynth for creative bass enhancement with harmonic control
- [ ] Combine MiniSynth with other vintage emulations for authentic sounds
- [ ] Apply MiniSynth in educational contexts for synthesis learning
- [ ] Create custom synthesis patches for retro music production
- [ ] Use MiniSynth for creative lead enhancement with harmonic control
- [ ] Implement advanced LFO techniques for complex modulation

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\01-subtractive-synthesis.md

```markdown
# MiniSynth Concepts

## Subtractive Synthesis Fundamentals

MiniSynth uses subtractive synthesis, which follows this signal flow:

**Oscillator → Filter → Amplifier → Output**

1. **Oscillator** generates raw waveform
2. **Filter** removes frequencies
3. **Amplifier** controls volume envelope
4. **Output** sends to channel

Understanding this flow helps with sound design decisions.

---

## Waveform Guide

### Sine Wave
- Pure tone, single frequency
- No harmonics
- Best for: Sub bass, pure tones
- Characteristics: Clean, smooth, fundamental

### Triangle Wave
- Contains odd harmonics
- Softer than saw/square
- Best for: Warm pads, flutes, mellow leads
- Characteristics: Round, musical, warm

### Sawtooth Wave
- Contains all harmonics
- Bright, aggressive
- Best for: Leads, brass, aggressive sounds
- Characteristics: Sharp, cutting, rich

### Square Wave
- Alternating polarity
- Hollow sound
- Best for: Reeds, retro sounds, woodwinds
- Characteristics: Nasal, hollow, distinctive

---

## Filter Concepts

### Low-Pass Filter
- Removes high frequencies
- Passes lows
- Most common filter type
- Cutoff determines brightness

### Resonance
- Emphasizes frequencies at cutoff
- Creates "squelchy" character
- Too much = harsh, feedback
- Use sparingly (30-50% typical)

### Envelope Stages

**Attack**
- Time from silence to full volume
- Fast (0-10ms) = immediate
- Slow (100-500ms) = smooth entry

**Decay**
- Time from full volume to sustain level
- Shorter = punchier
- Longer = smoother

**Sustain**
- Constant volume while holding note
- Higher = louder sustained sound
- Lower = quieter sustain

**Release**
- Time from release to silence
- Shorter = quicker cut-off
- Longer = fade-out effect

---

## Oscillator Interactions

### Single Oscillator
- Pure, focused sound
- Less complex
- Easier to control
- Good for: Subs, pure tones

### Multiple Oscillators
- Richer, thicker sound
- More complex harmonics
- More control options
- Good for: Pads, leads, basses

### Detuning
- Creates width and thickness
- Slight detune (+/- 3-7 cents) = warmth
- Heavy detune (+/- 10+ cents) = chorusing
- Can cause phasing in mono

---

## Tips for Sound Design

### Creating Warm Sounds
- Use Triangle or Sine waves
- Low filter cutoff
- Subtle resonance (20-30%)
- Slow attack, smooth envelope
- Layer with sub oscillator

### Creating Aggressive Sounds
- Use Saw or Square waves
- Higher filter cutoff
- Higher resonance (40-60%)
- Fast attack, punchy envelope
- No sub or low sub level

### Creating Atmospheric Sounds
- Multiple oscillators
- Slight detuning for width
- Low filter cutoff
- Slow envelope with long release
- Layer and reverb

---

## Common Mistakes

### Too Harsh
- Saw wave at full volume
- High filter cutoff
- High resonance
- Too many harmonics

### Too Thin
- Single oscillator
- Sine wave only
- Low filter cutoff
- No sub layer

### No Character
- Default settings
- No modulation
- Single oscillator
- Predictable envelopes

---

## Glossary

**ADSR** - Attack, Decay, Sustain, Release envelope stages

**Cutoff** - Frequency where filter begins reducing signal

**Detune** - Slight pitch offset between oscillators

**Oscillator** - Circuit generating waveform

**Resonance** - Emphasis at filter cutoff frequency

**Subtractive** - Synthesis method removing frequencies

**Waveform** - Shape of sound wave (sine, saw, etc.)

---

## Related Documentation

- [MiniSynth By-Instrument Workflows](../03-Workflows/by-instrument/INDEX.md)
- [MiniSynth By-Goal Workflows](../03-Workflows/by-goal/INDEX.md)
- [MiniSynth Genre Presets](../02-Data/presets/genre/INDEX.md)
- [MiniSynth Safety Rules](../02-Data/rules/minisynth-safety-rules.md)

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: MiniSynth

How to get "Big Vibe" from a small, low-CPU synthesizer.

---

## 1. UPBEAT / ENERGETIC
*Trance leads, bright plucks, and high-energy Trap melodies.*
- **The Mental Model:** A bright, sunny club anthem or a high-speed video game.
- **MiniSynth Levers:**
    - **Mode:** **SuperSaw**.
    - **Modifier:** Crank to **80%** for massive detune width.
    - **FX:** Turn on **Chorus** and **Phaser** simultaneously for maximum energy.
    - **Filter Env:** Set a very fast **Decay** and high **Env Amount** for "plucky" energy.
- **Listen For:** "Sparkle," width, and rhythmic sharpness.

## 2. MOODY
*Dark bass, filtered atmospheres, and melancholic depth.*
- **The Mental Model:** A rainy street in a lo-fi hip-hop track or a deep R&B bridge.
- **MiniSynth Levers:**
    - **Mode:** **Filtered** or **Saw**.
    - **Modifier:** Set to **0% (Square)** for a hollow, darker tone.
    - **Filter Cutoff:** Set to **20–30%**.
    - **FX:** Use only **Delay** with a low feedback for trailing "shadows."
    - **Distortion:** Increase slightly to add a "lo-fi" warmth to the darkness.
- **Listen For:** A thick, "cloaked" presence that sits deep in the mix.

## 3. VIBEY / LUSH
*Smooth R&B pads, atmospheric "halos," and warm textures.*
- **The Mental Model:** Modern alternative R&B (PBR&B) or "Expensive" Soul.
- **MiniSynth Levers:**
    - **Mode:** **DeafSaw** or **Saw + Saw**.
    - **Modifier:** Low detuning (10%) for subtle, natural movement.
    - **Attack:** Set to **1–2 seconds** for a slow swell.
    - **LFO:** Set to a slow **Rate** and modulate the **Filter Cutoff** for a "breathing" effect.
- **Listen For:** A wide, creamy sound that "hugs" the vocal.

## 4. JAZZY / CHIPTUNE
*Organic hollow tones, retro game character, and clean leads.*
- **The Mental Model:** Neo-Soul leads or a 1980s Arcade machine.
- **MiniSynth Levers:**
    - **Mode:** **Pulse**.
    - **Modifier:** Set to **50% (Solid Square)** for that hollow, woodwind-like character.
    - **Filter Res:** Increase to **40%** to add a "chirp" to the start of the notes.
    - **Glide:** Set to a moderate time for soulful "scoops" between notes.
- **Listen For:** Clean, defined melodies with a "retro" or "organic" soul.

---

## Vibe Check Matrix
| Vibe | Mode | Modifier | FX Priority | Envelope |
| :--- | :--- | :--- | :--- | :--- |
| **Upbeat** | SuperSaw | High (Detune)| Chorus + Phaser | Plucky |
| **Moody** | Filtered | Low (Square) | Distortion | Long Release|
| **Vibey** | DeafSaw | Low (Width) | Delay | Slow Attack |
| **Jazzy** | Pulse | Mid (Square) | OFF | Glide |
| **Psyched**| Bell | High (Harms) | Phaser | LFO -> Cutoff|

```

---

## FILE: 01-Learning\Quick-Reference\01-parameter-quick-reference.md

```markdown
# MiniSynth Quick Reference

## Parameters at a Glance

### Oscillator Section
| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Oscillator | Sine/Triangle/Saw/Square | Triangle | Waveform selection |
| Sub Oscillator | 0-100% | 0% | Sub-octave depth |
| Octave | -2 to +2 | 0 | Pitch shift |

### Filter Section
| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Cutoff | 20-20000 Hz | 5000 Hz | Filter frequency |
| Resonance | 0-100% | 0% | Filter emphasis |
| Type | Low Pass | Low Pass | Filter type |

### Amplifier Section
| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Attack | 0-1000ms | 10ms | Volume rise time |
| Decay | 0-1000ms | 200ms | Fade to sustain |
| Sustain | 0-100% | 80% | Hold level |
| Release | 0-2000ms | 200ms | Fade to silence |

### Global Section
| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Portamento | 0-100 | 0 | Glide time |
| Volume | 0-100 | 80 | Master volume |

---

## Waveform Guide

| Wave | Harmonics | Character | Best For |
|------|-----------|-----------|----------|
| Sine | None | Pure, clean | Subs, pure tones |
| Triangle | Odd only | Warm, round | Pads, mellow leads |
| Saw | All | Bright, aggressive | Leads, brass |
| Square | Odd only | Hollow, nasal | Retro, reeds |

---

## Filter Settings by Sound Type

| Sound Type | Cutoff | Resonance | Tips |
|------------|--------|-----------|------|
| Sub Bass | 20000 Hz | 0% | Fully open, no resonance |
| Warm Pad | 2000-3000 Hz | 20-30% | Low cutoff, subtle resonance |
| Lead | 4500-6000 Hz | 30-45% | Higher cutoff, character resonance |
| Pluck | 4000-5000 Hz | 50-65% | High resonance for click |
| Acid | 1200-1800 Hz | 70-90% | Low cutoff, max resonance |

---

## Envelope Presets

| Sound Type | Attack | Decay | Sustain | Release |
|------------|--------|-------|---------|---------|
| Sub Bass | 5-10ms | 100ms | 100% | 100ms |
| Warm Pad | 100-200ms | 400ms | 80% | 800ms |
| Lead | 5-15ms | 200ms | 90% | 150ms |
| Pluck | 1-5ms | 80-150ms | 5-20% | 30-80ms |
| Acid | 1-5ms | 150-300ms | 20-40% | 80-150ms |

---

## Common Settings by Genre

### Hip-Hop/Trap
| Parameter | Value |
|-----------|-------|
| Oscillator | Saw or Triangle + Sub |
| Cutoff | 3000 Hz |
| Resonance | 35% |
| Attack | 10ms |
| Decay | 150ms |
| Sustain | 80% |

### R&B
| Parameter | Value |
|-----------|-------|
| Oscillator | Triangle + Sine |
| Cutoff | 3500 Hz |
| Resonance | 25% |
| Attack | 20ms |
| Decay | 300ms |
| Sustain | 75% |

### EDM
| Parameter | Value |
|-----------|-------|
| Oscillator | Saw + Saw (detuned) |
| Cutoff | 5000 Hz |
| Resonance | 40% |
| Attack | 5ms |
| Decay | 200ms |
| Sustain | 90% |

---

## Troubleshooting Guide

| Problem | Likely Cause | Solution |
|---------|--------------|----------|
| Too harsh | Saw + high cutoff | Lower cutoff or use Triangle |
| Too thin | Single oscillator | Add sub or detune |
| No click on pluck | Low resonance | Increase resonance to 50%+ |
| Clicking attacks | Zero attack | Increase attack to 5-10ms |
| Muddy bass | High resonance | Lower resonance, increase cutoff |
| No low end | Sine too quiet | Increase osc volume, add sub |

---

## Related Documentation

- [Subtractive Synthesis Concepts](02-Learning/Concepts/01-subtractive-synthesis.md)
- [MiniSynth Workflows](../03-Workflows/INDEX.md)
- [MiniSynth Presets](../02-Data/presets/INDEX.md)

```

---

## FILE: 01-Learning\Quick-Reference\02-preset-parameters.md

```markdown
# MiniSynth Preset Parameters

## Complete Parameter Map

### Oscillator Section
| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Wave | See below | Triangle | Waveform selection |
| Modifier | 0-100% | 50% | Wave-specific control |
| Octave | -2 to +2 | 0 | Pitch shift |
| Volume | 0-100% | 80% | Oscillator level |
| Detune | -50 to +50 cents | 0 | Pitch variation |

### Waveform Guide
| Wave | Character | Modifier Function |
|------|-----------|------------------|
| Sine | Pure tone | Not used |
| Triangle | Warm | Not used |
| Saw | Bright | Pulse width |
| Saw+Saw | Thick | Detune |
| SuperSaw | Wide | Detune amount |
| Bell | Metallic | Harmonics |
| DeafSaw | Harsh | Detune |
| Pulse | Hollow | Pulse width |

---

## Filter Section

| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Cutoff | 20-20000 Hz | 5000 Hz | Filter frequency |
| Resonance | 0-100% | 0% | Filter emphasis |
| Type | Low Pass | Low Pass | Filter type |

### Modifier Effects by Wave
| Wave | Modifier Changes |
|------|-----------------|
| Sine | Not applicable |
| Triangle | Not applicable |
| Saw | PWM amount |
| Saw+Saw | Osc 2 detune |
| SuperSaw | All detune |
| Bell | Harmonic balance |
| DeafSaw | Detune amount |
| Pulse | Pulse width |

---

## Amplifier Section

| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Attack | 0-1000ms | 10ms | Volume rise |
| Decay | 0-1000ms | 200ms | Fade to sustain |
| Sustain | 0-100% | 80% | Hold level |
| Release | 0-2000ms | 200ms | Fade to silence |

---

## LFO Section

| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Rate | 0-20 Hz | 1 Hz | Modulation speed |
| Depth | 0-100% | 50% | Modulation amount |
| Shape | Sine/Triangle/Square/Saw | Sine | LFO waveform |

### LFO Targets
| Target | Effect |
|--------|--------|
| Pitch | Vibrato |
| Filter | Wah effect |
| Amplitude | Tremolo |
| Pan | Auto-pan |

---

## Global Section

| Parameter | Range | Default | Purpose |
|-----------|-------|---------|---------|
| Portamento | 0-100 | 0 | Glide time |
| Volume | 0-100 | 80 | Master output |
| Unison | On/Off | Off | Voice stacking |

---

## Quick Preset Reference

### Basic Sine Sub
| Parameter | Value |
|-----------|-------|
| Wave | Sine |
| Octave | 0 |
| Cutoff | 20000 |
| Resonance | 0 |
| Attack | 5ms |
| Decay | 100ms |
| Sustain | 100% |
| Release | 100ms |

### Warm Triangle Lead
| Parameter | Value |
|-----------|-------|
| Wave | Triangle |
| Octave | 0 |
| Cutoff | 4000 |
| Resonance | 20 |
| Attack | 15ms |
| Decay | 300ms |
| Sustain | 85% |
| Release | 200ms |

### Aggressive Saw Lead
| Parameter | Value |
|-----------|-------|
| Wave | Saw |
| Octave | 0 |
| Cutoff | 5000 |
| Resonance | 40 |
| Attack | 5ms |
| Decay | 200ms |
| Sustain | 90% |
| Release | 150ms |

### SuperSaw Stack
| Parameter | Value |
|-----------|-------|
| Wave | SuperSaw |
| Octave | 0 |
| Modifier | 60% |
| Cutoff | 4800 |
| Resonance | 35 |
| Attack | 8ms |
| Decay | 200ms |
| Sustain | 90% |
| Release | 180ms |

---

## Related Documentation

- [Subtractive Synthesis Concepts](../Concepts/01-subtractive-synthesis.md)
- [MiniSynth By-Instrument Workflows](../../03-Workflows/by-instrument/INDEX.md)

```

---

## FILE: 01-Learning\Quick-Reference\minisynth-waveform-decoded.md

```markdown
# MiniSynth Waveform Decoded

Understanding the "Modifier" knob per mode. [SRC: IL-MAN]

## 1. SAW (Classic)
- **Engine:** Single Sawtooth.
- **Modifier:** **Pulse Width**.
  - 0% = Square.
  - 50% = Pulse.
  - 100% = Pure Sawtooth.

## 2. PULSE
- **Engine:** Square/Pulse wave.
- **Modifier:** **Pulse Width**.
  - 0% = Narrow "nasal" pulse.
  - 100% = Solid Square wave.

## 3. SAW + SAW (Dual)
- **Engine:** Two Sawtooth oscillators.
- **Modifier:** **Pitch of Oscillator 2**.
  - Allows for thick detuning or interval tuning (e.g. Fifths).

## 4. SUPERSAW (8-Voice)
- **Engine:** 8 Sawtooth voices in unison.
- **Modifier:** **Detune Amount**.
  - 0% = Focused mono saw.
  - 100% = Massive, wide trance spread.

## 5. BELL (Spectral)
- **Engine:** Specially shaped "harmonic" oscillators.
- **Modifier:** **Spectral Balance**.
  - Changes the harmonic series to sound more metallic (Bell) or woody (Pluck).

## 6. DEAFSAW
- **Engine:** A "bright" saw with filtered harmonics.
- **Modifier:** **Brightness/Harmonic Content**.
  - Focuses the energy in specific frequency ranges for "shimmer."

## 7. FILTERED
- **Engine:** A saw wave with a hard-coded internal filter.
- **Modifier:** **Internal Filter Cutoff**.
  - Use this *in addition* to the main Filter tab for double-filtering effects.

## 8. NOISE
- **Engine:** White Noise generator.
- **Modifier:** **Filter Slope/Tone**.
  - Changes the "color" of the noise from Pink to White.

---
*Pro Tip: Automate the Modifier knob during a phrase to create "vowel" sounds or evolving textures.*

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: MiniSynth

The high-efficiency synthesis reference. [SRC: IL-MAN]

---

## 🎹 OSC (Oscillator) Tab
- **Waveform Selector:** 8 distinct modes (Saw, Pulse, Saw+Saw, SuperSaw, Bell, etc.).
- **Modifier:** Changes function per mode (e.g. PWM, Detune, Harmonics).
- **Glide:** Time for pitch transitions between notes.

## 🎚️ FILTER Tab
- **Cutoff:** Filter frequency.
- **Res:** Resonance (peak at cutoff).
- **Env:** Depth of the Filter Envelope's impact on the Cutoff.
- **LFO:** Depth of the LFO's impact on the Cutoff.

## 📐 ENV (Envelope) Tabs
- **Amp Env:** ADSR for volume.
- **Filter Env:** ADSR for filter movement.
- **A-D-S-R:** Attack, Decay, Sustain, Release.

## 🌀 LFO Tab
- **Rate:** Speed of modulation.
- **Width:** Pulse width of the LFO shape.
- **Feedback:** Feeds the LFO back into itself for "glitchy" or complex shapes.

## ✨ FX Tab
- **Chorus:** Width and ensemble thickness.
- **Phaser:** Moving phase-cancellation sweeps.
- **Delay:** Rhythmic echoes.
- **Distortion:** Harmonic grit and saturation.

---

## 🎯 Modifier Quick Reference
- **Saw:** Pulse Width (Square to Saw).
- **Pulse:** Pulse Width (Narrow to Square).
- **Saw + Saw:** Pitch of the 2nd Oscillator.
- **SuperSaw:** Detune spread of 8 voices.
- **Bell:** Harmonic spectral balance.
- **DeafSaw:** High-frequency spectral content.
- **Filtered:** Internal filter character.

```

---

## FILE: 02-Data\archetypes\g-funk-leads-and-rnb-pads.md

```markdown
# Data: G-Funk Leads & R&B Pads
**Goal:** Specific parameter mappings to turn MiniSynth into an Urban music workhorse.

## 1. The G-Funk "Worm" (Lead)
*Used for: West Coast vibes, Jazzy/Funky hooks.*
- **Oscillator:** Sine or Saw (Sine is cleaner/classic).
- **Polyphony:** MONO (Essential).
- **Glide (Portamento):** Set to **30-50%**. This allows the notes to "slide" up and down.
- **Filter:** High Cut (LP) set to ~80%. 
- **Modulation:** Add a small amount of **Vibrato (LFO to Pitch)** triggered by the Mod Wheel for that expressive, whistling feel.

## 2. The Lo-Fi "Moody" Keys
*Used for: Dark R&B, Trap Soul chords.*
- **Oscillator:** Square (Pulse).
- **PWM (Pulse Width):** Set to ~40% for a "hollow" vintage tone.
- **Filter:** Low Pass set to **30-40%** (Dark).
- **Envelope (Amp):** Attack 20ms | Decay 500ms | Sustain 50% | Release 300ms.
- **LFO to Pitch:** Speed 2Hz | Amount 5%. This creates the "wow and flutter" of an old tape machine.

## 3. The 808-Assist Sub
*Used for: Adding weight to weak kicks.*
- **Oscillator:** Sine.
- **Filter:** Low Pass set to **10%** (Cutting all highs).
- **Envelope (Amp):** Attack 0ms (Instant punch).
- **Processing:** Run this through **Fruity Soft Clipper** for harmonic distortion.

## 4. Preset Logic Mapping
| Vibe | Oscillator | Filter Type | Key Feature |
| :--- | :--- | :--- | :--- |
| **G-Funk** | Sine | LP | High Portamento |
| **Trap Soul** | Square | LP (Dark) | Pitch LFO (Wobble) |
| **Neo-Soul** | Saw | BP (Bandpass)| Resonant Wah-feel |
| **Hard Trap** | Saw (Unison)| LP | Fat Distortion |

```

---

## FILE: 02-Data\parameters\minisynth-modifier-map.json

```json
{
  "plugin_name": "MiniSynth",
  "category": "Subtractive / Mobile",
  "waveform_modifiers": [
    {
      "mode": "Saw",
      "modifier": "Pulse Width",
      "use_cases": ["Lead", "Organ", "Brass"]
    },
    {
      "mode": "Pulse",
      "modifier": "Pulse Width",
      "use_cases": ["Nasal Bass", "Chiptune"]
    },
    {
      "mode": "Saw + Saw",
      "modifier": "Osc 2 Pitch",
      "use_cases": ["Thick Lead", "Fifths"]
    },
    {
      "mode": "SuperSaw",
      "modifier": "Detune Amount",
      "use_cases": ["Trance Lead", "Wide Pad"]
    },
    {
      "mode": "Bell",
      "modifier": "Harmonics",
      "use_cases": ["Bells", "Plucks", "Metallic Perc"]
    },
    {
      "mode": "DeafSaw",
      "modifier": "Spectral Brightness",
      "use_cases": ["Shimmer", "High-End Air"]
    },
    {
      "mode": "Filtered",
      "modifier": "Internal Cutoff",
      "use_cases": ["Dark Bass", "Double Filter"]
    },
    {
      "mode": "Noise",
      "modifier": "Noise Color",
      "use_cases": ["Snare Decay", "Risers", "Ambience"]
    }
  ]
}

```

---

## FILE: 02-Data\presets\COMPLETE-CATALOG.md

```markdown
# MiniSynth Complete Presets Catalog

## By Instrument Type

### Bass Presets (8 files)
| Preset | Mood | Description |
|--------|------|-------------|
| `bass/01-sub-bass.json` | Deep | Pure sub frequencies |
| `bass/02-warm-bass.json` | Warm | Smooth low-end |
| `bass/03-aggressive-bass.json` | Electric | Harsh FM character |
| `bass/04-pluck-bass.json` | Punchy | Short attack bass |
| `bass/05-acid-bass.json` | Funk | Squelchy resonance |
| `bass/06-rnb-bass.json` | Smooth | R&B style warmth |
| `bass/07-trap-bass.json` | Dark | Modern trap feel |
| `bass/08-jazz-bass.json` | Melodic | Acoustic feel |

### Lead Presets (8 files)
| Preset | Mood | Description |
|--------|------|-------------|
| `lead/01-basic-lead.json` | Bright | Simple lead tone |
| `lead/02-warm-lead.json` | Smooth | Mellow character |
| `lead/03-aggressive-lead.json` | Sharp | Cutting tone |
| `lead/04-pluck-lead.json` | Punchy | Short sustain |
| `lead/05-retro-lead.json` | Vintage | 80s feel |
| `lead/06-shimmer-lead.json` | Ethereal | Bright shimmer |
| `lead/07-trap-lead.json` | Dark | Modern trap lead |
| `lead/08-anime-lead.json` | Upbeat | Chiptune style |

### Pad Presets (6 files)
| Preset | Mood | Description |
|--------|------|-------------|
| `pad/01-ambient-pad.json` | Moody | Evolving texture |
| `pad/02-warm-pad.json` | Smooth | Gentle warmth |
| `pad/03-bright-pad.json` | Electric | Shiny tone |
| `pad/04- cinematic-pad.json` | Epic | Wide atmosphere |
| `pad/05-soft-pad.json` | Gentle | Light texture |
| `pad/06-ancient-pad.json` | Dusty | Vintage feel |

### Pluck Presets (5 files)
| Preset | Mood | Description |
|--------|------|-------------|
| `pluck/01-digital-pluck.json` | Pure | Clean tone |
| `pluck/02-retro-pluck.json` | Vintage | Classic 80s |
| `pluck/03-metallic-pluck.json` | Harsh | Sharp attack |
| `pluck/04-soft-pluck.json` | Gentle | Mellow tone |
| `pluck/05-acid-pluck.json` | Funk | Squelchy feel |

### Chord Presets (4 files)
| Preset | Mood | Description |
|--------|------|-------------|
| `chord/01-stab.json` | Punchy | Rhythmic stabs |
| `chord/02-warm-chord.json` | Smooth | Mellow chords |
| `chord/03-bright-chord.json` | Sharp | Cutting chords |
| `chord/04-dusty-chord.json` | Dusty | Lo-fi feel |

---

## By Workflow Application

### Trap Production
- `bass/07-trap-bass.json`
- `lead/07-trap-lead.json`
- `pluck/03-metallic-pluck.json`

### R&B Production
- `bass/06-rnb-bass.json`
- `lead/02-warm-lead.json`
- `pad/02-warm-pad.json`

### Lo-Fi Production
- `pad/06-ancient-pad.json`
- `chord/04-dusty-chord.json`
- `pluck/02-retro-pluck.json`

### EDM/Festival
- `bass/03-aggressive-bass.json`
- `lead/06-shimmer-lead.json`
- `pad/03-bright-pad.json`

---

## Quick Start Guides

### Quick Bass
Start: `bass/01-sub-bass.json`
Tweak: Adjust cutoff for brightness

### Quick Lead
Start: `lead/01-basic-lead.json`
Tweak: Increase resonance for character

### Quick Pad
Start: `pad/01-ambient-pad.json`
Tweak: Adjust attack for smoothness

---

## Related Documentation

- [MiniSynth By-Instrument Workflows](../03-Workflows/by-instrument/INDEX.md)
- [MiniSynth Genre Presets](genre/INDEX.md)
- [MiniSynth Signature Presets](signature/INDEX.md)

```

---

## FILE: 02-Data\presets\INDEX.md

```markdown
# MiniSynth INDEX

## Genre Presets (6 files)
| File | Name | Genre | Mood |
|------|------|-------|------|
| `genre/01-g-funk-lead.json` | G-Funk Lead | hip-hop/rap | smooth |
| `genre/02-rnb-smooth-bass.json` | Smooth Bass | R&B | smooth |
| `genre/03-piano-keys.json` | Piano Keys | R&B | moody |
| `genre/04-acid-bass.json` | Acid Bass | EDM | electric |
| `genre/05-trap-pluck.json` | Trap Pluck | trap | dark |
| `genre/06-warm-pad.json` | Warm Pad | ambient | moody |

## Signature Presets (3 files)
| File | Artist | Style |
|------|--------|-------|
| `signature/nile-rodgers.json` | Nile Rodgers | Vintage Lead |
| `signature/uk-dnb.json` | UK D&B | Drum Bass |
| `signature/j-dilla.json` | J Dilla | Subtle Lead |
| `signature/armin.json` | Armin | Euro Trance |

## Workflows (3 files)
| File | Focus |
|------|-------|
| `by-instrument/01-lead-workflow.md` | Lead sounds |
| `by-instrument/02-bass-workflow.md` | Bass sounds |
| `by-instrument/03-pad-workflow.md` | Pad sounds |

## Quick Reference
- **For G-Funk:** Start with `genre/01-g-funk-lead.json`
- **For R&B bass:** Start with `genre/02-rnb-smooth-bass.json`
- **For ambient pads:** Start with `genre/06-warm-pad.json`
- **For acid sounds:** Start with `genre/04-acid-bass.json`

```

---

## FILE: 02-Data\presets\genre\01-g-funk-lead.json

```json
{
  "metadata": {
    "plugin": "MiniSynth",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "G-Funk Lead",
    "category": "genre",
    "genre": "hip-hop/rap",
    "mood": "smooth"
  },
  "settings": {
    "oscillator": {
      "waveform": "sine",
      "octave": "0",
      "detune": 0,
      "mix": 100
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 2800,
      "resonance": 15,
      "drive": 5
    },
    "envelope": {
      "attack": 50,
      "decay": 300,
      "sustain": 80,
      "release": 400
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.2,
      "amt": 10,
      "dest": "filterCutoff"
    }
  },
  "chain": {
    "pre": ["Soft clipper - 1dB"],
    "post": ["Fruily Reverb 2 - Plate, Decay 1.5s, Mix 15%", "Fruily Compressor - Soft knee"]
  },
  "genreTags": ["hip-hop/rap", "G-Funk", "smooth", "West Coast"],
  "a/bTesting": {
    "testA": "Sine wave for classic G-Funk",
    "testB": "Add triangle for modern edge"
  },
  "troubleshooting": {
    "tooDark": "Increase filter cutoff to 3200Hz",
    "clicking": "Increase envelope attack to 30ms"
  }
}

```

---

## FILE: 02-Data\presets\genre\02-rnb-smooth-bass.json

```json
{
  "metadata": {
    "plugin": "MiniSynth",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Smooth Bass",
    "category": "genre",
    "genre": "R&B",
    "mood": "smooth"
  },
  "settings": {
    "oscillator": {
      "waveform": "triangle",
      "octave": "-1",
      "detune": 0,
      "mix": 100
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 1500,
      "resonance": 20,
      "drive": 8
    },
    "envelope": {
      "attack": 20,
      "decay": 200,
      "sustain": 75,
      "release": 300
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.3,
      "amt": 15,
      "dest": "pan"
    }
  },
  "chain": {
    "post": ["Fruily Compressor - Ratio 2:1, Attack 15ms"]
  },
  "genreTags": ["R&B", "smooth", "groove", "soulful"],
  "a/bTesting": {
    "testA": "Triangle for warmth",
    "testB": "Add sine for more sub"
  },
  "troubleshooting": {
    "tooThin": "Increase filter drive to 12%",
    "muddy": "Increase filter cutoff to 1800Hz"
  }
}

```

---

## FILE: 02-Data\presets\genre\03-piano-keys.json

```json
{
  "metadata": {
    "plugin": "MiniSynth",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Piano Keys",
    "category": "genre",
    "genre": "R&B",
    "mood": "moody"
  },
  "settings": {
    "oscillator": {
      "waveform": "sine",
      "octave": "0",
      "detune": 0,
      "mix": 90
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 3500,
      "resonance": 10,
      "drive": 3
    },
    "envelope": {
      "attack": 5,
      "decay": 250,
      "sustain": 85,
      "release": 350
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.4,
      "amt": 8,
      "dest": "pitch"
    }
  },
  "chain": {
    "post": ["Fruily Reverb 2 - Hall, Decay 2s, Mix 18%"]
  },
  "genreTags": ["R&B", "moody", "piano", "soulful"],
  "a/bTesting": {
    "testA": "Sine wave for pure tone",
    "testB": "Add triangle for harmonics"
  },
  "troubleshooting": {
    "tooSoft": "Increase filter drive to 5%",
    "harshHighs": "Reduce filter cutoff to 3000Hz"
  }
}

```

---

## FILE: 02-Data\presets\genre\04-acid-bass.json

```json
{
  "metadata": {
    "plugin": "MiniSynth",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Acid Bass",
    "category": "genre",
    "genre": "EDM",
    "mood": "electric"
  },
  "settings": {
    "oscillator": {
      "waveform": "saw",
      "octave": "-1",
      "detune": 0,
      "mix": 100
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 2000,
      "resonance": 65,
      "drive": 15
    },
    "envelope": {
      "attack": 5,
      "decay": 150,
      "sustain": 50,
      "release": 100
    },
    "lfo": {
      "waveform": "square",
      "rate": 1,
      "amt": 80,
      "dest": "filterCutoff"
    }
  },
  "chain": {
    "post": ["Fruily Distancer - Drive 20%", "Fruily Compressor - Fast attack"]
  },
  "genreTags": ["EDM", "techno", "acid", "electric"],
  "a/bTesting": {
    "testA": "High resonance for acid sound",
    "testB": "Lower resonance for techno"
  },
  "troubleshooting": {
    "selfOscillation": "Reduce resonance below 60%",
    "tooHarsh": "Reduce filter cutoff to 1500Hz"
  }
}

```

---

## FILE: 02-Data\presets\genre\05-trap-pluck.json

```json
{
  "metadata": {
    "plugin": "MiniSynth",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Trap Pluck",
    "category": "genre",
    "genre": "trap",
    "mood": "dark"
  },
  "settings": {
    "oscillator": {
      "waveform": "square",
      "octave": "0",
      "detune": 0,
      "mix": 100
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 3000,
      "resonance": 40,
      "drive": 10
    },
    "envelope": {
      "attack": 2,
      "decay": 80,
      "sustain": 0,
      "release": 50
    },
    "lfo": {
      "waveform": "sine",
      "rate": 2,
      "amt": 20,
      "dest": "pitch"
    }
  },
  "chain": {
    "post": ["Fruily Reverb 2 - Small Room, Decay 0.8s, Mix 15%"]
  },
  "genreTags": ["trap", "dark", "plucky", "aggressive"],
  "a/bTesting": {
    "testA": "Square wave for click",
    "testB": "Add saw for body"
  },
  "troubleshooting": {
    "tooClicky": "Increase attack to 5ms",
    "notPunchy": "Increase filter resonance to 50%"
  }
}

```

---

## FILE: 02-Data\presets\genre\06-warm-pad.json

```json
{
  "metadata": {
    "plugin": "MiniSynth",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Warm Pad",
    "category": "genre",
    "genre": "ambient",
    "mood": "moody"
  },
  "settings": {
    "oscillator": {
      "waveform": "triangle",
      "octave": "-1",
      "detune": 5,
      "mix": 85
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 2000,
      "resonance": 15,
      "drive": 5
    },
    "envelope": {
      "attack": 300,
      "decay": 500,
      "sustain": 85,
      "release": 800
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.1,
      "amt": 25,
      "dest": "pan"
    }
  },
  "chain": {
    "post": ["Fruily Reverb 2 - Cathedral, Decay 4s, Mix 25%"]
  },
  "genreTags": ["ambient", "moody", "warm", "cinematic"],
  "a/bTesting": {
    "testA": "Triangle for warmth",
    "testB": "Add sine for smoothness"
  },
  "troubleshooting": {
    "tooDark": "Increase filter cutoff to 2500Hz",
    "phasing": "Reduce detune or pan amount"
  }
}

```

---

## FILE: 02-Data\presets\signature\armin.json

```json
{
  "metadata": {
    "plugin": "MiniSynth",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Euro Trance Lead",
    "category": "signature",
    "inspiredBy": "Armin van Buuren festival style"
  },
  "settings": {
    "oscillator": {
      "waveform": "saw",
      "octave": "0",
      "detune": 7,
      "mix": 100
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 4000,
      "resonance": 50,
      "drive": 15
    },
    "envelope": {
      "attack": 20,
      "decay": 200,
      "sustain": 70,
      "release": 500
    },
    "lfo": {
      "waveform": "saw-up",
      "rate": 0.5,
      "amt": 60,
      "dest": "filterCutoff"
    }
  },
  "chain": {
    "post": ["Fruily Limiter - Ceiling -0.3dB", "Reverb - Large hall, Decay 3s, Mix 20%"]
  },
  "characteristics": ["big", "uplifting", "anthem", "powerful"],
  "genreTags": ["EDM", "trance", "progressive", "festival"],
  "a/bTesting": {
    "testA": "Detuned for width",
    "testB": "Clean for purity"
  },
  "troubleshooting": {
    "too harsh": "Reduce filter resonance to 40%",
    "not big enough": "Increase detune to 10 cents"
  }
}

```

---

## FILE: 02-Data\presets\signature\j-dilla.json

```json
{
  "metadata": {
    "plugin": "MiniSynth",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Subtle Lead",
    "category": "signature",
    "inspiredBy": "J Dilla smooth production"
  },
  "settings": {
    "oscillator": {
      "waveform": "triangle",
      "octave": "0",
      "detune": 3,
      "mix": 90
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 2000,
      "resonance": 12,
      "drive": 4
    },
    "envelope": {
      "attack": 30,
      "decay": 350,
      "sustain": 82,
      "release": 400
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.15,
      "amt": 10,
      "dest": "pan"
    }
  },
  "chain": {
    "post": ["Fruily Reverb 2 - Room, Decay 1.8s, Mix 15%", "Light compression"]
  },
  "characteristics": ["smooth", "mellow", "soulful", "subtle"],
  "genreTags": ["hip-hop/rap", "R&B", "soul", "jazzy"],
  "a/bTesting": {
    "testA": "Triangle for warmth",
    "testB": "Sine for purity"
  },
  "troubleshooting": {
    "tooSoft": "Increase filter drive to 6%",
    "notEnoughPresence": "Increase filter cutoff to 2200Hz"
  }
}

```

---

## FILE: 02-Data\presets\signature\nile-rodgers.json

```json
{
  "metadata": {
    "plugin": "MiniSynth",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Vintage Lead",
    "category": "signature",
    "inspiredBy": "Nile Rodgers funk style"
  },
  "settings": {
    "oscillator": {
      "waveform": "sine",
      "octave": "0",
      "detune": 0,
      "mix": 95
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 2500,
      "resonance": 18,
      "drive": 6
    },
    "envelope": {
      "attack": 10,
      "decay": 200,
      "sustain": 80,
      "release": 250
    },
    "lfo": {
      "waveform": "sine",
      "rate": 0.25,
      "amt": 12,
      "dest": "filterCutoff"
    }
  },
  "chain": {
    "post": ["Fruily Compressor - Ratio 2:1, Attack 10ms", "Fruily Reverb 2 - Plate, Decay 1s, Mix 12%"]
  },
  "characteristics": ["smooth", "warm", "funky", "classic"],
  "genreTags": ["hip-hop/rap", "R&B", "funk", "classic"],
  "a/bTesting": {
    "testA": "Sine for pure tone",
    "testB": "Triangle for harmonics"
  },
  "troubleshooting": {
    "tooDull": "Increase filter cutoff to 3000Hz",
    "clickingAttack": "Increase attack to 15ms"
  }
}

```

---

## FILE: 02-Data\presets\signature\uk-dnb.json

```json
{
  "metadata": {
    "plugin": "MiniSynth",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Drum Bass",
    "category": "signature",
    "inspiredBy": "UK drum & bass style"
  },
  "settings": {
    "oscillator": {
      "waveform": "saw",
      "octave": "-1",
      "detune": 0,
      "mix": 100
    },
    "filter": {
      "type": "lowpass",
      "cutoff": 800,
      "resonance": 45,
      "drive": 12
    },
    "envelope": {
      "attack": 2,
      "decay": 100,
      "sustain": 60,
      "release": 150
    },
    "lfo": {
      "waveform": "square",
      "rate": 4,
      "amt": 30,
      "dest": "filterCutoff"
    }
  },
  "chain": {
    "post": ["Fruily Compressor - Fast attack 2ms, Ratio 4:1", "Fruily Limiter - Threshold -10dB"]
  },
  "characteristics": ["punchy", "energetic", "rhythmic", "dark"],
  "genreTags": ["EDM", "drum & bass", "jungle", "energetic"],
  "a/bTesting": {
    "testA": "High resonance for reese sound",
    "testB": "Lower resonance for cleaner sound"
  },
  "troubleshooting": {
    "too muddy": "Increase filter cutoff to 1000Hz",
    "not punchy": "Reduce decay to 80ms"
  }
}

```

---

## FILE: 02-Data\rules\minisynth-safety-rules.md

```markdown
# MiniSynth Safety Rules

## Volume & Clipping

### Master Output
- ALWAYS keep master output below -3 dB
- Use limiter on master if approaching 0 dB
- Check true peak on export

### Oscillator Levels
- Sum of all oscillators should not exceed 0 dB
- Typical setting: Osc 1 at 75%, Osc 2 at 50%
- Reduce when both playing same pitch

### Envelope Amounts
- Amp envelope at 100% for normal playing
- Reduce to 80% if using multiple oscillators
- Use velocity to control max volume

## CPU & Performance

### Voice Stealing
- Maximum 8-12 voices for CPU safety
- Enable voice stealing for poly patches
- Set release time under 2 seconds for CPU

### Unison Mode
- Unison uses 2-3x CPU per note
- Disable for live performance
- Use sparingly in arrangements

### Effects Usage
- Chorus and reverb use significant CPU
- Bypass during sound design
- Use send/return for shared effects

## Sound Design Safety

### Filter Resonance
- Resonance above 80% can cause feedback
- Resonance at 100% may clip output
- Use high-pass filter when resonance is high

### Modulation Depth
- Oscillator mod depth over 50% creates harsh sounds
- LFO to filter: start at 25%
- Aftertouch: use sparingly

### Pitch Safety
- Portamento time over 500ms creates noticeable lag
- Unison pitch spread: max 1 semitone per voice
- Detune more than 50 cents creates beating

## Workflow Safety

### Saving
- Save presets before major changes
- Use unique names for custom patches
- Backup presets folder regularly

### Automation
- Limit automation parameter changes to every 4+ bars
- Smooth automation curves for filter cutoff
- Avoid rapid LFO rate automation

### Exporting
- Always export at 24-bit or 32-bit float
- Check true peak before final export
- Leave 6 dB headroom on master bus

## Common Mistakes to Avoid

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| All oscillators at 100% | Immediate clipping | Use 50-75% per osc |
| High resonance + high cutoff | Harsh, harsh sound | Use 50-70% resonance |
| Long release times | CPU buildup | Keep under 2 seconds |
| Fast LFO sync to audio rate | Unpleasant modulation | Keep LFO below 20 Hz |

## Quick Reference Limits

| Parameter | Maximum Safe | Warning Zone |
|-----------|--------------|--------------|
| Master Volume | -6 dB | -3 to 0 dB |
| Oscillator Level | 75% each | 75-100% |
| Filter Resonance | 70% | 70-100% |
| Voices | 8-12 | 12+ |
| Release Time | 2 seconds | 2-5 seconds |
| Portamento | 250 ms | 250-500 ms |
| Detune | 25 cents | 25-50 cents |
| Unison Voices | 3 | 4+ |

## Troubleshooting

### Sound Clipping
1. Check master output level
2. Reduce all oscillator levels
3. Enable master limiter
4. Lower filter resonance

### CPU Spikes
1. Reduce voice count
2. Shorten release times
3. Disable chorus/reverb
4. Freeze unused tracks

### Unpleasant Sounds
1. Reduce modulation depth
2. Lower filter resonance
3. Increase filter cutoff
4. Use high-pass filter

## FL Studio Integration

### Latency
- Instrument uses ~10-15 ms latency
- Increase buffer size for recording
- Use direct monitoring when possible

### Automation
- Right-click parameters for automation
- Use last 8 bars for parameter locks
- Smooth recorded automation

### Recording
- Arm track before playing
- Use 24-bit recording
- Check input levels before recording

```

---

## FILE: 03-Workflows\by-goal\INDEX.md

```markdown
# MiniSynth By-Goal Workflows Index

## Available Goal Workflows

| Goal | Description | Difficulty |
|------|-------------|------------|
| [Warm Pads](by-goal-workflows.md#goal-create-warm-pads) | Smooth atmospheric textures | Beginner |
| [Punchy Leads](by-goal-workflows.md#goal-create-punchy-leads) | Cutting melodic hooks | Beginner |
| [Classic 80s Synth](by-goal-workflows.md#goal-create-classic-80s-synth) | Retro 80s sounds | Intermediate |
| [Lo-Fi Keys](by-goal-workflows.md#goal-create-lo-fi-keys) | Dusty nostalgic tones | Intermediate |
| [Acid Bass](by-goal-workflows.md#goal-create-acid-bass) | Squelchy resonant bass | Intermediate |
| [Plucks](by-goal-workflows.md#goal-create-plucks) | Short percussive sounds | Beginner |

## Quick Start by Mood

| Mood | Recommended Goal | Key Settings |
|------|-----------------|---------------|
| Atmospheric | Warm Pads | Triangle, slow attack |
| Aggressive | Punchy Leads | Saw, fast attack |
| Nostalgic | Classic 80s | Saw+Square, chorus |
| Dusty | Lo-Fi Keys | Triangle, bit crusher |
| Aggressive | Acid Bass | Saw, high resonance |
| Percussive | Plucks | Sine, short envelope |

## Goal to Instrument Mapping

| Sound Type | Best Goal Workflow |
|------------|-------------------|
| Pads | Warm Pads |
| Leads | Punchy Leads |
| Retro Synths | Classic 80s |
| Lo-Fi Chords | Lo-Fi Keys |
| Acid Lines | Acid Bass |
| Arpeggios | Plucks |

## Related Documentation

- [MiniSynth By-Instrument Workflows](02-Workflows/by-instrument/INDEX.md)
- [MiniSynth Genre Presets](../02-Data/presets/genre/INDEX.md)
- [MiniSynth Signature Presets](../02-Data/presets/signature/INDEX.md)
- [MiniSynth Safety Rules](../02-Data/rules/minisynth-safety-rules.md)

```

---

## FILE: 03-Workflows\by-goal\by-goal-workflows.md

```markdown
# MiniSynth By-Goal Workflows

## Goal: Create Warm Pads

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator | Triangle | Warm foundation |
| Sub Oscillator | On, 50% | Depth |
| Filter Cutoff | 2000 Hz | Dark character |
| Filter Resonance | 20% | Subtle emphasis |
| Attack | 150 ms | Smooth entry |
| Decay | 400 ms | Initial fade |
| Sustain | 80% | Hold level |
| Release | 800 ms | Gentle fade |

### Steps
1. Start with Triangle oscillator
2. Enable Sub Osc at 50%
3. Set low filter cutoff (2000 Hz)
4. Add subtle resonance (20%)
5. Use slow attack for smooth entry
6. Extend release for ambience

### Tips
- Layer two instances for width
- Add Fruity Reverb for space
- Use Fruity Chorus for movement
- Automate filter for evolution

---

## Goal: Create Punchy Leads

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator | Saw | Bright tone |
| Sub Oscillator | Off | Focused sound |
| Filter Cutoff | 5500 Hz | Maximum presence |
| Filter Resonance | 40% | Character |
| Attack | 5 ms | Immediate start |
| Decay | 200 ms | Initial fade |
| Sustain | 90% | Full sustain |
| Release | 150 ms | Quick release |

### Steps
1. Select Saw oscillator
2. Disable Sub for focused tone
3. Open filter wide (5500 Hz)
4. Add resonance for character
5. Use fast attack for punch
6. Quick release for tightness

### Tips
- Layer with detuned instance
- Add compression for glue
- Use EQ boost at 2-3kHz
- Sidechain for space

---

## Goal: Create Classic 80s Synth

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator | Saw + Square | Retro character |
| Sub Oscillator | On, 70% | Fat sound |
| Filter Cutoff | 3500 Hz | Classic warmth |
| Filter Resonance | 30% | 80s emphasis |
| Attack | 10 ms | Medium punch |
| Decay | 300 ms | Classic envelope |
| Sustain | 70% | Period-accurate |
| Release | 200 ms | Natural release |

### Steps
1. Mix Saw and Square oscillators
2. Enable Sub at 70%
3. Set filter at 3500 Hz
4. Add 30% resonance
5. Use period-appropriate envelope
6. Add chorus for 80s width

### Tips
- Layer with electric piano
- Use chorus for width
- Add gated reverb effect
- Compress for pumping

---

## Goal: Create Lo-Fi Keys

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator | Triangle | Worn character |
| Sub Oscillator | On, 40% | Subtle depth |
| Filter Cutoff | 2800 Hz | Mellow tone |
| Filter Resonance | 25% | Gentle emphasis |
| Attack | 50 ms | Soft entry |
| Decay | 400 ms | Natural fade |
| Sustain | 60% | Shorter sustain |
| Release | 500 ms | Smooth ending |

### Steps
1. Use Triangle oscillator
2. Enable Sub at lower level (40%)
3. Set medium-low cutoff (2800 Hz)
4. Use softer envelope
5. Process with sample reduction
6. Add tape saturation

### Tips
- Apply bit crusher effect
- Use Fruity Reverb (short decay)
- Add vinyl crackle
- Automate filter sweeps

---

## Goal: Create Acid Bass

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator | Saw | Classic TB tone |
| Sub Oscillator | Off | Tight sound |
| Filter Cutoff | 1200 Hz | Squelch range |
| Filter Resonance | 80% | Maximum character |
| Attack | 2 ms | Immediate click |
| Decay | 200 ms | Sustain level |
| Sustain | 25% | Short release |
| Release | 100 ms | Quick ending |

### Steps
1. Select Saw oscillator
2. Disable Sub for tightness
3. Set low cutoff (1200 Hz)
4. Maximize resonance (80%)
5. Use short envelope
6. Add filter envelope modulation

### Tips
- Program 16th note patterns
- Use slide between notes
- Vary note lengths
- Add distortion for grit

---

## Goal: Create Plucks

### Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator | Sine | Pure tone |
| Sub Oscillator | Off | Tight sound |
| Filter Cutoff | 5000 Hz | Bright attack |
| Filter Resonance | 55% | Click emphasis |
| Attack | 1 ms | Instant start |
| Decay | 100 ms | Short sustain |
| Sustain | 5% | Minimal hold |
| Release | 40 ms | Quick release |

### Steps
1. Select Sine oscillator
2. Disable Sub
3. Open filter for attack
4. Add high resonance for click
5. Use instant attack
6. Short decay and release

### Tips
- Program staccato patterns
- Layer with percussive elements
- Add reverb for space
- Velocity controls click intensity

```

---

## FILE: 03-Workflows\by-goal\deep-mobile-bass.md

```markdown
# Workflow: Deep Mobile Bass (Low-End Punch)

*Goal: Creating a rock-solid, deep sub-bass or rhythmic bass that works perfectly on both FL Studio Mobile and Desktop.*

## Vibe Mapping
- **Moody:** ⭐⭐⭐⭐⭐ (Primary)
- **Jazzy:** ⭐⭐⭐⭐
- **Upbeat:** ⭐⭐⭐

## 🚶 Step-by-Step Setup
1. **The Waveform:**
   - Select the **Pulse** waveform icon.
   - Set the **Modifier** knob to **50%**. This creates a solid Square wave, which is the gold standard for sub-bass weight.
2. **The Filter (The Secret):**
   - Go to the **Filter Tab**.
   - **Cutoff:** Set to **20%**. You want only the "thump" and "weight."
   - **Res:** Set to **30%**. This adds a little "knock" at the cutoff frequency.
   - **Env Amount:** Set to **40%**.
3. **The Envelopes:**
   - **Amp Env:** Set **Sustain** to 100% and **Release** to short (for tight notes).
   - **Filter Env:** Set **Decay** to a moderate length (500ms). This makes the bass "muffled" as it sustains, but "punchy" when it hits.
4. **The Texture (Grit):**
   - Go to the **FX Tab**.
   - Enable **Distortion** at **15%**. This adds upper harmonics so the bass is audible on phone speakers.
5. **The Low-End Rule:**
   - Ensure all other FX (Chorus, Phaser, Delay) are **OFF**. You want your bass to be mono and focused.

## 🔄 Variations
- **The "808" Pluck:** Turn **Sustain** to 0% and increase **Decay** to 2 seconds.
- **The "Nasal" Bass:** Turn the **Modifier** knob down to **10%** for a narrow, gritty character.

## ⚠️ Pitfalls & Fixes
- **Problem:** Bass is too quiet.
- **Fix:** Increase the **Distortion** or the **Amp Env** sustain level.
- **Problem:** Bass sounds "clicky."
- **Fix:** Increase the **Attack** time by a tiny fraction (just a few pixels).

## 🎚️ Automation Ideas
- **Filter Growl:** Automate the **Filter Cutoff** to open during a build-up.
- **Width Rise:** Automate the **Modifier** knob to go from 50% to 100% to transition from a "Sub" to a "Lead."

```

---

## FILE: 03-Workflows\by-goal\glitchy-lfo-effects.md

```markdown
# Workflow: Glitchy LFO Effects (Experimental Motion)

*Goal: Using the unique "LFO Feedback" parameter of MiniSynth to create unpredictable, complex, and rhythmic sound design.*

## Vibe Mapping
- **Psychedelic:** ⭐⭐⭐⭐⭐ (Primary)
- **Upbeat:** ⭐⭐⭐⭐ (For glitches)
- **Moody:** ⭐⭐⭐

## 🚶 Step-by-Step Setup
1. **The Base Sound:**
   - Use the **Bell** or **Pulse** waveform for a defined, melodic starting point.
2. **The LFO Target:**
   - Go to the **Filter Tab**.
   - Set **LFO Amount** to **100%**.
3. **The Chaos (LFO Tab):**
   - **Rate:** Set to a fast, rhythmic speed (e.g. 1/16).
   - **Width:** Set to 50%.
   - **Feedback (The Secret):** Turn this up to **80%**.
   - *Result:* Instead of a simple up-and-down "wah," the filter will now move in complex, jagged patterns as the LFO modulates its own shape.
4. **The Texture:**
   - Go to the **FX Tab**.
   - Turn on the **Phaser** at **50%**. The LFO and Phaser will fight each other, creating "interstellar" glitchy sweeps.
5. **The Distortion:**
   - Add **Distortion** at **30%** to "crunch" the jagged filter movements together.

## 🔄 Variations
- **The "FM" Simulation:** Turn the **LFO Rate** to its absolute maximum. This will modulate the filter so fast it creates audible "sidebands" (FM-like growl).
- **The "Dying Robot":** Automate the **LFO Rate** to slowly decrease while the **Feedback** is at max.

## ⚠️ Pitfalls & Fixes
- **Problem:** The sound is too "random" and annoying.
- **Fix:** Lower the **LFO Amount** in the Filter tab. You only want a little bit of the glitch to "tease" the listener.
- **Problem:** No rhythmic sense.
- **Fix:** Ensure the **Rate** knob is snapped to your project tempo.

## 🎚️ Automation Ideas
- **Feedback Spike:** Automate the **LFO Feedback** to jump to 100% for exactly one bar during a transition.
- **Wobble Morph:** Automate the **LFO Width** from 0 to 100% to change the rhythm from "Staccato" to "Legato."

```

---

## FILE: 03-Workflows\by-goal\lush-trance-leads.md

```markdown
# Workflow: Lush Trance Leads (SuperSaw Mastery)

*Goal: Creating a massive, wide, and energetic lead synth using the 8-voice SuperSaw engine of MiniSynth.*

## Vibe Mapping
- **Upbeat:** ⭐⭐⭐⭐⭐ (Primary)
- **Psychedelic:** ⭐⭐⭐⭐
- **Vibey:** ⭐⭐⭐

## 🚶 Step-by-Step Setup
1. **The Engine:**
   - Select the **SuperSaw** waveform icon.
2. **The Spread (Modifier):**
   - Turn the **Modifier** knob to **70–90%**. This detunes the 8 voices, creating that signature "wall of sound" width.
3. **The Envelopes:**
   - **Amp Env:** Set **Attack** to 0 (Instant). Set **Release** to moderate (for smooth note endings).
4. **The Filters:**
   - Keep the **Filter Cutoff** wide open (100%) for maximum brightness.
5. **The Layered FX (The Glue):**
   - Go to the **FX Tab**.
   - **Chorus:** Turn it up to **50%**. This adds an extra layer of "ensemble" thickness.
   - **Delay:** Set to a rhythmic division (e.g. 1/4) and increase **Feedback** to fill the stereo field.
   - **Phaser:** (Optional) Add a slow phaser at **20%** to add "swirling" motion to the supersaw.
6. **Mastering the Lead:**
   - Set **Glide** to a low value (10-20%) so that fast melodies have a slight "fluid" connection.

## 🔄 Variations
- **The "Plucky" Saw:** Go to the **Filter Tab**, lower **Cutoff** to 20%, and increase **Env Amount** to 80% with a very fast **Filter Decay**.
- **The "Broken" Lead:** Use the **LFO** to modulate the **Pitch** (Width knob) at a high rate.

## ⚠️ Pitfalls & Fixes
- **Problem:** CPU is spiking (especially on mobile).
- **Fix:** SuperSaw is the most expensive mode. Use a standard **Saw** mode or lower the number of notes you play at once.
- **Problem:** The sound is "piercing."
- **Fix:** Lower the **Resonance** in the Filter tab.

## 🎚️ Automation Ideas
- **Detune Build:** Automate the **Modifier** knob to go from 0% to 100% during a riser.
- **Phaser Sweep:** Slowly automate the **Phaser Depth** to bring the "swirl" in and out.

```

---

## FILE: 03-Workflows\by-instrument\01-lead-workflow.md

```markdown
# MiniSynth Lead Workflow

## Sound Profile
Smooth, versatile lead for G-Funk, R&B, and soulful productions.

## Recommended Preset
`genre/01-g-funk-lead.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator | Sine, 0 octave, 100% | Core tone |
| Filter | Lowpass, 2800Hz, Res 15, Drive 5 | Softness |
| Envelope | A:50, D:300, S:80, R:400 | Smooth |
| LFO | Sine, 0.2Hz, 10% to Filter | Movement |

## Chain Processing
`\`\`
MiniSynth → Soft Clipper (1dB)
  → Fruily Reverb 2
  - Plate, Decay 1.5s, Mix 15%
  → Fruily Compressor (Soft knee)
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More modern | Add triangle wave at 50% |
| Warmer | Reduce filter cutoff to 2500Hz |
| Brighter | Increase filter cutoff to 3200Hz |
| More movement | Increase LFO to 15% |

## Genre Variations
- **G-Funk:** Sine wave, moderate filter, slow LFO
- **Modern R&B:** Add triangle, brighter filter
- **Soul:** Softer attack, longer release

```

---

## FILE: 03-Workflows\by-instrument\02-bass-workflow.md

```markdown
# MiniSynth Bass Workflow

## Sound Profile
Smooth, warm bass for R&B and melodic productions.

## Recommended Preset
`genre/02-rnb-smooth-bass.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator | Triangle, -1 octave, 100% | Warmth |
| Filter | Lowpass, 1500Hz, Res 20, Drive 8 | Character |
| Envelope | A:20, D:200, S:75, R:300 | Groove |
| LFO | Sine, 0.3Hz, 15% to Pan | Rhythm |

## Chain Processing
`\`\`
MiniSynth → Fruily Compressor
  - Ratio 2:1, Attack 15ms, Release 100ms
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Add sine wave at 30% |
| More punch | Increase filter resonance to 25% |
| Warmer | Increase filter drive to 12% |
| Cleaner | Reduce filter drive to 5% |

## Genre Variations
- **R&B:** Triangle wave, warm filter
- **Soul:** Softer attack, slower LFO
- **Hip-Hop:** Faster LFO, more punch

```

---

## FILE: 03-Workflows\by-instrument\03-pad-workflow.md

```markdown
# MiniSynth Pad Workflow

## Sound Profile
Warm, atmospheric pad for ambient and cinematic productions.

## Recommended Preset
`genre/06-warm-pad.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Oscillator | Triangle, -1 octave, Detune 5, Mix 85% | Body |
| Filter | Lowpass, 2000Hz, Res 15, Drive 5 | Softness |
| Envelope | A:300, D:500, S:85, R:800 | Slow |
| LFO | Sine, 0.1Hz, 25% to Pan | Movement |

## Chain Processing
`\`\`
MiniSynth → Fruily Reverb 2
  - Cathedral, Decay 4s, Mix 25%
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| Wider | Increase detune to 8 cents |
| Warmer | Reduce filter cutoff to 1800Hz |
| Brighter | Increase filter cutoff to 2500Hz |
| More movement | Increase LFO to 35% |

## Genre Variations
- **Cinematic:** Long attack, long release
- **Ambient:** Slower LFO, darker filter
- **Chill:** Softer reverb, shorter release

```

---

## FILE: 03-Workflows\by-instrument\05-synth-pluck-presets.md

```markdown
# Synth Pluck Presets

## Overview
Synth plucks are short, percussive sounds created with fast envelopes and resonant filters. Perfect for melodies, arpeggios, and rhythmic patterns.

---

## Preset 1: Digital Pluck

### Parameters
| Parameter | Value |
|-----------|-------|
| Wave | Sine |
| Octave | 0 |
| Modifier | N/A |
| Cutoff | 5500 Hz |
| Resonance | 65% |
| Attack | 1 ms |
| Decay | 80 ms |
| Sustain | 0% |
| Release | 40 ms |

### Characteristics
- Bright, clicky attack
- Fast decay
- Pure digital character

### Best For
- Arpeggios
- Digital melodies
- Rhythmic patterns

### Workflow Tips
- Program short notes
- Use velocity for dynamics
- Layer with reverb

---

## Preset 2: Retro Pluck

### Parameters
| Parameter | Value |
|-----------|-------|
| Wave | Triangle |
| Octave | 0 |
| Modifier | N/A |
| Cutoff | 4200 Hz |
| Resonance | 55% |
| Attack | 2 ms |
| Decay | 120 ms |
| Sustain | 10% |
| Release | 60 ms |

### Characteristics
- Warm retro feel
- Slightly longer decay
- Classic 80s character

### Best For
- Retro melodies
- Chiptune
- Nostalgic leads

### Workflow Tips
- Add chorus for width
- Layer with electric piano
- Use in ballads

---

## Preset 3: Metallic Pluck

### Parameters
| Parameter | Value |
|-----------|-------|
| Wave | Saw |
| Octave | 0 |
| Modifier | 70% |
| Cutoff | 3800 Hz |
| Resonance | 70% |
| Attack | 1 ms |
| Decay | 100 ms |
| Sustain | 5% |
| Release | 50 ms |

### Characteristics
- Harsh, metallic tone
- High resonance
- Unique character

### Best For
- Experimental music
- Industrial
- Unique accents

### Workflow Tips
- Use sparingly
- Layer with warmer sounds
- Add reverb for atmosphere

---

## Preset 4: Soft Pluck

### Parameters
| Parameter | Value |
|-----------|-------|
| Wave | Sine |
| Octave | 0 |
| Modifier | N/A |
| Cutoff | 6000 Hz |
| Resonance | 45% |
| Attack | 5 ms |
| Decay | 150 ms |
| Sustain | 15% |
| Release | 80 ms |

### Characteristics
- Gentle, smooth attack
- Warmer decay
- Mellow character

### Best For
- Soft ballads
- Acoustic-style leads
- Gentle melodies

### Workflow Tips
- Use with light reverb
- Layer with acoustic guitar
- Use for emotional passages

---

## Preset 5: Acid Pluck

### Parameters
| Parameter | Value |
|-----------|-------|
| Wave | Saw |
| Octave | 0 |
| Modifier | 50% |
| Cutoff | 2000 Hz |
| Resonance | 85% |
| Attack | 1 ms |
| Decay | 80 ms |
| Sustain | 25% |
| Release | 40 ms |

### Characteristics
- Squelchy resonance
- Acid character
- Classic TB-303 style

### Best For
- Techno patterns
- Acid lines
- Rhythmic accents

### Workflow Tips
- Program 16th notes
- Use slide between notes
- Vary note lengths

---

## Related Documentation

- [MiniSynth By-Instrument INDEX](../INDEX.md)
- [MiniSynth Presets INDEX](../../02-Data/presets/INDEX.md)
- [Pluck Workflows](../02-pluck-workflow.md)

```

---

## FILE: 03-Workflows\by-instrument\06-chord-stab-presets.md

```markdown
# Chord Stab Presets

## Overview
Chord stabs are short, punchy chords used for rhythmic emphasis. Essential for hip-hop, trap, and modern production.

---

## Preset 1: Standard Chord Stab

### Parameters
| Parameter | Value |
|-----------|-------|
| Wave | Triangle |
| Octave | 0 |
| Modifier | N/A |
| Cutoff | 4500 Hz |
| Resonance | 40% |
| Attack | 3 ms |
| Decay | 180 ms |
| Sustain | 20% |
| Release | 100 ms |

### Characteristics
- Clean, punchy chords
- Standard feel
- Versatile application

### Best For
- Hip-hop chord progressions
- Trap stabs
- General chord work

### Workflow Tips
- Stack 3-4 notes per chord
- Sync to kick pattern
- Add compression

---

## Preset 2: Warm Chord Stab

### Parameters
| Parameter | Value |
|-----------|-------|
| Wave | Triangle + Sine |
| Octave | 0 |
| Modifier | N/A |
| Cutoff | 3500 Hz |
| Resonance | 25% |
| Attack | 5 ms |
| Decay | 250 ms |
| Sustain | 30% |
| Release | 150 ms |

### Characteristics
- Warm, smooth feel
- Mellow character
- Classic R&B sound

### Best For
- R&B ballads
- Soulful chords
- Smooth productions

### Workflow Tips
- Layer with pads
- Use light reverb
- Compress for glue

---

## Preset 3: Bright Chord Stab

### Parameters
| Parameter | Value |
|-----------|-------|
| Wave | Saw |
| Octave | 0 |
| Modifier | 30% |
| Cutoff | 5500 Hz |
| Resonance | 35% |
| Attack | 2 ms |
| Decay | 150 ms |
| Sustain | 25% |
| Release | 80 ms |

### Characteristics
- Cutting, bright chords
- Present in mix
- Modern sound

### Best For
- EDM chords
- Pop productions
- Festival sections

### Workflow Tips
- Use for drops
- Layer with leads
- Add sidechain

---

## Preset 4: Dark Chord Stab

### Parameters
| Parameter | Value |
|-----------|-------|
| Wave | Saw |
| Octave | -1 |
| Modifier | 40% |
| Cutoff | 2800 Hz |
| Resonance | 50% |
| Attack | 4 ms |
| Decay | 200 ms |
| Sustain | 20% |
| Release | 120 ms |

### Characteristics
- Deep, dark feel
- Moody atmosphere
- Trap/hip-hop sound

### Best For
- Dark trap
- Moody hip-hop
- Atmospheric sections

### Workflow Tips
- Use minor chords
- Layer with 808s
- Add reverb for depth

---

## Preset 5: Lo-Fi Chord Stab

### Parameters
| Parameter | Value |
|-----------|-------|
| Wave | Triangle |
| Octave | 0 |
| Modifier | N/A |
| Cutoff | 4000 Hz |
| Resonance | 45% |
| Attack | 8 ms |
| Decay | 300 ms |
| Sustain | 40% |
| Release | 200 ms |

### Characteristics
- Worn, dusty feel
- Nostalgic character
- Vintage warmth

### Best For
- Lo-fi hip-hop
- Dusty beats
- Nostalgic productions

### Workflow Tips
- Add bit crusher
- Use tape saturation
- Layer with vinyl noise

---

## Related Documentation

- [MiniSynth By-Instrument INDEX](../INDEX.md)
- [MiniSynth Presets INDEX](../../02-Data/presets/INDEX.md)

```

---

## FILE: 04-Reference\lfo-feedback-mechanics.md

```markdown
# Technical Reference: LFO Feedback Mechanics

Understanding the most unique parameter in MiniSynth. [SRC: IL-MAN]

## 1. What is LFO Feedback?
In most synthesizers, an LFO (Low-Frequency Oscillator) has a fixed shape (Sine, Triangle, Square). It moves from Point A to Point B at a consistent rate.
**LFO Feedback** allows the current value of the LFO to influence its *own* future value.

## 2. The Effect on the Waveform
- **At 0% Feedback:** The LFO is a standard, clean shape. The modulation is predictable and smooth.
- **At 50% Feedback:** The shape begins to "skew" or "distort." A triangle wave might start to look like a sawtooth or a curved pulse.
- **At 100% Feedback:** The LFO becomes highly non-linear and "chaotic." It creates jagged, multi-stage modulation patterns that sound like complex sequences or glitchy "sample-and-hold" steps.

---

## 3. Practical Interaction with "Width"
The **Width** knob in the LFO tab controls the duty cycle or the "duty cycle balance" of the LFO shape.
- When **Feedback** is high, the **Width** knob acts as a "Complexity" control.
- Small changes in Width will cause the chaotic feedback loop to settle into different "stable" rhythmic patterns.

---

## 4. Why use it?
- **Unique Rhythms:** It allows MiniSynth to create "pseudo-sequences" without needing a dedicated step sequencer.
- **Organic Movement:** Even at low settings (10–20%), feedback adds a "jitter" or "humanity" to the modulation that feels less mechanical.
- **Texture Generation:** At audio rates (Max Rate), LFO Feedback creates rich, noisy harmonic sidebands that are excellent for "lo-fi" and "industrial" sound design.

---
*For a practical guide on using these mechanics, see the [03-Workflows/by-goal/glitchy-lfo-effects.md](../03-Workflows/by-goal/glitchy-lfo-effects.md) guide.*

```

---

