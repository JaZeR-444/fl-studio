# Mastering Workflow

## Goal
Final stage limiting for release-ready masters with competitive loudness.

## Plugin Settings

### Mastering Chain Position
| Position | Plugin |
|----------|--------|
| 1 | EQ (corrective) |
| 2 | Compressor (subtle) |
| 3 | Maximus (limiting) |
| 4 | Limiter (ceiling only) |

### Maximus Configuration
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Channel Mode | M/S | Frequency-specific control |
| Link | True | Stereo balance |
| Limiter Mode | Hard | Transparent limiting |

### Final Limiting Settings
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input Gain | +1 to +2 dB | Final push |
| Threshold | -2 to -4 dB | Gentle limiting |
| Ratio | 3 to 5 | Control peaks |
| Ceiling | -0.3 dB | Streaming headroom |
| Lookahead | Enabled | Precise control |

### M/S Tuning
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mid Threshold | -3 dB | Control bass/mids |
| Side Threshold | -4 dB | Control stereo width |
| Link M/S | False | Independent control |

## Workflow Steps

### Stage 1: Pre-Limiting
1. Ensure mix is balanced
2. Apply corrective EQ
3. Subtle compression if needed
4. Check mono compatibility

### Stage 2: Initial Limiting
1. Set ceiling to -0.3dB
2. Threshold for 1-3dB gain reduction
3. This is your loudness ceiling

### Stage 3: M/S Tweaking
1. Listen mid channel separately
2. Check bass frequencies in mono
3. Listen sides for width
4. Adjust thresholds independently

### Stage 4: Loudness Target
| Target | LUFS | True Peak |
|--------|------|-----------|
| Spotify | -14 | -1 dBTP |
| Apple Music | -16 | -1 dBTP |
| YouTube | -14 | -1 dBTP |
| CD/Audio | -9 | -0.1 dBTP |

## Reference Comparison

### Level Matching
1. Import reference track
2. Match LUFS with utility gain
3. A/B every 30 seconds
4. Trust your ears

### What to Compare
- Low-end weight and punch
- High-end clarity
- Stereo width
- Dynamic range
- Overall energy

## A/B Testing Method

### Quick Reference Test
1. Load commercial reference
2. Match loudness with utility
3. Switch between tracks
4. Note 3 differences minimum

### Long Form Test
1. Play full song
2. Switch references every chorus
3. Note arrangement differences
4. Mix decisions based on genre

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Not loud enough | Increase input gain |
| Too distorted | Raise threshold |
| Phasing | Check mono sum |
| Harsh highs | M/S: lower side threshold |
| Weak bass | M/S: lower mid threshold |

## FL Studio Tips

### Metering
- Use SPAN for spectrum analysis
- Use OTT for true peak monitoring
- Use waveform for visual reference

### Dithering
- Apply at 24-bit to 16-bit
- Use UV22HR or Apogee Soft Limit
- Only at final export

### Export Settings
| Format | Settings |
|--------|----------|
| WAV | 24-bit, 48/96kHz |
| MP3 | 320kbps CBR |
| FLAC | 24-bit (streaming) |
