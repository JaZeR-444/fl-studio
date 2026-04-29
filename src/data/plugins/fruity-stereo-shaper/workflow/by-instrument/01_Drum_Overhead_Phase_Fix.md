# Phase Correction for Drum Overheads - Fixing Recording Issues

## Goal
Fix phase cancellation issues in recorded drum overhead microphones to restore stereo width, frequency balance, and mono compatibility.

## When to Use
- Recorded live drums (overhead mics)
- Multi-mic drum recordings
- Imported drum stems with phase issues
- Sampled drum loops with weak mono playback
- Room mic phase problems
- Any multi-mic stereo recording

## The Phase Problem

### What is Phase Cancellation?

When two microphones capture the same sound source:
- **In-phase:** Signals reinforce (+6dB louder)
- **Out-of-phase:** Signals cancel (weak/thin)

**Common causes:**
- Mic placement issues
- One mic cable wired backwards
- Incorrect mixing console polarity
- Digital recording errors
- Stem exports from different sessions

### How to Identify Phase Issues

**Symptom 1: Weak in Mono**
- Sounds full in stereo
- Disappears/thins when folded to mono
- Classic phase cancellation

**Symptom 2: Missing Frequencies**
- Certain frequencies absent (usually mids)
- Unnatural comb filtering
- Hollow/thin sound

**Symptom 3: Correlation Meter**
- Load Fruity Limiter
- Check correlation meter
- Reading below +0.5 = potential issue
- Reading near 0 or negative = severe issue

**Symptom 4: Waveform Comparison**
- Load into Edison or mixer
- Compare L and R waveforms
- If inverted (mirror image) = phase issue

## Quick Fix (30 Seconds)

1. Load drum overhead track
2. Add Fruity Stereo Shaper
3. Try inverting Left channel phase
4. A/B test: Does it sound better?
5. If yes, keep it. If no, try Right channel
6. Done

**Settings:**
```
Left Phase Invert:
Phase Left: ON
All matrix sliders: 1.0, 0.0, 0.0, 1.0
```

## Detailed Diagnosis & Correction

### Step 1: Confirm the Problem

**Test in Mono:**
1. Solo overhead track
2. Press mono button on mixer
3. Listen for:
   - Thin/weak sound
   - Missing body
   - Unnatural tone

If it sounds worse in mono = phase issue

**Check Correlation:**
1. Add Fruity Limiter
2. Look at correlation meter
3. Target: +0.5 to +1.0 (healthy)
4. Problem: Below +0.3 (phase issues)

### Step 2: Determine Which Channel

**Method 1: Visual Inspection**
1. Load both channels into Edison
2. Compare waveforms
3. If one is inverted = that's the culprit

**Method 2: Trial & Error**
1. Invert Left channel → Check mono
2. If better = keep, if worse = undo
3. Invert Right channel → Check mono
4. If better = keep, if worse = undo

**Method 3: Isolation**
1. Solo Left channel only
2. Solo Right channel only
3. Compare tone/frequency balance
4. Inverted channel often sounds "different"

### Step 3: Apply Correction

**Invert Left Channel:**
```
STEREO SHAPER:
Phase Invert Left: ON
Matrix: Standard (1.0, 0.0, 0.0, 1.0)
```

**Invert Right Channel:**
```
STEREO SHAPER:
Phase Invert Right: ON
Matrix: Standard (1.0, 0.0, 0.0, 1.0)
```

**Invert Both (Rare):**
```
Phase Invert Left: ON
Phase Invert Right: ON
```
*Only if both channels are inverted relative to other tracks*

### Step 4: Verify the Fix

**Mono Test:**
1. Press mono button
2. Sound should be fuller
3. Frequency balance restored

**Correlation Check:**
1. Correlation meter should improve
2. Target: +0.6 to +0.9
3. Above +0.5 = acceptable

**A/B Comparison:**
1. Toggle phase invert on/off
2. Listen in both stereo and mono
3. Corrected version should sound natural

**Frequency Analysis:**
1. Load Wave Candy or Parametric EQ 2 analyzer
2. Check for comb filtering (notches in frequency)
3. Corrected version = smoother frequency response

## Advanced Phase Correction

### Partial Phase Issues

**Problem:** Only certain frequencies out of phase

**Solution: Multiband Phase Correction**

```
OVERHEADS → PATCHER → FREQ SPLIT
    ├── LOW (<400Hz) → Phase Invert → MIX
    └── HIGH (>400Hz) → Normal Phase → MIX
```

**Use when:**
- Kick/snare phase OK but cymbals wrong
- Only mid-range has issues
- Frequency-dependent phase problems

### Time-Alignment Issues

**Problem:** Mics not equidistant from sound source

**Solution: Combine Delay + Phase**

```
STEREO SHAPER:
Delay: 1-5ms (align time)
Phase: Invert as needed
Matrix: Standard
```

**When to use:**
- Room mics delayed from close mics
- Overhead placement asymmetrical
- Multi-mic timing issues

### Stereo Width After Correction

**After fixing phase, adjust width:**

```
1. Fix Phase First (invert as needed)
2. Then Adjust Width:
   - Too wide → Narrow (L→L: 0.8, L→R: 0.2)
   - Too narrow → Widen (L→L: 1.0, L→R: -0.1)
```

## Genre-Specific Drum Phase Correction

### Hip-Hop (Sampled Breaks)

**Common Issue:** Vintage drum breaks have phase issues

**Fix:**
1. Check correlation
2. Invert phase if needed
3. Often narrow width to 70% for vintage vibe

**Additional Processing:**
- Tape saturation
- Bit crushing
- Lo-fi filtering

### Live Recorded Hip-Hop Drums

**Common Issue:** Overhead mic polarity reversed

