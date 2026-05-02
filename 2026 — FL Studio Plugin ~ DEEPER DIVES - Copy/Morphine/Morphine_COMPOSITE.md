# Morphine - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 00-START-HERE.md

```markdown
# Morphine - Start Here

Welcome to the **Morphine** Deeper Dive. Morphine is FL Studio's additive/wavetable synthesizer with morphing capabilities.

## What is Morphine?

Morphine creates sounds by:
- Additive synthesis (harmonic series)
- Morphing between waveforms
- Creating smooth transitions
- Generating complex textures

## Quick Navigation

### 1. The Essentials
- **[README.md](./README.md):** Overview
- **[00-START-HERE.md](./00-START-HERE.md):** Start here
- **[01-Learning/Quick-Reference/quick-reference.md](./01-Learning/Quick-Reference/quick-reference.md):** Parameters

### 2. Core Concepts
- **[01-Learning/Concepts/morphing.md](./01-Learning/Concepts/morphing.md):** Understanding morphing
- **[01-Learning/Concepts/additive-synthesis.md](./01-Learning/Concepts/additive-synthesis.md):** Synthesis basics

### 3. Workflow Recipes
- **[03-Workflows/by-instrument/INDEX.md](./03-Workflows/by-instrument/INDEX.md):** Sound-type guides

---

*For presets and technical data, see the [02-Data/](./02-Data/) folder.*

```

---

## FILE: README.md

```markdown
# Morphine - Additive Powerhouse

`\`\`
███╗   ███╗ ██████╗ ██████╗ ██████╗ ██╗  ██╗██╗███╗   ██╗███████╗
████╗ ████║██╔═══██╗██╔══██╗██╔══██╗██║  ██║██║████╗  ██║██╔════╝
██╔████╔██║██║   ██║██████╔╝██████╔╝███████║██║██╔██╗ ██║█████╗  
██║╚██╔╝██║██║   ██║██╔══██╗██╔═══╝ ██╔══██║██║██║╚██╗██║██╔══╝  
██║ ╚═╝ ██║╚██████╔╝██║  ██║██║     ██║  ██║██║██║ ╚████║███████╗
╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝
`\`\`

**Plugin Type:** Additive Synthesizer / Resynthesizer
**Category:** Generator / Advanced Synthesis
**Official Manual:** [Image-Line Morphine Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Morphine.htm)

---

## 🎯 What is Morphine?

Morphine is a powerful additive synthesizer that generates sound by stacking sine wave harmonics. Unlike subtractive synths (which use filters to remove frequencies), Morphine builds complex tones from the ground up. It features an incredibly flexible architecture with 4 independent generators, a high-quality resynthesis engine, and 128 keyboard zones for complex layering. It is the ultimate tool for creating realistic instrument emulations or evolving spectral pads.

**Key Capabilities:**
- **Additive Engine:** Generate sound from up to 128 harmonics per voice.
- **Harmonic Breakpoints:** Create evolving spectra with unlimited snapshots.
- **Sample Resynthesis:** Import WAV/AIFF files and convert them into editable harmonics.
- **4-Generator Architecture:** Morph between four distinct synthesized sounds.
- **Keyboard Layering:** Assign different sounds to 128 unique keyboard zones.
- **PWM Filters:** Specialized spectral filters for unison and width effects.
- **Noise Generator:** Inject untuned noise for realistic attacks or grit.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **additive-synthesis-101.md**
3. Create **parameter-cheat-sheet.md**
4. Load a factory preset and look at the "Harmonics" display while moving the Morph envelope.

### For Sound Designers:
1. Study **sample-resynthesis-workflow.md**
2. Review **creating-harmonic-snapshots.md** (Breakpoints)
3. Learn **keyboard-zone-layering.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [x] **parameter-cheat-sheet.md**
- [ ] **additive-vs-subtractive.md**

#### 02-Data/parameters/
- [x] **morphine-signal-path.json**

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [x] **realistic-piano-resynthesis.md**
- [x] **evolving-ethereal-pads.md**
- [x] **creating-metallic-percussion.md**

---

## 🔬 Research Framework

### Phase 1: Harmonic Sculpting (Week 1)
**Goal:** The Additive Grid

**Tasks:**
1. Build a Sawtooth wave using only harmonics (1, 1/2, 1/3, 1/4 volume ratio)
2. Use the "Draw" tool to create a custom harmonic profile
3. Experiment with the detune and pan sliders for individual harmonics
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do I add a new Breakpoint?
- What is the difference between "Spectrum" and "Envelope" in Morphine?

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it so quiet? (Check the Generator mix levels and individual harmonic volumes).
2. How do I stop it from clicking? (Check the ADSR attack settings).

---

## 🔗 Cross-Reference with Other Plugins

Morphine is often used with:
- **Harmless/Harmor** (Comparison of additive approaches)
- **Edison** (Preparing samples for resynthesis)

---

## 📦 File Structure Summary

`\`\`
Morphine/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── additive-vs-subtractive.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── morphine-signal-path.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── realistic-piano-resynthesis.md
│   │   └── evolving-ethereal-pads.md
│
└── 04-Reference/
    └── resynthesis-algorithm-analysis.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Morphine Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Morphine.htm)
- [Morphine Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Morphine_tutorials.htm)
- [Morphine Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+morphine+tutorial)

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

```

---

## FILE: 01-Learning\Concepts\additive-synthesis-basics.md

