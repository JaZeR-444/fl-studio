# Transporter - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Transporter - Real-Time Relooper

`\`\`
████████╗██████╗  █████╗ ███╗   ██╗███████╗██████╗  ██████╗ ██████╗ ████████╗███████╗██████╗ 
╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
   ██║   ██████╔╝███████║██╔██╗ ██║███████╗██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██████╔╝
   ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██╔══██╗
   ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║     ╚██████╔╝██║  ██║   ██║   ███████╗██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Real-Time Relooper / Glitch Effect
**Category:** Effect / Sound Design / Performance
**Official Manual:** [Image-Line Transporter Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Transporter.htm)

---

## 🎯 What is Transporter?

Transporter is a real-time relooping effect that continuously records incoming audio into a rolling buffer and triggers loops based on detected transients. It is designed for live performance and extreme sound design, allowing you to "catch" drum hits or guitar notes and instantly transform them into rhythmic repetitions (Loops A & B). It features advanced "Bouncing" and "Tempo" modes for organic or strictly rhythmic glitches.

**Key Capabilities:**
- **Real-Time Buffer:** Continuously captures incoming audio for instant relooping.
- **Dual Independent Loops:** Trigger two loops (A & B) with distinct playback positions.
- **Transient-Driven Triggering:** Auto-detects peaks to start loops dynamically.
- **Bouncing Mode:** Simulates physical events (like a bouncing ball) for loop length.
- **Tempo Sync:** Reloops based on rhythmic subdivisions (1/4, 1/8, etc.).
- **Stereo Spread:** Independent panning or auto-panning for the loop voices.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **transporter-modes-decoded.md** (Auto vs Tempo vs Bouncing)
3. Create **parameter-cheat-sheet.md**
4. Apply to a simple drum beat, enable "Auto" mode, and adjust "Sensitivity."

### For Sound Designers:
1. Study **creating-glitch-textures.md**
2. Review **bouncing-ball-rhythms.md**
3. Learn **a-b-ratio-groove-design.md**

### For Live Performers:
1. Study **real-time-audio-rearrangement.md**
2. Review **stereo-spread-movement.md**

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **Sensitivity:** Transient detection threshold.
  - **Spread:** Stereo width/Auto-pan.
  - **Bouncing Rate:** Acceleration of loop shortening.
  - **A/B Ratio:** Relationship between the two loop lengths.
  - **Modes:** Auto, Bouncing, Tempo switches.

- [ ] **transporter-modes-decoded.md**
  - **Auto:** Triggered by incoming audio volume peaks.
  - **Tempo:** Triggered by the song grid.
  - **Bouncing:** Changing loop lengths over time.

#### 02-Data/parameters/
- [ ] **transporter-params.json**
  `\`\`json
  {
    "plugin_name": "Transporter",
    "category": "Glitch/Relooper",
    "features": ["Dual loops", "Bouncing mode", "Transient detection"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **perfect-glitch-fills.md**
  - Automating the "Mute" or "Mix" knob for end-of-bar fills.
  - Using "Bouncing" mode for a natural decay feel.

- [ ] **rhythmic-rearrangement.md**
  - Using "Tempo" mode.
  - Setting A/B Ratio to create polyrhythmic repeats.

- [ ] **stereo-widening-glitch.md**
  - Using high "Spread" values.
  - Panning Loop A Left and Loop B Right.

#### 03-Workflows/by-context/
- [ ] **glitching-vocals-live.md**
- [ ] **guitar-stutter-effects.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **transient-detection-physics.md**
  - How Sensitivity interacts with the noise floor.

---

## 🔬 Research Framework

### Phase 1: The Loop (Week 1)
**Goal:** Consistent Relooping

**Tasks:**
1. Put Transporter on a Snare track
2. Find the "Sensitivity" sweet spot for clean triggers
3. Observe the green/orange playback markers
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How long is the internal buffer?
- Can I manually trigger the loops?

### Phase 2: The Bounce (Week 2)
**Goal:** Movement

**Tasks:**
1. Switch to "Bouncing" mode
2. Adjust "Bouncing Rate" to create a "dying motor" effect
3. Automate the "Spread" LFO
4. Create bouncing-ball-rhythms.md

---

## 📊 Plugin Specifications to Document

### Engine
- Latency (Low-latency design?)
- Buffer Type (Rolling)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it looping everything? (Sensitivity is too high).
2. How is this different from Gross Beat? (Gross Beat is envelope-based; Transporter is dynamic and transient-reactive).

---

## 🔗 Cross-Reference with Other Plugins

Transporter is often used with:
- **Gross Beat** (Pre-programmed time FX)
- **Fruity Delay 3** (Adding space to the repeats)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Transporter/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── transporter-modes-decoded.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── transporter-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── perfect-glitch-fills.md
│   │   └── rhythmic-rearrangement.md
│
└── 04-Reference/
    └── transient-detection-physics.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Create a "Bouncing Ball" snare roll using only Transporter
- [ ] Explain the benefit of the A/B Ratio knob for rhythmic variety
- [ ] Successfully use Auto-panning to create a wide glitch field
- [ ] Demonstrate zero-latency live relooping on a vocal input

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Transporter - Parameter Cheat Sheet

**Plugin Type:** Realtime Relooping Effect
**Category:** Creative Effect / Beat Mangler
**Official Manual:** [Transporter](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Transporter.htm)

---

## Main Loop Controls

| Parameter | Range | Function | Quick Tip |
|-----------|-------|----------|-----------|
| **Loop Length** | 1/64 - 4 bars | Size of the looped buffer | Shorter = glitchy, longer = rhythmic loops |
| **Loop Position** | 0-100% | Where in the buffer to start loop | Automate for dynamic repositioning |
| **Freeze** | On/Off | Locks current loop content | Use for building static layers |
| **Transient Sensitivity** | 0-100% | Detection threshold for beats/hits | Higher = only strong transients trigger |
| **Snap to Transients** | On/Off | Quantizes loop points to detected hits | Creates cleaner, more musical loops |

---

## Transport & Timing

| Parameter | Range | Function | When to Use |
|-----------|-------|----------|-------------|
| **Speed** | 0.5x - 2x | Playback speed multiplier | Create half-time or double-time effects |
| **Direction** | Forward/Reverse | Loop playback direction | Reverse for creative reversed effects |
| **Stutter** | Off/1-16 steps | Repeats loop segment rhythmically | Add rhythmic stutter fills |
| **Stutter Rate** | 1/64 - 1 bar | Length of each stutter repeat | Sync to tempo for musical results |

---

## Mix & Effects

| Parameter | Range | Function | Practical Use |
|-----------|-------|----------|---------------|
| **Dry/Wet Mix** | 0-100% | Balance between original and effected signal | 100% for complete transformation |
| **Output Gain** | -inf to +6dB | Overall output level | Compensate for level changes |
| **Crossfade Time** | 0-100ms | Smoothness of loop transitions | Increase to reduce clicks/pops |

---

## Modulation Section

| Parameter | Function | Automation Ideas |
|-----------|----------|------------------|
| **LFO Rate** | Modulation speed | Sync to tempo for rhythmic loop position changes |
| **LFO Depth** | Modulation intensity | Subtle wobble or extreme position jumping |
| **LFO Target** | Loop Position/Length/Speed | Choose what the LFO affects |

---

## Quick Start Presets

| Use Case | Settings |
|----------|----------|
| **Glitch Stutter** | Loop: 1/16, Snap: On, Stutter: 4 steps at 1/32 |
| **Vinyl Stop** | Speed: Automate from 100% to 0%, Crossfade: 50ms |
| **Beat Repeat** | Loop: 1/4, Freeze: On, Position: Automate |
| **Reverse Build** | Direction: Reverse, Loop: 1 bar, Speed: 0.5x |
| **Transient Gate** | Sensitivity: 80%, Loop: 1/64, Snap: On |

---

## Transient Detection Tips

1. **Percussive Material:** Use high sensitivity (70-90%) for clean detection
2. **Dense Mixes:** Lower sensitivity (30-50%) to avoid over-triggering
3. **Snap to Transients:** Always enable for rhythmic material
4. **Manual Override:** Disable for smooth, non-rhythmic sources

---

## Live Performance Tricks

### Build-Up Effect
1. Set loop length to 1/8
2. Gradually decrease loop length while increasing transient sensitivity
3. Freeze at peak moment
4. Release freeze on the drop

### Breakdown Fill
1. Freeze current loop at bar end
2. Set stutter to 8 steps at 1/16
3. Reverse direction
4. Decrease speed to 0.5x over 2 bars

### Glitch Out
1. Very short loop (1/64 or 1/32)
2. Automate loop position rapidly
3. High crossfade time (75ms+)
4. Mix at 50% with dry signal

---

## BPM Sync Behavior

- **Auto-Sync:** Transporter automatically syncs to project tempo
- **Loop Lengths:** All musical (1/4, 1/8, etc.) values sync to BPM
- **Tempo Changes:** Plugin adjusts loop timing in realtime
- **Stutter Rates:** Also tempo-synced when using musical divisions

---

## Common Mistakes to Avoid

1. **Too Long Crossfade:** Makes loops mushy and undefined
2. **Extreme Sensitivity:** Can miss intended transients or over-trigger
3. **No Freeze Control:** Learn to freeze loops strategically, not randomly
4. **Ignoring Dry/Wet:** Often 30-70% mix sounds better than 100% wet
5. **Fixed Loop Position:** Automate position for dynamic movement

---

## CPU & Performance

- **CPU Usage:** Low to moderate (depends on loop length)
- **Buffer Size:** Shorter loops = less memory usage
- **Realtime Safe:** Yes - suitable for live performance
- **Latency:** Minimal (based on transient lookahead)

---

## Genre Applications

| Genre | Typical Settings |
|-------|------------------|
| **Glitch Hop** | Short loops (1/16-1/32), high stutter rate |
| **IDM** | Variable loop lengths, position automation |
| **Techno** | Longer loops (1/2-1 bar), freeze on builds |
| **Dubstep** | Stutter on snare hits, reverse effects |
| **Hip-Hop** | Beat repeat (1/4 loops), transient-snapped |

---

## Routing Suggestions

### Send Effect
- Place on send track for parallel processing
- Mix dry drums with glitched version
- Control effect intensity via send level

### Insert Effect
- Direct loop manipulation of single track
- 100% wet for complete transformation
- Automate freeze for specific sections

### Sidechain Input
- Route different source for transient detection
- Loop one signal based on rhythm of another
- Creative cross-rhythmic effects

---

## Related Plugins

- **Gross Beat** - Alternative loop/stutter effect with more presets
- **Fruity Scratcher** - Manual loop manipulation
- **Fruity Granulizer** - Grain-based loop processing
- **Effector** - Multi-effect with loop capabilities

---

**Last Updated:** February 3, 2026
**Status:** Complete reference material

```

---

## FILE: 01-Learning\Quick-Reference\quickstart-guide.md

