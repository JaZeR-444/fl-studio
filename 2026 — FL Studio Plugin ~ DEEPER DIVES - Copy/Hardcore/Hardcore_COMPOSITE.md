# Hardcore - Consolidated Documentation
Generated on: Sat 05/02/2026

---

## FILE: README.md

```markdown
# Hardcore - Virtual Guitar Effects Suite

`\`\`
██╗  ██╗ █████╗ ██████╗ ██████╗  ██████╗ ██████╗ ██████╗ ███████╗
██║  ██║██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔═══██╗██╔══██╗██╔════╝
███████║███████║██████╔╝██║  ██║██║     ██║   ██║██████╔╝█████╗  
██╔══██║██╔══██║██╔══██╗██║  ██║██║     ██║   ██║██╔══██╗██╔══╝  
██║  ██║██║  ██║██║  ██║██████╔╝╚██████╗╚██████╔╝██║  ██║███████╗
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
`\`\`

**Plugin Type:** Amp Simulator / Multi-FX Rack
**Category:** Effect / Guitar / Sound Design
**Official Manual:** [Image-Line Hardcore Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Hardcore.htm)

---

## 🎯 What is Hardcore?

Hardcore is a comprehensive guitar effects suite. It features a virtual rack of **11 stomp-box effects**, an **8-band Graphic EQ**, and **5 Cabinet simulations**. While designed for guitarists, its aggressive distortion and lush modulation modules make it a secret weapon for sound-designing synths, drums, and vocals.

**Key Capabilities:**
- **11 Stompboxes:** Distortion, Chorus, Flanger, Phaser, Reverb, Delay, Noise Gate, EQ, Compressor, Modulator, and Wah.
- **8-Band Master EQ:** Final tonal shaping for the entire rack.
- **Cabinet Simulation:** 5 classic speaker models to add "air" and resonance.
- **Flexible Signal Chain:** Drag and drop pedals to reorder the flow.
- **Standalone Mode:** Can be used outside FL Studio for live performance.

---

## 🚀 Quick Start Research Guide

### For First-Time Researchers:
1. Read **00-START-HERE.md** (create this first)
2. Review **stompbox-library-reference.md**
3. Create **parameter-cheat-sheet.md**
4. Load the "Clean" preset and then double-click the "Distortion" pedal to see it turn on.

### For Guitarists:
1. Study **metal-tone-sculpting.md**
2. Review **choosing-the-right-cabinet.md**
3. Learn **noise-gate-calibration.md**

### For Sound Designers:
1. Study **industrial-vocal-chains.md**
2. Review **synth-fattening-workflow.md**
3. Learn **creative-feedback-loops.md** (Delay + Distortion)

---

## 📁 Required Research Files

### Priority 1: Essential Documentation

#### 01-Learning/Quick-Reference/
- [ ] **parameter-cheat-sheet.md**
  - **The Pedals:** Quick summary of all 11 boxes.
  - **Master EQ:** Sliders and values.
  - **Cabinet Selector:** 1-5 models.

- [ ] **stompbox-library-reference.md**
  - Detailed look at each pedal's controls.
  - **Wah:** Auto-wah vs Manual.
  - **Modulator:** AM/FM/RM textures? (Research needed).

#### 02-Data/parameters/
- [ ] **hardcore-params.json**
  `\`\`json
  {
    "plugin_name": "Hardcore",
    "category": "Guitar Rack",
    "pedals": ["Distortion", "Chorus", "Flanger", "Phaser", "Reverb", "Delay", "Noise Gate", "EQ", "Compressor", "Modulator", "Wah"]
  }
  `\`\`

### Priority 2: Workflows

#### 03-Workflows/by-goal/
- [ ] **high-gain-metal-preset.md**
  - Noise Gate -> Distortion -> EQ -> Cabinet 4.
  - Taming the 4kHz "fizz" with the Graphic EQ.

- [ ] **shoegaze-wall-of-sound.md**
  - Reverb *before* Distortion.
  - Adding Chorus and Flanger for movement.

- [ ] **psychedelic-wah-textures.md**
  - Using the Modulator pedal with the Wah for strange filter sweeps.

#### 03-Workflows/by-context/
- [ ] **bass-guitar-saturation.md**
- [ ] **drum-destruction-rack.md**

### Priority 3: Advanced Topics

#### 04-Reference/
- [ ] **cabinet-frequency-response.md**
  - Visualizing the 5 cabinet curves.
  - Which one is "Bright" vs "Dark/Bass-heavy."

---

## 🔬 Research Framework

### Phase 1: Basic Operation (Week 1)
**Goal:** Rack Management

**Tasks:**
1. Enable/Disable every pedal
2. Try reordering the rack (if supported in this version)
3. Adjust the Master Graphic EQ
4. Create parameter-cheat-sheet.md

**Key Questions to Answer:**
- How many effects can be active at once? (All 11).
- Does the "Noise Gate" work well on synth background hiss?

### Phase 2: Tone Crafting (Week 2)
**Goal:** Realism

**Tasks:**
1. Compare "Cabinet Off" vs "Cabinet On" (Hear the "fizz" vanish)
2. Use the Wah pedal with an automation clip
3. Create choosing-the-right-cabinet.md

---

## 📊 Plugin Specifications to Document

### Engine
- Number of Effects (11)
- Number of Cabinets (5)

---

## 🎯 Essential Questions to Answer

### Basic Operation
1. Why is it so noisy? (Guitar rigs are inherently noisy; use the Noise Gate pedal).
2. Can I use this on vocals? (Yes, it's great for lo-fi or aggressive "megaphone" effects).

### Advanced Usage
1. How to achieve a "Stereo" guitar sound using one instance? (Chorus/Flanger pedals).

---

## 🔗 Cross-Reference with Other Plugins

Hardcore is often used with:
- **Fruity Convolver** (Using custom Cabinet IRs instead of built-in ones)
- **Fruity Parametric EQ 2** (Surgical cleanup)

Document integration workflows in `03-Workflows/by-plugin-combo/`

---

## 📦 File Structure Summary

`\`\`
Hardcore/
├── README.md (this file)
├── 00-START-HERE.md (create first)
│
├── 01-Learning/
│   ├── Quick-Reference/
│   │   ├── parameter-cheat-sheet.md ⭐ HIGH PRIORITY
│   │   └── stompbox-library-reference.md
│
├── 02-Data/
│   ├── parameters/
│   │   └── hardcore-params.json
│
├── 03-Workflows/
│   ├── by-goal/
│   │   ├── high-gain-metal-preset.md
│   │   ├── shoegaze-wall-of-sound.md
│   │   └── psychedelic-wah-textures.md
│
└── 04-Reference/
    └── cabinet-frequency-response.md
`\`\`

---

## 🏆 Success Metrics

Your research is complete when you can:
- [ ] Build a "Radio" vocal effect using only Hardcore
- [ ] Create a heavy metal tone that sits in a mix without mud
- [ ] Explain the difference between the 5 cabinet models
- [ ] Order the stompboxes for maximum harmonic richness

---

**Version:** 1.0
**Last Updated:** 2026-01-30
**Research Status:** 🟡 Ready for Data Collection
```

---

## FILE: 01-Learning\Concepts\00_What_It_Is_And_When_To_Use.md

```markdown
# What It Is And When To Use: Hardcore

## The 60-Second Mental Model
Hardcore is a **Virtual Guitar Rack**. Imagine a floor covered in 11 different effects pedals (Stompboxes), plugged into a guitar amplifier and a speaker cabinet. You can pick which pedals to turn on and in what order, and then choose which speaker (Cabinet) the sound comes out of. [SRC: IL-MAN]

## Purpose & Identity
*   **Identity:** A multi-FX suite for distortion, modulation, and spatial simulation.
*   **Where it fits:** It's an Effect plugin. While built for guitars, it's a powerful tool for adding "analog" grit to vocals, synths, and drums.

## Hip-Hop / R&B Context
*   **Industrial Vocals:** Create the "megaphone" or "distorted" vocal sound common in aggressive trap.
*   **Lo-Fi Guitar:** Get that dusty, "bedroom" guitar sound for lo-fi hip-hop by using the Chorus and a dark Cabinet simulation.
*   **Synth Thickening:** Use the built-in Flanger and Phaser to add movement to boring digital synth pads.
*   **Electric Bass:** Add "Growl" to a DI bass guitar or a clean synth bass using the Distortion and Compressor pedals.

## When To Use
*   When you want a **vintage, analog feel** without loading 10 separate plugins.
*   When you need a **Noise Gate** and **Distortion** to work together (it's built in).
*   When you want to simulate the sound of a sound "being in a room" (via the Cabinet simulation).

## When NOT To Use
*   **Clean Digital Mixing:** If you want a perfectly transparent reverb or delay, use **Fruity Reeverb 2** instead. Hardcore's effects are "colored" and meant to sound like hardware pedals.
*   **High-End Precision:** The Graphic EQ in Hardcore is broad. For surgical cutting, use **Fruity Parametric EQ 2**.

```

---

## FILE: 01-Learning\Concepts\01_UI_Map_And_Signal_Flow.md

```markdown
# UI Map And Signal Flow: Hardcore

## UI Tour
1.  **The Pedalboard:** The central area where you see the 11 pedals. Double-click to turn them on/off.
2.  **Pedal Controls:** Each pedal has its own knobs (Gain, Speed, Depth, etc.).
3.  **Graphic EQ:** An 8-band EQ at the top for final tone shaping.
4.  **Cabinet Selector:** A dropdown/selector for the 5 speaker simulations.
5.  **Output Master:** Controls the final volume. [SRC: IL-MAN]

## Signal Flow
1.  **Input:** Audio enters the rack.
2.  **Stompboxes:** The sound passes through the pedals in the order they appear on screen (usually Left to Right, but can be reordered).
3.  **Graphic EQ:** The entire processed signal is EQ'd.
4.  **Cabinet Simulation:** The sound is "filtered" to sound like it's coming out of a speaker. **This is critical** for removing the harsh "fizz" of distortion.
5.  **Output:** Final audio.

## The 11 Pedals
*   **Distortion:** From light overdrive to heavy fuzz.
*   **Chorus/Flanger/Phaser:** Modulation for width and movement.
*   **Reverb/Delay:** Spatial effects.
*   **Noise Gate:** Cuts the silence to remove hiss.
*   **Compressor:** Levels out the volume.
*   **Modulator:** Complex ring-modulation/tremolo.
*   **Wah:** A frequency-sweeping filter.

## Things Beginners Misunderstand
*   **"Why is it so buzzy?":** If you turn on Distortion without a **Cabinet** selected, it will sound like harsh digital static. The Cabinet simulates the natural high-end roll-off of a real speaker.
*   **Noise Gate Placement:** The Noise Gate works best when placed **first** in the chain to stop the noise *before* it gets distorted.
*   **EQ as a Filter:** You can use the Graphic EQ to radically change the "Vibe" of the amp (e.g., cutting all bass for a "radio" effect). [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\03_Vibe_Translation_Guide.md

```markdown
# Vibe Translation Guide: Hardcore

## Moody (Dark, Isolated, Emotional)
*   **Production Levers:**
    *   **Cabinet:** Select **Cabinet 2** (Dark/Mellow).
    *   **Pedals:** Use **Noise Gate** (high threshold) + **Reverb** (High Mix).
    *   **EQ:** Pull down the 4kHz and 8kHz sliders to remove brightness.
*   **Don't Do This:** Avoid harsh Distortion or Flanger.

## Upbeat (Funky, Rhythmic, Pop)
*   **Production Levers:**
    *   **Cabinet:** Select **Cabinet 4** (Bright/Punchy).
    *   **Pedals:** **Compressor** (Fast) + **Chorus** (Slow/Wide) + **Wah** (Auto).
    *   **EQ:** Boost the 1kHz and 2kHz for "honky" presence.
*   **Don't Do This:** Don't over-saturate; keep the transients clean.

## Psychedelic (Trippy, Swirling, Spacey)
*   **Production Levers:**
    *   **Pedals:** **Phaser** + **Flanger** + **Modulator**.
    *   **Sequence:** Put the Phaser *after* the Reverb for a "melting" space effect.
    *   **Wah:** Automate the Wah pedal with a slow LFO.
*   **Don't Do This:** Avoid a static sound; keep at least two modulation pedals moving.

## Jazzy (Neo-Soul, Warm, Smooth)
*   **Production Levers:**
    *   **Cabinet:** **Cabinet 1** (Classic Clean).
    *   **Pedals:** **Chorus** (Depth 20%) + **Compressor** (Subtle).
    *   **EQ:** Boost the 250Hz and 500Hz for a "woody" tone.
*   **Don't Do This:** Never use the Distortion pedal for jazz; use the Gain on the Compressor if you need a tiny bit of "hair."

## Vibey (Lo-Fi, Dusty, R&B)
*   **Production Levers:**
    *   **Cabinet:** **Cabinet 5** (Small/Boxy).
    *   **Pedals:** **Distortion** (Gain at 10%) + **Delay** (Tape-style feedback).
    *   **EQ:** Drastic High-Cut and Low-Cut (Bandpass style).
*   **Don't Do This:** Avoid "High-Fidelity" settings. Emulate the sound of a cheap amp. [SRC: REPUTABLE]

```

---

## FILE: 01-Learning\Concepts\cabinet-simulation-guide.md

```markdown
# Cabinet Simulation Guide

## Understanding Cabinet Models

Hardcore includes 5 cabinet simulations that model the frequency response and character of physical guitar speaker enclosures. Each cabinet acts as a complex EQ curve, dramatically shaping the final tone. [SRC: IL-MAN]

## Cabinet 1: Bright/Modern

**Character:** Extended high-frequency response, tight low end, forward midrange presence
**Best for:** Modern metal, djent, aggressive hip-hop drums, cutting lead tones
**Frequency profile:**
- Strong 3-5kHz presence boost
- Tight 100Hz low end (not flabby)
- Extended treble to 8kHz+
- Slight 200Hz scoop

**Hip-hop applications:**
- Drum bus for modern trap aggression
- 808s that need to cut through mix
- Synth leads requiring bite

## Cabinet 2: Vintage/Classic

**Character:** Warm, rounded highs, pronounced midrange, softer attack
**Best for:** Classic rock, lo-fi aesthetics, vocal warmth, retro drums
**Frequency profile:**
- Rolled-off highs above 6kHz
- Strong 200-400Hz "body" region
- Moderate 1-2kHz presence
- Soft low-end bump around 80Hz

**Hip-hop applications:**
- Vocal warmth and vintage character
- Drum samples needing "tape" vibe
- Bass guitar saturation with controlled highs

## Cabinet 3: British/Crunch

**Character:** Mid-forward, aggressive upper-mids, compressed dynamics
**Best for:** British invasion tones, punk, garage rock, gritty vocals
**Frequency profile:**
- Aggressive 1-2.5kHz midrange push
- Slightly boxy 300-500Hz character
- Controlled, present 5-6kHz range
- Moderate low-end (80-120Hz)

**Hip-hop applications:**
- Vocals needing "radio" presence
- Drum room mics emulation
- Gritty synth bass

## Cabinet 4: American/Smooth

**Character:** Balanced, scooped mids, extended frequency range
**Best for:** Clean tones, jazz, R&B, subtle processing, general-purpose
**Frequency profile:**
- Scooped 300-800Hz (less honk)
- Extended, smooth highs to 10kHz
- Balanced low-mid and high-mid response
- Natural, uncolored character

**Hip-hop applications:**
- Clean vocal processing
- Subtle drum enhancement
- Bass guitar enhancement without aggression
- Synth pads requiring space

## Cabinet 5: Small/Practice Amp

**Character:** Boxy, limited frequency range, compressed, immediate
**Best for:** Lo-fi, punk, practice amp vibes, megaphone effects, telephone tones
**Frequency profile:**
- Strong midrange focus (500Hz-3kHz)
- Severe rolloff below 100Hz and above 5kHz
- Boxy 200-400Hz character
- Limited dynamic range

**Hip-hop applications:**
- Radio/megaphone vocal effects
- Lo-fi drum destruction
- Telephone/filter effects
- Budget equipment emulation
- Industrial textures

## Cabinet Selection Strategy

### For Drums
- **Modern productions:** Cabinet 1 (tight, bright) or Cabinet 4 (balanced)
- **Lo-fi/vintage:** Cabinet 2 (warm, rolled-off) or Cabinet 5 (boxy, limited)
- **Aggressive genres:** Cabinet 1 or Cabinet 3 (mid-forward)

### For Vocals
- **Clean/transparent:** Cabinet 4 (balanced, uncolored)
- **Warm/vintage:** Cabinet 2 (rounded, classic)
- **Radio/megaphone:** Cabinet 5 (small, boxy) + high-pass filtering
- **Aggressive/rap:** Cabinet 3 (mid-forward presence)

### For Bass
- **Modern/sub-heavy:** Cabinet 1 (tight low-end)
- **Classic/vintage:** Cabinet 2 (warm, soft)
- **Gritty/aggressive:** Cabinet 3 (mid-forward) or Cabinet 5 (compressed)

### For Synths
- **Leads:** Cabinet 1 (bright, cutting) or Cabinet 3 (presence)
- **Pads:** Cabinet 2 (warm, space) or Cabinet 4 (balanced)
- **Basses:** Match to genre (see Bass section above)
- **FX/Textures:** Cabinet 5 (characterful, limited)

## Combining Cabinets with Stompboxes

**Bright cabinet + heavy distortion:** Aggressive modern metal tone
**Vintage cabinet + light distortion:** Classic rock warmth
**Small cabinet + heavy distortion:** Lo-fi punk/industrial
**American cabinet + chorus:** Clean, spacious jazz/R&B

## Master EQ Interaction

The 8-band Graphic EQ sits before the cabinet simulation. This ordering is intentional:

1. Shape tone with EQ (broad strokes)
2. Cabinet filters the result (final character)

**Strategy:** Use EQ to compensate for cabinet characteristics:
- Bright cabinet too harsh? Cut 3-5kHz in EQ
- Vintage cabinet too dark? Boost 5-8kHz in EQ
- Small cabinet too boxy? Cut 200-400Hz in EQ

## Cabinet as Effect

Don't think of cabinet as just "amp simulation"—it's a powerful tone-shaping tool:
- Use Cabinet 5 on clean drums for instant lo-fi character
- Use Cabinet 2 on vocals for vintage warmth
- Use Cabinet 1 on synth bass for modern aggression
- Use any cabinet at low mix levels for subtle speaker emulation

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*

```

---

## FILE: 01-Learning\Concepts\core-concepts.md

```markdown
# Hardcore Core Concepts

## Plugin Identity
Hardcore is a virtual guitar pedalboard and amp rig designed for comprehensive tone shaping through a flexible modular signal chain. [SRC: IL-MAN]

## Signal Flow Architecture

### Modular Stompbox Chain
Hardcore processes audio through 11 interchangeable stompbox effects arranged in any order. Each stompbox can be toggled on/off independently, enabling complex parallel-style processing within a single plugin instance.

**Chain Position Matters:** Effects early in the chain shape the foundation; later positions add polish or destruction. Distortion at the start drives all subsequent effects; reverb at the end creates space after distortion.

### Three-Stage Processing

1. **Input Stage** - Initial gain staging and noise gate
2. **Stompbox Chain** - 11 configurable effect slots
3. **Master Section** - 8-band Graphic EQ + Cabinet simulation

## The Virtual Pedalboard Philosophy

Hardcore replicates the tactile experience of physical guitar pedals while extending capabilities impossible in hardware:
- **Instant preset recall** - Switch entire pedalboard configurations
- **Impossible routings** - Any effect order, any combination
- **Precision control** - Exact parameter values, not approximate knob positions
- **Zero noise floor** - No cable hiss or power supply hum

## Cabinet Simulation Fundamentals

Cabinet simulators (cabs) model the frequency response of physical guitar speaker enclosures. Hardcore includes 5 distinct cabinet models, each with characteristic frequency curves affecting:
- Low-end resonance (50-200 Hz)
- Midrange presence (1-4 kHz)
- High-end rolloff (above 5 kHz)

**Key Insight:** Cabs are filters. They don't add distortion; they shape the tone coming before them. [SRC: IL-MAN]

## Hip-Hop Relevance

While designed for guitars, Hardcore's architecture makes it exceptionally powerful for hip-hop production:

- **Drum destruction** - Saturation and distortion add harmonics to flat drum samples
- **Vocal character** - Pedal effects create unique vocal textures impossible with standard plugins
- **Lo-fi aesthetic** - Cabinet simulation + noise gate = instant cassette/vinyl character
- **Bass saturation** - Controlled distortion adds upper harmonics to sub-bass

## Gain Staging Philosophy

Hardcore requires mindful gain staging across three levels:
1. **Input gain** - Sets how hard you hit the first stompbox
2. **Per-pedal levels** - Each effect has input/output controls
3. **Master output** - Final level before leaving the plugin

**Golden Rule:** Aim for consistent perceived loudness when toggling effects on/off. This ensures your changes are tonal, not just louder. [SRC: IL-MAN]

## CPU Considerations

Each active stompbox consumes CPU. For maximum efficiency:
- Disable unused effects rather than leaving them bypassed
- Consider freezing tracks with heavy Hardcore chains
- Use Hardcore as a send effect for multiple tracks sharing the same processing

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*

```

---

## FILE: 01-Learning\Concepts\signal-chain-theory.md

```markdown
# Signal Chain Theory

## Understanding Effect Order

The sequence of stompboxes in Hardcore dramatically affects the final sound. This guide explains the theory behind positioning decisions. [SRC: IL-MAN]

## Classic Signal Chain Templates

### Standard Guitar Chain
`\`\`
Noise Gate → Compressor → Wah → Distortion → EQ (stomp) → Chorus/Flanger/Phaser → Delay → Reverb
`\`\`
**Why it works:** Gate cleans signal before compression, compression evens dynamics for distortion, modulation adds movement after dirt, time-based effects create space last.

### Drum Destruction Chain
`\`\`
Distortion → Compressor → EQ (stomp) → Noise Gate → Cabinet
`\`\`
**Why it works:** Distortion first adds harmonics, compression controls dynamics, EQ shapes tone, gate truncates tails for tightness, cabinet rolls off harsh highs.

### Vocal Lo-Fi Chain
`\`\`
Modulator → Distortion → Cabinet → Delay → Reverb
`\`\`
**Why it works:** Modulator adds subtle detune/doubling, distortion grimes the signal, cabinet creates distance, delay/reverb add space.

## Effect Category Theory

### Dynamics (Noise Gate, Compressor)
**Best position:** Early in chain (positions 1-3)
**Why:** Controlling dynamics before they hit distortion prevents unpredictable gain staging. A compressor after distortion is a limiter; before distortion, it shapes how the distortion reacts.

### Filtering/Wah (Wah, EQ stompbox)
**Best position:** Before or after distortion (positions 2-4)
**Before distortion:** Wah sweeps which frequencies get distorted, creating vocal-like "talking" effects
**After distortion:** Wah sweeps the tone of already-distorted signal

### Distortion
**Best position:** Middle of chain (positions 3-6)
**Why:** Putting distortion first means every subsequent effect processes distorted signal. This creates rich, saturated textures but reduces clarity. Placing it later preserves transients in earlier effects.

### Modulation (Chorus, Flanger, Phaser, Modulator)
**Best position:** After distortion (positions 5-8)
**Why:** Modulation effects create movement by slightly detuning delayed copies. Feeding them distorted signal means the modulation affects harmonics too, creating richer textures. Before distortion, modulation can sound subtle or get lost.

### Time-Based (Delay, Reverb)
**Best position:** Late in chain (positions 9-11)
**Why:** Time-based effects create echoes and space. If you put distortion after delay, each echo gets re-distorted, creating cascading chaos. Generally, put time effects last for cleaner results.

## Parallel Processing Theory

Hardcore doesn't have a built-in parallel mixer, but you can achieve parallel effects using track routing:

### Send/Return Method
1. Create a send track with Hardcore
2. Blend dry signal with processed signal using track faders
3. Use 100% wet effects in Hardcore (no dry signal mixed in)

**Applications:**
- **Parallel distortion:** Heavy distortion blended with clean drums preserves transients while adding grit
- **Parallel reverb:** Short, gated reverb on send adds space without washing out punch
- **Parallel cabinet:** Cabinet simulation on send only adds speaker character without affecting dry tone

### Insert Method
Hardcore placed directly on instrument track (100% wet).

**Best for:**
- Total transformation of source material
- Creating print-and-commit tones
- Consistent processing across multiple takes

## Master EQ Positioning

The 8-band Graphic EQ sits after the stompbox chain but before the cabinet simulation.

**Strategic use:**
- Cut problem frequencies accumulated across the chain
- Boost presence before cabinet rolloff
- Create "smile curve" for vintage character
- Scoop mids for modern metal tones [SRC: IL-MAN]

## Cabinet Position

Cabinet simulation always comes last in the internal signal flow.

**Impact:** Everything before the cabinet gets filtered by the speaker model. This is critical for realistic amp simulation—the cabinet shapes the final output regardless of what precedes it.

## Common Chain Mistakes

1. **Reverb → Distortion:** Creates messy, undefined distortion
2. **Gate at end:** Chokes off reverb tails and delay repeats
3. **Multiple distortions:** Unless intentional, redundant distortion stages can create harsh, uncontrollable saturation
4. **EQ before distortion:** Any cuts reduce what gets distorted; any boosts increase distortion at those frequencies

## Advanced: Split Chains

For complex production, use multiple Hardcore instances:

**Example - Bass:**
- Instance 1 (lows chain): High-pass everything above 120Hz, subtle compression, clean cabinet
- Instance 2 (highs chain): High-pass below 120Hz, heavy distortion, aggressive EQ, different cabinet
- Blend both instances for full, controlled bass tone

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*

```

