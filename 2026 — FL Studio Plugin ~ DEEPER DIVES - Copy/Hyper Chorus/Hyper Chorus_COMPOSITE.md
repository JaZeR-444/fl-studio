# Hyper Chorus - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 00-START-HERE.md

```markdown
# Hyper Chorus: Start Here

Welcome to the **Hyper Chorus** Deeper Dive. This plugin is FL Studio's powerhouse for high-density modulation, capable of everything from subtle vocal widening to aggressive metallic textures.

## 🗺️ Quick Navigation Guide

### 1. The Essentials (Start Here)
- **[README.md](./README.md):** The central hub for research goals and priorities.
- **[01-Learning/Quick-Reference/parameter-cheat-sheet.md](./01-Learning/Quick-Reference/parameter-cheat-sheet.md):** A 2-minute breakdown of every knob and pad.
- **[01-Learning/Quick-Reference/hyper-chorus-vs-fruity-chorus.md](./01-Learning/Quick-Reference/hyper-chorus-vs-fruity-chorus.md):** When to use this over the classic Fruity Chorus.

### 2. Core Concepts
- **[01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md](./01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md):** Understanding the triple X-Y pad architecture.
- **[01-Learning/Concepts/03_Vibe_Translation_Guide.md](./01-Learning/Concepts/03_Vibe_Translation_Guide.md):** How to dial in Moody, Upbeat, and Psychedelic vibes.

### 3. Workflow Recipes
- **[03-Workflows/by-goal/lush-choir-vocals.md](./03-Workflows/by-goal/lush-choir-vocals.md):** Thickening vocals without mud.
- **[03-Workflows/by-goal/supersaw-thickener.md](./03-Workflows/by-goal/supersaw-thickener.md):** Creating massive synth leads.
- **[03-Workflows/by-goal/metallic-glitch-textures.md](./03-Workflows/by-goal/metallic-glitch-textures.md):** Using feedback for industrial resonance.

## 🚀 Rapid Success Protocol
1. **Load a Pad or Vocal.**
2. **Switch to 8 Voices.**
3. **Set HP Filter to 300Hz** (to protect your mix).
4. **Use Pad 2 (Modulation)** to find the right "wobble" speed.
5. **Use Pad 3 (Movement)** to add subtle stereo drift.

---
*For technical specs and parameter data, see the [02-Data/](./02-Data/) folder.*

```

---

## FILE: README.md

```markdown
# Hyper Chorus - Extreme Multi-Voice Modulation

`\`\`
██╗  ██╗██╗   ██╗██████╗ ███████╗██████╗      ██████╗██╗  ██╗ ██████╗ ██████╗ ██╗   ██╗███████╗
██║  ██║╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗    ██╔════╝██║  ██║██╔═══██╗██╔══██╗██║   ██║██╔════╝
███████║ ╚████╔╝ ██████╔╝█████╗  ██████╔╝    ██║     ███████║██║   ██║██████╔╝██║   ██║███████╗
██╔══██║  ╚██╔╝  ██╔═══╝ ██╔══╝  ██╔══██╗    ██║     ██╔══██║██║   ██║██╔══██╗██║   ██║╚════██║
██║  ██║   ██║   ██║     ███████╗██║  ██║    ╚██████╗██║  ██║╚██████╔╝██║  ██║╚██████╔╝███████║
╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚══════╝╚═╝  ╚═╝     ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
`\`\`

**Plugin Type:** Multi-Tap Chorus / Ensemble
**Category:** Effect / Modulation
**Official Manual:** [Image-Line Hyper Chorus Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Hyper%20Chorus.htm)

---

## 🎯 What is Hyper Chorus?

Hyper Chorus is a "high-density" modulation effect designed to create massive stereo width and thick ensemble textures. Unlike standard chorus, it uses up to **8 delay lines** simultaneously. It is the secret weapon for creating "Super Saws," widening mono vocals into a lush choir, or adding aggressive "movement" to static pads using its unique triple X-Y pad interface.

**Key Capabilities:**
- **8-Voice Architecture:** Choose between 4 or 8 independent delay lines.
- **Triple X-Y Pads:** Visual control over Delay/Feedback, Modulation, and Movement.
- **Auto-Panning:** Built-in spatial movement within the chorus algorithm.
- **Tone Shaping:** Integrated High Pass and Low Pass filters for the wet signal.
- **Texture Noise:** Built-in white noise generator for adding "grit" to the shimmer.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **hyper-chorus-vs-fruity-chorus.md**
3. Create **parameter-cheat-sheet.md**
4. Set voices to "8," increase "Feedback" via the first X-Y pad, and hear the metallic resonance.

### For Sound Designers:
1. Study **creating-supersaw-ensembles.md**
2. Review **metallic-resonator-fx.md** (High feedback tricks)
3. Learn **movement-pad-panning.md**

### For Mix Engineers:
1. Study **vocal-ensemble-thickening.md**
2. Review **keeping-low-end-clean.md** (Using the HP filter)

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **X-Y Pad 1:** Delay Time & Feedback.
  - **X-Y Pad 2:** Modulation Rate & Amount.
  - **X-Y Pad 3:** Movement (Auto-Pan) Speed.
  - **Voices Switch:** 4 vs 8 lines.
  - **Filter Knobs:** HP/LP wet controls.

- [ ] **hyper-chorus-vs-fruity-chorus.md**
  - **Fruity Chorus:** Subtle, 3 voices, simple controls.
  - **Hyper Chorus:** Aggressive, 8 voices, X-Y vector control, auto-panning.

#### 02-Data/parameters/
- [ ] **hyper-chorus-params.json**
  `\`\`json
  {
    "plugin_name": "Hyper Chorus",
    "category": "Modulation",
    "parameters": [
      {
        "name": "Noise",
        "type": "knob",
        "description": "Adds white noise to the wet path",
        "use_cases": ["lo-fi shimmer", "texturing"]
      }
    ]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **lush-choir-vocals.md**
  - 8 Voices enabled.
  - Moderate Modulation Amount.
  - High Pass filter set to 300Hz to remove mud.
  - Slow "Movement" for gentle stereo drift.

- [ ] **supersaw-thickener.md**
  - Short Delay times (Pad 1 Left).
  - High Modulation Amount (Pad 2 Right).
  - Fast Rate for aggressive detune.

- [ ] **metallic-glitch-textures.md**
  - Max Feedback (Pad 1 Top).
  - High Noise level.
  - Creating resonant "ringing" artifacts.

#### 03-Workflows/by-context/
- [ ] **rhodes-widening-chain.md**
- [ ] **techno-synth-ensemble.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **lfo-phase-offset-theory.md**
  - How Hyper Chorus staggers the 8 delay lines across the LFO cycle for maximum density.

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Pad Mastery

**Tasks:**
1. Put Hyper Chorus on a simple Sawtooth chord
2. Drag the target in Pad 2 (Modulation) and hear the detuning
3. Switch between 4 and 8 voices
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does the "Mono" button affect the output width?
- Does "Feedback" cause self-oscillation?

### Phase 2: Spatial Design (Week 2)
**Goal:** The Movement Pad

**Tasks:**
1. Use Pad 3 to automate the spatial swirl
2. Use the built-in Noise knob to add texture to a pad
3. Create movement-pad-panning.md

---

## 📊 Plugin Specifications to Document

### Engine
- Delay Lines (4 or 8)
- Modulation Shapes (Sine/Saw?)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the sound "ringing"? (Feedback is too high on Pad 1).
2. How do I keep the Bass mono? (Use the built-in High Pass filter).

### Advanced Usage
1. How to create a "Dimension D" style subtle effect? (4 voices, low modulation, no feedback).

---

## 🔗 Cross-Reference with Other Plugins

Hyper Chorus is often used with:
- **Kepler/Kepler Exo** (Matching vintage synth character)
- **Fruity Flangus** (Alternative unison)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Hyper Chorus/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── hyper-chorus-vs-fruity-chorus.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── hyper-chorus-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── lush-choir-vocals.md
│   │   ├── supersaw-thickener.md
│   │   └── metallic-glitch-textures.md
│
└── 04-Reference/
    └── lfo-phase-offset-theory.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Hyper Chorus Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Hyper%20Chorus.htm)
- [Hyper Chorus Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Hyper_Chorus_tutorials.htm)
- [Hyper Chorus Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+hyper+chorus+tutorial)

### Community Resources
- [Hyper Chorus Subreddit](https://www.reddit.com/r/FL_Studio/search?q=hyper+chorus&restrict_sr=1)
- [Hyper Chorus User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Hyper Chorus Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for detailed audio analysis
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Parametric EQ 2** for tone shaping
- **Fruity Limiter** for monitoring output levels

### Recommended Learning Materials
- "Chorus and Ensemble Effects" - Understanding multi-voice modulation
- "Stereo Enhancement Techniques" - Advanced stereo field manipulation
- "Phase Relationships in Chorus" - Understanding delay and phase interactions

### Advanced Techniques
- **Multi-Voice Architecture:** Understanding the 8-voice chorus system
- **X-Y Pad Control:** Mastering the triple X-Y interface
- **Auto-Panning:** Using built-in spatial movement effectively

---

## 📚 In-Depth Technical Analysis

### Multi-Voice Architecture
Hyper Chorus implements a sophisticated multi-voice chorus system:
- **8 Independent Delay Lines:** Up to 8 separate delay paths
- **Phase Staggering:** Voices are staggered across the LFO cycle
- **Density Control:** Number of voices affects overall thickness
- **Real-time Processing:** Optimized for live performance
- **Low Latency:** Minimal processing delay

### Triple X-Y Pad System
The plugin features three distinct X-Y control surfaces:

**X-Y Pad 1 (Delay/Feedback):**
- **X-Axis:** Delay time control
- **Y-Axis:** Feedback amount
- **Function:** Controls the core delay characteristics
- **Effect:** Determines the resonance and metallic character
- **Interaction:** Affects the fundamental chorus tone

**X-Y Pad 2 (Modulation):**
- **X-Axis:** Modulation amount
- **Y-Axis:** Modulation rate
- **Function:** Controls the LFO characteristics
- **Effect:** Determines the detuning intensity and speed
- **Interaction:** Affects the chorus movement and thickness

**X-Y Pad 3 (Movement):**
- **X-Axis:** Auto-pan amount
- **Y-Axis:** Auto-pan speed
- **Function:** Controls spatial movement
- **Effect:** Creates stereo field movement
- **Interaction:** Affects the spatial characteristics

### Signal Processing Chain
The internal architecture processes audio as follows:
- **Input Stage:** Audio signal monitoring and routing
- **Voice Generation:** Creation of multiple delay lines
- **Modulation Processing:** Application of LFO modulation
- **Phase Staggering:** Staggering voices across LFO cycle
- **Filter Processing:** Application of HP/LP filters
- **Noise Integration:** Addition of built-in noise
- **Output Stage:** Final chorus signal routing

### Chorus Algorithm
The chorus algorithm creates thickness through:
- **Delay-Based Modulation:** Uses delay lines with modulation
- **Phase Relationships:** Maintains phase coherence between voices
- **Frequency Modulation:** Modulates delay times for chorus effect
- **Stereo Enhancement:** Creates width through stereo processing
- **Harmonic Preservation:** Maintains original harmonic content

### Voice Count Impact
The number of voices affects the sound significantly:
- **4 Voices:** Moderate thickness and width
- **8 Voices:** Maximum thickness and density
- **CPU Considerations:** More voices increase CPU usage
- **Quality Impact:** More voices create smoother chorus
- **Application Specific:** Different counts for different uses

## 🎛️ Parameter Deep Dive

### Voice Count Control
- **Function:** Selects the number of chorus voices
  - Range: 4 or 8 voices (binary selection)
  - Effect: Determines chorus density and thickness
  - Use for: Controlling chorus intensity
  - Pro tip: 8 voices for maximum thickness, 4 for moderate
- **Behavior:**
  - 4 voices: Lighter chorus effect, less CPU
  - 8 voices: Heavier chorus effect, more CPU
  - Pro tip: Use 8 voices for supersaw-style effects
- **Applications:**
  - Subtle enhancement: 4 voices for gentle chorus
  - Maximum thickness: 8 voices for dense chorus
  - Performance: 4 voices for CPU conservation
  - Creative effects: 8 voices for metallic textures
  - Pro tip: Match voice count to desired thickness

### X-Y Pad 1 (Delay/Feedback)
- **X-Axis (Delay Time):**
  - **Function:** Controls the base delay time for voices
    - Range: Short to long delay times
    - Effect: Determines the fundamental chorus character
    - Use for: Setting chorus tone and thickness
    - Pro tip: Short delays for subtle chorus, long for thick
  - **Behavior:**
    - Left: Short delay times, subtle chorus
    - Right: Long delay times, thick chorus
    - Pro tip: Use for fundamental chorus character
  - **Applications:**
    - Subtle chorus: Short delays for gentle effect
    - Thick chorus: Long delays for dense effect
    - Supersaw: Medium delays for sawtooth enhancement
    - Creative effects: Extreme delays for unique textures
    - Pro tip: Use for fundamental chorus tone

- **Y-Axis (Feedback):**
  - **Function:** Controls the feedback amount in delay lines
    - Range: Low to high feedback
    - Effect: Adds resonance and metallic character
    - Use for: Creating resonant chorus effects
    - Pro tip: Higher values create more resonance
  - **Behavior:**
    - Low: Clean chorus without resonance
    - High: Metallic, resonant chorus
    - Pro tip: Use for aggressive chorus effects
  - **Applications:**
    - Clean chorus: Low feedback for pure chorus
    - Metallic effects: High feedback for resonant textures
    - Supersaw: Medium feedback for sawtooth enhancement
    - Creative effects: Maximum feedback for unique textures
    - Pro tip: Use with caution to avoid harshness

### X-Y Pad 2 (Modulation)
- **X-Axis (Modulation Amount):**
  - **Function:** Controls the intensity of modulation
    - Range: Low to high modulation
    - Effect: Determines chorus depth
    - Use for: Setting chorus intensity
    - Pro tip: Higher values create more detuning
  - **Behavior:**
    - Low: Subtle modulation, gentle chorus
    - High: Strong modulation, aggressive chorus
    - Pro tip: Use for chorus intensity control
  - **Applications:**
    - Gentle chorus: Low modulation for subtle effect
    - Aggressive chorus: High modulation for strong effect
    - Supersaw: High modulation for sawtooth enhancement
    - Creative effects: Extreme modulation for unique textures
    - Pro tip: Use for chorus depth control

- **Y-Axis (Modulation Rate):**
  - **Function:** Controls the speed of modulation
    - Range: Slow to fast modulation
    - Effect: Determines chorus movement speed
    - Use for: Setting chorus movement
    - Pro tip: Slower rates for subtle movement
  - **Behavior:**
    - Low: Slow modulation, gentle movement
    - High: Fast modulation, rapid movement
    - Pro tip: Use for chorus movement control
  - **Applications:**
    - Gentle movement: Low rates for subtle movement
    - Fast movement: High rates for rapid movement
    - Supersaw: Medium rates for sawtooth enhancement
    - Creative effects: Extreme rates for unique textures
    - Pro tip: Use for chorus movement control

### X-Y Pad 3 (Movement)
- **X-Axis (Auto-Pan Amount):**
  - **Function:** Controls the stereo movement intensity
    - Range: Low to high auto-pan
    - Effect: Determines stereo field movement
    - Use for: Creating spatial movement
    - Pro tip: Higher values create more stereo movement
  - **Behavior:**
    - Low: Minimal stereo movement
    - High: Strong stereo movement
    - Pro tip: Use for spatial enhancement
  - **Applications:**
    - Subtle movement: Low values for gentle stereo movement
    - Strong movement: High values for pronounced stereo movement
    - Supersaw: Medium values for spatial enhancement
    - Creative effects: Extreme values for unique movement
    - Pro tip: Use for stereo field enhancement

- **Y-Axis (Auto-Pan Speed):**
  - **Function:** Controls the speed of stereo movement
    - Range: Slow to fast auto-pan
    - Effect: Determines stereo movement speed
    - Use for: Setting stereo movement pace
    - Pro tip: Slower rates for subtle movement
  - **Behavior:**
    - Low: Slow stereo movement
    - High: Fast stereo movement
    - Pro tip: Use for stereo movement control
  - **Applications:**
    - Gentle movement: Low rates for subtle stereo movement
    - Fast movement: High rates for rapid stereo movement
    - Supersaw: Medium rates for spatial enhancement
    - Creative effects: Extreme rates for unique movement
    - Pro tip: Use for stereo movement control

### Filter Controls
- **High Pass Filter:**
  - **Function:** Removes low frequencies from wet signal
    - Range: 20Hz to several kHz
    - Effect: Prevents low-end muddiness
    - Use for: Cleaning up chorus effect
    - Pro tip: Essential for bass-safe chorus
  - **Behavior:**
    - Low values: Preserve low-end
    - High values: Remove low-end
    - Pro tip: Use for bass management
  - **Applications:**
    - Bass safety: High values to protect low-end
    - Clean chorus: Medium values for clarity
    - Creative filtering: Variable values for tone
    - Mix integration: Adjust for appropriate clarity
    - Pro tip: Use to prevent low-end issues

- **Low Pass Filter:**
  - **Function:** Removes high frequencies from wet signal
    - Range: Several kHz to 20kHz
    - Effect: Tames harsh chorus artifacts
    - Use for: Smoothing chorus effect
    - Pro tip: Use for preventing harshness
  - **Behavior:**
    - Low values: Remove high-end, darker chorus
    - High values: Preserve high-end, brighter chorus
    - Pro tip: Use for brightness control
  - **Applications:**
    - Smooth chorus: Low values for gentle effect
    - Bright chorus: High values for clarity
    - Creative filtering: Variable values for tone
    - Mix integration: Adjust for appropriate brightness
    - Pro tip: Use to tame harshness

### Noise Control
- **Function:** Adds white noise to the wet signal
  - Range: 0-100% (typically)
  - Effect: Adds texture and grit to chorus
  - Use for: Adding character to chorus
  - Pro tip: Use sparingly for subtle enhancement
- **Behavior:**
  - 0%: No noise added
  - Low values: Subtle texture addition
  - High values: Noticeable noise content
  - Pro tip: Use for lo-fi or textured effects
- **Applications:**
  - Texture addition: Low values for subtle grit
  - Lo-fi effects: Medium values for vintage character
  - Creative effects: High values for unique textures
  - Experimental: Maximum values for noise-based effects
  - Pro tip: Use for adding character to chorus

## 🎼 Sound Design Applications

### Supersaw Enhancement
Using Hyper Chorus for classic supersaw sounds:

**Classic Supersaw Setup:**
- **Voice Count:** 8 voices for maximum thickness
- **Delay Settings:** Medium delay times for sawtooth enhancement
- **Modulation:** High amount and medium rate for detune
- **Movement:** Medium auto-pan for spatial enhancement
- **Essential:** For trance and electronic music
- **Perfect:** For classic supersaw sounds
- **Pro tip:** Use with sawtooth waves for authentic supersaw

**Advanced Supersaw Techniques:**
- **Feedback Control:** Using feedback for metallic resonance
  - Apply moderate feedback for resonance
  - Essential for aggressive supersaw sounds
  - Perfect for metallic textures
  - Pro tip: Use for classic supersaw resonance
- **Modulation Shaping:** Shaping modulation for character
  - Use appropriate modulation rates
  - Essential for natural supersaw movement
  - Perfect for evolving supersaw sounds
  - Pro tip: Use for authentic supersaw character

### Vocal Enhancement
Using Hyper Chorus for vocal processing:

**Choir Simulation:**
- **Voice Count:** 8 voices for maximum thickness
- **Delay Settings:** Short delays for natural chorus
- **Modulation:** Low to medium amount for naturalness
- **Movement:** Low auto-pan for subtle movement
- **Essential:** For vocal thickening
- **Perfect:** For choir-like effects
- **Pro tip:** Use for natural vocal enhancement

**Vocal Widening:**
- **Spatial Enhancement:** Using auto-pan for width
  - Apply appropriate auto-pan settings
  - Essential for vocal width
  - Perfect for spacious vocals
  - Pro tip: Use with high-pass filtering to prevent low-end issues
- **Thickness Addition:** Adding thickness without harshness
  - Use moderate settings for naturalness
  - Essential for vocal enhancement
  - Perfect for fuller vocals
  - Pro tip: Use for subtle vocal thickening

### Creative Applications
Using Hyper Chorus for experimental effects:

**Metallic Textures:**
- **Resonant Effects:** Creating metallic and resonant textures
  - Use high feedback settings for resonance
  - Apply appropriate delay times
  - Essential for metallic effects
  - Perfect for industrial sounds
  - Pro tip: Use for aggressive metallic textures

**Spatial Movement:**
- **Auto-Pan Effects:** Creating evolving spatial movement
  - Use auto-pan for stereo field movement
  - Apply appropriate speed settings
  - Essential for spatial enhancement
  - Perfect for evolving textures
  - Pro tip: Use for immersive spatial effects

**Experimental Chorus:**
- **Extreme Settings:** Pushing chorus parameters beyond normal
  - Use extreme settings for unique effects
  - Apply creative parameter combinations
  - Essential for experimental sounds
  - Perfect for unique textures
  - Pro tip: Use for creative sound design

## 🧪 Experimental Techniques

### Advanced Chorus Applications
Creative uses of Hyper Chorus's multi-voice capabilities:

**Multi-Voice Manipulation:**
- **Voice-Specific Processing:** Creating different processing for different voices
  - Use automation to change voice characteristics
  - Create evolving chorus patterns
  - Perfect for evolving textures
  - Essential for sophisticated chorus design
  - Useful for complex chorus effects

**Phase Staggering Effects:**
- **LFO Staggering:** Using phase staggering for complex effects
  - Leverage the built-in phase staggering
  - Create complex modulation patterns
  - Perfect for sophisticated chorus effects
  - Essential for advanced chorus design
  - Useful for evolving textures

**Spatial Enhancement:**
- **3D Chorus Effects:** Creating immersive spatial effects
  - Use auto-pan with other parameters
  - Create evolving spatial patterns
  - Perfect for immersive effects
  - Essential for spatial chorus design
  - Useful for evolving spatial textures

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **X-Y Pad Automation:** Automating X-Y pad positions for evolving effects
  - Create evolving chorus characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic chorus expression
  - Use for expressive chorus control

**Modulation Applications:**
- **Parameter Modulation:** Using external modulation sources
  - Modulate with envelope followers
  - Combine with other modulation sources
  - Create complex modulation chains
  - Perfect for evolving sounds
  - Use for dynamic expression

**Multi-Stage Processing:**
- **Complex Chorus Enhancement:** Multiple processing stages for sophisticated effects
  - Create multi-stage chorus enhancement
  - Apply different processing to different stages
  - Build sophisticated chorus processing chains
  - Perfect for advanced sound design
  - Use for complex chorus processing

## 🎚️ Workflow Optimization

### Chorus Setup Workflows
Efficient approaches to using Hyper Chorus for chorus effects:

**Supersaw Creation:**
- **Classic Setup:** Creating the classic supersaw sound
  - Use 8 voices for maximum thickness
  - Apply appropriate delay and modulation settings
  - Essential for trance and electronic music
  - Pro tip: Use with sawtooth waves for authentic supersaw

- **Modern Supersaw:** Creating contemporary supersaw sounds
  - Use advanced settings for modern character
  - Apply appropriate feedback and movement
  - Essential for modern electronic music
  - Pro tip: Use for contemporary supersaw sounds

**Vocal Enhancement:**
- **Natural Chorus:** Creating natural-sounding vocal chorus
  - Use moderate settings for naturalness
  - Apply appropriate filtering to prevent muddiness
  - Essential for vocal enhancement
  - Pro tip: Use 4 voices for subtle vocal chorus

- **Thickening Effects:** Adding thickness to vocals
  - Use appropriate voice count for thickness
  - Apply subtle modulation for naturalness
  - Essential for vocal enhancement
  - Pro tip: Use for fuller vocal sounds

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
- **Supersaw Leads:** Creating classic trance lead sounds
- **Bass Enhancement:** Adding thickness to bass sounds
- **Spatial Enhancement:** Adding width to electronic elements
- **Energy Management:** Using chorus for track energy
- **Build-up Effects:** Creating tension with chorus automation

### Hip-Hop and R&B
- **Vocal Enhancement:** Adding subtle chorus to vocals
- **Synth Processing:** Adding character to synth sounds
- **Mix Enhancement:** Using chorus for mix clarity
- [ ] Create a wide, 8-voice ensemble from a mono lead
- [ ] Use the internal filters to clean up a "shimmer" reverb-style effect
- [ ] Explain why Hyper Chorus sounds "thicker" than standard chorus
- [ ] Create an evolving auto-pan effect using only the plugin's internal movement pad
- [ ] Set up a classic supersaw sound with 8 voices and appropriate modulation
- [ ] Apply appropriate feedback settings for metallic resonance
- [ ] Use the triple X-Y pads for complex chorus manipulation
- [ ] Create vocal choir effects with proper voice management
- [ ] Apply spatial movement using the auto-pan function
- [ ] Troubleshoot chorus artifacts and harshness issues effectively
- [ ] Integrate Hyper Chorus into efficient chorus workflows
- [ ] Create genre-specific chorus presets for different musical styles
- [ ] Optimize Hyper Chorus settings for minimal CPU usage
- [ ] Use Hyper Chorus for creative sound design applications
- [ ] Set up advanced chorus routing for complex projects
- [ ] Apply Hyper Chorus in live performance scenarios
- [ ] Create experimental chorus effects with extreme settings
- [ ] Combine Hyper Chorus with other effects for layered processing
- [ ] Integrate Hyper Chorus with other automation tools seamlessly
- [ ] Create custom chorus workflows for specific creative needs
- [ ] Use Hyper Chorus effectively in large, complex projects
- [ ] Generate complex rhythmic patterns with parameter automation
- [ ] Create hybrid chorus effects combining different approaches
- [ ] Apply Hyper Chorus in mastering contexts with appropriate care
- [ ] Create complex multi-stage chorus chains with smooth automation
- [ ] Design custom chorus patches for specific musical contexts
- [ ] Use Hyper Chorus for creative vocal processing applications
- [ ] Apply advanced spatial movement techniques for width control
- [ ] Create genre-specific chorus presets for efficient workflow
- [ ] Integrate Hyper Chorus with external hardware for hybrid processing
- [ ] Use Hyper Chorus for audio restoration and creative repair applications
- [ ] Combine Hyper Chorus with other spatial processing tools
- [ ] Apply Hyper Chorus in surround sound or multi-channel setups
- [ ] Create complex spatial relationships using multiple parameters
- [ ] Use Hyper Chorus for creative instrumental processing applications
- [ ] Integrate Hyper Chorus with other automation tools for complex control
- [ ] Create complex atmospheric textures using multiple parameters
- [ ] Design custom chorus algorithms for unique characteristics
- [ ] Apply advanced filtering techniques for tone shaping
- [ ] Use Hyper Chorus for creative stereo enhancement beyond traditional methods
- [ ] Combine Hyper Chorus with convolution for hybrid effects
- [ ] Implement advanced envelope shaping for dynamic expression
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use Hyper Chorus for creative sound design in film and game audio
- [ ] Apply Hyper Chorus in live sound reinforcement scenarios
- [ ] Create experimental chorus textures using extreme parameter settings
- [ ] Integrate Hyper Chorus with external processors for complex sound design

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is and When to Use: Hyper Chorus

## Purpose and Identity
**Hyper Chorus** is a high-density, multi-voice modulation effect introduced in FL Studio 21.1. Unlike traditional chorus effects (which typically use 2–3 delay lines), Hyper Chorus utilizes up to **8 independent delay lines** to create massive stereo width, lush ensemble textures, and aggressive detuning. It is defined by its triple X-Y pad interface, which allows for intuitive, visual control over complex modulation parameters. [SRC: IL-MAN], [SRC: RELNOTE]

## The 60-Second Mental Model
Imagine a single sound source being duplicated 8 times. Each "clone" is slightly delayed and its pitch is constantly wobbling (modulated) at different speeds and phases. Hyper Chorus then takes these 8 clones and spreads them across the stereo field, even making them move (pan) automatically. The result is a sound that feels "huge," "thick," and "alive."

## Typical Roles in a Session
- **Width Generator:** Transforming mono sources (like a single vocal or lead) into wide, stereo landscapes.
- **Thickener:** Adding "meat" to thin synth leads or weak pads.
- **Resonator:** Using high feedback settings to create metallic, robotic, or "ringing" textures.
- **Movement Tool:** Adding rhythmic or evolving stereo motion to static sounds.

## Hip-Hop/R&B Context
In modern production, Hyper Chorus is a "vibe" utility:
- **Melodic Bus:** Apply to a piano or Rhodes bus to get that "underwater" or "dreamy" R&B texture.
- **Vocal Chain:** Use on background vocals or "ad-libs" to separate them from the dry main vocal.
- **Drum Bus (Parallel):** Very subtle use on hats or percussion to add "shimmer."
- **Sample Processing:** Great for making a dry, 1-bar loop feel more "sampled" and "vintage" by adding slight pitch instability.

## When to Use vs. When NOT to Use
| Use It When... | Avoid It When... |
| :--- | :--- |
| You want a "Super Saw" or massive ensemble sound. | You need to maintain absolute phase coherence (e.g., on a sub-bass). |
| You need a sound to feel "3D" and spacious. | You want a subtle, vintage "Stompbox" chorus feel (use Fruity Chorus or Vintage Chorus instead). |
| You are creating "ear candy" with automated movement. | The sound is already too "busy" in the stereo field. |
| You want to add "grit" using the built-in Noise knob. | You need a clean, pristine mix with zero added noise. |

## Why it's "Hyper"
- **Density:** 8 voices vs. the standard 3.
- **Control:** Triple X-Y pads replace tedious knob-turning.
- **Integration:** Built-in HP/LP filters mean you don't need a separate EQ to keep your low end clean.
- **Stereo Focus:** Built-in "Movement" pad for auto-panning.
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map and Signal Flow: Hyper Chorus

## UI Tour
The Hyper Chorus interface is dominated by three large X-Y pads, designed for "visual mixing." [SRC: IL-MAN]

### 1. The X-Y Pads (The Core)
- **Pad 1 (Delay/Feedback):**
    - **X-Axis (Left/Right):** Delay Time. Shorter = tighter, flange-like; Longer = loose, ensemble-like.
    - **Y-Axis (Up/Down):** Feedback. Higher values create resonance and "ringing."
- **Pad 2 (Modulation):**
    - **X-Axis:** Modulation Amount (Depth). How far the pitch wobbles.
    - **Y-Axis:** Modulation Rate (Speed). How fast the pitch wobbles.
- **Pad 3 (Movement):**
    - **X-Axis:** Auto-Pan Amount. How wide the stereo movement is.
    - **Y-Axis:** Auto-Pan Speed. How fast the sound "swirls" between speakers.

### 2. Global Controls (Top/Right)
- **Voices (4/8):** Sets the density. 8 voices is the "Hyper" mode; 4 voices is more "Traditional."
- **Mono Button:** Forces the output to mono. Use this to check phase cancellation.
- **Noise Knob:** Adds white noise to the wet path. Great for lo-fi textures.
- **HP / LP Knobs:** High Pass and Low Pass filters for the *wet signal only*.

### 3. Mix Section (Bottom)
- **Mix Slider:** Dry/Wet balance.

---

## Signal Flow
1. **Input:** Dry audio enters.
2. **Split:** Signal splits into **Dry Path** and **Wet Path**.
3. **Voice Generation (Wet Path):** Input is cloned into 4 or 8 parallel delay lines.
4. **Modulation:** Each voice is assigned a unique phase offset of the internal LFO. The LFO modulates the delay time of each line independently (Phase Staggering). [SRC: RELNOTE]
5. **Feedback Loop:** Signal from the delay lines is fed back into the input of the delay lines based on the Feedback setting (Pad 1).
6. **Filtering:** The summed wet signal passes through the HP and LP filters.
7. **Noise Injection:** White noise is added to the wet signal path.
8. **Movement (Auto-Pan):** The wet signal is dynamically panned across the stereo field based on Pad 3 settings.
9. **Summing:** Dry and Wet paths are combined based on the Mix slider.
10. **Output:** Final processed audio.

---

## Things Beginners Misunderstand
- **"Why is it ringing?"** -> High Feedback (Pad 1, Y-axis) creates metallic resonance. Bring it down if you want a "natural" sound.
- **"It's making my bass disappear!"** -> Always use the **HP filter** (set to 200–400Hz) to keep the sub-frequencies dry and centered.
- **"What does 'Movement' do if I'm already in stereo?"** -> Movement is an *additional* auto-panner. If your sound is already wide, this will make it "dance" between the left and right channels.
- **"Voices 4 vs 8"** -> 8 voices isn't always "better." 4 voices can feel cleaner and more defined for simple leads.
- **Mono Check:** Always toggle the **Mono button** occasionally. Extreme 8-voice chorus can cause significant phase cancellation that makes the sound "disappear" on small mono speakers.
```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques and Best Practices: Hyper Chorus

