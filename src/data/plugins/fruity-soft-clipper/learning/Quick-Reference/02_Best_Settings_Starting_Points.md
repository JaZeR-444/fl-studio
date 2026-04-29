# Fruity Soft Clipper: Best Settings & Starting Points

## Universal Starting Points (Genre-Agnostic)

### The "Safe Default"
**Use When:** You're unsure where to start  
**Settings:**
- **Threshold:** -1.0 dB
- **Post Gain:** 0 dB
- **Position:** Final insert on Master track

**Why It Works:** Gentle clipping, minimal artifacts, universal applicability

[SRC: REPUTABLE]

---

### The "Invisible Loudness"
**Use When:** You need 2-3 dB more volume without anyone noticing  
**Settings:**
- **Threshold:** -0.5 dB
- **Post Gain:** +0.5 dB
- **Position:** Master track (before limiter)

**Why It Works:** Barely audible saturation, maximum transparency

---

### The "Drum Glue"
**Use When:** Your drums sound like separate samples instead of one instrument  
**Settings:**
- **Threshold:** -3.0 dB
- **Post Gain:** +1.0 dB
- **Position:** Drum bus (first insert)

**Why It Works:** Fuses transients together without destroying punch

---

## Genre-Specific Starting Points

### Trap / Modern Hip-Hop

**Master Bus:**
- **Threshold:** -2.0 dB
- **Post Gain:** +2.0 dB
- **Why:** Competitive loudness for streaming

**Drum Bus:**
- **Threshold:** -4.0 dB
- **Post Gain:** +1.5 dB
- **Why:** Maximum punch and cohesion

**808 + Kick Bus:**
- **Threshold:** -8.0 dB (drive input hot)
- **Post Gain:** +3.0 dB
- **Why:** Signature distorted bass sound

**Vocal:**
- **Threshold:** -1.0 dB
- **Post Gain:** 0 dB
- **Why:** Smooth peaks before reverb

[SRC: REPUTABLE - Trap production standard]

---

### R&B / Pop

**Master Bus:**
- **Threshold:** -1.0 dB
- **Post Gain:** +1.0 dB
- **Why:** Balanced loudness, less aggressive than Trap

**Drum Bus:**
- **Threshold:** -2.5 dB
- **Post Gain:** +0.5 dB
- **Why:** Cohesion without over-compression

**Bass (not 808):**
- **Threshold:** -2.0 dB
- **Post Gain:** 0 dB
- **Why:** Warmth and presence

**Vocal:**
- **Threshold:** -0.5 dB
- **Post Gain:** 0 dB
- **Why:** Gentle smoothing

---

### Boom-Bap / Classic Hip-Hop

**Master Bus:**
- **Threshold:** -1.5 dB
- **Post Gain:** +1.0 dB
- **Why:** Moderate loudness, vintage feel

**Drum Bus:**
- **Threshold:** -3.0 dB
- **Post Gain:** +1.0 dB
- **Why:** Punchy but not over-processed

**Sample Loop:**
- **Threshold:** -2.0 dB
- **Post Gain:** 0 dB
- **Why:** Tape-like saturation

---

### Lo-Fi / Chill

**Master Bus:**
- **Threshold:** -3.0 dB
- **Post Gain:** 0 dB
- **Why:** Intentional saturation for warmth

**Drum Bus:**
- **Threshold:** -4.0 dB
- **Post Gain:** 0 dB
- **Why:** Vintage, degraded character

**Everything:**
- **Threshold:** -2.0 to -4.0 dB
- **Post Gain:** 0 dB
- **Why:** Lo-fi embraces artifacts

---

### Experimental / Psychedelic

**Master Bus:**
- **Threshold:** -5.0 to -10.0 dB
- **Post Gain:** Variable
- **Why:** Intentional distortion and chaos

**Individual Tracks:**
- **Threshold:** Varies wildly per track
- **Post Gain:** Variable
- **Why:** Asymmetric, unpredictable character

---

## Application-Specific Starting Points

### Master Bus (General)
**Goal:** 2-3 dB loudness gain  
**Settings:**
- **Threshold:** -1.5 dB
- **Post Gain:** +1.5 dB
- **Position:** Final insert (or before limiter)

