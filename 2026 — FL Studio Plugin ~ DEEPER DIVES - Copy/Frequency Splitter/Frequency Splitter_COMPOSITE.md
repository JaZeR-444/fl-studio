# Frequency Splitter - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Frequency Splitter - Multi-Band Processing Tool

`\`\`
███████╗██████╗ ███████╗ ██████╗ ██╗   ██╗███████╗███╗   ██╗ ██████╗██╗   ██╗
██╔════╝██╔══██╗██╔════╝██╔═══██╗██║   ██║██╔════╝████╗  ██║██╔════╝╚██╗ ██╔╝
█████╗  ██████╔╝█████╗  ██║   ██║██║   ██║█████╗  ██╔██╗ ██║██║      ╚████╔╝ 
██╔══╝  ██╔══██╗██╔══╝  ██║ ▄ ██║██║   ██║██╔══╝  ██║╚██╗██║██║       ╚██╔╝  
██║     ██║  ██║███████╗╚██████╔╝╚██████╔╝███████╗██║ ╚████║╚██████╗   ██║   
╚═╝     ╚═╝  ╚═╝╚══════╝ ╚═══▀══╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝ ╚═════╝   ╚═╝   

███████╗██████╗ ██╗     ██╗████████╗████████╗███████╗██████╗ 
██╔════╝██╔══██╗██║     ██║╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗
███████╗██████╔╝██║     ██║   ██║      ██║   █████╗  ██████╔╝
╚════██║██╔═══╝ ██║     ██║   ██║      ██║   ██╔══╝  ██╔══██╗
███████║██║     ███████╗██║   ██║      ██║   ███████╗██║  ██║
╚══════╝╚═╝     ╚══════╝╚═╝   ╚═╝      ╚═╝   ╚══════╝╚═╝  ╚═╝
`\`\`

**Plugin Type:** Signal Splitter / Crossover Tool
**Category:** Utility / Mixing
**Official Manual:** [Image-Line Frequency Splitter Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Frequency%20Splitter.htm)

---

## 🎯 What is Frequency Splitter?

Frequency Splitter is a dedicated crossover utility that divides incoming audio into separate frequency bands (Low, Mid, High). Unlike standard EQs, its primary purpose is to route these bands to different audio outputs, enabling advanced multi-band effects processing chains (e.g., distorting only the bass, adding reverb only to the highs).

**Key Capabilities:**
- Split audio into 2 or 3 bands (Low/High or Low/Mid/High)
- High-fidelity Linear Phase mode (no phase shift)
- Zero Latency mode for live tracking
- Adjustable crossover slopes (6dB to 96dB/oct)
- Visual feedback of frequency spectrum and crossover points
- Independent band outputs for Patcher or Mixer routing

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review official manual sections on linear phase vs. zero latency
3. Create **parameter-cheat-sheet.md** with all controls
4. Test routing bands to different mixer tracks

### For Sound Designers:
1. Review **multiband-processing-guide.md** (to be created)
2. Study **patcher-integration.md** for modular setups
3. Learn **creative-crossover-automation.md**

### For Mix Engineers:
1. Study **transparent-splitting.md** (Linear Phase benefits)
2. Review **sub-bass-management.md**
3. Learn **dynamic-eq-workflows.md** using split bands

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - Crossover Frequency knobs
  - Slope selectors (6, 12, 24, 48, 96 dB/oct)
  - Mode switches (Linear Phase, Minimum Phase, Zero Latency)
  - Output routing selectors
  - Gain/Mute/Solo per band

- [ ] **crossover-modes-explained.md**
  - **Linear Phase:** Preserves phase relationships, introduces latency (best for mixing)
  - **Zero Latency:** No latency, introduces phase shift (best for recording/live)
  - **Minimum Phase:** Compromise option
  - Ringing artifacts in Linear Phase mode

#### 02-Data/parameters/
- [ ] **frequency-splitter-params.json**
  `\`\`json
  {
    "plugin_name": "Frequency Splitter",
    "category": "Utility",
    "parameters": [
      {
        "name": "Cutoff Frequency",
        "type": "knob",
        "unit": "Hz",
        "description": "Point where bands divide",
        "use_cases": ["isolating sub bass", "separating vocal sibilance"]
      },
      {
        "name": "Slope",
        "type": "selector",
        "options": ["6dB", "12dB", "24dB", "48dB", "96dB"],
        "description": "Steepness of the filter",
        "pro_tip": "Steeper slopes separate better but may cause ringing"
      }
    ]
  }
  `\`\`

#### 02-Data/presets/
- [ ] **crossover-templates.json**
  - Standard 3-Band (Sub, Mids, Highs)
  - 2-Band Bass Split (Sub vs Top)
  - Vocal Air Split (Body vs Sibilance)
  - De-mudding Split (Low-mids isolation)

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **creating-multiband-effects.md**
  - Setting up the routing in Patcher vs Mixer
  - Applying saturation to mids only
  - Widening highs while keeping bass mono
  - Compressing bands independently

- [ ] **sub-bass-isolation.md**
  - Best crossover frequency for subs (80-120Hz)
  - Using steep slopes (48/96dB) effectively
  - Ensuring mono compatibility for the low band

- [ ] **transparency-guide.md**
  - When to use Linear Phase
  - Avoiding pre-ringing on transients
  - Null testing to verify clean splits

#### 03-Workflows/by-context/
- [ ] **neurofunk-bass-design.md**
- [ ] **vocal-processing-chains.md**
- [ ] **mastering-low-end-control.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **filter-slope-analysis.md**
  - Phase impact of different slopes
  - Overlap behavior
  - "Brickwall" filtering capabilities

- [ ] **latency-reference.md**
  - Latency values for each linear phase setting
  - PDC (Plugin Delay Compensation) considerations

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Understand crossover behavior

**Tasks:**
1. Open Frequency Splitter
2. Route audio through it
3. Listen to individual bands (Solo mode)
4. Experiment with different slopes
5. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How do 6dB vs 96dB slopes sound different?
- What is the audible difference between Linear Phase and Zero Latency?
- How do you route bands to different mixer tracks?

### Phase 2: Advanced Routing (Week 2)
**Goal:** Build multi-band effect chains

**Tasks:**
1. Use Patcher to split signal
2. Put distortion on Low band, reverb on High band
3. Recombine signals
4. Check for phasing issues
5. Create multiband-processing-guide.md

**Key Questions to Answer:**
- How to avoid "hollow" sounds at crossover points?
- How to use Sidechain inputs with frequency splitting?
- CPU impact of Linear Phase High Quality mode?

---

## 📊 Plugin Specifications to Document

### Filter Engine
- Filter types (Linkwitz-Riley, FFT-based Linear Phase)
- Slope options (6, 12, 24, 48, 96 dB/Oct)
- Frequency range (typically 20Hz - 20kHz)
- Latency (samples) per mode

### Routing
- Max number of bands (3)
- Output offsets (Mixer track relative routing)
- Sidechain input capabilities

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. How do you turn a 2-band split into a 3-band split?
2. What is the default crossover frequency for bass?
3. How do you mute a specific band?

### Advanced Usage
1. Why does Linear Phase introduce latency?
2. When should you use 96dB/oct slopes? (e.g., surgical removal vs musical splitting)
3. How does this compare to Maximus's internal splitting?
4. Can you modulate the crossover point? (Yes, and what does it sound like?)

---

## 📝 Documentation Standards

### For Each Workflow:
- **Goal:** Clear objective (e.g., "Widen Highs, Mono Bass")
- **Routing:** Diagram or text explanation of Mixer/Patcher setup
- **Settings:** Specific Crossover points and slopes
- **Pitfalls:** Phase cancellation warnings

---

## 🔗 Cross-Reference with Other Plugins

Frequency Splitter is often used with:
- **Patcher** (Essential for self-contained multi-band chains)
- **Fruity Stereo Shaper** (Widening specific bands)
- **Distructor** (Distorting specific bands)
- **Fruity Peak Controller** (Modulating bands based on audio)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Frequency Splitter/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── crossover-modes-explained.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── frequency-splitter-params.json
│   └── presets/
│       └── crossover-templates.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── creating-multiband-effects.md
│   │   ├── sub-bass-isolation.md
│   │   └── transparency-guide.md
│   └── by-plugin-combo/
│       └── patcher-multiband-racks.md
│
└── 04-Reference/
    ├── filter-slope-analysis.md
    └── latency-reference.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Explain the trade-offs between Linear Phase and Zero Latency
- [ ] Build a custom Multi-Band Distortion effect in Patcher
- [ ] Isolate a sub-bass frequency with surgical precision
- [ ] Demonstrate zero-phasing reconstruction of a split signal

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Frequency Splitter

## Purpose and Identity
**Frequency Splitter** is a dedicated crossover utility designed to divide an audio signal into 2 or 3 independent frequency bands (Low, Mid, High). Its primary mission is to enable **multi-band effects processing**. By splitting the audio, you can process the bass, mids, and highs with completely different effects (e.g., distorting the mids while keeping the sub clean). [SRC: IL-MAN]

## 60-Second Mental Model
Imagine a single water pipe (audio) being split into three separate faucets. 
- Faucet 1 only drips cold water (Bass).
- Faucet 2 only drips warm water (Mids).
- Faucet 3 only drips hot water (Highs).
You can now add soap only to the hot water faucet without making the cold water soapy. Frequency Splitter is the set of valves that controls exactly which frequencies go to which faucet.

## Typical Roles In A Session
- **Signal Router**: Sending the bass of a synth to Mixer Track 10 and the lead part to Mixer Track 11.
- **Precision Cleaner**: Isolating and muting problematic low-mid "mud" without affecting the high-end air.
- **Multiband Master**: Building custom multiband compressors or saturators in **Patcher**.

## Hip-Hop/R&B Context
- **808/Kick Separation**: Splitting an 808 so you can sidechain only the sub-frequencies to the kick, while the harmonic "grit" stays untouched.
- **Vocal Air Spread**: Splitting a vocal at 5kHz and adding a wide stereo chorus ONLY to the air frequencies.
- **Sample Focus**: Splitting a messy soul sample to mono-ize the low end while keeping the melodic mids wide and vibey.

## When to Use vs When NOT to Use
| Use It When... | Avoid It When... |
| :--- | :--- |
| You want to process different frequencies with different plugins. | You just want to EQ a track (use Parametric EQ 2). |
| You need high-fidelity Linear Phase splitting for mastering. | You are low on CPU (Linear Phase mode is demanding). |
| You are building complex routing in **Patcher**. | You need more than 3 bands (use Maximus or multiple instances). |

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Frequency Splitter

## UI Tour
Frequency Splitter's interface is centered around its visual frequency display and routing matrix. [SRC: IL-MAN]

### 1. The Frequency Display (Visualizer)
- **Crossover Handles**: Vertical bars you can drag to set the split points (Low/Mid and Mid/High).
- **Spectrum Analyzer**: Shows the real-time energy of the input signal.
- **Phase Response**: (If enabled) shows the phase shift introduced by the filters.

### 2. Band Controls (Bottom Left)
- **Mute / Solo**: Essential for hearing what each frequency range sounds like in isolation.
- **Gain**: Adjusts the volume of the specific band.
- **Invert Phase**: Flips the polarity of the band.

### 3. Crossover Engine (Top Right)
- **Mode Switch**: **Linear Phase** (Transparent but latent), **Minimum Phase** (Analog style), or **Zero Latency**.
- **Slope Selector**: Sets the steepness of the split (6dB to 96dB per octave).
- **Freq Knobs**: Precise entry for the split frequencies.

### 4. Routing Matrix (Bottom Right)
- **Send to**: Routes the specific band to a different Mixer Track or Patcher output.

## Signal Flow
1. **Input**: Audio signal enters the plugin.
2. **Crossover Filters**: The signal is processed by Linkwitz-Riley or FFT filters based on the **Mode**.
3. **Split Logic**: The audio is duplicated into 3 parallel paths (Low, Mid, High).
4. **Gain/Phase Adjust**: Each path is modified by its individual gain and phase settings.
5. **Output Routing**: 
   - **Internal**: The bands are re-summed and sent to the plugin's main output.
   - **External**: Each band is sent to its designated Mixer Track or Patcher output.

## Things Beginners Misunderstand
- **"It sounds hollow at the split"**: This happens if you use **Zero Latency** mode with a low-slope filter. Phase shift at the crossover point causes cancellation. Switch to **Linear Phase** for a perfectly flat sum.
- **Latency**: In **Linear Phase** mode, the plugin adds a significant amount of delay. FL Studio's PDC will fix it, but it might feel "laggy" while recording live.
- **The "Output" Knobs**: These are not volume knobs for the plugin; they are routing selectors.

```

---

## FILE: 01-Learning\Concepts\02_Core_Techniques_And_Best_Practices.md

```markdown
# Core Techniques And Best Practices: Frequency Splitter

## 1. The "Indestructible" 808
Ensure your 808 bass has power in the club and grit on phones.
- **Technique**: Split at 120Hz.
- **Move**: Use a 48dB Slope. Route the **Low** band to a clean Mixer track. Route the **Mid/High** bands to a track with heavy distortion (Distructor).
- **Benefit**: You can crush the harmonics for phone-speaker clarity without ever losing the solid, clean sub-bass fundamental.

## 2. Dynamic High-End Air
Add reverb only to the "breath" of a vocal.
- **Technique**: Use a 2-band split at 5kHz.
- **Move**: Set **Low** band output to the main vocal track. Set **High** band output to a Reverb send.
- **Result**: The sibilance and air will have a beautiful tail, but the body of the vocal stays dry and punchy.

## 3. Mono-Sub Protocol
Guarantees your low-end is perfectly centered.
- **Technique**: Split at 150Hz.
- **Move**: On the **Low** band, use **Fruity Stereo Shaper** to force it to mono. Keep the Mids and Highs wide.
- **Verification**: Toggle the Master Mono button. The sub-bass should not change in volume at all.

## 4. Linear Phase Mastering
The most transparent way to clean a master.
- **Technique**: Select **Linear Phase** mode. Set Slope to **24dB**.
- **Move**: Use the **Gain** sliders on the bands to balance the mix.
- **Why**: This prevents the phase distortion that traditional EQs introduce when changing frequency balance.

## 5. Crossover Safety (Null Testing)
- **Protocol**: If you aren't sure if the splitter is "coloring" your sound.
- **Move**: Load two identical audio clips. Put Frequency Splitter on one. Invert the phase of the other. 
- **Goal**: If you hear silence (a perfect null), the splitter is 100% transparent. [SRC: REPUTABLE]

## Common Pitfalls + Fixes
| Pitfall | The Fix |
| :--- | :--- |
| **"Hollow" Midrange** | You are likely in **Minimum Phase** mode with a weird slope. Switch to **Linear Phase**. |
| **Pre-Ringing** | Linear Phase mode can make kicks sound "soft" before the hit. Switch to **Zero Latency** for drums. |
| **Out-of-Sync Audio** | Ensure **PDC (Plugin Delay Compensation)** is enabled in the FL Studio mixer. |

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Split_Translation_Guide.md

```markdown
# Vibe Translation Guide: Frequency Splitter