---

## FILE: 01-Learning\Concepts\stompbox-overview.md

```markdown
# Stompbox Overview

## The 11 Stompbox Effects

Hardcore includes 11 virtual stompbox effects, each modeled after classic guitar pedals but optimized for modern production workflows. This overview explains each effect's core function and character. [SRC: IL-MAN]

## 1. Distortion
**Type:** Saturation/overdrive/distortion
**Core function:** Add harmonics and grit to signal
**Controls:** Drive (saturation amount), Tone (EQ tilt), Level (output gain)
**Character:** Gritty, aggressive, harmonic-rich
**Best for:** Drum punch, vocal edge, bass saturation, synth aggression

## 2. Chorus
**Type:** Modulation (pitch + delay)
**Core function:** Create thickening and doubling effect
**Controls:** Rate (LFO speed), Depth (modulation amount), Level (mix)
**Character:** Shimmering, wide, 80s/90s vibe
**Best for:** Vocal doubling, synth widening, guitar spaciousness

## 3. Flanger
**Type:** Modulation (sweeping comb filter)
**Core function:** Create jet-plane whoosh and metallic resonance
**Controls:** Rate (sweep speed), Depth (sweep range), Feedback (resonance), Level
**Character:** Swirling, metallic, dramatic
**Best for:** Drum transition effects, vocal psychedelia, sci-fi textures

## 4. Phaser
**Type:** Modulation (all-pass filter sweep)
**Core function:** Create subtle-to-extreme phase shifting
**Controls:** Rate (sweep speed), Depth (notch depth), Stages (complexity), Level
**Character:** Liquid, swirling, funky
**Best for:** Funk guitar, drum movement, vocal subtle modulation

## 5. Reverb
**Type:** Time-based (room simulation)
**Core function:** Add space and dimension
**Controls:** Size (room size), Damp (high-frequency decay), Mix (wet/dry), Level
**Character:** Atmospheric, spatial, depth-adding
**Best for:** Vocal space, drum room sound, ambient synths

## 6. Delay
**Type:** Time-based (echo generation)
**Core function:** Create rhythmic repeats and slapback
**Controls:** Time (delay length), Feedback (repeat decay), Mix, Level
**Character:** Rhythmic, repeating, temporal
**Best for:** Vocal slapback, drum rhythm doubling, guitar atmosphere

## 7. Noise Gate
**Type:** Dynamics (threshold-based muting)
**Core function:** Eliminate noise below threshold, truncate tails
**Controls:** Threshold (activation level), Attack (opening speed), Hold, Release
**Character:** Tightening, cleaning, truncating
**Best for:** Tight drums, vocal breath removal, lo-fi abrupt cuts

## 8. EQ (Stompbox)
**Type:** Filtering (parametric shelving)
**Core function:** Tone shaping within the chain
**Controls:** Low/Mid/High bands with frequency and gain
**Character:** Surgical, flexible, corrective
**Best for:** Pre-distortion shaping, problem frequency fixing, tone matching

## 9. Compressor
**Type:** Dynamics (level reduction above threshold)
**Core function:** Control dynamics, add sustain, even out levels
**Controls:** Threshold, Ratio, Attack, Release, Makeup gain
**Character:** Squashing, leveling, punch-adding
**Best for:** Vocal consistency, drum punch, bass sustain, general dynamics control

## 10. Modulator
**Type:** Specialized modulation (ring mod, tremolo, vibrato)
**Core function:** Extreme pitch/amplitude modulation effects
**Controls:** Mode (tremolo/vibrato/ring mod), Rate, Depth, Level
**Character:** Weird, extreme, synthetic
**Best for:** Special FX, vocal destruction, sci-fi drums, experimental textures

## 11. Wah
**Type:** Filtering (bandpass sweep)
**Core function:** Vocal "wah-wah" filtering effect
**Controls:** Manual/Close (envelope or LFO control), Range (sweep width), Level
**Character:** Vocal, expressive, funky
**Best for:** Funk guitar, vocal filtering, rhythmic wah effects

## Effect Categories for Decision Making

### Distortion-Type (Harmonic Addition)
- Distortion

These add new frequencies through saturation. Use them when you need grit, harmonics, or aggression.

### Modulation-Type (Movement)
- Chorus
- Flanger
- Phaser
- Wah
- Modulator

These create movement and dimension. Use them when you need width, space, or rhythmic variation.

### Time-Type (Space & Echo)
- Reverb
- Delay

These add temporal dimension. Use them when you need depth, room, or rhythmic patterns.

### Dynamics-Type (Control)
- Noise Gate
- Compressor

These control levels and shape transients. Use them when you need tightening, noise removal, or dynamic consistency.

### Filtering-Type (Tone)
- EQ (stompbox)
- Wah

These shape frequency content. Use them when you need tone adjustments or frequency-specific processing.

## Quick Selection Guide

| Effect | Hip-Hop Use | Guitar Use | Best Chain Position |
|--------|-------------|------------|---------------------|
| Distortion | Drum destruction, bass saturation | Overdrive, dirt | Middle (3-6) |
| Chorus | Vocal doubling, synth width | Clean lushness | After distortion (5-8) |
| Flanger | Transition effects, psychedelia | Jet sound | After distortion (5-8) |
| Phaser | Drum movement, subtle modulation | Funk texture | After distortion (5-8) |
| Reverb | Vocal space, drum room | Ambience, room | Late (9-11) |
| Delay | Slapback, rhythmic doubling | Echo, slapback | Late (9-11) |
| Noise Gate | Tight drums, lo-fi cuts | Noise removal, tightness | Early (1-3) or late |
| EQ | Pre-distortion shaping | Tone matching | Any position |
| Compressor | Punch, sustain, consistency | Sustain, dynamics | Early (1-3) |
| Modulator | Special FX, destruction | Experimental | After distortion (5-8) |
| Wah | Filtering, funk | Expression | Before or after distortion |

## Stompbox Combinations

**Classic Rock:** Distortion → Chorus → Delay
**Modern Metal:** Noise Gate → Distortion → EQ → Cabinet
**Lo-Fi Hip-Hop:** Modulator → Distortion → Cabinet → Delay
**Funk:** Wah → Distortion → Phaser
**Psychedelic:** Flanger → Phaser → Chorus → Reverb
**Industrial:** Noise Gate → Heavy Distortion → Modulator → Cabinet 5

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*

```

---

## FILE: 01-Learning\Quick-Reference\11-stompbox-cheat-sheet.md

```markdown
# 11 Stompbox Cheat Sheet

Quick reference for all 11 Hardcore stompboxes with key settings and hip-hop applications. [SRC: IL-MAN]

## Distortion
`\`\`
Drive: 0-100%  → Saturation amount
Tone:  -50/+50 → Bright/dark tilt
Level: 0-100%  → Output gain

Hip-Hop Presets:
Drum Punch:     Drive 60%, Tone +20, Level 85%
Bass Warmth:    Drive 30%, Tone -10, Level 90%
Vocal Edge:     Drive 45%, Tone +30, Level 75%
Synth Grit:     Drive 70%, Tone 0, Level 80%
`\`\`

## Chorus
`\`\`
Rate:  0.1-10 Hz → Modulation speed
Depth: 0-100%    → Effect intensity
Level: 0-100%    → Mix amount

Hip-Hop Presets:
Subtle Double:  Rate 0.5Hz, Depth 30%, Level 40%
Wide Synth:     Rate 0.3Hz, Depth 50%, Level 60%
Vocal Lush:     Rate 0.8Hz, Depth 40%, Level 35%
Drum Width:     Rate 0.2Hz, Depth 25%, Level 30%
`\`\`

## Flanger
`\`\`
Rate:     0.1-10 Hz   → Sweep speed
Depth:    0-100%      → Sweep range
Feedback: -100/+100%  → Resonance (positive/negative)
Level:    0-100%      → Mix amount

Hip-Hop Presets:
Subtle Movement:  Rate 0.2Hz, Depth 30%, Feedback 20%, Level 40%
Jet Whoosh:       Rate 0.5Hz, Depth 70%, Feedback 50%, Level 50%
Space Drums:      Rate 0.1Hz, Depth 60%, Feedback 30%, Level 35%
`\`\`

## Phaser
`\`\`
Rate:   0.1-10 Hz → Notch sweep speed
Depth:  0-100%    → Notch depth/intensity
Stages: 2, 4, 6, 8 → Complexity (more = deeper)
Level:  0-100%    → Mix amount

Hip-Hop Presets:
Funky Drums:  Rate 0.3Hz, Depth 40%, Stages 4, Level 45%
Liquid Synth: Rate 0.1Hz, Depth 60%, Stages 6, Level 50%
Subtle Vocal: Rate 0.2Hz, Depth 25%, Stages 2, Level 30%
`\`\`

## Reverb
`\`\`
Size:  0-100% → Room size/simulation
Damp:  0-100% → High-frequency decay (lower = brighter)
Mix:   0-100% → Wet/dry balance
Level: 0-100% → Output gain

Hip-Hop Presets:
Tight Room:   Size 30%, Damp 70%, Mix 25%, Level 85%
Drum Room:    Size 50%, Damp 60%, Mix 20%, Level 90%
Vocal Space:  Size 40%, Damp 50%, Mix 35%, Level 80%
Ambient Wash: Size 80%, Damp 40%, Mix 45%, Level 75%
`\`\`

## Delay
`\`\`
Time:     1-2000ms → Delay length
Feedback: 0-100%   → Repeat decay
Mix:      0-100%   → Wet/dry balance
Level:    0-100%   → Output gain

Hip-Hop Presets:
Slapback:      Time 80-120ms, Feedback 10%, Mix 30%, Level 90%
Ping-Pong:     Time 250-400ms, Feedback 35%, Mix 40%, Level 85%
Rhythmic:      Time 1/8 note synced, Feedback 25%, Mix 35%, Level 80%
Space Echo:    Time 400-600ms, Feedback 50%, Mix 45%, Level 75%
`\`\`

## Noise Gate
`\`\`
Threshold: -60 to 0 dB → Activation level
Attack:    0-100ms    → Opening speed
Hold:      0-500ms     → Minimum open time
Release:   10-1000ms   → Closing speed

Hip-Hop Presets:
Tight Drums:  Threshold -30dB, Attack 5ms, Hold 50ms, Release 100ms
Vocal Gate:   Threshold -25dB, Attack 10ms, Hold 100ms, Release 200ms
Lo-Fi Cut:    Threshold -20dB, Attack 1ms, Hold 20ms, Release 50ms
`\`\`

## EQ (Stompbox)
`\`\`
Low Freq:   80-250 Hz  → Bass control
Low Gain:   -15/+15 dB → Cut/boost
Mid Freq:   250Hz-4kHz → Midrange control
Mid Gain:   -15/+15 dB → Cut/boost
High Freq:  2-12 kHz   → Treble control
High Gain:  -15/+15 dB → Cut/boost

Hip-Hop Presets:
Drum Punch:   Low +3dB @120Hz, Mid +2dB @800Hz, High +1dB @5kHz
Vocal Clarity: Low -2dB @150Hz, Mid +3dB @2.5kHz, High +2dB @8kHz
Bass Focus:   Low +4dB @100Hz, Mid -3dB @400Hz, High 0dB
`\`\`

## Compressor
`\`\`
Threshold: -60 to 0 dB → Compression start point
Ratio:     1:1 to 20:1 → Compression intensity
Attack:    0.1-100ms   → Reaction speed
Release:   10-1000ms   → Recovery speed
Makeup:    0-24 dB     → Output compensation

Hip-Hop Presets:
Drum Punch:   Threshold -15dB, Ratio 4:1, Attack 5ms, Release 100ms
Vocal Consistency: Threshold -18dB, Ratio 3:1, Attack 10ms, Release 200ms
Bass Sustain: Threshold -12dB, Ratio 6:1, Attack 8ms, Release 300ms
`\`\`

## Modulator
`\`\`
Mode:  Tremolo / Vibrato / Ring Mod
Rate:  0.1-20 Hz    → Modulation speed
Depth: 0-100%       → Effect intensity
Level: 0-100%       → Output gain

Hip-Hop Presets:
Tremolo Chops: Mode Tremolo, Rate 2Hz, Depth 70%, Level 80%
Vibrato Drift: Mode Vibrato, Rate 0.5Hz, Depth 40%, Level 60%
Ring Destruction: Mode Ring Mod, Rate 5Hz, Depth 80%, Level 70%
`\`\`

## Wah
`\`\`
Manual: 0-100%      → Filter frequency (manual mode)
Close:  0-100%      → Envelope sensitivity (auto mode)
Range:  0-100%      → Sweep width
Level:  0-100%      → Output gain

Hip-Hop Presets:
Manual Filter: Mode Manual, Position 60%, Range 70%, Level 90%
Auto Wah:      Mode Auto, Sensitivity 50%, Range 60%, Level 85%
Vowel Sound:   Mode Manual, Position 45%, Range 50%, Level 95%
`\`\`

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*

```

---

## FILE: 01-Learning\Quick-Reference\cabinet-quick-pick.md

```markdown
# Cabinet Quick Pick Guide

One-page reference for selecting the right cabinet model for your sound. [SRC: IL-MAN]

## Cabinet Selector Matrix

| Need This Sound | Use This Cabinet | Hip-Hop Application |
|-----------------|------------------|---------------------|
| Modern, bright, tight | Cabinet 1 | Trap drums, 808s, modern production |
| Warm, vintage, round | Cabinet 2 | Lo-fi, classic samples, vocal warmth |
| Mid-forward, aggressive | Cabinet 3 | Rap vocals, radio presence, gritty drums |
| Balanced, transparent | Cabinet 4 | Clean processing, subtle enhancement |
| Boxy, lo-fi, limited | Cabinet 5 | Radio effects, telephone, punk, industrial |

## Cabinet 1: Bright/Modern
`\`\`
Character: Extended highs, tight lows, forward mids
Best for: Modern genres, aggressive drums, cutting leads

Frequency Profile:
- Strong 3-5kHz presence
- Tight 100Hz low end
- Extended treble to 8kHz+
- Slight 200Hz scoop

Hip-Hop Uses:
✓ Drum bus for trap aggression
✓ 808s that cut through mix
✓ Synth leads with bite
✓ Modern vocal treatment

When to use: Need clarity, modern sheen, punchy transients
`\`\`

## Cabinet 2: Vintage/Classic
`\`\`
Character: Warm, rounded, pronounced body, soft attack
Best for: Classic rock, lo-fi, retro drums, warmth

Frequency Profile:
- Rolled-off highs above 6kHz
- Strong 200-400Hz "body"
- Moderate 1-2kHz presence
- Soft low-end around 80Hz

Hip-Hop Uses:
✓ Vocal vintage warmth
✓ "Tape" drum character
✓ Bass saturation with controlled highs
✓ Classic sample treatment

When to use: Need warmth, vintage vibe, softening harsh sources
`\`\`

## Cabinet 3: British/Crunch
`\`\`
Character: Mid-forward, aggressive upper-mids, compressed
Best for: British invasion, punk, gritty vocals, presence

Frequency Profile:
- Aggressive 1-2.5kHz mid push
- Boxy 300-500Hz character
- Controlled 5-6kHz range
- Moderate low-end

Hip-Hop Uses:
✓ Rap vocals needing radio presence
✓ Drum room mic emulation
✓ Gritty synth bass
✓ Aggressive lead treatment

When to use: Need presence, aggression, "radio" vocal character
`\`\`

## Cabinet 4: American/Smooth
`\`\`
Character: Balanced, scooped mids, extended range
Best for: Clean tones, jazz, R&B, subtle processing

Frequency Profile:
- Scooped 300-800Hz (less honk)
- Extended smooth highs to 10kHz
- Balanced low-mid/high-mid
- Natural uncolored character

Hip-Hop Uses:
✓ Clean vocal processing
✓ Subtle drum enhancement
✓ Bass enhancement without aggression
✓ Synth pad space

When to use: Need transparency, balance, subtle speaker emulation
`\`\`

## Cabinet 5: Small/Practice Amp
`\`\`
Character: Boxy, limited range, compressed, immediate
Best for: Lo-fi, punk, megaphone, telephone effects

Frequency Profile:
- Strong midrange focus (500Hz-3kHz)
- Severe rolloff <100Hz and >5kHz
- Boxy 200-400Hz character
- Limited dynamic range

Hip-Hop Uses:
✓ Radio/megaphone vocal effects
✓ Lo-fi drum destruction
✓ Telephone/filter effects
✓ Industrial textures
✓ Budget equipment emulation

When to use: Need character, lo-fi texture, telephone/radio simulation
`\`\`

## Quick Decision Flowchart

`\`\`
Need modern/aggressive?
  YES → Cabinet 1 (Bright/Modern)
  NO → Continue...

Need warmth/vintage?
  YES → Cabinet 2 (Vintage/Classic)
  NO → Continue...

Need presence/grit?
  YES → Cabinet 3 (British/Crunch)
  NO → Continue...

Need lo-fi/boxy character?
  YES → Cabinet 5 (Small)
  NO → Cabinet 4 (American/Balanced) ← Default choice
`\`\`

## Cabinet Combinations with Stompboxes

**For Maximum Brightness:**
Cabinet 1 + Boost high frequencies in stompbox EQ

**For Maximum Warmth:**
Cabinet 2 + Cut highs in stompbox EQ + Low distortion

**For Radio Effect:**
Cabinet 5 + High-pass everything below 200Hz + Boost 1-3kHz

**For Modern Punch:**
Cabinet 1 + Moderate distortion + Noise gate

**For Vintage Tape:**
Cabinet 2 + Light chorus + Subtle saturation

## Cabinet as EQ

Remember: cabinets are complex EQ curves. You can use them purely as tone shaping:

- **Cabinet 5 on clean drums** = instant lo-fi bandpass filter
- **Cabinet 1 on vocals** = de-esser (natural high-end rolloff above 8kHz)
- **Cabinet 3 on bass** = presence boost without harshness
- **Cabinet 2 on synths** = tape-style warmth without plugins

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*

```

---

## FILE: 01-Learning\Quick-Reference\eq-cheat-sheet.md

```markdown
# Master 8-Band EQ Cheat Sheet

Quick reference for the master graphic EQ section in Hardcore. [SRC: IL-MAN]

## EQ Bands Overview

Hardcore's master section includes an 8-band graphic EQ for final tone shaping before the cabinet simulation.

`\`\`
Band 1: 60 Hz      → Sub-bass / low-end foundation
Band 2: 170 Hz     → Bass punch / kick body
Band 3: 310 Hz     → Low-mids / warmth / mud
Band 4: 600 Hz     → Low-mids / body / honk control
Band 5: 1 kHz      → Mids / presence / vocal clarity
Band 6: 3 kHz      → Upper-mids / attack / presence
Band 7: 6 kHz      → High-mids / bite / sibilance
Band 8: 12 kHz     → Highs / air / brightness
`\`\`

## Quick Start Presets

### Hip-Hop Drum Bus
`\`\`
Band 1 (60Hz):   +2 dB   → Sub reinforcement
Band 2 (170Hz):  +3 dB   → Kick punch
Band 3 (310Hz):  -2 dB   → Remove mud
Band 4 (600Hz):  0 dB    → Keep neutral
Band 5 (1kHz):   +1 dB   → Snare body
Band 6 (3kHz):   +2 dB   → Attack clarity
Band 7 (6kHz):   0 dB    → Keep neutral
Band 8 (12kHz):  +1 dB   → Air and presence
`\`\`
**Result:** Punchy, clear drums with controlled lows and defined highs.

### Rap Vocal Clarity
`\`\`
Band 1 (60Hz):   -3 dB   → Remove rumble
Band 2 (170Hz):  -2 dB   → Reduce boominess
Band 3 (310Hz):  -1 dB   → Tighten lows
Band 4 (600Hz):  0 dB    → Keep body
Band 5 (1kHz):   +2 dB   → Presence boost
Band 6 (3kHz):   +3 dB   → Clarity and intelligibility
Band 7 (6kHz):   -2 dB   → De-ess (reduce sibilance)
Band 8 (12kHz):  +2 dB   → Air and sheen
`\`\`
**Result:** Clear, present vocals that cut through the mix.

### Lo-Fi Dust
`\`\`
Band 1 (60Hz):   -4 dB   → Remove sub
Band 2 (170Hz):  0 dB    → Keep some bass
Band 3 (310Hz):  +2 dB   → Add warmth/mud
Band 4 (600Hz):  +1 dB   → Mid push
Band 5 (1kHz):   0 dB    → Keep neutral
Band 6 (3kHz):   -3 dB   → Reduce clarity
Band 7 (6kHz):   -4 dB   → Reduce brightness
Band 8 (12kHz):  -6 dB   → Heavy air cut
`\`\`
**Result:** Warm, rolled-off, vintage character.

### Bass Guitar Focus
`\`\`
Band 1 (60Hz):   +3 dB   → Sub-bass weight
Band 2 (170Hz):  +2 dB   → Low-mid punch
Band 3 (310Hz):  0 dB    → Neutral
Band 4 (600Hz):  -3 dB   → Remove honk
Band 5 (1kHz):   0 dB    → Neutral
Band 6 (3kHz):   +2 dB   → Pick attack
Band 7 (6kHz):   +1 dB   → String clarity
Band 8 (12kHz):  -2 dB   → Tame harshness
`\`\`
**Result:** Full, punchy bass with controlled mids and defined attack.

### Synth Wide
`\`\`
Band 1 (60Hz):   +2 dB   → Weight
Band 2 (170Hz):  0 dB    → Neutral
Band 3 (310Hz):  -2 dB   → Remove mud
Band 4 (600Hz):  -1 dB   → Slight scoop
Band 5 (1kHz):   0 dB    → Neutral
Band 6 (3kHz):   +2 dB   → Presence
Band 7 (6kHz):   +3 dB   → Sparkle
Band 8 (12kHz):  +4 dB   → Maximum air
`\`\`
**Result:** Wide, bright, spacious synth tone.

## Problem Solving with EQ

### Fix: Boomy/Kick Drum Overpowering
`\`\`
Cut: Band 2 (170Hz) -3 to -4 dB
Cut: Band 1 (60Hz) -2 dB (if too sub-heavy)
`\`\`

### Fix: Harsh/Sibilant Vocals
`\`\`
Cut: Band 7 (6kHz) -3 to -4 dB
Cut: Band 6 (3kHz) -2 dB (if still harsh)
`\`\`

### Fix: Muddy/Low-End Buildup
`\`\`
Cut: Band 3 (310Hz) -3 to -4 dB
Cut: Band 4 (600Hz) -2 dB
High-pass in stompbox EQ if needed
`\`\`

### Fix: Thin/Weak Drums
`\`\`
Boost: Band 1 (60Hz) +2 to +3 dB
Boost: Band 2 (170Hz) +2 to +4 dB
Boost: Band 6 (3kHz) +2 dB for attack
`\`\`

### Fix: Boxy/Cardboard Sound
`\`\`
Cut: Band 4 (600Hz) -2 to -3 dB
Cut: Band 3 (310Hz) -1 to -2 dB
Boost: Band 5 (1kHz) +1 dB for presence
`\`\`

## Cabinet Interaction

Remember: The master EQ feeds INTO the cabinet simulation.

**If using Cabinet 1 (Bright):**
- May need to cut 6kHz and 12kHz slightly
- Can boost 3kHz for presence without harshness

**If using Cabinet 2 (Vintage):**
- Boost 12kHz to compensate for natural rolloff
- Can be more aggressive with 60-170Hz range

**If using Cabinet 5 (Boxy):**
- Cut 310Hz and 600Hz to reduce boxiness
- Cabinet will naturally roll off highs, so don't over-boost 12kHz

## EQ Tips

**Start flat:** Begin with all bands at 0 dB, then adjust as needed.

**Cut more than boost:** Cutting problem frequencies is often more transparent than boosting everything else.

**Use narrow cuts, wide boosts:** When cutting, be surgical. When boosting, be broader for natural sound.

**Trust your ears:** Numbers are guidelines. If it sounds good, it is good.

**A/B frequently:** Toggle the EQ on/off to ensure you're improving, not just changing.

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*

```

