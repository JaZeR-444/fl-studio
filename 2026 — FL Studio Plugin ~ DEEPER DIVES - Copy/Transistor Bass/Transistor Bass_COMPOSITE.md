# Transistor Bass - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Transistor Bass - Acid Bassline Synthesizer

`\`\`
████████╗██████╗  █████╗ ███╗   ██╗███████╗██╗███████╗████████╗ ██████╗ ██████╗ 
╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██║██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗
   ██║   ██████╔╝███████║██╔██╗ ██║███████╗██║███████╗   ██║   ██║   ██║██████╔╝
   ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██║╚════██║   ██║   ██║   ██║██╔══██╗
   ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║███████║   ██║   ╚██████╔╝██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝

██████╗  █████╗ ███████╗███████╗
██╔══██╗██╔══██╗██╔════╝██╔════╝
██████╔╝███████║███████╗███████╗
██╔══██╗██╔══██║╚════██║╚════██║
██████╔╝██║  ██║███████║███████║
╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
`\`\`

**Plugin Type:** Monophonic Bass Synth / TB-303 Emulation
**Category:** Generator / Acid / Vintage
**Official Manual:** [Image-Line Transistor Bass Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Transistor%20Bass.htm)

---

## 🎯 What is Transistor Bass?

Transistor Bass is a dedicated subtractive synthesizer designed to meticulously emulate the legendary **Roland TB-303™** Bassline. It captures the iconic "Acid" sound with its squelchy resonant filter, slide/accent behavior, and built-in distortion. Unlike the original hardware, it features modern enhancements like waveform blending (Square to Saw), an internal sequencer with pattern triggering, and high-quality integrated effects.

**Key Capabilities:**
- **303 Emulation:** Authentic Cutoff, Resonance, and Envelope Modulation.
- **Waveform Blending:** Smoothly morph between Square and Sawtooth waves.
- **Integrated Sequencer:** 128 programs containing both synth settings and patterns.
- **Rat-Style Distortion:** Built-in overdrive based on the classic guitar pedal.
- **Accent & Slide:** Authentic velocity-based accents (>100) and note overlaps.
- **High-Pass Filter:** Adjustable low-end roll-off (fixed on the original).
- **LFO Modulation:** Built-in LFO for Pulse Width and other parameters.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **tb-303-classic-controls.md**
3. Create **parameter-cheat-sheet.md**
4. Load a factory pattern, crank the Resonance, and sweep the Cutoff.

### For Acid House Producers:
1. Study **sequencer-pattern-triggering.md**
2. Review **creating-squelchy-acid-leads.md**
3. Learn **accent-and-slide-programming.md**

### For Sound Designers:
1. Study **distortion-pedal-settings.md**
2. Review **waveform-morphing-textures.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Cutoff:** Filter frequency.
  - **Resonance:** Peak feedback (The squelch).
  - **Env Mod:** Amount of envelope affecting cutoff.
  - **Decay:** Speed of filter closure.
  - **Accent:** Intensity of accented notes.
  - **Distortion:** Drive and Tone.

- [ ] **sequencer-interface-guide.md**
  - Pattern slots.
  - Note, Slide, and Accent buttons.

#### 02-Data/parameters/
- [ ] **transistor-bass-specs.json**
  `\`\`json
  {
    "plugin_name": "Transistor Bass",
    "emulation": "TB-303",
    "waveforms": ["Saw", "Square", "Morph"],
    "accent_velocity_threshold": 100
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **authentic-acid-sequence.md**
  - Setting up a pattern in the internal sequencer.
  - Adding "Slides" between notes.
  - Using velocity > 100 for "Accents."
  - Dialing in the "Rat" distortion.

- [ ] **modern-hybrid-acid.md**
  - Blending 50% Saw and 50% Square.
  - Using the HP filter to clear sub-space.
  - Automating the LFO on Pulse Width.

- [ ] **piano-roll-control-setup.md**
  - Disabling the internal sequencer.
  - How to achieve slides and accents in the FL Piano Roll.

#### 03-Workflows/by-context/
- [ ] **techno-bass-rumble-source.md**
- [ ] **psytrance-squelch-stabs.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **tb-303-circuit-oddities.md**
  - Why the original filter had a "non-linear" slope.
  - How Transistor Bass emulates the power supply sag.

---

## 🔬 Research Framework

### Phase 1: The Squelch (Week 1)
**Goal:** Pure Acid

**Tasks:**
1. Initialize a patch
2. Experiment with "Resonance" and "Env Mod" interaction
3. Test the "Saw" vs "Square" character
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How does the "HP" knob affect the sub-bass?
- Can I use an external distortion plugin instead?

### Phase 2: The Grid (Week 2)
**Goal:** Pattern Flow

**Tasks:**
1. Program a 1 bar loop
2. Add accents and slides
3. Trigger different patterns using MIDI notes
4. Create sequencer-interface-guide.md

---

## 📊 Plugin Specifications to Document

### Engine
- Polyphony (Monophonic)
- Number of Patterns (128)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why isn't it sliding? (Make sure notes overlap in the sequencer or Piano Roll).
2. How to get the "screaming" tone? (High Resonance + High Distortion Drive).

---

## 🔗 Cross-Reference with Other Plugins

Transistor Bass is often used with:
- **Fruity Delay 3** (Ping-pong acid)
- **Distructor** (Alternative distortion flavors)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Transistor Bass/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── sequencer-interface-guide.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── transistor-bass-specs.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── authentic-acid-sequence.md
│   │   └── modern-hybrid-acid.md
│
└── 04-Reference/
    └── tb-303-circuit-oddities.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Program a classic acid bassline with correct slide/accent behavior
- [ ] Explain the benefit of waveform blending vs the original hardware
- [ ] Use the internal distortion to create a "screaming" resonant lead
- [ ] Successfully trigger pattern changes via MIDI notes in the Piano Roll

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\tb303-emulation-logic.md

```markdown
# Concept: TB-303 Emulation Logic (Transistor Bass)

Tags: acid | bass | classic | emulation

## What It Is
Transistor Bass is a high-fidelity emulation of the **Roland TB-303**, the synthesizer that defined Acid House and later influenced G-Funk and modern electronic basslines.

## Why It Matters
- **The Filter Character:** The 303 filter is a "18dB/oct" diode ladder. It has a specific "squelch" and "rubber band" feel that modern digital filters struggle to replicate.
- **The Sequencer Interaction:** The 303 isn't just a synth; it's a sequencer. The interaction between **Accents** and **Slides** is what creates the "acid" feel.
- **Urban Utility:** While built for Techno, its ability to "slide" (portamento) makes it perfect for funky G-Funk basslines or dark, moving Trap backgrounds.

## How to Hear It
- **The "Squelch":** Crank the **Resonance**. You will hear a chirping sound that follows the pitch of the note.
- **The "Growl":** Increase the **Distortion**. The TB-303 circuit is famous for how it sounds when pushed through a distortion pedal.

## Typical Mistakes
- **Ignoring the Accent:** If every note is the same volume, the 303 sounds like a boring toy. You *must* use Accents to open the filter rhythmically.
- **Too Many Slides:** If everything slides, the bassline loses its rhythmic "anchor." Use slides sparingly for maximum impact.

## What to Adjust First
1. **Cutoff:** This is your primary "Energy" knob.
2. **Decay:** This determines if the bass is "plucky" (short) or "liquid" (long).

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Transistor Bass - Parameter Cheat Sheet

**Plugin Type:** Subtractive Synthesizer (TB-303 Emulation)
**Category:** Bass Synth / Acid Bassline Generator
**Official Manual:** [Transistor Bass](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Transistor%20Bass.htm)

---

## 🎚️ Main Synthesis Parameters

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Waveform** | Square ↔ Saw | Blends between square and sawtooth waves | Start with full square for classic acid |
| **Cutoff** | 0-100% | Filter cutoff frequency | Sweep this for the signature TB-303 squelch |
| **Resonance** | 0-100% | Filter resonance (Q factor) | High values create screaming acid sounds |
| **Env Mod** | 0-100% | Filter envelope modulation depth | Higher = more envelope movement on cutoff |
| **Decay** | 0-100% | Filter envelope decay time | Short decay = plucky, long decay = sweeping |
| **Accent** | 0-100% | Boosts cutoff, resonance, and volume | Use sparingly for emphasis on key notes |
| **Tuning** | -1 to +1 octave | Master pitch adjustment | Fine-tune to other instruments |
| **Volume** | 0-100% | Output level (pre-distortion) | Set before distortion to control drive amount |

---

## 🎛️ Advanced Tweaks Section

| Parameter | Range | Function | When to Use |
|-----------|-------|----------|-------------|
| **HP (High-Pass)** | 0-100% | High-pass filter for bass character | Remove excessive sub-bass rumble |
| **Min Envelope Decay** | 0-100% | Critical for accent circuit behavior | Affects how accents respond dynamically |
| **Filter Key Follow** | 0-100% | Makes cutoff track keyboard pitch | Add brightness to higher notes (not in original TB-303) |
| **LFO → PW** | -100 to +100% | LFO modulation of pulse width | Create evolving timbres |
| **LFO Rate** | 0-100% | LFO oscillation speed | Sync to BPM for rhythmic modulation |
| **PW (Pulse Width)** | 0-100% | Direct pulse width control | 50% = square wave, adjust for tone |
| **VCA Smooth** | 0-100% | Removes attack/release clicks | Increase if you hear pops on note triggers |

---

## 🔧 Synthesis Engine Options

| Engine | Description | Use Case |
|--------|-------------|----------|
| **V1 Legacy** | Original algorithm | Preserves compatibility with old projects |
| **V2 Extended** | Extended cutoff range | More extreme filter sweeps |
| **V2 TB303** | Most accurate emulation | Closest to hardware TB-303 behavior |

**Recommendation:** Use **V2 TB303** for authentic acid bass, **V2 Extended** for modern production flexibility.

---

## 🎹 Sequencer Parameters

| Control | Function | Shortcut |
|---------|----------|----------|
| **Length** | 1-16 steps | Adjust pattern length |
| **Gate** | On/Off per step | **G** key |
| **Slide** | Portamento between notes | **S** key |
| **Accent** | Emphasis on step | **A** key |
| **Octave** | 0-10 range | Set note pitch range |
| **Gate Length** | Note duration | Shorter = staccato, longer = legato |
| **Swing/Shuffle** | Groove timing | Add swing for less robotic feel |
| **Transpose** | Via MIDI Channel 13 | Change key without reprogramming |

**Navigation:** Arrow keys to move between steps

---

## 🎸 Effects Section

### Distortion (Pro Co Rat Emulation)
| Parameter | Function |
|-----------|----------|
| **Drive** | Distortion amount |
| **Tone** | Brightness/darkness of distortion |
| **Mix** | Dry/wet balance |

**Tip:** Inspired by Hardfloor's setup - use heavy drive for aggressive acid

### Delay
| Parameter | Function |
|-----------|----------|
| **Time** | Delay length (BPM sync available) |
| **Feedback** | Number of repeats |
| **Mix** | Delay level |

### Reverb (Based on FL Reeverb 2)
| Parameter | Function |
|-----------|----------|
| **Size** | Room size simulation |
| **Damping** | High-frequency absorption |
| **Predelay Feedback** | Echo before reverb tail |
| **Mix** | Reverb level |

---

## 📊 Program System

- **128 Programs** available (each links a patch + sequence)
- **Edit Buffer System:** Prevents accidental overwrite
  - **Read:** Load program into edit buffer
  - **Write:** Save edit buffer to program slot
- **Autofollow Mode:** MIDI notes automatically trigger programs

---

## 🎹 Piano Roll Integration

When **Sequencer Mode** is deselected:

| Feature | How to Use |
|---------|------------|
| **Portamento/Slide** | Overlap notes in piano roll |
| **Accent** | Set velocity ≥ 86% (220/255) |
| **Transpose** | Use color group 13 for sequence transposition |

---

## 🎯 Quick Start Workflow

### Classic Acid Bass in 30 Seconds
1. **Engine:** Select **V2 TB303**
2. **Waveform:** Full **Square**
3. **Cutoff:** Start at **30%**
4. **Resonance:** Set to **70%**
5. **Env Mod:** Set to **80%**
6. **Decay:** Set to **40%**
7. **Sequencer:** Program 16-step pattern with slides and accents
8. **Distortion:** Drive to **50%**, Tone to **60%**

### Deep Sub Bass
1. **Waveform:** Full **Sawtooth**
2. **Cutoff:** Set to **20%**
3. **Resonance:** Keep low at **10%**
4. **HP Filter:** Reduce to **0%** for maximum sub
5. **Effects:** Keep dry (no distortion/reverb)

---

## ⚡ Pro Tips

1. **Accent Circuit:** The accent parameter simultaneously boosts cutoff, resonance, AND volume - use strategically
2. **Slide Technique:** Overlapping notes creates portamento/glide between pitches - essential for acid lines
3. **Edit Buffer Safety:** Always **Read** before making major changes to preserve original
4. **Multi-Pattern Sharing:** Use same patch across multiple programs for different melodies with identical timbre
5. **BPM Sync Everything:** Sync LFO and Delay to project tempo for tight groove integration

