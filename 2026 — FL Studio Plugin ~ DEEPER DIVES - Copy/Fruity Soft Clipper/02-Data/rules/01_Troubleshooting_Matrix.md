# Fruity Soft Clipper: Troubleshooting Matrix

## Problem → Diagnosis → Fix

### Problem 1: "It sounds louder but WORSE"

**Symptoms:**
- Clipped version sounds louder
- But also sounds harsher, more fatiguing
- Unsure if it's actually an improvement

**Diagnosis:**
- You're comparing at different volumes (louder bias)

**Fix:**
1. Note the volume when Soft Clipper is ON
2. Bypass Soft Clipper
3. Turn UP the master fader to match volume
4. Now compare tone at matched volumes
5. If bypassed still sounds better → remove Soft Clipper

**Prevention:** Always use loudness meter for matched volume comparisons

[SRC: REPUTABLE]

---

### Problem 2: "Nothing is happening"

**Symptoms:**
- Soft Clipper is loaded but no audible effect
- Mix sounds identical bypassed vs enabled

**Diagnosis:**
- Threshold is at 0 dB (default = no clipping)
- OR signal peaks aren't reaching threshold

**Fix:**
1. Check Threshold knob → should be below 0 dB
2. Lower to -1 to -3 dB
3. If still nothing: Check if input signal is too quiet
4. Boost track/bus fader or add gain before Soft Clipper

**Prevention:** Always set Threshold to -1 dB minimum after loading

[SRC: IL-MAN]

---

### Problem 3: "It sounds harsh and distorted"

**Symptoms:**
- Obvious distortion artifacts
- High frequencies sound brittle
- Mix is fatiguing to listen to

**Diagnosis:**
- Threshold too low (excessive clipping)
- OR input signal too hot

**Fix:**
1. Raise Threshold by +1 to +2 dB
2. Check input meter → peaks should be -6 to 0 dBFS
3. If input is clipping (red), lower input gain
4. Re-test at new settings

**Prevention:** Start conservative (-1 dB), push gradually

[SRC: REPUTABLE]

---

### Problem 4: "Bass disappears in mono"

**Symptoms:**
- Bass sounds huge in stereo
- Bass vanishes or gets very quiet in mono
- Happens after adding Soft Clipper to bass

**Diagnosis:**
- Saturation harmonics causing phase cancellation in mono

**Fix:**
1. Enable mono monitoring (Ctrl+M in FL Studio)
2. Raise Threshold on bass clipper by +2 dB
3. If still problematic: Use multiband approach (clip mids, not bass)
4. Alternative: Remove Soft Clipper from bass entirely

**Prevention:** Always check mono when clipping bass/808

[SRC: REPUTABLE]

---

### Problem 5: "FL Studio master is clipping (red)"

**Symptoms:**
- FL Studio's master meter shows red
- Clipping indicator on master track

**Diagnosis:**
- Forgot to compensate for Post Gain

**Fix:**
1. Note Post Gain amount (e.g., +2 dB)
2. Lower FL Studio Master Fader by same amount (-2 dB)
3. Red clipping should disappear

**Prevention:** Always lower master fader when using Post Gain

[SRC: IL-MAN]

---

### Problem 6: "Compressor doesn't work after adding Soft Clipper"

**Symptoms:**
- Compressor gain reduction meter not moving
- Compression sounds ineffective

**Diagnosis:**
- Soft Clipper is BEFORE compressor (wrong order)
- Clipping removed peaks compressor needs

**Fix:**
1. Reorder chain: Compressor → Soft Clipper
2. Compressor should now respond to peaks

**Prevention:** Compression always before clipping

[SRC: REPUTABLE]

---

### Problem 7: "Mix sounds flat and lifeless"

**Symptoms:**
- Mix lacks dynamic contrast
- Everything sounds "mushed together"
- No punch or excitement

**Diagnosis:**
- Soft Clipper on too many tracks (over-saturation)

**Fix:**
1. Bypass all Soft Clipper instances
2. Re-enable only on master, drum bus, and 808 bus
3. Remove from individual tracks

**Prevention:** Limit to 3-5 instances maximum

[SRC: REPUTABLE]

---

### Problem 8: "Reverb sounds harsh and metallic"

**Symptoms:**
- Reverb tail has unnatural artifacts
- Reverb sounds "digital" or harsh

**Diagnosis:**
- Soft Clipper is AFTER reverb (triggering reverb with peaks)

**Fix:**
1. Move Soft Clipper to BEFORE reverb in chain
2. Reverb should now sound smooth

**Prevention:** Always clip before reverb

[SRC: REPUTABLE]

---

### Problem 9: "Mix sounds good but isn't loud enough"

**Symptoms:**
- Mix sounds balanced and good
- But quieter than commercial tracks

**Diagnosis:**
- Conservative Threshold settings
- OR not using limiter after Soft Clipper

**Fix:**
1. Lower Threshold by -0.5 to -1 dB
2. Add Fruity Limiter after Soft Clipper
3. Push limiter ceiling to -0.1 dBFS
4. Check final loudness with meter (target: -14 to -10 LUFS integrated)

**Prevention:** Use Soft Clipper + Limiter combo for maximum loudness

