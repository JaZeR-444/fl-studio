# Fruity Scratcher - Common Mistakes

## The 15 Most Common Mistakes (And How to Fix Them)

### 1. **SEN (Sensitivity) Set Too High**
**Problem:** Platter feels "twitchy"—tiny mouse movements cause wild speed changes.

**Why it happens:** Default SEN may be too high for your mouse DPI or control style.

**Fix:**
- Lower SEN to 40-50% as a starting point [SRC: IL-MAN]
- High-DPI mouse users: 30-40%
- Low-DPI mouse users: 50-60%
- Test by dragging platter—it should feel smooth, not jerky

**Verification:** Move mouse 1 inch. Platter should rotate ~1-2 full rotations, not 5+.

---

### 2. **ACC (Acceleration) Set Too Low**
**Problem:** Platter feels "sticky" or "laggy"—doesn't respond immediately to clicks.

**Why it happens:** Low ACC simulates a slow belt-drive turntable. Great for realism, bad for tight scratching.

**Fix:**
- For responsive scratching: ACC = 70-90% [SRC: IL-MAN]
- For realistic turntable feel: ACC = 30-50%
- For tape stop effects: ACC = 20-40%

**Verification:** Click Play. Platter should reach full speed within 0.1-0.3 seconds (high ACC) or 0.5-1 second (low ACC).

---

### 3. **Using Long Samples (Full Songs)**
**Problem:** Plugin feels sluggish, unresponsive, or crashes.

**Why it happens:** Scratcher is optimized for short samples (1-10 seconds). Loading a 3-minute song taxes CPU and RAM.

**Fix:**
- Trim samples to the section you want to scratch (use Edison or Audio Clip trimming)
- Ideal length: 0.5-10 seconds
- For longer material, use Audio Clips or Wave Traveller instead

**Verification:** Sample waveform should fit cleanly in the Scratcher display window.

---

### 4. **Forgetting to Automate SPD for Tape Stops**
**Problem:** Manually dragging the platter for tape stops is imprecise and not repeatable.

**Why it happens:** Beginners don't realize SPD is automatable.

**Fix:**
1. Right-click SPD knob → Create automation clip
2. Draw a smooth ramp from 1x (100%) to 0x (0%) over desired duration
3. Adjust ACC to control "slope" of the stop (low ACC = gradual, high ACC = sudden)

**Verification:** Playback should produce identical tape stop every time (no manual intervention).

---

### 5. **Not Checking "Hold" Button**
**Problem:** Sample plays continuously instead of responding to scratching.

**Why it happens:** Hold mode stops platter interaction—useful for freeze/pause effects, but confusing if left on accidentally.

**Fix:**
- Check if "Hold" button is lit (active)
- Click Hold to toggle it off for normal scratching [SRC: IL-MAN]
- Use Hold intentionally for "pause-and-scratch" techniques

**Verification:** When Hold is OFF, clicking the platter should immediately move playback position.

---

### 6. **SPD Set to 0x (Zero)**
**Problem:** Plugin is silent.

**Why it happens:** SPD at 0x = paused (no playback speed).

**Fix:**
- Check SPD knob—should be at 1x for normal playback [SRC: IL-MAN]
- For reverse playback: -1x
- For half-speed: 0.5x

**Verification:** SPD at 1x should produce sample at original speed/pitch.

---

### 7. **Ignoring the Waveform Display**
**Problem:** Missing the exact "hit" point in a vocal sample (e.g., the "Hey!" in a "Hey! Yeah!" sample).

**Why it happens:** Scratching blind without visual cue points.

**Fix:**
- Use the waveform display to locate peaks (loud transients)
- Click directly on the waveform to jump to a specific point
- Zoom in (if available) for precision [UNVERIFIED: zoom function]

**Verification:** Clicking on a visible peak should trigger that transient immediately.

---

### 8. **Not Using Reverse (REV) for Backspins**
**Problem:** Trying to manually drag the platter backwards for reverse effects.

**Why it happens:** Not aware of dedicated Reverse button.

**Fix:**
- Click REV button to reverse playback direction [SRC: IL-MAN]
- Or set SPD to negative values (e.g., -1x for reverse at normal speed)
- Combine with scratching for authentic "backspin" DJ technique

**Verification:** REV active + SPD at -1x = sample plays backwards at normal speed.

---

### 9. **Scratching with Too Much Gain**
**Problem:** Clipping and distortion during fast scratches.

**Why it happens:** Rapid speed changes cause brief volume spikes.

**Fix:**
- Lower input sample volume before loading into Scratcher
- Or reduce Scratcher's channel volume to -3 to -6 dB
- Monitor with Fruity Limiter or dB Meter on the channel

**Verification:** Fast scratching should not trigger red clipping lights.