---

## 🔗 Related Plugins

- **BooBass** - Alternative subtractive bass synth
- **Sawer** - Advanced subtractive synthesis
- **Sytrus** - FM-based bass synthesis
- **Fruity DX10** - Another FM option for bass

---

**Last Updated:** February 3, 2026
**Status:** ⭐ HIGH PRIORITY - Essential reference material

```

---

## FILE: 01-Learning\Quick-Reference\quickstart-guide.md

```markdown
# Transistor Bass Quick Start Guide

## What is Transistor Bass?
Transistor Bass is a TB-303 inspired synthesizer plugin that creates iconic acid bass sounds and sequences.

## 5-Minute Setup
1. Load Transistor Bass on a mixer channel
2. Start with the "Acid Init" preset
3. Draw a simple pattern in the piano roll
4. Enable accent and slide for classic acid sound
5. Add distortion for extra bite

## Essential Controls
- **Tuning**: Fine-tune bass pitch
- **Cutoff**: Filter frequency (main acid control)
- **Resonance**: Filter scream amount
- **Env Mod**: Filter envelope depth
- **Decay**: Note length (short = staccato)
- **Accent**: Emphasis on notes
- **Slide**: Note glide effect

## Quick Patterns
- Basic 4/4 pattern: C1-C1-G1-G1
- Acid line: C1-E1-G1-E1-G1-E1-C1
- House bass: A1-A1-D1-D1-G1-G1-D1-D1

## Pro Tips
- Use accent on every 4th beat
- Slide from G to C for classic drops
- Combine with sub-bass for weight
- Automate cutoff for movement
```

---

## FILE: 02-Data\parameters\transistor-bass-params.json

```json
{
  "$schema": "./schema.json",
  "plugin": {
    "name": "Transistor Bass",
    "version": "2.x",
    "category": "Instrument",
    "type": "Subtractive Synthesizer",
    "emulates": "Roland TB-303",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Transistor%20Bass.htm"
  },
  "parameters": {
    "synthesis": [
      {
        "id": "waveform",
        "name": "Waveform",
        "type": "slider",
        "range": "Square to Sawtooth",
        "default": "Square",
        "description": "Blends between square and sawtooth oscillator waves",
        "midiCC": null
      },
      {
        "id": "cutoff",
        "name": "Cutoff",
        "type": "slider",
        "range": "0-100%",
        "unit": "%",
        "description": "Filter cutoff frequency - the heart of the acid sound",
        "automatable": true,
        "midiCC": 1
      },
      {
        "id": "resonance",
        "name": "Resonance",
        "type": "slider",
        "range": "0-100%",
        "unit": "%",
        "description": "Filter resonance (Q factor) - creates the screaming acid character",
        "automatable": true,
        "sweetSpot": "65-80%"
      },
      {
        "id": "envMod",
        "name": "Env Mod",
        "type": "slider",
        "range": "0-100%",
        "unit": "%",
        "description": "Filter envelope modulation depth",
        "sweetSpot": "70-85%"
      },
      {
        "id": "decay",
        "name": "Decay",
        "type": "slider",
        "range": "0-100%",
        "unit": "%",
        "description": "Filter envelope decay time",
        "note": "Short = plucky, Long = sweeping"
      },
      {
        "id": "accent",
        "name": "Accent",
        "type": "slider",
        "range": "0-100%",
        "unit": "%",
        "description": "Simultaneously boosts cutoff, resonance, and volume",
        "warning": "Use sparingly for emphasis"
      },
      {
        "id": "tuning",
        "name": "Tuning",
        "type": "slider",
        "range": "-1 to +1 octave",
        "default": "0",
        "description": "Master pitch adjustment"
      },
      {
        "id": "volume",
        "name": "Volume",
        "type": "slider",
        "range": "0-100%",
        "unit": "%",
        "description": "Output level pre-distortion"
      }
    ],
    "advancedTweaks": [
      {
        "id": "hp",
        "name": "HP (High-Pass)",
        "type": "slider",
        "range": "0-100%",
        "description": "High-pass filter for bass character adjustment"
      },
      {
        "id": "minEnvDecay",
        "name": "Min Envelope Decay",
        "type": "slider",
        "range": "0-100%",
        "description": "Critical parameter affecting accent circuit behavior"
      },
      {
        "id": "filterKeyFollow",
        "name": "Filter Key Follow",
        "type": "slider",
        "range": "0-100%",
        "description": "Makes cutoff frequency track keyboard pitch (not in original TB-303)"
      },
      {
        "id": "lfoToPw",
        "name": "LFO → PW",
        "type": "slider",
        "range": "-100 to +100%",
        "description": "LFO modulation of pulse width"
      },
      {
        "id": "lfoRate",
        "name": "LFO Rate",
        "type": "slider",
        "range": "0-100%",
        "description": "LFO oscillation speed",
        "bpmSync": true
      },
      {
        "id": "pulseWidth",
        "name": "PW (Pulse Width)",
        "type": "slider",
        "range": "0-100%",
        "description": "Absolute pulse width setting",
        "note": "50% = square wave"
      },
      {
        "id": "vcaSmooth",
        "name": "VCA Smooth",
        "type": "slider",
        "range": "0-100%",
        "description": "Removes attack/release clicks when increased"
      }
    ],
    "effects": {
      "distortion": [
        {
          "id": "distDrive",
          "name": "Drive",
          "type": "slider",
          "description": "Distortion amount (Pro Co Rat emulation)",
          "sweetSpot": "45-60%"
        },
        {
          "id": "distTone",
          "name": "Tone",
          "type": "slider",
          "description": "Brightness/darkness of distortion"
        },
        {
          "id": "distMix",
          "name": "Mix",
          "type": "slider",
          "description": "Dry/wet balance"
        }
      ],
      "delay": [
        {
          "id": "delayTime",
          "name": "Time",
          "type": "slider",
          "bpmSync": true,
          "description": "Delay length"
        },
        {
          "id": "delayFeedback",
          "name": "Feedback",
          "type": "slider",
          "description": "Number of repeats"
        },
        {
          "id": "delayMix",
          "name": "Mix",
          "type": "slider",
          "description": "Delay level"
        }
      ],
      "reverb": [
        {
          "id": "reverbSize",
          "name": "Size",
          "type": "slider",
          "description": "Room size simulation (based on FL Reeverb 2)"
        },
        {
          "id": "reverbDamping",
          "name": "Damping",
          "type": "slider",
          "description": "High-frequency absorption"
        },
        {
          "id": "reverbPredelayFeedback",
          "name": "Predelay Feedback",
          "type": "slider",
          "description": "Echo before reverb tail"
        },
        {
          "id": "reverbMix",
          "name": "Mix",
          "type": "slider",
          "description": "Reverb level"
        }
      ]
    },
    "sequencer": {
      "steps": 16,
      "resolution": "1/16th note",
      "lengthRange": "1-16 steps",
      "controls": [
        {
          "id": "gate",
          "name": "Gate",
          "shortcut": "G",
          "description": "Note on/off per step"
        },
        {
          "id": "slide",
          "name": "Slide",
          "shortcut": "S",
          "description": "Portamento between notes"
        },
        {
          "id": "accent",
          "name": "Accent",
          "shortcut": "A",
          "description": "Emphasis on step"
        }
      ],
      "parameters": [
        {
          "id": "gateLength",
          "name": "Gate Length",
          "description": "Note duration"
        },
        {
          "id": "swing",
          "name": "Swing/Shuffle",
          "description": "Groove timing adjustment"
        },
        {
          "id": "octave",
          "name": "Octave",
          "range": "0-10",
          "description": "Pitch range selection"
        }
      ],
      "transpose": "Via MIDI Channel 13"
    },
    "engineOptions": [
      {
        "name": "V1 Legacy",
        "description": "Original algorithm - preserves old project compatibility"
      },
      {
        "name": "V2 Extended",
        "description": "Extended cutoff range for modern production"
      },
      {
        "name": "V2 TB303",
        "description": "Most accurate TB-303 hardware emulation",
        "recommended": true
      }
    ]
  },
  "programSystem": {
    "totalPrograms": 128,
    "structure": "Each program links a patch and sequence",
    "editBuffer": {
      "readFunction": "Load program into edit buffer",
      "writeFunction": "Save edit buffer to program slot",
      "purpose": "Prevents accidental overwrite of programs"
    },
    "autofollow": "MIDI notes automatically trigger programs when enabled"
  },
  "pianoRollMode": {
    "portamento": "Overlap notes to create slide effect",
    "accent": "Set velocity ≥ 86% (220/255)",
    "transpose": "Use color group 13 for sequence transposition"
  }
}

