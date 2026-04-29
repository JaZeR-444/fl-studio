# Fruity Slicer 2 - Vibe Starting Points: Moody

## Moody Production Levers in Fruity Slicer 2

**Moody** in hip-hop/R&B production means: dark, introspective, melancholic, slow-burning, emotional weight. Think Drake's *Take Care*, 6LACK, Brent Faiy az, late-night R&B.

### How Slicer 2 Contributes to Moody Vibes

1. **Pitch-down melodic chops** → lower octaves feel heavier, sadder
2. **Stretched/slowed samples** → time-stretched vocal/melodic slices create drag
3. **Reverse slices** → backward textures = disorientation, nostalgia
4. **Long attack/release envelopes** → pads from chopped samples feel washed, not percussive
5. **Minor key melodic chops** → when playing chromatic mode, stay in minor scales
6. **Sparse slice triggering** → less is more, space = emotional room

---

## Starting Point #1: Pitched-Down Vocal Chop Pad

**Source Material**: Vocal phrase (2-4 seconds)  
**Vibe Goal**: Dark, melancholic melodic instrument  
**Where It Fits**: Intro, verse background, bridge atmosphere

### Quick Settings
```
SLICE SETTINGS:
- Auto-detect: OFF (manual slice the best "ahh" or vowel sound)
- Select slice: Find the richest vowel (not consonant)
- Chromatic mode: ON
- Pitch: -12 semitones (one octave down)

ENVELOPE (per-slice):
- Attack: 80-120ms (slow fade-in)
- Release: 400-800ms (long tail)
- Filter: Low-pass enabled, cutoff ~1.5kHz
- Pan: Center (or subtle auto-pan for width)

TIME-STRETCH:
- Mode: Elastique Pro (cleanest for pitched-down material)
- BPM: Original project tempo
- Slice length: Extend to fit longer notes

OUTPUT:
- Add Fruity Reeverb 2 (long decay, 3-5s)
- Add Fruity Love Philter (gentle low-pass resonance)
- Subtle chorus for width
```

### What to Listen For
✅ **Moody indicators**:
- Vocal feels like a synth pad, not a chop
- Low-end presence without mud (use HPF at ~80Hz if needed)
- Reverb tail extends into next chord change
- Emotional "ache" quality from stretched formants