Using frequency bands to hit specific production vibe targets in Hip-Hop and R&B.

---

## 1. MOODY
*Darkness, weight, and "cloaked" textures.*
- **The Lever**: **Sub-Isolation + Parallel Darkening**.
- **Move**: Split at 200Hz. Route the Lows to a clean track. Route Mids/Highs to a track with a heavy Low-Pass filter and Reverb.
- **What to Listen For**: The sub-bass provides the "moody" weight, while the high-end vanishes into a dark atmospheric space.
- **Don't Do This**: High crossover points (loses the muffle).

## 2. UPBEAT
*Energy, sharp transients, and crystal-clear "sparkle".*
- **The Lever**: **Exciter-Band Split + Transient Shaping**.
- **Move**: Split at 5kHz. Apply an Exciter or Saturation ONLY to the High band. 
- **What to Listen For**: A "sparkling" top end that adds rhythmic energy to hi-hats and snares without making the mix harsh.
- **Don't Do This**: Muffling the high band (kills the energy).

## 3. PSYCHEDELIC
*Disorientation, shifting scales, and "liquid" space.*
- **The Lever**: **Automated Crossovers + Multi-Tap Delay**.
- **Move**: Automate the **Mid/High Crossover** point to sweep from 1kHz to 10kHz. Send the High band to a Ping-Pong Delay.
- **What to Listen For**: The "shimmer" of the sound seems to move up and down in frequency and bounce around the speakers.
- **Don't Do This**: Static crossover points.

## 4. JAZZY
*Warmth, dynamic transparency, and organic "flesh".*
- **The Lever**: **Low-Mid Warmth Split + Parallel Compression**.
- **Move**: Split at 400Hz and 2kHz. Apply gentle parallel compression to the Mid band only.
- **What to Listen For**: The "soul" of the Rhodes or Piano (in the mids) feels thick and consistent, while the air stays natural and dynamic.
- **Don't Do This**: Steep 96dB slopes (sounds too digital).

## 5. VIBEY
*Modern luxury, smooth silk, and "expensive" width.*
- **The Lever**: **Air-Splitting + 100% Stereo Separation**.
- **Move**: Split at 8kHz. Set the High band to 100% Stereo Separation (Wide).
- **What to Listen For**: A "silky" halo that wraps around the listener's head, making the track feel like a high-budget R&B record.
- **Don't Do This**: Widening the Low band (ruins the professional focus).

---

## Vibe Split Parameter Matrix
| Vibe | Bands | Slope | Mode | High Band Focus |
| :--- | :--- | :--- | :--- | :--- |
| **Moody** | 2 | 48dB | Linear Phase | Dark Filtered |
| **Upbeat** | 3 | 24dB | Zero Latency | Saturated |
| **Psyched** | 3 | 12dB | Min Phase | Sweeping Delay |
| **Jazzy** | 2 | 6dB | Linear Phase | Natural |
| **Vibey** | 3 | 24dB | Linear Phase | Ultra Wide |

```

---

## FILE: 01-Learning\Quick-Reference\band-splitting-cheat-sheet.md

```markdown
# Frequency Splitter Band Cheat Sheet

| Parameter | Function | Notes |
| :--- | :--- | :--- |
| **Bands** | 2 or 3 | Choose between Low/High or Low/Mid/High splitting. |
| **Crossover 1** | Cutoff Frequency | Defines the boundary between Low and Mid/High. |
| **Crossover 2** | Cutoff Frequency | Defines the boundary between Mid and High (in 3-band mode). |
| **Slope** | 6, 12, 24, 36, 48, 72, 96 dB/oct | Steepness of the crossover filters. |
| **Mode** | IIR vs. Linear Phase | IIR is low latency; Linear Phase preserves phase but adds latency. |
| **Input Gain** | Drive | Adjust signal level before splitting. |

```

---

## FILE: 01-Learning\Quick-Reference\crossover-modes-explained.md

```markdown
# Quick Reference: Crossover Modes Explained

Choosing between Linear Phase, Minimum Phase, and Zero Latency. [SRC: IL-MAN]

## 1. Linear Phase (Mastering Grade)
- **Physics**: Uses FFT processing to shift frequencies without shifting phase.
- **The Good**: Perfectly flat frequency response at the crossover points. No "hollow" sound.
- **The Bad**: Introduces significant latency (delay). Can cause "Pre-Ringing" (a soft "thud" before a sharp kick drum hit).
- **Best For**: Final mixing, mastering, and melodic instruments.

## 2. Zero Latency (Performance Grade)
- **Physics**: Standard IIR filtering.
- **The Good**: No delay. Instant response.
- **The Bad**: Causes "Phase Rotation" at the crossover point. If you split and re-sum without processing, you might hear a small dip in volume at the frequency split.
- **Best For**: Live tracking, recording, and CPU-heavy projects.

## 3. Minimum Phase (The "Analog" Choice)
- **Physics**: Traditional filter logic.
- **The Good**: Mimics the behavior of high-end hardware crossovers. No pre-ringing.
- **The Bad**: Significant phase shift at the crossover points.
- **Best For**: Creative sound design where "vibe" is more important than technical transparency.

---
**Rule of Thumb**: Use **Linear Phase** for finishing a track; use **Zero Latency** for starting a track.

```

---

## FILE: 01-Learning\Quick-Reference\parameter-cheat-sheet.md

```markdown
# Parameter Cheat Sheet: Frequency Splitter

The essential modifiers for the multiband routing engine. [SRC: IL-MAN]

---

## 🎛️ The Split Engine
- **Low / High Cutoff**: The frequency knobs that set the "border" between bands.
- **Slope (dB/oct)**: How steep the border is.
  - *6dB*: Extremely blurry (good for transparency).
  - *96dB*: Like a concrete wall (good for isolation).
- **Mode Selector**: Linear Phase, Minimum Phase, Zero Latency.

## 📐 Band Modifiers
- **M (Mute)**: Silences the band.
- **S (Solo)**: Silences all *other* bands.
- **Gain**: Adjusts the volume of that specific band.
- **Inv (Phase)**: Flips the polarity of the band.

## 🔗 Routing Matrix
- **Send To**: Selects which Mixer Track or Patcher node the band is sent to.
  - *Internal*: Stays within the plugin instance.
  - *External*: Leaves the plugin for external processing.
```

---

## FILE: 02-Data\parameters\frequency-splitter-params.json

```json
{
  "plugin_name": "Frequency Splitter",
  "category": "Utility / Mixing",
  "engine": "Linear & Minimum Phase FFT/IIR",
  "parameters": [
    {
      "name": "Cutoff Freq",
      "type": "knob",
      "unit": "Hz",
      "description": "Sets the boundary between frequency bands.",
      "vibe_impact": "Spectral focus, darkness vs brightness"
    },
    {
      "name": "Slope",
      "type": "selector",
      "values": ["6dB", "12dB", "24dB", "48dB", "96dB"],
      "vibe_impact": "Isolation vs Blurring"
    },
    {
      "name": "Mode",
      "type": "selector",
      "values": ["Linear Phase", "Min Phase", "Zero Latency"],
      "vibe_impact": "Transparency vs Pumping"
    }
  ],
  "mix_impact_tags": ["phase", "routing", "multiband"]
}

```

---

## FILE: 02-Data\parameters\splitter-specs.json

```json
{
  "plugin": {
    "name": "Frequency Splitter",
    "category": "Utility",
    "type": "Crossover / Splitter",
    "officialManual": "https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Frequency%20Splitter.htm"
  },
  "parameters": {
    "global": [
      {
        "id": "splitMode",
        "name": "Split Mode",
        "options": ["2 Bands", "3 Bands"],
        "description": "Determines the number of frequency ranges."
      },
      {
        "id": "engineMode",
        "name": "Engine Mode",
        "options": ["Minimum Phase (IIR)", "Linear Phase"],
        "description": "IIR for zero-latency; Linear Phase for phase-perfect recombination."
      }
    ],
    "crossovers": [
      {
        "id": "xo1",
        "name": "Low-Mid Crossover",
        "range": "20Hz to 20kHz",
        "default": "200Hz"
      },
      {
        "id": "xo2",
        "name": "Mid-High Crossover",
        "range": "20Hz to 20kHz",
        "default": "3000Hz"
      },
      {
        "id": "slope",
        "name": "Slope",
        "options": [6, 12, 18, 24, 30, 36, 48, 60, 72, 84, 96],
        "unit": "dB/oct"
      }
    ],
    "perBand": [
      "Mute", "Solo", "Gain", "Pan", "Output Send"
    ]
  },
  "sweetSpots": {
    "subIsolation": "120-180Hz",
    "vocalPresence": "2.5k-4kHz",
    "highAir": "8k-12kHz"
  }
}
```

---

## FILE: 02-Data\presets\INDEX.md

```markdown
# Frequency Splitter Presets Index

## Genre Presets (10 files)
| File | Name | Genre | Mood |
|------|------|-------|------|
| `genre/01-trap-multiband.json` | Trap Multiband Chain | trap | dark |
| `genre/02-808-focus.json` | 808 Focus Split | hip-hop/rap | punchy |
| `genre/03-rnb-vocal.json` | R&B Vocal Chain | R&B | smooth |
| `genre/04-edm-bass-rush.json` | EDM Bass Rush | EDM | electric |
| `genre/05-lofi-degrade.json` | Lo-Fi Degradation | lo-fi | nostalgic |
| `genre/06-drill-sub.json` | Drill Sub Punishment | drill | dark |
| `genre/07-vocal-doubler.json` | Vocal Doubler Split | R&B | smooth |
| `genre/08-mix-bus.json` | Mix Bus Separation | mastering | transparent |
| `genre/09-parallel-distort.json` | Parallel Distortion Split | EDM | electric |
| `genre/10-kick-bass.json` | Kick/Bass Separation | EDM | punchy |

## Signature Presets (10 files)
| File | Artist | Style |
|------|--------|-------|
| `signature/metro-boomin-split.json` | Metro Boomin | Boomin Separation |
| `signature/mike-will-split.json` | Mike Will Made-It | Future Bass Split |
| `signature/travis-scott-split.json` | Travis Scott | Astro Sphere Split |
| `signature/zaytoven-split.json` | Zaytoven | ATL Keys Split |
| `signature/drake-split.json` | Drake | OVO Vocal Focus |
| `signature/21-savage-split.json` | 21 Savage | Monolith Sub Split |
| `signature/wheezy-split.json` | Wheezy | Paperboy Texture Split |
| `signature/the-weeknd-split.json` | The Weeknd | Night Drive Split |
| `signature/just-blaze-split.json` | Just Blaze | Soul Clarity Split |
| `signature/timbaland-split.json` | Timbaland | Beat Break Split |

## Total: 20 preset files

