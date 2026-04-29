# Troubleshooting Matrix - Fruity Slicer 2

**Format:** Problem → Check → Diagnosis → Solution

---

## Slices Are Off-Beat

**Check:**
- What BPM did you set before slicing?
- Does it match the actual sample BPM?
- Did you auto-detect or manually enter BPM?

**Diagnosis:**
Incorrect BPM setting causing misaligned slices

**Solution:**
1. Clear current slices
2. Tap tempo or identify correct BPM
3. Enter correct BPM in Slicer
4. Re-run Auto-Slice
5. Verify timing against metronome

---

## Clicks/Pops at Slice Boundaries

**Check:**
- Are slices at zero-crossings?
- Zoom in on waveform at slice points
- Are slice envelopes too fast (instant attack)?

**Diagnosis:**
Slices cutting mid-waveform or envelope too aggressive

**Solution:**
1. Enable "Snap to zero-crossings" in settings
2. Manually adjust problematic slice markers
3. Add slight attack/release to envelope (5-10ms)
4. Re-slice if necessary

---

## Slices Won't Play

**Check:**
- Is sample loaded in Slicer?
- Are slices visible in waveform view?
- Is volume/velocity at 0%?
- Is track muted or routed incorrectly?

**Diagnosis:**
Audio not loaded, muted, or routing issue

**Solution:**
1. Verify sample is loaded (check waveform)
2. Check slice volume/velocity (should be >0%)
3. Check mixer routing (not muted, routed to master)
4. Test individual slices with MIDI notes

---

## Time Stretch Sounds Artifacts/Glitchy

**Check:**
- How much are you stretching? (>±20 BPM?)
- Is stretch algorithm appropriate for material?
- Is sample quality low (bit depth/sample rate)?

**Diagnosis:**
Excessive stretching or wrong algorithm

**Solution:**
1. Reduce stretch amount (stay within ±15 BPM)
2. Change stretch algorithm (Pro Default, Elastique, etc.)
3. Use "Resample" mode instead of "Stretch" for extreme changes
4. Work with higher quality source audio

---

## Slices Sound Thin in Mix

**Check:**
- Phase issues? (check in mono)
- Are multiple slices canceling?
- EQ removing too much?

**Diagnosis:**
Phase cancellation or over-EQ

**Solution:**
1. Switch to mono playback to verify phase
2. Flip phase on problematic slices
3. Reduce number of simultaneous slices
4. Remove excessive high-pass filtering
5. Layer with complementary sounds

---

## Can't Find Exported Slices

**Check:**
- Did you actually export? (File → Export sliced audio)
- Where is Slicer dump folder located?
- Check file browser path

**Diagnosis:**
Didn't export or wrong folder location

**Solution:**
1. Re-export: File → Export sliced audio to Slicer dump folder
2. Check FL Studio browser → Packs → Sliced audio
3. Note folder path for future reference
4. Verify files exist in file system

---

## BPM Auto-Detection Wrong

**Check:**
- Is sample tempo-based (drums) or free (ambient)?
- Are there tempo changes in the sample?
- Is sample very short (<1 bar)?

**Diagnosis:**
Auto-detection failing on complex/short/ambient audio

**Solution:**
1. Manually enter BPM (tap tempo or check sample info)
2. Use longer samples for better detection
3. For non-tempo material, disable stretch mode
4. Verify with metronome sync

---

## Individual Slice Processing Not Working

**Check:**
- Is slice routed to separate mixer track?
- Are you modifying slice parameters vs track parameters?
- Is effect inserted on correct track?

**Diagnosis:**
Routing confusion or wrong parameter target

**Solution:**
1. Right-click slice → "Send to piano roll track"
2. Route that track to unique mixer channel
3. Add effects to that mixer channel
4. Verify signal flow (slice → track → mixer → effect)

---

## Slices Won't Export

**Check:**
- Is there actual sliced audio to export?
- Enough disk space?
- Valid export path?

**Diagnosis:**
No slices created or file system issue

