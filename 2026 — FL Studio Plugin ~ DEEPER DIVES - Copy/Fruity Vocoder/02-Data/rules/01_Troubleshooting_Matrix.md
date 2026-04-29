# Fruity Vocoder: Troubleshooting Matrix

## Problem → Diagnosis → Solution

### No Sound / Silent Output

| Check | Action | Expected Result |
|-------|--------|----------------|
| **1. Routing** | Verify both sources routed to vocoder mixer track | Both channels active in mixer |
| **2. Panning** | Check modulator hard-left, carrier hard-right | L/R separation on vocoder track |
| **3. L/R Assignment** | Click L/R labels in vocoder to swap | Test both configurations |
| **4. Carrier Level** | Solo R channel in vocoder MIX section | Hear carrier clearly |
| **5. Mix Sliders** | Ensure R slider is up (100%) | Carrier signal present |

**Quick Fix Flowchart:**
```
No Sound?
├─ Check mixer routing ──► Both sources to vocoder track?
├─ Check Channel Rack pan ──► L hard-left, R hard-right?
├─ Solo vocoder R channel ──► Carrier audible?
├─ Check vocoder MIX ──► R slider up?
└─ Swap L/R labels ──► Assignment reversed?
```

**If Still Silent:**
- Bypass vocoder (Alt+Click) - is carrier audible?
- If no: Carrier routing issue
- If yes: Vocoder settings or modulator issue

---

### Not Vocoding (Sounds Like Normal Audio)

| Symptom | Likely Cause | Solution |
|---------|-------------|----------|
| Only carrier heard | Modulator not reaching vocoder | Check L channel routing |
| Only modulator heard | Carrier not reaching vocoder | Check R channel routing |
| Both heard separately | Not vocoding, just mixed | Verify L/R panning |
| Weak effect | Band count too low | Raise to 16+ bands |
| No "talking" quality | Modulator and carrier swapped | Click L/R labels to swap |

---

### Unclear / Muddy Speech

| Symptom | Cause | Solution |
|---------|-------|----------|
| "Underwater" quality | Band count too low | Raise to 32-48 bands |
| Garbled consonants | BW too narrow | Raise BW to 55-70% |
| Missing "S" / "T" | Carrier lacks highs | Add 15% white noise to carrier [SRC: IL-MAN] |
| Overall muffled | MAX too low | Raise to 8-10kHz |
| No high-end clarity | Scale set to Linear | Change to Logarithmic |

**Priority Adjustments for Clarity:**
1. Increase BANDS to 32-48
2. Raise BW to 60%
3. Ensure MAX is 8kHz+
4. Add white noise to carrier
5. Check modulator quality (compressed but not distorted)

---

### Harsh / Sibilant / Fatiguing

| Symptom | Cause | Solution |
|---------|-------|----------|
| Sharp "S" sounds | Excessive modulator sibilance | De-ess modulator before vocoder |
| Piercing high-end | BW too wide | Lower BW to 40-50% |
| Metallic harshness | INV mode + bright carrier | Lower carrier brightness or disable INV |
| Overall harsh | High bands too loud | Lower 4kHz+ band sliders |
| Digital artifacts | Modulator clipped | Use clean, uncompressed modulator |

**Immediate Fixes:**
- De-ess modulator first
- Lower BW to 40%
- Reduce 4kHz-8kHz band sliders 30%
- Try different carrier (less bright)

---

### Phasey / Watery / Chorus-Like

| Symptom | Cause | Solution |
|---------|-------|----------|
| "Underwater" swirl | BW too narrow | Raise BW to 50%+ |
| Phase cancellation | Layering with dry signal | Use send/return or check phase |
| Chorus effect | Very low BW (<20%) | Raise BW minimum 30% |
| Unstable pitch | Modulator pitch variation | Use consistent pitch or monophonic |

---

### Gated / Choppy / Cutting Out

| Symptom | Cause | Solution |
|---------|-------|----------|
| Cuts between words | Decay too fast | Increase decay to 150ms+ |
| Hard gates | Attack too fast | Slow attack to 30-50ms |
| Stuttering | Modulator dynamics too extreme | Compress modulator gently |
| Rhythmic chop (unwanted) | HOLD engaged accidentally | Disable HOLD |
| Missing quiet parts | Modulator level too low | Raise modulator input |

