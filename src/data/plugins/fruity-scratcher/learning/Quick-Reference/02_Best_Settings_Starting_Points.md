# Fruity Scratcher - Best Settings Starting Points

## Overview

This guide provides **proven starting points** for common scratching scenarios. These are not "presets" (Scratcher has minimal preset functionality), but recommended parameter combinations for specific use cases.

**Key parameters:**
- **SPD (Speed):** Playback speed/pitch
- **ACC (Acceleration):** Motor torque/responsiveness
- **SEN (Sensitivity):** Input response (mouse/MIDI)

---

## Universal "Safe" Starting Point

**When to use:** First time using Scratcher, or resetting to neutral.

| Parameter | Value | Reasoning |
|-----------|-------|-----------|
| **SPD** | 1x (100%) | Normal playback speed/pitch [SRC: IL-MAN] |
| **ACC** | 70% | Balanced responsiveness—not too sticky, not too instant [SRC: IL-MAN] |
| **SEN** | 50% | Middle ground for most mouse/MIDI setups |
| **Hold** | OFF | Allow platter interaction |
| **REV** | OFF | Forward playback |

**What to expect:**
- Platter responds smoothly to mouse dragging
- Moderate motor feel (not belt-drive, not direct-drive)
- Predictable control

**Adjust from here:**
- Mouse feels too sensitive → Lower SEN to 30-40%
- Mouse feels too slow → Raise SEN to 60-70%
- Platter feels sluggish → Raise ACC to 80-90%

---

## 1. Classic Boom-Bap Vocal Scratch

**Use case:** Scratching "Hey!" or "Fresh!" vocal stabs in hip-hop beats.

| Parameter | Value | Reasoning |
|-----------|-------|-----------|
| **SPD** | 1x | Normal pitch (matches beat key) |
| **ACC** | 75-85% | Direct-drive turntable feel (Technics 1200) [SRC: REPUTABLE] |
| **SEN** | 55-65% | Responsive but controlled |
| **Sample** | 0.5-2 sec vocal | Short, punchy samples work best |

**Technique:**
- Load a dry vocal stab (no reverb/delay in the sample)
- Use baby scratch (forward-back-forward)
- Scratch on downbeats or between kick/snare hits

**What to listen for:**
- Clean transient at the start of each scratch
- Minimal digital artifacts (if you hear "glitching," lower SEN or use shorter samples)

**Variations:**
- **Chirp scratch:** Quick forward-back-forward → Raise ACC to 85%
- **Transformer scratch:** Rhythmic cuts → Use Hold button with manual timing

---

## 2. Trap/EDM Tape Stop (Gradual)

**Use case:** Classic "vinyl slowdown" into a beat drop.

| Parameter | Value | Reasoning |
|-----------|-------|-----------|
| **SPD** | 1x → 0x (automate) | Decelerate to silence |
| **ACC** | 25-35% | Low = slow, curved deceleration [SRC: IL-MAN] |
| **SEN** | N/A | Not used (automation-driven) |
| **Duration** | 2-4 beats | Typical trap/EDM breakdown |

**Setup:**
1. Insert Scratcher on drum bus or full beat
2. Right-click SPD → Create automation clip
3. Draw curve from 1x to 0x over 2 bars
4. Adjust ACC until it "feels" like a turntable slowing down

**What to listen for:**
- Smooth, natural deceleration (not linear)
- Pitch drops gradually, not suddenly
- Reaches silence at the exact point you want (e.g., downbeat of drop)

**Variations:**
- **Fast stop:** ACC = 70-90%, 1 beat duration
- **Reverse start:** Automate from 0x → -1x for backspin effect

---

## 3. Trap/EDM Tape Stop (Instant)

**Use case:** Dramatic "brake" effect for build-ups or transitions.

| Parameter | Value | Reasoning |
|-----------|-------|-----------|
| **SPD** | 1x → 0x (automate) | Instant stop |
| **ACC** | 85-100% | High = fast, almost linear deceleration |
| **SEN** | N/A | Not used (automation-driven) |
| **Duration** | 1/4 to 1 beat | Quick brake |

**Setup:**
- Same as gradual tape stop, but:
  - Higher ACC (90%+)
  - Shorter duration (1/4 beat = "brake" sound)

**What to listen for:**
- Aggressive, sudden pitch drop
- Almost "digital" stopping sound (intentional for modern trap)

**Variations:**
- **Reverse brake:** SPD from -1x to 0x (backwards brake)
- **Stutter stop:** Multiple 0x points in automation for rhythmic stops

---

## 4. Live DJ Scratching (Performance)

**Use case:** Scratching with a mouse or MIDI controller in real-time.

