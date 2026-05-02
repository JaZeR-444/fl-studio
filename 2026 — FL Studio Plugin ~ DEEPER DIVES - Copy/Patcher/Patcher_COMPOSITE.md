# Patcher - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: 00-START-HERE.md

```markdown
# Patcher - Start Here

Welcome to the **Patcher** Deeper Dive. Patcher is FL Studio's plugin management and routing system that allows you to save, load, and route plugin chains.

## What is Patcher?

Patcher is a plugin container and router that:
- Holds chains of plugins
- Saves/loads plugin chains as presets
- Provides advanced routing options
- Enables parallel processing paths
- Creates complex plugin networks

## Quick Navigation

### 1. The Essentials
- **[README.md](./README.md):** Overview and capabilities
- **[00-START-HERE.md](./00-START-HERE.md):** Start here (you are here)
- **[01-Learning/Quick-Reference/quick-reference.md](./01-Learning/Quick-Reference/quick-reference.md):** Parameter guide

### 2. Core Concepts
- **[01-Learning/Concepts/signal-routing.md](./01-Learning/Concepts/signal-routing.md):** Understanding Patcher routing
- **[01-Learning/Concepts/preset-management.md](./01-Learning/Concepts/preset-management.md):** Saving and loading chains

### 3. Workflow Recipes
- **[03-Workflows/by-goal/chain-creation.md](./03-Workflows/by-goal/chain-creation.md):** Building plugin chains
- **[03-Workflows/by-goal/parallel-processing.md](./03-Workflows/by-goal/parallel-processing.md):** Parallel signal paths

## Rapid Success Protocol

1. **Create a chain:** Drag plugins into Patcher
2. **Connect inputs/outputs:** Use the routing matrix
3. **Save the preset:** Save your chain for reuse
4. **Share:** Export for collaboration

---

*For technical specs and parameter data, see the [02-Data/](./02-Data/) folder.*

```

---

## FILE: README.md

```markdown
# Patcher - Modular Environment

`\`\`
██████╗  █████╗ ████████╗ ██████╗██╗  ██╗███████╗██████╗ 
██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██║  ██║██╔════╝██╔══██╗
██████╔╝███████║   ██║   ██║     ███████║█████╗  ██████╔╝
██╔═══╝ ██╔══██║   ██║   ██║     ██╔══██║██╔══╝  ██╔══██╗
██║     ██║  ██║   ██║   ╚██████╗██║  ██║███████╗██║  ██║
╚═╝     ╚═╝  ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Modular Routing Environment
**Category:** Utility / Generator / Effect
**Official Manual:** [Image-Line Patcher Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Patcher.htm)

---

## 🎯 What is Patcher?

Patcher is a modular environment that allows you to chain an unlimited number of instruments and effects into a single cohesive unit. It functions as both a generator (hosting synths) and an effect (hosting FX chains). Its true power lies in its ability to create custom control surfaces, complex parallel processing, and mathematical modulation using internal controllers.

**Key Capabilities:**
- **Modular Routing:** Connect nodes visually to define signal flow.
- **Custom Control Surfaces:** Design your own GUI with knobs, sliders, and XY pads.
- **Infinite Chaining:** No limit to the number of plugins within a single instance.
- **Multiband Processing:** Easily split signals by frequency or amplitude.
- **MIDI Signal Processing:** Route MIDI data between internal plugins.
- **Performance Monitoring:** Real-time latency and CPU tracking per node.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **patcher-node-basics.md** (Inputs vs Outputs)
3. Create **parameter-cheat-sheet.md**
4. Load "Simple Filter" preset and observe the connections in the Map tab.

### For Sound Designers:
1. Study **creating-custom-control-surfaces.md**
2. Review **parallel-processing-workflows.md**
3. Learn **dynamic-parameter-mapping.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [x] **node-types-explained.md**
- [ ] **control-surface-widgets.md**

#### 02-Data/parameters/
- [x] **patcher-signal-flow.json**

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [x] **multiband-distortion-rack.md**
- [x] **custom-synth-interface.md**

#### 03-Workflows/by-context/
- [ ] **vocal-doubler-modular.md**
- [ ] **live-performance-macro-setup.md**

---

## 🔬 Research Framework

### Phase 1: Mapping Mastery (Week 1)
**Goal:** Connections

**Tasks:**
1. Connect 3 different plugins in series
2. Split a signal into 2 parallel paths
3. Right-click a plugin to "Activate" a parameter node
4. Create node-types-explained.md

**Key Questions to Answer:**
- How do I delete a connection?
- What happens if I connect MIDI to an Audio input?

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do I add a plugin inside Patcher? (Right-click Map area).
2. Why is there no sound? (Verify the path reaches the 'To FL Studio' output node).

---

## 📦 File Structure Summary

`\`\`
Patcher/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── node-types-explained.md ⭐ HIGH PRIORITY
│   │   └── control-surface-widgets.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── patcher-signal-flow.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── multiband-distortion-rack.md
│   │   └── custom-synth-interface.md
│
└── 04-Reference/
    └── latency-and-pdc-in-patcher.md
`\`\`

---

## 🛠️ Valuable Resources & Tools

### Official Documentation & Tutorials
- [Patcher Official Manual](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Patcher.htm)
- [Patcher Tutorials on Image-Line Website](https://www.image-line.com/support/flstudio_online_manual/html/plugins/Patcher_tutorials.htm)
- [Patcher Video Tutorials](https://www.youtube.com/results?search_query=fl+studio+patcher+tutorial)

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection

```

---

## FILE: 01-Learning\Concepts\modular-thinking-basics.md

```markdown
# Concept: Modular Thinking Basics (Patcher)

Tags: modular | workflow | routing | efficiency

## What It Is
Patcher is a "plugin environment." It allows you to chain an unlimited number of instruments and effects inside a single container, bypassing the 10-slot limit of the FL Studio mixer.

## Why It Matters
- **Encapsulation:** You can build a "Vocal Processor" or "808 Thickener" and save it as a single preset.
- **Complex Routing:** You can split audio into 10 different frequency bands and process them independently—something nearly impossible in the standard mixer.
- **Visual Mapping:** It turns your signal chain into a "Map" (nodes and wires), making it easier to see how a sound is being built.

## How to "Think" in Patcher
- **The Input Node:** This is your raw audio or MIDI.
- **The Module:** Every plugin you add is a "Module."
- **The Surface:** This is where you build your own "Custom UI" with knobs and sliders that control parameters deep inside the modules.

## Typical Mistakes
- **Spaghetti Routing:** Drawing too many wires can make a patch impossible to fix later. Use **Fruity Send** modules to organize long chains.
- **Parameter Overload:** Don't link every single knob to the Surface. Only link the "Macro" controls (e.g., "Tone," "Mix," "Grit") that you will actually automate.

## What to Adjust First
1. **The Map Tab:** Check for disconnected wires.
2. **The Surface Tab:** Label your knobs clearly (e.g., "Underwater Filter" instead of "Cutoff 1").

```

---

## FILE: 01-Learning\Quick-Reference\node-types-explained.md