```

---

## FILE: 02-Data\presets\genre-presets.json

```json
{
  "acidTechnoPresets": {
    "raw303": {
      "tuning": 0,
      "cutoff": 75,
      "resonance": 85,
      "envMod": 90,
      "decay": 40,
      "accent": 80,
      "slide": 60,
      "distortion": true,
      "subBass": false
    },
    "liquidAcid": {
      "tuning": -2,
      "cutoff": 60,
      "resonance": 70,
      "envMod": 75,
      "decay": 65,
      "accent": 70,
      "slide": 90,
      "distortion": false,
      "subBass": true
    },
    "hardAcid": {
      "tuning": 0,
      "cutoff": 90,
      "resonance": 95,
      "envMod": 100,
      "decay": 30,
      "accent": 100,
      "slide": 40,
      "distortion": true,
      "subBass": true
    }
  },
  "housePresets": {
    "chicagoHouse": {
      "tuning": 0,
      "cutoff": 65,
      "resonance": 75,
      "envMod": 80,
      "decay": 50,
      "accent": 75,
      "slide": 50,
      "distortion": false,
      "subBass": true
    },
    "deepHouse": {
      "tuning": -1,
      "cutoff": 45,
      "resonance": 60,
      "envMod": 65,
      "decay": 70,
      "accent": 60,
      "slide": 70,
      "distortion": false,
      "subBass": true
    },
    "funkyHouse": {
      "tuning": 0,
      "cutoff": 70,
      "resonance": 80,
      "envMod": 85,
      "decay": 45,
      "accent": 80,
      "slide": 60,
      "distortion": false,
      "subBass": true
    }
  },
  "trancePresets": {
    "upliftingTrance": {
      "tuning": 0,
      "cutoff": 80,
      "resonance": 85,
      "envMod": 90,
      "decay": 35,
      "accent": 85,
      "slide": 55,
      "distortion": false,
      "subBass": true
    },
    "psytrance": {
      "tuning": 0,
      "cutoff": 85,
      "resonance": 90,
      "envMod": 95,
      "decay": 25,
      "accent": 90,
      "slide": 65,
      "distortion": true,
      "subBass": true
    },
    "progressiveTrance": {
      "tuning": -1,
      "cutoff": 60,
      "resonance": 70,
      "envMod": 75,
      "decay": 55,
      "accent": 70,
      "slide": 75,
      "distortion": false,
      "subBass": true
    }
  },
  "hipHopPresets": {
    "boomBap": {
      "tuning": 0,
      "cutoff": 55,
      "resonance": 65,
      "envMod": 70,
      "decay": 60,
      "accent": 65,
      "slide": 40,
      "distortion": false,
      "subBass": true
    },
    "trapBass": {
      "tuning": -2,
      "cutoff": 40,
      "resonance": 50,
      "envMod": 60,
      "decay": 75,
      "accent": 50,
      "slide": 80,
      "distortion": false,
      "subBass": true
    },
    "drill808": {
      "tuning": -1,
      "cutoff": 35,
      "resonance": 45,
      "envMod": 55,
      "decay": 85,
      "accent": 40,
      "slide": 90,
      "distortion": false,
      "subBass": true
    }
  }
}
```

---

## FILE: 02-Data\presets\hiphop-bass-presets.json

```json
{
  "$schema": "../schema/transistor-bass-schema.json",
  "presetBank": {
    "name": "Hip-Hop & R&B Bass Essentials",
    "version": "1.0",
    "category": "Bass",
    "genre": ["Hip-Hop", "Trap", "R&B", "Lo-Fi"],
    "totalPresets": 12
  },
  "presets": [
    {
      "id": "trap_808_deep",
      "name": "Trap 808 Deep",
      "description": "Classic trap sub bass - chest-hitting low-end",
      "genre": ["Trap", "Hip-Hop"],
      "vibe": "Moody, Dark, Heavy",
      "useCase": "Main bass for trap beats",
      "referenceArtists": ["Metro Boomin", "Southside", "21 Savage"],
      "parameters": {
        "engine": "V2 Extended",
        "waveform": 100,
        "cutoff": 18,
        "resonance": 8,
        "envMod": 15,
        "decay": 80,
        "accent": 0,
        "tuning": 0,
        "volume": 75,
        "hp": 0,
        "minEnvDecay": 20,
        "filterKeyFollow": 0,
        "lfoToPw": 0,
        "lfoRate": 0,
        "pulseWidth": 50,
        "vcaSmooth": 35,
        "distortion": {
          "drive": 25,
          "tone": 40,
          "mix": 50
        }
      },
      "mixingTips": [
        "High-pass at 30Hz to remove rumble",
        "Boost +3dB at 60Hz for chest thump",
        "Sidechain to kick (4:1 ratio, 100ms release)",
        "Keep mono below 120Hz"
      ],
      "playingTechnique": {
        "noteRange": "C1-G1",
        "noteLength": "1/2 to full bar",
        "velocity": "100% (consistent)",
        "slides": "Occasional (beat 3.5 to 4)"
      }
    },
    {
      "id": "melodic_rnb_bass",
      "name": "Melodic R&B Bass",
      "description": "Moving bass melodies with warmth and presence",
      "genre": ["R&B", "Neo-Soul", "Hip-Hop"],
      "vibe": "Melodic, Upbeat, Smooth",
      "useCase": "Melodic basslines following chord progressions",
      "referenceArtists": ["J. Cole", "Childish Gambino", "Anderson .Paak"],
      "parameters": {
        "engine": "V2 Extended",
        "waveform": 100,
        "cutoff": 25,
        "resonance": 12,
        "envMod": 30,
        "decay": 65,
        "accent": 0,
        "tuning": 0,
        "volume": 70,
        "hp": 5,
        "minEnvDecay": 25,
        "filterKeyFollow": 20,
        "lfoToPw": 30,
        "lfoRate": 25,
        "pulseWidth": 50,
        "vcaSmooth": 30,
        "distortion": {
          "drive": 30,
          "tone": 55,
          "mix": 60
        }
      },
      "mixingTips": [
        "Add slight chorus for width (15% mix)",
        "EQ: Cut 200-300Hz if muddy",
        "Light compression (3:1) for consistency",
        "Layer with sub sine if needed"
      ],
      "playingTechnique": {
        "noteRange": "E1-A1",
        "noteLength": "1/4 to 1/2 note (rhythmic)",
        "velocity": "80-100% (dynamic)",
        "slides": "Frequent (smooth R&B feel)"
      }
    },
    {
      "id": "psychedelic_sub",
      "name": "Psychedelic Sub",
      "description": "Trippy, evolving bass with LFO modulation",
      "genre": ["Psychedelic Hip-Hop", "Cloud Rap", "Alternative"],
      "vibe": "Psychedelic, Cool, Experimental",
      "useCase": "Atmospheric bass with movement",
      "referenceArtists": ["Frank Ocean", "The Weeknd", "Kid Cudi"],
      "parameters": {
        "engine": "V2 Extended",
        "waveform": 75,
        "cutoff": 30,
        "resonance": 20,
        "envMod": 45,
        "decay": 70,
        "accent": 0,
        "tuning": 0,
        "volume": 65,
        "hp": 10,
        "minEnvDecay": 30,
        "filterKeyFollow": 30,
        "lfoToPw": 60,
        "lfoRate": 15,
        "pulseWidth": 50,
        "vcaSmooth": 40,
        "distortion": {
          "drive": 20,
          "tone": 60,
          "mix": 40
        },
        "delay": {
          "time": "1/16",
          "feedback": 25,
          "mix": 15
        },
        "reverb": {
          "size": "Medium",
          "mix": 20
        }
      },
      "mixingTips": [
        "Add Vintage Phaser for extra movement",
        "Automate cutoff slowly (4-8 bar cycles)",
        "Wide stereo on harmonics (keep sub mono)",
        "Layer with pad for fullness"
      ],
      "playingTechnique": {
        "noteRange": "D1-G1",
        "noteLength": "1/2 to 1 bar (sustained)",
        "velocity": "70-85% (laid back)",
        "slides": "Chromatic movements"
      }
    },
    {
      "id": "lofi_warmth",
      "name": "Lo-Fi Warm Bass",
      "description": "Vintage, tape-saturated bass for lo-fi beats",
      "genre": ["Lo-Fi Hip-Hop", "Boom Bap", "Chill Hop"],
      "vibe": "Cool, Nostalgic, Warm",
      "useCase": "Warm bass foundation for lo-fi tracks",
      "referenceArtists": ["Nujabes", "J Dilla", "Tomppabeats"],
      "parameters": {
        "engine": "V1 Legacy",
        "waveform": 100,
        "cutoff": 20,
        "resonance": 10,
        "envMod": 20,
        "decay": 75,
        "accent": 0,
        "tuning": 0,
        "volume": 65,
        "hp": 0,
        "minEnvDecay": 15,
        "filterKeyFollow": 10,
        "lfoToPw": 15,
        "lfoRate": 10,
        "pulseWidth": 50,
        "vcaSmooth": 50,
        "distortion": {
          "drive": 35,
          "tone": 35,
          "mix": 70
        }
      },
      "postProcessing": [
        "Bitcrusher: 12-bit reduction",
        "Fruity Squeeze: Warm saturation",
        "Low-pass filter: 8kHz cutoff",
        "Layer vinyl noise underneath"
      ],
      "mixingTips": [
        "Boost 100-150Hz for body",
        "Roll off highs for vintage feel",
        "Add tape saturation",
        "Keep dynamics loose (minimal compression)"
      ],
      "playingTechnique": {
        "noteRange": "D1-F1",
        "noteLength": "1/2 to 1 bar",
        "velocity": "70-80% (relaxed)",
        "slides": "Minimal (simple lines)"
      }
    },
    {
      "id": "aggressive_trap",
      "name": "Aggressive Trap 808",
      "description": "Distorted, in-your-face trap bass",
      "genre": ["Trap", "Drill"],
      "vibe": "Moody, Aggressive, Heavy",
      "useCase": "Hard-hitting trap with attitude",
      "referenceArtists": ["Pop Smoke", "Fivio Foreign", "UK Drill"],
      "parameters": {
        "engine": "V2 Extended",
        "waveform": 100,
        "cutoff": 15,
        "resonance": 5,
        "envMod": 10,
        "decay": 85,
        "accent": 0,
        "tuning": 0,
        "volume": 80,
        "hp": 0,
        "minEnvDecay": 10,
        "filterKeyFollow": 0,
        "lfoToPw": 0,
        "lfoRate": 0,
        "pulseWidth": 50,
        "vcaSmooth": 25,
        "distortion": {
          "drive": 60,
          "tone": 50,
          "mix": 80
        }
      },
      "mixingTips": [
        "Heavy sidechain to kick",
        "Parallel compression for thickness",
        "Boost 80-100Hz aggressively",
        "Soft clip the output"
      ],
      "playingTechnique": {
        "noteRange": "C1-D1",
        "noteLength": "Full bar (sustain)",
        "velocity": "100% (maximum)",
        "slides": "Fast slides for tension"
      }
    },
    {
      "id": "bounce_funk",
      "name": "Bounce Funk Bass",
      "description": "Rhythmic, funky bass with movement",
      "genre": ["Hip-Hop", "Funk", "G-Funk"],
      "vibe": "Upbeat, Funky, Groovy",
      "useCase": "West Coast bounce, Parliament-inspired",
      "referenceArtists": ["Dr. Dre", "Snoop Dogg", "Anderson .Paak"],
      "parameters": {
        "engine": "V2 TB303",
        "waveform": 50,
        "cutoff": 35,
        "resonance": 25,
        "envMod": 50,
        "decay": 55,
        "accent": 40,
        "tuning": 0,
        "volume": 70,
        "hp": 15,
        "minEnvDecay": 30,
        "filterKeyFollow": 25,
        "lfoToPw": 40,
        "lfoRate": 30,
        "pulseWidth": 40,
        "vcaSmooth": 35,
        "distortion": {
          "drive": 40,
          "tone": 65,
          "mix": 55
        }
      },
      "mixingTips": [
        "Add slight chorus for width",
        "Boost 150-250Hz for body",
        "Use accents on syncopated notes",
        "Layer with talkbox effect"
      ],
      "playingTechnique": {
        "noteRange": "F1-C2",
        "noteLength": "1/8 to 1/4 (rhythmic)",
        "velocity": "Varies (dynamic)",
        "slides": "Funky slides on upbeats"
      }
    },
    {
      "id": "miami_bass",
      "name": "Miami Bass 808",
      "description": "Boomy, club-shaking Miami bass sound",
      "genre": ["Miami Bass", "Trap", "Club"],
      "vibe": "Upbeat, Heavy, Energetic",
      "useCase": "Dance floor bass, maximum low-end",
      "referenceArtists": ["2 Live Crew", "DJ Khaled (modern)"],
      "parameters": {
        "engine": "V2 Extended",
        "waveform": 100,
        "cutoff": 12,
        "resonance": 3,
        "envMod": 5,
        "decay": 90,
        "accent": 0,
        "tuning": 0,
        "volume": 85,
        "hp": 0,
        "minEnvDecay": 5,
        "filterKeyFollow": 0,
        "lfoToPw": 0,
        "lfoRate": 0,
        "pulseWidth": 50,
        "vcaSmooth": 20,
        "distortion": {
          "drive": 45,
          "tone": 30,
          "mix": 70
        }
      },
      "mixingTips": [
        "Maximize 50-80Hz range",
        "Heavy compression (6:1)",
        "Sidechain everything to bass",
        "Check on subwoofer/club system"
      ],
      "playingTechnique": {
        "noteRange": "C1-E1",
        "noteLength": "Full bar (maximum sustain)",
        "velocity": "100% (maximum)",
        "slides": "None (straight sustains)"
      }
    },
    {
      "id": "subtle_sub",
      "name": "Subtle Sub Foundation",
      "description": "Invisible sub bass that's felt not heard",
      "genre": ["R&B", "Pop", "Modern Hip-Hop"],
      "vibe": "Cool, Clean, Professional",
      "useCase": "Support bass that doesn't overpower",
      "referenceArtists": ["Drake", "Bryson Tiller", "6LACK"],
      "parameters": {
        "engine": "V2 Extended",
        "waveform": 100,
        "cutoff": 22,
        "resonance": 5,
        "envMod": 15,
        "decay": 70,
        "accent": 0,
        "tuning": 0,
        "volume": 60,
        "hp": 0,
        "minEnvDecay": 20,
        "filterKeyFollow": 5,
        "lfoToPw": 0,
        "lfoRate": 0,
        "pulseWidth": 50,
        "vcaSmooth": 45,
        "distortion": {
          "drive": 15,
          "tone": 50,
          "mix": 30
        }
      },
      "mixingTips": [
        "Keep very low in mix (-12dB)",
        "Focus energy at 40-60Hz",
        "Gentle sidechain to kick",
        "Layer with melodic bass"
      ],
      "playingTechnique": {
        "noteRange": "C1-F1",
        "noteLength": "Whole notes (sustained)",
        "velocity": "60-70% (background)",
        "slides": "None (simple root notes)"
      }
    },
    {
      "id": "glide_bass",
      "name": "808 Glide Master",
      "description": "Perfect for trap slides and portamento",
      "genre": ["Trap", "Modern Hip-Hop"],
      "vibe": "Melodic, Modern, Dynamic",
      "useCase": "Signature trap 808 slides",
      "referenceArtists": ["Future", "Lil Baby", "Gunna"],
      "parameters": {
        "engine": "V2 Extended",
        "waveform": 100,
        "cutoff": 20,
        "resonance": 10,
        "envMod": 20,
        "decay": 75,
        "accent": 0,
        "tuning": 0,
        "volume": 75,
        "hp": 0,
        "minEnvDecay": 25,
        "filterKeyFollow": 15,
        "lfoToPw": 0,
        "lfoRate": 0,
        "pulseWidth": 50,
        "vcaSmooth": 40,
        "distortion": {
          "drive": 30,
          "tone": 45,
          "mix": 55
        }
      },
      "mixingTips": [
        "Perfect glide time: 50-150ms",
        "Slight chorus for width",
        "Automate cutoff on slides",
        "Keep slides 3-7 semitones"
      ],
      "playingTechnique": {
        "noteRange": "C1-G1",
        "noteLength": "Varies with slide timing",
        "velocity": "100%",
        "slides": "Primary feature - overlap notes"
      },
      "slidePatterns": [
        "C1 (sustain) → D1 (quick slide beat 3.5)",
        "C1 → F1 (long slide)",
        "C1 → Eb1 → G1 (double slide)"
      ]
    },
    {
      "id": "gritty_underground",
      "name": "Gritty Underground",
      "description": "Raw, distorted bass for underground hip-hop",
      "genre": ["Underground Hip-Hop", "Experimental", "Alt-Rap"],
      "vibe": "Moody, Raw, Aggressive",
      "useCase": "Grimy, lo-fi aggressive bass",
      "referenceArtists": ["Earl Sweatshirt", "JPEGMAFIA", "Danny Brown"],
      "parameters": {
        "engine": "V1 Legacy",
        "waveform": 85,
        "cutoff": 28,
        "resonance": 18,
        "envMod": 35,
        "decay": 60,
        "accent": 25,
        "tuning": 0,
        "volume": 75,
        "hp": 8,
        "minEnvDecay": 20,
        "filterKeyFollow": 20,
        "lfoToPw": 45,
        "lfoRate": 35,
        "pulseWidth": 45,
        "vcaSmooth": 25,
        "distortion": {
          "drive": 70,
          "tone": 40,
          "mix": 85
        }
      },
      "postProcessing": [
        "Bitcrusher: 10-bit",
        "Additional distortion",
        "Vinyl noise layer",
        "Lo-fi degradation"
      ],
      "mixingTips": [
        "Embrace the dirt and grit",
        "Don't over-compress",
        "Layer with clean sub if needed",
        "Add vinyl crackle"
      ],
      "playingTechnique": {
        "noteRange": "D1-A1",
        "noteLength": "Varies (experimental)",
        "velocity": "Varies (dynamic)",
        "slides": "Unexpected intervals"
      }
    },
    {
      "id": "modern_pop_bass",
      "name": "Modern Pop Bass",
      "description": "Clean, polished bass for pop-rap crossover",
      "genre": ["Pop-Rap", "Mainstream Hip-Hop"],
      "vibe": "Upbeat, Clean, Radio-Ready",
      "useCase": "Commercial hip-hop production",
      "referenceArtists": ["Post Malone", "Juice WRLD", "Lil Nas X"],
      "parameters": {
        "engine": "V2 Extended",
        "waveform": 100,
        "cutoff": 24,
        "resonance": 8,
        "envMod": 18,
        "decay": 68,
        "accent": 0,
        "tuning": 0,
        "volume": 72,
        "hp": 5,
        "minEnvDecay": 22,
        "filterKeyFollow": 18,
        "lfoToPw": 20,
        "lfoRate": 20,
        "pulseWidth": 50,
        "vcaSmooth": 38,
        "distortion": {
          "drive": 28,
          "tone": 58,
          "mix": 50
        }
      },
      "mixingTips": [
        "Very clean mix (minimal distortion)",
        "Tight sidechain to kick",
        "Boost 2-4kHz for definition",
        "Professional loudness standards"
      ],
      "playingTechnique": {
        "noteRange": "E1-G1",
        "noteLength": "1/4 to 1/2 (rhythmic)",
        "velocity": "85-100% (consistent)",
        "slides": "Moderate (tasteful)"
      }
    },
    {
      "id": "chopped_screwed",
      "name": "Chopped & Screwed Bass",
      "description": "Slowed down, pitched bass for Houston style",
      "genre": ["Chopped & Screwed", "Houston Hip-Hop"],
      "vibe": "Moody, Slow, Heavy",
      "useCase": "Screwed versions, slow jams",
      "referenceArtists": ["DJ Screw", "Travis Scott (slowed)"],
      "parameters": {
        "engine": "V2 Extended",
        "waveform": 100,
        "cutoff": 16,
        "resonance": 6,
        "envMod": 12,
        "decay": 95,
        "accent": 0,
        "tuning": -300,
        "volume": 78,
        "hp": 0,
        "minEnvDecay": 15,
        "filterKeyFollow": 0,
        "lfoToPw": 0,
        "lfoRate": 0,
        "pulseWidth": 50,
        "vcaSmooth": 55,
        "distortion": {
          "drive": 32,
          "tone": 38,
          "mix": 65
        },
        "reverb": {
          "size": "Large",
          "mix": 30
        }
      },
      "postProcessing": [
        "Pitch down -3 to -5 semitones",
        "Time stretch to 60-75% speed",
        "Heavy reverb",
        "Tape saturation"
      ],
      "mixingTips": [
        "Extra long decay (let it breathe)",
        "More reverb than normal",
        "Darker EQ curve",
        "Slow, hypnotic feel"
      ],
      "playingTechnique": {
        "noteRange": "C1-E1 (pitch down after)",
        "noteLength": "Very long sustains",
        "velocity": "80-90%",
        "slides": "Slow, deliberate"
      }
    }
  ],
  "usageGuide": {
    "quickStart": "Load preset, adjust to taste, apply mixing tips",
    "customization": "All presets are starting points - tweak for your track",
    "layering": "Combine 'Subtle Sub' with melodic presets for fullness",
    "automation": "Automate cutoff and LFO rate for movement"
  },
  "mixingCheatSheet": {
    "frequencyRanges": {
      "sub": "40-60Hz (felt, not heard)",
      "body": "80-150Hz (power and weight)",
      "definition": "2-4kHz (clarity on small speakers)"
    },
    "essentialProcessing": [
      "High-pass at 30Hz (remove rumble)",
      "Sidechain to kick (essential)",
      "Keep mono below 120Hz",
      "Add harmonics with saturation"
    ],
    "commonProblems": {
      "muddy": "Cut 200-300Hz, check phase",
      "weak": "Boost 60-80Hz, add saturation",
      "harsh": "Reduce distortion drive",
      "clashing": "Sidechain compression"
    }
  }
}

