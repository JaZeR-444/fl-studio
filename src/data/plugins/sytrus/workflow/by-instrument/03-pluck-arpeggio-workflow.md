# Sytrus Pluck & Arpeggio Workflow

## Goal
Create punchy, melodic FM plucks and arpeggios.

## Operator Setup

### Pluck Configuration
| Op | Role | Wave | Mix | Purpose |
|----|------|------|-----|---------|
| 1 | Carrier | Saw | 80% | Main tone |
| 2 | Modulator | Noise/Sine | 70% | Click/harmonics |
| 3 | Modulator | Saw | 60% | Brightness |
| 4 | Modulator | Saw | 50% | Depth |
| 5-6 | Optional | Varies | Varies | Complexity |

### Operator Modulation
| Configuration | Character | Use Case |
|----------------|-----------|----------|
| 1→2→3 | Metallic | Classic FM |
| 1→2, 1→3 | Bright | Plucks |
| 1→2 (heavy) | Harsh | Aggressive |
| 1→2, 3→4 | Complex | Bells |

## Filter Settings

| Parameter | Value | Purpose |
|-----------|-------|---------|
| Cutoff | 3500-5000 Hz | Brightness |
| Resonance | 50-65% | Emphasis |
| Drive | 5-15% | Slight grit |

## Envelope Design

### Amplitude Envelope
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Attack | 1-5 ms | Immediate click |
| Decay | 80-150 ms | Short sustain |
| Sustain | 5-20% | Minimal hold |
| Release | 30-80 ms | Quick release |

## Workflow Steps

### Stage 1: The Click
1. Operator 2 at high level (70-80%)
2. Use noise or high harmonic wave
3. Very fast envelope
4. This creates the pluck "attack"

### Stage 2: The Body
1. Operator 1 at 75-85%
2. Saw or triangle wave
3. Medium envelope decay
4. This is the main tone

### Stage 3: The Tail
1. Operators 3-4 add harmonics
2. Lower levels (40-60%)
3. Longer decay
4. Adds character and ring

### Stage 4: The Filter
1. Start at 4000 Hz
2. Resonance at 55%
3. Adjust for "plucky" sound
4. Higher = more click

## Genre Applications

### Trap Melody
| Setting | Value |
|---------|-------|
| Operators | 3-4 |
| Decay | 100 ms |
| Cutoff | 4000 Hz |
| Resonance | 60% |
| Release | 50 ms |

### Future Bass
| Setting | Value |
|---------|-------|
| Operators | 4 |
| Decay | 120 ms |
| Cutoff | 4500 Hz |
| Resonance | 55% |
| Release | 60 ms |

### House
| Setting | Value |
|---------|-------|
| Operators | 3 |
| Decay | 150 ms |
| Cutoff | 4800 Hz |
| Resonance | 50% |
| Release | 80 ms |

## A/B Testing Method

### Pluck Test
1. Play single note
2. Listen for consistent click
3. Check decay smoothness
4. Verify note release

### Arpeggio Test
1. Program arpeggio pattern
2. Listen for note clarity
3. Check velocity response
4. Test at slow and fast tempos

## Quick Fixes

| Issue | Solution |
|-------|----------|
| No click | Increase op2 level to 80% |
| Too long | Reduce decay to 80ms |
| Too clicky | Reduce attack to 1ms |
| No ring | Increase decay to 150ms |
| Too harsh | Lower cutoff to 3500 Hz |

## FL Studio Tips

### Velocity Mapping
1. High velocity = full tone
2. Low velocity = less click
3. Program dynamics
4. Humanize patterns

### Effects Chain
1. Sytrus output
2. Fruity Parametric EQ (cut 200Hz)
3. Fruity Compressor (4:1, fast attack)
4. Fruity Reverb (short decay 0.5s)

### Layering
1. Layer with 808
2. Pluck on top
3. Add closed hats for rhythm
4. Layer with chord stab

### Pattern Tips
- Quantize to grid
- Add swing for feel
- Use velocity for groove
- Program note repeats
