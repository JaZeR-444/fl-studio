# Harmless - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Harmless - Additive Subtractive Synthesis

`\`\`
██╗  ██╗ █████╗ ██████╗ ███╗   ███╗██╗     ███████╗███████╗███████╗
██║  ██║██╔══██╗██╔══██╗████╗ ████║██║     ██╔════╝██╔════╝██╔════╝
███████║███████║██████╔╝██╔████╔██║██║     █████╗  ███████╗███████╗
██╔══██║██╔══██║██╔══██╗██║╚██╔╝██║██║     ██╔══╝  ╚════██║╚════██║
██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║███████╗███████╗███████║███████║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝╚══════╝╚══════╝
`\`\`

**Plugin Type:** Additive-Subtractive Synthesizer
**Category:** Generator / Advanced Synthesis / Modern
**Official Manual:** [Image-Line Harmless Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Harmless.htm)

---

## 🎯 What is Harmless?

Harmless is a revolutionary synthesizer that performs "subtractive synthesis inside an additive engine." While it looks and feels like a standard subtractive synth (with familiar filters, phasers, and envelopes), it actually generates sound by calculating thousands of harmonics. This unique approach allows for features impossible in analog synths, such as **Automatable Harmonic Masks**, frequency-based phasers, and mathematically perfect pluck filters.

**Key Capabilities:**
- **Additive doing Subtractive:** Filters and effects are applied to harmonics before they are rendered.
- **Single-Page GUI:** Fast, color-coded interface where everything is visible.
- **Harmonic Masking:** Intricately control which partials are allowed to sound.
- **Specialized Pluck Filter:** Mathematically accurate string-decay simulation.
- **Unique Phaser:** Can modify pitch and create unusual resonant shapes.
- **Maximus-Powered Dynamics:** Built-in multi-band compression and limiting.
- **Sytrus Unison:** High-quality unison voices for massive width.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **additive-subtractive-logic.md** (The "Harmless" secret)
3. Create **parameter-cheat-sheet.md**
4. Load the default preset and adjust the "Harmonic Mask" grid to hear individual harmonics vanish.

### For Sound Designers:
1. Study **creating-perfect-plucks.md**
2. Review **advanced-phaser-pitch-shifting.md**
3. Learn **timbre-morphing-techniques.md**

### For Mix Engineers:
1. Study **integrated-dynamics-mastering.md** (Maximus integration)
2. Review **low-cpu-unison-layering.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Timbre Section:** Osc shapes and Harmonic Mask.
  - **Filter Section:** Freq, Res, Slope, and Pluck.
  - **Phaser Section:** Unique additive phase effects.
  - **Unison:** Voice count and detune.
  - **Effects:** Reverb, Delay, Chorus, Comp (Maximus).

- [ ] **harmonic-mask-explained.md**
  - How to "draw" your own oscillator shapes using the partials grid.

#### 02-Data/parameters/
- [ ] **harmless-specs.json**
  `\`\`json
  {
    "plugin_name": "Harmless",
    "synthesis_type": "Additive-Subtractive",
    "unison_voices": 8,
    "multithreaded": true
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **the-perfect-organic-pluck.md**
  - Using the specialized "Pluck" filter section.
  - Adjusting the "Damp" and "Decay" harmonics.
  - Result: A pluck that sounds more "physical" than standard ADSR filtering.

- [ ] **alien-phaser-leads.md**
  - Setting the Phaser to "Frequency" mode.
  - Automating the phaser offset to change pitch.
  - Creating "screaming" resonant sweeps.

- [ ] **custom-wavetable-simulation.md**
  - Using the Harmonic Mask to replicate a specific waveform (e.g., a Square with odd harmonics only).

#### 03-Workflows/by-context/
- [ ] **retro-chiptune-additive.md**
- [ ] **modern-pop-vocal-synths.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **additive-filter-slopes.md**
  - Why Harmless can have "brickwall" filter slopes that don't cause phase issues.

---

## 🔬 Research Framework

### Phase 1: Timbre Generation (Week 1)
**Goal:** Additive Basics

**Tasks:**
1. Compare Saw wave vs a custom Harmonic Mask
2. Use the "Sub" harmonics to add weight
3. Experiment with "Vibrato" vs "Tremolo" in the additive engine
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Why does Harmless use less CPU than Sytrus? (Optimized additive process).
- Does the "Filter" knob move real frequencies or just scale harmonics?

### Phase 2: The Pluck & Phase (Week 2)
**Goal:** Specialized FX

**Tasks:**
1. Master the Pluck section for a "Deadmau5" style lead
2. Use the Phaser to create a "Talkbox" effect
3. Create the-perfect-organic-pluck.md

---

## █ Plugin Specifications to Document

### Engine
- Number of Harmonics
- Multithreading support

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the filter so steep? (Additive synthesis allows for infinite dB/oct slopes).
2. How to add "Grit"? (Use the built-in "Crush" or "Dist" controls).

---

## 🔗 Cross-Reference with Other Plugins

Harmless is often used with:
- **Harmor** (The "Big Brother" version)
- **Maximus** (The engine inside the Harmless compressor)

---

## 📦 File Structure Summary

`\`\`
Harmless/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── harmonic-mask-explained.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── harmless-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── the-perfect-organic-pluck.md
│   │   └── alien-phaser-leads.md
│
└── 04-Reference/
    └── additive-filter-slopes.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Harmless Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Harmless.htm)
- [Harmless Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Harmless_tutorials.htm)
- [Harmless Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+harmless+tutorial)

### Community Resources
- [Harmless Subreddit](https://www.reddit.com/r/FL_Studio/search?q=harmless&restrict_sr=1)
- [Harmless User Forum Threads](https://forum.image-line.com/viewforum.php?f=193)
- [Harmless Preset Libraries](https://www.kvraudio.com/forum/viewforum.php?f=232)

### Technical Analysis Tools
- **Edison** for spectral analysis of Harmless outputs
- **Fruity Spectroman** for real-time spectrum visualization
- **Fruity Limiter** for monitoring harmonic content
- **Patcher** for external audio input routing

### Recommended Learning Materials
- "Additive vs Subtractive Synthesis" - Understanding the fundamental differences
- "Harmonic Masking Techniques" - Creating custom oscillator shapes
- "Pluck Filter Physics" - Understanding the mathematical basis for realistic plucking

### Advanced Techniques
- **Harmonic Morphing:** Using Harmless to blend between different harmonic structures
- **Dynamic Harmonic Control:** Real-time manipulation of harmonic content
- **Spectral Unison:** Using Harmless's unique unison capabilities for massive sounds

---

## 🧪 Experimental Techniques

### Advanced Additive Applications
Creative uses of Harmless's unique additive-subtractive approach:

**Harmonic Masking:**
- **Custom Oscillator Shapes:** Creating unique oscillator sounds through harmonic manipulation
  - Use harmonic mask to create custom waveforms
  - Perfect for unique oscillator sounds
  - Essential for additive synthesis mastery
  - Useful for creating specific harmonic content
  - Pro tip: Use for creating non-standard waveforms

**Pluck Filter Applications:**
- **Realistic String Simulation:** Creating authentic string pluck sounds
  - Use pluck filter for mathematical string decay
  - Apply appropriate harmonic dampening
  - Perfect for realistic string sounds
  - Essential for acoustic simulation
  - Useful for organic pluck sounds

**Phase Manipulation:**
- **Advanced Phaser Techniques:** Using Harmless's unique phaser
  - Apply frequency-based phase shifting
  - Create pitch-shifting effects
  - Perfect for unique phase effects
  - Essential for Harmless-specific effects
  - Useful for talking synth effects

### Creative Parameter Manipulation
Advanced techniques for parameter control:

**Automation Techniques:**
- **Harmonic Automation:** Automating harmonic parameters for evolving effects
  - Create evolving harmonic characteristics
  - Use for dynamic expression
  - Perfect for evolving arrangements
  - Essential for dynamic harmonic expression
  - Use for expressive harmonic control

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
Efficient approaches to using Harmless for additive synthesis:

**Harmonic Design:**
- **Custom Harmonic Creation:** Building sounds from individual harmonics
  - Start with fundamental frequency
  - Add harmonics systematically
  - Essential for additive synthesis mastery
  - Pro tip: Use harmonic series for natural sounds

- **Spectral Shaping:** Shaping harmonic content for specific timbres
  - Adjust harmonic amplitudes for desired timbre
  - Use harmonic relationships for character
  - Essential for spectral design
  - Pro tip: Use for creating specific instrument sounds

**Pluck Optimization:**
- **String Simulation:** Creating realistic string sounds
  - Use pluck filter for authentic decay
  - Adjust dampening for appropriate response
  - Essential for acoustic simulation
  - Pro tip: Use for organic pluck sounds

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
- **Lead Design:** Creating cutting lead sounds with harmonic control
- **Bass Enhancement:** Creating powerful basslines with harmonic precision
- **Rhythmic Effects:** Creating rhythmic patterns with harmonic automation
- [ ] Explain how Harmless applies filters without using traditional DSP filters
- [ ] Create a "Physical" sounding string pluck using only the additive controls
- [ ] Build a patch that uses the Harmonic Mask to create a rhythmic timbre
- [ ] Use the built-in phaser to perform pitch-shifting effects
- [ ] Create a custom oscillator shape using harmonic masking
- [ ] Apply the pluck filter for realistic string simulation
- [ ] Use the unique phaser for talking synth effects
- [ ] Automate harmonic parameters for evolving textures
- [ ] Set up efficient harmonic design workflows
- [ ] Create genre-specific harmonic patches for different musical styles
- [ ] Optimize Harmless settings for minimal CPU usage
- [ ] Use Harmless for creative sound design applications
- [ ] Set up advanced harmonic routing for complex projects
- [ ] Apply Harmless in live performance scenarios
- [ ] Create experimental sounds with extreme harmonic settings
- [ ] Combine Harmless with other effects for layered processing
- [ ] Integrate Harmless with other automation tools seamlessly
- [ ] Create custom additive synthesis workflows for specific creative needs
- [ ] Use Harmless effectively in large, complex projects
- [ ] Generate complex rhythmic patterns with harmonic automation
- [ ] Create hybrid synthesis patches combining additive and subtractive methods
- [ ] Apply Harmless in mastering contexts with appropriate care
- [ ] Create complex multi-stage harmonic chains with smooth automation
- [ ] Design custom harmonic structures for specific musical contexts
- [ ] Use Harmless for creative vocal processing applications
- [ ] Apply advanced harmonic control for precise timbre shaping
- [ ] Create genre-specific harmonic presets for efficient workflow
- [ ] Integrate Harmless with external hardware for hybrid processing
- [ ] Use Harmless for audio restoration and creative repair applications
- [ ] Combine Harmless with other spectral processing tools
- [ ] Apply Harmless in surround sound or multi-channel setups
- [ ] Create complex harmonic relationships using multiple parameters
- [ ] Use Harmless for creative instrumental processing applications
- [ ] Integrate Harmless with other automation tools for complex control
- [ ] Create complex atmospheric textures using harmonic parameters
- [ ] Design custom harmonic algorithms for unique sound characteristics
- [ ] Apply advanced filtering techniques for tone shaping
- [ ] Use Harmless for creative stereo enhancement beyond traditional methods
- [ ] Combine Harmless with convolution for hybrid synthesis approaches
- [ ] Implement advanced envelope shaping for dynamic harmonic expression
- [ ] Create genre-specific spatial presets for efficient workflow
- [ ] Use Harmless for creative sound design in film and game audio
- [ ] Apply Harmless in live sound reinforcement scenarios
- [ ] Create experimental synthesis textures using extreme harmonic settings
- [ ] Integrate Harmless with external synthesizers for complex sound design
- [ ] Generate complex harmonic structures with precise control
- [ ] Use Harmless for formant synthesis and vowel creation
- [ ] Apply harmonic freezing techniques for sustained textures
- [ ] Create evolving harmonic animations with automation
- [ ] Design custom additive algorithms for unique harmonic behaviors
- [ ] Implement advanced harmonic resynthesis techniques for complex audio
- [ ] Use Harmless for granular synthesis applications
- [ ] Apply phase vocoder techniques within the harmonic framework
- [ ] Create hybrid harmonic patches combining multiple approaches
- [ ] Use Harmless for audio forensics and analysis applications
- [ ] Implement harmonic filtering techniques for precise frequency control
- [ ] Create custom harmonic synthesis algorithms for unique characteristics
- [ ] Apply Harmless in scientific and research audio applications
- [ ] Use for therapeutic and sound healing applications
- [ ] Combine with neural networks for AI-assisted harmonic design

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Harmless

## Purpose & Identity
Harmless is a revolutionary synthesizer that performs **subtractive synthesis inside an additive engine**. Its primary identity is a "High-Efficiency Additive Synth." While it looks like a standard synth with a filter and phaser, it actually generates sound by calculating thousands of individual harmonics. This allows for slopes and effects that are physically impossible in analog synths. [SRC: IL-MAN]

## 60-Second Mental Model
Imagine you are building a wall. 
- A standard synth takes a giant block of stone and carves it down (**Subtractive**).
- Harmless stacks thousands of tiny pebbles to create the *shape* of a carved stone (**Additive**). 
Because it builds the sound from pebbles, it can easily remove specific "pebbles" (harmonics) using the **Harmonic Mask**, creating textures that sound incredibly clean and precise.

## Hip-Hop / R&B Context
- **The Perfect Trap Pluck:** Using the specialized **Pluck** section to get a sharp, organic decay that sounds like a real string (Upbeat/Melodic).
- **Vocal-Like Leads:** Using the **Formant** filter type to make a synth "sing" or "talk" without a vocoder (Psychedelic/Vibey).
- **Sub-Bass with "Click":** Building a deep sine sub that has a surgical harmonic "mask" at the top for translation on small speakers (Moody).

## When To Use
- When you want **CPU-efficient additive synthesis**.
- When you need **mathematically perfect filters** (e.g., a brickwall cut that doesn't click).
- When you want to design **unique, bell-like, or organic** pluck sounds.

## When NOT To Use
- **Analog "Dirt":** Harmless is very clean. If you want unstable oscillators and messy analog noise, use **3x Osc** or **MiniSynth**.
- **Complex FM:** Use **Sytrus** if you need frequency modulation between operators. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Harmless

## UI Tour
1.  **Timbre Section:** Choose your base oscillator and use the **Harmonic Mask** (the grid) to "draw" your sound.
2.  **Filter Section:** Includes standard Cutoff and Res, plus the unique **Pluck** control.
3.  **Unison:** Control how many voices are stacked (1 to 8) and their stereo spread. [SRC: IL-MAN]
4.  **Phaser:** An additive phaser with unique modes like "Frequency" and "Classic."
5.  **Effects:** Built-in Reverb, Delay, Chorus, and a **Maximus-powered** Compressor.

## Signal Flow (The Additive Secret)
1.  **Note Input:** Piano Roll triggers a note.
2.  **Harmonic Generation:** Thousands of harmonics are created.
3.  **Additive Processing:** The "Filter," "Phaser," and "Pluck" settings are mathematically applied to the volume and phase of each harmonic.
    *   *Note: There is no actual audio filter moving; the harmonics just turn down.* [SRC: REPUTABLE]
4.  **Unison:** The voices are duplicated and detuned.
5.  **FX Rack:** The final additive result passes through the built-in effects.
6.  **Output:** Final audio.

## The Pluck Section
The **Pluck** knob is Harmless's secret weapon. It doesn't just cut frequencies; it simulates the **mathematical decay** of a physical string. 
*   **Damp:** Controls how fast the high-end harmonics disappear relative to the low-end.
*   **Decay:** The overall length of the pluck. [SRC: IL-MAN]

## Things Beginners Misunderstand
*   **"Additive vs Subtractive":** Don't be scared by the word "Additive." If you treat Harmless like a normal synth, it works exactly how you'd expect. The additive engine just makes it sound cleaner.
*   **Harmonic Mask:** The grid isn't a sequencer. It's a "Volume Mixer" for the harmonics. Moving a bar down makes that specific part of the oscillator quieter. [SRC: REPUTABLE]
*   **Phase:** The Phaser in Harmless can change the pitch of the sound if moved rapidly. This is normal for additive phase shifting.

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Harmless

Harmless translates vibes through **Harmonic Masking** and **Spectral Phase**.

## 1. Upbeat (Kinetic, Sharp, Pop)
- **Concept:** "The Perfect Organic Pluck."
- **Levers:**
  - **Pluck Section:** Set high "Damp" and "Decay."
  - **Filter Slope:** Set to "Brick" (Steepest).
  - **Unison:** 3-5 voices for a pop-ready shine.
- **Listen For:** A sharp, physical entry that decays precisely like a guitar or harp string.

## 2. Spacey (Ethereal, Shimmering, Expansive)
- **Concept:** "The Harmonic Shimmer."
- **Levers:**
  - **Phaser Section:** Set mode to "Classic" or "Frequency."
  - **Width:** Maximize.
  - **Release:** Long (2 seconds+).
- **Listen For:** High frequencies that seem to sparkle and rotate in a vast 3D space.

## 3. Psychedelic (Warped, Vocal, Robotic)
- **Concept:** "The Formant Talker."
- **Levers:**
  - **Filter Type:** Select "Formant" or "Vowel."
  - **Modulation:** Link Filter Cutoff to an LFO.
  - **Phaser:** Set to "Offset" mode.
- **Listen For:** The synth sounding like it's saying "Aaa," "Eee," or "Ooo" as it sweeps.

## 4. Melodic (Clear, Lush, Polished)
- **Concept:** "The Glossy Lead."
- **Levers:**
  - **Harmonic Mask:** Draw a curve that emphasizes the 1st, 2nd, and 4th partials.
  - **Compressor:** Set to "Limit" (uses the Maximus engine).
- **Listen For:** A perfectly leveled, professional sound that sits right at the front of the mix.

## 5. Moody (Heavy, Dark, Isolated)
- **Concept:** "The Submerged Harmonic."
- **Levers:**
  - **Filter:** 24dB Low Pass @ 400Hz.
  - **Harmonic Mask:** Delete all high-frequency bars in the grid.
- **Listen For:** A dark, pure tone that feels "trapped" and heavy, perfect for nocturnal R&B. [SRC: REPUTABLE]
```

---

## FILE: 01-Learning\Concepts\additive-vs-subtractive-architecture.md

```markdown
# Additive vs Subtractive Architecture

## The Paradigm Shift

Traditional subtractive synthesizers start with a rich waveform (sawtooth, square) and filter away unwanted harmonics. Harmless **inverts this concept** - it builds only the harmonics you want, then shapes them with subtractive-style filters.

### Why Additive?

- **No phase cancellation**: Since harmonics are generated mathematically, not summed from multiple oscillators, there's no phase interference
- **Perfect brickwall filters**: Filters don't introduce phase issues or resonance artifacts because the harmonics are already separated
- **CPU efficiency**: Only calculates the frequencies you actually hear
- **Unique timbres**: Can create sounds impossible with traditional subtractive synthesis

### The Subtractive Interface

Despite the additive engine, Harmless presents a familiar subtractive workflow:
- Oscillator shapes (saw, square, triangle, custom)
- Filter envelope (ADSR)
- Filter cutoff and resonance
- Effects chain

### Sound Quality Difference

| Characteristic | Subtractive | Harmless Additive |
|------------------|-------------|-------------------|
| Filter resonance | Phase artifacts | Mathematically clean |
| High resonance + cutoff | Can sound harsh | Can be extreme without artifacts |
| Sawtooth waveform | Analog "warmth" | Mathematically perfect |
| CPU usage | Fixed per voice | Scales with harmonic count |

[SRC: IL-MAN - Harmless Overview]

```

---

## FILE: 01-Learning\Concepts\harmonic-mask-system.md

```markdown
# Harmonic Mask System

## What is the Harmonic Mask?

The Harmonic Mask is Harmless's **visual oscillator editor**. Instead of selecting preset waveforms, you draw the amplitude of each individual harmonic - creating custom oscillator shapes from scratch.

## Interface

The mask displays 512 vertical bars representing harmonics (multiples of the fundamental frequency). Click and drag to:
- **Raise bars**: Add that harmonic
- **Lower bars**: Remove/reduce that harmonic
- **Shape tools**: Curve, ramp, square, randomize

## Understanding Harmonics

- **Harmonic 1**: Fundamental (base pitch)
- **Harmonic 2**: Octave above fundamental
- **Harmonic 3**: Perfect fifth + octave
- **Harmonic 4**: Two octaves above
- **Odd harmonics** (1,3,5,7...): Add "hollow", "woodwind" character
- **Even harmonics** (2,4,6,8...): Add "warmth", "brightness"

## Common Shapes

### Sawtooth Approximation
All harmonics decreasing in amplitude: 1.0, 0.5, 0.33, 0.25, 0.2...

### Square Wave Approximation
Odd harmonics only: 1.0, 0, 0.33, 0, 0.2, 0, 0.14...

### Hollow/Clarinet
Odd harmonics with faster decay: 1.0, 0, 0.2, 0, 0.1, 0...

### Bright/Buzzy
First 8-10 harmonics at full amplitude, then sharp drop

### Resonant/Formant
Specific harmonic bands boosted (useful for vocal synthesis)

## Creative Uses

- **Filter sweeps without filters**: Draw a moving mask envelope
- **Vowel synthesis**: Create formant regions (harmonics 3-8 boosted)
- **Grit textures**: Sparse random harmonics for industrial sounds
- **Bell harmonics**: Inharmonic relationships for metallic tones

## Pro Tip

Combine Harmonic Mask with the Filter's resonance for "impossible" subtractive sounds - the filter can boost harmonics that the mask didn't include, creating unique resonant sweeps.

[SRC: IL-MAN - Harmless Oscillator Section]

```

---

## FILE: 01-Learning\Concepts\pluck-filter-physics.md

```markdown
# Pluck Filter Physics

## Mathematical String Modeling

The Pluck filter in Harmless **mathematically simulates string vibration decay**. Unlike traditional low-pass filters, it models how real strings lose energy across the frequency spectrum.

### How It Works

Real string instruments exhibit these behaviors:
1. **Initial strike**: All frequencies present
2. **High frequency decay**: Treble dissipates faster than bass (energy proportional to frequency)
3. **Exponential decay**: Energy loss follows physical laws

The Pluck filter implements this physics:
`\`\`
Decay Rate = f^2 × Damping Factor
`\`\`
Where higher frequencies (f) decay faster.

## Parameters

### Pluck Amount (0-100%)
Controls the overall decay speed:
- **0%**: No pluck effect (standard filter)
- **25%**: Subtle string-like character
- **50%**: Acoustic guitar simulation
- **75%**: Harp/plucked synth
- **100%**: Aggressive decay, kalimba-like

### Pluck Color/Tone
Determines the starting brightness:
- Lower values: Start darker, mellow decay
- Higher values: Start bright, sharp initial attack

## Use Cases

### Acoustic Guitar Plucks
- Pluck: 40-60%
- Combine with short amp envelope (fast attack, medium decay)
- Use triangle-ish mask with moderate harmonics

### Harp/Glissando
- Pluck: 70-85%
- Long release in amp envelope
- Rich harmonic mask (many harmonics)

### Synth Plucks
- Pluck: 30-50%
- Combine with filter envelope for "wow" effect
- Sawtooth mask approximation

### Kalimba/Music Box
- Pluck: 60-80%
- Sparse harmonics in mask
- High notes work best (decay more audible)

## Why It Sounds Better

Traditional filters just cut frequencies. The Pluck filter **actively removes energy** based on frequency, creating:
- More natural decay curves
- Better note-to-note consistency
- Physical realism without samples

## Pro Tip

Layer two Harmless instances: one with high Pluck setting for attack brightness, one with low Pluck for sustain body. Blend for ultimate control.

[SRC: IL-MAN - Harmless Filter Section]

```