```

---

## FILE: 02-Data\rules\acid-bass-mixing-rules.md

```markdown
# Rules: Acid Bass Mixing (Transistor Bass)

Tags: bass | mix-safety | low-end

## 1. The "Sub Conflict" Rule
Transistor Bass focuses on the **Mid-Bass** frequencies (100Hz - 500Hz). 
- **Rule:** If you have a heavy 808 or Sub-Bass playing, use a **High Pass Filter** on Transistor Bass at **100Hz**.
- **Why:** The 303 sound can get "muddy" in the sub-region, which softens the impact of your Kick/808.

## 2. Resonance Safety Rule
- **Rule:** If the Resonance is above 80%, place a **Limiter** or **Clipper** after Transistor Bass in the mixer.
- **Why:** Extreme resonance creates massive volume spikes at the "squelch" point. These spikes can easily clip your master bus or destroy your headroom.

## 3. The "Mono Center" Rule
- **Rule:** Keep the main Transistor Bass signal in **Mono**.
- **Why:** Bass frequencies need to be centered for club translation. If you want "width," use a **Fruity Chorus** or **Stereo Enhancer** but set them to only affect frequencies above **500Hz**.

## 4. "Avoid" List
- **Avoid Heavy Reverb on Low-Cutoff notes:** Reverb on a dark, low bassline creates "mud clouds." Only increase reverb wetness when the **Cutoff** is high.
- **Avoid Constant Distortion:** If the distortion is always at 100%, the dynamic "snap" of the filter is lost. Use automation to increase distortion during "climaxes" or "hooks."

```

---

## FILE: 02-Data\rules\bass-problem-solving.json

```json
{
  "problemSolvingRules": {
    "name": "Hip-Hop Bass Troubleshooting Guide",
    "category": "Problem → Solution Mapping",
    "genre": "Hip-Hop, Trap, R&B"
  },
  "symptoms": [
    {
      "symptom": "Bass sounds muddy and unclear",
      "priority": 1,
      "causes": [
        "Too much low-mid energy (200-400Hz)",
        "Phase issues with kick",
        "No high-pass filtering"
      ],
      "solutions": [
        {
          "action": "EQ Cut",
          "parameters": {
            "frequency": "200-300Hz",
            "cut": "-3 to -6dB",
            "Q": "Medium (1.5-2.0)"
          },
          "why": "Removes boxiness and mud"
        },
        {
          "action": "High-Pass Filter",
          "parameters": {
            "hp": "5-10%",
            "frequency": "30-35Hz"
          },
          "why": "Removes sub-sonic rumble"
        },
        {
          "action": "Check Phase",
          "parameters": {
            "tool": "Fruity Phase Inverter",
            "test": "Flip bass phase, keep whichever sounds fuller"
          },
          "why": "Phase cancellation with kick causes thin sound"
        }
      ],
      "preventionTips": [
        "Start with low cutoff (15-20%)",
        "Keep resonance under 15% for clean bass",
        "Always sidechain to kick"
      ]
    },
    {
      "symptom": "Bass too weak/thin",
      "priority": 1,
      "causes": [
        "Cutoff too low",
        "Not enough saturation/harmonics",
        "Fighting with kick",
        "Playing in wrong octave"
      ],
      "solutions": [
        {
          "action": "Increase Cutoff",
          "parameters": {
            "cutoff": "Increase to 20-25%"
          },
          "why": "Adds more harmonic content"
        },
        {
          "action": "Add Saturation",
          "parameters": {
            "distDrive": "30-40%",
            "distMix": "60-70%"
          },
          "why": "Adds harmonics audible on small speakers"
        },
        {
          "action": "Parallel Compression",
          "parameters": {
            "send": "Heavy compression on parallel track",
            "blend": "20-30% wet"
          },
          "why": "Adds thickness without losing dynamics"
        },
        {
          "action": "Check Octave",
          "parameters": {
            "noteRange": "C1-G1 (not C2-G2)"
          },
          "why": "808s live in sub/low range"
        }
      ],
      "preventionTips": [
        "Boost 60-80Hz for body",
        "Add slight saturation for presence",
        "Layer with top bass if needed"
      ]
    },
    {
      "symptom": "Bass clashing with kick",
      "priority": 1,
      "causes": [
        "No sidechain compression",
        "Both occupy same frequency",
        "Phase cancellation"
      ],
      "solutions": [
        {
          "action": "Sidechain Compression",
          "parameters": {
            "ratio": "4:1 to 6:1",
            "attack": "5-10ms (fast)",
            "release": "100-150ms",
            "threshold": "Adjust for -6dB reduction"
          },
          "why": "Creates space for kick to punch through",
          "essential": true
        },
        {
          "action": "EQ Separation",
          "parameters": {
            "kick": "Boost at 50-60Hz",
            "bass": "Notch at 50Hz, boost at 80-100Hz"
          },
          "why": "Each element has its own frequency pocket"
        },
        {
          "action": "Timing Adjustment",
          "parameters": {
            "shift": "Shift bass 10-20ms later"
          },
          "why": "Kick hits first, bass fills in after"
        }
      ],
      "preventionTips": [
        "Always sidechain bass to kick",
        "Use kick-specific frequency (50Hz), bass different (80Hz)",
        "Test in mono to hear clashes"
      ]
    },
    {
      "symptom": "Bass sounds harsh/distorted",
      "priority": 2,
      "causes": [
        "Too much distortion",
        "Resonance too high",
        "Clipping"
      ],
      "solutions": [
        {
          "action": "Reduce Distortion Drive",
          "parameters": {
            "distDrive": "Lower to 20-30%"
          },
          "why": "Less drive = cleaner sound"
        },
        {
          "action": "Lower Resonance",
          "parameters": {
            "resonance": "Keep under 20% for hip-hop"
          },
          "why": "High resonance creates harsh peaks"
        },
        {
          "action": "Soft Clip",
          "parameters": {
            "tool": "Fruity Soft Clipper",
            "threshold": "-3dB"
          },
          "why": "Tames peaks without harsh distortion"
        },
        {
          "action": "Increase VCA Smooth",
          "parameters": {
            "vcaSmooth": "40-50%"
          },
          "why": "Removes attack/release clicks"
        }
      ],
      "preventionTips": [
        "Start with light distortion",
        "Check levels (avoid clipping)",
        "Use soft clipping instead of hard limiting"
      ]
    },
    {
      "symptom": "Bass not punchy enough",
      "priority": 2,
      "causes": [
        "Attack too slow",
        "Too much reverb/delay",
        "Decay too long"
      ],
      "solutions": [
        {
          "action": "Reduce VCA Smooth",
          "parameters": {
            "vcaSmooth": "20-30%"
          },
          "why": "Faster attack = more punch"
        },
        {
          "action": "Shorten Decay",
          "parameters": {
            "decay": "Reduce to 60-70%"
          },
          "why": "Tighter envelope = more rhythmic"
        },
        {
          "action": "Remove Effects",
          "parameters": {
            "reverb": "Off or <10% mix",
            "delay": "Off or <15% mix"
          },
          "why": "Effects blur the attack"
        },
        {
          "action": "Transient Shaper",
          "parameters": {
            "tool": "Transient Processor",
            "attack": "+3 to +6dB"
          },
          "why": "Enhances attack transient"
        }
      ],
      "preventionTips": [
        "Keep bass dry (minimal effects)",
        "Use fast envelope settings",
        "Compress for consistent attack"
      ]
    },
    {
      "symptom": "Bass disappears on phone/laptop speakers",
      "priority": 2,
      "causes": [
        "No mid/high-frequency harmonics",
        "All energy in sub frequencies"
      ],
      "solutions": [
        {
          "action": "Add Saturation",
          "parameters": {
            "distDrive": "25-35%",
            "distMix": "50-70%"
          },
          "why": "Creates harmonics at 2-4kHz"
        },
        {
          "action": "EQ Boost",
          "parameters": {
            "frequency": "2-4kHz",
            "boost": "+2 to +3dB"
          },
          "why": "Adds presence audible on small speakers"
        },
        {
          "action": "Parallel High-Pass",
          "parameters": {
            "send": "Duplicate bass, high-pass at 500Hz",
            "process": "Heavy saturation",
            "blend": "15-25% wet"
          },
          "why": "Adds top-end without affecting sub"
        }
      ],
      "preventionTips": [
        "Always check mix on phone speaker",
        "Use saturation for harmonics",
        "Boost 2-4kHz subtly"
      ]
    },
    {
      "symptom": "Bass slides sound wrong/unnatural",
      "priority": 3,
      "causes": [
        "Notes not overlapping correctly",
        "Slide time too slow/fast",
        "Wrong interval distance"
      ],
      "solutions": [
        {
          "action": "Overlap Notes",
          "parameters": {
            "overlap": "1-2 ticks in piano roll"
          },
          "why": "Triggers portamento/glide"
        },
        {
          "action": "Adjust Glide Time",
          "parameters": {
            "quick": "50-100ms for trap",
            "slow": "200-400ms for R&B"
          },
          "why": "Timing affects vibe"
        },
        {
          "action": "Use Common Intervals",
          "parameters": {
            "intervals": "3-7 semitones (common in trap)"
          },
          "why": "These intervals sound musical"
        }
      ],
      "preventionTips": [
        "Study reference tracks for slide timing",
        "Keep slides to 3-7 semitones",
        "Use slides sparingly (not every note)"
      ]
    },
    {
      "symptom": "Bass causes clipping/distortion on master",
      "priority": 1,
      "causes": [
        "Too loud in mix",
        "Competing with other low-end",
        "No master limiting"
      ],
      "solutions": [
        {
          "action": "Lower Bass Volume",
          "parameters": {
            "volume": "Reduce by 3-6dB"
          },
          "why": "Bass should support, not dominate"
        },
        {
          "action": "Sidechain Everything",
          "parameters": {
            "targets": "Pads, synths, keys",
            "ratio": "2:1 to 3:1 (light)"
          },
          "why": "Creates space for bass"
        },
        {
          "action": "Master Limiting",
          "parameters": {
            "tool": "Fruity Limiter",
            "ceiling": "-0.3dB",
            "margin": "Leave headroom"
          },
          "why": "Prevents clipping on final output"
        }
      ],
      "preventionTips": [
        "Mix bass at -6dB to -3dB",
        "Use sidechain liberally",
        "Leave headroom for mastering"
      ]
    },
    {
      "symptom": "Bass sounds sterile/lifeless",
      "priority": 3,
      "causes": [
        "Too clean/digital",
        "No movement/variation",
        "Static parameters"
      ],
      "solutions": [
        {
          "action": "Add Movement",
          "parameters": {
            "lfoToPw": "20-40%",
            "lfoRate": "Slow (10-25%)"
          },
          "why": "Creates evolving timbre"
        },
        {
          "action": "Automate Cutoff",
          "parameters": {
            "pattern": "Slow rise and fall (4-8 bars)",
            "range": "15% to 30% and back"
          },
          "why": "Adds breathing, organic feel"
        },
        {
          "action": "Vintage Processing",
          "parameters": {
            "tools": ["Fruity Squeeze", "Vintage Chorus (subtle)"],
            "mix": "15-25%"
          },
          "why": "Adds analog warmth"
        },
        {
          "action": "Velocity Variation",
          "parameters": {
            "range": "80-100% velocity",
            "humanize": "Slight timing variation"
          },
          "why": "Feels more human/organic"
        }
      ],
      "preventionTips": [
        "Add subtle LFO modulation",
        "Automate parameters over time",
        "Use saturation for warmth"
      ]
    },
    {
      "symptom": "Bass pattern sounds boring/repetitive",
      "priority": 3,
      "causes": [
        "Too simple melody",
        "No variation between sections",
        "Static rhythm"
      ],
      "solutions": [
        {
          "action": "Add Melodic Movement",
          "parameters": {
            "technique": "Play 3rds and 5ths of chords",
            "range": "Stay in C1-A1 range"
          },
          "why": "Creates interest while staying low"
        },
        {
          "action": "Vary Per Section",
          "parameters": {
            "verse": "Simple root notes",
            "chorus": "More melodic movement",
            "bridge": "Different rhythm/pattern"
          },
          "why": "Keeps listener engaged"
        },
        {
          "action": "Add Rhythmic Variation",
          "parameters": {
            "technique": "Change note lengths, add syncopation"
          },
          "why": "Creates groove and interest"
        }
      ],
      "preventionTips": [
        "Study bass lines in reference tracks",
        "Create variation every 4-8 bars",
        "Use slides for melodic interest"
      ]
    }
  ],
  "quickDiagnosticFlow": {
    "step1": "Problem identification",
    "step2": "Check priority (1=critical, 3=polish)",
    "step3": "Try solutions in order listed",
    "step4": "Apply prevention tips going forward"
  },
  "genreSpecificNotes": {
    "trap": {
      "commonIssues": ["Bass too weak", "Slides sound wrong"],
      "priorities": ["Sidechain", "808 slides", "Sub power"]
    },
    "rnb": {
      "commonIssues": ["Bass not melodic enough", "Too harsh"],
      "priorities": ["Melodic lines", "Smoothness", "Warmth"]
    },
    "lofi": {
      "commonIssues": ["Sounds too clean", "No vintage vibe"],
      "priorities": ["Saturation", "Bit reduction", "Warmth"]
    },
    "psychedelic": {
      "commonIssues": ["Too static", "Not trippy enough"],
      "priorities": ["Movement", "Automation", "Effects"]
    }
  }
}

