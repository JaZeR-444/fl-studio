# Fruity Send - Vibe Starting Points: Upbeat, Psychedelic, Jazzy, Vibey

## UPBEAT (Energetic, Bouncy, High-Energy Hip-Hop/Trap)

### Sonic Characteristics
- Fast rhythmic delays (1/16, 1/8 triplets)
- Bright, present reverbs (not dark/washy)
- Parallel compression for punch and density
- Tight, controlled routing (no long tails)

[SRC: REPUTABLE - upbeat/trap production]

---

### Upbeat Routing Setup: Fast Rhythmic Delay

**Goal:** Vocal delay that bounces rhythmically (trap-style vocal chops)

**Fruity Send settings:**
- **Send To:** Bounce Delay Bus
- **Volume:** 70-90% (present, not subtle)
- **Dry:** 100%
- **Pan:** Center

**Destination track (Bounce Delay Bus):**
- **Fruity Delay 3:**
  - Time: 1/8 or 1/16 (fast, rhythmic)
  - Feedback: 20-40% (1-3 repeats, tight)
  - Cutoff: 8-12 kHz (bright, present)
  - Ping Pong: ON (stereo bounce)
  - Mix: 100%
- **Fruity Parametric EQ 2:**
  - High Pass at 300 Hz (don't muddy low-mid)
  - High Shelf at 8 kHz: +2 to +4 dB (add air, presence)
- **Track fader:** -6 to -10 dB (prominent but not overpowering)

**Automation idea:** Automate Send Volume to 0% during verses, 80% during hook (delay "turns on" for energy boost).

**What to listen for:**
- Fast, rhythmic bounces that sync with the beat
- Bright, airy repeats (not dark/moody)
- Stereo ping-pong adds width and movement

**Pitfall:** Too much feedback = chaotic. Keep at 20-40% for controlled bounce.

[SRC: REPUTABLE - trap vocal production]

---

### Upbeat Routing Setup: Parallel Compression for Punch

**Goal:** Drums hit hard without losing transients (upbeat = punch + energy)

**Fruity Send settings:**
- **Send To:** Drum Crush Bus
- **Volume:** 100%
- **Dry:** 100%
- **Pan:** Center

**Destination track (Drum Crush Bus):**
- **Fruity Limiter:**
  - COMP: 10:1 (aggressive)
  - THRESH: -25 dB (catches everything)
  - SAT: 20-40% (add harmonic excitement)
  - CEIL: 0 dB
  - Wet: 100%
- **Track fader:** -8 to -12 dB (blend 20-40% with original)

**Result:** Drums have transient punch (original) + density and sustain (parallel comp) = energetic, upbeat vibe.

**What to listen for:**
- Snare has more "body" and sustain
- Kick has more "weight" without losing attack
- Overall drum bus feels "fuller" and more energetic

**Pitfall:** Too much parallel blend = squashed, lifeless. Keep at -10 dB or lower.

[SRC: REPUTABLE - New York compression for drums]

---

## PSYCHEDELIC (Trippy, Disorienting, Experimental)

### Sonic Characteristics
- Extreme stereo movement (ping-pong, auto-pan)
- Feedback loops and glitchy delays
- Pitch-shifted/reversed sends
- Unusual routing (creative chaos)

[SRC: REPUTABLE - psychedelic/experimental production]

---

### Psychedelic Routing Setup: Stereo Madness (Ping-Pong + Auto-Pan)

**Goal:** Vocals swirl in stereo field (disorienting, psychedelic movement)

**Fruity Send settings:**
- **Send To:** Psychedelic Delay Bus
- **Volume:** 60-80%
- **Dry:** 100%
- **Pan:** Center

**Destination track (Psychedelic Delay Bus):**
- **Fruity Delay 3:**
  - Time: 1/4 Triplet (off-grid rhythm)
  - Feedback: 60-80% (long, evolving tail)
  - Ping Pong: ON
  - Mix: 100%
- **Fruity Stereo Enhancer:**
  - Stereo Separation: 150-200% (exaggerated width)
  - Phase Offset: 45-90° (create swirl)
- **Fruity PanOMatic (after delay):**
  - LFO: Sine wave, Rate: 1/2 or 1/4 (slow pan sweep)
  - Amount: 80-100% (extreme left-right movement)
- **Track fader:** -8 to -12 dB

**Result:** Delays ping-pong, then slowly sweep left-right = psychedelic disorientation.

**What to listen for:**
- Delays "swirl" around the head (headphone check)
- Off-grid triplet rhythm adds to disorientation
- Slow auto-pan creates "underwater" or "spinning" vibe

**Pitfall:** Too extreme = listener fatigue. Use sparingly (e.g., bridge, special FX moments).

[SRC: REPUTABLE - psychedelic mixing techniques]

---

### Psychedelic Routing Setup: Feedback Glitch (Controlled Chaos)

**Goal:** Create glitchy, evolving feedback textures (experimental, trippy)

**Setup:** Use multiple Fruity Send instances for feedback routing

**WARNING:** This is advanced and can create runaway feedback if not controlled.

**Fruity Send 1 (on Vocal Track):**
- **Send To:** Glitch Bus 1
- **Volume:** 40%
- **Dry:** 100%

**Fruity Send 2 (on Glitch Bus 1):**
- **Send To:** Glitch Bus 2
- **Volume:** 30%
- **Dry:** 0% (extract signal, don't pass through)

**Fruity Send 3 (on Glitch Bus 2):**
- **Send To:** Glitch Bus 1 (feedback loop!)
- **Volume:** 10-20% (LOW to prevent runaway feedback)
- **Dry:** 0%

**Glitch Bus 1 FX:**
- **Fruity Delay 3:** Time 1/16, Feedback 0% (delay provides rhythm, not feedback)
- **Fruity Parametric EQ 2:** Cut 100-200 Hz, cut 8+ kHz (prevent mud and harshness)

**Glitch Bus 2 FX:**
- **Fruity WaveShaper:** Subtle distortion (add harmonics to feedback)
- **Fruity Limiter:** CEIL -6 dB (prevent clipping from feedback buildup)

**Result:** Controlled feedback loop creates evolving, glitchy textures.

**What to listen for:**
- Feedback "grows" over time but doesn't explode (limiter controls it)
- Glitchy, stuttering texture (not smooth)
- Experimental, "broken" vibe

**Pitfall:** Runaway feedback = ear damage. Keep Send 3 Volume at 10-20% MAX and use limiter.

[SRC: REPUTABLE - feedback-based sound design] [UNVERIFIED - test carefully in FL Studio; may require FL Studio version-specific settings]

---

## JAZZY (Swing, Laid-Back, Dusty/Vintage)

### Sonic Characteristics
- Swing-timed delays (triplet feel)
- Vintage-style reverb (short room, not long hall)
- Analog warmth (tape saturation on sends)
- Subtle, tasteful routing (jazz = restraint)

[SRC: REPUTABLE - jazz/lo-fi production]

---

### Jazzy Routing Setup: Swing Delay (Triplet Feel)

**Goal:** Delay bounces with swing/triplet timing (laid-back, jazzy groove)

**Fruity Send settings:**
- **Send To:** Jazz Delay Bus
- **Volume:** 30-50% (jazzy = subtle, not aggressive)
- **Dry:** 100%
- **Pan:** Center

**Destination track (Jazz Delay Bus):**
- **Fruity Delay 3:**
  - Time: 1/4 Triplet or Dotted 1/8 (swing feel)
  - Feedback: 30-40% (2-3 repeats)
  - Cutoff: 4-6 kHz (warm, muffled repeats like tape delay)
  - Mix: 100%
- **Fruity Fast Dist (after delay):**
  - Type: Tape or Tube
  - Pre: 10-20% (subtle analog warmth)
  - Mix: 100%
- **Fruity Parametric EQ 2:**
  - Low Cut at 200 Hz (don't muddy piano/keys)
  - High Shelf at 6 kHz: -2 to -4 dB (vintage roll-off)
- **Track fader:** -12 to -16 dB (very subtle, supportive)

**Result:** Delays have swing timing + analog warmth = jazzy, vintage vibe.

**What to listen for:**
- Repeats feel "lazy" and laid-back (not quantized straight 1/8)
- Warm, muffled character (like old tape delay)
- Sits in the back of the mix (not upfront)

**Pitfall:** Too bright = loses vintage character. Roll off highs aggressively.

[SRC: REPUTABLE - jazz/vintage delay techniques]

---

### Jazzy Routing Setup: Room Reverb (Intimate, Not Epic)

**Goal:** Short room reverb for intimacy and space (jazzy = close, not distant)

**Fruity Send settings:**
- **Send To:** Jazz Room Bus
- **Volume:** 40-60%
- **Dry:** 100%
- **Pan:** Center

**Destination track (Jazz Room Bus):**
- **Fruity Reeverb 2:**
  - Preset: Small Room or Studio
  - Size: 30-50% (intimate, not large)
  - Damping: 60-80% (dark, controlled)
  - Pre-Delay: 0-20 ms (tight, not separated)
  - Wet: 100%, Dry: 0%
- **Fruity Parametric EQ 2:**
  - Low Cut at 250 Hz (don't muddy low-mid)
  - High Shelf at 4 kHz: -3 to -6 dB (vintage warmth)
- **Track fader:** -10 to -14 dB

**Result:** Reverb adds "room" character without washing out the mix = jazzy intimacy.

**What to listen for:**
- Reverb feels like a "small club" or "recording studio" (not arena)
- Short decay (0.8-1.2 seconds)
- Warm, not bright or shimmery

**Pitfall:** Too long = washy (not intimate). Keep Size at 30-50%.

[SRC: REPUTABLE - jazz recording techniques]

---

## VIBEY (Atmospheric, Textured, Chill/Lo-Fi)

### Sonic Characteristics
- Layered reverb + delay (depth and texture)
- Subtle modulation (chorus, flanger on sends)
- Analog warmth (saturation on all sends)
- Minimal but *rich* routing (quality over quantity)

[SRC: REPUTABLE - lo-fi/chill production]

---

### Vibey Routing Setup: Layered Reverb (Short + Long)

**Goal:** Two reverb buses (short for presence, long for depth) = textured, atmospheric vibe

**Fruity Send 1 (Short Reverb):**
- **Send To:** Vibe Reverb Short
- **Volume:** 50%
- **Dry:** 100%

**Fruity Send 2 (Long Reverb):**
- **Send To:** Vibe Reverb Long
- **Volume:** 30%
- **Dry:** 100%

**Vibe Reverb Short (Track 2):**
- **Fruity Reeverb 2:** Room, Size 50%, Damping 50%, Wet 100%
- **Fruity Chorus:** Depth 20%, Rate 0.3 Hz (subtle movement)
- **Fader:** -8 dB

**Vibe Reverb Long (Track 3):**
- **Fruity Reeverb 2:** Hall, Size 90%, Damping 30%, Wet 100%
- **Fruity Parametric EQ 2:** High Shelf @ 4 kHz -4 dB (dark, atmospheric)
- **Fader:** -14 dB

**Result:** Short reverb adds presence; long reverb adds depth = layered, vibey texture.

**What to listen for:**
- Two distinct reverb tails (short + long)
- Chorus on short reverb adds subtle "shimmer"
- Overall vibe is rich and atmospheric without being washy

**Pitfall:** Both reverbs too loud = muddy mix. Keep combined at -6 to -8 dB total blend.

[SRC: REPUTABLE - ambient/atmospheric production]

---

### Vibey Routing Setup: Tape Echo with Chorus (Analog Movement)

**Goal:** Delay with analog warmth + subtle modulation = vibey, lo-fi character

**Fruity Send settings:**
- **Send To:** Vibe Delay Bus
- **Volume:** 40-60%
- **Dry:** 100%
- **Pan:** Center

**Destination track (Vibe Delay Bus):**
- **Fruity Delay 3:**
  - Time: 1/4 or Dotted 1/8
  - Feedback: 40-50%
  - Cutoff: 5 kHz (warm, muffled)
  - Mix: 100%
- **Fruity Fast Dist:**
  - Type: Tape
  - Pre: 15-25% (analog warmth)
  - Mix: 100%
- **Fruity Chorus:**
  - Depth: 30-40%
  - Rate: 0.4-0.8 Hz (slow, subtle movement)
  - Cross: 0% (mono chorus for warmth, not stereo width)
- **Fruity Parametric EQ 2:**
  - Low Cut at 200 Hz
  - High Shelf at 5 kHz: -3 dB
- **Track fader:** -10 to -12 dB

**Result:** Delays have analog warmth + subtle chorus movement = vibey, lo-fi texture.

**What to listen for:**
- Repeats "wobble" slightly (chorus modulation)
- Warm, tape-like character (not digital/clean)
- Sits in the mix like a vintage tape delay

**Pitfall:** Too much chorus = seasick/washy. Keep Depth at 30-40%.

[SRC: REPUTABLE - lo-fi tape delay techniques]

---

## Quick Vibe Routing Reference

| Vibe | Send Destination | Key FX on Destination | Volume | Fader | Notes |
|------|------------------|----------------------|--------|-------|-------|
| **Upbeat** | Bounce Delay | Delay 3 (1/16, Bright, Ping Pong) | 70-90% | -8 dB | Fast, rhythmic, present |
| **Upbeat** | Drum Crush | Limiter (10:1, SAT 30%) | 100% | -10 dB | Parallel comp for punch |
| **Psychedelic** | Psych Delay | Delay 3 + Stereo Enh + PanOMatic | 60-80% | -10 dB | Swirling, disorienting |
| **Psychedelic** | Glitch Loop | Multi-bus feedback (controlled) | 10-20% | -12 dB | Experimental, use carefully |
| **Jazzy** | Jazz Delay | Delay 3 (Triplet, Tape Sat) | 30-50% | -14 dB | Swing timing, vintage |
| **Jazzy** | Jazz Room | Reeverb 2 (Small Room, Dark) | 40-60% | -12 dB | Intimate, not epic |
| **Vibey** | Vibe Reverb (2x) | Short Room + Long Hall | 50% + 30% | -8 + -14 dB | Layered depth |
| **Vibey** | Vibe Delay | Delay 3 + Tape + Chorus | 40-60% | -12 dB | Analog movement |

[SRC: REPUTABLE - vibe-specific production techniques]

---

**Next steps:**
- Combine vibe routing techniques (e.g., moody + vibey = dark, textured atmosphere)
- Read `03-Workflows/by-goal/11_Vibe_Upbeat.md` through `14_Vibe_Vibey.md` for complete step-by-step workflows
- Experiment with automation: evolve vibes over time (start moody, build to upbeat)
