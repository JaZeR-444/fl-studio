# Fruity Reeverb 2 – Advanced Reverb Guide

## Overview
Professional reverb with extensive control over early reflections, room character, and modulation. More CPU-intensive but vastly more flexible than original Reeverb.

## Main Parameters

### Early Reflections
- **Pre-delay**: Gap before reverb starts (0-500ms)
- **Early Level**: Amount of early reflections
- **Early Damping**: High-frequency absorption in early reflections

### Room Character
- **Size**: Virtual room dimensions
- **Diffusion**: Reflection density and smoothness
- **Decay**: Reverb tail length
- **Damping**: High-frequency decay rate

### Tone Shaping
- **Bass**: Low-frequency multiplier
- **High Damping**: High-frequency absorption
- **High Cut**: Low-pass filter on reverb

### Modulation
- **Mod Rate**: Chorus-like modulation speed
- **Mod Depth**: Amount of pitch modulation

### Output
- **Dry**: Original signal level
- **Wet**: Reverb signal level
- **Width**: Stereo spread

## Hip-Hop Applications

### Vocal Reverb (Lead)
**Settings**:
- Pre-delay: 20-40ms
- Size: 50-65%
- Decay: 1.5-2.5s
- High Damping: 4-6kHz
- Wet: 20-30%

**Result**: Clear, professional vocal space

### Snare/Clap (Trap)
**Settings**:
- Pre-delay: 10-15ms
- Size: 40-50%
- Decay: 0.8-1.5s
- High Damping: 3kHz
- Wet: 18-28%

**Result**: Modern, punchy room sound

### Pad Atmosphere
**Settings**:
- Pre-delay: 0-10ms
- Size: 70-85%
- Decay: 3-5s
- Modulation: Subtle
- Wet: 40-60%

**Result**: Lush, enveloping space

### 808 Air (Minimal)
**Settings**:
- Pre-delay: 5ms
- Size: 25-35%
- Decay: 0.5-1s
- High Damping: 2kHz
- Bass: 0.5x
- Wet: 5-12%

**Result**: Slight room without mud

## Genre-Specific Presets

### Trap
```json
{
  "name": "Trap Vocal Space",
  "preDelay": 30,
  "size": 55,
  "decay": 2.0,
  "highDamping": 5000,
  "diffusion": 70,
  "modRate": 0.2,
  "modDepth": 0.1,
  "wet": 25,
  "use": "Lead vocals, ad-libs"
}
```

### Boom Bap
```json
{
  "name": "Classic Room",
  "preDelay": 15,
  "size": 45,
  "decay": 1.8,
  "highDamping": 4000,
  "diffusion": 65,
  "bass": 1.2,
  "wet": 22,
  "use": "Samples, drums"
}
```

### Lo-Fi
```json
{
  "name": "Vintage Space",
  "preDelay": 5,
  "size": 60,
  "decay": 2.5,
  "highDamping": 3500,
  "diffusion": 50,
  "modRate": 0.5,
  "modDepth": 0.3,
  "bass": 1.5,
  "wet": 32,
  "use": "Keys, guitars, vocals"
}
```

### Melodic
```json
{
  "name": "Dreamy Hall",
  "preDelay": 25,
  "size": 75,
  "decay": 3.5,
  "highDamping": 6000,
  "diffusion": 85,
  "modRate": 0.3,
  "modDepth": 0.15,
  "wet": 38,
  "use": "Synths, pads, melodic vocals"
}
```

## Professional Workflows

### Send/Return Setup
1. Create dedicated reverb send track
2. Add Fruity Reeverb 2 (wet 100%, dry 0%)
3. Route instruments via mixer sends
4. Control depth per instrument

**Advantages**:
- One cohesive space
- CPU efficient
- Easy to EQ/compress reverb
- Professional standard

### Multiple Reverb Approach
1. **Short reverb**: Drums, transients (decay 0.8-1.5s)
2. **Medium reverb**: Vocals, leads (decay 1.5-2.5s)
3. **Long reverb**: Pads, atmosphere (decay 3-5s)