---

## FILE: 01-Learning\Quick-Reference\hip-hop-shortcuts.md

```markdown
# Hip-Hop Production Shortcuts

Quick keyboard shortcuts and workflow tips for hip-hop producers using Hardcore. [SRC: IL-MAN]

## Essential Shortcuts

### FL Studio Integration
`\`\`
Ctrl + Click on parameter: Reset to default
Shift + Click + Drag: Fine adjustment
Right-click on parameter: Create automation clip
Middle-click: Toggle parameter on/off
Alt + Click: Solo parameter effect (temporarily disable others)
`\`\`

### Browser Integration
`\`\`
Drag preset from browser: Load instantly
Right-click plugin slot: Save preset to browser
F8: Open plugin picker
F12: Close all plugin windows
`\`\`

## Hip-Hop Quick Chains

### One-Click Drum Destruction
1. Load Hardcore on drum bus
2. Enable: Distortion (Drive 50%, Tone +10)
3. Enable: Compressor (Ratio 4:1, Threshold -15dB)
4. Enable: Noise Gate (Threshold -25dB)
5. Set Cabinet: 1 (Bright/Modern)
6. Master EQ: Boost 170Hz +3dB, 3kHz +2dB
**Result:** Instant aggressive drum processing

### One-Click Vocal Lo-Fi
1. Load Hardcore on vocal track
2. Enable: Modulator (Vibrato, Rate 0.5Hz, Depth 40%)
3. Enable: Distortion (Drive 30%, Tone 0)
4. Set Cabinet: 5 (Small/Boxy)
5. Master EQ: Cut 60Hz -4dB, 12kHz -6dB, Boost 310Hz +2dB
6. Enable: Delay (Slapback 100ms, Mix 25%)
**Result:** Instant lo-fi vocal character

### One-Click Bass Saturation
1. Load Hardcore on bass track
2. Enable: Distortion (Drive 40%, Tone -10)
3. Enable: Compressor (Ratio 6:1, Threshold -12dB)
4. Set Cabinet: 3 (British/Crunch)
5. Master EQ: Boost 60Hz +3dB, Cut 600Hz -2dB, Boost 3kHz +2dB
**Result:** Gritty, present bass with controlled lows

### One-Click Radio Effect
1. Load Hardcore on vocal track
2. Enable: EQ (stomp) - High-pass 300Hz +12dB/octave
3. Enable: Distortion (Drive 25%, Tone +20)
4. Enable: Compressor (Ratio 8:1, Threshold -10dB)
5. Set Cabinet: 5 (Small/Boxy)
6. Master EQ: Boost 1-3kHz +4dB, Cut 60Hz -6dB, Cut 12kHz -8dB
**Result:** Instant radio/megaphone vocal effect

## Parallel Processing Quick Setup

### Method 1: Send Track
`\`\`
Step 1: Create send track (Ctrl + L)
Step 2: Load Hardcore on send
Step 3: Route source track to send (right-click send knob)
Step 4: Set Hardcore to 100% wet (Mix controls at max)
Step 5: Blend with dry using send level
`\`\`

### Method 2: Patcher (Advanced)
`\`\`
Step 1: Replace Hardcore with Patcher
Step 2: Add Hardcore module in Patcher
Step 3: Create parallel signal path
Step 4: Blend wet/dry with separate controls
`\`\`

### Method 3: Duplicate Track
`\`\`
Step 1: Clone track (Alt + C, Alt + V)
Step 2: Put Hardcore on clone only
Step 3: Mute effects on original (keep dry)
Step 4: Blend volumes in mixer
`\`\`

## Preset Management

### Saving Custom Hip-Hop Presets
`\`\`
1. Dial in your settings
2. Click plugin menu (top-left arrow)
3. Save preset as... → Choose location
4. Name format: "HipHop_[Type]_[Style]" 
   Example: "HipHop_Drums_Aggressive"
5. Save to: ...\Hardcore\02-Data\presets\
`\`\`

### Organizing Presets
`\`\`
Folder structure suggestion:
/Hip-Hop/
  /Drums/
    - Aggressive.fxp
    - Lo-Fi.fxp
    - Punchy.fxp
  /Vocals/
    - Lo-Fi.fxp
    - Radio.fxp
    - Double.fxp
  /Bass/
    - Gritty.fxp
    - Warm.fxp
  /Synths/
    - Wide.fxp
    - Lead.fxp
`\`\`

## CPU Optimization

### Reduce CPU Usage
`\`\`
Disable unused stompboxes: Click pedal icon to toggle off
Freeze tracks: Alt + Click freeze button on mixer channel
Bounce to audio: Alt + R to render and replace
Use sends: One Hardcore instance for multiple tracks
`\`\`

### Track Freeze Strategy
`\`\`
When Hardcore chain is finalized:
1. Select track in playlist
2. Alt + R (Render to audio)
3. Choose "Replace" option
4. Disable original plugin chain
5. Keep original muted for future edits
`\`\`

## Common Hip-Hop Scenarios

### Scenario: Kick Drum Not Punching
**Quick fix:** Enable Compressor (Ratio 4:1, Attack 5ms, Release 100ms) + Enable Distortion (Drive 20%, Tone 0)

### Scenario: Vocals Too Harsh
**Quick fix:** Enable EQ (stomp) - Cut 4kHz -3dB + Master EQ - Cut 6kHz -3dB + Use Cabinet 2 (Vintage)

### Scenario: 808 Too Sub-Heavy
**Quick fix:** Master EQ - Cut 60Hz -4dB + Use Cabinet 1 (Bright) + Enable Distortion (Drive 30% for harmonics)

### Scenario: Drums Too Harsh
**Quick fix:** Use Cabinet 2 (Vintage) + Master EQ - Cut 6kHz -2dB, 12kHz -3dB + Enable Noise Gate (Threshold -20dB)

### Scenario: Need Instant Width
**Quick fix:** Enable Chorus (Rate 0.3Hz, Depth 40%, Level 40%) + Enable Cabinet 4 (American/Balanced)

## Template Integration

### Create Hip-Hop Template
`\`\`
1. Set up standard Hardcore chains on:
   - Drum bus (Aggressive preset)
   - Vocal track (Lo-Fi preset)
   - Bass track (Saturation preset)
   - Send track (Reverb/Delay)

2. Save as template:
   File → Templates → Save as...
   Name: "Hip-Hop Hardcore Setup"

3. Use for new projects:
   File → New from template → Hip-Hop Hardcore Setup
`\`\`

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*

```

---

## FILE: 01-Learning\Quick-Reference\parallel-vs-insert.md

```markdown
# Parallel vs Insert Processing Guide

Understanding when to use Hardcore as an insert effect vs. parallel send for hip-hop production. [SRC: IL-MAN]

## Insert Processing

**What it is:** Hardcore placed directly on the instrument/track channel, processing the entire signal (100% wet by default).

### When to Use Insert

✅ **Total transformation desired**
- Completely changing the character of the source
- Print-and-commit processing
- Extreme effects where dry signal doesn't fit

✅ **Single sound sources**
- Individual drum samples
- Bass guitar recordings
- Lead vocal takes
- Synth patches

✅ **Simpler chains**
- When you don't need complex blending
- Quick processing decisions
- Demo/idea recording

✅ **CPU conservation on single tracks**
- One instance per sound
- No additional mixer routing needed

### Insert Examples

**Example 1: Bass Guitar**
`\`\`
Track: Bass Guitar
Hardcore (Insert): Distortion + Compression + Cabinet 3
Result: Complete bass tone, fully committed
`\`\`

**Example 2: Vocal Effect**
`\`\`
Track: Lead Vocal
Hardcore (Insert): Radio effect chain (EQ + Distortion + Cabinet 5)
Result: 100% wet, no dry vocal mixed in
`\`\`

**Example 3: Drum Sample**
`\`\`
Track: Snare Sample
Hardcore (Insert): Distortion + Compression + Gate
Result: Completely transformed snare character
`\`\`

## Parallel Processing (Send/Return)

**What it is:** Hardcore placed on a send/return track, blended with the dry signal via mixer faders.

### When to Use Parallel

✅ **Blend control needed**
- Want to control how much effect vs. dry signal
- Subtle to extreme processing in one plugin
- Easy A/B comparison

✅ **Multiple tracks sharing processing**
- Drum group (kick, snare, hats) sharing saturation
- Multiple vocals sharing reverb/delay
- Bus processing with individual track control

✅ **Preserving transients**
- Heavy distortion blended with clean signal
- Parallel compression (New York style)
- Maintaining punch while adding character

✅ **Complex layering**
- Multiple Hardcore instances on different sends
- Frequency-split processing
- Mid/side style effects

### Parallel Examples

**Example 1: Drum Bus Saturation**
`\`\`
Track 1: Kick (Dry)
Track 2: Snare (Dry)
Track 3: Hats (Dry)
Send Track: Hardcore (Distortion + Compression + Cabinet 1)

Routing: All drum tracks → Send track
Mixing: Blend dry drums (80%) with processed send (20%)
Result: Tight drums with controlled aggression added
`\`\`

**Example 2: Vocal Parallel Reverb**
`\`\`
Track: Lead Vocal (Dry)
Send Track: Hardcore (Short Reverb + Cabinet 2)

Routing: Vocal → Send
Mixing: Dry vocal (100%) + Reverb send (30%)
Result: Vocal with vintage room character
`\`\`

**Example 3: Parallel Bass Processing**
`\`\`
Track 1: Bass - Low frequencies (High-pass removed)
Track 2: Bass - High frequencies (Low-pass removed)
Send Track 1: Clean cabinet (Cabinet 2) for lows
Send Track 2: Distorted (Cabinet 3) for highs

Mixing: Blend both sends with dry bass
Result: Full bass with controlled saturation on top end
`\`\`

## Decision Matrix

| Situation | Insert | Parallel | Reasoning |
|-----------|--------|----------|-----------|
| Extreme distortion | ✓ | ✓ | Use parallel if transients matter |
| Subtle saturation | ✓ | ✓ | Either works, parallel gives more control |
| Reverb/Delay | ✗ | ✓ | Always parallel for time-based effects |
| Noise gate | ✓ | ✗ | Must be on signal itself |
| EQ shaping | ✓ | ✗ | Insert for source tone |
| Drum bus processing | ✗ | ✓ | Blend control for group |
| Vocal special FX | ✓ | ✓ | Depends on effect intensity |
| Multiple tracks | ✗ | ✓ | Efficiency via sends |

## Setting Up Parallel Processing in FL Studio

### Method 1: Standard Send/Return
`\`\`
Step 1: Create Send Track
- In mixer, right-click on empty track
- Select "Create send track" or press Ctrl + L

Step 2: Load Hardcore
- Open Hardcore on the send track
- Set all mix controls to 100% wet
- Set Cabinet as desired

Step 3: Route Source Track
- On source track, right-click the send knob
- Select the send track (or drag to route)
- Adjust send level to taste

Step 4: Blend
- Keep dry track at normal level
- Adjust send track fader for blend amount
- Tip: Solo both to hear combined effect
`\`\`

### Method 2: Multiple Sends
`\`\`
Step 1: Create multiple send tracks
- Send A: Light processing (Cabinet + subtle saturation)
- Send B: Heavy processing (Distortion + Cabinet 5)
- Send C: Time effects (Reverb + Delay)

Step 2: Route selectively
- Send source to all three sends
- Adjust each send level independently

Step 3: Complex blending
- Dry: 70%
- Send A: 20%
- Send B: 10%
- Send C: 25%
`\`\`

### Method 3: Patcher (Advanced)
`\`\`
Step 1: Replace Hardcore with Patcher
- Right-click plugin slot
- Select Patcher

Step 2: Create parallel paths
- Add Hardcore to one module
- Create dry signal path
- Use surface controls to blend

Step 3: Save as preset
- Complex parallel chains can be saved
- Reusable across projects
`\`\`

## Hip-Hop Specific Strategies

### Parallel Distortion for Drums
**Why:** Heavy distortion adds harmonics but loses punch. Parallel processing preserves transients.
`\`\`
Dry Drums: 80% level
Distortion Send: 20% level
Hardcore: Heavy distortion + Noise gate + Cabinet 1
Result: Punchy drums with grit and edge
`\`\`

### Parallel Cabinet for Character
**Why:** Cabinet changes tone without heavy processing.
`\`\`
Dry Signal: 70% level
Cabinet Send: 30% level
Hardcore: Only cabinet simulation (no stompboxes)
Result: Subtle speaker character
`\`\`

### Parallel Compression (NY Style)
**Why:** Heavy compression for density, blended with uncompressed punch.
`\`\`
Dry Drums: 60% level
Compressed Send: 40% level
Hardcore: Compressor (Ratio 10:1, Fast attack/release)
Result: Dense, punchy drums
`\`\`

## Common Mistakes

❌ **Using time effects as insert**
- Reverb/Delay as insert washes out the source
- Always use parallel for time-based effects

❌ **100% wet parallel sends**
- Defeats the purpose of parallel processing
- Keep some dry signal or adjust blend

❌ **Gain staging issues**
- Parallel paths can cause phase issues if not level-matched
- Use meters to ensure consistent loudness

❌ **Over-complicating simple sources**
- Single synth note doesn't need parallel processing
- Reserve for complex sources or buses

## CPU Considerations

**Insert Method:** One instance per track = Higher CPU with many tracks
**Parallel Method:** One instance shared across multiple tracks = Lower CPU overall

**For large projects:** Use parallel sends for shared processing (drums, vocals, etc.)

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*

```

---

## FILE: 02-Data\parameters\00_Parameter_Dictionary.md

```markdown
# Parameter Dictionary: Hardcore

| Parameter | Type | Description | Vibe Impact | Mix Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Distortion Gain**| Knob | Intensity of harmonic saturation. | **Vibey** (Low), **Hard** (High).| Aggression/Compression.|
| **Cabinet Select** | Choice | Speaker frequency profile (1-5).| **Moody** (2), **Upbeat** (4). | Freq rolloff/Color. |
| **Noise Gate Thresh**| Knob | Silences audio below a level. | **Moody** (High isolation). | Cleanliness/Hiss. |
| **EQ Sliders** | Slider | 8-band Graphic EQ. | **Jazzy** (Mid-boost). | Tone balance. |
| **Wah Frequency** | Knob | Filter sweep position. | **Psychedelic** (Automated). | Vowel/Tone character. |
| **Modulator Rate** | Knob | Speed of AM/RM/FM effect. | **Psychedelic** (High). | Tonal texture. |

## Mix Impact Tags
*   **Hiss/Noise:** Inevitable with high-gain settings. Requires the Noise Gate.
*   **Frequency Masking:** The Cabinet simulation is the most powerful "low-pass" filter in your arsenal for taming harsh synths.
*   **Stereo Width:** Chorus and Flanger pedals in Hardcore are great for widening mono vocals or guitars.

```

---

## FILE: 02-Data\parameters\main-parameters.json

```json
{
  "pluginName": "Hardcore",
  "pluginType": "Amp Simulator / Multi-FX Rack",
  "version": "FL Studio Native",
  "dataSource": "IL-MAN",
  "mainSections": {
    "inputStage": {
      "name": "Input Stage",
      "description": "Initial gain staging and routing",
      "parameters": [
        {
          "name": "Input Gain",
          "range": "-12 to +12 dB",
          "default": 0,
          "description": "Adjusts level hitting the first stompbox",
          "tips": "Higher input = more saturation in distortion pedals"
        },
        {
          "name": "Input Routing",
          "range": "Left / Right / Stereo / Mid/Side",
          "default": "Stereo",
          "description": "How the input signal is processed",
          "tips": "Use Mono for guitar sources, Stereo for drums/synths"
        }
      ]
    },
    "stompboxChain": {
      "name": "Stompbox Chain",
      "description": "11 configurable effect slots",
      "parameters": [
        {
          "name": "Effect Position",
          "range": "1-11",
          "description": "Drag and drop to reorder effects",
          "tips": "Order dramatically affects the final tone"
        },
        {
          "name": "Effect Toggle",
          "range": "On/Off",
          "default": "Off",
          "description": "Enable/disable individual stompboxes",
          "tips": "Disable unused effects to save CPU"
        }
      ]
    },
    "masterSection": {
      "name": "Master Section",
      "description": "Final tone shaping before output",
      "parameters": [
        {
          "name": "Master 8-Band EQ",
          "type": "graphic",
          "bands": [
            {
              "band": 1,
              "frequency": "60 Hz",
              "range": "-12 to +12 dB",
              "default": 0,
              "function": "Sub-bass control"
            },
            {
              "band": 2,
              "frequency": "170 Hz",
              "range": "-12 to +12 dB",
              "default": 0,
              "function": "Bass punch and kick body"
            },
            {
              "band": 3,
              "frequency": "310 Hz",
              "range": "-12 to +12 dB",
              "default": 0,
              "function": "Low-mids and warmth"
            },
            {
              "band": 4,
              "frequency": "600 Hz",
              "range": "-12 to +12 dB",
              "default": 0,
              "function": "Midrange body"
            },
            {
              "band": 5,
              "frequency": "1 kHz",
              "range": "-12 to +12 dB",
              "default": 0,
              "function": "Presence and vocal clarity"
            },
            {
              "band": 6,
              "frequency": "3 kHz",
              "range": "-12 to +12 dB",
              "default": 0,
              "function": "Attack and upper-mid presence"
            },
            {
              "band": 7,
              "frequency": "6 kHz",
              "range": "-12 to +12 dB",
              "default": 0,
              "function": "High-mid bite and sibilance control"
            },
            {
              "band": 8,
              "frequency": "12 kHz",
              "range": "-12 to +12 dB",
              "default": 0,
              "function": "Air and brightness"
            }
          ],
          "tips": "Use cuts for problem frequencies, boosts for enhancement"
        },
        {
          "name": "Cabinet Model",
          "range": "Cabinet 1-5",
          "default": 1,
          "options": [
            {
              "id": 1,
              "name": "Bright/Modern",
              "character": "Extended highs, tight lows, forward mids"
            },
            {
              "id": 2,
              "name": "Vintage/Classic",
              "character": "Warm, rounded highs, pronounced body"
            },
            {
              "id": 3,
              "name": "British/Crunch",
              "character": "Mid-forward, aggressive upper-mids"
            },
            {
              "id": 4,
              "name": "American/Smooth",
              "character": "Balanced, scooped mids, extended range"
            },
            {
              "id": 5,
              "name": "Small/Practice",
              "character": "Boxy, limited range, compressed"
            }
          ],
          "tips": "Cabinet acts as final tone-shaping filter"
        },
        {
          "name": "Cabinet Mix",
          "range": "0-100%",
          "default": 100,
          "description": "Blend of cabinet simulation",
          "tips": "Reduce for cleaner sound, 100% for full speaker emulation"
        }
      ]
    },
    "outputStage": {
      "name": "Output Stage",
      "description": "Final output control",
      "parameters": [
        {
          "name": "Output Gain",
          "range": "-12 to +12 dB",
          "default": 0,
          "description": "Final level adjustment before leaving plugin",
          "tips": "Adjust to match input level for unity gain"
        },
        {
          "name": "Mix",
          "range": "0-100% (Dry/Wet)",
          "default": 100,
          "description": "Global dry/wet blend",
          "tips": "Use parallel send routing for better control than this mix knob"
        }
      ]
    }
  },
  "globalControls": {
    "presetManagement": {
      "load": "Click preset name in top bar",
      "save": "Menu → Save preset as",
      "browser": "Drag from FL Studio browser",
      "randomize": "Menu → Randomize (experimental)"
    },
    "automation": {
      "method": "Right-click parameter → Create automation clip",
      "parametersAvailable": "All stompbox and master parameters",
      "tips": "Automate wah position, distortion drive, or cabinet selection"
    },
    "midiControl": {
      "method": "Right-click parameter → Link to controller",
      "ccSupport": "Full MIDI CC mapping",
      "tips": "Use expression pedal for wah control"
    }
  }
}

```

---

## FILE: 02-Data\parameters\stompbox-parameters.json