---

## FILE: 01-Learning\Concepts\unique-phaser-system.md

```markdown
# Unique Phaser System

## Frequency-Based Phasing

Harmless's phaser is **fundamentally different** from traditional phasers. Instead of modulating all-pass filters, it modulates the **frequency positions of individual harmonics**.

### The Science

Traditional phaser: Shifts phase of entire signal through all-pass filters
Harmless phaser: **Shifts each harmonic's frequency** by small amounts

This creates:
- **Pitch shifting effects** at high rates
- **Additive chorusing** at moderate rates
- **Harmonic dance** as harmonics move independently

## Parameters

### Rate (Hz)
Controls modulation speed:
- **0.1-0.5 Hz**: Slow evolving textures
- **1-3 Hz**: Classic phaser sweep
- **5-10 Hz**: Vibrato territory
- **15+ Hz**: Ring modulation, pitch effects

### Depth (0-100%)
How far harmonics shift:
- **Low (10-30%)**: Subtle widening
- **Medium (40-60%)**: Classic phaser effect
- **High (70-100%)**: Extreme pitch modulation

### Feedback (0-100%)
How much output feeds back into input:
- **Low**: Gentle effect
- **Medium (40-70%)**: Resonant peaks
- **High**: Notchy, ringing character

### Center Frequency
Sets which harmonics are most affected:
- **Low**: Bass-heavy phasing
- **Mid**: Full spectrum effect
- **High**: Treble shimmer

## The Pitch-Shifting Trick

At high rates (20+ Hz) with moderate depth:
- Harmonics shift so fast they create **sidebands**
- This sounds like **frequency shifting** or "alien" pitch bending
- Unlike vibrato (pitch up/down), this creates **inharmonic intervals**

### Creating "Alien Leads"
1. Set Phaser Rate to 30-50 Hz
2. Depth to 60-80%
3. Play high notes with sawtooth mask
4. Result: Sci-fi pitch artifacts

## Combining with Unison

When Phaser + Unison are active together:
- Each unison voice has independent phaser position
- Creates massive stereo width
- Harmonics move in stereo field

## CPU Note

The phaser is CPU-intensive because it recalculates all 512 harmonics every modulation cycle. Disable for CPU-constrained projects.

## Pro Tip

Use phaser at slow rates (0.2 Hz) with high depth on pads to create evolving "breathing" textures - harmonics slowly shift in and out of phase relationships.

[SRC: IL-MAN - Harmless FX Section]

```

---

## FILE: 01-Learning\Quick-Reference\00_Quickstart_5_Minutes.md

```markdown
# Quickstart: Harmless (5 Minutes)

1.  **Insert:** Load **Harmless** from the Channel Rack.
2.  **Harmonic Mask:** Look at the small vertical bars in the **TIMBRE** section. Drag your mouse across them to "mask" certain harmonics.
3.  **The Pluck:** Find the **PLUCK** slider in the filter section. Turn it up to create a physical string-decay sound.
4.  **Filter:** Adjust the **FREQ** and **RES** (Resonance). Notice how even with high resonance, the sound stays clean.
5.  **Phaser:** Turn on the **PHASER** section. Try the "Frequency" mode for a unique pitch-shifting effect.
6.  **Unison:** Increase the **ORDER** knob (top right) to add massive width.
7.  **Tip:** Use the **LFO** section to modulate the filter cutoff for rhythmic movement. [SRC: IL-MAN]

```

---

## FILE: 01-Learning\Quick-Reference\filter-slope-resonance-guide.md

```markdown
# Filter Slope & Resonance Guide

## Understanding Slope

Filter slope determines **how aggressively frequencies above cutoff are removed**:

| Slope | dB/Octave | Character | Best For |
|-------|-----------|-----------|----------|
| **12dB** | Gentle | Warm, analog-like | Subtle filtering, vintage vibe |
| **24dB** | Standard | Balanced | Most applications, default choice |
| **36dB** | Steep | Sharp, clinical | Modern sounds, EDM |
| **48dB** | Brickwall | Aggressive | Special effects, extreme isolation |

## Why Harmless Slope is Special

Unlike analog filters, Harmless filters can use **extreme slopes without artifacts**:
- **No phase distortion** because harmonics are already separated
- **No resonance buildup** at steep slopes
- **Perfect mathematical cutoff** at any slope setting

### When to Use Each Slope

#### 12dB - Vintage/Gentle
- Bass sounds where warmth matters
- Pad filtering for subtle movement
- Vintage hip-hop aesthetics
- Blending multiple layers

#### 24dB - Standard Work
- Default for most sounds
- Good balance of cutoff precision and natural sound
- Leads and plucks
- When unsure, start here

#### 36dB - Modern/Sharp
- EDM plucks with tight cutoff
- Removing unwanted high harmonics completely
- Creating "telephone" vocal effects
- Distinct character sounds

#### 48dB - Extreme/Effect
- Creating dramatic filter sweeps
- Isolating specific frequency ranges
- Sound design experiments
- Brickwall protection

## Resonance (Emphasis)

Resonance boosts frequencies **at the cutoff point**.

### Safe Zones
Because of additive engine, resonance won't distort:
- **0-50%**: Safe for any sound
- **50-80%**: Audible peak, still clean
- **80-100%**: Extreme boost, can create ringing

### Resonance Use Cases

| Style | Resonance | Notes |
|-------|-----------|-------|
| **Subtle warmth** | 15-25% | Touch of character |
| **Vocal peak** | 30-45% | Emphasizes formant region |
| **Scream filter** | 60-75% | Classic resonant sweep |
| **Whistle effect** | 80-95% | Can sound like ringing |

## The Pluck + Slope Interaction

When using **Pluck filter**, slope affects the **shape of decay**:

### 12dB + Pluck
- Natural string decay
- Warm, acoustic character
- Use for: Acoustic guitar simulation

### 24dB + Pluck
- Balanced pluck character
- Good for synth plucks
- Versatile default

### 36-48dB + Pluck
- Sharp attack, fast decay
- Electronic/plastic character
- Use for: Unique synth textures

## Hip-Hop Recipe Combinations

### "Low End Theory"
- Cutoff: 200Hz
- Slope: 12dB
- Resonance: 10%
- Result: Warm sub-bass, no mud

### "Trap Highs"
- Cutoff: 8kHz
- Slope: 36dB
- Resonance: 40%
- Result: Present but controlled highs

### "Telephone Vocal"
- Cutoff: 4kHz
- Slope: 48dB
- Resonance: 60%
- Result: Classic filtered vocal

### "Underwater FX"
- Cutoff: 400Hz
- Slope: 48dB
- Resonance: 80%
- Result: Heavy underwater character

## Envelope Amount

The filter envelope's "Amount" determines how much the envelope affects cutoff:

| Amount | Effect |
|--------|--------|
| **-100%** | Inverted (env up = cutoff down) |
| **0%** | No envelope effect |
| **+50%** | Moderate sweep up |
| **+100%** | Full sweep up |

### Common Hip-Hop Settings

**Pluck with attack emphasis:**
- Amount: +70%
- Attack: 0ms
- Decay: 200ms
- Result: Sharp attack "poke"

**Pad with slow sweep:**
- Amount: +40%
- Attack: 800ms
- Result: Gradual brightness increase

**Inverted bass:**
- Amount: -60%
- Attack: 10ms
- Result: Attack click, then smooth sustain

[SRC: IL-MAN - Harmless Filter Section]

```

---

## FILE: 01-Learning\Quick-Reference\harmonic-mask-recipe-book.md

```markdown
# Harmonic Mask Recipe Book

## Classic Waveform Approximations

### Perfect Sawtooth
Amplitude formula: 1/n where n = harmonic number
- H1: 100%
- H2: 50%
- H3: 33%
- H4: 25%
- H5: 20%
- Continue to H32 for full character

**Use for**: Full-spectrum leads, Reese bass

### Perfect Square
Odd harmonics only: 1/n where n = odd number
- H1: 100%
- H2: 0%
- H3: 33%
- H4: 0%
- H5: 20%
- H6: 0%
- H7: 14%

**Use for**: Hollow leads, chiptune sounds

### Triangle Wave
Odd harmonics with squared denominator: 1/n²
- H1: 100%
- H3: 11%
- H5: 4%
- H7: 2%
- Very mellow, few harmonics needed

**Use for**: Soft bass, mellow pads

### Pulse Wave (Variable Width)
Combine square + phase offset harmonics
- Draw: High-low alternating pattern
- Width controlled by how many highs before lows

**Use for**: Nasal character, vocal sounds

---

## Hip-Hop Specific Recipes

### 808 Mafia Screech
Boost harmonics 8-16, taper rest:
`\`\`
H1-H7: 20% (foundation)
H8-H12: 100% (scream)
H13-H20: 80% → 20% (taper)
H21+: 0%
`\`\`

### Drake-style Pluck
Sparse, hollow character:
`\`\`
H1: 100% (fundamental)
H2: 30% (warmth)
H3: 15% (fifth)
H4-H6: 10% each
H7+: 5% or 0%
`\`\`

### Metro Boomin Bass
Pure sub with touch of edge:
`\`\`
H1: 100%
H2: 40% (adds grit)
H3-H4: 20% each
H5+: 0% (keep it focused)
`\`\`

### Travis Scott Atmosphere
Filtered, evolving texture:
`\`\`
H1-H4: Full
H5-H20: Random 20-60%
H21-128: Sparse random peaks
Use with slow filter sweep automation
`\`\`

### Future Alien
Inharmonic clusters:
`\`\`
H1: 100%
H3: 80%
H6: 70%
H11: 60%
H18: 50%
H27: 40%
Leave gaps between clusters
`\`\`

---

## Formant/Vocal Recipes

### "Ahh" Vowel
Formant regions: harmonics 4-6 and 9-11 boosted
- H1-H3: Moderate (30-50%)
- H4-H6: 100% (first formant)
- H7-H8: 40%
- H9-H11: 90% (second formant)
- H12+: Gradual decline

### "Eee" Vowel
Higher formants:
- H1-H4: 40%
- H5-H7: 100%
- H8-H10: 50%
- H11-H14: 90%
- H15+: Decline

### Whisper/Ghost
- Fundamental (H1): 30%
- H2-H32: All moderate (20-40%)
- H33+: Random sparse peaks
- Add 20% noise

---

## Experimental Textures

### Metallic/Bell
Inharmonic relationships:
- H1: 100%
- H2.4 (non-integer): Draw at position ~H2.5
- H3.7: Position ~H4
- H5.2: Position ~H5
- Results in metallic ring

### Dissonant/Dark
- H1: 100%
- H2: 80%
- H3: 60%
- H4: 100% (octave clash)
- H5: 50%
- H6: 90% (dissonance)

### Pure Sine
- H1: 100%
- H2-H512: 0%
Use for: Sub-bass, testing, layering foundation

---

## Editing Tips

1. **Right-click mask** for shape tools
2. **Draw curves** by dragging horizontally across multiple bars
3. **Copy/paste** sections using Alt+drag
4. **A/B test** by using the mask preset slots
5. **Randomize** for happy accidents, then tame

[SRC: IL-MAN - Harmless Oscillator Editor]

```

---

## FILE: 01-Learning\Quick-Reference\hip-hop-preset-starter-pack.md

```markdown
# Hip-Hop Preset Starter Pack

## Category: Hard Trap Leads

### Screech Lead
**Use for**: 808 Mafia style, high-energy drops
- **Mask**: Sawtooth shape, harmonics 1-16 at full, then taper
- **Filter**: Cutoff 4kHz, Res 40%, Slope 24dB
- **Pluck**: 0%
- **Unison**: 4 voices, Detune 30%, Stereo 80%
- **Effects**: Maximus for punch, slight reverb
- **Envelope**: Attack 2ms, Decay 300ms, Sustain 60%, Release 200ms

### Bell Pluck
**Use for**: Counter-melodies, high-register hooks
- **Mask**: Sparse harmonics (1,2,4,8,16 only)
- **Filter**: Cutoff 8kHz, Res 20%
- **Pluck**: 70%
- **Unison**: 2 voices, minimal detune
- **Envelope**: Attack 1ms, Decay 400ms, Sustain 0%, Release 500ms

### Alien Synth
**Use for**: Future type beats, sci-fi vibes
- **Mask**: Inharmonic pattern (custom draw)
- **Phaser**: Rate 25Hz, Depth 80%
- **Filter**: Cutoff sweeps with LFO
- **Unison**: 5 voices
- **Effects**: Heavy reverb, long delay

---

## Category: 808 Support Bass

### Sub Bass
**Use for**: Foundation under 808s
- **Mask**: Fundamental only (harmonic 1 at 100%, all others 0%)
- **Sub Osc**: -12, 50% level
- **Filter**: Cutoff 200Hz, no resonance
- **Pluck**: 0%
- **Envelope**: Attack 5ms, full sustain
- **No effects**: Keep it clean

### Reese Bass
**Use for**: DnB influences, aggressive low-end
- **Mask**: Sawtooth with high harmonics
- **Filter**: Cutoff modulated by envelope, Res 60%
- **Unison**: 3 voices, Detune 50%
- **Effects**: Slight distortion, compression

### Pluck Bass
**Use for**: Rhythmic bass patterns, garage vibes
- **Mask**: Triangle-ish, moderate harmonics
- **Pluck**: 40%
- **Filter**: Cutoff 800Hz, tracks velocity
- **Envelope**: Short attack, medium decay

---

## Category: R&B Textures

### Warm Pad
**Use for**: Chords, atmosphere, backing
- **Mask**: Rounded square (odd harmonics, gentle slope)
- **Filter**: Cutoff 3kHz, gentle slope
- **Unison**: 6 voices, wide stereo
- **Phaser**: Slow rate (0.5Hz), high depth
- **Envelope**: Slow attack (500ms), long release

### Vocal Synth
**Use for**: Vocal-like leads, formant sounds
- **Mask**: Formant regions boosted (harmonics 4-7, 10-13)
- **Filter**: Cutoff follows notes, Res 45%
- **Pluck**: 10-20%
- **Effects**: Chorus for width, reverb for space

### Atmospheric Texture
**Use for**: Background layers, transitions
- **Mask**: Random sparse harmonics
- **Filter**: Slowly opening (automation)
- **Noise**: 30% added
- **Phaser**: Medium rate, high depth
- **Reverb**: 100% wet, large size

---

## Category: Chiptune/Retro

### 8-Bit Square
**Use for**: Retro game vibes, nostalgia
- **Mask**: Perfect square (odd harmonics only, steep decay)
- **Filter**: Cutoff 8kHz, brickwall slope
- **Crush**: 8-bit, reduce sample rate
- **Envelope**: Instant attack, sharp decay

### Chiptune Arp
**Use for**: Fast arpeggios, gaming energy
- **Mask**: Mix of square and saw elements
- **Pluck**: 30%
- **Unison**: OFF (keep it pure)
- **Effects**: Delay with dotted 8th timing

---

## Quick Navigation

- Need **plucks**? → Check Pluck filter and Bell presets
- Need **bass**? → Focus on mask fundamentals and Sub osc
- Need **width**? → Unison + Phaser together
- Need **character**? → Custom harmonic masks

[SRC: IL-MAN - Harmless Factory Presets]

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet

## Oscillator (Timbre) Section

| Parameter | Range | Function | Hip-Hop Use |
|-----------|-------|----------|-------------|
| Harmonic Mask | 512 bars | Draw custom waveform | Essential for all sounds |
| Shape Presets | 8 types | Quick starting points | Saw for leads, Triangle for bass |
| Sub Osc | -12 to 0 | Octave below fundamental | Fat bass foundation |
| Noise | 0-100% | White noise addition | Percussive attacks, texture |
| Color | -100 to +100 | Bright/dark balance | +20 for bright leads, -40 for dark bass |

## Filter Section

| Parameter | Range | Function | Pro Tip |
|-----------|-------|----------|---------|
| Cutoff | 20Hz-20kHz | Remove high frequencies | Can go extreme (1Hz to Nyquist) |
| Resonance | 0-100% | Boost at cutoff point | Won't distort due to additive engine |
| Slope | 12-48dB/oct | Steepness of cutoff | 48dB = sharp digital sound |
| Drive | 0-100% | Saturation at cutoff | Add warmth/grit |
| Pluck | 0-100% | String decay simulation | 50% = instant guitar character |

## Envelope Section

| Parameter | Amp Env | Filter Env | Best For |
|-----------|---------|------------|----------|
| Attack | 0-10s | 0-10s | Plucks want 0ms attack |
| Decay | 0-10s | 0-10s | Body of the sound |
| Sustain | 0-100% | -100 to +100% | Plucks = 0% |
| Release | 0-10s | 0-10s | Let notes ring or cut tight |
| Amount | N/A | -100 to +100% | How much filter env affects cutoff |

## Phaser Section

| Parameter | Quick Settings |
|-----------|----------------|
| Slow Pad | Rate 0.3, Depth 80% |
| Classic | Rate 1.5, Depth 50%, Feedback 60% |
| Vibrato | Rate 8, Depth 30% |
| Alien FX | Rate 35, Depth 70%, High notes |
| Stereo Wide | Rate 2, Depth 100%, +Unison |

## Unison Section

| Parameter | Range | Function |
|-----------|-------|----------|
| Voices | 1-9 | Stacked detuned oscillators |
| Detune | 0-100% | Spacing between voices |
| Stereo | 0-100% | Width of stereo spread |
| Blend | 0-100% | Mix with dry signal |

## Effects Section

| Effect | Key Parameters | Hip-Hop Application |
|--------|----------------|---------------------|
| **Maximus** | Compression threshold | Glue and punch |
| **Reverb** | Size, Damp, Mix | Atmospheric depth |
| **Delay** | Time, Feedback, Ping-Pong | Rhythmic echoes |
| **Chorus** | Rate, Depth, Voices | Analog-style width |
| **Crush** | Bit depth, Sample rate | Lo-fi texture |
| **Distortion** | Drive, Tone | Saturation and edge |

## Performance Shortcuts

- **Right-click mask**: Clear, randomize, shape tools
- **Shift+drag**: Fine mask adjustments
- **Alt+click filter cutoff**: Reset to max
- **Double-click value**: Type exact number

[SRC: IL-MAN - Harmless Parameter Reference]

```

---

## FILE: 01-Learning\Quick-Reference\troubleshooting-quick-fixes.md

```markdown
# Troubleshooting Quick Fixes

## "My sound is too thin/weak"

**Solutions:**
1. **Check Harmonic Mask**: Ensure you have enough harmonics (try sawtooth preset)
2. **Add Sub Oscillator**: Enable sub at -12, 30-50% level
3. **Increase Unison**: 3-4 voices with 20-40% detune
4. **Adjust Color**: Push towards +30 to +50 for brightness
5. **Filter Check**: Make sure cutoff isn't too low (below 1kHz)

## "My pluck doesn't sound like a pluck"

**Solutions:**
1. **Pluck Amount**: Must be 30%+ to hear effect
2. **Envelope Sustain**: Set to 0% for true pluck decay
3. **Harmonic Content**: Need sufficient harmonics to decay (try saw mask)
4. **Note Duration**: Play staccato (short notes) for pluck character
5. **Filter Cutoff**: Higher cutoffs (5kHz+) show pluck better

## "Filter sounds weird/distorted"

**Solutions:**
1. **This is normal!**: Harmless filters can sound different from analog
2. **Reduce Resonance**: Try under 50% if too ringing
3. **Adjust Slope**: 24dB is most "normal" sounding
4. **Check Drive**: Reduce drive if added unwanted distortion
5. **Try Different Mask**: Some harmonic combinations react strangely

## "Phaser sounds like vibrato/pitch shift"

**Solutions:**
1. **This is FEATURE**: Harmless phaser modulates harmonic frequencies
2. **Reduce Rate**: Under 10Hz for traditional phaser sound
3. **Reduce Depth**: Under 40% for subtle effect
4. **Lower Center**: Move center frequency down for gentler effect
5. **Combine with Filter**: Filter resonance + phaser = traditional sound

## "CPU usage is too high"

**Solutions:**
1. **Disable Unison**: Single voice mode
2. **Reduce Phaser**: Turn off or reduce depth to 0%
3. **Simplify Mask**: Fewer harmonics = less CPU
4. **Freeze Track**: In FL Studio, freeze the channel
5. **Increase Buffer**: In audio settings, raise buffer size

## "Sound is clipping/distorting"

**Solutions:**
1. **Reduce Master Volume**: Turn down Harmless output
2. **Check Unison**: Multiple voices = louder, reduce blend
3. **Maximus Threshold**: If using Maximus, raise threshold
4. **Filter Resonance**: Very high resonance can peak
5. **Sub Osc Level**: Reduce if too loud with main osc

## "Unison sounds muddy"

**Solutions:**
1. **Reduce Detune**: Try 15-25% instead of 50%+
2. **Reduce Voices**: 3 voices instead of 7-9
3. **Narrow Stereo**: 30-40% width instead of 100%
4. **Add Filter**: Cut highs slightly to clean up
5. **Check Phase**: This shouldn't happen in additive, check other plugins

## "Can't get that 'analog warmth'"

**Solutions:**
1. **Use Drive**: 20-40% drive adds saturation
2. **Gentle Slope**: 12dB filter slope is warmer
3. **Low Resonance**: 15-30% for subtle character
4. **Effects Chain**: Add chorus or slight distortion
5. **Accept difference**: Harmless is cleaner by design - that's its character

## "Envelopes sound clicky/poppy"

**Solutions:**
1. **Increase Attack**: Even 2-5ms helps
2. **Check Sustain**: Ensure sustain level makes sense with decay
3. **Release Time**: Very short release can click
4. **Filter Envelope**: If synced to filter, check filter cutoff range
5. **Velocity**: Check if velocity is causing extreme variations

## "My custom mask disappeared"

**Solutions:**
1. **Check Preset Slot**: You may have switched slots
2. **Save Preset**: Always save custom masks to a slot
3. **Undo**: Ctrl+Z may recover
4. **Copy to A/B**: Use A/B compare to backup before experimenting

## "Effects not working/hear no difference"

**Solutions:**
1. **Check Mix/Amount**: Most effects have mix controls at 0% by default
2. **Effect Order**: Effects are in series, check signal flow
3. **Bypass Test**: Toggle effect on/off to compare
4. **Reset**: Right-click parameter to reset to default
5. **Maximus**: Check that threshold isn't set too high (no reduction)

[SRC: IL-MAN - Harmless Troubleshooting]

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Harmless

| Parameter | Section | Vibe Impact | Mix Impact | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Harmonic Mask**| Timbre | **Psychedelic**| **Spectral** | Grid for enabling/disabling partials.|
| **Pluck** | Filter | **Upbeat** | **Transient** | Mathematical string decay engine. |
| **Filter Slope** | Filter | **Moody** | **Phase** | Slope steepness (up to Brickwall).|
| **Phaser Mode** | Phaser | **Spacey** | **Width** | Classic, Freq, or Offset modes. |
| **Order** | Unison | **Melodic** | **Width** | Number of unison voices. |
| **Compressor** | Effects | **Upbeat** | **Dynamics** | Maximus-based leveling engine. |

- **Vibe Impact Tag (Pluck):** The "Pluck" slider is the primary lever for modern melodic rap sounds.
- **Mix Impact Tag (Slope):** Harmless allows for steep "Brickwall" filters that do not cause the phase smearing found in analog emulations. [SRC: IL-MAN]
```

