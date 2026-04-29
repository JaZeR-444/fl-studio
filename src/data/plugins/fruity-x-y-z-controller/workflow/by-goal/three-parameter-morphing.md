# Workflow: Three-Parameter Morphing

## Goal
Morph between radically different sounds using three independent parameter axes.

## Concept
The X-Y-Z Controller creates a "morphing cube" where each corner represents a unique combination of three parameters. Navigate through 3D space to transform sounds completely.

## The Morphing Cube

```
                    Z (Depth)
                    100%
                       |
                       |     8 Corners = 8 Sounds
        Y (Vertical)   |     Each axis = Parameter blend
           100%        |
              |        |
              |________|______ X (Horizontal)
             /        /      100%
            /  0%   /
           /_______/
          0%
```

## Setup

### Controller Configuration
```
Mode: Absolute (for specific state targeting)

Mapping Strategy:
├── X → Parameter 1 (State A ↔ State B)
├── Y → Parameter 2 (State A ↔ State B)
└── Z → Parameter 3 (State A ↔ State B)

Each axis: 0% = State A, 100% = State B
```

### Example: Oscillator Morph
```
X: Waveform (0%=Saw, 100%=Square)
Y: Filter Type (0%=Low-pass, 100%=High-pass)
Z: Envelope (0%=Fast/Pluck, 100%=Slow/Pad)
```

## The Eight Sound States

| Position | X | Y | Z | Result Sound |
|----------|---|---|---|--------------|
| 0,0,0 | Saw | Low | Fast | Aggressive pluck |
| 100,0,0 | Square | Low | Fast | Hollow pluck |
| 0,100,0 | Saw | High | Fast | Bright sting |
| 100,100,0 | Square | High | Fast | Nasal blip |
| 0,0,100 | Saw | Low | Slow | Warm pad |
| 100,0,100 | Square | Low | Slow | Hollow pad |
| 0,100,100 | Saw | High | Slow | Bright pad |
| 100,100,100 | Square | High | Slow | Glassy pad |

## Morphing Techniques

### Technique 1: Corner-to-Corner
1. Start at one corner (specific sound)
2. Move directly to another corner (different sound)
3. Path determines intermediate blends
4. Diagonal = simultaneous parameter change

### Technique 2: Edge Walking
1. Move along cube edges (two parameters changing)
2. Keep one parameter fixed
3. Explore related sound families

### Technique 3: Face Navigation
1. Move on cube faces (one parameter changing)
2. Smooth morph along single dimension
3. Most predictable, gradual changes

### Technique 4: Interior Traversal
1. Move through cube interior
2. All three parameters in transition
3. Most complex, evolving sounds

### Technique 5: The Spiral Morph
1. Circular motion in X/Y
2. Simultaneous Z movement (in or out)
3. Creates evolving, complex transitions

## Advanced Morphing Setups

### Setup 1: Effect Chain Morph
```
X: Chorus amount (0-100%)
Y: Phaser depth (0-100%)
Z: Delay feedback (0-100%)

Result: Blend between chorus/phaser/delay dominance
Corners: Dry, Chorus, Phaser, Delay, or combinations
```

### Setup 2: Timbre Evolution
```
X: Oscillator mix (Osc A ↔ Osc B)
Y: Filter resonance (0-100%)
Z: Unison/voices (1 ↔ 8 voices)

Result: Morph from simple to complex, thin to thick
```

### Setup 3: Space-Time Morph
```
X: Reverb size (Small ↔ Large)
Y: Delay time (Short ↔ Long)
Z: Pre-delay (0ms ↔ 100ms)

Result: Navigate through spatial characteristics
```

## Performance Strategies

### Strategy 1: Preset Navigation
1. Map favorite sounds to specific corners
2. Jump between them for arrangement sections
3. Use edges/faces for transitions

### Strategy 2: Evolutionary Performance
1. Start in one corner
2. Gradually spiral toward another
3. Sound evolves continuously over time

### Strategy 3: Rhythmic Morphing
1. Use quantized movements (sync to tempo)
2. Jump between states rhythmically
3. Creates dynamic, shifting textures

## Recording Morphs

### Option 1: Live Performance
- Record gestures as automation
- Captures human nuance and expression
- Edit after recording for precision

### Option 2: Programmed Paths
- Draw automation curves
- Precise, repeatable paths
- Good for consistent transitions

### Option 3: Hybrid Approach
- Sketch with live performance
- Quantize and refine
- Human feel + precision

## Tips for Effective Morphing

1. **Choose Parameters Wisely**: Pick three that create audible, meaningful changes
2. **Contrast Corner States**: Make opposite corners dramatically different
3. **Test All Paths**: Some routes may have "dead zones"—test thoroughly
4. **Use Smooth Curves**: Avoid stepped automation for fluid morphs
5. **Practice Navigation**: Learn direct paths to desired states
6. **Combine with Modulation**: Add LFOs to morphing for extra complexity

[SRC: IL-MAN]
