# Maximus Mastering Preparation

## Overview

Maximus serves as the final limiter before your track goes to streaming platforms or distribution. Proper preparation ensures your music translates across all playback systems.

---

## Loudness Targets

### Streaming Platforms
| Platform | Target LUFS | True Peak |
|----------|-------------|-----------|
| Spotify | -14 LUFS | -1 dBTP |
| Apple Music | -16 LUFS | -1 dBTP |
| YouTube | -14 LUFS | -1 dBTP |
| Amazon | -14 LUFS | -1 dBTP |
| Tidal | -14 LUFS | -1 dBTP |

### Traditional
| Format | Target LUFS | True Peak |
|--------|-------------|-----------|
| CD | -9 LUFS | -0.1 dBTP |
| Vinyl | -12 LUFS | -1 dBTP |
| Radio | -16 LUFS | -1 dBTP |

---

## Step-by-Step Mastering Prep

### 1. Analysis First
1. Load your mix into a LUFS meter
2. Measure Integrated LUFS
3. Note True Peak levels
4. Calculate needed gain adjustment

### 2. Gain Staging
| Stage | Level | Purpose |
|-------|-------|---------|
| Pre-Maximus | -6 to -3 dB | Headroom for limiting |
| After Maximus | Hits ceiling | Maximum loudness |

### 3. Maximus Settings
| Parameter | Value | Reason |
|-----------|-------|--------|
| Input Gain | +1 to +3 dB | Pre-limiter boost |
| Threshold | -2 to -4 dB | Gentle limiting |
| Ratio | 3:1 to 4:1 | Moderate control |
| Attack | 0.3-0.5 ms | Transient preserve |
| Release | 80-120 ms | Auto-compatible |
| Ceiling | -0.3 dB | Streaming safe |

### 4. Limiting Strategy
1. Start with Threshold at -6 dB
2. Lower until 2-3 dB gain reduction
3. If more loudness needed, increase Input Gain instead
4. Avoid more than 4-6 dB GR

---

## Common Mistakes

### Too Much Limiting
**Symptom:** Squashed, lifeless sound
**Solution:** Reduce gain reduction to 2-3 dB

### Distorted Transients
**Symptom:** Harsh, clipped peaks
**Solution:** Increase attack time slightly

### Pumping
**Symptom:** Audible rhythmic ducking
**Solution:** Increase release time

### Not Loud Enough
**Symptom:** Sounds quieter than references
**Solution:** Increase Input Gain, not ratio

---

## Quick Reference Settings

### Spotify Optimization
| Parameter | Value |
|-----------|-------|
| Target | -14 LUFS |
| True Peak | -1 dBTP |
| Input Gain | +2 dB |
| Threshold | -3 dB |
| Ratio | 4:1 |
| GR Target | 3 dB |

### Apple Music Optimization
| Parameter | Value |
|-----------|-------|
| Target | -16 LUFS |
| True Peak | -1 dBTP |
| Input Gain | +3 dB |
| Threshold | -2 dB |
| Ratio | 4:1 |
| GR Target | 4 dB |

### CD/Mastering
| Parameter | Value |
|-----------|-------|
| Target | -9 LUFS |
| True Peak | -0.1 dBTP |
| Input Gain | +1 dB |
| Threshold | -4 dB |
| Ratio | 3:1 |
| GR Target | 2 dB |

---

## A/B Testing

### Reference Workflow
1. Load commercial reference in same session
2. Match LUFS levels using utility gain
3. A/B every 30 seconds
4. Note differences in:
   - Bass impact
   - Vocal presence
   - Stereo width
   - Overall energy

### Testing Checklist
- [ ] Sounds good on studio monitors
- [ ] Translates to headphones
- [ ] Translates to laptop speakers
- [ ] Translates to phone speaker
- [ ] Matches reference loudness
- [ ] No distortion or artifacts

---

## Final Checklist

- [ ] Mix is balanced before limiting
- [ ] Gain staging is correct
- [ ] Limiting is subtle (2-4 dB GR)
- [ ] True Peak under -1 dBTP
- [ ] LUFS target achieved
- [ ] Sounds good on multiple systems
- [ ] A/B tested with references

---

## Related Documentation

- [Maximus Limiting Deep Dive](../Concepts/01-limiting-deep-dive.md)
- [Maximus Parameter Quick Reference](../Quick-Reference/parameter-quick-reference.md)
- [Competitive Loudness Workflow](01-competitive-loudness.md)
