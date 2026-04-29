# Fruity Voltage Controller: Common Mistakes

## Hardware Setup Mistakes

### #1: Using AC-Coupled Interface

**Mistake:** Standard audio interface blocks DC voltage.

**Symptom:** Multimeter reads 0V on output.

**Reality:** Most interfaces filter out DC. [SRC: IL-MAN]

**Fix:** Use DC-coupled interface (MOTU, Expert Sleepers, specific RME models).

### #2: No Audio Return Path

**Mistake:** Expecting to hear sound directly from Voltage Controller.

**Reality:** Plugin outputs CV (control), not audio. [SRC: IL-MAN]

**Correct Setup:**
```
Voltage Controller ──► Hardware ──► Audio Output ──► FL Input
      (CV out)           (sound)       (audio)         (record)
```

### #3: Wrong Voltage Range

**Mistake:** Using 10V range for 5V-max module.

**Risk:** Can damage sensitive modules.

**Fix:** Start with 5V range [SRC: IL-MAN], check module specs.

### #4: Bipolar When Unipolar Needed

**Mistake:** Using bipolar for gates/triggers.

**Symptom:** Negative voltage confuses envelope generator.

**Fix:** Use unipolar for gates (0V to +5V).

## Configuration Mistakes

### #5: Wrong Pitch Scale

**Mistake:** Using 1V/Oct for Buchla hardware (needs 1.2V/Oct).

**Symptom:** Pitch tracking drifts across octaves.

**Fix:** Match scale to hardware standard [SRC: IL-MAN].

### #6: Not Calibrating

**Mistake:** Assuming perfect calibration out of box.

**Symptom:** Pitch slightly off across range.

**Fix:** Always calibrate C4-C5 before recording.

### #7: Gate vs Trigger Confusion

**Mistake:** Using Trigger for sustained notes.

**Symptom:** Envelope releases immediately (no sustain).

**Fix:** Use Gate for sustained notes, Trigger only for percussion.

### #8: Multiple Outputs Not Routed

**Mistake:** Assuming Out 2-4 work automatically.

**Symptom:** No output on secondary channels.

**Fix:** Enable mixer tracks 11, 12, 13 or use Automap [SRC: IL-MAN].

## Creative Mistakes

### #9: Stepped Modulation

**Mistake:** Low-resolution automation causing stepped CV.

**Symptom:** Filter sweeps sound quantized/robotic.

**Fix:** Use high-resolution automation curves.

### #10: Static Values

**Mistake:** No automation = boring.

**Fix:** Automate Offset for movement, even subtle (±0.5V).

### #11: Ignoring Velocity

**Mistake:** Not using velocity to VCA mapping.

**Fix:** Map velocity to hardware VCA for dynamic expression.

### #12: Clock Too Fast

**Mistake:** 96 PPQ for simple analog sequencer.

**Symptom:** Sequencer advances too quickly.

**Fix:** Match PPQ to hardware requirements (often 16 or 24).

## Safety Mistakes

### #13: Exceeding Voltage Specs

**Risk:** Damaging expensive modules.

**Prevention:** Always check module input voltage limits.

### #14: No Multimeter Verification

**Risk:** Sending wrong voltages blind.

**Fix:** Always verify with multimeter before connecting new modules.

### #15: Hot-Swapping Cables

**Risk:** Short circuits, pops, module damage.

**Fix:** Power down before re-patching.

## Quick Fix Reference

| Symptom | Most Likely Fix |
|---------|----------------|
| No CV output | Get DC-coupled interface |
| No sound | Route hardware audio back to FL |
| Wrong pitch | Calibrate or check scale [SRC: IL-MAN] |
| Gate doesn't trigger | Increase offset, verify Mod Source |
| Multiple outs dead | Enable tracks 11-13 |
| Stepped modulation | Increase automation resolution |

---

**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03