```

---

## FILE: 02-Data\presets\genre-presets.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "genres": ["hip-hop/rap", "R&B", "EDM", "trap", "lo-fi", "drill"],
    "description": "Genre-aware presets for Frequency Splitter multiband processing"
  },
  "presets": {
    "trap-multiband": {
      "name": "Trap Multiband Chain",
      "genre": "trap",
      "mood": "dark",
      "settings": {
        "crossover1": 200,
        "crossover2": 3000,
        "slope": "24dB/oct",
        "mode": "linear-phase",
        "band1": {
          "gain": 0,
          "processing": "high-pass 30Hz"
        },
        "band2": {
          "gain": 3,
          "processing": "frequency shifter down 100Hz, 25% mix"
        },
        "band3": {
          "gain": -2,
          "processing": "high-pass 4kHz"
        }
      },
      "chain": {
        "pre": ["Instance 1: Sub/bass band"],
        "post": ["Instance 2: High band with transient enhancement"]
      },
      "workflow": "Use two instances: one for bass (cros 200Hz) with sub enhancement, one for highs (cros 3kHz) with air enhancement.",
      "genreTags": ["trap", "dark", "multiband", "processing"],
      "a/bTesting": {
        "testA": "Linear phase for transparency",
        "testB": "Butterworth slope for character"
      },
      "troubleshooting": {
        "phaseIssues: Use linear phase mode",
        "crosstalk: Increase crossover spacing"
      }
    },
    "hip-hop-bass-focus": {
      "name": "808 Focus Split",
      "genre": "hip-hop/rap",
      "mood": "punchy",
      "settings": {
        "crossover1": 150,
        "crossover2": 800,
        "slope": "12dB/oct",
        "mode": "minimum-phase",
        "band1": {
          "gain": 2,
          "processing": "sub-only, high-pass 25Hz"
        },
        "band2": {
          "gain": -1,
          "processing": "mid-focus, 200-800Hz"
        },
        "band3": {
          "gain": 0,
          "processing": "high-pass 3kHz"
        }
      },
      "chain": {
        "pre": ["Band 1: Sub frequency processing"],
        "post": ["Fruity Limiter - Band 2 focused"]
      },
      "workflow": "Three-way split for 808 processing. Band 1: pure sub, Band 2: mid punch, Band 3: high cutoff.",
      "genreTags": ["hip-hop/rap", "808", "bass", "punchy"],
      "a/bTesting": {
        "testA": "12dB/oct for musical overlap",
        "testB": "48dB/oct for sharp separation"
      },
      "troubleshooting": {
        "hollowSound: Increase band2 gain by 2dB",
        "muddy: Increase band1 crossover to 180Hz"
      }
    },
    "rb-vocal-chain": {
      "name": "R&B Vocal Chain",
      "genre": "R&B",
      "mood": "smooth",
      "settings": {
        "crossover1": 200,
        "crossover2": 4000,
        "slope": "24dB/oct",
        "mode": "linear-phase",
        "band1": {
          "gain": -2,
          "processing": "high-pass 80Hz"
        },
        "band2": {
          "gain": 1,
          "processing": "presence boost 3-5kHz"
        },
        "band3": {
          "gain": 0,
          "processing": "air boost 8kHz+"
        }
      },
      "chain": {
        "pre": ["Compression on all bands"],
        "post": ["De-esser on band 3 only"]
      },
      "workflow": "Vocal-specific split: Band 1 removes mud, Band 2 adds presence, Band 3 adds air. Apply before vocal chain.",
      "genreTags": ["R&B", "vocal", "smooth", "presence"],
      "a/bTesting": {
        "testA": "Linear phase for vocal transparency",
        "testB": "Minimum phase for punch"
      },
      "troubleshooting": {
        "harshVocals: Reduce band2 gain by 2dB",
        "sibilance: Increase de-esser threshold on band3"
      }
    },
    "edm-bass-rush": {
      "name": "EDM Bass Rush",
      "genre": "EDM",
      "mood": "electric",
      "settings": {
        "crossover1": 80,
        "crossover2": 200,
        "crossover3": 800,
        "slope": "24dB/oct",
        "mode": "linear-phase",
        "band1": {
          "gain": 3,
          "processing": "sub oscillator layer"
        },
        "band2": {
          "gain": 2,
          "processing": "distortion, drive 15%"
        },
        "band3": {
          "gain": 0,
          "processing": "bitcrusher, 16-bit"
        },
        "band4": {
          "gain": -1,
          "processing": "high-pass 2kHz"
        }
      },
      "chain": {
        "pre": ["Band 2 distortion"],
        "post": ["Limiter on band 1"]
      },
      "workflow": "Four-way split for bass Rush. Sub, grind, crunch, and air bands processed independently for maximum impact.",
      "genreTags": ["EDM", "bass", "rush", "electric"],
      "a/bTesting": {
        "testA": "Linear phase for clean bass",
        "testB": "Minimum phase for impact"
      },
      "troubleshooting": {
        "clipping: Reduce gains, increase limiter threshold",
        "weakSub: Increase band1 gain by 3dB"
      }
    },
    "lofi-degrade": {
      "name": "Lo-Fi Degradation",
      "genre": "lo-fi",
      "mood": "nostalgic",
      "settings": {
        "crossover1": 500,
        "crossover2": 3000,
        "slope": "12dB/oct",
        "mode": "minimum-phase",
        "band1": {
          "gain": -1,
          "processing": "bitcrusher 8-bit"
        },
        "band2": {
          "gain": 0,
          "processing": "saturation 5%"
        },
        "band3": {
          "gain": -2,
          "processing": "high-pass 6kHz"
        }
      },
      "chain": {
        "pre": ["Tape wobble on band1"],
        "post": ["Vinyl crackle on band2"]
      },
      "workflow": "Three-way lo-fi split. Lows get bitcrushed, mids saturated, highs rolled off for authentic degradation.",
      "genreTags": ["lo-fi", "nostalgic", "vintage", "degrade"],
      "a/bTesting": {
        "testA": "12dB/oct for smooth degradation",
        "testB": "48dB/oct for obvious bands"
      },
      "troubleshooting": {
        "tooNoisy: Reduce band1 bitcrusher to 12-bit",
        "NotLoFi: Increase tape wobble LFO rate"
      }
    },
    "drill-sub-punish": {
      "name": "Drill Sub Punishment",
      "genre": "drill",
      "mood": "dark",
      "settings": {
        "crossover1": 120,
        "slope": "24dB/oct",
        "mode": "minimum-phase",
        "band1": {
          "gain": 4,
          "processing": "extreme saturation 25%"
        },
        "band2": {
          "gain": 0,
          "processing": "high-pass 3kHz"
        }
      },
      "chain": {
        "pre": ["Distortion pedal style"],
        "post": ["Fruity Limiter - Heavy limiting"]
      },
      "workflow": "Two-way split for extreme sub processing. Heavy saturation on sub band creates grimy texture.",
      "genreTags": ["drill", "dark", "sub", "heavy"],
      "a/bTesting": {
        "testA": "24dB/oct sharp crossover",
        "testB": "12dB/oct musical overlap"
      },
      "troubleshooting": {
        "tooDistorted: Reduce saturation to 15%",
        "losingWeight: Increase band1 gain, reduce crossover"
      }
    },
    "vocal-doubler": {
      "name": "Vocal Doubler Split",
      "genre": "R&B",
      "mood": "smooth",
      "settings": {
        "crossover1": 2000,
        "slope": "24dB/oct",
        "mode": "linear-phase",
        "band1": {
          "gain": 0,
          "processing": "original dry"
        },
        "band2": {
          "gain": 0,
          "processing": "pitch shift +5 cents, 35% mix"
        }
      },
      "chain": {
        "pre": ["Auto-Tune if needed"],
        "post": ["Reverb on combined signal"]
      },
      "workflow": "Create subtle doubling effect by pitch-shifting only high frequencies. More natural than full spectrum shift.",
      "genreTags": ["R&B", "vocal", "doubling", "smooth"],
      "a/bTesting": {
        "testA": "Linear phase for no phasiness",
        "testB": "Minimum phase for punch"
      },
      "troubleshooting": {
        "phasing: Use linear phase, reduce mix to 25%",
        "notHearing: Increase pitch shift to 8 cents"
      }
    },
    "mix-bus-separate": {
      "name": "Mix Bus Separation",
      "genre": "mastering",
      "mood": "transparent",
      "settings": {
        "crossover1": 80,
        "crossover2": 400,
        "crossover3": 3000,
        "slope": "24dB/oct",
        "mode": "linear-phase",
        "band1": {
          "gain": 0,
          "processing": "high-pass 30Hz"
        },
        "band2": {
          "gain": 0,
          "processing": "mid focus"
        },
        "band3": {
          "gain": 0,
          "processing": "presence band"
        },
        "band4": {
          "gain": 0,
          "processing": "air band"
        }
      },
      "chain": {
        "pre": ["Individual band compression"],
        "post": ["Multi-band limiting"]
      },
      "workflow": "Mastering-grade split for mix processing. Each band can be compressed/limited independently for transparent control.",
      "genreTags": ["mastering", "mixing", "transparent", "separation"],
      "a/bTesting": {
        "testA": "Linear phase for mastering",
        "testB": "Minimum phase for mixing"
      },
      "troubleshooting": {
        "phaseIssues: Always use linear phase for mastering",
        "crosstalk: Increase crossover spacing"
      }
    },
    "parallel-distort": {
      "name": "Parallel Distortion Split",
      "genre": "EDM",
      "mood": "electric",
      "settings": {
        "crossover1": 500,
        "crossover2": 2000,
        "slope": "24dB/oct",
        "mode": "minimum-phase",
        "band1": {
          "gain": -6,
          "processing": "clean low-end"
        },
        "band2": {
          "gain": 6,
          "processing": "heavy distortion"
        },
        "band3": {
          "gain": 0,
          "processing": "crisp highs"
        }
      },
      "chain": {
        "pre": ["Clean band for foundation"],
        "post": ["Recombine with parallel routing"]
      },
      "workflow": "Create parallel distortion effect. Clean lows + distorted mids + crisp highs for maximum impact.",
      "genreTags": ["EDM", "distortion", "parallel", "electric"],
      "a/bTesting": {
        "testA": "Minimum phase for impact",
        "testB": "Linear phase for transparency"
      },
      "troubleshooting": {
        "tooDirty: Reduce band2 gain by 6dB",
        "thinSound: Increase band1 gain by 3dB"
      }
    },
    "kick-bass-split": {
      "name": "Kick/Bass Separation",
      "genre": "EDM",
      "mood": "punchy",
      "settings": {
        "crossover1": 80,
        "slope": "48dB/oct",
        "mode": "minimum-phase",
        "band1": {
          "gain": 0,
          "processing": "kick: 40-80Hz focus"
        },
        "band2": {
          "gain": 0,
          "processing": "bass: 80-200Hz focus"
        }
      },
      "chain": {
        "pre": ["Kick transient processing"],
        "post": ["Sidechain kick to bass"]
      },
      "workflow": "Sharp 48dB/oct split for clean kick/bass separation. Apply sidechain compression between bands for clean crossover.",
      "genreTags": ["EDM", "kick", "bass", "separation"],
      "a/bTesting": {
        "testA": "48dB/oct for maximum separation",
        "testB": "24dB/oct for musical overlap"
      },
      "troubleshooting": {
        "muddyKick: Increase crossover to 100Hz",
        "holesInSound: Reduce crossover to 60Hz"
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
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "description": "Artist and production style inspired presets for Frequency Splitter"
  },
  "presets": {
    "metro-boomin-separation": {
      "name": "Boomin Separation",
      "inspiredBy": "Metro Boomin mix clarity",
      "settings": {
        "crossover1": 150,
        "crossover2": 4000,
        "slope": "24dB/oct",
        "mode": "linear-phase",
        "band1": {
          "gain": 1,
          "processing": "sub enhancement"
        },
        "band2": {
          "gain": 0,
          "processing": "vocal clarity"
        },
        "band3": {
          "gain": -1,
          "processing": "air boost"
        }
      },
      "chain": {
        "pre": ["Sub-focused processing"],
        "post": ["Vocal chain on band2"]
      },
      "workflow": "Professional three-way split for modern hip-hop clarity. Sub band gets enhancement, vocal band gets clarity, highs tamed.",
      "characteristics": ["clear", "modern", "professional", "punchy"],
      "genreTags": ["hip-hop/rap", "trap", "modern"],
      "a/bTesting": {
        "testA": "Linear phase for transparency",
        "testB": "Minimum phase for punch"
      },
      "troubleshooting": {
        "muddy: Increase band1 crossover to 180Hz",
        "vocalThin: Increase band2 gain by 2dB"
      }
    },
    "mike-will-future-bass": {
      "name": "Future Bass Split",
      "inspiredBy": "Mike Will Made-It future bass",
      "settings": {
        "crossover1": 100,
        "crossover2": 200,
        "crossover3": 3000,
        "slope": "24dB/oct",
        "mode": "linear-phase",
        "band1": {
          "gain": 2,
          "processing": "sub swell"
        },
        "band2": {
          "gain": 3,
          "processing": "supersaw layering"
        },
        "band3": {
          "gain": 1,
          "processing": "pluck emphasis"
        },
        "band4": {
          "gain": 0,
          "processing": "sibilance control"
        }
      },
      "chain": {
        "pre": ["Band-specific processing"],
        "post": ["Master bus processing"]
      },
      "workflow": "Four-way future bass split. Each layer processed independently for maximum presence and width.",
      "characteristics": ["wide", "bright", "futuristic", "layered"],
      "genreTags": ["EDM", "future bass", "electric"],
      "a/bTesting": {
        "testA": "Linear phase for wide stereo",
        "testB": "Minimum phase for mono compatibility"
      },
      "troubleshooting": {
        "phasey: Use linear phase consistently",
        "muddyBass: Increase band1 crossover to 120Hz"
      }
    },
    "travis-scott-atmosphere": {
      "name": "Astro Sphere Split",
      "inspiredBy": "Travis Scott atmospheric density",
      "settings": {
        "crossover1": 200,
        "crossover2": 2000,
        "slope": "12dB/oct",
        "mode": "linear-phase",
        "band1": {
          "gain": 0,
          "processing": "sub weight"
        },
        "band2": {
          "gain": 1,
          "processing": "reverb wash"
        },
        "band3": {
          "gain": 2,
          "processing": "high texture"
        }
      },
      "chain": {
        "pre": ["Band2 reverb processing"],
        "post": ["Band3 shimmer enhancement"]
      },
      "workflow": "Three-way split for atmospheric density. Band 2 handles atmospheric reverb, Band 3 adds high-frequency texture.",
      "characteristics": ["spacey", "atmospheric", "dense", "textured"],
      "genreTags": ["hip-hop/rap", "trap", "atmospheric"],
      "a/bTesting": {
        "testA": "12dB/oct for smooth blending",
        "testB": "24dB/oct for distinct bands"
      },
      "troubleshooting": {
        "tooHarsh: Reduce band3 gain by 2dB",
        "washy: Reduce band2 reverb time"
      }
    },
    "zaytoven-keys": {
      "name": "ATL Keys Split",
      "inspiredBy": "Zaytoven piano warmth",
      "settings": {
        "crossover1": 300,
        "crossover2": 4000,
        "slope": "24dB/oct",
        "mode": "minimum-phase",
        "band1": {
          "gain": 1,
          "processing": "warm low-end"
        },
        "band2": {
          "gain": 0,
          "processing": "vocal frequency focus"
        },
        "band3": {
          "gain": -1,
          "processing": "smooth high-end"
        }
      },
      "chain": {
        "pre": ["Warm processing on band1"],
        "post": ["Tape saturation on all bands"]
      },
      "workflow": "Three-way piano/keys split with warmth focus. Band 1 adds warmth, Band 3 removes harshness for smooth tones.",
      "characteristics": ["warm", "smooth", "classic", "piano"],
      "genreTags": ["hip-hop/rap", "R&B", "piano"],
      "a/bTesting": {
        "testA": "Minimum phase for warmth",
        "testB": "Linear phase for transparency"
      },
      "troubleshooting": {
        "harshHighs: Increase band3 attenuation",
        "muddy: Increase band1 crossover to 350Hz"
      }
    },
    "drake-vocal-focus": {
      "name": "OVO Vocal Focus",
      "inspiredBy": "Drone vocal prominence",
      "settings": {
        "crossover1": 250,
        "crossover2": 5000,
        "slope": "24dB/oct",
        "mode": "linear-phase",
        "band1": {
          "gain": -2,
          "processing": "sub reduction"
        },
        "band2": {
          "gain": 2,
          "processing": "presence boost 2-5kHz"
        },
        "band3": {
          "gain": 1,
          "processing": "air boost 8kHz+"
        }
      },
      "chain": {
        "pre": ["Vocal chain on band2"],
        "post": ["De-esser on band3"]
      },
      "workflow": "Vocal-focused split for maximum clarity. Sub reduction makes space, presence boost cuts through mix.",
      "characteristics": ["clear", "prominent", "polished", "vocal"],
      "genreTags": ["hip-hop/rap", "R&B", "vocal"],
      "a/bTesting": {
        "testA": "Linear phase for vocal truth",
        "testB": "Minimum phase for punch"
      },
      "troubleshooting": {
        "vocalMasking: Increase band1 reduction",
        "sibilance: Adjust de-esser on band3"
      }
    },
    "21-savage-sub": {
      "name": "Monolith Sub Split",
      "inspiredBy": "21 Savage deep sub aesthetic",
      "settings": {
        "crossover1": 100,
        "slope": "24dB/oct",
        "mode": "minimum-phase",
        "band1": {
          "gain": 3,
          "processing": "extreme low enhancement"
        },
        "band2": {
          "gain": 0,
          "processing": "high-pass 150Hz"
        }
      },
      "chain": {
        "pre": ["Saturation on band1"],
        "post": ["Heavy limiting on band1"]
      },
      "workflow": "Two-way split focused on sub dominance. Heavy processing on sub band for monolithic low-end presence.",
      "characteristics": ["deep", "heavy", "monolithic", "dark"],
      "genreTags": ["hip-hop/rap", "drill", "dark trap"],
      "a/bTesting": {
        "testA": "Minimum phase for impact",
        "testB": "Linear phase for extension"
      },
      "troubleshooting": {
        "clipping: Reduce band1 gain to 2dB",
        "notDeep: Increase crossover to 80Hz"
      }
    },
    "wheezy-bass-texture": {
      "name": "Paperboy Texture Split",
      "inspiredBy": "Wheezy ATL bass texture",
      "settings": {
        "crossover1": 200,
        "crossover2": 1500,
        "slope": "24dB/oct",
        "mode": "minimum-phase",
        "band1": {
          "gain": 1,
          "processing": "punch"
        },
        "band2": {
          "gain": 2,
          "processing": "texture/grind"
        },
        "band3": {
          "gain": 0,
          "processing": "high-pass 4kHz"
        }
      },
      "chain": {
        "pre": ["Distortion on band2"],
        "post": ["Compression on band1"]
      },
      "workflow": "Three-way ATL bass split. Band 2 gets texture processing for characteristic Wheezy grind.",
      "characteristics": ["textured", "ATL", "grindy", "bright"],
      "genreTags": ["hip-hop/rap", "trap", "ATL"],
      "a/bTesting": {
        "testA": "Minimum phase for impact",
        "testB": "Linear phase for clarity"
      },
      "troubleshooting": {
        "tooGrindy: Reduce band2 gain by 2dB",
        "muddy: Increase band1 crossover to 250Hz"
      }
    },
    "the-weeknd-retro": {
      "name": "Night Drive Split",
      "inspiredBy": "The Weeknd 80s retro",
      "settings": {
        "crossover1": 400,
        "crossover2": 3000,
        "slope": "12dB/oct",
        "mode": "linear-phase",
        "band1": {
          "gain": 0,
          "processing": "warm low-end"
        },
        "band2": {
          "gain": -1,
          "processing": "vintage mid"
        },
        "band3": {
          "gain": 0,
          "processing": "80s air"
        }
      },
      "chain": {
        "pre": ["Tape saturation on band1"],
        "post": ["Vintage EQ on band3"]
      },
      "workflow": "Three-way 80s retro split. Band 1 warmth, Band 2 vintage mids, Band 3 controlled air for authentic retro sound.",
      "characteristics": ["retro", "warm", "80s", "nostalgic"],
      "genreTags": ["R&B", "synthwave", "retro"],
      "a/bTesting": {
        "testA": "Linear phase for authentic reproduction",
        "testB": "12dB/oct for smooth blending"
      },
      "troubleshooting": {
        "tooModern: Increase tape saturation",
        "notRetro: Add chorus on band2"
      }
    },
    "just-blaze-soul": {
      "name": "Soul Clarity Split",
      "inspiredBy": "Just Blaze soulful clarity",
      "settings": {
        "crossover1": 200,
        "crossover2": 2500,
        "slope": "24dB/oct",
        "mode": "linear-phase",
        "band1": {
          "gain": 1,
          "processing": "warm foundation"
        },
        "band2": {
          "gain": 0,
          "processing": "vocal/natural clarity"
        },
        "band3": {
          "gain": -1,
          "processing": "smooth highs"
        }
      },
      "chain": {
        "pre": ["Vintage compression on band1"],
        "post": ["Natural reverb on band2"]
      },
      "workflow": "Three-way soulful split. Warm foundation, natural vocal clarity, smooth highs for timeless soul sound.",
      "characteristics": ["warm", "clear", "soulful", "timeless"],
      "genreTags": ["hip-hop/rap", "R&B", "soulful"],
      "a/bTesting": {
        "testA": "Linear phase for vocal truth",
        "testB": "Minimum phase for warmth"
      },
      "troubleshooting": {
        "harshVocals: Reduce band3 gain by 2dB",
        "muddy: Increase band1 crossover to 250Hz"
      }
    },
    "timbaland-experimental": {
      "name": "Beat Break Split",
      "inspiredBy": "Timbaland experimental",
      "settings": {
        "crossover1": 300,
        "crossover2": 1500,
        "crossover3": 4000,
        "slope": "24dB/oct",
        "mode": "minimum-phase",
        "band1": {
          "gain": -2,
          "processing": "unconventional low"
        },
        "band2": {
          "gain": 3,
          "processing": "rhythmic mid"
        },
        "band3": {
          "gain": 1,
          "processing": "textured high"
        },
        "band4": {
          "gain": 2,
          "processing": "air/shimmer"
        }
      },
      "chain": {
        "pre": ["Unique processing per band"],
        "post": ["Creative effects on band4"]
      },
      "workflow": "Four-way experimental split. Each band gets unique processing for unconventional Timbaland-style soundscapes.",
      "characteristics": ["experimental", "unconventional", "forward", "textured"],
      "genreTags": ["hip-hop/rap", "experimental", "innovative"],
      "a/bTesting": {
        "testA": "Minimum phase for impact",
        "testB": "Linear phase for transparency"
      },
      "troubleshooting": {
        "tooWeird: Reduce gains by half",
        "notExperimental: Increase processing diversity"
      }
    }
  }
}

```

