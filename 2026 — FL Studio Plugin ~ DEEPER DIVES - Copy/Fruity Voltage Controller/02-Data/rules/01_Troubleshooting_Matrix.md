# Fruity Voltage Controller: Troubleshooting Matrix

## Problem → Diagnosis → Solution

### No CV Output

| Check | Action | Expected |
|-------|--------|----------|
| Interface | Test with multimeter (None + 5V offset) | Should read ~5V DC |
| Plugin | Verify ON button enabled | LED/checkbox on |
| Routing | Check mixer track routing | Signal reaching outputs |

**If 0V on multimeter:** Interface is AC-coupled. Need DC-coupled interface [SRC: IL-MAN].

---

### Wrong Pitch / Drifting

| Symptom | Cause | Solution |
|---------|-------|----------|
| Flat/sharp octaves | Wrong pitch scale | Switch 1V/Oct ↔ 1.2V/Oct [SRC: IL-MAN] |
| Drift over time | Hardware not warmed up | Wait 15 minutes, recalibrate |
| Overall detuned | Calibration off | Recalibrate C4-C5 |
| Glitchy jumps | Stepped automation | Use higher resolution |

**Calibration Procedure:**
1. Play C4, note voltage (should be 4.00V)
2. Play C5, should be 5.00V (exactly +1V)
3. Adjust Pitch Scale until perfect
4. Check multiple octaves

---

### Gate Not Triggering

| Symptom | Cause | Solution |
|---------|-------|----------|
| No envelope | Wrong Mod Source | Set to Gate, not Trigger [SRC: IL-MAN] |
| Weak trigger | Offset too low | Increase to +3V |
| Negative gate | Bipolar polarity | Switch to Unipolar |
| Double triggers | Note overlap | Shorten note or use legato mode |

---

### Multiple Outputs Dead

| Symptom | Cause | Solution |
|---------|-------|----------|
| Out 2-4 silent | Tracks not enabled | Enable mixer tracks 11-13 |
| No routing | Output assignment | Use Automap [SRC: IL-MAN] |
| Wrong track | Offset math | Out 2 = Track 11, Out 3 = 12, etc. |

---

### Clock Out of Sync

| Symptom | Cause | Solution |
|---------|-------|----------|
| Too fast | PPQ too high | Reduce to 16 or 24 |
| Too slow | PPQ too low | Increase to match hardware |
| Wonky timing | FL tempo drift | Lock to tempo, check BPM |
| No clock | Wrong Mod Source | Set to Clock |

**Common PPQ Values:**
- 24 PPQ: MIDI standard, most drum machines
- 16 PPQ: Analog sequencers
- 4 PPQ: Slow divisions

---

### Modulation Stepped/Robotic

| Symptom | Cause | Solution |
|---------|-------|----------|
| Stepped filter | Low automation resolution | Increase event density |
| Quantized sound | Snap to grid | Disable snap or use finer grid |
| Zipper noise | Too few points | Add more control points |

---

## Specific Scenarios

### "Worked yesterday, not today"

**Checklist:**
- [ ] Hardware powered on?
- [ ] Cables still connected?
- [ ] Calibration drifted (recalibrate)?
- [ ] Interface settings changed?
- [ ] Different FL project?

### "Pitch correct, but wrong octave"

**Fix:**
- Voltage Controller sends correct pitch
- Hardware oscillator may be in wrong octave range
- Check hardware octave switch/button

### "Notes cut off early"

**Fix:**
- Check Gate length in Piano Roll
- Extend note duration
- Or use Trigger for percussion only

---

## Emergency Reset

If completely messed up:

1. **Reset plugin:** Right-click → Init
2. **Start over:**
   ```
   Pitch Scale: 1V/Oct
   Voltage Range: 5V
   
   Left: Pitch, Offset 0, Scale 1.0
   Right: Gate, Offset 2.0, Scale 1.0
   ```
3. **Recalibrate**
4. **Reconnect hardware step by step**

---

**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03
