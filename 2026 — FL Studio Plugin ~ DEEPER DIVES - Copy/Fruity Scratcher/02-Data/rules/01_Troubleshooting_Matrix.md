# Fruity Scratcher - Troubleshooting Matrix

## Problem → Diagnosis → Solution

| SYMPTOM | LIKELY CAUSE | DIAGNOSTIC STEPS | SOLUTION | PREVENTION |
|---------|--------------|------------------|----------|------------|
| **Plugin is completely silent** | SPD at 0x, Hold ON, or no sample loaded | 1. Check SPD knob (should be 1x)<br>2. Check Hold button (should be OFF)<br>3. Check sample is loaded | Set SPD to 1x, turn Hold OFF, load sample | Always verify SPD and Hold when starting |
| **Scratching feels "twitchy" or uncontrollable** | SEN (Sensitivity) too high for controller | 1. Check SEN value<br>2. Test with 1-inch mouse drag | Lower SEN to 40-50%, test, adjust incrementally | Match SEN to controller DPI/sensitivity |
| **Scratching feels sluggish or unresponsive** | ACC (Acceleration) too low or SEN too low | 1. Check ACC value<br>2. Check SEN value<br>3. Test platter drag | Raise ACC to 70-80%, raise SEN to 55-65% | Use "Universal Safe Starting Point" settings |
| **Tape stop sounds too fast/sudden** | ACC too high | 1. Check ACC value during automation<br>2. Test stop curve | Lower ACC to 25-35% for gradual stops | Plan ACC value based on desired stop character |
| **Tape stop sounds too slow/endless** | ACC too low | 1. Check ACC value<br>2. Verify automation duration | Raise ACC to 70-90% for quick stops | Use 80-95% ACC for instant/dramatic stops |
| **Digital artifacts / glitching during scratches** | Sample too long, sample rate mismatch, or CPU overload | 1. Check sample length<br>2. Verify sample rate matches project<br>3. Check CPU meter | Trim sample to < 10 sec, match sample rate, bounce to audio | Use short samples, normalize before loading |
| **Clipping / distortion during scratches** | Input sample too loud or no output limiting | 1. Check sample peak level<br>2. Check for limiter on channel<br>3. Monitor with dB meter | Normalize sample to -6 dB, add limiter (-3 dB ceiling) | Always normalize samples, use limiter |
| **MIDI controller not controlling platter** | No MIDI link or wrong MIDI settings | 1. Check MIDI link on platter<br>2. Verify controller in MIDI settings<br>3. Test MIDI signal | Right-click platter → Link to controller, enable controller in Options → MIDI | Document MIDI mappings for recall |
| **Sample plays backwards unintentionally** | REV button ON or negative SPD | 1. Check REV button state<br>2. Check SPD sign (+ or -) | Turn REV OFF, set SPD to positive value (e.g., 1x) | Verify REV and SPD before scratching |
| **Platter won't move / frozen** | Hold button ON | 1. Check Hold button state | Turn Hold OFF | Check Hold first when platter seems unresponsive |
| **Automation not working** | Automation clip not linked or muted | 1. Verify automation clip linked to SPD<br>2. Check clip is not muted<br>3. Verify automation is active | Link automation clip, unmute, ensure playback | Always test automation before recording |
| **Scratches sound harsh/brittle** | Sample too bright, no EQ, or high SPD values | 1. Check sample frequency content<br>2. Test with SPD < 1.5x<br>3. Add EQ and check | Add Parametric EQ 2, low-pass at 6-8 kHz, reduce SPD range | Use warm samples, apply subtractive EQ |
| **Scratches disappear in mono playback** | Stereo width issues (if using Stereo Enhancer) | 1. Check for Stereo Enhancer on channel<br>2. Test in mono (Mixer → Stereo separation) | Reduce stereo width or remove Stereo Enhancer | Always check mono compatibility |
| **Scratches sound "robotic" or unnatural** | Straight-line automation, high ACC, or no SEN variation | 1. Check automation curve type<br>2. Verify ACC setting<br>3. Test with manual scratching | Use curved automation (Bezier), lower ACC to 30-50%, add human timing | Avoid straight-line automation for creative FX |
| **Psychedelic effects sound dry/boring** | No FX chain (reverb/delay/phaser) | 1. Check insert FX slots<br>2. Verify FX are active | Add Reverb 2, Delay 3, Phaser to inserts | Psychedelic REQUIRES FX chain |
| **Can't find loaded sample** | Sample path broken or file moved | 1. Check FL Studio browser for missing files<br>2. Verify sample location | Relocate sample or reload from backup | Keep samples in project folder or dedicated library |
| **Performance lag / high CPU** | Long sample, multiple Scratcher instances, or low buffer | 1. Check sample length<br>2. Count Scratcher instances<br>3. Check audio buffer setting | Trim samples, bounce to audio, increase buffer size | Use short samples, commit scratches to audio |
| **Tape stop doesn't reach silence** | SPD automation doesn't reach 0x | 1. Check automation clip end value<br>2. Verify SPD at end of automation | Extend automation to SPD = 0x (0%) | Always automate to 0x for full stop |
| **Reverse swell doesn't peak at right time** | Automation timing misaligned or wrong ACC | 1. Check automation start/end points<br>2. Verify ACC setting<br>3. Test timing | Adjust automation duration, set ACC to 35-45% | Plan automation timing before drawing |
| **Scratches sound "digital" not "vinyl"** | High ACC, no Effector, or clean sample | 1. Check ACC value (should be lower for analog feel)<br>2. Check for Effector (vinyl mode) | Lower ACC to 30-50%, add Effector (vinyl mode) | Use lo-fi samples, apply vintage processing |
| **DVS setup not responding** | Timecode routing issue or unsupported format | 1. Verify audio interface routing<br>2. Check timecode format<br>3. Test with known-good timecode | Route timecode input correctly, use Serato CV02 [UNVERIFIED: other formats] | Document DVS routing, test before performance |
| **Scratches not rhythmic / off-beat** | No metronome, wrong tempo, or free-time scratching | 1. Enable metronome<br>2. Verify project tempo<br>3. Check scratch timing | Sync scratches to grid, use tempo-synced automation | Practice with metronome, quantize automation |
| **Sample won't load** | Unsupported format or corrupted file | 1. Check file format (WAV, MP3, etc.)<br>2. Try loading in Edison<br>3. Re-export sample | Convert to WAV 44.1 kHz 16-bit, reload | Use standard formats, test samples before sessions |