## 1. The "Resonant Ring" (Metallic Textures)
By cranking the **Feedback** (Pad 1, Top) and shortening the **Delay Time** (Pad 1, Left), Hyper Chorus acts like a resonator.
- **Listen for:** A fixed metallic pitch that rings along with your sound.
- **Technique:** Use this on percussion or dry synth plucks to give them an "industrial" or "robotic" vibe.

## 2. Low-End Discipline (The HP Rule)
Chorus effects can destroy a mix by smearing the low end and creating phase issues.
- **Practice:** Always set the **HP filter** to at least **250Hz** for vocals and synths, and **500Hz+** for pads.
- **Why:** This ensures your kick and sub-bass remain solid and mono, while the "shimmer" and width happen only in the mids and highs.

## 3. The "Pseudo-Reverb" Wash
With 8 voices, long delay times (Pad 1, Right), and low modulation, you can create a sound similar to a short, lush room reverb.
- **Practice:** Set Mix to 40-50%. It creates a "halo" around the sound without the muddy tail of a traditional reverb.

## 4. Extreme Detuning (The "Sick" Vibe)
For psychedelic or "drunk" textures, push Pad 2 (Modulation) to the top right corner.
- **Technique:** Use this on a parallel bus for a piano. The extreme pitch wobble creates a "warped vinyl" or "lo-fi" effect that is very popular in R&B.

## 5. Movement Automation (Ear Candy)
Don't just set Pad 3 and forget it.
- **Practice:** Automate the **Movement Speed** (Pad 3, Y-axis) to increase during a build-up and slow down during the drop.
- **Listen for:** The stereo field expanding and contracting rhythmically.

## 6. Noise as a Texture Glue
The **Noise** knob isn't just for "hiss."
- **Technique:** Add 5–10% Noise to a clean synth. It "glues" the chorus voices together and makes the ensemble feel more like an analog unit.

## 7. The "Dimension" Trick (Subtle Width)
For a wide sound that doesn't feel "chorused":
- **Settings:** 4 Voices, Short Delay (Pad 1, Left), Moderate Modulation Amount (Pad 2, Bottom), Slow Rate.
- **Result:** Pure stereo expansion without the obvious "wobble."

## 8. Mono-Compatibility Check
- **Best Practice:** Regularly hit the **Mono button** on the UI. If your sound loses 80% of its volume or tone, your modulation is too aggressive. Back off the Modulation Amount (Pad 2, X-axis).

---

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **"Muddy Mix"** | Raise the HP filter knob to 300Hz+. |
| **"Nauseating Wobble"** | Lower the Modulation Rate (Pad 2, Y-axis). |
| **"Harsh Highs"** | Lower the LP filter knob to 5kHz–8kHz. |
| **"Lost in Mono"** | Reduce Modulation Amount; check phase. |
| **"Metallic Ringing"** | Lower the Feedback (Pad 1, Y-axis). |
```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Hyper Chorus

This guide maps the technical controls of Hyper Chorus to specific "vibe" targets for Hip-Hop, R&B, and Pop-Hip-Hop production.

---

## 1. MOODY
*Depth, darkness, weight, and subtle melancholy.*
- **The Mental Model:** An underwater landscape or a dark, rainy room.
- **Hyper Chorus Levers:**
    - **LP Filter:** Set to 1kHz – 3kHz to "muffle" the chorus and remove brightness.
    - **Voices:** 8 Voices (Density adds weight).
    - **Modulation Rate:** Very slow (Pad 2, Bottom).
    - **Delay Time:** Long (Pad 1, Right) to create a "trailing" sense of space.
    - **Noise:** 15-20% to add "film grain" grit.
- **Listen For:** A thick, dark "ghost" behind the main sound.
- **Pitfall:** Avoid high feedback; ringing sounds too "active" for a moody vibe.

## 2. UPBEAT
*Clarity, energy, punch, and controlled brightness.*
- **The Mental Model:** High-energy pop-rap or a bright, sunny club track.
- **Hyper Chorus Levers:**
    - **Voices:** 4 Voices (More clarity, less "smear").
    - **Modulation Rate:** Medium-Fast (Pad 2, Top) to create energy.
    - **HP Filter:** High (500Hz+) to keep only the "sparkle."
    - **Movement:** Fast speed (Pad 3, Top) to keep the stereo field active.
    - **Mix:** Low (15-25%) to preserve the dry punch of the transient.
- **Listen For:** "Sparkle" and "shimmer" on the edges of the sound.
- **Pitfall:** Don't use too much Modulation Amount; too much detune can sound "drunk" and lose the upbeat energy.

## 3. PSYCHEDELIC
*Motion, evolving textures, "trippy" detuning, and stereo animation.*
- **The Mental Model:** A hallucination or a morphing, liquid texture (Travis Scott / Mike Dean vibes).
- **Hyper Chorus Levers:**
    - **Modulation Amount:** Max (Pad 2, Right) for extreme detune.
    - **Feedback:** 40-60% (Pad 1, Center-Top) for resonant artifacts.
    - **Movement Pad:** Extreme Auto-Pan Amount (Pad 3, Right).
    - **Automation:** Automate the **Voices** switch or the **Rate** knob.
    - **Resampling Idea:** Bounce the chorused sound to Edison, then reverse it and run it through Hyper Chorus *again*.
- **Listen For:** Pitch instability and "swirling" that feels disorienting.
- **Pitfall:** Mono-compatibility is high risk here. Always check the Mono button.

## 4. JAZZY
*Dynamics, natural space, warmth, and "organic" feeling.*
- **The Mental Model:** A live ensemble in a small wooden room; sophisticated R&B/Neo-Soul.
- **Hyper Chorus Levers:**
    - **Voices:** 4 Voices (Sounds more like a "real" chorus unit).
    - **Modulation Rate:** Very slow (Pad 2, Bottom).
    - **Modulation Amount:** Low (Pad 2, Left).
    - **Delay Time:** Short (Pad 1, Left) to feel more "grounded."
    - **LP Filter:** 5kHz - 8kHz to take the "digital edge" off.
- **Listen For:** Subtle "motion" that feels like real musicians playing together.
- **Pitfall:** High feedback and built-in Noise are too "synthetic" for this vibe.

## 5. VIBEY
*Subtle movement, warmth, "expensive" sounding width, and ear-candy.*
- **The Mental Model:** That "smooth" modern R&B sound where everything feels expensive and lush.
- **Hyper Chorus Levers:**
    - **Movement:** Slow, wide auto-panning (Pad 3, Bottom Right).
    - **HP Filter:** 300Hz (Removes mud but keeps warmth).
    - **Voices:** 8 Voices (Luxurious density).
    - **Mix:** 30-40% (Blending for a "halo" effect).
    - **Modulation:** Slow rate, moderate amount.
- **Listen For:** A wide "wash" that makes the instrument feel like it's hugging the listener.
- **Pitfall:** Don't let the Movement speed get too fast; it should be a "drift," not a "shake."

---

## Vibe Check Matrix
| Vibe | Voices | HP Filter | LP Filter | Mod Rate | Mod Amount |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Moody** | 8 | Low | 1-3kHz | Slow | Moderate |
| **Upbeat** | 4 | High | Open | Fast | Low |
| **Psyched** | 8 | Mid | Open | Varies | High |
| **Jazzy** | 4 | Mid | 5-8kHz | Slow | Low |
| **Vibey** | 8 | Mid | Open | Slow | Moderate |
```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: 5 Minutes with Hyper Chorus

## 1. The "Safety First" Setup
Before you turn any pads:
- **Mix Slider:** Set to 100% (Wet) while you find the sound, then pull back to 30–50% for the mix.
- **HP Filter:** Set to **300Hz** immediately.
- **LP Filter:** Set to **12kHz** to avoid harsh digital "zaps."

## 2. Choose Your Density
- **4 Voices:** Use for "Clean," "Vocal Widening," or "Jazzy" vibes.
- **8 Voices:** Use for "Pads," "Super Saws," "Moody," or "Psychedelic" vibes.

## 3. Find Your Tone (Pad 1)
- **Classic Chorus:** Center-Left (Short delay, no feedback).
- **Ensemble Wash:** Bottom-Right (Long delay, no feedback).
- **Robot/Metallic:** Top-Left (Short delay, high feedback).

## 4. Set the "Wobble" (Pad 2)
- **Natural Drift:** Bottom-Left (Slow rate, low amount).
- **Standard Chorus:** Center (Moderate rate and amount).
- **Drunk/Psychedelic:** Top-Right (Fast rate, high amount).

## 5. Add Movement (Pad 3)
- **Static Width:** Center-Left (Low amount).
- **Slow Swirl:** Bottom-Right (High amount, slow speed).
- **Fast Spin:** Top-Right (High amount, fast speed).

## 6. The Final Polish
- **Noise:** Add 5% for "Vintage" feel.
- **Mono Check:** Toggle the "Mono" button. If the sound disappears, lower **Pad 2 (Mod Amount)**.
- **Mix:** Blend back to taste (usually 25–40% is the sweet spot).
```

---

## FILE: 01-Learning\Quick-Reference\01_Common_Mistakes.md

```markdown
# Common Mistakes: Hyper Chorus

## 1. The "Vanishing Act" (Phase Issues)
- **Mistake:** Using 8 voices with max Modulation Amount on a critical lead.
- **Symptom:** The sound sounds great in headphones but completely disappears on a phone or mono club system.
- **Fix:** Toggle the **Mono button** on the UI frequently. If the volume drops significantly, lower the Modulation Amount (Pad 2, X-axis).

## 2. "Muddy Floor" (Low-End Smear)
- **Mistake:** Leaving the HP filter off (all the way left).
- **Symptom:** Your Kick and Bass feel "weak" or "blurry" because the chorus is modulating the low frequencies.
- **Fix:** Always set the **HP filter to 200–400Hz**. Let the bass stay dry and mono.

## 3. "The Robot Hiss" (Feedback Overload)
- **Mistake:** Leaving Pad 1 in the top-half (High Feedback) when you want a natural sound.
- **Symptom:** A constant metallic ringing or "whistling" follows every note.
- **Fix:** Keep Pad 1 in the **Bottom half** for clean chorus effects.

## 4. "Dizzy Listener" (Over-Movement)
- **Mistake:** Setting Pad 3 (Movement) to high speed and high amount on every track.
- **Symptom:** The listener feels nauseous as every sound swirls independently.
- **Fix:** Use Movement sparingly. Usually, only one or two "ear candy" elements should have high movement.

## 5. "Static Noise"
- **Mistake:** Leaving the Noise knob up on a track that has a lot of silence.
- **Symptom:** You hear a constant hiss even when no music is playing.
- **Fix:** Use a Gate after Hyper Chorus, or automate the Noise knob (or the Mix slider) to zero when the instrument isn't playing.

## 6. "Mixing at 100% Wet"
- **Mistake:** Leaving the Mix slider at 100% for instruments that need to be "in your face."
- **Symptom:** The instrument feels distant and lacks impact.
- **Fix:** Chorus is a "blending" effect. Use **20% to 50% Mix** for most applications to keep the dry "punch" of the original sound.
```

---

## FILE: 01-Learning\Quick-Reference\02_Best_Settings_Starting_Points.md

```markdown
# Best Settings & Starting Points: Hyper Chorus

Use these as "templates" to dial in your sound quickly.

## 1. The "Wide Vocal" (R&B/Pop)
*Goal: Subtle width that doesn't sound "effected."*
- **Voices:** 4
- **Pad 1 (Delay/FB):** Bottom-Left (Short delay, no feedback)
- **Pad 2 (Mod):** Bottom-Left (Slow rate, low amount)
- **Pad 3 (Move):** Center-Left (Minimal movement)
- **HP Filter:** 350Hz
- **Mix:** 20%

## 2. The "Lush Pad" (Moody/Ambient)
*Goal: Thick, evolving ensemble texture.*
- **Voices:** 8
- **Pad 1 (Delay/FB):** Bottom-Right (Long delay, no feedback)
- **Pad 2 (Mod):** Center (Moderate rate and amount)
- **Pad 3 (Move):** Bottom-Right (Slow, wide swirl)
- **HP Filter:** 500Hz
- **Mix:** 50%

## 3. The "Super Saw" (Upbeat/EDM-Pop)
*Goal: Maximum thickness and aggressive detune.*
- **Voices:** 8
- **Pad 1 (Delay/FB):** Center-Left (Short delay, slight feedback)
- **Pad 2 (Mod):** Top-Right (Fast rate, high amount)
- **Pad 3 (Move):** Center (No panning)
- **HP Filter:** 200Hz
- **LP Filter:** Open
- **Mix:** 100% (Use as a dedicated synth voice)

## 4. The "Warped Vinyl" (Lo-Fi/Vibey)
*Goal: Unstable pitch and texture.*
- **Voices:** 4 or 8
- **Pad 1 (Delay/FB):** Bottom-Left
- **Pad 2 (Mod):** Top-Right (Fast but small amount, or Slow but high amount)
- **Pad 3 (Move):** Bottom-Left (No movement)
- **Noise:** 15%
- **LP Filter:** 3kHz
- **Mix:** 40%

## 5. The "Resonant Lead" (Psychedelic/Industrial)
*Goal: Metallic, robotic character.*
- **Voices:** 4
- **Pad 1 (Delay/FB):** Top-Left (Short delay, Max feedback)
- **Pad 2 (Mod):** Center-Right (Deep modulation)
- **Pad 3 (Move):** Top-Right (Fast swirl)
- **HP Filter:** 300Hz
- **Mix:** 35%

## Quick Vibe Reference
| Target | Voices | Delay | FB | Mod Rate | Mod Amt |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Clean** | 4 | Short | 0 | Slow | Low |
| **Thick** | 8 | Med | 0 | Med | Med |
| **Metallic** | 4 | Short | Max | Med | Med |
| **Lo-Fi** | 8 | Long | 0 | Slow | High |
| **Swirl** | 8 | Med | 0 | Slow | Med |
```

---

## FILE: 01-Learning\Quick-Reference\03_Vibe_Starting_Points_Moody.md

```markdown
# Vibe Starting Points: MOODY (Hyper Chorus)

## The "Moody" Logic
Moody sounds in Hip-Hop/R&B are defined by **darkness (LP filtering)**, **depth (8 voices)**, and **slow, deliberate motion**.

---

## 1. The "Underwater" Keys
*Perfect for: Rhodes, dark pianos, or filtered synth pads.*
- **Settings:**
    - **Voices:** 8
    - **Pad 1 (Delay/FB):** Bottom-Right (Max delay time)
    - **Pad 2 (Mod):** Bottom-Center (Slowest rate, moderate depth)
    - **Pad 3 (Move):** Bottom-Left (Zero movement)
    - **LP Filter:** **800Hz – 1.5kHz** (Crucial)
    - **Mix:** 60%
- **Vibe:** It feels like the sound is coming from the other side of a thick wall or under deep water.

## 2. The "Ghostly" Vocal
*Perfect for: Ad-libs or background vocal "washes."*
- **Settings:**
    - **Voices:** 8
    - **Pad 1 (Delay/FB):** Bottom-Right
    - **Pad 2 (Mod):** Center-Left (Subtle wobble)
    - **Pad 3 (Move):** Bottom-Right (Slow, wide swirl)
    - **HP Filter:** 400Hz
    - **Noise:** 10%
    - **Mix:** 35%
- **Vibe:** Adds a haunting, wide "shadow" to the vocal without it being clearly audible as a chorus.

## 3. The "Melancholy Detune"
*Perfect for: Guitar loops or sample chops.*
- **Settings:**
    - **Voices:** 4
    - **Pad 1 (Delay/FB):** Bottom-Left
    - **Pad 2 (Mod):** Bottom-Right (Slow rate, High depth)
    - **LP Filter:** 5kHz
    - **Mix:** 25%
- **Vibe:** Mimics the subtle pitch instability of an old, worn-out tape machine.

---

## Moody "Don'ts"
- **Don't** use high Feedback. Metallic ringing is too "aggressive" and "energetic" for a moody vibe.
- **Don't** use fast Modulation Rates. Rapid wobbling sounds "happy" or "nervous," not moody.
- **Don't** leave the LP Filter open. Bright, crisp chorus sounds too modern and "shiny" for a moody aesthetic.

## Moody "Dos"
- **Do** automate the LP Filter. Slowly opening it during a transition adds a "coming to life" feeling.
- **Do** use 8 voices. The extra density fills the space and makes the "darkness" feel heavier.
```

---

## FILE: 01-Learning\Quick-Reference\04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

```markdown
# Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey (Hyper Chorus)

## 1. UPBEAT (Energy & Sparkle)
- **Target:** Pop-Rap leads, energetic hats, bright bells.
- **Settings:**
    - **Voices:** 4 (Keeps it clean)
    - **Pad 1:** Bottom-Left (Tight delay)
    - **Pad 2:** Top-Center (Fast rate, moderate depth)
    - **Pad 3:** Top-Right (Fast movement)
    - **HP Filter:** 600Hz (Remove everything but the air)
    - **Mix:** 15-20% (Just a sprinkle)
- **Why:** Adds "shimmer" and "jitter" without muddying the groove.

## 2. PSYCHEDELIC (Motion & Morphing)
- **Target:** Travis Scott style synths, "trippy" guitars, sound design.
- **Settings:**
    - **Voices:** 8
    - **Pad 1:** Top-Right (Long delay + High Feedback)
    - **Pad 2:** Top-Right (Fast rate + High depth)
    - **Pad 3:** Bottom-Right (Slow, max-width swirl)
    - **Noise:** 25%
    - **Mix:** 50-100%
- **Why:** Pure disorienting motion and metallic resonance.

## 3. JAZZY (Organic & Warm)
- **Target:** Neo-Soul keys, jazzy guitars, subtle vocal thickening.
- **Settings:**
    - **Voices:** 4
    - **Pad 1:** Bottom-Left
    - **Pad 2:** Bottom-Left (Slow, low depth)
    - **LP Filter:** 4kHz
    - **HP Filter:** 200Hz
    - **Mix:** 20%
- **Why:** Mimics a classic analog chorus pedal; adds "vibe" without sounding digital.

## 4. VIBEY (Modern Lushness)
- **Target:** "Drake-style" pads, smooth R&B vocals, atmospheric textures.
- **Settings:**
    - **Voices:** 8
    - **Pad 1:** Bottom-Right (Long delay)
    - **Pad 2:** Bottom-Center (Slow rate, mid depth)
    - **Pad 3:** Bottom-Right (Slow, wide drift)
    - **HP Filter:** 300Hz
    - **Mix:** 35%
- **Why:** Creates a "halo" of wide, moving sound that feels luxurious and modern.

---

## Comparison Summary
| Vibe | Key Move | HP | LP | Mix |
| :--- | :--- | :--- | :--- | :--- |
| **Upbeat** | Fast Pad 3 (Move) | 600Hz | Open | 20% |
| **Psyched** | High Pad 1 (FB) | 200Hz | Open | 70% |
| **Jazzy** | 4 Voices + Low Mod | 200Hz | 4kHz | 25% |
| **Vibey** | 8 Voices + Wide Move | 300Hz | Open | 40% |
```

---

## FILE: 01-Learning\Quick-Reference\hyper-chorus-vs-fruity-chorus.md

```markdown
# Hyper Chorus vs. Fruity Chorus

Choosing the right modulation tool for your sound.

| Feature | Fruity Chorus | Hyper Chorus |
| :--- | :--- | :--- |
| **Max Voices** | 3 | 8 |
| **Interface** | Sliders (Traditional) | Triple X-Y Pads (Vector) |
| **Resonance** | Minimal | High (Adjustable Feedback) |
| **Auto-Panning** | No | Yes (Built-in Movement Pad) |
| **Filtering** | Basic LP | Dedicated HP and LP knobs |
| **Noise injection** | No | Yes (Texturing) |
| **Sound Character** | Subtle, Vintage, Clean | Aggressive, Dense, Modern |

## Use **Fruity Chorus** When:
- You need a simple "widener" for a bass or subtle lead.
- You want to mimic a vintage analog chorus pedal (Dimension D style).
- You are low on CPU (it is extremely lightweight).
- You want a predictable, static stereo field.

## Use **Hyper Chorus** When:
- You want to create a "Super Saw" or massive synth ensemble.
- You need deep, "psychedelic" detuning and motion.
- You want the chorus to "swirl" automatically around the listener (Movement pad).
- You need built-in filtering to keep the low-end clean without extra EQ.
- You are doing creative sound design or "lo-fi" processing (using the Noise knob).

## Pro Tip: The "Layered" Approach
For the ultimate wide vocal, use **Fruity Chorus** for the initial thickening, then send it to a parallel bus with **Hyper Chorus** set to 100% wet, high voices, and slow movement to add an "evolving" halo around the main sound.

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: Hyper Chorus

The "High-Density" modulation powerhouse. Use this for quick reference during a session. [SRC: IL-MAN]

---

## 🕹️ The Triple X-Y Pads
The heart of the plugin. Drag the target to change two parameters at once.

### Pad 1: Delay & Feedback (The Tone)
- **X-Axis (Left/Right):** **Delay Time**.
  - *Left:* Short, tight, flangy.
  - *Right:* Long, loose, ensemble-like.
- **Y-Axis (Up/Down):** **Feedback**.
  - *Bottom:* Clean, natural chorus.
  - *Top:* Metallic resonance, ringing, "robotic" textures.

### Pad 2: Modulation (The "Wobble")
- **X-Axis (Left/Right):** **Modulation Amount**.
  - *Left:* Subtle pitch drift.
  - *Right:* Aggressive detuning, "drunk" vibes.
- **Y-Axis (Up/Down):** **Modulation Rate**.
  - *Bottom:* Slow, evolving motion.
  - *Top:* Fast vibrato, energetic jitter.

### Pad 3: Movement (The "Swirl")
- **X-Axis (Left/Right):** **Auto-Pan Amount**.
  - *Left:* Static stereo field.
  - *Right:* Max width movement.
- **Y-Axis (Up/Down):** **Auto-Pan Speed**.
  - *Bottom:* Slow drift.
  - *Top:* Fast spinning/shaking effect.

---

