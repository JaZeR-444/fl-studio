# Fruity Voltage Controller: Do / Don't Rules

## DO: Best Practices

### Hardware Setup

✅ **DO: Verify DC coupling first**
- Test with multimeter before connecting expensive modules
- 5V offset should read ~5V, not 0V [SRC: IL-MAN]

✅ **DO: Start with 5V range**
- Safe for most modules
- Increase only if needed and verified [SRC: IL-MAN]

✅ **DO: Calibrate before recording**
- C4-C5 should be exactly 1V apart (1V/Oct)
- Let hardware warm up 15 minutes

✅ **DO: Use quality cables**
- Shielded cables for CV
- Keep away from power cables

✅ **DO: Document your patches**
- Write down what goes where
- Save as FL project template

### Configuration

✅ **DO: Use Gate for sustained notes**
- Triggers are for percussion only
- Gate follows note duration [SRC: IL-MAN]

✅ **DO: Automate for movement**
- Even subtle offset changes add life
- Use smooth curves, not stepped

✅ **DO: Match pitch scale to hardware**
- 1V/Oct for most Eurorack
- 1.2V/Oct for Buchla [SRC: IL-MAN]

✅ **DO: Use velocity for dynamics**
- Map to VCA or filter
- Adds expression

### Safety

✅ **DO: Check module specs**
- Never exceed input voltage limits
- When in doubt, start low

✅ **DO: Power down to repatch**
- Avoid hot-swapping
- Prevents shorts and pops

✅ **DO: Monitor with multimeter**
- Check voltages before connecting new modules
- Verify calibration regularly

---

## DON'T: Common Pitfalls

### Hardware

❌ **DON'T: Use AC-coupled interface**
- Won't pass DC voltage
- Test with multimeter first [SRC: IL-MAN]

❌ **DON'T: Exceed voltage specs**
- Can damage modules
- Start with 5V range always

❌ **DON'T: Forget audio return path**
- CV out → Hardware → Audio in [SRC: IL-MAN]
- Don't expect sound from Voltage Controller

❌ **DON'T: Hot-swap cables**
- Power down first
- Prevents damage

### Configuration

❌ **DON'T: Skip calibration**
- Pitch will drift
- Always calibrate C4-C5

❌ **DON'T: Use wrong pitch scale**
- 1.2V/Oct on 1V/Oct hardware = out of tune
- Check hardware manual [SRC: IL-MAN]

❌ **DON'T: Use Trigger for sustained notes**
- Envelope releases immediately
- Use Gate for ADSR

❌ **DON'T: Enable outputs without routing**
- Out 2-4 need tracks 11-13 enabled
- Use Automap [SRC: IL-MAN]

### Creative

❌ **DON'T: Static values only**
- Boring without automation
- Add subtle movement

❌ **DON'T: Stepped automation**
- Sounds robotic
- Use smooth curves

❌ **DON'T: Ignore clock PPQ**
- Wrong PPQ = wrong tempo
- Match to hardware specs

---

## Quick Reference

| Situation | DO This | DON'T Do This |
|-----------|---------|---------------|
| First setup | Test DC coupling with multimeter | Assume interface works |
| New module | Check voltage specs | Send unknown voltages |
| Pitch issues | Calibrate C4-C5 | Ignore drift |
| No gate | Check Mod Source = Gate | Use Trigger |
| Boring sound | Add automation | Leave static |
| Multiple outs | Enable tracks 11-13 | Forget routing |

---

**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03
