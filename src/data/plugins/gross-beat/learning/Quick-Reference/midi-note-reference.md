# Gross Beat MIDI Note Reference

## Complete MIDI Mapping

### Time Slots (C1 - B3)

| Note | Slot | Common Use | Category |
|------|------|------------|----------|
| **C1** | 1 | Normal/Pass-through | Speed |
| **C#1** | 2 | Half-Time | Speed |
| **D1** | 3 | Double-Time | Speed |
| **D#1** | 4 | Triplets | Speed |
| **E1** | 5 | Variable Speed 1 | Speed |
| **F1** | 6 | Variable Speed 2 | Speed |
| **F#1** | 7 | 1/4 Stutter | Stutter |
| **G1** | 8 | 1/8 Stutter | Stutter |
| **G#1** | 9 | 1/16 Stutter | Stutter |
| **A1** | 10 | 1/32 Stutter | Stutter |
| **A#1** | 11 | Triplet Stutter | Stutter |
| **B1** | 12 | Dotted Stutter | Stutter |
| **C2** | 13 | Random Glitch | Glitch |
| **C#2** | 14 | Reverse Sim | Glitch |
| **D2** | 15 | Chop Pattern 1 | Glitch |
| **D#2** | 16 | Chop Pattern 2 | Glitch |
| **E2** | 17 | Chop Pattern 3 | Glitch |
| **F2** | 18 | Stutter Burst | Glitch |
| **F#2** | 19 | Tape-Stop | Tape |
| **G2** | 20 | Slow-Start | Tape |
| **G#2** | 21 | Spinback | Tape |
| **A2** | 22 | Scratch Forward | Tape |
| **A#2** | 23 | Scratch Back | Tape |
| **B2** | 24 | Turntable Stop | Tape |
| **C3** | 25 | Pitch Drop 1 | Special |
| **C#3** | 26 | Pitch Drop 2 | Special |
| **D3** | 27 | Pitch Rise 1 | Special |
| **D#3** | 28 | Pitch Rise 2 | Special |
| **E3** | 29 | Wobble Effect | Special |
| **F3** | 30 | Vibrato Pattern | Special |
| **F#3** | 31 | Empty/Init | Utility |
| **G3** | 32 | Utility 1 | Utility |
| **G#3** | 33 | Utility 2 | Utility |
| **A3** | 34 | Utility 3 | Utility |
| **A#3** | 35 | Utility 4 | Utility |
| **B3** | 36 | Utility 5 | Utility |

### Volume Slots (C4 - B6)

| Note | Slot | Pattern Type | Use Case |
|------|------|--------------|----------|
| **C4** | 1 | Full Volume | Bypass/Normal |
| **C#4** | 2 | 1/4 Gate | Four-on-floor |
| **D4** | 3 | 1/8 Gate | Bouncy rhythm |
| **D#4** | 4 | 1/16 Gate | Trap style |
| **E4** | 5 | 1/32 Gate | Ultra-tight |
| **F4** | 6 | Triplet Gate | Swing feel |
| **F#4** | 7 | Dotted 1/8 | Funk rhythm |
| **G4** | 8 | Dotted 1/4 | Disco feel |
| **G#4** | 9 | 1/4 + 1/8 Mix | Complex |
| **A4** | 10 | 1/8 + 1/16 Mix | Layered |
| **A#4** | 11 | Random Gate | Texture |
| **B4** | 12 | Burst Pattern 1 | Fill effect |
| **C5** | 13 | Burst Pattern 2 | Build-up |
| **C#5** | 14 | Fade In | Introduction |
| **D5** | 15 | Fade Out | Ending |
| **D#5** | 16 | Crescendo | Build |
| **E5** | 17 | Decrescendo | Cool down |
| **F5** | 18 | Sidechain 4/4 | Standard duck |
| **F#5** | 19 | Sidechain 2/4 | Half duck |
| **G5** | 20 | Sidechain 1/4 | Quarter duck |
| **G#5** | 21 | Exp. Curve Fast | Snappy duck |
| **A5** | 22 | Exp. Curve Slow | Smooth duck |
| **A#5** | 23 | Log. Curve | Pumping |
| **B5** | 24 | S-Curve | Natural duck |
| **C6** | 25 | Stutter Gate 1 | Vocal chop |
| **C#6** | 26 | Stutter Gate 2 | Melodic chop |
| **D6** | 27 | Stutter Gate 3 | Drum chop |
| **D#6** | 28 | Stutter Gate 4 | Effect chop |
| **E6** | 29 | Half Volume | Subtle |
| **F6** | 30 | Quarter Volume | Very subtle |
| **F#6** | 31 | Empty/Init | Utility |
| **G6** | 32 | Utility 1 | Custom |
| **G#6** | 33 | Utility 2 | Custom |
| **A6** | 34 | Utility 3 | Custom |
| **A#6** | 35 | Utility 4 | Custom |
| **B6** | 36 | Utility 5 | Custom |

