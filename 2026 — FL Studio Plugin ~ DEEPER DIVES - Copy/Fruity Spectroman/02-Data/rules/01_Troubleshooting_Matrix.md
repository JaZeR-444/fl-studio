# Troubleshooting Matrix - Fruity Spectroman

## How to Use This Matrix

**Format:** Problem → Visual Indicator in Spectroman → Diagnosis → Solution

---

## Mix Balance Issues

### Problem: Mix Sounds Muddy

**Spectroman Shows:**
- Heavy red at 200-500 Hz
- Dark/weak at 2-5 kHz (lacks clarity)
- Overall "bottom-heavy" but unclear appearance

**Diagnosis:**
Excessive energy in low-mid "mud zone" combined with insufficient presence

**Solution:**
1. **Identify exact mud frequency** (usually 300-400 Hz)
2. **Cut with EQ** (-2 to -4 dB, Q: 1.5-3.0)
3. **Boost clarity zone** (+1 to +2 dB at 2.5-3.5 kHz)
4. **Verify:** Less red in 200-500 Hz, more content at 2-5 kHz

**Prevention:**
- High-pass individual tracks at 80-120 Hz
- Don't over-boost warmth on multiple tracks
- Check mix in Spectroman periodically

---

### Problem: Mix Sounds Harsh/Fatiguing

**Spectroman Shows:**
- Bright red spikes at 3-5 kHz
- May extend to 6-8 kHz
- Sharp peaks rather than smooth spectrum

**Diagnosis:**
Resonant frequency or excessive presence zone energy

**Solution:**
1. **Enable peak hold** to identify exact frequency
2. **Zoom to 2-6 kHz range** for detail
3. **Cut identified frequency** (-2 to -4 dB, narrow Q)
4. **Check multiple elements** (may be vocals, synth, guitar)
5. **Verify:** Red spike reduced, smooth spectrum

**Prevention:**
- Use Spectroman on individual channels to find source
- De-ess vocals (if 5-8 kHz issue)
- Control cymbal brightness

---

### Problem: Mix Sounds Dull/Lacks Sparkle

**Spectroman Shows:**
- All blue above 5-8 kHz
- Weak 2-5 kHz presence zone
- Spectrum "falls off a cliff" in highs

**Diagnosis:**
Insufficient high-frequency content and presence

**Solution:**
1. **Boost presence zone** (+2 dB at 3-4 kHz)
2. **Add air shelf** (+1 to +2 dB at 10-12 kHz)
3. **Check individual elements** for dullness
4. **Verify:** Content visible to 12+ kHz, stronger 2-5 kHz

**Prevention:**
- Don't over-cut highs on multiple tracks
- Use high-frequency content in synths/samples
- Check if low-pass filters are too aggressive

---

### Problem: Mix Sounds Thin

**Spectroman Shows:**
- Blue/weak at 60-200 Hz
- Lacking body in low-mids
- Top-heavy visual balance

**Diagnosis:**
Insufficient bass and low-mid content

**Solution:**
1. **Check bass/kick levels** (may just be quiet)
2. **Boost bass fundamental** (+2 to +3 dB at 60-100 Hz)
3. **Add warmth** (+1 to +2 dB at 200-300 Hz)
4. **Verify:** Increased red/yellow in low-end

**Prevention:**
- Don't high-pass too aggressively
- Ensure bass/kick are present in mix
- Check low-end on multiple playback systems

---

## Low-End Issues

### Problem: Excessive Sub-Bass (Wasted Energy)

**Spectroman Shows:**
- Heavy red below 30 Hz
- May dominate visual spectrum
- No benefit on most playback systems

**Diagnosis:**
Rumble, DC offset, or excessive sub-bass content

**Solution:**
1. **High-pass filter at 30-40 Hz** on Master
2. **Check individual tracks** for sub-bass sources
3. **Verify:** No red content below 30 Hz
4. **Bonus:** Regain headroom for useful frequencies

