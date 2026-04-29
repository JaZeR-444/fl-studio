# Workflow: Moody Vibe with Fruity Soft Clipper

## Goal
Create dark, introspective, emotionally heavy mixes with minimal saturation and wide dynamics.

**Vibe Reference:** Drake "Marvins Room," The Weeknd "Wicked Games," SZA's moody tracks

[SRC: REPUTABLE]

---

## Routing Context

**Master:** Insert slot (last position)  
**Drums:** No Soft Clipper (use compression instead)  
**Vocals:** Insert slot 1 (before reverb)  
**808/Bass:** No Soft Clipper (keep clean)

---

## Step-by-Step Setup

### Step 1: Master Bus (Ultra-Conservative)
1. Load Soft Clipper on Master track
2. **Threshold:** -0.3 dB (barely clipping)
3. **Post Gain:** 0 dB (no loudness boost)
4. **Why:** Transparent glue without aggression

**Listen For:** Mix feels "together" but not "pushed forward"

---

### Step 2: Vocals (Gentle Smoothing)
1. Load Soft Clipper on vocal track (slot 1, before reverb)
2. **Threshold:** -0.5 dB
3. **Post Gain:** 0 dB
4. **Why:** Smooths peaks for clean reverb tail

**Listen For:** Reverb doesn't get triggered by harsh consonants

---

### Step 3: Drum Bus (SKIP SOFT CLIPPER)
1. **DO NOT** load Soft Clipper on drums
2. Use light compression instead (2:1 ratio, slow attack)
3. **Why:** Moody drums need to breathe naturally

**Listen For:** Drums stay dynamic, don't "slam"

---

### Step 4: 808/Bass (KEEP CLEAN)
1. **DO NOT** load Soft Clipper on bass
2. Keep 808/bass completely clean
3. **Why:** Moody tracks need smooth, sub-heavy bass

**Listen For:** Bass stays smooth and "round," not "buzzy"

---

### Step 5: Reverb Send Preparation
1. On reverb send track, add EQ **before** reverb
2. HPF at 200 Hz (remove low-end from reverb)
3. **Why:** Prevents muddy reverb from being saturated

**Listen For:** Reverb feels "airy" and high, not thick

---

## Starting Settings Summary

| Track | Soft Clipper? | Threshold | Post Gain | Notes |
|-------|---------------|-----------|-----------|-------|
| **Master** | ✅ Yes | -0.3 dB | 0 dB | Ultra-conservative |
| **Drums** | ❌ No | N/A | N/A | Use compression instead |
| **Vocals** | ✅ Yes | -0.5 dB | 0 dB | Before reverb |
| **808/Bass** | ❌ No | N/A | N/A | Keep clean |
| **Reverb** | ❌ No | N/A | N/A | HPF before reverb |

---

## What to Listen For

### Moody Validation Checklist
- [ ] Mix feels "pulled back," not forward
- [ ] Vocals sit "inside" the reverb, not on top
- [ ] Low-end is smooth and deep, not aggressive
- [ ] Transients are natural, not punchy
- [ ] Overall tone is dark/warm, not bright/harsh
- [ ] Dynamic range is wide (quiet parts stay quiet)

---

## Variations

### Variation 1: Extra-Moody (Even More Conservative)
**Use When:** Extremely introspective tracks  
**Settings:**
- Master Threshold: **-0.2 dB** (barely touching)
- Vocal Threshold: **-0.3 dB**
**Result:** Near-zero saturation, maximum transparency

---

### Variation 2: Moody with Parallel Warmth
**Use When:** Want subtle warmth without aggression  
**Setup:**
1. Create parallel send from master
2. Load Soft Clipper on parallel track
3. Threshold: **-8 dB** (aggressive on parallel)
4. Blend parallel at **10-15%** maximum
**Result:** Subtle "glow" without losing dynamics

---

## Pitfalls & Fixes

### Pitfall 1: "Drums sound too aggressive"
**Cause:** Using Soft Clipper on drums (breaks moody vibe)  
**Fix:** Remove Soft Clipper from drums, use light compression (2:1, slow attack)

### Pitfall 2: "Bass sounds distorted"
**Cause:** Using Soft Clipper on 808/bass  
**Fix:** Remove Soft Clipper from bass entirely, keep clean