---

### Drum Bus (General)
**Goal:** Cohesive drum mix  
**Settings:**
- **Threshold:** -3.0 dB
- **Post Gain:** +1.0 dB
- **Position:** First insert on drum group

---

### 808 Distortion (Trap)
**Goal:** Aggressive saturated bass  
**Settings:**
- **Threshold:** -8.0 dB
- **Post Gain:** +3.0 dB
- **Position:** 808+Kick bus, first insert
- **Pre-Processing:** Boost input gain +6 dB before Soft Clipper

---

### Vocal Smoothing
**Goal:** Tame peaks without losing dynamics  
**Settings:**
- **Threshold:** -0.5 to -1.0 dB
- **Post Gain:** 0 dB
- **Position:** Before reverb/delay in vocal chain

---

### Parallel Saturation
**Goal:** Add warmth while preserving dynamics  
**Settings:**
- **Threshold:** -8.0 to -12.0 dB (aggressive)
- **Post Gain:** 0 dB
- **Position:** Parallel send, blend at 20-40%

---

## Adjustment Guidelines

### If It Sounds...

**Too Harsh:**
- Raise Threshold by +0.5 to +1.0 dB
- Or: Lower Post Gain by -1.0 dB

**Too Weak/Quiet:**
- Lower Threshold by -0.5 to -1.0 dB
- Or: Increase Post Gain by +1.0 to +2.0 dB

**Too Distorted:**
- Raise Threshold significantly (+2.0 dB or more)
- Check if input signal is too hot

**Not Doing Anything:**
- Lower Threshold to -2.0 dB or below
- Verify Threshold isn't at 0 dB (default)

**Losing Low-End:**
- Check mono compatibility
- Reduce Threshold or use multiband approach

[SRC: REPUTABLE]

---

## Quick Reference Table

| Use Case | Threshold | Post Gain | Position |
|----------|-----------|-----------|----------|
| **Master (general)** | -1.5 dB | +1.5 dB | Final insert |
| **Master (Trap)** | -2.0 dB | +2.0 dB | Before limiter |
| **Master (R&B)** | -1.0 dB | +1.0 dB | Before limiter |
| **Drum Bus** | -3.0 dB | +1.0 dB | First insert |
| **808+Kick Bus (Trap)** | -8.0 dB | +3.0 dB | First insert (hot input) |
| **Vocal** | -0.5 dB | 0 dB | Before reverb |
| **Parallel Saturation** | -10.0 dB | 0 dB | Send (20-40% blend) |

---

## Pro Tips for Faster Setup

1. **Save Your Presets:** Right-click plugin window → Save preset state
2. **Use Mixer Track Presets:** Save entire mixer tracks with Soft Clipper configured
3. **Template Projects:** Start new tracks with Soft Clipper pre-loaded on master/drum bus
4. **Macro Controls:** Assign Threshold to a MIDI knob for live adjustment

[SRC: REPUTABLE]

---

## The "Copy This Exactly" Settings

**If you just want to copy a working setup:**

```
TRAP BEAT TEMPLATE:
├─ Master: Threshold -2.0 dB, Post +2.0 dB
├─ Drum Bus: Threshold -4.0 dB, Post +1.5 dB
├─ 808+Kick Bus: Threshold -8.0 dB, Post +3.0 dB (boost input +6 dB first)
└─ Vocal: Threshold -1.0 dB, Post 0 dB

R&B TEMPLATE:
├─ Master: Threshold -1.0 dB, Post +1.0 dB
├─ Drum Bus: Threshold -2.5 dB, Post +0.5 dB
├─ Bass: Threshold -2.0 dB, Post 0 dB
└─ Vocal: Threshold -0.5 dB, Post 0 dB

LO-FI TEMPLATE:
├─ Master: Threshold -3.0 dB, Post 0 dB
├─ Drums: Threshold -4.0 dB, Post 0 dB
└─ Everything else: Threshold -2.0 to -4.0 dB, Post 0 dB
```

**Copy, paste, adjust by ear.**

[SRC: REPUTABLE]

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Coverage:** Complete
