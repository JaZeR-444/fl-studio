# Maximus Safety Rules

## Clipping Prevention

### Input Stage
- NEVER exceed -6 dB input gain
- Start with threshold at -6 dB
- Reduce input gain BEFORE lowering threshold

### Gain Staging
| Stage | Safe Level | Clipping Risk |
|-------|------------|---------------|
| Input | -6 to 0 dB | Above 0 dB |
| Limiting | -6 to -2 dB GR | Above 6 dB GR |
| Output | -0.5 dB ceiling | Above -0.1 dB |

### Output Ceiling
- ALWAYS set ceiling below 0 dB
- Recommended: -0.3 dB for streaming
- Never use hard clip mode at 0 dB

## Limiting Safety

### Gain Reduction Limits
| Genre | Maximum GR | Warning |
|-------|------------|---------|
| R&B/Ballads | 3 dB | 3-4 dB |
| Pop | 4 dB | 4-6 dB |
| Hip-Hop | 6 dB | 6-8 dB |
| EDM | 6 dB | 6-10 dB |

### Ratio Guidelines
| Application | Maximum Ratio | Recommended |
|------------|---------------|-------------|
| Mix glue | 4:1 | 2-3:1 |
| Master bus | 6:1 | 3-4:1 |
| Drum buss | 12:1 | 8-10:1 |
| Mastering | 4:1 | 2-3:1 |

### Attack Time Safety
| Sound | Minimum Attack | Purpose |
|-------|----------------|---------|
| Kicks | 0.02-0.1 ms | Punch preservation |
| Snares | 0.1-0.3 ms | Crack preservation |
| Masters | 0.3-1.0 ms | Natural transients |
| Glue | 2-5 ms | Transparency |

## Pumping Prevention

### Release Time Guidelines
| Tempo | Recommended Release | Purpose |
|-------|---------------------|---------|
| 140+ BPM | 25-40 ms | Tight control |
| 100-140 BPM | 50-80 ms | Standard |
| 70-100 BPM | 80-120 ms | Natural feel |
| Below 70 BPM | 120-200 ms | Smooth recovery |

### Sidechain Safety
- Use s/C for heavy limiting
- Threshold: -20 to -30 dB
- Range: 3-6 dB ducking
- Quick release for pump

## Genre-Specific Limits

### Hip-Hop/Trap
| Setting | Limit | Reason |
|---------|-------|--------|
| Gain Reduction | 8 dB max | Loud but safe |
| Attack | 0.1-0.3 ms | Preserve punch |
| Release | 40-60 ms | Tight low end |
| Ceiling | -0.2 dB | Loudness |

### R&B
| Setting | Limit | Reason |
|---------|-------|--------|
| Gain Reduction | 3 dB max | Preserve dynamics |
| Attack | 0.8-1.5 ms | Natural transients |
| Release | 150-200 ms | Smooth pumping |
| Ceiling | -0.5 dB | Headroom |

### EDM
| Setting | Limit | Reason |
|---------|-------|--------|
| Gain Reduction | 6 dB max | Energy preservation |
| Attack | 0.05-0.1 ms | Maximum loudness |
| Release | 30-50 ms | Density |
| Ceiling | -0.1 dB | Competitive loudness |

### Pop
| Setting | Limit | Reason |
|---------|-------|--------|
| Gain Reduction | 4 dB max | Balance |
| Attack | 0.3-0.5 ms | Clean transients |
| Release | 80-120 ms | Natural |
| Ceiling | -0.3 dB | Streaming safe |

## Common Mistakes to Avoid

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| Input too hot | Distortion before limiting | -6dB input max |
| Too much GR | Squashed, lifeless | 2-4dB typical |
| Wrong attack | Lost punch or distortion | Match to material |
| No ceiling | Digital clipping | Always set ceiling |
| Fast release | Pumping on bass | Increase release time |

## Quick Reference Limits

| Parameter | Maximum Safe | Warning Zone |
|-----------|--------------|--------------|
| Input Gain | +3 dB | +3 to +6 dB |
| Threshold | -2 dB | -2 to -6 dB |
| Ratio | 8:1 (12:1 max) | 8:1 to 12:1 |
| Attack | 0.02 ms | Too fast = distortion |
| Release | 20 ms | Too fast = pumping |
| Gain Reduction | 6 dB | 6-10 dB |
| Ceiling | -0.1 dB | Above -0.1 dB |
| Voices | 8 instances max | More = CPU strain |

## Loudness Targets

### Streaming Platforms
| Platform | Target LUFS | True Peak |
|----------|-------------|-----------|
| Spotify | -14 LUFS | -1 dBTP |
| Apple Music | -16 LUFS | -1 dBTP |
| YouTube | -14 LUFS | -1 dBTP |
| Amazon | -14 LUFS | -1 dBTP |

### Traditional
| Format | Target LUFS | True Peak |
|--------|-------------|-----------|
| CD | -9 LUFS | -0.1 dBTP |
| Vinyl | -12 LUFS | -1 dBTP |
| Radio | -16 LUFS | -1 dBTP |

## Troubleshooting

### Distorted Sound
1. Check input gain (reduce if >0)
2. Raise threshold (less limiting)
3. Increase attack time
4. Check for pre-limiting distortion

### Pumping on Kick
1. Increase release time
2. Enable s/C for ducking
3. Reduce ratio
4. Check bass frequency balance

### Lost Punch
1. Reduce attack time (0.1-0.2ms)
2. Enable s/C mode
3. Reduce gain reduction
4. Check transients in mono

### Not Loud Enough
1. Increase input gain (not ratio)
2. Reduce threshold carefully
3. Use multiband for frequency control
4. Reference commercial tracks

## FL Studio Integration

### Limiter Chain Position
1. EQ (corrective)
2. Compression (glue)
3. Maximus (limiting)
4. Limiter (ceiling only)

### Parallel Processing
1. Heavy limited signal to Fruity Send
2. Blend 30-50% with dry
3. Preserves dynamics + loudness

### Metering
- Use SPAN for spectrum
- Use OTT for true peak
- Use waveform for visual
- Reference with loudness meters