```markdown
# Transporter Quick Start Guide

## What is Transporter?
Transporter is a creative audio manipulation plugin that specializes in stutter, glitch, and rhythmic effects for live performance and studio production.

## 5-Minute Setup
1. Load Transporter on your desired track
2. Start with the "Stutter Init" preset
3. Play audio and experiment with the main buffer size
4. Try different stutter divisions (1/4, 1/8, 1/16)
5. Add filter modulation for movement

## Essential Controls
- **Buffer Size**: Length of audio loop (16ms - 2 bars)
- **Stutter Rate**: Repeat speed of buffer
- **Pitch Shift**: Transposition of stuttered audio
- **Filter**: Frequency filtering of effects
- **Mix**: Dry/wet balance

## Quick Patterns
- **Basic Stutter**: 1/16 notes, 0 pitch shift
- **Glitch Effect**: Random buffer sizes, pitch +12
- **Rhythmic Gate**: 1/8 notes with filter automation
- **Vocal Chop**: 1/32 notes, formant preservation

## Pro Tips
- Use sidechain input for rhythmic syncing
- Automate buffer size for builds
- Combine with reverb for atmospheric effects
- Freeze stutter moments for repeated loops
```

---

## FILE: 02-Data\parameters\transporter-params.json

```json
{
  "$schema": "./schema.json",
  "plugin": {
    "name": "Transporter",
    "version": "1.x",
    "category": "Effect",
    "type": "Realtime Relooping Effect",
    "description": "Transient-based loop buffer effect",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Transporter.htm"
  },
  "parameters": {
    "loopControls": [
      {
        "id": "loopLength",
        "name": "Loop Length",
        "type": "selector",
        "range": "1/64 - 4 bars",
        "default": "1/4",
        "description": "Size of the looped audio buffer",
        "automatable": true,
        "bpmSync": true,
        "sweetSpot": "1/16 - 1/4 for glitch, 1/2 - 1 bar for musical loops"
      },
      {
        "id": "loopPosition",
        "name": "Loop Position",
        "type": "slider",
        "range": "0-100%",
        "unit": "%",
        "default": "0%",
        "description": "Starting point within the buffer for loop playback",
        "automatable": true,
        "performanceUse": "Sweep for dynamic repositioning effects"
      },
      {
        "id": "freeze",
        "name": "Freeze",
        "type": "toggle",
        "range": "On/Off",
        "default": "Off",
        "description": "Locks current loop content for sustained playback",
        "performanceUse": "Enable during builds, release on drops"
      },
      {
        "id": "snapToTransients",
        "name": "Snap to Transients",
        "type": "toggle",
        "range": "On/Off",
        "default": "On",
        "description": "Quantizes loop points to detected transient hits",
        "note": "Disable for smooth, non-rhythmic sources"
      },
      {
        "id": "transientSensitivity",
        "name": "Transient Sensitivity",
        "type": "slider",
        "range": "0-100%",
        "unit": "%",
        "default": "50%",
        "description": "Detection threshold for transient hits",
        "sweetSpot": "60-80% for percussive material, 30-50% for dense mixes"
      }
    ],
    "transport": [
      {
        "id": "speed",
        "name": "Speed",
        "type": "slider",
        "range": "0.5x - 2x",
        "default": "1x",
        "description": "Playback speed multiplier",
        "automatable": true,
        "performanceUse": "Automate to 0 for vinyl-stop effect"
      },
      {
        "id": "direction",
        "name": "Direction",
        "type": "toggle",
        "options": ["Forward", "Reverse"],
        "default": "Forward",
        "description": "Loop playback direction",
        "performanceUse": "Switch to reverse for build-up effects"
      }
    ],
    "stutter": [
      {
        "id": "stutterEnable",
        "name": "Stutter",
        "type": "selector",
        "range": "Off / 1-16 steps",
        "default": "Off",
        "description": "Repeats loop segment rhythmically",
        "sweetSpot": "4 or 8 steps for musical stutters"
      },
      {
        "id": "stutterRate",
        "name": "Stutter Rate",
        "type": "selector",
        "range": "1/64 - 1 bar",
        "default": "1/16",
        "description": "Length of each stutter repeat",
        "bpmSync": true,
        "sweetSpot": "1/16 or 1/32 for glitch effects"
      }
    ],
    "mix": [
      {
        "id": "dryWet",
        "name": "Dry/Wet Mix",
        "type": "slider",
        "range": "0-100%",
        "unit": "%",
        "default": "50%",
        "description": "Balance between original and effected signal",
        "automatable": true,
        "note": "Use 100% wet on send tracks, variable on inserts"
      },
      {
        "id": "outputGain",
        "name": "Output Gain",
        "type": "slider",
        "range": "-inf to +6dB",
        "unit": "dB",
        "default": "0dB",
        "description": "Overall output level compensation"
      },
      {
        "id": "crossfadeTime",
        "name": "Crossfade Time",
        "type": "slider",
        "range": "0-100ms",
        "unit": "ms",
        "default": "25ms",
        "description": "Smoothness of loop transitions",
        "sweetSpot": "25-40ms for clean glitch, lower for aggressive cuts"
      }
    ],
    "modulation": [
      {
        "id": "lfoRate",
        "name": "LFO Rate",
        "type": "slider",
        "range": "0.01 Hz - 20 Hz",
        "unit": "Hz",
        "description": "Modulation oscillation speed",
        "bpmSync": true,
        "sweetSpot": "Sync to 1/4 or 1/8 for rhythmic modulation"
      },
      {
        "id": "lfoDepth",
        "name": "LFO Depth",
        "type": "slider",
        "range": "0-100%",
        "unit": "%",
        "default": "0%",
        "description": "Intensity of LFO modulation",
        "sweetSpot": "30-50% for subtle movement, 70%+ for chaos"
      },
      {
        "id": "lfoTarget",
        "name": "LFO Target",
        "type": "selector",
        "options": ["Loop Position", "Loop Length", "Speed"],
        "default": "Loop Position",
        "description": "Parameter affected by LFO",
        "note": "Loop Position creates scanning effect"
      }
    ]
  },
  "performanceMappings": {
    "essential": [
      "loopLength",
      "loopPosition",
      "freeze"
    ],
    "advanced": [
      "stutterEnable",
      "speed",
      "direction",
      "transientSensitivity"
    ],
    "safety": [
      "dryWet",
      "outputGain"
    ]
  },
  "presetCategories": [
    "Glitch Stutter",
    "Beat Repeat",
    "Reverse Effects",
    "Vinyl Stop",
    "Build-Ups",
    "Transient Gate"
  ],
  "cpuUsage": "Low to Moderate",
  "latency": "Minimal (transient lookahead dependent)",
  "realtimeSafe": true
}

```

---

## FILE: 02-Data\presets\effect-presets.json

```json
{
  "glitchPresets": {
    "vocalStutter": {
      "bufferSize": "1/16",
      "pitchShift": 0,
      "filterFreq": 2000,
      "filterRes": 30,
      "mix": 75,
      "stereoWidth": 100,
      "automation": ["bufferSize", "filterFreq"]
    },
    "drumGlitch": {
      "bufferSize": "1/32",
      "pitchShift": -12,
      "filterFreq": 800,
      "filterRes": 70,
      "mix": 90,
      "stereoWidth": 50,
      "automation": ["pitchShift", "bufferSize"]
    },
    "atmosphericGlitch": {
      "bufferSize": "1/8",
      "pitchShift": 5,
      "filterFreq": 5000,
      "filterRes": 20,
      "mix": 60,
      "stereoWidth": 120,
      "automation": ["filterFreq", "mix"]
    }
  },
  "stutterPresets": {
    "trapStutter": {
      "bufferSize": "1/16",
      "pitchShift": 0,
      "filterFreq": 1500,
      "filterRes": 40,
      "mix": 80,
      "stereoWidth": 80,
      "syncToHost": true,
      "division": "1/16T"
    },
    "houseStutter": {
      "bufferSize": "1/8",
      "pitchShift": 0,
      "filterFreq": 3000,
      "filterRes": 25,
      "mix": 70,
      "stereoWidth": 100,
      "syncToHost": true,
      "division": "1/8"
    },
    "dubstepGlitch": {
      "bufferSize": "1/32",
      "pitchShift": -7,
      "filterFreq": 600,
      "filterRes": 80,
      "mix": 95,
      "stereoWidth": 60,
      "syncToHost": true,
      "division": "1/32"
    }
  },
  "performancePresets": {
    "liveSetOpener": {
      "bufferSize": "1/4",
      "pitchShift": 0,
      "filterFreq": 4000,
      "filterRes": 30,
      "mix": 50,
      "stereoWidth": 120,
      "triggerMode": "manual",
      "holdMode": true
    },
    "buildupTool": {
      "bufferSize": "1/16",
      "pitchShift": 2,
      "filterFreq": 2500,
      "filterRes": 50,
      "mix": 85,
      "stereoWidth": 100,
      "triggerMode": "auto",
      "intensityRamp": true
    },
    "dropEnhancer": {
      "bufferSize": "1/32",
      "pitchShift": -5,
      "filterFreq": 800,
      "filterRes": 90,
      "mix": 100,
      "stereoWidth": 80,
      "triggerMode": "beatSync",
      "ducking": true
    }
  },
  "experimentalPresets": {
    "granularFreeze": {
      "bufferSize": "200ms",
      "pitchShift": 0,
      "filterFreq": 3500,
      "filterRes": 60,
      "mix": 100,
      "freezeMode": true,
      "randomization": 30
    },
    "tapeStop": {
      "bufferSize": "2 bars",
      "pitchShift": -24,
      "filterFreq": 1000,
      "filterRes": 40,
      "mix": 95,
      "tapeEmulation": true,
      "wowFlutter": true
    },
    "bitCrushStutter": {
      "bufferSize": "1/64",
      "pitchShift": 0,
      "filterFreq": 500,
      "filterRes": 20,
      "mix": 90,
      "bitReduction": 8,
      "sampleRate": 8000
    }
  }
}
```

---

## FILE: 03-Workflows\by-context\genre-applications.md