```markdown
# Learning: Additive Synthesis Basics (Morphine)
**Goal:** Understanding why Morphine is the "secret weapon" for organic, soulful textures in R&B and Electronic music.

## 1. What is Additive Synthesis?
Unlike subtractive synthesis (which starts with a complex wave and filters it down), Additive synthesis (Morphine) builds a sound by stacking hundreds of individual sine waves (harmonics).

## 2. The "Resynthesis" Advantage
- **The Concept:** You can drag an audio sample (like a vocal or a bell) into Morphine, and it will "re-create" it using sine waves.
- **The "Moody" Application:** Once a vocal is resynthesized, you can "stretch" the harmonics or shift them in ways that are impossible with standard audio, creating that "otherworldly" R&B background texture.

## 3. The 4 Generator Layout
Morphine has 4 independent "Generators" (A, B, C, D).
- **Vibe Hack:** 
    - Use Generator A for the "Transient" (a short, sharp pluck).
    - Use Generator B for the "Sustain" (a slow, evolving pad).
    - Use the **Morphing** slider to blend between them over time.

## 4. Why Morphine for "Soulful" Music?
- **Harmonic Control:** You can manually "draw" in the harmonics you want. For a **Jazzy** Rhodes sound, you would emphasize the lower, warmer harmonics.
- **Noise Layering:** Morphine allows you to add a dedicated "Noise" generator. Adding a small amount of "Vinyl Noise" or "Breath" makes the digital synth feel like an organic recording.

## 5. Quick Reference: The "Urban" Patch Checklist
- **Ethereal Pads:** Slow Attack, High Harmonic complexity, 50% Wet Reverb.
- **Digital Rhodes:** Emphasis on the 1st and 3rd harmonics, 10% Noise (Tine sound).
- **Hard Leads:** High Harmonic "Spectrum" shift, fast LFO to Pitch (Vibrato).

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Morphine Parameter Cheat Sheet

## Generators (A, B, C, D)
- **Concept:** 4 independent synth engines that can be blended.
- **Harmonics:** Individual amplitude/frequency control for 128 sine waves.
- **Noise Generator:** Replays the non-tonal part of a sound (breath, hits).

## Modulation & Evolution
- **Breakpoints:** Snapshots of the harmonic spectrum at specific points in time.
- **Morph Envelope:** Blends between the 4 generators over the note duration.
- **Keyboard Zones:** 128 zones to assign different sounds to different keys.

## Spectral Tools
- **PWM Filters:** Manipulates the spectrum to create unison and width effects.
- **Resynthesis:** Imports WAV files and converts them into editable additive harmonics.

```

---

## FILE: 02-Data\parameters\morphine-signal-path.json

```json
{
  "plugin_name": "Morphine",
  "synthesis": "Additive / Resynthesis",
  "generators": 4,
  "harmonics_per_voice": 128,
  "keyboard_zones": 128,
  "polyphony": 32,
  "built_in_fx": [
    "Chorus",
    "Delay",
    "Reverb",
    "EQ",
    "Distortion"
  ]
}

```

---

## FILE: 02-Data\presets\INDEX.md

```markdown
# Morphine Complete Presets INDEX

## Genre Presets (10 files)
| File | Name | Genre | Mood |
|------|------|-------|------|
| `genre/01-morphing-pad.json` | Morphing Pad | universal | moody |
| `genre/02-aggressive-lead.json` | Aggressive Lead | EDM | aggressive |
| `genre/03-warm-bass.json` | Warm Bass | hip-hop/rap | smooth |
| `genre/04-ethereal-texture.json` | Ethereal Texture | ambient | dreamy |
| `genre/moody-dark-trap-pad.json` | Dark Trap Pad | hip-hop/rap | moody |
| `genre/upbeat-bouncy-lead.json` | Bouncy Lead | hip-hop/rap | upbeat |
| `genre/electro-synth.json` | Electro Synth | hip-hop/rap | electric |
| `genre/jazzy-keys.json` | Jazzy Keys | hip-hop/rap | smooth |
| `genre/funky-bass.json` | Funky Bass | hip-hop/rap | funky |
| `genre/energetic-drill-lead.json` | Drill Lead | hip-hop/rap | energetic |

## Signature Presets (5 files)
| File | Artist | Style |
|------|--------|-------|
| `signature/deadmau5-morph.json` | deadmau5 | Melodic Techno |
| `signature/porter-robinson.json` | Porter Robinson | Future Bass |
| `signature/bonobo-chillout.json` | Bonobo | Chillout |
| `signature/r用地-glitch.json` | Ryo (Suspect) | Glitch Hop |
| `signature/tycho-atmospheric.json` | Tycho | Atmospheric |

## Quick Reference
| Goal | Preset | File |
|------|--------|------|
| Atmospheric pads | Morphing Pad | `genre/01-morphing-pad.json` |
| EDM leads | Aggressive Lead | `genre/02-aggressive-lead.json` |
| Warm bass | Warm Bass | `genre/03-warm-bass.json` |
| Dark trap pads | Dark Trap Pad | `genre/moody-dark-trap-pad.json` |
| Bouncy leads | Bouncy Lead | `genre/upbeat-bouncy-lead.json` |
| Electro synths | Electro Synth | `genre/electro-synth.json` |
| Jazzy keys | Jazzy Keys | `genre/jazzy-keys.json` |
| Funky bass | Funky Bass | `genre/funky-bass.json` |
| Drill leads | Drill Lead | `genre/energetic-drill-lead.json` |

## Workflow Reference
- [Morphine By-Instrument Workflows](../03-Workflows/by-instrument/INDEX.md)
- [Morphine By-Goal Workflows](../03-Workflows/by-goal/INDEX.md)
- [Morphine Safety Rules](../02-Data/rules/morphine-safety-rules.md)

```

