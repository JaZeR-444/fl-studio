# Dual Engine A/B Architecture

Understanding Harmor's dual additive engine system for layered, complex sound design.

## Overview

Harmor features **two completely independent additive synthesis engines** - labeled A and B. Each engine has:
- 516 partials per voice
- Independent timbre sections (Sub and Main)
- Independent filter and effects
- Independent modulation (envelopes, LFOs)
- Independent Prism/Blur/Pluck/Strum processing

The Mix parameter blends these engines, creating sounds impossible with a single engine.

[SRC: IL-MAN]

---

## Why Two Engines?

### The Single Engine Limitation

A single additive engine, no matter how powerful, has constraints:
- One timbre character at a time
- One filter shape
- One envelope behavior
- One set of harmonics

### The Dual Engine Solution

By combining two engines, you get:
- **Layered timbres**: Sub bass from A, harmonics from B
- **Evolving sounds**: A and B with different envelopes create movement
- **Contrast**: Bright B mixed with dark A for complexity
- **Stereo separation**: Pan A left, B right for width

---

## Engine Architecture Deep Dive

### Complete Independence

```
ENGINE A                    ENGINE B
├─ 516 Partials            ├─ 516 Partials
├─ Sub Timbre Section      ├─ Sub Timbre Section
├─ Main Timbre Section     ├─ Main Timbre Section
├─ Custom Filter (drawn)   ├─ Custom Filter (drawn)
├─ Prism Effect            ├─ Prism Effect
├─ Blur Effect             ├─ Blur Effect
├─ Pluck Effect            ├─ Pluck Effect
├─ Strum Effect            ├─ Strum Effect
├─ 2x Envelopes            ├─ 2x Envelopes
├─ 2x LFOs                 ├─ 2x LFOs
└─ Volume & Pan            └─ Volume & Pan
            ↓                    ↓
            └──── MIXER ────────┘
                   ↓
              Master Output
```

Each engine is essentially a complete Harmor synthesizer. The mixer blends them before the master effects.

### Per-Engine Controls

**Accessible via A/B buttons** in the interface:

| Control | A Engine | B Engine | Notes |
|---------|----------|----------|-------|
| Timbre | Sub + Main | Sub + Main | Independent harmonic content |
| Filter | Drawn curve | Drawn curve | Different frequency responses |
| Prism | Separate amount | Separate amount | Different warping |
| Blur | Separate amount | Separate amount | Different density |
| Pluck | Separate shape | Separate shape | Different decay |
| Strum | Separate detune | Separate detune | Different width |
| Envelopes | EG1, EG2 | EG1, EG2 | Different articulation |
| LFOs | LFO1, LFO2 | LFO1, LFO2 | Different modulation |
| Volume | Per-engine | Per-engine | Balance before mix |
| Pan | Per-engine | Per-engine | Stereo placement |

---

## The Mix Parameter

### How Mixing Works

The **Mix** knob (0-100%) controls the A/B blend:

```
Mix = 0%      Mix = 50%      Mix = 100%
   A ───┐         A ──┐          ┌── B
        ↓            ↓              ↓
     Output       Output        Output
   (A only)    (A+B blend)     (B only)
```

### Mix Automation for Movement

Static A/B mixes are just the beginning. **Automating Mix** creates evolving timbres:

**Example - Evolving Pad:**
1. Engine A: Dark, low harmonics, slow attack
2. Engine B: Bright, high harmonics, fast attack
3. Automate Mix from 0% → 100% over 8 bars
4. Result: Pad "blossoms" from dark to bright

**Example - Dubstep Wobble:**
1. Engine A: Clean bass fundamentals
2. Engine B: Heavy Prism distortion
3. Automate Mix at LFO rate (1/8th notes)
4. Result: Classic wobble bass without filter automation

---

## A/B Mixing Strategies

### Strategy 1: Frequency Split

Assign different frequency ranges to each engine:

**Sub + Presence Split:**
- **Engine A**: Sub Timbre only (low fundamentals)
  - Sub Level: 100%
  - Main Level: 0%
  - Filter: Low-pass at 200Hz
  