```markdown
# Genre-Specific Transporter Applications

## Electronic Music Genres

### EDM
**Characteristics**: High energy, big builds, festival drops
**Transporter Settings**:
- **Build-ups**: Gradual buffer size reduction
- **Drops**: Heavy 1/32 stutter with pitch manipulation
- **Breakdowns**: Atmospheric glitch effects
- **Risers**: Filtered pitch automation

**Preset Template**:
`\`\`json
{
  "edmDrop": {
    "bufferSize": "1/32",
    "pitchShift": -5,
    "filterFreq": 800,
    "filterRes": 90,
    "mix": 100,
    "automation": ["filterFreq", "bufferSize"]
  }
}
`\`\`

### Techno
**Characteristics**: Repetitive, hypnotic, industrial
**Transporter Settings**:
- **Loops**: Long buffer repeats
- **Percussive**: Short stutters on percussion
- **Industrial**: Extreme distortion effects
- **Hypnotic**: Slow, evolving changes

**Workflow**:
1. Create rhythmic stutter patterns
2. Automate filter cutoff slowly
3. Add pitch variation on accents
4. Use sidechain for ducking

### House
**Characteristics**: Groovy, soulful, four-on-the-floor
**Transporter Settings**:
- **Vocal Chops**: 1/16 pitch-shifted stutters
- **Bass Glitches**: Subtle bass processing
- **Atmosphere**: Filtered long buffers
- **Groove**: Swing-quantized rhythms

### Dubstep
**Characteristics**: Aggressive, heavy bass, complex rhythms
**Transporter Settings**:
- **Wobble Bass**: Filter automation
- **Vocal Samples**: Heavy glitch processing
- **Snare Rolls**: Rapid stutter effects
- **Build-ups**: Intense rhythmic complexity

## Hip-Hop Applications

### Trap
**Characteristics**: 808s, hi-hats, vocal samples
**Transporter Settings**:
- **Hi-Hat Rolls**: 1/32T stutter on hi-hats
- **808 Glides**: Pitch-modulated bass
- **Vocal Ad-libs**: Repetitive vocal chops
- **Snare Rolls**: Build-up stutter effects

**Production Techniques**:
1. Apply to hi-hat patterns
2. Create vocal loops from samples
3. Process 808s for character
4. Build tension before drops

### Boom Bap
**Characteristics**: Sample-based, gritty, soulful
**Transporter Settings**:
- **Sample Chops**: Classic MPC-style stutters
- **Drum Fills**: Rhythmic complexity
- **Vocal Samples**: Vintage feel processing
- **Atmosphere**: Subtle textural effects

### Lo-Fi Hip-Hop
**Characteristics**: Relaxed, dusty, atmospheric
**Transporter Settings**:
- **Tape Effects**: Buffer-based tape stops
- **Vinyl Effects**: Emulated vinyl artifacts
- **Ambient Glitches**: Subtle texture addition
- **Chopped Samples**: Lo-fi vocal processing

## Rock and Alternative

### Electronic Rock
**Characteristics**: Rock instruments with electronic processing
**Transporter Settings**:
- **Guitar Stutters**: Rhythmic guitar effects
- **Vocal Effects**: Processed vocal textures
- **Drum Loops**: Processed acoustic drums
- **Build-ups**: Song tension creation

### Industrial
**Characteristics**: Harsh, mechanical, aggressive
**Transporter Settings**:
- **Harsh Glitches**: Extreme digital artifacts
- **Mechanical Rhythms**: Repetitive stutter patterns
- **Distorted Processing**: Heavy saturation
- **Noise Integration**: Industrial texture addition

## Pop and Commercial

### Pop Production
**Characteristics**: Polished, radio-friendly, vocal-focused
**Transporter Settings**:
- **Vocal Effects**: Subtle stutter enhancements
- **Build Effects**: Song tension building
- **Rhythmic Interest**: Background texture
- **Transition Effects**: Smooth song changes

### Dance Pop
**Characteristics**: Upbeat, energetic, mainstream
**Transporter Settings**:
- **Vocal Chops**: Catchy repetitive vocals
- **Synth Stutters**: Processed synth elements
- **Drop Effects**: Impact creation
- **Rhythm Enhancement**: Groove addition

## Film and Media

### Action Scenes
**Characteristics**: Intense, driving, dramatic
**Transporter Settings**:
- **Tension Building**: Gradual complexity increase
- **Impact Effects**: Sudden dramatic moments
- **Chase Scenes**: Rhythmic intensity
- **Fight Scenes**: Aggressive processing

### Sci-Fi/Fantasy
**Characteristics**: Otherworldly, futuristic, magical
**Transporter Settings**:
- **Alien Effects**: Unusual sonic textures
- **Futuristic Sounds**: Advanced processing
- **Magical Elements**: Ethereal glitch effects
- **Atmosphere**: World-building texture

### Horror/Thriller
**Characteristics**: Tense, unsettling, frightening
**Transporter Settings**:
- **Psychological Effects**: Disorienting processing
- **Jump Scares**: Sudden dramatic changes
- **Tension**: Gradual anxiety building
- **Unnatural Sounds**: Distorted reality effects
```

---

## FILE: 03-Workflows\by-context\integration-guide.md

```markdown
# Transporter Integration Guide

## DAW Integration

### FL Studio Native Integration
**Best Practices**:
- Use Patcher for complex routing
- Create template projects with Transporter
- Set up custom control surfaces
- Use playlist automation for parameter changes

**Signal Flow Examples**:
`\`\`
Audio Track → Transporter → EQ → Compressor → Reverb → Limiter
`\`\`

### Ableton Live Integration
**Setup Options**:
- **VST/AU Plugin**: Standard integration
- **Max for Live**: Custom controller devices
- **MIDI Mapping**: Dedicated hardware control
- **Audio Effects Rack**: Preset organization

**Live Performance Setup**:
1. Audio Input → Transporter → Output
2. Sidechain Input → Rhythm Sync
3. MIDI Controller → Parameter Control
4. Session Clips → Scene Changes

### Logic Pro Integration
**Workflow Integration**:
- **Smart Controls**: Custom control surfaces
- **MIDI Learn**: Hardware mapping
- **Automation**: Logic's automation system
- **Plugin Manager**: Organization and favorites

## Plugin Chain Integration

### Vocal Processing Chain
**Order**: Transporter → EQ → De-esser → Compressor → Reverb
1. **Transporter**: Creative stutter effects
2. **EQ**: Shape frequency content
3. **De-esser**: Control sibilance
4. **Compression**: Dynamic control
5. **Reverb**: Spatial positioning

### Drum Processing Chain
**Order**: Transporter → Transient Designer → EQ → Compression → Saturation
1. **Transporter**: Rhythmic stutter/gate effects
2. **Transient Designer**: Shape attack/sustain
3. **EQ**: Tone shaping
4. **Compression**: Glue and control
5. **Saturation**: Add warmth/character

### Synth Processing Chain
**Order**: Synth → Transporter → Filter → Delay → Reverb → Limiter
1. **Synthesizer**: Raw sound generation
2. **Transporter**: Rhythmic processing
3. **Filter**: Additional filtering
4. **Delay**: Rhythmic echoes
5. **Reverb**: Space and atmosphere

## Hardware Integration

### MIDI Controller Setup
**Recommended Controllers**:
- **Novation Launchpad**: Grid-style triggering
- **Native Instruments Maschine**: Pad performance
- **AKAI MPC**: Classic pad feel
- **Roli Seaboard**: Expressive control

**Control Mapping**:
`\`\`json
{
  "midiMapping": {
    "CC1": "bufferSize",
    "CC2": "pitchShift",
    "CC3": "filterFreq",
    "CC4": "mix",
    "CC5": "stereoWidth",
    "NoteOn": "trigger",
    "NoteOff": "stop"
  }
}
`\`\`

### Audio Interface Integration
**Requirements**:
- Low-latency drivers (ASIO/Core Audio)
- Multiple inputs for sidechaining
- High-quality converters for processing
- Monitor mixing for wet/dry monitoring

### Hardware Processors
**External Processing Options**:
- **Analog Filters**: Additional character
- **Hardware Compressors**: Add analog warmth
- **Tape Machines**: Vintage texture
- **Guitar Pedals**: Creative distortion

## Software Integration

### Max for Live Integration
**Custom Devices**:
- **Transporter Controller**: Dedicated interface
- **Randomizer**: Generative effect creation
- **Recorder**: Capture stutter moments
- **Sequencer**: Pattern-based triggering

### Script Integration
**Python/Automation**:
- **Parameter Automation**: Scripted parameter changes
- **Preset Generation**: Algorithmic preset creation
- **Performance Recording**: MIDI data capture
- **Batch Processing**: Process multiple files

### Controller Scripts
**FL Studio Scripts**:
- **Transport Scripts**: Dedicated transport controls
- **Performance Scripts**: Live performance assistance
- **Recording Scripts**: Capture performances
- **Mixing Scripts**: Automated mixing assistance

## Third-Party Integration

### Sidechain Sources
**Compatible Sources**:
- **Kick Drums**: Rhythmic ducking
- **Bass Lines**: Frequency separation
- **Vocal Tracks**: Vocal ducking
- **Full Mix**: Master ducking

### ReWire Integration
**Multi-DAW Workflows**:
- **FL Studio + Ableton**: Live performance + studio production
- **Logic + FL**: Composition + creative processing
- **Pro Tools + FL**: Post-production + effects

### Avid Integration
**Pro Tools Workflow**:
- **AAX Version**: Native Pro Tools support
- **HDX Processing**: DSP acceleration (if available)
- **Automation**: Pro Tools automation system
- **Surface Control**: Avid control surfaces

## Workflow Optimization

### Template Creation
**Project Templates**:
- **Electronic Music**: Pre-routed signal chains
- **Hip-Hop**: Vocal and drum processing
- **Film Scoring**: Ambient and effect templates
- **Live Performance**: Performance-ready setups

### Preset Management
**Organization Strategies**:
- **Genre Folders**: Organized by musical style
- **Use Case Folders**: Live vs. Studio presets
- **Star Ratings**: Favorite preset marking
- **Custom Tags**: User-defined categories

### Automation Strategies
**Advanced Automation**:
- **LFO Automation**: Parameter modulation
- **Envelope Following**: Dynamic response
- **Step Sequencing**: Rhythmic automation
- **Randomization**: Controlled variation
```

---

## FILE: 03-Workflows\by-context\live-performance.md