```markdown
# Patcher Node Types Explained

## Connection Colors
- **Yellow (Audio):** Carries sound signal.
- **Red (Parameter):** Carries automation/control data (0% to 100%).
- **Green (MIDI):** Carries note data, velocity, and MIDI CC.

## Core Nodes
- **From FL Studio:** The input source (Audio or MIDI from the Channel/Track).
- **To FL Studio:** The final output destination.
- **Control Surface:** Your custom designed GUI.

## Managing Nodes
- **Right-click Map > Add Plugin:** Insert new instruments or effects.
- **Right-click Plugin > Inputs/Outputs:** Activate specific parameter or audio ports.
- **Right-click Connection:** Delete or change cable routing.

```

---

## FILE: 02-Data\parameters\patcher-signal-flow.json

```json
{
  "plugin_name": "Patcher",
  "category": "Modular Environment",
  "node_types": [
    "Audio (Yellow)",
    "Parameter (Red)",
    "MIDI (Green)",
    "Event"
  ],
  "capabilities": [
    "Parallel Processing",
    "Custom Control Surfaces",
    "Multiband Splitting",
    "MIDI Transformation"
  ]
}

```

---

## FILE: 02-Data\presets\INDEX.md

```markdown
# Patcher Complete Presets INDEX

## Genre Presets (12 files)
| File | Name | Genre | Mood | Character |
|------|------|-------|------|-----------|
| `genre/01-standard-mix-chain.json` | Standard Mix Chain | universal | natural | Clean, balanced |
| `genre/02-parallel-drums.json` | Parallel Drums | universal | aggressive | Punchy, fat |
| `genre/03-vocal-chain.json` | Vocal Chain | universal | clear | Present, pro |
| `genre/04-distortion-chain.json` | Distortion Chain | universal | gritty | Warm, aggressive |
| `genre/05-reverb-sends.json` | Reverb Sends | universal | atmospheric | Deep, spacey |
| `genre/06-master-chain.json` | Master Chain | universal | loud | Polished, loud |
| `genre/moody-dark-trap.json` | Moody Dark Trap | hip-hop/rap | moody | Dark, atmospheric |
| `genre/upbeat-bouncy.json` | Upbeat Bouncy | hip-hop/rap | upbeat | Bright, energetic |
| `genre/electro-hip-hop.json` | Electro Hip-Hop | hip-hop/rap | electric | Electronic, modern |
| `genre/jazzy-smooth.json` | Jazzy Smooth | hip-hop/rap | smooth | Warm, soulful |
| `genre/funky-groovy.json` | Funky Groovy | hip-hop/rap | funky | Punchy, groovy |
| `genre/energetic-drill.json` | Energetic Drill | hip-hop/rap | energetic | Aggressive, intense |

## Signature Presets (6 files)
| File | Artist | Style |
|------|--------|-------|
| `signature/calvin-harris-style.json` | Calvin Harris | Big Room Energy |
| `signature/metro-boomin-style.json` | Metro Boomin | Dark Trap |
| `signature/deadmau5-modular.json` | deadmau5 | Progressive Techno |
| `signature/zaytoven-creative.json` | Zaytoven | Soulful Trap |
| `signature/timbaland-rhythm.json` | Timbaland | Innovative Hip-Hop |
| `signature/flume-future.json` | Flume | Future Bass |

## Quick Reference
| Goal | Preset | File |
|------|--------|------|
| Clean mix chain | Standard Mix Chain | `genre/01-standard-mix-chain.json` |
| Fat drums | Parallel Drums | `genre/02-parallel-drums.json` |
| Pro vocals | Vocal Chain | `genre/03-vocal-chain.json` |
| Dark trap mood | Moody Dark Trap | `genre/moody-dark-trap.json` |
| Energetic bounce | Upbeat Bouncy | `genre/upbeat-bouncy.json` |
| Electronic edge | Electro Hip-Hop | `genre/electro-hip-hop.json` |
| Smooth jazz | Jazzy Smooth | `genre/jazzy-smooth.json` |
| Funky groove | Funky Groovy | `genre/funky-groovy.json` |
| Drill intensity | Energetic Drill | `genre/energetic-drill.json` |

## Workflow Reference
- [Patcher By-Goal Workflows](../03-Workflows/by-goal/INDEX.md)
- [Patcher By-Instrument Workflows](../03-Workflows/by-instrument/INDEX.md)
- [Patcher Safety Rules](../02-Data/rules/patcher-safety-rules.md)

```

---

## FILE: 02-Data\presets\genre\01-standard-mix-chain.json

```json
{
  "name": "Standard Mix Chain",
  "genre": "universal",
  "mood": "upbeat",
  "description": "Standard EQ → Compression → Limiting chain for general mixing",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2"
      },
      {
        "slot": 2,
        "type": "Compressor",
        "plugin": "Fruity Compressor"
      },
      {
        "slot": 3,
        "type": "Limiter",
        "plugin": "Fruity Limiter"
      }
    ],
    "routing": "Series",
    "parallelPaths": 0
  },
  "workflow": {
    "useCase": "General mix chain",
    "steps": [
      "Load EQ for corrective shaping",
      "Add compression for dynamics",
      "Apply limiting for safety",
      "Adjust order as needed"
    ],
    "troubleshooting": [
      { "issue": "No effect", "fix": "Check plugin order" },
      { "issue": "Distortion", "fix": "Check limiter threshold" }
    ]
  },
  "abTest": {
    "listenFor": "Clean, balanced signal",
    "duration": "Full mix"
  }
}
```

---

## FILE: 02-Data\presets\genre\02-parallel-drums.json

```json
{
  "name": "Parallel Drum Buss",
  "genre": "hip-hop/rap",
  "mood": "electric",
  "description": "Parallel compression chain for punchy drums",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "Compressor",
        "plugin": "Fruity Compressor",
        "settings": "Heavy compression"
      },
      {
        "slot": 2,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2",
        "settings": "High-pass, add punch"
      }
    ],
    "routing": "Parallel",
    "parallelPaths": 1,
    "mixControl": true
  },
  "workflow": {
    "useCase": "Punchy drum processing",
    "steps": [
      "Set up parallel chain",
      "Heavy compression on parallel",
      "Blend with dry signal",
      "Add EQ for character"
    ],
    "troubleshooting": [
      { "issue": "Too compressed", "fix": "Reduce compression ratio" },
      { "issue": "No punch", "fix": "Increase parallel blend" }
    ]
  },
  "abTest": {
    "listenFor": "Punchy, powerful drums",
    "duration": "8-bar drum pattern"
  }
}
```

---

## FILE: 02-Data\presets\genre\03-vocal-chain.json

```json
{
  "name": "Vocal Chain",
  "genre": "universal",
  "mood": "smooth",
  "description": "Complete vocal processing chain with de-essing and compression",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2",
        "settings": "Corrective EQ"
      },
      {
        "slot": 2,
        "type": "De-Esser",
        "plugin": "Fruity Parametric EQ 2",
        "settings": "Sibilance control"
      },
      {
        "slot": 3,
        "type": "Compressor",
        "plugin": "Fruity Compressor",
        "settings": "Gentle compression"
      },
      {
        "slot": 4,
        "type": "Reverb",
        "plugin": "Fruity Reverb",
        "settings": "Subtle reverb"
      }
    ],
    "routing": "Series",
    "parallelPaths": 0
  },
  "workflow": {
    "useCase": "Complete vocal processing",
    "steps": [
      "Apply corrective EQ",
      "Control sibilance",
      "Add compression",
      "Add subtle reverb"
    ],
    "troubleshooting": [
      { "issue": "Sibilant", "fix": "Increase de-essing" },
      { "issue": "Unstable", "fix": "Reduce compression" }
    ]
  },
  "abTest": {
    "listenFor": "Clear, present vocals",
    "duration": "Full vocal phrase"
  }
}
```