---

## FILE: 02-Data\parameters\all-parameters.json

```json
{
  "metadata": {
    "plugin": "Harmless",
    "version": "1.x",
    "lastUpdated": "2026-02-03",
    "schema": "parameter-v1"
  },
  "parameters": [
    {
      "id": "harmonicMask",
      "name": "Harmonic Mask",
      "category": "oscillator",
      "type": "custom",
      "range": { "min": 0, "max": 512, "bars": 512 },
      "default": "sawtooth",
      "description": "Visual editor for 512 harmonic amplitudes. Draw custom oscillator shapes by adjusting individual harmonic levels.",
      "hipHopRelevance": "Core sound design - determines fundamental timbre",
      "src": "IL-MAN"
    },
    {
      "id": "subOscillator",
      "name": "Sub Oscillator",
      "category": "oscillator",
      "type": "continuous",
      "range": { "min": -12, "max": 0, "unit": "semitones" },
      "default": -12,
      "description": "Adds octave(s) below fundamental for bass reinforcement",
      "hipHopRelevance": "Essential for 808-style sub bass",
      "src": "IL-MAN"
    },
    {
      "id": "subLevel",
      "name": "Sub Level",
      "category": "oscillator",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 0,
      "description": "Mix level of sub oscillator",
      "hipHopRelevance": "Controls sub bass weight",
      "src": "IL-MAN"
    },
    {
      "id": "noise",
      "name": "Noise",
      "category": "oscillator",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 0,
      "description": "White noise added to oscillator",
      "hipHopRelevance": "Percussive attacks, texture, atmosphere",
      "src": "IL-MAN"
    },
    {
      "id": "color",
      "name": "Color",
      "category": "oscillator",
      "type": "bipolar",
      "range": { "min": -100, "max": 100, "unit": "percent" },
      "default": 0,
      "description": "Pre-filter brightness/darkness adjustment",
      "hipHopRelevance": "Quick tone shaping without filter",
      "src": "IL-MAN"
    },
    {
      "id": "filterCutoff",
      "name": "Filter Cutoff",
      "category": "filter",
      "type": "continuous",
      "range": { "min": 20, "max": 20000, "unit": "Hz" },
      "default": 20000,
      "description": "Frequency above which harmonics are attenuated",
      "hipHopRelevance": "Primary tone control - can go extreme without artifacts",
      "src": "IL-MAN"
    },
    {
      "id": "filterResonance",
      "name": "Filter Resonance",
      "category": "filter",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 0,
      "description": "Boost at cutoff frequency",
      "hipHopRelevance": "Character and emphasis - safe at high values in additive engine",
      "src": "IL-MAN"
    },
    {
      "id": "filterSlope",
      "name": "Filter Slope",
      "category": "filter",
      "type": "discrete",
      "range": { "options": ["12dB", "24dB", "36dB", "48dB"], "unit": "dB/octave" },
      "default": "24dB",
      "description": "Steepness of filter cutoff curve",
      "hipHopRelevance": "24dB default, 48dB for extreme effects",
      "src": "IL-MAN"
    },
    {
      "id": "filterDrive",
      "name": "Filter Drive",
      "category": "filter",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 0,
      "description": "Saturation/distortion at filter stage",
      "hipHopRelevance": "Adds analog-style warmth and grit",
      "src": "IL-MAN"
    },
    {
      "id": "pluckAmount",
      "name": "Pluck Amount",
      "category": "filter",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 0,
      "description": "String decay simulation - mathematical high-frequency energy loss",
      "hipHopRelevance": "Essential for realistic pluck sounds, hip-hop bells",
      "src": "IL-MAN"
    },
    {
      "id": "ampAttack",
      "name": "Amp Attack",
      "category": "envelope",
      "type": "continuous",
      "range": { "min": 0, "max": 10, "unit": "seconds" },
      "default": 0.001,
      "description": "Time to reach full amplitude",
      "hipHopRelevance": "0ms for plucks, 200ms+ for pads",
      "src": "IL-MAN"
    },
    {
      "id": "ampDecay",
      "name": "Amp Decay",
      "category": "envelope",
      "type": "continuous",
      "range": { "min": 0, "max": 10, "unit": "seconds" },
      "default": 0,
      "description": "Time to fall from attack peak to sustain level",
      "hipHopRelevance": "Body and character of the sound",
      "src": "IL-MAN"
    },
    {
      "id": "ampSustain",
      "name": "Amp Sustain",
      "category": "envelope",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 100,
      "description": "Level held while key is pressed",
      "hipHopRelevance": "0% for plucks, 80%+ for sustained sounds",
      "src": "IL-MAN"
    },
    {
      "id": "ampRelease",
      "name": "Amp Release",
      "category": "envelope",
      "type": "continuous",
      "range": { "min": 0, "max": 10, "unit": "seconds" },
      "default": 0.1,
      "description": "Time to fade to silence after key release",
      "hipHopRelevance": "Long for atmospheric tails, short for tight mixes",
      "src": "IL-MAN"
    },
    {
      "id": "filterEnvAttack",
      "name": "Filter Env Attack",
      "category": "envelope",
      "type": "continuous",
      "range": { "min": 0, "max": 10, "unit": "seconds" },
      "default": 0.001,
      "description": "Filter envelope attack time",
      "hipHopRelevance": "Controls filter sweep attack",
      "src": "IL-MAN"
    },
    {
      "id": "filterEnvAmount",
      "name": "Filter Env Amount",
      "category": "envelope",
      "type": "bipolar",
      "range": { "min": -100, "max": 100, "unit": "percent" },
      "default": 0,
      "description": "How much filter envelope affects cutoff",
      "hipHopRelevance": "Positive for sweep up, negative for inverted behavior",
      "src": "IL-MAN"
    },
    {
      "id": "phaserRate",
      "name": "Phaser Rate",
      "category": "fx",
      "type": "continuous",
      "range": { "min": 0, "max": 50, "unit": "Hz" },
      "default": 0,
      "description": "Speed of phaser modulation",
      "hipHopRelevance": "Low for texture, 20+ Hz for pitch effects",
      "src": "IL-MAN"
    },
    {
      "id": "phaserDepth",
      "name": "Phaser Depth",
      "category": "fx",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 50,
      "description": "How far harmonics shift in frequency",
      "hipHopRelevance": "High for alien effects, low for width",
      "src": "IL-MAN"
    },
    {
      "id": "phaserFeedback",
      "name": "Phaser Feedback",
      "category": "fx",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 0,
      "description": "Output fed back to input for resonance",
      "hipHopRelevance": "60-80% for classic phaser peaks",
      "src": "IL-MAN"
    },
    {
      "id": "unisonVoices",
      "name": "Unison Voices",
      "category": "unison",
      "type": "discrete",
      "range": { "min": 1, "max": 9, "unit": "voices" },
      "default": 1,
      "description": "Number of stacked oscillators",
      "hipHopRelevance": "3-4 for width, 7-9 for supersaw effect",
      "src": "IL-MAN"
    },
    {
      "id": "unisonDetune",
      "name": "Unison Detune",
      "category": "unison",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 20,
      "description": "Spread between unison voices",
      "hipHopRelevance": "20-40% for tight, 60%+ for wide",
      "src": "IL-MAN"
    },
    {
      "id": "unisonStereo",
      "name": "Unison Stereo",
      "category": "unison",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 50,
      "description": "Width of stereo spread for unison voices",
      "hipHopRelevance": "100% for maximum width",
      "src": "IL-MAN"
    },
    {
      "id": "unisonBlend",
      "name": "Unison Blend",
      "category": "unison",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 100,
      "description": "Mix of unison voices with dry signal",
      "hipHopRelevance": "Reduce to prevent volume buildup",
      "src": "IL-MAN"
    },
    {
      "id": "maximusMix",
      "name": "Maximus Mix",
      "category": "fx",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 0,
      "description": "Amount of multiband compression",
      "hipHopRelevance": "Add punch and glue to sounds",
      "src": "IL-MAN"
    },
    {
      "id": "reverbMix",
      "name": "Reverb Mix",
      "category": "fx",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 0,
      "description": "Wet/dry balance of reverb effect",
      "hipHopRelevance": "Atmosphere and space",
      "src": "IL-MAN"
    },
    {
      "id": "delayMix",
      "name": "Delay Mix",
      "category": "fx",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 0,
      "description": "Wet/dry balance of delay effect",
      "hipHopRelevance": "Rhythmic echoes and bounce",
      "src": "IL-MAN"
    },
    {
      "id": "chorusMix",
      "name": "Chorus Mix",
      "category": "fx",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 0,
      "description": "Wet/dry balance of chorus effect",
      "hipHopRelevance": "Analog-style width",
      "src": "IL-MAN"
    },
    {
      "id": "crushAmount",
      "name": "Crush Amount",
      "category": "fx",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 0,
      "description": "Bit depth and sample rate reduction",
      "hipHopRelevance": "Lo-fi texture and grit",
      "src": "IL-MAN"
    },
    {
      "id": "distortionAmount",
      "name": "Distortion Amount",
      "category": "fx",
      "type": "continuous",
      "range": { "min": 0, "max": 100, "unit": "percent" },
      "default": 0,
      "description": "Waveshaping distortion amount",
      "hipHopRelevance": "Saturation and edge",
      "src": "IL-MAN"
    }
  ]
}

```

---

## FILE: 02-Data\parameters\parameter-groups.json

```json
{
  "metadata": {
    "plugin": "Harmless",
    "context": "hip-hop-production",
    "lastUpdated": "2026-02-03"
  },
  "groups": [
    {
      "id": "oscillator-core",
      "name": "Oscillator Core",
      "priority": "critical",
      "parameters": ["harmonicMask", "subOscillator", "subLevel", "noise", "color"],
      "description": "Foundation of all sound - determines timbre before filtering",
      "hipHopTip": "Start with sawtooth mask for leads, sine+fundamental for sub bass"
    },
    {
      "id": "filter-character",
      "name": "Filter Character",
      "priority": "critical",
      "parameters": ["filterCutoff", "filterResonance", "filterSlope", "filterDrive", "pluckAmount"],
      "description": "Shaping and sculpting the sound - unique in additive engine",
      "hipHopTip": "Use high resonance without fear - no phase artifacts in Harmless"
    },
    {
      "id": "envelope-shaping",
      "name": "Envelope Shaping",
      "priority": "high",
      "parameters": ["ampAttack", "ampDecay", "ampSustain", "ampRelease", "filterEnvAttack", "filterEnvAmount"],
      "description": "Temporal control - attack, body, sustain, and release behavior",
      "hipHopTip": "Plucks: 0ms attack, 0% sustain. Pads: 200ms+ attack, 80% sustain"
    },
    {
      "id": "movement-fx",
      "name": "Movement & FX",
      "priority": "medium",
      "parameters": ["phaserRate", "phaserDepth", "phaserFeedback"],
      "description": "Modulation effects - unique frequency-based phaser",
      "hipHopTip": "20+ Hz phaser rate creates alien pitch effects on high notes"
    },
    {
      "id": "width-power",
      "name": "Width & Power",
      "priority": "medium",
      "parameters": ["unisonVoices", "unisonDetune", "unisonStereo", "unisonBlend"],
      "description": "Stereo width and thickness through voice stacking",
      "hipHopTip": "3-4 voices for tight bass, 7+ for supersaw leads"
    },
    {
      "id": "polish-chain",
      "name": "Polish Chain",
      "priority": "low",
      "parameters": ["maximusMix", "reverbMix", "delayMix", "chorusMix", "crushAmount", "distortionAmount"],
      "description": "Final processing - compression, space, texture",
      "hipHopTip": "Maximus adds punch, Crush adds lo-fi character"
    }
  ]
}

```

---

## FILE: 02-Data\presets\custom-hip-hop-collection.json

```json
{
  "metadata": {
    "plugin": "Harmless",
    "presetType": "custom",
    "collectionName": "hip-hop-essentials",
    "lastUpdated": "2026-02-03"
  },
  "presets": [
    {
      "name": "Metro 808 Bass",
      "category": "bass",
      "description": "Hard-hitting sub with slight edge",
      "mask": "Fundamental-focused with H2-H4 at 30%",
      "parameters": {
        "subOscillator": -12,
        "subLevel": 50,
        "filterCutoff": 200,
        "filterSlope": "12dB",
        "ampAttack": 0.005,
        "ampSustain": 100,
        "ampRelease": 0.2
      },
      "unison": {
        "voices": 1,
        "note": "Keep unison off for tight bass"
      },
      "effects": {
        "maximusMix": 40,
        "distortionAmount": 15
      },
      "usage": "Foundation bass under 808 kicks"
    },
    {
      "name": "Trap Screech",
      "category": "lead",
      "description": "Bright screaming lead for drops",
      "mask": "Sawtooth with H8-H16 boosted to 100%",
      "parameters": {
        "filterCutoff": 4000,
        "filterResonance": 40,
        "filterSlope": "24dB",
        "ampAttack": 0.002,
        "ampDecay": 0.3,
        "ampSustain": 60,
        "ampRelease": 0.2
      },
      "unison": {
        "voices": 4,
        "detune": 30,
        "stereo": 80,
        "blend": 80
      },
      "effects": {
        "reverbMix": 25,
        "maximusMix": 30
      },
      "usage": "High-energy trap melodies, 808 Mafia style"
    },
    {
      "name": "Drake Bell Pluck",
      "category": "pluck",
      "description": "Hollow, melancholic pluck",
      "mask": "Sparse - H1 at 100%, H2 at 30%, H3-H6 at 10-15%, rest minimal",
      "parameters": {
        "filterCutoff": 8000,
        "filterResonance": 20,
        "pluckAmount": 60,
        "ampAttack": 0.001,
        "ampDecay": 0.4,
        "ampSustain": 0,
        "ampRelease": 0.5
      },
      "unison": {
        "voices": 2,
        "detune": 15,
        "stereo": 40
      },
      "effects": {
        "reverbMix": 35,
        "delayMix": 20
      },
      "usage": "Emotional counter-melodies, high register"
    },
    {
      "name": "RNB Warm Pad",
      "category": "pad",
      "description": "Smooth chord bed for R&B",
      "mask": "Rounded square - odd harmonics with gentle slope",
      "parameters": {
        "filterCutoff": 3000,
        "filterSlope": "12dB",
        "filterResonance": 25,
        "ampAttack": 0.5,
        "ampSustain": 85,
        "ampRelease": 1.5
      },
      "unison": {
        "voices": 6,
        "detune": 25,
        "stereo": 100,
        "blend": 70
      },
      "phaser": {
        "rate": 0.3,
        "depth": 80,
        "feedback": 30
      },
      "effects": {
        "reverbMix": 45,
        "chorusMix": 30
      },
      "usage": "Backing chords, atmospheric bed"
    },
    {
      "name": "Future Alien",
      "category": "lead",
      "description": "Weird pitch-shifting sci-fi sound",
      "mask": "Inharmonic clusters at H1, H3, H6, H11, H18",
      "parameters": {
        "filterCutoff": 6000,
        "filterSlope": "24dB",
        "ampAttack": 0.01,
        "ampSustain": 80,
        "ampRelease": 0.4
      },
      "phaser": {
        "rate": 30,
        "depth": 75,
        "feedback": 50,
        "note": "High rate creates pitch artifacts"
      },
      "unison": {
        "voices": 3,
        "detune": 40,
        "stereo": 70
      },
      "effects": {
        "reverbMix": 50,
        "delayMix": 35
      },
      "usage": "Experimental sections, Travis Scott vibes"
    },
    {
      "name": "Chiptune Square",
      "category": "lead",
      "description": "Pure retro game sound",
      "mask": "Perfect square - odd harmonics only, steep decay 1/n",
      "parameters": {
        "filterCutoff": 8000,
        "filterSlope": "48dB",
        "ampAttack": 0.001,
        "ampDecay": 0.1,
        "ampSustain": 70,
        "ampRelease": 0.1
      },
      "unison": {
        "voices": 1,
        "note": "Keep pure single voice"
      },
      "effects": {
        "crushAmount": 40
      },
      "usage": "Retro vibes, 8-bit aesthetics"
    },
    {
      "name": "Vocal Formant",
      "category": "lead",
      "description": "Voice-like lead synth",
      "mask": "Formant regions: H4-H7 boosted to 100%, H9-H13 at 90%, rest 20-40%",
      "parameters": {
        "filterCutoff": 5000,
        "filterResonance": 45,
        "filterSlope": "24dB",
        "filterDrive": 25,
        "ampAttack": 0.05,
        "ampSustain": 90,
        "ampRelease": 0.3
      },
      "unison": {
        "voices": 2,
        "detune": 20,
        "stereo": 50
      },
      "effects": {
        "chorusMix": 40,
        "reverbMix": 30
      },
      "usage": "Vocal synth lines, formant leads"
    },
    {
      "name": "Atmospheric Texture",
      "category": "fx",
      "description": "Evolving background layer",
      "mask": "Random sparse harmonics with peaks at H1-H4, then scattered",
      "parameters": {
        "noise": 30,
        "filterCutoff": 2000,
        "filterSlope": "12dB",
        "ampAttack": 1.0,
        "ampSustain": 70,
        "ampRelease": 3.0
      },
      "phaser": {
        "rate": 0.2,
        "depth": 90,
        "feedback": 40
      },
      "effects": {
        "reverbMix": 80,
        "reverbSize": "large",
        "crushAmount": 20
      },
      "usage": "Background ambience, transitions"
    }
  ]
}

```

---

## FILE: 02-Data\presets\factory-presets-index.json

```json
{
  "metadata": {
    "plugin": "Harmless",
    "presetType": "factory",
    "lastUpdated": "2026-02-03"
  },
  "categories": [
    {
      "name": "Bass",
      "presets": [
        {
          "name": "Sub Bass",
          "description": "Pure low-end foundation",
          "character": "Deep, focused, no harmonics",
          "hipHopUse": "Under 808s, pure sub frequencies"
        },
        {
          "name": "Reese Bass",
          "description": "Wide detuned bass",
          "character": "Massive, moving, aggressive",
          "hipHopUse": "Drum and bass influences, energetic drops"
        },
        {
          "name": "Pluck Bass",
          "description": "Short decay bass",
          "character": "Tight, rhythmic, punchy",
          "hipHopUse": "UK garage, rhythmic patterns"
        },
        {
          "name": "FM Bass",
          "description": "Frequency modulated character",
          "character": "Gritty, textured, modern",
          "hipHopUse": "Contemporary trap bass"
        }
      ]
    },
    {
      "name": "Leads",
      "presets": [
        {
          "name": "Screech Lead",
          "description": "High-energy scream",
          "character": "Bright, sharp, aggressive",
          "hipHopUse": "Trap drops, high-energy sections"
        },
        {
          "name": "Saw Lead",
          "description": "Classic sawtooth",
          "character": "Full spectrum, versatile",
          "hipHopUse": "All-purpose lead, melodies"
        },
        {
          "name": "Bell Lead",
          "description": "Bell-like pluck",
          "character": "Bright, plucky, hollow",
          "hipHopUse": "Counter-melodies, high hooks"
        },
        {
          "name": "Alien Lead",
          "description": "Weird and otherworldly",
          "character": "Strange, modulated, sci-fi",
          "hipHopUse": "Future beats, experimental sections"
        }
      ]
    },
    {
      "name": "Pads",
      "presets": [
        {
          "name": "Warm Pad",
          "description": "Soft sustained chords",
          "character": "Mellow, evolving, warm",
          "hipHopUse": "Chord beds, atmosphere"
        },
        {
          "name": "Ambient Pad",
          "description": "Spacious and airy",
          "character": "Wide, dreamy, ethereal",
          "hipHopUse": "Transitions, background layers"
        },
        {
          "name": "Vocal Pad",
          "description": "Voice-like texture",
          "character": "Formant, breathy, human",
          "hipHopUse": "Vocal synth replacement"
        },
        {
          "name": "Dark Pad",
          "description": "Moody and cinematic",
          "character": "Ominous, deep, mysterious",
          "hipHopUse": "Dark hip-hop, emotional tracks"
        }
      ]
    },
    {
      "name": "Plucked",
      "presets": [
        {
          "name": "Acoustic Pluck",
          "description": "Guitar-like decay",
          "character": "Natural, organic, string",
          "hipHopUse": "Realistic plucked textures"
        },
        {
          "name": "Harp Pluck",
          "description": "Bright string pluck",
          "character": "Shimmering, ethereal, angelic",
          "hipHopUse": "Arpeggios, glissandos"
        },
        {
          "name": "Synth Pluck",
          "description": "Electronic pluck",
          "character": "Sharp, modern, punchy",
          "hipHopUse": "Pop hooks, lead lines"
        },
        {
          "name": "Kalimba",
          "description": "African thumb piano",
          "character": "Metallic, resonant, woody",
          "hipHopUse": "Ethnic textures, unique hooks"
        }
      ]
    },
    {
      "name": "FX",
      "presets": [
        {
          "name": "Riser",
          "description": "Build-up effect",
          "character": "Increasing intensity, sweep",
          "hipHopUse": "Transitions, build-ups"
        },
        {
          "name": "Downlifter",
          "description": "Fall-down effect",
          "character": "Decreasing, impact",
          "hipHopUse": "Drops, section changes"
        },
        {
          "name": "Impact",
          "description": "Hit effect",
          "character": "Sharp, percussive, transient",
          "hipHopUse": "Accents, emphasis"
        },
        {
          "name": "Texture",
          "description": "Atmospheric noise",
          "character": "Evolving, random, space",
          "hipHopUse": "Background ambience"
        }
      ]
    },
    {
      "name": "Keys",
      "presets": [
        {
          "name": "Electric Piano",
          "description": "EP-style tone",
          "character": "Bell-like, sustained, warm",
          "hipHopUse": "R&B chords, melodies"
        },
        {
          "name": "Clavinet",
          "description": "Funky keys",
          "character": "Bright, plucky, percussive",
          "hipHopUse": "Funk influences, stabs"
        },
        {
          "name": "Organ",
          "description": "Drawbar organ",
          "character": "Hollow, sustained, retro",
          "hipHopUse": "Old school, gospel vibes"
        },
        {
          "name": "Music Box",
          "description": "Toy piano sound",
          "character": "Tiny, bell-like, delicate",
          "hipHopUse": "Quirky hooks, nostalgia"
        }
      ]
    }
  ]
}

```