```markdown
# Transporter Live Performance Guide

## Setup Configuration

### Stage Setup Requirements
**Hardware Essentials**:
- Laptop with sufficient RAM/CPU
- High-quality audio interface
- MIDI controller for real-time control
- Backup audio interface and cables
- Power conditioning and surge protection

**Software Configuration**:
- Optimize buffer settings (128-256 samples)
- Disable unnecessary background processes
- Set up performance templates
- Configure MIDI mappings in advance

### Controller Mapping

### Essential Parameters to Map
**Primary Controls**:
- **Buffer Size**: Main stutter rhythm
- **Pitch Shift**: Tonal manipulation
- **Filter Cutoff**: Frequency filtering
- **Mix**: Wet/dry balance
- **Trigger**: Effect activation

**Secondary Controls**:
- **Stereo Width**: Spatial control
- **Filter Resonance**: Filter character
- **Feedback**: Intensity control
- **Freeze**: Hold current buffer

### Recommended Controllers
**Professional Setup**:
- **Main Controller**: Novation Launchkey Pro
- **Secondary Controller**: Native Instruments Maschine
- **Expression Pedal**: Moog EP-3
- **Footswitches**: Boss FS series

**Budget Setup**:
- **Main Controller**: AKAI MPK Mini
- **Expression Pedal**: M-Audio EX-P
- **Footswitch**: Sustain pedal repurposed

## Performance Techniques

### Real-Time Buffer Manipulation
**Live Techniques**:
- **Gradual Size Changes**: Build-ups and breakdowns
- **Rapid Switching**: Abrupt effect changes
- **Rhythmic Tapping**: Manual rhythm creation
- **Randomization**: Controlled chaos

### Dynamic Control
**Performance Strategies**:
- **Velocity Response**: Play harder for more intensity
- **Aftertouch**: Additional parameter control
- **Mod Wheel**: Continuous parameter changes
- **Pedal Control**: Hands-free manipulation

### Set Flow Management
**Structural Elements**:
- **Intro**: Minimal effects, subtle processing
- **Verse**: Light stutter, vocal enhancement
- **Build-up**: Gradual intensity increase
- **Drop**: Maximum effect intensity
- **Breakdown**: Filtered, atmospheric processing
- **Outro**: Fade out, return to minimal

## Genre-Specific Performance

### Electronic Music Sets
**EDM Performance**:
- **Build Control**: Gradual buffer size reduction
- **Drop Impact**: Heavy stutter with pitch manipulation
- **Transition Tools**: Effect-based song changes
- **Crowd Interaction**: Responsive processing

**Techno Sets**:
- **Loop Creation**: Long buffer manipulation
- **Hypnotic Patterns**: Repetitive processing
- **Industrial Elements**: Harsh distortion
- **Evolution**: Slow parameter changes

### Hip-Hop Performance
**Trap Sets**:
- **Hi-Hat Control**: Rhythmic stutter on hi-hats
- **808 Processing**: Bass manipulation
- **Vocal Effects**: Real-time vocal processing
- **Ad-Lib Creation**: Spontaneous effects

**Boom Bap Sets**:
- **Sample Manipulation**: Classic sample chopping
- **Drum Fills**: Live drum processing
- **Atmosphere**: Background texture creation
- **Scratch Emulation**: Turntable-style effects

## Advanced Performance Concepts

### Multi-Instance Performance
**Setup**: Multiple Transporter instances
- **Instance 1**: Main rhythm processing
- **Instance 2**: Vocal effects
- **Instance 3**: Ambient texture
- **Instance 4**: Drum processing

**Control Strategy**:
- **Layer Switching**: Dedicated controls for each layer
- **Crossfading**: Smooth transitions between layers
- **Parallel Processing**: Multiple effects simultaneously

### Collaborative Performance
**Multi-Musician Setups**:
- **Shared Control**: Multiple controllers
- **Role Assignment**: Each musician controls specific parameters
- **Visual Feedback**: Screen sharing for synchronization
- **Communication**: Clear hand signals and cues

### Improvisation Techniques
**Spontaneous Creation**:
- **Randomization**: Controlled random parameter changes
- **Reaction-Based**: Respond to other musicians
- **Audience Response**: Adjust based on crowd energy
- **Mistake Recovery**: Turn errors into creative moments

## Technical Considerations

### Latency Management
**Optimization Strategies**:
- **Buffer Size**: Balance between latency and CPU
- **Driver Selection**: ASIO/Core Audio preferred
- **CPU Management**: Monitor usage during performance
- **Backup Systems**: Plan for technical failures

### Audio Routing
**Signal Flow**:
`\`\`
Microphone → Audio Interface → Transporter → Mixer → PA System
               ↑
          MIDI Controller
`\`\`

**Monitor Setup**:
- **Stage Monitor**: Wet signal for performer
- **Front of House**: Balanced wet/dry mix
- **Recording**: Clean signal capture
- **Streaming**: Optimized mix for online audience

### Backup and Recovery
**Contingency Planning**:
- **Plugin Crashes**: Have alternative effects ready
- **Power Failure**: UPS battery backup
- **Controller Issues**: Mouse/keyboard backup control
- **Audio Interface**: Backup interface available

## Performance Templates

### Pre-Show Checklist
**Technical Setup**:
- [ ] Audio interface connected and recognized
- [ ] MIDI controllers mapped and tested
- [ ] Templates loaded and accessible
- [ ] Monitor levels set
- [ ] Recording setup tested

**Creative Setup**:
- [ ] Song structures mapped to scenes
- [ ] Transition effects prepared
- [ ] Backup presets loaded
- [ ] Emergency procedures reviewed

### On-Stage Troubleshooting
**Common Issues and Solutions**:
- **No Sound**: Check audio interface, cables, mixer
- **MIDI Not Working**: Verify connections, restart controllers
- **Plugin Crash**: Reload plugin, reset to safe preset
- **High CPU**: Increase buffer, disable unused plugins

**Performance Recovery**:
- **Keep Playing**: Continue with basic setup
- **Simplify**: Reduce complexity until stable
- **Communicate**: Let audience know briefly if needed
- **Recover**: Gradually restore full setup
```

---

## FILE: 03-Workflows\by-context\troubleshooting-workflows.md

```markdown
# Transporter Troubleshooting Guide

## Sound Issues

### No Effect Output
**Causes**:
- Mix knob at 0%
- Plugin bypassed
- No audio input
- Wrong routing

**Solutions**:
1. Increase mix to 50-100%
2. Disable plugin bypass
3. Check input routing
4. Verify audio signal chain

### Audio Glitches/Dropouts
**Causes**:
- Buffer size too small
- CPU overload
- Audio driver issues
- Multiple instances

**Solutions**:
1. Increase buffer size
2. Close other plugins
3. Update audio drivers
4. Reduce instance count

### Clicks and Pops
**Causes**:
- Zero-crossing issues
- Rapid parameter changes
- Small buffer sizes
- Poor source audio

**Solutions**:
1. Enable fade/smoothing options
2. Automate slowly
3. Use larger buffers
4. Clean input audio

## Timing Issues

### Stutter Not in Sync
**Causes**:
- Host sync disabled
- Wrong tempo detection
- MIDI clock issues
- Latency compensation

**Solutions**:
1. Enable host sync
2. Check project tempo
3. Verify MIDI clock
4. Adjust PDC settings

### Rhythm Feeling Off
**Causes**:
- Wrong division selected
- Humanization disabled
- Quantization issues
- Groove missing

**Solutions**:
1. Try different divisions
2. Add humanization
3. Check quantize settings
4. Apply groove template

## Performance Issues

### High CPU Usage
**Causes**:
- Complex algorithms
- High oversampling
- Multiple instances
- Small buffer sizes

**Solutions**:
1. Reduce oversampling
2. Freeze tracks
3. Use larger buffers
4. Limit instances

### Plugin Crashes
**Causes**:
- Version incompatibility
- Memory issues
- Corrupted presets
- Driver conflicts

**Solutions**:
1. Update plugin
2. Increase RAM
3. Reset to defaults
4. Update drivers

## Creative Problems

### Effects Sound Boring
**Solutions**:
- Automate parameters
- Try different presets
- Layer with other effects
- Use modulators

### Can't Achieve Desired Sound
**Techniques**:
- Combine multiple techniques
- Use external processing
- Experiment with extreme settings
- Study reference tracks

## Installation Issues

### Plugin Not Showing
**Causes**:
- Wrong installation path
- Plugin not scanned
- Version mismatch
- Permissions issue

**Solutions**:
1. Reinstall to correct path
2. Rescan plugins
3. Check version compatibility
4. Run as administrator

### Authorization Problems
**Solutions**:
- Check license key
- Re-enter registration
- Contact support
- Try demo version first
```

---

## FILE: 03-Workflows\by-goal\advanced-techniques.md

```markdown
# Advanced Transporter Techniques

## Complex Buffer Manipulation

### Multi-Layer Buffering
**Technique**: Create layered stutter effects
- **Layer 1**: Main rhythm (1/16 notes)
- **Layer 2**: Counter-rhythm (1/8T notes)
- **Layer 3**: Atmospheric layer (1/4 notes)
- **Layer 4**: Glitch accents (random)

**Implementation**:
1. Use multiple instances
2. Different buffer sizes per layer
3. Separate EQ/filter per layer
4. Automated mix changes

### Dynamic Buffer Morphing
**Concept**: Smoothly transition between buffer sizes
- **Build Morph**: 1/4 → 1/8 → 1/16 → 1/32
- **Release Morph**: 1/32 → 1/16 → 1/8 → 1/4
- **Random Morph**: Intelligent randomization
- **Rhythm Morph**: Follow rhythmic patterns

### Buffer Size Modulation
**Advanced Techniques**:
- **LFO Control**: Sine, triangle, square modulation
- **Envelope Following**: React to input dynamics
- **MIDI Control**: Real-time manual control
- **Audio Rate Modulation**: Extreme modulation effects

## Pitch Manipulation

### Formant Preservation
**Technique**: Maintain vocal character while pitching
- **Formant Shift**: Separate from pitch shift
- **Vocal Mode**: Optimized algorithms
- **Gender Bend**: Extreme formant shifts
- **Character Preservation**: Natural sound quality

### Multi-Octave Techniques
**Strategies**:
- **Octave Doubling**: Layer multiple octaves
- **Harmonic Stacking**: Add harmonics
- **Detuned Layers**: Create width
- **Pitch Automation**: Dynamic movement

### Micro-Pitch Variations
**Subtle Effects**:
- **Vibrato**: Add vibrato to stuttered audio
- **Drift**: Slow random pitch changes
- **Flutter**: Fast pitch variations
- **Humanize**: Slight timing and pitch variations

## Rhythmic Complexity

### Poly-Rhythmic Stutter
**Concept**: Overlay different rhythmic patterns
- **3 over 4**: Triplet feel over straight rhythm
- **5 over 4**: Complex syncopation
- **7 over 8**: Advanced polyrhythms
- **Randomized**: Controlled chaos

### Groove Application
**Techniques**:
- **Swing Application**: Add groove to stutter
- **Humanization**: Natural feel
- **Templates**: Apply preset grooves
- **Custom Grooves**: User-created patterns

### Metric Modulation
**Advanced Rhythm**:
- **Tempo Changes**: Internal tempo shifts
- **Division Changes**: Rhythmic subdivision shifts
- **Cross-Rhythms**: Complex layering
- **Freeform**: Metric modulation

## Creative Signal Flow

### Parallel Processing
**Setup**: Split signal for different processing
1. **Dry Path**: Original signal
2. **Stutter Path**: Transporter effect
3. **Reverb Path**: Space and dimension
4. **Delay Path**: Rhythmic echoes

### Feedback Loops
**Technique**: Create feedback systems
- **Self-Oscillation**: Extreme settings
- **Controlled Feedback**: Musical feedback
- **Modulated Feedback**: Changing character
- **Feedback Clipping**: Saturation effects

### Sidechain Integration
**Advanced Sidechain**:
- **Multi-Band**: Frequency-selective ducking
- **Rhythm Sync**: Follow drum patterns
- **Envelope Shaping**: Custom response curves
- **Gate Effects**: Rhythmic cutting

## Performance Techniques

### Live Performance Setup
**Controller Mapping**:
- **Buffer Size**: Fader or knob
- **Pitch Shift**: Rotary encoder
- **Filter**: Expression pedal
- **Mix**: Crossfader
- **Trigger**: Pad or button

### Set Management
**Workflow**:
- **Scene Organization**: Song structure
- **Preset Switching**: Smooth transitions
- **Automation Recording**: Capture performances
- **Safety Nets**: Backup systems

### Improvisation Techniques
**Live Approaches**:
- **Randomization**: Controlled chaos
- **Reaction-Based**: Respond to music
- **Audience Interaction**: Real-time adjustments
- **Collaboration**: Work with other musicians
```

---

## FILE: 03-Workflows\by-goal\live-glitch-performance.md