---

## FILE: 02-Data\presets\genre\04-distortion-chain.json

```json
{
  "name": "Distortion Stack",
  "genre": "EDM",
  "mood": "electric",
  "description": "Series of distortion effects for aggressive sounds",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "Distortion",
        "plugin": "Fruity Distock",
        "settings": "Light drive"
      },
      {
        "slot": 2,
        "type": "Distortion",
        "plugin": "Wave Shaper",
        "settings": "Additional saturation"
      },
      {
        "slot": 3,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2",
        "settings": "Tone shaping"
      }
    ],
    "routing": "Series",
    "parallelPaths": 0
  },
  "workflow": {
    "useCase": "Aggressive guitar or synth",
    "steps": [
      "Apply light distortion",
      "Add saturation",
      "Shape final tone"
    ],
    "troubleshooting": [
      { "issue": "Too harsh", "fix": "Reduce distortion amount" },
      { "issue": "No grit", "fix": "Increase drive" }
    ]
  },
  "abTest": {
    "listenFor": "Aggressive, distorted tone",
    "duration": "Sustained note or riff"
  }
}
```

---

## FILE: 02-Data\presets\genre\05-reverb-sends.json

```json
{
  "name": "Dual Reverb Space",
  "genre": "universal",
  "mood": "moody",
  "description": "Two parallel reverb paths for spatial depth",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "Reverb",
        "plugin": "Fruity Reverb",
        "settings": "Short room"
      },
      {
        "slot": 2,
        "type": "Reverb",
        "plugin": "Fruity Reverb",
        "settings": "Long hall"
      }
    ],
    "routing": "Parallel",
    "parallelPaths": 2,
    "mixControl": true
  },
  "workflow": {
    "useCase": "Creating space and depth",
    "steps": [
      "Set up two reverb paths",
      "Short reverb for clarity",
      "Long reverb for atmosphere",
      "Blend to taste"
    ],
    "troubleshooting": [
      { "issue": "Muddy mix", "fix": "Increase high-pass on reverbs" },
      { "issue": "Too washed out", "fix": "Reduce reverb levels" }
    ]
  },
  "abTest": {
    "listenFor": "Spacious, dimensional sound",
    "duration": "Full mix section"
  }
}
```

---

## FILE: 02-Data\presets\genre\06-master-chain.json

```json
{
  "name": "Master Bus Chain",
  "genre": "universal",
  "mood": "upbeat",
  "description": "Complete master bus processing chain",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2",
        "settings": "Mastering EQ"
      },
      {
        "slot": 2,
        "type": "Compressor",
        "plugin": "Fruity Compressor",
        "settings": "Gentle glue"
      },
      {
        "slot": 3,
        "type": "Limiter",
        "plugin": "Fruity Limiter",
        "settings": "Final limiting"
      }
    ],
    "routing": "Series",
    "parallelPaths": 0
  },
  "workflow": {
    "useCase": "Final mix processing",
    "steps": [
      "Apply gentle EQ",
      "Add glue compression",
      "Apply final limiting"
    ],
    "troubleshooting": [
      { "issue": "Too compressed", "fix": "Reduce compression ratio" },
      { "issue": "Clipping", "fix": "Check limiter ceiling" }
    ]
  },
  "abTest": {
    "listenFor": "Polished, loud master",
    "duration": "Full song"
  }
}
```

---

## FILE: 02-Data\presets\genre\electro-hip-hop.json

