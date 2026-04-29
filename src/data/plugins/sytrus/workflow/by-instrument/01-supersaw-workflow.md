# Sytrus SuperSaw Workflow

## Goal
Create massive, detuned stacked saw leads.

## Operator Setup

### Operator Roles
| Op | Role | Mix | Detune | Purpose |
|----|------|-----|--------|---------|
| 1 | Carrier | 100% | 0 | Main tone |
| 2 | Carrier | 90% | +5 to +7 | Width |
| 3 | Carrier | 80% | -5 to -7 | Width |
| 4 | Carrier | 70% | +10 to +14 | Depth |
| 5 | Carrier | 60% | -10 to -14 | Depth |
| 6 | Carrier | 50% | +20 to +25 | Width |

### Wave Selection
| Wave | Number | Character |
|------|--------|-----------|
| Sine | 1 | Fundamental |
| Triangle | 2 | Rich harmonics |
| Sawtooth | 2 | Bright, cutting |
| Square | 3 | Hollow, woody |

## Filter Settings

### Filter Routing
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Cutoff | 4500-5500 Hz | Presence |
| Resonance | 30-45% | Character |
| Drive | 10-25% | Warmth |
| Type | Low Pass | Smooth |

### Drive Guidelines
| Amount | Character | Use Case |
|--------|-----------|----------|
| 0-10% | Clean | Pure saw sound |
| 15-25% | Warm | Classic supersaw |
| 30-50% | Distorted | Aggressive |

## Envelope Design

### Amplitude Envelope
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Attack | 3-10 ms | Immediate |
| Decay | 150-250 ms | Initial fade |
| Sustain | 80-90% | Full sustain |
| Release | 100-200 ms | Quick release |

### Filter Envelope
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Attack | 10-20 ms | Slight delay |
| Decay | 200-400 ms | Swell |
| Sustain | 70-80% | Hold |
| Release | 300-500 ms | Fade out |

## Workflow Steps

### Stage 1: Base Tone
1. Operator 1: Saw, 100%, detune 0
2. Operator 2: Saw, 90%, detune +5
3. Operator 3: Saw, 80%, detune -5
4. Listen for basic stack

### Stage 2: Width Building
1. Add Operator 4: Saw, 70%, detune +10
2. Add Operator 5: Saw, 60%, detune -10
3. Add Operator 6: Saw, 50%, detune +15
4. Adjust levels for balance

### Stage 3: Filter
1. Start cutoff at 5000 Hz
2. Add resonance at 35%
3. Add drive at 15%
4. Adjust to taste

### Stage 4: Envelope
1. Fast attack for presence
2. Medium decay
3. High sustain
4. Quick release

## Genre Applications

### Big Room/EDM
| Setting | Value |
|---------|-------|
| Operators | 6 |
| Detune Max | 21 cents |
| Cutoff | 5200 Hz |
| Drive | 20% |

### Trance
| Setting | Value |
|---------|-------|
| Operators | 5-6 |
| Detune Max | 14 cents |
| Cutoff | 4800 Hz |
| Drive | 15% |

### Pop
| Setting | Value |
|---------|-------|
| Operators | 4-5 |
| Detune Max | 7 cents |
| Cutoff | 4500 Hz |
| Drive | 10% |

## A/B Testing Method

### Width Test
1. Play in stereo: Listen for width
2. Sum to mono: Check for phasing
3. Reduce detune if phasing occurs
4. Balance for mono compatibility

### Mix Test
1. Lower volume significantly
2. Lead should still be audible
3. Check frequency masking
4. Adjust EQ if needed

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Phasing in mono | Reduce detune spread |
| Too harsh | Lower cutoff to 4500 Hz |
| No presence | Increase cutoff to 5500 Hz |
| Too thin | Increase operator levels |
| No warmth | Add 15-20% drive |

## FL Studio Tips

### Layering
1. Main supersaw on center
2. Detuned layer at +3/-3 cents
3. Layer with sub sine
4. Layer with white noise for air

### Effects Chain
1. Sytrus output
2. Fruity Parametric EQ (+2dB at 3kHz)
3. Fruity Chorus (depth 30%, rate 0.3Hz)
4. Fruity Compressor (4:1, medium attack)
5. Fruity Limiter (ceiling -0.3dB)

### Sidechain
1. Key to kick
2. Threshold -15dB
3. Medium attack, fast release
4. 3-4dB ducking

### Automation Ideas
- Filter cutoff for builds
- Detune for evolution
- LFO rate for movement
- Reverb mix for space