```

---

## FILE: 03-Workflows\by-context\integration-guide.md

```markdown
# Transistor Bass Integration Guide

## DAW Integration

### FL Studio Native Integration
**Best Practices**:
- Use Patcher for complex routing
- Create template projects
- Set up custom controls
- Use playlist automation

### Ableton Live Integration
**Setup via ReWire**:
1. FL Studio as ReWire host
2. Transistor Bass in FL Studio
3. Audio routing to Live
4. MIDI sync between applications

### Logic Pro Integration
**Workaround Methods**:
- Use FL Studio as VST wrapper
- MIDI via IAC bus (Mac)
- Audio export/import workflow
- Hardware loopback option

## Plugin Chain Integration

### Classic Acid Chain
**Order**: TB-303 → Distortion → EQ → Compression → Reverb
1. **Transistor Bass**: Core sound generation
2. **Distortion**: Saturator or overdrive
3. **EQ**: Low-cut + high-shelf
4. **Compression**: 4:1 ratio control
5. **Reverb**: Small room or plate

### Modern Production Chain
**Order**: TB-303 → Multi-band Processing → Stereo Imaging → Limiting
1. **Transistor Bass**: Main bass sound
2. **Multi-band**: Separate low/mid/high processing
3. **Stereo Imaging**: Width control
4. **Limiter**: Final output protection

### Sidechain Integration
**Setup**:
- Kick trigger source
- Bass ducking amount
- Attack/release settings
- Frequency-selective ducking

## Hardware Integration

### MIDI Controller Setup
**Recommended Controllers**:
- **Novation Launchkey**: Grid pattern control
- **Native Instruments Maschine**: Pad performance
- **Arturia KeyLab**: Keyboard with controls
- **AKAI MPK**: MPC-style pads

### CV/Gate Integration
**For Modular Systems**:
- CV output from audio interface
- Gate from MIDI converter
- 1V/Octave tuning calibration
- External filter connections

### Hardware Processors
**Outboard Gear**:
- Analog distortions
- Vintage filters
- Tape saturation
- Hardware compressors

## Software Integration

### Max for Live Integration
**Custom Devices**:
- Pattern generator
- Randomizer
- Performance controller
- Recorder/looper

### Script Integration
**Python/Automation**:
- Parameter automation
- Pattern generation
- Data logging
- Batch processing

### Controller Scripts
**FL Studio Scripts**:
- One-touch pattern switching
- Filter automation recording
- Performance macros
- Backup systems
```

---

## FILE: 03-Workflows\by-context\live-performance.md

```markdown
# Live Performance with Transistor Bass

## Setup Configuration

### MIDI Controller Mapping
**Essential Assignments**:
- **Cutoff Filter**: Mod Wheel or Knob 1
- **Resonance**: Knob 2 or Sustain Pedal
- **Decay**: Knob 3 or Expression Pedal
- **Accent**: Footswitch or Drum Pad
- **Pattern Select**: Pads 1-8

### Performance Rack Setup
**Signal Chain**:
1. Transistor Bass
2. Distortion Unit
3. Filter (additional)
4. Delay/Reverb
5. Limiter

**Audio Interface Settings**:
- Buffer: 128-256 samples
- Sample Rate: 44.1kHz or 48kHz
- Direct Monitoring: Enabled

## Performance Techniques

### Real-time Pattern Creation
**On-the-fly Programming**:
1. Start with simple note sequence
2. Add accents on the fly
3. Insert slides for movement
4. Automate cutoff manually

### Filter Performance
**Live Filtering**:
- Slow sweeps for builds
- Quick cuts for stabs
- Rhythmic pumping
- Resonance feedback control

### Pattern Switching
**Set Flow Management**:
- **Intro**: Simple, filtered
- **Build**: Gradual filter opening
- **Drop**: Full acid intensity
- **Breakdown**: Filtered, minimal
- **Outro**: Decay automation

## Genre-Specific Approaches

### Techno Performance
**Techniques**:
- Repetitive hypnotic patterns
- Long filter sweeps
- Accent on every 4th beat
- Subtle slide variations

### House Performance
**Techniques**:
- Groovy, swing patterns
- Filter on offbeats
- Melodic variations
- Layer with sub-bass

### Acid Techno Live PA
**Setup Requirements**:
- Multiple instances for layers
- Effect sends for processing
- Pattern triggering system
- Backup audio files

### Psytrance Elements
**Performance Additions**:
- Fast filter modulation
- High resonance settings
- Glitchy slide patterns
- Distortion automation

## Troubleshooting Live Issues

### MIDI Problems
**Solutions**:
- Check MIDI connections
- Verify channel assignments
- Reset MIDI controller
- Use backup patterns

### Audio Dropouts
**Prevention**:
- Increase buffer size
- Reduce other plugins
- Freeze other tracks
- Use lower quality settings

### Creative Blocks
**Recovery Techniques**:
- Switch to preset patterns
- Use randomize function
- Adjust filter only
- Take brief break
```

---

## FILE: 03-Workflows\by-context\troubleshooting-workflows.md

```markdown
# Transistor Bass Troubleshooting

## Sound Issues

### No Sound Output
**Causes**: 
- Mixer channel muted
- Wrong MIDI channel
- Volume too low
- Plugin bypassed

**Solutions**:
1. Check mixer channel volume
2. Verify MIDI input channel
3. Increase main volume knob
4. Disable plugin bypass

### Weak Bass Response
**Causes**:
- Cutoff too low
- Resonance too high
- Sub-bass not engaged
- Wrong octave

**Solutions**:
1. Increase cutoff to 12-2 o'clock
2. Reduce resonance to 9-10 o'clock
3. Add sub-bass layer
4. Check octave setting

### No Acid Sound
**Causes**:
- No accent automation
- Decay too long
- No slide patterns
- Filter not moving

**Solutions**:
1. Add accent automation
2. Set decay to 2-3 o'clock
3. Add slide between notes
4. Automate cutoff movement

## Pattern Issues

### Notes Not Playing
**Causes**:
- Pattern not active
- Wrong pattern number
- Transport not running
- Wrong note range

**Solutions**:
1. Activate pattern in playlist
2. Check pattern selector
3. Start FL Studio transport
4. Use C1-C3 range

### Timing Problems
**Causes**:
- Wrong pattern length
- Swing enabled incorrectly
- Quantization issues
- Buffer too low

**Solutions**:
1. Set correct pattern length
2. Adjust swing amount
3. Check quantize settings
4. Increase buffer size

## Performance Issues

### CPU Spikes
**Causes**:
- High oversampling
- Multiple instances
- Complex automation
- Buffer too low

**Solutions**:
1. Reduce oversampling
2. Freeze patterns
3. Simplify automation
4. Increase buffer size

### Audio Glitches
**Causes**:
- Low buffer size
- Driver issues
- CPU overload
- Memory issues

**Solutions**:
1. Increase ASIO buffer
2. Update audio drivers
3. Close other plugins
4. Restart FL Studio
```

---

## FILE: 03-Workflows\by-goal\808-style-sub-bass-hiphop.md

```markdown
# 808-Style Sub Bass for Hip-Hop & R&B

**Genre:** Hip-Hop, Trap, R&B, Lo-Fi
**Vibe:** Deep, boomy, chest-hitting bass
**Difficulty:** Beginner
**Time:** 5-10 minutes

---

## The Hip-Hop Bass Sound

While Transistor Bass emulates the TB-303, it can create powerful 808-style sub bass for modern hip-hop when configured correctly. The key is **removing** the acid character and focusing on pure low-end power.

---

## Quick Settings for Instant 808 Bass