| Parameter | Value | Reasoning |
|-----------|-------|-----------|
| **SPD** | 1x | Normal speed (or -1x for reverse) |
| **ACC** | 80-90% | Responsive for quick scratching |
| **SEN** | 60-75% | High sensitivity for expressive control |
| **Sample** | 0.5-3 sec | Classic DJ scratch sample length |

**MIDI Setup (Optional):**
- Link platter to jog wheel or fader
- Adjust SEN to match hardware sensitivity
- Test: Full jog wheel rotation should = 2-3 platter rotations

**What to listen for:**
- Immediate response to input (no lag)
- Smooth transitions between forward/backward motion
- No digital "clicking" at direction changes

**Techniques:**
- **Baby scratch:** Simple forward-back
- **Scribble scratch:** Rapid back-and-forth
- **Chirp scratch:** Forward-back-forward with quick return

---

## 5. Psychedelic Pitch Bend

**Use case:** Creating "warped" vocal or synth effects.

| Parameter | Value | Reasoning |
|-----------|-------|-----------|
| **SPD** | 0.5x to 2x (automate) | Wide pitch range |
| **ACC** | 40-60% | Moderate response for smooth bends |
| **SEN** | N/A | Automation-driven |
| **Sample** | Vocal, synth, or pad | Sustained sounds work best |

**Setup:**
1. Load a sustained sound (e.g., "Ahhh" vocal or pad)
2. Automate SPD with curves (not straight lines)
3. Combine with Reverb/Delay for psychedelic depth

**What to listen for:**
- Smooth pitch bends (not stepped)
- Trippy, "melting" quality
- No digital artifacts (if present, use shorter samples or increase ACC)

**Variations:**
- **Slow-mo vocal:** SPD = 0.3x to 0.5x (deep pitch shift)
- **Chipmunk vocal:** SPD = 1.5x to 2x (high pitch shift)

---

## 6. Realistic Turntable Emulation (Belt Drive)

**Use case:** Authentic vintage turntable feel.

| Parameter | Value | Reasoning |
|-----------|-------|-----------|
| **SPD** | 1x | Normal speed |
| **ACC** | 20-40% | Slow motor = belt-drive feel [SRC: REPUTABLE] |
| **SEN** | 45-55% | Moderate sensitivity |
| **Sample** | Any | Classic vinyl sample |

**What to listen for:**
- Slow "spool up" when starting playback
- Gradual deceleration when stopping
- "Dragging" feel (intentional)

**When to use:**
- Lo-fi hip-hop production
- Vintage boom-bap aesthetic
- Educational turntablism practice

---

## 7. Realistic Turntable Emulation (Direct Drive)

**Use case:** Modern DJ turntable feel (Technics 1200 style).

| Parameter | Value | Reasoning |
|-----------|-------|-----------|
| **SPD** | 1x | Normal speed |
| **ACC** | 75-90% | Fast motor = direct-drive feel [SRC: REPUTABLE] |
| **SEN** | 55-65% | Responsive |
| **Sample** | Any | Professional DJ sample |

**What to listen for:**
- Quick start (reaches full speed almost instantly)
- Tight control (minimal drag)
- Professional DJ feel

**When to use:**
- Modern hip-hop scratching
- Turntablism practice
- Live DJ performance in FL Studio

---

## 8. Vocal Chop / Cut (R&B/Pop)

**Use case:** Rhythmic vocal cuts on hooks or ad-libs.

| Parameter | Value | Reasoning |
|-----------|-------|-----------|
| **SPD** | 1x | Maintain original pitch |
| **ACC** | 70-80% | Responsive cuts |
| **SEN** | 60-70% | Precise control |
| **Sample** | 1-3 sec vocal | "Yeah," "Ooh," "Hey" |

**Technique:**
- Scratch vocal in time with snare hits or hi-hat rolls
- Use Hold button for "stutter" effects
- Automate SPD for pitch drops on last syllable

**What to listen for:**
- Clean cuts (no clicks at start/end)
- Vocal fits rhythmically with the beat
- Natural pitch (unless intentionally warped)

---

## 9. Sample Texture Scratch (Lo-Fi/Vibey)

**Use case:** Creating "dusty" or "warped" sample textures.

| Parameter | Value | Reasoning |
|-----------|-------|-----------|
| **SPD** | 0.7x to 1.2x (vary) | Slight pitch wobble |
| **ACC** | 30-50% | Loose, analog feel |
| **SEN** | 40-50% | Subtle control |
| **Sample** | Loop or sustained sound | Jazz, soul, ambient |

**Technique:**
- Slowly drag the platter back and forth
- Create gentle pitch wobbles (not aggressive scratching)
- Layer with vinyl crackle or Effector for lo-fi texture