```markdown
# Live Glitch Performance with Transporter

**Difficulty:** Intermediate
**Time Required:** 20-30 minutes
**Goal:** Set up Transporter for expressive live performance control
**Genre:** Glitch, IDM, Live Electronic

---

## Prerequisites

- Transporter loaded on mixer track or send
- MIDI controller with knobs/faders (optional but recommended)
- Understanding of FL Studio automation and MIDI mapping
- Audio source playing (drum loop, vocals, or full mix)

---

## Workflow Steps

### Step 1: Initial Routing Setup

1. **Create Send Track:**
   - Add Transporter to mixer Send track (e.g., Send 1)
   - Send ~30% of your main drum bus to this track
   - *Why:* Parallel processing keeps original signal intact

2. **Set Initial Mix:**
   - Transporter **Dry/Wet:** 100% wet
   - Send **Volume:** -6dB
   - *Why:* Control effect intensity via send level, not dry/wet

---

### Step 2: Core Performance Parameters

3. **Map Loop Length to Controller:**
   - Right-click **Loop Length** > Link to Controller
   - Assign to knob/fader
   - *Why:* Real-time loop size changes are essential for glitch
   - *Range:* Focus on 1/64 to 1/4 range

4. **Map Loop Position to Second Controller:**
   - Assign to another knob/fader or XY pad
   - *Why:* Dynamic loop repositioning creates variation
   - *Tip:* Use mod wheel or ribbon controller for smooth sweeps

5. **Map Freeze to Button/Pad:**
   - Assign to MIDI note or button
   - *Why:* Instant loop capture for builds and fills
   - *Tip:* Use toggle mode for sustained freezes

---

### Step 3: Transient Detection Configuration

6. **Set Transient Sensitivity:** ~60%
   - *Why:* Middle ground for most drum material
   - *Adjust:* Higher for sparse drums, lower for dense mixes

7. **Enable Snap to Transients:**
   - Turn **ON**
   - *Why:* Keeps loops musical and in-time
   - *Note:* Can disable for smooth, non-rhythmic sources

---

### Step 4: Stutter Effect Setup

8. **Stutter Rate:** Set to **1/16**
   - *Why:* Classic glitch stutter rate
   - *Alternatives:* 1/32 for faster, 1/8 for slower

9. **Stutter Steps:** Start at **4**
   - *Why:* Creates rhythmic 4-hit stutter
   - *Map to Controller:* For variable stutter lengths

10. **Map Stutter On/Off:**
    - Assign to button or pad
    - *Why:* Engage stutter only when needed
    - *Performance Tip:* Hit on fill moments

---

### Step 5: Advanced Performance Controls

11. **Speed Control:**
    - Keep at **100%** normally
    - *Performance Move:* Drop to 50% for half-time breakdowns
    - *Map to Fader:* For vinyl-stop style effects

12. **Direction Toggle:**
    - Set up button for Forward/Reverse switch
    - *Why:* Instant reverse effects for builds
    - *Tip:* Combine with freeze for reversed loop layers

13. **Crossfade Time:** Set to **25-40ms**
    - *Why:* Smooth enough to avoid clicks, tight enough for glitch
    - *Adjust:* Lower for aggressive cuts, higher for smooth transitions

---

### Step 6: LFO Modulation (Optional Advanced)

14. **LFO Rate:** Sync to **1/4** or **1/8**
    - *Why:* Rhythmic automatic loop position movement
    - *When:* Use during sustained sections for auto-variation

15. **LFO Depth:** Start at **30%**
    - *Why:* Subtle automatic wobble
    - *Increase:* Up to 70% for chaotic movement

16. **LFO Target:** Set to **Loop Position**
    - *Why:* Creates auto-scanning through loop buffer
    - *Alternatives:* Try on Loop Length for rhythmic size changes

---

### Step 7: Performance Technique Practice

17. **Practice These Moves:**

**Move 1: Build-Up**
- Start with loop length at 1/4
- Gradually reduce to 1/64 over 4 bars
- Increase send level simultaneously
- Freeze on last beat before drop
- Release all on drop

**Move 2: Glitch Fill**
- Enable stutter during last bar of phrase
- Sweep loop position while stutter is active
- Disable stutter on downbeat

**Move 3: Reverse Build**
- Freeze current loop
- Switch to reverse direction
- Reduce speed from 100% to 50%
- Switch back to forward on drop

**Move 4: Position Scan**
- Loop length at 1/8
- Rapidly sweep loop position back and forth
- Creates "scrubbing" effect

---

### Step 8: Safety Nets & Backup

18. **Create Snapshots:**
    - Save multiple Transporter preset states
    - Name them: "Reset", "Glitch", "Stutter", "Reverse"
    - *Why:* Quick recall if you get lost during performance

19. **Set Up Kill Switch:**
    - Map send level to fader
    - Pull to 0 to instantly remove effect
    - *Why:* Emergency reset for live situations

---

## Performance Workflow Example (16-Bar Section)

`\`\`
Bars 1-4:   Normal playback (send at 10%)
Bars 5-6:   Gradually increase send to 40%
Bar 7:      Sweep loop position, length at 1/8
Bar 8:      Freeze loop, enable stutter (4 steps at 1/16)
Bar 9-12:   Hold freeze, stutter builds tension
Bar 13:     Disable stutter, reverse direction
Bar 14:     Reduce speed to 50%
Bar 15:     Release freeze, forward direction, speed back to 100%
Bar 16:     Pull send back to 10%, reset loop length to 1/4
`\`\`

---

## MIDI Controller Mapping Template

### Essential Mappings
| Control | Assignment | Range |
|---------|------------|-------|
| Knob 1 | Loop Length | 1/64 - 1/2 |
| Knob 2 | Loop Position | 0-100% |
| Knob 3 | Transient Sensitivity | 40-80% |
| Knob 4 | Crossfade Time | 10-100ms |
| Fader 1 | Send Level | 0-100% |
| Fader 2 | Speed | 0.5x - 2x |
| Pad 1 | Freeze Toggle | On/Off |
| Pad 2 | Stutter Enable | On/Off |
| Pad 3 | Direction Toggle | Fwd/Rev |
| Pad 4 | Snap to Transients | On/Off |

---

## Advanced Variations

### Variation 1: Dual Transporter Setup
- Load two Transporters on separate send tracks
- One for short glitches (1/64-1/16)
- One for long loops (1/4-1 bar)
- Crossfade between them for dynamic range

### Variation 2: Source Switching
- Route multiple sources to Transporter send
- Switch which tracks are sent during performance
- Glitch drums, then switch to vocals, then synths

### Variation 3: Post-Effect Chain
- Add distortion after Transporter (on send track)
- Add reverb for glitch ambience
- Use filter for frequency-based glitch variations

---

## Genre-Specific Techniques

### Glitch Hop
- Focus on 1/16 and 1/32 loop lengths
- Heavy stutter use on snare hits
- Combine with pitch-shifted drums

### IDM
- Variable loop lengths (1/64 to 1 bar)
- Extensive loop position automation
- Combine freeze with reverse for abstract textures

### Techno (Live Sets)
- Longer loops (1/2 to 1 bar)
- Use freeze sparingly for build-ups
- Stutter on hi-hats for energy boosts

### Bass Music
- Short loops on bass hits (1/32)
- Reverse effects before drops
- Combine with distortion for aggression

---

## Troubleshooting Live Performance

### Issue: Clicks and Pops
- **Solution:** Increase crossfade time to 40-60ms
- Check that snap to transients is enabled

### Issue: Effect Too Harsh
- **Solution:** Reduce send level, don't use 100% wet
- Add slight reverb after Transporter to smooth

### Issue: Lost in the Effect
- **Solution:** Use your kill switch (send fader)
- Load "Reset" preset snapshot

### Issue: Loops Don't Sync
- **Solution:** Verify project BPM is set correctly
- Check that loop lengths are using musical divisions

---

## Recording Your Performance

1. **Record to Playlist:**
   - Arm mixer track with Transporter
   - Record all parameter movements
   - Edit/refine automation afterwards

2. **Export Individual Glitch Sections:**
   - Solo Transporter send track
   - Export loops as audio samples
   - Build custom glitch library

3. **Freeze Favorite Moments:**
   - When you hit a great glitch texture, freeze it
   - Record that frozen loop separately
   - Use as one-shot sample later

---

## Next Steps

After mastering live Transporter performance:

1. **Combine with Gross Beat** for enhanced time manipulation
2. **Layer multiple Transporters** on different frequency ranges
3. **Create macro controls** in Patcher for complex multi-parameter moves
4. **Build custom glitch presets** based on your performance style

---

**Related Workflows:**
- [Glitch Drum Processing](./glitch-drum-processing.md)
- [Vocal Stutter Effects](./vocal-stutter-effects.md)
- [Build-Up and Fill Creation](./buildup-fill-creation.md)

---

**Last Updated:** February 3, 2026
**Status:** Complete workflow

```

---

## FILE: 03-Workflows\by-goal\vocal-chop-glitch-hiphop.md

