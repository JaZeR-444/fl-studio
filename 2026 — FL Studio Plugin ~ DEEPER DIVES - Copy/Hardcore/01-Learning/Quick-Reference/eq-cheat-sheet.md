# Master 8-Band EQ Cheat Sheet

Quick reference for the master graphic EQ section in Hardcore. [SRC: IL-MAN]

## EQ Bands Overview

Hardcore's master section includes an 8-band graphic EQ for final tone shaping before the cabinet simulation.

```
Band 1: 60 Hz      → Sub-bass / low-end foundation
Band 2: 170 Hz     → Bass punch / kick body
Band 3: 310 Hz     → Low-mids / warmth / mud
Band 4: 600 Hz     → Low-mids / body / honk control
Band 5: 1 kHz      → Mids / presence / vocal clarity
Band 6: 3 kHz      → Upper-mids / attack / presence
Band 7: 6 kHz      → High-mids / bite / sibilance
Band 8: 12 kHz     → Highs / air / brightness
```

## Quick Start Presets

### Hip-Hop Drum Bus
```
Band 1 (60Hz):   +2 dB   → Sub reinforcement
Band 2 (170Hz):  +3 dB   → Kick punch
Band 3 (310Hz):  -2 dB   → Remove mud
Band 4 (600Hz):  0 dB    → Keep neutral
Band 5 (1kHz):   +1 dB   → Snare body
Band 6 (3kHz):   +2 dB   → Attack clarity
Band 7 (6kHz):   0 dB    → Keep neutral
Band 8 (12kHz):  +1 dB   → Air and presence
```
**Result:** Punchy, clear drums with controlled lows and defined highs.

### Rap Vocal Clarity
```
Band 1 (60Hz):   -3 dB   → Remove rumble
Band 2 (170Hz):  -2 dB   → Reduce boominess
Band 3 (310Hz):  -1 dB   → Tighten lows
Band 4 (600Hz):  0 dB    → Keep body
Band 5 (1kHz):   +2 dB   → Presence boost
Band 6 (3kHz):   +3 dB   → Clarity and intelligibility
Band 7 (6kHz):   -2 dB   → De-ess (reduce sibilance)
Band 8 (12kHz):  +2 dB   → Air and sheen
```
**Result:** Clear, present vocals that cut through the mix.

### Lo-Fi Dust
```
Band 1 (60Hz):   -4 dB   → Remove sub
Band 2 (170Hz):  0 dB    → Keep some bass
Band 3 (310Hz):  +2 dB   → Add warmth/mud
Band 4 (600Hz):  +1 dB   → Mid push
Band 5 (1kHz):   0 dB    → Keep neutral
Band 6 (3kHz):   -3 dB   → Reduce clarity
Band 7 (6kHz):   -4 dB   → Reduce brightness
Band 8 (12kHz):  -6 dB   → Heavy air cut
```
**Result:** Warm, rolled-off, vintage character.

### Bass Guitar Focus
```
Band 1 (60Hz):   +3 dB   → Sub-bass weight
Band 2 (170Hz):  +2 dB   → Low-mid punch
Band 3 (310Hz):  0 dB    → Neutral
Band 4 (600Hz):  -3 dB   → Remove honk
Band 5 (1kHz):   0 dB    → Neutral
Band 6 (3kHz):   +2 dB   → Pick attack
Band 7 (6kHz):   +1 dB   → String clarity
Band 8 (12kHz):  -2 dB   → Tame harshness
```
**Result:** Full, punchy bass with controlled mids and defined attack.

### Synth Wide
```
Band 1 (60Hz):   +2 dB   → Weight
Band 2 (170Hz):  0 dB    → Neutral
Band 3 (310Hz):  -2 dB   → Remove mud
Band 4 (600Hz):  -1 dB   → Slight scoop
Band 5 (1kHz):   0 dB    → Neutral
Band 6 (3kHz):   +2 dB   → Presence
Band 7 (6kHz):   +3 dB   → Sparkle
Band 8 (12kHz):  +4 dB   → Maximum air
```
**Result:** Wide, bright, spacious synth tone.

## Problem Solving with EQ

### Fix: Boomy/Kick Drum Overpowering
```
Cut: Band 2 (170Hz) -3 to -4 dB
Cut: Band 1 (60Hz) -2 dB (if too sub-heavy)
```

### Fix: Harsh/Sibilant Vocals
```
Cut: Band 7 (6kHz) -3 to -4 dB
Cut: Band 6 (3kHz) -2 dB (if still harsh)
```

### Fix: Muddy/Low-End Buildup
```
Cut: Band 3 (310Hz) -3 to -4 dB
Cut: Band 4 (600Hz) -2 dB
High-pass in stompbox EQ if needed
```

### Fix: Thin/Weak Drums
```
Boost: Band 1 (60Hz) +2 to +3 dB
Boost: Band 2 (170Hz) +2 to +4 dB
Boost: Band 6 (3kHz) +2 dB for attack
```

### Fix: Boxy/Cardboard Sound
```
Cut: Band 4 (600Hz) -2 to -3 dB
Cut: Band 3 (310Hz) -1 to -2 dB
Boost: Band 5 (1kHz) +1 dB for presence
```

## Cabinet Interaction

Remember: The master EQ feeds INTO the cabinet simulation.

**If using Cabinet 1 (Bright):**
- May need to cut 6kHz and 12kHz slightly
- Can boost 3kHz for presence without harshness

**If using Cabinet 2 (Vintage):**
- Boost 12kHz to compensate for natural rolloff
- Can be more aggressive with 60-170Hz range

**If using Cabinet 5 (Boxy):**
- Cut 310Hz and 600Hz to reduce boxiness
- Cabinet will naturally roll off highs, so don't over-boost 12kHz

## EQ Tips

**Start flat:** Begin with all bands at 0 dB, then adjust as needed.

**Cut more than boost:** Cutting problem frequencies is often more transparent than boosting everything else.

**Use narrow cuts, wide boosts:** When cutting, be surgical. When boosting, be broader for natural sound.

**Trust your ears:** Numbers are guidelines. If it sounds good, it is good.

**A/B frequently:** Toggle the EQ on/off to ensure you're improving, not just changing.

---

*Source: Image-Line FL Studio Hardcore Manual [SRC: IL-MAN]*