```json
{
  "name": "Electro Hip-Hop",
  "genre": "hip-hop/rap",
  "mood": "electric",
  "description": "Electronic-infused processing for electro hip-hop",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2",
        "settings": {
          "highPass": "50Hz",
          "bell": "+3dB at 4kHz",
          "highShelf": "+3dB at 10kHz"
        }
      },
      {
        "slot": 2,
        "type": "Distortion",
        "plugin": "Fruity Distock",
        "settings": {
          "drive": "20%",
          "tone": "70%"
        }
      },
      {
        "slot": 3,
        "type": "Compressor",
        "plugin": "Fruity Compressor",
        "settings": {
          "ratio": "6:1",
          "attack": "2ms",
          "release": "60ms",
          "threshold": "-22dB"
        }
      }
    ],
    "characteristics": [
      "Electronic edge",
      "Aggressive transients",
      "Modern sound"
    ]
  },
  "workflow": {
    "useCase": "Electro hip-hop, experimental rap",
    "steps": [
      "High-pass for clarity",
      "Boost presence frequencies",
      "Add subtle distortion",
      "Aggressive compression",
      "Check for harshness"
    ],
    "tips": [
      "Great for futuristic sounds",
      "Perfect for 808 subgenres",
      "Use on synths and drums",
      "Automate distortion for effect"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\energetic-drill.json

```json
{
  "name": "Energetic Drill",
  "genre": "hip-hop/rap",
  "mood": "energetic",
  "description": "Aggressive, high-energy chain for drill music",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2",
        "settings": {
          "highPass": "70Hz",
          "bell": "+3dB at 2kHz",
          "highShelf": "+2dB at 12kHz"
        }
      },
      {
        "slot": 2,
        "type": "Distortion",
        "plugin": "Fruity Distock",
        "settings": {
          "drive": "45%",
          "tone": "60%"
        }
      },
      {
        "slot": 3,
        "type": "Compressor",
        "plugin": "Fruity Compressor",
        "settings": {
          "ratio": "8:1",
          "attack": "1ms",
          "release": "50ms",
          "threshold": "-25dB"
        }
      },
      {
        "slot": 4,
        "type": "Limiter",
        "plugin": "Fruity Limiter",
        "settings": {
          "ceiling": "-1dB",
          "mode": "Brickwall"
        }
      }
    ],
    "characteristics": [
      "Aggressive character",
      "High energy",
      "Intense impact"
    ]
  },
  "workflow": {
    "useCase": "Drill, trap, aggressive hip-hop",
    "steps": [
      "High-pass at 70Hz for intensity",
      "Boost presence for attack",
      "Heavy distortion for edge",
      "Aggressive compression",
      "Brick-wall limiting"
    ],
    "tips": [
      "Perfect for modern drill",
      "Great for aggressive flows",
      "Use on 808s and snares",
      "Check for distortion artifacts"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\funky-groovy.json

```json
{
  "name": "Funky Groovy",
  "genre": "hip-hop/rap",
  "mood": "funky",
  "description": "Punchy, groovy chain for funk-inspired hip-hop",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2",
        "settings": {
          "highPass": "45Hz",
          "bell": "+2dB at 250Hz",
          "bell": "+2dB at 3kHz"
        }
      },
      {
        "slot": 2,
        "type": "Compressor",
        "plugin": "Fruity Compressor",
        "settings": {
          "ratio": "3:1",
          "attack": "8ms",
          "release": "90ms",
          "threshold": "-18dB"
        }
      },
      {
        "slot": 3,
        "type": "Distortion",
        "plugin": "Fruity Distock",
        "settings": {
          "drive": "12%",
          "tone": "55%"
        }
      }
    ],
    "characteristics": [
      "Punchy transients",
      "Groovy rhythm",
      "Funky character"
    ]
  },
  "workflow": {
    "useCase": "G-funk, funk-inspired hip-hop",
    "steps": [
      "High-pass for clarity",
      "Boost lows for body",
      "Add presence for definition",
      "Quick compression for punch",
      "Subtle saturation for warmth"
    ],
    "tips": [
      "Great for old-school vibes",
      "Perfect for samples and live bass",
      "Check on multiple speaker systems",
      "Automate EQ for dynamics"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\jazzy-smooth.json

```json
{
  "name": "Jazzy Smooth",
  "genre": "hip-hop/rap",
  "mood": "smooth",
  "description": "Warm, smooth chain for jazzy hip-hop",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2",
        "settings": {
          "highPass": "30Hz",
          "lowShelf": "+1dB at 150Hz",
          "highShelf": "+1dB at 8kHz"
        }
      },
      {
        "slot": 2,
        "type": "Saturation",
        "plugin": "Fruity Distock",
        "settings": {
          "drive": "15%",
          "tone": "40%"
        }
      },
      {
        "slot": 3,
        "type": "Compressor",
        "plugin": "Fruity Compressor",
        "settings": {
          "ratio": "2:1",
          "attack": "25ms",
          "release": "150ms",
          "threshold": "-15dB"
        }
      }
    ],
    "characteristics": [
      "Warm tonal character",
      "Smooth dynamics",
      "Jazzy feel"
    ]
  },
  "workflow": {
    "useCase": "Jazzy hip-hop, lo-fi, soulful rap",
    "steps": [
      "High-pass at 30Hz for warmth",
      "Boost lows slightly for body",
      "Add soft saturation",
      "Gentle compression for glue",
      "Maintain natural dynamics"
    ],
    "tips": [
      "Perfect for sample-based tracks",
      "Great for lo-fi aesthetic",
      "Layer with vinyl crackle",
      "Use on instruments and vocals"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\moody-dark-trap.json

```json
{
  "name": "Moody Dark Trap",
  "genre": "hip-hop/rap",
  "mood": "moody",
  "description": "Dark processing chain for moody trap productions",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2",
        "settings": {
          "highPass": "60Hz",
          "lowShelf": "-3dB at 200Hz",
          "highShelf": "-2dB at 10kHz"
        }
      },
      {
        "slot": 2,
        "type": "Saturation",
        "plugin": "Fruity Distock",
        "settings": {
          "drive": "35%",
          "tone": "50%"
        }
      },
      {
        "slot": 3,
        "type": "Compressor",
        "plugin": "Fruity Compressor",
        "settings": {
          "ratio": "4:1",
          "attack": "15ms",
          "release": "100ms",
          "threshold": "-18dB"
        }
      },
      {
        "slot": 4,
        "type": "Limiter",
        "plugin": "Fruity Limiter",
        "settings": {
          "ceiling": "-1dB",
          "attack": "1ms"
        }
      }
    ],
    "characteristics": [
      "Dark tonal character",
      "Punchy low-end",
      "Atmospheric mood"
    ]
  },
  "workflow": {
    "useCase": "Dark trap, drill, moody hip-hop",
    "steps": [
      "Apply high-pass at 60Hz for clean lows",
      "Cut 200Hz slightly for darkness",
      "Add saturation for harmonic warmth",
      "Compress for consistent punch",
      "Limit for headroom"
    ],
    "tips": [
      "Perfect for 808-heavy tracks",
      "Great for atmospheric samples",
      "Check on phone speakers for bass",
      "Automate filter for dynamics"
    ]
  }
}

```

---

## FILE: 02-Data\presets\genre\upbeat-bouncy.json

```json
{
  "name": "Upbeat Bouncy",
  "genre": "hip-hop/rap",
  "mood": "upbeat",
  "description": "Bright, bouncy chain for energetic hip-hop",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2",
        "settings": {
          "highPass": "40Hz",
          "bell": "+2dB at 3kHz",
          "highShelf": "+2dB at 12kHz"
        }
      },
      {
        "slot": 2,
        "type": "Compressor",
        "plugin": "Fruity Compressor",
        "settings": {
          "ratio": "3:1",
          "attack": "5ms",
          "release": "80ms",
          "threshold": "-20dB"
        }
      },
      {
        "slot": 3,
        "type": "Enhancer",
        "plugin": "Fruity parametric EQ 2",
        "settings": {
          "enhance": "25%"
        }
      }
    ],
    "characteristics": [
      "Bright tonal character",
      "Bouncy rhythm",
      "Energetic feel"
    ]
  },
  "workflow": {
    "useCase": "Upbeat hip-hop, party tracks",
    "steps": [
      "High-pass at 40Hz for clarity",
      "Boost 3kHz for presence",
      "Add air at 12kHz",
      "Light compression for bounce",
      "Use Fruity Limiter for safety"
    ],
    "tips": [
      "Perfect for dance tracks",
      "Great for high-energy songs",
      "Check on laptop speakers",
      "Automate EQ for dynamics"
    ]
  }
}

```

---

## FILE: 02-Data\presets\signature\calvin-harris-style.json

```json
{
  "name": "Calvin Harris Style",
  "producer": "Calvin Harris",
  "description": "Clean, powerful chain for EDM productions",
  "reference": "Summer, This Is What You Came For",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2"
      },
      {
        "slot": 2,
        "type": "Compressor",
        "plugin": "Fruity Compressor"
      },
      {
        "slot": 3,
        "type": "Limiter",
        "plugin": "Fruity Limiter"
      }
    ],
    "characteristics": [
      "Clean signal path",
      "Powerful dynamics",
      "Maximum loudness"
    ]
  },
  "workflow": {
    "useCase": "EDM and pop productions",
    "steps": [
      "Set EQ for clarity",
      "Apply gentle compression",
      "Limit for power"
    ],
    "tips": [
      "Keep chain clean",
      "Focus on loudness",
      "Check on club systems"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\deadmau5-modular.json

```json
{
  "name": "Deadmau5 Modular Style",
  "producer": "deadmau5",
  "description": "Progressive techno chain with sidechain compression and mid-side processing",
  "reference": "Strobe, Some Chords",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2",
        "settings": {
          "highPass": "80Hz",
          "lowPass": "16kHz"
        }
      },
      {
        "slot": 2,
        "type": "Compressor",
        "plugin": "Fruity Compressor",
        "settings": {
          "ratio": "4:1",
          "attack": "10ms",
          "release": "150ms",
          "threshold": "-20dB"
        }
      },
      {
        "slot": 3,
        "type": "Limiter",
        "plugin": "Fruity Limiter",
        "settings": {
          "ceiling": "-1dB",
          "attack": "1ms",
          "release": "100ms"
        }
      }
    ],
    "characteristics": [
      "Pulsating rhythm",
      "Clean transients",
      "Wide stereo image"
    ]
  },
  "workflow": {
    "useCase": "Progressive house, techno",
    "steps": [
      "Set high-pass at 80Hz to clean lows",
      "Apply light compression for consistency",
      "Limit to -1dB for headroom",
      "Add sidechain from kick channel"
    ],
    "tips": [
      "Use Fruity Limiter's TC mode for brick-wall limiting",
      "Check mix in mono for phase issues",
      "Adjust release time to tempo of track"
    ]
  }
}