### Core Parameters
`\`\`
Engine: V2 Extended (for maximum low-end)
Waveform: Full Sawtooth (100% right)
Cutoff: 15-25% (very low)
Resonance: 5-15% (minimal)
Env Mod: 10-20% (very subtle)
Decay: 70-85% (long tail)
Accent: 0% (not needed for 808s)
HP Filter: 0% (keep all sub)
`\`\`

### Why These Settings?
- **Sawtooth wave** = richer harmonics than square (more fullness)
- **Low cutoff** = focuses energy in sub frequencies (40-80Hz)
- **Minimal resonance** = clean, not screaming
- **Long decay** = sustaining 808 boom
- **No accent** = consistent volume (808s are steady)

---

## Step-by-Step Workflow

### Step 1: Disable the Sequencer
1. **Turn OFF** the internal sequencer
2. We'll program in the **Piano Roll** for hip-hop beats

### Step 2: Bass Fundamentals

**For Trap/Modern Hip-Hop:**
- Root notes: **C1, D1, F1** (deep sub range)
- Note length: **1/2 to full bar** (let it breathe)
- Velocity: **100%** (consistent hits)

**For R&B/Neo-Soul:**
- Root notes: **E1, G1, A1** (slightly higher)
- Note length: **1/4 to 1/2 note** (more rhythmic)
- Add **slides** by overlapping notes slightly

**For Lo-Fi Hip-Hop:**
- Root notes: **D1, E1, G1**
- Note length: **1/2 to 1 bar** (sustained)
- Lower velocity: **70-85%** (laid back vibe)

### Step 3: Rhythm Programming

**Classic Trap Pattern:**
`\`\`
Beat:  1   &   2   &   3   &   4   &
Note:  C1          C1      C1      D1
Len:   |--------|  |---|   |---|   |--|
`\`\`
- **Beat 1:** Long root note (1/2 bar)
- **Beat 2.5:** Short punch
- **Beat 3.5:** Short punch
- **Beat 4.5:** Quick slide to D1

**Moody R&B Pattern:**
`\`\`
Beat:  1       2       3       4
Note:  E1      G1      A1      E1
Len:   |-------|-------|-------|-------|
`\`\`
- Whole notes with **pitch automation** for glides
- Add **cutoff automation** for movement

**Psychedelic Hip-Hop:**
`\`\`
Beat:  1   &   2   &   3   &   4   &
Note:  D1  E1  D1  F#1 D1  G1  D1  A1
Len:   |-| |-| |-| |-| |-| |-| |-| |-|
`\`\`
- Chromatic movement for trippy feel
- Short punchy notes
- Unexpected intervals

---

## Melody Integration

### Playing with the Beat
1. **808 hits with kick:** 808 on beat 1 and 3, kick on all 4 beats
2. **Sidechain compression:** Duck 808 under kick (-6dB with fast attack)
3. **Octave slides:** Occasionally jump up an octave for emphasis

### Melodic Bass (R&B Style)
Instead of one-note 808s, create **moving bass melodies:**

`\`\`
Bar 1: E1 - G1 - A1 - G1 (over 4 beats)
Bar 2: D1 - F1 - E1 - D1 (descending line)
Bar 3: C1 - E1 - G1 - B1 (ascending to tension)
Bar 4: A1 - A1 - A1 - A1 (resolve and sustain)
`\`\`

**Tips:**
- Use **3rds and 5ths** from your chord progression
- Keep notes in **C1-G2 range** (sub to low-mid)
- Longer notes on **downbeats** (beats 1 and 3)

---

## Effects Chain for Hip-Hop Bass

### Essential Processing

**1. Saturation/Distortion (Light)**
- Drive: 20-30%
- Tone: 40%
- Mix: 50%
- *Why:* Adds harmonics so bass is audible on small speakers

**2. Fruity Parametric EQ 2**
- **Band 1:** High-pass at 30Hz (remove rumble)
- **Band 2:** Boost +3dB at 60Hz (chest thump)
- **Band 3:** Cut -2dB at 250Hz (remove mud)
- **Band 5:** Boost +2dB at 2kHz (add presence for small speakers)

**3. Fruity Soft Clipper**
- Threshold: -3dB
- *Why:* Fattens the sound without harsh distortion

**4. Sidechain Compressor**
- Triggered by kick
- Ratio: 4:1
- Attack: 5ms
- Release: 100-150ms
- *Why:* Creates the pumping effect

### Optional: Psychedelic Effects

**For Trippy Vibes:**
- **Fruity Phaser:** Very slow LFO (4 bars)
- **Fruity Delay 3:** 1/16 triplet, low mix (10%)
- **Fruity Reverb 2:** Tiny room, 5% mix

---

## Genre-Specific Variations

### 1. Dark Trap (Moody)

**Settings:**
- Cutoff: 12% (very dark)
- Decay: 90% (extra long)
- Add **Maximus** on low band for extra thump

**Vibe:** Underground, ominous, chest-rattling

**Reference Tracks:**
- Metro Boomin - "Mask Off" (Future)
- Southside - "XO Tour Llif3" (Lil Uzi Vert)

### 2. Melodic Hip-Hop (Upbeat)

**Settings:**
- Cutoff: 25% (brighter)
- Decay: 60% (more rhythmic)
- Add **Vintage Chorus** for width

**Melody:** Actual bass melodies, not just root notes

**Reference Tracks:**
- J. Cole - "MIDDLE CHILD"
- Childish Gambino - "Redbone"

### 3. Psychedelic R&B (Cool/Trippy)

**Settings:**
- Cutoff: 30%
- Env Mod: 40% (more movement)
- LFO → PW: 50% (evolving timbre)
- LFO Rate: 1/2 bar (slow modulation)

**Add Effects:**
- Vintage Phaser (slow)
- Delay (1/8 dotted, ping-pong)

**Reference Tracks:**
- Frank Ocean - "Nights"
- The Weeknd - "House of Balloons"
- Thundercat - "Them Changes"

### 4. Lo-Fi Hip-Hop (Chill)

**Settings:**
- Cutoff: 20%
- Add **Edison** to record → **downsample** to 22kHz
- Add **Fruity Squeeze** for vintage warmth
- **Vinyl noise** layered underneath

**Vibe:** Warm, nostalgic, tape-saturated

**Reference Tracks:**
- Nujabes - "Feather"
- J Dilla - "Don't Cry"

---

## Mixing Tips for Hip-Hop Bass

### Frequency Management
**The 808 Sweet Spot:**
- **40-60Hz:** Pure sub (felt, not heard)
- **80-120Hz:** Body and power
- **2-4kHz:** Definition for small speakers

### Mono vs. Stereo
- **Keep bass MONO below 120Hz**
- Use **Fruity Stereo Shaper** to force mono on low end
- Can add **subtle stereo width** above 200Hz

### Loudness Without Clipping
1. **Don't boost sub above +3dB**
2. Use **Fruity Limiter** on master with -0.3dB ceiling
3. **Sidechain** bass to kick (essential)
4. Add **harmonics** with subtle distortion instead of volume

### The "iPhone Speaker Test"
Your bass should still be **felt/heard** on phone speakers:
- Boost 2-4kHz slightly
- Add light saturation
- Check mix in **mono**

---

## Advanced Techniques

### 1. 808 Slides (Glide/Portamento)
- **Overlap notes** in piano roll by 1-2 ticks
- Start on root, slide up 3-7 semitones
- Quick slides (50-100ms) for trap
- Slow slides (200-400ms) for R&B

**Example Pattern:**
`\`\`
Beat 1: C1 (sustain)
Beat 3: C1 → D1 (quick slide)
Beat 4: D1 → F1 (longer slide)
`\`\`

### 2. Kick + 808 Layering
- **Kick:** Handles 40-80Hz punch
- **808:** Handles 60-150Hz body and sustain
- **EQ the kick:** High-pass at 80Hz
- **EQ the 808:** Notch at 50Hz (make room for kick)

### 3. Parallel Processing
- **Main 808:** Clean, untouched
- **Send to FX channel:** Heavy saturation + chorus
- **Blend:** 80% dry, 20% wet
- *Result:* Powerful but controlled

### 4. Automation for Movement

**Moody Vibe:**
- Automate **Cutoff** slowly (4-8 bar cycles)
- Start at 15%, rise to 30%, back down
- Creates breathing, evolving bass

**Psychedelic Vibe:**
- Automate **LFO Rate** to speed up/slow down
- Automate **Env Mod** for intensity changes
- Creates unpredictable, trippy movement

---

## Preset Starting Points

### "Trap Sub 808"
`\`\`json
{
  "waveform": 100,
  "cutoff": 18,
  "resonance": 8,
  "envMod": 15,
  "decay": 80,
  "hp": 0,
  "distortion": 25
}
`\`\`

### "Melodic R&B Bass"
`\`\`json
{
  "waveform": 100,
  "cutoff": 25,
  "resonance": 12,
  "envMod": 30,
  "decay": 65,
  "lfoToPw": 30,
  "lfoRate": 25
}
`\`\`

### "Psychedelic Sub"
`\`\`json
{
  "waveform": 75,
  "cutoff": 30,
  "resonance": 20,
  "envMod": 45,
  "decay": 70,
  "lfoToPw": 60,
  "lfoRate": 15
}
`\`\`

---

## Common Mistakes

1. **Too much resonance:** Keep it under 20% for hip-hop
2. **Notes too short:** 808s need to sustain and breathe
3. **Playing too high:** Stay in C1-C2 range
4. **No sidechain:** Bass and kick will fight
5. **Too much low-end boost:** Leads to clipping

---

## Reference Artists & Producers

**Trap/Modern:**
- Metro Boomin
- Southside
- London On Da Track
- Wheezy

**Melodic Hip-Hop:**
- J. Cole
- Kanye West
- Mac Miller
- Tyler, The Creator

**Psychedelic R&B:**
- Frank Ocean
- The Weeknd
- Thundercat
- PARTYNEXTDOOR

**Lo-Fi:**
- Nujabes
- J Dilla
- Knxwledge
- Tomppabeats

---

## Next Steps

1. **Master the fundamentals:** Get one solid 808 sound
2. **Learn sidechain compression:** Essential for hip-hop
3. **Study reference tracks:** A/B your bass with pros
4. **Experiment with slides:** Makes bass melodic and interesting
5. **Add movement:** Subtle automation keeps it alive

---

**Related Workflows:**
- [Sidechain Bass to Kick](./sidechain-compression-hiphop.md)
- [Melodic Bass Lines for R&B](./melodic-bass-rnb.md)
- [Lo-Fi 808 Processing](./lofi-bass-texture.md)

---

**Last Updated:** February 3, 2026
**Genre:** Hip-Hop, Trap, R&B, Lo-Fi
**Vibe:** 🔥 Certified Hood Classic

```

---

## FILE: 03-Workflows\by-goal\advanced-acid-techniques.md

```markdown
# Advanced Acid Techniques

## Filter Automation Strategies

### Classic Acid Filter Sweep
**Pattern**: 8-bar progression
- Bar 1-2: Low cutoff (25-35)
- Bar 3-4: Gradual rise (35-55)
- Bar 5-6: Peak (55-75)
- Bar 7-8: Return to start

**Implementation**:
1. Automate cutoff knob
2. Add subtle resonance sweep
3. Time slides with filter movements
4. Use accent on peak moments

### Multi-Stage Filter Rhythm
**Technique**: Create rhythmic filter patterns
- **Bounce**: Cutoff 40-60 on offbeats
- **Pulse**: Quick cuts between 30-70
- **Wave**: Smooth sine wave automation

### Resonance Modulation
**Advanced**: Automate resonance alongside cutoff
- Keep resonance below 80 for musical results
- Increase resonance during filter peaks
- Use lower resonance for bass-heavy sections

## Pattern Programming Advanced

### Polyrhythmic Sequences
**Concept**: Overlay different rhythm patterns
- **3 over 4**: triplet feel over 4/4
- **Syncopation**: emphasize 2 and 4
- **Rests**: strategic silence builds tension

### Slide Programming
**Techniques**:
- Short slides: 16th note transitions
- Long slides: octave glides
- Patterned slides: every 3rd note
- Random slides: organic feel

### Accent Logic
**Patterns**:
- **Four on the floor**: accent on 1,2,3,4
- **Backbeat**: accent on 2 and 4
- **Syncopated**: accent on offbeats
- **Random**: 25% probability

## Sound Design Techniques

### Distortion Chain
**Signal Flow**: TB → Distortion → EQ → Compression
1. **Overdrive**: 15-25% gain increase
2. **Bitcrush**: subtle reduction (14-16 bit)
3. **EQ Boost**: 100-200Hz +3dB
4. **Compression**: 4:1 ratio, fast attack

### Layering Strategies
**Sub-Bass Layer**:
- Pure sine wave one octave below
- Sidechain compression with main bass
- Low-pass at 80Hz
- Mono output

**Mid-Range Harmonics**:
- Square wave at same pitch
- Band-pass 200-800Hz
- Stereo width enhancement
- Gentle saturation

## Performance Techniques

### Real-time Manipulation
**Live Performance Setup**:
- **MIDI CC#1**: Cutoff control
- **MIDI CC#2**: Resonance control
- **MIDI CC#3**: Decay control
- **Mod Wheel**: Filter envelope amount

### Pattern Switching
**Workflow**: Create multiple patterns
- **Verse**: Simple, filtered bass
- **Chorus**: Active, resonant bass
- **Bridge**: Melodic variation
- **Drop**: Maximum intensity

### Freeze & Render
**Optimization**:
1. Record MIDI to audio
2. Apply external processing
3. Render with effects
4. Reduce CPU load
```