## 🎛️ Global & Mix Controls

### Voices (4 / 8)
- **4 Voices:** Clearer, more "classic" chorus. Use for leads and vocals.
- **8 Voices:** Maximum density. Use for pads, "Super Saws," and "Moody" vibes.

### Wet-Signal Filters (HP / LP)
- **HP (High Pass):** **MANDATORY** for mix health. Set to 200–400Hz to keep bass mono.
- **LP (Low Pass):** Tames harsh high-end. Set to 5kHz for "Moody" or "Vintage" vibes.

### Texture & Mix
- **Noise Knob:** Injects white noise into the wet signal. Adds grit/lo-fi character.
- **Mono Button:** Sums output to mono. **Check this often** to ensure your sound doesn't disappear due to phase cancellation.
- **Mix Slider:** Dry/Wet balance. 25–40% is usually the sweet spot.

---

## 🎯 Quick Vibe Recipes
- **Moody:** 8 Voices, LP Filter at 1kHz, Slow Mod Rate.
- **Upbeat:** 4 Voices, HP Filter at 600Hz, Fast Movement.
- **Psychedelic:** High Feedback + High Mod Amount.
- **Jazzy:** 4 Voices, Low Mod Amount, LP Filter at 5kHz.
- **Vibey:** 8 Voices, Long Delay, Wide Movement.

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Hyper Chorus

This document defines every control in Hyper Chorus and its impact on the "Vibe" and "Mix." [SRC: IL-MAN]

---

## 1. Voice Count (4 / 8)
- **Type:** Toggle Switch
- **Function:** Determines the density of the chorus.
- **Mix Impact:** 8 voices create more stereo "smear" and can cause more phase cancellation. 4 voices are tighter and punchier.
- **Vibe Impact:** **8 Voices** = Lush, Vibey, Moody. **4 Voices** = Jazzy, Upbeat, Clean.

## 2. Pad 1: Delay Time (X-Axis)
- **Range:** Short (Left) to Long (Right).
- **Function:** Sets the base delay time of the 8 voices.
- **Mix Impact:** Short delays create "flanging" or "phasing" effects. Long delays create "ensemble" or "doubling" effects.
- **Vibe Impact:** **Short** = Industrial, Aggressive. **Long** = Dreamy, Atmospheric.

## 3. Pad 1: Feedback (Y-Axis)
- **Range:** Low (Bottom) to High (Top).
- **Function:** Feeds the output back into the input of the delay lines.
- **Mix Impact:** High values create resonant peaks (metallic ringing).
- **Vibe Impact:** **High** = Psychedelic, Robotic, Harsh. **Low** = Natural, Smooth.

## 4. Pad 2: Modulation Amount / Depth (X-Axis)
- **Range:** Low (Left) to High (Right).
- **Function:** How far the pitch varies from the source.
- **Mix Impact:** High depth causes significant pitch detuning and width.
- **Vibe Impact:** **High** = Trippy, Drunk, Lo-Fi. **Low** = Solid, High-End.

## 5. Pad 2: Modulation Rate / Speed (Y-Axis)
- **Range:** Slow (Bottom) to Fast (Top).
- **Function:** How fast the pitch wobbles.
- **Mix Impact:** Fast rates add "jitter" and energy; slow rates add "drift" and space.
- **Vibe Impact:** **Fast** = Nervous, Energetic, Upbeat. **Slow** = Relaxed, Moody, Jazzy.

## 6. Pad 3: Auto-Pan Amount (X-Axis)
- **Range:** Low (Left) to High (Right).
- **Function:** The width of the stereo movement.
- **Mix Impact:** Increases the dynamic stereo field usage.
- **Vibe Impact:** **High** = Immersive, Psychedelic. **Low** = Focused, Center-heavy.

## 7. Pad 3: Auto-Pan Speed (Y-Axis)
- **Range:** Slow (Bottom) to Fast (Top).
- **Function:** The rate of the stereo movement.
- **Mix Impact:** Adds rhythmic motion to the stereo field.
- **Vibe Impact:** **Slow** = Evolving, Vibey. **Fast** = Chaotic, Upbeat.

## 8. High Pass (HP) Filter
- **Type:** Knob
- **Function:** Filters low frequencies out of the **WET** path.
- **Mix Impact:** CRITICAL for keeping the kick/sub mono and powerful.
- **Vibe Impact:** Prevents "muddy" or "dark" sounds from feeling cluttered.

## 9. Low Pass (LP) Filter
- **Type:** Knob
- **Function:** Filters high frequencies out of the **WET** path.
- **Mix Impact:** Removes digital harshness or "shimmer."
- **Vibe Impact:** **Low** = Moody, Warm, Vintage. **High** = Modern, Sharp, Clean.

## 10. Noise
- **Type:** Knob
- **Function:** Injects white noise into the chorus engine.
- **Mix Impact:** Adds harmonic complexity/texture.
- **Vibe Impact:** **High** = Lo-Fi, Gritty, Industrial.

## 11. Mono Button
- **Function:** Sums the output to mono.
- **Usage:** Always use to check for phase cancellation (The "Mix Check").

## 12. Mix Slider
- **Function:** Dry/Wet balance.
- **Usage:** Typically 20-50%. Use 100% for parallel processing on a separate Mixer track.
```

---

## FILE: 02-Data\parameters\hyper-chorus-params.json

```json
{
  "plugin_name": "Hyper Chorus",
  "category": "Modulation",
  "parameters": [
    {
      "name": "Voices",
      "type": "switch",
      "values": [4, 8],
      "description": "Selects the number of independent delay lines.",
      "vibe_impact": "Density, weight, smear"
    },
    {
      "name": "Delay Time (Pad 1 X)",
      "type": "xy-axis",
      "description": "Base delay of chorus voices.",
      "mix_impact": "Flange vs Ensemble"
    },
    {
      "name": "Feedback (Pad 1 Y)",
      "type": "xy-axis",
      "description": "Feeds signal back into delay lines.",
      "vibe_impact": "Resonance, metallic ringing"
    },
    {
      "name": "Mod Amount (Pad 2 X)",
      "type": "xy-axis",
      "description": "Depth of pitch modulation.",
      "vibe_impact": "Detune, drunk/unstable feel"
    },
    {
      "name": "Mod Rate (Pad 2 Y)",
      "type": "xy-axis",
      "description": "Speed of pitch modulation.",
      "vibe_impact": "Energy, jitter vs drift"
    },
    {
      "name": "Pan Amount (Pad 3 X)",
      "type": "xy-axis",
      "description": "Stereo width of auto-panner.",
      "mix_impact": "Stereo field usage"
    },
    {
      "name": "Pan Speed (Pad 3 Y)",
      "type": "xy-axis",
      "description": "Speed of stereo swirling.",
      "vibe_impact": "Evolving motion"
    },
    {
      "name": "Noise",
      "type": "knob",
      "description": "Adds white noise to the wet path",
      "use_cases": ["lo-fi shimmer", "texturing"],
      "vibe_impact": "Grit, vintage character"
    },
    {
      "name": "High Pass (HP)",
      "type": "knob",
      "description": "Filters lows from wet signal.",
      "mix_impact": "Low-end clarity/discipline"
    },
    {
      "name": "Low Pass (LP)",
      "type": "knob",
      "description": "Filters highs from wet signal.",
      "vibe_impact": "Warmth, mood, dark textures"
    }
  ]
}

```

---

## FILE: 02-Data\presets\00_Preset_Taxonomy.md

```markdown
# Preset Taxonomy

## Overview

Hyper Chorus does not have traditional user-savable presets within the plugin. However, the following preset categories can be created and managed through FL Studio's wrapper preset system:

1. **Wrapper Presets** - Save via FL Studio's plugin wrapper (preset dropdown)
2. **Channel State Files** - Save channel settings including Hyper Chorus
3. **Project Templates** - Include preferred Hyper Chorus starting states
4. **Patcher Presets** - If used inside Patcher for complex routing

---

## Preset Categories by Function

### 1. Voice-Count Based

| Category | Voices | Characteristics |
|----------|--------|-----------------|
| **Clean** | 4 | Subtle, controlled, lower CPU |
| **Dense** | 8 | Maximum width and thickness |

**Use Case:** Switch between categories based on source density and CPU budget.

---

### 2. Application-Based

| Category | Primary Use | Key Characteristics |
|----------|-------------|---------------------|
| **Vocal** | Lead/background vocals | HP 250Hz+, subtle modulation, 8 voices |
| **Synth** | Leads, pads, bass | Variable by synth type |
| **Drum** | Drum bus/parallel | HP 300Hz+, 4 voices, protect transients |
| **Guitar** | Electric/acoustic | 4 voices, natural settings |
| **FX** | Experimental textures | Aggressive, high feedback, noise |

---

### 3. Genre-Based

| Category | Genre Context | Signature Elements |
|----------|---------------|-------------------|
| **Hip-Hop** | Modern trap, boom-bap | Subtle widening, vocal thickening |
| **R&B** | Contemporary, soul | Warm, smooth ensemble |
| **EDM** | House, trance, dubstep | Supersaw settings, aggressive modulation |
| **Pop** | Mainstream pop | Clean, present, subtle enhancement |
| **Lo-Fi** | Chill, bedroom | Noise, filtering, vintage character |
| **Jazz** | Traditional, fusion | Restrained, natural, 4 voices |

---

### 4. Vibe-Based

See `02_Vibe_Preset_Shortlist.md` for detailed settings. Categories:

- Moody
- Upbeat
- Psychedelic
- Jazzy
- Vibey

---

### 5. Technique-Based

| Category | Technique | Key Settings |
|----------|-----------|--------------|
| **Supersaw** | Trance lead thickening | 8 voices, high modulation, medium feedback |
| **Dimension** | Subtle spatial enhancement | 4 voices, low feedback, no auto-pan |
| **Doubler** | Vocal thickening | 8 voices, short delay, low modulation |
| **Auto-Pan** | Stereo movement only | Low delay/modulation, high pan amount/speed |
| **Resonator** | Metallic textures | High delay + feedback, 8 voices |
| **Lo-Fi** | Vintage texture | Noise, filtering, 8 voices |

---

## Naming Convention

### Wrapper Preset Naming

Format: `[Category]_[Source]_[Characteristic]`

Examples:
- `Vocal_Lead_Subtle`
- `Synth_Supersaw_Aggressive`
- `Drum_Bus_Parallel`
- `FX_Psychedelic_Swirl`
- `Moody_Pad_Atmosphere`

### Project Template Naming

Format: `[Genre]_HyperChorus_[Purpose]`

Examples:
- `HipHop_Template_HyperChorus_Send`
- `Trap_Lead_HyperChorus_Supersaw`
- `RnB_Vocal_HyperChorus_Ensemble`

---

## Preset Organization Strategy

### Browser Structure (FL Studio)

`\`\`
Plugin Database > Effects > Modulation > Hyper Chorus Presets
├── 01_Essentials/
│   ├── Default_Starting_Point
│   ├── Safe_Widening
│   └── Bass_Protection
├── 02_Vocals/
│   ├── Lead_Subtle
│   ├── Lead_Thick
│   ├── Background_Ensemble
│   └── AdLib_Effect
├── 03_Synths/
│   ├── Supersaw_Classic
│   ├── Pad_Ambient
│   ├── Lead_Wide
│   └── Bass_Chorus (use with caution)
├── 04_Drums/
│   ├── Bus_Parallel
│   ├── Hats_Wide
│   └── Snare_Thick
├── 05_Vibes/
│   ├── Moody_Atmosphere
│   ├── Upbeat_Energy
│   ├── Psychedelic_Swirl
│   ├── Jazzy_Natural
│   └── Vibey_Warm
└── 06_FX/
    ├── Metallic_Resonance
    ├── AutoPan_Only
    └── LoFi_Texture
`\`\`

---

## Creating Wrapper Presets

### Step-by-Step

1. **Configure Hyper Chorus** with desired settings
2. **Click plugin wrapper menu** (top-left corner of plugin window)
3. **Select "Save preset as..."**
4. **Navigate to:** `Plugin Database > Effects > Modulation`
5. **Create folder:** `Hyper Chorus Presets` (if not exists)
6. **Name preset** following convention above
7. **Click Save**

### Best Practices

- Save presets with **Dry/Wet at 100%** for send/return use
- Save presets with **contextual Wet/Dry** for insert use
- Include **HP filter settings** appropriate for the source
- Test preset on multiple sources before finalizing

---

## Template State Strategy

### Channel State Approach

For frequently used configurations, save entire channel states:

1. **Configure channel** with Hyper Chorus and supporting plugins
2. **Right-click channel** in Channel Rack
3. **Select "Save channel state as..."**
4. **Name descriptively** (e.g., "Vocal Chain with Hyper Chorus")

### Project Template Approach

For starting new projects:

1. **Set up mixer** with Hyper Chorus on dedicated send
2. **Configure default settings** for common sources
3. **Save as project template:** `File > Export > Project template`
4. **Name:** Include genre/style (e.g., "Hip-Hop Template with Chorus Send")

---

## Version Control

Track preset versions in project documentation:

`\`\`
Preset: Vocal_Lead_Subtle_v1.2
Date: 2026-02-03
Changes: Increased HP from 200Hz to 300Hz for cleaner lows
Tested on: Male vocal, Female vocal
Status: Active
`\`\`

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 02-Data\presets\01_Preset_Notes_And_Use.md

```markdown
# Preset Notes and Usage

## Essential Starter Presets

### 1. Safe Default
**File:** `Safe_Default` (create as wrapper preset)

| Parameter | Value |
|-----------|-------|
| Voices | 4 |
| Pad 1 | X=40% Y=20% |
| Pad 2 | X=35% Y=35% |
| Pad 3 | X=30% Y=25% |
| HP | 150Hz |
| LP | 100% |
| Noise | 0% |
| Wet/Dry | 25% |

**Usage:** Starting point for any source. Adjust HP and voices based on context.
**Best for:** When you don't know where to start.

---

### 2. Vocal Lead Thickener
**File:** `Vocal_Lead_Subtle`

| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 | X=30% Y=15% |
| Pad 2 | X=30% Y=25% |
| Pad 3 | X=20% Y=20% |
| HP | 300Hz |
| LP | 100% |
| Noise | 0% |
| Wet/Dry | 25% (send) |

**Usage:** Place on send/return. Route lead vocal to send at 20-30% level.
**Best for:** Lead vocals needing natural thickening without obvious effect.
**Notes:** Keep modulation subtle to avoid seasick pitch wobble.

---

### 3. Background Vocal Ensemble
**File:** `Vocal_Background_Ensemble`

| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 | X=40% Y=25% |
| Pad 2 | X=50% Y=35% |
| Pad 3 | X=40% Y=30% |
| HP | 250Hz |
| LP | 100% |
| Noise | 0% |
| Wet/Dry | 40% (send) |

**Usage:** Dedicated send for backing vocals. Can use higher wet level than leads.
**Best for:** Creating choir-like ensemble from multiple backing tracks.
**Notes:** Blend multiple backing vox through this send for unified character.

---

### 4. Supersaw Classic
**File:** `Synth_Supersaw_Classic`

| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 | X=60% Y=30% |
| Pad 2 | X=75% Y=50% |
| Pad 3 | X=50% Y=35% |
| HP | 100Hz |
| LP | 100% |
| Noise | 0% |
| Wet/Dry | 35% |

**Usage:** Insert on sawtooth synth leads. Instant trance supersaw.
**Best for:** EDM leads, trance, big room synths.
**Notes:** Works best on simple waveforms (saw, square) not complex wavetables.

---

### 5. Drum Bus Parallel
**File:** `Drum_Bus_Parallel`

| Parameter | Value |
|-----------|-------|
| Voices | 4 |
| Pad 1 | X=35% Y=20% |
| Pad 2 | X=35% Y=30% |
| Pad 3 | X=45% Y=35% |
| HP | 300Hz |
| LP | 100% |
| Noise | 0% |
| Wet/Dry | 100% |

**Usage:** Place on parallel drum bus. Blend with dry drum bus.
**Best for:** Adding width to snare/claps/hats while preserving kick punch.
**Notes:** Wet/Dry at 100% because you'll blend via parallel routing.

---

### 6. Pad Atmosphere
**File:** `Pad_Ambient`

| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 | X=50% Y=25% |
| Pad 2 | X=50% Y=25% |
| Pad 3 | X=60% Y=30% |
| HP | 200Hz |
| LP | 100% |
| Noise | 5% |
| Wet/Dry | 40% |

**Usage:** Insert on pad/sustain channels.
**Best for:** Adding movement and width to static pads.
**Notes:** Automate Pad 2 and Pad 3 over time for evolving textures.

---

### 7. Dimension D Style
**File:** `Dimension_D_Subtle`

| Parameter | Value |
|-----------|-------|
| Voices | 4 |
| Pad 1 | X=30% Y=0% |
| Pad 2 | X=20% Y=35% |
| Pad 3 | X=0% Y=0% |
| HP | 100Hz |
| LP | 100% |
| Noise | 0% |
| Wet/Dry | 30% |

**Usage:** Subtle spatial enhancement on any source.
**Best for:** Master bus subtle widening (use cautiously), acoustic sources.
**Notes:** Mimics Roland Dimension D character—width without obvious chorus.

---

### 8. Lo-Fi Texture
**File:** `LoFi_Texture`

| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 | X=50% Y=35% |
| Pad 2 | X=45% Y=40% |
| Pad 3 | X=30% Y=25% |
| HP | 200Hz |
| LP | 10kHz |
| Noise | 15% |
| Wet/Dry | 35% |

**Usage:** On samples, digital synths, or clean sources needing character.
**Best for:** Lo-fi hip-hop, bedroom pop, vintage emulation.
**Notes:** Noise + LP filter create analog/vintage character.

---

### 9. Auto-Pan Only
**File:** `AutoPan_Clean`

| Parameter | Value |
|-----------|-------|
| Voices | 4 |
| Pad 1 | X=10% Y=0% |
| Pad 2 | X=5% Y=10% |
| Pad 3 | X=70% Y=40% |
| HP | 100Hz |
| LP | 100% |
| Noise | 0% |
| Wet/Dry | 40% |

**Usage:** Stereo movement without detuning.
**Best for:** Clean auto-panning when you don't want chorus character.
**Notes:** Adjust Pad 3 X/Y for different pan patterns.

---

### 10. Metallic Resonance (FX)
**File:** `FX_Metallic_Resonance`

| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 | X=70% Y=80% |
| Pad 2 | X=50% Y=40% |
| Pad 3 | X=40% Y=30% |
| HP | 300Hz |
| LP | 8kHz |
| Noise | 10% |
| Wet/Dry | 50% |

**Usage:** Experimental FX, transitions, sound design.
**Best for:** Creating ringing, metallic textures.
**Notes:** USE LIMITER AFTER PLUGIN. High feedback can cause runaway.

---

## Usage Notes by Context

### On Sends vs Inserts

**Send/Return (Recommended for most):**
- Multiple sources share character
- Consistent spatial field
- Lower CPU usage
- Easier to adjust global amount

**Insert (Specific use cases):**
- Source-specific processing
- Parallel blending with dry
- When you need 100% wet for creative effect

### Pre-Fader vs Post-Fader Sends

**Post-Fader (Default):**
- Chorus amount follows channel fader
- Maintains balance when adjusting levels
- Use for: Most applications

**Pre-Fader:**
- Chorus amount independent of channel fader
- Effect stays constant even if source turned down
- Use for: Special FX that must remain audible

### Dry/Wet Strategy

| Context | Wet Amount | Reasoning |
|---------|------------|-----------|
| Lead vocal (insert) | 15-25% | Support, don't distract |
| Background vocal (send) | 30-45% | More effect acceptable |
| Synth lead | 25-35% | Character enhancement |
| Pad/Atmosphere | 35-50% | Effect is the feature |
| Drum parallel | 100% | Blend controlled externally |
| FX/Experimental | 50-100% | Effect is the point |

---

## Preset Testing Protocol

Before finalizing a preset:

1. **Test on multiple sources** of the intended type
2. **Check mono compatibility** using Fruity Stereo Enhancer
3. **Verify CPU usage** with 8 voices across multiple instances
4. **Test in context** with other mix elements playing
5. **Document** what works and what doesn't

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 02-Data\presets\02_Vibe_Preset_Shortlist.md

```markdown
# Vibe Preset Shortlist

## Quick Access by Vibe

### Moody

#### Moody Dark Atmosphere
| Parameter | Value |
|-----------|-------|
| Voices | 4 |
| Pad 1 X/Y | 55% / 15% |
| Pad 2 X/Y | 20% / 15% |
| Pad 3 X/Y | 10% / 20% |
| HP | 250Hz |
| LP | 9kHz |
| Noise | 8% |
| Wet/Dry | 25% |

**Use for:** Pads, background layers, atmospheric elements

---

#### Moody Intimate Vocal
| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 X/Y | 35% / 10% |
| Pad 2 X/Y | 15% / 20% |
| Pad 3 X/Y | 15% / 15% |
| HP | 300Hz |
| LP | 12kHz |
| Noise | 5% |
| Wet/Dry | 20% |

**Use for:** Emotional lead vocals, ballads

---

### Upbeat

#### Upbeat Dance Energy
| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 X/Y | 45% / 25% |
| Pad 2 X/Y | 50% / 55% |
| Pad 3 X/Y | 55% / 50% |
| HP | 180Hz |
| LP | 100% |
| Noise | 3% |
| Wet/Dry | 30% |

**Use for:** Synth leads, energetic vocals, dance productions

---

#### Upbeat Pop Sparkle
| Parameter | Value |
|-----------|-------|
| Voices | 4 |
| Pad 1 X/Y | 35% / 20% |
| Pad 2 X/Y | 40% / 45% |
| Pad 3 X/Y | 40% / 45% |
| HP | 200Hz |
| LP | 14kHz |
| Noise | 0% |
| Wet/Dry | 25% |

**Use for:** Pop vocals, bright synths, clean productions

---

### Psychedelic

#### Psychedelic Deep Trip
| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 X/Y | 70% / 60% |
| Pad 2 X/Y | 85% / 70% |
| Pad 3 X/Y | 80% / 65% |
| HP | 120Hz |
| LP | 100% |
| Noise | 8% |
| Wet/Dry | 60% |

**Use for:** FX, experimental sections, breakdowns
**Automation required:** Heavy automation recommended

---

#### Psychedelic Swirling Pads
| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 X/Y | 55% / 45% |
| Pad 2 X/Y | 75% / 40% |
| Pad 3 X/Y | 75% / 35% |
| HP | 150Hz |
| LP | 100% |
| Noise | 5% |
| Wet/Dry | 50% |

**Use for:** Sustained chords, ambient sections
**Automation:** Automate Pad 2 and 3 Y-axes for movement

---

### Jazzy

#### Jazzy Natural Ensemble
| Parameter | Value |
|-----------|-------|
| Voices | 4 |
| Pad 1 X/Y | 35% / 8% |
| Pad 2 X/Y | 22% / 35% |
| Pad 3 X/Y | 12% / 25% |
| HP | 100Hz |
| LP | 100% |
| Noise | 0% |
| Wet/Dry | 20% |

**Use for:** Acoustic piano, Rhodes, jazz guitar

---

#### Jazzy Vocal Quartet
| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 X/Y | 30% / 10% |
| Pad 2 X/Y | 25% / 30% |
| Pad 3 X/Y | 18% / 20% |
| HP | 200Hz |
| LP | 100% |
| Noise | 0% |
| Wet/Dry | 22% |

**Use for:** Jazz vocals, backing vocals

---

### Vibey

#### Vibey Analog Warmth
| Parameter | Value |
|-----------|-------|
| Voices | 4 |
| Pad 1 X/Y | 40% / 18% |
| Pad 2 X/Y | 35% / 30% |
| Pad 3 X/Y | 30% / 25% |
| HP | 130Hz |
| LP | 12kHz |
| Noise | 10% |
| Wet/Dry | 30% |

**Use for:** Soul/R&B vocals, Rhodes, warm synths

---

#### Vibey Bedroom Pop
| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 X/Y | 42% / 22% |
| Pad 2 X/Y | 38% / 28% |
| Pad 3 X/Y | 35% / 22% |
| HP | 160Hz |
| LP | 11kHz |
| Noise | 12% |
| Wet/Dry | 32% |

**Use for:** Indie vocals, lo-fi beats, nostalgic textures

---

## Vibe Parameter Quick Reference

| Vibe | Voices | HP Filter | LP Filter | Mod Amt | Mod Rate | Wet/Dry |
|------|--------|-----------|-----------|---------|----------|---------|
| Moody | 4 | 250Hz+ | 9kHz | 20% | Slow | 25% |
| Upbeat | 4-8 | 180Hz+ | Full | 40-50% | Medium | 30% |
| Psychedelic | 8 | 120Hz+ | Full | 75-85% | Fast | 50-60% |
| Jazzy | 4 | 100Hz+ | Full | 22-25% | Slow | 20% |
| Vibey | 4-8 | 130Hz+ | 11-12kHz | 35-38% | Slow | 30% |

---

## Creating Your Own Vibe Presets

### Start from This Template

1. Choose your target vibe from above
2. Start with the suggested parameter ranges
3. Adjust based on your specific source
4. Save as wrapper preset with vibe name
5. Document what sources it works best on

### Vibe Mixing Rules

- Never blend contradictory vibes on the same source (e.g., psychedelic + jazzy)
- Adjacent vibes can work: Moody -> Vibey, Upbeat -> Psychedelic
- Consider section changes: Start moody, build to upbeat, peak at psychedelic

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 02-Data\rules\00_Do_Dont_Rules.md

```markdown
# Do and Don't Rules

## Critical Rules (Breaking These Causes Problems)

### DO: Always Use HP Filter on Bass-Containing Sources
**Rule:** Set HP filter to minimum 100Hz, preferably 150-300Hz depending on source.

**Why:** Prevents phase cancellation in low frequencies when summed to mono.

**Applies to:** Vocals, synths, full mixes, anything with content below 200Hz.

**Exception:** Only if you specifically want phase artifacts (experimental).

---

### DON'T: Apply to 808s, Kicks, or Sub Bass
**Rule:** Never put Hyper Chorus on low-frequency elements.

**Why:** Creates phase issues, weakens bass, causes mono collapse problems.

**Better approach:** Keep bass mono and centered. Use stereo effects on mid-high elements only.

---

### DO: Check Mono Compatibility
**Rule:** Regularly toggle mono using Fruity Stereo Enhancer to check for phase issues.

**Why:** Many playback systems (clubs, phones, Bluetooth) collapse to mono.

**Action:** If sound disappears or becomes hollow in mono, reduce modulation or increase dry signal.

---

### DON'T: Use High Feedback Without Limiting
**Rule:** When experimenting with Pad 1 Y above 60%, place a limiter after Hyper Chorus.

**Why:** High feedback can cause runaway resonance and clipping.

**Safety:** Fruity Limiter set to default settings provides protection.

---

### DO: Use Sends for Multiple Sources
**Rule:** When chorusing multiple elements, use a shared send/return instead of multiple instances.

**Why:** Consistent character, lower CPU usage, unified spatial field.

**Best practice:** Set Hyper Chorus to 100% wet on send, control blend with send levels.

---

### DON'T: Use 8 Voices on Everything
**Rule:** Start with 4 voices, increase to 8 only when needed.

**Why:** 8 voices is overkill for subtle applications; increases CPU usage unnecessarily.

**Guideline:**
- 4 voices: Subtle enhancement, acoustic sources, CPU conservation
- 8 voices: Maximum thickness, supersaw effects, dense textures

---