```markdown
# Vocal Chops & Glitch Effects for Hip-Hop

**Genre:** Hip-Hop, Trap, Experimental, Glitch-Hop
**Vibe:** Futuristic, rhythmic, unpredictable
**Difficulty:** Intermediate
**Time:** 15-20 minutes

---

## What Transporter Does for Hip-Hop

Transporter creates **dynamic, evolving vocal chops** by:
- Detecting transients in your vocal
- Triggering **random loop variations**
- Creating **stutters, glitches, and rhythmic patterns**
- Making static vocals into **moving, living textures**

---

## Quick Setup: Vocal Chop Effect

### Step 1: Route Your Vocals

**Input Configuration:**
1. Load **Transporter** as an insert effect on vocal track
2. OR send vocals to Transporter on an FX channel
3. **Recommendation:** Use FX send for parallel processing

**Source Material:**
- Recorded rap vocals
- Sung hooks/melodies
- Ad-libs and one-shots
- Vocal samples from other tracks

### Step 2: Essential Settings

`\`\`
Min Length A: 100-300ms (rhythmic chops)
Sensitivity: 50-70% (responsive to louder syllables)
A/B Ratio: 30-50% (varied loop lengths)
Spread: 30-50% (stereo movement)
Bouncing Rate: 0% (start with no acceleration)
`\`\`

**What This Does:**
- Creates **100-300ms loops** triggered by vocal transients
- **Sensitivity** determines which syllables trigger new loops
- **A/B Ratio** adds variety (different loop lengths)
- **Spread** creates stereo width

---

## Genre-Specific Techniques

### 1. Trap Vocal Stutter (Future, Young Thug)

**Settings:**
`\`\`
Min Length A: 150ms (short, snappy)
Sensitivity: 65%
A/B Ratio: 40%
Spread: 40%
Bias: Deterministic
Reverse Probability: 15% (occasional reverse)
`\`\`

**How to Use:**
1. Apply to **ad-libs or hook vocals**
2. **Automate bypass:** Stutter ON during transitions
3. **Layer** with dry vocal (50/50 blend)

**Result:** Futuristic, robotic vocal rhythms

**Reference:**
- Future - "Mask Off"
- Young Thug - "Best Friend"
- Travis Scott - "SICKO MODE" (transitions)

---

### 2. Glitchy Melodic Hook (Porter Robinson Influence in Hip-Hop)

**Settings:**
`\`\`
Min Length A: 200ms
Sensitivity: 55%
A/B Ratio: 60% (more variation)
Spread: 60% (wide stereo)
Bouncing Rate: 30% (accelerating loops)
Reverse Probability: 25%
Octave: +1 (pitch up)
`\`\`

**How to Use:**
1. Apply to **sung/melodic vocals**
2. Let it **evolve over 4-8 bars**
3. **Automate sensitivity** for builds

**Result:** Evolving, unpredictable vocal texture

**Reference:**
- Flume x Travis Scott - "Say It"
- Skrillex & Rick Ross - "Purple Lamborghini"

---

### 3. Chopped & Screwed Remix Style

**Settings:**
`\`\`
Min Length A: 500ms (longer chunks)
Sensitivity: 40% (fewer triggers)
A/B Ratio: 20%
Spread: 0% (mono, focused)
Reverse Probability: 0%
Octave: -1 (pitch down)
`\`\`

**Post-Processing:**
- **Slow down playback** to 60-75% speed
- **Pitch down** -2 to -4 semitones
- **Heavy reverb** (Houston style)

**Result:** Slowed, pitched-down, hypnotic

**Reference:**
- DJ Screw - Any chopped & screwed mix
- Travis Scott - "Drugs You Should Try It"

---

### 4. Psychedelic Vocal Texture

**Settings:**
`\`\`
Min Length A: 300ms
Sensitivity: 50%
A/B Ratio: 70% (maximum variation)
Spread: 80% (very wide)
Bouncing Rate: 50%
Bias: Probabilistic (random)
Reverse Probability: 40% (lots of reverse)
Octave: Random shifts
`\`\`

**Post-Processing:**
- **Vintage Phaser** (slow, deep)
- **Long reverb** (4+ seconds)
- **Delay** (1/8 dotted)

**Result:** Trippy, unpredictable, atmospheric

**Reference:**
- Kid Cudi - "Day 'n' Nite" (similar vibe)
- ASAP Rocky - "L$D"

---

## Step-by-Step: Creating a Vocal Chop Hook

### Step 1: Prepare Your Vocal

**Record a clean vocal hook:**
- 4-8 bars of sung/rapped melody
- Clear pronunciation
- No reverb/effects (add after Transporter)

### Step 2: Set Up Parallel Processing

**Signal Chain:**
`\`\`
Vocal Track → Mixer Insert 1
  ├─ 100% to Master (dry vocal)
  └─ Send to Insert 10 (Transporter FX)
       └─ Transporter → Effects → Master
`\`\`

**Why Parallel:**
- Keeps **dry vocal clarity**
- Adds **Transporter texture** on top
- More control over wet/dry balance

### Step 3: Configure Transporter

**For Rhythmic Hook:**
`\`\`
Min Length A: 200ms
Sensitivity: 60%
A/B Ratio: 40%
Spread: 50%
`\`\`

**Start Playing:**
- Let Transporter **build a buffer** (20 seconds of audio)
- Adjust **Sensitivity** until it triggers on the right syllables

### Step 4: Shape the Sound

**Manual Triggers:**
- **Click waveform** to manually trigger new loops
- Use **Flush** button to reset and start fresh
- Experiment with **different sections** of the vocal

### Step 5: Add Effects to Transporter Output

**Effects Chain:**
1. **Fruity Parametric EQ 2**
   - High-pass at 200Hz
   - Boost +3dB at 3kHz (clarity)

2. **Fruity Delay 3**
   - 1/16 or 1/8 note
   - 2-3 repeats
   - 20-30% mix

3. **Fruity Reverb 2**
   - Medium size
   - 15-25% mix

4. **Fruity Limiter**
   - Soft saturation
   - Glue it together

### Step 6: Automation for Variation

**Automate These Parameters:**
- **Sensitivity:** Higher during busy sections
- **Bouncing Rate:** Increase for builds
- **Reverse Probability:** Add during breakdowns
- **Bypass:** Turn ON/OFF for dramatic effect

---

## Advanced Techniques

### Technique 1: Sidechain to Kick

**Setup:**
- Sidechain Transporter output to kick drum
- **Fast attack** (5ms), **medium release** (100ms)
- Creates **pumping glitch effect**

---

### Technique 2: Multi-Layer Glitch

**Stack 3 Instances:**
1. **Transporter 1:** Short loops (100ms) - high layer
2. **Transporter 2:** Medium loops (250ms) - mid layer
3. **Transporter 3:** Long loops (500ms) - low layer

**Result:** Complex, evolving texture

---

### Technique 3: Freeze & Resample

**Process:**
1. Let Transporter run for 30-60 seconds
2. **Record output** to audio track
3. **Chop up** the recording
4. Arrange as a **hook or breakdown**

**Why:** Capture happy accidents, create repeatable moments

---

### Technique 4: Vocal Instrument

**Use Transporter to turn vocals into melodic elements:**
1. Record **"ooh" or "ahh"** sustained notes
2. Apply Transporter with **long loops** (500ms+)
3. **Pitch shift** with Fruity Pitcher
4. Use as **pad or atmospheric layer**

---

## Mixing Transporter Vocals

### Frequency Management
- **High-pass at 200-300Hz:** Avoid mud
- **Cut 500Hz-1kHz:** Prevent boxiness
- **Boost 3-5kHz:** Add presence/clarity

### Stereo Placement
- **Dry vocal:** Center (mono)
- **Transporter effect:** Wide stereo
- Creates **depth** and **separation**

### Volume Balance
- **Dry vocal:** -6dB to -3dB
- **Transporter:** -12dB to -6dB (support, not dominate)

---

## Common Mistakes

1. **Too much wet signal:** Loses vocal clarity
2. **Sensitivity too low:** Doesn't trigger enough
3. **Sensitivity too high:** Triggers on every syllable (chaotic)
4. **No dry vocal:** Effect sounds disconnected
5. **Forgetting to flush:** Old audio stays in buffer

---

## Preset Cheat Sheet

| Vibe | Min Length | Sensitivity | A/B Ratio | Spread | Reverse % |
|------|------------|-------------|-----------|--------|-----------|
| **Trap Stutter** | 150ms | 65% | 40% | 40% | 15% |
| **Glitchy Hook** | 200ms | 55% | 60% | 60% | 25% |
| **Chopped & Screwed** | 500ms | 40% | 20% | 0% | 0% |
| **Psychedelic** | 300ms | 50% | 70% | 80% | 40% |
| **Subtle Texture** | 100ms | 45% | 30% | 30% | 5% |

---

## Creative Uses

### Use 1: Transition Effects
- Bypass Transporter during verses
- **Enable during last 2 bars** before chorus
- Creates build-up/tension

### Use 2: Ad-Lib Processing
- Apply to **"yeah," "uh," "let's go"** ad-libs
- Short loops (100-150ms)
- High reverse probability (30%)
- Makes ad-libs more interesting

### Use 3: Intro/Outro Textures
- Use vocal sample or acapella
- Let Transporter create **evolving texture**
- Record 60 seconds, chop the best parts
- Use as **intro atmosphere**

---

## Reference Tracks

**Trap/Future Bass Influence:**
- Flume - "Say It" (vocal manipulation)
- What So Not - "Gemini" (glitch vocals)
- RL Grime - "Core" (vocal stabs)

**Hip-Hop Glitch:**
- Travis Scott - "SICKO MODE" (transitions)
- Kanye West - "Black Skinhead" (stutter effects)
- Future - "Mask Off" (vocal textures)

**Experimental:**
- Death Grips - "Get Got" (aggressive glitch)
- JPEGMAFIA - "1539 N. Calvert" (chaotic vocal edits)

---

## Production Tips

### For Moody Tracks
- Lower **Bouncing Rate** (stable)
- **Deterministic** bias (less random)
- **Subtle spread** (20-30%)
- Dark reverb, minimal delay

### For Upbeat Tracks
- Higher **Bouncing Rate** (energetic)
- **Probabilistic** bias (more random)
- **Wide spread** (60%+)
- Bright effects, rhythmic delay

### For Psychedelic Tracks
- Maximum **variation** (A/B Ratio 70%+)
- High **reverse probability** (30-50%)
- **Octave shifts** (±1)
- Phaser, chorus, long reverb

---

## Next Steps

1. **Experiment with different vocals:** Rap, sung, spoken word
2. **Learn automation:** Create dynamic, evolving effects
3. **Combine with other plugins:** Vocodex, Gross Beat
4. **Record & resample:** Capture happy accidents
5. **Study references:** Understand how pros use glitch effects

---

**Related Workflows:**
- [Gross Beat for Vocal Stutter](../../Gross%20Beat/03-Workflows/by-goal/vocal-stutter-effect.md)
- [Vocodex for Robot Vocals](../../Vocodex/03-Workflows/by-goal/melodic-vocal-effects-hiphop.md)
- [Edison Vocal Editing](../../Edison/03-Workflows/by-goal/vocal-chop-editing.md)

---

**Last Updated:** February 3, 2026
**Genre:** Hip-Hop, Trap, Glitch-Hop, Experimental
**Vibe:** 🤖 Futuristic Vocal Manipulation

```

---

## FILE: 04-Reference\01_Official_Links.md

