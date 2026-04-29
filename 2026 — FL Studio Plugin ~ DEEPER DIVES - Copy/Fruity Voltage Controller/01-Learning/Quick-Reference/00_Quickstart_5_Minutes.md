# Fruity Voltage Controller: 5-Minute Quickstart

## Prerequisites

- DC-coupled audio interface (MOTU, Expert Sleepers, etc.)
- External analog hardware (Eurorack or semi-modular)
- Cables to connect interface outputs to hardware
- Multimeter (recommended for calibration)

## Minute 1: Verify DC Coupling

### Test Your Interface
1. Load **Fruity Voltage Controller** on any mixer track
2. Set **Mod Source** to **None (0 V)**
3. Set **Offset** to **+5V**
4. Set **Polarity** to **Unipolar**
5. Connect multimeter to interface output
6. **Should read ~5V DC** (not 0V)

**If 0V:** Your interface is AC-coupled. You need a DC-coupled interface.

## Minute 2: Basic Pitch Setup

### Configure Pitch Output
1. **Left channel** settings:
   - Mod Source: **Pitch**
   - Scale: **1.0**
   - Offset: **0.0**
   - Polarity: **Unipolar**
2. Connect Left output to hardware oscillator **1V/Oct input**
3. Connect hardware audio output to audio interface input

## Minute 3: Basic Gate Setup

### Configure Gate Output
1. **Right channel** settings:
   - Mod Source: **Gate**
   - Scale: **1.0**
   - Offset: **+2V**
   - Polarity: **Unipolar**
2. Connect Right output to **envelope generator gate input**
3. Connect envelope output to hardware **VCA or filter**

## Minute 4: Calibrate Pitch

### One-Minute Calibration
1. Play **C4** in Piano Roll
2. Hardware should play **C**
3. Play **C5** in Piano Roll
4. Should be exactly one octave higher
5. **If not:** Adjust **Settings → Pitch scale** [SRC: IL-MAN]
   - Try 1.2V/Oct if 1V/Oct doesn't track

## Minute 5: Play a Sequence

### Test Sequence
1. Enter notes in Piano Roll:
   - C3 (long note for 808-style)
   - E3, G3, F3 (melodic movement)
2. Should hear hardware responding
3. Adjust **note lengths** to control gate duration
4. Adjust **velocity** if mapped to VCA

## Starting Settings (Copy This)

```
Global Settings:
  Pitch scale: 1V/Oct
  Voltage range: 5V
  Clock resolution: 24 PPQ

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

## Common Quick Fixes

| Problem | 10-Second Fix |
|---------|---------------|
| No sound from hardware | Check audio return to FL, not just CV out |
| Pitch wrong | Check Pitch Scale (1V vs 1.2V) [SRC: IL-MAN] |
| No gate trigger | Increase Offset to +3V, check Mod Source = Gate |
| Clock not syncing | Match PPQ to hardware (24 is standard) |
| Multiple outputs dead | Enable tracks 11, 12, 13 for Out 2-4 [SRC: IL-MAN] |

## Next Steps

1. **Read:** Common Mistakes (avoid pitfalls)
2. **Try:** Velocity to VCA mapping for dynamics
3. **Explore:** Automation on Offset for filter sweeps
4. **Calibrate:** Fine-tune for perfect pitch tracking

---

**Time:** 5 minutes
**Success Metric:** Hardware plays sequences from FL Piano Roll
**Source:** IL-MAN
**Last Updated:** 2026-02-03
