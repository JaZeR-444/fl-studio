# Fruity Vocoder: Preset Notes and Usage

## Detailed Preset Documentation

### 1. "Clear Talker" - Maximum Intelligibility

**When to Use:**
- Podcasts or voiceovers where clarity is critical
- Hip-hop hooks that need to be understood
- R&B leads with vocoded texture but lyrical focus

**Parameter Rationale:**
- **48 bands:** High spectral resolution for speech formants
- **65% BW:** Wide bands for clear definition
- **10ms attack:** Catches transient consonants
- **White noise in carrier:** Recovers "S" and "T" sounds [SRC: IL-MAN]

**Carrier Setup:**
1. Load 3xOsc or Sytrus
2. Sawtooth wave, full range
3. Add white noise channel at 15% level
4. No filtering (or gentle high-pass at 50Hz)

**Modulator Prep:**
- Light compression (3-4dB reduction)
- De-ess if sibilance is excessive
- Consistent level (-12dB to -6dB)

**Common Issues:**
| Issue | Solution |
|-------|----------|
| Still unclear | Raise to 64 bands, check modulator quality |
| Too harsh | Lower BW to 55%, add post-EQ |
| Robotic too much | Disable INV, reduce FORM shift |

**Genre Applications:**
- Trap: Main hook clarity
- R&B: Intimate spoken sections
- Alternative: Clear sections contrast with effected sections

---

### 2. "Street Robot" - Trap Ad-lib Classic

**When to Use:**
- "Yeah," "what," "skrrt" ad-libs
- Short phrase emphasis
- Build-up energy moments

**Parameter Rationale:**
- **INV On:** Classic mechanical quality
- **24 bands:** Balance of clarity and character
- **+0.3 FORM:** Bright, present robot
- **5ms attack:** Maximum punch

**Carrier Setup:**
1. Bright square wave (more odd harmonics = more metallic)
2. Unfiltered or slight low-pass at 8kHz
3. Optional: Subtle bit-crusher for extra grit

**Timing Considerations:**
- Best on quick phrases (1-3 syllables)
- Automate return level: up on ad-libs, down between
- Sync to 1/8th or 1/16th note grid

**Mix Position:**
- Parallel send: 35-45% return
- Slightly louder than you think (ad-libs need to cut)
- Optional: Stereo widening (20-30%)

**Pitfalls:**
- Don't use on long phrases (gets annoying)
- Don't use on every ad-lib (saves impact for key moments)
- Watch sibilance (can be piercing with INV on)

---

### 3. "Night Drive" - Moody Atmosphere

**When to Use:**
- Verse backgrounds in emo rap
- Bridge transitions
- Outro ambience

**Parameter Rationale:**
- **-0.4 FORM:** Dark, masculine weight
- **6000 MAX:** Limited air = darker
- **35% BW:** Soft, blended bands
- **200ms attack/400ms decay:** Lush, sustained wash

**Carrier Setup:**
1. Warm analog-style pad (Saw + Triangle blend)
2. Low-pass filter at 4kHz
3. Chorus for stereo width (rate: 0.2Hz, depth: 25%)
4. Long attack (2s) and release (8s)

**HOLD Technique:**
1. Capture vocal phrase ending
2. Engage HOLD at emotional peak
3. Let carrier sustain the spectrum
4. Crossfade to next section

**Post-Processing:**
| Effect | Setting | Purpose |
|--------|---------|---------|
| Reverb | Hall, 4s, 40% wet | Space and depth |
| EQ | High-shelf -6dB at 6kHz | Darken |
| Saturation | Tape, 15% drive | Warmth |

**Blend:** 25-35% return level - should be felt, not heard distinctly

---

### 4. "Alien Transmission" - Psychedelic

**When to Use:**
- Experimental interludes
- Bridge weirdness
- Outro dissociation effects
- Artistic "freak out" moments

