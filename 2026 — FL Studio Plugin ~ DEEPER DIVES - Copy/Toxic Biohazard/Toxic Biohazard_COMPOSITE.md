# Toxic Biohazard - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Toxic Biohazard - Hybrid FM Synthesizer

`\`\`
████████╗ ██████╗ ██╗  ██╗██╗ ██████╗     ██████╗ ██╗ ██████╗ ██╗  ██╗ █████╗ ███████╗ █████╗ ██████╗ ██████╗ 
╚══██╔══╝██╔═══██╗╚██╗██╔╝██║██╔════╝     ██╔══██╗██║██╔═══██╗██║  ██║██╔══██╗╚══███╔╝██╔══██╗██╔══██╗██╔══██╗
   ██║   ██║   ██║ ╚███╔╝ ██║██║          ██████╔╝██║██║   ██║███████║███████║  ███╔╝ ███████║██████╔╝██║  ██║
   ██║   ██║   ██║ ██╔██╗ ██║██║          ██╔══██╗██║██║   ██║██╔══██║██╔══██║ ███╔╝  ██╔══██║██╔══██╗██║  ██║
   ██║   ╚██████╔╝██╔╝ ██╗██║╚██████╗     ██████╔╝██║╚██████╔╝██║  ██║██║  ██║███████╗██║  ██║██║  ██║██████╔╝
   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝     ╚═════╝ ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ 
`\`\`

**Plugin Type:** FM / Subtractive Hybrid Synthesizer
**Category:** Generator / Modern Analog / FM
**Official Manual:** [Image-Line Toxic Biohazard Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Toxic%20Biohazard.htm)

---

## 🎯 What is Toxic Biohazard?

Toxic Biohazard is a powerful hybrid synthesizer that blends **Frequency Modulation (FM)** with **Subtractive** synthesis. It features 6 alias-free oscillators, each with its own ADSR envelope, a warm analog-modeled filter, and a massive modulation matrix. It is designed for high-quality sound with low CPU usage, excelling at sharp digital leads, evolving FM textures, and deep analog-style basses.

**Key Capabilities:**
- **6 FM Oscillators:** High-resolution, anti-aliased oscillators for clean FM.
- **FM Matrix:** Easy-to-use grid for routing operators to each other.
- **Analog-Modeled Filter:** Warm LP/BP/HP filter with its own dedicated envelope.
- **64-Step Sequencer:** Built-in pattern generator with polyphonic support.
- **Multi-Voice Unison:** 8 voices with stereo spread for thick unison sounds.
- **Integrated FX Rack:** Multi-tap Delay, Chorus, Phaser, Reverb, EQ, and Distortion.
- **Spectrum Analysis:** Load custom waveforms from WAV/AIFF files.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **toxic-matrix-logic.md** (Simplified FM grid)
3. Create **parameter-cheat-sheet.md**
4. Load a preset and look at the "Matrix" tab to see which oscillators are modulating others.

### For FM Sound Designers:
1. Study **fm-modulation-basics-in-toxic.md**
2. Review **oscillator-synchronization.md**
3. Learn **creating-custom-waveforms.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [x] **parameter-cheat-sheet.md**
- [x] **toxic-matrix-logic.md**

#### 02-Data/parameters/
- [x] **toxic-bio-specs.json**

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [x] **aggressive-fm-lead.md**
- [x] **evolving-atmospheric-pad.md**
- [x] **classic-303-acid-line.md** (Self-Correction: Integrated into aggressive docs)
- [x] **goal-oriented-workflows.md**

#### 03-Workflows/by-context/
- [x] **industrial-industrial-bass.md**
- [x] **ambient-soundscape-design.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [x] **custom-wav-import-guide.md**

## 🔬 Research Framework

### Phase 1: The Matrix (Week 1)
**Goal:** FM Understanding

**Tasks:**
1. Put Osc 1 through the OUT
2. Increase Modulation from Osc 2 into Osc 1
3. Observe how the harmonic series changes
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- Can I feedback an oscillator into itself?
- What are the "Physical" envelopes?

---

## 📊 Plugin Specifications to Document

### Engine
- Aliasing characteristics (Filter/Osc)
- CPU Performance per voice

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is the sound so "clean"? (Anti-aliased oscillators).
2. How to add more grit? (Use the built-in Distortion module or high resonance).

---

## 🔗 Cross-Reference with Other Plugins

Toxic Biohazard is often used with:
- **Sytrus** (The advanced sibling)
- **PoiZone** (Subtractive counterpart)

---

## 📦 File Structure Summary

`\`\`
Toxic Biohazard/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── toxic-matrix-logic.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── toxic-bio-specs.json
│   ├── presets/
│   │   ├── INDEX.md
│   │   ├── hip-hop-trap-bass.json
│   │   ├── rnb-neo-soul-lead.json
│   │   ├── hip-hop-boom-bap-bass.json
│   │   └── rnb-smooth-pad.json
│   └── rules/
│       └── fm-gain-staging-rules.md
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── aggressive-fm-lead.md
│   │   ├── evolving-atmospheric-pad.md
│   │   └── goal-oriented-workflows.md
│   ├── by-context/
│   │   ├── industrial-industrial-bass.md
│   │   └── ambient-soundscape-design.md
│   └── by-instrument/
│       └── instrument-specific-workflows.md
│
└── 04-Reference/
    └── custom-wav-import-guide.md
`\`\`

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

```

---

## FILE: 01-Learning\Concepts\fm-synthesis-concepts.md

```markdown
# Toxic Biohazard - FM Synthesis Concepts

## Overview
Toxic Biohazard is an FM (Frequency Modulation) synthesizer that uses multiple oscillators to create complex, evolving sounds through modulation. Unlike subtractive synthesis, FM synthesis generates harmonic complexity by modulating the frequency of one oscillator with another.

## Core FM Synthesis Principles

### Operators and Algorithms
- **Operators**: Individual oscillators that can act as carriers (audible) or modulators (modulating other operators)
- **Algorithms**: Pre-configured routing schemes that determine how operators interact
- **Carrier**: Operator whose output is audible
- **Modulator**: Operator that modulates another operator's frequency

### FM Parameters
- **Frequency Ratio**: Relationship between operator frequency and note pitch
- **Fixed Frequency**: Operator frequency independent of note pitch
- **Modulation Index**: Depth of frequency modulation
- **Feedback**: Output fed back into input for self-modulation

## Operator Types

### Carrier Operators
- Generate audible output
- Can be modulated by other operators
- Typically Operators A, C, E, G

### Modulator Operators
- Modulate carrier frequencies
- Not directly audible
- Typically Operators B, D, F, H

## Algorithm Structure

### Algorithm Categories
- **Simple**: 1-2 operators for basic FM sounds
- **Complex**: 4-8 operators for rich, evolving textures
- **Parallel**: Multiple carriers for layered sounds
- **Series**: Modulators chained for complex harmonic content

### Common Algorithm Types
- **Stack**: Modulators in series
- **Branching**: Single modulator affecting multiple carriers
- **Parallel Carriers**: Multiple independent carriers
- **Feedback Loops**: Self-modulating structures

## Sound Design Applications

### Bass Design
- Use fixed frequency operators for sub-bass
- Modulate with audio-rate signals for grit
- Apply feedback for harmonic richness

### Lead Design
- Use ratio-based operators for pitch tracking
- Apply moderate modulation for brightness
- Use algorithms with multiple carriers for width

### Pad Design
- Use slow envelopes and LFOs
- Apply deep modulation for movement
- Use parallel carriers for layering

### Percussive Sounds
- Use fixed frequencies for tonal percussion
- Apply fast envelopes for transient response
- Use feedback for metallic character

## Modulation Techniques

### Operator Modulation
- Modulate carrier frequency with modulator
- Adjust modulation index for brightness control
- Use multiple modulators for complex timbres

### Feedback Modulation
- Feed operator output back into itself
- Control feedback amount for harmonic content
- Use different feedback modes for character

### Envelope Modulation
- Use envelopes to control modulation depth
- Create evolving timbres over time
- Apply velocity modulation for expressiveness

## Advanced Concepts

### Harmonic Series Control
- Ratio settings determine harmonic content
- Integer ratios create harmonic spectra
- Non-integer ratios create inharmonic spectra

### Formant Synthesis
- Use multiple operators to create formant peaks
- Control formant movement with envelopes
- Create vocal-like characteristics

### Waveform Selection
- Different waveforms affect modulation character
- Sine waves for clean FM
- Other waveforms for additional harmonics

### Velocity and Aftertouch
- Map velocity to modulation index
- Use aftertouch for real-time timbral control
- Create expressive performances

## Troubleshooting Common Issues

### Harsh, Unpleasant Sounds
- Reduce modulation index
- Use lower feedback amounts
- Try different algorithms

### Thin, Weak Sounds
- Increase modulation depth
- Use more operators
- Add parallel carriers

### Muddy, Indistinct Sounds
- Reduce number of active operators
- Simplify algorithm structure
- Use EQ to clarify frequency content

### Unstable Tuning
- Check ratio settings
- Use fixed frequencies for stability
- Apply pitch correction if needed

## Best Practices

### Gain Staging
- FM synthesis can produce high levels
- Use output level controls carefully
- Apply limiting if necessary

### CPU Efficiency
- Use fewer operators when possible
- Disable unused operators
- Use simpler algorithms for complex sounds

### Sound Design Workflow
- Start with simple algorithms
- Add complexity gradually
- Use reference sounds for comparison
- Test in context with other instruments

## Integration with Hip-Hop Production

### Trap Bass
- Use fixed frequency sub-bass carriers
- Apply deep modulation for grit
- Add distortion for character

### Melodic Leads
- Use ratio-based operators for pitch tracking
- Apply moderate modulation for brightness
- Use portamento for glide effects

### Atmospheric Pads
- Use slow envelopes and LFOs
- Apply deep modulation for movement
- Layer multiple instances for thickness

### Sound Effects
- Use extreme modulation for unique textures
- Apply randomization for variation
- Use in combination with effects plugins

## Comparison with Other Synthesis Methods

### vs Subtractive Synthesis
- FM creates complexity through modulation
- Subtractive filters complexity from waveforms
- FM offers more harmonic control

### vs Wavetable Synthesis
- FM uses mathematical relationships
- Wavetable uses pre-recorded waveforms
- FM offers more real-time modulation

### vs Physical Modeling
- FM approximates physical systems
- Physical modeling simulates real instruments
- FM offers more abstract sound design

## Creative Applications

### Experimental Sound Design
- Push modulation to extremes
- Use unconventional algorithms
- Combine with effects for unique textures

### Genre-Specific Sounds
- Adapt FM parameters for different styles
- Create signature sounds for specific genres
- Use presets as starting points for customization

### Sound Design for Media
- Create sci-fi and futuristic sounds
- Design sound effects and transitions
- Develop unique musical elements

## Performance Considerations

### Real-Time Control
- Map modulation to MIDI controllers
- Use automation for evolving sounds
- Create performance patches for live playing

### CPU Usage
- Monitor plugin load in complex projects
- Use freeze/flatten when appropriate
- Optimize algorithm complexity for performance

## Conclusion
Toxic Biohazard's FM synthesis engine offers unparalleled control over harmonic content and timbral complexity. Understanding the underlying principles of FM synthesis enables producers to create unique, professional-quality sounds that stand out in modern hip-hop and electronic music production.
```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Toxic Biohazard Parameter Cheat Sheet

## Synthesis
- **6 FM Oscillators:** Alias-free operators with dedicated ADSR.
- **FM Matrix:** Vertical columns are Carriers, horizontal rows are Modulators.
- **Filter:** Analog-modeled multi-mode (LP, BP, HP). Includes Moog/303 style squelch.

## Performance
- **Smart Sequencer:** 64-step polyphonic pattern generator.
- **Unison:** 8 voices with stereo spread.
- **FX Rack:** Delay, Chorus, Phaser, Reverb, EQ, Distortion.

## Key Controls
- **Drive:** Adds harmonic grit to the filter section.
- **Amt:** Global modulation amount for the matrix.
- **Spectrum Analysis:** Imports WAV files to create custom oscillator shapes.

```

---

## FILE: 01-Learning\Quick-Reference\toxic-matrix-logic.md

```markdown
# Toxic Biohazard FM Matrix Logic

## Understanding the Grid
The FM Matrix is where the magic (modulation) happens.

- **Rows:** Represent the signal source (Modulator).
- **Columns:** Represent the target (Carrier).

## Routing Flow
1. **Vertical Out:** The bottom row determines which oscillators actually send sound to the filter/output.
2. **Intersection Knobs:** Turning up a knob at Row 2 / Col 1 means Oscillator 2 is now modulating the frequency of Oscillator 1.

## Feedback
Toxic allows you to modulate an oscillator with itself (e.g., Row 1 / Col 1). This creates saw-like or noisy characteristics depending on the depth.

## Ease of Use
Compared to Sytrus, Toxic Biohazard's matrix is fixed and simplified, making it much faster for designing standard FM bells, growls, and digital leads.

```

---

## FILE: 02-Data\parameters\toxic-bio-specs.json

```json
{
  "plugin_name": "Toxic Biohazard",
  "category": "Hybrid FM/Subtractive",
  "oscillators": 6,
  "unison_voices": 8,
  "sequencer_steps": 64,
  "filter_modes": ["LP", "BP", "HP"],
  "oscillator_tech": "Spectral Synthesis"
}

```

---

## FILE: 02-Data\presets\INDEX.md

```markdown
# Toxic Biohazard Complete Presets INDEX

## Genre Presets (7 files)
| File | Name | Genre | Subgenre | Application | Character |
|------|------|-------|----------|-------------|-----------|
| `hip-hop-trap-bass.json` | Toxic Biohazard Hip-Hop Trap Bass | hip-hop/rap | trap | aggressive bass lines | Complex harmonic content |
| `rnb-neo-soul-lead.json` | Toxic Biohazard R&B Neo-Soul Lead | R&B | neo-soul | smooth lead sounds | Warm, expressive character |
| `hip-hop-boom-bap-bass.json` | Toxic Biohazard Hip-Hop Boom Bap Bass | hip-hop/rap | boom bap | warm bass lines | Vintage analog feel |
| `rnb-smooth-pad.json` | Toxic Biohazard R&B Smooth Pad | R&B | smooth | ethereal pad sounds | Evolving harmonic content |
| `psychedelic-pad.json` | Toxic Biohazard Psychedelic Pad | experimental | psychedelic | evolving pad sounds | Ethereal, evolving character |
| `funky-groove-bass.json` | Toxic Biohazard Funky Groove Bass | hip-hop/rap | funky/groove | funky bass lines | Punchy, rhythmic character |
| `moody-dark-trap-bass.json` | Toxic Biohazard Moody Dark Trap Bass | hip-hop/rap | moody/dark trap | dark trap bass lines | Metallic harmonic content |

## Quick Reference
| Goal | Preset | Genre | Application | File |
|------|--------|-------|-------------|------|
| Trap bass | Toxic Biohazard Hip-Hop Trap Bass | hip-hop/rap | Aggressive bass lines | `hip-hop-trap-bass.json` |
| Neo-soul lead | Toxic Biohazard R&B Neo-Soul Lead | R&B | Smooth lead sounds | `rnb-neo-soul-lead.json` |
| Boom bap bass | Toxic Biohazard Hip-Hop Boom Bap Bass | hip-hop/rap | Warm bass lines | `hip-hop-boom-bap-bass.json` |
| Smooth pad | Toxic Biohazard R&B Smooth Pad | R&B | Ethereal pad sounds | `rnb-smooth-pad.json` |

## Related Documentation
- [FM Synthesis Fundamentals](../04-Reference/fm-synthesis-fundamentals.md)
- [FM Matrix Logic](../01-Learning/Quick-Reference/toxic-matrix-logic.md)
- [Hip-Hop Sub-Genre Workflows](../03-Workflows/by-goal/hop-hop-subgenre-fm.md)
- [R&B Sub-Genre Workflows](../03-Workflows/by-goal/rnb-subgenre-toxic.md)
- [Goal-Oriented Workflows](../03-Workflows/by-goal/goal-oriented-workflows.md)
```

---

## FILE: 02-Data\presets\fm-synthesis-archetypes.md

```markdown
# Data: Toxic Biohazard FM Archetypes
**Goal:** Understanding how FM (Frequency Modulation) synthesis parameters translate into "Urban" sound archetypes like Bell-Pads and Aggressive Bass.

## 1. The "Trap Bell" Formula
*Essential for: Moody Trap, Dark R&B.*
- **Oscillator 1 & 2:** Use **Sine Waves**.
- **The Modulation Matrix:** Route Osc 1 into Osc 2 at a low amount (~15%).
- **The Ratio:** Set Osc 1 to a high Ratio (e.g., 4.00 or 8.00). This creates the "metallic" overtone of a bell.
- **Envelope:** Very short Attack, medium Decay, zero Sustain.
- **Result:** A clean, cold bell that "cuts" through heavy 808s.

## 2. The "Aggressive FM Bass"
*Essential for: Modern Trap, G-Funk G-Bass.*
- **Oscillator 1:** Sawtooth.
- **Oscillator 2:** Sine (The Modulator).
- **The Ratio:** Keep Osc 1 at 1.00 and Osc 2 at 0.50 (one octave down).
- **Modulation Amount:** Crank Osc 2 into Osc 1 to ~60%.
- **Filter:** Use the **Low Pass** with high Resonance.
- **Result:** A "growling" bass that sounds more organic and "angry" than a standard subtractive synth.

## 3. The "Moody" LFO Pad
- **Oscillator 1:** Sine.
- **LFO 1:** Assign to the **Pitch** or **Filter Cutoff**.
- **LFO Waveform:** Random (S&H) or Sine.
- **Speed:** Set to **1/4 beat** synced to project tempo.
- **Result:** A pad that "wobbles" or "drifts" in and out of tune, perfect for Lo-fi or Trap Soul backgrounds.

## 4. FM Matrix Quick Cheat Sheet
| Resulting Texture | Ratio Relationship | Mod Amount |
| :--- | :--- | :--- |
| **Glassy/Cold** | High Ratios (8, 12, 16) | Low (5-15%) |
| **Gritty/Aggressive** | Low Ratios (0.5, 1, 2) | High (50%+) |
| **Vocal/Formant** | Odd Ratios (3, 5, 7) | Medium (30%) |
| **Harmonic Warmth** | Ratio 1.00 (Same) | Very Low (2%) |