```markdown
# Transporter - Official Links & Resources

## Official Documentation

### Primary Manual
- **Main Page:** [Transporter Plugin](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Transporter.htm)
- **Publisher:** Image-Line
- **Last Verified:** February 3, 2026

## Plugin Overview

### Description
Transporter is a realtime relooping effect based on transient detection. It captures incoming audio into a buffer and loops it back in creative ways, with automatic beat detection for musical synchronization.

### Key Features
- **Transient Detection:** Automatically detects beats and rhythmic hits
- **Loop Buffer:** Realtime audio capture and playback
- **Snap to Transients:** Quantizes loop points for musical results
- **Variable Speed:** 0.5x to 2x playback with direction control
- **Stutter Engine:** Rhythmic repetition effects
- **BPM Sync:** All timing syncs to project tempo

---

## Technical Specifications

### System Requirements
- **FL Studio Version:** 12.x, 20.x, 21.x+
- **Platform:** Windows, macOS
- **Format:** Native FL Studio effect plugin
- **CPU Usage:** Low to moderate (depends on buffer size)

### Audio Specifications
- **Processing:** Realtime with minimal latency
- **Buffer Range:** 1/64 bar to 4 bars
- **Bit Depth:** 32-bit floating point
- **Sample Rate:** Follows project settings

---

## Use Cases & Applications

### Creative Applications
1. **Glitch Effects:** Short loop stutters and rhythmic glitches
2. **Build-Ups:** Freeze and manipulate loops before drops
3. **Breakdown Fills:** Reverse and stutter during transitions
4. **Beat Repeat:** Classic hip-hop style beat repetition
5. **Live Performance:** Real-time loop manipulation

### Genre Suitability
- **Glitch Hop:** Primary use case
- **IDM:** Abstract loop manipulation
- **Dubstep:** Stutter effects and build-ups
- **Hip-Hop:** Beat repeat and loop effects
- **Techno:** Build-up effects in live sets
- **Experimental:** Abstract sound design

---

## Transient Detection Technology

### How It Works
Transporter analyzes incoming audio in realtime to detect transients (sharp attack portions of sounds like drum hits). When "Snap to Transients" is enabled, loop points automatically align to these detected transients, ensuring musical and rhythmic loop playback.

### Detection Parameters
- **Sensitivity Control:** Adjusts detection threshold
- **Lookahead Buffer:** Analyzes ahead for accurate detection
- **Adaptive Algorithm:** Adjusts to different signal types

---

## Related FL Studio Plugins

### Similar Effects
- **Gross Beat:** Advanced time manipulation with more presets
- **Fruity Scratcher:** Manual loop/scratch effect
- **Fruity Granulizer:** Grain-based loop processing
- **Effector:** Multi-effect with some loop capabilities

### Complementary Effects
- **Fruity Limiter:** Control output levels
- **Fruity Reverb 2:** Add space to glitched audio
- **Fruity Filter:** Frequency-based glitch variations
- **Maximus:** Multiband processing for glitch results

---

## Performance & Live Use

### Controller Recommendations
- **Knobs/Faders:** For loop length, position, and mix control
- **Pads/Buttons:** For freeze, stutter, and direction switching
- **XY Pad:** For simultaneous loop position and length control
- **Mod Wheel:** For smooth loop position sweeps

### MIDI Mapping Strategies
1. **Essential Controls:** Map loop length, position, freeze first
2. **Performance Controls:** Add stutter, direction, speed
3. **Safety Controls:** Map dry/wet or output level as kill switch
4. **Preset Recall:** Assign snapshot presets to pads

---

## Community Resources

### FL Studio Forums
- **Forum Section:** [FL Studio Effects](https://forum.image-line.com/viewforum.php?f=200)
- **Search Query:** "Transporter glitch" OR "Transporter live"

### Video Tutorials
- **Official FL Studio Channel:** [YouTube](https://www.youtube.com/user/FLStudio)
- **Search:** "FL Studio Transporter tutorial" OR "Transporter glitch effects"

### Community Presets
- **Location:** FL Studio\Data\Patches\Plugin presets\Effects\Transporter\
- **Third-Party:** Search production forums for user-created presets

---

## External Resources

### Glitch Production Techniques
- **Article:** "The Art of Glitch Music Production"
- **Book:** "The BPM Bible" (glitch techniques section)
- **Community:** Glitch Hop production forums and subreddits

### Transient Detection Theory
- **Wikipedia:** [Transient (acoustics)](https://en.wikipedia.org/wiki/Transient_(acoustics))
- **Article:** "Understanding Transient Detection in Music Production"
- **Research:** Signal processing papers on onset detection

---

## Reference Tracks for Study

### Glitch/IDM Examples
1. **Aphex Twin** - Extensive use of loop manipulation
2. **Autechre** - Abstract rhythmic glitching
3. **Venetian Snares** - Extreme break manipulation
4. **Squarepusher** - Jazz-influenced glitch techniques

### Glitch Hop Examples
1. **Glitch Mob** - Modern glitch production
2. **Pretty Lights** - Glitch with hip-hop influence
3. **Opiuo** - Organic glitch sounds
4. **Tipper** - Technical glitch manipulation

### EDM Build-Up Examples
- Study how modern producers use stutter and loop effects in build-ups
- Analyze transition techniques in sets by Deadmau5, Eric Prydz

---

## Production Integration

### Routing Strategies
1. **Send Effect:** Parallel processing for controlled glitch blending
2. **Insert Effect:** Direct transformation of individual tracks
3. **Master Bus:** (Not recommended) Global glitch effects
4. **Sidechain Source:** Use separate audio for transient detection

### Mixing Tips
- **EQ After:** Cut harsh frequencies created by glitching
- **Compression After:** Tame dynamic spikes from stutters
- **Reverb After:** Smooth glitch transitions
- **Distortion After:** Add aggression to glitch effects

---

## Alternative Software (Outside FL Studio)

### Similar Plugins
- **Stutter Edit (iZotope)** - Advanced stutter and glitch effects
- **BreakTweaker (iZotope)** - Rhythm and glitch mangling
- **dBlue Glitch** - Free glitch VST plugin
- **Turnado (Sugar Bytes)** - Multi-effect with loop functions
- **TimeShaper (Cableguys)** - Rhythmic time effects

### Hardware Alternatives
- **Boss DD-7 (with Hold)** - Loop delay pedal
- **Electro-Harmonix Freeze** - Audio freeze pedal
- **Boss RC Loop Stations** - Live looping

---

## Advanced Techniques

### Automation Ideas
1. **Loop Length Sweep:** Gradually decrease from 1 bar to 1/64
2. **Position LFO:** Automate position with LFO for scanning effect
3. **Speed Ramp:** Create vinyl stop effects
4. **Stutter Density:** Increase stutter steps over time

### Creative Processing
- **Freeze + Reverse:** Create reversed loop layers
- **Multi-Band Glitch:** Route different frequencies to separate Transporters
- **Sidechain Glitch:** Use kick to trigger loop resets
- **MIDI-Triggered:** Use MIDI to trigger freeze/stutter moments

---

## Troubleshooting & Tips

### Common Issues
- **Clicks/Pops:** Increase crossfade time
- **Out of Sync Loops:** Check BPM sync is enabled
- **Weak Transient Detection:** Increase sensitivity or use transient shaper before Transporter
- **Too Chaotic:** Reduce stutter rate, increase loop length

### Optimization
- **CPU:** Shorter buffer lengths use less CPU
- **Latency:** Disable transient detection if not needed for lower latency
- **Quality:** Higher sample rates improve transient detection accuracy

---

## Support & Updates

### Official Support
- **Image-Line Forum:** [Support Section](https://forum.image-line.com/viewforum.php?f=100)
- **Knowledge Base:** [FL Studio Support](https://support.image-line.com/)
- **Bug Reports:** Forum with system specifications

### Updates
- **Included in:** FL Studio updates (check version history)
- **Compatibility:** Backwards compatible with older projects
- **Presets:** Updated factory preset library with each FL Studio version

---

**Last Updated:** February 3, 2026
**Status:** Complete reference links

```

---

## FILE: 04-Reference\faq.md

```markdown
# Transporter FAQ

## General Questions

### Q: What exactly does Transporter do?
**A**: Transporter is an audio effect plugin that captures short segments of audio and repeats them rhythmically, creating stutter, glitch, and choppy effects. It can manipulate pitch, filter, and timing in real-time.

### Q: Is Transporter suitable for beginners?
**A**: Yes, Transporter has user-friendly presets and simple controls for beginners, while also offering advanced parameters for experienced users. Start with the preset library and basic controls.

### Q: What are the system requirements?
**A**: Minimum requirements vary by version, but generally: 4GB RAM, multi-core processor, 64-bit OS, supported audio interface. Check specific requirements for your platform.

## Sound Design Questions

### Q: How do I get that classic vocal stutter effect?
**A**: Start with a 1/16 buffer size, set mix to 75%, add some pitch shift (+2 to +5 semitones), and automate the filter cutoff for movement. Use a vocal sample with clear enunciation.

### Q: Can Transporter create musical melodies?
**A**: Yes, by using pitch automation and rhythmically timed buffer changes, you can create melodic stutter patterns. Combine with MIDI input for precise control.

### Q: How do I avoid audio clicks and pops?
**A**: Enable fade/smoothing options, use appropriate buffer sizes, automate parameters gradually rather than abruptly, and ensure your source audio is clean.

## Technical Questions

### Q: What's the best buffer size for live performance?
**A**: For live performance, use audio interface buffers of 128-256 samples. The Transporter buffer size controls the effect, not system performance.

### Q: Can I use Transporter in real-time with zero latency?
**A**: Zero latency is impossible with digital processing, but with good audio interfaces and proper settings, latency can be reduced to under 10ms, which is effectively real-time.

### Q: Does Transporter support sidechain input?
**A**: Most versions support sidechain for rhythm synchronization and ducking. Check your specific version's documentation for sidechain implementation.

## Workflow Questions

### Q: How do I create smooth transitions between songs?
**A**: Use the fade-in/fade-out automation on the mix parameter, gradually change buffer sizes, and use filter automation to smooth frequency transitions between tracks.

### Q: Can I automate all parameters?
**A**: Yes, most parameters can be automated via your DAW's automation system. Common automation targets include buffer size, pitch shift, filter cutoff, and mix amount.

### Q: What's the best way to organize presets?
**A**: Organize presets by genre, use case (live vs. studio), or by effect type. Use naming conventions that make sense to your workflow (e.g., "EDM_Drop_Heavy_1").

## Performance Questions

### Q: Can I use Transporter for live DJ sets?
**A**: Absolutely! Transporter is excellent for live performance. Map key parameters to MIDI controllers and practice switching between presets during transitions.

### Q: How do I prevent CPU overload during live shows?
**A**: Optimize your buffer settings, close unnecessary applications, freeze rendered tracks when possible, and have backup plans ready if CPU usage gets too high.

### Q: What controllers work best with Transporter?
**A**: Grid controllers (Launchpad, Maschine) work great for triggering, while knob controllers (Push, KeyLab) excel at parameter manipulation. Expression pedals are great for hands-free control.

## Integration Questions

### Q: Does Transporter work in all DAWs?
**A**: Transporter is available in VST, AU, and AAX formats, making it compatible with most major DAWs including FL Studio, Ableton Live, Logic Pro, Pro Tools, and Cubase.

### Q: Can I use multiple instances simultaneously?
**A**: Yes, you can use multiple instances, but be mindful of CPU usage. Each additional instance increases processing load.

### Q: How do I backup my custom presets?
**A**: Export custom presets using the plugin's export function, or copy the preset files from the plugin's preset folder to a backup location.

## Troubleshooting Questions

### Q: Why is there no sound coming out?
**A**: Check that the mix knob isn't at 0%, the plugin isn't bypassed, audio is reaching the plugin, and your audio interface is properly configured.

### Q: The timing feels wrong, what's wrong?
**A**: Verify host sync is enabled, check your project tempo, ensure proper MIDI clock synchronization, and adjust parameter automation timing.

### Q: The plugin crashed during a session, what should I do?
**A**: Restart the plugin, try a simpler preset, increase buffer size, and save your work frequently. If crashes persist, contact technical support.

## Creative Questions

### Q: How can I create unique sounds not covered in presets?
**A**: Experiment with extreme parameter combinations, use multiple instances in series, combine with other effects, and record automation for evolving textures.

### Q: Can I use Transporter on non-musical audio?
**A**: Yes! Transporter works great on sound effects, field recordings, voiceovers, and any audio source. Experiment with speech, nature sounds, and industrial noises.

### Q: How do I achieve that "glitch hop" sound?
**A**: Use small buffer sizes (1/32 or 1/64), add pitch randomization, enable bit reduction if available, and combine with rhythmic gating effects.

## Advanced Questions

### Q: Can I create custom algorithms or modify existing ones?
**A**: This depends on the version. Some advanced versions offer algorithm customization or scripting capabilities. Check your specific version's documentation.

### Q: Is it possible to sync multiple Transporter instances?
**A**: Yes, you can sync instances via MIDI clock, host sync, or by linking parameters within your DAW's modulation system.

### Q: How does Transporter compare to similar plugins?
**A**: Transporter focuses on high-quality stutter and glitch effects with musical results. While similar plugins exist, Transporter often offers unique features like advanced pitch preservation and creative automation options.
```

---

## FILE: 04-Reference\maintenance-guide.md

