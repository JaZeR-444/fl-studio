# Sytrus FM Bass Workflow

## Goal
Create deep, harmonically rich FM bass sounds.

## Operator Setup

### Operator Roles
| Op | Role | Mix | Purpose |
|----|------|-----|---------|
| 1 | Carrier | 100% | Fundamental tone |
| 2 | Modulator | 70-90% | Harmonics 1 |
| 3 | Modulator | 50-70% | Harmonics 2 |
| 4 | Carrier/Mod | 40-60% | Depth |
| 5-6 | Optional | Varies | More complexity |

### Modulation Chain
| Configuration | Character | Use Case |
|--------------|-----------|----------|
| 1→2→3→4 | Complex, harsh | Dubstep |
| 1→2, 1→3 | Balanced | EDM |
| 1→2 (light) | Smooth | R&B |
| 1→2→3 (chain) | Metallic | Plucks |

### Wave Selection
| Wave | Carrier | Modulator | Result |
|------|---------|-----------|--------|
| Sine→Saw | Deep, warm | Bright harmonics | Classic FM |
| Sine→Sine | Very deep | Smooth | Smooth bass |
| Saw→Saw | Bright | Harsh | Aggressive |

## Filter Settings

| Parameter | Value | Purpose |
|-----------|-------|---------|
| Cutoff | 1500-2500 Hz | Deep to medium |
| Resonance | 30-50% | Body and character |
| Drive | 15-35% | Distortion |

## Envelope Design

### Amplitude Envelope
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Attack | 5-20 ms | Punch |
| Decay | 200-400 ms | Body |
| Sustain | 65-85% | Full sound |
| Release | 150-300 ms | Natural |

## Workflow Steps

### Stage 1: Carrier Setup
1. Operator 1: Sine, 100%, detune 0
2. This is your fundamental
3. All other operators modulate this

### Stage 2: Harmonics
1. Operator 2: Saw, 80%, modulate Op 1
2. Operator 3: Saw, 60%, modulate Op 1
3. Adjust levels for harmonics
4. Listen for "FM tone" emerging

### Stage 3: Depth
1. Operator 4: Sine, 50%, modulate Op 1
2. Adds depth and complexity
3. Higher = more modulation

### Stage 4: Filter
1. Low cutoff (1800-2200 Hz)
2. Medium resonance (35-45%)
3. Light drive (20%) for warmth

## Genre Applications

### Trap 808
| Setting | Value |
|---------|-------|
| Waves | Sine→Saw |
| Op1 Level | 100% |
| Op2-3 Level | 70-80% |
| Cutoff | 2000 Hz |

### Dubstep
| Setting | Value |
|---------|-------|
| Waves | Saw→Saw |
| Op1 Level | 100% |
| Op2-3 Level | 85-100% |
| Cutoff | 2500 Hz |
| Drive | 35% |

### R&B
| Setting | Value |
|---------|-------|
| Waves | Sine→Sine |
| Op1 Level | 100% |
| Op2-3 Level | 50-60% |
| Cutoff | 1500 Hz |
| Drive | 15% |

## A/B Testing Method

### Sub Test
1. High-pass all above 40Hz
2. Listen to fundamental only
3. Should be deep and clean
4. Add harmonics back gradually

### Mix Test
1. Add kick
2. Listen for frequency overlap
3. Adjust cutoff if muddy
4. Sidechain for space

## Quick Fixes

| Issue | Solution |
|-------|----------|
| No low end | Op1 at 100%, cutoff 1500 Hz |
| Too harsh | Reduce modulator levels |
| No character | Increase drive to 25% |
| Muddy | Increase cutoff to 2500 Hz |
| No punch | Faster attack (5ms) |

## FL Studio Tips

### Layering
1. FM bass on mid channel
2. Pure sine on sub channel
3. Blend for complete bass
4. Sidechain both to kick

### Effects Chain
1. Sytrus output
2. Fruity Parametric EQ (cut 400Hz if muddy)
3. Fruity Compressor (8:1, fast attack)
4. Fruity Limiter (ceiling -0.3dB)

### Sidechain (Essential)
1. Key to kick
2. Threshold -18dB
3. Fast attack, medium release
4. 4-6dB ducking

### Distortion
1. Add Fruity Wave Shaper
2. Light drive after Sytrus
3. Adds harmonics
4. Use sparingly