---

## FILE: 02-Data\presets\genre\01-trap-multiband.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Trap Multiband Chain",
    "category": "genre",
    "genre": "trap",
    "mood": "dark"
  },
  "settings": {
    "crossover1": 200,
    "crossover2": 3000,
    "slope": "24dB/oct",
    "mode": "linear-phase",
    "band1": { "gain": 0, "processing": "high-pass 30Hz" },
    "band2": { "gain": 3, "processing": "frequency shifter down 100Hz, 25% mix" },
    "band3": { "gain": -2, "processing": "high-pass 4kHz" }
  },
  "chain": {
    "pre": ["Instance 1: Sub/bass band"],
    "post": ["Instance 2: High band with transient enhancement"]
  },
  "workflow": "Use two instances: one for bass (cros 200Hz) with sub enhancement, one for highs (cros 3kHz) with air enhancement.",
  "genreTags": ["trap", "dark", "multiband", "processing"],
  "a/bTesting": {
    "testA": "Linear phase for transparency",
    "testB": "Butterworth slope for character"
  },
  "troubleshooting": {
    "phaseIssues": "Use linear phase mode",
    "crosstalk": "Increase crossover spacing"
  }
}

```

---

## FILE: 02-Data\presets\genre\02-808-focus.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "808 Focus Split",
    "category": "genre",
    "genre": "hip-hop/rap",
    "mood": "punchy"
  },
  "settings": {
    "crossover1": 150,
    "crossover2": 800,
    "slope": "12dB/oct",
    "mode": "minimum-phase",
    "band1": { "gain": 2, "processing": "sub-only, high-pass 25Hz" },
    "band2": { "gain": -1, "processing": "mid-focus, 200-800Hz" },
    "band3": { "gain": 0, "processing": "high-pass 3kHz" }
  },
  "chain": {
    "pre": ["Band 1: Sub frequency processing"],
    "post": ["Fruily Limiter - Band 2 focused"]
  },
  "workflow": "Three-way split for 808 processing. Band 1: pure sub, Band 2: mid punch, Band 3: high cutoff.",
  "genreTags": ["hip-hop/rap", "808", "bass", "punchy"],
  "a/bTesting": {
    "testA": "12dB/oct for musical overlap",
    "testB": "48dB/oct for sharp separation"
  },
  "troubleshooting": {
    "hollowSound": "Increase band2 gain by 2dB",
    "muddy": "Increase band1 crossover to 180Hz"
  }
}

```

---

## FILE: 02-Data\presets\genre\03-rnb-vocal.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "R&B Vocal Chain",
    "category": "genre",
    "genre": "R&B",
    "mood": "smooth"
  },
  "settings": {
    "crossover1": 200,
    "crossover2": 4000,
    "slope": "24dB/oct",
    "mode": "linear-phase",
    "band1": { "gain": -2, "processing": "high-pass 80Hz" },
    "band2": { "gain": 1, "processing": "presence boost 3-5kHz" },
    "band3": { "gain": 0, "processing": "air boost 8kHz+" }
  },
  "chain": {
    "pre": ["Compression on all bands"],
    "post": ["De-esser on band 3 only"]
  },
  "workflow": "Vocal-specific split: Band 1 removes mud, Band 2 adds presence, Band 3 adds air. Apply before vocal chain.",
  "genreTags": ["R&B", "vocal", "smooth", "presence"],
  "a/bTesting": {
    "testA": "Linear phase for vocal transparency",
    "testB": "Minimum phase for punch"
  },
  "troubleshooting": {
    "harshVocals": "Reduce band2 gain by 2dB",
    "sibilance": "Increase de-esser threshold on band3"
  }
}

```

---

## FILE: 02-Data\presets\genre\04-edm-bass-rush.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "EDM Bass Rush",
    "category": "genre",
    "genre": "EDM",
    "mood": "electric"
  },
  "settings": {
    "crossover1": 80,
    "crossover2": 200,
    "crossover3": 800,
    "slope": "24dB/oct",
    "mode": "linear-phase",
    "band1": { "gain": 3, "processing": "sub oscillator layer" },
    "band2": { "gain": 2, "processing": "distortion, drive 15%" },
    "band3": { "gain": 0, "processing": "bitcrusher, 16-bit" },
    "band4": { "gain": -1, "processing": "high-pass 2kHz" }
  },
  "chain": {
    "pre": ["Band 2 distortion"],
    "post": ["Limiter on band 1"]
  },
  "workflow": "Four-way split for bass Rush. Sub, grind, crunch, and air bands processed independently for maximum impact.",
  "genreTags": ["EDM", "bass", "rush", "electric"],
  "a/bTesting": {
    "testA": "Linear phase for clean bass",
    "testB": "Minimum phase for impact"
  },
  "troubleshooting": {
    "clipping": "Reduce gains, increase limiter threshold",
    "weakSub": "Increase band1 gain by 3dB"
  }
}

```

---

## FILE: 02-Data\presets\genre\05-lofi-degrade.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Lo-Fi Degradation",
    "category": "genre",
    "genre": "lo-fi",
    "mood": "nostalgic"
  },
  "settings": {
    "crossover1": 500,
    "crossover2": 3000,
    "slope": "12dB/oct",
    "mode": "minimum-phase",
    "band1": { "gain": -1, "processing": "bitcrusher 8-bit" },
    "band2": { "gain": 0, "processing": "saturation 5%" },
    "band3": { "gain": -2, "processing": "high-pass 6kHz" }
  },
  "chain": {
    "pre": ["Tape wobble on band1"],
    "post": ["Vinyl crackle on band2"]
  },
  "workflow": "Three-way lo-fi split. Lows get bitcrushed, mids saturated, highs rolled off for authentic degradation.",
  "genreTags": ["lo-fi", "nostalgic", "vintage", "degrade"],
  "a/bTesting": {
    "testA": "12dB/oct for smooth degradation",
    "testB": "48dB/oct for obvious bands"
  },
  "troubleshooting": {
    "tooNoisy": "Reduce band1 bitcrusher to 12-bit"
  }
}

```

---

## FILE: 02-Data\presets\genre\06-drill-sub.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Drill Sub Punishment",
    "category": "genre",
    "genre": "drill",
    "mood": "dark"
  },
  "settings": {
    "crossover1": 120,
    "slope": "24dB/oct",
    "mode": "minimum-phase",
    "band1": { "gain": 4, "processing": "extreme saturation 25%" },
    "band2": { "gain": 0, "processing": "high-pass 3kHz" }
  },
  "chain": {
    "pre": ["Distortion pedal style"],
    "post": ["Fruily Limiter - Heavy limiting"]
  },
  "workflow": "Two-way split for extreme sub processing. Heavy saturation on sub band creates grimy texture.",
  "genreTags": ["drill", "dark", "sub", "heavy"],
  "a/bTesting": {
    "testA": "24dB/oct sharp crossover",
    "testB": "12dB/oct musical overlap"
  },
  "troubleshooting": {
    "tooDistorted": "Reduce saturation to 15%",
    "losingWeight": "Increase band1 gain, reduce crossover"
  }
}

```

---

## FILE: 02-Data\presets\genre\07-vocal-doubler.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Vocal Doubler Split",
    "category": "genre",
    "genre": "R&B",
    "mood": "smooth"
  },
  "settings": {
    "crossover1": 2000,
    "slope": "24dB/oct",
    "mode": "linear-phase",
    "band1": { "gain": 0, "processing": "original dry" },
    "band2": { "gain": 0, "processing": "pitch shift +5 cents, 35% mix" }
  },
  "chain": {
    "pre": ["Auto-Tune if needed"],
    "post": ["Reverb on combined signal"]
  },
  "workflow": "Create subtle doubling effect by pitch-shifting only high frequencies. More natural than full spectrum shift.",
  "genreTags": ["R&B", "vocal", "doubling", "smooth"],
  "a/bTesting": {
    "testA": "Linear phase for no phasiness",
    "testB": "Minimum phase for punch"
  },
  "troubleshooting": {
    "phasing": "Use linear phase, reduce mix to 25%"
  }
}

