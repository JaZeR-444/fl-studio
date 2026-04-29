# Gross Beat Problem Solver

## Quick Diagnosis Table

| Problem | Check This | Likely Cause | Quick Fix |
|---------|------------|--------------|-----------|
| **No effect heard** | Mix control | Mix at 0% | Raise Mix to 50-100% |
| **Clicks and pops** | Attack time | Too fast (0-5ms) | Increase to 10-30ms |
| **Effect too subtle** | Wrong slot | Using init/blank slot | Select programmed slot |
| **Out of sync** | Grid snap | Snap disabled | Enable tempo sync |
| **Too extreme** | Slope angle | Too steep | Use gentler slopes |
| **Muddy sound** | Release time | Too long | Decrease to 20-50ms |
| **No MIDI response** | Routing | Wrong channel | Set correct MIDI input |
| **Wrong octave** | Note range | C0-C7 instead of C1-C6 | Use correct octave |

---

## Common Issues by Effect Type

### Half-Time Problems

**Issue: Sounds choppy or robotic**
- **Cause:** Attack too fast, not enough smoothing
- **Fix:** 
  1. Increase Attack to 20ms
  2. Increase Release to 40ms
  3. Use gentler slope (less steep)

**Issue: Pitch drop too extreme**
- **Cause:** Slope too steep (double-time instead of half-time)
- **Fix:**
  1. Adjust slope to approximately 22.5°
  2. Use Pos control to fine-tune
  3. Check if using correct slot

**Issue: Half-time sounds "phasey"**
- **Cause:** Mix with dry signal creating comb filtering
- **Fix:**
  1. Increase Mix to 100%
  2. Or use lower Mix (25-40%) for subtle effect
  3. Avoid 50-70% Mix for half-time

**Issue: 808s sound damaged**
- **Cause:** Low-end smear from time manipulation
- **Fix:** 
  1. See "Low-End Smear Warnings" workflow
  2. Consider parallel processing
  3. Or use on bus, not individual 808

### Stutter/Gating Problems

**Issue: Stutter has clicks**
- **Cause:** Sharp transitions without smoothing
- **Fix:**
  1. Add 5-15ms Attack
  2. Add 10-25ms Release
  3. Use "Smooth" option on envelope

**Issue: Gate timing off**
- **Cause:** Not synced to tempo or wrong grid
- **Fix:**
  1. Enable "Snap to grid"
  2. Set grid to 1/16 or 1/32
  3. Quantize MIDI notes if using triggering

**Issue: Gate pattern too fast/slow**
- **Cause:** Wrong note division
- **Fix:**
  1. 1/8 gate → use 1/16 for faster
  2. 1/16 gate → use 1/32 for fastest
  3. 1/4 gate → use 1/8 for slower feel

**Issue: Gated sound too quiet**
- **Cause:** Too much silence in pattern
- **Fix:**
  1. Make gates wider (less silence)
  2. Or raise overall channel volume
  3. Use volume automation to compensate

### Tape-Stop Problems

**Issue: Tape-stop sounds abrupt**
- **Cause:** Curve too steep at end
- **Fix:**
  1. Gradual curve that flattens at end
  2. Add volume fade in Volume slot
  3. Use 100-200ms Attack/Release

**Issue: Tape-stop doesn't "land" smoothly**
- **Cause:** Buffer position issue
- **Fix:**
  1. Adjust Pos control
  2. Trigger tape-stop at bar boundaries
  3. Ensure enough buffer content exists

**Issue: Speed change too linear**
- **Cause:** Straight line instead of curve
- **Fix:**
  1. Draw exponential curve
  2. Use "Smooth" option
  3. Hand-draw curve for natural feel

### MIDI Triggering Problems

**Issue: MIDI notes don't trigger slots**
- **Cause:** Wrong routing or disabled input
- **Fix:**
  1. Right-click Gross Beat title bar
  2. Select "Receive notes from"
  3. Choose correct controller/channel

**Issue: Wrong slots trigger**
- **Cause:** Octave offset
- **Fix:**
  1. C1-B1 = Time slots 1-12
  2. C4-B4 = Volume slots 1-12
  3. Check your controller octave settings

**Issue: Slots trigger at wrong time**
- **Cause:** MIDI timing or quantization
- **Fix:**
  1. Quantize MIDI notes in piano roll
  2. Check for MIDI delay compensation
  3. Use "Snap" in piano roll

