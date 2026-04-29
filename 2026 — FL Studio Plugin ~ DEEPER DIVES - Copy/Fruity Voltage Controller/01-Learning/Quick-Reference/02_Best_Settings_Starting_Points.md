# Fruity Voltage Controller: Best Settings & Starting Points

## Universal Starting Template

```
Global Settings:
  Pitch scale: 1V/Oct
  Voltage range: 5V
  Clock resolution: 24 PPQ
  Automap outputs: Off

Left Channel (Pitch):
  Mod Source: Pitch
  Offset: 0.0
  Scale: 1.0
  Polarity: Unipolar

Right Channel (Gate):
  Mod Source: Gate
  Offset: +2.0
  Scale: 1.0
  Polarity: Unipolar
```

## Application-Specific Settings

### Analog Bass (808-Style)

```
Left: Pitch (1V/Oct)
Right: Gate (for envelope)
Notes: Long duration in Piano Roll (sustained)
Post-processing: Hardware filter for "pluck"
Result: Classic analog sub bass
```

### Lead Sequencing

```
Left: Pitch
Right: Gate
Velocity: Mapped to filter cutoff for expression
Scale: 1.0
Result: Expressive analog lead
```

### Pad Chords

```
Left: Pitch
Right: Gate (long duration)
Mod X: Mapped to filter for movement
Automation: Slow filter sweeps on Mod X
Result: Evolving analog pads
```

### Drum Machine Sync

```
Mod Source: Clock
PPQ: 24 (MIDI standard) or 16 (analog)
Connect to: Drum machine clock input
Result: Hardware drums synced to FL
```

## Hardware-Specific Notes

### Eurorack Modular
- Pitch scale: 1V/Oct [SRC: IL-MAN]
- Range: 5V
- Gates: 5V positive
- Calibrate carefully per module

### Moog Semi-Modular (Mother-32, etc.)
- Pitch scale: 1V/Oct [SRC: IL-MAN]
- Range: 5V
- Use KB (keyboard) input for pitch
- Gate input for envelope

### Buchla Systems
- Pitch scale: 1.2V/Oct [SRC: IL-MAN]
- Range: Check module specs (often wider)
- Different trigger standards

## Voltage Range Guidelines

| Range | Use Case | Caution |
|-------|----------|---------|
| **5V** | Standard, safe for most modules | Safe default |
| **10V** | Extended range | Check module specs |
| **±10V** | Bipolar modulation | Some modules can't handle negative |

## Mod Source Quick Guide

| Source | Voltage Range | Best For |
|--------|---------------|----------|
| **Pitch** | 0-5V (varies by note) | Oscillator pitch |
| **Gate** | 0-5V (note duration) | Envelopes |
| **Trigger** | Short impulse | Percussion, S&H |
| **Velocity** | 0-5V (by velocity) | Dynamic VCA |
| **Clock** | Pulses at PPQ rate | Sequencers |
| **None+Offset** | Manual control | Filter sweeps |

## Copy-Paste Settings

### Basic Voice (Copy This)
```yaml
Pitch Channel:
  Mod Source: Pitch
  Scale: 1.0
  Offset: 0.0
  Polarity: Unipolar

Gate Channel:
  Mod Source: Gate
  Scale: 1.0
  Offset: 2.0
  Polarity: Unipolar

Settings:
  Pitch Scale: 1V/Oct
  Voltage Range: 5V
```

### Modulation Setup (Copy This)
```yaml
Filter CV:
  Mod Source: None (0V)
  Scale: 1.0
  Offset: Automated 0-5V
  Polarity: Unipolar

VCA Control:
  Mod Source: Velocity
  Scale: 1.0
  Offset: 0.0
  Polarity: Unipolar
```

---

**Source:** IL-MAN
**Last Updated:** 2026-02-03