```json
{
  "pluginName": "Hardcore",
  "stompboxEffects": {
    "distortion": {
      "name": "Distortion",
      "type": "Saturation/Distortion",
      "description": "Adds harmonics and grit to signal",
      "controls": {
        "drive": {
          "name": "Drive",
          "range": "0-100%",
          "default": 30,
          "function": "Amount of saturation/distortion",
          "tips": "Low values = subtle warmth, high values = aggressive dirt"
        },
        "tone": {
          "name": "Tone",
          "range": "-50 to +50",
          "default": 0,
          "function": "Brightness/darkness tilt",
          "tips": "Positive = brighter, negative = darker"
        },
        "level": {
          "name": "Level",
          "range": "0-100%",
          "default": 80,
          "function": "Output gain compensation",
          "tips": "Adjust to maintain consistent volume when toggling"
        }
      },
      "hipHopUses": [
        "Drum punch and aggression",
        "Bass saturation and harmonics",
        "Vocal edge and character",
        "Synth grit and bite"
      ]
    },
    "chorus": {
      "name": "Chorus",
      "type": "Modulation",
      "description": "Creates thickening and doubling via pitch modulation",
      "controls": {
        "rate": {
          "name": "Rate",
          "range": "0.1-10 Hz",
          "default": 0.5,
          "function": "LFO modulation speed",
          "tips": "Slower = more subtle, faster = more obvious"
        },
        "depth": {
          "name": "Depth",
          "range": "0-100%",
          "default": 40,
          "function": "Modulation amount/intensity",
          "tips": "Higher depth = more pronounced effect"
        },
        "level": {
          "name": "Level",
          "range": "0-100%",
          "default": 50,
          "function": "Effect mix amount",
          "tips": "100% for full effect, lower for subtle doubling"
        }
      },
      "hipHopUses": [
        "Vocal doubling and thickening",
        "Synth widening",
        "Drum width enhancement",
        "Guitar spaciousness"
      ]
    },
    "flanger": {
      "name": "Flanger",
      "type": "Modulation",
      "description": "Sweeping comb filter creating jet-plane effect",
      "controls": {
        "rate": {
          "name": "Rate",
          "range": "0.1-10 Hz",
          "default": 0.3,
          "function": "Sweep speed",
          "tips": "0.1-0.5Hz for slow sweep, 2-5Hz for vibrato effect"
        },
        "depth": {
          "name": "Depth",
          "range": "0-100%",
          "default": 50,
          "function": "Sweep range",
          "tips": "Controls how far the comb filter sweeps"
        },
        "feedback": {
          "name": "Feedback",
          "range": "-100 to +100%",
          "default": 30,
          "function": "Resonance amount and polarity",
          "tips": "Positive = sharper resonance, negative = hollow"
        },
        "level": {
          "name": "Level",
          "range": "0-100%",
          "default": 50,
          "function": "Mix amount",
          "tips": "Balance between dry and flanged signal"
        }
      },
      "hipHopUses": [
        "Dramatic transition effects",
        "Vocal psychedelia",
        "Drum movement and texture",
        "Sci-fi sound design"
      ]
    },
    "phaser": {
      "name": "Phaser",
      "type": "Modulation",
      "description": "All-pass filter sweep creating notches in frequency",
      "controls": {
        "rate": {
          "name": "Rate",
          "range": "0.1-10 Hz",
          "default": 0.3,
          "function": "Notch sweep speed",
          "tips": "Slower rates for subtle movement"
        },
        "depth": {
          "name": "Depth",
          "range": "0-100%",
          "default": 40,
          "function": "Notch depth",
          "tips": "Deeper notches = more pronounced effect"
        },
        "stages": {
          "name": "Stages",
          "range": "2, 4, 6, 8",
          "default": 4,
          "function": "Number of all-pass filter stages",
          "tips": "More stages = deeper, more notches"
        },
        "level": {
          "name": "Level",
          "range": "0-100%",
          "default": 50,
          "function": "Mix amount",
          "tips": "Balance with dry signal"
        }
      },
      "hipHopUses": [
        "Funky drum movement",
        "Liquid synth textures",
        "Subtle vocal enhancement",
        "Retro psychedelic effects"
      ]
    },
    "reverb": {
      "name": "Reverb",
      "type": "Time-based",
      "description": "Room simulation and space creation",
      "controls": {
        "size": {
          "name": "Size",
          "range": "0-100%",
          "default": 50,
          "function": "Simulated room size",
          "tips": "Low = small room, high = large hall"
        },
        "damp": {
          "name": "Damp",
          "range": "0-100%",
          "default": 50,
          "function": "High-frequency decay",
          "tips": "Higher = darker, more muffled reverb"
        },
        "mix": {
          "name": "Mix",
          "range": "0-100%",
          "default": 30,
          "function": "Wet/dry balance",
          "tips": "Use as send effect with 100% wet, adjust track fader"
        },
        "level": {
          "name": "Level",
          "range": "0-100%",
          "default": 80,
          "function": "Output gain",
          "tips": "Compensate for wet signal volume"
        }
      },
      "hipHopUses": [
        "Vocal space and depth",
        "Drum room sound",
        "Ambient textures",
        "Transition effects"
      ]
    },
    "delay": {
      "name": "Delay",
      "type": "Time-based",
      "description": "Echo generation with feedback",
      "controls": {
        "time": {
          "name": "Time",
          "range": "1-2000ms",
          "default": 300,
          "function": "Delay length",
          "tips": "80-120ms for slapback, 300-600ms for rhythmic"
        },
        "feedback": {
          "name": "Feedback",
          "range": "0-100%",
          "default": 30,
          "function": "Repeat decay amount",
          "tips": "Higher = more echoes, risk of runaway feedback"
        },
        "mix": {
          "name": "Mix",
          "range": "0-100%",
          "default": 35,
          "function": "Wet/dry balance",
          "tips": "Lower for subtle echo, higher for prominent effect"
        },
        "level": {
          "name": "Level",
          "range": "0-100%",
          "default": 80,
          "function": "Output gain",
          "tips": "Match volume with dry signal"
        }
      },
      "hipHopUses": [
        "Vocal slapback",
        "Rhythmic doubling",
        "Drum echo effects",
        "Atmospheric space"
      ]
    },
    "noiseGate": {
      "name": "Noise Gate",
      "type": "Dynamics",
      "description": "Eliminates signal below threshold",
      "controls": {
        "threshold": {
          "name": "Threshold",
          "range": "-60 to 0 dB",
          "default": -30,
          "function": "Activation level",
          "tips": "Set just above noise floor, below desired signal"
        },
        "attack": {
          "name": "Attack",
          "range": "0-100ms",
          "default": 5,
          "function": "Opening speed",
          "tips": "Fast for drums, slower for natural sounds"
        },
        "hold": {
          "name": "Hold",
          "range": "0-500ms",
          "default": 50,
          "function": "Minimum open time",
          "tips": "Prevents chattering on decaying sounds"
        },
        "release": {
          "name": "Release",
          "range": "10-1000ms",
          "default": 100,
          "function": "Closing speed",
          "tips": "Match to source decay characteristic"
        }
      },
      "hipHopUses": [
        "Tight drum truncation",
        "Vocal breath removal",
        "Lo-fi abrupt cuts",
        "Noise reduction"
      ]
    },
    "eqStompbox": {
      "name": "EQ (Stompbox)",
      "type": "Filtering",
      "description": "3-band parametric EQ for chain positioning",
      "controls": {
        "lowFreq": {
          "name": "Low Frequency",
          "range": "80-250 Hz",
          "default": 120,
          "function": "Low band center frequency"
        },
        "lowGain": {
          "name": "Low Gain",
          "range": "-15 to +15 dB",
          "default": 0,
          "function": "Low band cut/boost"
        },
        "midFreq": {
          "name": "Mid Frequency",
          "range": "250Hz-4kHz",
          "default": 1000,
          "function": "Mid band center frequency"
        },
        "midGain": {
          "name": "Mid Gain",
          "range": "-15 to +15 dB",
          "default": 0,
          "function": "Mid band cut/boost"
        },
        "highFreq": {
          "name": "High Frequency",
          "range": "2-12 kHz",
          "default": 5000,
          "function": "High band center frequency"
        },
        "highGain": {
          "name": "High Gain",
          "range": "-15 to +15 dB",
          "default": 0,
          "function": "High band cut/boost"
        }
      },
      "hipHopUses": [
        "Pre-distortion frequency shaping",
        "Problem frequency correction",
        "Tone matching",
        "High-pass filtering for lo-fi"
      ]
    },
    "compressor": {
      "name": "Compressor",
      "type": "Dynamics",
      "description": "Reduces dynamic range above threshold",
      "controls": {
        "threshold": {
          "name": "Threshold",
          "range": "-60 to 0 dB",
          "default": -18,
          "function": "Compression start point",
          "tips": "Lower threshold = more compression"
        },
        "ratio": {
          "name": "Ratio",
          "range": "1:1 to 20:1",
          "default": 4,
          "function": "Compression intensity",
          "tips": "Higher ratio = more aggressive limiting"
        },
        "attack": {
          "name": "Attack",
          "range": "0.1-100ms",
          "default": 10,
          "function": "Reaction speed",
          "tips": "Fast attack = less transient, slow = more punch"
        },
        "release": {
          "name": "Release",
          "range": "10-1000ms",
          "default": 200,
          "function": "Recovery speed",
          "tips": "Match to source rhythm for natural sound"
        },
        "makeup": {
          "name": "Makeup Gain",
          "range": "0-24 dB",
          "default": 6,
          "function": "Output compensation",
          "tips": "Compensate for volume lost to compression"
        }
      },
      "hipHopUses": [
        "Drum punch and control",
        "Vocal consistency",
        "Bass sustain",
        "Parallel New York compression"
      ]
    },
    "modulator": {
      "name": "Modulator",
      "type": "Specialized Modulation",
      "description": "Tremolo, vibrato, and ring modulation",
      "controls": {
        "mode": {
          "name": "Mode",
          "range": "Tremolo / Vibrato / Ring Mod",
          "default": "Tremolo",
          "function": "Modulation type",
          "tips": "Tremolo = amplitude, Vibrato = pitch, Ring = frequency multiplication"
        },
        "rate": {
          "name": "Rate",
          "range": "0.1-20 Hz",
          "default": 2,
          "function": "Modulation speed",
          "tips": "2-8Hz for tremolo chops, 0.5Hz for vibrato drift"
        },
        "depth": {
          "name": "Depth",
          "range": "0-100%",
          "default": 70,
          "function": "Effect intensity",
          "tips": "100% for extreme, 30% for subtle"
        },
        "level": {
          "name": "Level",
          "range": "0-100%",
          "default": 80,
          "function": "Output gain",
          "tips": "Adjust for unity gain"
        }
      },
      "hipHopUses": [
        "Tremolo chop effects",
        "Pitch drift and detune",
        "Ring mod destruction",
        "Special FX and textures"
      ]
    },
    "wah": {
      "name": "Wah",
      "type": "Filtering",
      "description": "Vocal envelope filter effect",
      "controls": {
        "manual": {
          "name": "Manual",
          "range": "0-100%",
          "default": 50,
          "function": "Filter frequency (manual mode)",
          "tips": "Sweep to find vocal vowel sounds (A-E-I-O-U)"
        },
        "close": {
          "name": "Close",
          "range": "0-100%",
          "default": 50,
          "function": "Envelope sensitivity (auto mode)",
          "tips": "Higher = more responsive to input dynamics"
        },
        "range": {
          "name": "Range",
          "range": "0-100%",
          "default": 60,
          "function": "Sweep width",
          "tips": "Controls how far the filter travels"
        },
        "level": {
          "name": "Level",
          "range": "0-100%",
          "default": 85,
          "function": "Output gain",
          "tips": "Wah can have resonant peaks, adjust to avoid clipping"
        }
      },
      "hipHopUses": [
        "Vocal vowel filtering",
        "Funky rhythmic effects",
        "Filter sweeps",
        "Envelope-controlled filtering"
      ]
    }
  }
}

```

---

## FILE: 02-Data\presets\hip-hop-presets.json

```json
{
  "plugin": "Hardcore",
  "category": "Hip-Hop Presets",
  "dataSource": "IL-MAN",
  "presets": [
    {
      "name": "Drum Destruction - Aggressive",
      "description": "Heavy saturation for modern trap drums",
      "chain": {
        "distortion": {
          "enabled": true,
          "drive": 65,
          "tone": 15,
          "level": 85
        },
        "compressor": {
          "enabled": true,
          "threshold": -15,
          "ratio": 5,
          "attack": 5,
          "release": 100,
          "makeup": 8
        },
        "noiseGate": {
          "enabled": true,
          "threshold": -28,
          "attack": 3,
          "hold": 40,
          "release": 80
        },
        "cabinet": 1,
        "masterEQ": {
          "band1": 2,
          "band2": 3,
          "band3": -2,
          "band4": 0,
          "band5": 1,
          "band6": 3,
          "band7": 0,
          "band8": 1
        }
      },
      "useCase": "Drum bus processing for trap and modern hip-hop"
    },
    {
      "name": "Drum Destruction - Lo-Fi",
      "description": "Warm, dusty character for vintage samples",
      "chain": {
        "distortion": {
          "enabled": true,
          "drive": 35,
          "tone": -10,
          "level": 80
        },
        "compressor": {
          "enabled": true,
          "threshold": -20,
          "ratio": 3,
          "attack": 10,
          "release": 250,
          "makeup": 5
        },
        "cabinet": 2,
        "masterEQ": {
          "band1": -2,
          "band2": 0,
          "band3": 2,
          "band4": 1,
          "band5": 0,
          "band6": -2,
          "band7": -3,
          "band8": -5
        }
      },
      "useCase": "Boom-bap drums, vintage samples, lo-fi aesthetic"
    },
    {
      "name": "Vocal Lo-Fi",
      "description": "Dusty, degraded vocal character",
      "chain": {
        "modulator": {
          "enabled": true,
          "mode": "vibrato",
          "rate": 0.4,
          "depth": 35,
          "level": 60
        },
        "distortion": {
          "enabled": true,
          "drive": 30,
          "tone": 0,
          "level": 75
        },
        "delay": {
          "enabled": true,
          "time": 100,
          "feedback": 15,
          "mix": 25,
          "level": 80
        },
        "cabinet": 5,
        "masterEQ": {
          "band1": -4,
          "band2": -2,
          "band3": 2,
          "band4": 0,
          "band5": 0,
          "band6": -3,
          "band7": -4,
          "band8": -6
        }
      },
      "useCase": "Lo-fi vocals, intros, verses, vintage aesthetic"
    },
    {
      "name": "Vocal Radio",
      "description": "Radio/megaphone telephone effect",
      "chain": {
        "eqStompbox": {
          "enabled": true,
          "lowFreq": 200,
          "lowGain": -12,
          "midFreq": 2500,
          "midGain": 6,
          "highFreq": 3000,
          "highGain": -8
        },
        "distortion": {
          "enabled": true,
          "drive": 25,
          "tone": 25,
          "level": 85
        },
        "compressor": {
          "enabled": true,
          "threshold": -12,
          "ratio": 8,
          "attack": 2,
          "release": 150,
          "makeup": 6
        },
        "cabinet": 5,
        "masterEQ": {
          "band1": -6,
          "band2": -4,
          "band3": 0,
          "band4": 3,
          "band5": 5,
          "band6": 2,
          "band7": -2,
          "band8": -8
        }
      },
      "useCase": "Radio hooks, megaphone effects, telephone vocals"
    },
    {
      "name": "Bass Grit",
      "description": "Controlled saturation for 808s and bass",
      "chain": {
        "distortion": {
          "enabled": true,
          "drive": 40,
          "tone": -15,
          "level": 90
        },
        "compressor": {
          "enabled": true,
          "threshold": -14,
          "ratio": 6,
          "attack": 8,
          "release": 300,
          "makeup": 7
        },
        "cabinet": 3,
        "masterEQ": {
          "band1": 3,
          "band2": 2,
          "band3": 0,
          "band4": -3,
          "band5": 0,
          "band6": 2,
          "band7": 1,
          "band8": -2
        }
      },
      "useCase": "808 bass lines, synth bass, aggressive low-end"
    },
    {
      "name": "Bass Warmth",
      "description": "Subtle warmth and harmonics for bass",
      "chain": {
        "distortion": {
          "enabled": true,
          "drive": 20,
          "tone": -5,
          "level": 85
        },
        "compressor": {
          "enabled": true,
          "threshold": -18,
          "ratio": 3,
          "attack": 12,
          "release": 400,
          "makeup": 4
        },
        "cabinet": 2,
        "masterEQ": {
          "band1": 2,
          "band2": 1,
          "band3": 0,
          "band4": -1,
          "band5": 0,
          "band6": 1,
          "band7": 0,
          "band8": -1
        }
      },
      "useCase": "Warm bass guitar, subtle 808 enhancement, vintage character"
    },
    {
      "name": "Industrial Vocal",
      "description": "Harsh, aggressive industrial character",
      "chain": {
        "distortion": {
          "enabled": true,
          "drive": 80,
          "tone": 30,
          "level": 70
        },
        "modulator": {
          "enabled": true,
          "mode": "ring mod",
          "rate": 8,
          "depth": 70,
          "level": 65
        },
        "noiseGate": {
          "enabled": true,
          "threshold": -22,
          "attack": 1,
          "hold": 20,
          "release": 50
        },
        "compressor": {
          "enabled": true,
          "threshold": -10,
          "ratio": 10,
          "attack": 3,
          "release": 80,
          "makeup": 5
        },
        "cabinet": 5,
        "masterEQ": {
          "band1": -2,
          "band2": 1,
          "band3": 3,
          "band4": 4,
          "band5": 2,
          "band6": -1,
          "band7": -3,
          "band8": -5
        }
      },
      "useCase": "Industrial rap, aggressive hooks, experimental vocals"
    },
    {
      "name": "Synth Wide",
      "description": "Spatial enhancement for synth leads and pads",
      "chain": {
        "chorus": {
          "enabled": true,
          "rate": 0.3,
          "depth": 45,
          "level": 50
        },
        "phaser": {
          "enabled": true,
          "rate": 0.15,
          "depth": 35,
          "stages": 6,
          "level": 40
        },
        "reverb": {
          "enabled": true,
          "size": 60,
          "damp": 55,
          "mix": 30,
          "level": 80
        },
        "cabinet": 4,
        "masterEQ": {
          "band1": 1,
          "band2": 0,
          "band3": -1,
          "band4": 0,
          "band5": 0,
          "band6": 2,
          "band7": 3,
          "band8": 4
        }
      },
      "useCase": "Lead synths, pads, atmospheric textures"
    },
    {
      "name": "Drum Punch - Parallel",
      "description": "For use on send track with parallel processing",
      "chain": {
        "distortion": {
          "enabled": true,
          "drive": 70,
          "tone": 10,
          "level": 100
        },
        "compressor": {
          "enabled": true,
          "threshold": -12,
          "ratio": 8,
          "attack": 3,
          "release": 60,
          "makeup": 0
        },
        "noiseGate": {
          "enabled": true,
          "threshold": -35,
          "attack": 2,
          "hold": 30,
          "release": 70
        },
        "cabinet": 1,
        "masterEQ": {
          "band1": 0,
          "band2": 2,
          "band3": -1,
          "band4": 0,
          "band5": 1,
          "band6": 4,
          "band7": 2,
          "band8": 1
        }
      },
      "useCase": "Create send track, route drums to it, blend 20-30% with dry",
      "note": "Designed for parallel processing - use on send only"
    },
    {
      "name": "Tape Saturation",
      "description": "Subtle tape-style saturation for warmth",
      "chain": {
        "distortion": {
          "enabled": true,
          "drive": 15,
          "tone": -5,
          "level": 90
        },
        "compressor": {
          "enabled": true,
          "threshold": -22,
          "ratio": 2,
          "attack": 15,
          "release": 350,
          "makeup": 3
        },
        "cabinet": 2,
        "masterEQ": {
          "band1": 0,
          "band2": 1,
          "band3": 1,
          "band4": 0,
          "band5": 0,
          "band6": 0,
          "band7": -2,
          "band8": -3
        }
      },
      "useCase": "Master bus, drum bus, individual tracks needing warmth"
    }
  ]
}

```

---

## FILE: 02-Data\presets\metal-presets.json

```json
{
  "plugin": "Hardcore",
  "category": "Metal Presets",
  "dataSource": "IL-MAN",
  "presets": [
    {
      "name": "Metal Rhythm - Tight",
      "description": "Tight, aggressive rhythm guitar tone",
      "chain": {
        "noiseGate": {
          "enabled": true,
          "threshold": -35,
          "attack": 1,
          "hold": 25,
          "release": 60
        },
        "compressor": {
          "enabled": true,
          "threshold": -16,
          "ratio": 4,
          "attack": 5,
          "release": 120,
          "makeup": 6
        },
        "distortion": {
          "enabled": true,
          "drive": 75,
          "tone": 15,
          "level": 85
        },
        "eqStompbox": {
          "enabled": true,
          "lowFreq": 100,
          "lowGain": -3,
          "midFreq": 800,
          "midGain": -2,
          "highFreq": 4000,
          "highGain": 2
        },
        "cabinet": 1,
        "masterEQ": {
          "band1": -1,
          "band2": 1,
          "band3": -2,
          "band4": -3,
          "band5": -1,
          "band6": 2,
          "band7": 3,
          "band8": 1
        }
      },
      "useCase": "Rhythm guitars, djent, modern metal chugging"
    },
    {
      "name": "Metal Lead - Screaming",
      "description": "Singing lead tone with sustain",
      "chain": {
        "compressor": {
          "enabled": true,
          "threshold": -14,
          "ratio": 5,
          "attack": 8,
          "release": 200,
          "makeup": 7
        },
        "distortion": {
          "enabled": true,
          "drive": 65,
          "tone": 25,
          "level": 80
        },
        "delay": {
          "enabled": true,
          "time": 350,
          "feedback": 25,
          "mix": 30,
          "level": 85
        },
        "reverb": {
          "enabled": true,
          "size": 45,
          "damp": 60,
          "mix": 25,
          "level": 80
        },
        "cabinet": 3,
        "masterEQ": {
          "band1": 0,
          "band2": 0,
          "band3": -1,
          "band4": 0,
          "band5": 2,
          "band6": 4,
          "band7": 2,
          "band8": 1
        }
      },
      "useCase": "Lead guitars, solos, melodic passages"
    },
    {
      "name": "Metal Doom - Heavy",
      "description": "Slow, crushing doom/stoner tone",
      "chain": {
        "distortion": {
          "enabled": true,
          "drive": 85,
          "tone": -10,
          "level": 90
        },
        "compressor": {
          "enabled": true,
          "threshold": -12,
          "ratio": 6,
          "attack": 12,
          "release": 400,
          "makeup": 8
        },
        "chorus": {
          "enabled": true,
          "rate": 0.2,
          "depth": 30,
          "level": 35
        },
        "cabinet": 2,
        "masterEQ": {
          "band1": 3,
          "band2": 2,
          "band3": 0,
          "band4": -2,
          "band5": 0,
          "band6": 1,
          "band7": 0,
          "band8": -1
        }
      },
      "useCase": "Doom metal, stoner rock, slow heavy riffs"
    },
    {
      "name": "Metal Thrash - Fast",
      "description": "Aggressive fast picking tone",
      "chain": {
        "noiseGate": {
          "enabled": true,
          "threshold": -40,
          "attack": 1,
          "hold": 20,
          "release": 50
        },
        "distortion": {
          "enabled": true,
          "drive": 70,
          "tone": 20,
          "level": 85
        },
        "compressor": {
          "enabled": true,
          "threshold": -15,
          "ratio": 4,
          "attack": 3,
          "release": 80,
          "makeup": 6
        },
        "cabinet": 1,
        "masterEQ": {
          "band1": 0,
          "band2": 2,
          "band3": -1,
          "band4": -2,
          "band5": 1,
          "band6": 3,
          "band7": 2,
          "band8": 0
        }
      },
      "useCase": "Thrash metal, fast rhythms, precise picking"
    },
    {
      "name": "Metal Shoegaze - Textured",
      "description": "Wall-of-sound texture with modulation",
      "chain": {
        "distortion": {
          "enabled": true,
          "drive": 50,
          "tone": 10,
          "level": 80
        },
        "chorus": {
          "enabled": true,
          "rate": 0.4,
          "depth": 55,
          "level": 60
        },
        "flanger": {
          "enabled": true,
          "rate": 0.1,
          "depth": 40,
          "feedback": 20,
          "level": 45
        },
        "phaser": {
          "enabled": true,
          "rate": 0.2,
          "depth": 35,
          "stages": 6,
          "level": 40
        },
        "reverb": {
          "enabled": true,
          "size": 70,
          "damp": 45,
          "mix": 40,
          "level": 85
        },
        "cabinet": 4,
        "masterEQ": {
          "band1": 1,
          "band2": 0,
          "band3": -1,
          "band4": 0,
          "band5": 1,
          "band6": 2,
          "band7": 3,
          "band8": 2
        }
      },
      "useCase": "Shoegaze, dream pop, atmospheric metal"
    }
  ]
}

```

---

## FILE: 02-Data\presets\utility-presets.json

```json
{
  "plugin": "Hardcore",
  "category": "Utility Presets",
  "dataSource": "IL-MAN",
  "presets": [
    {
      "name": "Clean Cabinet Only",
      "description": "Cabinet simulation without stompboxes",
      "chain": {
        "distortion": { "enabled": false },
        "chorus": { "enabled": false },
        "flanger": { "enabled": false },
        "phaser": { "enabled": false },
        "reverb": { "enabled": false },
        "delay": { "enabled": false },
        "noiseGate": { "enabled": false },
        "eqStompbox": { "enabled": false },
        "compressor": { "enabled": false },
        "modulator": { "enabled": false },
        "wah": { "enabled": false },
        "cabinet": 4,
        "cabinetMix": 100,
        "masterEQ": {
          "band1": 0,
          "band2": 0,
          "band3": 0,
          "band4": 0,
          "band5": 0,
          "band6": 0,
          "band7": 0,
          "band8": 0
        }
      },
      "useCase": "Subtle speaker emulation, general-purpose tone shaping"
    },
    {
      "name": "Noise Gate Only",
      "description": "Clean noise gate for removing unwanted noise",
      "chain": {
        "noiseGate": {
          "enabled": true,
          "threshold": -35,
          "attack": 5,
          "hold": 50,
          "release": 100
        },
        "cabinet": 4,
        "masterEQ": {
          "band1": 0,
          "band2": 0,
          "band3": 0,
          "band4": 0,
          "band5": 0,
          "band6": 0,
          "band7": 0,
          "band8": 0
        }
      },
      "useCase": "Guitar recordings, noisy sources, cleaning up tracks"
    },
    {
      "name": "High-Pass Filter",
      "description": "Remove low-end rumble",
      "chain": {
        "eqStompbox": {
          "enabled": true,
          "lowFreq": 80,
          "lowGain": -15,
          "midFreq": 1000,
          "midGain": 0,
          "highFreq": 5000,
          "highGain": 0
        },
        "cabinet": 4,
        "masterEQ": {
          "band1": -12,
          "band2": 0,
          "band3": 0,
          "band4": 0,
          "band5": 0,
          "band6": 0,
          "band7": 0,
          "band8": 0
        }
      },
      "useCase": "Remove rumble from vocals, clean up muddy recordings"
    },
    {
      "name": "Low-Pass Filter",
      "description": "Remove high-end harshness",
      "chain": {
        "eqStompbox": {
          "enabled": true,
          "lowFreq": 100,
          "lowGain": 0,
          "midFreq": 1000,
          "midGain": 0,
          "highFreq": 4000,
          "highGain": -15
        },
        "cabinet": 2,
        "masterEQ": {
          "band1": 0,
          "band2": 0,
          "band3": 0,
          "band4": 0,
          "band5": 0,
          "band6": 0,
          "band7": -6,
          "band8": -12
        }
      },
      "useCase": "Tame harsh highs, create lo-fi effect, vintage character"
    },
    {
      "name": "Mid-Scoop Modern",
      "description": "V-shaped EQ for modern productions",
      "chain": {
        "cabinet": 4,
        "masterEQ": {
          "band1": 2,
          "band2": 1,
          "band3": -2,
          "band4": -3,
          "band5": -2,
          "band6": 0,
          "band7": 2,
          "band8": 3
        }
      },
      "useCase": "Modern mixes, EDM, contemporary productions"
    },
    {
      "name": "Mid-Boost Vintage",
      "description": "Forward mids for vintage/retro character",
      "chain": {
        "cabinet": 2,
        "masterEQ": {
          "band1": 0,
          "band2": 0,
          "band3": 1,
          "band4": 2,
          "band5": 3,
          "band6": 2,
          "band7": 1,
          "band8": 0
        }
      },
      "useCase": "Classic rock, vintage hip-hop, retro aesthetic"
    },
    {
      "name": "Subtle Saturation",
      "description": "Light warmth without obvious distortion",
      "chain": {
        "distortion": {
          "enabled": true,
          "drive": 12,
          "tone": 0,
          "level": 95
        },
        "compressor": {
          "enabled": true,
          "threshold": -24,
          "ratio": 2,
          "attack": 20,
          "release": 300,
          "makeup": 2
        },
        "cabinet": 4,
        "masterEQ": {
          "band1": 0,
          "band2": 0,
          "band3": 0,
          "band4": 0,
          "band5": 0,
          "band6": 0,
          "band7": 0,
          "band8": 0
        }
      },
      "useCase": "Master bus, subtle enhancement, analog warmth"
    },
    {
      "name": "Telephone Effect",
      "description": "Classic telephone/bandpass sound",
      "chain": {
        "eqStompbox": {
          "enabled": true,
          "lowFreq": 300,
          "lowGain": -15,
          "midFreq": 2500,
          "midGain": 4,
          "highFreq": 3500,
          "highGain": -12
        },
        "distortion": {
          "enabled": true,
          "drive": 20,
          "tone": 0,
          "level": 85
        },
        "compressor": {
          "enabled": true,
          "threshold": -15,
          "ratio": 6,
          "attack": 2,
          "release": 100,
          "makeup": 5
        },
        "cabinet": 5,
        "masterEQ": {
          "band1": -12,
          "band2": -8,
          "band3": 0,
          "band4": 3,
          "band5": 5,
          "band6": 2,
          "band7": -4,
          "band8": -10
        }
      },
      "useCase": "Telephone vocals, radio effects, filtered sounds"
    },
    {
      "name": "Slapback Delay",
      "description": "Classic rockabilly slapback",
      "chain": {
        "delay": {
          "enabled": true,
          "time": 100,
          "feedback": 8,
          "mix": 35,
          "level": 85
        },
        "cabinet": 2,
        "masterEQ": {
          "band1": 0,
          "band2": 0,
          "band3": 0,
          "band4": 0,
          "band5": 0,
          "band6": 0,
          "band7": 0,
          "band8": 0
        }
      },
      "useCase": "Rockabilly, country, vocal slapback, guitar ambience"
    },
    {
      "name": "Room Ambience",
      "description": "Short room reverb simulation",
      "chain": {
        "reverb": {
          "enabled": true,
          "size": 35,
          "damp": 70,
          "mix": 25,
          "level": 80
        },
        "cabinet": 4,
        "masterEQ": {
          "band1": 0,
          "band2": 0,
          "band3": 0,
          "band4": 0,
          "band5": 0,
          "band6": 0,
          "band7": 0,
          "band8": 0
        }
      },
      "useCase": "Drum room sound, vocal space, subtle ambience"
    }
  ]
}

```