```

---

## FILE: 02-Data\presets\signature\flume-future.json

```json
{
  "name": "Flume Future Style",
  "producer": "Flume",
  "description": "Widescreen future bass processing with mid-side EQ and parallel compression",
  "reference": "Never Be Like You, Say It",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2",
        "settings": {
          "midHigh": "+3dB at 3kHz",
          "sideHigh": "+4dB at 6kHz"
        }
      },
      {
        "slot": 2,
        "type": "Compressor",
        "plugin": "Fruity Compressor",
        "settings": {
          "ratio": "8:1",
          "attack": "2ms",
          "release": "50ms",
          "threshold": "-30dB"
        }
      },
      {
        "slot": 3,
        "type": "Limiter",
        "plugin": "Fruity Limiter",
        "settings": {
          "ceiling": "-3dB",
          "mode": "Brickwall"
        }
      }
    ],
    "characteristics": [
      "Wide stereo image",
      "Aggressive transients",
      "Crystal clear highs"
    ]
  },
  "workflow": {
    "useCase": "Future bass, experimental electronic",
    "steps": [
      "Boost side frequencies for width",
      "Apply aggressive transient compression",
      "Brick-wall limit for loudness",
      "Check mono compatibility"
    ],
    "tips": [
      "Use mid-side EQ for precise stereo imaging",
      "Keep attack fast for punchy transients",
      "Test width with mono button frequently"
    ]
  }
}

```

---

## FILE: 02-Data\presets\signature\metro-boomin-style.json

```json
{
  "name": "Metro Boomin Style",
  "producer": "Metro Boomin",
  "description": "Dark, aggressive chain for trap productions",
  "reference": "Harder, Creepin'",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2"
      },
      {
        "slot": 2,
        "type": "Distortion",
        "plugin": "Fruity Distock"
      },
      {
        "slot": 3,
        "type": "Compressor",
        "plugin": "Fruity Compressor"
      }
    ],
    "characteristics": [
      "Dark character",
      "Aggressive tone",
      "Punchy impact"
    ]
  },
  "workflow": {
    "useCase": "Trap and hip-hop",
    "steps": [
      "Apply dark EQ",
      "Add subtle distortion",
      "Compress for punch"
    ],
    "tips": [
      "Focus on low-end",
      "Add aggression subtly",
      "Check on phone speakers"
    ]
  }
}
```

---

## FILE: 02-Data\presets\signature\timbaland-rhythm.json

```json
{
  "name": "Timbaland Rhythm Style",
  "producer": "Timbaland",
  "description": "Unconventional rhythmic processing with reverse delays and creative EQ",
  "reference": "Dirt Off Your Shoulder, SexyBack",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2",
        "settings": {
          "notch": "-6dB at 400Hz",
          "notch": "-4dB at 2.5kHz"
        }
      },
      {
        "slot": 2,
        "type": "Delay",
        "plugin": "Fruity Delay 3",
        "settings": {
          "time": "1/8",
          "feedback": "30%",
          "mode": "Reverse"
        }
      },
      {
        "slot": 3,
        "type": "Reverb",
        "plugin": "Fruity Reeverb 2",
        "settings": {
          "size": "Small",
          "damping": "High"
        }
      }
    ],
    "characteristics": [
      "Experimental texture",
      "Hypnotic rhythm",
      "Unique character"
    ]
  },
  "workflow": {
    "useCase": "Experimental hip-hop, pop",
    "steps": [
      "Apply EQ cuts for clarity",
      "Add reverse delay for texture",
      "Blend small reverb for space",
      "Experiment with unconventional settings"
    ],
    "tips": [
      "Try delay times in tempo but with dotted rhythms",
      "Use automation for dynamic effect changes",
      "Layer multiple Patcher chains for complexity"
    ]
  }
}

```

---

## FILE: 02-Data\presets\signature\zaytoven-creative.json

```json
{
  "name": "Zaytoven Creative Style",
  "producer": "Zaytoven",
  "description": "Warm analog-style chain with tape saturation and soft compression",
  "reference": "Easy, Where U At",
  "parameters": {
    "chain": [
      {
        "slot": 1,
        "type": "EQ",
        "plugin": "Fruity Parametric EQ 2",
        "settings": {
          "lowShelf": "+2dB at 100Hz",
          "highShelf": "+1dB at 8kHz"
        }
      },
      {
        "slot": 2,
        "type": "Saturation",
        "plugin": "Fruity Distock",
        "settings": {
          "drive": "25%",
          "tone": "60%"
        }
      },
      {
        "slot": 3,
        "type": "Compressor",
        "plugin": "Fruity Compressor",
        "settings": {
          "ratio": "2:1",
          "attack": "20ms",
          "release": "100ms",
          "threshold": "-12dB"
        }
      }
    ],
    "characteristics": [
      "Warm low-end",
      "Smooth highs",
      "Vintage character"
    ]
  },
  "workflow": {
    "useCase": "Trap, R&B, soulful hip-hop",
    "steps": [
      "Boost lows slightly for warmth",
      "Add subtle tape saturation",
      "Apply soft compression for glue",
      "Maintain dynamic range"
    ],
    "tips": [
      "Keep saturation subtle - more is not always better",
      "Use Fruity Limiter after compression for safety",
      "Check on laptop speakers for real-world testing"
    ]
  }
}

```

---

## FILE: 02-Data\rules\cpu-and-latency-management.md

```markdown
# Rules: CPU & Latency Management (Patcher)

Tags: optimization | mix-safety | latency

## 1. The "Latency Stack" Rule
Each plugin inside Patcher can add its own latency. 
- **Rule:** Avoid using "Linear Phase" EQs or heavy "Oversampling" inside Patcher during the recording phase. 
- **Why:** Patcher attempts to compensate for latency, but complex chains can cause "audio drift" where the vocal no longer aligns with the beat.

## 2. CPU "Hidden Cost" Rule
- **Rule:** If you bypass a plugin *inside* Patcher using its internal mix knob, the CPU is still being used. 
- **Why:** Unlike the Mixer slots, Patcher keeps plugins "active" to ensure instant switching. To save CPU, you must delete the module or use its own internal "Low CPU" mode.

## 3. Parallel Phasing Safety
- **Rule:** If splitting audio into parallel paths, ensure the processing on each path has the same latency.
- **Why:** If Path A has a compressor with "Lookahead" and Path B is a clean wire, they will be slightly out of time, causing "Phasing" which makes your Kick/Snare sound thin and metallic.

## 4. "Avoid" List
- **Avoid Over-Oversampling:** Running 5 plugins each at 4x oversampling inside one Patcher instance will likely crash your project or cause heavy audio crackling.
- **Avoid MIDI Loops:** Be careful when routing MIDI from a module back into the Patcher Input—this can create a feedback loop that freezes FL Studio.

```

---

## FILE: 02-Data\rules\patcher-safety-rules.md

```markdown
# Patcher Safety Rules

## CPU Management