---

## FILE: 02-Data\presets\starter-templates.json

```json
{
  "metadata": {
    "plugin": "Harmless",
    "presetType": "starter",
    "lastUpdated": "2026-02-03"
  },
  "templates": [
    {
      "name": "Clean Slate",
      "description": "Default initialization for building from scratch",
      "mask": "Sine wave (H1 only)",
      "settings": {
        "oscillator": {
          "subOscillator": -12,
          "subLevel": 0,
          "noise": 0,
          "color": 0
        },
        "filter": {
          "cutoff": 20000,
          "resonance": 0,
          "slope": "24dB",
          "drive": 0,
          "pluck": 0
        },
        "envelope": {
          "ampAttack": 0.001,
          "ampDecay": 0,
          "ampSustain": 100,
          "ampRelease": 0.1,
          "filterEnvAmount": 0
        },
        "fx": {
          "phaserRate": 0,
          "phaserDepth": 50,
          "phaserFeedback": 0
        },
        "unison": {
          "voices": 1,
          "detune": 20,
          "stereo": 50,
          "blend": 100
        },
        "effects": {
          "maximus": 0,
          "reverb": 0,
          "delay": 0,
          "chorus": 0,
          "crush": 0,
          "distortion": 0
        }
      }
    },
    {
      "name": "Lead Foundation",
      "description": "Starting point for any lead sound",
      "mask": "Sawtooth (all harmonics 1/n)",
      "settings": {
        "oscillator": {
          "subOscillator": -12,
          "subLevel": 0,
          "noise": 0,
          "color": 10
        },
        "filter": {
          "cutoff": 8000,
          "resonance": 25,
          "slope": "24dB",
          "drive": 10,
          "pluck": 0
        },
        "envelope": {
          "ampAttack": 0.002,
          "ampDecay": 0.2,
          "ampSustain": 80,
          "ampRelease": 0.3,
          "filterEnvAmount": 20
        },
        "fx": {
          "phaserRate": 0,
          "phaserDepth": 50,
          "phaserFeedback": 0
        },
        "unison": {
          "voices": 3,
          "detune": 25,
          "stereo": 70,
          "blend": 80
        },
        "effects": {
          "maximus": 20,
          "reverb": 15,
          "delay": 0,
          "chorus": 10,
          "crush": 0,
          "distortion": 0
        }
      }
    },
    {
      "name": "Bass Foundation",
      "description": "Starting point for bass sounds",
      "mask": "Triangle-ish (few harmonics, quick decay)",
      "settings": {
        "oscillator": {
          "subOscillator": -12,
          "subLevel": 40,
          "noise": 0,
          "color": -20
        },
        "filter": {
          "cutoff": 400,
          "resonance": 15,
          "slope": "24dB",
          "drive": 15,
          "pluck": 0
        },
        "envelope": {
          "ampAttack": 0.005,
          "ampDecay": 0.1,
          "ampSustain": 95,
          "ampRelease": 0.2,
          "filterEnvAmount": -30
        },
        "fx": {
          "phaserRate": 0,
          "phaserDepth": 50,
          "phaserFeedback": 0
        },
        "unison": {
          "voices": 1,
          "detune": 20,
          "stereo": 0,
          "blend": 100
        },
        "effects": {
          "maximus": 30,
          "reverb": 0,
          "delay": 0,
          "chorus": 0,
          "crush": 0,
          "distortion": 10
        }
      }
    },
    {
      "name": "Pluck Foundation",
      "description": "Starting point for plucked sounds",
      "mask": "Moderate harmonics (1-16)",
      "settings": {
        "oscillator": {
          "subOscillator": -12,
          "subLevel": 20,
          "noise": 5,
          "color": 0
        },
        "filter": {
          "cutoff": 6000,
          "resonance": 30,
          "slope": "24dB",
          "drive": 0,
          "pluck": 50
        },
        "envelope": {
          "ampAttack": 0.001,
          "ampDecay": 0.4,
          "ampSustain": 0,
          "ampRelease": 0.6,
          "filterEnvAmount": 40
        },
        "fx": {
          "phaserRate": 0,
          "phaserDepth": 50,
          "phaserFeedback": 0
        },
        "unison": {
          "voices": 2,
          "detune": 20,
          "stereo": 50,
          "blend": 70
        },
        "effects": {
          "maximus": 25,
          "reverb": 30,
          "delay": 15,
          "chorus": 0,
          "crush": 0,
          "distortion": 0
        }
      }
    },
    {
      "name": "Pad Foundation",
      "description": "Starting point for pad sounds",
      "mask": "Gentle saw or rounded square",
      "settings": {
        "oscillator": {
          "subOscillator": -12,
          "subLevel": 30,
          "noise": 10,
          "color": 0
        },
        "filter": {
          "cutoff": 3000,
          "resonance": 20,
          "slope": "12dB",
          "drive": 5,
          "pluck": 0
        },
        "envelope": {
          "ampAttack": 0.8,
          "ampDecay": 0.5,
          "ampSustain": 85,
          "ampRelease": 2.0,
          "filterEnvAmount": 15
        },
        "fx": {
          "phaserRate": 0.4,
          "phaserDepth": 70,
          "phaserFeedback": 25
        },
        "unison": {
          "voices": 5,
          "detune": 30,
          "stereo": 90,
          "blend": 75
        },
        "effects": {
          "maximus": 15,
          "reverb": 40,
          "delay": 20,
          "chorus": 35,
          "crush": 0,
          "distortion": 0
        }
      }
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Harmless)

## 1. The "Clean Pluck" Rule
- **Rule:** High-energy rap needs sharp plucks.
- **Application:** Use the **Pluck** slider instead of just a standard volume envelope. Set **Filter Slope** to "Alt" or "Brick." This creates a "Snappy" hit that cuts through the loudest 808s. [SRC: REPUTABLE]

## 2. Formant Awareness
- **Rule:** Vocal synths shouldn't clash with vocals.
- **Application:** If using the "Formant" filter for a Psychedelic vibe, ensure the "Formant Frequency" isn't in the exact same range as the lead rapper's voice (usually 1kHz-2kHz).

## 3. Sub-Harmonic Weight
- **Rule:** 808s need a foundation.
- **Application:** In the **Timbre** section, ensure the first bar (the Fundamental) is at 100%. Use the "Sub" knob to add a secondary lower octave for "Moody" weight.

## 4. Unison for "Space"
- **Rule:** Backgrounds are wide, Leads are centered.
- **Application:** For ambient R&B pads, use **8 voices** of unison with high detune. For main melodies, keep unison at **3 voices** to maintain mono-compatibility.

## 5. Gain Staging (The Maximus Rule)
- **Rule:** Don't squash the dynamics.
- **Application:** The built-in "Compressor" uses the Maximus engine. If your sound feels "flat" and lifeless, turn the compressor knob to the left (Off) and use an external **Fruity Limiter**. [SRC: IL-MAN]
```

---

## FILE: 02-Data\rules\do-not-rules.json

```json
{
  "metadata": {
    "plugin": "Harmless",
    "ruleSet": "do-not-rules",
    "lastUpdated": "2026-02-03"
  },
  "rules": [
    {
      "id": "additive-misconceptions",
      "name": "Additive Engine Misconceptions",
      "priority": "high",
      "donts": [
        {
          "mistake": "Worrying about filter resonance distortion",
          "explanation": "Additive engine prevents phase issues - high resonance is safe",
          "reality": "Can use 80%+ resonance without artifacts"
        },
        {
          "mistake": "Avoiding steep filter slopes",
          "explanation": "48dB brickwall sounds clean in additive synthesis",
          "reality": "Extreme slopes are a feature, not a problem"
        },
        {
          "mistake": "Thinking it's CPU-heavy by default",
          "explanation": "CPU scales with active harmonics, not voices",
          "reality": "Sparse masks are very efficient"
        },
        {
          "mistake": "Expecting analog warmth",
          "explanation": "Harmless is mathematically clean by design",
          "reality": "Use drive/distortion to add warmth"
        }
      ]
    },
    {
      "id": "performance-pitfalls",
      "name": "Performance Pitfalls",
      "priority": "medium",
      "donts": [
        {
          "mistake": "Using phaser on every track",
          "explanation": "Phaser is CPU-intensive on all 512 harmonics",
          "reality": "Use strategically, disable when not needed"
        },
        {
          "mistake": "Rich harmonic masks for simple bass",
          "explanation": "Full sawtooth with 512 harmonics wastes CPU for sub bass",
          "reality": "Use fundamental-only or sparse masks for bass"
        },
        {
          "mistake": "9 voices unison on everything",
          "explanation": "Maximum unison not always needed",
          "reality": "3-4 voices often sufficient, saves CPU"
        },
        {
          "mistake": "High phaser rate without purpose",
          "explanation": "20+ Hz rates create extreme effects",
          "reality": "Mostly useful for special FX, not bread-and-butter sounds"
        }
      ]
    },
    {
      "id": "sound-design-mistakes",
      "name": "Sound Design Mistakes",
      "priority": "medium",
      "donts": [
        {
          "mistake": "Ignoring the harmonic mask",
          "explanation": "Using only presets misses Harmless's power",
          "reality": "Custom masks create unique sounds impossible elsewhere"
        },
        {
          "mistake": "Pluck filter with no harmonics",
          "explanation": "Pluck needs frequencies to decay - pure sine won't work",
          "reality": "Use sawtooth or rich masks with pluck"
        },
        {
          "mistake": "Unison on sub bass frequencies",
          "explanation": "Creates phase issues in mono playback systems",
          "reality": "Keep sub bass in single voice mode"
        },
        {
          "mistake": "Forgetting pluck needs 0% sustain",
          "explanation": "Sustained pluck sounds like filter effect, not decay",
          "reality": "Set amp sustain to 0 for true string decay"
        },
        {
          "mistake": "Using phaser like traditional phaser",
          "explanation": "Expecting phase shift but getting frequency shift",
          "reality": "Understand it's harmonic frequency modulation"
        }
      ]
    },
    {
      "id": "mixing-mistakes",
      "name": "Mixing Mistakes",
      "priority": "medium",
      "donts": [
        {
          "mistake": "Applying heavy unison to bass",
          "explanation": "Creates mono compatibility issues",
          "reality": "Bass should be mostly mono below 200Hz"
        },
        {
          "mistake": "Maximus at 100% on everything",
          "explanation": "Over-compression kills dynamics",
          "reality": "25-40% is the sweet spot"
        },
        {
          "mistake": "Brickwall filter without purpose",
          "explanation": "48dB slope sounds very digital/clinical",
          "reality": "Use for effect, not as default"
        },
        {
          "mistake": "High resonance on bass",
          "explanation": "Can create whistling artifacts in low frequencies",
          "reality": "Keep bass resonance under 30%"
        }
      ]
    },
    {
      "id": "workflow-inefficiencies",
      "name": "Workflow Inefficiencies",
      "priority": "low",
      "donts": [
        {
          "mistake": "Not saving custom masks",
          "explanation": "Losing good masks when switching presets",
          "reality": "Save to mask preset slots before experimenting"
        },
        {
          "mistake": "Random mask drawing without purpose",
          "explanation": "Random harmonics rarely sound musical",
          "reality": "Use mask recipes or purposeful shapes"
        },
        {
          "mistake": "Ignoring sub oscillator",
          "explanation": "Missing out on easy low-end extension",
          "reality": "Sub osc is powerful for bass design"
        },
        {
          "mistake": "Never using color control",
          "explanation": "Pre-filter brightness is quick tone control",
          "reality": "Use color before adjusting filter"
        }
      ]
    }
  ]
}

```

---

## FILE: 02-Data\rules\hip-hop-production-rules.json

```json
{
  "metadata": {
    "plugin": "Harmless",
    "ruleSet": "hip-hop-production",
    "lastUpdated": "2026-02-03"
  },
  "rules": [
    {
      "id": "bass-production",
      "name": "Bass Production Rules",
      "priority": "critical",
      "category": "bass",
      "rules": [
        {
          "rule": "Unison OFF for sub bass",
          "explanation": "Multiple voices create phase issues in low frequencies in mono systems",
          "action": "Set unison voices to 1 for pure sub bass"
        },
        {
          "rule": "Fundamental + Sub osc",
          "explanation": "Combine main oscillator with -12 sub for 808-style weight",
          "settings": {
            "mask": "Sine or fundamental-focused",
            "subOscillator": -12,
            "subLevel": 40
          }
        },
        {
          "rule": "12dB slope for warmth",
          "explanation": "Gentler filter slope preserves more harmonic content",
          "guideline": "Use 12dB or 24dB for bass, avoid 48dB"
        },
        {
          "rule": "Short attack, full sustain",
          "explanation": "Bass needs immediate presence but sustained body",
          "envelope": {
            "attack": "5ms",
            "sustain": "95%+",
            "release": "200ms"
          }
        },
        {
          "rule": "Maximus for punch",
          "explanation": "Multiband compression adds snap and controls dynamics",
          "mix": "30-40% Maximus mix"
        }
      ]
    },
    {
      "id": "lead-production",
      "name": "Lead Production Rules",
      "priority": "high",
      "category": "lead",
      "rules": [
        {
          "rule": "Sawtooth for brightness",
          "explanation": "All harmonics present = full spectrum presence",
          "mask": "Sawtooth shape (1/n decay)"
        },
        {
          "rule": "Unison for width",
          "explanation": "3-7 voices with detune creates stereo presence",
          "settings": {
            "voices": "3-7",
            "detune": "25-40%",
            "stereo": "70-100%"
          }
        },
        {
          "rule": "Pluck for character",
          "explanation": "Even leads benefit from slight pluck (10-20%) for attack definition",
          "guideline": "Add 15% pluck to sustained leads"
        },
        {
          "rule": "Phaser for movement",
          "explanation": "Slow phaser adds evolving character without obvious effect",
          "settings": {
            "rate": "0.2-0.8 Hz",
            "depth": "60-80%"
          }
        },
        {
          "rule": "Filter envelope for interest",
          "explanation": "Modulating cutoff adds life to sustained notes",
          "amount": "+30 to +60%"
        }
      ]
    },
    {
      "id": "pluck-production",
      "name": "Pluck Production Rules",
      "priority": "high",
      "category": "pluck",
      "rules": [
        {
          "rule": "Pluck filter 40-70%",
          "explanation": "Sweet spot for realistic string decay",
          "guideline": "Lower for synth plucks, higher for realistic strings"
        },
        {
          "rule": "0% sustain for true decay",
          "explanation": "Pluck effect needs to decay to silence",
          "envelope": {
            "sustain": "0%",
            "decay": "200-600ms"
          }
        },
        {
          "rule": "Sparse masks for clarity",
          "explanation": "Too many harmonics = muddy decay",
          "guideline": "Limit to H1-H16 for clean plucks"
        },
        {
          "rule": "Reverb for space",
          "explanation": "Plucks benefit from room ambience",
          "mix": "25-40% reverb"
        },
        {
          "rule": "Velocity to filter",
          "explanation": "Harder hits = brighter plucks",
          "setup": "Map velocity to filter cutoff"
        }
      ]
    },
    {
      "id": "pad-production",
      "name": "Pad Production Rules",
      "priority": "medium",
      "category": "pad",
      "rules": [
        {
          "rule": "Slow attack essential",
          "explanation": "Pads need to fade in smoothly",
          "envelope": {
            "attack": "500ms-2s",
            "release": "1-3s"
          }
        },
        {
          "rule": "Wide unison for atmosphere",
          "explanation": "5+ voices creates lush stereo field",
          "settings": {
            "voices": "5-9",
            "stereo": "90-100%"
          }
        },
        {
          "rule": "Gentle filter slope",
          "explanation": "12dB slope preserves warmth",
          "recommendation": "12dB or 24dB only"
        },
        {
          "rule": "Phaser for evolution",
          "explanation": "Slow phaser creates breathing texture",
          "settings": {
            "rate": "0.1-0.5 Hz",
            "depth": "70-90%"
          }
        },
        {
          "rule": "Heavy effects acceptable",
          "explanation": "Pads can handle 40%+ reverb and chorus",
          "effects": {
            "reverb": "40-60%",
            "chorus": "30-50%"
          }
        }
      ]
    },
    {
      "id": "mixing-rules",
      "name": "Mixing Integration Rules",
      "priority": "high",
      "category": "mixing",
      "rules": [
        {
          "rule": "Harmless + 808 compatibility",
          "explanation": "Additive engine plays well with 808 samples",
          "tip": "No phase issues when layering with samples"
        },
        {
          "rule": "Brickwall filter for clarity",
          "explanation": "Use extreme slopes to isolate frequency ranges",
          "useCase": "Remove mud with 48dB slope at 300Hz"
        },
        {
          "rule": "Maximus as glue",
          "explanation": "Built-in Maximus adds cohesion to sounds",
          "guideline": "25-40% mix on most sounds"
        },
        {
          "rule": "Alien phaser sparingly",
          "explanation": "High-rate phaser effects are intense",
          "tip": "Use for special moments, not entire arrangement"
        },
        {
          "rule": "Mono bass, stereo leads",
          "explanation": "Follow hip-hop conventions for width",
          "guideline": "Bass <200Hz mono, leads wide stereo"
        }
      ]
    }
  ]
}

```

---

## FILE: 02-Data\rules\synthesis-rules.json

```json
{
  "metadata": {
    "plugin": "Harmless",
    "ruleSet": "synthesis-rules",
    "lastUpdated": "2026-02-03"
  },
  "rules": [
    {
      "id": "additive-engine-behavior",
      "name": "Additive Engine Behavior",
      "priority": "critical",
      "description": "Fundamental properties of Harmless's additive synthesis engine",
      "rules": [
        {
          "rule": "No phase cancellation",
          "explanation": "Since harmonics are generated mathematically rather than summed from oscillators, there is no phase interference between frequencies",
          "implication": "Can use extreme filter settings without artifacts"
        },
        {
          "rule": "Mathematical filter perfection",
          "explanation": "Filters don't introduce phase shift or resonance artifacts because harmonics are already separated",
          "implication": "48dB brickwall slope sounds clean, unlike analog equivalents"
        },
        {
          "rule": "CPU scales with harmonics",
          "explanation": "More harmonics in mask = more CPU usage. Silent harmonics cost nothing",
          "implication": "Sparse masks are more efficient than rich ones"
        },
        {
          "rule": "Harmonic independence",
          "explanation": "Each harmonic can be individually controlled in amplitude",
          "implication": "Can create impossible waveforms that don't exist in nature"
        }
      ],
      "src": "IL-MAN"
    },
    {
      "id": "harmonic-mask-rules",
      "name": "Harmonic Mask Rules",
      "priority": "high",
      "description": "Guidelines for drawing effective harmonic masks",
      "rules": [
        {
          "rule": "Fundamental determines pitch",
          "explanation": "Harmonic 1 (fundamental) must be present for pitched sound",
          "guideline": "Keep H1 at 100% unless creating special effects"
        },
        {
          "rule": "Odd = hollow, Even = warm",
          "explanation": "Odd harmonics (1,3,5...) create hollow/woodwind character. Even harmonics (2,4,6...) add warmth",
          "guideline": "For clarinet/square: emphasize odds. For warmth: add evens"
        },
        {
          "rule": "Amplitude decay determines brightness",
          "explanation": "Fast decay (1/n²) = dull. Slow decay (1/n) = bright. No decay = harsh",
          "guideline": "Sawtooth uses 1/n, triangle uses 1/n²"
        },
        {
          "rule": "Sparse for character",
          "explanation": "Leaving gaps between harmonics creates unique textures",
          "guideline": "Try drawing only H1, H4, H8, H16 for metallic character"
        },
        {
          "rule": "Formant regions for vocals",
          "explanation": "Boosting specific harmonic bands creates vowel-like resonances",
          "guideline": "H4-H8 boost = 'ahh', H8-H14 = 'eee'"
        }
      ],
      "src": "IL-MAN"
    },
    {
      "id": "pluck-filter-rules",
      "name": "Pluck Filter Rules",
      "priority": "high",
      "description": "How the Pluck filter simulates string physics",
      "rules": [
        {
          "rule": "High frequencies decay faster",
          "explanation": "Pluck filter removes high harmonics exponentially based on frequency",
          "formula": "Decay Rate = frequency² × damping factor"
        },
        {
          "rule": "Requires harmonic content",
          "explanation": "Pluck needs harmonics to decay - pure sine shows no effect",
          "guideline": "Use sawtooth or rich masks with pluck"
        },
        {
          "rule": "Interact with amp envelope",
          "explanation": "For true plucks, set amp sustain to 0% so pluck decay is audible",
          "guideline": "Sustain > 0% = pluck on sustained tone. Sustain = 0% = true decay"
        },
        {
          "rule": "Note pitch affects decay",
          "explanation": "Higher notes decay faster than low notes with same pluck setting",
          "guideline": "Adjust pluck per octave for consistent character"
        }
      ],
      "src": "IL-MAN"
    },
    {
      "id": "phaser-rules",
      "name": "Phaser Rules",
      "priority": "medium",
      "description": "Understanding Harmless's unique phaser behavior",
      "rules": [
        {
          "rule": "Frequency modulation, not phase",
          "explanation": "Phaser shifts each harmonic's frequency, not phase like traditional phasers",
          "effect": "Can create pitch artifacts and inharmonic intervals"
        },
        {
          "rule": "High rates = pitch effects",
          "explanation": "Above 20Hz, modulation creates sidebands that sound like pitch shifting",
          "useCase": "Alien/sci-fi effects at 30-50Hz rate"
        },
        {
          "rule": "CPU intensive",
          "explanation": "Phaser recalculates all 512 harmonics every cycle",
          "guideline": "Disable for CPU-critical situations"
        },
        {
          "rule": "Combines with unison",
          "explanation": "Each unison voice has independent phaser position",
          "effect": "Massive stereo width when both active"
        }
      ],
      "src": "IL-MAN"
    },
    {
      "id": "unison-rules",
      "name": "Unison Rules",
      "priority": "medium",
      "description": "Guidelines for using Sytrus-quality unison",
      "rules": [
        {
          "rule": "Detune adds width",
          "explanation": "Detune percentage controls spacing between stacked voices",
          "guideline": "20-40% for tight, 60%+ for wide"
        },
        {
          "rule": "Stereo spreads voices",
          "explanation": "Stereo percentage pans unison voices across field",
          "guideline": "0% = mono stack, 100% = full width"
        },
        {
          "rule": "Blend prevents buildup",
          "explanation": "Multiple voices = louder signal. Blend reduces output",
          "guideline": "Reduce blend if clipping, typically 70-80%"
        },
        {
          "rule": "CPU efficient",
          "explanation": "Harmless unison is optimized and doesn't cost much CPU",
          "guideline": "Feel free to use liberally"
        }
      ],
      "src": "IL-MAN"
    }
  ]
}

```

---

## FILE: 03-Workflows\by-goal\00_Goal_Quick_Result.md

```markdown
# Goal: The Perfect Organic Pluck (Harmless)

## Routing Context
- **Target:** Melodic Trap Lead or Pop-Rap Pluck.
- **Position:** Insert FX (Before Reverb).

## Step-by-Step Setup
1.  Initialize **Harmless**.
2.  Set the **Oscillator** to "Saw."
3.  **Filter Section:**
    - Set Type to `Low Pass`.
    - Set Slope to `Brick`.
    - Turn **FREQ** to `10 o'clock`.