---

## FILE: 02-Data\rules\02_Genre_Rules_HipHop_RnB.md

```markdown
# Genre Rules: Hip-Hop & R&B (Hardcore)

## Rule 1: The "Megaphone" Vocal
*   **Rule:** For that aggressive "lo-fi" rap vocal.
*   **Hardcore Move:** Use **Cabinet 5**, turn off all pedals except **Distortion** (low gain) and the **Graphic EQ**. Cut all frequencies except the 1kHz and 2kHz bands.

## Rule 2: Taming the "Digital Fizz"
*   **Rule:** When using Hardcore on a synth, it can sound "too digital."
*   **Hardcore Move:** **Always** use a Cabinet simulation. If it's still too harsh, use the Graphic EQ to pull the 8kHz slider all the way down.

## Rule 3: Noise Gate for Ad-libs
*   **Rule:** Hip-hop ad-libs often have a lot of background noise from the mic being "open."
*   **Hardcore Move:** Use the **Noise Gate** pedal as the first effect. Set the threshold so it only opens when the artist shouts or speaks, instantly cleaning up your vocal takes. [SRC: REPUTABLE]

## Rule 4: Parallel Saturation on Drums
*   **Rule:** To make drums sound "dusty" but keep the punch.
*   **Hardcore Move:** Use Hardcore on a **Mixer Send**. Turn on the Distortion and a boxy Cabinet. Blend the send into the main drum bus at 15-20%.

## Rule 5: Mono Compatibility with Chorus
*   **Rule:** The Chorus pedal in Hardcore is very wide. 
*   **Hardcore Move:** Check your master in Mono. If the guitar/synth disappears, reduce the **Depth** of the Chorus pedal or move the **Width** slider (if available) toward the center. [SRC: IL-MAN]

```

---

## FILE: 02-Data\rules\gain-staging.json

```json
{
  "plugin": "Hardcore",
  "category": "Gain Staging Rules",
  "dataSource": "IL-MAN",
  "description": "Essential gain staging guidelines for Hardcore to prevent clipping and maintain headroom",
  "rules": [
    {
      "ruleId": "GAIN-001",
      "title": "Maintain Unity Gain Principle",
      "severity": "high",
      "description": "When toggling effects on/off, perceived loudness should remain consistent",
      "details": "If an effect makes the track louder when enabled, reduce its output level or the mix control. This ensures you're making tonal decisions, not just liking something because it's louder.",
      "check": "A/B test with effect on/off at same perceived volume",
      "violation": "Effect sounds better simply because it's louder",
      "solution": "Adjust Level/Makeup/Mix controls to match dry signal volume"
    },
    {
      "ruleId": "GAIN-002",
      "title": "Input Gain Sets the Foundation",
      "severity": "high",
      "description": "Input gain determines how hard the first stompbox is driven",
      "details": "Higher input gain = more saturation in distortion pedals. Start at 0dB and adjust based on your source level and desired saturation amount.",
      "check": "Input meter shows healthy level without constant red",
      "recommendedRange": "-12 to +6 dB depending on source",
      "violation": "Constant clipping at input stage",
      "solution": "Reduce input gain or source track volume"
    },
    {
      "ruleId": "GAIN-003",
      "title": "Cumulative Gain Across Chain",
      "severity": "high",
      "description": "Each stompbox adds or reduces gain. Monitor cumulative effect.",
      "details": "Distortion adds gain, compression adds makeup gain, EQ boosts add gain. Stack multiple gain-increasing effects and you'll run out of headroom.",
      "check": "Master output meter stays below 0dBFS",
      "formula": "Input + Stompbox gains + Master EQ boosts < 0dBFS",
      "violation": "Master output clipping despite individual effects not clipping",
      "solution": "Reduce individual effect output levels or enable master limiter"
    },
    {
      "ruleId": "GAIN-004",
      "title": "Distortion Level Compensation",
      "severity": "medium",
      "description": "Distortion increases perceived loudness due to added harmonics",
      "details": "Even if peak levels don't increase, distortion adds high-frequency content that sounds louder. Compensate by reducing Distortion Level control.",
      "check": "Loudness meter (LUFS) comparison with/without distortion",
      "typicalReduction": "5-15% Level reduction for unity loudness",
      "violation": "Distortion sounds 'better' but is actually just louder",
      "solution": "Reduce Distortion Level by 10-20% or use mix control"
    },
    {
      "ruleId": "GAIN-005",
      "title": "Compressor Makeup Gain Math",
      "severity": "medium",
      "description": "Set makeup gain to compensate for gain reduction",
      "details": "If compressor is reducing gain by 6dB on average, set makeup gain to approximately +6dB. Over-compensation causes clipping; under-compensation makes track too quiet.",
      "formula": "Makeup Gain ≈ Average Gain Reduction",
      "check": "Output level matches input level (bypass test)",
      "violation": "Compressed signal significantly louder or quieter than dry",
      "solution": "Adjust Makeup Gain to match GR meter average"
    },
    {
      "ruleId": "GAIN-006",
      "title": "EQ Boost Gain Compensation",
      "severity": "medium",
      "description": "Boosting frequencies adds gain at those frequencies",
      "details": "+6dB boost at 3kHz increases the overall level if that frequency was present. Compensate with output gain reduction if multiple boosts applied.",
      "check": "Master output after EQ stays at healthy level",
      "rule": "Sum of all EQ boosts should not exceed +12dB without compensation",
      "violation": "Multiple +6dB boosts causing master clipping",
      "solution": "Cut instead of boost, or reduce master output gain"
    },
    {
      "ruleId": "GAIN-007",
      "title": "Cabinet Mix for Parallel Feel",
      "severity": "low",
      "description": "Use Cabinet Mix control for subtle speaker emulation",
      "details": "At 100% you get full cabinet character. At 50% you blend cabinet with direct signal. At 0% cabinet is bypassed entirely.",
      "useCases": {
        "100%": "Full amp simulation, realistic guitar tones",
        "50-75%": "Subtle speaker character on non-guitar sources",
        "0%": "Only stompbox effects, no cabinet filtering"
      },
      "check": "Cabinet character matches desired tone without overwhelming"
    },
    {
      "ruleId": "GAIN-008",
      "title": "Output Gain Final Adjustment",
      "severity": "high",
      "description": "Master output gain is your final safety net",
      "details": "After all processing, adjust output gain so the signal leaves Hardcore at appropriate level. This should be the LAST control you touch.",
      "target": "Match input level or match next plugin's expected input",
      "check": "Output meter shows healthy level (around -12 to -6 dBFS)",
      "violation": "Output consistently clipping or too low",
      "solution": "Adjust Output Gain to healthy level, revisit earlier stages if needed"
    },
    {
      "ruleId": "GAIN-009",
      "title": "Avoid Digital Clipping",
      "severity": "critical",
      "description": "Never allow signal to exceed 0dBFS inside Hardcore or at output",
      "details": "Hardcore is not a true analog circuit. Digital clipping is harsh and undesirable. Even 'analog-modeled' distortion has limits.",
      "redLine": "-6 dBFS on meters (leave headroom)",
      "check": "No red clipping indicators on any stage",
      "violation": "Frequent red lights on meters",
      "solution": "Reduce gains at earlier stages, especially input and distortion drive"
    },
    {
      "ruleId": "GAIN-010",
      "title": "Parallel Processing Gain Matching",
      "severity": "medium",
      "description": "When using Hardcore on send track, ensure unity gain",
      "details": "Set Hardcore internal mix to 100% wet. Control the blend using the send track fader and/or send level knob on source track.",
      "setup": {
        "hardcoreMix": "100% wet",
        "hardcoreLevel": "Unity (80-100%)",
        "sendLevel": "Control blend here",
        "sendTrackFader": "Control total processed volume"
      },
      "check": "Processed signal at same level as dry when send at 100%",
      "violation": "Can't achieve unity blend (too loud or too quiet)",
      "solution": "Adjust Hardcore output level to match source track level"
    }
  ],
  "gainStaginWorkflow": {
    "step1": "Set Input Gain to healthy level (0dB or source-dependent)",
    "step2": "Add stompboxes one by one, adjusting their individual levels",
    "step3": "Watch cumulative gain - reduce levels if stacking gain-heavy effects",
    "step4": "Set Master EQ (minimal boosting, surgical cutting preferred)",
    "step5": "Select appropriate Cabinet model and mix amount",
    "step6": "Adjust Output Gain for final level matching"
  }
}

```

---

## FILE: 02-Data\rules\harshness-control.json

```json
{
  "plugin": "Hardcore",
  "category": "Harshness Control Rules",
  "dataSource": "IL-MAN",
  "description": "Guidelines for preventing and controlling harsh, unpleasant frequencies when processing with Hardcore",
  "rules": [
    {
      "ruleId": "HARSH-001",
      "title": "Understand Harsh Frequency Ranges",
      "severity": "high",
      "description": "Harshness typically occurs in 2-5 kHz range",
      "details": "The 2-5kHz region contains frequencies that can sound grating, fatiguing, or 'ice-picky' when exaggerated. Distortion and bright processing can push these over the edge.",
      "frequencyCharacteristics": {
        "2kHz": "Vocal presence, can become harsh if overdone",
        "3kHz": "Attack and bite, easily becomes grating",
        "4kHz": "Guitar 'quack', vocal intelligibility edge",
        "5kHz": "Brightness, sibilance crossover point"
      },
      "check": "Listen for fatigue or discomfort during extended playback",
      "solution": "Use Master EQ to gently reduce 2-5kHz if needed"
    },
    {
      "ruleId": "HARSH-002",
      "title": "Distortion Amount vs. Harshness",
      "severity": "high",
      "description": "Higher distortion drive increases harshness non-linearly",
      "details": "Distortion adds harmonics. As you increase Drive, you create more high-frequency harmonics which can accumulate into harshness.",
      "driveThresholds": {
        "subtle": "0-30% - Warmth and gentle saturation",
        "moderate": "30-60% - Noticeable grit, manageable harshness",
        "aggressive": "60-85% - Heavy distortion, harshness control critical",
        "extreme": "85-100% - Extreme saturation, likely harsh without mitigation"
      },
      "check": "High drive settings (70%+) with bright tone = harshness risk",
      "solution": "Combine high drive with darker tone or EQ cuts in 3-5kHz"
    },
    {
      "ruleId": "HARSH-003",
      "title": "Multi-Effect Harshness Accumulation",
      "severity": "high",
      "description": "Harshness compounds when stacking multiple effects",
      "details": "Each effect can add a small amount of edge. Chorus, flanger, phaser, and distortion all contribute. The cumulative effect can become harsh even if individual effects sound fine.",
      "cumulativeCheck": "Bypass all effects, enable one by one, identify harshness source",
      "commonCulprits": [
        "Distortion + Cabinet 1 (both add high-mid emphasis)",
        "Flanger with high feedback + Bright cabinet",
        "Multiple modulation effects stacking"
      ],
      "solution": "Reduce number of active effects or use darker cabinet/EQ"
    },
    {
      "ruleId": "HARSH-004",
      "title": "Cabinet Selection for Harshness Control",
      "severity": "medium",
      "description": "Cabinets act as final tone filters - choose wisely",
      "details": "The cabinet is your last line of defense against harshness. Darker cabinets naturally roll off the frequencies that become harsh.",
      "cabinetHarshness": {
        "cabinet1": "HIGH RISK - Extended 3-8kHz response",
        "cabinet2": "LOW RISK - Rolled off above 6kHz, warm",
        "cabinet3": "MEDIUM RISK - Mid-forward, controlled 5-6kHz",
        "cabinet4": "LOW RISK - Balanced, smooth highs",
        "cabinet5": "VARIABLE - Limited range cuts harshness but can sound boxy"
      },
      "check": "Does chosen cabinet smooth or exaggerate harshness?",
      "solution": "Cabinet 2 or 4 for harshness-prone sources; Cabinet 1 only if source is naturally dark"
    },
    {
      "ruleId": "HARSH-005",
      "title": "Master EQ as Harshness Filter",
      "severity": "medium",
      "description": "Use Master 8-band EQ for surgical harshness reduction",
      "details": "Bands 5 (1kHz), 6 (3kHz), and 7 (6kHz) control the harshness range. Gentle cuts here preserve clarity while removing grating edge.",
      "eqStrategy": {
        "band5": "Cut -1 to -2 dB if honk/boxiness present",
        "band6": "Cut -2 to -4 dB for primary harshness control",
        "band7": "Cut -1 to -3 dB for high-mid bite control"
      },
      "technique": "Start with -2dB cuts, A/B test, adjust by ear",
      "check": "Harshness reduced but clarity maintained"
    },
    {
      "ruleId": "HARSH-006",
      "title": "Pre-Distortion Filtering",
      "severity": "medium",
      "description": "Remove harsh frequencies before distortion adds harmonics",
      "details": "Distortion creates new harmonics from existing frequencies. If you distort a harsh source, you create MORE harshness. Filter first.",
      "stompboxEQStrategy": {
        "midFreq": "Set to 3kHz",
        "midGain": "Cut -2 to -4 dB",
        "highFreq": "Set to 8kHz",
        "highGain": "Cut -3 to -6 dB"
      },
      "check": "Source sounds slightly dull before distortion, balanced after",
      "solution": "Use Stompbox EQ before Distortion in the chain"
    },
    {
      "ruleId": "HARSH-007",
      "title": "Modulation Effects and Harshness",
      "severity": "low",
      "description": "Chorus, flanger, and phaser can add edge",
      "details": "Modulation effects create movement but can also add metallic or glassy character that contributes to harshness perception.",
      "settings": {
        "chorus": "Keep Depth moderate (20-40%), Rate slow (0.2-0.5Hz)",
        "flanger": "Negative feedback (-20 to -50%) for hollow rather than metallic",
        "phaser": "Fewer stages (2-4) for less resonant peaks"
      },
      "check": "Modulation adds width without metallic harshness",
      "solution": "Reduce depth/feedback or move modulation earlier in chain"
    },
    {
      "ruleId": "HARSH-008",
      "title": "The Lo-Fi Solution",
      "severity": "low",
      "description": "When harshness persists, embrace the lo-fi aesthetic",
      "details": "Sometimes the source is naturally harsh. Rather than fighting it, use Hardcore to push into intentional lo-fi territory where harshness becomes character.",
      "loFiChain": {
        "eq": "Cut 8-12kHz aggressively",
        "distortion": "Moderate drive (40-50%)",
        "cabinet": "Cabinet 5 (Small) - Limited frequency range",
        "delay": "Short slapback or none"
      },
      "result": "Intentionally degraded, warm, vintage character",
      "useCase": "When modern clarity is unattainable or undesirable"
    },
    {
      "ruleId": "HARSH-009",
      "title": "Gain Staging Impact on Harshness",
      "severity": "medium",
      "description": "Improper gain staging can create digital harshness",
      "details": "Digital clipping and near-clipping levels create unpleasant, harsh distortion. Even 'analog-modeled' plugins behave badly when overdriven digitally.",
      "redZones": [
        "Input gain pushing +12dB with hot source",
        "Distortion Level at 100% with high drive",
        "Multiple +6dB EQ boosts stacking",
        "Output gain compensation pushing to 0dBFS"
      ],
      "check": "No red meters at any stage",
      "solution": "Reduce gains at earlier stages, maintain -6 to -12dB headroom"
    },
    {
      "ruleId": "HARSH-010",
      "title": "Test at Multiple Volumes",
      "severity": "medium",
      "description": "Harshness perception changes with playback volume",
      "details": "Fletcher-Munson curves mean we perceive high frequencies differently at different volumes. A setting that sounds balanced at conversation level may be harsh at performance level.",
      "testingProtocol": [
        "Test at low volume (conversation level)",
        "Test at medium volume (typical monitoring)",
        "Test at high volume (performance/club level)",
        "Test on different playback systems (headphones, monitors, earbuds)"
      ],
      "check": "Harshness doesn't increase disproportionately at high volume",
      "solution": "If harsh at high volume, reduce 3-5kHz regardless of low-volume impression"
    },
    {
      "ruleId": "HARSH-011",
      "title": "Reference Track Comparison",
      "severity": "low",
      "description": "Compare your Hardcore settings to professionally mixed references",
      "details": "Professional mixes rarely sound harsh. If your Hardcore-processed material sounds edgier than reference tracks, you have a harshness problem.",
      "comparisonPoints": [
        "Snare drum attack - crisp but not painful",
        "Vocal clarity - present but not grating",
        "Guitar chords - bright but not 'ice-picky'",
        "Overall mix - engaging but not fatiguing"
      ],
      "check": "Your processed material matches professional harshness level",
      "solution": "Reduce Master EQ 3-5kHz range until harshness matches reference"
    }
  ],
  "harshnessTroubleshooting": {
    "harshDrums": "Reduce 3kHz (Band 6), Use Cabinet 2 or 4, Lower Distortion Tone",
    "harshVocals": "Cut 2-5kHz pre-distortion, Use Cabinet 2, Reduce Drive",
    "harshGuitars": "Check multiple distortion stacking, Reduce 3-4kHz, Darker cabinet",
    "harshSynths": "Often source-related - high-pass or use Cabinet 5 for limitation"
  },
  "quickSafeSettings": {
    "universalHarshnessReducer": {
      "masterEQ": {
        "band3": 0,
        "band4": -1,
        "band5": -2,
        "band6": -3,
        "band7": -2,
        "band8": -1
      },
      "cabinet": 2,
      "description": "Gentle presence reduction suitable for most sources"
    }
  }
}

```

---

## FILE: 02-Data\rules\sibilance-safety.json

```json
{
  "plugin": "Hardcore",
  "category": "Sibilance Safety Rules",
  "dataSource": "IL-MAN",
  "description": "Guidelines for controlling sibilance (harsh 's', 'sh', 't' sounds) when using Hardcore on vocals and bright sources",
  "rules": [
    {
      "ruleId": "SIB-001",
      "title": "Identify Sibilance Frequency Range",
      "severity": "high",
      "description": "Sibilance typically occurs between 5-10 kHz",
      "details": "The 's', 'sh', 'ch', and 't' sounds contain strong energy in the 5-10kHz range. Hardcore's distortion and bright cabinets can exaggerate these frequencies.",
      "frequencyRanges": {
        "femaleVocals": "6-9 kHz",
        "maleVocals": "5-8 kHz",
        "drumCymbals": "8-12 kHz",
        "hihats": "10-15 kHz"
      },
      "check": "Solo vocals and listen for harsh 's' sounds",
      "solution": "Target 6-8kHz range on Master EQ Band 7 (6kHz) and Band 8 (12kHz)"
    },
    {
      "ruleId": "SIB-002",
      "title": "Use Caution with Bright Cabinets on Vocals",
      "severity": "high",
      "description": "Cabinet 1 (Bright/Modern) extends highs to 8kHz+",
      "details": "Cabinet 1 has strong 3-5kHz presence and extended treble. Combined with distortion, this can make vocals painfully sibilant.",
      "warning": "Cabinet 1 + High Distortion + Vocals = Sibilance risk",
      "saferAlternatives": [
        "Cabinet 2 (Vintage) - Natural high-end rolloff",
        "Cabinet 3 (British) - Controlled 5-6kHz range",
        "Cabinet 4 (American) - Balanced, extended but smooth"
      ],
      "check": "A/B test cabinet selection on vocal phrases with 's' sounds",
      "solution": "Switch to darker cabinet or reduce high-end before cabinet"
    },
    {
      "ruleId": "SIB-003",
      "title": "Pre-Distortion EQ is Critical",
      "severity": "high",
      "description": "Distortion adds harmonics, exaggerating existing high frequencies",
      "details": "If you distort a signal with existing sibilance, you create MORE sibilance through added harmonics. Use Stompbox EQ before Distortion to tame highs.",
      "preDistortionStrategy": {
        "highFreq": "Set to 8-10 kHz",
        "highGain": "Cut -3 to -6 dB before distortion",
        "reason": "Removes harshness before harmonic generation"
      },
      "check": "Distortion on/off comparison - does it exaggerate 's' sounds?",
      "solution": "Enable Stompbox EQ before Distortion, cut 8-10kHz range"
    },
    {
      "ruleId": "SIB-004",
      "title": "Master EQ De-Essing",
      "severity": "medium",
      "description": "Use Master 8-band EQ for broad de-essing",
      "details": "Band 7 (6kHz) and Band 8 (12kHz) control the sibilance range. Gentle cuts here can tame harshness without making vocals dull.",
      "settings": {
        "band7": "Cut -2 to -4 dB at 6 kHz",
        "band8": "Cut -1 to -3 dB at 12 kHz",
        "alternative": "Cut Band 6 (3kHz) by -2dB if sibilance is lower frequency"
      },
      "check": "Vocal 's' sounds are controlled but not lisping",
      "caution": "Don't over-cut - vocals need presence and air"
    },
    {
      "ruleId": "SIB-005",
      "title": "Distortion Tone Control Strategy",
      "severity": "medium",
      "description": "Distortion Tone control affects sibilance generation",
      "details": "Positive Tone values (+10 to +50) emphasize high frequencies, potentially creating sibilance even in clean sources.",
      "saferSettings": {
        "vocalProcessing": "Tone 0 to -10 (neutral to slightly dark)",
        "drumProcessing": "Tone 0 to +10 (moderate brightness)",
        "riskySetting": "Tone +30 to +50 on vocals"
      },
      "check": "Tone setting doesn't exaggerate 's' sounds",
      "solution": "Reduce Tone setting or combine with high-frequency cuts"
    },
    {
      "ruleId": "SIB-006",
      "title": "Test with Sibilance-Rich Material",
      "severity": "high",
      "description": "Always test Hardcore settings with phrases containing 's', 'sh', 't'",
      "details": "A setting that sounds great on 'oo' and 'ah' vowels may be painfully harsh on 'sassy sailors shoot ships'. Test comprehensively.",
      "testPhrases": [
        "She sells seashells by the seashore",
        "Sassy sailors shoot ships",
        "The sixth sheik's sixth sheep's sick",
        "Tess tickles test tubes"
      ],
      "check": "All sibilant sounds are controlled, no single sound jumps out",
      "solution": "Adjust settings until all phonemes sound balanced"
    },
    {
      "ruleId": "SIB-007",
      "title": "Post-Hardcore De-Esser Strategy",
      "severity": "low",
      "description": "Consider dedicated de-esser after Hardcore on vocal chain",
      "details": "If Hardcore is essential for vocal character but creates sibilance, add a dedicated de-esser plugin after Hardcore in the chain.",
      "chainPosition": "Source → Hardcore → De-Esser → Rest of chain",
      "settings": {
        "frequency": "6-8 kHz",
        "reduction": "3-6 dB gentle reduction",
        "threshold": "Just below peak sibilant levels"
      },
      "check": "De-esser catches what Hardcore exaggerates"
    },
    {
      "ruleId": "SIB-008",
      "title": "Drum Cymbal and Hi-Hat Control",
      "severity": "medium",
      "description": "High-frequency drum elements also need sibilance management",
      "details": "Cymbals and hi-hats contain sibilant-like energy in 8-15kHz range. Hardcore can make them harsh and splashy.",
      "settings": {
        "masterEQ": {
          "band7": "Cut -2 to -3 dB at 6kHz (reduces harshness)",
          "band8": "Cut -3 to -5 dB at 12kHz (tames splash)"
        },
        "cabinet": "Cabinet 2 (Vintage) or Cabinet 4 (American)"
      },
      "check": "Cymbals sound present but not painfully bright",
      "solution": "Reduce treble in Master EQ or choose darker cabinet"
    },
    {
      "ruleId": "SIB-009",
      "title": "Mix Level Compensation",
      "severity": "medium",
      "description": "Sibilance issues often worsen at higher mix levels",
      "details": "An effect that sounds balanced at 20% mix may expose sibilance at 50% mix. Always check at your intended blend level.",
      "check": "Test at actual mix level you'll use in production",
      "solution": "Adjust Hardcore settings at intended mix percentage"
    },
    {
      "ruleId": "SIB-010",
      "title": "Automation for Problem Sections",
      "severity": "low",
      "description": "Automate Hardcore settings for sibilant passages",
      "details": "If only certain words are sibilant, automate the Master EQ or Tone controls to reduce highs during those moments.",
      "automationTargets": [
        "Master EQ Band 7 (increase cut during sibilance)",
        "Distortion Tone (reduce to darker setting)",
        "Cabinet Mix (reduce to blend in less cabinet high-end)"
      ],
      "check": "Sibilant sections are controlled without affecting rest of vocal",
      "solution": "Create automation clips for sibilant words/phrases"
    }
  ],
  "quickReference": {
    "vocalSafeChain": [
      "Stompbox EQ: Cut 8kHz -4dB (before distortion)",
      "Distortion: Drive 30-40%, Tone 0 or negative",
      "Master EQ: Cut 6kHz -2dB, Cut 12kHz -2dB",
      "Cabinet: 2 (Vintage) or 4 (American)"
    ],
    "drumSafeChain": [
      "Master EQ: Cut 6kHz -2dB, Cut 12kHz -3dB",
      "Cabinet: 2 (Vintage) or 4 (American)",
      "Consider: Less distortion on cymbal-heavy sections"
    ]
  }
}

```

