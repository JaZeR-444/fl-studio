# Goal: Mix Monitoring & Control - Fruity Spectroman

## Objective

Use Fruity Spectroman as a real-time monitoring tool to maintain mix balance and make informed control decisions throughout your mixing session.

**Time Investment:** Ongoing throughout mix session  
**Skill Level:** Beginner to Intermediate  
**Result:** Consistent mix balance with visual confirmation

---

## Setup for Continuous Monitoring

### Initial Configuration (2 minutes)

**Placement:**
1. Load Spectroman on Master channel
2. Position window on second monitor (if available)
   - OR corner of main screen if single monitor
3. Size window for visibility without dominating workspace

**Settings for Background Monitoring:**
- FFT Size: 2048 (balanced detail and CPU)
- Decay: Medium (readable but responsive)
- Peak Hold: ON (catch transient issues)
- Averaging: Light (smooth without lag)
- Frequency Range: Full (20 Hz - 20 kHz)
- Update Rate: Standard (don't tax CPU)

**Why These Settings:**
- CPU-friendly for long sessions
- Responsive enough to catch issues
- Smooth enough to read at a glance
- Doesn't require constant attention

---

## Monitoring Workflow During Mixing

### Phase 1: Initial Balance (Rough Mix)

**Focus:** Overall frequency distribution

**What to Monitor:**
1. **Play mix continuously** (30-60 seconds)
2. **Glance at Spectroman** every 10-15 seconds
3. **Look for obvious imbalances:**
   - One frequency zone dominating
   - Huge gaps in spectrum
   - Excessive low-end
   - Harsh peaks

**Don't:**
- Stare at Spectroman constantly
- Make micro-adjustments based on visual
- Ignore what you're hearing

**Action Triggers:**
- Heavy red below 30 Hz → Add high-pass
- Dark/empty at 2-5 kHz → Check vocal level
- Heavy red at 200-500 Hz → Start cutting mud

---

### Phase 2: Element Addition (Building the Mix)

**Focus:** Frequency balance as elements are added

**Monitoring Pattern:**
1. **Add new element** (instrument, vocal, etc.)
2. **Check Spectroman** - note where it sits spectrally
3. **Continue mixing**
4. **Periodic glance** to verify balance maintained

**Key Checkpoints:**

**After adding bass:**
- Check 40-100 Hz zone
- Should see increased red/yellow
- Verify doesn't overwhelm mix

**After adding vocals:**
- Check 2-5 kHz zone
- Should see distinct presence
- Verify they sit "above" the mix

**After adding hi-hats/cymbals:**
- Check 6-12 kHz zone
- Should add energy without dominating
- Verify brightness is controlled

**After adding pads/synths:**
- Check overall fill
- Verify they don't cause mud (200-500 Hz)
- Check stereo field (vectorscope)

---

### Phase 3: EQ Decision Making

**Focus:** Visual confirmation of EQ changes

**Workflow:**
1. **Identify issue by ear** (mix sounds muddy, harsh, etc.)
2. **Check Spectroman to confirm:**
   - Muddy → Look for red at 200-500 Hz
   - Harsh → Look for spikes at 3-5 kHz
   - Dull → Look for weak 2-5 kHz, blue above 5 kHz
3. **Make EQ adjustment**
4. **Verify in Spectroman:**
   - Did the red reduce where you cut?
   - Did content increase where you boosted?
5. **Trust your ears for final call**

**Example Workflow:**

**Problem:** Mix sounds muddy

**Visual Check:**
- Open Spectroman
- See heavy red at 300-400 Hz
- Confirms mud suspicion

**Action:**
- Cut 350 Hz by -3 dB (Q: 2.0)
- Check Spectroman: Red should reduce
- Listen: Mix should sound clearer

**Verification:**
- Visual shows less red at 300-400 Hz ✓
- Mix sounds clearer to ears ✓
- Both confirm = good decision

---

### Phase 4: Stereo Field Control

**Focus:** Monitoring stereo width and phase

**Vectorscope Monitoring:**
1. Keep vectorscope visible (bottom section)
2. Glance periodically during mix
3. Check pattern:
   - Oval/circular = good width
   - Strong vertical = centered bass
   - Horizontal = potential phase issues

**When to Check Vectorscope:**
- After adding stereo effects
- After panning changes
- After width enhancement
- Before exporting final mix

**Action Triggers:**
- Horizontal pattern → Reduce stereo width
- Pure vertical → Add width to supporting elements
- Test mono → Significant drop = phase problems

---

## Real-Time Mix Control Decisions

### Decision 1: When to Add/Remove Elements

**Use Spectroman to verify:**

**Before adding element:**
- Check current frequency coverage
- Identify gaps in spectrum
- Add element that fills gap

**Example:**
- Current mix lacks 5-10 kHz content
- Spectrum shows all blue in that zone
- Add hi-hats or bright synth to fill

**After adding element:**
- Check it occupies expected zone
- Verify doesn't create imbalance
- Adjust level or EQ if needed

---

### Decision 2: Level Adjustments

**Use Spectroman to confirm level changes:**

**Too Loud:**
- Element dominates its frequency zone
- Spectrum shows excessive red in that range
- Reduce level, check visual balances

**Too Quiet:**
- Element barely visible in spectrum
- Other elements mask it
- Increase level, check presence appears

**Example:**
- Bass guitar too quiet
- Spectroman shows weak at 80-200 Hz
- Increase bass level
- Check for increased red/yellow in that zone

---

### Decision 3: Sidechain Compression

**Use Spectroman to verify sidechain is working:**

**Setup:**
- Apply sidechain compression (kick → bass)
- Watch 40-100 Hz zone during playback

**What to Look For:**
- Bass "ducks" when kick hits
- Visible in spectrum as momentary reduction
- Confirms sidechain is working

**Adjust:**
- If too much ducking: Reduce ratio/threshold
- If not enough: Increase ratio/threshold

---

### Decision 4: Parallel Processing

**Use Spectroman to balance wet/dry:**

**Example: Parallel Compression**
1. Set up parallel compression on drums
2. Check full drum spectrum without parallel
3. Add parallel compression
4. Watch spectrum for changes:
   - Should add density and "glue"
   - Shouldn't drastically change balance
5. Adjust parallel level for subtle enhancement

---

## Monitoring Best Practices

### DO: Periodic Glances ✅

**Pattern:**
- Mix for 2-3 minutes by ear
- Glance at Spectroman for 5-10 seconds
- Note any obvious issues
- Continue mixing
- Repeat

**Benefit:**
- Catches problems before they get worse
- Doesn't interrupt creative flow
- Provides visual confirmation

---

### DON'T: Constant Staring ❌

**Why It's Bad:**
- Leads to mixing with eyes
- Breaks creative flow
- Can cause over-analysis
- Ignores what you're hearing

**Instead:**
- Keep Spectroman visible but peripheral
- Check when making decisions
- Trust ears first, eyes second

---

### DO: Use for Verification ✅

**Workflow:**
1. Make mix decision by ear
2. Check Spectroman to confirm
3. If visual agrees with ears → confidence boost
4. If visual disagrees → trust ears, but investigate

**Example:**
- You cut 300 Hz to reduce mud
- Sounds better to your ears
- Spectroman shows less red at 300 Hz
- Visual confirms your decision ✓

---

### DON'T: Let Visual Dictate ❌

**Wrong Approach:**
- Spectroman shows red at 200 Hz
- You cut it because it looks like too much
- Mix sounds thin and weak now
- You ignored your ears

**Right Approach:**
- Mix sounds warm and good
- Spectroman shows red at 200 Hz
- That's the warmth you want - keep it
- Trust your ears over visual

---

## Mix Session Checkpoints

### Beginning of Session (Setup)
- [ ] Spectroman loaded on Master
- [ ] Window positioned for visibility
- [ ] Settings configured for monitoring
- [ ] Baseline spectrum noted

### Mid-Session Checks (Every 30 min)
- [ ] Overall balance maintained?
- [ ] Any frequency zones dominating?
- [ ] Stereo field still appropriate?
- [ ] Compare to reference if available

### End of Session (Final Check)
- [ ] Full frequency analysis (10 min)
- [ ] Reference comparison
- [ ] Mono compatibility test
- [ ] Visual confirms mix sounds good

---

## Monitoring Different Mix Stages

### Rough Mix Stage

**Monitoring Focus:**
- Overall balance (no huge imbalances)
- Low-end presence (bass is there)
- Vocal clarity (not buried)

**Spectroman Check:**
- Quick glance every 5 minutes
- Address obvious issues only
- Don't over-analyze

---

### Detail Mix Stage

**Monitoring Focus:**
- Frequency balance refinement
- EQ decision verification
- Stereo field optimization

**Spectroman Check:**
- Active monitoring during EQ changes
- Before/after verification
- Reference comparison

---

### Final Mix Stage

**Monitoring Focus:**
- Overall polish
- Final balance verification
- Pre-export check

**Spectroman Check:**
- Full frequency analysis
- Multiple reference comparisons
- Mono compatibility test

---

## The Bottom Line

**Fruity Spectroman as a monitoring tool provides visual confirmation without disrupting creative flow.** Set it up for background monitoring (FFT 2048, medium decay, light averaging), position it visibly but not dominantly, and glance periodically rather than staring constantly. Use it to confirm EQ decisions, verify element placement, and catch obvious imbalances. Trust your ears first, use Spectroman to confirm what you're hearing. Check vectorscope for stereo field, test mono before exporting, and compare to references with matched levels.

**Monitoring Rhythm:**
- Mix by ear for 2-3 minutes
- Glance at Spectroman for 5-10 seconds
- Note any issues
- Continue mixing
- Repeat

**Visual confirms, ears decide.**
