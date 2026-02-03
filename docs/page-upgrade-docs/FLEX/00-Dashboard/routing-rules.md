# FLEX Signal Routing Rules

Complete technical guide to FLEX's internal signal flow architecture, routing rules, and processing chain.

---

## Table of Contents

1. [Signal Flow Overview](#signal-flow-overview)
2. [Synthesis Engine Stage](#synthesis-engine-stage)
3. [Macro Control Layer](#macro-control-layer)
4. [Pitch & Filter Processing](#pitch--filter-processing)
5. [Master Effects Chain](#master-effects-chain)
6. [Output Stage](#output-stage)
7. [Parallel Processing Paths](#parallel-processing-paths)
8. [Routing Best Practices](#routing-best-practices)

---

## Signal Flow Overview

### Complete Signal Chain

```
┌─────────────────────────────────────────────────┐
│ SYNTHESIS ENGINE                                │
│ (Subtractive/Wavetable/Multisample/FM/AM)      │
└──────────────────┬──────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────┐
│ MACRO CONTROL LAYER                             │
│ (8 Meta-Controllers → Multiple Parameters)     │
└──────────────────┬──────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────┐
│ PITCH ADJUSTMENT                                │
│ (±2 Octaves, Semitones + Cents)                │
└──────────────────┬──────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────┐
│ FILTER PROCESSING                               │
│ (Cutoff, Resonance, Envelope Modulation)       │
└──────────────────┬──────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────┐
│ MASTER FILTER                                   │
│ (17 Types, Global Tone Shaping)                │
└──────────────────┬──────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────┐
│ DELAY                                           │
│ (Time, Feedback, 3 Modes)                      │
└──────────────────┬──────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────┐
│ REVERB                                          │
│ (Decay, Size, Color, Modulation)               │
└──────────────────┬──────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────┐
│ LIMITER/COMPRESSOR                              │
│ (Maximus Engine, Pre-Gain, Types)              │
└──────────────────┬──────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────┐
│ OUTPUT VOLUME                                   │
│ (Master Fader, Final Stage)                    │
└─────────────────────────────────────────────────┘
```

**Key Principle:** Each stage processes the output of the previous stage. The order is fixed and cannot be changed.

---

## Synthesis Engine Stage

### Role in Signal Flow
- **Position:** First stage - sound generation
- **Function:** Creates raw audio based on preset type
- **Output:** Unprocessed synthesis result

### Engine Types (Preset-Dependent)

**Subtractive Synthesis:**
- Traditional analog-style oscillators
- Filter-based sound shaping
- Raw waveforms (saw, square, triangle, sine)
- Routed to → Filter Processing stage

**Wavetable Synthesis:**
- Complex digital waveforms
- Morphable timbres
- Position scanning through wavetables
- Routed to → Macro Control layer (often controls position)

**Multisample Playback:**
- Studio-recorded instrument samples
- Velocity layers and zones
- Real acoustic instrument recordings
- Routed to → Pitch/Filter stages (minimal processing)

**FM (Frequency Modulation):**
- Operator-based modulation
- Complex harmonic content
- Metallic, bell-like tones
- Routed to → Filter Processing (often bypassed)

**AM (Amplitude Modulation):**
- Carrier × modulator signal
- Tremolo and ring modulation effects
- Rhythmic amplitude variations
- Routed to → Envelope shaping

**Hybrid Engine:**
- Multiple engines combined
- Layered synthesis types
- Cross-modulation capabilities
- Parallel routing to multiple processing stages

### Important Rules

1. **Engine Type is Preset-Defined**
   - Cannot manually select synthesis type
   - Determined by preset designer
   - Optimized for specific sound goals

2. **Parameter Access is Abstracted**
   - Raw synthesis parameters hidden
   - Accessible only through Macros
   - Designer-curated parameter ranges

3. **Sample Management**
   - Cannot import custom samples
   - Multisample playback is read-only
   - Content locked in `.flexpack` files

---

## Macro Control Layer

### Role in Signal Flow
- **Position:** Second stage - parameter modulation
- **Function:** Controls synthesis parameters indirectly
- **Output:** Modified synthesis behavior

### Routing Architecture

```
Macro 1 ───┬──→ Filter Cutoff
           ├──→ Waveform Position
           ├──→ Sample Layer Mix
           └──→ Spectral Tilt

Macro 2 ───┬──→ FM Depth
           ├──→ Timbre Control
           ├──→ Harmonic Content
           └──→ Character Shape

[... Macros 3-8 similarly mapped ...]
```

**Key Characteristic:** One macro controls multiple parameters simultaneously.

### Routing Rules

1. **One-to-Many Mapping**
   - Single macro slider → 10+ underlying parameters
   - All parameters move in synchronized curves
   - Designer-programmed relationships

2. **Preset-Specific Routing**
   - Macro assignments change per preset
   - Same macro # does different things
   - Context-aware control

3. **Range Limiting**
   - Min/max values prevent extreme settings
   - Curated sweet spots
   - Impossible to create "bad" sounds

4. **Priority Hierarchy**
   - Macros override default parameter values
   - Direct parameter access limited
   - Macros are primary control interface

### Modulation Flow

```
MIDI Note → Velocity Mapping → Macro Control →
Parameter Modulation → Synthesis Engine Update
```

---

## Pitch & Filter Processing

### Pitch Adjustment Stage

**Position:** Post-synthesis, pre-filter
**Function:** Global pitch shifting

**Routing:**
```
Synthesis Output → Pitch Shifter (±2 octaves) →
Filter Processing
```

**Parameters:**
- Semitone adjustment (±24 semitones)
- Cent fine-tuning (±100 cents per semitone)
- Applied to all voices uniformly

**Rules:**
- Affects all oscillators/samples equally
- Does NOT affect filter cutoff (non-keytracked)
- Applied before filter processing

### Filter Processing Stage

**Position:** Post-pitch adjustment
**Function:** Frequency-selective attenuation

**Routing:**
```
Pitched Signal → Filter Circuit →
AHDSR Envelope Modulation → Filtered Output
```

**Components:**

1. **Static Filter Path:**
   ```
   Input → Cutoff Frequency → Resonance → Output
   ```

2. **Envelope-Modulated Path:**
   ```
   Input → [Cutoff + (Env Amt × AHDSR)] → Resonance → Output
   ```

**Filter Types (Preset-Dependent):**
- Low Pass (most common)
- High Pass
- Band Pass
- Custom/Designer filters

**Envelope Routing:**
```
MIDI Note On → Trigger AHDSR →
Generate Envelope → Modulate Cutoff Frequency
```

**Envelope Amount Rules:**
- **Positive Env Amt:** Cutoff increases with envelope
- **Negative Env Amt:** Cutoff decreases with envelope
- **Zero Env Amt:** Static cutoff (no modulation)

---

## Master Effects Chain

### Overview
All master effects process the entire preset output. Applied after synthesis, macros, pitch, and preset filter.

### Master Filter

**Position:** First in master chain
**Function:** Global tone shaping before time-based effects

**Routing:**
```
Preset Output → Master Filter Type Selection →
Cutoff/Resonance Processing → Delay Input
```

**Types & Routing:**

1. **Low Pass Filters:**
   ```
   Full Spectrum Input → Attenuation >Cutoff Freq → Output
   ```
   - 6dB/oct: Gentle roll-off
   - 12dB/oct: Standard slope
   - 24dB/oct: Aggressive cut

2. **High Pass Filters:**
   ```
   Full Spectrum Input → Attenuation <Cutoff Freq → Output
   ```
   - 6dB/oct: Subtle bass reduction
   - 12dB/oct: Standard high-pass
   - 24dB/oct: Aggressive bass cut

3. **Specialty Filters:**
   - Phaser: Notch sweeping circuit
   - Vowel: Formant filter (vocal character)
   - Comb: Delay-based filtering
   - All-Pass: Phase shifting only

**Critical Rule:** Master Filter processes entire signal before effects. Good for removing unwanted frequencies before reverb/delay.

### Delay

**Position:** Second in master chain
**Function:** Rhythmic echoes and spatial depth

**Routing Types:**

1. **Fake Stereo Mode:**
   ```
   Mono Input → Delay Line → Stereo Widener → Output L/R
   ```

2. **True Stereo Mode:**
   ```
   Input L → Delay Line L → Output L
   Input R → Delay Line R → Output R
   (Independent processing)
   ```

3. **Ping Pong Mode:**
   ```
   Input → Delay → L Output
           Feedback ↓
           Delay → R Output
           Feedback ↓
           Delay → L Output
           (Continues...)
   ```

**Feedback Loop:**
```
Delay Output → Feedback % → Color Filter (LP) →
Modulation (Pitch Wobble) → Delay Input (Mix)
```

**Parameters Flow:**
- **Time:** Sets delay line length (sync or free)
- **Feedback:** Percentage returned to input
- **Color:** Low-pass filter on feedback path
- **Modulation:** Pitch wobble on delayed signal
- **Mix:** Dry/wet blend (parallel routing)

### Reverb

**Position:** Third in master chain (receives delay output)
**Function:** Simulate acoustic spaces

**Routing:**
```
Delay Output → Early Reflections → Late Reflections →
Diffusion Network → Color Filter → Modulation → Mix Output
```

**Internal Reverb Architecture:**
```
Input → Pre-Delay →
        ↓
     [Early Reflections]
        ↓
     [Dense Reverb Tank]
        ├─→ Decay (Feedback Amount)
        ├─→ Size (Room Dimensions)
        ├─→ Color (Damping Filter)
        └─→ Modulation (Chorus Effect)
        ↓
     Output Mix (Dry/Wet)
```

**Parameter Routing:**
- **Decay:** Controls feedback amount in reverb tank
- **Size:** Scales delay line lengths (room size)
- **Color:** Low-pass damping filter
- **Modulation:** Chorus/pitch wobble to reduce metallic ring
- **Speed:** Modulation rate
- **Mix:** Parallel dry/wet blend

**Critical Rule:** Reverb receives signal AFTER delay. This means:
- Delay echoes will be reverberated
- Reverb does NOT feed back to delay
- Order is fixed (cannot swap)

### Limiter/Compressor

**Position:** Final stage before output
**Function:** Dynamics control and saturation

**Routing:**
```
Reverb Output → Pre-Gain → Maximus Engine →
Limiter/Saturation → Parallel Mix → Master Volume
```

**Maximus Engine Modes:**

1. **Limiter (Clean):**
   ```
   Input → Transparent Ceiling → Output
   (Minimal coloration)
   ```

2. **Warming (Analog):**
   ```
   Input → Pre-Gain → Soft Knee Compression →
   Harmonic Saturation → Output
   ```

3. **Heating (Aggressive):**
   ```
   Input → High Pre-Gain → Hard Knee Limiting →
   Obvious Saturation → Output
   ```

4. **Distortion (Maximum):**
   ```
   Input → Maximum Pre-Gain → Hard Clipping →
   Heavy Saturation → Output
   ```

**Parallel Processing:**
```
Clean Signal ──┬──→ Mix Output
               │
Processed ─────┘
(Blend ratio via Type selection)
```

---

## Output Stage

### Final Routing

```
Limiter Output → Master Volume Fader →
Plugin Output (L/R) → FL Studio Mixer
```

**Lock Feature:**
- Master Volume can be locked
- Locked value persists across preset changes
- Useful for consistent browsing volume

**Output Metering:**
- Peak level monitoring
- Clip detection
- Visual feedback in display

---

## Parallel Processing Paths

### Dry/Wet Mixing Architecture

All effects use parallel routing for mix control:

```
Input Signal ──┬────────────────┬──→ Output
               │                │
               └→ Effect Chain ─┘
                  (Mix % controlled)
```

**Benefits:**
- Preserves transients
- Maintains clarity
- Allows subtle effect amounts
- Professional mixing standard

### Multi-Instance Layering

When using multiple FLEX instances:

```
FLEX Instance 1 (Bass Layer)    ─┬──→ Mixer Track
FLEX Instance 2 (Mid Layer)     ─┤
FLEX Instance 3 (Harmonic Layer)─┘
```

**Routing Strategies:**

1. **Frequency-Split Layering:**
   ```
   FLEX 1: Sub bass (no HP filter)
   FLEX 2: Mids (HP @ 180Hz, LP @ 4kHz)
   FLEX 3: Highs (HP @ 4kHz)
   ```

2. **Stereo-Split Layering:**
   ```
   FLEX 1: Mono center (bass/lead)
   FLEX 2: Stereo left (+7 cents detune)
   FLEX 3: Stereo right (-7 cents detune)
   ```

3. **Timbre Layering:**
   ```
   FLEX 1: Attack layer (fast envelope)
   FLEX 2: Body layer (sustained pad)
   FLEX 3: Release layer (tail/ambience)
   ```

---

## Routing Best Practices

### Critical Rules

1. **Bass Routing:**
   - ✅ NEVER apply Master Filter (High Pass) to bass presets
   - ✅ NEVER apply Reverb to bass/808s
   - ✅ Keep bass signals mono (check vectorscope)
   - ✅ Process sub and mids separately if layering

2. **Effect Order Matters:**
   - ✅ Master Filter BEFORE delay/reverb (removes unwanted freqs first)
   - ✅ Delay BEFORE reverb (echoes get reverb tail)
   - ✅ Limiter LAST (final dynamics control)
   - ❌ Cannot change order (fixed architecture)

3. **Stereo Imaging:**
   - ✅ Bass/kick/snare: Mono (vertical line on vectorscope)
   - ✅ Pads/FX: Wide stereo acceptable
   - ✅ Leads: Mostly mono, subtle width
   - ⚠️ Check mono compatibility (phase issues)

4. **CPU Optimization:**
   - ✅ Disable visualizers when not needed
   - ✅ Lower polyphony if possible
   - ✅ Freeze/render complex instances to audio
   - ✅ Reduce Unison/Voices macros

### Mixing Integration

**Pre-Mixer Strategy:**
Process within FLEX when possible:
- Global tone shaping (Master Filter)
- Basic effects (Delay/Reverb)
- Dynamics (Limiter)

**Mixer-Level Processing:**
External plugins for:
- Surgical EQ (Parametric EQ 2)
- Multiband compression (Maximus)
- Sidechain compression
- Advanced effects

### Automation Routing

**Parameter Priority:**
```
Automation Clips → Override Manual Controls →
Apply to Parameter → Update Synthesis/Effects
```

**Best Automation Targets:**
1. Macros 1-2 (tonal variation)
2. Filter Cutoff (movement)
3. Reverb Mix (spatial dynamics)
4. Master Volume (dynamics)

---

## Advanced Routing Concepts

### Voice Allocation

```
MIDI Note In → Voice Manager →
Available Voice Slot → Synthesis Engine
```

**Rules:**
- Polyphony limit (preset-dependent)
- Voice stealing when limit reached
- Oldest note stolen first (FIFO)

### Velocity Routing

```
MIDI Velocity → Preset Velocity Map →
Multiple Parameters (Volume, Filter, Macros)
```

**Common Velocity Targets:**
- Volume envelope peak
- Filter cutoff (velocity → brightness)
- Macro modulation depth

### Sample-Based Preset Routing

```
MIDI Note → Sample Zone Selection →
Pitch Shift (if outside recorded range) →
Velocity Layer Selection → Playback
```

**Limitations:**
- Sustain/Release may have limited effect on short samples
- Filter envelope controls overall cutoff (not sample length)

---

## Troubleshooting Routing Issues

| Problem | Diagnosis | Solution |
|---------|-----------|----------|
| **No sound output** | Routing break or muted stage | Check Master Volume, verify preset loaded |
| **Filter not working** | Cutoff at extremes or Res=0 | Adjust Cutoff to 50%, add Resonance |
| **No reverb effect** | Mix at 0% or Size too small | Increase Reverb Mix, check Size parameter |
| **Delay not syncing** | Free time mode active | Set Time to sync (1/4, 1/8, etc.) |
| **Harsh resonance** | Resonance or Env Amt too high | Lower Resonance <50%, reduce Env Amt |
| **Thin bass** | High Pass filter active | Disable Master Filter or use Low Pass |
| **Phase issues** | Excessive stereo width | Lower Width/Unison macro, check vectorscope |

---

## Related Documentation

- [`synthesis-engine.md`](./synthesis-engine.md) - Deep dive on synthesis types
- [`top-controls.md`](../../01-Learning/Quick-Reference/top-controls.md) - Interface controls
- [`master-effects-modes.md`](../../01-Learning/Concepts/master-effects-modes.md) - Effects chain details
- [`flex-params.json`](../../02-Data/parameters/flex-params.json) - Complete parameter specs
- [`sound-design-macros.md`](../../03-Workflows/by-goal/sound-design-macros.md) - Macro routing workflow

---

**Version:** 1.0
**Created:** 2026-02-01
**Based on:** Official Image-Line FLEX Manual & Signal Flow Analysis