---

## FILE: 03-Workflows\by-goal\00_Industrial_Vocal_Chain.md

```markdown
# Goal: Industrial Vocal Chain (Hardcore)

## Routing Context
*   **Track:** Lead Vocal (Aggressive Trap/Rap).
*   **Placement:** After a primary compressor, before reverb.

## Step-by-Step Setup
1.  Load **Hardcore**.
2.  Enable the **Noise Gate** (first position). Adjust threshold to silence the "mic floor."
3.  Enable the **Distortion** pedal. 
    *   Set **Gain** to 15% (just a light fuzz).
4.  Enable the **Compressor** pedal.
    *   Set **Ratio** high to flatten the vocal dynamics.
5.  Set **Cabinet** to **5** (Small/Boxy).
6.  Open the **Graphic EQ**:
    *   Pull down **62Hz**, **125Hz**, **250Hz** (removes mud).
    *   Pull down **8kHz** (removes harsh "ess" sounds).
    *   Boost **1kHz** and **2kHz** slightly (adds "megaphone" clarity).

## What to Listen For
*   The vocal should sound gritty, aggressive, and "radio-like," but the words must remain intelligible.

## Variations
1.  **Drowned:** Add the **Reverb** pedal *before* the Distortion for a "washy" industrial sound.
2.  **Stereo Glitch:** Add the **Flanger** pedal with a high **Speed** for a robotic texture.

## Pitfall
*   **Harshness:** If the "S" sounds are too painful, the Distortion is too high. Back off the Gain and use the Graphic EQ to cut the high-end. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\01_LoFi_Bedroom_Guitar.md

```markdown
# Workflow: Lo-Fi "Bedroom" Guitar (Hardcore)

## The Concept
Create that dusty, nostalgic, and slightly out-of-tune guitar sound perfect for Lo-Fi Hip Hop beats.

## Setup
*   **Target:** A clean Electric Guitar DI or a Rhodes piano sample.

## Recipe
1.  **Cabinet:** Select **Cabinet 2** (Warm/Dark).
2.  **Pedals:** 
    *   **Chorus:** Enable. Set **Depth** to 40% and **Speed** to 20%. This adds the "wobble."
    *   **Delay:** Enable. Set **Feedback** to 40% and **Mix** to 20%.
    *   **Compressor:** Enable. Set **Attack** to slow to keep the "pluck" of the notes.
3.  **EQ:** Pull down the **8kHz** slider all the way. Boost **250Hz** for warmth.

## Vibe Check
*   The sound should feel "old" and "recorded in a room." It should have a gentle pitch-warble from the chorus.

## Automation Idea
*   Automate the **Chorus Speed** to slightly increase during the "chorus" or transition of your track to add more "instability."

## Pitfalls
*   **Too Clean:** If it sounds too modern, enable the **Distortion** pedal with the **Gain at 1%**. This adds invisible "hair" that makes it feel like an old recording. [SRC: REPUTABLE]

```

---

## FILE: 03-Workflows\by-goal\bass-saturation-chain.md

```markdown
# Bass Saturation Chain

Complete workflow for adding controlled saturation, harmonics, and presence to bass instruments using Hardcore. [SRC: IL-MAN]

## Overview

The Bass Saturation Chain adds upper harmonics to bass instruments, helping them cut through dense mixes while maintaining low-end integrity. This workflow works on 808s, synth bass, bass guitar, and any low-frequency source needing more character and definition.

## Why Saturate Bass?

**The Problem:**
- Sub-bass frequencies (20-100Hz) are felt more than heard
- On small speakers (phones, laptops), sub-bass disappears completely
- Pure sine wave 808s lack character and presence

**The Solution:**
- Saturation adds harmonics above the fundamental frequency
- These harmonics are audible even on small speakers
- Bass becomes more defined, characterful, and mix-friendly

## Method 1: Insert Processing (Complete Transformation)

**Best for:** Individual bass tracks, committed bass sounds

### Chain Configuration
`\`\`
Position 1: Compressor (Sustain & Control)
Position 2: Distortion (Harmonics)
Position 3: EQ Stompbox (Shape Before Cabinet)
Position 4: Cabinet (Character)
`\`\`

### Detailed Settings

**1. Compressor** (Dynamic control)
- Threshold: -10 to -14 dB
- Ratio: 5:1 to 8:1 (fairly aggressive)
- Attack: 8-15 ms (let transients through)
- Release: 300-500 ms (sustain notes)
- Makeup: 6-10 dB

**Purpose:** Even out bass dynamics, increase perceived sustain, prepare signal for distortion

**2. Distortion** (Harmonic generation)
- Drive: 30-50% (moderate saturation)
- Tone: -15 to -5 (warm, not bright)
- Level: 90-95%

**Purpose:** Add 2nd and 3rd harmonics for upper-frequency presence

**Why negative tone:** Bass needs warmth, not high-end fizz. Negative tone keeps saturation focused on low-mids.

**3. EQ Stompbox** (Pre-cabinet shaping)
- Low: +3 to +6 dB @ 80-120 Hz (sub reinforcement)
- Mid: -3 to -6 dB @ 300-500 Hz (remove mud/boxiness)
- High: 0 dB or +1-2 dB @ 3-5 kHz (harmonics presence)

**Purpose:** Shape the bass tone before cabinet filters it

**4. Cabinet: 3 (British/Crunch) or 1 (Bright)**

**Cabinet 3 (British) for:**
- Mid-forward bass that cuts through mix
- Gritty, aggressive character
- Rock, punk, industrial

**Cabinet 1 (Bright) for:**
- Modern trap/sub-heavy bass
- Tight, defined low end
- Extended high harmonics

**Cabinet 2 (Vintage) for:**
- Classic, warm bass
- Controlled highs
- Vintage hip-hop, lo-fi

**5. Master 8-Band EQ**
- 60 Hz: +2 to +4 dB (sub weight)
- 170 Hz: +1 to +2 dB (kick separation)
- 310 Hz: -2 to -4 dB (remove mud)
- 600 Hz: -2 to -3 dB (remove boxiness)
- 1 kHz: 0 dB
- 3 kHz: +2 to +3 dB (attack/harmonics)
- 6 kHz: 0 to +1 dB (string clarity)
- 12 kHz: -2 to -4 dB (control fizz)

## Method 2: Parallel Processing (Sub + Harmonics)

**Best for:** Maintaining clean sub while adding saturation

### Setup
Split bass into two frequency ranges:

**Low Chain (Sub frequencies):**
- High-pass: Remove everything above 120Hz
- Hardcore: Clean Cabinet 2 (Vintage) only
- Purpose: Pure, tight sub-bass

**High Chain (Harmonics):**
- Low-cut: Remove everything below 120Hz
- Hardcore: Distortion + Cabinet 3 (British)
- Purpose: Saturated upper harmonics

**Blend:** 
- Low chain: 60-70% (foundation)
- High chain: 30-40% (character)

## Genre-Specific Variations

### Trap/Modern Hip-Hop 808s
**Goal:** Aggressive, cutting sub-bass

**Settings:**
- Compressor: Ratio 6:1, Fast attack (5ms), Release 250ms
- Distortion: Drive 45%, Tone -8
- Cabinet: 1 (Bright/Modern)
- Master EQ: Boost 60Hz +4, Cut 400Hz -4, Boost 3kHz +3

**Technique:** Distortion adds harmonics that make 808 audible on phone speakers

### Vintage Hip-Hop/Boom-Bap
**Goal:** Warm, characterful bass

**Settings:**
- Compressor: Ratio 4:1, Medium attack (10ms), Release 400ms
- Distortion: Drive 25%, Tone -12
- Cabinet: 2 (Vintage/Classic)
- Master EQ: Boost 60Hz +2, Boost 200Hz +2, Cut 6kHz -3

**Technique:** Subtle saturation mimics vintage sampling

### Rock/Punk Bass
**Goal:** Aggressive, gritty bass guitar

**Settings:**
- Compressor: Ratio 7:1, Attack 12ms, Release 350ms
- Distortion: Drive 60%, Tone -5
- Cabinet: 3 (British/Crunch)
- Add: Chorus (Rate 0.3Hz, Depth 35%, Level 30%) for width
- Master EQ: Scoop 400-600Hz, Boost 2kHz +3

**Technique:** Heavier distortion for aggressive rock tone

### Synth Bass Enhancement
**Goal:** Add analog character to digital synths

**Settings:**
- Compressor: Ratio 3:1, Soft knee, Release 500ms
- Distortion: Drive 20%, Tone -3 (very subtle)
- Cabinet: 4 (American/Smooth)
- Master EQ: Gentle smile curve (cut mids slightly, boost lows/highs)

**Technique:** Minimal processing for analog warmth without obvious distortion

## Advanced Techniques

### Sidechain Integration
Use the compressed bass to trigger sidechain on other elements:
1. Hardcore compression controls bass dynamics
2. Sidechain bass to kicks (pumping effect)
3. Sidechain bass to synths (mix clarity)

### Note-Length Automation
Automate based on bass note length:
- **Short/staccato notes:** Increase distortion for more bite
- **Long/sustained notes:** Reduce distortion, increase sustain compression
- **Slides/glides:** Moderate distortion throughout

### Multi-Band Saturation
For complex bass sounds:
- **20-80Hz:** Clean (no distortion)
- **80-250Hz:** Light saturation (20-30% drive)
- **250Hz-1kHz:** Moderate saturation (40-50% drive)
- **1kHz+:** Heavy saturation or no processing (depending on sound)

Use multiple Hardcore instances or Patcher for this setup.

## Safety Rules

### Gain Staging
- Bass can quickly accumulate gain
- Monitor cumulative levels: Input + Compression Makeup + Distortion + EQ + Cabinet
- Aim for consistent level when bypassing

### Low-End Control
- Don't over-distort and lose sub presence
- Monitor on multiple systems (subwoofer, nearfields, headphones)
- Master EQ Band 1 (60Hz) controls sub weight

### Muddiness Prevention
- 200-400Hz is "mud zone" for bass
- Use EQ cuts liberally in this range
- Cabinet selection affects this range significantly

### Mono Compatibility
- Bass should be mono or nearly mono
- If using stereo effects (Chorus), keep mix low
- Check bass in mono (use FL Studio's Stereo Separation)

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| No sub presence | High-pass filter too aggressive | Reduce high-pass or boost 60Hz |
| Too muddy | 200-400Hz buildup | Cut Stompbox EQ 300-500Hz, Master EQ 310/600Hz |
| Too harsh/fizzy | High distortion tone | Reduce Drive, make Tone more negative, cut 6-12kHz |
| Loses punch | Compressor attack too fast | Increase attack to 10-15ms |
| Inconsistent level | Makeup gain wrong | Match bypassed level using A/B test |
| Not audible on phones | No upper harmonics | Ensure some distortion Drive is applied |

## Quick Start Presets

**Trap 808 Saturation:**
`\`\`
Compressor: ON, Threshold -12dB, Ratio 6:1, Attack 5ms, Release 250ms, Makeup 8dB
Distortion: ON, Drive 45%, Tone -8, Level 95%
Cabinet: 1 (Bright)
Master EQ: 60Hz +4, 310Hz -3, 600Hz -3, 3kHz +3, 12kHz -2
`\`\`

**Vintage Warm Bass:**
`\`\`
Compressor: ON, Threshold -15dB, Ratio 4:1, Attack 10ms, Release 400ms, Makeup 6dB
Distortion: ON, Drive 25%, Tone -12, Level 90%
Cabinet: 2 (Vintage)
Master EQ: 60Hz +2, 170Hz +2, 310Hz -2, 6kHz -3, 12kHz -4
`\`\`

**Rock Grit Bass:**
`\`\`
Compressor: ON, Threshold -10dB, Ratio 7:1, Attack 12ms, Release 350ms, Makeup 9dB
Distortion: ON, Drive 60%, Tone -5, Level 85%
Chorus: ON, Rate 0.3Hz, Depth 35%, Level 30%
Cabinet: 3 (British)
Master EQ: 310Hz -4, 600Hz -3, 1kHz +1, 3kHz +3
`\`\`

---

*Source: Image-Line FL Studio Hard Studio Hardcore Manual [SRC: IL-MAN]*

```

---

## FILE: 03-Workflows\by-goal\drum-destruction-chain.md

```markdown
# Drum Destruction Chain

Complete workflow for aggressive drum processing using Hardcore's distortion, compression, and cabinet simulation. [SRC: IL-MAN]

## Overview

The Drum Destruction Chain transforms clean, sterile drum samples into aggressive, gritty, character-rich drums suitable for modern trap, hip-hop, and electronic productions. This workflow uses Hardcore as either an insert or parallel send.

## Method 1: Insert Processing (Total Transformation)

**Best for:** Individual drum samples, committed drum bus processing

### Chain Configuration
`\`\`
Position 1: Noise Gate (Tightening)
Position 2: Compressor (Punch)
Position 3: Distortion (Harmonics & Grit)
Position 4: EQ Stompbox (Tone Shaping)
Positions 5-11: Optional modulation/time effects
`\`\`

### Detailed Settings

**1. Noise Gate** (Tight drum control)
- Threshold: -25 to -30 dB
- Attack: 3-5 ms
- Hold: 40-60 ms
- Release: 80-120 ms
- Purpose: Truncate drum tails, remove bleed, create tightness

**2. Compressor** (Transient control)
- Threshold: -12 to -18 dB
- Ratio: 4:1 to 6:1
- Attack: 5-10 ms
- Release: 100-150 ms
- Makeup: 6-10 dB
- Purpose: Control dynamics, add punch, even out hits

**3. Distortion** (Character & harmonics)
- Drive: 50-70%
- Tone: +10 to +20 (bright aggression)
- Level: 80-90%
- Purpose: Add grit, harmonics, aggression

**4. EQ Stompbox** (Pre-cabinet shaping)
- Low: +2 to +4 dB @ 100-150 Hz (sub reinforcement)
- Mid: -2 to -4 dB @ 400-600 Hz (remove mud)
- High: +1 to +3 dB @ 5-8 kHz (presence)

**5. Cabinet: 1 (Bright/Modern)**
- Mix: 100%
- Purpose: Tight lows, aggressive mids, controlled highs

**6. Master 8-Band EQ**
- 60 Hz: +2 dB (sub weight)
- 170 Hz: +3 dB (kick punch)
- 310 Hz: -2 dB (remove mud)
- 600 Hz: 0 dB
- 1 kHz: +1 dB (snare body)
- 3 kHz: +3 dB (attack clarity)
- 6 kHz: 0 dB
- 12 kHz: +1 dB (air)

## Method 2: Parallel Processing (Punch + Grit)

**Best for:** Drum buses where you want to preserve transients while adding aggression

### Setup
1. Keep drum bus dry (100%)
2. Create send track with Hardcore
3. Route drum bus to send (20-30% level)
4. Hardcore on send: 100% wet, aggressive settings

### Send Track Settings
`\`\`
Distortion: Drive 70%, Tone 15%, Level 100%
Compressor: Threshold -10dB, Ratio 8:1, Attack 3ms, Release 60ms
Noise Gate: Threshold -35dB, Attack 2ms, Hold 30ms, Release 70ms
Cabinet: 1 (Bright)
Master EQ: Boost 170Hz +2dB, 3kHz +4dB
`\`\`

**Blend:** 70% dry drums / 30% processed send

## Genre-Specific Variations

### Trap Drums
- **Drive:** 65-80% (heavier distortion)
- **Tone:** +15 to +25 (bright aggression)
- **Gate:** Tighter settings (Attack 2-3ms, Release 60-80ms)
- **Cabinet:** 1 (Bright/Modern)
- **Master EQ:** Boost 3kHz +4dB for attack

### Boom-Bap/Vintage
- **Drive:** 30-50% (moderate saturation)
- **Tone:** -10 to 0 (warmer)
- **Gate:** Looser settings (Attack 8-10ms, Release 150-200ms)
- **Cabinet:** 2 (Vintage/Classic)
- **Master EQ:** Cut 12kHz -5dB for rolled-off highs

### Industrial/Aggressive
- **Drive:** 75-90% (extreme saturation)
- **Additional:** Enable Modulator (Ring Mod, Rate 5Hz, Depth 60%)
- **Gate:** Very tight (Attack 1-2ms)
- **Cabinet:** 5 (Small) - boxy character

### Lo-Fi Dust
- **Drive:** 25-40% (subtle warmth)
- **Cabinet:** 2 (Vintage)
- **Master EQ:** Cut 12kHz -6dB, Boost 310Hz +2dB
- **Add:** Delay (100ms slapback, 20% mix)

## Safety Rules

### Gain Staging
- Monitor cumulative gain across chain
- Distortion adds perceived loudness - reduce output level
- Aim for unity gain when bypassing (A/B test)

### Harshness Control
- High distortion + Bright cabinet = harshness risk
- Use Master EQ to cut 3-5kHz if drums become grating
- Consider Cabinet 2 or 4 if Cabinet 1 is too bright

### Low-End Management
- Hardcore can exaggerate sub frequencies
- Use Gate to prevent sub build-up between hits
- Master EQ Band 1 (60Hz) controls sub weight

## Advanced Techniques

### Multi-Band Processing
For ultimate control, split drum bus into frequency bands:
- **Lows (20-120Hz):** Clean Cabinet 2 (tight sub)
- **Mids (120-2kHz):** Processed Hardcore with moderate distortion
- **Highs (2kHz+):** Light processing or clean

### Per-Drum Variations
Instead of processing entire drum bus, use multiple Hardcore instances:
- **Kick:** Heavy distortion + Cabinet 1
- **Snare:** Moderate distortion + Reverb
- **Hi-hats:** Light distortion + Cabinet 4 (balanced)

### Automation
- Automate Distortion Drive for build-ups (increase from 40% to 70%)
- Automate Gate Threshold for verse/chorse variation
- Automate Master EQ for section changes

## CPU Optimization

**Freeze tracks** when Hardcore chain is finalized:
1. Render drum bus to audio (Alt + R)
2. Keep original muted for future edits
3. Reduces CPU usage significantly

## Troubleshooting

| Problem | Likely Cause | Solution |
|---------|--------------|----------|
| Too harsh | High tone + Cabinet 1 | Reduce Tone setting, switch to Cabinet 2 or 4 |
| No punch | Fast compression attack | Increase attack time to 10-15ms |
| Muddy | 310Hz buildup | Cut Master EQ Band 3 |
| Weak sub | 60Hz cut or gate too tight | Boost Band 1, loosen gate release |
| Artifacts | Input too hot | Reduce Input Gain or source level |

## Quick Start Preset

**Trap Drum Destruction (Copy these settings):**
`\`\`
Noise Gate: ON, Threshold -28dB, Attack 4ms, Hold 50ms, Release 90ms
Compressor: ON, Threshold -15dB, Ratio 5:1, Attack 6ms, Release 110ms, Makeup 8dB
Distortion: ON, Drive 65%, Tone +18, Level 85%
Cabinet: 1 (Bright)
Master EQ: 60Hz +2, 170Hz +3, 310Hz -2, 3kHz +3, 12kHz +1
`\`\`

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*

```

---

## FILE: 03-Workflows\by-goal\industrial-vocal-chains.md