### Plugin Loading
- Load plugins strategically
- Avoid loading unused plugins
- Monitor CPU usage in chain

### Parallel Processing
- Each parallel path uses additional CPU
- Limit parallel paths to 2-4 max
- Disable unused paths

### Voice Management
- Polyphonic instruments increase CPU
- Limit voices in synth chains
- Use mono versions when possible

---

## Routing Best Practices

### Signal Flow
- Keep signal path logical
- Avoid unnecessary routing loops
- Use clear naming conventions

### Latency Compensation
- Patcher handles latency automatically
- Be aware of cumulative delay
- Check mix phase with latency-heavy chains

---

## Preset Management

### Saving Presets
- Name chains descriptively
- Include chain description
- Note required plugins
- Test before sharing

### Loading Presets
- Check for missing plugins
- Verify chain integrity
- Test signal flow

---

## Common Mistakes

### CPU Overload
| Mistake | Consequence | Prevention |
|---------|-------------|-------------|
| Too many plugins | CPU strain | Limit chain length |
| Parallel paths | CPU multiplication | Limit to 2-4 paths |
| Unused plugins | Wasted CPU | Remove unused |

### Routing Errors
| Mistake | Consequence | Prevention |
|---------|-------------|-------------|
| Feedback loops | Signal issues | Check routing |
| Unconnected paths | No signal | Verify connections |
| Wrong order | Poor results | Follow signal flow |

---

## Optimization Tips

### Efficient Chains
- Use plugin order wisely
- Disable unused sections
- Use effect only when needed
- Bypass chains for A/B testing

### Resource Management
- Monitor CPU meter
- Use lightweight alternatives
- Freeze tracks with heavy chains
- Use render-to-audio for final chains

---

## Related Documentation

- [Patcher Quick Reference](../01-Learning/Quick-Reference/quick-reference.md)
- [Chain Creation Workflows](../03-Workflows/by-goal/chain-creation.md)
- [Parallel Processing Workflows](../03-Workflows/by-goal/parallel-processing.md)

```

---

## FILE: 03-Workflows\by-goal\01-chain-creation.md

```markdown
# Patcher Chain Creation Workflows

## Creating Effect Chains

### Standard Series Chain
1. Drag Patcher onto track
2. Add plugins in order
3. Connect signal flow
4. Save as preset

### Chain Order Guidelines
| Position | Plugin Type | Examples |
|----------|-------------|----------|
| First | EQ | Fruity Parametric EQ 2 |
| Middle | Dynamics | Compressor, Limiter |
| Last | Effects | Reverb, Delay |

---

## Parallel Processing

### Setting Up Parallel
1. Create multiple paths
2. Load different effects
3. Blend with mix control
4. Save parallel preset

### Common Parallel Setups
- Parallel compression
- Dual reverb
- Distortion blend
- EQ bands

---

## Troubleshooting Chains

### No Signal
- Check plugin order
- Verify connections
- Check bypass state

### Poor Results
- Simplify chain
- Check plugin settings
- Verify signal flow

---

## Related Documentation

- [Patcher Quick Reference](../01-Learning/Quick-Reference/quick-reference.md)
- [Parallel Processing Workflows](./parallel-processing.md)

```

---

## FILE: 03-Workflows\by-goal\02-parallel-processing.md

```markdown
# Patcher Parallel Processing Workflows

## What is Parallel Processing?

Parallel processing sends signal through multiple paths simultaneously, allowing you to blend different processing.

---

## Setting Up Parallel Paths

### Basic Parallel
1. Enable parallel mode
2. Create 2 paths
3. Load different effects
4. Blend with mix control

### Advanced Parallel
1. Create 3+ paths
2. Load varied effects
3. Set individual levels
4. Create complex chain

---

## Common Parallel Setups

### Parallel Compression
| Path 1 | Path 2 |
|---------|---------|
| Dry | Heavily compressed |

### Dual Reverb
| Path 1 | Path 2 |
|---------|---------|
| Short room | Long hall |

### Distortion Blend
| Path 1 | Path 2 |
|---------|---------|
| Clean | Distorted |

---

## Tips for Parallel Processing

### CPU Management
- Limit parallel paths
- Disable unused paths
- Monitor CPU usage

### Level Matching
- Match levels between paths
- Use gain staging
- A/B frequently

---

## Related Documentation

- [Chain Creation Workflows](./01-chain-creation.md)
- [Patcher Safety Rules](../02-Data/rules/patcher-safety-rules.md)

```

---

## FILE: 03-Workflows\by-goal\INDEX.md

```markdown
# Patcher Workflows INDEX

## By-Goal Workflows

| File | Focus |
|------|-------|
| [01-chain-creation.md](01-chain-creation.md) | Creating effect chains |
| [02-parallel-processing.md](02-parallel-processing.md) | Parallel signal paths |
| [hop-hop-subgenre-chains.md](hop-hop-subgenre-chains.md) | Hip-Hop Sub-Genre Chains |

## Quick Reference

| Goal | Workflow |
|------|----------|
| Create mix chain | Chain Creation |
| Parallel compression | Parallel Processing |
| Dark trap mood | Hip-Hop Sub-Genre Chains |
| Upbeat hip-hop | Hip-Hop Sub-Genre Chains |
| Electro hip-hop | Hip-Hop Sub-Genre Chains |
| Jazzy smooth | Hip-Hop Sub-Genre Chains |
| Funky groove | Hip-Hop Sub-Genre Chains |
| Drill energy | Hip-Hop Sub-Genre Chains |

## Related Documentation

- [Patcher Presets](../02-Data/presets/INDEX.md)
- [Patcher Safety Rules](../02-Data/rules/patcher-safety-rules.md)

```

---

## FILE: 03-Workflows\by-goal\custom-synth-interface.md

```markdown
# Custom Synth Interface (Patcher)

## Goal
Design a simplified UI for a complex synthesizer chain.

## Technical Steps
1. **The Chain:**
   - Host `Sytrus` inside Patcher.
   - Route `Sytrus` into `Fruity Limiter`.
2. **The Surface:**
   - Switch to the **Surface** tab.
   - Add a **Knob**. Right-click > Rename to "Aggression".
   - Add an **XY Pad**. Rename to "Vibe".
3. **The Mapping:**
   - Right-click `Sytrus` > `Inputs > Parameters > Operator 1 FM Amount`.
   - Right-click `Fruity Limiter` > `Inputs > Parameters > Ceiling`.
   - In the **Map** view, connect the "Aggression" red node from the Surface to the Sytrus FM Amount.
   - Connect the "Vibe" X/Y outputs to Filter Cutoff and Resonance.

## Why it works
Power users often design "Macros" to hide the complexity of sound design. This allows you to perform the sound without being distracted by hundreds of individual parameters.

```

---

## FILE: 03-Workflows\by-goal\hop-hop-subgenre-chains.md

```markdown
# Hip-Hop Sub-Genre Patcher Workflows

## Moody Dark Trap Chain
| Parameter | Setting |
|-----------|---------|
| High-Pass | 60Hz |
| Low Shelf | -3dB at 200Hz |
| Saturation Drive | 35% |
| Compression Ratio | 4:1 |
| Limiter Ceiling | -1dB |