### DO: Keep Modulation Subtle on Lead Elements
**Rule:** Lead vocals and melodies should use Pad 2 X (modulation amount) below 40%.

**Why:** High modulation creates pitch wobble that undermines melodic accuracy.

**Exceptions:** Background vocals, FX, experimental sections.

---

### DON'T: Forget Plugin Order
**Rule:** Place Hyper Chorus BEFORE reverb and heavy compression.

**Why:** 
- Chorus after reverb = chorusing the reverb (muddy)
- Chorus after heavy compression = pumping artifacts

**Standard chain:** EQ → Hyper Chorus → Compression → Reverb

---

### DO: Match Wet/Dry to Context
**Rule:**
- Inserts: 15-35% wet for subtle enhancement
- Sends: 100% wet, control blend externally
- FX/Creative: 50-100% wet when effect is the point

**Why:** Wrong wet/dry balance makes effect too obvious or too subtle.

---

### DON'T: Ignore CPU Usage
**Rule:** Monitor CPU meter when using multiple 8-voice instances.

**Why:** Hyper Chorus with 8 voices is CPU-intensive. Too many instances = dropouts.

**Solutions:**
- Freeze tracks with heavy chorus
- Use 4 voices where possible
- Share via sends instead of inserts

---

## Important Guidelines (Strong Recommendations)

### DO: Use Noise Knob for Character
**Guideline:** Try 5-15% noise on digital sources for analog warmth.

**Best for:** Vibey, moody, lo-fi applications.

---

### DON'T: Use Fast Auto-Pan on Everything
**Guideline:** Fast Pad 3 speeds (top 40%) should be reserved for FX and special sections.

**Why:** Constant fast movement becomes distracting in a full mix.

---

### DO: Automate for Evolution
**Guideline:** Use automation on Pad 2 and Pad 3 for evolving textures.

**Best for:** Pads, transitions, build-ups, psychedelic sections.

---

### DON'T: Use Identical Settings on Different Sources
**Guideline:** Customize HP filter and modulation for each source type.

**Example:**
- Vocals: HP 250-300Hz, subtle modulation
- Drums: HP 300Hz+, 4 voices
- Synths: HP 100Hz, can be more aggressive

---

### DO: Roll Off Highs When Needed
**Guideline:** Use LP filter (8-12kHz) when chorus creates harsh artifacts.

**Common with:** High feedback settings, bright sources, aggressive modulation.

---

### DON'T: Solo Hyper Chorus for Too Long
**Guideline:** Make decisions in context with other mix elements.

**Why:** Settings that sound great solo can be too much in a mix.

---

### DO: Document Your Settings
**Guideline:** Save wrapper presets with descriptive names.

**Naming:** `[Source]_[Purpose]_[Characteristic]`
- Example: `Vocal_Lead_Subtle`
- Example: `Synth_Supersaw_Aggressive`

---

## Context-Specific Rules

### For Hip-Hop/R&B
- DO use on vocal sends for thickening
- DO use on synth leads for width
- DON'T use on 808s or kick drums
- DO use HP filter aggressively (200Hz+)

### For EDM/Electronic
- DO use 8 voices for supersaw effects
- DO automate parameters for movement
- DON'T overdo it on every element
- DO check mono compatibility for club playback

### For Pop
- DO keep it subtle (15-25% wet on inserts)
- DO use 4 voices for cleaner sound
- DON'T let it sound like an "effect"
- DO prioritize clarity over width

### For Lo-Fi
- DO use noise knob (10-15%)
- DO experiment with LP filter
- DO use 8 voices for texture
- DON'T clean it up too much

---

## Rule Summary Checklist

Before using Hyper Chorus on a source:

- [ ] HP filter set appropriately for source
- [ ] Voice count (4 vs 8) chosen intentionally
- [ ] Feedback under 50% (unless intentional effect)
- [ ] Modulation appropriate for source role (lead vs background)
- [ ] Wet/Dry balanced for context
- [ ] Mono compatibility checked
- [ ] Plugin order correct in chain
- [ ] CPU usage acceptable
- [ ] Limiter in place if using high feedback

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 02-Data\rules\01_Troubleshooting_Matrix.md

```markdown
# Troubleshooting Matrix

## Problem: Sound is Muddy or Unclear

### Symptoms
- Low-end feels unfocused
- Mix sounds "clogged" when Hyper Chorus is engaged
- Loss of clarity in low-mids

### Possible Causes & Solutions

| Cause | Check | Solution |
|-------|-------|----------|
| **HP Filter Too Low** | Solo wet signal, check low frequencies | Raise HP filter to 200-300Hz |
| **Too Many Voices** | Currently using 8 voices on dense source | Reduce to 4 voices |
| **Excessive Wet Signal** | Wet/Dry above 40% | Reduce to 20-30% |
| **High Feedback** | Pad 1 Y above 50% | Reduce feedback, add more dry signal |
| **Multiple Chorused Sources** | More than 3 sources with obvious chorus | Be more selective, use sends |

### Quick Fix
1. Raise HP filter by 50Hz increments
2. Reduce wet signal by 10%
3. If still muddy, switch from 8 to 4 voices

---

## Problem: Phase Cancellation in Mono

### Symptoms
- Sound gets quieter or hollow when collapsed to mono
- Bass disappears
- Elements sound "sucked out"

### Possible Causes & Solutions

| Cause | Check | Solution |
|-------|-------|----------|
| **No HP Filter** | HP filter at minimum | Engage HP filter, set to 150Hz+ |
| **Too Much Modulation** | Pad 2 X above 60% | Reduce modulation amount |
| **High Wet Signal** | Wet/Dry above 50% | Reduce wet, increase dry |
| **Fast Modulation Rate** | Pad 2 Y in top 40% | Slow down modulation rate |
| **Extreme Settings** | Multiple parameters maxed | Pull back all parameters 20% |

### Quick Fix
1. Engage HP filter at 200Hz minimum
2. Reduce Pad 2 X (modulation) by 30%
3. Check mono compatibility again

---

## Problem: Metallic Ringing or Harshness

### Symptoms
- Unpleasant ringing artifacts
- Harsh high-frequency content
- Sound is "resonant" in a bad way

### Possible Causes & Solutions

| Cause | Check | Solution |
|-------|-------|----------|
| **Feedback Too High** | Pad 1 Y above 60% | Reduce feedback to 30-40% |
| **Long Delay + High Feedback** | Pad 1 X right, Y high | Reduce either delay or feedback |
| **Bright Source** | Source has lots of highs | Engage LP filter at 10-12kHz |
| **8 Voices on Bright Source** | Using 8 voices on already wide source | Reduce to 4 voices |

### Quick Fix
1. Reduce Pad 1 Y (feedback) by 30%
2. Engage LP filter at 12kHz
3. If still harsh, add Fruity Parametric EQ 2 after with gentle high-shelf cut

---

## Problem: CPU Overload / Dropouts

### Symptoms
- FL Studio CPU meter spikes
- Audio dropouts or glitches
- Project becomes unplayable

### Possible Causes & Solutions

| Cause | Check | Solution |
|-------|-------|----------|
| **Too Many 8-Voice Instances** | Multiple Hyper Chorus with 8 voices | Convert some to 4 voices |
| **No Track Freezing** | Heavy channels not frozen | Freeze tracks with Hyper Chorus |
| **Multiple Inserts Instead of Sends** | Same settings on multiple channels | Consolidate to shared send |
| **Old CPU/Low Buffer** | Buffer size below 512 samples | Increase buffer size |

### Quick Fix
1. Switch all instances to 4 voices temporarily
2. Freeze heaviest channels
3. Convert inserts to sends where possible

---

## Problem: Effect Too Subtle or Not Hearing It

### Symptoms
- Can't tell if Hyper Chorus is engaged
- No obvious width or movement
- Effect seems broken

### Possible Causes & Solutions

| Cause | Check | Solution |
|-------|-------|----------|
| **Wet/Dry Too Low** | Below 15% | Increase to 25-35% |
| **Pad Positions Wrong** | All pads at minimum | Drag Pad 2 to center-right |
| **4 Voices on Subtle Source** | Already wide stereo source | Switch to 8 voices or skip chorus |
| **HP Filter Too High** | Above 500Hz on bright source | Reduce HP filter |
| **Mono Source Output** | Channel output set to mono | Set channel to stereo output |

### Quick Fix
1. Set Wet/Dry to 50% temporarily to verify effect works
2. Drag Pad 2 to X=60%, Y=50%
3. Switch to 8 voices
4. If still subtle, source may already be wide enough

---

## Problem: Seasick or Dizzying Effect

### Symptoms
- Pitch wobble is distracting
- Movement makes listener uncomfortable
- Effect is "too much"

### Possible Causes & Solutions

| Cause | Check | Solution |
|-------|-------|----------|
| **Modulation Amount Too High** | Pad 2 X above 60% | Reduce to 30-40% |
| **Modulation Rate Too Fast** | Pad 2 Y above 60% | Reduce to 20-40% |
| **Fast Auto-Pan** | Pad 3 Y above 60% | Slow down or reduce amount |
| **On Lead Vocal** | Lead vocal with high modulation | Reduce both amount and rate significantly |

### Quick Fix
1. Reduce Pad 2 X by 50%
2. Reduce Pad 2 Y to bottom 30%
3. If on lead vocal, consider using different technique (manual doubling)

---

## Problem: Clicking or Glitches

### Symptoms
- Clicks or pops in audio
- Glitches when automating
- artifacts when changing settings

### Possible Causes & Solutions

| Cause | Check | Solution |
|-------|-------|----------|
| **Automation Too Abrupt** | Instant parameter jumps | Use smoother automation curves |
| **Buffer Underrun** | CPU spiking during playback | Increase buffer size, freeze tracks |
| **Sample Rate Mismatch** | Project at different rate than interface | Check audio settings |
| **Feedback Runaway** | Pad 1 Y at maximum with high output | Reduce feedback, add limiter |

### Quick Fix
1. Check automation curves, add smoothing
2. Add Fruity Limiter after Hyper Chorus
3. Increase audio buffer to 1024 samples

---

## Problem: Low End Disappears

### Symptoms
- Bass sounds weak when chorus engaged
- Kick loses punch
- Overall thin sound

### Possible Causes & Solutions

| Cause | Check | Solution |
|-------|-------|----------|
| **HP Filter Engaged** | HP filter active | This is correct for chorus, but... |
| **Not Using HP Filter** | HP filter at minimum | Engage HP filter! Phase cancellation |
| **Wet Signal Too High** | Wet/Dry above 40% | Reduce wet signal |
| **On Bass Channel** | Hyper Chorus on bass instrument | Remove from bass, use on mid-highs only |

### Important Note
If you NEED chorus on a bass-containing sound:
1. HP filter at 150Hz minimum
2. Keep wet signal under 25%
3. Check mono compatibility religiously
4. Consider parallel processing instead

---

## Quick Diagnosis Flowchart

`\`\`
Problem occurs?
    │
    ├── Sound muddy?
    │   └── Raise HP filter, reduce wet, switch to 4 voices
    │
    ├── Mono issues?
    │   └── Engage HP filter, reduce modulation
    │
    ├── Harsh/metallic?
    │   └── Reduce feedback, engage LP filter
    │
    ├── CPU overload?
    │   └── Freeze tracks, use 4 voices, consolidate to sends
    │
    ├── Too subtle?
    │   └── Increase wet to 50% test, check pad positions
    │
    ├── Seasick effect?
    │   └── Reduce Pad 2 X and Y significantly
    │
    └── Low end weak?
        └── Verify HP filter engaged, reduce wet, check if on bass
`\`\`

---

## Prevention Checklist

Before committing Hyper Chorus settings:

- [ ] HP filter appropriate for source
- [ ] Mono compatibility verified
- [ ] CPU usage acceptable
- [ ] No harsh resonances at high feedback
- [ ] Wet/Dry balanced for context
- [ ] Not applied to bass/808
- [ ] Automation curves are smooth
- [ ] Limiter in place for high-feedback experiments

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop and R&B

## Hip-Hop Production Guidelines

### Overview
In hip-hop, Hyper Chorus serves specific roles: vocal thickening, synth lead widening, and texture creation. It's rarely used on drums or bass due to phase concerns.

### Typical Use Cases

#### 1. Lead Vocal Thickening
**Role:** Create subtle width and density on lead vocals without obvious chorus effect.

**Settings:**
- Voices: 8
- HP Filter: 300Hz
- Pad 2 X: 30% (subtle modulation)
- Wet/Dry: 20-25% on send

**Why:** Hip-hop vocals need to remain upfront and punchy. Heavy chorus pushes them back in the mix.

**Producers using this:** Modern trap (Metro Boomin style), melodic rap

---

#### 2. Ad-lib Texture
**Role:** Create distinct character layer for ad-libs.

**Settings:**
- Voices: 8
- HP Filter: 250Hz
- Pad 2 X: 50% (more obvious effect)
- Pad 3: Moderate movement
- Wet/Dry: 35-45%

**Why:** Ad-libs can handle more effect than leads. Creates ear candy without cluttering main vocal.

**Variations:**
- Moody tracks: Use darker settings with LP filter
- Upbeat tracks: Faster modulation for energy

---

#### 3. Synth Lead Widening
**Role:** Widen mono synth leads for modern trap/drill.

**Settings:**
- Voices: 8
- HP Filter: 100Hz
- Pad 2: Medium-high modulation
- Wet/Dry: 30-40%

**Why:** Trap leads often start mono (808 bass + simple synth). Hyper Chorus adds modern width.

**Common pairings:**
- Before: Distortion/saturation for harmonics
- After: Reverb for space

---

#### 4. Sample Layer Unification
**Role:** Blend disparate samples with cohesive width.

**Settings:**
- Voices: 8
- HP Filter: 150Hz
- Subtle settings (Pad 2 X: 35%)
- Wet/Dry: 25% on send

**Why:** Sample chops often come from different sources. Shared chorus send unifies them.

---

### Hip-Hop Don'ts

| Don't | Why | Better Alternative |
|-------|-----|-------------------|
| Chorus on 808s | Phase cancellation, weak bass | Keep 808s mono, use stereo width on higher elements |
| Chorus on kicks | Removes punch, phase issues | Use transient shapers, parallel compression |
| Heavy chorus on hooks | Can fight with lead vocal | Use on ad-libs instead, keep hook vocal cleaner |
| Fast modulation on rap vocals | Sounds like vocal effect, not rap | Keep modulation slow and subtle |
| 8 voices on everything | Too wide, loses focus | Be selective, 2-3 sources max with obvious chorus |

---

## R&B Production Guidelines

### Overview
R&B allows more liberal use of chorus for texture and atmosphere. Focus on smooth, warm applications.

### Typical Use Cases

#### 1. Background Vocal Ensemble
**Role:** Create choir-like thickness from layered backing vocals.

**Settings:**
- Voices: 8
- HP Filter: 250Hz
- Pad 2: Medium modulation (40%)
- Slow rate (Pad 2 Y: 25%)
- Wet/Dry: 35-45%

**Why:** R&B often uses multiple backing vocal layers. Hyper Chorus unifies them into ensemble.

---

#### 2. Rhodes/Soul Keys
**Role:** Add vintage ensemble character to electric piano.

**Settings:**
- Voices: 4 or 8
- HP Filter: 120Hz
- LP Filter: 12kHz (warm)
- Noise: 8-10%
- Pad 2: Slow, subtle modulation
- Wet/Dry: 30%

**Why:** Rhodes already has natural chorus from tines. Hyper Chorus enhances without overtaking.

**Vibe targets:** Vibey, Moody

---

#### 3. Vocal Harmony Widening
**Role:** Widen harmony vocals without losing vocal character.

**Settings:**
- Voices: 8
- HP Filter: 300Hz
- Pad 1: Short delay
- Pad 2: Low modulation (25%)
- Pad 3: Gentle auto-pan
- Wet/Dry: 30%

**Why:** Creates space around lead while maintaining harmonic clarity.

---

#### 4. Pad Atmosphere
**Role:** Create smooth, evolving pad textures.

**Settings:**
- Voices: 8
- HP Filter: 200Hz
- LP Filter: 10kHz
- Pad 2: Slow modulation (Pad 2 Y: 20%)
- Pad 3: Slow auto-pan
- Wet/Dry: 40%

**Why:** R&B pads need to be present but not distracting. Movement keeps them alive.

---

### R&B Specific Techniques

#### The "Vibey Vocal" Chain
1. Hyper Chorus (subtle)
2. Fruity Parametric EQ 2 (warmth)
3. Light compression
4. Reverb send

**Result:** Warm, wide, intimate vocal that feels expensive.

#### The "Neo-Soul Rhodes"
1. Light overdrive
2. Hyper Chorus (4 voices, slow, noise 10%)
3. Tape saturation
4. Room reverb

**Result:** Vintage Rhodes with modern width.

---

## Pop-Hip-Hop (Modern Mainstream)

### Overview
The fusion of hip-hop and pop production. Requires clarity and width without losing punch.

### Key Strategies

#### 1. Selective Widening
- Use Hyper Chorus on 2-3 key elements only
- Typically: Lead vocal (subtle), synth lead, one pad
- Everything else: Dry or minimal processing

#### 2. Width Hierarchy
| Element | Chorus Amount | Reason |
|---------|--------------|--------|
| Lead Vocal | 20-25% | Present but enhanced |
| Background Vox | 35-45% | More effect acceptable |
| Synth Lead | 30-40% | Width is the feature |
| Drums | 0% or parallel only | Keep punch |
| Bass | 0% | Mono always |

#### 3. Clarity First
- HP filters are mandatory (200Hz+)
- Mono compatibility essential
- Keep modulation subtle on leads

---

## Genre-Specific Vibe Applications

### Hip-Hop by Sub-Genre

| Sub-Genre | Vibe Focus | Chorus Application |
|-----------|------------|-------------------|
| **Trap** | Upbeat | Synth leads, aggressive modulation on FX |
| **Boom Bap** | Jazzy | Subtle, restrained, natural |
| **Drill** | Moody | Dark pads, filtered chorus |
| **Melodic Rap** | Vibey | Warm vocals, analog character |
| **Lo-Fi Hip-Hop** | Vibey | Heavy noise, LP filter, vintage feel |

### R&B by Style

| Style | Vibe Focus | Chorus Application |
|-------|------------|-------------------|
| **Contemporary R&B** | Vibey | Warm, smooth, analog |
| **Neo-Soul** | Jazzy | Natural ensemble, restrained |
| **Alternative R&B** | Moody/Psychedelic | Experimental, evolving textures |
| **Pop-R&B** | Upbeat | Clean, present, subtle |

---

## Reference Tracks Analysis

### Hip-Hop References
Track analysis for Hyper Chorus-like applications:

**Drake - "God's Plan" (2018)**
- Lead vocal: Subtle widening, very controlled
- Ad-libs: More obvious texture
- Synth pads: Smooth movement

**Travis Scott - "SICKO MODE" (2018)**
- Wide synth leads (likely multi-voice chorus)
- Vocal ad-libs with texture
- Atmospheric pads with movement

**Metro Boomin style tracks**
- Mono 808s (no chorus)
- Wide synth leads with chorus
- Tight vocal processing

### R&B References

**SZA - "Good Days" (2020)**
- Warm, wide vocal textures
- Rhodes with ensemble character
- Smooth pad movement

**Daniel Caesar - "Get You" (2016)**
- Intimate vocal, subtle widening
- Natural Rhodes character
- Restrained, vibey application

---

## Production Checklist by Genre

### Hip-Hop Checklist
- [ ] No chorus on 808s or kick
- [ ] Lead vocal subtle (20-25% wet)
- [ ] Ad-libs can be more aggressive
- [ ] Synth leads for width
- [ ] Mono compatibility checked
- [ ] HP filters engaged (200Hz+)

### R&B Checklist
- [ ] Warmth prioritized over width
- [ ] Noise knob used for analog feel
- [ ] Slow modulation rates
- [ ] Background vocals unified
- [ ] Rhodes treated with care
- [ ] LP filter for mood applications

### Pop-Hip-Hop Checklist
- [ ] Selective application (2-3 sources)
- [ ] Clarity over extreme width
- [ ] Mono compatibility essential
- [ ] Subtle on leads, bolder on backgrounds
- [ ] Consistent spatial field

---

**Version:** 1.0
**Sources:** [SRC: REPUTABLE - Production analysis], [SRC: IL-MAN]
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: Quick Result

## Overview
Get a usable chorus effect in under 2 minutes with minimal decisions.

## Routing Context
**Recommended:** Send/Return or Insert
- Send/Return: More control, share across sources
- Insert: Faster setup, source-specific

## Step-by-Step Setup

### Step 1: Load and Configure (30 seconds)
1. Load Hyper Chorus on target channel or create send
2. Set Dry/Wet to 30% for clear auditioning
3. Set Voices to 8

### Step 2: Quick Settings (45 seconds)
1. **Pad 1:** Drag to center (X=50%, Y=30%)
2. **Pad 2:** Drag to X=45%, Y=40%
3. **Pad 3:** Drag to X=40%, Y=30%
4. **HP Filter:** Set to 200Hz

### Step 3: Adjust for Context (30 seconds)
1. Listen with full mix playing
2. Reduce Wet/Dry if too obvious (target: 20-25%)
3. Switch to 4 voices if 8 is too thick
4. Raise HP filter if muddy (target: 200-300Hz)

### Step 4: Final Polish (15 seconds)
1. Toggle effect on/off - should enhance without dominating
2. Check mono button - should not disappear
3. Done

## Starting Settings Summary

| Parameter | Value |
|-----------|-------|
| Voices | 8 (or 4 if too thick) |
| Pad 1 | X=50%, Y=30% |
| Pad 2 | X=45%, Y=40% |
| Pad 3 | X=40%, Y=30% |
| HP Filter | 200Hz |
| LP Filter | 100% (no cut) |
| Noise | 0% |
| Wet/Dry | 25% |

## What to Listen For
- **Width increase:** Sound should be noticeably wider
- **No mud:** Low-end should stay clear
- **Mono safe:** Should maintain presence in mono
- **Musical:** Should enhance the song, not distract

## Variations

### For Faster Setup (Even Quicker)
Use these presets from `02-Data/presets/`:
- "Safe Default" - Balanced starting point
- "Vocal Thickener" - For vocals
- "Supersaw Classic" - For synths

### For Specific Sources
| Source | Quick Adjustment |
|--------|-----------------|
| Vocal | Raise HP to 300Hz, reduce Pad 2 X to 35% |
| Synth | Can be more aggressive, Pad 2 X=60% |
| Drums | Raise HP to 300Hz, use 4 voices |
| Pad | Keep 8 voices, can increase wet to 35% |

## Common Pitfalls & Quick Fixes

| Problem | Quick Fix |
|---------|-----------|
| Too subtle | Increase wet to 40% or switch to 8 voices |
| Too obvious | Reduce wet to 15% or switch to 4 voices |
| Muddy | Raise HP filter 50Hz higher |
| Harsh | Lower Pad 1 Y (feedback) |
| Phase issues | Raise HP filter, reduce Pad 2 X |

## When to Use This Workflow
- **Time-limited sessions:** Need results fast
- **Initial exploration:** Finding what works
- **Template creation:** Building starting states
- **Learning phase:** Understanding the plugin

## When NOT to Use This Workflow
- **Final mix decisions:** Needs more careful tuning
- **Complex sources:** May need customized approach
- **Critical elements:** Lead vocals deserve full attention

## Automation Ideas (If Time Permits)
1. **Section contrast:** Reduce wet in verses, increase in choruses
2. **Build automation:** Gradually increase Pad 3 X during build-ups
3. **Drop preparation:** Cut all parameters by 50% before a drop

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\01_Goal_Sound_Design.md

```markdown
# Goal: Sound Design

## Overview
Use Hyper Chorus as a creative sound design tool to create unique textures, ensembles, and sonic characters beyond standard chorus applications.

## Routing Context
**Recommended:** Insert with parallel blend or 100% wet on dedicated FX channel
- Insert: Direct processing for character creation
- Parallel: Blend extreme effects with dry
- 100% wet: For pure texture/sound design applications

## Core Sound Design Techniques

### 1. The Supersaw Creator
Transform a simple sawtooth into a massive trance lead.

**Setup:**
1. Source: Simple sawtooth wave (3xOsc, single oscillator)
2. Voices: 8
3. Pad 1: X=60% (medium delay), Y=30% (moderate feedback)
4. Pad 2: X=75% (high modulation), Y=50% (medium rate)
5. Pad 3: X=50%, Y=35% (gentle movement)
6. HP: 100Hz, LP: Full
7. Wet/Dry: 35%

**What to Listen For:**
- Thick, stacked character
- Wide stereo field
- Maintained pitch definition

**Variations:**
- Increase Pad 1 Y for metallic resonance
- Decrease Pad 2 X for tighter sound
- Add distortion before Hyper Chorus for more harmonics

---

### 2. The Metallic Resonator
Create ringing, bell-like textures for experimental music.

**Setup:**
1. Source: Any sustained sound (pad, vocal, sample)
2. Voices: 8
3. Pad 1: X=70% (long delay), Y=80% (high feedback)
4. Pad 2: X=50%, Y=40%
5. Pad 3: X=40%, Y=30%
6. HP: 300Hz, LP: 8kHz (tames harshness)
7. Noise: 10%
8. Wet/Dry: 50%
9. **SAFETY:** Place Fruity Limiter after Hyper Chorus

**What to Listen For:**
- Sustained ringing after input stops
- Bell-like or metallic character
- Controlled resonance (not runaway)

**Variations:**
- Automate Pad 1 for evolving resonance
- Use as transition FX between sections
- Resample and slice for unique percussion

---

### 3. The Ensemble Simulator
Create a "choir of one" from a single vocal or instrument.

**Setup:**
1. Source: Mono vocal or instrument
2. Voices: 8
3. Pad 1: X=35% (short delay), Y=15% (low feedback)
4. Pad 2: X=40% (moderate modulation), Y=25% (slow rate)
5. Pad 3: X=30%, Y=20% (subtle movement)
6. HP: 250Hz
7. Wet/Dry: 40%

**What to Listen For:**
- Natural ensemble character
- No obvious "effect" sound
- Width without phase issues

**Applications:**
- Solo vocal to backing choir
- Single violin to string section
- Mono synth to polyphonic texture

---

### 4. The Auto-Pan Engine
Use Hyper Chorus purely for spatial movement.

**Setup:**
1. Source: Any mono or narrow stereo source
2. Voices: 4 (modulation minimal)
3. Pad 1: X=10%, Y=0% (minimal delay, no feedback)
4. Pad 2: X=5%, Y=10% (minimal modulation)
5. Pad 3: X=70-90% (high pan amount), Y=40-60% (medium speed)
6. HP: 100Hz
7. Wet/Dry: 40%

**What to Listen For:**
- Clean stereo movement
- No pitch modulation
- Rhythmic or evolving spatial patterns

**Advantages over dedicated auto-panner:**
- Built into existing plugin
- Can add subtle detuning if desired (increase Pad 2)

---

### 5. The Lo-Fi Texture Generator
Add vintage character and grit to digital sources.

**Setup:**
1. Source: Clean digital synth or sample
2. Voices: 8
3. Pad 1: X=50%, Y=35%
4. Pad 2: X=45%, Y=40%
5. Pad 3: X=30%, Y=25%
6. HP: 200Hz
7. LP: 10kHz (darkens the sound)
8. Noise: 12-15%
9. Wet/Dry: 35%

**What to Listen For:**
- Analog-like imperfection
- Subtle hiss and texture
- Warmth without obvious noise

**Applications:**
- Lo-fi hip-hop production
- Vintage emulation
- Adding character to sterile sources

---

