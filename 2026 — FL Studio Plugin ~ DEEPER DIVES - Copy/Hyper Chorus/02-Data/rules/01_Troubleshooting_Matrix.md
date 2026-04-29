# Troubleshooting Matrix

## Problem: Sound is Muddy or Unclear

### Symptoms
- Low-end feels unfocused
- Mix sounds "clogged" when Hyper Chorus is engaged
- Loss of clarity in low-mids

### Possible Causes & Solutions

| Cause | Check | Solution |
|-------|-------|----------|
| **HP Filter Too Low** | Solo wet signal, check low frequencies | Raise HP filter to 200-300Hz |
| **Too Many Voices** | Currently using 8 voices on dense source | Reduce to 4 voices |
| **Excessive Wet Signal** | Wet/Dry above 40% | Reduce to 20-30% |
| **High Feedback** | Pad 1 Y above 50% | Reduce feedback, add more dry signal |
| **Multiple Chorused Sources** | More than 3 sources with obvious chorus | Be more selective, use sends |

### Quick Fix
1. Raise HP filter by 50Hz increments
2. Reduce wet signal by 10%
3. If still muddy, switch from 8 to 4 voices

---

## Problem: Phase Cancellation in Mono

### Symptoms
- Sound gets quieter or hollow when collapsed to mono
- Bass disappears
- Elements sound "sucked out"

### Possible Causes & Solutions

| Cause | Check | Solution |
|-------|-------|----------|
| **No HP Filter** | HP filter at minimum | Engage HP filter, set to 150Hz+ |
| **Too Much Modulation** | Pad 2 X above 60% | Reduce modulation amount |
| **High Wet Signal** | Wet/Dry above 50% | Reduce wet, increase dry |
| **Fast Modulation Rate** | Pad 2 Y in top 40% | Slow down modulation rate |
| **Extreme Settings** | Multiple parameters maxed | Pull back all parameters 20% |

### Quick Fix
1. Engage HP filter at 200Hz minimum
2. Reduce Pad 2 X (modulation) by 30%
3. Check mono compatibility again

---

## Problem: Metallic Ringing or Harshness

### Symptoms
- Unpleasant ringing artifacts
- Harsh high-frequency content
- Sound is "resonant" in a bad way

### Possible Causes & Solutions

| Cause | Check | Solution |
|-------|-------|----------|
| **Feedback Too High** | Pad 1 Y above 60% | Reduce feedback to 30-40% |
| **Long Delay + High Feedback** | Pad 1 X right, Y high | Reduce either delay or feedback |
| **Bright Source** | Source has lots of highs | Engage LP filter at 10-12kHz |
| **8 Voices on Bright Source** | Using 8 voices on already wide source | Reduce to 4 voices |

### Quick Fix
1. Reduce Pad 1 Y (feedback) by 30%
2. Engage LP filter at 12kHz
3. If still harsh, add Fruity Parametric EQ 2 after with gentle high-shelf cut

---

## Problem: CPU Overload / Dropouts

### Symptoms
- FL Studio CPU meter spikes
- Audio dropouts or glitches
- Project becomes unplayable

### Possible Causes & Solutions

| Cause | Check | Solution |
|-------|-------|----------|
| **Too Many 8-Voice Instances** | Multiple Hyper Chorus with 8 voices | Convert some to 4 voices |
| **No Track Freezing** | Heavy channels not frozen | Freeze tracks with Hyper Chorus |
| **Multiple Inserts Instead of Sends** | Same settings on multiple channels | Consolidate to shared send |
| **Old CPU/Low Buffer** | Buffer size below 512 samples | Increase buffer size |

### Quick Fix
1. Switch all instances to 4 voices temporarily
2. Freeze heaviest channels
3. Convert inserts to sends where possible

---

## Problem: Effect Too Subtle or Not Hearing It

### Symptoms
- Can't tell if Hyper Chorus is engaged
- No obvious width or movement
- Effect seems broken

### Possible Causes & Solutions

