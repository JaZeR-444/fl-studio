# Fruity Send - Goal: Mix Or Control (Pre-Fader Routing)

## Core Concept: Pre-Fader Send Independence

**Purpose:** Route audio *before* track fader, creating effects that stay constant regardless of volume automation.

**Key applications:**
- Vocal fade-outs with lingering reverb tails
- Bus processing independent of source level
- Safety/DI tracks extracted before heavy processing
- Dub-style delay throws

[SRC: IL-MAN]

---

## Workflow 1: Vocal Fade with Reverb Tail (Cinematic Ending)

**Goal:** Vocal fades to silence, reverb tail stays loud and haunting.

**Setup (3 minutes):**

**Routing:**
1. Track 1: "Lead Vocal"
2. Track 2: "Vocal Reverb Bus"
3. Sidechain Track 2 to Track 1

**Track 1 (Vocal):**
- Slot 1-5: Compression, EQ, de-esser (usual vocal chain)
- Slot 6: **Fruity Send** → Track 2, Volume 70%, Dry 100%

**Track 2 (Reverb Bus):**
- Fruity Reeverb 2: Hall, Size 85%, Damping 40%, Wet 100%, Pre-Delay 60 ms
- Fruity Parametric EQ 2: Low Cut @ 300 Hz, High Shelf @ 5 kHz -3 dB
- Track Fader: -10 dB

**Automation:**
1. Create automation clip for Track 1's fader
2. Automate: 0 dB → -∞ dB over last 2 bars of song
3. Play and listen: Vocal fades out, reverb stays loud = cinematic ending

**What to listen for:**
- Vocal disappears smoothly
- Reverb tail lingers for 3-5 seconds after vocal is gone
- No abrupt cutoff (reverb sustains naturally)

**Variation 1:** Automate Fruity Send Volume instead of track fader for gradual reverb *reduction* (vocal stays, reverb fades).

**Variation 2:** Add second send to delay bus for dual-tail effect (reverb + delay both linger).

[SRC: REPUTABLE - cinematic mixing, film scoring techniques]

---

## Workflow 2: Parallel Compression (New York Style, Pre-Fader)

**Goal:** Heavy parallel compression bus that responds to source signal, not fader automation.

**Setup (4 minutes):**

**Routing:**
1. Track 1: "Drum Bus" (source)
2. Track 2: "Drum Crush" (parallel comp)
3. Sidechain Track 2 to Track 1

**Track 1 (Drum Bus):**
- Slot 1: **Fruity Send** → Track 2, Volume 100%, Dry 100%
- Slot 2-5: Light EQ, transient shaping (preserve dynamics)

**Track 2 (Drum Crush):**
- **Fruity Limiter:**
  - COMP: 10:1
  - THRESH: -25 dB (catch everything)
  - GAIN: +8 dB (make up gain)
  - SAT: 25% (harmonic richness)
  - CEIL: 0 dB
  - Wet: 100%
- **Fruity Parametric EQ 2:**
  - Low Cut @ 50 Hz (control sub rumble)
  - Boost @ 200 Hz +2 dB (add body)
  - High Shelf @ 8 kHz +1 dB (add air)
- **Track Fader:** -12 dB (blend 20-30% with original)

**Why pre-fader matters:**
- If you automate Track 1's fader for dynamics, parallel comp *stays constant*
- Maintains "glue" and density even during quieter sections
- **Use case:** Verse drums at -3 dB, chorus drums at 0 dB → parallel comp provides consistent energy

**What to listen for:**
- Drums have more "body" and sustain without losing attack
- Parallel comp adds "glue" (subtle, not obvious)
- Snare tail is longer, kick has more weight

**Pitfall:** Too loud parallel = squashed drums. Keep at -12 dB or lower.

[SRC: REPUTABLE - New York compression]

---

## Workflow 3: DI/Safety Track Extraction (Before Heavy FX)

**Goal:** Extract clean signal *before* distortion/saturation for re-amping or backup.

**Setup (3 minutes):**

**Routing:**
1. Track 1: "Guitar" (processed)
2. Track 2: "Guitar DI" (clean extraction)
3. Sidechain Track 2 to Track 1

**Track 1 (Guitar - Processed Chain):**
- **Slot 1:** Fruity Send → Track 2, Volume 100%, Dry 100%
- **Slot 2:** Fruity Parametric EQ 2 (tone shaping)
- **Slot 3:** Amp sim or Fruity Fast Dist (heavy distortion)
- **Slot 4:** Fruity Delay 3 (stereo delay)
- **Slot 5:** Fruity Reeverb 2 (room ambience)

**Track 2 (Guitar DI - Clean):**
- **No FX** (or minimal: Fruity Limiter for safety)
- **Track Fader:** Muted (or -∞ dB)
- **Purpose:** Record to audio for later re-amping