```

---

## FILE: 02-Data\presets\funky-groove-bass.json

```json
{
  "preset_name": "Toxic Biohazard Funky Groove Bass",
  "plugin": "Toxic Biohazard",
  "oscillators": {
    "1": {"waveform": "saw", "ratio": 1.0, "volume": 100, "pan": 0},
    "2": {"waveform": "square", "ratio": 1.5, "volume": 70, "pan": 0},
    "3": {"waveform": "sine", "ratio": 0.5, "volume": 40, "pan": 0},
    "4": {"waveform": "saw", "ratio": 2.0, "volume": 65, "pan": 0},
    "5": {"waveform": "square", "ratio": 3.0, "volume": 50, "pan": 0},
    "6": {"waveform": "sine", "ratio": 1.0, "volume": 45, "pan": 0}
  },
  "matrix_modulation": {
    "osc2_to_osc1": 45,
    "osc3_to_osc1": 25,
    "osc5_to_osc4": 30
  },
  "filter": {
    "type": "lp",
    "cutoff": 4500,
    "resonance": 35,
    "envelope_amount": 45
  },
  "envelopes": {
    "amp_attack": 3,
    "amp_decay": 150,
    "amp_sustain": 75,
    "amp_release": 250,
    "filter_attack": 5,
    "filter_decay": 200,
    "filter_sustain": 70,
    "filter_release": 300
  },
  "lfo": {
    "rate": 1.5,
    "amount": 22,
    "destination": "pitch"
  },
  "effects": {
    "distortion": {"amount": 18, "type": "tanh"},
    "delay": {"feedback": 35, "time": 0.25, "mix": 20},
    "reverb": {"size": 60, "damping": 50, "mix": 25}
  },
  "unison": {
    "voices": 2,
    "detune": 10,
    "spread": 35
  },
  "genre": "hip-hop/rap",
  "subgenre": "funky/groove",
  "application": "funky bass lines",
  "description": "Punchy, rhythmic character for funky grooves",
  "characteristics": [
    "Adds transient snap",
    "Enhances rhythmic elements",
    "Creates groove emphasis",
    "Perfect for old-school vibes"
  ],
  "recommended_for": [
    "Funk-influenced hip-hop",
    "Groove-heavy tracks",
    "Rhythm-focused productions"
  ],
  "tips": [
    "Great for bass guitar enhancement",
    "Perfect for snare and clap",
    "Try on drum bus for cohesion"
  ]
}
```

---

## FILE: 02-Data\presets\hip-hop-boom-bap-bass.json

```json
{
  "preset_name": "Toxic Biohazard Hip-Hop Boom Bap Bass",
  "plugin": "Toxic Biohazard",
  "oscillators": {
    "1": {"waveform": "sine", "ratio": 1.0, "volume": 100, "pan": 0},
    "2": {"waveform": "triangle", "ratio": 0.5, "volume": 70, "pan": 0},
    "3": {"waveform": "sine", "ratio": 1.5, "volume": 50, "pan": 0},
    "4": {"waveform": "triangle", "ratio": 2.0, "volume": 60, "pan": 0},
    "5": {"waveform": "sine", "ratio": 3.0, "volume": 40, "pan": 0},
    "6": {"waveform": "triangle", "ratio": 0.25, "volume": 30, "pan": 0}
  },
  "matrix_modulation": {
    "osc2_to_osc1": 25,
    "osc3_to_osc1": 15,
    "osc5_to_osc4": 20
  },
  "filter": {
    "type": "lp",
    "cutoff": 2800,
    "resonance": 20,
    "envelope_amount": 15
  },
  "envelopes": {
    "amp_attack": 20,
    "amp_decay": 500,
    "amp_sustain": 40,
    "amp_release": 700,
    "filter_attack": 30,
    "filter_decay": 600,
    "filter_sustain": 35,
    "filter_release": 800
  },
  "lfo": {
    "rate": 0.4,
    "amount": 8,
    "destination": "pitch"
  },
  "effects": {
    "distortion": {"amount": 5, "type": "soft"},
    "delay": {"feedback": 15, "time": 0.33, "mix": 20},
    "reverb": {"size": 65, "damping": 55, "mix": 30}
  },
  "unison": {
    "voices": 1,
    "detune": 5,
    "spread": 15
  },
  "genre": "hip-hop/rap",
  "subgenre": "boom bap",
  "application": "warm bass lines",
  "description": "Warm, vintage-style bass for boom bap hip-hop",
  "characteristics": [
    "Warm, musical character",
    "Vintage analog feel",
    "Solid low-end foundation",
    "Perfect for sample-based beats"
  ],
  "recommended_for": [
    "Boom bap productions",
    "Vintage-style hip-hop",
    "Jazz-influenced tracks"
  ],
  "tips": [
    "Use with vinyl-style processing",
    "Works well with swung rhythms",
    "Pair with classic drum samples"
  ]
}
```

---

## FILE: 02-Data\presets\hip-hop-trap-bass.json

```json
{
  "preset_name": "Toxic Biohazard Hip-Hop Trap Bass",
  "plugin": "Toxic Biohazard",
  "oscillators": {
    "1": {"waveform": "saw", "ratio": 1.0, "volume": 100, "pan": 0},
    "2": {"waveform": "square", "ratio": 0.5, "volume": 80, "pan": 0},
    "3": {"waveform": "sine", "ratio": 1.5, "volume": 60, "pan": 0},
    "4": {"waveform": "saw", "ratio": 2.0, "volume": 70, "pan": 0},
    "5": {"waveform": "square", "ratio": 3.0, "volume": 50, "pan": 0},
    "6": {"waveform": "sine", "ratio": 0.25, "volume": 40, "pan": 0}
  },
  "matrix_modulation": {
    "osc2_to_osc1": 65,
    "osc3_to_osc1": 30,
    "osc5_to_osc4": 40
  },
  "filter": {
    "type": "lp",
    "cutoff": 3000,
    "resonance": 55,
    "envelope_amount": 40
  },
  "envelopes": {
    "amp_attack": 5,
    "amp_decay": 150,
    "amp_sustain": 70,
    "amp_release": 200,
    "filter_attack": 10,
    "filter_decay": 200,
    "filter_sustain": 60,
    "filter_release": 300
  },
  "lfo": {
    "rate": 1.2,
    "amount": 18,
    "destination": "pitch"
  },
  "effects": {
    "distortion": {"amount": 25, "type": "tanh"},
    "delay": {"feedback": 30, "time": 0.25, "mix": 15},
    "reverb": {"size": 60, "damping": 50, "mix": 20}
  },
  "unison": {
    "voices": 4,
    "detune": 15,
    "spread": 40
  },
  "genre": "hip-hop/rap",
  "subgenre": "trap",
  "application": "aggressive bass lines",
  "description": "Aggressive, harmonically rich bass for trap music",
  "characteristics": [
    "Complex harmonic content",
    "Aggressive character",
    "Strong low-end foundation",
    "Suitable for 808-style bass"
  ],
  "recommended_for": [
    "Trap productions",
    "Aggressive hip-hop tracks",
    "Modern bass lines"
  ],
  "tips": [
    "Use with sidechain compression",
    "Works well with heavy quantization",
    "Pair with dark minor scales"
  ]
}
```

---

## FILE: 02-Data\presets\moody-dark-trap-bass.json

```json
{
  "preset_name": "Toxic Biohazard Moody Dark Trap Bass",
  "plugin": "Toxic Biohazard",
  "oscillators": {
    "1": {"waveform": "sine", "ratio": 4.0, "volume": 30, "pan": 0},
    "2": {"waveform": "sine", "ratio": 8.0, "volume": 25, "pan": 0},
    "3": {"waveform": "sine", "ratio": 12.0, "volume": 20, "pan": 0},
    "4": {"waveform": "saw", "ratio": 1.0, "volume": 70, "pan": 0},
    "5": {"waveform": "sine", "ratio": 1.5, "volume": 60, "pan": 0},
    "6": {"waveform": "saw", "ratio": 1.0, "volume": 80, "pan": 0}
  },
  "matrix_modulation": {
    "osc2_to_osc1": 15,
    "osc3_to_osc1": 10,
    "osc5_to_osc4": 20
  },
  "filter": {
    "type": "lp",
    "cutoff": 6000,
    "resonance": 20,
    "envelope_amount": 30
  },
  "envelopes": {
    "amp_attack": 5,
    "amp_decay": 400,
    "amp_sustain": 0,
    "amp_release": 200,
    "filter_attack": 10,
    "filter_decay": 500,
    "filter_sustain": 0,
    "filter_release": 250
  },
  "lfo": {
    "rate": 0.2,
    "amount": 10,
    "destination": "pitch"
  },
  "effects": {
    "distortion": {"amount": 0, "type": "none"},
    "delay": {"feedback": 0, "time": 0.5, "mix": 0},
    "reverb": {"size": 0, "damping": 60, "mix": 0}
  },
  "unison": {
    "voices": 1,
    "detune": 0,
    "spread": 0
  },
  "genre": "hip-hop/rap",
  "subgenre": "moody/dark trap",
  "application": "dark trap bass lines",
  "description": "Metallic sound from high ratios for haunting melodies",
  "characteristics": [
    "Metallic harmonic content",
    "Dark, atmospheric character",
    "Short envelope for pluck",
    "Perfect for haunting melodies"
  ],
  "recommended_for": [
    "Dark trap productions",
    "Atmospheric hip-hop tracks",
    "Moody bass lines"
  ],
  "tips": [
    "Use with sidechain compression",
    "Works well with minor scales",
    "Pair with dark atmospheric samples"
  ]
}
```

---

## FILE: 02-Data\presets\psychedelic-pad.json

```json
{
  "preset_name": "Toxic Biohazard Psychedelic Pad",
  "plugin": "Toxic Biohazard",
  "oscillators": {
    "1": {"waveform": "sine", "ratio": 1.0, "volume": 100, "pan": 0},
    "2": {"waveform": "sine", "ratio": 2.0, "volume": 60, "pan": 0},
    "3": {"waveform": "triangle", "ratio": 3.0, "volume": 40, "pan": 0},
    "4": {"waveform": "sine", "ratio": 1.0, "volume": 80, "pan": 0},
    "5": {"waveform": "triangle", "ratio": 4.0, "volume": 30, "pan": 0},
    "6": {"waveform": "sine", "ratio": 0.5, "volume": 50, "pan": 0}
  },
  "matrix_modulation": {
    "osc2_to_osc1": 30,
    "osc3_to_osc1": 20,
    "osc5_to_osc4": 25,
    "osc6_to_osc1": 15
  },
  "filter": {
    "type": "lp",
    "cutoff": 3500,
    "resonance": 18,
    "envelope_amount": 25
  },
  "envelopes": {
    "amp_attack": 400,
    "amp_decay": 600,
    "amp_sustain": 85,
    "amp_release": 1000,
    "filter_attack": 500,
    "filter_decay": 700,
    "filter_sustain": 80,
    "filter_release": 1200
  },
  "lfo": {
    "rate": 0.3,
    "amount": 20,
    "destination": "oscillator_volume"
  },
  "effects": {
    "distortion": {"amount": 3, "type": "soft"},
    "delay": {"feedback": 25, "time": 0.75, "mix": 30},
    "reverb": {"size": 85, "damping": 40, "mix": 45}
  },
  "unison": {
    "voices": 3,
    "detune": 12,
    "spread": 50
  },
  "genre": "experimental",
  "subgenre": "psychedelic",
  "application": "evolving pad sounds",
  "description": "Ethereal, evolving pad for psychedelic music",
  "characteristics": [
    "Evolving harmonic content",
    "Ethereal, spacious quality",
    "Smooth, polished sound",
    "Perfect for atmospheric sections"
  ],
  "recommended_for": [
    "Psychedelic productions",
    "Atmospheric sections",
    "Bed tracks for vocals"
  ],
  "tips": [
    "Use automation for evolving textures",
    "Works well with slow tempos",
    "Pair with subtle delay throws"
  ]
}
```

---

## FILE: 02-Data\presets\rnb-neo-soul-lead.json

```json
{
  "preset_name": "Toxic Biohazard R&B Neo-Soul Lead",
  "plugin": "Toxic Biohazard",
  "oscillators": {
    "1": {"waveform": "sine", "ratio": 1.0, "volume": 100, "pan": 0},
    "2": {"waveform": "sine", "ratio": 2.0, "volume": 60, "pan": 0},
    "3": {"waveform": "triangle", "ratio": 3.0, "volume": 40, "pan": 0},
    "4": {"waveform": "sine", "ratio": 1.0, "volume": 80, "pan": 0},
    "5": {"waveform": "triangle", "ratio": 4.0, "volume": 30, "pan": 0},
    "6": {"waveform": "sine", "ratio": 0.5, "volume": 50, "pan": 0}
  },
  "matrix_modulation": {
    "osc2_to_osc1": 20,
    "osc3_to_osc1": 15,
    "osc5_to_osc4": 10
  },
  "filter": {
    "type": "lp",
    "cutoff": 4000,
    "resonance": 25,
    "envelope_amount": 20
  },
  "envelopes": {
    "amp_attack": 30,
    "amp_decay": 400,
    "amp_sustain": 75,
    "amp_release": 600,
    "filter_attack": 50,
    "filter_decay": 500,
    "filter_sustain": 70,
    "filter_release": 700
  },
  "lfo": {
    "rate": 0.8,
    "amount": 12,
    "destination": "pitch"
  },
  "effects": {
    "distortion": {"amount": 8, "type": "soft"},
    "delay": {"feedback": 20, "time": 0.5, "mix": 25},
    "reverb": {"size": 75, "damping": 45, "mix": 35}
  },
  "unison": {
    "voices": 2,
    "detune": 8,
    "spread": 25
  },
  "genre": "R&B",
  "subgenre": "neo-soul",
  "application": "smooth lead sounds",
  "description": "Warm, expressive lead for neo-soul music",
  "characteristics": [
    "Warm, musical character",
    "Expressive envelope response",
    "Analog-like warmth",
    "Perfect for melodic lines"
  ],
  "recommended_for": [
    "Neo-soul productions",
    "Smooth R&B tracks",
    "Expressive lead lines"
  ],
  "tips": [
    "Use with expressive MIDI controllers",
    "Works well with jazz-influenced chord progressions",
    "Pair with vintage-style effects"
  ]
}
```

---

## FILE: 02-Data\presets\rnb-smooth-pad.json

```json
{
  "preset_name": "Toxic Biohazard R&B Smooth Pad",
  "plugin": "Toxic Biohazard",
  "oscillators": {
    "1": {"waveform": "sine", "ratio": 1.0, "volume": 100, "pan": 0},
    "2": {"waveform": "sine", "ratio": 2.0, "volume": 70, "pan": 0},
    "3": {"waveform": "triangle", "ratio": 3.0, "volume": 50, "pan": 0},
    "4": {"waveform": "sine", "ratio": 1.5, "volume": 80, "pan": 0},
    "5": {"waveform": "triangle", "ratio": 4.0, "volume": 40, "pan": 0},
    "6": {"waveform": "sine", "ratio": 0.5, "volume": 60, "pan": 0}
  },
  "matrix_modulation": {
    "osc2_to_osc1": 30,
    "osc3_to_osc1": 20,
    "osc5_to_osc4": 25,
    "osc6_to_osc1": 15
  },
  "filter": {
    "type": "lp",
    "cutoff": 3500,
    "resonance": 18,
    "envelope_amount": 25
  },
  "envelopes": {
    "amp_attack": 400,
    "amp_decay": 600,
    "amp_sustain": 85,
    "amp_release": 1000,
    "filter_attack": 500,
    "filter_decay": 700,
    "filter_sustain": 80,
    "filter_release": 1200
  },
  "lfo": {
    "rate": 0.3,
    "amount": 20,
    "destination": "oscillator_volume"
  },
  "effects": {
    "distortion": {"amount": 3, "type": "soft"},
    "delay": {"feedback": 25, "time": 0.75, "mix": 30},
    "reverb": {"size": 85, "damping": 40, "mix": 45}
  },
  "unison": {
    "voices": 3,
    "detune": 12,
    "spread": 50
  },
  "genre": "R&B",
  "subgenre": "smooth",
  "application": "ethereal pad sounds",
  "description": "Ethereal, evolving pad for smooth R&B",
  "characteristics": [
    "Evolving harmonic content",
    "Ethereal, spacious quality",
    "Smooth, polished sound",
    "Perfect for atmospheric sections"
  ],
  "recommended_for": [
    "Smooth R&B productions",
    "Atmospheric sections",
    "Bed tracks for vocals"
  ],
  "tips": [
    "Use automation for evolving textures",
    "Works well with slow tempos",
    "Pair with subtle delay throws"
  ]
}
```

---

## FILE: 02-Data\presets\urban-parameter-cheat-sheets.md

```markdown
# Data: Urban Parameter Cheat Sheets (Toxic Biohazard)
**Goal:** Exact settings for the "Big Three" urban synth sounds.

## 1. The "Neo-Soul" Electric Piano
*Character: Warm, slightly unstable, bell-like attack.*
- **Oscillator 1 (Sine):** Ratio 1.000 | Level 80%
- **Oscillator 2 (Sine):** Ratio 3.000 | Level 20% (Modulating Osc 1)
- **Envelope (Amp):** 
    - Attack: 2ms (Near instant)
    - Decay: 1500ms (Slow fade)
    - Sustain: 20% (Quiet holding)
    - Release: 400ms (Natural ring)
- **LFO 1 (Sine):** Target: Pitch | Amount: 5% | Speed: 3Hz (Gentle "Tape" wobble)
- **Filter:** LP (Low Pass) | Cutoff: 45% | Res: 10%

## 2. The "Moody" Sub-Bass
*Character: Deep, felt-not-heard, clean.*
- **Oscillator 1 (Sine):** Ratio 1.000 | Level 100%
- **Oscillator 2 (Triangle):** Ratio 1.000 | Level 5% (Adds subtle harmonics for car speakers)
- **Envelope (Amp):** 
    - Attack: 0ms (Punchy)
    - Decay: 500ms
    - Sustain: 100% (Solid hold)
    - Release: 50ms (Avoid muddy overlap)
- **Filter:** LP | Cutoff: 15% (Cutting almost everything above 100Hz)

## 3. The "Cold" Trap Bell
*Character: Metallic, sharp, distant.*
- **Oscillator 1 (Sine):** Ratio 1.000 | Level 100%
- **Oscillator 2 (Sine):** Ratio 11.000 | Level 35% (The metallic bite)
- **Envelope (Amp):** 
    - Attack: 0ms
    - Decay: 300ms
    - Sustain: 0%
    - Release: 800ms (Ghostly tail)
- **Effects:** Reverb 60% Wet | Delay 1/4 Note (Sync)