### Configuration
1. Load Fruity Parametric EQ 2
2. Apply high-pass at 60Hz
3. Cut 200Hz for darkness
4. Add Fruity Distock with 35% drive
5. Apply Fruity Compressor 4:1, 15ms attack
6. Limit at -1dB

### Tips
- Perfect for 808-heavy productions
- Check on phone speakers for bass
- Automate filter for dynamics

---

## Upbeat Bouncy Chain
| Parameter | Setting |
|-----------|---------|
| High-Pass | 40Hz |
| Presence Boost | +2dB at 3kHz |
| Air Boost | +2dB at 12kHz |
| Compression Ratio | 3:1 |
| Attack | 5ms |

### Configuration
1. High-pass at 40Hz for clarity
2. Boost 3kHz for presence
3. Add air at 12kHz
4. Light compression for bounce
5. Use Fruity Limiter for safety

### Tips
- Great for party tracks
- Check on laptop speakers
- Automate EQ for dynamics

---

## Electro Hip-Hop Chain
| Parameter | Setting |
|-----------|---------|
| High-Pass | 50Hz |
| Presence Boost | +3dB at 4kHz |
| Distortion Drive | 20% |
| Compression Ratio | 6:1 |
| Attack | 2ms |

### Configuration
1. High-pass for clarity
2. Boost presence frequencies
3. Add subtle distortion
4. Aggressive compression
5. Check for harshness

### Tips
- Modern, futuristic sounds
- Perfect for 808 subgenres
- Automate distortion for effect

---

## Jazzy Smooth Chain
| Parameter | Setting |
|-----------|---------|
| High-Pass | 30Hz |
| Low Shelf | +1dB at 150Hz |
| Saturation Drive | 15% |
| Compression Ratio | 2:1 |
| Attack | 25ms |

### Configuration
1. High-pass at 30Hz for warmth
2. Boost lows slightly for body
3. Add soft saturation
4. Gentle compression for glue
5. Maintain natural dynamics

### Tips
- Perfect for sample-based tracks
- Great for lo-fi aesthetic
- Layer with vinyl crackle

---

## Funky Groovy Chain
| Parameter | Setting |
|-----------|---------|
| High-Pass | 45Hz |
| Low Boost | +2dB at 250Hz |
| Presence | +2dB at 3kHz |
| Compression Ratio | 3:1 |
| Attack | 8ms |

### Configuration
1. High-pass for clarity
2. Boost lows for body
3. Add presence for definition
4. Quick compression for punch
5. Subtle saturation for warmth

### Tips
- Great for old-school vibes
- Perfect for samples and live bass
- Check on multiple speaker systems

---

## Energetic Drill Chain
| Parameter | Setting |
|-----------|---------|
| High-Pass | 70Hz |
| Presence Boost | +3dB at 2kHz |
| Distortion Drive | 45% |
| Compression Ratio | 8:1 |
| Limiter Mode | Brickwall |

### Configuration
1. High-pass at 70Hz for intensity
2. Boost presence for attack
3. Heavy distortion for edge
4. Aggressive compression
5. Brick-wall limiting

### Tips
- Perfect for modern drill
- Great for aggressive flows
- Use on 808s and snares

---

## Related Documentation
- [Patcher Presets INDEX](../02-Data/presets/INDEX.md)
- [Patcher Safety Rules](../02-Data/rules/patcher-safety-rules.md)

```

---

## FILE: 03-Workflows\by-goal\multiband-distortion-rack.md

```markdown
# Multiband Distortion Rack (Patcher)

## Goal
Apply different types of distortion to Low, Mid, and High frequencies without phase issues.

## Technical Steps
1. **Splitting:**
   - Add **Frequency Splitter** inside the Map.
   - Connect "From FL Studio" to the Input of Frequency Splitter.
2. **Processing Paths:**
   - **Low Branch:** Connect Low out to `Fruity WaveShaper` (Soft clipping).
   - **Mid Branch:** Connect Mid out to `Distructor` (Tube saturation).
   - **High Branch:** Connect High out to `Fruity Blood Overdrive` (Hard clipping).
3. **Summing:**
   - Connect the outputs of all three distortion plugins to the "To FL Studio" node.
4. **Control:**
   - Add a **Control Surface**.
   - Create a knob labeled "Crossover".
   - Map it to the Frequency Splitter's "Low/Mid" crossover frequency.

## Why it works
Distorting high frequencies often ruins the clarity of the bass. By splitting the signal, you can keep the low end solid and clean while making the high end aggressive.

```

---

## FILE: 03-Workflows\by-instrument\INDEX.md

```markdown
# Patcher By-Instrument Workflows

## Drum Processing Chain
| Parameter | Setting |
|-----------|---------|
| High-Pass | 40Hz |
| Low-Pass | 12kHz |
| Parallel Ratio | 60% wet |
| Attack | 1ms |
| Release | 50ms |

### Configuration
1. Load Patcher on drum track
2. Create parallel paths: clean vs processed
3. Apply EQ to processed path
4. Add compression to both paths
5. Blend for optimal balance

### Genre Applications
| Genre | Character | Settings Adjustment |
|-------|-----------|-------------------|
| Trap | Dark, punchy | Aggressive compression |
| EDM | Loud, aggressive | Higher ratio |
| R&B | Smooth, warm | Softer attack |

### Troubleshooting
| Issue | Fix |
|-------|-----|
| Loss of punch | Increase attack time |
| Too harsh | High-pass at 60Hz |
| Not cutting through | Boost 3-4kHz |

---

## Bass Processing Chain
| Parameter | Setting |
|-----------|---------|
| High-Pass | 20Hz |
| Low-Pass | 200Hz |
| Saturation | 30% |
| Limiter Ceiling | -3dB |

### Configuration
1. Route bass through Patcher
2. Apply high-pass to remove sub bleed
3. Add saturation for harmonic content
4. Limit for consistent levels
5. Sidechain to kick if needed

### Genre Applications
| Genre | Character | Settings Adjustment |
|-------|-----------|-------------------|
| Trap | Deep, rumbling | Heavy saturation |
| Hip-Hop | Warm, smooth | Light saturation |
| EDM | Loud, distorted | Maximum saturation |

### Troubleshooting
| Issue | Fix |
|-------|-----|
| Muddy low-end | Increase high-pass |
| Distorted bass | Reduce saturation |
| Inconsistent levels | Adjust limiter threshold |

---

## Vocal Processing Chain
| Parameter | Setting |
|-----------|---------|
| High-Pass | 80Hz |
| De-esser | 6kHz |
| Compression Ratio | 3:1 |
| Reverb Size | Medium |

### Configuration
1. Load Patcher on vocal track
2. Apply high-pass to remove rumble
3. Add de-essing for sibilance
4. Set compression for consistency
5. Add subtle reverb for depth

### Genre Applications
| Genre | Character | Settings Adjustment |
|-------|-----------|-------------------|
| R&B | Smooth, warm | Light compression |
| Hip-Hop | Present, clear | Medium compression |
| Pop | Polished, bright | Heavy compression |

### Troubleshooting
| Issue | Fix |
|-------|-----|
| Sibilance | Increase de-esser threshold |
| Dynamics too wide | Reduce ratio, increase threshold |
| Too dry | Add subtle reverb |

---

