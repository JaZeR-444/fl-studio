# Workflow: Mix and Control with Fruity Vocoder

## Goal
Use the vocoder as a mixing tool—controlling spectral balance, adding texture, and managing space in the mix.

## Philosophy
Vocoder isn't just an effect; it's a spectral processor that can solve mix problems and create controlled sonic layers.

## Routing Context

### Mix Approaches

| Approach | Insertion Point | Wet/Dry | Best For |
|----------|----------------|---------|----------|
| **Parallel Send** | Return track | 20-40% | Adding texture, safe default |
| **Insert Processing** | Source track | 100% | Full transformation, sound design |
| **Bus Processing** | Group bus | 30-60% | Group cohesion, backing vocals |
| **Sidechain Utility** | Control only | N/A | Creative gating, rhythmic control |

### Parallel Send Setup (Recommended)

```
Lead Vocal ──► Track A (dry, main)
                    ├──► EQ ──► Comp ──► Master
                    │
                    └──► Send ──► Track B (return)
                                        ├──► Fruity Vocoder
                                        ├──► Post-EQ
                                        ├──► Comp
                                        └──► Reverb
                                              └──► 30% return level
```

### Insert Setup

```
Vocal ──► Fruity Vocoder (100% wet) ──► EQ ──► Comp ──► Master
```

**When to use:**
- Dedicated vocal effect track
- Full commitment to vocoded sound
- Sound design applications

## Step-by-Step: Mix Integration

### Step 1: Choose Mix Strategy

**Parallel vs Insert Decision Tree:**
```
Is this a lead vocal?
├─ Yes → Use parallel (preserve clarity)
└─ No → Is this a backing/texture?
          ├─ Yes → Could use either (parallel safer)
          └─ No → Is this pure sound design?
                    ├─ Yes → Insert, 100% wet
                    └─ No → Parallel recommended
```

### Step 2: Gain Staging

**Input Levels:**
- **Modulator (L):** -12dB to -6dB
- **Carrier (R):** -6dB to -3dB

**Output Management:**
```
1. Load Fruity Limiter after vocoder
2. Set ceiling at -1dB
3. Watch gain reduction meter
4. Adjust input if excessive limiting
```

**Headroom Rule:**
- Leave 6dB after vocoder for post-processing
- Vocoding can increase apparent loudness

### Step 3: Frequency Management

**Pre-Vocoder EQ (on sources):**

| Source | EQ Action | Purpose |
|--------|-----------|---------|
| Modulator | High-pass 80Hz | Remove rumble |
| Modulator | De-ess 4-8kHz | Control sibilance |
| Carrier | High-pass 100Hz | Clean sub range |
| Carrier | Gentle LPF if too bright | Match to vibe |

**Post-Vocoder EQ (on vocoded track):**

| Goal | Action | Frequency |
|------|--------|-----------|
| Warmth | Boost | 200-400Hz (+2-3dB) |
| Clarity | Boost | 3-5kHz (+1-2dB) |
| De-ess | Cut | 6-8kHz (-2-4dB) |
| Darken | High-shelf | 8kHz (-3-6dB) |
| Remove mud | Cut | 200-250Hz (-2dB) |

### Step 4: Dynamic Control

**Compression Strategy:**

| Stage | Compressor | Settings | Purpose |
|-------|------------|----------|---------|
| Pre-vocoder | Fruity Compressor | 2:1, slow | Consistent modulator |
| Post-vocoder | Fruity Limiter | -1dB ceiling | Safety |
| Post-vocoder | Fruity Compressor | 3:1, medium | Glue and sustain |
| Return track | Optional sidechain | Duck to kick | Groove alignment |

**Sidechain Setup for Groove:**
```
1. On vocoder return track, add Fruity Limiter
2. Sidechain input: Kick drum mixer track
3. Ratio: 4:1
4. Threshold: Adjust for 2-3dB ducking
5. Result: Vocoder breathes with the groove
```

### Step 5: Spatial Placement

**Reverb on Vocoded Track:**

| Reverb Type | Setting | Vibe |
|-------------|---------|------|
| Hall | 3-4s, 30-40% wet | Moody, atmospheric |
| Plate | 1.5-2s, 25-35% wet | Upbeat, clear |
| Room | 0.8-1.2s, 20-30% wet | Intimate, tight |
| Freeze | Hold sustained notes | Ambient, experimental |

**Stereo Width:**
- Default vocoder output: Centered, narrow
- To widen: Add subtle chorus (15% rate, 20% depth)
- Or: Use Fruity Stereo Enhancer (subtle, 20-30%)

