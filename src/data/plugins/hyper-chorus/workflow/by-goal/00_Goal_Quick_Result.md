# Goal: Quick Result

## Overview
Get a usable chorus effect in under 2 minutes with minimal decisions.

## Routing Context
**Recommended:** Send/Return or Insert
- Send/Return: More control, share across sources
- Insert: Faster setup, source-specific

## Step-by-Step Setup

### Step 1: Load and Configure (30 seconds)
1. Load Hyper Chorus on target channel or create send
2. Set Dry/Wet to 30% for clear auditioning
3. Set Voices to 8

### Step 2: Quick Settings (45 seconds)
1. **Pad 1:** Drag to center (X=50%, Y=30%)
2. **Pad 2:** Drag to X=45%, Y=40%
3. **Pad 3:** Drag to X=40%, Y=30%
4. **HP Filter:** Set to 200Hz

### Step 3: Adjust for Context (30 seconds)
1. Listen with full mix playing
2. Reduce Wet/Dry if too obvious (target: 20-25%)
3. Switch to 4 voices if 8 is too thick
4. Raise HP filter if muddy (target: 200-300Hz)

### Step 4: Final Polish (15 seconds)
1. Toggle effect on/off - should enhance without dominating
2. Check mono button - should not disappear
3. Done

## Starting Settings Summary

| Parameter | Value |
|-----------|-------|
| Voices | 8 (or 4 if too thick) |
| Pad 1 | X=50%, Y=30% |
| Pad 2 | X=45%, Y=40% |
| Pad 3 | X=40%, Y=30% |
| HP Filter | 200Hz |
| LP Filter | 100% (no cut) |
| Noise | 0% |
| Wet/Dry | 25% |

## What to Listen For
- **Width increase:** Sound should be noticeably wider
- **No mud:** Low-end should stay clear
- **Mono safe:** Should maintain presence in mono
- **Musical:** Should enhance the song, not distract

## Variations

### For Faster Setup (Even Quicker)
Use these presets from `02-Data/presets/`:
- "Safe Default" - Balanced starting point
- "Vocal Thickener" - For vocals
- "Supersaw Classic" - For synths

### For Specific Sources
| Source | Quick Adjustment |
|--------|-----------------|
| Vocal | Raise HP to 300Hz, reduce Pad 2 X to 35% |
| Synth | Can be more aggressive, Pad 2 X=60% |
| Drums | Raise HP to 300Hz, use 4 voices |
| Pad | Keep 8 voices, can increase wet to 35% |

## Common Pitfalls & Quick Fixes

| Problem | Quick Fix |
|---------|-----------|
| Too subtle | Increase wet to 40% or switch to 8 voices |
| Too obvious | Reduce wet to 15% or switch to 4 voices |
| Muddy | Raise HP filter 50Hz higher |
| Harsh | Lower Pad 1 Y (feedback) |
| Phase issues | Raise HP filter, reduce Pad 2 X |

## When to Use This Workflow
- **Time-limited sessions:** Need results fast
- **Initial exploration:** Finding what works
- **Template creation:** Building starting states
- **Learning phase:** Understanding the plugin

## When NOT to Use This Workflow
- **Final mix decisions:** Needs more careful tuning
- **Complex sources:** May need customized approach
- **Critical elements:** Lead vocals deserve full attention

## Automation Ideas (If Time Permits)
1. **Section contrast:** Reduce wet in verses, increase in choruses
2. **Build automation:** Gradually increase Pad 3 X during build-ups
3. **Drop preparation:** Cut all parameters by 50% before a drop

---

**Version:** 1.0
**Last Updated:** 2026-02-03