Each reverb serves different purpose

### Parallel Reverb Processing
1. Send to reverb aux at 100% wet
2. Add EQ to reverb return (cut lows, shape highs)
3. Add compression to reverb (glue effect)
4. Blend with dry signal

**Result**: Maximum control and polish

## Advanced Techniques

### Pre-Delay Clarity
- **Short (5-15ms)**: Tight, immediate space
- **Medium (20-40ms)**: Separates dry from wet
- **Long (50-100ms)**: Slapback-style effect

**Rule**: Longer pre-delay = more clarity on transients

### Modulation Character
- **No mod**: Clean, transparent reverb
- **Subtle (0.1-0.2)**: Natural shimmer
- **Medium (0.3-0.5)**: Chorus-like texture
- **Heavy (0.6-1.0)**: Obvious, creative effect

### Damping EQ Simulation
- **Low High Damping (2-3kHz)**: Dark, vintage
- **Mid High Damping (4-5kHz)**: Natural, balanced
- **High High Damping (6-8kHz)**: Bright, modern

### Width Manipulation
- **Narrow (30-50%)**: Centered, focused
- **Normal (70-100%)**: Natural stereo
- **Wide (>100%)**: Expansive, spacious

## By Instrument Details

### Lead Vocals
```
Pre-delay: 25-35ms (clarity)
Size: 55-65%
Decay: 1.8-2.5s
High Damping: 5-6kHz
Wet: 20-28%
```

### Backing Vocals
```
Pre-delay: 10-20ms
Size: 60-70%
Decay: 2.5-3.5s
Wet: 35-50%
```

### Snare
```
Pre-delay: 10-15ms
Size: 40-50%
Decay: 1.0-1.5s
High Damping: 3-4kHz
Wet: 20-30%
```

### Hi-Hats
```
Pre-delay: 5-10ms
Size: 35-45%
Decay: 0.6-1.0s
High Damping: 6kHz+
Wet: 12-20%
```

### Pads/Synths
```
Pre-delay: 0-10ms
Size: 70-85%
Decay: 3-5s
Modulation: Medium
Wet: 40-60%
```

### Piano/Keys
```
Pre-delay: 15-25ms
Size: 50-65%
Decay: 2.0-3.0s
High Damping: 5kHz
Wet: 25-35%
```

### 808/Sub Bass
```
Pre-delay: 5ms
Size: 25-35%
Decay: 0.5-0.8s
High Damping: 2kHz
Bass: 0.5x
Wet: 5-10% MAX
```

## Mixing Strategies

### Reverb EQ Template
On reverb return track:
1. **High-pass**: 200-400Hz (remove mud)
2. **Cut**: 500-800Hz (clear midrange)
3. **Boost**: 8-12kHz if needed (air)

### Compression on Reverb
- Light ratio (2:1 to 3:1)
- Medium-fast attack
- Slow release
- Creates consistent reverb level

### Stereo Width Control
- **Drums**: 70-85% width (focused)
- **Melodics**: 90-110% width (spacious)
- **Vocals**: 80-100% width (balanced)

## Common Mistakes

❌ **Too much on everything**: Use selectively
→ Not every element needs reverb

❌ **No pre-delay**: Transients get washed out
→ Use 20-40ms for clarity

❌ **Wrong decay time**: Doesn't match tempo
→ Faster tempo = shorter decay

❌ **No EQ on reverb**: Muddy low-end
→ Always high-pass reverb return

❌ **Same settings for all**: Generic sound
→ Customize per instrument

## Troubleshooting

**Muddy mix**: High-pass reverb at 300-500Hz

**Reverb too obvious**: Reduce wet, increase pre-delay

**Sounds fake**: Increase diffusion, add subtle modulation

**Too dark**: Lower high damping frequency

**Too bright/harsh**: Increase high damping, add high-cut

**Doesn't glue**: Create one main reverb send for cohesion