**Depth Position:**
- More reverb = further back
- Less reverb = closer
- Vocoder naturally adds "processed" distance

## Mix Context Guidelines

### Hip-Hop Mixing

**Lead Vocal:**
- Parallel send: 20-30% return
- High-pass return at 100-120Hz
- Sidechain duck to kick (2-3dB)
- Bright EQ on return (+2dB at 3kHz)

**Ad-libs:**
- Can be 100% wet on dedicated track
- Or parallel at 35-45% (more prominent)
- INV mode common for character

**Background Vocals:**
- Parallel: 25-35% return
- Longer reverb than lead
- Slightly wider stereo image

### R&B Mixing

**Lead Vocal:**
- Parallel: 25-35% return
- Softer, smoother settings (see Vibe guides)
- Plate or hall reverb (2-3s)

**Harmonies:**
- Higher vocoder return: 30-40%
- Creates "halo" effect around lead
- Slightly wider and further back

**Texture Layers:**
- Can be 100% wet
- Heavy reverb (4s+)
- Very low in mix (felt, not heard)

## Controlled Chaos: Creative Gating

### Vocoder as Rhythm Tool

**Concept:** Use vocoder envelope to create rhythmic gating.

**Setup:**
```
Drum loop ──► Vocoder (L)
                 ├──► Pad or sustained sound (R)
                 └──► Output = rhythmically gated sustain
```

**Parameters:**
```
ATTACK: 2-5ms (tight)
DECAY: 60-100ms (responsive)
BANDS: 16 (rhythmic, not melodic focus)
```

**Applications:**
- Break fills (replacing drums with harmony)
- Rhythmic texture layers
- Build-up elements

## Mix Automation Strategy

### Return Level Automation

**Section-Based:**
```
Verse 1:    20% ─────────────────────
Pre-Chorus: 25% ────► 35% (ramp)
Chorus:     35-40% ─────────────────
Verse 2:    20% ─────────────────────
Bridge:     30% (with HOLD moments)
Outro:      35% ────► 0% (fade)
```

### EQ Automation

**Frequency Shifts:**
```
Verse:  MAX 6000Hz (limited, focused)
Chorus: MAX 10000Hz (open, airy)
Result: Chorus feels bigger
```

## Common Mix Problems Solved

### Problem: Vocal Lacks Character

**Solution:**
- Add subtle vocoder parallel layer
- FORM +0.1 to +0.2 for air
- Blend at 20-25%
- EQ boost 3-5kHz for presence

### Problem: Need Background Texture

**Solution:**
- Parallel send with high return (40%+)
- Slow attack/decay (150ms+/300ms+)
- Heavy reverb (4s+)
- Low in mix (felt, not heard)

### Problem: Transitions Need Interest

**Solution:**
- Automate vocoder engagement
- HOLD moments at phrase endings
- FORM sweep during transition
- 100% wet for 2-4 bars

### Problem: Group Cohesion

**Solution:**
- Route multiple vocals to same vocoder
- Shared carrier = unified timbre
- Glue effect via common processing

## Safety Rules for Mixing

### Frequency Masking

**Check These Relationships:**

| Vocoded Element | Watch For | Solution |
|-----------------|-----------|----------|
| Vocoded vocal vs Lead | Same frequencies | High-pass vocoder return |
| Vocoded layer vs 808 | Low-mid conflict | High-pass at 120Hz |
| Vocoded texture vs Hi-hats | High frequency clash | LPF at 10kHz or de-ess |

### Phase Coherence

**When Layering Vocoded + Dry:**
- Use parallel send (natural phase relationship)
- Check correlation meter (should be +0.5 to +1.0)
- Mono check: Ensure no cancellation
- Vocoder has zero latency (no timing shift) [SRC: IL-MAN]

### Headroom Management

**At Each Stage:**
- [ ] Input to vocoder: Not clipping
- [ ] Vocoder output: Peaks at -6dB or lower
- [ ] Post-processing: Leave 3-6dB headroom
- [ ] Final output: Peaks at -3dB to -1dB

## Quality Control Checklist

Before committing vocoded mix:
- [ ] Sounds good in solo
- [ ] Sounds better in mix (serves the song)
- [ ] No frequency masking with key elements
- [ ] Sibilance controlled
- [ ] Low-end not competing with kick/808
- [ ] Appropriate wet/dry balance for section
- [ ] CPU manageable (render if needed)
- [ ] Mono-compatible
- [ ] Export sounds same as real-time

---

**Source:** IL-MAN, REPUTABLE (mixing practices)
**Last Updated:** 2026-02-03
