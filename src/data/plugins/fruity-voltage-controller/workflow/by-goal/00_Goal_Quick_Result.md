# Workflow: Quick Result - First CV Setup

## Goal
Get from zero to sequencing hardware in 10 minutes.

## Prerequisites
- DC-coupled audio interface
- Hardware synth/module with 1V/Oct input
- Multimeter
- Cables

## Minute 1-2: Verify DC Coupling
1. Load Voltage Controller on any track
2. Set: None(0V), Offset +5V
3. Multimeter on output: should read ~5V

## Minute 3-4: Basic Connections
1. Left output → Hardware 1V/Oct input
2. Right output → Hardware gate/trigger
3. Hardware audio output → Audio interface input

## Minute 5-6: Calibration
1. Play C4 in Piano Roll
2. Adjust hardware to play C
3. Play C5
4. Should be exactly one octave higher
5. If not, adjust Pitch Scale (1V ↔ 1.2V)

## Minute 7-8: Gate Setup
1. Set Right channel: Mod Source = Gate
2. Set Offset: +2V
3. Play note in Piano Roll
4. Hardware envelope should trigger

## Minute 9-10: First Sequence
1. Enter simple melody: C3, E3, G3, F3
2. Adjust note lengths
3. Listen to hardware response
4. Success!

## Starting Settings
```
Global: 1V/Oct, 5V range
Left: Pitch, 0 offset, 1.0 scale
Right: Gate, +2 offset, 1.0 scale
```

## Verification
- [ ] Pitch tracks across octaves
- [ ] Gates trigger reliably
- [ ] Sound returns to FL
- [ ] Can record to Edison

---

**Time:** 10 minutes
**Success:** Hardware responds to FL sequences
**Source:** IL-MAN
**Last Updated:** 2026-02-03
