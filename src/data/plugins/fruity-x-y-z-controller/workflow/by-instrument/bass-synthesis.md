# Workflow: Bass Synthesis and Control

## Goal
Create tight, expressive, and dynamic bass sounds that sit perfectly in hip-hop and electronic mixes.

## The Perfect Bass Character
- Solid low-end foundation
- Controlled but expressive filtering
- Appropriate saturation for genre
- Tight dynamics for mix clarity

## Controller Setup

### Configuration A: Sub Bass Performance
```
Mode: Relative (for smooth filter control)

Mappings:
├── X → Fine pitch (±2 semitones, subtle)
├── Y → Low-pass cutoff (50-1000Hz)
├── Z → Drive/Saturation (0-40%)
└── Speed → LFO depth (subtle movement)
```

### Configuration B: Bass Growl/Wobble
```
Mode: Relative

Mappings:
├── X → Wavetable position/Osc mix
├── Y → Filter cutoff (wide range)
├── Z → Resonance (0-70%)
└── Speed → Modulation amount
```

### Configuration C: Bass Bus Processing
```
Mode: Absolute

Mappings:
├── X → Stereo width (0-20%, keep mono compatible)
├── Y → Compression threshold
├── Z → Harmonic exciter
└── Speed → Dynamic EQ
```

## Performance Techniques

### Technique 1: Filter Talk
1. Map Y to low-pass filter
2. "Talk" through filter while holding notes
3. Creates vocal-like expression
4. Result: Living, breathing bass

### Technique 2: Dynamic Saturation
1. Z controls drive amount
2. Higher notes = more drive
3. Lower notes = cleaner
4. Result: Tonal consistency

### Technique 3: Width Control
1. X subtly widens upper harmonics
2. Keep fundamental mono (below 100Hz)
3. Adds space without losing power
4. Result: Wide but solid bass

### Technique 4: Groove Compression
1. Map Speed to compression ratio
2. Move with the beat
3. Creates pumping groove
4. Result: Tight, rhythmic bass

## Bass Types and Settings

### Sub Bass (20-60Hz focus)
```
X: Minimal (keep centered)
Y: 50-200Hz cutoff (very low)
Z: 20-30% (gentle warmth)
Mode: Relative
Goal: Foundation, felt not heard
```

### Mid Bass (60-150Hz focus)
```
X: Subtle width on harmonics
Y: 80-500Hz cutoff
Z: 30-40% (character)
Mode: Relative
Goal: Audible body, mix presence
```

### Growl Bass (150-500Hz focus)
```
X: Wavetable position
Y: 200-2000Hz cutoff
Z: 40-60% (aggression)
Speed: Modulation
Mode: Relative
Goal: Aggressive, textured
```

### Reese Bass (wide range)
```
X: Oscillator detune
Y: Full range sweeps
Z: Moderate saturation
Speed: LFO or FM amount
Mode: Relative
Goal: Moving, evolving texture
```

## Quick Bass Presets

### Preset 1: Hip-Hop Sub
```
X: Centered
Y: 60-400Hz
Z: 25%
Mode: Relative
Character: Deep, controlled, warm
```

### Preset 2: Trap 808
```
X: Pitch glide ±7st
Y: 40-800Hz
Z: 40%
Mode: Relative
Character: Sliding, distorted, powerful
```

### Preset 3: Dubstep Growl
```
X: Wavetable morph
Y: 100-3000Hz
Z: 50%
Speed: LFO rate
Mode: Relative
Character: Aggressive, modulated
```

### Preset 4: Bass Guitar Emulation
```
X: Pitch ±2st (bends)
Y: 80-5000Hz
Z: 30%
Mode: Absolute
Character: Natural, organic
```

## Genre-Specific Bass

### Hip-Hop Bass
- Clean sub foundation (Y < 200Hz)
- Controlled saturation (Z 20-35%)
- Minimal width (X centered)
- Tight, present

### Trap Bass
- Wide filter range (Y full sweep)
- Heavy saturation (Z 40-50%)
- Pitch slides (X ±7-12st)
- Aggressive, modern

### Dubstep Bass
- Modulated filtering
- High resonance (Z for character)
- LFO or speed mapping
- Complex, evolving

### House/Techno Bass
- Groove-focused
- Compression pumping
- Subtle filtering
- Consistent, driving

### Lo-Fi Bass
- Tape saturation (Z 30-40%)
- Warm filtering (Y 100-800Hz)
- Detuned width (X subtle)
- Fuzzy, cozy

## Mix Integration

### Frequency Management
```
Fundamental: Keep Y above fundamental freq
Harmonics: Allow through filtering
Saturation: Z adds harmonics for audibility
Width: Keep <150Hz mono (X=50%)
```

### Dynamics Control
```
Compression: Y threshold or Speed mapping
Saturation: Z acts as soft compressor
Pumping: Speed creates groove
Consistency: Controlled dynamics sit better
```

### Sidechain Relationship
```
Bass ducking: Use X-Y-Z on sidechain threshold
Or: Speed mapped to gain reduction
Result: Bass breathes with kick
```

## Recording Strategies

### Strategy 1: Live Bass Performance
- Enable record automation
- Play bass line with controller
- Human timing and expression
- Edit timing afterward

### Strategy 2: Step-Recorded Automation
- Program bass notes first
- Record controller separately
- Precise note + expressive control
- Best for complex lines

### Strategy 3: Real-Time Tweaking
- Play and adjust simultaneously
- Capture performance magic
- Multiple takes for options
- Comp best moments

## Common Issues and Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| Too muddy | Y too high | Lower cutoff |
| Too thin | Y too low | Raise cutoff |
| Lacking power | X too wide | Center fundamental |
| Too aggressive | Z too high | Reduce saturation |
| Not cutting through | Filter too closed | Open Y gradually |
| Phase issues | Wide X on low freq | Keep <150Hz centered |

[SRC: IL-MAN]
