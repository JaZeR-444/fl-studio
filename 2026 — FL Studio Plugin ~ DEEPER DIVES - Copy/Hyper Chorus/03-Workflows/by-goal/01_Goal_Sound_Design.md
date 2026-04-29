# Goal: Sound Design

## Overview
Use Hyper Chorus as a creative sound design tool to create unique textures, ensembles, and sonic characters beyond standard chorus applications.

## Routing Context
**Recommended:** Insert with parallel blend or 100% wet on dedicated FX channel
- Insert: Direct processing for character creation
- Parallel: Blend extreme effects with dry
- 100% wet: For pure texture/sound design applications

## Core Sound Design Techniques

### 1. The Supersaw Creator
Transform a simple sawtooth into a massive trance lead.

**Setup:**
1. Source: Simple sawtooth wave (3xOsc, single oscillator)
2. Voices: 8
3. Pad 1: X=60% (medium delay), Y=30% (moderate feedback)
4. Pad 2: X=75% (high modulation), Y=50% (medium rate)
5. Pad 3: X=50%, Y=35% (gentle movement)
6. HP: 100Hz, LP: Full
7. Wet/Dry: 35%

**What to Listen For:**
- Thick, stacked character
- Wide stereo field
- Maintained pitch definition

**Variations:**
- Increase Pad 1 Y for metallic resonance
- Decrease Pad 2 X for tighter sound
- Add distortion before Hyper Chorus for more harmonics

---

### 2. The Metallic Resonator
Create ringing, bell-like textures for experimental music.

**Setup:**
1. Source: Any sustained sound (pad, vocal, sample)
2. Voices: 8
3. Pad 1: X=70% (long delay), Y=80% (high feedback)
4. Pad 2: X=50%, Y=40%
5. Pad 3: X=40%, Y=30%
6. HP: 300Hz, LP: 8kHz (tames harshness)
7. Noise: 10%
8. Wet/Dry: 50%
9. **SAFETY:** Place Fruity Limiter after Hyper Chorus

**What to Listen For:**
- Sustained ringing after input stops
- Bell-like or metallic character
- Controlled resonance (not runaway)

**Variations:**
- Automate Pad 1 for evolving resonance
- Use as transition FX between sections
- Resample and slice for unique percussion

---

### 3. The Ensemble Simulator
Create a "choir of one" from a single vocal or instrument.

**Setup:**
1. Source: Mono vocal or instrument
2. Voices: 8
3. Pad 1: X=35% (short delay), Y=15% (low feedback)
4. Pad 2: X=40% (moderate modulation), Y=25% (slow rate)
5. Pad 3: X=30%, Y=20% (subtle movement)
6. HP: 250Hz
7. Wet/Dry: 40%

**What to Listen For:**
- Natural ensemble character
- No obvious "effect" sound
- Width without phase issues

**Applications:**
- Solo vocal to backing choir
- Single violin to string section
- Mono synth to polyphonic texture

---

### 4. The Auto-Pan Engine
Use Hyper Chorus purely for spatial movement.

**Setup:**
1. Source: Any mono or narrow stereo source
2. Voices: 4 (modulation minimal)
3. Pad 1: X=10%, Y=0% (minimal delay, no feedback)
4. Pad 2: X=5%, Y=10% (minimal modulation)
5. Pad 3: X=70-90% (high pan amount), Y=40-60% (medium speed)
6. HP: 100Hz
7. Wet/Dry: 40%

**What to Listen For:**
- Clean stereo movement
- No pitch modulation
- Rhythmic or evolving spatial patterns

**Advantages over dedicated auto-panner:**
- Built into existing plugin
- Can add subtle detuning if desired (increase Pad 2)

---

### 5. The Lo-Fi Texture Generator
Add vintage character and grit to digital sources.

**Setup:**
1. Source: Clean digital synth or sample
2. Voices: 8
3. Pad 1: X=50%, Y=35%
4. Pad 2: X=45%, Y=40%
5. Pad 3: X=30%, Y=25%
6. HP: 200Hz
7. LP: 10kHz (darkens the sound)
8. Noise: 12-15%
9. Wet/Dry: 35%

**What to Listen For:**
- Analog-like imperfection
- Subtle hiss and texture
- Warmth without obvious noise

**Applications:**
- Lo-fi hip-hop production
- Vintage emulation
- Adding character to sterile sources

---

### 6. The Rhythmic Modulator
Create tempo-synced movement (requires automation).

**Setup:**
1. Source: Pad, drone, or sustained sound
2. Voices: 8
3. Pad 1: X=40%, Y=25%
4. Pad 2: X=60%
5. Pad 3: X=50%, Y=50%
6. HP: 150Hz
7. Wet/Dry: 45%

**Automation:**
- Automate Pad 2 Y (modulation rate) to create rhythmic patterns
- Try: Quarter-note rate changes for pulsing effect
- Try: Slow sweeps for evolving textures

**What to Listen For:**
- Rhythmic movement that complements the track
- Not random chaos—controlled evolution

---

### 7. The Resample & Slice Workflow
Capture Hyper Chorus movement for precise control.

**Setup:**
1. Create Hyper Chorus effect with heavy movement (Pad 3 active)
2. Route output to Edison or use "Render to wave"
3. Record 4-8 bars of the processed audio
4. Open recorded audio in Slicex or Fruity Slicer
5. Chop, rearrange, reverse slices

**Applications:**
- Unique risers from pad swells
- Custom vocal texture samples
- Rhythmic FX patterns
- Transition elements with built-in movement

**Tips:**
- Record longer than needed for more material
- Try reversing specific slices
- Layer multiple recordings for density

---

## Advanced Sound Design

### Layering Multiple Hyper Chorus
Create complex textures by using multiple instances:

**Setup:**
1. Instance 1: 4 voices, subtle, early in chain
2. Instance 2: 8 voices, aggressive, later in chain
3. Blend for complex character

**Applications:**
- Dense pad textures
- Complex vocal effects
- Experimental soundscapes

### Combining with Other Effects

**Hyper Chorus + Distortion:**
- Distortion adds harmonics for chorus to modulate
- More aggressive, textured result
- Great for industrial/electronic sounds

**Hyper Chorus + Reverb:**
- Chorus before reverb: Wider reverb tail
- Chorus after reverb: Chorused space (can be muddy)
- Generally prefer: Chorus → Reverb

**Hyper Chorus + Delay:**
- Creates cascading, evolving echoes
- Each delay repeat has different chorus phase
- Great for psychedelic effects

## Sound Design Checklist

Before using Hyper Chorus for sound design:

- [ ] Purpose is clear (what texture am I creating?)
- [ ] Source is appropriate for the effect
- [ ] Safety measures in place (limiter for high feedback)
- [ ] Mono compatibility checked
- [ ] CPU usage acceptable
- [ ] Sound fits the genre/vibe
- [ ] Not overusing across the mix

## Pitfalls & Fixes

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| Over-designing | Sound too complex, doesn't fit | Strip back to 2-3 parameters |
| Ignoring context | Cool sound, wrong vibe | Reference tracks for guidance |
| Feedback runaway | Loud ringing, distortion | Add limiter, reduce feedback |
| CPU overload | Dropouts, can't play project | Freeze tracks, reduce voices |
| Phase chaos | Mix falls apart in mono | Check mono compatibility regularly |

---

**Version:** 1.0
**Last Updated:** 2026-02-03
