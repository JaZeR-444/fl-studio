# Hall Reverb Workflow

## Goal
Create deep, immersive hall reverb for leads, pads, and atmospheric elements.

## Plugin Settings

### Input Section
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input | -6 dB | Prevent clipping from tails |
| Low Cut | 80 Hz | Remove mud from reverb |
| High Cut | 14 kHz | Smooth high frequencies |

### Early Reflections
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Size | 85-100 | Large hall character |
| Predelay | 15-30 ms | Clear transient definition |
| Diffusion | 70% | Natural buildup |

### Reverb Decay
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Time | 2.5-4.0 s | Long, expansive tails |
| High Damping | 35% | Smooth decay without harshness |
| Low Damping | 0% | Maintain body |

### Modulation
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mod Depth | 15% | Subtle movement |
| Mod Rate | 0.15 Hz | Slow, organic texture |

### Output
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mix | 25-40% | Blend with dry signal |
| Low Cut | 150 Hz | Prevent low-end buildup |
| High Cut | 12 kHz | Control brightness |

## Genre Applications

### R&B Ballads (Moody)
- Time: 3.5s, Size: 95, Diffusion: 75%
- Low Cut: 100Hz on output
- Creates expansive, emotional atmosphere

### Trap Leads (Deep Bass)
- Time: 2.0s, Size: 75, Diffusion: 60%
- High Damping: 50% for tight tails
- Adds space without losing aggression

### EDM Pads (Electric)
- Time: 4.0s, Size: 100, Diffusion: 80%
- Modulation: 20% depth, 0.2Hz rate
- Movement and dimension for synths

## A/B Testing Method

### Test Sequence
1. Toggle reverb on/off every 4 bars
2. Compare with bypassed signal
3. Listen for:
   - Phasing issues in mono
   - Masking of dry signal
   - Tail clarity on decay

### Quick Fixes
| Issue | Solution |
|-------|----------|
| Muddy low end | Increase output low cut to 200Hz |
| Harsh highs | Increase high damping to 50% |
| Masking dry | Reduce mix to 20%, increase predelay |
| Boxy sound | Decrease size to 70, increase diffusion |

## FL Studio Tips

### Routing
- Insert on send track for shared reverb
- Use wet/dry knob on return channel
- Route multiple instruments to same send

### Automation
- Pre-delay automation for build-ups
- Decay time changes for sections
- Mix automation for breakdowns

### Sidechain (Optional)
- Key to kick for cleaner low end
- Set threshold to -20dB
- Ratio 4:1 for subtle ducking