4.  **The Secret Lever:** Find the **PLUCK** slider. Turn it up to `70%`.
5.  **Damping:** Adjust the **DAMP** knob (next to pluck) to control how fast the high harmonics disappear.
6.  **Unison:** Set Order to `3` and Detune to `10%`.

## Result
- A sharp, "Plucky" sound that feels physically real. Unlike a standard filter envelope, Harmless calculates the decay of every harmonic individually, leading to a much more "Organic" and professional tone.

## Vibe Check
- **Upbeat/Melodic:** Perfect for catchy, rhythmic melodies that need to be the center of attention.

## Variation
- **Vocal Pluck:** Switch the Filter Type to `Formant` to add a "Talking" quality to the pluck. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\00_The_Perfect_Organic_Pluck.md

```markdown
# Goal: The Perfect Organic Pluck (Harmless)

## Routing Context
*   **Target:** Trap Melodies, Arpeggios.
*   **Mixer:** Needs a light delay and reverb.

## Step-by-Step Setup
1.  Initialize **Harmless**.
2.  **Timbre:** Select "Saw" or "Square."
3.  **Unison:** Set to 2 voices (for a little bit of thickness).
4.  **Pluck Section (Critical):**
    *   Turn the **Pluck** knob to 75%.
    *   Adjust the **Damp** slider to 40%. (This makes the high frequencies die out faster).
    *   Set **Decay** to 400ms.
5.  **Filter:** Set to **Low Pass**. Adjust **Cutoff** until you find the sweet spot between "thump" and "ping."

## What to Listen For
*   The pluck should sound "rubbery" or "woody." It should feel like a physical string being plucked, not just a volume gate.

## Variations
1.  **Metallic:** Increase the **Resonance** on the filter and use a **Saw** timbre.
2.  **Electric:** Add a touch of the built-in **Chorus** and **Compression**.

## Pitfalls
*   **Too Dull:** If the pluck is too dark, decrease the **Damp** slider or open the Filter Cutoff slightly. [SRC: IL-MAN]

```

---

## FILE: 03-Workflows\by-goal\12_Vibe_Psychedelic.md

```markdown
# Vibe: Psychedelic Alien Leads (Harmless)

## The Concept
Using the unique Additive Phaser to create shifting, "vocal-like" textures that sound like they belong in a space-themed trap beat.

## Setup
*   **Target:** A slow-moving melody or sustained lead note.

## Recipe
1.  **Timbre:** Select a complex waveform or use a random **Harmonic Mask**.
2.  **Phaser Section:**
    *   Set mode to **Frequency**.
    *   Set **Width** to 80%.
    *   Set **Speed** to 0. (We will automate this manually).
3.  **Automation:** Right-click **Phaser Offset** -> **Create Automation Clip**.
4.  **LFO:** Link a slow LFO to the **Vibrato Depth**.

## What to Listen For
*   As you move the Phaser Offset, the pitch and tone will seem to "morph" and "swirl." It creates a liquid sound that standard phasers can't replicate.

## Variation
*   **Talkbox:** Set the Phaser to "Classic" mode and move the Offset in the range where it sounds like "Ooh" and "Aah" vowels.

## Pitfalls
*   **Pitch Jumps:** In Frequency mode, moving the offset too fast can cause the pitch to "warble" uncontrollably. Keep your automation curves smooth. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\add-grit-and-texture.md

```markdown
# Adding Grit and Texture

## Target Sound
Lo-fi character, saturation, and edge - adding analog warmth or digital crunch to clean additive tones.

## Why Harmless Needs Grit
By design, Harmless is **mathematically clean**. The additive engine produces perfect waveforms without analog imperfections. To make sounds feel "real" or "vintage," we need to add grit back in.

## Prerequisites
- Understanding of distortion/saturation types
- Knowledge of filter drive
- Awareness of bit reduction effects

## Step-by-Step Process

### Method 1: Filter Drive (Warm Analog)
**Location**: Filter section → Drive parameter

**How it works**:
- Adds saturation at the filter stage
- Harmonics hit the drive before filtering
- Creates "analog" warmth

**Settings**:
- **Subtle warmth**: 10-20%
- **Noticeable saturation**: 25-40%
- **Aggressive distortion**: 50-70%

**Best for**: Bass, leads, pads needing warmth

**Pro tip**: Combine with gentle filter slope (12dB) for vintage vibe

---

### Method 2: Distortion Effect (Aggressive Edge)
**Location**: Effects chain → Distortion

**How it works**:
- Waveshaping distortion on output
- Adds high-frequency content
- Creates aggressive character

**Settings**:
- **Light grit**: 15-25%
- **Heavy distortion**: 40-60%
- **Tone control**: Adjust for brightness/darkness

**Best for**: Leads, bass needing aggression, industrial textures

**Pro tip**: Use after reverb for "shoegaze" effect

---

### Method 3: Crush Effect (Digital Lo-Fi)
**Location**: Effects chain → Crush

**How it works**:
- Bit depth reduction
- Sample rate reduction
- Recreates 8-bit/12-bit character

**Settings**:
- **Vintage digital**: 30-40%
- **Heavy lo-fi**: 50-70%
- **Extreme**: 80%+ (very crunchy)

**Best for**: Chiptune vibes, retro aesthetics, texture layers

**Pro tip**: Use on atmospheric pads for "found footage" feel

---

### Method 4: Noise Addition (Organic Texture)
**Location**: Oscillator section → Noise parameter

**How it works**:
- White noise added to oscillator
- Pre-filter (gets shaped by filter)
- Creates breath/texture

**Settings**:
- **Subtle air**: 5-10%
- **Percussive attack**: 15-25%
- **Textural layer**: 30-50%

**Best for**: Plucks, pads, vocals needing breath

**Pro tip**: Combine with pluck filter for realistic string noise

---

### Method 5: Resonance Abuse (Additive Advantage)
**Location**: Filter section → Resonance

**Why it works in Harmless**:
- Additive engine prevents phase issues
- Can use extreme resonance safely
- Creates whistling, ringing textures

**Settings**:
- **Subtle peak**: 20-30%
- **Classic resonance**: 40-60%
- **Extreme whistling**: 80-95%

**Best for**: Leads, special effects, vocal-like sounds

**Pro tip**: Sweep cutoff with high resonance for "talking" filter

---

## Style-Specific Grit Recipes

### Vintage 90s Hip-Hop
- Filter Drive: 25%
- Slope: 12dB
- Crush: 20%
- Result: MPC-era sampling vibe

### Modern Trap Edge
- Distortion: 30%
- Filter Drive: 20%
- Noise: 10%
- Result: Contemporary aggression

### Lo-Fi Chill
- Crush: 40%
- Noise: 20%
- Filter Drive: 15%
- Reverb: 50%+ (with crush)
- Result: YouTube study beats aesthetic

### Industrial/Dark
- Distortion: 50%
- Filter Drive: 35%
- Resonance: 70%
- Cutoff: Low, sweeping
- Result: Aggressive, mechanical

### Vintage Synth
- Filter Drive: 20%
- Resonance: 40%
- Chorus: 30%
- Slope: 12dB
- Result: 80s analog emulation

## Layering Grit Techniques

### Pre-Filter Grit
Apply drive before filtering:
- Creates harmonics then sculpts them
- More controlled result
- Use Filter Drive parameter

### Post-Filter Grit
Apply distortion after filtering:
- Adds highs back after low-pass
- Brighter, more aggressive
- Use Distortion effect

### Combined Approach
1. **Filter Drive**: 15% (warmth)
2. **Filter**: Shapes the sound
3. **Distortion**: 20% (edge)
4. **Result**: Warm but cutting

## Grit on Different Sounds

### Bass
- Filter Drive: 20-30%
- Optional Distortion: 15%
- Purpose: Warmth and presence

### Leads
- Filter Drive: 15-25%
- Or Distortion: 20-40%
- Purpose: Cut through mix

### Pads
- Filter Drive: 10-20%
- Noise: 10-15%
- Purpose: Analog character

### Plucks
- Filter Drive: 5-15%
- Noise: 10-20%
- Purpose: Realistic attack

### FX/Textures
- Crush: 40-70%
- Distortion: 30-50%
- Purpose: Extreme character

## Troubleshooting

### "Too distorted"
- Reduce drive/distortion amount
- Increase filter cutoff (removes harsh highs)
- Lower resonance

### "Not gritty enough"
- Layer multiple methods (drive + distortion)
- Increase amount gradually
- Try different distortion types if available

### "Sounds harsh/digital"
- Use filter drive instead of distortion
- Lower slope to 12dB
- Add subtle chorus

### "Losing low end"
- Don't overdrive bass frequencies
- Use distortion sparingly on sub
- Parallel processing: blend clean + distorted

## Pro Tips

1. **Less is more**: Subtle grit often sounds better than extreme

2. **Context matters**: Solo vs in mix - adjust accordingly

3. **Automation**: Automate drive up for emphasis moments

4. **EQ after grit**: May need to tame new frequencies created

5. **Parallel grit**: Blend clean and distorted versions for control

6. **Resonance + Drive**: High resonance + drive = classic acid sound

[SRC: IL-MAN - Harmless Filter, Effects Sections]

```

---

## FILE: 03-Workflows\by-goal\build-atmospheric-pads.md

```markdown
# Building Atmospheric Pads

## Target Sound
Lush, evolving pads that fill space without cluttering the mix - perfect for chord beds and ambient layers.

## Prerequisites
- Understanding of slow envelope settings
- Knowledge of unison width
- Familiarity with effects chains

## Step-by-Step Process

### Step 1: Create a Gentle Mask
**Warm/Rounded options**:
- Triangle wave approximation (1/n² decay)
- Rounded square (odd harmonics, gentle slope)
- Gentle sawtooth (reduced high harmonics)

**Guideline**: Keep H1-H4 strong, H5+ taper quickly for warmth

### Step 2: Slow Amp Envelope (ESSENTIAL)
`\`\`
Attack: 800ms - 2 seconds ← Long fade in
Decay: 500ms - 1 second
Sustain: 80-90%
Release: 2-4 seconds ← Long tail
`\`\`

This creates the "bloom" characteristic of pads.

### Step 3: Filter for Softness
- **Cutoff**: 2-4kHz (prevents harshness)
- **Resonance**: 15-25% (subtle, not ringing)
- **Slope**: 12dB (gentlest, warmest)
- **Drive**: 5-15% (light saturation)

### Step 4: Wide Unison
- **Voices**: 6-9 (maximum width)
- **Detune**: 25-35% (lush but controlled)
- **Stereo**: 90-100% (full spread)
- **Blend**: 70-80% (reduce volume buildup)

This is where Harmless shines - wide unison is CPU-efficient.

### Step 5: Movement and Evolution
**Slow Phaser**:
- Rate: 0.1-0.5 Hz (very slow)
- Depth: 70-90% (dramatic shift)
- Feedback: 25-40% (resonant peaks)

**Filter Envelope** (optional):
- Amount: +15 to +30%
- Attack: 1-2 seconds
- Creates gradual brightness increase

### Step 6: Effects Chain
**Reverb** (heavy):
- Mix: 40-60%
- Size: Large
- Damping: Medium (prevents muddiness)

**Chorus**:
- Mix: 30-50%
- Rate: Slow
- Adds analog-style movement

**Delay** (optional):
- Mix: 20-30%
- Time: Dotted 8th or quarter note
- Feedback: 20%

### Step 7: Space and Placement
1. Pan slightly left or right (not dead center)
2. Keep low frequencies minimal (pad is mid/high)
3. Use EQ to remove 200-400Hz mud if needed

## Style Variations

### R&B Smooth Pad
- Triangle mask
- 12dB slope
- Heavy chorus (50%)
- Slow attack (1.5s)
- Play: 7th and 9th chords

### Cinematic Dark Pad
- Reduced high harmonics in mask
- Cutoff: 2kHz
- Slope: 24dB
- Sub oscillator: -12, 40% (adds depth)
- Reverb: 50%+

### Ambient Texture Pad
- Random sparse harmonics in mask
- Noise: 15-20%
- Phaser: Rate 0.2, Depth 100%
- Reverb: 70%+
- Very long release (5s+)

### Vintage Synth Pad
- Square-ish mask
- 12dB slope
- Resonance: 30% (creates vintage peak)
- Chorus: 40%
- Slight crush effect (10%)

## Mixing Considerations

### Frequency Space
Pads should occupy:
- Midrange (500Hz-3kHz): Body and warmth
- Highs (3kHz+): Air and shimmer
- Avoid: Sub frequencies (let bass handle those)

### Stereo Width
- Full stereo is expected for pads
- But keep some mono information (blend control)
- Too wide can disappear on mono systems

### Dynamic Range
- Pads don't need heavy compression
- Let them breathe
- Maximus at 15-25% is enough

## Pro Tips

1. **Chord voicing matters**: Wide voicings (spread octaves) work best with wide pads

2. **Velocity layers**: Map velocity to filter cutoff for expressive swells

3. **Automation**: Automate filter cutoff slowly for evolving textures

4. **Layer with samples**: Add real instrument samples for organic character

5. **Multiple instances**: Use 2-3 Harmless pads with different masks for thickness

[SRC: IL-MAN - Harmless Envelopes, Effects Section]

```

---

## FILE: 03-Workflows\by-goal\craft-hard-trap-leads.md

```markdown
# Crafting Hard Trap Leads

## Target Sound
Aggressive, bright, cutting leads for trap/drill production with maximum presence and attitude.

## Prerequisites
- Understanding of additive synthesis basics
- Familiarity with harmonic masks
- Knowledge of filter envelopes

## Step-by-Step Process

### Step 1: Create the Harmonic Foundation
1. Open Harmonic Mask editor
2. Select "Sawtooth" preset or draw 1/n decay (H1=100%, H2=50%, H3=33%, etc.)
3. **Boost high harmonics**: Increase H8-H16 to 90-100% for "screech" character
4. Keep H1-H7 at standard sawtooth levels

### Step 2: Configure Oscillator
- **Sub Oscillator**: -12 semitones, 25% level (adds weight)
- **Noise**: 5-10% (adds edge and grit)
- **Color**: +20 to +40 (brightness upfront)

### Step 3: Shape with Filter
- **Cutoff**: Start at 5-8kHz
- **Resonance**: 35-50% (additive engine handles this safely)
- **Slope**: 24dB (balanced) or 36dB (sharper)
- **Drive**: 20-30% (saturation for warmth)
- **Pluck**: 10-20% (adds attack character)

### Step 4: Envelope for Punch
**Amp Envelope**:
- Attack: 2-5ms (immediate but not clicky)
- Decay: 150-300ms
- Sustain: 70-85%
- Release: 200-400ms

**Filter Envelope**:
- Attack: 0-2ms
- Decay: 100-200ms
- Amount: +40 to +70%
- This creates the "attack poke" that cuts through mix

### Step 5: Add Width with Unison
- **Voices**: 4-5
- **Detune**: 30-40%
- **Stereo**: 80-100%
- **Blend**: 75% (prevents volume buildup)

### Step 6: Modulation for Interest
- **Phaser Rate**: 0.3-0.8Hz (slow movement)
- **Phaser Depth**: 60-80%
- **Feedback**: 30-40%

### Step 7: Polish Chain
- **Maximus**: 30% mix (adds punch)
- **Reverb**: 20-30% mix, medium size
- **Optional Distortion**: 10-15% for extra edge

### Step 8: Fine-Tuning
1. Play lead melody in context with 808
2. Adjust cutoff until it sits right (usually 3-6kHz in mix)
3. If too harsh, reduce H12+ in mask or filter cutoff
4. If too thin, boost sub level or add H2-H4

## Common Variations

### 808 Mafia Style
- Boost H12-H20 specifically
- Cutoff around 4kHz
- Heavy reverb (40%+)

### Drill Lead
- Sparser mask (fewer high harmonics)
- Pluck at 30%
- Shorter decay, snappier

### Future Type
- Add alien phaser (rate 20-30Hz)
- Inharmonic mask clusters
- Heavy delay (dotted 8th)

## Key Insight
The "screech" comes from boosted high harmonics (8-16) combined with moderate filter cutoff. Don't just open the filter wide - shape the mask for character.

[SRC: IL-MAN - Harmless Synthesizer Documentation]

```

---

## FILE: 03-Workflows\by-goal\create-alien-phaser-leads.md

```markdown
# Creating Alien Phaser Leads

## Target Sound
Otherworldly, sci-fi leads with unique pitch artifacts and evolving textures - perfect for Future, Travis Scott, and experimental hip-hop.

## The Secret
Harmless's phaser doesn't just shift phase - it **modulates the frequency of each harmonic**. At high rates, this creates pitch-shifting effects and inharmonic artifacts.

## Prerequisites
- Understanding of phaser parameters
- Willingness to experiment with extreme settings
- High note range for best effect

## Step-by-Step Process

### Step 1: Create an Inharmonic Mask
Instead of standard waveforms, draw **clusters of harmonics**:
- H1: 100% (anchor)
- H3: 80%
- H6: 70%
- H11: 60%
- H18: 50%
- H27: 40%

Leave gaps between clusters. This creates "non-integer" relationships.

**Why?** The phaser shifts each cluster independently, creating interference patterns.

### Step 2: Configure the Alien Phaser
**Critical Settings**:
- **Rate**: 20-50 Hz ← High frequency modulation
- **Depth**: 70-90% ← Maximum shift
- **Feedback**: 50-70% ← Creates resonance peaks
- **Center**: Mid-high range (affects which harmonics)

### Step 3: Filter for Control
- **Cutoff**: 5-8kHz (let the artifacts through)
- **Resonance**: 40-60% (emphasize weirdness)
- **Slope**: 24dB or 36dB
- **Drive**: 20-40% (distortion adds edge)

### Step 4: Envelope
**Amp**:
- Attack: 5-15ms (slight build-up)
- Sustain: 80%
- Release: 400-600ms

**Filter Envelope**:
- Amount: +20 to +40%
- Attack: 50-100ms
- Adds "opening up" effect

### Step 5: Stereo Width
- **Unison**: 3-5 voices
- **Detune**: 40-60% (wide)
- **Stereo**: 70-90%
- **Blend**: 70%

Each unison voice has independent phaser position - massive stereo chaos!

### Step 6: Effects for Space
- **Reverb**: 40-50% (large space for artifacts to bloom)
- **Delay**: 30-40% (ping-pong for stereo interest)
- **Maximus**: 25% (control the chaos slightly)

### Step 7: Play High Notes
**Important**: This effect works best in higher registers:
- C4 and above for clear artifacts
- Higher = more obvious pitch shifting
- Try glissandos (slides between notes)

## Sound Design Recipes

### "Beam Me Up"
- Mask: Sawtooth with H10-H20 boosted
- Phaser: Rate 35Hz, Depth 80%, Feedback 60%
- Play: C5-F5 range with pitch bends
- Result: Classic sci-fi teleport sound

### "Liquid Metal"
- Mask: Sparse clusters (H1, H5, H12, H20)
- Phaser: Rate 25Hz, Depth 90%, Feedback 70%
- Filter: Cutoff sweeps with LFO
- Result: Shimmering, metallic character

### "Vocoder Ghost"
- Mask: Formant-style (H3-H8, H10-H14 boosted)
- Phaser: Rate 15Hz, Depth 75%, Feedback 50%
- Add: 20% noise
- Result: Talking, ghostly quality

### "Dimension Door"
- Mask: Full sawtooth
- Phaser: Rate 40Hz, Depth 100%, Feedback 80%
- Unison: 7 voices, wide
- Result: Extreme, almost ring-modulation effect

## When to Use

### Perfect For:
- Future type beat intros
- Build-up risers
- Experimental sections
- Breakdowns
- Sound effects within tracks

### Use Sparingly:
- Full melodies (can be overwhelming)
- Under vocals (competes for attention)
- Whole tracks (ear fatigue)

## Troubleshooting

### "Just sounds like vibrato"
- Increase rate to 30+ Hz
- Increase depth to 80%+
- Check you're playing high enough notes
- Increase feedback for notches

### "Too chaotic/messy"
- Reduce unison voices
- Simplify harmonic mask
- Lower feedback to 40%
- Reduce depth to 60%

### "No stereo width"
- Ensure unison is active (3+ voices)
- Check stereo setting is 70%+
- Verify you're not in mono output

## Advanced Techniques

### Automation Ideas:
1. **Rate sweep**: Start at 10Hz, ramp to 40Hz over 4 bars
2. **Depth modulation**: LFO on depth creates pulsing alien effect
3. **Filter tracking**: Phaser + moving cutoff = evolving textures

### Layering:
- Layer normal lead + alien lead
- Pan them differently
- Creates "split personality" effect

### Note Expression:
- Aftertouch → Phaser rate
- Velocity → Filter cutoff
- Pitch bend → Phaser depth

## Pro Tips

1. **Start with high rate**: 30Hz is the threshold for pitch artifacts

2. **Feedback is key**: Below 40% sounds like normal phaser, above 60% gets wild

3. **Try on vocals**: Route external audio through Harmless FX (if applicable)

4. **Bounce to audio**: These sounds are CPU-intensive - render to audio for arrangement

5. **Combine with reverb**: The artifacts create amazing reflections

[SRC: IL-MAN - Harmless FX Section, Phaser Documentation]

```

---

## FILE: 03-Workflows\by-goal\create-vibe-bouncy.md

