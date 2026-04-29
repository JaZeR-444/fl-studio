# Workflow: Vibe - Creating Air

## Goal
Add brightness, shimmer, high-end lift, and polish for modern, detailed sound.

## Vibe Definition
Air = High-frequency presence + Shimmer + Sparkle + Top-end polish

## 3D Mapping Strategy

```
X-Axis: High-Pass Filter (20-200Hz)
├── 20% = Full range, some rumble removal
└── 100% = Removes low-mids, very bright

Y-Axis: Air EQ Band (12-20kHz, 0-6dB boost)
├── 0% = Natural highs
└── 100% = Maximum sheen and shimmer

Z-Axis: Sparkle/Dimension Enhancer (0-50%)
├── 0% = Dry, unenhanced
└── 50% = Enhanced dimension and sparkle
```

## Target Zone
**Sweet Spot**: Upper area with controlled low-end
- X: 10-20% (clean lows)
- Y: 60-90% (brightness)
- Z: 30-50% (enhancement)

## Setup

### Controller Configuration
```
Mode: Absolute (for precise high-frequency control)

Mappings:
├── X → High-Pass Filter (20-200Hz)
├── Y → Air EQ @ 15kHz (0-6dB)
├── Z → Sparkle/Enhancer (0-50%)
└── Speed → High-frequency shimmer LFO (0-30%)
```

### Processing Chain
```
[Source] → [High-Pass] → [X-Y-Z Controller] → [Air EQ] → [Enhancer] → [Output]
```

## Performance Techniques

### Technique 1: The Shine Boost
1. Position: X=15%, Y=75%, Z=35%
2. For vocals or elements needing top-end lift
3. Static or gentle movement
4. Result: Polished, modern, airy sound

### Technique 2: Air Sweep
1. Start: X=10%, Y=40%, Z=20% (natural)
2. Move to: X=20%, Y=90%, Z=45% (air)
3. Use for buildups or brightening sections
4. Result: Progressive brightness increase

### Technique 3: Selective Brightness
1. Map Speed to high-frequency modulation
2. Move = shimmering top-end
3. Still = stable brightness
4. Result: Dynamic, living air

### Technique 4: The Polished Mix
1. Apply to master bus or groups
2. X: 15% (clean lows)
3. Y: 50-70% (moderate air)
4. Z: 20-30% (subtle enhancement)
5. Result: Professional polish without harshness

## Combining with Other Vibes

### Air + Clarity (Ultra-Defined)
- X: High-pass (air)
- Y: Presence + air bands (clarity)
- Z: Enhancement (both)
- Result: Maximum detail and definition

### Air + Depth (Open Cosmos)
- X: Clean lows (air)
- Y: Long reverb (depth)
- Z: High-frequency delay (air)
- Result: Vast, atmospheric, open

### Air + Punch (Bright Aggression)
- X: High-pass (air)
- Y: Bright saturation (punch)
- Z: Sparkle on transients (both)
- Result: Cutting, bright attack

### Air + Warmth (Polished Warmth)
- X: Moderate high-pass (balance)
- Y: Moderate air (brightness)
- Z: Gentle enhancement (warmth)
- Result: Warm but not dark, clear but not harsh

## Common Air Targets

| Source | X | Y | Z | Notes |
|--------|---|---|---|-------|
| **Vocals** | 10-20% | 60-80% | 30-40% | Top-end shimmer |
| **Master Bus** | 15-25% | 40-60% | 20-30% | Polished mix |
| **Synths** | 10-20% | 70-90% | 30-50% | Electronic shine |
| **Acoustic Guitars** | 15-25% | 50-70% | 25-35% | String brilliance |
| **Cymbals/Hi-hats** | 20-30% | 60-80% | 30-40% | Maximum shimmer |

## Air Cheat Sheet

```
Too dark/muddy?         → Increase Y (air EQ)
Rumble in lows?         → Increase X (high-pass)
Lacking polish?         → Increase Z (enhancer)
Too harsh?              → Decrease Y, check X
Not shiny enough?       → Increase Z, moderate Y
Modern sound needed?    → Increase all moderately
```

## Frequency Spectrum Reference

| Frequency Range | Effect | Air Contribution |
|----------------|--------|------------------|
| 12-16kHz | Sheen | Primary air band |
| 16-20kHz | Sparkle | Ultra-high detail |
| 8-12kHz | Brilliance | Presence + air |
| 5-8kHz | Presence | Clarity foundation |

## Creating Different Air Types

### Subtle Air (Natural Polish)
```
X: 15% (clean lows)
Y: 50% (moderate air)
Z: 25% (subtle enhancement)
Result: Professional, natural brightness
```

### Moderate Air (Modern Sheen)
```
X: 20% (clear lows)
Y: 70% (strong air)
Z: 35% (moderate enhancement)
Result: Contemporary, polished sound
```

### Maximum Air (Extreme Shimmer)
```
X: 25% (tight lows)
Y: 90% (maximum air)
Z: 50% (full enhancement)
Result: Bright, shimmering, ultra-detailed
```

## Avoiding Over-Air

**Warning Signs:**
- Harshness or sibilance
- Listener fatigue
- Thin quality (too much high-pass)
- Artifacts and noise amplification

**Solutions:**
- Keep X moderate (don't over-filter)
- De-ess vocals before adding air
- Use dynamic EQ for air band
- Check on multiple playback systems
- Reference against commercial mixes

## Air by Application

### Vocals Air
```
Focus: Y (air EQ for shimmer)
X: Moderate (remove rumble only)
Z: Subtle (20-30%)
De-essing recommended before air
```

### Master Bus Air
```
Focus: Balanced X/Y/Z
Gentle settings all around
Goal: Polish without obvious processing
```

### Synth Air
```
Focus: Y (maximum air)
X: Light (keep bass)
Z: Moderate-high
Goal: Electronic shimmer
```

### Percussion Air
```
Focus: X (tighten lows)
Y: Moderate (cymbal sheen)
Z: Moderate (sparkle)
Goal: Clean, bright, defined
```

[SRC: IL-MAN]