---

## Quick Diagnostic Flowchart

```
Scratcher Problem?
│
├─ Is it SILENT?
│  ├─ Check SPD (should be 1x, not 0x)
│  ├─ Check Hold (should be OFF)
│  └─ Check sample is loaded
│
├─ Is it UNCONTROLLABLE?
│  ├─ Check SEN (lower if twitchy)
│  └─ Check ACC (raise if sluggish)
│
├─ Is it GLITCHING?
│  ├─ Check sample length (< 10 sec)
│  ├─ Check sample rate (match project)
│  └─ Check CPU usage (bounce to audio)
│
├─ Is it CLIPPING?
│  ├─ Normalize sample to -6 dB
│  └─ Add Fruity Limiter (-3 dB ceiling)
│
├─ Is it NOT RESPONDING to MIDI?
│  ├─ Verify MIDI link (right-click platter)
│  └─ Check MIDI settings (Options → MIDI)
│
└─ Is it SOUNDING WRONG?
   ├─ Check automation curves (use Bezier, not straight)
   ├─ Check ACC (lower for analog feel)
   └─ Add FX chain (reverb/delay for depth)
```

---

## Error Messages & Warnings

| ERROR/WARNING | MEANING | SOLUTION |
|---------------|---------|----------|
| "Sample not found" | File path broken | Relocate sample or reload from backup |
| High CPU warning | Too many Scratcher instances or long samples | Bounce to audio, freeze tracks |
| Clipping indicator (red light) | Output exceeds 0 dB | Lower input sample level, add limiter |
| "MIDI device not found" | Controller disconnected or not configured | Reconnect controller, check MIDI settings |
| No waveform display | Sample not loaded or display issue | Reload sample, restart Scratcher |

---

