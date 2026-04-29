# Workflow: Sound Design with Fruity Vocoder

## Goal
Create unique, evolving, and artistic sounds using the vocoder as a creative tool.

## Philosophy
Vocoder is not just for "talking synth"—it's a spectral processor that can create entirely new timbres, rhythms, and textures.

## Routing Context

### Primary Sound Design Setup
```
Sound Source ──► Mixer Track ──► Fruity Vocoder ──► Effect Chain
   (any audio)       (L/R routed)   (spectral processing)   (post-processing)
```

### Sound Design Approaches

| Approach | Modulator | Carrier | Result |
|----------|-----------|---------|--------|
| **Classic** | Voice | Synth pad | Talking synth |
| **Rhythmic** | Drums | Chord pad | Rhythmic harmonics |
| **Texture** | Noise | Sustained tone | Evolving spectral wash |
| **Melodic** | Lead synth | Different lead | Timbre morphing |
| **Feedback** | Output (resampled) | Same synth | Recursive processing |

## Step-by-Step: Advanced Sound Design

### Technique 1: Drum-Played Chords

**Concept:** Make a drum loop rhythmically "play" a chord progression.

**Setup:**
1. Route drum loop to vocoder L (modulator)
2. Route pad/chord to vocoder R (carrier)
3. Set drum mixer track to "Send only" (don't hear dry)

**Parameters:**
```
MIN: 60 Hz (capture kick)
MAX: 12000 Hz (capture cymbals)
ATTACK: 2-5 ms (tight)
DECAY: 80-120 ms (responsive)
BANDS: 16-24
BW: 55%
```

**Creative Variations:**
- Try different carriers: vocal harmonies, FM bells, noise
- Automate MIN/MAX to focus on specific drums
- Use HOLD to capture specific drum hits as sustained chords

**What to Listen For:**
- [ ] Clear rhythmic alignment
- [ ] Each drum triggers appropriate carrier frequencies
- [ ] No muddiness from overlapping
- [ ] Musical result, not chaotic

---

### Technique 2: Spectral Freeze Textures

**Concept:** Capture vocal/sound moments and sustain them indefinitely.

**Setup:**
1. Load vocal into playlist or Edison
2. Route through vocoder with pad carrier
3. Prepare HOLD button for automation

**Execution:**
1. Play vocal phrase
2. At peak moment, engage **HOLD**
3. Stop vocal playback
4. Carrier sustains frozen spectrum

**Advanced:**
- Layer multiple frozen moments
- Crossfade between captures
- Add reverb to extend further
- Resample and stretch in Edison

**Parameters for Texture:**
```
FORM: -0.2 (slightly dark)
BW: 30% (soft, blended)
ATTACK: 150 ms (gentle)
DECAY: 500 ms (maximum sustain)
BANDS: 24
```

**What to Listen For:**
- [ ] Smooth sustain without glitches
- [ ] Interesting spectral content captured
- [ ] Blends well as background texture
- [ ] Not competing with main elements

---

### Technique 3: Formant Morphing

**Concept:** Create evolving vocal character through FORM automation.

**Setup:**
1. Vocal modulator with rich carrier
2. Long sustained vocal note or phrase
3. FORM automation lane ready

**Automation Patterns:**

**Pattern A: Gender Morph**
```
Bar 1: FORM -0.5 ────→ +0.5
Bar 2: FORM +0.5 ────→ -0.5
Result: Masculine ↔ Feminine oscillation
```

**Pattern B: Slow Drift**
```
8 bars: FORM 0.0 ──────────────→ +0.3
Result: Gradual brightening/evolution
```

**Pattern C: Stutter Formant**
```
1/4 notes: FORM -0.3 █ +0.3 ▁ -0.3 █ +0.3 ▁
Result: Rhythmic character shifts
```

**What to Listen For:**
- [ ] Smooth morphing (not stepped)
- [ ] Preserves pitch stability
- [ ] Creates interest without distraction
- [ ] Musical timing of shifts

---

### Technique 4: Inverted Spectrum Design

**Concept:** Use INV mode to create alien, unnatural spectral relationships.

**Applications:**
- **Sci-fi atmospheres:** Deep space communication
- **Horror elements:** Unsettling vocal qualities
- **Robot voices:** Mechanical, broken character
- **Glitch textures:** Unpredictable frequency mapping

**Basic Setup:**
```
INV: On
FORM: 0.0 or slight negative
BW: 50%
BANDS: 12-20 (lower = weirder)
```

**Advanced Inversion:**
1. Start with normal vocoding
2. Automate INV toggle for contrast
3. Combine with FORM sweeps
4. Layer inverted and normal for stereo weirdness

**What to Listen For:**
- [ ] Unnatural quality (intentional)
- [ ] Not fatiguing over time
- [ ] Fits genre context (sci-fi, horror)
- [ ] Still intelligible if needed

---

### Technique 5: Multi-Band Painting

**Concept:** Use band sliders as graphic EQ to sculpt vocoded sound.

**Setup:**
1. Vocoder with flat band display
2. Play vocoded sound
3. Adjust individual band sliders

**Common Sculpting:**

| Goal | Adjustment | Which Bands |
|------|------------|-------------|
| Telephone | Cut all except center | 300Hz-3kHz |
| De-ess | Lower 6kHz+ | Right 25% |
| Add warmth | Raise 200-400Hz | Left of center |
| Sub emphasis | Raise 60-100Hz | Leftmost 2-3 |
| Air/presence | Raise 8kHz+ | Rightmost 2-3 |
| Darken | Lower 4kHz-8kHz | Center-right |

**What to Listen For:**
- [ ] Targeted frequency adjustment
- [ ] No drastic unnatural peaks
- [ ] Maintains overall balance
- [ ] Serves the creative goal

---

### Technique 6: Recursive Processing

**Concept:** Resample vocoded output and use as new source.

**Workflow:**
1. Create vocoded sound
2. Render to audio (Edison or playlist)
3. Load resampled audio as new modulator
4. Process through vocoder again
5. Repeat as desired

**Applications:**
- Extreme character degradation
- Granular-like textures
- Rhythmic resampling
- Layer building

**What to Listen For:**
- [ ] Each iteration adds character
- [ ] Don't over-process (3-4 passes max)
- [ ] Layer with original for grounding
- [ ] Interesting artifacts, not just noise

---

## Creative Effect Chain

For experimental sound design, try this post-vocoder chain:

```
Fruity Vocoder
    ↓
Fruity Phaser (slow rate, 20% wet)
    ↓
Fruity Reverb 2 (Hall, 3s, freeze capability)
    ↓
Fruity Parametric EQ 2 (sculpt final tone)
    ↓
Optional: Fruity Granulizer or Slicex
```

## Variations by Vibe

### Moody Sound Design
- Slow attack/decay (200ms+/400ms+)
- Negative FORM (-0.3 to -0.5)
- Low BW (30-40%)
- Focus: Texture, atmosphere, sustained pads

### Upbeat Sound Design
- Fast attack/decay (10ms/80ms)
- Positive FORM (+0.2 to +0.3)
- Medium-high BW (55-65%)
- Focus: Punchy, rhythmic, clear

### Psychedelic Sound Design
- Extreme automation (all parameters)
- INV mode
- Low band count (8-16)
- Focus: Unpredictable, evolving, weird

---

## Automation Ideas

### 1. Chaos Generator
```
All parameters on random automation
BANDS: Toggle between 4-64
FORM: Random -0.8 to +0.8
INV: Toggle randomly
Result: Controlled chaos
```

### 2. Rhythmic Stutter
```
HOLD: 1/16th note pattern
BANDS: Alternate 8/32
Result: Glitch-hop rhythm
```

### 3. Spectral Swell
```
MIN: 1000 ──→ 100 over 4 bars
MAX: 4000 ──→ 16000 over 4 bars
Result: Opening up from telephone to full range
```

---

## Pitfalls and Solutions

| Pitfall | Symptom | Solution |
|---------|---------|----------|
| Too chaotic | Unusable noise | Add constraints (limit modulation depth) |
| CPU overload | Dropouts | Reduce bands, render to audio |
| Unintelligible | Cool but meaningless | Balance with clearer elements |
| Fatiguing | Ear tiring | Limit extreme processing time |
| Phase issues | Thin sound | Check correlation, use mono references |

## Resampling Best Practices

When committing sound design to audio:

1. **Render at high quality** (32-bit float if possible)
2. **Keep original** for future variations
3. **Name clearly:** "VocoderTexture_Moody_V1_128bpm"
4. **Document settings** in project notes
5. **Leave headroom** for further processing

---

**Source:** IL-MAN, REPUTABLE (sound design practices)
**Last Updated:** 2026-02-03