| Cause | Check | Solution |
|-------|-------|----------|
| **Wet/Dry Too Low** | Below 15% | Increase to 25-35% |
| **Pad Positions Wrong** | All pads at minimum | Drag Pad 2 to center-right |
| **4 Voices on Subtle Source** | Already wide stereo source | Switch to 8 voices or skip chorus |
| **HP Filter Too High** | Above 500Hz on bright source | Reduce HP filter |
| **Mono Source Output** | Channel output set to mono | Set channel to stereo output |

### Quick Fix
1. Set Wet/Dry to 50% temporarily to verify effect works
2. Drag Pad 2 to X=60%, Y=50%
3. Switch to 8 voices
4. If still subtle, source may already be wide enough

---

## Problem: Seasick or Dizzying Effect

### Symptoms
- Pitch wobble is distracting
- Movement makes listener uncomfortable
- Effect is "too much"

### Possible Causes & Solutions

| Cause | Check | Solution |
|-------|-------|----------|
| **Modulation Amount Too High** | Pad 2 X above 60% | Reduce to 30-40% |
| **Modulation Rate Too Fast** | Pad 2 Y above 60% | Reduce to 20-40% |
| **Fast Auto-Pan** | Pad 3 Y above 60% | Slow down or reduce amount |
| **On Lead Vocal** | Lead vocal with high modulation | Reduce both amount and rate significantly |

### Quick Fix
1. Reduce Pad 2 X by 50%
2. Reduce Pad 2 Y to bottom 30%
3. If on lead vocal, consider using different technique (manual doubling)

---

## Problem: Clicking or Glitches

### Symptoms
- Clicks or pops in audio
- Glitches when automating
- artifacts when changing settings

### Possible Causes & Solutions

| Cause | Check | Solution |
|-------|-------|----------|
| **Automation Too Abrupt** | Instant parameter jumps | Use smoother automation curves |
| **Buffer Underrun** | CPU spiking during playback | Increase buffer size, freeze tracks |
| **Sample Rate Mismatch** | Project at different rate than interface | Check audio settings |
| **Feedback Runaway** | Pad 1 Y at maximum with high output | Reduce feedback, add limiter |

### Quick Fix
1. Check automation curves, add smoothing
2. Add Fruity Limiter after Hyper Chorus
3. Increase audio buffer to 1024 samples

---

## Problem: Low End Disappears

### Symptoms
- Bass sounds weak when chorus engaged
- Kick loses punch
- Overall thin sound

### Possible Causes & Solutions

| Cause | Check | Solution |
|-------|-------|----------|
| **HP Filter Engaged** | HP filter active | This is correct for chorus, but... |
| **Not Using HP Filter** | HP filter at minimum | Engage HP filter! Phase cancellation |
| **Wet Signal Too High** | Wet/Dry above 40% | Reduce wet signal |
| **On Bass Channel** | Hyper Chorus on bass instrument | Remove from bass, use on mid-highs only |

### Important Note
If you NEED chorus on a bass-containing sound:
1. HP filter at 150Hz minimum
2. Keep wet signal under 25%
3. Check mono compatibility religiously
4. Consider parallel processing instead

---

## Quick Diagnosis Flowchart

```
Problem occurs?
    │
    ├── Sound muddy?
    │   └── Raise HP filter, reduce wet, switch to 4 voices
    │
    ├── Mono issues?
    │   └── Engage HP filter, reduce modulation
    │
    ├── Harsh/metallic?
    │   └── Reduce feedback, engage LP filter
    │
    ├── CPU overload?
    │   └── Freeze tracks, use 4 voices, consolidate to sends
    │
    ├── Too subtle?
    │   └── Increase wet to 50% test, check pad positions
    │
    ├── Seasick effect?
    │   └── Reduce Pad 2 X and Y significantly
    │
    └── Low end weak?
        └── Verify HP filter engaged, reduce wet, check if on bass
```

---

## Prevention Checklist

Before committing Hyper Chorus settings:

- [ ] HP filter appropriate for source
- [ ] Mono compatibility verified
- [ ] CPU usage acceptable
- [ ] No harsh resonances at high feedback
- [ ] Wet/Dry balanced for context
- [ ] Not applied to bass/808
- [ ] Automation curves are smooth
- [ ] Limiter in place for high-feedback experiments

---

**Version:** 1.0
**Last Updated:** 2026-02-03