**Prevention:**
- High-pass all non-bass tracks at 100+ Hz
- High-pass bass/kick at 30-40 Hz
- Don't boost below 40 Hz unless specific reason

---

### Problem: Kick and Bass Compete (Masking)

**Spectroman Shows:**
- Both kick and bass show heavy red at same frequency (usually 60-100 Hz)
- Unclear low-end definition

**Diagnosis:**
Kick and bass occupy same frequency range

**Solution:**
1. **Solo kick** - note fundamental frequency
2. **Solo bass** - note fundamental frequency
3. **If overlapping:**
   - Tune kick to 60 Hz, bass to 80-100 Hz, OR
   - Tune kick to 80 Hz, bass to 60 Hz
4. **Use sidechain compression** (bass ducking to kick)
5. **Verify:** Clearer low-end, distinct peaks

**Prevention:**
- Tune kick and bass to complementary frequencies
- Use Spectroman to check overlap
- Consider bass following kick's root note

---

### Problem: Weak Bass in Mono

**Spectroman Shows:**
- Vectorscope shows horizontal pattern (width)
- Bass disappears when switching to mono
- Significant level drop in mono playback

**Diagnosis:**
Bass is out of phase or over-widened

**Solution:**
1. **Check bass for stereo processing** (should be mono)
2. **Remove stereo enhancement on bass**
3. **Verify polarity** (ensure L/R channels in phase)
4. **Test mono:** Bass should remain strong
5. **Verify:** Vectorscope shows vertical component

**Prevention:**
- Keep bass and kick mono below 150 Hz
- Check vectorscope regularly
- Test mono compatibility during mixing

---

## Stereo Field Issues

### Problem: Mix Too Narrow (Lacks Width)

**Spectroman Shows:**
- Vectorscope shows nearly vertical line
- Minimal stereo spread
- Mono-sounding mix

**Diagnosis:**
Insufficient stereo information in supporting elements

**Solution:**
1. **Don't widen bass/kick** (must stay centered)
2. **Add width to pads/synths:**
   - Stereo delay
   - Chorus/ensemble
   - Panned doubles
3. **Add stereo reverb**
4. **Verify:** Vectorscope shows oval/circular pattern

**Prevention:**
- Use stereo samples/synths
- Pan elements across stereo field
- Add stereo effects selectively

---

### Problem: Mix Too Wide (Phase Issues)

**Spectroman Shows:**
- Vectorscope shows horizontal line
- Significant level drop in mono
- Bass disappears in mono

**Diagnosis:**
Over-widened stereo field with phase problems

**Solution:**
1. **Check for extreme stereo widening**
2. **Reduce stereo enhancement**
3. **Ensure bass/kick are mono**
4. **Test mono compatibility**
5. **Verify:** Vectorscope shows oval with vertical component

**Prevention:**
- Don't over-enhance stereo width
- Keep low-end mono below 150 Hz
- Test mono playback regularly

---

## Reference Comparison Issues

### Problem: Your Mix Doesn't Match Reference

**Spectroman Shows:**
Reference looks "better" or "fuller" than your mix

**Diagnosis:**
First check: Are levels matched? (Most common issue)

**Solution:**
1. **Check LUFS/RMS levels:**
   - Reference: _____ LUFS
   - Your mix: _____ LUFS
2. **If different:** Adjust to match (use Fruity Limiter)
3. **Now compare in Spectroman**
4. **Identify real differences** (not just loudness)

**If still different after level matching:**
- Note major spectral differences
- Make targeted EQ adjustments
- Don't chase exact match

**Prevention:**
- Always level-match before comparing
- Use LUFS meter, not just visual volume
- Compare similar song sections

---

### Problem: Reference Seems Brighter

**Spectroman Shows:**
Reference has more content above 8 kHz than your mix

**Diagnosis:**
(After level matching) Insufficient high-frequency content

**Solution:**
1. **Boost air shelf** at 10-12 kHz (+1 to +2 dB)
2. **Check individual elements** for dullness
3. **Add high-frequency content** (brighter samples, synth patches)
4. **Verify:** More content visible in high frequencies