```

---

## FILE: 02-Data\presets\genre\08-mix-bus.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Mix Bus Separation",
    "category": "genre",
    "genre": "mastering",
    "mood": "transparent"
  },
  "settings": {
    "crossover1": 80,
    "crossover2": 400,
    "crossover3": 3000,
    "slope": "24dB/oct",
    "mode": "linear-phase",
    "band1": { "gain": 0, "processing": "high-pass 30Hz" },
    "band2": { "gain": 0, "processing": "mid focus" },
    "band3": { "gain": 0, "processing": "presence band" },
    "band4": { "gain": 0, "processing": "air band" }
  },
  "chain": {
    "pre": ["Individual band compression"],
    "post": ["Multi-band limiting"]
  },
  "workflow": "Mastering-grade split for mix processing. Each band can be compressed/limited independently for transparent control.",
  "genreTags": ["mastering", "mixing", "transparent", "separation"],
  "a/bTesting": {
    "testA": "Linear phase for mastering",
    "testB": "Minimum phase for mixing"
  },
  "troubleshooting": {
    "phaseIssues": "Always use linear phase for mastering"
  }
}

```

---

## FILE: 02-Data\presets\genre\09-parallel-distort.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Parallel Distortion Split",
    "category": "genre",
    "genre": "EDM",
    "mood": "electric"
  },
  "settings": {
    "crossover1": 500,
    "crossover2": 2000,
    "slope": "24dB/oct",
    "mode": "minimum-phase",
    "band1": { "gain": -6, "processing": "clean low-end" },
    "band2": { "gain": 6, "processing": "heavy distortion" },
    "band3": { "gain": 0, "processing": "crisp highs" }
  },
  "chain": {
    "pre": ["Clean band for foundation"],
    "post": ["Recombine with parallel routing"]
  },
  "workflow": "Create parallel distortion effect. Clean lows + distorted mids + crisp highs for maximum impact.",
  "genreTags": ["EDM", "distortion", "parallel", "electric"],
  "a/bTesting": {
    "testA": "Minimum phase for impact",
    "testB": "Linear phase for transparency"
  },
  "troubleshooting": {
    "tooDirty": "Reduce band2 gain by 6dB",
    "thinSound": "Increase band1 gain by 3dB"
  }
}

```

---

## FILE: 02-Data\presets\genre\10-kick-bass.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Kick/Bass Separation",
    "category": "genre",
    "genre": "EDM",
    "mood": "punchy"
  },
  "settings": {
    "crossover1": 80,
    "slope": "48dB/oct",
    "mode": "minimum-phase",
    "band1": { "gain": 0, "processing": "kick: 40-80Hz focus" },
    "band2": { "gain": 0, "processing": "bass: 80-200Hz focus" }
  },
  "chain": {
    "pre": ["Kick transient processing"],
    "post": ["Sidechain kick to bass"]
  },
  "workflow": "Sharp 48dB/oct split for clean kick/bass separation. Apply sidechain compression between bands for clean crossover.",
  "genreTags": ["EDM", "kick", "bass", "separation"],
  "a/bTesting": {
    "testA": "48dB/oct for maximum separation",
    "testB": "24dB/oct for musical overlap"
  },
  "troubleshooting": {
    "muddyKick": "Increase crossover to 100Hz",
    "holesInSound": "Reduce crossover to 60Hz"
  }
}

```

---

## FILE: 02-Data\presets\signature\21-savage-split.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Monolith Sub Split",
    "category": "signature",
    "inspiredBy": "21 Savage deep sub aesthetic"
  },
  "settings": {
    "crossover1": 100,
    "slope": "24dB/oct",
    "mode": "minimum-phase",
    "band1": { "gain": 3, "processing": "extreme low enhancement" },
    "band2": { "gain": 0, "processing": "high-pass 150Hz" }
  },
  "chain": {
    "pre": ["Saturation on band1"],
    "post": ["Heavy limiting on band1"]
  },
  "workflow": "Two-way split focused on sub dominance. Heavy processing on sub band for monolithic low-end presence.",
  "characteristics": ["deep", "heavy", "monolithic", "dark"],
  "genreTags": ["hip-hop/rap", "drill", "dark trap"],
  "a/bTesting": {
    "testA": "Minimum phase for impact",
    "testB": "Linear phase for extension"
  },
  "troubleshooting": {
    "clipping": "Reduce band1 gain to 2dB"
  }
}

```

---

## FILE: 02-Data\presets\signature\drake-split.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "OVO Vocal Focus",
    "category": "signature",
    "inspiredBy": "Drone vocal prominence"
  },
  "settings": {
    "crossover1": 250,
    "crossover2": 5000,
    "slope": "24dB/oct",
    "mode": "linear-phase",
    "band1": { "gain": -2, "processing": "sub reduction" },
    "band2": { "gain": 2, "processing": "presence boost 2-5kHz" },
    "band3": { "gain": 1, "processing": "air boost 8kHz+" }
  },
  "chain": {
    "pre": ["Vocal chain on band2"],
    "post": ["De-esser on band3"]
  },
  "workflow": "Vocal-focused split for maximum clarity. Sub reduction makes space, presence boost cuts through mix.",
  "characteristics": ["clear", "prominent", "polished", "vocal"],
  "genreTags": ["hip-hop/rap", "R&B", "vocal"],
  "a/bTesting": {
    "testA": "Linear phase for vocal truth",
    "testB": "Minimum phase for punch"
  },
  "troubleshooting": {
    "vocalMasking": "Increase band1 reduction"
  }
}

```

---

## FILE: 02-Data\presets\signature\just-blaze-split.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Soul Clarity Split",
    "category": "signature",
    "inspiredBy": "Just Blaze soulful clarity"
  },
  "settings": {
    "crossover1": 200,
    "crossover2": 2500,
    "slope": "24dB/oct",
    "mode": "linear-phase",
    "band1": { "gain": 1, "processing": "warm foundation" },
    "band2": { "gain": 0, "processing": "vocal/natural clarity" },
    "band3": { "gain": -1, "processing": "smooth highs" }
  },
  "chain": {
    "pre": ["Vintage compression on band1"],
    "post": ["Natural reverb on band2"]
  },
  "workflow": "Three-way soulful split. Warm foundation, natural vocal clarity, smooth highs for timeless soul sound.",
  "characteristics": ["warm", "clear", "soulful", "timeless"],
  "genreTags": ["hip-hop/rap", "R&B", "soulful"],
  "a/bTesting": {
    "testA": "Linear phase for vocal truth",
    "testB": "Minimum phase for warmth"
  },
  "troubleshooting": {
    "harshVocals": "Reduce band3 gain by 2dB"
  }
}

```

---

## FILE: 02-Data\presets\signature\metro-boomin-split.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Boomin Separation",
    "category": "signature",
    "inspiredBy": "Metro Boomin mix clarity"
  },
  "settings": {
    "crossover1": 150,
    "crossover2": 4000,
    "slope": "24dB/oct",
    "mode": "linear-phase",
    "band1": { "gain": 1, "processing": "sub enhancement" },
    "band2": { "gain": 0, "processing": "vocal clarity" },
    "band3": { "gain": -1, "processing": "air boost" }
  },
  "chain": {
    "pre": ["Sub-focused processing"],
    "post": ["Vocal chain on band2"]
  },
  "workflow": "Professional three-way split for modern hip-hop clarity. Sub band gets enhancement, vocal band gets clarity, highs tamed.",
  "characteristics": ["clear", "modern", "professional", "punchy"],
  "genreTags": ["hip-hop/rap", "trap", "modern"],
  "a/bTesting": {
    "testA": "Linear phase for transparency",
    "testB": "Minimum phase for punch"
  },
  "troubleshooting": {
    "muddy": "Increase band1 crossover to 180Hz"
  }
}

```

---

## FILE: 02-Data\presets\signature\mike-will-split.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Future Bass Split",
    "category": "signature",
    "inspiredBy": "Mike Will Made-It future bass"
  },
  "settings": {
    "crossover1": 100,
    "crossover2": 200,
    "crossover3": 3000,
    "slope": "24dB/oct",
    "mode": "linear-phase",
    "band1": { "gain": 2, "processing": "sub swell" },
    "band2": { "gain": 3, "processing": "supersaw layering" },
    "band3": { "gain": 1, "processing": "pluck emphasis" },
    "band4": { "gain": 0, "processing": "sibilance control" }
  },
  "chain": {
    "pre": ["Band-specific processing"],
    "post": ["Master bus processing"]
  },
  "workflow": "Four-way future bass split. Each layer processed independently for maximum presence and width.",
  "characteristics": ["wide", "bright", "futuristic", "layered"],
  "genreTags": ["EDM", "future bass", "electric"],
  "a/bTesting": {
    "testA": "Linear phase for wide stereo",
    "testB": "Minimum phase for mono compatibility"
  },
  "troubleshooting": {
    "phasey": "Use linear phase consistently"
  }
}

```

---

## FILE: 02-Data\presets\signature\the-weeknd-split.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Night Drive Split",
    "category": "signature",
    "inspiredBy": "The Weeknd 80s retro"
  },
  "settings": {
    "crossover1": 400,
    "crossover2": 3000,
    "slope": "12dB/oct",
    "mode": "linear-phase",
    "band1": { "gain": 0, "processing": "warm low-end" },
    "band2": { "gain": -1, "processing": "vintage mid" },
    "band3": { "gain": 0, "processing": "80s air" }
  },
  "chain": {
    "pre": ["Tape saturation on band1"],
    "post": ["Vintage EQ on band3"]
  },
  "workflow": "Three-way 80s retro split. Band 1 warmth, Band 2 vintage mids, Band 3 controlled air for authentic retro sound.",
  "characteristics": ["retro", "warm", "80s", "nostalgic"],
  "genreTags": ["R&B", "synthwave", "retro"],
  "a/bTesting": {
    "testA": "Linear phase for authentic reproduction",
    "testB": "12dB/oct for smooth blending"
  },
  "troubleshooting": {
    "tooModern": "Increase tape saturation"
  }
}

```

---

## FILE: 02-Data\presets\signature\timbaland-split.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Beat Break Split",
    "category": "signature",
    "inspiredBy": "Timbaland experimental"
  },
  "settings": {
    "crossover1": 300,
    "crossover2": 1500,
    "crossover3": 4000,
    "slope": "24dB/oct",
    "mode": "minimum-phase",
    "band1": { "gain": -2, "processing": "unconventional low" },
    "band2": { "gain": 3, "processing": "rhythmic mid" },
    "band3": { "gain": 1, "processing": "textured high" },
    "band4": { "gain": 2, "processing": "air/shimmer" }
  },
  "chain": {
    "pre": ["Unique processing per band"],
    "post": ["Creative effects on band4"]
  },
  "workflow": "Four-way experimental split. Each band gets unique processing for unconventional Timbaland-style soundscapes.",
  "characteristics": ["experimental", "unconventional", "forward", "textured"],
  "genreTags": ["hip-hop/rap", "experimental", "innovative"],
  "a/bTesting": {
    "testA": "Minimum phase for impact",
    "testB": "Linear phase for transparency"
  },
  "troubleshooting": {
    "tooWeird": "Reduce gains by half"
  }
}

```

---

## FILE: 02-Data\presets\signature\travis-scott-split.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Astro Sphere Split",
    "category": "signature",
    "inspiredBy": "Travis Scott atmospheric density"
  },
  "settings": {
    "crossover1": 200,
    "crossover2": 2000,
    "slope": "12dB/oct",
    "mode": "linear-phase",
    "band1": { "gain": 0, "processing": "sub weight" },
    "band2": { "gain": 1, "processing": "reverb wash" },
    "band3": { "gain": 2, "processing": "high texture" }
  },
  "chain": {
    "pre": ["Band2 reverb processing"],
    "post": ["Band3 shimmer enhancement"]
  },
  "workflow": "Three-way split for atmospheric density. Band 2 handles atmospheric reverb, Band 3 adds high-frequency texture.",
  "characteristics": ["spacey", "atmospheric", "dense", "textured"],
  "genreTags": ["hip-hop/rap", "trap", "atmospheric"],
  "a/bTesting": {
    "testA": "12dB/oct for smooth blending",
    "testB": "24dB/oct for distinct bands"
  },
  "troubleshooting": {
    "tooHarsh": "Reduce band3 gain by 2dB"
  }
}

```

---

## FILE: 02-Data\presets\signature\wheezy-split.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "Paperboy Texture Split",
    "category": "signature",
    "inspiredBy": "Wheezy ATL bass texture"
  },
  "settings": {
    "crossover1": 200,
    "crossover2": 1500,
    "slope": "24dB/oct",
    "mode": "minimum-phase",
    "band1": { "gain": 1, "processing": "punch" },
    "band2": { "gain": 2, "processing": "texture/grind" },
    "band3": { "gain": 0, "processing": "high-pass 4kHz" }
  },
  "chain": {
    "pre": ["Distortion on band2"],
    "post": ["Compression on band1"]
  },
  "workflow": "Three-way ATL bass split. Band 2 gets texture processing for characteristic Wheezy grind.",
  "characteristics": ["textured", "ATL", "grindy", "bright"],
  "genreTags": ["hip-hop/rap", "trap", "ATL"],
  "a/bTesting": {
    "testA": "Minimum phase for impact",
    "testB": "Linear phase for clarity"
  },
  "troubleshooting": {
    "tooGrindy": "Reduce band2 gain by 2dB"
  }
}