```markdown
# Creating Vibe: Bouncy

## Target Vibe
Playful, energetic, rhythmic - the "fun" side of hip-hop with groove and movement.

## Sonic Characteristics
- **Rhythmic emphasis**: Syncopation, bounce
- **Mid-range focus**: Present but not harsh
- **Short decays**: Staccato, punchy
- **Movement**: Phaser, tremolo, rhythmic effects

## Prerequisites
- Understanding of syncopated rhythms
- Knowledge of pluck sounds
- Comfort with major/bright minor scales

## Step-by-Step Process

### Step 1: Rhythmic Masks
**Staccato-friendly shapes**:
- Sawtooth (full harmonics for presence)
- Square (hollow, bouncy character)
- Custom: Emphasize H2-H6 for "springy" quality

**Why**: Enough harmonics for definition, not so many they get muddy

### Step 2: Pluck Everything
**Apply pluck filter liberally**:
- Pluck: 30-60%
- Amp sustain: 0-30% (short)
- Result: Everything has a "boing" quality

**Alternative**: Short filter envelope for "wah" effect

### Step 3: Envelope for Bounce
**Amp Envelope**:
`\`\`
Attack: 0-5ms (immediate)
Decay: 100-300ms (bouncy)
Sustain: 0-40% (varies by sound)
Release: 200-500ms
`\`\`

**The bounce comes from**: Fast attack + noticeable decay

### Step 4: Filter for Definition
- **Cutoff**: 3-6kHz (present but controlled)
- **Resonance**: 25-40% (emphasis)
- **Slope**: 24dB (clean cutoff)
- **Drive**: 10-20% (subtle warmth)

### Step 5: Rhythmic Effects
**Phaser for movement**:
- Rate: 2-8Hz (musical tempo)
- Depth: 50-70%
- Creates "wobble" synced to rhythm

**Delay for bounce**:
- Time: Dotted 8th or quarter note
- Feedback: 20-30%
- Mix: 25-35%
- Creates "call and response"

### Step 6: Tight Unison
- Voices: 2-4
- Detune: 20-30%
- Stereo: 50-70%
- Not too wide (keep it focused)

## Style-Specific Bouncy Sounds

### Bouncy Lead
- Mask: Sawtooth, H4-H8 slightly boosted
- Pluck: 40%
- Cutoff: 5kHz
- Filter env: +50% (wah effect)
- Play: Staccato, syncopated

### Plucky Keys
- Mask: Square-ish
- Pluck: 50%
- Cutoff: 6kHz
- Reverb: 20%
- Delay: Dotted 8th

### Bouncy Bass
- Mask: Sawtooth, reduced H8+
- Pluck: 35%
- Cutoff: 400Hz
- Filter env: -40% (inverted - thump)
- Unison: 2 voices max

### Kalimba/Thumb Piano
- Mask: H1, H4, H8, H16
- Pluck: 70%
- Cutoff: 8kHz
- Play: High register, rhythmic

## Rhythmic Techniques

### Syncopation
- Play off the beat
- Anticipate the downbeat
- Leave space on beats
- Creates "push/pull" feel

### Call and Response
- Short phrase
- Delay echo (the response)
- Creates conversation

### Staccato vs Legato
- Mostly staccato (short)
- Occasional held note for contrast
- Keep it moving

### Swing/Groove
- Don't quantize 100%
- Humanize timing slightly
- 16th note swing feel

## Musical Elements

### Scales
- Major (happy, bright)
- Dorian minor (funky, jazzy)
- Pentatonic (simple, catchy)
- Mixolydian (bluesy, rock)

### Chords
- Major triads (happy)
- 7th chords (funky)
- Sus2/Sus4 (open, airy)

### Rhythms
- Bouncy 16th patterns
- Off-beat accents
- Triplets (swing feel)

## Arrangement Tips

### Space for Groove
- Leave room for drums to breathe
- Don't overfill frequency spectrum
- Use silence as rhythm

### Layering
- Bouncy lead (high register)
- Plucky bass (low, rhythmic)
- Keys/chords (mid, stabs)

### Contrast
- Quiet verses
- Bouncy choruses
- Build and release

## Bouncy + Hip-Hop

### Pop Trap
- Bouncy leads over trap drums
- Major key, energetic
- Radio-friendly

### Jersey Club
- Fast, bouncy rhythms
- Chopped vocal samples
- Staccato synths

### Afrobeat Fusion
- Complex rhythms
- Kalimba-like plucks
- Bouncy bass

### Old School Bounce
- Simple patterns
- Square waves
- Call-and-response

## Pro Tips

1. **Tempo matters**: 130-150 BPM for maximum bounce

2. **Space is rhythm**: Notes aren't the rhythm - the space between them is

3. **Swing quantization**: Use 50-60% swing for human feel

4. **Short is bouncy**: Short releases = bouncy. Long releases = atmospheric

5. **Reverb carefully**: Too much kills bounce - keep it dry-ish

6. **Major key bounce**: Dark vibes can bounce too, but major is easier

## Checklist

- [ ] Short attack (immediate)
- [ ] Pluck filter active
- [ ] Noticeable decay/envelope
- [ ] Mid-range focus (3-6kHz)
- [ ] Rhythmic delay
- [ ] Syncopated patterns
- [ ] Staccato playing style
- [ ] Major or bright minor key

[SRC: IL-MAN - Harmless Complete Documentation]

```

---

## FILE: 03-Workflows\by-goal\create-vibe-confident.md

```markdown
# Creating Vibe: Confident

## Target Vibe
Bold, assertive, powerful - commanding presence for anthems, braggadocious tracks, and main character energy.

## Sonic Characteristics
- **Full spectrum**: Bright, present, in-your-face
- **Wide stereo**: Maximum width and power
- **Punchy attacks**: Immediate presence
- **Sustained energy**: Continuous power

## Prerequisites
- Understanding of full-range synthesis
- Knowledge of unison width
- Comfort with major keys and power chords

## Step-by-Step Process

### Step 1: Rich Harmonic Mask
**Maximum presence**:
- Sawtooth: Full harmonic series (1/n decay)
- Or boost H6-H16 for extra bite
- All harmonics present = full spectrum

**Alternative**: Square + even harmonics added (hybrid warmth)

### Step 2: High Cutoff, Smart Resonance
**Let it breathe**:
- Cutoff: 8-12kHz (mostly open)
- Resonance: 30-50% (emphasis without harshness)
- Slope: 24dB (clean but not clinical)
- Drive: 15-25% (warmth and body)

### Step 3: Immediate Envelopes
**Amp Envelope**:
`\`\`
Attack: 0-3ms (instant)
Decay: 150-300ms
Sustain: 85-95% (sustained power)
Release: 300-600ms
`\`\`

**Filter Envelope**:
- Amount: +30 to +60%
- Attack: 0-5ms
- Creates "attack poke"

### Step 4: Maximum Unison
**Wide and powerful**:
- Voices: 6-9 (full stack)
- Detune: 35-50% (wide)
- Stereo: 90-100% (full width)
- Blend: 70-80% (volume management)

This creates "wall of sound" presence.

### Step 5: Bold Effects
**Reverb**:
- Mix: 20-30% (space without washing out)
- Size: Medium-large
- Result: Anthemic depth

**Maximus**:
- Mix: 30-40%
- Essential for punch and cohesion

**Optional Chorus**:
- Mix: 20-30%
- Adds analog-style width

### Step 6: Confident Filter Behavior
- Filter rarely moves (sustained brightness)
- If automation, slow and deliberate
- Resonance adds "singing" quality

## Style-Specific Confident Sounds

### Anthem Lead
- Mask: Sawtooth, H8-H12 boosted
- Unison: 7 voices, wide
- Cutoff: 10kHz
- Maximus: 35%
- Play: Bold, sustained notes in upper register

### Power Pad
- Mask: Full sawtooth
- Unison: 9 voices
- Cutoff: 6kHz
- Attack: 400ms (grand entrance)
- Reverb: 35%
- Play: Power chords, major progressions

### Stab Synth
- Mask: Bright saw
- Cutoff: 8kHz
- Amp: Fast attack, medium decay
- Filter env: +70%
- Unison: 5 voices
- Play: Short, powerful accents

### Epic Bass
- Mask: Full sawtooth
- Cutoff: 800Hz
- Drive: 30%
- Unison: 3 voices, mono stereo
- Maximus: 40%
- Result: Bold, powerful low end

## Musical Elements

### Scales
- Major (bold, triumphant)
- Mixolydian (rock, confident minor)
- Major pentatonic (anthemic, simple)

### Chords
- Major triads (power)
- Power chords (5ths only - strong)
- Major 7ths (sophisticated confidence)
- Add9 (open, airy power)

### Register
- Middle to high for leads (presence)
- Low-mid for bass (power)
- Full chords in midrange

## Arrangement Tips

### Bold Entrance
- Start loud or build quickly
- No tentative beginnings
- Immediate impact

### Wide Stereo
- Pan elements across field
- Unison creates natural width
- Avoid everything in center

### Sustained Energy
- Long notes for confidence
- Tied chords for power
- Avoid over-busyness

### Contrast
- Bold chorus
- Slightly pulled back verse
- Return to bold = impact

## Confident + Hip-Hop

### Anthem Trap
- Wide leads
- Powerful 808s
- Major key confidence
- "Winning" energy

### Stadium Rap
- Big synths
- Reverb on everything
- Chorus chants
- Epic scope

### Boss Music
- Bold stabs
- Confident bass
- Minimal but powerful
- "I'm in charge" energy

### Victory Lap
- Major key
- Sustained pads
- Celebratory leads
- Triumphant atmosphere

## Pro Tips

1. **Major key power**: Minor can be confident, but major is easier

2. **Sustained > staccato**: Hold notes longer for confidence

3. **Full spectrum**: Don't filter too much - let it shine

4. **Stereo width**: Wide = confident and modern

5. **Less is more**: Bold doesn't mean busy - simple powerful sounds

6. **Reference anthems**: Study stadium/arena music for confidence

## Checklist

- [ ] Full sawtooth or rich mask
- [ ] High cutoff (8kHz+)
- [ ] High sustain (85%+)
- [ ] Wide unison (6+ voices)
- [ ] Immediate attack (0-5ms)
- [ ] Full stereo width
- [ ] Major key or confident minor
- [ ] Maximus for punch
- [ ] Bold, sustained playing style

[SRC: IL-MAN - Harmless Complete Documentation]

```

---

## FILE: 03-Workflows\by-goal\create-vibe-dark.md

```markdown
# Creating Vibe: Dark

## Target Vibe
Ominous, heavy, mysterious - cinematic darkness for trap, drill, and emotional hip-hop.

## Sonic Characteristics
- **Low end emphasis**: Sub-focused, reduced highs
- **Slow movements**: Evolving, not punchy
- **Space**: Reverb-heavy, cavernous
- **Texture**: Distortion, grit, imperfection

## Prerequisites
- Understanding of low-pass filtering
- Knowledge of slow modulation
- Comfort with dark scales (minor, diminished)

## Step-by-Step Process

### Step 1: Dark Harmonic Mask
**Reduce brightness**:
- Fundamental (H1): 100%
- H2-H4: 40-50% (reduced)
- H5+: 0-20% (minimal highs)

**Or use**:
- Triangle wave (natural 1/n² decay = duller)
- Sparse odd harmonics only

**Why**: Less high harmonics = darker, heavier tone

### Step 2: Low Filter Cutoff
**Restrict to low-mids**:
- Cutoff: 800-2000Hz
- Slope: 24dB or 36dB (removes highs aggressively)
- Resonance: 20-40% (emphasis in the mid-range)

**Result**: Dark, enclosed sound

### Step 3: Slow Envelopes
**Pads/Atmospheres**:
`\`\`
Attack: 1-3 seconds (very slow)
Decay: 1-2 seconds
Sustain: 85-95%
Release: 3-5 seconds
`\`\`

**Bass/Drums**:
- Keep attack short but body heavy
- Sustained, not punchy

### Step 4: Distortion and Grit
**Add darkness through texture**:
- Filter Drive: 30-50%
- Or Distortion: 25-40%
- Creates harmonics in the midrange
- Adds "angry" character

### Step 5: Heavy Space
**Reverb**:
- Mix: 50-70%
- Size: Large
- Damping: Low (long decay)
- Result: Cavernous, endless space

**Delay**:
- Long delays (dotted half notes)
- High feedback
- Creates echos

### Step 6: Unison for Depth
- Voices: 5-7
- Detune: 30-40%
- Stereo: 80-100%
- Creates "ensemble of shadows" effect

## Style-Specific Dark Sounds

### Dark Pad
- Mask: Triangle, minimal highs
- Cutoff: 1500Hz
- Reverb: 60%
- Phaser: Rate 0.1, Depth 90%
- Play: Minor chords, low register

### Ominous Bass
- Mask: Fundamental + H2 only
- Cutoff: 300Hz
- Drive: 40%
- Pluck: 20%
- Result: Heavy, distorted low end

### Cinematic Texture
- Mask: Random sparse
- Noise: 30%
- Crush: 40%
- Filter: Slow automation downward
- Reverb: 70%+

### Evil Lead
- Mask: Sawtooth but cutoff at 2kHz
- Drive: 35%
- Resonance: 50% (whistling darkness)
- Unison: 6 voices
- Play: Minor scales, high velocity

## Musical Elements

### Scales/Modes
- Natural minor (dark, sad)
- Harmonic minor (exotic, tense)
- Phrygian (evil, Spanish)
- Locrian (unstable, mysterious)

### Chords
- Minor triads ( foundation)
- Minor 7ths (complex, jazzy dark)
- Diminished (tension, horror)
- Suspended (unresolved, uneasy)

### Register
- Low octaves (C2-C3) for weight
- High notes with heavy filtering for ghostly quality

## Arrangement Tips

### Space and Silence
- Use silence as an element
- Long sustained notes
- Let reverb fill gaps

### Contrast
- Start sparse, build gradually
- Occasional bright moments make darkness deeper
- Dynamic range: quiet to LOUD

### Layering
- Multiple dark pads (different octaves)
- Bass foundation
- Occasional "stab" sounds (short, filtered)

## Dark + Hip-Hop

### Drill Dark
- 808s + dark pads
- Sparse, space-filled
- Occasional dissonant lead

### Emotional Trap
- Dark chords + melodic leads
- Reverb-heavy
- Autotune vocals in minor key

### Cinematic Hip-Hop
- Orchestra + dark synths
- Heavy textures
- Epic, trailer-like

## Pro Tips

1. **Not just "low"**: Darkness comes from lack of highs AND harmonic choice

2. **Movement in darkness**: Slow filter sweeps create evolving shadows

3. **Distortion is your friend**: Adds edge to otherwise dull sounds

4. **Space creates weight**: Heavy reverb makes sounds feel "heavy"

5. **Reference films**: Listen to horror/sci-fi soundtracks for inspiration

6. **Dissonance works**: Minor 2nds, tritones add tension

## Checklist

- [ ] Cutoff below 3kHz
- [ ] Reduced high harmonics in mask
- [ ] Slow attack on pads
- [ ] Distortion or drive added
- [ ] Heavy reverb (50%+)
- [ ] Minor key/dark scales
- [ ] Low register emphasis

[SRC: IL-MAN - Harmless Complete Documentation]

```

---

## FILE: 03-Workflows\by-goal\design-bass-that-hits.md

```markdown
# Designing Bass That Hits

## Target Sound
Hard-hitting, focused bass that works with 808s - clean low end with character and punch.

## The Philosophy
Harmless bass should be **focused, not wide**. Unlike leads, bass needs:
- Mono compatibility (plays back correctly on all systems)
- Clean sub frequencies (no mud)
- Immediate attack (no slow fade)
- Sustained body (consistent low end)

## Prerequisites
- Understanding of low-frequency mixing
- Knowledge of sub oscillators
- Awareness of mono/stereo considerations

## Step-by-Step Process

### Step 1: Fundamental-Focused Mask
**Sub Bass Foundation**:
- H1 (fundamental): 100%
- H2: 30-40% (adds presence)
- H3-H4: 20% each
- H5+: 0-10% (minimal)

This creates a pure, focused tone without excessive harmonics that cause muddiness.

### Step 2: Engage Sub Oscillator
**Critical for weight**:
- **Octave**: -12 semitones
- **Level**: 40-60%

This adds the "sub" feel without cluttering the midrange.

### Step 3: Filter for Focus
- **Cutoff**: 200-500Hz (depending on role)
- **Resonance**: 10-25% (subtle, avoid whistling)
- **Slope**: 12dB or 24dB (gentler than leads)
- **Drive**: 15-30% (warmth and saturation)
- **Pluck**: 0-15% (optional character)

**Note**: For pure sub under 808s, keep cutoff at 200Hz.

### Step 4: NO UNISON (Critical)
**Set Unison Voices to 1**

Why? Multiple voices create phase issues in the sub range when played back in mono (club systems, phone speakers).

**If you must have width**:
- Keep it minimal (2 voices max)
- Set stereo to 0% (mono)
- Detune under 20%

### Step 5: Envelope for Punch
**Amp Envelope**:
`\`\`
Attack: 3-8ms (immediate, no click)
Decay: 100-200ms
Sustain: 95-100% (consistent)
Release: 200-400ms
`\`\`

**Filter Envelope** (optional for character):
- Amount: -20 to -50% (inverted - darker attack)
- Creates "thump" on attack

### Step 6: Polish
- **Maximus**: 30-40% (essential for punch)
- **Distortion**: 10-20% (optional grit)
- **No reverb**: Keeps it dry and focused
- **No chorus**: Maintains mono integrity

## Bass Types and Recipes

### Pure Sub (Under 808s)
- Mask: Sine (H1 only) or near-sine
- Sub osc: -12, 50%
- Cutoff: 150-200Hz
- Slope: 12dB
- Unison: OFF
- Use: Foundation layer under kick/808

### Reese Bass (DnB Style)
- Mask: Sawtooth (full)
- Cutoff: 400-600Hz
- Resonance: 40%
- Unison: 2 voices, mono, 30% detune
- Filter envelope: +50%, creates "talking" effect
- Use: Energetic bass patterns

### Trap Bass (808 Companion)
- Mask: Fundamental + H2-4 at moderate
- Cutoff: 300-400Hz
- Drive: 25%
- Pluck: 10%
- Maximus: 35%
- Use: Works alongside 808 samples

### Funky/Growl Bass
- Mask: Sawtooth with boosted H3-H6
- Cutoff: 600-800Hz
- Resonance: 35%
- Drive: 30%
- Filter envelope: +60%
- Use: Bass lines with character

### Sub Pluck (Garage Style)
- Mask: Moderate harmonics
- Cutoff: 500Hz
- Pluck: 40%
- Amp sustain: 20% (not 0 - want some body)
- Use: Rhythmic bass patterns

## Mixing with 808s

### Frequency Allocation
- **808 sample**: Handle the sub (30-60Hz)
- **Harmless bass**: Handle the upper bass (60-200Hz)
- **Cutoff relationship**: Set Harmless cutoff just above 808's fundamental

### Sidechain (Optional)
If 808 and bass conflict:
- Route 808 to mixer
- Add Peak Controller to 808 mixer track
- Link to Harmless bass volume
- Set to duck slightly on 808 hits

### Phase Check
1. Solo both 808 and bass
2. Flip phase on one (use Fruity Phase Inverter)
3. Listen for cancellation
4. Keep the setting with more low end

## Common Mistakes

### "Bass sounds thin"
- Add sub oscillator
- Increase H2-H4 in mask
- Reduce cutoff slightly

### "Bass and 808 fighting"
- EQ carve: Cut 808 fundamental from bass
- Sidechain bass to 808
- Use different octave ranges

### "No punch/attack"
- Increase filter envelope amount
- Add drive/saturation
- Check attack isn't too slow

### "Sounds muddy in mix"
- Lower cutoff (remove 200-400Hz)
- Simplify mask (reduce harmonics)
- High-pass other elements to make space

## Advanced Techniques

### Layered Bass
1. **Instance 1**: Pure sub (H1 only, cutoff 200Hz)
2. **Instance 2**: Character (rich mask, cutoff 800Hz, distortion)
3. Blend: 60/40 or 70/30

### Note-Dependent Filtering
Map note pitch to filter cutoff:
- Higher notes = slightly brighter
- Lower notes = darker
- Maintains consistency across range

### Velocity to Tone
- Hard velocity = more drive, brighter
- Soft velocity = cleaner, darker
- Creates dynamic expression

## Pro Tips

1. **Mono check**: Always check bass in mono before finalizing

2. **Spectrum analyzer**: Watch the low end - should be focused, not spread

3. **Solo vs mix**: Bass often needs different settings solo vs in context

4. **808 tuning**: Match Harmless bass pitch to 808 root note exactly

5. **Distortion placement**: Pre-filter for grit, post-filter for clean highs

[SRC: IL-MAN - Harmless Oscillator, Filter Section]

```

---

## FILE: 03-Workflows\by-goal\make-chiptune-retro-sounds.md

```markdown
# Making Chiptune/Retro Sounds

## Target Sound
Authentic 8-bit, 16-bit, and retro gaming aesthetics - perfect for nostalgia, unique hooks, and genre-blending.

## The Appeal
Chiptune sounds cut through modern production with:
- Immediate recognition (nostalgia factor)
- Clean, defined character
- Unique sonic identity
- Contrast to modern sounds

## Prerequisites
- Understanding of vintage gaming sound chips
- Knowledge of square waves and limited harmonics
- Awareness of bit reduction

## Step-by-Step Process

### Step 1: Pure Square Wave Mask
**The foundation of chiptune**:
- Use square wave preset in mask
- Or manually: Odd harmonics only (1,3,5,7...)
- Amplitude: 1/n decay (100%, 33%, 20%, 14%...)
- No even harmonics (H2, H4, H6 at 0%)

**Why square?**
- Most vintage chips (NES, Game Boy) used square waves
- Limited to 2-4 voices
- Defined character

### Step 2: Minimal Unison (Single Voice)
**Set Unison to 1 voice**

Authentic chiptune was:
- Pure, single oscillators
- No stereo width
- Monophonic or limited polyphony

**If you want slight width**:
- 2 voices max
- Minimal detune (10-15%)
- Mono stereo (0%)

### Step 3: Hard Filter Settings
- **Cutoff**: High (6-10kHz) - preserve the "buzzy" harmonics
- **Resonance**: 0-15% (keep it clean)
- **Slope**: 48dB - sharp digital cutoff
- **Drive**: 0% (no analog warmth wanted)

This recreates the "digital" character of vintage chips.

### Step 4: Sharp Envelopes
**Amp Envelope**:
`\`\`
Attack: 0-2ms (instant)
Decay: 50-150ms
Sustain: 70-85%
Release: 100-200ms (tight)
`\`\`

**Filter Envelope**: Minimal or none (keep it pure)

### Step 5: Bit Reduction (Crush)
**Critical for authenticity**:
- **Crush Amount**: 40-60%
- This reduces bit depth and sample rate
- Recreates DAC limitations of vintage hardware

**What it does**:
- Adds quantization noise
- Reduces dynamic range
- Creates "stepped" transitions

### Step 6: Optional Effects
**Delay** (authentic):
- Simple delay, not fancy
- 15-25% mix
- Quarter or eighth note timing

**No Reverb** (usually):
- Vintage games had no reverb
- Keep it dry for authenticity
- Or add 10-15% for modern twist

## Style Variations

### NES (Nintendo) Style
- Square wave mask
- 1-2 voices only
- Arpeggiated chords (rapid note switching)
- Cutoff: 8kHz
- Crush: 50%

### Game Boy Style
- Even simpler: triangle waves for bass
- Square for leads
- Very tight envelopes
- Sometimes add pulse-width variation

### 16-Bit Era (SNES/Genesis)
- Slightly richer harmonics allowed
- Multiple voices (3-4)
- Can use gentle filter slopes
- Subtle chorus OK

### Modern Chiptune Fusion
- Square wave base
- Add unison width (modern twist)
- Light reverb (spaciousness)
- Crush: 30% (subtle)

## Arpeggio Technique

Chiptune often uses arpeggios instead of full chords:

1. **Set up**: Single oscillator, square wave
2. **Program**: Rapid 16th or 32nd note patterns
3. **Pattern**: Root-3rd-5th-8ve cycling
4. **Effect**: Creates "chord" illusion with 1 voice

**Why?**
- Vintage chips had limited polyphony
- Arpeggios create energy and movement
- Instantly recognizable chiptune sound

## Sound Design Recipes

### "1-Up" Collectible Sound
- Square wave
- Cutoff: 10kHz (full brightness)
- Envelope: Very short (50ms total)
- Pitch envelope: +1 octave ramp
- Crush: 60%

### "Coin" Pickup
- Square wave with noise burst (20%)
- Envelope: Super tight (30ms)
- High pitch (C6+)
- No unison

### "Explosion" Impact
- Noise: 100%
- Filter: Cutoff sweep down rapidly
- Envelope: Short, punchy
- Crush: 70%

### "Power-Up" Chord
- 3 instances of Harmless
- Each: Square wave, different pitch (root, 3rd, 5th)
- Slight detune between them (manual)
- Arpeggiate or play together

### "Boss Battle" Bass
- Square wave with H2 at 30% (subtle)
- Cutoff: 500Hz
- Filter envelope: +60% (talking bass)
- Distortion: 25%

## Integrating with Hip-Hop

### Trap + Chiptune
- Use chiptune sounds for counter-melodies
- Layer chiptune lead over 808s
- Mix: 30% chiptune, 70% modern production

### Lofi + Chiptune
- Crush: 50-70% (heavy)
- Add vinyl noise
- Combine with lo-fi drums
- Nostalgic aesthetic

### Experimental/Future
- Use chiptune as texture layer
- Process with modern effects (heavy reverb)
- Glitch elements
- Contrast clean/dirty

## Troubleshooting

### "Sounds too modern/clean"
- Increase crush amount
- Reduce unison voices to 1
- Use 48dB filter slope
- Remove all effects except maybe delay

### "Too harsh"
- Reduce cutoff slightly (6-8kHz)
- Lower crush to 40%
- Use triangle wave instead of square for bass

### "Not authentic enough"
- Research specific chip limitations (e.g., NES = 2A03 chip)
- Use arpeggios instead of chords
- Add bit crush
- Keep it simple (less is more)

## Pro Tips

1. **Limit polyphony**: Most chips had 2-4 voices - respect this for authenticity

2. **Arpeggios are key**: The "chiptune sound" is often arpeggios, not chords

3. **Pulse width variation**: Some chips allowed pulse width - experiment in mask

4. **Noise channel**: Use noise oscillator for percussion-like elements

5. **Reference games**: Listen to actual NES/Game Boy soundtracks for inspiration

6. **Modern twist**: It's OK to break rules - use reverb, unison for contemporary chiptune fusion

[SRC: IL-MAN - Harmless Oscillator, Effects Documentation]

```