---

### Problem: Reference Has More Low-End

**Spectroman Shows:**
Reference shows more red at 40-100 Hz

**Diagnosis:**
(After level matching) Insufficient bass content

**Solution:**
1. **Check bass/kick levels**
2. **Boost bass fundamental** if needed
3. **Ensure bass is present throughout track**
4. **Verify:** Similar low-end presence to reference

---

## Technical/Display Issues

### Problem: Spectroman Display Too Jittery

**Spectroman Shows:**
Spectrum changes too rapidly, hard to read

**Diagnosis:**
FFT too small or decay too fast, no averaging

**Solution:**
1. **Increase decay time** (to medium or slow)
2. **Enable averaging** (light or medium)
3. **Increase FFT size** if needed (to 2048 or 4096)
4. **Verify:** Smoother, more readable display

---

### Problem: Spectroman Not Showing Bass Detail

**Spectroman Shows:**
Low-end appears as single blob, no frequency detail

**Diagnosis:**
FFT size too small for bass resolution

**Solution:**
1. **Increase FFT size** to 4096 or 8192
2. **Zoom to 20-500 Hz** for bass focus
3. **Verify:** Can distinguish kick vs bass frequencies

---

### Problem: Can't See Transients

**Spectroman Shows:**
Missing momentary peaks (snare hits, etc.)

**Diagnosis:**
Decay too slow or peak hold disabled

**Solution:**
1. **Enable peak hold**
2. **Decrease decay time** (to fast or medium)
3. **Verify:** Transient peaks visible

---

## Workflow Issues

### Problem: Mixing with Eyes Instead of Ears

**Spectroman Shows:**
You're making all decisions based on what you see

**Diagnosis:**
Over-reliance on visual, ignoring sonic result

**Solution:**
1. **Close Spectroman**
2. **Mix by ear for 30 minutes**
3. **Then open Spectroman** to verify
4. **If sounds good but looks "wrong"** → Trust ears

**Prevention:**
- Use Spectroman for confirmation, not dictation
- Close during creative mixing
- Open for problem-solving and verification

---

### Problem: Chasing "Perfect" Flat Spectrum

**Spectroman Shows:**
You're EQ'ing to achieve perfectly balanced spectrum

**Diagnosis:**
Misunderstanding: music isn't supposed to be flat

**Solution:**
1. **Load reference tracks in your genre**
2. **Observe they're NOT flat**
3. **Accept genre-appropriate imbalances**
4. **Mix for vibe, not visual perfection**

**Prevention:**
- Study professional mixes in your genre
- Understand spectral profiles vary by genre/vibe
- Trust musicality over visual "balance"

---

## Quick Troubleshooting Decision Tree

**Is your mix problem visible in Spectroman?**

→ **YES:** Use visual to identify frequency issue
- Mud: Cut 200-500 Hz
- Harshness: Cut 3-5 kHz
- Dullness: Boost 3-4 kHz, 10-12 kHz
- Thin: Boost 60-100 Hz, 200-300 Hz

→ **NO:** Problem may not be frequency-related
- Check levels, panning, arrangement
- Check compression, dynamics
- May be musical/compositional issue

---

## The Bottom Line

**Spectroman makes problems visible so you can solve them fast.** Muddy = red at 200-500 Hz, harsh = spikes at 3-5 kHz, dull = all blue above 5 kHz, thin = weak 60-200 Hz. Always level-match before comparing to references. If bass disappears in mono, check vectorscope for phase issues. If display is too jittery, increase decay and averaging. If you're mixing with eyes instead of ears, close Spectroman and trust your hearing first. Visual confirms, it doesn't dictate.

**Most Common Issues:**
1. Muddy mix → Cut 300-400 Hz
2. Reference comparison at wrong level → Match LUFS first
3. Phase issues → Check vectorscope, test mono
4. Mixing with eyes → Close plugin, use ears
