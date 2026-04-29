# Goal: Frequency Analysis - Fruity Spectroman

## Objective

Perform detailed frequency analysis to identify and resolve spectral issues in your mix.

**Time Investment:** 10-15 minutes  
**Skill Level:** Intermediate  
**Result:** Comprehensive understanding of frequency distribution and targeted solutions

---

## Complete Frequency Analysis Workflow

### Phase 1: Initial Spectrum Survey (3 minutes)

**Setup:**
1. Load Spectroman on Master channel
2. Settings:
   - FFT: 4096 (detailed analysis)
   - Decay: Slow (see average energy)
   - Peak Hold: ON
   - Averaging: Medium
   - Range: Full (20 Hz - 20 kHz)

**Analysis:**
1. Play full mix (chorus or busiest section)
2. Observe for 2 minutes
3. Take mental snapshot of overall shape

**Initial Questions:**
- Where is the most energy? (should align with genre)
- Are there obvious imbalances? (one zone dominating)
- Any visible problems? (excessive rumble, harsh peaks)

---

### Phase 2: Zone-by-Zone Analysis (8 minutes)

#### Zone 1: Sub-Bass (20-60 Hz) - 2 minutes

**Zoom Settings:**
- Frequency Range: 20-200 Hz
- FFT: 8192 (maximum bass detail)

**Check For:**
- [ ] Content below 30 Hz (rumble to remove)
- [ ] 808/sub-bass at 40-60 Hz (should be present)
- [ ] Kick fundamental at 50-80 Hz

**Visual Targets:**
```
✅ GOOD: Moderate red at 40-80 Hz, minimal below 30 Hz
❌ BAD: Heavy red below 30 Hz (wasted energy)
❌ BAD: All blue at 40-80 Hz (no bass weight)
```

**Actions:**
- If red below 30 Hz: Add high-pass filter at 30-35 Hz
- If weak at 40-80 Hz: Check bass/kick levels, consider boost
- If overlapping: Sidechain or tune to different frequencies

---

#### Zone 2: Bass & Low-Mids (60-500 Hz) - 2 minutes

**Zoom Settings:**
- Frequency Range: 60-500 Hz
- FFT: 4096-8192

**Check For:**
- [ ] Bass guitar/synth bass at 60-200 Hz
- [ ] Warmth at 200-400 Hz (body or mud?)
- [ ] Clarity vs. muddiness balance

**Visual Targets:**
```
✅ GOOD: Controlled presence, not dominating
❌ BAD: Heavy red at 250-400 Hz (mud zone)
❌ BAD: Weak at 60-200 Hz (lacks body)
```

**Actions:**
- If muddy (excessive red at 200-500 Hz): Cut 300-400 Hz
- If thin (weak 60-200 Hz): Boost bass harmonics
- Compare to reference: How much warmth is appropriate?

---

#### Zone 3: Mids (500 Hz - 2 kHz) - 1 minute

**Settings:**
- Frequency Range: 500 Hz - 3 kHz
- FFT: 2048-4096

**Check For:**
- [ ] Musical body (instruments occupy this zone)
- [ ] Not hollow or thin
- [ ] Foundation for upper-mid clarity

**Visual Targets:**
```
✅ GOOD: Present yellow/green (musical body)
❌ BAD: All blue (hollow, lacks body)
❌ BAD: Excessive red (boxy, honky)
```

**Actions:**
- If hollow: Check if instruments lack body
- If boxy: Cut around 500-800 Hz
- Verify instruments sit properly in this zone

---

#### Zone 4: Presence (2-5 kHz) - 2 minutes

**Settings:**
- Frequency Range: 2-6 kHz
- FFT: 4096
- Peak Hold: ON (catch harsh peaks)

**Check For:**
- [ ] Vocal clarity at 2.5-4 kHz
- [ ] Lead instrument definition
- [ ] Harsh resonances or spikes

**Visual Targets:**
```
✅ GOOD: Clear yellow/green, smooth
❌ BAD: All blue (lacks clarity, buried vocals)
❌ BAD: Bright red spikes (harsh, fatiguing)
```

**Actions:**
- If lacking presence: Boost 2.5-4 kHz on vocals/leads
- If harsh (red spikes): Identify exact frequency, cut with narrow Q
- Verify vocals sit "above" the mix

---

#### Zone 5: Brilliance & Air (5-20 kHz) - 1 minute

**Settings:**
- Frequency Range: Full (to see roll-off)
- FFT: 2048-4096

**Check For:**
- [ ] Hi-hat and cymbal content (6-12 kHz)
- [ ] Air and sparkle (10-16 kHz)
- [ ] Natural vs. artificial roll-off

**Visual Targets:**
```
✅ GOOD: Gradual fade to blue, content to 12-15 kHz
❌ BAD: All blue above 5 kHz (dull, closed-in)
❌ BAD: Red to 20 kHz (overly bright, fatiguing)
```

**Actions:**
- If dull: Boost air shelf at 10-12 kHz
- If overly bright: Gentle high-shelf cut
- Check for natural roll-off vs. harsh cut

---

### Phase 3: Stereo Field Analysis (2 minutes)

**Vectorscope Focus:**
1. Switch focus to vectorscope (bottom display)
2. Play full mix
3. Observe stereo pattern

**Check For:**
- [ ] Bass/kick centered (vertical component strong)
- [ ] Supporting elements show width (oval pattern)
- [ ] No extreme width (horizontal line = phase issues)
- [ ] Mono compatibility (switch to mono, check level)

**Visual Patterns:**
```
✅ GOOD: Oval/circular with strong vertical component
❌ BAD: Horizontal line (over-widened, phase risk)
❌ BAD: Pure vertical (too mono, no width)
```

