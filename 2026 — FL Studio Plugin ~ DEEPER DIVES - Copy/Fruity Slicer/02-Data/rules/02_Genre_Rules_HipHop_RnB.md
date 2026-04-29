# Fruity Slicer: Genre Rules - Hip-Hop & R&B

## Sample-Based Hip-Hop Production Rules

### Rule 1: Sample Clearing & Organization
**Legal/Workflow Rule:** Always organize and document sample sources  
**Why:** Legal protection, project recall, professional workflow  
**Implementation:**
- Create folder per project: "Project_Name/Samples/Slicer_Sources/"
- Name files descriptively: "Vocal_Chop_01_Drake_Type.wav"
- Document BPM and key in filename or spreadsheet
- Keep unprocessed originals (never overwrite)

**Verification:** Can you rebuild project 6 months later?

[SRC: REPUTABLE - industry best practices]

---

### Rule 2: Mono Bass/Sub Compatibility
**Technical Rule:** Always check sliced bass/808 loops in mono  
**Why:** Prevents phase cancellation on club systems  
**Implementation:**
1. Load bass loop into Slicer
2. Create chop pattern
3. Enable FL Studio mono mode (Ctrl+M)
4. Listen: Bass should NOT vanish or thin out
5. If problematic: Re-slice with longer slices or EQ sub to mono

**Verification:** Bass stays present in mono (no volume drop)

[SRC: REPUTABLE]

---

## Trap Production Rules

### Rule 1: Aggressive Slice Density
**Guideline:** 16+ slices per 4-bar loop for Trap bounce  
**Why:** Trap thrives on rapid, stuttering chops  
**Settings:**
- Threshold: 30-40% (many slices)
- Crossfade: 5-10 ms (crisp)
- Pattern: Dense 1/16th or 1/32nd notes

**Verification:** Pattern feels energetic, not sparse

[SRC: REPUTABLE - Metro Boomin-style production]

---

### Rule 2: Vocal Chop as Melody
**Guideline:** Use sliced vocals as primary melodic element  
**Why:** Signature Trap sound (Pop Smoke, Lil Uzi)  
**Workflow:**
1. Load isolated vocal phrase
2. Slice into 8-12 pieces
3. Sequence melodic pattern (not original timing)
4. Add: Reverb, delay, pitch automation

**Verification:** Vocal chops carry melody (no synth needed)

[SRC: REPUTABLE]

---

### Rule 3: Resample for Layering
**Guideline:** Render chop pattern, layer with original  
**Why:** Creates depth and complexity  
**Workflow:**
1. Create chop pattern in Slicer
2. Export to audio (8 bars)
3. Load audio on new track
4. Layer with original Slicer pattern (different rhythm)
5. Pan left/right for width

**Verification:** Layered version sounds fuller than solo

[SRC: REPUTABLE]

---

## R&B / Pop-Hip-Hop Rules

### Rule 1: Smooth Transitions Required
**Guideline:** Crossfade 15-25 ms minimum  
**Why:** R&B needs smoothness, not aggression  
**Settings:**
- Threshold: 55-65% (moderate slicing)
- Crossfade: 20 ms (smooth)
- Pattern: Flowing, melodic (not choppy)

**Verification:** No audible clicks, smooth flow

[SRC: REPUTABLE]

---

### Rule 2: Preserve Vocal Syllables
**Guideline:** Never slice mid-word  
**Why:** R&B vocals need intelligibility  
**Workflow:**
1. Auto-detect slices
2. Manually delete slices that cut words
3. Keep only phrase-level or syllable-level slices
4. Preview each slice (should be whole word/phrase)

**Verification:** Each slice = complete word or phrase

[SRC: REPUTABLE]

---

### Rule 3: Reverb Integration Essential
**Guideline:** Route Slicer to reverb send (60-80% wet)  
**Why:** R&B chops live in reverb space  
**FX Chain:**
- Slicer → EQ (HPF 200 Hz) → Reverb Send (hall, 3s decay)

**Verification:** Chops blend into atmospheric bed

[SRC: REPUTABLE]

---

## Boom-Bap / Classic Hip-Hop Rules

