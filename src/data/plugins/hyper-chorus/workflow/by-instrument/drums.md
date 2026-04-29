# Instrument: Drums

## Overview
Hyper Chorus on drums requires careful application to preserve transient punch while adding width to appropriate elements.

## When to Use on Drums

### DO Use For:
- Hi-hats and cymbals (upper frequency width)
- Snare/clap thickening (careful with HP)
- Drum bus parallel processing (controlled)
- Drum samples needing width

### DON'T Use For:
- Kick drums (phase issues, loses punch)
- 808s/sub bass (always keep mono)
- Full drum bus insert (unless very subtle)

---

## Workflow 1: Hi-Hat Width

**Goal:** Add stereo width and shimmer to hi-hats

### Routing
- Insert on hi-hat channel OR
- Send/return for multiple hat layers

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 4 | Clean width |
| Pad 1 | X=40%, Y=20% | Tight, no resonance |
| Pad 2 | X=35%, Y=35% | Moderate movement |
| Pad 3 | X=50%, Y=35% | Active stereo field |
| HP | 300Hz | Removes all low content |
| LP | 100% | Full shimmer |
| Wet/Dry | 30% | Present but not overwhelming |

### What to Listen For
- Increased stereo spread on hats
- No low-frequency content in chorus
- Shimmer and air preserved

### Vibe Mapping
- **Upbeat:** Increase Pad 3 for active movement
- **Psychedelic:** Increase modulation and auto-pan
- **Vibey:** Add slight noise (5%)

---

## Workflow 2: Snare/Clap Thickener

**Goal:** Add body and width to snare or clap

### Routing
- Parallel processing recommended
- Or send/return with careful blending

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 4 or 8 | 4 for punch, 8 for thickness |
| Pad 1 | X=35%, Y=25% | Medium delay, slight resonance |
| Pad 2 | X=30%, Y=30% | Subtle detuning |
| Pad 3 | X=40%, Y=30% | Gentle width |
| HP | 200Hz | Protects body, removes sub |
| LP | 100% | Full character |
| Wet/Dry | 25% (insert) or 30% (parallel blend) |

### What to Listen For
- Snare gains width and character
- Transient remains punchy
- Body thickens without mud

### Variation: Aggressive Snare
- Voices: 8
- Pad 2: 50% X (more detuning)
- Wet: 35%
- Use for: Trap snares, aggressive styles

---

## Workflow 3: Drum Bus Parallel Width

**Goal:** Add overall drum width while preserving kick punch

### Routing
1. Create parallel drum bus
2. Hyper Chorus on parallel bus, 100% wet
3. Blend with dry drum bus

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 4 | Cleaner on full kit |
| Pad 1 | X=35%, Y=20% | Tight processing |
| Pad 2 | X=30%, Y=30% | Moderate movement |
| Pad 3 | X=45%, Y=35% | Active stereo |
| HP | 300Hz | Protects kick entirely |
| LP | 100% | Full range above HP |
| Wet/Dry | 100% | Blend externally |

### Blending
- Start with parallel channel at -inf
- Gradually bring up until width appears
- Typically 20-30% of parallel signal
- Keep kick punch intact

### What to Listen For
- Hats and snare gain width
- Kick remains centered and punchy
- Overall drum sound bigger

---

## Workflow 4: Sample Chop Unification

**Goal:** Unify disparate drum samples with cohesive width

### Routing
- Send/return setup
- Route all drum samples to chorus send

### Settings
| Parameter | Value | Why |
|-----------|-------|-----|
| Voices | 8 | Maximum unification |
| Pad 1 | X=40%, Y=25% | Medium settings |
| Pad 2 | X=35%, Y=30% | Moderate movement |
| Pad 3 | X=40%, Y=30% | Stereo width |
| HP | 250Hz | Consistent low cut |
| Wet/Dry | 25% on send | Unified character |

### What to Listen For
- Different samples blend together
- Cohesive spatial field
- Maintained individual character

---

## Mini-Recipes

### Recipe 1: Trap Hat Width
- HP: 400Hz (very clean)
- Pad 3: 60% X, 40% Y (active)
- Voices: 4
- Wet: 35%
- Vibe: Upbeat

### Recipe 2: Lo-Fi Drum Texture
- HP: 300Hz
- LP: 10kHz
- Noise: 12%
- Voices: 8
- Wet: 30%
- Vibe: Vibey

### Recipe 3: Roomy Snare
- HP: 180Hz
- Pad 1: 45% X (more delay)
- Pad 2: 25% Y (slower)
- Voices: 8
- Wet: 28%
- Vibe: Moody

---

## Automation Ideas

### 1. Fill Emphasis
- Increase wet on drum fills
- Return to normal after fill
- Adds excitement

### 2. Section Contrast
- Verses: Minimal chorus (15%)
- Choruses: Full chorus (30%)
- Creates build naturally

### 3. Auto-Pan Hats
- Use Pad 3 for hat movement
- Medium speed for groove
- Adds life to static patterns

---

## Common Pitfalls

| Pitfall | Problem | Solution |
|---------|---------|----------|
| **Chorus on kick** | Phase issues, weak kick | Never chorus kick drums |
| **Too much wet** | Washed out drums | Keep under 30% |
| **HP too low** | Muddy drum sound | Minimum 200Hz on drums |
| **8 voices on full kit** | CPU + phase chaos | Use 4 voices for drum bus |
| **Fast modulation** | Unstable groove | Keep Pad 2 Y moderate |

---

## Genre Considerations

### Hip-Hop/Trap
- Focus on hats and snare
- Parallel processing preferred
- Clean, modern sound
- HP: 250Hz+

### Lo-Fi Hip-Hop
- Can use on more elements
- Embrace texture and noise
- LP filter engaged
- Vibey character

### Pop/R&B
- Subtle application
- Preserve punch at all costs
- Clean, controlled width
- Send/return setup

---

**Version:** 1.0
**Last Updated:** 2026-02-03