```

---

## FILE: 02-Data\presets\genre\electro-fm-bass.json

```json
{
  "name": "Electro FM Bass",
  "genre": "hip-hop/rap",
  "mood": "electric",
  "description": "Aggressive electronic bass for electro hip-hop",
  "parameters": {
    "osc1": { "wave": 2, "ratio": 1.00, "gain": 90 },
    "osc2": { "wave": 1, "ratio": 0.50, "gain": 80 },
    "osc3": { "wave": 4, "ratio": 1.50, "gain": 50 },
    "modMatrix": { "source": "osc2", "target": "osc1", "amount": 60 },
    "envelope": { "attack": 5, "decay": 150, "sustain": 70, "release": 200 },
    "filter": { "cutoff": 3000, "resonance": 55 },
    "lfo": { "wave": 1, "speed": 4, "amount": 15 }
  },
  "workflow": {
    "useCase": "Electro hip-hop, experimental rap",
    "steps": [
      "Osc1 Sawtooth at 1.00 ratio",
      "Osc2 Sine at 0.50 (octave down)",
      "60% modulation for growl",
      "High resonance for intensity",
      "LFO for movement"
    ],
    "tips": [
      "Great for futuristic 808s",
      "Perfect for drops and builds",
      "Sidechain to kick for pumping"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\energetic-drill-fm.json

```json
{
  "name": "Drill Aggressive FM",
  "genre": "hip-hop/rap",
  "mood": "energetic",
  "description": "Intense, aggressive FM lead for drill music",
  "parameters": {
    "osc1": { "wave": 2, "ratio": 1.00, "gain": 95 },
    "osc2": { "wave": 2, "ratio": 1.25, "gain": 85 },
    "osc3": { "wave": 4, "ratio": 2.00, "gail": 60 },
    "modMatrix": { "source": "osc2", "target": "osc1", "amount": 75 },
    "envelope": { "attack": 2, "decay": 80, "sustain": 85, "release": 150 },
    "filter": { "cutoff": 5500, "resonance": 60 },
    "lfo": { "wave": 1, "speed": 4, "amount": 25 }
  },
  "workflow": {
    "useCase": "Drill, trap, aggressive hip-hop",
    "steps": [
      "All Sawtooth waves for aggression",
      "High ratios for intensity",
      "Heavy modulation (75%) for edge",
      "Instant attack for impact",
      "High resonance for harshness"
    ],
    "tips": [
      "Perfect for drill melodies",
      "Great for aggressive hooks",
      "Use with distortion for more edge"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\funky-fm-bass.json

```json
{
  "name": "Funky FM Bass",
  "genre": "hip-hop/rap",
  "mood": "funky",
  "description": "Punchy, groovy FM bass for funk-inspired hip-hop",
  "parameters": {
    "osc1": { "wave": 2, "ratio": 1.00, "gain": 85 },
    "osc2": { "wave": 3, "ratio": 1.50, "gain": 65 },
    "osc3": { "wave": 1, "ratio": 0.50, "gain": 75 },
    "modMatrix": { "source": "osc2", "target": "osc1", "amount": 45 },
    "envelope": { "attack": 3, "decay": 100, "sustain": 80, "release": 250 },
    "filter": { "cutoff": 4000, "resonance": 40 },
    "lfo": { "wave": 2, "speed": 8, "amount": 20 }
  },
  "workflow": {
    "useCase": "G-funk, funk-inspired hip-hop",
    "steps": [
      "Osc1 Sawtooth for presence",
      "Osc3 Octave down for body",
      "45% modulation for character",
      "Quick attack for punch",
      "LFO for funky wobble"
    ],
    "tips": [
      "Perfect for slap-style sounds",
      "Great for wah-wah effects",
      "Layer with live bass samples"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\jazzy-fm-keys.json

```json
{
  "name": "Jazzy FM Keys",
  "genre": "hip-hop/rap",
  "mood": "smooth",
  "description": "Warm, smooth FM keys for jazzy hip-hop",
  "parameters": {
    "osc1": { "wave": 1, "ratio": 1.00, "gain": 75 },
    "osc2": { "wave": 1, "ratio": 2.00, "gain": 55 },
    "osc3": { "wave": 1, "ratio": 3.00, "gain": 40 },
    "modMatrix": { "source": "osc2", "target": "osc1", "amount": 10 },
    "envelope": { "attack": 50, "decay": 500, "sustain": 70, "release": 800 },
    "filter": { "cutoff": 3500, "resonance": 15 },
    "lfo": { "wave": 3, "speed": 16, "amount": 5 }
  },
  "workflow": {
    "useCase": "Jazzy hip-hop, lo-fi, soulful rap",
    "steps": [
      "All Sine waves for warmth",
      "Ratios 1, 2, 3 for harmonics",
      "Low modulation (10%) for clarity",
      "Soft filter for smoothness",
      "Slow LFO for gentle movement"
    ],
    "tips": [
      "Perfect for sample-like sounds",
      "Great for melodic hooks",
      "Layer with drums for groove"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\moody-dark-trap-bell.json

```json
{
  "name": "Dark Trap Bell",
  "genre": "hip-hop/rap",
  "mood": "moody",
  "description": "Metallic bell for dark trap productions",
  "parameters": {
    "osc1": { "wave": 1, "ratio": 4.00, "gain": 80 },
    "osc2": { "wave": 1, "ratio": 8.00, "gain": 60 },
    "modMatrix": { "source": "osc2", "target": "osc1", "amount": 15 },
    "envelope": { "attack": 5, "decay": 400, "sustain": 0, "release": 200 },
    "filter": { "cutoff": 6000, "resonance": 20 },
    "lfo": { "wave": 0, "speed": 0, "amount": 0 }
  },
  "workflow": {
    "useCase": "Dark trap, drill melodies",
    "steps": [
      "Set Osc1 to Sine at ratio 4.00",
      "Set Osc2 to Sine at ratio 8.00",
      "Route Osc2 to Osc1 at 15% modulation",
      "Short envelope: 5ms attack, 400ms decay",
      "High filter cutoff at 6000Hz"
    ],
    "tips": [
      "Perfect for haunting melodies",
      "Cuts through heavy 808s",
      "Layer with reverb for atmosphere"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\rnb-fm-funky-bass.json

```json
{
  "preset_name": "R&B FM Funky Bass",
  "plugin": "Toxic Biohazard",
  "oscillators": {
    "osc_1": {"waveform": "square", "carrier": true, "volume": 100},
    "osc_2": {"waveform": "saw", "modulator": true, "modulation_amount": 30, "modulates": "osc_1"},
    "osc_3": {"waveform": "square", "carrier": true, "volume": 70},
    "osc_4": {"waveform": "saw", "modulator": true, "modulation_amount": 25, "modulates": "osc_3"},
    "osc_5": {"waveform": "sine", "modulator": true, "modulation_amount": 20, "modulates": "osc_1"},
    "osc_6": {"waveform": "off"}
  },
  "filter": {
    "type": "LP",
    "cutoff": 4500,
    "resonance": 35
  },
  "envelope": {"attack": 3, "decay": 150, "sustain": 75, "release": 250},
  "lfo": {"depth": 18, "rate": 1.0},
  "fx_delay": 35,
  "genre": "R&B",
  "subgenre": "Funky",
  "application": "Bass, Slap Bass Simulation",
  "description": "Punchy, funky FM bass for R&B with rhythmic character",
  "characteristics": [
    "Punchy, rhythmic tone",
    "Rich harmonic content",
    "Quick attack for groove",
    "Perfect for funk-influenced R&B"
  ]
}
```

---

## FILE: 02-Data\presets\genre\rnb-fm-jazzy-keys.json

```json
{
  "preset_name": "R&B FM Jazzy Keys",
  "plugin": "Toxic Biohazard",
  "oscillators": {
    "osc_1": {"waveform": "sine", "carrier": true, "volume": 100},
    "osc_2": {"waveform": "saw", "modulator": true, "modulation_amount": 25, "modulates": "osc_1"},
    "osc_3": {"waveform": "sine", "carrier": true, "volume": 60},
    "osc_4": {"waveform": "saw", "modulator": true, "modulation_amount": 20, "modulates": "osc_3"},
    "osc_5": {"waveform": "sine", "modulator": true, "modulation_amount": 15, "modulates": "osc_1"},
    "osc_6": {"waveform": "off"}
  },
  "filter": {
    "type": "LP",
    "cutoff": 3000,
    "resonance": 25
  },
  "envelope": {"attack": 20, "decay": 300, "sustain": 70, "release": 500},
  "lfo": {"depth": 15, "rate": 0.8},
  "fx_reverb": 35,
  "genre": "R&B",
  "subgenre": "Jazzy",
  "application": "Keys, Rhodes-style",
  "description": "Warm, jazzy FM Rhodes-style keys for R&B",
  "characteristics": [
    "Vintage Rhodes character",
    "Warm, intimate tone",
    "Rich harmonic content",
    "Perfect for neo-soul"
  ]
}
```

---

## FILE: 02-Data\presets\genre\rnb-fm-psychedelic.json

```json
{
  "preset_name": "R&B FM Psychedelic",
  "plugin": "Toxic Biohazard",
  "oscillators": {
    "osc_1": {"waveform": "sine", "carrier": true, "volume": 100},
    "osc_2": {"waveform": "sine", "modulator": true, "modulation_amount": 40, "modulates": "osc_1"},
    "osc_3": {"waveform": "sine", "modulator": true, "modulation_amount": 35, "modulates": "osc_2"},
    "osc_4": {"waveform": "sine", "modulator": true, "modulation_amount": 30, "modulates": "osc_1"},
    "osc_5": {"waveform": "sine", "modulator": true, "modulation_amount": 25, "modulates": "osc_3"},
    "osc_6": {"waveform": "sine", "modulator": true, "modulation_amount": 20, "modulates": "osc_4"}
  },
  "filter": {
    "type": "BP",
    "cutoff": 3500,
    "resonance": 40
  },
  "envelope": {"attack": 100, "decay": 500, "sustain": 80, "release": 1000},
  "lfo": {"depth": 25, "rate": 0.5},
  "fx_reverb": 50,
  "genre": "R&B",
  "subgenre": "Psychedelic",
  "application": "Pads, Atmospheric Synth",
  "description": "Ethereal, evolving FM synth for psychedelic R&B",
  "characteristics": [
    "Ethereal, atmospheric tone",
    "Complex harmonic evolution",
    "Wide, spacious sound",
    "Perfect for experimental R&B"
  ]
}
```

---

## FILE: 02-Data\presets\genre\upbeat-bouncy-fm-lead.json

```json
{
  "name": "Bouncy FM Lead",
  "genre": "hip-hop/rap",
  "mood": "upbeat",
  "description": "Bright, bouncy FM lead for energetic hip-hop",
  "parameters": {
    "osc1": { "wave": 2, "ratio": 1.00, "gain": 85 },
    "osc2": { "wave": 2, "ratio": 2.00, "gain": 70 },
    "osc3": { "wave": 3, "ratio": 3.00, "gain": 55 },
    "modMatrix": { "source": "osc2", "target": "osc1", "amount": 35 },
    "envelope": { "attack": 10, "decay": 200, "sustain": 75, "release": 300 },
    "filter": { "cutoff": 5000, "resonance": 30 },
    "lfo": { "wave": 2, "speed": 8, "amount": 10 }
  },
  "workflow": {
    "useCase": "Upbeat hip-hop, party tracks",
    "steps": [
      "Use Sawtooth waves for brightness",
      "Set ratios 1, 2, 3 for harmonics",
      "35% modulation from Osc2 to Osc1",
      "Quick envelope for bounce",
      "Medium resonance for character"
    ],
    "tips": [
      "Perfect for hooks and melodies",
      "Great for call-and-response",
      "Add slight LFO for movement"
    ]
  }
}

```

---

## FILE: 02-Data\presets\signature\metro-boomin-fm.json

```json
{
  "name": "Metro Boomin Dark Style",
  "producer": "Metro Boomin",
  "description": "Dark, punchy FM synthesis for trap productions",
  "reference": "Creepin, Super Freaky Girl",
  "parameters": {
    "osc1": { "wave": 2, "ratio": 1.00, "gain": 85 },
    "osc2": { "wave": 1, "ratio": 0.50, "gain": 75 },
    "osc3": { "wave": 2, "ratio": 1.50, "gain": 55 },
    "modMatrix": { "source": "osc2", "target": "osc1", "amount": 50 },
    "envelope": { "attack": 5, "decay": 250, "sustain": 70, "release": 300 },
    "filter": { "cutoff": 3500, "resonance": 40 },
    "lfo": { "wave": 1, "speed": 0, "amount": 0 }
  },
  "workflow": {
    "useCase": "Modern trap, hip-hop",
    "signatureElements": [
      "Dark tonal character",
      "Punchy transients",
      "Clean low-end"
    ],
    "steps": [
      "Osc1 Saw at 1.00 for body",
      "Osc2 Sine octave down for sub",
      "50% modulation for character",
      "Moderate filter resonance",
      "Quick release for punch"
    ],
    "tips": [
      "Perfect for 808-style bass",
      "Great for trap melodies",
      "Layer with kick for impact"
    ]
  }
}

```

---

## FILE: 02-Data\presets\signature\zaytoven-fm.json

```json
{
  "name": "Zaytoven Soulful Style",
  "producer": "Zaytoven",
  "description": "Warm, organic FM for soulful trap",
  "reference": "Where U At, Easy",
  "parameters": {
    "osc1": { "wave": 1, "ratio": 1.00, "gain": 75 },
    "osc2": { "wave": 1, "ratio": 2.00, "gain": 55 },
    "osc3": { "wave": 1, "ratio": 3.00, "gain": 40 },
    "modMatrix": { "source": "osc2", "target": "osc1", "amount": 15 },
    "envelope": { "attack": 30, "decay": 500, "sustain": 75, "release": 800 },
    "filter": { "cutoff": 3000, "resonance": 20 },
    "lfo": { "wave": 3, "speed": 32, "amount": 5 }
  },
  "workflow": {
    "useCase": "Soulful trap, R&B",
    "signatureElements": [
      "Warm tonal character",
      "Smooth dynamics",
      "Organic feel"
    ],
    "steps": [
      "All sine waves for warmth",
      "Low modulation for clarity",
      "Slow attack for smoothness",
      "Dark filter for warmth",
      "Gentle LFO for movement"
    ],
    "tips": [
      "Perfect for melodic hooks",
      "Great for live-instrument feel",
      "Layer with vocals"
    ]
  }
}

```

---

## FILE: 02-Data\rules\fm-gain-staging-rules.md

```markdown
# Rules: FM Gain Staging (Toxic Biohazard)

Tags: fm-synthesis | mix-safety | oscillation

## 1. The "Modulation Overflow" Rule
In FM synthesis, increasing the modulation amount increases the harmonic complexity AND the perceived volume.
- **Rule:** As you increase the **Mod Amount** in the matrix, decrease the **Master Level** of the oscillator.
- **Why:** High FM amounts can create "non-linear" volume spikes that will cause internal clipping within Toxic Biohazard's effects engine (Reverb/Delay).

## 2. Low-Frequency FM Safety
- **Rule:** Never use a complex waveform (Saw/Square) as a **Modulator** for a Sub-Bass carrier.
- **Why:** Modulating a Sine wave with a Saw wave at low frequencies creates "chaotic" phase shifts that make the low-end of a Hip-Hop track sound muddy and untuned. Use **Sine into Sine** for clean sub-bass FM.

## 3. High Ratio Aliasing Rule
- **Rule:** If using Ratios above 10.000 (Metallic bells), use a **Low Pass Filter** set to 15kHz.
- **Why:** High Ratios can create "Aliasing" (digital artifacts) that sound like static noise. Filtering the extreme highs keeps the "Bell" tone while removing the digital "Trash."

## 4. "Avoid" List
- **Avoid 100% Unison on Bass:** Unison adds phase-shifting width. If used on a sub-bass, the low-end will lose its "Mono punch." Keep Unison for Leads and Pads only.
- **Avoid Over-Resonant LP Filters:** FM sounds are already harmonic-rich. Adding 80% Resonance on top of a complex FM patch usually results in a "whistle" that is painful to the listener.

```

---

## FILE: 02-Data\rules\toxic-biohazard-safety-rules.md

```markdown
# Toxic Biohazard Safety Rules

## Critical Gain Staging

### Do NOT
- Set any oscillator gain above 85%
- Skip the output limiter
- Use high modulation with high gains
- Stack too many operators at full volume
- Ignore the master output level

### Do
- Keep oscillator gains between 60-80%
- Use the output limiter on every patch
- Balance carrier vs modulator levels
- Check levels after every change
- Use headphones for detail

---

## FM Synthesis Dangers

### Warning Signs
| Symptom | Cause | Fix |
|---------|-------|-----|
| Harsh, painful sound | Too much modulation | Reduce mod amount |
| Muddy, undefined | Too much low frequency | High-pass, reduce ratios |
| Clicking on attacks | Envelope too fast | Smooth envelope attack |
| Distorted output | Gain too high | Reduce gains, check limiter |

---

## Operator Safety Levels

### Maximum Safe Levels
| Operator Type | Maximum Gain | Typical Use |
|---------------|--------------|-------------|
| Carrier (Osc1) | 80% | Main sound |
| Modulator (Osc2+) | 60% | Harmonics |
| Combined Output | 75% | Final mix |

---

## Modulation Guidelines

### Safe Modulation Ranges
| Effect | Safe Range | Danger Zone |
|--------|-----------|-------------|
| Harmonic FM | 10-40% | Above 60% |
| AM/Ring Mod | 20-50% | Above 70% |
| Filter FM | 30-60% | Above 80% |
| Pitch FM | 10-30% | Above 50% |

---

## Filter Safety

### Resonance Limits
- Low resonance (0-30%): Safe for most sounds
- Medium resonance (30-50%): Adds character
- High resonance (50-70%): Use carefully
- Extreme resonance (70%+): Can cause feedback

### Cutoff Guidelines
- High cutoff (5kHz+): Bright, may be harsh
- Medium cutoff (2-5kHz): Balanced
- Low cutoff (<2kHz): Dark, may be muddy

---

## Troubleshooting Common Issues

### Problem: "My bass has no punch"
- Check envelope attack time (should be 5-10ms)
- Reduce modulation on sub frequencies
- Increase filter cutoff to 3-4kHz
- Check for masking with kick

### Problem: "My lead sounds harsh"
- Reduce operator gains by 10-15%
- Lower modulation amount
- Reduce filter resonance
- Increase filter cutoff slightly

### Problem: "Sound is muddy"
- High-pass at 50-80Hz
- Reduce low ratios (below 1.0)
- Increase filter cutoff
- Reduce envelope release time

### Problem: "Clicking on notes"
- Smooth envelope attack (10-20ms)
- Enable anti-pop in preferences
- Reduce rapid parameter changes
- Use soft clipping on output

---

## Genre-Specific Rules

### Trap/Drill
- Keep sub frequencies clean
- Use high ratios for bells
- Avoid excessive modulation
- Check on phone speakers

### EDM/Bass Music
- Higher modulation for growls
- Heavy resonance for character
- Fast envelopes for impact
- Watch for distortion

### R&B/Jazzy
- Lower modulation for warmth
- Sine waves preferred
- Smooth envelopes
- Preserve dynamics

---

## Related Documentation
- [Toxic Biohazard Presets INDEX](../02-Data/presets/INDEX.md)
- [FM Synthesis Archetypes](../02-Data/presets/fm-synthesis-archetypes.md)
- [Toxic Biohazard Parameter Cheat Sheet](../01-Learning/Quick-Reference/parameter-cheat-sheet.md)

```

---

## FILE: 03-Workflows\INDEX.md

```markdown
# Toxic Biohazard Complete Workflows INDEX

## By-Goal Workflows
| File | Genre | Application | Description |
|------|-------|-------------|-------------|
| `by-goal/aggressive-fm-lead.md` | Universal | FM Lead Creation | Creating aggressive FM leads |
| `by-goal/evolving-atmospheric-pad.md` | Universal | Pad Synthesis | Creating atmospheric pads |
| `by-goal/hop-hop-subgenre-fm.md` | Hip-Hop/Rap | Subgenre Applications | Hip-hop specific subgenre workflows |
| `by-goal/rnb-subgenre-toxic.md` | R&B | Subgenre Applications | R&B specific subgenre workflows |

## By-Instrument Workflows
| File | Instrument | Application | Description |
|------|------------|-------------|-------------|
| `by-instrument/fm-keys-workflow.md` | Keys | FM Keys Synthesis | FM-based jazzy keys workflows |
| `by-instrument/fm-bass-workflow.md` | Bass | FM Bass Synthesis | FM-based R&B bass synthesis |

## Quick Reference
| Goal | File | Application |
|------|------|-------------|
| Aggressive Leads | `by-goal/aggressive-fm-lead.md` | FM lead creation |
| Atmospheric Pads | `by-goal/evolving-atmospheric-pad.md` | Pad synthesis |
| Hip-Hop Workflows | `by-goal/hop-hop-subgenre-fm.md` | Hip-hop subgenre applications |
| R&B Workflows | `by-goal/rnb-subgenre-toxic.md` | R&B subgenre applications |
| Keys Processing | `by-instrument/fm-keys-workflow.md` | FM keys synthesis |
| Bass Processing | `by-instrument/fm-bass-workflow.md` | FM bass synthesis |

## Related Documentation
- [Toxic Biohazard Presets INDEX](../02-Data/presets/INDEX.md)
- [FM Synthesis Fundamentals](../04-Reference/fm-synthesis-fundamentals.md)
- [FM Matrix Logic](../01-Learning/Quick-Reference/toxic-matrix-logic.md)
- [FM Gain Staging Rules](../02-Data/rules/fm-gain-staging-rules.md)
```

---

## FILE: 03-Workflows\by-goal\INDEX.md

```markdown
# Toxic Biohazard Workflows INDEX

## By-Goal Workflows

| File | Focus |
|------|-------|
| [aggressive-fm-lead.md](aggressive-fm-lead.md) | Aggressive FM lead creation |
| [aggressive-fm-growl.md](aggressive-fm-growl.md) | FM growl and growl bass |
| [evolving-atmospheric-pad.md](evolving-atmospheric-pad.md) | Evolving pad creation |
| [hop-hop-subgenre-fm.md](hop-hop-subgenre-fm.md) | Hip-Hop Sub-Genre FM Presets |

## By-Instrument Workflows

| File | Focus | Character |
|------|-------|-----------|
| [by-instrument/INDEX.md](by-instrument/INDEX.md) | Complete by-instrument guide | All instruments |
| [by-instrument/bass-dark-trap.md](by-instrument/bass-dark-trap.md) | Dark Trap Bass | Moody, punchy |
| [by-instrument/bass-aggressive-growl.md](by-instrument/bass-aggressive-growl.md) | Aggressive Growl Bass | Energetic, intense |
| [by-instrument/lead-bright-fm.md](by-instrument/lead-bright-fm.md) | Bright FM Lead | Electric, energetic |
| [by-instrument/lead-punchy-fm.md](by-instrument/lead-punchy-fm.md) | Punchy FM Lead | Funky, rhythmic |
| [by-instrument/pad-warm-fm.md](by-instrument/pad-warm-fm.md) | Warm FM Pad | Smooth, moody |
| [by-instrument/texture-metallic.md](by-instrument/texture-metallic.md) | Metallic Texture | Electric, modern |

## Quick Reference

| Goal | Workflow |
|------|----------|
| Aggressive lead | Aggressive FM Lead |
| Growl bass | Aggressive FM Growl |
| Atmospheric pad | Evolving Atmospheric Pad |
| Dark trap | Hip-Hop Sub-Genre FM / Bass Workflows |
| Bouncy lead | Hip-Hop Sub-Genre FM / Lead Workflows |
| Electro bass | Hip-Hop Sub-Genre FM / Bass Workflows |
| Jazzy keys | Hip-Hop Sub-Genre FM / Pad Workflows |
| Funky bass | Hip-Hop Sub-Genre FM / Bass Workflows |
| Drill FM | Hip-Hop Sub-Genre FM / Lead Workflows |

## Related Documentation

- [Toxic Biohazard Presets INDEX](../02-Data/presets/INDEX.md)
- [FM Synthesis Archetypes](../02-Data/presets/fm-synthesis-archetypes.md)
- [Toxic Biohazard Safety Rules](../02-Data/rules/fm-gain-staging-rules.md)

```

---

## FILE: 03-Workflows\by-goal\aggressive-fm-growl.md

```markdown
# Workflow: Aggressive FM Growl (Toxic Biohazard)

Tags: growl | dubstep | edm-bass | aggressive

## Goal: Create a "Growling" Bass for Hybrid Trap or EDM
This workflow uses the "Modulation Matrix" to create movement and grit.

## 1. Starting Moves
- **Osc 1 (Carrier):** Sawtooth | Level 80%.
- **Osc 2 (Modulator):** Sine | Level 0% (Matrix value).
- **Ratio Setup:** Set Osc 1 to 1.00 and Osc 2 to 0.50 (one octave down).

## 2. The Growl Engine
- **FM Matrix:** Slowly increase Osc 2 -> Osc 1 until you hear the "Growl." 
- **The Sweet Spot:** Usually around **40-60%**.
- **Filter Setup:** Use **LP (Low Pass)** | Cutoff 30% | Resonance 40%.

## 3. Creating the Movement
- **LFO Mapping:** Link **LFO 1** to the **FM Amount** (Osc 2 -> Osc 1).
- **LFO Speed:** Set to 1/4 or 1/8 bar.
- **Envelope Mapping:** Link the **Filter Cutoff** to an Envelope with a "Slightly slow" Attack.

## 4. A/B Test
- **A:** Static Sawtooth bass.
- **B:** FM Growl bass with LFO movement.
- **Listen for:** "Snarl" and "Texture." Does it sound like a machine breathing?

## 5. Quick Fix Path
- **Too thin?** Increase Osc 1 Master Level.
- **Too noisy?** Decrease FM Mod Amount.
- **Too "reedy"?** Change Modulator (Osc 2) back to a Sine wave.

```

---

## FILE: 03-Workflows\by-goal\aggressive-fm-lead.md

```markdown
# Aggressive FM Lead (Toxic Biohazard)

## Goal
Create a sharp, digital lead sound that cuts through a heavy mix.

## Technical Steps
1. **Operators Setup:**
   - **Osc 1 (Carrier):** Set to Sawtooth.
   - **Osc 2 (Modulator):** Set to Sine. Set pitch to +1 Octave.
2. **The Matrix:**
   - Go to the **Matrix** tab.
   - Turn up the knob at **Row 2 / Col 1** to ~40%. 
   - **Result:** The sine wave will begin to frequency modulate the saw wave, creating metallic overtones.
3. **Filter:**
   - Select **Low Pass (LP)**.
   - Turn up **Drive** to 30%.
   - Automate the **Filter Cutoff** with a fast envelope for a "snappy" attack.
4. **FX Rack:**
   - Add **Distortion**.
   - Add a high-feedback **Delay** for a wide, cavernous sound.

## Why it works
FM synthesis excels at creating high-frequency harmonic content that is far more complex than simple oscillator layering. By modulating a harmonic-rich Saw with a Sine, you generate a unique, "glassy" aggression.

```

---

## FILE: 03-Workflows\by-goal\evolving-atmospheric-pad.md

```markdown
# Evolving Atmospheric Pad (Toxic Biohazard)

## Goal
Design a lush, wide background texture that evolves over time.

## Technical Steps
1. **Initialization:**
   - Set 3 or 4 Oscillators to **Spectral** waveforms (e.g., Vocal or Bell).
   - Detune them slightly against each other (+/- 5 cents).
2. **ADSR Sculpting:**
   - Set **Attack** to 2 seconds on all active oscillators.
   - Set **Release** to 1.5 seconds.
3. **The Matrix:**
   - Apply subtle modulation (5-10%) between oscillators to create "micro-movement".
4. **Unison:**
   - Set **Unison** to 4 or 8 voices.
   - Increase **Spread** to 100% for maximum stereo width.
5. **Modulation:**
   - Assign the **LFO** to modulate the **Filter Cutoff** very slowly.

## Why it works
Detuned spectral waveforms combined with high unison spread create a dense "wall of sound." The slow attack and LFO modulation ensure that the sound is never static.

```

---

## FILE: 03-Workflows\by-goal\goal-oriented-workflows.md

```markdown
# Toxic Biohazard - Goal-Oriented Workflows for Hip-Hop/R&B

## Overview

This document details how to apply Toxic Biohazard's hybrid FM/subtractive synthesis capabilities to achieve specific production goals in hip-hop and R&B music. Each goal has unique requirements for parameter settings and techniques.

## Mixing Goals

### Creating Punchy Bass
| Goal | Technique | Parameter Settings | Application |
|------|-----------|-------------------|-------------|
| Punchy Bass | Fast envelopes, harmonic content | 2 Sine + 1 Saw, Fast attack (1-5ms), Medium decay (100-200ms) | Hip-Hop, Trap |
| Subtle Punch | Moderate settings | 1 Sine + 1 Square, Medium attack (10-20ms), Medium decay (150-250ms) | R&B, Neo-Soul |
| Aggressive Punch | Complex harmonics | 2 Saw + 2 Square, High FM modulation, Fast envelopes | Trap, Drill |

#### Application Notes:
- Use fast attack times (1-10ms) for punch
- Apply medium decay (100-300ms) for harmonic evolution
- Higher FM modulation adds harmonic complexity
- Consider sidechain compression for mix compatibility

### Achieving Warmth
| Goal | Technique | Parameter Settings | Application |
|------|-----------|-------------------|-------------|
| Vintage Warmth | Simple FM, soft waveforms | 3 Sine + 1 Triangle, Low FM modulation, Low resonance | R&B, Neo-Soul |
| Analog Feel | Subtle complexity | 2 Sine + 2 Triangle, Moderate FM, Medium resonance | All genres |
| Harmonic Richness | Controlled complexity | 2 Sine + 2 Saw, Careful FM modulation, Medium resonance | Smooth R&B |

#### Application Notes:
- Use sine and triangle waveforms for warmth
- Low to moderate FM modulation for musicality
- Apply filtering to shape the tone
- Use moderate resonance for character

### Creating Space and Width
| Goal | Technique | Parameter Settings | Application |
|------|-----------|-------------------|-------------|
| Stereo Width | Unison and panning | Multi-voice unison, Operator panning, Built-in chorus | All genres |
| Spatial Depth | Reverb and delay | Built-in reverb/delay, Slow envelopes | R&B, Atmospheric |
| Air and Sparkle | High-frequency content | Sawtooth harmonics, High-pass filtering, EQ | Contemporary |

#### Application Notes:
- Use multi-voice unison for width
- Apply built-in chorus for analog-style width
- Use reverb/delay for spatial depth
- Sawtooth waveforms add high-frequency content

## Sound Design Goals

### Vintage Synth Emulation
| Goal | Technique | Parameter Settings | Application |
|------|-----------|-------------------|-------------|
| Moog Bass | Simple harmonics | 2 Sine + 1 Saw, Low FM, Low-pass filtering | Hip-Hop, R&B |
| Rhodes Piano | Bell-like harmonics | 3 Sine + 1 Triangle, Moderate FM, Chorus | R&B, Neo-Soul |
| String Machine | Evolving textures | 4 Sine, LFO modulation, Reverb | R&B, Soul |

#### Application Notes:
- Use sine and triangle for vintage character
- Apply moderate FM for harmonic content
- Use built-in effects for authenticity
- Use LFO modulation for analog drift

### Modern Synth Sounds
| Goal | Technique | Parameter Settings | Application |
|------|-----------|-------------------|-------------|
| Aggressive Bass | Complex harmonics | 2 Saw + 2 Square, High FM, Distortion | Trap, Drill |
| Crystalline Leads | Bell-like tones | 4 Sine, High FM, Fast envelopes | Hip-Hop, R&B |
| Evolving Pads | Complex textures | 5 Sine + 1 Triangle, Slow envelopes, LFO | Atmospheric |

#### Application Notes:
- High FM modulation for complex harmonics
- Complex oscillator combinations for modern sounds
- Apply built-in distortion for extra aggression
- Use slow envelopes for evolving textures

### Percussion and Sound Effects
| Goal | Technique | Parameter Settings | Application |
|------|-----------|-------------------|-------------|
| 808-style Bass | Sub-bass focus | 2 Sine, Fixed frequencies, Low ratios | Hip-Hop, Trap |
| Snare Emulation | Noise and harmonics | 1 Square + 1 Noise, Fast envelopes | Hip-Hop |
| Hi-Hat Emulation | High-frequency content | 1 Saw + 1 Noise, High ratios, Fast envelopes | Hip-Hop |

#### Application Notes:
- Use fixed frequencies for unpitched percussion
- Apply noise operators for texture
- Fast envelopes for percussive sounds
- High ratios for bright, high-frequency content

## Genre-Specific Goals

### Hip-Hop Production Goals

#### Trap Aesthetic
| Goal | Technique | Parameter Settings | Application |
|------|-----------|-------------------|-------------|
| Aggressive Bass | Complex harmonics | 2 Saw + 2 Square, High FM (60-80%), Distortion | Trap, Drill |
| Melodic Hooks | Bell-like leads | 4 Sine, High FM (40-60%), Chorus | All Trap |
| Atmospheric Elements | Evolving textures | 5 Sine, LFO modulation, Reverb | Trap, Dark Trap |

#### Application Notes:
- High FM modulation creates aggressive harmonics
- 4 Sine setup for crystalline leads
- LFO modulation for evolving atmospheric elements
- Built-in distortion for extra aggression

#### Boom Bap Character
| Goal | Technique | Parameter Settings | Application |
|------|-----------|-------------------|-------------|
| Vintage Bass | Simple, warm | 3 Sine, Low FM (10-20%), Chorus | Boom Bap |
| Sample Enhancement | Harmonic addition | 2 Sine + 1 Triangle, Low FM (15-25%) | Boom Bap |
| Jazz Influence | Piano-like tones | 3 Sine + 1 Triangle, Moderate FM (20-30%) | Jazz Rap |

#### Application Notes:
- Low FM modulation for vintage character
- Sine and triangle waveforms for warmth
- Subtle FM to enhance samples
- Triangle waveforms for piano-like tones

#### Conscious/Alternative Hip-Hop
| Goal | Technique | Parameter Settings | Application |
|------|-----------|-------------------|-------------|
| Subtle Enhancement | Transparent | 2 Sine + 1 Triangle, Low FM (10-15%) | Conscious |
| Atmospheric Textures | Evolving sounds | 4 Sine, Slow envelopes, LFO modulation | Alternative |
| Organic Feel | Analog simulation | 3 Sine + 1 Triangle, LFO drift | Conscious |

#### Application Notes:
- Low FM modulation for transparent enhancement
- Slow envelopes for evolving textures
- LFO modulation for analog drift
- Moderate settings for organic feel

### R&B Production Goals

#### Smooth R&B Character
| Goal | Technique | Parameter Settings | Application |
|------|-----------|-------------------|-------------|
| Smooth Bass | Warm, full | 2 Sine + 1 Saw, Low FM (15-25%) | Smooth R&B |
| Polished Leads | Clean, bright | 2 Sine + 2 Triangle, Low FM (20-30%) | Contemporary R&B |
| Ethereal Pads | Evolving textures | 4 Sine + 1 Triangle, LFO modulation | Smooth R&B |

#### Application Notes:
- Sine and saw waveforms for smooth character
- Low to moderate FM for musical complexity
- LFO modulation for evolving textures
- Clean envelopes for polished sound

#### Neo-Soul Enhancement
| Goal | Technique | Parameter Settings | Application |
|------|-----------|-------------------|-------------|
| Vintage Keys | Piano-like | 3 Sine + 1 Triangle, Moderate FM (20-30%) | Neo-Soul |
| Expressive Bass | Dynamic response | 2 Sine + 1 Saw, Moderate FM (25-35%) | Neo-Soul |
| Organic Leads | Natural feel | 2 Sine + 2 Triangle, Mixed FM (20-30%) | Neo-Soul |

#### Application Notes:
- Sine and triangle waveforms for vintage key character
- Moderate FM for expressiveness
- Mixed waveforms for organic feel
- Careful envelope shaping for expression

#### Funky R&B Groove
| Goal | Technique | Parameter Settings | Application |
|------|-----------|-------------------|-------------|
| Funk Bass | Punchy, rhythmic | 2 Square + 1 Saw, Fast envelopes, Moderate FM | Funky R&B |
| Clavinet Emulation | Bright, percussive | 2 Square + 1 Saw, High ratios, Fast envelopes | Funky R&B |
| Groove Enhancement | Rhythmic elements | 2 Square + 2 Saw, LFO modulation | Funky R&B |

#### Application Notes:
- Fast envelopes for punchy bass
- Square and saw waveforms for bright harmonics
- LFO modulation for rhythmic elements
- Higher FM for complexity

## Creative Goals

### Atmosphere and Space
| Goal | Technique | Parameter Settings | Application |
|------|-----------|-------------------|-------------|
| Ambient Pads | Evolving textures | 5 Sine, Slow envelopes, LFO modulation | Atmospheric |
| Spatial Depth | Reverb/delay | 4 Sine, Built-in effects | All atmospheric |
| Ethereal Quality | High harmonics | 4 Sine, Low FM (15-25%) | Ethereal R&B |

#### Application Notes:
- Slow envelopes for evolving textures
- LFO modulation for movement
- Built-in effects for spatial depth
- Low FM for ethereal quality

### Energy and Movement
| Goal | Technique | Parameter Settings | Application |
|------|-----------|-------------------|-------------|
| Driving Energy | Complex harmonics | 2 Saw + 2 Square, High FM (50-70%) | Energetic |
| Rhythmic Elements | LFO modulation | 2 Saw + 1 Square, LFO to parameters | All rhythmic |
| Dynamic Variation | Modulation changes | 3 Saw + 1 Square, Automated parameters | Dynamic |

#### Application Notes:
- High FM modulation for driving energy
- LFO modulation for rhythmic elements
- Parameter automation for dynamic variation
- Complex oscillator combinations for energy

## Mastering Goals

### Final Polish
| Goal | Technique | Parameter Settings | Application |
|------|-----------|-------------------|-------------|
| Subtle Enhancement | Transparent | 2 Sine + 1 Triangle, Low FM (10-20%) | All genres |
| Harmonic Addition | Gentle complexity | 2 Sine + 2 Triangle, Moderate FM (15-25%) | All genres |
| Analog Character | Saturation emulation | 3 Sine, Built-in distortion (light) | Vintage |

#### Application Notes:
- Low FM modulation for transparent enhancement
- Moderate settings for harmonic addition
- Light built-in distortion for analog character
- Conservative approach for mastering

### Loudness Enhancement
| Goal | Technique | Parameter Settings | Application |
|------|-----------|-------------------|-------------|
| Harmonic Saturation | Controlled distortion | 2 Saw + 1 Square, Built-in distortion (medium) | All genres |
| Presence Addition | High-frequency content | 2 Saw + 2 Square, High-pass filtering | Contemporary |
| Density Addition | Complex harmonics | 3 Saw + 1 Square, High FM (40-60%) | Dense mixes |

#### Application Notes:
- Controlled built-in distortion for saturation
- Sawtooth harmonics for presence
- High FM for density
- Careful application to avoid artifacts

## Advanced Goal-Oriented Techniques

### Dynamic Application
| Goal | Technique | Application |
|------|-----------|-------------|
| Punch | Sidechain to kick | Dynamic punch that ducks on kick |
| Width | LFO modulation | Animated stereo width |
| Movement | Automated parameters | Evolving textures |

### Parallel Processing for Goals
| Goal | Setup | Application |
|------|-------|-------------|
| Punch | 70% dry, 30% processed | Maintain transients while adding harmonics |
| Width | 60% dry, 40% chorus-processed | Preserve center while adding width |
| Character | 50% dry, 50% distorted | Blend original with character |

### Automation for Dynamic Goals
| Goal | Automation | Application |
|------|------------|-------------|
| Energy | Increase during choruses | Build energy throughout sections |
| Intimacy | Decrease during verses | Create intimate moments |
| Impact | Boost during drops | Emphasize impactful moments |

## Troubleshooting Goal-Oriented Applications

### Common Issues and Solutions
| Goal | Issue | Solution |
|------|-------|----------|
| All | Harshness | Reduce FM modulation, use sine/triangle waveforms |
| Punch | Loss of dynamics | Use parallel processing, lower settings |
| Width | Phase issues | Check mono compatibility, adjust unison |
| Warmth | Too cold/digital | Add subtle distortion, use warmer waveforms |

## Success Metrics by Goal

### Evaluation Criteria
- [ ] The goal is achieved without artifacts
- [ ] The enhancement matches the subgenre
- [ ] Dynamics are maintained appropriately
- [ ] The processing adds to rather than detracts from the music
- [ ] The sound remains natural and musical

## Integration with Goal-Oriented Chains

### Pre-Toxic Processing
- [ ] Apply goal-specific EQ
- [ ] Use appropriate compression
- [ ] Set proper gain staging

### Post-Toxic Processing
- [ ] Apply goal-specific effects
- [ ] Final EQ adjustments if needed
- [ ] Apply limiting if necessary

---

## Related Documentation
- [FM Synthesis Fundamentals](../04-Reference/fm-synthesis-fundamentals.md)
- [FM Matrix Logic](../01-Learning/Quick-Reference/toxic-matrix-logic.md)
- [Hip-Hop Sub-Genre Workflows](../by-goal/hop-hop-subgenre-fm.md)
- [R&B Sub-Genre Workflows](../by-goal/rnb-subgenre-toxic.md)

---

**Document Version:** 1.0
**Last Updated:** 2026-02-03
**Focus:** Goal-Oriented Applications
**Plugin:** Toxic Biohazard
```

---

## FILE: 03-Workflows\by-goal\hop-hop-subgenre-fm.md

```markdown
# Hip-Hop Sub-Genre Toxic Biohazard Workflows

## Moody Dark Trap Bell
| Parameter | Setting |
|-----------|---------|
| Osc1 | Sine, Ratio 4.00 |
| Osc2 | Sine, Ratio 8.00 |
| Mod Matrix | Osc2 → Osc1, 15% |
| Envelope | 5/400/0/200 |
| Filter Cutoff | 6000Hz |
| Resonance | 20% |

### Tips
- Metallic sound from high ratios
- Short envelope for pluck
- High filter for presence
- Perfect for haunting melodies

---

## Upbeat Bouncy FM Lead
| Parameter | Setting |
|-----------|---------|
| Osc1 | Saw, Ratio 1.00 |
| Osc2 | Saw, Ratio 2.00 |
| Osc3 | Square, Ratio 3.00 |
| Mod Matrix | Osc2 → Osc1, 35% |
| Envelope | 10/200/75/300 |
| Filter Cutoff | 5000Hz |
| Resonance | 30% |

### Tips
- Bright sound from saw waves
- Ratios 1, 2, 3 for harmonics
- Quick envelope for bounce
- Perfect for hooks

---

## Electro FM Bass
| Parameter | Setting |
|-----------|---------|
| Osc1 | Saw, Ratio 1.00 |
| Osc2 | Sine, Ratio 0.50 |
| Osc3 | Pulse, Ratio 1.50 |
| Mod Matrix | Osc2 → Osc1, 60% |
| Envelope | 5/150/70/200 |
| Filter Cutoff | 3000Hz |
| Resonance | 55% |

### Tips
- Growling character from modulation
- Octave down for body
- High resonance for intensity
- Great for 808s

---

## Jazzy FM Keys
| Parameter | Setting |
|-----------|---------|
| Osc1 | Sine, Ratio 1.00 |
| Osc2 | Sine, Ratio 2.00 |
| Osc3 | Sine, Ratio 3.00 |
| Mod Matrix | Osc2 → Osc1, 10% |
| Envelope | 50/500/70/800 |
| Filter Cutoff | 3500Hz |
| Resonance | 15% |

### Tips
- Warmth from sine waves
- Low modulation for clarity
- Smooth envelope for warmth
- Perfect for soulful sounds

---

## Funky FM Bass
| Parameter | Setting |
|-----------|---------|
| Osc1 | Saw, Ratio 1.00 |
| Osc2 | Square, Ratio 1.50 |
| Osc3 | Sine, Ratio 0.50 |
| Mod Matrix | Osc2 → Osc1, 45% |
| Envelope | 3/100/80/250 |
| Filter Cutoff | 4000Hz |
| Resonance | 40% |

### Tips
- Punchy from quick attack
- Octave for body
- LFO for funky wobble
- Great for slap-style

---

## Energetic Drill FM
| Parameter | Setting |
|-----------|---------|
| Osc1 | Saw, Ratio 1.00 |
| Osc2 | Saw, Ratio 1.25 |
| Osc3 | Pulse, Ratio 2.00 |
| Mod Matrix | Osc2 → Osc1, 75% |
| Envelope | 2/80/85/150 |
| Filter Cutoff | 5500Hz |
| Resonance | 60% |

### Tips
- Aggressive from high modulation
- High resonance for harshness
- Quick everything for intensity
- Perfect for drill

---

## Related Documentation
- [Toxic Biohazard Presets INDEX](./INDEX.md)
- [Toxic Biohazard FM Archetypes](./fm-synthesis-archetypes.md)
- [Toxic Biohazard Safety Rules](./rules/fm-gain-staging-rules.md)

```

---

## FILE: 03-Workflows\by-goal\rnb-subgenre-toxic.md

```markdown
# R&B Sub-Genre Toxic Biohazard Workflows

## Overview
Toxic Biohazard's hybrid FM/subtractive synthesis capabilities make it ideal for creating authentic R&B sounds across various subgenres. This document details how to configure Toxic Biohazard for characteristic R&B tones in different subgenres.

## Moody R&B (Dark, Intimate)
| Parameter | Setting | R&B Application |
|-----------|---------|-----------------|
| Oscillators | 2 Sine + 1 Saw | Warm, intimate tones |
| Matrix | Sine 2 → Sine 1 (20%) | Subtle FM warmth |
| Filter | LP, 2500Hz, 20% res | Warm, mellow character |
| Envelope | 50/600/65/800 | Slow, sustained |
| LFO | Depth 15%, Rate 0.8Hz | Gentle modulation |
| Reverb Mix | 40% | Intimate space |

### Tips for Moody R&B
- Use sine waves for warmth and intimacy
- Apply slow attack for smooth entry
- Use moderate release for sustained notes
- Perfect for ballad-style R&B

### Oscillator Configuration
- **Osc 1**: Sine, full volume
- **Osc 2**: Sine, modulator, 20% into Osc 1
- **Osc 3**: Saw, 30% volume
- **Osc 4-6**: Off

---

## Upbeat R&B (Energetic, Danceable)
| Parameter | Setting | R&B Application |
|-----------|---------|-----------------|
| Oscillators | 2 Saw + 2 Square + 1 Sine | Bright, full character |
| Matrix | Square 2 → Saw 1 (35%), Sine 3 → Saw 1 (25%) | Rich harmonic content |
| Filter | LP, 5000Hz, 30% res | Bright, present |
| Envelope | 10/200/75/300 | Quick, punchy |
| LFO | Depth 20%, Rate 1.2Hz | Movement and space |
| Delay Mix | 30% | Rhythmic enhancement |

### Tips for Upbeat R&B
- Use saw and square waves for brightness
- Apply moderate FM for richness
- Quick attack for punchy character
- Perfect for contemporary dance tracks

### Oscillator Configuration
- **Osc 1**: Saw, carrier, full volume
- **Osc 2**: Square, modulator, 35% into Osc 1
- **Osc 3**: Sine, modulator, 25% into Osc 1
- **Osc 4**: Saw, carrier, 70% volume
- **Osc 5**: Square, modulator, 20% into Osc 4
- **Osc 6**: Sine, carrier, 40% volume

---

## Psychedelic R&B (Experimental, Atmospheric)
| Parameter | Setting | R&B Application |
|-----------|---------|-----------------|
| Oscillators | All Sine with complex modulation | Ethereal textures |
| Matrix | Complex inter-oscillator modulation | Evolving harmonics |
| Filter | BP, 3500Hz, 40% res | Spatial enhancement |
| Envelope | 100/500/80/1000 | Slow, evolving |
| LFO | Depth 25%, Rate 0.5Hz | Atmospheric movement |
| Reverb Mix | 50% | Expansive space |

### Tips for Psychedelic R&B
- Use complex oscillator modulation for evolving textures
- Apply slow envelopes for atmospheric builds
- High reverb for spatial depth
- Perfect for experimental R&B tracks

### Oscillator Configuration
- **Osc 1**: Sine, carrier, full volume
- **Osc 2**: Sine, modulator, 40% into Osc 1
- **Osc 3**: Sine, modulator, 35% into Osc 2
- **Osc 4**: Sine, modulator, 30% into Osc 1
- **Osc 5**: Sine, modulator, 25% into Osc 3
- **Osc 6**: Sine, modulator, 20% into Osc 4

---

## Electronic Bass R&B (Modern, Synthesized)
| Parameter | Setting | R&B Application |
|-----------|---------|-----------------|
| Oscillators | 2 Saw + 1 Square + 1 Sine | Full bass spectrum |
| Matrix | Square 2 → Saw 1 (40%), Sine 3 → Saw 1 (20%) | Harmonic saturation |
| Filter | LP, 4000Hz, 50% res | Bass emphasis |
| Envelope | 5/100/70/200 | Punchy attack |
| LFO | Depth 18%, Rate 1.0Hz | Subtle movement |
| Reverb Mix | 15% | Subtle space |

### Tips for Electronic Bass R&B
- Use rich harmonic content for full bass
- Apply moderate FM for saturation
- Quick attack for punchy bass hits
- Perfect for modern R&B with electronic elements

### Oscillator Configuration
- **Osc 1**: Saw, carrier, full volume
- **Osc 2**: Saw, carrier, 80% volume
- **Osc 3**: Square, modulator, 40% into Osc 1
- **Osc 4**: Sine, modulator, 20% into Osc 1
- **Osc 5-6**: Off

---

## Jazzy R&B (Vintage, Soulful)
| Parameter | Setting | R&B Application |
|-----------|---------|-----------------|
| Oscillators | 2 Sine + 2 Saw (Rhodes-style) | Vintage keyboard tones |
| Matrix | Saw 2 → Sine 1 (25%), Saw 4 → Sine 3 (20%) | Vintage character |
| Filter | LP, 3000Hz, 25% res | Warm, vintage character |
| Envelope | 20/300/70/500 | Medium attack/release |
| LFO | Depth 12%, Rate 0.7Hz | Vintage modulation |
| Reverb Mix | 35% | Vintage room sound |

### Tips for Jazzy R&B
- Mimic vintage electric piano tones
- Use moderate FM for vintage character
- Apply warm filtering for classic sound
- Perfect for neo-soul and jazzy R&B

### Oscillator Configuration
- **Osc 1**: Sine, carrier, full volume
- **Osc 2**: Saw, modulator, 25% into Osc 1
- **Osc 3**: Sine, carrier, 60% volume
- **Osc 4**: Saw, modulator, 20% into Osc 3
- **Osc 5-6**: Off

---

## Funky R&B (Groove-Heavy, Rhythmic)
| Parameter | Setting | R&B Application |
|-----------|---------|-----------------|
| Oscillators | 2 Square + 2 Saw + 1 Sine | Punchy, rhythmic tones |
| Matrix | Saw 2 → Square 1 (30%), Sine 5 → Saw 4 (20%) | Rhythmic character |
| Filter | LP, 4500Hz, 35% res | Presence enhancement |
| Envelope | 3/150/75/250 | Quick, punchy |
| LFO | Depth 22%, Rate 1.5Hz | Rhythmic enhancement |
| Delay Mix | 35% | Groove enhancement |

### Tips for Funky R&B
- Use square waves for punchy character
- Apply quick envelopes for rhythmic precision
- Moderate delay for groove enhancement
- Perfect for funk-influenced R&B

### Oscillator Configuration
- **Osc 1**: Square, carrier, full volume
- **Osc 2**: Saw, modulator, 30% into Osc 1
- **Osc 3**: Square, carrier, 70% volume
- **Osc 4**: Saw, modulator, 25% into Osc 3
- **Osc 5**: Sine, modulator, 20% into Osc 4
- **Osc 6**: Off

---

## Additional R&B Subgenres

### Soulful R&B (Classic, Emotional)
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 3 Sine + 2 Saw | Warm, emotional tones |
| Matrix | Moderate FM ratios | Vintage character |
| Filter | LP, 2800Hz, 22% res | Classic soul warmth |
| Envelope | 30/400/70/600 | Smooth, sustained |

### Smooth R&B (Polished, Radio-Friendly)
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 2 Sine + 2 Saw + 1 Square | Balanced tones |
| Matrix | Gentle FM modulation | Polished sound |
| Filter | LP, 3800Hz, 28% res | Balanced presence |
| Envelope | 15/250/75/400 | Professional feel |

### Neo-Soul R&B (Modern Vintage)
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 4 Sine + 1 Saw | Organic, vintage tones |
| Matrix | Subtle FM ratios | Natural feel |
| Filter | LP, 3200Hz, 24% res | Vintage warmth |
| Envelope | 25/350/72/550 | Organic response |

## Integration with R&B Production Chain

### Pre-Toxic Processing
- [ ] Apply gentle EQ to shape tone
- [ ] Use compression for consistency
- [ ] Set appropriate gain staging

### Post-Toxic Processing
- [ ] Add reverb for space
- [ ] Apply subtle delay for depth
- [ ] Final EQ adjustments if needed

## Troubleshooting Common Issues

### Harsh High Frequencies
- [ ] Reduce filter cutoff frequency
- [ ] Lower resonance
- [ ] Reduce FM modulation
- [ ] Apply high-frequency roll-off after

### Muddy Low-End
- [ ] Increase filter cutoff frequency
- [ ] Reduce low-frequency FM
- [ ] Apply high-pass filtering
- [ ] Check for frequency buildup

### Loss of Clarity
- [ ] Reduce FM modulation
- [ ] Use fewer oscillators
- [ ] Apply EQ after Toxic
- [ ] Lower LFO depth

## Expert Tips for R&B Production

### Creative Applications
- Use FM matrix for evolving textures
- Apply different envelopes to different oscillators
- Create vintage sounds with proper FM ratios
- Experiment with oscillator sync

### Performance Optimization
- Use fewer oscillators for CPU efficiency
- Freeze tracks when possible
- Use Toxic in multi-timbral mode
- Apply to multiple instruments efficiently

## Success Metrics

Your R&B Toxic Biohazard application is successful when:
- [ ] The sound matches the intended subgenre character
- [ ] The tone is appropriate for R&B
- [ ] The sound sits well in the mix
- [ ] The harmonic content is rich but not harsh
- [ ] The processing adds to rather than detracts from the emotion

---

## Related Documentation
- [Toxic Biohazard Presets INDEX](../02-Data/presets/INDEX.md)
- [FM Synthesis Fundamentals](../04-Reference/fm-synthesis-fundamentals.md)
- [FM Matrix Logic](../01-Learning/Quick-Reference/toxic-matrix-logic.md)

---

**Document Version:** 1.0  
**Last Updated:** 2026-02-03  
**Genre Focus:** R&B (Rhythm and Blues)  
**Plugin:** Toxic Biohazard
```

---

## FILE: 03-Workflows\by-instrument\INDEX.md

```markdown
# Toxic Biohazard By-Instrument Workflows

## Bass Workflows

### Dark Trap Bass
| Parameter | Setting |
|-----------|---------|
| Osc1 | Sawtooth, Ratio 1.00 |
| Osc2 | Sine, Ratio 0.50 |
| Mod Amount | 50% |
| Filter Cutoff | 3000Hz |
| Resonance | 40% |
| Envelope | 5/200/80/300 |

### Configuration
1. Set Osc1 as carrier (Sawtooth)
2. Set Osc2 as modulator (Sine, octave down)
3. Route Osc2 to Osc1 at 50%
4. Apply low-pass filter with resonance
5. Shape envelope for punch

### Tips
- Perfect for 808-style bass
- Layer with kick for impact
- Sidechain for pumping effect

---

### Aggressive Growl Bass
| Parameter | Setting |
|-----------|---------|
| Osc1 | Sawtooth, Ratio 1.00 |
| Osc2 | Sawtooth, Ratio 1.25 |
| Mod Amount | 70% |
| Filter Cutoff | 4000Hz |
| Resonance | 55% |
| Envelope | 3/100/85/200 |

### Configuration
1. Both oscillators as Sawtooth
2. Slight ratio difference for dissonance
3. High modulation for growl
4. High resonance for character
5. Fast envelope for impact

### Tips
- Great for dubstep and drill
- Use LFO for wobble effect
- Reduce modulation if too harsh

---

## Lead Workflows

### Bright FM Lead
| Parameter | Setting |
|-----------|---------|
| Osc1 | Sawtooth, Ratio 1.00 |
| Osc2 | Sawtooth, Ratio 2.00 |
| Osc3 | Square, Ratio 3.00 |
| Mod Amount | 35% |
| Filter Cutoff | 5500Hz |
| Resonance | 25% |
| Envelope | 10/200/78/400 |

### Configuration
1. Stack 3 operators with harmonic ratios
2. Moderate modulation for presence
3. Bright filter for cutting through
4. Quick attack for immediacy

### Tips
- Perfect for melodic hooks
- Great for festival leads
- Add reverb for space

---

### Punchy FM Lead
| Parameter | Setting |
|-----------|---------|
| Osc1 | Square, Ratio 1.00 |
| Osc2 | Sine, Ratio 1.50 |
| Mod Amount | 45% |
| Filter Cutoff | 4500Hz |
| Resonance | 35% |
| Envelope | 5/150/80/300 |

### Configuration
1. Square wave for presence
2. Sine modulator for body
3. Moderate modulation
4. Quick envelope for punch

### Tips
- Great for rhythmic parts
- Perfect for hip-hop melodies
- Layer with drums

---

## Pad/Texture Workflows

### Warm FM Pad
| Parameter | Setting |
|-----------|---------|
| Osc1 | Sine, Ratio 1.00 |
| Osc2 | Sine, Ratio 2.00 |
| Osc3 | Sine, Ratio 3.00 |
| Mod Amount | 10% |
| Filter Cutoff | 2500Hz |
| Resonance | 15% |
| Envelope | 200/800/70/1500 |

### Configuration
1. All sine waves for warmth
2. Low modulation for clarity
3. Dark filter for smoothness
4. Slow envelope for ambiance

### Tips
- Perfect for backgrounds
- Great for R&B and jazz
- Add chorus for width

---

### Metallic Texture
| Parameter | Setting |
|-----------|---------|
| Osc1 | Sine, Ratio 4.00 |
| Osc2 | Sine, Ratio 8.00 |
| Mod Amount | 20% |
| Filter Cutoff | 6000Hz |
| Resonance | 30% |
| Envelope | 50/500/60/800 |

### Configuration
1. High ratios for metallic sound
2. Low modulation for glassy tone
3. High filter for brightness
4. Medium envelope for presence

### Tips
- Great for modern trap
- Perfect for unique accents
- Use sparingly

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| No low-end | Increase Osc2 gain, check filter cutoff |
| Too harsh | Reduce modulation, increase filter cutoff |
| No definition | Increase resonance slightly |
| Muddy sound | High-pass at 40Hz, reduce lows |
| Weak attack | Decrease envelope attack time |

---

## Related Documentation
- [Toxic Biohazard Presets INDEX](../02-Data/presets/INDEX.md)
- [FM Synthesis Archetypes](../02-Data/presets/fm-synthesis-archetypes.md)
- [FM Gain Staging Rules](../02-Data/rules/fm-gain-staging-rules.md)

```

---

## FILE: 03-Workflows\by-instrument\bass-workflows.md

```markdown
# Toxic Biohazard - Bass Workflows

## Overview
Toxic Biohazard excels at creating powerful, genre-defining bass sounds through its FM synthesis engine. This workflow focuses on crafting bass sounds specifically for hip-hop, trap, and EDM production.

## Workflow 1: Trap Sub-Bass

### Configuration
- **Algorithm**: 1-Operator (simple sub-bass)
- **Operator A**: Sine wave, fixed frequency 40-60 Hz
- **FM Level**: 0 (clean sub-bass)
- **Envelope**: Fast attack, moderate decay, no sustain, short release
- **Effects**: Distortion (subtle drive), EQ (boost 60-80 Hz)

### Steps
1. Set Algorithm to 1-Operator
2. Configure Operator A with sine wave
3. Set fixed frequency to 40-60 Hz for sub-bass
4. Adjust FM Level to 0 for clean tone
5. Create envelope: 5ms attack, 200ms decay, 0 sustain, 100ms release
6. Add subtle distortion (10-20% drive)
7. Apply EQ boost at 60-80 Hz
8. Test in context with kick drum

### Tips
- Use fixed frequency for consistent sub-bass
- Keep FM Level low to avoid unwanted harmonics
- Layer with higher octave for presence
- Sidechain with kick for pumping effect

### Troubleshooting
- **Muddy Mix**: Cut frequencies below 40 Hz
- **Weak Impact**: Increase distortion slightly
- **Tuning Issues**: Verify fixed frequency settings

## Workflow 2: 808-Style Bass

### Configuration
- **Algorithm**: 2-Operator (carrier + modulator)
- **Operator A**: Sine wave, ratio 1.0, level 80%
- **Operator B**: Sine wave, ratio 2.0, FM Level 50%
- **Envelope**: Fast attack, long decay, no sustain, moderate release
- **Effects**: Saturation, compression

### Steps
1. Select Algorithm 2-Operator
2. Set Operator A: sine, ratio 1.0, level 80%
3. Set Operator B: sine, ratio 2.0, FM Level 50%
4. Create envelope: 1ms attack, 800ms decay, 0 sustain, 300ms release
5. Add saturation for harmonic content
6. Apply compression for sustain
7. Tune to key of track
8. Test with different note lengths

### Tips
- Ratio 2.0 creates octave above fundamental
- Long decay creates 808-style sustain
- Use glide for pitch slides
- Layer with kick for massive low end

### Troubleshooting
- **Harsh Top End**: Reduce Operator B level
- **Weak Sub**: Increase Operator A level
- **Tuning Problems**: Check ratio settings

## Workflow 3: Mid-Range Bass

### Configuration
- **Algorithm**: 3-Operator (complex FM)
- **Operator A**: Sine wave, ratio 1.0, level 70%
- **Operator B**: Sine wave, ratio 3.0, FM Level 40%
- **Operator C**: Sine wave, ratio 5.0, FM Level 30%
- **Envelope**: Moderate attack, moderate decay, low sustain, short release
- **Effects**: EQ, saturation

### Steps
1. Choose Algorithm 3-Operator
2. Configure Operator A: sine, ratio 1.0, level 70%
3. Configure Operator B: sine, ratio 3.0, FM Level 40%
4. Configure Operator C: sine, ratio 5.0, FM Level 30%
5. Create envelope: 10ms attack, 300ms decay, 30% sustain, 150ms release
6. Apply EQ to carve mid-range
7. Add saturation for presence
8. Test in mix context

### Tips
- Higher ratios create harmonic complexity
- Multiple modulators add character
- Use EQ to avoid frequency conflicts
- Layer with other bass elements

### Troubleshooting
- **Frequency Clashes**: Use EQ to separate frequencies
- **Thin Sound**: Increase modulator levels
- **Overpowering**: Reduce overall level

## Workflow 4: FM Bass with Grit

### Configuration
- **Algorithm**: 4-Operator (parallel carriers)
- **Operator A**: Sine wave, ratio 1.0, level 50%
- **Operator B**: Triangle wave, ratio 1.5, FM Level 60%
- **Operator C**: Sawtooth wave, ratio 2.0, FM Level 50%
- **Operator D**: Sine wave, ratio 3.0, FM Level 40%
- **Effects**: Distortion, compression, EQ

### Steps
1. Select Algorithm 4-Operator
2. Set Operator A: sine, ratio 1.0, level 50%
3. Set Operator B: triangle, ratio 1.5, FM Level 60%
4. Set Operator C: sawtooth, ratio 2.0, FM Level 50%
5. Set Operator D: sine, ratio 3.0, FM Level 40%
6. Add distortion for grit
7. Apply compression for consistency
8. Use EQ to shape frequency response

### Tips
- Different waveforms create unique character
- Higher ratios add upper harmonics
- Distortion enhances FM complexity
- Use compression for consistent level

### Troubleshooting
- **Too Harsh**: Reduce FM Levels
- **Lack of Definition**: Increase Operator A level
- **Frequency Buildup**: Apply surgical EQ

## Workflow 5: Bass with Movement

### Configuration
- **Algorithm**: 5-Operator (complex with feedback)
- **Operator A**: Sine wave, ratio 1.0, level 60%
- **Operator B**: Sine wave, ratio 2.0, FM Level 50%
- **Operator C**: Sine wave, ratio 3.0, FM Level 40%
- **Operator D**: Sine wave, ratio 4.0, FM Level 30%
- **Operator E**: Sine wave, ratio 5.0, FM Level 20%
- **LFO**: Slow rate, moderate depth, routing to FM Level
- **Effects**: Chorus, delay

### Steps
1. Choose Algorithm 5-Operator
2. Configure all operators with increasing ratios
3. Set moderate FM Levels for each operator
4. Configure LFO: slow rate (0.5 Hz), moderate depth
5. Route LFO to overall FM Level
6. Add chorus for width
7. Apply delay for space
8. Automate parameters for movement

### Tips
- Multiple operators create evolving textures
- LFO adds movement and interest
- Chorus widens the stereo image
- Automate parameters for dynamic changes

### Troubleshooting
- **Too Busy**: Simplify operator configuration
- **Phase Issues**: Check operator phase settings
- **CPU Heavy**: Reduce polyphony or effects

## Workflow 6: Bass for Different Genres

### Trap Bass
- **Focus**: Sub-bass with grit
- **Settings**: Fixed frequency, moderate FM, distortion
- **Processing**: Heavy compression, sidechain

### Hip-Hop Bass
- **Focus**: Warm, round low end
- **Settings**: Ratio-based, moderate FM, saturation
- **Processing**: Gentle compression, EQ

### EDM Bass
- **Focus**: Aggressive, cutting presence
- **Settings**: Complex FM, multiple operators, effects
- **Processing**: Heavy processing, stereo widening

### R&B Bass
- **Focus**: Smooth, melodic low end
- **Settings**: Simple FM, moderate modulation, glide
- **Processing**: Subtle compression, warmth

## Advanced Techniques

### Layering
- Layer Toxic Biohazard with other bass sources
- Use different frequency ranges
- Process layers separately then combine

### Automation
- Automate FM Levels for movement
- Modulate filter cutoff for expression
- Use velocity to control modulation depth

### Effects Integration
- Use distortion for harmonic enhancement
- Apply compression for consistency
- Add spatial effects for width

## Integration with Mix

### Frequency Management
- Use EQ to carve space in mix
- Avoid frequency conflicts with kick
- Create frequency separation with other bass elements

### Level Balancing
- Set appropriate levels for context
- Use compression for consistent volume
- Apply limiting if necessary

### Stereo Imaging
- Keep sub-bass mono
- Widen mid-range elements
- Use stereo effects appropriately

## Performance Considerations

### CPU Usage
- Monitor plugin load in complex projects
- Use freeze/flatten when appropriate
- Optimize algorithm complexity for performance

### Real-Time Control
- Map modulation to MIDI controllers
- Use automation for evolving sounds
- Create performance patches for live playing

## Conclusion
Toxic Biohazard's FM synthesis engine provides unparalleled control over bass sound design. By understanding FM principles and applying these workflows, producers can create professional-quality bass sounds that define their tracks and stand out in modern hip-hop and electronic music production.
```

---

## FILE: 03-Workflows\by-instrument\fm-bass-workflow.md

```markdown
# FM Bass Synthesis for R&B with Toxic Biohazard

## Overview
Toxic Biohazard's hybrid FM/subtractive synthesis capabilities make it excellent for creating authentic FM bass sounds for R&B music. This document details how to configure Toxic Biohazard for characteristic bass tones that define the genre's groove and feel.

## Pre-Processing Chain Setup

### Standard FM Bass Chain
| Plugin | Purpose | Setting Range |
|--------|---------|---------------|
| EQ | Tone shaping | High-pass 40Hz, low-pass 300Hz |
| Compression | Consistency | 4:1 ratio, fast attack/release |
| Saturation | Harmonic content | Subtle drive |
| Toxic Biohazard | Sound generation | FM synthesis configuration |

## Classic Funk Bass

### Basic Funk Bass Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 2 Square + 2 Saw | Classic funk tone |
| Matrix | Saw 2 → Square 1 (30%), Saw 4 → Square 3 (25%) | Rich harmonic content |
| Filter | LP, 4000Hz, 45% res | Bright, punchy |
| Envelope | 3/100/75/200 | Quick, punchy |
| LFO | Depth 18%, Rate 1.0Hz | Subtle movement |
| Reverb Mix | 10% | Subtle space |

#### Oscillator Configuration
- **Osc 1**: Square, carrier, full volume
- **Osc 2**: Saw, modulator, 30% into Osc 1
- **Osc 3**: Square, carrier, 70% volume
- **Osc 4**: Saw, modulator, 25% into Osc 3
- **Osc 5-6**: Off

#### Application Details
- Perfect for classic funk-influenced R&B
- Creates punchy, rhythmic bass tone
- Works well for syncopated patterns
- Maintains classic funk character

### Slap Bass Simulation
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 2 Square + 1 Saw + 1 Sine | Slap bass tone |
| Matrix | Saw 2 → Square 1 (35%), Sine 3 → Square 1 (20%) | Rich harmonic content |
| Filter | HP, 5000Hz, 50% res | Bright, percussive |
| Envelope | 1/80/80/150 | Sharp attack |
| LFO | Depth 22%, Rate 1.5Hz | Percussive shimmer |
| Reverb Mix | 5% | Minimal space |

## Modern R&B Bass

### Contemporary Bass Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 2 Saw + 1 Square + 1 Sine | Modern bass tone |
| Matrix | Square 2 → Saw 1 (35%), Sine 3 → Saw 1 (20%) | Rich harmonic content |
| Filter | LP, 4500Hz, 40% res | Balanced presence |
| Envelope | 5/150/70/300 | Balanced response |
| LFO | Depth 15%, Rate 0.8Hz | Subtle movement |
| Reverb Mix | 15% | Subtle space |

#### Oscillator Configuration
- **Osc 1**: Saw, carrier, full volume
- **Osc 2**: Square, modulator, 35% into Osc 1
- **Osc 3**: Sine, modulator, 20% into Osc 1
- **Osc 4**: Saw, carrier, 60% volume
- **Osc 5**: Square, modulator, 20% into Osc 4
- **Osc 6**: Off

#### Application Details
- Perfect for contemporary R&B
- Creates full, modern bass tone
- Works well for melodic bass lines
- Maintains modern R&B character

### Sub-Bass Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 1 Saw + 1 Square | Deep bass tone |
| Matrix | Square 2 → Saw 1 (25%) | Subtle harmonic content |
| Filter | LP, 2000Hz, 30% res | Low-end focus |
| Envelope | 10/200/65/400 | Smooth response |
| LFO | Depth 10%, Rate 0.5Hz | Gentle movement |
| Reverb Mix | 5% | Minimal space |

## Vintage R&B Bass

### Vintage Bass Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 3 Sine + 1 Saw | Vintage tone |
| Matrix | Sine 2 → Sine 1 (25%), Sine 3 → Sine 1 (20%) | Vintage character |
| Filter | LP, 3500Hz, 25% res | Warm, full |
| Envelope | 15/250/70/350 | Smooth response |
| LFO | Depth 12%, Rate 0.6Hz | Vintage modulation |
| Reverb Mix | 20% | Vintage room |

#### Oscillator Configuration
- **Osc 1**: Sine, carrier, full volume
- **Osc 2**: Sine, modulator, 25% into Osc 1
- **Osc 3**: Sine, modulator, 20% into Osc 1
- **Osc 4**: Saw, carrier, 40% volume
- **Osc 5-6**: Off

#### Application Details
- Perfect for classic soul and R&B
- Creates warm, vintage bass tone
- Works well for walking bass lines
- Maintains classic R&B character

### Moog-Style Bass
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 2 Square + 1 Sine | Moog-like tone |
| Matrix | Sine 3 → Square 1 (30%), Sine 3 → Square 2 (25%) | Analog character |
| Filter | LP, 3800Hz, 55% res | Warm, analog |
| Envelope | 8/180/72/280 | Analog response |
| LFO | Depth 16%, Rate 0.7Hz | Analog modulation |
| Reverb Mix | 15% | Analog room |

## Subgenre-Specific Applications

### Funky R&B Bass
| Element | Configuration | Application |
|---------|---------------|-------------|
| Tone | Slap bass simulation | Funky character |
| Articulation | Sharp envelope | Rhythmic precision |
| Effects | Subtle delay | Groove enhancement |

### Neo-Soul Bass
| Element | Configuration | Application |
|---------|---------------|-------------|
| Tone | Vintage bass | Organic character |
| Articulation | Smooth envelope | Smooth feel |
| Effects | Reverb + Chorus | Vintage character |

### Contemporary R&B Bass
| Element | Configuration | Application |
|---------|---------------|-------------|
| Tone | Modern bass | Polished sound |
| Articulation | Balanced envelope | Professional feel |
| Effects | EQ + Compression | Radio-ready |

## Advanced Techniques

### Dynamic Performance
| Technique | Setup | Application |
|-----------|-------|-------------|
| Velocity Sensitivity | Adjust amplitude envelopes | Expressive playing |
| Aftertouch | Modulate filter cutoff | Dynamic expression |
| Pitch Bend | Fine adjustment | Expressive bends |

### Multi-Layer Bass
| Layer | Configuration | Application |
|-------|---------------|-------------|
| Fundamental | Sub-bass configuration | Low-end foundation |
| Harmonics | Funk bass configuration | Mid-range character |
| Blend | Volume balancing | Rich texture |

## Integration with R&B Effects Chain

### Pre-Toxic Processing
- [ ] Apply high-pass filter (30-40Hz)
- [ ] Use EQ to shape tone
- [ ] Apply compression for consistency
- [ ] Set appropriate gain staging

### Post-Toxic Processing
- [ ] Apply multiband compression if needed
- [ ] Add subtle stereo enhancement
- [ ] Use saturation for additional harmonics
- [ ] Final EQ adjustments if needed

## Troubleshooting Common Issues

### Over-Saturation
- [ ] Reduce FM modulation
- [ ] Lower resonance
- [ ] Use fewer oscillators
- [ ] Apply EQ after Toxic

### Loss of Low-End Definition
- [ ] Increase filter cutoff frequency
- [ ] Reduce high-frequency FM
- [ ] Apply high-pass filtering
- [ ] Check for frequency buildup

### Harsh Mid-Range
- [ ] Reduce resonance
- [ ] Lower FM modulation
- [ ] Apply mid-range cut after
- [ ] Reduce LFO depth

## Expert Tips for Funky R&B Bass

### Creative Applications
- Use FM matrix for evolving textures
- Apply different envelopes to different oscillators
- Create vintage sounds with proper FM ratios
- Experiment with oscillator sync

### Performance Techniques
- Use velocity for dynamic expression
- Apply aftertouch for subtle modulation
- Use pitch bend for expressive playing
- Layer different sounds for complexity

### Genre-Specific Considerations
- Funky R&B: Prioritize rhythmic precision
- Neo-Soul: Emphasize organic feel
- Contemporary R&B: Maintain polished sound
- Vintage R&B: Focus on authentic character

## Frequency-Specific Applications

### Sub-Bass Enhancement (20-80Hz)
- Use simple oscillator configuration
- Focus on fundamental frequencies
- Apply sparingly to avoid muddiness
- Create solid foundation

### Low-Mid Enhancement (80-250Hz)
- Use vintage oscillator configuration
- Perfect for warmth and body
- Creates the classic "full" bass sound
- Essential for R&B foundation

### Mid-Range Enhancement (250Hz-2kHz)
- Use funk oscillator configuration
- Enhances note clarity
- Helps bass cut through dense mixes
- Critical for rhythmic precision

### High-Mid Enhancement (2-5kHz)
- Use modern oscillator configuration
- Adds definition to bass notes
- Helps with note recognition
- Important for contemporary R&B

## Success Metrics

Your FM bass processing is successful when:
- [ ] The bass sits well in the mix
- [ ] Low-end foundation is maintained
- [ ] The enhancement matches the subgenre
- [ ] Dynamics are maintained appropriately
- [ ] The processing adds character without artifacts

## Comparison with Traditional Funky Bass

### Traditional Approach
- Vintage bass synthesizers
- Analog preamps and compressors
- Tape compression and saturation

### Modern Approach with Toxic Biohazard
- Authentic FM synthesis
- Consistent results across sessions
- CPU-efficient processing
- Reproducible settings

Both approaches can be combined for the best of both worlds.

---

## Related Documentation
- [Toxic Biohazard Presets INDEX](../02-Data/presets/INDEX.md)
- [R&B Sub-Genre Workflows](./rnb-subgenre-toxic.md)
- [FM Keys Workflow](./fm-keys-workflow.md)
- [FM Synthesis Fundamentals](../04-Reference/fm-synthesis-fundamentals.md)

---

**Document Version:** 1.0  
**Last Updated:** 2026-02-03  
**Focus:** FM Bass Synthesis for R&B  
**Plugin:** Toxic Biohazard
```

---

## FILE: 03-Workflows\by-instrument\fm-keys-workflow.md

```markdown
# FM Keys for R&B with Toxic Biohazard

## Overview
Toxic Biohazard's hybrid FM/subtractive synthesis capabilities make it excellent for creating authentic jazzy FM keys for R&B music. This document details how to configure Toxic Biohazard for characteristic FM keyboard tones that define the genre.

## Pre-Processing Chain Setup

### Standard FM Keys Chain
| Plugin | Purpose | Setting Range |
|--------|---------|---------------|
| EQ | Tone shaping | High-pass 80Hz, presence boost 3-5kHz |
| Compression | Consistency | 3:1 ratio, medium attack/release |
| Chorus | Width enhancement | Subtle modulation |
| Toxic Biohazard | Sound generation | FM synthesis configuration |

## Rhodes-Style Electric Piano

### Basic Rhodes Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 2 Sine + 2 Saw | Classic Rhodes tone |
| Matrix | Saw 2 → Sine 1 (25%), Saw 4 → Sine 3 (20%) | Vintage character |
| Filter | LP, 3000Hz, 25% res | Warm, vintage character |
| Envelope | 10/200/70/500 | Medium attack/release |
| LFO | Depth 15%, Rate 0.8Hz | Subtle modulation |
| Reverb Mix | 35% | Vintage room sound |

#### Oscillator Configuration
- **Osc 1**: Sine, carrier, full volume
- **Osc 2**: Saw, modulator, 25% into Osc 1
- **Osc 3**: Sine, carrier, 60% volume
- **Osc 4**: Saw, modulator, 20% into Osc 3
- **Osc 5-6**: Off

#### Application Details
- Perfect for neo-soul and jazzy R&B
- Creates authentic vintage electric piano tone
- Works well for chord comping and melodic lines
- Maintains classic Rhodes character

### Bright Rhodes Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 2 Sine + 2 Saw + 1 Square | Brighter tone |
| Matrix | Saw 2 → Sine 1 (30%), Square 5 → Saw 4 (25%) | Rich harmonic content |
| Filter | LP, 4000Hz, 30% res | Bright, present |
| Envelope | 5/150/75/400 | Quick attack |
| LFO | Depth 18%, Rate 1.0Hz | Enhanced modulation |
| Reverb Mix | 30% | Bright room |

## Wurlitzer-Style Electric Piano

### Basic Wurlitzer Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 3 Sine + 1 Square | Classic Wurlitzer tone |
| Matrix | Sine 2 → Sine 1 (30%), Sine 3 → Sine 1 (25%) | Vintage character |
| Filter | BP, 3500Hz, 35% res | Bright, bell-like |
| Envelope | 8/100/72/300 | Quick attack |
| LFO | Depth 20%, Rate 1.2Hz | Bell-like shimmer |
| Reverb Mix | 40% | Bright hall |

#### Oscillator Configuration
- **Osc 1**: Sine, carrier, full volume
- **Osc 2**: Sine, modulator, 30% into Osc 1
- **Osc 3**: Sine, modulator, 25% into Osc 1
- **Osc 4**: Square, carrier, 40% volume
- **Osc 5-6**: Off

#### Application Details
- Perfect for funk-influenced R&B
- Creates bright, bell-like electric piano tone
- Works well for rhythmic comping
- Maintains classic Wurlitzer character

## Hammond-Style Organ

### Basic Hammond Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 4 Sine + 1 Saw | Classic organ tone |
| Matrix | Sine 2 → Sine 1 (20%), Sine 3 → Sine 1 (18%), Sine 4 → Sine 1 (15%) | Vintage character |
| Filter | LP, 2800Hz, 20% res | Warm, full |
| Envelope | 5/100/75/200 | Quick response |
| LFO | Depth 12%, Rate 0.6Hz | Subtle modulation |
| Reverb Mix | 30% | Vintage room |

#### Oscillator Configuration
- **Osc 1**: Sine, carrier, full volume
- **Osc 2**: Sine, modulator, 20% into Osc 1
- **Osc 3**: Sine, modulator, 18% into Osc 1
- **Osc 4**: Sine, modulator, 15% into Osc 1
- **Osc 5**: Saw, carrier, 30% volume
- **Osc 6**: Off

#### Application Details
- Perfect for gospel-influenced R&B
- Creates authentic Hammond organ tone
- Works well with drawbar simulation
- Maintains classic organ character

### Drawbar Organ Configuration
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 6 Sine (complex) | Drawbar simulation |
| Matrix | Complex inter-oscillator modulation | Rich harmonic content |
| Filter | LP, 3200Hz, 25% res | Balanced tone |
| Envelope | 3/80/78/150 | Responsive attack |
| LFO | Depth 16%, Rate 0.9Hz | Drawbar character |
| Reverb Mix | 35% | Rotary speaker simulation |

## Jazz Piano Simulation

### Acoustic Piano Emulation
| Parameter | Setting | Application |
|-----------|---------|-------------|
| Oscillators | 3 Sine + 2 Saw | Piano-like harmonics |
| Matrix | Saw 2 → Sine 1 (25%), Saw 4 → Sine 3 (20%) | Piano character |
| Filter | LP, 4500Hz, 30% res | Bright, articulate |
| Envelope | 2/50/80/100 | Quick, articulate |
| LFO | Depth 10%, Rate 0.5Hz | Subtle movement |
| Reverb Mix | 45% | Concert hall |

#### Oscillator Configuration
- **Osc 1**: Sine, carrier, full volume
- **Osc 2**: Saw, modulator, 25% into Osc 1
- **Osc 3**: Sine, carrier, 70% volume
- **Osc 4**: Saw, modulator, 20% into Osc 3
- **Osc 5**: Sine, modulator, 10% into Osc 1
- **Osc 6**: Off

#### Application Details
- Perfect for sophisticated R&B
- Creates piano-like articulation
- Works well for complex chord voicings
- Maintains acoustic piano character

## Subgenre-Specific Applications

### Neo-Soul Keys
| Element | Configuration | Application |
|---------|---------------|-------------|
| Electric Piano | Rhodes-style, warm | Classic neo-soul sound |
| Organ | Hammond-style, subtle | Gospel influence |
| Effects | Reverb + Chorus | Vintage character |

### Funky R&B Keys
| Element | Configuration | Application |
|---------|---------------|-------------|
| Electric Piano | Wurlitzer-style, bright | Funky character |
| Organ | Drawbar simulation | Rhythmic playing |
| Effects | Wah + Drive | Funky texture |

### Smooth R&B Keys
| Element | Configuration | Application |
|---------|---------------|-------------|
| Electric Piano | Bright Rhodes | Polished sound |
| Organ | Basic Hammond | Clean foundation |
| Effects | Reverb only | Smooth character |

## Advanced Techniques

### Dynamic Performance
| Technique | Setup | Application |
|-----------|-------|-------------|
| Velocity Sensitivity | Adjust amplitude envelopes | Expressive playing |
| Aftertouch | Modulate filter cutoff | Dynamic expression |
| Pitch Bend | Fine adjustment | Expressive bends |

### Multi-Timbral Setup
| Layer | Configuration | Application |
|-------|---------------|-------------|
| Upper Layer | Bright Rhodes | Melodic lines |
| Lower Layer | Hammond Organ | Foundation |
| Blend | Volume balancing | Rich texture |

## Integration with R&B Effects Chain

### Pre-Toxic Processing
- [ ] Apply high-pass filter (80-100Hz)
- [ ] Use gentle EQ to shape tone
- [ ] Apply compression for consistency
- [ ] Set appropriate gain staging

### Post-Toxic Processing
- [ ] Add reverb for space (Hall/Room)
- [ ] Apply chorus for width
- [ ] Use rotary speaker simulation for organ
- [ ] Final EQ adjustments if needed

## Troubleshooting Common Issues

### Harsh High Frequencies
- [ ] Reduce filter cutoff frequency
- [ ] Lower resonance
- [ ] Reduce FM modulation
- [ ] Apply high-frequency roll-off after

### Lack of Character
- [ ] Increase FM modulation
- [ ] Add more oscillators
- [ ] Apply appropriate LFO settings
- [ ] Increase LFO depth

### Muddy Mid-Range
- [ ] Increase filter cutoff frequency
- [ ] Reduce mid-frequency FM
- [ ] Apply EQ after Toxic
- [ ] Check for frequency buildup

## Expert Tips for Jazzy R&B Keys

### Creative Applications
- Use FM matrix for evolving textures
- Apply different envelopes to different oscillators
- Create vintage sounds with proper FM ratios
- Experiment with oscillator sync

### Performance Techniques
- Use velocity for dynamic expression
- Apply aftertouch for subtle modulation
- Use pitch bend for expressive playing
- Layer different sounds for complexity

### Genre-Specific Considerations
- Neo-Soul: Prioritize vintage character
- Funky R&B: Emphasize rhythmic elements
- Smooth R&B: Maintain polished sound
- Jazz-influenced: Focus on harmonic richness

## Success Metrics

Your FM keys processing is successful when:
- [ ] The sound resembles authentic vintage keyboards
- [ ] The tone fits the R&B subgenre
- [ ] The sound sits well in the mix
- [ ] The harmonic content is rich but not harsh
- [ ] The processing adds character without artifacts

## Comparison with Traditional Jazzy Keys

### Traditional Approach
- Vintage electric pianos and organs
- Analog preamps and compressors
- Tape echo and spring reverb

### Modern Approach with Toxic Biohazard
- Authentic FM synthesis
- Consistent results across sessions
- CPU-efficient processing
- Reproducible settings

Both approaches can be combined for the best of both worlds.

---

## Related Documentation
- [Toxic Biohazard Presets INDEX](../02-Data/presets/INDEX.md)
- [R&B Sub-Genre Workflows](./rnb-subgenre-toxic.md)
- [FM Bass Workflow](./fm-bass-workflow.md)
- [FM Synthesis Fundamentals](../04-Reference/fm-synthesis-fundamentals.md)

---

**Document Version:** 1.0  
**Last Updated:** 2026-02-03  
**Focus:** FM Keys for R&B  
**Plugin:** Toxic Biohazard
```

---

## FILE: 03-Workflows\by-instrument\instrument-specific-workflows.md

```markdown
# Toxic Biohazard - Instrument-Specific Workflows for Hip-Hop/R&B

## Overview

This document details how to apply Toxic Biohazard's hybrid FM/subtractive synthesis capabilities specifically to different instruments commonly used in hip-hop and R&B production. Each instrument has unique requirements for enhancement while maintaining its characteristic sound.

## Drums

### Kick Drum Enhancement
| Parameter | Setting | Application | Subgenre |
|-----------|---------|-------------|----------|
| Oscillators | 1 Sine + 1 Saw | Fundamental + Harmonics | All |
| Matrix | Saw → Sine (20%) | Harmonic enhancement | All |
| Filter | LP, 100Hz, 40% res | Low-end focus | All |
| Envelope | 1/50/0/100 | Punchy attack | All |
| LFO | Depth 0% | No modulation | All |

#### Application Notes:
- Use sine for fundamental frequency
- Add sawtooth for harmonic content
- Apply low-pass filter to focus low-end
- Fast attack for punch

### Snare Drum Enhancement
| Parameter | Setting | Application | Subgenre |
|-----------|---------|-------------|----------|
| Oscillators | 1 Square + 1 Noise | Body + Snap | All |
| Matrix | Square 1 → Square 2 (30%) | Body enhancement | All |
| Filter | BP, 2000Hz, 60% res | Mid-range focus | All |
| Envelope | 1/100/0/300 | Sharp attack | All |
| LFO | Depth 15% | Texture modulation | All |

#### Application Notes:
- Use square for body
- Add noise for snap
- Bandpass filter for snare character
- Fast attack for snare snap

### Hi-Hat Enhancement
| Parameter | Setting | Application | Subgenre |
|-----------|---------|-------------|----------|
| Oscillators | 1 Saw + 1 Noise | Brightness + Texture | All |
| Matrix | Saw → Noise (10%) | Brightness enhancement | All |
| Filter | HP, 8000Hz, 30% res | High-end focus | All |
| Envelope | 1/50/0/200 | Quick decay | All |
| LFO | Depth 20% | Sizzle modulation | All |

#### Application Notes:
- Use sawtooth for brightness
- Add noise for texture
- High-pass filter for hi-hat character
- Quick decay for hi-hat sound

### 808 Enhancement
| Parameter | Setting | Application | Subgenre |
|-----------|---------|-------------|----------|
| Oscillators | 2 Sine + 1 Saw | Sub-bass + Harmonics | Hip-Hop/Trap |
| Matrix | Sine 2 → Sine 1 (40%) | Harmonic enhancement | Hip-Hop/Trap |
| Filter | LP, 200Hz, 20% res | Sub-bass focus | Hip-Hop/Trap |
| Envelope | 5/300/70/500 | Sustained | Hip-Hop/Trap |
| LFO | Depth 10% | Subtle movement | Hip-Hop/Trap |

#### Application Notes:
- Use multiple sine waves for sub-bass
- Add sawtooth for harmonic content
- Low-pass filter to focus sub-bass
- Sustained envelope for 808 character

## Keys & Synth Instruments

### Piano Enhancement
| Parameter | Setting | Application | Subgenre |
|-----------|---------|-------------|----------|
| Oscillators | 2 Sine + 1 Saw | Fundamental + Harmonics | R&B/Neo-Soul |
| Matrix | Sine 2 → Sine 1 (15%) | Harmonic enhancement | R&B/Neo-Soul |
| Filter | LP, 5000Hz, 25% res | Brightness control | R&B/Neo-Soul |
| Envelope | 20/400/70/800 | Expressive | R&B/Neo-Soul |
| LFO | Depth 12%, Rate 0.8Hz | Vintage modulation | R&B/Neo-Soul |

#### Application Notes:
- Use sine waves for fundamental
- Add sawtooth for brightness
- Apply moderate filtering
- Use LFO for vintage character

### Rhodes/Electric Piano Enhancement
| Parameter | Setting | Application | Subgenre |
|-----------|---------|-------------|----------|
| Oscillators | 3 Sine + 1 Saw | Vintage harmonics | R&B/Neo-Soul |
| Matrix | Sine 2 → Sine 1 (25%), Saw 4 → Sine 1 (15%) | Vintage character | R&B/Neo-Soul |
| Filter | LP, 4000Hz, 30% res | Vintage tone | R&B/Neo-Soul |
| Envelope | 30/500/75/1000 | Smooth response | R&B/Neo-Soul |
| LFO | Depth 18%, Rate 1.2Hz | Chorus effect | R&B/Neo-Soul |

#### Application Notes:
- Use multiple sine waves for vintage character
- Add sawtooth for brightness
- Apply filtering for vintage tone
- Use LFO for chorus effect

### Synth Lead Enhancement
| Parameter | Setting | Application | Subgenre |
|-----------|---------|-------------|----------|
| Oscillators | 2 Saw + 2 Square + 1 Sine | Rich harmonics | All |
| Matrix | Square 2 → Saw 1 (35%), Sine 5 → Saw 1 (20%) | Harmonic complexity | All |
| Filter | LP, 6000Hz, 35% res | Brightness control | All |
| Envelope | 10/200/75/400 | Expressive | All |
| LFO | Depth 25%, Rate 1.5Hz | Movement | All |

#### Application Notes:
- Use saw and square for rich harmonics
- Apply FM for complexity
- Moderate filtering for brightness
- Use LFO for movement

### Pad Enhancement
| Parameter | Setting | Application | Subgenre |
|-----------|---------|-------------|----------|
| Oscillators | 4 Sine + 1 Triangle | Smooth harmonics | R&B/Atmospheric |
| Matrix | Complex inter-osc modulation (20-30%) | Evolving textures | R&B/Atmospheric |
| Filter | LP, 3500Hz, 20% res | Warmth control | R&B/Atmospheric |
| Envelope | 200/600/80/1200 | Slow evolution | R&B/Atmospheric |
| LFO | Depth 30%, Rate 0.5Hz | Texture movement | R&B/Atmospheric |

#### Application Notes:
- Use multiple sine waves for smoothness
- Apply complex FM for evolving textures
- Apply filtering for warmth
- Slow envelopes for evolution
- LFO for texture movement

## Bass Instruments

### Bass Guitar Enhancement
| Parameter | Setting | Application | Subgenre |
|-----------|---------|-------------|----------|
| Oscillators | 2 Sine + 1 Saw | Fundamental + Harmonics | All |
| Matrix | Sine 2 → Sine 1 (30%) | Harmonic enhancement | All |
| Filter | LP, 3000Hz, 25% res | Low-mid focus | All |
| Envelope | 10/150/70/300 | Punchy response | All |
| LFO | Depth 8% | Subtle movement | All |

#### Application Notes:
- Use sine waves for fundamental
- Add sawtooth for harmonic content
- Apply filtering for low-mid focus
- Punchy envelope for bass response

### Synth Bass Enhancement
| Parameter | Setting | Application | Subgenre |
|-----------|---------|-------------|----------|
| Oscillators | 2 Saw + 1 Square + 1 Sine | Full harmonic spectrum | Hip-Hop/R&B |
| Matrix | Square 2 → Saw 1 (40%), Sine 4 → Saw 1 (20%) | Harmonic saturation | Hip-Hop/R&B |
| Filter | LP, 4000Hz, 45% res | Bass emphasis | Hip-Hop/R&B |
| Envelope | 5/100/70/200 | Punchy attack | Hip-Hop/R&B |
| LFO | Depth 15% | Subtle movement | Hip-Hop/R&B |

#### Application Notes:
- Use rich harmonic content for full bass
- Apply FM for saturation
- Quick attack for punchy bass
- Moderate filtering for bass emphasis

### Sub-Bass Enhancement
| Parameter | Setting | Application | Subgenre |
|-----------|---------|-------------|----------|
| Oscillators | 2 Sine | Pure fundamentals | All |
| Matrix | Sine 2 → Sine 1 (10%) | Subtle enhancement | All |
| Filter | LP, 150Hz, 15% res | Sub-bass focus | All |
| Envelope | 10/200/80/400 | Sustained | All |
| LFO | Depth 5% | Minimal movement | All |

#### Application Notes:
- Use sine waves for pure fundamentals
- Minimal FM for subtle enhancement
- Low-pass filter to focus sub-bass
- Sustained envelope for sub-bass character

## Strings & Orchestral

### Violin/Strings Enhancement
| Parameter | Setting | Application | Subgenre |
|-----------|---------|-------------|----------|
| Oscillators | 3 Sine + 1 Triangle | Smooth harmonics | R&B/Soulful |
| Matrix | Sine 2 → Sine 1 (20%), Triangle 4 → Sine 1 (15%) | String character | R&B/Soulful |
| Filter | LP, 4500Hz, 25% res | String warmth | R&B/Soulful |
| Envelope | 100/500/80/1000 | Smooth response | R&B/Soulful |
| LFO | Depth 20%, Rate 0.7Hz | Vibrato | R&B/Soulful |

#### Application Notes:
- Use sine waves for smoothness
- Add triangle for character
- Apply filtering for warmth
- Use LFO for vibrato

### Brass Enhancement
| Parameter | Setting | Application | Subgenre |
|-----------|---------|-------------|----------|
| Oscillators | 2 Saw + 2 Square | Rich harmonics | R&B/Jazzy |
| Matrix | Square 2 → Saw 1 (30%), Square 4 → Saw 3 (25%) | Brass character | R&B/Jazzy |
| Filter | LP, 5500Hz, 35% res | Brightness control | R&B/Jazzy |
| Envelope | 20/300/75/600 | Expressive response | R&B/Jazzy |
| LFO | Depth 15%, Rate 1.0Hz | Subtle modulation | R&B/Jazzy |

#### Application Notes:
- Use saw and square for rich harmonics
- Apply FM for brass character
- Apply filtering for brightness
- Expressive envelope for brass response

## Vocal Elements

### Harmony Enhancement
| Parameter | Setting | Application | Subgenre |
|-----------|---------|-------------|----------|
| Oscillators | 2 Sine + 1 Triangle | Smooth harmonics | R&B/Soulful |
| Matrix | Triangle 3 → Sine 1 (15%) | Harmonic enhancement | R&B/Soulful |
| Filter | LP, 4000Hz, 20% res | Smoothness | R&B/Soulful |
| Envelope | 50/400/70/800 | Smooth response | R&B/Soulful |
| LFO | Depth 10%, Rate 0.6Hz | Subtle modulation | R&B/Soulful |

#### Application Notes:
- Use sine and triangle for smoothness
- Apply minimal FM for enhancement
- Apply filtering for smoothness
- Smooth envelope for harmony response

### Ad-Lib Enhancement
| Parameter | Setting | Application | Subgenre |
|-----------|---------|-------------|----------|
| Oscillators | 1 Saw + 1 Square + 1 Sine | Bright harmonics | Hip-Hop/Contemporary |
| Matrix | Square 2 → Saw 1 (25%) | Harmonic enhancement | Hip-Hop/Contemporary |
| Filter | LP, 6000Hz, 30% res | Brightness | Hip-Hop/Contemporary |
| Envelope | 15/200/75/300 | Expressive response | Hip-Hop/Contemporary |
| LFO | Depth 20%, Rate 1.2Hz | Movement | Hip-Hop/Contemporary |

#### Application Notes:
- Use saw and square for brightness
- Apply FM for harmonic enhancement
- Apply filtering for brightness
- Expressive envelope for ad-lib response

## Advanced Instrument-Specific Techniques

### Parallel Processing by Instrument
| Instrument | Technique | Application |
|------------|-----------|-------------|
| Kick | 70% dry, 30% processed | Maintain punch while adding harmonics |
| Snare | 60% dry, 40% processed | Preserve transients while adding snap |
| 808 | 75% dry, 25% processed | Maintain fundamental while adding harmonics |
| Piano | 80% dry, 20% processed | Preserve dynamics while adding character |

### Multi-Oscillator Application
| Instrument | Low-Freq Osc | Mid-Freq Osc | High-Freq Osc | Application |
|------------|--------------|--------------|---------------|-------------|
| Bass | Sine (fundamental) | Saw (harmonics) | Square (saturation) | Full bass enhancement |
| Keys | Sine (fundamental) | Triangle (warmth) | Saw (brightness) | Balanced enhancement |
| Pads | Sine (foundation) | Triangle (texture) | Sine (movement) | Smooth enhancement |

## Troubleshooting by Instrument

### Common Issues and Solutions
| Instrument | Issue | Solution |
|------------|-------|----------|
| All | Harshness | Reduce FM modulation, use sine waves |
| Bass | Muddiness | Reduce low-frequency FM, use LP filter |
| Vocals | Loss of dynamics | Use parallel processing, lower settings |
| Drums | Loss of punch | Use fast envelopes, minimal FM |

## Success Metrics by Instrument

### Evaluation Criteria
- [ ] The instrument sits well in the mix
- [ ] The enhancement matches the subgenre
- [ ] Dynamics are maintained appropriately
- [ ] The processing adds character without artifacts
- [ ] The instrument retains its fundamental character

## Integration with Instrument-Specific Chains

### Pre-Toxic Processing
- [ ] Apply instrument-specific EQ
- [ ] Use appropriate compression
- [ ] Set proper gain staging

### Post-Toxic Processing
- [ ] Add instrument-specific effects (reverb, delay)
- [ ] Final EQ adjustments if needed
- [ ] Apply limiting if necessary

---

## Related Documentation
- [Toxic Biohazard Presets INDEX](../02-Data/presets/INDEX.md)
- [R&B Sub-Genre Workflows](../by-goal/rnb-subgenre-toxic.md)
- [Hip-Hop Sub-Genre Workflows](../by-goal/hop-hop-subgenre-fm.md)
- [FM Synthesis Fundamentals](../../04-Reference/fm-synthesis-fundamentals.md)

---

**Document Version:** 1.0
**Last Updated:** 2026-02-03
**Focus:** Instrument-Specific Applications
**Plugin:** Toxic Biohazard
```

---

## FILE: 03-Workflows\by-instrument\lead-workflows.md

```markdown
# Toxic Biohazard - Lead Workflows

## Overview
Toxic Biohazard excels at creating cutting-edge lead sounds through its FM synthesis capabilities. This workflow focuses on designing leads for hip-hop, trap, and EDM production with maximum presence and character.

## Workflow 1: Classic FM Lead

### Configuration
- **Algorithm**: 2-Operator (clean FM lead)
- **Operator A**: Sine wave, ratio 1.0, level 80%
- **Operator B**: Sine wave, ratio 3.0, FM Level 60%
- **Envelope**: Fast attack, moderate decay, high sustain, moderate release
- **Effects**: Chorus, delay, reverb

### Steps
1. Select Algorithm 2-Operator
2. Set Operator A: sine, ratio 1.0, level 80%
3. Set Operator B: sine, ratio 3.0, FM Level 60%
4. Create envelope: 2ms attack, 200ms decay, 80% sustain, 300ms release
5. Add chorus for width
6. Apply delay for space
7. Use reverb for depth
8. Test with different note ranges

### Tips
- Ratio 3.0 creates harmonic complexity
- High sustain for sustained notes
- Chorus adds stereo width
- Delay creates rhythmic interest

### Troubleshooting
- **Harsh Top End**: Reduce Operator B level
- **Weak Presence**: Increase Operator A level
- **Tuning Issues**: Check ratio settings

## Workflow 2: Aggressive Lead

### Configuration
- **Algorithm**: 3-Operator (complex FM lead)
- **Operator A**: Sawtooth wave, ratio 1.0, level 70%
- **Operator B**: Triangle wave, ratio 2.0, FM Level 70%
- **Operator C**: Sine wave, ratio 4.0, FM Level 50%
- **Envelope**: Fast attack, short decay, high sustain, short release
- **Effects**: Distortion, compression, EQ

### Steps
1. Choose Algorithm 3-Operator
2. Configure Operator A: sawtooth, ratio 1.0, level 70%
3. Configure Operator B: triangle, ratio 2.0, FM Level 70%
4. Configure Operator C: sine, ratio 4.0, FM Level 50%
5. Create envelope: 1ms attack, 100ms decay, 90% sustain, 200ms release
6. Add distortion for aggression
7. Apply compression for consistency
8. Use EQ to cut harsh frequencies

### Tips
- Sawtooth provides rich harmonics
- Triangle adds character
- Multiple ratios create complexity
- Distortion enhances presence

### Troubleshooting
- **Too Harsh**: Reduce FM Levels
- **Lack of Clarity**: Use EQ to carve space
- **Overpowering**: Lower overall level

## Workflow 3: Plucky Lead

### Configuration
- **Algorithm**: 2-Operator (plucky FM)
- **Operator A**: Sine wave, ratio 1.0, level 60%
- **Operator B**: Sine wave, ratio 1.5, FM Level 80%
- **Envelope**: Fast attack, fast decay, no sustain, short release
- **Effects**: Filter, reverb, delay

### Steps
1. Select Algorithm 2-Operator
2. Set Operator A: sine, ratio 1.0, level 60%
3. Set Operator B: sine, ratio 1.5, FM Level 80%
4. Create envelope: 1ms attack, 150ms decay, 0% sustain, 100ms release
5. Apply low-pass filter
6. Add reverb for space
7. Use delay for rhythmic interest
8. Test with different velocities

### Tips
- Ratio 1.5 creates fifth interval
- Fast envelope creates pluck
- Filter adds character
- Velocity sensitivity for expression

### Troubleshooting
- **Too Short**: Increase decay time
- **Too Long**: Decrease decay time
- **Weak Attack**: Increase Operator B level

## Workflow 4: Evolving Lead

### Configuration
- **Algorithm**: 4-Operator (complex evolving lead)
- **Operator A**: Sine wave, ratio 1.0, level 50%
- **Operator B**: Sine wave, ratio 2.0, FM Level 60%
- **Operator C**: Sine wave, ratio 3.0, FM Level 50%
- **Operator D**: Sine wave, ratio 4.0, FM Level 40%
- **LFO**: Slow rate, moderate depth, routing to FM Level
- **Envelope**: Slow attack, slow decay, high sustain, slow release
- **Effects**: Phaser, reverb, delay

### Steps
1. Choose Algorithm 4-Operator
2. Configure all operators with increasing ratios
3. Set moderate FM Levels for each operator
4. Configure LFO: slow rate (0.3 Hz), moderate depth
5. Route LFO to overall FM Level
6. Create envelope: 500ms attack, 1s decay, 80% sustain, 1s release
7. Add phaser for movement
8. Use reverb and delay for space

### Tips
- Multiple operators create evolving textures
- LFO adds movement and interest
- Slow envelope creates atmospheric feel
- Phaser enhances modulation

### Troubleshooting
- **Too Busy**: Simplify operator configuration
- **Phase Issues**: Check operator phase settings
- **CPU Heavy**: Reduce polyphony or effects

## Workflow 5: Glitch Lead

### Configuration
- **Algorithm**: 3-Operator (glitchy FM)
- **Operator A**: Noise wave, ratio 1.0, level 40%
- **Operator B**: Sine wave, ratio 1.25, FM Level 90%
- **Operator C**: Triangle wave, ratio 1.5, FM Level 80%
- **Envelope**: Fast attack, fast decay, no sustain, short release
- **Effects**: Bitcrusher, delay, reverb

### Steps
1. Select Algorithm 3-Operator
2. Set Operator A: noise, ratio 1.0, level 40%
3. Set Operator B: sine, ratio 1.25, FM Level 90%
4. Set Operator C: triangle, ratio 1.5, FM Level 80%
5. Create envelope: 1ms attack, 100ms decay, 0% sustain, 150ms release
6. Add bitcrusher for digital character
7. Apply delay for rhythmic interest
8. Use reverb for space

### Tips
- Noise adds glitch character
- Higher ratios create metallic sounds
- Bitcrusher enhances digital feel
- Fast envelope creates percussive hits

### Troubleshooting
- **Too Noisy**: Reduce Operator A level
- **Lack of Definition**: Increase Operator B level
- **Overpowering**: Lower overall level

## Workflow 6: Lead for Different Genres

### Trap Lead
- **Focus**: Aggressive, cutting presence
- **Settings**: Complex FM, multiple operators, distortion
- **Processing**: Heavy compression, stereo widening

### Hip-Hop Lead
- **Focus**: Warm, melodic character
- **Settings**: Simple FM, moderate modulation, chorus
- **Processing**: Gentle compression, EQ

### EDM Lead
- **Focus**: Massive, stadium-filling sound
- **Settings**: Multiple operators, effects, automation
- **Processing**: Heavy processing, sidechain

### R&B Lead
- **Focus**: Smooth, expressive character
- **Settings**: Simple FM, glide, reverb
- **Processing**: Subtle compression, warmth

## Advanced Techniques

### Layering
- Layer Toxic Biohazard with other lead sources
- Use different frequency ranges
- Process layers separately then combine

### Automation
- Automate FM Levels for movement
- Modulate filter cutoff for expression
- Use velocity to control modulation depth

### Effects Integration
- Use distortion for harmonic enhancement
- Apply compression for consistency
- Add spatial effects for width

## Integration with Mix

### Frequency Management
- Use EQ to carve space in mix
- Avoid frequency conflicts with other elements
- Create frequency separation with other lead sounds

### Level Balancing
- Set appropriate levels for context
- Use compression for consistent volume
- Apply limiting if necessary

### Stereo Imaging
- Widen stereo elements appropriately
- Keep low frequencies mono
- Use stereo effects for width

## Performance Considerations

### CPU Usage
- Monitor plugin load in complex projects
- Use freeze/flatten when appropriate
- Optimize algorithm complexity for performance

### Real-Time Control
- Map modulation to MIDI controllers
- Use automation for evolving sounds
- Create performance patches for live playing

## Conclusion
Toxic Biohazard's FM synthesis engine provides unparalleled control over lead sound design. By understanding FM principles and applying these workflows, producers can create professional-quality lead sounds that cut through the mix and define their tracks in modern hip-hop and electronic music production.
```

---

## FILE: 03-Workflows\by-instrument\pad-texture-workflows.md

```markdown
# Toxic Biohazard - Pad/Texture Workflows

## Overview
Toxic Biohazard excels at creating atmospheric pads and evolving textures through its FM synthesis capabilities. This workflow focuses on designing pads and textures for hip-hop, trap, and EDM production with maximum depth and character.

## Workflow 1: Ambient Pad

### Configuration
- **Algorithm**: 4-Operator (rich ambient pad)
- **Operator A**: Sine wave, ratio 1.0, level 40%
- **Operator B**: Sine wave, ratio 2.0, FM Level 50%
- **Operator C**: Sine wave, ratio 3.0, FM Level 40%
- **Operator D**: Sine wave, ratio 4.0, FM Level 30%
- **Envelope**: Slow attack, slow decay, high sustain, slow release
- **LFO**: Very slow rate, moderate depth, routing to FM Level and filter cutoff
- **Effects**: Reverb, delay, chorus

### Steps
1. Choose Algorithm 4-Operator
2. Configure all operators with increasing ratios
3. Set moderate FM Levels for each operator
4. Create envelope: 1s attack, 2s decay, 80% sustain, 3s release
5. Configure LFO: very slow rate (0.1 Hz), moderate depth
6. Route LFO to FM Level and filter cutoff
7. Add long reverb for space
8. Apply delay for depth
9. Use chorus for width

### Tips
- Multiple operators create rich harmonic content
- Very slow LFO creates subtle movement
- Long envelopes create atmospheric feel
- Effects add depth and space

### Troubleshooting
- **Too Busy**: Simplify operator configuration
- **Phase Issues**: Check operator phase settings
- **CPU Heavy**: Reduce polyphony or effects

## Workflow 2: Evolving Texture

### Configuration
- **Algorithm**: 5-Operator (complex evolving texture)
- **Operator A**: Sine wave, ratio 1.0, level 30%
- **Operator B**: Triangle wave, ratio 1.5, FM Level 60%
- **Operator C**: Sawtooth wave, ratio 2.0, FM Level 50%
- **Operator D**: Sine wave, ratio 2.5, FM Level 40%
- **Operator E**: Sine wave, ratio 3.0, FM Level 30%
- **LFO1**: Slow rate, routing to FM Level
- **LFO2**: Very slow rate, routing to filter cutoff
- **Envelope**: Slow attack, slow decay, high sustain, slow release
- **Effects**: Phaser, reverb, delay

### Steps
1. Select Algorithm 5-Operator
2. Configure operators with varied waveforms and ratios
3. Set moderate FM Levels for each operator
4. Configure LFO1: slow rate (0.5 Hz), route to FM Level
5. Configure LFO2: very slow rate (0.05 Hz), route to filter cutoff
6. Create envelope: 2s attack, 3s decay, 70% sustain, 4s release
7. Add phaser for movement
8. Use long reverb for space
9. Apply delay for depth

### Tips
- Varied waveforms create complex textures
- Multiple LFOs add independent movement
- Slow envelopes create evolving feel
- Phaser enhances modulation

### Troubleshooting
- **Too Complex**: Reduce number of active operators
- **Lack of Movement**: Increase LFO depth
- **Overpowering**: Lower overall level

## Workflow 3: Warm Pad

### Configuration
- **Algorithm**: 3-Operator (warm FM pad)
- **Operator A**: Sine wave, ratio 1.0, level 50%
- **Operator B**: Sine wave, ratio 1.25, FM Level 40%
- **Operator C**: Sine wave, ratio 1.5, FM Level 30%
- **Envelope**: Moderate attack, moderate decay, high sustain, moderate release
- **Filter**: Low-pass filter with moderate cutoff and resonance
- **Effects**: Saturation, reverb, chorus

### Steps
1. Choose Algorithm 3-Operator
2. Set Operator A: sine, ratio 1.0, level 50%
3. Set Operator B: sine, ratio 1.25, FM Level 40%
4. Set Operator C: sine, ratio 1.5, FM Level 30%
5. Apply low-pass filter: cutoff 2 kHz, resonance 20%
6. Create envelope: 300ms attack, 500ms decay, 80% sustain, 1s release
7. Add subtle saturation for warmth
8. Use reverb for space
9. Apply chorus for width

### Tips
- Close ratios create harmonic richness
- Filter shapes the overall tone
- Saturation adds warmth and character
- Moderate effects for subtle enhancement

### Troubleshooting
- **Too Bright**: Lower filter cutoff
- **Lack of Warmth**: Increase saturation
- **Phase Issues**: Check operator phase settings

## Workflow 4: Dark Atmospheric

### Configuration
- **Algorithm**: 4-Operator (dark atmospheric pad)
- **Operator A**: Sine wave, ratio 0.5, level 40%
- **Operator B**: Sine wave, ratio 1.0, FM Level 50%
- **Operator C**: Sine wave, ratio 1.5, FM Level 40%
- **Operator D**: Sine wave, ratio 2.0, FM Level 30%
- **Envelope**: Very slow attack, very slow decay, high sustain, very slow release
- **Filter**: Low-pass filter with low cutoff and high resonance
- **Effects**: Reverb, delay, distortion

### Steps
1. Select Algorithm 4-Operator
2. Set Operator A: sine, ratio 0.5, level 40%
3. Set Operator B: sine, ratio 1.0, FM Level 50%
4. Set Operator C: sine, ratio 1.5, FM Level 40%
5. Set Operator D: sine, ratio 2.0, FM Level 30%
6. Apply low-pass filter: cutoff 500 Hz, resonance 60%
7. Create envelope: 2s attack, 3s decay, 70% sustain, 4s release
8. Add subtle distortion for edge
9. Use long reverb for space
10. Apply delay for depth

### Tips
- Sub-audio ratios create dark character
- High resonance adds edge
- Very slow envelopes create atmospheric feel
- Distortion enhances dark character

### Troubleshooting
- **Too Dark**: Raise filter cutoff
- **Lack of Movement**: Add LFO modulation
- **Overpowering**: Lower overall level

## Workflow 5: Glitch Texture

### Configuration
- **Algorithm**: 3-Operator (glitchy texture)
- **Operator A**: Noise wave, ratio 1.0, level 30%
- **Operator B**: Sine wave, ratio 1.25, FM Level 80%
- **Operator C**: Triangle wave, ratio 1.5, FM Level 70%
- **Envelope**: Fast attack, fast decay, no sustain, short release
- **LFO**: Random rate, routing to FM Level and pan
- **Effects**: Bitcrusher, delay, reverb

### Steps
1. Select Algorithm 3-Operator
2. Set Operator A: noise, ratio 1.0, level 30%
3. Set Operator B: sine, ratio 1.25, FM Level 80%
4. Set Operator C: triangle, ratio 1.5, FM Level 70%
5. Create envelope: 1ms attack, 200ms decay, 0% sustain, 300ms release
6. Configure LFO: random rate, route to FM Level and pan
7. Add bitcrusher for digital character
8. Apply delay for rhythmic interest
9. Use reverb for space

### Tips
- Noise adds glitch character
- Random LFO creates unpredictable movement
- Bitcrusher enhances digital feel
- Fast envelope creates percussive hits

### Troubleshooting
- **Too Noisy**: Reduce Operator A level
- **Lack of Definition**: Increase Operator B level
- **Overpowering**: Lower overall level

## Workflow 6: Pad for Different Genres

### Ambient/Electronic
- **Focus**: Atmospheric, evolving textures
- **Settings**: Multiple operators, slow envelopes, effects
- **Processing**: Heavy reverb, delay, modulation

### Hip-Hop/R&B
- **Focus**: Warm, smooth pads
- **Settings**: Simple FM, moderate modulation, chorus
- **Processing**: Subtle compression, warmth

### Trap/EDM
- **Focus**: Massive, cutting pads
- **Settings**: Complex FM, effects, automation
- **Processing**: Heavy processing, sidechain

### Experimental
- **Focus**: Unique, unconventional textures
- **Settings**: Extreme FM, noise, effects
- **Processing**: Creative processing, modulation

## Advanced Techniques

### Layering
- Layer Toxic Biohazard with other pad sources
- Use different frequency ranges
- Process layers separately then combine

### Automation
- Automate FM Levels for movement
- Modulate filter cutoff for expression
- Use velocity to control modulation depth

### Effects Integration
- Use reverb for space and depth
- Apply delay for rhythmic interest
- Add chorus for width

## Integration with Mix

### Frequency Management
- Use EQ to carve space in mix
- Avoid frequency conflicts with other elements
- Create frequency separation with other pad sounds

### Level Balancing
- Set appropriate levels for context
- Use compression for consistent volume
- Apply limiting if necessary

### Stereo Imaging
- Widen stereo elements appropriately
- Keep low frequencies mono
- Use stereo effects for width

## Performance Considerations

### CPU Usage
- Monitor plugin load in complex projects
- Use freeze/flatten when appropriate
- Optimize algorithm complexity for performance

### Real-Time Control
- Map modulation to MIDI controllers
- Use automation for evolving sounds
- Create performance patches for live playing

## Conclusion
Toxic Biohazard's FM synthesis engine provides unparalleled control over pad and texture sound design. By understanding FM principles and applying these workflows, producers can create professional-quality atmospheric sounds that add depth and character to their tracks in modern hip-hop and electronic music production.
```

---

## FILE: 03-Workflows\by-instrument\workflows-INDEX.md

```markdown
# Toxic Biohazard By-Instrument Workflows INDEX

## Bass Workflows

| File | Focus | Character |
|------|-------|-----------|
| [bass-dark-trap.md](bass-dark-trap.md) | Dark Trap Bass | Moody, punchy |
| [bass-aggressive-growl.md](bass-aggressive-growl.md) | Aggressive Growl Bass | Energetic, intense |

## Lead Workflows

| File | Focus | Character |
|------|-------|-----------|
| [lead-bright-fm.md](lead-bright-fm.md) | Bright FM Lead | Electric, energetic |
| [lead-punchy-fm.md](lead-punchy-fm.md) | Punchy FM Lead | Funky, rhythmic |

## Pad/Texture Workflows

| File | Focus | Character |
|------|-------|-----------|
| [pad-warm-fm.md](pad-warm-fm.md) | Warm FM Pad | Smooth, moody |
| [texture-metallic.md](texture-metallic.md) | Metallic Texture | Electric, modern |

## Quick Reference

| Instrument | Recommended Workflow |
|------------|--------------------|
| 808/Bass | Dark Trap Bass |
| Growl Bass | Aggressive Growl Bass |
| Festival Lead | Bright FM Lead |
| Hip-Hop Lead | Punchy FM Lead |
| Pad/Atmosphere | Warm FM Pad |
| Unique Texture | Metallic Texture |

## Related Documentation

- [Toxic Biohazard Presets INDEX](../02-Data/presets/INDEX.md)
- [Toxic Biohazard By-Goal Workflows](./by-goal/INDEX.md)
- [FM Synthesis Archetypes](../02-Data/presets/fm-synthesis-archetypes.md)
- [FM Gain Staging Rules](../02-Data/rules/fm-gain-staging-rules.md)

```

---

## FILE: 04-Reference\custom-wav-import-guide.md

```markdown
# Custom WAV Import Guide (Toxic Biohazard)

## The Spectrum Analysis Tool
Toxic Biohazard allows you to use your own audio samples as oscillator sources.

## How to Import
1. **Open Spectrum View:** Click the waveform icon in the Oscillator section.
2. **Load Sample:** Drag and drop a WAV or AIFF file into the waveform display area.
3. **Analysis:** The plugin analyzes the harmonic content of the sample and converts it into a single-cycle wavetable.
4. **Pitch Alignment:** Ensure your sample is a single note (preferably C) for the most accurate pitch tracking.

## Best Uses
- **Vocal Fragments:** Import a "vocal synth" feel.
- **Classic Synths:** Import a cycle from a hardware synth to give Toxic an analog soul.
- **Complex Noise:** Import noise loops to create unique percussive textures via the FM Matrix.

## Pitfall
Long samples will be truncated. The engine only looks for a small window of the audio to create the recurring wave shape.

```

---

## FILE: 04-Reference\technical-reference.md

```markdown
# Toxic Biohazard - Technical Reference

## Plugin Architecture

### Main Interface
- **Header**: Plugin name, preset management, global controls
- **Display**: Oscilloscope, spectrum analyzer, waveform viewer
- **Operator Section**: 8 operators with individual controls
- **Algorithm Matrix**: Visual representation of operator routing
- **Modulation Matrix**: LFO and envelope routing controls
- **Effects Section**: Built-in effects processing
- **Master Section**: Global volume, tuning, and output controls

## Operator Controls

### Basic Parameters
- **Waveform**: Sine, triangle, sawtooth, square, noise
- **Ratio**: Frequency multiplier relative to note pitch
- **Fixed**: Absolute frequency independent of pitch
- **Level**: Output volume
- **Pan**: Stereo positioning
- **Fine**: Detuning adjustment

### Envelope Parameters
- **Attack**: Time to reach peak level
- **Decay**: Time to reach sustain level
- **Sustain**: Level during key hold
- **Release**: Time to fade to silence
- **Velocity**: Velocity sensitivity

### Modulation Parameters
- **FM Level**: Frequency modulation depth
- **AM Level**: Amplitude modulation depth
- **Sync**: Hard/soft sync mode
- **Phase**: Initial phase offset
- **Key Scale**: Key tracking amount

## Algorithm Matrix

### Algorithm Types
- **1-Operator**: Simple sine wave
- **2-Operator**: Basic FM with one modulator
- **3-Operator**: Complex FM with multiple modulators
- **4-Operator**: Rich FM with parallel carriers
- **5-Operator**: Advanced FM with feedback loops
- **6-Operator**: Complex FM with multiple routings
- **7-Operator**: Maximum complexity FM
- **8-Operator**: Full FM synthesis capabilities

### Matrix Visualization
- **Green**: Carrier operators
- **Blue**: Modulator operators
- **Gray**: Inactive operators
- **Lines**: Modulation connections
- **Numbers**: Operator indices

## Modulation Matrix

### LFO Sources
- **LFO1**: Slow modulation for vibrato, tremolo
- **LFO2**: Fast modulation for FM depth
- **LFO3**: Random modulation for texture
- **LFO4**: Step sequencer for rhythmic modulation

### Envelope Sources
- **Env1**: Amplitude envelope
- **Env2**: FM depth envelope
- **Env3**: Filter envelope
- **Env4**: Pitch envelope

### Modulation Destinations
- **Frequency**: Operator pitch
- **Level**: Operator volume
- **Pan**: Stereo position
- **FM Depth**: Modulation index
- **Filter Cutoff**: Filter frequency
- **Resonance**: Filter resonance

## Effects Processing

### Built-in Effects
- **Chorus**: Stereo widening effect
- **Phaser**: Phase shifting effect
- **Delay**: Echo effect with feedback
- **Reverb**: Spatial simulation
- **Distortion**: Harmonic saturation
- **EQ**: 3-band equalization

### Effect Parameters
- **Chorus**: Rate, depth, feedback, mix
- **Phaser**: Rate, depth, feedback, stages
- **Delay**: Time, feedback, filter, mix
- **Reverb**: Size, decay, damping, mix
- **Distortion**: Drive, tone, output
- **EQ**: Low, mid, high gain and frequency

## Master Controls

### Global Parameters
- **Volume**: Master output level
- **Tuning**: Global pitch adjustment
- **Portamento**: Glide time between notes
- **Unison**: Voice layering for thickness
- **Polyphony**: Maximum simultaneous voices

### Performance Controls
- **Legato**: Continuous note playing
- **Glide**: Pitch bending between notes
- **Mono**: Single voice mode
- **Retrigger**: Envelope retriggering
- **Priority**: Note priority mode

## MIDI Implementation

### Control Change Messages
- **CC1**: Modulation wheel
- **CC7**: Volume
- **CC10**: Pan
- **CC64**: Sustain pedal
- **CC91**: Reverb send
- **CC93**: Chorus send

### Pitch Bend
- **Range**: Pitch bend range in semitones
- **Sensitivity**: Pitch bend response curve
- **Reset**: Return to center position

### Aftertouch
- **Channel**: Channel pressure
- **Poly**: Polyphonic aftertouch
- **Routing**: Aftertouch destination mapping

## Voice Architecture

### Voice Components
- **Oscillators**: 8 FM operators per voice
- **Filters**: Multi-mode filter per voice
- **Envelopes**: 4 envelopes per voice
- **LFOs**: 4 LFOs per voice
- **Effects**: Shared effects per instance

### Voice Modes
- **Poly**: Multiple simultaneous voices
- **Mono**: Single voice at a time
- **Legato**: Continuous note playing
- **Retrigger**: Envelope reset on each note

## CPU and Memory Usage

### Performance Optimization
- **Operator Count**: Reduce active operators
- **Algorithm Complexity**: Simplify routing
- **Effects Usage**: Disable unused effects
- **Polyphony Limit**: Set appropriate voice count
- **Sample Rate**: Match project settings

### Memory Requirements
- **Preset Storage**: Preset data size
- **Audio Buffer**: Real-time processing needs
- **Plugin Instance**: Memory per instance

## Preset Management

### Preset Categories
- **Bass**: Sub-bass, mid-bass, lead bass
- **Lead**: Synth leads, plucks, stabs
- **Pad**: Atmospheric, evolving textures
- **Percussion**: Drums, effects, hits
- **FX**: Sound effects, transitions

### Preset Operations
- **Load**: Load preset from library
- **Save**: Save current settings as preset
- **Copy**: Copy preset to clipboard
- **Paste**: Paste preset from clipboard
- **Delete**: Remove preset from library

## Integration with FL Studio

### Channel Rack Integration
- **Pattern**: Pattern-based sequencing
- **Automation**: Parameter automation clips
- **Effects**: Insert effects chain
- **Mixer**: Channel routing and mixing

### Piano Roll Integration
- **Notes**: Note input and editing
- **Velocity**: Note velocity editing
- **Automation**: Parameter automation
- **Controller**: MIDI controller data

### Mixer Integration
- **Insert**: Channel insert slot
- **Send**: Auxiliary send routing
- **Routing**: Audio routing options
- **Processing**: Insert effects chain

## Troubleshooting

### Common Issues
- **No Sound**: Check audio routing and levels
- **Clipping**: Reduce output levels
- **Tuning Issues**: Check ratio and fixed frequency settings
- **CPU Overload**: Reduce polyphony or effects
- **MIDI Problems**: Check MIDI routing and channels

### Performance Tips
- **Freeze**: Render to audio when possible
- **Optimize**: Use simpler algorithms for complex sounds
- **Monitor**: Watch CPU usage in performance mode
- **Buffer**: Adjust audio buffer size for stability

## Advanced Features

### Expert Mode
- **Hidden Parameters**: Access advanced controls
- **Custom Algorithms**: Create user algorithms
- **Modulation Routing**: Advanced modulation matrix
- **Voice Editing**: Per-voice parameter control

### Scripting Support
- **MIDI Scripts**: Custom MIDI processing
- **Parameter Scripts**: Automated parameter control
- **Event Scripts**: Custom event handling
- **UI Scripts**: Custom interface elements

## Version History

### Current Version
- **Version**: Latest release version
- **Date**: Release date
- **Features**: New features and improvements
- **Bug Fixes**: Resolved issues

### Previous Versions
- **Version History**: List of previous releases
- **Change Log**: Detailed change information
- **Compatibility**: Version compatibility notes

## Technical Specifications

### Audio Specifications
- **Sample Rate**: 44.1kHz - 192kHz
- **Bit Depth**: 32-bit floating point
- **Latency**: Low latency mode available
- **Processing**: Real-time audio processing

### System Requirements
- **OS**: Windows 10 or later
- **CPU**: Intel Core i3 or equivalent
- **RAM**: 4GB minimum, 8GB recommended
- **Disk Space**: 100MB for installation

## Support and Documentation

### Resources
- **Manual**: Comprehensive user manual
- **Tutorials**: Video and text tutorials
- **Forum**: User community forum
- **Support**: Technical support contact

### Learning Materials
- **Videos**: Tutorial and demonstration videos
- **Articles**: In-depth technical articles
- **Examples**: Preset examples and templates
- **Workshops**: Online workshops and classes

## Conclusion
Toxic Biohazard provides a comprehensive FM synthesis environment with advanced features for professional sound design. Understanding the technical architecture enables users to maximize the plugin's capabilities and create unique, high-quality sounds for modern music production.
```

---