```

---

## FILE: 02-Data\presets\signature\zaytoven-split.json

```json
{
  "metadata": {
    "plugin": "Frequency Splitter",
    "version": "1.0",
    "lastUpdated": "2026-02-03",
    "author": "JaZeR",
    "presetName": "ATL Keys Split",
    "category": "signature",
    "inspiredBy": "Zaytoven piano warmth"
  },
  "settings": {
    "crossover1": 300,
    "crossover2": 4000,
    "slope": "24dB/oct",
    "mode": "minimum-phase",
    "band1": { "gain": 1, "processing": "warm low-end" },
    "band2": { "gain": 0, "processing": "vocal frequency focus" },
    "band3": { "gain": -1, "processing": "smooth high-end" }
  },
  "chain": {
    "pre": ["Warm processing on band1"],
    "post": ["Tape saturation on all bands"]
  },
  "workflow": "Three-way piano/keys split with warmth focus. Band 1 adds warmth, Band 3 removes harshness for smooth tones.",
  "characteristics": ["warm", "smooth", "classic", "piano"],
  "genreTags": ["hip-hop/rap", "R&B", "piano"],
  "a/bTesting": {
    "testA": "Minimum phase for warmth",
    "testB": "Linear phase for transparency"
  },
  "troubleshooting": {
    "harshHighs": "Increase band3 attenuation"
  }
}

```

---

## FILE: 02-Data\rules\02_Crossover_Phase_Safety.md

```markdown
# Rules: Crossover & Phase Safety

How to use Frequency Splitter without destroying your mix. [SRC: REPUTABLE]

## 1. The "Resumming" Rule
- **Rule**: If you split audio into 3 bands and route them to different mixer tracks, **DO NOT** use different types of compressors or limiters on those tracks without testing.
- **Why**: Different plugins add different amounts of latency. If the Low band is 10 samples late compared to the Mid band, they will cancel each other out at the crossover frequency, creating a "hollow" sound.
- **Action**: Always use the **Patcher** method for complex multiband chains to ensure PDC handles the internal routing correctly.

## 2. Linear Phase Pre-Ringing
- **Rule**: Never use **Linear Phase** mode on a sharp Kick drum with a 96dB slope.
- **Verification**: If the kick sounds "smushy" or has a tiny "whoosh" sound right before it hits, you are hearing pre-ringing.
- **Fix**: Switch to **Zero Latency** mode or lower the slope to **24dB**.

## 3. Mono-Sub Protocol
- **Rule**: When splitting an 808 for saturation, the **Low** band crossover must be **Minimum Phase** or **Linear Phase**.
- **Move**: Set split point to 120Hz.
- **Goal**: To prevent the "Phase Rotation" of Zero Latency filters from weakening the sub-bass punch.

## 4. Modulation Safety
- **Rule**: If you automate the **Cutoff Frequency**, do not use **Linear Phase**.
- **Why**: FFT-based filters (Linear Phase) do not handle rapid movement well and will create digital "chirping" or clicks.
- **Fix**: Use **Minimum Phase** or **Zero Latency** for creative sweeps.

```

---

## FILE: 03-Workflows\by-goal\creating-multiband-effects.md

```markdown
# Goal Workflow: Creating Multiband Effects (Patcher Mode)

*Goal: Designing a custom multiband saturator that distorts only the mids, while leaving the highs and sub clean.*

## 🎛️ Routing Context
- **Setup**: Open **Patcher**.
- **Nodes**: Frequency Splitter -> 3 Parallel Paths -> Output.

## 🚶 Step-by-Step Setup
1. **The Split**:
   - Add **Frequency Splitter** inside Patcher.
   - Set to **3-Band** mode. 
   - Set Crossover 1 to **150Hz**. Set Crossover 2 to **5kHz**.
   - Select **Linear Phase** for transparency.
2. **Path 1 (Clean Lows)**:
   - Connect the **Low** output of the splitter directly to the Patcher Output.
3. **Path 2 (Dirty Mids)**:
   - Add a **Distructor** plugin. 
   - Connect the **Mid** output of the splitter to the input of Distructor.
   - Connect Distructor output to the Patcher Output.
   - *Move*: Crank the distortion! It won't touch your sub-bass.
4. **Path 3 (Silky Highs)**:
   - Add a **LuxeVerb**.
   - Connect the **High** output of the splitter to LuxeVerb.
   - Set LuxeVerb to 100% Wet.
   - Connect LuxeVerb to the Patcher Output.
5. **Phase Check**:
   - Bypass Distructor and LuxeVerb.
   - Toggle the split on/off. The sound should not change *at all*.
6. **Result**: A professional, multi-stage processing rack that is customized exactly for your instrument.

## 🔄 Variations
- **The "Widen Air"**: Replace LuxeVerb with **Stereo Shaper** on the High band.
- **The "808 Tightener"**: Place a **Fruity Limiter** only on the Low band to stabilize the sub.

## ⚠️ Pitfalls & Fixes
- **Problem**: The split sounds "phasy" when recombined.
- **Fix**: Ensure all plugins in the paths are **Zero Latency** or that Patcher's internal PDC is active.

```

---

## FILE: 03-Workflows\by-goal\multi-band-distortion-patcher.md

```markdown
# Multi-Band Distortion Workflow (Patcher)

## Goal
Apply heavy distortion to the mid-range of a bass synth while keeping the sub-frequencies clean and the highs crisp.

## Requirements
- **Patcher** (inserted on the mixer track).
- **Frequency Splitter**.
- **Fruity Blood Overdrive** (or your favorite distortion).

## Steps
1. **Patcher Routing:**
   - Load **Frequency Splitter** inside Patcher.
   - Set it to **3-Band Mode**.
   - Right-click the Splitter -> **Outputs** -> **Audio** -> Activate **Low**, **Mid**, and **High**.
2. **Frequency Alignment:**
   - Low/Mid Crossover: **180Hz**.
   - Mid/High Crossover: **3000Hz**.
3. **Processing the Mids:**
   - Add **Fruity Blood Overdrive**.
   - Connect the **Mid** output of the Splitter to the input of the Overdrive.
   - Connect the Overdrive output to the **Patcher Output**.
4. **Processing the Lows/Highs:**
   - Connect the **Low** output directly to the **Patcher Output** (Clean Sub).
   - Connect the **High** output directly to the **Patcher Output** (Clean Highs).
5. **Balancing:**
   - Adjust the **Mid Gain** on the Frequency Splitter if the distortion makes the mid-range too loud.
   - Use a **Fruity Limiter** at the very end of the Patcher chain to glue everything together.

## Pro Tip
You can also add a **Fruity Chorus** only to the High band to add width without making the bass muddy or losing mono compatibility in the sub.

```

---

## FILE: 03-Workflows\by-goal\parallel-multiband-processing.md

```markdown
# Parallel Multiband Processing Workflow

## Goal
Process the bass and high frequencies of a loop differently using Patcher or multiple mixer tracks.

## Steps
1. **Insert Frequency Splitter**: Place it as the first effect on your track.
2. **Configure Bands**: Set to **3-band mode** for maximum control.
3. **Set Crossovers**: 
    - Low/Mid: ~200Hz (to isolate the kick/bass).
    - Mid/High: ~3.5kHz (to isolate the snap/air).
4. **Route Outputs**: In the wrapper settings, route each band to a separate mixer track.
5. **Apply Effects**:
    - **Low Band**: Monofy and apply light distortion/saturation.
    - **Mid Band**: Apply compression to glue the rhythmic elements.
    - **High Band**: Apply stereo widening or reverb for "air".

## Pro Tip
Use **Linear Phase** mode when the splitter is on a master or sub-mix bus to ensure no phase rotation at the crossover points.

```

---

## FILE: 03-Workflows\by-goal\sub-bass-isolation.md

```markdown
# Goal Workflow: Sub-Bass Isolation (Club Control)

*Goal: Separating the sub-bass (80Hz and below) from the rest of the mix to apply surgical limiting and mono-correction.*

## 🎛️ Routing Context
- **Routing**: Bass/808 Track -> Frequency Splitter.
- **Mix Status**: 100% Wet.

## 🚶 Step-by-Step Setup
1. **Define the Sub**:
   - Set to **2-Band** mode (Low / High).
   - Set **Cutoff Frequency** to **90Hz**.
   - *Logic*: This isolates the foundational "sub" weight.
2. **The Slope**:
   - Select **48dB** or **96dB** slope.
   - *Why*: You want a sharp "brickwall" separation so no kick drum harmonics bleed into your sub processing.
3. **The Mode**:
   - Use **Linear Phase** if this is for a finished track.
   - Use **Zero Latency** if you are playing it live.
4. **Processing the Sub**:
   - Mute the High band. 
   - Add a **Fruity Limiter** after the splitter.
   - Set a fast Attack and moderate Release to stabilize the volume of the sub-notes.
5. **Re-blending**:
   - Unmute the High band.
   - Adjust the **Gain** of the Low band until the bass feels solid and consistent.
6. **Mono-Check**: Switch to Mono. The sub should remain 100% stable.

## 🔄 Variations
- **The "Dynamic Sub"**: Use a **Peak Controller** on your Kick drum to automate the **Gain** of the isolated Low band in Frequency Splitter.
- **The "High-End Grit"**: Distort ONLY the High band (>90Hz) to add presence while the sub stays clean.

## ⚠️ Pitfalls & Fixes
- **Problem**: The split point sounds "clicky."
- **Fix**: Lower the slope to **24dB**. Extremely steep slopes (96dB) can sometimes create audible ringing.

```

---

## FILE: 03-Workflows\by-goal\transparency-guide.md

```markdown
# Goal Workflow: Transparency Guide (The Pro Split)

*Goal: Verifying that your frequency splitting is 100% transparent and not introducing phase distortion.*

## 🚶 Step-by-Step Setup
1. **The Source**:
   - Load a high-quality, full-range audio clip (like a finished song) into **Mixer Track 1**.
2. **The Splitter**:
   - Add **Frequency Splitter** to Mixer Track 1.
   - Set to **3-Band** mode. Set crossover to **200Hz** and **5kHz**.
   - Select **Linear Phase** mode.
3. **The Duplicator**:
   - Load the *exact same* audio clip into **Mixer Track 2**.
   - Ensure the volumes are perfectly identical.
4. **The Null Test (The Verification)**:
   - On **Mixer Track 2**, add a **Fruity Stereo Shaper**.
   - Select the "Invert" preset (or click the "Invert Left" and "Invert Right" phase buttons).
5. **The Silence**:
   - Press play.
   - If Frequency Splitter is transparent, you should hear **Absolute Silence**. 
   - *Logic*: The inverted Phase of Track 2 cancels out the original audio of Track 1.
6. **Testing Modes**:
   - While playing, switch Frequency Splitter to **Zero Latency**.
   - You will now hear a "hiss" or "whoosh" sound at the crossover points.
   - *Result*: This proves that **Zero Latency** mode is NOT transparent and introduces phase shift. Use it only when necessary.

## 🔄 Variations
- **Slope Test**: Toggle between 6dB and 96dB. Notice how the "ringing" volume increases at steeper slopes during the null test.
- **Master Check**: Perform this test on your master bus before rendering to ensure your final crossover isn't thinning out your sound.

## ⚠️ Pitfalls & Fixes
- **Problem**: I still hear the song during the null test.
- **Fix**: Check your **Gain** knobs in Frequency Splitter. They must be at exactly 0.0dB. Also, ensure no other plugins are active on Track 1.

```

---

## FILE: 03-Workflows\by-instrument\01-808-focus.md

```markdown
# 808 Focus Split Workflow

## Sound Profile
Precision-controlled 808 with separate sub, mid, and high processing.

## Recommended Preset
`genre/02-808-focus.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 150Hz | Sub/Mid split |
| Crossover 2 | 800Hz | Mid/High split |
| Slope | 12dB/oct | Musical overlap |
| Mode | Minimum-phase | Impact |

## Band Processing
| Band | Frequency | Processing |
|------|-----------|------------|
| Band 1 (Sub) | 25-150Hz | Sub-only, +2dB gain |
| Band 2 (Mid) | 150-800Hz | Mid-focus, -1dB gain |
| Band 3 (High) | 800Hz+ | High-pass 3kHz |

## Workflow Integration
1. Route 808 to Frequency Splitter
2. Process Band 1 for sub weight
3. Process Band 2 for mid punch
4. Filter Band 3 to remove mud
5. Recombine with careful gain staging

## Chain Processing Per Band
`\`\`
Band 1 → Fruily Limiter (sub focus)
  - Threshold: -12dB
  - Fast attack
Band 2 → Fruily Compressor (mid punch)
  - Attack: 10ms
  - Release: 80ms
Band 3 → High-pass (cleanup)
  - Cut at 3kHz
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Increase Band1 gain +3dB |
| More punch | Increase Band2 gain +2dB |
| Cleaner highs | Lower Band3 crossover to 2kHz |
| More separation | Increase slope to 24dB/oct |

```

---

## FILE: 03-Workflows\by-instrument\01-bass-workflows.md

```markdown
# Frequency Splitter Bass Workflows

## 808 Focus Split

### Sound Profile
Precision-controlled 808 with separate sub, mid, and high processing.

### Recommended Preset
`genre/02-808-focus.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 150Hz | Sub/Mid split |
| Crossover 2 | 800Hz | Mid/High split |
| Slope | 12dB/oct | Musical overlap |
| Mode | Minimum-phase | Impact |

### Band Processing
| Band | Frequency | Processing |
|------|-----------|-------------|
| Band 1 (Sub) | 25-150Hz | Sub-only, +2dB gain |
| Band 2 (Mid) | 150-800Hz | Mid-focus, -1dB gain |
| Band 3 (High) | 800Hz+ | High-pass 3kHz |

### Workflow Integration
1. Route 808 to Frequency Splitter
2. Process Band 1 for sub weight
3. Process Band 2 for mid punch
4. Filter Band 3 to remove mud
5. Recombine with careful gain staging

### Genre Variations
- **Trap:** Crossover1 200Hz, Band1 resonance boost
- **Drill:** Crossover1 120Hz, Band1 drive increase
- **R&B:** Crossover1 180Hz, smoother slope

### Chain Processing Per Band
`\`\`
Band 1 → Fruily Limiter (sub focus)
  - Threshold: -12dB
  - Fast attack
Band 2 → Fruily Compressor (mid punch)
  - Attack: 10ms
  - Release: 80ms
Band 3 → High-pass (cleanup)
  - Cut at 3kHz
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Increase Band1 gain +3dB |
| More punch | Increase Band2 gain +2dB |
| Cleaner highs | Lower Band3 crossover to 2kHz |
| More separation | Increase slope to 24dB/oct |

---

## Kick/Bass Separation

### Sound Profile
Clean separation between kick and bass for punchy, defined low-end.

### Recommended Preset
`genre/10-kick-bass.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 80Hz | Kick/Bass split |
| Slope | 48dB/oct | Maximum separation |
| Mode | Minimum-phase | Impact |