---

## FILE: 03-Workflows\by-goal\classic-acid-bass-creation.md

```markdown
# Classic Acid Bass Creation with Transistor Bass

**Difficulty:** Beginner
**Time Required:** 10-15 minutes
**Goal:** Create an authentic TB-303 style acid bassline
**Genre:** Acid House, Techno, Psy-Trance

---

## Prerequisites

- Transistor Bass loaded in FL Studio
- Understanding of basic sequencer operation
- Reference track with acid bass (optional but recommended)

---

## Workflow Steps

### Step 1: Engine and Waveform Setup

1. **Select Engine:** Choose **V2 TB303** from the engine dropdown
   - *Why:* Most accurate emulation of the original hardware

2. **Set Waveform:** Move the **Waveform** slider to full **Square** (left position)
   - *Why:* Square wave is the classic acid sound - bright and aggressive

---

### Step 2: Filter Configuration (The Heart of Acid)

3. **Initial Cutoff:** Set **Cutoff** to ~**25-35%**
   - *Why:* Starting point for filter sweeps
   - *Tip:* You'll modulate this with the envelope

4. **High Resonance:** Set **Resonance** to **65-80%**
   - *Why:* Creates the signature "screaming" acid character
   - *Warning:* Too high and you get piercing, painful sounds

5. **Envelope Modulation:** Set **Env Mod** to **70-85%**
   - *Why:* This makes the filter sweep dramatically
   - *Tip:* Higher values = more pronounced "squelch"

6. **Decay Time:** Set **Decay** to **35-45%**
   - *Why:* Controls how fast the filter closes
   - *Experimentation:* Short decay = plucky, long decay = sweeping

---

### Step 3: Accent Configuration

7. **Accent Amount:** Set **Accent** to **50-60%**
   - *Why:* Adds dynamic emphasis to selected steps
   - *Note:* Accent affects cutoff, resonance, AND volume simultaneously

---

### Step 4: Programming the Sequence

8. **Open Sequencer:** Ensure sequencer mode is enabled (button should be lit)

9. **Set Pattern Length:** Start with **16 steps** (full bar in 16th notes)

10. **Program Basic Pattern:**
    `\`\`
    Step:  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16
    Gate:  ■  □  ■  □  ■  □  ■  □  ■  □  ■  □  ■  □  ■  □
    Note:  C  -  C  -  C  -  D# -  C  -  C  -  F  -  G  -
    `\`\`
    - Press **G** to toggle gates on odd steps
    - Use arrow keys to navigate, **Up/Down** to change notes

11. **Add Slides:**
    - Select steps 3, 7, 11, 15
    - Press **S** to enable slide (portamento)
    - *Result:* Notes glide into each other for liquid movement

12. **Add Accents:**
    - Select steps 1, 5, 9, 13 (downbeats)
    - Press **A** to enable accent
    - *Result:* Emphasized hits with more filter opening

---

### Step 5: Fine-Tuning the Sound

13. **Adjust Gate Length:** Set to **60-70%**
    - *Why:* Prevents notes from overlapping too much
    - *Tip:* Shorter = more staccato, longer = more legato

14. **Add Swing:** Set **Swing/Shuffle** to **15-25%**
    - *Why:* Makes the groove less robotic
    - *Genre note:* Classic acid tends to be straight, but slight swing works

15. **Octave Selection:** Try **Octave 2 or 3**
    - *Why:* Classic acid sits in the low-mid range
    - *Tip:* Octave 1 = very deep, Octave 3 = more present

---

### Step 6: Advanced Tweaks

16. **Filter Key Follow:** Add **20-30%**
    - *Why:* Makes higher notes brighter
    - *Note:* This wasn't in the original TB-303

17. **VCA Smooth:** Increase to **30-40%** if you hear clicks
    - *Why:* Removes attack/release artifacts
    - *When:* Especially important with short decay times

---

### Step 7: Add Character with Effects

18. **Distortion (Pro Co Rat):**
    - **Drive:** 45-60%
    - **Tone:** 55-65%
    - **Mix:** 70-100%
    - *Why:* Adds warmth and aggression (inspired by Hardfloor)

19. **Delay (Optional):**
    - **Time:** 1/16th note (sync to BPM)
    - **Feedback:** 25-35%
    - **Mix:** 15-25%
    - *Why:* Creates space and rhythmic doubling

20. **Reverb (Subtle):**
    - **Size:** Small to medium
    - **Mix:** 10-15%
    - *Why:* Just enough to sit in the mix without washing out

---

## Advanced Variations

### Variation 1: "Harder" Acid (Hardfloor Style)
- Increase **Distortion Drive** to 75%+
- Push **Resonance** to 85%+
- Use **Sawtooth** waveform instead of square
- Result: More aggressive, industrial sound

### Variation 2: "Liquid" Acid
- Reduce **Resonance** to 45-55%
- Increase **Decay** to 60-70%
- More slides (every 2nd note)
- Less accents (only on beats 1 and 3)
- Result: Smoother, more melodic lines

### Variation 3: "303 Bass" (Less Acid, More Sub)
- Lower **Cutoff** to 15-20%
- Reduce **Resonance** to 30%
- Minimal **Env Mod** (20-30%)
- No distortion
- Result: Deep bass foundation instead of acid lead

---

## Melody Programming Tips

### Classic Acid Patterns
1. **Root Note Focus:** Build patterns around a root note (usually C or D)
2. **Octave Jumps:** Occasional jumps up an octave for tension
3. **Chromatic Movement:** Half-step slides create tension/release
4. **Repetition:** Acid thrives on hypnotic repetition with subtle variation

### Note Distribution
- **Steps 1, 5, 9, 13:** Root note (foundation)
- **Steps 3, 7, 11, 15:** Fifth or octave (movement)
- **Other steps:** Passing tones, chromatic fills

### Rhythm Secrets
- **Gate Density:** Not every step needs a gate - silence is powerful
- **Slide Placement:** Use slides sparingly (every 4th step max)
- **Accent Pattern:** Downbeats (1, 5, 9, 13) OR off-beats (2, 6, 10, 14)

---

## Mixing Integration

### Frequency Management
- **HPF:** Use **HP** control at 15-20% to remove sub-20Hz rumble
- **Cutoff Automation:** Automate cutoff for build-ups (close filter, then open)
- **EQ Post-Processing:** Cut 200-300Hz if it sounds muddy in the mix

### Sidechain Compression
- Sidechain Transistor Bass to the kick drum
- Fast attack, medium release
- Result: Bass "ducks" under kick, creating pumping effect

### Stereo Width
- Transistor Bass is **mono** by default
- Add stereo width with:
  - Fruity Stereo Enhancer (subtle)
  - Stereo delay (left/right offset)
  - Chorus effect (very light)

---

## Common Mistakes to Avoid

1. **Over-Resonance:** Resonance above 90% can be harsh and painful
2. **Too Much Env Mod:** 100% envelope modulation can sound uncontrolled
3. **Excessive Slides:** Every note sliding = muddy, undefined bass
4. **Ignoring Accents:** Accents are what make acid DYNAMIC
5. **Forgetting Decay:** Decay time is as important as cutoff/resonance

---

## Preset Recall Workflow

### Saving Your Sound
1. Create your perfect acid sound in the **Edit Buffer**
2. Click **Write** to save to a program slot (1-128)
3. Name the program descriptively (e.g., "Classic Acid 01")

### Multi-Pattern Projects
1. Save the **Patch** (sound) to a program
2. Use the **same patch** across multiple programs
3. Change only the **sequence** data per program
4. Result: Consistent timbre across different melodic patterns

---

## Genre-Specific Adaptations

### Acid House (Classic 303)
- Moderate resonance (60-70%)
- Balanced envelope modulation (70%)
- Medium decay (40-50%)
- Subtle distortion

### Psy-Trance (Aggressive)
- Maximum resonance (80%+)
- Full envelope modulation (90%+)
- Heavy distortion (60%+)
- Faster sequences (1/32 notes possible)

### Techno (Minimal)
- Lower resonance (40-50%)
- Controlled envelope modulation (50-60%)
- Longer decay (60%)
- Focus on rhythm over filter movement

---

## Next Steps

After mastering this workflow:

1. **Explore the Wasp/Wasp XT** for alternative acid sounds
2. **Learn Sytrus FM Bass** for modern acid variations
3. **Study Patcher** to create custom TB-303 FX chains
4. **Experiment with automation** on cutoff, resonance, and effects

---

**Related Workflows:**
- [Deep Sub Bass Creation](./deep-sub-bass-creation.md)
- [Acid Bass with Piano Roll](./acid-bass-piano-roll.md) (using automation instead of sequencer)
- [Multi-Pattern Acid Lines](./multi-pattern-acid-composition.md)

---

**Last Updated:** February 3, 2026
**Status:** 🟢 Complete workflow

```

---

## FILE: 03-Workflows\by-goal\urban-acid-funky-basslines.md

```markdown
# Workflow: Urban Acid & Funky Basslines
**Goal:** Repurposing the aggressive TB-303 sound of Transistor Bass for **Funky**, **Jazzy**, or **Moody** Hip-Hop basslines.

## 1. The "Clean" Funky Bass
*Used for: G-Funk, Neo-Soul.*
- **Oscillator:** Use the **Sawtooth** for more "bite" or **Square** for a "hollow" 70s feel.
- **Filter Cutoff:** Set it low (~20%).
- **Resonance:** Keep it moderate (~30%). Avoid the "chirp" for a cleaner funk sound.
- **The Playstyle:** Instead of fast "Techno" sequences, play long, held notes with occasional fast "slides" (legato) using the pitch bend.

## 2. The "Dark Trap" Acid Bass
*Used for: Moody Trap, aggressive drill-style backgrounds.*
- **Distortion:** Crank the internal Distortion to ~60%.
- **Filter Envelope:** Increase the "Env Mod" to 100%. This makes the filter "snap" on every note.
- **Decay:** Set to a very short value (~10-20%).
- **Result:** A "plucky," distorted bass that hits hard and leaves room for the 808 sub.

## 3. The "Liquid" Soulful Sequence
- **Resonance:** Crank it to **80%+**.
- **LFO/Automation:** Automate the **Cutoff** knob slowly over 8 bars.
- **The "Accent" Trick:** In the Transistor Bass sequencer, mark every 4th note as an "Accent." This adds a rhythmic "pulse" that makes the bassline feel less robotic.

## 4. Signal Chain for Urban Vibes
1. **Transistor Bass** (Source)
2. **Fruity Chorus:** To widen the sound and give it a "vintage" analog feel.
3. **LuxeVerb:** A very small "Room" reverb to make it sound like it was recorded in a studio.
4. **Low Lifter:** To add the sub-bass weight that the original TB-303 lacks.

```

---

## FILE: 04-Reference\01_Official_Links.md

