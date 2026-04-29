# Crunchy Drum Bus Processing

## Goal
Add analog-style grit and character to drum groups while maintaining punch and transients.

## When to Use
- Electronic drums need more character
- Clean samples sound too sterile
- Need lo-fi hip-hop drum textures
- Want "sampled from vinyl" vibe
- Mixing modern drums with vintage sounds

## The Setup

### Routing
1. Create a send track or bus for your drum group
2. Add Fruity Squeeze as an insert effect
3. OR use Squeeze directly on drum bus with parallel Mix setting

### Core Settings
```
Squarize: 15%
Preserve: 60%
Impact: 40%
Relation: Centered
Filter Frequency: 10 kHz (Post-LP)
Filter Resonance: 10%
Mix: 35%
Gain: +2 dB (compensate for perceived volume loss)
```

## Step-by-Step Process

### Step 1: Set Up Parallel Processing
- **Why parallel?** Maintains original transients while adding crushed character
- Set Mix to 30-40% initially
- Keep dry signal punchy, add Squeeze for body

### Step 2: Dial In Bit Reduction
- Start with Squarize at 0%
- Slowly increase to 10-20%
- **Listen for:** Subtle digital "crunch" on snare hits
- **Stop when:** You hear character without harshness

### Step 3: Balance Preserve/Impact
- Set Preserve to 60% (keeps transients clean)
- Set Impact to 40% (adds crushed body/tail)
- Relation centered (balanced character)
- **Result:** Kick/snare attacks stay punchy, tails get crunchy

### Step 4: Tame High-End Artifacts
- Enable Post-LP filtering
- Set Frequency to 8-12 kHz
- Resonance at 5-10% (minimal)
- **Why:** Bit reduction creates aliasing; filtering prevents harshness

### Step 5: Fine-Tune Mix
- A/B between 25%, 35%, and 50% Mix
- **25%:** Subtle enhancement
- **35%:** Noticeable character (sweet spot)
- **50%:** Aggressive lo-fi
- Adjust to taste for your track

### Step 6: Level Match
- Bypass Squeeze and note perceived loudness
- Increase Gain to match processed volume
- **Important:** Bit reduction often reduces perceived loudness

## Genre-Specific Variations

### Lo-Fi Hip-Hop
```
Squarize: 20%
Preserve: 55%
Impact: 45%
Mix: 40%
Filter: Post-LP @ 9 kHz, Res 5%
```
**Character:** Warm, vinyl-sampled vibe

### Trap/Modern Hip-Hop
```
Squarize: 10%
Preserve: 70%
Impact: 30%
Mix: 25%
Filter: Post-LP @ 12 kHz, Res 8%
```
**Character:** Subtle grit, maintains punch

### Electronic/IDM
```
Squarize: 18%
Preserve: 50%
Impact: 50%
Relation: Slight favor to Impact
Mix: 45%
Filter: Post-LP @ 10 kHz, Res 12%
```
**Character:** Digital crunch, noticeable artifacts

### House/Techno
```
Squarize: 12%
Preserve: 65%
Impact: 35%
Mix: 30%
Filter: Post-LP @ 11 kHz, Res 6%
```
**Character:** Warmth and body without losing clarity

## Element-Specific Tips

### Kick Drums
- Keep Preserve high (65-75%) to maintain sub presence
- Use Post-HP filtering at 30-50 Hz if low-end gets muddy
- Lower Mix (20-30%) for subtle enhancement

### Snare/Claps
- Preserve at 55-65% maintains snap
- Squarize adds body to the tail
- Can push Mix higher (40-50%) for more character

### Hi-Hats/Cymbals
- Be careful with high Squarize (creates harshness)
- Use aggressive Post-LP filtering (8-10 kHz)
- Keep Mix lower (20-30%) to avoid brittle sound

### Toms/Percussion
- Benefit from higher Impact (45-55%)
- Preserve transients with 60%+ Preserve
- Squarize adds texture to resonance

## Common Issues & Fixes

### Problem: Kick loses punch
**Cause:** Too much Impact, Preserve too low
**Fix:** 
- Increase Preserve to 70%
- Lower Mix to 25%
- Consider sidechain filtering (use Patcher + EQ before Squeeze)

