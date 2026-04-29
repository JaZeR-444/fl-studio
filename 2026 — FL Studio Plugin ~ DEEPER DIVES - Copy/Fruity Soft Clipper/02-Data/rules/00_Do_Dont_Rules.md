# Fruity Soft Clipper: Do/Don't Rules

## Universal DO Rules

### ✅ DO: A/B Test at Matched Volume
**Why:** Louder always sounds "better" to the human brain  
**How:** Lower master fader when Soft Clipper is enabled to match bypass volume  
**Verification:** Use loudness meter to ensure RMS/LUFS match  
**Consequence of Breaking:** False positive (think clipping sounds good when it's just louder)

[SRC: REPUTABLE]

---

### ✅ DO: Check Mono Compatibility on Bass
**Why:** Saturation harmonics cause phase cancellation in mono  
**How:** Enable mono monitoring (Ctrl+M) while clipping bass  
**Verification:** Bass should remain present in mono (not disappear)  
**Consequence of Breaking:** Bass vanishes on phone speakers, club systems

[SRC: REPUTABLE]

---

### ✅ DO: Compress Before Clipping
**Why:** Compressors need peaks to detect; clipping removes them  
**How:** Chain order: Compressor → EQ → Soft Clipper  
**Verification:** Compressor's gain reduction meter responds to transients  
**Consequence of Breaking:** Compressor doesn't work properly

[SRC: REPUTABLE]

---

### ✅ DO: Lower Master Fader When Using Post Gain
**Why:** Prevents FL Studio's master from clipping (wasted headroom)  
**How:** If Post Gain = +2 dB, lower Master Fader by -2 dB  
**Verification:** FL Master meter never goes red  
**Consequence of Breaking:** Clipping at FL's master = distortion + lost headroom

[SRC: IL-MAN]

---

### ✅ DO: Use Soft Clipper Selectively
**Why:** Over-saturation removes dynamic contrast = flat mix  
**How:** Limit to 3-5 instances max (master, drum bus, 808 bus)  
**Verification:** Bypass all instances; mix should sound 80% finished  
**Consequence of Breaking:** Lifeless, over-processed mix

[SRC: REPUTABLE]

---

### ✅ DO: Start Conservative, Then Push
**Why:** Easier to add clipping than remove it  
**How:** Start at -1 dB, slowly lower threshold until you hear artifacts  
**Verification:** "Sweet spot" is right before harshness begins  
**Consequence of Breaking:** Over-clipping = harsh, fatiguing mix

[SRC: REPUTABLE]

---

### ✅ DO: Reference Against Commercial Tracks
**Why:** Provides loudness/tone target  
**How:** Load reference track, match RMS/LUFS with Soft Clipper  
**Verification:** Your mix should be within ±2 dB of reference  
**Consequence of Breaking:** No objective standard = guesswork

[SRC: REPUTABLE]

---

### ✅ DO: Use Soft Clipper Before Reverb
**Why:** Prevents reverb from being triggered by harsh peaks  
**How:** Chain order: Soft Clipper → Reverb Send  
**Verification:** Reverb tail sounds smooth, not metallic  
**Consequence of Breaking:** Reverb sounds harsh and unnatural

[SRC: REPUTABLE]

---

## Universal DON'T Rules

### ❌ DON'T: Clip the Master Below -3 dB
**Why:** Excessive saturation = harsh, fatiguing mix  
**Exception:** Psychedelic/experimental genres (intentional distortion)  
**Fix:** Raise Threshold to -1 to -2 dB, use limiter for additional loudness  
**Consequence of Breaking:** Harsh, unprofessional sound

[SRC: REPUTABLE]

---

### ❌ DON'T: Use Soft Clipper on Every Track
**Why:** Removes dynamic contrast = lifeless mix  
**Exception:** None (even lo-fi should have some dynamic variation)  
**Fix:** Limit to master, drum bus, bass bus  
**Consequence of Breaking:** Flat, boring mix

[SRC: REPUTABLE]

---

### ❌ DON'T: Expect Soft Clipper to Fix a Bad Mix
**Why:** Amplifies existing problems (bad balance, harsh EQ)  
**Exception:** None  
**Fix:** Balance and EQ first, then use Soft Clipper as final polish  
**Consequence of Breaking:** Louder bad mix = still a bad mix

[SRC: REPUTABLE]

---

### ❌ DON'T: Automate Threshold More Than ±3 dB
**Why:** Creates jarring volume/tone shifts  
**Exception:** Psychedelic/experimental tracks (intentional chaos)  
**Fix:** Limit automation range to 2-3 dB maximum  
**Consequence of Breaking:** Mix "lurches" during transitions

[SRC: REPUTABLE]

---

### ❌ DON'T: Use Soft Clipper as the Only Master Limiter
**Why:** Can't prevent true peaks above 0 dBFS  
**Exception:** None (always use a brick-wall limiter for safety)  
**Fix:** Chain: Soft Clipper → Fruity Limiter (catch remaining peaks)  
**Consequence of Breaking:** True peaks may exceed 0 dBTP = distortion on some systems

[SRC: REPUTABLE]

---

### ❌ DON'T: Clip Before EQ Without Reason
**Why:** Clipping generates harmonics; EQ should shape them  
**Exception:** Creative choice (EQ boost → clip for intentional harmonic focus)  
**Fix:** Typical chain: EQ → Compressor → Soft Clipper  
**Consequence of Breaking:** Can't control where saturation sits in frequency spectrum

[SRC: REPUTABLE]

---

### ❌ DON'T: Ignore the Transfer Curve
**Why:** Visual feedback shows exactly how much distortion is applied  
**Exception:** None (always glance at the curve)  
**Fix:** Watch curve bend as you adjust; more bend = more saturation  
**Consequence of Breaking:** Flying blind (can't see what you're doing)

[SRC: IL-MAN]

---

### ❌ DON'T: Use Post Gain Without Gain Staging
**Why:** Drives next plugin too hard = unintended distortion  
**Exception:** Intentional serial saturation  
**Fix:** Check next plugin's input meter when using Post Gain  
**Consequence of Breaking:** Cascading distortion = harsh tone

[SRC: REPUTABLE]

---

## Genre-Specific DO Rules

### Trap / Hip-Hop
✅ **DO:** Clip 808+Kick bus aggressively (-6 to -10 dB)  
✅ **DO:** Use aggressive master threshold (-2 to -3 dB)  
✅ **DO:** Boost input gain before clipping bass

### R&B / Pop
✅ **DO:** Use conservative master threshold (-0.5 to -1.5 dB)  
✅ **DO:** Keep vocals gentle (-0.5 to -1 dB)  
✅ **DO:** Check for harshness on smooth sections

### Lo-Fi / Chill
✅ **DO:** Embrace artifacts and distortion  
✅ **DO:** Use moderate to heavy thresholds (-2 to -4 dB)  
✅ **DO:** Clip everything for cohesive vintage character

### Moody / Introspective
✅ **DO:** Use ultra-conservative settings (-0.3 to -0.5 dB)  
✅ **DO:** Skip clipping on drums entirely  
✅ **DO:** Preserve wide dynamic range

[SRC: REPUTABLE]

---

## Genre-Specific DON'T Rules

### Trap / Hip-Hop
❌ **DON'T:** Leave 808s clean (missing signature sound)  
❌ **DON'T:** Use conservative master threshold (won't compete)  
❌ **DON'T:** Skip mono check on bass (critical for clubs)

