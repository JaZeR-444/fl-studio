# Sytrus Safety Rules

## Volume Management

### Master Output
- Keep master output below -3 dB
- Use limiter on master for safety
- Monitor true peak during mixing

### Operator Levels
| Operators Active | Sum Limit | Typical Per-Op |
|-----------------|------------|----------------|
| 6 | 350% | 50-60% each |
| 5 | 300% | 55-65% each |
| 4 | 250% | 55-70% each |
| 3 | 200% | 60-70% each |

### Waveguide/Feedback
| Feedback Level | Character | Safe Limit |
|----------------|-----------|-------------|
| 0-20% | Clean | 20% |
| 20-40% | Warm | 40% |
| 40-60% | Rich | 60% |
| 60%+ | Distorted | Monitor |

## Filter Safety

### Resonance Limits
| Value | Character | Warning |
|-------|-----------|---------|
| 0-25% | Clean | Safe |
| 25-45% | Emphasis | Normal |
| 45-65% | Character | Monitor |
| 65-80% | Resonant | Risk of build-up |
| 80%+ | Screaming | Distortion risk |

### Drive Guidelines
| Amount | Character | Use Case |
|--------|-----------|----------|
| 0-10% | Clean | Pure FM |
| 10-25% | Warm | Classic |
| 25-45% | Distorted | Aggressive |
| 45%+ | Harsh | Effect only |

## CPU Management

### Voice Limits
| Configuration | CPU Impact | Voice Limit |
|---------------|------------|--------------|
| 6 ops + effects | High | 8 |
| 5 ops + effects | Medium | 12 |
| 3-4 ops + effects | Low | 16 |
| Simple preset | Very Low | Unlimited |

### Effects Usage
| Effect | CPU Impact | Recommendation |
|--------|------------|----------------|
| Reverb | Medium | Use sends |
| Delay | Low | On preset OK |
| Chorus | Medium | Use sparingly |
| All combined | High | Bypass unused |

## Modulation Safety

### LFO Limits
| Rate | Use Case | Safety |
|------|----------|--------|
| 0-0.2 Hz | Pads | Safe |
| 0.2-0.5 Hz | Movement | Safe |
| 0.5-2 Hz | Animation | Monitor |
| Audio rate | Distortion | Use carefully |

### Modulation Depth
| Target | Maximum | Warning |
|--------|---------|---------|
| Filter Cutoff | 100% | Normal range |
| Pitch | 1 octave | Above = unstable |
| Amplitude | 100% | Normal |
| Resonance | 80% | Monitor |

## Operator Safety

### Modulation Index
- Higher index = more harmonics
- High index can cause harshness
- Typical range: 30-70%
- Use velocity to control max

### Frequency Ratios
| Ratio | Character | Use Case |
|-------|-----------|----------|
| 1:1 | Fundamental | Carriers |
| 2:1 | Octave | Simple FM |
| 1.414:1 | Non-integer | Bells |
| 3:1, 4:1 | Complex | Aggressive |

## Genre-Specific Limits

### EDM/Festival
| Setting | Limit | Reason |
|---------|-------|--------|
| Drive | 25% | Warmth not harsh |
| Resonance | 45% | Presence |
| Voices | 8-12 | CPU/loudness |

### Trap
| Setting | Limit | Reason |
|---------|-------|--------|
| Drive | 20% | Punch |
| Resonance | 55% | Character |
| Decay | Short | Tightness |

### Ambient/Pad
| Setting | Limit | Reason |
|---------|-------|--------|
| Drive | 10% | Clean |
| Resonance | 25% | Smooth |
| Mod Rate | 0.15 Hz | Gentle |

## Common Mistakes to Avoid

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| All ops at 100% | Clipping | Use 50-70% per op |
| High feedback + high drive | Distortion | Balance both |
| Audio rate modulation | Unpleasant | Keep <20 Hz |
| Too many voices | CPU strain | Limit to 8-12 |
| No high-pass | Muddy | Filter below 100Hz |

## Quick Reference Limits

| Parameter | Maximum | Warning |
|-----------|---------|---------|
| Master | -3 dB | -3 to 0 dB |
| Operator Level | 100% | Sum to 300% max |
| Feedback | 60% | 60-80% |
| Resonance | 70% | 70-85% |
| Drive | 45% | 45-60% |
| Voices | 12 | 12-16 |
| LFO Rate | 0.5 Hz | 0.5-2 Hz |

## Troubleshooting

### Harsh Sound
1. Reduce operator modulation
2. Lower resonance
3. Reduce drive
4. Increase filter cutoff

### Clipping
1. Reduce all operator levels
2. Lower feedback
3. Enable output limiter
4. Reduce drive

### No Character
1. Increase modulation index
2. Add more operators
3. Increase drive
4. Adjust frequency ratios

### Muddy Bass
1. Increase filter cutoff
2. Add high-pass
3. Reduce operator levels
4. Shorten envelope decay

## FL Studio Tips

### Latency
- Sytrus uses ~3-5 ms latency
- Increase buffer for recording
- Use direct monitoring

### Automation
- Right-click for automation
- Smooth filter sweeps
- Record live modulation

### Rendering
- Render at 24-bit minimum
- Check true peak
- Leave 6 dB headroom
- Bypass effects during mix
