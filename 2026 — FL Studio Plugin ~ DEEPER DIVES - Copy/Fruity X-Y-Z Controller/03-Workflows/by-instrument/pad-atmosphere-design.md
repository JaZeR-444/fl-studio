# Workflow: Pad and Atmosphere Design

## Goal
Create evolving, immersive pads and atmospheric textures using 3D morphing control.

## Controller Applications
- Continuous timbre evolution
- Spatial positioning and movement
- Filter and brightness modulation
- Effect depth and ambience

## Controller Setup

### Configuration A: Timbre Morphing Pad
```
Mode: Absolute (for specific state targeting)

Mappings:
├── X → Oscillator mix or wavetable position
├── Y → Filter cutoff (evolution)
├── Z → Effect depth (reverb/delay)
└── Speed → LFO or modulation depth
```

### Configuration B: Spatial Atmosphere
```
Mode: Absolute

Mappings:
├── X → Stereo width (0-200%)
├── Y → Reverb time/size
├── Z → Delay feedback/diffusion
└── Speed → Modulation rate
```

### Configuration C: 3D Soundscape Navigation
```
Mode: Absolute

Mappings:
├── X → Pan + stereo movement
├── Y → Filter (near/far illusion)
├── Z → Spatial effect send
└── Speed → Granular or texture parameter
```

## Pad Types and Techniques

### Technique 1: The Evolving Drone
1. Map X to oscillator morph or mix
2. Move slowly through positions
3. Y for brightness evolution
4. Result: Constantly shifting texture

### Technique 2: Breathing Space
1. X oscillates slowly (width modulation)
2. Y steady or slowly rising
3. Z for depth breathing
4. Result: Organic, living space

### Technique 3: Spatial Swirl
1. X creates circular panning
2. Y modulates filter
3. Z increases as pad evolves
4. Result: Immersive 3D movement

### Technique 4: Texture Granular
1. Map Speed to granular parameter
2. Movement creates texture variation
3. Still = stable texture
4. Result: Dynamic, granular evolution

## Pad Recipes

### Recipe 1: Warm Analog Pad
```
X: Oscillator detune 10-30%
Y: Low-pass 200-2000Hz
Z: Reverb 40-70%
Speed: Slow vibrato 0-10%
Mode: Absolute
Character: Vintage, cozy, enveloping
```

### Recipe 2: Bright Digital Pad
```
X: Bright waveform mix
Y: High-pass + filter sweep
Z: Long delay 50-70%
Speed: Fast LFO 20-40%
Mode: Absolute
Character: Shimmering, modern, airy
```

### Recipe 3: Dark Cinematic Pad
```
X: Sub oscillator blend
Y: Low cutoff 100-800Hz
Z: Big reverb 60-80%
Speed: Subtle movement
Mode: Absolute
Character: Mysterious, deep, filmic
```

### Recipe 4: Rhythmic Arpeggio Pad
```
X: Arp pattern morph
Y: Filter following notes
Z: Delay for rhythm
Speed: Accent on beats
Mode: Relative
Character: Moving, rhythmic, energetic
```

### Recipe 5: Granular Texture
```
X: Sample position
Y: Density/texture
Z: Reverb freeze
Speed: Grain manipulation
Mode: Absolute
Character: Abstract, glitchy, experimental
```

## 3D Positioning for Pads

### Background Atmosphere
```
X: Wide 100-150%
Y: Low filter (distant)
Z: High reverb 70%
Result: Distant, ambient bed
```

### Midground Support
```
X: Moderate 60-100%
Y: Mid filter
Z: Moderate reverb 50%
Result: Present but supportive
```

### Foreground Texture
```
X: Narrow 30-60%
Y: Open filter
Z: Light reverb 30%
Result: Intimate, detailed
```

## Evolution Patterns

### Pattern 1: Slow Build
```
Duration: 8-16 bars
X: Steady or slow morph
Y: Gradual filter opening
Z: Increasing reverb
Result: Building intensity
```

### Pattern 2: Wave Cycle
```
Duration: 4-8 bars
X: Sine wave oscillation
Y: Following X
Z: Steady or following
Result: Breathing, organic
```

### Pattern 3: Random Walk
```
Duration: Continuous
X: Drifting randomly
Y: Related to X
Z: Occasional spikes
Result: Unpredictable, evolving
```

### Pattern 4: Geometric
```
Duration: 2-4 bars
X: Corner-to-corner jumps
Y: Following X
Z: Pattern-based
Result: Structured evolution
```

## Effect Integration

### Reverb as 3D Space
```
Z: Reverb send
Y: Filter pre-reverb
X: Pre-reverb panning
Result: Pad exists in defined space
```

### Delay as Texture
```
Z: Delay feedback
Y: Delay time/filter
Speed: Delay modulation
Result: Rhythmic or ambient texture
```

### Modulation Effects
```
X: Chorus rate
Y: Phaser depth
Z: Flanger feedback
Result: Rich, moving texture
```

## Recording Long Evolutions

### Strategy 1: Single Long Pass
- Enable record
- Perform 16-32 bar evolution
- Single take = natural flow
- Edit start/end points

### Strategy 2: Layered Sections
- Record 4-bar sections separately
- Layer for complex evolution
- Crossfade between takes
- Result: Multi-dimensional pad

### Strategy 3: Loop and Modulate
- Create base pad loop
- Record controller over multiple passes
- Each pass adds modulation
- Result: Dense, complex texture

## Atmospheric Sound Design

### Wind/Noise Textures
```
X: Pan drift
Y: Filter modulation
Z: Noise/reverb
Speed: Gust intensity
Result: Natural wind sounds
```

### Water/Fluid Textures
```
X: Slow panning
Y: Filter "wave" motion
Z: Reverb depth
Speed: Ripple intensity
Result: Liquid, flowing
```

### Industrial/Dark Textures
```
X: Erratic movement
Y: Harsh filtering
Z: Distortion/reverb
Speed: Impact accents
Result: Mechanical, ominous
```

## Tips for Effective Pads

1. **Slow Movements**: Pads reward gradual, smooth changes
2. **Wide Ranges**: Use full X range for stereo interest
3. **Filter is Key**: Y-axis filter creates most variation
4. **Space Matters**: Z creates depth—use generously
5. **Modulation Adds Life**: Speed mapping prevents stasis
6. **Layer Multiple Pads**: Different controller settings per layer
7. **Record Long Takes**: Captures evolution naturally
8. **Edit After**: Fine-tune recorded automation

## Common Pad Parameters

| Parameter | Typical Range | Mapping |
|-----------|---------------|---------|
| Oscillator Mix | 0-100% | X |
| Filter Cutoff | 100-10000Hz | Y |
| Resonance | 0-60% | Z or Speed |
| LFO Rate | 0.1-10Hz | Speed |
| LFO Depth | 0-100% | Z |
| Reverb Send | 30-80% | Z |
| Stereo Width | 50-150% | X |
| Attack Time | 100-1000ms | Fixed |

[SRC: IL-MAN]
