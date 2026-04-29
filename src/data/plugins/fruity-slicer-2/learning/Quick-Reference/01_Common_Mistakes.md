# Fruity Slicer 2 - Common Mistakes

## 15 Mistakes + Diagnostics + Fixes

### Mistake 1: Playing Full Loop Instead of Single Slice
**Symptom:** Pressing C5 plays entire sample, not just Slice 1.

**Diagnosis:**  
Check "Play to End" toggle — if enabled, first slice triggers full sample playback.

**Fix:**  
Disable "Play to End" for individual slice triggering.  
OR: Use this intentionally for one-shot loop playback.  
[SRC: IL-MAN]

---

### Mistake 2: Chromatic Mode Sounds Detuned
**Symptom:** Playing C4 chromatic slice sounds sharp/flat vs. project key.

**Diagnosis:**  
Sample root note doesn't match C. If sample is in E, playing C will be -4 semitones off.

**Fix:**  
Adjust Global Pitch slider to match sample's root note.  
Example: Sample in E → Pitch +4st → Now C4 = E4.  
[SRC: IL-KB]

---

### Mistake 3: Over-Slicing (128 Slices Detected)
**Symptom:** Auto-slice creates 128 slices, impossible to navigate.

**Diagnosis:**  
Sensitivity set too high (90-100%) on noisy/complex sample.

**Fix:**  
Reduce sensitivity to 30-50%.  
Manually delete unwanted markers.  
OR: Use Slicex for better management of 64+ slices.  
[SRC: IL-KB]

---

### Mistake 4: Clicks/Pops Between Slices
**Symptom:** Audible clicks when triggering slices.

**Diagnosis:**  
Zero-crossing issues or no volume envelope applied.

**Fix:**  
Volume envelope: Attack 5-10ms, Release 50-100ms.  
This creates smooth fade-in/out.  
[SRC: IL-MAN]

---

### Mistake 5: Time Stretching Sounds Robotic
**Symptom:** Vocal slices sound like robots when stretched >200%.

**Diagnosis:**  
Using "Fast" or "Standard" algorithm on extreme stretch.

**Fix 1:** Switch to "Pro" algorithm (higher CPU, better quality).  
**Fix 2:** Resample at new tempo instead of stretching.  
**Fix 3:** Accept artifacts as lo-fi aesthetic (valid choice).  
[SRC: IL-MAN]

---

### Mistake 6: Slices Trigger Out of MIDI Order
**Symptom:** Playing C4 triggers Slice 8 instead of Slice 1.

**Diagnosis:**  
MIDI mapping corrupted or custom mapping applied.

**Fix:**  
Reset MIDI mapping: Options → Reset to default.  
Default: C5 = Slice 1, C#5 = Slice 2, etc.  
[SRC: IL-MAN]

---

### Mistake 7: Bass/Kick Slices Thin Out in Mono
**Symptom:** Track sounds punchy in stereo, weak in mono (club/phone).

**Diagnosis:**  
Stereo bass sample has phase cancellation.

**Fix:**  
Use mono bass samples.  
OR: Sum to mono <150Hz (Fruity Stereo Shaper).  
Pan envelope: Keep bass/kick centered (0%).  
[SRC: Mixing Best Practices]

---

### Mistake 8: CPU Spikes with Multiple Instances
**Symptom:** Project stutters with 5+ Slicer 2 instances.

**Diagnosis:**  
High CPU from multiple "Pro" time stretch algorithms.

**Fix 1:** Freeze tracks (Ctrl+Alt+V or Mixer → Freeze).  
**Fix 2:** Bounce Slicer patterns to audio.  
**Fix 3:** Use "Fast" algorithm on non-critical slices.  
**Fix 4:** Increase buffer size (Options → Audio → 512 samples).  
[SRC: FL Studio Performance Guide]

---

### Mistake 9: Lost in Slice Envelope Edits
**Symptom:** Forgot which slice has which envelope settings.

**Diagnosis:**  
No visual tracking system for per-slice envelopes.

**Fix:**  
Color-code slices (if available).  
OR: Name slices clearly ("Kick_LowPass", "Hat_PanLR").  
OR: Document envelope settings in project notes.  
[SRC: Workflow Best Practices]

---

### Mistake 10: Pitch Envelope Conflicts with Chromatic Mode
**Symptom:** Chromatic slice playback ignores pitch envelope.

**Diagnosis:**  
Chromatic mode overrides per-slice pitch envelope.

**Fix:**  
Disable Chromatic mode when using pitch envelopes.  
OR: Use global pitch slider + chromatic mode (not per-slice pitch).  
[SRC: IL-KB]

---

### Mistake 11: Slice Markers Misaligned with Transients
**Symptom:** Kick slice starts late, snare slice cuts off early.

**Diagnosis:**  
Auto-detection placed markers incorrectly.

**Fix:**  
Manually drag slice markers to align with transients.  
Zoom in on waveform for precision.  
Listen/preview each slice to verify.  
[SRC: IL-MAN]

---

### Mistake 12: Forgetting to Normalize Sample Before Slicing
**Symptom:** Slices are too quiet, clipping when boosted.

