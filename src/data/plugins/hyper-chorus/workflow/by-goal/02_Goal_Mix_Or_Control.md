# Goal: Mix or Control

## Overview
Use Hyper Chorus for mix-focused applications: widening, spatial enhancement, and controlling stereo width without obvious "effect" character.

## Routing Context
**Recommended:** Send/Return or Parallel
- Send/Return: Shared width across multiple sources
- Parallel: Blend with dry for control
- Rarely insert for mix-focused work (unless subtle enhancement)

## Mix Applications

### 1. The Width Enhancer
Add subtle width to mono or narrow sources without obvious chorus.

**Setup:**
1. Place on send/return track
2. Set Hyper Chorus to 100% wet
3. Settings:
   - Voices: 4
   - Pad 1: X=35%, Y=10%
   - Pad 2: X=25%, Y=30%
   - Pad 3: X=20%, Y=20%
   - HP: 150Hz
   - LP: Full
4. Route sources to send at 20-30% level

**What to Listen For:**
- Width increase without obvious modulation
- Source maintains focus and clarity
- Mono compatibility preserved

**Sources to treat:**
- Mono synths
- Single-mic recordings
- Samples that need spatial enhancement

---

### 2. The Mono-to-Stereo Converter
Convert mono sources to stereo for modern mix width.

**Setup:**
1. Mono source on channel
2. Hyper Chorus as insert (not send)
3. Settings:
   - Voices: 8
   - Pad 1: X=45%, Y=20%
   - Pad 2: X=40%, Y=35%
   - Pad 3: X=40%, Y=30%
   - HP: 150Hz
   - Wet/Dry: 30%

**What to Listen For:**
- Clear stereo image
- No phase cancellation
- Natural width, not artificial

**Important:** Always check mono compatibility. If source disappears in mono, reduce modulation or increase dry signal.

---

### 3. The Bus Unifier
Create cohesive width across multiple sources using shared send.

**Setup:**
1. Create "Chorus Bus" mixer track
2. Hyper Chorus on bus, 100% wet
3. Settings:
   - Voices: 8
   - Pad 1: X=40%, Y=25%
   - Pad 2: X=35%, Y=30%
   - Pad 3: X=35%, Y=25%
   - HP: 200Hz
4. Route multiple sources to this bus

**What to Listen For:**
- Unified spatial character
- Sources blend together
- Consistent width across treated elements

**Applications:**
- Background vocals
- Synth layers
- Sample chops
- Guitar doubles

---

### 4. The Drum Bus Widener
Add width to drums while preserving transient punch.

**Setup:**
1. Route drum bus to Hyper Chorus send (parallel)
2. Or: Duplicate drum bus to parallel channel with Hyper Chorus
3. Settings:
   - Voices: 4
   - Pad 1: X=35%, Y=20%
   - Pad 2: X=30%, Y=30%
   - Pad 3: X=45%, Y=35%
   - HP: 300Hz (protects kick)
   - Wet/Dry: 100% on parallel
4. Blend parallel channel with dry drum bus

**What to Listen For:**
- Snare and hi-hats gain width
- Kick remains centered and punchy
- Overall drum sound bigger but not washed out

**Critical:** High HP filter is essential. Chorus on kick = phase issues.

---

### 5. The Low-End Protector
Apply chorus to mid-high frequencies only, preserving bass.

**Setup:**
1. Full-range source that needs width
2. Hyper Chorus with aggressive HP filtering
3. Settings:
   - HP: 300-400Hz (removes all low-mid content)
   - Voices: 8
   - Moderate other settings
   - Wet/Dry: 25-35%

**What to Listen For:**
- Width and character above 300Hz
- Bass and low-mids unaffected
- No phase cancellation in low end

**Applications:**
- Full mix widening (master bus - use cautiously)
- Bass-heavy synths
- Guitar tracks with important low-end

---

### 6. The Dimension D Emulation
Subtle spatial enhancement like classic Roland Dimension D.

**Setup:**
1. Insert on source or bus
2. Settings:
   - Voices: 4
   - Pad 1: X=30%, Y=0%
   - Pad 2: X=20%, Y=35%
   - Pad 3: X=0%, Y=0%
   - HP: 100Hz
   - Wet/Dry: 30%

**What to Listen For:**
- "Air" around the source
- Slight width increase
- No obvious chorus effect
- Enhanced "3D" quality

**Best for:**
- Master bus (subtle)
- Acoustic sources
- When you want space without "effect"

---

### 7. The Stereo Field Balancer
Use auto-pan to balance stereo image.

**Setup:**
1. Source that sits too heavy on one side
2. Settings:
   - Voices: 4
   - Pad 1: X=15%, Y=10%
   - Pad 2: X=15%, Y=20%
   - Pad 3: X=60%, Y=25% (gentle auto-pan)
   - HP: 150Hz
   - Wet/Dry: 25%

**What to Listen For:**
- More centered or balanced stereo image
- Gentle movement prevents static weight
- Doesn't fight with other panning decisions

---

## Mix Context Decisions

### When to Use Hyper Chorus in Mixing

| Situation | Use? | Approach |
|-----------|------|----------|
| Mix too narrow | Yes | Bus unifier on multiple sources |
| Mono source needs width | Yes | Mono-to-stereo conversion |
| Drums need width | Yes | Parallel processing with HP filter |
| Bass needs width | No | Keep bass mono always |
| Lead vocal needs something | Maybe | Very subtle, 15-20% wet |
| Background elements | Yes | More aggressive treatment acceptable |
| Master bus | Rarely | Only Dimension D style, very subtle |

### Width Hierarchy Strategy

Plan your mix width from center to edges:

```
Center (Mono)          →          Wide (Stereo)
Bass, Kick, Lead Vox      Snare, Leads       Hats, FX, Pads
     ↓                        ↓                    ↓
  No Chorus              Subtle Chorus      Obvious Chorus
  (Mono always)         (20-30% wet)       (30-50% wet)
```

## Mix Control Techniques

### 1. Wet/Dry Automation
Automate the mix amount for section contrast:
- Verses: 15-20% (intimate)
- Choruses: 25-35% (bigger)
- Bridges: 40%+ (experimental)

### 2. Send Level Automation
If using sends, automate send levels instead of wet/dry:
- More flexible
- Multiple sources respond together
- Easier to adjust globally

### 3. Filter Automation
Automate HP filter for section changes:
- Verse: HP 250Hz (cleaner)
- Chorus: HP 150Hz (fuller)

## Mix Pitfalls & Fixes

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| Over-widening | Mix lacks center focus | Reduce chorus on side elements |
| Phase collapse | Mix falls apart in mono | Check mono compatibility, reduce modulation |
| Mud buildup | Low-mids unclear | Raise HP filters across all chorus instances |
| Width inconsistency | Some sources too wide, others narrow | Unified send approach |
| CPU overload | Can't play mix back | Freeze tracks, reduce voice count |

## Automation Ideas for Mix Context

1. **Chorus Build-Up**
   - Gradually increase send levels during pre-chorus
   - Creates anticipation through widening

2. **Verse/Chorus Contrast**
   - Verses: Minimal chorus (focused)
   - Choruses: Full chorus (expansive)

3. **Drop Preparation**
   - Cut all chorus to 0% before drop
   - Re-introduce at full at drop for impact

---

**Version:** 1.0
**Last Updated:** 2026-02-03