---

### Robotic / Mechanical (When Not Desired)

| Symptom | Cause | Solution |
|---------|-------|----------|
| Too mechanical | INV enabled | Disable INV |
| Artificial quality | Low band count | Raise to 32+ bands |
| Excessive robot | FORM extreme | Bring closer to 0.0 |
| Metallic edge | Square wave carrier | Use sawtooth or pad instead |
| Lack of naturalness | BW too high | Lower to 40-50% |

---

### CPU Overload / Dropouts

| Symptom | Cause | Solution |
|---------|-------|----------|
| High CPU meter | Too many bands | Reduce to 16-24 |
| Audio dropouts | Multiple instances | Render to audio or use fewer instances |
| Lag / stutter | 128 bands + other plugins | Reduce bands or freeze tracks |
| Project sluggish | Unused vocoders active | Disable/mute unused instances |

**CPU Optimization:**
1. Reduce BANDS to 16-24
2. Render finished vocoded tracks to audio
3. Use one vocoder with automation vs multiple instances
4. Check other CPU-heavy plugins on same track

---

### Thin / Weak / Lacking Body

| Symptom | Cause | Solution |
|---------|-------|----------|
| No bass | MIN too high | Lower to 80-100Hz |
| Thin overall | Carrier lacks harmonics | Use richer carrier (sawtooth + noise) |
| Missing warmth | Low bands too quiet | Raise 200-400Hz band sliders |
| Weak presence | Modulator too quiet | Increase modulator level |
| Lack of weight | FORM too positive | Shift negative or to 0.0 |

---

### Inconsistent / Unpredictable Results

| Symptom | Cause | Solution |
|---------|-------|----------|
| Changes over time | Modulator level varying | Compress modulator |
| Different each play | Automation affecting | Check automation lanes |
| Random quality | External MIDI/modulation | Check controller assignments |
| Works sometimes | Routing changing | Verify track assignments |

---

## Specific Scenario Troubleshooting

### "It Worked Yesterday, But Not Today"

**Checklist:**
- [ ] Project template loaded correctly?
- [ ] Same plugin version?
- [ ] Audio interface settings unchanged?
- [ ] Routing still correct in mixer?
- [ ] Channel Rack panning preserved?
- [ ] No updates to FL Studio that changed behavior?

### "Sounds Different on Export"

**Common Causes:**
1. **Buffer size:** Real-time vs export processing differences
   - Solution: Test at same buffer size

2. **CPU overload:** Export processing more intensive
   - Solution: Freeze/render vocoded tracks before export

3. **Dithering:** Export settings affecting perceived quality
   - Solution: Check export bit depth and dither settings

4. **Different meter:** Export meter vs real-time meter
   - Solution: Check levels with Fruity Limiter

### "Vocoder Sounds Different in Different Projects"

**Likely Causes:**
1. Different FL Studio versions
2. Different audio interface / buffer settings
3. Different sample rates (44.1kHz vs 48kHz)
4. Plugin updates
5. Different mixer track processing

**Verification:**
- Create test project with known settings
- Compare across projects
- Document exact settings that work

---

## Verification Steps

After fixing an issue, verify:

- [ ] Sound is present and audible
- [ ] Vocoding is occurring (carrier "speaks")
- [ ] Quality is acceptable (not muddy/harsh)
- [ ] No unwanted artifacts
- [ ] CPU usage acceptable
- [ ] Works in mix context
- [ ] Consistent across playback/export

---

## Emergency Reset

If vocoder is completely messed up:

1. **Right-click vocoder plugin** → Init (reset to defaults)
2. **Check routing** from scratch
3. **Use starting template** from this pack
4. **Test with simple sources** (basic sawtooth + vocal)
5. **Build up complexity** gradually

**Default Reset Settings:**
```
FORM: 0.0
MIN: 100
MAX: 8000
SCALE: Log
INV: Off
BW: 50%
ATTACK: 15ms
DECAY: 100ms
BANDS: 32
L: 0%
R: 100%
```

---

**Source:** IL-MAN (Image-Line Manual), REPUTABLE (production practices)
**Last Updated:** 2026-02-03