**Parameter Rationale:**
- **FORM automation:** Gender morphing = disorientation
- **INV On:** Alien frequency inversion
- **12 bands:** Lower resolution = stranger artifacts
- **Scale toggle:** Changes band distribution mid-phrase

**Carrier Setup:**
1. FM synthesis (Sytrus) with extreme ratios
2. Rapidly changing timbre
3. Unpredictable harmonic content
4. Full frequency range

**Automation Pattern:**
```
Bar 1: FORM -0.5 → +0.5 over 2 beats, INV On
Bar 2: FORM +0.5 → -0.5 over 2 beats, Scale toggle
Bar 3: HOLD stutter on beats 2 and 4
Bar 4: Chaos - randomize everything
```

**Mix Position:**
- 100% wet (full commitment to weirdness)
- Heavy post-processing: phaser, flanger, granular
- Consider parallel dry for grounding (10-20%)

**Warning:** Use sparingly. Too much = gimmicky. Right moment = memorable.

---

### 5. "Vintage Vibes" - Jazz-Hop Nostalgia

**When to Use:**
- Boom bap samples
- Neo-soul backgrounds
- Lofi hip-hop aesthetic

**Parameter Rationale:**
- **20 bands:** Vintage vocoder character (classic units had few bands)
- **80ms attack:** Relaxed, not aggressive
- **6000 MAX:** Limited bandwidth = vintage radio feel
- **-0.1 FORM:** Slight darkness for warmth

**Carrier Setup:**
1. Simple 3xOsc: 2 sawtooth + 1 triangle
2. Detune: Osc 1 +7 cents, Osc 2 -7 cents
3. Low-pass filter: 3kHz cutoff
4. Subtle chorus (rate: 0.1Hz, depth: 15%)

**Modulator:**
- Clean vocal with light compression
- Optional: Vinyl noise overlay for authenticity

**Post-Processing Chain:**
1. Tape emulation (FerricTDS or similar)
2. Plate reverb (1.5-2s)
3. Gentle compression (2:1, slow)
4. Optional: Vinyl crackle sample

**Blend:** 30% return - should feel like a layer, not an effect

---

### 6. "Rhythm Talk" - Drum Vocoding

**When to Use:**
- Drums "playing" a chord progression
- Rhythmic harmonic textures
- Break transitions

**Parameter Rationale:**
- **16 bands:** Captures drum transients without excessive pitch
- **2ms attack:** Catches every drum hit
- **Full MAX:** Preserves cymbal harmonics
- **Log scale:** Better for drum frequency distribution

