# Unique Processors: Prism, Blur, Pluck, Strum

Deep dive into Harmor's exclusive effects that create sounds impossible in other synthesis methods.

## Overview

Harmor features four unique processors that manipulate its 516 partials in ways no other synthesizer can match:

- **Prism**: Harmonic warping and spectral shifting
- **Blur**: Partial density and smearing
- **Pluck**: Frequency-dependent decay shaping
- **Strum**: Micro-detuning between partials

These processors work on the partial level, creating effects impossible with traditional filter or distortion effects.

[SRC: IL-MAN]

---

## Prism: Harmonic Warping

### What Prism Does

**Prism** multiplies partial frequencies by a variable amount, creating inharmonic relationships:

```
Original Partials:     100Hz, 200Hz, 300Hz, 400Hz...
After Prism (1.5x):    150Hz, 300Hz, 450Hz, 600Hz...
Result: Inharmonic, metallic, bell-like
```

### The Math Behind Prism

Prism creates **inharmonic frequencies** by:
- Taking each partial's frequency
- Multiplying by the Prism factor (0.5x - 2.0x typical)
- Preserving amplitude envelope

**Harmonic vs Inharmonic:**
- **Harmonic**: Frequencies are integer multiples (100, 200, 300...)
- **Inharmonic**: No simple ratio (100, 273, 412, 605...)
- **Prism converts**: Harmonic → Inharmonic

### Prism Controls

| Control | Range | Effect |
|---------|-------|--------|
| **Amount** | 0-100% | How much warping is applied |
| **Depth** | Varies | Frequency range affected |
| **Mix** | 0-100% | Blend of dry and processed |

### Prism Applications

**1. Growl Bass (Dubstep/Hip-Hop):**
```
Settings:
- Amount: 60-80%
- Apply to: Mid-range partials (200Hz-2kHz)
- Combine with: LFO modulation

Technique:
1. Start with saw-like timbre
2. Apply heavy Prism
3. Modulate Prism with LFO (1/8th note rate)
4. Result: Classic "growl" effect
```

**2. Metallic Leads:**
```
Settings:
- Amount: 40-60%
- Wide frequency range
- Subtle envelope modulation

Result: Bell-like, metallic character
Perfect for: Sci-fi leads, unique textures
```

**3. Vocal Robotic Effect:**
```
Settings (on resynthesized vocal):
- Amount: 30-50%
- Focus on upper midrange
- Static (no modulation)

Result: Artificial, synthesized vocal character
```

**4. Cinematic Textures:**
```
Settings:
- Amount: 20-40%
- Full frequency range
- Slow LFO modulation (0.1-0.5Hz)

Result: Ever-evolving, mysterious pads
```

### Prism Per Engine

With A/B dual engines, **each engine has independent Prism**:

**Dual Prism Technique:**
- Engine A: Prism 0% (clean)
- Engine B: Prism 60% (warped)
- Automate Mix between them
- Result: Clean tone that "morphs" into inharmonic

---

## Blur: Partial Smearing

### What Blur Does

**Blur** spreads the energy of each partial to adjacent partials, creating density:

```
Before Blur:
Partial 10: ████ 100%
Partial 11:      0%
Partial 12:      0%

After Blur (50%):
Partial 10: ██ 50%
Partial 11: ████ 100% (original position)
Partial 12: ██ 50%
```

### The Effect on Sound

| Blur Amount | Character | Best For |
|-------------|-----------|----------|
| **0%** | Clean, precise | Articulate leads, bass |
| **20%** | Slight thickening | Natural sounds |
| **50%** | Dense, cloudy | Pads, textures |
| **80%+** | Very diffuse | Ambient, atmospheric |

### Blur Applications

**1. Vocal Thickening:**
```
Resynthesize vocal sample
Blur: 30-40%
Result: "Double-tracked" effect
No need to record twice
```

**2. Pad Density:**
```
Start: Simple timbre (few partials active)
Blur: 60-80%
Result: Rich, complex pad
Even from simple source
```

**3. Smoothing Transitions:**
```
On resynthesized samples:
Blur: 20-30%
Smooths: Abrupt changes between analysis frames
Useful for: Time-stretched vocals, glitch removal
```

**4. Creating Unison:**
```
Unison voices: 1 (saves CPU)
Blur: 40-60%
Strum: 30% (complementary)
Result: Wide, dense sound
Lower CPU than 9-voice unison
```

### Blur vs Traditional Chorus

| Aspect | Traditional Chorus | Harmor Blur |
|--------|-------------------|-------------|
| Method | Delay + modulation | Partial spreading |
| CPU | Moderate | Low (part of synthesis) |
| Artifacts | Can be phasey | Phase-coherent |
| Control | Rate/Depth | Amount only |
| Character | Wobbly | Dense/smooth |

