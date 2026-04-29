# Workflow: 3D Spatial Audio Positioning

## Goal
Position sounds in three-dimensional space using the X-Y-Z Controller for immersive stereo mixes.

## Concept
Creates depth perception through:
- **X (Horizontal)**: Left/right pan position
- **Y (Vertical)**: Low-pass filter cutoff (near/far illusion)
- **Z (Depth)**: Reverb send amount (distance perception)

## Setup

### Controller Configuration
```
Mode: Absolute (for predictable positioning)

Mappings:
├── X → Pan (-100 to +100)
├── Y → Filter Cutoff (200Hz - 20kHz)
└── Z → Reverb Send (0-100%)
```

### Plugin Chain
```
[Instrument] → [X-Y-Z Controller] → [Filter] → [Reverb Send]
```

## The 3D Space Model

| Position | X | Y | Z | Perception |
|----------|---|---|---|------------|
| Far Left/Distant | 0% | 20% | 70% | Background, left |
| Center/Close | 50% | 80% | 20% | Focus, present |
| Far Right/Distant | 100% | 20% | 70% | Background, right |
| Center/Far | 50% | 20% | 80% | Distant, ambient |

## Performance Techniques

### Technique 1: The Pass-By
1. Start far left, distant (X=0%, Y=20%, Z=70%)
2. Move X toward center while increasing Y
3. Continue to far right while decreasing Y back to 20%
4. Result: Sound "passes by" the listener

### Technique 2: Approach and Withdraw
1. Start center, distant (Y=20%, Z=80%)
2. Move Y up (brighter) while decreasing Z (less reverb)
3. At peak closeness (Y=90%, Z=10%), reverse motion
4. Result: Sound approaches then moves away

### Technique 3: Spatial Throw
1. Use 3D Throw gesture (diagonal + Z scroll)
2. Throw from one corner to another
3. Simultaneous X/Y/Z changes create realistic spatial motion

## Quick Position Presets

```
Background Left:    X=10%, Y=30%, Z=60%
Background Right:   X=90%, Y=30%, Z=60%
Center Focus:       X=50%, Y=80%, Z=20%
Distant Ambient:    X=50%, Y=20%, Z=80%
Pass-by Start:      X=0%,  Y=20%, Z=60%
Pass-by End:        X=100%, Y=20%, Z=60%
```

## Tips

- Lower Y values = less high frequencies = sounds farther away
- Higher Z values = more reverb = greater perceived distance
- X creates stereo placement while Y and Z create depth
- Use smooth movements for realistic spatial effects

[SRC: IL-MAN]
