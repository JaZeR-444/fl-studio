# Filter Slope & Resonance Guide

## Understanding Slope

Filter slope determines **how aggressively frequencies above cutoff are removed**:

| Slope | dB/Octave | Character | Best For |
|-------|-----------|-----------|----------|
| **12dB** | Gentle | Warm, analog-like | Subtle filtering, vintage vibe |
| **24dB** | Standard | Balanced | Most applications, default choice |
| **36dB** | Steep | Sharp, clinical | Modern sounds, EDM |
| **48dB** | Brickwall | Aggressive | Special effects, extreme isolation |

## Why Harmless Slope is Special

Unlike analog filters, Harmless filters can use **extreme slopes without artifacts**:
- **No phase distortion** because harmonics are already separated
- **No resonance buildup** at steep slopes
- **Perfect mathematical cutoff** at any slope setting

### When to Use Each Slope

#### 12dB - Vintage/Gentle
- Bass sounds where warmth matters
- Pad filtering for subtle movement
- Vintage hip-hop aesthetics
- Blending multiple layers

#### 24dB - Standard Work
- Default for most sounds
- Good balance of cutoff precision and natural sound
- Leads and plucks
- When unsure, start here

#### 36dB - Modern/Sharp
- EDM plucks with tight cutoff
- Removing unwanted high harmonics completely
- Creating "telephone" vocal effects
- Distinct character sounds

#### 48dB - Extreme/Effect
- Creating dramatic filter sweeps
- Isolating specific frequency ranges
- Sound design experiments
- Brickwall protection

## Resonance (Emphasis)

Resonance boosts frequencies **at the cutoff point**.

### Safe Zones
Because of additive engine, resonance won't distort:
- **0-50%**: Safe for any sound
- **50-80%**: Audible peak, still clean
- **80-100%**: Extreme boost, can create ringing

### Resonance Use Cases

| Style | Resonance | Notes |
|-------|-----------|-------|
| **Subtle warmth** | 15-25% | Touch of character |
| **Vocal peak** | 30-45% | Emphasizes formant region |
| **Scream filter** | 60-75% | Classic resonant sweep |
| **Whistle effect** | 80-95% | Can sound like ringing |

## The Pluck + Slope Interaction

When using **Pluck filter**, slope affects the **shape of decay**:

### 12dB + Pluck
- Natural string decay
- Warm, acoustic character
- Use for: Acoustic guitar simulation

### 24dB + Pluck
- Balanced pluck character
- Good for synth plucks
- Versatile default

### 36-48dB + Pluck
- Sharp attack, fast decay
- Electronic/plastic character
- Use for: Unique synth textures

## Hip-Hop Recipe Combinations

### "Low End Theory"
- Cutoff: 200Hz
- Slope: 12dB
- Resonance: 10%
- Result: Warm sub-bass, no mud

### "Trap Highs"
- Cutoff: 8kHz
- Slope: 36dB
- Resonance: 40%
- Result: Present but controlled highs

### "Telephone Vocal"
- Cutoff: 4kHz
- Slope: 48dB
- Resonance: 60%
- Result: Classic filtered vocal

### "Underwater FX"
- Cutoff: 400Hz
- Slope: 48dB
- Resonance: 80%
- Result: Heavy underwater character

## Envelope Amount

The filter envelope's "Amount" determines how much the envelope affects cutoff:

| Amount | Effect |
|--------|--------|
| **-100%** | Inverted (env up = cutoff down) |
| **0%** | No envelope effect |
| **+50%** | Moderate sweep up |
| **+100%** | Full sweep up |

### Common Hip-Hop Settings

**Pluck with attack emphasis:**
- Amount: +70%
- Attack: 0ms
- Decay: 200ms
- Result: Sharp attack "poke"

**Pad with slow sweep:**
- Amount: +40%
- Attack: 800ms
- Result: Gradual brightness increase

**Inverted bass:**
- Amount: -60%
- Attack: 10ms
- Result: Attack click, then smooth sustain

[SRC: IL-MAN - Harmless Filter Section]