**How to use:**
1. Play project
2. Route Track 2 to audio track or Edison
3. Record clean DI signal
4. Mute Track 2 (you don't need to hear it in the mix)
5. Later: Load DI audio into new track, try different amp sims

**Why pre-fader/pre-FX matters:**
- DI is extracted at Slot 1 position = *before* all FX
- Even if you change Track 1's FX chain, DI stays clean
- **Use case:** Client wants more/less distortion later → you have clean DI to re-process

**What to listen for:**
- Track 1: Heavy, processed guitar sound
- Track 2 (when un-muted): Clean, dry guitar signal (no distortion)

[SRC: REPUTABLE - guitar recording/re-amping techniques]

---

## Workflow 4: Dub Delay Throw (Automated Send Level)

**Goal:** Create classic dub-style delay "throw" that's independent of vocal level.

**Setup (5 minutes):**

**Routing:**
1. Track 1: "Vocal"
2. Track 2: "Dub Delay Bus"
3. Sidechain Track 2 to Track 1

**Track 1 (Vocal):**
- Slot 1-5: Usual vocal chain (comp, EQ, de-esser)
- Slot 6: **Fruity Send** → Track 2, Volume 0% (start), Dry 100%

**Track 2 (Dub Delay Bus):**
- **Fruity Delay 3:**
  - Time: 1/4
  - Feedback: 60-80% (long, evolving tail)
  - Cutoff: 5 kHz (dark, dub-style repeats)
  - Ping Pong: ON (stereo movement)
  - Mix: 100%
- **Fruity Parametric EQ 2:**
  - Low Cut @ 250 Hz (don't muddy mix)
  - High Shelf @ 4 kHz -4 dB (dark character)
- **Track Fader:** -8 dB

**Automation (the "throw"):**
1. Locate the end of a vocal phrase (e.g., "Yeah!" at bar 16)
2. Create automation clip for **Fruity Send Volume**
3. Automate: 0% → 100% over 1 beat (instant delay throw)
4. Then: 100% → 0% over 2 bars (delay fades out)

**Result:** Delay "throws" on cue, then fades out = classic dub/reggae effect.

**What to listen for:**
- Delay appears suddenly (not gradual)
- Tail is long and evolving (feedback 60-80%)
- Dark, muffled character (not bright)
- Stereo ping-pong creates space

**Variation 1:** Automate to multiple throws per section (e.g., every 4 bars).

**Variation 2:** Add Fruity Flanger on Track 2 for psychedelic dub effect.

[SRC: REPUTABLE - dub mixing techniques, King Tubby style]

---

## Workflow 5: Bus Send with Independent Level Control

**Goal:** Send multiple tracks to shared reverb bus, control bus intensity without affecting source levels.

**Setup (5 minutes):**

**Routing:**
1. Tracks 1-5: Drums, Bass, Keys, Pads, FX (various sources)
2. Track 10: "Master Reverb Bus" (shared destination)
3. Sidechain Track 10 to all source tracks

**Each Source Track (1-5):**
- Add **Fruity Send** in final slot → Track 10
- **Volume:** Adjust per source (drums 30%, vocals 60%, pads 80%)
- **Dry:** 100%

**Track 10 (Master Reverb Bus):**
- **Fruity Reeverb 2:** Large Hall, Size 90%, Damping 50%, Wet 100%
- **Fruity Parametric EQ 2:** Low Cut @ 200 Hz, High Shelf @ 6 kHz -2 dB
- **Track Fader:** -10 dB (master reverb blend)

**Why this routing:**
- All sources share *one* reverb (CPU efficient, cohesive space)
- Each source has independent send amount (drums less reverb, pads more)
- **Track 10 fader controls overall reverb intensity** without changing source sends
- **Use case:** Too much reverb overall? Lower Track 10 fader (don't adjust 5 individual sends)

**What to listen for:**
- All elements share the same "room" (cohesive space)
- Drums have subtle reverb, pads have lush reverb
- One fader controls overall reverb wetness

[SRC: REPUTABLE - bus reverb mixing]

---

## Pre-Fader vs Post-Fader Decision Matrix

| Scenario | Use Pre-Fader (Fruity Send) | Use Post-Fader (Mixer Sends) |
|----------|----------------------------|------------------------------|
| Vocal fade with reverb tail | ✅ Yes (reverb stays loud) | ❌ No (reverb fades with vocal) |
| Parallel comp independent of level | ✅ Yes (comp stays constant) | ❌ No (comp follows fader) |
| DI extraction before FX | ✅ Yes (extract pre-FX) | ❌ No (can't extract mid-chain) |
| Basic reverb/delay routing | ❌ No (post-fader is fine) | ✅ Yes (simpler) |
| Shared bus for multiple sources | Either works | ✅ Yes (simpler for most cases) |

[SRC: IL-MAN + REPUTABLE mixing best practices]

---

## Common Control Mistakes

**Mistake 1:** Using pre-fader send when post-fader would work.
- **Fix:** Use standard mixer sends unless you specifically need pre-fader behavior.

**Mistake 2:** Forgetting that send level is *independent* of fader.
- **Fix:** Automate *both* fader and send if you want effect to fade with source.

**Mistake 3:** Not monitoring destination track's input level.
- **Fix:** Use Fruity dB Meter on destination track; adjust Send Volume to avoid clipping.

[SRC: IL-KB troubleshooting]

---

**Next:** Try `03_Goal_Creative_Effect.md` for experimental routing techniques.