- **Engine B**: Main Timbre only (presence)
  - Sub Level: 0%
  - Main Level: 100%
  - Filter: High-pass at 1kHz
  
- **Mix**: 50%
- **Result**: Independent control over sub and presence

**Hip-Hop Application:** Perfect for 808s - control the "boom" (A) and "click" (B) separately.

### Strategy 2: Transient + Body

Separate attack from sustain:

**Sharp Attack + Sustained Body:**
- **Engine A**: Pluck with fast decay
  - Pluck: High amount
  - Envelope: Fast attack, no sustain
  - Timbre: High harmonics
  
- **Engine B**: Sustained, no Pluck
  - Pluck: 0%
  - Envelope: Slow attack, long sustain
  - Timbre: Low harmonics
  
- **Mix**: Start at 100% A, automate to 50/50
- **Result**: Sharp attack that morphs into rich sustain

### Strategy 3: Dry + Wet (Effects)

One clean, one processed:

**Clean + Prism:**
- **Engine A**: Clean tone
  - All effects: Off
  - Pure additive timbre
  
- **Engine B**: Heavily processed
  - Prism: 80% (maximum warping)
  - Blur: 50% (density)
  - Wild timbre
  
- **Mix**: 70% A / 30% B
- **Result**: Clean foundation with "edge" from processed layer

### Strategy 4: Stereo Separation

Pan engines for width:

**Wide Bass Technique:**
- **Engine A**: Pan hard left
  - Sub frequencies only (mono-compatible)
  
- **Engine B**: Pan hard right
  - High harmonics only
  
- **Mix**: 50%
- **Result**: Wide stereo bass that collapses to mono cleanly

**Warning:** Always check mono compatibility when panning bass elements.

### Strategy 5: Rhythmic Layering

Different rhythmic patterns:

**Pulse + Sustain:**
- **Engine A**: Gated rhythm
  - LFO to volume: Square wave, 1/4 note
  - Choppy, rhythmic
  
- **Engine B**: Sustained pad
  - No gating
  - Smooth underlay
  
- **Mix**: 50%
- **Result**: Rhythmic texture over sustained bed

---

## Modulation Per Engine

### Independent Envelopes

Each engine has its own envelope generators:

**Different Attack Times:**
- **A EG1**: Attack 0ms (instant)
- **B EG1**: Attack 500ms (fade in)
- Mix at 50%: Sound "enters" as B fades in

**Different Decay Character:**
- **A**: Pluck with fast decay (percussive)
- **B**: Long release (sustained)
- Mix 50%: Percussive attack, long sustain

### Independent LFOs

LFOs can be different on each engine:

**Out-of-Phase Modulation:**
- **A LFO1**: Sine wave, rate 1Hz, phase 0°
- **B LFO1**: Sine wave, rate 1Hz, phase 180°
- Destination: Prism on both
- Result: One engine "brightens" as other "darkens"

**Different Rates:**
- **A LFO1**: 1/4 note (fast)
- **B LFO1**: 1/1 note (slow)
- Destination: Filter
- Result: Complex, evolving filter movement

---

## Resynthesis with Dual Engines

### Different Samples Per Engine

A and B can resynthesize **different audio files**:

**Layered Vocal:**
- **Engine A**: Original vocal (resynthesized)
- **Engine B**: Vocal formant-shifted up one octave
- Mix: 60% A / 40% B
- Result: Thickened vocal with natural harmonics

**Drum + Bass:**
- **Engine A**: Kick drum sample
- **Engine B**: Bass guitar sample
- Mix automated: B plays sustained, A for beats
- Result: Hybrid kick-bass instrument

### Same Sample, Different Settings

Resynthesize one sample twice with different ADV settings:

**Transients + Tones:**
- **Engine A**: Small window (preserves transients)
  - Use for attack portion
  
- **Engine B**: Large window (captures harmonics)
  - Use for body/sustain
  
- Mix: Blend for best of both

**Pitch Layers:**
- **Engine A**: Speed 100%, Formant 0 (original)
- **Engine B**: Speed 100%, Formant +12 (brightened)
- Mix: 50/50
- Result: Doubled track with different character