## Common Misconceptions → Reality

| MISCONCEPTION | REALITY | IMPACT |
|---------------|---------|--------|
| "Scratcher can pitch-correct vocals" | Scratcher links speed and pitch (analog behavior); use Pitcher for independent pitch shift | Using wrong tool for the job |
| "High SEN is always better" | High SEN causes twitchy, uncontrollable scratching; match to controller | Poor control precision |
| "Automation is automatic" | Automation clips must be linked to parameters and unmuted | Automation doesn't work |
| "Scratcher works on full songs" | Optimized for short samples (< 10 sec); long samples cause lag | Performance issues |
| "Psychedelic vibe is built-in" | Psychedelic requires FX chain (reverb/delay/phaser); dry Scratcher is not psychedelic | Disappointing results |
| "Straight-line automation sounds good" | Straight lines sound robotic; use curved automation for organic feel | Unnatural effects |
| "Hold button doesn't matter" | Hold freezes platter; if ON accidentally, plugin seems broken | Plugin appears non-functional |
| "SPD at 0x is the same as paused" | SPD = 0x stops playback; Hold freezes position; different functions | Confusion about transport |

---

## Advanced Troubleshooting

### Issue: Feedback Loop Not Working [UNVERIFIED]

**Symptoms:** No self-feeding texture when routing Scratcher output back to input.

**Diagnosis:**
1. Check Send level (should be < 20% to avoid runaway feedback)
2. Verify routing: Scratcher out → Send (reverb/delay) → Scratcher in
3. Test with limiter on output

**Solution:**
- Keep send level LOW (10-15%)
- Add reverb/delay in Send chain (prevents harsh feedback)
- Monitor with limiter (-6 dB ceiling)

**Warning:** Can create sudden loud bursts—use limiter.

---

### Issue: Swung Scratching Not Sounding Jazzy

**Symptoms:** Scratches sound straight/robotic even with swing timing.

**Diagnosis:**
1. Check if scratching on exact 16th-note grid
2. Verify ACC setting (should be moderate, not high)
3. Check sample tone (should be warm, not bright)

**Solution:**
- Manually offset scratches slightly off-grid (±5-10 ms)
- Lower ACC to 50-60% for loose feel
- Use warm samples, add Parametric EQ 2 (boost 200-500 Hz, cut 8 kHz+)

---

### Issue: Vibe Doesn't Match Reference Track

**Symptoms:** Moody/upbeat/jazzy vibe doesn't sound like target.

**Diagnosis:**
1. Compare SPD/ACC settings to vibe guide
2. Check FX chain (is it complete?)
3. Verify sample selection (is it appropriate for vibe?)

**Solution:**
- Reference vibe starting points in `03_Vibe_Starting_Points_Moody.md` and `04_Vibe_Starting_Points_Upbeat_Psychedelic_Jazzy_Vibey.md`
- Add missing FX (moody needs reverb, psychedelic needs reverb+delay+phaser)
- Choose vibe-appropriate samples (dark for moody, bright for upbeat)

---

## Preventative Maintenance

### Daily/Session Checks
- [ ] Verify SPD at 1x before starting
- [ ] Check Hold is OFF
- [ ] Test MIDI controller responsiveness
- [ ] Monitor CPU usage

### Weekly Checks
- [ ] Clean up unused Scratcher channels
- [ ] Organize sample library
- [ ] Back up channel state presets
- [ ] Update FL Studio (bug fixes)

### Monthly Checks
- [ ] Audit channel state preset library
- [ ] Document new favorite settings
- [ ] Review and update MIDI mappings
- [ ] Test templates still work

---

## Getting Help

### When to Consult Official Manual
- DVS setup (timecode formats, routing)
- FL Studio-specific integration (MIDI settings, routing)
- Version-specific features

### When to Consult Forums/Community
- Creative technique ideas
- Genre-specific workflows
- Preset sharing
- Troubleshooting rare issues

### When to Experiment
- Vibe tweaking (no "wrong" answers)
- Creative automation curves
- FX chain variations
- Sample selection

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Sources:** [IL-MAN], [REPUTABLE], [TROUBLESHOOTING EXPERIENCE]
