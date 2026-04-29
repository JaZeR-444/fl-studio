Tags: hip-hop/rap | R&B | electric

## Kepler Safety Rules

### Gain Staging

| Stage | Target Level | Purpose | Priority |
|-------|-------------|---------|----------|
| Oscillator | -6 to -3 dB | Headroom for resonance | Critical |
| Mixer | -3 to 0 dB | Clean summation | High |
| Filter | Watch resonance boost | Avoid clipping | Critical |
| VCA/Amp | -6 dB | Dynamic range | Medium |
| Output | Match other channels | Consistent mixing | High |

### Resonance Safety

**The Resonance Boost Rule:**
Resonance can add +6dB to +12dB at the cutoff frequency. Always account for this when setting oscillator levels.

**Safe Resonance Ranges:**

| Use Case | Max Resonance | Why |
|----------|--------------|-----|
| Sub-bass | 30% | Prevents mud |
| Fundamentals | 40% | Maintains clarity |
| Musical | 50% | Character without chaos |
| Solo/lead | 60% | Maximum expression |
| Sound design | 80% | Controlled chaos |

### CPU Management

| Issue | Solution | Priority |
|-------|----------|----------|
| Multiple instances | Use mono versions | High |
| Complex routing | Simplify matrix | Medium |
| Reverb tails | Render and freeze | Medium |
| Modulation heavy | Reduce LFO count | Low |

### The "Kepler Check" Workflow

1. **Initialize patch**
2. **Set oscillator levels** to -6 dB each
3. **Add filter** with 30% resonance
4. **Test at full mix volume**
5. **Check mono compatibility**
6. **A/B with reference**

### Prevention Checklist

- [ ] Oscillators below -3 dB
- [ ] Resonance boost accounted for
- [ ] Filter not clipping
- [ ] Modulation in musical ranges
- [ ] Mono compatible
- [ ] CPU efficient
- [ ] Saved as preset

### Genre Safety Guidelines

**Hip-Hop:**
| Parameter | Safe Range | Warning |
|-----------|-------------|---------|
| Filter Cutoff | 25-40% (bass), 60-80% (lead) | Avoid >90% |
| Resonance | 25-40% | Avoid >50% |
| Osc Level | -6 to -3 dB | Never 0 dB |
| Envelope | Fast attack (5-10ms) | Natural release |

**R&B:**
| Parameter | Safe Range | Warning |
|-----------|-------------|---------|
| Filter Cutoff | 60-80% | Avoid <50% (too dark) |
| Resonance | 15-30% | Avoid >40% |
| Osc Level | -6 dB | Consistent |
| Envelope | Medium attack (20ms) | Smooth decay |

**EDM:**
| Parameter | Safe Range | Warning |
|-----------|-------------|---------|
| Filter Cutoff | Variable (automation) | Close fully for drops |
| Resonance | 35-55% | Character is key |
| Osc Level | -3 dB | Needs punch |
| Envelope | Fast attack | Immediate response |
