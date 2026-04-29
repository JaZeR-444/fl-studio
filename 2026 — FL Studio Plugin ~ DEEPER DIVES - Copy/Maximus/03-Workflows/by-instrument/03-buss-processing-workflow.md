# Buss Limiting Workflow

## Goal
Add glue and cohesion to instrument busses (synths, vocals, groups).

## Plugin Settings

### Basic Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel Mode | M/S | Mid/Side processing |
| Link | True | Stereo imaging |
| Limiter Mode | Smooth | Gentle limiting |

### Glue Settings
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input Gain | 0 to +1 dB | Subtle drive |
| Threshold | -6 to -10 dB | Moderate limiting |
| Ratio | 2 to 4 | Glue compression |
| Ceiling | -0.3 dB | Headroom |

### Timing
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Attack | 2 to 5 ms | Transients through |
| Release | 100 to 250 ms | Natural pumping |

## Workflow Steps

### Stage 1: Glue Setup
1. Input gain at 0dB
2. Threshold for 3-6dB gain reduction
3. Ratio 3:1 for standard glue
4. Attack 3ms for presence

### Stage 2: M/S Processing
1. Enable M/S mode
2. Listen in stereo: elements glued
3. Listen mid: vocals/snares focused
4. Listen sides: width maintained

### Stage 3: Release Tuning
1. Start at 150ms auto
2. Adjust to rhythm of material
3. Faster for busy arrangements
4. Slower for sparse arrangements

## Common Buss Applications

### Synth Buss
| Setting | Value |
|---------|-------|
| Input Gain | +1 dB |
| Threshold | -8 dB |
| Ratio | 3 |
| Attack | 2 ms |
| Release | 120 ms |
| Mode | Smooth |

### Vocals Buss
| Setting | Value |
|---------|-------|
| Input Gain | 0 dB |
| Threshold | -6 dB |
| Ratio | 2.5 |
| Attack | 4 ms |
| Release | 180 ms |
| Mode | Smooth |

### Guitar Buss
| Setting | Value |
|---------|-------|
| Input Gain | +1 dB |
| Threshold | -10 dB |
| Ratio | 4 |
| Attack | 2 ms |
| Release | 100 ms |
| Mode | Smooth |

## A/B Testing Method

### Glue Test
1. Bypass Maximus, note separation
2. Enable, note cohesion
3. Should sound like single group
4. Not compressed or squashed

### Stereo Width Check
1. Sum to mono
2. Check for phase issues
3. Verify width maintained
4. Listen for mono compatibility

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Too glued | Reduce ratio to 2 |
| Lost transients | Increase attack to 5ms |
| Pumping | Increase release to 200ms |
| Narrow stereo | Check M/S settings |
| Distorted | Lower input gain |

## FL Studio Tips

### Buss Routing
1. Route similar instruments to buss
2. Insert Maximus mid-chain
3. Use for: synths, drums, vocals, guitars

### Parallel Processing
1. Send to Fruity Send
2. Maximus on send return
3. Blend for glue + dynamics