[SRC: REPUTABLE]

---

### Problem 10: "Automation causes volume jumps"

**Symptoms:**
- Threshold automation creates jarring volume shifts
- Mix "lurches" during transitions

**Diagnosis:**
- Automation range too extreme (e.g., -1 dB → -10 dB)

**Fix:**
1. Limit automation range to ±3 dB maximum
2. Use smooth curves, not sharp jumps
3. Example: -1 dB → -3 dB (gradual ramp over 4 bars)

**Prevention:** Automate subtly (2-3 dB max change)

[SRC: REPUTABLE]

---

### Problem 11: "808 sounds good in mix but client says bass is distorted"

**Symptoms:**
- You hear intended distortion (good)
- Client hears unintended harshness (bad)
- Expectation mismatch

**Diagnosis:**
- Genre/vibe misalignment (client expects clean bass)

**Fix:**
1. Ask client for reference track
2. Match 808 distortion amount to reference
3. If client wants clean bass: Remove Soft Clipper from 808

**Prevention:** Clarify vibe/genre expectations before mixing

[SRC: REPUTABLE]

---

### Problem 12: "Soft Clipper sounds different on different playback systems"

**Symptoms:**
- Mix sounds good on studio monitors
- Sounds harsh on phone/laptop speakers

**Diagnosis:**
- Threshold too low for consumer playback systems
- OR mono compatibility issue

**Fix:**
1. Test mix on phone/laptop speakers during production
2. Raise Threshold by +0.5 dB if harsh on small speakers
3. Check mono compatibility

**Prevention:** Test on multiple playback systems before finalizing

[SRC: REPUTABLE]

---

### Problem 13: "Preset sounds different than expected"

**Symptoms:**
- Loaded preset doesn't sound like it did before
- Inconsistent results

**Diagnosis:**
- Input signal level is different
- OR mix context changed

**Fix:**
1. Check input signal level → should be -6 to 0 dBFS
2. Normalize input levels before Soft Clipper
3. Adjust Threshold ±1 dB to compensate

**Prevention:** Save presets with input level notes

[SRC: REPUTABLE]

---

### Problem 14: "Mix sounds great solo'd, bad in full mix"

**Symptoms:**
- Individual tracks with Soft Clipper sound good
- Full mix sounds over-processed

**Diagnosis:**
- Over-use of Soft Clipper (too many instances)

**Fix:**
1. Remove Soft Clipper from all individual tracks
2. Keep only on master and buses
3. Re-test full mix

**Prevention:** Mix in context, not solo'd

[SRC: REPUTABLE]

---

### Problem 15: "Can't hear the difference between -1 dB and -2 dB"

**Symptoms:**
- Threshold adjustments don't seem audible
- Unsure if it's working

**Diagnosis:**
- Need better monitoring or trained ears

**Fix:**
1. Use spectrum analyzer (Fruity Spectroman) to SEE harmonics being added
2. A/B between -1 dB and -3 dB (larger difference)
3. Train ears with reference tracks

**Prevention:** Use visual feedback (spectrum analyzer, transfer curve)

[SRC: REPUTABLE]

---

## Quick Diagnostic Flowchart

```
Problem Category?
│
├─ LOUDNESS
│  ├─ Too quiet → Lower Threshold, add Limiter
│  └─ Too loud → Raise Threshold, lower Post Gain
│
├─ TONE
│  ├─ Harsh → Raise Threshold +1 dB
│  ├─ Dull → Check if Threshold at 0 dB (no effect)
│  └─ Distorted → Raise Threshold +2 dB, check input level
│
├─ DYNAMICS
│  ├─ Flat/lifeless → Remove Soft Clipper from individual tracks
│  └─ Too dynamic → Lower Threshold by -0.5 dB
│
├─ PHASE/MONO
│  ├─ Bass gone in mono → Raise Threshold on bass, use multiband
│  └─ Width collapsed → Check mono compatibility
│
└─ WORKFLOW
   ├─ Nothing happens → Lower Threshold to -1 dB minimum
   ├─ FL master red → Lower Master Fader by Post Gain amount
   └─ Preset inconsistent → Normalize input levels
```

---

## Emergency Fixes (Under 60 Seconds)

| Problem | 10-Second Fix |
|---------|---------------|
| **Too harsh** | Raise Threshold +1 dB |
| **Too quiet** | Lower Threshold -1 dB |
| **Bass gone (mono)** | Raise bass Threshold +2 dB |
| **FL master red** | Lower Master Fader -2 dB |
| **Sounds same** | Lower Threshold to -2 dB |
| **Over-processed** | Remove from individual tracks |

---

## When to Give Up on Soft Clipper

Sometimes Soft Clipper isn't the right tool:

❌ **Remove Soft Clipper if:**
- You're working on classical/jazz/acoustic (use Limiter instead)
- Client explicitly wants zero saturation
- You've tried every setting and it still sounds worse
- You need frequency-specific control (use Maximus instead)
- You need attack/release control (use compressor/limiter)

**Remember:** No plugin is mandatory. If it doesn't improve the mix, delete it.

[SRC: REPUTABLE]

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Coverage:** Complete  
**Problems Documented:** 15 (most common)