---

## FILE: 03-Workflows\by-goal\make-perfect-plucks.md

```markdown
# Making Perfect Hip-Hop Plucks

## Target Sound
Crisp, defined plucked sounds for counter-melodies, high-register hooks, and melodic accents.

## The Physics
The Pluck filter mathematically simulates string vibration decay - high frequencies lose energy faster than lows (decay rate ∝ frequency²).

## Prerequisites
- Understanding of Pluck filter parameters
- Knowledge of amp envelope sustain settings

## Step-by-Step Process

### Step 1: Choose the Right Mask
**For Acoustic-style plucks**:
- Use moderate sawtooth (H1-H12 at 1/n decay)
- Sufficient harmonics for audible decay

**For Synth plucks**:
- Square wave approximation (odd harmonics only)
- Hollow, electronic character

**For Bell/Music box**:
- Sparse mask: H1, H2, H4, H8, H16 at varying amplitudes
- Metallic, discrete harmonics

### Step 2: Critical Pluck Settings
**Pluck Amount** determines the decay speed:
- **30-40%**: Subtle pluck character
- **50-60%**: Clear string-like decay
- **70-80%**: Aggressive, fast decay

**Pluck Color/Tone**: Controls starting brightness
- Lower = darker, mellower attack
- Higher = brighter, sharper attack

### Step 3: The Envelope is CRITICAL
**For true pluck behavior**:
`\`\`
Attack: 0-2ms (immediate)
Decay: 200-600ms (depending on tempo)
Sustain: 0% ← THIS IS KEY
Release: 400-800ms (let it ring)
`\`\`

**Why 0% sustain?**
With sustain > 0%, you hear sustained tone + pluck effect
With sustain = 0%, you hear pure decay to silence (real string behavior)

### Step 4: Filter Configuration
- **Cutoff**: 4-8kHz (preserve brightness for decay)
- **Resonance**: 20-35% (subtle emphasis)
- **Slope**: 24dB (natural) or 36dB (sharper)
- **Drive**: 0-15% (optional warmth)

### Step 5: Width and Space
- **Unison**: 2-3 voices max (keep it tight)
- **Detune**: 15-25% (gentle)
- **Stereo**: 40-60% (not too wide)
- **Reverb**: 30-40% (space without mud)
- **Delay**: 15-25% (rhythmic bounce)

### Step 6: Velocity Sensitivity
Map velocity to:
- **Filter cutoff**: Harder = brighter
- **Amp envelope**: Harder = louder (standard)

This mimics how real strings respond to playing intensity.

## Style-Specific Recipes

### Drake-Style Melancholic Pluck
- Mask: Sparse (H1=100%, H2=30%, H3-H6=10-15%)
- Pluck: 60%
- Cutoff: 7kHz
- Envelope: 0ms attack, 400ms decay, 0% sustain
- Reverb: 35% wet

### Trap Bell Pluck
- Mask: H1, H4, H8, H16 boosted
- Pluck: 70%
- Cutoff: 9kHz
- Resonance: 40%
- Effects: Reverb + delay (30% each)

### Acoustic Guitar Simulation
- Mask: Full sawtooth
- Pluck: 45%
- Slope: 12dB (warmth)
- Drive: 20%
- Unison: OFF (pure character)

### Kalimba/Music Box
- Mask: H1, H2.4 (approx), H4, H7
- Pluck: 75%
- Cutoff: 8kHz
- Play: High register (C4-C6)

## Troubleshooting

### "Doesn't sound like a pluck"
- Check sustain is at 0%
- Verify pluck amount is 40%+
- Ensure mask has sufficient harmonics

### "Decay too fast/slow"
- Adjust pluck amount (not decay time)
- Higher pluck = faster decay
- Lower cutoff also affects perceived decay

### "Too thin"
- Add sub oscillator at -12
- Boost H2-H4 in mask
- Increase filter cutoff

## Pro Tips

1. **Layer approach**: Use two Harmless instances - one with high pluck for attack, one with low pluck for sustain body

2. **Note register matters**: Higher notes show pluck effect more obviously than bass notes

3. **Staccato playing**: Play short notes to let the decay be the focus

4. **Combine with filter envelope**: Pluck + filter sweep = unique textures

[SRC: IL-MAN - Harmless Filter Section, Pluck Filter Documentation]

```

---

## FILE: 03-Workflows\by-instrument\bass-synthesizer-techniques.md

```markdown
# Bass Synthesizer Techniques

## Overview
Deep dive into creating professional hip-hop bass with Harmless - from pure sub to textured low-end.

## The Bass Philosophy

### Frequency Roles
- **Sub (20-60Hz)**: Felt, not heard. 808 territory.
- **Low Bass (60-120Hz)**: Foundation, weight, punch
- **Mid Bass (120-250Hz)**: Character, definition, movement
- **High Bass (250-500Hz)**: Presence, articulation

Harmless excels at **60-500Hz** - the character range.

## Sub Bass Design

### Pure Sub Foundation
**Purpose**: Under 808s, foundation layer

**Settings**:
- **Mask**: Fundamental (H1) at 100%, all others 0%
  - Or: H1=100%, H2=20% (slight edge)
- **Sub Osc**: -12 semitones, 50% level
- **Noise**: 0%
- **Filter**: Cutoff 150-200Hz, 12dB slope, 10% resonance
- **Unison**: OFF (1 voice)
- **Envelope**: 5ms attack, 95% sustain

**Why it works**: No harmonics = no mud, pure sub focus

### Warm Sub Bass
**Purpose**: Sub with slight character

**Settings**:
- **Mask**: Fundamental + H2-H3 at 30-40%
- **Sub Osc**: -12, 40%
- **Color**: -10 to -20
- **Filter**: Cutoff 300Hz, 24dB slope
- **Drive**: 15-20%
- **Envelope**: 8ms attack

## Mid Bass Character

### Reese Bass (Moving Bass)
**Purpose**: Energetic, "talking" bass

**Settings**:
- **Mask**: Full sawtooth
- **Filter**: Cutoff 400Hz, resonance 50%
- **Envelope**: Filter amount +60%, creates "wow" effect
- **Unison**: 2 voices, mono, 30% detune
- **Drive**: 25%

**Technique**: Play sustained notes, filter moves automatically

### Pluck Bass (Rhythmic)
**Purpose**: Garage, UK bass patterns

**Settings**:
- **Mask**: Moderate sawtooth (H1-H10)
- **Pluck**: 40%
- **Filter**: Cutoff 600Hz
- **Envelope**: 0% sustain, 300ms decay
- **Drive**: 20%

**Technique**: Short rhythmic patterns, let pluck create groove

### Funky/Growl Bass
**Purpose**: Character, lead-like bass

**Settings**:
- **Mask**: Sawtooth with H3-H6 boosted
- **Filter**: Cutoff 800Hz, resonance 45%
- **Drive**: 30-40%
- **Filter Env**: +50%, fast attack
- **Distortion**: 20%

## Texture and Movement

### Distorted Bass
Add edge to any bass:

**Settings**:
- Base: Any bass preset
- **Drive**: 30-50%
- **Or Distortion**: 25-40%
- **Filter**: Slightly higher cutoff to let distortion through

**When to use**: When bass needs to cut through dense mix

### FM-Style Metallic Bass
**Settings**:
- **Mask**: Inharmonic (H1, H3.5, H6 positions)
- **Filter**: Cutoff 500Hz, 36dB slope
- **Drive**: 25%
- **Phaser**: Rate 2Hz, Depth 60%

### Sidechain Ducking Bass
Not a Harmless setting, but essential technique:

**Setup**:
1. Route 808 to mixer track
2. Add Peak Controller to 808
3. Link to Harmless bass volume
4. Adjust for subtle ducking

**Result**: Bass breathes with 808 hits

## Register Techniques

### Low Register (C1-C2)
- Keep masks simple (fundamental focus)
- Cutoff: 200-300Hz max
- No unison
- Purpose: Pure foundation

### Mid Register (C2-C3)
- Can add more harmonics
- Cutoff: 300-500Hz
- Subtle unison OK (2 voices, mono)
- Purpose: Character and groove

### High Register (C3-C4)
- Full harmonic masks
- Cutoff: 500-1000Hz
- Can use unison (stays bass territory)
- Purpose: Lead-like bass

## Advanced Bass Layering

### Layer 1: Sub Foundation
- Pure sine or near-sine mask
- Cutoff: 200Hz
- Sub osc: Active
- Unison: OFF

### Layer 2: Character
- Rich mask (sawtooth)
- Cutoff: 800Hz
- Drive: 30%
- Filter envelope: Active
- Distortion: 20%

### Blend: 60% Layer 1, 40% Layer 2
**Result**: Full, powerful bass with both weight and character

## Bass in the Mix

### EQ Relationships
- **808**: 30-60Hz
- **Harmless bass**: 60-250Hz
- **Kick**: 60-100Hz (may conflict)
- **Solution**: Cut 808 fundamental from bass, or sidechain

### Compression
- Harmless bass: Light compression or none
- Maximus: 30-40% (built-in compression)
- External: Only if bass is too dynamic

### Stereo Placement
- Bass: Mono or narrow
- Sub: Always mono
- Wide bass causes phase issues in clubs

## Troubleshooting Bass

### "No punch"
- Check attack time (too slow?)
- Add filter envelope
- Increase drive/distortion
- Check if 808 is masking it

### "Too muddy"
- Lower cutoff
- Simplify mask (reduce harmonics)
- High-pass other instruments at 200Hz+
- Check sub osc isn't too loud

### "Can't hear it on phones"
- Add H2-H4 harmonics for phone speakers
- Boost 200-400Hz range
- Add subtle distortion (creates harmonics)

### "Phase issues with 808"
- Check mono compatibility
- Flip phase on one
- Adjust timing slightly
- Sidechain 808 to bass

## Pro Tips

1. **Bass needs context**: Sounds different solo vs in mix - adjust accordingly

2. **Note choice matters**: Some notes have more energy than others in the low range

3. **Velocity dynamics**: Map velocity to filter for expressive bass

4. **Automation**: Automate cutoff for bass drops and builds

5. **Reference tracks**: A/B with professional tracks in same genre

6. **Room matters**: Bass sounds different in different spaces

[SRC: IL-MAN - Harmless Filter, Oscillator Sections]

```

---

## FILE: 03-Workflows\by-instrument\keyboard-emulation-guide.md

```markdown
# Keyboard Emulation Guide

## Overview
Emulating electric pianos, organs, clavinets, and other keyboard instruments using Harmless's additive engine.

## Electric Piano (EP)

### Tine-Based (Rhodes Style)
**Characteristics**: Bell-like attack, warm sustain, singing quality

**Settings**:
- **Mask**: H1, H2, H4, H8, H16 (octave relationships like tines)
- Amplitude: Natural decay (not equal)
- **Filter**: Cutoff 6kHz, 12dB slope
- **Resonance**: 25%
- **Pluck**: 25% (tine attack simulation)
- **Drive**: 20%

**Envelope**:
- Attack: 5ms
- Decay: 300ms
- Sustain: 80%
- Release: 800ms

**Effects**:
- Chorus: 30%
- Tremolo: Optional (if available)
- Reverb: 25%

**Playing**: Chords, melodic lines, comping

### Reed-Based (Wurlitzer Style)
**Characteristics**: Brighter, more aggressive, barky

**Settings**:
- **Mask**: Richer harmonics than Rhodes
- **Filter**: Cutoff 7kHz, resonance 35%
- **Pluck**: 15%
- **Drive**: 30%

**Character**: More bite, less bell-like

## Clavinet

### Hohner Clavinet D6
**Characteristics**: Percussive, funky, bright

**Settings**:
- **Mask**: Square-ish with H2 added
- **Filter**: Cutoff 8kHz, 24dB slope
- **Resonance**: 40%
- **Pluck**: 30%
- **Drive**: 25%

**Envelope**:
- Attack: 2ms (immediate)
- Decay: 100ms
- Sustain: 70%
- Release: 200ms (tight)

**Technique**:
- Staccato playing
- Funk patterns
- Percussive muting

## Organ

### Hammond-Style Drawbar
**Characteristics**: Sustained, hollow, harmonically rich

**Settings**:
- **Mask**: Custom drawbar simulation
  - H1: 80% (16' drawbar)
  - H2: 100% (8' drawbar)
  - H3: 60% (5-1/3')
  - H4: 80% (4')
  - H6: 40% (2-2/3')
  - H8: 60% (2')
- **Filter**: Cutoff 5kHz, gentle slope
- **Resonance**: 20%

**Envelope**:
- Attack: 20ms (percussion if desired)
- Sustain: 95%
- Release: 1s

**Effects**:
- Rotary simulation (chorus + phaser)
- Overdrive: 20-30%

### Pipe Organ
**Characteristics**: Massive, sustained, cathedral

**Settings**:
- **Mask**: Multiple harmonics with pipe relationships
- **Filter**: Cutoff 4kHz
- **Envelope**: Slow attack (1s), full sustain
- **Unison**: 5+ voices (ensemble effect)

**Effects**: Heavy reverb (cathedral simulation)

## Music Box

### Mechanical Music Box
**Characteristics**: Delicate, precise, metallic

**Settings**:
- **Mask**: H1, H4, H8, H16 (comb-like)
- **Pluck**: 80% (mechanical decay)
- **Filter**: Cutoff 9kHz, resonance 30%
- **Envelope**: Very tight
  - Attack: 1ms
  - Decay: 200ms
  - Sustain: 0%
  - Release: 300ms

**Effects**:
- Reverb: 30% (small room)
- Crush: 40% (mechanical imperfection)

### Toy Piano
**Characteristics**: Simple, slightly detuned, charming

**Settings**:
- **Mask**: Simple square or triangle
- **Pluck**: 60%
- **Unison**: 2 voices, 15% detune (slightly out of tune)
- **Filter**: Cutoff 8kHz

## Celeste

### Orchestral Celesta
**Characteristics**: Bell-like, delicate, magical

**Settings**:
- **Mask**: Bell harmonics (H1, H2, H4, H8, H16)
- **Pluck**: 50%
- **Filter**: Cutoff 8kHz, resonance 25%
- **Envelope**: Medium attack (30ms), full sustain

**Character**: Shimmering, ethereal

## Harpsichord

### Baroque Harpsichord
**Characteristics**: Plucked strings, bright, articulate

**Settings**:
- **Mask**: Rich harmonics (full sawtooth)
- **Pluck**: 40%
- **Filter**: Cutoff 7kHz, 12dB slope
- **Envelope**: Tight
  - Attack: 2ms
  - Decay: 150ms
  - Sustain: 60%
  - Release: 200ms

**Character**: No dynamics (harpsichord characteristic), articulate

## Marimba/Vibraphone

### Orchestral Mallets
**Characteristics**: Wooden/metallic, resonant, sustained

**Settings**:
- **Mask**: H1, H2, H4 (fundamental + octaves)
- **Pluck**: 55%
- **Filter**: Cutoff 6kHz
- **Resonance**: 35%
- **Envelope**: Medium decay

**Effects**:
- Tremolo (optional)
- Reverb: 35%

## Keyboard in Hip-Hop

### Neo-Soul Chords
- Rhodes-style patch
- 9th and 13th chords
- Slow attack pad underneath

### Lo-Fi Keys
- EP with crush effect (40%)
- Filter cutoff automated
- Vinyl noise layer

### Trap Stabs
- Clavinet-style
- Short, rhythmic
- Heavy on the 2 and 4

### Gospel Organ
- Hammond emulation
- Overdrive engaged
- Full chords, sustained

### Sparkle Hooks
- Music box/celesta
- High register (C5-C7)
- Simple melodies

## Playing Techniques

### Comping (Accompaniment)
- Rhythmic chords
- Staccato or sustained depending on style
- Fill spaces between vocal phrases

### Soloing
- Lead-like playing
- Bends and slides (if supported)
- Call and response with vocals

### Ostinato
- Repeated patterns
- Builds tension
- Common in hip-hop

### Arpeggios
- Broken chords
- Can use Harmless arpeggiator if available
- Creates movement

## Troubleshooting

### "Doesn't sound like the real instrument"
- Study the actual instrument's physics
- Adjust pluck amount (crucial for realism)
- Check envelope shape
- Add appropriate effects

### "Too synthetic"
- Add subtle detune
- Include imperfections (noise, crush)
- Use filter drive
- Reduce perfection in mask

### "No dynamics like the real thing"
- Map velocity to filter
- Real instruments get brighter with harder playing
- Add velocity-sensitive drive

## Pro Tips

1. **Research the instrument**: Understand how it makes sound

2. **Velocity is crucial**: Map it appropriately for each instrument type

3. **Effects make it real**: Reverb size, chorus type, all matter

4. **Register accuracy**: Play in the instrument's actual range

5. **Articulation**: Staccato vs legato matters

6. **Layer for realism**: Combine with real samples if needed

[SRC: IL-MAN - Harmless Oscillator, Filter, Physical Modeling]

```

---

## FILE: 03-Workflows\by-instrument\lead-synthesizer-mastery.md

```markdown
# Lead Synthesizer Mastery

## Overview
Comprehensive guide to creating cutting, memorable lead sounds for hip-hop leads and hooks.

## The Lead's Role
Leads must:
- **Cut through the mix** (frequency presence)
- **Be memorable** (unique character)
- **Carry emotion** (expression, dynamics)
- **Fill space** (stereo width)

## Frequency Strategy

### Presence Zones
- **2-5kHz**: Definition and articulation
- **5-8kHz**: "Air" and presence
- **8-12kHz**: Sparkle and shimmer

### Avoid
- **Too much 200-500Hz** (muddies mix)
- **Too much sub** (wastes headroom)
- **Harsh 3-4kHz** (fatiguing)

## Brightness Techniques

### Method 1: Harmonic Mask Shaping
**Sawtooth with boost**:
- Standard sawtooth: H1=100%, H2=50%, H3=33%, etc.
- **Boost H8-H16** to 90-100%
- Creates "screech" without harsh filter

**Square hybrid**:
- Start with square (odd harmonics)
- Add H2 at 40% (even harmonic warmth)
- Brighter than pure square

### Method 2: Filter Strategy
**Resonance emphasis**:
- Resonance: 40-60% (additive engine handles this)
- Cutoff: 3-6kHz
- Creates peak at cutoff = vocal-like presence

**High cutoff with slope**:
- Cutoff: 8-10kHz
- Slope: 36-48dB (removes ultra-highs but keeps presence)

### Method 3: Color Control
- Color: +30 to +50
- Pre-filter brightness boost
- Quick adjustment without mask editing

## Character Types

### Screech Lead (808 Mafia Style)
**Settings**:
- Mask: Sawtooth, H10-H18 boosted
- Cutoff: 4-6kHz
- Resonance: 45%
- Unison: 4 voices, 80% stereo
- Drive: 25%

**Usage**: High-energy drops, aggressive sections

### Smooth Lead (R&B Style)
**Settings**:
- Mask: Triangle or rounded saw
- Cutoff: 5kHz
- Resonance: 25%
- Unison: 3 voices, 60% stereo
- Phaser: Rate 0.5, Depth 60%

**Usage**: Melodic sections, emotional content

### Alien Lead (Experimental)
**Settings**:
- Mask: Inharmonic clusters
- Phaser: Rate 25Hz, Depth 80%
- Cutoff: 7kHz
- Unison: 5 voices
- Reverb: 40%

**Usage**: Special moments, Travis Scott vibes

### Square Lead (Chiptune/Retro)
**Settings**:
- Mask: Square wave (odd harmonics)
- Cutoff: 8kHz
- Resonance: 20%
- Unison: 1-2 voices (pure)
- Crush: 30%

**Usage**: Nostalgia, unique hooks

## Expression Techniques

### Velocity Mapping
Map velocity to:
1. **Filter cutoff**: Harder = brighter
2. **Drive**: Harder = more saturated
3. **Attack time**: Harder = slightly faster

**Result**: Dynamic, responsive leads

### Aftertouch/Modulation
If controller supports:
- Aftertouch → Vibrato depth
- Mod wheel → Phaser rate
- Breath → Filter cutoff

### Pitch Bend
Standard lead technique:
- Bend into notes (start flat, land on pitch)
- Expressive scoops
- Subtle drift

## Stereo Strategies

### Wide Leads
- Unison: 5-7 voices
- Stereo: 80-100%
- Detune: 30-45%
- Result: Massive stereo presence

### Focused Leads
- Unison: 2-3 voices
- Stereo: 50-70%
- Detune: 20-30%
- Result: Present but not overwhelming

### Mono-Safe Leads
- Unison: 3-4 voices
- Stereo: 60%
- Always check in mono
- Result: Works on all systems

## Filter Envelope Techniques

### The "Poke" (Attack Emphasis)
- Filter env amount: +50 to +70%
- Attack: 0-5ms
- Decay: 100-200ms
- Result: Sharp initial attack that cuts through

### The "Growl" (Inverted)
- Filter env amount: -40 to -60%
- Attack: 10-20ms
- Result: Dark attack, then opens up (vocal quality)

### The "Swell" (Slow Open)
- Filter env amount: +30%
- Attack: 300-800ms
- Result: Gradual brightness increase (pad-like but lead)

## Effects for Leads

### Essential: Maximus
- Mix: 25-35%
- Adds punch and presence
- Tames dynamics
- Makes lead "pop"

### Space: Reverb
- Mix: 20-30%
- Size: Medium
- Damping: Medium-high
- Creates depth without washing out

### Width: Chorus
- Mix: 15-25%
- Analog-style widening
- Use OR unison, not both heavily

### Character: Delay
- Mix: 20-30%
- Time: Dotted 8th or quarter
- Ping-pong for stereo interest

## Writing for Leads

### Register Choice
- **High (C5+)**: Energy, tension, hooks
- **Mid (C4-C5):** Main melodies, balance
- **Low-mid (C3-C4):** Warmth, support

### Articulation
- **Staccato**: Punchy, rhythmic
- **Legato**: Smooth, flowing
- **Mix**: Most interesting leads use both

### Phrasing
- Call and response
- Question and answer
- Build and release

## Troubleshooting

### "Drowned by 808s"
- Boost 2-5kHz range
- Add filter envelope poke
- Reduce 808 2-5kHz if needed

### "Too harsh"
- Reduce H12+ in mask
- Lower cutoff
- Reduce resonance
- Add chorus (softens)

### "Not cutting through"
- Check mix level (should be prominent)
- Add presence (3-5kHz)
- Maximus mix up
- Consider octave higher

### "Boring/static"
- Add modulation (phaser, LFO)
- Use velocity mapping
- Automate filter over time
- Add rhythmic delay

## Advanced Techniques

### Layering Leads
**Layer 1**: Bright screech (highs)
**Layer 2**: Warm foundation (mids)
**Blend**: 60/40 or 50/50
**Result**: Full spectrum lead

### Note Duplication
Play same melody in multiple octaves:
- C4 + C5 + C6
- Creates "super lead" effect
- Use different patches per octave

### Call and Response (Harmonized)
- Lead plays melody
- Second Harmless plays harmony (3rd/5th above)
- Creates "duet" effect

## Pro Tips

1. **Less is more**: Simple leads often work better than complex

2. **Reference constantly**: A/B with your favorite tracks

3. **Mono check**: Always verify in mono before finalizing

4. **Context matters**: Lead needs to work WITH drums and bass

5. **Space between notes**: Don't play continuous - let it breathe

6. **MIDI humanization**: 5-10% timing variation for natural feel

[SRC: IL-MAN - Harmless Oscillator, Filter, FX Sections]

```

