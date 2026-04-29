# Drum Buss Workflow

## Goal
Add punch, loudness, and cohesion to drum elements.

## Plugin Settings

### Basic Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel Mode | LR | Stereo drum processing |
| Link | True | Consistent L/R limiting |
| Limiter Mode | Hard | Maximum impact |

### Heavy Limiting Setup
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input Gain | +3 to +6 dB | Drive limiter hard |
| Threshold | -10 to -14 dB | Heavy limiting |
| Ratio | 15 to 20 | Intense compression |
| Ceiling | -0.1 dB | Maximum output |

### Timing
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Attack | 0.02 to 0.1 ms | Instant limiting |
| Release | 15 to 30 ms | Fast recovery |

### Transient Protection
| Parameter | Value | Purpose |
|-----------|-------|---------|
| s/C | True | Sidechain enabled |
| s/C Threshold | -20 dB | Duck on transients |
| s/C Range | 6 dB | Transient preservation |

## Workflow Steps

### Stage 1: Input & Threshold
1. Set input gain to +4dB
2. Lower threshold until 6-10dB gain reduction
3. Watch meter for consistent limiting

### Stage 2: Attack Tuning
1. Start at 0.05ms (very fast)
2. Listen to kick punch
3. If dull, decrease to 0.02ms
4. If distortion, increase to 0.1ms

### Stage 3: Release Setting
1. Set to 20ms initially
2. Play drum pattern
3. If crackling between hits, increase release
4. If muddy, decrease release

### Stage 4: Sidechain
1. Enable s/C
2. Set threshold for 3-6dB gain reduction on transients
3. Adjust range for natural ducking

## Genre Applications

### Trap Drums
| Setting | Value |
|---------|-------|
| Input Gain | +4 dB |
| Threshold | -12 dB |
| Ratio | 20 |
| Attack | 0.03 ms |
| Release | 25 ms |
| s/C | True |

### Boom Bap Drums
| Setting | Value |
|---------|-------|
| Input Gain | +3 dB |
| Threshold | -8 dB |
| Ratio | 12 |
| Attack | 0.1 ms |
| Release | 40 ms |
| s/C | True |

### EDM Drums
| Setting | Value |
|---------|-------|
| Input Gain | +5 dB |
| Threshold | -14 dB |
| Ratio | 20 |
| Attack | 0.02 ms |
| Release | 20 ms |
| s/C | True |

## A/B Testing Method

### Test Points
1. Raw drums (bypass)
2. Limited drums (default settings)
3. Adjusted settings

### Comparison Sequence
1. Match output levels with utility gain
2. Listen to kick punch on loop
3. Check snare crack
4. Test bass interaction

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Lost kick punch | Enable s/C, decrease attack |
| Crackling snares | Increase release to 35ms |
| Uneven levels | Check link setting |
| Too compressed | Reduce ratio, raise threshold |
| Distorted tails | Decrease input gain |

## FL Studio Tips

### Drum Buss Routing
1. Route all drums to single buss
2. Insert Maximus on buss
3. Parallel blend with Fruity Send

### Layering Technique
1. Heavy limited drums (50%)
2. Raw processed drums (50%)
3. Blend for punch + character

### Pre-Processing
1. EQ boost 100-200Hz before Maximus
2. Transient shaper for extra punch
3. Parallel distortion for character
