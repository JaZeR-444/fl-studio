# Drum Punch Enhancement

## The Goal

Add punch, crack, and aggression to drums while maintaining dynamic control.

[SRC: IL-MAN] Bipolar mode preserves transient bite through asymmetric distortion of drum hits.

## Drum Distortion Philosophy

Drums are about **transients**—the initial attack that makes a kick punch and a snare crack. WaveShaper can enhance or destroy these transients depending on your settings.

## Kick Drums: Maximum Impact

### The Challenge
Kicks need to hit hard without becoming muddy or losing low-end weight.

### Settings for Hard-Hitting Kicks
- **Mode:** Bipolar (asymmetric = bite)
- **Curve:** Hard clip or asymmetric
- **Pre:** +12 to +16dB
- **Mix:** 60-75%
- **Post:** -12 to -16dB
- **Oversample:** 4x-8x

### Asymmetric Kick Curve
**Positive half:** Hard clip (sharp attack)  
**Negative half:** Softer curve (sustain control)  

This emphasizes the transient while controlling the body.

### Technique
1. Solo the kick
2. Apply settings above
3. Adjust Mix until punch is maximized without losing body
4. Check in context with bass/808

## Snare Drums: Crack and Body

### The Challenge
Snares need crack (transient) AND body (ring). Different distortion for each.

### Settings for Cracking Snares
- **Mode:** Bipolar
- **Curve:** Asymmetric—hard positive, soft negative
- **Pre:** +10 to +14dB
- **Mix:** 55-70%
- **Post:** -10 to -14dB
- **Oversample:** 4x

### Technique
**Parallel Processing:**
1. **Main snare:** Light saturation (Unipolar, 30% Mix)
2. **Parallel bus:** Heavy distortion (Bipolar, 100% Mix)
3. **Blend parallel bus** underneath for crack
4. **EQ the parallel layer** (boost 3-5kHz for crack)

## Hi-Hats: Sizzle and Control

### The Challenge
Hats need density but can become harsh with distortion.

### Settings for Controlled Hats
- **Mode:** Unipolar (safer for highs)
- **Curve:** Gentle saturation
- **Pre:** +4 to +8dB
- **Mix:** 30-50%
- **Post:** -4 to -8dB
- **Oversample:** 8x (critical for high frequencies)

### Technique
**High-Frequency Protection:**
- Distort BEFORE any high-shelf boosts
- Or boost highs AFTER distortion
- Prevents excessive harshness

## Drum Bus Processing

### Settings for Cohesive Drum Sound
- **Mode:** Unipolar (glue) OR Bipolar (aggression)
- **Curve:** Soft clip or gentle saturation
- **Pre:** +6 to +10dB
- **Mix:** 40-60%
- **Post:** -6 to -10dB
- **Oversample:** 4x

### Philosophy
Drum bus saturation ties the kit together. Each drum gets individual character; the bus adds cohesion.

## Genre-Specific Drum Recipes

### Trap Drums
- **Mode:** Bipolar
- **Pre:** +14dB
- **Mix:** 70%
- **Oversample:** 4x
- **Character:** Aggressive, modern, hard-hitting

### Boom Bap Drums
- **Mode:** Unipolar
- **Pre:** +8dB
- **Mix:** 50%
- **Oversample:** 2x
- **Character:** Warm, vintage, punchy

### EDM Drums
- **Mode:** Bipolar
- **Pre:** +16dB
- **Mix:** 75%
- **Oversample:** 8x
- **Character:** Maximum impact, cutting through synths

### Lo-Fi Drums
- **Mode:** Unipolar
- **Pre:** +6dB
- **Mix:** 45%
- **Oversample:** 2x
- **Additional:** Bitcrush some elements
- **Character:** Warm, crushed, "vinyl" feel

## Advanced Drum Techniques

### Transient Shaping with Curves
**Goal:** Isolate and enhance just the transient

**Method:**
1. Use hard clip threshold at 0.6-0.7
2. Everything below threshold = clean
3. Everything above = clipped (enhanced transient)
4. Blend with Mix control

### Room Mic Distortion
1. Send drums to room reverb
2. Distort the room return heavily
3. Blend room distortion under dry drums
4. Creates "crushed room" sound

### Ghost Note Enhancement
- **Increase Pre gain** for ghost notes
- **Harder curve** for clear articulation
- **Lower Mix** to keep subtle
- Brings quiet notes forward without crushing loud ones

## Common Drum Mistakes

### Mistake 1: Too Much Distortion
**Problem:** Drums sound like white noise
**Fix:** Reduce Mix, use softer curve

### Mistake 2: Destroying Transients
**Problem:** Soft curve rounds off attacks
**Fix:** Use Bipolar mode, hard clip curve

### Mistake 3: Ignoring Phase
**Problem:** Distorted kick and 808 conflict
**Fix:** Check mono compatibility

### Mistake 4: No Oversampling on Hats
**Problem:** Harsh, digital-sounding cymbals
**Fix:** Use 8x+ oversampling

## Testing Your Drum Distortion

### Punch Test
1. Solo drums
2. Bypass WaveShaper
3. Re-enable WaveShaper
4. Should hear more attack, not just loudness

### Context Test
1. Play drums with music
2. Do drums cut through?
3. If not, increase Mix or Pre gain

### Fatigue Test
1. Listen for 30 seconds
2. Do ears tire?
3. If yes, reduce drive or switch to Unipolar

---

**Version:** 1.0  
**Last Updated:** 2026-02-03