---

## A/B Performance Considerations

### CPU Impact

Running both engines doubles CPU usage compared to single engine:

| Configuration | Relative CPU | Use Case |
|--------------|--------------|----------|
| A only | 50% | Simple sounds |
| B only | 50% | Simple sounds |
| A + B (50/50) | 100% | Layered sounds |
| A + B (complex) | 120%+ | Heavy processing |

### Optimization Strategies

**When to Use Single Engine:**
- Simple bass sounds
- Single-timbre leads
- When CPU is constrained

**When to Use Dual Engine:**
- Complex layered sounds
- Sounds needing evolution
- Stereo effects
- When sound design is the priority

**Hybrid Approach:**
- Use A for most of the sound
- Add B only at specific moments (automate Mix)
- Reduces average CPU load

---

## Common A/B Presets and Patterns

### 808 Bass (Sub + Click)

**Engine A (Sub):**
- Sub Timbre: High, Main: Low
- Filter: Low-pass at 100Hz
- Pluck: 0%
- Volume: 100%

**Engine B (Click):**
- Sub Timbre: 0%, Main: High
- Filter: High-pass at 3kHz
- Pluck: High (fast decay)
- Prism: 20% (edge)
- Volume: 30%

**Mix**: 70% A / 30% B

### Vocal Pad (Formant Split)

**Engine A (Body):**
- Resynthesized vocal
- Formant: 0 (original)
- Filter: Low-pass at 2kHz
- Blur: 30%

**Engine B (Air):**
- Same vocal, resynthesized again
- Formant: +12 (shifted)
- Filter: High-pass at 2kHz
- Blur: 20%

**Mix**: 50/50, slight stereo pan

### Dubstep Growl (Clean + Distorted)

**Engine A (Foundation):**
- Simple saw-like timbre
- Clean filter
- Sub focus

**Engine B (Growl):**
- Complex timbre
- Prism: 60% (heavy warping)
- Strum: 40% (detuned)
- Blur: 30%

**Mix**: Automate 100% A → 50/50 → 100% B for "growling" effect

---

## Practical Workflow Tips

### Starting with A/B

1. **Begin with Engine A only** (Mix at 0%)
2. **Design your base sound** in A
3. **Copy to Engine B** (use the Copy A→B function if available)
4. **Modify B** for contrast
5. **Adjust Mix** for blend

### Quick A/B Experiments

Try these one-click experiments:

**Stereo Width:**
- Keep A centered
- Pan B hard left or right
- Mix at 50%
- Instant width

**Octave Layer:**
- Set A to normal pitch
- Set B +12 semitones
- Mix at 30-40%
- Instant "sub-octave" or "super-octave"

**Attack Accent:**
- A: Long attack, sustained
- B: Short attack, no sustain
- Mix: Start with B, move to A
- Emphasizes note starts

---

## Troubleshooting A/B Issues

### Issue: Sound Gets Quieter When Mixing

**Cause:** Phase cancellation between similar A and B content
**Solution:** 
- Shift phase of one engine (Phase knob)
- Change harmonic content of one engine
- Use different filter shapes

### Issue: CPU Spikes

**Cause:** Both engines at full complexity
**Solution:**
- Reduce unison voices on one engine
- Disable unused effects on one engine
- Use single engine when possible

### Issue: Muddy Sound

**Cause:** Both engines filling same frequency range
**Solution:**
- Use filter to separate frequency ranges
- Adjust Sub/Main balance differently per engine
- Pan engines apart

---

## Summary: Dual Engine Power

1. **Two complete additive engines** = Massive sound design potential
2. **Independent processing** = Each engine can be completely different
3. **Mix parameter** = Seamless blending and automation
4. **Frequency splitting** = Precise control over tonal balance
5. **Stereo separation** = Width without phase issues
6. **Resynthesis layering** = Combine different samples or settings

**The A/B Philosophy:** Think of Harmor not as one 516-partial engine, but as **two 516-partial engines that can work together or separately**. This doubles your additive power and opens sound design possibilities no other synth can match.

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Harmor.htm