### 6. The Rhythmic Modulator
Create tempo-synced movement (requires automation).

**Setup:**
1. Source: Pad, drone, or sustained sound
2. Voices: 8
3. Pad 1: X=40%, Y=25%
4. Pad 2: X=60%
5. Pad 3: X=50%, Y=50%
6. HP: 150Hz
7. Wet/Dry: 45%

**Automation:**
- Automate Pad 2 Y (modulation rate) to create rhythmic patterns
- Try: Quarter-note rate changes for pulsing effect
- Try: Slow sweeps for evolving textures

**What to Listen For:**
- Rhythmic movement that complements the track
- Not random chaos—controlled evolution

---

### 7. The Resample & Slice Workflow
Capture Hyper Chorus movement for precise control.

**Setup:**
1. Create Hyper Chorus effect with heavy movement (Pad 3 active)
2. Route output to Edison or use "Render to wave"
3. Record 4-8 bars of the processed audio
4. Open recorded audio in Slicex or Fruity Slicer
5. Chop, rearrange, reverse slices

**Applications:**
- Unique risers from pad swells
- Custom vocal texture samples
- Rhythmic FX patterns
- Transition elements with built-in movement

**Tips:**
- Record longer than needed for more material
- Try reversing specific slices
- Layer multiple recordings for density

---

## Advanced Sound Design

### Layering Multiple Hyper Chorus
Create complex textures by using multiple instances:

**Setup:**
1. Instance 1: 4 voices, subtle, early in chain
2. Instance 2: 8 voices, aggressive, later in chain
3. Blend for complex character

**Applications:**
- Dense pad textures
- Complex vocal effects
- Experimental soundscapes

### Combining with Other Effects

**Hyper Chorus + Distortion:**
- Distortion adds harmonics for chorus to modulate
- More aggressive, textured result
- Great for industrial/electronic sounds

**Hyper Chorus + Reverb:**
- Chorus before reverb: Wider reverb tail
- Chorus after reverb: Chorused space (can be muddy)
- Generally prefer: Chorus → Reverb

**Hyper Chorus + Delay:**
- Creates cascading, evolving echoes
- Each delay repeat has different chorus phase
- Great for psychedelic effects

## Sound Design Checklist

Before using Hyper Chorus for sound design:

- [ ] Purpose is clear (what texture am I creating?)
- [ ] Source is appropriate for the effect
- [ ] Safety measures in place (limiter for high feedback)
- [ ] Mono compatibility checked
- [ ] CPU usage acceptable
- [ ] Sound fits the genre/vibe
- [ ] Not overusing across the mix

## Pitfalls & Fixes

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| Over-designing | Sound too complex, doesn't fit | Strip back to 2-3 parameters |
| Ignoring context | Cool sound, wrong vibe | Reference tracks for guidance |
| Feedback runaway | Loud ringing, distortion | Add limiter, reduce feedback |
| CPU overload | Dropouts, can't play project | Freeze tracks, reduce voices |
| Phase chaos | Mix falls apart in mono | Check mono compatibility regularly |

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\02_Goal_Mix_Or_Control.md

```markdown
# Goal: Mix or Control

## Overview
Use Hyper Chorus for mix-focused applications: widening, spatial enhancement, and controlling stereo width without obvious "effect" character.

## Routing Context
**Recommended:** Send/Return or Parallel
- Send/Return: Shared width across multiple sources
- Parallel: Blend with dry for control
- Rarely insert for mix-focused work (unless subtle enhancement)

## Mix Applications

### 1. The Width Enhancer
Add subtle width to mono or narrow sources without obvious chorus.

**Setup:**
1. Place on send/return track
2. Set Hyper Chorus to 100% wet
3. Settings:
   - Voices: 4
   - Pad 1: X=35%, Y=10%
   - Pad 2: X=25%, Y=30%
   - Pad 3: X=20%, Y=20%
   - HP: 150Hz
   - LP: Full
4. Route sources to send at 20-30% level

**What to Listen For:**
- Width increase without obvious modulation
- Source maintains focus and clarity
- Mono compatibility preserved

**Sources to treat:**
- Mono synths
- Single-mic recordings
- Samples that need spatial enhancement

---

### 2. The Mono-to-Stereo Converter
Convert mono sources to stereo for modern mix width.

**Setup:**
1. Mono source on channel
2. Hyper Chorus as insert (not send)
3. Settings:
   - Voices: 8
   - Pad 1: X=45%, Y=20%
   - Pad 2: X=40%, Y=35%
   - Pad 3: X=40%, Y=30%
   - HP: 150Hz
   - Wet/Dry: 30%

**What to Listen For:**
- Clear stereo image
- No phase cancellation
- Natural width, not artificial

**Important:** Always check mono compatibility. If source disappears in mono, reduce modulation or increase dry signal.

---

### 3. The Bus Unifier
Create cohesive width across multiple sources using shared send.

**Setup:**
1. Create "Chorus Bus" mixer track
2. Hyper Chorus on bus, 100% wet
3. Settings:
   - Voices: 8
   - Pad 1: X=40%, Y=25%
   - Pad 2: X=35%, Y=30%
   - Pad 3: X=35%, Y=25%
   - HP: 200Hz
4. Route multiple sources to this bus

**What to Listen For:**
- Unified spatial character
- Sources blend together
- Consistent width across treated elements

**Applications:**
- Background vocals
- Synth layers
- Sample chops
- Guitar doubles

---

### 4. The Drum Bus Widener
Add width to drums while preserving transient punch.

**Setup:**
1. Route drum bus to Hyper Chorus send (parallel)
2. Or: Duplicate drum bus to parallel channel with Hyper Chorus
3. Settings:
   - Voices: 4
   - Pad 1: X=35%, Y=20%
   - Pad 2: X=30%, Y=30%
   - Pad 3: X=45%, Y=35%
   - HP: 300Hz (protects kick)
   - Wet/Dry: 100% on parallel
4. Blend parallel channel with dry drum bus

**What to Listen For:**
- Snare and hi-hats gain width
- Kick remains centered and punchy
- Overall drum sound bigger but not washed out

**Critical:** High HP filter is essential. Chorus on kick = phase issues.

---

### 5. The Low-End Protector
Apply chorus to mid-high frequencies only, preserving bass.

**Setup:**
1. Full-range source that needs width
2. Hyper Chorus with aggressive HP filtering
3. Settings:
   - HP: 300-400Hz (removes all low-mid content)
   - Voices: 8
   - Moderate other settings
   - Wet/Dry: 25-35%

**What to Listen For:**
- Width and character above 300Hz
- Bass and low-mids unaffected
- No phase cancellation in low end

**Applications:**
- Full mix widening (master bus - use cautiously)
- Bass-heavy synths
- Guitar tracks with important low-end

---

### 6. The Dimension D Emulation
Subtle spatial enhancement like classic Roland Dimension D.

**Setup:**
1. Insert on source or bus
2. Settings:
   - Voices: 4
   - Pad 1: X=30%, Y=0%
   - Pad 2: X=20%, Y=35%
   - Pad 3: X=0%, Y=0%
   - HP: 100Hz
   - Wet/Dry: 30%

**What to Listen For:**
- "Air" around the source
- Slight width increase
- No obvious chorus effect
- Enhanced "3D" quality

**Best for:**
- Master bus (subtle)
- Acoustic sources
- When you want space without "effect"

---

### 7. The Stereo Field Balancer
Use auto-pan to balance stereo image.

**Setup:**
1. Source that sits too heavy on one side
2. Settings:
   - Voices: 4
   - Pad 1: X=15%, Y=10%
   - Pad 2: X=15%, Y=20%
   - Pad 3: X=60%, Y=25% (gentle auto-pan)
   - HP: 150Hz
   - Wet/Dry: 25%

**What to Listen For:**
- More centered or balanced stereo image
- Gentle movement prevents static weight
- Doesn't fight with other panning decisions

---

## Mix Context Decisions

### When to Use Hyper Chorus in Mixing

| Situation | Use? | Approach |
|-----------|------|----------|
| Mix too narrow | Yes | Bus unifier on multiple sources |
| Mono source needs width | Yes | Mono-to-stereo conversion |
| Drums need width | Yes | Parallel processing with HP filter |
| Bass needs width | No | Keep bass mono always |
| Lead vocal needs something | Maybe | Very subtle, 15-20% wet |
| Background elements | Yes | More aggressive treatment acceptable |
| Master bus | Rarely | Only Dimension D style, very subtle |

### Width Hierarchy Strategy

Plan your mix width from center to edges:

`\`\`
Center (Mono)          →          Wide (Stereo)
Bass, Kick, Lead Vox      Snare, Leads       Hats, FX, Pads
     ↓                        ↓                    ↓
  No Chorus              Subtle Chorus      Obvious Chorus
  (Mono always)         (20-30% wet)       (30-50% wet)
`\`\`

## Mix Control Techniques

### 1. Wet/Dry Automation
Automate the mix amount for section contrast:
- Verses: 15-20% (intimate)
- Choruses: 25-35% (bigger)
- Bridges: 40%+ (experimental)

### 2. Send Level Automation
If using sends, automate send levels instead of wet/dry:
- More flexible
- Multiple sources respond together
- Easier to adjust globally

### 3. Filter Automation
Automate HP filter for section changes:
- Verse: HP 250Hz (cleaner)
- Chorus: HP 150Hz (fuller)

## Mix Pitfalls & Fixes

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| Over-widening | Mix lacks center focus | Reduce chorus on side elements |
| Phase collapse | Mix falls apart in mono | Check mono compatibility, reduce modulation |
| Mud buildup | Low-mids unclear | Raise HP filters across all chorus instances |
| Width inconsistency | Some sources too wide, others narrow | Unified send approach |
| CPU overload | Can't play mix back | Freeze tracks, reduce voice count |

## Automation Ideas for Mix Context

1. **Chorus Build-Up**
   - Gradually increase send levels during pre-chorus
   - Creates anticipation through widening

2. **Verse/Chorus Contrast**
   - Verses: Minimal chorus (focused)
   - Choruses: Full chorus (expansive)

3. **Drop Preparation**
   - Cut all chorus to 0% before drop
   - Re-introduce at full at drop for impact

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\03_Goal_Creative_Effect.md

```markdown
# Goal: Creative Effect

## Overview
Use Hyper Chorus for bold, obvious effects that are part of the artistic statement—transitions, textures, and experimental sound design where the chorus IS the feature.

## Routing Context
**Recommended:** Insert at 100% wet or Parallel with heavy processing
- Insert (100% wet): Maximum effect, pure texture
- Parallel: Blend extreme effect with clean source
- Dedicated FX channel: For resampling and further processing

## Creative Effect Applications

### 1. The Swirling Transition
Create a swirling, disorienting transition between song sections.

**Setup:**
1. Place on transition sound (riser, sweep, or sustained tone)
2. Settings:
   - Voices: 8
   - Pad 1: X=60%, Y=50%
   - Pad 2: X=80%, Y=60%
   - Pad 3: X=80%, Y=50%
   - HP: 100Hz
   - Wet/Dry: 100%

**Automation:**
- 4 bars before transition: Gradually increase all parameters
- At transition peak: Maximum values
- After transition: Cut to 0% instantly

**What to Listen For:**
- Increasing intensity and width
- Disorienting swirl at peak
- Clean cut after transition

---

### 2. The Metallic Drop FX
Create a ringing, metallic texture for EDM/pop drops.

**Setup:**
1. Source: Short hit, vocal chop, or synth stab
2. Settings:
   - Voices: 8
   - Pad 1: X=75%, Y=85%
   - Pad 2: X=60%, Y=50%
   - Pad 3: X=50%, Y=40%
   - HP: 200Hz
   - LP: 8kHz
   - Noise: 15%
   - Wet/Dry: 70%
3. **Safety:** Fruity Limiter after Hyper Chorus

**What to Listen For:**
- Sustained ringing after initial hit
- Metallic character
- Controlled (not runaway) resonance

**Applications:**
- Drop impacts
- Vocal chop effects
- Percussion layering

---

### 3. The Psychedelic Vocal
Transform a vocal into a psychedelic, evolving texture.

**Setup:**
1. Vocal phrase or sustained note
2. Settings:
   - Voices: 8
   - Pad 1: X=50%, Y=40%
   - Pad 2: X=85%, Y=70%
   - Pad 3: X=90%, Y=60%
   - HP: 150Hz
   - Wet/Dry: 80%

**Automation:**
- Heavy automation on Pad 2 and Pad 3
- Slow sweeps over 8-16 bars
- Create evolving, unpredictable movement

**What to Listen For:**
- Extreme but musical detuning
- Constant evolution
- Psychedelic character

---

### 4. The Lo-Fi Texture Effect
Create obvious lo-fi character for effect moments.

**Setup:**
1. Source: Clean sample or recording
2. Settings:
   - Voices: 8
   - Pad 1: X=55%, Y=40%
   - Pad 2: X=50%, Y=45%
   - Pad 3: X=40%, Y=35%
   - HP: 250Hz
   - LP: 8kHz
   - Noise: 18%
   - Wet/Dry: 60%

**What to Listen For:**
- Obvious noise texture
- Dark, muffled quality
- Vintage/bedroom character

**Applications:**
- Lo-fi hip-hop intros
- Bridge sections
- Nostalgic moments

---

### 5. The Resample & Slice FX
Capture Hyper Chorus as audio for creative editing.

**Workflow:**
1. Set up extreme Hyper Chorus settings
2. Route to Edison or "Render to wave"
3. Record 4-8 bars
4. Import to Slicex/Fruity Slicer
5. Create rhythmic patterns from the recording

**Creative Editing:**
- Reverse specific slices
- Time-stretch for unusual textures
- Layer with original source
- Use as percussion

**What to Listen For:**
- Unique textures not possible with real-time processing
- Rhythmic potential
- Unexpected character

---

### 6. The Auto-Pan Riser
Use movement pad for tempo-synced stereo risers.

**Setup:**
1. Sustained pad or tone
2. Settings:
   - Voices: 4
   - Pad 1: X=30%, Y=20%
   - Pad 2: X=30%, Y=25%
   - Pad 3: X=85%, Y=70% (fast auto-pan)
   - HP: 150Hz
   - Wet/Dry: 50%

**Automation:**
- Increase Pad 3 Y (speed) during build
- Creates accelerating stereo swirl
- Peak at transition point

**What to Listen For:**
- Increasing speed of movement
- Stereo field excitement
- Build energy through motion

---

### 7. The Glitch Texture
Create stuttering, glitchy textures with parameter jumps.

**Setup:**
1. Rhythmic source or sustained sound
2. Extreme settings
3. Automation with stepped curves (not smooth)

**Automation Pattern:**
- Every 1/4 note: Jump Pad 2 X between 20% and 80%
- Every 1/2 note: Jump Pad 3 X between 10% and 70%
- Creates chaotic, glitchy movement

**What to Listen For:**
- Rhythmic chaos
- Stuttering character
- Glitch aesthetic

---

## Creative Effect Chains

### Chain 1: Psychedelic Vocal Chain
1. Hyper Chorus (extreme settings)
2. Fruity Reverb 2 (100% wet, long decay)
3. Fruity Parametric EQ 2 (sculpt frequencies)
4. Fruity Limiter (control dynamics)

**Result:** Ethereal, evolving vocal texture

### Chain 2: Industrial Metal Chain
1. Fruity Waveshaper (heavy distortion)
2. Hyper Chorus (high feedback, metallic)
3. Fruity Reverb 2 (short, dense)
4. Fruity Parametric EQ 2 (scoop mids)

**Result:** Aggressive, metallic industrial texture

### Chain 3: Lo-Fi Dream Chain
1. Hyper Chorus (noise, LP filter)
2. Fruity Delay 3 (dotted 8th, feedback)
3. Fruity Reverb 2 (room, 50% wet)
4. Fruity Parametric EQ 2 (high shelf cut)

**Result:** Nostalgic, dreamy lo-fi texture

## Creative Effect Pitfalls

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| Overuse | Effect loses impact | Reserve for specific moments |
| No contrast | Always extreme, becomes boring | Balance with subtle sections |
| CPU overload | Project unplayable | Freeze creative effect tracks |
| Mono collapse | Cool effect disappears in mono | Test mono compatibility |
| Frequency masking | Effect fights with other elements | Use EQ to carve space |

## When to Use Creative Effects

### Good Opportunities
- Transitions between sections
- Breakdowns and build-ups
- Bridge sections
- Intros and outros
- Special moments (drops, impacts)
- Background texture layers

### When to Avoid
- Verse lead vocals (distracting)
- Main rhythmic elements (can confuse groove)
- Bass elements (phase issues)
- Throughout entire track (monotonous)

## Automation Ideas for Creative Effects

1. **The Build-Up Swirl**
   - Gradually increase Pad 2 and Pad 3 over 8 bars
   - Peak at transition
   - Cut instantly after

2. **The Rhythmic Chop**
   - Automate wet/dry in rhythmic pattern
   - Creates stutter effect

3. **The Filter Sweep**
   - Automate LP filter from full to 5kHz
   - Darkens texture over time

4. **The Feedback Rise**
   - Automate Pad 1 Y from 20% to 80%
   - Creates building resonance
   - Cut before runaway

5. **The Voice Morph**
   - Automate between 4 and 8 voices
   - Subtle density change

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\10_Vibe_Moody.md

```markdown
# Vibe: Moody

## Overview
Create dark, atmospheric, emotionally heavy textures with controlled width and subtle movement.

## Routing Context
**Recommended:** Send/Return (atmospheric) or Insert with subtle wet/dry
- Send: Shared atmosphere across multiple sources
- Insert: Intimate, source-specific mood
- Parallel: Deep atmosphere while preserving clarity

## Mood Definition in Production Terms

| Element | Moody Approach |
|---------|----------------|
| **Depth** | Create distance, place sounds "behind" |
| **Darkness** | Roll off highs, emphasize low-mids |
| **Control** | Restrained settings, no chaos |
| **Movement** | Slow, imperceptible evolution |
| **Width** | Present but not overwhelming |

---

## Starting Settings

| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 4 | Cleaner, less busy |
| Pad 1 X | 55% | Medium-long delay, diffuse |
| Pad 1 Y | 15% | Low feedback, no harshness |
| Pad 2 X | 20% | Subtle modulation |
| Pad 2 Y | 15% | Very slow movement |
| Pad 3 X | 10% | Minimal auto-pan |
| Pad 3 Y | 20% | Slow speed |
| HP Filter | 250Hz | Removes low-mid mud |
| LP Filter | 9kHz | Darks the sound |
| Noise | 8% | Adds lo-fi texture |
| Wet/Dry | 25% | Subtle blend |

---

## Step-by-Step Workflow

### Step 1: Source Selection (1 minute)
Choose appropriate sources for mood treatment:
- Pads and sustained textures
- Background vocals
- Atmospheric FX
- Rhodes/piano (mournful passages)

**Avoid:** Lead elements that need to be forward and present

### Step 2: Routing Decision (30 seconds)
- **Send/Return:** For shared atmosphere across multiple sources
- **Insert:** For specific source needing intimacy
- **Parallel:** For deep atmosphere while maintaining clarity

### Step 3: Apply Settings (2 minutes)
1. Load Hyper Chorus
2. Apply "Moody" starting settings above
3. Adjust HP filter based on source (200-400Hz range)
4. Set wet/dry based on context (20-30%)

### Step 4: Fine-Tune (2 minutes)
1. Listen in full mix context
2. Adjust LP filter for desired darkness (8-10kHz)
3. Fine-tune Pad 2 for appropriate movement
4. Check mono compatibility

---

## What to Listen For

### Positive Indicators
- Sound feels "behind" other elements
- Dark, muted character without muddiness
- Slow, subtle movement (almost imperceptible)
- Emotional weight and atmosphere
- No harsh resonances

### Warning Signs
- Too much modulation (breaks slow feeling)
- Bright artifacts (kills dark mood)
- Fast movement (too energetic)
- Phase issues in mono
- Sound fights with lead elements

---

## Variations

### Variation 1: Deep Atmosphere (Pads)
Increase Pad 1 X to 65% for more diffuse, distant quality.
Use for: Ambient pads, background textures

### Variation 2: Intimate Vocal
Reduce Pad 2 X to 15%, increase HP to 300Hz.
Use for: Emotional lead vocals, ballads

### Variation 3: Dark Rhodes
Add Noise 10%, LP filter at 8kHz.
Use for: Mournful keys, soul ballads

---

## Pitfalls & Fixes

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| **Using 8 voices** | Too busy, loses intimacy | Switch to 4 voices |
| **Fast modulation** | Breaks slow, heavy feeling | Reduce Pad 2 Y to bottom 20% |
| **High feedback** | Harshness, kills darkness | Keep Pad 1 Y under 20% |
| **Bright settings** | Wrong vibe completely | Engage LP filter at 9kHz or lower |
| **Obvious auto-pan** | Distracts from emotion | Keep Pad 3 minimal |
| **Too wet** | Effect becomes the feature | Reduce to 20-25% |

---

## Automation Ideas

### 1. Darkening Filter Sweep
- Automate LP filter from 12kHz → 8kHz over 8 bars
- Creates gradually darkening atmosphere
- Perfect for bridge sections

### 2. Subtle Movement Increase
- Automate Pad 3 X from 10% → 25% during section
- Adds tension through increased motion
- Return to subtle for release

### 3. Noise Fade-In
- Bring noise from 0% → 10% during breakdown
- Adds lo-fi texture and grit
- Fade out for cleaner sections

### 4. Distance Automation
- Increase Pad 1 X (delay) gradually
- Creates sense of moving away
- Reverse for "coming closer" effect

---

## Hip-Hop/R&B Applications

### Hip-Hop: Moody Drill/Trap
- Dark pad textures
- Background atmosphere
- Intros and outros
- Bridge sections

**Settings emphasis:**
- HP: 300Hz+ (clean, modern)
- LP: 8-9kHz (dark)
- Minimal movement

### R&B: Soulful Ballads
- Intimate vocals
- Rhodes textures
- Background pads
- Emotional sections

**Settings emphasis:**
- HP: 250Hz (warmth preserved)
- Noise: 8-10% (analog feel)
- Very slow modulation

---

## Reference Context

### When to Use Moody Settings
- Minor key sections
- Emotional lyrics
- Bridge or breakdown sections
- Late-night/vibe tracks
- Introspective moments

### Pair With
- Reverb: Long, dark decays
- EQ: High-frequency roll-offs
- Compression: Gentle, preserving dynamics
- Saturation: Warm, subtle

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\11_Vibe_Upbeat.md

```markdown
# Vibe: Upbeat

## Overview
Create energetic, clear, forward-moving textures that enhance groove without sacrificing punch or clarity.

## Routing Context
**Recommended:** Insert or Send/Return with moderate wetness
- Insert: Direct energy enhancement
- Send: Shared energy across multiple sources
- Parallel: Preserve punch while adding width

## Vibe Definition in Production Terms

| Element | Upbeat Approach |
|---------|-----------------|
| **Clarity** | Each element stays distinct |
| **Punch** | Transients remain sharp |
| **Energy** | Movement adds life |
| **Forward** | Sound feels present, not distant |
| **Brightness** | Controlled high-end, not dark |

---

## Starting Settings

| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Maximum energy and fullness |
| Pad 1 X | 45% | Tight delay for punch |
| Pad 1 Y | 25% | Some character without ringing |
| Pad 2 X | 50% | Noticeable but controlled detuning |
| Pad 2 Y | 55% | Energetic movement |
| Pad 3 X | 55% | Active stereo field |
| Pad 3 Y | 50% | Medium speed for groove |
| HP Filter | 180Hz | Protects punch, adds upper width |
| LP Filter | 100% | Full brightness |
| Noise | 3% | Minimal texture |
| Wet/Dry | 30% | Present but not overwhelming |

---

## Step-by-Step Workflow

### Step 1: Source Selection
Choose sources that need energy and width:
- Synth leads
- Energetic vocals
- Drum layers (careful with HP)
- Arpeggios and rhythmic elements

**Avoid:** Sources that need to stay dark or moody

### Step 2: Routing Decision
- **Insert:** For direct source enhancement
- **Send:** For consistent energy across multiple elements
- **Parallel:** When punch preservation is critical

### Step 3: Apply Settings
1. Load Hyper Chorus
2. Apply "Upbeat" starting settings
3. Adjust HP based on source (150-250Hz)
4. Set wet/dry based on context (25-40%)

### Step 4: Fine-Tune
1. Listen with drums playing
2. Verify punch is preserved
3. Check clarity in full mix
4. Adjust modulation for groove compatibility

---

## What to Listen For

### Positive Indicators
- Punch maintained (transients sharp)
- Clarity (each element distinct)
- Energy (movement adds life)
- Forward presence
- Groove articulation preserved

### Warning Signs
- Soft transients (reduce wet or modulation)
- Muddy sound (raise HP filter)
- Seasick effect (slow down Pad 2)
- Phase issues in mono
- Fighting with groove

---

## Variations

### Variation 1: Pop Sparkle
- Voices: 4 (cleaner)
- LP: 14kHz (bright but controlled)
- Noise: 0%
- Use for: Pop vocals, bright synths

### Variation 2: Dance Floor Energy
- Pad 2: 60% X, 60% Y (more aggressive)
- Pad 3: 65% X, 55% Y (more movement)
- Use for: EDM leads, dance vocals

### Variation 3: Drum Width (Parallel)
- HP: 300Hz (protect kick)
- Voices: 4
- Wet/Dry: 100% on parallel
- Blend: 20-30% with dry

---

## Pitfalls & Fixes

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| **Long delay times** | Loose, lagging feel | Reduce Pad 1 X to 40% or less |
| **High feedback** | Softened transients | Reduce Pad 1 Y to 20% |
| **Fast auto-pan** | Seasick feeling | Reduce Pad 3 Y to 40% |
| **Too wet** | Effect dominates | Reduce to 25% wet |
| **No HP filter** | Muddy low-mids | Engage HP at 200Hz+ |
| **Phase issues** | Hollow mono sound | Reduce Pad 2 X, raise HP |

---

## Automation Ideas

### 1. Energy Build
- Increase Pad 2 X and Y gradually
- Peak at chorus/drop
- Creates anticipation

### 2. Groove Accent
- Automate Pad 3 in rhythmic pattern
- Accent specific beats
- Adds motion to groove

### 3. Section Contrast
- Verse: 25% wet
- Pre-chorus: 35% wet
- Chorus: 40% wet
- Creates build naturally

### 4. Filter Opening
- Start with slight LP roll at 12kHz
- Open to full during chorus
- Adds brightness = energy

---

## Hip-Hop/R&B Applications

### Hip-Hop: Trap/Dance
- Wide synth leads
- Energetic ad-libs
- Build-up elements
- Drop sections

**Settings emphasis:**
- Full brightness
- Medium-high modulation
- Active movement

### R&B: Pop-R&B
- Lead vocals (subtle)
- Background vocals
- Bright synth layers
- Upbeat sections

**Settings emphasis:**
- Clean (4 voices often)
- Controlled width
- Present but not aggressive

---

## Reference Context

### When to Use Upbeat Settings
- Chorus sections
- Dance/club tracks
- Pop productions
- Build-ups and peaks
- Daytime/positive themes

### Pair With
- Compression: Medium attack (preserves transients)
- EQ: Bright boosts
- Saturation: Excitement and harmonics
- Sidechain: Groove definition

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\12_Vibe_Psychedelic.md

