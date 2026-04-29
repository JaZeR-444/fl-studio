# Fruity Reeverb – Complete Guide

## Overview
Simple, CPU-efficient reverb perfect for quick room ambience and space creation. More basic than Reeverb 2 but great for workflow speed.

## Parameters

### Room Size
- **Size**: Room dimension simulation (0-100%)
- **Damping**: High-frequency absorption
- **Mix**: Dry/wet balance

### Character
- **Diffusion**: Early reflection density
- **Bass**: Low-frequency content in reverb
- **Decay**: Reverb tail length

## Hip-Hop Applications

### Snare/Clap Ambience
**Settings**:
- Size: 35-50%
- Damping: 60-70%
- Decay: Short-medium
- Mix: 15-25%

**Result**: Natural room sound without wash

### Vocal Space
**Settings**:
- Size: 45-60%
- Damping: 50-60%
- Decay: Medium
- Mix: 12-20%

**Result**: Present but not drowning

### 808/Bass Room (Subtle)
**Settings**:
- Size: 20-30%
- Damping: 80%
- Decay: Short
- Mix: 5-10%

**Result**: Slight air without mud

### Melodic Elements
**Settings**:
- Size: 60-75%
- Damping: 40-50%
- Decay: Medium-long
- Mix: 25-40%

**Result**: Lush atmosphere

## Genre Presets

### Trap
```json
{
  "name": "Trap Snare Hit",
  "size": 40,
  "damping": 65,
  "decay": 35,
  "diffusion": 60,
  "bass": 30,
  "mix": 18,
  "use": "Snares, claps"
}
```

### Boom Bap
```json
{
  "name": "Classic Room",
  "size": 50,
  "damping": 55,
  "decay": 45,
  "diffusion": 70,
  "bass": 40,
  "mix": 22,
  "use": "Drums, samples"
}
```

### Lo-Fi
```json
{
  "name": "Warm Space",
  "size": 55,
  "damping": 70,
  "decay": 50,
  "diffusion": 50,
  "bass": 55,
  "mix": 28,
  "use": "Keys, pads"
}
```

### Melodic
```json
{
  "name": "Dreamy Hall",
  "size": 70,
  "damping": 45,
  "decay": 60,
  "diffusion": 75,
  "bass": 35,
  "mix": 35,
  "use": "Vocals, synths"
}
```

## Quick Workflows

### Send-Based Reverb (Professional)
1. Create reverb aux/send track
2. Add Fruity Reeverb (mix 100%)
3. Send instruments to this track
4. Control amount per instrument

**Benefits**: One reverb space, CPU efficient

### Insert Reverb (Quick)
1. Add directly to instrument track
2. Keep mix lower (15-30%)
3. Faster workflow

**Benefits**: Simple, immediate

### Parallel Reverb
1. Duplicate track
2. Reverb mix 100% on duplicate
3. Blend to taste
4. Process reverb separately (EQ, compress)

**Benefits**: Maximum control

## By Instrument

### Drums
- **Kick**: Usually dry (maybe 5% for air)
- **Snare/Clap**: 15-25% for room
- **Hi-Hats**: 10-18% for space
- **Toms/Percs**: 20-30% for depth

### Bass
- **808/Sub**: 0-5% maximum
- **Mid-Bass**: 8-12% if needed
- **Bass Guitar**: 10-15% for natural space

### Melodics
- **Pads**: 30-45% for atmosphere
- **Keys**: 20-35% for natural sound
- **Plucks**: 15-25% for depth
- **Leads**: 18-28% for presence

### Vocals
- **Lead**: 12-20% for clarity with space
- **Backing**: 25-40% for depth
- **Ad-Libs**: 30-50% for contrast

## Mixing Tips

### Do's
- ✓ Use sends for cohesive space
- ✓ High-pass reverb return (remove mud)
- ✓ Match reverb to tempo/vibe
- ✓ A/B test dry vs. reverb

### Don'ts
- ✗ Too much on bass frequencies
- ✗ Same reverb amount on everything
- ✗ Forget to EQ reverb
- ✗ Drown lead elements

## Reeverb vs. Reeverb 2

**Use Fruity Reeverb when**:
- Need quick, simple reverb
- CPU is concern
- Basic room sound sufficient
- Speed over flexibility

**Use Fruity Reeverb 2 when**:
- Need detailed control
- Specific reverb character needed
- Professional polish required
- Have CPU headroom

## Advanced Techniques

### Pre-Delay Trick
1. Send to reverb with delay before it
2. Creates separation
3. Keeps transients dry

### Ducked Reverb
1. Link reverb mix to Peak Controller
2. Triggered by vocal/drums
3. Reverb reduces during hits
4. Returns between for space

### Reverse Reverb
1. Render track with reverb
2. Reverse audio
3. Bounce again
4. Reverse back
5. Reverb leads into sound

## Troubleshooting

**Sounds muddy**: Increase damping, reduce bass

**Too much wash**: Lower mix amount

**Doesn't fit track**: Adjust size to match tempo

**Harsh reverb**: Increase damping

**Can't hear it**: Increase mix or size