```markdown
# Industrial Vocal Chains

Complete workflow for aggressive, distorted, industrial-style vocal processing using Hardcore. [SRC: IL-MAN]

## Overview

Industrial vocal chains combine heavy distortion, aggressive compression, modulation effects, and limited frequency ranges to create harsh, mechanical, post-apocalyptic vocal aesthetics. These workflows are essential for industrial hip-hop, noise rap, aggressive electronic, and experimental productions.

## Core Industrial Sound Principles

**Aggression:** Heavy distortion, saturation, and clipping
**Mechanical:** Repetitive, sequenced, or gated patterns
**Limited:** Narrow frequency ranges simulating damaged equipment
**Layered:** Multiple vocal tracks with different processing
**Rhythmic:** Vocals become part of the rhythmic texture

## Method 1: Classic Industrial Vocal

**Character:** Harsh, mid-forward, heavily compressed, mechanical

### Chain Configuration
`\`\`
Position 1: Noise Gate (Choppy, mechanical)
Position 2: Distortion (Heavy saturation)
Position 3: Modulator (Ring modulation or Tremolo)
Position 4: Compressor (Extreme limiting)
Position 5: Cabinet 5 (Small/broken speaker)
`\`\`

### Detailed Settings

**1. Noise Gate** (Mechanical choppiness)
- Threshold: -18 to -22 dB
- Attack: 0.5-2 ms (immediate)
- Hold: 20-40 ms (short bursts)
- Release: 40-80 ms (abrupt cutoff)

**Purpose:** Create staccato, machine-gun vocal effect

**2. Distortion** (Aggressive saturation)
- Drive: 70-90% (extreme)
- Tone: +20 to +40 (harsh brightness)
- Level: 70-85%

**Purpose:** Maximum harmonic destruction

**3. Modulator** (Mechanical instability)

**Option A - Ring Modulation:**
- Mode: Ring Mod
- Rate: 3-8 Hz (or synced to tempo)
- Depth: 60-80%
- Level: 70%

**Option B - Tremolo:**
- Mode: Tremolo
- Rate: 4-12 Hz (chopping)
- Depth: 70-90%
- Level: 85%

**Purpose:** Synthetic, inhuman vocal character

**4. Compressor** (Brickwall limiting)
- Threshold: -6 to -10 dB
- Ratio: 20:1 (hard limiting)
- Attack: 0.5-3 ms (immediate)
- Release: 40-100 ms (fast)
- Makeup: 3-6 dB

**Purpose:** Flatten all dynamics, consistent aggression

**5. Cabinet 5** (Damaged speaker)
- Mix: 100%

**Purpose:** Boxy, limited, broken equipment character

**6. Master 8-Band EQ** (Harsh presence)
- 60 Hz: -4 dB
- 170 Hz: -2 dB
- 310 Hz: +3 dB (boxy mid)
- 600 Hz: +4 dB (forward)
- 1 kHz: +5 dB (aggressive presence)
- 3 kHz: +2 dB
- 6 kHz: -2 dB (control extreme harshness)
- 12 kHz: -6 dB

## Method 2: Noise/Texture Layer

**Character:** Atmospheric, textural, background industrial bed

### Chain Configuration
`\`\`
Position 1: Distortion (Maximum)
Position 2: Flanger (Sweeping metallic)
Position 3: Phaser (Liquid movement)
Position 4: Reverb (Industrial space)
Position 5: Cabinet 5
`\`\`

### Detailed Settings

**1. Distortion**
- Drive: 85-100% (absolute maximum)
- Tone: +30 to +50
- Level: 60%

**2. Flanger**
- Rate: 0.1-0.3 Hz (slow sweep)
- Depth: 60-80%
- Feedback: +40 to +70% (metallic resonance)
- Level: 50-60%

**3. Phaser**
- Rate: 0.2-0.5 Hz
- Depth: 50-70%
- Stages: 6 or 8 (maximum complexity)
- Level: 40-50%

**4. Reverb**
- Size: 60-80% (large industrial space)
- Damp: 30-50% (bright, reflective)
- Mix: 40-60% (prominent)
- Level: 80%

**Purpose:** Create cavernous industrial atmosphere

**Use case:** Background texture layer, not lead vocal

## Method 3: Industrial Rap Lead

**Character:** Aggressive but intelligible, rhythmic, punchy

### Chain Configuration
`\`\`
Position 1: Compressor (Control)
Position 2: Distortion (Character)
Position 3: EQ Stompbox (Tone shaping)
Position 4: Noise Gate (Rhythmic effect)
Position 5: Cabinet 3 (British) or 1 (Bright)
`\`\`

### Detailed Settings

**1. Compressor** (Punch and control)
- Threshold: -10 to -14 dB
- Ratio: 8:1 to 12:1
- Attack: 2-5 ms (fast)
- Release: 80-150 ms
- Makeup: 6-10 dB

**2. Distortion** (Aggressive but controlled)
- Drive: 50-70%
- Tone: +10 to +25
- Level: 80-90%

**3. EQ Stompbox**
- Low: -3 to -6 dB @ 150Hz (remove boom)
- Mid: +3 to +6 dB @ 2-3kHz (presence)
- High: -6 to -9 dB @ 8kHz (control sibilance)

**4. Noise Gate** (Rhythmic effect)
- Threshold: -20 to -25 dB
- Attack: 2-5 ms
- Hold: 60-100 ms (slightly longer for flow)
- Release: 100-200 ms (some decay)

**5. Cabinet 3** (British) or **Cabinet 1** (Bright)
- Mix: 100%

**Purpose:** Mid-forward, aggressive but less "broken" than Cabinet 5

## Layering Strategy

Industrial vocals work best in layers:

**Layer 1 - Main Vocal:**
- Industrial Rap Lead chain (Method 3)
- Center of mix, provides intelligibility

**Layer 2 - Destruction:**
- Classic Industrial chain (Method 1)
- Hard-panned or blended 30% under main
- Provides texture and aggression

**Layer 3 - Texture:**
- Noise/Texture chain (Method 2)
- Background, low in mix (10-20%)
- Provides atmosphere and space

**Layer 4 - Whispers/Shouts:**
- Extreme noise gate for staccato effect
- Used for specific words/phrases

## Performance Techniques

### Vocal Delivery for Industrial
1. **Staccato delivery:** Short, punchy words work best with gates
2. **Shouted phrases:** Yelling exaggerates distortion nicely
3. **Rhythmic patterns:** Repetition creates mechanical feel
4. **Whisper to scream:** Dynamic range provides contrast
5. **Breath control:** Heavy compression will exaggerate breathing

### Lyric Considerations
- Industrial production favors aggressive, rhythmic content
- Staccato words: "Stop," "Break," "Crush," "Kill"
- Repetitive phrases enhance the mechanical aesthetic
- Shouted group vocals (gang vocals) layered sound powerful

## Genre Variations

### Industrial Hip-Hop (Death Grips style)
- Heavy use of Method 3 (Rap Lead)
- Add delay (100-200ms) for space
- Layer with noise textures
- Emphasize rhythmic delivery

### Noise/Experimental (Merzbow influence)
- Method 2 (Texture) as primary vocal
- Vocals become textural, not lyrical
- Extreme distortion + multiple modulation effects
- Prioritize atmosphere over intelligibility

### Industrial Rock (Nine Inch Nails style)
- Blend clean and industrial vocals
- Method 3 for aggression
- Clean vocal blended underneath
- Emphasis on emotional delivery through distortion

### Dark Electronic/EBM
- Method 1 (Classic Industrial)
- Heavy gate for sequenced feel
- Sync modulator rate to tempo
- Emphasis on cold, mechanical aesthetic

## Safety Rules

### Hearing Protection
- Industrial settings can create extreme high-frequency content
- Monitor at reasonable volumes
- Use limiters after Hardcore for safety

### Sibilance Control
- Industrial distortion exaggerates sibilance
- Always cut 6-8kHz in Master EQ
- Consider de-esser after Hardcore

### Gain Staging
- Extreme distortion = extreme perceived loudness
- Reduce levels significantly when bypassing
- A/B test at consistent volumes

### Intelligibility
- Industrial doesn't mean unintelligible
- Test with lyrics: Can you understand every word?
- If not, reduce distortion or adjust EQ

## Parallel Processing

For control, use multiple Hardcore instances on sends:

**Send 1 - Aggression:**
- Method 1 (Classic Industrial) at 40% blend

**Send 2 - Character:**
- Distortion only (no gate/modulator) at 25% blend

**Send 3 - Space:**
- Reverb/Delay chain at 30% blend

**Dry Vocal:**
- 60-70% of total mix

## Automation Strategies

### Phrase-Level Automation
- **Build-ups:** Gradually increase distortion drive
- **Impacts:** Momentary increase in gate threshold (tighter)
- **Breakdowns:** Reduce to cleaner processing

### Modulator Rate Automation
- Sync ring modulator rate to section tempo
- Automate for breakdowns (slower rate = more space)
- Tremolo rate can follow song energy

### Gate Threshold Automation
- **Tighter sections:** Lower threshold (more gating)
- **Flow sections:** Higher threshold (less gating)
- **Word-by-word:** Threshold follows vocal dynamics

## Quick Start Presets

**Classic Industrial:**
`\`\`
Noise Gate: ON, Threshold -20dB, Attack 1ms, Hold 30ms, Release 60ms
Distortion: ON, Drive 80%, Tone +35, Level 75%
Modulator: ON, Mode Ring Mod, Rate 5Hz, Depth 75%, Level 70%
Compressor: ON, Threshold -8dB, Ratio 20:1, Attack 2ms, Release 80ms
Cabinet: 5 (Small)
Master EQ: 310Hz +3, 600Hz +4, 1kHz +5, 12kHz -6
`\`\`

**Industrial Rap:**
`\`\`
Compressor: ON, Threshold -12dB, Ratio 10:1, Attack 3ms, Release 120ms
Distortion: ON, Drive 60%, Tone +20, Level 85%
EQ Stompbox: ON, Low 150Hz -4dB, Mid 2.5kHz +5dB, High 8kHz -7dB
Noise Gate: ON, Threshold -22dB, Attack 3ms, Hold 80ms, Release 150ms
Cabinet: 3 (British)
Master EQ: 1kHz +4, 3kHz +2, 6kHz -2
`\`\`

**Texture Layer:**
`\`\`
Distortion: ON, Drive 95%, Tone +45, Level 60%
Flanger: ON, Rate 0.2Hz, Depth 70%, Feedback 55%, Level 55%
Phaser: ON, Rate 0.3Hz, Depth 60%, Stages 8, Level 45%
Reverb: ON, Size 70%, Damp 40%, Mix 50%, Level 80%
Cabinet: 5 (Small)
Master EQ: 310Hz +2, 600Hz +3, 1kHz +2, 6kHz -3, 12kHz -8
`\`\`

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*

```

---

## FILE: 03-Workflows\by-goal\metal-wall-of-sound-vibe.md

```markdown
# Metal Wall-of-Sound Vibe

Complete workflow for creating massive, dense, aggressive wall-of-sound textures using Hardcore. [SRC: IL-MAN]

## Overview

The "wall-of-sound" aesthetic—pioneered in 1960s pop production and perfected in metal genres like doom, stoner, shoegaze, and blackgaze—involves dense, layered, saturated textures that create an overwhelming sonic experience. This workflow transforms individual instruments into massive, enveloping soundscapes.

## Core Wall-of-Sound Principles

**Density:** Multiple layers occupying similar frequency ranges
**Saturation:** Heavy distortion creating rich harmonic content
**Width:** Stereo spread through modulation and doubling
**Compression:** Flattened dynamics for consistent density
**Space:** Reverb and delay creating cavernous atmosphere

## Method 1: Guitar Wall

**Goal:** Massive, dense guitar textures

### Layer Structure
Create 4-6 guitar layers, each with Hardcore processing:

**Layer 1 - Center Foundation:**
- Mono, center-panned
- Moderate distortion (Drive 50%)
- Cabinet 2 (Vintage) for warmth
- Slight delay (slapback 80ms)

**Layer 2 - Left Width:**
- Hard-panned left
- Chorus (Depth 60%, Level 50%)
- Same distortion as Layer 1
- Cabinet 1 (Bright)

**Layer 3 - Right Width:**
- Hard-panned right
- Flanger (Depth 50%, Rate 0.2Hz)
- Same distortion as Layer 1
- Cabinet 1 (Bright)

**Layer 4 - Texture Left:**
- Hard-panned left
- Heavy distortion (Drive 80%)
- Phaser (Stages 8, Depth 60%)
- Cabinet 5 (Small) - boxy character
- Lower volume (50% of main layers)

**Layer 5 - Texture Right:**
- Hard-panned right
- Heavy distortion (Drive 80%)
- Different phaser rate (0.15Hz vs Layer 4)
- Cabinet 5 (Small)
- Lower volume (50% of main layers)

**Layer 6 - Ambience:**
- Center or spread
- Heavy reverb (Size 80%, Mix 50%)
- Light distortion (Drive 30%)
- Cabinet 2 (Vintage)
- Very low volume (20% of main layers)

### Hardcore Settings Per Layer

**Foundation Layer:**
`\`\`
Distortion: Drive 50%, Tone +5, Level 90%
Compressor: Threshold -16dB, Ratio 4:1, Attack 10ms, Release 200ms
Cabinet: 2 (Vintage)
Master EQ: Gentle, slight mid scoop
`\`\`

**Width Layers (L/R):**
`\`\`
Distortion: Drive 50%, Tone +10, Level 85%
Chorus (Left) / Flanger (Right): Moderate settings
Compressor: Same as foundation
Cabinet: 1 (Bright)
Master EQ: Slight high boost
`\`\`

**Texture Layers:**
`\`\`
Distortion: Drive 80%, Tone +20, Level 70%
Phaser: Rate 0.15-0.25Hz, Depth 60%, Stages 6-8
Cabinet: 5 (Small)
Master EQ: Mid-forward (boxy character)
`\`\`

## Method 2: Synth Wall

**Goal:** Dense, evolving synthesizer textures

### Layer Structure

**Layer 1 - Bass Foundation:**
- Sub oscillator or low synth
- Minimal processing: Compression + Cabinet 2
- Center, full volume

**Layer 2 - Mid Pad:**
- Mid-range synth (octaves above bass)
- Chorus (Depth 70%, wide)
- Cabinet 1 (Bright)
- Full stereo width

**Layer 3 - High Shimmer:**
- High-frequency synth or noise
- Heavy chorus + flanger
- Distortion (Drive 60%)
- Reverb (Size 70%)
- Cabinet 4 (American)
- Lower volume, wide stereo

**Layer 4 - Texture Noise:**
- White or pink noise
- Heavy distortion + phaser
- Auto-filter or wah
- Cabinet 5 (Small)
- Very low volume, background texture

## Method 3: Drum Wall

**Goal:** Dense, saturated drum textures

See detailed **Drum Destruction Chain.md**

Additional wall-of-sound elements:
- **Room mics:** Heavy reverb and compression
- **Parallel saturation:** Multiple send tracks with different distortions
- **Cymbal wash:** Heavy compression on room mics for continuous cymbal sustain

## Method 4: Vocal Wall

**Goal:** Dense, layered vocal textures (shoegaze/Cocteau Twins style)

### Layer Structure

**Layer 1 - Main Vocal:**
- Lead melody, center
- Compression + subtle saturation
- Cabinet 2 or 4

**Layer 2 - Doubles L/R:**
- Same melody, hard-panned
- Chorus (Depth 60%)
- Delay (100ms slapback)

**Layer 3 - Harmonies:**
- Additional harmonies, spread across stereo
- Heavy reverb
- Distortion (Drive 40%)

**Layer 4 - Textures:**
- Vocals as instrument (no words)
- Heavy phaser + flanger
- Heavy distortion (Drive 70%)
- Very reverb-heavy

**Layer 5 - Whispers/Ambience:**
- Whispered vocals
- Heavy reverb + delay
- Low volume, background

## Master Bus Processing for Wall

After layering, process the master:

**Hardcore on Master Bus:**
`\`\`
Compressor: Glue everything together
  - Threshold: -10dB
  - Ratio: 4:1
  - Attack: 20ms
  - Release: 300ms

EQ Stompbox: Final shaping
  - Low: +2dB @ 80Hz (weight)
  - Mid: -2dB @ 500Hz (scoop)
  - High: +3dB @ 6kHz (air)

Cabinet: 2 (Vintage) or 4 (American)
  - Adds final cohesive character

Master EQ: Wall polish
  - 60Hz: +2dB
  - 310Hz: -3dB (mud removal)
  - 3kHz: +2dB (clarity)
  - 12kHz: +3dB (air)
`\`\`

## Genre-Specific Variations

### Doom Metal
- Slower tempos allow for longer reverb
- Heavy use of Cabinet 2 (Vintage)
- More distortion, less clarity
- Emphasis on low-end weight

### Shoegaze
- Heavy modulation (chorus/flanger/phaser)
- Reverb is primary effect
- Balance between clarity and wash
- Cabinet 2 or 4 for smoothness

### Blackgaze
- Mix of black metal aggression + shoegaze wash
- Distortion: 60-80% on all layers
- Heavy compression for consistency
- Extreme reverb settings

### Stoner Rock
- Mid-forward aggression
- Cabinet 3 (British) emphasis
- Moderate distortion (40-60%)
- Reverb for space but not overwhelming

### Drone/Doom
- Minimal note changes, maximum sustain
- Extreme distortion (80-100%)
- Heavy compression and limiting
- Very long reverb (Size 90%+)
- Sustained, evolving textures

## Creating the Wall: Step-by-Step

### Step 1: Foundation
- Record main instrument (guitar riff, synth pad)
- Process with moderate Hardcore chain
- Establish tonal center

### Step 2: Width
- Duplicate and pan left/right
- Add different modulation to each side
- Widen stereo field

### Step 3: Texture
- Add additional layers with different processing
- Extreme distortion, phasers, different cabinets
- Lower volume but full frequency coverage

### Step 4: Space
- Add reverb-heavy layers
- Background ambient elements
- Create depth and dimension

### Step 5: Glue
- Master bus compression
- Final EQ shaping
- Cohesive cabinet simulation

## Safety Rules

### Muddiness Prevention
- Wall-of-sound can quickly become muddy
- Use EQ to carve space for each layer
- High-pass texture layers aggressively
- Master EQ cut at 310Hz

### Clarity Maintenance
- Despite density, maintain some definition
- Don't over-compress to the point of lifelessness
- Keep main melodic elements cleaner
- Use sidechain compression if needed

### CPU Management
- Multiple layers with Hardcore = high CPU
- Freeze completed layers
- Render to audio frequently
- Commit to decisions

### Mono Compatibility
- Check wall in mono regularly
- Phase cancellation can destroy the wall
- Keep bass and center elements mono-compatible
- Modulation effects can create phase issues

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| Wall sounds muddy | Too many layers in same frequency range | High-pass texture layers, EQ cuts at 310-600Hz |
| No definition | Over-compression or too much distortion | Reduce compression, keep some layers cleaner |
| Harsh and fatiguing | Too much high-end distortion | Cut 6-12kHz, use darker cabinets |
| Thin wall | Not enough low-end foundation | Add sub layer, boost 60Hz on bass elements |
| Phase cancellation | Stereo effects creating issues | Check in mono, adjust modulation rates |
| CPU overload | Too many active Hardcore instances | Freeze layers, render to audio |

## Quick Start: 6-Layer Guitar Wall

**Layer 1 (Center):**
- Distortion 50%, Tone +5, Cabinet 2, Delay 80ms

**Layer 2 (Left):**
- Distortion 50%, Tone +10, Cabinet 1, Chorus Depth 60%

**Layer 3 (Right):**
- Distortion 50%, Tone +10, Cabinet 1, Flanger Depth 50%

**Layer 4 (Left Texture):**
- Distortion 80%, Tone +20, Cabinet 5, Phaser Stages 8

**Layer 5 (Right Texture):**
- Distortion 80%, Tone +20, Cabinet 5, Phaser Rate 0.15Hz

**Layer 6 (Ambience):**
- Distortion 30%, Cabinet 2, Reverb Size 80%, Mix 50%

**Master Bus:**
- Compression 4:1, EQ scoop at 500Hz, Vintage cabinet

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*

```

---

## FILE: 03-Workflows\by-goal\radio-megaphone-effects.md

```markdown
# Radio/Megaphone Effects

Complete workflow for creating telephone, radio, megaphone, and broadcast-style vocal effects using Hardcore. [SRC: IL-MAN]

## Overview

Radio and megaphone effects simulate the frequency-limited, compressed, distorted character of broadcast equipment, telephone systems, and public address systems. These effects are staples in hip-hop production for hooks, ad-libs, transitions, and stylistic vocal treatments.

## Core Sound Characteristics

**Limited Frequency Range:**
- Telephones: 300Hz - 3.4kHz
- AM Radio: 100Hz - 5kHz
- Megaphones: 200Hz - 4kHz
- FM Radio: 30Hz - 15kHz (but compressed and bright)

**Dynamic Character:**
- Heavy compression (broadcast limiters)
- Aggressive distortion (speaker overdrive)
- Hard limiting (transmitter protection)

**Tonal Signature:**
- Mid-forward (1-3kHz emphasis)
- Sibilance control (reduced 5-10kHz)
- Low-end rolloff (microphone proximity effect)

## Method 1: Telephone Effect

**Frequency range:** ~300Hz - 3.4kHz
**Character:** Band-limited, intelligible, slightly distorted

### Chain Configuration
`\`\`
Position 1: EQ Stompbox (Band limiting)
Position 2: Distortion (Phone line saturation)
Position 3: Compressor (Heavy limiting)
Position 4: Cabinet 5 (Small speaker)
`\`\`

### Detailed Settings

**1. EQ Stompbox** (Telephone bandpass)
- Low Frequency: 300 Hz
- Low Gain: -15 dB (high-pass)
- Mid Frequency: 2000 Hz
- Mid Gain: +4 to +6 dB (presence boost)
- High Frequency: 3400 Hz
- High Gain: -15 dB (low-pass)

**Purpose:** Simulate telephone frequency response (300Hz-3.4kHz)

**2. Distortion** (Line saturation)
- Drive: 15-30%
- Tone: +10 to +25 (bright, thin)
- Level: 85-90%

**Purpose:** Add subtle overdrive like overloaded phone lines

**3. Compressor** (Heavy broadcast limiting)
- Threshold: -8 to -12 dB
- Ratio: 10:1 to 20:1 (limiting)
- Attack: 1-3 ms (fast catching)
- Release: 50-100 ms (fast recovery)
- Makeup: 4-6 dB

**Purpose:** Simulate broadcast limiter, even out all levels

**4. Cabinet 5** (Small speaker character)
- Mix: 100%

**Purpose:** Boxy, limited frequency character of phone speaker

**5. Master 8-Band EQ** (Fine-tuning)
- 60 Hz: -12 dB (remove all sub)
- 170 Hz: -6 dB
- 310 Hz: 0 dB
- 600 Hz: +2 dB (low-mid presence)
- 1 kHz: +4 dB (primary vocal presence)
- 3 kHz: +3 dB (intelligibility)
- 6 kHz: -4 dB (control harshness)
- 12 kHz: -10 dB (remove air)

## Method 2: AM Radio Effect

**Frequency range:** ~100Hz - 5kHz
**Character:** Warm, compressed, slightly noisy

### Chain Configuration
Same as telephone but with wider frequency range and more warmth.

### Key Differences from Telephone

**1. EQ Stompbox** (AM radio range)
- Low Frequency: 100 Hz
- Low Gain: -9 dB (gentler high-pass)
- Mid Frequency: 1500 Hz
- Mid Gain: +3 dB
- High Frequency: 5000 Hz
- High Gain: -12 dB

**2. Distortion** (Warm overdrive)
- Drive: 20-35%
- Tone: 0 to +10 (warmer than telephone)

**3. Cabinet 3** (British/Crunch) or 2 (Vintage)
- For more warmth and body than Cabinet 5

**4. Master EQ** (Warmer curve)
- Less severe high-frequency cuts
- More 200-600Hz body
- Add slight saturation character

## Method 3: Megaphone/Bullhorn Effect

**Frequency range:** ~200Hz - 4kHz
**Character:** Aggressive, distorted, compressed, "tinny"

### Chain Configuration
`\`\`
Position 1: Distortion (Speaker breakup)
Position 2: EQ Stompbox (Megaphone EQ)
Position 3: Compressor (Heavy limiting)
Position 4: Cabinet 5 (Small speaker)
Position 5: Noise Gate (Choppy character)
`\`\`

### Detailed Settings

**1. Distortion** (Heavy speaker breakup)
- Drive: 40-60%
- Tone: +15 to +30 (bright, aggressive)
- Level: 80%

**2. EQ Stompbox** (Megaphone bandpass)
- Low Frequency: 200 Hz
- Low Gain: -12 dB
- Mid Frequency: 2500 Hz
- Mid Gain: +6 to +9 dB (aggressive mid boost)
- High Frequency: 4000 Hz
- High Gain: -12 dB

**3. Compressor** (Extreme limiting)
- Threshold: -6 to -10 dB
- Ratio: 20:1 (hard limiting)
- Attack: 1 ms
- Release: 40-80 ms
- Makeup: 3-5 dB

**4. Cabinet 5** (Small speaker boxiness)
- Mix: 100%

**5. Noise Gate** (Megaphone choppiness)
- Threshold: -20 to -25 dB
- Attack: 1-2 ms
- Hold: 30-50 ms
- Release: 60-100 ms

**6. Master EQ** (Final megaphone shaping)
- 60 Hz: -10 dB
- 170 Hz: -4 dB
- 310 Hz: +3 dB (boxy character)
- 600 Hz: +4 dB (mid forward)
- 1 kHz: +5 dB (presence)
- 3 kHz: +3 dB (intelligibility)
- 6 kHz: -3 dB (control harshness)
- 12 kHz: -8 dB (remove air)

## Method 4: FM Radio/Broadcast

**Frequency range:** ~30Hz - 15kHz (full range but processed)
**Character:** Bright, compressed, "radio-ready"

### Chain Configuration
`\`\`
Position 1: Compressor (Multi-stage feel)
Position 2: EQ Stompbox (Broadcast EQ)
Position 3: Distortion (Subtle excitation)
Position 4: Cabinet 1 (Bright) or 4 (American)
`\`\`

### Detailed Settings

**1. Compressor** (Broadcast consistency)
- Threshold: -14 to -18 dB
- Ratio: 6:1 to 10:1
- Attack: 5-8 ms
- Release: 150-250 ms
- Makeup: 6-10 dB

**2. EQ Stompbox** (Broadcast smile curve)
- Low: +2 dB @ 100 Hz (warmth)
- Mid: 0 dB @ 1 kHz
- High: +4 dB @ 8 kHz (brightness)

**3. Distortion** (Exciter-style)
- Drive: 10-20% (very subtle)
- Tone: +10 to +20
- Level: 95%

**4. Cabinet 1** (Bright/Modern) or **Cabinet 4** (American)
- Mix: 75-100%

**5. Master EQ** (Broadcast polish)
- 60 Hz: +1 dB (sub presence)
- 170 Hz: +1 dB (warmth)
- 310 Hz: -1 dB (slight mud removal)
- 600 Hz: 0 dB
- 1 kHz: +1 dB (presence)
- 3 kHz: +2 dB (clarity)
- 6 kHz: +3 dB (air)
- 12 kHz: +2 dB (sheen)

## Genre-Specific Applications

### Hip-Hop Radio Hooks
**Goal:** "Now playing on Hot 97" vibe
- Use FM Radio method
- Add slight delay (slapback 80ms)
- Heavy compression for consistency
- Bright, energetic character

### Trap Megaphone Ad-libs
**Goal:** Aggressive "hey!" and "yeah!" shouts
- Use Megaphone method
- Very short, choppy delivery works best
- Gate emphasizes the choppiness
- Drive 60%+ for aggression

### Lo-Fi Phone Vocals
**Goal:** Intimate "phone call" aesthetic
- Use Telephone method
- Softer, more subtle distortion
- Add delay (100-150ms) for distance
- Lower mix (50-70%) for blend

### Industrial/Punk Announcements
**Goal:** Aggressive PA system
- Use Megaphone method
- Add Modulator (Tremolo) for instability
- Ring modulation for destruction
- Cabinet 5 at 100%

## Parallel Processing for Blend

For more control, use Hardcore on a send track:

**Setup:**
- Vocal: 100% dry
- Send: Hardcore Radio/Megaphone chain at 30-60% blend
- Hardcore: 100% wet

**Benefits:**
- Control effect amount with send fader
- Automate for section changes
- Keep dry vocal as foundation

## Automation Strategies

### Section-Based
- **Verses:** Clean or light telephone effect
- **Choruses:** FM Radio (bright, energetic)
- **Bridge:** Megaphone (contrast, aggression)
- **Outro:** Telephone fading out

### Word-by-Word
- Individual words as megaphone ad-libs
- Phrases through telephone for storytelling
- Hooks through FM radio for polish

### Build-Up Effects
- Start clean, gradually increase drive
- Start with Cabinet 4, switch to Cabinet 5
- Automate EQ high-pass from 100Hz to 300Hz

## Integration with Full Mix

### In the Vocal Chain
`\`\`
Vocal Source → Hardcore Radio Effect → Final Compressor → Master
`\`\`

### As Send Effect
`\`\`
Vocal Source ──┬──→ Dry
               └──→ Send (Hardcore Radio) → Blend 40%
`\`\`

### Post-Processing
After Hardcore, consider:
- **De-esser:** If sibilance is too strong
- **Limiter:** For broadcast-style brickwall
- **Additional reverb:** For space (if not in Hardcore)

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| Can't understand words | Too much distortion or EQ | Reduce Drive, check midrange clarity |
| Too harsh/shrill | High tone + cabinet 1 | Switch to Cabinet 2 or reduce Tone |
| Not "effect-y" enough | Subtle settings | Increase Drive, narrow frequency range |
| Sounds digital/clean | Not enough cabinet | Ensure Cabinet 5 is at 100% |
| Muddy/thick | Low-end not cut enough | High-pass higher (300Hz+) |
| No presence | Mids not boosted | Boost 1-3kHz in Stompbox EQ |

## Quick Start Presets

**Telephone Effect:**
`\`\`
EQ Stompbox: ON, Low 300Hz -15dB, Mid 2kHz +5dB, High 3.4kHz -15dB
Distortion: ON, Drive 25%, Tone +20, Level 88%
Compressor: ON, Threshold -10dB, Ratio 15:1, Attack 2ms, Release 80ms
Cabinet: 5 (Small)
Master EQ: 60Hz -12, 1kHz +4, 3kHz +3, 12kHz -10
`\`\`

**Megaphone Effect:**
`\`\`
Distortion: ON, Drive 55%, Tone +25, Level 80%
EQ Stompbox: ON, Low 200Hz -12dB, Mid 2.5kHz +8dB, High 4kHz -12dB
Compressor: ON, Threshold -8dB, Ratio 20:1, Attack 1ms, Release 60ms
Noise Gate: ON, Threshold -22dB, Attack 1ms, Hold 40ms, Release 80ms
Cabinet: 5 (Small)
Master EQ: 60Hz -10, 600Hz +4, 1kHz +5, 12kHz -8
`\`\`

**FM Radio Effect:**
`\`\`
Compressor: ON, Threshold -16dB, Ratio 8:1, Attack 6ms, Release 200ms
EQ Stompbox: ON, Low 100Hz +2dB, Mid 1kHz 0dB, High 8kHz +4dB
Distortion: ON, Drive 15%, Tone +15, Level 95%
Cabinet: 4 (American)
Master EQ: 60Hz +1, 3kHz +2, 6kHz +3, 12kHz +2
`\`\`

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*

```