**Actions:**
- If too wide: Reduce stereo enhancement
- If too narrow: Add width to supporting elements (not bass)
- Test mono: Significant level drop = phase problems

---

### Phase 4: Dynamic Analysis (2 minutes)

**Peak Hold Focus:**
1. Enable peak hold
2. Play mix with transient-heavy sections
3. Observe held peaks vs. average energy

**Check For:**
- [ ] Transient peaks (kick, snare attacks)
- [ ] Resonant frequencies (held peaks that stick out)
- [ ] Dynamic range (peaks vs. sustained)

**Actions:**
- Note any problematic resonances (bright peaks)
- Identify transient-heavy elements
- Check if compression is affecting dynamics

---

## Advanced Analysis Techniques

### Technique 1: Solo Channel Analysis

**Purpose:** Identify which element causes frequency issues

**Process:**
1. Notice problem frequency in Master spectrum
2. Solo individual channels one by one
3. Watch Spectroman on each
4. Identify culprit channel(s)

**Example:**
- Master shows harsh peak at 3.5 kHz
- Solo vocals → No peak
- Solo synth → Bright red spike at 3.5 kHz
- Conclusion: Synth needs EQ cut at 3.5 kHz

---

### Technique 2: Before/After EQ Verification

**Purpose:** Verify EQ changes achieve desired result

**Process:**
1. Note problem frequency in Spectroman
2. Make EQ adjustment
3. Check Spectroman immediately
4. Verify change is visible

**Example:**
- Mix is muddy, heavy red at 300 Hz
- Cut 300 Hz by -3 dB with EQ
- Check Spectroman: Red should reduce in that zone
- If visual confirms, trust the change

---

### Technique 3: Frequency Sweep Identification

**Purpose:** Find exact problem frequency using EQ + Spectroman

**Process:**
1. Load Parametric EQ 2
2. Create narrow boost (+10 dB, Q: 10)
3. Sweep through suspected range
4. Watch Spectroman to see where boost appears
5. When you find problem frequency, change boost to cut

---

### Technique 4: Reference Spectral Matching

**Purpose:** Learn what professional mixes look like in your genre

**Process:**
1. Load 3-5 reference tracks
2. Match LUFS levels (critical!)
3. Play each reference for 1 minute
4. Note spectral characteristics:
   - Where is most energy?
   - How much presence at 2-5 kHz?
   - How extended are highs?
   - How clean are low-mids?
5. Identify common patterns across references
6. Compare your mix
7. Make targeted adjustments

**Don't:**
- Try to match exactly (every mix is unique)
- Compare at different volumes
- Ignore genre differences

---

## Frequency Analysis Checklist

### Pre-Analysis Setup
- [ ] Spectroman loaded on Master channel
- [ ] FFT: 4096 for detailed analysis
- [ ] Decay: Slow for averaged view
- [ ] Peak Hold: ON to catch peaks
- [ ] Averaging: Medium for smooth display

### Analysis Complete When:
- [ ] Checked all 5 frequency zones
- [ ] Identified any problem frequencies
- [ ] Analyzed stereo field (vectorscope)
- [ ] Checked dynamic range (peaks vs. average)
- [ ] Compared to reference tracks (level-matched)
- [ ] Created action list of EQ adjustments needed

### Common Findings:
- [ ] Rumble below 30 Hz → High-pass
- [ ] Mud at 200-500 Hz → Cut
- [ ] Lacks clarity at 2-5 kHz → Boost
- [ ] Dull above 8 kHz → Add air
- [ ] Phase issues → Check vectorscope, test mono

---

## Analysis Report Template

After completing analysis, document findings:

**Low-End (20-200 Hz):**
- Issue found: _______________
- Action needed: _______________

**Low-Mids (200-500 Hz):**
- Issue found: _______________
- Action needed: _______________

**Mids (500 Hz - 2 kHz):**
- Issue found: _______________
- Action needed: _______________

**Presence (2-5 kHz):**
- Issue found: _______________
- Action needed: _______________

**Highs (5-20 kHz):**
- Issue found: _______________
- Action needed: _______________

**Stereo Field:**
- Issue found: _______________
- Action needed: _______________

**Next Steps:**
1. _______________
2. _______________
3. _______________

---

## Time-Saving Analysis Shortcuts

### 5-Minute Quick Analysis

Focus on the three most common issues:

1. **Check for rumble** (20-30 Hz) - 30 sec
   - If red below 30 Hz: High-pass

2. **Check for mud** (200-500 Hz) - 1 min
   - If heavy red: Cut 300-400 Hz

3. **Check vocal clarity** (2-5 kHz) - 1 min
   - If weak: Boost 2.5-4 kHz

4. **Check stereo field** (vectorscope) - 30 sec
   - Bass centered? Width appropriate?

5. **Reference comparison** (if time) - 2 min
   - Load one reference, note biggest difference

**Result:** Three targeted fixes in 5 minutes

---

## The Bottom Line

**Comprehensive frequency analysis reveals exactly what's wrong with your mix and where to fix it.** Work zone by zone: sub-bass (check for rumble), bass/low-mids (check for mud), mids (check for body), presence (check for clarity), and highs (check for air). Use peak hold to find resonances, vectorscope for stereo issues, and reference tracks for context. Make Spectroman show you the problems, then use EQ to solve them systematically.

**Essential Analysis Steps:**
1. Full spectrum overview (3 min)
2. Zone-by-zone deep dive (8 min)
3. Stereo field check (2 min)
4. Create action list of fixes needed