**Diagnosis:**  
Sample input level too low or too high.

**Fix:**  
Normalize sample in Edison before loading into Slicer 2.  
OR: Use Fruity Limiter on Slicer 2 output (CEIL -0.3 dB).  
[SRC: Mixing Best Practices]

---

### Mistake 13: Reversed Slices Sound Muddy
**Symptom:** Reversed bass/kick slices lack clarity.

**Diagnosis:**  
Low frequencies don't reverse well (phase issues).

**Fix:**  
High-pass reversed bass slices >80Hz.  
OR: Use reversed slices on mid/high content only (vocals, cymbals).  
[SRC: SAMPLING]

---

### Mistake 14: Chromatic Slice Doesn't Loop
**Symptom:** Holding MIDI note, slice plays once and stops.

**Diagnosis:**  
Loop mode not enabled for chromatic playback.

**Fix:**  
Check loop settings in Slicer 2.  
OR: Use long Release envelope (500-1000ms) for sustained notes.  
[SRC: IL-MAN]

---

### Mistake 15: Sample Copyright/Clearance Issues
**Symptom:** Used recognizable break without clearance.

**Diagnosis:**  
Many classic breaks (Amen, Apache, Funky Drummer) are copyrighted.

**Fix:**  
**Transformative use:** Pitch shift, re-order, layer with original content.  
**Clear sample:** If using unaltered loops, obtain license.  
**Use royalty-free packs:** Legal sample libraries.  
**Document sources:** Track sample origins for future reference.  
[SRC: Sample Clearance Best Practices]

---

## Quick Diagnostic Flowchart

```
Problem: Slicer 2 not working as expected
│
├─ No sound?
│  ├─ Check: Sample loaded? → Load sample
│  ├─ Check: Volume up? → Increase mixer volume
│  └─ Check: MIDI notes in range? → C5-C6 default range
│
├─ Wrong slices triggering?
│  ├─ Check: MIDI mapping → Reset to default
│  └─ Check: Chromatic mode → Disable if using multiple slices
│
├─ Sounds bad?
│  ├─ Clicks/pops → Apply volume envelope (A:5ms, R:50ms)
│  ├─ Robotic stretch → Use Pro algorithm or resample
│  ├─ Thin in mono → Use mono samples, center bass/kick
│  └─ Too many slices → Reduce sensitivity, manual cleanup
│
├─ Performance issues?
│  ├─ CPU high → Freeze tracks, use Fast algorithm
│  └─ Latency → Reduce buffer size (128-256 samples)
│
└─ Legal issues?
   └─ Sample clearance → Transform sample or clear rights
```

---

## Prevention Checklist

Before loading sample into Slicer 2:

- [ ] **Normalize audio** (Edison → Normalize)
- [ ] **Check sample quality** (24-bit > 16-bit, 44.1kHz minimum)
- [ ] **Verify mono/stereo** (Bass/kicks = mono, ambience = stereo)
- [ ] **Note original BPM/key** (for time stretch/pitch reference)
- [ ] **Document sample source** (for clearance tracking)

After auto-slicing:

- [ ] **Verify slice alignment** (zoom in, check transients)
- [ ] **Test chromatic mode** (if using melodic slices)
- [ ] **Apply volume envelopes** (prevent clicks)
- [ ] **Mono check** (bass/kick punch in mono)
- [ ] **Save preset** (before experimenting with slice order)

---

## Hip-Hop/R&B Specific Mistakes

### Mistake: Using Straight Quantization on Jazzy Sample
**Problem:** Swing-based sample sounds robotic when quantized to straight grid.

**Fix:** Apply swing quantize (66%) or manual timing shifts.  
[SRC: HIPHOP]

---

### Mistake: Over-Filtering Vocal Chops
**Problem:** Vocal chops lose intelligibility with aggressive low-pass.

**Fix:** Filter cutoff >1.5kHz to preserve consonants.  
Boost 3-5kHz for clarity.  
[SRC: Mixing, Vocal Production]

---

### Mistake: Not Layering Vinyl Crackle on Lo-Fi Flips
**Problem:** Sample sounds too clean for lo-fi aesthetic.

**Fix:** Add Effector → Vinyl preset after Slicer 2 (20-40% mix).  
[SRC: HIPHOP, Lo-Fi Production]

---

### Mistake: Ignoring Sample Legality
**Problem:** Using Amen Break unaltered in commercial release.

**Fix:**  
- Pitch shift ±3-7 semitones
- Re-order slices
- Layer with original drums
- Obtain license if using unaltered

[SRC: Sample Clearance Best Practices]

---

**Source Tags:**
- [SRC: IL-MAN] = Image-Line Manual
- [SRC: IL-KB] = Image-Line Knowledge Base  
- [SRC: SAMPLING] = Sample Manipulation Techniques
- [SRC: HIPHOP] = Hip-Hop Production Context
- [SRC: Mixing Best Practices] = Industry Mixing Standards
- [SRC: FL Studio Performance Guide] = FL Studio Optimization
- [SRC: Workflow Best Practices] = Production Workflow Standards
- [SRC: Sample Clearance Best Practices] = Legal/Copyright Guidelines