## Synth Processing Chain
| Parameter | Setting |
|-----------|---------|
| High-Pass | 100Hz |
| Low-Pass | 16kHz |
| Stereo Width | 120% |
| Distortion | 20% |

### Configuration
1. Route synth through Patcher
2. Apply high-pass if sub content exists
3. Add stereo width for dimension
4. Blend distortion for character
5. Limit for headroom

### Genre Applications
| Genre | Character | Settings Adjustment |
|-------|-----------|-------------------|
| EDM | Wide, loud | Maximum width |
| Hip-Hop | Warm, round | Light distortion |
| Pop | Polished, bright | Medium distortion |

### Troubleshooting
| Issue | Fix |
|-------|-----|
| Phase issues | Check mono compatibility |
| Too wide | Reduce stereo width |
| Harsh highs | High-pass at 80Hz |

---

## Related Documentation
- [Patcher By-Goal Workflows](./by-goal/INDEX.md)
- [Patcher Safety Rules](../02-Data/rules/patcher-safety-rules.md)
- [Patcher Presets INDEX](../02-Data/presets/INDEX.md)

```

---

## FILE: 03-Workflows\by-instrument\urban-vocal-chain-patcher.md

```markdown
# Workflow: Ultimate Urban Vocal Chain (Patcher)
**Goal:** Create a reusable, modular Patcher preset that handles all the heavy lifting for R&B and Hip-Hop vocals.

## 1. The Signal Flow (Internal Routing)
To build a professional vocal chain in Patcher, route in this order:
1. **Fruity Limiter (Noise Gate):** To remove background hum between phrases.
2. **Pitcher (Auto-Tune):** Correction should happen early in the chain.
3. **Fruity Parametric EQ 2:** Cut the mud (200Hz) and add the "Air" (10kHz+).
4. **Maximus (De-Esser Mode):** Specifically targeting the "S" frequencies (5kHz-8kHz).
5. **Fruity Soft Clipper:** To catch transients before the final output.

## 2. The "Air" Module (Parallel Path)
Modern Pop-Rap/R&B vocals have a "shimmer."
- Use **Fruity Send** within Patcher to create a parallel path.
- In path 2, add a **High Pass Filter (10kHz)** and a **Fruity Chorus**.
- Blend this "Air" back into the main signal for a wide, expensive feel.

## 3. The "Moody" Control Surface
Create a custom Dashboard in Patcher with 3 knobs:
- **"The Drip":** Links to the Wet/Dry mix of a LuxeVerb module.
- **"The Grit":** Links to the Drive of a Low Lifter (to add harmonics to deep male vocals).
- **"The Width":** Links to the Separation knob of a Stereo Enhancer.

## 4. Why Use Patcher Instead of Mixer Slots?
- **Portability:** You can save the entire complex chain as ONE preset and drag it onto any project.
- **Visual Clarity:** You see the signal flow exactly as it is, making it easier to troubleshoot "mud" in the vocal.
- **CPU Efficiency:** Consolidates multiple plugins into one container, which can sometimes help with project organization and lag.

```

---

## FILE: 03-Workflows\by-instrument\workflows-INDEX.md

```markdown
# Patcher By-Instrument Workflows INDEX

## Available Workflows

### Processing Chains
| File | Instrument | Primary Use |
|------|------------|-------------|
| `01-drum-processing-chain.md` | Drums | Enhance punch and clarity |
| `02-bass-processing-chain.md` | Bass | Deep low-end with warmth |
| `03-vocal-processing-chain.md` | Vocals | Professional vocal chain |
| `04-synth-processing-chain.md` | Synths | Width and character |

## Quick Reference

| Goal | Workflow | Settings |
|------|----------|----------|
| Punchy drums | Drum Processing | Fast attack, medium release |
| Warm bass | Bass Processing | Light saturation, 20Hz HPF |
| Clear vocals | Vocal Processing | 80Hz HPF, 3:1 compression |
| Wide synths | Synth Processing | 120% width, light distortion |

## Related Documentation
- [Patcher By-Goal Workflows](../by-goal/INDEX.md)
- [Patcher Presets INDEX](../../02-Data/presets/INDEX.md)
- [Patcher Safety Rules](../../02-Data/rules/patcher-safety-rules.md)

```

---

## FILE: 04-Reference\common-map-routings.md

```markdown
# Reference: Common Map Routings (Patcher)
**Goal:** A logic-map for building modular effects chains used in professional Urban music mixes.

## 1. The "Mid-Side" Splitter
*Why: To compress the bass in the center (Mid) while widening reverbs on the edges (Side).*
- **Input** -> **Fruity Stereo Shaper** (Preset: Mid-Side Split)
- **Mid Output** -> **Fruity Limiter** (Mono Compression)
- **Side Output** -> **Fruity Chorus** or **LuxeVerb** (Width Enhancement)
- **Combine** -> **Fruity Voltage Controller** or simply merge into **Output**.

## 2. The "Multi-Band" Saturation Rack
*Why: To add "Grit" to the low-mids of an 808 without distorting the sub-bass.*
- **Input** -> **Fruity Parametric EQ 2** (3-way split using steep Bandpass filters).
- **Low Band (20Hz - 100Hz):** No processing (Clean Sub).
- **Mid Band (100Hz - 500Hz):** -> **Fruity Soft Clipper** (Hard Saturation).
- **High Band (500Hz+):** -> **Fruity Chorus** (Dimension).
- **Mix:** Combine all bands back together.

## 3. Parallel "New York" Compression
*Why: To get "punchy" drums that still sound natural.*
- **Path A (Dry):** Straight to Output.
- **Path B (Wet):** -> **Fruity Limiter** (Compressor Mode).
    - Ratio: 8:1 (Aggressive)
    - Threshold: -30dB (Squashing the signal)
    - Gain: +5dB (Makeup)
- **Blend:** Use a **Surface Knob** to control the volume of Path B.

## 4. The "Intelligent" De-Esser
*Why: Only taming harsh vocals when they actually happen.*
- **Input** -> **Peak Controller** (Filtered to 5kHz - 8kHz).
- **Input** -> **Fruity Parametric EQ 2** (High Shelf band).
- **Logic:** Link the EQ 2 High Shelf "Gain" to the Peak Controller (Inverted).
- **Result:** When "S" sounds hit, the EQ automatically pulls down the high-end.

```

---

## FILE: 04-Reference\latency-and-pdc-in-patcher.md

```markdown
# Latency and PDC in Patcher

## The Challenge
When you split a signal into parallel paths inside Patcher, one path might have more plugins (and thus more latency) than the other.

## How Patcher Handles Latency
- **Internal PDC:** Patcher automatically calculates the delay of every node in the map.
- **Path Alignment:** It delays the "faster" paths to match the "slowest" path, ensuring that when the signals sum back together at the output, they are perfectly in phase.
- **Reporting to Host:** Patcher reports the **Total Latency** of its slowest internal path to FL Studio's mixer, so the rest of the project stays in sync.

## Pitfalls
- **Lookahead:** Plugins with lookahead (like `Fruity Limiter` or `Maximus`) add significant latency. If you use them in a parallel path, the whole Patcher instance will have that latency.
- **Feedback Loops:** PDC cannot perfectly align feedback loops. Avoid creating paths that circle back into themselves within the map.

```

---