---

## FILE: 02-Data\presets\organic-instrument-parameters.md

```markdown
# Data: Organic Instrument Parameters (Morphine)
**Goal:** Leveraging additive synthesis to create "human-feeling" digital instruments.

## 1. The "Ethereal" Vocal Pad
*Character: Airy, ghostly, evolving.*
- **Generator A (Resynthesized Vocal):** Drag a vocal sample into the "Resynthesis" window.
- **Harmonic Filter:** Set to "Low Pass" and automate the cutoff with **LFO 1**.
- **Envelope (Amp):** 
    - Attack: 800ms (Slow swell)
    - Release: 2000ms (Long tail)
- **Spectrum Shift:** Shift harmonics by **+200 cents**. This makes the vocal sound "inhumanly" bright but smooth.

## 2. The "Gritty" Woodwind Lead
*Character: Breathy, funky, vintage.*
- **Generator A (Sawtooth Spectrum):** Focus on Odd Harmonics (1, 3, 5, 7).
- **Noise Generator:** Use "White Noise" | Level 15% | Linked to the Envelope.
- **Envelope (Amp):** 
    - Attack: 50ms (The "breath" before the note)
    - Decay: 200ms
    - Sustain: 70%
- **Portamento:** Set to **Auto** | Time: 100ms (For those soulful slides).

## 3. The "Vintage" Digital Rhodes
*Character: Pure, tined, 80s R&B feel.*
- **Harmonics:** Manually draw the 1st Harmonic at 100% and the 2nd at 10%.
- **Velocity Mapping:** Link "Harmonic Level" to Velocity.
    - Result: When you hit the keys harder, the sound gets brighter (just like a real Rhodes).
- **Detune:** Increase "Unison" to **2 Voices** | Detune: 5% (Wide and lush).

```

---

## FILE: 02-Data\presets\genre\01-morphing-pad.json

```json
{
  "name": "Morphing Pad",
  "genre": "universal",
  "mood": "moody",
  "description": "Evolving pad with smooth morphing",
  "parameters": {
    "fundamental": 80,
    "harmonics": {
      "h2": 70,
      "h3": 50,
      "h4": 40,
      "h5": 30,
      "h6": 20,
      "h7": 15,
      "h8": 10
    },
    "morph": 50,
    "envelope": {
      "attack": 500,
      "decay": 1000,
      "sustain": 70,
      "release": 1500
    },
    "filter": {
      "cutoff": 3000,
      "resonance": 20
    }
  },
  "workflow": {
    "useCase": "Atmospheric pads",
    "steps": [
      "Set fundamental level",
      "Build harmonic series",
      "Add morphing movement",
      "Create slow envelope"
    ],
    "troubleshooting": [
      { "issue": "Static sound", "fix": "Increase morph automation" },
      { "issue": "Harsh", "fix": "Reduce upper harmonics" }
    ]
  },
  "abTest": {
    "listenFor": "Smooth, evolving texture",
    "duration": "Full chord progression"
  }
}
```

---

## FILE: 02-Data\presets\genre\02-aggressive-lead.json

```json
{
  "name": "Aggressive Lead",
  "genre": "EDM",
  "mood": "electric",
  "description": "Powerful lead with harmonic richness",
  "parameters": {
    "fundamental": 100,
    "harmonics": {
      "h2": 90,
      "h3": 80,
      "h4": 70,
      "h5": 60,
      "h6": 50,
      "h7": 40,
      "h8": 30
    },
    "morph": 30,
    "envelope": {
      "attack": 10,
      "decay": 200,
      "sustain": 90,
      "release": 300
    },
    "filter": {
      "cutoff": 5000,
      "resonance": 40
    }
  },
  "workflow": {
    "useCase": "Festival leads",
    "steps": [
      "Boost fundamental",
      "Add rich harmonics",
      "Quick envelope",
      "Bright filter"
    ],
    "troubleshooting": [
      { "issue": "Too bright", "fix": "Lower filter cutoff" },
      { "issue": "No punch", "fix": "Increase fundamental" }
    ]
  },
  "abTest": {
    "listenFor": "Cutting, powerful lead",
    "duration": "Melodic phrase"
  }
}
```

---

## FILE: 02-Data\presets\genre\03-warm-bass.json

```json
{
  "name": "Warm Bass",
  "genre": "R&B",
  "mood": "smooth",
  "description": "Rich bass with warm harmonics",
  "parameters": {
    "fundamental": 100,
    "harmonics": {
      "h2": 60,
      "h3": 40,
      "h4": 25,
      "h5": 15,
      "h6": 10,
      "h7": 5,
      "h8": 0
    },
    "morph": 20,
    "envelope": {
      "attack": 20,
      "decay": 300,
      "sustain": 80,
      "release": 400
    },
    "filter": {
      "cutoff": 2000,
      "resonance": 30
    }
  },
  "workflow": {
    "useCase": "R&B and soul bass",
    "steps": [
      "Strong fundamental",
      "Warm harmonic mix",
      "Medium envelope",
      "Warm filter setting"
    ],
    "troubleshooting": [
      { "issue": "Muddy", "fix": "Reduce harmonics below h4" },
      { "issue": "Thin", "fix": "Increase fundamental" }
    ]
  },
  "abTest": {
    "listenFor": "Warm, rich bass",
    "duration": "Full bass line"
  }
}
```

