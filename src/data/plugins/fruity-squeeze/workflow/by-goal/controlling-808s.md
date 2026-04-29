# Controlling 808s with Fruity Squeeze

## Objective
Achieve consistent, tight 808 bass that sits perfectly in the mix without overpowering or getting lost.

## When to Use This Workflow
- Inconsistent 808 velocity across notes
- 808s overwhelming the mix on certain notes
- Need to glue 808s with kick drums
- Creating space for vocals and melodic elements

## Step-by-Step Process

### 1. Insert on Bass Bus
Route all bass elements (808s, sub-bass) to a dedicated bus and insert Fruity Squeeze.

### 2. Set Crossover Points
- **Low/Mid Crossover**: 250 Hz (isolate sub frequencies)
- **Mid/High Crossover**: 2 kHz (keep 808 harmonics separate)

### 3. Configure Low Band (Main Focus)
- **Threshold**: -16 dB (catches most 808 hits)
- **Ratio**: 4:1 to 6:1 (moderate to aggressive)
- **Attack**: 5-10ms (preserves transient punch)
- **Release**: 100-150ms (follows 808 decay naturally)
- **Gain**: +1 to +2 dB (compensate for compression)

### 4. Configure Mid Band (Light Touch)
- **Threshold**: -20 dB (only compress peaks)
- **Ratio**: 1.5:1 (very gentle)
- **Attack**: 15ms
- **Release**: 100ms
- **Gain**: 0 dB

### 5. Configure High Band (Minimal)
- **Threshold**: -25 dB (barely compressing)
- **Ratio**: 1:1 to 1.2:1
- **Attack**: 5ms
- **Release**: 60ms
- **Gain**: -1 dB (reduce brightness if needed)

### 6. Fine-Tune by Genre

**Moody/Dark Trap**
- Higher ratio (6:1) for extremely tight control
- Lower threshold (-18 dB) to compress more
- Longer release (150ms) for smooth tail

**Upbeat/Energetic**
- Medium ratio (4:1) for punch with control
- Moderate threshold (-15 dB)
- Medium release (120ms)

**Melodic/R&B**
- Lower ratio (2.5:1) for natural feel
- Higher threshold (-20 dB) to compress less
- Longer attack (15ms) to preserve musicality

**Electronic/Experimental**
- Extreme ratio (8:1+) for heavy compression
- Very low threshold (-12 dB)
- Fast attack (1-3ms) for aggressive sound

### 7. A/B Testing
- Bypass Fruity Squeeze to compare
- Check consistency across different notes
- Ensure low-end doesn't overwhelm when layered with kick

### 8. Output Gain Compensation
Add output gain to match bypassed level, then add 0.5-1 dB for presence.

## Common Adjustments

### 808s Sound Weak
- Increase low-band gain
- Lower threshold to compress more
- Increase ratio for more consistent level

### 808s Sound Lifeless
- Faster attack to preserve transient
- Lower ratio for more dynamics
- Reduce amount of compression (higher threshold)

### 808s Clash with Kick
- Sidechain low band to kick
- Adjust crossover point to separate frequencies
- Use faster attack for quicker ducking

## Pro Tips for Hip-Hop

1. **Layer with Kick**: Use parallel compression on 808 bus for extra thickness
2. **Automate Threshold**: Lower threshold during verses, raise during chorus for dynamic variation
3. **Monitor in Mono**: Check low-end consistency in mono to ensure translation
4. **Reference Tracks**: Compare your 808 level/consistency to professional references
5. **Room for Vocals**: Leave 3-6 dB headroom between compressed 808 and vocal fundamental

## Genre-Specific Settings Summary

| Genre | Ratio | Threshold | Attack | Release |
|-------|-------|-----------|--------|---------|
| Moody Trap | 6:1 | -18 dB | 5ms | 150ms |
| Upbeat | 4:1 | -15 dB | 10ms | 120ms |
| Melodic | 2.5:1 | -20 dB | 15ms | 140ms |
| Electronic | 8:1 | -12 dB | 1ms | 80ms |
