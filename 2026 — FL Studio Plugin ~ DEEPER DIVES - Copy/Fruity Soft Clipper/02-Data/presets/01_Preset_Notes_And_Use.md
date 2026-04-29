# Fruity Soft Clipper: Preset Notes and Use

## How to Use Presets Effectively

Soft Clipper has no factory presets, but the presets YOU create become critical workflow tools. This guide shows you how to use them strategically.

[SRC: REPUTABLE]

---

## Core Preset Usage Patterns

### Pattern 1: Genre-Specific Templates
**Setup:** Save different master bus settings per genre  
**Workflow:**
1. Create "Master - Trap (+2dB)" preset
2. Create "Master - R&B (+1dB)" preset
3. Create "Master - Lo-Fi (+3dB)" preset
4. Load appropriate preset when starting new track

**Benefit:** Instant genre-appropriate loudness

---

### Pattern 2: Bus-Specific Presets
**Setup:** One preset per common bus (drums, bass, vocal)  
**Workflow:**
1. "Drum Bus - Standard" → load on every drum group
2. "808 Bus - Trap Distortion" → load on 808+kick bus
3. "Vocal Bus - Smooth" → load on vocal track

**Benefit:** Consistent processing across projects

---

### Pattern 3: Vibe-Based Presets
**Setup:** Presets named by emotional target  
**Workflow:**
1. "Moody Master" → ultra-conservative settings
2. "Upbeat Master" → aggressive clipping
3. "Vibey Master" → balanced saturation
4. Load based on track vibe, not genre

**Benefit:** Faster creative decisions

---

## Preset Loading Strategies

### Strategy 1: Start with Preset, Adjust by Ear
1. Load "Master - Trap (+2dB)"
2. Play mix
3. If too harsh → raise Threshold +0.5 dB
4. If too weak → lower Threshold -0.5 dB
5. Save as new version if significantly different

### Strategy 2: Use Presets as Comparison Points
1. Load Preset A
2. Listen
3. Load Preset B
4. Listen
5. Pick the closer one, then fine-tune

### Strategy 3: Bypass → Preset → Adjust
1. Start with Soft Clipper bypassed
2. Load preset
3. Enable (un-bypass)
4. Immediately hear the effect
5. Adjust if needed

[SRC: REPUTABLE]

---

## Recommended Preset Collection (Minimal)

### Essential Presets (Must-Have)

**1. Master - Safe Default**
- Threshold: -1.0 dB, Post: +1.0 dB
- Use: 80% of projects

**2. Drum Bus - Standard Glue**
- Threshold: -3.0 dB, Post: +1.0 dB
- Use: Every drum group

**3. 808 - Trap Distortion**
- Threshold: -8.0 dB, Post: +3.0 dB
- Use: Aggressive bass (remember to boost input)

**4. Vocal - Gentle Smooth**
- Threshold: -0.5 dB, Post: 0 dB
- Use: Lead vocals before reverb

**5. Parallel - Warm Blend**
- Threshold: -10.0 dB, Post: 0 dB
- Use: Parallel saturation (blend at 30%)

**Total: 5 presets = covers 90% of use cases**

[SRC: REPUTABLE]

---

## Advanced Preset Techniques

### Technique 1: Versioned Presets
**Why:** Track iterations and improvements  
**How:**
- "Master - Trap v1 (+2dB)" → original
- "Master - Trap v2 (+2.5dB)" → refined version
- "Master - Trap v3 (+2dB, less harsh)" → further refinement

**Benefit:** Easy A/B testing, rollback capability

---

### Technique 2: Context-Tagged Presets
**Why:** Remember the context where preset works best  
**How:**
- "Master - Trap +2dB (after Multiband)" → use after multiband compression
- "Drum Bus -4dB (raw drums only)" → use on unprocessed drums
- "808 -8dB (boosted input)" → remember to boost input first

**Benefit:** Prevents misuse

---

### Technique 3: Hybrid Presets (Mixer Track States)
**Why:** Save entire processing chain  
**How:**
1. Configure mixer track: EQ → Compressor → Soft Clipper
2. Right-click mixer track → Save mixer track state
3. Name: "Drum Bus - Full Chain"
4. Load on any drum bus instantly

**Benefit:** Faster than loading individual plugins

---

## Preset Maintenance Workflow

### Monthly Review
1. Open preset folder
2. Delete unused presets (be ruthless)
3. Rename unclear presets
4. Test top 5 presets on current project
5. Update if workflow has changed

### Quarterly Refresh
1. Review last 10 projects
2. Identify most-used settings
3. Create presets for those settings
4. Archive old presets (don't delete, move to "Archive" folder)

[SRC: REPUTABLE]

---

## Preset Troubleshooting

### Problem: "My preset sounds different on every track"
**Cause:** Input signal level varies  
**Fix:** Normalize input levels before Soft Clipper, or save multiple versions

### Problem: "I have too many presets"
**Cause:** Saving everything without curation  
**Fix:** Delete all presets, start fresh with top 5

### Problem: "Preset names don't make sense anymore"
**Cause:** Poor naming conventions  
**Fix:** Rename all presets using format: `[Application] - [Vibe] ([Gain])`

### Problem: "Preset works in project A, fails in project B"
**Cause:** Different mix context (EQ, compression, etc.)  
**Fix:** Save presets with context notes (e.g., "works after EQ boost")

[SRC: REPUTABLE]

---

## Quick Reference: When to Use Which Preset

| Situation | Preset to Load | Notes |
|-----------|----------------|-------|
| **New Trap beat** | Master - Trap (+2dB) | Competitive loudness |
| **Moody R&B track** | Master - Moody (Minimal) | Preserve dynamics |
| **Drum mix is muddy** | Drum Bus - Medium Glue | Fuses transients |
| **808 needs aggression** | 808 - Trap Distortion | Boost input first |
| **Vocal has harsh peaks** | Vocal - Gentle Smooth | Before reverb |
| **Want warmth, not loudness** | Parallel - Warm Blend | Blend at 30% |

---

## Summary: Preset Best Practices

1. **Keep it minimal:** 5-10 core presets maximum
2. **Name descriptively:** Include application, vibe, and gain
3. **Version important presets:** Track iterations
4. **Tag with context:** Remember when/where to use
5. **Review quarterly:** Delete unused, refine frequently used
6. **Use mixer track states:** Save entire chains, not just Soft Clipper
7. **Test before saving:** Verify preset works on 3+ sources

**Golden Rule:** If you haven't used a preset in 3 months, delete it.

[SRC: REPUTABLE]

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Coverage:** Complete