---

## Pluck: Frequency-Dependent Decay

### What Pluck Does

**Pluck** applies different decay times to different frequency bands, simulating how strings and other plucked instruments naturally decay (highs dampen faster than lows):

```
Time →
      High Freq: ████░░░░░░░░░░░░ (fast decay)
      Mid Freq:  ████████░░░░░░░░ (medium decay)
      Low Freq:  ████████████████ (slow decay)
```

### The Physics of Pluck

Real instruments exhibit this behavior:
- **Guitar strings**: High harmonics die quickly, lows sustain
- **Piano**: Bright attack, mellow sustain
- **Bass**: Sub frequencies ring longer than harmonics

Pluck recreates this **naturally** in additive synthesis.

### Pluck Controls

| Control | Function | Typical Range |
|---------|----------|---------------|
| **Amount** | Overall effect strength | 0-100% |
| **Shape** | Decay curve | Exponential, Linear |
| **Tilt** | Balance low vs high decay | Bass-heavy, Balanced, Treble-heavy |

### Pluck Applications

**1. Realistic String Emulation:**
```
Settings:
- Amount: 60-80%
- Shape: Exponential
- Tilt: Bass-heavy (lows sustain longer)

Timbre: Saw-like or drawn harmonics
Result: Plausible string instrument
From pure synthesis
```

**2. 808-Style Decay:**
```
Settings:
- Amount: 40-60%
- Sub timbre: Strong fundamentals
- Main timbre: Moderate harmonics
- Pluck: Balanced tilt

Result: Classic 808 "boom to click" decay
Without samples
```

**3. Percussive Bass:**
```
Settings:
- Amount: 70-90%
- High pluck for: Fast transient
- Sub sustain for: Body

Result: Slap-bass character
Perfect for funk/R&B
```

**4. Transient Shaping:**
```
On any sound:
High Pluck amount
Focus decay on: High partials
Result: Sharper attacks
More percussive feel
```

### Combining Pluck with Envelopes

Pluck works **with** the envelope generators:

**Fast Pluck + Slow Envelope:**
- Pluck kills highs quickly
- Envelope sustains overall level
- Result: Attack-focused sound

**Subtle Pluck + Percussive Envelope:**
- Pluck shapes harmonic decay
- Envelope controls amplitude
- Result: Natural, organic character

---

## Strum: Partial Detuning

### What Strum Does

**Strum** applies micro-detuning to partials, creating a "chorus of partials" effect:

```
Without Strum:
All partials: Perfectly in tune
Sound: Clinical, precise

With Strum (30%):
Partial 1: 100Hz +0 cents
Partial 2: 200Hz +3 cents
Partial 3: 300Hz -2 cents
Partial 4: 400Hz +4 cents
...
Sound: Thick, chorus-like, natural
```

Each partial gets a **unique, fixed detune amount** based on its frequency.

### Strum vs Unison

| Feature | Unison | Strum |
|---------|--------|-------|
| Method | Multiple voices | Single voice, detuned partials |
| CPU | Higher (more voices) | Lower (part of synthesis) |
| Character | Wide, stereo | Dense, focused |
| Use | Big pads, leads | Natural thickness |

**Best Practice:** Use moderate unison (3-4 voices) + Strum (30-50%) for maximum density without CPU overload.

### Strum Applications

**1. Naturalizing Synthetics:**
```
Any synthesized sound
Strum: 20-30%
Result: Less "digital," more organic
Like: Vintage analog synths
```

**2. Vocal Realism:**
```
Resynthesized vocal
Strum: 15-25%
Blur: 20-30% (complementary)
Result: More "human" quality
Less machine-like
```

**3. Vintage Character:**
```
Retro leads/basses
Strum: 40-60%
Combine with: Subtle pitch drift (if available)
Result: Warm, vintage analog feel
```

**4. Stereo Widening (with Pan):**
```
Engine A: Strum +50%, Pan left
Engine B: Strum +50%, Pan right
Mix: 50/50
Result: Wide, natural stereo
Detuned partials spread across field
```

---

## Combining the Four Processors

### Classic Combinations

**"Natural String":**
- Pluck: 70% (decay shaping)
- Strum: 25% (slight detuning)
- Blur: 20% (smoothness)
- Prism: 0% (stay harmonic)
- Result: Convincing string instrument

**"Sci-Fi Pad":**
- Pluck: 0% (even sustain)
- Strum: 40% (ethereal detuning)
- Blur: 60% (density)
- Prism: 30% (slight inharmonic)
- Result: Futuristic, evolving texture

**"Growl Bass":**
- Pluck: 30% (tighten decay)
- Strum: 0% (keep focused)
- Blur: 20% (slight thickness)
- Prism: 60-80% (heavy warping)
- LFO on Prism: Modulation
- Result: Dubstep growl