### Band Processing
| Band | Frequency | Processing |
|------|-----------|-------------|
| Band 1 (Kick) | 40-80Hz | Kick transient focus |
| Band 2 (Bass) | 80-200Hz | Bass body |

### Workflow Integration
1. Route combined kick/bass to splitter
2. Apply transient processing to Band 1
3. Apply sidechain compression to Band 2
4. Blend for clean crossover

### Sidechain Workflow
`\`\`
Band 1 (Kick) output → Key input
  → Fruily Compressor on Band 2
  - Threshold: -20dB
  - Ratio: 4:1
  - Release: 50ms (sync to tempo)
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More kick | Increase Band1 crossover to 100Hz |
| More bass | Lower Band1 crossover to 60Hz |
| Tighter | Increase slope to 48dB/oct |
| Musical | Reduce slope to 24dB/oct |

---

## Drill Sub Punishment

### Sound Profile
Extreme sub processing with heavy saturation for drill productions.

### Recommended Preset
`genre/06-drill-sub.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 120Hz | Sub/High split |
| Slope | 24dB/oct | Sharp cut |
| Mode | Minimum-phase | Power |

### Band Processing
| Band | Frequency | Processing |
|------|-----------|-------------|
| Band 1 (Sub) | 25-120Hz | Extreme saturation 25% |
| Band 2 (High) | 120Hz+ | High-pass 3kHz |

### Chain Processing
`\`\`
Band 1 → Fruily Distancer
  - Drive: 25%
  → Fruily Limiter
  - Heavy limiting
Band 2 → High-pass filter
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More distortion | Increase saturation to 30% |
| Cleaner sound | Reduce saturation to 15% |
| Darker tone | Lower crossover to 100Hz |
| More weight | Increase crossover to 140Hz |

---

## Bass Workflow Summary

### By Goal
| Goal | Crossover | Slope | Mode |
|------|-----------|-------|------|
| Maximum separation | 80Hz | 48dB/oct | Min-phase |
| Musical overlap | 100Hz | 12dB/oct | Min-phase |
| Mastering grade | 80Hz | 24dB/oct | Linear |
| Vintage feel | 120Hz | 12dB/oct | Min-phase |

### By Genre
| Genre | Crossover | Processing Focus |
|-------|-----------|------------------|
| Trap | 200Hz | Band2 punch |
| Drill | 120Hz | Band1 saturation |
| EDM | 80Hz | Kick/bass separation |
| R&B | 180Hz | Smooth crossover |
| Hip-Hop | 150Hz | Classic 808 |

### Troubleshooting
| Problem | Solution |
|---------|----------|
| Holey low-end | Lower crossover frequency |
| Muddy mix | Raise crossover frequency |
| Phase issues | Use linear-phase mode |
| CPU heavy | Reduce slope to 12dB/oct |
| Transients lost | Minimum-phase, 48dB/oct |

```

---

## FILE: 03-Workflows\by-instrument\02-kick-bass-separation.md

```markdown
# Kick/Bass Separation Workflow

## Sound Profile
Clean separation between kick and bass for punchy, defined low-end.

## Recommended Preset
`genre/10-kick-bass.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 80Hz | Kick/Bass split |
| Slope | 48dB/oct | Maximum separation |
| Mode | Minimum-phase | Impact |

## Band Processing
| Band | Frequency | Processing |
|------|-----------|------------|
| Band 1 (Kick) | 40-80Hz | Kick transient focus |
| Band 2 (Bass) | 80-200Hz | Bass body |

## Sidechain Workflow
`\`\`
Band 1 (Kick) output → Key input
  → Fruily Compressor on Band 2
  - Threshold: -20dB
  - Ratio: 4:1
  - Release: 50ms (sync to tempo)
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More kick | Increase Band1 crossover to 100Hz |
| More bass | Lower Band1 crossover to 60Hz |
| Tighter | Increase slope to 48dB/oct |
| Musical | Reduce slope to 24dB/oct |

```

---

## FILE: 03-Workflows\by-instrument\02-vocal-mix-workflows.md

```markdown
# Frequency Splitter Vocal & Mix Workflows

## R&B Vocal Chain

### Sound Profile
Professional vocal processing with separate bands for clarity, presence, and air.

### Recommended Preset
`genre/03-rnb-vocal.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 200Hz | Low/Mid split |
| Crossover 2 | 4000Hz | Mid/High split |
| Slope | 24dB/oct | Smooth |
| Mode | Linear-phase | Vocal truth |

### Band Processing
| Band | Frequency | Processing | Purpose |
|------|-----------|------------|---------|
| Band 1 | 80-200Hz | High-pass | Remove mud |
| Band 2 | 200-4000Hz | Presence boost | Clarity |
| Band 3 | 4000Hz+ | Air boost | Brilliance |

### Workflow Integration
1. Route vocals to Frequency Splitter
2. Apply high-pass to Band 1 (removes mud)
3. Apply bell boost to Band 2 (2-5kHz, +2dB)
4. Apply shelf boost to Band 3 (8kHz+, +1.5dB)
5. Apply compression per band

### Band-Specific Processing
`\`\`
Band 1 → Fruily Compressor
  - Gentle, ratio 2:1
Band 2 → Fruily Parametric EQ 2
  - Bell +2dB at 3kHz
  → Fruily Compressor
  - Ratio 3:1, attack 10ms
Band 3 → De-esser
  - Threshold: -18dB
  → High-shelf +1.5dB at 8kHz
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More presence | Increase Band2 +1dB |
| More air | Increase Band3 +1dB |
| Less harsh | Reduce Band2 at 3kHz |
| Less sibilant | Lower de-esser threshold |
| More warmth | Reduce Band3 crossover to 3kHz |

---

## Vocal Doubler Split

### Sound Profile
Natural doubling effect by pitch-shifting only high frequencies.

### Recommended Preset
`genre/07-vocal-doubler.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 2000Hz | Split point |
| Slope | 24dB/oct | Clean cut |
| Mode | Linear-phase | No phasing |

### Band Processing
| Band | Frequency | Processing | Purpose |
|------|-----------|------------|---------|
| Band 1 | 100-2000Hz | Dry signal | Original |
| Band 2 | 2000Hz+ | Pitch +5 cents, 35% mix | Doubling |

### Workflow Integration
1. Route vocals to Frequency Splitter
2. Keep Band 1 dry for original character
3. Apply subtle pitch shift to Band 2
4. Blend Band 2 at 35% for natural doubling
5. Apply light reverb to combined signal

### Why This Works
- Only highs are doubled, preventing muddy buildup
- Linear-phase prevents phasing issues
- Subtle pitch shift adds width without obvious effect

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More obvious | Increase Band2 mix to 45% |
| More subtle | Reduce Band2 mix to 25% |
| Different character | Change pitch shift to +8 cents |
| Less artificial | Use +3 cents instead |

---

## Mix Bus Separation

### Sound Profile
Mastering-grade multiband processing for full mix control.

### Recommended Preset
`genre/08-mix-bus.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 80Hz | Sub/Low split |
| Crossover 2 | 400Hz | Low/Mid split |
| Crossover 3 | 3000Hz | Mid/High split |
| Slope | 24dB/oct | Smooth |
| Mode | Linear-phase | Mastering |

### Band Processing
| Band | Frequency | Target |
|------|-----------|--------|
| Band 1 | 30-80Hz | Sub extension |
| Band 2 | 80-400Hz | Low-mids |
| Band 3 | 400-3000Hz | Presence |
| Band 4 | 3000Hz+ | Air |

### Workflow Integration
1. Route mix bus to Frequency Splitter
2. Apply gentle compression per band
3. Apply multi-band limiting to control peaks
4. Maintain phase coherence with linear-phase

### Processing Per Band
`\`\`
Band 1 → Fruily Compressor
  - Ratio 2:1, slow attack
Band 2 → Fruily Compressor
  - Ratio 2.5:1, medium attack
Band 3 → Fruily Compressor
  - Ratio 2:1, fast attack
Band 4 → Fruily Limiter
  - Gentle ceiling
`\`\`

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Increase Band1 gain +1dB |
| More punch | Compress Band2 harder |
| More presence | Boost Band3 at 2kHz |
| More air | Boost Band4 at 8kHz |

---

## Parallel Distortion Split

### Sound Profile
Clean low-end with distorted mids/highs for aggressive sounds.

### Recommended Preset
`genre/09-parallel-distort.json`

### Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 500Hz | Low/Mid split |
| Crossover 2 | 2000Hz | Mid/High split |
| Slope | 24dB/oct | Distinct |
| Mode | Minimum-phase | Impact |

### Band Processing
| Band | Frequency | Processing | Purpose |
|------|-----------|------------|---------|
| Band 1 | 30-500Hz | Clean, -6dB | Foundation |
| Band 2 | 500-2000Hz | Distortion +6dB | Grind |
| Band 3 | 2000Hz+ | Crisp, 0dB | Clarity |

### Workflow Integration
1. Route source to Frequency Splitter
2. Reduce Band 1 for clean foundation
3. Apply distortion to Band 2 for aggression
4. Keep Band 3 clean for clarity
5. Recombine for balanced sound

### Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More distorted | Increase Band2 gain +3dB |
| Cleaner mix | Increase Band1 gain -3dB |
| More aggressive | Increase Band2 distortion |
| Less muddy | Raise Crossover1 to 600Hz |

---

## Vocal & Mix Workflow Summary

### By Goal
| Goal | Mode | Slope | Key Setting |
|------|------|-------|-------------|
| Vocal clarity | Linear | 24dB/oct | Linear-phase |
| Doubling | Linear | 24dB/oct | Pitch shift high only |
| Mastering | Linear | 24dB/oct | Subtle compression |
| Aggressive | Min-phase | 24dB/oct | Distortion on mids |

### By Instrument
| Instrument | Crossover 1 | Crossover 2 | Processing |
|------------|-------------|-------------|------------|
| Lead Vocal | 200Hz | 4000Hz | Presence + Air |
| Backing Vocal | 250Hz | 3500Hz | Subtle enhancement |
| Full Mix | 80Hz | 400Hz | Multi-band control |
| Drum Bus | 200Hz | 2000Hz | Transient focus |
| Synth Bus | 300Hz | 3000Hz | Separation |

### Troubleshooting
| Problem | Solution |
|---------|----------|
| Vocal sounds thin | Boost Band2 at 2-3kHz |
| Vocal too bright | Reduce Band3, add de-essing |
| Mix lacks punch | Compress Band2 harder |
| Phasing on vocals | Always use linear-phase |
| Distortion on clean | Use separate instance for distortion |

```

---

## FILE: 03-Workflows\by-instrument\03-drill-sub-punishment.md

```markdown
# Drill Sub Punishment Workflow

## Sound Profile
Extreme sub processing with heavy saturation for drill productions.

## Recommended Preset
`genre/06-drill-sub.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 120Hz | Sub/High split |
| Slope | 24dB/oct | Sharp cut |
| Mode | Minimum-phase | Power |

## Band Processing
| Band | Frequency | Processing |
|------|-----------|------------|
| Band 1 (Sub) | 25-120Hz | Extreme saturation 25% |
| Band 2 (High) | 120Hz+ | High-pass 3kHz |

## Chain Processing
`\`\`
Band 1 → Fruily Distancer
  - Drive: 25%
  → Fruily Limiter
  - Heavy limiting
Band 2 → High-pass filter
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More distortion | Increase saturation to 30% |
| Cleaner sound | Reduce saturation to 15% |
| Darker tone | Lower crossover to 100Hz |
| More weight | Increase crossover to 140Hz |

```

---

## FILE: 03-Workflows\by-instrument\04-trap-multiband.md

```markdown
# Trap Multiband Workflow

## Sound Profile
Three-band processing for trap with separate sub, mid, and high control.

## Recommended Preset
`genre/01-trap-multiband.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 200Hz | Sub/Mid split |
| Crossover 2 | 3000Hz | Mid/High split |
| Slope | 24dB/oct | Smooth |
| Mode | Linear-phase | Transparency |

## Band Processing
| Band | Frequency | Processing |
|------|-----------|------------|
| Band 1 | 30-200Hz | High-pass 30Hz |
| Band 2 | 200-3000Hz | Frequency shifter down 100Hz, 25% mix |
| Band 3 | 3000Hz+ | High-pass 4kHz, -2dB gain |

## Workflow Integration
1. Use two instances for full control
2. Instance 1: Sub/bass band with sub enhancement
3. Instance 2: High band with transient enhancement
4. Blend for full spectrum control

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Increase Band1 gain +2dB |
| More presence | Increase Band2 shifter mix |
| Less harsh | Reduce Band3 gain -2dB |
| More separation | Use linear-phase mode |

```

---

## FILE: 03-Workflows\by-instrument\05-rnb-vocal-chain.md

```markdown
# R&B Vocal Chain Workflow

## Sound Profile
Professional vocal processing with separate bands for clarity, presence, and air.

## Recommended Preset
`genre/03-rnb-vocal.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 200Hz | Low/Mid split |
| Crossover 2 | 4000Hz | Mid/High split |
| Slope | 24dB/oct | Smooth |
| Mode | Linear-phase | Vocal truth |

## Band Processing
| Band | Frequency | Processing | Purpose |
|------|-----------|------------|---------|
| Band 1 | 80-200Hz | High-pass | Remove mud |
| Band 2 | 200-4000Hz | Presence boost | Clarity |
| Band 3 | 4000Hz+ | Air boost | Brilliance |

## Workflow Integration
1. Route vocals to Frequency Splitter
2. Apply high-pass to Band 1 (removes mud)
3. Apply bell boost to Band 2 (2-5kHz, +2dB)
4. Apply shelf boost to Band 3 (8kHz+, +1.5dB)
5. Apply compression per band

## Band-Specific Processing
`\`\`
Band 1 → Fruily Compressor
  - Gentle, ratio 2:1
Band 2 → Fruily Parametric EQ 2
  - Bell +2dB at 3kHz
  → Fruily Compressor
  - Ratio 3:1, attack 10ms
Band 3 → De-esser
  - Threshold: -18dB
  → High-shelf +1.5dB at 8kHz
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More presence | Increase Band2 +1dB |
| More air | Increase Band3 +1dB |
| Less harsh | Reduce Band2 at 3kHz |
| Less sibilant | Lower de-esser threshold |

```

