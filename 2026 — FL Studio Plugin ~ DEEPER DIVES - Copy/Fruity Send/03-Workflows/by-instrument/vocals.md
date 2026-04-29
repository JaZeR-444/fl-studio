# Fruity Send - Vocals Routing Workflows

## Core Vocal Routing Patterns for Hip-Hop/R&B/Rap

**Key principles:**
- Hip-hop: Dry, upfront vocals (minimal reverb)
- R&B: Smooth, polished vocals (layered reverb + delay)
- Rap: Clarity and punch (controlled sends)

[SRC: REPUTABLE - genre-specific vocal production]

---

## Workflow 1: Hip-Hop Lead Vocal (Dry & Upfront)

**Goal:** Vocal stays dry and clear with subtle space.

**Routing:**
- Track 1: Lead Vocal
- Track 2: Vocal Room (short reverb)
- Track 3: Vocal Delay (optional, for throws)

**Track 1 Setup:**
- Slot 1: Fruity Compressor (3:1, -15dB thresh)
- Slot 2: Fruity Parametric EQ 2 (presence boost @ 3kHz)
- Slot 3: De-esser
- Slot 4: **Fruity Send** → Track 2, Volume 30%, Dry 100%
- Slot 5: **Fruity Send** → Track 3, Volume 0% (automate for throws), Dry 100%

**Track 2 (Vocal Room):**
- Fruity Reeverb 2: Small Room, Size 40%, Damping 60%, Wet 100%
- Fruity Parametric EQ 2: Low Cut @ 400 Hz, High Shelf @ 6kHz -4dB
- Fader: -14 dB (subtle space, not obvious)

**Track 3 (Vocal Delay - for throws):**
- Fruity Delay 3: 1/8, Feedback 30%, Ping Pong ON, Mix 100%
- Fader: -10 dB

**Automation:**
- Automate Send Slot 5 Volume to 80% at end of phrases for delay throws

**Result:** Dry, clear vocal with subtle room + optional delay throws.

**Moody adaptation:** Use Track 2 reverb with Size 70%, Damping 30% (darker, longer tail).

**Upbeat adaptation:** Use Track 3 delay at 1/16 with Feedback 20% (faster, tighter).

[SRC: REPUTABLE - hip-hop vocal mixing]

---

## Workflow 2: R&B Smooth Vocal (Layered Reverb)

**Goal:** Lush, polished vocal with depth and width.

**Routing:**
- Track 1: Lead Vocal
- Track 2: Vocal Plate (short, present reverb)
- Track 3: Vocal Hall (long, atmospheric reverb)
- Track 4: Vocal Delay (1/8 rhythmic)

**Track 1 Setup:**
- Slot 1-3: Comp, EQ, De-esser (standard chain)
- Slot 4: **Fruity Send** → Track 2, Volume 60%, Dry 100%
- Slot 5: **Fruity Send** → Track 3, Volume 40%, Dry 100%
- Slot 6: **Fruity Send** → Track 4, Volume 50%, Dry 100%

**Track 2 (Plate Reverb):**
- Fruity Reeverb 2: Plate, Size 60%, Pre-Delay 40ms, Wet 100%
- Fruity Chorus: Depth 20%, Rate 0.4 Hz (subtle movement)
- Fader: -10 dB

**Track 3 (Hall Reverb):**
- Fruity Reeverb 2: Hall, Size 85%, Damping 40%, Wet 100%
- Fruity Parametric EQ 2: High Shelf @ 5kHz -4dB (dark, smooth)
- Fader: -16 dB

**Track 4 (Delay):**
- Fruity Delay 3: 1/8 Dotted, Feedback 35%, Cutoff 6kHz, Mix 100%
- Fader: -12 dB

**Result:** Smooth, layered vocal with plate presence + hall depth + rhythmic delay.

**Vibey adaptation:** Add Fruity Fast Dist (Tape, 10%) on Track 3 for analog warmth.

**Jazzy adaptation:** Change Track 4 delay to 1/4 Triplet for swing feel.

[SRC: REPUTABLE - R&B vocal production]

---

## Workflow 3: Rap Adlib Bus (Separate from Lead)