```markdown
# Vibe: Psychedelic

## Overview
Create expansive, mind-bending, constantly evolving textures with extreme width, dramatic modulation, and spatial animation.

## Routing Context
**Recommended:** Insert at high wetness or 100% wet on FX channel
- Insert (50-100% wet): Maximum psychedelic effect
- FX channel: For resampling and further processing
- Parallel: Blend extreme with clean for control

## Vibe Definition in Production Terms

| Element | Psychedelic Approach |
|---------|---------------------|
| **Width** | Beyond the speakers, extreme |
| **Movement** | Constant evolution, never static |
| **Texture** | Rich, layered, complex |
| **Surprise** | Unexpected moments |
| **Immersion** | All-encompassing sound |

---

## Starting Settings

| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Maximum density always |
| Pad 1 X | 70% | Long delay for space |
| Pad 1 Y | 60% | Resonant sustain |
| Pad 2 X | 85% | Extreme detuning |
| Pad 2 Y | 70% | Fast modulation |
| Pad 3 X | 80% | Dramatic stereo movement |
| Pad 3 Y | 65% | Fast panning |
| HP Filter | 120Hz | Protects bass while maximizing width |
| LP Filter | 100% | Full spectrum |
| Noise | 8% | Texture for complexity |
| Wet/Dry | 60% | Effect is a major feature |

---

## Step-by-Step Workflow

### Step 1: Source Selection
Choose sources for psychedelic treatment:
- Pads and drones
- FX and transitions
- Background textures
- Experimental sections

**Best for:** Sections where the effect IS the experience

### Step 2: Routing Decision
- **Insert (high wet):** For pure psychedelic transformation
- **FX channel:** For further processing and resampling
- **Parallel:** When you need some grounding

### Step 3: Apply Settings
1. Load Hyper Chorus
2. Apply "Psychedelic" starting settings
3. Engage Fruity Limiter after (safety)
4. Set wet/dry to 50-70%

### Step 4: Add Automation (Essential)
1. Automate Pad 2 X and Y over 8-16 bars
2. Automate Pad 3 for evolving spatial field
3. Create constant movement and evolution

---

## What to Listen For

### Positive Indicators
- Extreme width ("beyond the speakers")
- Constant evolution (never static)
- Rich, layered texture
- Surprising moments from automation
- Immersive, all-encompassing quality

### Warning Signs
- Static settings (must be automated)
- Mono playback (kills the effect)
- Too controlled (should be extreme)
- Fighting with other elements
- Boring repetition

---

## Variations

### Variation 1: Swirling Pads
- Pad 2 Y: Modulate between 30-70% slowly
- Pad 3: Heavy automation
- Use for: Sustained chords, ambient sections

### Variation 2: Deep Trip
- Pad 1 Y: 80% (high feedback)
- LP filter: Roll to 8kHz if too bright
- Use for: Breakdowns, experimental sections

### Variation 3: Rhythmic Psychedelia
- Automate parameters in rhythmic patterns
- Sync to tempo divisions
- Use for: Groove-based psychedelic

---

## Pitfalls & Fixes

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| **Static settings** | Boring, repetitive | Heavy automation essential |
| **Mono playback** | Effect destroyed | Accept that this is stereo-only |
| **Too subtle** | Not psychedelic enough | Push all parameters further |
| **Frequency masking** | Fights with other elements | Use EQ to carve space |
| **Runaway feedback** | Loud ringing | Add limiter, reduce Pad 1 Y |
| **CPU overload** | Dropouts | Freeze tracks, reduce elsewhere |

---

## Automation Ideas (Essential)

### 1. The Slow Spiral
- Automate Pad 2 Y from 30% → 70% over 16 bars
- Creates accelerating movement
- Peak at transition

### 2. The Spatial Journey
- Automate Pad 3 X between 50% and 90%
- Y between 30% and 70%
- Creates evolving stereo field

### 3. The Feedback Build
- Automate Pad 1 Y from 40% → 80%
- Creates building resonance
- Cut before runaway

### 4. The Dimension Hop
- Automate all pads simultaneously
- Jump between different settings every 4 bars
- Creates distinct "worlds"

### 5. The Resample Workflow
1. Set up extreme psychedelic settings
2. Automate heavily over 8-16 bars
3. Render to audio
4. Slice and rearrange
5. Create unique psychedelic patterns

---

## Hip-Hop/R&B Applications

### Hip-Hop: Experimental/Alternative
- Breakdown sections
- Bridge textures
- Outro experimentation
- Transition FX

**Settings emphasis:**
- Extreme everything
- Heavy automation
- Accept the chaos

### R&B: Alternative/Psychedelic Soul
- Atmospheric intros
- Bridge experimentation
- Background textures
- Creative FX

**Settings emphasis:**
- Can be slightly more controlled
- Focus on Pad 3 movement
- Rhythmic automation

---

## Reference Context

### When to Use Psychedelic Settings
- Bridge sections
- Breakdowns and build-ups
- Experimental tracks
- Outros
- Special moments
- Not: Verses, hooks (usually too distracting)

### Pair With
- Reverb: Long, cavernous
- Delay: Dotted 8th, feedback
- Distortion: For edge and texture
- Other modulators: Phaser, flanger

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\13_Vibe_Jazzy.md

```markdown
# Vibe: Jazzy

## Overview
Create natural, dynamic, articulate textures that preserve performance nuances and sound like real ensemble playing.

## Routing Context
**Recommended:** Insert with subtle settings or Send/Return for natural ensemble
- Insert: Subtle enhancement of performance
- Send: Natural ensemble effect for multiple sources
- Low wetness essential (15-25%)

## Vibe Definition in Production Terms

| Element | Jazzy Approach |
|---------|----------------|
| **Natural** | Sounds like real players, not processing |
| **Dynamic** | Performance nuances preserved |
| **Articulate** | Transients and details maintained |
| **Restrained** | Effect never announces itself |
| **Warm** | Full acoustic character |

---

## Starting Settings

| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 4 | More natural, less synthetic |
| Pad 1 X | 35% | Short delay for articulation |
| Pad 1 Y | 8% | Very low feedback, natural |
| Pad 2 X | 22% | Subtle enhancement |
| Pad 2 Y | 35% | Natural ensemble speed |
| Pad 3 X | 12% | Minimal auto-pan |
| Pad 3 Y | 25% | Slow, natural movement |
| HP Filter | 100Hz | Protects acoustic bass |
| LP Filter | 100% | Natural top end |
| Noise | 0% | Clean and acoustic |
| Wet/Dry | 20% | Barely noticeable |

---

## Step-by-Step Workflow

### Step 1: Source Selection
Choose acoustic or natural sources:
- Acoustic piano
- Rhodes/soul keys
- Jazz guitar
- Acoustic bass (careful, use high HP)
- Natural vocals

**Avoid:** Synthetic sources, heavy electronic elements

### Step 2: Routing Decision
- **Insert:** For subtle enhancement of solo performance
- **Send:** For natural ensemble on multiple sources
- Keep wetness low (15-25%)

### Step 3: Apply Settings
1. Load Hyper Chorus
2. Apply "Jazzy" starting settings
3. Adjust HP if needed (80-150Hz range)
4. Set wet/dry to 15-25%

### Step 4: Fine-Tune
1. Listen solo first (should sound natural)
2. Add to mix (should blend seamlessly)
3. Verify no obvious "effect" sound
4. Check mono compatibility

---

## What to Listen For

### Positive Indicators
- Sounds like a real ensemble
- Performance dynamics preserved
- Transients clear and articulate
- No obvious "effect" character
- Warm, full acoustic tone

### Warning Signs
- Synthetic character (use fewer voices)
- Lost dynamics (reduce wetness)
- Obvious chorus sound (reduce modulation)
- Phase issues (check mono)
- Fighting with natural tone

---

## Variations

### Variation 1: Piano Ensemble
- HP: 100Hz (full piano range)
- Pad 2: 20% X (very subtle)
- Use for: Solo piano enhancement

### Variation 2: Vocal Quartet
- Voices: 8 (but very subtle settings)
- HP: 200Hz
- Pad 2: 25% X
- Use for: Jazz vocals, backing ensemble

### Variation 3: Rhodes Warmth
- Noise: 5% (slight analog)
- LP: Slight roll at 15kHz
- Use for: Soul/R&B Rhodes

---

## Pitfalls & Fixes

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| **Using 8 voices** | Sounds synthetic | Switch to 4 voices |
| **High feedback** | Artificial artifacts | Keep Pad 1 Y under 10% |
| **Fast modulation** | Sounds like "effect" | Slow Pad 2 Y to 30% or less |
| **Too wet** | Obvious processing | Reduce to 15-20% |
| **High auto-pan** | Distracting | Keep Pad 3 minimal |
| **Noise on acoustic** | Wrong aesthetic | Keep noise at 0% |

---

## Automation Ideas

### 1. Subtle Swell
- Automate wet from 15% → 25% during solo
- Return to subtle for ensemble
- Adds focus without obviousness

### 2. Natural Breathing
- Very slow automation of Pad 2 X (20-25%)
- Creates "breathing" ensemble
- Bar-length or longer cycles

### 3. Solo/Ensemble Contrast
- Solo: Minimal chorus (15%)
- Ensemble section: Slightly more (25%)
- Mimics real acoustic changes

---

## Hip-Hop/R&B Applications

### Hip-Hop: Jazz Rap/Boom Bap
- Piano samples
- Jazz guitar loops
- Acoustic bass (very careful)
- Soulful samples

**Settings emphasis:**
- Restrained always
- Natural character priority
- Minimal processing

### R&B: Neo-Soul/Jazz Fusion
- Rhodes textures
- Jazz-influenced vocals
- Acoustic guitar
- Soulful keys

**Settings emphasis:**
- Warmth over width
- Analog character welcome
- Subtle ensemble feel

---

## Reference Context

### When to Use Jazzy Settings
- Jazz-influenced tracks
- Acoustic recordings
- Neo-soul productions
- When naturalness is priority
- Sophisticated, mature sound

### Pair With
- Compression: Gentle, preserving dynamics
- EQ: Minimal, natural tone
- Reverb: Room or hall, natural decay
- Saturation: Tape or tube, subtle

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\14_Vibe_Vibey.md

```markdown
# Vibe: Vibey

## Overview
Create effortlessly cool, slightly imperfect, human textures with subtle movement, warmth, micro-automation, and "ear candy" that rewards close listening.

## Routing Context
**Recommended:** Insert or Send/Return with moderate wetness
- Insert: Source-specific character
- Send: Shared vibe across multiple sources
- Parallel: Blend for perfect integration

## Vibe Definition in Production Terms

| Element | Vibey Approach |
|---------|----------------|
| **Character** | Unique, identifiable texture |
| **Warmth** | Analog-like imperfection |
| **Movement** | Gentle evolution |
| **Integration** | Sits perfectly in mix |
| **Human** | Slightly imperfect, not robotic |

---

## Starting Settings

| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 4 or 8 (source dependent) | Match to source character |
| Pad 1 X | 40% | Balanced depth |
| Pad 1 Y | 18% | Slight character |
| Pad 2 X | 35% | Noticeable but pleasant |
| Pad 2 Y | 30% | Gentle movement |
| Pad 3 X | 30% | Subtle width |
| Pad 3 Y | 25% | Slow drift |
| HP Filter | 130Hz | Clean but not clinical |
| LP Filter | 12kHz | Warm, slight roll |
| Noise | 10% | Analog character |
| Wet/Dry | 30% | Present but integrated |

---

## Step-by-Step Workflow

### Step 1: Source Selection
Choose sources for vibey treatment:
- Soul/R&B vocals
- Rhodes and warm keys
- Lo-fi samples
- Warm synths
- Bedroom pop elements

**Best for:** Sources that need character and warmth

### Step 2: Routing Decision
- **Insert:** For specific source character
- **Send:** For shared warmth across sources
- **Parallel:** For perfect blend control

### Step 3: Apply Settings
1. Load Hyper Chorus
2. Apply "Vibey" starting settings
3. Adjust noise for desired analog feel (5-15%)
4. Set wet/dry to 25-35%

### Step 4: Add Micro-Automation
1. Subtle automation on Pad 2 (slow sweeps)
2. Occasional Pad 3 movement
3. Small changes over time (8+ bars)

---

## What to Listen For

### Positive Indicators
- Unique, identifiable texture
- Warmth and analog feel
- Gentle movement (interesting over time)
- Perfect mix integration
- Slight imperfection (human quality)

### Warning Signs
- Too clean/digital (increase noise)
- Static/boring (add automation)
- Too obvious (reduce wetness)
- Cold/sterile (adjust LP filter)
- Fighting with other elements

---

## Variations

### Variation 1: Analog Warmth
- Noise: 12%
- LP: 11kHz
- Use for: Digital synths needing warmth

### Variation 2: Bedroom Pop
- Voices: 8
- Noise: 12%
- Pad 2: Slightly more movement
- Use for: Indie vocals, nostalgic textures

### Variation 3: Soul Vocal
- HP: 160Hz
- Pad 2: 38% X, gentle
- Wet: 32%
- Use for: R&B/soul lead vocals

---

## Pitfalls & Fixes

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| **Over-processing** | Loses natural vibe | Reduce all parameters 20% |
| **Extreme settings** | Any one parameter maxed | Pull back to balanced settings |
| **No noise** | Too clean/digital | Add 8-12% noise |
| **Static** | Boring over time | Add slow automation |
| **Too wet** | Effect becomes feature | Reduce to 25% |
| **Too bright** | Kills warmth | Roll LP to 11-12kHz |

---

## Automation Ideas

### 1. Micro-Movement
- Automate Pad 2 X between 30-40% over 16 bars
- Almost imperceptible
- Keeps source alive

### 2. Noise Breathing
- Automate noise 8% → 12% → 8%
- Creates analog "breathing"
- Very slow cycle (32 bars)

### 3. Warmth Swell
- Slight LP filter opening (11kHz → 13kHz)
- Adds brightness = energy
- Return to warm for coziness

### 4. Drift Automation
- Slow Pad 3 automation
- Creates gentle spatial drift
- Natural, not obvious

---

## Hip-Hop/R&B Applications

### Hip-Hop: Lo-Fi/Bedroom
- Sample chops
- Lo-fi drums
- Nostalgic textures
- Warm synths

**Settings emphasis:**
- High noise (10-15%)
- LP filter engaged
- 8 voices for texture

### R&B: Contemporary/Soul
- Lead vocals
- Background vocals
- Rhodes textures
- Warm pads

**Settings emphasis:**
- Noise for analog feel (8-12%)
- Warm LP filter
- Subtle movement

---

## Reference Context

### When to Use Vibey Settings
- Soul/R&B productions
- Lo-fi hip-hop
- Bedroom pop
- Nostalgic tracks
- Late-night vibes
- Intimate moments

### Pair With
- Saturation: Tape, tube, or transformer
- Compression: Gentle, glue-style
- Reverb: Room or plate, warm
- EQ: Subtle high-shelf cut for warmth

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-goal\lush-choir-vocals.md

```markdown
# Workflow: Lush Choir Vocals (Hip-Hop/R&B)

*Goal: Transforming a dry mono vocal into a wide, 8-voice ensemble that feels modern and "expensive."*

## Vibe Mapping
- **Vibey:** ⭐⭐⭐⭐⭐ (Primary)
- **Moody:** ⭐⭐⭐⭐ (With LP filtering)
- **Jazzy:** ⭐⭐⭐ (With 4 voices and slow drift)

## 🎛️ Routing Context
- **Preferred:** Insert chain (Post-EQ, Pre-Reverb).
- **Parallel:** Excellent as a dedicated Send for "Backing Vocal Washes."

## 🚶 Step-by-Step Setup
1. **Initialize:** Set **Voices** to **8**.
2. **Clean the Lows:** Set **HP Filter** to **350Hz**. This is crucial to prevent the vocal from sounding "hollow" or muddy.
3. **Set the Width (Pad 1):** Position the target in the **Bottom-Right** quadrant (Moderate delay time, no feedback).
4. **Dial the Drift (Pad 2):** Set **Modulation Rate** to slow (Bottom) and **Amount** to moderate (Center).
5. **Add Spatial Motion (Pad 3):** Set **Movement Amount** to 50% and **Speed** to very slow (Bottom-Center). This creates a gentle stereo "drift" that mimics natural singers.
6. **Tone Polish:** Set **LP Filter** to **10kHz** to take the digital edge off.
7. **Mix:** Blend to **25-35%**.

## 🔄 Variations
- **The "Moody Ghost" Vocal:** Turn the **LP Filter** down to **1.5kHz** and increase the **Mix** to **50%**.
- **The "R&B Doubler":** Switch to **4 Voices**, use shortest delay (Pad 1 Left), and very low Modulation Amount.

## ⚠️ Pitfalls & Fixes
- **Problem:** Vocal sounds "out of tune."
- **Fix:** Lower **Pad 2 (Mod Amount)**. Your depth is too high for a lead vocal.
- **Problem:** Vocal feels distant.
- **Fix:** Decrease the **Mix** slider or shorten the **Delay Time (Pad 1)**.

## 🎚️ Automation Ideas
- **Choral Bloom:** Automate the **Mix** slider to increase from 20% to 60% during the last word of a phrase.
- **Vibe Drift:** Automate **Pad 3 (Movement Speed)** to speed up during energetic sections.

```

---

## FILE: 03-Workflows\by-goal\metallic-glitch-textures.md

```markdown
# Workflow: Metallic Glitch Textures (Psychedelic/Industrial)

*Goal: Using Hyper Chorus as a resonator to create harsh, metallic, and evolving digital textures.*

## Vibe Mapping
- **Psychedelic:** ⭐⭐⭐⭐⭐ (Primary)
- **Moody:** ⭐⭐⭐ (Dark, industrial vibes)
- **Upbeat:** ⭐⭐ (For "glitchy" transitions)

## 🎛️ Routing Context
- **Preferred:** Parallel Send or resampled audio.
- **Mix Status:** 100% Wet when using as a "texture generator."

## 🚶 Step-by-Step Setup
1. **The Resonator Base (Pad 1):** Set target to the **Top-Left** corner. This means **Minimum Delay Time** and **Maximum Feedback**.
2. **Listen for:** A sharp, metallic "ring" at a fixed pitch.
3. **The Glitch (Pad 2):** Position target in the **Top-Right** corner. Max **Rate** and **Amount**. This will make the metallic ring "scream" and "wobble" violently.
4. **Chaos (Pad 3):** Set to **Top-Right** for fast, aggressive stereo shaking.
5. **Texture Glue:** Turn the **Noise** knob up to **50%**. This adds digital grit that interacts with the feedback loop.
6. **Filter Sculpting:** Use the **LP Filter** to sweep between "harsh scream" (Open) and "dark rumble" (Closed).

## 🔄 Variations
- **The "Resonant Perc":** Put this on a simple Hi-Hat loop. The hats will trigger the metallic ring, creating an industrial, robotic percussion vibe.
- **The "Data-Moshed" Pad:** Use a long, static pad as the source. Automate the **Delay Time (Pad 1 X-axis)** rapidly to create "pitched" glitch melodies.

## ⚠️ Pitfalls & Fixes
- **Problem:** Feedback is out of control / screeching.
- **Fix:** Lower the **Feedback (Pad 1 Y-axis)** or the **Mix** slider.
- **Problem:** Too much low-end resonance.
- **Fix:** Raise the **HP Filter** to **1kHz**.

## 🎚️ Automation Ideas
- **Feedback Build:** Slowly drag Pad 1 from Bottom-Left to Top-Left during a build-up to make the track feel like it's "melting" into metal.
- **Spinning Glitch:** Automate **Pad 3 (Movement Speed)** to sync with the project's rhythmic divisions (using an LFO or automation clip).

```

---

## FILE: 03-Workflows\by-goal\rhodes-widening-chain.md

```markdown
# Workflow: Rhodes Widening Chain (Jazzy/Vibey)

*Goal: Adding sophisticated stereo width and "organic" warmth to electric pianos, Rhodes, and Wurlitzer sounds.*

## Vibe Mapping
- **Jazzy:** ⭐⭐⭐⭐⭐ (Primary)
- **Vibey:** ⭐⭐⭐⭐⭐ (Primary)
- **Moody:** ⭐⭐⭐⭐ (With dark filtering)

## 🎛️ Routing Context
- **Preferred:** Insert chain after a subtle saturation plugin (like Fruity Blood Overdrive on very low settings).
- **Post-Processing:** Follow with a wide reverb (LuxeVerb) for ultimate depth.

## 🚶 Step-by-Step Setup
1. **The "Clean" Core:** Set **Voices** to **4**. This sounds more like a classic 70s hardware chorus.
2. **Warmth (Pad 1):** Set target to **Bottom-Left**. Short delay times keep the transients of the Rhodes "tines" intact. Keep Feedback at zero.
3. **The "Leslie" Drift (Pad 2):** Position target in the **Bottom-Left** quadrant. Slow **Rate** and low **Amount**. You want a gentle "drift," not a "wobble."
4. **Natural Motion (Pad 3):** Set **Movement Amount** to 40% and **Speed** to very slow (Bottom). This mimics the sound of a rotating speaker (Leslie).
5. **Vintage Filtering:** Set **LP Filter** to **6kHz**. This removes the "digital sheen" and makes the chorus feel like it's coming from a wooden cabinet.
6. **Low-End Discipline:** Set **HP Filter** to **250Hz** to keep the "thump" of the Rhodes centered.
7. **Mix:** **15-25%**. Less is more here.

## 🔄 Variations
- **The "Dreamy Soul" Rhodes:** Increase **Voices** to **8** and raise **Mix** to **40%**.
- **The "Warped Vinyl" Keys:** Increase **Modulation Amount (Pad 2 X)** and add 10% **Noise**.

## ⚠️ Pitfalls & Fixes
- **Problem:** Keys sound too "plastic."
- **Fix:** Lower the **Modulation Rate**. Fast rates often sound "cheap" on acoustic-style instruments.
- **Problem:** The sound is "shaking" too much.
- **Fix:** Reduce the **Movement Amount (Pad 3 X)**.

## 🎚️ Automation Ideas
- **Chorus Chorus:** Automate the **Mix** slider to increase during the chorus of the song to make the keys feel "wider" and more "emotional."
- **Filter Sweep:** Slowly open the **LP Filter** during a transition to "brighten up" the vibe.

```

---

## FILE: 03-Workflows\by-goal\supersaw-thickener.md

```markdown
# Workflow: Supersaw Thickener (Upbeat/Energetic)

*Goal: Turning a basic sawtooth wave into a massive, wall-of-sound ensemble for energetic leads and chords.*

## Vibe Mapping
- **Upbeat:** ⭐⭐⭐⭐⭐ (Primary)
- **Psychedelic:** ⭐⭐⭐⭐ (With high detune)
- **Vibey:** ⭐⭐⭐ (With slow, wide panning)

## 🎛️ Routing Context
- **Preferred:** Insert chain on the main synth bus.
- **Mix Status:** Usually high (50-100%) because Hyper Chorus acts as a fundamental part of the synth engine here.

## 🚶 Step-by-Step Setup
1. **Density:** Set **Voices** to **8**.
2. **Timing (Pad 1):** Set target to **Center-Left**. You want relatively short delay times to keep the "supersaw" feeling tight and aggressive.
3. **Detuning (Pad 2):** Position target in the **Top-Right** quadrant. High **Modulation Amount** and **Rate** are necessary to create that signature supersaw "shimmering" detune.
4. **Movement (Pad 3):** Keep this in the **Center** for a traditional supersaw, or **Right-Center** if you want the lead to feel like it's rotating in space.
5. **Filters:** Keep **LP Filter** wide open. Set **HP Filter** to **200Hz** to keep the fundamental punch of the lead intact.
6. **Texture:** Add 5% **Noise** to simulate the grit of old hardware trance synths.

## 🔄 Variations
- **The "Trance Gate" Saw:** Use a Fruity Limiter (Gate) after Hyper Chorus to chop the massive sound into rhythmic patterns.
- **The "Lofi-Saw":** Lower the **LP Filter** to **5kHz** and increase **Modulation Amount** to max for a "broken" melodic vibe.

## ⚠️ Pitfalls & Fixes
- **Problem:** Lead sounds "plastic" and thin.
- **Fix:** Add a slight amount of **Feedback (Pad 1 Y-axis)** to add harmonic resonance.
- **Problem:** Phase cancellation in mono.
- **Fix:** Lower **Pad 2 (Mod Amount)** until the sound remains solid when the "Mono" button is pressed.

## 🎚️ Automation Ideas
- **The Detune Rise:** Automate **Pad 2 (Mod Rate)** to increase during a riser or build-up.
- **Ensemble Expansion:** Automate the **Voices** switch (if your DAW/Plugin version supports smooth switching) or automate the **Delay Time (Pad 1 X-axis)** to go from tight to loose.

```

---

## FILE: 03-Workflows\by-goal\techno-synth-ensemble.md

```markdown
# Workflow: Techno Synth Ensemble (Upbeat/Industrial)

*Goal: Creating dense, aggressive, and "shimmering" synth textures for techno stabs, leads, and industrial sequences.*

## Vibe Mapping
- **Upbeat:** ⭐⭐⭐⭐⭐ (Primary)
- **Psychedelic:** ⭐⭐⭐⭐ (With automation)
- **Moody:** ⭐⭐⭐ (Darker filtering)

## 🎛️ Routing Context
- **Preferred:** Insert chain on a synth lead or sequence.
- **Mix Status:** High (40-70%) for a strong ensemble effect.

## 🚶 Step-by-Step Setup
1. **The "Dense" Engine:** Set **Voices** to **8**.
2. **The "Shimmer" (Pad 1):** Set target to **Center-Right**. Longer delay times create a more "detached" ensemble feeling that works well for techno stabs.
3. **The "Agitation" (Pad 2):** Position target in the **Top-Center**. High **Rate** but moderate **Amount**. This creates a fast "vibrato" that adds urgency and energy to the sound.
4. **The "Swirl" (Pad 3):** Set to **Top-Right**. Fast **Movement Speed** makes the synth "spin" in the stereo field, which is great for hypnotic techno sequences.
5. **Filters:** Set **HP Filter** to **400Hz** to keep the kick drum space clear. Set **LP Filter** to **12kHz** to maintain brightness.
6. **Saturation Glue:** (Optional) Add a Fruity Fast Dist *after* Hyper Chorus to compress and "crunch" the voices together.

## 🔄 Variations
- **The "Acid Wash":** Put this on a 303 sequence. Use high **Feedback (Pad 1 Y)** to create squelchy, resonant chorus artifacts that follow the acid filter sweeps.
- **The "Dark Techno" Stab:** Lower the **LP Filter** to **2kHz** and increase **Feedback** for a resonant, "tubular" sound.

## ⚠️ Pitfalls & Fixes
- **Problem:** Synth loses its "bite" or transient.
- **Fix:** Decrease the **Mix** slider or shorten the **Delay Time (Pad 1 X)**.
- **Problem:** The sound is too "noisy."
- **Fix:** Turn down the **Noise** knob or the **Feedback**.

## 🎚️ Automation Ideas
- **Hypnotic Pan:** Sync the **Movement Speed (Pad 3 Y)** to the tempo so the synth rotations match the rhythm of the track.
- **Density Build:** Automate the **Voices** switch or **Feedback** during a breakdown.

```

---

## FILE: 03-Workflows\by-instrument\drums.md

```markdown
# Instrument: Drums

## Overview
Hyper Chorus on drums requires careful application to preserve transient punch while adding width to appropriate elements.

## When to Use on Drums

### DO Use For:
- Hi-hats and cymbals (upper frequency width)
- Snare/clap thickening (careful with HP)
- Drum bus parallel processing (controlled)
- Drum samples needing width

### DON'T Use For:
- Kick drums (phase issues, loses punch)
- 808s/sub bass (always keep mono)
- Full drum bus insert (unless very subtle)

