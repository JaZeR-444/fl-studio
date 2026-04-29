# Fruity Voltage Controller: Vibe Starting Points - Moody

## Vibe Definition
Slow, evolving, atmospheric control—perfect for ambient analog textures and dark bass.

## Core Template

```
Global:
  Pitch Scale: 1V/Oct
  Voltage Range: 5V

Left Channel:
  Mod Source: Pitch
  Offset: 0.0
  Scale: 1.0

Right Channel:
  Mod Source: Gate (long duration)
  Offset: 2.0

Modulation Channels (Out 2-4):
  Mod Source: Automation on Offset
  Slow ramps: 4-8 bars
  Target: Filter cutoff, PWM
```

## Variations

### Variation A: Drone Texture
**Setup:**
- Long held notes (8+ bars)
- Filter cutoff automated slowly (0.1Hz)
- PWM subtle wobble
- Result: Living, breathing drone

### Variation B: Dark Bass
**Setup:**
- Slow attack envelope on hardware
- Filter barely open
- Long decay (4s+)
- Result: Moody sub bass

### Variation C: Evolving Pad
**Setup:**
- Chord progression, slow changes
- Filter opens gradually over 8 bars
- Velocity low for intimacy
- Result: Atmospheric bed

## Routing

```
Voltage Controller ──► Analog VCO ──► Filter ──► VCA ──► FL Input
                         ↓
                    Envelope (slow)
                         ↓
                    Filter cutoff (automated)
```

## Automation Patterns

### Slow Filter Sweep
```
Automation: Ramp from 0V to 5V over 8 bars
Result: Gradual opening of filter
```

### Breathing PWM
```
Automation: Sine wave, 0.05Hz, ±0.5V
Result: Subtle pulse width movement
```

## Pitfalls

| Don't | Why | Instead |
|-------|-----|---------|
| Fast gates | Breaks atmosphere | Long gate durations |
| High PPQ clocks | Too rhythmic | No clock or 2-4 PPQ |
| Stepped modulation | Robotic | Smooth automation curves |
| Bipolar polarity | Unnecessary | Unipolar 0-5V |

---

**Vibe:** Moody
**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03