```markdown
# Transistor Bass - Official Links & Resources

## Official Documentation

### Primary Manual
- **Main Page:** [Transistor Bass Plugin](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Transistor%20Bass.htm)
- **Publisher:** Image-Line
- **Last Verified:** February 3, 2026

## Hardware Reference

### Original Hardware
- **Emulates:** Roland TB-303 Bass Line
- **Released:** 1982
- **Type:** Monophonic bass synthesizer with built-in sequencer
- **Legacy:** Cornerstone of acid house, techno, and electronic music

### Historical Context
- Originally designed for bass guitar accompaniment
- Largely unsuccessful upon release (discontinued 1984)
- Gained cult status in mid-1980s acid house movement
- Artists: Phuture, 808 State, Hardfloor, Josh Wink, Aphex Twin

## Plugin Enhancements Over Hardware

Transistor Bass extends beyond the original TB-303:

1. **Multiple Engine Options**
   - V1 Legacy (compatibility)
   - V2 Extended (enhanced range)
   - V2 TB303 (authentic emulation)

2. **Modern Features**
   - Filter Key Follow (not in original)
   - Integrated effects (Distortion, Delay, Reverb)
   - 128-program memory system
   - Piano roll integration
   - MIDI automation

3. **Effects Suite**
   - **Distortion:** Pro Co Rat guitar pedal emulation
   - **Delay:** BPM-synchronized
   - **Reverb:** Based on FL Reeverb 2

## Community Resources

### FL Studio Forums
- **Forum Section:** [FL Studio Instruments](https://forum.image-line.com/viewforum.php?f=200)
- **Search Query:** "Transistor Bass acid" OR "TB-303"

### Video Tutorials
- **Official FL Studio Channel:** [YouTube](https://www.youtube.com/user/FLStudio)
- **Search:** "FL Studio Transistor Bass tutorial"

## Related Plugins in FL Studio

### Similar Synthesis
- **BooBass** - Alternative subtractive bass synth
- **Sawer** - Advanced subtractive with more modulation
- **Wasp/Wasp XT** - Discontinued but similar architecture

### Complementary Effects
- **Fruity Parametric EQ 2** - For surgical bass EQ
- **Maximus** - Multiband processing for bass
- **Fruity Limiter** - Bass loudness control

## Preset Packs & Sound Banks

### Factory Presets
- **Location:** FL Studio\Data\Patches\Plugin presets\Generators\Transistor Bass\
- **Count:** 128 factory programs included

### Third-Party Banks
- **Search:** "Transistor Bass presets" on producer communities
- **Compatible:** .fnk files (bank format), .fnp (program format)

## External Resources

### TB-303 History & Techniques
- **Wikipedia:** [Roland TB-303](https://en.wikipedia.org/wiki/Roland_TB-303)
- **Documentary:** "The Roland TR-808 and TB-303 Story"
- **Book:** "Push Turn Move" (interviews with synth designers)

### Acid Music Production
- **Genre Guide:** "What Is Acid House?" (various online music sites)
- **Classic Tracks Analysis:** Study Phuture's "Acid Tracks" (1987)

## Production Techniques

### Reference Tracks for Study
1. **Phuture - "Acid Tracks"** (1987) - Definitive acid house
2. **Hardfloor - "Acperience"** (1992) - Heavy distortion style
3. **Josh Wink - "Higher State of Consciousness"** (1995) - Modern acid
4. **808 State - "Pacific State"** (1989) - Melodic acid
5. **Aphex Twin - "Polynomial-C"** (1992) - Experimental acid

### Mixing Resources
- **EQ Guide:** How to mix 303 bass with kick drums
- **Sidechain Compression:** Techniques for pumping bass
- **Stereo Imaging:** When/how to widen mono bass

## Software Alternatives (Outside FL Studio)

### Other TB-303 Emulations
- **Audiorealism ABL3** - Highly regarded emulation
- **D16 Phoscyon** - Modern take on 303
- **Roland Cloud TB-303** - Official Roland software version
- **TAL-BassLine-101** - Free alternative

### Comparison Use Cases
- Understanding different interpretations
- A/B testing Transistor Bass accuracy
- Learning alternative workflows

## Technical Specifications

### System Requirements
- **FL Studio Version:** 20.x, 21.x+
- **Platform:** Windows, macOS
- **Format:** Native FL Studio plugin (not VST/AU)
- **CPU:** Low CPU usage (efficient)

### MIDI Implementation
- **Input:** Standard MIDI note messages
- **Channel 13:** Reserved for sequence transposition
- **Velocity Sensitivity:** ≥86% triggers accent
- **CC Support:** Limited to main parameters

## Support & Troubleshooting

### Official Support
- **Image-Line Forum:** [Support Section](https://forum.image-line.com/viewforum.php?f=100)
- **Knowledge Base:** [FL Studio Support](https://support.image-line.com/)
- **Bug Reports:** Via FL Studio forum with system info

### Common Issues
- **Click/Pop Artifacts:** Increase VCA Smooth parameter
- **Too Harsh:** Reduce Resonance, check Accent usage
- **Not Sounding Like 303:** Verify V2 TB303 engine selected
- **Sequencer Not Playing:** Check sequencer mode enabled

---

**Last Updated:** February 3, 2026
**Status:** 🔗 Complete reference links

```

---

## FILE: 04-Reference\faq.md

```markdown
# Transistor Bass FAQ

## General Questions

### Q: What's the difference between Transistor Bass and a real TB-303?
**A**: Transistor Bass emulates the classic TB-303 sound but adds modern features like MIDI control, preset management, and DAW integration. While very close to the original, purists may notice subtle differences in filter character and slide behavior.

### Q: Can Transistor Bass run on Mac and Windows?
**A**: Yes, Transistor Bass is available for both Windows (VST) and Mac (VST/AU) formats. Check the specific version compatibility with your DAW.

### Q: Does Transistor Bass require activation?
**A**: Activation requirements vary by version. Some versions use serial numbers, others use iLok or online activation. Keep your license information secure.

## Sound Design Questions

### Q: How do I get that classic acid sound?
**A**: Start with high resonance (75-85%), medium cutoff (60-70%), short decay (30-40%), and use slides between notes. Add accent automation for emphasis.

### Q: Why does my bass sound weak in the mix?
**A**: Common causes include low cutoff frequency, insufficient resonance, or missing sub-bass layer. Try increasing cutoff to 12-2 o'clock position and layer with a sine wave sub-bass.

### Q: Can Transistor Bass create sub-bass?
**A**: While the main circuit is focused on mid-range, you can layer a separate sine wave sub-bass or use the built-in sub-oscillator if available in your version.

## Technical Questions

### Q: What's the best buffer size for live performance?
**A**: For live performance, use 128-256 samples for good balance between latency and CPU stability. Studio work can use 512-1024 samples.

### Q: How many instances can I run?
**A**: This depends on your CPU power and buffer settings. Modern systems can typically handle 4-8 instances, but freeze tracks when possible to save CPU.

### Q: Is Transistor Bridge 64-bit compatible?
**A**: Most recent versions support both 32-bit and 64-bit. Check with the manufacturer if you need specific compatibility information.

## Workflow Questions

### Q: How do I create patterns quickly?
**A**: Use the built-in sequencer for classic step programming, or draw MIDI notes in your DAW's piano roll for more complex patterns. Start with simple sequences and add accents/slides.

### Q: Can I automate all parameters?
**A**: Most parameters can be automated via MIDI CC or DAW automation. Common automation targets include cutoff, resonance, decay, and accent amount.

### Q: What's the best way to process Transistor Bass?
**A**: Classic chain: Distortion → EQ → Compression → Reverb. Modern chain: Multi-band processing → Stereo imaging → Limiter.

## Troubleshooting Questions

### Q: Why is there no sound coming out?
**A**: Check: mixer channel volume, MIDI channel settings, plugin bypass status, and audio interface configuration.

### Q: The timing seems off, what's wrong?
**A**: Verify your DAW's timing settings, check buffer size, ensure proper MIDI sync, and test with a simple project.

### Q: Presets aren't loading correctly?
**A**: Check preset folder permissions, verify preset format compatibility, try reinstalling the plugin, or contact support.

## Integration Questions

### Q: Can I use Transistor Bass with other DAWs?
**A**: Yes, as a VST/AU plugin, it works with most major DAWs including Ableton Live, Logic Pro, Cubase, and others.

### Q: How do I control it with hardware?
**A**: Map MIDI CC controls to your controller. Common assignments: Mod Wheel → Cutoff, Knob 2 → Resonance, Footswitch → Accent.

### Q: Can I export patterns as MIDI?
**A**: Most implementations allow MIDI export via your DAW's MIDI export function. Record the MIDI output and save as a standard MIDI file.
```

---

## FILE: 04-Reference\maintenance-guide.md

```markdown
# Transistor Bass Maintenance & Optimization

## System Optimization

### CPU Performance
**Best Practices**:
- Use appropriate buffer sizes
- Limit simultaneous instances
- Freeze rendered tracks
- Optimize plugin settings

### Memory Management
**Techniques**:
- Close unused projects
- Clear plugin cache
- Use 64-bit version if available
- Monitor RAM usage

### Audio Interface Optimization
**Settings**:
- ASIO drivers preferred
- Exclusive mode enabled
- Proper sample rate matching
- Buffer size tuning

## Plugin Maintenance

### Regular Updates
**Update Process**:
1. Check manufacturer website
2. Backup current presets
3. Update plugin version
4. Verify preset compatibility
5. Test functionality

### Preset Management
**Organization**:
- Genre-based preset folders
- Backup important presets
- Export custom presets
- Document custom settings

### Settings Backup
**What to Backup**:
- Custom presets
- MIDI mappings
- Template projects
- Automation patterns

## Troubleshooting Common Issues

### Installation Problems
**Solutions**:
- Run installer as administrator
- Check plugin location permissions
- Verify FL Studio plugin paths
- Restart DAW after installation

### Performance Degradation
**Diagnostics**:
- Monitor CPU usage
- Check audio driver status
- Test with different buffer sizes
- Disable conflicting plugins

### Preset Loading Issues
**Fixes**:
- Verify preset file integrity
- Check preset folder permissions
- Reimport corrupted presets
- Reset to factory defaults

## Long-term Maintenance

### Documentation
**Keep Records Of**:
- Custom preset parameters
- MIDI controller mappings
- Integration workflows
- Performance settings

### Archive Strategy
**Best Practices**:
- Version control for projects
- Preset versioning
- Backup schedule
- Offsite storage copies

### Training Resources
**Stay Updated**:
- Manufacturer tutorials
- Community forums
- YouTube tutorials
- Online courses
```

---

## FILE: 04-Reference\technical-specifications.md

```markdown
# Transistor Bass Technical Reference

## Audio Engine Specifications

### Synthesis Engine
- **Oscillators**: Single sawtooth/pulse VCO
- **Filter**: 24dB/octave low-pass ladder filter
- **Envelope**: Simple AD envelope for filter
- **Sequencer**: 16-step programmable sequencer
- **Processing**: Internal 32-bit floating point

### Filter Characteristics
- **Cutoff Range**: 20Hz - 20kHz
- **Resonance Range**: 0 - self-oscillation
- **Slope**: 24dB/octave (-24dB)
- **Response**: Emulated transistor ladder
- **Distortion**: Soft clipping at high resonance

### Envelope Parameters
- **Attack**: Fixed very fast (2-5ms)
- **Decay**: Adjustable, 100ms - 8 seconds
- **Sustain**: Fixed at 0%
- **Release**: Same as decay setting

## MIDI Implementation

### MIDI CC Assignments
- **CC#1**: Modulation → Filter Cutoff
- **CC#7**: Volume → Main Output
- **CC#10**: Pan → Stereo Position
- **CC#74**: Filter Cutoff (fine)
- **CC#71**: Filter Resonance
- **CC#73**: Attack Time (if available)
- **CC#72**: Release/Decay Time
- **CC#75**: Filter Q (resonance variation)

### Note Range
- **Effective Range**: C1 - C5 (MIDI notes 24-84)
- **Optimal Range**: C1 - C3 (MIDI notes 24-48)
- **Tuning Range**: ±24 semitones
- **Fine Tuning**: ±100 cents

## Audio Specifications

### Sample Rate Support
- **Supported Rates**: 44.1kHz, 48kHz, 88.2kHz, 96kHz
- **Internal Processing**: Variable, up to 192kHz
- **Oversampling**: 2x, 4x, 8x options
- **Quality Settings**: Economy, Normal, High, Ultra

### Latency
- **Processing Delay**: 0-2 samples (native mode)
- **Additional Latency**: Host buffer dependent
- **Lookahead**: Optional 0-64 samples
- **Compensation**: Automatic PDC support

## File Formats

### Preset Formats
- **Windows**: .tbp (Transistor Bass Preset)
- **Mac**: .tbp (cross-platform compatible)
- **Bank Files**: .tbb (Transistor Bass Bank)
- **MIDI Export**: Standard .mid files

### Project Integration
- **VST2**: Standard .dll extension
- **VST3**: Standard .vst3 extension
- **AU**: Standard .component bundle
- **AAX**: Pro Tools support (if available)

## Performance Specifications

### CPU Usage
- **Single Instance**: 0.5% - 2% (modern CPU)
- **Multiple Instances**: Linear scaling
- **Oversampling Impact**: +25% per 2x increase
- **Voice Count**: Monophonic only

### Memory Usage
- **Base RAM**: 15-25MB per instance
- **Additional Presets**: +1-2MB per 100 presets
- **Streaming**: No streaming required
- **Cache**: Plugin state ~50KB

## Compatibility

### Operating Systems
- **Windows**: Windows 7 SP1 - Windows 11
- **macOS**: OS X 10.9 - macOS 14+
- **Linux**: Via Wine or similar (unofficial)

### DAW Compatibility
- **FL Studio**: Native support
- **Ableton Live**: VST/AU support
- **Logic Pro**: AU support
- **Cubase**: VST/VST3 support
- **Pro Tools**: AAX (if version supports)
- **Studio One**: VST/VST3/AU support

## Technical Limitations

### Known Issues
- **High Resonance**: Can cause aliasing at high cutoffs
- **Extreme Settings**: May produce digital artifacts
- **CPU Load**: Increases with multiple instances
- **Memory**: Limited to single instance per project in some versions

### Workarounds
- **Aliasing**: Use oversampling or lower cutoff
- **CPU Issues**: Freeze tracks or increase buffer
- **Memory**: Use project templates
- **Compatibility**: Use bridge wrapper if needed
```

---