**What to listen for:**
- Subtle pitch movement (not jarring)
- Warm, analog feel
- "Human" imperfection

**Combine with:**
- Fruity Parametric EQ 2: Cut highs (< 8 kHz)
- Fruity Reeverb: Small room for space
- Effector: Vintage vinyl mode

---

## 10. DVS Setup (Timecode Vinyl)

**Use case:** Controlling Scratcher with real turntables and timecode vinyl.

| Parameter | Value | Reasoning |
|-----------|-------|-----------|
| **SPD** | 1x (controlled by DVS) | Timecode determines speed |
| **ACC** | 85-95% | Match direct-drive response |
| **SEN** | 70-80% | High sensitivity for DVS accuracy |
| **Timecode** | Serato CV02 or Traktor | [SRC: IL-MAN] |

**Setup:**
1. Route turntable input to FL Studio audio interface
2. Load timecode sample into Scratcher (if required) [UNVERIFIED: exact DVS setup steps]
3. Map DVS input to Scratcher platter control
4. Calibrate sensitivity

**What to listen for:**
- 1:1 tracking (turntable speed = Scratcher playback speed)
- No latency or drift
- Stable pitch

**How to verify in FL Studio:**
- Test with constant speed vinyl rotation → Should produce constant pitch
- Scratch test → Should respond immediately to vinyl manipulation

---

## Parameter Interaction Guide

### SPD + ACC Combinations

| SPD Automation | ACC Setting | Result |
|----------------|-------------|--------|
| 1x → 0x | 20-30% | Slow, natural vinyl stop |
| 1x → 0x | 80-100% | Quick, digital brake |
| 0x → 1x | 20-30% | Slow "spool up" |
| 0x → 1x | 80-100% | Instant start |
| 0.5x ↔ 2x | 40-60% | Smooth pitch bends |

### SEN for Different Controllers

| Controller Type | Recommended SEN | Notes |
|----------------|-----------------|-------|
| High-DPI mouse (1600+) | 30-45% | Prevent over-sensitivity |
| Standard mouse (800 DPI) | 50-60% | Balanced control |
| Low-DPI mouse (400) | 60-75% | Increase response |
| MIDI jog wheel | 65-80% | Match hardware sensitivity |
| MIDI fader | 55-70% | Linear control |
| Touch screen | 40-55% | Prevent accidental jumps |

---

## Genre-Specific Starting Points

### Hip-Hop (Boom-Bap)
- **SPD:** 1x
- **ACC:** 75-85% (direct-drive feel)
- **SEN:** 55-65%
- **Sample:** Dry vocal stabs, drum hits

### Hip-Hop (Trap)
- **SPD:** 1x → 0x (tape stops)
- **ACC:** 25-35% (gradual) or 85-100% (instant)
- **SEN:** N/A (automation)
- **Sample:** 808s, hi-hats, full beats

### R&B/Pop
- **SPD:** 1x (with occasional pitch automation)
- **ACC:** 70-80%
- **SEN:** 60-70%
- **Sample:** Vocal ad-libs, melodic phrases

### Lo-Fi/Chillhop
- **SPD:** 0.8x to 1.1x (subtle wobble)
- **ACC:** 30-50% (loose feel)
- **SEN:** 40-50%
- **Sample:** Jazz loops, ambient textures

### EDM/Electronic
- **SPD:** 1x → 0x (tape stops), 0x → -1x (reverse starts)
- **ACC:** 70-100% (dramatic effects)
- **SEN:** N/A (automation)
- **Sample:** Synth risers, drum loops

---

## Troubleshooting Starting Points

**Problem:** Scratching feels unresponsive
- **Try:** ACC = 85%, SEN = 65%

**Problem:** Scratching feels twitchy
- **Try:** ACC = 60%, SEN = 40%

**Problem:** Tape stops sound unnatural
- **Try:** ACC = 25-35%, longer automation duration

**Problem:** Tape stops sound too slow
- **Try:** ACC = 70-90%, shorter automation duration

**Problem:** Vocal scratches sound digital/glitchy
- **Try:** Shorten sample to < 2 seconds, normalize sample first

---

## Next Steps

Once you've tested these starting points:
1. Save your preferred settings as channel state presets
2. Document your adjustments in a personal "Scratcher settings log"
3. Experiment with automation curves (not just straight lines)
4. Test with different sample types (vocals, drums, synths)

**Related files:**
- `01_Common_Mistakes.md` — What to avoid
- `03_Vibe_Starting_Points_Moody.md` — Vibe-specific settings
- `02-Data/parameters/00_Parameter_Dictionary.md` — Full parameter reference

---

**Version:** 1.0  
**Last Updated:** 2026-02-03  
**Sources:** [IL-MAN], [REPUTABLE]