**Solution:**
1. Verify slices exist (visible in waveform)
2. Check disk space (free up if needed)
3. Change export location to known-good folder
4. Try exporting fewer slices at once

---

## Muddy Low-End from Sliced Drums

**Check:**
- Are all slices full-range (bass included)?
- Multiple slices with bass playing together?
- No high-pass filtering applied?

**Diagnosis:**
Low-frequency buildup from multiple slices

**Solution:**
1. High-pass non-bass slices (hats, snares at 200-300 Hz)
2. Keep bass only on kick/bass slices
3. Route slices to separate tracks for individual EQ
4. Check for phase issues in low-end

---

## Velocity Not Affecting Volume

**Check:**
- Is "Velocity" knob at 0%?
- Are you using volume automation instead?
- Is normalize enabled?

**Diagnosis:**
Velocity sensitivity disabled

**Solution:**
1. Set Velocity knob to 50-100%
2. Test with different note velocities (127 vs 64)
3. Disable normalize if enabled
4. Check mixer track automation (overriding velocity)

---

## Slices Play Out of Sync with Project

**Check:**
- Is Time Stretch enabled?
- Correct original BPM set?
- Project tempo changed but slices didn't adjust?

**Diagnosis:**
Time Stretch disabled or BPM mismatch

**Solution:**
1. Enable "Stretch" mode
2. Set correct original sample BPM
3. Slices will now adjust to project tempo
4. Re-slice if needed for clean timing

---

## Slice Markers Disappeared

**Check:**
- Did you reload the sample?
- Project corrupted/crashed?
- Slices exported but not saved in project?

**Diagnosis:**
Lost project state or didn't save

**Solution:**
1. Always save project after slicing
2. Export sliced audio as backup
3. Reload from exported slices if available
4. Re-slice from scratch if necessary

---

## CPU Overload with Many Slices

**Check:**
- How many slices active? (>32?)
- Multiple Slicer instances?
- Heavy effects on slice tracks?

**Diagnosis:**
Too many simultaneous voices or processing

**Solution:**
1. Reduce number of slices (coarser divisions)
2. Bounce slices to audio (render)
3. Disable effects on unused slices
4. Increase audio buffer size
5. Use "Smart Disable" for inactive tracks

---

## Slices Sound Robotic/Lifeless

**Check:**
- All slices at 100% velocity?
- No timing variation (quantized tight)?
- Same envelope on all slices?

**Diagnosis:**
No dynamics or humanization

**Solution:**
1. Vary velocities (60-100% range)
2. Slight timing offsets (humanize)
3. Different envelopes per slice type
4. Add subtle pitch/filter modulation

---

## Quick Troubleshooting Checklist

### No Sound:
- [ ] Sample loaded?
- [ ] Slices created?
- [ ] Volume/velocity > 0%?
- [ ] Track not muted?
- [ ] Correct routing?

### Timing Issues:
- [ ] BPM set correctly?
- [ ] Auto-slice with correct division?
- [ ] Time stretch enabled (if needed)?
- [ ] Zero-crossing snap enabled?

### Sound Quality:
- [ ] Check for phase issues (mono test)
- [ ] High-pass non-bass slices
- [ ] Verify slice envelopes
- [ ] Reduce stretch amount if artifacts

### Workflow:
- [ ] Export sliced audio (save work)
- [ ] Name files descriptively
- [ ] Save project regularly
- [ ] Route to mixer for processing

---

## The Bottom Line

**Most Slicer 2 problems come from incorrect BPM (slices off-beat), not enabling zero-crossing snap (clicks), or not exporting sliced audio (lost work).** If slices are off-beat, check BPM and re-slice. If clicks appear, enable zero-crossing snap. If sound is thin, check phase in mono. If muddy, high-pass non-bass slices. If robotic, vary velocities (60-100%). Always export sliced audio to save work. Set correct BPM → Auto-Slice → Export → Reuse.

**Most Common Fixes:**
1. Wrong BPM → Re-slice with correct BPM
2. Clicks → Zero-crossing snap
3. Lost work → Export sliced audio
