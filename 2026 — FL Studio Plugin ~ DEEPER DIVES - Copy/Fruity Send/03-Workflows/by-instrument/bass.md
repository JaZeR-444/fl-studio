# Fruity Send - Bass Routing Workflows

## Core Bass Routing for Hip-Hop/Trap/R&B

**Key principles:**
- Extract clean sub-bass for control
- Parallel saturation for harmonic richness
- Minimal reverb/delay (keep low end tight)

[SRC: REPUTABLE - bass mixing]

---

## Workflow 1: Sub-Bass Extraction (Clean + Saturated)

**Routing:**
- Track 1: Bass (processed, midrange punch)
- Track 2: Sub-Bass DI (clean low end)

**Track 1 Setup:**
- **Slot 1:** Fruity Send → Track 2, Volume 100%, Dry 100%
- **Slot 2:** Fruity Parametric EQ 2 (High Pass @ 80-100 Hz)
- **Slot 3:** Fruity Fast Dist (Tube, Pre 20-30%) for harmonic richness

**Track 2 (Sub-Bass DI):**
- Fruity Parametric EQ 2: Low Pass @ 90 Hz, Boost @ 50-60 Hz +2dB
- Fruity Soft Clipper: Threshold -6dB
- Fruity Stereo Shaper: Stereo Separation 0% (mono)
- Fader: -15 to -18 dB

**Result:** Track 1 has midrange punch; Track 2 has controlled sub.

[SRC: REPUTABLE - bass/sub separation]

---

## Workflow 2: Parallel Saturation for Thickness

**Routing:**
- Track 1: Bass
- Track 2: Bass Saturation Bus

**Track 1 Setup:**
- Slot 1: **Fruity Send** → Track 2, Volume 100%, Dry 100%

**Track 2 (Saturation Bus):**
- Fruity WaveShaper: Preset "Warm Tube" or custom curve
- Fruity Parametric EQ 2: Low Cut @ 120 Hz, Boost @ 800 Hz +3dB (harmonics)
- Fader: -18 to -22 dB (subtle blend)

**Result:** Bass has clean fundamental + warm harmonics.

[SRC: REPUTABLE - bass saturation]

---

## Workflow 3: Bass Reverb (Rare, Creative Use)

**Goal:** Add subtle space to bass (use sparingly).

**Routing:**
- Track 1: Bass
- Track 2: Bass Reverb (very short, very EQ'd)

**Track 1 Setup:**
- Slot 1: **Fruity Send** → Track 2, Volume 30%, Dry 100%

**Track 2:**
- Fruity Reeverb 2: Small Room, Size 25%, Damping 80%, Wet 100%
- Fruity Parametric EQ 2: **Low Cut @ 500 Hz** (only reverb upper harmonics)
- Fader: -20 dB

**Result:** Bass has subtle "air" without mud.

**Caution:** Use only on melodic bass; avoid on sub-bass.

[SRC: REPUTABLE - creative bass processing]

---

## Quick Bass Send Reference

| Technique | Send Volume | Destination | Blend Level | Notes |
|-----------|-------------|-------------|-------------|-------|
| **Sub extraction** | 100% | Low Pass EQ + Clipper | -15 dB | Keep mono |
| **Parallel saturation** | 100% | WaveShaper/Dist | -20 dB | Subtle harmonics |
| **Reverb (rare)** | 30% | Small Room + High Pass | -20 dB | Upper harmonics only |

---

**Moody:** Increase saturation blend to -15 dB for heavier, grittier bass.  
**Upbeat:** Keep bass clean and tight; minimal sends.

**Next:** See `pads.md` for pad/synth routing.
