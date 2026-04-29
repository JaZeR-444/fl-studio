# Preset Notes and Usage

## Essential Starter Presets

### 1. Safe Default
**File:** `Safe_Default` (create as wrapper preset)

| Parameter | Value |
|-----------|-------|
| Voices | 4 |
| Pad 1 | X=40% Y=20% |
| Pad 2 | X=35% Y=35% |
| Pad 3 | X=30% Y=25% |
| HP | 150Hz |
| LP | 100% |
| Noise | 0% |
| Wet/Dry | 25% |

**Usage:** Starting point for any source. Adjust HP and voices based on context.
**Best for:** When you don't know where to start.

---

### 2. Vocal Lead Thickener
**File:** `Vocal_Lead_Subtle`

| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 | X=30% Y=15% |
| Pad 2 | X=30% Y=25% |
| Pad 3 | X=20% Y=20% |
| HP | 300Hz |
| LP | 100% |
| Noise | 0% |
| Wet/Dry | 25% (send) |

**Usage:** Place on send/return. Route lead vocal to send at 20-30% level.
**Best for:** Lead vocals needing natural thickening without obvious effect.
**Notes:** Keep modulation subtle to avoid seasick pitch wobble.

---

### 3. Background Vocal Ensemble
**File:** `Vocal_Background_Ensemble`

| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 | X=40% Y=25% |
| Pad 2 | X=50% Y=35% |
| Pad 3 | X=40% Y=30% |
| HP | 250Hz |
| LP | 100% |
| Noise | 0% |
| Wet/Dry | 40% (send) |

**Usage:** Dedicated send for backing vocals. Can use higher wet level than leads.
**Best for:** Creating choir-like ensemble from multiple backing tracks.
**Notes:** Blend multiple backing vox through this send for unified character.

---

### 4. Supersaw Classic
**File:** `Synth_Supersaw_Classic`

| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 | X=60% Y=30% |
| Pad 2 | X=75% Y=50% |
| Pad 3 | X=50% Y=35% |
| HP | 100Hz |
| LP | 100% |
| Noise | 0% |
| Wet/Dry | 35% |

**Usage:** Insert on sawtooth synth leads. Instant trance supersaw.
**Best for:** EDM leads, trance, big room synths.
**Notes:** Works best on simple waveforms (saw, square) not complex wavetables.

---

### 5. Drum Bus Parallel
**File:** `Drum_Bus_Parallel`

| Parameter | Value |
|-----------|-------|
| Voices | 4 |
| Pad 1 | X=35% Y=20% |
| Pad 2 | X=35% Y=30% |
| Pad 3 | X=45% Y=35% |
| HP | 300Hz |
| LP | 100% |
| Noise | 0% |
| Wet/Dry | 100% |

**Usage:** Place on parallel drum bus. Blend with dry drum bus.
**Best for:** Adding width to snare/claps/hats while preserving kick punch.
**Notes:** Wet/Dry at 100% because you'll blend via parallel routing.

---

### 6. Pad Atmosphere
**File:** `Pad_Ambient`

| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 | X=50% Y=25% |
| Pad 2 | X=50% Y=25% |
| Pad 3 | X=60% Y=30% |
| HP | 200Hz |
| LP | 100% |
| Noise | 5% |
| Wet/Dry | 40% |

**Usage:** Insert on pad/sustain channels.
**Best for:** Adding movement and width to static pads.
**Notes:** Automate Pad 2 and Pad 3 over time for evolving textures.

---

### 7. Dimension D Style
**File:** `Dimension_D_Subtle`

| Parameter | Value |
|-----------|-------|
| Voices | 4 |
| Pad 1 | X=30% Y=0% |
| Pad 2 | X=20% Y=35% |
| Pad 3 | X=0% Y=0% |
| HP | 100Hz |
| LP | 100% |
| Noise | 0% |
| Wet/Dry | 30% |

**Usage:** Subtle spatial enhancement on any source.
**Best for:** Master bus subtle widening (use cautiously), acoustic sources.
**Notes:** Mimics Roland Dimension D character—width without obvious chorus.

---

### 8. Lo-Fi Texture
**File:** `LoFi_Texture`

| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 | X=50% Y=35% |
| Pad 2 | X=45% Y=40% |
| Pad 3 | X=30% Y=25% |
| HP | 200Hz |
| LP | 10kHz |
| Noise | 15% |
| Wet/Dry | 35% |

**Usage:** On samples, digital synths, or clean sources needing character.
**Best for:** Lo-fi hip-hop, bedroom pop, vintage emulation.
**Notes:** Noise + LP filter create analog/vintage character.

---

### 9. Auto-Pan Only
**File:** `AutoPan_Clean`

| Parameter | Value |
|-----------|-------|
| Voices | 4 |
| Pad 1 | X=10% Y=0% |
| Pad 2 | X=5% Y=10% |
| Pad 3 | X=70% Y=40% |
| HP | 100Hz |
| LP | 100% |
| Noise | 0% |
| Wet/Dry | 40% |

**Usage:** Stereo movement without detuning.
**Best for:** Clean auto-panning when you don't want chorus character.
**Notes:** Adjust Pad 3 X/Y for different pan patterns.

---

### 10. Metallic Resonance (FX)
**File:** `FX_Metallic_Resonance`

| Parameter | Value |
|-----------|-------|
| Voices | 8 |
| Pad 1 | X=70% Y=80% |
| Pad 2 | X=50% Y=40% |
| Pad 3 | X=40% Y=30% |
| HP | 300Hz |
| LP | 8kHz |
| Noise | 10% |
| Wet/Dry | 50% |

**Usage:** Experimental FX, transitions, sound design.
**Best for:** Creating ringing, metallic textures.
**Notes:** USE LIMITER AFTER PLUGIN. High feedback can cause runaway.

---

## Usage Notes by Context

### On Sends vs Inserts

**Send/Return (Recommended for most):**
- Multiple sources share character
- Consistent spatial field
- Lower CPU usage
- Easier to adjust global amount

**Insert (Specific use cases):**
- Source-specific processing
- Parallel blending with dry
- When you need 100% wet for creative effect

### Pre-Fader vs Post-Fader Sends

**Post-Fader (Default):**
- Chorus amount follows channel fader
- Maintains balance when adjusting levels
- Use for: Most applications

**Pre-Fader:**
- Chorus amount independent of channel fader
- Effect stays constant even if source turned down
- Use for: Special FX that must remain audible

### Dry/Wet Strategy

| Context | Wet Amount | Reasoning |
|---------|------------|-----------|
| Lead vocal (insert) | 15-25% | Support, don't distract |
| Background vocal (send) | 30-45% | More effect acceptable |
| Synth lead | 25-35% | Character enhancement |
| Pad/Atmosphere | 35-50% | Effect is the feature |
| Drum parallel | 100% | Blend controlled externally |
| FX/Experimental | 50-100% | Effect is the point |

---

## Preset Testing Protocol

Before finalizing a preset:

1. **Test on multiple sources** of the intended type
2. **Check mono compatibility** using Fruity Stereo Enhancer
3. **Verify CPU usage** with 8 voices across multiple instances
4. **Test in context** with other mix elements playing
5. **Document** what works and what doesn't

---

**Version:** 1.0
**Last Updated:** 2026-02-03
