# Maximus Pump Effect Workflow

## What Is Pumping?

Pumping is an intentional rhythmic ducking caused by limiting, creating a "breathing" effect where the mix ducking follows the beat. When used tastefully, it adds energy and groove.

---

## Creating the Pump

### The Formula
1. Heavy gain reduction (6-10 dB)
2. Fast release synced to tempo
3. Attack time that allows transients through

### Timing Sync
| BPM | 1/4 Note | 1/8 Note | 1/16 Note |
|-----|----------|----------|------------|
| 120 | 500ms | 250ms | 125ms |
| 128 | 469ms | 234ms | 117ms |
| 140 | 429ms | 214ms | 107ms |

---

## Step-by-Step Setup

### 1. Base Limiting
| Parameter | Value | Reason |
|-----------|-------|--------|
| Input Gain | +3 dB | Drive hard |
| Threshold | -6 dB | Heavy limiting |
| Ratio | 8:1 | Strong control |
| Attack | 0.3 ms | Fast attack |
| Release | Synced | Rhythm follow |

### 2. Release Timing
| Setting | Value | Feel |
|---------|-------|------|
| 1/4 note | 500ms @ 120BPM | Gentle pump |
| 1/8 note | 250ms @ 120BPM | Medium pump |
| 1/16 note | 125ms @ 120BPM | Aggressive pump |

### 3. Gain Reduction
| Effect | GR Amount |
|--------|-----------|
| Subtle | 4-6 dB |
| Standard | 6-8 dB |
| Aggressive | 8-12 dB |

---

## Style Variations

### House/Pop
| Parameter | Value |
|-----------|-------|
| Release | 1/4 note |
| GR | 4-6 dB |
| Attack | 0.5 ms |

### Techno/EDM
| Parameter | Value |
|-----------|-------|
| Release | 1/8 note |
| GR | 6-8 dB |
| Attack | 0.2 ms |

### Trap
| Parameter | Value |
|-----------|-------|
| Release | 1/4 or 1/8 note |
| GR | 6-10 dB |
| Attack | 0.15 ms |

---

## Common Issues

### Too Much Pump
- Reduce gain reduction
- Increase release time
- Use subtler ratio

### No Pump
- Increase gain reduction
- Decrease release time
- Check attack time (too slow = no ducking)

### Uneven Pumping
- Sync release to tempo
- Check for transient spikes
- Adjust attack time

### Artifacts
- Reduce gain reduction
- Increase release time
- Check for clipping

---

## Creative Applications

### Build-Up Effect
1. Start with subtle pump (4 dB)
2. Automate gain reduction to 8 dB during build
3. Release for impact

### Section Transition
1. Pump during breakdown
2. Release at drop
3. Creates energy release

### Rhythmic Interest
1. Sync release to main rhythm
2. Pump follows kick pattern
3. Adds groove to static mixes

---

## Testing Tips

### Listen On
- Studio monitors (main)
- Headphones (detail)
- Laptop speakers (consumer)

### Check For
- Musical pumping
- Even rhythm
- No distortion
- Genre-appropriate intensity

---

## Related Documentation

- [Maximus Limiting Deep Dive](../Concepts/01-limiting-deep-dive.md)
- [Maximus Parameter Quick Reference](../Quick-Reference/parameter-quick-reference.md)
- [Competitive Loudness Workflow](01-competitive-loudness.md)