### R&B / Pop
❌ **DON'T:** Clip too aggressively (destroys smoothness)  
❌ **DON'T:** Distort vocals (unprofessional)  
❌ **DON'T:** Forget to check phase on smooth sections

### Lo-Fi / Chill
❌ **DON'T:** Expect transparency (lo-fi = intentional degradation)  
❌ **DON'T:** Use conservative settings (defeats the purpose)  
❌ **DON'T:** Over-polish (lo-fi should sound rough)

### Moody / Introspective
❌ **DON'T:** Clip drums below -3 dB (destroys vibe)  
❌ **DON'T:** Use Soft Clipper on 808s (need clean sub)  
❌ **DON'T:** Push for competitive loudness (ruins emotion)

[SRC: REPUTABLE]

---

## Application-Specific DO/DON'T Rules

### Master Bus
✅ **DO:** Stay between -0.5 and -3 dB  
✅ **DO:** Use limiter after Soft Clipper  
❌ **DON'T:** Clip below -3 dB (unless psychedelic)  
❌ **DON'T:** Forget to lower master fader if using Post Gain

### Drum Bus
✅ **DO:** Use as first insert (before EQ)  
✅ **DO:** Aim for -3 to -5 dB for cohesion  
❌ **DON'T:** Clip below -6 dB (destroys transients)  
❌ **DON'T:** Use on individual drum hits (use on bus)

### 808 + Kick Bus (Trap)
✅ **DO:** Boost input gain before clipping  
✅ **DO:** Push to -6 to -10 dB for distortion  
✅ **DO:** Check mono compatibility every time  
❌ **DON'T:** Use on moody/jazzy tracks  
❌ **DON'T:** Skip the mono check (critical)

### Vocal Track
✅ **DO:** Use gentle settings (-0.5 to -1 dB)  
✅ **DO:** Place before reverb in chain  
❌ **DON'T:** Clip below -1.5 dB (sounds unnatural)  
❌ **DON'T:** Use on background vocals (unnecessary)

### Parallel Saturation
✅ **DO:** Use aggressive settings (-8 to -12 dB)  
✅ **DO:** Blend at 20-40% maximum  
❌ **DON'T:** Blend at 100% (defeats parallel purpose)  
❌ **DON'T:** Forget to check phase alignment

[SRC: REPUTABLE]

---

## Emergency "Fix It Now" Rules

### If Mix Sounds Harsh
1. ✅ **DO:** Raise all Soft Clipper Thresholds by +1 dB
2. ✅ **DO:** Bypass Soft Clipper on vocals
3. ❌ **DON'T:** Add more EQ (will make it worse)

### If Mix Sounds Weak
1. ✅ **DO:** Lower master Threshold by -0.5 dB
2. ✅ **DO:** Check if you're comparing at matched volume
3. ❌ **DON'T:** Lower Threshold more than -3 dB on master

### If Bass Disappears in Mono
1. ✅ **DO:** Raise Threshold on bass clipper by +2 dB
2. ✅ **DO:** Use multiband (clip mids, not bass)
3. ❌ **DON'T:** Ignore the problem (will sound bad on clubs/phones)

### If Mix Sounds Distorted
1. ✅ **DO:** Raise all Thresholds by +2 dB
2. ✅ **DO:** Check if input signal is too hot
3. ❌ **DON'T:** Add more processing (simplify instead)

[SRC: REPUTABLE]

---

## Summary Checklist

Before finalizing any mix with Soft Clipper:

- [ ] A/B tested at matched volume
- [ ] Master threshold between -0.5 and -3 dB
- [ ] Checked mono compatibility on bass
- [ ] Using Soft Clipper on ≤5 tracks
- [ ] Lowered master fader if using Post Gain
- [ ] Soft Clipper placed after compression
- [ ] Mix sounds 80% finished without Soft Clipper
- [ ] Referenced against commercial track
- [ ] Genre matches settings (aggressive for Trap, gentle for moody)
- [ ] FL Studio master meter not red

**If all checked: Mix is ready.**

[SRC: REPUTABLE]

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Coverage:** Complete