---

### 10. **Not Mapping MIDI Controllers Properly**
**Problem:** MIDI controller jog wheel doesn't control the platter.

**Why it happens:** Scratcher's platter position needs manual MIDI mapping.

**Fix:**
1. Right-click the platter area → Link to controller
2. Move your MIDI jog wheel or fader
3. Adjust sensitivity via the MIDI remote control settings
4. Set SEN in Scratcher to match controller response

**Verification:** Moving MIDI controller should visibly move the platter in sync.

**How to verify in FL Studio:**
- Options → MIDI Settings → Check controller is detected
- Tools → Last tweaked → Remote control settings → Verify link

---

### 11. **Using Scratcher for Pitch Correction**
**Problem:** Trying to fix off-key vocals.

**Why it happens:** Confusing Scratcher's pitch shifting (speed-linked) with formant-preserving pitch correction.

**Fix:**
- Use Pitcher or Newtone for pitch correction (time-independent pitch)
- Scratcher changes speed AND pitch together (analog vinyl behavior)
- Scratcher is for creative pitch effects, not corrective tuning

**Verification:** If you need "chipmunk effect" (faster + higher), use Scratcher. If you need "same speed, different key," use Pitcher.

---

### 12. **Forgetting to Normalize Samples Before Loading**
**Problem:** Sample is too quiet or inconsistent in volume.

**Why it happens:** Scratcher doesn't have built-in normalization.

**Fix:**
- Normalize samples in Edison or your sample editor before loading
- Or use Fruity Limiter on the Scratcher channel for consistent output level
- Target: -6 dB to -3 dB peak level

**Verification:** Waveform should fill most of the display, not be a thin line.

---

### 13. **Using Scratcher on the Master Bus**
**Problem:** Entire mix gets scratched (unintentional).

**Why it happens:** Inserting Scratcher on Master by mistake.

**Fix:**
- Scratcher belongs on individual channels or buses, NOT the master
- Remove from Master → Insert on a Sampler channel or Audio Clip channel

**Verification:** Only the intended sample should be affected by scratching.

---

### 14. **Not Saving Scratch Performances to Audio**
**Problem:** Live scratch performance is lost—can't reproduce it.

**Why it happens:** Scratching is real-time and manual (not MIDI-recorded by default).

**Fix:**
- Record your scratch performance to audio:
  1. Route Scratcher channel to Mixer track
  2. Arm track for recording (right-click track → Record to this track)
  3. Press Record and perform scratch
  4. Result: Audio clip of your performance
- Or use Automation Clip to program scratches (repeatable)

**Verification:** Recorded audio clip should contain your scratch performance, playable without further interaction.

---

### 15. **Not Adjusting ACC for Different Effects**
**Problem:** All tape stops sound the same (too fast or too slow).

**Why it happens:** ACC is a "set and forget" parameter for many users, but it's critical for effect character.

**Fix:**
- **Quick stop** (EDM riser): ACC = 80-100%
- **Gradual stop** (vinyl slowdown): ACC = 20-40%
- **Realistic turntable** (DJ scratching): ACC = 60-80%

**Verification:** Automate SPD from 1x to 0x. Low ACC should produce a slow, curved deceleration. High ACC should produce a fast, linear stop.

---

## Mistake Categories

### Setup Mistakes
- #3: Long samples
- #6: SPD at 0x
- #12: Un-normalized samples
- #13: Master bus insertion

### Control Mistakes
- #1: SEN too high
- #2: ACC too low
- #10: Improper MIDI mapping

### Workflow Mistakes
- #4: Manual tape stops
- #7: Ignoring waveform
- #14: Not recording performances

### Conceptual Mistakes
- #11: Using for pitch correction
- #5: Not understanding Hold
- #8: Not using Reverse

### Technical Mistakes
- #9: Gain too high
- #15: Not adjusting ACC

---

## Quick Diagnostic Checklist

**Plugin is silent:**
- [ ] Check SPD (should be 1x, not 0x)
- [ ] Check Hold button (should be OFF for normal playback)
- [ ] Check sample is loaded
- [ ] Check channel volume/routing

**Scratching feels wrong:**
- [ ] Check SEN (should be 40-60% for most users)
- [ ] Check ACC (should be 70-90% for responsive scratching)
- [ ] Check sample length (should be < 10 seconds)

**Automation not working:**
- [ ] Verify automation clip is linked to SPD parameter
- [ ] Check automation clip is enabled (not muted)
- [ ] Verify ACC is set appropriately for the effect

**MIDI controller not responding:**
- [ ] Verify MIDI link to platter position
- [ ] Check controller is enabled in MIDI settings
- [ ] Adjust SEN to match controller sensitivity

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Sources:** [IL-MAN], [REPUTABLE]