### Rule 1: Respect the Break
**Guideline:** Preserve original break character  
**Why:** Boom-Bap = reverence for source material  
**Workflow:**
1. Load drum break (Amen, Apache, Funky Drummer)
2. Slice carefully (align with kick/snare exactly)
3. Rearrange subtly (don't destroy original groove)
4. "Dump to Piano Roll" as starting point, edit lightly

**Verification:** Sounds like reinterpretation, not destruction

[SRC: REPUTABLE - J Dilla, Pete Rock philosophy]

---

### Rule 2: Swing is Mandatory
**Guideline:** Apply 55-66% swing to all chop patterns  
**Why:** Boom-Bap lives in the pocket (not grid-locked)  
**Settings:**
- Piano Roll → Quantize → Swing: 60%
- Or manually shift notes off-grid

**Verification:** Pattern feels "drunk" and laid-back

[SRC: REPUTABLE]

---

### Rule 3: Vintage Processing
**Guideline:** Apply lo-fi/vintage FX to sliced breaks  
**Why:** Emulates SP-1200, MPC workflow  
**FX Chain:**
- Bit crusher (12-bit)
- Vinyl crackle
- HPF at 50 Hz, LPF at 12 kHz (bandwidth limiting)
- Gentle tape saturation

**Verification:** Sounds vintage, not digital

[SRC: REPUTABLE]

---

## Lo-Fi Hip-Hop Rules

### Rule 1: Embrace Artifacts
**Guideline:** Set Crossfade to 0-5 ms (intentional clicks)  
**Why:** Lo-fi = embrace imperfection  
**Settings:**
- Crossfade: 0-5 ms
- Time Stretch artifacts = good (don't fix)
- Click/pops = character

**Verification:** Should hear clicks, not smooth

[SRC: REPUTABLE]

---

### Rule 2: Extreme Time-Stretching Allowed
**Guideline:** Stretch ratio 0.5x to 2x (beyond normal limits)  
**Why:** Lo-fi thrives on degradation  
**Workflow:**
1. Load jazz/soul sample
2. Slice normally
3. Set Time Stretch to 0.6x (slow, warped)
4. Artifacts = desired

**Verification:** Sounds "broken" and lo-fi

[SRC: REPUTABLE]

---

### Rule 3: Layer with Vinyl Noise
**Guideline:** Always add vinyl crackle/hiss to sliced samples  
**Why:** Core lo-fi aesthetic  
**Workflow:**
1. Create chop pattern
2. Load vinyl noise sample on separate track
3. Mix at 20-30% volume
4. Sync to project (continuous crackle)

**Verification:** Sounds like played from vinyl

[SRC: REPUTABLE]

---

## Universal Slicer Mixing Rules

### Gain Staging Rule
**Rule:** Normalize input samples to -6 dBFS before slicing  
**Why:** Consistent slice triggering, prevents clipping  
**How:**
1. Load sample in Edison (or external audio editor)
2. Normalize to -6 dBFS
3. Export, load into Slicer

**Verification:** Waveform peaks at -6 dBFS

---

### Low-End Management Rule
**Rule:** Mono-sum frequencies below 120 Hz on sliced loops  
**Why:** Prevents phase issues on bass-heavy material  
**How:**
1. Route Slicer to mixer track
2. Add Fruity Stereo Shaper
3. Set: Frequencies below 120 Hz → 100% mono

**Verification:** Bass stays solid in mono playback

---

### Slice Length Minimum Rule
**Rule:** No slices shorter than 50ms (except glitch FX)  
**Why:** Too-short slices = clicks, unstable triggering  
**How:** Delete slices that are too short during manual refinement

**Verification:** All slices audible and stable

---

## Collaboration & Export Rules

### Rule 1: Export Stems with Slice Markers
**Guideline:** Save sliced samples with markers embedded  
**Why:** Allows collaborators to re-slice differently  
**How:**
- Right-click waveform → "Save Sliced Sample"
- Exports WAV with slice markers embedded

**Verification:** Collaborator can load and see your slices

---

### Rule 2: Document BPM and Key
**Guideline:** Include source BPM/key in project notes  
**Why:** Enables key matching, harmonic mixing  
**How:** Create "Project_Notes.txt" with:
```
Sample 1: Vocal_Chop_Drake - Original BPM: 72, Key: Am
Sample 2: Jazz_Loop - Original BPM: 110, Key: Dm
```

**Verification:** Anyone can rebuild project correctly

---

### Rule 3: Render "Dry" Stems
**Guideline:** Export Slicer stems without FX (dry)  
**Why:** Mixing/mastering engineer may want to process  
**How:**
- Bypass all FX on Slicer mixer track
- Export stem
- Send to engineer with "dry" label

**Exception:** If Slicer FX is creative (part of sound), keep and label "wet"

---

## Streaming Platform Considerations

### Spotify / Apple Music
**Loudness Target:** -14 LUFS integrated  
**Slicer Role:** Chopped elements contribute to perceived loudness  
**Guideline:** Avoid over-compression on sliced vocals (preserve dynamics)

### SoundCloud
**Loudness Target:** -8 to -10 LUFS integrated  
**Slicer Role:** More aggressive loudness acceptable  
**Guideline:** Parallel compression on drum chops for punch

### YouTube
**Loudness Target:** -13 LUFS integrated  
**Guideline:** Conservative loudness on vocal chops (YouTube normalizes heavily)

[SRC: REPUTABLE - streaming platform standards]

---

## Sample Legality Rules (Critical)

### Rule 1: Clear Samples or Use Royalty-Free
**Legal Rule:** Never release uncleared samples commercially  
**Options:**
1. Use royalty-free sample packs (Splice, Loopcloud)
2. Clear samples (contact rights holders, pay licensing)
3. Use creative commons samples (check license)
4. Interpolate (re-record sample yourself)

**Verification:** Can you legally release this track?

---

### Rule 2: Transform Significantly
**Guideline:** Even with cleared samples, transform creatively  
**Why:** Demonstrates artistry, reduces legal risk  
**How:**
- Chop beyond recognition (psychedelic glitch)
- Layer multiple sources (blend 3+ samples)
- Process heavily (pitch, FX, time-stretch)

**Verification:** Original sample not immediately recognizable

[SRC: REPUTABLE - music law best practices]

---

## Summary: The 10 Commandments

1. **Sample Hygiene:** Organize, document, and preserve originals
2. **Mono Check:** Always verify bass/sub in mono
3. **Crossfade Balance:** Smooth enough to remove clicks, no more
4. **Swing for Groove:** Apply swing on Boom-Bap, Jazzy, Vibey
5. **Slice Syllables:** Never cut words mid-syllable (R&B)
6. **Genre Matters:** Trap ≠ R&B ≠ Boom-Bap (adjust accordingly)
7. **Resample Creatively:** Second-generation chops unlock new possibilities
8. **FX Routing:** Use individual mixer routing for advanced processing
9. **Legal Protection:** Clear samples or use royalty-free
10. **Trust Your Ears:** Meters guide, ears decide

[SRC: REPUTABLE]

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Coverage:** Complete  
**Genres Covered:** Trap, R&B, Boom-Bap, Lo-Fi, Universal Rules