**Fix:**
1. Identify inverted channel
2. Invert with Stereo Shaper
3. Balance with close mics
4. Ensure mono compatibility

### Electronic/Hybrid Drums

**Common Issue:** Layered samples with phase issues

**Fix:**
1. Check each layer individually
2. Phase-align layers
3. Use correlation to verify
4. Mono test each element

### Boom Bap / Sample-Based

**Common Issue:** Sampled drums from vinyl (phase varying)

**Fix:**
1. Analyze per-sample
2. Correct as needed
3. Might need to correct individual hits
4. Embrace some vintage phase "character"

## Common Phase Scenarios

### Scenario 1: Left Overhead Inverted
**Symptom:** Thin in mono, cymbals weak
**Solution:** Phase Invert Left channel
**Result:** Full sound restored

### Scenario 2: Room Mic Out of Phase
**Symptom:** Rooms reduce body when added
**Solution:** Phase Invert room mic track
**Result:** Rooms add depth without cancellation

### Scenario 3: Sample Pack with Issues
**Symptom:** Some loops weak in mono
**Solution:** Check each loop, invert as needed
**Result:** Consistent mono compatibility

### Scenario 4: Kick Mic vs Overhead
**Symptom:** Kick weak when overheads up
**Solution:** Phase-align kick to overhead kick image
**Result:** Coherent drum sound

### Scenario 5: Stereo Recording Bus
**Symptom:** Entire mix phase-cancelled
**Solution:** Invert one channel of stereo bus
**Result:** Full frequency spectrum restored

## Pro Tips for Drum Phase

1. **Always check mono:** Instant phase issue detection
2. **Correlation meter is king:** Visual confirmation
3. **Invert one channel first:** Start simple
4. **Check kick/snare separately:** Isolate problem frequency
5. **Time-align if needed:** Delay + phase combined
6. **Reference close mics:** Overheads should match polarity
7. **Trust your ears:** Meters help, but listen critically
8. **Document correction:** Note which channel inverted
9. **Check full mix:** Ensure fix works in context
10. **Save preset:** Quick recall for similar issues

## Phase Correction Workflow

```
DRUM OVERHEADS
    ↓
ANALYSIS
├── Mono test (weak = phase issue)
├── Correlation meter (low = problem)
└── Visual waveform (inverted = issue)
    ↓
CORRECTION
├── Invert Left channel → Test
├── If no better → Undo
├── Invert Right channel → Test
└── Keep best result
    ↓
VERIFICATION
├── Mono test (should sound full)
├── Correlation check (>+0.5)
├── Frequency analysis (no comb filtering)
└── A/B with original
    ↓
OPTIMIZATION
├── Adjust stereo width if needed
├── Balance with other drum mics
├── EQ to taste
└── Compression/dynamics
    ↓
DONE: Phase-Corrected Overheads
```

## Troubleshooting

### Issue: Still Sounds Thin After Inversion
**Possible Causes:**
1. Both channels need inversion (rare)
2. Time-alignment needed (add delay)
3. Original recording truly weak
4. Other mics causing issues

**Try:**
- Invert both channels
- Add 1-3ms delay
- Check other drum mic phases
- EQ to compensate

### Issue: Correlation Meter Still Low
**Possible Causes:**
1. Extreme width (not necessarily bad)
2. Complex stereo information
3. Multi-source phase issues

**Try:**
- Narrow stereo width slightly
- Check if it's musical width vs cancellation
- Verify with mono test

### Issue: Sounds Worse After Correction
**Possible Causes:**
1. Inverted wrong channel
2. Original was already correct
3. Different issue (not phase)

**Try:**
- Undo and try other channel
- Accept original as correct
- Check for EQ/frequency issues instead

## Integration with Full Drum Mix

### Balance with Close Mics
1. Fix overhead phase first
2. Then phase-align close mics to overheads
3. Ensure all drums coherent
4. Check full kit in mono

### Layering Samples
1. Phase-correct each sample
2. Layer with overhead
3. Check combined phase
4. Adjust if needed

### Effects Integration
1. Correct phase before effects
2. Reverb/delay after correction
3. Compression won't fix phase
4. EQ won't fix phase

## Quick Reference

### Phase Invert Settings
```
Invert Left:
Phase Left: ON

Invert Right:
Phase Right: ON

Invert Both:
Phase Left: ON
Phase Right: ON
```

### Healthy Correlation Targets
```
+0.9 to +1.0 = Very Mono (tight phase)
+0.5 to +0.9 = Good Stereo (healthy)
+0.3 to +0.5 = Wide Stereo (monitor)
0.0 to +0.3  = Very Wide (check for issues)
Below 0.0    = Phase Problems (fix immediately)
```

### Mono Test Results
```
Sounds Fuller in Mono = Probably OK
No Change Mono/Stereo = Very Mono/Narrow
Sounds Thinner in Mono = Phase Issue
Loses Frequencies in Mono = Severe Phase Issue
```

## Before/After Comparison

**BEFORE (Phase Issues):**
- Thin in mono
- Missing mid frequencies
- Weak cymbals
- Correlation: +0.2
- Comb filtering

**AFTER (Phase Corrected):**
- Full in mono
- Balanced frequencies
- Clear cymbals
- Correlation: +0.7
- Natural tone

## Success Checklist

- [ ] Identified phase issue (mono test)
- [ ] Checked correlation meter
- [ ] Inverted appropriate channel
- [ ] Verified improvement in mono
- [ ] Correlation meter improved
- [ ] No comb filtering in frequency
- [ ] Sounds natural in stereo
- [ ] Documented which channel inverted
- [ ] Saved corrected version
- [ ] Ready for mixing

**Remember: Phase-correct drums = professional mixes. Always check mono!**
