# LuxeVerb Safety Rules

## Volume Management

### Input Level
- NEVER exceed -6 dB input gain
- Push louder signals through high-quality EQ first
- Check input meter before heavy reverb

### Output Level
- Target mix percentage: 20-50%
- Never exceed -3 dB output
- Reduce wet signal if clipping

### Return Track
- Use send/return for shared reverb
- Set return fader at unity (0 dB)
- Reduce individual send levels

## Tail Management

### Decay Time Limits
| Application | Maximum Safe | Recommended |
|-------------|--------------|-------------|
| Drums | 1.5 seconds | 0.5-1.0s |
| Vocals | 2.5 seconds | 1.0-1.8s |
| Synths | 4.0 seconds | 1.5-2.5s |
| Cinematic | 8.0 seconds | 4.0-6.0s |

### Tail Overload Prevention
- Long decays (>4s) create muddy mixes
- Use high-pass filter on reverb return
- Cut reverb below 100-200 Hz
- Use pre-delay for clarity

### Multiple Reverbs
- Maximum 2-3 simultaneous reverbs
- Different time scales for each
- Different frequency character

## Frequency Management

### High-Frequency Safety
- High damping (>50%) prevents harshness
- Use high-pass filter on input
- Reduce shimmer mix if fatiguing

### Low-Frequency Safety
- Always high-pass reverb return
- Typical: 80-200 Hz for most
- Lower (60-80 Hz) for vocals
- Higher (150-200 Hz) for drums

### Masking Prevention
- Reverb should not mask dry signal
- Use pre-delay to separate
- Reduce reverb on transient elements

## CPU Safety

### Effect Quality
- Start with medium quality
- Increase only if needed
- High quality uses 3-4x CPU

### Multiple Instances
- Limit to 2-4 instances per project
- Use sends for shared reverb
- Freeze reverb tracks if struggling

## Genre-Specific Limits

### Hip-Hop/Rap
| Setting | Limit | Reason |
|---------|-------|--------|
| Decay Time | 1.2s | Prevents masking |
| Mix | 30% | Keeps vocals forward |
| High Pass | 100 Hz | Tight low end |
| Quality | Medium | CPU efficiency |

### R&B
| Setting | Limit | Reason |
|---------|-------|--------|
| Decay Time | 2.0s | Smooth tails |
| Mix | 40% | Ambient depth |
| High Pass | 80 Hz | Warmth |
| Quality | High | Smooth character |

### EDM
| Setting | Limit | Reason |
|---------|-------|--------|
| Decay Time | 2.5s | Build energy |
| Mix | 50% | Big sound |
| High Pass | 120 Hz | Clean bass |
| Quality | High | Maximum clarity |

## Common Mistakes to Avoid

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| No high-pass | Muddy low end | Always HPF reverb |
| 100% wet mix | Loss of dry signal | Mix 30-50% |
| Long decay on drums | Bleed/masking | Keep under 1.5s |
| Multiple full mixes | Phase issues | Use different times |
| Input too hot | Distorted reverb | -6dB input max |

## Quick Reference Limits

| Parameter | Maximum Safe | Warning Zone |
|-----------|--------------|--------------|
| Input Gain | -6 dB | -6 to 0 dB |
| Mix | 50% (70% max) | 50-70% |
| Decay (Drums) | 1.5 seconds | 1.5-2.5s |
| Decay (Vocals) | 2.5 seconds | 2.5-4.0s |
| Decay (Synths) | 4.0 seconds | 4.0-6.0s |
| High Pass | 80-200 Hz | Depends on source |
| Quality | High (4 instances max) | Very High |

## Troubleshooting

### Reverb Clipping
1. Reduce input gain
2. Enable high-pass filter
3. Reduce mix percentage
4. Lower decay time

### Muddy Mix
1. Increase high-pass frequency
2. Add pre-delay
3. Reduce decay time
4. Sidechain reverb to dry

### Harsh Highs
1. Increase high damping
2. Enable high-pass filter
3. Reduce shimmer amount
4. Lower output high-frequency

### Phase Issues
1. Reduce reverb mix
2. Increase high-pass filter
3. Use shorter decay
4. Sum to mono and check

## FL Studio Integration

### Send Setup
1. Create Fruity Send
2. Insert LuxeVerb on send
3. Route instruments to send
4. Control wetness per track

### Automation
1. Pre-delay for builds
2. Decay time changes
3. Mix for breakdowns
4. High-pass automation

### Sidechain
1. Insert Fruity Limiter
2. Key to kick
3. Threshold -20dB
4. Attack/release for feel