---

## FILE: 03-Workflows\by-goal\synth-fattening-chains.md

```markdown
# Synth Fattening Chains

Complete workflow for adding width, depth, saturation, and character to synthesizers using Hardcore. [SRC: IL-MAN]

## Overview

Synthesizers—especially digital virtual analog and software synths—can sound thin, sterile, or two-dimensional. The Synth Fattening Chain uses Hardcore's modulation effects, subtle saturation, and cabinet simulation to add analog-style warmth, stereo width, and three-dimensional character.

## Why Synths Need Fattening

**Digital Sterility:**
- Pure waveforms lack harmonic complexity
- No analog circuit noise or saturation
- Flat dynamics without natural movement

**The Solution:**
- Modulation adds stereo width and movement
- Saturation adds harmonics and warmth
- Cabinet simulation adds speaker character
- Time effects add depth and space

## Method 1: Analog Warmth

**Goal:** Subtle saturation and character like vintage analog synths

### Chain Configuration
`\`\`
Position 1: Compressor (Analog-style leveling)
Position 2: Distortion (Gentle saturation)
Position 3: Cabinet 2 (Vintage)
`\`\`

### Detailed Settings

**1. Compressor** (Gentle analog leveling)
- Threshold: -18 to -22 dB
- Ratio: 2:1 to 3:1 (subtle)
- Attack: 15-25 ms (let transients breathe)
- Release: 300-500 ms (smooth)
- Makeup: 3-5 dB

**Purpose:** Even out synth levels like analog compressors

**2. Distortion** (Analog saturation)
- Drive: 15-25% (gentle)
- Tone: -5 to +5 (neutral)
- Level: 90-95%

**Purpose:** Add 2nd/3rd harmonics for warmth

**3. Cabinet 2** (Vintage)
- Mix: 75-100%

**Purpose:** Vintage speaker character, rounded highs

**4. Master 8-Band EQ**
- 60 Hz: +1 dB
- 170 Hz: 0 dB
- 310 Hz: 0 dB
- 600 Hz: -1 dB
- 1 kHz: 0 dB
- 3 kHz: +1 dB
- 6 kHz: +2 dB
- 12 kHz: +1 dB

**Result:** Warm, vintage analog character with controlled low-end and gentle high-end lift.

## Method 2: Stereo Width & Movement

**Goal:** Wide, three-dimensional synths with modulation movement

### Chain Configuration
`\`\`
Position 1: Chorus (Width)
Position 2: Phaser (Movement)
Position 3: Cabinet 4 (Transparent)
`\`\`

### Detailed Settings

**1. Chorus** (Stereo widening)
- Rate: 0.2-0.5 Hz (slow, subtle)
- Depth: 40-60%
- Level: 50-70%

**Purpose:** Create stereo width through detuned copies

**2. Phaser** (Liquid movement)
- Rate: 0.1-0.3 Hz (very slow)
- Depth: 35-50%
- Stages: 4 or 6
- Level: 40-50%

**Purpose:** Add subtle movement without obvious effect

**3. Cabinet 4** (American/Smooth)
- Mix: 50-75%

**Purpose:** Balanced frequency response maintains width

**4. Master 8-Band EQ**
- 60 Hz: 0 dB
- 170 Hz: -1 dB
- 310 Hz: -2 dB (reduce mud for clarity)
- 600 Hz: 0 dB
- 1 kHz: 0 dB
- 3 kHz: +2 dB
- 6 kHz: +3 dB (air and width)
- 12 kHz: +4 dB (maximum air)

**Result:** Wide, spacious synth with gentle movement and clarity.

## Method 3: Lead Synth Aggression

**Goal:** Cutting, aggressive lead synths for solos and hooks

### Chain Configuration
`\`\`
Position 1: Compressor (Punch)
Position 2: Distortion (Grit and edge)
Position 3: EQ Stompbox (Presence shaping)
Position 4: Cabinet 1 (Bright)
`\`\`

### Detailed Settings

**1. Compressor** (Transient control)
- Threshold: -12 to -16 dB
- Ratio: 4:1 to 6:1
- Attack: 5-10 ms (some transient preservation)
- Release: 150-250 ms
- Makeup: 6-8 dB

**2. Distortion** (Lead character)
- Drive: 40-60%
- Tone: +10 to +20 (brightness)
- Level: 85-90%

**Purpose:** Grit and harmonics that cut through mix

**3. EQ Stompbox** (Scoop and boost)
- Low: 0 dB or slight cut @ 120Hz
- Mid: -2 to -4 dB @ 400-600 Hz (scoop)
- High: +2 to +4 dB @ 4-6 kHz (presence)

**Purpose:** Mid-scoop + high-boost = modern lead tone

**4. Cabinet 1** (Bright/Modern)
- Mix: 100%

**Purpose:** Maximum presence and cutting power

**5. Master 8-Band EQ** (Lead polish)
- 60 Hz: -2 dB (tighten)
- 170 Hz: -1 dB
- 310 Hz: -3 dB (scoop)
- 600 Hz: -2 dB (scoop)
- 1 kHz: 0 dB
- 3 kHz: +3 dB (attack)
- 6 kHz: +4 dB (presence)
- 12 kHz: +3 dB (air)

**Result:** Modern, aggressive lead synth that cuts through dense mixes.

## Method 4: Pad Enhancement

**Goal:** Lush, atmospheric pads with depth and space

### Chain Configuration
`\`\`
Position 1: Chorus (Width)
Position 2: Flanger (Subtle movement)
Position 3: Reverb (Space)
Position 4: Cabinet 2 (Vintage warmth)
`\`\`

### Detailed Settings

**1. Chorus** (Wide pad foundation)
- Rate: 0.1-0.3 Hz (very slow)
- Depth: 50-70%
- Level: 60-80%

**Purpose:** Wide, detuned pad character

**2. Flanger** (Subtle shimmer)
- Rate: 0.05-0.15 Hz (extremely slow)
- Depth: 30-40%
- Feedback: +10 to +20%
- Level: 30-40%

**Purpose:** Gentle sweeping texture

**3. Reverb** (Atmospheric space)
- Size: 60-80%
- Damp: 40-60%
- Mix: 35-50%
- Level: 80%

**Purpose:** Cavernous pad space

**4. Cabinet 2** (Vintage)
- Mix: 75%

**Purpose:** Warmth without brightness

**5. Master 8-Band EQ**
- 60 Hz: +2 dB (pad weight)
- 170 Hz: +1 dB
- 310 Hz: -1 dB
- 600 Hz: 0 dB
- 1 kHz: 0 dB
- 3 kHz: +1 dB
- 6 kHz: +2 dB
- 12 kHz: +3 dB (air for atmosphere)

**Result:** Lush, wide, atmospheric pads with vintage character.

## Method 5: Bass Synth Enhancement

**Goal:** Fat, present bass synths that work on all systems

See detailed workflow in **Bass Saturation Chain.md**

Quick summary:
- Compressor for sustain
- Distortion for harmonics (audible on small speakers)
- Cabinet 1 or 3 for character
- EQ for low-end control

## Genre-Specific Applications

### Synthwave/Retrowave
- Method 2 (Width) + slight saturation
- Cabinet 2 (Vintage)
- Emphasize chorus for 80s width
- Light reverb for space

### Trap/Modern Hip-Hop
- Method 3 (Aggression) for leads
- Method 1 (Warmth) for pads
- Heavy distortion on 808-style bass
- Bright cabinets (Cabinet 1)

### Techno/Industrial
- Method 1 (Warmth) but with more drive
- Method 4 (Pads) with darker settings
- Emphasize distortion and compression
- Limited, aggressive character

### Pop/EDM
- Method 2 (Width) for supersaws
- Method 3 (Aggression) for leads
- Cabinet 4 (balanced) for transparency
- Heavy use of chorus for width

## Advanced Techniques

### Multi-Timbral Processing
For layered synths (oscillator stacks):
- **Sub oscillator:** Clean, minimal processing
- **Mid oscillator:** Method 1 (Warmth)
- **High oscillator:** Method 3 (Aggression)
- **Noise layer:** Heavy distortion for texture

### Key Tracking Considerations
- **Low synth notes:** More bass cabinet, less distortion
- **Mid synth notes:** Balanced processing
- **High synth notes:** Bright cabinet, more distortion safe
- **Wide chords:** Method 2 (Width effects)

### Automation for Movement
- **Filter sweep sections:** Automate EQ frequencies
- **Build-ups:** Increase chorus depth gradually
- **Breakdowns:** Add reverb for space
- **Drops:** Remove effects for impact

## Parallel Processing

For complex synths, use multiple Hardcore instances:

**Synth Source ──┬──→ Dry (40%)**
**               ├──→ Send A: Method 2 (Width) - 30%**
**               ├──→ Send B: Method 3 (Aggression) - 20%**
**               └──→ Send C: Reverb only - 10%**

## CPU Optimization

**Complex chains (4-5 effects active):**
- Freeze synth tracks once processing is finalized
- Render to audio (Alt + R)
- Keep original muted for edits

**Alternative:** Use fewer effects but with higher intensity

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| Too muddy | Low-end buildup | High-pass in Stompbox EQ, cut 310Hz |
| Too thin | No low-end | Boost 60Hz, use Cabinet 2 or 1 |
| Harsh/fizzy | High distortion + bright tone | Reduce drive, make tone negative, cut 6-12kHz |
| Not wide enough | Chorus too subtle | Increase chorus depth to 60%+, try flanger |
| Phase issues | Stereo effects on mono source | Check source stereo width first |
| CPU overload | Too many effects | Freeze track or reduce active effects |

## Quick Start Presets

**Analog Warmth:**
`\`\`
Compressor: ON, Threshold -20dB, Ratio 2.5:1, Attack 20ms, Release 400ms
Distortion: ON, Drive 20%, Tone 0, Level 95%
Cabinet: 2 (Vintage)
Master EQ: Subtle smile curve, boost 12kHz slightly
`\`\`

**Wide Pad:**
`\`\`
Chorus: ON, Rate 0.25Hz, Depth 55%, Level 65%
Phaser: ON, Rate 0.2Hz, Depth 40%, Stages 6, Level 45%
Reverb: ON, Size 70%, Damp 50%, Mix 40%, Level 80%
Cabinet: 2 (Vintage)
Master EQ: Scoop mids slightly, boost highs
`\`\`

**Aggressive Lead:**
`\`\`
Compressor: ON, Threshold -14dB, Ratio 5:1, Attack 8ms, Release 200ms
Distortion: ON, Drive 55%, Tone +15, Level 88%
EQ Stompbox: ON, Mid 500Hz -3dB, High 5kHz +3dB
Cabinet: 1 (Bright)
Master EQ: Scoop 310/600Hz, boost 3/6/12kHz
`\`\`

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*

```

---

## FILE: 03-Workflows\by-goal\vocal-lo-fi-chain.md

```markdown
# Vocal Lo-Fi Chain

Complete workflow for creating vintage, dusty, degraded vocal effects using Hardcore. [SRC: IL-MAN]

## Overview

The Vocal Lo-Fi Chain transforms clean, modern vocal recordings into character-rich, vintage-sounding vocals perfect for lo-fi hip-hop, alternative R&B, intros/outros, and artistic effects. This workflow emphasizes warmth, subtle pitch drift, and controlled degradation.

## Core Philosophy

Lo-fi vocals aren't about "bad quality"—they're about intentional character. The goal is to create a sound that feels nostalgic, intimate, and human rather than sterile and clinical.

## Method: Insert Processing

**Best for:** Lead vocals, doubles, ad-libs, background vocals

### Recommended Chain Order
`\`\`
Position 1: Modulator (Pitch drift)
Position 2: Distortion (Warmth & saturation)
Position 3: EQ Stompbox (Frequency limiting)
Position 4: Cabinet (Vintage character)
Position 5: Delay (Space & depth)
Position 6: Reverb (Atmosphere)
`\`\`

## Detailed Settings

### 1. Modulator - Vibrato Mode
**Purpose:** Create subtle pitch instability like tape wow/flutter or worn vinyl

**Settings:**
- Mode: Vibrato
- Rate: 0.3-0.6 Hz (slow, subtle drift)
- Depth: 20-40% (gentle pitch variation)
- Level: 50-70% (blend with dry)

**Tips:**
- Slower rate = more vintage tape feel
- Too fast sounds like special effect, not character
- Lower depth maintains intelligibility

### 2. Distortion - Light Saturation
**Purpose:** Add analog warmth and gentle saturation

**Settings:**
- Drive: 20-35% (subtle, not aggressive)
- Tone: -5 to +5 (neutral to slightly warm)
- Level: 85-95% (maintain level, slight compensation)

**Tips:**
- Low drive = warmth without obvious distortion
- Negative tone = darker, vintage feel
- This isn't "distorted vocals"—it's "saturated warmth"

### 3. EQ Stompbox - Frequency Limiting
**Purpose:** Simulate limited frequency response of vintage equipment

**Settings:**
- Low Frequency: 120-150 Hz
- Low Gain: -6 to -12 dB (remove sub rumble)
- Mid Frequency: 1000 Hz (neutral or slight boost)
- Mid Gain: 0 to +2 dB
- High Frequency: 6-8 kHz
- High Gain: -6 to -9 dB (reduce sibilance/air)

**Tips:**
- High-pass removes unwanted low-end
- High-shelf reduction simulates tape/vinyl rolloff
- Mid boost maintains vocal presence

### 4. Cabinet - Vintage/Classic
**Purpose:** Final vintage character and frequency shaping

**Settings:**
- Cabinet: 2 (Vintage/Classic)
- Mix: 75-100%

**Why Cabinet 2:**
- Natural high-end rolloff above 6kHz
- Warm 200-400Hz body
- Soft, rounded character
- Perfect for lo-fi aesthetic

### 5. Delay - Slapback Echo
**Purpose:** Add 1950s-60s style slapback for vintage depth

**Settings:**
- Time: 80-120 ms
- Feedback: 10-20% (minimal repeats)
- Mix: 20-30%
- Level: 80-90%

**Tips:**
- 100ms is classic rockabilly slapback
- Lower feedback keeps it clean, not spacey
- Subtle mix adds depth without wash

### 6. Reverb - Small Room
**Purpose:** Intimate space, not cathedral

**Settings:**
- Size: 20-40% (small room)
- Damp: 60-75% (darker, vintage room)
- Mix: 15-25%
- Level: 80%

**Tips:**
- Small size = intimate, not distant
- Higher damp = darker reverb (less digital sheen)
- Keep mix low—lo-fi is about closeness, not space

### 7. Master 8-Band EQ - Final Polish
**Purpose:** Overall lo-fi frequency shaping

**Settings:**
- 60 Hz: -3 to -6 dB (remove sub)
- 170 Hz: 0 dB (keep some warmth)
- 310 Hz: +2 to +3 dB (add vintage body/mud)
- 600 Hz: 0 to +1 dB
- 1 kHz: 0 dB
- 3 kHz: -2 to -3 dB (reduce clarity)
- 6 kHz: -3 to -4 dB (control harshness)
- 12 kHz: -5 to -8 dB (heavy air reduction)

## Variations

### Alternative: Radio/Vintage Phone
More extreme lo-fi for radio/megaphone effects:

**Changes:**
- Cabinet: 5 (Small) instead of 2
- EQ Stompbox: High-pass 200Hz, Low-pass 4kHz
- Distortion: Drive 40% for more grit
- Add Noise Gate: Threshold -20dB (create choppy effect)

### Alternative: Tape Wow & Flutter
More pronounced tape character:

**Changes:**
- Modulator: Rate 0.1-0.2Hz, Depth 50-60%
- Add Flanger: Rate 0.05Hz, Depth 30%, Feedback 10% (very slow sweep)
- Cabinet: 2 (Vintage)

### Alternative: Vinyl Crackle Feel
Simulate worn record:

**Changes:**
- Enable all three modulation effects: Chorus + Flanger + Phaser (subtle settings)
- Distortion: Drive 25%, Tone -10
- Heavy Master EQ cuts above 5kHz

## Safety Rules

### Sibilance Control
Lo-fi processing can exaggerate sibilance:
- Master EQ Band 7 (6kHz): Cut -2 to -4 dB
- High-shelf reduction in Stompbox EQ
- If still sibilant, add de-esser after Hardcore

### Intelligibility
Don't make vocals too muddy:
- Keep 1-3kHz range relatively flat (clarity range)
- Don't over-cut highs—vocals need some air
- Test with lyrics-heavy sections

### Pitch Drift Limits
Too much vibrato sounds drunk, not vintage:
- Keep vibrato rate slow (under 1Hz)
- Keep depth moderate (under 50%)
- If vocals sound seasick, reduce depth

## Parallel Processing Option

For more control, use Hardcore on a send track:

**Setup:**
- Vocal track: 100% dry
- Send track with Hardcore: 30-50% blend
- Hardcore: 100% wet settings as above

**Benefits:**
- Control lo-fi amount with send fader
- Automate send level for section changes
- Keep dry vocal as safety net

## Integration with Full Mix

### Placement in Vocal Chain
`\`\`
Vocal Source → [Hardcore Lo-Fi Chain] → Compressor (final control) → Delay/Reverb (if not in Hardcore) → Master
`\`\`

Or if using send:
`\`\`
Vocal Source ──┬──→ Dry Vocal Track
               └──→ Send (Hardcore Lo-Fi) → Blend 30%
`\`\`

### Automation Ideas
- **Verses:** Full lo-fi chain (intimate)
- **Choruses:** Reduce lo-fi (more modern, energetic)
- **Bridge:** Extreme lo-fi for contrast
- **Outro:** Return to full lo-fi (fade out vintage)

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| Too muddy | Over-cutting highs, too much 310Hz | Reduce low-mid boost, ease off high cuts |
| Can't understand lyrics | Too much distortion/EQ | Reduce distortion drive, flatten 1-3kHz EQ |
| Sounds like effect, not character | Too aggressive settings | Reduce all effect intensities by 30% |
| Pitch sounds drunk | Vibrato too fast/deep | Rate below 0.5Hz, Depth below 35% |
| Too thin | Over-filtering lows | Ease off high-pass, add some 60Hz back |

## Quick Start Preset

**Standard Lo-Fi Vocal (Copy these settings):**
`\`\`
Modulator: ON, Mode Vibrato, Rate 0.4Hz, Depth 30%, Level 60%
Distortion: ON, Drive 30%, Tone 0, Level 90%
EQ Stompbox: ON, Low 150Hz -9dB, Mid 1kHz +1dB, High 7kHz -6dB
Delay: ON, Time 100ms, Feedback 15%, Mix 25%
Reverb: ON, Size 30%, Damp 70%, Mix 20%
Cabinet: 2 (Vintage)
Master EQ: 60Hz -4, 310Hz +2, 3kHz -2, 6kHz -3, 12kHz -6
`\`\`

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*

```

---

## FILE: 04-Reference\00_Source_Log.md

```markdown
# Source Log & Official Links: Hardcore

## Official Links
*   **Manual:** [Hardcore Official Documentation](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Hardcore.htm)
*   **Tutorial:** [Using Hardcore for Sound Design](https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Hardcore_tutorials.htm)

## Source Log
1.  **[SRC: IL-MAN]:** Official Manual. Used for pedal definitions (all 11), cabinet model logic, and signal flow order.
2.  **[SRC: REPUTABLE]:** Guitarist.com (Amp Sim Basics). Used for the "Cabinet vs Fizz" logic and Noise Gate placement strategies.
3.  **[SRC: REPUTABLE]:** Sound On Sound (Multi-FX Workflows). Used for the "Reverb before Distortion" shoegaze trick and parallel processing for drums.

## Coverage Checklist
- [x] 11 Stompbox Definitions
- [x] 5 Cabinet Frequency Characteristics
- [x] Industrial Vocal Workflow
- [x] Lo-Fi Guitar Workflow
- [x] 5 Vibe Targets (Moody, Upbeat, Psychedelic, Jazzy, Vibey)
- [x] Noise Gate / Hiss Management

```

---

## FILE: 04-Reference\03_Genre_Style_Board.md

```markdown
# Genre Style Board: Hardcore (Hip-Hop/R&B)

## Vibe 1: The "Megaphone" Rap Hook
*   **Sound:** Mid-range heavy, distorted, aggressive.
*   **Key Move:** Cabinet 5 + 2kHz EQ boost + High-gain Distortion.

## Vibe 2: The "Lo-Fi" Chill Hop Guitar
*   **Sound:** Wobbly, warm, nostalgic.
*   **Key Move:** Cabinet 2 + Slow Chorus + High-cut EQ @ 5kHz.

## Vibe 3: The "90s Boom Bap" Bass
*   **Sound:** Gritty, thick, saturated.
*   **Key Move:** Cabinet 4 + Compressor + Subtle Overdrive.

## Vibe 4: The "Modern R&B" Synth Wash
*   **Sound:** Wide, phasing, ethereal.
*   **Key Move:** Phaser + Flanger + Reverb + Cabinet 1 (Clean).

## Vibe 5: The "Psychedelic" Guitar Lead
*   **Sound:** Swirling, liquid, vocal-like.
*   **Key Move:** Wah pedal (Automated) + Modulator + Delay.

```

---