---

## FILE: 03-Workflows\by-instrument\06-vocal-doubler.md

```markdown
# Vocal Doubler Workflow

## Sound Profile
Natural doubling effect by pitch-shifting only high frequencies.

## Recommended Preset
`genre/07-vocal-doubler.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 2000Hz | Split point |
| Slope | 24dB/oct | Clean cut |
| Mode | Linear-phase | No phasing |

## Band Processing
| Band | Frequency | Processing | Purpose |
|------|-----------|------------|---------|
| Band 1 | 100-2000Hz | Dry signal | Original |
| Band 2 | 2000Hz+ | Pitch +5 cents, 35% mix | Doubling |

## Workflow Integration
1. Route vocals to Frequency Splitter
2. Keep Band 1 dry for original character
3. Apply subtle pitch shift to Band 2
4. Blend Band 2 at 35% for natural doubling
5. Apply light reverb to combined signal

## Why This Works
- Only highs are doubled, preventing muddy buildup
- Linear-phase prevents phasing issues
- Subtle pitch shift adds width without obvious effect

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More obvious | Increase Band2 mix to 45% |
| More subtle | Reduce Band2 mix to 25% |
| Different character | Change pitch shift to +8 cents |
| Less artificial | Use +3 cents instead |

```

---

## FILE: 03-Workflows\by-instrument\07-mix-bus.md

```markdown
# Mix Bus Separation Workflow

## Sound Profile
Mastering-grade multiband processing for full mix control.

## Recommended Preset
`genre/08-mix-bus.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 80Hz | Sub/Low split |
| Crossover 2 | 400Hz | Low/Mid split |
| Crossover 3 | 3000Hz | Mid/High split |
| Slope | 24dB/oct | Smooth |
| Mode | Linear-phase | Mastering |

## Band Processing
| Band | Frequency | Target |
|------|-----------|--------|
| Band 1 | 30-80Hz | Sub extension |
| Band 2 | 80-400Hz | Low-mids |
| Band 3 | 400-3000Hz | Presence |
| Band 4 | 3000Hz+ | Air |

## Processing Per Band
`\`\`
Band 1 → Fruily Compressor
  - Ratio 2:1, slow attack
Band 2 → Fruily Compressor
  - Ratio 2.5:1, medium attack
Band 3 → Fruily Compressor
  - Ratio 2:1, fast attack
Band 4 → Fruily Limiter
  - Gentle ceiling
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Increase Band1 gain +1dB |
| More punch | Compress Band2 harder |
| More presence | Boost Band3 at 2kHz |
| More air | Boost Band4 at 8kHz |

```

---

## FILE: 03-Workflows\by-instrument\08-parallel-distortion.md

```markdown
# Parallel Distortion Workflow

## Sound Profile
Clean low-end with distorted mids/highs for aggressive sounds.

## Recommended Preset
`genre/09-parallel-distort.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 500Hz | Low/Mid split |
| Crossover 2 | 2000Hz | Mid/High split |
| Slope | 24dB/oct | Distinct |
| Mode | Minimum-phase | Impact |

## Band Processing
| Band | Frequency | Processing | Purpose |
|------|-----------|------------|---------|
| Band 1 | 30-500Hz | Clean, -6dB | Foundation |
| Band 2 | 500-2000Hz | Distortion +6dB | Grind |
| Band 3 | 2000Hz+ | Crisp, 0dB | Clarity |

## Workflow Integration
1. Route source to Frequency Splitter
2. Reduce Band 1 for clean foundation
3. Apply distortion to Band 2 for aggression
4. Keep Band 3 clean for clarity
5. Recombine for balanced sound

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More distorted | Increase Band2 gain +3dB |
| Cleaner mix | Increase Band1 gain -3dB |
| More aggressive | Increase Band2 distortion |
| Less muddy | Raise Crossover1 to 600Hz |

```

---

## FILE: 03-Workflows\by-instrument\09-edm-bass-rush.md

```markdown
# EDM Bass Rush Workflow

## Sound Profile
Four-way split for bass Rush with sub, grind, crunch, and air bands.

## Recommended Preset
`genre/04-edm-bass-rush.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 80Hz | Sub split |
| Crossover 2 | 200Hz | Grind split |
| Crossover 3 | 800Hz | Crunch split |
| Slope | 24dB/oct | Smooth |
| Mode | Linear-phase | Clean |

## Band Processing
| Band | Frequency | Processing | Purpose |
|------|-----------|------------|---------|
| Band 1 | 30-80Hz | Sub oscillator layer | Sub |
| Band 2 | 80-200Hz | Distortion, drive 15% | Grind |
| Band 3 | 200-800Hz | Bitcrusher, 16-bit | Crunch |
| Band 4 | 800Hz+ | High-pass 2kHz | Air |

## Workflow Integration
1. Route bass to Frequency Splitter
2. Apply sub enhancement to Band 1
3. Add distortion to Band 2
4. Apply bitcrush to Band 3
5. High-pass Band 4 for clarity
6. Limit Band 1 for maximum impact

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More sub | Increase Band1 gain +3dB |
| More grind | Increase Band2 distortion |
| More crunch | Reduce bitcrusher bits |
| Cleaner | Raise Band4 crossover |

```

---

## FILE: 03-Workflows\by-instrument\10-lofi-degrade.md

```markdown
# Lo-Fi Degrade Workflow

## Sound Profile
Authentic degradation with bitcrush, saturation, and high-frequency roll-off.

## Recommended Preset
`genre/05-lofi-degrade.json`

## Settings Blueprint
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Crossover 1 | 500Hz | Low/Mid split |
| Crossover 2 | 3000Hz | Mid/High split |
| Slope | 12dB/oct | Smooth |
| Mode | Minimum-phase | Character |

## Band Processing
| Band | Frequency | Processing | Purpose |
|------|-----------|------------|---------|
| Band 1 | 30-500Hz | Bitcrusher 8-bit | Degrade |
| Band 2 | 500-3000Hz | Saturation 5% | Warmth |
| Band 3 | 3000Hz+ | High-pass 6kHz | Roll-off |

## Workflow Integration
1. Route source to Frequency Splitter
2. Apply bitcrush to low band
3. Add subtle saturation to mids
4. Roll off harsh highs
5. Blend with tape wobble if desired

## Chain Processing
`\`\`
Band 1 → Tape wobble
Band 2 → Vinyl crackle
Band 3 → High-pass
`\`\`

## Quick Tweaks
| Desired Change | Adjustment |
|----------------|------------|
| More degraded | Reduce bitcrusher to 6-bit |
| Cleaner | Increase bitcrusher to 12-bit |
| Warmer | Increase saturation to 8% |
| Less noisy | Raise Band3 crossover |

```

---

## FILE: 03-Workflows\by-instrument\INDEX.md

```markdown
# Frequency Splitter By-Instrument Workflows Index

## Bass Workflows
| File | Name | Genre | Key Feature |
|------|------|-------|-------------|
| `01-808-focus.md` | 808 Focus Split | Hip-Hop | Precision |
| `02-kick-bass-separation.md` | Kick/Bass Separation | EDM | Punchy |
| `03-drill-sub-punishment.md` | Drill Sub | Drill | Extreme |

## Vocal Workflows
| File | Name | Genre | Key Feature |
|------|------|-------|-------------|
| `05-rnb-vocal-chain.md` | R&B Vocal Chain | R&B | Professional |
| `06-vocal-doubler.md` | Vocal Doubler | R&B | Natural |

## Mix & Master Workflows
| File | Name | Use | Key Feature |
|------|------|-----|-------------|
| `07-mix-bus.md` | Mix Bus Separation | Mastering | Full control |
| `08-parallel-distortion.md` | Parallel Distortion | EDM/All | Clean + Distorted |

## Bass FX Workflows
| File | Name | Genre | Key Feature |
|------|------|-------|-------------|
| `04-trap-multiband.md` | Trap Multiband | Trap | Three-band |
| `09-edm-bass-rush.md` | EDM Bass Rush | EDM | Four-way |

## Texture Workflows
| File | Name | Genre | Key Feature |
|------|------|-------|-------------|
| `10-lofi-degrade.md` | Lo-Fi Degrade | Lo-Fi | Degradation |

## Quick Reference by Goal
| Goal | File | Settings |
|------|------|----------|
| Clean separation | 02-kick-bass-separation.md | 48dB/oct slope |
| Vocal polish | 05-rnb-vocal-chain.md | Linear-phase |
| Maximum impact | 03-drill-sub-punishment.md | Heavy saturation |
| Master bus | 07-mix-bus.md | 4-band linear |
| Aggressive sound | 08-parallel-distortion.md | Distort mids |

## Troubleshooting Quick Reference
| Problem | Solution |
|---------|----------|
| Holey low-end | Lower crossover frequency |
| Muddy mix | Raise crossover frequency |
| Phase issues | Use linear-phase mode |
| CPU heavy | Reduce slope to 12dB/oct |

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Reference: Genre Style Board (Multiband Routing)

Sourced applications of frequency splitting in modern production.

## 1. The "Industrial" 808 (Moody)
- **Source**: Scarlxrd / Metro Boomin.
- **Application**: 2-Band split at 120Hz. Low band limited and mono. High band sent to extreme distortion.
- **Vibe**: Aggression, weight, and "mechanical" growling.

## 2. Experimental Vocal Shimmer (Psychedelic)
- **Source**: Travis Scott / Mike Dean.
- **Application**: 3-Band split. Lows clean. Mids sent to a Phaser. Highs (>8kHz) sent to a pitch-shifting Delay (+1 Octave).
- **Vibe**: Disorientation, ethereal clouds, and otherworldly textures.

## 3. Silky R&B Air (Vibey)
- **Source**: SZA / Darkchild.
- **Application**: 2-Band split at 10kHz. High band sent to a wide Stereo Chorus and Exciter.
- **Vibe**: Modern luxury, professional sheen, and expensive-sounding vocal layers.

## 4. Nu-Metal Guitar Stabs (Upbeat)
- **Source**: Phonk / Trap-Metal.
- **Application**: 3-Band split on guitar samples. Lows muted. Mids compressed heavily. Highs saturated.
- **Vibe**: Energy, sharp transients, and rhythmic drive.

```

---

## FILE: 04-Reference\filter-slope-analysis.md

```markdown
# Technical Reference: Filter Slope Analysis

A deep look at the steepness and behavior of the 16-band crossover filters. [SRC: IL-MAN]

## 1. What is Filter Slope?
Slope refers to the rate at which frequencies are attenuated beyond the cutoff point. In Frequency Splitter, this is measured in Decibels per Octave (dB/oct).

## 2. Slope Comparison Table
| Setting | Character | Best Use Case |
| :--- | :--- | :--- |
| **6dB** | Extremely Gentle | Transparent mixing; wide tonal balance shifts. |
| **12dB** | Musical | Subtractive synthesis; gentle instrument separation. |
| **24dB** | Standard | Standard multi-band processing; the "Goldilocks" slope. |
| **48dB** | Steep | Surgical isolation; keeping distortion out of the sub-bass. |
| **96dB** | Brickwall | Heavy sound design; total frequency isolation. |

---

## 3. The "Ringing" Phenomenon
As the slope increases (gets steeper), the filter introduces more **Group Delay** and resonant ringing at the crossover point.
- **Audible Effect**: A 96dB slope can sound "chirpy" or add a metallic "ping" to transients.
- **Strategy**: Always use the **shallowest slope possible** that still achieves your isolation goal.

## 4. Overlap Logic
Unlike a standard EQ, Frequency Splitter's filters are designed to sum back to a 100% flat line.
- **Linkwitz-Riley**: This is the math used in the plugin. It ensures that when you combine the Low and High bands, there is no gain boost at the crossover point.
- **Phase Shift**: In **Zero Latency** mode, the phase shift is constant across the spectrum, but the *relative* phase between bands remains aligned for a flat sum.

```

---

## FILE: 04-Reference\technical-docs\crossover-filter-types.md

```markdown
# Crossover Filter Types & Phase Response

## Minimum Phase (IIR)
- **Latency**: Near zero.
- **Phase**: Causes phase rotation around the crossover frequency.
- **Usage**: Live performances, individual tracks where phase matching isn't critical.

## Linear Phase
- **Latency**: High (compensates by delaying the whole signal).
- **Phase**: Zero phase shift. The impulse response is symmetrical.
- **Usage**: Mastering, parallel processing where the split signals are recombined later.

## Slope Impact
- **Shallow (6-12 dB)**: Natural transition, more overlap between bands.
- **Steep (48-96 dB)**: Surgical separation, can introduce "ringing" artifacts near the cutoff.

```

---

## FILE: 04-Reference\technical-docs\linear-phase-vs-iir.md

```markdown
# Linear Phase vs. IIR: Deep Dive

## Minimum Phase (IIR)
Internal Impulse Response (IIR) filters are the standard in most EQs.
- **How they work:** They change the frequency magnitude by shifting the phase of the signal.
- **The Catch:** Near the crossover frequency, the phase "rotates". If you sum this split signal back with the original, you get "comb filtering" (hollow sound).
- **Latency:** Zero. Essential for tracking or live performance.

## Linear Phase
Linear Phase filters use a more complex mathematical approach (FFT/FIR) to ensure all frequencies are delayed by the exact same amount.
- **How they work:** They "look ahead" or delay the entire signal to keep the phase perfectly aligned.
- **The Catch:** It introduces **Latency**. If you have a 2048 sample buffer, the plugin adds 2048 samples of delay to the track.
- **Pre-Ringing:** Steep linear phase filters can cause "pre-ringing", where a faint echo of a transient appears *before* the transient hits. This can soften the "impact" of drums.

## Recombination Test
To see the difference:
1. Load Frequency Splitter on a track with white noise.
2. Invert the phase of a duplicate track with the same noise.
3. If the Splitter is in **Linear Phase**, they will cancel out perfectly (silence).
4. If in **IIR**, you will hear "residue" noise at the crossover frequencies.

```

---

