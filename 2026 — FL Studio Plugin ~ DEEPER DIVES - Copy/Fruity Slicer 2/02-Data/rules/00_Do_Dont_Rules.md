# Do/Don't Rules - Fruity Slicer 2

## Essential DO Rules ✅

### DO: Quantize Your Slices First
✅ **Use Auto-Slice with BPM detection for rhythmic material**

**Why:**
- Accurate slicing makes everything else work better
- Properly timed slices = tight, musical results
- Wrong slice points = timing hell

**Workflow:**
1. Load sample
2. Set correct BPM (auto-detect or manual)
3. Use Auto-Slice with appropriate division (1/4, 1/8, 1/16)
4. Fine-tune slice markers manually if needed

---

### DO: Name and Save Your Slices
✅ **Export sliced audio to Slicer dump folder for reuse**

**Why:**
- Slices are lost if you don't save the project/export
- Reusable slices speed up workflow
- Named files = organized library

**Workflow:**
1. Slice your audio
2. File → Export → Sliced audio to Slicer dump folder
3. Name descriptively (e.g., "Amen_Break_170BPM_16th")
4. Reload anytime without re-slicing

---

### DO: Use Note Mapping for Live Performance
✅ **Map slices chromatically across keyboard for playability**

**Why:**
- Play slices like an instrument
- Live performance ready
- MIDI controller compatible

**Default Mapping:**
- C5 = Slice 1
- C#5 = Slice 2
- D5 = Slice 3
- etc.

**Benefit:** Instant playability, no complex MIDI routing

---

### DO: Sync Stretch to Project Tempo
✅ **Enable Time Stretch when working with loops**

**Why:**
- Slices stay in time when project BPM changes
- Essential for tempo-based production
- Prevents manual re-slicing

**Workflow:**
1. Enable "Stretch" mode
2. Set sample original BPM correctly
3. Change project BPM → slices auto-adjust timing

---

### DO: Layer Individual Slices with Effects
✅ **Route individual slices to mixer tracks for per-slice processing**

**Why:**
- Unique processing per slice
- Kick on one track, snare on another
- Professional mixing flexibility

**Workflow:**
1. Right-click slice → "Send to piano roll track"
2. Route that track to separate mixer channel
3. Add effects per slice group

---

### DO: Use Envelope Controls for Dynamics
✅ **Adjust ADSR per slice for musical variation**

**Why:**
- Shape transients (tight vs loose hits)
- Create rhythmic movement
- Dynamic variation from static samples

**Common Uses:**
- Short decay on hi-hats (tight)
- Long release on snare (sustain)
- Fast attack on kicks (punch)

---

### DO: Check Phase Alignment
✅ **Monitor for phase issues when layering slices**

**Why:**
- Multiple slices playing together can phase cancel
- Thin, weak sound = phase problems
- Mono compatibility check reveals issues

**Workflow:**
1. Play multiple slices together
2. Switch to mono playback
3. Listen for thinning or cancellation
4. Flip phase on problematic slices if needed

---

### DO: High-Pass Melodic Slices
✅ **Remove low-end from non-bass slices to avoid mud**

**Why:**
- Most slices don't need sub-bass
- Low-end buildup = muddy mix
- Leaves room for bass/kick

**Recommendation:**
- Hi-hats/cymbals: HP at 300-500 Hz
- Snares/claps: HP at 100-200 Hz
- Kicks: Keep low-end (no HP)

---

## Essential DON'T Rules ❌

### DON'T: Slice Without Setting BPM
❌ **Always set sample BPM before slicing**

**Why:**
- Auto-slice uses BPM for accurate division
- Wrong BPM = wrong slice points
- Timing issues from the start

**Common Mistake:**
- Load sample → Auto-Slice immediately
- Slices are off-beat because BPM is wrong

**Fix:**
1. Tap tempo or check sample info for BPM
2. Enter BPM in Slicer
3. Then Auto-Slice

---

### DON'T: Over-Slice
❌ **Don't use excessive slice divisions (e.g., 1/32 on simple loops)**

**Why:**
- Too many slices = hard to manage
- Tiny slices sound choppy
- CPU overhead

**Rule of Thumb:**
- Simple drums: 1/4 or 1/8 slices
- Complex breakbeats: 1/16 slices
- Extreme chop: 1/32 (rare cases only)

**Best Practice:** Use minimum necessary divisions

---

### DON'T: Ignore Zero-Crossings
❌ **Ensure slice points are at zero-crossings to avoid clicks**

