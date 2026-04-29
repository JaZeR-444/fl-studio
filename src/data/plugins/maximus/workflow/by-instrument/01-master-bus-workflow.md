# Master Bus Workflow

## Goal
Apply final limiting and loudness maximization to complete mix.

## Plugin Settings

### Basic Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel Mode | LR | Standard stereo limiting |
| Link | True | Average between channels |
| Limiter Mode | Hard | Transparent peak control |

### Threshold & Ratio
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input Gain | +1 to +3 dB | Drive the limiter |
| Threshold | -3 to -6 dB | Control limiting amount |
| Ratio | 3 to 6 | Limiting intensity |
| Ceiling | -0.3 dB | Headroom for streaming |

### Timing
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Attack | 0.3 to 1.0 ms | Transient preservation |
| Release | 80 to 150 ms | Natural recovery |

### Optional
| Parameter | Value | Purpose |
|-----------|-------|---------|
| s/C | False | Off for full mix |
| Lookahead | Enabled | Precise peak control |

## Workflow Steps

### Stage 1: Set Ceiling
1. Set ceiling to -0.3dB for streaming platforms
2. This ensures no digital clipping

### Stage 2: Find Threshold
1. Start with threshold at -6dB
2. Play loudest section of mix
3. Lower threshold until 2-4dB gain reduction
4. More than 6dB may cause distortion

### Stage 3: Adjust Attack
1. Fast (0.1-0.3ms) for punchy genres (hip-hop, EDM)
2. Medium (0.5-1.0ms) for general purpose
3. Slow (2-5ms) for classical, acoustic

### Stage 4: Set Release
1. Auto mode for most applications
2. Manual: 100-150ms for music
3. Faster for punch, slower for smooth

## Genre Applications

### Hip-Hop Master
| Setting | Value |
|---------|-------|
| Input Gain | +2.5 dB |
| Threshold | -7 dB |
| Ratio | 10 |
| Attack | 0.2 ms |
| Release | 50 ms |

### R&B Master
| Setting | Value |
|---------|-------|
| Input Gain | +1 dB |
| Threshold | -4 dB |
| Ratio | 3 |
| Attack | 1.0 ms |
| Release | 150 ms |

### EDM Master
| Setting | Value |
|---------|-------|
| Input Gain | +3 dB |
| Threshold | -8 dB |
| Ratio | 12 |
| Attack | 0.1 ms |
| Release | 35 ms |

## A/B Testing Method

### Test Sequence
1. Bypass Maximus, note perceived loudness
2. Enable Maximus, match output levels
3. Compare dynamics and punch
4. Listen for 10 seconds minimum

### What to Listen For
- Pumping on bass/kick
- Distorted transients
- Loss of low-end warmth
- Harsh high frequencies

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Pumping | Increase release to 150ms |
| Distortion | Raise threshold, reduce ratio |
| Dull sound | Decrease attack time |
| Not loud enough | Increase input gain, not ratio |
| Cracking | Check ceiling setting |

## FL Studio Tips

### Chain Position
1. EQ first (corrective)
2. Compression (mix glue)
3. Maximus (limiting)
4. Limiter (ceiling only)

### Loudness Matching
1. Use utility gain to match levels
2. Compare at same perceived loudness
3. Trust ears over meters

### Streaming Guidelines
| Platform | Target LUFS | True Peak |
|----------|-------------|-----------|
| Spotify | -14 LUFS | -1 dBTP |
| Apple Music | -16 LUFS | -1 dBTP |
| YouTube | -14 LUFS | -1 dBTP |