### Problem: Cymbals sound harsh/brittle
**Cause:** High-frequency aliasing from Squarize
**Fix:**
- Lower Squarize to 10-12%
- Set Filter to Post-LP at 8 kHz
- Reduce Filter Resonance to 0-5%

### Problem: Effect is too subtle
**Cause:** Mix too low, Squarize too conservative
**Fix:**
- Increase Squarize to 18-22%
- Push Mix to 40-50%
- Increase Impact to 50%

### Problem: Drums sound muddy
**Cause:** Low-frequency bit reduction
**Fix:**
- Use Post-HP filtering at 80-100 Hz
- Lower Impact in low frequencies
- Consider multiband routing (Patcher)

### Problem: Losing dynamics
**Cause:** Mix too high, parallel processing lost
**Fix:**
- Reduce Mix to 25-35%
- Increase Preserve to 70%
- Use true parallel routing (send track)

## Advanced Techniques

### Multiband Squeeze
1. Route drums through Patcher
2. Split into Low/Mid/High bands
3. Apply different Squeeze settings per band:
   - **Lows:** Squarize 5%, high Preserve (protect kick)
   - **Mids:** Squarize 20%, balanced Preserve/Impact (snare body)
   - **Highs:** Squarize 10%, heavy Post-LP filtering (tame cymbals)

### Dynamic Squeeze Automation
- **Intro:** Mix at 20% (subtle)
- **Verse:** Mix at 35% (noticeable)
- **Chorus:** Mix at 50% (aggressive lo-fi)
- **Breakdown:** Mix at 0% (clean contrast)
- Creates evolving texture throughout the track

### Layered Parallel Processing
Use two instances:
- **Instance 1 (Transient Layer):**
  - Squarize: 5%
  - Preserve: 90%
  - Mix: 20%
  - Preserves punch
- **Instance 2 (Body Layer):**
  - Squarize: 25%
  - Impact: 70%
  - Mix: 30%
  - Adds crushed character

### Genre-Switching Presets
Save snapshots for different sections:
- **Clean Section:** Bypass or Mix 0%
- **Lo-Fi Section:** Mix 50%, Squarize 25%
- **Hybrid Section:** Mix 35%, Squarize 15%
- Automate between them for dynamic arrangements

## Integration with Other Effects

### Before Squeeze
- **Compression:** Control dynamics before adding grit
- **Transient Shaper:** Enhance/reduce attack before processing
- **EQ:** Remove problem frequencies before bit reduction

### After Squeeze
- **Parametric EQ 2:** Surgical cleanup of harsh frequencies
- **Limiter:** Catch any peaks from aliasing artifacts
- **Reverb/Delay:** Add space to the crushed drums

### Parallel Chain
Run Squeeze in parallel with:
- Clean compression (maintain dynamics)
- Saturation (add different harmonic character)
- Reverb (blend crushed dry with clean space)

## A/B Comparison Checklist

When dialing in your settings, compare:
- [ ] Bypassed vs. processed (is it better?)
- [ ] Mix at 0% vs. current setting (right amount?)
- [ ] Squarize at 0% vs. current (just enough grit?)
- [ ] Preserve/Impact balance (maintaining punch?)
- [ ] Filter on vs. off (taming harshness?)
- [ ] Gain matched (same perceived loudness?)

## Export/Rendering Considerations

When bouncing drums with Squeeze:
- Check for clipping from aliasing artifacts
- Compare processed vs. unprocessed in full mix context
- Consider bouncing with headroom (leave ~3 dB for mastering)
- Save preset for recall if revisions needed

## Recommended Chain

```
[Drums Bus] 
    → Compression (glue/control)
    → EQ (corrective)
    → Fruity Squeeze (character)
    → Parametric EQ 2 (surgical cleanup)
    → Limiter (safety/ceiling)
    → [Mix Bus]
```

## Final Pro Tips

1. **Less is more:** Start with subtle settings, increase as needed
2. **A/B constantly:** Bypass frequently to ensure you're adding value
3. **Save presets:** Once you find a sound, save it for future projects
4. **Gain stage:** Always match levels when comparing processed/unprocessed
5. **Trust your ears:** If it sounds good, it is good—specs don't matter

---

**Remember:** The goal is character, not destruction. Keep drums punchy and musical while adding that crushed, lo-fi vibe.