---

## Quick Reference by Genre

### Hip-Hop Essentials
```
Time Slots:
  C1  - Normal (reference)
  C#1 - Half-time (main effect)
  F#1 - 1/4 stutter (verse spice)
  G1  - 1/8 stutter (fills)
  F#2 - Tape-stop (transitions)

Volume Slots:
  C4  - Full (dry)
  D#4 - 1/16 gate (trap feel)
  F5  - Sidechain 4/4 (groove)
```

### Trap Essentials
```
Time Slots:
  C#1 - Half-time
  G1  - 1/8 stutter
  G#1 - 1/16 stutter (fast rolls)
  C2  - Random glitch

Volume Slots:
  D#4 - 1/16 gate (standard)
  E4  - 1/32 gate (ultra-trap)
  C6  - Stutter gate (hihats)
```

### EDM Essentials
```
Time Slots:
  D1  - Double-time (builds)
  F#1 - 1/4 stutter
  F2  - Stutter burst (drops)
  F#2 - Tape-stop (breakdowns)

Volume Slots:
  D4  - 1/8 gate
  F5  - Sidechain 4/4
  G#5 - Exp. Curve Slow
  D#5 - Crescendo (build-ups)
```

---

## MIDI Note Numbers (Alternative Reference)

| Note | MIDI # | Slot Type | Slot # |
|------|--------|-----------|--------|
| C1 | 24 | Time | 1 |
| C#1 | 25 | Time | 2 |
| D1 | 26 | Time | 3 |
| ... | ... | ... | ... |
| B3 | 59 | Time | 36 |
| C4 | 60 | Volume | 1 |
| C#4 | 61 | Volume | 2 |
| ... | ... | ... | ... |
| B6 | 95 | Volume | 36 |

---

## Keyboard Layout Tips

### Two-Handed Playing
```
Left Hand (Time):     Right Hand (Volume):
  C1-B1 (Octave 1)      C4-B4 (Octave 4)
  C2-B2 (Octave 2)      C5-B5 (Octave 5)
  C3-B3 (Octave 3)      C6-B6 (Octave 6)
  
Play time effects      Add gates/ducking
with left hand         with right hand
```

### One-Handed Quick Access
```
Most used on easy reach:
  C1  - Normal
  C#1 - Half-time
  F#1 - 1/4 stutter
  G1  - 1/8 stutter
  F#2 - Tape-stop
  
  C4  - Full volume
  D#4 - 1/16 gate
  F5  - Sidechain
```

### Drum Pad Mapping (for controllers)
```
Typical 4x4 pad layout:

┌────┬────┬────┬────┐
│ C1 │ C#1│ D1 │ D#1│  Row 1: Speeds
├────┼────┼────┼────┤
│ F#1│ G1 │ G#1│ A1 │  Row 2: Stutters
├────┼────┼────┼────┤
│ F#2│ G2 │ G#2│ A2 │  Row 3: Tape effects
├────┼────┼────┼────┤
│ C4 │ D#4│ F5 │ C6 │  Row 4: Volume slots
└────┴────┴────┴────┘
```

---

## Velocity Mapping

Gross Beat responds to note velocity for dynamic control:

| Velocity Range | Effect | Application |
|----------------|--------|-------------|
| 1-32 | Subtle (25% Mix) | Background texture |
| 33-64 | Light (50% Mix) | Gentle effect |
| 65-96 | Medium (75% Mix) | Standard effect |
| 97-127 | Full (100% Mix) | Maximum impact |

**Tip:** Program different velocities for dynamic performances:
```
Verse:  Medium velocity (65-80)
Chorus: Full velocity (100-127)
Bridge: Light velocity (40-60)
```

---

## Common Chord Triggers

### Hip-Hop Pattern
```
C#1 (held) + F#1 (stabs) = Half-time with occasional stutters
F#2 (transition) = Tape-stop on bridge
F5 (automation) = Sidechain throughout
```

### Trap Build
```
C1 (intro) → C#1 (drop, held) 
+ D#4 (stabs) = Half-time with 1/16 gates
+ G1 (fills) = 1/8 stutters on transitions
```

### EDM Drop
```
F2 (held) = Stutter burst effect
+ F5 (sidechain) = Pumping compression feel
+ D1 (build) = Double-time before drop
```

---

## Troubleshooting MIDI

**Problem:** Wrong note triggers wrong slot
- Check: Is your controller transposed?
- Fix: Reset transpose to 0, use C1-B6 range

**Problem:** Can't reach all slots
- Option 1: Use octave shift on controller
- Option 2: Use two controllers
- Option 3: Program automation instead

**Problem:** Velocity not affecting intensity
- Check: Gross Beat settings
- Note: Some slots may ignore velocity
- Fix: Use Mix automation instead

---

## Source

MIDI mapping verified from:
- [SRC: IL-MAN] Image-Line Gross Beat manual
- FL Studio MIDI implementation chart