**"Vocal Ghost":**
- Pluck: 50% (formant-like decay)
- Strum: 30% (doubling effect)
- Blur: 40% (thickening)
- Prism: 10% (subtle character)
- Result: Haunting vocal texture

### Per-Engine Strategy

Use different processor combinations on A and B:

**Clean + Processed:**
- Engine A: All processors off (clean)
- Engine B: All processors on (40-60% each)
- Mix: 70/30
- Result: Foundation + character

**Contrast:**
- Engine A: High Strum (50%), low Blur (20%)
- Engine B: Low Strum (10%), high Blur (60%)
- Mix: 50/50
- Result: Complex, layered texture

---

## Hip-Hop Specific Applications

### 808 Replacement

Use the four processors to create 808-style bass from scratch:

```
Prism: 0% (keep harmonic)
Pluck: 60% (boom→click decay)
Strum: 0% (focused, mono)
Blur: 10% (minimal)

Timbre: Sub-heavy, few main harmonics
Filter: Low-pass with slight resonance at 2kHz
Result: Classic 808 character
Fully synthesized
```

### Vocal Effects Chain

On resynthesized vocals:

```
Prism: 20% (slight robotic)
Pluck: 40% (natural decay)
Strum: 25% (doubling)
Blur: 30% (thickening)

Additional: Formant shift ±6
Result: Processed vocal effect
No external plugins needed
```

### Trap Hi-Hat Synthesis

Create metallic trap hats:

```
Timbre: Many high partials (noise-like)
Prism: 40% (metallic inharmonic)
Pluck: 80% (very fast decay)
Strum: 0% (precise)
Blur: 0% (articulate)

Envelope: Instant attack, no sustain
Result: Metallic, crisp hi-hat
Fully synthesized
```

### Ambient Drone

For interludes and atmosphere:

```
Timbre: Spread partials across spectrum
Prism: 25% (dreamy inharmonic)
Pluck: 0% (infinite sustain)
Strum: 60% (thick, slow beating)
Blur: 70% (very dense)

LFO: Slow modulation on Prism and Strum
Result: Cinematic, evolving drone
```

---

## Advanced Techniques

### Processor as Filter Alternative

Instead of filtering, use processors to shape timbre:

**Blur as Low-Pass:**
- High Blur smoothes high frequencies
- More natural than steep filter cutoff
- Preserves some high "air"

**Pluck as Dynamic EQ:**
- Different decay per frequency
- Natural compression-like effect
- Smooth frequency-dependent control

### Creating Movement Without Automation

Static processor settings can create movement:

**Strum Beating:**
- Strum detunes partials against each other
- Natural "beating" effect (slow tremolo)
- No automation needed
- Adjust Strum amount for rate

**Prism as Resonator:**
- Prism creates inharmonic frequencies
- Some resonate more than others
- Static setting = evolving overtones

### Processor Envelopes

While processors don't have dedicated envelopes, you can use:

**EG Modulation:**
- Map Envelope to Prism Amount
- Prism "opens up" during note
- Creates "screaming" lead effect

**LFO Rhythmic Patterns:**
- Square wave LFO to Blur
- Blur "pumps" on/off
- Rhythmic texture without sidechain

---

## Processor Order and Interaction

### Signal Flow

```
Partials Generation
      ↓
   Prism (frequency warping)
      ↓
   Blur (partial spreading)
      ↓
   Pluck (decay shaping)
      ↓
   Strum (detuning)
      ↓
   Filter
      ↓
   Output
```

**Important:** The order matters! Prism comes before Blur, so blurred partials are already warped.

### CPU Considerations

| Processor | CPU Cost | Tip |
|-----------|----------|-----|
| **Prism** | Medium | Disable if not needed |
| **Blur** | Low | Safe to use liberally |
| **Pluck** | Low | Safe to use liberally |
| **Strum** | Very Low | Always safe |

---

## Summary: The Unique Four

1. **Prism** = Harmonic warping, inharmonic textures, growls
2. **Blur** = Partial density, thickening, smoothing
3. **Pluck** = Natural decay, realistic strings, transient shaping
4. **Strum** = Micro-detuning, vintage character, natural chorus

**The Power:** These processors work at the partial level, manipulating Harmor's 516 sine waves individually. This creates effects impossible with traditional audio effects, making Harmor unique among synthesizers.

**For Hip-Hop:** Use these to craft signature sounds - from perfect 808-style decays to robotic vocal effects to metallic trap textures - all without external plugins.

---

## Source Reference

Based on Image-Line Official Manual:
- https://www.image-line.com/fl-studio-learning/fl-studio-online-manual/html/plugins/Harmor.htm