---

## FILE: 02-Data\presets\genre\04-ethereal-texture.json

```json
{
  "name": "Ethereal Texture",
  "genre": "universal",
  "mood": "moody",
  "description": "Airy, evolving texture with morphing",
  "parameters": {
    "fundamental": 70,
    "harmonics": {
      "h2": 80,
      "h3": 70,
      "h4": 60,
      "h5": 50,
      "h6": 45,
      "h7": 40,
      "h8": 35
    },
    "morph": 80,
    "envelope": {
      "attack": 1000,
      "decay": 2000,
      "sustain": 60,
      "release": 3000
    },
    "filter": {
      "cutoff": 4000,
      "resonance": 15
    }
  },
  "workflow": {
    "useCase": "Ambient and atmospheric",
    "steps": [
      "Higher harmonics for air",
      "Heavy morphing",
      "Slow envelope",
      "Bright filter"
    ],
    "troubleshooting": [
      { "issue": "Too harsh", "fix": "Reduce upper harmonics" },
      { "issue": "No movement", "fix": "Increase morph speed" }
    ]
  },
  "abTest": {
    "listenFor": "Ethereal, evolving sound",
    "duration": "Slow chord progression"
  }
}
```

---

## FILE: 02-Data\presets\genre\electro-synth.json

```json
{
  "name": "Electro Synth",
  "genre": "hip-hop/rap",
  "mood": "electric",
  "description": "Aggressive electronic synth for electro hip-hop",
  "parameters": {
    "fundamental": 88,
    "harmonics": {
      "h2": 78,
      "h3": 65,
      "h4": 55,
      "h5": 45,
      "h6": 35,
      "h7": 25,
      "h8": 18
    },
    "morph": 25,
    "envelope": {
      "attack": 20,
      "decay": 200,
      "sustain": 70,
      "release": 300
    },
    "filter": {
      "cutoff": 5000,
      "resonance": 50
    }
  },
  "workflow": {
    "useCase": "Electro hip-hop, experimental rap",
    "steps": [
      "High fundamental for presence",
      "Bright harmonic series",
      "Quick envelope for punch",
      "High resonance for character",
      "Fast morphing for energy"
    ],
    "tips": [
      "Great for futuristic sounds",
      "Perfect for drops and builds",
      "Use with sidechain compression",
      "Layer with distortion for aggression"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\energetic-drill-lead.json

```json
{
  "name": "Drill Lead",
  "genre": "hip-hop/rap",
  "mood": "energetic",
  "description": "Aggressive, intense lead for drill music",
  "parameters": {
    "fundamental": 95,
    "harmonics": {
      "h2": 85,
      "h3": 70,
      "h4": 60,
      "h5": 50,
      "h6": 40,
      "h7": 30,
      "h8": 20
    },
    "morph": 20,
    "envelope": {
      "attack": 5,
      "decay": 100,
      "sustain": 80,
      "release": 200
    },
    "filter": {
      "cutoff": 5500,
      "resonance": 55
    }
  },
  "workflow": {
    "useCase": "Drill, trap, aggressive hip-hop",
    "steps": [
      "Maximum fundamental for presence",
      "Bright harmonic series",
      "Instant attack for impact",
      "High resonance for intensity",
      "Fast morphing for energy"
    ],
    "tips": [
      "Perfect for drill melodies",
      "Great for aggressive hooks",
      "Use with heavy distortion",
      "Sidechain to kick for pumping"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\funky-bass.json

```json
{
  "name": "Funky Bass",
  "genre": "hip-hop/rap",
  "mood": "funky",
  "description": "Punchy, groovy bass for funk-inspired hip-hop",
  "parameters": {
    "fundamental": 92,
    "harmonics": {
      "h2": 75,
      "h3": 60,
      "h4": 50,
      "h5": 40,
      "h6": 30,
      "h7": 20,
      "h8": 12
    },
    "morph": 30,
    "envelope": {
      "attack": 10,
      "decay": 150,
      "sustain": 75,
      "release": 400
    },
    "filter": {
      "cutoff": 3500,
      "resonance": 40
    }
  },
  "workflow": {
    "useCase": "G-funk, funk-inspired hip-hop",
    "steps": [
      "High fundamental for presence",
      "Strong harmonics for character",
      "Quick attack for punch",
      "Moderate resonance for funk",
      "Fast release for groove"
    ],
    "tips": [
      "Perfect for slap-style sounds",
      "Great for wah-wah effects",
      "Layer with live bass samples",
      "Compress for consistency"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\jazzy-keys.json

```json
{
  "name": "Jazzy Keys",
  "genre": "hip-hop/rap",
  "mood": "smooth",
  "description": "Warm, smooth keys for jazzy hip-hop",
  "parameters": {
    "fundamental": 78,
    "harmonics": {
      "h2": 65,
      "h3": 50,
      "h4": 40,
      "h5": 30,
      "h6": 22,
      "h7": 15,
      "h8": 10
    },
    "morph": 45,
    "envelope": {
      "attack": 150,
      "decay": 600,
      "sustain": 75,
      "release": 1200
    },
    "filter": {
      "cutoff": 2800,
      "resonance": 20
    }
  },
  "workflow": {
    "useCase": "Jazzy hip-hop, lo-fi, soulful rap",
    "steps": [
      "Mid fundamental for warmth",
      "Soft harmonic series",
      "Moderate morphing for movement",
      "Warm filter setting",
      "Smooth envelope transition"
    ],
    "tips": [
      "Perfect for sample-like sounds",
      "Great for melodic hooks",
      "Layer with drums for groove",
      "Add subtle reverb for space"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\moody-dark-trap-pad.json

```json
{
  "name": "Dark Trap Pad",
  "genre": "hip-hop/rap",
  "mood": "moody",
  "description": "Dark, atmospheric pad for moody trap productions",
  "parameters": {
    "fundamental": 70,
    "harmonics": {
      "h2": 55,
      "h3": 40,
      "h4": 30,
      "h5": 22,
      "h6": 15,
      "h7": 10,
      "h8": 6
    },
    "morph": 60,
    "envelope": {
      "attack": 800,
      "decay": 1500,
      "sustain": 65,
      "release": 2000
    },
    "filter": {
      "cutoff": 2000,
      "resonance": 25
    }
  },
  "workflow": {
    "useCase": "Dark trap, drill, moody hip-hop",
    "steps": [
      "Set lower fundamental for darkness",
      "Create gentle harmonic structure",
      "Slow morphing for atmosphere",
      "Dark filter setting",
      "Long release for ambiance"
    ],
    "tips": [
      "Perfect for intros and outros",
      "Great as background texture",
      "Layer with 808 for depth",
      "Automate morph for movement"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\upbeat-bouncy-lead.json

```json
{
  "name": "Bouncy Lead",
  "genre": "hip-hop/rap",
  "mood": "upbeat",
  "description": "Bright, bouncy lead for energetic hip-hop",
  "parameters": {
    "fundamental": 90,
    "harmonics": {
      "h2": 80,
      "h3": 65,
      "h4": 55,
      "h5": 45,
      "h6": 35,
      "h7": 25,
      "h8": 15
    },
    "morph": 35,
    "envelope": {
      "attack": 50,
      "decay": 300,
      "sustain": 80,
      "release": 500
    },
    "filter": {
      "cutoff": 4500,
      "resonance": 35
    }
  },
  "workflow": {
    "useCase": "Upbeat hip-hop, party tracks",
    "steps": [
      "High fundamental for brightness",
      "Rich harmonic spectrum",
      "Quick envelope for bounce",
      "Bright filter with resonance",
      "Moderate morphing for movement"
    ],
    "tips": [
      "Perfect for hooks and melodies",
      "Great for call-and-response",
      "Layer with drums for impact",
      "Automate filter for dynamics"
    ]
  }
}

```

---

## FILE: 02-Data\presets\signature\bonobo-chillout.json

```json
{
  "name": "Bonobo Chillout Style",
  "producer": "Bonobo",
  "description": "Warm, organic tones with smooth morphing for downtempo music",
  "reference": "Black Sands, Kiara",
  "parameters": {
    "fundamental": 75,
    "harmonics": {
      "h2": 60,
      "h3": 45,
      "h4": 35,
      "h5": 25,
      "h6": 18,
      "h7": 12,
      "h8": 8
    },
    "morph": 55,
    "envelope": {
      "attack": 200,
      "decay": 800,
      "sustain": 70,
      "release": 2000
    },
    "filter": {
      "cutoff": 2500,
      "resonance": 15
    }
  },
  "workflow": {
    "useCase": "Chillout, downtempo, jazz-hop",
    "signatureElements": [
      "Organic warmth",
      "Smooth evolution",
      "Relaxed character"
    ],
    "steps": [
      "Lower fundamental for warmth",
      "Softer harmonic series",
      "Slow morphing for movement",
      "Warm filter setting"
    ],
    "tips": [
      "Great for background textures",
      "Perfect for instrumental sections",
      "Layer with real instruments"
    ]
  }
}

```

---

## FILE: 02-Data\presets\signature\deadmau5-morph.json

```json
{
  "name": "Deadmau5 Morph",
  "producer": "deadmau5",
  "description": "Clean, melodic synthesis for electronic music",
  "reference": "Strobe, Ghosts N Stuff",
  "parameters": {
    "fundamental": 85,
    "harmonics": {
      "h2": 70,
      "h3": 55,
      "h4": 45,
      "h5": 35,
      "h6": 25,
      "h7": 15,
      "h8": 10
    },
    "morph": 40,
    "envelope": {
      "attack": 100,
      "decay": 400,
      "sustain": 75,
      "release": 800
    },
    "filter": {
      "cutoff": 3500,
      "resonance": 25
    }
  },
  "workflow": {
    "useCase": "Melodic electronic music",
    "signatureElements": [
      "Clean harmonic structure",
      "Smooth morphing",
      "Melodic character"
    ],
    "steps": [
      "Balanced harmonics",
      "Moderate morphing",
      "Clean filter"
    ],
    "tips": [
      "Great for melodies",
      "Smooth evolution",
      "Clean character"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\porter-robinson.json

```json
{
  "name": "Porter Robinson Style",
  "producer": "Porter Robinson",
  "description": "Bright, emotional synthesis with lush harmonics for future bass",
  "reference": "Language, Easy",
  "parameters": {
    "fundamental": 90,
    "harmonics": {
      "h2": 80,
      "h3": 65,
      "h4": 55,
      "h5": 45,
      "h6": 35,
      "h7": 25,
      "h8": 15
    },
    "morph": 35,
    "envelope": {
      "attack": 50,
      "decay": 300,
      "sustain": 85,
      "release": 1000
    },
    "filter": {
      "cutoff": 5000,
      "resonance": 30
    }
  },
  "workflow": {
    "useCase": "Future bass, emotional electronic",
    "signatureElements": [
      "Bright tonal character",
      "Lush harmonic spectrum",
      "Emotional resonance"
    ],
    "steps": [
      "Set high fundamental for clarity",
      "Build rich harmonic series",
      "Use moderate morphing for movement",
      "Bright filter with resonance"
    ],
    "tips": [
      "Perfect for melodic hooks",
      "Layer with pluck for variety",
      "Automate filter for dynamics"
    ]
  }
}

```

---

## FILE: 02-Data\presets\signature\r用地-glitch.json

```json
{
  "name": "Glitch Hop Style",
  "producer": "Various (Sample-based)",
  "description": "Resonant, stuttered synthesis for experimental beat music",
  "reference": "Krampfhaft, Skrillex early",
  "parameters": {
    "fundamental": 85,
    "harmonics": {
      "h2": 75,
      "h3": 60,
      "h4": 50,
      "h5": 40,
      "h6": 30,
      "h7": 20,
      "h8": 12
    },
    "morph": 30,
    "envelope": {
      "attack": 20,
      "decay": 150,
      "sustain": 60,
      "release": 300
    },
    "filter": {
      "cutoff": 4000,
      "resonance": 45
    }
  },
  "workflow": {
    "useCase": "Glitch hop, experimental bass",
    "signatureElements": [
      " резонансный характер",
      "Stuttered rhythm",
      "Aggressive edge"
    ],
    "steps": [
      "High resonance for character",
      "Short envelopes for stutter",
      "Bright filter for presence",
      "Layer with glitch samples"
    ],
    "tips": [
      "Perfect for drops and builds",
      "Great for half-time sections",
      "Combine with sidechain compression"
    ]
  }
}

```

---

## FILE: 02-Data\presets\signature\tycho-atmospheric.json

```json
{
  "name": "Tycho Atmospheric Style",
  "producer": "Tycho",
  "description": "Expansive, ethereal soundscapes with subtle harmonics for ambient music",
  "reference": "Awake, Montauk",
  "parameters": {
    "fundamental": 80,
    "harmonics": {
      "h2": 65,
      "h3": 50,
      "h4": 40,
      "h5": 30,
      "h6": 22,
      "h7": 15,
      "h8": 10
    },
    "morph": 45,
    "envelope": {
      "attack": 500,
      "decay": 1200,
      "sustain": 75,
      "release": 2500
    },
    "filter": {
      "cutoff": 2000,
      "resonance": 20
    }
  },
  "workflow": {
    "useCase": "Ambient, post-rock, cinematic",
    "signatureElements": [
      "Expansive atmosphere",
      "Subtle harmonics",
      "Dreamy quality"
    ],
    "steps": [
      "Set fundamental for body",
      "Create gentle harmonic structure",
      "Use slow morphing automation",
      "Keep filter warm and open"
    ],
    "tips": [
      "Perfect for intro/outro sections",
      "Layer with guitar or vocals",
      "Automate morph for evolving textures"
    ]
  }
}

```

---

## FILE: 02-Data\rules\additive-headroom-safety.md

```markdown
# Rules: Additive Headroom Safety (Morphine)

Tags: additive-synthesis | mix-safety | harmonic-series

## 1. The "Harmonic Build-up" Rule
In Additive synthesis, each harmonic adds physical volume.
- **Rule:** When adding high-frequency harmonics (Partial 16+), lower the **Master Gain** of the Generator by **3-5dB**.
- **Why:** High harmonics are psychoacoustically "perceived" as louder, but they also take up massive amounts of digital peak headroom. If you don't lower the gain, the synth will sound "screechy" and clip the mixer.

## 2. Velocity-to-Level Rule
- **Rule:** Always link **Velocity** to **Harmonic Level** (not just Master Volume).
- **Why:** Real organic instruments get "brighter" as they get louder. If you only link velocity to volume, the instrument sounds like a static recording. Linking it to harmonic level creates an organic, soulful response for R&B Rhodes or Pads.

## 3. Resynthesis Sample Rate Rule
- **Rule:** Only resynthesize samples that are **Dry** (No reverb/delay).
- **Why:** Morphine attempts to recreate everything in the audio file. If there is reverb in the sample, Morphine will create "noisy" sine waves to try and mimic the reverb tail, resulting in a "blurry" and unusable sound.

## 4. "Avoid" List
- **Avoid Over-Morphing:** Blending between 4 generators too fast can cause "clicking" as the sine waves reset their phase. Keep morphing speeds slow and atmospheric.
- **Avoid Low-End Spectrum Shifting:** Shifting the spectrum of a bass sound creates "in-harmonic" frequencies that will make your track sound out of tune. Only use spectrum shifting for mid-high sounds.

```

---

## FILE: 02-Data\rules\morphine-safety-rules.md

```markdown
# Morphine Safety Rules

## CPU Management

### Voice Limits
- Morphine can be CPU-intensive
- Limit polyphony as needed
- Monitor performance

### Effects Usage
- Spectral effects increase CPU
- Use sparingly
- Bypass when not needed

---

## Sound Design Tips

### Harmonic Building
- Start with fundamental
- Add harmonics gradually
- Avoid harsh upper harmonics

### Morphing
- Smooth transitions require related waveforms
- Extreme morphs create interesting effects
- Automate morph for evolution

---

## Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Harsh sound | Too many upper harmonics | Reduce high harmonics |
| CPU strain | Too many voices | Reduce polyphony |
| No sound | Harmonics at 0 | Increase harmonic levels |

---

## Related Documentation

- [Morphine Quick Reference](../01-Learning/Quick-Reference/quick-reference.md)
- [Morphing Concepts](../01-Learning/Concepts/morphing.md)

```

---

## FILE: 03-Workflows\by-goal\INDEX.md

```markdown
# Morphine Workflows INDEX

## By-Goal Workflows

| File | Focus |
|------|-------|
| [creating-metallic-percussion.md](creating-metallic-percussion.md) | Metallic percussion sounds |
| [evolving-ethereal-pads.md](evolving-ethereal-pads.md) | Evolving pad creation |
| [hop-hop-subgenre-sounds.md](hop-hop-subgenre-sounds.md) | Hip-Hop Sub-Genre Sounds |

## Quick Reference

| Goal | Workflow |
|------|----------|
| Metallic percussion | Creating Metallic Percussion |
| Evolving pads | Evolving Ethereal Pads |
| Dark trap pads | Hip-Hop Sub-Genre Sounds |
| Bouncy leads | Hip-Hop Sub-Genre Sounds |
| Electro synths | Hip-Hop Sub-Genre Sounds |
| Jazzy keys | Hip-Hop Sub-Genre Sounds |
| Funky bass | Hip-Hop Sub-Genre Sounds |
| Drill leads | Hip-Hop Sub-Genre Sounds |

## Related Documentation

- [Morphine Presets](../02-Data/presets/INDEX.md)
- [Morphine Safety Rules](../02-Data/rules/morphine-safety-rules.md)

```

---

## FILE: 03-Workflows\by-goal\creating-metallic-percussion.md

```markdown
# Creating Metallic Percussion (Morphine)

## Goal
Design unique, bell-like hits or metallic stabs using inharmonic partials.

## Technical Steps
1. **Spectrum Grid:**
   - Instead of a harmonic series (1, 2, 3...), draw "random" vertical bars in the **Harmonics** grid.
   - **Pro Tip:** Gaps between bars create the metallic, "cold" character.
2. **ADSR:**
   - Set **Attack** to 0ms.
   - Set **Decay** to 500ms.
   - Set **Sustain** to 0%.
3. **Noise Injection:**
   - Enable the **Noise Generator**.
   - Set its envelope to a very short burst (10ms) to simulate the "impact" of a mallet hitting metal.
4. **Detune:**
   - Go to the **Detune** tab for the partials and add slight random detuning to the higher harmonics to increase the "discordant" feel.

## Why it works
Real metal (like a pipe or bell) does not vibrate in a perfect harmonic series. By drawing inharmonic partials and using a noise impact, you precisely replicate the physical behavior of resonant metals.

```

---

## FILE: 03-Workflows\by-goal\evolving-ethereal-pads.md

```markdown
# Evolving Ethereal Pads (Morphine)

## Goal
Create a pad that constantly shifts its spectral content, resulting in a "living" texture.

## Technical Steps
1. **Source Generation:**
   - Go to **Generator A**. Set harmonics to a "Bowed String" profile (bright highs).
   - Go to **Generator B**. Set harmonics to a "Female Vocal" profile (strong formants).
2. **Morph Envelope:**
   - In the **Morph** tab, click the **Envelope** button.
   - Draw a slow, looping curve that moves between A and B over 8 seconds.
   - Set **Loop Mode** to Forward-Backward.
3. **PWM Filter:**
   - Apply a **PWM Filter** to both generators.
   - Set the PWM LFO to a slow rate.
4. **FX:**
   - Add a large internal **Reverb** (Decay 4s, Wet 60%).
   - Add **Chorus** for stereo width.

## Why it works
Because the sound is additive, Morphine is morphing the actual *frequencies* of the partials between the two states. This is spectral morphing, which is much smoother than a standard crossfade between two separate plugins.

```

---

## FILE: 03-Workflows\by-goal\hop-hop-subgenre-sounds.md

```markdown
# Hip-Hop Sub-Genre Morphine Workflows

## Moody Dark Trap Pad
| Parameter | Setting |
|-----------|---------|
| Fundamental | 70 |
| Harmonics H2-H8 | 55/40/30/22/15/10/6 |
| Morph | 60% |
| Envelope | 800/1500/65/2000 |
| Filter Cutoff | 2000Hz |
| Resonance | 25% |

### Tips
- Lower fundamental for darkness
- Slow morphing for atmosphere
- Dark filter setting
- Perfect for intros and outros

---

## Upbeat Bouncy Lead
| Parameter | Setting |
|-----------|---------|
| Fundamental | 90 |
| Harmonics H2-H8 | 80/65/55/45/35/25/15 |
| Morph | 35% |
| Envelope | 50/300/80/500 |
| Filter Cutoff | 4500Hz |
| Resonance | 35% |

### Tips
- High fundamental for brightness
- Rich harmonic spectrum
- Quick envelope for bounce
- Perfect for hooks and melodies

---

## Electro Synth
| Parameter | Setting |
|-----------|---------|
| Fundamental | 88 |
| Harmonics H2-H8 | 78/65/55/45/35/25/18 |
| Morph | 25% |
| Envelope | 20/200/70/300 |
| Filter Cutoff | 5000Hz |
| Resonance | 50% |

### Tips
- Bright harmonic series
- Quick envelope for punch
- High resonance for character
- Great for futuristic sounds

---

## Jazzy Keys
| Parameter | Setting |
|-----------|---------|
| Fundamental | 78 |
| Harmonics H2-H8 | 65/50/40/30/22/15/10 |
| Morph | 45% |
| Envelope | 150/600/75/1200 |
| Filter Cutoff | 2800Hz |
| Resonance | 20% |

### Tips
- Mid fundamental for warmth
- Soft harmonic series
- Warm filter setting
- Perfect for melodic hooks

---

## Funky Bass
| Parameter | Setting |
|-----------|---------|
| Fundamental | 92 |
| Harmonics H2-H8 | 75/60/50/40/30/20/12 |
| Morph | 30% |
| Envelope | 10/150/75/400 |
| Filter Cutoff | 3500Hz |
| Resonance | 40% |

### Tips
- High fundamental for presence
- Strong harmonics for character
- Quick attack for punch
- Perfect for slap-style sounds

---

## Energetic Drill Lead
| Parameter | Setting |
|-----------|---------|
| Fundamental | 95 |
| Harmonics H2-H8 | 85/70/60/50/40/30/20 |
| Morph | 20% |
| Envelope | 5/100/80/200 |
| Filter Cutoff | 5500Hz |
| Resonance | 55% |

### Tips
- Maximum fundamental for presence
- Bright harmonic series
- Instant attack for impact
- Perfect for drill melodies

---

## Related Documentation
- [Morphine Presets INDEX](../02-Data/presets/INDEX.md)
- [Morphine Safety Rules](../02-Data/rules/morphine-safety-rules.md)

```

---

## FILE: 03-Workflows\by-instrument\INDEX.md

```markdown
# Morphine Workflows INDEX

## By-Instrument Workflows

| File | Focus |
|------|-------|
| [by-instrument/01-pad-workflows.md](by-instrument/01-pad-workflows.md) | Pad creation |
| [by-instrument/02-lead-workflows.md](by-instrument/02-lead-workflows.md) | Lead creation |
| [by-instrument/03-bass-workflows.md](by-instrument/03-bass-workflows.md) | Bass creation |

## Quick Reference

| Sound Type | Start Preset |
|------------|--------------|
| Pads | Morphing Pad |
| Leads | Aggressive Lead |
| Bass | Warm Bass |
| Textures | Ethereal Texture |

## Related Documentation

- [Morphine Presets](../02-Data/presets/INDEX.md)
- [Morphine Safety Rules](../02-Data/rules/morphine-safety-rules.md)

```

---

## FILE: 03-Workflows\by-instrument\organic-vocal-textures.md

```markdown
# Workflow: Organic Vocal Textures (Morphine)

Tags: r&b | moody | vocals | resynthesis

## Goal: Transform a Single Vocal Note into an Evolving, Organic Pad
This workflow uses the unique "Additive" engine to create textures that sound like a human choir but with impossible movement.

## 1. Starting Moves
- **Source:** Find a clean, dry vocal sample (e.g., an "Ahh" or "Ooh").
- **Generator A:** Drag the vocal sample into the **Resynthesis** window.
- **Spectrum:** Once analyzed, check the "Harmonic Filter."

## 2. Adding the "Soul"
- **Velocity Mapping:** Link "Harmonic Filter" to Velocity.
- **Noise Generator:** Use the **"Breath"** noise setting at 10%. This adds the organic feeling of air flowing through a throat.
- **Effects:** Apply **Chorus** and **LuxeVerb** (50% Wet).

## 3. The Morphing Evolution
- **Generator B:** Create a simple Sine wave pad with high harmonics.
- **Morphing Slider:** Create an **Automation Clip** for the Morph slider (A to B).
- **Result:** The sound starts as a "Human" vocal and slowly "Morphs" into a synthetic, glassy texture over 8 bars.

## 4. A/B Test
- **A:** Static vocal sample loop.
- **B:** Morphine Resynthesized evolving vocal.
- **Listen for:** The lack of "loop points." Additive synthesis has no loop points—it's just pure sine waves, making it infinitely smooth.

## 5. Quick Fix Path
- **Vocal sounds "robotic"?** Increase "Noise" and decrease the Spectrum Shift.
- **Vocal sounds "thin"?** Emphasize the 1st and 3rd harmonics in the Editor.

```

---

## FILE: 04-Reference\resynthesis-algorithm-analysis.md

```markdown
# Resynthesis Algorithm Analysis (Morphine)

## How it Works
Morphine's resynthesis engine is an **Inverse FFT (Fast Fourier Transform)** process.

## The Import Process
1. **Analysis:** The engine scans the input WAV file. It identifies the strongest 128 frequencies (partials) at every point in time.
2. **Phase Capture:** It tracks the phase relationship of each partial to ensure the original timbre is preserved.
3. **Harmonic Mapping:** It assigns these frequencies to the additive grid.

## Manual vs. Auto Modes
- **Auto:** The engine makes its best guess for fundamental pitch and formant mapping.
- **Manual (Overrides):** Allows you to specify the fundamental note of the sample to prevent "shifting" artifacts during the analysis.

## Noise Separation
Morphine uses a **Sinusoidal + Residual** model.
- **Sinusoidal:** The pure tones go to the 128 harmonics.
- **Residual (Noise):** The breath, scratching, and non-tonal elements are converted into a noise profile for the Noise Generator. This separation allows you to pitch-shift the tonal part without affecting the character of the noise impact.

```

---

