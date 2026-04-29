# Fruity Voltage Controller: Core Techniques and Best Practices

## Essential Techniques

### 1. Calibration for Perfect Pitch

Critical for accurate hardware tracking [SRC: IL-MAN].

**Step-by-Step:**
1. Connect multimeter to CV output
2. Set Mod Source to "Pitch"
3. Play C4 in Piano Roll
4. Note voltage (should be 4.00V for 1V/Oct)
5. Play C5 in Piano Roll
6. Should read 5.00V (exactly 1V higher)
7. If not, adjust Pitch Scale setting
8. Repeat until octaves track perfectly

**Pro Tip:** Let hardware warm up 10-15 minutes before calibration.

### 2. Gate vs Trigger Selection

| Source | Behavior | Best For |
|--------|----------|----------|
| **Gate** | Voltage for full note duration | Envelope generators (ADSR) |
| **Trigger** | Short impulse on note-on | Sample & hold, percussion |

**Hip-Hop Application:**
- **808 bass:** Gate (sustained notes)
- **Hi-hats:** Trigger (short percussion)
- **Pads:** Gate (full ADSR)

### 3. Velocity to VCA Mapping

**Setup:**
- Mod Source: Velocity
- Output: Hardware VCA or VCA-equipped filter
- Result: Dynamic amplitude from FL velocity

**Application:**
```
Piano Roll velocity: 100 ──► 80% voltage ──► Louder sound
Piano Roll velocity: 50 ──► 40% voltage ──► Quieter sound
```

### 4. Multi-Timbral Control (Note Colors)

**Concept:** Different note colors control different hardware voices.

**Setup:**
1. Set Mod Source to "Note color 1" (Left channel)
2. Set Mod Source to "Note color 2" (Right channel)
3. In Piano Roll, assign different colors to different notes
4. Each color controls independent CV output

**Application:** Layering multiple analog voices with one plugin instance.

### 5. Clock Sync for Hardware Sequencers

**Setup:**
- Mod Source: Clock
- PPQ: Match hardware sequencer requirements (commonly 24 or 16)
- Connect to sequencer clock input

**Result:** Hardware sequencer advances in perfect sync with FL tempo.

### 6. Automation Offset Control

**Setup:**
- Mod Source: None (0V)
- Offset: Automated via clip
- Polarity: Unipolar or Bipolar

**Application:**
- Filter sweeps: Ramp offset from 0V to 5V
- Wah effects: Sine wave automation on offset
- Build-ups: Exponential ramp on filter CV

### 7. Scale Multiplier Tricks

**Formula:** Channel Output = Scale × (Mod Source + Offset)

**Applications:**
- **Inverted control:** Scale = -1.0 (response reversed)
- **Reduced range:** Scale = 0.5 (half the voltage)
- **Expanded range:** Scale = 2.0 (double voltage)

### 8. 4-Output Multi-Voice Setup

**Efficient Method:**
```
Track 10: Voltage Controller (Main outputs)
  → Voice 1 control

Track 11: Out 2 outputs
  → Voice 2 control

Track 12: Out 3 outputs
  → Voice 3 control

Track 13: Out 4 outputs
  → Voice 4 control
```

**Use Automap:** Settings → Automap outputs = On [SRC: IL-MAN]

### 9. Safe Voltage Ranges

**Never exceed module specifications:**
- Most Eurorack: -5V to +5V or 0-5V
- Some modules: Accept -10V to +10V
- Check manufacturer specs before connecting

**Safe Starting Point:** 5V range for all outputs [SRC: IL-MAN]

### 10. Polarity Selection

| Polarity | Use Case |
|----------|----------|
| **Unipolar** | Gates, triggers, positive modulation |
| **Bipolar** | Pitch bend, LFO-style modulation, audio-rate modulation |

---

## What to Listen For / Watch

### During Calibration
- [ ] C4-C5 = exactly 1V difference (for 1V/Oct)
- [ ] All octaves track correctly
- [ ] No pitch drift over time
- [ ] Glitch-free note transitions

### During Sequencing
- [ ] Tight timing (no latency issues)
- [ ] Gates trigger reliably
- [ ] No missed triggers
- [ ] Smooth CV transitions

### During Modulation
- [ ] No stepping (increase automation resolution if needed)
- [ ] No voltage spikes
- [ ] Smooth sweeps
- [ ] Predictable response

---

## Common Pitfalls and Fixes

### Pitfall 1: No CV Output

**Cause:** AC-coupled interface blocking DC [SRC: IL-MAN].

**Fix:** Use DC-coupled audio interface (MOTU, Expert Sleepers).

**Test:** Multimeter should read voltage on output.

### Pitfall 2: Pitch Drifting

**Causes:**
- Hardware not warmed up
- Wrong scale (1.2V/Oct selected for 1V/Oct hardware)
- Calibration drift

**Fixes:**
- Warm up 15 minutes
- Verify scale setting [SRC: IL-MAN]
- Recalibrate

### Pitfall 3: Gates Not Triggering

**Causes:**
- Wrong Mod Source selected
- Voltage too low
- Gate polarity wrong

**Fixes:**
- Confirm Mod Source = Gate
- Increase Offset to 2-3V
- Set Polarity = Unipolar

### Pitfall 4: Stepped/Clock-like Modulation

**Cause:** Automation resolution too low.

**Fix:** Use higher resolution automation or shorter control points.

### Pitfall 5: Multiple Voices Out of Tune

**Cause:** Each voice needs calibration.

**Fix:** Calibrate each Voltage Controller instance separately.

---

## Safety Rules

### Hardware Protection
1. **Never exceed input voltage specs**
2. **Always start with 5V range**
3. **Use offset to test before full modulation**
4. **Check patch twice before powering on**

### Signal Integrity
1. **Use quality cables**
2. **Keep CV cables away from power cables**
3. **Ground loops: Use same power source for computer and modular**
4. **Monitor with multimeter when in doubt**

---

**Source:** IL-MAN, REPUTABLE
**Last Updated:** 2026-02-03
