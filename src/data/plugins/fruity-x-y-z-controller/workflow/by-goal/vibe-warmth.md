# Workflow: Vibe - Creating Warmth

## Goal
Add analog warmth, vintage thickness, and cozy texture using the X-Y-Z Controller.

## Vibe Definition
Warmth = Analog character + Low-frequency emphasis + Gentle saturation + Subtle width

## 3D Mapping Strategy

```
X-Axis: Detune/Pitch Widening (0-30%)
├── 0% = In-tune, focused
└── 30% = Wide, chorused, thick

Y-Axis: Low-Pass Cutoff (200Hz - 5kHz)
├── Lower = Darker, warmer
└── Upper = Brighter, clearer

Z-Axis: Saturation/Drive (0-40%)
├── 0% = Clean, digital
└── 40% = Gently saturated, analog
```

## Target Zone
**Sweet Spot**: Lower-left quadrant
- X: 10-30% (subtle widening)
- Y: 10-40% (warm/dark)
- Z: 20-40% (gentle saturation)

## Setup

### Controller Configuration
```
Mode: Absolute (for specific warmth settings)

Mappings:
├── X → Oscillator Detune (0-30 cents) OR Stereo Width (100-130%)
├── Y → Low-Pass Cutoff (200Hz - 5kHz)
├── Z → Tape/Tube Saturation (0-40%)
└── Speed → Subtle Vibrato (0-20% depth)
```

### Processing Chain
```
[Source] → [X-Y-Z Controller] → [Low-Pass Filter] → [Saturation] → [Output]
```

## Performance Techniques

### Technique 1: The Warm Pad
1. Position: X=20%, Y=30%, Z=30%
2. Slow, minimal movement
3. Optional: Add gentle Speed→vibrato
4. Result: Evolving, warm pad texture

### Technique 2: Vintage Lead
1. Position: X=15%, Y=50%, Z=25%
2. Moderate X movement for live feel
3. Keep Y below 60% to maintain warmth
4. Result: Classic analog lead sound

### Technique 3: Subtle Thickening
1. Position: X=25%, Y=35%, Z=20%
2. Static or very slow drift
3. Apply to background elements
4. Result: Adds depth without prominence

### Technique 4: Analog Drums
1. Position: X=10%, Y=40%, Z=35%
2. Map Speed to transient softening
3. Quick movements = gentle saturation
4. Result: Vintage drum machine character

## Combining with Other Vibes

### Warmth + Clarity (Balanced)
- X: Moderate (warmth)
- Y: Moderate-high (clarity) 
- Z: Moderate (both)
- Result: Clear but not cold, warm but not muddy

### Warmth + Depth (Cozy Space)
- X: Width + detune (warmth)
- Y: Low cutoff + reverb (depth)
- Z: Saturation + space (both)
- Result: Intimate, enveloping sound

### Warmth + Punch (Thick Power)
- X: Subtle (focus)
- Y: Moderate-low (warmth)
- Z: Saturation + drive (punch)
- Result: Heavy, powerful low-end

## Common Warmth Targets

| Source | X Mapping | Y Range | Z Amount |
|--------|-----------|---------|----------|
| **Synth Pads** | Detune 10-20% | 300Hz-2kHz | 20-30% |
| **Bass** | Width 110-120% | 80Hz-800Hz | 25-35% |
| **Drums** | Minimal/none | 100Hz-5kHz | 30-40% |
| **Vocals** | Subtle width | 200Hz-8kHz | 15-25% |
| **Master Bus** | Stereo width | Full range | 10-20% |

## Warmth Cheat Sheet

```
Too Cold/Digital?       → Increase Z (saturation)
Too Thin?               → Increase X (width/detune)
Too Bright/Harsh?       → Decrease Y (lower cutoff)
Lacking Character?      → Add Speed→vibrato (subtle)
Too Much Mud?           → Decrease Y (cut lows more)
```

## Avoiding Over-Warmth

**Warning Signs:**
- Sound becomes muddy or undefined
- Loss of clarity in mix
- Excessive "fuzz" without definition
- Competing with other warm elements

**Solutions:**
- Keep Y cutoff above 200Hz minimum
- Limit Z to 40% maximum
- Use subtractive EQ after warming
- Apply selectively, not to everything

[SRC: IL-MAN]