---

## Workflow 1: Hi-Hat Width

**Goal:** Add stereo width and shimmer to hi-hats

### Routing
- Insert on hi-hat channel OR
- Send/return for multiple hat layers

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 4 | Clean width |
| Pad 1 | X=40%, Y=20% | Tight, no resonance |
| Pad 2 | X=35%, Y=35% | Moderate movement |
| Pad 3 | X=50%, Y=35% | Active stereo field |
| HP | 300Hz | Removes all low content |
| LP | 100% | Full shimmer |
| Wet/Dry | 30% | Present but not overwhelming |

### What to Listen For
- Increased stereo spread on hats
- No low-frequency content in chorus
- Shimmer and air preserved

### Vibe Mapping
- **Upbeat:** Increase Pad 3 for active movement
- **Psychedelic:** Increase modulation and auto-pan
- **Vibey:** Add slight noise (5%)

---

## Workflow 2: Snare/Clap Thickener

**Goal:** Add body and width to snare or clap

### Routing
- Parallel processing recommended
- Or send/return with careful blending

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 4 or 8 | 4 for punch, 8 for thickness |
| Pad 1 | X=35%, Y=25% | Medium delay, slight resonance |
| Pad 2 | X=30%, Y=30% | Subtle detuning |
| Pad 3 | X=40%, Y=30% | Gentle width |
| HP | 200Hz | Protects body, removes sub |
| LP | 100% | Full character |
| Wet/Dry | 25% (insert) or 30% (parallel blend) |

### What to Listen For
- Snare gains width and character
- Transient remains punchy
- Body thickens without mud

### Variation: Aggressive Snare
- Voices: 8
- Pad 2: 50% X (more detuning)
- Wet: 35%
- Use for: Trap snares, aggressive styles

---

## Workflow 3: Drum Bus Parallel Width

**Goal:** Add overall drum width while preserving kick punch

### Routing
1. Create parallel drum bus
2. Hyper Chorus on parallel bus, 100% wet
3. Blend with dry drum bus

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 4 | Cleaner on full kit |
| Pad 1 | X=35%, Y=20% | Tight processing |
| Pad 2 | X=30%, Y=30% | Moderate movement |
| Pad 3 | X=45%, Y=35% | Active stereo |
| HP | 300Hz | Protects kick entirely |
| LP | 100% | Full range above HP |
| Wet/Dry | 100% | Blend externally |

### Blending
- Start with parallel channel at -inf
- Gradually bring up until width appears
- Typically 20-30% of parallel signal
- Keep kick punch intact

### What to Listen For
- Hats and snare gain width
- Kick remains centered and punchy
- Overall drum sound bigger

---

## Workflow 4: Sample Chop Unification

**Goal:** Unify disparate drum samples with cohesive width

### Routing
- Send/return setup
- Route all drum samples to chorus send

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Maximum unification |
| Pad 1 | X=40%, Y=25% | Medium settings |
| Pad 2 | X=35%, Y=30% | Moderate movement |
| Pad 3 | X=40%, Y=30% | Stereo width |
| HP | 250Hz | Consistent low cut |
| Wet/Dry | 25% on send | Unified character |

### What to Listen For
- Different samples blend together
- Cohesive spatial field
- Maintained individual character

---

## Mini-Recipes

### Recipe 1: Trap Hat Width
- HP: 400Hz (very clean)
- Pad 3: 60% X, 40% Y (active)
- Voices: 4
- Wet: 35%
- Vibe: Upbeat

### Recipe 2: Lo-Fi Drum Texture
- HP: 300Hz
- LP: 10kHz
- Noise: 12%
- Voices: 8
- Wet: 30%
- Vibe: Vibey

### Recipe 3: Roomy Snare
- HP: 180Hz
- Pad 1: 45% X (more delay)
- Pad 2: 25% Y (slower)
- Voices: 8
- Wet: 28%
- Vibe: Moody

---

## Automation Ideas

### 1. Fill Emphasis
- Increase wet on drum fills
- Return to normal after fill
- Adds excitement

### 2. Section Contrast
- Verses: Minimal chorus (15%)
- Choruses: Full chorus (30%)
- Creates build naturally

### 3. Auto-Pan Hats
- Use Pad 3 for hat movement
- Medium speed for groove
- Adds life to static patterns

---

## Common Pitfalls

| Pitfall | Problem | Solution |
|---------|---------|----------|
| **Chorus on kick** | Phase issues, weak kick | Never chorus kick drums |
| **Too much wet** | Washed out drums | Keep under 30% |
| **HP too low** | Muddy drum sound | Minimum 200Hz on drums |
| **8 voices on full kit** | CPU + phase chaos | Use 4 voices for drum bus |
| **Fast modulation** | Unstable groove | Keep Pad 2 Y moderate |

---

## Genre Considerations

### Hip-Hop/Trap
- Focus on hats and snare
- Parallel processing preferred
- Clean, modern sound
- HP: 250Hz+

### Lo-Fi Hip-Hop
- Can use on more elements
- Embrace texture and noise
- LP filter engaged
- Vibey character

### Pop/R&B
- Subtle application
- Preserve punch at all costs
- Clean, controlled width
- Send/return setup

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-instrument\fx.md

```markdown
# Instrument: FX (Effects)

## Overview
Hyper Chorus excels at creating unique FX textures, transitions, and ear candy. This is where you can be most experimental and aggressive with settings.

## When to Use on FX

### DO Use For:
- Transition sweeps and risers
- Impact and hit effects
- Background textures
- Ear candy moments
- Experimental sound design

### DON'T Use For:
- FX that need to remain punchy and transient-focused
- When CPU is already maxed out

---

## Workflow 1: Swirling Riser

**Goal:** Create disorienting, swirling riser for transitions

### Source
- Sustained tone, noise sweep, or existing riser

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Maximum swirl |
| Pad 1 | X=60%, Y=50% | Long delay, high feedback |
| Pad 2 | X=80%, Y=60% | Extreme modulation |
| Pad 3 | X=85%, Y=60% | Dramatic movement |
| HP | 100Hz | Full range |
| Wet/Dry | 80% | Effect dominates |

### Automation
- Gradually increase all parameters
- Peak at transition point
- Cut instantly after

### What to Listen For
- Increasing intensity
- Disorienting swirl
- Clean cut after peak

---

## Workflow 2: Metallic Impact

**Goal:** Create ringing, metallic texture for impacts

### Source
- Short hit, noise burst, or impact

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Dense texture |
| Pad 1 | X=75%, Y=85% | Long delay, high feedback |
| Pad 2 | X=60%, Y=50% | Active modulation |
| Pad 3 | X=50%, Y=40% | Moderate movement |
| HP | 200Hz | Clean |
| LP | 8kHz | Tames harshness |
| Noise | 15% | Texture |
| Wet/Dry | 70% | Sustained effect |

### Safety
- Add Fruity Limiter after Hyper Chorus
- Prevents feedback runaway

### What to Listen For
- Sustained ringing after hit
- Metallic character
- Controlled resonance

---

## Workflow 3: Psychedelic Texture

**Goal:** Create evolving, psychedelic background texture

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Maximum density |
| Pad 1 | X=65%, Y=50% | Long, resonant |
| Pad 2 | X=85%, Y=70% | Extreme modulation |
| Pad 3 | X=90%, Y=65% | Dramatic movement |
| HP | 150Hz | Clean |
| Wet/Dry | 100% | Pure effect |

### Automation (Essential)
- Heavy automation on all pads
- Slow sweeps over 16+ bars
- Constant evolution

### What to Listen For
- Extreme width
- Constant evolution
- Psychedelic character

---

## Workflow 4: The Resample Technique

**Goal:** Capture Hyper Chorus movement for precise editing

### Steps
1. Set up extreme Hyper Chorus with automation
2. Route to Edison or "Render to wave"
3. Record 8-16 bars
4. Import to Slicex or Fruity Slicer
5. Chop, rearrange, reverse

### Applications
- Unique risers from swells
- Custom impact textures
- Rhythmic FX patterns
- Transition elements

### What to Listen For
- Unexpected textures
- Rhythmic potential
- Unique character

---

## Mini-Recipes

### Recipe 1: Swirl Transition
- Pad 2: 80% X, 60% Y
- Pad 3: 80% X, 60% Y
- Automate all parameters up
- Peak at transition
- Vibe: Psychedelic

### Recipe 2: Metallic Ring
- Pad 1: 75% X, 80% Y
- Pad 2: 60% X, 50% Y
- LP: 8kHz
- Use limiter
- Vibe: Upbeat/Psychedelic

### Recipe 3: Lo-Fi FX
- HP: 250Hz
- LP: 9kHz
- Noise: 15%
- Wet: 100%
- Vibe: Vibey

### Recipe 4: Atmospheric Drone
- Pad 2: 50% X, 25% Y (slow)
- Pad 3: 60% X, 30% Y
- Wet: 80%
- Automate slowly
- Vibe: Moody

---

## FX Chain Ideas

### Chain 1: Psychedelic Swirl
1. Hyper Chorus (extreme)
2. Fruity Reverb 2 (100% wet, long)
3. Fruity Parametric EQ 2 (sculpt)
4. Fruity Limiter

**Result:** Ethereal, swirling texture

### Chain 2: Metallic Impact
1. Fruity Waveshaper (distortion)
2. Hyper Chorus (high feedback)
3. Fruity Reverb 2 (short, dense)
4. Fruity Parametric EQ 2 (scoop)

**Result:** Aggressive metallic hit

### Chain 3: Lo-Fi Texture
1. Hyper Chorus (noise, LP)
2. Fruity Delay 3 (dotted 8th)
3. Fruity Reverb 2 (room)
4. Fruity Parametric EQ 2 (high cut)

**Result:** Nostalgic, textured FX

---

## Automation Techniques

### 1. The Build-Up
- Gradually increase all parameters
- Peak at transition
- Creates anticipation

### 2. Rhythmic Chopping
- Automate wet/dry in patterns
- Creates stutter effects
- Sync to tempo

### 3. Filter Sweeps
- Automate LP filter
- Darken or brighten over time
- Adds movement

### 4. Feedback Swells
- Automate Pad 1 Y
- Building resonance
- Cut before runaway

---

## Common Pitfalls

| Pitfall | Problem | Solution |
|---------|---------|----------|
| **Overuse** | Effect loses impact | Reserve for key moments |
| **No contrast** | Always extreme | Balance with subtle sections |
| **Feedback runaway** | Loud ringing/distortion | Use limiter, watch Pad 1 Y |
| **CPU overload** | Project unplayable | Freeze FX tracks |
| **Wrong context** | Doesn't fit the song | Reference track vibe |

---

## When to Use FX Workflows

### Good Opportunities
- Transitions between sections
- Build-ups and risers
- Breakdowns
- Impacts and hits
- Special moments
- Background textures

### When to Avoid
- Throughout entire track (monotonous)
- Over lead elements (distracting)
- When CPU is limited

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-instrument\pads.md

```markdown
# Instrument: Pads

## Overview
Pads are ideal candidates for Hyper Chorus—they're sustained, benefit from width and movement, and can handle more aggressive settings than rhythmic elements.

## When to Use on Pads

### DO Use For:
- Static pad widening
- Adding movement and evolution
- Creating atmospheric textures
- Stereo field enhancement
- Layer unification

### DON'T Use For:
- Pads that already have built-in chorus/unison
- When you want completely static drone

---

## Workflow 1: Static Pad Animator

**Goal:** Add life and movement to sustained pads

### Routing
- Insert on pad channel (most common)
- Can use send for shared pad processing

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Maximum movement and width |
| Pad 1 | X=50%, Y=25% | Medium delay, slight resonance |
| Pad 2 | X=50%, Y=25% | Moderate modulation, slow rate |
| Pad 3 | X=60%, Y=30% | Active auto-pan |
| HP | 200Hz | Clean low-end |
| LP | 100% | Full range |
| Wet/Dry | 40% | Effect is a feature |

### What to Listen For
- Pad moves and breathes
- Not static or boring
- Width appropriate for mix
- Low-end clean

### Automation (Essential)
- Automate Pad 2 X: 40% → 60% over 16 bars
- Creates evolving texture
- Keeps long pads interesting

---

## Workflow 2: Atmospheric Space

**Goal:** Create deep, atmospheric pad textures

### Routing
- Insert with higher wetness
- Or parallel for blend control

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Dense texture |
| Pad 1 | X=60%, Y=35% | Longer delay, more sustain |
| Pad 2 | X=45%, Y=20% | Moderate modulation, very slow |
| Pad 3 | X=50%, Y=25% | Gentle movement |
| HP | 250Hz | Clean, modern |
| LP | 10kHz | Slight darkening |
| Wet/Dry | 45% | Atmospheric |

### What to Listen For
- Deep, spacious quality
- Not muddy despite wetness
- Evolving over time
- Atmospheric and emotional

### Vibe Mapping
- **Moody:** LP 8kHz, slower Pad 2
- **Psychedelic:** Increase all parameters, heavy automation
- **Vibey:** Add noise 8%

---

## Workflow 3: Layer Unification

**Goal:** Unify multiple pad layers into cohesive texture

### Routing
- Send/return for all pad channels
- Shared Hyper Chorus instance

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Maximum unification |
| Pad 1 | X=45%, Y=25% | Medium settings |
| Pad 2 | X=45%, Y=28% | Moderate movement |
| Pad 3 | X=50%, Y=28% | Active width |
| HP | 200Hz | Consistent low cut |
| Wet/Dry | 35% on send | Unified character |

### What to Listen For
- Different pad layers blend together
- Cohesive spatial field
- Individual layers still audible

---

## Mini-Recipes

### Recipe 1: Supersaw Pad
- Voices: 8
- Pad 2: 70% X, 45% Y (high modulation)
- Pad 3: 50% X, 35% Y
- HP: 100Hz
- Wet: 40%
- Vibe: Upbeat

### Recipe 2: Moody Atmosphere
- Voices: 4
- Pad 2: 25% X, 15% Y (slow)
- Pad 3: 20% X, 20% Y
- HP: 300Hz
- LP: 9kHz
- Wet: 35%
- Vibe: Moody

### Recipe 3: Psychedelic Drone
- Voices: 8
- Pad 2: 80% X, 60% Y (extreme)
- Pad 3: 80% X, 50% Y
- HP: 150Hz
- Wet: 60%
- Heavy automation
- Vibe: Psychedelic

### Recipe 4: Warm Analog Pad
- Voices: 8
- Pad 2: 40% X, 30% Y
- Noise: 10%
- LP: 11kHz
- Wet: 35%
- Vibe: Vibey

---

## Automation Ideas

### 1. Evolving Texture
- Automate Pad 2 X over 16-32 bars
- Slow, subtle changes
- Keeps long pads alive

### 2. Section Contrast
- Verse: Pad 2 X = 35%
- Chorus: Pad 2 X = 55%
- Creates build naturally

### 3. Spatial Movement
- Automate Pad 3 for evolving stereo field
- Bar-length cycles
- Adds interest without distraction

### 4. Filter Sweeps
- Automate LP filter
- Darken for moody sections
- Open for bright sections

### 5. The Resample Technique
1. Set up pad with heavy chorus and automation
2. Render to audio (8-16 bars)
3. Slice and rearrange
4. Use as unique pad variations

---

## Common Pitfalls

| Pitfall | Problem | Solution |
|---------|---------|----------|
| **Too much wet** | Pad becomes the only thing you hear | Reduce to 30-40% |
| **Muddy buildup** | Low-mid frequency build | Raise HP to 250Hz+ |
| **Static sound** | Boring over time | Add automation essential |
| **Phase issues** | Collapses in mono | Check mono, reduce modulation |
| **Fighting with leads** | Pad too prominent | Reduce wet or filter highs |

---

## Genre Considerations

### EDM/Electronic
- Aggressive settings acceptable
- Heavy modulation
- 8 voices standard
- Upbeat/Psychedelic vibes

### Hip-Hop
- Background atmosphere
- Support, not feature
- Moody/Vibey vibes
- Controlled settings

### R&B/Soul
- Warm, analog character
- Slow movement
- Vibey/Moody vibes
- Noise knob for texture

### Pop
- Present but controlled
- Support the song
- Upbeat vibes
- Clean, not experimental

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-instrument\samples.md

```markdown
# Instrument: Samples

## Overview
Samples often need width enhancement and unification. Hyper Chorus can add stereo field to mono samples and blend disparate samples into a cohesive texture.

## When to Use on Samples

### DO Use For:
- Mono samples needing width
- Sample chops needing unification
- Stale samples needing character
- Layered samples needing cohesion
- Samples that sit too "flat" in the mix

### DON'T Use For:
- Samples with existing stereo width (can be too much)
- Bass-heavy samples without HP protection
- Samples where original character must be preserved exactly

---

## Workflow 1: Mono Sample Widening

**Goal:** Add stereo width to mono samples

### Routing
- Insert on sample channel
- Or send/return for multiple samples

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Maximum width |
| Pad 1 | X=45%, Y=20% | Medium delay, low feedback |
| Pad 2 | X=45%, Y=40% | Moderate modulation |
| Pad 3 | X=45%, Y=35% | Active stereo |
| HP | 150Hz | Clean low-end |
| LP | 100% | Full range |
| Wet/Dry | 30% | Noticeable width |

### What to Listen For
- Clear stereo image created
- Original character maintained
- No phase issues
- Sample sits better in mix

---

## Workflow 2: Sample Chop Unification

**Goal:** Unify multiple sample chops into cohesive texture

### Routing
- Send/return for sample chop bus
- All samples route to chorus send

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Maximum unification |
| Pad 1 | X=40%, Y=25% | Medium settings |
| Pad 2 | X=40%, Y=35% | Moderate movement |
| Pad 3 | X=40%, Y=30% | Active width |
| HP | 180Hz | Consistent low cut |
| Wet/Dry | 25% on send | Unified character |

### What to Listen For
- Different samples blend together
- Cohesive spatial field
- Individual chops still distinct
- Unified character across the sequence

---

## Workflow 3: Stale Sample Revival

**Goal:** Add character and movement to stale or sterile samples

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Texture and density |
| Pad 1 | X=50%, Y=30% | Medium settings |
| Pad 2 | X=50%, Y=40% | Noticeable modulation |
| Pad 3 | X=45%, Y=35% | Active movement |
| HP | 200Hz | Clean |
| LP | 10kHz | Slight darkening |
| Noise | 8% | Analog character |
| Wet/Dry | 35% | Character enhancement |

### What to Listen For
- Sample gains new life
- Character without sounding "effected"
- Movement and interest added
- Still fits the vibe

---

## Workflow 4: Lo-Fi Sample Processing

**Goal:** Add lo-fi texture and warmth to samples

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Dense texture |
| Pad 1 | X=50%, Y=35% | Medium settings |
| Pad 2 | X=45%, Y=40% | Moderate movement |
| Pad 3 | X=35%, Y=30% | Gentle width |
| HP | 250Hz | Lo-fi cut |
| LP | 9kHz | Dark, warm |
| Noise | 12% | Vinyl/lo-fi texture |
| Wet/Dry | 30% | Present character |

### What to Listen For
- Lo-fi character
- Warm, nostalgic quality
- Texture and grit
- Vintage feel

---

## Mini-Recipes

### Recipe 1: Sample Width Enhancement
- HP: 150Hz
- Pad 2: 45% X
- Voices: 8
- Wet: 30%
- Vibe: Upbeat

### Recipe 2: Chop Unification
- HP: 200Hz
- Pad 2: 40% X, 35% Y
- Voices: 8
- Send: 25%
- Vibe: Vibey

### Recipe 3: Lo-Fi Texture
- HP: 250Hz
- LP: 9kHz
- Noise: 12%
- Wet: 32%
- Vibe: Vibey

### Recipe 4: Moody Sample
- HP: 300Hz
- LP: 8kHz
- Pad 2: 30% X, 20% Y
- Wet: 28%
- Vibe: Moody

---

## Genre-Specific Sample Processing

### Hip-Hop Sample Chops
- Focus on unification
- Send/return approach
- Clean, controlled width
- HP: 200Hz+

### Lo-Fi Hip-Hop
- Heavy texture processing
- Noise knob essential
- LP filter engaged
- Vibey/Moody vibes

### Trap Samples
- Width for character
- Can be aggressive
- Upbeat vibes
- Preserve punch

### Pop Samples
- Subtle enhancement
- Clarity priority
- Upbeat vibes
- Clean processing

---

## Automation Ideas

### 1. Chop Variation
- Different send levels per chop
- Creates dynamic sequence
- Adds interest

### 2. Section Processing
- Verse: Subtle (20%)
- Chorus: More present (30%)
- Creates lift

### 3. Filter Movement
- Automate HP filter
- Different character per section
- Adds evolution

---

## Common Pitfalls

| Pitfall | Problem | Solution |
|---------|---------|----------|
| **Over-processing** | Sample loses original character | Reduce wet, use 4 voices |
| **Muddy samples** | Low-end buildup | HP filter 200Hz+ |
| **Too much width** | Sample overwhelms mix | Reduce wet to 20% |
| **Phase issues** | Weak in mono | Check mono, reduce modulation |
| **Wrong vibe** | Doesn't fit the track | Reference vibe guides |

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-instrument\synths.md

```markdown
# Instrument: Synths

## Overview
Synths are prime candidates for Hyper Chorus—from simple waveforms to complex patches. Especially powerful for creating supersaw textures and widening mono synths.

## When to Use on Synths

### DO Use For:
- Simple waveforms (saw, square) to create supersaw
- Mono synths needing stereo width
- Lead synths for width and character
- Synth layers needing unification
- Vintage synth character

### DON'T Use For:
- Synths with heavy built-in unison/chorus (can be too much)
- Bass synths (phase issues)
- When you want completely dry, centered sound

---

## Workflow 1: Supersaw Creator

**Goal:** Transform simple sawtooth into massive trance lead

### Source
- Simple sawtooth wave (3xOsc, single oscillator)
- No built-in unison

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Maximum density |
| Pad 1 | X=60%, Y=30% | Medium delay, moderate feedback |
| Pad 2 | X=75%, Y=50% | High modulation for detune |
| Pad 3 | X=50%, Y=35% | Active stereo |
| HP | 100Hz | Minimal protection |
| LP | 100% | Full brightness |
| Wet/Dry | 35% | Thick but defined |

### What to Listen For
- Thick, stacked character
- Wide stereo field
- Defined pitch (not muddy)
- Classic supersaw sound

### Enhancements
- Add distortion before Hyper Chorus for harmonics
- Use Fruity Waveshaper or similar
- More aggressive sound

---

## Workflow 2: Mono-to-Stereo Lead

**Goal:** Widen mono synth lead for modern width

### Routing
- Insert on synth channel
- Or parallel for blend control

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Full width |
| Pad 1 | X=50%, Y=25% | Medium settings |
| Pad 2 | X=55%, Y=45% | Noticeable modulation |
| Pad 3 | X=45%, Y=35% | Active stereo |
| HP | 120Hz | Clean lows |
| Wet/Dry | 30% | Present width |

### What to Listen For
- Clear stereo image
- Width without phase issues
- Maintained lead presence

### Variations

**Trap Lead:**
- Pad 2: 60% X (aggressive)
- Wet: 35%
- Vibe: Upbeat

**Melodic Lead:**
- Pad 2: 45% X (controlled)
- Pad 2 Y: 40% (medium)
- Wet: 28%
- Vibe: Upbeat/Vibey

---

## Workflow 3: Synth Layer Unification

**Goal:** Unify multiple synth layers with cohesive width

### Routing
- Send/return for all synth channels
- Or master synth bus

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Maximum unification |
| Pad 1 | X=45%, Y=25% | Medium settings |
| Pad 2 | X=50%, Y=40% | Moderate-high modulation |
| Pad 3 | X=50%, Y=35% | Active width |
| HP | 150Hz | Clean blend |
| Wet/Dry | 30% on send | Unified character |

### What to Listen For
- Layers blend together
- Cohesive spatial field
- Individual character maintained

---

## Workflow 4: Vintage Character

**Goal:** Add vintage analog character to digital synths

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Analog ensemble |
| Pad 1 | X=45%, Y=30% | Medium settings |
| Pad 2 | X=40%, Y=35% | Moderate movement |
| Pad 3 | X=35%, Y=30% | Gentle width |
| HP | 130Hz | Warm |
| LP | 11kHz | Slight roll |
| Noise | 10% | Analog texture |
| Wet/Dry | 32% | Present character |

### What to Listen For
- Analog-like imperfection
- Warmth and character
- Vintage synth feel

---

## Mini-Recipes

### Recipe 1: Modern Trap Lead
- Voices: 8
- Pad 2: 65% X, 50% Y
- HP: 100Hz
- Wet: 35%
- Vibe: Upbeat

### Recipe 2: Trance Supersaw
- Voices: 8
- Pad 2: 80% X, 55% Y
- Pad 1: 65% X, 35% Y
- HP: 80Hz
- Wet: 40%
- Distortion before chorus
- Vibe: Upbeat/Psychedelic

### Recipe 3: Warm Analog Synth
- Voices: 8
- Pad 2: 35% X, 30% Y
- Noise: 12%
- LP: 11kHz
- Wet: 30%
- Vibe: Vibey

### Recipe 4: Psychedelic Texture
- Voices: 8
- Pad 2: 85% X, 65% Y
- Pad 3: 75% X, 55% Y
- Automate heavily
- Wet: 50%
- Vibe: Psychedelic

### Recipe 5: Moody Drone Synth
- Voices: 4
- Pad 2: 30% X, 20% Y
- LP: 9kHz
- Wet: 35%
- Vibe: Moody

---

## Automation Ideas

### 1. Supersaw Intensity
- Automate Pad 2 X during build
- 60% → 80% over 8 bars
- Creates increasing intensity

### 2. Width Variation
- Verse: Pad 3 X = 30%
- Chorus: Pad 3 X = 60%
- Section contrast through width

### 3. Filter Sweeps
- Automate LP filter on synth
- Combine with chorus for evolving tone

### 4. Movement Emphasis
- Automate Pad 2 Y for rhythmic interest
- Sync to track tempo

---

## Common Pitfalls

| Pitfall | Problem | Solution |
|---------|---------|----------|
| **Too much on supersaw** | Overly thick, muddy | Reduce voices to 4 or wet to 25% |
| **Phase cancellation** | Weak sound in mono | Check mono, reduce modulation |
| **Fighting with bass** | Low-end conflict | HP filter 100-150Hz |
| **Built-in + Hyper Chorus** | Too much width | Disable built-in unison |
| **Static sound** | Boring over time | Add automation |

---

## Genre Considerations

### EDM/Trance
- Supersaw is essential
- 8 voices, aggressive modulation
- Upbeat/Psychedelic vibes
- Can be very wet

### Hip-Hop/Trap
- Lead synth widening
- Controlled settings
- Upbeat vibes
- Preserve punch

### Pop
- Subtle enhancement
- Clarity priority
- Upbeat vibes
- 4 voices often sufficient

### Lo-Fi
- Vintage character
- Noise knob essential
- Vibey/Moody vibes
- Warmth over width

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 03-Workflows\by-instrument\vocals.md

