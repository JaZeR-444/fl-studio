# Sytrus Pad Workflow

## Goal
Create rich, evolving FM pad textures.

## Operator Setup

### Pad Configuration
| Op | Role | Wave | Mix | Detune | Purpose |
|----|------|------|-----|--------|---------|
| 1 | Carrier | Sine | 90% | 0 | Fundamental |
| 2 | Carrier | Sine | 80% | +3 | Width |
| 3 | Carrier | Sine | 70% | -3 | Width |
| 4 | Modulator | Triangle | 40% | 0 | Warmth |
| 5-6 | Optional | Sine | 30% | Varies | Depth |

### Wave Selection
| Wave | Character | Best For |
|------|-----------|----------|
| Sine | Pure, warm | Smooth pads |
| Triangle | Rich | Electric pianos |
| Saw | Bright | Evolving pads |

## Filter Settings

| Parameter | Value | Purpose |
|-----------|-------|---------|
| Cutoff | 2000-3500 Hz | Dark to medium |
| Resonance | 15-30% | Subtle emphasis |
| Drive | 5-15% | Warmth |

## Envelope Design

### Amplitude Envelope
| Parameter | Value | Purpose |
|-----------|-------|---------|
| Attack | 100-200 ms | Smooth entry |
| Decay | 400-600 ms | Initial fade |
| Sustain | 70-85% | Hold level |
| Release | 500-1000 ms | Gentle fade |

## Workflow Steps

### Stage 1: Foundation
1. Operators 1-3: Sine waves
2. High levels (80-90%)
3. Subtle detuning (+/- 3 cents)
4. Creates wide, warm base

### Stage 2: Warmth
1. Operator 4: Triangle wave
2. Lower level (35-45%)
3. Modulates carrier operators
4. Adds FM warmth

### Stage 3: Depth
1. Operators 5-6: Optional
2. Even lower levels
3. Different detune values
4. Adds complexity

### Stage 4: Filter
1. Low cutoff (2500 Hz)
2. Low resonance (20%)
3. Minimal drive (10%)
4. Smooth character

## Genre Applications

### Ambient
| Setting | Value |
|---------|-------|
| Operators | 4-6 |
| Cutoff | 2000 Hz |
| Mod Rate | 0.1 Hz |
| Reverb Mix | 60% |

### R&B
| Setting | Value |
|---------|-------|
| Operators | 4 |
| Cutoff | 2800 Hz |
| Detune | 5 cents |
| Reverb Mix | 45% |

### Cinematic
| Setting | Value |
|---------|-------|
| Operators | 5-6 |
| Cutoff | 3000 Hz |
| Mod Depth | 40% |
| Reverb Mix | 55% |

## A/B Testing Method

### Texture Test
1. Play sustained chord
2. Listen for movement
3. Check for harshness
4. Verify smoothness

### Mix Test
1. Lower all other elements
2. Listen to pad in context
3. Check masking
4. Test mono compatibility

## Quick Fixes

| Issue | Solution |
|-------|----------|
| Too static | Increase LFO modulation |
| Too bright | Lower cutoff to 2000 Hz |
| No body | Increase operator levels |
| Too harsh | Reduce drive to 5% |
| No movement | Add LFO to filter cutoff |

## FL Studio Tips

### Layering
1. Create two pad layers
2. Slightly different settings
3. Detune slightly
4. Pan opposite

### Effects Chain
1. Sytrus output
2. Fruity Reverb (large hall)
3. Fruity Chorus (subtle)
4. Fruity Parametric EQ (corrective)
5. Fruity Limiter (output)

### Automation Ideas
- Filter cutoff for swells
- Mod depth for evolution
- Reverb mix for space
- LFO rate for movement