**Why:**
- Slicing mid-waveform creates audible clicks
- Professional sound = clean slices
- Zero-crossings = smooth cuts

**Workflow:**
- Enable "Snap to zero-crossings" in Auto-Slice
- Manually adjust problematic slices
- Zoom in on waveform to verify

---

### DON'T: Stretch Non-Rhythmic Material
❌ **Don't time-stretch melodic/tonal content excessively**

**Why:**
- Time-stretching creates artifacts
- Tonal samples pitch-shift with tempo changes
- Sounds unnatural/robotic

**Exception:**
- Rhythmic loops: Safe to stretch ±20 BPM
- Melodic samples: Avoid stretching, use pitch modes

**Alternative:**
- Use "Resample" mode instead of "Stretch"
- Preserve pitch with manual pitch adjustment

---

### DON'T: Mix Slices at Full Volume
❌ **Don't leave all slices at 100% velocity**

**Why:**
- No dynamics = robotic sound
- Human feel requires velocity variation
- Mixing at lower levels prevents clipping

**Fix:**
1. Vary slice velocities (60-100%)
2. Emphasize key hits (snare = 100%, hi-hat = 70%)
3. Create groove with dynamics

---

### DON'T: Forget to Export Slices
❌ **Always export/save sliced audio after editing**

**Why:**
- Slices are temporary unless exported
- Losing project = losing all slice work
- Export = permanent, reusable

**Workflow:**
1. Perfect your slices
2. File → Export sliced audio
3. Save to organized folder
4. Reload from file browser anytime

---

### DON'T: Play All Slices Simultaneously
❌ **Avoid triggering every slice at once without mixing**

**Why:**
- Phase cancellation nightmare
- Distortion from summing
- Sounds like a train wreck

**Exception:**
- Creative glitch effects (intentional chaos)

**Best Practice:**
- Play slices rhythmically
- Arrange slices in time (not stacked)

---

### DON'T: Use Slicer for Long Audio
❌ **Don't slice full songs or very long samples**

**Why:**
- Slicer is for loops/short samples (1-8 bars)
- Long files = hundreds of slices (unmanageable)
- CPU heavy, workflow slow

**Recommended Length:**
- Ideal: 1-4 bar loops
- Max: 8 bars
- Beyond that: Use Edison or Playlist instead

---

## Quick Do/Don't Reference

| DO ✅ | DON'T ❌ |
|-------|----------|
| Set BPM before slicing | Slice without BPM |
| Export sliced audio | Lose work by not exporting |
| Use minimum necessary slices | Over-slice with 1/32 divisions |
| Enable zero-crossing snap | Slice mid-waveform (clicks) |
| Vary slice velocities | Play all at 100% velocity |
| High-pass non-bass slices | Let low-end build up |
| Check phase in mono | Ignore phase cancellation |
| Time-stretch rhythmic loops | Stretch melodic content excessively |
| Route slices to mixer tracks | Mix everything on one track |
| Name and organize exports | Use generic names |

---

## Common Mistake Scenarios

### Mistake: Slices Sound Off-Beat
**Cause:** Wrong BPM set before slicing  
**Fix:** Re-slice with correct BPM

### Mistake: Clicks/Pops on Slice Starts
**Cause:** Slice points not at zero-crossings  
**Fix:** Enable zero-crossing snap, re-slice

### Mistake: Thin Sound When Playing Multiple Slices
**Cause:** Phase cancellation  
**Fix:** Check mono, flip phase on slices, separate in time

### Mistake: Muddy Low-End
**Cause:** All slices have bass frequencies  
**Fix:** High-pass non-bass slices (300+ Hz for hats/cymbals)

### Mistake: Lost Slices After Project Reload
**Cause:** Didn't export sliced audio  
**Fix:** Export → Slicer dump folder before closing

### Mistake: Robotic, Lifeless Sound
**Cause:** All slices at 100% velocity, no dynamics  
**Fix:** Vary velocities (60-100%), humanize timing

---

## The Bottom Line

**Set BPM correctly before auto-slicing (accurate timing from the start). Use minimum necessary slice divisions (1/4, 1/8, 1/16 - not excessive). Enable zero-crossing snap to avoid clicks. Always export sliced audio to save work. Vary slice velocities for dynamics (60-100%). High-pass non-bass slices to avoid mud. Check phase in mono when layering slices. Don't time-stretch melodic content excessively. Route important slices to separate mixer tracks for processing.**

**Golden Rules:**
- **Correct BPM → Auto-Slice → Export → Reuse**
- **Zero-crossings = clean slices**
- **Dynamics = human feel**