**Setup Instructions:**
1. Route drum loop to vocoder track (L channel)
2. Route pad/chord to same track (R channel)
3. Set drum mixer track to "Send only" (don't hear dry drums)
4. Solo pad now plays drum rhythms

**Carrier Options:**
- Rich pad with long release
- Vocal harmony (creates "singing drums")
- FM bell tone (metallic rhythmic effect)

**Creative Variations:**
| Modulator | Carrier | Result |
|-----------|---------|--------|
| Kick only | Sub bass | Sub follows kick pattern |
| Hi-hats | Bright synth | Rhythmic high textures |
| Full drums | Complex pad | Full rhythmic harmonics |

**Mix Position:**
- Can be 100% wet (replaces drums with harmonics)
- Or blend with dry drums for hybrid

---

### 7. "Ghost Note" - Sustained Freeze

**When to Use:**
- Emotional phrase endings
- Ambient bridges
- Creating pads from vocals
- Outro textures

**Parameter Rationale:**
- **30% BW:** Very soft, blended
- **500ms decay:** Maximum sustain
- **HOLD engaged:** Locks the spectrum
- **5000 MAX:** Telephone-like intimacy

**Technique - Step by Step:**
1. Record vocal phrase into playlist
2. Play through vocoder with pad carrier
3. At phrase ending (peak emotion), engage HOLD
4. Stop vocal playback
5. Carrier continues with frozen spectrum
6. Add reverb to extend further

**Advanced:**
- Automate HOLD on/off rhythmically for stutter effects
- Crossfade multiple HOLD captures for evolving texture
- Layer multiple frozen spectra for chord progression

**Post-Processing:**
- Long reverb (5s+) with freeze
- Slow LFO on filter for movement
- Optional: Granular stretching

---

### 8. "Demon Voice" - Extreme Character

**When to Use:**
- Horror-themed tracks
- Villain/monster personas
- Halloween releases
- Dark alter-ego sections

**Parameter Rationale:**
- **-0.7 FORM:** Maximum masculine darkness
- **INV On:** Inverted spectrum = unnatural
- **12 bands:** Low resolution = distorted quality
- **Short decay:** Gated, aggressive

**Carrier Setup:**
- Dark sawtooth with heavy filtering
- Or: Distorted guitar for metal influence
- Or: FM with dissonant ratios

**Modulator:**
- Spoken word (not sung - more intelligible for effect)
- Whispered for extra creepiness
- Layer multiple takes for thickness

**Safety:**
- Don't use for long (fatiguing)
- De-ess heavily (demon sibilance is piercing)
- Check mono compatibility

---

### 9. "Silk Voice" - Smooth R&B

**When to Use:**
- Background harmonies
- Pre-chorus builds
- Bed track for intimate sections

**Parameter Rationale:**
- **40 bands:** High quality without overkill
- **60ms attack:** Smooth but not sluggish
- **+0.15 FORM:** Air and brightness
- **45% BW:** Balanced clarity and smoothness

**Carrier Setup:**
- Lush pad with subtle movement
- Slow filter LFO (0.05Hz)
- Slight stereo chorus
- Long, smooth envelope

**Modulator Prep:**
- Gentle compression for consistency
- Light de-essing
- Consistent, emotional performance

**Mix Position:**
- Parallel send: 25-30% return
- Plate reverb (2-3s) on return
- Sidechain: Light duck to kick (2-3dB)

**Automation:**
- Return level: +10% on chorus/hook
- FORM: Slow 4-bar LFO (±0.1)
- Creates "breathing" quality

---

### 10. "Radio Static" - Lo-Fi Telephone

**When to Use:**
- Vintage aesthetic
- Phone conversation effects
- "Old recording" vibe
- Intimate, lo-fi moments

**Parameter Rationale:**
- **300-3500 Hz range:** Classic telephone bandwidth
- **8 bands:** Low resolution = degraded quality
- **35% BW:** Soft, lo-fi
- **5ms attack:** Maintains punch despite limitations

**Any Carrier Works:**
The limited spectrum dominates - carrier choice is less critical.

**Additional Processing:**
1. Bit reduction (16-bit or lower)
2. Sample rate reduction
3. Vinyl noise overlay
4. Compression (4-6dB reduction)
5. Optional: Short delay for slapback

**Usage:**
- Can be 100% wet (full transformation)
- Or blend with cleaner version for "phone vs real world" contrast

---

## Quick Reference: Preset Selection by Scenario

| Scenario | Recommended Preset | Blend |
|----------|-------------------|-------|
| Main rap vocal needs clarity | Clear Talker | 30% parallel |
| Trap ad-lib "skrrt" | Street Robot | 40% return |
| Dark verse atmosphere | Night Drive | 30% return |
| Bridge weirdness | Alien Transmission | 100% wet |
| Jazz-hop sample | Vintage Vibes | 30% return |
| Drums playing chords | Rhythm Talk | 100% or blend |
| Emotional sustain | Ghost Note | 100% on return |
| Horror persona | Demon Voice | 40% return |
| R&B background | Silk Voice | 25% return |
| Phone effect | Radio Static | 100% wet |

---

**Source:** IL-MAN (Image-Line Manual), REPUTABLE (production practices)
**Last Updated:** 2026-02-03