```markdown
# Instrument: Vocals

## Overview
Hyper Chorus is most commonly used on vocals for thickening, widening, and creating ensemble effects. Requires careful application to maintain vocal clarity and emotional delivery.

## When to Use on Vocals

### DO Use For:
- Lead vocal thickening (subtle)
- Background vocal ensemble
- Ad-lib texture and character
- Harmony vocal widening
- Vocal FX and transitions

### DON'T Use For:
- Aggressive modulation on lead vocals (seasick effect)
- Low-frequency vocal parts without HP filter
- When vocal needs to be completely dry and intimate

---

## Workflow 1: Lead Vocal Thickener

**Goal:** Natural width and density without obvious effect

### Routing
- Send/Return strongly recommended
- Keep lead vocal clean on main channel

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Maximum thickness |
| Pad 1 | X=30%, Y=15% | Short delay, low feedback |
| Pad 2 | X=30%, Y=25% | Subtle modulation |
| Pad 3 | X=20%, Y=20% | Gentle width |
| HP | 300Hz | Clean vocal low-end |
| LP | 100% | Full vocal range |
| Noise | 0% | Clean vocal |
| Send Level | 20-30% | Subtle blend |

### What to Listen For
- Vocal sounds thicker, wider
- No obvious "chorus effect"
- Maintains intimacy and presence
- Pitch remains stable

### Variations

**Pop Lead:**
- Pad 2: 25% X (very subtle)
- Send: 20%
- Vibe: Upbeat

**R&B Lead:**
- Noise: 5% (warmth)
- Pad 2 Y: 20% (slower)
- Send: 25%
- Vibe: Vibey

**Ballad/Intimate:**
- Voices: 4
- Pad 2: 20% X
- Send: 15%
- Vibe: Moody

---

## Workflow 2: Background Vocal Ensemble

**Goal:** Create choir-like ensemble from multiple backing tracks

### Routing
- Dedicated send for all background vocals
- Hyper Chorus on send, 100% wet

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Maximum ensemble density |
| Pad 1 | X=40%, Y=25% | Medium delay and feedback |
| Pad 2 | X=50%, Y=35% | Noticeable modulation |
| Pad 3 | X=40%, Y=30% | Active stereo width |
| HP | 250Hz | Clean blend |
| LP | 100% | Full range |
| Send Level | 35-45% | More effect acceptable |

### What to Listen For
- Backs blend into unified ensemble
- Clear separation from lead vocal
- Width and movement appropriate

### Vibe Mapping
- **Upbeat:** Increase Pad 2 and 3
- **Psychedelic:** Heavy automation, extreme settings
- **Moody:** Reduce Pad 2, engage LP filter

---

## Workflow 3: Ad-lib Texture

**Goal:** Create distinct character layer for ad-libs

### Routing
- Insert on ad-lib channel (or dedicated send)
- Can be more aggressive than lead

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Maximum texture |
| Pad 1 | X=45%, Y=30% | More character |
| Pad 2 | X=55%, Y=40% | Noticeable modulation |
| Pad 3 | X=50%, Y=35% | Active movement |
| HP | 250Hz | Clean |
| Wet/Dry | 35-45% | Effect is feature |

### What to Listen For
- Ad-libs have distinct texture
- Clear separation from lead
- Adds ear candy

### Variations

**Trap Ad-libs:**
- Pad 2: 60% X (aggressive)
- Wet: 40%
- Vibe: Upbeat/Psychedelic

**R&B Ad-libs:**
- Pad 2: 45% X (controlled)
- Noise: 8%
- Wet: 35%
- Vibe: Vibey

---

## Workflow 4: Vocal Harmony Widening

**Goal:** Widen harmony vocals while maintaining pitch clarity

### Routing
- Send/return for harmony group
- Or insert with moderate wet

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Full width |
| Pad 1 | X=35%, Y=20% | Medium settings |
| Pad 2 | X=35%, Y=30% | Moderate modulation |
| Pad 3 | X=35%, Y=25% | Gentle width |
| HP | 280Hz | Clean |
| Wet/Dry | 30% | Present but clear |

### What to Listen For
- Harmonies spread nicely
- Individual pitches clear
- No muddiness

---

## Mini-Recipes

### Recipe 1: Trap Vocal Lead
- HP: 320Hz
- Pad 2: 25% X (tight)
- Send: 22%
- Mono check: Essential
- Vibe: Upbeat

### Recipe 2: Soul/R&B Lead
- HP: 280Hz
- Noise: 6%
- Pad 2 Y: 22% (slow)
- Send: 25%
- Vibe: Vibey

### Recipe 3: Ballad Intimate
- Voices: 4
- Pad 2: 18% X
- Pad 2 Y: 18% (very slow)
- Send: 15%
- Vibe: Moody

### Recipe 4: Psychedelic Backing
- Pad 2: 70% X
- Pad 3: 70% X, 50% Y
- Automate heavily
- Send: 40%
- Vibe: Psychedelic

---

## Automation Ideas

### 1. Verse/Chorus Contrast
- Verse: 20% send
- Pre-chorus: Gradual increase to 30%
- Chorus: 35% send

### 2. Ad-lib Build
- Start ad-libs dry
- Bring in chorus during ad-lib phrase
- Adds emphasis

### 3. Section Filter
- Verse: HP 350Hz (tight)
- Chorus: HP 250Hz (fuller)
- Creates contrast

### 4. Movement Emphasis
- Automate Pad 3 during emotional moments
- Adds subtle excitement
- Keep it gentle

---

## Common Pitfalls

| Pitfall | Problem | Solution |
|---------|---------|----------|
| **Seasick lead** | Pitch wobble distracts | Reduce Pad 2 X to 30% max |
| **Muddy vocals** | Low-end buildup | HP filter 250Hz+ |
| **Phase issues** | Weak vocal in mono | Check mono, reduce modulation |
| **Too obvious** | Sounds like "effect" | Reduce wet to 20% |
| **Lost intimacy** | Vocal pushed back | Reduce wet, check Pad 2 |

---

## Genre Considerations

### Hip-Hop
- Subtle on leads (15-25%)
- More aggressive on ad-libs
- Clean, modern sound
- Mono compatibility critical

### R&B
- Warmth priority
- Noise knob for analog feel
- Background vocals: ensemble approach
- Vibey character

### Pop
- Very subtle on leads
- Clarity over width
- Clean, controlled
- Send/return preferred

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log

## Primary Sources

### [IL-MAN] Image-Line Official Manual
**URL:** https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Hyper%20Chorus.htm
**Date Accessed:** 2026-02-03
**Coverage:** Basic operation, parameter descriptions, signal flow
**Confidence:** High
**Notes:** Official documentation from Image-Line. Primary source for plugin functionality.

### [IL-KB] Image-Line Knowledge Base
**URL:** https://www.image-line.com/support/
**Date Accessed:** 2026-02-03
**Coverage:** Troubleshooting, common issues, usage tips
**Confidence:** High
**Notes:** Community and support knowledge base. Good for practical issues.

### [IL-TUTORIALS] Image-Line Tutorials
**URL:** https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Hyper_Chorus_tutorials.htm
**Date Accessed:** 2026-02-03
**Coverage:** Tutorial content, workflow examples
**Confidence:** High
**Notes:** Official tutorials for practical applications.

---

## Secondary Sources

### [REPUTABLE-1] FL Studio Reddit Community
**URL:** https://www.reddit.com/r/FL_Studio/
**Search:** "Hyper Chorus tips"
**Date Accessed:** 2026-02-03
**Coverage:** Community usage patterns, practical tips
**Confidence:** Medium-High
**Notes:** Verified user experiences and workflows.

### [REPUTABLE-2] Image-Line Forums
**URL:** https://forum.image-line.com/
**Search:** Hyper Chorus discussions
**Date Accessed:** 2026-02-03
**Coverage:** Detailed technical discussions, feature explanations
**Confidence:** Medium-High
**Notes:** Forum posts from experienced users and IL team members.

### [REPUTABLE-3] YouTube Tutorial Analysis
**Channels:** BusyWorksBeats, FL Studio Tips, various producers
**Date Accessed:** 2026-02-03
**Coverage:** Video demonstrations, workflow examples
**Confidence:** Medium
**Notes:** Visual demonstrations of techniques. Cross-referenced with manual.

### [REPUTABLE-4] Gearspace Forums
**URL:** https://gearspace.com/
**Search:** FL Studio Hyper Chorus
**Date Accessed:** 2026-02-03
**Coverage:** Professional producer perspectives
**Confidence:** Medium
**Notes:** Professional audio community discussions.

---

## Production Analysis Sources

### [PROD-ANALYSIS-1] Track Analysis
**Tracks Analyzed:**
- Travis Scott - "SICKO MODE" (2018) - Wide synth textures
- Drake - "God's Plan" (2018) - Vocal widening techniques
- Various trap/hip-hop references

**Confidence:** Medium
**Notes:** Production analysis based on listening and spectral analysis. Not verified with artists/engineers.

### [PROD-ANALYSIS-2] Genre Conventions
**Genres:** Hip-Hop, R&B, Pop, EDM
**Date:** 2026-02-03
**Confidence:** Medium
**Notes:** General genre conventions based on industry standards and common practices.

---

## Unverified Information

The following information in this documentation is marked [UNVERIFIED] and requires verification in FL Studio:

### Parameter Ranges
- Exact delay time range (Pad 1 X)
- Exact feedback amount range (Pad 1 Y)
- Exact modulation rate frequencies (Pad 2 Y) - estimated 0.1-10Hz
- Exact auto-pan speed range (Pad 3 Y)
- Exact HP/LP filter frequency ranges
- Exact output gain range

### Technical Specifications
- LFO shapes (sine, triangle, etc.)
- Phase staggering algorithm details
- Internal processing bit depth
- Exact CPU usage metrics

### Verification Method
To verify these parameters:
1. Open Hyper Chorus in FL Studio
2. Use Fruity Parametric EQ 2 after to measure frequency changes
3. Use Edison to analyze modulation rates
4. Monitor CPU meter with different voice counts
5. Check parameter tooltips for ranges

---

## Source Reliability Scale

| Rating | Meaning | Examples |
|--------|---------|----------|
| **High** | Official documentation, verified by manufacturer | [IL-MAN], [IL-KB] |
| **Medium-High** | Reputable community, experienced users | [REPUTABLE-1], [REPUTABLE-2] |
| **Medium** | Industry professionals, tutorial creators | [REPUTABLE-3], [REPUTABLE-4] |
| **Low-Medium** | Production analysis, inferred from listening | [PROD-ANALYSIS] |
| **Unverified** | Not confirmed, needs verification | Marked [UNVERIFIED] |

---

## Updates and Corrections

### Version 1.0 (2026-02-03)
- Initial source log creation
- All sources documented
- [UNVERIFIED] items identified

### Future Updates Needed
- Verify [UNVERIFIED] parameters in FL Studio
- Add more specific track analysis with spectral data
- Include Image-Line release notes if available
- Add academic/theory sources on chorus effects

---

## How to Contribute Sources

When adding new information:
1. Cite source with [TAG] format
2. Add to this log with URL and date
3. Assign confidence level
4. Mark unverified information clearly
5. Include verification steps if applicable

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 04-Reference\01_Official_Links.md

```markdown
# Official Links

## Image-Line Official Resources

### Manual and Documentation
- **Main Manual:** https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Hyper%20Chorus.htm
- **Tutorials Page:** https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Hyper_Chorus_tutorials.htm
- **Knowledge Base:** https://www.image-line.com/support/

### Community and Support
- **Official Forums:** https://forum.image-line.com/
- **Subreddit:** https://www.reddit.com/r/FL_Studio/
- **YouTube Channel:** https://www.youtube.com/user/imageline

### Purchase and Updates
- **FL Studio:** https://www.image-line.com/flstudio/
- **Plugin Updates:** Through FL Studio's automatic update system

---

## Tutorial Resources

### Video Tutorials
- **YouTube Search:** "FL Studio Hyper Chorus tutorial"
- **Recommended Channels:**
  - Image-Line (official)
  - BusyWorksBeats
  - FL Studio Tips
  - Internet Money
  - Various producer channels

### Written Tutorials
- **Image-Line Knowledge Base:** Various articles on modulation effects
- **Community Forums:** User-contributed guides and tips

---

## Technical Resources

### Related Image-Line Plugins
- **Fruity Chorus:** https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Chorus.htm
- **Fruity Flangus:** https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Flangus.htm
- **Fruity Phaser:** https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Fruity%20Phaser.htm

### Third-Party Resources
- **KVR Audio:** https://www.kvraudio.com/forum/
- **Gearspace:** https://gearspace.com/
- **Reddit FL Studio:** https://www.reddit.com/r/FL_Studio/

---

## Music Theory and Production Context

### General Chorus/Ensemble Effects
- Search: "Chorus effect music production"
- Search: "Ensemble effect mixing"
- Search: "Stereo widening techniques"

### Genre-Specific Resources
- **Hip-Hop Production:** Various online courses and communities
- **R&B Production:** Soul and neo-soul production forums
- **EDM Production:** Trance and electronic music production resources

---

## Verification Tools

### Built-in FL Studio Analysis
- **Fruity Parametric EQ 2:** Frequency analysis
- **Fruity Spectroman:** Real-time spectrum
- **Edison:** Waveform and spectral analysis
- **Fruity Stereo Enhancer:** Mono compatibility checking
- **Fruity Limiter:** Safety limiting

### Third-Party Analysis
- **Span (Voxengo):** Free spectrum analyzer
- **Correlation meters:** For phase checking
- **Oscilloscopes:** For waveform visualization

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 04-Reference\02_Coverage_Checklist.md

```markdown
# Coverage Checklist

## 01-Learning/Concepts/ [4/4 Complete]

- [x] 00_What_It_Is_And_When_To_Use.md
- [x] 01_UI_Map_And_Signal_Flow.md
- [x] 02_Core_Techniques_And_Best_Practices.md
- [x] 03_Vibe_Translation_Guide.md

## 01-Learning/Quick-Reference/ [5/5 Complete]

- [x] 00_Quickstart_5_Minutes.md
- [x] 01_Common_Mistakes.md
- [x] 02_Best_Settings_Starting_Points.md
- [x] 03_Vibe_Starting_Points_Moody.md
- [x] 04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md

## 02-Data/parameters/ [2/2 Complete]

- [x] 00_Parameter_Dictionary.md
- [x] 01_Parameter_Table.csv

## 02-Data/presets/ [3/3 Complete]

- [x] 00_Preset_Taxonomy.md
- [x] 01_Preset_Notes_And_Use.md
- [x] 02_Vibe_Preset_Shortlist.md

## 02-Data/rules/ [3/3 Complete]

- [x] 00_Do_Dont_Rules.md
- [x] 01_Troubleshooting_Matrix.md
- [x] 02_Genre_Rules_HipHop_RnB.md

## 03-Workflows/by-goal/ [9/9 Complete]

- [x] 00_Goal_Quick_Result.md
- [x] 01_Goal_Sound_Design.md
- [x] 02_Goal_Mix_Or_Control.md
- [x] 03_Goal_Creative_Effect.md
- [x] 10_Vibe_Moody.md
- [x] 11_Vibe_Upbeat.md
- [x] 12_Vibe_Psychedelic.md
- [x] 13_Vibe_Jazzy.md
- [x] 14_Vibe_Vibey.md

## 03-Workflows/by-instrument/ [6/6 Complete]

- [x] drums.md
- [x] vocals.md
- [x] pads.md
- [x] synths.md
- [x] samples.md
- [x] fx.md

## 04-Reference/ [4/4 Complete]

- [x] 00_Source_Log.md
- [x] 01_Official_Links.md
- [x] 02_Coverage_Checklist.md (this file)
- [x] 03_Genre_Style_Board.md

---

## Total: 36/36 Files Complete

## Vibe Coverage Status

| Vibe | Covered In |
|------|-----------|
| Moody | 01-Learning/Concepts/03_Vibe_Translation_Guide.md |
| | 01-Learning/Quick-Reference/03_Vibe_Starting_Points_Moody.md |
| | 03-Workflows/by-goal/10_Vibe_Moody.md |
| Upbeat | 01-Learning/Concepts/03_Vibe_Translation_Guide.md |
| | 01-Learning/Quick-Reference/04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md |
| | 03-Workflows/by-goal/11_Vibe_Upbeat.md |
| Psychedelic | 01-Learning/Concepts/03_Vibe_Translation_Guide.md |
| | 01-Learning/Quick-Reference/04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md |
| | 03-Workflows/by-goal/12_Vibe_Psychedelic.md |
| Jazzy | 01-Learning/Concepts/03_Vibe_Translation_Guide.md |
| | 01-Learning/Quick-Reference/04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md |
| | 03-Workflows/by-goal/13_Vibe_Jazzy.md |
| Vibey | 01-Learning/Concepts/03_Vibe_Translation_Guide.md |
| | 01-Learning/Quick-Reference/04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md |
| | 03-Workflows/by-goal/14_Vibe_Vibey.md |

## Gaps and Unverified Items

### Unverified Parameters (Need FL Studio Verification)
1. Exact delay time range values
2. Exact modulation rate frequencies (Hz)
3. Exact auto-pan speed range
4. Exact filter frequency ranges
5. Exact output gain range
6. LFO shape (sine, triangle, etc.)
7. Phase staggering algorithm details

### Verification Steps
To verify unverified items:
- [ ] Open Hyper Chorus in FL Studio
- [ ] Check parameter tooltips for ranges
- [ ] Use Fruity Parametric EQ 2 for frequency analysis
- [ ] Use Edison to measure modulation rates
- [ ] Test mono compatibility with Fruity Stereo Enhancer
- [ ] Compare 4 vs 8 voice CPU usage

### Documentation Gaps
1. No video embeds (text-only documentation)
2. No FL Studio version-specific notes
3. No preset files included (text descriptions only)
4. No comparative analysis with other chorus plugins

### Future Enhancements
1. Add FL Studio version update notes
2. Create actual preset files (.fst)
3. Add more track analysis examples
4. Include video tutorial links/descriptions
5. Add advanced routing diagrams

---

**Version:** 1.0
**Last Updated:** 2026-02-03

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Hip-Hop / R&B / Pop-Hip-Hop

## Overview
This style board documents sound and mix techniques for using Hyper Chorus in hip-hop, R&B, and pop-hip-hop productions. Based on genre conventions, reference tracks, and professional practices.

## Hip-Hop

### Sub-Genres and Applications

#### Trap / Modern Hip-Hop
**Character:** Hard-hitting, wide, aggressive when needed

**Hyper Chorus Applications:**
- **Synth Leads:** Wide, aggressive modulation for character
- **Vocal Ad-libs:** Texture and ear candy
- **Background Pads:** Atmospheric width
- **Sample Layers:** Unification

**Settings Signature:**
- HP Filter: 200Hz+ (clean, modern)
- Voices: 8 for synths, 4 for controlled sources
- Modulation: Medium to aggressive
- Wet/Dry: 25-40% depending on source

**Reference Artists:**
- Travis Scott (wide synths, textured ad-libs)
- Metro Boomin (atmospheric pads)
- Drake (subtle vocal thickening)

**Vibe Targets:**
- Primary: Upbeat, Psychedelic
- Secondary: Moody (for atmospheric tracks)

---

#### Boom Bap / Traditional
**Character:** Sample-based, gritty, natural

**Hyper Chorus Applications:**
- **Sample Chops:** Unification and width
- **Background Textures:** Subtle enhancement
- **Limited use:** Genre prefers raw, less processed sound

**Settings Signature:**
- HP Filter: 200-300Hz
- Voices: 4 (more natural)
- Modulation: Subtle to moderate
- Noise: 5-10% for texture
- Wet/Dry: 20-30%

**Reference Artists:**
- Various underground producers
- Sample-based producers

**Vibe Targets:**
- Primary: Vibey, Jazzy
- Secondary: Moody

---

#### Lo-Fi Hip-Hop
**Character:** Warm, nostalgic, textured

**Hyper Chorus Applications:**
- **All Elements:** Liberal use for texture
- **Samples:** Lo-fi character
- **Pads:** Atmospheric
- **Drums:** Parallel width

**Settings Signature:**
- HP Filter: 200-300Hz
- LP Filter: 9-10kHz (dark)
- Noise: 10-15%
- Voices: 8 for texture
- Wet/Dry: 30-40%

**Vibe Targets:**
- Primary: Vibey, Moody
- Secondary: Psychedelic (for experimental sections)

---

## R&B

### Sub-Genres and Applications

#### Contemporary R&B
**Character:** Smooth, polished, sophisticated

**Hyper Chorus Applications:**
- **Lead Vocals:** Very subtle thickening
- **Background Vocals:** Ensemble effect
- **Keys/Rhodes:** Warmth and width
- **Pads:** Smooth atmosphere

**Settings Signature:**
- HP Filter: 250-300Hz
- Noise: 5-8% for warmth
- Modulation: Slow and subtle
- Voices: 8 for backgrounds, 4 for leads
- Wet/Dry: 20-30%

**Reference Artists:**
- SZA (warm, textured vocals)
- Daniel Caesar (intimate, natural)
- Brent Faiyaz (smooth, vibey)

**Vibe Targets:**
- Primary: Vibey, Moody
- Secondary: Upbeat (for danceable tracks)

---

#### Neo-Soul
**Character:** Organic, live feel, restrained processing

**Hyper Chorus Applications:**
- **Rhodes/Keys:** Natural ensemble
- **Background Vocals:** Subtle unification
- **Limited on leads:** Preserve natural performance

**Settings Signature:**
- HP Filter: 100-150Hz (preserves warmth)
- Voices: 4 (natural)
- Modulation: Very subtle
- Noise: 0-5%
- Wet/Dry: 15-25%

**Reference Artists:**
- Erykah Badu (organic, live)
- D'Angelo (vintage, analog)

**Vibe Targets:**
- Primary: Jazzy, Vibey
- Secondary: Moody

---

#### Alternative R&B
**Character:** Experimental, atmospheric, boundary-pushing

**Hyper Chorus Applications:**
- **All Elements:** Creative, experimental use
- **Textural Elements:** Heavy processing
- **Transitions:** Psychedelic effects

**Settings Signature:**
- Variable by track
- Can be extreme
- Heavy automation
- Creative routing

**Reference Artists:**
- FKA twigs (experimental textures)
- The Weeknd (dark, atmospheric)

**Vibe Targets:**
- Primary: Psychedelic, Moody
- Secondary: Vibey

---

## Pop-Hip-Hop (Modern Mainstream)

### Character
Polished, wide, commercially competitive

### Hyper Chorus Applications
- **Lead Vocal:** Subtle widening (width hierarchy)
- **Background Vocals:** Ensemble, more aggressive
- **Synth Stacks:** Maximum width
- **Ad-libs:** Character and texture

### Settings Signature
- HP Filter: 200-280Hz (clean)
- Voices: 8 for backgrounds, 4 for leads
- Modulation: Controlled, not seasick
- Wet/Dry: Leads 20%, Backgrounds 35%

### Reference Artists
- Post Malone (wide, polished)
- Billie Eilish (creative textures)
- Various pop-rap crossover artists

### Vibe Targets
- Primary: Upbeat, Vibey
- Secondary: Moody (for ballads)

---

## Mix Techniques by Genre

### Hip-Hop Mix Hierarchy
`\`\`
Mono (Center)       →          Wide (Stereo)
Kick, 808, Lead Vox     Snare, Lead Synth    Hats, Ad-libs, Pads
     ↓                        ↓                    ↓
  No Chorus              Subtle Chorus       Noticeable Chorus
`\`\`

### R&B Mix Philosophy
- Warmth over width
- Subtlety over obviousness
- Analog character preferred
- Natural ensemble feel

### Pop-Hip-Hop Priority
- Clarity first
- Competitive width
- Controlled processing
- Polished sound

---

## BPM and Energy Considerations

| BPM Range | Genre Context | Chorus Approach |
|-----------|--------------|-----------------|
| 60-80 | Ballads, slow R&B | Slow modulation, subtle |
| 80-100 | Mid-tempo hip-hop/R&B | Moderate settings |
| 100-130 | Trap, upbeat R&B | Can be more aggressive |
| 130+ | Dance, EDM-influenced | Maximum width acceptable |

---

## Seasoning Guide

### How Much Hyper Chorus is Too Much?

**Hip-Hop:**
- Verse: Minimal (lead vox clean)
- Hook: Moderate (width opens up)
- Ad-libs: Liberal (ear candy)

**R&B:**
- Verse: Subtle (intimate)
- Chorus: Moderate (opens up)
- Bridge: Can be experimental

**Pop-Hip-Hop:**
- Conservative on leads
- Moderate on backgrounds
- Creative on FX/transitions

---

## Reference Track Analysis Template

When analyzing reference tracks for Hyper Chorus usage:

1. **Identify chorused elements:** What has width/modulation?
2. **Note wetness level:** Subtle or obvious?
3. **Check frequency focus:** High-passed?
4. **Mono compatibility:** Does it collapse well?
5. **Genre appropriateness:** Does it fit the style?

---

## Common Producer Chains

### Trap Vocal Chain (with Hyper Chorus)
1. Pitch correction (if needed)
2. EQ (clean up)
3. Compression (control dynamics)
4. **Hyper Chorus** (send, subtle)
5. Reverb (space)
6. Delay (depth)
7. Final EQ (sculpt)
8. Limiter (safety)

### R&B Vocal Chain
1. Subtle pitch correction
2. Gentle EQ
3. Light compression
4. **Hyper Chorus** (send, warm)
5. Tape saturation
6. Room reverb
7. Gentle limiting

---

**Version:** 1.0
**Sources:** [PROD-ANALYSIS], [SRC: REPUTABLE]
**Last Updated:** 2026-02-03

```

---

## FILE: 04-Reference\lfo-phase-offset-theory.md

```markdown
# Technical Reference: LFO Phase Offset Theory

Understanding how Hyper Chorus achieves its "High-Density" sound. [SRC: IL-MAN], [SRC: RELNOTE]

## The "8-Voice" Challenge
In a standard chorus, if you simply modulate two delay lines with the same LFO, they will move in sync, leading to predictable phasing and potential volume drops. To create a "lush" ensemble, the modulation must be decorrelated.

## Phase Staggering
Hyper Chorus uses a technique called **LFO Phase Staggering**.
1. **The Source LFO:** A single LFO drives the modulation for all voices.
2. **Phase Offsets:** Each of the 8 (or 4) delay lines is assigned a fixed starting point (phase) on that LFO cycle.
   - For **8 voices**, the phases are typically spread evenly at **45-degree intervals** (0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°). [UNVERIFIED - Based on standard ensemble algorithms]
3. **The Result:** At any given millisecond, some voices are pitching UP, some are pitching DOWN, and some are at the center. This creates a dense, "blurred" pitch profile that our ears perceive as a thick ensemble rather than a single wobbling sound.

## Interaction with X-Y Pad 2 (Modulation)
- **Mod Amount (X-Axis):** Controls the amplitude of the LFO. As you move right, the pitch deviation between the "highest" and "lowest" voices increases.
- **Mod Rate (Y-Axis):** Controls the frequency of the LFO. As you move up, the "cycling" speed of the 8 voices increases.

## Why it sounds "Hyper"
Traditional chorus effects often use a "Dimension" style circuit with only 2 or 3 voices. By doubling this to 8 and using precise phase staggering, Hyper Chorus minimizes "beating" (the rhythmic volume pulsing common in cheap chorus) and maximizes the "wash" of sound.

## Implications for Mono Compatibility
Because the 8 voices are spread across the phase cycle, summing them to mono (using the **Mono button**) will inevitably cause some phase cancellation.
- **The 180° Voice:** At any time, one voice is likely at the exact opposite phase of another.
- **Mixer Tip:** If your mono signal sounds thin, it is because these "opposing" voices are cancelling each other out. Reducing the **Mod Amount** reduces the severity of this cancellation.

---
*For practical application of these concepts, see the [01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md](../01-Learning/Concepts/01_UI_Map_And_Signal_Flow.md) guide.*

```

---

