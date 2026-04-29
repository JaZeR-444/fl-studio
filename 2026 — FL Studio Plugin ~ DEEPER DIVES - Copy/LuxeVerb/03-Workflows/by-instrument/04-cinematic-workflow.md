# Cinematic Reverb Workflow

## Goal
Create massive, cinematic spaces for dramatic effect, impacts, and atmospheric scoring.

## Plugin Settings

### Input Section
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Input | -6 dB | Massive headroom for tails |
| Low Cut | 40 Hz | Full low-end sweep |
| High Cut | 18 kHz | Complete frequency range |

### Early Reflections
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Size | 95-100 | Maximum hall size |
| Predelay | 30-50 ms | Clear definition |
| Diffusion | 95% | Maximum smoothness |

### Reverb Decay
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Time | 6.0-10.0 s | Epic, lasting tails |
| High Damping | 20% | Slow high-frequency decay |
| Low Damping | 0% | Deep, rumbling lows |

### Modulation
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mod Depth | 30% | Significant movement |
| Mod Rate | 0.08 Hz | Very slow evolution |

### Output
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Mix | 50-75% | Dominant reverb presence |
| Low Cut | 80 Hz | Deep bass extension |
| High Cut | 14 kHz | Controlled brightness |

## Genre Applications

### Cinematic Transitions (Moody)
- Time: 8.0s, Size: 100, Diffusion: 95%
- Modulation: 35% depth, 0.05Hz rate
- Epic, sweeping changes

### Impact Hits (Electric)
- Time: 6.0s, Size: 100, Diffusion: 90%
- Pre-delay: 40ms
- Massive sonic backdrop

### Score Elements (Melodic)
- Time: 10.0s, Size: 95, Diffusion: 98%
- High Damping: 25% for smoother decay
- Evolving, orchestral space

### Drum Swells (Deep Bass)
- Time: 5.0s, Size: 90, Diffusion: 85%
- Low damping for extended rumble
- Thunderous drum tails

## A/B Testing Method

### Test Sequence
1. Test with full mix vs individual elements
2. Check mono compatibility (phasing)
3. Listen for build-up over full decay
4. Compare different decay times

### Quick Fixes
| Issue | Solution |
|-------|----------|
| Too chaotic | Reduce modulation to 15% |
| Losing impact | Reduce mix to 40%, increase predelay |
| Clipping constantly | Reduce input gain to -12dB |
| Phasing in mono | Reduce size to 80, increase diffusion |

## FL Studio Tips

### Impact Reverb Chain
1. Impact sound
2. Transient shaper (boost attack)
3. LuxeVerb (cinematic settings)
4. Bus compressor (slow attack, fast release)
5. Limiter on output

### Transition Technique
1. Reverb on return track
2. High-pass filter on send at 200Hz
3. Automate send level from 0% to 70%
4. Release for dramatic effect

### Sidechain (Essential)
- Key to kick and snare
- Threshold: -30dB
- Ratio: 8:1
- Quick release (50ms)
- Creates space for transients
