# Workflow: Hardware Integration

## Goal
Seamlessly integrate analog hardware into FL Studio workflow.

## Hybrid Production Chain

```
FL STUDIO (Digital)
  ↓
Piano Roll / Automation (sequencing)
  ↓
Voltage Controller (CV generation)
  ↓
DC-Coupled Interface (voltage output)
  ↓
HARDWARE (Analog)
  ↓
Synthesizer / Effects (sound generation)
  ↓
Audio Interface Input (back to digital)
  ↓
FL STUDIO (Recording / Mixing)
  ↓
Effects / Processing / Mastering
```

## Setup by Hardware Type

### Eurorack Modular
1. Voltage Controller L → VCO 1V/Oct
2. Voltage Controller R → Envelope gate
3. Audio out → Audio interface input

### Semi-Modular (Mother-32, etc.)
1. L → KB (pitch)
2. R → Gate (envelope trigger)
3. Audio out → Interface

### Drum Machine
1. Clock output → Drum machine clock in
2. Drum audio → Interface

---

## Recording Workflow

### Step 1: Sequence
- Use Piano Roll in FL
- Voltage Controller sends CV
- Hardware plays parts

### Step 2: Record
- Edison or Playlist recording
- Capture hardware audio

### Step 3: Process
- Apply FL effects
- Chop/manipulate as audio
- Mix with other tracks

### Step 4: Keep or Re-record
- Keep if perfect
- Re-sequence if needed
- MIDI stays editable

---

## Multi-Channel Efficiency

### 4-Voice Setup
```
Track 10: Voice 1 (Main)
Track 11: Voice 2 (Out 2)
Track 12: Voice 3 (Out 3)
Track 13: Voice 4 (Out 4)
```

**Benefit:** Layer multiple analog voices from one plugin instance.

---

**Source:** IL-MAN
**Last Updated:** 2026-02-03