❌ **Not moody**:
- Too percussive/sharp attacks
- Too bright/chipmunk-like (check pitch isn't +12 by accident)
- Timing feels rushed (stretch slices longer)

---

## Starting Point #2: Reversed Break Texture

**Source Material**: Drum loop or percussion break  
**Vibe Goal**: Eerie, nostalgic bed of reversed hits  
**Where It Fits**: Build-ups, transitions, texture layers under main drums

### Quick Settings
```
SLICE SETTINGS:
- Auto-detect: ON (detect all hits)
- Select slices: Kick, snare, hat slices
- Reverse: Enable reverse playback on 2-3 slices
- Chromatic mode: OFF

ENVELOPE (reversed slices):
- Attack: 0ms (keep the reverse "swell")
- Release: 200-400ms
- Filter: Band-pass around 500Hz-2kHz (remove low-end)
- Pan: Wide L/R spread

TRIGGERING:
- Don't play all slices—use 1-2 reversed slices per bar
- Place on off-beats for tension
- Layer under forward-playing main drums

OUTPUT:
- Add Fruity Delay 3 (ping-pong, 1/8 dotted)
- Add Fruity Reeverb 2 (dark plate, pre-delay 20ms)
- Subtle bit-crushing for lo-fi texture
```

### What to Listen For
✅ **Moody indicators**:
- Reverse swells create anticipation
- Sits "behind" the main drums, not competing
- Adds mystery without clutter
- Feels like a vinyl sample ghost

❌ **Not moody**:
- Too loud/aggressive (should be 30-40% volume of main drums)
- Too bright (filter more)
- Timing too tight (loosen quantization)

---

## Starting Point #3: Stretched Minor Melodic Slice

**Source Material**: Single bass note or synth chord from a sample  
**Vibe Goal**: Dragging, heavy melodic foundation  
**Where It Fits**: Verse bass, bridge pad, main hook element

### Quick Settings
```
SLICE SETTINGS:
- Auto-detect: OFF
- Manual slice: Isolate the single best bass/chord note (0.5-1s)
- Chromatic mode: ON
- Pitch: -5 to -7 semitones (darker than original)

TIME-STRETCH:
- Mode: Elastique Pro
- Stretch slices to 150-200% length
- Formant preserve: OFF (let it sound unnatural)

ENVELOPE:
- Attack: 20-50ms (slight softness)
- Release: 600-1000ms (sustain)
- Filter: Low-pass, cutoff 800Hz-1.2kHz

PERFORMANCE:
- Play in Dm, Am, Fm, or Gm (natural minor scales)
- Use whole notes or half notes (not fast runs)
- Add automation: slow filter cutoff movement

OUTPUT:
- Fruity Parametric EQ: boost 200-400Hz (body), cut 3kHz+
- Fruity Soft Clipper: light saturation for warmth
- Fruity Reeverb 2: hall reverb, wet 20-30%
```

### What to Listen For
✅ **Moody indicators**:
- Feels like a cello or bowed bass
- Sustain carries emotional weight
- Pitch sits low in the mix (not fighting vocals)
- Slightly "broken" quality from unnatural stretching

❌ **Not moody**:
- Too fast/bouncy (slow down)
- Too high-pitched (lower pitch or octave)
- Too clean (add subtle saturation/vinyl noise)

---

## Pitfalls to Avoid (Moody Context)

### ❌ Don't: Make it bounce
- **Problem**: Fast slice triggering, short release → sounds upbeat
- **Fix**: Stretch envelopes, trigger fewer slices per bar

### ❌ Don't: Keep original pitch
- **Problem**: Bright, happy samples → wrong emotional tone
- **Fix**: Pitch down -7 to -12 semitones, use minor keys

### ❌ Don't: Over-quantize
- **Problem**: Perfect timing = too mechanical for moody
- **Fix**: Shift some notes 5-10ms late, use "swing" humanization

### ❌ Don't: Use thin, small samples
- **Problem**: Thin vocal chops lack weight
- **Fix**: Choose thick, rich source material (alto vocals, bassy samples)

### ❌ Don't: Overuse slices
- **Problem**: Too many different slices = busy, not moody
- **Fix**: Pick 1-2 slices max, repeat with variation

---

## Moody Cheat Sheet

| **Element** | **Moody Setting** | **Why** |
|-------------|-------------------|---------|
| Pitch | -7 to -12 semitones | Lower = darker, heavier |
| Attack | 50-120ms | Removes percussive snap |
| Release | 400-1000ms | Long sustain = emotional drag |
| Filter | Low-pass, 800Hz-1.5kHz | Dark, muffled = introspective |
| Reverb | Long decay (3-5s), dark | Creates space, washes emotion |
| Triggering | Sparse (1-2 slices/bar) | Space = room to feel |
| Time-stretch | 150-200% | Dragging tempo = melancholy |
| Chromatic mode | ON for melodic, OFF for drums | Play minor scales only |

---

## 2-Minute Moody Preset

**"Dark Vocal Pad"**
1. Load vocal phrase into Slicer 2
2. Auto-slice → pick slice with longest vowel sound
3. Enable Chromatic mode
4. Pitch: -12 semitones
5. Attack: 100ms, Release: 800ms
6. Filter: Low-pass, cutoff 1.2kHz
7. Add Reeverb 2 (dark plate, 4s decay)
8. Play slow Dm chord progression
9. **Result**: Moody background pad for introspective rap verse

---

**Last Updated**: 2026-02-03  
**Vibe Context**: Hip-Hop, R&B, Dark Trap, Lo-Fi