```markdown
# Transporter Maintenance & Optimization

## System Optimization

### CPU Performance Optimization
**Best Practices**:
- Use appropriate buffer sizes (128-256 for live, 512-1024 for studio)
- Disable unused instances and effects
- Freeze rendered tracks when possible
- Close unnecessary background applications

**Monitoring CPU Usage**:
- Watch CPU meters in your DAW
- Monitor individual instance load
- Check for CPU spikes during automation
- Profile performance with complex settings

### Memory Management
**Efficient Memory Usage**:
- Limit concurrent instances
- Clear plugin cache regularly
- Close unused projects
- Use 64-bit version when available

**Memory Troubleshooting**:
- Check for memory leaks with extended use
- Monitor RAM usage in task manager
- Reduce buffer sizes if memory constrained
- Restart DAW if memory becomes fragmented

### Audio Interface Optimization
**Driver Configuration**:
- Use latest manufacturer drivers
- Enable exclusive mode for best performance
- Optimize buffer size vs latency
- Configure proper sample rates

**Signal Chain Optimization**:
- Minimize unnecessary processing
- Use gain staging properly
- Avoid clipping at any stage
- Monitor for distortion artifacts

## Plugin Maintenance

### Regular Updates
**Update Process**:
1. Backup current presets and settings
2. Check manufacturer website for updates
3. Download and install new version
4. Verify plugin loads correctly
5. Test favorite presets
6. Update documentation if needed

**Update Frequency**:
- Check monthly for minor updates
- Major version updates as released
- Critical security updates immediately
- Compatibility updates when changing DAW

### Preset Management
**Organization Strategy**:
- Create genre-specific preset folders
- Use consistent naming conventions
- Star or mark favorite presets
- Archive unused presets

**Backup Procedures**:
- Export custom presets regularly
- Store backups on separate media
- Include preset versioning
- Document custom settings

**Preset Sharing**:
- Share presets with compatible formats
- Include parameter documentation
- Note version compatibility
- Provide usage examples

## Performance Optimization

### Buffer Management
**Live Performance Settings**:
- Small audio interface buffers (128-256 samples)
- Moderate Transporter buffer sizes
- High-quality processing when CPU allows
- Backup preset for CPU emergencies

**Studio Recording Settings**:
- Larger audio buffers (512-1024 samples)
- Highest quality processing modes
- Maximum oversampling for best quality
- Conservative instance limits

### Automation Optimization
**Efficient Automation**:
- Use LFOs for repetitive movements
- Group similar parameter changes
- Minimize automation points
- Use relative automation when possible

**Recording Performance**:
- Test automation before recording
- Have backup manual control ready
- Document automation schemes
- Practice complex automation passages

## Troubleshooting Guide

### Common Issues

#### Audio Problems
**No Sound Output**:
1. Check mixer channel volume and routing
2. Verify plugin is not bypassed
3. Confirm audio interface is working
4. Test with simple preset
5. Restart DAW if needed

**Distortion or Artifacts**:
1. Check for digital clipping
2. Reduce extreme parameter settings
3. Increase buffer size
4. Disable oversampling if needed
5. Verify audio interface drivers

**Timing Issues**:
1. Enable host synchronization
2. Check project tempo settings
3. Verify MIDI clock connections
4. Adjust PDC compensation
5. Test with simple projects

#### Performance Problems
**High CPU Usage**:
1. Increase audio buffer size
2. Reduce oversampling settings
3. Disable unused instances
4. Freeze rendered tracks
5. Close other applications

**Crashes or Freezes**:
1. Update to latest version
2. Reinstall plugin if needed
3. Check for plugin conflicts
4. Verify system compatibility
5. Contact technical support

#### Interface Issues
**Plugin Not Loading**:
1. Verify installation path
2. Rescan plugin database
3. Check plugin permissions
4. Reinstall plugin if necessary
5. Verify DAW compatibility

**GUI Problems**:
1. Update graphics drivers
2. Try different GUI scaling
3. Check DPI settings
4. Disable GPU acceleration
5. Restart DAW and computer

## Preventive Maintenance

### Regular Tasks
**Weekly**:
- Clean up temporary files
- Organize recent projects
- Test critical functionality
- Backup important presets

**Monthly**:
- Check for plugin updates
- Archive completed projects
- Optimize hard drive space
- Review and clean preset library

**Quarterly**:
- Deep system cleanup
- Update all software
- Review backup systems
- Performance testing

### Documentation
**Keep Records Of**:
- Custom preset parameters
- Controller mappings
- Integration workflows
- Troubleshooting solutions

**Update Documentation**:
- Version changes
- New techniques discovered
- Performance optimizations
- Contact information updates

## Long-term Care

### Archive Strategy
**Project Archiving**:
- Use version control for major projects
- Archive with plugin versions used
- Include settings and presets
- Store on reliable media

**Preservation**:
- Maintain old plugin versions for legacy projects
- Document version compatibility
- Keep system images if possible
- Store installation files

### Training and Knowledge
**Stay Current**:
- Follow manufacturer tutorials
- Join user communities
- Attend workshops or webinars
- Experiment with new techniques

**Skill Development**:
- Practice advanced techniques
- Learn related software
- Study music production theory
- Develop troubleshooting skills
```

---

## FILE: 04-Reference\technical-specifications.md

```markdown
# Transporter Technical Specifications

## Audio Engine Architecture

### Core Processing
- **Sample Rate Support**: 44.1kHz - 192kHz
- **Bit Depth**: 32-bit floating point internal processing
- **Buffer System**: Variable length audio capture
- **Latency**: 0-2 samples (native processing)
- **Oversampling**: 1x - 8x options available

### DSP Algorithms
- **Time-domain Processing**: Real-time audio manipulation
- **Pitch Shifting**: Granular or phase vocoder algorithms
- **Filter Implementation**: State-variable filters (LP, HP, BP, Notch)
- **Interpolation**: High-quality sample interpolation
- **Anti-aliasing**: Built-in oversampling for quality preservation

## Buffer Management

### Buffer Size Range
- **Minimum**: 1 millisecond
- **Maximum**: 4 bars (depends on tempo)
- **Divisions**: 1/4, 1/8, 1/16, 1/32, 1/64 notes
- **Triplets**: 1/8T, 1/16T, 1/32T notes
- **Custom**: User-defined time values

### Memory Architecture
- **Buffer Pool**: Dynamic memory allocation
- **Circular Buffers**: For continuous processing
- **Crossfading**: Seamless buffer transitions
- **Memory Footprint**: 50-200MB per instance

## Parameter Specifications

### Time Parameters
- **Buffer Size**: 1ms - 16 bars
- **Stutter Rate**: 0.1Hz - 100Hz
- **Fade Time**: 0ms - 1000ms
- **Release Time**: 0ms - 5000ms

### Pitch Parameters
- **Pitch Shift Range**: -24 to +24 semitones
- **Fine Pitch**: ±100 cents
- **Formant Shift**: ±12 semitones
- **Vibrato Rate**: 0.1Hz - 20Hz
- **Vibrato Depth**: 0 - 100%

### Filter Parameters
- **Frequency Range**: 20Hz - 20kHz
- **Resonance**: 0 - self-oscillation
- **Slope Options**: 12dB, 24dB, 36dB, 48dB per octave
- **Filter Types**: Low-pass, High-pass, Band-pass, Notch
- **Modulation Depth**: 0 - 100%

### Mix Parameters
- **Wet/Dry Mix**: 0% - 100%
- **Stereo Width**: 0% - 200%
- **Pan**: -100% to +100%
- **Output Level**: -60dB to +12dB

## MIDI Implementation

### Controller Numbers
- **CC#1**: Modulation → Pitch Shift
- **CC#7**: Volume → Output Level
- **CC#10**: Pan → Stereo Pan
- **CC#11**: Expression → Wet/Dry Mix
- **CC#74**: Filter Cutoff
- **CC#71**: Filter Resonance
- **CC#72**: Release Time
- **CC#73**: Attack Time
- **CC#75**: Filter Q

### Note Input Support
- **Note Range**: C-2 to G8 (MIDI 0-127)
- **Velocity Sensitivity**: 0-127 mapped to intensity
- **Aftertouch**: Channel and polyphonic support
- **Pitch Bend**: ±24 semitone range

## Audio Specifications

### Sample Rate Conversion
- **Internal Processing**: Up to 192kHz
- **Output Matching**: Host project sample rate
- **Quality Settings**: Economy, Normal, High, Ultra
- **SRC Algorithm**: Minimum phase FIR filters

### Bit Depth Handling
- **Input**: 16, 24, 32-bit integer, 32-bit float
- **Processing**: 32-bit float throughout
- **Output**: Match host bit depth
- **Dithering**: Optional for 16-bit output

## Platform Specifications

### Windows Support
- **OS Versions**: Windows 7 SP1 - Windows 11
- **Plugin Formats**: VST2, VST3, AAX
- **Architecture**: 32-bit and 64-bit
- **Dependencies**: Visual C++ Redistributable

### macOS Support
- **OS Versions**: OS X 10.9 - macOS 14+
- **Plugin Formats**: VST2, VST3, AU, AAX
- **Architecture**: Universal Binary (Intel/Apple Silicon)
- **Dependencies**: System frameworks only

### Linux Support
- **Compatibility**: Via Wine or similar
- **Status**: Unofficial support
- **Performance**: Variable depending on Wine version
- **Stability**: Generally stable with recent Wine

## Performance Specifications

### CPU Usage
- **Idle**: 0.1% - 0.5% of one core
- **Active**: 0.5% - 5% of one core
- **Complex Settings**: Up to 15% with extreme settings
- **Multi-core**: Single-threaded processing

### RAM Usage
- **Base Instance**: 50-100MB
- **Large Buffers**: +50MB additional
- **Presets Loaded**: +1-5MB per 100 presets
- **Peak Usage**: 200-300MB maximum

### Disk Usage
- **Installation**: 100-500MB
- **Presets**: 10-50MB per 1000 presets
- **Cache Files**: 50-200MB
- **Log Files**: <10MB typical

## Compatibility Matrix

### DAW Support
| DAW | VST2 | VST3 | AU | AAX | Notes |
|-----|------|------|----|-----|-------|
| FL Studio | ✓ | ✓ | N/A | N/A | Native integration |
| Ableton Live | ✓ | ✓ | ✓ | N/A | Full support |
| Logic Pro | N/A | N/A | ✓ | N/A | AU version recommended |
| Pro Tools | ✓ | ✓ | N/A | ✓ | AAX for Pro Tools |
| Cubase | ✓ | ✓ | N/A | N/A | Full VST support |
| Reaper | ✓ | ✓ | N/A | N/A | Excellent compatibility |

### System Requirements

#### Minimum Requirements
- **CPU**: Intel i3 or AMD Ryzen 3
- **RAM**: 4GB DDR3
- **Storage**: 500MB available space
- **OS**: Windows 7 SP1 or macOS 10.9

#### Recommended Requirements
- **CPU**: Intel i7 or AMD Ryzen 7
- **RAM**: 16GB DDR4
- **Storage**: 2GB available space + SSD
- **OS**: Windows 10/11 or macOS 12+

#### Professional Requirements
- **CPU**: Intel i9 or AMD Ryzen 9
- **RAM**: 32GB+ DDR4/DDR5
- **Storage**: NVMe SSD with 5GB+ space
- **OS**: Latest OS versions
- **Audio Interface**: Professional ASIO/Core Audio device

## Limitations and Constraints

### Known Limitations
- **Single Instance per Track**: Multiple instances require multiple tracks
- **No Offline Processing**: Real-time only
- **Limited Undo History**: Dependent on DAW
- **No Direct File Export**: Must record output

### Performance Constraints
- **CPU Scaling**: Linear with instance count
- **Memory Ceiling**: 1GB per process (32-bit limit)
- **Thread Limitation**: Single-threaded processing
- **Plugin Bridge**: Required in some hosts

### Audio Constraints
- **Latency**: Minimum 64 samples recommended
- **Sample Rate**: Limited by host project
- **Bit Depth**: Automatic conversion
- **Channel Count**: Mono and Stereo only
```

---