**Goal:** Route adlibs to separate bus for independent processing.

**Routing:**
- Track 1: Lead Vocal
- Track 2: Adlib Vocal (recorded separately)
- Track 3: Adlib FX Bus (reverb + delay)

**Track 2 (Adlib) Setup:**
- Slot 1: Fruity Compressor (lighter than lead: 2:1)
- Slot 2: **Fruity Send** → Track 3, Volume 80%, Dry 100%
- Slot 3: Fruity Parametric EQ 2: High Pass @ 200 Hz (thin out adlibs)

**Track 3 (Adlib FX Bus):**
- Fruity Reeverb 2: Large Room, Size 75%, Wet 100%
- Fruity Delay 3: 1/4, Feedback 50%, Ping Pong ON, Mix 100%
- Fruity Stereo Enhancer: Stereo Sep 150% (push adlibs wide)
- Fader: -8 dB

**Result:** Lead vocal stays dry/center; adlibs are wet/wide for contrast.

**Mix tip:** Pan Track 2 (Adlib source) hard L or R before the send for extreme width.

[SRC: REPUTABLE - rap vocal production]

---

## Workflow 4: Vocal "Throw" Automation (Dub Style)

**Goal:** Create signature vocal throws at phrase ends.

**Routing:**
- Track 1: Vocal
- Track 2: Throw Delay Bus

**Track 1 Setup:**
- Slot 1-5: Standard vocal chain
- Slot 6: **Fruity Send** → Track 2, Volume 0% (start), Dry 100%

**Track 2 (Throw Delay):**
- Fruity Delay 3: 1/4, Feedback 70%, Cutoff 4kHz (dark), Mix 100%
- Fruity Parametric EQ 2: Low Cut @ 300 Hz
- Fader: -6 dB

**Automation:**
1. Locate phrase end (e.g., "Yeah!" at bar 8)
2. Create automation clip for Send Volume (Slot 6)
3. Automate: 0% → 100% over 1/16 note (instant throw)
4. Hold at 100% for 1 beat, then 100% → 0% over 2 bars (fade out)

**Result:** Delay "throws" on cue, creating classic dub/dancehall effect.

**Psychedelic adaptation:** Set Feedback to 80-90% for long, evolving tail.

**Upbeat adaptation:** Use 1/16 delay time for faster bounce.

[SRC: REPUTABLE - dub vocal techniques]

---

## Quick Vocal Routing Reference

| Style | Reverb Send | Delay Send | Key Settings |
|-------|-------------|------------|--------------|
| **Hip-Hop** | 30%, Room | 0% (throws only) | Dry, upfront |
| **R&B** | 60% Plate + 40% Hall | 50%, 1/8 Dotted | Smooth, layered |
| **Trap** | 40%, Large Room | 70%, 1/16 Ping Pong | Wide, spacious |
| **Lo-Fi/Jazzy** | 50%, Small Room | 40%, 1/4 Triplet + Tape Sat | Warm, intimate |
| **Pop-Hip-Hop** | 50% Plate + 30% Hall | 60%, 1/8 | Polished, present |

[SRC: REPUTABLE - genre vocal routing]

---

## Moody Vocal Routing (Dark, Introspective)

**Modifications:**
- Reverb: Hall, Size 90%, Damping 25% (very dark, long tail)
- Delay: 1/2 or Dotted 1/4 (slow, heavy), Cutoff 3kHz (muffled)
- Send Volumes: Reverb 70%, Delay 50% (generous for atmosphere)
- Add Fruity Fast Dist (Tape, 15%) on reverb bus for warmth

**Result:** Dark, spacious, melancholic vocal vibe.

---

## Upbeat Vocal Routing (Energetic, Present)

**Modifications:**
- Reverb: Plate, Size 50%, Pre-Delay 50ms (tight, present)
- Delay: 1/16, Feedback 25% (fast, rhythmic), Ping Pong ON
- Send Volumes: Reverb 50%, Delay 80% (delay prominent for energy)
- Boost High Shelf @ 8kHz +2dB on reverb bus for air

**Result:** Bright, energetic, bouncy vocal vibe.

---

**Next:** See `drums.md` for drum bus routing with Fruity Send.