**Issue: Can't trigger both Time and Volume**
- **Cause:** Trying to use same hand/notes
- **Fix:**
  1. Use different octaves (C1 for Time, C4 for Volume)
  2. Or use controller with pads + keys
  3. Program automation instead

---

## Technical Issues

### CPU/Performance Problems

**Issue: Dropouts during performance**
- **Causes & Fixes:**
  1. **Buffer size too small** → Increase in audio settings
  2. **Too many instances** → Freeze tracks, bounce to audio
  3. **CPU overload** → Disable HQ mode, freeze other tracks

**Issue: Latency when triggering**
- **Cause:** System buffer delay
- **Fix:**
  1. Reduce buffer size (trade-off with stability)
  2. Use ASIO drivers if available
  3. Enable "Use fixed size buffers" if needed

### Audio Quality Issues

**Issue: Crackling on effect**
- **Cause:** Attack too fast or CPU overload
- **Fix:**
  1. Increase Attack to 10ms minimum
  2. Increase audio buffer size
  3. Disable other CPU-intensive plugins

**Issue: Sound quality degraded**
- **Cause:** Extreme time manipulation
- **Fix:**
  1. This is normal for extreme effects
  2. Use more moderate slopes
  3. Consider using Newtime for cleaner stretching

**Issue: Stereo image affected**
- **Cause:** Phase issues from processing
- **Fix:**
  1. Check correlation meter
  2. Use mono compatibility mode if available
  3. Blend less (lower Mix %)

### Sync/Timing Issues

**Issue: Effect drifts from beat**
- **Cause:** Not tempo-synced or buffer wrap
- **Fix:**
  1. Enable tempo sync in Gross Beat
  2. Check project tempo matches
  3. Reset Pos to 0% at song start

**Issue: Slot switching not quantized**
- **Cause:** Snap disabled or freehand drawing
- **Fix:**
  1. Enable "Snap to grid"
  2. Set appropriate grid division
  3. Redraw envelopes with snap on

**Issue: Pos (Position) drifts**
- **Cause:** Automation or manual adjustment
- **Fix:**
  1. Automate Pos to reset at bar lines
  2. Use consistent Pos for entire sections
  3. Or set to 0% for real-time effects

---

## Workflow Solutions

### "I want cleaner half-time"
→ Use the workflow: `03-Workflows/by-goal/perfect-half-time.md`

### "My 808s sound messed up"
→ See: `03-Workflows/by-instrument/808-sub-bass.md`

### "Stutter sounds unprofessional"
→ Check: `03-Workflows/by-goal/trap-stutter-effects.md`

### "Tape-stop doesn't sound right"
→ Reference: `03-Workflows/by-goal/tape-stop-transitions.md`

### "Want to perform live with Gross Beat"
→ Read: `01-Learning/Concepts/midi-triggering-performance.md`

---

## Emergency Fixes

### "Everything sounds wrong"
1. **Reset Gross Beat:** Click "Init" to clear current slot
2. **Reset Mix:** Set to 50% (neutral starting point)
3. **Reset Pos:** Set to 0% (real-time playback)
4. **Reset Attack/Release:** Set to 20ms/30ms
5. **Select Slot 1:** Usually the default/normal slot

### "Can't hear any effect"
1. Check Mix is above 0%
2. Check you're not on an empty/init slot
3. Verify audio is passing through the channel
4. Check channel isn't muted
5. Try different slot (2-36)

### "Project is stuttering/crashing"
1. **Save project first!**
2. Freeze Gross Beat track
3. Increase audio buffer size
4. Disable HQ mode in Gross Beat
5. Consider bouncing to audio

---

## Prevention Checklist

Before committing to a Gross Beat effect:
- [ ] Attack set to 10ms+ (prevents clicks)
- [ ] Mix level appropriate for context
- [ ] Slot programmed and tested
- [ ] MIDI routing correct (if using)
- [ ] Grid snap enabled for tight timing
- [ ] Checked for low-end smear on bass
- [ ] Ready to commit to audio if needed

---

## Source References

Troubleshooting based on:
- [SRC: IL-MAN] Image-Line Gross Beat documentation
- Common user issues from FL Studio forums
- Professional mixing workflows