---

## FILE: 03-Workflows\by-instrument\pad-and-texture-synthesis.md

```markdown
# Pad and Texture Synthesis

## Overview
Creating lush, evolving pads and atmospheric textures - the backdrop of emotional hip-hop production.

## The Pad's Purpose
Pads provide:
- **Harmonic context** (chords, key center)
- **Atmosphere** (space, depth)
- **Emotion** (mood, feeling)
- **Glue** (binds elements together)

## Core Pad Principles

### 1. Slow is Essential
**Attack time**: 500ms - 3 seconds
**Why**: Pads shouldn't compete with drums/vocals

**Release time**: 2-5 seconds
**Why**: Smooth transitions, no gaps

### 2. Wide is Expected
Pads should fill the stereo field:
- Unison: 5-9 voices
- Stereo: 90-100%
- Detune: 25-35%

### 3. Effects are Heavy
Pads can handle:
- Reverb: 40-60%
- Chorus: 30-50%
- Delay: 20-30%
- All together!

## Pad Types and Recipes

### Warm Analog Pad
**Vibe**: Vintage synthesizer, cozy, familiar

**Settings**:
- **Mask**: Triangle or gentle saw (few harmonics)
- **Filter**: Cutoff 3kHz, 12dB slope (warm)
- **Resonance**: 15%
- **Drive**: 10-15%
- **Envelope**: Attack 1s, Sustain 90%, Release 3s

**Unison**:
- Voices: 6
- Detune: 30%
- Stereo: 100%

**Effects**:
- Reverb: 45%
- Chorus: 35%
- Phaser: Rate 0.3, Depth 70%

### Cinematic Dark Pad
**Vibe**: Ominous, massive, trailer-like

**Settings**:
- **Mask**: Reduced highs (H1-H4 strong, H5+ minimal)
- **Filter**: Cutoff 2kHz, 24dB slope
- **Resonance**: 30%
- **Sub Osc**: -12, 40% (adds depth)
- **Envelope**: Attack 2s, Sustain 95%, Release 4s

**Unison**:
- Voices: 8
- Detune: 40%
- Stereo: 100%

**Effects**:
- Reverb: 60%
- Delay: 25% (long time)

### Ambient Texture Pad
**Vibe**: Ethereal, evolving, experimental

**Settings**:
- **Mask**: Random sparse harmonics
- **Filter**: Cutoff 2.5kHz, automation moving
- **Noise**: 15-20%
- **Envelope**: Attack 3s, Sustain 80%, Release 5s

**Phaser**:
- Rate: 0.1Hz (very slow)
- Depth: 90%
- Feedback: 40%

**Effects**:
- Reverb: 70%
- Crush: 25% (lo-fi texture)

### Vintage String Pad
**Vibe**: Orchestra, 80s synth, emotional

**Settings**:
- **Mask**: Sawtooth with boosted mids
- **Filter**: Cutoff 4kHz, resonance 35%
- **Envelope**: Attack 800ms, Sustain 90%, Release 2.5s

**Unison**:
- Voices: 7
- Detune: 25%
- Stereo: 90%

**Effects**:
- Chorus: 40%
- Reverb: 40%
- Slight phaser (1Hz)

### Vocal Formant Pad
**Vibe**: Human, breathy, voice-like

**Settings**:
- **Mask**: Formant regions (H4-H8, H10-H14 boosted)
- **Filter**: Cutoff 5kHz, resonance 40%
- **Drive**: 20%
- **Envelope**: Attack 600ms, Sustain 85%, Release 2s

**Unison**: 5 voices

**Effects**:
- Chorus: 30%
- Reverb: 35%

## Texture Types

### Evolving Texture
**Technique**: Automation
- Automate filter cutoff slowly (8 bars to open)
- Automate phaser depth
- Mask morphing (if possible)

**Result**: Constantly changing backdrop

### Rhythmic Texture
**Technique**: Tremolo effect
- Map LFO to volume
- Rate: Quarter or eighth note
- Creates pulsing atmosphere

### Glitch Texture
**Technique**: Noise + processing
- Noise: 50%+
- Crush: 60%
- Filter: Rapid automation
- Result: Digital artifacts

### Nature Texture
**Technique**: Wind/water simulation
- Noise: 30%
- Filter: Slow sine wave LFO on cutoff
- Reverb: 50%+
- Result: Organic ambience

## Chord Voicing for Pads

### Wide Voicings
- Spread octaves between hands
- Leave out middle notes
- Results in open, airy pads

### Close Voicings
- Notes within one octave
- Dense, intimate
- Good for tension

### Jazz Voicings
- 7ths, 9ths, 11ths
- Complex, sophisticated
- R&B/Soul appropriate

### Suspended Chords
- Sus2, Sus4
- Unresolved, floating
- Ambient/cinematic

## Layering Pads

### The 3-Layer Approach
**Layer 1**: Low pad (C2-C3)
- Sub osc enabled
- Warm, foundational
- 40% of blend

**Layer 2**: Mid pad (C3-C4)
- Chord body
- Main presence
- 40% of blend

**Layer 3**: High pad (C4-C5)
- Air, shimmer
- Sparse harmonics
- 20% of blend

### Frequency Separation
- EQ each layer to own range
- No frequency fighting
- Creates massive combined pad

## Pad Automation

### Filter Sweeps
- Slow opening (build-up)
- Slow closing (wind-down)
- Creates movement without playing

### Volume Swells
- Crescendo into chorus
- Decrescendo for verse
- Manual or automated

### Phaser Depth
- More depth = more movement
- Automate for evolving interest

### Effects Mix
- Reverb swells
- Delay feedback changes
- Chorus rate shifts

## Pad in the Mix

### Volume Level
- Pads sit *behind* everything
- 10-20dB below lead vocals
- Audible but not attention-grabbing

### Frequency Masking
- High-pass pads at 200-300Hz
- Let bass handle low end
- Creates clarity

### Stereo Placement
- Full stereo width
- Slight panning variations
- Creates immersive field

## Troubleshooting

### "Pad is too loud/obvious"
- Reduce volume
- Increase attack time
- High-pass more aggressively
- Reduce reverb mix

### "Pad is too thin"
- Add sub oscillator
- Use more unison voices
- Boost low harmonics in mask
- Layer with low pad

### "Pad fights with other elements"
- EQ carve: Create frequency pocket
- High-pass other elements instead
- Sidechain pad to kick (optional)
- Reduce pad sustain

### "Pad sounds static/boring"
- Add phaser
- Automate filter
- Change chord inversions
- Add rhythmic variation

## Pro Tips

1. **Less is more**: One great pad > three mediocre pads

2. **Space is key**: Let the pad breathe - don't play too many notes

3. **Chord inversions**: Change voicings for interest

4. **Reference film scores**: Best pad inspiration

5. **Save variations**: Create 3-4 versions of each pad (dry, wet, filtered, etc.)

6. **Bounce to audio**: Complex pads with automation - render for CPU relief

[SRC: IL-MAN - Harmless Envelopes, Unison, Effects Sections]

```

---

## FILE: 03-Workflows\by-instrument\plucked-string-emulation.md

```markdown
# Plucked String Emulation

## Overview
Master the art of physical modeling with Harmless's Pluck filter - from guitars to harps to unique plucked textures.

## The Physics of Pluck

### Real String Behavior
When a string is plucked:
1. **Initial strike**: All frequencies excited
2. **High frequency decay**: Treble loses energy first (faster vibration = more friction)
3. **Exponential curve**: Decay follows mathematical law: `Energy Loss ∝ frequency²`
4. **Final sustain**: Only fundamental remains

### Harmless Implementation
The Pluck filter simulates this physics:
- **Pluck Amount**: Controls overall decay speed
- **High frequencies**: Decay faster than lows
- **Formula**: Decay rate = f² × damping factor

## Guitar Emulation

### Acoustic Guitar
**Settings**:
- **Mask**: Sawtooth (H1-H12), natural decay
- **Pluck**: 45-55%
- **Filter**: Cutoff 5-7kHz, 12dB slope, 20% resonance
- **Drive**: 15-25% (wood warmth)

**Envelope**:
- Attack: 2ms
- Decay: 400ms
- Sustain: 0% ← Critical
- Release: 600ms

**Playing**: Strumming patterns, chord voicings

### Electric Guitar (Clean)
**Settings**:
- **Mask**: Sawtooth with boosted H3-H6
- **Pluck**: 35-45%
- **Filter**: Cutoff 6kHz, 24dB slope
- **Drive**: 20-30% (amp warmth)

**Effects**:
- Chorus: 25% (stereo width)
- Reverb: 20% (room)

### Electric Guitar (Muted)
**Settings**:
- **Mask**: Sparse (H1-H6 only)
- **Pluck**: 60-70%
- **Filter**: Cutoff 3kHz (dark)
- **Envelope**: Very short release (150ms)

**Technique**: Palm-mute style

## Harp Emulation

### Concert Harp
**Settings**:
- **Mask**: H1, H2, H4, H8, H16 (octave relationships)
- **Pluck**: 65-75%
- **Filter**: Cutoff 8kHz (bright)
- **Resonance**: 30%

**Envelope**:
- Attack: 1ms
- Decay: 600ms
- Sustain: 0%
- Release: 1s (let it ring)

**Playing**: Glissandos, arpeggios, single notes

### Celtic/Folk Harp
**Settings**:
- **Mask**: Slightly richer than concert
- **Pluck**: 55-65%
- **Filter**: Cutoff 7kHz
- **Drive**: 10%

**Character**: Warmer, more intimate

## Ethnic Plucked Instruments

### Kalimba (Thumb Piano)
**Settings**:
- **Mask**: H1, H2.4 (approx position), H4, H7
- **Pluck**: 70-80%
- **Filter**: Cutoff 8kHz
- **Envelope**: Tight (short decay, short release)

**Playing**: High register (C5-C7), rhythmic patterns

### Koto (Japanese)
**Settings**:
- **Mask**: Pentatonic-friendly harmonics
- **Pluck**: 50-60%
- **Filter**: Cutoff 6kHz
- **Envelope**: Medium-long

**Character**: Buzzy, resonant

### Sitar (Indian)
**Settings**:
- **Mask**: Rich, with sympathetic resonance simulation
- **Pluck**: 40-50%
- **Phaser**: Rate 1Hz, Depth 60% (simulates sympathetic strings)
- **Filter**: Cutoff 5kHz, resonance 40%

**Technique**: Pitch bends, drones

## Modern Plucked Sounds

### Synth Pluck
**Settings**:
- **Mask**: Square-ish (odd harmonics)
- **Pluck**: 40-50%
- **Filter**: Cutoff 6kHz, 24dB slope
- **Drive**: 10%
- **Unison**: 2-3 voices

**Character**: Electronic, defined

### Bell Pluck
**Settings**:
- **Mask**: H1, H4, H8, H16, H32
- **Pluck**: 60-70%
- **Filter**: Cutoff 9kHz
- **Resonance**: 35%

**Character**: Metallic, bell-like

### Music Box
**Settings**:
- **Mask**: Sparse, bell-like
- **Pluck**: 70-80%
- **Filter**: Cutoff 10kHz
- **Envelope**: Very tight
- **Crush**: 40% (vintage)

## Advanced Pluck Techniques

### Layered Pluck
**Instance 1**: High pluck (70%) - attack brightness
**Instance 2**: Low pluck (30%) - sustain body
**Blend**: 50/50
**Result**: Control over both aspects

### Velocity-Responsive Pluck
Map velocity to:
- **Filter cutoff**: Harder = brighter
- **Pluck amount**: Harder = less pluck (louder sustain)
- **Amp attack**: Standard

**Result**: Dynamic, responsive instrument

### Filter + Pluck Combination
- **Pluck**: 40%
- **Filter envelope**: +30%
- Result: Natural decay + articulation sweep

## Pluck in Hip-Hop

### Drake-Style Melancholic
- Hollow mask (sparse harmonics)
- Pluck: 60%
- Reverb: 35%
- Play: High register, emotional

### Trap Arpeggios
- Rich mask
- Pluck: 50%
- Delay: Dotted 8th
- Play: Fast patterns, C4-C6

### Future Plucks
- Inharmonic mask
- Pluck: 45%
- Phaser: Rate 2Hz
- Play: Single notes with space

### Garage/Uk Bass
- Square-ish mask
- Pluck: 40%
- Play: Rhythmic bass patterns
- Cutoff: 400-600Hz

## Troubleshooting Plucks

### "Doesn't sound plucked"
- Check sustain is at 0%
- Verify pluck is 40%+
- Ensure mask has harmonics to decay

### "Decay too fast"
- Reduce pluck amount
- Note: Higher notes naturally decay faster
- Lower cutoff extends perceived decay

### "Too bright/harsh"
- Reduce cutoff
- Reduce high harmonics in mask
- Add gentle filter slope (12dB)

### "Not enough attack"
- Reduce pluck (counterintuitive but works)
- Or add noise (5-10%)
- Shorten attack time

## Pro Tips

1. **Register matters**: Pluck is more audible on higher notes

2. **Staccato playing**: Let the pluck be the focus

3. **Reverb is your friend**: Plucks love space

4. **Combine techniques**: Pluck + filter env + velocity = ultimate control

5. **Save presets**: Good plucks are gold - save them

6. **Experiment with masks**: Different harmonics = different pluck characters

[SRC: IL-MAN - Harmless Pluck Filter, Physical Modeling]

```

---

## FILE: 03-Workflows\by-instrument\synthesizer-specific-guide.md

```markdown
# Synthesizer-Specific Guide

## Overview
This guide provides workflows for different synthesis approaches with Harmless, focusing on how to achieve specific synthesizer archetypes.

## Analog Subtractive Emulation

### Goal
Recreate vintage analog synth character (Minimoog, Prophet, Juno)

### Approach
While Harmless is additive, we can approximate subtractive behavior:

**Mask**: Full sawtooth or square
- Use classic waveform shapes
- Don't get too creative with mask

**Filter**: 24dB slope
- This is the "standard" analog slope
- 12dB for vintage warmth

**Drive**: 20-30%
- Analog warmth comes from saturation
- Essential for character

**Unison**: 2-3 voices
- Vintage synths had limited voices
- Mono or narrow stereo

**Chorus**: 30-40%
- Vintage synths used chorus for width
- Especially "Juno" style

### Key Differences
- No filter "scream" at high resonance (additive prevents this)
- Cleaner sound overall
- Need to add drive for warmth

## FM Synthesis Approximation

### Goal
Recreate FM-style harmonics and bell-like tones

### Approach
FM creates complex inharmonic relationships. Approximate in Harmless:

**Mask**: Inharmonic clusters
- H1, H3.5, H5.7, H8.2 positions (approximate)
- Or use ratios: 1:2, 1:3.5, 1:5.7

**Filter**: High cutoff
- Let the complex harmonics through
- Slope: 24dB

**Pluck**: 20-40%
- FM bells have natural decay
- Adds to authenticity

**Envelope**: Percussive
- Fast attack, medium decay
- Low sustain

### Tips
- Use math to calculate harmonic positions
- Experiment with "non-integer" harmonics
- Metallic textures result

## Wavetable/Vector Synthesis

### Goal
Evolving, morphing textures

### Approach
Wavetable morphs between waveforms. In Harmless:

**Technique**: Automation
- Automate harmonic mask over time
- Draw different shapes at different song positions
- Creates morphing effect

**Filter**: Slow sweeps
- Combine with mask morphing
- 36dB slope for dramatic changes

**Phaser**: 0.5-2Hz
- Adds continuous movement
- Compliments morphing

**Implementation**:
1. Create automation clip for mask
2. Draw different mask shapes at intervals
3. Play long notes to hear morph

### Tips
- Make gradual changes between masks
- Or abrupt changes for glitch effect
- Combine with filter for full effect

## Physical Modeling (Pluck/Bow)

### Goal
Realistic string, wind, and percussion sounds

### Approach
Harmless's Pluck filter is physical modeling for strings:

**Strings (Guitar, Harp)**:
- Mask: Moderate sawtooth
- Pluck: 40-60%
- Amp sustain: 0%
- Envelope: Medium decay

**Wind (Flute, Clarinet)**:
- Mask: Triangle or odd harmonics only
- Pluck: 0%
- Slow attack: 100-300ms
- Filter: Gentle (12dB)

**Percussion (Drums)**:
- Mask: Noise + short tone
- Pluck: 0%
- Very short envelope
- White noise for snare character

### Extended Techniques
- **Bow simulation**: Amp attack 200ms, slow filter sweep
- **Mute**: High pluck, short release
- **Harmonics**: Sparse mask (H1, H2, H4 only)

## Additive-Only Textures

### Goal
Sounds impossible in subtractive synthesis

### Approach
Exploit Harmless's additive strengths:

**Sparse Inharmonic**:
- H1, H5, H12, H27 only
- Gaps create unique timbres
- Metallic, bell-like

**Formant/Vocal**:
- Boost H3-H7 (vowel formant region)
- Create vocal-like resonances
- Filter at 4-6kHz

**Reverse Harmonics**:
- Low harmonics quieter than highs
- Unnatural, sci-fi
- Cutoff opens from low

**Stochastic/Random**:
- Random harmonic levels
- Ever-changing textures
- Phaser adds movement

### Why It Works
Subtractive synths can't:
- Control individual harmonics
- Create gaps in spectrum
- Do true inharmonic tones
- Use extreme resonance safely

## Hybrid Approaches

### Analog + Additive
Start with analog-style mask, then:
- Add unusual harmonics for character
- Use extreme filter settings
- Combine drive with clean additive

### FM + Subtractive
FM-style mask through subtractive filter:
- Complex mask
- 48dB slope
- Resonance emphasis

### Physical + Electronic
Realistic pluck with electronic elements:
- High pluck setting
- Distortion effect
- Heavy reverb (not realistic, but cool)

## Choosing Your Approach

### Use Analog Emulation When:
- You want familiar, warm sounds
- Recreating classic patches
- Safe, tested results

### Use FM Approximation When:
- Need bells, metals, complex tones
- Digital character wanted
- Mathematical precision

### Use Wavetable When:
- Evolving pads needed
- Sound design experiments
- Cinematic textures

### Use Physical When:
- Realistic instruments
- Organic textures
- Acoustic plucks/bows

### Use Additive-Only When:
- Unique sounds needed
- Exploring Harmless's power
- Creating "impossible" tones

## Pro Tips

1. **Combine approaches**: Analog foundation + additive flourishes

2. **Reference presets**: Study factory presets for each style

3. **Start simple**: Master one approach before combining

4. **Documentation**: Save your hybrid discoveries as presets

5. **CPU considerations**: Complex masks cost more than simple ones

[SRC: IL-MAN - Harmless Architecture Documentation]

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log: Harmless

## Source ID: [SRC: IL-MAN]
- **Source:** Image-Line Official Manual - Harmless.
- **Key Info:** Additive synthesis engine architecture, Harmonic Masking logic, specialized Pluck filter behavior, and built-in Maximus compressor integration.

## Source ID: [SRC: REPUTABLE]
- **Source:** "The Physics of Additive Synthesis."
- **Key Info:** How partial-stacking avoids phase shift in steep filtering, using formant filters for vowel simulation, and the relationship between harmonic density and perceived volume.

## Genre Style Board: Harmless

| Vibe | Key Move | Use Case |
| :--- | :--- | :--- |
| **Upbeat** | Max Pluck + Brick Slope | Trap Plucks |
| **Spacey** | Frequency Phaser + Width | Ethereal Pads |
| **Melodic** | Formant Filter + LFO | Talking Leads |
| **Vibey** | Low-Order Unison + Sub | Lo-Fi Keys |
| **Moody** | Masking High Partials | Submerged Subs |
```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Harmless (Hip-Hop/R&B)

## Vibe 1: The "Modern Melodic" Pluck
*   **Sound:** Rubbery, clean, percussive.
*   **Key Move:** Pluck knob (70%) + Filter Dampening + Low Unison.

## Vibe 2: The "R&B Dream" Pad
*   **Sound:** Lush, expansive, expensive high-end.
*   **Key Move:** 8-voice Unison + Chorus + Reverb + slow LFO on Cutoff.

## Vibe 3: The "Deep Trap" Sub
*   **Sound:** Solid, unwavering, heavy.
*   **Key Move:** Sine Timbre + Harmonic Mask (Partials 1-3 only) + Compression.

## Vibe 4: The "Space-Rodeo" Lead (Travis Scott style)
*   **Sound:** Swirling, pitch-shifting, metallic.
*   **Key Move:** Frequency Phaser (Automated) + Saw wave + High Unison Detune.

## Vibe 5: The "Soulful" Electric Piano
*   **Sound:** Warm, vibrating, nostalgic.
*   **Key Move:** Pluck Dampening + Sine/Square mix + Soft Chorus.

```

---