### Pitfall 3: "Mix sounds too loud/in-your-face"
**Cause:** Threshold too low or Post Gain > 0 dB  
**Fix:** Raise Threshold to -0.3 dB, keep Post Gain at 0 dB

---

## Automation Ideas

### Automation 1: Static (No Movement)
**Why:** Moody tracks need consistency  
**How:** DO NOT automate Threshold  
**Result:** Steady, unchanging character throughout track

### Automation 2: Outro Fade (Optional)
**When:** Final 8 bars of outro  
**How:** Automate Threshold from -0.3 dB → 0 dB (gradual disable)  
**Result:** Natural fade-out without volume automation

---

## Moody-Specific Techniques

### Technique 1: Sub-Bass Protection
**Setup:**
1. If you MUST clip bass, use Patcher
2. Split into Low (20-100 Hz) and Mid/High (100 Hz+)
3. Apply Soft Clipper ONLY to Mid/High
4. Leave Low (sub) completely clean
**Result:** Preserved sub-bass weight

### Technique 2: Reverb Pre-Clipping
**Setup:**
1. Vocal → Soft Clipper (-0.5 dB) → Reverb Send
2. Reverb Send → HPF 200 Hz → Reverb Plugin
**Result:** Clean, airy reverb that sits naturally

### Technique 3: Parallel Saturation (Subtle)
**Setup:**
1. Send master to parallel track (10% blend)
2. Parallel Soft Clipper: Threshold -8 dB
3. Blend at 10-15% maximum
**Result:** Warmth without destroying dynamics

---

## Genre-Specific Moody Rules

### Dark R&B
- Master: -0.3 dB
- Vocals: -0.5 dB (pre-reverb)
- Everything else: Clean

### Introspective Hip-Hop (Drake-style)
- Master: -0.5 dB (slightly more than R&B)
- Vocals: -0.5 dB
- Everything else: Clean

### Sad Trap (Moody + 808)
- Master: -0.5 dB
- Vocals: -0.5 dB
- 808: **-2 dB** (gentle warmth, not distortion)
- **Exception:** Sad Trap allows subtle 808 saturation

---

## Reference Tracks for Moody Vibe

**Load these and match your settings:**
- Drake - "Marvins Room" (ultra-conservative loudness)
- The Weeknd - "Wicked Games" (dark, pulled-back)
- SZA - "The Weekend" (moody R&B)
- Bryson Tiller - "Don't" (introspective Trap)

**Verification:** Your RMS should be -10 to -8 dBFS (quieter than upbeat tracks)

---

## Moody Mix Hygiene

### Rule 1: Preserve Headroom
**Why:** Moody isn't about loudness  
**How:** Keep master peaks around -6 to -3 dBFS  
**Verification:** Lots of visual headroom on meters

### Rule 2: Wide Dynamic Range
**Why:** Quiet sections should stay quiet  
**How:** Avoid aggressive compression/clipping  
**Verification:** RMS difference between verse/chorus = 3-4 dB

### Rule 3: Dark Tonal Balance
**Why:** Moody = less high-end brightness  
**How:** Roll off highs above 8 kHz (slight)  
**Verification:** Mix doesn't sound "sparkly"

---

## Troubleshooting Moody Vibe

| Problem | Diagnosis | Fix |
|---------|-----------|-----|
| **Mix sounds too energetic** | Threshold too low, clipping too much | Raise to -0.2 to -0.3 dB max |
| **Bass sounds aggressive** | Using Soft Clipper on bass | Remove clipper from bass |
| **Drums too punchy** | Using Soft Clipper on drums | Remove clipper, use light compression |
| **Mix too loud** | Post Gain > 0 dB | Set Post Gain to 0 dB |

---

## Summary: Moody Vibe Essentials

> **Moody = Minimal Clipping:**
> - Master: -0.3 dB, Post 0 dB
> - Vocals: -0.5 dB, Post 0 dB (before reverb)
> - Drums: NO Soft Clipper (compression instead)
> - Bass: NO Soft Clipper (keep clean)
>
> **Key:** Transparency, dynamics, space. Moody is about emotion, not loudness.

**DO:** Ultra-conservative settings, preserve dynamics  
**DON'T:** Clip drums, clip bass, push for loudness

[SRC: REPUTABLE]

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Coverage:** Complete
