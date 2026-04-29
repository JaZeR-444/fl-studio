# Fruity Send - Drums Routing Workflows

## Core Drum Routing Patterns for Hip-Hop/Trap/R&B

**Key principles:**
- Parallel compression for punch and glue
- Reverb sends for space (snare/claps)
- Minimal low-end sends (protect sub-bass clarity)

[SRC: REPUTABLE - drum mixing]

---

## Workflow 1: Parallel Drum Compression (NY Style)

**Goal:** Add density and sustain without losing transient punch.

**Routing:**
- Track 1: Drum Bus (kick, snare, hats, etc.)
- Track 2: Drum Crush (parallel comp)

**Track 1 (Drum Bus) Setup:**
- Slot 1: **Fruity Send** → Track 2, Volume 100%, Dry 100%
- Slot 2-3: Light EQ, transient shaper (preserve dynamics)

**Track 2 (Drum Crush):**
- **Fruity Limiter:**
  - COMP: 10:1
  - THRESH: -25 dB
  - GAIN: +10 dB
  - SAT: 30% (harmonic richness)
  - Wet: 100%
- **Fruity Parametric EQ 2:**
  - Low Cut @ 50 Hz (control rumble)
  - Boost @ 200 Hz +2dB (add body)
  - High Shelf @ 8kHz +2dB (add air)
- **Fader:** -12 dB (blend 20-30% with original)

**Result:** Drums have punch (Track 1) + density (Track 2) = powerful, glued drum bus.

**What to listen for:**
- Snare has more body/sustain
- Kick has more weight without losing attack
- Hi-hats feel more "present"

**Moody adaptation:** Lower SAT to 15%, cut High Shelf to 0dB (darker).

**Upbeat adaptation:** Increase SAT to 40%, boost High Shelf to +4dB (brighter, more energy).

[SRC: REPUTABLE - New York compression]

---

## Workflow 2: Snare/Clap Reverb Send

**Goal:** Add space to snare/claps without muddying low end.

**Routing:**
- Track 1: Snare/Clap
- Track 2: Snare Reverb Bus

**Track 1 (Snare) Setup:**
- Slot 1-2: Comp, EQ (standard processing)
- Slot 3: **Fruity Send** → Track 2, Volume 50%, Dry 100%

**Track 2 (Snare Reverb):**
- **Fruity Reeverb 2:**
  - Preset: Medium Room or Plate
  - Size: 55%
  - Damping: 50%
  - Pre-Delay: 20-30ms (separate tail from transient)
  - Wet: 100%, Dry: 0%
- **Fruity Parametric EQ 2:**
  - **Low Cut @ 400 Hz** (critical: don't reverb low-mid)
  - High Shelf @ 6kHz -2dB (warm reverb)
- **Fader:** -10 to -14 dB

**Result:** Snare has space and depth without muddying the mix.

**Hip-hop tip:** Use shorter reverb (Size 40-50%) for tighter, punchier snare.

**R&B tip:** Use longer reverb (Size 65-75%) for smoother, more polished snare.

[SRC: REPUTABLE - snare reverb techniques]

---

## Workflow 3: Kick + Sub-Bass DI Extraction

**Goal:** Extract sub-bass from kick *before* saturation for controlled low end.

**Routing:**
- Track 1: Kick (processed)
- Track 2: Kick Sub DI (clean low end)

**Track 1 (Kick - Processed) Setup:**
- **Slot 1:** Fruity Send → Track 2, Volume 100%, Dry 100%
- **Slot 2:** Fruity Parametric EQ 2 (High Pass @ 80 Hz, boost 150-200 Hz for punch)
- **Slot 3:** Fruity Fast Dist (subtle saturation)

**Track 2 (Kick Sub DI):**
- **Fruity Parametric EQ 2:**
  - **Low Pass @ 90 Hz** (pure sub-bass)
  - Boost @ 50-60 Hz +2dB (fundamental emphasis)
- **Fruity Soft Clipper:** Threshold -6dB (control peaks)
- **Fruity Stereo Shaper:** Stereo Separation 0% (force mono)
- **Fader:** -15 to -18 dB (subtle, controlled sub)

**Result:**
- Track 1: Punchy kick with midrange character
- Track 2: Clean, controlled sub-bass (no distortion)

**Mix tip:** Blend Track 2 quietly; too loud = boomy mix.

[SRC: REPUTABLE - kick/bass separation]

---

## Workflow 4: Hi-Hat Stereo Spread via Dual Sends

**Goal:** Create wide hi-hat stereo field using routing.

**Routing:**
- Track 1: Hi-Hats (mono source)
- Track 2: Hi-Hat Left Bus
- Track 3: Hi-Hat Right Bus

**Track 1 (Hi-Hats) Setup:**
- Slot 1: **Fruity Send** → Track 2, Volume 80%, Pan Hard Left (-100%), Dry 50%
- Slot 2: **Fruity Send** → Track 3, Volume 80%, Pan Hard Right (+100%), Dry 50%

**Track 2 (Left Bus):**
- Fruity Delay 3: Time 5-10ms (micro-delay for width), Mix 30%
- Fader: 0 dB

**Track 3 (Right Bus):**
- Fruity Delay 3: Time 8-15ms (different timing for stereo), Mix 30%
- Fader: 0 dB

**Result:** Hi-hats spread wide in stereo field with micro-delays creating width.

**Caution:** Check mono compatibility; may have phase issues.

**Psychedelic adaptation:** Increase delay times to 20-40ms for extreme width/disorientation.

[SRC: REPUTABLE - stereo widening techniques]

---

## Quick Drum Send Reference

| Element | Typical Send | Destination FX | Volume | Notes |
|---------|--------------|----------------|--------|-------|
| **Kick** | Sub-bass extraction | Low Pass EQ + Clipper | 100% | Keep mono, blend low |
| **Snare/Clap** | Reverb/Room | Reverb (Size 50-60%) | 50-60% | Low Cut @ 400 Hz |
| **Hi-Hats** | Stereo spread or subtle delay | Micro-delay or ping-pong | 30-50% | Check mono compatibility |
| **Full Drum Bus** | Parallel compression | Heavy limiter + SAT | 100% | Blend at -12 dB |
| **Toms/Perc** | Room reverb | Short reverb (Size 40%) | 40-50% | Low Cut @ 300 Hz |

[SRC: REPUTABLE - drum send best practices]

---

## Moody Drum Routing (Dark, Heavy)

**Modifications:**
- Parallel comp: Increase SAT to 40-50% (heavier, grittier)
- Snare reverb: Use Hall (Size 75%), Damping 30% (dark, long tail)
- Reduce high-frequency sends (no bright delays/reverbs)

**Result:** Heavy, dark, powerful drum vibe.

---

## Upbeat Drum Routing (Energetic, Punchy)

**Modifications:**
- Parallel comp: Increase THRESH to -20dB (catch more transients)
- Snare reverb: Use Plate (Size 45%), Pre-Delay 40ms (tight, present)
- Add ping-pong delay on hi-hats (1/16, Feedback 20%)

**Result:** Energetic, bouncy, present drums.

---

**Next:** See `bass.md` for bass routing workflows.
